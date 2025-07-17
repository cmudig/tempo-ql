function H() {
}
function Po(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function io(e) {
  return e();
}
function Rr() {
  return /* @__PURE__ */ Object.create(null);
}
function De(e) {
  e.forEach(io);
}
function zl(e) {
  return typeof e == "function";
}
function be(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Fo(e) {
  return Object.keys(e).length === 0;
}
function oo(e, ...t) {
  if (e == null)
    return H;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function E(e, t, n) {
  e.$$.on_destroy.push(oo(t, n));
}
function Pe(e, t, n, l) {
  if (e) {
    const r = ao(e, t, n, l);
    return e[0](r);
  }
}
function ao(e, t, n, l) {
  return e[1] && l ? Po(n.ctx.slice(), e[1](l(t))) : n.ctx;
}
function Fe(e, t, n, l) {
  if (e[2] && l) {
    const r = e[2](l(n));
    if (t.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const i = [], o = Math.max(t.dirty.length, r.length);
      for (let a = 0; a < o; a += 1)
        i[a] = t.dirty[a] | r[a];
      return i;
    }
    return t.dirty | r;
  }
  return t.dirty;
}
function je(e, t, n, l, r, i) {
  if (r) {
    const o = ao(t, n, l, i);
    e.p(o, r);
  }
}
function Be(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let l = 0; l < n; l++)
      t[l] = -1;
    return t;
  }
  return -1;
}
function rr(e) {
  const t = {};
  for (const n in e)
    t[n] = !0;
  return t;
}
function X(e, t, n) {
  return e.set(n), t;
}
function y(e, t) {
  e.appendChild(t);
}
function M(e, t, n) {
  e.insertBefore(t, n || null);
}
function R(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function lt(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function k(e) {
  return document.createElement(e);
}
function ue(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function L(e) {
  return document.createTextNode(e);
}
function C() {
  return L(" ");
}
function we() {
  return L("");
}
function de(e, t, n, l) {
  return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
}
function h(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function jo(e) {
  return Array.from(e.childNodes);
}
function W(e, t) {
  t = "" + t, e.data !== t && (e.data = t);
}
function Mr(e, t) {
  e.value = t ?? "";
}
function j(e, t, n, l) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, l ? "important" : "");
}
let ol;
function Bo() {
  if (ol === void 0) {
    ol = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      ol = !0;
    }
  }
  return ol;
}
function Ho(e, t) {
  getComputedStyle(e).position === "static" && (e.style.position = "relative");
  const l = k("iframe");
  l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), l.setAttribute("aria-hidden", "true"), l.tabIndex = -1;
  const r = Bo();
  let i;
  return r ? (l.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", i = de(window, "message", (o) => {
    o.source === l.contentWindow && t();
  })) : (l.src = "about:blank", l.onload = () => {
    i = de(l.contentWindow, "resize", t), t();
  }), y(e, l), () => {
    (r || i && l.contentWindow) && i(), R(l);
  };
}
function ee(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
function Go(e, t, { bubbles: n = !1, cancelable: l = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(e, n, l, t), r;
}
class El {
  constructor(t = !1) {
    this.is_svg = !1, this.is_svg = t, this.e = this.n = null;
  }
  c(t) {
    this.h(t);
  }
  m(t, n, l = null) {
    this.e || (this.is_svg ? this.e = ue(n.nodeName) : this.e = k(n.nodeType === 11 ? "TEMPLATE" : n.nodeName), this.t = n.tagName !== "TEMPLATE" ? n : n.content, this.c(t)), this.i(l);
  }
  h(t) {
    this.e.innerHTML = t, this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes);
  }
  i(t) {
    for (let n = 0; n < this.n.length; n += 1)
      M(this.t, this.n[n], t);
  }
  p(t) {
    this.d(), this.h(t), this.i(this.a);
  }
  d() {
    this.n.forEach(R);
  }
}
let dn;
function cn(e) {
  dn = e;
}
function bn() {
  if (!dn)
    throw new Error("Function called outside component initialization");
  return dn;
}
function Ct(e) {
  bn().$$.on_mount.push(e);
}
function Wo(e) {
  bn().$$.on_destroy.push(e);
}
function so() {
  const e = bn();
  return (t, n, { cancelable: l = !1 } = {}) => {
    const r = e.$$.callbacks[t];
    if (r) {
      const i = Go(t, n, { cancelable: l });
      return r.slice().forEach((o) => {
        o.call(e, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function Vo(e, t) {
  return bn().$$.context.set(e, t), t;
}
function _n(e) {
  return bn().$$.context.get(e);
}
function zr(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((l) => l.call(this, t));
}
const Dt = [], Ue = [];
let Tt = [];
const Er = [], Uo = /* @__PURE__ */ Promise.resolve();
let er = !1;
function Ko() {
  er || (er = !0, Uo.then($e));
}
function yl(e) {
  Tt.push(e);
}
const Yl = /* @__PURE__ */ new Set();
let zt = 0;
function $e() {
  if (zt !== 0)
    return;
  const e = dn;
  do {
    try {
      for (; zt < Dt.length; ) {
        const t = Dt[zt];
        zt++, cn(t), Qo(t.$$);
      }
    } catch (t) {
      throw Dt.length = 0, zt = 0, t;
    }
    for (cn(null), Dt.length = 0, zt = 0; Ue.length; )
      Ue.pop()();
    for (let t = 0; t < Tt.length; t += 1) {
      const n = Tt[t];
      Yl.has(n) || (Yl.add(n), n());
    }
    Tt.length = 0;
  } while (Dt.length);
  for (; Er.length; )
    Er.pop()();
  er = !1, Yl.clear(), cn(e);
}
function Qo(e) {
  if (e.fragment !== null) {
    e.update(), De(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(yl);
  }
}
function Yo(e) {
  const t = [], n = [];
  Tt.forEach((l) => e.indexOf(l) === -1 ? t.push(l) : n.push(l)), n.forEach((l) => l()), Tt = t;
}
const bl = /* @__PURE__ */ new Set();
let et;
function te() {
  et = {
    r: 0,
    c: [],
    p: et
    // parent group
  };
}
function ne() {
  et.r || De(et.c), et = et.p;
}
function v(e, t) {
  e && e.i && (bl.delete(e), e.i(t));
}
function S(e, t, n, l) {
  if (e && e.o) {
    if (bl.has(e))
      return;
    bl.add(e), et.c.push(() => {
      bl.delete(e), l && (n && e.d(1), l());
    }), e.o(t);
  } else
    l && l();
}
function J(e) {
  e && e.c();
}
function K(e, t, n, l) {
  const { fragment: r, after_update: i } = e.$$;
  r && r.m(t, n), l || yl(() => {
    const o = e.$$.on_mount.map(io).filter(zl);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : De(o), e.$$.on_mount = [];
  }), i.forEach(yl);
}
function Q(e, t) {
  const n = e.$$;
  n.fragment !== null && (Yo(n.after_update), De(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Jo(e, t) {
  e.$$.dirty[0] === -1 && (Dt.push(e), Ko(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function pe(e, t, n, l, r, i, o, a = [-1]) {
  const f = dn;
  cn(e);
  const s = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: H,
    not_equal: r,
    bound: Rr(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: Rr(),
    dirty: a,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  o && o(s.root);
  let u = !1;
  if (s.ctx = n ? n(e, t.props || {}, (g, m, ...c) => {
    const d = c.length ? c[0] : m;
    return s.ctx && r(s.ctx[g], s.ctx[g] = d) && (!s.skip_bound && s.bound[g] && s.bound[g](d), u && Jo(e, g)), m;
  }) : [], s.update(), u = !0, De(s.before_update), s.fragment = l ? l(s.ctx) : !1, t.target) {
    if (t.hydrate) {
      const g = jo(t.target);
      s.fragment && s.fragment.l(g), g.forEach(R);
    } else
      s.fragment && s.fragment.c();
    t.intro && v(e.$$.fragment), K(e, t.target, t.anchor, t.customElement), $e();
  }
  cn(f);
}
class ke {
  $destroy() {
    Q(this, 1), this.$destroy = H;
  }
  $on(t, n) {
    if (!zl(n))
      return H;
    const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return l.push(n), () => {
      const r = l.indexOf(n);
      r !== -1 && l.splice(r, 1);
    };
  }
  $set(t) {
    this.$$set && !Fo(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Et = [];
function Xo(e, t) {
  return {
    subscribe: U(e, t).subscribe
  };
}
function U(e, t = H) {
  let n;
  const l = /* @__PURE__ */ new Set();
  function r(a) {
    if (be(e, a) && (e = a, n)) {
      const f = !Et.length;
      for (const s of l)
        s[1](), Et.push(s, e);
      if (f) {
        for (let s = 0; s < Et.length; s += 2)
          Et[s][0](Et[s + 1]);
        Et.length = 0;
      }
    }
  }
  function i(a) {
    r(a(e));
  }
  function o(a, f = H) {
    const s = [a, f];
    return l.add(s), l.size === 1 && (n = t(r) || H), a(e), () => {
      l.delete(s), l.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: i, subscribe: o };
}
function fe(e, t, n) {
  const l = !Array.isArray(e), r = l ? [e] : e, i = t.length < 2;
  return Xo(n, (o) => {
    let a = !1;
    const f = [];
    let s = 0, u = H;
    const g = () => {
      if (s)
        return;
      u();
      const c = t(l ? f[0] : f, o);
      i ? o(c) : u = zl(c) ? c : H;
    }, m = r.map((c, d) => oo(c, (b) => {
      f[d] = b, s &= ~(1 << d), a && g();
    }, () => {
      s |= 1 << d;
    }));
    return a = !0, g(), function() {
      De(m), u(), a = !1;
    };
  });
}
function Ee(e, t, n) {
  const l = t, r = U(e.get(l) || n);
  return e.on("change:" + l, (i, o) => r.set(o), null), e.onAttach && e.onAttach(async () => {
    let i = await e.fetch(l);
    r.set(i);
  }), {
    set: (i) => {
      r.set(i), e.set(l, i), e.save_changes();
    },
    subscribe: r.subscribe,
    update: (i) => {
      r.update((o) => {
        let a = i(o);
        return e.set(l, a), e.save_changes(), a;
      });
    }
  };
}
function Zo(e) {
  const t = Ee(e, "message", ""), n = Ee(e, "word", "Hello from Python!"), l = Ee(e, "type", "meds"), r = Ee(e, "values", {}), i = Ee(e, "ids_length", 0), o = Ee(e, "list_names", { attributes: [], events: [], intervals: [] }), a = Ee(e, "subquery_enabled", !1), f = Ee(e, "subqueries", {}), s = Ee(e, "llm_message", ""), u = Ee(e, "llm_loading", !1), g = Ee(e, "llm_error", ""), m = Ee(e, "api_status", "Checking API connection...");
  let c = "";
  return {
    // Reactive stores
    message: t,
    word: n,
    type: l,
    values: r,
    idsLength: i,
    listNames: o,
    subqueryEnabled: a,
    subqueries: f,
    llmMessage: s,
    llmLoading: u,
    llmError: g,
    apiStatus: m,
    // Action buttons
    actionButtons: [
      // {
      //   label: 'Template',
      //   icon: '📝',
      //   colorClass: 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white',
      //   onClick: () => {
      //     console.log('Template action clicked');
      //     message.set('Template action executed');
      //   }
      // },
      // {
      //   label: 'Write',
      //   icon: '✍️',
      //   colorClass: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white',
      //   onClick: () => {
      //     console.log('Write action clicked');
      //     message.set('Write action executed');
      //   }
      // },
      // {
      //   label: 'Refine',
      //   icon: '✨',
      //   colorClass: 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white',
      //   onClick: () => {
      //     console.log('Refine action clicked');
      //     message.set('Refine action executed');
      //   }
      // },
      // {
      //   label: 'Explain',
      //   icon: '💡',
      //   colorClass: 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white',
      //   onClick: () => {
      //     console.log('Explain action clicked');
      //     message.set('Explain action executed');
      //   }
      // },
      {
        label: "Run",
        icon: "▶️",
        colorClass: "bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white",
        onClick: () => {
          console.log("Run button clicked - processing current text input"), c.trim() ? (console.log(`Processing text: "${c}"`), e.set("process_trigger", "run"), e.save_changes()) : t.set("Please enter some text first");
        }
      }
    ],
    // Text input handler - only stores the value, doesn't trigger processing
    handleTextInput: (b) => {
      console.log("Text input changed:", b), c = b, e.set("text_input", b), b.trim() || (console.log("🧹 Clearing data due to empty input"), t.set(""), r.set({}), s.set(""), g.set("")), e.save_changes();
    },
    // LLM question handler
    handleLLMQuestion: (b) => {
      console.log("🤖 LLM Question submitted:", b), e.set("text_input", b), e.set("llm_trigger", "ask"), e.save_changes();
    },
    // Get current backend info
    getBackendInfo: () => {
      let b = "", p = "";
      return l.subscribe((w) => b = w)(), t.subscribe((w) => p = w)(), {
        type: b,
        message: p
      };
    }
  };
}
function $o() {
  const t = (typeof window < "u" ? localStorage.getItem("theme") : "dark") || "dark", { subscribe: n, set: l, update: r } = U(t);
  if (typeof window < "u") {
    const i = document.documentElement;
    t === "dark" ? i.classList.add("dark") : i.classList.remove("dark");
  }
  return {
    subscribe: n,
    toggle: () => r((i) => {
      const o = i === "dark" ? "light" : "dark";
      if (typeof window < "u") {
        localStorage.setItem("theme", o);
        const a = document.documentElement;
        o === "dark" ? a.classList.add("dark") : a.classList.remove("dark");
      }
      return o;
    }),
    set: (i) => {
      if (typeof window < "u") {
        localStorage.setItem("theme", i);
        const o = document.documentElement;
        i === "dark" ? o.classList.add("dark") : o.classList.remove("dark");
      }
      l(i);
    }
  };
}
const Dr = $o(), Tr = [
  "now",
  "value",
  "mintime",
  "maxtime",
  "indexvalue"
];
function ea(e, t, n) {
  if (console.log("🔍 getAutocompleteOptions - Input:", { dataFields: e, searchQuery: t, fullPrefix: n }), e.length == 0)
    return console.log("🔍 getAutocompleteOptions - No data fields available"), [];
  if (t.length == 0)
    return console.log("🔍 getAutocompleteOptions - No search query"), [];
  let l = n.match(/\{([^}]*?)(?:,\s*([^},]*))?$/i);
  if (console.log("🔍 getAutocompleteOptions - Data field regex result:", l), l) {
    const r = l[2] || l[1] || "";
    if (console.log("🔍 getAutocompleteOptions - Processing data field, searchQuery:", r), r.length == 0)
      return [];
    const i = r.toLowerCase(), o = e.filter((s) => s.toLowerCase().startsWith(i)).sort((s, u) => s.length !== u.length ? s.length - u.length : s.localeCompare(u)).slice(0, 10), a = e.filter((s) => {
      const u = s.toLowerCase();
      return u.includes(i) && !u.startsWith(i);
    }).sort((s, u) => {
      const g = s.toLowerCase().indexOf(i), m = u.toLowerCase().indexOf(i);
      return g !== m ? g - m : s.length !== u.length ? s.length - u.length : s.localeCompare(u);
    }).slice(0, 5), f = [...o, ...a].map((s) => ({ value: s, type: "data_item" }));
    return console.log("🔍 getAutocompleteOptions - Data field matches:", f), f;
  }
  if (l = n.match(/#([^\s]*)/), console.log("🔍 getAutocompleteOptions - Constant regex result:", l), l) {
    console.log("🔍 getAutocompleteOptions - Processing constants");
    const r = l[1] || "";
    console.log("🔍 getAutocompleteOptions - Constant search query:", r);
    const i = r.toLowerCase(), o = Tr.filter((s) => s.toLowerCase().startsWith(i)).sort((s, u) => s.length - u.length), a = Tr.filter((s) => {
      const u = s.toLowerCase();
      return u.includes(i) && !u.startsWith(i);
    }).sort((s, u) => s.length - u.length), f = [...o, ...a].map((s) => ({ value: s, type: "constant" }));
    return console.log("🔍 getAutocompleteOptions - Constant matches:", f), f;
  }
  return console.log("🔍 getAutocompleteOptions - No matches found"), [];
}
function ta(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fo = { exports: {} };
(function(e, t) {
  (function() {
    function n(i, o, a) {
      var f = null, s = null, u = null, g = null;
      if (a = a || "", !o.length)
        return a || "";
      if (i.some(function(c) {
        c.name;
        var d = c.match instanceof RegExp, b = d ? c.match : c.match[0], p = d ? null : c.match[1] || null, w = d ? null : c.match[2] || null;
        return f = o.match(b), s = f ? c.name : null, u = p, g = w, !!f;
      }), f) {
        var m = '<span class="' + s + '">' + f[1] + "</span>";
        return u && (m = u + m), g && (m = m + g), n(i, o.slice(f[0].length), a + m);
      } else
        return n(i, o.slice(1), a + o[0]);
    }
    function l(i) {
      var o = i.replace(/^\n+|\n+\s+$/g, ""), a = o.match(/^\s+/);
      if (!a)
        return o;
      var f = o.split(`
`), s = f.map(function(u, g) {
        return !u || /^\s+$/.test(u) ? u : u.replace(a[0], "");
      }).join(`
`);
      return `
` + s;
    }
    function r(i) {
      var o = i.selector || "pre code", a = i.postProcess || function(s) {
        return s;
      }, f = i.preProcess || function(s) {
        return s;
      };
      Array.prototype.slice.call(document.querySelectorAll(o)).forEach(function(s) {
        var u = (typeof i.patterns == "function" ? i.patterns(s) : i.patterns) || {}, g = s.innerText, m = l(g), c = a(n(u, f(m)));
        i.linenums && (c = c.split(`
`).map(function(d, b) {
          if (!b)
            return d;
          var p = b - 1 + "";
          return p.length < 2 && (p = "0" + p), '<span class="linenum">' + p + "</span> " + d;
        }).join(`
`)), s.innerHTML = c;
      });
    }
    e.exports = r;
  })();
})(fo);
var na = fo.exports;
const la = /* @__PURE__ */ ta(na), ra = [
  {
    name: "tempo-placeholder-token",
    match: /^####TOKEN####([A-z]+)####ENDTOKEN####/
  },
  {
    name: "tempo-string",
    match: /^([\'\"]([^\'\"\#]*(?!####TOKEN####)#?)*[\'\"]?)/
  },
  {
    name: "tempo-constant",
    match: /^(#(?:now|mintime|maxtime|indexvalue|value))/i
  },
  {
    name: "tempo-data-field",
    match: /^(\{[^\}\#]+\}?)/
  },
  {
    name: "tempo-function",
    match: [/^([A-z_]+)\(/, "", "("]
  },
  {
    name: "tempo-keyword",
    match: /^\b(and|or|not|case|when|where|end|else|in|then|every|at|as|from|to|(starts|ends)?with|contains|as|value|rate|duration|exists|mean|median|sum|min|max|first|last|any|all|nonnull|distinct|count|integral|impute|carry|cut|quantiles|bins)\b/i
  }
];
function ia(e) {
  return e = e.replaceAll(/<([A-z]+?)>/g, "####TOKEN####$1####ENDTOKEN####"), e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function Ar(e, t, n) {
  const l = e.slice();
  return l[30] = t[n], l;
}
function xr(e, t, n) {
  const l = e.slice();
  return l[33] = t[n], l[35] = n, l;
}
function Cr(e) {
  let t, n = (
    /*autocompleteOptions*/
    e[6]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Lr(xr(e, n, r));
  return {
    c() {
      t = k("div");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      h(t, "class", "absolute z-30 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-xl max-h-48 overflow-y-auto");
    },
    m(r, i) {
      M(r, t, i);
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(t, null);
      e[20](t);
    },
    p(r, i) {
      if (i[0] & /*selectedIndex, selectAutocompleteOption, autocompleteOptions*/
      4288) {
        n = /*autocompleteOptions*/
        r[6];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = xr(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = Lr(a), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(r) {
      r && R(t), lt(l, r), e[20](null);
    }
  };
}
function Lr(e) {
  let t, n, l, r = (
    /*option*/
    e[33].value + ""
  ), i, o, a, f = (
    /*option*/
    e[33].type === "data_item" ? "field" : "const"
  ), s, u, g, m, c;
  function d() {
    return (
      /*click_handler*/
      e[18](
        /*option*/
        e[33]
      )
    );
  }
  function b() {
    return (
      /*mouseenter_handler*/
      e[19](
        /*index*/
        e[35]
      )
    );
  }
  return {
    c() {
      t = k("div"), n = k("div"), l = k("span"), i = L(r), o = C(), a = k("span"), s = L(f), u = C(), h(l, "class", "font-mono text-sm"), h(a, "class", "text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"), h(n, "class", "flex items-center justify-between"), h(t, "class", g = "px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors " + /*index*/
      (e[35] === /*selectedIndex*/
      e[7] ? "bg-blue-600 text-white" : "text-gray-700 dark:text-gray-200"));
    },
    m(p, w) {
      M(p, t, w), y(t, n), y(n, l), y(l, i), y(n, o), y(n, a), y(a, s), y(t, u), m || (c = [
        de(t, "click", d),
        de(t, "mouseenter", b)
      ], m = !0);
    },
    p(p, w) {
      e = p, w[0] & /*autocompleteOptions*/
      64 && r !== (r = /*option*/
      e[33].value + "") && W(i, r), w[0] & /*autocompleteOptions*/
      64 && f !== (f = /*option*/
      e[33].type === "data_item" ? "field" : "const") && W(s, f), w[0] & /*selectedIndex*/
      128 && g !== (g = "px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors " + /*index*/
      (e[35] === /*selectedIndex*/
      e[7] ? "bg-blue-600 text-white" : "text-gray-700 dark:text-gray-200")) && h(t, "class", g);
    },
    d(p) {
      p && R(t), m = !1, De(c);
    }
  };
}
function Or(e) {
  let t, n = (
    /*btn*/
    e[30].icon + ""
  ), l;
  return {
    c() {
      t = k("span"), l = L(n), h(t, "class", "text-sm");
    },
    m(r, i) {
      M(r, t, i), y(t, l);
    },
    p(r, i) {
      i[0] & /*actionButtons*/
      2 && n !== (n = /*btn*/
      r[30].icon + "") && W(l, n);
    },
    d(r) {
      r && R(t);
    }
  };
}
function qr(e) {
  let t, n, l, r = (
    /*btn*/
    e[30].label + ""
  ), i, o, a, f, s = (
    /*btn*/
    e[30].icon && Or(e)
  );
  return {
    c() {
      t = k("button"), s && s.c(), n = C(), l = k("span"), i = L(r), o = C(), h(t, "class", "px-4 py-2 bg-blue-600 dark:bg-purple-600 text-white border border-blue-600 dark:border-purple-600 rounded-md font-medium transition-all duration-200 hover:bg-blue-700 dark:hover:bg-purple-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 flex items-center space-x-2 text-sm");
    },
    m(u, g) {
      M(u, t, g), s && s.m(t, null), y(t, n), y(t, l), y(l, i), y(t, o), a || (f = de(t, "click", function() {
        zl(
          /*btn*/
          e[30].onClick
        ) && e[30].onClick.apply(this, arguments);
      }), a = !0);
    },
    p(u, g) {
      e = u, /*btn*/
      e[30].icon ? s ? s.p(e, g) : (s = Or(e), s.c(), s.m(t, n)) : s && (s.d(1), s = null), g[0] & /*actionButtons*/
      2 && r !== (r = /*btn*/
      e[30].label + "") && W(i, r);
    },
    d(u) {
      u && R(t), s && s.d(), a = !1, f();
    }
  };
}
function oa(e) {
  let t, n, l, r, i, o, a, f, s, u, g, m, c, d, b = (
    /*showAutocomplete*/
    e[8] && /*autocompleteOptions*/
    e[6].length > 0 && Cr(e)
  ), p = (
    /*actionButtons*/
    e[1]
  ), w = [];
  for (let N = 0; N < p.length; N += 1)
    w[N] = qr(Ar(e, p, N));
  return {
    c() {
      t = k("div"), n = k("div"), l = k("textarea"), r = C(), i = k("div"), o = C(), a = k("div"), f = C(), b && b.c(), s = C(), u = k("div"), g = k("div");
      for (let N = 0; N < w.length; N += 1)
        w[N].c();
      h(l, "id", "text-input"), h(l, "class", "w-full p-6 bg-transparent font-mono text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none overflow-hidden min-h-[120px] relative z-20 svelte-141lyto"), h(l, "placeholder", "// Write your Tempo-QL query here... (Ctrl+Z to undo, Ctrl+Y to redo)"), h(l, "rows", "1"), j(l, "color", "transparent"), j(l, "caret-color", "currentColor"), h(i, "class", "absolute top-0 left-0 w-full h-full p-6 bg-gray-100 dark:bg-gray-800 rounded-md pointer-events-none z-0"), h(a, "class", "absolute top-0 left-0 w-full h-full p-6 font-mono text-sm pointer-events-none bg-transparent z-10 text-wrap whitespace-pre-wrap break-words svelte-141lyto"), h(
        a,
        "id",
        /*highlightedViewID*/
        e[9]
      ), h(n, "class", "mb-2 relative"), h(g, "class", "flex justify-end"), h(u, "class", "pt-2"), h(t, "class", m = "bg-white dark:bg-gray-900 p-4 mb-0 border-0 rounded-none " + /*width*/
      e[2] + " transition-colors duration-200");
    },
    m(N, z) {
      M(N, t, z), y(t, n), y(n, l), e[15](l), Mr(
        l,
        /*value*/
        e[0]
      ), y(n, r), y(n, i), y(n, o), y(n, a), e[17](a), y(n, f), b && b.m(n, null), y(t, s), y(t, u), y(u, g);
      for (let T = 0; T < w.length; T += 1)
        w[T] && w[T].m(g, null);
      c || (d = [
        de(
          l,
          "input",
          /*textarea_1_input_handler*/
          e[16]
        ),
        de(
          l,
          "input",
          /*handleInput*/
          e[10]
        ),
        de(
          l,
          "keydown",
          /*handleKeydown*/
          e[11]
        )
      ], c = !0);
    },
    p(N, z) {
      if (z[0] & /*value*/
      1 && Mr(
        l,
        /*value*/
        N[0]
      ), /*showAutocomplete*/
      N[8] && /*autocompleteOptions*/
      N[6].length > 0 ? b ? b.p(N, z) : (b = Cr(N), b.c(), b.m(n, null)) : b && (b.d(1), b = null), z[0] & /*actionButtons*/
      2) {
        p = /*actionButtons*/
        N[1];
        let T;
        for (T = 0; T < p.length; T += 1) {
          const F = Ar(N, p, T);
          w[T] ? w[T].p(F, z) : (w[T] = qr(F), w[T].c(), w[T].m(g, null));
        }
        for (; T < w.length; T += 1)
          w[T].d(1);
        w.length = p.length;
      }
      z[0] & /*width*/
      4 && m !== (m = "bg-white dark:bg-gray-900 p-4 mb-0 border-0 rounded-none " + /*width*/
      N[2] + " transition-colors duration-200") && h(t, "class", m);
    },
    i: H,
    o: H,
    d(N) {
      N && R(t), e[15](null), e[17](null), b && b.d(), lt(w, N), c = !1, De(d);
    }
  };
}
function Jl() {
  console.log("🧹 Clearing other data due to empty input");
}
function al(e) {
  e.style.height = "auto", e.style.height = e.scrollHeight + "px";
}
function aa(e, t, n) {
  let { value: l = "" } = t, { onInput: r = () => {
  } } = t, { actionButtons: i = [] } = t, { width: o = "w-full max-w-2xl" } = t, { dataFields: a = [] } = t, f, s, u, g = [], m = 0, c = !1, d = 0, b = "highlightView-" + new Array(20).fill(0).map(() => Math.floor(Math.random() * 10)).join(""), p = [], w = -1, N = !1;
  Ct(() => {
    T(""), document.addEventListener("click", z);
  }), Wo(() => {
    document.removeEventListener("click", z);
  });
  function z(D) {
    if (s && f) {
      const $ = D.target, V = s.contains($), oe = f.contains($);
      (!V || oe && c) && (console.log("🖱️ Click detected - closing autocomplete"), n(8, c = !1));
    }
  }
  function T(D) {
    if (N) {
      N = !1;
      return;
    }
    p = p.slice(0, w + 1), p.push(D), w = p.length - 1, p.length > 50 && (p = p.slice(-50), w = p.length - 1), console.log("📝 Added to history:", D, "Index:", w);
  }
  function F() {
    if (w > 0) {
      N = !0, w--;
      const D = p[w];
      console.log("↶ Undo to:", D), n(0, l = D), r(D), f && (n(3, f.value = D, f), al(f), f.focus()), D.trim() || Jl();
    }
  }
  function O() {
    if (w < p.length - 1) {
      N = !0, w++;
      const D = p[w];
      console.log("↷ Redo to:", D), n(0, l = D), r(D), f && (n(3, f.value = D, f), al(f), f.focus()), D.trim() || Jl();
    }
  }
  function I(D) {
    const $ = D.target, V = $.value;
    console.log("🔍 handleInput - New value:", V), console.log("🔍 handleInput - Cursor position:", $.selectionStart), T(V), r(V), al($), d = $.selectionStart || 0, console.log("🔍 handleInput - Updated cursor position:", d), ie(V, d), V.trim() || Jl();
  }
  function ie(D, $) {
    console.log("🔍 updateAutocompleteOptions - Text:", D), console.log("🔍 updateAutocompleteOptions - Position:", $);
    const V = D.substring(0, $), oe = D.substring($);
    console.log("🔍 updateAutocompleteOptions - Before cursor:", V), console.log("🔍 updateAutocompleteOptions - After cursor:", oe);
    const ge = V.match(/([^\s]*)$/), Ne = ge ? ge[1] : "";
    console.log("🔍 updateAutocompleteOptions - Current word:", Ne), console.log("🔍 updateAutocompleteOptions - Data fields available:", a), Ne.length > 0 ? (n(6, g = ea(a, Ne, V)), console.log("🔍 updateAutocompleteOptions - Autocomplete options:", g), n(8, c = g.length > 0), n(7, m = 0), console.log("🔍 updateAutocompleteOptions - Show autocomplete:", c)) : (n(8, c = !1), console.log("🔍 updateAutocompleteOptions - No current word, hiding autocomplete"));
  }
  function P(D) {
    if (console.log("🔍 handleKeydown - Key pressed:", D.key), console.log("🔍 handleKeydown - Show autocomplete:", c), console.log("🔍 handleKeydown - Options count:", g.length), D.ctrlKey || D.metaKey) {
      if (D.key === "z" && !D.shiftKey) {
        D.preventDefault(), console.log("⌨️ Ctrl+Z pressed - Undo"), F();
        return;
      } else if (D.key === "y" || D.key === "z" && D.shiftKey) {
        D.preventDefault(), console.log("⌨️ Ctrl+Y or Ctrl+Shift+Z pressed - Redo"), O();
        return;
      }
    }
    if (!c) {
      console.log("🔍 handleKeydown - Autocomplete not shown, ignoring key");
      return;
    }
    switch (D.key) {
      case "ArrowDown":
        D.preventDefault(), n(7, m = (m + 1) % g.length), console.log("🔍 handleKeydown - ArrowDown, new selectedIndex:", m);
        break;
      case "ArrowUp":
        D.preventDefault(), n(7, m = m === 0 ? g.length - 1 : m - 1), console.log("🔍 handleKeydown - ArrowUp, new selectedIndex:", m);
        break;
      case "Enter":
        c && (D.preventDefault(), console.log("🔍 handleKeydown - Enter pressed, selecting option:", g[m]), x(g[m]));
        break;
      case "Escape":
        n(8, c = !1), console.log("🔍 handleKeydown - Escape pressed, hiding autocomplete");
        break;
      case "Tab":
        c && (D.preventDefault(), console.log("🔍 handleKeydown - Tab pressed, selecting option:", g[m]), x(g[m]));
        break;
    }
  }
  function x(D) {
    console.log("🔍 selectAutocompleteOption - Selected option:", D), console.log("🔍 selectAutocompleteOption - Current value:", l), console.log("🔍 selectAutocompleteOption - Cursor position:", d);
    const $ = l.substring(0, d), V = l.substring(d);
    console.log("🔍 selectAutocompleteOption - Before cursor:", $), console.log("🔍 selectAutocompleteOption - After cursor:", V);
    const oe = $.match(/([^\s]*)$/), ge = oe ? oe[1] : "", Ne = $.length - ge.length;
    console.log("🔍 selectAutocompleteOption - Current word:", ge), console.log("🔍 selectAutocompleteOption - Word start position:", Ne);
    let ve;
    if (D.type === "data_item")
      if (ge.includes("{")) {
        const me = $.match(/\{([^}]*?)(?:,\s*([^},]*))?$/);
        me ? me[2] ? ve = $.substring(0, me.index + me[1].length + 2) + D.value : ve = $.substring(0, me.index + 1) + D.value : ve = $ + D.value;
      } else
        ve = $ + "{" + D.value;
    else
      ve = $.substring(0, Ne) + "#" + D.value;
    console.log("🔍 selectAutocompleteOption - Replacement:", ve);
    const Te = ve + V;
    console.log("🔍 selectAutocompleteOption - New value:", Te), n(0, l = Te), r(Te);
    const ze = ve.length;
    console.log("🔍 selectAutocompleteOption - New cursor position:", ze), setTimeout(
      () => {
        f && (f.setSelectionRange(ze, ze), f.focus(), console.log("🔍 selectAutocompleteOption - Cursor position set"));
      },
      0
    ), n(8, c = !1), console.log("🔍 selectAutocompleteOption - Autocomplete hidden");
  }
  function A(D) {
    Ue[D ? "unshift" : "push"](() => {
      f = D, n(3, f);
    });
  }
  function q() {
    l = this.value, n(0, l);
  }
  function Z(D) {
    Ue[D ? "unshift" : "push"](() => {
      u = D, n(4, u), n(0, l), n(9, b);
    });
  }
  const ce = (D) => x(D), B = (D) => n(7, m = D);
  function G(D) {
    Ue[D ? "unshift" : "push"](() => {
      s = D, n(5, s);
    });
  }
  return e.$$set = (D) => {
    "value" in D && n(0, l = D.value), "onInput" in D && n(13, r = D.onInput), "actionButtons" in D && n(1, i = D.actionButtons), "width" in D && n(2, o = D.width), "dataFields" in D && n(14, a = D.dataFields);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*highlightedView, value*/
    17 && u && l !== void 0 && (n(4, u.innerText = ia(l), u), la({
      selector: `#${b}`,
      patterns: ra
    })), e.$$.dirty[0] & /*textarea, value*/
    9 && f && l && setTimeout(() => al(f), 0);
  }, [
    l,
    i,
    o,
    f,
    u,
    s,
    g,
    m,
    c,
    b,
    I,
    P,
    x,
    r,
    a,
    A,
    q,
    Z,
    ce,
    B,
    G
  ];
}
class sa extends ke {
  constructor(t) {
    super(), pe(
      this,
      t,
      aa,
      oa,
      be,
      {
        value: 0,
        onInput: 13,
        actionButtons: 1,
        width: 2,
        dataFields: 14
      },
      null,
      [-1, -1]
    );
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(t) {
    this.$$set({ value: t }), $e();
  }
  get onInput() {
    return this.$$.ctx[13];
  }
  set onInput(t) {
    this.$$set({ onInput: t }), $e();
  }
  get actionButtons() {
    return this.$$.ctx[1];
  }
  set actionButtons(t) {
    this.$$set({ actionButtons: t }), $e();
  }
  get width() {
    return this.$$.ctx[2];
  }
  set width(t) {
    this.$$set({ width: t }), $e();
  }
  get dataFields() {
    return this.$$.ctx[14];
  }
  set dataFields(t) {
    this.$$set({ dataFields: t }), $e();
  }
}
function fa(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function pl(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, l = e.slice(0, n);
  return [
    l.length > 1 ? l[0] + l.slice(2) : l,
    +e.slice(n + 1)
  ];
}
function xt(e) {
  return e = pl(Math.abs(e)), e ? e[1] : NaN;
}
function ua(e, t) {
  return function(n, l) {
    for (var r = n.length, i = [], o = 0, a = e[0], f = 0; r > 0 && a > 0 && (f + a + 1 > l && (a = Math.max(1, l - f)), i.push(n.substring(r -= a, r + a)), !((f += a + 1) > l)); )
      a = e[o = (o + 1) % e.length];
    return i.reverse().join(t);
  };
}
function ca(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var da = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function kl(e) {
  if (!(t = da.exec(e)))
    throw new Error("invalid format: " + e);
  var t;
  return new ir({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
kl.prototype = ir.prototype;
function ir(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
ir.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function ga(e) {
  e:
    for (var t = e.length, n = 1, l = -1, r; n < t; ++n)
      switch (e[n]) {
        case ".":
          l = r = n;
          break;
        case "0":
          l === 0 && (l = n), r = n;
          break;
        default:
          if (!+e[n])
            break e;
          l > 0 && (l = 0);
          break;
      }
  return l > 0 ? e.slice(0, l) + e.slice(r + 1) : e;
}
var uo;
function ma(e, t) {
  var n = pl(e, t);
  if (!n)
    return e + "";
  var l = n[0], r = n[1], i = r - (uo = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, o = l.length;
  return i === o ? l : i > o ? l + new Array(i - o + 1).join("0") : i > 0 ? l.slice(0, i) + "." + l.slice(i) : "0." + new Array(1 - i).join("0") + pl(e, Math.max(0, t + i - 1))[0];
}
function Ir(e, t) {
  var n = pl(e, t);
  if (!n)
    return e + "";
  var l = n[0], r = n[1];
  return r < 0 ? "0." + new Array(-r).join("0") + l : l.length > r + 1 ? l.slice(0, r + 1) + "." + l.slice(r + 1) : l + new Array(r - l.length + 2).join("0");
}
const Pr = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: fa,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Ir(e * 100, t),
  r: Ir,
  s: ma,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Fr(e) {
  return e;
}
var jr = Array.prototype.map, Br = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function ha(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Fr : ua(jr.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", l = e.currency === void 0 ? "" : e.currency[1] + "", r = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? Fr : ca(jr.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", a = e.minus === void 0 ? "−" : e.minus + "", f = e.nan === void 0 ? "NaN" : e.nan + "";
  function s(g) {
    g = kl(g);
    var m = g.fill, c = g.align, d = g.sign, b = g.symbol, p = g.zero, w = g.width, N = g.comma, z = g.precision, T = g.trim, F = g.type;
    F === "n" ? (N = !0, F = "g") : Pr[F] || (z === void 0 && (z = 12), T = !0, F = "g"), (p || m === "0" && c === "=") && (p = !0, m = "0", c = "=");
    var O = b === "$" ? n : b === "#" && /[boxX]/.test(F) ? "0" + F.toLowerCase() : "", I = b === "$" ? l : /[%p]/.test(F) ? o : "", ie = Pr[F], P = /[defgprs%]/.test(F);
    z = z === void 0 ? 6 : /[gprs]/.test(F) ? Math.max(1, Math.min(21, z)) : Math.max(0, Math.min(20, z));
    function x(A) {
      var q = O, Z = I, ce, B, G;
      if (F === "c")
        Z = ie(A) + Z, A = "";
      else {
        A = +A;
        var D = A < 0 || 1 / A < 0;
        if (A = isNaN(A) ? f : ie(Math.abs(A), z), T && (A = ga(A)), D && +A == 0 && d !== "+" && (D = !1), q = (D ? d === "(" ? d : a : d === "-" || d === "(" ? "" : d) + q, Z = (F === "s" ? Br[8 + uo / 3] : "") + Z + (D && d === "(" ? ")" : ""), P) {
          for (ce = -1, B = A.length; ++ce < B; )
            if (G = A.charCodeAt(ce), 48 > G || G > 57) {
              Z = (G === 46 ? r + A.slice(ce + 1) : A.slice(ce)) + Z, A = A.slice(0, ce);
              break;
            }
        }
      }
      N && !p && (A = t(A, 1 / 0));
      var $ = q.length + A.length + Z.length, V = $ < w ? new Array(w - $ + 1).join(m) : "";
      switch (N && p && (A = t(V + A, V.length ? w - Z.length : 1 / 0), V = ""), c) {
        case "<":
          A = q + A + Z + V;
          break;
        case "=":
          A = q + V + A + Z;
          break;
        case "^":
          A = V.slice(0, $ = V.length >> 1) + q + A + Z + V.slice($);
          break;
        default:
          A = V + q + A + Z;
          break;
      }
      return i(A);
    }
    return x.toString = function() {
      return g + "";
    }, x;
  }
  function u(g, m) {
    var c = s((g = kl(g), g.type = "f", g)), d = Math.max(-8, Math.min(8, Math.floor(xt(m) / 3))) * 3, b = Math.pow(10, -d), p = Br[8 + d / 3];
    return function(w) {
      return c(b * w) + p;
    };
  }
  return {
    format: s,
    formatPrefix: u
  };
}
var sl, re, co;
ba({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function ba(e) {
  return sl = ha(e), re = sl.format, co = sl.formatPrefix, sl;
}
function go(e) {
  return Math.max(0, -xt(Math.abs(e)));
}
function _a(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(xt(t) / 3))) * 3 - xt(Math.abs(e)));
}
function ya(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, xt(t) - xt(e)) + 1;
}
function pa(e) {
  return e === 0 ? !0 : e;
}
function Je(e) {
  return pa(e) ? Array.isArray(e) ? (t) => e.map((n) => typeof n != "function" ? t[n] : n(t)) : typeof e != "function" ? (t) => t[e] : e : null;
}
function ka(e) {
  const t = {};
  for (const n of e) {
    if (Object(n) !== n)
      throw new TypeError("iterable for fromEntries should yield objects");
    const { "0": l, "1": r } = n;
    Object.defineProperty(t, l, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: r
    });
  }
  return t;
}
function Xl(e, t = {}) {
  return ka(Object.entries(e).filter(([n, l]) => l !== void 0 && t[n] === void 0));
}
function wa(e, t = 300) {
  let n;
  return (...l) => {
    clearTimeout(n), n = setTimeout(() => {
      e.apply(this, l);
    }, t);
  };
}
function va(e, t, { sort: n = !1 } = {}) {
  if (!Array.isArray(e))
    throw new TypeError(`The first argument of calcUniques() must be an array. You passed in a ${typeof e}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(t) || t === void 0 || t === null)
    throw new TypeError("The second argument of calcUniques() must be an object with field names as keys as accessor functions as values.");
  const l = {}, r = Object.keys(t), i = r.length;
  let o, a, f, s, u, g, m;
  const c = e.length;
  for (o = 0; o < i; o += 1) {
    for (m = /* @__PURE__ */ new Set(), s = r[o], u = t[s], a = 0; a < c; a += 1)
      if (g = u(e[a]), Array.isArray(g)) {
        const b = g.length;
        for (f = 0; f < b; f += 1)
          m.add(g[f]);
      } else
        m.add(g);
    const d = Array.from(m);
    l[s] = n === !0 ? d.sort() : d;
  }
  return l;
}
function Na(e, t) {
  if (!Array.isArray(e))
    throw new TypeError(`The first argument of calcExtents() must be an array. You passed in a ${typeof e}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(t) || t === void 0 || t === null)
    throw new TypeError("The second argument of calcExtents() must be an object with field names as keys as accessor functions as values.");
  const n = {}, l = Object.keys(t), r = l.length;
  let i, o, a, f, s, u, g, m;
  const c = e.length;
  for (i = 0; i < r; i += 1) {
    for (f = l[i], g = t[f], s = null, u = null, o = 0; o < c; o += 1)
      if (m = g(e[o]), Array.isArray(m)) {
        const d = m.length;
        for (a = 0; a < d; a += 1)
          m[a] !== !1 && m[a] !== void 0 && m[a] !== null && Number.isNaN(m[a]) === !1 && ((s === null || m[a] < s) && (s = m[a]), (u === null || m[a] > u) && (u = m[a]));
      } else
        m !== !1 && m !== void 0 && m !== null && Number.isNaN(m) === !1 && ((s === null || m < s) && (s = m), (u === null || m > u) && (u = m));
    n[f] = [s, u];
  }
  return n;
}
function sn(e, t) {
  return e.length !== t.length ? !1 : e.every((n) => t.includes(n));
}
function mo(e) {
  return !!(typeof e.bandwidth == "function" || sn(Object.keys(e), ["domain", "range", "unknown", "copy"]));
}
function Sa(e, t, n) {
  const l = Object.keys(n).reduce((i, o) => {
    const a = mo(n[o]) === !0 ? "ordinal" : "other";
    return i[a] || (i[a] = {}), i[a][o] = t[o], i;
  }, { ordinal: !1, other: !1 });
  let r = {};
  return l.ordinal && (r = va(e, l.ordinal)), l.other && (r = { ...r, ...Na(e, l.other) }), r;
}
function Ra(e = [], t) {
  return Array.isArray(t) === !0 ? t.map((n, l) => n === null ? e[l] : n) : e;
}
function fl(e) {
  return function([n, l]) {
    return typeof l == "function" && (l = l(n[e])), n ? Ra(n[e], l) : l;
  };
}
function _l(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ma(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ho(e) {
  let t, n, l;
  e.length !== 2 ? (t = _l, n = (a, f) => _l(e(a), f), l = (a, f) => e(a) - f) : (t = e === _l || e === Ma ? e : za, n = e, l = e);
  function r(a, f, s = 0, u = a.length) {
    if (s < u) {
      if (t(f, f) !== 0)
        return u;
      do {
        const g = s + u >>> 1;
        n(a[g], f) < 0 ? s = g + 1 : u = g;
      } while (s < u);
    }
    return s;
  }
  function i(a, f, s = 0, u = a.length) {
    if (s < u) {
      if (t(f, f) !== 0)
        return u;
      do {
        const g = s + u >>> 1;
        n(a[g], f) <= 0 ? s = g + 1 : u = g;
      } while (s < u);
    }
    return s;
  }
  function o(a, f, s = 0, u = a.length) {
    const g = r(a, f, s, u - 1);
    return g > s && l(a[g - 1], f) > -l(a[g], f) ? g - 1 : g;
  }
  return { left: r, center: o, right: i };
}
function za() {
  return 0;
}
function Ea(e) {
  return e === null ? NaN : +e;
}
const Da = ho(_l), Ta = Da.right;
ho(Ea).center;
const Aa = Ta;
class Hr extends Map {
  constructor(t, n = La) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [l, r] of t)
        this.set(l, r);
  }
  get(t) {
    return super.get(Gr(this, t));
  }
  has(t) {
    return super.has(Gr(this, t));
  }
  set(t, n) {
    return super.set(xa(this, t), n);
  }
  delete(t) {
    return super.delete(Ca(this, t));
  }
}
function Gr({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) ? e.get(l) : n;
}
function xa({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) ? e.get(l) : (e.set(l, n), n);
}
function Ca({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) && (n = e.get(l), e.delete(l)), n;
}
function La(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Oa = Math.sqrt(50), qa = Math.sqrt(10), Ia = Math.sqrt(2);
function wl(e, t, n) {
  const l = (t - e) / Math.max(0, n), r = Math.floor(Math.log10(l)), i = l / Math.pow(10, r), o = i >= Oa ? 10 : i >= qa ? 5 : i >= Ia ? 2 : 1;
  let a, f, s;
  return r < 0 ? (s = Math.pow(10, -r) / o, a = Math.round(e * s), f = Math.round(t * s), a / s < e && ++a, f / s > t && --f, s = -s) : (s = Math.pow(10, r) * o, a = Math.round(e / s), f = Math.round(t / s), a * s < e && ++a, f * s > t && --f), f < a && 0.5 <= n && n < 2 ? wl(e, t, n * 2) : [a, f, s];
}
function Pa(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0))
    return [];
  if (e === t)
    return [e];
  const l = t < e, [r, i, o] = l ? wl(t, e, n) : wl(e, t, n);
  if (!(i >= r))
    return [];
  const a = i - r + 1, f = new Array(a);
  if (l)
    if (o < 0)
      for (let s = 0; s < a; ++s)
        f[s] = (i - s) / -o;
    else
      for (let s = 0; s < a; ++s)
        f[s] = (i - s) * o;
  else if (o < 0)
    for (let s = 0; s < a; ++s)
      f[s] = (r + s) / -o;
  else
    for (let s = 0; s < a; ++s)
      f[s] = (r + s) * o;
  return f;
}
function tr(e, t, n) {
  return t = +t, e = +e, n = +n, wl(e, t, n)[2];
}
function Fa(e, t, n) {
  t = +t, e = +e, n = +n;
  const l = t < e, r = l ? tr(t, e, n) : tr(e, t, n);
  return (l ? -1 : 1) * (r < 0 ? 1 / -r : r);
}
function Ve(e, t, n) {
  e = +e, t = +t, n = (r = arguments.length) < 2 ? (t = e, e = 0, 1) : r < 3 ? 1 : +n;
  for (var l = -1, r = Math.max(0, Math.ceil((t - e) / n)) | 0, i = new Array(r); ++l < r; )
    i[l] = e + l * n;
  return i;
}
function Dl(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
const Wr = Symbol("implicit");
function Tl() {
  var e = new Hr(), t = [], n = [], l = Wr;
  function r(i) {
    let o = e.get(i);
    if (o === void 0) {
      if (l !== Wr)
        return l;
      e.set(i, o = t.push(i) - 1);
    }
    return n[o % n.length];
  }
  return r.domain = function(i) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new Hr();
    for (const o of i)
      e.has(o) || e.set(o, t.push(o) - 1);
    return r;
  }, r.range = function(i) {
    return arguments.length ? (n = Array.from(i), r) : n.slice();
  }, r.unknown = function(i) {
    return arguments.length ? (l = i, r) : l;
  }, r.copy = function() {
    return Tl(t, n).unknown(l);
  }, Dl.apply(r, arguments), r;
}
function or() {
  var e = Tl().unknown(void 0), t = e.domain, n = e.range, l = 0, r = 1, i, o, a = !1, f = 0, s = 0, u = 0.5;
  delete e.unknown;
  function g() {
    var m = t().length, c = r < l, d = c ? r : l, b = c ? l : r;
    i = (b - d) / Math.max(1, m - f + s * 2), a && (i = Math.floor(i)), d += (b - d - i * (m - f)) * u, o = i * (1 - f), a && (d = Math.round(d), o = Math.round(o));
    var p = Ve(m).map(function(w) {
      return d + i * w;
    });
    return n(c ? p.reverse() : p);
  }
  return e.domain = function(m) {
    return arguments.length ? (t(m), g()) : t();
  }, e.range = function(m) {
    return arguments.length ? ([l, r] = m, l = +l, r = +r, g()) : [l, r];
  }, e.rangeRound = function(m) {
    return [l, r] = m, l = +l, r = +r, a = !0, g();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return i;
  }, e.round = function(m) {
    return arguments.length ? (a = !!m, g()) : a;
  }, e.padding = function(m) {
    return arguments.length ? (f = Math.min(1, s = +m), g()) : f;
  }, e.paddingInner = function(m) {
    return arguments.length ? (f = Math.min(1, m), g()) : f;
  }, e.paddingOuter = function(m) {
    return arguments.length ? (s = +m, g()) : s;
  }, e.align = function(m) {
    return arguments.length ? (u = Math.max(0, Math.min(1, m)), g()) : u;
  }, e.copy = function() {
    return or(t(), [l, r]).round(a).paddingInner(f).paddingOuter(s).align(u);
  }, Dl.apply(g(), arguments);
}
function ar(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function bo(e, t) {
  var n = Object.create(e.prototype);
  for (var l in t)
    n[l] = t[l];
  return n;
}
function yn() {
}
var gn = 0.7, vl = 1 / gn, At = "\\s*([+-]?\\d+)\\s*", mn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", He = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ja = /^#([0-9a-f]{3,8})$/, Ba = new RegExp(`^rgb\\(${At},${At},${At}\\)$`), Ha = new RegExp(`^rgb\\(${He},${He},${He}\\)$`), Ga = new RegExp(`^rgba\\(${At},${At},${At},${mn}\\)$`), Wa = new RegExp(`^rgba\\(${He},${He},${He},${mn}\\)$`), Va = new RegExp(`^hsl\\(${mn},${He},${He}\\)$`), Ua = new RegExp(`^hsla\\(${mn},${He},${He},${mn}\\)$`), Vr = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
ar(yn, hn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ur,
  // Deprecated! Use color.formatHex.
  formatHex: Ur,
  formatHex8: Ka,
  formatHsl: Qa,
  formatRgb: Kr,
  toString: Kr
});
function Ur() {
  return this.rgb().formatHex();
}
function Ka() {
  return this.rgb().formatHex8();
}
function Qa() {
  return _o(this).formatHsl();
}
function Kr() {
  return this.rgb().formatRgb();
}
function hn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = ja.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Qr(t) : n === 3 ? new Re(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ul(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ul(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ba.exec(e)) ? new Re(t[1], t[2], t[3], 1) : (t = Ha.exec(e)) ? new Re(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Ga.exec(e)) ? ul(t[1], t[2], t[3], t[4]) : (t = Wa.exec(e)) ? ul(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Va.exec(e)) ? Xr(t[1], t[2] / 100, t[3] / 100, 1) : (t = Ua.exec(e)) ? Xr(t[1], t[2] / 100, t[3] / 100, t[4]) : Vr.hasOwnProperty(e) ? Qr(Vr[e]) : e === "transparent" ? new Re(NaN, NaN, NaN, 0) : null;
}
function Qr(e) {
  return new Re(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ul(e, t, n, l) {
  return l <= 0 && (e = t = n = NaN), new Re(e, t, n, l);
}
function Ya(e) {
  return e instanceof yn || (e = hn(e)), e ? (e = e.rgb(), new Re(e.r, e.g, e.b, e.opacity)) : new Re();
}
function Nl(e, t, n, l) {
  return arguments.length === 1 ? Ya(e) : new Re(e, t, n, l ?? 1);
}
function Re(e, t, n, l) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +l;
}
ar(Re, Nl, bo(yn, {
  brighter(e) {
    return e = e == null ? vl : Math.pow(vl, e), new Re(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? gn : Math.pow(gn, e), new Re(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Re(nt(this.r), nt(this.g), nt(this.b), Sl(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Yr,
  // Deprecated! Use color.formatHex.
  formatHex: Yr,
  formatHex8: Ja,
  formatRgb: Jr,
  toString: Jr
}));
function Yr() {
  return `#${tt(this.r)}${tt(this.g)}${tt(this.b)}`;
}
function Ja() {
  return `#${tt(this.r)}${tt(this.g)}${tt(this.b)}${tt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Jr() {
  const e = Sl(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${nt(this.r)}, ${nt(this.g)}, ${nt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Sl(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function nt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function tt(e) {
  return e = nt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Xr(e, t, n, l) {
  return l <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ce(e, t, n, l);
}
function _o(e) {
  if (e instanceof Ce)
    return new Ce(e.h, e.s, e.l, e.opacity);
  if (e instanceof yn || (e = hn(e)), !e)
    return new Ce();
  if (e instanceof Ce)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, l = e.b / 255, r = Math.min(t, n, l), i = Math.max(t, n, l), o = NaN, a = i - r, f = (i + r) / 2;
  return a ? (t === i ? o = (n - l) / a + (n < l) * 6 : n === i ? o = (l - t) / a + 2 : o = (t - n) / a + 4, a /= f < 0.5 ? i + r : 2 - i - r, o *= 60) : a = f > 0 && f < 1 ? 0 : o, new Ce(o, a, f, e.opacity);
}
function Xa(e, t, n, l) {
  return arguments.length === 1 ? _o(e) : new Ce(e, t, n, l ?? 1);
}
function Ce(e, t, n, l) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +l;
}
ar(Ce, Xa, bo(yn, {
  brighter(e) {
    return e = e == null ? vl : Math.pow(vl, e), new Ce(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? gn : Math.pow(gn, e), new Ce(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, l = n + (n < 0.5 ? n : 1 - n) * t, r = 2 * n - l;
    return new Re(
      Zl(e >= 240 ? e - 240 : e + 120, r, l),
      Zl(e, r, l),
      Zl(e < 120 ? e + 240 : e - 120, r, l),
      this.opacity
    );
  },
  clamp() {
    return new Ce(Zr(this.h), cl(this.s), cl(this.l), Sl(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Sl(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Zr(this.h)}, ${cl(this.s) * 100}%, ${cl(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Zr(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function cl(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Zl(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const sr = (e) => () => e;
function Za(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function $a(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(l) {
    return Math.pow(e + l * t, n);
  };
}
function es(e) {
  return (e = +e) == 1 ? yo : function(t, n) {
    return n - t ? $a(t, n, e) : sr(isNaN(t) ? n : t);
  };
}
function yo(e, t) {
  var n = t - e;
  return n ? Za(e, n) : sr(isNaN(e) ? t : e);
}
const $r = function e(t) {
  var n = es(t);
  function l(r, i) {
    var o = n((r = Nl(r)).r, (i = Nl(i)).r), a = n(r.g, i.g), f = n(r.b, i.b), s = yo(r.opacity, i.opacity);
    return function(u) {
      return r.r = o(u), r.g = a(u), r.b = f(u), r.opacity = s(u), r + "";
    };
  }
  return l.gamma = e, l;
}(1);
function ts(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, l = t.slice(), r;
  return function(i) {
    for (r = 0; r < n; ++r)
      l[r] = e[r] * (1 - i) + t[r] * i;
    return l;
  };
}
function ns(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function ls(e, t) {
  var n = t ? t.length : 0, l = e ? Math.min(n, e.length) : 0, r = new Array(l), i = new Array(n), o;
  for (o = 0; o < l; ++o)
    r[o] = fr(e[o], t[o]);
  for (; o < n; ++o)
    i[o] = t[o];
  return function(a) {
    for (o = 0; o < l; ++o)
      i[o] = r[o](a);
    return i;
  };
}
function rs(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(l) {
    return n.setTime(e * (1 - l) + t * l), n;
  };
}
function Rl(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function is(e, t) {
  var n = {}, l = {}, r;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (r in t)
    r in e ? n[r] = fr(e[r], t[r]) : l[r] = t[r];
  return function(i) {
    for (r in n)
      l[r] = n[r](i);
    return l;
  };
}
var nr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, $l = new RegExp(nr.source, "g");
function os(e) {
  return function() {
    return e;
  };
}
function as(e) {
  return function(t) {
    return e(t) + "";
  };
}
function ss(e, t) {
  var n = nr.lastIndex = $l.lastIndex = 0, l, r, i, o = -1, a = [], f = [];
  for (e = e + "", t = t + ""; (l = nr.exec(e)) && (r = $l.exec(t)); )
    (i = r.index) > n && (i = t.slice(n, i), a[o] ? a[o] += i : a[++o] = i), (l = l[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, f.push({ i: o, x: Rl(l, r) })), n = $l.lastIndex;
  return n < t.length && (i = t.slice(n), a[o] ? a[o] += i : a[++o] = i), a.length < 2 ? f[0] ? as(f[0].x) : os(t) : (t = f.length, function(s) {
    for (var u = 0, g; u < t; ++u)
      a[(g = f[u]).i] = g.x(s);
    return a.join("");
  });
}
function fr(e, t) {
  var n = typeof t, l;
  return t == null || n === "boolean" ? sr(t) : (n === "number" ? Rl : n === "string" ? (l = hn(t)) ? (t = l, $r) : ss : t instanceof hn ? $r : t instanceof Date ? rs : ns(t) ? ts : Array.isArray(t) ? ls : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? is : Rl)(e, t);
}
function fs(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function us(e) {
  return function() {
    return e;
  };
}
function cs(e) {
  return +e;
}
var ei = [0, 1];
function qe(e) {
  return e;
}
function lr(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : us(isNaN(t) ? NaN : 0.5);
}
function ds(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(l) {
    return Math.max(e, Math.min(t, l));
  };
}
function gs(e, t, n) {
  var l = e[0], r = e[1], i = t[0], o = t[1];
  return r < l ? (l = lr(r, l), i = n(o, i)) : (l = lr(l, r), i = n(i, o)), function(a) {
    return i(l(a));
  };
}
function ms(e, t, n) {
  var l = Math.min(e.length, t.length) - 1, r = new Array(l), i = new Array(l), o = -1;
  for (e[l] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < l; )
    r[o] = lr(e[o], e[o + 1]), i[o] = n(t[o], t[o + 1]);
  return function(a) {
    var f = Aa(e, a, 1, l) - 1;
    return i[f](r[f](a));
  };
}
function po(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function ko() {
  var e = ei, t = ei, n = fr, l, r, i, o = qe, a, f, s;
  function u() {
    var m = Math.min(e.length, t.length);
    return o !== qe && (o = ds(e[0], e[m - 1])), a = m > 2 ? ms : gs, f = s = null, g;
  }
  function g(m) {
    return m == null || isNaN(m = +m) ? i : (f || (f = a(e.map(l), t, n)))(l(o(m)));
  }
  return g.invert = function(m) {
    return o(r((s || (s = a(t, e.map(l), Rl)))(m)));
  }, g.domain = function(m) {
    return arguments.length ? (e = Array.from(m, cs), u()) : e.slice();
  }, g.range = function(m) {
    return arguments.length ? (t = Array.from(m), u()) : t.slice();
  }, g.rangeRound = function(m) {
    return t = Array.from(m), n = fs, u();
  }, g.clamp = function(m) {
    return arguments.length ? (o = m ? !0 : qe, u()) : o !== qe;
  }, g.interpolate = function(m) {
    return arguments.length ? (n = m, u()) : n;
  }, g.unknown = function(m) {
    return arguments.length ? (i = m, g) : i;
  }, function(m, c) {
    return l = m, r = c, u();
  };
}
function hs() {
  return ko()(qe, qe);
}
function bs(e, t, n, l) {
  var r = Fa(e, t, n), i;
  switch (l = kl(l ?? ",f"), l.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return l.precision == null && !isNaN(i = _a(r, o)) && (l.precision = i), co(l, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      l.precision == null && !isNaN(i = ya(r, Math.max(Math.abs(e), Math.abs(t)))) && (l.precision = i - (l.type === "e"));
      break;
    }
    case "f":
    case "%": {
      l.precision == null && !isNaN(i = go(r)) && (l.precision = i - (l.type === "%") * 2);
      break;
    }
  }
  return re(l);
}
function wo(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var l = t();
    return Pa(l[0], l[l.length - 1], n ?? 10);
  }, e.tickFormat = function(n, l) {
    var r = t();
    return bs(r[0], r[r.length - 1], n ?? 10, l);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var l = t(), r = 0, i = l.length - 1, o = l[r], a = l[i], f, s, u = 10;
    for (a < o && (s = o, o = a, a = s, s = r, r = i, i = s); u-- > 0; ) {
      if (s = tr(o, a, n), s === f)
        return l[r] = o, l[i] = a, t(l);
      if (s > 0)
        o = Math.floor(o / s) * s, a = Math.ceil(a / s) * s;
      else if (s < 0)
        o = Math.ceil(o * s) / s, a = Math.floor(a * s) / s;
      else
        break;
      f = s;
    }
    return e;
  }, e;
}
function Xe() {
  var e = hs();
  return e.copy = function() {
    return po(e, Xe());
  }, Dl.apply(e, arguments), wo(e);
}
function ti(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function _s(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function ys(e) {
  return e < 0 ? -e * e : e * e;
}
function ps(e) {
  var t = e(qe, qe), n = 1;
  function l() {
    return n === 1 ? e(qe, qe) : n === 0.5 ? e(_s, ys) : e(ti(n), ti(1 / n));
  }
  return t.exponent = function(r) {
    return arguments.length ? (n = +r, l()) : n;
  }, wo(t);
}
function vo() {
  var e = ps(ko());
  return e.copy = function() {
    return po(e, vo()).exponent(e.exponent());
  }, Dl.apply(e, arguments), e;
}
function ks() {
  return vo.apply(null, arguments).exponent(0.5);
}
const fn = {
  x: Xe,
  y: Xe,
  z: Xe,
  r: ks
};
function ws(e) {
  return e.constant ? "symlog" : e.base ? "log" : e.exponent ? e.exponent() === 0.5 ? "sqrt" : "pow" : "other";
}
function ni(e) {
  return e;
}
function vs(e) {
  return (t) => Math.log(e * t);
}
function Ns(e) {
  return (t) => e * Math.exp(t);
}
function Ss(e) {
  return (t) => Math.sign(t) * Math.log1p(Math.abs(t / e));
}
function Rs(e) {
  return (t) => Math.sign(t) * Math.expm1(Math.abs(t)) * e;
}
function dl(e) {
  return function(n) {
    return n < 0 ? -Math.pow(-n, e) : Math.pow(n, e);
  };
}
function Ms(e) {
  const t = ws(e);
  if (t === "log") {
    const n = Math.sign(e.domain()[0]);
    return { lift: vs(n), ground: Ns(n), scaleType: t };
  }
  return t === "pow" ? { lift: dl(1), ground: dl(1 / 1), scaleType: t } : t === "sqrt" ? { lift: dl(0.5), ground: dl(1 / 0.5), scaleType: t } : t === "symlog" ? { lift: Ss(1), ground: Rs(1), scaleType: t } : { lift: ni, ground: ni, scaleType: t };
}
function Ml(e) {
  return e.replace(/^\w/, (t) => t.toUpperCase());
}
function Se(e, t = "") {
  return `scale${Ml(t)}${Ml(e)}`;
}
function No(e) {
  if (typeof e.bandwidth == "function")
    return typeof e.paddingInner == "function" ? Se("band") : Se("point");
  if (sn(Object.keys(e), ["domain", "range", "unknown", "copy"]))
    return Se("ordinal");
  let t = "";
  if (e.interpolator && (e.domain().length === 3 ? t = "diverging" : t = "sequential"), e.quantiles)
    return Se("quantile", t);
  if (e.thresholds)
    return Se("quantize", t);
  if (e.constant)
    return Se("symlog", t);
  if (e.base)
    return Se("log", t);
  if (e.exponent)
    return e.exponent() === 0.5 ? Se("sqrt", t) : Se("pow", t);
  if (sn(Object.keys(e), ["domain", "range", "invertExtent", "unknown", "copy"]))
    return Se("threshold");
  if (sn(Object.keys(e), ["invert", "range", "domain", "unknown", "copy", "ticks", "tickFormat", "nice"]))
    return Se("identity");
  if (sn(Object.keys(e), [
    "invert",
    "domain",
    "range",
    "rangeRound",
    "round",
    "clamp",
    "unknown",
    "copy",
    "ticks",
    "tickFormat",
    "nice"
  ]))
    return Se("radial");
  if (t)
    return Se(t);
  if (e.domain()[0] instanceof Date) {
    const n = /* @__PURE__ */ new Date();
    let l;
    return n.getDay = () => l = "time", n.getUTCDay = () => l = "utc", e.tickFormat(0, "%a")(n), Se(l);
  }
  return Se("linear");
}
const zs = ["scaleThreshold", "scaleQuantile", "scaleQuantize", "scaleSequentialQuantile"];
function Es(e, t) {
  if (typeof e.range != "function")
    throw console.log(e), new Error("Scale method `range` must be a function");
  if (typeof e.domain != "function")
    throw new Error("Scale method `domain` must be a function");
  if (!Array.isArray(t) || zs.includes(No(e)) || mo(e) === !0)
    return e.domain();
  const { lift: n, ground: l } = Ms(e), r = e.domain()[0], i = Object.prototype.toString.call(r) === "[object Date]", [o, a] = e.domain().map((c) => n(i ? c.getTime() : c)), [f, s] = e.range(), u = t[0] || 0, g = t[1] || 0, m = (a - o) / (Math.abs(s - f) - u - g);
  return [o - u * m, g * m + a].map((c) => l(i ? new Date(c) : c));
}
function Ds(e, t, n, l, r) {
  let i, o;
  return r === !0 ? (i = 0, o = 100) : (i = e === "r" ? 1 : 0, o = e === "y" ? n : e === "r" ? 25 : t), l === !0 ? [o, i] : [i, o];
}
function Ts(e, t, n, l, r, i) {
  return r ? typeof r == "function" ? r({ width: t, height: n }) : r : Ds(e, t, n, l, i);
}
function gl(e) {
  return function([n, l, r, i, o, a, f, s, u, g]) {
    if (l === null)
      return null;
    const m = Ts(e, f, s, a, u, g), c = n === fn[e] ? n() : n.copy();
    return c.domain(r), (!c.interpolator || typeof c.interpolator == "function" && c.interpolator().name.startsWith("identity")) && c.range(m), i && c.domain(Es(c, i)), (o === !0 || typeof o == "number") && (typeof c.nice == "function" ? c.nice(typeof o == "number" ? o : void 0) : console.error(`[Layer Cake] You set \`${e}Nice: true\` but the ${e}Scale does not have a \`.nice\` method. Ignoring...`)), c;
  };
}
function ml([e, t]) {
  return (n) => {
    const l = e(n);
    return Array.isArray(l) ? l.map((r) => t(r)) : t(l);
  };
}
function hl([e]) {
  if (typeof e == "function") {
    if (typeof e.range == "function")
      return e.range();
    console.error("[LayerCake] Your scale doesn't have a `.range` method?");
  }
  return null;
}
const Oe = "    ";
function As(e) {
  const { r: t, g: n, b: l, opacity: r } = Nl(e);
  return [t, n, l].every((i) => i >= 0 && i <= 255) ? { r: t, g: n, b: l, o: r } : !1;
}
function xs({ r: e, g: t, b: n }) {
  return (0.2126 * e + 0.7152 * t + 0.0722 * n) / 255 > 0.6 ? "black" : "white";
}
function Cs(e) {
  console.log("/********* LayerCake Debug ************/"), console.log("Bounding box:"), Ls(e.boundingBox), console.log(`Scales:
`), Object.keys(e.activeGetters).forEach((t) => {
    Os(t, e[`${t}Scale`], e[t]);
  }), console.log(`/************ End LayerCake Debug ***************/
`);
}
function Ls(e) {
  Object.entries(e).forEach(([t, n]) => {
    console.log(`${Oe}${t}:`, n);
  });
}
function Os(e, t, n) {
  const l = No(t);
  console.log(`${Oe}${e}:`), console.log(`${Oe}${Oe}Accessor: "${n.toString()}"`), console.log(`${Oe}${Oe}Type: ${l}`), li(t, "domain"), li(t, "range", " ");
}
function li(e, t, n = "") {
  const l = e[t](), r = Is(l);
  r ? qs(r, t, l) : console.log(`${Oe}${Oe}${Ml(t)}:${n}`, l);
}
function qs(e, t, n) {
  console.log(
    `${Oe}${Oe}${Ml(t)}:    %cArray%c(${n.length}) ` + e[0] + "%c ]",
    "color: #1377e4",
    "color: #737373",
    "color: #1478e4",
    ...e[1],
    "color: #1478e4"
  );
}
function Is(e) {
  const t = [], n = e.map((l, r) => {
    const i = As(l);
    if (i !== !1) {
      t.push(i);
      const o = r === e.length - 1 ? " " : "";
      return `%c ${l}${o}`;
    }
    return l;
  });
  return t.length ? [
    `%c[ ${n.join(", ")}`,
    t.map(
      (l) => `background-color: rgba(${l.r}, ${l.g}, ${l.b}, ${l.o}); color:${xs(l)};`
    )
  ] : null;
}
const Ps = (e) => ({
  element: e[0] & /*element*/
  4,
  width: e[1] & /*$width_d*/
  8,
  height: e[1] & /*$height_d*/
  16,
  aspectRatio: e[1] & /*$aspectRatio_d*/
  32,
  containerWidth: e[1] & /*$_containerWidth*/
  2,
  containerHeight: e[1] & /*$_containerHeight*/
  1,
  activeGetters: e[0] & /*$activeGetters_d*/
  1024,
  percentRange: e[1] & /*$_percentRange*/
  4,
  x: e[0] & /*$_x*/
  268435456,
  y: e[0] & /*$_y*/
  134217728,
  z: e[0] & /*$_z*/
  67108864,
  r: e[0] & /*$_r*/
  33554432,
  custom: e[0] & /*$_custom*/
  4096,
  data: e[0] & /*$_data*/
  1073741824,
  xNice: e[0] & /*$_xNice*/
  16777216,
  yNice: e[0] & /*$_yNice*/
  8388608,
  zNice: e[0] & /*$_zNice*/
  4194304,
  rNice: e[0] & /*$_rNice*/
  2097152,
  xReverse: e[0] & /*$_xReverse*/
  1048576,
  yReverse: e[0] & /*$_yReverse*/
  524288,
  zReverse: e[0] & /*$_zReverse*/
  262144,
  rReverse: e[0] & /*$_rReverse*/
  131072,
  xPadding: e[0] & /*$_xPadding*/
  65536,
  yPadding: e[0] & /*$_yPadding*/
  32768,
  zPadding: e[0] & /*$_zPadding*/
  16384,
  rPadding: e[0] & /*$_rPadding*/
  8192,
  padding: e[1] & /*$padding_d*/
  64,
  flatData: e[0] & /*$_flatData*/
  536870912,
  extents: e[1] & /*$extents_d*/
  128,
  xDomain: e[1] & /*$xDomain_d*/
  256,
  yDomain: e[1] & /*$yDomain_d*/
  512,
  zDomain: e[1] & /*$zDomain_d*/
  1024,
  rDomain: e[1] & /*$rDomain_d*/
  2048,
  xRange: e[1] & /*$xRange_d*/
  4096,
  yRange: e[1] & /*$yRange_d*/
  8192,
  zRange: e[1] & /*$zRange_d*/
  16384,
  rRange: e[1] & /*$rRange_d*/
  32768,
  config: e[0] & /*$_config*/
  2048,
  xScale: e[0] & /*$xScale_d*/
  512,
  xGet: e[1] & /*$xGet_d*/
  65536,
  yScale: e[0] & /*$yScale_d*/
  256,
  yGet: e[1] & /*$yGet_d*/
  131072,
  zScale: e[0] & /*$zScale_d*/
  128,
  zGet: e[1] & /*$zGet_d*/
  262144,
  rScale: e[0] & /*$rScale_d*/
  64,
  rGet: e[1] & /*$rGet_d*/
  524288
}), ri = (e) => ({
  element: (
    /*element*/
    e[2]
  ),
  width: (
    /*$width_d*/
    e[34]
  ),
  height: (
    /*$height_d*/
    e[35]
  ),
  aspectRatio: (
    /*$aspectRatio_d*/
    e[36]
  ),
  containerWidth: (
    /*$_containerWidth*/
    e[32]
  ),
  containerHeight: (
    /*$_containerHeight*/
    e[31]
  ),
  activeGetters: (
    /*$activeGetters_d*/
    e[10]
  ),
  percentRange: (
    /*$_percentRange*/
    e[33]
  ),
  x: (
    /*$_x*/
    e[28]
  ),
  y: (
    /*$_y*/
    e[27]
  ),
  z: (
    /*$_z*/
    e[26]
  ),
  r: (
    /*$_r*/
    e[25]
  ),
  custom: (
    /*$_custom*/
    e[12]
  ),
  data: (
    /*$_data*/
    e[30]
  ),
  xNice: (
    /*$_xNice*/
    e[24]
  ),
  yNice: (
    /*$_yNice*/
    e[23]
  ),
  zNice: (
    /*$_zNice*/
    e[22]
  ),
  rNice: (
    /*$_rNice*/
    e[21]
  ),
  xReverse: (
    /*$_xReverse*/
    e[20]
  ),
  yReverse: (
    /*$_yReverse*/
    e[19]
  ),
  zReverse: (
    /*$_zReverse*/
    e[18]
  ),
  rReverse: (
    /*$_rReverse*/
    e[17]
  ),
  xPadding: (
    /*$_xPadding*/
    e[16]
  ),
  yPadding: (
    /*$_yPadding*/
    e[15]
  ),
  zPadding: (
    /*$_zPadding*/
    e[14]
  ),
  rPadding: (
    /*$_rPadding*/
    e[13]
  ),
  padding: (
    /*$padding_d*/
    e[37]
  ),
  flatData: (
    /*$_flatData*/
    e[29]
  ),
  extents: (
    /*$extents_d*/
    e[38]
  ),
  xDomain: (
    /*$xDomain_d*/
    e[39]
  ),
  yDomain: (
    /*$yDomain_d*/
    e[40]
  ),
  zDomain: (
    /*$zDomain_d*/
    e[41]
  ),
  rDomain: (
    /*$rDomain_d*/
    e[42]
  ),
  xRange: (
    /*$xRange_d*/
    e[43]
  ),
  yRange: (
    /*$yRange_d*/
    e[44]
  ),
  zRange: (
    /*$zRange_d*/
    e[45]
  ),
  rRange: (
    /*$rRange_d*/
    e[46]
  ),
  config: (
    /*$_config*/
    e[11]
  ),
  xScale: (
    /*$xScale_d*/
    e[9]
  ),
  xGet: (
    /*$xGet_d*/
    e[47]
  ),
  yScale: (
    /*$yScale_d*/
    e[8]
  ),
  yGet: (
    /*$yGet_d*/
    e[48]
  ),
  zScale: (
    /*$zScale_d*/
    e[7]
  ),
  zGet: (
    /*$zGet_d*/
    e[49]
  ),
  rScale: (
    /*$rScale_d*/
    e[6]
  ),
  rGet: (
    /*$rGet_d*/
    e[50]
  )
});
function ii(e) {
  let t, n, l;
  const r = (
    /*#slots*/
    e[153].default
  ), i = Pe(
    r,
    e,
    /*$$scope*/
    e[152],
    ri
  );
  return {
    c() {
      t = k("div"), i && i.c(), h(t, "class", "layercake-container svelte-vhzpsp"), yl(() => (
        /*div_elementresize_handler*/
        e[155].call(t)
      )), j(
        t,
        "position",
        /*position*/
        e[5]
      ), j(
        t,
        "top",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), j(
        t,
        "right",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), j(
        t,
        "bottom",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), j(
        t,
        "left",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), j(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[4] === !1 ? "none" : null
      );
    },
    m(o, a) {
      M(o, t, a), i && i.m(t, null), e[154](t), n = Ho(
        t,
        /*div_elementresize_handler*/
        e[155].bind(t)
      ), l = !0;
    },
    p(o, a) {
      i && i.p && (!l || a[0] & /*element, $activeGetters_d, $_x, $_y, $_z, $_r, $_custom, $_data, $_xNice, $_yNice, $_zNice, $_rNice, $_xReverse, $_yReverse, $_zReverse, $_rReverse, $_xPadding, $_yPadding, $_zPadding, $_rPadding, $_flatData, $_config, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
      2147483588 | a[1] & /*$width_d, $height_d, $aspectRatio_d, $_containerWidth, $_containerHeight, $_percentRange, $padding_d, $extents_d, $xDomain_d, $yDomain_d, $zDomain_d, $rDomain_d, $xRange_d, $yRange_d, $zRange_d, $rRange_d, $xGet_d, $yGet_d, $zGet_d, $rGet_d*/
      1048575 | a[4] & /*$$scope*/
      268435456) && je(
        i,
        r,
        o,
        /*$$scope*/
        o[152],
        l ? Fe(
          r,
          /*$$scope*/
          o[152],
          a,
          Ps
        ) : Be(
          /*$$scope*/
          o[152]
        ),
        ri
      ), a[0] & /*position*/
      32 && j(
        t,
        "position",
        /*position*/
        o[5]
      ), a[0] & /*position*/
      32 && j(
        t,
        "top",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && j(
        t,
        "right",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && j(
        t,
        "bottom",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && j(
        t,
        "left",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), a[0] & /*pointerEvents*/
      16 && j(
        t,
        "pointer-events",
        /*pointerEvents*/
        o[4] === !1 ? "none" : null
      );
    },
    i(o) {
      l || (v(i, o), l = !0);
    },
    o(o) {
      S(i, o), l = !1;
    },
    d(o) {
      o && R(t), i && i.d(o), e[154](null), n();
    }
  };
}
function Fs(e) {
  let t, n, l = (
    /*ssr*/
    (e[3] === !0 || typeof window < "u") && ii(e)
  );
  return {
    c() {
      l && l.c(), t = we();
    },
    m(r, i) {
      l && l.m(r, i), M(r, t, i), n = !0;
    },
    p(r, i) {
      /*ssr*/
      r[3] === !0 || typeof window < "u" ? l ? (l.p(r, i), i[0] & /*ssr*/
      8 && v(l, 1)) : (l = ii(r), l.c(), v(l, 1), l.m(t.parentNode, t)) : l && (te(), S(l, 1, 1, () => {
        l = null;
      }), ne());
    },
    i(r) {
      n || (v(l), n = !0);
    },
    o(r) {
      S(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && R(t);
    }
  };
}
function js(e, t, n) {
  let l, r, i, o, a, f, s, u, g, m, c, d, b, p, w, N, z, T, F, O, I, ie, P, x, A, q, Z, ce, B, G, D, $, V, oe, ge, Ne, ve, Te, ze, me, ae, rt, Ge, Me, se, It, Ae, Pt, Y, he, it, cr, dr, gr, mr, hr, br, _r, yr, pr, kr, wr, { $$slots: To = {}, $$scope: vr } = t;
  const Ao = wa(Cs, 200);
  let { ssr: Cl = !1 } = t, { pointerEvents: Nr = !0 } = t, { position: Sr = "relative" } = t, { percentRange: pn = !1 } = t, { width: Ll = void 0 } = t, { height: Ol = void 0 } = t, { containerWidth: ot = Ll || 100 } = t, { containerHeight: at = Ol || 100 } = t, { element: kn = void 0 } = t, { x: st = void 0 } = t, { y: ft = void 0 } = t, { z: ut = void 0 } = t, { r: ct = void 0 } = t, { data: dt = [] } = t, { xDomain: gt = void 0 } = t, { yDomain: mt = void 0 } = t, { zDomain: ht = void 0 } = t, { rDomain: bt = void 0 } = t, { xNice: wn = !1 } = t, { yNice: vn = !1 } = t, { zNice: Nn = !1 } = t, { rNice: Sn = !1 } = t, { xPadding: Rn = void 0 } = t, { yPadding: Mn = void 0 } = t, { zPadding: zn = void 0 } = t, { rPadding: En = void 0 } = t, { xScale: Dn = fn.x } = t, { yScale: Ft = fn.y } = t, { zScale: Tn = fn.z } = t, { rScale: An = fn.r } = t, { xRange: _t = void 0 } = t, { yRange: yt = void 0 } = t, { zRange: pt = void 0 } = t, { rRange: kt = void 0 } = t, { xReverse: xn = !1 } = t, { yReverse: Cn = void 0 } = t, { zReverse: Ln = !1 } = t, { rReverse: On = !1 } = t, { padding: qn = {} } = t, { extents: In = {} } = t, { flatData: Pn = void 0 } = t, { custom: Fn = {} } = t, { debug: ql = !1 } = t, Il = !1;
  Ct(() => {
    Il = !0;
  });
  const le = {}, Ke = U(pn);
  E(e, Ke, (_) => n(33, se = _));
  const wt = U(ot);
  E(e, wt, (_) => n(32, Me = _));
  const vt = U(at);
  E(e, vt, (_) => n(31, Ge = _));
  const jn = U(Xl(In));
  E(e, jn, (_) => n(170, rt = _));
  const Bn = U(dt);
  E(e, Bn, (_) => n(30, ae = _));
  const jt = U(Pn || dt);
  E(e, jt, (_) => n(29, me = _));
  const Hn = U(qn);
  E(e, Hn, (_) => n(169, ze = _));
  const Nt = U(Je(st));
  E(e, Nt, (_) => n(28, Te = _));
  const St = U(Je(ft));
  E(e, St, (_) => n(27, ve = _));
  const Rt = U(Je(ut));
  E(e, Rt, (_) => n(26, Ne = _));
  const Mt = U(Je(ct));
  E(e, Mt, (_) => n(25, ge = _));
  const Gn = U(gt);
  E(e, Gn, (_) => n(168, oe = _));
  const Wn = U(mt);
  E(e, Wn, (_) => n(167, V = _));
  const Vn = U(ht);
  E(e, Vn, (_) => n(166, $ = _));
  const Un = U(bt);
  E(e, Un, (_) => n(165, D = _));
  const Bt = U(wn);
  E(e, Bt, (_) => n(24, G = _));
  const Ht = U(vn);
  E(e, Ht, (_) => n(23, B = _));
  const Gt = U(Nn);
  E(e, Gt, (_) => n(22, ce = _));
  const Wt = U(Sn);
  E(e, Wt, (_) => n(21, Z = _));
  const Vt = U(xn);
  E(e, Vt, (_) => n(20, q = _));
  const Ut = U(l);
  E(e, Ut, (_) => n(19, A = _));
  const Kt = U(Ln);
  E(e, Kt, (_) => n(18, x = _));
  const Qt = U(On);
  E(e, Qt, (_) => n(17, P = _));
  const Yt = U(Rn);
  E(e, Yt, (_) => n(16, ie = _));
  const Jt = U(Mn);
  E(e, Jt, (_) => n(15, I = _));
  const Xt = U(zn);
  E(e, Xt, (_) => n(14, O = _));
  const Zt = U(En);
  E(e, Zt, (_) => n(13, F = _));
  const Kn = U(_t);
  E(e, Kn, (_) => n(164, T = _));
  const Qn = U(yt);
  E(e, Qn, (_) => n(163, z = _));
  const Yn = U(pt);
  E(e, Yn, (_) => n(162, N = _));
  const Jn = U(kt);
  E(e, Jn, (_) => n(161, w = _));
  const $t = U(Dn);
  E(e, $t, (_) => n(160, p = _));
  const en = U(Ft);
  E(e, en, (_) => n(159, b = _));
  const tn = U(Tn);
  E(e, tn, (_) => n(158, d = _));
  const nn = U(An);
  E(e, nn, (_) => n(157, c = _));
  const Xn = U(le);
  E(e, Xn, (_) => n(11, g = _));
  const Zn = U(Fn);
  E(e, Zn, (_) => n(12, m = _));
  const $n = fe([Nt, St, Rt, Mt], ([_, We, Le, _e]) => {
    const Ze = {};
    return _ && (Ze.x = _), We && (Ze.y = We), Le && (Ze.z = Le), _e && (Ze.r = _e), Ze;
  });
  E(e, $n, (_) => n(10, s = _));
  const el = fe([Hn, wt, vt], ([_]) => Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, _));
  E(e, el, (_) => n(37, Y = _));
  const tl = fe([wt, vt, el], ([_, We, Le]) => {
    const _e = {};
    return _e.top = Le.top, _e.right = _ - Le.right, _e.bottom = We - Le.bottom, _e.left = Le.left, _e.width = _e.right - _e.left, _e.height = _e.bottom - _e.top, _e.width <= 0 && Il === !0 && console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?"), _e.height <= 0 && Il === !0 && console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?"), _e;
  });
  E(e, tl, (_) => n(151, u = _));
  const Qe = fe([tl], ([_]) => _.width);
  E(e, Qe, (_) => n(34, It = _));
  const Ye = fe([tl], ([_]) => _.height);
  E(e, Ye, (_) => n(35, Ae = _));
  const xe = fe([jt, $n, jn, $t, en, nn, tn], ([_, We, Le, _e, Ze, Lo, Oo]) => {
    const qo = {
      x: _e,
      y: Ze,
      r: Lo,
      z: Oo
    }, Kl = Xl(We, Le), Io = Object.fromEntries(Object.keys(Kl).map((Ql) => [Ql, qo[Ql]]));
    return Object.keys(Kl).length > 0 ? { ...Sa(_, Kl, Io), ...Le } : {};
  });
  E(e, xe, (_) => n(38, he = _));
  const nl = fe([xe, Gn], fl("x"));
  E(e, nl, (_) => n(39, it = _));
  const ll = fe([xe, Wn], fl("y"));
  E(e, ll, (_) => n(40, cr = _));
  const rl = fe([xe, Vn], fl("z"));
  E(e, rl, (_) => n(41, dr = _));
  const il = fe([xe, Un], fl("r"));
  E(e, il, (_) => n(42, gr = _));
  const ln = fe(
    [
      $t,
      xe,
      nl,
      Yt,
      Bt,
      Vt,
      Qe,
      Ye,
      Kn,
      Ke
    ],
    gl("x")
  );
  E(e, ln, (_) => n(9, f = _));
  const Pl = fe([Nt, ln], ml);
  E(e, Pl, (_) => n(47, yr = _));
  const rn = fe(
    [
      en,
      xe,
      ll,
      Jt,
      Ht,
      Ut,
      Qe,
      Ye,
      Qn,
      Ke
    ],
    gl("y")
  );
  E(e, rn, (_) => n(8, a = _));
  const Fl = fe([St, rn], ml);
  E(e, Fl, (_) => n(48, pr = _));
  const on = fe(
    [
      tn,
      xe,
      rl,
      Xt,
      Gt,
      Kt,
      Qe,
      Ye,
      Yn,
      Ke
    ],
    gl("z")
  );
  E(e, on, (_) => n(7, o = _));
  const jl = fe([Rt, on], ml);
  E(e, jl, (_) => n(49, kr = _));
  const an = fe(
    [
      nn,
      xe,
      il,
      Zt,
      Wt,
      Qt,
      Qe,
      Ye,
      Jn,
      Ke
    ],
    gl("r")
  );
  E(e, an, (_) => n(6, i = _));
  const Bl = fe([Mt, an], ml);
  E(e, Bl, (_) => n(50, wr = _));
  const Hl = fe([ln], hl);
  E(e, Hl, (_) => n(43, mr = _));
  const Gl = fe([rn], hl);
  E(e, Gl, (_) => n(44, hr = _));
  const Wl = fe([on], hl);
  E(e, Wl, (_) => n(45, br = _));
  const Vl = fe([an], hl);
  E(e, Vl, (_) => n(46, _r = _));
  const Ul = fe([Qe, Ye], ([_, We]) => _ / We);
  E(e, Ul, (_) => n(36, Pt = _));
  function xo(_) {
    Ue[_ ? "unshift" : "push"](() => {
      kn = _, n(2, kn);
    });
  }
  function Co() {
    ot = this.clientWidth, at = this.clientHeight, n(0, ot), n(1, at);
  }
  return e.$$set = (_) => {
    "ssr" in _ && n(3, Cl = _.ssr), "pointerEvents" in _ && n(4, Nr = _.pointerEvents), "position" in _ && n(5, Sr = _.position), "percentRange" in _ && n(111, pn = _.percentRange), "width" in _ && n(112, Ll = _.width), "height" in _ && n(113, Ol = _.height), "containerWidth" in _ && n(0, ot = _.containerWidth), "containerHeight" in _ && n(1, at = _.containerHeight), "element" in _ && n(2, kn = _.element), "x" in _ && n(114, st = _.x), "y" in _ && n(115, ft = _.y), "z" in _ && n(116, ut = _.z), "r" in _ && n(117, ct = _.r), "data" in _ && n(118, dt = _.data), "xDomain" in _ && n(119, gt = _.xDomain), "yDomain" in _ && n(120, mt = _.yDomain), "zDomain" in _ && n(121, ht = _.zDomain), "rDomain" in _ && n(122, bt = _.rDomain), "xNice" in _ && n(123, wn = _.xNice), "yNice" in _ && n(124, vn = _.yNice), "zNice" in _ && n(125, Nn = _.zNice), "rNice" in _ && n(126, Sn = _.rNice), "xPadding" in _ && n(127, Rn = _.xPadding), "yPadding" in _ && n(128, Mn = _.yPadding), "zPadding" in _ && n(129, zn = _.zPadding), "rPadding" in _ && n(130, En = _.rPadding), "xScale" in _ && n(131, Dn = _.xScale), "yScale" in _ && n(132, Ft = _.yScale), "zScale" in _ && n(133, Tn = _.zScale), "rScale" in _ && n(134, An = _.rScale), "xRange" in _ && n(135, _t = _.xRange), "yRange" in _ && n(136, yt = _.yRange), "zRange" in _ && n(137, pt = _.zRange), "rRange" in _ && n(138, kt = _.rRange), "xReverse" in _ && n(139, xn = _.xReverse), "yReverse" in _ && n(140, Cn = _.yReverse), "zReverse" in _ && n(141, Ln = _.zReverse), "rReverse" in _ && n(142, On = _.rReverse), "padding" in _ && n(143, qn = _.padding), "extents" in _ && n(144, In = _.extents), "flatData" in _ && n(145, Pn = _.flatData), "custom" in _ && n(146, Fn = _.custom), "debug" in _ && n(147, ql = _.debug), "$$scope" in _ && n(152, vr = _.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[4] & /*yReverse, yScale*/
    65792 && n(150, l = typeof Cn > "u" ? typeof Ft.bandwidth != "function" : Cn), e.$$.dirty[3] & /*x*/
    2097152 && st && n(148, le.x = st, le), e.$$.dirty[3] & /*y*/
    4194304 && ft && n(148, le.y = ft, le), e.$$.dirty[3] & /*z*/
    8388608 && ut && n(148, le.z = ut, le), e.$$.dirty[3] & /*r*/
    16777216 && ct && n(148, le.r = ct, le), e.$$.dirty[3] & /*xDomain*/
    67108864 && gt && n(148, le.xDomain = gt, le), e.$$.dirty[3] & /*yDomain*/
    134217728 && mt && n(148, le.yDomain = mt, le), e.$$.dirty[3] & /*zDomain*/
    268435456 && ht && n(148, le.zDomain = ht, le), e.$$.dirty[3] & /*rDomain*/
    536870912 && bt && n(148, le.rDomain = bt, le), e.$$.dirty[4] & /*xRange*/
    2048 && _t && n(148, le.xRange = _t, le), e.$$.dirty[4] & /*yRange*/
    4096 && yt && n(148, le.yRange = yt, le), e.$$.dirty[4] & /*zRange*/
    8192 && pt && n(148, le.zRange = pt, le), e.$$.dirty[4] & /*rRange*/
    16384 && kt && n(148, le.rRange = kt, le), e.$$.dirty[3] & /*percentRange*/
    262144 && X(Ke, se = pn, se), e.$$.dirty[0] & /*containerWidth*/
    1 && X(wt, Me = ot, Me), e.$$.dirty[0] & /*containerHeight*/
    2 && X(vt, Ge = at, Ge), e.$$.dirty[4] & /*extents*/
    1048576 && X(jn, rt = Xl(In), rt), e.$$.dirty[3] & /*data*/
    33554432 && X(Bn, ae = dt, ae), e.$$.dirty[3] & /*data*/
    33554432 | e.$$.dirty[4] & /*flatData*/
    2097152 && X(jt, me = Pn || dt, me), e.$$.dirty[4] & /*padding*/
    524288 && X(Hn, ze = qn, ze), e.$$.dirty[3] & /*x*/
    2097152 && X(Nt, Te = Je(st), Te), e.$$.dirty[3] & /*y*/
    4194304 && X(St, ve = Je(ft), ve), e.$$.dirty[3] & /*z*/
    8388608 && X(Rt, Ne = Je(ut), Ne), e.$$.dirty[3] & /*r*/
    16777216 && X(Mt, ge = Je(ct), ge), e.$$.dirty[3] & /*xDomain*/
    67108864 && X(Gn, oe = gt, oe), e.$$.dirty[3] & /*yDomain*/
    134217728 && X(Wn, V = mt, V), e.$$.dirty[3] & /*zDomain*/
    268435456 && X(Vn, $ = ht, $), e.$$.dirty[3] & /*rDomain*/
    536870912 && X(Un, D = bt, D), e.$$.dirty[3] & /*xNice*/
    1073741824 && X(Bt, G = wn, G), e.$$.dirty[4] & /*yNice*/
    1 && X(Ht, B = vn, B), e.$$.dirty[4] & /*zNice*/
    2 && X(Gt, ce = Nn, ce), e.$$.dirty[4] & /*rNice*/
    4 && X(Wt, Z = Sn, Z), e.$$.dirty[4] & /*xReverse*/
    32768 && X(Vt, q = xn, q), e.$$.dirty[4] & /*yReverseValue*/
    67108864 && X(Ut, A = l, A), e.$$.dirty[4] & /*zReverse*/
    131072 && X(Kt, x = Ln, x), e.$$.dirty[4] & /*rReverse*/
    262144 && X(Qt, P = On, P), e.$$.dirty[4] & /*xPadding*/
    8 && X(Yt, ie = Rn, ie), e.$$.dirty[4] & /*yPadding*/
    16 && X(Jt, I = Mn, I), e.$$.dirty[4] & /*zPadding*/
    32 && X(Xt, O = zn, O), e.$$.dirty[4] & /*rPadding*/
    64 && X(Zt, F = En, F), e.$$.dirty[4] & /*xRange*/
    2048 && X(Kn, T = _t, T), e.$$.dirty[4] & /*yRange*/
    4096 && X(Qn, z = yt, z), e.$$.dirty[4] & /*zRange*/
    8192 && X(Yn, N = pt, N), e.$$.dirty[4] & /*rRange*/
    16384 && X(Jn, w = kt, w), e.$$.dirty[4] & /*xScale*/
    128 && X($t, p = Dn, p), e.$$.dirty[4] & /*yScale*/
    256 && X(en, b = Ft, b), e.$$.dirty[4] & /*zScale*/
    512 && X(tn, d = Tn, d), e.$$.dirty[4] & /*rScale*/
    1024 && X(nn, c = An, c), e.$$.dirty[4] & /*custom*/
    4194304 && X(Zn, m = Fn, m), e.$$.dirty[4] & /*config*/
    16777216 && X(Xn, g = le, g), e.$$.dirty[4] & /*context*/
    33554432 && Vo("LayerCake", r), e.$$.dirty[0] & /*ssr, $activeGetters_d, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
    1992 | e.$$.dirty[4] & /*$box_d, debug, config*/
    159383552 && u && ql === !0 && (Cl === !0 || typeof window < "u") && Ao({
      boundingBox: u,
      activeGetters: s,
      x: le.x,
      y: le.y,
      z: le.z,
      r: le.r,
      xScale: f,
      yScale: a,
      zScale: o,
      rScale: i
    });
  }, n(149, r = {
    activeGetters: $n,
    width: Qe,
    height: Ye,
    percentRange: Ke,
    aspectRatio: Ul,
    containerWidth: wt,
    containerHeight: vt,
    x: Nt,
    y: St,
    z: Rt,
    r: Mt,
    custom: Zn,
    data: Bn,
    xNice: Bt,
    yNice: Ht,
    zNice: Gt,
    rNice: Wt,
    xReverse: Vt,
    yReverse: Ut,
    zReverse: Kt,
    rReverse: Qt,
    xPadding: Yt,
    yPadding: Jt,
    zPadding: Xt,
    rPadding: Zt,
    padding: el,
    flatData: jt,
    extents: xe,
    xDomain: nl,
    yDomain: ll,
    zDomain: rl,
    rDomain: il,
    xRange: Hl,
    yRange: Gl,
    zRange: Wl,
    rRange: Vl,
    config: Xn,
    xScale: ln,
    xGet: Pl,
    yScale: rn,
    yGet: Fl,
    zScale: on,
    zGet: jl,
    rScale: an,
    rGet: Bl
  }), [
    ot,
    at,
    kn,
    Cl,
    Nr,
    Sr,
    i,
    o,
    a,
    f,
    s,
    g,
    m,
    F,
    O,
    I,
    ie,
    P,
    x,
    A,
    q,
    Z,
    ce,
    B,
    G,
    ge,
    Ne,
    ve,
    Te,
    me,
    ae,
    Ge,
    Me,
    se,
    It,
    Ae,
    Pt,
    Y,
    he,
    it,
    cr,
    dr,
    gr,
    mr,
    hr,
    br,
    _r,
    yr,
    pr,
    kr,
    wr,
    Ke,
    wt,
    vt,
    jn,
    Bn,
    jt,
    Hn,
    Nt,
    St,
    Rt,
    Mt,
    Gn,
    Wn,
    Vn,
    Un,
    Bt,
    Ht,
    Gt,
    Wt,
    Vt,
    Ut,
    Kt,
    Qt,
    Yt,
    Jt,
    Xt,
    Zt,
    Kn,
    Qn,
    Yn,
    Jn,
    $t,
    en,
    tn,
    nn,
    Xn,
    Zn,
    $n,
    el,
    tl,
    Qe,
    Ye,
    xe,
    nl,
    ll,
    rl,
    il,
    ln,
    Pl,
    rn,
    Fl,
    on,
    jl,
    an,
    Bl,
    Hl,
    Gl,
    Wl,
    Vl,
    Ul,
    pn,
    Ll,
    Ol,
    st,
    ft,
    ut,
    ct,
    dt,
    gt,
    mt,
    ht,
    bt,
    wn,
    vn,
    Nn,
    Sn,
    Rn,
    Mn,
    zn,
    En,
    Dn,
    Ft,
    Tn,
    An,
    _t,
    yt,
    pt,
    kt,
    xn,
    Cn,
    Ln,
    On,
    qn,
    In,
    Pn,
    Fn,
    ql,
    le,
    r,
    l,
    u,
    vr,
    To,
    xo,
    Co
  ];
}
class Al extends ke {
  constructor(t) {
    super(), pe(
      this,
      t,
      js,
      Fs,
      be,
      {
        ssr: 3,
        pointerEvents: 4,
        position: 5,
        percentRange: 111,
        width: 112,
        height: 113,
        containerWidth: 0,
        containerHeight: 1,
        element: 2,
        x: 114,
        y: 115,
        z: 116,
        r: 117,
        data: 118,
        xDomain: 119,
        yDomain: 120,
        zDomain: 121,
        rDomain: 122,
        xNice: 123,
        yNice: 124,
        zNice: 125,
        rNice: 126,
        xPadding: 127,
        yPadding: 128,
        zPadding: 129,
        rPadding: 130,
        xScale: 131,
        yScale: 132,
        zScale: 133,
        rScale: 134,
        xRange: 135,
        yRange: 136,
        zRange: 137,
        rRange: 138,
        xReverse: 139,
        yReverse: 140,
        zReverse: 141,
        rReverse: 142,
        padding: 143,
        extents: 144,
        flatData: 145,
        custom: 146,
        debug: 147
      },
      null,
      [-1, -1, -1, -1, -1, -1]
    );
  }
}
const Bs = (e) => ({ element: e & /*element*/
1 }), oi = (e) => ({ element: (
  /*element*/
  e[0]
) });
function Hs(e) {
  let t, n;
  const l = (
    /*#slots*/
    e[11].default
  ), r = Pe(
    l,
    e,
    /*$$scope*/
    e[10],
    oi
  );
  return {
    c() {
      t = k("div"), r && r.c(), h(t, "class", "layercake-layout-html svelte-1bu60uu"), h(
        t,
        "role",
        /*roleVal*/
        e[6]
      ), h(
        t,
        "aria-label",
        /*label*/
        e[3]
      ), h(
        t,
        "aria-labelledby",
        /*labelledBy*/
        e[4]
      ), h(
        t,
        "aria-describedby",
        /*describedBy*/
        e[5]
      ), j(
        t,
        "z-index",
        /*zIndex*/
        e[1]
      ), j(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[2] === !1 ? "none" : null
      ), j(
        t,
        "top",
        /*$padding*/
        e[7].top + "px"
      ), j(
        t,
        "right",
        /*$padding*/
        e[7].right + "px"
      ), j(
        t,
        "bottom",
        /*$padding*/
        e[7].bottom + "px"
      ), j(
        t,
        "left",
        /*$padding*/
        e[7].left + "px"
      );
    },
    m(i, o) {
      M(i, t, o), r && r.m(t, null), e[12](t), n = !0;
    },
    p(i, [o]) {
      r && r.p && (!n || o & /*$$scope, element*/
      1025) && je(
        r,
        l,
        i,
        /*$$scope*/
        i[10],
        n ? Fe(
          l,
          /*$$scope*/
          i[10],
          o,
          Bs
        ) : Be(
          /*$$scope*/
          i[10]
        ),
        oi
      ), (!n || o & /*roleVal*/
      64) && h(
        t,
        "role",
        /*roleVal*/
        i[6]
      ), (!n || o & /*label*/
      8) && h(
        t,
        "aria-label",
        /*label*/
        i[3]
      ), (!n || o & /*labelledBy*/
      16) && h(
        t,
        "aria-labelledby",
        /*labelledBy*/
        i[4]
      ), (!n || o & /*describedBy*/
      32) && h(
        t,
        "aria-describedby",
        /*describedBy*/
        i[5]
      ), o & /*zIndex*/
      2 && j(
        t,
        "z-index",
        /*zIndex*/
        i[1]
      ), o & /*pointerEvents*/
      4 && j(
        t,
        "pointer-events",
        /*pointerEvents*/
        i[2] === !1 ? "none" : null
      ), o & /*$padding*/
      128 && j(
        t,
        "top",
        /*$padding*/
        i[7].top + "px"
      ), o & /*$padding*/
      128 && j(
        t,
        "right",
        /*$padding*/
        i[7].right + "px"
      ), o & /*$padding*/
      128 && j(
        t,
        "bottom",
        /*$padding*/
        i[7].bottom + "px"
      ), o & /*$padding*/
      128 && j(
        t,
        "left",
        /*$padding*/
        i[7].left + "px"
      );
    },
    i(i) {
      n || (v(r, i), n = !0);
    },
    o(i) {
      S(r, i), n = !1;
    },
    d(i) {
      i && R(t), r && r.d(i), e[12](null);
    }
  };
}
function Gs(e, t, n) {
  let l, r, { $$slots: i = {}, $$scope: o } = t;
  const { padding: a } = _n("LayerCake");
  E(e, a, (p) => n(7, r = p));
  let { element: f = void 0 } = t, { zIndex: s = void 0 } = t, { pointerEvents: u = void 0 } = t, { role: g = void 0 } = t, { label: m = void 0 } = t, { labelledBy: c = void 0 } = t, { describedBy: d = void 0 } = t;
  function b(p) {
    Ue[p ? "unshift" : "push"](() => {
      f = p, n(0, f);
    });
  }
  return e.$$set = (p) => {
    "element" in p && n(0, f = p.element), "zIndex" in p && n(1, s = p.zIndex), "pointerEvents" in p && n(2, u = p.pointerEvents), "role" in p && n(9, g = p.role), "label" in p && n(3, m = p.label), "labelledBy" in p && n(4, c = p.labelledBy), "describedBy" in p && n(5, d = p.describedBy), "$$scope" in p && n(10, o = p.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*role, label, labelledBy, describedBy*/
    568 && n(6, l = g || (m || c || d ? "figure" : void 0));
  }, [
    f,
    s,
    u,
    m,
    c,
    d,
    l,
    r,
    a,
    g,
    o,
    i,
    b
  ];
}
class So extends ke {
  constructor(t) {
    super(), pe(this, t, Gs, Hs, be, {
      element: 0,
      zIndex: 1,
      pointerEvents: 2,
      role: 9,
      label: 3,
      labelledBy: 4,
      describedBy: 5
    });
  }
}
const Ws = (e) => ({ element: e & /*element*/
1 }), ai = (e) => ({ element: (
  /*element*/
  e[0]
) }), Vs = (e) => ({ element: e & /*element*/
1 }), si = (e) => ({ element: (
  /*element*/
  e[0]
) }), Us = (e) => ({ element: e & /*element*/
1 }), fi = (e) => ({ element: (
  /*element*/
  e[0]
) });
function ui(e) {
  let t, n;
  return {
    c() {
      t = ue("title"), n = L(
        /*title*/
        e[8]
      );
    },
    m(l, r) {
      M(l, t, r), y(t, n);
    },
    p(l, r) {
      r & /*title*/
      256 && W(
        n,
        /*title*/
        l[8]
      );
    },
    d(l) {
      l && R(t);
    }
  };
}
function Ks(e) {
  let t, n = (
    /*title*/
    e[8] && ui(e)
  );
  return {
    c() {
      n && n.c(), t = we();
    },
    m(l, r) {
      n && n.m(l, r), M(l, t, r);
    },
    p(l, r) {
      /*title*/
      l[8] ? n ? n.p(l, r) : (n = ui(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(l) {
      n && n.d(l), l && R(t);
    }
  };
}
function Qs(e) {
  let t, n, l, r, i;
  const o = (
    /*#slots*/
    e[16].title
  ), a = Pe(
    o,
    e,
    /*$$scope*/
    e[15],
    fi
  ), f = a || Ks(e), s = (
    /*#slots*/
    e[16].defs
  ), u = Pe(
    s,
    e,
    /*$$scope*/
    e[15],
    si
  ), g = (
    /*#slots*/
    e[16].default
  ), m = Pe(
    g,
    e,
    /*$$scope*/
    e[15],
    ai
  );
  return {
    c() {
      t = ue("svg"), f && f.c(), n = ue("defs"), u && u.c(), l = ue("g"), m && m.c(), h(l, "class", "layercake-layout-svg_g"), h(l, "transform", r = "translate(" + /*$padding*/
      e[11].left + ", " + /*$padding*/
      e[11].top + ")"), h(t, "class", "layercake-layout-svg svelte-u84d8d"), h(
        t,
        "viewBox",
        /*viewBox*/
        e[4]
      ), h(
        t,
        "width",
        /*$containerWidth*/
        e[9]
      ), h(
        t,
        "height",
        /*$containerHeight*/
        e[10]
      ), h(
        t,
        "aria-label",
        /*label*/
        e[5]
      ), h(
        t,
        "aria-labelledby",
        /*labelledBy*/
        e[6]
      ), h(
        t,
        "aria-describedby",
        /*describedBy*/
        e[7]
      ), j(
        t,
        "z-index",
        /*zIndex*/
        e[2]
      ), j(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[3] === !1 ? "none" : null
      );
    },
    m(c, d) {
      M(c, t, d), f && f.m(t, null), y(t, n), u && u.m(n, null), y(t, l), m && m.m(l, null), e[17](l), e[18](t), i = !0;
    },
    p(c, [d]) {
      a ? a.p && (!i || d & /*$$scope, element*/
      32769) && je(
        a,
        o,
        c,
        /*$$scope*/
        c[15],
        i ? Fe(
          o,
          /*$$scope*/
          c[15],
          d,
          Us
        ) : Be(
          /*$$scope*/
          c[15]
        ),
        fi
      ) : f && f.p && (!i || d & /*title*/
      256) && f.p(c, i ? d : -1), u && u.p && (!i || d & /*$$scope, element*/
      32769) && je(
        u,
        s,
        c,
        /*$$scope*/
        c[15],
        i ? Fe(
          s,
          /*$$scope*/
          c[15],
          d,
          Vs
        ) : Be(
          /*$$scope*/
          c[15]
        ),
        si
      ), m && m.p && (!i || d & /*$$scope, element*/
      32769) && je(
        m,
        g,
        c,
        /*$$scope*/
        c[15],
        i ? Fe(
          g,
          /*$$scope*/
          c[15],
          d,
          Ws
        ) : Be(
          /*$$scope*/
          c[15]
        ),
        ai
      ), (!i || d & /*$padding*/
      2048 && r !== (r = "translate(" + /*$padding*/
      c[11].left + ", " + /*$padding*/
      c[11].top + ")")) && h(l, "transform", r), (!i || d & /*viewBox*/
      16) && h(
        t,
        "viewBox",
        /*viewBox*/
        c[4]
      ), (!i || d & /*$containerWidth*/
      512) && h(
        t,
        "width",
        /*$containerWidth*/
        c[9]
      ), (!i || d & /*$containerHeight*/
      1024) && h(
        t,
        "height",
        /*$containerHeight*/
        c[10]
      ), (!i || d & /*label*/
      32) && h(
        t,
        "aria-label",
        /*label*/
        c[5]
      ), (!i || d & /*labelledBy*/
      64) && h(
        t,
        "aria-labelledby",
        /*labelledBy*/
        c[6]
      ), (!i || d & /*describedBy*/
      128) && h(
        t,
        "aria-describedby",
        /*describedBy*/
        c[7]
      ), d & /*zIndex*/
      4 && j(
        t,
        "z-index",
        /*zIndex*/
        c[2]
      ), d & /*pointerEvents*/
      8 && j(
        t,
        "pointer-events",
        /*pointerEvents*/
        c[3] === !1 ? "none" : null
      );
    },
    i(c) {
      i || (v(f, c), v(u, c), v(m, c), i = !0);
    },
    o(c) {
      S(f, c), S(u, c), S(m, c), i = !1;
    },
    d(c) {
      c && R(t), f && f.d(c), u && u.d(c), m && m.d(c), e[17](null), e[18](null);
    }
  };
}
function Ys(e, t, n) {
  let l, r, i, { $$slots: o = {}, $$scope: a } = t, { element: f = void 0 } = t, { innerElement: s = void 0 } = t, { zIndex: u = void 0 } = t, { pointerEvents: g = void 0 } = t, { viewBox: m = void 0 } = t, { label: c = void 0 } = t, { labelledBy: d = void 0 } = t, { describedBy: b = void 0 } = t, { title: p = void 0 } = t;
  const { containerWidth: w, containerHeight: N, padding: z } = _n("LayerCake");
  E(e, w, (O) => n(9, l = O)), E(e, N, (O) => n(10, r = O)), E(e, z, (O) => n(11, i = O));
  function T(O) {
    Ue[O ? "unshift" : "push"](() => {
      s = O, n(1, s);
    });
  }
  function F(O) {
    Ue[O ? "unshift" : "push"](() => {
      f = O, n(0, f);
    });
  }
  return e.$$set = (O) => {
    "element" in O && n(0, f = O.element), "innerElement" in O && n(1, s = O.innerElement), "zIndex" in O && n(2, u = O.zIndex), "pointerEvents" in O && n(3, g = O.pointerEvents), "viewBox" in O && n(4, m = O.viewBox), "label" in O && n(5, c = O.label), "labelledBy" in O && n(6, d = O.labelledBy), "describedBy" in O && n(7, b = O.describedBy), "title" in O && n(8, p = O.title), "$$scope" in O && n(15, a = O.$$scope);
  }, [
    f,
    s,
    u,
    g,
    m,
    c,
    d,
    b,
    p,
    l,
    r,
    i,
    w,
    N,
    z,
    a,
    o,
    T,
    F
  ];
}
class Ro extends ke {
  constructor(t) {
    super(), pe(this, t, Ys, Qs, be, {
      element: 0,
      innerElement: 1,
      zIndex: 2,
      pointerEvents: 3,
      viewBox: 4,
      label: 5,
      labelledBy: 6,
      describedBy: 7,
      title: 8
    });
  }
}
function ci(e, t, n) {
  const l = e.slice();
  l[29] = t[n], l[36] = n;
  const r = (
    /*columnHeight*/
    l[6](
      /*d*/
      l[29]
    )
  );
  l[30] = r;
  const i = (
    /*$xGet*/
    l[3](
      /*d*/
      l[29]
    )
  );
  l[31] = i;
  const o = Array.isArray(
    /*xGot*/
    l[31]
  ) ? (
    /*xGot*/
    l[31][0]
  ) : (
    /*xGot*/
    l[31]
  );
  l[32] = o;
  const a = (
    /*$xScale*/
    l[9].bandwidth ? (
      /*$xScale*/
      l[9].bandwidth()
    ) : (
      /*columnWidth*/
      l[7](
        /*d*/
        l[29]
      )
    )
  );
  l[33] = a;
  const f = (
    /*$y*/
    l[10](
      /*d*/
      l[29]
    )
  );
  return l[34] = f, l;
}
function di(e) {
  let t, n = (
    /*yValue*/
    e[34] + ""
  ), l, r, i;
  return {
    c() {
      t = ue("text"), l = L(n), h(t, "x", r = /*xPos*/
      e[32] + /*colWidth*/
      e[33] / 2), h(t, "y", i = /*$height*/
      e[12] - /*colHeight*/
      e[30] - 5), h(t, "text-anchor", "middle"), h(t, "class", "svelte-1c28ck9");
    },
    m(o, a) {
      M(o, t, a), y(t, l);
    },
    p(o, a) {
      a[0] & /*$y, $data*/
      1280 && n !== (n = /*yValue*/
      o[34] + "") && W(l, n), a[0] & /*$xGet, $data, $xScale, columnWidth*/
      904 && r !== (r = /*xPos*/
      o[32] + /*colWidth*/
      o[33] / 2) && h(t, "x", r), a[0] & /*$height, columnHeight, $data*/
      4416 && i !== (i = /*$height*/
      o[12] - /*colHeight*/
      o[30] - 5) && h(t, "y", i);
    },
    d(o) {
      o && R(t);
    }
  };
}
function gi(e) {
  let t, n, l, r, i, o, a, f, s, u, g, m, c, d, b;
  function p() {
    return (
      /*mouseenter_handler*/
      e[23](
        /*i*/
        e[36],
        /*d*/
        e[29]
      )
    );
  }
  let w = (
    /*showLabels*/
    e[1] && /*yValue*/
    e[34] && di(e)
  );
  return {
    c() {
      t = ue("rect"), u = ue("rect"), w && w.c(), c = we(), h(t, "class", "group-rect svelte-1c28ck9"), h(
        t,
        "data-id",
        /*i*/
        e[36]
      ), h(t, "data-range", n = /*$x*/
      e[11](
        /*d*/
        e[29]
      )), h(t, "data-count", l = /*yValue*/
      e[34]), h(t, "x", r = /*xPos*/
      e[32]), h(t, "y", i = /*$yGet*/
      e[2](
        /*d*/
        e[29]
      )), h(t, "width", o = /*colWidth*/
      e[33]), h(t, "height", a = /*colHeight*/
      e[30]), h(
        t,
        "fill",
        /*fill*/
        e[0]
      ), h(t, "stroke", f = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? mi : "none"), h(t, "stroke-width", s = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? hi : 0), ee(
        t,
        "animated",
        /*loaded*/
        e[5]
      ), h(u, "class", "hover-zone svelte-1c28ck9"), h(u, "x", g = /*xPos*/
      e[32]), h(u, "y", 0), h(u, "width", m = /*colWidth*/
      e[33]), h(
        u,
        "height",
        /*$height*/
        e[12]
      ), h(u, "fill", "none"), h(u, "stroke", "none");
    },
    m(N, z) {
      M(N, t, z), M(N, u, z), w && w.m(N, z), M(N, c, z), d || (b = [
        de(u, "mouseenter", p),
        de(
          u,
          "mouseleave",
          /*mouseleave_handler*/
          e[24]
        )
      ], d = !0);
    },
    p(N, z) {
      e = N, z[0] & /*$x, $data*/
      2304 && n !== (n = /*$x*/
      e[11](
        /*d*/
        e[29]
      )) && h(t, "data-range", n), z[0] & /*$y, $data*/
      1280 && l !== (l = /*yValue*/
      e[34]) && h(t, "data-count", l), z[0] & /*$xGet, $data*/
      264 && r !== (r = /*xPos*/
      e[32]) && h(t, "x", r), z[0] & /*$yGet, $data*/
      260 && i !== (i = /*$yGet*/
      e[2](
        /*d*/
        e[29]
      )) && h(t, "y", i), z[0] & /*$xScale, columnWidth, $data*/
      896 && o !== (o = /*colWidth*/
      e[33]) && h(t, "width", o), z[0] & /*columnHeight, $data*/
      320 && a !== (a = /*colHeight*/
      e[30]) && h(t, "height", a), z[0] & /*fill*/
      1 && h(
        t,
        "fill",
        /*fill*/
        e[0]
      ), z[0] & /*hoveredIndex*/
      16 && f !== (f = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? mi : "none") && h(t, "stroke", f), z[0] & /*hoveredIndex*/
      16 && s !== (s = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? hi : 0) && h(t, "stroke-width", s), z[0] & /*loaded*/
      32 && ee(
        t,
        "animated",
        /*loaded*/
        e[5]
      ), z[0] & /*$xGet, $data*/
      264 && g !== (g = /*xPos*/
      e[32]) && h(u, "x", g), z[0] & /*$xScale, columnWidth, $data*/
      896 && m !== (m = /*colWidth*/
      e[33]) && h(u, "width", m), z[0] & /*$height*/
      4096 && h(
        u,
        "height",
        /*$height*/
        e[12]
      ), /*showLabels*/
      e[1] && /*yValue*/
      e[34] ? w ? w.p(e, z) : (w = di(e), w.c(), w.m(c.parentNode, c)) : w && (w.d(1), w = null);
    },
    d(N) {
      N && R(t), N && R(u), w && w.d(N), N && R(c), d = !1, De(b);
    }
  };
}
function Js(e) {
  let t, n = (
    /*$data*/
    e[8]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = gi(ci(e, n, r));
  return {
    c() {
      t = ue("g");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      h(t, "class", "column-group");
    },
    m(r, i) {
      M(r, t, i);
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(t, null);
    },
    p(r, i) {
      if (i[0] & /*$xGet, $data, $xScale, columnWidth, $height, columnHeight, $y, showLabels, hoveredIndex, dispatch, $x, $yGet, fill, loaded*/
      16383) {
        n = /*$data*/
        r[8];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = ci(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = gi(a), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    i: H,
    o: H,
    d(r) {
      r && R(t), lt(l, r);
    }
  };
}
const mi = "#333", hi = 1;
function Xs(e, t, n) {
  let l, r, i, o, a, f, s, u, g, m;
  const c = so(), { data: d, xGet: b, yGet: p, x: w, yRange: N, xScale: z, y: T, height: F, zGet: O, zScale: I, z: ie, custom: P } = _n("LayerCake");
  E(e, d, (G) => n(8, f = G)), E(e, b, (G) => n(3, a = G)), E(e, p, (G) => n(2, i = G)), E(e, w, (G) => n(11, g = G)), E(e, N, (G) => n(22, o = G)), E(e, z, (G) => n(9, s = G)), E(e, T, (G) => n(10, u = G)), E(e, F, (G) => n(12, m = G));
  let { fill: x = "#00e047" } = t, { showLabels: A = !1 } = t, q = null;
  Ct(() => {
    setTimeout(() => n(5, Z = !0), 100);
  });
  let Z = !1;
  const ce = (G, D) => {
    n(4, q = G), c("hover", D);
  }, B = () => {
    n(4, q = null), c("hover", null);
  };
  return e.$$set = (G) => {
    "fill" in G && n(0, x = G.fill), "showLabels" in G && n(1, A = G.showLabels);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*$xGet*/
    8 && n(7, l = (G) => {
      const D = a(G);
      return Math.abs(D[1] - D[0]);
    }), e.$$.dirty[0] & /*$yRange, $yGet*/
    4194308 && n(6, r = (G) => o[0] - i(G));
  }, [
    x,
    A,
    i,
    a,
    q,
    Z,
    r,
    l,
    f,
    s,
    u,
    g,
    m,
    c,
    d,
    b,
    p,
    w,
    N,
    z,
    T,
    F,
    o,
    ce,
    B
  ];
}
class Mo extends ke {
  constructor(t) {
    super(), pe(this, t, Xs, Js, be, { fill: 0, showLabels: 1 }, null, [-1, -1]);
  }
}
function bi(e, t, n) {
  const l = e.slice();
  return l[28] = t[n], l[30] = n, l;
}
function _i(e) {
  let t, n, l;
  return {
    c() {
      t = ue("line"), h(t, "y1", n = /*$height*/
      e[15] * -1), h(t, "y2", "0"), h(t, "x1", "0"), h(t, "x2", "0"), h(t, "stroke-width", l = /*tick*/
      e[28] == 0 ? 2 : 1), h(t, "class", "svelte-rkqqab"), ee(
        t,
        "gridline",
        /*tick*/
        e[28] != 0
      ), ee(
        t,
        "baseline",
        /*tick*/
        e[28] == 0
      );
    },
    m(r, i) {
      M(r, t, i);
    },
    p(r, i) {
      i & /*$height*/
      32768 && n !== (n = /*$height*/
      r[15] * -1) && h(t, "y1", n), i & /*tickVals*/
      8192 && l !== (l = /*tick*/
      r[28] == 0 ? 2 : 1) && h(t, "stroke-width", l), i & /*tickVals*/
      8192 && ee(
        t,
        "gridline",
        /*tick*/
        r[28] != 0
      ), i & /*tickVals*/
      8192 && ee(
        t,
        "baseline",
        /*tick*/
        r[28] == 0
      );
    },
    d(r) {
      r && R(t);
    }
  };
}
function yi(e) {
  let t, n, l;
  return {
    c() {
      t = ue("line"), h(t, "class", "tick-mark svelte-rkqqab"), h(t, "y1", 0), h(t, "y2", 6), h(t, "x1", n = /*xTick*/
      e[5] || /*isBandwidth*/
      e[11] ? (
        /*$xScale*/
        e[12].bandwidth() / 2
      ) : 0), h(t, "x2", l = /*xTick*/
      e[5] || /*isBandwidth*/
      e[11] ? (
        /*$xScale*/
        e[12].bandwidth() / 2
      ) : 0);
    },
    m(r, i) {
      M(r, t, i);
    },
    p(r, i) {
      i & /*xTick, isBandwidth, $xScale*/
      6176 && n !== (n = /*xTick*/
      r[5] || /*isBandwidth*/
      r[11] ? (
        /*$xScale*/
        r[12].bandwidth() / 2
      ) : 0) && h(t, "x1", n), i & /*xTick, isBandwidth, $xScale*/
      6176 && l !== (l = /*xTick*/
      r[5] || /*isBandwidth*/
      r[11] ? (
        /*$xScale*/
        r[12].bandwidth() / 2
      ) : 0) && h(t, "x2", l);
    },
    d(r) {
      r && R(t);
    }
  };
}
function pi(e) {
  let t, n, l, r = (
    /*formatTick*/
    e[4](
      /*tick*/
      e[28]
    ) + ""
  ), i, o, a, f, s, u, g = (
    /*gridlines*/
    e[0] !== !1 && _i(e)
  ), m = (
    /*tickMarks*/
    e[1] === !0 && yi(e)
  );
  return {
    c() {
      t = ue("g"), g && g.c(), n = we(), m && m.c(), l = ue("text"), i = L(r), h(l, "x", o = /*xTick*/
      e[5] || /*isBandwidth*/
      e[11] ? (
        /*$xScale*/
        e[12].bandwidth() / 2
      ) : 0), h(l, "y", a = /*yTick*/
      e[6] - /*angle*/
      (e[10] ? 4 : 0)), h(l, "dx", ""), h(l, "dy", ""), h(l, "transform", f = /*angle*/
      e[10] ? "rotate(-45)" : ""), j(
        l,
        "fill",
        /*color*/
        e[9]
      ), h(l, "text-anchor", s = /*textAnchor*/
      e[24](
        /*tick*/
        e[28]
      )), h(l, "class", "svelte-rkqqab"), h(t, "class", "tick tick-" + /*i*/
      e[30] + " svelte-rkqqab"), h(t, "transform", u = "translate(" + /*$xScale*/
      e[12](
        /*tick*/
        e[28]
      ) + "," + Math.max(
        /*$yRange*/
        e[14][0],
        /*$yRange*/
        e[14][1]
      ) + ")");
    },
    m(c, d) {
      M(c, t, d), g && g.m(t, null), y(t, n), m && m.m(t, null), y(t, l), y(l, i);
    },
    p(c, d) {
      /*gridlines*/
      c[0] !== !1 ? g ? g.p(c, d) : (g = _i(c), g.c(), g.m(t, n)) : g && (g.d(1), g = null), /*tickMarks*/
      c[1] === !0 ? m ? m.p(c, d) : (m = yi(c), m.c(), m.m(t, l)) : m && (m.d(1), m = null), d & /*formatTick, tickVals*/
      8208 && r !== (r = /*formatTick*/
      c[4](
        /*tick*/
        c[28]
      ) + "") && W(i, r), d & /*xTick, isBandwidth, $xScale*/
      6176 && o !== (o = /*xTick*/
      c[5] || /*isBandwidth*/
      c[11] ? (
        /*$xScale*/
        c[12].bandwidth() / 2
      ) : 0) && h(l, "x", o), d & /*yTick, angle*/
      1088 && a !== (a = /*yTick*/
      c[6] - /*angle*/
      (c[10] ? 4 : 0)) && h(l, "y", a), d & /*angle*/
      1024 && f !== (f = /*angle*/
      c[10] ? "rotate(-45)" : "") && h(l, "transform", f), d & /*color*/
      512 && j(
        l,
        "fill",
        /*color*/
        c[9]
      ), d & /*tickVals*/
      8192 && s !== (s = /*textAnchor*/
      c[24](
        /*tick*/
        c[28]
      )) && h(l, "text-anchor", s), d & /*$xScale, tickVals, $yRange*/
      28672 && u !== (u = "translate(" + /*$xScale*/
      c[12](
        /*tick*/
        c[28]
      ) + "," + Math.max(
        /*$yRange*/
        c[14][0],
        /*$yRange*/
        c[14][1]
      ) + ")") && h(t, "transform", u);
    },
    d(c) {
      c && R(t), g && g.d(), m && m.d();
    }
  };
}
function ki(e) {
  let t, n, l;
  return {
    c() {
      t = ue("line"), h(t, "class", "baseline svelte-rkqqab"), h(t, "y1", n = /*$height*/
      e[15] + 0.5), h(t, "y2", l = /*$height*/
      e[15] + 0.5), h(t, "x1", "0"), h(
        t,
        "x2",
        /*$width*/
        e[16]
      );
    },
    m(r, i) {
      M(r, t, i);
    },
    p(r, i) {
      i & /*$height*/
      32768 && n !== (n = /*$height*/
      r[15] + 0.5) && h(t, "y1", n), i & /*$height*/
      32768 && l !== (l = /*$height*/
      r[15] + 0.5) && h(t, "y2", l), i & /*$width*/
      65536 && h(
        t,
        "x2",
        /*$width*/
        r[16]
      );
    },
    d(r) {
      r && R(t);
    }
  };
}
function wi(e) {
  let t, n, l, r;
  return {
    c() {
      t = ue("text"), h(t, "x", n = /*labelLeft*/
      e[8] ? (
        /*$xRange*/
        e[17][0] - 4 - 12
      ) : (
        /*$width*/
        e[16] * 0.5
      )), h(
        t,
        "y",
        /*$height*/
        e[15]
      ), h(t, "dy", l = /*labelLeft*/
      e[8] ? "18px" : "36px"), h(t, "text-anchor", r = /*labelLeft*/
      e[8] ? "end" : "middle"), j(
        t,
        "fill",
        /*color*/
        e[9]
      ), h(t, "class", "axis-label svelte-rkqqab");
    },
    m(i, o) {
      M(i, t, o), t.innerHTML = /*label*/
      e[7];
    },
    p(i, o) {
      o & /*label*/
      128 && (t.innerHTML = /*label*/
      i[7]), o & /*labelLeft, $xRange, $width*/
      196864 && n !== (n = /*labelLeft*/
      i[8] ? (
        /*$xRange*/
        i[17][0] - 4 - 12
      ) : (
        /*$width*/
        i[16] * 0.5
      )) && h(t, "x", n), o & /*$height*/
      32768 && h(
        t,
        "y",
        /*$height*/
        i[15]
      ), o & /*labelLeft*/
      256 && l !== (l = /*labelLeft*/
      i[8] ? "18px" : "36px") && h(t, "dy", l), o & /*labelLeft*/
      256 && r !== (r = /*labelLeft*/
      i[8] ? "end" : "middle") && h(t, "text-anchor", r), o & /*color*/
      512 && j(
        t,
        "fill",
        /*color*/
        i[9]
      );
    },
    d(i) {
      i && R(t);
    }
  };
}
function Zs(e) {
  let t, n, l, r = (
    /*tickVals*/
    e[13]
  ), i = [];
  for (let f = 0; f < r.length; f += 1)
    i[f] = pi(bi(e, r, f));
  let o = (
    /*baseline*/
    e[2] === !0 && ki(e)
  ), a = !!/*label*/
  e[7] && wi(e);
  return {
    c() {
      t = ue("g");
      for (let f = 0; f < i.length; f += 1)
        i[f].c();
      n = we(), o && o.c(), l = we(), a && a.c(), h(t, "class", "axis x-axis svelte-rkqqab"), ee(
        t,
        "snapTicks",
        /*snapTicks*/
        e[3]
      );
    },
    m(f, s) {
      M(f, t, s);
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(t, null);
      y(t, n), o && o.m(t, null), y(t, l), a && a.m(t, null);
    },
    p(f, [s]) {
      if (s & /*$xScale, tickVals, Math, $yRange, xTick, isBandwidth, yTick, angle, color, textAnchor, formatTick, tickMarks, $height, gridlines*/
      16842355) {
        r = /*tickVals*/
        f[13];
        let u;
        for (u = 0; u < r.length; u += 1) {
          const g = bi(f, r, u);
          i[u] ? i[u].p(g, s) : (i[u] = pi(g), i[u].c(), i[u].m(t, n));
        }
        for (; u < i.length; u += 1)
          i[u].d(1);
        i.length = r.length;
      }
      /*baseline*/
      f[2] === !0 ? o ? o.p(f, s) : (o = ki(f), o.c(), o.m(t, l)) : o && (o.d(1), o = null), /*label*/
      f[7] ? a ? a.p(f, s) : (a = wi(f), a.c(), a.m(t, null)) : a && (a.d(1), a = null), s & /*snapTicks*/
      8 && ee(
        t,
        "snapTicks",
        /*snapTicks*/
        f[3]
      );
    },
    i: H,
    o: H,
    d(f) {
      f && R(t), lt(i, f), o && o.d(), a && a.d();
    }
  };
}
function $s(e, t, n) {
  let l, r, i, o, a, f, s, u;
  const { width: g, height: m, xRange: c, padding: d, xScale: b, xDomain: p, yRange: w } = _n("LayerCake");
  E(e, g, (B) => n(16, s = B)), E(e, m, (B) => n(15, f = B)), E(e, c, (B) => n(17, u = B)), E(e, b, (B) => n(12, o = B)), E(e, p, (B) => n(26, i = B)), E(e, w, (B) => n(14, a = B));
  let { gridlines: N = !0 } = t, { tickMarks: z = !1 } = t, { baseline: T = !1 } = t, { snapTicks: F = !1 } = t, { formatTick: O = (B) => B } = t, { ticks: I = void 0 } = t, { xTick: ie = 0 } = t, { yTick: P = 16 } = t, { label: x = "" } = t, { labelLeft: A = !1 } = t, { color: q = "#333" } = t, { angle: Z = !1 } = t;
  function ce(B) {
    if (Z)
      return "end";
    if (F === !0) {
      if (B == i[0])
        return "start";
      if (B == i[1])
        return "end";
    }
    return "middle";
  }
  return e.$$set = (B) => {
    "gridlines" in B && n(0, N = B.gridlines), "tickMarks" in B && n(1, z = B.tickMarks), "baseline" in B && n(2, T = B.baseline), "snapTicks" in B && n(3, F = B.snapTicks), "formatTick" in B && n(4, O = B.formatTick), "ticks" in B && n(25, I = B.ticks), "xTick" in B && n(5, ie = B.xTick), "yTick" in B && n(6, P = B.yTick), "label" in B && n(7, x = B.label), "labelLeft" in B && n(8, A = B.labelLeft), "color" in B && n(9, q = B.color), "angle" in B && n(10, Z = B.angle);
  }, e.$$.update = () => {
    e.$$.dirty & /*$xScale*/
    4096 && n(11, l = typeof o.bandwidth == "function"), e.$$.dirty & /*ticks, isBandwidth, $xScale*/
    33560576 && n(13, r = Array.isArray(I) ? I : l ? o.domain() : typeof I == "function" ? I(o.ticks()) : o.ticks(I));
  }, [
    N,
    z,
    T,
    F,
    O,
    ie,
    P,
    x,
    A,
    q,
    Z,
    l,
    o,
    r,
    a,
    f,
    s,
    u,
    g,
    m,
    c,
    b,
    p,
    w,
    ce,
    I
  ];
}
class zo extends ke {
  constructor(t) {
    super(), pe(this, t, $s, Zs, be, {
      gridlines: 0,
      tickMarks: 1,
      baseline: 2,
      snapTicks: 3,
      formatTick: 4,
      ticks: 25,
      xTick: 5,
      yTick: 6,
      label: 7,
      labelLeft: 8,
      color: 9,
      angle: 10
    });
  }
}
const ef = (e) => ({}), vi = (e) => ({}), tf = (e) => ({}), Ni = (e) => ({});
function nf(e) {
  let t, n, l, r, i, o, a, f, s = !!/*title*/
  e[2] && Si(e), u = (
    /*loaded*/
    e[8] && /*histBins*/
    e[7].length > 0 && Ri(e)
  );
  const g = [sf, af], m = [];
  function c(d, b) {
    return (
      /*$$slots*/
      d[11].caption ? 1 : 0
    );
  }
  return o = c(e), a = m[o] = g[o](e), {
    c() {
      t = k("div"), s && s.c(), n = C(), l = k("div"), u && u.c(), r = C(), i = k("div"), a.c(), j(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), j(l, "height", "16px"), h(i, "class", "text-xs text-slate-800 truncate"), ee(i, "mt-1", !/*horizontalLayout*/
      e[3]), h(t, "class", "gap-1 items-center"), ee(
        t,
        "flex",
        /*horizontalLayout*/
        e[3]
      ), ee(
        t,
        "my-0.5",
        /*horizontalLayout*/
        e[3]
      );
    },
    m(d, b) {
      M(d, t, b), s && s.m(t, null), y(t, n), y(t, l), u && u.m(l, null), y(t, r), y(t, i), m[o].m(i, null), f = !0;
    },
    p(d, b) {
      /*title*/
      d[2] ? s ? s.p(d, b) : (s = Si(d), s.c(), s.m(t, n)) : s && (s.d(1), s = null), /*loaded*/
      d[8] && /*histBins*/
      d[7].length > 0 ? u ? (u.p(d, b), b & /*loaded, histBins*/
      384 && v(u, 1)) : (u = Ri(d), u.c(), v(u, 1), u.m(l, null)) : u && (te(), S(u, 1, 1, () => {
        u = null;
      }), ne()), (!f || b & /*width*/
      1) && j(
        l,
        "width",
        /*width*/
        d[0] == null ? "100%" : `${/*width*/
        d[0]}px`
      );
      let p = o;
      o = c(d), o === p ? m[o].p(d, b) : (te(), S(m[p], 1, 1, () => {
        m[p] = null;
      }), ne(), a = m[o], a ? a.p(d, b) : (a = m[o] = g[o](d), a.c()), v(a, 1), a.m(i, null)), (!f || b & /*horizontalLayout*/
      8) && ee(i, "mt-1", !/*horizontalLayout*/
      d[3]), (!f || b & /*horizontalLayout*/
      8) && ee(
        t,
        "flex",
        /*horizontalLayout*/
        d[3]
      ), (!f || b & /*horizontalLayout*/
      8) && ee(
        t,
        "my-0.5",
        /*horizontalLayout*/
        d[3]
      );
    },
    i(d) {
      f || (v(u), v(a), f = !0);
    },
    o(d) {
      S(u), S(a), f = !1;
    },
    d(d) {
      d && R(t), s && s.d(), u && u.d(), m[o].d();
    }
  };
}
function lf(e) {
  let t, n, l, r, i, o, a, f = !!/*title*/
  e[2] && Mi(e), s = (
    /*loaded*/
    e[8] && /*histBins*/
    e[7].length > 0 && zi(e)
  );
  const u = [hf, mf], g = [];
  function m(c, d) {
    return (
      /*$$slots*/
      c[11].caption ? 1 : 0
    );
  }
  return i = m(e), o = g[i] = u[i](e), {
    c() {
      f && f.c(), t = C(), n = k("div"), s && s.c(), l = C(), r = k("div"), o.c(), j(
        n,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), j(n, "height", "16px"), h(r, "class", "text-xs text-slate-800 truncate"), ee(r, "mt-1", !/*horizontalLayout*/
      e[3]);
    },
    m(c, d) {
      f && f.m(c, d), M(c, t, d), M(c, n, d), s && s.m(n, null), M(c, l, d), M(c, r, d), g[i].m(r, null), a = !0;
    },
    p(c, d) {
      /*title*/
      c[2] ? f ? f.p(c, d) : (f = Mi(c), f.c(), f.m(t.parentNode, t)) : f && (f.d(1), f = null), /*loaded*/
      c[8] && /*histBins*/
      c[7].length > 0 ? s ? (s.p(c, d), d & /*loaded, histBins*/
      384 && v(s, 1)) : (s = zi(c), s.c(), v(s, 1), s.m(n, null)) : s && (te(), S(s, 1, 1, () => {
        s = null;
      }), ne()), (!a || d & /*width*/
      1) && j(
        n,
        "width",
        /*width*/
        c[0] == null ? "100%" : `${/*width*/
        c[0]}px`
      );
      let b = i;
      i = m(c), i === b ? g[i].p(c, d) : (te(), S(g[b], 1, 1, () => {
        g[b] = null;
      }), ne(), o = g[i], o ? o.p(c, d) : (o = g[i] = u[i](c), o.c()), v(o, 1), o.m(r, null)), (!a || d & /*horizontalLayout*/
      8) && ee(r, "mt-1", !/*horizontalLayout*/
      c[3]);
    },
    i(c) {
      a || (v(s), v(o), a = !0);
    },
    o(c) {
      S(s), S(o), a = !1;
    },
    d(c) {
      f && f.d(c), c && R(t), c && R(n), s && s.d(), c && R(l), c && R(r), g[i].d();
    }
  };
}
function Si(e) {
  let t, n;
  return {
    c() {
      t = k("div"), n = L(
        /*title*/
        e[2]
      ), h(t, "class", "font-bold text-xs truncate text-right"), j(t, "width", "96px");
    },
    m(l, r) {
      M(l, t, r), y(t, n);
    },
    p(l, r) {
      r & /*title*/
      4 && W(
        n,
        /*title*/
        l[2]
      );
    },
    d(l) {
      l && R(t);
    }
  };
}
function Ri(e) {
  let t, n;
  return t = new Al({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: or().round(!0),
      xDomain: (
        /*histBins*/
        e[7]
      ),
      yScale: Xe(),
      yDomain: [0, null],
      data: (
        /*data*/
        e[6]
      ),
      custom: { hoveredGet: (
        /*func_2*/
        e[18]
      ) },
      $$slots: { default: [of] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      J(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*histBins*/
      128 && (i.xDomain = /*histBins*/
      l[7]), r & /*data*/
      64 && (i.data = /*data*/
      l[6]), r & /*hoveredBin*/
      512 && (i.custom = { hoveredGet: (
        /*func_2*/
        l[18]
      ) }), r & /*$$scope, color, hoveredBin*/
      1049120 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      S(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Q(t, l);
    }
  };
}
function rf(e) {
  let t, n, l, r;
  return t = new Mo({ props: { fill: (
    /*color*/
    e[5]
  ) } }), t.$on(
    "hover",
    /*hover_handler_1*/
    e[17]
  ), l = new zo({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      J(t.$$.fragment), n = C(), J(l.$$.fragment);
    },
    m(i, o) {
      K(t, i, o), M(i, n, o), K(l, i, o), r = !0;
    },
    p(i, o) {
      const a = {};
      o & /*color*/
      32 && (a.fill = /*color*/
      i[5]), t.$set(a);
    },
    i(i) {
      r || (v(t.$$.fragment, i), v(l.$$.fragment, i), r = !0);
    },
    o(i) {
      S(t.$$.fragment, i), S(l.$$.fragment, i), r = !1;
    },
    d(i) {
      Q(t, i), i && R(n), Q(l, i);
    }
  };
}
function of(e) {
  let t, n;
  return t = new Ro({
    props: {
      $$slots: { default: [rf] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      J(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*$$scope, color, hoveredBin*/
      1049120 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      S(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Q(t, l);
    }
  };
}
function af(e) {
  let t;
  const n = (
    /*#slots*/
    e[13].caption
  ), l = Pe(
    n,
    e,
    /*$$scope*/
    e[20],
    vi
  );
  return {
    c() {
      l && l.c();
    },
    m(r, i) {
      l && l.m(r, i), t = !0;
    },
    p(r, i) {
      l && l.p && (!t || i & /*$$scope*/
      1048576) && je(
        l,
        n,
        r,
        /*$$scope*/
        r[20],
        t ? Fe(
          n,
          /*$$scope*/
          r[20],
          i,
          ef
        ) : Be(
          /*$$scope*/
          r[20]
        ),
        vi
      );
    },
    i(r) {
      t || (v(l, r), t = !0);
    },
    o(r) {
      S(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function sf(e) {
  let t;
  function n(i, o) {
    return (
      /*hoveredBin*/
      i[9] != null ? cf : (
        /*mean*/
        i[1] != null ? uf : ff
      )
    );
  }
  let l = n(e), r = l(e);
  return {
    c() {
      r.c(), t = we();
    },
    m(i, o) {
      r.m(i, o), M(i, t, o);
    },
    p(i, o) {
      l === (l = n(i)) && r ? r.p(i, o) : (r.d(1), r = l(i), r && (r.c(), r.m(t.parentNode, t)));
    },
    i: H,
    o: H,
    d(i) {
      r.d(i), i && R(t);
    }
  };
}
function ff(e) {
  let t;
  return {
    c() {
      t = L(" ");
    },
    m(n, l) {
      M(n, t, l);
    },
    p: H,
    d(n) {
      n && R(t);
    }
  };
}
function uf(e) {
  let t, n, l = re(".3")(
    /*mean*/
    e[1]
  ) + "", r;
  return {
    c() {
      t = L("M = "), n = k("strong"), r = L(l);
    },
    m(i, o) {
      M(i, t, o), M(i, n, o), y(n, r);
    },
    p(i, o) {
      o & /*mean*/
      2 && l !== (l = re(".3")(
        /*mean*/
        i[1]
      ) + "") && W(r, l);
    },
    d(i) {
      i && R(t), i && R(n);
    }
  };
}
function cf(e) {
  let t = (
    /*makeTooltipText*/
    e[10](
      /*data*/
      e[6].find(
        /*func_3*/
        e[19]
      )
    ) + ""
  ), n;
  return {
    c() {
      n = L(t);
    },
    m(l, r) {
      M(l, n, r);
    },
    p(l, r) {
      r & /*data, hoveredBin*/
      576 && t !== (t = /*makeTooltipText*/
      l[10](
        /*data*/
        l[6].find(
          /*func_3*/
          l[19]
        )
      ) + "") && W(n, t);
    },
    d(l) {
      l && R(n);
    }
  };
}
function Mi(e) {
  let t, n;
  return {
    c() {
      t = k("div"), n = L(
        /*title*/
        e[2]
      ), h(t, "class", "font-bold text-xs truncate text-right");
    },
    m(l, r) {
      M(l, t, r), y(t, n);
    },
    p(l, r) {
      r & /*title*/
      4 && W(
        n,
        /*title*/
        l[2]
      );
    },
    d(l) {
      l && R(t);
    }
  };
}
function zi(e) {
  let t, n;
  return t = new Al({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: or().round(!0),
      xDomain: (
        /*histBins*/
        e[7]
      ),
      yScale: Xe(),
      yDomain: [0, null],
      data: (
        /*data*/
        e[6]
      ),
      custom: { hoveredGet: (
        /*func*/
        e[15]
      ) },
      $$slots: { default: [gf] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      J(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*histBins*/
      128 && (i.xDomain = /*histBins*/
      l[7]), r & /*data*/
      64 && (i.data = /*data*/
      l[6]), r & /*hoveredBin*/
      512 && (i.custom = { hoveredGet: (
        /*func*/
        l[15]
      ) }), r & /*$$scope, color, hoveredBin*/
      1049120 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      S(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Q(t, l);
    }
  };
}
function df(e) {
  let t, n, l, r;
  return t = new Mo({ props: { fill: (
    /*color*/
    e[5]
  ) } }), t.$on(
    "hover",
    /*hover_handler*/
    e[14]
  ), l = new zo({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      J(t.$$.fragment), n = C(), J(l.$$.fragment);
    },
    m(i, o) {
      K(t, i, o), M(i, n, o), K(l, i, o), r = !0;
    },
    p(i, o) {
      const a = {};
      o & /*color*/
      32 && (a.fill = /*color*/
      i[5]), t.$set(a);
    },
    i(i) {
      r || (v(t.$$.fragment, i), v(l.$$.fragment, i), r = !0);
    },
    o(i) {
      S(t.$$.fragment, i), S(l.$$.fragment, i), r = !1;
    },
    d(i) {
      Q(t, i), i && R(n), Q(l, i);
    }
  };
}
function gf(e) {
  let t, n;
  return t = new Ro({
    props: {
      $$slots: { default: [df] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      J(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*$$scope, color, hoveredBin*/
      1049120 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      S(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Q(t, l);
    }
  };
}
function mf(e) {
  let t;
  const n = (
    /*#slots*/
    e[13].caption
  ), l = Pe(
    n,
    e,
    /*$$scope*/
    e[20],
    Ni
  );
  return {
    c() {
      l && l.c();
    },
    m(r, i) {
      l && l.m(r, i), t = !0;
    },
    p(r, i) {
      l && l.p && (!t || i & /*$$scope*/
      1048576) && je(
        l,
        n,
        r,
        /*$$scope*/
        r[20],
        t ? Fe(
          n,
          /*$$scope*/
          r[20],
          i,
          tf
        ) : Be(
          /*$$scope*/
          r[20]
        ),
        Ni
      );
    },
    i(r) {
      t || (v(l, r), t = !0);
    },
    o(r) {
      S(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function hf(e) {
  let t;
  function n(i, o) {
    return (
      /*hoveredBin*/
      i[9] != null ? yf : (
        /*mean*/
        i[1] != null ? _f : bf
      )
    );
  }
  let l = n(e), r = l(e);
  return {
    c() {
      r.c(), t = we();
    },
    m(i, o) {
      r.m(i, o), M(i, t, o);
    },
    p(i, o) {
      l === (l = n(i)) && r ? r.p(i, o) : (r.d(1), r = l(i), r && (r.c(), r.m(t.parentNode, t)));
    },
    i: H,
    o: H,
    d(i) {
      r.d(i), i && R(t);
    }
  };
}
function bf(e) {
  let t;
  return {
    c() {
      t = L(" ");
    },
    m(n, l) {
      M(n, t, l);
    },
    p: H,
    d(n) {
      n && R(t);
    }
  };
}
function _f(e) {
  let t, n, l = re(".3")(
    /*mean*/
    e[1]
  ) + "", r;
  return {
    c() {
      t = L("M = "), n = k("strong"), r = L(l);
    },
    m(i, o) {
      M(i, t, o), M(i, n, o), y(n, r);
    },
    p(i, o) {
      o & /*mean*/
      2 && l !== (l = re(".3")(
        /*mean*/
        i[1]
      ) + "") && W(r, l);
    },
    d(i) {
      i && R(t), i && R(n);
    }
  };
}
function yf(e) {
  let t = (
    /*makeTooltipText*/
    e[10](
      /*data*/
      e[6].find(
        /*func_1*/
        e[16]
      )
    ) + ""
  ), n;
  return {
    c() {
      n = L(t);
    },
    m(l, r) {
      M(l, n, r);
    },
    p(l, r) {
      r & /*data, hoveredBin*/
      576 && t !== (t = /*makeTooltipText*/
      l[10](
        /*data*/
        l[6].find(
          /*func_1*/
          l[16]
        )
      ) + "") && W(n, t);
    },
    d(l) {
      l && R(n);
    }
  };
}
function pf(e) {
  let t, n, l, r;
  const i = [lf, nf], o = [];
  function a(f, s) {
    return (
      /*noParent*/
      f[4] ? 0 : 1
    );
  }
  return t = a(e), n = o[t] = i[t](e), {
    c() {
      n.c(), l = we();
    },
    m(f, s) {
      o[t].m(f, s), M(f, l, s), r = !0;
    },
    p(f, [s]) {
      let u = t;
      t = a(f), t === u ? o[t].p(f, s) : (te(), S(o[u], 1, 1, () => {
        o[u] = null;
      }), ne(), n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), v(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      r || (v(n), r = !0);
    },
    o(f) {
      S(n), r = !1;
    },
    d(f) {
      o[t].d(f), f && R(l);
    }
  };
}
function kf(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = rr(l);
  let { width: o = 100 } = t, { histValues: a } = t, { mean: f = null } = t, { title: s = null } = t, { horizontalLayout: u = !1 } = t, { noParent: g = !1 } = t, { color: m = "#3b82f6" } = t, c = [], d = [], b = !1;
  Ct(() => setTimeout(() => n(8, b = !0), 0));
  let p, w = re(".3g"), N = re(",");
  function z(x) {
    return `${w(x.bin)}: ${N(x.count)} instances`;
  }
  const T = (x) => n(9, p = x.detail != null ? x.detail.bin : null), F = (x) => x.bin == p, O = (x) => x.bin == p, I = (x) => n(9, p = x.detail != null ? x.detail.bin : null), ie = (x) => x.bin == p, P = (x) => x.bin == p;
  return e.$$set = (x) => {
    "width" in x && n(0, o = x.width), "histValues" in x && n(12, a = x.histValues), "mean" in x && n(1, f = x.mean), "title" in x && n(2, s = x.title), "horizontalLayout" in x && n(3, u = x.horizontalLayout), "noParent" in x && n(4, g = x.noParent), "color" in x && n(5, m = x.color), "$$scope" in x && n(20, r = x.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*histValues, data*/
    4160 && (a ? (n(6, c = Object.entries(a).map((x) => ({ bin: parseFloat(x[0]), count: x[1] }))), c.sort((x, A) => x.bin - A.bin), n(7, d = c.map((x) => x.bin))) : (n(6, c = []), n(7, d = []))), e.$$.dirty & /*data*/
    64 && c.length > 0) {
      let x = c.reduce(
        (A, q, Z) => Z > 0 ? Math.min(A, Math.abs(q.bin - c[Z - 1].bin)) : A,
        1e9
      );
      w = re(`.${go(x)}f`);
    }
    e.$$.dirty & /*histBins*/
    128 && console.log("histBins", d), e.$$.dirty & /*histValues*/
    4096 && console.log("histValues", a);
  }, [
    o,
    f,
    s,
    u,
    g,
    m,
    c,
    d,
    b,
    p,
    z,
    i,
    a,
    l,
    T,
    F,
    O,
    I,
    ie,
    P,
    r
  ];
}
class Lt extends ke {
  constructor(t) {
    super(), pe(this, t, kf, pf, be, {
      width: 0,
      histValues: 12,
      mean: 1,
      title: 2,
      horizontalLayout: 3,
      noParent: 4,
      color: 5
    });
  }
}
function Ot(e) {
  for (var t = e.length / 6 | 0, n = new Array(t), l = 0; l < t; )
    n[l] = "#" + e.slice(l * 6, ++l * 6);
  return n;
}
const wf = Ot("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), vf = Ot("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function xl(e) {
  var t = e.length;
  return function(n) {
    return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
  };
}
const Nf = xl(Ot("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
xl(Ot("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
xl(Ot("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
xl(Ot("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function Sf(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = k("span"), h(t, "class", n = "bar " + /*absolutePosition*/
      (e[0] ? "absolute top-0" : "") + " " + /*hoverable*/
      (e[7] ? "hover:opacity-50" : "") + " svelte-109q9hn"), h(t, "style", l = "width: " + /*widthString*/
      e[9] + "; " + /*colorScale*/
      (e[4] != null ? "background-color: " + /*colorScale*/
      e[4](
        /*fraction*/
        e[1]
      ) + "; " : `background-color: ${/*color*/
      e[5]};`) + " " + /*absolutePosition*/
      (e[0] ? `left: ${/*maxWidth*/
      e[3] * /*leftFraction*/
      e[2]}px;` : "")), ee(
        t,
        "animated",
        /*loaded*/
        e[8]
      ), ee(
        t,
        "rounded-full",
        /*rounded*/
        e[6]
      );
    },
    m(o, a) {
      M(o, t, a), r || (i = [
        de(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[10]
        ),
        de(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[11]
        )
      ], r = !0);
    },
    p(o, [a]) {
      a & /*absolutePosition, hoverable*/
      129 && n !== (n = "bar " + /*absolutePosition*/
      (o[0] ? "absolute top-0" : "") + " " + /*hoverable*/
      (o[7] ? "hover:opacity-50" : "") + " svelte-109q9hn") && h(t, "class", n), a & /*widthString, colorScale, fraction, color, absolutePosition, maxWidth, leftFraction*/
      575 && l !== (l = "width: " + /*widthString*/
      o[9] + "; " + /*colorScale*/
      (o[4] != null ? "background-color: " + /*colorScale*/
      o[4](
        /*fraction*/
        o[1]
      ) + "; " : `background-color: ${/*color*/
      o[5]};`) + " " + /*absolutePosition*/
      (o[0] ? `left: ${/*maxWidth*/
      o[3] * /*leftFraction*/
      o[2]}px;` : "")) && h(t, "style", l), a & /*absolutePosition, hoverable, loaded*/
      385 && ee(
        t,
        "animated",
        /*loaded*/
        o[8]
      ), a & /*absolutePosition, hoverable, rounded*/
      193 && ee(
        t,
        "rounded-full",
        /*rounded*/
        o[6]
      );
    },
    i: H,
    o: H,
    d(o) {
      o && R(t), r = !1, De(i);
    }
  };
}
function Rf(e, t, n) {
  let { absolutePosition: l = !1 } = t, { fraction: r = 1 } = t, { leftFraction: i = 0 } = t, { maxWidth: o = null } = t, { colorScale: a = null } = t, { color: f = "lightgray" } = t, { rounded: s = !0 } = t, { hoverable: u = !1 } = t;
  Ct(() => {
    setTimeout(() => n(8, g = !0), 100);
  });
  let g = !1, m = "";
  function c(b) {
    zr.call(this, e, b);
  }
  function d(b) {
    zr.call(this, e, b);
  }
  return e.$$set = (b) => {
    "absolutePosition" in b && n(0, l = b.absolutePosition), "fraction" in b && n(1, r = b.fraction), "leftFraction" in b && n(2, i = b.leftFraction), "maxWidth" in b && n(3, o = b.maxWidth), "colorScale" in b && n(4, a = b.colorScale), "color" in b && n(5, f = b.color), "rounded" in b && n(6, s = b.rounded), "hoverable" in b && n(7, u = b.hoverable);
  }, e.$$.update = () => {
    e.$$.dirty & /*maxWidth, rounded, fraction*/
    74 && (o != null ? n(9, m = `${s ? (o - 6) * r + 6 : o * r}px`) : n(9, m = s ? `calc((100% - 6px) * ${r} + 6px)` : `${r.toFixed(2)}%`));
  }, [
    l,
    r,
    i,
    o,
    a,
    f,
    s,
    u,
    g,
    m,
    c,
    d
  ];
}
class ur extends ke {
  constructor(t) {
    super(), pe(this, t, Rf, Sf, be, {
      absolutePosition: 0,
      fraction: 1,
      leftFraction: 2,
      maxWidth: 3,
      colorScale: 4,
      color: 5,
      rounded: 6,
      hoverable: 7
    });
  }
}
function Mf(e) {
  return e.map(
    ((t) => (n) => t += n)(0)
  );
}
const zf = (e) => ({
  hoveringIndex: e & /*hoveringIndex*/
  8192
}), Ei = (e) => ({ hoveringIndex: (
  /*hoveringIndex*/
  e[13]
) });
function Di(e, t, n) {
  const l = e.slice();
  return l[25] = t[n], l[27] = n, l;
}
function Ti(e) {
  let t, n;
  return {
    c() {
      t = k("div"), n = L(
        /*title*/
        e[11]
      ), h(t, "class", "font-bold text-xs truncate text-right"), j(t, "width", "96px");
    },
    m(l, r) {
      M(l, t, r), y(t, n);
    },
    p(l, r) {
      r & /*title*/
      2048 && W(
        n,
        /*title*/
        l[11]
      );
    },
    d(l) {
      l && R(t);
    }
  };
}
function Ai(e) {
  let t, n;
  return t = new ur({
    props: {
      absolutePosition: !0,
      fraction: 1,
      color: (
        /*fullBarColor*/
        e[9]
      ),
      hoverable: (
        /*hoverable*/
        e[10]
      )
    }
  }), t.$on(
    "mouseenter",
    /*mouseenter_handler*/
    e[18]
  ), t.$on(
    "mouseleave",
    /*mouseleave_handler*/
    e[19]
  ), {
    c() {
      J(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*fullBarColor*/
      512 && (i.color = /*fullBarColor*/
      l[9]), r & /*hoverable*/
      1024 && (i.hoverable = /*hoverable*/
      l[10]), t.$set(i);
    },
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      S(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Q(t, l);
    }
  };
}
function Ef(e) {
  let t, n;
  return t = new ur({
    props: {
      absolutePosition: !0,
      fraction: (
        /*scale*/
        (e[1] || qi)(
          /*value*/
          e[2]
        )
      ),
      colorScale: /*color*/ e[8] ? (
        /*func_3*/
        e[22]
      ) : (
        /*colorScale*/
        e[7]
      ),
      hoverable: (
        /*hoverable*/
        e[10]
      )
    }
  }), t.$on(
    "mouseenter",
    /*mouseenter_handler_2*/
    e[23]
  ), t.$on(
    "mouseleave",
    /*mouseleave_handler_2*/
    e[24]
  ), {
    c() {
      J(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*scale, value*/
      6 && (i.fraction = /*scale*/
      (l[1] || qi)(
        /*value*/
        l[2]
      )), r & /*color, colorScale*/
      384 && (i.colorScale = /*color*/
      l[8] ? (
        /*func_3*/
        l[22]
      ) : (
        /*colorScale*/
        l[7]
      )), r & /*hoverable*/
      1024 && (i.hoverable = /*hoverable*/
      l[10]), t.$set(i);
    },
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      S(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Q(t, l);
    }
  };
}
function Df(e) {
  let t, n, l = (
    /*values*/
    e[3]
  ), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = xi(Di(e, l, o));
  const i = (o) => S(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      t = we();
    },
    m(o, a) {
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(o, a);
      M(o, t, a), n = !0;
    },
    p(o, a) {
      if (a & /*scale, offsets, values, colors, hoverable, hoveringIndex*/
      25674) {
        l = /*values*/
        o[3];
        let f;
        for (f = 0; f < l.length; f += 1) {
          const s = Di(o, l, f);
          r[f] ? (r[f].p(s, a), v(r[f], 1)) : (r[f] = xi(s), r[f].c(), v(r[f], 1), r[f].m(t.parentNode, t));
        }
        for (te(), f = l.length; f < r.length; f += 1)
          i(f);
        ne();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < l.length; a += 1)
          v(r[a]);
        n = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1)
        S(r[a]);
      n = !1;
    },
    d(o) {
      lt(r, o), o && R(t);
    }
  };
}
function xi(e) {
  let t, n;
  function l(...r) {
    return (
      /*mouseenter_handler_1*/
      e[20](
        /*i*/
        e[27],
        ...r
      )
    );
  }
  return t = new ur({
    props: {
      absolutePosition: !0,
      leftFraction: (
        /*i*/
        e[27] > 0 ? (
          /*scale*/
          (e[1] || Li)(
            /*offsets*/
            e[14][
              /*i*/
              e[27] - 1
            ]
          )
        ) : 0
      ),
      fraction: (
        /*scale*/
        (e[1] || Oi)(
          /*v*/
          e[25]
        )
      ),
      color: (
        /*colors*/
        e[6][
          /*i*/
          e[27]
        ]
      ),
      rounded: !1,
      hoverable: (
        /*hoverable*/
        e[10]
      )
    }
  }), t.$on("mouseenter", l), t.$on(
    "mouseleave",
    /*mouseleave_handler_1*/
    e[21]
  ), {
    c() {
      J(t.$$.fragment);
    },
    m(r, i) {
      K(t, r, i), n = !0;
    },
    p(r, i) {
      e = r;
      const o = {};
      i & /*scale, offsets*/
      16386 && (o.leftFraction = /*i*/
      e[27] > 0 ? (
        /*scale*/
        (e[1] || Li)(
          /*offsets*/
          e[14][
            /*i*/
            e[27] - 1
          ]
        )
      ) : 0), i & /*scale, values*/
      10 && (o.fraction = /*scale*/
      (e[1] || Oi)(
        /*v*/
        e[25]
      )), i & /*colors*/
      64 && (o.color = /*colors*/
      e[6][
        /*i*/
        e[27]
      ]), i & /*hoverable*/
      1024 && (o.hoverable = /*hoverable*/
      e[10]), t.$set(o);
    },
    i(r) {
      n || (v(t.$$.fragment, r), n = !0);
    },
    o(r) {
      S(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Q(t, r);
    }
  };
}
function Ci(e) {
  let t, n, l, r;
  const i = [Af, Tf], o = [];
  function a(f, s) {
    return (
      /*$$slots*/
      f[15].caption ? 1 : 0
    );
  }
  return n = a(e), l = o[n] = i[n](e), {
    c() {
      t = k("div"), l.c(), h(t, "class", "text-xs text-slate-800");
    },
    m(f, s) {
      M(f, t, s), o[n].m(t, null), r = !0;
    },
    p(f, s) {
      let u = n;
      n = a(f), n === u ? o[n].p(f, s) : (te(), S(o[u], 1, 1, () => {
        o[u] = null;
      }), ne(), l = o[n], l ? l.p(f, s) : (l = o[n] = i[n](f), l.c()), v(l, 1), l.m(t, null));
    },
    i(f) {
      r || (v(l), r = !0);
    },
    o(f) {
      S(l), r = !1;
    },
    d(f) {
      f && R(t), o[n].d();
    }
  };
}
function Tf(e) {
  let t;
  const n = (
    /*#slots*/
    e[17].caption
  ), l = Pe(
    n,
    e,
    /*$$scope*/
    e[16],
    Ei
  );
  return {
    c() {
      l && l.c();
    },
    m(r, i) {
      l && l.m(r, i), t = !0;
    },
    p(r, i) {
      l && l.p && (!t || i & /*$$scope, hoveringIndex*/
      73728) && je(
        l,
        n,
        r,
        /*$$scope*/
        r[16],
        t ? Fe(
          n,
          /*$$scope*/
          r[16],
          i,
          zf
        ) : Be(
          /*$$scope*/
          r[16]
        ),
        Ei
      );
    },
    i(r) {
      t || (v(l, r), t = !0);
    },
    o(r) {
      S(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function Af(e) {
  let t = re(".3")(
    /*value*/
    e[2]
  ) + "", n;
  return {
    c() {
      n = L(t);
    },
    m(l, r) {
      M(l, n, r);
    },
    p(l, r) {
      r & /*value*/
      4 && t !== (t = re(".3")(
        /*value*/
        l[2]
      ) + "") && W(n, t);
    },
    i: H,
    o: H,
    d(l) {
      l && R(n);
    }
  };
}
function xf(e) {
  let t, n, l, r, i, o, a, f, s = !!/*title*/
  e[11] && Ti(e), u = (
    /*showFullBar*/
    e[4] && Ai(e)
  );
  const g = [Df, Ef], m = [];
  function c(b, p) {
    return (
      /*values*/
      b[3] != null ? 0 : 1
    );
  }
  i = c(e), o = m[i] = g[i](e);
  let d = (
    /*showTooltip*/
    e[5] && Ci(e)
  );
  return {
    c() {
      t = k("div"), s && s.c(), n = C(), l = k("div"), u && u.c(), r = C(), o.c(), a = C(), d && d.c(), h(l, "class", "parent-bar relative rounded-full overflow-hidden"), j(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), j(l, "height", "6px"), ee(l, "mb-1", !/*horizontalLayout*/
      e[12]), h(t, "class", "items-center gap-1"), ee(
        t,
        "flex",
        /*horizontalLayout*/
        e[12]
      );
    },
    m(b, p) {
      M(b, t, p), s && s.m(t, null), y(t, n), y(t, l), u && u.m(l, null), y(l, r), m[i].m(l, null), y(t, a), d && d.m(t, null), f = !0;
    },
    p(b, [p]) {
      /*title*/
      b[11] ? s ? s.p(b, p) : (s = Ti(b), s.c(), s.m(t, n)) : s && (s.d(1), s = null), /*showFullBar*/
      b[4] ? u ? (u.p(b, p), p & /*showFullBar*/
      16 && v(u, 1)) : (u = Ai(b), u.c(), v(u, 1), u.m(l, r)) : u && (te(), S(u, 1, 1, () => {
        u = null;
      }), ne());
      let w = i;
      i = c(b), i === w ? m[i].p(b, p) : (te(), S(m[w], 1, 1, () => {
        m[w] = null;
      }), ne(), o = m[i], o ? o.p(b, p) : (o = m[i] = g[i](b), o.c()), v(o, 1), o.m(l, null)), (!f || p & /*width*/
      1) && j(
        l,
        "width",
        /*width*/
        b[0] == null ? "100%" : `${/*width*/
        b[0]}px`
      ), (!f || p & /*horizontalLayout*/
      4096) && ee(l, "mb-1", !/*horizontalLayout*/
      b[12]), /*showTooltip*/
      b[5] ? d ? (d.p(b, p), p & /*showTooltip*/
      32 && v(d, 1)) : (d = Ci(b), d.c(), v(d, 1), d.m(t, null)) : d && (te(), S(d, 1, 1, () => {
        d = null;
      }), ne()), (!f || p & /*horizontalLayout*/
      4096) && ee(
        t,
        "flex",
        /*horizontalLayout*/
        b[12]
      );
    },
    i(b) {
      f || (v(u), v(o), v(d), f = !0);
    },
    o(b) {
      S(u), S(o), S(d), f = !1;
    },
    d(b) {
      b && R(t), s && s.d(), u && u.d(), m[i].d(), d && d.d();
    }
  };
}
const Li = (e) => e, Oi = (e) => e, qi = (e) => e;
function Cf(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = rr(l);
  let { width: o = 100 } = t, { scale: a = null } = t, { value: f = 0 } = t, { values: s = null } = t, { showFullBar: u = !1 } = t, { showTooltip: g = !0 } = t, { colors: m = wf } = t, { colorScale: c = Nf } = t, { color: d = null } = t, { fullBarColor: b = "#e5e7eb" } = t, { hoverable: p = !1 } = t, { title: w = null } = t, { horizontalLayout: N = !1 } = t, z = null, T = [];
  const F = (q) => n(13, z = -1), O = (q) => n(13, z = null), I = (q, Z) => n(13, z = q), ie = (q) => n(13, z = null), P = () => d, x = (q) => n(13, z = 0), A = (q) => n(13, z = null);
  return e.$$set = (q) => {
    "width" in q && n(0, o = q.width), "scale" in q && n(1, a = q.scale), "value" in q && n(2, f = q.value), "values" in q && n(3, s = q.values), "showFullBar" in q && n(4, u = q.showFullBar), "showTooltip" in q && n(5, g = q.showTooltip), "colors" in q && n(6, m = q.colors), "colorScale" in q && n(7, c = q.colorScale), "color" in q && n(8, d = q.color), "fullBarColor" in q && n(9, b = q.fullBarColor), "hoverable" in q && n(10, p = q.hoverable), "title" in q && n(11, w = q.title), "horizontalLayout" in q && n(12, N = q.horizontalLayout), "$$scope" in q && n(16, r = q.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*values*/
    8 && (s != null ? n(14, T = Mf(s)) : n(14, T = []));
  }, [
    o,
    a,
    f,
    s,
    u,
    g,
    m,
    c,
    d,
    b,
    p,
    w,
    N,
    z,
    T,
    i,
    r,
    l,
    F,
    O,
    I,
    ie,
    P,
    x,
    A
  ];
}
class qt extends ke {
  constructor(t) {
    super(), pe(this, t, Cf, xf, be, {
      width: 0,
      scale: 1,
      value: 2,
      values: 3,
      showFullBar: 4,
      showTooltip: 5,
      colors: 6,
      colorScale: 7,
      color: 8,
      fullBarColor: 9,
      hoverable: 10,
      title: 11,
      horizontalLayout: 12
    });
  }
}
function Ii(e, t, n) {
  const l = e.slice();
  return l[24] = t[n], l[26] = n, l;
}
function Pi(e) {
  let t, n, l;
  function r() {
    return (
      /*mouseenter_handler*/
      e[15](
        /*i*/
        e[26],
        /*d*/
        e[24]
      )
    );
  }
  return {
    c() {
      t = k("span"), h(t, "class", "bar absolute content-box svelte-mwmtzu"), j(t, "top", "0"), j(
        t,
        "left",
        /*$xGet*/
        e[3](
          /*d*/
          e[24]
        ) * /*$xRange*/
        (e[4][1] <= 1 ? 100 : 1) + /*$xRange*/
        (e[4][1] <= 1 ? "%" : "px")
      ), j(
        t,
        "width",
        /*$xScale*/
        (e[5](
          /*$z*/
          e[6](
            /*d*/
            e[24]
          )
        ) - /*$xGet*/
        e[3](
          /*d*/
          e[24]
        )) * /*$xRange*/
        (e[4][1] <= 1 ? 100 : 1) + /*$xRange*/
        (e[4][1] <= 1 ? "%" : "px")
      ), j(
        t,
        "background-color",
        /*$yGet*/
        e[7](
          /*d*/
          e[24]
        )
      ), ee(
        t,
        "animated",
        /*loaded*/
        e[1]
      ), ee(
        t,
        "border",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      ), ee(
        t,
        "border-black",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      );
    },
    m(i, o) {
      M(i, t, o), n || (l = [
        de(t, "mouseenter", r),
        de(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[16]
        )
      ], n = !0);
    },
    p(i, o) {
      e = i, o & /*$xGet, $data, $xRange*/
      28 && j(
        t,
        "left",
        /*$xGet*/
        e[3](
          /*d*/
          e[24]
        ) * /*$xRange*/
        (e[4][1] <= 1 ? 100 : 1) + /*$xRange*/
        (e[4][1] <= 1 ? "%" : "px")
      ), o & /*$xScale, $z, $data, $xGet, $xRange*/
      124 && j(
        t,
        "width",
        /*$xScale*/
        (e[5](
          /*$z*/
          e[6](
            /*d*/
            e[24]
          )
        ) - /*$xGet*/
        e[3](
          /*d*/
          e[24]
        )) * /*$xRange*/
        (e[4][1] <= 1 ? 100 : 1) + /*$xRange*/
        (e[4][1] <= 1 ? "%" : "px")
      ), o & /*$yGet, $data*/
      132 && j(
        t,
        "background-color",
        /*$yGet*/
        e[7](
          /*d*/
          e[24]
        )
      ), o & /*loaded*/
      2 && ee(
        t,
        "animated",
        /*loaded*/
        e[1]
      ), o & /*hoveredIndex, $data*/
      5 && ee(
        t,
        "border",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      ), o & /*hoveredIndex, $data*/
      5 && ee(
        t,
        "border-black",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      );
    },
    d(i) {
      i && R(t), n = !1, De(l);
    }
  };
}
function Lf(e) {
  let t, n = (
    /*$data*/
    e[2]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Pi(Ii(e, n, r));
  return {
    c() {
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      t = we();
    },
    m(r, i) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(r, i);
      M(r, t, i);
    },
    p(r, [i]) {
      if (i & /*$xGet, $data, $xRange, $xScale, $z, $yGet, loaded, hoveredIndex, dispatch*/
      511) {
        n = /*$data*/
        r[2];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = Ii(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = Pi(a), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    i: H,
    o: H,
    d(r) {
      lt(l, r), r && R(t);
    }
  };
}
function Of(e, t, n) {
  let l, r, i, o, a, f;
  const s = so(), { data: u, xGet: g, yGet: m, xRange: c, x: d, yRange: b, xScale: p, y: w, height: N, zGet: z, zScale: T, z: F, custom: O } = _n("LayerCake");
  E(e, u, (A) => n(2, l = A)), E(e, g, (A) => n(3, r = A)), E(e, m, (A) => n(7, f = A)), E(e, c, (A) => n(4, i = A)), E(e, p, (A) => n(5, o = A)), E(e, F, (A) => n(6, a = A));
  let I = null;
  Ct(() => {
    setTimeout(() => n(1, ie = !0), 100);
  });
  let ie = !1;
  return [
    I,
    ie,
    l,
    r,
    i,
    o,
    a,
    f,
    s,
    u,
    g,
    m,
    c,
    p,
    F,
    (A, q) => {
      n(0, I = A), s("hover", q);
    },
    () => {
      n(0, I = null), s("hover", null);
    }
  ];
}
class Eo extends ke {
  constructor(t) {
    super(), pe(this, t, Of, Lf, be, {});
  }
}
const qf = (e) => ({}), Fi = (e) => ({}), If = (e) => ({}), ji = (e) => ({});
function Pf(e) {
  let t, n, l, r, i, o, a, f, s, u = !!/*title*/
  e[1] && Bi(e);
  r = new Al({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: Xe(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        e[0] ?? 1
      ],
      yScale: Tl(),
      yDomain: Ve(
        /*counts*/
        e[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        e[4]
      ) ? (
        /*colorScale*/
        e[4]
      ) : Ve(0, 1.00001, 1 / /*data*/
      (e[6].length - 1)).map(
        /*func_2*/
        e[17]
      ),
      data: (
        /*data*/
        e[6]
      ),
      custom: { hoveredGet: (
        /*func_3*/
        e[18]
      ) },
      $$slots: { default: [Bf] },
      $$scope: { ctx: e }
    }
  });
  const g = [Wf, Gf, Hf], m = [];
  function c(d, b) {
    return (
      /*$$slots*/
      d[10].caption ? 0 : (
        /*hoveredIndex*/
        d[7] != null ? 1 : (
          /*mostCommonDatum*/
          d[8] ? 2 : -1
        )
      )
    );
  }
  return ~(a = c(e)) && (f = m[a] = g[a](e)), {
    c() {
      t = k("div"), u && u.c(), n = C(), l = k("div"), J(r.$$.fragment), i = C(), o = k("div"), f && f.c(), j(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), j(l, "height", "6px"), h(l, "class", "rounded overflow-hidden mb-1"), h(o, "class", "text-xs text-slate-800"), h(t, "class", "gap-1 items-center"), ee(
        t,
        "flex",
        /*horizontalLayout*/
        e[2]
      );
    },
    m(d, b) {
      M(d, t, b), u && u.m(t, null), y(t, n), y(t, l), K(r, l, null), y(t, i), y(t, o), ~a && m[a].m(o, null), s = !0;
    },
    p(d, b) {
      /*title*/
      d[1] ? u ? u.p(d, b) : (u = Bi(d), u.c(), u.m(t, n)) : u && (u.d(1), u = null);
      const p = {};
      b & /*width*/
      1 && (p.xRange = [
        0,
        /*width*/
        d[0] ?? 1
      ]), b & /*counts*/
      32 && (p.yDomain = Ve(
        /*counts*/
        d[5].length
      )), b & /*colorScale, data*/
      80 && (p.yRange = Array.isArray(
        /*colorScale*/
        d[4]
      ) ? (
        /*colorScale*/
        d[4]
      ) : Ve(0, 1.00001, 1 / /*data*/
      (d[6].length - 1)).map(
        /*func_2*/
        d[17]
      )), b & /*data*/
      64 && (p.data = /*data*/
      d[6]), b & /*hoveredIndex*/
      128 && (p.custom = { hoveredGet: (
        /*func_3*/
        d[18]
      ) }), b & /*$$scope, hoveredIndex*/
      524416 && (p.$$scope = { dirty: b, ctx: d }), r.$set(p), (!s || b & /*width*/
      1) && j(
        l,
        "width",
        /*width*/
        d[0] == null ? "100%" : `${/*width*/
        d[0]}px`
      );
      let w = a;
      a = c(d), a === w ? ~a && m[a].p(d, b) : (f && (te(), S(m[w], 1, 1, () => {
        m[w] = null;
      }), ne()), ~a ? (f = m[a], f ? f.p(d, b) : (f = m[a] = g[a](d), f.c()), v(f, 1), f.m(o, null)) : f = null), (!s || b & /*horizontalLayout*/
      4) && ee(
        t,
        "flex",
        /*horizontalLayout*/
        d[2]
      );
    },
    i(d) {
      s || (v(r.$$.fragment, d), v(f), s = !0);
    },
    o(d) {
      S(r.$$.fragment, d), S(f), s = !1;
    },
    d(d) {
      d && R(t), u && u.d(), Q(r), ~a && m[a].d();
    }
  };
}
function Ff(e) {
  let t, n, l, r, i, o, a, f, s = !!/*title*/
  e[1] && Hi(e);
  l = new Al({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: Xe(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        e[0] ?? 1
      ],
      yScale: Tl(),
      yDomain: Ve(
        /*counts*/
        e[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        e[4]
      ) ? (
        /*colorScale*/
        e[4]
      ) : Ve(0, 1.00001, 1 / /*data*/
      (e[6].length - 1)).map(
        /*func*/
        e[14]
      ),
      data: (
        /*data*/
        e[6]
      ),
      custom: { hoveredGet: (
        /*func_1*/
        e[15]
      ) },
      $$slots: { default: [Uf] },
      $$scope: { ctx: e }
    }
  });
  const u = [Yf, Qf, Kf], g = [];
  function m(c, d) {
    return (
      /*$$slots*/
      c[10].caption ? 0 : (
        /*hoveredIndex*/
        c[7] != null ? 1 : (
          /*mostCommonDatum*/
          c[8] ? 2 : -1
        )
      )
    );
  }
  return ~(o = m(e)) && (a = g[o] = u[o](e)), {
    c() {
      s && s.c(), t = C(), n = k("div"), J(l.$$.fragment), r = C(), i = k("div"), a && a.c(), j(
        n,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), j(n, "height", "6px"), h(n, "class", "rounded overflow-hidden mb-1"), h(i, "class", "text-xs text-slate-800");
    },
    m(c, d) {
      s && s.m(c, d), M(c, t, d), M(c, n, d), K(l, n, null), M(c, r, d), M(c, i, d), ~o && g[o].m(i, null), f = !0;
    },
    p(c, d) {
      /*title*/
      c[1] ? s ? s.p(c, d) : (s = Hi(c), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null);
      const b = {};
      d & /*width*/
      1 && (b.xRange = [
        0,
        /*width*/
        c[0] ?? 1
      ]), d & /*counts*/
      32 && (b.yDomain = Ve(
        /*counts*/
        c[5].length
      )), d & /*colorScale, data*/
      80 && (b.yRange = Array.isArray(
        /*colorScale*/
        c[4]
      ) ? (
        /*colorScale*/
        c[4]
      ) : Ve(0, 1.00001, 1 / /*data*/
      (c[6].length - 1)).map(
        /*func*/
        c[14]
      )), d & /*data*/
      64 && (b.data = /*data*/
      c[6]), d & /*hoveredIndex*/
      128 && (b.custom = { hoveredGet: (
        /*func_1*/
        c[15]
      ) }), d & /*$$scope, hoveredIndex*/
      524416 && (b.$$scope = { dirty: d, ctx: c }), l.$set(b), (!f || d & /*width*/
      1) && j(
        n,
        "width",
        /*width*/
        c[0] == null ? "100%" : `${/*width*/
        c[0]}px`
      );
      let p = o;
      o = m(c), o === p ? ~o && g[o].p(c, d) : (a && (te(), S(g[p], 1, 1, () => {
        g[p] = null;
      }), ne()), ~o ? (a = g[o], a ? a.p(c, d) : (a = g[o] = u[o](c), a.c()), v(a, 1), a.m(i, null)) : a = null);
    },
    i(c) {
      f || (v(l.$$.fragment, c), v(a), f = !0);
    },
    o(c) {
      S(l.$$.fragment, c), S(a), f = !1;
    },
    d(c) {
      s && s.d(c), c && R(t), c && R(n), Q(l), c && R(r), c && R(i), ~o && g[o].d();
    }
  };
}
function Bi(e) {
  let t, n;
  return {
    c() {
      t = k("div"), n = L(
        /*title*/
        e[1]
      ), h(t, "class", "font-bold text-xs truncate text-right"), j(t, "width", "84px");
    },
    m(l, r) {
      M(l, t, r), y(t, n);
    },
    p(l, r) {
      r & /*title*/
      2 && W(
        n,
        /*title*/
        l[1]
      );
    },
    d(l) {
      l && R(t);
    }
  };
}
function jf(e) {
  let t, n;
  return t = new Eo({}), t.$on(
    "hover",
    /*hover_handler_1*/
    e[16]
  ), {
    c() {
      J(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p: H,
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      S(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Q(t, l);
    }
  };
}
function Bf(e) {
  let t, n;
  return t = new So({
    props: {
      $$slots: { default: [jf] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      J(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*$$scope, hoveredIndex*/
      524416 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      S(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Q(t, l);
    }
  };
}
function Hf(e) {
  let t, n = (
    /*makeTooltipText*/
    e[9](
      /*mostCommonDatum*/
      e[8]
    ) + ""
  ), l;
  return {
    c() {
      t = new El(!1), l = we(), t.a = l;
    },
    m(r, i) {
      t.m(n, r, i), M(r, l, i);
    },
    p(r, i) {
      i & /*mostCommonDatum*/
      256 && n !== (n = /*makeTooltipText*/
      r[9](
        /*mostCommonDatum*/
        r[8]
      ) + "") && t.p(n);
    },
    i: H,
    o: H,
    d(r) {
      r && R(l), r && t.d();
    }
  };
}
function Gf(e) {
  let t, n = (
    /*makeTooltipText*/
    e[9](
      /*data*/
      e[6][
        /*hoveredIndex*/
        e[7]
      ]
    ) + ""
  ), l;
  return {
    c() {
      t = new El(!1), l = we(), t.a = l;
    },
    m(r, i) {
      t.m(n, r, i), M(r, l, i);
    },
    p(r, i) {
      i & /*data, hoveredIndex*/
      192 && n !== (n = /*makeTooltipText*/
      r[9](
        /*data*/
        r[6][
          /*hoveredIndex*/
          r[7]
        ]
      ) + "") && t.p(n);
    },
    i: H,
    o: H,
    d(r) {
      r && R(l), r && t.d();
    }
  };
}
function Wf(e) {
  let t;
  const n = (
    /*#slots*/
    e[12].caption
  ), l = Pe(
    n,
    e,
    /*$$scope*/
    e[19],
    Fi
  );
  return {
    c() {
      l && l.c();
    },
    m(r, i) {
      l && l.m(r, i), t = !0;
    },
    p(r, i) {
      l && l.p && (!t || i & /*$$scope*/
      524288) && je(
        l,
        n,
        r,
        /*$$scope*/
        r[19],
        t ? Fe(
          n,
          /*$$scope*/
          r[19],
          i,
          qf
        ) : Be(
          /*$$scope*/
          r[19]
        ),
        Fi
      );
    },
    i(r) {
      t || (v(l, r), t = !0);
    },
    o(r) {
      S(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function Hi(e) {
  let t, n;
  return {
    c() {
      t = k("div"), n = L(
        /*title*/
        e[1]
      ), h(t, "class", "font-bold text-xs truncate text-right");
    },
    m(l, r) {
      M(l, t, r), y(t, n);
    },
    p(l, r) {
      r & /*title*/
      2 && W(
        n,
        /*title*/
        l[1]
      );
    },
    d(l) {
      l && R(t);
    }
  };
}
function Vf(e) {
  let t, n;
  return t = new Eo({}), t.$on(
    "hover",
    /*hover_handler*/
    e[13]
  ), {
    c() {
      J(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p: H,
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      S(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Q(t, l);
    }
  };
}
function Uf(e) {
  let t, n;
  return t = new So({
    props: {
      $$slots: { default: [Vf] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      J(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*$$scope, hoveredIndex*/
      524416 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      S(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Q(t, l);
    }
  };
}
function Kf(e) {
  let t, n = (
    /*makeTooltipText*/
    e[9](
      /*mostCommonDatum*/
      e[8]
    ) + ""
  ), l;
  return {
    c() {
      t = new El(!1), l = we(), t.a = l;
    },
    m(r, i) {
      t.m(n, r, i), M(r, l, i);
    },
    p(r, i) {
      i & /*mostCommonDatum*/
      256 && n !== (n = /*makeTooltipText*/
      r[9](
        /*mostCommonDatum*/
        r[8]
      ) + "") && t.p(n);
    },
    i: H,
    o: H,
    d(r) {
      r && R(l), r && t.d();
    }
  };
}
function Qf(e) {
  let t, n = (
    /*makeTooltipText*/
    e[9](
      /*data*/
      e[6][
        /*hoveredIndex*/
        e[7]
      ]
    ) + ""
  ), l;
  return {
    c() {
      t = new El(!1), l = we(), t.a = l;
    },
    m(r, i) {
      t.m(n, r, i), M(r, l, i);
    },
    p(r, i) {
      i & /*data, hoveredIndex*/
      192 && n !== (n = /*makeTooltipText*/
      r[9](
        /*data*/
        r[6][
          /*hoveredIndex*/
          r[7]
        ]
      ) + "") && t.p(n);
    },
    i: H,
    o: H,
    d(r) {
      r && R(l), r && t.d();
    }
  };
}
function Yf(e) {
  let t;
  const n = (
    /*#slots*/
    e[12].caption
  ), l = Pe(
    n,
    e,
    /*$$scope*/
    e[19],
    ji
  );
  return {
    c() {
      l && l.c();
    },
    m(r, i) {
      l && l.m(r, i), t = !0;
    },
    p(r, i) {
      l && l.p && (!t || i & /*$$scope*/
      524288) && je(
        l,
        n,
        r,
        /*$$scope*/
        r[19],
        t ? Fe(
          n,
          /*$$scope*/
          r[19],
          i,
          If
        ) : Be(
          /*$$scope*/
          r[19]
        ),
        ji
      );
    },
    i(r) {
      t || (v(l, r), t = !0);
    },
    o(r) {
      S(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function Jf(e) {
  let t, n, l, r;
  const i = [Ff, Pf], o = [];
  function a(f, s) {
    return (
      /*noParent*/
      f[3] ? 0 : 1
    );
  }
  return t = a(e), n = o[t] = i[t](e), {
    c() {
      n.c(), l = we();
    },
    m(f, s) {
      o[t].m(f, s), M(f, l, s), r = !0;
    },
    p(f, [s]) {
      let u = t;
      t = a(f), t === u ? o[t].p(f, s) : (te(), S(o[u], 1, 1, () => {
        o[u] = null;
      }), ne(), n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), v(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      r || (v(n), r = !0);
    },
    o(f) {
      S(n), r = !1;
    },
    d(f) {
      o[t].d(f), f && R(l);
    }
  };
}
function Xf(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = rr(l);
  let { width: o = null } = t, { title: a = null } = t, { horizontalLayout: f = !1 } = t, { noParent: s = !1 } = t, { colorScale: u = Array.from(vf) } = t, { counts: g = null } = t, { order: m = [] } = t, c = [], d;
  re(",");
  let b = re(".1~%"), p = 1;
  function w(P) {
    return `<strong>${b(P.count / p)}</strong> ${P.name}`;
  }
  let N = null;
  const z = (P) => n(7, d = P.detail ? P.detail.index : null), T = (P) => u(P), F = (P) => P.index == d, O = (P) => n(7, d = P.detail ? P.detail.index : null), I = (P) => u(P), ie = (P) => P.index == d;
  return e.$$set = (P) => {
    "width" in P && n(0, o = P.width), "title" in P && n(1, a = P.title), "horizontalLayout" in P && n(2, f = P.horizontalLayout), "noParent" in P && n(3, s = P.noParent), "colorScale" in P && n(4, u = P.colorScale), "counts" in P && n(5, g = P.counts), "order" in P && n(11, m = P.order), "$$scope" in P && n(19, r = P.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*counts, order*/
    2080)
      if (g && m.length > 0) {
        let P = Object.values(g).reduce((A, q) => A + q, 0), x = 0;
        n(6, c = m.map((A, q) => {
          let Z = x;
          return x += g[A] || 0, {
            start: Z / P,
            end: x / P,
            index: q,
            name: A,
            count: g[A] || 0
          };
        }));
      } else
        n(6, c = []);
    e.$$.dirty & /*counts*/
    32 && (g ? p = Object.values(g).reduce((P, x) => P + x, 0) : p = 1), e.$$.dirty & /*data*/
    64 && (c.length > 0 ? n(8, N = c.reduce((P, x) => P.count > x.count ? P : x, c[0])) : n(8, N = null));
  }, [
    o,
    a,
    f,
    s,
    u,
    g,
    c,
    d,
    N,
    w,
    i,
    m,
    l,
    z,
    T,
    F,
    O,
    I,
    ie,
    r
  ];
}
class Do extends ke {
  constructor(t) {
    super(), pe(this, t, Xf, Jf, be, {
      width: 0,
      title: 1,
      horizontalLayout: 2,
      noParent: 3,
      colorScale: 4,
      counts: 5,
      order: 11
    });
  }
}
function un(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
un.prototype = {
  constructor: un,
  scale: function(e) {
    return e === 1 ? this : new un(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new un(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
un.prototype;
function Zf(e) {
  let t;
  return {
    c() {
      t = k("div"), t.innerHTML = `<div class="text-4xl mb-2">📊</div> 
      <div class="text-sm font-mono">No query results yet</div> 
      <div class="text-xs mt-1">Enter a query and click Run to see results</div>`, h(t, "class", "text-center py-8 text-gray-500 dark:text-gray-400");
    },
    m(n, l) {
      M(n, t, l);
    },
    p: H,
    i: H,
    o: H,
    d(n) {
      n && R(t);
    }
  };
}
function $f(e) {
  let t, n, l, r = (
    /*values*/
    (e[0].values.type || "Time Series") + ""
  ), i, o, a, f, s, u, g, m, c, d, b = ye(
    /*values*/
    e[0].values.length ?? 0
  ) + "", p, w, N, z, T, F, O, I, ie, P, x, A, q = re(".1%")(
    /*values*/
    e[0].values.missingness ?? 0
  ) + "", Z, ce, B, G, D, $, V, oe, ge, Ne, ve;
  function Te(Y, he) {
    return (
      /*showCountDetails*/
      Y[3] ? tu : eu
    );
  }
  let ze = Te(e), me = ze(e), ae = (
    /*showCountDetails*/
    e[3] && Gi(e)
  );
  function rt(Y, he) {
    return (
      /*showMissingnessDetails*/
      Y[4] ? ru : lu
    );
  }
  let Ge = rt(e), Me = Ge(e), se = (
    /*showMissingnessDetails*/
    e[4] && Vi(e)
  );
  const It = [su, au, ou], Ae = [];
  function Pt(Y, he) {
    return (
      /*values*/
      Y[0].values.type == "binary" ? 0 : (
        /*values*/
        Y[0].values.type == "continuous" ? 1 : (
          /*values*/
          Y[0].values.type == "categorical" ? 2 : -1
        )
      )
    );
  }
  return ~(V = Pt(e)) && (oe = Ae[V] = It[V](e)), {
    c() {
      t = k("div"), n = k("span"), n.textContent = "Type:", l = C(), i = L(r), o = C(), a = k("div"), f = k("div"), s = k("div"), u = k("button"), me.c(), g = C(), m = k("span"), m.textContent = "Count:", c = C(), d = k("span"), p = L(b), w = C(), N = k("span"), N.textContent = "rows", z = C(), ae && ae.c(), T = C(), F = k("div"), O = k("div"), I = k("button"), Me.c(), ie = C(), P = k("span"), P.textContent = "Missingness:", x = C(), A = k("span"), Z = L(q), ce = C(), se && se.c(), B = C(), G = k("div"), D = k("div"), D.innerHTML = '<span class="font-bold text-gray-900 dark:text-gray-100 mr-2">Values:</span>', $ = C(), oe && oe.c(), h(n, "class", "font-semibold"), h(t, "class", "text-sm font-mono text-gray-700 dark:text-gray-300 mb-4"), h(u, "class", "mr-2 focus:outline-none text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"), h(u, "aria-label", "Toggle count details"), j(u, "font-size", "1.1em"), h(m, "class", "font-bold text-gray-900 dark:text-gray-100 mr-2"), h(d, "class", "tabular-nums text-gray-700 dark:text-gray-200"), h(N, "class", "ml-1 text-gray-500 dark:text-gray-400 text-sm"), h(s, "class", "flex items-center"), h(f, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-2 text-base w-full rounded-md"), h(I, "class", "mr-2 focus:outline-none text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"), h(I, "aria-label", "Toggle missingness details"), j(I, "font-size", "1.1em"), h(P, "class", "font-bold text-gray-900 dark:text-gray-100 mr-2"), h(A, "class", "tabular-nums text-gray-700 dark:text-gray-200"), h(O, "class", "flex items-center"), h(F, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-2 text-base w-full rounded-md"), h(D, "class", "flex items-center mb-2"), h(G, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-2 text-base w-full rounded-md"), h(a, "class", "space-y-2");
    },
    m(Y, he) {
      M(Y, t, he), y(t, n), y(t, l), y(t, i), M(Y, o, he), M(Y, a, he), y(a, f), y(f, s), y(s, u), me.m(u, null), y(s, g), y(s, m), y(s, c), y(s, d), y(d, p), y(s, w), y(s, N), y(f, z), ae && ae.m(f, null), y(a, T), y(a, F), y(F, O), y(O, I), Me.m(I, null), y(O, ie), y(O, P), y(O, x), y(O, A), y(A, Z), y(F, ce), se && se.m(F, null), y(a, B), y(a, G), y(G, D), y(G, $), ~V && Ae[V].m(G, null), ge = !0, Ne || (ve = [
        de(
          u,
          "click",
          /*click_handler*/
          e[5]
        ),
        de(
          I,
          "click",
          /*click_handler_1*/
          e[6]
        )
      ], Ne = !0);
    },
    p(Y, he) {
      (!ge || he & /*values*/
      1) && r !== (r = /*values*/
      (Y[0].values.type || "Time Series") + "") && W(i, r), ze !== (ze = Te(Y)) && (me.d(1), me = ze(Y), me && (me.c(), me.m(u, null))), (!ge || he & /*values*/
      1) && b !== (b = ye(
        /*values*/
        Y[0].values.length ?? 0
      ) + "") && W(p, b), /*showCountDetails*/
      Y[3] ? ae ? (ae.p(Y, he), he & /*showCountDetails*/
      8 && v(ae, 1)) : (ae = Gi(Y), ae.c(), v(ae, 1), ae.m(f, null)) : ae && (te(), S(ae, 1, 1, () => {
        ae = null;
      }), ne()), Ge !== (Ge = rt(Y)) && (Me.d(1), Me = Ge(Y), Me && (Me.c(), Me.m(I, null))), (!ge || he & /*values*/
      1) && q !== (q = re(".1%")(
        /*values*/
        Y[0].values.missingness ?? 0
      ) + "") && W(Z, q), /*showMissingnessDetails*/
      Y[4] ? se ? (se.p(Y, he), he & /*showMissingnessDetails*/
      16 && v(se, 1)) : (se = Vi(Y), se.c(), v(se, 1), se.m(F, null)) : se && (te(), S(se, 1, 1, () => {
        se = null;
      }), ne());
      let it = V;
      V = Pt(Y), V === it ? ~V && Ae[V].p(Y, he) : (oe && (te(), S(Ae[it], 1, 1, () => {
        Ae[it] = null;
      }), ne()), ~V ? (oe = Ae[V], oe ? oe.p(Y, he) : (oe = Ae[V] = It[V](Y), oe.c()), v(oe, 1), oe.m(G, null)) : oe = null);
    },
    i(Y) {
      ge || (v(ae), v(se), v(oe), ge = !0);
    },
    o(Y) {
      S(ae), S(se), S(oe), ge = !1;
    },
    d(Y) {
      Y && R(t), Y && R(o), Y && R(a), me.d(), ae && ae.d(), Me.d(), se && se.d(), ~V && Ae[V].d(), Ne = !1, De(ve);
    }
  };
}
function eu(e) {
  let t;
  return {
    c() {
      t = L("▶");
    },
    m(n, l) {
      M(n, t, l);
    },
    d(n) {
      n && R(t);
    }
  };
}
function tu(e) {
  let t;
  return {
    c() {
      t = L("▼");
    },
    m(n, l) {
      M(n, t, l);
    },
    d(n) {
      n && R(t);
    }
  };
}
function Gi(e) {
  let t, n, l, r, i, o, a = ye(
    /*values*/
    e[0].values.num_unique_ids ?? 0
  ) + "", f, s, u = ye(
    /*idsLength*/
    e[1]
  ) + "", g, m, c, d, b, p, w, N, z;
  return c = new qt({
    props: {
      value: (
        /*idsLength*/
        e[1] > 0 ? (
          /*values*/
          (e[0].values.num_unique_ids ?? 0) / /*idsLength*/
          e[1]
        ) : 0
      ),
      width: null,
      showFullBar: !0,
      $$slots: { caption: [nu] },
      $$scope: { ctx: e }
    }
  }), N = new Lt({
    props: {
      histValues: (
        /*values*/
        e[0].values.ids_hist
      ),
      mean: (
        /*values*/
        e[0].values.ids_hist_mean
      ),
      width: null
    }
  }), {
    c() {
      t = k("div"), n = k("div"), l = k("div"), r = k("span"), r.textContent = "Unique IDs:", i = C(), o = k("span"), f = L(a), s = L(" / "), g = L(u), m = C(), J(c.$$.fragment), d = C(), b = k("div"), p = k("div"), p.innerHTML = '<span class="text-gray-600 dark:text-gray-400">Number of timesteps per trajectory:</span>', w = C(), J(N.$$.fragment), h(r, "class", "text-gray-600 dark:text-gray-400"), h(o, "class", "font-mono font-semibold text-gray-700 dark:text-gray-200 text-xs sm:text-sm"), h(l, "class", "flex flex-wrap justify-between items-center mb-1 gap-1"), h(n, "class", "mb-2"), h(p, "class", "flex justify-between items-center mb-1"), h(t, "class", "mt-2 p-2 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-700 dark:text-gray-300");
    },
    m(T, F) {
      M(T, t, F), y(t, n), y(n, l), y(l, r), y(l, i), y(l, o), y(o, f), y(o, s), y(o, g), y(n, m), K(c, n, null), y(t, d), y(t, b), y(b, p), y(b, w), K(N, b, null), z = !0;
    },
    p(T, F) {
      (!z || F & /*values*/
      1) && a !== (a = ye(
        /*values*/
        T[0].values.num_unique_ids ?? 0
      ) + "") && W(f, a), (!z || F & /*idsLength*/
      2) && u !== (u = ye(
        /*idsLength*/
        T[1]
      ) + "") && W(g, u);
      const O = {};
      F & /*idsLength, values*/
      3 && (O.value = /*idsLength*/
      T[1] > 0 ? (
        /*values*/
        (T[0].values.num_unique_ids ?? 0) / /*idsLength*/
        T[1]
      ) : 0), F & /*$$scope, idsLength, values*/
      259 && (O.$$scope = { dirty: F, ctx: T }), c.$set(O);
      const I = {};
      F & /*values*/
      1 && (I.histValues = /*values*/
      T[0].values.ids_hist), F & /*values*/
      1 && (I.mean = /*values*/
      T[0].values.ids_hist_mean), N.$set(I);
    },
    i(T) {
      z || (v(c.$$.fragment, T), v(N.$$.fragment, T), z = !0);
    },
    o(T) {
      S(c.$$.fragment, T), S(N.$$.fragment, T), z = !1;
    },
    d(T) {
      T && R(t), Q(c), Q(N);
    }
  };
}
function Wi(e) {
  let t, n, l = ye(
    /*values*/
    e[0].values.num_unique_ids ?? 0
  ) + "", r, i, o = ye(
    /*idsLength*/
    e[1]
  ) + "", a, f;
  return {
    c() {
      t = k("span"), n = L("("), r = L(l), i = L(" / "), a = L(o), f = L(")"), h(t, "class", "text-gray-500 dark:text-gray-400 ml-1 text-xs");
    },
    m(s, u) {
      M(s, t, u), y(t, n), y(t, r), y(t, i), y(t, a), y(t, f);
    },
    p(s, u) {
      u & /*values*/
      1 && l !== (l = ye(
        /*values*/
        s[0].values.num_unique_ids ?? 0
      ) + "") && W(r, l), u & /*idsLength*/
      2 && o !== (o = ye(
        /*idsLength*/
        s[1]
      ) + "") && W(a, o);
    },
    d(s) {
      s && R(t);
    }
  };
}
function nu(e) {
  let t, n, l = (
    /*idsLength*/
    (e[1] > 0 ? re(".1%")(
      /*values*/
      (e[0].values.num_unique_ids ?? 0) / /*idsLength*/
      e[1]
    ) : "0.0%") + ""
  ), r, i, o = (
    /*idsLength*/
    e[1] > 0 && Wi(e)
  );
  return {
    c() {
      t = k("span"), n = k("strong"), r = L(l), i = C(), o && o.c(), h(t, "slot", "caption");
    },
    m(a, f) {
      M(a, t, f), y(t, n), y(n, r), y(t, i), o && o.m(t, null);
    },
    p(a, f) {
      f & /*idsLength, values*/
      3 && l !== (l = /*idsLength*/
      (a[1] > 0 ? re(".1%")(
        /*values*/
        (a[0].values.num_unique_ids ?? 0) / /*idsLength*/
        a[1]
      ) : "0.0%") + "") && W(r, l), /*idsLength*/
      a[1] > 0 ? o ? o.p(a, f) : (o = Wi(a), o.c(), o.m(t, null)) : o && (o.d(1), o = null);
    },
    d(a) {
      a && R(t), o && o.d();
    }
  };
}
function lu(e) {
  let t;
  return {
    c() {
      t = L("▶");
    },
    m(n, l) {
      M(n, t, l);
    },
    d(n) {
      n && R(t);
    }
  };
}
function ru(e) {
  let t;
  return {
    c() {
      t = L("▼");
    },
    m(n, l) {
      M(n, t, l);
    },
    d(n) {
      n && R(t);
    }
  };
}
function Vi(e) {
  let t, n, l, r, i, o, a = ye(
    /*values*/
    e[0].values.num_missing_values ?? 0
  ) + "", f, s, u = ye(
    /*values*/
    e[0].values.length ?? 0
  ) + "", g, m, c, d, b = (
    /*values*/
    e[0].values.missing_ids_hist && Object.keys(
      /*values*/
      e[0].values.missing_ids_hist
    ).length > 0
  ), p;
  c = new qt({
    props: {
      value: (
        /*values*/
        e[0].values.missingness ?? 0
      ),
      width: null,
      color: "#ef4444",
      showFullBar: !0,
      $$slots: { caption: [iu] },
      $$scope: { ctx: e }
    }
  });
  let w = b && Ui(e);
  return {
    c() {
      t = k("div"), n = k("div"), l = k("div"), r = k("span"), r.textContent = "Number of missing values:", i = C(), o = k("span"), f = L(a), s = L(" / "), g = L(u), m = C(), J(c.$$.fragment), d = C(), w && w.c(), h(r, "class", "text-gray-600 dark:text-gray-400"), h(o, "class", "font-mono font-semibold text-gray-700 dark:text-gray-200 text-xs sm:text-sm"), h(l, "class", "flex flex-wrap justify-between items-center mb-1 gap-1"), h(t, "class", "mt-2 p-2 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-700 dark:text-gray-300");
    },
    m(N, z) {
      M(N, t, z), y(t, n), y(n, l), y(l, r), y(l, i), y(l, o), y(o, f), y(o, s), y(o, g), y(n, m), K(c, n, null), y(n, d), w && w.m(n, null), p = !0;
    },
    p(N, z) {
      (!p || z & /*values*/
      1) && a !== (a = ye(
        /*values*/
        N[0].values.num_missing_values ?? 0
      ) + "") && W(f, a), (!p || z & /*values*/
      1) && u !== (u = ye(
        /*values*/
        N[0].values.length ?? 0
      ) + "") && W(g, u);
      const T = {};
      z & /*values*/
      1 && (T.value = /*values*/
      N[0].values.missingness ?? 0), z & /*$$scope, values*/
      257 && (T.$$scope = { dirty: z, ctx: N }), c.$set(T), z & /*values*/
      1 && (b = /*values*/
      N[0].values.missing_ids_hist && Object.keys(
        /*values*/
        N[0].values.missing_ids_hist
      ).length > 0), b ? w ? (w.p(N, z), z & /*values*/
      1 && v(w, 1)) : (w = Ui(N), w.c(), v(w, 1), w.m(n, null)) : w && (te(), S(w, 1, 1, () => {
        w = null;
      }), ne());
    },
    i(N) {
      p || (v(c.$$.fragment, N), v(w), p = !0);
    },
    o(N) {
      S(c.$$.fragment, N), S(w), p = !1;
    },
    d(N) {
      N && R(t), Q(c), w && w.d();
    }
  };
}
function iu(e) {
  let t, n, l = re(".1%")(
    /*values*/
    e[0].values.missingness ?? 0
  ) + "", r, i, o, a, f = ye(
    /*values*/
    e[0].values.num_missing_values ?? 0
  ) + "", s, u, g = ye(
    /*values*/
    e[0].values.length ?? 0
  ) + "", m, c;
  return {
    c() {
      t = k("span"), n = k("strong"), r = L(l), i = C(), o = k("span"), a = L("("), s = L(f), u = L(" / "), m = L(g), c = L(")"), h(o, "class", "text-gray-500 dark:text-gray-400 ml-1 text-xs"), h(t, "slot", "caption");
    },
    m(d, b) {
      M(d, t, b), y(t, n), y(n, r), y(t, i), y(t, o), y(o, a), y(o, s), y(o, u), y(o, m), y(o, c);
    },
    p(d, b) {
      b & /*values*/
      1 && l !== (l = re(".1%")(
        /*values*/
        d[0].values.missingness ?? 0
      ) + "") && W(r, l), b & /*values*/
      1 && f !== (f = ye(
        /*values*/
        d[0].values.num_missing_values ?? 0
      ) + "") && W(s, f), b & /*values*/
      1 && g !== (g = ye(
        /*values*/
        d[0].values.length ?? 0
      ) + "") && W(m, g);
    },
    d(d) {
      d && R(t);
    }
  };
}
function Ui(e) {
  let t, n, l, r;
  return l = new Lt({
    props: {
      histValues: (
        /*values*/
        e[0].values.missing_ids_hist
      ),
      mean: (
        /*values*/
        e[0].values.missing_ids_hist_mean
      ),
      width: null
    }
  }), {
    c() {
      t = k("div"), t.innerHTML = '<span class="text-gray-600 dark:text-gray-400">Number of missing values per trajectory:</span>', n = C(), J(l.$$.fragment), h(t, "class", "flex justify-between items-center mb-1");
    },
    m(i, o) {
      M(i, t, o), M(i, n, o), K(l, i, o), r = !0;
    },
    p(i, o) {
      const a = {};
      o & /*values*/
      1 && (a.histValues = /*values*/
      i[0].values.missing_ids_hist), o & /*values*/
      1 && (a.mean = /*values*/
      i[0].values.missing_ids_hist_mean), l.$set(a);
    },
    i(i) {
      r || (v(l.$$.fragment, i), r = !0);
    },
    o(i) {
      S(l.$$.fragment, i), r = !1;
    },
    d(i) {
      i && R(t), i && R(n), Q(l, i);
    }
  };
}
function ou(e) {
  let t, n;
  return t = new Do({
    props: {
      order: Object.keys(
        /*values*/
        e[0].values.counts || {}
      ).sort(
        /*func*/
        e[7]
      ),
      counts: (
        /*values*/
        e[0].values.counts || {}
      ),
      width: 200
    }
  }), {
    c() {
      J(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*values*/
      1 && (i.order = Object.keys(
        /*values*/
        l[0].values.counts || {}
      ).sort(
        /*func*/
        l[7]
      )), r & /*values*/
      1 && (i.counts = /*values*/
      l[0].values.counts || {}), t.$set(i);
    },
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      S(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Q(t, l);
    }
  };
}
function au(e) {
  let t, n;
  return t = new Lt({
    props: {
      histValues: (
        /*values*/
        e[0].values.hist
      ),
      mean: (
        /*values*/
        e[0].values.mean ?? 0
      ),
      width: 200
    }
  }), {
    c() {
      J(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*values*/
      1 && (i.histValues = /*values*/
      l[0].values.hist), r & /*values*/
      1 && (i.mean = /*values*/
      l[0].values.mean ?? 0), t.$set(i);
    },
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      S(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Q(t, l);
    }
  };
}
function su(e) {
  let t, n;
  return t = new qt({
    props: {
      value: (
        /*values*/
        e[0].values.mean ?? 0
      ),
      width: 200,
      color: "#d97706",
      showFullBar: !0,
      $$slots: { caption: [fu] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      J(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*values*/
      1 && (i.value = /*values*/
      l[0].values.mean ?? 0), r & /*$$scope, values*/
      257 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      S(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Q(t, l);
    }
  };
}
function fu(e) {
  let t, n, l = re(".1%")(
    /*values*/
    e[0].values.mean ?? 0
  ) + "", r, i, o, a = re(".1%")(1 - /*values*/
  (e[0].values.mean ?? 0)) + "", f, s;
  return {
    c() {
      t = k("span"), n = k("strong"), r = L(l), i = L(`
              true,
              `), o = k("strong"), f = L(a), s = L(" false"), h(t, "slot", "caption");
    },
    m(u, g) {
      M(u, t, g), y(t, n), y(n, r), y(t, i), y(t, o), y(o, f), y(t, s);
    },
    p(u, g) {
      g & /*values*/
      1 && l !== (l = re(".1%")(
        /*values*/
        u[0].values.mean ?? 0
      ) + "") && W(r, l), g & /*values*/
      1 && a !== (a = re(".1%")(1 - /*values*/
      (u[0].values.mean ?? 0)) + "") && W(f, a);
    },
    d(u) {
      u && R(t);
    }
  };
}
function uu(e) {
  let t, n, l, r, i, o, a;
  const f = [$f, Zf], s = [];
  function u(g, m) {
    return (
      /*values*/
      g[0] && /*values*/
      g[0].values ? 0 : 1
    );
  }
  return r = u(e), i = s[r] = f[r](e), {
    c() {
      t = k("div"), n = k("div"), n.innerHTML = `<h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Query Result</h3> 
    
    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="text-gray-400"><path d="M15 8a3 3 0 1 0-6 0v8a3 3 0 1 0 6 0V8z"></path><path d="M12 3v2m0 14v2m7-7h2m-18 0H3"></path></svg>`, l = C(), i.c(), h(n, "class", "flex items-center justify-between mb-2"), h(t, "class", o = "bg-white dark:bg-gray-900 p-4 mb-0 border-0 rounded-none " + /*width*/
      e[2] + " transition-colors duration-200");
    },
    m(g, m) {
      M(g, t, m), y(t, n), y(t, l), s[r].m(t, null), a = !0;
    },
    p(g, [m]) {
      let c = r;
      r = u(g), r === c ? s[r].p(g, m) : (te(), S(s[c], 1, 1, () => {
        s[c] = null;
      }), ne(), i = s[r], i ? i.p(g, m) : (i = s[r] = f[r](g), i.c()), v(i, 1), i.m(t, null)), (!a || m & /*width*/
      4 && o !== (o = "bg-white dark:bg-gray-900 p-4 mb-0 border-0 rounded-none " + /*width*/
      g[2] + " transition-colors duration-200")) && h(t, "class", o);
    },
    i(g) {
      a || (v(i), a = !0);
    },
    o(g) {
      S(i), a = !1;
    },
    d(g) {
      g && R(t), s[r].d();
    }
  };
}
function ye(e) {
  var t;
  return ((t = e == null ? void 0 : e.toLocaleString) == null ? void 0 : t.call(e)) ?? e;
}
function cu(e, t, n) {
  let { values: l = null } = t, { idsLength: r = 0 } = t, { width: i = "w-full max-w-2xl" } = t, o = !1, a = !1;
  const f = () => n(3, o = !o), s = () => n(4, a = !a), u = (g, m) => {
    var c, d;
    return (((c = l.values.counts) == null ? void 0 : c[m]) ?? 0) - (((d = l.values.counts) == null ? void 0 : d[g]) ?? 0);
  };
  return e.$$set = (g) => {
    "values" in g && n(0, l = g.values), "idsLength" in g && n(1, r = g.idsLength), "width" in g && n(2, i = g.width);
  }, e.$$.update = () => {
    e.$$.dirty & /*values*/
    1 && (console.log("QueryResultCard - Values received:"), console.log("  values:", l)), e.$$.dirty & /*values*/
    1 && console.log("values", l);
  }, [
    l,
    r,
    i,
    o,
    a,
    f,
    s,
    u
  ];
}
class du extends ke {
  constructor(t) {
    super(), pe(this, t, cu, uu, be, { values: 0, idsLength: 1, width: 2 });
  }
}
function gu(e) {
  let t, n, l = (
    /*message*/
    (e[0] || "// No output yet. Execute a query to see results.") + ""
  ), r;
  return {
    c() {
      t = k("div"), n = k("p"), r = L(l), h(n, "class", "text-gray-700 dark:text-gray-200 text-sm leading-relaxed font-mono"), h(t, "class", "bg-gray-100 dark:bg-gray-800 rounded-md p-4 border border-gray-300 dark:border-gray-600");
    },
    m(i, o) {
      M(i, t, o), y(t, n), y(n, r);
    },
    p(i, o) {
      o & /*message*/
      1 && l !== (l = /*message*/
      (i[0] || "// No output yet. Execute a query to see results.") + "") && W(r, l);
    },
    d(i) {
      i && R(t);
    }
  };
}
function mu(e) {
  let t, n, l, r, i, o, a, f, s, u;
  return {
    c() {
      t = k("div"), n = k("div"), l = k("span"), l.textContent = "SQL Query", r = C(), i = k("button"), i.textContent = "📋 Copy", o = C(), a = k("pre"), f = L(
        /*formattedSQL*/
        e[3]
      ), h(l, "class", "text-blue-600 dark:text-blue-400 text-sm font-mono font-semibold"), h(i, "class", "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded border border-gray-300 dark:border-gray-600 hover:border-blue-500 transition-colors"), h(i, "title", "Copy SQL to clipboard"), h(n, "class", "flex items-center justify-between mb-3"), h(a, "class", "text-green-600 dark:text-green-400 text-sm leading-relaxed font-mono overflow-x-auto whitespace-pre-wrap"), h(t, "class", "bg-gray-100 dark:bg-gray-800 rounded-md p-4 border border-gray-300 dark:border-gray-600");
    },
    m(g, m) {
      M(g, t, m), y(t, n), y(n, l), y(n, r), y(n, i), y(t, o), y(t, a), y(a, f), s || (u = de(
        i,
        "click",
        /*click_handler*/
        e[4]
      ), s = !0);
    },
    p(g, m) {
      m & /*formattedSQL*/
      8 && W(
        f,
        /*formattedSQL*/
        g[3]
      );
    },
    d(g) {
      g && R(t), s = !1, u();
    }
  };
}
function hu(e) {
  let t, n, l, r;
  function i(f, s) {
    return (
      /*isSQL*/
      f[2] ? mu : gu
    );
  }
  let o = i(e), a = o(e);
  return {
    c() {
      t = k("div"), n = k("h3"), n.textContent = "Query Output", l = C(), a.c(), h(n, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3"), h(t, "class", r = "bg-white dark:bg-gray-900 p-4 border-0 rounded-none " + /*width*/
      e[1] + " transition-colors duration-200");
    },
    m(f, s) {
      M(f, t, s), y(t, n), y(t, l), a.m(t, null);
    },
    p(f, [s]) {
      o === (o = i(f)) && a ? a.p(f, s) : (a.d(1), a = o(f), a && (a.c(), a.m(t, null))), s & /*width*/
      2 && r !== (r = "bg-white dark:bg-gray-900 p-4 border-0 rounded-none " + /*width*/
      f[1] + " transition-colors duration-200") && h(t, "class", r);
    },
    i: H,
    o: H,
    d(f) {
      f && R(t), a.d();
    }
  };
}
function bu(e) {
  if (!e)
    return !1;
  const t = [
    "SELECT",
    "FROM",
    "WHERE",
    "JOIN",
    "LEFT JOIN",
    "RIGHT JOIN",
    "INNER JOIN",
    "GROUP BY",
    "ORDER BY",
    "HAVING",
    "UNION",
    "INSERT",
    "UPDATE",
    "DELETE",
    "CREATE",
    "ALTER",
    "DROP",
    "TABLE",
    "INDEX",
    "VIEW",
    "PROCEDURE",
    "CASE",
    "WHEN",
    "THEN",
    "ELSE",
    "END",
    "AS",
    "ON",
    "AND",
    "OR",
    "NOT",
    "IN",
    "EXISTS",
    "BETWEEN",
    "LIKE",
    "IS NULL",
    "IS NOT NULL"
  ], n = e.toUpperCase();
  return t.some((l) => n.includes(l));
}
function _u(e) {
  return e ? e.replace(/\b(SELECT|FROM|WHERE|JOIN|LEFT JOIN|RIGHT JOIN|INNER JOIN|GROUP BY|ORDER BY|HAVING|UNION|CASE|WHEN|THEN|ELSE|END)\b/gi, `
$1`).replace(/(SELECT\s+)(.*?)(\s+FROM)/gis, (n, l, r, i) => {
    const o = r.split(",").map((a) => a.trim()).join(`,
  `);
    return `${l}
  ${o}
${i}`;
  }).replace(/(,\s*)([A-Za-z_][A-Za-z0-9_.]*)/g, `,
  $2`).replace(/\b(AND|OR)\b/gi, `
  $1`).replace(/\n\s*\n/g, `
`).split(`
`).map((n, l) => {
    const r = n.trim();
    if (!r)
      return "";
    let i = "";
    return r.match(/^(SELECT|FROM|WHERE|JOIN|GROUP BY|ORDER BY|HAVING|UNION|CASE|WHEN|THEN|ELSE|END)/i) ? i = "" : r.match(/^(AND|OR|,)/i) ? i = "  " : r.match(/^(LEFT JOIN|RIGHT JOIN|INNER JOIN)/i) ? i = "" : i = "  ", i + r;
  }).filter((n) => n.trim()).join(`
`) : "";
}
function yu(e, t, n) {
  let l, r, { message: i = "" } = t, { width: o = "w-full max-w-2xl" } = t;
  const a = () => navigator.clipboard.writeText(i);
  return e.$$set = (f) => {
    "message" in f && n(0, i = f.message), "width" in f && n(1, o = f.width);
  }, e.$$.update = () => {
    e.$$.dirty & /*message*/
    1 && n(2, l = bu(i)), e.$$.dirty & /*isSQL, message*/
    5 && n(3, r = l ? _u(i) : "");
  }, [i, o, l, r, a];
}
class pu extends ke {
  constructor(t) {
    super(), pe(this, t, yu, hu, be, { message: 0, width: 1 });
  }
}
function ku(e) {
  let t;
  return {
    c() {
      t = k("div"), t.innerHTML = `<div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"><div class="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
    Widget Active</div>`, h(t, "class", "mt-6 text-center");
    },
    m(n, l) {
      M(n, t, l);
    },
    p: H,
    i: H,
    o: H,
    d(n) {
      n && R(t);
    }
  };
}
class wu extends ke {
  constructor(t) {
    super(), pe(this, t, null, ku, be, {});
  }
}
function vu(e) {
  let t, n;
  return {
    c() {
      t = ue("svg"), n = ue("path"), h(n, "stroke-linecap", "round"), h(n, "stroke-linejoin", "round"), h(n, "stroke-width", "2"), h(n, "d", "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"), h(t, "class", "w-5 h-5 text-gray-700"), h(t, "fill", "none"), h(t, "stroke", "currentColor"), h(t, "viewBox", "0 0 24 24");
    },
    m(l, r) {
      M(l, t, r), y(t, n);
    },
    d(l) {
      l && R(t);
    }
  };
}
function Nu(e) {
  let t, n;
  return {
    c() {
      t = ue("svg"), n = ue("path"), h(n, "stroke-linecap", "round"), h(n, "stroke-linejoin", "round"), h(n, "stroke-width", "2"), h(n, "d", "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"), h(t, "class", "w-5 h-5 text-yellow-500"), h(t, "fill", "none"), h(t, "stroke", "currentColor"), h(t, "viewBox", "0 0 24 24");
    },
    m(l, r) {
      M(l, t, r), y(t, n);
    },
    d(l) {
      l && R(t);
    }
  };
}
function Su(e) {
  let t, n, l;
  function r(a, f) {
    return (
      /*$theme*/
      a[0] === "dark" ? Nu : vu
    );
  }
  let i = r(e), o = i(e);
  return {
    c() {
      t = k("button"), o.c(), h(t, "class", "p-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center"), h(t, "title", "Toggle theme");
    },
    m(a, f) {
      M(a, t, f), o.m(t, null), n || (l = de(
        t,
        "click",
        /*toggleTheme*/
        e[1]
      ), n = !0);
    },
    p(a, [f]) {
      i !== (i = r(a)) && (o.d(1), o = i(a), o && (o.c(), o.m(t, null)));
    },
    i: H,
    o: H,
    d(a) {
      a && R(t), o.d(), n = !1, l();
    }
  };
}
function Ru(e, t, n) {
  let l;
  E(e, Dr, (i) => n(0, l = i));
  function r() {
    console.log("Theme toggle clicked, current theme:", l), Dr.toggle();
  }
  return e.$$.update = () => {
    if (e.$$.dirty & /*$theme*/
    1 && (console.log("Theme changed to:", l), typeof window < "u")) {
      const i = document.documentElement;
      console.log("HTML classes:", i.className), console.log("Has dark class:", i.classList.contains("dark"));
    }
  }, [l, r];
}
class Mu extends ke {
  constructor(t) {
    super(), pe(this, t, Ru, Su, be, {});
  }
}
function Ki(e) {
  var m, c, d;
  let t, n, l, r, i, o, a, f, s = (
    /*result*/
    ((m = e[1]) == null ? void 0 : m.values) && Qi(e)
  ), u = (
    /*result*/
    ((c = e[1]) == null ? void 0 : c.occurrences) && Zi(e)
  ), g = (
    /*result*/
    ((d = e[1]) == null ? void 0 : d.durations) && eo(e)
  );
  return {
    c() {
      t = k("div"), n = k("div"), l = L(
        /*queryText*/
        e[0]
      ), r = C(), i = k("div"), s && s.c(), o = C(), u && u.c(), a = C(), g && g.c(), h(n, "class", "mt-3 mb-3 p-2 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono text-gray-700 dark:text-gray-300"), h(i, "class", "space-y-2 mt-2"), h(t, "class", "px-3 pb-3 border-t border-gray-200 dark:border-gray-700");
    },
    m(b, p) {
      M(b, t, p), y(t, n), y(n, l), y(t, r), y(t, i), s && s.m(i, null), y(i, o), u && u.m(i, null), y(i, a), g && g.m(i, null), f = !0;
    },
    p(b, p) {
      var w, N, z;
      (!f || p & /*queryText*/
      1) && W(
        l,
        /*queryText*/
        b[0]
      ), /*result*/
      (w = b[1]) != null && w.values ? s ? (s.p(b, p), p & /*result*/
      2 && v(s, 1)) : (s = Qi(b), s.c(), v(s, 1), s.m(i, o)) : s && (te(), S(s, 1, 1, () => {
        s = null;
      }), ne()), /*result*/
      (N = b[1]) != null && N.occurrences ? u ? (u.p(b, p), p & /*result*/
      2 && v(u, 1)) : (u = Zi(b), u.c(), v(u, 1), u.m(i, a)) : u && (te(), S(u, 1, 1, () => {
        u = null;
      }), ne()), /*result*/
      (z = b[1]) != null && z.durations ? g ? (g.p(b, p), p & /*result*/
      2 && v(g, 1)) : (g = eo(b), g.c(), v(g, 1), g.m(i, null)) : g && (te(), S(g, 1, 1, () => {
        g = null;
      }), ne());
    },
    i(b) {
      f || (v(s), v(u), v(g), f = !0);
    },
    o(b) {
      S(s), S(u), S(g), f = !1;
    },
    d(b) {
      b && R(t), s && s.d(), u && u.d(), g && g.d();
    }
  };
}
function Qi(e) {
  let t, n, l, r, i, o = Ie(
    /*result*/
    e[1].values.length ?? 0
  ) + "", a, f, s, u, g, m, c = (
    /*result*/
    e[1].values.num_unique_ids !== void 0 && Yi(e)
  ), d = (
    /*result*/
    e[1].values.missingness !== void 0 && Ji(e)
  ), b = (
    /*result*/
    e[1].values.type && Xi(e)
  );
  return {
    c() {
      t = k("div"), n = k("div"), l = k("span"), l.textContent = "Count:", r = C(), i = k("span"), a = L(o), f = L(" rows"), s = C(), c && c.c(), u = C(), d && d.c(), g = C(), b && b.c(), h(l, "class", "text-gray-600 dark:text-gray-400"), h(i, "class", "font-mono text-gray-700 dark:text-gray-300"), h(n, "class", "flex items-center justify-between text-xs"), h(t, "class", "space-y-2");
    },
    m(p, w) {
      M(p, t, w), y(t, n), y(n, l), y(n, r), y(n, i), y(i, a), y(i, f), y(t, s), c && c.m(t, null), y(t, u), d && d.m(t, null), y(t, g), b && b.m(t, null), m = !0;
    },
    p(p, w) {
      (!m || w & /*result*/
      2) && o !== (o = Ie(
        /*result*/
        p[1].values.length ?? 0
      ) + "") && W(a, o), /*result*/
      p[1].values.num_unique_ids !== void 0 ? c ? (c.p(p, w), w & /*result*/
      2 && v(c, 1)) : (c = Yi(p), c.c(), v(c, 1), c.m(t, u)) : c && (te(), S(c, 1, 1, () => {
        c = null;
      }), ne()), /*result*/
      p[1].values.missingness !== void 0 ? d ? (d.p(p, w), w & /*result*/
      2 && v(d, 1)) : (d = Ji(p), d.c(), v(d, 1), d.m(t, g)) : d && (te(), S(d, 1, 1, () => {
        d = null;
      }), ne()), /*result*/
      p[1].values.type ? b ? (b.p(p, w), w & /*result*/
      2 && v(b, 1)) : (b = Xi(p), b.c(), v(b, 1), b.m(t, null)) : b && (te(), S(b, 1, 1, () => {
        b = null;
      }), ne());
    },
    i(p) {
      m || (v(c), v(d), v(b), m = !0);
    },
    o(p) {
      S(c), S(d), S(b), m = !1;
    },
    d(p) {
      p && R(t), c && c.d(), d && d.d(), b && b.d();
    }
  };
}
function Yi(e) {
  let t, n, l, r, i = Ie(
    /*result*/
    e[1].values.num_unique_ids
  ) + "", o, a, f = Ie(
    /*idsLength*/
    e[2]
  ) + "", s, u, g, m;
  return g = new qt({
    props: {
      value: (
        /*idsLength*/
        e[2] > 0 ? (
          /*result*/
          e[1].values.num_unique_ids / /*idsLength*/
          e[2]
        ) : 0
      ),
      width: null,
      showFullBar: !0,
      $$slots: { caption: [zu] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      t = k("div"), n = k("span"), n.textContent = "Unique IDs:", l = C(), r = k("span"), o = L(i), a = L(" / "), s = L(f), u = C(), J(g.$$.fragment), h(n, "class", "text-gray-600 dark:text-gray-400"), h(r, "class", "font-mono text-gray-700 dark:text-gray-300"), h(t, "class", "flex items-center justify-between text-xs");
    },
    m(c, d) {
      M(c, t, d), y(t, n), y(t, l), y(t, r), y(r, o), y(r, a), y(r, s), M(c, u, d), K(g, c, d), m = !0;
    },
    p(c, d) {
      (!m || d & /*result*/
      2) && i !== (i = Ie(
        /*result*/
        c[1].values.num_unique_ids
      ) + "") && W(o, i), (!m || d & /*idsLength*/
      4) && f !== (f = Ie(
        /*idsLength*/
        c[2]
      ) + "") && W(s, f);
      const b = {};
      d & /*idsLength, result*/
      6 && (b.value = /*idsLength*/
      c[2] > 0 ? (
        /*result*/
        c[1].values.num_unique_ids / /*idsLength*/
        c[2]
      ) : 0), d & /*$$scope, idsLength, result*/
      70 && (b.$$scope = { dirty: d, ctx: c }), g.$set(b);
    },
    i(c) {
      m || (v(g.$$.fragment, c), m = !0);
    },
    o(c) {
      S(g.$$.fragment, c), m = !1;
    },
    d(c) {
      c && R(t), c && R(u), Q(g, c);
    }
  };
}
function zu(e) {
  let t, n, l = (
    /*idsLength*/
    (e[2] > 0 ? re(".1%")(
      /*result*/
      e[1].values.num_unique_ids / /*idsLength*/
      e[2]
    ) : "0.0%") + ""
  ), r;
  return {
    c() {
      t = k("span"), n = k("strong"), r = L(l), h(t, "slot", "caption"), h(t, "class", "text-xs");
    },
    m(i, o) {
      M(i, t, o), y(t, n), y(n, r);
    },
    p(i, o) {
      o & /*idsLength, result*/
      6 && l !== (l = /*idsLength*/
      (i[2] > 0 ? re(".1%")(
        /*result*/
        i[1].values.num_unique_ids / /*idsLength*/
        i[2]
      ) : "0.0%") + "") && W(r, l);
    },
    d(i) {
      i && R(t);
    }
  };
}
function Ji(e) {
  let t, n, l, r, i = re(".1%")(
    /*result*/
    e[1].values.missingness
  ) + "", o, a, f, s;
  return f = new qt({
    props: {
      value: (
        /*result*/
        e[1].values.missingness
      ),
      width: null,
      color: "#ef4444",
      showFullBar: !0,
      $$slots: { caption: [Eu] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      t = k("div"), n = k("span"), n.textContent = "Missing:", l = C(), r = k("span"), o = L(i), a = C(), J(f.$$.fragment), h(n, "class", "text-gray-600 dark:text-gray-400"), h(r, "class", "font-mono text-gray-700 dark:text-gray-300"), h(t, "class", "flex items-center justify-between text-xs");
    },
    m(u, g) {
      M(u, t, g), y(t, n), y(t, l), y(t, r), y(r, o), M(u, a, g), K(f, u, g), s = !0;
    },
    p(u, g) {
      (!s || g & /*result*/
      2) && i !== (i = re(".1%")(
        /*result*/
        u[1].values.missingness
      ) + "") && W(o, i);
      const m = {};
      g & /*result*/
      2 && (m.value = /*result*/
      u[1].values.missingness), g & /*$$scope, result*/
      66 && (m.$$scope = { dirty: g, ctx: u }), f.$set(m);
    },
    i(u) {
      s || (v(f.$$.fragment, u), s = !0);
    },
    o(u) {
      S(f.$$.fragment, u), s = !1;
    },
    d(u) {
      u && R(t), u && R(a), Q(f, u);
    }
  };
}
function Eu(e) {
  let t, n, l = re(".1%")(
    /*result*/
    e[1].values.missingness
  ) + "", r;
  return {
    c() {
      t = k("span"), n = k("strong"), r = L(l), h(t, "slot", "caption"), h(t, "class", "text-xs");
    },
    m(i, o) {
      M(i, t, o), y(t, n), y(n, r);
    },
    p(i, o) {
      o & /*result*/
      2 && l !== (l = re(".1%")(
        /*result*/
        i[1].values.missingness
      ) + "") && W(r, l);
    },
    d(i) {
      i && R(t);
    }
  };
}
function Xi(e) {
  let t, n, l, r;
  const i = [Au, Tu, Du], o = [];
  function a(f, s) {
    return (
      /*result*/
      f[1].values.type === "binary" ? 0 : (
        /*result*/
        f[1].values.type === "continuous" && /*result*/
        f[1].values.hist ? 1 : (
          /*result*/
          f[1].values.type === "categorical" && /*result*/
          f[1].values.counts ? 2 : -1
        )
      )
    );
  }
  return ~(n = a(e)) && (l = o[n] = i[n](e)), {
    c() {
      t = k("div"), l && l.c(), h(t, "class", "mt-2");
    },
    m(f, s) {
      M(f, t, s), ~n && o[n].m(t, null), r = !0;
    },
    p(f, s) {
      let u = n;
      n = a(f), n === u ? ~n && o[n].p(f, s) : (l && (te(), S(o[u], 1, 1, () => {
        o[u] = null;
      }), ne()), ~n ? (l = o[n], l ? l.p(f, s) : (l = o[n] = i[n](f), l.c()), v(l, 1), l.m(t, null)) : l = null);
    },
    i(f) {
      r || (v(l), r = !0);
    },
    o(f) {
      S(l), r = !1;
    },
    d(f) {
      f && R(t), ~n && o[n].d();
    }
  };
}
function Du(e) {
  let t, n;
  return t = new Do({
    props: {
      order: Object.keys(
        /*result*/
        e[1].values.counts
      ).sort(
        /*func*/
        e[5]
      ),
      counts: (
        /*result*/
        e[1].values.counts
      ),
      width: null
    }
  }), {
    c() {
      J(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*result*/
      2 && (i.order = Object.keys(
        /*result*/
        l[1].values.counts
      ).sort(
        /*func*/
        l[5]
      )), r & /*result*/
      2 && (i.counts = /*result*/
      l[1].values.counts), t.$set(i);
    },
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      S(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Q(t, l);
    }
  };
}
function Tu(e) {
  let t, n;
  return t = new Lt({
    props: {
      histValues: (
        /*result*/
        e[1].values.hist
      ),
      mean: (
        /*result*/
        e[1].values.mean ?? 0
      ),
      width: null
    }
  }), {
    c() {
      J(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*result*/
      2 && (i.histValues = /*result*/
      l[1].values.hist), r & /*result*/
      2 && (i.mean = /*result*/
      l[1].values.mean ?? 0), t.$set(i);
    },
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      S(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Q(t, l);
    }
  };
}
function Au(e) {
  let t, n;
  return t = new qt({
    props: {
      value: (
        /*result*/
        e[1].values.mean ?? 0
      ),
      width: null,
      color: "#d97706",
      showFullBar: !0,
      $$slots: { caption: [xu] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      J(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*result*/
      2 && (i.value = /*result*/
      l[1].values.mean ?? 0), r & /*$$scope, result*/
      66 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      S(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Q(t, l);
    }
  };
}
function xu(e) {
  let t, n, l = re(".1%")(
    /*result*/
    e[1].values.mean ?? 0
  ) + "", r, i;
  return {
    c() {
      t = k("span"), n = k("strong"), r = L(l), i = L(" true"), h(t, "slot", "caption"), h(t, "class", "text-xs");
    },
    m(o, a) {
      M(o, t, a), y(t, n), y(n, r), y(t, i);
    },
    p(o, a) {
      a & /*result*/
      2 && l !== (l = re(".1%")(
        /*result*/
        o[1].values.mean ?? 0
      ) + "") && W(r, l);
    },
    d(o) {
      o && R(t);
    }
  };
}
function Zi(e) {
  let t, n, l, r, i, o, a, f, s = Ie(
    /*result*/
    e[1].occurrences.length ?? 0
  ) + "", u, g, m, c, d = (
    /*result*/
    e[1].occurrences.type === "continuous" && /*result*/
    e[1].occurrences.hist && $i(e)
  );
  return {
    c() {
      t = k("div"), n = k("div"), n.textContent = "Occurrences:", l = C(), r = k("div"), i = k("div"), o = k("span"), o.textContent = "Count:", a = C(), f = k("span"), u = L(s), g = L(" rows"), m = C(), d && d.c(), h(n, "class", "text-xs text-gray-600 dark:text-gray-400 mb-2"), h(o, "class", "text-gray-600 dark:text-gray-400"), h(f, "class", "font-mono text-gray-700 dark:text-gray-300"), h(i, "class", "flex items-center justify-between text-xs"), h(r, "class", "space-y-2"), h(t, "class", "mt-3 pt-2 border-t border-gray-200 dark:border-gray-700");
    },
    m(b, p) {
      M(b, t, p), y(t, n), y(t, l), y(t, r), y(r, i), y(i, o), y(i, a), y(i, f), y(f, u), y(f, g), y(r, m), d && d.m(r, null), c = !0;
    },
    p(b, p) {
      (!c || p & /*result*/
      2) && s !== (s = Ie(
        /*result*/
        b[1].occurrences.length ?? 0
      ) + "") && W(u, s), /*result*/
      b[1].occurrences.type === "continuous" && /*result*/
      b[1].occurrences.hist ? d ? (d.p(b, p), p & /*result*/
      2 && v(d, 1)) : (d = $i(b), d.c(), v(d, 1), d.m(r, null)) : d && (te(), S(d, 1, 1, () => {
        d = null;
      }), ne());
    },
    i(b) {
      c || (v(d), c = !0);
    },
    o(b) {
      S(d), c = !1;
    },
    d(b) {
      b && R(t), d && d.d();
    }
  };
}
function $i(e) {
  let t, n;
  return t = new Lt({
    props: {
      histValues: (
        /*result*/
        e[1].occurrences.hist
      ),
      mean: (
        /*result*/
        e[1].occurrences.mean ?? 0
      ),
      width: null
    }
  }), {
    c() {
      J(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*result*/
      2 && (i.histValues = /*result*/
      l[1].occurrences.hist), r & /*result*/
      2 && (i.mean = /*result*/
      l[1].occurrences.mean ?? 0), t.$set(i);
    },
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      S(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Q(t, l);
    }
  };
}
function eo(e) {
  let t, n, l, r, i, o, a, f, s = Ie(
    /*result*/
    e[1].durations.length ?? 0
  ) + "", u, g, m, c, d = (
    /*result*/
    e[1].durations.type === "continuous" && /*result*/
    e[1].durations.hist && to(e)
  );
  return {
    c() {
      t = k("div"), n = k("div"), n.textContent = "Durations:", l = C(), r = k("div"), i = k("div"), o = k("span"), o.textContent = "Count:", a = C(), f = k("span"), u = L(s), g = L(" rows"), m = C(), d && d.c(), h(n, "class", "text-xs text-gray-600 dark:text-gray-400 mb-2"), h(o, "class", "text-gray-600 dark:text-gray-400"), h(f, "class", "font-mono text-gray-700 dark:text-gray-300"), h(i, "class", "flex items-center justify-between text-xs"), h(r, "class", "space-y-2"), h(t, "class", "mt-3 pt-2 border-t border-gray-200 dark:border-gray-700");
    },
    m(b, p) {
      M(b, t, p), y(t, n), y(t, l), y(t, r), y(r, i), y(i, o), y(i, a), y(i, f), y(f, u), y(f, g), y(r, m), d && d.m(r, null), c = !0;
    },
    p(b, p) {
      (!c || p & /*result*/
      2) && s !== (s = Ie(
        /*result*/
        b[1].durations.length ?? 0
      ) + "") && W(u, s), /*result*/
      b[1].durations.type === "continuous" && /*result*/
      b[1].durations.hist ? d ? (d.p(b, p), p & /*result*/
      2 && v(d, 1)) : (d = to(b), d.c(), v(d, 1), d.m(r, null)) : d && (te(), S(d, 1, 1, () => {
        d = null;
      }), ne());
    },
    i(b) {
      c || (v(d), c = !0);
    },
    o(b) {
      S(d), c = !1;
    },
    d(b) {
      b && R(t), d && d.d();
    }
  };
}
function to(e) {
  let t, n;
  return t = new Lt({
    props: {
      histValues: (
        /*result*/
        e[1].durations.hist
      ),
      mean: (
        /*result*/
        e[1].durations.mean ?? 0
      ),
      width: null
    }
  }), {
    c() {
      J(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*result*/
      2 && (i.histValues = /*result*/
      l[1].durations.hist), r & /*result*/
      2 && (i.mean = /*result*/
      l[1].durations.mean ?? 0), t.$set(i);
    },
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      S(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Q(t, l);
    }
  };
}
function Cu(e) {
  let t, n, l, r, i, o, a, f, s, u, g, m, c = (
    /*isExpanded*/
    e[3] && Ki(e)
  );
  return {
    c() {
      t = k("div"), n = k("button"), l = k("span"), r = L(
        /*queryText*/
        e[0]
      ), i = C(), o = ue("svg"), a = ue("path"), s = C(), c && c.c(), h(l, "class", "text-sm font-mono text-gray-700 dark:text-gray-300 truncate flex-1"), h(a, "stroke-linecap", "round"), h(a, "stroke-linejoin", "round"), h(a, "stroke-width", "2"), h(a, "d", "M19 9l-7 7-7-7"), h(o, "class", f = "w-4 h-4 text-gray-500 dark:text-gray-400 transform transition-transform duration-200 " + /*isExpanded*/
      (e[3] ? "rotate-180" : "")), h(o, "fill", "none"), h(o, "stroke", "currentColor"), h(o, "viewBox", "0 0 24 24"), h(n, "class", "w-full px-3 py-2 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none"), h(t, "class", "bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md mb-2 overflow-hidden");
    },
    m(d, b) {
      M(d, t, b), y(t, n), y(n, l), y(l, r), y(n, i), y(n, o), y(o, a), y(t, s), c && c.m(t, null), u = !0, g || (m = de(
        n,
        "click",
        /*toggleExpanded*/
        e[4]
      ), g = !0);
    },
    p(d, [b]) {
      (!u || b & /*queryText*/
      1) && W(
        r,
        /*queryText*/
        d[0]
      ), (!u || b & /*isExpanded*/
      8 && f !== (f = "w-4 h-4 text-gray-500 dark:text-gray-400 transform transition-transform duration-200 " + /*isExpanded*/
      (d[3] ? "rotate-180" : ""))) && h(o, "class", f), /*isExpanded*/
      d[3] ? c ? (c.p(d, b), b & /*isExpanded*/
      8 && v(c, 1)) : (c = Ki(d), c.c(), v(c, 1), c.m(t, null)) : c && (te(), S(c, 1, 1, () => {
        c = null;
      }), ne());
    },
    i(d) {
      u || (v(c), u = !0);
    },
    o(d) {
      S(c), u = !1;
    },
    d(d) {
      d && R(t), c && c.d(), g = !1, m();
    }
  };
}
function Ie(e) {
  var t;
  return ((t = e == null ? void 0 : e.toLocaleString) == null ? void 0 : t.call(e)) ?? e;
}
function Lu(e, t, n) {
  let { queryText: l } = t, { result: r } = t, { idsLength: i = 0 } = t, o = !1;
  function a() {
    n(3, o = !o);
  }
  const f = (s, u) => (r.values.counts[u] ?? 0) - (r.values.counts[s] ?? 0);
  return e.$$set = (s) => {
    "queryText" in s && n(0, l = s.queryText), "result" in s && n(1, r = s.result), "idsLength" in s && n(2, i = s.idsLength);
  }, [l, r, i, o, a, f];
}
class Ou extends ke {
  constructor(t) {
    super(), pe(this, t, Lu, Cu, be, { queryText: 0, result: 1, idsLength: 2 });
  }
}
function no(e, t, n) {
  const l = e.slice();
  return l[6] = t[n][0], l[7] = t[n][1], l;
}
function lo(e) {
  let t, n, l, r, i;
  const o = [Iu, qu], a = [];
  function f(s, u) {
    return u & /*subqueries*/
    4 && (n = null), n == null && (n = Object.keys(
      /*subqueries*/
      s[2]
    ).length > 0), n ? 0 : 1;
  }
  return l = f(e, -1), r = a[l] = o[l](e), {
    c() {
      t = k("div"), r.c(), h(t, "class", "space-y-2 mt-3");
    },
    m(s, u) {
      M(s, t, u), a[l].m(t, null), i = !0;
    },
    p(s, u) {
      let g = l;
      l = f(s, u), l === g ? a[l].p(s, u) : (te(), S(a[g], 1, 1, () => {
        a[g] = null;
      }), ne(), r = a[l], r ? r.p(s, u) : (r = a[l] = o[l](s), r.c()), v(r, 1), r.m(t, null));
    },
    i(s) {
      i || (v(r), i = !0);
    },
    o(s) {
      S(r), i = !1;
    },
    d(s) {
      s && R(t), a[l].d();
    }
  };
}
function qu(e) {
  let t;
  return {
    c() {
      t = k("div"), t.innerHTML = `<div class="text-2xl mb-1">🔍</div> 
          <div class="text-xs font-mono">No subqueries found</div> 
          <div class="text-xs mt-1">Run a query to see subquery results</div>`, h(t, "class", "text-center py-4 text-gray-500 dark:text-gray-400");
    },
    m(n, l) {
      M(n, t, l);
    },
    p: H,
    i: H,
    o: H,
    d(n) {
      n && R(t);
    }
  };
}
function Iu(e) {
  let t, n, l = Object.keys(
    /*subqueries*/
    e[2]
  ).length + "", r, i, o, a, f, s = Object.entries(
    /*subqueries*/
    e[2]
  ), u = [];
  for (let m = 0; m < s.length; m += 1)
    u[m] = ro(no(e, s, m));
  const g = (m) => S(u[m], 1, 1, () => {
    u[m] = null;
  });
  return {
    c() {
      t = k("div"), n = L("Found "), r = L(l), i = L(" subqueries"), o = C();
      for (let m = 0; m < u.length; m += 1)
        u[m].c();
      a = we(), h(t, "class", "text-xs text-gray-500 dark:text-gray-400 mb-2");
    },
    m(m, c) {
      M(m, t, c), y(t, n), y(t, r), y(t, i), M(m, o, c);
      for (let d = 0; d < u.length; d += 1)
        u[d] && u[d].m(m, c);
      M(m, a, c), f = !0;
    },
    p(m, c) {
      if ((!f || c & /*subqueries*/
      4) && l !== (l = Object.keys(
        /*subqueries*/
        m[2]
      ).length + "") && W(r, l), c & /*Object, subqueries, idsLength*/
      12) {
        s = Object.entries(
          /*subqueries*/
          m[2]
        );
        let d;
        for (d = 0; d < s.length; d += 1) {
          const b = no(m, s, d);
          u[d] ? (u[d].p(b, c), v(u[d], 1)) : (u[d] = ro(b), u[d].c(), v(u[d], 1), u[d].m(a.parentNode, a));
        }
        for (te(), d = s.length; d < u.length; d += 1)
          g(d);
        ne();
      }
    },
    i(m) {
      if (!f) {
        for (let c = 0; c < s.length; c += 1)
          v(u[c]);
        f = !0;
      }
    },
    o(m) {
      u = u.filter(Boolean);
      for (let c = 0; c < u.length; c += 1)
        S(u[c]);
      f = !1;
    },
    d(m) {
      m && R(t), m && R(o), lt(u, m), m && R(a);
    }
  };
}
function ro(e) {
  let t, n;
  return t = new Ou({
    props: {
      queryText: (
        /*queryText*/
        e[6]
      ),
      result: (
        /*subqueryData*/
        e[7].result
      ),
      idsLength: (
        /*idsLength*/
        e[3]
      )
    }
  }), {
    c() {
      J(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*subqueries*/
      4 && (i.queryText = /*queryText*/
      l[6]), r & /*subqueries*/
      4 && (i.result = /*subqueryData*/
      l[7].result), r & /*idsLength*/
      8 && (i.idsLength = /*idsLength*/
      l[3]), t.$set(i);
    },
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      S(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Q(t, l);
    }
  };
}
function Pu(e) {
  let t, n, l, r, i, o, a, f, s, u, g, m, c, d = (
    /*enabled*/
    e[1] && lo(e)
  );
  return {
    c() {
      t = k("div"), n = k("div"), l = k("h3"), l.textContent = "Subquery", r = C(), i = k("button"), o = k("span"), s = C(), d && d.c(), h(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100"), h(o, "class", a = "inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-200 " + /*enabled*/
      (e[1] ? "translate-x-6" : "translate-x-1")), h(i, "class", f = "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 " + /*enabled*/
      (e[1] ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700")), h(i, "role", "switch"), h(
        i,
        "aria-checked",
        /*enabled*/
        e[1]
      ), h(n, "class", "flex items-center justify-between mb-2"), h(t, "class", u = "bg-white dark:bg-gray-900 p-4 mb-0 border-0 rounded-none " + /*width*/
      e[0] + " transition-colors duration-200");
    },
    m(b, p) {
      M(b, t, p), y(t, n), y(n, l), y(n, r), y(n, i), y(i, o), y(t, s), d && d.m(t, null), g = !0, m || (c = de(
        i,
        "click",
        /*toggleSection*/
        e[4]
      ), m = !0);
    },
    p(b, [p]) {
      (!g || p & /*enabled*/
      2 && a !== (a = "inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-200 " + /*enabled*/
      (b[1] ? "translate-x-6" : "translate-x-1"))) && h(o, "class", a), (!g || p & /*enabled*/
      2 && f !== (f = "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 " + /*enabled*/
      (b[1] ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700"))) && h(i, "class", f), (!g || p & /*enabled*/
      2) && h(
        i,
        "aria-checked",
        /*enabled*/
        b[1]
      ), /*enabled*/
      b[1] ? d ? (d.p(b, p), p & /*enabled*/
      2 && v(d, 1)) : (d = lo(b), d.c(), v(d, 1), d.m(t, null)) : d && (te(), S(d, 1, 1, () => {
        d = null;
      }), ne()), (!g || p & /*width*/
      1 && u !== (u = "bg-white dark:bg-gray-900 p-4 mb-0 border-0 rounded-none " + /*width*/
      b[0] + " transition-colors duration-200")) && h(t, "class", u);
    },
    i(b) {
      g || (v(d), g = !0);
    },
    o(b) {
      S(d), g = !1;
    },
    d(b) {
      b && R(t), d && d.d(), m = !1, c();
    }
  };
}
function Fu(e, t, n) {
  let { width: l = "w-full max-w-2xl" } = t, { enabled: r = !1 } = t, { onToggle: i = () => {
  } } = t, { subqueries: o = {} } = t, { idsLength: a = 0 } = t;
  function f() {
    i(!r);
  }
  return e.$$set = (s) => {
    "width" in s && n(0, l = s.width), "enabled" in s && n(1, r = s.enabled), "onToggle" in s && n(5, i = s.onToggle), "subqueries" in s && n(2, o = s.subqueries), "idsLength" in s && n(3, a = s.idsLength);
  }, e.$$.update = () => {
    e.$$.dirty & /*subqueries, enabled*/
    6 && (console.log("🔍 SubquerySection - subqueries changed:", o), console.log("🔍 SubquerySection - enabled:", r), console.log("🔍 SubquerySection - subqueries keys:", Object.keys(o)));
  }, [l, r, o, a, f, i];
}
class ju extends ke {
  constructor(t) {
    super(), pe(this, t, Fu, Pu, be, {
      width: 0,
      enabled: 1,
      onToggle: 5,
      subqueries: 2,
      idsLength: 3
    });
  }
}
function Bu(e) {
  let t, n, l, r, i, o, a, f, s, u, g, m, c, d, b, p, w;
  return l = new Mu({}), a = new sa({
    props: {
      value: (
        /*textInput*/
        e[1]
      ),
      onInput: (
        /*func*/
        e[17]
      ),
      actionButtons: (
        /*actionButtons*/
        e[12]
      ),
      dataFields: (
        /*dataFields*/
        e[2]
      ),
      width: "w-full"
    }
  }), s = new pu({
    props: {
      message: (
        /*$message*/
        e[3]
      ),
      width: "w-full"
    }
  }), m = new du({
    props: {
      values: (
        /*$values*/
        e[4]
      ),
      idsLength: (
        /*$idsLength*/
        e[5]
      ),
      width: "w-full"
    }
  }), d = new ju({
    props: {
      width: "w-full",
      enabled: (
        /*$subqueryEnabled*/
        e[6]
      ),
      subqueries: (
        /*$subqueries*/
        e[7]
      ),
      idsLength: (
        /*$idsLength*/
        e[5]
      ),
      onToggle: (
        /*func_1*/
        e[18]
      )
    }
  }), p = new wu({}), {
    c() {
      t = k("main"), n = k("div"), J(l.$$.fragment), r = C(), i = k("div"), o = k("div"), J(a.$$.fragment), f = C(), J(s.$$.fragment), u = C(), g = k("div"), J(m.$$.fragment), c = C(), J(d.$$.fragment), b = C(), J(p.$$.fragment), h(n, "class", "absolute top-4 right-4 z-10 svelte-c0zlh6"), h(o, "class", "flex-1 flex flex-col gap-0 svelte-c0zlh6"), h(g, "class", "lg:w-80 flex flex-col gap-2 svelte-c0zlh6"), h(i, "class", "flex flex-col lg:flex-row gap-2 mb-2 svelte-c0zlh6"), h(t, "class", "w-full max-w-full mx-auto p-4 bg-white dark:bg-gray-950 min-h-screen transition-colors duration-200 relative svelte-c0zlh6");
    },
    m(N, z) {
      M(N, t, z), y(t, n), K(l, n, null), y(t, r), y(t, i), y(i, o), K(a, o, null), y(o, f), K(s, o, null), y(i, u), y(i, g), K(m, g, null), y(g, c), K(d, g, null), y(t, b), K(p, t, null), w = !0;
    },
    p(N, [z]) {
      const T = {};
      z & /*textInput*/
      2 && (T.value = /*textInput*/
      N[1]), z & /*textInput*/
      2 && (T.onInput = /*func*/
      N[17]), z & /*dataFields*/
      4 && (T.dataFields = /*dataFields*/
      N[2]), a.$set(T);
      const F = {};
      z & /*$message*/
      8 && (F.message = /*$message*/
      N[3]), s.$set(F);
      const O = {};
      z & /*$values*/
      16 && (O.values = /*$values*/
      N[4]), z & /*$idsLength*/
      32 && (O.idsLength = /*$idsLength*/
      N[5]), m.$set(O);
      const I = {};
      z & /*$subqueryEnabled*/
      64 && (I.enabled = /*$subqueryEnabled*/
      N[6]), z & /*$subqueries*/
      128 && (I.subqueries = /*$subqueries*/
      N[7]), z & /*$idsLength*/
      32 && (I.idsLength = /*$idsLength*/
      N[5]), z & /*model*/
      1 && (I.onToggle = /*func_1*/
      N[18]), d.$set(I);
    },
    i(N) {
      w || (v(l.$$.fragment, N), v(a.$$.fragment, N), v(s.$$.fragment, N), v(m.$$.fragment, N), v(d.$$.fragment, N), v(p.$$.fragment, N), w = !0);
    },
    o(N) {
      S(l.$$.fragment, N), S(a.$$.fragment, N), S(s.$$.fragment, N), S(m.$$.fragment, N), S(d.$$.fragment, N), S(p.$$.fragment, N), w = !1;
    },
    d(N) {
      N && R(t), Q(l), Q(a), Q(s), Q(m), Q(d), Q(p);
    }
  };
}
function Hu(e, t, n) {
  let l, r, i, o, a, f, s, { model: u } = t;
  const g = Zo(u), { message: m, values: c, idsLength: d, listNames: b, actionButtons: p, handleTextInput: w, subqueryEnabled: N, subqueries: z } = g;
  E(e, m, (I) => n(3, i = I)), E(e, c, (I) => n(4, o = I)), E(e, d, (I) => n(5, a = I)), E(e, b, (I) => n(16, r = I)), E(e, N, (I) => n(6, f = I)), E(e, z, (I) => n(7, s = I));
  let T = "";
  const F = (I) => {
    n(1, T = I), w(I);
  }, O = (I) => {
    u.set("subquery_enabled", I), u.save_changes();
  };
  return e.$$set = (I) => {
    "model" in I && n(0, u = I.model);
  }, e.$$.update = () => {
    e.$$.dirty & /*$listNames*/
    65536 && n(2, l = r || []);
  }, [
    u,
    T,
    l,
    i,
    o,
    a,
    f,
    s,
    m,
    c,
    d,
    b,
    p,
    w,
    N,
    z,
    r,
    F,
    O
  ];
}
class Gu extends ke {
  constructor(t) {
    super(), pe(this, t, Hu, Bu, be, { model: 0 });
  }
}
function Wu(e) {
  new Gu({
    target: e.el,
    props: {
      model: e.model
    }
  });
}
export {
  Wu as render
};
