import lark
import re
import csv
import datetime
from .data_types import *
import json
import os
import uuid
import logging
import random
import tqdm
from .utils import convert_to_native_types
from .filesystem import LocalFilesystem

GRAMMAR = """
start: variable_expr | variable_list

time_index: EVERY atom [time_bounds]            -> periodic_time_index // periodic time literal
    | ATEVERY atom [time_bounds]  -> event_time_index
    | AT OPENPAREN expr (COMMA expr)* CLOSEPAREN             -> array_time_index

time_bounds: FROM expr TO expr              -> time_bounds_both_ends
    | BEFORE expr                              -> time_bounds_upper
    | AFTER expr                               -> time_bounds_lower
    | AT expr                               -> time_bounds_instant

variable_list: variable_expr
    | OPENPAREN variable_expr (COMMA variable_expr)* CLOSEPAREN
variable_expr: [named_variable] expr
named_variable: (/[A-Za-z][^:]*/i | VAR_NAME) ":"

// Expression Parsing
 
case_when: "WHEN"i expr "THEN"i expr

agg_method: VAR_NAME AGG_OPTIONS* AGG_TYPE?
AGG_TYPE: "rate"i|"amount"i|"value"i|"duration"i
AGG_OPTIONS: "distinct"i|"nonnull"i

?cut_names: NAMED value_list
?cut_expr: LITERAL CUT_TYPE [cut_names]        -> auto_cut
    | CUT_TYPE value_list [cut_names]          -> manual_cut
CUT_TYPE: /bins?/i|/quantiles?/i

?expr: variable_list time_index             -> time_series
    | expr WHERE expr                    -> where_clause
    | expr CARRY (time_quantity | step_quantity)  -> carry_clause
    | expr IMPUTE (expr | MEAN | MEDIAN)            -> impute_clause
    | expr WITH VAR_NAME "AS"i logical   -> with_clause
    | expr CUT cut_expr                  -> cut_clause
    | logical
    
?logical: logical "AND"i negation                -> logical_and
    | logical "OR"i negation                  -> logical_or
    | negation

?negation: "NOT"i negation                        -> negate
    | comparison

?comparison: comparison ">=" agg_expr                   -> geq
    | comparison "<=" agg_expr                   -> leq
    | comparison ">" agg_expr                    -> gt
    | comparison "<" agg_expr                    -> lt
    | comparison "=" agg_expr                    -> eq
    | comparison "BETWEEN"i agg_expr "AND"i agg_expr  -> between
    | comparison "CONTAINS"i agg_expr  -> contains
    | comparison "STARTSWITH"i agg_expr  -> startswith
    | comparison "ENDSWITH"i agg_expr  -> endswith
    | comparison ("!="|"<>") agg_expr            -> ne
    | comparison "IN"i value_list            -> isin
    | comparison "NOT"i "IN"i value_list            -> isnotin
    | agg_expr

?agg_expr: agg_method expr time_bounds
    | sum

?sum: sum "+" product                       -> expr_add
    | sum "-" product                       -> expr_sub
    | product

?product: product "*" exponent                      -> expr_mul
    | product "/" exponent                      -> expr_div
    | exponent

?exponent: exponent "^" atom                      -> expr_pow
    | atom

value_list: (OPENPAREN|OPENBRACK) LITERAL (COMMA LITERAL)* (CLOSEPAREN|CLOSEBRACK)

atom: VAR_NAME OPENPAREN expr (COMMA expr)* CLOSEPAREN                 -> function_call
    | data_element_query ["AS"i UNIT]                   -> data_element
    | time_quantity
    | LITERAL                               -> literal
    | NOW                                -> now 
    | VALUE                              -> where_value
    | MINTIME                              -> min_time
    | MAXTIME                              -> max_time
    | INDEXVALUE                            -> index_value
    | CASE (case_when)+ ELSE expr END -> case_expr     // if/else
    | expr "AS"i UNIT                      -> unit_expr
    | OPENPAREN expr CLOSEPAREN            -> paren_expr
    | VAR_NAME                               -> var_name

time_quantity: LITERAL UNIT
step_quantity: LITERAL /steps?/i
UNIT: /years?|days?|hours?|minutes?|seconds?|yrs?|hrs?|mins?|secs?|[hmsdy]/i

?data_element_query: OPENBRACE data_element_query_el (";" data_element_query_el)* CLOSEBRACE -> data_element_query_list
?data_element_query_el: /id|name|type|value|scope/i ("="|"EQUALS"i) (QUOTED_STRING | VAR_NAME | SIGNED_NUMBER)   -> data_element_eq
    | /id|name|type|value|scope/i ("IN"i) value_list                       -> data_element_in
    | /id|name|type|value|scope/i PATTERN_CMD LITERAL -> data_element_pattern
    | /(?!id|name|type|value|scope)[^};'"`]+/i -> data_element_query_basic
    
PATTERN_CMD: "MATCHES"i|"CONTAINS"i|"STARTSWITH"i|"ENDSWITH"i
DATA_NAME: /\{[^}]*\}/
VAR_NAME: /(?!(and|or|not|case|when|else|in|then|every|at|from|to|with|as)\b)[A-Za-z][A-Za-z0-9_]*/ 

NOW: "#NOW"i
VALUE: "#VALUE"i
MINTIME: "#MINTIME"i
MAXTIME: "#MAXTIME"i
INDEXVALUE: "#INDEXVALUE"i
CASE: "CASE"i
END: "END"i
ELSE: "ELSE"i
EVERY: "EVERY"i
ATEVERY: "AT EVERY"i
AT: "AT"i
BEFORE: "BEFORE"i
AFTER: "AFTER"i
FROM: "FROM"i
TO: "TO"i
MEAN: "MEAN"i
MEDIAN: "MEDIAN"i
NAMED: "NAMED"i
WHERE: "WHERE"i
CARRY: "CARRY"i
IMPUTE: "IMPUTE"i
WITH: "WITH"i
CUT: "CUT"i

LITERAL: SIGNED_NUMBER | QUOTED_STRING | /-?inf(inity)?/i | /\\/(?!\\/)(\\\\\/|\\\\\\\|[^\\/])*?\\/i?/
QUOTED_STRING: /["'`][^"'`]*["'`]/

OPENPAREN: "("
CLOSEPAREN: ")"
OPENBRACK: "["
CLOSEBRACK: "]"
OPENBRACE: "{"
CLOSEBRACE: "}"
COMMA: ","

%import common (WORD, WS, SIGNED_NUMBER, LETTER)

%ignore WS
"""

DATA_TYPE_COALESCE = {
    "attr": "attribute",
    "event": "event",
    "interval": "interval",
    "attribute": "attribute",
    "attributes": "attribute",
    "events": "event",
    "intervals": "interval"
}

class EvaluateQuery(lark.visitors.Interpreter):
    def __init__(self, dataset, variable_transform=None, eventtype_macros=None, variable_stores=None, cache=None, verbose=False, update_fn=None):
        super().__init__()
        self.dataset = dataset
        self.cache = cache
        self.eventtype_macros = eventtype_macros if eventtype_macros is not None else {}
        self.variable_stores = variable_stores
        self.update_fn = update_fn
        # If provided, this should be a tuple of (description, transform_fn, restore_fn). The
        # description should be a string uniquely identifying this transform,
        # and transform should be a function that will be called on any variable 
        # expressions before saving to cache. The function should
        # take as input a TimeSeriesQueryable, and it should return either a 
        # tuple (transformed, info). The info will be stored in the cache. If the
        # query result is retrieved from the cache, the restore_fn will be called
        # with two arguments, the stored TimeSeriesQueryable and the stored info,
        # and it should return a restored version of the time series object.
        if variable_transform is not None:
            self.variable_transform_desc, self.variable_transform, self.variable_restore = variable_transform
        else:
            self.variable_transform_desc = None
            self.variable_transform = None
            self.variable_restore = None
        self.verbose = verbose
        self._logging_subqueries = False
        self._subqueries = {}
        
        self.time_index = None
        self.value_placeholder = None
        self.index_value_placeholder = None
        self.variables = {}
        self._all_ids = None
        self._mintimes = None
        self._maxtimes = None
        
    def _log_subquery(self, subtree, subresult, **kwargs):
        """Logs information about the given subquery and returns the subquery result."""
        if not self._logging_subqueries: return subresult
        self._subqueries[subtree] = { **self._subqueries.get(subtree, {}), "result": subresult, **kwargs }
        return subresult
                
    def get_all_ids(self):
        if self._all_ids is not None: return self._all_ids
        self._all_ids = self.dataset.get_ids()
        return self._all_ids
        
    
    def data_element_query_basic(self, tree):
        query = tree.children[0]
        if query in self.eventtype_macros:
            query = self.eventtype_macros[query].strip()
        if "," in query:
            query = list(csv.reader([query], skipinitialspace=True))[0]
            # Substitute macros again
            query = [x.strip() for el in query for x in self.eventtype_macros.get(el, el).split(",")]
        if isinstance(query, list):
            return {"name": ("in", query)}
        return {"name": ("equals", query)}

    def data_element_query_list(self, tree):
        return {k: v for child in tree.children[1:-1] for k, v in self.visit(child).items()}
        
    def data_element_eq(self, tree):
        field, value_spec = tree.children
        if field.lower() not in ("id", "name", "type", "scope", "value"):
            raise ValueError(f"Unknown field specifier for data element query '{field}'")
        return {field.lower(): ("equals", self._parse_literal(value_spec) if value_spec.type in ("LITERAL", "QUOTED_STRING", "SIGNED_NUMBER") else value_spec.value)}
    
    def data_element_in(self, tree):
        field, value_spec = tree.children
        if field.lower() not in ("id", "name", "type", "scope", "value"):
            raise ValueError(f"Unknown field specifier for data element query '{field}'")
        if field.lower() in ("value", "scope", "type"):
            raise ValueError(f"'in' queries cannot be used with '{field}' field specifier")
        return {field.lower(): ("in", self.visit(value_spec))}
    
    def data_element_pattern(self, tree):
        field, relation, value_spec = tree.children
        if field.lower() not in ("id", "name", "type", "scope", "value"):
            raise ValueError(f"Unknown field specifier for data element query '{field}'")
        if field.lower() in ("value", "scope", "type"):
            raise ValueError(f"Pattern-based queries cannot be used with '{field}' field specifier")
        return {field.lower(): (relation.lower(), self._parse_literal(value_spec))}

    def data_element(self, tree):
        el_query = self.visit(tree.children[0])
        requested_type = el_query.get("type", (None, None))[1]
        if requested_type is not None:
            if requested_type not in DATA_TYPE_COALESCE:
                raise ValueError(f"Unknown data type '{requested_type}'; must be attribute, event, interval, or similar")
            requested_type = DATA_TYPE_COALESCE[requested_type]
            
        if requested_type is not None and not el_query.get("id", None) and not el_query.get("name", None):
            # empty element of the given type
            if requested_type == "attribute":
                return Attributes(pd.Series([], dtype=float, name=f"{uuid.uuid4()}"))
            elif requested_type == "event":
                return Events(pd.DataFrame({
                    'id': pd.Series([], dtype=int),
                    'time': pd.Series([], dtype=int),
                    'eventtype': pd.Series([], dtype=str),
                    'value': pd.Series([], dtype=float)
                }))
            elif requested_type == "interval":
                return Intervals(pd.DataFrame({
                    'id': pd.Series([], dtype=int),
                    'starttime': pd.Series([], dtype=int),
                    'endtime': pd.Series([], dtype=int),
                    'intervaltype': pd.Series([], dtype=str),
                    'value': pd.Series([], dtype=float)
                }))

        value = self.dataset.get_data_element(
            scope=el_query.get("scope", (None, None))[1],
            data_type=requested_type,
            concept_id_query=el_query.get("id", None),
            concept_name_query=el_query.get("name", None),
            value_field=el_query.get("value", (None, None))[1],
            return_queries=self._logging_subqueries)
        
        if self._logging_subqueries:
            value, queries = value
        else:
            queries = None
                
        if len(tree.children) > 1 and tree.children[1]:
            value /= Duration(1, tree.children[1])
        return self._log_subquery(tree, value, dataset_queries=queries)
        
    def var_name(self, tree):
        # first process local variables
        var_name = tree.children[0]
        if var_name in self.variables:
            return self._log_subquery(tree, self.variables[var_name])
        # then process external variables in order
        if self.variable_stores is not None:
            for store in self.variable_stores:
                print("Checking store", store, var_name)
                if var_name in store: return self._log_subquery(tree, store[var_name])
        raise KeyError(f"No variable named {var_name}")
        
    def time_quantity(self, tree):
        return Duration(self._parse_literal(tree.children[0]), tree.children[1])
        
    def time_bounds(self, tree):
        start, end = self.visit(tree.children[1]), self.visit(tree.children[3])
        if isinstance(start, Compilable):
            start = start.execute()
        if isinstance(end, Compilable):
            end = end.execute()
            
        # If either the start or end are Events, this creates an implicit
        # time index (overriding the initial one).
        if isinstance(start, Events) or isinstance(end, Events):
            if isinstance(start, Events) and isinstance(end, Events):
                if len(start.get_values()) != len(end.get_values()):
                    raise ValueError(f"Event sets used for aggregation bounds must be same length")
                new_index = TimeIndex.from_events(start)
                start = new_index
                end = TimeIndex.from_events(end)
            elif isinstance(start, Events):
                new_index = TimeIndex.from_events(start)
                start = new_index
                end = start.with_times(make_aligned_value_series(start, end))
            elif isinstance(end, Events):
                new_index = TimeIndex.from_events(end)
                end = new_index
                start = end.with_times(make_aligned_value_series(end, start))
        else:
            # Broadcast and convert to TimeIndex if needed
            if isinstance(start, TimeIndex) and not isinstance(end, TimeIndex):
                end = TimeIndex(pd.DataFrame({
                    start.id_field: start.get_ids(), 
                    start.time_field: make_aligned_value_series(start, end)
                }), id_field=start.id_field, time_field=start.time_field)
            elif isinstance(end, TimeIndex) and not isinstance(start, TimeIndex):
                start = TimeIndex(pd.DataFrame({
                    end.id_field: end.get_ids(), 
                    end.time_field: make_aligned_value_series(end, start)
                }), id_field=end.id_field, time_field=end.time_field)
            elif isinstance(start, Attributes) and isinstance(end, Attributes):
                if self.time_index is not None:
                    start = self.time_index.with_times(make_aligned_value_series(self.time_index, start))
                    end = self.time_index.with_times(make_aligned_value_series(self.time_index, end))
                else:
                    start = TimeIndex.from_attributes(start)
                    end = TimeIndex.from_attributes(end)
            elif isinstance(start, Attributes) and not isinstance(end, Attributes):
                if self.time_index is not None:
                    start = self.time_index.with_times(make_aligned_value_series(self.time_index, start))
                else:
                    start = TimeIndex.from_attributes(start)
                end = start.with_times(make_aligned_value_series(start, end))
            elif isinstance(end, Attributes) and not isinstance(start, Attributes):
                if self.time_index is not None:
                    end = self.time_index.with_times(make_aligned_value_series(self.time_index, end))
                else:
                    end = TimeIndex.from_attributes(end)
                start = end.with_times(make_aligned_value_series(end, start))
            new_index = None
            
        return (start, end, new_index)
    
    def time_bounds_both_ends(self, tree):
        return self.time_bounds(tree)
    
    def time_bounds_upper(self, tree):
        start, end, new_index = self.time_bounds(lark.Tree('', [lark.Token('', ''), 
                                                                self.min_time(lark.Tree('', [])),
                                                                lark.Token('', ''),
                                                                self.visit(tree.children[1])]))
        return start, self._perform_binary_numpy_function([start, end], "max", np.maximum), new_index
    
    def time_bounds_lower(self, tree):
        start, end, new_index = self.time_bounds(lark.Tree('', [lark.Token('', ''),
                                                                self.visit(tree.children[1]), 
                                                                lark.Token('', ''),
                                                                self.max_time(lark.Tree('', []))]))
        return self._perform_binary_numpy_function([start, end], "min", np.minimum), end, new_index

    def time_bounds_instant(self, tree):
        times = self.visit(tree.children[0])
        return self.time_bounds(lark.Tree('', [lark.Token('', ''), times, lark.Token('', ''), times]))
    
    def _parse_literal(self, literal):
        if literal.startswith('/'):
            # Parse as a regex
            pattern = re.match(r'^/(.*)/(i?)', literal)
            if pattern is None:
                raise ValueError(f"Cannot parse regular expression from literal {literal}")
            return re.compile(pattern.group(1), flags=re.I if "i" in pattern.group(2) else 0)
        
        if re.search(r"[\"'`]", literal) is not None:
            return re.sub(r"[\"'`]", "", literal)
        try:
            amt = float(literal)
            if not np.isinf(amt) and round(amt) == amt:
                amt = int(amt)
            return amt
        except ValueError:
            raise ValueError("Literal must be either a number or quote-wrapped string")
            
    def literal(self, tree): return self._parse_literal(tree.children[0])

    def now(self, tree): 
        if self.time_index is None:
            raise ValueError(f"'now' keyword can only be used within a time-series expression, ending with an 'at'/'every'/'at every' clause.")
        return self.time_index
    def where_value(self, tree):
        if self.value_placeholder is None:
            raise ValueError(f"'value' keyword can only be used within a where clause to refer to the data being filtered.")
        return Compilable(self.value_placeholder) if self.time_index is not None else self.value_placeholder
    def index_value(self, tree):
        if self.index_value_placeholder is None:
            raise ValueError(f"'indexvalue' keyword can only be used within a time series defined with 'at every' event or interval.")
        return Compilable(self.index_value_placeholder)
    def atom(self, tree): return self.visit(tree.children[0])
    
    def unit_expr(self, tree): 
        expr, unit = tree.children
        return self.visit(expr) / Duration(1, unit)
    
    def paren_expr(self, tree):
        return self.visit(tree.children[1])
    
    def min_time(self, tree):
        if self._mintimes is not None: return self._mintimes
        self._mintimes = self.dataset.get_min_times()
        return self._mintimes
    
    def max_time(self, tree): 
        if self._maxtimes is not None: return self._maxtimes
        self._maxtimes = self.dataset.get_max_times()
        return self._maxtimes

    def isin(self, tree):
        return self.visit(tree.children[0]).isin(self.visit(tree.children[1]))
    def isnotin(self, tree):
        return ~self.visit(tree.children[0]).isin(self.visit(tree.children[1]))
    
    def value_list(self, tree): return [self._parse_literal(v) for v in tree.children[1:-1:2]]
        
    def expr_add(self, tree): return self.visit(tree.children[0]) + self.visit(tree.children[1])
    def expr_sub(self, tree): return self.visit(tree.children[0]) - self.visit(tree.children[1])
    def expr_mul(self, tree): return self.visit(tree.children[0]) * self.visit(tree.children[1])
    def expr_div(self, tree): return self.visit(tree.children[0]) / self.visit(tree.children[1])
    def expr_pow(self, tree): return self.visit(tree.children[0]) ** self.visit(tree.children[1])
    def gt(self, tree): return self.visit(tree.children[0]) > self.visit(tree.children[1])
    def lt(self, tree): return self.visit(tree.children[0]) < self.visit(tree.children[1])
    def geq(self, tree): return self.visit(tree.children[0]) >= self.visit(tree.children[1])
    def leq(self, tree): return self.visit(tree.children[0]) <= self.visit(tree.children[1])
    def eq(self, tree): return self.visit(tree.children[0]) == self.visit(tree.children[1])
    def ne(self, tree): return self.visit(tree.children[0]) != self.visit(tree.children[1])
    def between(self, tree): return ((self.visit(tree.children[0]) >= self.visit(tree.children[1])) & 
                                     (self.visit(tree.children[0]) < self.visit(tree.children[2])))
    
    def contains(self, tree):
        base_items = self.visit(tree.children[0])
        strings = base_items.get_values().astype(str)
        return base_items.with_values(strings.str.contains(self.visit(tree.children[1])))
    def startswith(self, tree):
        base_items = self.visit(tree.children[0])
        strings = base_items.get_values().astype(str)
        return base_items.with_values(strings.str.startswith(self.visit(tree.children[1])))
    def endswith(self, tree):
        base_items = self.visit(tree.children[0])
        strings = base_items.get_values().astype(str)
        return base_items.with_values(strings.str.endswith(self.visit(tree.children[1])))
    
    def negate(self, tree): return ~self.visit(tree.children[0])
    
    def logical_and(self, tree): return self.visit(tree.children[0]) & self.visit(tree.children[1])
    def logical_or(self, tree): return self.visit(tree.children[0]) | self.visit(tree.children[1])

    def agg_expr(self, tree):
        agg_method = self.visit(tree.children[0])
        expr = self.visit(tree.children[1])
        *time_bounds, time_index = self.visit(tree.children[-1])
        has_inner_time_index = time_index is not None # if this is true, the return value will be an Events!
        if time_index is None: time_index = self.time_index
        
        if time_index is not None:
            assert len(time_bounds[0]) == len(time_index), f"Start time bounds for aggregation (length {len(time_bounds[0])}) must be equal length to overall time index (length {len(time_index)})"
            assert len(time_bounds[1]) == len(time_index), f"End time bounds for aggregation (length {len(time_bounds[1])}) must be equal length to overall time index (length {len(time_index)})"
            agg_result = None
            if isinstance(expr, TimeSeries):
                # Convert the expression to an Events
                expr = expr.to_events()
            if isinstance(expr, Events):
                agg_result = expr.bin_aggregate(time_index, *time_bounds, agg_method[0])
            elif isinstance(expr, (Intervals, Compilable)):
                agg_result = expr.bin_aggregate(time_index, *time_bounds, agg_method[1], agg_method[0])
            else:
                raise ValueError(f"Only Events and Intervals can be bin-aggregated")
            if has_inner_time_index:
                return self._log_subquery(tree, agg_result.to_events())
            return self._log_subquery(tree, agg_result)
        else:
            if isinstance(expr, (Events, TimeSeries)):
                return self._log_subquery(tree, expr.aggregate(*time_bounds, agg_method[0]))
            elif isinstance(expr, Intervals):
                result = expr.aggregate(*time_bounds, agg_method[1], agg_method[0])
                return self._log_subquery(tree, result)
            else:
                raise ValueError(f"Only Events and Intervals can be aggregated")            
        
    def agg_method(self, tree):
        results = {}
        args = [self.visit(arg) for arg in tree.children]
        for arg in args[1:]:
            results.setdefault(arg.type, []).append(arg.value)
        agg_func = args[0].value
        if "AGG_OPTIONS" in results:
            agg_func += " " + " ".join(sorted(x.lower() for x in results["AGG_OPTIONS"]))
        return (agg_func, results.get("AGG_TYPE", ["value"])[0])
        
    def case_expr(self, tree):
        args = [self.visit(arg) for arg in tree.children]
        whens = args[1:-3]
        else_clause = args[-2]
        
        if (any(isinstance(clause, Compilable) for when in whens for clause in when) or 
            isinstance(else_clause, Compilable)):
            # The entire case expression needs to be a Compilable
            whens = [tuple(Compilable(c) if not isinstance(c, Compilable) else c
                           for c in when.children) for when in whens]
            if not isinstance(else_clause, Compilable):
                else_clause = Compilable(else_clause)
            result = else_clause
            for condition, value in reversed(whens):
                result = value.where(condition, result)
            return result
        
        result = else_clause
        if isinstance(result, Duration): result = result.value()
        
        for when in reversed(whens):
            condition, value = when
            if isinstance(value, Duration): value = value.value()
            if isinstance(value, (Events, Attributes, Intervals, TimeSeries)):
                # Need to broadcast if one element is an Attributes
                if isinstance(value, Attributes) and isinstance(condition, (Events, Intervals, TimeSeries)):
                    value = condition.with_values(make_aligned_value_series(condition, value))
                elif isinstance(condition, Attributes) and isinstance(value, (Events, Intervals, TimeSeries)):
                    condition = make_aligned_value_series(value, condition)
                    
                if len(value) != len(condition):
                    raise ValueError(f"Case expression operands must be same length")
                result = value.where(condition.fillna(False).astype(bool), result)
                result = result.where(~condition.isna(), pd.NA)
            elif isinstance(result, (Events, Attributes, Intervals, TimeSeries)):
                if len(result) != len(condition):
                    raise ValueError(f"Case expression operands must be same length")
                result = result.where(~condition.fillna(False).astype(bool), value)
            elif isinstance(condition, (Attributes, Events, Intervals, TimeSeries)):
                # We need to broadcast both value and result to condition's type
                result = condition.apply(lambda x: pd.NA if pd.isna(x) else (value if x else result))
                
        return result
        
    def carry_clause(self, tree):
        # Defines how far the values in the time series should be
        # carried forward within a given ID
        var_exp = self.visit(tree.children[0])
        if isinstance(var_exp, Compilable): raise NotImplementedError("Carry forward not yet implemented for nested aggregations")
        if isinstance(tree.children[-1], lark.Tree) and tree.children[1].data == "step_quantity":
            steps = int(tree.children[-1].children[0].value)
            return var_exp.carry_forward_steps(steps)
        else:
            return var_exp.carry_forward_duration(tree.children[-1])
            
    @lark.v_args(tree=True)
    def step_quantity(self, tree):
        return tree
    
    def impute_clause(self, tree):
        # Defines how NaN values should be substituted
        var_exp = self.visit(tree.children[0])
        if isinstance(var_exp, Compilable):
            method = "constant"
            if tree.children[-1].value in ("mean", "median"):
                method = tree.children[-1].value
                constant_value = None
            else:
                constant_value = self._parse_literal(tree.children[-1].value)
            return var_exp.impute(method=method, constant_value=constant_value)
        
        nan_mask = ~var_exp.isna()
        if isinstance(tree.children[-1], lark.Token) and tree.children[-1].value in ("mean", "median"):
            impute_method = tree.children[-1].value.lower()
            numpy_func = {"mean": np.nanmean, "median": np.nanmedian}[impute_method]
            return var_exp.replace(pd.NA, np.nan).astype(np.float64).where(nan_mask, numpy_func(var_exp.get_values().replace(pd.NA, np.nan).astype(float)))
        else:
            impute_method = self.visit(tree.children[-1])
            dtype = var_exp.get_values().dtype
            if isinstance(dtype, pd.CategoricalDtype):
                var_exp = var_exp.with_values(var_exp.get_values().astype(dtype.categories.dtype))
                dtype = var_exp.get_values().dtype
            elif isinstance(impute_method, str) and pd.api.types.is_numeric_dtype(dtype):
                # convert all values to strings
                var_exp = var_exp.with_values(var_exp.get_values().astype(pd.StringDtype()))
                dtype = var_exp.get_values().dtype
            
            if hasattr(impute_method, "get_values"):
                return var_exp.with_values(var_exp.get_values().where(nan_mask, make_aligned_value_series(var_exp, impute_method).astype(dtype)))
            
            scalar = dtype.type(impute_method)
            return var_exp.with_values(var_exp.get_values().where(nan_mask, scalar))
            
    def _perform_binary_numpy_function(self, operands, function_name, numpy_func):
        if isinstance(operands[0], Compilable):
            return getattr(operands[0], function_name)(operands[1])
        if isinstance(operands[1], Compilable):
            return getattr(operands[1], function_name)(operands[0])
        elif isinstance(operands[0], TimeIndex):
            return operands[0].with_times(numpy_func(operands[0].get_times(), make_aligned_value_series(operands[0], operands[1])))
        elif isinstance(operands[1], TimeIndex):
            return operands[1].with_times(numpy_func(operands[1].get_times(), make_aligned_value_series(operands[1], operands[0])))
        if isinstance(operands[0], (Attributes, Events, Intervals, TimeSeries)):
            return operands[0].with_values(numpy_func(operands[0].get_values(), make_aligned_value_series(operands[0], operands[1])))
        elif isinstance(operands[1], (Attributes, Events, Intervals, TimeSeries)):
            return operands[1].with_values(numpy_func(operands[1].get_values(), make_aligned_value_series(operands[1], operands[0])))
        else:
            raise ValueError(f"{function_name} function requires at least one parameter to be Attributes, Events, Intervals, TimeIndex, or TimeSeries")

    def function_call(self, tree):
        function_name = tree.children[0].value.lower()
        operands = [self.visit(a) for a in tree.children[2:-1:2]]
        if function_name in ("time", "starttime", "endtime"):
            if len(operands) != 1: raise ValueError(f"{function_name} function requires exactly one argument")
            if function_name == "time":
                if isinstance(operands[0], Compilable):
                    return operands[0].time()
                if not hasattr(operands[0], "get_times"):
                    raise ValueError("time function requires an object with time values")
                return operands[0].with_values(operands[0].get_times())
            elif function_name == "starttime":
                if isinstance(operands[0], Compilable):
                    return operands[0].start().time()
                if not hasattr(operands[0], "get_start_times"):
                    raise ValueError("starttime function requires interval objects")
                return operands[0].start_events().with_values(operands[0].get_start_times())
            elif function_name == "endtime":
                if isinstance(operands[0], Compilable):
                    return operands[0].end().time()
                if not hasattr(operands[0], "get_end_times"):
                    raise ValueError("endtime function requires interval objects")
                return operands[0].end_events().with_values(operands[0].get_end_times())
        elif function_name in ("duration",):
            if len(operands) != 1: raise ValueError(f"{function_name} function requires exactly one argument")
            return (operands[0].end_events().with_values(operands[0].get_end_times())
                    - operands[0].start_events().with_values(operands[0].get_start_times()))
        elif function_name in ("start", "end"):
            if len(operands) != 1: raise ValueError(f"{function_name} function requires exactly one argument")
            if function_name == "start":
                if isinstance(operands[0], Compilable):
                    return operands[0].start()
                if not hasattr(operands[0], "get_start_times"):
                    raise ValueError("start function requires interval objects")
                return operands[0].start_events()
            elif function_name == "end":
                if isinstance(operands[0], Compilable):
                    return operands[0].end()
                if not hasattr(operands[0], "get_end_times"):
                    raise ValueError("end function requires interval objects")
                return operands[0].end_events()
        elif function_name in ("abs", ):
            if len(operands) != 1: raise ValueError(f"{function_name} function requires exactly one argument")
            return getattr(operands[0], function_name)()
        elif function_name in ("max", "min"):
            if len(operands) != 2: raise ValueError(f"{function_name} function requires exactly two arguments")
            numpy_func = np.maximum if function_name == "max" else np.minimum
            return self._perform_binary_numpy_function(operands, function_name, numpy_func)
        elif function_name in ("extract", ):
            if len(operands) not in (2, 3): raise ValueError(f"{function_name} function takes as input a series, a pattern, and optionally an index of a capturing group")
            pattern = operands[1]
            if isinstance(pattern, re.Pattern) and not pattern.groups:
                pattern = re.compile("(" + pattern.pattern + ")", flags=pattern.flags)
            return operands[0].with_values(operands[0].get_values().str.extract(pattern)[operands[2] if len(operands) > 2 else 0])
        elif function_name == "replace":
            if len(operands) != 3: raise ValueError(f"{function_name} function requires exactly three arguments")
            pattern = operands[1]
            return operands[0].with_values(operands[0].get_values().str.replace(pattern, operands[2]))
        elif function_name == "shift":
            if len(operands) != 2: raise ValueError(f"{function_name} function requires exactly two arguments")
            return operands[0].shift(operands[1])
        elif function_name in ("previous", "next"):
            if len(operands) != 1: raise ValueError(f"{function_name} function requires exactly two arguments")
            return operands[0].shift(1 if function_name == "next" else -1)
        elif function_name == "union":
            # Combine the given Events or Intervals together
            if len(operands) <= 1: raise ValueError(f"{function_name} function requires at least two arguments")
            base = operands[0]
            for operand in operands[1:]:
                base = union_data(base, operand)
            return base
        elif function_name == "intervals":
            if len(operands) != 2: raise ValueError(f"{function_name} function requires exactly two arguments")
            operands = [Events(operand.series.rename('time').reset_index().assign(eventtype=operand.name, value=None),
                               id_field=operand.series.index.name)
                        if isinstance(operand, Attributes) else operand
                        for operand in operands]
            if not isinstance(operands[0], Events) or not isinstance(operands[1], Events):
                raise ValueError(f"Both arguments to {function_name} function must be Events")
            return Intervals.from_events(*operands)
        else:
            raise ValueError(f"Unknown function '{function_name}'")

    def variable_list(self, tree):
        filtered_children = [c for c in tree.children if not isinstance(c, lark.Token) or c.type not in ("OPENPAREN", "CLOSEPAREN")]
        args = [self.visit(arg) for arg in filtered_children]
        if len(args) == 1: return args[0]
        if all(isinstance(a, Attributes) for a in args):
            return AttributeSet(pd.concat([a.series for a in args], axis=1))
        elif all(isinstance(a, TimeSeries) for a in args):
            return TimeSeriesSet.from_series(args)
        raise ValueError("Variable list must contain either all Attributes or all TimeSeries objects")
    
    def auto_cut(self, tree):
        num_bins = self.visit(tree.children[0])
        if not isinstance(num_bins, (float, int)) and int(num_bins) == num_bins:
            raise ValueError("Cut must either be followed by an integer bin count or a list of bin cutoffs")
        cut_type = tree.children[1].value
        return CutOperator(int(num_bins), cut_type, names=tree.children[3] if len(tree.children) > 3 else None)
    
    def manual_cut(self, tree):
        cut_type = tree.children[0].value
        bins = self.visit(tree.children[1])
        return CutOperator(np.array(bins), cut_type, names=tree.children[3] if len(tree.children) > 3 else None)
    
    def cut_clause(self, tree):
        _, base_values, cut_op = tree.children
        return self.visit(cut_op).apply(self.visit(base_values))
        



    def _make_time_index(self, idx):
        if isinstance(idx, Attributes):
            return TimeIndex.from_attributes(idx)
        elif isinstance(idx, TimeIndex):
            return idx
        elif isinstance(idx, (TimeSeries, TimeSeriesSet)):
            return idx.index
        else:
            raise ValueError(f"Cannot convert {type(idx)} object to TimeIndex")

    def periodic_time_index(self, tree):
        duration = self.visit(tree.children[1])
                
        if tree.children[2] is not None:
            start_el, end_el, _ = self.visit(tree.children[2])
            start_time = self._make_time_index(start_el)
            end_time = self._make_time_index(end_el)
        else:
            start_time = self._make_time_index(self.min_time(lark.Tree('', [])))
            end_time = self._make_time_index(self.max_time(lark.Tree('', [])))
            
        return self._log_subquery(tree, TimeIndex.range(start_time, end_time, duration))
        
    def event_time_index(self, tree):
        events = self.visit(tree.children[1])

        if tree.children[-1] is not None:
            start_time = self.visit(tree.children[-1].children[0])
            end_time = self.visit(tree.children[-1].children[1])
        else:
            start_time = self.min_time(lark.Tree('', []))
            end_time = self.max_time(lark.Tree('', []))
            
        if isinstance(start_time, Attributes) and isinstance(end_time, Attributes):
            pass
        elif isinstance(start_time, Attributes) and not isinstance(end_time, Attributes):
            end_time = start_time.with_values(end_time)
        elif not isinstance(start_time, Attributes) and isinstance(end_time, Attributes):
            start_time = end_time.with_values(start_time)
        elif isinstance(start_time, (float, int)) and not isinstance(end_time, (float, int)):
            ids = np.unique(events.get_ids())
            start_time = Attributes(pd.Series(np.ones(len(ids)) * start_time, index=ids))
            end_time = Attributes(pd.Series(np.ones(len(ids)) * end_time, index=ids))
        else:
            raise ValueError(f"Unsupported time types for event index: '{type(start_time)}' and '{type(end_time)}'")
        
        if len(tree.children) > 3:
            assert isinstance(events, Intervals), "Interval position may only be used in event index when the data element is an interval"
            if tree.children[1].value.lower() == "start":
                events = events.start_events()
            elif tree.children[1].value.lower() == "end":
                events = events.end_events()
            else:
                raise ValueError(f"Unrecognized interval position '{tree.children[1].value}'")
        
        if not isinstance(events, Events):
            raise ValueError(f"Expected 'at every' data element to evaluate to an Events object, but instead got '{type(events).__name__}'")
        index, filtered_events = TimeIndex.from_events(events, starts=start_time, ends=end_time, return_filtered_events=True)
        self.index_value_placeholder = TimeSeries(index, filtered_events.get_values())
        return self._log_subquery(tree, index)
        
    def array_time_index(self, tree):
        times = [self.visit(c) for c in tree.children[2:-1]]
        return self._log_subquery(tree, TimeIndex.from_times(times))
        
    def variable_expr(self, tree, cache_only=False):            
        # Parse where clauses first (these require top-down processing in case of a value placeholder)
        if not isinstance(tree, lark.Tree):
            return tree

        tree_desc = str(tree.children[1])
        options_desc = str(tree.children[2]) if len(tree.children) > 2 else ''
        
        var_name = tree.children[0].children[0].value if tree.children[0] and tree.children[0].children[0].value else None
        if isinstance(tree.children[1], (TimeSeries, TimeSeriesSet)):
            var_exp = tree.children[1]
        else: var_exp = None
        if cache_only and var_exp is None: return tree
        elif var_exp is not None:
            if var_name is not None:
                var_exp = var_exp.rename(var_name)
            return self._log_subquery(tree, var_exp.compress())

        try:
            # We only cache the main expression, so variable names and options can be adjusted later without recomputing
            # expensive aggregations
            if var_exp is None:
                var_exp = self._parse_variable_value(tree.children[1])            
                
            if var_name is not None:
                var_exp = var_exp.rename(var_name)
        except Exception as e:
            raise ValueError(f"Exception occurred when processing variable '{var_name}': {e}")
        else:
            if self.variable_transform is not None:
                var_exp, transform_data = self.variable_transform(var_exp)
            else:
                transform_data = None
            var_exp = var_exp.compress()
            
            # if self.cache is not None:
            #     self.cache.save((tree_desc, options_desc), 
            #                     var_exp, 
            #                     transform_info=self.variable_transform_desc, 
            #                     transform_data=transform_data,
            #                     time_index_tree=time_index_tree)
            return self._log_subquery(tree, var_exp)
        
    def _parse_variable_value(self, tree):
        self._preprocess_nested_aggregations(tree)
            
        # set_variables = set()
        tree_parent = lark.Tree(None, [tree]) # in case one of the searched clauses is the root
        # for node in tree_parent.iter_subtrees():
        #     if not isinstance(node, lark.Tree): continue
        #     new_children = []
        #     for n in node.children:
        #         if isinstance(n, lark.Tree) and n.data == "with_clause":
        #             # Defining a temporary variable
        #             base_expr, with_var_name = self._parse_with_clause(n)
        #             set_variables.add(with_var_name)
        #             new_children.append(base_expr)
        #         else:
        #             new_children.append(n)
        #     node.children = new_children
        
        # for node in tree_parent.iter_subtrees():
        #     if not isinstance(node, lark.Tree): continue
        #     node.children = [lark.Tree('atom', [self._parse_where_clause(n)]) if isinstance(n, lark.Tree) and n.data == "where_clause" else n for n in node.children]
            
        tree = tree_parent.children[0]
        var_exp = self.visit(tree) if isinstance(tree, lark.Tree) else tree
        if isinstance(var_exp, Compilable): var_exp = var_exp.execute()
        if self.time_index is not None:
            if isinstance(var_exp, Attributes):
                # Cast the attributes over the time index
                var_exp = TimeSeries(self.time_index, make_aligned_value_series(self.time_index, var_exp))
            elif isinstance(var_exp, TimeIndex):
                # Use the times as the time series values
                var_exp = TimeSeries(var_exp, var_exp.get_times())
            elif (isinstance(var_exp, Events) and len(var_exp) == len(self.time_index) and 
                    (var_exp.get_ids().values == self.time_index.get_ids().values).all()):
                # This is an Events but is perfectly aligned to the time index
                var_exp = TimeSeries(TimeIndex.from_events(var_exp), var_exp.get_values())
            elif isinstance(var_exp, (int, float, str, np.generic)):
                # constant value at timesteps
                val = var_exp.item() if isinstance(var_exp, np.generic) else var_exp
                var_exp = TimeSeries(self.time_index, pd.Series([val] * len(self.time_index)))
        return var_exp

    def time_series(self, tree):
        time_index = self.visit(tree.children[-1]) if len(tree.children) > 1 else None
        self.time_index = time_index
        if self.update_fn is None:
            pbar = tqdm.tqdm(tree.children[0].children) if self.verbose else tree.children[0].children
        else:
            def progress_iterable():
                for i, c in enumerate(tree.children[0].children):
                    yield c
                    self.update_fn(i + 1, len(tree.children[0].children))
            pbar = progress_iterable()
        variable_definitions = [self.visit(child) for child in pbar]
        self.time_index = None
        self.index_value_placeholder = None

        if time_index is not None and not all(isinstance(v, TimeSeries) for v in variable_definitions):
            raise ValueError(f"All variables must evaluate to a TimeSeries when a time index is provided")
        if len(variable_definitions) == 1:
            return variable_definitions[0]
        else:
            return TimeSeriesSet.from_series(variable_definitions)
        
    def _preprocess_nested_aggregations(self, tree):
        if not isinstance(tree, lark.Tree): return
        for node in tree.iter_subtrees_topdown():
            if node is None: continue
            if not (isinstance(node, lark.Tree) and node.data == "agg_expr"): continue
            # For aggregation expressions, convert all inner aggregation expressions
            # to Compilables! This will enable us to calculate dynamic values
            # during the aggregation.
            
            for desc in node.children[1].iter_subtrees():
                if desc is None or desc == node: continue
                desc.children = [Compilable(self.visit(n)) 
                                 if (isinstance(n, lark.Tree) and n.data in ("agg_expr", "now")) else n 
                                 for n in desc.children]
                
        
    def where_clause(self, tree):
        logging.info(f"Parsing where clause: {tree}")
        base = self._log_subquery(tree.children[0], self.visit(tree.children[0]))
        self.value_placeholder = base
        where = self._log_subquery(tree.children[-1], self.visit(tree.children[-1]))
        self.value_placeholder = None
        if isinstance(where, Compilable):
            return Compilable(base).where(where)
        elif isinstance(base, (Events, Intervals, EventSet, IntervalSet, Compilable)):
            return base.filter(where)
        else:
            return base.where(where, pd.NA)
        
    def with_clause(self, tree):
        var_name = tree.children[2].value
        var_value = self._parse_variable_value(tree.children[-1])
        if isinstance(var_value, Compilable): var_value = var_value.execute()
        
        old_val = self.variables.get(var_name) # reset it to this value after evaluating the earlier expression
        self.variables[var_name] = var_value
        self._log_subquery(tree, var_value)
        result = self.visit(tree.children[0])
        if old_val is None:
            del self.variables[var_name]
        else:
            self.variables[var_name] = old_val
        return result
        
    def visit(self, tree, query_string=None, return_subqueries=False):
        if not isinstance(tree, lark.Tree): return tree
        if query_string is None: return super().visit(tree)
        
        self._logging_subqueries = return_subqueries
        self._dataset_queries = []
        self._subqueries = {}
        result = super().visit(tree)
        if return_subqueries: 
            subqueries = {}
            for subtree, query_info in self._subqueries.items():
                # map each subquery to its location in the original query text
                min_pos = min(token.start_pos for token in subtree.scan_values(lambda x: isinstance(x, lark.Token)))
                max_pos = max(token.end_pos for token in subtree.scan_values(lambda x: isinstance(x, lark.Token)))
                
                subquery = query_string[min_pos:max_pos].strip()
                print(list((token.start_pos, token.end_pos) for token in subtree.scan_values(lambda x: isinstance(x, lark.Token))), subquery)
                if subquery == query_string.strip(): continue
                subqueries[subquery] = query_info
            result = (result, subqueries)
        self._subqueries = None
        self._logging_subqueries = False
        return result
        
    def start(self, tree):
        self._subqueries = {}
        
        # # First replace all time series
        # if isinstance(tree.children[0], lark.Tree) and tree.children[0].data == "time_series":
        #     return self._parse_time_series(tree.children[0])

        # if self.use_cache:
        #     # First parse cached expressions
        #     for node in tree.iter_subtrees():
        #         if node is None: continue
        #         node.children = [self._parse_variable_expr(n, cache_only=True) if isinstance(n, lark.Tree) and n.data == "variable_expr" else n for n in node.children]
        
        # # Parse time series first
        # for node in tree.iter_subtrees():
        #     if node is None: continue
        #     node.children = [self._parse_time_series(n) if isinstance(n, lark.Tree) and n.data == "time_series" else n for n in node.children]

        # # Then parse detached variable expressions
        # for node in tree.iter_subtrees():
        #     if node is None: continue
        #     node.children = [self._parse_variable_expr(n) if isinstance(n, lark.Tree) and n.data == "variable_expr" else n for n in node.children]
            
        if isinstance(tree.children[0], lark.Tree): 
            return self.visit(tree.children[0])
        return tree.children[0]
    
class QueryResultCache:
    """
    Saves query results (optionally pre-discretized) to a cache directory. Query
    results can also be saved to an in-memory cache if desired.
    """
    def __init__(self, cache_dir):
        super().__init__()
        assert cache_dir is not None, "Cache directory must be provided"
        self.cache_dir = LocalFilesystem(cache_dir) if isinstance(cache_dir, str) else cache_dir
        self._query_cache = {}
        self._in_memory_cache = {} # for items to be stored in memory instead of loaded from disk every time
    
    def load_cache(self):
        if not self.cache_dir: return
        
        # Load cache information
        if self.cache_dir.exists("query_cache.json"):
            self._query_cache = self.cache_dir.read_file("query_cache.json")
        else:
            self._query_cache = {}
            
    def _make_cache_key(self, tree, time_index_tree, transform_info):
        return (str(tree) + 
                ("_" + str(time_index_tree) if time_index_tree is not None else "") + 
                ("_" + str(transform_info) if transform_info is not None else ""))
    
    def lookup(self, tree, time_index_tree=None, transform_info=None, save_in_memory=False):
        """Returns the result of a variable parse if it exists in the cache."""
        self.load_cache()
        query_cache_key = self._make_cache_key(tree, time_index_tree, transform_info)
        
        if query_cache_key in self._in_memory_cache:
            return self._in_memory_cache[query_cache_key]
        elif query_cache_key in self._query_cache:
            result_info = self._query_cache[query_cache_key]
            if "time_index_tree" in result_info:
                index = self.lookup("time_index_" + result_info["time_index_tree"], time_index_tree=None, save_in_memory=True)
            else:
                index = None
            if not self.cache_dir.exists(result_info["fname"]): return
            df = self.cache_dir.read_file(result_info["fname"], format="feather")
            result = TimeSeriesQueryable.deserialize(result_info["meta"], df, **({"index": index} if index is not None else {}))
            if transform_info is not None:
                result = (result, result_info.get("transform_data", None))
            if save_in_memory:
                self._in_memory_cache[query_cache_key] = result
            return result
        return None
        
    def save(self, tree, result, time_index_tree=None, transform_info=None, transform_data=None):
        """Saves the given result object to the cache for the given tree description."""
        query_cache_name = self._make_cache_key(tree, time_index_tree, transform_info)
        if query_cache_name in self._query_cache and (time_index_tree is None or "time_index_" + str(time_index_tree) in self._query_cache):
            return
        
        if time_index_tree is not None and isinstance(result, (TimeSeries, TimeSeriesSet)):
            time_index_key = "time_index_" + str(time_index_tree)
            if time_index_key not in self._query_cache:
                self.save(time_index_key, result.index)
            meta, df = result.serialize(include_index=False)
        else:
            meta, df = result.serialize()
            
        fname = ('%015x' % random.randrange(16**15)) + ".arrow" # 15-character long random hex string
        self._query_cache[query_cache_name] = {
            "meta": meta,
            "fname": fname,
            **({"time_index_tree": str(time_index_tree)} if time_index_tree is not None else {})
        }
        if transform_data is not None:
            self._query_cache[query_cache_name]["transform_data"] = convert_to_native_types(transform_data)
        self.cache_dir.write_file(df.rename(columns={c: str(c) for c in df.columns}).reset_index(drop=True), fname, format='feather')
        self.cache_dir.write_file(self._query_cache, "query_cache.json")

    
class QueryEngine:
    def __init__(self, dataset, eventtype_macros=None, cache_fs=None, variable_stores=None):
        """
        variable_stores can be a list of dictionary-like objects that store variables.
        """
        super().__init__()
        self.dataset = dataset
        self.parser = lark.Lark(GRAMMAR, parser="earley")
        self.eventtype_macros = eventtype_macros
        self.variable_stores = variable_stores
        if cache_fs is not None: self.cache = QueryResultCache(cache_fs)
        else: self.cache = None
        
    def get_ids(self):
        return self.dataset.get_ids()
    
    def query(self, query_string, variable_transform=None, use_cache=True, update_fn=None, return_subqueries=False):
        query_evaluator = EvaluateQuery(self.dataset, 
                                        eventtype_macros=self.eventtype_macros, 
                                        variable_transform=variable_transform,
                                        variable_stores=self.variable_stores,
                                        cache=self.cache if use_cache else None, 
                                        update_fn=update_fn,
                                        verbose=True)
        tree = self.parse(query_string)
        result = query_evaluator.visit(tree, query_string=query_string, return_subqueries=return_subqueries)
        return result
    
    def parse(self, query, keep_all_tokens=False):
        if keep_all_tokens:
            parser = lark.Lark(GRAMMAR, parser="earley", keep_all_tokens=True)
        else:
            parser = self.parser
        return parser.parse(query)
    
    def parse_data_element_query(self, query):
        query_filter = self.parse("{" + query + "}" if not query.startswith("{") else query)
        query_el = next(t for t in query_filter.iter_subtrees() if isinstance(t, lark.Tree) and t.data == "data_element")
        query_evaluator = EvaluateQuery(self.dataset, 
                                        eventtype_macros=self.eventtype_macros, 
                                        variable_stores=self.variable_stores)
        return query_evaluator.visit(query_el.children[0])

    
    def set_macros(self, macros):
        self.eventtype_macros = macros
    
    def get_last_sql_query(self):
        """Get the last SQL query that was executed by the dataset"""
        return getattr(self.dataset, 'last_sql_query', None)
