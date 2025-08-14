function G() {
}
function oa(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function Eo(e) {
  return e();
}
function Ar() {
  return /* @__PURE__ */ Object.create(null);
}
function He(e) {
  e.forEach(Eo);
}
function $e(e) {
  return typeof e == "function";
}
function he(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function aa(e) {
  return Object.keys(e).length === 0;
}
function zo(e, ...t) {
  if (e == null)
    return G;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function H(e, t, n) {
  e.$$.on_destroy.push(zo(t, n));
}
function et(e, t, n, l) {
  if (e) {
    const r = Ao(e, t, n, l);
    return e[0](r);
  }
}
function Ao(e, t, n, l) {
  return e[1] && l ? oa(n.ctx.slice(), e[1](l(t))) : n.ctx;
}
function tt(e, t, n, l) {
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
function nt(e, t, n, l, r, i) {
  if (r) {
    const o = Ao(t, n, l, i);
    e.p(o, r);
  }
}
function lt(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let l = 0; l < n; l++)
      t[l] = -1;
    return t;
  }
  return -1;
}
function Cr(e) {
  const t = {};
  for (const n in e)
    t[n] = !0;
  return t;
}
function ie(e, t, n) {
  return e.set(n), t;
}
function b(e, t) {
  e.appendChild(t);
}
function L(e, t, n) {
  e.insertBefore(t, n || null);
}
function M(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function We(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function p(e) {
  return document.createElement(e);
}
function we(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function F(e) {
  return document.createTextNode(e);
}
function q() {
  return F(" ");
}
function ve() {
  return F("");
}
function le(e, t, n, l) {
  return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
}
function h(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function sa(e) {
  return Array.from(e.childNodes);
}
function V(e, t) {
  t = "" + t, e.data !== t && (e.data = t);
}
function Fl(e, t) {
  e.value = t ?? "";
}
function Q(e, t, n, l) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, l ? "important" : "");
}
let Cl;
function fa() {
  if (Cl === void 0) {
    Cl = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      Cl = !0;
    }
  }
  return Cl;
}
function ua(e, t) {
  getComputedStyle(e).position === "static" && (e.style.position = "relative");
  const l = p("iframe");
  l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), l.setAttribute("aria-hidden", "true"), l.tabIndex = -1;
  const r = fa();
  let i;
  return r ? (l.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", i = le(window, "message", (o) => {
    o.source === l.contentWindow && t();
  })) : (l.src = "about:blank", l.onload = () => {
    i = le(l.contentWindow, "resize", t), t();
  }), b(e, l), () => {
    (r || i && l.contentWindow) && i(), M(l);
  };
}
function Z(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
function ca(e, t, { bubbles: n = !1, cancelable: l = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(e, n, l, t), r;
}
class Yl {
  constructor(t = !1) {
    this.is_svg = !1, this.is_svg = t, this.e = this.n = null;
  }
  c(t) {
    this.h(t);
  }
  m(t, n, l = null) {
    this.e || (this.is_svg ? this.e = we(n.nodeName) : this.e = p(n.nodeType === 11 ? "TEMPLATE" : n.nodeName), this.t = n.tagName !== "TEMPLATE" ? n : n.content, this.c(t)), this.i(l);
  }
  h(t) {
    this.e.innerHTML = t, this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes);
  }
  i(t) {
    for (let n = 0; n < this.n.length; n += 1)
      L(this.t, this.n[n], t);
  }
  p(t) {
    this.d(), this.h(t), this.i(this.a);
  }
  d() {
    this.n.forEach(M);
  }
}
let Ln;
function Mn(e) {
  Ln = e;
}
function zn() {
  if (!Ln)
    throw new Error("Function called outside component initialization");
  return Ln;
}
function Ut(e) {
  zn().$$.on_mount.push(e);
}
function da(e) {
  zn().$$.on_destroy.push(e);
}
function Do() {
  const e = zn();
  return (t, n, { cancelable: l = !1 } = {}) => {
    const r = e.$$.callbacks[t];
    if (r) {
      const i = ca(t, n, { cancelable: l });
      return r.slice().forEach((o) => {
        o.call(e, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function ga(e, t) {
  return zn().$$.context.set(e, t), t;
}
function An(e) {
  return zn().$$.context.get(e);
}
function Dr(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((l) => l.call(this, t));
}
const Vt = [], Ge = [];
let Gt = [];
const qr = [], ma = /* @__PURE__ */ Promise.resolve();
let pr = !1;
function ha() {
  pr || (pr = !0, ma.then(ot));
}
function Hl(e) {
  Gt.push(e);
}
const mr = /* @__PURE__ */ new Set();
let Bt = 0;
function ot() {
  if (Bt !== 0)
    return;
  const e = Ln;
  do {
    try {
      for (; Bt < Vt.length; ) {
        const t = Vt[Bt];
        Bt++, Mn(t), ba(t.$$);
      }
    } catch (t) {
      throw Vt.length = 0, Bt = 0, t;
    }
    for (Mn(null), Vt.length = 0, Bt = 0; Ge.length; )
      Ge.pop()();
    for (let t = 0; t < Gt.length; t += 1) {
      const n = Gt[t];
      mr.has(n) || (mr.add(n), n());
    }
    Gt.length = 0;
  } while (Vt.length);
  for (; qr.length; )
    qr.pop()();
  pr = !1, mr.clear(), Mn(e);
}
function ba(e) {
  if (e.fragment !== null) {
    e.update(), He(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Hl);
  }
}
function _a(e) {
  const t = [], n = [];
  Gt.forEach((l) => e.indexOf(l) === -1 ? t.push(l) : n.push(l)), n.forEach((l) => l()), Gt = t;
}
const Nl = /* @__PURE__ */ new Set();
let Ct;
function $() {
  Ct = {
    r: 0,
    c: [],
    p: Ct
    // parent group
  };
}
function ee() {
  Ct.r || He(Ct.c), Ct = Ct.p;
}
function C(e, t) {
  e && e.i && (Nl.delete(e), e.i(t));
}
function z(e, t, n, l) {
  if (e && e.o) {
    if (Nl.has(e))
      return;
    Nl.add(e), Ct.c.push(() => {
      Nl.delete(e), l && (n && e.d(1), l());
    }), e.o(t);
  } else
    l && l();
}
function X(e) {
  e && e.c();
}
function K(e, t, n, l) {
  const { fragment: r, after_update: i } = e.$$;
  r && r.m(t, n), l || Hl(() => {
    const o = e.$$.on_mount.map(Eo).filter($e);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : He(o), e.$$.on_mount = [];
  }), i.forEach(Hl);
}
function Y(e, t) {
  const n = e.$$;
  n.fragment !== null && (_a(n.after_update), He(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ya(e, t) {
  e.$$.dirty[0] === -1 && (Vt.push(e), ha(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function _e(e, t, n, l, r, i, o, a = [-1]) {
  const s = Ln;
  Mn(e);
  const f = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: G,
    not_equal: r,
    bound: Ar(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: Ar(),
    dirty: a,
    skip_bound: !1,
    root: t.target || s.$$.root
  };
  o && o(f.root);
  let u = !1;
  if (f.ctx = n ? n(e, t.props || {}, (d, m, ...c) => {
    const g = c.length ? c[0] : m;
    return f.ctx && r(f.ctx[d], f.ctx[d] = g) && (!f.skip_bound && f.bound[d] && f.bound[d](g), u && ya(e, d)), m;
  }) : [], f.update(), u = !0, He(f.before_update), f.fragment = l ? l(f.ctx) : !1, t.target) {
    if (t.hydrate) {
      const d = sa(t.target);
      f.fragment && f.fragment.l(d), d.forEach(M);
    } else
      f.fragment && f.fragment.c();
    t.intro && C(e.$$.fragment), K(e, t.target, t.anchor, t.customElement), ot();
  }
  Mn(s);
}
class ye {
  $destroy() {
    Y(this, 1), this.$destroy = G;
  }
  $on(t, n) {
    if (!$e(n))
      return G;
    const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return l.push(n), () => {
      const r = l.indexOf(n);
      r !== -1 && l.splice(r, 1);
    };
  }
  $set(t) {
    this.$$set && !aa(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Qt = [];
function pa(e, t) {
  return {
    subscribe: ne(e, t).subscribe
  };
}
function ne(e, t = G) {
  let n;
  const l = /* @__PURE__ */ new Set();
  function r(a) {
    if (he(e, a) && (e = a, n)) {
      const s = !Qt.length;
      for (const f of l)
        f[1](), Qt.push(f, e);
      if (s) {
        for (let f = 0; f < Qt.length; f += 2)
          Qt[f][0](Qt[f + 1]);
        Qt.length = 0;
      }
    }
  }
  function i(a) {
    r(a(e));
  }
  function o(a, s = G) {
    const f = [a, s];
    return l.add(f), l.size === 1 && (n = t(r) || G), a(e), () => {
      l.delete(f), l.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: i, subscribe: o };
}
function xe(e, t, n) {
  const l = !Array.isArray(e), r = l ? [e] : e, i = t.length < 2;
  return pa(n, (o) => {
    let a = !1;
    const s = [];
    let f = 0, u = G;
    const d = () => {
      if (f)
        return;
      u();
      const c = t(l ? s[0] : s, o);
      i ? o(c) : u = $e(c) ? c : G;
    }, m = r.map((c, g) => zo(c, (_) => {
      s[g] = _, f &= ~(1 << g), a && d();
    }, () => {
      f |= 1 << g;
    }));
    return a = !0, d(), function() {
      He(m), u(), a = !1;
    };
  });
}
function ke(e, t, n) {
  const l = t, r = ne(e.get(l) || n);
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
function ka(e) {
  const t = ke(e, "message", ""), n = ke(e, "word", "Hello from Python!"), l = ke(e, "type", "meds"), r = ke(e, "values", {}), i = ke(e, "ids_length", 0), o = ke(e, "list_names", {
    attributes: [],
    events: [],
    intervals: []
  }), a = ke(e, "subquery_enabled", !1), s = ke(e, "subqueries", {}), f = ke(e, "text_input", ""), u = ke(e, "scopes", []), d = ke(e, "selected_scope", ""), m = ke(e, "scope_concepts", {}), c = ke(e, "isLoading", !1), g = ke(e, "loadingMessage", ""), _ = ke(e, "llm_enabled", !1), y = ke(e, "llm_message", ""), w = ke(e, "llm_loading", !1), x = ke(e, "llm_error", ""), S = ke(e, "api_status", "Checking API connection...");
  ke(e, "llm_question", ""), ke(e, "llm_mode", "generate");
  const O = ke(e, "extracted_query", ""), A = ke(e, "ai_explanation", ""), R = ke(e, "has_extracted_query", !1);
  let D = "";
  return {
    // Reactive stores
    message: t,
    word: n,
    type: l,
    values: r,
    idsLength: i,
    listNames: o,
    subqueryEnabled: a,
    subqueries: s,
    scopes: u,
    selectedScope: d,
    scopeConcepts: m,
    isLoading: c,
    loadingMessage: g,
    llmMessage: y,
    llmLoading: w,
    llmError: x,
    llmEnabled: _,
    apiStatus: S,
    extractedQuery: O,
    aiExplanation: A,
    hasExtractedQuery: R,
    textInputStore: f,
    // Action buttons
    actionButtons: [
      {
        label: "Template",
        icon: "📝",
        colorClass: "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white",
        onClick: () => {
          console.log("Template action clicked"), t.set("Template action executed");
        }
      },
      {
        label: "Write",
        icon: "✍️",
        colorClass: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white",
        onClick: () => {
          console.log("Write action clicked"), t.set("Write action executed");
        }
      },
      {
        label: "Refine",
        icon: "✨",
        colorClass: "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white",
        onClick: () => {
          console.log("Refine action clicked"), t.set("Refine action executed");
        }
      },
      {
        label: "Explain",
        icon: "💡",
        colorClass: "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white",
        onClick: () => {
          console.log("Explain action clicked"), t.set("Explain action executed");
        }
      },
      {
        label: "Run",
        icon: "▶️",
        colorClass: "bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white",
        onClick: () => {
          console.log("Run button clicked - processing current text input"), D.trim() ? (console.log(`Processing text: "${D}"`), e.set("process_trigger", "run"), e.save_changes()) : t.set("Please enter some text first");
        }
      }
    ],
    // Text input handler - only stores the value, doesn't trigger processing
    handleTextInput: (E) => {
      console.log("Text input changed:", E), D = E, e.set("text_input", E), E.trim() || (console.log("🧹 Clearing data due to empty input"), t.set(""), r.set({}), y.set(""), x.set("")), e.save_changes();
    },
    // LLM question handler
    handleLLMQuestion: (E, v = "generate") => {
      console.log("🤖 LLM Question submitted:", E, "Mode:", v), e.set("llm_question", E), e.set("llm_mode", v), e.set("llm_trigger", "ask"), e.save_changes();
    },
    // Query extraction handler - triggered when AI extracts a query
    handleQueryExtraction: () => {
      let E = "";
      O.subscribe((v) => E = v)(), E && E !== D ? (console.log(
        "🔄 Query extracted from AI response:",
        E
      ), console.log("🔄 Current text input:", D), console.log("🔄 Updating text input with extracted query"), D = E, e.set("text_input", E), e.save_changes()) : E === D && console.log(
        "🔄 Extracted query is same as current input, no update needed"
      );
    },
    // Scope analysis handler
    handleScopeAnalysis: (E, v = !1) => {
      console.log(
        "🔍 Scope Analysis requested for:",
        E,
        v ? "(force refresh)" : ""
      );
      const I = v ? `${E}:force` : E;
      e.set("scope_analysis_trigger", I), e.save_changes();
    },
    // Get current backend info
    getBackendInfo: () => {
      let E = "", v = "";
      return l.subscribe((I) => E = I)(), t.subscribe((I) => v = I)(), {
        type: E,
        message: v
      };
    }
  };
}
function wa() {
  const t = (typeof window < "u" ? localStorage.getItem("theme") : "dark") || "dark", { subscribe: n, set: l, update: r } = ne(t);
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
const Nr = wa();
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const va = {
  prefix: "fas",
  iconName: "code",
  icon: [640, 512, [], "f121", "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]
}, xa = {
  prefix: "fas",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
}, Sa = {
  prefix: "fas",
  iconName: "sun",
  icon: [512, 512, [9728], "f185", "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]
}, Ca = {
  prefix: "fas",
  iconName: "play",
  icon: [384, 512, [9654], "f04b", "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]
}, Ma = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, La = Ma, Ra = {
  prefix: "fas",
  iconName: "moon",
  icon: [384, 512, [127769, 9214], "f186", "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]
}, Ta = {
  prefix: "fas",
  iconName: "database",
  icon: [448, 512, [], "f1c0", "M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z"]
}, Ml = parseFloat;
function kr(e, t = ";") {
  let n;
  if (Array.isArray(e))
    n = e.filter((l) => l);
  else {
    n = [];
    for (const l in e)
      e[l] && n.push(`${l}:${e[l]}`);
  }
  return n.join(t);
}
function Ea(e, t, n, l) {
  let r, i;
  const o = "1em";
  let a, s, f, u = "-.125em";
  const d = "visible";
  return l && (f = "center", i = "1.25em"), n && (r = n), t && (t == "lg" ? (s = "1.33333em", a = ".75em", u = "-.225em") : t == "xs" ? s = ".75em" : t == "sm" ? s = ".875em" : s = t.replace("x", "em")), kr([
    kr({
      float: r,
      width: i,
      height: o,
      "line-height": a,
      "font-size": s,
      "text-align": f,
      "vertical-align": u,
      "transform-origin": "center",
      overflow: d
    }),
    e
  ]);
}
function za(e, t, n, l, r, i = 1, o = "", a = "") {
  let s = 1, f = 1;
  return r && (r == "horizontal" ? s = -1 : r == "vertical" ? f = -1 : s = f = -1), kr(
    [
      `translate(${Ml(t) * i}${o},${Ml(n) * i}${o})`,
      `scale(${s * Ml(e)},${f * Ml(e)})`,
      l && `rotate(${l}${a})`
    ],
    " "
  );
}
function Or(e) {
  let t, n, l, r, i, o, a, s;
  function f(m, c) {
    return typeof /*i*/
    m[10][4] == "string" ? Da : Aa;
  }
  let u = f(e), d = u(e);
  return {
    c() {
      t = we("svg"), n = we("g"), l = we("g"), d.c(), h(
        l,
        "transform",
        /*transform*/
        e[12]
      ), h(n, "transform", r = "translate(" + /*i*/
      e[10][0] / 2 + " " + /*i*/
      e[10][1] / 2 + ")"), h(n, "transform-origin", i = /*i*/
      e[10][0] / 4 + " 0"), h(t, "id", o = /*id*/
      e[1] || void 0), h(t, "class", a = "svelte-fa " + /*clazz*/
      e[0] + " svelte-1cj2gr0"), h(
        t,
        "style",
        /*s*/
        e[11]
      ), h(t, "viewBox", s = "0 0 " + /*i*/
      e[10][0] + " " + /*i*/
      e[10][1]), h(t, "aria-hidden", "true"), h(t, "role", "img"), h(t, "xmlns", "http://www.w3.org/2000/svg"), Z(
        t,
        "pulse",
        /*pulse*/
        e[4]
      ), Z(
        t,
        "spin",
        /*spin*/
        e[3]
      );
    },
    m(m, c) {
      L(m, t, c), b(t, n), b(n, l), d.m(l, null);
    },
    p(m, c) {
      u === (u = f(m)) && d ? d.p(m, c) : (d.d(1), d = u(m), d && (d.c(), d.m(l, null))), c & /*transform*/
      4096 && h(
        l,
        "transform",
        /*transform*/
        m[12]
      ), c & /*i*/
      1024 && r !== (r = "translate(" + /*i*/
      m[10][0] / 2 + " " + /*i*/
      m[10][1] / 2 + ")") && h(n, "transform", r), c & /*i*/
      1024 && i !== (i = /*i*/
      m[10][0] / 4 + " 0") && h(n, "transform-origin", i), c & /*id*/
      2 && o !== (o = /*id*/
      m[1] || void 0) && h(t, "id", o), c & /*clazz*/
      1 && a !== (a = "svelte-fa " + /*clazz*/
      m[0] + " svelte-1cj2gr0") && h(t, "class", a), c & /*s*/
      2048 && h(
        t,
        "style",
        /*s*/
        m[11]
      ), c & /*i*/
      1024 && s !== (s = "0 0 " + /*i*/
      m[10][0] + " " + /*i*/
      m[10][1]) && h(t, "viewBox", s), c & /*clazz, pulse*/
      17 && Z(
        t,
        "pulse",
        /*pulse*/
        m[4]
      ), c & /*clazz, spin*/
      9 && Z(
        t,
        "spin",
        /*spin*/
        m[3]
      );
    },
    d(m) {
      m && M(t), d.d();
    }
  };
}
function Aa(e) {
  let t, n, l, r, i, o, a, s, f, u;
  return {
    c() {
      t = we("path"), o = we("path"), h(t, "d", n = /*i*/
      e[10][4][0]), h(t, "fill", l = /*secondaryColor*/
      e[6] || /*color*/
      e[2] || "currentColor"), h(t, "fill-opacity", r = /*swapOpacity*/
      e[9] != !1 ? (
        /*primaryOpacity*/
        e[7]
      ) : (
        /*secondaryOpacity*/
        e[8]
      )), h(t, "transform", i = "translate(" + /*i*/
      e[10][0] / -2 + " " + /*i*/
      e[10][1] / -2 + ")"), h(o, "d", a = /*i*/
      e[10][4][1]), h(o, "fill", s = /*primaryColor*/
      e[5] || /*color*/
      e[2] || "currentColor"), h(o, "fill-opacity", f = /*swapOpacity*/
      e[9] != !1 ? (
        /*secondaryOpacity*/
        e[8]
      ) : (
        /*primaryOpacity*/
        e[7]
      )), h(o, "transform", u = "translate(" + /*i*/
      e[10][0] / -2 + " " + /*i*/
      e[10][1] / -2 + ")");
    },
    m(d, m) {
      L(d, t, m), L(d, o, m);
    },
    p(d, m) {
      m & /*i*/
      1024 && n !== (n = /*i*/
      d[10][4][0]) && h(t, "d", n), m & /*secondaryColor, color*/
      68 && l !== (l = /*secondaryColor*/
      d[6] || /*color*/
      d[2] || "currentColor") && h(t, "fill", l), m & /*swapOpacity, primaryOpacity, secondaryOpacity*/
      896 && r !== (r = /*swapOpacity*/
      d[9] != !1 ? (
        /*primaryOpacity*/
        d[7]
      ) : (
        /*secondaryOpacity*/
        d[8]
      )) && h(t, "fill-opacity", r), m & /*i*/
      1024 && i !== (i = "translate(" + /*i*/
      d[10][0] / -2 + " " + /*i*/
      d[10][1] / -2 + ")") && h(t, "transform", i), m & /*i*/
      1024 && a !== (a = /*i*/
      d[10][4][1]) && h(o, "d", a), m & /*primaryColor, color*/
      36 && s !== (s = /*primaryColor*/
      d[5] || /*color*/
      d[2] || "currentColor") && h(o, "fill", s), m & /*swapOpacity, secondaryOpacity, primaryOpacity*/
      896 && f !== (f = /*swapOpacity*/
      d[9] != !1 ? (
        /*secondaryOpacity*/
        d[8]
      ) : (
        /*primaryOpacity*/
        d[7]
      )) && h(o, "fill-opacity", f), m & /*i*/
      1024 && u !== (u = "translate(" + /*i*/
      d[10][0] / -2 + " " + /*i*/
      d[10][1] / -2 + ")") && h(o, "transform", u);
    },
    d(d) {
      d && M(t), d && M(o);
    }
  };
}
function Da(e) {
  let t, n, l, r;
  return {
    c() {
      t = we("path"), h(t, "d", n = /*i*/
      e[10][4]), h(t, "fill", l = /*color*/
      e[2] || /*primaryColor*/
      e[5] || "currentColor"), h(t, "transform", r = "translate(" + /*i*/
      e[10][0] / -2 + " " + /*i*/
      e[10][1] / -2 + ")");
    },
    m(i, o) {
      L(i, t, o);
    },
    p(i, o) {
      o & /*i*/
      1024 && n !== (n = /*i*/
      i[10][4]) && h(t, "d", n), o & /*color, primaryColor*/
      36 && l !== (l = /*color*/
      i[2] || /*primaryColor*/
      i[5] || "currentColor") && h(t, "fill", l), o & /*i*/
      1024 && r !== (r = "translate(" + /*i*/
      i[10][0] / -2 + " " + /*i*/
      i[10][1] / -2 + ")") && h(t, "transform", r);
    },
    d(i) {
      i && M(t);
    }
  };
}
function qa(e) {
  let t, n = (
    /*i*/
    e[10][4] && Or(e)
  );
  return {
    c() {
      n && n.c(), t = ve();
    },
    m(l, r) {
      n && n.m(l, r), L(l, t, r);
    },
    p(l, [r]) {
      /*i*/
      l[10][4] ? n ? n.p(l, r) : (n = Or(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: G,
    o: G,
    d(l) {
      n && n.d(l), l && M(t);
    }
  };
}
function Na(e, t, n) {
  let { class: l = "" } = t, { id: r = "" } = t, { style: i = "" } = t, { icon: o } = t, { size: a = "" } = t, { color: s = "" } = t, { fw: f = !1 } = t, { pull: u = "" } = t, { scale: d = 1 } = t, { translateX: m = 0 } = t, { translateY: c = 0 } = t, { rotate: g = "" } = t, { flip: _ = !1 } = t, { spin: y = !1 } = t, { pulse: w = !1 } = t, { primaryColor: x = "" } = t, { secondaryColor: S = "" } = t, { primaryOpacity: O = 1 } = t, { secondaryOpacity: A = 0.4 } = t, { swapOpacity: R = !1 } = t, D, T, E;
  return e.$$set = (v) => {
    "class" in v && n(0, l = v.class), "id" in v && n(1, r = v.id), "style" in v && n(13, i = v.style), "icon" in v && n(14, o = v.icon), "size" in v && n(15, a = v.size), "color" in v && n(2, s = v.color), "fw" in v && n(16, f = v.fw), "pull" in v && n(17, u = v.pull), "scale" in v && n(18, d = v.scale), "translateX" in v && n(19, m = v.translateX), "translateY" in v && n(20, c = v.translateY), "rotate" in v && n(21, g = v.rotate), "flip" in v && n(22, _ = v.flip), "spin" in v && n(3, y = v.spin), "pulse" in v && n(4, w = v.pulse), "primaryColor" in v && n(5, x = v.primaryColor), "secondaryColor" in v && n(6, S = v.secondaryColor), "primaryOpacity" in v && n(7, O = v.primaryOpacity), "secondaryOpacity" in v && n(8, A = v.secondaryOpacity), "swapOpacity" in v && n(9, R = v.swapOpacity);
  }, e.$$.update = () => {
    e.$$.dirty & /*icon*/
    16384 && n(10, D = o && o.icon || [0, 0, "", [], ""]), e.$$.dirty & /*style, size, pull, fw*/
    237568 && n(11, T = Ea(i, a, u, f)), e.$$.dirty & /*scale, translateX, translateY, rotate, flip*/
    8126464 && n(12, E = za(d, m, c, g, _, 512));
  }, [
    l,
    r,
    s,
    y,
    w,
    x,
    S,
    O,
    A,
    R,
    D,
    T,
    E,
    i,
    o,
    a,
    f,
    u,
    d,
    m,
    c,
    g,
    _
  ];
}
class Kt extends ye {
  constructor(t) {
    super(), _e(this, t, Na, qa, he, {
      class: 0,
      id: 1,
      style: 13,
      icon: 14,
      size: 15,
      color: 2,
      fw: 16,
      pull: 17,
      scale: 18,
      translateX: 19,
      translateY: 20,
      rotate: 21,
      flip: 22,
      spin: 3,
      pulse: 4,
      primaryColor: 5,
      secondaryColor: 6,
      primaryOpacity: 7,
      secondaryOpacity: 8,
      swapOpacity: 9
    });
  }
}
function Oa(e) {
  let t, n;
  return t = new Kt({ props: { icon: Ra } }), {
    c() {
      X(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p: G,
    i(l) {
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(t, l);
    }
  };
}
function Fa(e) {
  let t, n;
  return t = new Kt({ props: { icon: Sa } }), {
    c() {
      X(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p: G,
    i(l) {
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(t, l);
    }
  };
}
function Ha(e) {
  let t, n, l, r, i, o;
  const a = [Fa, Oa], s = [];
  function f(u, d) {
    return (
      /*$theme*/
      u[0] === "dark" ? 0 : 1
    );
  }
  return n = f(e), l = s[n] = a[n](e), {
    c() {
      t = p("button"), l.c(), h(t, "class", "px-3 py-2 rounded-md bg-slate-200 hover:bg-slate-200/50 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors duration-200"), h(t, "title", "Toggle theme");
    },
    m(u, d) {
      L(u, t, d), s[n].m(t, null), r = !0, i || (o = le(
        t,
        "click",
        /*toggleTheme*/
        e[1]
      ), i = !0);
    },
    p(u, [d]) {
      let m = n;
      n = f(u), n === m ? s[n].p(u, d) : ($(), z(s[m], 1, 1, () => {
        s[m] = null;
      }), ee(), l = s[n], l ? l.p(u, d) : (l = s[n] = a[n](u), l.c()), C(l, 1), l.m(t, null));
    },
    i(u) {
      r || (C(l), r = !0);
    },
    o(u) {
      z(l), r = !1;
    },
    d(u) {
      u && M(t), s[n].d(), i = !1, o();
    }
  };
}
function Ia(e, t, n) {
  let l;
  H(e, Nr, (i) => n(0, l = i));
  function r() {
    console.log("Theme toggle clicked, current theme:", l), Nr.toggle();
  }
  return e.$$.update = () => {
    if (e.$$.dirty & /*$theme*/
    1 && (console.log("Theme changed to:", l), typeof window < "u")) {
      const i = document.documentElement;
      console.log("HTML classes:", i.className), console.log("Has dark class:", i.classList.contains("dark"));
    }
  }, [l, r];
}
class Pa extends ye {
  constructor(t) {
    super(), _e(this, t, Ia, Ha, he, {});
  }
}
function Fr(e, t, n) {
  const l = e.slice();
  return l[4] = t[n], l;
}
function Hr(e) {
  let t, n, l, r = (
    /*tab*/
    e[4].label + ""
  ), i, o, a, s, f;
  n = new Kt({
    props: {
      icon: (
        /*tab*/
        e[4].icon
      ),
      class: "inline mr-2"
    }
  });
  function u() {
    return (
      /*click_handler*/
      e[3](
        /*tab*/
        e[4]
      )
    );
  }
  return {
    c() {
      t = p("button"), X(n.$$.fragment), l = q(), i = F(r), h(t, "class", o = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*activeTab*/
      (e[0] === /*tab*/
      e[4].id ? "bg-slate-600 text-white dark:bg-slate-200 dark:text-slate-800" : "bg-slate-200 hover:bg-slate-200/50 dark:bg-slate-700 dark:hover:bg-slate-600"));
    },
    m(d, m) {
      L(d, t, m), K(n, t, null), b(t, l), b(t, i), a = !0, s || (f = le(t, "click", u), s = !0);
    },
    p(d, m) {
      e = d, (!a || m & /*activeTab*/
      1 && o !== (o = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*activeTab*/
      (e[0] === /*tab*/
      e[4].id ? "bg-slate-600 text-white dark:bg-slate-200 dark:text-slate-800" : "bg-slate-200 hover:bg-slate-200/50 dark:bg-slate-700 dark:hover:bg-slate-600"))) && h(t, "class", o);
    },
    i(d) {
      a || (C(n.$$.fragment, d), a = !0);
    },
    o(d) {
      z(n.$$.fragment, d), a = !1;
    },
    d(d) {
      d && M(t), Y(n), s = !1, f();
    }
  };
}
function ja(e) {
  let t, n, l, r, i, o, a, s = (
    /*tabs*/
    e[2]
  ), f = [];
  for (let d = 0; d < s.length; d += 1)
    f[d] = Hr(Fr(e, s, d));
  const u = (d) => z(f[d], 1, 1, () => {
    f[d] = null;
  });
  return o = new Pa({}), {
    c() {
      t = p("div"), n = p("nav");
      for (let d = 0; d < f.length; d += 1)
        f[d].c();
      l = q(), r = p("div"), i = q(), X(o.$$.fragment), h(r, "class", "flex-auto"), h(n, "class", "flex gap-2 px-4 py-2"), h(n, "aria-label", "Tabs"), h(t, "class", "w-full bg-slate-300 dark:bg-slate-800 dark:text-white");
    },
    m(d, m) {
      L(d, t, m), b(t, n);
      for (let c = 0; c < f.length; c += 1)
        f[c] && f[c].m(n, null);
      b(n, l), b(n, r), b(n, i), K(o, n, null), a = !0;
    },
    p(d, [m]) {
      if (m & /*activeTab, tabs, onTabChange*/
      7) {
        s = /*tabs*/
        d[2];
        let c;
        for (c = 0; c < s.length; c += 1) {
          const g = Fr(d, s, c);
          f[c] ? (f[c].p(g, m), C(f[c], 1)) : (f[c] = Hr(g), f[c].c(), C(f[c], 1), f[c].m(n, l));
        }
        for ($(), c = s.length; c < f.length; c += 1)
          u(c);
        ee();
      }
    },
    i(d) {
      if (!a) {
        for (let m = 0; m < s.length; m += 1)
          C(f[m]);
        C(o.$$.fragment, d), a = !0;
      }
    },
    o(d) {
      f = f.filter(Boolean);
      for (let m = 0; m < f.length; m += 1)
        z(f[m]);
      z(o.$$.fragment, d), a = !1;
    },
    d(d) {
      d && M(t), We(f, d), Y(o);
    }
  };
}
function Ba(e, t, n) {
  let { activeTab: l = "data-elements" } = t, { onTabChange: r = () => {
  } } = t;
  const i = [
    {
      id: "data-elements",
      label: "Data Elements",
      icon: Ta
    },
    {
      id: "query-inspector",
      label: "Query Inspector",
      icon: va
    }
  ], o = (a) => r(a.id);
  return e.$$set = (a) => {
    "activeTab" in a && n(0, l = a.activeTab), "onTabChange" in a && n(1, r = a.onTabChange);
  }, [l, r, i, o];
}
class Qa extends ye {
  constructor(t) {
    super(), _e(this, t, Ba, ja, he, { activeTab: 0, onTabChange: 1 });
  }
}
function Va(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Il(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, l = e.slice(0, n);
  return [
    l.length > 1 ? l[0] + l.slice(2) : l,
    +e.slice(n + 1)
  ];
}
function Yt(e) {
  return e = Il(Math.abs(e)), e ? e[1] : NaN;
}
function Ga(e, t) {
  return function(n, l) {
    for (var r = n.length, i = [], o = 0, a = e[0], s = 0; r > 0 && a > 0 && (s + a + 1 > l && (a = Math.max(1, l - s)), i.push(n.substring(r -= a, r + a)), !((s += a + 1) > l)); )
      a = e[o = (o + 1) % e.length];
    return i.reverse().join(t);
  };
}
function Wa(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var Ka = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Pl(e) {
  if (!(t = Ka.exec(e)))
    throw new Error("invalid format: " + e);
  var t;
  return new Mr({
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
Pl.prototype = Mr.prototype;
function Mr(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Mr.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Ya(e) {
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
var qo;
function Ua(e, t) {
  var n = Il(e, t);
  if (!n)
    return e + "";
  var l = n[0], r = n[1], i = r - (qo = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, o = l.length;
  return i === o ? l : i > o ? l + new Array(i - o + 1).join("0") : i > 0 ? l.slice(0, i) + "." + l.slice(i) : "0." + new Array(1 - i).join("0") + Il(e, Math.max(0, t + i - 1))[0];
}
function Ir(e, t) {
  var n = Il(e, t);
  if (!n)
    return e + "";
  var l = n[0], r = n[1];
  return r < 0 ? "0." + new Array(-r).join("0") + l : l.length > r + 1 ? l.slice(0, r + 1) + "." + l.slice(r + 1) : l + new Array(r - l.length + 2).join("0");
}
const Pr = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Va,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Ir(e * 100, t),
  r: Ir,
  s: Ua,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function jr(e) {
  return e;
}
var Br = Array.prototype.map, Qr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Xa(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? jr : Ga(Br.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", l = e.currency === void 0 ? "" : e.currency[1] + "", r = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? jr : Wa(Br.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", a = e.minus === void 0 ? "−" : e.minus + "", s = e.nan === void 0 ? "NaN" : e.nan + "";
  function f(d) {
    d = Pl(d);
    var m = d.fill, c = d.align, g = d.sign, _ = d.symbol, y = d.zero, w = d.width, x = d.comma, S = d.precision, O = d.trim, A = d.type;
    A === "n" ? (x = !0, A = "g") : Pr[A] || (S === void 0 && (S = 12), O = !0, A = "g"), (y || m === "0" && c === "=") && (y = !0, m = "0", c = "=");
    var R = _ === "$" ? n : _ === "#" && /[boxX]/.test(A) ? "0" + A.toLowerCase() : "", D = _ === "$" ? l : /[%p]/.test(A) ? o : "", T = Pr[A], E = /[defgprs%]/.test(A);
    S = S === void 0 ? 6 : /[gprs]/.test(A) ? Math.max(1, Math.min(21, S)) : Math.max(0, Math.min(20, S));
    function v(I) {
      var B = R, U = D, ce, N, W;
      if (A === "c")
        U = T(I) + U, I = "";
      else {
        I = +I;
        var re = I < 0 || 1 / I < 0;
        if (I = isNaN(I) ? s : T(Math.abs(I), S), O && (I = Ya(I)), re && +I == 0 && g !== "+" && (re = !1), B = (re ? g === "(" ? g : a : g === "-" || g === "(" ? "" : g) + B, U = (A === "s" ? Qr[8 + qo / 3] : "") + U + (re && g === "(" ? ")" : ""), E) {
          for (ce = -1, N = I.length; ++ce < N; )
            if (W = I.charCodeAt(ce), 48 > W || W > 57) {
              U = (W === 46 ? r + I.slice(ce + 1) : I.slice(ce)) + U, I = I.slice(0, ce);
              break;
            }
        }
      }
      x && !y && (I = t(I, 1 / 0));
      var ue = B.length + I.length + U.length, oe = ue < w ? new Array(w - ue + 1).join(m) : "";
      switch (x && y && (I = t(oe + I, oe.length ? w - U.length : 1 / 0), oe = ""), c) {
        case "<":
          I = B + I + U + oe;
          break;
        case "=":
          I = B + oe + I + U;
          break;
        case "^":
          I = oe.slice(0, ue = oe.length >> 1) + B + I + U + oe.slice(ue);
          break;
        default:
          I = oe + B + I + U;
          break;
      }
      return i(I);
    }
    return v.toString = function() {
      return d + "";
    }, v;
  }
  function u(d, m) {
    var c = f((d = Pl(d), d.type = "f", d)), g = Math.max(-8, Math.min(8, Math.floor(Yt(m) / 3))) * 3, _ = Math.pow(10, -g), y = Qr[8 + g / 3];
    return function(w) {
      return c(_ * w) + y;
    };
  }
  return {
    format: f,
    formatPrefix: u
  };
}
var Ll, se, No;
Za({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Za(e) {
  return Ll = Xa(e), se = Ll.format, No = Ll.formatPrefix, Ll;
}
function Oo(e) {
  return Math.max(0, -Yt(Math.abs(e)));
}
function Ja(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Yt(t) / 3))) * 3 - Yt(Math.abs(e)));
}
function $a(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Yt(t) - Yt(e)) + 1;
}
function Xt(e) {
  for (var t = e.length / 6 | 0, n = new Array(t), l = 0; l < t; )
    n[l] = "#" + e.slice(l * 6, ++l * 6);
  return n;
}
const es = Xt("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), ts = Xt("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function Lr(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Fo(e, t) {
  var n = Object.create(e.prototype);
  for (var l in t)
    n[l] = t[l];
  return n;
}
function Dn() {
}
var Rn = 0.7, jl = 1 / Rn, Wt = "\\s*([+-]?\\d+)\\s*", Tn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ns = /^#([0-9a-f]{3,8})$/, ls = new RegExp(`^rgb\\(${Wt},${Wt},${Wt}\\)$`), rs = new RegExp(`^rgb\\(${rt},${rt},${rt}\\)$`), is = new RegExp(`^rgba\\(${Wt},${Wt},${Wt},${Tn}\\)$`), os = new RegExp(`^rgba\\(${rt},${rt},${rt},${Tn}\\)$`), as = new RegExp(`^hsl\\(${Tn},${rt},${rt}\\)$`), ss = new RegExp(`^hsla\\(${Tn},${rt},${rt},${Tn}\\)$`), Vr = {
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
Lr(Dn, En, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Gr,
  // Deprecated! Use color.formatHex.
  formatHex: Gr,
  formatHex8: fs,
  formatHsl: us,
  formatRgb: Wr,
  toString: Wr
});
function Gr() {
  return this.rgb().formatHex();
}
function fs() {
  return this.rgb().formatHex8();
}
function us() {
  return Ho(this).formatHsl();
}
function Wr() {
  return this.rgb().formatRgb();
}
function En(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = ns.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Kr(t) : n === 3 ? new Pe(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Rl(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Rl(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ls.exec(e)) ? new Pe(t[1], t[2], t[3], 1) : (t = rs.exec(e)) ? new Pe(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = is.exec(e)) ? Rl(t[1], t[2], t[3], t[4]) : (t = os.exec(e)) ? Rl(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = as.exec(e)) ? Xr(t[1], t[2] / 100, t[3] / 100, 1) : (t = ss.exec(e)) ? Xr(t[1], t[2] / 100, t[3] / 100, t[4]) : Vr.hasOwnProperty(e) ? Kr(Vr[e]) : e === "transparent" ? new Pe(NaN, NaN, NaN, 0) : null;
}
function Kr(e) {
  return new Pe(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Rl(e, t, n, l) {
  return l <= 0 && (e = t = n = NaN), new Pe(e, t, n, l);
}
function cs(e) {
  return e instanceof Dn || (e = En(e)), e ? (e = e.rgb(), new Pe(e.r, e.g, e.b, e.opacity)) : new Pe();
}
function Bl(e, t, n, l) {
  return arguments.length === 1 ? cs(e) : new Pe(e, t, n, l ?? 1);
}
function Pe(e, t, n, l) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +l;
}
Lr(Pe, Bl, Fo(Dn, {
  brighter(e) {
    return e = e == null ? jl : Math.pow(jl, e), new Pe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Rn : Math.pow(Rn, e), new Pe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Pe(Lt(this.r), Lt(this.g), Lt(this.b), Ql(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Yr,
  // Deprecated! Use color.formatHex.
  formatHex: Yr,
  formatHex8: ds,
  formatRgb: Ur,
  toString: Ur
}));
function Yr() {
  return `#${Mt(this.r)}${Mt(this.g)}${Mt(this.b)}`;
}
function ds() {
  return `#${Mt(this.r)}${Mt(this.g)}${Mt(this.b)}${Mt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ur() {
  const e = Ql(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Lt(this.r)}, ${Lt(this.g)}, ${Lt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ql(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Lt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Mt(e) {
  return e = Lt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Xr(e, t, n, l) {
  return l <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ve(e, t, n, l);
}
function Ho(e) {
  if (e instanceof Ve)
    return new Ve(e.h, e.s, e.l, e.opacity);
  if (e instanceof Dn || (e = En(e)), !e)
    return new Ve();
  if (e instanceof Ve)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, l = e.b / 255, r = Math.min(t, n, l), i = Math.max(t, n, l), o = NaN, a = i - r, s = (i + r) / 2;
  return a ? (t === i ? o = (n - l) / a + (n < l) * 6 : n === i ? o = (l - t) / a + 2 : o = (t - n) / a + 4, a /= s < 0.5 ? i + r : 2 - i - r, o *= 60) : a = s > 0 && s < 1 ? 0 : o, new Ve(o, a, s, e.opacity);
}
function gs(e, t, n, l) {
  return arguments.length === 1 ? Ho(e) : new Ve(e, t, n, l ?? 1);
}
function Ve(e, t, n, l) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +l;
}
Lr(Ve, gs, Fo(Dn, {
  brighter(e) {
    return e = e == null ? jl : Math.pow(jl, e), new Ve(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Rn : Math.pow(Rn, e), new Ve(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, l = n + (n < 0.5 ? n : 1 - n) * t, r = 2 * n - l;
    return new Pe(
      hr(e >= 240 ? e - 240 : e + 120, r, l),
      hr(e, r, l),
      hr(e < 120 ? e + 240 : e - 120, r, l),
      this.opacity
    );
  },
  clamp() {
    return new Ve(Zr(this.h), Tl(this.s), Tl(this.l), Ql(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ql(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Zr(this.h)}, ${Tl(this.s) * 100}%, ${Tl(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Zr(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Tl(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function hr(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Rr = (e) => () => e;
function ms(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function hs(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(l) {
    return Math.pow(e + l * t, n);
  };
}
function bs(e) {
  return (e = +e) == 1 ? Io : function(t, n) {
    return n - t ? hs(t, n, e) : Rr(isNaN(t) ? n : t);
  };
}
function Io(e, t) {
  var n = t - e;
  return n ? ms(e, n) : Rr(isNaN(e) ? t : e);
}
const Jr = function e(t) {
  var n = bs(t);
  function l(r, i) {
    var o = n((r = Bl(r)).r, (i = Bl(i)).r), a = n(r.g, i.g), s = n(r.b, i.b), f = Io(r.opacity, i.opacity);
    return function(u) {
      return r.r = o(u), r.g = a(u), r.b = s(u), r.opacity = f(u), r + "";
    };
  }
  return l.gamma = e, l;
}(1);
function _s(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, l = t.slice(), r;
  return function(i) {
    for (r = 0; r < n; ++r)
      l[r] = e[r] * (1 - i) + t[r] * i;
    return l;
  };
}
function ys(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function ps(e, t) {
  var n = t ? t.length : 0, l = e ? Math.min(n, e.length) : 0, r = new Array(l), i = new Array(n), o;
  for (o = 0; o < l; ++o)
    r[o] = Tr(e[o], t[o]);
  for (; o < n; ++o)
    i[o] = t[o];
  return function(a) {
    for (o = 0; o < l; ++o)
      i[o] = r[o](a);
    return i;
  };
}
function ks(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(l) {
    return n.setTime(e * (1 - l) + t * l), n;
  };
}
function Vl(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function ws(e, t) {
  var n = {}, l = {}, r;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (r in t)
    r in e ? n[r] = Tr(e[r], t[r]) : l[r] = t[r];
  return function(i) {
    for (r in n)
      l[r] = n[r](i);
    return l;
  };
}
var wr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, br = new RegExp(wr.source, "g");
function vs(e) {
  return function() {
    return e;
  };
}
function xs(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Ss(e, t) {
  var n = wr.lastIndex = br.lastIndex = 0, l, r, i, o = -1, a = [], s = [];
  for (e = e + "", t = t + ""; (l = wr.exec(e)) && (r = br.exec(t)); )
    (i = r.index) > n && (i = t.slice(n, i), a[o] ? a[o] += i : a[++o] = i), (l = l[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, s.push({ i: o, x: Vl(l, r) })), n = br.lastIndex;
  return n < t.length && (i = t.slice(n), a[o] ? a[o] += i : a[++o] = i), a.length < 2 ? s[0] ? xs(s[0].x) : vs(t) : (t = s.length, function(f) {
    for (var u = 0, d; u < t; ++u)
      a[(d = s[u]).i] = d.x(f);
    return a.join("");
  });
}
function Tr(e, t) {
  var n = typeof t, l;
  return t == null || n === "boolean" ? Rr(t) : (n === "number" ? Vl : n === "string" ? (l = En(t)) ? (t = l, Jr) : Ss : t instanceof En ? Jr : t instanceof Date ? ks : ys(t) ? _s : Array.isArray(t) ? ps : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? ws : Vl)(e, t);
}
function Cs(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function Ul(e) {
  var t = e.length;
  return function(n) {
    return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
  };
}
const Ms = Ul(Xt("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
Ul(Xt("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
Ul(Xt("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
Ul(Xt("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function Ls(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = p("span"), h(t, "class", n = "bar " + /*absolutePosition*/
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
      e[2]}px;` : "")), Z(
        t,
        "animated",
        /*loaded*/
        e[8]
      ), Z(
        t,
        "rounded-full",
        /*rounded*/
        e[6]
      );
    },
    m(o, a) {
      L(o, t, a), r || (i = [
        le(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[10]
        ),
        le(
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
      385 && Z(
        t,
        "animated",
        /*loaded*/
        o[8]
      ), a & /*absolutePosition, hoverable, rounded*/
      193 && Z(
        t,
        "rounded-full",
        /*rounded*/
        o[6]
      );
    },
    i: G,
    o: G,
    d(o) {
      o && M(t), r = !1, He(i);
    }
  };
}
function Rs(e, t, n) {
  let { absolutePosition: l = !1 } = t, { fraction: r = 1 } = t, { leftFraction: i = 0 } = t, { maxWidth: o = null } = t, { colorScale: a = null } = t, { color: s = "lightgray" } = t, { rounded: f = !0 } = t, { hoverable: u = !1 } = t;
  Ut(() => {
    setTimeout(() => n(8, d = !0), 100);
  });
  let d = !1, m = "";
  function c(_) {
    Dr.call(this, e, _);
  }
  function g(_) {
    Dr.call(this, e, _);
  }
  return e.$$set = (_) => {
    "absolutePosition" in _ && n(0, l = _.absolutePosition), "fraction" in _ && n(1, r = _.fraction), "leftFraction" in _ && n(2, i = _.leftFraction), "maxWidth" in _ && n(3, o = _.maxWidth), "colorScale" in _ && n(4, a = _.colorScale), "color" in _ && n(5, s = _.color), "rounded" in _ && n(6, f = _.rounded), "hoverable" in _ && n(7, u = _.hoverable);
  }, e.$$.update = () => {
    e.$$.dirty & /*maxWidth, rounded, fraction*/
    74 && (o != null ? n(9, m = `${f ? (o - 6) * r + 6 : o * r}px`) : n(9, m = f ? `calc((100% - 6px) * ${r} + 6px)` : `${r.toFixed(2)}%`));
  }, [
    l,
    r,
    i,
    o,
    a,
    s,
    f,
    u,
    d,
    m,
    c,
    g
  ];
}
class Er extends ye {
  constructor(t) {
    super(), _e(this, t, Rs, Ls, he, {
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
function Ts(e) {
  return e.map(
    ((t) => (n) => t += n)(0)
  );
}
const Es = (e) => ({
  hoveringIndex: e & /*hoveringIndex*/
  8192
}), $r = (e) => ({ hoveringIndex: (
  /*hoveringIndex*/
  e[13]
) });
function ei(e, t, n) {
  const l = e.slice();
  return l[25] = t[n], l[27] = n, l;
}
function ti(e) {
  let t, n;
  return {
    c() {
      t = p("div"), n = F(
        /*title*/
        e[11]
      ), h(t, "class", "font-bold text-xs truncate text-right"), Q(t, "width", "96px");
    },
    m(l, r) {
      L(l, t, r), b(t, n);
    },
    p(l, r) {
      r & /*title*/
      2048 && V(
        n,
        /*title*/
        l[11]
      );
    },
    d(l) {
      l && M(t);
    }
  };
}
function ni(e) {
  let t, n;
  return t = new Er({
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
      X(t.$$.fragment);
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
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(t, l);
    }
  };
}
function zs(e) {
  let t, n;
  return t = new Er({
    props: {
      absolutePosition: !0,
      fraction: (
        /*scale*/
        (e[1] || ai)(
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
      X(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*scale, value*/
      6 && (i.fraction = /*scale*/
      (l[1] || ai)(
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
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(t, l);
    }
  };
}
function As(e) {
  let t, n, l = (
    /*values*/
    e[3]
  ), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = li(ei(e, l, o));
  const i = (o) => z(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      t = ve();
    },
    m(o, a) {
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(o, a);
      L(o, t, a), n = !0;
    },
    p(o, a) {
      if (a & /*scale, offsets, values, colors, hoverable, hoveringIndex*/
      25674) {
        l = /*values*/
        o[3];
        let s;
        for (s = 0; s < l.length; s += 1) {
          const f = ei(o, l, s);
          r[s] ? (r[s].p(f, a), C(r[s], 1)) : (r[s] = li(f), r[s].c(), C(r[s], 1), r[s].m(t.parentNode, t));
        }
        for ($(), s = l.length; s < r.length; s += 1)
          i(s);
        ee();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < l.length; a += 1)
          C(r[a]);
        n = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1)
        z(r[a]);
      n = !1;
    },
    d(o) {
      We(r, o), o && M(t);
    }
  };
}
function li(e) {
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
  return t = new Er({
    props: {
      absolutePosition: !0,
      leftFraction: (
        /*i*/
        e[27] > 0 ? (
          /*scale*/
          (e[1] || ii)(
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
        (e[1] || oi)(
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
      X(t.$$.fragment);
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
        (e[1] || ii)(
          /*offsets*/
          e[14][
            /*i*/
            e[27] - 1
          ]
        )
      ) : 0), i & /*scale, values*/
      10 && (o.fraction = /*scale*/
      (e[1] || oi)(
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
      n || (C(t.$$.fragment, r), n = !0);
    },
    o(r) {
      z(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Y(t, r);
    }
  };
}
function ri(e) {
  let t, n, l, r;
  const i = [qs, Ds], o = [];
  function a(s, f) {
    return (
      /*$$slots*/
      s[15].caption ? 1 : 0
    );
  }
  return n = a(e), l = o[n] = i[n](e), {
    c() {
      t = p("div"), l.c(), h(t, "class", "text-xs text-slate-800");
    },
    m(s, f) {
      L(s, t, f), o[n].m(t, null), r = !0;
    },
    p(s, f) {
      let u = n;
      n = a(s), n === u ? o[n].p(s, f) : ($(), z(o[u], 1, 1, () => {
        o[u] = null;
      }), ee(), l = o[n], l ? l.p(s, f) : (l = o[n] = i[n](s), l.c()), C(l, 1), l.m(t, null));
    },
    i(s) {
      r || (C(l), r = !0);
    },
    o(s) {
      z(l), r = !1;
    },
    d(s) {
      s && M(t), o[n].d();
    }
  };
}
function Ds(e) {
  let t;
  const n = (
    /*#slots*/
    e[17].caption
  ), l = et(
    n,
    e,
    /*$$scope*/
    e[16],
    $r
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
      73728) && nt(
        l,
        n,
        r,
        /*$$scope*/
        r[16],
        t ? tt(
          n,
          /*$$scope*/
          r[16],
          i,
          Es
        ) : lt(
          /*$$scope*/
          r[16]
        ),
        $r
      );
    },
    i(r) {
      t || (C(l, r), t = !0);
    },
    o(r) {
      z(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function qs(e) {
  let t = se(".3")(
    /*value*/
    e[2]
  ) + "", n;
  return {
    c() {
      n = F(t);
    },
    m(l, r) {
      L(l, n, r);
    },
    p(l, r) {
      r & /*value*/
      4 && t !== (t = se(".3")(
        /*value*/
        l[2]
      ) + "") && V(n, t);
    },
    i: G,
    o: G,
    d(l) {
      l && M(n);
    }
  };
}
function Ns(e) {
  let t, n, l, r, i, o, a, s, f = !!/*title*/
  e[11] && ti(e), u = (
    /*showFullBar*/
    e[4] && ni(e)
  );
  const d = [As, zs], m = [];
  function c(_, y) {
    return (
      /*values*/
      _[3] != null ? 0 : 1
    );
  }
  i = c(e), o = m[i] = d[i](e);
  let g = (
    /*showTooltip*/
    e[5] && ri(e)
  );
  return {
    c() {
      t = p("div"), f && f.c(), n = q(), l = p("div"), u && u.c(), r = q(), o.c(), a = q(), g && g.c(), h(l, "class", "parent-bar relative rounded-full overflow-hidden"), Q(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), Q(l, "height", "6px"), Z(l, "mb-1", !/*horizontalLayout*/
      e[12]), h(t, "class", "items-center gap-1"), Z(
        t,
        "flex",
        /*horizontalLayout*/
        e[12]
      );
    },
    m(_, y) {
      L(_, t, y), f && f.m(t, null), b(t, n), b(t, l), u && u.m(l, null), b(l, r), m[i].m(l, null), b(t, a), g && g.m(t, null), s = !0;
    },
    p(_, [y]) {
      /*title*/
      _[11] ? f ? f.p(_, y) : (f = ti(_), f.c(), f.m(t, n)) : f && (f.d(1), f = null), /*showFullBar*/
      _[4] ? u ? (u.p(_, y), y & /*showFullBar*/
      16 && C(u, 1)) : (u = ni(_), u.c(), C(u, 1), u.m(l, r)) : u && ($(), z(u, 1, 1, () => {
        u = null;
      }), ee());
      let w = i;
      i = c(_), i === w ? m[i].p(_, y) : ($(), z(m[w], 1, 1, () => {
        m[w] = null;
      }), ee(), o = m[i], o ? o.p(_, y) : (o = m[i] = d[i](_), o.c()), C(o, 1), o.m(l, null)), (!s || y & /*width*/
      1) && Q(
        l,
        "width",
        /*width*/
        _[0] == null ? "100%" : `${/*width*/
        _[0]}px`
      ), (!s || y & /*horizontalLayout*/
      4096) && Z(l, "mb-1", !/*horizontalLayout*/
      _[12]), /*showTooltip*/
      _[5] ? g ? (g.p(_, y), y & /*showTooltip*/
      32 && C(g, 1)) : (g = ri(_), g.c(), C(g, 1), g.m(t, null)) : g && ($(), z(g, 1, 1, () => {
        g = null;
      }), ee()), (!s || y & /*horizontalLayout*/
      4096) && Z(
        t,
        "flex",
        /*horizontalLayout*/
        _[12]
      );
    },
    i(_) {
      s || (C(u), C(o), C(g), s = !0);
    },
    o(_) {
      z(u), z(o), z(g), s = !1;
    },
    d(_) {
      _ && M(t), f && f.d(), u && u.d(), m[i].d(), g && g.d();
    }
  };
}
const ii = (e) => e, oi = (e) => e, ai = (e) => e;
function Os(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = Cr(l);
  let { width: o = 100 } = t, { scale: a = null } = t, { value: s = 0 } = t, { values: f = null } = t, { showFullBar: u = !1 } = t, { showTooltip: d = !0 } = t, { colors: m = es } = t, { colorScale: c = Ms } = t, { color: g = null } = t, { fullBarColor: _ = "#e5e7eb" } = t, { hoverable: y = !1 } = t, { title: w = null } = t, { horizontalLayout: x = !1 } = t, S = null, O = [];
  const A = (B) => n(13, S = -1), R = (B) => n(13, S = null), D = (B, U) => n(13, S = B), T = (B) => n(13, S = null), E = () => g, v = (B) => n(13, S = 0), I = (B) => n(13, S = null);
  return e.$$set = (B) => {
    "width" in B && n(0, o = B.width), "scale" in B && n(1, a = B.scale), "value" in B && n(2, s = B.value), "values" in B && n(3, f = B.values), "showFullBar" in B && n(4, u = B.showFullBar), "showTooltip" in B && n(5, d = B.showTooltip), "colors" in B && n(6, m = B.colors), "colorScale" in B && n(7, c = B.colorScale), "color" in B && n(8, g = B.color), "fullBarColor" in B && n(9, _ = B.fullBarColor), "hoverable" in B && n(10, y = B.hoverable), "title" in B && n(11, w = B.title), "horizontalLayout" in B && n(12, x = B.horizontalLayout), "$$scope" in B && n(16, r = B.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*values*/
    8 && (f != null ? n(14, O = Ts(f)) : n(14, O = []));
  }, [
    o,
    a,
    s,
    f,
    u,
    d,
    m,
    c,
    g,
    _,
    y,
    w,
    x,
    S,
    O,
    i,
    r,
    l,
    A,
    R,
    D,
    T,
    E,
    v,
    I
  ];
}
class Rt extends ye {
  constructor(t) {
    super(), _e(this, t, Os, Ns, he, {
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
function si(e, t, n) {
  const l = e.slice();
  return l[13] = t[n], l[15] = n, l;
}
function Fs(e) {
  let t, n, l, r, i, o, a, s, f, u, d, m, c, g, _, y, w;
  function x(v, I) {
    if (
      /*hasError*/
      v[8]
    )
      return js;
    if (
      /*hasConceptIds*/
      v[9]
    )
      return Ps;
  }
  let S = x(e), O = S && S(e), A = (
    /*totalCount*/
    e[10] > 0 && fi(e)
  );
  const R = [Qs, Bs], D = [];
  function T(v, I) {
    return (
      /*sortedConcepts*/
      v[7].length > 0 ? 0 : 1
    );
  }
  g = T(e), _ = D[g] = R[g](e);
  let E = (
    /*concepts*/
    e[5].length > 0 && di(e)
  );
  return {
    c() {
      t = p("div"), O && O.c(), n = q(), l = p("div"), r = p("div"), i = p("div"), i.textContent = "Data Element", o = q(), a = p("div"), a.textContent = "Type", s = q(), f = p("div"), u = F(`Count
            `), A && A.c(), d = q(), m = p("div"), c = p("div"), _.c(), y = q(), E && E.c(), h(i, "class", "font-semibold text-slate-900 dark:text-slate-100"), h(a, "class", "font-semibold text-slate-900 dark:text-slate-100"), h(f, "class", "font-semibold text-slate-900 dark:text-slate-100"), h(r, "class", "grid grid-cols-3 gap-4 px-6 py-4"), h(l, "class", "bg-slate-50 dark:bg-slate-800 rounded-t-lg border border-slate-200 dark:border-slate-700"), h(c, "class", "max-h-96 overflow-y-auto custom-scrollbar svelte-1xw87wt"), h(m, "class", "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-b-lg overflow-hidden"), h(t, "class", "w-full");
    },
    m(v, I) {
      L(v, t, I), O && O.m(t, null), b(t, n), b(t, l), b(l, r), b(r, i), b(r, o), b(r, a), b(r, s), b(r, f), b(f, u), A && A.m(f, null), b(t, d), b(t, m), b(m, c), D[g].m(c, null), b(t, y), E && E.m(t, null), w = !0;
    },
    p(v, I) {
      S === (S = x(v)) && O ? O.p(v, I) : (O && O.d(1), O = S && S(v), O && (O.c(), O.m(t, n))), /*totalCount*/
      v[10] > 0 ? A ? A.p(v, I) : (A = fi(v), A.c(), A.m(f, null)) : A && (A.d(1), A = null);
      let B = g;
      g = T(v), g === B ? D[g].p(v, I) : ($(), z(D[B], 1, 1, () => {
        D[B] = null;
      }), ee(), _ = D[g], _ ? _.p(v, I) : (_ = D[g] = R[g](v), _.c()), C(_, 1), _.m(c, null)), /*concepts*/
      v[5].length > 0 ? E ? E.p(v, I) : (E = di(v), E.c(), E.m(t, null)) : E && (E.d(1), E = null);
    },
    i(v) {
      w || (C(_), w = !0);
    },
    o(v) {
      z(_), w = !1;
    },
    d(v) {
      v && M(t), O && O.d(), A && A.d(), D[g].d(), E && E.d();
    }
  };
}
function Hs(e) {
  let t, n, l, r, i, o, a, s, f, u, d, m, c;
  return a = new Kt({
    props: { icon: La, class: "inline mr-2" }
  }), {
    c() {
      t = p("div"), n = p("div"), n.textContent = "Data elements not retrieved yet", l = q(), r = p("p"), r.textContent = "Click below to retrieve available data elements in this scope.", i = q(), o = p("button"), X(a.$$.fragment), s = F(`
        Load Data Elements for `), f = p("span"), u = F(
        /*scopeName*/
        e[0]
      ), h(n, "class", "w-1/2 text-slate-700 dark:text-slate-200 text-lg font-semibold"), h(r, "class", "text-slate-600 dark:text-slate-400 w-1/3"), h(f, "class", "font-mono"), h(o, "class", "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md"), o.disabled = /*isLoading*/
      e[2], h(t, "class", "flex flex-col w-full h-full items-center justify-center text-center gap-4");
    },
    m(g, _) {
      L(g, t, _), b(t, n), b(t, l), b(t, r), b(t, i), b(t, o), K(a, o, null), b(o, s), b(o, f), b(f, u), d = !0, m || (c = le(o, "click", function() {
        $e(
          /*onAnalyze*/
          e[4]
        ) && e[4].apply(this, arguments);
      }), m = !0);
    },
    p(g, _) {
      e = g, (!d || _ & /*scopeName*/
      1) && V(
        u,
        /*scopeName*/
        e[0]
      ), (!d || _ & /*isLoading*/
      4) && (o.disabled = /*isLoading*/
      e[2]);
    },
    i(g) {
      d || (C(a.$$.fragment, g), d = !0);
    },
    o(g) {
      z(a.$$.fragment, g), d = !1;
    },
    d(g) {
      g && M(t), Y(a), m = !1, c();
    }
  };
}
function Is(e) {
  let t, n, l, r = (
    /*loadingMessage*/
    e[3] && gi(e)
  );
  return {
    c() {
      t = p("div"), n = p("div"), n.innerHTML = `<div class="relative"><div class="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-spin"></div> 
          
          <div class="absolute top-2 left-2 w-12 h-12 border-4 border-blue-600 dark:border-blue-400 rounded-full animate-spin" style="animation-direction: reverse; animation-duration: 1.5s;"></div> 
          
          <div class="absolute top-6 left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div></div>`, l = q(), r && r.c(), h(n, "class", "flex justify-center mb-8"), h(t, "class", "text-center py-16");
    },
    m(i, o) {
      L(i, t, o), b(t, n), b(t, l), r && r.m(t, null);
    },
    p(i, o) {
      /*loadingMessage*/
      i[3] ? r ? r.p(i, o) : (r = gi(i), r.c(), r.m(t, null)) : r && (r.d(1), r = null);
    },
    i: G,
    o: G,
    d(i) {
      i && M(t), r && r.d();
    }
  };
}
function Ps(e) {
  let t, n, l, r, i, o, a, s, f, u, d, m, c;
  return {
    c() {
      t = p("div"), n = p("div"), l = p("div"), l.innerHTML = '<span class="text-yellow-600 dark:text-yellow-400">⚠️</span>', r = q(), i = p("div"), o = p("h3"), o.textContent = "Concept Names Not Found", a = q(), s = p("div"), f = p("p"), f.textContent = `Some concepts are showing as IDs instead of human-readable
                  names. This might be due to vocabulary lookup issues.`, u = q(), d = p("button"), d.textContent = "🔄 Refresh Analysis", h(l, "class", "flex-shrink-0"), h(o, "class", "text-sm font-medium text-yellow-800 dark:text-yellow-200"), h(d, "class", "mt-2 bg-yellow-600 hover:bg-yellow-700 text-white text-xs px-3 py-1 rounded transition-colors duration-200"), h(s, "class", "mt-2 text-sm text-yellow-700 dark:text-yellow-300"), h(i, "class", "ml-3"), h(n, "class", "flex items-start"), h(t, "class", "bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4");
    },
    m(g, _) {
      L(g, t, _), b(t, n), b(n, l), b(n, r), b(n, i), b(i, o), b(i, a), b(i, s), b(s, f), b(s, u), b(s, d), m || (c = le(
        d,
        "click",
        /*click_handler_1*/
        e[12]
      ), m = !0);
    },
    p: G,
    d(g) {
      g && M(t), m = !1, c();
    }
  };
}
function js(e) {
  let t, n, l, r, i, o, a, s, f, u = (
    /*scopeConcepts*/
    e[6].error + ""
  ), d, m, c, g, _;
  return {
    c() {
      t = p("div"), n = p("div"), l = p("div"), l.innerHTML = '<span class="text-red-600 dark:text-red-400">❌</span>', r = q(), i = p("div"), o = p("h3"), o.textContent = "Analysis Failed", a = q(), s = p("div"), f = p("p"), d = F(u), m = q(), c = p("button"), c.textContent = "🔄 Retry Analysis", h(l, "class", "flex-shrink-0"), h(o, "class", "text-sm font-medium text-red-800 dark:text-red-200"), h(c, "class", "mt-2 bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded transition-colors duration-200"), h(s, "class", "mt-2 text-sm text-red-700 dark:text-red-300"), h(i, "class", "ml-3"), h(n, "class", "flex items-start"), h(t, "class", "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4");
    },
    m(y, w) {
      L(y, t, w), b(t, n), b(n, l), b(n, r), b(n, i), b(i, o), b(i, a), b(i, s), b(s, f), b(f, d), b(s, m), b(s, c), g || (_ = le(
        c,
        "click",
        /*click_handler*/
        e[11]
      ), g = !0);
    },
    p(y, w) {
      w & /*scopeConcepts*/
      64 && u !== (u = /*scopeConcepts*/
      y[6].error + "") && V(d, u);
    },
    d(y) {
      y && M(t), g = !1, _();
    }
  };
}
function fi(e) {
  let t, n, l = (
    /*totalCount*/
    e[10].toLocaleString() + ""
  ), r, i;
  return {
    c() {
      t = p("span"), n = F("(Total: "), r = F(l), i = F(")"), h(t, "class", "text-sm font-normal text-slate-600 dark:text-slate-400");
    },
    m(o, a) {
      L(o, t, a), b(t, n), b(t, r), b(t, i);
    },
    p(o, a) {
      a & /*totalCount*/
      1024 && l !== (l = /*totalCount*/
      o[10].toLocaleString() + "") && V(r, l);
    },
    d(o) {
      o && M(t);
    }
  };
}
function Bs(e) {
  let t;
  return {
    c() {
      t = p("div"), t.textContent = "No concepts found for this scope.", h(t, "class", "px-6 py-8 text-center text-slate-500 dark:text-slate-400");
    },
    m(n, l) {
      L(n, t, l);
    },
    p: G,
    i: G,
    o: G,
    d(n) {
      n && M(t);
    }
  };
}
function Qs(e) {
  let t, n, l = (
    /*sortedConcepts*/
    e[7]
  ), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = ci(si(e, l, o));
  const i = (o) => z(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      t = ve();
    },
    m(o, a) {
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(o, a);
      L(o, t, a), n = !0;
    },
    p(o, a) {
      if (a & /*totalCount, sortedConcepts*/
      1152) {
        l = /*sortedConcepts*/
        o[7];
        let s;
        for (s = 0; s < l.length; s += 1) {
          const f = si(o, l, s);
          r[s] ? (r[s].p(f, a), C(r[s], 1)) : (r[s] = ci(f), r[s].c(), C(r[s], 1), r[s].m(t.parentNode, t));
        }
        for ($(), s = l.length; s < r.length; s += 1)
          i(s);
        ee();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < l.length; a += 1)
          C(r[a]);
        n = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1)
        z(r[a]);
      n = !1;
    },
    d(o) {
      We(r, o), o && M(t);
    }
  };
}
function ui(e) {
  let t, n, l, r;
  return l = new Rt({
    props: {
      width: 128,
      value: (
        /*concept*/
        e[13].count / /*totalCount*/
        e[10]
      ),
      showTooltip: !1,
      showFullBar: !0,
      color: "#3b82f6",
      fullBarColor: "#9ca3af",
      horizontalLayout: !0
    }
  }), {
    c() {
      t = p("div"), n = p("div"), X(l.$$.fragment), h(n, "class", "w-32"), h(t, "class", "flex flex-col space-y-1");
    },
    m(i, o) {
      L(i, t, o), b(t, n), K(l, n, null), r = !0;
    },
    p(i, o) {
      const a = {};
      o & /*sortedConcepts, totalCount*/
      1152 && (a.value = /*concept*/
      i[13].count / /*totalCount*/
      i[10]), l.$set(a);
    },
    i(i) {
      r || (C(l.$$.fragment, i), r = !0);
    },
    o(i) {
      z(l.$$.fragment, i), r = !1;
    },
    d(i) {
      i && M(t), Y(l);
    }
  };
}
function ci(e) {
  let t, n, l = (
    /*concept*/
    e[13].name + ""
  ), r, i, o, a, s, f = (
    /*concept*/
    e[13].type + ""
  ), u, d, m, c, g, _, y = (
    /*concept*/
    e[13].count.toLocaleString() + ""
  ), w, x, S, O = (
    /*totalCount*/
    e[10].toLocaleString() + ""
  ), A, R, D, T = (
    /*totalCount*/
    e[10] > 0 && ui(e)
  );
  return {
    c() {
      t = p("div"), n = p("div"), r = F(l), o = q(), a = p("div"), s = p("span"), u = F(f), m = q(), c = p("div"), T && T.c(), g = q(), _ = p("div"), w = F(y), x = p("span"), S = F(" / "), A = F(O), R = q(), h(n, "class", "text-slate-900 dark:text-slate-100 font-medium truncate"), h(n, "title", i = /*concept*/
      e[13].name), h(s, "class", d = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " + /*concept*/
      (e[13].type === "event" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : (
        /*concept*/
        e[13].type === "interval" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200"
      ))), h(a, "class", "text-slate-600 dark:text-slate-400"), h(x, "class", "opacity-80"), h(_, "class", "text-slate-600 dark:text-slate-200 font-mono text-sm"), h(c, "class", "flex flex-col space-y-2"), h(t, "class", "grid grid-cols-3 gap-4 px-6 py-4 border-b border-slate-100 dark:border-slate-800 last:border-b-0 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-150");
    },
    m(E, v) {
      L(E, t, v), b(t, n), b(n, r), b(t, o), b(t, a), b(a, s), b(s, u), b(t, m), b(t, c), T && T.m(c, null), b(c, g), b(c, _), b(_, w), b(_, x), b(x, S), b(x, A), b(t, R), D = !0;
    },
    p(E, v) {
      (!D || v & /*sortedConcepts*/
      128) && l !== (l = /*concept*/
      E[13].name + "") && V(r, l), (!D || v & /*sortedConcepts*/
      128 && i !== (i = /*concept*/
      E[13].name)) && h(n, "title", i), (!D || v & /*sortedConcepts*/
      128) && f !== (f = /*concept*/
      E[13].type + "") && V(u, f), (!D || v & /*sortedConcepts*/
      128 && d !== (d = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " + /*concept*/
      (E[13].type === "event" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : (
        /*concept*/
        E[13].type === "interval" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200"
      )))) && h(s, "class", d), /*totalCount*/
      E[10] > 0 ? T ? (T.p(E, v), v & /*totalCount*/
      1024 && C(T, 1)) : (T = ui(E), T.c(), C(T, 1), T.m(c, g)) : T && ($(), z(T, 1, 1, () => {
        T = null;
      }), ee()), (!D || v & /*sortedConcepts*/
      128) && y !== (y = /*concept*/
      E[13].count.toLocaleString() + "") && V(w, y), (!D || v & /*totalCount*/
      1024) && O !== (O = /*totalCount*/
      E[10].toLocaleString() + "") && V(A, O);
    },
    i(E) {
      D || (C(T), D = !0);
    },
    o(E) {
      z(T), D = !1;
    },
    d(E) {
      E && M(t), T && T.d();
    }
  };
}
function di(e) {
  let t, n, l = (
    /*concepts*/
    e[5].length + ""
  ), r, i, o = (
    /*concepts*/
    e[5].length !== 1 ? "s" : ""
  ), a, s, f;
  return {
    c() {
      t = p("div"), n = F("Found "), r = F(l), i = F(" concept"), a = F(o), s = F(" in "), f = F(
        /*scopeName*/
        e[0]
      ), h(t, "class", "mt-4 text-sm text-slate-600 dark:text-slate-400");
    },
    m(u, d) {
      L(u, t, d), b(t, n), b(t, r), b(t, i), b(t, a), b(t, s), b(t, f);
    },
    p(u, d) {
      d & /*concepts*/
      32 && l !== (l = /*concepts*/
      u[5].length + "") && V(r, l), d & /*concepts*/
      32 && o !== (o = /*concepts*/
      u[5].length !== 1 ? "s" : "") && V(a, o), d & /*scopeName*/
      1 && V(
        f,
        /*scopeName*/
        u[0]
      );
    },
    d(u) {
      u && M(t);
    }
  };
}
function gi(e) {
  let t, n, l, r, i, o;
  return {
    c() {
      t = p("div"), n = p("div"), l = p("div"), r = q(), i = p("span"), o = F(
        /*loadingMessage*/
        e[3]
      ), h(l, "class", "w-2 h-2 bg-blue-500 rounded-full animate-pulse"), h(i, "class", "text-sm text-blue-700 dark:text-blue-300 font-medium"), h(n, "class", "flex items-center space-x-2"), h(t, "class", "mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg");
    },
    m(a, s) {
      L(a, t, s), b(t, n), b(n, l), b(n, r), b(n, i), b(i, o);
    },
    p(a, s) {
      s & /*loadingMessage*/
      8 && V(
        o,
        /*loadingMessage*/
        a[3]
      );
    },
    d(a) {
      a && M(t);
    }
  };
}
function Vs(e) {
  let t, n, l, r;
  const i = [Is, Hs, Fs], o = [];
  function a(s, f) {
    return (
      /*isLoading*/
      s[2] ? 0 : (
        /*isAnalyzed*/
        s[1] ? 2 : 1
      )
    );
  }
  return n = a(e), l = o[n] = i[n](e), {
    c() {
      t = p("div"), l.c(), h(t, "class", "w-full flex-auto");
    },
    m(s, f) {
      L(s, t, f), o[n].m(t, null), r = !0;
    },
    p(s, [f]) {
      let u = n;
      n = a(s), n === u ? o[n].p(s, f) : ($(), z(o[u], 1, 1, () => {
        o[u] = null;
      }), ee(), l = o[n], l ? l.p(s, f) : (l = o[n] = i[n](s), l.c()), C(l, 1), l.m(t, null));
    },
    i(s) {
      r || (C(l), r = !0);
    },
    o(s) {
      z(l), r = !1;
    },
    d(s) {
      s && M(t), o[n].d();
    }
  };
}
function Gs(e, t, n) {
  let l, r, i, o, { scopeName: a = "" } = t, { isAnalyzed: s = !1 } = t, { isLoading: f = !1 } = t, { loadingMessage: u = "" } = t, { onAnalyze: d = () => {
  } } = t, { concepts: m = [] } = t, { scopeConcepts: c = {} } = t;
  const g = () => d(), _ = () => d();
  return e.$$set = (y) => {
    "scopeName" in y && n(0, a = y.scopeName), "isAnalyzed" in y && n(1, s = y.isAnalyzed), "isLoading" in y && n(2, f = y.isLoading), "loadingMessage" in y && n(3, u = y.loadingMessage), "onAnalyze" in y && n(4, d = y.onAnalyze), "concepts" in y && n(5, m = y.concepts), "scopeConcepts" in y && n(6, c = y.scopeConcepts);
  }, e.$$.update = () => {
    e.$$.dirty & /*concepts*/
    32 && n(10, l = m.reduce((y, w) => y + w.count, 0)), e.$$.dirty & /*concepts*/
    32 && n(9, r = m.some((y) => y.name.startsWith("Concept "))), e.$$.dirty & /*scopeConcepts*/
    64 && n(8, i = c && c.error), e.$$.dirty & /*concepts*/
    32 && n(7, o = [...m].sort((y, w) => w.count - y.count));
  }, [
    a,
    s,
    f,
    u,
    d,
    m,
    c,
    o,
    i,
    r,
    l,
    g,
    _
  ];
}
class Ws extends ye {
  constructor(t) {
    super(), _e(this, t, Gs, Vs, he, {
      scopeName: 0,
      isAnalyzed: 1,
      isLoading: 2,
      loadingMessage: 3,
      onAnalyze: 4,
      concepts: 5,
      scopeConcepts: 6
    });
  }
}
function mi(e, t, n) {
  const l = e.slice();
  return l[12] = t[n], l;
}
function Ks(e) {
  let t;
  return {
    c() {
      t = p("div"), t.textContent = "No scopes available...", h(t, "class", "text-slate-500 dark:text-slate-400 text-sm");
    },
    m(n, l) {
      L(n, t, l);
    },
    p: G,
    d(n) {
      n && M(t);
    }
  };
}
function Ys(e) {
  let t, n = (
    /*scopes*/
    e[1]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = hi(mi(e, n, r));
  return {
    c() {
      t = p("div");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      h(t, "class", "space-y-1");
    },
    m(r, i) {
      L(r, t, i);
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(t, null);
    },
    p(r, i) {
      if (i & /*selectedScope, scopes, onScopeSelect*/
      70) {
        n = /*scopes*/
        r[1];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = mi(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = hi(a), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(r) {
      r && M(t), We(l, r);
    }
  };
}
function hi(e) {
  let t, n = (
    /*scope*/
    e[12] + ""
  ), l, r, i, o, a;
  function s() {
    return (
      /*click_handler*/
      e[10](
        /*scope*/
        e[12]
      )
    );
  }
  return {
    c() {
      t = p("button"), l = F(n), r = q(), h(t, "class", i = "w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 " + /*selectedScope*/
      (e[2] === /*scope*/
      e[12] ? "bg-blue-100 dark:bg-blue-500 text-blue-700 dark:text-white font-medium" : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:bg-slate-700 dark:hover:bg-slate-600"));
    },
    m(f, u) {
      L(f, t, u), b(t, l), b(t, r), o || (a = le(t, "click", s), o = !0);
    },
    p(f, u) {
      e = f, u & /*scopes*/
      2 && n !== (n = /*scope*/
      e[12] + "") && V(l, n), u & /*selectedScope, scopes*/
      6 && i !== (i = "w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 " + /*selectedScope*/
      (e[2] === /*scope*/
      e[12] ? "bg-blue-100 dark:bg-blue-500 text-blue-700 dark:text-white font-medium" : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:bg-slate-700 dark:hover:bg-slate-600")) && h(t, "class", i);
    },
    d(f) {
      f && M(t), o = !1, a();
    }
  };
}
function Us(e) {
  let t;
  return {
    c() {
      t = p("div"), t.innerHTML = '<div class="w-1/2 text-slate-600 dark:text-slate-400">Select a scope from the sidebar to explore available data elements.</div>', h(t, "class", "flex w-full h-full items-center justify-center");
    },
    m(n, l) {
      L(n, t, l);
    },
    p: G,
    i: G,
    o: G,
    d(n) {
      n && M(t);
    }
  };
}
function Xs(e) {
  let t, n, l, r, i, o, a, s;
  return a = new Ws({
    props: {
      scopeName: (
        /*selectedScope*/
        e[2]
      ),
      isAnalyzed: (
        /*isAnalyzed*/
        e[8]
      ),
      isLoading: (
        /*isLoading*/
        e[4]
      ),
      loadingMessage: (
        /*loadingMessage*/
        e[5]
      ),
      concepts: (
        /*concepts*/
        e[9]
      ),
      scopeConcepts: (
        /*scopeConcepts*/
        e[3]
      ),
      onAnalyze: (
        /*func*/
        e[11]
      )
    }
  }), {
    c() {
      t = p("div"), n = p("h2"), l = F(
        /*selectedScope*/
        e[2]
      ), r = q(), i = p("div"), o = q(), X(a.$$.fragment), h(n, "class", "text-2xl font-bold text-slate-900 dark:text-slate-100"), h(i, "class", "mt-2 h-1 w-16 bg-blue-600 dark:bg-blue-400 rounded"), h(t, "class", "pb-6 shrink-0");
    },
    m(f, u) {
      L(f, t, u), b(t, n), b(n, l), b(t, r), b(t, i), L(f, o, u), K(a, f, u), s = !0;
    },
    p(f, u) {
      (!s || u & /*selectedScope*/
      4) && V(
        l,
        /*selectedScope*/
        f[2]
      );
      const d = {};
      u & /*selectedScope*/
      4 && (d.scopeName = /*selectedScope*/
      f[2]), u & /*isAnalyzed*/
      256 && (d.isAnalyzed = /*isAnalyzed*/
      f[8]), u & /*isLoading*/
      16 && (d.isLoading = /*isLoading*/
      f[4]), u & /*loadingMessage*/
      32 && (d.loadingMessage = /*loadingMessage*/
      f[5]), u & /*concepts*/
      512 && (d.concepts = /*concepts*/
      f[9]), u & /*scopeConcepts*/
      8 && (d.scopeConcepts = /*scopeConcepts*/
      f[3]), u & /*onAnalyzeScope, selectedScope*/
      132 && (d.onAnalyze = /*func*/
      f[11]), a.$set(d);
    },
    i(f) {
      s || (C(a.$$.fragment, f), s = !0);
    },
    o(f) {
      z(a.$$.fragment, f), s = !1;
    },
    d(f) {
      f && M(t), f && M(o), Y(a, f);
    }
  };
}
function Zs(e) {
  let t, n, l, r, i, o, a, s, f, u, d;
  function m(x, S) {
    return (
      /*scopes*/
      x[1].length > 0 ? Ys : Ks
    );
  }
  let c = m(e), g = c(e);
  const _ = [Xs, Us], y = [];
  function w(x, S) {
    return (
      /*selectedScope*/
      x[2] ? 0 : 1
    );
  }
  return s = w(e), f = y[s] = _[s](e), {
    c() {
      t = p("div"), n = p("div"), l = p("h3"), l.textContent = "Scopes", r = q(), i = p("div"), g.c(), o = q(), a = p("div"), f.c(), h(l, "class", "px-4 py-3 font-semibold uppercase text-slate-900 dark:text-slate-100"), h(i, "class", "px-4"), h(n, "class", "w-1/4 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 flex-shrink-0"), h(a, "class", "flex-auto bg-white dark:bg-slate-900 p-6 flex flex-col h-full"), h(t, "class", u = "flex h-full " + /*width*/
      e[0] + " overflow-hidden");
    },
    m(x, S) {
      L(x, t, S), b(t, n), b(n, l), b(n, r), b(n, i), g.m(i, null), b(t, o), b(t, a), y[s].m(a, null), d = !0;
    },
    p(x, [S]) {
      c === (c = m(x)) && g ? g.p(x, S) : (g.d(1), g = c(x), g && (g.c(), g.m(i, null)));
      let O = s;
      s = w(x), s === O ? y[s].p(x, S) : ($(), z(y[O], 1, 1, () => {
        y[O] = null;
      }), ee(), f = y[s], f ? f.p(x, S) : (f = y[s] = _[s](x), f.c()), C(f, 1), f.m(a, null)), (!d || S & /*width*/
      1 && u !== (u = "flex h-full " + /*width*/
      x[0] + " overflow-hidden")) && h(t, "class", u);
    },
    i(x) {
      d || (C(f), d = !0);
    },
    o(x) {
      z(f), d = !1;
    },
    d(x) {
      x && M(t), g.d(), y[s].d();
    }
  };
}
function Js(e, t, n) {
  let l, r, { width: i = "w-full" } = t, { scopes: o = [] } = t, { selectedScope: a = "" } = t, { scopeConcepts: s = {} } = t, { isLoading: f = !1 } = t, { loadingMessage: u = "" } = t, { onScopeSelect: d = () => {
  } } = t, { onAnalyzeScope: m = () => {
  } } = t;
  const c = (_) => d(_), g = () => m(a);
  return e.$$set = (_) => {
    "width" in _ && n(0, i = _.width), "scopes" in _ && n(1, o = _.scopes), "selectedScope" in _ && n(2, a = _.selectedScope), "scopeConcepts" in _ && n(3, s = _.scopeConcepts), "isLoading" in _ && n(4, f = _.isLoading), "loadingMessage" in _ && n(5, u = _.loadingMessage), "onScopeSelect" in _ && n(6, d = _.onScopeSelect), "onAnalyzeScope" in _ && n(7, m = _.onAnalyzeScope);
  }, e.$$.update = () => {
    e.$$.dirty & /*selectedScope, scopeConcepts*/
    12 && n(8, l = a && s && s.scope_name === a), e.$$.dirty & /*isAnalyzed, scopeConcepts*/
    264 && n(9, r = l && s.concepts ? s.concepts.map((_) => ({
      name: _.name,
      type: _.type,
      count: _.count
    })) : []);
  }, [
    i,
    o,
    a,
    s,
    f,
    u,
    d,
    m,
    l,
    r,
    c,
    g
  ];
}
class $s extends ye {
  constructor(t) {
    super(), _e(this, t, Js, Zs, he, {
      width: 0,
      scopes: 1,
      selectedScope: 2,
      scopeConcepts: 3,
      isLoading: 4,
      loadingMessage: 5,
      onScopeSelect: 6,
      onAnalyzeScope: 7
    });
  }
}
const bi = [
  "now",
  "value",
  "mintime",
  "maxtime",
  "indexvalue"
];
function ef(e, t, n) {
  if (console.log("🔍 getAutocompleteOptions - Input:", {
    dataFields: e,
    searchQuery: t,
    fullPrefix: n
  }), e.length == 0)
    return console.log("🔍 getAutocompleteOptions - No data fields available"), [];
  if (t.length == 0)
    return console.log("🔍 getAutocompleteOptions - No search query"), [];
  let l = n.match(/\{([^}]*?)(?:,\s*([^},]*))?$/i);
  if (console.log("🔍 getAutocompleteOptions - Data field regex result:", l), l) {
    const r = l[2] || l[1] || "";
    if (console.log(
      "🔍 getAutocompleteOptions - Processing data field, searchQuery:",
      r
    ), r.length == 0)
      return [];
    const i = r.toLowerCase(), o = e.filter((f) => f.toLowerCase().startsWith(i)).sort((f, u) => f.length !== u.length ? f.length - u.length : f.localeCompare(u)).slice(0, 10), a = e.filter((f) => {
      const u = f.toLowerCase();
      return u.includes(i) && !u.startsWith(i);
    }).sort((f, u) => {
      const d = f.toLowerCase().indexOf(i), m = u.toLowerCase().indexOf(i);
      return d !== m ? d - m : f.length !== u.length ? f.length - u.length : f.localeCompare(u);
    }).slice(0, 5), s = [...o, ...a].map((f) => ({
      value: f,
      type: "data_item"
    }));
    return console.log("🔍 getAutocompleteOptions - Data field matches:", s), s;
  }
  if (l = n.match(/#([^\s]*)/), console.log("🔍 getAutocompleteOptions - Constant regex result:", l), l) {
    console.log("🔍 getAutocompleteOptions - Processing constants");
    const r = l[1] || "";
    console.log(
      "🔍 getAutocompleteOptions - Constant search query:",
      r
    );
    const i = r.toLowerCase(), o = bi.filter((f) => f.toLowerCase().startsWith(i)).sort((f, u) => f.length - u.length), a = bi.filter((f) => {
      const u = f.toLowerCase();
      return u.includes(i) && !u.startsWith(i);
    }).sort((f, u) => f.length - u.length), s = [...o, ...a].map((f) => ({
      value: f,
      type: "constant"
    }));
    return console.log("🔍 getAutocompleteOptions - Constant matches:", s), s;
  }
  return console.log("🔍 getAutocompleteOptions - No matches found"), [];
}
function tf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Po = { exports: {} };
(function(e, t) {
  (function() {
    function n(i, o, a) {
      var s = null, f = null, u = null, d = null;
      if (a = a || "", !o.length)
        return a || "";
      if (i.some(function(c) {
        c.name;
        var g = c.match instanceof RegExp, _ = g ? c.match : c.match[0], y = g ? null : c.match[1] || null, w = g ? null : c.match[2] || null;
        return s = o.match(_), f = s ? c.name : null, u = y, d = w, !!s;
      }), s) {
        var m = '<span class="' + f + '">' + s[1] + "</span>";
        return u && (m = u + m), d && (m = m + d), n(i, o.slice(s[0].length), a + m);
      } else
        return n(i, o.slice(1), a + o[0]);
    }
    function l(i) {
      var o = i.replace(/^\n+|\n+\s+$/g, ""), a = o.match(/^\s+/);
      if (!a)
        return o;
      var s = o.split(`
`), f = s.map(function(u, d) {
        return !u || /^\s+$/.test(u) ? u : u.replace(a[0], "");
      }).join(`
`);
      return `
` + f;
    }
    function r(i) {
      var o = i.selector || "pre code", a = i.postProcess || function(f) {
        return f;
      }, s = i.preProcess || function(f) {
        return f;
      };
      Array.prototype.slice.call(document.querySelectorAll(o)).forEach(function(f) {
        var u = (typeof i.patterns == "function" ? i.patterns(f) : i.patterns) || {}, d = f.innerText, m = l(d), c = a(n(u, s(m)));
        i.linenums && (c = c.split(`
`).map(function(g, _) {
          if (!_)
            return g;
          var y = _ - 1 + "";
          return y.length < 2 && (y = "0" + y), '<span class="linenum">' + y + "</span> " + g;
        }).join(`
`)), f.innerHTML = c;
      });
    }
    e.exports = r;
  })();
})(Po);
var nf = Po.exports;
const lf = /* @__PURE__ */ tf(nf), rf = [
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
function of(e) {
  return e = e.replaceAll(/<([A-z]+?)>/g, "####TOKEN####$1####ENDTOKEN####"), e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function _i(e, t, n) {
  const l = e.slice();
  return l[33] = t[n], l[35] = n, l;
}
function yi(e) {
  let t, n = (
    /*autocompleteOptions*/
    e[8]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = pi(_i(e, n, r));
  return {
    c() {
      t = p("div");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      h(t, "class", "absolute z-30 w-full mt-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md shadow-xl max-h-48 overflow-y-auto");
    },
    m(r, i) {
      L(r, t, i);
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(t, null);
      e[23](t);
    },
    p(r, i) {
      if (i[0] & /*selectedIndex, selectAutocompleteOption, autocompleteOptions*/
      17152) {
        n = /*autocompleteOptions*/
        r[8];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = _i(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = pi(a), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(r) {
      r && M(t), We(l, r), e[23](null);
    }
  };
}
function pi(e) {
  let t, n, l, r = (
    /*option*/
    e[33].value + ""
  ), i, o, a, s = (
    /*option*/
    e[33].type === "data_item" ? "field" : "const"
  ), f, u, d, m, c;
  function g() {
    return (
      /*click_handler*/
      e[20](
        /*option*/
        e[33]
      )
    );
  }
  function _(...w) {
    return (
      /*keydown_handler*/
      e[21](
        /*option*/
        e[33],
        ...w
      )
    );
  }
  function y() {
    return (
      /*mouseenter_handler*/
      e[22](
        /*index*/
        e[35]
      )
    );
  }
  return {
    c() {
      t = p("div"), n = p("div"), l = p("span"), i = F(r), o = q(), a = p("span"), f = F(s), u = q(), h(l, "class", "font-mono text-sm"), h(a, "class", "text-xs px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"), h(n, "class", "flex items-center justify-between"), h(t, "class", d = "px-4 py-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors " + /*index*/
      (e[35] === /*selectedIndex*/
      e[9] ? "bg-blue-600 text-white" : "text-slate-700 dark:text-slate-200")), h(t, "role", "button"), h(t, "tabindex", "0");
    },
    m(w, x) {
      L(w, t, x), b(t, n), b(n, l), b(l, i), b(n, o), b(n, a), b(a, f), b(t, u), m || (c = [
        le(t, "click", g),
        le(t, "keydown", _),
        le(t, "mouseenter", y)
      ], m = !0);
    },
    p(w, x) {
      e = w, x[0] & /*autocompleteOptions*/
      256 && r !== (r = /*option*/
      e[33].value + "") && V(i, r), x[0] & /*autocompleteOptions*/
      256 && s !== (s = /*option*/
      e[33].type === "data_item" ? "field" : "const") && V(f, s), x[0] & /*selectedIndex*/
      512 && d !== (d = "px-4 py-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors " + /*index*/
      (e[35] === /*selectedIndex*/
      e[9] ? "bg-blue-600 text-white" : "text-slate-700 dark:text-slate-200")) && h(t, "class", d);
    },
    d(w) {
      w && M(t), m = !1, He(c);
    }
  };
}
function af(e) {
  let t, n, l, r, i, o, a, s, f, u, d, m, c, g, _, y, w, x, S, O, A, R, D;
  s = new Kt({ props: { icon: xa } });
  let T = (
    /*showAutocomplete*/
    e[10] && /*autocompleteOptions*/
    e[8].length > 0 && yi(e)
  );
  return w = new Kt({
    props: { icon: Ca, class: "inline mr-2" }
  }), {
    c() {
      t = p("div"), n = p("div"), l = p("textarea"), r = q(), i = p("div"), o = q(), a = p("button"), X(s.$$.fragment), f = q(), T && T.c(), u = q(), d = p("div"), m = p("button"), c = F("Explain"), _ = q(), y = p("button"), X(w.$$.fragment), x = F(`
      Run`), h(l, "id", "text-input"), h(l, "class", "w-full h-full p-6 pr-32 bg-transparent font-mono text-sm bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-slate-500 dark:placeholder-slate-400 resize-none overflow-hidden min-h-[120px] relative z-20 svelte-1w5ogy4"), h(l, "placeholder", "// Write your Tempo-QL query here... (Ctrl+Z to undo, Ctrl+Y to redo)"), h(l, "rows", "1"), Q(l, "color", "transparent"), Q(l, "caret-color", "currentColor"), h(i, "class", "absolute top-0 left-0 w-full h-full p-6 pr-32 font-mono text-sm pointer-events-none bg-transparent z-10 text-wrap whitespace-pre-wrap break-words svelte-1w5ogy4"), h(
        i,
        "id",
        /*highlightedViewID*/
        e[11]
      ), h(a, "class", "absolute top-2 right-2 px-3 py-2 z-30 rounded-md bg-slate-200 hover:bg-slate-200/50 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white transition-colors duration-200"), h(a, "title", "View query history"), h(n, "class", "mb-2 relative flex-auto"), h(m, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-slate-200 hover:bg-slate-200/50 dark:bg-slate-700 dark:hover:bg-slate-600"), m.disabled = g = !/*value*/
      e[0].trim(), Z(m, "opacity-50", !/*value*/
      e[0].trim()), Z(m, "cursor-not-allowed", !/*value*/
      e[0].trim()), h(y, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white"), y.disabled = S = !/*value*/
      e[0].trim(), Z(y, "opacity-50", !/*value*/
      e[0].trim()), Z(y, "cursor-not-allowed", !/*value*/
      e[0].trim()), h(d, "class", "shrink-0 w-full flex justify-end items-center gap-2 my-2"), h(t, "class", O = "p-4 " + /*width*/
      e[1] + " flex flex-col h-full");
    },
    m(E, v) {
      L(E, t, v), b(t, n), b(n, l), e[17](l), Fl(
        l,
        /*value*/
        e[0]
      ), b(n, r), b(n, i), e[19](i), b(n, o), b(n, a), K(s, a, null), b(n, f), T && T.m(n, null), b(t, u), b(t, d), b(d, m), b(m, c), b(d, _), b(d, y), K(w, y, null), b(y, x), A = !0, R || (D = [
        le(
          l,
          "input",
          /*textarea_1_input_handler*/
          e[18]
        ),
        le(
          l,
          "input",
          /*handleInput*/
          e[12]
        ),
        le(
          l,
          "keydown",
          /*handleKeydown*/
          e[13]
        ),
        le(a, "click", function() {
          $e(
            /*onHistoryClick*/
            e[4]
          ) && e[4].apply(this, arguments);
        }),
        le(m, "click", function() {
          $e(
            /*onExplain*/
            e[3]
          ) && e[3].apply(this, arguments);
        }),
        le(y, "click", function() {
          $e(
            /*onRun*/
            e[2]
          ) && e[2].apply(this, arguments);
        })
      ], R = !0);
    },
    p(E, v) {
      e = E, v[0] & /*value*/
      1 && Fl(
        l,
        /*value*/
        e[0]
      ), /*showAutocomplete*/
      e[10] && /*autocompleteOptions*/
      e[8].length > 0 ? T ? T.p(e, v) : (T = yi(e), T.c(), T.m(n, null)) : T && (T.d(1), T = null), (!A || v[0] & /*value*/
      1 && g !== (g = !/*value*/
      e[0].trim())) && (m.disabled = g), (!A || v[0] & /*value*/
      1) && Z(m, "opacity-50", !/*value*/
      e[0].trim()), (!A || v[0] & /*value*/
      1) && Z(m, "cursor-not-allowed", !/*value*/
      e[0].trim()), (!A || v[0] & /*value*/
      1 && S !== (S = !/*value*/
      e[0].trim())) && (y.disabled = S), (!A || v[0] & /*value*/
      1) && Z(y, "opacity-50", !/*value*/
      e[0].trim()), (!A || v[0] & /*value*/
      1) && Z(y, "cursor-not-allowed", !/*value*/
      e[0].trim()), (!A || v[0] & /*width*/
      2 && O !== (O = "p-4 " + /*width*/
      e[1] + " flex flex-col h-full")) && h(t, "class", O);
    },
    i(E) {
      A || (C(s.$$.fragment, E), C(w.$$.fragment, E), A = !0);
    },
    o(E) {
      z(s.$$.fragment, E), z(w.$$.fragment, E), A = !1;
    },
    d(E) {
      E && M(t), e[17](null), e[19](null), Y(s), T && T.d(), Y(w), R = !1, He(D);
    }
  };
}
function _r() {
  console.log("🧹 Clearing other data due to empty input");
}
function sf(e, t, n) {
  let { value: l = "" } = t, { onInput: r = () => {
  } } = t, { width: i = "w-full max-w-2xl" } = t, { dataFields: o = [] } = t, { onRun: a = () => {
  } } = t, { onExplain: s = () => {
  } } = t, { onHistoryClick: f = () => {
  } } = t, u, d, m, c = [], g = 0, _ = !1, y = 0, w = "highlightView-" + new Array(20).fill(0).map(() => Math.floor(Math.random() * 10)).join(""), x = [], S = -1, O = !1;
  Ut(() => {
    R(""), document.addEventListener("click", A);
  }), da(() => {
    document.removeEventListener("click", A);
  });
  function A(P) {
    if (d && u) {
      const te = P.target, de = d.contains(te), ze = u.contains(te);
      (!de || ze && _) && (console.log("🖱️ Click detected - closing autocomplete"), n(10, _ = !1));
    }
  }
  function R(P) {
    if (O) {
      O = !1;
      return;
    }
    x = x.slice(0, S + 1), x.push(P), S = x.length - 1, x.length > 50 && (x = x.slice(-50), S = x.length - 1), console.log("📝 Added to history:", P, "Index:", S);
  }
  function D() {
    if (S > 0) {
      O = !0, S--;
      const P = x[S];
      console.log("↶ Undo to:", P), n(0, l = P), r(P), u && (n(5, u.value = P, u), u.focus()), P.trim() || _r();
    }
  }
  function T() {
    if (S < x.length - 1) {
      O = !0, S++;
      const P = x[S];
      console.log("↷ Redo to:", P), n(0, l = P), r(P), u && (n(5, u.value = P, u), u.focus()), P.trim() || _r();
    }
  }
  function E(P) {
    const te = P.target, de = te.value;
    console.log("🔍 handleInput - New value:", de), console.log("🔍 handleInput - Cursor position:", te.selectionStart), R(de), r(de), y = te.selectionStart || 0, console.log("🔍 handleInput - Updated cursor position:", y), v(de, y), de.trim() || _r();
  }
  function v(P, te) {
    console.log("🔍 updateAutocompleteOptions - Text:", P), console.log("🔍 updateAutocompleteOptions - Position:", te);
    const de = P.substring(0, te), ze = P.substring(te);
    console.log("🔍 updateAutocompleteOptions - Before cursor:", de), console.log("🔍 updateAutocompleteOptions - After cursor:", ze);
    const Ae = de.match(/([^\s]*)$/), Me = Ae ? Ae[1] : "";
    console.log("🔍 updateAutocompleteOptions - Current word:", Me), console.log("🔍 updateAutocompleteOptions - Data fields available:", o), Me.length > 0 ? (n(8, c = ef(o, Me, de)), console.log("🔍 updateAutocompleteOptions - Autocomplete options:", c), n(10, _ = c.length > 0), n(9, g = 0), console.log("🔍 updateAutocompleteOptions - Show autocomplete:", _)) : (n(10, _ = !1), console.log("🔍 updateAutocompleteOptions - No current word, hiding autocomplete"));
  }
  function I(P) {
    if (console.log("🔍 handleKeydown - Key pressed:", P.key), console.log("🔍 handleKeydown - Show autocomplete:", _), console.log("🔍 handleKeydown - Options count:", c.length), P.ctrlKey || P.metaKey) {
      if (P.key === "z" && !P.shiftKey) {
        P.preventDefault(), console.log("⌨️ Ctrl+Z pressed - Undo"), D();
        return;
      } else if (P.key === "y" || P.key === "z" && P.shiftKey) {
        P.preventDefault(), console.log("⌨️ Ctrl+Y or Ctrl+Shift+Z pressed - Redo"), T();
        return;
      }
    }
    if (!_) {
      console.log("🔍 handleKeydown - Autocomplete not shown, ignoring key");
      return;
    }
    switch (P.key) {
      case "ArrowDown":
        P.preventDefault(), n(9, g = (g + 1) % c.length), console.log("🔍 handleKeydown - ArrowDown, new selectedIndex:", g);
        break;
      case "ArrowUp":
        P.preventDefault(), n(9, g = g === 0 ? c.length - 1 : g - 1), console.log("🔍 handleKeydown - ArrowUp, new selectedIndex:", g);
        break;
      case "Enter":
        _ && (P.preventDefault(), console.log("🔍 handleKeydown - Enter pressed, selecting option:", c[g]), B(c[g]));
        break;
      case "Escape":
        n(10, _ = !1), console.log("🔍 handleKeydown - Escape pressed, hiding autocomplete");
        break;
      case "Tab":
        _ && (P.preventDefault(), console.log("🔍 handleKeydown - Tab pressed, selecting option:", c[g]), B(c[g]));
        break;
    }
  }
  function B(P) {
    console.log("🔍 selectAutocompleteOption - Selected option:", P), console.log("🔍 selectAutocompleteOption - Current value:", l), console.log("🔍 selectAutocompleteOption - Cursor position:", y);
    const te = l.substring(0, y), de = l.substring(y);
    console.log("🔍 selectAutocompleteOption - Before cursor:", te), console.log("🔍 selectAutocompleteOption - After cursor:", de);
    const ze = te.match(/([^\s]*)$/), Ae = ze ? ze[1] : "", Me = te.length - Ae.length;
    console.log("🔍 selectAutocompleteOption - Current word:", Ae), console.log("🔍 selectAutocompleteOption - Word start position:", Me);
    let be;
    if (P.type === "data_item")
      if (Ae.includes("{")) {
        const Le = te.match(/\{([^}]*?)(?:,\s*([^},]*))?$/);
        Le ? Le[2] ? be = te.substring(0, Le.index + Le[1].length + 2) + P.value : be = te.substring(0, Le.index + 1) + P.value : be = te + P.value;
      } else
        be = te + "{" + P.value;
    else
      be = te.substring(0, Me) + "#" + P.value;
    console.log("🔍 selectAutocompleteOption - Replacement:", be);
    const fe = be + de;
    console.log("🔍 selectAutocompleteOption - New value:", fe), n(0, l = fe), r(fe);
    const je = be.length;
    console.log("🔍 selectAutocompleteOption - New cursor position:", je), setTimeout(
      () => {
        u && (u.setSelectionRange(je, je), u.focus(), console.log("🔍 selectAutocompleteOption - Cursor position set"));
      },
      0
    ), n(10, _ = !1), console.log("🔍 selectAutocompleteOption - Autocomplete hidden");
  }
  function U(P) {
    Ge[P ? "unshift" : "push"](() => {
      u = P, n(5, u), n(0, l);
    });
  }
  function ce() {
    l = this.value, n(0, l);
  }
  function N(P) {
    Ge[P ? "unshift" : "push"](() => {
      m = P, n(6, m), n(0, l), n(11, w);
    });
  }
  const W = (P) => B(P), re = (P, te) => {
    (te.key === "Enter" || te.key === " ") && (te.preventDefault(), B(P));
  }, ue = (P) => n(9, g = P);
  function oe(P) {
    Ge[P ? "unshift" : "push"](() => {
      d = P, n(7, d);
    });
  }
  return e.$$set = (P) => {
    "value" in P && n(0, l = P.value), "onInput" in P && n(15, r = P.onInput), "width" in P && n(1, i = P.width), "dataFields" in P && n(16, o = P.dataFields), "onRun" in P && n(2, a = P.onRun), "onExplain" in P && n(3, s = P.onExplain), "onHistoryClick" in P && n(4, f = P.onHistoryClick);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*highlightedView, value*/
    65 && m && l !== void 0) {
      let P = l;
      n(6, m.innerText = of(P), m), lf({
        selector: `#${w}`,
        patterns: rf
      });
    }
    e.$$.dirty[0] & /*textarea, value*/
    33 && u && l !== void 0 && u.value !== l && (n(5, u.value = l, u), R(l));
  }, [
    l,
    i,
    a,
    s,
    f,
    u,
    m,
    d,
    c,
    g,
    _,
    w,
    E,
    I,
    B,
    r,
    o,
    U,
    ce,
    N,
    W,
    re,
    ue,
    oe
  ];
}
class ff extends ye {
  constructor(t) {
    super(), _e(
      this,
      t,
      sf,
      af,
      he,
      {
        value: 0,
        onInput: 15,
        width: 1,
        dataFields: 16,
        onRun: 2,
        onExplain: 3,
        onHistoryClick: 4
      },
      null,
      [-1, -1]
    );
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(t) {
    this.$$set({ value: t }), ot();
  }
  get onInput() {
    return this.$$.ctx[15];
  }
  set onInput(t) {
    this.$$set({ onInput: t }), ot();
  }
  get width() {
    return this.$$.ctx[1];
  }
  set width(t) {
    this.$$set({ width: t }), ot();
  }
  get dataFields() {
    return this.$$.ctx[16];
  }
  set dataFields(t) {
    this.$$set({ dataFields: t }), ot();
  }
  get onRun() {
    return this.$$.ctx[2];
  }
  set onRun(t) {
    this.$$set({ onRun: t }), ot();
  }
  get onExplain() {
    return this.$$.ctx[3];
  }
  set onExplain(t) {
    this.$$set({ onExplain: t }), ot();
  }
  get onHistoryClick() {
    return this.$$.ctx[4];
  }
  set onHistoryClick(t) {
    this.$$set({ onHistoryClick: t }), ot();
  }
}
function uf(e) {
  return e === 0 ? !0 : e;
}
function kt(e) {
  return uf(e) ? Array.isArray(e) ? (t) => e.map((n) => typeof n != "function" ? t[n] : n(t)) : typeof e != "function" ? (t) => t[e] : e : null;
}
function cf(e) {
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
function yr(e, t = {}) {
  return cf(Object.entries(e).filter(([n, l]) => l !== void 0 && t[n] === void 0));
}
function df(e, t = 300) {
  let n;
  return (...l) => {
    clearTimeout(n), n = setTimeout(() => {
      e.apply(this, l);
    }, t);
  };
}
function gf(e, t, { sort: n = !1 } = {}) {
  if (!Array.isArray(e))
    throw new TypeError(`The first argument of calcUniques() must be an array. You passed in a ${typeof e}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(t) || t === void 0 || t === null)
    throw new TypeError("The second argument of calcUniques() must be an object with field names as keys as accessor functions as values.");
  const l = {}, r = Object.keys(t), i = r.length;
  let o, a, s, f, u, d, m;
  const c = e.length;
  for (o = 0; o < i; o += 1) {
    for (m = /* @__PURE__ */ new Set(), f = r[o], u = t[f], a = 0; a < c; a += 1)
      if (d = u(e[a]), Array.isArray(d)) {
        const _ = d.length;
        for (s = 0; s < _; s += 1)
          m.add(d[s]);
      } else
        m.add(d);
    const g = Array.from(m);
    l[f] = n === !0 ? g.sort() : g;
  }
  return l;
}
function mf(e, t) {
  if (!Array.isArray(e))
    throw new TypeError(`The first argument of calcExtents() must be an array. You passed in a ${typeof e}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(t) || t === void 0 || t === null)
    throw new TypeError("The second argument of calcExtents() must be an object with field names as keys as accessor functions as values.");
  const n = {}, l = Object.keys(t), r = l.length;
  let i, o, a, s, f, u, d, m;
  const c = e.length;
  for (i = 0; i < r; i += 1) {
    for (s = l[i], d = t[s], f = null, u = null, o = 0; o < c; o += 1)
      if (m = d(e[o]), Array.isArray(m)) {
        const g = m.length;
        for (a = 0; a < g; a += 1)
          m[a] !== !1 && m[a] !== void 0 && m[a] !== null && Number.isNaN(m[a]) === !1 && ((f === null || m[a] < f) && (f = m[a]), (u === null || m[a] > u) && (u = m[a]));
      } else
        m !== !1 && m !== void 0 && m !== null && Number.isNaN(m) === !1 && ((f === null || m < f) && (f = m), (u === null || m > u) && (u = m));
    n[s] = [f, u];
  }
  return n;
}
function xn(e, t) {
  return e.length !== t.length ? !1 : e.every((n) => t.includes(n));
}
function jo(e) {
  return !!(typeof e.bandwidth == "function" || xn(Object.keys(e), ["domain", "range", "unknown", "copy"]));
}
function hf(e, t, n) {
  const l = Object.keys(n).reduce((i, o) => {
    const a = jo(n[o]) === !0 ? "ordinal" : "other";
    return i[a] || (i[a] = {}), i[a][o] = t[o], i;
  }, { ordinal: !1, other: !1 });
  let r = {};
  return l.ordinal && (r = gf(e, l.ordinal)), l.other && (r = { ...r, ...mf(e, l.other) }), r;
}
function bf(e = [], t) {
  return Array.isArray(t) === !0 ? t.map((n, l) => n === null ? e[l] : n) : e;
}
function El(e) {
  return function([n, l]) {
    return typeof l == "function" && (l = l(n[e])), n ? bf(n[e], l) : l;
  };
}
function Ol(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function _f(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Bo(e) {
  let t, n, l;
  e.length !== 2 ? (t = Ol, n = (a, s) => Ol(e(a), s), l = (a, s) => e(a) - s) : (t = e === Ol || e === _f ? e : yf, n = e, l = e);
  function r(a, s, f = 0, u = a.length) {
    if (f < u) {
      if (t(s, s) !== 0)
        return u;
      do {
        const d = f + u >>> 1;
        n(a[d], s) < 0 ? f = d + 1 : u = d;
      } while (f < u);
    }
    return f;
  }
  function i(a, s, f = 0, u = a.length) {
    if (f < u) {
      if (t(s, s) !== 0)
        return u;
      do {
        const d = f + u >>> 1;
        n(a[d], s) <= 0 ? f = d + 1 : u = d;
      } while (f < u);
    }
    return f;
  }
  function o(a, s, f = 0, u = a.length) {
    const d = r(a, s, f, u - 1);
    return d > f && l(a[d - 1], s) > -l(a[d], s) ? d - 1 : d;
  }
  return { left: r, center: o, right: i };
}
function yf() {
  return 0;
}
function pf(e) {
  return e === null ? NaN : +e;
}
const kf = Bo(Ol), wf = kf.right;
Bo(pf).center;
const vf = wf;
class ki extends Map {
  constructor(t, n = Cf) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [l, r] of t)
        this.set(l, r);
  }
  get(t) {
    return super.get(wi(this, t));
  }
  has(t) {
    return super.has(wi(this, t));
  }
  set(t, n) {
    return super.set(xf(this, t), n);
  }
  delete(t) {
    return super.delete(Sf(this, t));
  }
}
function wi({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) ? e.get(l) : n;
}
function xf({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) ? e.get(l) : (e.set(l, n), n);
}
function Sf({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) && (n = e.get(l), e.delete(l)), n;
}
function Cf(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Mf = Math.sqrt(50), Lf = Math.sqrt(10), Rf = Math.sqrt(2);
function Gl(e, t, n) {
  const l = (t - e) / Math.max(0, n), r = Math.floor(Math.log10(l)), i = l / Math.pow(10, r), o = i >= Mf ? 10 : i >= Lf ? 5 : i >= Rf ? 2 : 1;
  let a, s, f;
  return r < 0 ? (f = Math.pow(10, -r) / o, a = Math.round(e * f), s = Math.round(t * f), a / f < e && ++a, s / f > t && --s, f = -f) : (f = Math.pow(10, r) * o, a = Math.round(e / f), s = Math.round(t / f), a * f < e && ++a, s * f > t && --s), s < a && 0.5 <= n && n < 2 ? Gl(e, t, n * 2) : [a, s, f];
}
function Tf(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0))
    return [];
  if (e === t)
    return [e];
  const l = t < e, [r, i, o] = l ? Gl(t, e, n) : Gl(e, t, n);
  if (!(i >= r))
    return [];
  const a = i - r + 1, s = new Array(a);
  if (l)
    if (o < 0)
      for (let f = 0; f < a; ++f)
        s[f] = (i - f) / -o;
    else
      for (let f = 0; f < a; ++f)
        s[f] = (i - f) * o;
  else if (o < 0)
    for (let f = 0; f < a; ++f)
      s[f] = (r + f) / -o;
  else
    for (let f = 0; f < a; ++f)
      s[f] = (r + f) * o;
  return s;
}
function vr(e, t, n) {
  return t = +t, e = +e, n = +n, Gl(e, t, n)[2];
}
function Ef(e, t, n) {
  t = +t, e = +e, n = +n;
  const l = t < e, r = l ? vr(t, e, n) : vr(e, t, n);
  return (l ? -1 : 1) * (r < 0 ? 1 / -r : r);
}
function at(e, t, n) {
  e = +e, t = +t, n = (r = arguments.length) < 2 ? (t = e, e = 0, 1) : r < 3 ? 1 : +n;
  for (var l = -1, r = Math.max(0, Math.ceil((t - e) / n)) | 0, i = new Array(r); ++l < r; )
    i[l] = e + l * n;
  return i;
}
function Xl(e, t) {
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
const vi = Symbol("implicit");
function Zl() {
  var e = new ki(), t = [], n = [], l = vi;
  function r(i) {
    let o = e.get(i);
    if (o === void 0) {
      if (l !== vi)
        return l;
      e.set(i, o = t.push(i) - 1);
    }
    return n[o % n.length];
  }
  return r.domain = function(i) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new ki();
    for (const o of i)
      e.has(o) || e.set(o, t.push(o) - 1);
    return r;
  }, r.range = function(i) {
    return arguments.length ? (n = Array.from(i), r) : n.slice();
  }, r.unknown = function(i) {
    return arguments.length ? (l = i, r) : l;
  }, r.copy = function() {
    return Zl(t, n).unknown(l);
  }, Xl.apply(r, arguments), r;
}
function zr() {
  var e = Zl().unknown(void 0), t = e.domain, n = e.range, l = 0, r = 1, i, o, a = !1, s = 0, f = 0, u = 0.5;
  delete e.unknown;
  function d() {
    var m = t().length, c = r < l, g = c ? r : l, _ = c ? l : r;
    i = (_ - g) / Math.max(1, m - s + f * 2), a && (i = Math.floor(i)), g += (_ - g - i * (m - s)) * u, o = i * (1 - s), a && (g = Math.round(g), o = Math.round(o));
    var y = at(m).map(function(w) {
      return g + i * w;
    });
    return n(c ? y.reverse() : y);
  }
  return e.domain = function(m) {
    return arguments.length ? (t(m), d()) : t();
  }, e.range = function(m) {
    return arguments.length ? ([l, r] = m, l = +l, r = +r, d()) : [l, r];
  }, e.rangeRound = function(m) {
    return [l, r] = m, l = +l, r = +r, a = !0, d();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return i;
  }, e.round = function(m) {
    return arguments.length ? (a = !!m, d()) : a;
  }, e.padding = function(m) {
    return arguments.length ? (s = Math.min(1, f = +m), d()) : s;
  }, e.paddingInner = function(m) {
    return arguments.length ? (s = Math.min(1, m), d()) : s;
  }, e.paddingOuter = function(m) {
    return arguments.length ? (f = +m, d()) : f;
  }, e.align = function(m) {
    return arguments.length ? (u = Math.max(0, Math.min(1, m)), d()) : u;
  }, e.copy = function() {
    return zr(t(), [l, r]).round(a).paddingInner(s).paddingOuter(f).align(u);
  }, Xl.apply(d(), arguments);
}
function zf(e) {
  return function() {
    return e;
  };
}
function Af(e) {
  return +e;
}
var xi = [0, 1];
function Ze(e) {
  return e;
}
function xr(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : zf(isNaN(t) ? NaN : 0.5);
}
function Df(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(l) {
    return Math.max(e, Math.min(t, l));
  };
}
function qf(e, t, n) {
  var l = e[0], r = e[1], i = t[0], o = t[1];
  return r < l ? (l = xr(r, l), i = n(o, i)) : (l = xr(l, r), i = n(i, o)), function(a) {
    return i(l(a));
  };
}
function Nf(e, t, n) {
  var l = Math.min(e.length, t.length) - 1, r = new Array(l), i = new Array(l), o = -1;
  for (e[l] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < l; )
    r[o] = xr(e[o], e[o + 1]), i[o] = n(t[o], t[o + 1]);
  return function(a) {
    var s = vf(e, a, 1, l) - 1;
    return i[s](r[s](a));
  };
}
function Qo(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Vo() {
  var e = xi, t = xi, n = Tr, l, r, i, o = Ze, a, s, f;
  function u() {
    var m = Math.min(e.length, t.length);
    return o !== Ze && (o = Df(e[0], e[m - 1])), a = m > 2 ? Nf : qf, s = f = null, d;
  }
  function d(m) {
    return m == null || isNaN(m = +m) ? i : (s || (s = a(e.map(l), t, n)))(l(o(m)));
  }
  return d.invert = function(m) {
    return o(r((f || (f = a(t, e.map(l), Vl)))(m)));
  }, d.domain = function(m) {
    return arguments.length ? (e = Array.from(m, Af), u()) : e.slice();
  }, d.range = function(m) {
    return arguments.length ? (t = Array.from(m), u()) : t.slice();
  }, d.rangeRound = function(m) {
    return t = Array.from(m), n = Cs, u();
  }, d.clamp = function(m) {
    return arguments.length ? (o = m ? !0 : Ze, u()) : o !== Ze;
  }, d.interpolate = function(m) {
    return arguments.length ? (n = m, u()) : n;
  }, d.unknown = function(m) {
    return arguments.length ? (i = m, d) : i;
  }, function(m, c) {
    return l = m, r = c, u();
  };
}
function Of() {
  return Vo()(Ze, Ze);
}
function Ff(e, t, n, l) {
  var r = Ef(e, t, n), i;
  switch (l = Pl(l ?? ",f"), l.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return l.precision == null && !isNaN(i = Ja(r, o)) && (l.precision = i), No(l, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      l.precision == null && !isNaN(i = $a(r, Math.max(Math.abs(e), Math.abs(t)))) && (l.precision = i - (l.type === "e"));
      break;
    }
    case "f":
    case "%": {
      l.precision == null && !isNaN(i = Oo(r)) && (l.precision = i - (l.type === "%") * 2);
      break;
    }
  }
  return se(l);
}
function Go(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var l = t();
    return Tf(l[0], l[l.length - 1], n ?? 10);
  }, e.tickFormat = function(n, l) {
    var r = t();
    return Ff(r[0], r[r.length - 1], n ?? 10, l);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var l = t(), r = 0, i = l.length - 1, o = l[r], a = l[i], s, f, u = 10;
    for (a < o && (f = o, o = a, a = f, f = r, r = i, i = f); u-- > 0; ) {
      if (f = vr(o, a, n), f === s)
        return l[r] = o, l[i] = a, t(l);
      if (f > 0)
        o = Math.floor(o / f) * f, a = Math.ceil(a / f) * f;
      else if (f < 0)
        o = Math.ceil(o * f) / f, a = Math.floor(a * f) / f;
      else
        break;
      s = f;
    }
    return e;
  }, e;
}
function wt() {
  var e = Of();
  return e.copy = function() {
    return Qo(e, wt());
  }, Xl.apply(e, arguments), Go(e);
}
function Si(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function Hf(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function If(e) {
  return e < 0 ? -e * e : e * e;
}
function Pf(e) {
  var t = e(Ze, Ze), n = 1;
  function l() {
    return n === 1 ? e(Ze, Ze) : n === 0.5 ? e(Hf, If) : e(Si(n), Si(1 / n));
  }
  return t.exponent = function(r) {
    return arguments.length ? (n = +r, l()) : n;
  }, Go(t);
}
function Wo() {
  var e = Pf(Vo());
  return e.copy = function() {
    return Qo(e, Wo()).exponent(e.exponent());
  }, Xl.apply(e, arguments), e;
}
function jf() {
  return Wo.apply(null, arguments).exponent(0.5);
}
const Sn = {
  x: wt,
  y: wt,
  z: wt,
  r: jf
};
function Bf(e) {
  return e.constant ? "symlog" : e.base ? "log" : e.exponent ? e.exponent() === 0.5 ? "sqrt" : "pow" : "other";
}
function Ci(e) {
  return e;
}
function Qf(e) {
  return (t) => Math.log(e * t);
}
function Vf(e) {
  return (t) => e * Math.exp(t);
}
function Gf(e) {
  return (t) => Math.sign(t) * Math.log1p(Math.abs(t / e));
}
function Wf(e) {
  return (t) => Math.sign(t) * Math.expm1(Math.abs(t)) * e;
}
function zl(e) {
  return function(n) {
    return n < 0 ? -Math.pow(-n, e) : Math.pow(n, e);
  };
}
function Kf(e) {
  const t = Bf(e);
  if (t === "log") {
    const n = Math.sign(e.domain()[0]);
    return { lift: Qf(n), ground: Vf(n), scaleType: t };
  }
  return t === "pow" ? { lift: zl(1), ground: zl(1 / 1), scaleType: t } : t === "sqrt" ? { lift: zl(0.5), ground: zl(1 / 0.5), scaleType: t } : t === "symlog" ? { lift: Gf(1), ground: Wf(1), scaleType: t } : { lift: Ci, ground: Ci, scaleType: t };
}
function Wl(e) {
  return e.replace(/^\w/, (t) => t.toUpperCase());
}
function Fe(e, t = "") {
  return `scale${Wl(t)}${Wl(e)}`;
}
function Ko(e) {
  if (typeof e.bandwidth == "function")
    return typeof e.paddingInner == "function" ? Fe("band") : Fe("point");
  if (xn(Object.keys(e), ["domain", "range", "unknown", "copy"]))
    return Fe("ordinal");
  let t = "";
  if (e.interpolator && (e.domain().length === 3 ? t = "diverging" : t = "sequential"), e.quantiles)
    return Fe("quantile", t);
  if (e.thresholds)
    return Fe("quantize", t);
  if (e.constant)
    return Fe("symlog", t);
  if (e.base)
    return Fe("log", t);
  if (e.exponent)
    return e.exponent() === 0.5 ? Fe("sqrt", t) : Fe("pow", t);
  if (xn(Object.keys(e), ["domain", "range", "invertExtent", "unknown", "copy"]))
    return Fe("threshold");
  if (xn(Object.keys(e), ["invert", "range", "domain", "unknown", "copy", "ticks", "tickFormat", "nice"]))
    return Fe("identity");
  if (xn(Object.keys(e), [
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
    return Fe("radial");
  if (t)
    return Fe(t);
  if (e.domain()[0] instanceof Date) {
    const n = /* @__PURE__ */ new Date();
    let l;
    return n.getDay = () => l = "time", n.getUTCDay = () => l = "utc", e.tickFormat(0, "%a")(n), Fe(l);
  }
  return Fe("linear");
}
const Yf = ["scaleThreshold", "scaleQuantile", "scaleQuantize", "scaleSequentialQuantile"];
function Uf(e, t) {
  if (typeof e.range != "function")
    throw console.log(e), new Error("Scale method `range` must be a function");
  if (typeof e.domain != "function")
    throw new Error("Scale method `domain` must be a function");
  if (!Array.isArray(t) || Yf.includes(Ko(e)) || jo(e) === !0)
    return e.domain();
  const { lift: n, ground: l } = Kf(e), r = e.domain()[0], i = Object.prototype.toString.call(r) === "[object Date]", [o, a] = e.domain().map((c) => n(i ? c.getTime() : c)), [s, f] = e.range(), u = t[0] || 0, d = t[1] || 0, m = (a - o) / (Math.abs(f - s) - u - d);
  return [o - u * m, d * m + a].map((c) => l(i ? new Date(c) : c));
}
function Xf(e, t, n, l, r) {
  let i, o;
  return r === !0 ? (i = 0, o = 100) : (i = e === "r" ? 1 : 0, o = e === "y" ? n : e === "r" ? 25 : t), l === !0 ? [o, i] : [i, o];
}
function Zf(e, t, n, l, r, i) {
  return r ? typeof r == "function" ? r({ width: t, height: n }) : r : Xf(e, t, n, l, i);
}
function Al(e) {
  return function([n, l, r, i, o, a, s, f, u, d]) {
    if (l === null)
      return null;
    const m = Zf(e, s, f, a, u, d), c = n === Sn[e] ? n() : n.copy();
    return c.domain(r), (!c.interpolator || typeof c.interpolator == "function" && c.interpolator().name.startsWith("identity")) && c.range(m), i && c.domain(Uf(c, i)), (o === !0 || typeof o == "number") && (typeof c.nice == "function" ? c.nice(typeof o == "number" ? o : void 0) : console.error(`[Layer Cake] You set \`${e}Nice: true\` but the ${e}Scale does not have a \`.nice\` method. Ignoring...`)), c;
  };
}
function Dl([e, t]) {
  return (n) => {
    const l = e(n);
    return Array.isArray(l) ? l.map((r) => t(r)) : t(l);
  };
}
function ql([e]) {
  if (typeof e == "function") {
    if (typeof e.range == "function")
      return e.range();
    console.error("[LayerCake] Your scale doesn't have a `.range` method?");
  }
  return null;
}
const Xe = "    ";
function Jf(e) {
  const { r: t, g: n, b: l, opacity: r } = Bl(e);
  return [t, n, l].every((i) => i >= 0 && i <= 255) ? { r: t, g: n, b: l, o: r } : !1;
}
function $f({ r: e, g: t, b: n }) {
  return (0.2126 * e + 0.7152 * t + 0.0722 * n) / 255 > 0.6 ? "black" : "white";
}
function eu(e) {
  console.log("/********* LayerCake Debug ************/"), console.log("Bounding box:"), tu(e.boundingBox), console.log(`Scales:
`), Object.keys(e.activeGetters).forEach((t) => {
    nu(t, e[`${t}Scale`], e[t]);
  }), console.log(`/************ End LayerCake Debug ***************/
`);
}
function tu(e) {
  Object.entries(e).forEach(([t, n]) => {
    console.log(`${Xe}${t}:`, n);
  });
}
function nu(e, t, n) {
  const l = Ko(t);
  console.log(`${Xe}${e}:`), console.log(`${Xe}${Xe}Accessor: "${n.toString()}"`), console.log(`${Xe}${Xe}Type: ${l}`), Mi(t, "domain"), Mi(t, "range", " ");
}
function Mi(e, t, n = "") {
  const l = e[t](), r = ru(l);
  r ? lu(r, t, l) : console.log(`${Xe}${Xe}${Wl(t)}:${n}`, l);
}
function lu(e, t, n) {
  console.log(
    `${Xe}${Xe}${Wl(t)}:    %cArray%c(${n.length}) ` + e[0] + "%c ]",
    "color: #1377e4",
    "color: #737373",
    "color: #1478e4",
    ...e[1],
    "color: #1478e4"
  );
}
function ru(e) {
  const t = [], n = e.map((l, r) => {
    const i = Jf(l);
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
      (l) => `background-color: rgba(${l.r}, ${l.g}, ${l.b}, ${l.o}); color:${$f(l)};`
    )
  ] : null;
}
const iu = (e) => ({
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
}), Li = (e) => ({
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
function Ri(e) {
  let t, n, l;
  const r = (
    /*#slots*/
    e[153].default
  ), i = et(
    r,
    e,
    /*$$scope*/
    e[152],
    Li
  );
  return {
    c() {
      t = p("div"), i && i.c(), h(t, "class", "layercake-container svelte-vhzpsp"), Hl(() => (
        /*div_elementresize_handler*/
        e[155].call(t)
      )), Q(
        t,
        "position",
        /*position*/
        e[5]
      ), Q(
        t,
        "top",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), Q(
        t,
        "right",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), Q(
        t,
        "bottom",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), Q(
        t,
        "left",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), Q(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[4] === !1 ? "none" : null
      );
    },
    m(o, a) {
      L(o, t, a), i && i.m(t, null), e[154](t), n = ua(
        t,
        /*div_elementresize_handler*/
        e[155].bind(t)
      ), l = !0;
    },
    p(o, a) {
      i && i.p && (!l || a[0] & /*element, $activeGetters_d, $_x, $_y, $_z, $_r, $_custom, $_data, $_xNice, $_yNice, $_zNice, $_rNice, $_xReverse, $_yReverse, $_zReverse, $_rReverse, $_xPadding, $_yPadding, $_zPadding, $_rPadding, $_flatData, $_config, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
      2147483588 | a[1] & /*$width_d, $height_d, $aspectRatio_d, $_containerWidth, $_containerHeight, $_percentRange, $padding_d, $extents_d, $xDomain_d, $yDomain_d, $zDomain_d, $rDomain_d, $xRange_d, $yRange_d, $zRange_d, $rRange_d, $xGet_d, $yGet_d, $zGet_d, $rGet_d*/
      1048575 | a[4] & /*$$scope*/
      268435456) && nt(
        i,
        r,
        o,
        /*$$scope*/
        o[152],
        l ? tt(
          r,
          /*$$scope*/
          o[152],
          a,
          iu
        ) : lt(
          /*$$scope*/
          o[152]
        ),
        Li
      ), a[0] & /*position*/
      32 && Q(
        t,
        "position",
        /*position*/
        o[5]
      ), a[0] & /*position*/
      32 && Q(
        t,
        "top",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && Q(
        t,
        "right",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && Q(
        t,
        "bottom",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && Q(
        t,
        "left",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), a[0] & /*pointerEvents*/
      16 && Q(
        t,
        "pointer-events",
        /*pointerEvents*/
        o[4] === !1 ? "none" : null
      );
    },
    i(o) {
      l || (C(i, o), l = !0);
    },
    o(o) {
      z(i, o), l = !1;
    },
    d(o) {
      o && M(t), i && i.d(o), e[154](null), n();
    }
  };
}
function ou(e) {
  let t, n, l = (
    /*ssr*/
    (e[3] === !0 || typeof window < "u") && Ri(e)
  );
  return {
    c() {
      l && l.c(), t = ve();
    },
    m(r, i) {
      l && l.m(r, i), L(r, t, i), n = !0;
    },
    p(r, i) {
      /*ssr*/
      r[3] === !0 || typeof window < "u" ? l ? (l.p(r, i), i[0] & /*ssr*/
      8 && C(l, 1)) : (l = Ri(r), l.c(), C(l, 1), l.m(t.parentNode, t)) : l && ($(), z(l, 1, 1, () => {
        l = null;
      }), ee());
    },
    i(r) {
      n || (C(l), n = !0);
    },
    o(r) {
      z(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && M(t);
    }
  };
}
function au(e, t, n) {
  let l, r, i, o, a, s, f, u, d, m, c, g, _, y, w, x, S, O, A, R, D, T, E, v, I, B, U, ce, N, W, re, ue, oe, P, te, de, ze, Ae, Me, be, fe, je, Le, De, ge, vt, Ie, Re, J, me, Oe, Be, st, qe, Ne, qn, ft, ut, Nn, On, Fn, Hn, { $$slots: $l = {}, $$scope: In } = t;
  const er = df(eu, 200);
  let { ssr: xt = !1 } = t, { pointerEvents: Tt = !0 } = t, { position: Pn = "relative" } = t, { percentRange: Et = !1 } = t, { width: Jt = void 0 } = t, { height: $t = void 0 } = t, { containerWidth: ct = Jt || 100 } = t, { containerHeight: dt = $t || 100 } = t, { element: zt = void 0 } = t, { x: gt = void 0 } = t, { y: mt = void 0 } = t, { z: ht = void 0 } = t, { r: j = void 0 } = t, { data: pe = [] } = t, { xDomain: Se = void 0 } = t, { yDomain: Ce = void 0 } = t, { zDomain: Ke = void 0 } = t, { rDomain: Ye = void 0 } = t, { xNice: bt = !1 } = t, { yNice: jn = !1 } = t, { zNice: Bn = !1 } = t, { rNice: Qn = !1 } = t, { xPadding: Vn = void 0 } = t, { yPadding: Gn = void 0 } = t, { zPadding: Wn = void 0 } = t, { rPadding: Kn = void 0 } = t, { xScale: Yn = Sn.x } = t, { yScale: en = Sn.y } = t, { zScale: Un = Sn.z } = t, { rScale: Xn = Sn.r } = t, { xRange: At = void 0 } = t, { yRange: Dt = void 0 } = t, { zRange: qt = void 0 } = t, { rRange: Nt = void 0 } = t, { xReverse: Zn = !1 } = t, { yReverse: Jn = void 0 } = t, { zReverse: $n = !1 } = t, { rReverse: el = !1 } = t, { padding: tl = {} } = t, { extents: nl = {} } = t, { flatData: ll = void 0 } = t, { custom: rl = {} } = t, { debug: tr = !1 } = t, nr = !1;
  Ut(() => {
    nr = !0;
  });
  const ae = {}, _t = ne(Et);
  H(e, _t, (k) => n(33, ge = k));
  const Ot = ne(ct);
  H(e, Ot, (k) => n(32, De = k));
  const Ft = ne(dt);
  H(e, Ft, (k) => n(31, Le = k));
  const il = ne(yr(nl));
  H(e, il, (k) => n(170, je = k));
  const ol = ne(pe);
  H(e, ol, (k) => n(30, fe = k));
  const tn = ne(ll || pe);
  H(e, tn, (k) => n(29, be = k));
  const al = ne(tl);
  H(e, al, (k) => n(169, Me = k));
  const Ht = ne(kt(gt));
  H(e, Ht, (k) => n(28, Ae = k));
  const It = ne(kt(mt));
  H(e, It, (k) => n(27, ze = k));
  const Pt = ne(kt(ht));
  H(e, Pt, (k) => n(26, de = k));
  const jt = ne(kt(j));
  H(e, jt, (k) => n(25, te = k));
  const sl = ne(Se);
  H(e, sl, (k) => n(168, P = k));
  const fl = ne(Ce);
  H(e, fl, (k) => n(167, oe = k));
  const ul = ne(Ke);
  H(e, ul, (k) => n(166, ue = k));
  const cl = ne(Ye);
  H(e, cl, (k) => n(165, re = k));
  const nn = ne(bt);
  H(e, nn, (k) => n(24, W = k));
  const ln = ne(jn);
  H(e, ln, (k) => n(23, N = k));
  const rn = ne(Bn);
  H(e, rn, (k) => n(22, ce = k));
  const on = ne(Qn);
  H(e, on, (k) => n(21, U = k));
  const an = ne(Zn);
  H(e, an, (k) => n(20, B = k));
  const sn = ne(l);
  H(e, sn, (k) => n(19, I = k));
  const fn = ne($n);
  H(e, fn, (k) => n(18, v = k));
  const un = ne(el);
  H(e, un, (k) => n(17, E = k));
  const cn = ne(Vn);
  H(e, cn, (k) => n(16, T = k));
  const dn = ne(Gn);
  H(e, dn, (k) => n(15, D = k));
  const gn = ne(Wn);
  H(e, gn, (k) => n(14, R = k));
  const mn = ne(Kn);
  H(e, mn, (k) => n(13, A = k));
  const dl = ne(At);
  H(e, dl, (k) => n(164, O = k));
  const gl = ne(Dt);
  H(e, gl, (k) => n(163, S = k));
  const ml = ne(qt);
  H(e, ml, (k) => n(162, x = k));
  const hl = ne(Nt);
  H(e, hl, (k) => n(161, w = k));
  const hn = ne(Yn);
  H(e, hn, (k) => n(160, y = k));
  const bn = ne(en);
  H(e, bn, (k) => n(159, _ = k));
  const _n = ne(Un);
  H(e, _n, (k) => n(158, g = k));
  const yn = ne(Xn);
  H(e, yn, (k) => n(157, c = k));
  const bl = ne(ae);
  H(e, bl, (k) => n(11, d = k));
  const _l = ne(rl);
  H(e, _l, (k) => n(12, m = k));
  const yl = xe([Ht, It, Pt, jt], ([k, it, Ue, Te]) => {
    const St = {};
    return k && (St.x = k), it && (St.y = it), Ue && (St.z = Ue), Te && (St.r = Te), St;
  });
  H(e, yl, (k) => n(10, f = k));
  const pl = xe([al, Ot, Ft], ([k]) => Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, k));
  H(e, pl, (k) => n(37, J = k));
  const kl = xe([Ot, Ft, pl], ([k, it, Ue]) => {
    const Te = {};
    return Te.top = Ue.top, Te.right = k - Ue.right, Te.bottom = it - Ue.bottom, Te.left = Ue.left, Te.width = Te.right - Te.left, Te.height = Te.bottom - Te.top, Te.width <= 0 && nr === !0 && console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?"), Te.height <= 0 && nr === !0 && console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?"), Te;
  });
  H(e, kl, (k) => n(151, u = k));
  const yt = xe([kl], ([k]) => k.width);
  H(e, yt, (k) => n(34, vt = k));
  const pt = xe([kl], ([k]) => k.height);
  H(e, pt, (k) => n(35, Ie = k));
  const Qe = xe([tn, yl, il, hn, bn, yn, _n], ([k, it, Ue, Te, St, na, la]) => {
    const ra = {
      x: Te,
      y: St,
      r: na,
      z: la
    }, dr = yr(it, Ue), ia = Object.fromEntries(Object.keys(dr).map((gr) => [gr, ra[gr]]));
    return Object.keys(dr).length > 0 ? { ...hf(k, dr, ia), ...Ue } : {};
  });
  H(e, Qe, (k) => n(38, me = k));
  const wl = xe([Qe, sl], El("x"));
  H(e, wl, (k) => n(39, Oe = k));
  const vl = xe([Qe, fl], El("y"));
  H(e, vl, (k) => n(40, Be = k));
  const xl = xe([Qe, ul], El("z"));
  H(e, xl, (k) => n(41, st = k));
  const Sl = xe([Qe, cl], El("r"));
  H(e, Sl, (k) => n(42, qe = k));
  const pn = xe(
    [
      hn,
      Qe,
      wl,
      cn,
      nn,
      an,
      yt,
      pt,
      dl,
      _t
    ],
    Al("x")
  );
  H(e, pn, (k) => n(9, s = k));
  const lr = xe([Ht, pn], Dl);
  H(e, lr, (k) => n(47, Nn = k));
  const kn = xe(
    [
      bn,
      Qe,
      vl,
      dn,
      ln,
      sn,
      yt,
      pt,
      gl,
      _t
    ],
    Al("y")
  );
  H(e, kn, (k) => n(8, a = k));
  const rr = xe([It, kn], Dl);
  H(e, rr, (k) => n(48, On = k));
  const wn = xe(
    [
      _n,
      Qe,
      xl,
      gn,
      rn,
      fn,
      yt,
      pt,
      ml,
      _t
    ],
    Al("z")
  );
  H(e, wn, (k) => n(7, o = k));
  const ir = xe([Pt, wn], Dl);
  H(e, ir, (k) => n(49, Fn = k));
  const vn = xe(
    [
      yn,
      Qe,
      Sl,
      mn,
      on,
      un,
      yt,
      pt,
      hl,
      _t
    ],
    Al("r")
  );
  H(e, vn, (k) => n(6, i = k));
  const or = xe([jt, vn], Dl);
  H(e, or, (k) => n(50, Hn = k));
  const ar = xe([pn], ql);
  H(e, ar, (k) => n(43, Ne = k));
  const sr = xe([kn], ql);
  H(e, sr, (k) => n(44, qn = k));
  const fr = xe([wn], ql);
  H(e, fr, (k) => n(45, ft = k));
  const ur = xe([vn], ql);
  H(e, ur, (k) => n(46, ut = k));
  const cr = xe([yt, pt], ([k, it]) => k / it);
  H(e, cr, (k) => n(36, Re = k));
  function ea(k) {
    Ge[k ? "unshift" : "push"](() => {
      zt = k, n(2, zt);
    });
  }
  function ta() {
    ct = this.clientWidth, dt = this.clientHeight, n(0, ct), n(1, dt);
  }
  return e.$$set = (k) => {
    "ssr" in k && n(3, xt = k.ssr), "pointerEvents" in k && n(4, Tt = k.pointerEvents), "position" in k && n(5, Pn = k.position), "percentRange" in k && n(111, Et = k.percentRange), "width" in k && n(112, Jt = k.width), "height" in k && n(113, $t = k.height), "containerWidth" in k && n(0, ct = k.containerWidth), "containerHeight" in k && n(1, dt = k.containerHeight), "element" in k && n(2, zt = k.element), "x" in k && n(114, gt = k.x), "y" in k && n(115, mt = k.y), "z" in k && n(116, ht = k.z), "r" in k && n(117, j = k.r), "data" in k && n(118, pe = k.data), "xDomain" in k && n(119, Se = k.xDomain), "yDomain" in k && n(120, Ce = k.yDomain), "zDomain" in k && n(121, Ke = k.zDomain), "rDomain" in k && n(122, Ye = k.rDomain), "xNice" in k && n(123, bt = k.xNice), "yNice" in k && n(124, jn = k.yNice), "zNice" in k && n(125, Bn = k.zNice), "rNice" in k && n(126, Qn = k.rNice), "xPadding" in k && n(127, Vn = k.xPadding), "yPadding" in k && n(128, Gn = k.yPadding), "zPadding" in k && n(129, Wn = k.zPadding), "rPadding" in k && n(130, Kn = k.rPadding), "xScale" in k && n(131, Yn = k.xScale), "yScale" in k && n(132, en = k.yScale), "zScale" in k && n(133, Un = k.zScale), "rScale" in k && n(134, Xn = k.rScale), "xRange" in k && n(135, At = k.xRange), "yRange" in k && n(136, Dt = k.yRange), "zRange" in k && n(137, qt = k.zRange), "rRange" in k && n(138, Nt = k.rRange), "xReverse" in k && n(139, Zn = k.xReverse), "yReverse" in k && n(140, Jn = k.yReverse), "zReverse" in k && n(141, $n = k.zReverse), "rReverse" in k && n(142, el = k.rReverse), "padding" in k && n(143, tl = k.padding), "extents" in k && n(144, nl = k.extents), "flatData" in k && n(145, ll = k.flatData), "custom" in k && n(146, rl = k.custom), "debug" in k && n(147, tr = k.debug), "$$scope" in k && n(152, In = k.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[4] & /*yReverse, yScale*/
    65792 && n(150, l = typeof Jn > "u" ? typeof en.bandwidth != "function" : Jn), e.$$.dirty[3] & /*x*/
    2097152 && gt && n(148, ae.x = gt, ae), e.$$.dirty[3] & /*y*/
    4194304 && mt && n(148, ae.y = mt, ae), e.$$.dirty[3] & /*z*/
    8388608 && ht && n(148, ae.z = ht, ae), e.$$.dirty[3] & /*r*/
    16777216 && j && n(148, ae.r = j, ae), e.$$.dirty[3] & /*xDomain*/
    67108864 && Se && n(148, ae.xDomain = Se, ae), e.$$.dirty[3] & /*yDomain*/
    134217728 && Ce && n(148, ae.yDomain = Ce, ae), e.$$.dirty[3] & /*zDomain*/
    268435456 && Ke && n(148, ae.zDomain = Ke, ae), e.$$.dirty[3] & /*rDomain*/
    536870912 && Ye && n(148, ae.rDomain = Ye, ae), e.$$.dirty[4] & /*xRange*/
    2048 && At && n(148, ae.xRange = At, ae), e.$$.dirty[4] & /*yRange*/
    4096 && Dt && n(148, ae.yRange = Dt, ae), e.$$.dirty[4] & /*zRange*/
    8192 && qt && n(148, ae.zRange = qt, ae), e.$$.dirty[4] & /*rRange*/
    16384 && Nt && n(148, ae.rRange = Nt, ae), e.$$.dirty[3] & /*percentRange*/
    262144 && ie(_t, ge = Et, ge), e.$$.dirty[0] & /*containerWidth*/
    1 && ie(Ot, De = ct, De), e.$$.dirty[0] & /*containerHeight*/
    2 && ie(Ft, Le = dt, Le), e.$$.dirty[4] & /*extents*/
    1048576 && ie(il, je = yr(nl), je), e.$$.dirty[3] & /*data*/
    33554432 && ie(ol, fe = pe, fe), e.$$.dirty[3] & /*data*/
    33554432 | e.$$.dirty[4] & /*flatData*/
    2097152 && ie(tn, be = ll || pe, be), e.$$.dirty[4] & /*padding*/
    524288 && ie(al, Me = tl, Me), e.$$.dirty[3] & /*x*/
    2097152 && ie(Ht, Ae = kt(gt), Ae), e.$$.dirty[3] & /*y*/
    4194304 && ie(It, ze = kt(mt), ze), e.$$.dirty[3] & /*z*/
    8388608 && ie(Pt, de = kt(ht), de), e.$$.dirty[3] & /*r*/
    16777216 && ie(jt, te = kt(j), te), e.$$.dirty[3] & /*xDomain*/
    67108864 && ie(sl, P = Se, P), e.$$.dirty[3] & /*yDomain*/
    134217728 && ie(fl, oe = Ce, oe), e.$$.dirty[3] & /*zDomain*/
    268435456 && ie(ul, ue = Ke, ue), e.$$.dirty[3] & /*rDomain*/
    536870912 && ie(cl, re = Ye, re), e.$$.dirty[3] & /*xNice*/
    1073741824 && ie(nn, W = bt, W), e.$$.dirty[4] & /*yNice*/
    1 && ie(ln, N = jn, N), e.$$.dirty[4] & /*zNice*/
    2 && ie(rn, ce = Bn, ce), e.$$.dirty[4] & /*rNice*/
    4 && ie(on, U = Qn, U), e.$$.dirty[4] & /*xReverse*/
    32768 && ie(an, B = Zn, B), e.$$.dirty[4] & /*yReverseValue*/
    67108864 && ie(sn, I = l, I), e.$$.dirty[4] & /*zReverse*/
    131072 && ie(fn, v = $n, v), e.$$.dirty[4] & /*rReverse*/
    262144 && ie(un, E = el, E), e.$$.dirty[4] & /*xPadding*/
    8 && ie(cn, T = Vn, T), e.$$.dirty[4] & /*yPadding*/
    16 && ie(dn, D = Gn, D), e.$$.dirty[4] & /*zPadding*/
    32 && ie(gn, R = Wn, R), e.$$.dirty[4] & /*rPadding*/
    64 && ie(mn, A = Kn, A), e.$$.dirty[4] & /*xRange*/
    2048 && ie(dl, O = At, O), e.$$.dirty[4] & /*yRange*/
    4096 && ie(gl, S = Dt, S), e.$$.dirty[4] & /*zRange*/
    8192 && ie(ml, x = qt, x), e.$$.dirty[4] & /*rRange*/
    16384 && ie(hl, w = Nt, w), e.$$.dirty[4] & /*xScale*/
    128 && ie(hn, y = Yn, y), e.$$.dirty[4] & /*yScale*/
    256 && ie(bn, _ = en, _), e.$$.dirty[4] & /*zScale*/
    512 && ie(_n, g = Un, g), e.$$.dirty[4] & /*rScale*/
    1024 && ie(yn, c = Xn, c), e.$$.dirty[4] & /*custom*/
    4194304 && ie(_l, m = rl, m), e.$$.dirty[4] & /*config*/
    16777216 && ie(bl, d = ae, d), e.$$.dirty[4] & /*context*/
    33554432 && ga("LayerCake", r), e.$$.dirty[0] & /*ssr, $activeGetters_d, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
    1992 | e.$$.dirty[4] & /*$box_d, debug, config*/
    159383552 && u && tr === !0 && (xt === !0 || typeof window < "u") && er({
      boundingBox: u,
      activeGetters: f,
      x: ae.x,
      y: ae.y,
      z: ae.z,
      r: ae.r,
      xScale: s,
      yScale: a,
      zScale: o,
      rScale: i
    });
  }, n(149, r = {
    activeGetters: yl,
    width: yt,
    height: pt,
    percentRange: _t,
    aspectRatio: cr,
    containerWidth: Ot,
    containerHeight: Ft,
    x: Ht,
    y: It,
    z: Pt,
    r: jt,
    custom: _l,
    data: ol,
    xNice: nn,
    yNice: ln,
    zNice: rn,
    rNice: on,
    xReverse: an,
    yReverse: sn,
    zReverse: fn,
    rReverse: un,
    xPadding: cn,
    yPadding: dn,
    zPadding: gn,
    rPadding: mn,
    padding: pl,
    flatData: tn,
    extents: Qe,
    xDomain: wl,
    yDomain: vl,
    zDomain: xl,
    rDomain: Sl,
    xRange: ar,
    yRange: sr,
    zRange: fr,
    rRange: ur,
    config: bl,
    xScale: pn,
    xGet: lr,
    yScale: kn,
    yGet: rr,
    zScale: wn,
    zGet: ir,
    rScale: vn,
    rGet: or
  }), [
    ct,
    dt,
    zt,
    xt,
    Tt,
    Pn,
    i,
    o,
    a,
    s,
    f,
    d,
    m,
    A,
    R,
    D,
    T,
    E,
    v,
    I,
    B,
    U,
    ce,
    N,
    W,
    te,
    de,
    ze,
    Ae,
    be,
    fe,
    Le,
    De,
    ge,
    vt,
    Ie,
    Re,
    J,
    me,
    Oe,
    Be,
    st,
    qe,
    Ne,
    qn,
    ft,
    ut,
    Nn,
    On,
    Fn,
    Hn,
    _t,
    Ot,
    Ft,
    il,
    ol,
    tn,
    al,
    Ht,
    It,
    Pt,
    jt,
    sl,
    fl,
    ul,
    cl,
    nn,
    ln,
    rn,
    on,
    an,
    sn,
    fn,
    un,
    cn,
    dn,
    gn,
    mn,
    dl,
    gl,
    ml,
    hl,
    hn,
    bn,
    _n,
    yn,
    bl,
    _l,
    yl,
    pl,
    kl,
    yt,
    pt,
    Qe,
    wl,
    vl,
    xl,
    Sl,
    pn,
    lr,
    kn,
    rr,
    wn,
    ir,
    vn,
    or,
    ar,
    sr,
    fr,
    ur,
    cr,
    Et,
    Jt,
    $t,
    gt,
    mt,
    ht,
    j,
    pe,
    Se,
    Ce,
    Ke,
    Ye,
    bt,
    jn,
    Bn,
    Qn,
    Vn,
    Gn,
    Wn,
    Kn,
    Yn,
    en,
    Un,
    Xn,
    At,
    Dt,
    qt,
    Nt,
    Zn,
    Jn,
    $n,
    el,
    tl,
    nl,
    ll,
    rl,
    tr,
    ae,
    r,
    l,
    u,
    In,
    $l,
    ea,
    ta
  ];
}
class Jl extends ye {
  constructor(t) {
    super(), _e(
      this,
      t,
      au,
      ou,
      he,
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
const su = (e) => ({ element: e & /*element*/
1 }), Ti = (e) => ({ element: (
  /*element*/
  e[0]
) });
function fu(e) {
  let t, n;
  const l = (
    /*#slots*/
    e[11].default
  ), r = et(
    l,
    e,
    /*$$scope*/
    e[10],
    Ti
  );
  return {
    c() {
      t = p("div"), r && r.c(), h(t, "class", "layercake-layout-html svelte-1bu60uu"), h(
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
      ), Q(
        t,
        "z-index",
        /*zIndex*/
        e[1]
      ), Q(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[2] === !1 ? "none" : null
      ), Q(
        t,
        "top",
        /*$padding*/
        e[7].top + "px"
      ), Q(
        t,
        "right",
        /*$padding*/
        e[7].right + "px"
      ), Q(
        t,
        "bottom",
        /*$padding*/
        e[7].bottom + "px"
      ), Q(
        t,
        "left",
        /*$padding*/
        e[7].left + "px"
      );
    },
    m(i, o) {
      L(i, t, o), r && r.m(t, null), e[12](t), n = !0;
    },
    p(i, [o]) {
      r && r.p && (!n || o & /*$$scope, element*/
      1025) && nt(
        r,
        l,
        i,
        /*$$scope*/
        i[10],
        n ? tt(
          l,
          /*$$scope*/
          i[10],
          o,
          su
        ) : lt(
          /*$$scope*/
          i[10]
        ),
        Ti
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
      2 && Q(
        t,
        "z-index",
        /*zIndex*/
        i[1]
      ), o & /*pointerEvents*/
      4 && Q(
        t,
        "pointer-events",
        /*pointerEvents*/
        i[2] === !1 ? "none" : null
      ), o & /*$padding*/
      128 && Q(
        t,
        "top",
        /*$padding*/
        i[7].top + "px"
      ), o & /*$padding*/
      128 && Q(
        t,
        "right",
        /*$padding*/
        i[7].right + "px"
      ), o & /*$padding*/
      128 && Q(
        t,
        "bottom",
        /*$padding*/
        i[7].bottom + "px"
      ), o & /*$padding*/
      128 && Q(
        t,
        "left",
        /*$padding*/
        i[7].left + "px"
      );
    },
    i(i) {
      n || (C(r, i), n = !0);
    },
    o(i) {
      z(r, i), n = !1;
    },
    d(i) {
      i && M(t), r && r.d(i), e[12](null);
    }
  };
}
function uu(e, t, n) {
  let l, r, { $$slots: i = {}, $$scope: o } = t;
  const { padding: a } = An("LayerCake");
  H(e, a, (y) => n(7, r = y));
  let { element: s = void 0 } = t, { zIndex: f = void 0 } = t, { pointerEvents: u = void 0 } = t, { role: d = void 0 } = t, { label: m = void 0 } = t, { labelledBy: c = void 0 } = t, { describedBy: g = void 0 } = t;
  function _(y) {
    Ge[y ? "unshift" : "push"](() => {
      s = y, n(0, s);
    });
  }
  return e.$$set = (y) => {
    "element" in y && n(0, s = y.element), "zIndex" in y && n(1, f = y.zIndex), "pointerEvents" in y && n(2, u = y.pointerEvents), "role" in y && n(9, d = y.role), "label" in y && n(3, m = y.label), "labelledBy" in y && n(4, c = y.labelledBy), "describedBy" in y && n(5, g = y.describedBy), "$$scope" in y && n(10, o = y.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*role, label, labelledBy, describedBy*/
    568 && n(6, l = d || (m || c || g ? "figure" : void 0));
  }, [
    s,
    f,
    u,
    m,
    c,
    g,
    l,
    r,
    a,
    d,
    o,
    i,
    _
  ];
}
class Yo extends ye {
  constructor(t) {
    super(), _e(this, t, uu, fu, he, {
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
const cu = (e) => ({ element: e & /*element*/
1 }), Ei = (e) => ({ element: (
  /*element*/
  e[0]
) }), du = (e) => ({ element: e & /*element*/
1 }), zi = (e) => ({ element: (
  /*element*/
  e[0]
) }), gu = (e) => ({ element: e & /*element*/
1 }), Ai = (e) => ({ element: (
  /*element*/
  e[0]
) });
function Di(e) {
  let t, n;
  return {
    c() {
      t = we("title"), n = F(
        /*title*/
        e[8]
      );
    },
    m(l, r) {
      L(l, t, r), b(t, n);
    },
    p(l, r) {
      r & /*title*/
      256 && V(
        n,
        /*title*/
        l[8]
      );
    },
    d(l) {
      l && M(t);
    }
  };
}
function mu(e) {
  let t, n = (
    /*title*/
    e[8] && Di(e)
  );
  return {
    c() {
      n && n.c(), t = ve();
    },
    m(l, r) {
      n && n.m(l, r), L(l, t, r);
    },
    p(l, r) {
      /*title*/
      l[8] ? n ? n.p(l, r) : (n = Di(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(l) {
      n && n.d(l), l && M(t);
    }
  };
}
function hu(e) {
  let t, n, l, r, i;
  const o = (
    /*#slots*/
    e[16].title
  ), a = et(
    o,
    e,
    /*$$scope*/
    e[15],
    Ai
  ), s = a || mu(e), f = (
    /*#slots*/
    e[16].defs
  ), u = et(
    f,
    e,
    /*$$scope*/
    e[15],
    zi
  ), d = (
    /*#slots*/
    e[16].default
  ), m = et(
    d,
    e,
    /*$$scope*/
    e[15],
    Ei
  );
  return {
    c() {
      t = we("svg"), s && s.c(), n = we("defs"), u && u.c(), l = we("g"), m && m.c(), h(l, "class", "layercake-layout-svg_g"), h(l, "transform", r = "translate(" + /*$padding*/
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
      ), Q(
        t,
        "z-index",
        /*zIndex*/
        e[2]
      ), Q(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[3] === !1 ? "none" : null
      );
    },
    m(c, g) {
      L(c, t, g), s && s.m(t, null), b(t, n), u && u.m(n, null), b(t, l), m && m.m(l, null), e[17](l), e[18](t), i = !0;
    },
    p(c, [g]) {
      a ? a.p && (!i || g & /*$$scope, element*/
      32769) && nt(
        a,
        o,
        c,
        /*$$scope*/
        c[15],
        i ? tt(
          o,
          /*$$scope*/
          c[15],
          g,
          gu
        ) : lt(
          /*$$scope*/
          c[15]
        ),
        Ai
      ) : s && s.p && (!i || g & /*title*/
      256) && s.p(c, i ? g : -1), u && u.p && (!i || g & /*$$scope, element*/
      32769) && nt(
        u,
        f,
        c,
        /*$$scope*/
        c[15],
        i ? tt(
          f,
          /*$$scope*/
          c[15],
          g,
          du
        ) : lt(
          /*$$scope*/
          c[15]
        ),
        zi
      ), m && m.p && (!i || g & /*$$scope, element*/
      32769) && nt(
        m,
        d,
        c,
        /*$$scope*/
        c[15],
        i ? tt(
          d,
          /*$$scope*/
          c[15],
          g,
          cu
        ) : lt(
          /*$$scope*/
          c[15]
        ),
        Ei
      ), (!i || g & /*$padding*/
      2048 && r !== (r = "translate(" + /*$padding*/
      c[11].left + ", " + /*$padding*/
      c[11].top + ")")) && h(l, "transform", r), (!i || g & /*viewBox*/
      16) && h(
        t,
        "viewBox",
        /*viewBox*/
        c[4]
      ), (!i || g & /*$containerWidth*/
      512) && h(
        t,
        "width",
        /*$containerWidth*/
        c[9]
      ), (!i || g & /*$containerHeight*/
      1024) && h(
        t,
        "height",
        /*$containerHeight*/
        c[10]
      ), (!i || g & /*label*/
      32) && h(
        t,
        "aria-label",
        /*label*/
        c[5]
      ), (!i || g & /*labelledBy*/
      64) && h(
        t,
        "aria-labelledby",
        /*labelledBy*/
        c[6]
      ), (!i || g & /*describedBy*/
      128) && h(
        t,
        "aria-describedby",
        /*describedBy*/
        c[7]
      ), g & /*zIndex*/
      4 && Q(
        t,
        "z-index",
        /*zIndex*/
        c[2]
      ), g & /*pointerEvents*/
      8 && Q(
        t,
        "pointer-events",
        /*pointerEvents*/
        c[3] === !1 ? "none" : null
      );
    },
    i(c) {
      i || (C(s, c), C(u, c), C(m, c), i = !0);
    },
    o(c) {
      z(s, c), z(u, c), z(m, c), i = !1;
    },
    d(c) {
      c && M(t), s && s.d(c), u && u.d(c), m && m.d(c), e[17](null), e[18](null);
    }
  };
}
function bu(e, t, n) {
  let l, r, i, { $$slots: o = {}, $$scope: a } = t, { element: s = void 0 } = t, { innerElement: f = void 0 } = t, { zIndex: u = void 0 } = t, { pointerEvents: d = void 0 } = t, { viewBox: m = void 0 } = t, { label: c = void 0 } = t, { labelledBy: g = void 0 } = t, { describedBy: _ = void 0 } = t, { title: y = void 0 } = t;
  const { containerWidth: w, containerHeight: x, padding: S } = An("LayerCake");
  H(e, w, (R) => n(9, l = R)), H(e, x, (R) => n(10, r = R)), H(e, S, (R) => n(11, i = R));
  function O(R) {
    Ge[R ? "unshift" : "push"](() => {
      f = R, n(1, f);
    });
  }
  function A(R) {
    Ge[R ? "unshift" : "push"](() => {
      s = R, n(0, s);
    });
  }
  return e.$$set = (R) => {
    "element" in R && n(0, s = R.element), "innerElement" in R && n(1, f = R.innerElement), "zIndex" in R && n(2, u = R.zIndex), "pointerEvents" in R && n(3, d = R.pointerEvents), "viewBox" in R && n(4, m = R.viewBox), "label" in R && n(5, c = R.label), "labelledBy" in R && n(6, g = R.labelledBy), "describedBy" in R && n(7, _ = R.describedBy), "title" in R && n(8, y = R.title), "$$scope" in R && n(15, a = R.$$scope);
  }, [
    s,
    f,
    u,
    d,
    m,
    c,
    g,
    _,
    y,
    l,
    r,
    i,
    w,
    x,
    S,
    a,
    o,
    O,
    A
  ];
}
class Uo extends ye {
  constructor(t) {
    super(), _e(this, t, bu, hu, he, {
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
function qi(e, t, n) {
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
  const s = (
    /*$y*/
    l[10](
      /*d*/
      l[29]
    )
  );
  return l[34] = s, l;
}
function Ni(e) {
  let t, n = (
    /*yValue*/
    e[34] + ""
  ), l, r, i;
  return {
    c() {
      t = we("text"), l = F(n), h(t, "x", r = /*xPos*/
      e[32] + /*colWidth*/
      e[33] / 2), h(t, "y", i = /*$height*/
      e[12] - /*colHeight*/
      e[30] - 5), h(t, "text-anchor", "middle"), h(t, "class", "svelte-1c28ck9");
    },
    m(o, a) {
      L(o, t, a), b(t, l);
    },
    p(o, a) {
      a[0] & /*$y, $data*/
      1280 && n !== (n = /*yValue*/
      o[34] + "") && V(l, n), a[0] & /*$xGet, $data, $xScale, columnWidth*/
      904 && r !== (r = /*xPos*/
      o[32] + /*colWidth*/
      o[33] / 2) && h(t, "x", r), a[0] & /*$height, columnHeight, $data*/
      4416 && i !== (i = /*$height*/
      o[12] - /*colHeight*/
      o[30] - 5) && h(t, "y", i);
    },
    d(o) {
      o && M(t);
    }
  };
}
function Oi(e) {
  let t, n, l, r, i, o, a, s, f, u, d, m, c, g, _;
  function y() {
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
    e[34] && Ni(e)
  );
  return {
    c() {
      t = we("rect"), u = we("rect"), w && w.c(), c = ve(), h(t, "class", "group-rect svelte-1c28ck9"), h(
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
      ), h(t, "stroke", s = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Fi : "none"), h(t, "stroke-width", f = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Hi : 0), Z(
        t,
        "animated",
        /*loaded*/
        e[5]
      ), h(u, "class", "hover-zone svelte-1c28ck9"), h(u, "x", d = /*xPos*/
      e[32]), h(u, "y", 0), h(u, "width", m = /*colWidth*/
      e[33]), h(
        u,
        "height",
        /*$height*/
        e[12]
      ), h(u, "fill", "none"), h(u, "stroke", "none");
    },
    m(x, S) {
      L(x, t, S), L(x, u, S), w && w.m(x, S), L(x, c, S), g || (_ = [
        le(u, "mouseenter", y),
        le(
          u,
          "mouseleave",
          /*mouseleave_handler*/
          e[24]
        )
      ], g = !0);
    },
    p(x, S) {
      e = x, S[0] & /*$x, $data*/
      2304 && n !== (n = /*$x*/
      e[11](
        /*d*/
        e[29]
      )) && h(t, "data-range", n), S[0] & /*$y, $data*/
      1280 && l !== (l = /*yValue*/
      e[34]) && h(t, "data-count", l), S[0] & /*$xGet, $data*/
      264 && r !== (r = /*xPos*/
      e[32]) && h(t, "x", r), S[0] & /*$yGet, $data*/
      260 && i !== (i = /*$yGet*/
      e[2](
        /*d*/
        e[29]
      )) && h(t, "y", i), S[0] & /*$xScale, columnWidth, $data*/
      896 && o !== (o = /*colWidth*/
      e[33]) && h(t, "width", o), S[0] & /*columnHeight, $data*/
      320 && a !== (a = /*colHeight*/
      e[30]) && h(t, "height", a), S[0] & /*fill*/
      1 && h(
        t,
        "fill",
        /*fill*/
        e[0]
      ), S[0] & /*hoveredIndex*/
      16 && s !== (s = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Fi : "none") && h(t, "stroke", s), S[0] & /*hoveredIndex*/
      16 && f !== (f = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Hi : 0) && h(t, "stroke-width", f), S[0] & /*loaded*/
      32 && Z(
        t,
        "animated",
        /*loaded*/
        e[5]
      ), S[0] & /*$xGet, $data*/
      264 && d !== (d = /*xPos*/
      e[32]) && h(u, "x", d), S[0] & /*$xScale, columnWidth, $data*/
      896 && m !== (m = /*colWidth*/
      e[33]) && h(u, "width", m), S[0] & /*$height*/
      4096 && h(
        u,
        "height",
        /*$height*/
        e[12]
      ), /*showLabels*/
      e[1] && /*yValue*/
      e[34] ? w ? w.p(e, S) : (w = Ni(e), w.c(), w.m(c.parentNode, c)) : w && (w.d(1), w = null);
    },
    d(x) {
      x && M(t), x && M(u), w && w.d(x), x && M(c), g = !1, He(_);
    }
  };
}
function _u(e) {
  let t, n = (
    /*$data*/
    e[8]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Oi(qi(e, n, r));
  return {
    c() {
      t = we("g");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      h(t, "class", "column-group");
    },
    m(r, i) {
      L(r, t, i);
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
          const a = qi(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = Oi(a), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    i: G,
    o: G,
    d(r) {
      r && M(t), We(l, r);
    }
  };
}
const Fi = "#333", Hi = 1;
function yu(e, t, n) {
  let l, r, i, o, a, s, f, u, d, m;
  const c = Do(), { data: g, xGet: _, yGet: y, x: w, yRange: x, xScale: S, y: O, height: A, zGet: R, zScale: D, z: T, custom: E } = An("LayerCake");
  H(e, g, (W) => n(8, s = W)), H(e, _, (W) => n(3, a = W)), H(e, y, (W) => n(2, i = W)), H(e, w, (W) => n(11, d = W)), H(e, x, (W) => n(22, o = W)), H(e, S, (W) => n(9, f = W)), H(e, O, (W) => n(10, u = W)), H(e, A, (W) => n(12, m = W));
  let { fill: v = "#00e047" } = t, { showLabels: I = !1 } = t, B = null;
  Ut(() => {
    setTimeout(() => n(5, U = !0), 100);
  });
  let U = !1;
  const ce = (W, re) => {
    n(4, B = W), c("hover", re);
  }, N = () => {
    n(4, B = null), c("hover", null);
  };
  return e.$$set = (W) => {
    "fill" in W && n(0, v = W.fill), "showLabels" in W && n(1, I = W.showLabels);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*$xGet*/
    8 && n(7, l = (W) => {
      const re = a(W);
      return Math.abs(re[1] - re[0]);
    }), e.$$.dirty[0] & /*$yRange, $yGet*/
    4194308 && n(6, r = (W) => o[0] - i(W));
  }, [
    v,
    I,
    i,
    a,
    B,
    U,
    r,
    l,
    s,
    f,
    u,
    d,
    m,
    c,
    g,
    _,
    y,
    w,
    x,
    S,
    O,
    A,
    o,
    ce,
    N
  ];
}
class Xo extends ye {
  constructor(t) {
    super(), _e(this, t, yu, _u, he, { fill: 0, showLabels: 1 }, null, [-1, -1]);
  }
}
function Ii(e, t, n) {
  const l = e.slice();
  return l[28] = t[n], l[30] = n, l;
}
function Pi(e) {
  let t, n, l;
  return {
    c() {
      t = we("line"), h(t, "y1", n = /*$height*/
      e[15] * -1), h(t, "y2", "0"), h(t, "x1", "0"), h(t, "x2", "0"), h(t, "stroke-width", l = /*tick*/
      e[28] == 0 ? 2 : 1), h(t, "class", "svelte-rkqqab"), Z(
        t,
        "gridline",
        /*tick*/
        e[28] != 0
      ), Z(
        t,
        "baseline",
        /*tick*/
        e[28] == 0
      );
    },
    m(r, i) {
      L(r, t, i);
    },
    p(r, i) {
      i & /*$height*/
      32768 && n !== (n = /*$height*/
      r[15] * -1) && h(t, "y1", n), i & /*tickVals*/
      8192 && l !== (l = /*tick*/
      r[28] == 0 ? 2 : 1) && h(t, "stroke-width", l), i & /*tickVals*/
      8192 && Z(
        t,
        "gridline",
        /*tick*/
        r[28] != 0
      ), i & /*tickVals*/
      8192 && Z(
        t,
        "baseline",
        /*tick*/
        r[28] == 0
      );
    },
    d(r) {
      r && M(t);
    }
  };
}
function ji(e) {
  let t, n, l;
  return {
    c() {
      t = we("line"), h(t, "class", "tick-mark svelte-rkqqab"), h(t, "y1", 0), h(t, "y2", 6), h(t, "x1", n = /*xTick*/
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
      L(r, t, i);
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
      r && M(t);
    }
  };
}
function Bi(e) {
  let t, n, l, r = (
    /*formatTick*/
    e[4](
      /*tick*/
      e[28]
    ) + ""
  ), i, o, a, s, f, u, d = (
    /*gridlines*/
    e[0] !== !1 && Pi(e)
  ), m = (
    /*tickMarks*/
    e[1] === !0 && ji(e)
  );
  return {
    c() {
      t = we("g"), d && d.c(), n = ve(), m && m.c(), l = we("text"), i = F(r), h(l, "x", o = /*xTick*/
      e[5] || /*isBandwidth*/
      e[11] ? (
        /*$xScale*/
        e[12].bandwidth() / 2
      ) : 0), h(l, "y", a = /*yTick*/
      e[6] - /*angle*/
      (e[10] ? 4 : 0)), h(l, "dx", ""), h(l, "dy", ""), h(l, "transform", s = /*angle*/
      e[10] ? "rotate(-45)" : ""), Q(
        l,
        "fill",
        /*color*/
        e[9]
      ), h(l, "text-anchor", f = /*textAnchor*/
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
    m(c, g) {
      L(c, t, g), d && d.m(t, null), b(t, n), m && m.m(t, null), b(t, l), b(l, i);
    },
    p(c, g) {
      /*gridlines*/
      c[0] !== !1 ? d ? d.p(c, g) : (d = Pi(c), d.c(), d.m(t, n)) : d && (d.d(1), d = null), /*tickMarks*/
      c[1] === !0 ? m ? m.p(c, g) : (m = ji(c), m.c(), m.m(t, l)) : m && (m.d(1), m = null), g & /*formatTick, tickVals*/
      8208 && r !== (r = /*formatTick*/
      c[4](
        /*tick*/
        c[28]
      ) + "") && V(i, r), g & /*xTick, isBandwidth, $xScale*/
      6176 && o !== (o = /*xTick*/
      c[5] || /*isBandwidth*/
      c[11] ? (
        /*$xScale*/
        c[12].bandwidth() / 2
      ) : 0) && h(l, "x", o), g & /*yTick, angle*/
      1088 && a !== (a = /*yTick*/
      c[6] - /*angle*/
      (c[10] ? 4 : 0)) && h(l, "y", a), g & /*angle*/
      1024 && s !== (s = /*angle*/
      c[10] ? "rotate(-45)" : "") && h(l, "transform", s), g & /*color*/
      512 && Q(
        l,
        "fill",
        /*color*/
        c[9]
      ), g & /*tickVals*/
      8192 && f !== (f = /*textAnchor*/
      c[24](
        /*tick*/
        c[28]
      )) && h(l, "text-anchor", f), g & /*$xScale, tickVals, $yRange*/
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
      c && M(t), d && d.d(), m && m.d();
    }
  };
}
function Qi(e) {
  let t, n, l;
  return {
    c() {
      t = we("line"), h(t, "class", "baseline svelte-rkqqab"), h(t, "y1", n = /*$height*/
      e[15] + 0.5), h(t, "y2", l = /*$height*/
      e[15] + 0.5), h(t, "x1", "0"), h(
        t,
        "x2",
        /*$width*/
        e[16]
      );
    },
    m(r, i) {
      L(r, t, i);
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
      r && M(t);
    }
  };
}
function Vi(e) {
  let t, n, l, r;
  return {
    c() {
      t = we("text"), h(t, "x", n = /*labelLeft*/
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
      e[8] ? "end" : "middle"), Q(
        t,
        "fill",
        /*color*/
        e[9]
      ), h(t, "class", "axis-label svelte-rkqqab");
    },
    m(i, o) {
      L(i, t, o), t.innerHTML = /*label*/
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
      512 && Q(
        t,
        "fill",
        /*color*/
        i[9]
      );
    },
    d(i) {
      i && M(t);
    }
  };
}
function pu(e) {
  let t, n, l, r = (
    /*tickVals*/
    e[13]
  ), i = [];
  for (let s = 0; s < r.length; s += 1)
    i[s] = Bi(Ii(e, r, s));
  let o = (
    /*baseline*/
    e[2] === !0 && Qi(e)
  ), a = !!/*label*/
  e[7] && Vi(e);
  return {
    c() {
      t = we("g");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      n = ve(), o && o.c(), l = ve(), a && a.c(), h(t, "class", "axis x-axis svelte-rkqqab"), Z(
        t,
        "snapTicks",
        /*snapTicks*/
        e[3]
      );
    },
    m(s, f) {
      L(s, t, f);
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(t, null);
      b(t, n), o && o.m(t, null), b(t, l), a && a.m(t, null);
    },
    p(s, [f]) {
      if (f & /*$xScale, tickVals, Math, $yRange, xTick, isBandwidth, yTick, angle, color, textAnchor, formatTick, tickMarks, $height, gridlines*/
      16842355) {
        r = /*tickVals*/
        s[13];
        let u;
        for (u = 0; u < r.length; u += 1) {
          const d = Ii(s, r, u);
          i[u] ? i[u].p(d, f) : (i[u] = Bi(d), i[u].c(), i[u].m(t, n));
        }
        for (; u < i.length; u += 1)
          i[u].d(1);
        i.length = r.length;
      }
      /*baseline*/
      s[2] === !0 ? o ? o.p(s, f) : (o = Qi(s), o.c(), o.m(t, l)) : o && (o.d(1), o = null), /*label*/
      s[7] ? a ? a.p(s, f) : (a = Vi(s), a.c(), a.m(t, null)) : a && (a.d(1), a = null), f & /*snapTicks*/
      8 && Z(
        t,
        "snapTicks",
        /*snapTicks*/
        s[3]
      );
    },
    i: G,
    o: G,
    d(s) {
      s && M(t), We(i, s), o && o.d(), a && a.d();
    }
  };
}
function ku(e, t, n) {
  let l, r, i, o, a, s, f, u;
  const { width: d, height: m, xRange: c, padding: g, xScale: _, xDomain: y, yRange: w } = An("LayerCake");
  H(e, d, (N) => n(16, f = N)), H(e, m, (N) => n(15, s = N)), H(e, c, (N) => n(17, u = N)), H(e, _, (N) => n(12, o = N)), H(e, y, (N) => n(26, i = N)), H(e, w, (N) => n(14, a = N));
  let { gridlines: x = !0 } = t, { tickMarks: S = !1 } = t, { baseline: O = !1 } = t, { snapTicks: A = !1 } = t, { formatTick: R = (N) => N } = t, { ticks: D = void 0 } = t, { xTick: T = 0 } = t, { yTick: E = 16 } = t, { label: v = "" } = t, { labelLeft: I = !1 } = t, { color: B = "#333" } = t, { angle: U = !1 } = t;
  function ce(N) {
    if (U)
      return "end";
    if (A === !0) {
      if (N == i[0])
        return "start";
      if (N == i[1])
        return "end";
    }
    return "middle";
  }
  return e.$$set = (N) => {
    "gridlines" in N && n(0, x = N.gridlines), "tickMarks" in N && n(1, S = N.tickMarks), "baseline" in N && n(2, O = N.baseline), "snapTicks" in N && n(3, A = N.snapTicks), "formatTick" in N && n(4, R = N.formatTick), "ticks" in N && n(25, D = N.ticks), "xTick" in N && n(5, T = N.xTick), "yTick" in N && n(6, E = N.yTick), "label" in N && n(7, v = N.label), "labelLeft" in N && n(8, I = N.labelLeft), "color" in N && n(9, B = N.color), "angle" in N && n(10, U = N.angle);
  }, e.$$.update = () => {
    e.$$.dirty & /*$xScale*/
    4096 && n(11, l = typeof o.bandwidth == "function"), e.$$.dirty & /*ticks, isBandwidth, $xScale*/
    33560576 && n(13, r = Array.isArray(D) ? D : l ? o.domain() : typeof D == "function" ? D(o.ticks()) : o.ticks(D));
  }, [
    x,
    S,
    O,
    A,
    R,
    T,
    E,
    v,
    I,
    B,
    U,
    l,
    o,
    r,
    a,
    s,
    f,
    u,
    d,
    m,
    c,
    _,
    y,
    w,
    ce,
    D
  ];
}
class Zo extends ye {
  constructor(t) {
    super(), _e(this, t, ku, pu, he, {
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
const wu = (e) => ({}), Gi = (e) => ({}), vu = (e) => ({}), Wi = (e) => ({});
function xu(e) {
  let t, n, l, r, i, o, a, s, f = !!/*title*/
  e[2] && Ki(e), u = (
    /*loaded*/
    e[8] && /*histBins*/
    e[7].length > 0 && Yi(e)
  );
  const d = [Ru, Lu], m = [];
  function c(g, _) {
    return (
      /*$$slots*/
      g[11].caption ? 1 : 0
    );
  }
  return o = c(e), a = m[o] = d[o](e), {
    c() {
      t = p("div"), f && f.c(), n = q(), l = p("div"), u && u.c(), r = q(), i = p("div"), a.c(), Q(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), Q(l, "height", "16px"), h(i, "class", "text-xs text-slate-800 truncate"), Z(i, "mt-1", !/*horizontalLayout*/
      e[3]), h(t, "class", "gap-1 items-center"), Z(
        t,
        "flex",
        /*horizontalLayout*/
        e[3]
      ), Z(
        t,
        "my-0.5",
        /*horizontalLayout*/
        e[3]
      );
    },
    m(g, _) {
      L(g, t, _), f && f.m(t, null), b(t, n), b(t, l), u && u.m(l, null), b(t, r), b(t, i), m[o].m(i, null), s = !0;
    },
    p(g, _) {
      /*title*/
      g[2] ? f ? f.p(g, _) : (f = Ki(g), f.c(), f.m(t, n)) : f && (f.d(1), f = null), /*loaded*/
      g[8] && /*histBins*/
      g[7].length > 0 ? u ? (u.p(g, _), _ & /*loaded, histBins*/
      384 && C(u, 1)) : (u = Yi(g), u.c(), C(u, 1), u.m(l, null)) : u && ($(), z(u, 1, 1, () => {
        u = null;
      }), ee()), (!s || _ & /*width*/
      1) && Q(
        l,
        "width",
        /*width*/
        g[0] == null ? "100%" : `${/*width*/
        g[0]}px`
      );
      let y = o;
      o = c(g), o === y ? m[o].p(g, _) : ($(), z(m[y], 1, 1, () => {
        m[y] = null;
      }), ee(), a = m[o], a ? a.p(g, _) : (a = m[o] = d[o](g), a.c()), C(a, 1), a.m(i, null)), (!s || _ & /*horizontalLayout*/
      8) && Z(i, "mt-1", !/*horizontalLayout*/
      g[3]), (!s || _ & /*horizontalLayout*/
      8) && Z(
        t,
        "flex",
        /*horizontalLayout*/
        g[3]
      ), (!s || _ & /*horizontalLayout*/
      8) && Z(
        t,
        "my-0.5",
        /*horizontalLayout*/
        g[3]
      );
    },
    i(g) {
      s || (C(u), C(a), s = !0);
    },
    o(g) {
      z(u), z(a), s = !1;
    },
    d(g) {
      g && M(t), f && f.d(), u && u.d(), m[o].d();
    }
  };
}
function Su(e) {
  let t, n, l, r, i, o, a, s = !!/*title*/
  e[2] && Ui(e), f = (
    /*loaded*/
    e[8] && /*histBins*/
    e[7].length > 0 && Xi(e)
  );
  const u = [Nu, qu], d = [];
  function m(c, g) {
    return (
      /*$$slots*/
      c[11].caption ? 1 : 0
    );
  }
  return i = m(e), o = d[i] = u[i](e), {
    c() {
      s && s.c(), t = q(), n = p("div"), f && f.c(), l = q(), r = p("div"), o.c(), Q(
        n,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), Q(n, "height", "16px"), h(r, "class", "text-xs text-slate-800 truncate"), Z(r, "mt-1", !/*horizontalLayout*/
      e[3]);
    },
    m(c, g) {
      s && s.m(c, g), L(c, t, g), L(c, n, g), f && f.m(n, null), L(c, l, g), L(c, r, g), d[i].m(r, null), a = !0;
    },
    p(c, g) {
      /*title*/
      c[2] ? s ? s.p(c, g) : (s = Ui(c), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), /*loaded*/
      c[8] && /*histBins*/
      c[7].length > 0 ? f ? (f.p(c, g), g & /*loaded, histBins*/
      384 && C(f, 1)) : (f = Xi(c), f.c(), C(f, 1), f.m(n, null)) : f && ($(), z(f, 1, 1, () => {
        f = null;
      }), ee()), (!a || g & /*width*/
      1) && Q(
        n,
        "width",
        /*width*/
        c[0] == null ? "100%" : `${/*width*/
        c[0]}px`
      );
      let _ = i;
      i = m(c), i === _ ? d[i].p(c, g) : ($(), z(d[_], 1, 1, () => {
        d[_] = null;
      }), ee(), o = d[i], o ? o.p(c, g) : (o = d[i] = u[i](c), o.c()), C(o, 1), o.m(r, null)), (!a || g & /*horizontalLayout*/
      8) && Z(r, "mt-1", !/*horizontalLayout*/
      c[3]);
    },
    i(c) {
      a || (C(f), C(o), a = !0);
    },
    o(c) {
      z(f), z(o), a = !1;
    },
    d(c) {
      s && s.d(c), c && M(t), c && M(n), f && f.d(), c && M(l), c && M(r), d[i].d();
    }
  };
}
function Ki(e) {
  let t, n;
  return {
    c() {
      t = p("div"), n = F(
        /*title*/
        e[2]
      ), h(t, "class", "font-bold text-xs truncate text-right"), Q(t, "width", "96px");
    },
    m(l, r) {
      L(l, t, r), b(t, n);
    },
    p(l, r) {
      r & /*title*/
      4 && V(
        n,
        /*title*/
        l[2]
      );
    },
    d(l) {
      l && M(t);
    }
  };
}
function Yi(e) {
  let t, n;
  return t = new Jl({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: zr().round(!0),
      xDomain: (
        /*histBins*/
        e[7]
      ),
      yScale: wt(),
      yDomain: [0, null],
      data: (
        /*data*/
        e[6]
      ),
      custom: { hoveredGet: (
        /*func_2*/
        e[18]
      ) },
      $$slots: { default: [Mu] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      X(t.$$.fragment);
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
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(t, l);
    }
  };
}
function Cu(e) {
  let t, n, l, r;
  return t = new Xo({ props: { fill: (
    /*color*/
    e[5]
  ) } }), t.$on(
    "hover",
    /*hover_handler_1*/
    e[17]
  ), l = new Zo({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      X(t.$$.fragment), n = q(), X(l.$$.fragment);
    },
    m(i, o) {
      K(t, i, o), L(i, n, o), K(l, i, o), r = !0;
    },
    p(i, o) {
      const a = {};
      o & /*color*/
      32 && (a.fill = /*color*/
      i[5]), t.$set(a);
    },
    i(i) {
      r || (C(t.$$.fragment, i), C(l.$$.fragment, i), r = !0);
    },
    o(i) {
      z(t.$$.fragment, i), z(l.$$.fragment, i), r = !1;
    },
    d(i) {
      Y(t, i), i && M(n), Y(l, i);
    }
  };
}
function Mu(e) {
  let t, n;
  return t = new Uo({
    props: {
      $$slots: { default: [Cu] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      X(t.$$.fragment);
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
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(t, l);
    }
  };
}
function Lu(e) {
  let t;
  const n = (
    /*#slots*/
    e[13].caption
  ), l = et(
    n,
    e,
    /*$$scope*/
    e[20],
    Gi
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
      1048576) && nt(
        l,
        n,
        r,
        /*$$scope*/
        r[20],
        t ? tt(
          n,
          /*$$scope*/
          r[20],
          i,
          wu
        ) : lt(
          /*$$scope*/
          r[20]
        ),
        Gi
      );
    },
    i(r) {
      t || (C(l, r), t = !0);
    },
    o(r) {
      z(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function Ru(e) {
  let t;
  function n(i, o) {
    return (
      /*hoveredBin*/
      i[9] != null ? zu : (
        /*mean*/
        i[1] != null ? Eu : Tu
      )
    );
  }
  let l = n(e), r = l(e);
  return {
    c() {
      r.c(), t = ve();
    },
    m(i, o) {
      r.m(i, o), L(i, t, o);
    },
    p(i, o) {
      l === (l = n(i)) && r ? r.p(i, o) : (r.d(1), r = l(i), r && (r.c(), r.m(t.parentNode, t)));
    },
    i: G,
    o: G,
    d(i) {
      r.d(i), i && M(t);
    }
  };
}
function Tu(e) {
  let t;
  return {
    c() {
      t = F(" ");
    },
    m(n, l) {
      L(n, t, l);
    },
    p: G,
    d(n) {
      n && M(t);
    }
  };
}
function Eu(e) {
  let t, n, l = se(".3")(
    /*mean*/
    e[1]
  ) + "", r;
  return {
    c() {
      t = F("M = "), n = p("strong"), r = F(l);
    },
    m(i, o) {
      L(i, t, o), L(i, n, o), b(n, r);
    },
    p(i, o) {
      o & /*mean*/
      2 && l !== (l = se(".3")(
        /*mean*/
        i[1]
      ) + "") && V(r, l);
    },
    d(i) {
      i && M(t), i && M(n);
    }
  };
}
function zu(e) {
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
      n = F(t);
    },
    m(l, r) {
      L(l, n, r);
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
      ) + "") && V(n, t);
    },
    d(l) {
      l && M(n);
    }
  };
}
function Ui(e) {
  let t, n;
  return {
    c() {
      t = p("div"), n = F(
        /*title*/
        e[2]
      ), h(t, "class", "font-bold text-xs truncate text-right");
    },
    m(l, r) {
      L(l, t, r), b(t, n);
    },
    p(l, r) {
      r & /*title*/
      4 && V(
        n,
        /*title*/
        l[2]
      );
    },
    d(l) {
      l && M(t);
    }
  };
}
function Xi(e) {
  let t, n;
  return t = new Jl({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: zr().round(!0),
      xDomain: (
        /*histBins*/
        e[7]
      ),
      yScale: wt(),
      yDomain: [0, null],
      data: (
        /*data*/
        e[6]
      ),
      custom: { hoveredGet: (
        /*func*/
        e[15]
      ) },
      $$slots: { default: [Du] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      X(t.$$.fragment);
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
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(t, l);
    }
  };
}
function Au(e) {
  let t, n, l, r;
  return t = new Xo({ props: { fill: (
    /*color*/
    e[5]
  ) } }), t.$on(
    "hover",
    /*hover_handler*/
    e[14]
  ), l = new Zo({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      X(t.$$.fragment), n = q(), X(l.$$.fragment);
    },
    m(i, o) {
      K(t, i, o), L(i, n, o), K(l, i, o), r = !0;
    },
    p(i, o) {
      const a = {};
      o & /*color*/
      32 && (a.fill = /*color*/
      i[5]), t.$set(a);
    },
    i(i) {
      r || (C(t.$$.fragment, i), C(l.$$.fragment, i), r = !0);
    },
    o(i) {
      z(t.$$.fragment, i), z(l.$$.fragment, i), r = !1;
    },
    d(i) {
      Y(t, i), i && M(n), Y(l, i);
    }
  };
}
function Du(e) {
  let t, n;
  return t = new Uo({
    props: {
      $$slots: { default: [Au] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      X(t.$$.fragment);
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
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(t, l);
    }
  };
}
function qu(e) {
  let t;
  const n = (
    /*#slots*/
    e[13].caption
  ), l = et(
    n,
    e,
    /*$$scope*/
    e[20],
    Wi
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
      1048576) && nt(
        l,
        n,
        r,
        /*$$scope*/
        r[20],
        t ? tt(
          n,
          /*$$scope*/
          r[20],
          i,
          vu
        ) : lt(
          /*$$scope*/
          r[20]
        ),
        Wi
      );
    },
    i(r) {
      t || (C(l, r), t = !0);
    },
    o(r) {
      z(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function Nu(e) {
  let t;
  function n(i, o) {
    return (
      /*hoveredBin*/
      i[9] != null ? Hu : (
        /*mean*/
        i[1] != null ? Fu : Ou
      )
    );
  }
  let l = n(e), r = l(e);
  return {
    c() {
      r.c(), t = ve();
    },
    m(i, o) {
      r.m(i, o), L(i, t, o);
    },
    p(i, o) {
      l === (l = n(i)) && r ? r.p(i, o) : (r.d(1), r = l(i), r && (r.c(), r.m(t.parentNode, t)));
    },
    i: G,
    o: G,
    d(i) {
      r.d(i), i && M(t);
    }
  };
}
function Ou(e) {
  let t;
  return {
    c() {
      t = F(" ");
    },
    m(n, l) {
      L(n, t, l);
    },
    p: G,
    d(n) {
      n && M(t);
    }
  };
}
function Fu(e) {
  let t, n, l = se(".3")(
    /*mean*/
    e[1]
  ) + "", r;
  return {
    c() {
      t = F("M = "), n = p("strong"), r = F(l);
    },
    m(i, o) {
      L(i, t, o), L(i, n, o), b(n, r);
    },
    p(i, o) {
      o & /*mean*/
      2 && l !== (l = se(".3")(
        /*mean*/
        i[1]
      ) + "") && V(r, l);
    },
    d(i) {
      i && M(t), i && M(n);
    }
  };
}
function Hu(e) {
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
      n = F(t);
    },
    m(l, r) {
      L(l, n, r);
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
      ) + "") && V(n, t);
    },
    d(l) {
      l && M(n);
    }
  };
}
function Iu(e) {
  let t, n, l, r;
  const i = [Su, xu], o = [];
  function a(s, f) {
    return (
      /*noParent*/
      s[4] ? 0 : 1
    );
  }
  return t = a(e), n = o[t] = i[t](e), {
    c() {
      n.c(), l = ve();
    },
    m(s, f) {
      o[t].m(s, f), L(s, l, f), r = !0;
    },
    p(s, [f]) {
      let u = t;
      t = a(s), t === u ? o[t].p(s, f) : ($(), z(o[u], 1, 1, () => {
        o[u] = null;
      }), ee(), n = o[t], n ? n.p(s, f) : (n = o[t] = i[t](s), n.c()), C(n, 1), n.m(l.parentNode, l));
    },
    i(s) {
      r || (C(n), r = !0);
    },
    o(s) {
      z(n), r = !1;
    },
    d(s) {
      o[t].d(s), s && M(l);
    }
  };
}
function Pu(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = Cr(l);
  let { width: o = 100 } = t, { histValues: a } = t, { mean: s = null } = t, { title: f = null } = t, { horizontalLayout: u = !1 } = t, { noParent: d = !1 } = t, { color: m = "#3b82f6" } = t, c = [], g = [], _ = !1;
  Ut(() => setTimeout(() => n(8, _ = !0), 0));
  let y, w = se(".3g"), x = se(",");
  function S(v) {
    return `${w(v.bin)}: ${x(v.count)} instances`;
  }
  const O = (v) => n(9, y = v.detail != null ? v.detail.bin : null), A = (v) => v.bin == y, R = (v) => v.bin == y, D = (v) => n(9, y = v.detail != null ? v.detail.bin : null), T = (v) => v.bin == y, E = (v) => v.bin == y;
  return e.$$set = (v) => {
    "width" in v && n(0, o = v.width), "histValues" in v && n(12, a = v.histValues), "mean" in v && n(1, s = v.mean), "title" in v && n(2, f = v.title), "horizontalLayout" in v && n(3, u = v.horizontalLayout), "noParent" in v && n(4, d = v.noParent), "color" in v && n(5, m = v.color), "$$scope" in v && n(20, r = v.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*histValues, data*/
    4160 && (a ? (n(6, c = Object.entries(a).map((v) => ({ bin: parseFloat(v[0]), count: v[1] }))), c.sort((v, I) => v.bin - I.bin), n(7, g = c.map((v) => v.bin))) : (n(6, c = []), n(7, g = []))), e.$$.dirty & /*data*/
    64 && c.length > 0) {
      let v = c.reduce(
        (I, B, U) => U > 0 ? Math.min(I, Math.abs(B.bin - c[U - 1].bin)) : I,
        1e9
      );
      w = se(`.${Oo(v)}f`);
    }
    e.$$.dirty & /*histBins*/
    128 && console.log("histBins", g), e.$$.dirty & /*histValues*/
    4096 && console.log("histValues", a);
  }, [
    o,
    s,
    f,
    u,
    d,
    m,
    c,
    g,
    _,
    y,
    S,
    i,
    a,
    l,
    O,
    A,
    R,
    D,
    T,
    E,
    r
  ];
}
class Zt extends ye {
  constructor(t) {
    super(), _e(this, t, Pu, Iu, he, {
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
function Zi(e, t, n) {
  const l = e.slice();
  return l[24] = t[n], l[26] = n, l;
}
function Ji(e) {
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
      t = p("span"), h(t, "class", "bar absolute content-box svelte-mwmtzu"), Q(t, "top", "0"), Q(
        t,
        "left",
        /*$xGet*/
        e[3](
          /*d*/
          e[24]
        ) * /*$xRange*/
        (e[4][1] <= 1 ? 100 : 1) + /*$xRange*/
        (e[4][1] <= 1 ? "%" : "px")
      ), Q(
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
      ), Q(
        t,
        "background-color",
        /*$yGet*/
        e[7](
          /*d*/
          e[24]
        )
      ), Z(
        t,
        "animated",
        /*loaded*/
        e[1]
      ), Z(
        t,
        "border",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      ), Z(
        t,
        "border-black",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      );
    },
    m(i, o) {
      L(i, t, o), n || (l = [
        le(t, "mouseenter", r),
        le(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[16]
        )
      ], n = !0);
    },
    p(i, o) {
      e = i, o & /*$xGet, $data, $xRange*/
      28 && Q(
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
      124 && Q(
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
      132 && Q(
        t,
        "background-color",
        /*$yGet*/
        e[7](
          /*d*/
          e[24]
        )
      ), o & /*loaded*/
      2 && Z(
        t,
        "animated",
        /*loaded*/
        e[1]
      ), o & /*hoveredIndex, $data*/
      5 && Z(
        t,
        "border",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      ), o & /*hoveredIndex, $data*/
      5 && Z(
        t,
        "border-black",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      );
    },
    d(i) {
      i && M(t), n = !1, He(l);
    }
  };
}
function ju(e) {
  let t, n = (
    /*$data*/
    e[2]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Ji(Zi(e, n, r));
  return {
    c() {
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      t = ve();
    },
    m(r, i) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(r, i);
      L(r, t, i);
    },
    p(r, [i]) {
      if (i & /*$xGet, $data, $xRange, $xScale, $z, $yGet, loaded, hoveredIndex, dispatch*/
      511) {
        n = /*$data*/
        r[2];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = Zi(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = Ji(a), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    i: G,
    o: G,
    d(r) {
      We(l, r), r && M(t);
    }
  };
}
function Bu(e, t, n) {
  let l, r, i, o, a, s;
  const f = Do(), { data: u, xGet: d, yGet: m, xRange: c, x: g, yRange: _, xScale: y, y: w, height: x, zGet: S, zScale: O, z: A, custom: R } = An("LayerCake");
  H(e, u, (I) => n(2, l = I)), H(e, d, (I) => n(3, r = I)), H(e, m, (I) => n(7, s = I)), H(e, c, (I) => n(4, i = I)), H(e, y, (I) => n(5, o = I)), H(e, A, (I) => n(6, a = I));
  let D = null;
  Ut(() => {
    setTimeout(() => n(1, T = !0), 100);
  });
  let T = !1;
  return [
    D,
    T,
    l,
    r,
    i,
    o,
    a,
    s,
    f,
    u,
    d,
    m,
    c,
    y,
    A,
    (I, B) => {
      n(0, D = I), f("hover", B);
    },
    () => {
      n(0, D = null), f("hover", null);
    }
  ];
}
class Jo extends ye {
  constructor(t) {
    super(), _e(this, t, Bu, ju, he, {});
  }
}
const Qu = (e) => ({}), $i = (e) => ({}), Vu = (e) => ({}), eo = (e) => ({});
function Gu(e) {
  let t, n, l, r, i, o, a, s, f, u = !!/*title*/
  e[1] && to(e);
  r = new Jl({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: wt(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        e[0] ?? 1
      ],
      yScale: Zl(),
      yDomain: at(
        /*counts*/
        e[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        e[4]
      ) ? (
        /*colorScale*/
        e[4]
      ) : at(0, 1.00001, 1 / /*data*/
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
      $$slots: { default: [Yu] },
      $$scope: { ctx: e }
    }
  });
  const d = [Zu, Xu, Uu], m = [];
  function c(g, _) {
    return (
      /*$$slots*/
      g[10].caption ? 0 : (
        /*hoveredIndex*/
        g[7] != null ? 1 : (
          /*mostCommonDatum*/
          g[8] ? 2 : -1
        )
      )
    );
  }
  return ~(a = c(e)) && (s = m[a] = d[a](e)), {
    c() {
      t = p("div"), u && u.c(), n = q(), l = p("div"), X(r.$$.fragment), i = q(), o = p("div"), s && s.c(), Q(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), Q(l, "height", "6px"), h(l, "class", "rounded overflow-hidden mb-1"), h(o, "class", "text-xs text-slate-800"), h(t, "class", "gap-1 items-center"), Z(
        t,
        "flex",
        /*horizontalLayout*/
        e[2]
      );
    },
    m(g, _) {
      L(g, t, _), u && u.m(t, null), b(t, n), b(t, l), K(r, l, null), b(t, i), b(t, o), ~a && m[a].m(o, null), f = !0;
    },
    p(g, _) {
      /*title*/
      g[1] ? u ? u.p(g, _) : (u = to(g), u.c(), u.m(t, n)) : u && (u.d(1), u = null);
      const y = {};
      _ & /*width*/
      1 && (y.xRange = [
        0,
        /*width*/
        g[0] ?? 1
      ]), _ & /*counts*/
      32 && (y.yDomain = at(
        /*counts*/
        g[5].length
      )), _ & /*colorScale, data*/
      80 && (y.yRange = Array.isArray(
        /*colorScale*/
        g[4]
      ) ? (
        /*colorScale*/
        g[4]
      ) : at(0, 1.00001, 1 / /*data*/
      (g[6].length - 1)).map(
        /*func_2*/
        g[17]
      )), _ & /*data*/
      64 && (y.data = /*data*/
      g[6]), _ & /*hoveredIndex*/
      128 && (y.custom = { hoveredGet: (
        /*func_3*/
        g[18]
      ) }), _ & /*$$scope, hoveredIndex*/
      524416 && (y.$$scope = { dirty: _, ctx: g }), r.$set(y), (!f || _ & /*width*/
      1) && Q(
        l,
        "width",
        /*width*/
        g[0] == null ? "100%" : `${/*width*/
        g[0]}px`
      );
      let w = a;
      a = c(g), a === w ? ~a && m[a].p(g, _) : (s && ($(), z(m[w], 1, 1, () => {
        m[w] = null;
      }), ee()), ~a ? (s = m[a], s ? s.p(g, _) : (s = m[a] = d[a](g), s.c()), C(s, 1), s.m(o, null)) : s = null), (!f || _ & /*horizontalLayout*/
      4) && Z(
        t,
        "flex",
        /*horizontalLayout*/
        g[2]
      );
    },
    i(g) {
      f || (C(r.$$.fragment, g), C(s), f = !0);
    },
    o(g) {
      z(r.$$.fragment, g), z(s), f = !1;
    },
    d(g) {
      g && M(t), u && u.d(), Y(r), ~a && m[a].d();
    }
  };
}
function Wu(e) {
  let t, n, l, r, i, o, a, s, f = !!/*title*/
  e[1] && no(e);
  l = new Jl({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: wt(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        e[0] ?? 1
      ],
      yScale: Zl(),
      yDomain: at(
        /*counts*/
        e[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        e[4]
      ) ? (
        /*colorScale*/
        e[4]
      ) : at(0, 1.00001, 1 / /*data*/
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
      $$slots: { default: [$u] },
      $$scope: { ctx: e }
    }
  });
  const u = [nc, tc, ec], d = [];
  function m(c, g) {
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
  return ~(o = m(e)) && (a = d[o] = u[o](e)), {
    c() {
      f && f.c(), t = q(), n = p("div"), X(l.$$.fragment), r = q(), i = p("div"), a && a.c(), Q(
        n,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), Q(n, "height", "6px"), h(n, "class", "rounded overflow-hidden mb-1"), h(i, "class", "text-xs text-slate-800");
    },
    m(c, g) {
      f && f.m(c, g), L(c, t, g), L(c, n, g), K(l, n, null), L(c, r, g), L(c, i, g), ~o && d[o].m(i, null), s = !0;
    },
    p(c, g) {
      /*title*/
      c[1] ? f ? f.p(c, g) : (f = no(c), f.c(), f.m(t.parentNode, t)) : f && (f.d(1), f = null);
      const _ = {};
      g & /*width*/
      1 && (_.xRange = [
        0,
        /*width*/
        c[0] ?? 1
      ]), g & /*counts*/
      32 && (_.yDomain = at(
        /*counts*/
        c[5].length
      )), g & /*colorScale, data*/
      80 && (_.yRange = Array.isArray(
        /*colorScale*/
        c[4]
      ) ? (
        /*colorScale*/
        c[4]
      ) : at(0, 1.00001, 1 / /*data*/
      (c[6].length - 1)).map(
        /*func*/
        c[14]
      )), g & /*data*/
      64 && (_.data = /*data*/
      c[6]), g & /*hoveredIndex*/
      128 && (_.custom = { hoveredGet: (
        /*func_1*/
        c[15]
      ) }), g & /*$$scope, hoveredIndex*/
      524416 && (_.$$scope = { dirty: g, ctx: c }), l.$set(_), (!s || g & /*width*/
      1) && Q(
        n,
        "width",
        /*width*/
        c[0] == null ? "100%" : `${/*width*/
        c[0]}px`
      );
      let y = o;
      o = m(c), o === y ? ~o && d[o].p(c, g) : (a && ($(), z(d[y], 1, 1, () => {
        d[y] = null;
      }), ee()), ~o ? (a = d[o], a ? a.p(c, g) : (a = d[o] = u[o](c), a.c()), C(a, 1), a.m(i, null)) : a = null);
    },
    i(c) {
      s || (C(l.$$.fragment, c), C(a), s = !0);
    },
    o(c) {
      z(l.$$.fragment, c), z(a), s = !1;
    },
    d(c) {
      f && f.d(c), c && M(t), c && M(n), Y(l), c && M(r), c && M(i), ~o && d[o].d();
    }
  };
}
function to(e) {
  let t, n;
  return {
    c() {
      t = p("div"), n = F(
        /*title*/
        e[1]
      ), h(t, "class", "font-bold text-xs truncate text-right"), Q(t, "width", "84px");
    },
    m(l, r) {
      L(l, t, r), b(t, n);
    },
    p(l, r) {
      r & /*title*/
      2 && V(
        n,
        /*title*/
        l[1]
      );
    },
    d(l) {
      l && M(t);
    }
  };
}
function Ku(e) {
  let t, n;
  return t = new Jo({}), t.$on(
    "hover",
    /*hover_handler_1*/
    e[16]
  ), {
    c() {
      X(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p: G,
    i(l) {
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(t, l);
    }
  };
}
function Yu(e) {
  let t, n;
  return t = new Yo({
    props: {
      $$slots: { default: [Ku] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      X(t.$$.fragment);
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
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(t, l);
    }
  };
}
function Uu(e) {
  let t, n = (
    /*makeTooltipText*/
    e[9](
      /*mostCommonDatum*/
      e[8]
    ) + ""
  ), l;
  return {
    c() {
      t = new Yl(!1), l = ve(), t.a = l;
    },
    m(r, i) {
      t.m(n, r, i), L(r, l, i);
    },
    p(r, i) {
      i & /*mostCommonDatum*/
      256 && n !== (n = /*makeTooltipText*/
      r[9](
        /*mostCommonDatum*/
        r[8]
      ) + "") && t.p(n);
    },
    i: G,
    o: G,
    d(r) {
      r && M(l), r && t.d();
    }
  };
}
function Xu(e) {
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
      t = new Yl(!1), l = ve(), t.a = l;
    },
    m(r, i) {
      t.m(n, r, i), L(r, l, i);
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
    i: G,
    o: G,
    d(r) {
      r && M(l), r && t.d();
    }
  };
}
function Zu(e) {
  let t;
  const n = (
    /*#slots*/
    e[12].caption
  ), l = et(
    n,
    e,
    /*$$scope*/
    e[19],
    $i
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
      524288) && nt(
        l,
        n,
        r,
        /*$$scope*/
        r[19],
        t ? tt(
          n,
          /*$$scope*/
          r[19],
          i,
          Qu
        ) : lt(
          /*$$scope*/
          r[19]
        ),
        $i
      );
    },
    i(r) {
      t || (C(l, r), t = !0);
    },
    o(r) {
      z(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function no(e) {
  let t, n;
  return {
    c() {
      t = p("div"), n = F(
        /*title*/
        e[1]
      ), h(t, "class", "font-bold text-xs truncate text-right");
    },
    m(l, r) {
      L(l, t, r), b(t, n);
    },
    p(l, r) {
      r & /*title*/
      2 && V(
        n,
        /*title*/
        l[1]
      );
    },
    d(l) {
      l && M(t);
    }
  };
}
function Ju(e) {
  let t, n;
  return t = new Jo({}), t.$on(
    "hover",
    /*hover_handler*/
    e[13]
  ), {
    c() {
      X(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p: G,
    i(l) {
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(t, l);
    }
  };
}
function $u(e) {
  let t, n;
  return t = new Yo({
    props: {
      $$slots: { default: [Ju] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      X(t.$$.fragment);
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
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(t, l);
    }
  };
}
function ec(e) {
  let t, n = (
    /*makeTooltipText*/
    e[9](
      /*mostCommonDatum*/
      e[8]
    ) + ""
  ), l;
  return {
    c() {
      t = new Yl(!1), l = ve(), t.a = l;
    },
    m(r, i) {
      t.m(n, r, i), L(r, l, i);
    },
    p(r, i) {
      i & /*mostCommonDatum*/
      256 && n !== (n = /*makeTooltipText*/
      r[9](
        /*mostCommonDatum*/
        r[8]
      ) + "") && t.p(n);
    },
    i: G,
    o: G,
    d(r) {
      r && M(l), r && t.d();
    }
  };
}
function tc(e) {
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
      t = new Yl(!1), l = ve(), t.a = l;
    },
    m(r, i) {
      t.m(n, r, i), L(r, l, i);
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
    i: G,
    o: G,
    d(r) {
      r && M(l), r && t.d();
    }
  };
}
function nc(e) {
  let t;
  const n = (
    /*#slots*/
    e[12].caption
  ), l = et(
    n,
    e,
    /*$$scope*/
    e[19],
    eo
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
      524288) && nt(
        l,
        n,
        r,
        /*$$scope*/
        r[19],
        t ? tt(
          n,
          /*$$scope*/
          r[19],
          i,
          Vu
        ) : lt(
          /*$$scope*/
          r[19]
        ),
        eo
      );
    },
    i(r) {
      t || (C(l, r), t = !0);
    },
    o(r) {
      z(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function lc(e) {
  let t, n, l, r;
  const i = [Wu, Gu], o = [];
  function a(s, f) {
    return (
      /*noParent*/
      s[3] ? 0 : 1
    );
  }
  return t = a(e), n = o[t] = i[t](e), {
    c() {
      n.c(), l = ve();
    },
    m(s, f) {
      o[t].m(s, f), L(s, l, f), r = !0;
    },
    p(s, [f]) {
      let u = t;
      t = a(s), t === u ? o[t].p(s, f) : ($(), z(o[u], 1, 1, () => {
        o[u] = null;
      }), ee(), n = o[t], n ? n.p(s, f) : (n = o[t] = i[t](s), n.c()), C(n, 1), n.m(l.parentNode, l));
    },
    i(s) {
      r || (C(n), r = !0);
    },
    o(s) {
      z(n), r = !1;
    },
    d(s) {
      o[t].d(s), s && M(l);
    }
  };
}
function rc(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = Cr(l);
  let { width: o = null } = t, { title: a = null } = t, { horizontalLayout: s = !1 } = t, { noParent: f = !1 } = t, { colorScale: u = Array.from(ts) } = t, { counts: d = null } = t, { order: m = [] } = t, c = [], g;
  se(",");
  let _ = se(".1~%"), y = 1;
  function w(E) {
    return `<strong>${_(E.count / y)}</strong> ${E.name}`;
  }
  let x = null;
  const S = (E) => n(7, g = E.detail ? E.detail.index : null), O = (E) => u(E), A = (E) => E.index == g, R = (E) => n(7, g = E.detail ? E.detail.index : null), D = (E) => u(E), T = (E) => E.index == g;
  return e.$$set = (E) => {
    "width" in E && n(0, o = E.width), "title" in E && n(1, a = E.title), "horizontalLayout" in E && n(2, s = E.horizontalLayout), "noParent" in E && n(3, f = E.noParent), "colorScale" in E && n(4, u = E.colorScale), "counts" in E && n(5, d = E.counts), "order" in E && n(11, m = E.order), "$$scope" in E && n(19, r = E.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*counts, order*/
    2080)
      if (d && m.length > 0) {
        let E = Object.values(d).reduce((I, B) => I + B, 0), v = 0;
        n(6, c = m.map((I, B) => {
          let U = v;
          return v += d[I] || 0, {
            start: U / E,
            end: v / E,
            index: B,
            name: I,
            count: d[I] || 0
          };
        }));
      } else
        n(6, c = []);
    e.$$.dirty & /*counts*/
    32 && (d ? y = Object.values(d).reduce((E, v) => E + v, 0) : y = 1), e.$$.dirty & /*data*/
    64 && (c.length > 0 ? n(8, x = c.reduce((E, v) => E.count > v.count ? E : v, c[0])) : n(8, x = null));
  }, [
    o,
    a,
    s,
    f,
    u,
    d,
    c,
    g,
    x,
    w,
    i,
    m,
    l,
    S,
    O,
    A,
    R,
    D,
    T,
    r
  ];
}
class $o extends ye {
  constructor(t) {
    super(), _e(this, t, rc, lc, he, {
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
function Cn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Cn.prototype = {
  constructor: Cn,
  scale: function(e) {
    return e === 1 ? this : new Cn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Cn(this.k, this.x + this.k * e, this.y + this.k * t);
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
Cn.prototype;
function ic(e) {
  let t;
  return {
    c() {
      t = p("div"), t.innerHTML = `<div class="text-4xl mb-2">📊</div> 
      <div class="text-sm font-mono">No query results yet</div> 
      <div class="text-xs mt-1">Enter a query and click Run to see results</div>`, h(t, "class", "text-center py-8 text-gray-500 dark:text-gray-400");
    },
    m(n, l) {
      L(n, t, l);
    },
    p: G,
    i: G,
    o: G,
    d(n) {
      n && M(t);
    }
  };
}
function oc(e) {
  let t, n, l, r = (
    /*values*/
    (e[0].values.type || "Time Series") + ""
  ), i, o, a, s, f, u, d, m, c, g, _ = Ee(
    /*values*/
    e[0].values.length ?? 0
  ) + "", y, w, x, S, O, A, R, D, T, E, v, I, B = se(".1%")(
    /*values*/
    e[0].values.missingness ?? 0
  ) + "", U, ce, N, W, re, ue, oe, P, te, de, ze;
  function Ae(J, me) {
    return (
      /*showCountDetails*/
      J[4] ? sc : ac
    );
  }
  let Me = Ae(e), be = Me(e), fe = (
    /*showCountDetails*/
    e[4] && lo(e)
  );
  function je(J, me) {
    return (
      /*showMissingnessDetails*/
      J[5] ? cc : uc
    );
  }
  let Le = je(e), De = Le(e), ge = (
    /*showMissingnessDetails*/
    e[5] && io(e)
  );
  const vt = [hc, mc, gc], Ie = [];
  function Re(J, me) {
    return (
      /*values*/
      J[0].values.type == "binary" ? 0 : (
        /*values*/
        J[0].values.type == "continuous" ? 1 : (
          /*values*/
          J[0].values.type == "categorical" ? 2 : -1
        )
      )
    );
  }
  return ~(oe = Re(e)) && (P = Ie[oe] = vt[oe](e)), {
    c() {
      t = p("div"), n = p("span"), n.textContent = "Type:", l = q(), i = F(r), o = q(), a = p("div"), s = p("div"), f = p("div"), u = p("button"), be.c(), d = q(), m = p("span"), m.textContent = "Count:", c = q(), g = p("span"), y = F(_), w = q(), x = p("span"), x.textContent = "rows", S = q(), fe && fe.c(), O = q(), A = p("div"), R = p("div"), D = p("button"), De.c(), T = q(), E = p("span"), E.textContent = "Missingness:", v = q(), I = p("span"), U = F(B), ce = q(), ge && ge.c(), N = q(), W = p("div"), re = p("div"), re.innerHTML = '<span class="font-bold text-gray-900 dark:text-gray-100 mr-2">Values:</span>', ue = q(), P && P.c(), h(n, "class", "font-semibold"), h(t, "class", "text-sm font-mono text-gray-700 dark:text-gray-300 mb-4"), h(u, "class", "mr-2 focus:outline-none text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"), h(u, "aria-label", "Toggle count details"), Q(u, "font-size", "1.1em"), h(m, "class", "font-bold text-gray-900 dark:text-gray-100 mr-2"), h(g, "class", "tabular-nums text-gray-700 dark:text-gray-200"), h(x, "class", "ml-1 text-gray-500 dark:text-gray-400 text-sm"), h(f, "class", "flex items-center"), h(s, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-2 text-base w-full rounded-md"), h(D, "class", "mr-2 focus:outline-none text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"), h(D, "aria-label", "Toggle missingness details"), Q(D, "font-size", "1.1em"), h(E, "class", "font-bold text-gray-900 dark:text-gray-100 mr-2"), h(I, "class", "tabular-nums text-gray-700 dark:text-gray-200"), h(R, "class", "flex items-center"), h(A, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-2 text-base w-full rounded-md"), h(re, "class", "flex items-center mb-2"), h(W, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-2 text-base w-full rounded-md"), h(a, "class", "space-y-2");
    },
    m(J, me) {
      L(J, t, me), b(t, n), b(t, l), b(t, i), L(J, o, me), L(J, a, me), b(a, s), b(s, f), b(f, u), be.m(u, null), b(f, d), b(f, m), b(f, c), b(f, g), b(g, y), b(f, w), b(f, x), b(s, S), fe && fe.m(s, null), b(a, O), b(a, A), b(A, R), b(R, D), De.m(D, null), b(R, T), b(R, E), b(R, v), b(R, I), b(I, U), b(A, ce), ge && ge.m(A, null), b(a, N), b(a, W), b(W, re), b(W, ue), ~oe && Ie[oe].m(W, null), te = !0, de || (ze = [
        le(
          u,
          "click",
          /*click_handler*/
          e[6]
        ),
        le(
          D,
          "click",
          /*click_handler_1*/
          e[7]
        )
      ], de = !0);
    },
    p(J, me) {
      (!te || me & /*values*/
      1) && r !== (r = /*values*/
      (J[0].values.type || "Time Series") + "") && V(i, r), Me !== (Me = Ae(J)) && (be.d(1), be = Me(J), be && (be.c(), be.m(u, null))), (!te || me & /*values*/
      1) && _ !== (_ = Ee(
        /*values*/
        J[0].values.length ?? 0
      ) + "") && V(y, _), /*showCountDetails*/
      J[4] ? fe ? (fe.p(J, me), me & /*showCountDetails*/
      16 && C(fe, 1)) : (fe = lo(J), fe.c(), C(fe, 1), fe.m(s, null)) : fe && ($(), z(fe, 1, 1, () => {
        fe = null;
      }), ee()), Le !== (Le = je(J)) && (De.d(1), De = Le(J), De && (De.c(), De.m(D, null))), (!te || me & /*values*/
      1) && B !== (B = se(".1%")(
        /*values*/
        J[0].values.missingness ?? 0
      ) + "") && V(U, B), /*showMissingnessDetails*/
      J[5] ? ge ? (ge.p(J, me), me & /*showMissingnessDetails*/
      32 && C(ge, 1)) : (ge = io(J), ge.c(), C(ge, 1), ge.m(A, null)) : ge && ($(), z(ge, 1, 1, () => {
        ge = null;
      }), ee());
      let Oe = oe;
      oe = Re(J), oe === Oe ? ~oe && Ie[oe].p(J, me) : (P && ($(), z(Ie[Oe], 1, 1, () => {
        Ie[Oe] = null;
      }), ee()), ~oe ? (P = Ie[oe], P ? P.p(J, me) : (P = Ie[oe] = vt[oe](J), P.c()), C(P, 1), P.m(W, null)) : P = null);
    },
    i(J) {
      te || (C(fe), C(ge), C(P), te = !0);
    },
    o(J) {
      z(fe), z(ge), z(P), te = !1;
    },
    d(J) {
      J && M(t), J && M(o), J && M(a), be.d(), fe && fe.d(), De.d(), ge && ge.d(), ~oe && Ie[oe].d(), de = !1, He(ze);
    }
  };
}
function ac(e) {
  let t;
  return {
    c() {
      t = F("▶");
    },
    m(n, l) {
      L(n, t, l);
    },
    d(n) {
      n && M(t);
    }
  };
}
function sc(e) {
  let t;
  return {
    c() {
      t = F("▼");
    },
    m(n, l) {
      L(n, t, l);
    },
    d(n) {
      n && M(t);
    }
  };
}
function lo(e) {
  let t, n, l, r, i, o, a = Ee(
    /*values*/
    e[0].values.num_unique_ids ?? 0
  ) + "", s, f, u = Ee(
    /*idsLength*/
    e[1]
  ) + "", d, m, c, g, _, y, w, x, S;
  return c = new Rt({
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
      $$slots: { caption: [fc] },
      $$scope: { ctx: e }
    }
  }), x = new Zt({
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
      t = p("div"), n = p("div"), l = p("div"), r = p("span"), r.textContent = "Unique IDs:", i = q(), o = p("span"), s = F(a), f = F(" / "), d = F(u), m = q(), X(c.$$.fragment), g = q(), _ = p("div"), y = p("div"), y.innerHTML = '<span class="text-gray-600 dark:text-gray-400">Number of timesteps per trajectory:</span>', w = q(), X(x.$$.fragment), h(r, "class", "text-gray-600 dark:text-gray-400"), h(o, "class", "font-mono font-semibold text-gray-700 dark:text-gray-200 text-xs sm:text-sm"), h(l, "class", "flex flex-wrap justify-between items-center mb-1 gap-1"), h(n, "class", "mb-2"), h(y, "class", "flex justify-between items-center mb-1"), h(t, "class", "mt-2 p-2 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-700 dark:text-gray-300");
    },
    m(O, A) {
      L(O, t, A), b(t, n), b(n, l), b(l, r), b(l, i), b(l, o), b(o, s), b(o, f), b(o, d), b(n, m), K(c, n, null), b(t, g), b(t, _), b(_, y), b(_, w), K(x, _, null), S = !0;
    },
    p(O, A) {
      (!S || A & /*values*/
      1) && a !== (a = Ee(
        /*values*/
        O[0].values.num_unique_ids ?? 0
      ) + "") && V(s, a), (!S || A & /*idsLength*/
      2) && u !== (u = Ee(
        /*idsLength*/
        O[1]
      ) + "") && V(d, u);
      const R = {};
      A & /*idsLength, values*/
      3 && (R.value = /*idsLength*/
      O[1] > 0 ? (
        /*values*/
        (O[0].values.num_unique_ids ?? 0) / /*idsLength*/
        O[1]
      ) : 0), A & /*$$scope, idsLength, values*/
      515 && (R.$$scope = { dirty: A, ctx: O }), c.$set(R);
      const D = {};
      A & /*values*/
      1 && (D.histValues = /*values*/
      O[0].values.ids_hist), A & /*values*/
      1 && (D.mean = /*values*/
      O[0].values.ids_hist_mean), x.$set(D);
    },
    i(O) {
      S || (C(c.$$.fragment, O), C(x.$$.fragment, O), S = !0);
    },
    o(O) {
      z(c.$$.fragment, O), z(x.$$.fragment, O), S = !1;
    },
    d(O) {
      O && M(t), Y(c), Y(x);
    }
  };
}
function ro(e) {
  let t, n, l = Ee(
    /*values*/
    e[0].values.num_unique_ids ?? 0
  ) + "", r, i, o = Ee(
    /*idsLength*/
    e[1]
  ) + "", a, s;
  return {
    c() {
      t = p("span"), n = F("("), r = F(l), i = F(" / "), a = F(o), s = F(")"), h(t, "class", "text-gray-500 dark:text-gray-400 ml-1 text-xs");
    },
    m(f, u) {
      L(f, t, u), b(t, n), b(t, r), b(t, i), b(t, a), b(t, s);
    },
    p(f, u) {
      u & /*values*/
      1 && l !== (l = Ee(
        /*values*/
        f[0].values.num_unique_ids ?? 0
      ) + "") && V(r, l), u & /*idsLength*/
      2 && o !== (o = Ee(
        /*idsLength*/
        f[1]
      ) + "") && V(a, o);
    },
    d(f) {
      f && M(t);
    }
  };
}
function fc(e) {
  let t, n, l = (
    /*idsLength*/
    (e[1] > 0 ? se(".1%")(
      /*values*/
      (e[0].values.num_unique_ids ?? 0) / /*idsLength*/
      e[1]
    ) : "0.0%") + ""
  ), r, i, o = (
    /*idsLength*/
    e[1] > 0 && ro(e)
  );
  return {
    c() {
      t = p("span"), n = p("strong"), r = F(l), i = q(), o && o.c(), h(t, "slot", "caption");
    },
    m(a, s) {
      L(a, t, s), b(t, n), b(n, r), b(t, i), o && o.m(t, null);
    },
    p(a, s) {
      s & /*idsLength, values*/
      3 && l !== (l = /*idsLength*/
      (a[1] > 0 ? se(".1%")(
        /*values*/
        (a[0].values.num_unique_ids ?? 0) / /*idsLength*/
        a[1]
      ) : "0.0%") + "") && V(r, l), /*idsLength*/
      a[1] > 0 ? o ? o.p(a, s) : (o = ro(a), o.c(), o.m(t, null)) : o && (o.d(1), o = null);
    },
    d(a) {
      a && M(t), o && o.d();
    }
  };
}
function uc(e) {
  let t;
  return {
    c() {
      t = F("▶");
    },
    m(n, l) {
      L(n, t, l);
    },
    d(n) {
      n && M(t);
    }
  };
}
function cc(e) {
  let t;
  return {
    c() {
      t = F("▼");
    },
    m(n, l) {
      L(n, t, l);
    },
    d(n) {
      n && M(t);
    }
  };
}
function io(e) {
  let t, n, l, r, i, o, a = Ee(
    /*values*/
    e[0].values.num_missing_values ?? 0
  ) + "", s, f, u = Ee(
    /*values*/
    e[0].values.length ?? 0
  ) + "", d, m, c, g, _ = (
    /*values*/
    e[0].values.missing_ids_hist && Object.keys(
      /*values*/
      e[0].values.missing_ids_hist
    ).length > 0
  ), y;
  c = new Rt({
    props: {
      value: (
        /*values*/
        e[0].values.missingness ?? 0
      ),
      width: null,
      color: "#ef4444",
      showFullBar: !0,
      $$slots: { caption: [dc] },
      $$scope: { ctx: e }
    }
  });
  let w = _ && oo(e);
  return {
    c() {
      t = p("div"), n = p("div"), l = p("div"), r = p("span"), r.textContent = "Number of missing values:", i = q(), o = p("span"), s = F(a), f = F(" / "), d = F(u), m = q(), X(c.$$.fragment), g = q(), w && w.c(), h(r, "class", "text-gray-600 dark:text-gray-400"), h(o, "class", "font-mono font-semibold text-gray-700 dark:text-gray-200 text-xs sm:text-sm"), h(l, "class", "flex flex-wrap justify-between items-center mb-1 gap-1"), h(t, "class", "mt-2 p-2 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-sm text-gray-700 dark:text-gray-300");
    },
    m(x, S) {
      L(x, t, S), b(t, n), b(n, l), b(l, r), b(l, i), b(l, o), b(o, s), b(o, f), b(o, d), b(n, m), K(c, n, null), b(n, g), w && w.m(n, null), y = !0;
    },
    p(x, S) {
      (!y || S & /*values*/
      1) && a !== (a = Ee(
        /*values*/
        x[0].values.num_missing_values ?? 0
      ) + "") && V(s, a), (!y || S & /*values*/
      1) && u !== (u = Ee(
        /*values*/
        x[0].values.length ?? 0
      ) + "") && V(d, u);
      const O = {};
      S & /*values*/
      1 && (O.value = /*values*/
      x[0].values.missingness ?? 0), S & /*$$scope, values*/
      513 && (O.$$scope = { dirty: S, ctx: x }), c.$set(O), S & /*values*/
      1 && (_ = /*values*/
      x[0].values.missing_ids_hist && Object.keys(
        /*values*/
        x[0].values.missing_ids_hist
      ).length > 0), _ ? w ? (w.p(x, S), S & /*values*/
      1 && C(w, 1)) : (w = oo(x), w.c(), C(w, 1), w.m(n, null)) : w && ($(), z(w, 1, 1, () => {
        w = null;
      }), ee());
    },
    i(x) {
      y || (C(c.$$.fragment, x), C(w), y = !0);
    },
    o(x) {
      z(c.$$.fragment, x), z(w), y = !1;
    },
    d(x) {
      x && M(t), Y(c), w && w.d();
    }
  };
}
function dc(e) {
  let t, n, l = se(".1%")(
    /*values*/
    e[0].values.missingness ?? 0
  ) + "", r, i, o, a, s = Ee(
    /*values*/
    e[0].values.num_missing_values ?? 0
  ) + "", f, u, d = Ee(
    /*values*/
    e[0].values.length ?? 0
  ) + "", m, c;
  return {
    c() {
      t = p("span"), n = p("strong"), r = F(l), i = q(), o = p("span"), a = F("("), f = F(s), u = F(" / "), m = F(d), c = F(")"), h(o, "class", "text-gray-500 dark:text-gray-400 ml-1 text-xs"), h(t, "slot", "caption");
    },
    m(g, _) {
      L(g, t, _), b(t, n), b(n, r), b(t, i), b(t, o), b(o, a), b(o, f), b(o, u), b(o, m), b(o, c);
    },
    p(g, _) {
      _ & /*values*/
      1 && l !== (l = se(".1%")(
        /*values*/
        g[0].values.missingness ?? 0
      ) + "") && V(r, l), _ & /*values*/
      1 && s !== (s = Ee(
        /*values*/
        g[0].values.num_missing_values ?? 0
      ) + "") && V(f, s), _ & /*values*/
      1 && d !== (d = Ee(
        /*values*/
        g[0].values.length ?? 0
      ) + "") && V(m, d);
    },
    d(g) {
      g && M(t);
    }
  };
}
function oo(e) {
  let t, n, l, r;
  return l = new Zt({
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
      t = p("div"), t.innerHTML = '<span class="text-gray-600 dark:text-gray-400">Number of missing values per trajectory:</span>', n = q(), X(l.$$.fragment), h(t, "class", "flex justify-between items-center mb-1");
    },
    m(i, o) {
      L(i, t, o), L(i, n, o), K(l, i, o), r = !0;
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
      r || (C(l.$$.fragment, i), r = !0);
    },
    o(i) {
      z(l.$$.fragment, i), r = !1;
    },
    d(i) {
      i && M(t), i && M(n), Y(l, i);
    }
  };
}
function gc(e) {
  let t, n;
  return t = new $o({
    props: {
      order: Object.keys(
        /*values*/
        e[0].values.counts || {}
      ).sort(
        /*func*/
        e[8]
      ),
      counts: (
        /*values*/
        e[0].values.counts || {}
      ),
      width: 200
    }
  }), {
    c() {
      X(t.$$.fragment);
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
        l[8]
      )), r & /*values*/
      1 && (i.counts = /*values*/
      l[0].values.counts || {}), t.$set(i);
    },
    i(l) {
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(t, l);
    }
  };
}
function mc(e) {
  let t, n;
  return t = new Zt({
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
      X(t.$$.fragment);
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
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(t, l);
    }
  };
}
function hc(e) {
  let t, n;
  return t = new Rt({
    props: {
      value: (
        /*values*/
        e[0].values.mean ?? 0
      ),
      width: 200,
      color: "#d97706",
      showFullBar: !0,
      $$slots: { caption: [bc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      X(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*values*/
      1 && (i.value = /*values*/
      l[0].values.mean ?? 0), r & /*$$scope, values*/
      513 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(t, l);
    }
  };
}
function bc(e) {
  let t, n, l = se(".1%")(
    /*values*/
    e[0].values.mean ?? 0
  ) + "", r, i, o, a = se(".1%")(1 - /*values*/
  (e[0].values.mean ?? 0)) + "", s, f;
  return {
    c() {
      t = p("span"), n = p("strong"), r = F(l), i = F(`
              true,
              `), o = p("strong"), s = F(a), f = F(`
              false`), h(t, "slot", "caption");
    },
    m(u, d) {
      L(u, t, d), b(t, n), b(n, r), b(t, i), b(t, o), b(o, s), b(t, f);
    },
    p(u, d) {
      d & /*values*/
      1 && l !== (l = se(".1%")(
        /*values*/
        u[0].values.mean ?? 0
      ) + "") && V(r, l), d & /*values*/
      1 && a !== (a = se(".1%")(1 - /*values*/
      (u[0].values.mean ?? 0)) + "") && V(s, a);
    },
    d(u) {
      u && M(t);
    }
  };
}
function _c(e) {
  let t, n, l, r, i, o, a;
  const s = [oc, ic], f = [];
  function u(d, m) {
    return (
      /*values*/
      d[0] && /*values*/
      d[0].values ? 0 : 1
    );
  }
  return r = u(e), i = f[r] = s[r](e), {
    c() {
      t = p("div"), n = p("div"), n.innerHTML = `<h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Query Result</h3> 
    
    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="text-gray-400"><path d="M15 8a3 3 0 1 0-6 0v8a3 3 0 1 0 6 0V8z"></path><path d="M12 3v2m0 14v2m7-7h2m-18 0H3"></path></svg>`, l = q(), i.c(), h(n, "class", "flex items-center justify-between mb-2"), h(t, "class", o = "bg-white dark:bg-gray-900 p-4 mb-0 border-0 rounded-none " + /*width*/
      e[2] + " transition-colors duration-200 " + /*scrollable*/
      (e[3] ? "h-full overflow-y-auto" : ""));
    },
    m(d, m) {
      L(d, t, m), b(t, n), b(t, l), f[r].m(t, null), a = !0;
    },
    p(d, [m]) {
      let c = r;
      r = u(d), r === c ? f[r].p(d, m) : ($(), z(f[c], 1, 1, () => {
        f[c] = null;
      }), ee(), i = f[r], i ? i.p(d, m) : (i = f[r] = s[r](d), i.c()), C(i, 1), i.m(t, null)), (!a || m & /*width, scrollable*/
      12 && o !== (o = "bg-white dark:bg-gray-900 p-4 mb-0 border-0 rounded-none " + /*width*/
      d[2] + " transition-colors duration-200 " + /*scrollable*/
      (d[3] ? "h-full overflow-y-auto" : ""))) && h(t, "class", o);
    },
    i(d) {
      a || (C(i), a = !0);
    },
    o(d) {
      z(i), a = !1;
    },
    d(d) {
      d && M(t), f[r].d();
    }
  };
}
function Ee(e) {
  var t;
  return ((t = e == null ? void 0 : e.toLocaleString) == null ? void 0 : t.call(e)) ?? e;
}
function yc(e, t, n) {
  let { values: l = null } = t, { idsLength: r = 0 } = t, { width: i = "w-full max-w-2xl" } = t, { scrollable: o = !1 } = t, a = !1, s = !1;
  const f = () => n(4, a = !a), u = () => n(5, s = !s), d = (m, c) => {
    var g, _;
    return (((g = l.values.counts) == null ? void 0 : g[c]) ?? 0) - (((_ = l.values.counts) == null ? void 0 : _[m]) ?? 0);
  };
  return e.$$set = (m) => {
    "values" in m && n(0, l = m.values), "idsLength" in m && n(1, r = m.idsLength), "width" in m && n(2, i = m.width), "scrollable" in m && n(3, o = m.scrollable);
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
    s,
    f,
    u,
    d
  ];
}
class pc extends ye {
  constructor(t) {
    super(), _e(this, t, yc, _c, he, {
      values: 0,
      idsLength: 1,
      width: 2,
      scrollable: 3
    });
  }
}
function ao(e) {
  var m, c, g;
  let t, n, l, r, i, o, a, s, f = (
    /*result*/
    ((m = e[1]) == null ? void 0 : m.values) && so(e)
  ), u = (
    /*result*/
    ((c = e[1]) == null ? void 0 : c.occurrences) && go(e)
  ), d = (
    /*result*/
    ((g = e[1]) == null ? void 0 : g.durations) && ho(e)
  );
  return {
    c() {
      t = p("div"), n = p("div"), l = F(
        /*queryText*/
        e[0]
      ), r = q(), i = p("div"), f && f.c(), o = q(), u && u.c(), a = q(), d && d.c(), h(n, "class", "mt-3 mb-3 p-2 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono text-gray-700 dark:text-gray-300"), h(i, "class", "space-y-2 mt-2"), h(t, "class", "px-3 pb-3 border-t border-gray-200 dark:border-gray-700");
    },
    m(_, y) {
      L(_, t, y), b(t, n), b(n, l), b(t, r), b(t, i), f && f.m(i, null), b(i, o), u && u.m(i, null), b(i, a), d && d.m(i, null), s = !0;
    },
    p(_, y) {
      var w, x, S;
      (!s || y & /*queryText*/
      1) && V(
        l,
        /*queryText*/
        _[0]
      ), /*result*/
      (w = _[1]) != null && w.values ? f ? (f.p(_, y), y & /*result*/
      2 && C(f, 1)) : (f = so(_), f.c(), C(f, 1), f.m(i, o)) : f && ($(), z(f, 1, 1, () => {
        f = null;
      }), ee()), /*result*/
      (x = _[1]) != null && x.occurrences ? u ? (u.p(_, y), y & /*result*/
      2 && C(u, 1)) : (u = go(_), u.c(), C(u, 1), u.m(i, a)) : u && ($(), z(u, 1, 1, () => {
        u = null;
      }), ee()), /*result*/
      (S = _[1]) != null && S.durations ? d ? (d.p(_, y), y & /*result*/
      2 && C(d, 1)) : (d = ho(_), d.c(), C(d, 1), d.m(i, null)) : d && ($(), z(d, 1, 1, () => {
        d = null;
      }), ee());
    },
    i(_) {
      s || (C(f), C(u), C(d), s = !0);
    },
    o(_) {
      z(f), z(u), z(d), s = !1;
    },
    d(_) {
      _ && M(t), f && f.d(), u && u.d(), d && d.d();
    }
  };
}
function so(e) {
  let t, n, l, r, i, o = Je(
    /*result*/
    e[1].values.length ?? 0
  ) + "", a, s, f, u, d, m, c = (
    /*result*/
    e[1].values.num_unique_ids !== void 0 && fo(e)
  ), g = (
    /*result*/
    e[1].values.missingness !== void 0 && uo(e)
  ), _ = (
    /*result*/
    e[1].values.type && co(e)
  );
  return {
    c() {
      t = p("div"), n = p("div"), l = p("span"), l.textContent = "Count:", r = q(), i = p("span"), a = F(o), s = F(" rows"), f = q(), c && c.c(), u = q(), g && g.c(), d = q(), _ && _.c(), h(l, "class", "text-gray-600 dark:text-gray-400"), h(i, "class", "font-mono text-gray-700 dark:text-gray-300"), h(n, "class", "flex items-center justify-between text-xs"), h(t, "class", "space-y-2");
    },
    m(y, w) {
      L(y, t, w), b(t, n), b(n, l), b(n, r), b(n, i), b(i, a), b(i, s), b(t, f), c && c.m(t, null), b(t, u), g && g.m(t, null), b(t, d), _ && _.m(t, null), m = !0;
    },
    p(y, w) {
      (!m || w & /*result*/
      2) && o !== (o = Je(
        /*result*/
        y[1].values.length ?? 0
      ) + "") && V(a, o), /*result*/
      y[1].values.num_unique_ids !== void 0 ? c ? (c.p(y, w), w & /*result*/
      2 && C(c, 1)) : (c = fo(y), c.c(), C(c, 1), c.m(t, u)) : c && ($(), z(c, 1, 1, () => {
        c = null;
      }), ee()), /*result*/
      y[1].values.missingness !== void 0 ? g ? (g.p(y, w), w & /*result*/
      2 && C(g, 1)) : (g = uo(y), g.c(), C(g, 1), g.m(t, d)) : g && ($(), z(g, 1, 1, () => {
        g = null;
      }), ee()), /*result*/
      y[1].values.type ? _ ? (_.p(y, w), w & /*result*/
      2 && C(_, 1)) : (_ = co(y), _.c(), C(_, 1), _.m(t, null)) : _ && ($(), z(_, 1, 1, () => {
        _ = null;
      }), ee());
    },
    i(y) {
      m || (C(c), C(g), C(_), m = !0);
    },
    o(y) {
      z(c), z(g), z(_), m = !1;
    },
    d(y) {
      y && M(t), c && c.d(), g && g.d(), _ && _.d();
    }
  };
}
function fo(e) {
  let t, n, l, r, i = Je(
    /*result*/
    e[1].values.num_unique_ids
  ) + "", o, a, s = Je(
    /*idsLength*/
    e[2]
  ) + "", f, u, d, m;
  return d = new Rt({
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
      $$slots: { caption: [kc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      t = p("div"), n = p("span"), n.textContent = "Unique IDs:", l = q(), r = p("span"), o = F(i), a = F(" / "), f = F(s), u = q(), X(d.$$.fragment), h(n, "class", "text-gray-600 dark:text-gray-400"), h(r, "class", "font-mono text-gray-700 dark:text-gray-300"), h(t, "class", "flex items-center justify-between text-xs");
    },
    m(c, g) {
      L(c, t, g), b(t, n), b(t, l), b(t, r), b(r, o), b(r, a), b(r, f), L(c, u, g), K(d, c, g), m = !0;
    },
    p(c, g) {
      (!m || g & /*result*/
      2) && i !== (i = Je(
        /*result*/
        c[1].values.num_unique_ids
      ) + "") && V(o, i), (!m || g & /*idsLength*/
      4) && s !== (s = Je(
        /*idsLength*/
        c[2]
      ) + "") && V(f, s);
      const _ = {};
      g & /*idsLength, result*/
      6 && (_.value = /*idsLength*/
      c[2] > 0 ? (
        /*result*/
        c[1].values.num_unique_ids / /*idsLength*/
        c[2]
      ) : 0), g & /*$$scope, idsLength, result*/
      70 && (_.$$scope = { dirty: g, ctx: c }), d.$set(_);
    },
    i(c) {
      m || (C(d.$$.fragment, c), m = !0);
    },
    o(c) {
      z(d.$$.fragment, c), m = !1;
    },
    d(c) {
      c && M(t), c && M(u), Y(d, c);
    }
  };
}
function kc(e) {
  let t, n, l = (
    /*idsLength*/
    (e[2] > 0 ? se(".1%")(
      /*result*/
      e[1].values.num_unique_ids / /*idsLength*/
      e[2]
    ) : "0.0%") + ""
  ), r;
  return {
    c() {
      t = p("span"), n = p("strong"), r = F(l), h(t, "slot", "caption"), h(t, "class", "text-xs");
    },
    m(i, o) {
      L(i, t, o), b(t, n), b(n, r);
    },
    p(i, o) {
      o & /*idsLength, result*/
      6 && l !== (l = /*idsLength*/
      (i[2] > 0 ? se(".1%")(
        /*result*/
        i[1].values.num_unique_ids / /*idsLength*/
        i[2]
      ) : "0.0%") + "") && V(r, l);
    },
    d(i) {
      i && M(t);
    }
  };
}
function uo(e) {
  let t, n, l, r, i = se(".1%")(
    /*result*/
    e[1].values.missingness
  ) + "", o, a, s, f;
  return s = new Rt({
    props: {
      value: (
        /*result*/
        e[1].values.missingness
      ),
      width: null,
      color: "#ef4444",
      showFullBar: !0,
      $$slots: { caption: [wc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      t = p("div"), n = p("span"), n.textContent = "Missing:", l = q(), r = p("span"), o = F(i), a = q(), X(s.$$.fragment), h(n, "class", "text-gray-600 dark:text-gray-400"), h(r, "class", "font-mono text-gray-700 dark:text-gray-300"), h(t, "class", "flex items-center justify-between text-xs");
    },
    m(u, d) {
      L(u, t, d), b(t, n), b(t, l), b(t, r), b(r, o), L(u, a, d), K(s, u, d), f = !0;
    },
    p(u, d) {
      (!f || d & /*result*/
      2) && i !== (i = se(".1%")(
        /*result*/
        u[1].values.missingness
      ) + "") && V(o, i);
      const m = {};
      d & /*result*/
      2 && (m.value = /*result*/
      u[1].values.missingness), d & /*$$scope, result*/
      66 && (m.$$scope = { dirty: d, ctx: u }), s.$set(m);
    },
    i(u) {
      f || (C(s.$$.fragment, u), f = !0);
    },
    o(u) {
      z(s.$$.fragment, u), f = !1;
    },
    d(u) {
      u && M(t), u && M(a), Y(s, u);
    }
  };
}
function wc(e) {
  let t, n, l = se(".1%")(
    /*result*/
    e[1].values.missingness
  ) + "", r;
  return {
    c() {
      t = p("span"), n = p("strong"), r = F(l), h(t, "slot", "caption"), h(t, "class", "text-xs");
    },
    m(i, o) {
      L(i, t, o), b(t, n), b(n, r);
    },
    p(i, o) {
      o & /*result*/
      2 && l !== (l = se(".1%")(
        /*result*/
        i[1].values.missingness
      ) + "") && V(r, l);
    },
    d(i) {
      i && M(t);
    }
  };
}
function co(e) {
  let t, n, l, r;
  const i = [Sc, xc, vc], o = [];
  function a(s, f) {
    return (
      /*result*/
      s[1].values.type === "binary" ? 0 : (
        /*result*/
        s[1].values.type === "continuous" && /*result*/
        s[1].values.hist ? 1 : (
          /*result*/
          s[1].values.type === "categorical" && /*result*/
          s[1].values.counts ? 2 : -1
        )
      )
    );
  }
  return ~(n = a(e)) && (l = o[n] = i[n](e)), {
    c() {
      t = p("div"), l && l.c(), h(t, "class", "mt-2");
    },
    m(s, f) {
      L(s, t, f), ~n && o[n].m(t, null), r = !0;
    },
    p(s, f) {
      let u = n;
      n = a(s), n === u ? ~n && o[n].p(s, f) : (l && ($(), z(o[u], 1, 1, () => {
        o[u] = null;
      }), ee()), ~n ? (l = o[n], l ? l.p(s, f) : (l = o[n] = i[n](s), l.c()), C(l, 1), l.m(t, null)) : l = null);
    },
    i(s) {
      r || (C(l), r = !0);
    },
    o(s) {
      z(l), r = !1;
    },
    d(s) {
      s && M(t), ~n && o[n].d();
    }
  };
}
function vc(e) {
  let t, n;
  return t = new $o({
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
      X(t.$$.fragment);
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
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(t, l);
    }
  };
}
function xc(e) {
  let t, n;
  return t = new Zt({
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
      X(t.$$.fragment);
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
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(t, l);
    }
  };
}
function Sc(e) {
  let t, n;
  return t = new Rt({
    props: {
      value: (
        /*result*/
        e[1].values.mean ?? 0
      ),
      width: null,
      color: "#d97706",
      showFullBar: !0,
      $$slots: { caption: [Cc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      X(t.$$.fragment);
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
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(t, l);
    }
  };
}
function Cc(e) {
  let t, n, l = se(".1%")(
    /*result*/
    e[1].values.mean ?? 0
  ) + "", r, i;
  return {
    c() {
      t = p("span"), n = p("strong"), r = F(l), i = F(" true"), h(t, "slot", "caption"), h(t, "class", "text-xs");
    },
    m(o, a) {
      L(o, t, a), b(t, n), b(n, r), b(t, i);
    },
    p(o, a) {
      a & /*result*/
      2 && l !== (l = se(".1%")(
        /*result*/
        o[1].values.mean ?? 0
      ) + "") && V(r, l);
    },
    d(o) {
      o && M(t);
    }
  };
}
function go(e) {
  let t, n, l, r, i, o, a, s, f = Je(
    /*result*/
    e[1].occurrences.length ?? 0
  ) + "", u, d, m, c, g = (
    /*result*/
    e[1].occurrences.type === "continuous" && /*result*/
    e[1].occurrences.hist && mo(e)
  );
  return {
    c() {
      t = p("div"), n = p("div"), n.textContent = "Occurrences:", l = q(), r = p("div"), i = p("div"), o = p("span"), o.textContent = "Count:", a = q(), s = p("span"), u = F(f), d = F(" rows"), m = q(), g && g.c(), h(n, "class", "text-xs text-gray-600 dark:text-gray-400 mb-2"), h(o, "class", "text-gray-600 dark:text-gray-400"), h(s, "class", "font-mono text-gray-700 dark:text-gray-300"), h(i, "class", "flex items-center justify-between text-xs"), h(r, "class", "space-y-2"), h(t, "class", "mt-3 pt-2 border-t border-gray-200 dark:border-gray-700");
    },
    m(_, y) {
      L(_, t, y), b(t, n), b(t, l), b(t, r), b(r, i), b(i, o), b(i, a), b(i, s), b(s, u), b(s, d), b(r, m), g && g.m(r, null), c = !0;
    },
    p(_, y) {
      (!c || y & /*result*/
      2) && f !== (f = Je(
        /*result*/
        _[1].occurrences.length ?? 0
      ) + "") && V(u, f), /*result*/
      _[1].occurrences.type === "continuous" && /*result*/
      _[1].occurrences.hist ? g ? (g.p(_, y), y & /*result*/
      2 && C(g, 1)) : (g = mo(_), g.c(), C(g, 1), g.m(r, null)) : g && ($(), z(g, 1, 1, () => {
        g = null;
      }), ee());
    },
    i(_) {
      c || (C(g), c = !0);
    },
    o(_) {
      z(g), c = !1;
    },
    d(_) {
      _ && M(t), g && g.d();
    }
  };
}
function mo(e) {
  let t, n;
  return t = new Zt({
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
      X(t.$$.fragment);
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
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(t, l);
    }
  };
}
function ho(e) {
  let t, n, l, r, i, o, a, s, f = Je(
    /*result*/
    e[1].durations.length ?? 0
  ) + "", u, d, m, c, g = (
    /*result*/
    e[1].durations.type === "continuous" && /*result*/
    e[1].durations.hist && bo(e)
  );
  return {
    c() {
      t = p("div"), n = p("div"), n.textContent = "Durations:", l = q(), r = p("div"), i = p("div"), o = p("span"), o.textContent = "Count:", a = q(), s = p("span"), u = F(f), d = F(" rows"), m = q(), g && g.c(), h(n, "class", "text-xs text-gray-600 dark:text-gray-400 mb-2"), h(o, "class", "text-gray-600 dark:text-gray-400"), h(s, "class", "font-mono text-gray-700 dark:text-gray-300"), h(i, "class", "flex items-center justify-between text-xs"), h(r, "class", "space-y-2"), h(t, "class", "mt-3 pt-2 border-t border-gray-200 dark:border-gray-700");
    },
    m(_, y) {
      L(_, t, y), b(t, n), b(t, l), b(t, r), b(r, i), b(i, o), b(i, a), b(i, s), b(s, u), b(s, d), b(r, m), g && g.m(r, null), c = !0;
    },
    p(_, y) {
      (!c || y & /*result*/
      2) && f !== (f = Je(
        /*result*/
        _[1].durations.length ?? 0
      ) + "") && V(u, f), /*result*/
      _[1].durations.type === "continuous" && /*result*/
      _[1].durations.hist ? g ? (g.p(_, y), y & /*result*/
      2 && C(g, 1)) : (g = bo(_), g.c(), C(g, 1), g.m(r, null)) : g && ($(), z(g, 1, 1, () => {
        g = null;
      }), ee());
    },
    i(_) {
      c || (C(g), c = !0);
    },
    o(_) {
      z(g), c = !1;
    },
    d(_) {
      _ && M(t), g && g.d();
    }
  };
}
function bo(e) {
  let t, n;
  return t = new Zt({
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
      X(t.$$.fragment);
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
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(t, l);
    }
  };
}
function Mc(e) {
  let t, n, l, r, i, o, a, s, f, u, d, m, c = (
    /*isExpanded*/
    e[3] && ao(e)
  );
  return {
    c() {
      t = p("div"), n = p("button"), l = p("span"), r = F(
        /*queryText*/
        e[0]
      ), i = q(), o = we("svg"), a = we("path"), f = q(), c && c.c(), h(l, "class", "text-sm font-mono text-gray-700 dark:text-gray-300 truncate flex-1"), h(a, "stroke-linecap", "round"), h(a, "stroke-linejoin", "round"), h(a, "stroke-width", "2"), h(a, "d", "M19 9l-7 7-7-7"), h(o, "class", s = "w-4 h-4 text-gray-500 dark:text-gray-400 transform transition-transform duration-200 " + /*isExpanded*/
      (e[3] ? "rotate-180" : "")), h(o, "fill", "none"), h(o, "stroke", "currentColor"), h(o, "viewBox", "0 0 24 24"), h(n, "class", "w-full px-3 py-2 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none"), h(t, "class", "bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md mb-2 overflow-hidden");
    },
    m(g, _) {
      L(g, t, _), b(t, n), b(n, l), b(l, r), b(n, i), b(n, o), b(o, a), b(t, f), c && c.m(t, null), u = !0, d || (m = le(
        n,
        "click",
        /*toggleExpanded*/
        e[4]
      ), d = !0);
    },
    p(g, [_]) {
      (!u || _ & /*queryText*/
      1) && V(
        r,
        /*queryText*/
        g[0]
      ), (!u || _ & /*isExpanded*/
      8 && s !== (s = "w-4 h-4 text-gray-500 dark:text-gray-400 transform transition-transform duration-200 " + /*isExpanded*/
      (g[3] ? "rotate-180" : ""))) && h(o, "class", s), /*isExpanded*/
      g[3] ? c ? (c.p(g, _), _ & /*isExpanded*/
      8 && C(c, 1)) : (c = ao(g), c.c(), C(c, 1), c.m(t, null)) : c && ($(), z(c, 1, 1, () => {
        c = null;
      }), ee());
    },
    i(g) {
      u || (C(c), u = !0);
    },
    o(g) {
      z(c), u = !1;
    },
    d(g) {
      g && M(t), c && c.d(), d = !1, m();
    }
  };
}
function Je(e) {
  var t;
  return ((t = e == null ? void 0 : e.toLocaleString) == null ? void 0 : t.call(e)) ?? e;
}
function Lc(e, t, n) {
  let { queryText: l } = t, { result: r } = t, { idsLength: i = 0 } = t, o = !1;
  function a() {
    n(3, o = !o);
  }
  const s = (f, u) => (r.values.counts[u] ?? 0) - (r.values.counts[f] ?? 0);
  return e.$$set = (f) => {
    "queryText" in f && n(0, l = f.queryText), "result" in f && n(1, r = f.result), "idsLength" in f && n(2, i = f.idsLength);
  }, [l, r, i, o, a, s];
}
class Rc extends ye {
  constructor(t) {
    super(), _e(this, t, Lc, Mc, he, { queryText: 0, result: 1, idsLength: 2 });
  }
}
function _o(e, t, n) {
  const l = e.slice();
  return l[6] = t[n][0], l[7] = t[n][1], l;
}
function yo(e) {
  let t, n, l, r, i;
  const o = [Ec, Tc], a = [];
  function s(f, u) {
    return u & /*subqueries*/
    4 && (n = null), n == null && (n = Object.keys(
      /*subqueries*/
      f[2]
    ).length > 0), n ? 0 : 1;
  }
  return l = s(e, -1), r = a[l] = o[l](e), {
    c() {
      t = p("div"), r.c(), h(t, "class", "space-y-2 mt-3");
    },
    m(f, u) {
      L(f, t, u), a[l].m(t, null), i = !0;
    },
    p(f, u) {
      let d = l;
      l = s(f, u), l === d ? a[l].p(f, u) : ($(), z(a[d], 1, 1, () => {
        a[d] = null;
      }), ee(), r = a[l], r ? r.p(f, u) : (r = a[l] = o[l](f), r.c()), C(r, 1), r.m(t, null));
    },
    i(f) {
      i || (C(r), i = !0);
    },
    o(f) {
      z(r), i = !1;
    },
    d(f) {
      f && M(t), a[l].d();
    }
  };
}
function Tc(e) {
  let t;
  return {
    c() {
      t = p("div"), t.innerHTML = `<div class="text-2xl mb-1">🔍</div> 
          <div class="text-xs font-mono">No subqueries found</div> 
          <div class="text-xs mt-1">Run a query to see subquery results</div>`, h(t, "class", "text-center py-4 text-gray-500 dark:text-gray-400");
    },
    m(n, l) {
      L(n, t, l);
    },
    p: G,
    i: G,
    o: G,
    d(n) {
      n && M(t);
    }
  };
}
function Ec(e) {
  let t, n, l = Object.keys(
    /*subqueries*/
    e[2]
  ).length + "", r, i, o, a, s, f = Object.entries(
    /*subqueries*/
    e[2]
  ), u = [];
  for (let m = 0; m < f.length; m += 1)
    u[m] = po(_o(e, f, m));
  const d = (m) => z(u[m], 1, 1, () => {
    u[m] = null;
  });
  return {
    c() {
      t = p("div"), n = F("Found "), r = F(l), i = F(" subqueries"), o = q();
      for (let m = 0; m < u.length; m += 1)
        u[m].c();
      a = ve(), h(t, "class", "text-xs text-gray-500 dark:text-gray-400 mb-2");
    },
    m(m, c) {
      L(m, t, c), b(t, n), b(t, r), b(t, i), L(m, o, c);
      for (let g = 0; g < u.length; g += 1)
        u[g] && u[g].m(m, c);
      L(m, a, c), s = !0;
    },
    p(m, c) {
      if ((!s || c & /*subqueries*/
      4) && l !== (l = Object.keys(
        /*subqueries*/
        m[2]
      ).length + "") && V(r, l), c & /*Object, subqueries, idsLength*/
      12) {
        f = Object.entries(
          /*subqueries*/
          m[2]
        );
        let g;
        for (g = 0; g < f.length; g += 1) {
          const _ = _o(m, f, g);
          u[g] ? (u[g].p(_, c), C(u[g], 1)) : (u[g] = po(_), u[g].c(), C(u[g], 1), u[g].m(a.parentNode, a));
        }
        for ($(), g = f.length; g < u.length; g += 1)
          d(g);
        ee();
      }
    },
    i(m) {
      if (!s) {
        for (let c = 0; c < f.length; c += 1)
          C(u[c]);
        s = !0;
      }
    },
    o(m) {
      u = u.filter(Boolean);
      for (let c = 0; c < u.length; c += 1)
        z(u[c]);
      s = !1;
    },
    d(m) {
      m && M(t), m && M(o), We(u, m), m && M(a);
    }
  };
}
function po(e) {
  let t, n;
  return t = new Rc({
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
      X(t.$$.fragment);
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
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(t, l);
    }
  };
}
function zc(e) {
  let t, n, l, r, i, o, a, s, f, u, d, m, c, g = (
    /*enabled*/
    e[1] && yo(e)
  );
  return {
    c() {
      t = p("div"), n = p("div"), l = p("h3"), l.textContent = "Subquery", r = q(), i = p("button"), o = p("span"), f = q(), g && g.c(), h(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100"), h(o, "class", a = "inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-200 " + /*enabled*/
      (e[1] ? "translate-x-6" : "translate-x-1")), h(i, "class", s = "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 " + /*enabled*/
      (e[1] ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700")), h(i, "role", "switch"), h(
        i,
        "aria-checked",
        /*enabled*/
        e[1]
      ), h(n, "class", "flex items-center justify-between mb-2"), h(t, "class", u = "bg-white dark:bg-gray-900 p-4 mb-0 border-0 rounded-none " + /*width*/
      e[0] + " transition-colors duration-200");
    },
    m(_, y) {
      L(_, t, y), b(t, n), b(n, l), b(n, r), b(n, i), b(i, o), b(t, f), g && g.m(t, null), d = !0, m || (c = le(
        i,
        "click",
        /*toggleSection*/
        e[4]
      ), m = !0);
    },
    p(_, [y]) {
      (!d || y & /*enabled*/
      2 && a !== (a = "inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-200 " + /*enabled*/
      (_[1] ? "translate-x-6" : "translate-x-1"))) && h(o, "class", a), (!d || y & /*enabled*/
      2 && s !== (s = "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 " + /*enabled*/
      (_[1] ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700"))) && h(i, "class", s), (!d || y & /*enabled*/
      2) && h(
        i,
        "aria-checked",
        /*enabled*/
        _[1]
      ), /*enabled*/
      _[1] ? g ? (g.p(_, y), y & /*enabled*/
      2 && C(g, 1)) : (g = yo(_), g.c(), C(g, 1), g.m(t, null)) : g && ($(), z(g, 1, 1, () => {
        g = null;
      }), ee()), (!d || y & /*width*/
      1 && u !== (u = "bg-white dark:bg-gray-900 p-4 mb-0 border-0 rounded-none " + /*width*/
      _[0] + " transition-colors duration-200")) && h(t, "class", u);
    },
    i(_) {
      d || (C(g), d = !0);
    },
    o(_) {
      z(g), d = !1;
    },
    d(_) {
      _ && M(t), g && g.d(), m = !1, c();
    }
  };
}
function Ac(e, t, n) {
  let { width: l = "w-full max-w-2xl" } = t, { enabled: r = !1 } = t, { onToggle: i = () => {
  } } = t, { subqueries: o = {} } = t, { idsLength: a = 0 } = t;
  function s() {
    i(!r);
  }
  return e.$$set = (f) => {
    "width" in f && n(0, l = f.width), "enabled" in f && n(1, r = f.enabled), "onToggle" in f && n(5, i = f.onToggle), "subqueries" in f && n(2, o = f.subqueries), "idsLength" in f && n(3, a = f.idsLength);
  }, e.$$.update = () => {
    e.$$.dirty & /*subqueries, enabled*/
    6 && (console.log("🔍 SubquerySection - subqueries changed:", o), console.log("🔍 SubquerySection - enabled:", r), console.log("🔍 SubquerySection - subqueries keys:", Object.keys(o)));
  }, [l, r, o, a, s, i];
}
class Dc extends ye {
  constructor(t) {
    super(), _e(this, t, Ac, zc, he, {
      width: 0,
      enabled: 1,
      onToggle: 5,
      subqueries: 2,
      idsLength: 3
    });
  }
}
function qc(e) {
  let t, n, l;
  return {
    c() {
      t = p("span"), t.textContent = "🤖", n = q(), l = p("span"), l.textContent = "Ask", h(t, "class", "text-xs");
    },
    m(r, i) {
      L(r, t, i), L(r, n, i), L(r, l, i);
    },
    d(r) {
      r && M(t), r && M(n), r && M(l);
    }
  };
}
function Nc(e) {
  let t, n, l;
  return {
    c() {
      t = p("div"), n = q(), l = p("span"), l.textContent = "Thinking...", h(t, "class", "animate-spin rounded-full h-3 w-3 border-b-2 border-white");
    },
    m(r, i) {
      L(r, t, i), L(r, n, i), L(r, l, i);
    },
    d(r) {
      r && M(t), r && M(n), r && M(l);
    }
  };
}
function Oc(e) {
  let t;
  return {
    c() {
      t = p("div"), t.innerHTML = `<div class="flex items-center space-x-3 p-4 border-b border-gray-300 dark:border-gray-600 flex-shrink-0"><span class="text-gray-500 dark:text-gray-400 text-lg">💡</span> 
          <h4 class="text-gray-500 dark:text-gray-400 font-medium text-sm">AI Assistant</h4></div> 
        <div class="flex-1 overflow-y-auto p-4 flex items-center justify-center"><p class="text-gray-600 dark:text-gray-300 text-sm font-mono text-center">// Ask me anything about your data or Tempo-QL queries!</p></div>`, h(t, "class", "bg-gray-100 dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-600 min-h-[200px] max-h-[400px] overflow-hidden flex flex-col");
    },
    m(n, l) {
      L(n, t, l);
    },
    p: G,
    d(n) {
      n && M(t);
    }
  };
}
function Fc(e) {
  let t, n, l, r, i, o = Kl(
    /*aiExplanation*/
    e[6] || /*message*/
    e[0]
  ) + "";
  return {
    c() {
      t = p("div"), n = p("div"), n.innerHTML = `<span class="text-blue-600 dark:text-blue-400 text-lg">🤖</span> 
          <h4 class="text-blue-600 dark:text-blue-400 font-medium text-sm">AI Response</h4>`, l = q(), r = p("div"), i = p("div"), h(n, "class", "flex items-center space-x-3 p-4 border-b border-gray-300 dark:border-gray-600 flex-shrink-0"), h(i, "class", "text-gray-700 dark:text-gray-200 text-sm leading-relaxed prose prose-sm max-w-none font-mono"), h(r, "class", "flex-1 overflow-y-auto p-4 ai-scrollbar"), h(t, "class", "bg-gray-100 dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-600 min-h-[200px] max-h-[400px] overflow-hidden flex flex-col");
    },
    m(a, s) {
      L(a, t, s), b(t, n), b(t, l), b(t, r), b(r, i), i.innerHTML = o;
    },
    p(a, s) {
      s & /*aiExplanation, message*/
      65 && o !== (o = Kl(
        /*aiExplanation*/
        a[6] || /*message*/
        a[0]
      ) + "") && (i.innerHTML = o);
    },
    d(a) {
      a && M(t);
    }
  };
}
function Hc(e) {
  let t, n, l, r, i, o = Kl(
    /*historicalResponse*/
    e[8]
  ) + "";
  return {
    c() {
      t = p("div"), n = p("div"), n.innerHTML = `<span class="text-purple-600 dark:text-purple-400 text-lg">📚</span> 
          <h4 class="text-purple-600 dark:text-purple-400 font-medium text-sm">Historical Response</h4>`, l = q(), r = p("div"), i = p("div"), h(n, "class", "flex items-center space-x-3 p-4 border-b border-gray-300 dark:border-gray-600 flex-shrink-0"), h(i, "class", "text-gray-700 dark:text-gray-200 text-sm leading-relaxed prose prose-sm max-w-none font-mono"), h(r, "class", "flex-1 overflow-y-auto p-4 ai-scrollbar"), h(t, "class", "bg-gray-100 dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-600 min-h-[200px] max-h-[400px] overflow-hidden flex flex-col");
    },
    m(a, s) {
      L(a, t, s), b(t, n), b(t, l), b(t, r), b(r, i), i.innerHTML = o;
    },
    p(a, s) {
      s & /*historicalResponse*/
      256 && o !== (o = Kl(
        /*historicalResponse*/
        a[8]
      ) + "") && (i.innerHTML = o);
    },
    d(a) {
      a && M(t);
    }
  };
}
function Ic(e) {
  let t, n, l, r, i, o;
  return {
    c() {
      t = p("div"), n = p("div"), n.innerHTML = `<span class="text-red-500 dark:text-red-400 text-lg">⚠️</span> 
          <h4 class="text-red-500 dark:text-red-400 font-medium text-sm">Error</h4>`, l = q(), r = p("div"), i = p("p"), o = F(
        /*error*/
        e[2]
      ), h(n, "class", "flex items-center space-x-3 p-4 border-b border-gray-300 dark:border-gray-600 flex-shrink-0"), h(i, "class", "text-gray-700 dark:text-gray-300 text-sm font-mono"), h(r, "class", "flex-1 overflow-y-auto p-4"), h(t, "class", "bg-gray-100 dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-600 min-h-[200px] max-h-[400px] overflow-hidden flex flex-col");
    },
    m(a, s) {
      L(a, t, s), b(t, n), b(t, l), b(t, r), b(r, i), b(i, o);
    },
    p(a, s) {
      s & /*error*/
      4 && V(
        o,
        /*error*/
        a[2]
      );
    },
    d(a) {
      a && M(t);
    }
  };
}
function Pc(e) {
  let t;
  return {
    c() {
      t = p("div"), t.innerHTML = `<div class="flex items-center space-x-3 p-4 border-b border-gray-300 dark:border-gray-600 flex-shrink-0"><div class="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 dark:border-blue-400"></div> 
          <h4 class="text-blue-600 dark:text-blue-400 font-medium text-sm">AI is thinking...</h4></div> 
        <div class="flex-1 overflow-y-auto p-4 flex items-center justify-center"><span class="text-gray-600 dark:text-gray-300 text-sm font-mono">Processing your request...</span></div>`, h(t, "class", "bg-gray-100 dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-600 min-h-[200px] max-h-[400px] overflow-hidden flex flex-col");
    },
    m(n, l) {
      L(n, t, l);
    },
    p: G,
    d(n) {
      n && M(t);
    }
  };
}
function jc(e) {
  let t, n, l, r, i, o, a = (
    /*apiStatusInfo*/
    e[11].icon + ""
  ), s, f, u, d, m, c, g, _, y, w, x, S, O, A, R, D, T, E, v;
  function I(re, ue) {
    return (
      /*isLoading*/
      re[1] ? Nc : qc
    );
  }
  let B = I(e), U = B(e);
  function ce(re, ue) {
    return (
      /*isLoading*/
      re[1] ? Pc : (
        /*error*/
        re[2] ? Ic : (
          /*historicalResponse*/
          re[8] ? Hc : (
            /*aiExplanation*/
            re[6] || /*message*/
            re[0] ? Fc : Oc
          )
        )
      )
    );
  }
  let N = ce(e), W = N(e);
  return {
    c() {
      t = p("div"), n = p("div"), l = p("h3"), l.textContent = "AI Assistant", r = q(), i = p("div"), o = p("span"), s = F(a), f = q(), u = p("span"), d = F(
        /*apiStatus*/
        e[3]
      ), m = q(), c = p("div"), g = p("div"), _ = p("textarea"), y = q(), w = p("button"), w.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>', x = q(), S = p("button"), U.c(), A = q(), R = p("div"), W.c(), h(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100"), h(u, "class", "text-gray-700 dark:text-gray-300"), h(i, "class", "flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600"), h(n, "class", "flex items-center justify-between mb-4"), h(_, "class", "w-full p-6 pr-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-mono text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none overflow-y-auto min-h-[120px] max-h-[200px]"), h(_, "placeholder", "// Ask me to generate a TempoQL query or explain data patterns..."), _.disabled = /*isLoading*/
      e[1], h(_, "rows", "5"), h(w, "class", "absolute top-2 right-2 p-1.5 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-all duration-200 flex items-center justify-center z-10 history-button"), h(w, "title", "View AI conversation history"), S.disabled = O = !/*inputValue*/
      e[9].trim() || /*isLoading*/
      e[1], h(S, "class", "absolute bottom-2 right-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-1.5 text-xs z-10"), h(g, "class", "relative"), h(c, "class", "mb-4"), h(R, "class", D = /*scrollable*/
      e[5] ? "flex-1 overflow-y-auto" : ""), h(t, "class", T = "bg-white dark:bg-gray-900 p-4 border-0 rounded-none " + /*width*/
      e[4] + " transition-colors duration-200 " + /*scrollable*/
      (e[5] ? "h-full flex flex-col" : ""));
    },
    m(re, ue) {
      L(re, t, ue), b(t, n), b(n, l), b(n, r), b(n, i), b(i, o), b(o, s), b(i, f), b(i, u), b(u, d), b(t, m), b(t, c), b(c, g), b(g, _), e[19](_), Fl(
        _,
        /*inputValue*/
        e[9]
      ), b(g, y), b(g, w), b(g, x), b(g, S), U.m(S, null), b(t, A), b(t, R), W.m(R, null), E || (v = [
        le(
          _,
          "input",
          /*textarea_input_handler*/
          e[20]
        ),
        le(_, "input", Bc),
        le(
          _,
          "keydown",
          /*handleKeydown*/
          e[13]
        ),
        le(w, "click", function() {
          $e(
            /*onHistoryClick*/
            e[7]
          ) && e[7].apply(this, arguments);
        }),
        le(
          S,
          "click",
          /*handleSubmit*/
          e[12]
        )
      ], E = !0);
    },
    p(re, [ue]) {
      e = re, ue & /*apiStatusInfo*/
      2048 && a !== (a = /*apiStatusInfo*/
      e[11].icon + "") && V(s, a), ue & /*apiStatus*/
      8 && V(
        d,
        /*apiStatus*/
        e[3]
      ), ue & /*isLoading*/
      2 && (_.disabled = /*isLoading*/
      e[1]), ue & /*inputValue*/
      512 && Fl(
        _,
        /*inputValue*/
        e[9]
      ), B !== (B = I(e)) && (U.d(1), U = B(e), U && (U.c(), U.m(S, null))), ue & /*inputValue, isLoading*/
      514 && O !== (O = !/*inputValue*/
      e[9].trim() || /*isLoading*/
      e[1]) && (S.disabled = O), N === (N = ce(e)) && W ? W.p(e, ue) : (W.d(1), W = N(e), W && (W.c(), W.m(R, null))), ue & /*scrollable*/
      32 && D !== (D = /*scrollable*/
      e[5] ? "flex-1 overflow-y-auto" : "") && h(R, "class", D), ue & /*width, scrollable*/
      48 && T !== (T = "bg-white dark:bg-gray-900 p-4 border-0 rounded-none " + /*width*/
      e[4] + " transition-colors duration-200 " + /*scrollable*/
      (e[5] ? "h-full flex flex-col" : "")) && h(t, "class", T);
    },
    i: G,
    o: G,
    d(re) {
      re && M(t), e[19](null), U.d(), W.d(), E = !1, He(v);
    }
  };
}
function Sr(e) {
  e.style.height = "auto", e.style.height = Math.min(e.scrollHeight, 200) + "px";
}
function Bc(e) {
  const t = e.target;
  Sr(t);
}
function Kl(e) {
  return e ? e.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>").replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">$1</code>').replace(/\n/g, "<br>") : "";
}
function Qc(e) {
  return e.includes("Configured") || e.includes("ready") ? {
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    icon: "✅"
  } : e.includes("Not configured") || e.includes("Invalid") ? {
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    icon: "❌"
  } : {
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    icon: "⚠️"
  };
}
function Vc(e, t, n) {
  let l, { onSubmit: r = () => {
  } } = t, { message: i = "" } = t, { isLoading: o = !1 } = t, { error: a = "" } = t, { apiStatus: s = "Checking API connection..." } = t, { width: f = "w-full" } = t, { scrollable: u = !1 } = t, { extractedQuery: d = "" } = t, { aiExplanation: m = "" } = t, { hasExtractedQuery: c = !1 } = t, { onQueryExtracted: g = () => {
  } } = t, { onHistoryClick: _ = () => {
  } } = t, { inputValueOverride: y = "" } = t, { historicalResponse: w = "" } = t, x = "", S;
  function O() {
    x.trim() && (r(x.trim()), S && (S.focus(), Sr(S)));
  }
  function A(T) {
    T.key === "Enter" && !T.shiftKey && (T.preventDefault(), O());
  }
  function R(T) {
    Ge[T ? "unshift" : "push"](() => {
      S = T, n(10, S);
    });
  }
  function D() {
    x = this.value, n(9, x), n(18, y), n(10, S);
  }
  return e.$$set = (T) => {
    "onSubmit" in T && n(14, r = T.onSubmit), "message" in T && n(0, i = T.message), "isLoading" in T && n(1, o = T.isLoading), "error" in T && n(2, a = T.error), "apiStatus" in T && n(3, s = T.apiStatus), "width" in T && n(4, f = T.width), "scrollable" in T && n(5, u = T.scrollable), "extractedQuery" in T && n(15, d = T.extractedQuery), "aiExplanation" in T && n(6, m = T.aiExplanation), "hasExtractedQuery" in T && n(16, c = T.hasExtractedQuery), "onQueryExtracted" in T && n(17, g = T.onQueryExtracted), "onHistoryClick" in T && n(7, _ = T.onHistoryClick), "inputValueOverride" in T && n(18, y = T.inputValueOverride), "historicalResponse" in T && n(8, w = T.historicalResponse);
  }, e.$$.update = () => {
    e.$$.dirty & /*inputValueOverride, inputValue, inputElement*/
    263680 && y && y !== x && (n(9, x = y), S && Sr(S)), e.$$.dirty & /*hasExtractedQuery, extractedQuery, onQueryExtracted*/
    229376 && c && d && (console.log("🤖 AIAssistant: Query extracted, triggering handler:", d), g()), e.$$.dirty & /*apiStatus*/
    8 && n(11, l = Qc(s));
  }, [
    i,
    o,
    a,
    s,
    f,
    u,
    m,
    _,
    w,
    x,
    S,
    l,
    O,
    A,
    r,
    d,
    c,
    g,
    y,
    R,
    D
  ];
}
class Gc extends ye {
  constructor(t) {
    super(), _e(this, t, Vc, jc, he, {
      onSubmit: 14,
      message: 0,
      isLoading: 1,
      error: 2,
      apiStatus: 3,
      width: 4,
      scrollable: 5,
      extractedQuery: 15,
      aiExplanation: 6,
      hasExtractedQuery: 16,
      onQueryExtracted: 17,
      onHistoryClick: 7,
      inputValueOverride: 18,
      historicalResponse: 8
    });
  }
}
function ko(e) {
  let t, n, l;
  return n = new Gc({
    props: {
      onSubmit: (
        /*onLLMSubmit*/
        e[13]
      ),
      message: (
        /*llmMessage*/
        e[14]
      ),
      isLoading: (
        /*llmLoading*/
        e[15]
      ),
      error: (
        /*llmError*/
        e[16]
      ),
      apiStatus: (
        /*apiStatus*/
        e[18]
      ),
      width: "w-full",
      scrollable: !0,
      extractedQuery: (
        /*extractedQuery*/
        e[19]
      ),
      aiExplanation: (
        /*aiExplanation*/
        e[20]
      ),
      hasExtractedQuery: (
        /*hasExtractedQuery*/
        e[21]
      ),
      onQueryExtracted: (
        /*onQueryExtracted*/
        e[22]
      ),
      onHistoryClick: (
        /*onHistoryClick*/
        e[23]
      ),
      inputValueOverride: (
        /*aiInputValueOverride*/
        e[25]
      ),
      historicalResponse: (
        /*historicalResponse*/
        e[26]
      )
    }
  }), {
    c() {
      t = p("div"), X(n.$$.fragment), h(t, "class", "w-full h-1/2 overflow-hidden");
    },
    m(r, i) {
      L(r, t, i), K(n, t, null), e[27](t), l = !0;
    },
    p(r, i) {
      const o = {};
      i & /*onLLMSubmit*/
      8192 && (o.onSubmit = /*onLLMSubmit*/
      r[13]), i & /*llmMessage*/
      16384 && (o.message = /*llmMessage*/
      r[14]), i & /*llmLoading*/
      32768 && (o.isLoading = /*llmLoading*/
      r[15]), i & /*llmError*/
      65536 && (o.error = /*llmError*/
      r[16]), i & /*apiStatus*/
      262144 && (o.apiStatus = /*apiStatus*/
      r[18]), i & /*extractedQuery*/
      524288 && (o.extractedQuery = /*extractedQuery*/
      r[19]), i & /*aiExplanation*/
      1048576 && (o.aiExplanation = /*aiExplanation*/
      r[20]), i & /*hasExtractedQuery*/
      2097152 && (o.hasExtractedQuery = /*hasExtractedQuery*/
      r[21]), i & /*onQueryExtracted*/
      4194304 && (o.onQueryExtracted = /*onQueryExtracted*/
      r[22]), i & /*onHistoryClick*/
      8388608 && (o.onHistoryClick = /*onHistoryClick*/
      r[23]), i & /*aiInputValueOverride*/
      33554432 && (o.inputValueOverride = /*aiInputValueOverride*/
      r[25]), i & /*historicalResponse*/
      67108864 && (o.historicalResponse = /*historicalResponse*/
      r[26]), n.$set(o);
    },
    i(r) {
      l || (C(n.$$.fragment, r), l = !0);
    },
    o(r) {
      z(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && M(t), Y(n), e[27](null);
    }
  };
}
function Wc(e) {
  let t, n, l, r, i, o, a, s, f, u, d, m, c, g, _ = (
    /*message*/
    (e[6] || "No query executed yet...") + ""
  ), y, w, x, S, O;
  r = new ff({
    props: {
      value: (
        /*textInput*/
        e[1]
      ),
      onInput: (
        /*onTextInput*/
        e[2]
      ),
      dataFields: (
        /*dataFields*/
        e[3]
      ),
      onRun: (
        /*onRun*/
        e[4]
      ),
      onExplain: (
        /*onExplain*/
        e[5]
      ),
      onHistoryClick: (
        /*onQueryHistoryClick*/
        e[24]
      ),
      width: "w-full"
    }
  });
  let A = (
    /*llmEnabled*/
    e[17] && ko(e)
  );
  return f = new pc({
    props: {
      values: (
        /*values*/
        e[7]
      ),
      idsLength: (
        /*idsLength*/
        e[8]
      ),
      width: "w-full",
      scrollable: !1
    }
  }), x = new Dc({
    props: {
      width: "w-full",
      enabled: (
        /*subqueryEnabled*/
        e[9]
      ),
      subqueries: (
        /*subqueries*/
        e[10]
      ),
      idsLength: (
        /*idsLength*/
        e[8]
      ),
      onToggle: (
        /*onSubqueryToggle*/
        e[11]
      )
    }
  }), {
    c() {
      t = p("div"), n = p("div"), l = p("div"), X(r.$$.fragment), i = q(), A && A.c(), o = q(), a = p("div"), s = p("div"), X(f.$$.fragment), u = q(), d = p("div"), m = p("h3"), m.textContent = "Query Output", c = q(), g = p("div"), y = F(_), w = q(), X(x.$$.fragment), h(l, "class", "flex-auto"), h(n, "class", "w-1/2 shrink-0 flex flex-col h-full"), h(m, "class", "text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"), h(g, "class", "text-xs font-mono text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 rounded border p-2 max-h-20 overflow-y-auto"), h(d, "class", "flex-shrink-0 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-3"), h(s, "class", "space-y-2"), h(a, "class", "flex-auto p-4 border-l border-slate-400 dark:border-slate-600 h-full overflow-auto"), h(t, "class", S = "flex " + /*width*/
      e[12] + " h-full");
    },
    m(R, D) {
      L(R, t, D), b(t, n), b(n, l), K(r, l, null), b(n, i), A && A.m(n, null), b(t, o), b(t, a), b(a, s), K(f, s, null), b(s, u), b(s, d), b(d, m), b(d, c), b(d, g), b(g, y), b(s, w), K(x, s, null), O = !0;
    },
    p(R, [D]) {
      const T = {};
      D & /*textInput*/
      2 && (T.value = /*textInput*/
      R[1]), D & /*onTextInput*/
      4 && (T.onInput = /*onTextInput*/
      R[2]), D & /*dataFields*/
      8 && (T.dataFields = /*dataFields*/
      R[3]), D & /*onRun*/
      16 && (T.onRun = /*onRun*/
      R[4]), D & /*onExplain*/
      32 && (T.onExplain = /*onExplain*/
      R[5]), D & /*onQueryHistoryClick*/
      16777216 && (T.onHistoryClick = /*onQueryHistoryClick*/
      R[24]), r.$set(T), /*llmEnabled*/
      R[17] ? A ? (A.p(R, D), D & /*llmEnabled*/
      131072 && C(A, 1)) : (A = ko(R), A.c(), C(A, 1), A.m(n, null)) : A && ($(), z(A, 1, 1, () => {
        A = null;
      }), ee());
      const E = {};
      D & /*values*/
      128 && (E.values = /*values*/
      R[7]), D & /*idsLength*/
      256 && (E.idsLength = /*idsLength*/
      R[8]), f.$set(E), (!O || D & /*message*/
      64) && _ !== (_ = /*message*/
      (R[6] || "No query executed yet...") + "") && V(y, _);
      const v = {};
      D & /*subqueryEnabled*/
      512 && (v.enabled = /*subqueryEnabled*/
      R[9]), D & /*subqueries*/
      1024 && (v.subqueries = /*subqueries*/
      R[10]), D & /*idsLength*/
      256 && (v.idsLength = /*idsLength*/
      R[8]), D & /*onSubqueryToggle*/
      2048 && (v.onToggle = /*onSubqueryToggle*/
      R[11]), x.$set(v), (!O || D & /*width*/
      4096 && S !== (S = "flex " + /*width*/
      R[12] + " h-full")) && h(t, "class", S);
    },
    i(R) {
      O || (C(r.$$.fragment, R), C(A), C(f.$$.fragment, R), C(x.$$.fragment, R), O = !0);
    },
    o(R) {
      z(r.$$.fragment, R), z(A), z(f.$$.fragment, R), z(x.$$.fragment, R), O = !1;
    },
    d(R) {
      R && M(t), Y(r), A && A.d(), Y(f), Y(x);
    }
  };
}
function Kc(e, t, n) {
  let { textInput: l = "" } = t, { onTextInput: r = () => {
  } } = t, { dataFields: i = [] } = t, { onRun: o = () => {
  } } = t, { onExplain: a = () => {
  } } = t, { message: s = "" } = t, { values: f = {} } = t, { idsLength: u = 0 } = t, { subqueryEnabled: d = !1 } = t, { subqueries: m = {} } = t, { onSubqueryToggle: c = () => {
  } } = t, { width: g = "w-full" } = t, { onLLMSubmit: _ = () => {
  } } = t, { llmMessage: y = "" } = t, { llmLoading: w = !1 } = t, { llmError: x = "" } = t, { llmEnabled: S = !1 } = t, { apiStatus: O = "" } = t, { extractedQuery: A = "" } = t, { aiExplanation: R = "" } = t, { hasExtractedQuery: D = !1 } = t, { onQueryExtracted: T = () => {
  } } = t, { onHistoryClick: E = () => {
  } } = t, { onQueryHistoryClick: v = () => {
  } } = t, { aiAssistantRef: I = void 0 } = t, { aiInputValueOverride: B = "" } = t, { historicalResponse: U = "" } = t;
  function ce(N) {
    Ge[N ? "unshift" : "push"](() => {
      I = N, n(0, I);
    });
  }
  return e.$$set = (N) => {
    "textInput" in N && n(1, l = N.textInput), "onTextInput" in N && n(2, r = N.onTextInput), "dataFields" in N && n(3, i = N.dataFields), "onRun" in N && n(4, o = N.onRun), "onExplain" in N && n(5, a = N.onExplain), "message" in N && n(6, s = N.message), "values" in N && n(7, f = N.values), "idsLength" in N && n(8, u = N.idsLength), "subqueryEnabled" in N && n(9, d = N.subqueryEnabled), "subqueries" in N && n(10, m = N.subqueries), "onSubqueryToggle" in N && n(11, c = N.onSubqueryToggle), "width" in N && n(12, g = N.width), "onLLMSubmit" in N && n(13, _ = N.onLLMSubmit), "llmMessage" in N && n(14, y = N.llmMessage), "llmLoading" in N && n(15, w = N.llmLoading), "llmError" in N && n(16, x = N.llmError), "llmEnabled" in N && n(17, S = N.llmEnabled), "apiStatus" in N && n(18, O = N.apiStatus), "extractedQuery" in N && n(19, A = N.extractedQuery), "aiExplanation" in N && n(20, R = N.aiExplanation), "hasExtractedQuery" in N && n(21, D = N.hasExtractedQuery), "onQueryExtracted" in N && n(22, T = N.onQueryExtracted), "onHistoryClick" in N && n(23, E = N.onHistoryClick), "onQueryHistoryClick" in N && n(24, v = N.onQueryHistoryClick), "aiAssistantRef" in N && n(0, I = N.aiAssistantRef), "aiInputValueOverride" in N && n(25, B = N.aiInputValueOverride), "historicalResponse" in N && n(26, U = N.historicalResponse);
  }, [
    I,
    l,
    r,
    i,
    o,
    a,
    s,
    f,
    u,
    d,
    m,
    c,
    g,
    _,
    y,
    w,
    x,
    S,
    O,
    A,
    R,
    D,
    T,
    E,
    v,
    B,
    U,
    ce
  ];
}
class Yc extends ye {
  constructor(t) {
    super(), _e(this, t, Kc, Wc, he, {
      textInput: 1,
      onTextInput: 2,
      dataFields: 3,
      onRun: 4,
      onExplain: 5,
      message: 6,
      values: 7,
      idsLength: 8,
      subqueryEnabled: 9,
      subqueries: 10,
      onSubqueryToggle: 11,
      width: 12,
      onLLMSubmit: 13,
      llmMessage: 14,
      llmLoading: 15,
      llmError: 16,
      llmEnabled: 17,
      apiStatus: 18,
      extractedQuery: 19,
      aiExplanation: 20,
      hasExtractedQuery: 21,
      onQueryExtracted: 22,
      onHistoryClick: 23,
      onQueryHistoryClick: 24,
      aiAssistantRef: 0,
      aiInputValueOverride: 25,
      historicalResponse: 26
    });
  }
}
function wo(e) {
  let t, n, l, r, i, o = (
    /*message*/
    (e[1] || "Loading...") + ""
  ), a, s, f;
  return {
    c() {
      t = p("div"), n = p("div"), l = p("div"), r = p("div"), i = p("p"), a = F(o), s = q(), f = p("div"), f.innerHTML = '<div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2"><div class="bg-blue-600 h-2 rounded-full animate-pulse" style="width: 100%"></div></div>', h(i, "class", "text-sm font-medium text-slate-900 dark:text-slate-100"), h(r, "class", "flex-1"), h(f, "class", "flex-1 max-w-md"), h(l, "class", "flex items-center space-x-3"), h(n, "class", "bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 w-1/2 p-6"), h(t, "class", "absolute top-0 left-0 right-0 top-0 bottom-0 bg-white/80 dark:bg-slate-900/80 flex items-center justify-center z-80");
    },
    m(u, d) {
      L(u, t, d), b(t, n), b(n, l), b(l, r), b(r, i), b(i, a), b(l, s), b(l, f);
    },
    p(u, d) {
      d & /*message*/
      2 && o !== (o = /*message*/
      (u[1] || "Loading...") + "") && V(a, o);
    },
    d(u) {
      u && M(t);
    }
  };
}
function Uc(e) {
  let t, n = (
    /*isLoading*/
    e[0] && wo(e)
  );
  return {
    c() {
      n && n.c(), t = ve();
    },
    m(l, r) {
      n && n.m(l, r), L(l, t, r);
    },
    p(l, [r]) {
      /*isLoading*/
      l[0] ? n ? n.p(l, r) : (n = wo(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: G,
    o: G,
    d(l) {
      n && n.d(l), l && M(t);
    }
  };
}
function Xc(e, t, n) {
  let { isLoading: l = !1 } = t, { message: r = "" } = t, { width: i = "w-full" } = t;
  return e.$$set = (o) => {
    "isLoading" in o && n(0, l = o.isLoading), "message" in o && n(1, r = o.message), "width" in o && n(2, i = o.width);
  }, [l, r, i];
}
class Zc extends ye {
  constructor(t) {
    super(), _e(this, t, Xc, Uc, he, { isLoading: 0, message: 1, width: 2 });
  }
}
function vo(e, t, n) {
  const l = e.slice();
  return l[7] = t[n], l[9] = n, l;
}
function xo(e) {
  let t, n, l, r, i, o, a, s, f, u, d, m, c, g, _ = (
    /*history*/
    e[1].length + ""
  ), y, w, x, S;
  function O(D, T) {
    return (
      /*history*/
      D[1].length === 0 ? $c : Jc
    );
  }
  let A = O(e), R = A(e);
  return {
    c() {
      t = p("div"), n = q(), l = p("div"), r = p("div"), i = p("div"), o = p("h3"), o.textContent = "AI Conversation History", a = q(), s = p("button"), s.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>', f = q(), u = p("div"), R.c(), d = q(), m = p("div"), c = p("div"), g = F("Showing "), y = F(_), w = F(" of 10 recent conversations"), h(t, "class", "fixed inset-0 bg-black bg-opacity-25 z-40"), h(o, "class", "text-sm font-medium text-gray-900 dark:text-gray-100"), h(s, "class", "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-1 rounded"), h(s, "title", "Close history"), h(i, "class", "flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700"), h(u, "class", "max-h-80 overflow-y-auto svelte-6p3axr"), h(c, "class", "text-xs text-gray-500 dark:text-gray-400 text-center"), h(m, "class", "p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700"), h(r, "class", "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl max-w-md w-80 max-h-96 overflow-hidden"), h(l, "class", "fixed z-50 history-dropdown"), Q(
        l,
        "top",
        /*position*/
        e[4].top + "px"
      ), Q(
        l,
        "left",
        /*position*/
        e[4].left + "px"
      );
    },
    m(D, T) {
      L(D, t, T), L(D, n, T), L(D, l, T), b(l, r), b(r, i), b(i, o), b(i, a), b(i, s), b(r, f), b(r, u), R.m(u, null), b(r, d), b(r, m), b(m, c), b(c, g), b(c, y), b(c, w), x || (S = [
        le(
          t,
          "click",
          /*handleClickOutside*/
          e[5]
        ),
        le(s, "click", function() {
          $e(
            /*onClose*/
            e[2]
          ) && e[2].apply(this, arguments);
        })
      ], x = !0);
    },
    p(D, T) {
      e = D, A === (A = O(e)) && R ? R.p(e, T) : (R.d(1), R = A(e), R && (R.c(), R.m(u, null))), T & /*history*/
      2 && _ !== (_ = /*history*/
      e[1].length + "") && V(y, _), T & /*position*/
      16 && Q(
        l,
        "top",
        /*position*/
        e[4].top + "px"
      ), T & /*position*/
      16 && Q(
        l,
        "left",
        /*position*/
        e[4].left + "px"
      );
    },
    d(D) {
      D && M(t), D && M(n), D && M(l), R.d(), x = !1, He(S);
    }
  };
}
function Jc(e) {
  let t, n = (
    /*history*/
    e[1]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = So(vo(e, n, r));
  return {
    c() {
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      t = ve();
    },
    m(r, i) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(r, i);
      L(r, t, i);
    },
    p(r, i) {
      if (i & /*onSelect, history, formatTimestamp*/
      10) {
        n = /*history*/
        r[1];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = vo(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = So(a), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(r) {
      We(l, r), r && M(t);
    }
  };
}
function $c(e) {
  let t;
  return {
    c() {
      t = p("div"), t.textContent = "No conversation history yet", h(t, "class", "p-4 text-center text-gray-500 dark:text-gray-400 text-sm");
    },
    m(n, l) {
      L(n, t, l);
    },
    p: G,
    d(n) {
      n && M(t);
    }
  };
}
function So(e) {
  let t, n, l, r = (
    /*historyItem*/
    e[7].question + ""
  ), i, o, a, s = Co(
    /*historyItem*/
    e[7].timestamp
  ) + "", f, u, d, m = (
    /*historyItem*/
    (e[7].answer || "No response available") + ""
  ), c, g, _, y;
  function w() {
    return (
      /*click_handler*/
      e[6](
        /*historyItem*/
        e[7]
      )
    );
  }
  return {
    c() {
      t = p("div"), n = p("div"), l = p("h4"), i = F(r), o = q(), a = p("span"), f = F(s), u = q(), d = p("p"), c = F(m), g = q(), h(l, "class", "text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-2 flex-1 svelte-6p3axr"), h(a, "class", "text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0"), h(n, "class", "flex items-start justify-between mb-2"), h(d, "class", "text-xs text-gray-600 dark:text-gray-300 line-clamp-3 svelte-6p3axr"), h(t, "class", "p-3 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors");
    },
    m(x, S) {
      L(x, t, S), b(t, n), b(n, l), b(l, i), b(n, o), b(n, a), b(a, f), b(t, u), b(t, d), b(d, c), b(t, g), _ || (y = le(t, "click", w), _ = !0);
    },
    p(x, S) {
      e = x, S & /*history*/
      2 && r !== (r = /*historyItem*/
      e[7].question + "") && V(i, r), S & /*history*/
      2 && s !== (s = Co(
        /*historyItem*/
        e[7].timestamp
      ) + "") && V(f, s), S & /*history*/
      2 && m !== (m = /*historyItem*/
      (e[7].answer || "No response available") + "") && V(c, m);
    },
    d(x) {
      x && M(t), _ = !1, y();
    }
  };
}
function e0(e) {
  let t, n = (
    /*isVisible*/
    e[0] && xo(e)
  );
  return {
    c() {
      n && n.c(), t = ve();
    },
    m(l, r) {
      n && n.m(l, r), L(l, t, r);
    },
    p(l, [r]) {
      /*isVisible*/
      l[0] ? n ? n.p(l, r) : (n = xo(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: G,
    o: G,
    d(l) {
      n && n.d(l), l && M(t);
    }
  };
}
function Co(e) {
  const n = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), l = Math.floor(n / 6e4), r = Math.floor(n / 36e5), i = Math.floor(n / 864e5);
  return l < 1 ? "Just now" : l < 60 ? `${l}m ago` : r < 24 ? `${r}h ago` : `${i}d ago`;
}
function t0(e, t, n) {
  let { isVisible: l = !1 } = t, { history: r = [] } = t, { onClose: i = () => {
  } } = t, { onSelect: o = () => {
  } } = t, { position: a = { top: 0, left: 0 } } = t;
  function s(u) {
    u.target.closest(".history-dropdown") || i();
  }
  const f = (u) => o(u);
  return e.$$set = (u) => {
    "isVisible" in u && n(0, l = u.isVisible), "history" in u && n(1, r = u.history), "onClose" in u && n(2, i = u.onClose), "onSelect" in u && n(3, o = u.onSelect), "position" in u && n(4, a = u.position);
  }, [
    l,
    r,
    i,
    o,
    a,
    s,
    f
  ];
}
class n0 extends ye {
  constructor(t) {
    super(), _e(this, t, t0, e0, he, {
      isVisible: 0,
      history: 1,
      onClose: 2,
      onSelect: 3,
      position: 4
    });
  }
}
function Mo(e, t, n) {
  const l = e.slice();
  return l[7] = t[n], l[9] = n, l;
}
function Lo(e) {
  let t, n, l, r, i, o, a, s, f, u, d, m, c, g, _ = (
    /*history*/
    e[1].length + ""
  ), y, w, x, S;
  function O(D, T) {
    return (
      /*history*/
      D[1].length === 0 ? r0 : l0
    );
  }
  let A = O(e), R = A(e);
  return {
    c() {
      t = p("div"), n = q(), l = p("div"), r = p("div"), i = p("div"), o = p("h3"), o.textContent = "Query History", a = q(), s = p("button"), s.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>', f = q(), u = p("div"), R.c(), d = q(), m = p("div"), c = p("div"), g = F("Showing "), y = F(_), w = F(" of 10 recent queries"), h(t, "class", "fixed inset-0 bg-black bg-opacity-25 z-40"), h(o, "class", "text-sm font-medium text-gray-900 dark:text-gray-100"), h(s, "class", "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-1 rounded"), h(s, "title", "Close history"), h(i, "class", "flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700"), h(u, "class", "max-h-80 overflow-y-auto svelte-6p3axr"), h(c, "class", "text-xs text-gray-500 dark:text-gray-400 text-center"), h(m, "class", "p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700"), h(r, "class", "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-xl max-w-md w-80 max-h-96 overflow-hidden"), h(l, "class", "fixed z-50 query-history-dropdown"), Q(
        l,
        "top",
        /*position*/
        e[4].top + "px"
      ), Q(
        l,
        "left",
        /*position*/
        e[4].left + "px"
      );
    },
    m(D, T) {
      L(D, t, T), L(D, n, T), L(D, l, T), b(l, r), b(r, i), b(i, o), b(i, a), b(i, s), b(r, f), b(r, u), R.m(u, null), b(r, d), b(r, m), b(m, c), b(c, g), b(c, y), b(c, w), x || (S = [
        le(
          t,
          "click",
          /*handleClickOutside*/
          e[5]
        ),
        le(s, "click", function() {
          $e(
            /*onClose*/
            e[2]
          ) && e[2].apply(this, arguments);
        })
      ], x = !0);
    },
    p(D, T) {
      e = D, A === (A = O(e)) && R ? R.p(e, T) : (R.d(1), R = A(e), R && (R.c(), R.m(u, null))), T & /*history*/
      2 && _ !== (_ = /*history*/
      e[1].length + "") && V(y, _), T & /*position*/
      16 && Q(
        l,
        "top",
        /*position*/
        e[4].top + "px"
      ), T & /*position*/
      16 && Q(
        l,
        "left",
        /*position*/
        e[4].left + "px"
      );
    },
    d(D) {
      D && M(t), D && M(n), D && M(l), R.d(), x = !1, He(S);
    }
  };
}
function l0(e) {
  let t, n = (
    /*history*/
    e[1]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Ro(Mo(e, n, r));
  return {
    c() {
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      t = ve();
    },
    m(r, i) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(r, i);
      L(r, t, i);
    },
    p(r, i) {
      if (i & /*onSelect, history, formatTimestamp*/
      10) {
        n = /*history*/
        r[1];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = Mo(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = Ro(a), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(r) {
      We(l, r), r && M(t);
    }
  };
}
function r0(e) {
  let t;
  return {
    c() {
      t = p("div"), t.textContent = "No query history yet", h(t, "class", "p-4 text-center text-gray-500 dark:text-gray-400 text-sm");
    },
    m(n, l) {
      L(n, t, l);
    },
    p: G,
    d(n) {
      n && M(t);
    }
  };
}
function Ro(e) {
  let t, n, l, r = (
    /*historyItem*/
    (e[7].query || "No query extracted") + ""
  ), i, o, a, s = To(
    /*historyItem*/
    e[7].timestamp
  ) + "", f, u, d, m = (
    /*historyItem*/
    (e[7].answer || "No response available") + ""
  ), c, g, _, y;
  function w() {
    return (
      /*click_handler*/
      e[6](
        /*historyItem*/
        e[7]
      )
    );
  }
  return {
    c() {
      t = p("div"), n = p("div"), l = p("h4"), i = F(r), o = q(), a = p("span"), f = F(s), u = q(), d = p("p"), c = F(m), g = q(), h(l, "class", "text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-2 flex-1 svelte-6p3axr"), h(a, "class", "text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0"), h(n, "class", "flex items-start justify-between mb-2"), h(d, "class", "text-xs text-gray-600 dark:text-gray-300 line-clamp-3 svelte-6p3axr"), h(t, "class", "p-3 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors");
    },
    m(x, S) {
      L(x, t, S), b(t, n), b(n, l), b(l, i), b(n, o), b(n, a), b(a, f), b(t, u), b(t, d), b(d, c), b(t, g), _ || (y = le(t, "click", w), _ = !0);
    },
    p(x, S) {
      e = x, S & /*history*/
      2 && r !== (r = /*historyItem*/
      (e[7].query || "No query extracted") + "") && V(i, r), S & /*history*/
      2 && s !== (s = To(
        /*historyItem*/
        e[7].timestamp
      ) + "") && V(f, s), S & /*history*/
      2 && m !== (m = /*historyItem*/
      (e[7].answer || "No response available") + "") && V(c, m);
    },
    d(x) {
      x && M(t), _ = !1, y();
    }
  };
}
function i0(e) {
  let t, n = (
    /*isVisible*/
    e[0] && Lo(e)
  );
  return {
    c() {
      n && n.c(), t = ve();
    },
    m(l, r) {
      n && n.m(l, r), L(l, t, r);
    },
    p(l, [r]) {
      /*isVisible*/
      l[0] ? n ? n.p(l, r) : (n = Lo(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: G,
    o: G,
    d(l) {
      n && n.d(l), l && M(t);
    }
  };
}
function To(e) {
  const n = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), l = Math.floor(n / 6e4), r = Math.floor(n / 36e5), i = Math.floor(n / 864e5);
  return l < 1 ? "Just now" : l < 60 ? `${l}m ago` : r < 24 ? `${r}h ago` : `${i}d ago`;
}
function o0(e, t, n) {
  let { isVisible: l = !1 } = t, { history: r = [] } = t, { onClose: i = () => {
  } } = t, { onSelect: o = () => {
  } } = t, { position: a = { top: 0, left: 0 } } = t;
  function s(u) {
    u.target.closest(".query-history-dropdown") || i();
  }
  const f = (u) => o(u);
  return e.$$set = (u) => {
    "isVisible" in u && n(0, l = u.isVisible), "history" in u && n(1, r = u.history), "onClose" in u && n(2, i = u.onClose), "onSelect" in u && n(3, o = u.onSelect), "position" in u && n(4, a = u.position);
  }, [
    l,
    r,
    i,
    o,
    a,
    s,
    f
  ];
}
class a0 extends ye {
  constructor(t) {
    super(), _e(this, t, o0, i0, he, {
      isVisible: 0,
      history: 1,
      onClose: 2,
      onSelect: 3,
      position: 4
    });
  }
}
function s0(e) {
  let t, n;
  return t = new Yc({
    props: {
      textInput: (
        /*textInput*/
        e[1]
      ),
      onTextInput: (
        /*func_2*/
        e[68]
      ),
      dataFields: (
        /*dataFields*/
        e[13]
      ),
      onRun: (
        /*handleRun*/
        e[55]
      ),
      onExplain: (
        /*handleExplain*/
        e[56]
      ),
      message: (
        /*$message*/
        e[19]
      ),
      values: (
        /*$values*/
        e[20]
      ),
      idsLength: (
        /*$idsLength*/
        e[21]
      ),
      subqueryEnabled: (
        /*$subqueryEnabled*/
        e[22]
      ),
      subqueries: (
        /*$subqueries*/
        e[23]
      ),
      onSubqueryToggle: (
        /*func_3*/
        e[69]
      ),
      onLLMSubmit: (
        /*handleLLMQuestionSubmit*/
        e[53]
      ),
      llmMessage: (
        /*$llmMessage*/
        e[3]
      ),
      llmLoading: (
        /*$llmLoading*/
        e[5]
      ),
      llmError: (
        /*$llmError*/
        e[24]
      ),
      llmEnabled: (
        /*$llmEnabled*/
        e[25]
      ),
      apiStatus: (
        /*$apiStatus*/
        e[26]
      ),
      extractedQuery: (
        /*$extractedQuery*/
        e[4]
      ),
      aiExplanation: (
        /*$aiExplanation*/
        e[27]
      ),
      hasExtractedQuery: (
        /*$hasExtractedQuery*/
        e[28]
      ),
      onQueryExtracted: (
        /*handleQueryExtraction*/
        e[50]
      ),
      onHistoryClick: (
        /*handleHistoryClick*/
        e[57]
      ),
      onQueryHistoryClick: (
        /*handleQueryHistoryClick*/
        e[58]
      ),
      aiAssistantRef: (
        /*aiAssistantSection*/
        e[52]
      ),
      aiInputValueOverride: (
        /*aiInputValueOverride*/
        e[12]
      ),
      historicalResponse: (
        /*historicalResponse*/
        e[2]
      ),
      width: "w-full"
    }
  }), {
    c() {
      X(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r[0] & /*textInput*/
      2 && (i.textInput = /*textInput*/
      l[1]), r[0] & /*textInput*/
      2 && (i.onTextInput = /*func_2*/
      l[68]), r[0] & /*dataFields*/
      8192 && (i.dataFields = /*dataFields*/
      l[13]), r[0] & /*$message*/
      524288 && (i.message = /*$message*/
      l[19]), r[0] & /*$values*/
      1048576 && (i.values = /*$values*/
      l[20]), r[0] & /*$idsLength*/
      2097152 && (i.idsLength = /*$idsLength*/
      l[21]), r[0] & /*$subqueryEnabled*/
      4194304 && (i.subqueryEnabled = /*$subqueryEnabled*/
      l[22]), r[0] & /*$subqueries*/
      8388608 && (i.subqueries = /*$subqueries*/
      l[23]), r[0] & /*model*/
      1 && (i.onSubqueryToggle = /*func_3*/
      l[69]), r[0] & /*$llmMessage*/
      8 && (i.llmMessage = /*$llmMessage*/
      l[3]), r[0] & /*$llmLoading*/
      32 && (i.llmLoading = /*$llmLoading*/
      l[5]), r[0] & /*$llmError*/
      16777216 && (i.llmError = /*$llmError*/
      l[24]), r[0] & /*$llmEnabled*/
      33554432 && (i.llmEnabled = /*$llmEnabled*/
      l[25]), r[0] & /*$apiStatus*/
      67108864 && (i.apiStatus = /*$apiStatus*/
      l[26]), r[0] & /*$extractedQuery*/
      16 && (i.extractedQuery = /*$extractedQuery*/
      l[4]), r[0] & /*$aiExplanation*/
      134217728 && (i.aiExplanation = /*$aiExplanation*/
      l[27]), r[0] & /*$hasExtractedQuery*/
      268435456 && (i.hasExtractedQuery = /*$hasExtractedQuery*/
      l[28]), r[0] & /*aiInputValueOverride*/
      4096 && (i.aiInputValueOverride = /*aiInputValueOverride*/
      l[12]), r[0] & /*historicalResponse*/
      4 && (i.historicalResponse = /*historicalResponse*/
      l[2]), t.$set(i);
    },
    i(l) {
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(t, l);
    }
  };
}
function f0(e) {
  let t, n;
  return t = new $s({
    props: {
      width: "w-full",
      scopes: (
        /*$scopes*/
        e[14]
      ),
      selectedScope: (
        /*$selectedScope*/
        e[15]
      ),
      scopeConcepts: (
        /*$scopeConcepts*/
        e[16]
      ),
      isLoading: (
        /*$isLoading*/
        e[17]
      ),
      loadingMessage: (
        /*$loadingMessage*/
        e[18]
      ),
      onScopeSelect: (
        /*func*/
        e[66]
      ),
      onAnalyzeScope: (
        /*func_1*/
        e[67]
      )
    }
  }), {
    c() {
      X(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r[0] & /*$scopes*/
      16384 && (i.scopes = /*$scopes*/
      l[14]), r[0] & /*$selectedScope*/
      32768 && (i.selectedScope = /*$selectedScope*/
      l[15]), r[0] & /*$scopeConcepts*/
      65536 && (i.scopeConcepts = /*$scopeConcepts*/
      l[16]), r[0] & /*$isLoading*/
      131072 && (i.isLoading = /*$isLoading*/
      l[17]), r[0] & /*$loadingMessage*/
      262144 && (i.loadingMessage = /*$loadingMessage*/
      l[18]), r[0] & /*model*/
      1 && (i.onScopeSelect = /*func*/
      l[66]), t.$set(i);
    },
    i(l) {
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      Y(t, l);
    }
  };
}
function u0(e) {
  let t, n, l, r, i, o, a, s, f, u, d, m, c;
  n = new Qa({
    props: {
      activeTab: (
        /*activeTab*/
        e[6]
      ),
      onTabChange: (
        /*handleTabChange*/
        e[54]
      )
    }
  });
  const g = [f0, s0], _ = [];
  function y(w, x) {
    return (
      /*activeTab*/
      w[6] === "data-elements" ? 0 : (
        /*activeTab*/
        w[6] === "query-inspector" ? 1 : -1
      )
    );
  }
  return ~(i = y(e)) && (o = _[i] = g[i](e)), s = new n0({
    props: {
      isVisible: (
        /*showHistoryDropdown*/
        e[8]
      ),
      history: (
        /*aiHistory*/
        e[7]
      ),
      onClose: (
        /*handleHistoryClose*/
        e[61]
      ),
      onSelect: (
        /*handleHistorySelect*/
        e[59]
      ),
      position: (
        /*historyDropdownPosition*/
        e[10]
      )
    }
  }), u = new a0({
    props: {
      isVisible: (
        /*showQueryHistoryDropdown*/
        e[9]
      ),
      history: (
        /*aiHistory*/
        e[7]
      ),
      onClose: (
        /*handleQueryHistoryClose*/
        e[62]
      ),
      onSelect: (
        /*handleQueryHistorySelect*/
        e[60]
      ),
      position: (
        /*queryHistoryDropdownPosition*/
        e[11]
      )
    }
  }), m = new Zc({
    props: {
      isLoading: (
        /*$isLoading*/
        e[17]
      ),
      message: (
        /*$loadingMessage*/
        e[18]
      )
    }
  }), {
    c() {
      t = p("main"), X(n.$$.fragment), l = q(), r = p("div"), o && o.c(), a = q(), X(s.$$.fragment), f = q(), X(u.$$.fragment), d = q(), X(m.$$.fragment), h(r, "class", "flex-auto w-full min-h-0 z-0 svelte-1pq5c6y"), h(t, "class", "w-full bg-white dark:bg-slate-950 transition-colors duration-200 relative overflow-hidden flex flex-col svelte-1pq5c6y"), Q(t, "height", "600px");
    },
    m(w, x) {
      L(w, t, x), K(n, t, null), b(t, l), b(t, r), ~i && _[i].m(r, null), b(t, a), K(s, t, null), b(t, f), K(u, t, null), b(t, d), K(m, t, null), c = !0;
    },
    p(w, x) {
      const S = {};
      x[0] & /*activeTab*/
      64 && (S.activeTab = /*activeTab*/
      w[6]), n.$set(S);
      let O = i;
      i = y(w), i === O ? ~i && _[i].p(w, x) : (o && ($(), z(_[O], 1, 1, () => {
        _[O] = null;
      }), ee()), ~i ? (o = _[i], o ? o.p(w, x) : (o = _[i] = g[i](w), o.c()), C(o, 1), o.m(r, null)) : o = null);
      const A = {};
      x[0] & /*showHistoryDropdown*/
      256 && (A.isVisible = /*showHistoryDropdown*/
      w[8]), x[0] & /*aiHistory*/
      128 && (A.history = /*aiHistory*/
      w[7]), x[0] & /*historyDropdownPosition*/
      1024 && (A.position = /*historyDropdownPosition*/
      w[10]), s.$set(A);
      const R = {};
      x[0] & /*showQueryHistoryDropdown*/
      512 && (R.isVisible = /*showQueryHistoryDropdown*/
      w[9]), x[0] & /*aiHistory*/
      128 && (R.history = /*aiHistory*/
      w[7]), x[0] & /*queryHistoryDropdownPosition*/
      2048 && (R.position = /*queryHistoryDropdownPosition*/
      w[11]), u.$set(R);
      const D = {};
      x[0] & /*$isLoading*/
      131072 && (D.isLoading = /*$isLoading*/
      w[17]), x[0] & /*$loadingMessage*/
      262144 && (D.message = /*$loadingMessage*/
      w[18]), m.$set(D);
    },
    i(w) {
      c || (C(n.$$.fragment, w), C(o), C(s.$$.fragment, w), C(u.$$.fragment, w), C(m.$$.fragment, w), c = !0);
    },
    o(w) {
      z(n.$$.fragment, w), z(o), z(s.$$.fragment, w), z(u.$$.fragment, w), z(m.$$.fragment, w), c = !1;
    },
    d(w) {
      w && M(t), Y(n), ~i && _[i].d(), Y(s), Y(u), Y(m);
    }
  };
}
function c0(e, t, n) {
  let l, r, i, o, a, s, f, u, d, m, c, g, _, y, w, x, S, O, A, R, D, { model: T } = t;
  const E = ka(T), { message: v, values: I, idsLength: B, listNames: U, handleTextInput: ce, handleLLMQuestion: N, subqueryEnabled: W, subqueries: re, scopes: ue, selectedScope: oe, scopeConcepts: P, handleScopeAnalysis: te, llmMessage: de, llmLoading: ze, llmError: Ae, llmEnabled: Me, apiStatus: be, isLoading: fe, loadingMessage: je, extractedQuery: Le, aiExplanation: De, hasExtractedQuery: ge, handleQueryExtraction: vt, textInputStore: Ie } = E;
  H(e, v, (j) => n(19, g = j)), H(e, I, (j) => n(20, _ = j)), H(e, B, (j) => n(21, y = j)), H(e, U, (j) => n(64, a = j)), H(e, W, (j) => n(22, w = j)), H(e, re, (j) => n(23, x = j)), H(e, ue, (j) => n(14, f = j)), H(e, oe, (j) => n(15, u = j)), H(e, P, (j) => n(16, d = j)), H(e, de, (j) => n(3, r = j)), H(e, ze, (j) => n(5, o = j)), H(e, Ae, (j) => n(24, S = j)), H(e, Me, (j) => n(25, O = j)), H(e, be, (j) => n(26, A = j)), H(e, fe, (j) => n(17, m = j)), H(e, je, (j) => n(18, c = j)), H(e, Le, (j) => n(4, i = j)), H(e, De, (j) => n(27, R = j)), H(e, ge, (j) => n(28, D = j)), H(e, Ie, (j) => n(65, s = j));
  let Re = "", J = "data-elements", me = [
    // Test data - manually set some history for testing
    {
      question: "Show me patients with diabetes",
      answer: `I'll help you create a TempoQL query to find patients with diabetes. Here's the query:

\`{name contains /diabetes/i; scope = Condition}\`

This query searches for conditions with 'diabetes' in the name, case-insensitive.`,
      query: "{name contains /diabetes/i; scope = Condition}",
      timestamp: new Date(Date.now() - 36e5)
    },
    {
      question: "What are the most common medications?",
      // 1 hour ago
      answer: `To find the most common medications, you can use this query:

\`{scope = Drug} | count by name\`

This will count occurrences of each drug and show you the most frequently prescribed medications.`,
      query: "{scope = Drug} | count by name",
      timestamp: new Date(Date.now() - 72e5)
    },
    {
      question: "Explain this query: last {name contains /Temperature/i; scope = Measurement} before #now",
      // 2 hours ago
      answer: "This query finds the most recent temperature measurements before the current time. It searches for measurements with 'Temperature' in the name and returns the last occurrence for each patient.",
      query: "last {name contains /Temperature/i; scope = Measurement} before #now",
      timestamp: new Date(Date.now() - 108e5)
    },
    {
      question: "How do I find blood pressure readings?",
      // 3 hours ago
      answer: `To find blood pressure readings, use this query:

\`{name contains /blood pressure/i OR name contains /systolic/i OR name contains /diastolic/i; scope = Measurement}\`

This will capture various blood pressure measurements in your dataset.`,
      query: "{name contains /blood pressure/i OR name contains /systolic/i OR name contains /diastolic/i; scope = Measurement}",
      timestamp: new Date(Date.now() - 144e5)
    },
    {
      question: "Show me patients with heart conditions",
      // 4 hours ago
      answer: `Here's a query to find patients with heart conditions:

\`{name contains /heart/i OR name contains /cardiac/i OR name contains /cardiovascular/i; scope = Condition}\`

This searches for conditions related to heart health.`,
      query: "{name contains /heart/i OR name contains /cardiac/i OR name contains /cardiovascular/i; scope = Condition}",
      timestamp: new Date(Date.now() - 18e6)
    }
  ], Oe = !1, Be = !1, st = "", qe = { top: 0, left: 0 }, Ne = { top: 0, left: 0 }, qn, ft = "", ut = "";
  function Nn(j) {
    n(63, st = j), n(2, ut = ""), N(j);
  }
  function On(j) {
    n(6, J = j);
  }
  function Fn() {
    Re.trim() && (T.set("process_trigger", "run"), T.save_changes());
  }
  function Hn() {
    Re.trim() && (console.log("🔍 Explain button clicked for query:", Re), N(`Please explain this TempoQL query: ${Re}`, "explain"));
  }
  function $l(j, pe, Se = null) {
    const Ce = {
      question: j,
      answer: pe,
      query: Se,
      timestamp: /* @__PURE__ */ new Date()
    };
    n(7, me = [Ce, ...me]), me.length > 10 && n(7, me = me.slice(0, 10)), console.log("📚 Added to history:", Ce);
  }
  function In() {
    console.log("📚 History button clicked"), Oe || xt(), n(8, Oe = !Oe);
  }
  function er() {
    console.log("📚 Query History button clicked"), Be || Tt(), n(9, Be = !Be);
  }
  function xt() {
    const j = document.querySelectorAll(".history-button");
    console.log("🔍 Found history buttons:", j.length);
    const pe = document.querySelector(".history-button");
    if (console.log("🔍 Looking for history button:", pe), pe) {
      pe.style.border = "2px solid red", pe.style.backgroundColor = "rgba(255, 0, 0, 0.2)", setTimeout(
        () => {
          pe.style.border = "", pe.style.backgroundColor = "";
        },
        2e3
      );
      const Se = pe.getBoundingClientRect();
      console.log("📍 Button position:", {
        top: Se.top,
        bottom: Se.bottom,
        left: Se.left,
        right: Se.right,
        width: Se.width,
        height: Se.height
      });
      let Ce = pe.parentElement, Ke = [];
      for (; Ce && Ke.length < 5; )
        Ke.push(Ce.tagName + (Ce.className ? "." + Ce.className.split(" ")[0] : "")), Ce = Ce.parentElement;
      console.log("📍 Button parent path:", Ke.reverse().join(" > "));
      const Ye = 320;
      n(10, qe = {
        top: Se.top - 10,
        // Slightly above the button
        left: Se.right - Ye
      }), console.log("📍 Calculated dropdown position:", qe), qe.left < 10 && n(10, qe.left = 10, qe), qe.left + Ye > window.innerWidth - 10 && n(10, qe.left = window.innerWidth - Ye - 10, qe);
      const bt = window.innerHeight - 50;
      qe.top > bt && n(10, qe.top = bt, qe), console.log("📍 Final dropdown position:", qe), console.log("📍 Viewport height:", window.innerHeight), console.log("📍 Max top allowed:", bt);
    } else
      console.log("❌ History button not found!");
  }
  function Tt() {
    const j = document.querySelector(".query-history-button");
    if (console.log("🔍 Looking for query history button:", j), j) {
      const pe = j.getBoundingClientRect();
      console.log("📍 Query button position:", {
        top: pe.top,
        bottom: pe.bottom,
        left: pe.left,
        right: pe.right
      });
      const Se = 320;
      n(11, Ne = {
        top: pe.bottom + 5,
        // 5px below the button
        left: pe.right - Se
      }), console.log("📍 Calculated query dropdown position:", Ne), Ne.left < 10 && n(11, Ne.left = 10, Ne), Ne.left + Se > window.innerWidth - 10 && n(11, Ne.left = window.innerWidth - Se - 10, Ne);
      const Ce = window.innerHeight - 50;
      Ne.top > Ce && n(11, Ne.top = Ce, Ne), console.log("📍 Final query dropdown position:", Ne);
    } else
      console.log("❌ Query history button not found!");
  }
  function Pn() {
    Oe && xt(), Be && Tt();
  }
  function Et() {
    Oe && requestAnimationFrame(() => {
      xt();
    }), Be && requestAnimationFrame(() => {
      Tt();
    });
  }
  typeof window < "u" && (window.addEventListener("resize", Pn), window.addEventListener("scroll", Et));
  function Jt(j) {
    console.log("📚 AI History item selected:", j), n(8, Oe = !1), j.query && (n(1, Re = j.query), T.set("text_input", j.query), T.save_changes()), j.question && (n(12, ft = j.question), setTimeout(
      () => {
        n(12, ft = "");
      },
      100
    )), j.answer && n(2, ut = j.answer);
  }
  function $t(j) {
    console.log("📚 Query History item selected:", j), n(9, Be = !1), j.query && (n(1, Re = j.query), T.set("text_input", j.query), T.save_changes()), j.question && (n(12, ft = j.question), setTimeout(
      () => {
        n(12, ft = "");
      },
      100
    )), j.answer && n(2, ut = j.answer);
  }
  function ct() {
    n(8, Oe = !1);
  }
  function dt() {
    n(9, Be = !1);
  }
  const zt = (j) => {
    T.set("selected_scope", j), T.save_changes();
  }, gt = (j) => {
    te(j);
  }, mt = (j) => {
    n(1, Re = j), ce(j);
  }, ht = (j) => {
    T.set("subquery_enabled", j), T.save_changes();
  };
  return e.$$set = (j) => {
    "model" in j && n(0, T = j.model);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*textInput*/
    2 | e.$$.dirty[2] & /*$textInputStore*/
    8 && s && s !== Re && (console.log("🔄 Frontend: Syncing text input from backend:", s), console.log("🔄 Frontend: Previous textInput:", Re), n(1, Re = s), console.log("🔄 Frontend: Updated textInput:", Re)), e.$$.dirty[2] & /*$listNames*/
    4 && n(13, l = a || []), e.$$.dirty[0] & /*$llmMessage, $llmLoading, historicalResponse, $extractedQuery*/
    60 | e.$$.dirty[2] & /*currentQuestion*/
    2 && r && r.trim() && !o && st && !ut && ($l(st, r, i || null), n(63, st = ""));
  }, [
    T,
    Re,
    ut,
    r,
    i,
    o,
    J,
    me,
    Oe,
    Be,
    qe,
    Ne,
    ft,
    l,
    f,
    u,
    d,
    m,
    c,
    g,
    _,
    y,
    w,
    x,
    S,
    O,
    A,
    R,
    D,
    v,
    I,
    B,
    U,
    ce,
    W,
    re,
    ue,
    oe,
    P,
    te,
    de,
    ze,
    Ae,
    Me,
    be,
    fe,
    je,
    Le,
    De,
    ge,
    vt,
    Ie,
    qn,
    Nn,
    On,
    Fn,
    Hn,
    In,
    er,
    Jt,
    $t,
    ct,
    dt,
    st,
    a,
    s,
    zt,
    gt,
    mt,
    ht
  ];
}
class d0 extends ye {
  constructor(t) {
    super(), _e(this, t, c0, u0, he, { model: 0 }, null, [-1, -1, -1]);
  }
}
function g0(e) {
  new d0({
    target: e.el,
    props: {
      model: e.model
    }
  });
}
export {
  g0 as render
};
