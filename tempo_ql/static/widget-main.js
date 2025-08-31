function K() {
}
function Ca(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function Ho(e) {
  return e();
}
function xr() {
  return /* @__PURE__ */ Object.create(null);
}
function Se(e) {
  e.forEach(Ho);
}
function nt(e) {
  return typeof e == "function";
}
function de(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Ma(e) {
  return Object.keys(e).length === 0;
}
function Fo(e, ...t) {
  if (e == null)
    return K;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function H(e, t, n) {
  e.$$.on_destroy.push(Fo(t, n));
}
function qe(e, t, n, l) {
  if (e) {
    const r = Qo(e, t, n, l);
    return e[0](r);
  }
}
function Qo(e, t, n, l) {
  return e[1] && l ? Ca(n.ctx.slice(), e[1](l(t))) : n.ctx;
}
function Te(e, t, n, l) {
  if (e[2] && l) {
    const r = e[2](l(n));
    if (t.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const i = [], o = Math.max(t.dirty.length, r.length);
      for (let f = 0; f < o; f += 1)
        i[f] = t.dirty[f] | r[f];
      return i;
    }
    return t.dirty | r;
  }
  return t.dirty;
}
function xe(e, t, n, l, r, i) {
  if (r) {
    const o = Qo(t, n, l, i);
    e.p(o, r);
  }
}
function Oe(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let l = 0; l < n; l++)
      t[l] = -1;
    return t;
  }
  return -1;
}
function Lr(e) {
  const t = {};
  for (const n in e)
    t[n] = !0;
  return t;
}
function ae(e, t, n) {
  return e.set(n), t;
}
function h(e, t) {
  e.appendChild(t);
}
function R(e, t, n) {
  e.insertBefore(t, n || null);
}
function z(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Ne(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function w(e) {
  return document.createElement(e);
}
function ye(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function G(e) {
  return document.createTextNode(e);
}
function j() {
  return G(" ");
}
function ce() {
  return G("");
}
function te(e, t, n, l) {
  return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
}
function za(e) {
  return function(t) {
    return t.stopPropagation(), e.call(this, t);
  };
}
function m(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function La(e) {
  return Array.from(e.childNodes);
}
function ee(e, t) {
  t = "" + t, e.data !== t && (e.data = t);
}
function It(e, t) {
  e.value = t ?? "";
}
function Z(e, t, n, l) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, l ? "important" : "");
}
let zl;
function Ra() {
  if (zl === void 0) {
    zl = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      zl = !0;
    }
  }
  return zl;
}
function Na(e, t) {
  getComputedStyle(e).position === "static" && (e.style.position = "relative");
  const l = w("iframe");
  l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), l.setAttribute("aria-hidden", "true"), l.tabIndex = -1;
  const r = Ra();
  let i;
  return r ? (l.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", i = te(window, "message", (o) => {
    o.source === l.contentWindow && t();
  })) : (l.src = "about:blank", l.onload = () => {
    i = te(l.contentWindow, "resize", t), t();
  }), h(e, l), () => {
    (r || i && l.contentWindow) && i(), z(l);
  };
}
function ie(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
function Aa(e, t, { bubbles: n = !1, cancelable: l = !1 } = {}) {
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
    this.e || (this.is_svg ? this.e = ye(n.nodeName) : this.e = w(n.nodeType === 11 ? "TEMPLATE" : n.nodeName), this.t = n.tagName !== "TEMPLATE" ? n : n.content, this.c(t)), this.i(l);
  }
  h(t) {
    this.e.innerHTML = t, this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes);
  }
  i(t) {
    for (let n = 0; n < this.n.length; n += 1)
      R(this.t, this.n[n], t);
  }
  p(t) {
    this.d(), this.h(t), this.i(this.a);
  }
  d() {
    this.n.forEach(z);
  }
}
let yn;
function _n(e) {
  yn = e;
}
function Cn() {
  if (!yn)
    throw new Error("Function called outside component initialization");
  return yn;
}
function st(e) {
  Cn().$$.on_mount.push(e);
}
function Ea(e) {
  Cn().$$.on_destroy.push(e);
}
function Bo() {
  const e = Cn();
  return (t, n, { cancelable: l = !1 } = {}) => {
    const r = e.$$.callbacks[t];
    if (r) {
      const i = Aa(t, n, { cancelable: l });
      return r.slice().forEach((o) => {
        o.call(e, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function Da(e, t) {
  return Cn().$$.context.set(e, t), t;
}
function Mn(e) {
  return Cn().$$.context.get(e);
}
function Or(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((l) => l.call(this, t));
}
const Ot = [], Me = [];
let Pt = [];
const wr = [], qa = /* @__PURE__ */ Promise.resolve();
let vr = !1;
function Ta() {
  vr || (vr = !0, qa.then(Ve));
}
function jl(e) {
  Pt.push(e);
}
function pn(e) {
  wr.push(e);
}
const _r = /* @__PURE__ */ new Set();
let Tt = 0;
function Ve() {
  if (Tt !== 0)
    return;
  const e = yn;
  do {
    try {
      for (; Tt < Ot.length; ) {
        const t = Ot[Tt];
        Tt++, _n(t), xa(t.$$);
      }
    } catch (t) {
      throw Ot.length = 0, Tt = 0, t;
    }
    for (_n(null), Ot.length = 0, Tt = 0; Me.length; )
      Me.pop()();
    for (let t = 0; t < Pt.length; t += 1) {
      const n = Pt[t];
      _r.has(n) || (_r.add(n), n());
    }
    Pt.length = 0;
  } while (Ot.length);
  for (; wr.length; )
    wr.pop()();
  vr = !1, _r.clear(), _n(e);
}
function xa(e) {
  if (e.fragment !== null) {
    e.update(), Se(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(jl);
  }
}
function Oa(e) {
  const t = [], n = [];
  Pt.forEach((l) => e.indexOf(l) === -1 ? t.push(l) : n.push(l)), n.forEach((l) => l()), Pt = t;
}
const Ol = /* @__PURE__ */ new Set();
let it;
function ne() {
  it = {
    r: 0,
    c: [],
    p: it
    // parent group
  };
}
function le() {
  it.r || Se(it.c), it = it.p;
}
function S(e, t) {
  e && e.i && (Ol.delete(e), e.i(t));
}
function N(e, t, n, l) {
  if (e && e.o) {
    if (Ol.has(e))
      return;
    Ol.add(e), it.c.push(() => {
      Ol.delete(e), l && (n && e.d(1), l());
    }), e.o(t);
  } else
    l && l();
}
function kn(e, t, n) {
  const l = e.$$.props[t];
  l !== void 0 && (e.$$.bound[l] = n, n(e.$$.ctx[l]));
}
function Y(e) {
  e && e.c();
}
function V(e, t, n, l) {
  const { fragment: r, after_update: i } = e.$$;
  r && r.m(t, n), l || jl(() => {
    const o = e.$$.on_mount.map(Ho).filter(nt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : Se(o), e.$$.on_mount = [];
  }), i.forEach(jl);
}
function W(e, t) {
  const n = e.$$;
  n.fragment !== null && (Oa(n.after_update), Se(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Pa(e, t) {
  e.$$.dirty[0] === -1 && (Ot.push(e), Ta(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ge(e, t, n, l, r, i, o, f = [-1]) {
  const a = yn;
  _n(e);
  const s = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: K,
    not_equal: r,
    bound: xr(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: xr(),
    dirty: f,
    skip_bound: !1,
    root: t.target || a.$$.root
  };
  o && o(s.root);
  let u = !1;
  if (s.ctx = n ? n(e, t.props || {}, (c, d, ...g) => {
    const b = g.length ? g[0] : d;
    return s.ctx && r(s.ctx[c], s.ctx[c] = b) && (!s.skip_bound && s.bound[c] && s.bound[c](b), u && Pa(e, c)), d;
  }) : [], s.update(), u = !0, Se(s.before_update), s.fragment = l ? l(s.ctx) : !1, t.target) {
    if (t.hydrate) {
      const c = La(t.target);
      s.fragment && s.fragment.l(c), c.forEach(z);
    } else
      s.fragment && s.fragment.c();
    t.intro && S(e.$$.fragment), V(e, t.target, t.anchor, t.customElement), Ve();
  }
  _n(a);
}
class me {
  $destroy() {
    W(this, 1), this.$destroy = K;
  }
  $on(t, n) {
    if (!nt(n))
      return K;
    const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return l.push(n), () => {
      const r = l.indexOf(n);
      r !== -1 && l.splice(r, 1);
    };
  }
  $set(t) {
    this.$$set && !Ma(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const xt = [];
function ja(e, t) {
  return {
    subscribe: fe(e, t).subscribe
  };
}
function fe(e, t = K) {
  let n;
  const l = /* @__PURE__ */ new Set();
  function r(f) {
    if (de(e, f) && (e = f, n)) {
      const a = !xt.length;
      for (const s of l)
        s[1](), xt.push(s, e);
      if (a) {
        for (let s = 0; s < xt.length; s += 2)
          xt[s][0](xt[s + 1]);
        xt.length = 0;
      }
    }
  }
  function i(f) {
    r(f(e));
  }
  function o(f, a = K) {
    const s = [f, a];
    return l.add(s), l.size === 1 && (n = t(r) || K), f(e), () => {
      l.delete(s), l.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: i, subscribe: o };
}
function be(e, t, n) {
  const l = !Array.isArray(e), r = l ? [e] : e, i = t.length < 2;
  return ja(n, (o) => {
    let f = !1;
    const a = [];
    let s = 0, u = K;
    const c = () => {
      if (s)
        return;
      u();
      const g = t(l ? a[0] : a, o);
      i ? o(g) : u = nt(g) ? g : K;
    }, d = r.map((g, b) => Fo(g, (_) => {
      a[b] = _, s &= ~(1 << b), f && c();
    }, () => {
      s |= 1 << b;
    }));
    return f = !0, c(), function() {
      Se(d), u(), f = !1;
    };
  });
}
function ke(e, t, n) {
  const l = t, r = fe(e.get(l) || n);
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
        let f = i(o);
        return e.set(l, f), e.save_changes(), f;
      });
    }
  };
}
function Ia(e) {
  const t = ke(e, "type", "meds"), n = ke(e, "values", {}), l = ke(e, "list_names", {
    attributes: [],
    events: [],
    intervals: []
  }), r = ke(e, "subqueries", {}), i = ke(e, "query_error", ""), o = ke(e, "text_input", ""), f = ke(e, "scopes", []), a = ke(e, "scope_concepts", {}), s = ke(e, "isLoading", !1), u = ke(e, "loadingMessage", ""), c = ke(e, "llm_available", !1), d = ke(e, "llm_response", ""), g = ke(e, "llm_loading", !1), b = ke(e, "llm_error", ""), _ = ke(e, "api_status", "Checking API connection..."), y = ke(e, "extracted_query", ""), p = ke(e, "llm_explanation", ""), k = ke(e, "has_extracted_query", !1), L = ke(e, "query_history", []), F = ke(e, "ai_history", []);
  let x = "";
  return {
    // Reactive stores
    type: t,
    values: n,
    listNames: l,
    subqueries: r,
    queryError: i,
    scopes: f,
    scopeConcepts: a,
    isLoading: s,
    loadingMessage: u,
    llmResponse: d,
    llmLoading: g,
    llmError: b,
    llmAvailable: c,
    apiStatus: _,
    extractedQuery: y,
    llmExplanation: p,
    hasExtractedQuery: k,
    textInput: o,
    queryHistory: L,
    aiHistory: F,
    runQuery: (q) => {
      e.set("text_input", q), e.set("process_trigger", "run"), e.save_changes();
    },
    // LLM question handler
    handleLLMQuestion: (q) => {
      e.set("llm_question", q), e.set("llm_trigger", "ask"), e.save_changes();
    },
    handleLLMExplanation: () => {
      e.set("llm_trigger", "explain"), e.save_changes();
    },
    // Query extraction handler - triggered when AI extracts a query
    handleQueryExtraction: () => {
      let q = "";
      y.subscribe((P) => q = P)(), q && q !== x ? (console.log(
        "🔄 Query extracted from AI response:",
        q
      ), console.log("🔄 Current text input:", x), console.log("🔄 Updating text input with extracted query"), x = q, e.set("text_input", q), e.save_changes()) : q === x && console.log(
        "🔄 Extracted query is same as current input, no update needed"
      );
    },
    // Scope analysis handler
    handleScopeAnalysis: (q, P = !1) => {
      console.log(
        "🔍 Scope Analysis requested for:",
        q,
        P ? "(force refresh)" : ""
      );
      const I = P ? `${q}:force` : q;
      e.set("scope_analysis_trigger", I), e.save_changes();
    }
  };
}
function Ha() {
  const t = (typeof window < "u" ? localStorage.getItem("theme") : "dark") || "dark", { subscribe: n, set: l, update: r } = fe(t);
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
        const f = document.documentElement;
        o === "dark" ? f.classList.add("dark") : f.classList.remove("dark");
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
const Il = Ha();
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Hl = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [512, 512, [], "f077", "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
}, Fa = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, Qa = Fa, Ba = {
  prefix: "fas",
  iconName: "code",
  icon: [640, 512, [], "f121", "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]
}, Go = {
  prefix: "fas",
  iconName: "bolt-lightning",
  icon: [384, 512, [], "e0b7", "M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z"]
}, Vo = {
  prefix: "fas",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
}, Ga = {
  prefix: "fas",
  iconName: "sun",
  icon: [512, 512, [9728], "f185", "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]
}, Wo = {
  prefix: "fas",
  iconName: "play",
  icon: [384, 512, [9654], "f04b", "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]
}, Va = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, Wa = Va, Be = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, Ka = {
  prefix: "fas",
  iconName: "copy",
  icon: [448, 512, [], "f0c5", "M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]
}, Ko = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}, Xa = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, Ya = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, ft = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, Ua = {
  prefix: "fas",
  iconName: "moon",
  icon: [384, 512, [127769, 9214], "f186", "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]
}, Za = {
  prefix: "fas",
  iconName: "check",
  icon: [448, 512, [10003, 10004], "f00c", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, Ja = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, $a = Ja, ef = {
  prefix: "fas",
  iconName: "database",
  icon: [448, 512, [], "f1c0", "M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z"]
}, tf = {
  prefix: "fas",
  iconName: "circle-xmark",
  icon: [512, 512, [61532, "times-circle", "xmark-circle"], "f057", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]
}, nf = tf, Ll = parseFloat;
function Sr(e, t = ";") {
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
function lf(e, t, n, l) {
  let r, i;
  const o = "1em";
  let f, a, s, u = "-.125em";
  const c = "visible";
  return l && (s = "center", i = "1.25em"), n && (r = n), t && (t == "lg" ? (a = "1.33333em", f = ".75em", u = "-.225em") : t == "xs" ? a = ".75em" : t == "sm" ? a = ".875em" : a = t.replace("x", "em")), Sr([
    Sr({
      float: r,
      width: i,
      height: o,
      "line-height": f,
      "font-size": a,
      "text-align": s,
      "vertical-align": u,
      "transform-origin": "center",
      overflow: c
    }),
    e
  ]);
}
function rf(e, t, n, l, r, i = 1, o = "", f = "") {
  let a = 1, s = 1;
  return r && (r == "horizontal" ? a = -1 : r == "vertical" ? s = -1 : a = s = -1), Sr(
    [
      `translate(${Ll(t) * i}${o},${Ll(n) * i}${o})`,
      `scale(${a * Ll(e)},${s * Ll(e)})`,
      l && `rotate(${l}${f})`
    ],
    " "
  );
}
function Pr(e) {
  let t, n, l, r, i, o, f, a;
  function s(d, g) {
    return typeof /*i*/
    d[10][4] == "string" ? af : of;
  }
  let u = s(e), c = u(e);
  return {
    c() {
      t = ye("svg"), n = ye("g"), l = ye("g"), c.c(), m(
        l,
        "transform",
        /*transform*/
        e[12]
      ), m(n, "transform", r = "translate(" + /*i*/
      e[10][0] / 2 + " " + /*i*/
      e[10][1] / 2 + ")"), m(n, "transform-origin", i = /*i*/
      e[10][0] / 4 + " 0"), m(t, "id", o = /*id*/
      e[1] || void 0), m(t, "class", f = "svelte-fa " + /*clazz*/
      e[0] + " svelte-1cj2gr0"), m(
        t,
        "style",
        /*s*/
        e[11]
      ), m(t, "viewBox", a = "0 0 " + /*i*/
      e[10][0] + " " + /*i*/
      e[10][1]), m(t, "aria-hidden", "true"), m(t, "role", "img"), m(t, "xmlns", "http://www.w3.org/2000/svg"), ie(
        t,
        "pulse",
        /*pulse*/
        e[4]
      ), ie(
        t,
        "spin",
        /*spin*/
        e[3]
      );
    },
    m(d, g) {
      R(d, t, g), h(t, n), h(n, l), c.m(l, null);
    },
    p(d, g) {
      u === (u = s(d)) && c ? c.p(d, g) : (c.d(1), c = u(d), c && (c.c(), c.m(l, null))), g & /*transform*/
      4096 && m(
        l,
        "transform",
        /*transform*/
        d[12]
      ), g & /*i*/
      1024 && r !== (r = "translate(" + /*i*/
      d[10][0] / 2 + " " + /*i*/
      d[10][1] / 2 + ")") && m(n, "transform", r), g & /*i*/
      1024 && i !== (i = /*i*/
      d[10][0] / 4 + " 0") && m(n, "transform-origin", i), g & /*id*/
      2 && o !== (o = /*id*/
      d[1] || void 0) && m(t, "id", o), g & /*clazz*/
      1 && f !== (f = "svelte-fa " + /*clazz*/
      d[0] + " svelte-1cj2gr0") && m(t, "class", f), g & /*s*/
      2048 && m(
        t,
        "style",
        /*s*/
        d[11]
      ), g & /*i*/
      1024 && a !== (a = "0 0 " + /*i*/
      d[10][0] + " " + /*i*/
      d[10][1]) && m(t, "viewBox", a), g & /*clazz, pulse*/
      17 && ie(
        t,
        "pulse",
        /*pulse*/
        d[4]
      ), g & /*clazz, spin*/
      9 && ie(
        t,
        "spin",
        /*spin*/
        d[3]
      );
    },
    d(d) {
      d && z(t), c.d();
    }
  };
}
function of(e) {
  let t, n, l, r, i, o, f, a, s, u;
  return {
    c() {
      t = ye("path"), o = ye("path"), m(t, "d", n = /*i*/
      e[10][4][0]), m(t, "fill", l = /*secondaryColor*/
      e[6] || /*color*/
      e[2] || "currentColor"), m(t, "fill-opacity", r = /*swapOpacity*/
      e[9] != !1 ? (
        /*primaryOpacity*/
        e[7]
      ) : (
        /*secondaryOpacity*/
        e[8]
      )), m(t, "transform", i = "translate(" + /*i*/
      e[10][0] / -2 + " " + /*i*/
      e[10][1] / -2 + ")"), m(o, "d", f = /*i*/
      e[10][4][1]), m(o, "fill", a = /*primaryColor*/
      e[5] || /*color*/
      e[2] || "currentColor"), m(o, "fill-opacity", s = /*swapOpacity*/
      e[9] != !1 ? (
        /*secondaryOpacity*/
        e[8]
      ) : (
        /*primaryOpacity*/
        e[7]
      )), m(o, "transform", u = "translate(" + /*i*/
      e[10][0] / -2 + " " + /*i*/
      e[10][1] / -2 + ")");
    },
    m(c, d) {
      R(c, t, d), R(c, o, d);
    },
    p(c, d) {
      d & /*i*/
      1024 && n !== (n = /*i*/
      c[10][4][0]) && m(t, "d", n), d & /*secondaryColor, color*/
      68 && l !== (l = /*secondaryColor*/
      c[6] || /*color*/
      c[2] || "currentColor") && m(t, "fill", l), d & /*swapOpacity, primaryOpacity, secondaryOpacity*/
      896 && r !== (r = /*swapOpacity*/
      c[9] != !1 ? (
        /*primaryOpacity*/
        c[7]
      ) : (
        /*secondaryOpacity*/
        c[8]
      )) && m(t, "fill-opacity", r), d & /*i*/
      1024 && i !== (i = "translate(" + /*i*/
      c[10][0] / -2 + " " + /*i*/
      c[10][1] / -2 + ")") && m(t, "transform", i), d & /*i*/
      1024 && f !== (f = /*i*/
      c[10][4][1]) && m(o, "d", f), d & /*primaryColor, color*/
      36 && a !== (a = /*primaryColor*/
      c[5] || /*color*/
      c[2] || "currentColor") && m(o, "fill", a), d & /*swapOpacity, secondaryOpacity, primaryOpacity*/
      896 && s !== (s = /*swapOpacity*/
      c[9] != !1 ? (
        /*secondaryOpacity*/
        c[8]
      ) : (
        /*primaryOpacity*/
        c[7]
      )) && m(o, "fill-opacity", s), d & /*i*/
      1024 && u !== (u = "translate(" + /*i*/
      c[10][0] / -2 + " " + /*i*/
      c[10][1] / -2 + ")") && m(o, "transform", u);
    },
    d(c) {
      c && z(t), c && z(o);
    }
  };
}
function af(e) {
  let t, n, l, r;
  return {
    c() {
      t = ye("path"), m(t, "d", n = /*i*/
      e[10][4]), m(t, "fill", l = /*color*/
      e[2] || /*primaryColor*/
      e[5] || "currentColor"), m(t, "transform", r = "translate(" + /*i*/
      e[10][0] / -2 + " " + /*i*/
      e[10][1] / -2 + ")");
    },
    m(i, o) {
      R(i, t, o);
    },
    p(i, o) {
      o & /*i*/
      1024 && n !== (n = /*i*/
      i[10][4]) && m(t, "d", n), o & /*color, primaryColor*/
      36 && l !== (l = /*color*/
      i[2] || /*primaryColor*/
      i[5] || "currentColor") && m(t, "fill", l), o & /*i*/
      1024 && r !== (r = "translate(" + /*i*/
      i[10][0] / -2 + " " + /*i*/
      i[10][1] / -2 + ")") && m(t, "transform", r);
    },
    d(i) {
      i && z(t);
    }
  };
}
function ff(e) {
  let t, n = (
    /*i*/
    e[10][4] && Pr(e)
  );
  return {
    c() {
      n && n.c(), t = ce();
    },
    m(l, r) {
      n && n.m(l, r), R(l, t, r);
    },
    p(l, [r]) {
      /*i*/
      l[10][4] ? n ? n.p(l, r) : (n = Pr(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: K,
    o: K,
    d(l) {
      n && n.d(l), l && z(t);
    }
  };
}
function sf(e, t, n) {
  let { class: l = "" } = t, { id: r = "" } = t, { style: i = "" } = t, { icon: o } = t, { size: f = "" } = t, { color: a = "" } = t, { fw: s = !1 } = t, { pull: u = "" } = t, { scale: c = 1 } = t, { translateX: d = 0 } = t, { translateY: g = 0 } = t, { rotate: b = "" } = t, { flip: _ = !1 } = t, { spin: y = !1 } = t, { pulse: p = !1 } = t, { primaryColor: k = "" } = t, { secondaryColor: L = "" } = t, { primaryOpacity: F = 1 } = t, { secondaryOpacity: x = 0.4 } = t, { swapOpacity: q = !1 } = t, P, I, O;
  return e.$$set = (M) => {
    "class" in M && n(0, l = M.class), "id" in M && n(1, r = M.id), "style" in M && n(13, i = M.style), "icon" in M && n(14, o = M.icon), "size" in M && n(15, f = M.size), "color" in M && n(2, a = M.color), "fw" in M && n(16, s = M.fw), "pull" in M && n(17, u = M.pull), "scale" in M && n(18, c = M.scale), "translateX" in M && n(19, d = M.translateX), "translateY" in M && n(20, g = M.translateY), "rotate" in M && n(21, b = M.rotate), "flip" in M && n(22, _ = M.flip), "spin" in M && n(3, y = M.spin), "pulse" in M && n(4, p = M.pulse), "primaryColor" in M && n(5, k = M.primaryColor), "secondaryColor" in M && n(6, L = M.secondaryColor), "primaryOpacity" in M && n(7, F = M.primaryOpacity), "secondaryOpacity" in M && n(8, x = M.secondaryOpacity), "swapOpacity" in M && n(9, q = M.swapOpacity);
  }, e.$$.update = () => {
    e.$$.dirty & /*icon*/
    16384 && n(10, P = o && o.icon || [0, 0, "", [], ""]), e.$$.dirty & /*style, size, pull, fw*/
    237568 && n(11, I = lf(i, f, u, s)), e.$$.dirty & /*scale, translateX, translateY, rotate, flip*/
    8126464 && n(12, O = rf(c, d, g, b, _, 512));
  }, [
    l,
    r,
    a,
    y,
    p,
    k,
    L,
    F,
    x,
    q,
    P,
    I,
    O,
    i,
    o,
    f,
    s,
    u,
    c,
    d,
    g,
    b,
    _
  ];
}
class _e extends me {
  constructor(t) {
    super(), ge(this, t, sf, ff, de, {
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
function uf(e) {
  let t, n;
  return t = new _e({ props: { icon: Ua } }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p: K,
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function cf(e) {
  let t, n;
  return t = new _e({ props: { icon: Ga } }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p: K,
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function df(e) {
  let t, n, l, r, i, o;
  const f = [cf, uf], a = [];
  function s(u, c) {
    return (
      /*$theme*/
      u[0] === "dark" ? 0 : 1
    );
  }
  return n = s(e), l = a[n] = f[n](e), {
    c() {
      t = w("button"), l.c(), m(t, "class", "px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"), m(t, "title", "Toggle theme");
    },
    m(u, c) {
      R(u, t, c), a[n].m(t, null), r = !0, i || (o = te(
        t,
        "click",
        /*toggleTheme*/
        e[1]
      ), i = !0);
    },
    p(u, [c]) {
      let d = n;
      n = s(u), n === d ? a[n].p(u, c) : (ne(), N(a[d], 1, 1, () => {
        a[d] = null;
      }), le(), l = a[n], l ? l.p(u, c) : (l = a[n] = f[n](u), l.c()), S(l, 1), l.m(t, null));
    },
    i(u) {
      r || (S(l), r = !0);
    },
    o(u) {
      N(l), r = !1;
    },
    d(u) {
      u && z(t), a[n].d(), i = !1, o();
    }
  };
}
function gf(e, t, n) {
  let l;
  H(e, Il, (i) => n(0, l = i));
  function r() {
    console.log("Theme toggle clicked, current theme:", l), Il.toggle();
  }
  return e.$$.update = () => {
    if (e.$$.dirty & /*$theme*/
    1 && (console.log("Theme changed to:", l), typeof window < "u")) {
      const i = document.documentElement;
      console.log("HTML classes:", i.className), console.log("Has dark class:", i.classList.contains("dark"));
    }
  }, [l, r];
}
class mf extends me {
  constructor(t) {
    super(), ge(this, t, gf, df, de, {});
  }
}
function jr(e, t, n) {
  const l = e.slice();
  return l[4] = t[n], l;
}
function Ir(e) {
  let t, n, l, r = (
    /*tab*/
    e[4].label + ""
  ), i, o, f, a, s;
  n = new _e({
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
      t = w("button"), Y(n.$$.fragment), l = j(), i = G(r), m(t, "class", o = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*activeTab*/
      (e[0] === /*tab*/
      e[4].id ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600"));
    },
    m(c, d) {
      R(c, t, d), V(n, t, null), h(t, l), h(t, i), f = !0, a || (s = te(t, "click", u), a = !0);
    },
    p(c, d) {
      e = c, (!f || d & /*activeTab*/
      1 && o !== (o = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*activeTab*/
      (e[0] === /*tab*/
      e[4].id ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600"))) && m(t, "class", o);
    },
    i(c) {
      f || (S(n.$$.fragment, c), f = !0);
    },
    o(c) {
      N(n.$$.fragment, c), f = !1;
    },
    d(c) {
      c && z(t), W(n), a = !1, s();
    }
  };
}
function bf(e) {
  let t, n, l, r, i, o, f, a = (
    /*tabs*/
    e[2]
  ), s = [];
  for (let c = 0; c < a.length; c += 1)
    s[c] = Ir(jr(e, a, c));
  const u = (c) => N(s[c], 1, 1, () => {
    s[c] = null;
  });
  return o = new mf({}), {
    c() {
      t = w("div"), n = w("nav");
      for (let c = 0; c < s.length; c += 1)
        s[c].c();
      l = j(), r = w("div"), i = j(), Y(o.$$.fragment), m(r, "class", "flex-auto"), m(n, "class", "flex gap-2 px-4 py-2"), m(n, "aria-label", "Tabs"), m(t, "class", "w-full bg-gray-300 dark:bg-gray-800 dark:text-white");
    },
    m(c, d) {
      R(c, t, d), h(t, n);
      for (let g = 0; g < s.length; g += 1)
        s[g] && s[g].m(n, null);
      h(n, l), h(n, r), h(n, i), V(o, n, null), f = !0;
    },
    p(c, [d]) {
      if (d & /*activeTab, tabs, onTabChange*/
      7) {
        a = /*tabs*/
        c[2];
        let g;
        for (g = 0; g < a.length; g += 1) {
          const b = jr(c, a, g);
          s[g] ? (s[g].p(b, d), S(s[g], 1)) : (s[g] = Ir(b), s[g].c(), S(s[g], 1), s[g].m(n, l));
        }
        for (ne(), g = a.length; g < s.length; g += 1)
          u(g);
        le();
      }
    },
    i(c) {
      if (!f) {
        for (let d = 0; d < a.length; d += 1)
          S(s[d]);
        S(o.$$.fragment, c), f = !0;
      }
    },
    o(c) {
      s = s.filter(Boolean);
      for (let d = 0; d < s.length; d += 1)
        N(s[d]);
      N(o.$$.fragment, c), f = !1;
    },
    d(c) {
      c && z(t), Ne(s, c), W(o);
    }
  };
}
function hf(e, t, n) {
  let { activeTab: l = "query-inspector" } = t, { onTabChange: r = () => {
  } } = t;
  const i = [
    {
      id: "query-inspector",
      label: "Query Inspector",
      icon: Ba
    },
    {
      id: "data-elements",
      label: "Data Elements",
      icon: ef
    }
  ], o = (f) => r(f.id);
  return e.$$set = (f) => {
    "activeTab" in f && n(0, l = f.activeTab), "onTabChange" in f && n(1, r = f.onTabChange);
  }, [l, r, i, o];
}
class _f extends me {
  constructor(t) {
    super(), ge(this, t, hf, bf, de, { activeTab: 0, onTabChange: 1 });
  }
}
function yf(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Fl(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, l = e.slice(0, n);
  return [
    l.length > 1 ? l[0] + l.slice(2) : l,
    +e.slice(n + 1)
  ];
}
function Ht(e) {
  return e = Fl(Math.abs(e)), e ? e[1] : NaN;
}
function pf(e, t) {
  return function(n, l) {
    for (var r = n.length, i = [], o = 0, f = e[0], a = 0; r > 0 && f > 0 && (a + f + 1 > l && (f = Math.max(1, l - a)), i.push(n.substring(r -= f, r + f)), !((a += f + 1) > l)); )
      f = e[o = (o + 1) % e.length];
    return i.reverse().join(t);
  };
}
function kf(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var wf = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ql(e) {
  if (!(t = wf.exec(e)))
    throw new Error("invalid format: " + e);
  var t;
  return new Rr({
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
Ql.prototype = Rr.prototype;
function Rr(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Rr.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function vf(e) {
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
var Xo;
function Sf(e, t) {
  var n = Fl(e, t);
  if (!n)
    return e + "";
  var l = n[0], r = n[1], i = r - (Xo = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, o = l.length;
  return i === o ? l : i > o ? l + new Array(i - o + 1).join("0") : i > 0 ? l.slice(0, i) + "." + l.slice(i) : "0." + new Array(1 - i).join("0") + Fl(e, Math.max(0, t + i - 1))[0];
}
function Hr(e, t) {
  var n = Fl(e, t);
  if (!n)
    return e + "";
  var l = n[0], r = n[1];
  return r < 0 ? "0." + new Array(-r).join("0") + l : l.length > r + 1 ? l.slice(0, r + 1) + "." + l.slice(r + 1) : l + new Array(r - l.length + 2).join("0");
}
const Fr = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: yf,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Hr(e * 100, t),
  r: Hr,
  s: Sf,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Qr(e) {
  return e;
}
var Br = Array.prototype.map, Gr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Cf(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Qr : pf(Br.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", l = e.currency === void 0 ? "" : e.currency[1] + "", r = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? Qr : kf(Br.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", f = e.minus === void 0 ? "−" : e.minus + "", a = e.nan === void 0 ? "NaN" : e.nan + "";
  function s(c) {
    c = Ql(c);
    var d = c.fill, g = c.align, b = c.sign, _ = c.symbol, y = c.zero, p = c.width, k = c.comma, L = c.precision, F = c.trim, x = c.type;
    x === "n" ? (k = !0, x = "g") : Fr[x] || (L === void 0 && (L = 12), F = !0, x = "g"), (y || d === "0" && g === "=") && (y = !0, d = "0", g = "=");
    var q = _ === "$" ? n : _ === "#" && /[boxX]/.test(x) ? "0" + x.toLowerCase() : "", P = _ === "$" ? l : /[%p]/.test(x) ? o : "", I = Fr[x], O = /[defgprs%]/.test(x);
    L = L === void 0 ? 6 : /[gprs]/.test(x) ? Math.max(1, Math.min(21, L)) : Math.max(0, Math.min(20, L));
    function M(E) {
      var D = q, B = P, C, T, Q;
      if (x === "c")
        B = I(E) + B, E = "";
      else {
        E = +E;
        var U = E < 0 || 1 / E < 0;
        if (E = isNaN(E) ? a : I(Math.abs(E), L), F && (E = vf(E)), U && +E == 0 && b !== "+" && (U = !1), D = (U ? b === "(" ? b : f : b === "-" || b === "(" ? "" : b) + D, B = (x === "s" ? Gr[8 + Xo / 3] : "") + B + (U && b === "(" ? ")" : ""), O) {
          for (C = -1, T = E.length; ++C < T; )
            if (Q = E.charCodeAt(C), 48 > Q || Q > 57) {
              B = (Q === 46 ? r + E.slice(C + 1) : E.slice(C)) + B, E = E.slice(0, C);
              break;
            }
        }
      }
      k && !y && (E = t(E, 1 / 0));
      var oe = D.length + E.length + B.length, $ = oe < p ? new Array(p - oe + 1).join(d) : "";
      switch (k && y && (E = t($ + E, $.length ? p - B.length : 1 / 0), $ = ""), g) {
        case "<":
          E = D + E + B + $;
          break;
        case "=":
          E = D + $ + E + B;
          break;
        case "^":
          E = $.slice(0, oe = $.length >> 1) + D + E + B + $.slice(oe);
          break;
        default:
          E = $ + D + E + B;
          break;
      }
      return i(E);
    }
    return M.toString = function() {
      return c + "";
    }, M;
  }
  function u(c, d) {
    var g = s((c = Ql(c), c.type = "f", c)), b = Math.max(-8, Math.min(8, Math.floor(Ht(d) / 3))) * 3, _ = Math.pow(10, -b), y = Gr[8 + b / 3];
    return function(p) {
      return g(_ * p) + y;
    };
  }
  return {
    format: s,
    formatPrefix: u
  };
}
var Rl, he, Yo;
Mf({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Mf(e) {
  return Rl = Cf(e), he = Rl.format, Yo = Rl.formatPrefix, Rl;
}
function Uo(e) {
  return Math.max(0, -Ht(Math.abs(e)));
}
function zf(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ht(t) / 3))) * 3 - Ht(Math.abs(e)));
}
function Lf(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Ht(t) - Ht(e)) + 1;
}
function Qt(e) {
  for (var t = e.length / 6 | 0, n = new Array(t), l = 0; l < t; )
    n[l] = "#" + e.slice(l * 6, ++l * 6);
  return n;
}
const Rf = Qt("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Nf = Qt("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function Nr(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Zo(e, t) {
  var n = Object.create(e.prototype);
  for (var l in t)
    n[l] = t[l];
  return n;
}
function zn() {
}
var wn = 0.7, Bl = 1 / wn, jt = "\\s*([+-]?\\d+)\\s*", vn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Qe = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Af = /^#([0-9a-f]{3,8})$/, Ef = new RegExp(`^rgb\\(${jt},${jt},${jt}\\)$`), Df = new RegExp(`^rgb\\(${Qe},${Qe},${Qe}\\)$`), qf = new RegExp(`^rgba\\(${jt},${jt},${jt},${vn}\\)$`), Tf = new RegExp(`^rgba\\(${Qe},${Qe},${Qe},${vn}\\)$`), xf = new RegExp(`^hsl\\(${vn},${Qe},${Qe}\\)$`), Of = new RegExp(`^hsla\\(${vn},${Qe},${Qe},${vn}\\)$`), Vr = {
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
Nr(zn, Sn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Wr,
  // Deprecated! Use color.formatHex.
  formatHex: Wr,
  formatHex8: Pf,
  formatHsl: jf,
  formatRgb: Kr,
  toString: Kr
});
function Wr() {
  return this.rgb().formatHex();
}
function Pf() {
  return this.rgb().formatHex8();
}
function jf() {
  return Jo(this).formatHsl();
}
function Kr() {
  return this.rgb().formatRgb();
}
function Sn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Af.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Xr(t) : n === 3 ? new Le(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Nl(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Nl(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ef.exec(e)) ? new Le(t[1], t[2], t[3], 1) : (t = Df.exec(e)) ? new Le(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = qf.exec(e)) ? Nl(t[1], t[2], t[3], t[4]) : (t = Tf.exec(e)) ? Nl(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = xf.exec(e)) ? Zr(t[1], t[2] / 100, t[3] / 100, 1) : (t = Of.exec(e)) ? Zr(t[1], t[2] / 100, t[3] / 100, t[4]) : Vr.hasOwnProperty(e) ? Xr(Vr[e]) : e === "transparent" ? new Le(NaN, NaN, NaN, 0) : null;
}
function Xr(e) {
  return new Le(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Nl(e, t, n, l) {
  return l <= 0 && (e = t = n = NaN), new Le(e, t, n, l);
}
function If(e) {
  return e instanceof zn || (e = Sn(e)), e ? (e = e.rgb(), new Le(e.r, e.g, e.b, e.opacity)) : new Le();
}
function Gl(e, t, n, l) {
  return arguments.length === 1 ? If(e) : new Le(e, t, n, l ?? 1);
}
function Le(e, t, n, l) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +l;
}
Nr(Le, Gl, Zo(zn, {
  brighter(e) {
    return e = e == null ? Bl : Math.pow(Bl, e), new Le(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? wn : Math.pow(wn, e), new Le(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Le(at(this.r), at(this.g), at(this.b), Vl(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Yr,
  // Deprecated! Use color.formatHex.
  formatHex: Yr,
  formatHex8: Hf,
  formatRgb: Ur,
  toString: Ur
}));
function Yr() {
  return `#${ot(this.r)}${ot(this.g)}${ot(this.b)}`;
}
function Hf() {
  return `#${ot(this.r)}${ot(this.g)}${ot(this.b)}${ot((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ur() {
  const e = Vl(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${at(this.r)}, ${at(this.g)}, ${at(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Vl(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function at(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ot(e) {
  return e = at(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Zr(e, t, n, l) {
  return l <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new De(e, t, n, l);
}
function Jo(e) {
  if (e instanceof De)
    return new De(e.h, e.s, e.l, e.opacity);
  if (e instanceof zn || (e = Sn(e)), !e)
    return new De();
  if (e instanceof De)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, l = e.b / 255, r = Math.min(t, n, l), i = Math.max(t, n, l), o = NaN, f = i - r, a = (i + r) / 2;
  return f ? (t === i ? o = (n - l) / f + (n < l) * 6 : n === i ? o = (l - t) / f + 2 : o = (t - n) / f + 4, f /= a < 0.5 ? i + r : 2 - i - r, o *= 60) : f = a > 0 && a < 1 ? 0 : o, new De(o, f, a, e.opacity);
}
function Ff(e, t, n, l) {
  return arguments.length === 1 ? Jo(e) : new De(e, t, n, l ?? 1);
}
function De(e, t, n, l) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +l;
}
Nr(De, Ff, Zo(zn, {
  brighter(e) {
    return e = e == null ? Bl : Math.pow(Bl, e), new De(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? wn : Math.pow(wn, e), new De(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, l = n + (n < 0.5 ? n : 1 - n) * t, r = 2 * n - l;
    return new Le(
      yr(e >= 240 ? e - 240 : e + 120, r, l),
      yr(e, r, l),
      yr(e < 120 ? e + 240 : e - 120, r, l),
      this.opacity
    );
  },
  clamp() {
    return new De(Jr(this.h), Al(this.s), Al(this.l), Vl(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Vl(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Jr(this.h)}, ${Al(this.s) * 100}%, ${Al(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Jr(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Al(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function yr(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Ar = (e) => () => e;
function Qf(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Bf(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(l) {
    return Math.pow(e + l * t, n);
  };
}
function Gf(e) {
  return (e = +e) == 1 ? $o : function(t, n) {
    return n - t ? Bf(t, n, e) : Ar(isNaN(t) ? n : t);
  };
}
function $o(e, t) {
  var n = t - e;
  return n ? Qf(e, n) : Ar(isNaN(e) ? t : e);
}
const $r = function e(t) {
  var n = Gf(t);
  function l(r, i) {
    var o = n((r = Gl(r)).r, (i = Gl(i)).r), f = n(r.g, i.g), a = n(r.b, i.b), s = $o(r.opacity, i.opacity);
    return function(u) {
      return r.r = o(u), r.g = f(u), r.b = a(u), r.opacity = s(u), r + "";
    };
  }
  return l.gamma = e, l;
}(1);
function Vf(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, l = t.slice(), r;
  return function(i) {
    for (r = 0; r < n; ++r)
      l[r] = e[r] * (1 - i) + t[r] * i;
    return l;
  };
}
function Wf(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Kf(e, t) {
  var n = t ? t.length : 0, l = e ? Math.min(n, e.length) : 0, r = new Array(l), i = new Array(n), o;
  for (o = 0; o < l; ++o)
    r[o] = Er(e[o], t[o]);
  for (; o < n; ++o)
    i[o] = t[o];
  return function(f) {
    for (o = 0; o < l; ++o)
      i[o] = r[o](f);
    return i;
  };
}
function Xf(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(l) {
    return n.setTime(e * (1 - l) + t * l), n;
  };
}
function Wl(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Yf(e, t) {
  var n = {}, l = {}, r;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (r in t)
    r in e ? n[r] = Er(e[r], t[r]) : l[r] = t[r];
  return function(i) {
    for (r in n)
      l[r] = n[r](i);
    return l;
  };
}
var Cr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, pr = new RegExp(Cr.source, "g");
function Uf(e) {
  return function() {
    return e;
  };
}
function Zf(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Jf(e, t) {
  var n = Cr.lastIndex = pr.lastIndex = 0, l, r, i, o = -1, f = [], a = [];
  for (e = e + "", t = t + ""; (l = Cr.exec(e)) && (r = pr.exec(t)); )
    (i = r.index) > n && (i = t.slice(n, i), f[o] ? f[o] += i : f[++o] = i), (l = l[0]) === (r = r[0]) ? f[o] ? f[o] += r : f[++o] = r : (f[++o] = null, a.push({ i: o, x: Wl(l, r) })), n = pr.lastIndex;
  return n < t.length && (i = t.slice(n), f[o] ? f[o] += i : f[++o] = i), f.length < 2 ? a[0] ? Zf(a[0].x) : Uf(t) : (t = a.length, function(s) {
    for (var u = 0, c; u < t; ++u)
      f[(c = a[u]).i] = c.x(s);
    return f.join("");
  });
}
function Er(e, t) {
  var n = typeof t, l;
  return t == null || n === "boolean" ? Ar(t) : (n === "number" ? Wl : n === "string" ? (l = Sn(t)) ? (t = l, $r) : Jf : t instanceof Sn ? $r : t instanceof Date ? Xf : Wf(t) ? Vf : Array.isArray(t) ? Kf : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Yf : Wl)(e, t);
}
function $f(e, t) {
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
const es = Ul(Qt("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
Ul(Qt("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
Ul(Qt("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
Ul(Qt("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function ts(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = w("span"), m(t, "class", n = "bar " + /*absolutePosition*/
      (e[0] ? "absolute top-0" : "") + " " + /*hoverable*/
      (e[7] ? "hover:opacity-50" : "") + " svelte-109q9hn"), m(t, "style", l = "width: " + /*widthString*/
      e[9] + "; " + /*colorScale*/
      (e[4] != null ? "background-color: " + /*colorScale*/
      e[4](
        /*fraction*/
        e[1]
      ) + "; " : `background-color: ${/*color*/
      e[5]};`) + " " + /*absolutePosition*/
      (e[0] ? `left: ${/*maxWidth*/
      e[3] * /*leftFraction*/
      e[2]}px;` : "")), ie(
        t,
        "animated",
        /*loaded*/
        e[8]
      ), ie(
        t,
        "rounded-full",
        /*rounded*/
        e[6]
      );
    },
    m(o, f) {
      R(o, t, f), r || (i = [
        te(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[10]
        ),
        te(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[11]
        )
      ], r = !0);
    },
    p(o, [f]) {
      f & /*absolutePosition, hoverable*/
      129 && n !== (n = "bar " + /*absolutePosition*/
      (o[0] ? "absolute top-0" : "") + " " + /*hoverable*/
      (o[7] ? "hover:opacity-50" : "") + " svelte-109q9hn") && m(t, "class", n), f & /*widthString, colorScale, fraction, color, absolutePosition, maxWidth, leftFraction*/
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
      o[2]}px;` : "")) && m(t, "style", l), f & /*absolutePosition, hoverable, loaded*/
      385 && ie(
        t,
        "animated",
        /*loaded*/
        o[8]
      ), f & /*absolutePosition, hoverable, rounded*/
      193 && ie(
        t,
        "rounded-full",
        /*rounded*/
        o[6]
      );
    },
    i: K,
    o: K,
    d(o) {
      o && z(t), r = !1, Se(i);
    }
  };
}
function ns(e, t, n) {
  let { absolutePosition: l = !1 } = t, { fraction: r = 1 } = t, { leftFraction: i = 0 } = t, { maxWidth: o = null } = t, { colorScale: f = null } = t, { color: a = "lightgray" } = t, { rounded: s = !0 } = t, { hoverable: u = !1 } = t;
  st(() => {
    setTimeout(() => n(8, c = !0), 100);
  });
  let c = !1, d = "";
  function g(_) {
    Or.call(this, e, _);
  }
  function b(_) {
    Or.call(this, e, _);
  }
  return e.$$set = (_) => {
    "absolutePosition" in _ && n(0, l = _.absolutePosition), "fraction" in _ && n(1, r = _.fraction), "leftFraction" in _ && n(2, i = _.leftFraction), "maxWidth" in _ && n(3, o = _.maxWidth), "colorScale" in _ && n(4, f = _.colorScale), "color" in _ && n(5, a = _.color), "rounded" in _ && n(6, s = _.rounded), "hoverable" in _ && n(7, u = _.hoverable);
  }, e.$$.update = () => {
    e.$$.dirty & /*maxWidth, rounded, fraction*/
    74 && (o != null ? n(9, d = `${s ? (o - 6) * r + 6 : o * r}px`) : n(9, d = s ? `calc((100% - 6px) * ${r} + 6px)` : `${r.toFixed(2)}%`));
  }, [
    l,
    r,
    i,
    o,
    f,
    a,
    s,
    u,
    c,
    d,
    g,
    b
  ];
}
class Dr extends me {
  constructor(t) {
    super(), ge(this, t, ns, ts, de, {
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
function ls(e) {
  return e.map(
    ((t) => (n) => t += n)(0)
  );
}
const rs = (e) => ({
  hoveringIndex: e & /*hoveringIndex*/
  8192
}), ei = (e) => ({ hoveringIndex: (
  /*hoveringIndex*/
  e[13]
) });
function ti(e, t, n) {
  const l = e.slice();
  return l[25] = t[n], l[27] = n, l;
}
function ni(e) {
  let t, n;
  return {
    c() {
      t = w("div"), n = G(
        /*title*/
        e[11]
      ), m(t, "class", "font-bold text-xs truncate text-right"), Z(t, "width", "96px");
    },
    m(l, r) {
      R(l, t, r), h(t, n);
    },
    p(l, r) {
      r & /*title*/
      2048 && ee(
        n,
        /*title*/
        l[11]
      );
    },
    d(l) {
      l && z(t);
    }
  };
}
function li(e) {
  let t, n;
  return t = new Dr({
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
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
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
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function is(e) {
  let t, n;
  return t = new Dr({
    props: {
      absolutePosition: !0,
      fraction: (
        /*scale*/
        (e[1] || fi)(
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
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*scale, value*/
      6 && (i.fraction = /*scale*/
      (l[1] || fi)(
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
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function os(e) {
  let t, n, l = (
    /*values*/
    e[3]
  ), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = ri(ti(e, l, o));
  const i = (o) => N(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      t = ce();
    },
    m(o, f) {
      for (let a = 0; a < r.length; a += 1)
        r[a] && r[a].m(o, f);
      R(o, t, f), n = !0;
    },
    p(o, f) {
      if (f & /*scale, offsets, values, colors, hoverable, hoveringIndex*/
      25674) {
        l = /*values*/
        o[3];
        let a;
        for (a = 0; a < l.length; a += 1) {
          const s = ti(o, l, a);
          r[a] ? (r[a].p(s, f), S(r[a], 1)) : (r[a] = ri(s), r[a].c(), S(r[a], 1), r[a].m(t.parentNode, t));
        }
        for (ne(), a = l.length; a < r.length; a += 1)
          i(a);
        le();
      }
    },
    i(o) {
      if (!n) {
        for (let f = 0; f < l.length; f += 1)
          S(r[f]);
        n = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let f = 0; f < r.length; f += 1)
        N(r[f]);
      n = !1;
    },
    d(o) {
      Ne(r, o), o && z(t);
    }
  };
}
function ri(e) {
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
  return t = new Dr({
    props: {
      absolutePosition: !0,
      leftFraction: (
        /*i*/
        e[27] > 0 ? (
          /*scale*/
          (e[1] || oi)(
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
        (e[1] || ai)(
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
      Y(t.$$.fragment);
    },
    m(r, i) {
      V(t, r, i), n = !0;
    },
    p(r, i) {
      e = r;
      const o = {};
      i & /*scale, offsets*/
      16386 && (o.leftFraction = /*i*/
      e[27] > 0 ? (
        /*scale*/
        (e[1] || oi)(
          /*offsets*/
          e[14][
            /*i*/
            e[27] - 1
          ]
        )
      ) : 0), i & /*scale, values*/
      10 && (o.fraction = /*scale*/
      (e[1] || ai)(
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
      n || (S(t.$$.fragment, r), n = !0);
    },
    o(r) {
      N(t.$$.fragment, r), n = !1;
    },
    d(r) {
      W(t, r);
    }
  };
}
function ii(e) {
  let t, n, l, r;
  const i = [fs, as], o = [];
  function f(a, s) {
    return (
      /*$$slots*/
      a[15].caption ? 1 : 0
    );
  }
  return n = f(e), l = o[n] = i[n](e), {
    c() {
      t = w("div"), l.c(), m(t, "class", "text-xs text-gray-800 dark:text-gray-200");
    },
    m(a, s) {
      R(a, t, s), o[n].m(t, null), r = !0;
    },
    p(a, s) {
      let u = n;
      n = f(a), n === u ? o[n].p(a, s) : (ne(), N(o[u], 1, 1, () => {
        o[u] = null;
      }), le(), l = o[n], l ? l.p(a, s) : (l = o[n] = i[n](a), l.c()), S(l, 1), l.m(t, null));
    },
    i(a) {
      r || (S(l), r = !0);
    },
    o(a) {
      N(l), r = !1;
    },
    d(a) {
      a && z(t), o[n].d();
    }
  };
}
function as(e) {
  let t;
  const n = (
    /*#slots*/
    e[17].caption
  ), l = qe(
    n,
    e,
    /*$$scope*/
    e[16],
    ei
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
      73728) && xe(
        l,
        n,
        r,
        /*$$scope*/
        r[16],
        t ? Te(
          n,
          /*$$scope*/
          r[16],
          i,
          rs
        ) : Oe(
          /*$$scope*/
          r[16]
        ),
        ei
      );
    },
    i(r) {
      t || (S(l, r), t = !0);
    },
    o(r) {
      N(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function fs(e) {
  let t = he(".3")(
    /*value*/
    e[2]
  ) + "", n;
  return {
    c() {
      n = G(t);
    },
    m(l, r) {
      R(l, n, r);
    },
    p(l, r) {
      r & /*value*/
      4 && t !== (t = he(".3")(
        /*value*/
        l[2]
      ) + "") && ee(n, t);
    },
    i: K,
    o: K,
    d(l) {
      l && z(n);
    }
  };
}
function ss(e) {
  let t, n, l, r, i, o, f, a, s = !!/*title*/
  e[11] && ni(e), u = (
    /*showFullBar*/
    e[4] && li(e)
  );
  const c = [os, is], d = [];
  function g(_, y) {
    return (
      /*values*/
      _[3] != null ? 0 : 1
    );
  }
  i = g(e), o = d[i] = c[i](e);
  let b = (
    /*showTooltip*/
    e[5] && ii(e)
  );
  return {
    c() {
      t = w("div"), s && s.c(), n = j(), l = w("div"), u && u.c(), r = j(), o.c(), f = j(), b && b.c(), m(l, "class", "parent-bar relative rounded-full overflow-hidden"), Z(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), Z(l, "height", "6px"), ie(l, "mb-1", !/*horizontalLayout*/
      e[12]), m(t, "class", "items-center gap-1"), ie(
        t,
        "flex",
        /*horizontalLayout*/
        e[12]
      );
    },
    m(_, y) {
      R(_, t, y), s && s.m(t, null), h(t, n), h(t, l), u && u.m(l, null), h(l, r), d[i].m(l, null), h(t, f), b && b.m(t, null), a = !0;
    },
    p(_, [y]) {
      /*title*/
      _[11] ? s ? s.p(_, y) : (s = ni(_), s.c(), s.m(t, n)) : s && (s.d(1), s = null), /*showFullBar*/
      _[4] ? u ? (u.p(_, y), y & /*showFullBar*/
      16 && S(u, 1)) : (u = li(_), u.c(), S(u, 1), u.m(l, r)) : u && (ne(), N(u, 1, 1, () => {
        u = null;
      }), le());
      let p = i;
      i = g(_), i === p ? d[i].p(_, y) : (ne(), N(d[p], 1, 1, () => {
        d[p] = null;
      }), le(), o = d[i], o ? o.p(_, y) : (o = d[i] = c[i](_), o.c()), S(o, 1), o.m(l, null)), (!a || y & /*width*/
      1) && Z(
        l,
        "width",
        /*width*/
        _[0] == null ? "100%" : `${/*width*/
        _[0]}px`
      ), (!a || y & /*horizontalLayout*/
      4096) && ie(l, "mb-1", !/*horizontalLayout*/
      _[12]), /*showTooltip*/
      _[5] ? b ? (b.p(_, y), y & /*showTooltip*/
      32 && S(b, 1)) : (b = ii(_), b.c(), S(b, 1), b.m(t, null)) : b && (ne(), N(b, 1, 1, () => {
        b = null;
      }), le()), (!a || y & /*horizontalLayout*/
      4096) && ie(
        t,
        "flex",
        /*horizontalLayout*/
        _[12]
      );
    },
    i(_) {
      a || (S(u), S(o), S(b), a = !0);
    },
    o(_) {
      N(u), N(o), N(b), a = !1;
    },
    d(_) {
      _ && z(t), s && s.d(), u && u.d(), d[i].d(), b && b.d();
    }
  };
}
const oi = (e) => e, ai = (e) => e, fi = (e) => e;
function us(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = Lr(l);
  let { width: o = 100 } = t, { scale: f = null } = t, { value: a = 0 } = t, { values: s = null } = t, { showFullBar: u = !1 } = t, { showTooltip: c = !0 } = t, { colors: d = Rf } = t, { colorScale: g = es } = t, { color: b = null } = t, { fullBarColor: _ = "#e5e7eb" } = t, { hoverable: y = !1 } = t, { title: p = null } = t, { horizontalLayout: k = !1 } = t, L = null, F = [];
  const x = (D) => n(13, L = -1), q = (D) => n(13, L = null), P = (D, B) => n(13, L = D), I = (D) => n(13, L = null), O = () => b, M = (D) => n(13, L = 0), E = (D) => n(13, L = null);
  return e.$$set = (D) => {
    "width" in D && n(0, o = D.width), "scale" in D && n(1, f = D.scale), "value" in D && n(2, a = D.value), "values" in D && n(3, s = D.values), "showFullBar" in D && n(4, u = D.showFullBar), "showTooltip" in D && n(5, c = D.showTooltip), "colors" in D && n(6, d = D.colors), "colorScale" in D && n(7, g = D.colorScale), "color" in D && n(8, b = D.color), "fullBarColor" in D && n(9, _ = D.fullBarColor), "hoverable" in D && n(10, y = D.hoverable), "title" in D && n(11, p = D.title), "horizontalLayout" in D && n(12, k = D.horizontalLayout), "$$scope" in D && n(16, r = D.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*values*/
    8 && (s != null ? n(14, F = ls(s)) : n(14, F = []));
  }, [
    o,
    f,
    a,
    s,
    u,
    c,
    d,
    g,
    b,
    _,
    y,
    p,
    k,
    L,
    F,
    i,
    r,
    l,
    x,
    q,
    P,
    I,
    O,
    M,
    E
  ];
}
class qr extends me {
  constructor(t) {
    super(), ge(this, t, us, ss, de, {
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
const cs = (e) => ({ hovering: e & /*hovering*/
1 }), si = (e) => ({ hovering: (
  /*hovering*/
  e[0]
) });
function ds(e) {
  let t, n, l, r;
  const i = (
    /*#slots*/
    e[4].default
  ), o = qe(
    i,
    e,
    /*$$scope*/
    e[3],
    si
  );
  return {
    c() {
      t = w("div"), o && o.c(), m(
        t,
        "class",
        /*clazz*/
        e[1]
      ), m(
        t,
        "style",
        /*style*/
        e[2]
      );
    },
    m(f, a) {
      R(f, t, a), o && o.m(t, null), n = !0, l || (r = [
        te(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[5]
        ),
        te(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[6]
        )
      ], l = !0);
    },
    p(f, [a]) {
      o && o.p && (!n || a & /*$$scope, hovering*/
      9) && xe(
        o,
        i,
        f,
        /*$$scope*/
        f[3],
        n ? Te(
          i,
          /*$$scope*/
          f[3],
          a,
          cs
        ) : Oe(
          /*$$scope*/
          f[3]
        ),
        si
      ), (!n || a & /*clazz*/
      2) && m(
        t,
        "class",
        /*clazz*/
        f[1]
      ), (!n || a & /*style*/
      4) && m(
        t,
        "style",
        /*style*/
        f[2]
      );
    },
    i(f) {
      n || (S(o, f), n = !0);
    },
    o(f) {
      N(o, f), n = !1;
    },
    d(f) {
      f && z(t), o && o.d(f), l = !1, Se(r);
    }
  };
}
function gs(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t, { hovering: i = !1 } = t, { class: o = "" } = t, { style: f = "" } = t;
  const a = () => n(0, i = !0), s = () => n(0, i = !1);
  return e.$$set = (u) => {
    "hovering" in u && n(0, i = u.hovering), "class" in u && n(1, o = u.class), "style" in u && n(2, f = u.style), "$$scope" in u && n(3, r = u.$$scope);
  }, [i, o, f, r, l, a, s];
}
class ms extends me {
  constructor(t) {
    super(), ge(this, t, gs, ds, de, { hovering: 0, class: 1, style: 2 });
  }
}
function ui(e, t, n) {
  const l = e.slice();
  return l[33] = t[n], l[35] = n, l;
}
function ci(e) {
  let t = (
    /*selectedConceptIDs*/
    e[11].size + ""
  ), n, l, r = (
    /*selectedConceptIDs*/
    e[11].size != 1 ? "s" : ""
  ), i;
  return {
    c() {
      n = G(t), l = G(" Concept"), i = G(r);
    },
    m(o, f) {
      R(o, n, f), R(o, l, f), R(o, i, f);
    },
    p(o, f) {
      f[0] & /*selectedConceptIDs*/
      2048 && t !== (t = /*selectedConceptIDs*/
      o[11].size + "") && ee(n, t), f[0] & /*selectedConceptIDs*/
      2048 && r !== (r = /*selectedConceptIDs*/
      o[11].size != 1 ? "s" : "") && ee(i, r);
    },
    d(o) {
      o && z(n), o && z(l), o && z(i);
    }
  };
}
function bs(e) {
  let t;
  return {
    c() {
      t = G("By ID");
    },
    m(n, l) {
      R(n, t, l);
    },
    d(n) {
      n && z(t);
    }
  };
}
function hs(e) {
  let t;
  return {
    c() {
      t = G("By Name");
    },
    m(n, l) {
      R(n, t, l);
    },
    d(n) {
      n && z(t);
    }
  };
}
function _s(e) {
  let t, n, l, r, i, o, f, a, s, u, c, d, g, b, _, y, p, k, L, F, x;
  function q(C, T) {
    if (
      /*hasError*/
      C[17]
    )
      return ws;
    if (
      /*hasConceptIds*/
      C[18]
    )
      return ks;
  }
  let P = q(e), I = P && P(e), O = (
    /*totalCount*/
    e[19] > 0 && di(e)
  );
  const M = [Ss, vs], E = [];
  function D(C, T) {
    return (
      /*paginatedConcepts*/
      C[16].length > 0 ? 0 : 1
    );
  }
  _ = D(e), y = E[_] = M[_](e);
  let B = (
    /*sortedConcepts*/
    e[14].length > We && _i(e)
  );
  return {
    c() {
      I && I.c(), t = j(), n = w("div"), l = w("div"), r = w("div"), i = w("input"), o = j(), f = w("div"), f.textContent = "Data Element", a = j(), s = w("div"), s.textContent = "Type", u = j(), c = w("div"), d = G(`Count
          `), O && O.c(), g = j(), b = w("div"), y.c(), p = j(), B && B.c(), k = ce(), m(i, "type", "checkbox"), m(i, "class", "form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"), i.checked = /*allFilteredSelected*/
      e[12], i.indeterminate = /*someFilteredSelected*/
      e[15], m(i, "aria-label", "Select all concepts"), m(r, "class", "flex items-center justify-center"), m(f, "class", "font-semibold text-gray-900 dark:text-gray-100"), m(s, "class", "font-semibold text-gray-900 dark:text-gray-100"), m(c, "class", "font-semibold text-gray-900 dark:text-gray-100"), m(l, "class", "grid gap-4 px-4 py-4 items-center"), Z(l, "grid-template-columns", "2rem 2fr 1fr 2fr"), m(n, "class", "bg-gray-50 dark:bg-gray-800 rounded-t-lg border border-gray-200 dark:border-gray-700"), m(b, "class", "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-b-lg overflow-y-auto custom-scrollbar min-h-0 flex-auto svelte-1xw87wt");
    },
    m(C, T) {
      I && I.m(C, T), R(C, t, T), R(C, n, T), h(n, l), h(l, r), h(r, i), h(l, o), h(l, f), h(l, a), h(l, s), h(l, u), h(l, c), h(c, d), O && O.m(c, null), R(C, g, T), R(C, b, T), E[_].m(b, null), R(C, p, T), B && B.m(C, T), R(C, k, T), L = !0, F || (x = te(
        i,
        "change",
        /*toggleSelectAllFiltered*/
        e[23]
      ), F = !0);
    },
    p(C, T) {
      P === (P = q(C)) && I ? I.p(C, T) : (I && I.d(1), I = P && P(C), I && (I.c(), I.m(t.parentNode, t))), (!L || T[0] & /*allFilteredSelected*/
      4096) && (i.checked = /*allFilteredSelected*/
      C[12]), (!L || T[0] & /*someFilteredSelected*/
      32768) && (i.indeterminate = /*someFilteredSelected*/
      C[15]), /*totalCount*/
      C[19] > 0 ? O ? O.p(C, T) : (O = di(C), O.c(), O.m(c, null)) : O && (O.d(1), O = null);
      let Q = _;
      _ = D(C), _ === Q ? E[_].p(C, T) : (ne(), N(E[Q], 1, 1, () => {
        E[Q] = null;
      }), le(), y = E[_], y ? y.p(C, T) : (y = E[_] = M[_](C), y.c()), S(y, 1), y.m(b, null)), /*sortedConcepts*/
      C[14].length > We ? B ? (B.p(C, T), T[0] & /*sortedConcepts*/
      16384 && S(B, 1)) : (B = _i(C), B.c(), S(B, 1), B.m(k.parentNode, k)) : B && (ne(), N(B, 1, 1, () => {
        B = null;
      }), le());
    },
    i(C) {
      L || (S(y), S(B), L = !0);
    },
    o(C) {
      N(y), N(B), L = !1;
    },
    d(C) {
      I && I.d(C), C && z(t), C && z(n), O && O.d(), C && z(g), C && z(b), E[_].d(), C && z(p), B && B.d(C), C && z(k), F = !1, x();
    }
  };
}
function ys(e) {
  let t, n, l, r, i, o, f, a, s, u, c, d, g;
  return f = new _e({
    props: { icon: Wa, class: "inline mr-2" }
  }), {
    c() {
      t = w("div"), n = w("div"), n.textContent = "Data elements not retrieved yet", l = j(), r = w("p"), r.textContent = "Click below to retrieve available data elements in this scope.", i = j(), o = w("button"), Y(f.$$.fragment), a = G(`
        Load Data Elements for `), s = w("span"), u = G(
        /*scopeName*/
        e[1]
      ), m(n, "class", "w-1/2 text-gray-700 dark:text-gray-200 text-lg font-semibold"), m(r, "class", "text-gray-600 dark:text-gray-400 w-1/3"), m(s, "class", "font-mono"), m(o, "class", "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md"), o.disabled = /*isLoading*/
      e[3], m(t, "class", "flex flex-col w-full h-full items-center justify-center text-center gap-4");
    },
    m(b, _) {
      R(b, t, _), h(t, n), h(t, l), h(t, r), h(t, i), h(t, o), V(f, o, null), h(o, a), h(o, s), h(s, u), c = !0, d || (g = te(o, "click", function() {
        nt(
          /*onAnalyze*/
          e[5]
        ) && e[5].apply(this, arguments);
      }), d = !0);
    },
    p(b, _) {
      e = b, (!c || _[0] & /*scopeName*/
      2) && ee(
        u,
        /*scopeName*/
        e[1]
      ), (!c || _[0] & /*isLoading*/
      8) && (o.disabled = /*isLoading*/
      e[3]);
    },
    i(b) {
      c || (S(f.$$.fragment, b), c = !0);
    },
    o(b) {
      N(f.$$.fragment, b), c = !1;
    },
    d(b) {
      b && z(t), W(f), d = !1, g();
    }
  };
}
function ps(e) {
  let t, n, l, r = (
    /*loadingMessage*/
    e[4] && yi(e)
  );
  return {
    c() {
      t = w("div"), n = w("div"), n.innerHTML = `<div class="relative"><div class="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-spin"></div> 
          
          <div class="absolute top-2 left-2 w-12 h-12 border-4 border-blue-600 dark:border-blue-400 rounded-full animate-spin" style="animation-direction: reverse; animation-duration: 1.5s;"></div> 
          
          <div class="absolute top-6 left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div></div>`, l = j(), r && r.c(), m(n, "class", "flex justify-center mb-8"), m(t, "class", "text-center py-16");
    },
    m(i, o) {
      R(i, t, o), h(t, n), h(t, l), r && r.m(t, null);
    },
    p(i, o) {
      /*loadingMessage*/
      i[4] ? r ? r.p(i, o) : (r = yi(i), r.c(), r.m(t, null)) : r && (r.d(1), r = null);
    },
    i: K,
    o: K,
    d(i) {
      i && z(t), r && r.d();
    }
  };
}
function ks(e) {
  let t, n, l, r, i, o, f, a, s, u, c, d, g;
  return {
    c() {
      t = w("div"), n = w("div"), l = w("div"), l.innerHTML = '<span class="text-yellow-600 dark:text-yellow-400">⚠️</span>', r = j(), i = w("div"), o = w("h3"), o.textContent = "Concept Names Not Found", f = j(), a = w("div"), s = w("p"), s.textContent = `Some concepts are showing as IDs instead of human-readable
                names. This might be due to vocabulary lookup issues.`, u = j(), c = w("button"), c.textContent = "🔄 Refresh Analysis", m(l, "class", "flex-shrink-0"), m(o, "class", "text-sm font-medium text-yellow-800 dark:text-yellow-200"), m(c, "class", "mt-2 bg-yellow-600 hover:bg-yellow-700 text-white text-xs px-3 py-1 rounded transition-colors duration-200"), m(a, "class", "mt-2 text-sm text-yellow-700 dark:text-yellow-300"), m(i, "class", "ml-3"), m(n, "class", "flex items-start"), m(t, "class", "bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4");
    },
    m(b, _) {
      R(b, t, _), h(t, n), h(n, l), h(n, r), h(n, i), h(i, o), h(i, f), h(i, a), h(a, s), h(a, u), h(a, c), d || (g = te(
        c,
        "click",
        /*click_handler_3*/
        e[30]
      ), d = !0);
    },
    p: K,
    d(b) {
      b && z(t), d = !1, g();
    }
  };
}
function ws(e) {
  let t, n, l, r, i, o, f, a, s, u = (
    /*scopeConcepts*/
    e[8].error + ""
  ), c, d, g, b, _;
  return {
    c() {
      t = w("div"), n = w("div"), l = w("div"), l.innerHTML = '<span class="text-red-600 dark:text-red-400">❌</span>', r = j(), i = w("div"), o = w("h3"), o.textContent = "Analysis Failed", f = j(), a = w("div"), s = w("p"), c = G(u), d = j(), g = w("button"), g.textContent = "🔄 Retry Analysis", m(l, "class", "flex-shrink-0"), m(o, "class", "text-sm font-medium text-red-800 dark:text-red-200"), m(g, "class", "mt-2 bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded transition-colors duration-200"), m(a, "class", "mt-2 text-sm text-red-700 dark:text-red-300"), m(i, "class", "ml-3"), m(n, "class", "flex items-start"), m(t, "class", "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4");
    },
    m(y, p) {
      R(y, t, p), h(t, n), h(n, l), h(n, r), h(n, i), h(i, o), h(i, f), h(i, a), h(a, s), h(s, c), h(a, d), h(a, g), b || (_ = te(
        g,
        "click",
        /*click_handler_2*/
        e[29]
      ), b = !0);
    },
    p(y, p) {
      p[0] & /*scopeConcepts*/
      256 && u !== (u = /*scopeConcepts*/
      y[8].error + "") && ee(c, u);
    },
    d(y) {
      y && z(t), b = !1, _();
    }
  };
}
function di(e) {
  let t, n, l = (
    /*totalCount*/
    e[19].toLocaleString() + ""
  ), r, i;
  return {
    c() {
      t = w("span"), n = G("(Total: "), r = G(l), i = G(")"), m(t, "class", "text-sm font-normal text-gray-600 dark:text-gray-400");
    },
    m(o, f) {
      R(o, t, f), h(t, n), h(t, r), h(t, i);
    },
    p(o, f) {
      f[0] & /*totalCount*/
      524288 && l !== (l = /*totalCount*/
      o[19].toLocaleString() + "") && ee(r, l);
    },
    d(o) {
      o && z(t);
    }
  };
}
function vs(e) {
  let t;
  return {
    c() {
      t = w("div"), t.textContent = "No concepts found for this scope.", m(t, "class", "px-6 py-8 text-center text-gray-500 dark:text-gray-400");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: K,
    i: K,
    o: K,
    d(n) {
      n && z(t);
    }
  };
}
function Ss(e) {
  let t, n, l = (
    /*paginatedConcepts*/
    e[16]
  ), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = hi(ui(e, l, o));
  const i = (o) => N(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      t = ce();
    },
    m(o, f) {
      for (let a = 0; a < r.length; a += 1)
        r[a] && r[a].m(o, f);
      R(o, t, f), n = !0;
    },
    p(o, f) {
      if (f[0] & /*queryByName, onInsert, scopeName, paginatedConcepts, totalCount, $theme, selectedConceptIDs, toggleSelectConcept*/
      18417731 | f[1] & /*hovering*/
      32) {
        l = /*paginatedConcepts*/
        o[16];
        let a;
        for (a = 0; a < l.length; a += 1) {
          const s = ui(o, l, a);
          r[a] ? (r[a].p(s, f), S(r[a], 1)) : (r[a] = hi(s), r[a].c(), S(r[a], 1), r[a].m(t.parentNode, t));
        }
        for (ne(), a = l.length; a < r.length; a += 1)
          i(a);
        le();
      }
    },
    i(o) {
      if (!n) {
        for (let f = 0; f < l.length; f += 1)
          S(r[f]);
        n = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let f = 0; f < r.length; f += 1)
        N(r[f]);
      n = !1;
    },
    d(o) {
      Ne(r, o), o && z(t);
    }
  };
}
function gi(e) {
  let t, n = (
    /*concept*/
    e[33].id + ""
  ), l, r;
  return {
    c() {
      t = w("span"), l = G(n), r = G(" "), m(t, "class", "font-mono text-gray-500 dark:text-gray-400");
    },
    m(i, o) {
      R(i, t, o), h(t, l), h(t, r);
    },
    p(i, o) {
      o[0] & /*paginatedConcepts*/
      65536 && n !== (n = /*concept*/
      i[33].id + "") && ee(l, n);
    },
    d(i) {
      i && z(t);
    }
  };
}
function mi(e) {
  let t, n, l;
  return n = new qr({
    props: {
      width: 128,
      value: (
        /*concept*/
        e[33].count / /*totalCount*/
        e[19]
      ),
      showTooltip: !1,
      showFullBar: !0,
      color: "#3b82f6",
      fullBarColor: (
        /*$theme*/
        e[20] == "dark" ? "#374151" : "#e5e7eb"
      ),
      horizontalLayout: !0
    }
  }), {
    c() {
      t = w("div"), Y(n.$$.fragment), m(t, "class", "w-32");
    },
    m(r, i) {
      R(r, t, i), V(n, t, null), l = !0;
    },
    p(r, i) {
      const o = {};
      i[0] & /*paginatedConcepts, totalCount*/
      589824 && (o.value = /*concept*/
      r[33].count / /*totalCount*/
      r[19]), i[0] & /*$theme*/
      1048576 && (o.fullBarColor = /*$theme*/
      r[20] == "dark" ? "#374151" : "#e5e7eb"), n.$set(o);
    },
    i(r) {
      l || (S(n.$$.fragment, r), l = !0);
    },
    o(r) {
      N(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && z(t), W(n);
    }
  };
}
function bi(e) {
  let t, n, l, r, i, o;
  n = new _e({
    props: { icon: Ko, class: "inline mr-2" }
  });
  function f() {
    return (
      /*click_handler_4*/
      e[32](
        /*concept*/
        e[33]
      )
    );
  }
  return {
    c() {
      t = w("button"), Y(n.$$.fragment), l = G(`
                  Query`), m(t, "class", "px-3 py-0.5 text-sm font-semibold rounded transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white");
    },
    m(a, s) {
      R(a, t, s), V(n, t, null), h(t, l), r = !0, i || (o = te(t, "click", f), i = !0);
    },
    p(a, s) {
      e = a;
    },
    i(a) {
      r || (S(n.$$.fragment, a), r = !0);
    },
    o(a) {
      N(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && z(t), W(n), i = !1, o();
    }
  };
}
function Cs(e) {
  let t, n, l, r, i, o = (
    /*concept*/
    e[33].name + ""
  ), f, a, s, u, c, d = (
    /*concept*/
    e[33].type + ""
  ), g, b, _, y, p, k, L, F = (
    /*concept*/
    e[33].count.toLocaleString() + ""
  ), x, q, P, I = (
    /*totalCount*/
    e[19].toLocaleString() + ""
  ), O, M, E, D, B, C;
  function T() {
    return (
      /*change_handler*/
      e[31](
        /*concept*/
        e[33]
      )
    );
  }
  let Q = (
    /*concept*/
    e[33].id != /*concept*/
    e[33].name && gi(e)
  ), U = (
    /*totalCount*/
    e[19] > 0 && mi(e)
  ), oe = (
    /*hovering*/
    e[36] && bi(e)
  );
  return {
    c() {
      t = w("div"), n = w("input"), r = j(), i = w("div"), Q && Q.c(), f = G(o), s = j(), u = w("div"), c = w("span"), g = G(d), _ = j(), y = w("div"), p = w("div"), U && U.c(), k = j(), L = w("div"), x = G(F), q = w("span"), P = G(" / "), O = G(I), M = j(), oe && oe.c(), E = j(), m(n, "type", "checkbox"), m(n, "class", "form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"), n.checked = l = /*selectedConceptIDs*/
      e[11].has(
        /*concept*/
        e[33].id
      ), m(n, "aria-label", "Select concept"), m(t, "class", "flex items-center justify-center"), m(i, "class", "text-gray-900 dark:text-gray-100 font-medium truncate"), m(i, "title", a = /*concept*/
      e[33].name), m(c, "class", b = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " + /*concept*/
      (e[33].type === "event" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : (
        /*concept*/
        e[33].type === "interval" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
      ))), m(u, "class", "text-gray-600 dark:text-gray-400"), m(q, "class", "opacity-80"), m(L, "class", "text-gray-600 dark:text-gray-200 font-mono text-sm"), m(p, "class", "flex flex-col space-y-2"), m(y, "class", "flex gap-2 justify-between");
    },
    m($, A) {
      R($, t, A), h(t, n), R($, r, A), R($, i, A), Q && Q.m(i, null), h(i, f), R($, s, A), R($, u, A), h(u, c), h(c, g), R($, _, A), R($, y, A), h(y, p), U && U.m(p, null), h(p, k), h(p, L), h(L, x), h(L, q), h(q, P), h(q, O), h(y, M), oe && oe.m(y, null), R($, E, A), D = !0, B || (C = te(n, "change", T), B = !0);
    },
    p($, A) {
      e = $, (!D || A[0] & /*selectedConceptIDs, paginatedConcepts*/
      67584 && l !== (l = /*selectedConceptIDs*/
      e[11].has(
        /*concept*/
        e[33].id
      ))) && (n.checked = l), /*concept*/
      e[33].id != /*concept*/
      e[33].name ? Q ? Q.p(e, A) : (Q = gi(e), Q.c(), Q.m(i, f)) : Q && (Q.d(1), Q = null), (!D || A[0] & /*paginatedConcepts*/
      65536) && o !== (o = /*concept*/
      e[33].name + "") && ee(f, o), (!D || A[0] & /*paginatedConcepts*/
      65536 && a !== (a = /*concept*/
      e[33].name)) && m(i, "title", a), (!D || A[0] & /*paginatedConcepts*/
      65536) && d !== (d = /*concept*/
      e[33].type + "") && ee(g, d), (!D || A[0] & /*paginatedConcepts*/
      65536 && b !== (b = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " + /*concept*/
      (e[33].type === "event" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : (
        /*concept*/
        e[33].type === "interval" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
      )))) && m(c, "class", b), /*totalCount*/
      e[19] > 0 ? U ? (U.p(e, A), A[0] & /*totalCount*/
      524288 && S(U, 1)) : (U = mi(e), U.c(), S(U, 1), U.m(p, k)) : U && (ne(), N(U, 1, 1, () => {
        U = null;
      }), le()), (!D || A[0] & /*paginatedConcepts*/
      65536) && F !== (F = /*concept*/
      e[33].count.toLocaleString() + "") && ee(x, F), (!D || A[0] & /*totalCount*/
      524288) && I !== (I = /*totalCount*/
      e[19].toLocaleString() + "") && ee(O, I), /*hovering*/
      e[36] ? oe ? (oe.p(e, A), A[1] & /*hovering*/
      32 && S(oe, 1)) : (oe = bi(e), oe.c(), S(oe, 1), oe.m(y, null)) : oe && (ne(), N(oe, 1, 1, () => {
        oe = null;
      }), le());
    },
    i($) {
      D || (S(U), S(oe), D = !0);
    },
    o($) {
      N(U), N(oe), D = !1;
    },
    d($) {
      $ && z(t), $ && z(r), $ && z(i), Q && Q.d(), $ && z(s), $ && z(u), $ && z(_), $ && z(y), U && U.d(), oe && oe.d(), $ && z(E), B = !1, C();
    }
  };
}
function hi(e) {
  let t, n;
  return t = new ms({
    props: {
      class: "grid gap-4 px-4 py-4 border-b border-gray-100 dark:border-gray-800 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 items-center",
      style: "grid-template-columns: 2rem 2fr 1fr 2fr;",
      $$slots: {
        default: [
          Cs,
          ({ hovering: l }) => ({ 36: l }),
          ({ hovering: l }) => [0, l ? 32 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r[0] & /*queryByName, onInsert, scopeName, paginatedConcepts, totalCount, $theme, selectedConceptIDs*/
      1640515 | r[1] & /*$$scope, hovering*/
      96 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function _i(e) {
  let t, n, l, r, i, o, f, a = (
    /*currentPage*/
    (e[10] - 1) * We + 1 + ""
  ), s, u, c = Math.min(
    /*currentPage*/
    e[10] * We,
    /*concepts*/
    e[7].length
  ) + "", d, g, b = (
    /*concepts*/
    e[7].length + ""
  ), _, y, p, k, L, F, x, q;
  return l = new _e({ props: { icon: Ya } }), k = new _e({ props: { icon: ft } }), {
    c() {
      t = w("div"), n = w("button"), Y(l.$$.fragment), i = j(), o = w("span"), f = G("Concepts "), s = G(a), u = G(" - "), d = G(c), g = G(" of "), _ = G(b), y = j(), p = w("button"), Y(k.$$.fragment), m(n, "class", "p-2 hover:opacity-50 disabled:opacity-30 disabled:cursor-not-allowed"), n.disabled = r = /*currentPage*/
      e[10] === 1, m(n, "aria-label", "Previous Page"), m(o, "class", "text-sm"), m(p, "class", "p-2 hover:opacity-50 disabled:opacity-30 disabled:cursor-not-allowed"), p.disabled = L = /*currentPage*/
      e[10] === /*totalPages*/
      e[13], m(p, "aria-label", "Next Page"), m(t, "class", "shrink-0 flex justify-end items-center px-6 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200");
    },
    m(P, I) {
      R(P, t, I), h(t, n), V(l, n, null), h(t, i), h(t, o), h(o, f), h(o, s), h(o, u), h(o, d), h(o, g), h(o, _), h(t, y), h(t, p), V(k, p, null), F = !0, x || (q = [
        te(
          n,
          "click",
          /*prevPage*/
          e[21]
        ),
        te(
          p,
          "click",
          /*nextPage*/
          e[22]
        )
      ], x = !0);
    },
    p(P, I) {
      (!F || I[0] & /*currentPage*/
      1024 && r !== (r = /*currentPage*/
      P[10] === 1)) && (n.disabled = r), (!F || I[0] & /*currentPage*/
      1024) && a !== (a = /*currentPage*/
      (P[10] - 1) * We + 1 + "") && ee(s, a), (!F || I[0] & /*currentPage, concepts*/
      1152) && c !== (c = Math.min(
        /*currentPage*/
        P[10] * We,
        /*concepts*/
        P[7].length
      ) + "") && ee(d, c), (!F || I[0] & /*concepts*/
      128) && b !== (b = /*concepts*/
      P[7].length + "") && ee(_, b), (!F || I[0] & /*currentPage, totalPages*/
      9216 && L !== (L = /*currentPage*/
      P[10] === /*totalPages*/
      P[13])) && (p.disabled = L);
    },
    i(P) {
      F || (S(l.$$.fragment, P), S(k.$$.fragment, P), F = !0);
    },
    o(P) {
      N(l.$$.fragment, P), N(k.$$.fragment, P), F = !1;
    },
    d(P) {
      P && z(t), W(l), W(k), x = !1, Se(q);
    }
  };
}
function yi(e) {
  let t, n, l, r, i, o;
  return {
    c() {
      t = w("div"), n = w("div"), l = w("div"), r = j(), i = w("span"), o = G(
        /*loadingMessage*/
        e[4]
      ), m(l, "class", "w-2 h-2 bg-blue-500 rounded-full animate-pulse"), m(i, "class", "text-sm text-blue-700 dark:text-blue-300 font-medium"), m(n, "class", "flex items-center space-x-2"), m(t, "class", "mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg");
    },
    m(f, a) {
      R(f, t, a), h(t, n), h(n, l), h(n, r), h(n, i), h(i, o);
    },
    p(f, a) {
      a[0] & /*loadingMessage*/
      16 && ee(
        o,
        /*loadingMessage*/
        f[4]
      );
    },
    d(f) {
      f && z(t);
    }
  };
}
function Ms(e) {
  let t, n, l, r, i, o, f, a, s, u, c, d, g, b, _, y, p, k, L, F;
  o = new _e({
    props: { icon: Ko, class: "inline mr-2" }
  });
  let x = (
    /*selectedConceptIDs*/
    e[11].size > 0 && ci(e)
  );
  function q(D, B) {
    return (
      /*queryByName*/
      D[0] ? hs : bs
    );
  }
  let P = q(e), I = P(e);
  const O = [ps, ys, _s], M = [];
  function E(D, B) {
    return (
      /*isLoading*/
      D[3] ? 0 : (
        /*isAnalyzed*/
        D[2] ? 2 : 1
      )
    );
  }
  return y = E(e), p = M[y] = O[y](e), {
    c() {
      t = w("div"), n = w("h2"), l = G(
        /*scopeName*/
        e[1]
      ), r = j(), i = w("button"), Y(o.$$.fragment), f = G(`
    Query `), x && x.c(), s = j(), u = w("button"), I.c(), d = j(), g = w("input"), b = j(), _ = w("div"), p.c(), m(n, "class", "text-2xl font-bold text-gray-900 dark:text-gray-100 flex-auto"), m(i, "class", "px-3 py-1.5 font-semibold rounded transition-colors duration-200 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-200/50 disabled:dark:bg-gray-700/50 text-white disabled:text-gray-500/50"), i.disabled = a = /*selectedConceptIDs*/
      e[11].size == 0, u.disabled = c = /*selectedConceptIDs*/
      e[11].size == 0, m(u, "class", "px-3 py-1.5 font-semibold rounded transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), m(u, "title", "Change whether to add to query by concept name or ID"), m(g, "type", "search"), m(g, "class", "shrink-1 ml-4 px-3 py-1.5 rounded overflow-hidden focus:bg-white bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline focus:outline-blue-500 w-64 transition-colors duration-200"), m(g, "placeholder", "Filter concepts..."), m(g, "autocomplete", "off"), m(t, "class", "pb-6 shrink-0 flex items-center justify-between gap-2"), m(_, "class", "w-full flex-auto flex flex-col h-0");
    },
    m(D, B) {
      R(D, t, B), h(t, n), h(n, l), h(t, r), h(t, i), V(o, i, null), h(i, f), x && x.m(i, null), h(t, s), h(t, u), I.m(u, null), h(t, d), h(t, g), It(
        g,
        /*search*/
        e[9]
      ), R(D, b, B), R(D, _, B), M[y].m(_, null), k = !0, L || (F = [
        te(
          i,
          "click",
          /*click_handler*/
          e[26]
        ),
        te(
          u,
          "click",
          /*click_handler_1*/
          e[27]
        ),
        te(
          g,
          "input",
          /*input_input_handler*/
          e[28]
        )
      ], L = !0);
    },
    p(D, B) {
      (!k || B[0] & /*scopeName*/
      2) && ee(
        l,
        /*scopeName*/
        D[1]
      ), /*selectedConceptIDs*/
      D[11].size > 0 ? x ? x.p(D, B) : (x = ci(D), x.c(), x.m(i, null)) : x && (x.d(1), x = null), (!k || B[0] & /*selectedConceptIDs*/
      2048 && a !== (a = /*selectedConceptIDs*/
      D[11].size == 0)) && (i.disabled = a), P !== (P = q(D)) && (I.d(1), I = P(D), I && (I.c(), I.m(u, null))), (!k || B[0] & /*selectedConceptIDs*/
      2048 && c !== (c = /*selectedConceptIDs*/
      D[11].size == 0)) && (u.disabled = c), B[0] & /*search*/
      512 && g.value !== /*search*/
      D[9] && It(
        g,
        /*search*/
        D[9]
      );
      let C = y;
      y = E(D), y === C ? M[y].p(D, B) : (ne(), N(M[C], 1, 1, () => {
        M[C] = null;
      }), le(), p = M[y], p ? p.p(D, B) : (p = M[y] = O[y](D), p.c()), S(p, 1), p.m(_, null));
    },
    i(D) {
      k || (S(o.$$.fragment, D), S(p), k = !0);
    },
    o(D) {
      N(o.$$.fragment, D), N(p), k = !1;
    },
    d(D) {
      D && z(t), W(o), x && x.d(), I.d(), D && z(b), D && z(_), M[y].d(), L = !1, Se(F);
    }
  };
}
const We = 50;
function zs(e, t, n) {
  let l, r, i, o, f, a, s, u, c, d;
  H(e, Il, (A) => n(20, d = A));
  let { scopeName: g = "" } = t, { isAnalyzed: b = !1 } = t, { isLoading: _ = !1 } = t, { loadingMessage: y = "" } = t, { onAnalyze: p = () => {
  } } = t, { onInsert: k = () => {
  } } = t, { concepts: L = [] } = t, { scopeConcepts: F = {} } = t, { queryByName: x = !1 } = t, q = "", P = 1;
  function I() {
    P > 1 && n(10, P -= 1);
  }
  function O() {
    P < a && n(10, P += 1);
  }
  let M = /* @__PURE__ */ new Set();
  function E() {
    u ? (o.forEach((A) => M.delete(A.id)), n(11, M = new Set(M))) : (o.forEach((A) => M.add(A.id)), n(11, M = new Set(M)));
  }
  function D(A) {
    M.has(A) ? M.delete(A) : M.add(A), n(11, M = new Set(M));
  }
  const B = () => {
    if (x) {
      let A = L.filter((re) => M.has(re.id)).map((re) => "'" + re.name + "'");
      k(g, `name in (${A.join(", ")})`);
    } else {
      let A = L.filter((re) => M.has(re.id)).map((re) => `${re.id}`);
      k(g, `id in (${A.join(", ")})`);
    }
  }, C = () => n(0, x = !x);
  function T() {
    q = this.value, n(9, q);
  }
  const Q = () => p(), U = () => p(), oe = (A) => D(A.id), $ = (A) => {
    x ? k(g, `name = '${A.name}'`) : k(g, `id = ${A.id}`);
  };
  return e.$$set = (A) => {
    "scopeName" in A && n(1, g = A.scopeName), "isAnalyzed" in A && n(2, b = A.isAnalyzed), "isLoading" in A && n(3, _ = A.isLoading), "loadingMessage" in A && n(4, y = A.loadingMessage), "onAnalyze" in A && n(5, p = A.onAnalyze), "onInsert" in A && n(6, k = A.onInsert), "concepts" in A && n(7, L = A.concepts), "scopeConcepts" in A && n(8, F = A.scopeConcepts), "queryByName" in A && n(0, x = A.queryByName);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*concepts*/
    128 && n(19, l = L.reduce((A, re) => A + re.count, 0)), e.$$.dirty[0] & /*concepts*/
    128 && n(18, r = L.some((A) => A.name.startsWith("Concept "))), e.$$.dirty[0] & /*scopeConcepts*/
    256 && n(17, i = F && F.error), e.$$.dirty[0] & /*search, concepts*/
    640 && n(25, o = q.trim() ? L.filter((A) => (A.name ?? "").toLocaleLowerCase().includes(q.trim().toLocaleLowerCase()) || `${A.id ?? ""}`.toLocaleLowerCase().includes(q.trim().toLocaleLowerCase())) : L), e.$$.dirty[0] & /*filteredConcepts*/
    33554432 && n(14, f = [...o].sort((A, re) => re.count - A.count)), e.$$.dirty[0] & /*sortedConcepts*/
    16384 && n(13, a = Math.max(1, Math.ceil(f.length / We))), e.$$.dirty[0] & /*currentPage, totalPages*/
    9216 && P > a && n(10, P = 1), e.$$.dirty[0] & /*sortedConcepts, currentPage*/
    17408 && n(16, s = f.slice((P - 1) * We, P * We)), e.$$.dirty[0] & /*filteredConcepts, selectedConceptIDs*/
    33556480 && n(12, u = o.length > 0 && o.every((A) => M.has(A.id))), e.$$.dirty[0] & /*filteredConcepts, selectedConceptIDs, allFilteredSelected*/
    33560576 && n(15, c = o.some((A) => M.has(A.id)) && !u);
  }, [
    x,
    g,
    b,
    _,
    y,
    p,
    k,
    L,
    F,
    q,
    P,
    M,
    u,
    a,
    f,
    c,
    s,
    i,
    r,
    l,
    d,
    I,
    O,
    E,
    D,
    o,
    B,
    C,
    T,
    Q,
    U,
    oe,
    $
  ];
}
class Ls extends me {
  constructor(t) {
    super(), ge(
      this,
      t,
      zs,
      Ms,
      de,
      {
        scopeName: 1,
        isAnalyzed: 2,
        isLoading: 3,
        loadingMessage: 4,
        onAnalyze: 5,
        onInsert: 6,
        concepts: 7,
        scopeConcepts: 8,
        queryByName: 0
      },
      null,
      [-1, -1]
    );
  }
}
function pi(e, t, n) {
  const l = e.slice();
  return l[13] = t[n], l;
}
function Rs(e) {
  let t;
  return {
    c() {
      t = w("div"), t.textContent = "No scopes available...", m(t, "class", "text-gray-500 dark:text-gray-400 text-sm");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: K,
    d(n) {
      n && z(t);
    }
  };
}
function Ns(e) {
  let t, n = (
    /*scopes*/
    e[2]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = ki(pi(e, n, r));
  return {
    c() {
      t = w("div");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      m(t, "class", "space-y-1 pb-4");
    },
    m(r, i) {
      R(r, t, i);
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(t, null);
    },
    p(r, i) {
      if (i & /*selectedScope, scopes, onScopeSelect*/
      69) {
        n = /*scopes*/
        r[2];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const f = pi(r, n, o);
          l[o] ? l[o].p(f, i) : (l[o] = ki(f), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(r) {
      r && z(t), Ne(l, r);
    }
  };
}
function ki(e) {
  let t, n = (
    /*scope*/
    e[13] + ""
  ), l, r, i, o, f;
  function a() {
    return (
      /*click_handler*/
      e[11](
        /*scope*/
        e[13]
      )
    );
  }
  return {
    c() {
      t = w("button"), l = G(n), r = j(), m(t, "class", i = "w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 " + /*selectedScope*/
      (e[0] === /*scope*/
      e[13] ? "bg-blue-100 dark:bg-blue-500 text-blue-700 dark:text-white font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"));
    },
    m(s, u) {
      R(s, t, u), h(t, l), h(t, r), o || (f = te(t, "click", a), o = !0);
    },
    p(s, u) {
      e = s, u & /*scopes*/
      4 && n !== (n = /*scope*/
      e[13] + "") && ee(l, n), u & /*selectedScope, scopes*/
      5 && i !== (i = "w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 " + /*selectedScope*/
      (e[0] === /*scope*/
      e[13] ? "bg-blue-100 dark:bg-blue-500 text-blue-700 dark:text-white font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600")) && m(t, "class", i);
    },
    d(s) {
      s && z(t), o = !1, f();
    }
  };
}
function As(e) {
  let t;
  return {
    c() {
      t = w("div"), t.innerHTML = '<div class="w-1/2 text-gray-600 dark:text-gray-400 text-center">Select a scope from the sidebar to explore available data elements.</div>', m(t, "class", "flex w-full h-full items-center justify-center");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: K,
    i: K,
    o: K,
    d(n) {
      n && z(t);
    }
  };
}
function Es(e) {
  let t, n;
  return t = new Ls({
    props: {
      scopeName: (
        /*selectedScope*/
        e[0]
      ),
      isAnalyzed: (
        /*isAnalyzed*/
        e[9]
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
        e[10]
      ),
      scopeConcepts: (
        /*scopeConcepts*/
        e[3]
      ),
      onInsert: (
        /*onInsert*/
        e[8]
      ),
      onAnalyze: (
        /*func*/
        e[12]
      )
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*selectedScope*/
      1 && (i.scopeName = /*selectedScope*/
      l[0]), r & /*isAnalyzed*/
      512 && (i.isAnalyzed = /*isAnalyzed*/
      l[9]), r & /*isLoading*/
      16 && (i.isLoading = /*isLoading*/
      l[4]), r & /*loadingMessage*/
      32 && (i.loadingMessage = /*loadingMessage*/
      l[5]), r & /*concepts*/
      1024 && (i.concepts = /*concepts*/
      l[10]), r & /*scopeConcepts*/
      8 && (i.scopeConcepts = /*scopeConcepts*/
      l[3]), r & /*onInsert*/
      256 && (i.onInsert = /*onInsert*/
      l[8]), r & /*onAnalyzeScope, selectedScope*/
      129 && (i.onAnalyze = /*func*/
      l[12]), t.$set(i);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function Ds(e) {
  let t, n, l, r, i, o, f, a, s, u, c;
  function d(k, L) {
    return (
      /*scopes*/
      k[2].length > 0 ? Ns : Rs
    );
  }
  let g = d(e), b = g(e);
  const _ = [Es, As], y = [];
  function p(k, L) {
    return (
      /*selectedScope*/
      k[0] ? 0 : 1
    );
  }
  return a = p(e), s = y[a] = _[a](e), {
    c() {
      t = w("div"), n = w("div"), l = w("h3"), l.textContent = "Scopes", r = j(), i = w("div"), b.c(), o = j(), f = w("div"), s.c(), m(l, "class", "px-4 py-3 font-semibold uppercase text-gray-900 dark:text-gray-100 shrink-0"), m(i, "class", "px-4 min-h-0 overflow-auto"), m(n, "class", "w-1/4 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex-shrink-0 h-full flex flex-col"), m(f, "class", "flex-auto bg-white dark:bg-gray-900 p-6 flex flex-col h-full"), m(t, "class", u = "flex h-full " + /*width*/
      e[1] + " overflow-hidden");
    },
    m(k, L) {
      R(k, t, L), h(t, n), h(n, l), h(n, r), h(n, i), b.m(i, null), h(t, o), h(t, f), y[a].m(f, null), c = !0;
    },
    p(k, [L]) {
      g === (g = d(k)) && b ? b.p(k, L) : (b.d(1), b = g(k), b && (b.c(), b.m(i, null)));
      let F = a;
      a = p(k), a === F ? y[a].p(k, L) : (ne(), N(y[F], 1, 1, () => {
        y[F] = null;
      }), le(), s = y[a], s ? s.p(k, L) : (s = y[a] = _[a](k), s.c()), S(s, 1), s.m(f, null)), (!c || L & /*width*/
      2 && u !== (u = "flex h-full " + /*width*/
      k[1] + " overflow-hidden")) && m(t, "class", u);
    },
    i(k) {
      c || (S(s), c = !0);
    },
    o(k) {
      N(s), c = !1;
    },
    d(k) {
      k && z(t), b.d(), y[a].d();
    }
  };
}
function qs(e, t, n) {
  let l, r, { width: i = "w-full" } = t, { scopes: o = [] } = t, { selectedScope: f = "" } = t, { scopeConcepts: a = {} } = t, { isLoading: s = !1 } = t, { loadingMessage: u = "" } = t, { onScopeSelect: c = () => {
  } } = t, { onAnalyzeScope: d = () => {
  } } = t, { onInsert: g = () => {
  } } = t;
  const b = (y) => {
    n(0, f = y), c(y);
  }, _ = () => d(f);
  return e.$$set = (y) => {
    "width" in y && n(1, i = y.width), "scopes" in y && n(2, o = y.scopes), "selectedScope" in y && n(0, f = y.selectedScope), "scopeConcepts" in y && n(3, a = y.scopeConcepts), "isLoading" in y && n(4, s = y.isLoading), "loadingMessage" in y && n(5, u = y.loadingMessage), "onScopeSelect" in y && n(6, c = y.onScopeSelect), "onAnalyzeScope" in y && n(7, d = y.onAnalyzeScope), "onInsert" in y && n(8, g = y.onInsert);
  }, e.$$.update = () => {
    e.$$.dirty & /*selectedScope, scopes, onScopeSelect*/
    69 && !f && o.length > 0 && (n(0, f = o[0]), c(f)), e.$$.dirty & /*selectedScope, scopeConcepts*/
    9 && n(9, l = f && a && a.scope_name === f), e.$$.dirty & /*isAnalyzed, scopeConcepts*/
    520 && n(10, r = l && a.concepts ? a.concepts : []);
  }, [
    f,
    i,
    o,
    a,
    s,
    u,
    c,
    d,
    g,
    l,
    r,
    b,
    _
  ];
}
class Ts extends me {
  constructor(t) {
    super(), ge(this, t, qs, Ds, de, {
      width: 1,
      scopes: 2,
      selectedScope: 0,
      scopeConcepts: 3,
      isLoading: 4,
      loadingMessage: 5,
      onScopeSelect: 6,
      onAnalyzeScope: 7,
      onInsert: 8
    });
  }
}
const wi = [
  "now",
  "value",
  "mintime",
  "maxtime",
  "indexvalue"
];
function xs(e, t, n) {
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
    const i = r.toLowerCase(), o = e.filter((s) => s.toLowerCase().startsWith(i)).sort((s, u) => s.length !== u.length ? s.length - u.length : s.localeCompare(u)).slice(0, 10), f = e.filter((s) => {
      const u = s.toLowerCase();
      return u.includes(i) && !u.startsWith(i);
    }).sort((s, u) => {
      const c = s.toLowerCase().indexOf(i), d = u.toLowerCase().indexOf(i);
      return c !== d ? c - d : s.length !== u.length ? s.length - u.length : s.localeCompare(u);
    }).slice(0, 5), a = [...o, ...f].map((s) => ({
      value: s,
      type: "data_item"
    }));
    return console.log("🔍 getAutocompleteOptions - Data field matches:", a), a;
  }
  if (l = n.match(/#([^\s]*)/), console.log("🔍 getAutocompleteOptions - Constant regex result:", l), l) {
    console.log("🔍 getAutocompleteOptions - Processing constants");
    const r = l[1] || "";
    console.log(
      "🔍 getAutocompleteOptions - Constant search query:",
      r
    );
    const i = r.toLowerCase(), o = wi.filter((s) => s.toLowerCase().startsWith(i)).sort((s, u) => s.length - u.length), f = wi.filter((s) => {
      const u = s.toLowerCase();
      return u.includes(i) && !u.startsWith(i);
    }).sort((s, u) => s.length - u.length), a = [...o, ...f].map((s) => ({
      value: s,
      type: "constant"
    }));
    return console.log("🔍 getAutocompleteOptions - Constant matches:", a), a;
  }
  return console.log("🔍 getAutocompleteOptions - No matches found"), [];
}
function Os(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ea = { exports: {} };
(function(e, t) {
  (function() {
    function n(i, o, f) {
      var a = null, s = null, u = null, c = null;
      if (f = f || "", !o.length)
        return f || "";
      if (i.some(function(g) {
        g.name;
        var b = g.match instanceof RegExp, _ = b ? g.match : g.match[0], y = b ? null : g.match[1] || null, p = b ? null : g.match[2] || null;
        return a = o.match(_), s = a ? g.name : null, u = y, c = p, !!a;
      }), a) {
        var d = '<span class="' + s + '">' + a[1] + "</span>";
        return u && (d = u + d), c && (d = d + c), n(i, o.slice(a[0].length), f + d);
      } else
        return n(i, o.slice(1), f + o[0]);
    }
    function l(i) {
      var o = i.replace(/^\n+|\n+\s+$/g, ""), f = o.match(/^\s+/);
      if (!f)
        return o;
      var a = o.split(`
`), s = a.map(function(u, c) {
        return !u || /^\s+$/.test(u) ? u : u.replace(f[0], "");
      }).join(`
`);
      return `
` + s;
    }
    function r(i) {
      var o = i.selector || "pre code", f = i.postProcess || function(s) {
        return s;
      }, a = i.preProcess || function(s) {
        return s;
      };
      Array.prototype.slice.call(document.querySelectorAll(o)).forEach(function(s) {
        var u = (typeof i.patterns == "function" ? i.patterns(s) : i.patterns) || {}, c = s.innerText, d = l(c), g = f(n(u, a(d)));
        i.linenums && (g = g.split(`
`).map(function(b, _) {
          if (!_)
            return b;
          var y = _ - 1 + "";
          return y.length < 2 && (y = "0" + y), '<span class="linenum">' + y + "</span> " + b;
        }).join(`
`)), s.innerHTML = g;
      });
    }
    e.exports = r;
  })();
})(ea);
var Ps = ea.exports;
const ta = /* @__PURE__ */ Os(Ps), na = [
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
function la(e) {
  return e = e.replaceAll(/<([A-z]+?)>/g, "####TOKEN####$1####ENDTOKEN####"), e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function vi(e, t, n) {
  const l = e.slice();
  return l[33] = t[n], l[35] = n, l;
}
function Si(e) {
  let t, n = (
    /*autocompleteOptions*/
    e[6]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Ci(vi(e, n, r));
  return {
    c() {
      t = w("div");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      m(t, "class", "absolute z-30 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-xl max-h-48 overflow-y-auto");
    },
    m(r, i) {
      R(r, t, i);
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(t, null);
      e[23](t);
    },
    p(r, i) {
      if (i[0] & /*selectedIndex, selectAutocompleteOption, autocompleteOptions*/
      4288) {
        n = /*autocompleteOptions*/
        r[6];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const f = vi(r, n, o);
          l[o] ? l[o].p(f, i) : (l[o] = Ci(f), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(r) {
      r && z(t), Ne(l, r), e[23](null);
    }
  };
}
function Ci(e) {
  let t, n, l, r = (
    /*option*/
    e[33].value + ""
  ), i, o, f, a = (
    /*option*/
    e[33].type === "data_item" ? "field" : "const"
  ), s, u, c, d, g;
  function b() {
    return (
      /*click_handler*/
      e[20](
        /*option*/
        e[33]
      )
    );
  }
  function _(...p) {
    return (
      /*keydown_handler*/
      e[21](
        /*option*/
        e[33],
        ...p
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
      t = w("div"), n = w("div"), l = w("span"), i = G(r), o = j(), f = w("span"), s = G(a), u = j(), m(l, "class", "font-mono text-sm"), m(f, "class", "text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"), m(n, "class", "flex items-center justify-between"), m(t, "class", c = "px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors " + /*index*/
      (e[35] === /*selectedIndex*/
      e[7] ? "bg-blue-600 text-white" : "text-gray-700 dark:text-gray-200")), m(t, "role", "button"), m(t, "tabindex", "0");
    },
    m(p, k) {
      R(p, t, k), h(t, n), h(n, l), h(l, i), h(n, o), h(n, f), h(f, s), h(t, u), d || (g = [
        te(t, "click", b),
        te(t, "keydown", _),
        te(t, "mouseenter", y)
      ], d = !0);
    },
    p(p, k) {
      e = p, k[0] & /*autocompleteOptions*/
      64 && r !== (r = /*option*/
      e[33].value + "") && ee(i, r), k[0] & /*autocompleteOptions*/
      64 && a !== (a = /*option*/
      e[33].type === "data_item" ? "field" : "const") && ee(s, a), k[0] & /*selectedIndex*/
      128 && c !== (c = "px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors " + /*index*/
      (e[35] === /*selectedIndex*/
      e[7] ? "bg-blue-600 text-white" : "text-gray-700 dark:text-gray-200")) && m(t, "class", c);
    },
    d(p) {
      p && z(t), d = !1, Se(g);
    }
  };
}
function js(e) {
  let t, n, l, r, i, o, f, a, s, u, c, d, g, b, _, y, p, k, L, F, x, q = (
    /*showAutocomplete*/
    e[8] && /*autocompleteOptions*/
    e[6].length > 0 && Si(e)
  );
  return d = new _e({
    props: { icon: Vo, class: "inline mr-2" }
  }), y = new _e({
    props: { icon: Wo, class: "inline mr-2" }
  }), {
    c() {
      t = w("div"), n = w("div"), n.innerHTML = '<h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 pr-2">TempoQL Query</h3>', l = j(), r = w("div"), i = w("textarea"), o = j(), f = w("div"), a = j(), q && q.c(), s = j(), u = w("div"), c = w("button"), Y(d.$$.fragment), g = G(`
        History`), b = j(), _ = w("button"), Y(y.$$.fragment), p = G(`
        Run Query`), m(n, "class", "flex items-center mb-4 gap-2 shrink-0"), m(i, "id", "text-input"), m(i, "class", "w-full h-full p-4 pb-16 bg-transparent font-mono text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none overflow-hidden min-h-[120px] relative z-20 svelte-1w5ogy4"), m(i, "placeholder", "// Write your Tempo-QL query here... (Ctrl+Z to undo, Ctrl+Y to redo)"), m(i, "rows", "1"), Z(i, "color", "transparent"), Z(i, "caret-color", "currentColor"), m(f, "class", "absolute top-0 left-0 w-full h-full p-4 pb-16 font-mono text-sm pointer-events-none bg-transparent z-10 text-wrap whitespace-pre-wrap break-words text-gray-900 dark:text-gray-100 svelte-1w5ogy4"), m(
        f,
        "id",
        /*highlightedViewID*/
        e[9]
      ), m(c, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), m(c, "title", "View query history"), m(_, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white"), _.disabled = k = !/*value*/
      e[0].trim(), ie(_, "opacity-50", !/*value*/
      e[0].trim()), ie(_, "cursor-not-allowed", !/*value*/
      e[0].trim()), m(u, "class", "absolute right-0 bottom-0 mr-4 mb-4 flex justify-end items-center gap-2 z-50"), m(r, "class", "relative flex-auto min-h-0"), m(t, "class", "flex flex-col w-full h-full p-4 mb-2");
    },
    m(P, I) {
      R(P, t, I), h(t, n), h(t, l), h(t, r), h(r, i), e[17](i), It(
        i,
        /*value*/
        e[0]
      ), h(r, o), h(r, f), e[19](f), h(r, a), q && q.m(r, null), h(r, s), h(r, u), h(u, c), V(d, c, null), h(c, g), h(u, b), h(u, _), V(y, _, null), h(_, p), L = !0, F || (x = [
        te(
          i,
          "input",
          /*textarea_1_input_handler*/
          e[18]
        ),
        te(
          i,
          "input",
          /*handleInput*/
          e[10]
        ),
        te(
          i,
          "keydown",
          /*handleKeydown*/
          e[11]
        ),
        te(c, "click", function() {
          nt(
            /*onHistoryClick*/
            e[2]
          ) && e[2].apply(this, arguments);
        }),
        te(_, "click", function() {
          nt(
            /*onRun*/
            e[1]
          ) && e[1].apply(this, arguments);
        })
      ], F = !0);
    },
    p(P, I) {
      e = P, I[0] & /*value*/
      1 && It(
        i,
        /*value*/
        e[0]
      ), /*showAutocomplete*/
      e[8] && /*autocompleteOptions*/
      e[6].length > 0 ? q ? q.p(e, I) : (q = Si(e), q.c(), q.m(r, s)) : q && (q.d(1), q = null), (!L || I[0] & /*value*/
      1 && k !== (k = !/*value*/
      e[0].trim())) && (_.disabled = k), (!L || I[0] & /*value*/
      1) && ie(_, "opacity-50", !/*value*/
      e[0].trim()), (!L || I[0] & /*value*/
      1) && ie(_, "cursor-not-allowed", !/*value*/
      e[0].trim());
    },
    i(P) {
      L || (S(d.$$.fragment, P), S(y.$$.fragment, P), L = !0);
    },
    o(P) {
      N(d.$$.fragment, P), N(y.$$.fragment, P), L = !1;
    },
    d(P) {
      P && z(t), e[17](null), e[19](null), q && q.d(), W(d), W(y), F = !1, Se(x);
    }
  };
}
function Is(e, t, n) {
  let { value: l = "" } = t, { onInput: r = () => {
  } } = t, { width: i = "w-full max-w-2xl" } = t, { dataFields: o = [] } = t, { onRun: f = () => {
  } } = t, { onExplain: a = () => {
  } } = t, { onHistoryClick: s = () => {
  } } = t, u, c, d, g = [], b = 0, _ = !1, y = 0, p = "highlightView-" + new Array(20).fill(0).map(() => Math.floor(Math.random() * 10)).join(""), k = [], L = -1, F = !1;
  st(() => {
    q(""), document.addEventListener("click", x);
  }), Ea(() => {
    document.removeEventListener("click", x);
  });
  function x(A) {
    if (c && u) {
      const re = A.target, J = c.contains(re), se = u.contains(re);
      (!J || se && _) && (console.log("🖱️ Click detected - closing autocomplete"), n(8, _ = !1));
    }
  }
  function q(A) {
    if (F) {
      F = !1;
      return;
    }
    k = k.slice(0, L + 1), k.push(A), L = k.length - 1, k.length > 50 && (k = k.slice(-50), L = k.length - 1), console.log("📝 Added to history:", A, "Index:", L);
  }
  function P() {
    if (L > 0) {
      F = !0, L--;
      const A = k[L];
      console.log("↶ Undo to:", A), n(0, l = A), r(A), u && (n(3, u.value = A, u), u.focus());
    }
  }
  function I() {
    if (L < k.length - 1) {
      F = !0, L++;
      const A = k[L];
      console.log("↷ Redo to:", A), n(0, l = A), r(A), u && (n(3, u.value = A, u), u.focus());
    }
  }
  function O(A) {
    const re = A.target, J = re.value;
    console.log("🔍 handleInput - New value:", J), console.log("🔍 handleInput - Cursor position:", re.selectionStart), q(J), n(0, l = J), r(J), y = re.selectionStart || 0, console.log("🔍 handleInput - Updated cursor position:", y), M(J, y);
  }
  function M(A, re) {
    console.log("🔍 updateAutocompleteOptions - Text:", A), console.log("🔍 updateAutocompleteOptions - Position:", re);
    const J = A.substring(0, re), se = A.substring(re);
    console.log("🔍 updateAutocompleteOptions - Before cursor:", J), console.log("🔍 updateAutocompleteOptions - After cursor:", se);
    const pe = J.match(/([^\s]*)$/), Ce = pe ? pe[1] : "";
    console.log("🔍 updateAutocompleteOptions - Current word:", Ce), console.log("🔍 updateAutocompleteOptions - Data fields available:", o), Ce.length > 0 ? (n(6, g = xs(o, Ce, J)), console.log("🔍 updateAutocompleteOptions - Autocomplete options:", g), n(8, _ = g.length > 0), n(7, b = 0), console.log("🔍 updateAutocompleteOptions - Show autocomplete:", _)) : (n(8, _ = !1), console.log("🔍 updateAutocompleteOptions - No current word, hiding autocomplete"));
  }
  function E(A) {
    if (console.log("🔍 handleKeydown - Key pressed:", A.key), console.log("🔍 handleKeydown - Show autocomplete:", _), console.log("🔍 handleKeydown - Options count:", g.length), A.ctrlKey || A.metaKey) {
      if (A.key === "z" && !A.shiftKey) {
        A.preventDefault(), console.log("⌨️ Ctrl+Z pressed - Undo"), P();
        return;
      } else if (A.key === "y" || A.key === "z" && A.shiftKey) {
        A.preventDefault(), console.log("⌨️ Ctrl+Y or Ctrl+Shift+Z pressed - Redo"), I();
        return;
      }
    }
    if (!_) {
      console.log("🔍 handleKeydown - Autocomplete not shown, ignoring key");
      return;
    }
    switch (A.key) {
      case "ArrowDown":
        A.preventDefault(), n(7, b = (b + 1) % g.length), console.log("🔍 handleKeydown - ArrowDown, new selectedIndex:", b);
        break;
      case "ArrowUp":
        A.preventDefault(), n(7, b = b === 0 ? g.length - 1 : b - 1), console.log("🔍 handleKeydown - ArrowUp, new selectedIndex:", b);
        break;
      case "Enter":
        _ && (A.preventDefault(), console.log("🔍 handleKeydown - Enter pressed, selecting option:", g[b]), D(g[b]));
        break;
      case "Escape":
        n(8, _ = !1), console.log("🔍 handleKeydown - Escape pressed, hiding autocomplete");
        break;
      case "Tab":
        _ && (A.preventDefault(), console.log("🔍 handleKeydown - Tab pressed, selecting option:", g[b]), D(g[b]));
        break;
    }
  }
  function D(A) {
    console.log("🔍 selectAutocompleteOption - Selected option:", A), console.log("🔍 selectAutocompleteOption - Current value:", l), console.log("🔍 selectAutocompleteOption - Cursor position:", y);
    const re = l.substring(0, y), J = l.substring(y);
    console.log("🔍 selectAutocompleteOption - Before cursor:", re), console.log("🔍 selectAutocompleteOption - After cursor:", J);
    const se = re.match(/([^\s]*)$/), pe = se ? se[1] : "", Ce = re.length - pe.length;
    console.log("🔍 selectAutocompleteOption - Current word:", pe), console.log("🔍 selectAutocompleteOption - Word start position:", Ce);
    let we;
    if (A.type === "data_item")
      if (pe.includes("{")) {
        const Re = re.match(/\{([^}]*?)(?:,\s*([^},]*))?$/);
        Re ? Re[2] ? we = re.substring(0, Re.index + Re[1].length + 2) + A.value : we = re.substring(0, Re.index + 1) + A.value : we = re + A.value;
      } else
        we = re + "{" + A.value;
    else
      we = re.substring(0, Ce) + "#" + A.value;
    console.log("🔍 selectAutocompleteOption - Replacement:", we);
    const Ae = we + J;
    console.log("🔍 selectAutocompleteOption - New value:", Ae), n(0, l = Ae), r(Ae);
    const Pe = we.length;
    console.log("🔍 selectAutocompleteOption - New cursor position:", Pe), setTimeout(
      () => {
        u && (u.setSelectionRange(Pe, Pe), u.focus(), console.log("🔍 selectAutocompleteOption - Cursor position set"));
      },
      0
    ), n(8, _ = !1), console.log("🔍 selectAutocompleteOption - Autocomplete hidden");
  }
  function B(A) {
    Me[A ? "unshift" : "push"](() => {
      u = A, n(3, u), n(0, l);
    });
  }
  function C() {
    l = this.value, n(0, l);
  }
  function T(A) {
    Me[A ? "unshift" : "push"](() => {
      d = A, n(4, d), n(0, l), n(9, p);
    });
  }
  const Q = (A) => D(A), U = (A, re) => {
    (re.key === "Enter" || re.key === " ") && (re.preventDefault(), D(A));
  }, oe = (A) => n(7, b = A);
  function $(A) {
    Me[A ? "unshift" : "push"](() => {
      c = A, n(5, c);
    });
  }
  return e.$$set = (A) => {
    "value" in A && n(0, l = A.value), "onInput" in A && n(13, r = A.onInput), "width" in A && n(14, i = A.width), "dataFields" in A && n(15, o = A.dataFields), "onRun" in A && n(1, f = A.onRun), "onExplain" in A && n(16, a = A.onExplain), "onHistoryClick" in A && n(2, s = A.onHistoryClick);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*highlightedView, value*/
    17 && d && l !== void 0) {
      let A = l;
      n(4, d.innerText = la(A), d), ta({
        selector: `#${p}`,
        patterns: na
      });
    }
    e.$$.dirty[0] & /*textarea, value*/
    9 && u && l !== void 0 && u.value !== l && (n(3, u.value = l, u), q(l));
  }, [
    l,
    f,
    s,
    u,
    d,
    c,
    g,
    b,
    _,
    p,
    O,
    E,
    D,
    r,
    i,
    o,
    a,
    B,
    C,
    T,
    Q,
    U,
    oe,
    $
  ];
}
class Hs extends me {
  constructor(t) {
    super(), ge(
      this,
      t,
      Is,
      js,
      de,
      {
        value: 0,
        onInput: 13,
        width: 14,
        dataFields: 15,
        onRun: 1,
        onExplain: 16,
        onHistoryClick: 2
      },
      null,
      [-1, -1]
    );
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(t) {
    this.$$set({ value: t }), Ve();
  }
  get onInput() {
    return this.$$.ctx[13];
  }
  set onInput(t) {
    this.$$set({ onInput: t }), Ve();
  }
  get width() {
    return this.$$.ctx[14];
  }
  set width(t) {
    this.$$set({ width: t }), Ve();
  }
  get dataFields() {
    return this.$$.ctx[15];
  }
  set dataFields(t) {
    this.$$set({ dataFields: t }), Ve();
  }
  get onRun() {
    return this.$$.ctx[1];
  }
  set onRun(t) {
    this.$$set({ onRun: t }), Ve();
  }
  get onExplain() {
    return this.$$.ctx[16];
  }
  set onExplain(t) {
    this.$$set({ onExplain: t }), Ve();
  }
  get onHistoryClick() {
    return this.$$.ctx[2];
  }
  set onHistoryClick(t) {
    this.$$set({ onHistoryClick: t }), Ve();
  }
}
function Fs(e) {
  return e === 0 ? !0 : e;
}
function et(e) {
  return Fs(e) ? Array.isArray(e) ? (t) => e.map((n) => typeof n != "function" ? t[n] : n(t)) : typeof e != "function" ? (t) => t[e] : e : null;
}
function Qs(e) {
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
function kr(e, t = {}) {
  return Qs(Object.entries(e).filter(([n, l]) => l !== void 0 && t[n] === void 0));
}
function Bs(e, t = 300) {
  let n;
  return (...l) => {
    clearTimeout(n), n = setTimeout(() => {
      e.apply(this, l);
    }, t);
  };
}
function Gs(e, t, { sort: n = !1 } = {}) {
  if (!Array.isArray(e))
    throw new TypeError(`The first argument of calcUniques() must be an array. You passed in a ${typeof e}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(t) || t === void 0 || t === null)
    throw new TypeError("The second argument of calcUniques() must be an object with field names as keys as accessor functions as values.");
  const l = {}, r = Object.keys(t), i = r.length;
  let o, f, a, s, u, c, d;
  const g = e.length;
  for (o = 0; o < i; o += 1) {
    for (d = /* @__PURE__ */ new Set(), s = r[o], u = t[s], f = 0; f < g; f += 1)
      if (c = u(e[f]), Array.isArray(c)) {
        const _ = c.length;
        for (a = 0; a < _; a += 1)
          d.add(c[a]);
      } else
        d.add(c);
    const b = Array.from(d);
    l[s] = n === !0 ? b.sort() : b;
  }
  return l;
}
function Vs(e, t) {
  if (!Array.isArray(e))
    throw new TypeError(`The first argument of calcExtents() must be an array. You passed in a ${typeof e}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(t) || t === void 0 || t === null)
    throw new TypeError("The second argument of calcExtents() must be an object with field names as keys as accessor functions as values.");
  const n = {}, l = Object.keys(t), r = l.length;
  let i, o, f, a, s, u, c, d;
  const g = e.length;
  for (i = 0; i < r; i += 1) {
    for (a = l[i], c = t[a], s = null, u = null, o = 0; o < g; o += 1)
      if (d = c(e[o]), Array.isArray(d)) {
        const b = d.length;
        for (f = 0; f < b; f += 1)
          d[f] !== !1 && d[f] !== void 0 && d[f] !== null && Number.isNaN(d[f]) === !1 && ((s === null || d[f] < s) && (s = d[f]), (u === null || d[f] > u) && (u = d[f]));
      } else
        d !== !1 && d !== void 0 && d !== null && Number.isNaN(d) === !1 && ((s === null || d < s) && (s = d), (u === null || d > u) && (u = d));
    n[a] = [s, u];
  }
  return n;
}
function mn(e, t) {
  return e.length !== t.length ? !1 : e.every((n) => t.includes(n));
}
function ra(e) {
  return !!(typeof e.bandwidth == "function" || mn(Object.keys(e), ["domain", "range", "unknown", "copy"]));
}
function Ws(e, t, n) {
  const l = Object.keys(n).reduce((i, o) => {
    const f = ra(n[o]) === !0 ? "ordinal" : "other";
    return i[f] || (i[f] = {}), i[f][o] = t[o], i;
  }, { ordinal: !1, other: !1 });
  let r = {};
  return l.ordinal && (r = Gs(e, l.ordinal)), l.other && (r = { ...r, ...Vs(e, l.other) }), r;
}
function Ks(e = [], t) {
  return Array.isArray(t) === !0 ? t.map((n, l) => n === null ? e[l] : n) : e;
}
function El(e) {
  return function([n, l]) {
    return typeof l == "function" && (l = l(n[e])), n ? Ks(n[e], l) : l;
  };
}
function Pl(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Xs(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ia(e) {
  let t, n, l;
  e.length !== 2 ? (t = Pl, n = (f, a) => Pl(e(f), a), l = (f, a) => e(f) - a) : (t = e === Pl || e === Xs ? e : Ys, n = e, l = e);
  function r(f, a, s = 0, u = f.length) {
    if (s < u) {
      if (t(a, a) !== 0)
        return u;
      do {
        const c = s + u >>> 1;
        n(f[c], a) < 0 ? s = c + 1 : u = c;
      } while (s < u);
    }
    return s;
  }
  function i(f, a, s = 0, u = f.length) {
    if (s < u) {
      if (t(a, a) !== 0)
        return u;
      do {
        const c = s + u >>> 1;
        n(f[c], a) <= 0 ? s = c + 1 : u = c;
      } while (s < u);
    }
    return s;
  }
  function o(f, a, s = 0, u = f.length) {
    const c = r(f, a, s, u - 1);
    return c > s && l(f[c - 1], a) > -l(f[c], a) ? c - 1 : c;
  }
  return { left: r, center: o, right: i };
}
function Ys() {
  return 0;
}
function Us(e) {
  return e === null ? NaN : +e;
}
const Zs = ia(Pl), Js = Zs.right;
ia(Us).center;
const $s = Js;
class Mi extends Map {
  constructor(t, n = nu) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [l, r] of t)
        this.set(l, r);
  }
  get(t) {
    return super.get(zi(this, t));
  }
  has(t) {
    return super.has(zi(this, t));
  }
  set(t, n) {
    return super.set(eu(this, t), n);
  }
  delete(t) {
    return super.delete(tu(this, t));
  }
}
function zi({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) ? e.get(l) : n;
}
function eu({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) ? e.get(l) : (e.set(l, n), n);
}
function tu({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) && (n = e.get(l), e.delete(l)), n;
}
function nu(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const lu = Math.sqrt(50), ru = Math.sqrt(10), iu = Math.sqrt(2);
function Kl(e, t, n) {
  const l = (t - e) / Math.max(0, n), r = Math.floor(Math.log10(l)), i = l / Math.pow(10, r), o = i >= lu ? 10 : i >= ru ? 5 : i >= iu ? 2 : 1;
  let f, a, s;
  return r < 0 ? (s = Math.pow(10, -r) / o, f = Math.round(e * s), a = Math.round(t * s), f / s < e && ++f, a / s > t && --a, s = -s) : (s = Math.pow(10, r) * o, f = Math.round(e / s), a = Math.round(t / s), f * s < e && ++f, a * s > t && --a), a < f && 0.5 <= n && n < 2 ? Kl(e, t, n * 2) : [f, a, s];
}
function ou(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0))
    return [];
  if (e === t)
    return [e];
  const l = t < e, [r, i, o] = l ? Kl(t, e, n) : Kl(e, t, n);
  if (!(i >= r))
    return [];
  const f = i - r + 1, a = new Array(f);
  if (l)
    if (o < 0)
      for (let s = 0; s < f; ++s)
        a[s] = (i - s) / -o;
    else
      for (let s = 0; s < f; ++s)
        a[s] = (i - s) * o;
  else if (o < 0)
    for (let s = 0; s < f; ++s)
      a[s] = (r + s) / -o;
  else
    for (let s = 0; s < f; ++s)
      a[s] = (r + s) * o;
  return a;
}
function Mr(e, t, n) {
  return t = +t, e = +e, n = +n, Kl(e, t, n)[2];
}
function au(e, t, n) {
  t = +t, e = +e, n = +n;
  const l = t < e, r = l ? Mr(t, e, n) : Mr(e, t, n);
  return (l ? -1 : 1) * (r < 0 ? 1 / -r : r);
}
function Ke(e, t, n) {
  e = +e, t = +t, n = (r = arguments.length) < 2 ? (t = e, e = 0, 1) : r < 3 ? 1 : +n;
  for (var l = -1, r = Math.max(0, Math.ceil((t - e) / n)) | 0, i = new Array(r); ++l < r; )
    i[l] = e + l * n;
  return i;
}
function Zl(e, t) {
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
const Li = Symbol("implicit");
function Jl() {
  var e = new Mi(), t = [], n = [], l = Li;
  function r(i) {
    let o = e.get(i);
    if (o === void 0) {
      if (l !== Li)
        return l;
      e.set(i, o = t.push(i) - 1);
    }
    return n[o % n.length];
  }
  return r.domain = function(i) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new Mi();
    for (const o of i)
      e.has(o) || e.set(o, t.push(o) - 1);
    return r;
  }, r.range = function(i) {
    return arguments.length ? (n = Array.from(i), r) : n.slice();
  }, r.unknown = function(i) {
    return arguments.length ? (l = i, r) : l;
  }, r.copy = function() {
    return Jl(t, n).unknown(l);
  }, Zl.apply(r, arguments), r;
}
function Tr() {
  var e = Jl().unknown(void 0), t = e.domain, n = e.range, l = 0, r = 1, i, o, f = !1, a = 0, s = 0, u = 0.5;
  delete e.unknown;
  function c() {
    var d = t().length, g = r < l, b = g ? r : l, _ = g ? l : r;
    i = (_ - b) / Math.max(1, d - a + s * 2), f && (i = Math.floor(i)), b += (_ - b - i * (d - a)) * u, o = i * (1 - a), f && (b = Math.round(b), o = Math.round(o));
    var y = Ke(d).map(function(p) {
      return b + i * p;
    });
    return n(g ? y.reverse() : y);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), c()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([l, r] = d, l = +l, r = +r, c()) : [l, r];
  }, e.rangeRound = function(d) {
    return [l, r] = d, l = +l, r = +r, f = !0, c();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return i;
  }, e.round = function(d) {
    return arguments.length ? (f = !!d, c()) : f;
  }, e.padding = function(d) {
    return arguments.length ? (a = Math.min(1, s = +d), c()) : a;
  }, e.paddingInner = function(d) {
    return arguments.length ? (a = Math.min(1, d), c()) : a;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (s = +d, c()) : s;
  }, e.align = function(d) {
    return arguments.length ? (u = Math.max(0, Math.min(1, d)), c()) : u;
  }, e.copy = function() {
    return Tr(t(), [l, r]).round(f).paddingInner(a).paddingOuter(s).align(u);
  }, Zl.apply(c(), arguments);
}
function fu(e) {
  return function() {
    return e;
  };
}
function su(e) {
  return +e;
}
var Ri = [0, 1];
function Fe(e) {
  return e;
}
function zr(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : fu(isNaN(t) ? NaN : 0.5);
}
function uu(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(l) {
    return Math.max(e, Math.min(t, l));
  };
}
function cu(e, t, n) {
  var l = e[0], r = e[1], i = t[0], o = t[1];
  return r < l ? (l = zr(r, l), i = n(o, i)) : (l = zr(l, r), i = n(i, o)), function(f) {
    return i(l(f));
  };
}
function du(e, t, n) {
  var l = Math.min(e.length, t.length) - 1, r = new Array(l), i = new Array(l), o = -1;
  for (e[l] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < l; )
    r[o] = zr(e[o], e[o + 1]), i[o] = n(t[o], t[o + 1]);
  return function(f) {
    var a = $s(e, f, 1, l) - 1;
    return i[a](r[a](f));
  };
}
function oa(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function aa() {
  var e = Ri, t = Ri, n = Er, l, r, i, o = Fe, f, a, s;
  function u() {
    var d = Math.min(e.length, t.length);
    return o !== Fe && (o = uu(e[0], e[d - 1])), f = d > 2 ? du : cu, a = s = null, c;
  }
  function c(d) {
    return d == null || isNaN(d = +d) ? i : (a || (a = f(e.map(l), t, n)))(l(o(d)));
  }
  return c.invert = function(d) {
    return o(r((s || (s = f(t, e.map(l), Wl)))(d)));
  }, c.domain = function(d) {
    return arguments.length ? (e = Array.from(d, su), u()) : e.slice();
  }, c.range = function(d) {
    return arguments.length ? (t = Array.from(d), u()) : t.slice();
  }, c.rangeRound = function(d) {
    return t = Array.from(d), n = $f, u();
  }, c.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : Fe, u()) : o !== Fe;
  }, c.interpolate = function(d) {
    return arguments.length ? (n = d, u()) : n;
  }, c.unknown = function(d) {
    return arguments.length ? (i = d, c) : i;
  }, function(d, g) {
    return l = d, r = g, u();
  };
}
function gu() {
  return aa()(Fe, Fe);
}
function mu(e, t, n, l) {
  var r = au(e, t, n), i;
  switch (l = Ql(l ?? ",f"), l.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return l.precision == null && !isNaN(i = zf(r, o)) && (l.precision = i), Yo(l, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      l.precision == null && !isNaN(i = Lf(r, Math.max(Math.abs(e), Math.abs(t)))) && (l.precision = i - (l.type === "e"));
      break;
    }
    case "f":
    case "%": {
      l.precision == null && !isNaN(i = Uo(r)) && (l.precision = i - (l.type === "%") * 2);
      break;
    }
  }
  return he(l);
}
function fa(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var l = t();
    return ou(l[0], l[l.length - 1], n ?? 10);
  }, e.tickFormat = function(n, l) {
    var r = t();
    return mu(r[0], r[r.length - 1], n ?? 10, l);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var l = t(), r = 0, i = l.length - 1, o = l[r], f = l[i], a, s, u = 10;
    for (f < o && (s = o, o = f, f = s, s = r, r = i, i = s); u-- > 0; ) {
      if (s = Mr(o, f, n), s === a)
        return l[r] = o, l[i] = f, t(l);
      if (s > 0)
        o = Math.floor(o / s) * s, f = Math.ceil(f / s) * s;
      else if (s < 0)
        o = Math.ceil(o * s) / s, f = Math.floor(f * s) / s;
      else
        break;
      a = s;
    }
    return e;
  }, e;
}
function tt() {
  var e = gu();
  return e.copy = function() {
    return oa(e, tt());
  }, Zl.apply(e, arguments), fa(e);
}
function Ni(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function bu(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function hu(e) {
  return e < 0 ? -e * e : e * e;
}
function _u(e) {
  var t = e(Fe, Fe), n = 1;
  function l() {
    return n === 1 ? e(Fe, Fe) : n === 0.5 ? e(bu, hu) : e(Ni(n), Ni(1 / n));
  }
  return t.exponent = function(r) {
    return arguments.length ? (n = +r, l()) : n;
  }, fa(t);
}
function sa() {
  var e = _u(aa());
  return e.copy = function() {
    return oa(e, sa()).exponent(e.exponent());
  }, Zl.apply(e, arguments), e;
}
function yu() {
  return sa.apply(null, arguments).exponent(0.5);
}
const bn = {
  x: tt,
  y: tt,
  z: tt,
  r: yu
};
function pu(e) {
  return e.constant ? "symlog" : e.base ? "log" : e.exponent ? e.exponent() === 0.5 ? "sqrt" : "pow" : "other";
}
function Ai(e) {
  return e;
}
function ku(e) {
  return (t) => Math.log(e * t);
}
function wu(e) {
  return (t) => e * Math.exp(t);
}
function vu(e) {
  return (t) => Math.sign(t) * Math.log1p(Math.abs(t / e));
}
function Su(e) {
  return (t) => Math.sign(t) * Math.expm1(Math.abs(t)) * e;
}
function Dl(e) {
  return function(n) {
    return n < 0 ? -Math.pow(-n, e) : Math.pow(n, e);
  };
}
function Cu(e) {
  const t = pu(e);
  if (t === "log") {
    const n = Math.sign(e.domain()[0]);
    return { lift: ku(n), ground: wu(n), scaleType: t };
  }
  return t === "pow" ? { lift: Dl(1), ground: Dl(1 / 1), scaleType: t } : t === "sqrt" ? { lift: Dl(0.5), ground: Dl(1 / 0.5), scaleType: t } : t === "symlog" ? { lift: vu(1), ground: Su(1), scaleType: t } : { lift: Ai, ground: Ai, scaleType: t };
}
function Xl(e) {
  return e.replace(/^\w/, (t) => t.toUpperCase());
}
function ze(e, t = "") {
  return `scale${Xl(t)}${Xl(e)}`;
}
function ua(e) {
  if (typeof e.bandwidth == "function")
    return typeof e.paddingInner == "function" ? ze("band") : ze("point");
  if (mn(Object.keys(e), ["domain", "range", "unknown", "copy"]))
    return ze("ordinal");
  let t = "";
  if (e.interpolator && (e.domain().length === 3 ? t = "diverging" : t = "sequential"), e.quantiles)
    return ze("quantile", t);
  if (e.thresholds)
    return ze("quantize", t);
  if (e.constant)
    return ze("symlog", t);
  if (e.base)
    return ze("log", t);
  if (e.exponent)
    return e.exponent() === 0.5 ? ze("sqrt", t) : ze("pow", t);
  if (mn(Object.keys(e), ["domain", "range", "invertExtent", "unknown", "copy"]))
    return ze("threshold");
  if (mn(Object.keys(e), ["invert", "range", "domain", "unknown", "copy", "ticks", "tickFormat", "nice"]))
    return ze("identity");
  if (mn(Object.keys(e), [
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
    return ze("radial");
  if (t)
    return ze(t);
  if (e.domain()[0] instanceof Date) {
    const n = /* @__PURE__ */ new Date();
    let l;
    return n.getDay = () => l = "time", n.getUTCDay = () => l = "utc", e.tickFormat(0, "%a")(n), ze(l);
  }
  return ze("linear");
}
const Mu = ["scaleThreshold", "scaleQuantile", "scaleQuantize", "scaleSequentialQuantile"];
function zu(e, t) {
  if (typeof e.range != "function")
    throw console.log(e), new Error("Scale method `range` must be a function");
  if (typeof e.domain != "function")
    throw new Error("Scale method `domain` must be a function");
  if (!Array.isArray(t) || Mu.includes(ua(e)) || ra(e) === !0)
    return e.domain();
  const { lift: n, ground: l } = Cu(e), r = e.domain()[0], i = Object.prototype.toString.call(r) === "[object Date]", [o, f] = e.domain().map((g) => n(i ? g.getTime() : g)), [a, s] = e.range(), u = t[0] || 0, c = t[1] || 0, d = (f - o) / (Math.abs(s - a) - u - c);
  return [o - u * d, c * d + f].map((g) => l(i ? new Date(g) : g));
}
function Lu(e, t, n, l, r) {
  let i, o;
  return r === !0 ? (i = 0, o = 100) : (i = e === "r" ? 1 : 0, o = e === "y" ? n : e === "r" ? 25 : t), l === !0 ? [o, i] : [i, o];
}
function Ru(e, t, n, l, r, i) {
  return r ? typeof r == "function" ? r({ width: t, height: n }) : r : Lu(e, t, n, l, i);
}
function ql(e) {
  return function([n, l, r, i, o, f, a, s, u, c]) {
    if (l === null)
      return null;
    const d = Ru(e, a, s, f, u, c), g = n === bn[e] ? n() : n.copy();
    return g.domain(r), (!g.interpolator || typeof g.interpolator == "function" && g.interpolator().name.startsWith("identity")) && g.range(d), i && g.domain(zu(g, i)), (o === !0 || typeof o == "number") && (typeof g.nice == "function" ? g.nice(typeof o == "number" ? o : void 0) : console.error(`[Layer Cake] You set \`${e}Nice: true\` but the ${e}Scale does not have a \`.nice\` method. Ignoring...`)), g;
  };
}
function Tl([e, t]) {
  return (n) => {
    const l = e(n);
    return Array.isArray(l) ? l.map((r) => t(r)) : t(l);
  };
}
function xl([e]) {
  if (typeof e == "function") {
    if (typeof e.range == "function")
      return e.range();
    console.error("[LayerCake] Your scale doesn't have a `.range` method?");
  }
  return null;
}
const He = "    ";
function Nu(e) {
  const { r: t, g: n, b: l, opacity: r } = Gl(e);
  return [t, n, l].every((i) => i >= 0 && i <= 255) ? { r: t, g: n, b: l, o: r } : !1;
}
function Au({ r: e, g: t, b: n }) {
  return (0.2126 * e + 0.7152 * t + 0.0722 * n) / 255 > 0.6 ? "black" : "white";
}
function Eu(e) {
  console.log("/********* LayerCake Debug ************/"), console.log("Bounding box:"), Du(e.boundingBox), console.log(`Scales:
`), Object.keys(e.activeGetters).forEach((t) => {
    qu(t, e[`${t}Scale`], e[t]);
  }), console.log(`/************ End LayerCake Debug ***************/
`);
}
function Du(e) {
  Object.entries(e).forEach(([t, n]) => {
    console.log(`${He}${t}:`, n);
  });
}
function qu(e, t, n) {
  const l = ua(t);
  console.log(`${He}${e}:`), console.log(`${He}${He}Accessor: "${n.toString()}"`), console.log(`${He}${He}Type: ${l}`), Ei(t, "domain"), Ei(t, "range", " ");
}
function Ei(e, t, n = "") {
  const l = e[t](), r = xu(l);
  r ? Tu(r, t, l) : console.log(`${He}${He}${Xl(t)}:${n}`, l);
}
function Tu(e, t, n) {
  console.log(
    `${He}${He}${Xl(t)}:    %cArray%c(${n.length}) ` + e[0] + "%c ]",
    "color: #1377e4",
    "color: #737373",
    "color: #1478e4",
    ...e[1],
    "color: #1478e4"
  );
}
function xu(e) {
  const t = [], n = e.map((l, r) => {
    const i = Nu(l);
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
      (l) => `background-color: rgba(${l.r}, ${l.g}, ${l.b}, ${l.o}); color:${Au(l)};`
    )
  ] : null;
}
const Ou = (e) => ({
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
}), Di = (e) => ({
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
function qi(e) {
  let t, n, l;
  const r = (
    /*#slots*/
    e[153].default
  ), i = qe(
    r,
    e,
    /*$$scope*/
    e[152],
    Di
  );
  return {
    c() {
      t = w("div"), i && i.c(), m(t, "class", "layercake-container svelte-vhzpsp"), jl(() => (
        /*div_elementresize_handler*/
        e[155].call(t)
      )), Z(
        t,
        "position",
        /*position*/
        e[5]
      ), Z(
        t,
        "top",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), Z(
        t,
        "right",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), Z(
        t,
        "bottom",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), Z(
        t,
        "left",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), Z(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[4] === !1 ? "none" : null
      );
    },
    m(o, f) {
      R(o, t, f), i && i.m(t, null), e[154](t), n = Na(
        t,
        /*div_elementresize_handler*/
        e[155].bind(t)
      ), l = !0;
    },
    p(o, f) {
      i && i.p && (!l || f[0] & /*element, $activeGetters_d, $_x, $_y, $_z, $_r, $_custom, $_data, $_xNice, $_yNice, $_zNice, $_rNice, $_xReverse, $_yReverse, $_zReverse, $_rReverse, $_xPadding, $_yPadding, $_zPadding, $_rPadding, $_flatData, $_config, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
      2147483588 | f[1] & /*$width_d, $height_d, $aspectRatio_d, $_containerWidth, $_containerHeight, $_percentRange, $padding_d, $extents_d, $xDomain_d, $yDomain_d, $zDomain_d, $rDomain_d, $xRange_d, $yRange_d, $zRange_d, $rRange_d, $xGet_d, $yGet_d, $zGet_d, $rGet_d*/
      1048575 | f[4] & /*$$scope*/
      268435456) && xe(
        i,
        r,
        o,
        /*$$scope*/
        o[152],
        l ? Te(
          r,
          /*$$scope*/
          o[152],
          f,
          Ou
        ) : Oe(
          /*$$scope*/
          o[152]
        ),
        Di
      ), f[0] & /*position*/
      32 && Z(
        t,
        "position",
        /*position*/
        o[5]
      ), f[0] & /*position*/
      32 && Z(
        t,
        "top",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), f[0] & /*position*/
      32 && Z(
        t,
        "right",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), f[0] & /*position*/
      32 && Z(
        t,
        "bottom",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), f[0] & /*position*/
      32 && Z(
        t,
        "left",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), f[0] & /*pointerEvents*/
      16 && Z(
        t,
        "pointer-events",
        /*pointerEvents*/
        o[4] === !1 ? "none" : null
      );
    },
    i(o) {
      l || (S(i, o), l = !0);
    },
    o(o) {
      N(i, o), l = !1;
    },
    d(o) {
      o && z(t), i && i.d(o), e[154](null), n();
    }
  };
}
function Pu(e) {
  let t, n, l = (
    /*ssr*/
    (e[3] === !0 || typeof window < "u") && qi(e)
  );
  return {
    c() {
      l && l.c(), t = ce();
    },
    m(r, i) {
      l && l.m(r, i), R(r, t, i), n = !0;
    },
    p(r, i) {
      /*ssr*/
      r[3] === !0 || typeof window < "u" ? l ? (l.p(r, i), i[0] & /*ssr*/
      8 && S(l, 1)) : (l = qi(r), l.c(), S(l, 1), l.m(t.parentNode, t)) : l && (ne(), N(l, 1, 1, () => {
        l = null;
      }), le());
    },
    i(r) {
      n || (S(l), n = !0);
    },
    o(r) {
      N(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && z(t);
    }
  };
}
function ju(e, t, n) {
  let l, r, i, o, f, a, s, u, c, d, g, b, _, y, p, k, L, F, x, q, P, I, O, M, E, D, B, C, T, Q, U, oe, $, A, re, J, se, pe, Ce, we, Ae, Pe, Re, je, lt, Bt, ut, ct, Xe, Ye, Ue, Ln, Rn, Nn, An, En, Dn, qn, Tn, xn, On, Pn, { $$slots: er = {}, $$scope: jn } = t;
  const tr = Bs(Eu, 200);
  let { ssr: Gt = !1 } = t, { pointerEvents: In = !0 } = t, { position: X = "relative" } = t, { percentRange: dt = !1 } = t, { width: nr = void 0 } = t, { height: lr = void 0 } = t, { containerWidth: gt = nr || 100 } = t, { containerHeight: mt = lr || 100 } = t, { element: Hn = void 0 } = t, { x: bt = void 0 } = t, { y: ht = void 0 } = t, { z: _t = void 0 } = t, { r: yt = void 0 } = t, { data: pt = [] } = t, { xDomain: kt = void 0 } = t, { yDomain: wt = void 0 } = t, { zDomain: vt = void 0 } = t, { rDomain: St = void 0 } = t, { xNice: Fn = !1 } = t, { yNice: Qn = !1 } = t, { zNice: Bn = !1 } = t, { rNice: Gn = !1 } = t, { xPadding: Vn = void 0 } = t, { yPadding: Wn = void 0 } = t, { zPadding: Kn = void 0 } = t, { rPadding: Xn = void 0 } = t, { xScale: Yn = bn.x } = t, { yScale: Vt = bn.y } = t, { zScale: Un = bn.z } = t, { rScale: Zn = bn.r } = t, { xRange: Ct = void 0 } = t, { yRange: Mt = void 0 } = t, { zRange: zt = void 0 } = t, { rRange: Lt = void 0 } = t, { xReverse: Jn = !1 } = t, { yReverse: $n = void 0 } = t, { zReverse: el = !1 } = t, { rReverse: tl = !1 } = t, { padding: nl = {} } = t, { extents: ll = {} } = t, { flatData: rl = void 0 } = t, { custom: il = {} } = t, { debug: rr = !1 } = t, ir = !1;
  st(() => {
    ir = !0;
  });
  const ue = {}, Ze = fe(dt);
  H(e, Ze, (v) => n(33, lt = v));
  const Rt = fe(gt);
  H(e, Rt, (v) => n(32, je = v));
  const Nt = fe(mt);
  H(e, Nt, (v) => n(31, Re = v));
  const ol = fe(kr(ll));
  H(e, ol, (v) => n(170, Pe = v));
  const al = fe(pt);
  H(e, al, (v) => n(30, Ae = v));
  const Wt = fe(rl || pt);
  H(e, Wt, (v) => n(29, we = v));
  const fl = fe(nl);
  H(e, fl, (v) => n(169, Ce = v));
  const At = fe(et(bt));
  H(e, At, (v) => n(28, pe = v));
  const Et = fe(et(ht));
  H(e, Et, (v) => n(27, se = v));
  const Dt = fe(et(_t));
  H(e, Dt, (v) => n(26, J = v));
  const qt = fe(et(yt));
  H(e, qt, (v) => n(25, re = v));
  const sl = fe(kt);
  H(e, sl, (v) => n(168, A = v));
  const ul = fe(wt);
  H(e, ul, (v) => n(167, $ = v));
  const cl = fe(vt);
  H(e, cl, (v) => n(166, oe = v));
  const dl = fe(St);
  H(e, dl, (v) => n(165, U = v));
  const Kt = fe(Fn);
  H(e, Kt, (v) => n(24, Q = v));
  const Xt = fe(Qn);
  H(e, Xt, (v) => n(23, T = v));
  const Yt = fe(Bn);
  H(e, Yt, (v) => n(22, C = v));
  const Ut = fe(Gn);
  H(e, Ut, (v) => n(21, B = v));
  const Zt = fe(Jn);
  H(e, Zt, (v) => n(20, D = v));
  const Jt = fe(l);
  H(e, Jt, (v) => n(19, E = v));
  const $t = fe(el);
  H(e, $t, (v) => n(18, M = v));
  const en = fe(tl);
  H(e, en, (v) => n(17, O = v));
  const tn = fe(Vn);
  H(e, tn, (v) => n(16, I = v));
  const nn = fe(Wn);
  H(e, nn, (v) => n(15, P = v));
  const ln = fe(Kn);
  H(e, ln, (v) => n(14, q = v));
  const rn = fe(Xn);
  H(e, rn, (v) => n(13, x = v));
  const gl = fe(Ct);
  H(e, gl, (v) => n(164, F = v));
  const ml = fe(Mt);
  H(e, ml, (v) => n(163, L = v));
  const bl = fe(zt);
  H(e, bl, (v) => n(162, k = v));
  const hl = fe(Lt);
  H(e, hl, (v) => n(161, p = v));
  const on = fe(Yn);
  H(e, on, (v) => n(160, y = v));
  const an = fe(Vt);
  H(e, an, (v) => n(159, _ = v));
  const fn = fe(Un);
  H(e, fn, (v) => n(158, b = v));
  const sn = fe(Zn);
  H(e, sn, (v) => n(157, g = v));
  const _l = fe(ue);
  H(e, _l, (v) => n(11, c = v));
  const yl = fe(il);
  H(e, yl, (v) => n(12, d = v));
  const pl = be([At, Et, Dt, qt], ([v, Ge, Ie, ve]) => {
    const rt = {};
    return v && (rt.x = v), Ge && (rt.y = Ge), Ie && (rt.z = Ie), ve && (rt.r = ve), rt;
  });
  H(e, pl, (v) => n(10, s = v));
  const kl = be([fl, Rt, Nt], ([v]) => Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, v));
  H(e, kl, (v) => n(37, Xe = v));
  const wl = be([Rt, Nt, kl], ([v, Ge, Ie]) => {
    const ve = {};
    return ve.top = Ie.top, ve.right = v - Ie.right, ve.bottom = Ge - Ie.bottom, ve.left = Ie.left, ve.width = ve.right - ve.left, ve.height = ve.bottom - ve.top, ve.width <= 0 && ir === !0 && console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?"), ve.height <= 0 && ir === !0 && console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?"), ve;
  });
  H(e, wl, (v) => n(151, u = v));
  const Je = be([wl], ([v]) => v.width);
  H(e, Je, (v) => n(34, Bt = v));
  const $e = be([wl], ([v]) => v.height);
  H(e, $e, (v) => n(35, ut = v));
  const Ee = be([Wt, pl, ol, on, an, sn, fn], ([v, Ge, Ie, ve, rt, ka, wa]) => {
    const va = {
      x: ve,
      y: rt,
      r: ka,
      z: wa
    }, br = kr(Ge, Ie), Sa = Object.fromEntries(Object.keys(br).map((hr) => [hr, va[hr]]));
    return Object.keys(br).length > 0 ? { ...Ws(v, br, Sa), ...Ie } : {};
  });
  H(e, Ee, (v) => n(38, Ye = v));
  const vl = be([Ee, sl], El("x"));
  H(e, vl, (v) => n(39, Ue = v));
  const Sl = be([Ee, ul], El("y"));
  H(e, Sl, (v) => n(40, Ln = v));
  const Cl = be([Ee, cl], El("z"));
  H(e, Cl, (v) => n(41, Rn = v));
  const Ml = be([Ee, dl], El("r"));
  H(e, Ml, (v) => n(42, Nn = v));
  const un = be(
    [
      on,
      Ee,
      vl,
      tn,
      Kt,
      Zt,
      Je,
      $e,
      gl,
      Ze
    ],
    ql("x")
  );
  H(e, un, (v) => n(9, a = v));
  const or = be([At, un], Tl);
  H(e, or, (v) => n(47, Tn = v));
  const cn = be(
    [
      an,
      Ee,
      Sl,
      nn,
      Xt,
      Jt,
      Je,
      $e,
      ml,
      Ze
    ],
    ql("y")
  );
  H(e, cn, (v) => n(8, f = v));
  const ar = be([Et, cn], Tl);
  H(e, ar, (v) => n(48, xn = v));
  const dn = be(
    [
      fn,
      Ee,
      Cl,
      ln,
      Yt,
      $t,
      Je,
      $e,
      bl,
      Ze
    ],
    ql("z")
  );
  H(e, dn, (v) => n(7, o = v));
  const fr = be([Dt, dn], Tl);
  H(e, fr, (v) => n(49, On = v));
  const gn = be(
    [
      sn,
      Ee,
      Ml,
      rn,
      Ut,
      en,
      Je,
      $e,
      hl,
      Ze
    ],
    ql("r")
  );
  H(e, gn, (v) => n(6, i = v));
  const sr = be([qt, gn], Tl);
  H(e, sr, (v) => n(50, Pn = v));
  const ur = be([un], xl);
  H(e, ur, (v) => n(43, An = v));
  const cr = be([cn], xl);
  H(e, cr, (v) => n(44, En = v));
  const dr = be([dn], xl);
  H(e, dr, (v) => n(45, Dn = v));
  const gr = be([gn], xl);
  H(e, gr, (v) => n(46, qn = v));
  const mr = be([Je, $e], ([v, Ge]) => v / Ge);
  H(e, mr, (v) => n(36, ct = v));
  function ya(v) {
    Me[v ? "unshift" : "push"](() => {
      Hn = v, n(2, Hn);
    });
  }
  function pa() {
    gt = this.clientWidth, mt = this.clientHeight, n(0, gt), n(1, mt);
  }
  return e.$$set = (v) => {
    "ssr" in v && n(3, Gt = v.ssr), "pointerEvents" in v && n(4, In = v.pointerEvents), "position" in v && n(5, X = v.position), "percentRange" in v && n(111, dt = v.percentRange), "width" in v && n(112, nr = v.width), "height" in v && n(113, lr = v.height), "containerWidth" in v && n(0, gt = v.containerWidth), "containerHeight" in v && n(1, mt = v.containerHeight), "element" in v && n(2, Hn = v.element), "x" in v && n(114, bt = v.x), "y" in v && n(115, ht = v.y), "z" in v && n(116, _t = v.z), "r" in v && n(117, yt = v.r), "data" in v && n(118, pt = v.data), "xDomain" in v && n(119, kt = v.xDomain), "yDomain" in v && n(120, wt = v.yDomain), "zDomain" in v && n(121, vt = v.zDomain), "rDomain" in v && n(122, St = v.rDomain), "xNice" in v && n(123, Fn = v.xNice), "yNice" in v && n(124, Qn = v.yNice), "zNice" in v && n(125, Bn = v.zNice), "rNice" in v && n(126, Gn = v.rNice), "xPadding" in v && n(127, Vn = v.xPadding), "yPadding" in v && n(128, Wn = v.yPadding), "zPadding" in v && n(129, Kn = v.zPadding), "rPadding" in v && n(130, Xn = v.rPadding), "xScale" in v && n(131, Yn = v.xScale), "yScale" in v && n(132, Vt = v.yScale), "zScale" in v && n(133, Un = v.zScale), "rScale" in v && n(134, Zn = v.rScale), "xRange" in v && n(135, Ct = v.xRange), "yRange" in v && n(136, Mt = v.yRange), "zRange" in v && n(137, zt = v.zRange), "rRange" in v && n(138, Lt = v.rRange), "xReverse" in v && n(139, Jn = v.xReverse), "yReverse" in v && n(140, $n = v.yReverse), "zReverse" in v && n(141, el = v.zReverse), "rReverse" in v && n(142, tl = v.rReverse), "padding" in v && n(143, nl = v.padding), "extents" in v && n(144, ll = v.extents), "flatData" in v && n(145, rl = v.flatData), "custom" in v && n(146, il = v.custom), "debug" in v && n(147, rr = v.debug), "$$scope" in v && n(152, jn = v.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[4] & /*yReverse, yScale*/
    65792 && n(150, l = typeof $n > "u" ? typeof Vt.bandwidth != "function" : $n), e.$$.dirty[3] & /*x*/
    2097152 && bt && n(148, ue.x = bt, ue), e.$$.dirty[3] & /*y*/
    4194304 && ht && n(148, ue.y = ht, ue), e.$$.dirty[3] & /*z*/
    8388608 && _t && n(148, ue.z = _t, ue), e.$$.dirty[3] & /*r*/
    16777216 && yt && n(148, ue.r = yt, ue), e.$$.dirty[3] & /*xDomain*/
    67108864 && kt && n(148, ue.xDomain = kt, ue), e.$$.dirty[3] & /*yDomain*/
    134217728 && wt && n(148, ue.yDomain = wt, ue), e.$$.dirty[3] & /*zDomain*/
    268435456 && vt && n(148, ue.zDomain = vt, ue), e.$$.dirty[3] & /*rDomain*/
    536870912 && St && n(148, ue.rDomain = St, ue), e.$$.dirty[4] & /*xRange*/
    2048 && Ct && n(148, ue.xRange = Ct, ue), e.$$.dirty[4] & /*yRange*/
    4096 && Mt && n(148, ue.yRange = Mt, ue), e.$$.dirty[4] & /*zRange*/
    8192 && zt && n(148, ue.zRange = zt, ue), e.$$.dirty[4] & /*rRange*/
    16384 && Lt && n(148, ue.rRange = Lt, ue), e.$$.dirty[3] & /*percentRange*/
    262144 && ae(Ze, lt = dt, lt), e.$$.dirty[0] & /*containerWidth*/
    1 && ae(Rt, je = gt, je), e.$$.dirty[0] & /*containerHeight*/
    2 && ae(Nt, Re = mt, Re), e.$$.dirty[4] & /*extents*/
    1048576 && ae(ol, Pe = kr(ll), Pe), e.$$.dirty[3] & /*data*/
    33554432 && ae(al, Ae = pt, Ae), e.$$.dirty[3] & /*data*/
    33554432 | e.$$.dirty[4] & /*flatData*/
    2097152 && ae(Wt, we = rl || pt, we), e.$$.dirty[4] & /*padding*/
    524288 && ae(fl, Ce = nl, Ce), e.$$.dirty[3] & /*x*/
    2097152 && ae(At, pe = et(bt), pe), e.$$.dirty[3] & /*y*/
    4194304 && ae(Et, se = et(ht), se), e.$$.dirty[3] & /*z*/
    8388608 && ae(Dt, J = et(_t), J), e.$$.dirty[3] & /*r*/
    16777216 && ae(qt, re = et(yt), re), e.$$.dirty[3] & /*xDomain*/
    67108864 && ae(sl, A = kt, A), e.$$.dirty[3] & /*yDomain*/
    134217728 && ae(ul, $ = wt, $), e.$$.dirty[3] & /*zDomain*/
    268435456 && ae(cl, oe = vt, oe), e.$$.dirty[3] & /*rDomain*/
    536870912 && ae(dl, U = St, U), e.$$.dirty[3] & /*xNice*/
    1073741824 && ae(Kt, Q = Fn, Q), e.$$.dirty[4] & /*yNice*/
    1 && ae(Xt, T = Qn, T), e.$$.dirty[4] & /*zNice*/
    2 && ae(Yt, C = Bn, C), e.$$.dirty[4] & /*rNice*/
    4 && ae(Ut, B = Gn, B), e.$$.dirty[4] & /*xReverse*/
    32768 && ae(Zt, D = Jn, D), e.$$.dirty[4] & /*yReverseValue*/
    67108864 && ae(Jt, E = l, E), e.$$.dirty[4] & /*zReverse*/
    131072 && ae($t, M = el, M), e.$$.dirty[4] & /*rReverse*/
    262144 && ae(en, O = tl, O), e.$$.dirty[4] & /*xPadding*/
    8 && ae(tn, I = Vn, I), e.$$.dirty[4] & /*yPadding*/
    16 && ae(nn, P = Wn, P), e.$$.dirty[4] & /*zPadding*/
    32 && ae(ln, q = Kn, q), e.$$.dirty[4] & /*rPadding*/
    64 && ae(rn, x = Xn, x), e.$$.dirty[4] & /*xRange*/
    2048 && ae(gl, F = Ct, F), e.$$.dirty[4] & /*yRange*/
    4096 && ae(ml, L = Mt, L), e.$$.dirty[4] & /*zRange*/
    8192 && ae(bl, k = zt, k), e.$$.dirty[4] & /*rRange*/
    16384 && ae(hl, p = Lt, p), e.$$.dirty[4] & /*xScale*/
    128 && ae(on, y = Yn, y), e.$$.dirty[4] & /*yScale*/
    256 && ae(an, _ = Vt, _), e.$$.dirty[4] & /*zScale*/
    512 && ae(fn, b = Un, b), e.$$.dirty[4] & /*rScale*/
    1024 && ae(sn, g = Zn, g), e.$$.dirty[4] & /*custom*/
    4194304 && ae(yl, d = il, d), e.$$.dirty[4] & /*config*/
    16777216 && ae(_l, c = ue, c), e.$$.dirty[4] & /*context*/
    33554432 && Da("LayerCake", r), e.$$.dirty[0] & /*ssr, $activeGetters_d, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
    1992 | e.$$.dirty[4] & /*$box_d, debug, config*/
    159383552 && u && rr === !0 && (Gt === !0 || typeof window < "u") && tr({
      boundingBox: u,
      activeGetters: s,
      x: ue.x,
      y: ue.y,
      z: ue.z,
      r: ue.r,
      xScale: a,
      yScale: f,
      zScale: o,
      rScale: i
    });
  }, n(149, r = {
    activeGetters: pl,
    width: Je,
    height: $e,
    percentRange: Ze,
    aspectRatio: mr,
    containerWidth: Rt,
    containerHeight: Nt,
    x: At,
    y: Et,
    z: Dt,
    r: qt,
    custom: yl,
    data: al,
    xNice: Kt,
    yNice: Xt,
    zNice: Yt,
    rNice: Ut,
    xReverse: Zt,
    yReverse: Jt,
    zReverse: $t,
    rReverse: en,
    xPadding: tn,
    yPadding: nn,
    zPadding: ln,
    rPadding: rn,
    padding: kl,
    flatData: Wt,
    extents: Ee,
    xDomain: vl,
    yDomain: Sl,
    zDomain: Cl,
    rDomain: Ml,
    xRange: ur,
    yRange: cr,
    zRange: dr,
    rRange: gr,
    config: _l,
    xScale: un,
    xGet: or,
    yScale: cn,
    yGet: ar,
    zScale: dn,
    zGet: fr,
    rScale: gn,
    rGet: sr
  }), [
    gt,
    mt,
    Hn,
    Gt,
    In,
    X,
    i,
    o,
    f,
    a,
    s,
    c,
    d,
    x,
    q,
    P,
    I,
    O,
    M,
    E,
    D,
    B,
    C,
    T,
    Q,
    re,
    J,
    se,
    pe,
    we,
    Ae,
    Re,
    je,
    lt,
    Bt,
    ut,
    ct,
    Xe,
    Ye,
    Ue,
    Ln,
    Rn,
    Nn,
    An,
    En,
    Dn,
    qn,
    Tn,
    xn,
    On,
    Pn,
    Ze,
    Rt,
    Nt,
    ol,
    al,
    Wt,
    fl,
    At,
    Et,
    Dt,
    qt,
    sl,
    ul,
    cl,
    dl,
    Kt,
    Xt,
    Yt,
    Ut,
    Zt,
    Jt,
    $t,
    en,
    tn,
    nn,
    ln,
    rn,
    gl,
    ml,
    bl,
    hl,
    on,
    an,
    fn,
    sn,
    _l,
    yl,
    pl,
    kl,
    wl,
    Je,
    $e,
    Ee,
    vl,
    Sl,
    Cl,
    Ml,
    un,
    or,
    cn,
    ar,
    dn,
    fr,
    gn,
    sr,
    ur,
    cr,
    dr,
    gr,
    mr,
    dt,
    nr,
    lr,
    bt,
    ht,
    _t,
    yt,
    pt,
    kt,
    wt,
    vt,
    St,
    Fn,
    Qn,
    Bn,
    Gn,
    Vn,
    Wn,
    Kn,
    Xn,
    Yn,
    Vt,
    Un,
    Zn,
    Ct,
    Mt,
    zt,
    Lt,
    Jn,
    $n,
    el,
    tl,
    nl,
    ll,
    rl,
    il,
    rr,
    ue,
    r,
    l,
    u,
    jn,
    er,
    ya,
    pa
  ];
}
class $l extends me {
  constructor(t) {
    super(), ge(
      this,
      t,
      ju,
      Pu,
      de,
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
const Iu = (e) => ({ element: e & /*element*/
1 }), Ti = (e) => ({ element: (
  /*element*/
  e[0]
) });
function Hu(e) {
  let t, n;
  const l = (
    /*#slots*/
    e[11].default
  ), r = qe(
    l,
    e,
    /*$$scope*/
    e[10],
    Ti
  );
  return {
    c() {
      t = w("div"), r && r.c(), m(t, "class", "layercake-layout-html svelte-1bu60uu"), m(
        t,
        "role",
        /*roleVal*/
        e[6]
      ), m(
        t,
        "aria-label",
        /*label*/
        e[3]
      ), m(
        t,
        "aria-labelledby",
        /*labelledBy*/
        e[4]
      ), m(
        t,
        "aria-describedby",
        /*describedBy*/
        e[5]
      ), Z(
        t,
        "z-index",
        /*zIndex*/
        e[1]
      ), Z(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[2] === !1 ? "none" : null
      ), Z(
        t,
        "top",
        /*$padding*/
        e[7].top + "px"
      ), Z(
        t,
        "right",
        /*$padding*/
        e[7].right + "px"
      ), Z(
        t,
        "bottom",
        /*$padding*/
        e[7].bottom + "px"
      ), Z(
        t,
        "left",
        /*$padding*/
        e[7].left + "px"
      );
    },
    m(i, o) {
      R(i, t, o), r && r.m(t, null), e[12](t), n = !0;
    },
    p(i, [o]) {
      r && r.p && (!n || o & /*$$scope, element*/
      1025) && xe(
        r,
        l,
        i,
        /*$$scope*/
        i[10],
        n ? Te(
          l,
          /*$$scope*/
          i[10],
          o,
          Iu
        ) : Oe(
          /*$$scope*/
          i[10]
        ),
        Ti
      ), (!n || o & /*roleVal*/
      64) && m(
        t,
        "role",
        /*roleVal*/
        i[6]
      ), (!n || o & /*label*/
      8) && m(
        t,
        "aria-label",
        /*label*/
        i[3]
      ), (!n || o & /*labelledBy*/
      16) && m(
        t,
        "aria-labelledby",
        /*labelledBy*/
        i[4]
      ), (!n || o & /*describedBy*/
      32) && m(
        t,
        "aria-describedby",
        /*describedBy*/
        i[5]
      ), o & /*zIndex*/
      2 && Z(
        t,
        "z-index",
        /*zIndex*/
        i[1]
      ), o & /*pointerEvents*/
      4 && Z(
        t,
        "pointer-events",
        /*pointerEvents*/
        i[2] === !1 ? "none" : null
      ), o & /*$padding*/
      128 && Z(
        t,
        "top",
        /*$padding*/
        i[7].top + "px"
      ), o & /*$padding*/
      128 && Z(
        t,
        "right",
        /*$padding*/
        i[7].right + "px"
      ), o & /*$padding*/
      128 && Z(
        t,
        "bottom",
        /*$padding*/
        i[7].bottom + "px"
      ), o & /*$padding*/
      128 && Z(
        t,
        "left",
        /*$padding*/
        i[7].left + "px"
      );
    },
    i(i) {
      n || (S(r, i), n = !0);
    },
    o(i) {
      N(r, i), n = !1;
    },
    d(i) {
      i && z(t), r && r.d(i), e[12](null);
    }
  };
}
function Fu(e, t, n) {
  let l, r, { $$slots: i = {}, $$scope: o } = t;
  const { padding: f } = Mn("LayerCake");
  H(e, f, (y) => n(7, r = y));
  let { element: a = void 0 } = t, { zIndex: s = void 0 } = t, { pointerEvents: u = void 0 } = t, { role: c = void 0 } = t, { label: d = void 0 } = t, { labelledBy: g = void 0 } = t, { describedBy: b = void 0 } = t;
  function _(y) {
    Me[y ? "unshift" : "push"](() => {
      a = y, n(0, a);
    });
  }
  return e.$$set = (y) => {
    "element" in y && n(0, a = y.element), "zIndex" in y && n(1, s = y.zIndex), "pointerEvents" in y && n(2, u = y.pointerEvents), "role" in y && n(9, c = y.role), "label" in y && n(3, d = y.label), "labelledBy" in y && n(4, g = y.labelledBy), "describedBy" in y && n(5, b = y.describedBy), "$$scope" in y && n(10, o = y.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*role, label, labelledBy, describedBy*/
    568 && n(6, l = c || (d || g || b ? "figure" : void 0));
  }, [
    a,
    s,
    u,
    d,
    g,
    b,
    l,
    r,
    f,
    c,
    o,
    i,
    _
  ];
}
class ca extends me {
  constructor(t) {
    super(), ge(this, t, Fu, Hu, de, {
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
const Qu = (e) => ({ element: e & /*element*/
1 }), xi = (e) => ({ element: (
  /*element*/
  e[0]
) }), Bu = (e) => ({ element: e & /*element*/
1 }), Oi = (e) => ({ element: (
  /*element*/
  e[0]
) }), Gu = (e) => ({ element: e & /*element*/
1 }), Pi = (e) => ({ element: (
  /*element*/
  e[0]
) });
function ji(e) {
  let t, n;
  return {
    c() {
      t = ye("title"), n = G(
        /*title*/
        e[8]
      );
    },
    m(l, r) {
      R(l, t, r), h(t, n);
    },
    p(l, r) {
      r & /*title*/
      256 && ee(
        n,
        /*title*/
        l[8]
      );
    },
    d(l) {
      l && z(t);
    }
  };
}
function Vu(e) {
  let t, n = (
    /*title*/
    e[8] && ji(e)
  );
  return {
    c() {
      n && n.c(), t = ce();
    },
    m(l, r) {
      n && n.m(l, r), R(l, t, r);
    },
    p(l, r) {
      /*title*/
      l[8] ? n ? n.p(l, r) : (n = ji(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(l) {
      n && n.d(l), l && z(t);
    }
  };
}
function Wu(e) {
  let t, n, l, r, i;
  const o = (
    /*#slots*/
    e[16].title
  ), f = qe(
    o,
    e,
    /*$$scope*/
    e[15],
    Pi
  ), a = f || Vu(e), s = (
    /*#slots*/
    e[16].defs
  ), u = qe(
    s,
    e,
    /*$$scope*/
    e[15],
    Oi
  ), c = (
    /*#slots*/
    e[16].default
  ), d = qe(
    c,
    e,
    /*$$scope*/
    e[15],
    xi
  );
  return {
    c() {
      t = ye("svg"), a && a.c(), n = ye("defs"), u && u.c(), l = ye("g"), d && d.c(), m(l, "class", "layercake-layout-svg_g"), m(l, "transform", r = "translate(" + /*$padding*/
      e[11].left + ", " + /*$padding*/
      e[11].top + ")"), m(t, "class", "layercake-layout-svg svelte-u84d8d"), m(
        t,
        "viewBox",
        /*viewBox*/
        e[4]
      ), m(
        t,
        "width",
        /*$containerWidth*/
        e[9]
      ), m(
        t,
        "height",
        /*$containerHeight*/
        e[10]
      ), m(
        t,
        "aria-label",
        /*label*/
        e[5]
      ), m(
        t,
        "aria-labelledby",
        /*labelledBy*/
        e[6]
      ), m(
        t,
        "aria-describedby",
        /*describedBy*/
        e[7]
      ), Z(
        t,
        "z-index",
        /*zIndex*/
        e[2]
      ), Z(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[3] === !1 ? "none" : null
      );
    },
    m(g, b) {
      R(g, t, b), a && a.m(t, null), h(t, n), u && u.m(n, null), h(t, l), d && d.m(l, null), e[17](l), e[18](t), i = !0;
    },
    p(g, [b]) {
      f ? f.p && (!i || b & /*$$scope, element*/
      32769) && xe(
        f,
        o,
        g,
        /*$$scope*/
        g[15],
        i ? Te(
          o,
          /*$$scope*/
          g[15],
          b,
          Gu
        ) : Oe(
          /*$$scope*/
          g[15]
        ),
        Pi
      ) : a && a.p && (!i || b & /*title*/
      256) && a.p(g, i ? b : -1), u && u.p && (!i || b & /*$$scope, element*/
      32769) && xe(
        u,
        s,
        g,
        /*$$scope*/
        g[15],
        i ? Te(
          s,
          /*$$scope*/
          g[15],
          b,
          Bu
        ) : Oe(
          /*$$scope*/
          g[15]
        ),
        Oi
      ), d && d.p && (!i || b & /*$$scope, element*/
      32769) && xe(
        d,
        c,
        g,
        /*$$scope*/
        g[15],
        i ? Te(
          c,
          /*$$scope*/
          g[15],
          b,
          Qu
        ) : Oe(
          /*$$scope*/
          g[15]
        ),
        xi
      ), (!i || b & /*$padding*/
      2048 && r !== (r = "translate(" + /*$padding*/
      g[11].left + ", " + /*$padding*/
      g[11].top + ")")) && m(l, "transform", r), (!i || b & /*viewBox*/
      16) && m(
        t,
        "viewBox",
        /*viewBox*/
        g[4]
      ), (!i || b & /*$containerWidth*/
      512) && m(
        t,
        "width",
        /*$containerWidth*/
        g[9]
      ), (!i || b & /*$containerHeight*/
      1024) && m(
        t,
        "height",
        /*$containerHeight*/
        g[10]
      ), (!i || b & /*label*/
      32) && m(
        t,
        "aria-label",
        /*label*/
        g[5]
      ), (!i || b & /*labelledBy*/
      64) && m(
        t,
        "aria-labelledby",
        /*labelledBy*/
        g[6]
      ), (!i || b & /*describedBy*/
      128) && m(
        t,
        "aria-describedby",
        /*describedBy*/
        g[7]
      ), b & /*zIndex*/
      4 && Z(
        t,
        "z-index",
        /*zIndex*/
        g[2]
      ), b & /*pointerEvents*/
      8 && Z(
        t,
        "pointer-events",
        /*pointerEvents*/
        g[3] === !1 ? "none" : null
      );
    },
    i(g) {
      i || (S(a, g), S(u, g), S(d, g), i = !0);
    },
    o(g) {
      N(a, g), N(u, g), N(d, g), i = !1;
    },
    d(g) {
      g && z(t), a && a.d(g), u && u.d(g), d && d.d(g), e[17](null), e[18](null);
    }
  };
}
function Ku(e, t, n) {
  let l, r, i, { $$slots: o = {}, $$scope: f } = t, { element: a = void 0 } = t, { innerElement: s = void 0 } = t, { zIndex: u = void 0 } = t, { pointerEvents: c = void 0 } = t, { viewBox: d = void 0 } = t, { label: g = void 0 } = t, { labelledBy: b = void 0 } = t, { describedBy: _ = void 0 } = t, { title: y = void 0 } = t;
  const { containerWidth: p, containerHeight: k, padding: L } = Mn("LayerCake");
  H(e, p, (q) => n(9, l = q)), H(e, k, (q) => n(10, r = q)), H(e, L, (q) => n(11, i = q));
  function F(q) {
    Me[q ? "unshift" : "push"](() => {
      s = q, n(1, s);
    });
  }
  function x(q) {
    Me[q ? "unshift" : "push"](() => {
      a = q, n(0, a);
    });
  }
  return e.$$set = (q) => {
    "element" in q && n(0, a = q.element), "innerElement" in q && n(1, s = q.innerElement), "zIndex" in q && n(2, u = q.zIndex), "pointerEvents" in q && n(3, c = q.pointerEvents), "viewBox" in q && n(4, d = q.viewBox), "label" in q && n(5, g = q.label), "labelledBy" in q && n(6, b = q.labelledBy), "describedBy" in q && n(7, _ = q.describedBy), "title" in q && n(8, y = q.title), "$$scope" in q && n(15, f = q.$$scope);
  }, [
    a,
    s,
    u,
    c,
    d,
    g,
    b,
    _,
    y,
    l,
    r,
    i,
    p,
    k,
    L,
    f,
    o,
    F,
    x
  ];
}
class da extends me {
  constructor(t) {
    super(), ge(this, t, Ku, Wu, de, {
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
function Ii(e, t, n) {
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
  const f = (
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
  l[33] = f;
  const a = (
    /*$y*/
    l[10](
      /*d*/
      l[29]
    )
  );
  return l[34] = a, l;
}
function Hi(e) {
  let t, n = (
    /*yValue*/
    e[34] + ""
  ), l, r, i;
  return {
    c() {
      t = ye("text"), l = G(n), m(t, "x", r = /*xPos*/
      e[32] + /*colWidth*/
      e[33] / 2), m(t, "y", i = /*$height*/
      e[12] - /*colHeight*/
      e[30] - 5), m(t, "text-anchor", "middle"), m(t, "class", "svelte-1c28ck9");
    },
    m(o, f) {
      R(o, t, f), h(t, l);
    },
    p(o, f) {
      f[0] & /*$y, $data*/
      1280 && n !== (n = /*yValue*/
      o[34] + "") && ee(l, n), f[0] & /*$xGet, $data, $xScale, columnWidth*/
      904 && r !== (r = /*xPos*/
      o[32] + /*colWidth*/
      o[33] / 2) && m(t, "x", r), f[0] & /*$height, columnHeight, $data*/
      4416 && i !== (i = /*$height*/
      o[12] - /*colHeight*/
      o[30] - 5) && m(t, "y", i);
    },
    d(o) {
      o && z(t);
    }
  };
}
function Fi(e) {
  let t, n, l, r, i, o, f, a, s, u, c, d, g, b, _;
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
  let p = (
    /*showLabels*/
    e[1] && /*yValue*/
    e[34] && Hi(e)
  );
  return {
    c() {
      t = ye("rect"), u = ye("rect"), p && p.c(), g = ce(), m(t, "class", "group-rect svelte-1c28ck9"), m(
        t,
        "data-id",
        /*i*/
        e[36]
      ), m(t, "data-range", n = /*$x*/
      e[11](
        /*d*/
        e[29]
      )), m(t, "data-count", l = /*yValue*/
      e[34]), m(t, "x", r = /*xPos*/
      e[32]), m(t, "y", i = /*$yGet*/
      e[2](
        /*d*/
        e[29]
      )), m(t, "width", o = /*colWidth*/
      e[33]), m(t, "height", f = /*colHeight*/
      e[30]), m(
        t,
        "fill",
        /*fill*/
        e[0]
      ), m(t, "stroke", a = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Qi : "none"), m(t, "stroke-width", s = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Bi : 0), ie(
        t,
        "animated",
        /*loaded*/
        e[5]
      ), m(u, "class", "hover-zone svelte-1c28ck9"), m(u, "x", c = /*xPos*/
      e[32]), m(u, "y", 0), m(u, "width", d = /*colWidth*/
      e[33]), m(
        u,
        "height",
        /*$height*/
        e[12]
      ), m(u, "fill", "none"), m(u, "stroke", "none");
    },
    m(k, L) {
      R(k, t, L), R(k, u, L), p && p.m(k, L), R(k, g, L), b || (_ = [
        te(u, "mouseenter", y),
        te(
          u,
          "mouseleave",
          /*mouseleave_handler*/
          e[24]
        )
      ], b = !0);
    },
    p(k, L) {
      e = k, L[0] & /*$x, $data*/
      2304 && n !== (n = /*$x*/
      e[11](
        /*d*/
        e[29]
      )) && m(t, "data-range", n), L[0] & /*$y, $data*/
      1280 && l !== (l = /*yValue*/
      e[34]) && m(t, "data-count", l), L[0] & /*$xGet, $data*/
      264 && r !== (r = /*xPos*/
      e[32]) && m(t, "x", r), L[0] & /*$yGet, $data*/
      260 && i !== (i = /*$yGet*/
      e[2](
        /*d*/
        e[29]
      )) && m(t, "y", i), L[0] & /*$xScale, columnWidth, $data*/
      896 && o !== (o = /*colWidth*/
      e[33]) && m(t, "width", o), L[0] & /*columnHeight, $data*/
      320 && f !== (f = /*colHeight*/
      e[30]) && m(t, "height", f), L[0] & /*fill*/
      1 && m(
        t,
        "fill",
        /*fill*/
        e[0]
      ), L[0] & /*hoveredIndex*/
      16 && a !== (a = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Qi : "none") && m(t, "stroke", a), L[0] & /*hoveredIndex*/
      16 && s !== (s = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Bi : 0) && m(t, "stroke-width", s), L[0] & /*loaded*/
      32 && ie(
        t,
        "animated",
        /*loaded*/
        e[5]
      ), L[0] & /*$xGet, $data*/
      264 && c !== (c = /*xPos*/
      e[32]) && m(u, "x", c), L[0] & /*$xScale, columnWidth, $data*/
      896 && d !== (d = /*colWidth*/
      e[33]) && m(u, "width", d), L[0] & /*$height*/
      4096 && m(
        u,
        "height",
        /*$height*/
        e[12]
      ), /*showLabels*/
      e[1] && /*yValue*/
      e[34] ? p ? p.p(e, L) : (p = Hi(e), p.c(), p.m(g.parentNode, g)) : p && (p.d(1), p = null);
    },
    d(k) {
      k && z(t), k && z(u), p && p.d(k), k && z(g), b = !1, Se(_);
    }
  };
}
function Xu(e) {
  let t, n = (
    /*$data*/
    e[8]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Fi(Ii(e, n, r));
  return {
    c() {
      t = ye("g");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      m(t, "class", "column-group");
    },
    m(r, i) {
      R(r, t, i);
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
          const f = Ii(r, n, o);
          l[o] ? l[o].p(f, i) : (l[o] = Fi(f), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    i: K,
    o: K,
    d(r) {
      r && z(t), Ne(l, r);
    }
  };
}
const Qi = "#333", Bi = 1;
function Yu(e, t, n) {
  let l, r, i, o, f, a, s, u, c, d;
  const g = Bo(), { data: b, xGet: _, yGet: y, x: p, yRange: k, xScale: L, y: F, height: x, zGet: q, zScale: P, z: I, custom: O } = Mn("LayerCake");
  H(e, b, (Q) => n(8, a = Q)), H(e, _, (Q) => n(3, f = Q)), H(e, y, (Q) => n(2, i = Q)), H(e, p, (Q) => n(11, c = Q)), H(e, k, (Q) => n(22, o = Q)), H(e, L, (Q) => n(9, s = Q)), H(e, F, (Q) => n(10, u = Q)), H(e, x, (Q) => n(12, d = Q));
  let { fill: M = "#00e047" } = t, { showLabels: E = !1 } = t, D = null;
  st(() => {
    setTimeout(() => n(5, B = !0), 100);
  });
  let B = !1;
  const C = (Q, U) => {
    n(4, D = Q), g("hover", U);
  }, T = () => {
    n(4, D = null), g("hover", null);
  };
  return e.$$set = (Q) => {
    "fill" in Q && n(0, M = Q.fill), "showLabels" in Q && n(1, E = Q.showLabels);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*$xGet*/
    8 && n(7, l = (Q) => {
      const U = f(Q);
      return Math.abs(U[1] - U[0]);
    }), e.$$.dirty[0] & /*$yRange, $yGet*/
    4194308 && n(6, r = (Q) => o[0] - i(Q));
  }, [
    M,
    E,
    i,
    f,
    D,
    B,
    r,
    l,
    a,
    s,
    u,
    c,
    d,
    g,
    b,
    _,
    y,
    p,
    k,
    L,
    F,
    x,
    o,
    C,
    T
  ];
}
class ga extends me {
  constructor(t) {
    super(), ge(this, t, Yu, Xu, de, { fill: 0, showLabels: 1 }, null, [-1, -1]);
  }
}
function Gi(e, t, n) {
  const l = e.slice();
  return l[28] = t[n], l[30] = n, l;
}
function Vi(e) {
  let t, n, l;
  return {
    c() {
      t = ye("line"), m(t, "y1", n = /*$height*/
      e[15] * -1), m(t, "y2", "0"), m(t, "x1", "0"), m(t, "x2", "0"), m(t, "stroke-width", l = /*tick*/
      e[28] == 0 ? 2 : 1), m(t, "class", "svelte-rkqqab"), ie(
        t,
        "gridline",
        /*tick*/
        e[28] != 0
      ), ie(
        t,
        "baseline",
        /*tick*/
        e[28] == 0
      );
    },
    m(r, i) {
      R(r, t, i);
    },
    p(r, i) {
      i & /*$height*/
      32768 && n !== (n = /*$height*/
      r[15] * -1) && m(t, "y1", n), i & /*tickVals*/
      8192 && l !== (l = /*tick*/
      r[28] == 0 ? 2 : 1) && m(t, "stroke-width", l), i & /*tickVals*/
      8192 && ie(
        t,
        "gridline",
        /*tick*/
        r[28] != 0
      ), i & /*tickVals*/
      8192 && ie(
        t,
        "baseline",
        /*tick*/
        r[28] == 0
      );
    },
    d(r) {
      r && z(t);
    }
  };
}
function Wi(e) {
  let t, n, l;
  return {
    c() {
      t = ye("line"), m(t, "class", "tick-mark svelte-rkqqab"), m(t, "y1", 0), m(t, "y2", 6), m(t, "x1", n = /*xTick*/
      e[5] || /*isBandwidth*/
      e[11] ? (
        /*$xScale*/
        e[12].bandwidth() / 2
      ) : 0), m(t, "x2", l = /*xTick*/
      e[5] || /*isBandwidth*/
      e[11] ? (
        /*$xScale*/
        e[12].bandwidth() / 2
      ) : 0);
    },
    m(r, i) {
      R(r, t, i);
    },
    p(r, i) {
      i & /*xTick, isBandwidth, $xScale*/
      6176 && n !== (n = /*xTick*/
      r[5] || /*isBandwidth*/
      r[11] ? (
        /*$xScale*/
        r[12].bandwidth() / 2
      ) : 0) && m(t, "x1", n), i & /*xTick, isBandwidth, $xScale*/
      6176 && l !== (l = /*xTick*/
      r[5] || /*isBandwidth*/
      r[11] ? (
        /*$xScale*/
        r[12].bandwidth() / 2
      ) : 0) && m(t, "x2", l);
    },
    d(r) {
      r && z(t);
    }
  };
}
function Ki(e) {
  let t, n, l, r = (
    /*formatTick*/
    e[4](
      /*tick*/
      e[28]
    ) + ""
  ), i, o, f, a, s, u, c = (
    /*gridlines*/
    e[0] !== !1 && Vi(e)
  ), d = (
    /*tickMarks*/
    e[1] === !0 && Wi(e)
  );
  return {
    c() {
      t = ye("g"), c && c.c(), n = ce(), d && d.c(), l = ye("text"), i = G(r), m(l, "x", o = /*xTick*/
      e[5] || /*isBandwidth*/
      e[11] ? (
        /*$xScale*/
        e[12].bandwidth() / 2
      ) : 0), m(l, "y", f = /*yTick*/
      e[6] - /*angle*/
      (e[10] ? 4 : 0)), m(l, "dx", ""), m(l, "dy", ""), m(l, "transform", a = /*angle*/
      e[10] ? "rotate(-45)" : ""), Z(
        l,
        "fill",
        /*color*/
        e[9]
      ), m(l, "text-anchor", s = /*textAnchor*/
      e[24](
        /*tick*/
        e[28]
      )), m(l, "class", "svelte-rkqqab"), m(t, "class", "tick tick-" + /*i*/
      e[30] + " svelte-rkqqab"), m(t, "transform", u = "translate(" + /*$xScale*/
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
    m(g, b) {
      R(g, t, b), c && c.m(t, null), h(t, n), d && d.m(t, null), h(t, l), h(l, i);
    },
    p(g, b) {
      /*gridlines*/
      g[0] !== !1 ? c ? c.p(g, b) : (c = Vi(g), c.c(), c.m(t, n)) : c && (c.d(1), c = null), /*tickMarks*/
      g[1] === !0 ? d ? d.p(g, b) : (d = Wi(g), d.c(), d.m(t, l)) : d && (d.d(1), d = null), b & /*formatTick, tickVals*/
      8208 && r !== (r = /*formatTick*/
      g[4](
        /*tick*/
        g[28]
      ) + "") && ee(i, r), b & /*xTick, isBandwidth, $xScale*/
      6176 && o !== (o = /*xTick*/
      g[5] || /*isBandwidth*/
      g[11] ? (
        /*$xScale*/
        g[12].bandwidth() / 2
      ) : 0) && m(l, "x", o), b & /*yTick, angle*/
      1088 && f !== (f = /*yTick*/
      g[6] - /*angle*/
      (g[10] ? 4 : 0)) && m(l, "y", f), b & /*angle*/
      1024 && a !== (a = /*angle*/
      g[10] ? "rotate(-45)" : "") && m(l, "transform", a), b & /*color*/
      512 && Z(
        l,
        "fill",
        /*color*/
        g[9]
      ), b & /*tickVals*/
      8192 && s !== (s = /*textAnchor*/
      g[24](
        /*tick*/
        g[28]
      )) && m(l, "text-anchor", s), b & /*$xScale, tickVals, $yRange*/
      28672 && u !== (u = "translate(" + /*$xScale*/
      g[12](
        /*tick*/
        g[28]
      ) + "," + Math.max(
        /*$yRange*/
        g[14][0],
        /*$yRange*/
        g[14][1]
      ) + ")") && m(t, "transform", u);
    },
    d(g) {
      g && z(t), c && c.d(), d && d.d();
    }
  };
}
function Xi(e) {
  let t, n, l;
  return {
    c() {
      t = ye("line"), m(t, "class", "baseline svelte-rkqqab"), m(t, "y1", n = /*$height*/
      e[15] + 0.5), m(t, "y2", l = /*$height*/
      e[15] + 0.5), m(t, "x1", "0"), m(
        t,
        "x2",
        /*$width*/
        e[16]
      );
    },
    m(r, i) {
      R(r, t, i);
    },
    p(r, i) {
      i & /*$height*/
      32768 && n !== (n = /*$height*/
      r[15] + 0.5) && m(t, "y1", n), i & /*$height*/
      32768 && l !== (l = /*$height*/
      r[15] + 0.5) && m(t, "y2", l), i & /*$width*/
      65536 && m(
        t,
        "x2",
        /*$width*/
        r[16]
      );
    },
    d(r) {
      r && z(t);
    }
  };
}
function Yi(e) {
  let t, n, l, r;
  return {
    c() {
      t = ye("text"), m(t, "x", n = /*labelLeft*/
      e[8] ? (
        /*$xRange*/
        e[17][0] - 4 - 12
      ) : (
        /*$width*/
        e[16] * 0.5
      )), m(
        t,
        "y",
        /*$height*/
        e[15]
      ), m(t, "dy", l = /*labelLeft*/
      e[8] ? "18px" : "36px"), m(t, "text-anchor", r = /*labelLeft*/
      e[8] ? "end" : "middle"), Z(
        t,
        "fill",
        /*color*/
        e[9]
      ), m(t, "class", "axis-label svelte-rkqqab");
    },
    m(i, o) {
      R(i, t, o), t.innerHTML = /*label*/
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
      )) && m(t, "x", n), o & /*$height*/
      32768 && m(
        t,
        "y",
        /*$height*/
        i[15]
      ), o & /*labelLeft*/
      256 && l !== (l = /*labelLeft*/
      i[8] ? "18px" : "36px") && m(t, "dy", l), o & /*labelLeft*/
      256 && r !== (r = /*labelLeft*/
      i[8] ? "end" : "middle") && m(t, "text-anchor", r), o & /*color*/
      512 && Z(
        t,
        "fill",
        /*color*/
        i[9]
      );
    },
    d(i) {
      i && z(t);
    }
  };
}
function Uu(e) {
  let t, n, l, r = (
    /*tickVals*/
    e[13]
  ), i = [];
  for (let a = 0; a < r.length; a += 1)
    i[a] = Ki(Gi(e, r, a));
  let o = (
    /*baseline*/
    e[2] === !0 && Xi(e)
  ), f = !!/*label*/
  e[7] && Yi(e);
  return {
    c() {
      t = ye("g");
      for (let a = 0; a < i.length; a += 1)
        i[a].c();
      n = ce(), o && o.c(), l = ce(), f && f.c(), m(t, "class", "axis x-axis svelte-rkqqab"), ie(
        t,
        "snapTicks",
        /*snapTicks*/
        e[3]
      );
    },
    m(a, s) {
      R(a, t, s);
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(t, null);
      h(t, n), o && o.m(t, null), h(t, l), f && f.m(t, null);
    },
    p(a, [s]) {
      if (s & /*$xScale, tickVals, Math, $yRange, xTick, isBandwidth, yTick, angle, color, textAnchor, formatTick, tickMarks, $height, gridlines*/
      16842355) {
        r = /*tickVals*/
        a[13];
        let u;
        for (u = 0; u < r.length; u += 1) {
          const c = Gi(a, r, u);
          i[u] ? i[u].p(c, s) : (i[u] = Ki(c), i[u].c(), i[u].m(t, n));
        }
        for (; u < i.length; u += 1)
          i[u].d(1);
        i.length = r.length;
      }
      /*baseline*/
      a[2] === !0 ? o ? o.p(a, s) : (o = Xi(a), o.c(), o.m(t, l)) : o && (o.d(1), o = null), /*label*/
      a[7] ? f ? f.p(a, s) : (f = Yi(a), f.c(), f.m(t, null)) : f && (f.d(1), f = null), s & /*snapTicks*/
      8 && ie(
        t,
        "snapTicks",
        /*snapTicks*/
        a[3]
      );
    },
    i: K,
    o: K,
    d(a) {
      a && z(t), Ne(i, a), o && o.d(), f && f.d();
    }
  };
}
function Zu(e, t, n) {
  let l, r, i, o, f, a, s, u;
  const { width: c, height: d, xRange: g, padding: b, xScale: _, xDomain: y, yRange: p } = Mn("LayerCake");
  H(e, c, (T) => n(16, s = T)), H(e, d, (T) => n(15, a = T)), H(e, g, (T) => n(17, u = T)), H(e, _, (T) => n(12, o = T)), H(e, y, (T) => n(26, i = T)), H(e, p, (T) => n(14, f = T));
  let { gridlines: k = !0 } = t, { tickMarks: L = !1 } = t, { baseline: F = !1 } = t, { snapTicks: x = !1 } = t, { formatTick: q = (T) => T } = t, { ticks: P = void 0 } = t, { xTick: I = 0 } = t, { yTick: O = 16 } = t, { label: M = "" } = t, { labelLeft: E = !1 } = t, { color: D = "#333" } = t, { angle: B = !1 } = t;
  function C(T) {
    if (B)
      return "end";
    if (x === !0) {
      if (T == i[0])
        return "start";
      if (T == i[1])
        return "end";
    }
    return "middle";
  }
  return e.$$set = (T) => {
    "gridlines" in T && n(0, k = T.gridlines), "tickMarks" in T && n(1, L = T.tickMarks), "baseline" in T && n(2, F = T.baseline), "snapTicks" in T && n(3, x = T.snapTicks), "formatTick" in T && n(4, q = T.formatTick), "ticks" in T && n(25, P = T.ticks), "xTick" in T && n(5, I = T.xTick), "yTick" in T && n(6, O = T.yTick), "label" in T && n(7, M = T.label), "labelLeft" in T && n(8, E = T.labelLeft), "color" in T && n(9, D = T.color), "angle" in T && n(10, B = T.angle);
  }, e.$$.update = () => {
    e.$$.dirty & /*$xScale*/
    4096 && n(11, l = typeof o.bandwidth == "function"), e.$$.dirty & /*ticks, isBandwidth, $xScale*/
    33560576 && n(13, r = Array.isArray(P) ? P : l ? o.domain() : typeof P == "function" ? P(o.ticks()) : o.ticks(P));
  }, [
    k,
    L,
    F,
    x,
    q,
    I,
    O,
    M,
    E,
    D,
    B,
    l,
    o,
    r,
    f,
    a,
    s,
    u,
    c,
    d,
    g,
    _,
    y,
    p,
    C,
    P
  ];
}
class ma extends me {
  constructor(t) {
    super(), ge(this, t, Zu, Uu, de, {
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
const Ju = (e) => ({}), Ui = (e) => ({}), $u = (e) => ({}), Zi = (e) => ({});
function ec(e) {
  let t, n, l, r, i, o, f, a, s = !!/*title*/
  e[2] && Ji(e), u = (
    /*loaded*/
    e[8] && /*histBins*/
    e[7].length > 0 && $i(e)
  );
  const c = [ic, rc], d = [];
  function g(b, _) {
    return (
      /*$$slots*/
      b[11].caption ? 1 : 0
    );
  }
  return o = g(e), f = d[o] = c[o](e), {
    c() {
      t = w("div"), s && s.c(), n = j(), l = w("div"), u && u.c(), r = j(), i = w("div"), f.c(), Z(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), Z(l, "height", "16px"), m(i, "class", "text-xs text-gray-800 dark:text-gray-200 truncate"), ie(i, "mt-1", !/*horizontalLayout*/
      e[3]), m(t, "class", "gap-1 items-center"), ie(
        t,
        "flex",
        /*horizontalLayout*/
        e[3]
      ), ie(
        t,
        "my-0.5",
        /*horizontalLayout*/
        e[3]
      );
    },
    m(b, _) {
      R(b, t, _), s && s.m(t, null), h(t, n), h(t, l), u && u.m(l, null), h(t, r), h(t, i), d[o].m(i, null), a = !0;
    },
    p(b, _) {
      /*title*/
      b[2] ? s ? s.p(b, _) : (s = Ji(b), s.c(), s.m(t, n)) : s && (s.d(1), s = null), /*loaded*/
      b[8] && /*histBins*/
      b[7].length > 0 ? u ? (u.p(b, _), _ & /*loaded, histBins*/
      384 && S(u, 1)) : (u = $i(b), u.c(), S(u, 1), u.m(l, null)) : u && (ne(), N(u, 1, 1, () => {
        u = null;
      }), le()), (!a || _ & /*width*/
      1) && Z(
        l,
        "width",
        /*width*/
        b[0] == null ? "100%" : `${/*width*/
        b[0]}px`
      );
      let y = o;
      o = g(b), o === y ? d[o].p(b, _) : (ne(), N(d[y], 1, 1, () => {
        d[y] = null;
      }), le(), f = d[o], f ? f.p(b, _) : (f = d[o] = c[o](b), f.c()), S(f, 1), f.m(i, null)), (!a || _ & /*horizontalLayout*/
      8) && ie(i, "mt-1", !/*horizontalLayout*/
      b[3]), (!a || _ & /*horizontalLayout*/
      8) && ie(
        t,
        "flex",
        /*horizontalLayout*/
        b[3]
      ), (!a || _ & /*horizontalLayout*/
      8) && ie(
        t,
        "my-0.5",
        /*horizontalLayout*/
        b[3]
      );
    },
    i(b) {
      a || (S(u), S(f), a = !0);
    },
    o(b) {
      N(u), N(f), a = !1;
    },
    d(b) {
      b && z(t), s && s.d(), u && u.d(), d[o].d();
    }
  };
}
function tc(e) {
  let t, n, l, r, i, o, f, a = !!/*title*/
  e[2] && eo(e), s = (
    /*loaded*/
    e[8] && /*histBins*/
    e[7].length > 0 && to(e)
  );
  const u = [dc, cc], c = [];
  function d(g, b) {
    return (
      /*$$slots*/
      g[11].caption ? 1 : 0
    );
  }
  return i = d(e), o = c[i] = u[i](e), {
    c() {
      a && a.c(), t = j(), n = w("div"), s && s.c(), l = j(), r = w("div"), o.c(), Z(
        n,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), Z(n, "height", "16px"), m(r, "class", "text-xs text-gray-800 dark:text-gray-200 truncate"), ie(r, "mt-1", !/*horizontalLayout*/
      e[3]);
    },
    m(g, b) {
      a && a.m(g, b), R(g, t, b), R(g, n, b), s && s.m(n, null), R(g, l, b), R(g, r, b), c[i].m(r, null), f = !0;
    },
    p(g, b) {
      /*title*/
      g[2] ? a ? a.p(g, b) : (a = eo(g), a.c(), a.m(t.parentNode, t)) : a && (a.d(1), a = null), /*loaded*/
      g[8] && /*histBins*/
      g[7].length > 0 ? s ? (s.p(g, b), b & /*loaded, histBins*/
      384 && S(s, 1)) : (s = to(g), s.c(), S(s, 1), s.m(n, null)) : s && (ne(), N(s, 1, 1, () => {
        s = null;
      }), le()), (!f || b & /*width*/
      1) && Z(
        n,
        "width",
        /*width*/
        g[0] == null ? "100%" : `${/*width*/
        g[0]}px`
      );
      let _ = i;
      i = d(g), i === _ ? c[i].p(g, b) : (ne(), N(c[_], 1, 1, () => {
        c[_] = null;
      }), le(), o = c[i], o ? o.p(g, b) : (o = c[i] = u[i](g), o.c()), S(o, 1), o.m(r, null)), (!f || b & /*horizontalLayout*/
      8) && ie(r, "mt-1", !/*horizontalLayout*/
      g[3]);
    },
    i(g) {
      f || (S(s), S(o), f = !0);
    },
    o(g) {
      N(s), N(o), f = !1;
    },
    d(g) {
      a && a.d(g), g && z(t), g && z(n), s && s.d(), g && z(l), g && z(r), c[i].d();
    }
  };
}
function Ji(e) {
  let t, n;
  return {
    c() {
      t = w("div"), n = G(
        /*title*/
        e[2]
      ), m(t, "class", "font-bold text-xs truncate text-right"), Z(t, "width", "96px");
    },
    m(l, r) {
      R(l, t, r), h(t, n);
    },
    p(l, r) {
      r & /*title*/
      4 && ee(
        n,
        /*title*/
        l[2]
      );
    },
    d(l) {
      l && z(t);
    }
  };
}
function $i(e) {
  let t, n;
  return t = new $l({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: Tr().round(!0),
      xDomain: (
        /*histBins*/
        e[7]
      ),
      yScale: tt(),
      yDomain: [0, null],
      data: (
        /*data*/
        e[6]
      ),
      custom: { hoveredGet: (
        /*func_2*/
        e[18]
      ) },
      $$slots: { default: [lc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
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
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function nc(e) {
  let t, n, l, r;
  return t = new ga({ props: { fill: (
    /*color*/
    e[5]
  ) } }), t.$on(
    "hover",
    /*hover_handler_1*/
    e[17]
  ), l = new ma({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      Y(t.$$.fragment), n = j(), Y(l.$$.fragment);
    },
    m(i, o) {
      V(t, i, o), R(i, n, o), V(l, i, o), r = !0;
    },
    p(i, o) {
      const f = {};
      o & /*color*/
      32 && (f.fill = /*color*/
      i[5]), t.$set(f);
    },
    i(i) {
      r || (S(t.$$.fragment, i), S(l.$$.fragment, i), r = !0);
    },
    o(i) {
      N(t.$$.fragment, i), N(l.$$.fragment, i), r = !1;
    },
    d(i) {
      W(t, i), i && z(n), W(l, i);
    }
  };
}
function lc(e) {
  let t, n;
  return t = new da({
    props: {
      $$slots: { default: [nc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*$$scope, color, hoveredBin*/
      1049120 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function rc(e) {
  let t;
  const n = (
    /*#slots*/
    e[13].caption
  ), l = qe(
    n,
    e,
    /*$$scope*/
    e[20],
    Ui
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
      1048576) && xe(
        l,
        n,
        r,
        /*$$scope*/
        r[20],
        t ? Te(
          n,
          /*$$scope*/
          r[20],
          i,
          Ju
        ) : Oe(
          /*$$scope*/
          r[20]
        ),
        Ui
      );
    },
    i(r) {
      t || (S(l, r), t = !0);
    },
    o(r) {
      N(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function ic(e) {
  let t;
  function n(i, o) {
    return (
      /*hoveredBin*/
      i[9] != null ? fc : (
        /*mean*/
        i[1] != null ? ac : oc
      )
    );
  }
  let l = n(e), r = l(e);
  return {
    c() {
      r.c(), t = ce();
    },
    m(i, o) {
      r.m(i, o), R(i, t, o);
    },
    p(i, o) {
      l === (l = n(i)) && r ? r.p(i, o) : (r.d(1), r = l(i), r && (r.c(), r.m(t.parentNode, t)));
    },
    i: K,
    o: K,
    d(i) {
      r.d(i), i && z(t);
    }
  };
}
function oc(e) {
  let t;
  return {
    c() {
      t = G(" ");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: K,
    d(n) {
      n && z(t);
    }
  };
}
function ac(e) {
  let t, n, l = he(".3")(
    /*mean*/
    e[1]
  ) + "", r;
  return {
    c() {
      t = G("M = "), n = w("strong"), r = G(l);
    },
    m(i, o) {
      R(i, t, o), R(i, n, o), h(n, r);
    },
    p(i, o) {
      o & /*mean*/
      2 && l !== (l = he(".3")(
        /*mean*/
        i[1]
      ) + "") && ee(r, l);
    },
    d(i) {
      i && z(t), i && z(n);
    }
  };
}
function fc(e) {
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
      n = G(t);
    },
    m(l, r) {
      R(l, n, r);
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
      ) + "") && ee(n, t);
    },
    d(l) {
      l && z(n);
    }
  };
}
function eo(e) {
  let t, n;
  return {
    c() {
      t = w("div"), n = G(
        /*title*/
        e[2]
      ), m(t, "class", "font-bold text-xs truncate text-right");
    },
    m(l, r) {
      R(l, t, r), h(t, n);
    },
    p(l, r) {
      r & /*title*/
      4 && ee(
        n,
        /*title*/
        l[2]
      );
    },
    d(l) {
      l && z(t);
    }
  };
}
function to(e) {
  let t, n;
  return t = new $l({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: Tr().round(!0),
      xDomain: (
        /*histBins*/
        e[7]
      ),
      yScale: tt(),
      yDomain: [0, null],
      data: (
        /*data*/
        e[6]
      ),
      custom: { hoveredGet: (
        /*func*/
        e[15]
      ) },
      $$slots: { default: [uc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
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
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function sc(e) {
  let t, n, l, r;
  return t = new ga({ props: { fill: (
    /*color*/
    e[5]
  ) } }), t.$on(
    "hover",
    /*hover_handler*/
    e[14]
  ), l = new ma({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      Y(t.$$.fragment), n = j(), Y(l.$$.fragment);
    },
    m(i, o) {
      V(t, i, o), R(i, n, o), V(l, i, o), r = !0;
    },
    p(i, o) {
      const f = {};
      o & /*color*/
      32 && (f.fill = /*color*/
      i[5]), t.$set(f);
    },
    i(i) {
      r || (S(t.$$.fragment, i), S(l.$$.fragment, i), r = !0);
    },
    o(i) {
      N(t.$$.fragment, i), N(l.$$.fragment, i), r = !1;
    },
    d(i) {
      W(t, i), i && z(n), W(l, i);
    }
  };
}
function uc(e) {
  let t, n;
  return t = new da({
    props: {
      $$slots: { default: [sc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*$$scope, color, hoveredBin*/
      1049120 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function cc(e) {
  let t;
  const n = (
    /*#slots*/
    e[13].caption
  ), l = qe(
    n,
    e,
    /*$$scope*/
    e[20],
    Zi
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
      1048576) && xe(
        l,
        n,
        r,
        /*$$scope*/
        r[20],
        t ? Te(
          n,
          /*$$scope*/
          r[20],
          i,
          $u
        ) : Oe(
          /*$$scope*/
          r[20]
        ),
        Zi
      );
    },
    i(r) {
      t || (S(l, r), t = !0);
    },
    o(r) {
      N(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function dc(e) {
  let t;
  function n(i, o) {
    return (
      /*hoveredBin*/
      i[9] != null ? bc : (
        /*mean*/
        i[1] != null ? mc : gc
      )
    );
  }
  let l = n(e), r = l(e);
  return {
    c() {
      r.c(), t = ce();
    },
    m(i, o) {
      r.m(i, o), R(i, t, o);
    },
    p(i, o) {
      l === (l = n(i)) && r ? r.p(i, o) : (r.d(1), r = l(i), r && (r.c(), r.m(t.parentNode, t)));
    },
    i: K,
    o: K,
    d(i) {
      r.d(i), i && z(t);
    }
  };
}
function gc(e) {
  let t;
  return {
    c() {
      t = G(" ");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: K,
    d(n) {
      n && z(t);
    }
  };
}
function mc(e) {
  let t, n, l = he(".3")(
    /*mean*/
    e[1]
  ) + "", r;
  return {
    c() {
      t = G("M = "), n = w("strong"), r = G(l);
    },
    m(i, o) {
      R(i, t, o), R(i, n, o), h(n, r);
    },
    p(i, o) {
      o & /*mean*/
      2 && l !== (l = he(".3")(
        /*mean*/
        i[1]
      ) + "") && ee(r, l);
    },
    d(i) {
      i && z(t), i && z(n);
    }
  };
}
function bc(e) {
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
      n = G(t);
    },
    m(l, r) {
      R(l, n, r);
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
      ) + "") && ee(n, t);
    },
    d(l) {
      l && z(n);
    }
  };
}
function hc(e) {
  let t, n, l, r;
  const i = [tc, ec], o = [];
  function f(a, s) {
    return (
      /*noParent*/
      a[4] ? 0 : 1
    );
  }
  return t = f(e), n = o[t] = i[t](e), {
    c() {
      n.c(), l = ce();
    },
    m(a, s) {
      o[t].m(a, s), R(a, l, s), r = !0;
    },
    p(a, [s]) {
      let u = t;
      t = f(a), t === u ? o[t].p(a, s) : (ne(), N(o[u], 1, 1, () => {
        o[u] = null;
      }), le(), n = o[t], n ? n.p(a, s) : (n = o[t] = i[t](a), n.c()), S(n, 1), n.m(l.parentNode, l));
    },
    i(a) {
      r || (S(n), r = !0);
    },
    o(a) {
      N(n), r = !1;
    },
    d(a) {
      o[t].d(a), a && z(l);
    }
  };
}
function _c(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = Lr(l);
  let { width: o = 100 } = t, { histValues: f } = t, { mean: a = null } = t, { title: s = null } = t, { horizontalLayout: u = !1 } = t, { noParent: c = !1 } = t, { color: d = "#3b82f6" } = t, g = [], b = [], _ = !1;
  st(() => setTimeout(() => n(8, _ = !0), 0));
  let y, p = he(".3g"), k = he(",");
  function L(M) {
    return `${p(M.bin)}: ${k(M.count)} instances`;
  }
  const F = (M) => n(9, y = M.detail != null ? M.detail.bin : null), x = (M) => M.bin == y, q = (M) => M.bin == y, P = (M) => n(9, y = M.detail != null ? M.detail.bin : null), I = (M) => M.bin == y, O = (M) => M.bin == y;
  return e.$$set = (M) => {
    "width" in M && n(0, o = M.width), "histValues" in M && n(12, f = M.histValues), "mean" in M && n(1, a = M.mean), "title" in M && n(2, s = M.title), "horizontalLayout" in M && n(3, u = M.horizontalLayout), "noParent" in M && n(4, c = M.noParent), "color" in M && n(5, d = M.color), "$$scope" in M && n(20, r = M.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*histValues, data*/
    4160 && (f ? (n(6, g = Object.entries(f).map((M) => ({ bin: parseFloat(M[0]), count: M[1] }))), g.sort((M, E) => M.bin - E.bin), n(7, b = g.map((M) => M.bin))) : (n(6, g = []), n(7, b = []))), e.$$.dirty & /*data*/
    64 && g.length > 0) {
      let M = g.reduce(
        (E, D, B) => B > 0 ? Math.min(E, Math.abs(D.bin - g[B - 1].bin)) : E,
        1e9
      );
      p = he(`.${Uo(M)}f`);
    }
    e.$$.dirty & /*histBins*/
    128 && console.log("histBins", b), e.$$.dirty & /*histValues*/
    4096 && console.log("histValues", f);
  }, [
    o,
    a,
    s,
    u,
    c,
    d,
    g,
    b,
    _,
    y,
    L,
    i,
    f,
    l,
    F,
    x,
    q,
    P,
    I,
    O,
    r
  ];
}
class yc extends me {
  constructor(t) {
    super(), ge(this, t, _c, hc, de, {
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
function no(e, t, n) {
  const l = e.slice();
  return l[24] = t[n], l[26] = n, l;
}
function lo(e) {
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
      t = w("span"), m(t, "class", "bar absolute content-box svelte-mwmtzu"), Z(t, "top", "0"), Z(
        t,
        "left",
        /*$xGet*/
        e[3](
          /*d*/
          e[24]
        ) * /*$xRange*/
        (e[4][1] <= 1 ? 100 : 1) + /*$xRange*/
        (e[4][1] <= 1 ? "%" : "px")
      ), Z(
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
      ), Z(
        t,
        "background-color",
        /*$yGet*/
        e[7](
          /*d*/
          e[24]
        )
      ), ie(
        t,
        "animated",
        /*loaded*/
        e[1]
      ), ie(
        t,
        "border",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      ), ie(
        t,
        "border-black",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      );
    },
    m(i, o) {
      R(i, t, o), n || (l = [
        te(t, "mouseenter", r),
        te(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[16]
        )
      ], n = !0);
    },
    p(i, o) {
      e = i, o & /*$xGet, $data, $xRange*/
      28 && Z(
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
      124 && Z(
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
      132 && Z(
        t,
        "background-color",
        /*$yGet*/
        e[7](
          /*d*/
          e[24]
        )
      ), o & /*loaded*/
      2 && ie(
        t,
        "animated",
        /*loaded*/
        e[1]
      ), o & /*hoveredIndex, $data*/
      5 && ie(
        t,
        "border",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      ), o & /*hoveredIndex, $data*/
      5 && ie(
        t,
        "border-black",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      );
    },
    d(i) {
      i && z(t), n = !1, Se(l);
    }
  };
}
function pc(e) {
  let t, n = (
    /*$data*/
    e[2]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = lo(no(e, n, r));
  return {
    c() {
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      t = ce();
    },
    m(r, i) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(r, i);
      R(r, t, i);
    },
    p(r, [i]) {
      if (i & /*$xGet, $data, $xRange, $xScale, $z, $yGet, loaded, hoveredIndex, dispatch*/
      511) {
        n = /*$data*/
        r[2];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const f = no(r, n, o);
          l[o] ? l[o].p(f, i) : (l[o] = lo(f), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    i: K,
    o: K,
    d(r) {
      Ne(l, r), r && z(t);
    }
  };
}
function kc(e, t, n) {
  let l, r, i, o, f, a;
  const s = Bo(), { data: u, xGet: c, yGet: d, xRange: g, x: b, yRange: _, xScale: y, y: p, height: k, zGet: L, zScale: F, z: x, custom: q } = Mn("LayerCake");
  H(e, u, (E) => n(2, l = E)), H(e, c, (E) => n(3, r = E)), H(e, d, (E) => n(7, a = E)), H(e, g, (E) => n(4, i = E)), H(e, y, (E) => n(5, o = E)), H(e, x, (E) => n(6, f = E));
  let P = null;
  st(() => {
    setTimeout(() => n(1, I = !0), 100);
  });
  let I = !1;
  return [
    P,
    I,
    l,
    r,
    i,
    o,
    f,
    a,
    s,
    u,
    c,
    d,
    g,
    y,
    x,
    (E, D) => {
      n(0, P = E), s("hover", D);
    },
    () => {
      n(0, P = null), s("hover", null);
    }
  ];
}
class ba extends me {
  constructor(t) {
    super(), ge(this, t, kc, pc, de, {});
  }
}
const wc = (e) => ({}), ro = (e) => ({}), vc = (e) => ({}), io = (e) => ({});
function Sc(e) {
  let t, n, l, r, i, o, f, a, s, u = !!/*title*/
  e[1] && oo(e);
  r = new $l({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: tt(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        e[0] ?? 1
      ],
      yScale: Jl(),
      yDomain: Ke(
        /*counts*/
        e[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        e[4]
      ) ? (
        /*colorScale*/
        e[4]
      ) : Ke(0, 1.00001, 1 / /*data*/
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
      $$slots: { default: [zc] },
      $$scope: { ctx: e }
    }
  });
  const c = [Nc, Rc, Lc], d = [];
  function g(b, _) {
    return (
      /*$$slots*/
      b[10].caption ? 0 : (
        /*hoveredIndex*/
        b[7] != null ? 1 : (
          /*mostCommonDatum*/
          b[8] ? 2 : -1
        )
      )
    );
  }
  return ~(f = g(e)) && (a = d[f] = c[f](e)), {
    c() {
      t = w("div"), u && u.c(), n = j(), l = w("div"), Y(r.$$.fragment), i = j(), o = w("div"), a && a.c(), Z(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), Z(l, "height", "6px"), m(l, "class", "rounded overflow-hidden mb-1"), m(o, "class", "text-xs text-gray-800 dark:text-gray-200"), m(t, "class", "gap-1 items-center"), ie(
        t,
        "flex",
        /*horizontalLayout*/
        e[2]
      );
    },
    m(b, _) {
      R(b, t, _), u && u.m(t, null), h(t, n), h(t, l), V(r, l, null), h(t, i), h(t, o), ~f && d[f].m(o, null), s = !0;
    },
    p(b, _) {
      /*title*/
      b[1] ? u ? u.p(b, _) : (u = oo(b), u.c(), u.m(t, n)) : u && (u.d(1), u = null);
      const y = {};
      _ & /*width*/
      1 && (y.xRange = [
        0,
        /*width*/
        b[0] ?? 1
      ]), _ & /*counts*/
      32 && (y.yDomain = Ke(
        /*counts*/
        b[5].length
      )), _ & /*colorScale, data*/
      80 && (y.yRange = Array.isArray(
        /*colorScale*/
        b[4]
      ) ? (
        /*colorScale*/
        b[4]
      ) : Ke(0, 1.00001, 1 / /*data*/
      (b[6].length - 1)).map(
        /*func_2*/
        b[17]
      )), _ & /*data*/
      64 && (y.data = /*data*/
      b[6]), _ & /*hoveredIndex*/
      128 && (y.custom = { hoveredGet: (
        /*func_3*/
        b[18]
      ) }), _ & /*$$scope, hoveredIndex*/
      524416 && (y.$$scope = { dirty: _, ctx: b }), r.$set(y), (!s || _ & /*width*/
      1) && Z(
        l,
        "width",
        /*width*/
        b[0] == null ? "100%" : `${/*width*/
        b[0]}px`
      );
      let p = f;
      f = g(b), f === p ? ~f && d[f].p(b, _) : (a && (ne(), N(d[p], 1, 1, () => {
        d[p] = null;
      }), le()), ~f ? (a = d[f], a ? a.p(b, _) : (a = d[f] = c[f](b), a.c()), S(a, 1), a.m(o, null)) : a = null), (!s || _ & /*horizontalLayout*/
      4) && ie(
        t,
        "flex",
        /*horizontalLayout*/
        b[2]
      );
    },
    i(b) {
      s || (S(r.$$.fragment, b), S(a), s = !0);
    },
    o(b) {
      N(r.$$.fragment, b), N(a), s = !1;
    },
    d(b) {
      b && z(t), u && u.d(), W(r), ~f && d[f].d();
    }
  };
}
function Cc(e) {
  let t, n, l, r, i, o, f, a, s = !!/*title*/
  e[1] && ao(e);
  l = new $l({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: tt(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        e[0] ?? 1
      ],
      yScale: Jl(),
      yDomain: Ke(
        /*counts*/
        e[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        e[4]
      ) ? (
        /*colorScale*/
        e[4]
      ) : Ke(0, 1.00001, 1 / /*data*/
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
      $$slots: { default: [Ec] },
      $$scope: { ctx: e }
    }
  });
  const u = [Tc, qc, Dc], c = [];
  function d(g, b) {
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
  return ~(o = d(e)) && (f = c[o] = u[o](e)), {
    c() {
      s && s.c(), t = j(), n = w("div"), Y(l.$$.fragment), r = j(), i = w("div"), f && f.c(), Z(
        n,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), Z(n, "height", "6px"), m(n, "class", "rounded overflow-hidden mb-1"), m(i, "class", "text-xs text-gray-800 dark:text-gray-200");
    },
    m(g, b) {
      s && s.m(g, b), R(g, t, b), R(g, n, b), V(l, n, null), R(g, r, b), R(g, i, b), ~o && c[o].m(i, null), a = !0;
    },
    p(g, b) {
      /*title*/
      g[1] ? s ? s.p(g, b) : (s = ao(g), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null);
      const _ = {};
      b & /*width*/
      1 && (_.xRange = [
        0,
        /*width*/
        g[0] ?? 1
      ]), b & /*counts*/
      32 && (_.yDomain = Ke(
        /*counts*/
        g[5].length
      )), b & /*colorScale, data*/
      80 && (_.yRange = Array.isArray(
        /*colorScale*/
        g[4]
      ) ? (
        /*colorScale*/
        g[4]
      ) : Ke(0, 1.00001, 1 / /*data*/
      (g[6].length - 1)).map(
        /*func*/
        g[14]
      )), b & /*data*/
      64 && (_.data = /*data*/
      g[6]), b & /*hoveredIndex*/
      128 && (_.custom = { hoveredGet: (
        /*func_1*/
        g[15]
      ) }), b & /*$$scope, hoveredIndex*/
      524416 && (_.$$scope = { dirty: b, ctx: g }), l.$set(_), (!a || b & /*width*/
      1) && Z(
        n,
        "width",
        /*width*/
        g[0] == null ? "100%" : `${/*width*/
        g[0]}px`
      );
      let y = o;
      o = d(g), o === y ? ~o && c[o].p(g, b) : (f && (ne(), N(c[y], 1, 1, () => {
        c[y] = null;
      }), le()), ~o ? (f = c[o], f ? f.p(g, b) : (f = c[o] = u[o](g), f.c()), S(f, 1), f.m(i, null)) : f = null);
    },
    i(g) {
      a || (S(l.$$.fragment, g), S(f), a = !0);
    },
    o(g) {
      N(l.$$.fragment, g), N(f), a = !1;
    },
    d(g) {
      s && s.d(g), g && z(t), g && z(n), W(l), g && z(r), g && z(i), ~o && c[o].d();
    }
  };
}
function oo(e) {
  let t, n;
  return {
    c() {
      t = w("div"), n = G(
        /*title*/
        e[1]
      ), m(t, "class", "font-bold text-xs truncate text-right"), Z(t, "width", "84px");
    },
    m(l, r) {
      R(l, t, r), h(t, n);
    },
    p(l, r) {
      r & /*title*/
      2 && ee(
        n,
        /*title*/
        l[1]
      );
    },
    d(l) {
      l && z(t);
    }
  };
}
function Mc(e) {
  let t, n;
  return t = new ba({}), t.$on(
    "hover",
    /*hover_handler_1*/
    e[16]
  ), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p: K,
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function zc(e) {
  let t, n;
  return t = new ca({
    props: {
      $$slots: { default: [Mc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*$$scope, hoveredIndex*/
      524416 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function Lc(e) {
  let t, n = (
    /*makeTooltipText*/
    e[9](
      /*mostCommonDatum*/
      e[8]
    ) + ""
  ), l;
  return {
    c() {
      t = new Yl(!1), l = ce(), t.a = l;
    },
    m(r, i) {
      t.m(n, r, i), R(r, l, i);
    },
    p(r, i) {
      i & /*mostCommonDatum*/
      256 && n !== (n = /*makeTooltipText*/
      r[9](
        /*mostCommonDatum*/
        r[8]
      ) + "") && t.p(n);
    },
    i: K,
    o: K,
    d(r) {
      r && z(l), r && t.d();
    }
  };
}
function Rc(e) {
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
      t = new Yl(!1), l = ce(), t.a = l;
    },
    m(r, i) {
      t.m(n, r, i), R(r, l, i);
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
    i: K,
    o: K,
    d(r) {
      r && z(l), r && t.d();
    }
  };
}
function Nc(e) {
  let t;
  const n = (
    /*#slots*/
    e[12].caption
  ), l = qe(
    n,
    e,
    /*$$scope*/
    e[19],
    ro
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
      524288) && xe(
        l,
        n,
        r,
        /*$$scope*/
        r[19],
        t ? Te(
          n,
          /*$$scope*/
          r[19],
          i,
          wc
        ) : Oe(
          /*$$scope*/
          r[19]
        ),
        ro
      );
    },
    i(r) {
      t || (S(l, r), t = !0);
    },
    o(r) {
      N(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function ao(e) {
  let t, n;
  return {
    c() {
      t = w("div"), n = G(
        /*title*/
        e[1]
      ), m(t, "class", "font-bold text-xs truncate text-right");
    },
    m(l, r) {
      R(l, t, r), h(t, n);
    },
    p(l, r) {
      r & /*title*/
      2 && ee(
        n,
        /*title*/
        l[1]
      );
    },
    d(l) {
      l && z(t);
    }
  };
}
function Ac(e) {
  let t, n;
  return t = new ba({}), t.$on(
    "hover",
    /*hover_handler*/
    e[13]
  ), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p: K,
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function Ec(e) {
  let t, n;
  return t = new ca({
    props: {
      $$slots: { default: [Ac] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*$$scope, hoveredIndex*/
      524416 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function Dc(e) {
  let t, n = (
    /*makeTooltipText*/
    e[9](
      /*mostCommonDatum*/
      e[8]
    ) + ""
  ), l;
  return {
    c() {
      t = new Yl(!1), l = ce(), t.a = l;
    },
    m(r, i) {
      t.m(n, r, i), R(r, l, i);
    },
    p(r, i) {
      i & /*mostCommonDatum*/
      256 && n !== (n = /*makeTooltipText*/
      r[9](
        /*mostCommonDatum*/
        r[8]
      ) + "") && t.p(n);
    },
    i: K,
    o: K,
    d(r) {
      r && z(l), r && t.d();
    }
  };
}
function qc(e) {
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
      t = new Yl(!1), l = ce(), t.a = l;
    },
    m(r, i) {
      t.m(n, r, i), R(r, l, i);
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
    i: K,
    o: K,
    d(r) {
      r && z(l), r && t.d();
    }
  };
}
function Tc(e) {
  let t;
  const n = (
    /*#slots*/
    e[12].caption
  ), l = qe(
    n,
    e,
    /*$$scope*/
    e[19],
    io
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
      524288) && xe(
        l,
        n,
        r,
        /*$$scope*/
        r[19],
        t ? Te(
          n,
          /*$$scope*/
          r[19],
          i,
          vc
        ) : Oe(
          /*$$scope*/
          r[19]
        ),
        io
      );
    },
    i(r) {
      t || (S(l, r), t = !0);
    },
    o(r) {
      N(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function xc(e) {
  let t, n, l, r;
  const i = [Cc, Sc], o = [];
  function f(a, s) {
    return (
      /*noParent*/
      a[3] ? 0 : 1
    );
  }
  return t = f(e), n = o[t] = i[t](e), {
    c() {
      n.c(), l = ce();
    },
    m(a, s) {
      o[t].m(a, s), R(a, l, s), r = !0;
    },
    p(a, [s]) {
      let u = t;
      t = f(a), t === u ? o[t].p(a, s) : (ne(), N(o[u], 1, 1, () => {
        o[u] = null;
      }), le(), n = o[t], n ? n.p(a, s) : (n = o[t] = i[t](a), n.c()), S(n, 1), n.m(l.parentNode, l));
    },
    i(a) {
      r || (S(n), r = !0);
    },
    o(a) {
      N(n), r = !1;
    },
    d(a) {
      o[t].d(a), a && z(l);
    }
  };
}
function Oc(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = Lr(l);
  let { width: o = null } = t, { title: f = null } = t, { horizontalLayout: a = !1 } = t, { noParent: s = !1 } = t, { colorScale: u = Array.from(Nf) } = t, { counts: c = null } = t, { order: d = [] } = t, g = [], b;
  he(",");
  let _ = he(".1~%"), y = 1;
  function p(O) {
    return `<strong>${_(O.count / y)}</strong> ${O.name}`;
  }
  let k = null;
  const L = (O) => n(7, b = O.detail ? O.detail.index : null), F = (O) => u(O), x = (O) => O.index == b, q = (O) => n(7, b = O.detail ? O.detail.index : null), P = (O) => u(O), I = (O) => O.index == b;
  return e.$$set = (O) => {
    "width" in O && n(0, o = O.width), "title" in O && n(1, f = O.title), "horizontalLayout" in O && n(2, a = O.horizontalLayout), "noParent" in O && n(3, s = O.noParent), "colorScale" in O && n(4, u = O.colorScale), "counts" in O && n(5, c = O.counts), "order" in O && n(11, d = O.order), "$$scope" in O && n(19, r = O.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*counts, order*/
    2080)
      if (c && d.length > 0) {
        let O = Object.values(c).reduce((E, D) => E + D, 0), M = 0;
        n(6, g = d.map((E, D) => {
          let B = M;
          return M += c[E] || 0, {
            start: B / O,
            end: M / O,
            index: D,
            name: E,
            count: c[E] || 0
          };
        }));
      } else
        n(6, g = []);
    e.$$.dirty & /*counts*/
    32 && (c ? y = Object.values(c).reduce((O, M) => O + M, 0) : y = 1), e.$$.dirty & /*data*/
    64 && (g.length > 0 ? n(8, k = g.reduce((O, M) => O.count > M.count ? O : M, g[0])) : n(8, k = null));
  }, [
    o,
    f,
    a,
    s,
    u,
    c,
    g,
    b,
    k,
    p,
    i,
    d,
    l,
    L,
    F,
    x,
    q,
    P,
    I,
    r
  ];
}
class Pc extends me {
  constructor(t) {
    super(), ge(this, t, Oc, xc, de, {
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
function hn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
hn.prototype = {
  constructor: hn,
  scale: function(e) {
    return e === 1 ? this : new hn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new hn(this.k, this.x + this.k * e, this.y + this.k * t);
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
hn.prototype;
function fo(e) {
  let t, n, l, r;
  const i = [Fc, Hc, Ic, jc], o = [];
  function f(a, s) {
    return (
      /*values*/
      a[0].type == "binary" ? 0 : (
        /*values*/
        a[0].type == "count" ? 1 : (
          /*values*/
          a[0].type == "continuous" ? 2 : (
            /*values*/
            a[0].type == "categorical" ? 3 : -1
          )
        )
      )
    );
  }
  return ~(t = f(e)) && (n = o[t] = i[t](e)), {
    c() {
      n && n.c(), l = ce();
    },
    m(a, s) {
      ~t && o[t].m(a, s), R(a, l, s), r = !0;
    },
    p(a, s) {
      let u = t;
      t = f(a), t === u ? ~t && o[t].p(a, s) : (n && (ne(), N(o[u], 1, 1, () => {
        o[u] = null;
      }), le()), ~t ? (n = o[t], n ? n.p(a, s) : (n = o[t] = i[t](a), n.c()), S(n, 1), n.m(l.parentNode, l)) : n = null);
    },
    i(a) {
      r || (S(n), r = !0);
    },
    o(a) {
      N(n), r = !1;
    },
    d(a) {
      ~t && o[t].d(a), a && z(l);
    }
  };
}
function jc(e) {
  let t, n;
  return t = new Pc({
    props: {
      order: Object.keys(
        /*values*/
        e[0].counts || {}
      ).sort(
        /*func*/
        e[2]
      ),
      counts: (
        /*values*/
        e[0].counts || {}
      ),
      width: null
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*values*/
      1 && (i.order = Object.keys(
        /*values*/
        l[0].counts || {}
      ).sort(
        /*func*/
        l[2]
      )), r & /*values*/
      1 && (i.counts = /*values*/
      l[0].counts || {}), t.$set(i);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function Ic(e) {
  let t, n;
  return t = new yc({
    props: {
      histValues: (
        /*values*/
        e[0].hist
      ),
      mean: (
        /*values*/
        e[0].mean ?? 0
      ),
      width: null
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*values*/
      1 && (i.histValues = /*values*/
      l[0].hist), r & /*values*/
      1 && (i.mean = /*values*/
      l[0].mean ?? 0), t.$set(i);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function Hc(e) {
  let t, n;
  return t = new qr({
    props: {
      value: (
        /*values*/
        (e[0].count ?? 0) / /*values*/
        (e[0].total ?? 1)
      ),
      width: null,
      color: "#d97706",
      fullBarColor: (
        /*$theme*/
        e[1] == "dark" ? "#374151" : "#e5e7eb"
      ),
      showFullBar: !0,
      $$slots: { caption: [Qc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*values*/
      1 && (i.value = /*values*/
      (l[0].count ?? 0) / /*values*/
      (l[0].total ?? 1)), r & /*$theme*/
      2 && (i.fullBarColor = /*$theme*/
      l[1] == "dark" ? "#374151" : "#e5e7eb"), r & /*$$scope, values*/
      9 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function Fc(e) {
  let t, n;
  return t = new qr({
    props: {
      value: (
        /*values*/
        e[0].mean ?? 0
      ),
      width: null,
      color: "#d97706",
      fullBarColor: (
        /*$theme*/
        e[1] == "dark" ? "#374151" : "#e5e7eb"
      ),
      showFullBar: !0,
      $$slots: { caption: [Bc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*values*/
      1 && (i.value = /*values*/
      l[0].mean ?? 0), r & /*$theme*/
      2 && (i.fullBarColor = /*$theme*/
      l[1] == "dark" ? "#374151" : "#e5e7eb"), r & /*$$scope, values*/
      9 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function Qc(e) {
  let t, n, l = he(",")(
    /*values*/
    e[0].count ?? 0
  ) + "", r, i, o = he(",")(
    /*values*/
    e[0].total ?? 1
  ) + "", f;
  return {
    c() {
      t = w("span"), n = w("strong"), r = G(l), i = G(`
        / `), f = G(o), m(t, "slot", "caption");
    },
    m(a, s) {
      R(a, t, s), h(t, n), h(n, r), h(t, i), h(t, f);
    },
    p(a, s) {
      s & /*values*/
      1 && l !== (l = he(",")(
        /*values*/
        a[0].count ?? 0
      ) + "") && ee(r, l), s & /*values*/
      1 && o !== (o = he(",")(
        /*values*/
        a[0].total ?? 1
      ) + "") && ee(f, o);
    },
    d(a) {
      a && z(t);
    }
  };
}
function Bc(e) {
  let t, n, l = he(".1%")(
    /*values*/
    e[0].mean ?? 0
  ) + "", r, i, o, f = he(".1%")(1 - /*values*/
  (e[0].mean ?? 0)) + "", a, s;
  return {
    c() {
      t = w("span"), n = w("strong"), r = G(l), i = G(`
        true,
        `), o = w("strong"), a = G(f), s = G(`
        false`), m(t, "slot", "caption");
    },
    m(u, c) {
      R(u, t, c), h(t, n), h(n, r), h(t, i), h(t, o), h(o, a), h(t, s);
    },
    p(u, c) {
      c & /*values*/
      1 && l !== (l = he(".1%")(
        /*values*/
        u[0].mean ?? 0
      ) + "") && ee(r, l), c & /*values*/
      1 && f !== (f = he(".1%")(1 - /*values*/
      (u[0].mean ?? 0)) + "") && ee(a, f);
    },
    d(u) {
      u && z(t);
    }
  };
}
function Gc(e) {
  let t, n, l = !!/*values*/
  e[0] && fo(e);
  return {
    c() {
      l && l.c(), t = ce();
    },
    m(r, i) {
      l && l.m(r, i), R(r, t, i), n = !0;
    },
    p(r, [i]) {
      /*values*/
      r[0] ? l ? (l.p(r, i), i & /*values*/
      1 && S(l, 1)) : (l = fo(r), l.c(), S(l, 1), l.m(t.parentNode, t)) : l && (ne(), N(l, 1, 1, () => {
        l = null;
      }), le());
    },
    i(r) {
      n || (S(l), n = !0);
    },
    o(r) {
      N(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && z(t);
    }
  };
}
function Vc(e, t, n) {
  let l;
  H(e, Il, (o) => n(1, l = o)), st(() => {
    console.log("mounted metric hcart");
  });
  let { values: r = null } = t;
  const i = (o, f) => {
    var a, s;
    return (((a = r.counts) == null ? void 0 : a[f]) ?? 0) - (((s = r.counts) == null ? void 0 : s[o]) ?? 0);
  };
  return e.$$set = (o) => {
    "values" in o && n(0, r = o.values);
  }, e.$$.update = () => {
    e.$$.dirty & /*values*/
    1 && console.log("values in metricchart:", r);
  }, [r, l, i];
}
class Ft extends me {
  constructor(t) {
    super(), ge(this, t, Vc, Gc, de, { values: 0 });
  }
}
function so(e) {
  var re;
  let t, n, l, r, i = (
    /*values*/
    (e[0].type || "unknown") + ""
  ), o, f, a, s, u, c, d, g, b, _, y, p = (
    /*formatNumber*/
    e[4](
      /*values*/
      ((re = e[0].values) == null ? void 0 : re.length) ?? 0
    ) + ""
  ), k, L, F, x, q, P, I, O, M, E, D, B, C;
  c = new _e({
    props: {
      icon: (
        /*showCountDetails*/
        e[1] ? Be : ft
      ),
      class: "text-gray-500 dark:text-gray-300"
    }
  });
  let T = (
    /*showCountDetails*/
    e[1] && uo(e)
  ), Q = !!/*values*/
  e[0].missingness && /*values*/
  (e[0].missingness.rate.count ?? 0) > 0 && go(e), U = (
    /*values*/
    e[0].types && ho(e)
  );
  const oe = [Kc, Wc], $ = [];
  function A(J, se) {
    var pe;
    return (
      /*values*/
      (pe = J[0].values) != null && pe.type ? 0 : 1
    );
  }
  return M = A(e), E = $[M] = oe[M](e), {
    c() {
      t = w("div"), n = w("span"), n.textContent = "Type:", l = j(), r = w("span"), o = G(i), f = j(), a = w("div"), s = w("div"), u = w("button"), Y(c.$$.fragment), d = j(), g = w("div"), b = w("span"), b.textContent = "Count:", _ = j(), y = w("span"), k = G(p), L = j(), F = w("span"), F.textContent = "rows", x = j(), T && T.c(), q = j(), Q && Q.c(), P = j(), U && U.c(), I = j(), O = w("div"), E.c(), m(n, "class", "font-semibold"), m(r, "class", "font-mono"), m(t, "class", "text-sm text-gray-700 dark:text-gray-300 mb-4"), m(b, "class", "font-bold text-gray-900 dark:text-gray-100"), m(y, "class", "tabular-nums text-gray-700 dark:text-gray-200"), m(F, "class", "text-gray-500 dark:text-gray-400"), m(u, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), m(u, "aria-label", "Toggle count details"), m(s, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-base w-full rounded-md overflow-hidden"), m(O, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-2 text-base w-full rounded-md"), m(a, "class", "space-y-2");
    },
    m(J, se) {
      R(J, t, se), h(t, n), h(t, l), h(t, r), h(r, o), R(J, f, se), R(J, a, se), h(a, s), h(s, u), V(c, u, null), h(u, d), h(u, g), h(g, b), h(g, _), h(g, y), h(y, k), h(g, L), h(g, F), h(s, x), T && T.m(s, null), h(a, q), Q && Q.m(a, null), h(a, P), U && U.m(a, null), h(a, I), h(a, O), $[M].m(O, null), D = !0, B || (C = te(
        u,
        "click",
        /*click_handler*/
        e[6]
      ), B = !0);
    },
    p(J, se) {
      var we;
      (!D || se & /*values*/
      1) && i !== (i = /*values*/
      (J[0].type || "unknown") + "") && ee(o, i);
      const pe = {};
      se & /*showCountDetails*/
      2 && (pe.icon = /*showCountDetails*/
      J[1] ? Be : ft), c.$set(pe), (!D || se & /*values*/
      1) && p !== (p = /*formatNumber*/
      J[4](
        /*values*/
        ((we = J[0].values) == null ? void 0 : we.length) ?? 0
      ) + "") && ee(k, p), /*showCountDetails*/
      J[1] ? T ? (T.p(J, se), se & /*showCountDetails*/
      2 && S(T, 1)) : (T = uo(J), T.c(), S(T, 1), T.m(s, null)) : T && (ne(), N(T, 1, 1, () => {
        T = null;
      }), le()), /*values*/
      J[0].missingness && /*values*/
      (J[0].missingness.rate.count ?? 0) > 0 ? Q ? (Q.p(J, se), se & /*values*/
      1 && S(Q, 1)) : (Q = go(J), Q.c(), S(Q, 1), Q.m(a, P)) : Q && (ne(), N(Q, 1, 1, () => {
        Q = null;
      }), le()), /*values*/
      J[0].types ? U ? (U.p(J, se), se & /*values*/
      1 && S(U, 1)) : (U = ho(J), U.c(), S(U, 1), U.m(a, I)) : U && (ne(), N(U, 1, 1, () => {
        U = null;
      }), le());
      let Ce = M;
      M = A(J), M === Ce ? $[M].p(J, se) : (ne(), N($[Ce], 1, 1, () => {
        $[Ce] = null;
      }), le(), E = $[M], E ? E.p(J, se) : (E = $[M] = oe[M](J), E.c()), S(E, 1), E.m(O, null));
    },
    i(J) {
      D || (S(c.$$.fragment, J), S(T), S(Q), S(U), S(E), D = !0);
    },
    o(J) {
      N(c.$$.fragment, J), N(T), N(Q), N(U), N(E), D = !1;
    },
    d(J) {
      J && z(t), J && z(f), J && z(a), W(c), T && T.d(), Q && Q.d(), U && U.d(), $[M].d(), B = !1, C();
    }
  };
}
function uo(e) {
  let t, n, l = (
    /*values*/
    e[0].ids && co(e)
  );
  return {
    c() {
      t = w("div"), l && l.c(), m(t, "class", "mx-2 px-2 py-2");
    },
    m(r, i) {
      R(r, t, i), l && l.m(t, null), n = !0;
    },
    p(r, i) {
      /*values*/
      r[0].ids ? l ? (l.p(r, i), i & /*values*/
      1 && S(l, 1)) : (l = co(r), l.c(), S(l, 1), l.m(t, null)) : l && (ne(), N(l, 1, 1, () => {
        l = null;
      }), le());
    },
    i(r) {
      n || (S(l), n = !0);
    },
    o(r) {
      N(l), n = !1;
    },
    d(r) {
      r && z(t), l && l.d();
    }
  };
}
function co(e) {
  let t, n, l, r, i, o, f, a, s, u;
  return r = new Ft({
    props: { values: (
      /*values*/
      e[0].ids.count
    ) }
  }), s = new Ft({
    props: {
      values: (
        /*values*/
        e[0].ids.count_per_trajectory
      )
    }
  }), {
    c() {
      t = w("div"), t.textContent = "Trajectories", n = j(), l = w("div"), Y(r.$$.fragment), i = j(), o = w("div"), o.textContent = "Timesteps per Trajectory", f = j(), a = w("div"), Y(s.$$.fragment), m(t, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), m(l, "class", "mb-2"), m(o, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), m(a, "class", "mb-2");
    },
    m(c, d) {
      R(c, t, d), R(c, n, d), R(c, l, d), V(r, l, null), R(c, i, d), R(c, o, d), R(c, f, d), R(c, a, d), V(s, a, null), u = !0;
    },
    p(c, d) {
      const g = {};
      d & /*values*/
      1 && (g.values = /*values*/
      c[0].ids.count), r.$set(g);
      const b = {};
      d & /*values*/
      1 && (b.values = /*values*/
      c[0].ids.count_per_trajectory), s.$set(b);
    },
    i(c) {
      u || (S(r.$$.fragment, c), S(s.$$.fragment, c), u = !0);
    },
    o(c) {
      N(r.$$.fragment, c), N(s.$$.fragment, c), u = !1;
    },
    d(c) {
      c && z(t), c && z(n), c && z(l), W(r), c && z(i), c && z(o), c && z(f), c && z(a), W(s);
    }
  };
}
function go(e) {
  let t, n, l, r, i, o, f, a, s = (
    /*formatPercent*/
    e[5](
      /*values*/
      (e[0].missingness.rate.count ?? 0) / /*values*/
      (e[0].missingness.rate.total ?? 1)
    ) + ""
  ), u, c, d, g, b, _, y;
  l = new _e({
    props: {
      icon: (
        /*showMissingnessDetails*/
        e[2] ? Be : ft
      ),
      class: "text-gray-500 dark:text-gray-300"
    }
  });
  let p = (
    /*showMissingnessDetails*/
    e[2] && mo(e)
  );
  return {
    c() {
      t = w("div"), n = w("button"), Y(l.$$.fragment), r = j(), i = w("div"), o = w("span"), o.textContent = "Missingness:", f = j(), a = w("span"), u = G(s), c = j(), d = w("span"), d.textContent = "of rows", g = j(), p && p.c(), m(o, "class", "font-bold text-gray-900 dark:text-gray-100"), m(a, "class", "tabular-nums text-gray-700 dark:text-gray-200"), m(d, "class", "text-gray-500 dark:text-gray-400"), m(n, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), m(n, "aria-label", "Toggle missingness details"), m(t, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-base w-full rounded-md overflow-hidden");
    },
    m(k, L) {
      R(k, t, L), h(t, n), V(l, n, null), h(n, r), h(n, i), h(i, o), h(i, f), h(i, a), h(a, u), h(i, c), h(i, d), h(t, g), p && p.m(t, null), b = !0, _ || (y = te(
        n,
        "click",
        /*click_handler_1*/
        e[7]
      ), _ = !0);
    },
    p(k, L) {
      const F = {};
      L & /*showMissingnessDetails*/
      4 && (F.icon = /*showMissingnessDetails*/
      k[2] ? Be : ft), l.$set(F), (!b || L & /*values*/
      1) && s !== (s = /*formatPercent*/
      k[5](
        /*values*/
        (k[0].missingness.rate.count ?? 0) / /*values*/
        (k[0].missingness.rate.total ?? 1)
      ) + "") && ee(u, s), /*showMissingnessDetails*/
      k[2] ? p ? (p.p(k, L), L & /*showMissingnessDetails*/
      4 && S(p, 1)) : (p = mo(k), p.c(), S(p, 1), p.m(t, null)) : p && (ne(), N(p, 1, 1, () => {
        p = null;
      }), le());
    },
    i(k) {
      b || (S(l.$$.fragment, k), S(p), b = !0);
    },
    o(k) {
      N(l.$$.fragment, k), N(p), b = !1;
    },
    d(k) {
      k && z(t), W(l), p && p.d(), _ = !1, y();
    }
  };
}
function mo(e) {
  let t, n, l = (
    /*values*/
    e[0].missingness && bo(e)
  );
  return {
    c() {
      t = w("div"), l && l.c(), m(t, "class", "mx-2 px-2 py-2");
    },
    m(r, i) {
      R(r, t, i), l && l.m(t, null), n = !0;
    },
    p(r, i) {
      /*values*/
      r[0].missingness ? l ? (l.p(r, i), i & /*values*/
      1 && S(l, 1)) : (l = bo(r), l.c(), S(l, 1), l.m(t, null)) : l && (ne(), N(l, 1, 1, () => {
        l = null;
      }), le());
    },
    i(r) {
      n || (S(l), n = !0);
    },
    o(r) {
      N(l), n = !1;
    },
    d(r) {
      r && z(t), l && l.d();
    }
  };
}
function bo(e) {
  let t, n, l, r, i, o, f, a, s, u;
  return r = new Ft({
    props: {
      values: (
        /*values*/
        e[0].missingness.rate
      )
    }
  }), s = new Ft({
    props: {
      values: (
        /*values*/
        e[0].missingness.rate_per_trajectory
      )
    }
  }), {
    c() {
      t = w("div"), t.textContent = "Number of Missing Values", n = j(), l = w("div"), Y(r.$$.fragment), i = j(), o = w("div"), o.textContent = "Missingness Rate per Trajectory", f = j(), a = w("div"), Y(s.$$.fragment), m(t, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), m(l, "class", "mb-2"), m(o, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), m(a, "class", "mb-2");
    },
    m(c, d) {
      R(c, t, d), R(c, n, d), R(c, l, d), V(r, l, null), R(c, i, d), R(c, o, d), R(c, f, d), R(c, a, d), V(s, a, null), u = !0;
    },
    p(c, d) {
      const g = {};
      d & /*values*/
      1 && (g.values = /*values*/
      c[0].missingness.rate), r.$set(g);
      const b = {};
      d & /*values*/
      1 && (b.values = /*values*/
      c[0].missingness.rate_per_trajectory), s.$set(b);
    },
    i(c) {
      u || (S(r.$$.fragment, c), S(s.$$.fragment, c), u = !0);
    },
    o(c) {
      N(r.$$.fragment, c), N(s.$$.fragment, c), u = !1;
    },
    d(c) {
      c && z(t), c && z(n), c && z(l), W(r), c && z(i), c && z(o), c && z(f), c && z(a), W(s);
    }
  };
}
function ho(e) {
  let t, n, l, r, i, o, f, a, s = (
    /*formatNumber*/
    e[4](Object.keys(
      /*values*/
      e[0].types.counts
    ).length ?? 0) + ""
  ), u, c, d, g, b, _, y;
  l = new _e({
    props: {
      icon: (
        /*showTypeDetails*/
        e[3] ? Be : ft
      ),
      class: "text-gray-500 dark:text-gray-300"
    }
  });
  let p = (
    /*showTypeDetails*/
    e[3] && _o(e)
  );
  return {
    c() {
      t = w("div"), n = w("button"), Y(l.$$.fragment), r = j(), i = w("div"), o = w("span"), o.textContent = "Data Elements:", f = j(), a = w("span"), u = G(s), c = j(), d = w("span"), d.textContent = "distinct elements", g = j(), p && p.c(), m(o, "class", "font-bold text-gray-900 dark:text-gray-100"), m(a, "class", "tabular-nums text-gray-700 dark:text-gray-200"), m(d, "class", "text-gray-500 dark:text-gray-400"), m(n, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), m(n, "aria-label", "Toggle type details"), m(t, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-base w-full rounded-md");
    },
    m(k, L) {
      R(k, t, L), h(t, n), V(l, n, null), h(n, r), h(n, i), h(i, o), h(i, f), h(i, a), h(a, u), h(i, c), h(i, d), h(t, g), p && p.m(t, null), b = !0, _ || (y = te(
        n,
        "click",
        /*click_handler_2*/
        e[8]
      ), _ = !0);
    },
    p(k, L) {
      const F = {};
      L & /*showTypeDetails*/
      8 && (F.icon = /*showTypeDetails*/
      k[3] ? Be : ft), l.$set(F), (!b || L & /*values*/
      1) && s !== (s = /*formatNumber*/
      k[4](Object.keys(
        /*values*/
        k[0].types.counts
      ).length ?? 0) + "") && ee(u, s), /*showTypeDetails*/
      k[3] ? p ? (p.p(k, L), L & /*showTypeDetails*/
      8 && S(p, 1)) : (p = _o(k), p.c(), S(p, 1), p.m(t, null)) : p && (ne(), N(p, 1, 1, () => {
        p = null;
      }), le());
    },
    i(k) {
      b || (S(l.$$.fragment, k), S(p), b = !0);
    },
    o(k) {
      N(l.$$.fragment, k), N(p), b = !1;
    },
    d(k) {
      k && z(t), W(l), p && p.d(), _ = !1, y();
    }
  };
}
function _o(e) {
  let t, n, l;
  return n = new Ft({
    props: { values: (
      /*values*/
      e[0].types
    ) }
  }), {
    c() {
      t = w("div"), Y(n.$$.fragment), m(t, "class", "mx-2 px-2 py-2");
    },
    m(r, i) {
      R(r, t, i), V(n, t, null), l = !0;
    },
    p(r, i) {
      const o = {};
      i & /*values*/
      1 && (o.values = /*values*/
      r[0].types), n.$set(o);
    },
    i(r) {
      l || (S(n.$$.fragment, r), l = !0);
    },
    o(r) {
      N(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && z(t), W(n);
    }
  };
}
function Wc(e) {
  let t;
  return {
    c() {
      t = w("div"), t.innerHTML = 'Values: <span class="font-normal text-gray-500 dark:text-gray-400">none</span>', m(t, "class", "text-sm font-bold text-gray-900 dark:text-gray-100 mr-2");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: K,
    i: K,
    o: K,
    d(n) {
      n && z(t);
    }
  };
}
function Kc(e) {
  let t, n, l, r;
  return l = new Ft({
    props: { values: (
      /*values*/
      e[0].values
    ) }
  }), {
    c() {
      t = w("div"), t.textContent = "Values:", n = j(), Y(l.$$.fragment), m(t, "class", "mb-2 text-sm font-bold text-gray-900 dark:text-gray-100 mr-2");
    },
    m(i, o) {
      R(i, t, o), R(i, n, o), V(l, i, o), r = !0;
    },
    p(i, o) {
      const f = {};
      o & /*values*/
      1 && (f.values = /*values*/
      i[0].values), l.$set(f);
    },
    i(i) {
      r || (S(l.$$.fragment, i), r = !0);
    },
    o(i) {
      N(l.$$.fragment, i), r = !1;
    },
    d(i) {
      i && z(t), i && z(n), W(l, i);
    }
  };
}
function Xc(e) {
  let t, n, l = (
    /*values*/
    e[0] && /*values*/
    (e[0].ids || /*values*/
    e[0].missingness || /*values*/
    e[0].values) && so(e)
  );
  return {
    c() {
      l && l.c(), t = ce();
    },
    m(r, i) {
      l && l.m(r, i), R(r, t, i), n = !0;
    },
    p(r, [i]) {
      /*values*/
      r[0] && /*values*/
      (r[0].ids || /*values*/
      r[0].missingness || /*values*/
      r[0].values) ? l ? (l.p(r, i), i & /*values*/
      1 && S(l, 1)) : (l = so(r), l.c(), S(l, 1), l.m(t.parentNode, t)) : l && (ne(), N(l, 1, 1, () => {
        l = null;
      }), le());
    },
    i(r) {
      n || (S(l), n = !0);
    },
    o(r) {
      N(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && z(t);
    }
  };
}
function Yc(e, t, n) {
  let { values: l = null } = t, r = !1, i = !1, o = !1;
  const f = he(","), a = he(".2~%"), s = () => n(1, r = !r), u = () => n(2, i = !i), c = () => n(3, o = !o);
  return e.$$set = (d) => {
    "values" in d && n(0, l = d.values);
  }, e.$$.update = () => {
    e.$$.dirty & /*values*/
    1 && (console.log("QueryResultCard - Values received:"), console.log("  values:", l)), e.$$.dirty & /*values*/
    1 && console.log("values", l);
  }, [
    l,
    r,
    i,
    o,
    f,
    a,
    s,
    u,
    c
  ];
}
class ha extends me {
  constructor(t) {
    super(), ge(this, t, Yc, Xc, de, { values: 0 });
  }
}
function yo(e, t, n) {
  const l = e.slice();
  return l[4] = t[n], l;
}
function po(e) {
  let t, n, l, r, i;
  n = new ha({
    props: { values: (
      /*data*/
      e[1].result
    ) }
  });
  let o = (
    /*data*/
    e[1].dataset_queries && /*data*/
    e[1].dataset_queries.length > 0 && ko(e)
  );
  return {
    c() {
      t = w("div"), Y(n.$$.fragment), l = j(), o && o.c(), r = ce(), m(t, "class", "p-4 border-t border-gray-200 dark:border-gray-700");
    },
    m(f, a) {
      R(f, t, a), V(n, t, null), R(f, l, a), o && o.m(f, a), R(f, r, a), i = !0;
    },
    p(f, a) {
      const s = {};
      a & /*data*/
      2 && (s.values = /*data*/
      f[1].result), n.$set(s), /*data*/
      f[1].dataset_queries && /*data*/
      f[1].dataset_queries.length > 0 ? o ? o.p(f, a) : (o = ko(f), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
    },
    i(f) {
      i || (S(n.$$.fragment, f), i = !0);
    },
    o(f) {
      N(n.$$.fragment, f), i = !1;
    },
    d(f) {
      f && z(t), W(n), f && z(l), o && o.d(f), f && z(r);
    }
  };
}
function ko(e) {
  let t, n, l, r = (
    /*data*/
    e[1].dataset_queries
  ), i = [];
  for (let o = 0; o < r.length; o += 1)
    i[o] = wo(yo(e, r, o));
  return {
    c() {
      t = w("div"), n = w("div"), n.textContent = "SQL Queries", l = j();
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      m(n, "class", "text-xs font-semibold text-gray-500 mb-1 uppercase"), m(t, "class", "p-4 border-t border-gray-200 dark:border-gray-700");
    },
    m(o, f) {
      R(o, t, f), h(t, n), h(t, l);
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(t, null);
    },
    p(o, f) {
      if (f & /*data*/
      2) {
        r = /*data*/
        o[1].dataset_queries;
        let a;
        for (a = 0; a < r.length; a += 1) {
          const s = yo(o, r, a);
          i[a] ? i[a].p(s, f) : (i[a] = wo(s), i[a].c(), i[a].m(t, null));
        }
        for (; a < i.length; a += 1)
          i[a].d(1);
        i.length = r.length;
      }
    },
    d(o) {
      o && z(t), Ne(i, o);
    }
  };
}
function wo(e) {
  let t, n = (
    /*sql*/
    e[4] + ""
  ), l;
  return {
    c() {
      t = w("pre"), l = G(n), m(t, "class", "bg-white dark:bg-gray-900 text-xs font-mono p-2 rounded");
    },
    m(r, i) {
      R(r, t, i), h(t, l);
    },
    p(r, i) {
      i & /*data*/
      2 && n !== (n = /*sql*/
      r[4] + "") && ee(l, n);
    },
    d(r) {
      r && z(t);
    }
  };
}
function Uc(e) {
  let t, n, l, r, i, o, f, a, s, u;
  o = new _e({
    props: {
      icon: (
        /*isExpanded*/
        e[2] ? Hl : Be
      ),
      class: "text-gray-600 dark:text-gray-300"
    }
  });
  let c = (
    /*isExpanded*/
    e[2] && po(e)
  );
  return {
    c() {
      t = w("div"), n = w("button"), l = w("span"), r = G(
        /*queryText*/
        e[0]
      ), i = j(), Y(o.$$.fragment), f = j(), c && c.c(), m(l, "class", "text-sm font-mono text-gray-700 dark:text-gray-300 truncate flex-1"), m(n, "class", "w-full px-3 py-2 text-left flex items-center justify-between bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none"), m(t, "class", "border border-gray-300 dark:border-gray-600 rounded-md mb-2 overflow-hidden");
    },
    m(d, g) {
      R(d, t, g), h(t, n), h(n, l), h(l, r), h(n, i), V(o, n, null), h(t, f), c && c.m(t, null), a = !0, s || (u = te(
        n,
        "click",
        /*toggleExpanded*/
        e[3]
      ), s = !0);
    },
    p(d, [g]) {
      (!a || g & /*queryText*/
      1) && ee(
        r,
        /*queryText*/
        d[0]
      );
      const b = {};
      g & /*isExpanded*/
      4 && (b.icon = /*isExpanded*/
      d[2] ? Hl : Be), o.$set(b), /*isExpanded*/
      d[2] ? c ? (c.p(d, g), g & /*isExpanded*/
      4 && S(c, 1)) : (c = po(d), c.c(), S(c, 1), c.m(t, null)) : c && (ne(), N(c, 1, 1, () => {
        c = null;
      }), le());
    },
    i(d) {
      a || (S(o.$$.fragment, d), S(c), a = !0);
    },
    o(d) {
      N(o.$$.fragment, d), N(c), a = !1;
    },
    d(d) {
      d && z(t), W(o), c && c.d(), s = !1, u();
    }
  };
}
function Zc(e, t, n) {
  let { queryText: l } = t, { data: r } = t, i = !1;
  function o() {
    n(2, i = !i);
  }
  return e.$$set = (f) => {
    "queryText" in f && n(0, l = f.queryText), "data" in f && n(1, r = f.data);
  }, [l, r, i, o];
}
class Jc extends me {
  constructor(t) {
    super(), ge(this, t, Zc, Uc, de, { queryText: 0, data: 1 });
  }
}
function vo(e, t, n) {
  const l = e.slice();
  return l[5] = t[n][0], l[6] = t[n][1], l;
}
function So(e) {
  let t, n, l, r, i;
  const o = [e0, $c], f = [];
  function a(s, u) {
    return u & /*subqueries*/
    4 && (n = null), n == null && (n = Object.keys(
      /*subqueries*/
      s[2]
    ).length > 0), n ? 0 : 1;
  }
  return l = a(e, -1), r = f[l] = o[l](e), {
    c() {
      t = w("div"), r.c(), m(t, "class", "space-y-2 mt-3");
    },
    m(s, u) {
      R(s, t, u), f[l].m(t, null), i = !0;
    },
    p(s, u) {
      let c = l;
      l = a(s, u), l === c ? f[l].p(s, u) : (ne(), N(f[c], 1, 1, () => {
        f[c] = null;
      }), le(), r = f[l], r ? r.p(s, u) : (r = f[l] = o[l](s), r.c()), S(r, 1), r.m(t, null));
    },
    i(s) {
      i || (S(r), i = !0);
    },
    o(s) {
      N(r), i = !1;
    },
    d(s) {
      s && z(t), f[l].d();
    }
  };
}
function $c(e) {
  let t;
  return {
    c() {
      t = w("div"), t.textContent = "No subqueries yet", m(t, "class", "text-center py-8 text-gray-900 dark:text-gray-100");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: K,
    i: K,
    o: K,
    d(n) {
      n && z(t);
    }
  };
}
function e0(e) {
  let t, n, l = Object.entries(
    /*subqueries*/
    e[2]
  ), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = Co(vo(e, l, o));
  const i = (o) => N(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      t = ce();
    },
    m(o, f) {
      for (let a = 0; a < r.length; a += 1)
        r[a] && r[a].m(o, f);
      R(o, t, f), n = !0;
    },
    p(o, f) {
      if (f & /*Object, subqueries*/
      4) {
        l = Object.entries(
          /*subqueries*/
          o[2]
        );
        let a;
        for (a = 0; a < l.length; a += 1) {
          const s = vo(o, l, a);
          r[a] ? (r[a].p(s, f), S(r[a], 1)) : (r[a] = Co(s), r[a].c(), S(r[a], 1), r[a].m(t.parentNode, t));
        }
        for (ne(), a = l.length; a < r.length; a += 1)
          i(a);
        le();
      }
    },
    i(o) {
      if (!n) {
        for (let f = 0; f < l.length; f += 1)
          S(r[f]);
        n = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let f = 0; f < r.length; f += 1)
        N(r[f]);
      n = !1;
    },
    d(o) {
      Ne(r, o), o && z(t);
    }
  };
}
function Co(e) {
  let t, n;
  return t = new Jc({
    props: {
      queryText: (
        /*queryText*/
        e[5]
      ),
      data: (
        /*subqueryData*/
        e[6]
      )
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*subqueries*/
      4 && (i.queryText = /*queryText*/
      l[5]), r & /*subqueries*/
      4 && (i.data = /*subqueryData*/
      l[6]), t.$set(i);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function t0(e) {
  let t, n, l, r, i, o, f, a, s, u, c;
  o = new _e({
    props: {
      icon: (
        /*enabled*/
        e[0] ? Hl : Be
      ),
      class: "inline"
    }
  });
  let d = (
    /*enabled*/
    e[0] && So(e)
  );
  return {
    c() {
      t = w("div"), n = w("button"), l = w("h3"), l.textContent = "Subqueries", r = j(), i = w("div"), Y(o.$$.fragment), f = j(), d && d.c(), m(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100"), m(i, "class", "p-2 text-gray-800 dark:text-gray-200"), m(n, "class", "block flex items-center justify-between mb-2 bg-transparent hover:opacity-50"), m(t, "class", a = "p-2 mb-0 border-0 rounded-none " + /*width*/
      e[1] + " transition-colors duration-200"), ie(t, "opacity-50", Object.keys(
        /*subqueries*/
        e[2]
      ).length == 0);
    },
    m(g, b) {
      R(g, t, b), h(t, n), h(n, l), h(n, r), h(n, i), V(o, i, null), h(t, f), d && d.m(t, null), s = !0, u || (c = te(
        n,
        "click",
        /*click_handler*/
        e[4]
      ), u = !0);
    },
    p(g, [b]) {
      const _ = {};
      b & /*enabled*/
      1 && (_.icon = /*enabled*/
      g[0] ? Hl : Be), o.$set(_), /*enabled*/
      g[0] ? d ? (d.p(g, b), b & /*enabled*/
      1 && S(d, 1)) : (d = So(g), d.c(), S(d, 1), d.m(t, null)) : d && (ne(), N(d, 1, 1, () => {
        d = null;
      }), le()), (!s || b & /*width*/
      2 && a !== (a = "p-2 mb-0 border-0 rounded-none " + /*width*/
      g[1] + " transition-colors duration-200")) && m(t, "class", a), (!s || b & /*width, Object, subqueries*/
      6) && ie(t, "opacity-50", Object.keys(
        /*subqueries*/
        g[2]
      ).length == 0);
    },
    i(g) {
      s || (S(o.$$.fragment, g), S(d), s = !0);
    },
    o(g) {
      N(o.$$.fragment, g), N(d), s = !1;
    },
    d(g) {
      g && z(t), W(o), d && d.d(), u = !1, c();
    }
  };
}
function n0(e, t, n) {
  let { width: l = "w-full max-w-2xl" } = t, { enabled: r = !1 } = t, { subqueries: i = {} } = t, { idsLength: o = 0 } = t;
  const f = () => n(0, r = !r);
  return e.$$set = (a) => {
    "width" in a && n(1, l = a.width), "enabled" in a && n(0, r = a.enabled), "subqueries" in a && n(2, i = a.subqueries), "idsLength" in a && n(3, o = a.idsLength);
  }, e.$$.update = () => {
    e.$$.dirty & /*subqueries, enabled*/
    5 && (console.log("🔍 SubquerySection - subqueries changed:", i), console.log("🔍 SubquerySection - enabled:", r), console.log("🔍 SubquerySection - subqueries keys:", Object.keys(i)));
  }, [r, l, i, o, f];
}
class l0 extends me {
  constructor(t) {
    super(), ge(this, t, n0, t0, de, {
      width: 1,
      enabled: 0,
      subqueries: 2,
      idsLength: 3
    });
  }
}
function r0(e) {
  let t, n;
  return t = new _e({ props: { icon: Ka } }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p: K,
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function i0(e) {
  let t, n;
  return t = new _e({ props: { icon: Za } }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p: K,
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function o0(e) {
  let t, n, l, r, i, o, f, a, s, u, c, d, g, b;
  const _ = [i0, r0], y = [];
  function p(k, L) {
    return (
      /*copied*/
      k[3] ? 0 : 1
    );
  }
  return r = p(e), i = y[r] = _[r](e), a = new _e({ props: { icon: Wo } }), {
    c() {
      t = w("div"), n = w("div"), l = w("button"), i.c(), o = j(), f = w("button"), Y(a.$$.fragment), s = j(), u = w("code"), c = G(
        /*content*/
        e[0]
      ), m(l, "class", "p-2 hover:opacity-50 text-gray-700 dark:text-gray-200 text-sm"), m(l, "title", "Copy"), m(f, "class", "p-2 hover:opacity-50 text-gray-700 dark:text-gray-200 text-sm"), m(f, "title", "Run this query"), m(n, "class", "flex items-center absolute right-0 top-0 mr-2 mt-2"), m(u, "class", "font-mono whitespace-pre-line"), m(
        u,
        "id",
        /*highlightedViewID*/
        e[4]
      ), m(t, "class", "bg-gray-100 dark:bg-gray-800 rounded-md my-2 p-4 pr-12 relative text-gray-900 dark:text-gray-100");
    },
    m(k, L) {
      R(k, t, L), h(t, n), h(n, l), y[r].m(l, null), h(n, o), h(n, f), V(a, f, null), h(t, s), h(t, u), h(u, c), e[8](u), d = !0, g || (b = [
        te(
          l,
          "click",
          /*click_handler*/
          e[6]
        ),
        te(
          f,
          "click",
          /*click_handler_1*/
          e[7]
        )
      ], g = !0);
    },
    p(k, [L]) {
      let F = r;
      r = p(k), r === F ? y[r].p(k, L) : (ne(), N(y[F], 1, 1, () => {
        y[F] = null;
      }), le(), i = y[r], i ? i.p(k, L) : (i = y[r] = _[r](k), i.c()), S(i, 1), i.m(l, null)), (!d || L & /*content*/
      1) && ee(
        c,
        /*content*/
        k[0]
      );
    },
    i(k) {
      d || (S(i), S(a.$$.fragment, k), d = !0);
    },
    o(k) {
      N(i), N(a.$$.fragment, k), d = !1;
    },
    d(k) {
      k && z(t), y[r].d(), W(a), e[8](null), g = !1, Se(b);
    }
  };
}
function a0(e, t, n) {
  let { content: l = "" } = t, { onRun: r = () => {
  } } = t, i = "highlightView-" + new Array(20).fill(0).map(() => Math.floor(Math.random() * 10)).join(""), o, f = !1;
  async function a(d) {
    try {
      await navigator.clipboard.writeText(d);
    } catch {
      const b = document.createElement("textarea");
      b.value = d, document.body.appendChild(b), b.select(), document.execCommand("copy"), document.body.removeChild(b);
    }
    n(3, f = !0), setTimeout(() => n(3, f = !1), 5e3);
  }
  const s = () => a(l), u = () => r(l);
  function c(d) {
    Me[d ? "unshift" : "push"](() => {
      o = d, n(2, o), n(0, l), n(4, i);
    });
  }
  return e.$$set = (d) => {
    "content" in d && n(0, l = d.content), "onRun" in d && n(1, r = d.onRun);
  }, e.$$.update = () => {
    e.$$.dirty & /*highlightView, content*/
    5 && o && l && (n(2, o.innerText = la(l), o), ta({
      selector: `#${i}`,
      patterns: na
    }));
  }, [
    l,
    r,
    o,
    f,
    i,
    a,
    s,
    u,
    c
  ];
}
class f0 extends me {
  constructor(t) {
    super(), ge(this, t, a0, o0, de, { content: 0, onRun: 1 });
  }
}
function Mo(e, t, n) {
  const l = e.slice();
  return l[7] = t[n], l[9] = n, l;
}
function s0(e) {
  let t, n = Ro(
    /*block*/
    e[7].content
  ) + "";
  return {
    c() {
      t = w("div"), m(t, "class", "leading-relaxed mb-2");
    },
    m(l, r) {
      R(l, t, r), t.innerHTML = n;
    },
    p(l, r) {
      r & /*blocks*/
      8 && n !== (n = Ro(
        /*block*/
        l[7].content
      ) + "") && (t.innerHTML = n);
    },
    i: K,
    o: K,
    d(l) {
      l && z(t);
    }
  };
}
function u0(e) {
  let t, n;
  return t = new f0({
    props: {
      content: (
        /*block*/
        e[7].content
      ),
      onRun: (
        /*onRun*/
        e[0]
      )
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*blocks*/
      8 && (i.content = /*block*/
      l[7].content), r & /*onRun*/
      1 && (i.onRun = /*onRun*/
      l[0]), t.$set(i);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function zo(e) {
  let t, n, l, r;
  const i = [u0, s0], o = [];
  function f(a, s) {
    return (
      /*block*/
      a[7].type === "code" ? 0 : 1
    );
  }
  return t = f(e), n = o[t] = i[t](e), {
    c() {
      n.c(), l = ce();
    },
    m(a, s) {
      o[t].m(a, s), R(a, l, s), r = !0;
    },
    p(a, s) {
      let u = t;
      t = f(a), t === u ? o[t].p(a, s) : (ne(), N(o[u], 1, 1, () => {
        o[u] = null;
      }), le(), n = o[t], n ? n.p(a, s) : (n = o[t] = i[t](a), n.c()), S(n, 1), n.m(l.parentNode, l));
    },
    i(a) {
      r || (S(n), r = !0);
    },
    o(a) {
      N(n), r = !1;
    },
    d(a) {
      o[t].d(a), a && z(l);
    }
  };
}
function Lo(e) {
  let t, n, l = /*collapsed*/ e[1] ? "More" : "Less", r, i, o;
  return {
    c() {
      t = w("div"), n = w("a"), r = G(l), m(n, "class", "text-blue-600 dark:text-blue-400 hover:opacity-50 text-sm"), m(n, "href", "#");
    },
    m(f, a) {
      R(f, t, a), h(t, n), h(n, r), i || (o = te(
        n,
        "click",
        /*click_handler*/
        e[6]
      ), i = !0);
    },
    p(f, a) {
      a & /*collapsed*/
      2 && l !== (l = /*collapsed*/
      f[1] ? "More" : "Less") && ee(r, l);
    },
    d(f) {
      f && z(t), i = !1, o();
    }
  };
}
function c0(e) {
  let t, n, l, r = (
    /*blocks*/
    e[3]
  ), i = [];
  for (let a = 0; a < r.length; a += 1)
    i[a] = zo(Mo(e, r, a));
  const o = (a) => N(i[a], 1, 1, () => {
    i[a] = null;
  });
  let f = (
    /*collapsible*/
    e[2] && Lo(e)
  );
  return {
    c() {
      for (let a = 0; a < i.length; a += 1)
        i[a].c();
      t = j(), f && f.c(), n = ce();
    },
    m(a, s) {
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(a, s);
      R(a, t, s), f && f.m(a, s), R(a, n, s), l = !0;
    },
    p(a, [s]) {
      if (s & /*blocks, onRun, formatMarkdown*/
      9) {
        r = /*blocks*/
        a[3];
        let u;
        for (u = 0; u < r.length; u += 1) {
          const c = Mo(a, r, u);
          i[u] ? (i[u].p(c, s), S(i[u], 1)) : (i[u] = zo(c), i[u].c(), S(i[u], 1), i[u].m(t.parentNode, t));
        }
        for (ne(), u = r.length; u < i.length; u += 1)
          o(u);
        le();
      }
      /*collapsible*/
      a[2] ? f ? f.p(a, s) : (f = Lo(a), f.c(), f.m(n.parentNode, n)) : f && (f.d(1), f = null);
    },
    i(a) {
      if (!l) {
        for (let s = 0; s < r.length; s += 1)
          S(i[s]);
        l = !0;
      }
    },
    o(a) {
      i = i.filter(Boolean);
      for (let s = 0; s < i.length; s += 1)
        N(i[s]);
      l = !1;
    },
    d(a) {
      Ne(i, a), a && z(t), f && f.d(a), a && z(n);
    }
  };
}
function d0(e) {
  const t = e.split(`
`), n = [];
  let l = !1, r = [], i = [];
  for (let o of t)
    o.startsWith("```") ? l ? (l = !1, n.push({
      type: "code",
      content: r.join(`
`)
    }), r = []) : (l = !0, o.slice(3).trim(), i.length && (n.push({
      type: "text",
      content: i.join(`
`)
    }), i = [])) : l ? r.push(o) : i.push(o);
  return i.length && n.push({
    type: "text",
    content: i.join(`
`)
  }), n;
}
function Ro(e) {
  let t = e;
  return t = t.replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\*\*([^\*\n]+)(\*\*|$)/g, "<strong>$1</strong>").replace(/\*([^\*\n]+)\*/g, "<em>$1</em>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>'), t = t.replace(new RegExp("(?<!<\\/[ou]l>)\\n", "g"), "<br>"), t;
}
function g0(e, t, n) {
  let l, { text: r } = t, { collapseLength: i = null } = t, { onRun: o = () => {
  } } = t, f = [], a = !1;
  const s = () => n(1, a = !a);
  return e.$$set = (u) => {
    "text" in u && n(4, r = u.text), "collapseLength" in u && n(5, i = u.collapseLength), "onRun" in u && n(0, o = u.onRun);
  }, e.$$.update = () => {
    e.$$.dirty & /*collapseLength, text*/
    48 && n(2, l = !!i && r.length > i), e.$$.dirty & /*text*/
    16 && n(1, a = !1), e.$$.dirty & /*collapsible, collapsed, text, collapseLength*/
    54 && n(3, f = d0(l && a ? r.slice(0, i) + "..." : r));
  }, [o, a, l, f, r, i, s];
}
class _a extends me {
  constructor(t) {
    super(), ge(this, t, g0, c0, de, { text: 4, collapseLength: 5, onRun: 0 });
  }
}
function m0(e) {
  let t, n, l, r, i;
  const o = [y0, _0, h0], f = [];
  function a(s, u) {
    return (
      /*isLoading*/
      s[2] ? 0 : (
        /*error*/
        s[3] ? 1 : (
          /*llmResponse*/
          s[4] ? 2 : -1
        )
      )
    );
  }
  return ~(n = a(e)) && (l = f[n] = o[n](e)), {
    c() {
      t = w("div"), l && l.c(), m(t, "class", r = "h-full " + /*scrollable*/
      (e[7] ? "overflow-auto" : ""));
    },
    m(s, u) {
      R(s, t, u), ~n && f[n].m(t, null), i = !0;
    },
    p(s, u) {
      let c = n;
      n = a(s), n === c ? ~n && f[n].p(s, u) : (l && (ne(), N(f[c], 1, 1, () => {
        f[c] = null;
      }), le()), ~n ? (l = f[n], l ? l.p(s, u) : (l = f[n] = o[n](s), l.c()), S(l, 1), l.m(t, null)) : l = null), (!i || u & /*scrollable*/
      128 && r !== (r = "h-full " + /*scrollable*/
      (s[7] ? "overflow-auto" : ""))) && m(t, "class", r);
    },
    i(s) {
      i || (S(l), i = !0);
    },
    o(s) {
      N(l), i = !1;
    },
    d(s) {
      s && z(t), ~n && f[n].d();
    }
  };
}
function b0(e) {
  let t, n, l, r, i, o, f, a, s, u, c, d, g, b, _;
  return o = new _e({
    props: { icon: Vo, class: "inline mr-2" }
  }), u = new _e({
    props: {
      icon: Go,
      class: "inline mr-2"
    }
  }), {
    c() {
      t = w("div"), n = w("textarea"), l = j(), r = w("div"), i = w("button"), Y(o.$$.fragment), f = G(`
          History`), a = j(), s = w("button"), Y(u.$$.fragment), c = G(`
          Ask AI`), m(n, "class", "w-full h-full p-4 pb-16 bg-transparent text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none overflow-hidden min-h-[120px] relative z-20"), m(n, "placeholder", "Ask me to generate, update, or explain a TempoQL query..."), n.disabled = /*isLoading*/
      e[2], m(n, "rows", "5"), m(i, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), m(i, "title", "View query history"), m(s, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50"), s.disabled = d = !/*question*/
      e[0].trim() || /*isLoading*/
      e[2], m(r, "class", "absolute right-0 bottom-0 mr-4 mb-4 flex justify-end items-center gap-2 z-50"), m(t, "class", "relative w-full min-h-0 flex-auto");
    },
    m(y, p) {
      R(y, t, p), h(t, n), e[20](n), It(
        n,
        /*question*/
        e[0]
      ), h(t, l), h(t, r), h(r, i), V(o, i, null), h(i, f), h(r, a), h(r, s), V(u, s, null), h(s, c), g = !0, b || (_ = [
        te(
          n,
          "input",
          /*textarea_input_handler*/
          e[21]
        ),
        te(
          n,
          "keydown",
          /*handleKeydown*/
          e[13]
        ),
        te(i, "click", function() {
          nt(
            /*onHistoryClick*/
            e[8]
          ) && e[8].apply(this, arguments);
        }),
        te(
          s,
          "click",
          /*click_handler_2*/
          e[22]
        )
      ], b = !0);
    },
    p(y, p) {
      e = y, (!g || p & /*isLoading*/
      4) && (n.disabled = /*isLoading*/
      e[2]), p & /*question*/
      1 && It(
        n,
        /*question*/
        e[0]
      ), (!g || p & /*question, isLoading*/
      5 && d !== (d = !/*question*/
      e[0].trim() || /*isLoading*/
      e[2])) && (s.disabled = d);
    },
    i(y) {
      g || (S(o.$$.fragment, y), S(u.$$.fragment, y), g = !0);
    },
    o(y) {
      N(o.$$.fragment, y), N(u.$$.fragment, y), g = !1;
    },
    d(y) {
      y && z(t), e[20](null), W(o), W(u), b = !1, Se(_);
    }
  };
}
function h0(e) {
  let t, n, l, r;
  return l = new _a({
    props: {
      text: (
        /*llmResponse*/
        e[4]
      ),
      onRun: (
        /*onRun*/
        e[1]
      )
    }
  }), {
    c() {
      t = w("div"), n = w("div"), Y(l.$$.fragment), m(n, "class", "text-gray-700 dark:text-gray-200 text-sm leading-relaxed prose prose-sm max-w-none"), m(t, "class", "flex-1 overflow-y-auto ai-scrollbar");
    },
    m(i, o) {
      R(i, t, o), h(t, n), V(l, n, null), r = !0;
    },
    p(i, o) {
      const f = {};
      o & /*llmResponse*/
      16 && (f.text = /*llmResponse*/
      i[4]), o & /*onRun*/
      2 && (f.onRun = /*onRun*/
      i[1]), l.$set(f);
    },
    i(i) {
      r || (S(l.$$.fragment, i), r = !0);
    },
    o(i) {
      N(l.$$.fragment, i), r = !1;
    },
    d(i) {
      i && z(t), W(l);
    }
  };
}
function _0(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = w("div"), n = w("h3"), n.textContent = "Error", l = j(), r = w("div"), i = G(
        /*error*/
        e[3]
      ), m(n, "class", "text-lg font-medium text-red-700 dark:text-red-100 mb-2"), m(r, "class", "text-sm font-mono text-gray-800 dark:text-gray-100"), m(t, "class", "bg-red-50 dark:bg-red-800/40 rounded-lg border border-red-200 dark:border-red-400 p-4 mb-4");
    },
    m(o, f) {
      R(o, t, f), h(t, n), h(t, l), h(t, r), h(r, i);
    },
    p(o, f) {
      f & /*error*/
      8 && ee(
        i,
        /*error*/
        o[3]
      );
    },
    i: K,
    o: K,
    d(o) {
      o && z(t);
    }
  };
}
function y0(e) {
  let t;
  return {
    c() {
      t = w("h4"), t.innerHTML = `<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 dark:border-blue-400"></span>
           AI is thinking...`, m(t, "class", "text-blue-600 dark:text-blue-400 font-medium text-sm");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: K,
    i: K,
    o: K,
    d(n) {
      n && z(t);
    }
  };
}
function p0(e) {
  let t, n, l, r, i, o, f, a, s, u, c, d, g, b, _, y, p, k, L, F, x, q, P, I, O, M;
  p = new _e({
    props: {
      icon: (
        /*apiStatusInfo*/
        e[11].icon
      ),
      class: "inline mr-2"
    }
  });
  const E = [b0, m0], D = [];
  function B(C, T) {
    return (
      /*tab*/
      C[9] == "query" ? 0 : 1
    );
  }
  return x = B(e), q = D[x] = E[x](e), {
    c() {
      t = w("div"), n = w("div"), l = w("h3"), l.textContent = "AI Assistant", r = j(), i = w("button"), o = G("Query"), a = j(), s = w("button"), u = G("Response"), g = j(), b = w("div"), _ = j(), y = w("div"), Y(p.$$.fragment), k = j(), L = G(
        /*apiStatus*/
        e[5]
      ), F = j(), q.c(), m(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100 pr-2"), m(i, "class", f = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*tab*/
      (e[9] === "query" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800")), m(i, "type", "button"), m(s, "class", c = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 disabled:opacity-50 " + /*tab*/
      (e[9] === "response" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800")), s.disabled = d = !/*llmResponse*/
      e[4] && !/*error*/
      e[3], m(s, "type", "button"), m(b, "class", "flex-auto"), m(y, "class", "flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"), m(n, "class", "flex items-center mb-4 gap-2 shrink-0"), m(t, "class", P = "px-4 pb-4 " + /*width*/
      e[6] + " h-full flex flex-col");
    },
    m(C, T) {
      R(C, t, T), h(t, n), h(n, l), h(n, r), h(n, i), h(i, o), h(n, a), h(n, s), h(s, u), h(n, g), h(n, b), h(n, _), h(n, y), V(p, y, null), h(y, k), h(y, L), h(t, F), D[x].m(t, null), I = !0, O || (M = [
        te(
          i,
          "click",
          /*click_handler*/
          e[18]
        ),
        te(
          s,
          "click",
          /*click_handler_1*/
          e[19]
        )
      ], O = !0);
    },
    p(C, [T]) {
      (!I || T & /*tab*/
      512 && f !== (f = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*tab*/
      (C[9] === "query" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"))) && m(i, "class", f), (!I || T & /*tab*/
      512 && c !== (c = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 disabled:opacity-50 " + /*tab*/
      (C[9] === "response" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"))) && m(s, "class", c), (!I || T & /*llmResponse, error*/
      24 && d !== (d = !/*llmResponse*/
      C[4] && !/*error*/
      C[3])) && (s.disabled = d);
      const Q = {};
      T & /*apiStatusInfo*/
      2048 && (Q.icon = /*apiStatusInfo*/
      C[11].icon), p.$set(Q), (!I || T & /*apiStatus*/
      32) && ee(
        L,
        /*apiStatus*/
        C[5]
      );
      let U = x;
      x = B(C), x === U ? D[x].p(C, T) : (ne(), N(D[U], 1, 1, () => {
        D[U] = null;
      }), le(), q = D[x], q ? q.p(C, T) : (q = D[x] = E[x](C), q.c()), S(q, 1), q.m(t, null)), (!I || T & /*width*/
      64 && P !== (P = "px-4 pb-4 " + /*width*/
      C[6] + " h-full flex flex-col")) && m(t, "class", P);
    },
    i(C) {
      I || (S(p.$$.fragment, C), S(q), I = !0);
    },
    o(C) {
      N(p.$$.fragment, C), N(q), I = !1;
    },
    d(C) {
      C && z(t), W(p), D[x].d(), O = !1, Se(M);
    }
  };
}
function k0(e, t, n) {
  let l, { onSubmit: r = () => {
  } } = t, { onRun: i = () => {
  } } = t, { isLoading: o = !1 } = t, { error: f = "" } = t, { llmResponse: a = "" } = t, { apiStatus: s = "Checking API connection..." } = t, { width: u = "w-full" } = t, { scrollable: c = !0 } = t, { extractedQuery: d = "" } = t, { hasExtractedQuery: g = !1 } = t, { onQueryExtracted: b = () => {
  } } = t, { onHistoryClick: _ = () => {
  } } = t, y = "query", { question: p = "" } = t, k;
  function L() {
    p.trim() && (r(p.trim()), k && k.focus());
  }
  function F(E) {
    E.key === "Enter" && !E.shiftKey && (E.preventDefault(), L());
  }
  function x(E) {
    return E.includes("Configured") || E.includes("ready") ? {
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      icon: Qa
    } : E.includes("Not configured") || E.includes("Invalid") ? {
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      icon: nf
    } : {
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      icon: $a
    };
  }
  const q = () => n(9, y = "query"), P = () => n(9, y = "response");
  function I(E) {
    Me[E ? "unshift" : "push"](() => {
      k = E, n(10, k);
    });
  }
  function O() {
    p = this.value, n(0, p);
  }
  const M = () => {
    L(), n(9, y = "response");
  };
  return e.$$set = (E) => {
    "onSubmit" in E && n(14, r = E.onSubmit), "onRun" in E && n(1, i = E.onRun), "isLoading" in E && n(2, o = E.isLoading), "error" in E && n(3, f = E.error), "llmResponse" in E && n(4, a = E.llmResponse), "apiStatus" in E && n(5, s = E.apiStatus), "width" in E && n(6, u = E.width), "scrollable" in E && n(7, c = E.scrollable), "extractedQuery" in E && n(15, d = E.extractedQuery), "hasExtractedQuery" in E && n(16, g = E.hasExtractedQuery), "onQueryExtracted" in E && n(17, b = E.onQueryExtracted), "onHistoryClick" in E && n(8, _ = E.onHistoryClick), "question" in E && n(0, p = E.question);
  }, e.$$.update = () => {
    e.$$.dirty & /*hasExtractedQuery, extractedQuery, onQueryExtracted*/
    229376 && g && d && (console.log("🤖 AIAssistant: Query extracted, triggering handler:", d), b()), e.$$.dirty & /*apiStatus*/
    32 && n(11, l = x(s));
  }, [
    p,
    i,
    o,
    f,
    a,
    s,
    u,
    c,
    _,
    y,
    k,
    l,
    L,
    F,
    r,
    d,
    g,
    b,
    q,
    P,
    I,
    O,
    M
  ];
}
class w0 extends me {
  constructor(t) {
    super(), ge(this, t, k0, p0, de, {
      onSubmit: 14,
      onRun: 1,
      isLoading: 2,
      error: 3,
      llmResponse: 4,
      apiStatus: 5,
      width: 6,
      scrollable: 7,
      extractedQuery: 15,
      hasExtractedQuery: 16,
      onQueryExtracted: 17,
      onHistoryClick: 8,
      question: 0
    });
  }
}
function No(e) {
  let t, n, l, r;
  function i(f) {
    e[24](f);
  }
  let o = {
    onSubmit: (
      /*onLLMSubmit*/
      e[9]
    ),
    llmResponse: (
      /*llmResponse*/
      e[10]
    ),
    isLoading: (
      /*llmLoading*/
      e[11]
    ),
    error: (
      /*llmError*/
      e[12]
    ),
    apiStatus: (
      /*apiStatus*/
      e[14]
    ),
    width: "w-full",
    scrollable: !0,
    extractedQuery: (
      /*extractedQuery*/
      e[15]
    ),
    hasExtractedQuery: (
      /*hasExtractedQuery*/
      e[17]
    ),
    onQueryExtracted: (
      /*onQueryExtracted*/
      e[18]
    ),
    onHistoryClick: (
      /*onHistoryClick*/
      e[19]
    ),
    onRun: (
      /*func*/
      e[23]
    )
  };
  return (
    /*aiQuestion*/
    e[1] !== void 0 && (o.question = /*aiQuestion*/
    e[1]), n = new w0({ props: o }), Me.push(() => kn(n, "question", i)), {
      c() {
        t = w("div"), Y(n.$$.fragment), m(t, "class", "w-full h-1/2 overflow-hidden");
      },
      m(f, a) {
        R(f, t, a), V(n, t, null), r = !0;
      },
      p(f, a) {
        const s = {};
        a & /*onLLMSubmit*/
        512 && (s.onSubmit = /*onLLMSubmit*/
        f[9]), a & /*llmResponse*/
        1024 && (s.llmResponse = /*llmResponse*/
        f[10]), a & /*llmLoading*/
        2048 && (s.isLoading = /*llmLoading*/
        f[11]), a & /*llmError*/
        4096 && (s.error = /*llmError*/
        f[12]), a & /*apiStatus*/
        16384 && (s.apiStatus = /*apiStatus*/
        f[14]), a & /*extractedQuery*/
        32768 && (s.extractedQuery = /*extractedQuery*/
        f[15]), a & /*hasExtractedQuery*/
        131072 && (s.hasExtractedQuery = /*hasExtractedQuery*/
        f[17]), a & /*onQueryExtracted*/
        262144 && (s.onQueryExtracted = /*onQueryExtracted*/
        f[18]), a & /*onHistoryClick*/
        524288 && (s.onHistoryClick = /*onHistoryClick*/
        f[19]), a & /*textInput, onRun*/
        9 && (s.onRun = /*func*/
        f[23]), !l && a & /*aiQuestion*/
        2 && (l = !0, s.question = /*aiQuestion*/
        f[1], pn(() => l = !1)), n.$set(s);
      },
      i(f) {
        r || (S(n.$$.fragment, f), r = !0);
      },
      o(f) {
        N(n.$$.fragment, f), r = !1;
      },
      d(f) {
        f && z(t), W(n);
      }
    }
  );
}
function Ao(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = w("div"), n = w("h3"), n.textContent = "Query Error", l = j(), r = w("div"), i = G(
        /*queryError*/
        e[5]
      ), m(n, "class", "text-lg font-medium text-red-700 dark:text-red-100 mb-2"), m(r, "class", "text-sm font-mono text-gray-800 dark:text-gray-100"), m(t, "class", "bg-red-50 dark:bg-red-800/40 rounded-lg border border-red-200 dark:border-red-400 p-4 mb-4");
    },
    m(o, f) {
      R(o, t, f), h(t, n), h(t, l), h(t, r), h(r, i);
    },
    p(o, f) {
      f & /*queryError*/
      32 && ee(
        i,
        /*queryError*/
        o[5]
      );
    },
    d(o) {
      o && z(t);
    }
  };
}
function Eo(e) {
  let t, n, l, r, i, o, f, a, s, u, c, d, g;
  o = new _e({
    props: {
      icon: Go,
      class: "inline mr-2"
    }
  });
  function b(k, L) {
    return (
      /*queryError*/
      k[5] ? S0 : v0
    );
  }
  let _ = b(e), y = _(e), p = (
    /*llmExplanation*/
    e[16] && Do(e)
  );
  return {
    c() {
      t = w("div"), n = w("div"), l = w("h3"), l.textContent = "Explanation", r = j(), i = w("button"), Y(o.$$.fragment), f = j(), y.c(), s = j(), p && p.c(), m(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100"), m(i, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50"), i.disabled = a = (!/*values*/
      e[6] || Object.keys(
        /*values*/
        e[6]
      ).length == 0) && !/*queryError*/
      e[5], m(n, "class", "flex items-center justify-between mb-2"), m(t, "class", u = "px-2 mb-4 " + /*width*/
      e[8] + " dark:text-gray-100"), ie(t, "opacity-50", (!/*values*/
      e[6] || Object.keys(
        /*values*/
        e[6]
      ).length == 0) && !/*queryError*/
      e[5]);
    },
    m(k, L) {
      R(k, t, L), h(t, n), h(n, l), h(n, r), h(n, i), V(o, i, null), h(i, f), y.m(i, null), h(t, s), p && p.m(t, null), c = !0, d || (g = te(
        i,
        "click",
        /*click_handler*/
        e[25]
      ), d = !0);
    },
    p(k, L) {
      _ !== (_ = b(k)) && (y.d(1), y = _(k), y && (y.c(), y.m(i, null))), (!c || L & /*values, queryError*/
      96 && a !== (a = (!/*values*/
      k[6] || Object.keys(
        /*values*/
        k[6]
      ).length == 0) && !/*queryError*/
      k[5])) && (i.disabled = a), /*llmExplanation*/
      k[16] ? p ? (p.p(k, L), L & /*llmExplanation*/
      65536 && S(p, 1)) : (p = Do(k), p.c(), S(p, 1), p.m(t, null)) : p && (ne(), N(p, 1, 1, () => {
        p = null;
      }), le()), (!c || L & /*width*/
      256 && u !== (u = "px-2 mb-4 " + /*width*/
      k[8] + " dark:text-gray-100")) && m(t, "class", u), (!c || L & /*width, values, Object, queryError*/
      352) && ie(t, "opacity-50", (!/*values*/
      k[6] || Object.keys(
        /*values*/
        k[6]
      ).length == 0) && !/*queryError*/
      k[5]);
    },
    i(k) {
      c || (S(o.$$.fragment, k), S(p), c = !0);
    },
    o(k) {
      N(o.$$.fragment, k), N(p), c = !1;
    },
    d(k) {
      k && z(t), W(o), y.d(), p && p.d(), d = !1, g();
    }
  };
}
function v0(e) {
  let t;
  return {
    c() {
      t = G("Explain");
    },
    m(n, l) {
      R(n, t, l);
    },
    d(n) {
      n && z(t);
    }
  };
}
function S0(e) {
  let t;
  return {
    c() {
      t = G("Explain and Fix");
    },
    m(n, l) {
      R(n, t, l);
    },
    d(n) {
      n && z(t);
    }
  };
}
function Do(e) {
  let t, n;
  return t = new _a({
    props: {
      text: (
        /*llmExplanation*/
        e[16]
      ),
      collapseLength: 250,
      onRun: (
        /*func_1*/
        e[26]
      )
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*llmExplanation*/
      65536 && (i.text = /*llmExplanation*/
      l[16]), r & /*textInput, onRun*/
      9 && (i.onRun = /*func_1*/
      l[26]), t.$set(i);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function C0(e) {
  let t;
  return {
    c() {
      t = w("div"), t.textContent = "No query results", m(t, "class", "text-center py-8 text-gray-900 dark:text-gray-100");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: K,
    i: K,
    o: K,
    d(n) {
      n && z(t);
    }
  };
}
function M0(e) {
  let t, n;
  return t = new ha({ props: { values: (
    /*values*/
    e[6]
  ) } }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*values*/
      64 && (i.values = /*values*/
      l[6]), t.$set(i);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function z0(e) {
  let t, n, l, r, i, o, f, a, s, u, c, d, g, b, _, y, p, k, L, F, x;
  function q(C) {
    e[22](C);
  }
  let P = {
    dataFields: (
      /*dataFields*/
      e[2]
    ),
    onRun: (
      /*onRun*/
      e[3]
    ),
    onExplain: (
      /*onExplain*/
      e[4]
    ),
    onHistoryClick: (
      /*onQueryHistoryClick*/
      e[20]
    ),
    width: "w-full"
  };
  /*textInput*/
  e[0] !== void 0 && (P.value = /*textInput*/
  e[0]), r = new Hs({ props: P }), Me.push(() => kn(r, "value", q));
  let I = (
    /*llmAvailable*/
    e[13] && No(e)
  ), O = !!/*queryError*/
  e[5] && Ao(e), M = (
    /*llmAvailable*/
    e[13] && Eo(e)
  );
  const E = [M0, C0], D = [];
  function B(C, T) {
    return T & /*values*/
    64 && (b = null), b == null && (b = !!(/*values*/
    C[6] && Object.keys(
      /*values*/
      C[6]
    ).length > 0)), b ? 0 : 1;
  }
  return _ = B(e, -1), y = D[_] = E[_](e), L = new l0({
    props: {
      width: "w-full",
      subqueries: (
        /*subqueries*/
        e[7]
      )
    }
  }), {
    c() {
      t = w("div"), n = w("div"), l = w("div"), Y(r.$$.fragment), o = j(), I && I.c(), f = j(), a = w("div"), O && O.c(), s = j(), M && M.c(), u = j(), c = w("div"), d = w("div"), d.innerHTML = '<h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Query Result</h3>', g = j(), y.c(), k = j(), Y(L.$$.fragment), m(l, "class", "flex-auto"), m(n, "class", "w-1/2 shrink-0 flex flex-col h-full"), m(d, "class", "flex items-center justify-between mb-2"), m(c, "class", p = "px-2 mb-4 " + /*width*/
      e[8] + " dark:text-gray-100"), ie(c, "opacity-50", !/*values*/
      e[6] || Object.keys(
        /*values*/
        e[6]
      ).length == 0), m(a, "class", "flex-auto p-4 border-l border-gray-400 dark:border-gray-600 h-full overflow-auto"), m(t, "class", F = "flex " + /*width*/
      e[8] + " h-full");
    },
    m(C, T) {
      R(C, t, T), h(t, n), h(n, l), V(r, l, null), h(n, o), I && I.m(n, null), h(t, f), h(t, a), O && O.m(a, null), h(a, s), M && M.m(a, null), h(a, u), h(a, c), h(c, d), h(c, g), D[_].m(c, null), h(a, k), V(L, a, null), x = !0;
    },
    p(C, [T]) {
      const Q = {};
      T & /*dataFields*/
      4 && (Q.dataFields = /*dataFields*/
      C[2]), T & /*onRun*/
      8 && (Q.onRun = /*onRun*/
      C[3]), T & /*onExplain*/
      16 && (Q.onExplain = /*onExplain*/
      C[4]), T & /*onQueryHistoryClick*/
      1048576 && (Q.onHistoryClick = /*onQueryHistoryClick*/
      C[20]), !i && T & /*textInput*/
      1 && (i = !0, Q.value = /*textInput*/
      C[0], pn(() => i = !1)), r.$set(Q), /*llmAvailable*/
      C[13] ? I ? (I.p(C, T), T & /*llmAvailable*/
      8192 && S(I, 1)) : (I = No(C), I.c(), S(I, 1), I.m(n, null)) : I && (ne(), N(I, 1, 1, () => {
        I = null;
      }), le()), /*queryError*/
      C[5] ? O ? O.p(C, T) : (O = Ao(C), O.c(), O.m(a, s)) : O && (O.d(1), O = null), /*llmAvailable*/
      C[13] ? M ? (M.p(C, T), T & /*llmAvailable*/
      8192 && S(M, 1)) : (M = Eo(C), M.c(), S(M, 1), M.m(a, u)) : M && (ne(), N(M, 1, 1, () => {
        M = null;
      }), le());
      let U = _;
      _ = B(C, T), _ === U ? D[_].p(C, T) : (ne(), N(D[U], 1, 1, () => {
        D[U] = null;
      }), le(), y = D[_], y ? y.p(C, T) : (y = D[_] = E[_](C), y.c()), S(y, 1), y.m(c, null)), (!x || T & /*width*/
      256 && p !== (p = "px-2 mb-4 " + /*width*/
      C[8] + " dark:text-gray-100")) && m(c, "class", p), (!x || T & /*width, values, Object*/
      320) && ie(c, "opacity-50", !/*values*/
      C[6] || Object.keys(
        /*values*/
        C[6]
      ).length == 0);
      const oe = {};
      T & /*subqueries*/
      128 && (oe.subqueries = /*subqueries*/
      C[7]), L.$set(oe), (!x || T & /*width*/
      256 && F !== (F = "flex " + /*width*/
      C[8] + " h-full")) && m(t, "class", F);
    },
    i(C) {
      x || (S(r.$$.fragment, C), S(I), S(M), S(y), S(L.$$.fragment, C), x = !0);
    },
    o(C) {
      N(r.$$.fragment, C), N(I), N(M), N(y), N(L.$$.fragment, C), x = !1;
    },
    d(C) {
      C && z(t), W(r), I && I.d(), O && O.d(), M && M.d(), D[_].d(), W(L);
    }
  };
}
function L0(e, t, n) {
  let { textInput: l = "" } = t, { onTextInput: r = () => {
  } } = t, { dataFields: i = [] } = t, { onRun: o = () => {
  } } = t, { onExplain: f = () => {
  } } = t, { queryError: a = "" } = t, { values: s = {} } = t, { subqueries: u = {} } = t, { width: c = "w-full" } = t, { onLLMSubmit: d = () => {
  } } = t, { llmResponse: g = "" } = t, { llmLoading: b = !1 } = t, { llmError: _ = "" } = t, { llmAvailable: y = !1 } = t, { apiStatus: p = "" } = t, { extractedQuery: k = "" } = t, { llmExplanation: L = "" } = t, { hasExtractedQuery: F = !1 } = t, { onQueryExtracted: x = () => {
  } } = t, { onHistoryClick: q = () => {
  } } = t, { onQueryHistoryClick: P = () => {
  } } = t, { aiQuestion: I = "" } = t;
  function O(C) {
    l = C, n(0, l);
  }
  const M = (C) => {
    n(0, l = C), o();
  };
  function E(C) {
    I = C, n(1, I);
  }
  const D = () => {
    f();
  }, B = (C) => {
    n(0, l = C), o();
  };
  return e.$$set = (C) => {
    "textInput" in C && n(0, l = C.textInput), "onTextInput" in C && n(21, r = C.onTextInput), "dataFields" in C && n(2, i = C.dataFields), "onRun" in C && n(3, o = C.onRun), "onExplain" in C && n(4, f = C.onExplain), "queryError" in C && n(5, a = C.queryError), "values" in C && n(6, s = C.values), "subqueries" in C && n(7, u = C.subqueries), "width" in C && n(8, c = C.width), "onLLMSubmit" in C && n(9, d = C.onLLMSubmit), "llmResponse" in C && n(10, g = C.llmResponse), "llmLoading" in C && n(11, b = C.llmLoading), "llmError" in C && n(12, _ = C.llmError), "llmAvailable" in C && n(13, y = C.llmAvailable), "apiStatus" in C && n(14, p = C.apiStatus), "extractedQuery" in C && n(15, k = C.extractedQuery), "llmExplanation" in C && n(16, L = C.llmExplanation), "hasExtractedQuery" in C && n(17, F = C.hasExtractedQuery), "onQueryExtracted" in C && n(18, x = C.onQueryExtracted), "onHistoryClick" in C && n(19, q = C.onHistoryClick), "onQueryHistoryClick" in C && n(20, P = C.onQueryHistoryClick), "aiQuestion" in C && n(1, I = C.aiQuestion);
  }, [
    l,
    I,
    i,
    o,
    f,
    a,
    s,
    u,
    c,
    d,
    g,
    b,
    _,
    y,
    p,
    k,
    L,
    F,
    x,
    q,
    P,
    r,
    O,
    M,
    E,
    D,
    B
  ];
}
class R0 extends me {
  constructor(t) {
    super(), ge(this, t, L0, z0, de, {
      textInput: 0,
      onTextInput: 21,
      dataFields: 2,
      onRun: 3,
      onExplain: 4,
      queryError: 5,
      values: 6,
      subqueries: 7,
      width: 8,
      onLLMSubmit: 9,
      llmResponse: 10,
      llmLoading: 11,
      llmError: 12,
      llmAvailable: 13,
      apiStatus: 14,
      extractedQuery: 15,
      llmExplanation: 16,
      hasExtractedQuery: 17,
      onQueryExtracted: 18,
      onHistoryClick: 19,
      onQueryHistoryClick: 20,
      aiQuestion: 1
    });
  }
}
function qo(e) {
  let t, n, l, r, i, o = (
    /*message*/
    (e[1] || "Loading...") + ""
  ), f, a, s;
  return {
    c() {
      t = w("div"), n = w("div"), l = w("div"), r = w("div"), i = w("p"), f = G(o), a = j(), s = w("div"), s.innerHTML = '<div class="bg-blue-600 h-2 rounded-full animate-pulse" style="width: 100%"></div>', m(i, "class", "text-sm font-medium text-gray-900 dark:text-gray-100"), m(r, "class", "flex-1"), m(s, "class", "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"), m(l, "class", "space-y-3"), m(n, "class", "bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 w-1/2 p-6"), m(t, "class", "absolute top-0 left-0 right-0 top-0 bottom-0 bg-white/80 dark:bg-gray-900/80 flex items-center justify-center z-80");
    },
    m(u, c) {
      R(u, t, c), h(t, n), h(n, l), h(l, r), h(r, i), h(i, f), h(l, a), h(l, s);
    },
    p(u, c) {
      c & /*message*/
      2 && o !== (o = /*message*/
      (u[1] || "Loading...") + "") && ee(f, o);
    },
    d(u) {
      u && z(t);
    }
  };
}
function N0(e) {
  let t, n = (
    /*isLoading*/
    e[0] && qo(e)
  );
  return {
    c() {
      n && n.c(), t = ce();
    },
    m(l, r) {
      n && n.m(l, r), R(l, t, r);
    },
    p(l, [r]) {
      /*isLoading*/
      l[0] ? n ? n.p(l, r) : (n = qo(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: K,
    o: K,
    d(l) {
      n && n.d(l), l && z(t);
    }
  };
}
function A0(e, t, n) {
  let { isLoading: l = !1 } = t, { message: r = "" } = t, { width: i = "w-full" } = t;
  return e.$$set = (o) => {
    "isLoading" in o && n(0, l = o.isLoading), "message" in o && n(1, r = o.message), "width" in o && n(2, i = o.width);
  }, [l, r, i];
}
class E0 extends me {
  constructor(t) {
    super(), ge(this, t, A0, N0, de, { isLoading: 0, message: 1, width: 2 });
  }
}
function To(e, t, n) {
  const l = e.slice();
  return l[7] = t[n], l[9] = n, l;
}
function xo(e) {
  let t, n, l, r, i, o, f, a, s, u, c, d, g, b;
  s = new _e({ props: { icon: Xa } });
  function _(k, L) {
    return (
      /*history*/
      k[1].length === 0 ? q0 : D0
    );
  }
  let y = _(e), p = y(e);
  return {
    c() {
      t = w("div"), n = j(), l = w("div"), r = w("div"), i = w("div"), o = w("h3"), o.textContent = "Query History", f = j(), a = w("button"), Y(s.$$.fragment), u = j(), c = w("div"), p.c(), m(t, "class", "absolute top-0 left-0 w-full h-full bg-white/80 z-40"), m(o, "class", "font-medium text-gray-900"), m(a, "class", "text-gray-600 dark:text-gray-300 hover:opacity-50 transition-colors p-2"), m(a, "title", "Close history"), m(i, "class", "flex items-center justify-between px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white"), m(c, "class", "max-h-80 overflow-y-auto svelte-6p3axr"), m(r, "class", "bg-white dark:bg-gray-800 border-2 border-gray-300/50 dark:border-gray-600/2 rounded-lg w-2/3 h-2/3 overflow-auto pointer-events-auto"), m(l, "class", "absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 pointer-events-none");
    },
    m(k, L) {
      R(k, t, L), R(k, n, L), R(k, l, L), h(l, r), h(r, i), h(i, o), h(i, f), h(i, a), V(s, a, null), h(r, u), h(r, c), p.m(c, null), d = !0, g || (b = [
        te(t, "click", za(
          /*handleClickOutside*/
          e[4]
        )),
        te(a, "click", function() {
          nt(
            /*onClose*/
            e[2]
          ) && e[2].apply(this, arguments);
        })
      ], g = !0);
    },
    p(k, L) {
      e = k, y === (y = _(e)) && p ? p.p(e, L) : (p.d(1), p = y(e), p && (p.c(), p.m(c, null)));
    },
    i(k) {
      d || (S(s.$$.fragment, k), d = !0);
    },
    o(k) {
      N(s.$$.fragment, k), d = !1;
    },
    d(k) {
      k && z(t), k && z(n), k && z(l), W(s), p.d(), g = !1, Se(b);
    }
  };
}
function D0(e) {
  let t, n = (
    /*history*/
    e[1]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Po(To(e, n, r));
  return {
    c() {
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      t = ce();
    },
    m(r, i) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(r, i);
      R(r, t, i);
    },
    p(r, i) {
      if (i & /*onSelect, history, formatTimestamp*/
      10) {
        n = /*history*/
        r[1];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const f = To(r, n, o);
          l[o] ? l[o].p(f, i) : (l[o] = Po(f), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(r) {
      Ne(l, r), r && z(t);
    }
  };
}
function q0(e) {
  let t;
  return {
    c() {
      t = w("div"), t.textContent = "No query history yet", m(t, "class", "p-4 text-center text-gray-500 dark:text-gray-400 text-sm");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: K,
    d(n) {
      n && z(t);
    }
  };
}
function T0(e) {
  let t, n = (
    /*historyItem*/
    (e[7].query || "No query extracted") + ""
  ), l;
  return {
    c() {
      t = w("span"), l = G(n), m(t, "class", "font-mono");
    },
    m(r, i) {
      R(r, t, i), h(t, l);
    },
    p(r, i) {
      i & /*history*/
      2 && n !== (n = /*historyItem*/
      (r[7].query || "No query extracted") + "") && ee(l, n);
    },
    d(r) {
      r && z(t);
    }
  };
}
function x0(e) {
  let t = (
    /*historyItem*/
    e[7].question + ""
  ), n;
  return {
    c() {
      n = G(t);
    },
    m(l, r) {
      R(l, n, r);
    },
    p(l, r) {
      r & /*history*/
      2 && t !== (t = /*historyItem*/
      l[7].question + "") && ee(n, t);
    },
    d(l) {
      l && z(n);
    }
  };
}
function Oo(e) {
  let t, n = (
    /*historyItem*/
    e[7].answer + ""
  ), l;
  return {
    c() {
      t = w("p"), l = G(n), m(t, "class", "text-xs text-gray-600 dark:text-gray-300 line-clamp-2 mt-2 svelte-6p3axr");
    },
    m(r, i) {
      R(r, t, i), h(t, l);
    },
    p(r, i) {
      i & /*history*/
      2 && n !== (n = /*historyItem*/
      r[7].answer + "") && ee(l, n);
    },
    d(r) {
      r && z(t);
    }
  };
}
function Po(e) {
  let t, n, l, r, i, o = jo(
    /*historyItem*/
    e[7].timestamp
  ) + "", f, a, s, u, c;
  function d(p, k) {
    return (
      /*historyItem*/
      p[7].question ? x0 : T0
    );
  }
  let g = d(e), b = g(e), _ = (
    /*historyItem*/
    e[7].answer && Oo(e)
  );
  function y() {
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
      t = w("div"), n = w("div"), l = w("h4"), b.c(), r = j(), i = w("span"), f = G(o), a = j(), _ && _.c(), s = j(), m(l, "class", "text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-2 flex-1 svelte-6p3axr"), m(i, "class", "text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0"), m(n, "class", "flex items-start justify-between"), m(t, "class", "p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors");
    },
    m(p, k) {
      R(p, t, k), h(t, n), h(n, l), b.m(l, null), h(n, r), h(n, i), h(i, f), h(t, a), _ && _.m(t, null), h(t, s), u || (c = te(t, "click", y), u = !0);
    },
    p(p, k) {
      e = p, g === (g = d(e)) && b ? b.p(e, k) : (b.d(1), b = g(e), b && (b.c(), b.m(l, null))), k & /*history*/
      2 && o !== (o = jo(
        /*historyItem*/
        e[7].timestamp
      ) + "") && ee(f, o), /*historyItem*/
      e[7].answer ? _ ? _.p(e, k) : (_ = Oo(e), _.c(), _.m(t, s)) : _ && (_.d(1), _ = null);
    },
    d(p) {
      p && z(t), b.d(), _ && _.d(), u = !1, c();
    }
  };
}
function O0(e) {
  let t, n, l = (
    /*isVisible*/
    e[0] && xo(e)
  );
  return {
    c() {
      l && l.c(), t = ce();
    },
    m(r, i) {
      l && l.m(r, i), R(r, t, i), n = !0;
    },
    p(r, [i]) {
      /*isVisible*/
      r[0] ? l ? (l.p(r, i), i & /*isVisible*/
      1 && S(l, 1)) : (l = xo(r), l.c(), S(l, 1), l.m(t.parentNode, t)) : l && (ne(), N(l, 1, 1, () => {
        l = null;
      }), le());
    },
    i(r) {
      n || (S(l), n = !0);
    },
    o(r) {
      N(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && z(t);
    }
  };
}
function jo(e) {
  let t = /* @__PURE__ */ new Date();
  t.setTime(Date.parse(e)), console.log("format:", e, Date.parse(e));
  const l = (/* @__PURE__ */ new Date()).getTime() - t.getTime(), r = Math.floor(l / 6e4), i = Math.floor(l / 36e5), o = Math.floor(l / 864e5);
  return r < 1 ? "Just now" : r < 60 ? `${r}m ago` : i < 24 ? `${i}h ago` : `${o}d ago`;
}
function P0(e, t, n) {
  let { isVisible: l = !1 } = t, { history: r = [] } = t, { onClose: i = () => {
  } } = t, { onSelect: o = () => {
  } } = t, { position: f = { top: 0, left: 0 } } = t;
  function a(u) {
    u.target, i && i();
  }
  const s = (u) => o(u);
  return e.$$set = (u) => {
    "isVisible" in u && n(0, l = u.isVisible), "history" in u && n(1, r = u.history), "onClose" in u && n(2, i = u.onClose), "onSelect" in u && n(3, o = u.onSelect), "position" in u && n(5, f = u.position);
  }, [
    l,
    r,
    i,
    o,
    a,
    f,
    s
  ];
}
class Io extends me {
  constructor(t) {
    super(), ge(this, t, P0, O0, de, {
      isVisible: 0,
      history: 1,
      onClose: 2,
      onSelect: 3,
      position: 5
    });
  }
}
function j0(e) {
  let t, n, l, r;
  function i(a) {
    e[62](a);
  }
  function o(a) {
    e[63](a);
  }
  let f = {
    dataFields: (
      /*dataFields*/
      e[5]
    ),
    onRun: (
      /*handleRun*/
      e[50]
    ),
    onExplain: (
      /*handleLLMExplanation*/
      e[26]
    ),
    queryError: (
      /*$queryError*/
      e[12]
    ),
    values: (
      /*$values*/
      e[13]
    ),
    subqueries: (
      /*$subqueries*/
      e[14]
    ),
    onLLMSubmit: (
      /*handleLLMQuestionSubmit*/
      e[48]
    ),
    llmResponse: (
      /*$llmResponse*/
      e[6]
    ),
    llmLoading: (
      /*$llmLoading*/
      e[15]
    ),
    llmError: (
      /*$llmError*/
      e[16]
    ),
    llmAvailable: (
      /*$llmAvailable*/
      e[17]
    ),
    apiStatus: (
      /*$apiStatus*/
      e[18]
    ),
    extractedQuery: (
      /*$extractedQuery*/
      e[19]
    ),
    llmExplanation: (
      /*$llmExplanation*/
      e[20]
    ),
    hasExtractedQuery: (
      /*$hasExtractedQuery*/
      e[21]
    ),
    onQueryExtracted: (
      /*handleQueryExtraction*/
      e[42]
    ),
    onHistoryClick: (
      /*handleHistoryClick*/
      e[51]
    ),
    onQueryHistoryClick: (
      /*handleQueryHistoryClick*/
      e[52]
    ),
    width: "w-full"
  };
  return (
    /*$textInput*/
    e[7] !== void 0 && (f.textInput = /*$textInput*/
    e[7]), /*currentQuestion*/
    e[4] !== void 0 && (f.aiQuestion = /*currentQuestion*/
    e[4]), t = new R0({ props: f }), Me.push(() => kn(t, "textInput", i)), Me.push(() => kn(t, "aiQuestion", o)), {
      c() {
        Y(t.$$.fragment);
      },
      m(a, s) {
        V(t, a, s), r = !0;
      },
      p(a, s) {
        const u = {};
        s[0] & /*dataFields*/
        32 && (u.dataFields = /*dataFields*/
        a[5]), s[0] & /*$queryError*/
        4096 && (u.queryError = /*$queryError*/
        a[12]), s[0] & /*$values*/
        8192 && (u.values = /*$values*/
        a[13]), s[0] & /*$subqueries*/
        16384 && (u.subqueries = /*$subqueries*/
        a[14]), s[0] & /*$llmResponse*/
        64 && (u.llmResponse = /*$llmResponse*/
        a[6]), s[0] & /*$llmLoading*/
        32768 && (u.llmLoading = /*$llmLoading*/
        a[15]), s[0] & /*$llmError*/
        65536 && (u.llmError = /*$llmError*/
        a[16]), s[0] & /*$llmAvailable*/
        131072 && (u.llmAvailable = /*$llmAvailable*/
        a[17]), s[0] & /*$apiStatus*/
        262144 && (u.apiStatus = /*$apiStatus*/
        a[18]), s[0] & /*$extractedQuery*/
        524288 && (u.extractedQuery = /*$extractedQuery*/
        a[19]), s[0] & /*$llmExplanation*/
        1048576 && (u.llmExplanation = /*$llmExplanation*/
        a[20]), s[0] & /*$hasExtractedQuery*/
        2097152 && (u.hasExtractedQuery = /*$hasExtractedQuery*/
        a[21]), !n && s[0] & /*$textInput*/
        128 && (n = !0, u.textInput = /*$textInput*/
        a[7], pn(() => n = !1)), !l && s[0] & /*currentQuestion*/
        16 && (l = !0, u.aiQuestion = /*currentQuestion*/
        a[4], pn(() => l = !1)), t.$set(u);
      },
      i(a) {
        r || (S(t.$$.fragment, a), r = !0);
      },
      o(a) {
        N(t.$$.fragment, a), r = !1;
      },
      d(a) {
        W(t, a);
      }
    }
  );
}
function I0(e) {
  let t, n, l;
  function r(o) {
    e[61](o);
  }
  let i = {
    width: "w-full",
    scopes: (
      /*$scopes*/
      e[8]
    ),
    scopeConcepts: (
      /*$scopeConcepts*/
      e[9]
    ),
    isLoading: (
      /*$isLoading*/
      e[10]
    ),
    loadingMessage: (
      /*$loadingMessage*/
      e[11]
    ),
    onScopeSelect: (
      /*func*/
      e[58]
    ),
    onAnalyzeScope: (
      /*func_1*/
      e[59]
    ),
    onInsert: (
      /*func_2*/
      e[60]
    )
  };
  return (
    /*selectedScope*/
    e[0] !== void 0 && (i.selectedScope = /*selectedScope*/
    e[0]), t = new Ts({ props: i }), Me.push(() => kn(t, "selectedScope", r)), {
      c() {
        Y(t.$$.fragment);
      },
      m(o, f) {
        V(t, o, f), l = !0;
      },
      p(o, f) {
        const a = {};
        f[0] & /*$scopes*/
        256 && (a.scopes = /*$scopes*/
        o[8]), f[0] & /*$scopeConcepts*/
        512 && (a.scopeConcepts = /*$scopeConcepts*/
        o[9]), f[0] & /*$isLoading*/
        1024 && (a.isLoading = /*$isLoading*/
        o[10]), f[0] & /*$loadingMessage*/
        2048 && (a.loadingMessage = /*$loadingMessage*/
        o[11]), f[0] & /*$textInput, activeTab*/
        130 && (a.onInsert = /*func_2*/
        o[60]), !n && f[0] & /*selectedScope*/
        1 && (n = !0, a.selectedScope = /*selectedScope*/
        o[0], pn(() => n = !1)), t.$set(a);
      },
      i(o) {
        l || (S(t.$$.fragment, o), l = !0);
      },
      o(o) {
        N(t.$$.fragment, o), l = !1;
      },
      d(o) {
        W(t, o);
      }
    }
  );
}
function H0(e) {
  let t, n, l, r, i, o, f, a, s, u, c, d, g;
  n = new _f({
    props: {
      activeTab: (
        /*activeTab*/
        e[1]
      ),
      onTabChange: (
        /*handleTabChange*/
        e[49]
      )
    }
  });
  const b = [I0, j0], _ = [];
  function y(p, k) {
    return (
      /*activeTab*/
      p[1] === "data-elements" ? 0 : (
        /*activeTab*/
        p[1] === "query-inspector" ? 1 : -1
      )
    );
  }
  return ~(i = y(e)) && (o = _[i] = b[i](e)), a = new Io({
    props: {
      isVisible: (
        /*showAIHistoryDropdown*/
        e[2]
      ),
      history: (
        /*$aiHistory*/
        e[22]
      ),
      onClose: (
        /*handleHistoryClose*/
        e[54]
      ),
      onSelect: (
        /*handleSelectHistoricalQuery*/
        e[53]
      ),
      position: (
        /*historyDropdownPosition*/
        e[46]
      )
    }
  }), u = new Io({
    props: {
      isVisible: (
        /*showQueryHistoryDropdown*/
        e[3]
      ),
      history: (
        /*$queryHistory*/
        e[23]
      ),
      onClose: (
        /*handleQueryHistoryClose*/
        e[55]
      ),
      onSelect: (
        /*handleSelectHistoricalQuery*/
        e[53]
      ),
      position: (
        /*queryHistoryDropdownPosition*/
        e[47]
      )
    }
  }), d = new E0({
    props: {
      isLoading: (
        /*$isLoading*/
        e[10]
      ),
      message: (
        /*$loadingMessage*/
        e[11]
      )
    }
  }), {
    c() {
      t = w("main"), Y(n.$$.fragment), l = j(), r = w("div"), o && o.c(), f = j(), Y(a.$$.fragment), s = j(), Y(u.$$.fragment), c = j(), Y(d.$$.fragment), m(r, "class", "flex-auto w-full min-h-0 z-0 svelte-1pq5c6y"), m(t, "class", "w-full bg-white dark:bg-gray-950 transition-colors duration-200 relative overflow-hidden flex flex-col svelte-1pq5c6y"), Z(t, "height", "600px");
    },
    m(p, k) {
      R(p, t, k), V(n, t, null), h(t, l), h(t, r), ~i && _[i].m(r, null), h(t, f), V(a, t, null), h(t, s), V(u, t, null), h(t, c), V(d, t, null), g = !0;
    },
    p(p, k) {
      const L = {};
      k[0] & /*activeTab*/
      2 && (L.activeTab = /*activeTab*/
      p[1]), n.$set(L);
      let F = i;
      i = y(p), i === F ? ~i && _[i].p(p, k) : (o && (ne(), N(_[F], 1, 1, () => {
        _[F] = null;
      }), le()), ~i ? (o = _[i], o ? o.p(p, k) : (o = _[i] = b[i](p), o.c()), S(o, 1), o.m(r, null)) : o = null);
      const x = {};
      k[0] & /*showAIHistoryDropdown*/
      4 && (x.isVisible = /*showAIHistoryDropdown*/
      p[2]), k[0] & /*$aiHistory*/
      4194304 && (x.history = /*$aiHistory*/
      p[22]), a.$set(x);
      const q = {};
      k[0] & /*showQueryHistoryDropdown*/
      8 && (q.isVisible = /*showQueryHistoryDropdown*/
      p[3]), k[0] & /*$queryHistory*/
      8388608 && (q.history = /*$queryHistory*/
      p[23]), u.$set(q);
      const P = {};
      k[0] & /*$isLoading*/
      1024 && (P.isLoading = /*$isLoading*/
      p[10]), k[0] & /*$loadingMessage*/
      2048 && (P.message = /*$loadingMessage*/
      p[11]), d.$set(P);
    },
    i(p) {
      g || (S(n.$$.fragment, p), S(o), S(a.$$.fragment, p), S(u.$$.fragment, p), S(d.$$.fragment, p), g = !0);
    },
    o(p) {
      N(n.$$.fragment, p), N(o), N(a.$$.fragment, p), N(u.$$.fragment, p), N(d.$$.fragment, p), g = !1;
    },
    d(p) {
      p && z(t), W(n), ~i && _[i].d(), W(a), W(u), W(d);
    }
  };
}
function F0(e, t, n) {
  let l, r, i, o, f, a, s, u, c, d, g, b, _, y, p, k, L, F, x, q, { model: P } = t;
  const I = Ia(P), { values: O, listNames: M, runQuery: E, handleLLMQuestion: D, handleLLMExplanation: B, subqueries: C, queryError: T, scopes: Q, scopeConcepts: U, handleScopeAnalysis: oe, llmResponse: $, llmLoading: A, llmError: re, llmAvailable: J, llmExplanation: se, apiStatus: pe, isLoading: Ce, loadingMessage: we, extractedQuery: Ae, hasExtractedQuery: Pe, handleQueryExtraction: Re, textInput: je, queryHistory: lt, aiHistory: Bt } = I;
  H(e, O, (X) => n(13, d = X)), H(e, M, (X) => n(57, o = X)), H(e, C, (X) => n(14, g = X)), H(e, T, (X) => n(12, c = X)), H(e, Q, (X) => n(8, f = X)), H(e, U, (X) => n(9, a = X)), H(e, $, (X) => n(6, r = X)), H(e, A, (X) => n(15, b = X)), H(e, re, (X) => n(16, _ = X)), H(e, J, (X) => n(17, y = X)), H(e, se, (X) => n(20, L = X)), H(e, pe, (X) => n(18, p = X)), H(e, Ce, (X) => n(10, s = X)), H(e, we, (X) => n(11, u = X)), H(e, Ae, (X) => n(19, k = X)), H(e, Pe, (X) => n(21, F = X)), H(e, je, (X) => n(7, i = X)), H(e, lt, (X) => n(23, q = X)), H(e, Bt, (X) => n(22, x = X));
  let ut = "", ct = "query-inspector", Xe = !1, Ye = !1, Ue = "", Ln = { top: 0, left: 0 }, Rn = { top: 0, left: 0 };
  function Nn(X) {
    n(4, Ue = X), D(X);
  }
  function An(X) {
    n(1, ct = X);
  }
  function En() {
    console.log("text input", i), i.trim() && E(i);
  }
  function Dn() {
    n(2, Xe = !Xe);
  }
  function qn() {
    n(3, Ye = !Ye);
  }
  function Tn(X) {
    console.log("📚 AI History item selected:", X), n(2, Xe = !1), n(3, Ye = !1), X.query && (ae(je, i = X.query, i), P.set("text_input", X.query), P.save_changes()), X.question && n(4, Ue = X.question), X.answer && ae($, r = X.answer, r);
  }
  function xn() {
    n(2, Xe = !1);
  }
  function On() {
    n(3, Ye = !1);
  }
  const Pn = (X) => {
    oe(X, !1);
  }, er = (X) => {
    oe(X, !0);
  }, jn = (X, dt) => {
    ae(je, i = i + `{${dt}; scope = ${X}}`, i), n(1, ct = "query-inspector");
  };
  function tr(X) {
    ut = X, n(0, ut);
  }
  function Gt(X) {
    i = X, je.set(i);
  }
  function In(X) {
    Ue = X, n(4, Ue);
  }
  return e.$$set = (X) => {
    "model" in X && n(56, P = X.model);
  }, e.$$.update = () => {
    e.$$.dirty[1] & /*$listNames*/
    67108864 && n(5, l = o || []);
  }, [
    ut,
    ct,
    Xe,
    Ye,
    Ue,
    l,
    r,
    i,
    f,
    a,
    s,
    u,
    c,
    d,
    g,
    b,
    _,
    y,
    p,
    k,
    L,
    F,
    x,
    q,
    O,
    M,
    B,
    C,
    T,
    Q,
    U,
    oe,
    $,
    A,
    re,
    J,
    se,
    pe,
    Ce,
    we,
    Ae,
    Pe,
    Re,
    je,
    lt,
    Bt,
    Ln,
    Rn,
    Nn,
    An,
    En,
    Dn,
    qn,
    Tn,
    xn,
    On,
    P,
    o,
    Pn,
    er,
    jn,
    tr,
    Gt,
    In
  ];
}
class Q0 extends me {
  constructor(t) {
    super(), ge(this, t, F0, H0, de, { model: 56 }, null, [-1, -1, -1]);
  }
}
function B0(e) {
  new Q0({
    target: e.el,
    props: {
      model: e.model
    }
  });
}
export {
  B0 as render
};
