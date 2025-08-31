function K() {
}
function Sa(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function Io(e) {
  return e();
}
function xr() {
  return /* @__PURE__ */ Object.create(null);
}
function Ce(e) {
  e.forEach(Io);
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
function Ho(e, ...t) {
  if (e == null)
    return K;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function I(e, t, n) {
  e.$$.on_destroy.push(Ho(t, n));
}
function qe(e, t, n, l) {
  if (e) {
    const r = Qo(e, t, n, l);
    return e[0](r);
  }
}
function Qo(e, t, n, l) {
  return e[1] && l ? Sa(n.ctx.slice(), e[1](l(t))) : n.ctx;
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
function L(e) {
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
function P() {
  return G(" ");
}
function ce() {
  return G("");
}
function ne(e, t, n, l) {
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
function te(e, t) {
  t = "" + t, e.data !== t && (e.data = t);
}
function Ft(e, t) {
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
  return r ? (l.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", i = ne(window, "message", (o) => {
    o.source === l.contentWindow && t();
  })) : (l.src = "about:blank", l.onload = () => {
    i = ne(l.contentWindow, "resize", t), t();
  }), h(e, l), () => {
    (r || i && l.contentWindow) && i(), L(l);
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
    this.n.forEach(L);
  }
}
let yn;
function _n(e) {
  yn = e;
}
function Sn() {
  if (!yn)
    throw new Error("Function called outside component initialization");
  return yn;
}
function st(e) {
  Sn().$$.on_mount.push(e);
}
function Ea(e) {
  Sn().$$.on_destroy.push(e);
}
function Bo() {
  const e = Sn();
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
  return Sn().$$.context.set(e, t), t;
}
function Mn(e) {
  return Sn().$$.context.get(e);
}
function Or(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((l) => l.call(this, t));
}
const Ot = [], Me = [];
let jt = [];
const wr = [], qa = /* @__PURE__ */ Promise.resolve();
let vr = !1;
function Ta() {
  vr || (vr = !0, qa.then(Ve));
}
function Pl(e) {
  jt.push(e);
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
    for (let t = 0; t < jt.length; t += 1) {
      const n = jt[t];
      _r.has(n) || (_r.add(n), n());
    }
    jt.length = 0;
  } while (Ot.length);
  for (; wr.length; )
    wr.pop()();
  vr = !1, _r.clear(), _n(e);
}
function xa(e) {
  if (e.fragment !== null) {
    e.update(), Ce(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Pl);
  }
}
function Oa(e) {
  const t = [], n = [];
  jt.forEach((l) => e.indexOf(l) === -1 ? t.push(l) : n.push(l)), n.forEach((l) => l()), jt = t;
}
const Ol = /* @__PURE__ */ new Set();
let it;
function le() {
  it = {
    r: 0,
    c: [],
    p: it
    // parent group
  };
}
function re() {
  it.r || Ce(it.c), it = it.p;
}
function C(e, t) {
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
  r && r.m(t, n), l || Pl(() => {
    const o = e.$$.on_mount.map(Io).filter(nt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : Ce(o), e.$$.on_mount = [];
  }), i.forEach(Pl);
}
function W(e, t) {
  const n = e.$$;
  n.fragment !== null && (Oa(n.after_update), Ce(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ja(e, t) {
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
    return s.ctx && r(s.ctx[c], s.ctx[c] = b) && (!s.skip_bound && s.bound[c] && s.bound[c](b), u && ja(e, c)), d;
  }) : [], s.update(), u = !0, Ce(s.before_update), s.fragment = l ? l(s.ctx) : !1, t.target) {
    if (t.hydrate) {
      const c = La(t.target);
      s.fragment && s.fragment.l(c), c.forEach(L);
    } else
      s.fragment && s.fragment.c();
    t.intro && C(e.$$.fragment), V(e, t.target, t.anchor, t.customElement), Ve();
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
function Pa(e, t) {
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
  return Pa(n, (o) => {
    let f = !1;
    const a = [];
    let s = 0, u = K;
    const c = () => {
      if (s)
        return;
      u();
      const g = t(l ? a[0] : a, o);
      i ? o(g) : u = nt(g) ? g : K;
    }, d = r.map((g, b) => Ho(g, (_) => {
      a[b] = _, s &= ~(1 << b), f && c();
    }, () => {
      s |= 1 << b;
    }));
    return f = !0, c(), function() {
      Ce(d), u(), f = !1;
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
function Fa(e) {
  const t = ke(e, "type", "meds"), n = ke(e, "values", {}), l = ke(e, "list_names", {
    attributes: [],
    events: [],
    intervals: []
  }), r = ke(e, "subqueries", {}), i = ke(e, "query_error", ""), o = ke(e, "text_input", ""), f = ke(e, "scopes", []), a = ke(e, "scope_concepts", {}), s = ke(e, "isLoading", !1), u = ke(e, "loadingMessage", ""), c = ke(e, "llm_available", !1), d = ke(e, "llm_response", ""), g = ke(e, "llm_loading", !1), b = ke(e, "llm_error", ""), _ = ke(e, "api_status", "Checking API connection..."), y = ke(e, "extracted_query", ""), p = ke(e, "llm_explanation", ""), k = ke(e, "has_extracted_query", !1), M = ke(e, "query_history", []), H = ke(e, "ai_history", []);
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
    queryHistory: M,
    aiHistory: H,
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
      y.subscribe((j) => q = j)(), q && q !== x ? (console.log(
        "🔄 Query extracted from AI response:",
        q
      ), console.log("🔄 Current text input:", x), console.log("🔄 Updating text input with extracted query"), x = q, e.set("text_input", q), e.save_changes()) : q === x && console.log(
        "🔄 Extracted query is same as current input, no update needed"
      );
    },
    // Scope analysis handler
    handleScopeAnalysis: (q, j = !1) => {
      console.log(
        "🔍 Scope Analysis requested for:",
        q,
        j ? "(force refresh)" : ""
      );
      const F = j ? `${q}:force` : q;
      e.set("scope_analysis_trigger", F), e.save_changes();
    }
  };
}
function Ia() {
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
const Fl = Ia();
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Il = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [512, 512, [], "f077", "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
}, Ha = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, Qa = Ha, Ba = {
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
function Cr(e, t = ";") {
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
  return l && (s = "center", i = "1.25em"), n && (r = n), t && (t == "lg" ? (a = "1.33333em", f = ".75em", u = "-.225em") : t == "xs" ? a = ".75em" : t == "sm" ? a = ".875em" : a = t.replace("x", "em")), Cr([
    Cr({
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
  return r && (r == "horizontal" ? a = -1 : r == "vertical" ? s = -1 : a = s = -1), Cr(
    [
      `translate(${Ll(t) * i}${o},${Ll(n) * i}${o})`,
      `scale(${a * Ll(e)},${s * Ll(e)})`,
      l && `rotate(${l}${f})`
    ],
    " "
  );
}
function jr(e) {
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
      d && L(t), c.d();
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
      c && L(t), c && L(o);
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
      i && L(t);
    }
  };
}
function ff(e) {
  let t, n = (
    /*i*/
    e[10][4] && jr(e)
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
      l[10][4] ? n ? n.p(l, r) : (n = jr(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: K,
    o: K,
    d(l) {
      n && n.d(l), l && L(t);
    }
  };
}
function sf(e, t, n) {
  let { class: l = "" } = t, { id: r = "" } = t, { style: i = "" } = t, { icon: o } = t, { size: f = "" } = t, { color: a = "" } = t, { fw: s = !1 } = t, { pull: u = "" } = t, { scale: c = 1 } = t, { translateX: d = 0 } = t, { translateY: g = 0 } = t, { rotate: b = "" } = t, { flip: _ = !1 } = t, { spin: y = !1 } = t, { pulse: p = !1 } = t, { primaryColor: k = "" } = t, { secondaryColor: M = "" } = t, { primaryOpacity: H = 1 } = t, { secondaryOpacity: x = 0.4 } = t, { swapOpacity: q = !1 } = t, j, F, O;
  return e.$$set = (D) => {
    "class" in D && n(0, l = D.class), "id" in D && n(1, r = D.id), "style" in D && n(13, i = D.style), "icon" in D && n(14, o = D.icon), "size" in D && n(15, f = D.size), "color" in D && n(2, a = D.color), "fw" in D && n(16, s = D.fw), "pull" in D && n(17, u = D.pull), "scale" in D && n(18, c = D.scale), "translateX" in D && n(19, d = D.translateX), "translateY" in D && n(20, g = D.translateY), "rotate" in D && n(21, b = D.rotate), "flip" in D && n(22, _ = D.flip), "spin" in D && n(3, y = D.spin), "pulse" in D && n(4, p = D.pulse), "primaryColor" in D && n(5, k = D.primaryColor), "secondaryColor" in D && n(6, M = D.secondaryColor), "primaryOpacity" in D && n(7, H = D.primaryOpacity), "secondaryOpacity" in D && n(8, x = D.secondaryOpacity), "swapOpacity" in D && n(9, q = D.swapOpacity);
  }, e.$$.update = () => {
    e.$$.dirty & /*icon*/
    16384 && n(10, j = o && o.icon || [0, 0, "", [], ""]), e.$$.dirty & /*style, size, pull, fw*/
    237568 && n(11, F = lf(i, f, u, s)), e.$$.dirty & /*scale, translateX, translateY, rotate, flip*/
    8126464 && n(12, O = rf(c, d, g, b, _, 512));
  }, [
    l,
    r,
    a,
    y,
    p,
    k,
    M,
    H,
    x,
    q,
    j,
    F,
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
      n || (C(t.$$.fragment, l), n = !0);
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
      n || (C(t.$$.fragment, l), n = !0);
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
      R(u, t, c), a[n].m(t, null), r = !0, i || (o = ne(
        t,
        "click",
        /*toggleTheme*/
        e[1]
      ), i = !0);
    },
    p(u, [c]) {
      let d = n;
      n = s(u), n === d ? a[n].p(u, c) : (le(), N(a[d], 1, 1, () => {
        a[d] = null;
      }), re(), l = a[n], l ? l.p(u, c) : (l = a[n] = f[n](u), l.c()), C(l, 1), l.m(t, null));
    },
    i(u) {
      r || (C(l), r = !0);
    },
    o(u) {
      N(l), r = !1;
    },
    d(u) {
      u && L(t), a[n].d(), i = !1, o();
    }
  };
}
function gf(e, t, n) {
  let l;
  I(e, Fl, (i) => n(0, l = i));
  function r() {
    console.log("Theme toggle clicked, current theme:", l), Fl.toggle();
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
function Pr(e, t, n) {
  const l = e.slice();
  return l[4] = t[n], l;
}
function Fr(e) {
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
      t = w("button"), Y(n.$$.fragment), l = P(), i = G(r), m(t, "class", o = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*activeTab*/
      (e[0] === /*tab*/
      e[4].id ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600"));
    },
    m(c, d) {
      R(c, t, d), V(n, t, null), h(t, l), h(t, i), f = !0, a || (s = ne(t, "click", u), a = !0);
    },
    p(c, d) {
      e = c, (!f || d & /*activeTab*/
      1 && o !== (o = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*activeTab*/
      (e[0] === /*tab*/
      e[4].id ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600"))) && m(t, "class", o);
    },
    i(c) {
      f || (C(n.$$.fragment, c), f = !0);
    },
    o(c) {
      N(n.$$.fragment, c), f = !1;
    },
    d(c) {
      c && L(t), W(n), a = !1, s();
    }
  };
}
function bf(e) {
  let t, n, l, r, i, o, f, a = (
    /*tabs*/
    e[2]
  ), s = [];
  for (let c = 0; c < a.length; c += 1)
    s[c] = Fr(Pr(e, a, c));
  const u = (c) => N(s[c], 1, 1, () => {
    s[c] = null;
  });
  return o = new mf({}), {
    c() {
      t = w("div"), n = w("nav");
      for (let c = 0; c < s.length; c += 1)
        s[c].c();
      l = P(), r = w("div"), i = P(), Y(o.$$.fragment), m(r, "class", "flex-auto"), m(n, "class", "flex gap-2 px-4 py-2"), m(n, "aria-label", "Tabs"), m(t, "class", "w-full bg-gray-300 dark:bg-gray-800 dark:text-white");
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
          const b = Pr(c, a, g);
          s[g] ? (s[g].p(b, d), C(s[g], 1)) : (s[g] = Fr(b), s[g].c(), C(s[g], 1), s[g].m(n, l));
        }
        for (le(), g = a.length; g < s.length; g += 1)
          u(g);
        re();
      }
    },
    i(c) {
      if (!f) {
        for (let d = 0; d < a.length; d += 1)
          C(s[d]);
        C(o.$$.fragment, c), f = !0;
      }
    },
    o(c) {
      s = s.filter(Boolean);
      for (let d = 0; d < s.length; d += 1)
        N(s[d]);
      N(o.$$.fragment, c), f = !1;
    },
    d(c) {
      c && L(t), Ne(s, c), W(o);
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
function Hl(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, l = e.slice(0, n);
  return [
    l.length > 1 ? l[0] + l.slice(2) : l,
    +e.slice(n + 1)
  ];
}
function It(e) {
  return e = Hl(Math.abs(e)), e ? e[1] : NaN;
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
function Cf(e, t) {
  var n = Hl(e, t);
  if (!n)
    return e + "";
  var l = n[0], r = n[1], i = r - (Xo = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, o = l.length;
  return i === o ? l : i > o ? l + new Array(i - o + 1).join("0") : i > 0 ? l.slice(0, i) + "." + l.slice(i) : "0." + new Array(1 - i).join("0") + Hl(e, Math.max(0, t + i - 1))[0];
}
function Ir(e, t) {
  var n = Hl(e, t);
  if (!n)
    return e + "";
  var l = n[0], r = n[1];
  return r < 0 ? "0." + new Array(-r).join("0") + l : l.length > r + 1 ? l.slice(0, r + 1) + "." + l.slice(r + 1) : l + new Array(r - l.length + 2).join("0");
}
const Hr = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: yf,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Ir(e * 100, t),
  r: Ir,
  s: Cf,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Qr(e) {
  return e;
}
var Br = Array.prototype.map, Gr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Sf(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Qr : pf(Br.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", l = e.currency === void 0 ? "" : e.currency[1] + "", r = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? Qr : kf(Br.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", f = e.minus === void 0 ? "−" : e.minus + "", a = e.nan === void 0 ? "NaN" : e.nan + "";
  function s(c) {
    c = Ql(c);
    var d = c.fill, g = c.align, b = c.sign, _ = c.symbol, y = c.zero, p = c.width, k = c.comma, M = c.precision, H = c.trim, x = c.type;
    x === "n" ? (k = !0, x = "g") : Hr[x] || (M === void 0 && (M = 12), H = !0, x = "g"), (y || d === "0" && g === "=") && (y = !0, d = "0", g = "=");
    var q = _ === "$" ? n : _ === "#" && /[boxX]/.test(x) ? "0" + x.toLowerCase() : "", j = _ === "$" ? l : /[%p]/.test(x) ? o : "", F = Hr[x], O = /[defgprs%]/.test(x);
    M = M === void 0 ? 6 : /[gprs]/.test(x) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function D(z) {
      var E = q, B = j, S, T, Q;
      if (x === "c")
        B = F(z) + B, z = "";
      else {
        z = +z;
        var U = z < 0 || 1 / z < 0;
        if (z = isNaN(z) ? a : F(Math.abs(z), M), H && (z = vf(z)), U && +z == 0 && b !== "+" && (U = !1), E = (U ? b === "(" ? b : f : b === "-" || b === "(" ? "" : b) + E, B = (x === "s" ? Gr[8 + Xo / 3] : "") + B + (U && b === "(" ? ")" : ""), O) {
          for (S = -1, T = z.length; ++S < T; )
            if (Q = z.charCodeAt(S), 48 > Q || Q > 57) {
              B = (Q === 46 ? r + z.slice(S + 1) : z.slice(S)) + B, z = z.slice(0, S);
              break;
            }
        }
      }
      k && !y && (z = t(z, 1 / 0));
      var oe = E.length + z.length + B.length, ee = oe < p ? new Array(p - oe + 1).join(d) : "";
      switch (k && y && (z = t(ee + z, ee.length ? p - B.length : 1 / 0), ee = ""), g) {
        case "<":
          z = E + z + B + ee;
          break;
        case "=":
          z = E + ee + z + B;
          break;
        case "^":
          z = ee.slice(0, oe = ee.length >> 1) + E + z + B + ee.slice(oe);
          break;
        default:
          z = ee + E + z + B;
          break;
      }
      return i(z);
    }
    return D.toString = function() {
      return c + "";
    }, D;
  }
  function u(c, d) {
    var g = s((c = Ql(c), c.type = "f", c)), b = Math.max(-8, Math.min(8, Math.floor(It(d) / 3))) * 3, _ = Math.pow(10, -b), y = Gr[8 + b / 3];
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
  return Rl = Sf(e), he = Rl.format, Yo = Rl.formatPrefix, Rl;
}
function Uo(e) {
  return Math.max(0, -It(Math.abs(e)));
}
function zf(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(It(t) / 3))) * 3 - It(Math.abs(e)));
}
function Lf(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, It(t) - It(e)) + 1;
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
var wn = 0.7, Bl = 1 / wn, Pt = "\\s*([+-]?\\d+)\\s*", vn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Qe = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Af = /^#([0-9a-f]{3,8})$/, Ef = new RegExp(`^rgb\\(${Pt},${Pt},${Pt}\\)$`), Df = new RegExp(`^rgb\\(${Qe},${Qe},${Qe}\\)$`), qf = new RegExp(`^rgba\\(${Pt},${Pt},${Pt},${vn}\\)$`), Tf = new RegExp(`^rgba\\(${Qe},${Qe},${Qe},${vn}\\)$`), xf = new RegExp(`^hsl\\(${vn},${Qe},${Qe}\\)$`), Of = new RegExp(`^hsla\\(${vn},${Qe},${Qe},${vn}\\)$`), Vr = {
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
Nr(zn, Cn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Wr,
  // Deprecated! Use color.formatHex.
  formatHex: Wr,
  formatHex8: jf,
  formatHsl: Pf,
  formatRgb: Kr,
  toString: Kr
});
function Wr() {
  return this.rgb().formatHex();
}
function jf() {
  return this.rgb().formatHex8();
}
function Pf() {
  return Jo(this).formatHsl();
}
function Kr() {
  return this.rgb().formatRgb();
}
function Cn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Af.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Xr(t) : n === 3 ? new Le(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Nl(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Nl(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ef.exec(e)) ? new Le(t[1], t[2], t[3], 1) : (t = Df.exec(e)) ? new Le(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = qf.exec(e)) ? Nl(t[1], t[2], t[3], t[4]) : (t = Tf.exec(e)) ? Nl(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = xf.exec(e)) ? Zr(t[1], t[2] / 100, t[3] / 100, 1) : (t = Of.exec(e)) ? Zr(t[1], t[2] / 100, t[3] / 100, t[4]) : Vr.hasOwnProperty(e) ? Xr(Vr[e]) : e === "transparent" ? new Le(NaN, NaN, NaN, 0) : null;
}
function Xr(e) {
  return new Le(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Nl(e, t, n, l) {
  return l <= 0 && (e = t = n = NaN), new Le(e, t, n, l);
}
function Ff(e) {
  return e instanceof zn || (e = Cn(e)), e ? (e = e.rgb(), new Le(e.r, e.g, e.b, e.opacity)) : new Le();
}
function Gl(e, t, n, l) {
  return arguments.length === 1 ? Ff(e) : new Le(e, t, n, l ?? 1);
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
  formatHex8: If,
  formatRgb: Ur,
  toString: Ur
}));
function Yr() {
  return `#${ot(this.r)}${ot(this.g)}${ot(this.b)}`;
}
function If() {
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
  if (e instanceof zn || (e = Cn(e)), !e)
    return new De();
  if (e instanceof De)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, l = e.b / 255, r = Math.min(t, n, l), i = Math.max(t, n, l), o = NaN, f = i - r, a = (i + r) / 2;
  return f ? (t === i ? o = (n - l) / f + (n < l) * 6 : n === i ? o = (l - t) / f + 2 : o = (t - n) / f + 4, f /= a < 0.5 ? i + r : 2 - i - r, o *= 60) : f = a > 0 && a < 1 ? 0 : o, new De(o, f, a, e.opacity);
}
function Hf(e, t, n, l) {
  return arguments.length === 1 ? Jo(e) : new De(e, t, n, l ?? 1);
}
function De(e, t, n, l) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +l;
}
Nr(De, Hf, Zo(zn, {
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
var Sr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, pr = new RegExp(Sr.source, "g");
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
  var n = Sr.lastIndex = pr.lastIndex = 0, l, r, i, o = -1, f = [], a = [];
  for (e = e + "", t = t + ""; (l = Sr.exec(e)) && (r = pr.exec(t)); )
    (i = r.index) > n && (i = t.slice(n, i), f[o] ? f[o] += i : f[++o] = i), (l = l[0]) === (r = r[0]) ? f[o] ? f[o] += r : f[++o] = r : (f[++o] = null, a.push({ i: o, x: Wl(l, r) })), n = pr.lastIndex;
  return n < t.length && (i = t.slice(n), f[o] ? f[o] += i : f[++o] = i), f.length < 2 ? a[0] ? Zf(a[0].x) : Uf(t) : (t = a.length, function(s) {
    for (var u = 0, c; u < t; ++u)
      f[(c = a[u]).i] = c.x(s);
    return f.join("");
  });
}
function Er(e, t) {
  var n = typeof t, l;
  return t == null || n === "boolean" ? Ar(t) : (n === "number" ? Wl : n === "string" ? (l = Cn(t)) ? (t = l, $r) : Jf : t instanceof Cn ? $r : t instanceof Date ? Xf : Wf(t) ? Vf : Array.isArray(t) ? Kf : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Yf : Wl)(e, t);
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
        ne(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[10]
        ),
        ne(
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
      o && L(t), r = !1, Ce(i);
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
      2048 && te(
        n,
        /*title*/
        l[11]
      );
    },
    d(l) {
      l && L(t);
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
      n || (C(t.$$.fragment, l), n = !0);
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
      n || (C(t.$$.fragment, l), n = !0);
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
          r[a] ? (r[a].p(s, f), C(r[a], 1)) : (r[a] = ri(s), r[a].c(), C(r[a], 1), r[a].m(t.parentNode, t));
        }
        for (le(), a = l.length; a < r.length; a += 1)
          i(a);
        re();
      }
    },
    i(o) {
      if (!n) {
        for (let f = 0; f < l.length; f += 1)
          C(r[f]);
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
      Ne(r, o), o && L(t);
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
      n || (C(t.$$.fragment, r), n = !0);
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
      n = f(a), n === u ? o[n].p(a, s) : (le(), N(o[u], 1, 1, () => {
        o[u] = null;
      }), re(), l = o[n], l ? l.p(a, s) : (l = o[n] = i[n](a), l.c()), C(l, 1), l.m(t, null));
    },
    i(a) {
      r || (C(l), r = !0);
    },
    o(a) {
      N(l), r = !1;
    },
    d(a) {
      a && L(t), o[n].d();
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
      t || (C(l, r), t = !0);
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
      ) + "") && te(n, t);
    },
    i: K,
    o: K,
    d(l) {
      l && L(n);
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
      t = w("div"), s && s.c(), n = P(), l = w("div"), u && u.c(), r = P(), o.c(), f = P(), b && b.c(), m(l, "class", "parent-bar relative rounded-full overflow-hidden"), Z(
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
      16 && C(u, 1)) : (u = li(_), u.c(), C(u, 1), u.m(l, r)) : u && (le(), N(u, 1, 1, () => {
        u = null;
      }), re());
      let p = i;
      i = g(_), i === p ? d[i].p(_, y) : (le(), N(d[p], 1, 1, () => {
        d[p] = null;
      }), re(), o = d[i], o ? o.p(_, y) : (o = d[i] = c[i](_), o.c()), C(o, 1), o.m(l, null)), (!a || y & /*width*/
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
      32 && C(b, 1)) : (b = ii(_), b.c(), C(b, 1), b.m(t, null)) : b && (le(), N(b, 1, 1, () => {
        b = null;
      }), re()), (!a || y & /*horizontalLayout*/
      4096) && ie(
        t,
        "flex",
        /*horizontalLayout*/
        _[12]
      );
    },
    i(_) {
      a || (C(u), C(o), C(b), a = !0);
    },
    o(_) {
      N(u), N(o), N(b), a = !1;
    },
    d(_) {
      _ && L(t), s && s.d(), u && u.d(), d[i].d(), b && b.d();
    }
  };
}
const oi = (e) => e, ai = (e) => e, fi = (e) => e;
function us(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = Lr(l);
  let { width: o = 100 } = t, { scale: f = null } = t, { value: a = 0 } = t, { values: s = null } = t, { showFullBar: u = !1 } = t, { showTooltip: c = !0 } = t, { colors: d = Rf } = t, { colorScale: g = es } = t, { color: b = null } = t, { fullBarColor: _ = "#e5e7eb" } = t, { hoverable: y = !1 } = t, { title: p = null } = t, { horizontalLayout: k = !1 } = t, M = null, H = [];
  const x = (E) => n(13, M = -1), q = (E) => n(13, M = null), j = (E, B) => n(13, M = E), F = (E) => n(13, M = null), O = () => b, D = (E) => n(13, M = 0), z = (E) => n(13, M = null);
  return e.$$set = (E) => {
    "width" in E && n(0, o = E.width), "scale" in E && n(1, f = E.scale), "value" in E && n(2, a = E.value), "values" in E && n(3, s = E.values), "showFullBar" in E && n(4, u = E.showFullBar), "showTooltip" in E && n(5, c = E.showTooltip), "colors" in E && n(6, d = E.colors), "colorScale" in E && n(7, g = E.colorScale), "color" in E && n(8, b = E.color), "fullBarColor" in E && n(9, _ = E.fullBarColor), "hoverable" in E && n(10, y = E.hoverable), "title" in E && n(11, p = E.title), "horizontalLayout" in E && n(12, k = E.horizontalLayout), "$$scope" in E && n(16, r = E.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*values*/
    8 && (s != null ? n(14, H = ls(s)) : n(14, H = []));
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
    M,
    H,
    i,
    r,
    l,
    x,
    q,
    j,
    F,
    O,
    D,
    z
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
        ne(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[5]
        ),
        ne(
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
      n || (C(o, f), n = !0);
    },
    o(f) {
      N(o, f), n = !1;
    },
    d(f) {
      f && L(t), o && o.d(f), l = !1, Ce(r);
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
      o[11].size + "") && te(n, t), f[0] & /*selectedConceptIDs*/
      2048 && r !== (r = /*selectedConceptIDs*/
      o[11].size != 1 ? "s" : "") && te(i, r);
    },
    d(o) {
      o && L(n), o && L(l), o && L(i);
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
      n && L(t);
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
      n && L(t);
    }
  };
}
function _s(e) {
  let t, n, l, r, i, o, f, a, s, u, c, d, g, b, _, y, p, k, M, H, x;
  function q(S, T) {
    if (
      /*hasError*/
      S[17]
    )
      return ws;
    if (
      /*hasConceptIds*/
      S[18]
    )
      return ks;
  }
  let j = q(e), F = j && j(e), O = (
    /*totalCount*/
    e[19] > 0 && di(e)
  );
  const D = [Cs, vs], z = [];
  function E(S, T) {
    return (
      /*paginatedConcepts*/
      S[16].length > 0 ? 0 : 1
    );
  }
  _ = E(e), y = z[_] = D[_](e);
  let B = (
    /*sortedConcepts*/
    e[14].length > We && _i(e)
  );
  return {
    c() {
      F && F.c(), t = P(), n = w("div"), l = w("div"), r = w("div"), i = w("input"), o = P(), f = w("div"), f.textContent = "Data Element", a = P(), s = w("div"), s.textContent = "Type", u = P(), c = w("div"), d = G(`Count
          `), O && O.c(), g = P(), b = w("div"), y.c(), p = P(), B && B.c(), k = ce(), m(i, "type", "checkbox"), m(i, "class", "form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"), i.checked = /*allFilteredSelected*/
      e[12], i.indeterminate = /*someFilteredSelected*/
      e[15], m(i, "aria-label", "Select all concepts"), m(r, "class", "flex items-center justify-center"), m(f, "class", "font-semibold text-gray-900 dark:text-gray-100"), m(s, "class", "font-semibold text-gray-900 dark:text-gray-100"), m(c, "class", "font-semibold text-gray-900 dark:text-gray-100"), m(l, "class", "grid gap-4 px-4 py-4 items-center"), Z(l, "grid-template-columns", "2rem 2fr 1fr 2fr"), m(n, "class", "bg-gray-50 dark:bg-gray-800 rounded-t-lg border border-gray-200 dark:border-gray-700"), m(b, "class", "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-b-lg overflow-y-auto custom-scrollbar min-h-0 flex-auto svelte-1xw87wt");
    },
    m(S, T) {
      F && F.m(S, T), R(S, t, T), R(S, n, T), h(n, l), h(l, r), h(r, i), h(l, o), h(l, f), h(l, a), h(l, s), h(l, u), h(l, c), h(c, d), O && O.m(c, null), R(S, g, T), R(S, b, T), z[_].m(b, null), R(S, p, T), B && B.m(S, T), R(S, k, T), M = !0, H || (x = ne(
        i,
        "change",
        /*toggleSelectAllFiltered*/
        e[23]
      ), H = !0);
    },
    p(S, T) {
      j === (j = q(S)) && F ? F.p(S, T) : (F && F.d(1), F = j && j(S), F && (F.c(), F.m(t.parentNode, t))), (!M || T[0] & /*allFilteredSelected*/
      4096) && (i.checked = /*allFilteredSelected*/
      S[12]), (!M || T[0] & /*someFilteredSelected*/
      32768) && (i.indeterminate = /*someFilteredSelected*/
      S[15]), /*totalCount*/
      S[19] > 0 ? O ? O.p(S, T) : (O = di(S), O.c(), O.m(c, null)) : O && (O.d(1), O = null);
      let Q = _;
      _ = E(S), _ === Q ? z[_].p(S, T) : (le(), N(z[Q], 1, 1, () => {
        z[Q] = null;
      }), re(), y = z[_], y ? y.p(S, T) : (y = z[_] = D[_](S), y.c()), C(y, 1), y.m(b, null)), /*sortedConcepts*/
      S[14].length > We ? B ? (B.p(S, T), T[0] & /*sortedConcepts*/
      16384 && C(B, 1)) : (B = _i(S), B.c(), C(B, 1), B.m(k.parentNode, k)) : B && (le(), N(B, 1, 1, () => {
        B = null;
      }), re());
    },
    i(S) {
      M || (C(y), C(B), M = !0);
    },
    o(S) {
      N(y), N(B), M = !1;
    },
    d(S) {
      F && F.d(S), S && L(t), S && L(n), O && O.d(), S && L(g), S && L(b), z[_].d(), S && L(p), B && B.d(S), S && L(k), H = !1, x();
    }
  };
}
function ys(e) {
  let t, n, l, r, i, o, f, a, s, u, c, d, g;
  return f = new _e({
    props: { icon: Wa, class: "inline mr-2" }
  }), {
    c() {
      t = w("div"), n = w("div"), n.textContent = "Data elements not retrieved yet", l = P(), r = w("p"), r.textContent = "Click below to retrieve available data elements in this scope.", i = P(), o = w("button"), Y(f.$$.fragment), a = G(`
        Load Data Elements for `), s = w("span"), u = G(
        /*scopeName*/
        e[1]
      ), m(n, "class", "w-1/2 text-gray-700 dark:text-gray-200 text-lg font-semibold"), m(r, "class", "text-gray-600 dark:text-gray-400 w-1/3"), m(s, "class", "font-mono"), m(o, "class", "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md"), o.disabled = /*isLoading*/
      e[3], m(t, "class", "flex flex-col w-full h-full items-center justify-center text-center gap-4");
    },
    m(b, _) {
      R(b, t, _), h(t, n), h(t, l), h(t, r), h(t, i), h(t, o), V(f, o, null), h(o, a), h(o, s), h(s, u), c = !0, d || (g = ne(o, "click", function() {
        nt(
          /*onAnalyze*/
          e[5]
        ) && e[5].apply(this, arguments);
      }), d = !0);
    },
    p(b, _) {
      e = b, (!c || _[0] & /*scopeName*/
      2) && te(
        u,
        /*scopeName*/
        e[1]
      ), (!c || _[0] & /*isLoading*/
      8) && (o.disabled = /*isLoading*/
      e[3]);
    },
    i(b) {
      c || (C(f.$$.fragment, b), c = !0);
    },
    o(b) {
      N(f.$$.fragment, b), c = !1;
    },
    d(b) {
      b && L(t), W(f), d = !1, g();
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
          
          <div class="absolute top-6 left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div></div>`, l = P(), r && r.c(), m(n, "class", "flex justify-center mb-8"), m(t, "class", "text-center py-16");
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
      i && L(t), r && r.d();
    }
  };
}
function ks(e) {
  let t, n, l, r, i, o, f, a, s, u, c, d, g;
  return {
    c() {
      t = w("div"), n = w("div"), l = w("div"), l.innerHTML = '<span class="text-yellow-600 dark:text-yellow-400">⚠️</span>', r = P(), i = w("div"), o = w("h3"), o.textContent = "Concept Names Not Found", f = P(), a = w("div"), s = w("p"), s.textContent = `Some concepts are showing as IDs instead of human-readable
                names. This might be due to vocabulary lookup issues.`, u = P(), c = w("button"), c.textContent = "🔄 Refresh Analysis", m(l, "class", "flex-shrink-0"), m(o, "class", "text-sm font-medium text-yellow-800 dark:text-yellow-200"), m(c, "class", "mt-2 bg-yellow-600 hover:bg-yellow-700 text-white text-xs px-3 py-1 rounded transition-colors duration-200"), m(a, "class", "mt-2 text-sm text-yellow-700 dark:text-yellow-300"), m(i, "class", "ml-3"), m(n, "class", "flex items-start"), m(t, "class", "bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4");
    },
    m(b, _) {
      R(b, t, _), h(t, n), h(n, l), h(n, r), h(n, i), h(i, o), h(i, f), h(i, a), h(a, s), h(a, u), h(a, c), d || (g = ne(
        c,
        "click",
        /*click_handler_3*/
        e[30]
      ), d = !0);
    },
    p: K,
    d(b) {
      b && L(t), d = !1, g();
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
      t = w("div"), n = w("div"), l = w("div"), l.innerHTML = '<span class="text-red-600 dark:text-red-400">❌</span>', r = P(), i = w("div"), o = w("h3"), o.textContent = "Analysis Failed", f = P(), a = w("div"), s = w("p"), c = G(u), d = P(), g = w("button"), g.textContent = "🔄 Retry Analysis", m(l, "class", "flex-shrink-0"), m(o, "class", "text-sm font-medium text-red-800 dark:text-red-200"), m(g, "class", "mt-2 bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded transition-colors duration-200"), m(a, "class", "mt-2 text-sm text-red-700 dark:text-red-300"), m(i, "class", "ml-3"), m(n, "class", "flex items-start"), m(t, "class", "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4");
    },
    m(y, p) {
      R(y, t, p), h(t, n), h(n, l), h(n, r), h(n, i), h(i, o), h(i, f), h(i, a), h(a, s), h(s, c), h(a, d), h(a, g), b || (_ = ne(
        g,
        "click",
        /*click_handler_2*/
        e[29]
      ), b = !0);
    },
    p(y, p) {
      p[0] & /*scopeConcepts*/
      256 && u !== (u = /*scopeConcepts*/
      y[8].error + "") && te(c, u);
    },
    d(y) {
      y && L(t), b = !1, _();
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
      o[19].toLocaleString() + "") && te(r, l);
    },
    d(o) {
      o && L(t);
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
      n && L(t);
    }
  };
}
function Cs(e) {
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
          r[a] ? (r[a].p(s, f), C(r[a], 1)) : (r[a] = hi(s), r[a].c(), C(r[a], 1), r[a].m(t.parentNode, t));
        }
        for (le(), a = l.length; a < r.length; a += 1)
          i(a);
        re();
      }
    },
    i(o) {
      if (!n) {
        for (let f = 0; f < l.length; f += 1)
          C(r[f]);
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
      Ne(r, o), o && L(t);
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
      i[33].id + "") && te(l, n);
    },
    d(i) {
      i && L(t);
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
      l || (C(n.$$.fragment, r), l = !0);
    },
    o(r) {
      N(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && L(t), W(n);
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
      R(a, t, s), V(n, t, null), h(t, l), r = !0, i || (o = ne(t, "click", f), i = !0);
    },
    p(a, s) {
      e = a;
    },
    i(a) {
      r || (C(n.$$.fragment, a), r = !0);
    },
    o(a) {
      N(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && L(t), W(n), i = !1, o();
    }
  };
}
function Ss(e) {
  let t, n, l, r, i, o = (
    /*concept*/
    e[33].name + ""
  ), f, a, s, u, c, d = (
    /*concept*/
    e[33].type + ""
  ), g, b, _, y, p, k, M, H = (
    /*concept*/
    e[33].count.toLocaleString() + ""
  ), x, q, j, F = (
    /*totalCount*/
    e[19].toLocaleString() + ""
  ), O, D, z, E, B, S;
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
      t = w("div"), n = w("input"), r = P(), i = w("div"), Q && Q.c(), f = G(o), s = P(), u = w("div"), c = w("span"), g = G(d), _ = P(), y = w("div"), p = w("div"), U && U.c(), k = P(), M = w("div"), x = G(H), q = w("span"), j = G(" / "), O = G(F), D = P(), oe && oe.c(), z = P(), m(n, "type", "checkbox"), m(n, "class", "form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"), n.checked = l = /*selectedConceptIDs*/
      e[11].has(
        /*concept*/
        e[33].id
      ), m(n, "aria-label", "Select concept"), m(t, "class", "flex items-center justify-center"), m(i, "class", "text-gray-900 dark:text-gray-100 font-medium truncate"), m(i, "title", a = /*concept*/
      e[33].name), m(c, "class", b = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " + /*concept*/
      (e[33].type === "event" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : (
        /*concept*/
        e[33].type === "interval" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
      ))), m(u, "class", "text-gray-600 dark:text-gray-400"), m(q, "class", "opacity-80"), m(M, "class", "text-gray-600 dark:text-gray-200 font-mono text-sm"), m(p, "class", "flex flex-col space-y-2"), m(y, "class", "flex gap-2 justify-between");
    },
    m(ee, A) {
      R(ee, t, A), h(t, n), R(ee, r, A), R(ee, i, A), Q && Q.m(i, null), h(i, f), R(ee, s, A), R(ee, u, A), h(u, c), h(c, g), R(ee, _, A), R(ee, y, A), h(y, p), U && U.m(p, null), h(p, k), h(p, M), h(M, x), h(M, q), h(q, j), h(q, O), h(y, D), oe && oe.m(y, null), R(ee, z, A), E = !0, B || (S = ne(n, "change", T), B = !0);
    },
    p(ee, A) {
      e = ee, (!E || A[0] & /*selectedConceptIDs, paginatedConcepts*/
      67584 && l !== (l = /*selectedConceptIDs*/
      e[11].has(
        /*concept*/
        e[33].id
      ))) && (n.checked = l), /*concept*/
      e[33].id != /*concept*/
      e[33].name ? Q ? Q.p(e, A) : (Q = gi(e), Q.c(), Q.m(i, f)) : Q && (Q.d(1), Q = null), (!E || A[0] & /*paginatedConcepts*/
      65536) && o !== (o = /*concept*/
      e[33].name + "") && te(f, o), (!E || A[0] & /*paginatedConcepts*/
      65536 && a !== (a = /*concept*/
      e[33].name)) && m(i, "title", a), (!E || A[0] & /*paginatedConcepts*/
      65536) && d !== (d = /*concept*/
      e[33].type + "") && te(g, d), (!E || A[0] & /*paginatedConcepts*/
      65536 && b !== (b = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " + /*concept*/
      (e[33].type === "event" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : (
        /*concept*/
        e[33].type === "interval" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
      )))) && m(c, "class", b), /*totalCount*/
      e[19] > 0 ? U ? (U.p(e, A), A[0] & /*totalCount*/
      524288 && C(U, 1)) : (U = mi(e), U.c(), C(U, 1), U.m(p, k)) : U && (le(), N(U, 1, 1, () => {
        U = null;
      }), re()), (!E || A[0] & /*paginatedConcepts*/
      65536) && H !== (H = /*concept*/
      e[33].count.toLocaleString() + "") && te(x, H), (!E || A[0] & /*totalCount*/
      524288) && F !== (F = /*totalCount*/
      e[19].toLocaleString() + "") && te(O, F), /*hovering*/
      e[36] ? oe ? (oe.p(e, A), A[1] & /*hovering*/
      32 && C(oe, 1)) : (oe = bi(e), oe.c(), C(oe, 1), oe.m(y, null)) : oe && (le(), N(oe, 1, 1, () => {
        oe = null;
      }), re());
    },
    i(ee) {
      E || (C(U), C(oe), E = !0);
    },
    o(ee) {
      N(U), N(oe), E = !1;
    },
    d(ee) {
      ee && L(t), ee && L(r), ee && L(i), Q && Q.d(), ee && L(s), ee && L(u), ee && L(_), ee && L(y), U && U.d(), oe && oe.d(), ee && L(z), B = !1, S();
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
          Ss,
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
      n || (C(t.$$.fragment, l), n = !0);
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
  ), _, y, p, k, M, H, x, q;
  return l = new _e({ props: { icon: Ya } }), k = new _e({ props: { icon: ft } }), {
    c() {
      t = w("div"), n = w("button"), Y(l.$$.fragment), i = P(), o = w("span"), f = G("Concepts "), s = G(a), u = G(" - "), d = G(c), g = G(" of "), _ = G(b), y = P(), p = w("button"), Y(k.$$.fragment), m(n, "class", "p-2 hover:opacity-50 disabled:opacity-30 disabled:cursor-not-allowed"), n.disabled = r = /*currentPage*/
      e[10] === 1, m(n, "aria-label", "Previous Page"), m(o, "class", "text-sm"), m(p, "class", "p-2 hover:opacity-50 disabled:opacity-30 disabled:cursor-not-allowed"), p.disabled = M = /*currentPage*/
      e[10] === /*totalPages*/
      e[13], m(p, "aria-label", "Next Page"), m(t, "class", "shrink-0 flex justify-end items-center px-6 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200");
    },
    m(j, F) {
      R(j, t, F), h(t, n), V(l, n, null), h(t, i), h(t, o), h(o, f), h(o, s), h(o, u), h(o, d), h(o, g), h(o, _), h(t, y), h(t, p), V(k, p, null), H = !0, x || (q = [
        ne(
          n,
          "click",
          /*prevPage*/
          e[21]
        ),
        ne(
          p,
          "click",
          /*nextPage*/
          e[22]
        )
      ], x = !0);
    },
    p(j, F) {
      (!H || F[0] & /*currentPage*/
      1024 && r !== (r = /*currentPage*/
      j[10] === 1)) && (n.disabled = r), (!H || F[0] & /*currentPage*/
      1024) && a !== (a = /*currentPage*/
      (j[10] - 1) * We + 1 + "") && te(s, a), (!H || F[0] & /*currentPage, concepts*/
      1152) && c !== (c = Math.min(
        /*currentPage*/
        j[10] * We,
        /*concepts*/
        j[7].length
      ) + "") && te(d, c), (!H || F[0] & /*concepts*/
      128) && b !== (b = /*concepts*/
      j[7].length + "") && te(_, b), (!H || F[0] & /*currentPage, totalPages*/
      9216 && M !== (M = /*currentPage*/
      j[10] === /*totalPages*/
      j[13])) && (p.disabled = M);
    },
    i(j) {
      H || (C(l.$$.fragment, j), C(k.$$.fragment, j), H = !0);
    },
    o(j) {
      N(l.$$.fragment, j), N(k.$$.fragment, j), H = !1;
    },
    d(j) {
      j && L(t), W(l), W(k), x = !1, Ce(q);
    }
  };
}
function yi(e) {
  let t, n, l, r, i, o;
  return {
    c() {
      t = w("div"), n = w("div"), l = w("div"), r = P(), i = w("span"), o = G(
        /*loadingMessage*/
        e[4]
      ), m(l, "class", "w-2 h-2 bg-blue-500 rounded-full animate-pulse"), m(i, "class", "text-sm text-blue-700 dark:text-blue-300 font-medium"), m(n, "class", "flex items-center space-x-2"), m(t, "class", "mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg");
    },
    m(f, a) {
      R(f, t, a), h(t, n), h(n, l), h(n, r), h(n, i), h(i, o);
    },
    p(f, a) {
      a[0] & /*loadingMessage*/
      16 && te(
        o,
        /*loadingMessage*/
        f[4]
      );
    },
    d(f) {
      f && L(t);
    }
  };
}
function Ms(e) {
  let t, n, l, r, i, o, f, a, s, u, c, d, g, b, _, y, p, k, M, H;
  o = new _e({
    props: { icon: Ko, class: "inline mr-2" }
  });
  let x = (
    /*selectedConceptIDs*/
    e[11].size > 0 && ci(e)
  );
  function q(E, B) {
    return (
      /*queryByName*/
      E[0] ? hs : bs
    );
  }
  let j = q(e), F = j(e);
  const O = [ps, ys, _s], D = [];
  function z(E, B) {
    return (
      /*isLoading*/
      E[3] ? 0 : (
        /*isAnalyzed*/
        E[2] ? 2 : 1
      )
    );
  }
  return y = z(e), p = D[y] = O[y](e), {
    c() {
      t = w("div"), n = w("h2"), l = G(
        /*scopeName*/
        e[1]
      ), r = P(), i = w("button"), Y(o.$$.fragment), f = G(`
    Query `), x && x.c(), s = P(), u = w("button"), F.c(), d = P(), g = w("input"), b = P(), _ = w("div"), p.c(), m(n, "class", "text-2xl font-bold text-gray-900 dark:text-gray-100 flex-auto"), m(i, "class", "px-3 py-1.5 font-semibold rounded transition-colors duration-200 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-200/50 disabled:dark:bg-gray-700/50 text-white disabled:text-gray-500/50"), i.disabled = a = /*selectedConceptIDs*/
      e[11].size == 0, u.disabled = c = /*selectedConceptIDs*/
      e[11].size == 0, m(u, "class", "px-3 py-1.5 font-semibold rounded transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), m(u, "title", "Change whether to add to query by concept name or ID"), m(g, "type", "search"), m(g, "class", "shrink-1 ml-4 px-3 py-1.5 rounded overflow-hidden focus:bg-white bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline focus:outline-blue-500 w-64 transition-colors duration-200"), m(g, "placeholder", "Filter concepts..."), m(g, "autocomplete", "off"), m(t, "class", "pb-6 shrink-0 flex items-center justify-between gap-2"), m(_, "class", "w-full flex-auto flex flex-col h-0");
    },
    m(E, B) {
      R(E, t, B), h(t, n), h(n, l), h(t, r), h(t, i), V(o, i, null), h(i, f), x && x.m(i, null), h(t, s), h(t, u), F.m(u, null), h(t, d), h(t, g), Ft(
        g,
        /*search*/
        e[9]
      ), R(E, b, B), R(E, _, B), D[y].m(_, null), k = !0, M || (H = [
        ne(
          i,
          "click",
          /*click_handler*/
          e[26]
        ),
        ne(
          u,
          "click",
          /*click_handler_1*/
          e[27]
        ),
        ne(
          g,
          "input",
          /*input_input_handler*/
          e[28]
        )
      ], M = !0);
    },
    p(E, B) {
      (!k || B[0] & /*scopeName*/
      2) && te(
        l,
        /*scopeName*/
        E[1]
      ), /*selectedConceptIDs*/
      E[11].size > 0 ? x ? x.p(E, B) : (x = ci(E), x.c(), x.m(i, null)) : x && (x.d(1), x = null), (!k || B[0] & /*selectedConceptIDs*/
      2048 && a !== (a = /*selectedConceptIDs*/
      E[11].size == 0)) && (i.disabled = a), j !== (j = q(E)) && (F.d(1), F = j(E), F && (F.c(), F.m(u, null))), (!k || B[0] & /*selectedConceptIDs*/
      2048 && c !== (c = /*selectedConceptIDs*/
      E[11].size == 0)) && (u.disabled = c), B[0] & /*search*/
      512 && g.value !== /*search*/
      E[9] && Ft(
        g,
        /*search*/
        E[9]
      );
      let S = y;
      y = z(E), y === S ? D[y].p(E, B) : (le(), N(D[S], 1, 1, () => {
        D[S] = null;
      }), re(), p = D[y], p ? p.p(E, B) : (p = D[y] = O[y](E), p.c()), C(p, 1), p.m(_, null));
    },
    i(E) {
      k || (C(o.$$.fragment, E), C(p), k = !0);
    },
    o(E) {
      N(o.$$.fragment, E), N(p), k = !1;
    },
    d(E) {
      E && L(t), W(o), x && x.d(), F.d(), E && L(b), E && L(_), D[y].d(), M = !1, Ce(H);
    }
  };
}
const We = 50;
function zs(e, t, n) {
  let l, r, i, o, f, a, s, u, c, d;
  I(e, Fl, (A) => n(20, d = A));
  let { scopeName: g = "" } = t, { isAnalyzed: b = !1 } = t, { isLoading: _ = !1 } = t, { loadingMessage: y = "" } = t, { onAnalyze: p = () => {
  } } = t, { onInsert: k = () => {
  } } = t, { concepts: M = [] } = t, { scopeConcepts: H = {} } = t, { queryByName: x = !1 } = t, q = "", j = 1;
  function F() {
    j > 1 && n(10, j -= 1);
  }
  function O() {
    j < a && n(10, j += 1);
  }
  let D = /* @__PURE__ */ new Set();
  function z() {
    u ? (o.forEach((A) => D.delete(A.id)), n(11, D = new Set(D))) : (o.forEach((A) => D.add(A.id)), n(11, D = new Set(D)));
  }
  function E(A) {
    D.has(A) ? D.delete(A) : D.add(A), n(11, D = new Set(D));
  }
  const B = () => {
    if (x) {
      let A = M.filter(($) => D.has($.id)).map(($) => "'" + $.name + "'");
      k(g, `name in (${A.join(", ")})`);
    } else {
      let A;
      M.some(($) => typeof $.id == "string" && Number.isNaN(parseFloat($.id))) ? A = M.filter(($) => D.has($.id)).map(($) => `'${$.id}'`) : A = M.filter(($) => D.has($.id)).map(($) => `${$.id}`), k(g, `id in (${A.join(", ")})`);
    }
  }, S = () => n(0, x = !x);
  function T() {
    q = this.value, n(9, q);
  }
  const Q = () => p(), U = () => p(), oe = (A) => E(A.id), ee = (A) => {
    x ? k(g, `name = '${A.name}'`) : typeof A.id == "string" && Number.isNaN(parseFloat(A.id)) ? k(g, `id = '${A.id}'`) : k(g, `id = ${A.id}`);
  };
  return e.$$set = (A) => {
    "scopeName" in A && n(1, g = A.scopeName), "isAnalyzed" in A && n(2, b = A.isAnalyzed), "isLoading" in A && n(3, _ = A.isLoading), "loadingMessage" in A && n(4, y = A.loadingMessage), "onAnalyze" in A && n(5, p = A.onAnalyze), "onInsert" in A && n(6, k = A.onInsert), "concepts" in A && n(7, M = A.concepts), "scopeConcepts" in A && n(8, H = A.scopeConcepts), "queryByName" in A && n(0, x = A.queryByName);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*concepts*/
    128 && n(19, l = M.reduce((A, $) => A + $.count, 0)), e.$$.dirty[0] & /*concepts*/
    128 && n(18, r = M.some((A) => A.name.startsWith("Concept "))), e.$$.dirty[0] & /*scopeConcepts*/
    256 && n(17, i = H && H.error), e.$$.dirty[0] & /*search, concepts*/
    640 && n(25, o = q.trim() ? M.filter((A) => (A.name ?? "").toLocaleLowerCase().includes(q.trim().toLocaleLowerCase()) || `${A.id ?? ""}`.toLocaleLowerCase().includes(q.trim().toLocaleLowerCase())) : M), e.$$.dirty[0] & /*filteredConcepts*/
    33554432 && n(14, f = [...o].sort((A, $) => $.count - A.count)), e.$$.dirty[0] & /*sortedConcepts*/
    16384 && n(13, a = Math.max(1, Math.ceil(f.length / We))), e.$$.dirty[0] & /*currentPage, totalPages*/
    9216 && j > a && n(10, j = 1), e.$$.dirty[0] & /*sortedConcepts, currentPage*/
    17408 && n(16, s = f.slice((j - 1) * We, j * We)), e.$$.dirty[0] & /*filteredConcepts, selectedConceptIDs*/
    33556480 && n(12, u = o.length > 0 && o.every((A) => D.has(A.id))), e.$$.dirty[0] & /*filteredConcepts, selectedConceptIDs, allFilteredSelected*/
    33560576 && n(15, c = o.some((A) => D.has(A.id)) && !u);
  }, [
    x,
    g,
    b,
    _,
    y,
    p,
    k,
    M,
    H,
    q,
    j,
    D,
    u,
    a,
    f,
    c,
    s,
    i,
    r,
    l,
    d,
    F,
    O,
    z,
    E,
    o,
    B,
    S,
    T,
    Q,
    U,
    oe,
    ee
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
      n && L(t);
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
      r && L(t), Ne(l, r);
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
      t = w("button"), l = G(n), r = P(), m(t, "class", i = "w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 " + /*selectedScope*/
      (e[0] === /*scope*/
      e[13] ? "bg-blue-100 dark:bg-blue-500 text-blue-700 dark:text-white font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"));
    },
    m(s, u) {
      R(s, t, u), h(t, l), h(t, r), o || (f = ne(t, "click", a), o = !0);
    },
    p(s, u) {
      e = s, u & /*scopes*/
      4 && n !== (n = /*scope*/
      e[13] + "") && te(l, n), u & /*selectedScope, scopes*/
      5 && i !== (i = "w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 " + /*selectedScope*/
      (e[0] === /*scope*/
      e[13] ? "bg-blue-100 dark:bg-blue-500 text-blue-700 dark:text-white font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600")) && m(t, "class", i);
    },
    d(s) {
      s && L(t), o = !1, f();
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
      n && L(t);
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
      n || (C(t.$$.fragment, l), n = !0);
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
  function d(k, M) {
    return (
      /*scopes*/
      k[2].length > 0 ? Ns : Rs
    );
  }
  let g = d(e), b = g(e);
  const _ = [Es, As], y = [];
  function p(k, M) {
    return (
      /*selectedScope*/
      k[0] ? 0 : 1
    );
  }
  return a = p(e), s = y[a] = _[a](e), {
    c() {
      t = w("div"), n = w("div"), l = w("h3"), l.textContent = "Scopes", r = P(), i = w("div"), b.c(), o = P(), f = w("div"), s.c(), m(l, "class", "px-4 py-3 font-semibold uppercase text-gray-900 dark:text-gray-100 shrink-0"), m(i, "class", "px-4 min-h-0 overflow-auto"), m(n, "class", "w-1/4 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex-shrink-0 h-full flex flex-col"), m(f, "class", "flex-auto bg-white dark:bg-gray-900 p-6 flex flex-col h-full"), m(t, "class", u = "flex h-full " + /*width*/
      e[1] + " overflow-hidden");
    },
    m(k, M) {
      R(k, t, M), h(t, n), h(n, l), h(n, r), h(n, i), b.m(i, null), h(t, o), h(t, f), y[a].m(f, null), c = !0;
    },
    p(k, [M]) {
      g === (g = d(k)) && b ? b.p(k, M) : (b.d(1), b = g(k), b && (b.c(), b.m(i, null)));
      let H = a;
      a = p(k), a === H ? y[a].p(k, M) : (le(), N(y[H], 1, 1, () => {
        y[H] = null;
      }), re(), s = y[a], s ? s.p(k, M) : (s = y[a] = _[a](k), s.c()), C(s, 1), s.m(f, null)), (!c || M & /*width*/
      2 && u !== (u = "flex h-full " + /*width*/
      k[1] + " overflow-hidden")) && m(t, "class", u);
    },
    i(k) {
      c || (C(s), c = !0);
    },
    o(k) {
      N(s), c = !1;
    },
    d(k) {
      k && L(t), b.d(), y[a].d();
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
var js = ea.exports;
const ta = /* @__PURE__ */ Os(js), na = [
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
function Ci(e) {
  let t, n = (
    /*autocompleteOptions*/
    e[6]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Si(vi(e, n, r));
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
          l[o] ? l[o].p(f, i) : (l[o] = Si(f), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(r) {
      r && L(t), Ne(l, r), e[23](null);
    }
  };
}
function Si(e) {
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
      t = w("div"), n = w("div"), l = w("span"), i = G(r), o = P(), f = w("span"), s = G(a), u = P(), m(l, "class", "font-mono text-sm"), m(f, "class", "text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"), m(n, "class", "flex items-center justify-between"), m(t, "class", c = "px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors " + /*index*/
      (e[35] === /*selectedIndex*/
      e[7] ? "bg-blue-600 text-white" : "text-gray-700 dark:text-gray-200")), m(t, "role", "button"), m(t, "tabindex", "0");
    },
    m(p, k) {
      R(p, t, k), h(t, n), h(n, l), h(l, i), h(n, o), h(n, f), h(f, s), h(t, u), d || (g = [
        ne(t, "click", b),
        ne(t, "keydown", _),
        ne(t, "mouseenter", y)
      ], d = !0);
    },
    p(p, k) {
      e = p, k[0] & /*autocompleteOptions*/
      64 && r !== (r = /*option*/
      e[33].value + "") && te(i, r), k[0] & /*autocompleteOptions*/
      64 && a !== (a = /*option*/
      e[33].type === "data_item" ? "field" : "const") && te(s, a), k[0] & /*selectedIndex*/
      128 && c !== (c = "px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors " + /*index*/
      (e[35] === /*selectedIndex*/
      e[7] ? "bg-blue-600 text-white" : "text-gray-700 dark:text-gray-200")) && m(t, "class", c);
    },
    d(p) {
      p && L(t), d = !1, Ce(g);
    }
  };
}
function Ps(e) {
  let t, n, l, r, i, o, f, a, s, u, c, d, g, b, _, y, p, k, M, H, x, q = (
    /*showAutocomplete*/
    e[8] && /*autocompleteOptions*/
    e[6].length > 0 && Ci(e)
  );
  return d = new _e({
    props: { icon: Vo, class: "inline mr-2" }
  }), y = new _e({
    props: { icon: Wo, class: "inline mr-2" }
  }), {
    c() {
      t = w("div"), n = w("div"), n.innerHTML = '<h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 pr-2">TempoQL Query</h3>', l = P(), r = w("div"), i = w("textarea"), o = P(), f = w("div"), a = P(), q && q.c(), s = P(), u = w("div"), c = w("button"), Y(d.$$.fragment), g = G(`
        History`), b = P(), _ = w("button"), Y(y.$$.fragment), p = G(`
        Run Query`), m(n, "class", "flex items-center mb-4 gap-2 shrink-0"), m(i, "id", "text-input"), m(i, "class", "w-full h-full p-4 pb-16 bg-transparent font-mono text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none overflow-hidden min-h-[120px] relative z-20 svelte-1w5ogy4"), m(i, "placeholder", "// Write your Tempo-QL query here... (Ctrl+Z to undo, Ctrl+Y to redo)"), m(i, "autocomplete", "false"), m(i, "autocapitalize", "false"), m(i, "autocorrect", "false"), m(i, "spellcheck", "false"), m(i, "rows", "1"), Z(i, "color", "transparent"), Z(i, "caret-color", "currentColor"), m(f, "class", "absolute top-0 left-0 w-full h-full p-4 pb-16 font-mono text-sm pointer-events-none bg-transparent z-10 text-wrap whitespace-pre-wrap break-words text-gray-900 dark:text-gray-100 svelte-1w5ogy4"), m(
        f,
        "id",
        /*highlightedViewID*/
        e[9]
      ), m(c, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), m(c, "title", "View query history"), m(_, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white"), _.disabled = k = !/*value*/
      e[0].trim(), ie(_, "opacity-50", !/*value*/
      e[0].trim()), ie(_, "cursor-not-allowed", !/*value*/
      e[0].trim()), m(u, "class", "absolute right-0 bottom-0 mr-4 mb-4 flex justify-end items-center gap-2 z-50"), m(r, "class", "relative flex-auto min-h-0"), m(t, "class", "flex flex-col w-full h-full p-4 mb-2");
    },
    m(j, F) {
      R(j, t, F), h(t, n), h(t, l), h(t, r), h(r, i), e[17](i), Ft(
        i,
        /*value*/
        e[0]
      ), h(r, o), h(r, f), e[19](f), h(r, a), q && q.m(r, null), h(r, s), h(r, u), h(u, c), V(d, c, null), h(c, g), h(u, b), h(u, _), V(y, _, null), h(_, p), M = !0, H || (x = [
        ne(
          i,
          "input",
          /*textarea_1_input_handler*/
          e[18]
        ),
        ne(
          i,
          "input",
          /*handleInput*/
          e[10]
        ),
        ne(
          i,
          "keydown",
          /*handleKeydown*/
          e[11]
        ),
        ne(c, "click", function() {
          nt(
            /*onHistoryClick*/
            e[2]
          ) && e[2].apply(this, arguments);
        }),
        ne(_, "click", function() {
          nt(
            /*onRun*/
            e[1]
          ) && e[1].apply(this, arguments);
        })
      ], H = !0);
    },
    p(j, F) {
      e = j, F[0] & /*value*/
      1 && Ft(
        i,
        /*value*/
        e[0]
      ), /*showAutocomplete*/
      e[8] && /*autocompleteOptions*/
      e[6].length > 0 ? q ? q.p(e, F) : (q = Ci(e), q.c(), q.m(r, s)) : q && (q.d(1), q = null), (!M || F[0] & /*value*/
      1 && k !== (k = !/*value*/
      e[0].trim())) && (_.disabled = k), (!M || F[0] & /*value*/
      1) && ie(_, "opacity-50", !/*value*/
      e[0].trim()), (!M || F[0] & /*value*/
      1) && ie(_, "cursor-not-allowed", !/*value*/
      e[0].trim());
    },
    i(j) {
      M || (C(d.$$.fragment, j), C(y.$$.fragment, j), M = !0);
    },
    o(j) {
      N(d.$$.fragment, j), N(y.$$.fragment, j), M = !1;
    },
    d(j) {
      j && L(t), e[17](null), e[19](null), q && q.d(), W(d), W(y), H = !1, Ce(x);
    }
  };
}
function Fs(e, t, n) {
  let { value: l = "" } = t, { onInput: r = () => {
  } } = t, { width: i = "w-full max-w-2xl" } = t, { dataFields: o = [] } = t, { onRun: f = () => {
  } } = t, { onExplain: a = () => {
  } } = t, { onHistoryClick: s = () => {
  } } = t, u, c, d, g = [], b = 0, _ = !1, y = 0, p = "highlightView-" + new Array(20).fill(0).map(() => Math.floor(Math.random() * 10)).join(""), k = [], M = -1, H = !1;
  st(() => {
    q(""), document.addEventListener("click", x);
  }), Ea(() => {
    document.removeEventListener("click", x);
  });
  function x(A) {
    if (c && u) {
      const $ = A.target, J = c.contains($), se = u.contains($);
      (!J || se && _) && (console.log("🖱️ Click detected - closing autocomplete"), n(8, _ = !1));
    }
  }
  function q(A) {
    if (H) {
      H = !1;
      return;
    }
    k = k.slice(0, M + 1), k.push(A), M = k.length - 1, k.length > 50 && (k = k.slice(-50), M = k.length - 1), console.log("📝 Added to history:", A, "Index:", M);
  }
  function j() {
    if (M > 0) {
      H = !0, M--;
      const A = k[M];
      console.log("↶ Undo to:", A), n(0, l = A), r(A), u && (n(3, u.value = A, u), u.focus());
    }
  }
  function F() {
    if (M < k.length - 1) {
      H = !0, M++;
      const A = k[M];
      console.log("↷ Redo to:", A), n(0, l = A), r(A), u && (n(3, u.value = A, u), u.focus());
    }
  }
  function O(A) {
    const $ = A.target, J = $.value;
    console.log("🔍 handleInput - New value:", J), console.log("🔍 handleInput - Cursor position:", $.selectionStart), q(J), n(0, l = J), r(J), y = $.selectionStart || 0, console.log("🔍 handleInput - Updated cursor position:", y), D(J, y);
  }
  function D(A, $) {
    console.log("🔍 updateAutocompleteOptions - Text:", A), console.log("🔍 updateAutocompleteOptions - Position:", $);
    const J = A.substring(0, $), se = A.substring($);
    console.log("🔍 updateAutocompleteOptions - Before cursor:", J), console.log("🔍 updateAutocompleteOptions - After cursor:", se);
    const pe = J.match(/([^\s]*)$/), Se = pe ? pe[1] : "";
    console.log("🔍 updateAutocompleteOptions - Current word:", Se), console.log("🔍 updateAutocompleteOptions - Data fields available:", o), Se.length > 0 ? (n(6, g = xs(o, Se, J)), console.log("🔍 updateAutocompleteOptions - Autocomplete options:", g), n(8, _ = g.length > 0), n(7, b = 0), console.log("🔍 updateAutocompleteOptions - Show autocomplete:", _)) : (n(8, _ = !1), console.log("🔍 updateAutocompleteOptions - No current word, hiding autocomplete"));
  }
  function z(A) {
    if (console.log("🔍 handleKeydown - Key pressed:", A.key), console.log("🔍 handleKeydown - Show autocomplete:", _), console.log("🔍 handleKeydown - Options count:", g.length), A.ctrlKey || A.metaKey) {
      if (A.key === "z" && !A.shiftKey) {
        A.preventDefault(), console.log("⌨️ Ctrl+Z pressed - Undo"), j();
        return;
      } else if (A.key === "y" || A.key === "z" && A.shiftKey) {
        A.preventDefault(), console.log("⌨️ Ctrl+Y or Ctrl+Shift+Z pressed - Redo"), F();
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
        _ && (A.preventDefault(), console.log("🔍 handleKeydown - Enter pressed, selecting option:", g[b]), E(g[b]));
        break;
      case "Escape":
        n(8, _ = !1), console.log("🔍 handleKeydown - Escape pressed, hiding autocomplete");
        break;
      case "Tab":
        _ && (A.preventDefault(), console.log("🔍 handleKeydown - Tab pressed, selecting option:", g[b]), E(g[b]));
        break;
    }
  }
  function E(A) {
    console.log("🔍 selectAutocompleteOption - Selected option:", A), console.log("🔍 selectAutocompleteOption - Current value:", l), console.log("🔍 selectAutocompleteOption - Cursor position:", y);
    const $ = l.substring(0, y), J = l.substring(y);
    console.log("🔍 selectAutocompleteOption - Before cursor:", $), console.log("🔍 selectAutocompleteOption - After cursor:", J);
    const se = $.match(/([^\s]*)$/), pe = se ? se[1] : "", Se = $.length - pe.length;
    console.log("🔍 selectAutocompleteOption - Current word:", pe), console.log("🔍 selectAutocompleteOption - Word start position:", Se);
    let we;
    if (A.type === "data_item")
      if (pe.includes("{")) {
        const Re = $.match(/\{([^}]*?)(?:,\s*([^},]*))?$/);
        Re ? Re[2] ? we = $.substring(0, Re.index + Re[1].length + 2) + A.value : we = $.substring(0, Re.index + 1) + A.value : we = $ + A.value;
      } else
        we = $ + "{" + A.value;
    else
      we = $.substring(0, Se) + "#" + A.value;
    console.log("🔍 selectAutocompleteOption - Replacement:", we);
    const Ae = we + J;
    console.log("🔍 selectAutocompleteOption - New value:", Ae), n(0, l = Ae), r(Ae);
    const je = we.length;
    console.log("🔍 selectAutocompleteOption - New cursor position:", je), setTimeout(
      () => {
        u && (u.setSelectionRange(je, je), u.focus(), console.log("🔍 selectAutocompleteOption - Cursor position set"));
      },
      0
    ), n(8, _ = !1), console.log("🔍 selectAutocompleteOption - Autocomplete hidden");
  }
  function B(A) {
    Me[A ? "unshift" : "push"](() => {
      u = A, n(3, u), n(0, l);
    });
  }
  function S() {
    l = this.value, n(0, l);
  }
  function T(A) {
    Me[A ? "unshift" : "push"](() => {
      d = A, n(4, d), n(0, l), n(9, p);
    });
  }
  const Q = (A) => E(A), U = (A, $) => {
    ($.key === "Enter" || $.key === " ") && ($.preventDefault(), E(A));
  }, oe = (A) => n(7, b = A);
  function ee(A) {
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
    z,
    E,
    r,
    i,
    o,
    a,
    B,
    S,
    T,
    Q,
    U,
    oe,
    ee
  ];
}
class Is extends me {
  constructor(t) {
    super(), ge(
      this,
      t,
      Fs,
      Ps,
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
function Hs(e) {
  return e === 0 ? !0 : e;
}
function et(e) {
  return Hs(e) ? Array.isArray(e) ? (t) => e.map((n) => typeof n != "function" ? t[n] : n(t)) : typeof e != "function" ? (t) => t[e] : e : null;
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
function jl(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Xs(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ia(e) {
  let t, n, l;
  e.length !== 2 ? (t = jl, n = (f, a) => jl(e(f), a), l = (f, a) => e(f) - a) : (t = e === jl || e === Xs ? e : Ys, n = e, l = e);
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
const Zs = ia(jl), Js = Zs.right;
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
function He(e) {
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
  var e = Ri, t = Ri, n = Er, l, r, i, o = He, f, a, s;
  function u() {
    var d = Math.min(e.length, t.length);
    return o !== He && (o = uu(e[0], e[d - 1])), f = d > 2 ? du : cu, a = s = null, c;
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
    return arguments.length ? (o = d ? !0 : He, u()) : o !== He;
  }, c.interpolate = function(d) {
    return arguments.length ? (n = d, u()) : n;
  }, c.unknown = function(d) {
    return arguments.length ? (i = d, c) : i;
  }, function(d, g) {
    return l = d, r = g, u();
  };
}
function gu() {
  return aa()(He, He);
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
  var t = e(He, He), n = 1;
  function l() {
    return n === 1 ? e(He, He) : n === 0.5 ? e(bu, hu) : e(Ni(n), Ni(1 / n));
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
function Cu(e) {
  return (t) => Math.sign(t) * Math.expm1(Math.abs(t)) * e;
}
function Dl(e) {
  return function(n) {
    return n < 0 ? -Math.pow(-n, e) : Math.pow(n, e);
  };
}
function Su(e) {
  const t = pu(e);
  if (t === "log") {
    const n = Math.sign(e.domain()[0]);
    return { lift: ku(n), ground: wu(n), scaleType: t };
  }
  return t === "pow" ? { lift: Dl(1), ground: Dl(1 / 1), scaleType: t } : t === "sqrt" ? { lift: Dl(0.5), ground: Dl(1 / 0.5), scaleType: t } : t === "symlog" ? { lift: vu(1), ground: Cu(1), scaleType: t } : { lift: Ai, ground: Ai, scaleType: t };
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
  const { lift: n, ground: l } = Su(e), r = e.domain()[0], i = Object.prototype.toString.call(r) === "[object Date]", [o, f] = e.domain().map((g) => n(i ? g.getTime() : g)), [a, s] = e.range(), u = t[0] || 0, c = t[1] || 0, d = (f - o) / (Math.abs(s - a) - u - c);
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
const Ie = "    ";
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
    console.log(`${Ie}${t}:`, n);
  });
}
function qu(e, t, n) {
  const l = ua(t);
  console.log(`${Ie}${e}:`), console.log(`${Ie}${Ie}Accessor: "${n.toString()}"`), console.log(`${Ie}${Ie}Type: ${l}`), Ei(t, "domain"), Ei(t, "range", " ");
}
function Ei(e, t, n = "") {
  const l = e[t](), r = xu(l);
  r ? Tu(r, t, l) : console.log(`${Ie}${Ie}${Xl(t)}:${n}`, l);
}
function Tu(e, t, n) {
  console.log(
    `${Ie}${Ie}${Xl(t)}:    %cArray%c(${n.length}) ` + e[0] + "%c ]",
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
      t = w("div"), i && i.c(), m(t, "class", "layercake-container svelte-vhzpsp"), Pl(() => (
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
      l || (C(i, o), l = !0);
    },
    o(o) {
      N(i, o), l = !1;
    },
    d(o) {
      o && L(t), i && i.d(o), e[154](null), n();
    }
  };
}
function ju(e) {
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
      8 && C(l, 1)) : (l = qi(r), l.c(), C(l, 1), l.m(t.parentNode, t)) : l && (le(), N(l, 1, 1, () => {
        l = null;
      }), re());
    },
    i(r) {
      n || (C(l), n = !0);
    },
    o(r) {
      N(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && L(t);
    }
  };
}
function Pu(e, t, n) {
  let l, r, i, o, f, a, s, u, c, d, g, b, _, y, p, k, M, H, x, q, j, F, O, D, z, E, B, S, T, Q, U, oe, ee, A, $, J, se, pe, Se, we, Ae, je, Re, Pe, lt, Bt, ut, ct, Xe, Ye, Ue, Ln, Rn, Nn, An, En, Dn, qn, Tn, xn, On, jn, { $$slots: er = {}, $$scope: Pn } = t;
  const tr = Bs(Eu, 200);
  let { ssr: Gt = !1 } = t, { pointerEvents: Fn = !0 } = t, { position: X = "relative" } = t, { percentRange: dt = !1 } = t, { width: nr = void 0 } = t, { height: lr = void 0 } = t, { containerWidth: gt = nr || 100 } = t, { containerHeight: mt = lr || 100 } = t, { element: In = void 0 } = t, { x: bt = void 0 } = t, { y: ht = void 0 } = t, { z: _t = void 0 } = t, { r: yt = void 0 } = t, { data: pt = [] } = t, { xDomain: kt = void 0 } = t, { yDomain: wt = void 0 } = t, { zDomain: vt = void 0 } = t, { rDomain: Ct = void 0 } = t, { xNice: Hn = !1 } = t, { yNice: Qn = !1 } = t, { zNice: Bn = !1 } = t, { rNice: Gn = !1 } = t, { xPadding: Vn = void 0 } = t, { yPadding: Wn = void 0 } = t, { zPadding: Kn = void 0 } = t, { rPadding: Xn = void 0 } = t, { xScale: Yn = bn.x } = t, { yScale: Vt = bn.y } = t, { zScale: Un = bn.z } = t, { rScale: Zn = bn.r } = t, { xRange: St = void 0 } = t, { yRange: Mt = void 0 } = t, { zRange: zt = void 0 } = t, { rRange: Lt = void 0 } = t, { xReverse: Jn = !1 } = t, { yReverse: $n = void 0 } = t, { zReverse: el = !1 } = t, { rReverse: tl = !1 } = t, { padding: nl = {} } = t, { extents: ll = {} } = t, { flatData: rl = void 0 } = t, { custom: il = {} } = t, { debug: rr = !1 } = t, ir = !1;
  st(() => {
    ir = !0;
  });
  const ue = {}, Ze = fe(dt);
  I(e, Ze, (v) => n(33, lt = v));
  const Rt = fe(gt);
  I(e, Rt, (v) => n(32, Pe = v));
  const Nt = fe(mt);
  I(e, Nt, (v) => n(31, Re = v));
  const ol = fe(kr(ll));
  I(e, ol, (v) => n(170, je = v));
  const al = fe(pt);
  I(e, al, (v) => n(30, Ae = v));
  const Wt = fe(rl || pt);
  I(e, Wt, (v) => n(29, we = v));
  const fl = fe(nl);
  I(e, fl, (v) => n(169, Se = v));
  const At = fe(et(bt));
  I(e, At, (v) => n(28, pe = v));
  const Et = fe(et(ht));
  I(e, Et, (v) => n(27, se = v));
  const Dt = fe(et(_t));
  I(e, Dt, (v) => n(26, J = v));
  const qt = fe(et(yt));
  I(e, qt, (v) => n(25, $ = v));
  const sl = fe(kt);
  I(e, sl, (v) => n(168, A = v));
  const ul = fe(wt);
  I(e, ul, (v) => n(167, ee = v));
  const cl = fe(vt);
  I(e, cl, (v) => n(166, oe = v));
  const dl = fe(Ct);
  I(e, dl, (v) => n(165, U = v));
  const Kt = fe(Hn);
  I(e, Kt, (v) => n(24, Q = v));
  const Xt = fe(Qn);
  I(e, Xt, (v) => n(23, T = v));
  const Yt = fe(Bn);
  I(e, Yt, (v) => n(22, S = v));
  const Ut = fe(Gn);
  I(e, Ut, (v) => n(21, B = v));
  const Zt = fe(Jn);
  I(e, Zt, (v) => n(20, E = v));
  const Jt = fe(l);
  I(e, Jt, (v) => n(19, z = v));
  const $t = fe(el);
  I(e, $t, (v) => n(18, D = v));
  const en = fe(tl);
  I(e, en, (v) => n(17, O = v));
  const tn = fe(Vn);
  I(e, tn, (v) => n(16, F = v));
  const nn = fe(Wn);
  I(e, nn, (v) => n(15, j = v));
  const ln = fe(Kn);
  I(e, ln, (v) => n(14, q = v));
  const rn = fe(Xn);
  I(e, rn, (v) => n(13, x = v));
  const gl = fe(St);
  I(e, gl, (v) => n(164, H = v));
  const ml = fe(Mt);
  I(e, ml, (v) => n(163, M = v));
  const bl = fe(zt);
  I(e, bl, (v) => n(162, k = v));
  const hl = fe(Lt);
  I(e, hl, (v) => n(161, p = v));
  const on = fe(Yn);
  I(e, on, (v) => n(160, y = v));
  const an = fe(Vt);
  I(e, an, (v) => n(159, _ = v));
  const fn = fe(Un);
  I(e, fn, (v) => n(158, b = v));
  const sn = fe(Zn);
  I(e, sn, (v) => n(157, g = v));
  const _l = fe(ue);
  I(e, _l, (v) => n(11, c = v));
  const yl = fe(il);
  I(e, yl, (v) => n(12, d = v));
  const pl = be([At, Et, Dt, qt], ([v, Ge, Fe, ve]) => {
    const rt = {};
    return v && (rt.x = v), Ge && (rt.y = Ge), Fe && (rt.z = Fe), ve && (rt.r = ve), rt;
  });
  I(e, pl, (v) => n(10, s = v));
  const kl = be([fl, Rt, Nt], ([v]) => Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, v));
  I(e, kl, (v) => n(37, Xe = v));
  const wl = be([Rt, Nt, kl], ([v, Ge, Fe]) => {
    const ve = {};
    return ve.top = Fe.top, ve.right = v - Fe.right, ve.bottom = Ge - Fe.bottom, ve.left = Fe.left, ve.width = ve.right - ve.left, ve.height = ve.bottom - ve.top, ve.width <= 0 && ir === !0 && console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?"), ve.height <= 0 && ir === !0 && console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?"), ve;
  });
  I(e, wl, (v) => n(151, u = v));
  const Je = be([wl], ([v]) => v.width);
  I(e, Je, (v) => n(34, Bt = v));
  const $e = be([wl], ([v]) => v.height);
  I(e, $e, (v) => n(35, ut = v));
  const Ee = be([Wt, pl, ol, on, an, sn, fn], ([v, Ge, Fe, ve, rt, ka, wa]) => {
    const va = {
      x: ve,
      y: rt,
      r: ka,
      z: wa
    }, br = kr(Ge, Fe), Ca = Object.fromEntries(Object.keys(br).map((hr) => [hr, va[hr]]));
    return Object.keys(br).length > 0 ? { ...Ws(v, br, Ca), ...Fe } : {};
  });
  I(e, Ee, (v) => n(38, Ye = v));
  const vl = be([Ee, sl], El("x"));
  I(e, vl, (v) => n(39, Ue = v));
  const Cl = be([Ee, ul], El("y"));
  I(e, Cl, (v) => n(40, Ln = v));
  const Sl = be([Ee, cl], El("z"));
  I(e, Sl, (v) => n(41, Rn = v));
  const Ml = be([Ee, dl], El("r"));
  I(e, Ml, (v) => n(42, Nn = v));
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
  I(e, un, (v) => n(9, a = v));
  const or = be([At, un], Tl);
  I(e, or, (v) => n(47, Tn = v));
  const cn = be(
    [
      an,
      Ee,
      Cl,
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
  I(e, cn, (v) => n(8, f = v));
  const ar = be([Et, cn], Tl);
  I(e, ar, (v) => n(48, xn = v));
  const dn = be(
    [
      fn,
      Ee,
      Sl,
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
  I(e, dn, (v) => n(7, o = v));
  const fr = be([Dt, dn], Tl);
  I(e, fr, (v) => n(49, On = v));
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
  I(e, gn, (v) => n(6, i = v));
  const sr = be([qt, gn], Tl);
  I(e, sr, (v) => n(50, jn = v));
  const ur = be([un], xl);
  I(e, ur, (v) => n(43, An = v));
  const cr = be([cn], xl);
  I(e, cr, (v) => n(44, En = v));
  const dr = be([dn], xl);
  I(e, dr, (v) => n(45, Dn = v));
  const gr = be([gn], xl);
  I(e, gr, (v) => n(46, qn = v));
  const mr = be([Je, $e], ([v, Ge]) => v / Ge);
  I(e, mr, (v) => n(36, ct = v));
  function ya(v) {
    Me[v ? "unshift" : "push"](() => {
      In = v, n(2, In);
    });
  }
  function pa() {
    gt = this.clientWidth, mt = this.clientHeight, n(0, gt), n(1, mt);
  }
  return e.$$set = (v) => {
    "ssr" in v && n(3, Gt = v.ssr), "pointerEvents" in v && n(4, Fn = v.pointerEvents), "position" in v && n(5, X = v.position), "percentRange" in v && n(111, dt = v.percentRange), "width" in v && n(112, nr = v.width), "height" in v && n(113, lr = v.height), "containerWidth" in v && n(0, gt = v.containerWidth), "containerHeight" in v && n(1, mt = v.containerHeight), "element" in v && n(2, In = v.element), "x" in v && n(114, bt = v.x), "y" in v && n(115, ht = v.y), "z" in v && n(116, _t = v.z), "r" in v && n(117, yt = v.r), "data" in v && n(118, pt = v.data), "xDomain" in v && n(119, kt = v.xDomain), "yDomain" in v && n(120, wt = v.yDomain), "zDomain" in v && n(121, vt = v.zDomain), "rDomain" in v && n(122, Ct = v.rDomain), "xNice" in v && n(123, Hn = v.xNice), "yNice" in v && n(124, Qn = v.yNice), "zNice" in v && n(125, Bn = v.zNice), "rNice" in v && n(126, Gn = v.rNice), "xPadding" in v && n(127, Vn = v.xPadding), "yPadding" in v && n(128, Wn = v.yPadding), "zPadding" in v && n(129, Kn = v.zPadding), "rPadding" in v && n(130, Xn = v.rPadding), "xScale" in v && n(131, Yn = v.xScale), "yScale" in v && n(132, Vt = v.yScale), "zScale" in v && n(133, Un = v.zScale), "rScale" in v && n(134, Zn = v.rScale), "xRange" in v && n(135, St = v.xRange), "yRange" in v && n(136, Mt = v.yRange), "zRange" in v && n(137, zt = v.zRange), "rRange" in v && n(138, Lt = v.rRange), "xReverse" in v && n(139, Jn = v.xReverse), "yReverse" in v && n(140, $n = v.yReverse), "zReverse" in v && n(141, el = v.zReverse), "rReverse" in v && n(142, tl = v.rReverse), "padding" in v && n(143, nl = v.padding), "extents" in v && n(144, ll = v.extents), "flatData" in v && n(145, rl = v.flatData), "custom" in v && n(146, il = v.custom), "debug" in v && n(147, rr = v.debug), "$$scope" in v && n(152, Pn = v.$$scope);
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
    536870912 && Ct && n(148, ue.rDomain = Ct, ue), e.$$.dirty[4] & /*xRange*/
    2048 && St && n(148, ue.xRange = St, ue), e.$$.dirty[4] & /*yRange*/
    4096 && Mt && n(148, ue.yRange = Mt, ue), e.$$.dirty[4] & /*zRange*/
    8192 && zt && n(148, ue.zRange = zt, ue), e.$$.dirty[4] & /*rRange*/
    16384 && Lt && n(148, ue.rRange = Lt, ue), e.$$.dirty[3] & /*percentRange*/
    262144 && ae(Ze, lt = dt, lt), e.$$.dirty[0] & /*containerWidth*/
    1 && ae(Rt, Pe = gt, Pe), e.$$.dirty[0] & /*containerHeight*/
    2 && ae(Nt, Re = mt, Re), e.$$.dirty[4] & /*extents*/
    1048576 && ae(ol, je = kr(ll), je), e.$$.dirty[3] & /*data*/
    33554432 && ae(al, Ae = pt, Ae), e.$$.dirty[3] & /*data*/
    33554432 | e.$$.dirty[4] & /*flatData*/
    2097152 && ae(Wt, we = rl || pt, we), e.$$.dirty[4] & /*padding*/
    524288 && ae(fl, Se = nl, Se), e.$$.dirty[3] & /*x*/
    2097152 && ae(At, pe = et(bt), pe), e.$$.dirty[3] & /*y*/
    4194304 && ae(Et, se = et(ht), se), e.$$.dirty[3] & /*z*/
    8388608 && ae(Dt, J = et(_t), J), e.$$.dirty[3] & /*r*/
    16777216 && ae(qt, $ = et(yt), $), e.$$.dirty[3] & /*xDomain*/
    67108864 && ae(sl, A = kt, A), e.$$.dirty[3] & /*yDomain*/
    134217728 && ae(ul, ee = wt, ee), e.$$.dirty[3] & /*zDomain*/
    268435456 && ae(cl, oe = vt, oe), e.$$.dirty[3] & /*rDomain*/
    536870912 && ae(dl, U = Ct, U), e.$$.dirty[3] & /*xNice*/
    1073741824 && ae(Kt, Q = Hn, Q), e.$$.dirty[4] & /*yNice*/
    1 && ae(Xt, T = Qn, T), e.$$.dirty[4] & /*zNice*/
    2 && ae(Yt, S = Bn, S), e.$$.dirty[4] & /*rNice*/
    4 && ae(Ut, B = Gn, B), e.$$.dirty[4] & /*xReverse*/
    32768 && ae(Zt, E = Jn, E), e.$$.dirty[4] & /*yReverseValue*/
    67108864 && ae(Jt, z = l, z), e.$$.dirty[4] & /*zReverse*/
    131072 && ae($t, D = el, D), e.$$.dirty[4] & /*rReverse*/
    262144 && ae(en, O = tl, O), e.$$.dirty[4] & /*xPadding*/
    8 && ae(tn, F = Vn, F), e.$$.dirty[4] & /*yPadding*/
    16 && ae(nn, j = Wn, j), e.$$.dirty[4] & /*zPadding*/
    32 && ae(ln, q = Kn, q), e.$$.dirty[4] & /*rPadding*/
    64 && ae(rn, x = Xn, x), e.$$.dirty[4] & /*xRange*/
    2048 && ae(gl, H = St, H), e.$$.dirty[4] & /*yRange*/
    4096 && ae(ml, M = Mt, M), e.$$.dirty[4] & /*zRange*/
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
    yDomain: Cl,
    zDomain: Sl,
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
    In,
    Gt,
    Fn,
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
    j,
    F,
    O,
    D,
    z,
    E,
    B,
    S,
    T,
    Q,
    $,
    J,
    se,
    pe,
    we,
    Ae,
    Re,
    Pe,
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
    jn,
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
    Cl,
    Sl,
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
    Ct,
    Hn,
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
    St,
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
    Pn,
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
      Pu,
      ju,
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
const Fu = (e) => ({ element: e & /*element*/
1 }), Ti = (e) => ({ element: (
  /*element*/
  e[0]
) });
function Iu(e) {
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
          Fu
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
      n || (C(r, i), n = !0);
    },
    o(i) {
      N(r, i), n = !1;
    },
    d(i) {
      i && L(t), r && r.d(i), e[12](null);
    }
  };
}
function Hu(e, t, n) {
  let l, r, { $$slots: i = {}, $$scope: o } = t;
  const { padding: f } = Mn("LayerCake");
  I(e, f, (y) => n(7, r = y));
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
    super(), ge(this, t, Hu, Iu, de, {
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
1 }), ji = (e) => ({ element: (
  /*element*/
  e[0]
) });
function Pi(e) {
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
      256 && te(
        n,
        /*title*/
        l[8]
      );
    },
    d(l) {
      l && L(t);
    }
  };
}
function Vu(e) {
  let t, n = (
    /*title*/
    e[8] && Pi(e)
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
      l[8] ? n ? n.p(l, r) : (n = Pi(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(l) {
      n && n.d(l), l && L(t);
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
    ji
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
        ji
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
      i || (C(a, g), C(u, g), C(d, g), i = !0);
    },
    o(g) {
      N(a, g), N(u, g), N(d, g), i = !1;
    },
    d(g) {
      g && L(t), a && a.d(g), u && u.d(g), d && d.d(g), e[17](null), e[18](null);
    }
  };
}
function Ku(e, t, n) {
  let l, r, i, { $$slots: o = {}, $$scope: f } = t, { element: a = void 0 } = t, { innerElement: s = void 0 } = t, { zIndex: u = void 0 } = t, { pointerEvents: c = void 0 } = t, { viewBox: d = void 0 } = t, { label: g = void 0 } = t, { labelledBy: b = void 0 } = t, { describedBy: _ = void 0 } = t, { title: y = void 0 } = t;
  const { containerWidth: p, containerHeight: k, padding: M } = Mn("LayerCake");
  I(e, p, (q) => n(9, l = q)), I(e, k, (q) => n(10, r = q)), I(e, M, (q) => n(11, i = q));
  function H(q) {
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
    M,
    f,
    o,
    H,
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
function Fi(e, t, n) {
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
function Ii(e) {
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
      o[34] + "") && te(l, n), f[0] & /*$xGet, $data, $xScale, columnWidth*/
      904 && r !== (r = /*xPos*/
      o[32] + /*colWidth*/
      o[33] / 2) && m(t, "x", r), f[0] & /*$height, columnHeight, $data*/
      4416 && i !== (i = /*$height*/
      o[12] - /*colHeight*/
      o[30] - 5) && m(t, "y", i);
    },
    d(o) {
      o && L(t);
    }
  };
}
function Hi(e) {
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
    e[34] && Ii(e)
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
    m(k, M) {
      R(k, t, M), R(k, u, M), p && p.m(k, M), R(k, g, M), b || (_ = [
        ne(u, "mouseenter", y),
        ne(
          u,
          "mouseleave",
          /*mouseleave_handler*/
          e[24]
        )
      ], b = !0);
    },
    p(k, M) {
      e = k, M[0] & /*$x, $data*/
      2304 && n !== (n = /*$x*/
      e[11](
        /*d*/
        e[29]
      )) && m(t, "data-range", n), M[0] & /*$y, $data*/
      1280 && l !== (l = /*yValue*/
      e[34]) && m(t, "data-count", l), M[0] & /*$xGet, $data*/
      264 && r !== (r = /*xPos*/
      e[32]) && m(t, "x", r), M[0] & /*$yGet, $data*/
      260 && i !== (i = /*$yGet*/
      e[2](
        /*d*/
        e[29]
      )) && m(t, "y", i), M[0] & /*$xScale, columnWidth, $data*/
      896 && o !== (o = /*colWidth*/
      e[33]) && m(t, "width", o), M[0] & /*columnHeight, $data*/
      320 && f !== (f = /*colHeight*/
      e[30]) && m(t, "height", f), M[0] & /*fill*/
      1 && m(
        t,
        "fill",
        /*fill*/
        e[0]
      ), M[0] & /*hoveredIndex*/
      16 && a !== (a = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Qi : "none") && m(t, "stroke", a), M[0] & /*hoveredIndex*/
      16 && s !== (s = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Bi : 0) && m(t, "stroke-width", s), M[0] & /*loaded*/
      32 && ie(
        t,
        "animated",
        /*loaded*/
        e[5]
      ), M[0] & /*$xGet, $data*/
      264 && c !== (c = /*xPos*/
      e[32]) && m(u, "x", c), M[0] & /*$xScale, columnWidth, $data*/
      896 && d !== (d = /*colWidth*/
      e[33]) && m(u, "width", d), M[0] & /*$height*/
      4096 && m(
        u,
        "height",
        /*$height*/
        e[12]
      ), /*showLabels*/
      e[1] && /*yValue*/
      e[34] ? p ? p.p(e, M) : (p = Ii(e), p.c(), p.m(g.parentNode, g)) : p && (p.d(1), p = null);
    },
    d(k) {
      k && L(t), k && L(u), p && p.d(k), k && L(g), b = !1, Ce(_);
    }
  };
}
function Xu(e) {
  let t, n = (
    /*$data*/
    e[8]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Hi(Fi(e, n, r));
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
          const f = Fi(r, n, o);
          l[o] ? l[o].p(f, i) : (l[o] = Hi(f), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    i: K,
    o: K,
    d(r) {
      r && L(t), Ne(l, r);
    }
  };
}
const Qi = "#333", Bi = 1;
function Yu(e, t, n) {
  let l, r, i, o, f, a, s, u, c, d;
  const g = Bo(), { data: b, xGet: _, yGet: y, x: p, yRange: k, xScale: M, y: H, height: x, zGet: q, zScale: j, z: F, custom: O } = Mn("LayerCake");
  I(e, b, (Q) => n(8, a = Q)), I(e, _, (Q) => n(3, f = Q)), I(e, y, (Q) => n(2, i = Q)), I(e, p, (Q) => n(11, c = Q)), I(e, k, (Q) => n(22, o = Q)), I(e, M, (Q) => n(9, s = Q)), I(e, H, (Q) => n(10, u = Q)), I(e, x, (Q) => n(12, d = Q));
  let { fill: D = "#00e047" } = t, { showLabels: z = !1 } = t, E = null;
  st(() => {
    setTimeout(() => n(5, B = !0), 100);
  });
  let B = !1;
  const S = (Q, U) => {
    n(4, E = Q), g("hover", U);
  }, T = () => {
    n(4, E = null), g("hover", null);
  };
  return e.$$set = (Q) => {
    "fill" in Q && n(0, D = Q.fill), "showLabels" in Q && n(1, z = Q.showLabels);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*$xGet*/
    8 && n(7, l = (Q) => {
      const U = f(Q);
      return Math.abs(U[1] - U[0]);
    }), e.$$.dirty[0] & /*$yRange, $yGet*/
    4194308 && n(6, r = (Q) => o[0] - i(Q));
  }, [
    D,
    z,
    i,
    f,
    E,
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
    M,
    H,
    x,
    o,
    S,
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
      r && L(t);
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
      r && L(t);
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
      ) + "") && te(i, r), b & /*xTick, isBandwidth, $xScale*/
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
      g && L(t), c && c.d(), d && d.d();
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
      r && L(t);
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
      i && L(t);
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
      a && L(t), Ne(i, a), o && o.d(), f && f.d();
    }
  };
}
function Zu(e, t, n) {
  let l, r, i, o, f, a, s, u;
  const { width: c, height: d, xRange: g, padding: b, xScale: _, xDomain: y, yRange: p } = Mn("LayerCake");
  I(e, c, (T) => n(16, s = T)), I(e, d, (T) => n(15, a = T)), I(e, g, (T) => n(17, u = T)), I(e, _, (T) => n(12, o = T)), I(e, y, (T) => n(26, i = T)), I(e, p, (T) => n(14, f = T));
  let { gridlines: k = !0 } = t, { tickMarks: M = !1 } = t, { baseline: H = !1 } = t, { snapTicks: x = !1 } = t, { formatTick: q = (T) => T } = t, { ticks: j = void 0 } = t, { xTick: F = 0 } = t, { yTick: O = 16 } = t, { label: D = "" } = t, { labelLeft: z = !1 } = t, { color: E = "#333" } = t, { angle: B = !1 } = t;
  function S(T) {
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
    "gridlines" in T && n(0, k = T.gridlines), "tickMarks" in T && n(1, M = T.tickMarks), "baseline" in T && n(2, H = T.baseline), "snapTicks" in T && n(3, x = T.snapTicks), "formatTick" in T && n(4, q = T.formatTick), "ticks" in T && n(25, j = T.ticks), "xTick" in T && n(5, F = T.xTick), "yTick" in T && n(6, O = T.yTick), "label" in T && n(7, D = T.label), "labelLeft" in T && n(8, z = T.labelLeft), "color" in T && n(9, E = T.color), "angle" in T && n(10, B = T.angle);
  }, e.$$.update = () => {
    e.$$.dirty & /*$xScale*/
    4096 && n(11, l = typeof o.bandwidth == "function"), e.$$.dirty & /*ticks, isBandwidth, $xScale*/
    33560576 && n(13, r = Array.isArray(j) ? j : l ? o.domain() : typeof j == "function" ? j(o.ticks()) : o.ticks(j));
  }, [
    k,
    M,
    H,
    x,
    q,
    F,
    O,
    D,
    z,
    E,
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
    S,
    j
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
  e[3] && Ji(e), u = (
    /*loaded*/
    e[9] && /*histBins*/
    e[8].length > 0 && $i(e)
  );
  const c = [ic, rc], d = [];
  function g(b, _) {
    return (
      /*$$slots*/
      b[12].caption ? 1 : 0
    );
  }
  return o = g(e), f = d[o] = c[o](e), {
    c() {
      t = w("div"), s && s.c(), n = P(), l = w("div"), u && u.c(), r = P(), i = w("div"), f.c(), Z(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), Z(l, "height", "16px"), m(i, "class", "text-xs text-gray-800 dark:text-gray-200 truncate"), ie(i, "mt-1", !/*horizontalLayout*/
      e[4]), m(t, "class", "gap-1 items-center"), ie(
        t,
        "flex",
        /*horizontalLayout*/
        e[4]
      ), ie(
        t,
        "my-0.5",
        /*horizontalLayout*/
        e[4]
      );
    },
    m(b, _) {
      R(b, t, _), s && s.m(t, null), h(t, n), h(t, l), u && u.m(l, null), h(t, r), h(t, i), d[o].m(i, null), a = !0;
    },
    p(b, _) {
      /*title*/
      b[3] ? s ? s.p(b, _) : (s = Ji(b), s.c(), s.m(t, n)) : s && (s.d(1), s = null), /*loaded*/
      b[9] && /*histBins*/
      b[8].length > 0 ? u ? (u.p(b, _), _ & /*loaded, histBins*/
      768 && C(u, 1)) : (u = $i(b), u.c(), C(u, 1), u.m(l, null)) : u && (le(), N(u, 1, 1, () => {
        u = null;
      }), re()), (!a || _ & /*width*/
      1) && Z(
        l,
        "width",
        /*width*/
        b[0] == null ? "100%" : `${/*width*/
        b[0]}px`
      );
      let y = o;
      o = g(b), o === y ? d[o].p(b, _) : (le(), N(d[y], 1, 1, () => {
        d[y] = null;
      }), re(), f = d[o], f ? f.p(b, _) : (f = d[o] = c[o](b), f.c()), C(f, 1), f.m(i, null)), (!a || _ & /*horizontalLayout*/
      16) && ie(i, "mt-1", !/*horizontalLayout*/
      b[4]), (!a || _ & /*horizontalLayout*/
      16) && ie(
        t,
        "flex",
        /*horizontalLayout*/
        b[4]
      ), (!a || _ & /*horizontalLayout*/
      16) && ie(
        t,
        "my-0.5",
        /*horizontalLayout*/
        b[4]
      );
    },
    i(b) {
      a || (C(u), C(f), a = !0);
    },
    o(b) {
      N(u), N(f), a = !1;
    },
    d(b) {
      b && L(t), s && s.d(), u && u.d(), d[o].d();
    }
  };
}
function tc(e) {
  let t, n, l, r, i, o, f, a = !!/*title*/
  e[3] && eo(e), s = (
    /*loaded*/
    e[9] && /*histBins*/
    e[8].length > 0 && to(e)
  );
  const u = [dc, cc], c = [];
  function d(g, b) {
    return (
      /*$$slots*/
      g[12].caption ? 1 : 0
    );
  }
  return i = d(e), o = c[i] = u[i](e), {
    c() {
      a && a.c(), t = P(), n = w("div"), s && s.c(), l = P(), r = w("div"), o.c(), Z(
        n,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), Z(n, "height", "16px"), m(r, "class", "text-xs text-gray-800 dark:text-gray-200 truncate"), ie(r, "mt-1", !/*horizontalLayout*/
      e[4]);
    },
    m(g, b) {
      a && a.m(g, b), R(g, t, b), R(g, n, b), s && s.m(n, null), R(g, l, b), R(g, r, b), c[i].m(r, null), f = !0;
    },
    p(g, b) {
      /*title*/
      g[3] ? a ? a.p(g, b) : (a = eo(g), a.c(), a.m(t.parentNode, t)) : a && (a.d(1), a = null), /*loaded*/
      g[9] && /*histBins*/
      g[8].length > 0 ? s ? (s.p(g, b), b & /*loaded, histBins*/
      768 && C(s, 1)) : (s = to(g), s.c(), C(s, 1), s.m(n, null)) : s && (le(), N(s, 1, 1, () => {
        s = null;
      }), re()), (!f || b & /*width*/
      1) && Z(
        n,
        "width",
        /*width*/
        g[0] == null ? "100%" : `${/*width*/
        g[0]}px`
      );
      let _ = i;
      i = d(g), i === _ ? c[i].p(g, b) : (le(), N(c[_], 1, 1, () => {
        c[_] = null;
      }), re(), o = c[i], o ? o.p(g, b) : (o = c[i] = u[i](g), o.c()), C(o, 1), o.m(r, null)), (!f || b & /*horizontalLayout*/
      16) && ie(r, "mt-1", !/*horizontalLayout*/
      g[4]);
    },
    i(g) {
      f || (C(s), C(o), f = !0);
    },
    o(g) {
      N(s), N(o), f = !1;
    },
    d(g) {
      a && a.d(g), g && L(t), g && L(n), s && s.d(), g && L(l), g && L(r), c[i].d();
    }
  };
}
function Ji(e) {
  let t, n;
  return {
    c() {
      t = w("div"), n = G(
        /*title*/
        e[3]
      ), m(t, "class", "font-bold text-xs truncate text-right"), Z(t, "width", "96px");
    },
    m(l, r) {
      R(l, t, r), h(t, n);
    },
    p(l, r) {
      r & /*title*/
      8 && te(
        n,
        /*title*/
        l[3]
      );
    },
    d(l) {
      l && L(t);
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
        e[8]
      ),
      yScale: tt(),
      yDomain: [0, null],
      data: (
        /*data*/
        e[7]
      ),
      custom: { hoveredGet: (
        /*func_2*/
        e[20]
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
      256 && (i.xDomain = /*histBins*/
      l[8]), r & /*data*/
      128 && (i.data = /*data*/
      l[7]), r & /*hoveredBin*/
      1024 && (i.custom = { hoveredGet: (
        /*func_2*/
        l[20]
      ) }), r & /*$$scope, color, hoveredBin*/
      4195392 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (C(t.$$.fragment, l), n = !0);
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
    e[6]
  ) } }), t.$on(
    "hover",
    /*hover_handler_1*/
    e[19]
  ), l = new ma({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      Y(t.$$.fragment), n = P(), Y(l.$$.fragment);
    },
    m(i, o) {
      V(t, i, o), R(i, n, o), V(l, i, o), r = !0;
    },
    p(i, o) {
      const f = {};
      o & /*color*/
      64 && (f.fill = /*color*/
      i[6]), t.$set(f);
    },
    i(i) {
      r || (C(t.$$.fragment, i), C(l.$$.fragment, i), r = !0);
    },
    o(i) {
      N(t.$$.fragment, i), N(l.$$.fragment, i), r = !1;
    },
    d(i) {
      W(t, i), i && L(n), W(l, i);
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
      4195392 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (C(t.$$.fragment, l), n = !0);
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
    e[15].caption
  ), l = qe(
    n,
    e,
    /*$$scope*/
    e[22],
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
      4194304) && xe(
        l,
        n,
        r,
        /*$$scope*/
        r[22],
        t ? Te(
          n,
          /*$$scope*/
          r[22],
          i,
          Ju
        ) : Oe(
          /*$$scope*/
          r[22]
        ),
        Ui
      );
    },
    i(r) {
      t || (C(l, r), t = !0);
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
      i[10] != null ? fc : (
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
      r.d(i), i && L(t);
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
      n && L(t);
    }
  };
}
function ac(e) {
  let t, n, l = he(".3")(
    /*mean*/
    e[1]
  ) + "", r, i = /*unit*/ e[2] ? " " + /*unit*/
  e[2] : "", o;
  return {
    c() {
      t = G("M = "), n = w("strong"), r = G(l), o = G(i);
    },
    m(f, a) {
      R(f, t, a), R(f, n, a), h(n, r), h(n, o);
    },
    p(f, a) {
      a & /*mean*/
      2 && l !== (l = he(".3")(
        /*mean*/
        f[1]
      ) + "") && te(r, l), a & /*unit*/
      4 && i !== (i = /*unit*/
      f[2] ? " " + /*unit*/
      f[2] : "") && te(o, i);
    },
    d(f) {
      f && L(t), f && L(n);
    }
  };
}
function fc(e) {
  let t = (
    /*makeTooltipText*/
    e[11](
      /*data*/
      e[7].find(
        /*func_3*/
        e[21]
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
      1152 && t !== (t = /*makeTooltipText*/
      l[11](
        /*data*/
        l[7].find(
          /*func_3*/
          l[21]
        )
      ) + "") && te(n, t);
    },
    d(l) {
      l && L(n);
    }
  };
}
function eo(e) {
  let t, n;
  return {
    c() {
      t = w("div"), n = G(
        /*title*/
        e[3]
      ), m(t, "class", "font-bold text-xs truncate text-right");
    },
    m(l, r) {
      R(l, t, r), h(t, n);
    },
    p(l, r) {
      r & /*title*/
      8 && te(
        n,
        /*title*/
        l[3]
      );
    },
    d(l) {
      l && L(t);
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
        e[8]
      ),
      yScale: tt(),
      yDomain: [0, null],
      data: (
        /*data*/
        e[7]
      ),
      custom: { hoveredGet: (
        /*func*/
        e[17]
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
      256 && (i.xDomain = /*histBins*/
      l[8]), r & /*data*/
      128 && (i.data = /*data*/
      l[7]), r & /*hoveredBin*/
      1024 && (i.custom = { hoveredGet: (
        /*func*/
        l[17]
      ) }), r & /*$$scope, color, hoveredBin*/
      4195392 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (C(t.$$.fragment, l), n = !0);
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
    e[6]
  ) } }), t.$on(
    "hover",
    /*hover_handler*/
    e[16]
  ), l = new ma({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      Y(t.$$.fragment), n = P(), Y(l.$$.fragment);
    },
    m(i, o) {
      V(t, i, o), R(i, n, o), V(l, i, o), r = !0;
    },
    p(i, o) {
      const f = {};
      o & /*color*/
      64 && (f.fill = /*color*/
      i[6]), t.$set(f);
    },
    i(i) {
      r || (C(t.$$.fragment, i), C(l.$$.fragment, i), r = !0);
    },
    o(i) {
      N(t.$$.fragment, i), N(l.$$.fragment, i), r = !1;
    },
    d(i) {
      W(t, i), i && L(n), W(l, i);
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
      4195392 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (C(t.$$.fragment, l), n = !0);
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
    e[15].caption
  ), l = qe(
    n,
    e,
    /*$$scope*/
    e[22],
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
      4194304) && xe(
        l,
        n,
        r,
        /*$$scope*/
        r[22],
        t ? Te(
          n,
          /*$$scope*/
          r[22],
          i,
          $u
        ) : Oe(
          /*$$scope*/
          r[22]
        ),
        Zi
      );
    },
    i(r) {
      t || (C(l, r), t = !0);
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
      i[10] != null ? bc : (
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
      r.d(i), i && L(t);
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
      n && L(t);
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
      ) + "") && te(r, l);
    },
    d(i) {
      i && L(t), i && L(n);
    }
  };
}
function bc(e) {
  let t = (
    /*makeTooltipText*/
    e[11](
      /*data*/
      e[7].find(
        /*func_1*/
        e[18]
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
      1152 && t !== (t = /*makeTooltipText*/
      l[11](
        /*data*/
        l[7].find(
          /*func_1*/
          l[18]
        )
      ) + "") && te(n, t);
    },
    d(l) {
      l && L(n);
    }
  };
}
function hc(e) {
  let t, n, l, r;
  const i = [tc, ec], o = [];
  function f(a, s) {
    return (
      /*noParent*/
      a[5] ? 0 : 1
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
      t = f(a), t === u ? o[t].p(a, s) : (le(), N(o[u], 1, 1, () => {
        o[u] = null;
      }), re(), n = o[t], n ? n.p(a, s) : (n = o[t] = i[t](a), n.c()), C(n, 1), n.m(l.parentNode, l));
    },
    i(a) {
      r || (C(n), r = !0);
    },
    o(a) {
      N(n), r = !1;
    },
    d(a) {
      o[t].d(a), a && L(l);
    }
  };
}
function _c(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = Lr(l);
  let { width: o = 100 } = t, { histValues: f } = t, { mean: a = null } = t, { unit: s = null } = t, { title: u = null } = t, { horizontalLayout: c = !1 } = t, { noParent: d = !1 } = t, { color: g = "#3b82f6" } = t, b = [], _ = [], y = he(".3g"), p = he(","), k = !1;
  st(() => setTimeout(() => n(9, k = !0), 0));
  let M;
  function H(z) {
    return `${z.label}${s ? " " + s : ""}: ${p(z.count)} instances`;
  }
  const x = (z) => n(10, M = z.detail != null ? z.detail.bin : null), q = (z) => z.bin == M, j = (z) => z.label == M, F = (z) => n(10, M = z.detail != null ? z.detail.label : null), O = (z) => z.label == M, D = (z) => z.label == M;
  return e.$$set = (z) => {
    "width" in z && n(0, o = z.width), "histValues" in z && n(13, f = z.histValues), "mean" in z && n(1, a = z.mean), "unit" in z && n(2, s = z.unit), "title" in z && n(3, u = z.title), "horizontalLayout" in z && n(4, c = z.horizontalLayout), "noParent" in z && n(5, d = z.noParent), "color" in z && n(6, g = z.color), "$$scope" in z && n(22, r = z.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*histValues, binFormat, data*/
    24704)
      if (f) {
        let z = Object.keys(f), E = z.reduce(
          (S, T, Q) => Q > 0 ? Math.min(S, Math.abs(parseFloat(T) - parseFloat(z[Q - 1]))) : S,
          1e9
        );
        n(14, y = he(`.${Uo(E)}f`));
        let B = Object.keys(f).some((S) => S.search(/[^0-9.]/) >= 0);
        console.log("string labels:", B, Object.keys(f)), n(7, b = Object.entries(f).map((S) => ({
          bin: B ? S[0] : parseFloat(S[0]),
          count: S[1],
          label: B ? S[0] : y(S[0])
        }))), b.sort((S, T) => B ? S.label.localeCompare(T.label) : parseFloat(S.bin) - parseFloat(T.bin)), n(8, _ = b.map((S) => S.bin));
      } else
        n(7, b = []), n(8, _ = []);
    e.$$.dirty & /*histBins*/
    256 && console.log("histBins", _), e.$$.dirty & /*histValues*/
    8192 && console.log("histValues", f);
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
    k,
    M,
    H,
    i,
    f,
    y,
    l,
    x,
    q,
    j,
    F,
    O,
    D,
    r
  ];
}
class yc extends me {
  constructor(t) {
    super(), ge(this, t, _c, hc, de, {
      width: 0,
      histValues: 13,
      mean: 1,
      unit: 2,
      title: 3,
      horizontalLayout: 4,
      noParent: 5,
      color: 6
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
        ne(t, "mouseenter", r),
        ne(
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
      i && L(t), n = !1, Ce(l);
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
      Ne(l, r), r && L(t);
    }
  };
}
function kc(e, t, n) {
  let l, r, i, o, f, a;
  const s = Bo(), { data: u, xGet: c, yGet: d, xRange: g, x: b, yRange: _, xScale: y, y: p, height: k, zGet: M, zScale: H, z: x, custom: q } = Mn("LayerCake");
  I(e, u, (z) => n(2, l = z)), I(e, c, (z) => n(3, r = z)), I(e, d, (z) => n(7, a = z)), I(e, g, (z) => n(4, i = z)), I(e, y, (z) => n(5, o = z)), I(e, x, (z) => n(6, f = z));
  let j = null;
  st(() => {
    setTimeout(() => n(1, F = !0), 100);
  });
  let F = !1;
  return [
    j,
    F,
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
    (z, E) => {
      n(0, j = z), s("hover", E);
    },
    () => {
      n(0, j = null), s("hover", null);
    }
  ];
}
class ba extends me {
  constructor(t) {
    super(), ge(this, t, kc, pc, de, {});
  }
}
const wc = (e) => ({}), ro = (e) => ({}), vc = (e) => ({}), io = (e) => ({});
function Cc(e) {
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
      t = w("div"), u && u.c(), n = P(), l = w("div"), Y(r.$$.fragment), i = P(), o = w("div"), a && a.c(), Z(
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
      f = g(b), f === p ? ~f && d[f].p(b, _) : (a && (le(), N(d[p], 1, 1, () => {
        d[p] = null;
      }), re()), ~f ? (a = d[f], a ? a.p(b, _) : (a = d[f] = c[f](b), a.c()), C(a, 1), a.m(o, null)) : a = null), (!s || _ & /*horizontalLayout*/
      4) && ie(
        t,
        "flex",
        /*horizontalLayout*/
        b[2]
      );
    },
    i(b) {
      s || (C(r.$$.fragment, b), C(a), s = !0);
    },
    o(b) {
      N(r.$$.fragment, b), N(a), s = !1;
    },
    d(b) {
      b && L(t), u && u.d(), W(r), ~f && d[f].d();
    }
  };
}
function Sc(e) {
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
      s && s.c(), t = P(), n = w("div"), Y(l.$$.fragment), r = P(), i = w("div"), f && f.c(), Z(
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
      o = d(g), o === y ? ~o && c[o].p(g, b) : (f && (le(), N(c[y], 1, 1, () => {
        c[y] = null;
      }), re()), ~o ? (f = c[o], f ? f.p(g, b) : (f = c[o] = u[o](g), f.c()), C(f, 1), f.m(i, null)) : f = null);
    },
    i(g) {
      a || (C(l.$$.fragment, g), C(f), a = !0);
    },
    o(g) {
      N(l.$$.fragment, g), N(f), a = !1;
    },
    d(g) {
      s && s.d(g), g && L(t), g && L(n), W(l), g && L(r), g && L(i), ~o && c[o].d();
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
      2 && te(
        n,
        /*title*/
        l[1]
      );
    },
    d(l) {
      l && L(t);
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
      n || (C(t.$$.fragment, l), n = !0);
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
      n || (C(t.$$.fragment, l), n = !0);
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
      r && L(l), r && t.d();
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
      r && L(l), r && t.d();
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
      t || (C(l, r), t = !0);
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
      2 && te(
        n,
        /*title*/
        l[1]
      );
    },
    d(l) {
      l && L(t);
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
      n || (C(t.$$.fragment, l), n = !0);
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
      n || (C(t.$$.fragment, l), n = !0);
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
      r && L(l), r && t.d();
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
      r && L(l), r && t.d();
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
      t || (C(l, r), t = !0);
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
  const i = [Sc, Cc], o = [];
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
      t = f(a), t === u ? o[t].p(a, s) : (le(), N(o[u], 1, 1, () => {
        o[u] = null;
      }), re(), n = o[t], n ? n.p(a, s) : (n = o[t] = i[t](a), n.c()), C(n, 1), n.m(l.parentNode, l));
    },
    i(a) {
      r || (C(n), r = !0);
    },
    o(a) {
      N(n), r = !1;
    },
    d(a) {
      o[t].d(a), a && L(l);
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
  const M = (O) => n(7, b = O.detail ? O.detail.index : null), H = (O) => u(O), x = (O) => O.index == b, q = (O) => n(7, b = O.detail ? O.detail.index : null), j = (O) => u(O), F = (O) => O.index == b;
  return e.$$set = (O) => {
    "width" in O && n(0, o = O.width), "title" in O && n(1, f = O.title), "horizontalLayout" in O && n(2, a = O.horizontalLayout), "noParent" in O && n(3, s = O.noParent), "colorScale" in O && n(4, u = O.colorScale), "counts" in O && n(5, c = O.counts), "order" in O && n(11, d = O.order), "$$scope" in O && n(19, r = O.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*counts, order*/
    2080)
      if (c && d.length > 0) {
        let O = Object.values(c).reduce((z, E) => z + E, 0), D = 0;
        n(6, g = d.map((z, E) => {
          let B = D;
          return D += c[z] || 0, {
            start: B / O,
            end: D / O,
            index: E,
            name: z,
            count: c[z] || 0
          };
        }));
      } else
        n(6, g = []);
    e.$$.dirty & /*counts*/
    32 && (c ? y = Object.values(c).reduce((O, D) => O + D, 0) : y = 1), e.$$.dirty & /*data*/
    64 && (g.length > 0 ? n(8, k = g.reduce((O, D) => O.count > D.count ? O : D, g[0])) : n(8, k = null));
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
    M,
    H,
    x,
    q,
    j,
    F,
    r
  ];
}
class jc extends me {
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
  const i = [Hc, Ic, Fc, Pc], o = [];
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
      t = f(a), t === u ? ~t && o[t].p(a, s) : (n && (le(), N(o[u], 1, 1, () => {
        o[u] = null;
      }), re()), ~t ? (n = o[t], n ? n.p(a, s) : (n = o[t] = i[t](a), n.c()), C(n, 1), n.m(l.parentNode, l)) : n = null);
    },
    i(a) {
      r || (C(n), r = !0);
    },
    o(a) {
      N(n), r = !1;
    },
    d(a) {
      ~t && o[t].d(a), a && L(l);
    }
  };
}
function Pc(e) {
  let t, n;
  return t = new jc({
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
      n || (C(t.$$.fragment, l), n = !0);
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
  return t = new yc({
    props: {
      histValues: (
        /*values*/
        e[0].hist
      ),
      mean: (
        /*values*/
        e[0].mean
      ),
      unit: (
        /*values*/
        e[0].unit ?? null
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
      l[0].mean), r & /*values*/
      1 && (i.unit = /*values*/
      l[0].unit ?? null), t.$set(i);
    },
    i(l) {
      n || (C(t.$$.fragment, l), n = !0);
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
      n || (C(t.$$.fragment, l), n = !0);
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
      n || (C(t.$$.fragment, l), n = !0);
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
      ) + "") && te(r, l), s & /*values*/
      1 && o !== (o = he(",")(
        /*values*/
        a[0].total ?? 1
      ) + "") && te(f, o);
    },
    d(a) {
      a && L(t);
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
      ) + "") && te(r, l), c & /*values*/
      1 && f !== (f = he(".1%")(1 - /*values*/
      (u[0].mean ?? 0)) + "") && te(a, f);
    },
    d(u) {
      u && L(t);
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
      1 && C(l, 1)) : (l = fo(r), l.c(), C(l, 1), l.m(t.parentNode, t)) : l && (le(), N(l, 1, 1, () => {
        l = null;
      }), re());
    },
    i(r) {
      n || (C(l), n = !0);
    },
    o(r) {
      N(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && L(t);
    }
  };
}
function Vc(e, t, n) {
  let l;
  I(e, Fl, (o) => n(1, l = o)), st(() => {
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
class Ht extends me {
  constructor(t) {
    super(), ge(this, t, Vc, Gc, de, { values: 0 });
  }
}
function so(e) {
  var $;
  let t, n, l, r, i = (
    /*values*/
    (e[0].type || "unknown") + ""
  ), o, f, a, s, u, c, d, g, b, _, y, p = (
    /*formatNumber*/
    e[4](
      /*values*/
      (($ = e[0].values) == null ? void 0 : $.length) ?? 0
    ) + ""
  ), k, M, H, x, q, j, F, O, D, z, E, B, S;
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
  const oe = [Kc, Wc], ee = [];
  function A(J, se) {
    var pe;
    return (
      /*values*/
      (pe = J[0].values) != null && pe.type ? 0 : 1
    );
  }
  return D = A(e), z = ee[D] = oe[D](e), {
    c() {
      t = w("div"), n = w("span"), n.textContent = "Type:", l = P(), r = w("span"), o = G(i), f = P(), a = w("div"), s = w("div"), u = w("button"), Y(c.$$.fragment), d = P(), g = w("div"), b = w("span"), b.textContent = "Count:", _ = P(), y = w("span"), k = G(p), M = P(), H = w("span"), H.textContent = "rows", x = P(), T && T.c(), q = P(), Q && Q.c(), j = P(), U && U.c(), F = P(), O = w("div"), z.c(), m(n, "class", "font-semibold"), m(r, "class", "font-mono"), m(t, "class", "text-sm text-gray-700 dark:text-gray-300 mb-4"), m(b, "class", "font-bold text-gray-900 dark:text-gray-100"), m(y, "class", "tabular-nums text-gray-700 dark:text-gray-200"), m(H, "class", "text-gray-500 dark:text-gray-400"), m(u, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), m(u, "aria-label", "Toggle count details"), m(s, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-base w-full rounded-md overflow-hidden"), m(O, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-2 text-base w-full rounded-md"), m(a, "class", "space-y-2");
    },
    m(J, se) {
      R(J, t, se), h(t, n), h(t, l), h(t, r), h(r, o), R(J, f, se), R(J, a, se), h(a, s), h(s, u), V(c, u, null), h(u, d), h(u, g), h(g, b), h(g, _), h(g, y), h(y, k), h(g, M), h(g, H), h(s, x), T && T.m(s, null), h(a, q), Q && Q.m(a, null), h(a, j), U && U.m(a, null), h(a, F), h(a, O), ee[D].m(O, null), E = !0, B || (S = ne(
        u,
        "click",
        /*click_handler*/
        e[6]
      ), B = !0);
    },
    p(J, se) {
      var we;
      (!E || se & /*values*/
      1) && i !== (i = /*values*/
      (J[0].type || "unknown") + "") && te(o, i);
      const pe = {};
      se & /*showCountDetails*/
      2 && (pe.icon = /*showCountDetails*/
      J[1] ? Be : ft), c.$set(pe), (!E || se & /*values*/
      1) && p !== (p = /*formatNumber*/
      J[4](
        /*values*/
        ((we = J[0].values) == null ? void 0 : we.length) ?? 0
      ) + "") && te(k, p), /*showCountDetails*/
      J[1] ? T ? (T.p(J, se), se & /*showCountDetails*/
      2 && C(T, 1)) : (T = uo(J), T.c(), C(T, 1), T.m(s, null)) : T && (le(), N(T, 1, 1, () => {
        T = null;
      }), re()), /*values*/
      J[0].missingness && /*values*/
      (J[0].missingness.rate.count ?? 0) > 0 ? Q ? (Q.p(J, se), se & /*values*/
      1 && C(Q, 1)) : (Q = go(J), Q.c(), C(Q, 1), Q.m(a, j)) : Q && (le(), N(Q, 1, 1, () => {
        Q = null;
      }), re()), /*values*/
      J[0].types ? U ? (U.p(J, se), se & /*values*/
      1 && C(U, 1)) : (U = ho(J), U.c(), C(U, 1), U.m(a, F)) : U && (le(), N(U, 1, 1, () => {
        U = null;
      }), re());
      let Se = D;
      D = A(J), D === Se ? ee[D].p(J, se) : (le(), N(ee[Se], 1, 1, () => {
        ee[Se] = null;
      }), re(), z = ee[D], z ? z.p(J, se) : (z = ee[D] = oe[D](J), z.c()), C(z, 1), z.m(O, null));
    },
    i(J) {
      E || (C(c.$$.fragment, J), C(T), C(Q), C(U), C(z), E = !0);
    },
    o(J) {
      N(c.$$.fragment, J), N(T), N(Q), N(U), N(z), E = !1;
    },
    d(J) {
      J && L(t), J && L(f), J && L(a), W(c), T && T.d(), Q && Q.d(), U && U.d(), ee[D].d(), B = !1, S();
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
      1 && C(l, 1)) : (l = co(r), l.c(), C(l, 1), l.m(t, null)) : l && (le(), N(l, 1, 1, () => {
        l = null;
      }), re());
    },
    i(r) {
      n || (C(l), n = !0);
    },
    o(r) {
      N(l), n = !1;
    },
    d(r) {
      r && L(t), l && l.d();
    }
  };
}
function co(e) {
  let t, n, l, r, i, o, f, a, s, u;
  return r = new Ht({
    props: { values: (
      /*values*/
      e[0].ids.count
    ) }
  }), s = new Ht({
    props: {
      values: (
        /*values*/
        e[0].ids.count_per_trajectory
      )
    }
  }), {
    c() {
      t = w("div"), t.textContent = "Trajectories", n = P(), l = w("div"), Y(r.$$.fragment), i = P(), o = w("div"), o.textContent = "Timesteps per Trajectory", f = P(), a = w("div"), Y(s.$$.fragment), m(t, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), m(l, "class", "mb-2"), m(o, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), m(a, "class", "mb-2");
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
      u || (C(r.$$.fragment, c), C(s.$$.fragment, c), u = !0);
    },
    o(c) {
      N(r.$$.fragment, c), N(s.$$.fragment, c), u = !1;
    },
    d(c) {
      c && L(t), c && L(n), c && L(l), W(r), c && L(i), c && L(o), c && L(f), c && L(a), W(s);
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
      t = w("div"), n = w("button"), Y(l.$$.fragment), r = P(), i = w("div"), o = w("span"), o.textContent = "Missingness:", f = P(), a = w("span"), u = G(s), c = P(), d = w("span"), d.textContent = "of rows", g = P(), p && p.c(), m(o, "class", "font-bold text-gray-900 dark:text-gray-100"), m(a, "class", "tabular-nums text-gray-700 dark:text-gray-200"), m(d, "class", "text-gray-500 dark:text-gray-400"), m(n, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), m(n, "aria-label", "Toggle missingness details"), m(t, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-base w-full rounded-md overflow-hidden");
    },
    m(k, M) {
      R(k, t, M), h(t, n), V(l, n, null), h(n, r), h(n, i), h(i, o), h(i, f), h(i, a), h(a, u), h(i, c), h(i, d), h(t, g), p && p.m(t, null), b = !0, _ || (y = ne(
        n,
        "click",
        /*click_handler_1*/
        e[7]
      ), _ = !0);
    },
    p(k, M) {
      const H = {};
      M & /*showMissingnessDetails*/
      4 && (H.icon = /*showMissingnessDetails*/
      k[2] ? Be : ft), l.$set(H), (!b || M & /*values*/
      1) && s !== (s = /*formatPercent*/
      k[5](
        /*values*/
        (k[0].missingness.rate.count ?? 0) / /*values*/
        (k[0].missingness.rate.total ?? 1)
      ) + "") && te(u, s), /*showMissingnessDetails*/
      k[2] ? p ? (p.p(k, M), M & /*showMissingnessDetails*/
      4 && C(p, 1)) : (p = mo(k), p.c(), C(p, 1), p.m(t, null)) : p && (le(), N(p, 1, 1, () => {
        p = null;
      }), re());
    },
    i(k) {
      b || (C(l.$$.fragment, k), C(p), b = !0);
    },
    o(k) {
      N(l.$$.fragment, k), N(p), b = !1;
    },
    d(k) {
      k && L(t), W(l), p && p.d(), _ = !1, y();
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
      1 && C(l, 1)) : (l = bo(r), l.c(), C(l, 1), l.m(t, null)) : l && (le(), N(l, 1, 1, () => {
        l = null;
      }), re());
    },
    i(r) {
      n || (C(l), n = !0);
    },
    o(r) {
      N(l), n = !1;
    },
    d(r) {
      r && L(t), l && l.d();
    }
  };
}
function bo(e) {
  let t, n, l, r, i, o, f, a, s, u;
  return r = new Ht({
    props: {
      values: (
        /*values*/
        e[0].missingness.rate
      )
    }
  }), s = new Ht({
    props: {
      values: (
        /*values*/
        e[0].missingness.rate_per_trajectory
      )
    }
  }), {
    c() {
      t = w("div"), t.textContent = "Number of Missing Values", n = P(), l = w("div"), Y(r.$$.fragment), i = P(), o = w("div"), o.textContent = "Missingness Rate per Trajectory", f = P(), a = w("div"), Y(s.$$.fragment), m(t, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), m(l, "class", "mb-2"), m(o, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), m(a, "class", "mb-2");
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
      u || (C(r.$$.fragment, c), C(s.$$.fragment, c), u = !0);
    },
    o(c) {
      N(r.$$.fragment, c), N(s.$$.fragment, c), u = !1;
    },
    d(c) {
      c && L(t), c && L(n), c && L(l), W(r), c && L(i), c && L(o), c && L(f), c && L(a), W(s);
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
      t = w("div"), n = w("button"), Y(l.$$.fragment), r = P(), i = w("div"), o = w("span"), o.textContent = "Data Elements:", f = P(), a = w("span"), u = G(s), c = P(), d = w("span"), d.textContent = "distinct elements", g = P(), p && p.c(), m(o, "class", "font-bold text-gray-900 dark:text-gray-100"), m(a, "class", "tabular-nums text-gray-700 dark:text-gray-200"), m(d, "class", "text-gray-500 dark:text-gray-400"), m(n, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), m(n, "aria-label", "Toggle type details"), m(t, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-base w-full rounded-md");
    },
    m(k, M) {
      R(k, t, M), h(t, n), V(l, n, null), h(n, r), h(n, i), h(i, o), h(i, f), h(i, a), h(a, u), h(i, c), h(i, d), h(t, g), p && p.m(t, null), b = !0, _ || (y = ne(
        n,
        "click",
        /*click_handler_2*/
        e[8]
      ), _ = !0);
    },
    p(k, M) {
      const H = {};
      M & /*showTypeDetails*/
      8 && (H.icon = /*showTypeDetails*/
      k[3] ? Be : ft), l.$set(H), (!b || M & /*values*/
      1) && s !== (s = /*formatNumber*/
      k[4](Object.keys(
        /*values*/
        k[0].types.counts
      ).length ?? 0) + "") && te(u, s), /*showTypeDetails*/
      k[3] ? p ? (p.p(k, M), M & /*showTypeDetails*/
      8 && C(p, 1)) : (p = _o(k), p.c(), C(p, 1), p.m(t, null)) : p && (le(), N(p, 1, 1, () => {
        p = null;
      }), re());
    },
    i(k) {
      b || (C(l.$$.fragment, k), C(p), b = !0);
    },
    o(k) {
      N(l.$$.fragment, k), N(p), b = !1;
    },
    d(k) {
      k && L(t), W(l), p && p.d(), _ = !1, y();
    }
  };
}
function _o(e) {
  let t, n, l;
  return n = new Ht({
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
      l || (C(n.$$.fragment, r), l = !0);
    },
    o(r) {
      N(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && L(t), W(n);
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
      n && L(t);
    }
  };
}
function Kc(e) {
  let t, n, l, r;
  return l = new Ht({
    props: { values: (
      /*values*/
      e[0].values
    ) }
  }), {
    c() {
      t = w("div"), t.textContent = "Values:", n = P(), Y(l.$$.fragment), m(t, "class", "mb-2 text-sm font-bold text-gray-900 dark:text-gray-100 mr-2");
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
      r || (C(l.$$.fragment, i), r = !0);
    },
    o(i) {
      N(l.$$.fragment, i), r = !1;
    },
    d(i) {
      i && L(t), i && L(n), W(l, i);
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
      1 && C(l, 1)) : (l = so(r), l.c(), C(l, 1), l.m(t.parentNode, t)) : l && (le(), N(l, 1, 1, () => {
        l = null;
      }), re());
    },
    i(r) {
      n || (C(l), n = !0);
    },
    o(r) {
      N(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && L(t);
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
      t = w("div"), Y(n.$$.fragment), l = P(), o && o.c(), r = ce(), m(t, "class", "p-4 border-t border-gray-200 dark:border-gray-700");
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
      i || (C(n.$$.fragment, f), i = !0);
    },
    o(f) {
      N(n.$$.fragment, f), i = !1;
    },
    d(f) {
      f && L(t), W(n), f && L(l), o && o.d(f), f && L(r);
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
      t = w("div"), n = w("div"), n.textContent = "SQL Queries", l = P();
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
      o && L(t), Ne(i, o);
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
      r[4] + "") && te(l, n);
    },
    d(r) {
      r && L(t);
    }
  };
}
function Uc(e) {
  let t, n, l, r, i, o, f, a, s, u;
  o = new _e({
    props: {
      icon: (
        /*isExpanded*/
        e[2] ? Il : Be
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
      ), i = P(), Y(o.$$.fragment), f = P(), c && c.c(), m(l, "class", "text-sm font-mono text-gray-700 dark:text-gray-300 truncate flex-1"), m(n, "class", "w-full px-3 py-2 text-left flex items-center justify-between bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none"), m(t, "class", "border border-gray-300 dark:border-gray-600 rounded-md mb-2 overflow-hidden");
    },
    m(d, g) {
      R(d, t, g), h(t, n), h(n, l), h(l, r), h(n, i), V(o, n, null), h(t, f), c && c.m(t, null), a = !0, s || (u = ne(
        n,
        "click",
        /*toggleExpanded*/
        e[3]
      ), s = !0);
    },
    p(d, [g]) {
      (!a || g & /*queryText*/
      1) && te(
        r,
        /*queryText*/
        d[0]
      );
      const b = {};
      g & /*isExpanded*/
      4 && (b.icon = /*isExpanded*/
      d[2] ? Il : Be), o.$set(b), /*isExpanded*/
      d[2] ? c ? (c.p(d, g), g & /*isExpanded*/
      4 && C(c, 1)) : (c = po(d), c.c(), C(c, 1), c.m(t, null)) : c && (le(), N(c, 1, 1, () => {
        c = null;
      }), re());
    },
    i(d) {
      a || (C(o.$$.fragment, d), C(c), a = !0);
    },
    o(d) {
      N(o.$$.fragment, d), N(c), a = !1;
    },
    d(d) {
      d && L(t), W(o), c && c.d(), s = !1, u();
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
function Co(e) {
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
      l = a(s, u), l === c ? f[l].p(s, u) : (le(), N(f[c], 1, 1, () => {
        f[c] = null;
      }), re(), r = f[l], r ? r.p(s, u) : (r = f[l] = o[l](s), r.c()), C(r, 1), r.m(t, null));
    },
    i(s) {
      i || (C(r), i = !0);
    },
    o(s) {
      N(r), i = !1;
    },
    d(s) {
      s && L(t), f[l].d();
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
      n && L(t);
    }
  };
}
function e0(e) {
  let t, n, l = Object.entries(
    /*subqueries*/
    e[2]
  ), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = So(vo(e, l, o));
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
          r[a] ? (r[a].p(s, f), C(r[a], 1)) : (r[a] = So(s), r[a].c(), C(r[a], 1), r[a].m(t.parentNode, t));
        }
        for (le(), a = l.length; a < r.length; a += 1)
          i(a);
        re();
      }
    },
    i(o) {
      if (!n) {
        for (let f = 0; f < l.length; f += 1)
          C(r[f]);
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
      Ne(r, o), o && L(t);
    }
  };
}
function So(e) {
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
      n || (C(t.$$.fragment, l), n = !0);
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
        e[0] ? Il : Be
      ),
      class: "inline"
    }
  });
  let d = (
    /*enabled*/
    e[0] && Co(e)
  );
  return {
    c() {
      t = w("div"), n = w("button"), l = w("h3"), l.textContent = "Subqueries", r = P(), i = w("div"), Y(o.$$.fragment), f = P(), d && d.c(), m(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100"), m(i, "class", "p-2 text-gray-800 dark:text-gray-200"), m(n, "class", "block flex items-center justify-between mb-2 bg-transparent hover:opacity-50"), m(t, "class", a = "p-2 mb-0 border-0 rounded-none " + /*width*/
      e[1] + " transition-colors duration-200"), ie(t, "opacity-50", Object.keys(
        /*subqueries*/
        e[2]
      ).length == 0);
    },
    m(g, b) {
      R(g, t, b), h(t, n), h(n, l), h(n, r), h(n, i), V(o, i, null), h(t, f), d && d.m(t, null), s = !0, u || (c = ne(
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
      g[0] ? Il : Be), o.$set(_), /*enabled*/
      g[0] ? d ? (d.p(g, b), b & /*enabled*/
      1 && C(d, 1)) : (d = Co(g), d.c(), C(d, 1), d.m(t, null)) : d && (le(), N(d, 1, 1, () => {
        d = null;
      }), re()), (!s || b & /*width*/
      2 && a !== (a = "p-2 mb-0 border-0 rounded-none " + /*width*/
      g[1] + " transition-colors duration-200")) && m(t, "class", a), (!s || b & /*width, Object, subqueries*/
      6) && ie(t, "opacity-50", Object.keys(
        /*subqueries*/
        g[2]
      ).length == 0);
    },
    i(g) {
      s || (C(o.$$.fragment, g), C(d), s = !0);
    },
    o(g) {
      N(o.$$.fragment, g), N(d), s = !1;
    },
    d(g) {
      g && L(t), W(o), d && d.d(), u = !1, c();
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
      n || (C(t.$$.fragment, l), n = !0);
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
      n || (C(t.$$.fragment, l), n = !0);
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
  function p(k, M) {
    return (
      /*copied*/
      k[3] ? 0 : 1
    );
  }
  return r = p(e), i = y[r] = _[r](e), a = new _e({ props: { icon: Wo } }), {
    c() {
      t = w("div"), n = w("div"), l = w("button"), i.c(), o = P(), f = w("button"), Y(a.$$.fragment), s = P(), u = w("code"), c = G(
        /*content*/
        e[0]
      ), m(l, "class", "p-2 hover:opacity-50 text-gray-700 dark:text-gray-200 text-sm"), m(l, "title", "Copy"), m(f, "class", "p-2 hover:opacity-50 text-gray-700 dark:text-gray-200 text-sm"), m(f, "title", "Run this query"), m(n, "class", "flex items-center absolute right-0 top-0 mr-2 mt-2"), m(u, "class", "font-mono whitespace-pre-line"), m(
        u,
        "id",
        /*highlightedViewID*/
        e[4]
      ), m(t, "class", "bg-gray-100 dark:bg-gray-800 rounded-md my-2 p-4 pr-12 relative text-gray-900 dark:text-gray-100");
    },
    m(k, M) {
      R(k, t, M), h(t, n), h(n, l), y[r].m(l, null), h(n, o), h(n, f), V(a, f, null), h(t, s), h(t, u), h(u, c), e[8](u), d = !0, g || (b = [
        ne(
          l,
          "click",
          /*click_handler*/
          e[6]
        ),
        ne(
          f,
          "click",
          /*click_handler_1*/
          e[7]
        )
      ], g = !0);
    },
    p(k, [M]) {
      let H = r;
      r = p(k), r === H ? y[r].p(k, M) : (le(), N(y[H], 1, 1, () => {
        y[H] = null;
      }), re(), i = y[r], i ? i.p(k, M) : (i = y[r] = _[r](k), i.c()), C(i, 1), i.m(l, null)), (!d || M & /*content*/
      1) && te(
        c,
        /*content*/
        k[0]
      );
    },
    i(k) {
      d || (C(i), C(a.$$.fragment, k), d = !0);
    },
    o(k) {
      N(i), N(a.$$.fragment, k), d = !1;
    },
    d(k) {
      k && L(t), y[r].d(), W(a), e[8](null), g = !1, Ce(b);
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
      l && L(t);
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
      n || (C(t.$$.fragment, l), n = !0);
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
      t = f(a), t === u ? o[t].p(a, s) : (le(), N(o[u], 1, 1, () => {
        o[u] = null;
      }), re(), n = o[t], n ? n.p(a, s) : (n = o[t] = i[t](a), n.c()), C(n, 1), n.m(l.parentNode, l));
    },
    i(a) {
      r || (C(n), r = !0);
    },
    o(a) {
      N(n), r = !1;
    },
    d(a) {
      o[t].d(a), a && L(l);
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
      R(f, t, a), h(t, n), h(n, r), i || (o = ne(
        n,
        "click",
        /*click_handler*/
        e[6]
      ), i = !0);
    },
    p(f, a) {
      a & /*collapsed*/
      2 && l !== (l = /*collapsed*/
      f[1] ? "More" : "Less") && te(r, l);
    },
    d(f) {
      f && L(t), i = !1, o();
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
      t = P(), f && f.c(), n = ce();
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
          i[u] ? (i[u].p(c, s), C(i[u], 1)) : (i[u] = zo(c), i[u].c(), C(i[u], 1), i[u].m(t.parentNode, t));
        }
        for (le(), u = r.length; u < i.length; u += 1)
          o(u);
        re();
      }
      /*collapsible*/
      a[2] ? f ? f.p(a, s) : (f = Lo(a), f.c(), f.m(n.parentNode, n)) : f && (f.d(1), f = null);
    },
    i(a) {
      if (!l) {
        for (let s = 0; s < r.length; s += 1)
          C(i[s]);
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
      Ne(i, a), a && L(t), f && f.d(a), a && L(n);
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
      n = a(s), n === c ? ~n && f[n].p(s, u) : (l && (le(), N(f[c], 1, 1, () => {
        f[c] = null;
      }), re()), ~n ? (l = f[n], l ? l.p(s, u) : (l = f[n] = o[n](s), l.c()), C(l, 1), l.m(t, null)) : l = null), (!i || u & /*scrollable*/
      128 && r !== (r = "h-full " + /*scrollable*/
      (s[7] ? "overflow-auto" : ""))) && m(t, "class", r);
    },
    i(s) {
      i || (C(l), i = !0);
    },
    o(s) {
      N(l), i = !1;
    },
    d(s) {
      s && L(t), ~n && f[n].d();
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
      t = w("div"), n = w("textarea"), l = P(), r = w("div"), i = w("button"), Y(o.$$.fragment), f = G(`
          History`), a = P(), s = w("button"), Y(u.$$.fragment), c = G(`
          Ask AI`), m(n, "class", "w-full h-full p-4 pb-16 bg-transparent text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none overflow-hidden min-h-[120px] relative z-20"), m(n, "placeholder", "Ask me to generate, update, or explain a TempoQL query..."), n.disabled = /*isLoading*/
      e[2], m(n, "rows", "5"), m(i, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), m(i, "title", "View query history"), m(s, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50"), s.disabled = d = !/*question*/
      e[0].trim() || /*isLoading*/
      e[2], m(r, "class", "absolute right-0 bottom-0 mr-4 mb-4 flex justify-end items-center gap-2 z-50"), m(t, "class", "relative w-full min-h-0 flex-auto");
    },
    m(y, p) {
      R(y, t, p), h(t, n), e[20](n), Ft(
        n,
        /*question*/
        e[0]
      ), h(t, l), h(t, r), h(r, i), V(o, i, null), h(i, f), h(r, a), h(r, s), V(u, s, null), h(s, c), g = !0, b || (_ = [
        ne(
          n,
          "input",
          /*textarea_input_handler*/
          e[21]
        ),
        ne(
          n,
          "keydown",
          /*handleKeydown*/
          e[13]
        ),
        ne(i, "click", function() {
          nt(
            /*onHistoryClick*/
            e[8]
          ) && e[8].apply(this, arguments);
        }),
        ne(
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
      1 && Ft(
        n,
        /*question*/
        e[0]
      ), (!g || p & /*question, isLoading*/
      5 && d !== (d = !/*question*/
      e[0].trim() || /*isLoading*/
      e[2])) && (s.disabled = d);
    },
    i(y) {
      g || (C(o.$$.fragment, y), C(u.$$.fragment, y), g = !0);
    },
    o(y) {
      N(o.$$.fragment, y), N(u.$$.fragment, y), g = !1;
    },
    d(y) {
      y && L(t), e[20](null), W(o), W(u), b = !1, Ce(_);
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
      r || (C(l.$$.fragment, i), r = !0);
    },
    o(i) {
      N(l.$$.fragment, i), r = !1;
    },
    d(i) {
      i && L(t), W(l);
    }
  };
}
function _0(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = w("div"), n = w("h3"), n.textContent = "Error", l = P(), r = w("div"), i = G(
        /*error*/
        e[3]
      ), m(n, "class", "text-lg font-medium text-red-700 dark:text-red-100 mb-2"), m(r, "class", "text-sm font-mono text-gray-800 dark:text-gray-100"), m(t, "class", "bg-red-50 dark:bg-red-800/40 rounded-lg border border-red-200 dark:border-red-400 p-4 mb-4");
    },
    m(o, f) {
      R(o, t, f), h(t, n), h(t, l), h(t, r), h(r, i);
    },
    p(o, f) {
      f & /*error*/
      8 && te(
        i,
        /*error*/
        o[3]
      );
    },
    i: K,
    o: K,
    d(o) {
      o && L(t);
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
      n && L(t);
    }
  };
}
function p0(e) {
  let t, n, l, r, i, o, f, a, s, u, c, d, g, b, _, y, p, k, M, H, x, q, j, F, O, D;
  p = new _e({
    props: {
      icon: (
        /*apiStatusInfo*/
        e[11].icon
      ),
      class: "inline mr-2"
    }
  });
  const z = [b0, m0], E = [];
  function B(S, T) {
    return (
      /*tab*/
      S[9] == "query" ? 0 : 1
    );
  }
  return x = B(e), q = E[x] = z[x](e), {
    c() {
      t = w("div"), n = w("div"), l = w("h3"), l.textContent = "AI Assistant", r = P(), i = w("button"), o = G("Query"), a = P(), s = w("button"), u = G("Response"), g = P(), b = w("div"), _ = P(), y = w("div"), Y(p.$$.fragment), k = P(), M = G(
        /*apiStatus*/
        e[5]
      ), H = P(), q.c(), m(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100 pr-2"), m(i, "class", f = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*tab*/
      (e[9] === "query" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800")), m(i, "type", "button"), m(s, "class", c = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 disabled:opacity-50 " + /*tab*/
      (e[9] === "response" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800")), s.disabled = d = !/*llmResponse*/
      e[4] && !/*error*/
      e[3], m(s, "type", "button"), m(b, "class", "flex-auto"), m(y, "class", "flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"), m(n, "class", "flex items-center mb-4 gap-2 shrink-0"), m(t, "class", j = "px-4 pb-4 " + /*width*/
      e[6] + " h-full flex flex-col");
    },
    m(S, T) {
      R(S, t, T), h(t, n), h(n, l), h(n, r), h(n, i), h(i, o), h(n, a), h(n, s), h(s, u), h(n, g), h(n, b), h(n, _), h(n, y), V(p, y, null), h(y, k), h(y, M), h(t, H), E[x].m(t, null), F = !0, O || (D = [
        ne(
          i,
          "click",
          /*click_handler*/
          e[18]
        ),
        ne(
          s,
          "click",
          /*click_handler_1*/
          e[19]
        )
      ], O = !0);
    },
    p(S, [T]) {
      (!F || T & /*tab*/
      512 && f !== (f = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*tab*/
      (S[9] === "query" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"))) && m(i, "class", f), (!F || T & /*tab*/
      512 && c !== (c = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 disabled:opacity-50 " + /*tab*/
      (S[9] === "response" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"))) && m(s, "class", c), (!F || T & /*llmResponse, error*/
      24 && d !== (d = !/*llmResponse*/
      S[4] && !/*error*/
      S[3])) && (s.disabled = d);
      const Q = {};
      T & /*apiStatusInfo*/
      2048 && (Q.icon = /*apiStatusInfo*/
      S[11].icon), p.$set(Q), (!F || T & /*apiStatus*/
      32) && te(
        M,
        /*apiStatus*/
        S[5]
      );
      let U = x;
      x = B(S), x === U ? E[x].p(S, T) : (le(), N(E[U], 1, 1, () => {
        E[U] = null;
      }), re(), q = E[x], q ? q.p(S, T) : (q = E[x] = z[x](S), q.c()), C(q, 1), q.m(t, null)), (!F || T & /*width*/
      64 && j !== (j = "px-4 pb-4 " + /*width*/
      S[6] + " h-full flex flex-col")) && m(t, "class", j);
    },
    i(S) {
      F || (C(p.$$.fragment, S), C(q), F = !0);
    },
    o(S) {
      N(p.$$.fragment, S), N(q), F = !1;
    },
    d(S) {
      S && L(t), W(p), E[x].d(), O = !1, Ce(D);
    }
  };
}
function k0(e, t, n) {
  let l, { onSubmit: r = () => {
  } } = t, { onRun: i = () => {
  } } = t, { isLoading: o = !1 } = t, { error: f = "" } = t, { llmResponse: a = "" } = t, { apiStatus: s = "Checking API connection..." } = t, { width: u = "w-full" } = t, { scrollable: c = !0 } = t, { extractedQuery: d = "" } = t, { hasExtractedQuery: g = !1 } = t, { onQueryExtracted: b = () => {
  } } = t, { onHistoryClick: _ = () => {
  } } = t, y = "query", { question: p = "" } = t, k;
  function M() {
    p.trim() && (r(p.trim()), k && k.focus());
  }
  function H(z) {
    z.key === "Enter" && !z.shiftKey && (z.preventDefault(), M());
  }
  function x(z) {
    return z.includes("Configured") || z.includes("ready") ? {
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      icon: Qa
    } : z.includes("Not configured") || z.includes("Invalid") ? {
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
  const q = () => n(9, y = "query"), j = () => n(9, y = "response");
  function F(z) {
    Me[z ? "unshift" : "push"](() => {
      k = z, n(10, k);
    });
  }
  function O() {
    p = this.value, n(0, p);
  }
  const D = () => {
    M(), n(9, y = "response");
  };
  return e.$$set = (z) => {
    "onSubmit" in z && n(14, r = z.onSubmit), "onRun" in z && n(1, i = z.onRun), "isLoading" in z && n(2, o = z.isLoading), "error" in z && n(3, f = z.error), "llmResponse" in z && n(4, a = z.llmResponse), "apiStatus" in z && n(5, s = z.apiStatus), "width" in z && n(6, u = z.width), "scrollable" in z && n(7, c = z.scrollable), "extractedQuery" in z && n(15, d = z.extractedQuery), "hasExtractedQuery" in z && n(16, g = z.hasExtractedQuery), "onQueryExtracted" in z && n(17, b = z.onQueryExtracted), "onHistoryClick" in z && n(8, _ = z.onHistoryClick), "question" in z && n(0, p = z.question);
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
    M,
    H,
    r,
    d,
    g,
    b,
    q,
    j,
    F,
    O,
    D
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
        r || (C(n.$$.fragment, f), r = !0);
      },
      o(f) {
        N(n.$$.fragment, f), r = !1;
      },
      d(f) {
        f && L(t), W(n);
      }
    }
  );
}
function Ao(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = w("div"), n = w("h3"), n.textContent = "Query Error", l = P(), r = w("div"), i = G(
        /*queryError*/
        e[5]
      ), m(n, "class", "text-lg font-medium text-red-700 dark:text-red-100 mb-2"), m(r, "class", "text-sm font-mono text-gray-800 dark:text-gray-100"), m(t, "class", "bg-red-50 dark:bg-red-800/40 rounded-lg border border-red-200 dark:border-red-400 p-4 mb-4");
    },
    m(o, f) {
      R(o, t, f), h(t, n), h(t, l), h(t, r), h(r, i);
    },
    p(o, f) {
      f & /*queryError*/
      32 && te(
        i,
        /*queryError*/
        o[5]
      );
    },
    d(o) {
      o && L(t);
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
  function b(k, M) {
    return (
      /*queryError*/
      k[5] ? C0 : v0
    );
  }
  let _ = b(e), y = _(e), p = (
    /*llmExplanation*/
    e[16] && Do(e)
  );
  return {
    c() {
      t = w("div"), n = w("div"), l = w("h3"), l.textContent = "Explanation", r = P(), i = w("button"), Y(o.$$.fragment), f = P(), y.c(), s = P(), p && p.c(), m(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100"), m(i, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50"), i.disabled = a = (!/*values*/
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
    m(k, M) {
      R(k, t, M), h(t, n), h(n, l), h(n, r), h(n, i), V(o, i, null), h(i, f), y.m(i, null), h(t, s), p && p.m(t, null), c = !0, d || (g = ne(
        i,
        "click",
        /*click_handler*/
        e[25]
      ), d = !0);
    },
    p(k, M) {
      _ !== (_ = b(k)) && (y.d(1), y = _(k), y && (y.c(), y.m(i, null))), (!c || M & /*values, queryError*/
      96 && a !== (a = (!/*values*/
      k[6] || Object.keys(
        /*values*/
        k[6]
      ).length == 0) && !/*queryError*/
      k[5])) && (i.disabled = a), /*llmExplanation*/
      k[16] ? p ? (p.p(k, M), M & /*llmExplanation*/
      65536 && C(p, 1)) : (p = Do(k), p.c(), C(p, 1), p.m(t, null)) : p && (le(), N(p, 1, 1, () => {
        p = null;
      }), re()), (!c || M & /*width*/
      256 && u !== (u = "px-2 mb-4 " + /*width*/
      k[8] + " dark:text-gray-100")) && m(t, "class", u), (!c || M & /*width, values, Object, queryError*/
      352) && ie(t, "opacity-50", (!/*values*/
      k[6] || Object.keys(
        /*values*/
        k[6]
      ).length == 0) && !/*queryError*/
      k[5]);
    },
    i(k) {
      c || (C(o.$$.fragment, k), C(p), c = !0);
    },
    o(k) {
      N(o.$$.fragment, k), N(p), c = !1;
    },
    d(k) {
      k && L(t), W(o), y.d(), p && p.d(), d = !1, g();
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
      n && L(t);
    }
  };
}
function C0(e) {
  let t;
  return {
    c() {
      t = G("Explain and Fix");
    },
    m(n, l) {
      R(n, t, l);
    },
    d(n) {
      n && L(t);
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
      n || (C(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function S0(e) {
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
      n && L(t);
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
      n || (C(t.$$.fragment, l), n = !0);
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
  let t, n, l, r, i, o, f, a, s, u, c, d, g, b, _, y, p, k, M, H, x;
  function q(S) {
    e[22](S);
  }
  let j = {
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
  e[0] !== void 0 && (j.value = /*textInput*/
  e[0]), r = new Is({ props: j }), Me.push(() => kn(r, "value", q));
  let F = (
    /*llmAvailable*/
    e[13] && No(e)
  ), O = !!/*queryError*/
  e[5] && Ao(e), D = (
    /*llmAvailable*/
    e[13] && Eo(e)
  );
  const z = [M0, S0], E = [];
  function B(S, T) {
    return T & /*values*/
    64 && (b = null), b == null && (b = !!(/*values*/
    S[6] && Object.keys(
      /*values*/
      S[6]
    ).length > 0)), b ? 0 : 1;
  }
  return _ = B(e, -1), y = E[_] = z[_](e), M = new l0({
    props: {
      width: "w-full",
      subqueries: (
        /*subqueries*/
        e[7]
      )
    }
  }), {
    c() {
      t = w("div"), n = w("div"), l = w("div"), Y(r.$$.fragment), o = P(), F && F.c(), f = P(), a = w("div"), O && O.c(), s = P(), D && D.c(), u = P(), c = w("div"), d = w("div"), d.innerHTML = '<h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Query Result</h3>', g = P(), y.c(), k = P(), Y(M.$$.fragment), m(l, "class", "flex-auto"), m(n, "class", "w-1/2 shrink-0 flex flex-col h-full"), m(d, "class", "flex items-center justify-between mb-2"), m(c, "class", p = "px-2 mb-4 " + /*width*/
      e[8] + " dark:text-gray-100"), ie(c, "opacity-50", !/*values*/
      e[6] || Object.keys(
        /*values*/
        e[6]
      ).length == 0), m(a, "class", "flex-auto p-4 border-l border-gray-400 dark:border-gray-600 h-full overflow-auto"), m(t, "class", H = "flex " + /*width*/
      e[8] + " h-full");
    },
    m(S, T) {
      R(S, t, T), h(t, n), h(n, l), V(r, l, null), h(n, o), F && F.m(n, null), h(t, f), h(t, a), O && O.m(a, null), h(a, s), D && D.m(a, null), h(a, u), h(a, c), h(c, d), h(c, g), E[_].m(c, null), h(a, k), V(M, a, null), x = !0;
    },
    p(S, [T]) {
      const Q = {};
      T & /*dataFields*/
      4 && (Q.dataFields = /*dataFields*/
      S[2]), T & /*onRun*/
      8 && (Q.onRun = /*onRun*/
      S[3]), T & /*onExplain*/
      16 && (Q.onExplain = /*onExplain*/
      S[4]), T & /*onQueryHistoryClick*/
      1048576 && (Q.onHistoryClick = /*onQueryHistoryClick*/
      S[20]), !i && T & /*textInput*/
      1 && (i = !0, Q.value = /*textInput*/
      S[0], pn(() => i = !1)), r.$set(Q), /*llmAvailable*/
      S[13] ? F ? (F.p(S, T), T & /*llmAvailable*/
      8192 && C(F, 1)) : (F = No(S), F.c(), C(F, 1), F.m(n, null)) : F && (le(), N(F, 1, 1, () => {
        F = null;
      }), re()), /*queryError*/
      S[5] ? O ? O.p(S, T) : (O = Ao(S), O.c(), O.m(a, s)) : O && (O.d(1), O = null), /*llmAvailable*/
      S[13] ? D ? (D.p(S, T), T & /*llmAvailable*/
      8192 && C(D, 1)) : (D = Eo(S), D.c(), C(D, 1), D.m(a, u)) : D && (le(), N(D, 1, 1, () => {
        D = null;
      }), re());
      let U = _;
      _ = B(S, T), _ === U ? E[_].p(S, T) : (le(), N(E[U], 1, 1, () => {
        E[U] = null;
      }), re(), y = E[_], y ? y.p(S, T) : (y = E[_] = z[_](S), y.c()), C(y, 1), y.m(c, null)), (!x || T & /*width*/
      256 && p !== (p = "px-2 mb-4 " + /*width*/
      S[8] + " dark:text-gray-100")) && m(c, "class", p), (!x || T & /*width, values, Object*/
      320) && ie(c, "opacity-50", !/*values*/
      S[6] || Object.keys(
        /*values*/
        S[6]
      ).length == 0);
      const oe = {};
      T & /*subqueries*/
      128 && (oe.subqueries = /*subqueries*/
      S[7]), M.$set(oe), (!x || T & /*width*/
      256 && H !== (H = "flex " + /*width*/
      S[8] + " h-full")) && m(t, "class", H);
    },
    i(S) {
      x || (C(r.$$.fragment, S), C(F), C(D), C(y), C(M.$$.fragment, S), x = !0);
    },
    o(S) {
      N(r.$$.fragment, S), N(F), N(D), N(y), N(M.$$.fragment, S), x = !1;
    },
    d(S) {
      S && L(t), W(r), F && F.d(), O && O.d(), D && D.d(), E[_].d(), W(M);
    }
  };
}
function L0(e, t, n) {
  let { textInput: l = "" } = t, { onTextInput: r = () => {
  } } = t, { dataFields: i = [] } = t, { onRun: o = () => {
  } } = t, { onExplain: f = () => {
  } } = t, { queryError: a = "" } = t, { values: s = {} } = t, { subqueries: u = {} } = t, { width: c = "w-full" } = t, { onLLMSubmit: d = () => {
  } } = t, { llmResponse: g = "" } = t, { llmLoading: b = !1 } = t, { llmError: _ = "" } = t, { llmAvailable: y = !1 } = t, { apiStatus: p = "" } = t, { extractedQuery: k = "" } = t, { llmExplanation: M = "" } = t, { hasExtractedQuery: H = !1 } = t, { onQueryExtracted: x = () => {
  } } = t, { onHistoryClick: q = () => {
  } } = t, { onQueryHistoryClick: j = () => {
  } } = t, { aiQuestion: F = "" } = t;
  function O(S) {
    l = S, n(0, l);
  }
  const D = (S) => {
    n(0, l = S), o();
  };
  function z(S) {
    F = S, n(1, F);
  }
  const E = () => {
    f();
  }, B = (S) => {
    n(0, l = S), o();
  };
  return e.$$set = (S) => {
    "textInput" in S && n(0, l = S.textInput), "onTextInput" in S && n(21, r = S.onTextInput), "dataFields" in S && n(2, i = S.dataFields), "onRun" in S && n(3, o = S.onRun), "onExplain" in S && n(4, f = S.onExplain), "queryError" in S && n(5, a = S.queryError), "values" in S && n(6, s = S.values), "subqueries" in S && n(7, u = S.subqueries), "width" in S && n(8, c = S.width), "onLLMSubmit" in S && n(9, d = S.onLLMSubmit), "llmResponse" in S && n(10, g = S.llmResponse), "llmLoading" in S && n(11, b = S.llmLoading), "llmError" in S && n(12, _ = S.llmError), "llmAvailable" in S && n(13, y = S.llmAvailable), "apiStatus" in S && n(14, p = S.apiStatus), "extractedQuery" in S && n(15, k = S.extractedQuery), "llmExplanation" in S && n(16, M = S.llmExplanation), "hasExtractedQuery" in S && n(17, H = S.hasExtractedQuery), "onQueryExtracted" in S && n(18, x = S.onQueryExtracted), "onHistoryClick" in S && n(19, q = S.onHistoryClick), "onQueryHistoryClick" in S && n(20, j = S.onQueryHistoryClick), "aiQuestion" in S && n(1, F = S.aiQuestion);
  }, [
    l,
    F,
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
    M,
    H,
    x,
    q,
    j,
    r,
    O,
    D,
    z,
    E,
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
      t = w("div"), n = w("div"), l = w("div"), r = w("div"), i = w("p"), f = G(o), a = P(), s = w("div"), s.innerHTML = '<div class="bg-blue-600 h-2 rounded-full animate-pulse" style="width: 100%"></div>', m(i, "class", "text-sm font-medium text-gray-900 dark:text-gray-100"), m(r, "class", "flex-1"), m(s, "class", "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"), m(l, "class", "space-y-3"), m(n, "class", "bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 w-1/2 p-6"), m(t, "class", "absolute top-0 left-0 right-0 top-0 bottom-0 bg-white/80 dark:bg-gray-900/80 flex items-center justify-center z-80");
    },
    m(u, c) {
      R(u, t, c), h(t, n), h(n, l), h(l, r), h(r, i), h(i, f), h(l, a), h(l, s);
    },
    p(u, c) {
      c & /*message*/
      2 && o !== (o = /*message*/
      (u[1] || "Loading...") + "") && te(f, o);
    },
    d(u) {
      u && L(t);
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
      n && n.d(l), l && L(t);
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
  function _(k, M) {
    return (
      /*history*/
      k[1].length === 0 ? q0 : D0
    );
  }
  let y = _(e), p = y(e);
  return {
    c() {
      t = w("div"), n = P(), l = w("div"), r = w("div"), i = w("div"), o = w("h3"), o.textContent = "Query History", f = P(), a = w("button"), Y(s.$$.fragment), u = P(), c = w("div"), p.c(), m(t, "class", "absolute top-0 left-0 w-full h-full bg-white/80 z-40"), m(o, "class", "font-medium text-gray-900"), m(a, "class", "text-gray-600 dark:text-gray-300 hover:opacity-50 transition-colors p-2"), m(a, "title", "Close history"), m(i, "class", "flex items-center justify-between px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white"), m(c, "class", "max-h-80 overflow-y-auto svelte-6p3axr"), m(r, "class", "bg-white dark:bg-gray-800 border-2 border-gray-300/50 dark:border-gray-600/2 rounded-lg w-2/3 h-2/3 overflow-auto pointer-events-auto"), m(l, "class", "absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 pointer-events-none");
    },
    m(k, M) {
      R(k, t, M), R(k, n, M), R(k, l, M), h(l, r), h(r, i), h(i, o), h(i, f), h(i, a), V(s, a, null), h(r, u), h(r, c), p.m(c, null), d = !0, g || (b = [
        ne(t, "click", za(
          /*handleClickOutside*/
          e[4]
        )),
        ne(a, "click", function() {
          nt(
            /*onClose*/
            e[2]
          ) && e[2].apply(this, arguments);
        })
      ], g = !0);
    },
    p(k, M) {
      e = k, y === (y = _(e)) && p ? p.p(e, M) : (p.d(1), p = y(e), p && (p.c(), p.m(c, null)));
    },
    i(k) {
      d || (C(s.$$.fragment, k), d = !0);
    },
    o(k) {
      N(s.$$.fragment, k), d = !1;
    },
    d(k) {
      k && L(t), k && L(n), k && L(l), W(s), p.d(), g = !1, Ce(b);
    }
  };
}
function D0(e) {
  let t, n = (
    /*history*/
    e[1]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = jo(To(e, n, r));
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
          l[o] ? l[o].p(f, i) : (l[o] = jo(f), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(r) {
      Ne(l, r), r && L(t);
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
      n && L(t);
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
      (r[7].query || "No query extracted") + "") && te(l, n);
    },
    d(r) {
      r && L(t);
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
      l[7].question + "") && te(n, t);
    },
    d(l) {
      l && L(n);
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
      r[7].answer + "") && te(l, n);
    },
    d(r) {
      r && L(t);
    }
  };
}
function jo(e) {
  let t, n, l, r, i, o = Po(
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
      t = w("div"), n = w("div"), l = w("h4"), b.c(), r = P(), i = w("span"), f = G(o), a = P(), _ && _.c(), s = P(), m(l, "class", "text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-2 flex-1 svelte-6p3axr"), m(i, "class", "text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0"), m(n, "class", "flex items-start justify-between"), m(t, "class", "p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors");
    },
    m(p, k) {
      R(p, t, k), h(t, n), h(n, l), b.m(l, null), h(n, r), h(n, i), h(i, f), h(t, a), _ && _.m(t, null), h(t, s), u || (c = ne(t, "click", y), u = !0);
    },
    p(p, k) {
      e = p, g === (g = d(e)) && b ? b.p(e, k) : (b.d(1), b = g(e), b && (b.c(), b.m(l, null))), k & /*history*/
      2 && o !== (o = Po(
        /*historyItem*/
        e[7].timestamp
      ) + "") && te(f, o), /*historyItem*/
      e[7].answer ? _ ? _.p(e, k) : (_ = Oo(e), _.c(), _.m(t, s)) : _ && (_.d(1), _ = null);
    },
    d(p) {
      p && L(t), b.d(), _ && _.d(), u = !1, c();
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
      1 && C(l, 1)) : (l = xo(r), l.c(), C(l, 1), l.m(t.parentNode, t)) : l && (le(), N(l, 1, 1, () => {
        l = null;
      }), re());
    },
    i(r) {
      n || (C(l), n = !0);
    },
    o(r) {
      N(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && L(t);
    }
  };
}
function Po(e) {
  let t = /* @__PURE__ */ new Date();
  t.setTime(Date.parse(e)), console.log("format:", e, Date.parse(e));
  const l = (/* @__PURE__ */ new Date()).getTime() - t.getTime(), r = Math.floor(l / 6e4), i = Math.floor(l / 36e5), o = Math.floor(l / 864e5);
  return r < 1 ? "Just now" : r < 60 ? `${r}m ago` : i < 24 ? `${i}h ago` : `${o}d ago`;
}
function j0(e, t, n) {
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
class Fo extends me {
  constructor(t) {
    super(), ge(this, t, j0, O0, de, {
      isVisible: 0,
      history: 1,
      onClose: 2,
      onSelect: 3,
      position: 5
    });
  }
}
function P0(e) {
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
        r || (C(t.$$.fragment, a), r = !0);
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
function F0(e) {
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
        l || (C(t.$$.fragment, o), l = !0);
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
function I0(e) {
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
  const b = [F0, P0], _ = [];
  function y(p, k) {
    return (
      /*activeTab*/
      p[1] === "data-elements" ? 0 : (
        /*activeTab*/
        p[1] === "query-inspector" ? 1 : -1
      )
    );
  }
  return ~(i = y(e)) && (o = _[i] = b[i](e)), a = new Fo({
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
  }), u = new Fo({
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
      t = w("main"), Y(n.$$.fragment), l = P(), r = w("div"), o && o.c(), f = P(), Y(a.$$.fragment), s = P(), Y(u.$$.fragment), c = P(), Y(d.$$.fragment), m(r, "class", "flex-auto w-full min-h-0 z-0 svelte-1pq5c6y"), m(t, "class", "w-full bg-white dark:bg-gray-950 transition-colors duration-200 relative overflow-hidden flex flex-col svelte-1pq5c6y"), Z(t, "height", "600px");
    },
    m(p, k) {
      R(p, t, k), V(n, t, null), h(t, l), h(t, r), ~i && _[i].m(r, null), h(t, f), V(a, t, null), h(t, s), V(u, t, null), h(t, c), V(d, t, null), g = !0;
    },
    p(p, k) {
      const M = {};
      k[0] & /*activeTab*/
      2 && (M.activeTab = /*activeTab*/
      p[1]), n.$set(M);
      let H = i;
      i = y(p), i === H ? ~i && _[i].p(p, k) : (o && (le(), N(_[H], 1, 1, () => {
        _[H] = null;
      }), re()), ~i ? (o = _[i], o ? o.p(p, k) : (o = _[i] = b[i](p), o.c()), C(o, 1), o.m(r, null)) : o = null);
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
      const j = {};
      k[0] & /*$isLoading*/
      1024 && (j.isLoading = /*$isLoading*/
      p[10]), k[0] & /*$loadingMessage*/
      2048 && (j.message = /*$loadingMessage*/
      p[11]), d.$set(j);
    },
    i(p) {
      g || (C(n.$$.fragment, p), C(o), C(a.$$.fragment, p), C(u.$$.fragment, p), C(d.$$.fragment, p), g = !0);
    },
    o(p) {
      N(n.$$.fragment, p), N(o), N(a.$$.fragment, p), N(u.$$.fragment, p), N(d.$$.fragment, p), g = !1;
    },
    d(p) {
      p && L(t), W(n), ~i && _[i].d(), W(a), W(u), W(d);
    }
  };
}
function H0(e, t, n) {
  let l, r, i, o, f, a, s, u, c, d, g, b, _, y, p, k, M, H, x, q, { model: j } = t;
  const F = Fa(j), { values: O, listNames: D, runQuery: z, handleLLMQuestion: E, handleLLMExplanation: B, subqueries: S, queryError: T, scopes: Q, scopeConcepts: U, handleScopeAnalysis: oe, llmResponse: ee, llmLoading: A, llmError: $, llmAvailable: J, llmExplanation: se, apiStatus: pe, isLoading: Se, loadingMessage: we, extractedQuery: Ae, hasExtractedQuery: je, handleQueryExtraction: Re, textInput: Pe, queryHistory: lt, aiHistory: Bt } = F;
  I(e, O, (X) => n(13, d = X)), I(e, D, (X) => n(57, o = X)), I(e, S, (X) => n(14, g = X)), I(e, T, (X) => n(12, c = X)), I(e, Q, (X) => n(8, f = X)), I(e, U, (X) => n(9, a = X)), I(e, ee, (X) => n(6, r = X)), I(e, A, (X) => n(15, b = X)), I(e, $, (X) => n(16, _ = X)), I(e, J, (X) => n(17, y = X)), I(e, se, (X) => n(20, M = X)), I(e, pe, (X) => n(18, p = X)), I(e, Se, (X) => n(10, s = X)), I(e, we, (X) => n(11, u = X)), I(e, Ae, (X) => n(19, k = X)), I(e, je, (X) => n(21, H = X)), I(e, Pe, (X) => n(7, i = X)), I(e, lt, (X) => n(23, q = X)), I(e, Bt, (X) => n(22, x = X));
  let ut = "", ct = "query-inspector", Xe = !1, Ye = !1, Ue = "", Ln = { top: 0, left: 0 }, Rn = { top: 0, left: 0 };
  function Nn(X) {
    n(4, Ue = X), E(X);
  }
  function An(X) {
    n(1, ct = X);
  }
  function En() {
    console.log("text input", i), i.trim() && z(i);
  }
  function Dn() {
    n(2, Xe = !Xe);
  }
  function qn() {
    n(3, Ye = !Ye);
  }
  function Tn(X) {
    console.log("📚 AI History item selected:", X), n(2, Xe = !1), n(3, Ye = !1), X.query && (ae(Pe, i = X.query, i), j.set("text_input", X.query), j.save_changes()), X.question && n(4, Ue = X.question), X.answer && ae(ee, r = X.answer, r);
  }
  function xn() {
    n(2, Xe = !1);
  }
  function On() {
    n(3, Ye = !1);
  }
  const jn = (X) => {
    oe(X, !1);
  }, er = (X) => {
    oe(X, !0);
  }, Pn = (X, dt) => {
    ae(Pe, i = i + `{${dt}; scope = ${X}}`, i), n(1, ct = "query-inspector");
  };
  function tr(X) {
    ut = X, n(0, ut);
  }
  function Gt(X) {
    i = X, Pe.set(i);
  }
  function Fn(X) {
    Ue = X, n(4, Ue);
  }
  return e.$$set = (X) => {
    "model" in X && n(56, j = X.model);
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
    M,
    H,
    x,
    q,
    O,
    D,
    B,
    S,
    T,
    Q,
    U,
    oe,
    ee,
    A,
    $,
    J,
    se,
    pe,
    Se,
    we,
    Ae,
    je,
    Re,
    Pe,
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
    j,
    o,
    jn,
    er,
    Pn,
    tr,
    Gt,
    Fn
  ];
}
class Q0 extends me {
  constructor(t) {
    super(), ge(this, t, H0, I0, de, { model: 56 }, null, [-1, -1, -1]);
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
