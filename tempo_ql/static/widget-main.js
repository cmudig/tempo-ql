function Z() {
}
function tf(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function da(e) {
  return e();
}
function Xr() {
  return /* @__PURE__ */ Object.create(null);
}
function we(e) {
  e.forEach(da);
}
function Je(e) {
  return typeof e == "function";
}
function ye(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function nf(e) {
  return Object.keys(e).length === 0;
}
function ga(e, ...t) {
  if (e == null)
    return Z;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function j(e, t, n) {
  e.$$.on_destroy.push(ga(t, n));
}
function Pe(e, t, n, l) {
  if (e) {
    const r = ma(e, t, n, l);
    return e[0](r);
  }
}
function ma(e, t, n, l) {
  return e[1] && l ? tf(n.ctx.slice(), e[1](l(t))) : n.ctx;
}
function Qe(e, t, n, l) {
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
    const o = ma(t, n, l, i);
    e.p(o, r);
  }
}
function xe(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let l = 0; l < n; l++)
      t[l] = -1;
    return t;
  }
  return -1;
}
function Tr(e) {
  const t = {};
  for (const n in e)
    t[n] = !0;
  return t;
}
function de(e, t, n) {
  return e.set(n), t;
}
function _(e, t) {
  e.appendChild(t);
}
function L(e, t, n) {
  e.insertBefore(t, n || null);
}
function M(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Ee(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function k(e) {
  return document.createElement(e);
}
function Se(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function I(e) {
  return document.createTextNode(e);
}
function P() {
  return I(" ");
}
function _e() {
  return I("");
}
function U(e, t, n, l) {
  return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
}
function Or(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function qe(e) {
  return function(t) {
    return t.stopPropagation(), e.call(this, t);
  };
}
function b(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function lf(e) {
  return Array.from(e.childNodes);
}
function ae(e, t) {
  t = "" + t, e.data !== t && (e.data = t);
}
function ut(e, t) {
  e.value = t ?? "";
}
function le(e, t, n, l) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, l ? "important" : "");
}
function Yr(e, t, n) {
  for (let l = 0; l < e.options.length; l += 1) {
    const r = e.options[l];
    if (r.__value === t) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function rf(e) {
  const t = e.querySelector(":checked");
  return t && t.__value;
}
let Dl;
function of() {
  if (Dl === void 0) {
    Dl = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      Dl = !0;
    }
  }
  return Dl;
}
function af(e, t) {
  getComputedStyle(e).position === "static" && (e.style.position = "relative");
  const l = k("iframe");
  l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), l.setAttribute("aria-hidden", "true"), l.tabIndex = -1;
  const r = of();
  let i;
  return r ? (l.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", i = U(window, "message", (o) => {
    o.source === l.contentWindow && t();
  })) : (l.src = "about:blank", l.onload = () => {
    i = U(l.contentWindow, "resize", t), t();
  }), _(e, l), () => {
    (r || i && l.contentWindow) && i(), M(l);
  };
}
function se(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
function ff(e, t, { bubbles: n = !1, cancelable: l = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(e, n, l, t), r;
}
class $l {
  constructor(t = !1) {
    this.is_svg = !1, this.is_svg = t, this.e = this.n = null;
  }
  c(t) {
    this.h(t);
  }
  m(t, n, l = null) {
    this.e || (this.is_svg ? this.e = Se(n.nodeName) : this.e = k(n.nodeType === 11 ? "TEMPLATE" : n.nodeName), this.t = n.tagName !== "TEMPLATE" ? n : n.content, this.c(t)), this.i(l);
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
let zn;
function Mn(e) {
  zn = e;
}
function En() {
  if (!zn)
    throw new Error("Function called outside component initialization");
  return zn;
}
function pt(e) {
  En().$$.on_mount.push(e);
}
function sf(e) {
  En().$$.on_destroy.push(e);
}
function ba() {
  const e = En();
  return (t, n, { cancelable: l = !1 } = {}) => {
    const r = e.$$.callbacks[t];
    if (r) {
      const i = ff(t, n, { cancelable: l });
      return r.slice().forEach((o) => {
        o.call(e, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function uf(e, t) {
  return En().$$.context.set(e, t), t;
}
function An(e) {
  return En().$$.context.get(e);
}
function Mr(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((l) => l.call(this, t));
}
const Ht = [], Me = [];
let Bt = [];
const zr = [], cf = /* @__PURE__ */ Promise.resolve();
let Lr = !1;
function df() {
  Lr || (Lr = !0, cf.then(We));
}
function Ln(e) {
  Bt.push(e);
}
function Ye(e) {
  zr.push(e);
}
const vr = /* @__PURE__ */ new Set();
let It = 0;
function We() {
  if (It !== 0)
    return;
  const e = zn;
  do {
    try {
      for (; It < Ht.length; ) {
        const t = Ht[It];
        It++, Mn(t), gf(t.$$);
      }
    } catch (t) {
      throw Ht.length = 0, It = 0, t;
    }
    for (Mn(null), Ht.length = 0, It = 0; Me.length; )
      Me.pop()();
    for (let t = 0; t < Bt.length; t += 1) {
      const n = Bt[t];
      vr.has(n) || (vr.add(n), n());
    }
    Bt.length = 0;
  } while (Ht.length);
  for (; zr.length; )
    zr.pop()();
  Lr = !1, vr.clear(), Mn(e);
}
function gf(e) {
  if (e.fragment !== null) {
    e.update(), we(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Ln);
  }
}
function mf(e) {
  const t = [], n = [];
  Bt.forEach((l) => e.indexOf(l) === -1 ? t.push(l) : n.push(l)), n.forEach((l) => l()), Bt = t;
}
const Fl = /* @__PURE__ */ new Set();
let bt;
function ie() {
  bt = {
    r: 0,
    c: [],
    p: bt
    // parent group
  };
}
function oe() {
  bt.r || we(bt.c), bt = bt.p;
}
function w(e, t) {
  e && e.i && (Fl.delete(e), e.i(t));
}
function R(e, t, n, l) {
  if (e && e.o) {
    if (Fl.has(e))
      return;
    Fl.add(e), bt.c.push(() => {
      Fl.delete(e), l && (n && e.d(1), l());
    }), e.o(t);
  } else
    l && l();
}
function Ue(e, t, n) {
  const l = e.$$.props[t];
  l !== void 0 && (e.$$.bound[l] = n, n(e.$$.ctx[l]));
}
function W(e) {
  e && e.c();
}
function B(e, t, n, l) {
  const { fragment: r, after_update: i } = e.$$;
  r && r.m(t, n), l || Ln(() => {
    const o = e.$$.on_mount.map(da).filter(Je);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : we(o), e.$$.on_mount = [];
  }), i.forEach(Ln);
}
function G(e, t) {
  const n = e.$$;
  n.fragment !== null && (mf(n.after_update), we(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function bf(e, t) {
  e.$$.dirty[0] === -1 && (Ht.push(e), df(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function pe(e, t, n, l, r, i, o, a = [-1]) {
  const f = zn;
  Mn(e);
  const s = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: Z,
    not_equal: r,
    bound: Xr(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: Xr(),
    dirty: a,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  o && o(s.root);
  let u = !1;
  if (s.ctx = n ? n(e, t.props || {}, (c, d, ...m) => {
    const g = m.length ? m[0] : d;
    return s.ctx && r(s.ctx[c], s.ctx[c] = g) && (!s.skip_bound && s.bound[c] && s.bound[c](g), u && bf(e, c)), d;
  }) : [], s.update(), u = !0, we(s.before_update), s.fragment = l ? l(s.ctx) : !1, t.target) {
    if (t.hydrate) {
      const c = lf(t.target);
      s.fragment && s.fragment.l(c), c.forEach(M);
    } else
      s.fragment && s.fragment.c();
    t.intro && w(e.$$.fragment), B(e, t.target, t.anchor, t.customElement), We();
  }
  Mn(f);
}
class ke {
  $destroy() {
    G(this, 1), this.$destroy = Z;
  }
  $on(t, n) {
    if (!Je(n))
      return Z;
    const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return l.push(n), () => {
      const r = l.indexOf(n);
      r !== -1 && l.splice(r, 1);
    };
  }
  $set(t) {
    this.$$set && !nf(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Ft = [];
function _f(e, t) {
  return {
    subscribe: ge(e, t).subscribe
  };
}
function ge(e, t = Z) {
  let n;
  const l = /* @__PURE__ */ new Set();
  function r(a) {
    if (ye(e, a) && (e = a, n)) {
      const f = !Ft.length;
      for (const s of l)
        s[1](), Ft.push(s, e);
      if (f) {
        for (let s = 0; s < Ft.length; s += 2)
          Ft[s][0](Ft[s + 1]);
        Ft.length = 0;
      }
    }
  }
  function i(a) {
    r(a(e));
  }
  function o(a, f = Z) {
    const s = [a, f];
    return l.add(s), l.size === 1 && (n = t(r) || Z), a(e), () => {
      l.delete(s), l.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: i, subscribe: o };
}
function ve(e, t, n) {
  const l = !Array.isArray(e), r = l ? [e] : e, i = t.length < 2;
  return _f(n, (o) => {
    let a = !1;
    const f = [];
    let s = 0, u = Z;
    const c = () => {
      if (s)
        return;
      u();
      const m = t(l ? f[0] : f, o);
      i ? o(m) : u = Je(m) ? m : Z;
    }, d = r.map((m, g) => ga(m, (h) => {
      f[g] = h, s &= ~(1 << g), a && c();
    }, () => {
      s |= 1 << g;
    }));
    return a = !0, c(), function() {
      we(d), u(), a = !1;
    };
  });
}
function Ne(e, t, n) {
  const l = t, r = ge(e.get(l) || n);
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
function hf(e) {
  const t = Ne(e, "values", {}), n = Ne(e, "file_contents", {}), l = Ne(e, "_save_path", ""), r = Ne(e, "list_names", {
    attributes: [],
    events: [],
    intervals: []
  }), i = Ne(e, "subqueries", {}), o = Ne(e, "query_error", ""), a = Ne(e, "text_input", ""), f = Ne(e, "scopes", []), s = Ne(e, "scope_concepts", {}), u = Ne(e, "isLoading", !1), c = Ne(e, "loadingMessage", ""), d = Ne(e, "llm_available", !1), m = Ne(e, "llm_response", ""), g = Ne(e, "llm_loading", !1), h = Ne(e, "llm_error", ""), p = Ne(e, "api_status", "Checking API connection..."), S = Ne(e, "extracted_query", ""), y = Ne(e, "llm_explanation", ""), v = Ne(e, "has_extracted_query", !1), N = Ne(e, "query_history", []), q = Ne(e, "ai_history", []);
  let D = "";
  return {
    // Reactive stores
    values: t,
    savePath: l,
    fileContents: n,
    listNames: r,
    subqueries: i,
    queryError: o,
    scopes: f,
    scopeConcepts: s,
    isLoading: u,
    loadingMessage: c,
    llmResponse: m,
    llmLoading: g,
    llmError: h,
    llmAvailable: d,
    apiStatus: p,
    extractedQuery: S,
    llmExplanation: y,
    hasExtractedQuery: v,
    textInput: a,
    queryHistory: N,
    aiHistory: q,
    runQuery: (x) => {
      e.set("text_input", x), e.set("process_trigger", "run"), e.save_changes();
    },
    // LLM question handler
    handleLLMQuestion: (x) => {
      e.set("llm_question", x), e.set("llm_trigger", "ask"), e.save_changes();
    },
    handleLLMExplanation: () => {
      e.set("llm_trigger", "explain"), e.save_changes();
    },
    // Query extraction handler - triggered when AI extracts a query
    handleQueryExtraction: () => {
      let x = "";
      S.subscribe((V) => x = V)(), x && x !== D ? (console.log(
        "🔄 Query extracted from AI response:",
        x
      ), console.log("🔄 Current text input:", D), console.log("🔄 Updating text input with extracted query"), D = x, e.set("text_input", x), e.save_changes()) : x === D && console.log(
        "🔄 Extracted query is same as current input, no update needed"
      );
    },
    // Scope analysis handler
    handleScopeAnalysis: (x, V = !1) => {
      console.log(
        "🔍 Scope Analysis requested for:",
        x,
        V ? "(force refresh)" : ""
      );
      const A = V ? `${x}:force` : x;
      e.set("scope_analysis_trigger", A), e.save_changes();
    }
  };
}
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const yf = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, Bl = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [512, 512, [], "f077", "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
}, pf = {
  prefix: "fas",
  iconName: "chart-simple",
  icon: [448, 512, [], "e473", "M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z"]
}, kf = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, wf = kf, _a = {
  prefix: "fas",
  iconName: "bolt-lightning",
  icon: [384, 512, [], "e0b7", "M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z"]
}, Pr = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, ha = {
  prefix: "fas",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
}, vf = {
  prefix: "fas",
  iconName: "sun",
  icon: [512, 512, [9728], "f185", "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]
}, ya = {
  prefix: "fas",
  iconName: "play",
  icon: [384, 512, [9654], "f04b", "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]
}, Cf = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, Sf = Cf, Ae = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, Nf = {
  prefix: "fas",
  iconName: "list-ul",
  icon: [512, 512, ["list-dots"], "f0ca", "M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]
}, pa = Nf, er = {
  prefix: "fas",
  iconName: "copy",
  icon: [448, 512, [], "f0c5", "M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]
}, yt = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}, Mf = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, zf = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, Ze = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, Lf = {
  prefix: "fas",
  iconName: "moon",
  icon: [384, 512, [127769, 9214], "f186", "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]
}, Rf = {
  prefix: "fas",
  iconName: "check",
  icon: [448, 512, [10003, 10004], "f00c", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, qf = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, Df = qf, Ef = {
  prefix: "fas",
  iconName: "database",
  icon: [448, 512, [], "f1c0", "M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z"]
}, Af = {
  prefix: "fas",
  iconName: "circle-xmark",
  icon: [512, 512, [61532, "times-circle", "xmark-circle"], "f057", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]
}, Tf = Af, El = parseFloat;
function Rr(e, t = ";") {
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
function Of(e, t, n, l) {
  let r, i;
  const o = "1em";
  let a, f, s, u = "-.125em";
  const c = "visible";
  return l && (s = "center", i = "1.25em"), n && (r = n), t && (t == "lg" ? (f = "1.33333em", a = ".75em", u = "-.225em") : t == "xs" ? f = ".75em" : t == "sm" ? f = ".875em" : f = t.replace("x", "em")), Rr([
    Rr({
      float: r,
      width: i,
      height: o,
      "line-height": a,
      "font-size": f,
      "text-align": s,
      "vertical-align": u,
      "transform-origin": "center",
      overflow: c
    }),
    e
  ]);
}
function Pf(e, t, n, l, r, i = 1, o = "", a = "") {
  let f = 1, s = 1;
  return r && (r == "horizontal" ? f = -1 : r == "vertical" ? s = -1 : f = s = -1), Rr(
    [
      `translate(${El(t) * i}${o},${El(n) * i}${o})`,
      `scale(${f * El(e)},${s * El(e)})`,
      l && `rotate(${l}${a})`
    ],
    " "
  );
}
function Ur(e) {
  let t, n, l, r, i, o, a, f;
  function s(d, m) {
    return typeof /*i*/
    d[10][4] == "string" ? jf : Qf;
  }
  let u = s(e), c = u(e);
  return {
    c() {
      t = Se("svg"), n = Se("g"), l = Se("g"), c.c(), b(
        l,
        "transform",
        /*transform*/
        e[12]
      ), b(n, "transform", r = "translate(" + /*i*/
      e[10][0] / 2 + " " + /*i*/
      e[10][1] / 2 + ")"), b(n, "transform-origin", i = /*i*/
      e[10][0] / 4 + " 0"), b(t, "id", o = /*id*/
      e[1] || void 0), b(t, "class", a = "svelte-fa " + /*clazz*/
      e[0] + " svelte-1cj2gr0"), b(
        t,
        "style",
        /*s*/
        e[11]
      ), b(t, "viewBox", f = "0 0 " + /*i*/
      e[10][0] + " " + /*i*/
      e[10][1]), b(t, "aria-hidden", "true"), b(t, "role", "img"), b(t, "xmlns", "http://www.w3.org/2000/svg"), se(
        t,
        "pulse",
        /*pulse*/
        e[4]
      ), se(
        t,
        "spin",
        /*spin*/
        e[3]
      );
    },
    m(d, m) {
      L(d, t, m), _(t, n), _(n, l), c.m(l, null);
    },
    p(d, m) {
      u === (u = s(d)) && c ? c.p(d, m) : (c.d(1), c = u(d), c && (c.c(), c.m(l, null))), m & /*transform*/
      4096 && b(
        l,
        "transform",
        /*transform*/
        d[12]
      ), m & /*i*/
      1024 && r !== (r = "translate(" + /*i*/
      d[10][0] / 2 + " " + /*i*/
      d[10][1] / 2 + ")") && b(n, "transform", r), m & /*i*/
      1024 && i !== (i = /*i*/
      d[10][0] / 4 + " 0") && b(n, "transform-origin", i), m & /*id*/
      2 && o !== (o = /*id*/
      d[1] || void 0) && b(t, "id", o), m & /*clazz*/
      1 && a !== (a = "svelte-fa " + /*clazz*/
      d[0] + " svelte-1cj2gr0") && b(t, "class", a), m & /*s*/
      2048 && b(
        t,
        "style",
        /*s*/
        d[11]
      ), m & /*i*/
      1024 && f !== (f = "0 0 " + /*i*/
      d[10][0] + " " + /*i*/
      d[10][1]) && b(t, "viewBox", f), m & /*clazz, pulse*/
      17 && se(
        t,
        "pulse",
        /*pulse*/
        d[4]
      ), m & /*clazz, spin*/
      9 && se(
        t,
        "spin",
        /*spin*/
        d[3]
      );
    },
    d(d) {
      d && M(t), c.d();
    }
  };
}
function Qf(e) {
  let t, n, l, r, i, o, a, f, s, u;
  return {
    c() {
      t = Se("path"), o = Se("path"), b(t, "d", n = /*i*/
      e[10][4][0]), b(t, "fill", l = /*secondaryColor*/
      e[6] || /*color*/
      e[2] || "currentColor"), b(t, "fill-opacity", r = /*swapOpacity*/
      e[9] != !1 ? (
        /*primaryOpacity*/
        e[7]
      ) : (
        /*secondaryOpacity*/
        e[8]
      )), b(t, "transform", i = "translate(" + /*i*/
      e[10][0] / -2 + " " + /*i*/
      e[10][1] / -2 + ")"), b(o, "d", a = /*i*/
      e[10][4][1]), b(o, "fill", f = /*primaryColor*/
      e[5] || /*color*/
      e[2] || "currentColor"), b(o, "fill-opacity", s = /*swapOpacity*/
      e[9] != !1 ? (
        /*secondaryOpacity*/
        e[8]
      ) : (
        /*primaryOpacity*/
        e[7]
      )), b(o, "transform", u = "translate(" + /*i*/
      e[10][0] / -2 + " " + /*i*/
      e[10][1] / -2 + ")");
    },
    m(c, d) {
      L(c, t, d), L(c, o, d);
    },
    p(c, d) {
      d & /*i*/
      1024 && n !== (n = /*i*/
      c[10][4][0]) && b(t, "d", n), d & /*secondaryColor, color*/
      68 && l !== (l = /*secondaryColor*/
      c[6] || /*color*/
      c[2] || "currentColor") && b(t, "fill", l), d & /*swapOpacity, primaryOpacity, secondaryOpacity*/
      896 && r !== (r = /*swapOpacity*/
      c[9] != !1 ? (
        /*primaryOpacity*/
        c[7]
      ) : (
        /*secondaryOpacity*/
        c[8]
      )) && b(t, "fill-opacity", r), d & /*i*/
      1024 && i !== (i = "translate(" + /*i*/
      c[10][0] / -2 + " " + /*i*/
      c[10][1] / -2 + ")") && b(t, "transform", i), d & /*i*/
      1024 && a !== (a = /*i*/
      c[10][4][1]) && b(o, "d", a), d & /*primaryColor, color*/
      36 && f !== (f = /*primaryColor*/
      c[5] || /*color*/
      c[2] || "currentColor") && b(o, "fill", f), d & /*swapOpacity, secondaryOpacity, primaryOpacity*/
      896 && s !== (s = /*swapOpacity*/
      c[9] != !1 ? (
        /*secondaryOpacity*/
        c[8]
      ) : (
        /*primaryOpacity*/
        c[7]
      )) && b(o, "fill-opacity", s), d & /*i*/
      1024 && u !== (u = "translate(" + /*i*/
      c[10][0] / -2 + " " + /*i*/
      c[10][1] / -2 + ")") && b(o, "transform", u);
    },
    d(c) {
      c && M(t), c && M(o);
    }
  };
}
function jf(e) {
  let t, n, l, r;
  return {
    c() {
      t = Se("path"), b(t, "d", n = /*i*/
      e[10][4]), b(t, "fill", l = /*color*/
      e[2] || /*primaryColor*/
      e[5] || "currentColor"), b(t, "transform", r = "translate(" + /*i*/
      e[10][0] / -2 + " " + /*i*/
      e[10][1] / -2 + ")");
    },
    m(i, o) {
      L(i, t, o);
    },
    p(i, o) {
      o & /*i*/
      1024 && n !== (n = /*i*/
      i[10][4]) && b(t, "d", n), o & /*color, primaryColor*/
      36 && l !== (l = /*color*/
      i[2] || /*primaryColor*/
      i[5] || "currentColor") && b(t, "fill", l), o & /*i*/
      1024 && r !== (r = "translate(" + /*i*/
      i[10][0] / -2 + " " + /*i*/
      i[10][1] / -2 + ")") && b(t, "transform", r);
    },
    d(i) {
      i && M(t);
    }
  };
}
function xf(e) {
  let t, n = (
    /*i*/
    e[10][4] && Ur(e)
  );
  return {
    c() {
      n && n.c(), t = _e();
    },
    m(l, r) {
      n && n.m(l, r), L(l, t, r);
    },
    p(l, [r]) {
      /*i*/
      l[10][4] ? n ? n.p(l, r) : (n = Ur(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: Z,
    o: Z,
    d(l) {
      n && n.d(l), l && M(t);
    }
  };
}
function If(e, t, n) {
  let { class: l = "" } = t, { id: r = "" } = t, { style: i = "" } = t, { icon: o } = t, { size: a = "" } = t, { color: f = "" } = t, { fw: s = !1 } = t, { pull: u = "" } = t, { scale: c = 1 } = t, { translateX: d = 0 } = t, { translateY: m = 0 } = t, { rotate: g = "" } = t, { flip: h = !1 } = t, { spin: p = !1 } = t, { pulse: S = !1 } = t, { primaryColor: y = "" } = t, { secondaryColor: v = "" } = t, { primaryOpacity: N = 1 } = t, { secondaryOpacity: q = 0.4 } = t, { swapOpacity: D = !1 } = t, x, V, A;
  return e.$$set = (O) => {
    "class" in O && n(0, l = O.class), "id" in O && n(1, r = O.id), "style" in O && n(13, i = O.style), "icon" in O && n(14, o = O.icon), "size" in O && n(15, a = O.size), "color" in O && n(2, f = O.color), "fw" in O && n(16, s = O.fw), "pull" in O && n(17, u = O.pull), "scale" in O && n(18, c = O.scale), "translateX" in O && n(19, d = O.translateX), "translateY" in O && n(20, m = O.translateY), "rotate" in O && n(21, g = O.rotate), "flip" in O && n(22, h = O.flip), "spin" in O && n(3, p = O.spin), "pulse" in O && n(4, S = O.pulse), "primaryColor" in O && n(5, y = O.primaryColor), "secondaryColor" in O && n(6, v = O.secondaryColor), "primaryOpacity" in O && n(7, N = O.primaryOpacity), "secondaryOpacity" in O && n(8, q = O.secondaryOpacity), "swapOpacity" in O && n(9, D = O.swapOpacity);
  }, e.$$.update = () => {
    e.$$.dirty & /*icon*/
    16384 && n(10, x = o && o.icon || [0, 0, "", [], ""]), e.$$.dirty & /*style, size, pull, fw*/
    237568 && n(11, V = Of(i, a, u, s)), e.$$.dirty & /*scale, translateX, translateY, rotate, flip*/
    8126464 && n(12, A = Pf(c, d, m, g, h, 512));
  }, [
    l,
    r,
    f,
    p,
    S,
    y,
    v,
    N,
    q,
    D,
    x,
    V,
    A,
    i,
    o,
    a,
    s,
    u,
    c,
    d,
    m,
    g,
    h
  ];
}
class me extends ke {
  constructor(t) {
    super(), pe(this, t, If, xf, ye, {
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
function Ff() {
  const t = (typeof window < "u" ? localStorage.getItem("theme") : "dark") || "dark", { subscribe: n, set: l, update: r } = ge(t);
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
const Gl = Ff();
function Hf(e) {
  let t, n;
  return t = new me({ props: { icon: Lf } }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
    },
    p: Z,
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function Bf(e) {
  let t, n;
  return t = new me({ props: { icon: vf } }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
    },
    p: Z,
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function Gf(e) {
  let t, n, l, r, i, o;
  const a = [Bf, Hf], f = [];
  function s(u, c) {
    return (
      /*$theme*/
      u[0] === "dark" ? 0 : 1
    );
  }
  return n = s(e), l = f[n] = a[n](e), {
    c() {
      t = k("button"), l.c(), b(t, "class", "px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"), b(t, "title", "Toggle theme");
    },
    m(u, c) {
      L(u, t, c), f[n].m(t, null), r = !0, i || (o = U(
        t,
        "click",
        /*toggleTheme*/
        e[1]
      ), i = !0);
    },
    p(u, [c]) {
      let d = n;
      n = s(u), n === d ? f[n].p(u, c) : (ie(), R(f[d], 1, 1, () => {
        f[d] = null;
      }), oe(), l = f[n], l ? l.p(u, c) : (l = f[n] = a[n](u), l.c()), w(l, 1), l.m(t, null));
    },
    i(u) {
      r || (w(l), r = !0);
    },
    o(u) {
      R(l), r = !1;
    },
    d(u) {
      u && M(t), f[n].d(), i = !1, o();
    }
  };
}
function Vf(e, t, n) {
  let l;
  j(e, Gl, (i) => n(0, l = i));
  function r() {
    console.log("Theme toggle clicked, current theme:", l), Gl.toggle();
  }
  return e.$$.update = () => {
    if (e.$$.dirty & /*$theme*/
    1 && (console.log("Theme changed to:", l), typeof window < "u")) {
      const i = document.documentElement;
      console.log("HTML classes:", i.className), console.log("Has dark class:", i.classList.contains("dark"));
    }
  }, [l, r];
}
class Wf extends ke {
  constructor(t) {
    super(), pe(this, t, Vf, Gf, ye, {});
  }
}
function Jr(e, t, n) {
  const l = e.slice();
  return l[4] = t[n], l;
}
function Zr(e) {
  let t, n, l, r = (
    /*tab*/
    e[4].label + ""
  ), i, o, a, f, s;
  n = new me({
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
      t = k("button"), W(n.$$.fragment), l = P(), i = I(r), b(t, "class", o = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*activeTab*/
      (e[0] === /*tab*/
      e[4].id ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600"));
    },
    m(c, d) {
      L(c, t, d), B(n, t, null), _(t, l), _(t, i), a = !0, f || (s = U(t, "click", u), f = !0);
    },
    p(c, d) {
      e = c, (!a || d & /*activeTab*/
      1 && o !== (o = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*activeTab*/
      (e[0] === /*tab*/
      e[4].id ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600"))) && b(t, "class", o);
    },
    i(c) {
      a || (w(n.$$.fragment, c), a = !0);
    },
    o(c) {
      R(n.$$.fragment, c), a = !1;
    },
    d(c) {
      c && M(t), G(n), f = !1, s();
    }
  };
}
function Kf(e) {
  let t, n, l, r, i, o, a, f = (
    /*tabs*/
    e[2]
  ), s = [];
  for (let c = 0; c < f.length; c += 1)
    s[c] = Zr(Jr(e, f, c));
  const u = (c) => R(s[c], 1, 1, () => {
    s[c] = null;
  });
  return o = new Wf({}), {
    c() {
      t = k("div"), n = k("nav");
      for (let c = 0; c < s.length; c += 1)
        s[c].c();
      l = P(), r = k("div"), i = P(), W(o.$$.fragment), b(r, "class", "flex-auto"), b(n, "class", "flex gap-2 px-4 py-2"), b(n, "aria-label", "Tabs"), b(t, "class", "w-full bg-gray-300 dark:bg-gray-800 dark:text-white");
    },
    m(c, d) {
      L(c, t, d), _(t, n);
      for (let m = 0; m < s.length; m += 1)
        s[m] && s[m].m(n, null);
      _(n, l), _(n, r), _(n, i), B(o, n, null), a = !0;
    },
    p(c, [d]) {
      if (d & /*activeTab, tabs, onTabChange*/
      7) {
        f = /*tabs*/
        c[2];
        let m;
        for (m = 0; m < f.length; m += 1) {
          const g = Jr(c, f, m);
          s[m] ? (s[m].p(g, d), w(s[m], 1)) : (s[m] = Zr(g), s[m].c(), w(s[m], 1), s[m].m(n, l));
        }
        for (ie(), m = f.length; m < s.length; m += 1)
          u(m);
        oe();
      }
    },
    i(c) {
      if (!a) {
        for (let d = 0; d < f.length; d += 1)
          w(s[d]);
        w(o.$$.fragment, c), a = !0;
      }
    },
    o(c) {
      s = s.filter(Boolean);
      for (let d = 0; d < s.length; d += 1)
        R(s[d]);
      R(o.$$.fragment, c), a = !1;
    },
    d(c) {
      c && M(t), Ee(s, c), G(o);
    }
  };
}
function Xf(e, t, n) {
  let { activeTab: l = "query-inspector" } = t, { onTabChange: r = () => {
  } } = t;
  const i = [
    {
      id: "results",
      label: "Query Results",
      icon: pf
    },
    {
      id: "data-elements",
      label: "Data Elements",
      icon: Ef
    }
  ], o = (a) => r(a.id);
  return e.$$set = (a) => {
    "activeTab" in a && n(0, l = a.activeTab), "onTabChange" in a && n(1, r = a.onTabChange);
  }, [l, r, i, o];
}
class Yf extends ke {
  constructor(t) {
    super(), pe(this, t, Xf, Kf, ye, { activeTab: 0, onTabChange: 1 });
  }
}
function Uf(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Vl(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, l = e.slice(0, n);
  return [
    l.length > 1 ? l[0] + l.slice(2) : l,
    +e.slice(n + 1)
  ];
}
function Vt(e) {
  return e = Vl(Math.abs(e)), e ? e[1] : NaN;
}
function Jf(e, t) {
  return function(n, l) {
    for (var r = n.length, i = [], o = 0, a = e[0], f = 0; r > 0 && a > 0 && (f + a + 1 > l && (a = Math.max(1, l - f)), i.push(n.substring(r -= a, r + a)), !((f += a + 1) > l)); )
      a = e[o = (o + 1) % e.length];
    return i.reverse().join(t);
  };
}
function Zf(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var $f = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Wl(e) {
  if (!(t = $f.exec(e)))
    throw new Error("invalid format: " + e);
  var t;
  return new Qr({
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
Wl.prototype = Qr.prototype;
function Qr(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Qr.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function es(e) {
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
var ka;
function ts(e, t) {
  var n = Vl(e, t);
  if (!n)
    return e + "";
  var l = n[0], r = n[1], i = r - (ka = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, o = l.length;
  return i === o ? l : i > o ? l + new Array(i - o + 1).join("0") : i > 0 ? l.slice(0, i) + "." + l.slice(i) : "0." + new Array(1 - i).join("0") + Vl(e, Math.max(0, t + i - 1))[0];
}
function $r(e, t) {
  var n = Vl(e, t);
  if (!n)
    return e + "";
  var l = n[0], r = n[1];
  return r < 0 ? "0." + new Array(-r).join("0") + l : l.length > r + 1 ? l.slice(0, r + 1) + "." + l.slice(r + 1) : l + new Array(r - l.length + 2).join("0");
}
const ei = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Uf,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => $r(e * 100, t),
  r: $r,
  s: ts,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function ti(e) {
  return e;
}
var ni = Array.prototype.map, li = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function ns(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? ti : Jf(ni.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", l = e.currency === void 0 ? "" : e.currency[1] + "", r = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? ti : Zf(ni.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", a = e.minus === void 0 ? "−" : e.minus + "", f = e.nan === void 0 ? "NaN" : e.nan + "";
  function s(c) {
    c = Wl(c);
    var d = c.fill, m = c.align, g = c.sign, h = c.symbol, p = c.zero, S = c.width, y = c.comma, v = c.precision, N = c.trim, q = c.type;
    q === "n" ? (y = !0, q = "g") : ei[q] || (v === void 0 && (v = 12), N = !0, q = "g"), (p || d === "0" && m === "=") && (p = !0, d = "0", m = "=");
    var D = h === "$" ? n : h === "#" && /[boxX]/.test(q) ? "0" + q.toLowerCase() : "", x = h === "$" ? l : /[%p]/.test(q) ? o : "", V = ei[q], A = /[defgprs%]/.test(q);
    v = v === void 0 ? 6 : /[gprs]/.test(q) ? Math.max(1, Math.min(21, v)) : Math.max(0, Math.min(20, v));
    function O(C) {
      var T = D, ee = x, X, Q, H;
      if (q === "c")
        ee = V(C) + ee, C = "";
      else {
        C = +C;
        var ne = C < 0 || 1 / C < 0;
        if (C = isNaN(C) ? f : V(Math.abs(C), v), N && (C = es(C)), ne && +C == 0 && g !== "+" && (ne = !1), T = (ne ? g === "(" ? g : a : g === "-" || g === "(" ? "" : g) + T, ee = (q === "s" ? li[8 + ka / 3] : "") + ee + (ne && g === "(" ? ")" : ""), A) {
          for (X = -1, Q = C.length; ++X < Q; )
            if (H = C.charCodeAt(X), 48 > H || H > 57) {
              ee = (H === 46 ? r + C.slice(X + 1) : C.slice(X)) + ee, C = C.slice(0, X);
              break;
            }
        }
      }
      y && !p && (C = t(C, 1 / 0));
      var ue = T.length + C.length + ee.length, re = ue < S ? new Array(S - ue + 1).join(d) : "";
      switch (y && p && (C = t(re + C, re.length ? S - ee.length : 1 / 0), re = ""), m) {
        case "<":
          C = T + C + ee + re;
          break;
        case "=":
          C = T + re + C + ee;
          break;
        case "^":
          C = re.slice(0, ue = re.length >> 1) + T + C + ee + re.slice(ue);
          break;
        default:
          C = re + T + C + ee;
          break;
      }
      return i(C);
    }
    return O.toString = function() {
      return c + "";
    }, O;
  }
  function u(c, d) {
    var m = s((c = Wl(c), c.type = "f", c)), g = Math.max(-8, Math.min(8, Math.floor(Vt(d) / 3))) * 3, h = Math.pow(10, -g), p = li[8 + g / 3];
    return function(S) {
      return m(h * S) + p;
    };
  }
  return {
    format: s,
    formatPrefix: u
  };
}
var Al, Ce, wa;
ls({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function ls(e) {
  return Al = ns(e), Ce = Al.format, wa = Al.formatPrefix, Al;
}
function va(e) {
  return Math.max(0, -Vt(Math.abs(e)));
}
function rs(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Vt(t) / 3))) * 3 - Vt(Math.abs(e)));
}
function is(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Vt(t) - Vt(e)) + 1;
}
function Kt(e) {
  for (var t = e.length / 6 | 0, n = new Array(t), l = 0; l < t; )
    n[l] = "#" + e.slice(l * 6, ++l * 6);
  return n;
}
const os = Kt("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), as = Kt("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function jr(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Ca(e, t) {
  var n = Object.create(e.prototype);
  for (var l in t)
    n[l] = t[l];
  return n;
}
function Tn() {
}
var Rn = 0.7, Kl = 1 / Rn, Gt = "\\s*([+-]?\\d+)\\s*", qn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Be = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", fs = /^#([0-9a-f]{3,8})$/, ss = new RegExp(`^rgb\\(${Gt},${Gt},${Gt}\\)$`), us = new RegExp(`^rgb\\(${Be},${Be},${Be}\\)$`), cs = new RegExp(`^rgba\\(${Gt},${Gt},${Gt},${qn}\\)$`), ds = new RegExp(`^rgba\\(${Be},${Be},${Be},${qn}\\)$`), gs = new RegExp(`^hsl\\(${qn},${Be},${Be}\\)$`), ms = new RegExp(`^hsla\\(${qn},${Be},${Be},${qn}\\)$`), ri = {
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
jr(Tn, Dn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ii,
  // Deprecated! Use color.formatHex.
  formatHex: ii,
  formatHex8: bs,
  formatHsl: _s,
  formatRgb: oi,
  toString: oi
});
function ii() {
  return this.rgb().formatHex();
}
function bs() {
  return this.rgb().formatHex8();
}
function _s() {
  return Sa(this).formatHsl();
}
function oi() {
  return this.rgb().formatRgb();
}
function Dn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = fs.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ai(t) : n === 3 ? new De(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Tl(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Tl(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ss.exec(e)) ? new De(t[1], t[2], t[3], 1) : (t = us.exec(e)) ? new De(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = cs.exec(e)) ? Tl(t[1], t[2], t[3], t[4]) : (t = ds.exec(e)) ? Tl(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = gs.exec(e)) ? ui(t[1], t[2] / 100, t[3] / 100, 1) : (t = ms.exec(e)) ? ui(t[1], t[2] / 100, t[3] / 100, t[4]) : ri.hasOwnProperty(e) ? ai(ri[e]) : e === "transparent" ? new De(NaN, NaN, NaN, 0) : null;
}
function ai(e) {
  return new De(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Tl(e, t, n, l) {
  return l <= 0 && (e = t = n = NaN), new De(e, t, n, l);
}
function hs(e) {
  return e instanceof Tn || (e = Dn(e)), e ? (e = e.rgb(), new De(e.r, e.g, e.b, e.opacity)) : new De();
}
function Xl(e, t, n, l) {
  return arguments.length === 1 ? hs(e) : new De(e, t, n, l ?? 1);
}
function De(e, t, n, l) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +l;
}
jr(De, Xl, Ca(Tn, {
  brighter(e) {
    return e = e == null ? Kl : Math.pow(Kl, e), new De(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Rn : Math.pow(Rn, e), new De(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new De(ht(this.r), ht(this.g), ht(this.b), Yl(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: fi,
  // Deprecated! Use color.formatHex.
  formatHex: fi,
  formatHex8: ys,
  formatRgb: si,
  toString: si
}));
function fi() {
  return `#${_t(this.r)}${_t(this.g)}${_t(this.b)}`;
}
function ys() {
  return `#${_t(this.r)}${_t(this.g)}${_t(this.b)}${_t((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function si() {
  const e = Yl(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ht(this.r)}, ${ht(this.g)}, ${ht(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Yl(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ht(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function _t(e) {
  return e = ht(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ui(e, t, n, l) {
  return l <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Oe(e, t, n, l);
}
function Sa(e) {
  if (e instanceof Oe)
    return new Oe(e.h, e.s, e.l, e.opacity);
  if (e instanceof Tn || (e = Dn(e)), !e)
    return new Oe();
  if (e instanceof Oe)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, l = e.b / 255, r = Math.min(t, n, l), i = Math.max(t, n, l), o = NaN, a = i - r, f = (i + r) / 2;
  return a ? (t === i ? o = (n - l) / a + (n < l) * 6 : n === i ? o = (l - t) / a + 2 : o = (t - n) / a + 4, a /= f < 0.5 ? i + r : 2 - i - r, o *= 60) : a = f > 0 && f < 1 ? 0 : o, new Oe(o, a, f, e.opacity);
}
function ps(e, t, n, l) {
  return arguments.length === 1 ? Sa(e) : new Oe(e, t, n, l ?? 1);
}
function Oe(e, t, n, l) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +l;
}
jr(Oe, ps, Ca(Tn, {
  brighter(e) {
    return e = e == null ? Kl : Math.pow(Kl, e), new Oe(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Rn : Math.pow(Rn, e), new Oe(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, l = n + (n < 0.5 ? n : 1 - n) * t, r = 2 * n - l;
    return new De(
      Cr(e >= 240 ? e - 240 : e + 120, r, l),
      Cr(e, r, l),
      Cr(e < 120 ? e + 240 : e - 120, r, l),
      this.opacity
    );
  },
  clamp() {
    return new Oe(ci(this.h), Ol(this.s), Ol(this.l), Yl(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Yl(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ci(this.h)}, ${Ol(this.s) * 100}%, ${Ol(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ci(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ol(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Cr(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const xr = (e) => () => e;
function ks(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function ws(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(l) {
    return Math.pow(e + l * t, n);
  };
}
function vs(e) {
  return (e = +e) == 1 ? Na : function(t, n) {
    return n - t ? ws(t, n, e) : xr(isNaN(t) ? n : t);
  };
}
function Na(e, t) {
  var n = t - e;
  return n ? ks(e, n) : xr(isNaN(e) ? t : e);
}
const di = function e(t) {
  var n = vs(t);
  function l(r, i) {
    var o = n((r = Xl(r)).r, (i = Xl(i)).r), a = n(r.g, i.g), f = n(r.b, i.b), s = Na(r.opacity, i.opacity);
    return function(u) {
      return r.r = o(u), r.g = a(u), r.b = f(u), r.opacity = s(u), r + "";
    };
  }
  return l.gamma = e, l;
}(1);
function Cs(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, l = t.slice(), r;
  return function(i) {
    for (r = 0; r < n; ++r)
      l[r] = e[r] * (1 - i) + t[r] * i;
    return l;
  };
}
function Ss(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Ns(e, t) {
  var n = t ? t.length : 0, l = e ? Math.min(n, e.length) : 0, r = new Array(l), i = new Array(n), o;
  for (o = 0; o < l; ++o)
    r[o] = Ir(e[o], t[o]);
  for (; o < n; ++o)
    i[o] = t[o];
  return function(a) {
    for (o = 0; o < l; ++o)
      i[o] = r[o](a);
    return i;
  };
}
function Ms(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(l) {
    return n.setTime(e * (1 - l) + t * l), n;
  };
}
function Ul(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function zs(e, t) {
  var n = {}, l = {}, r;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (r in t)
    r in e ? n[r] = Ir(e[r], t[r]) : l[r] = t[r];
  return function(i) {
    for (r in n)
      l[r] = n[r](i);
    return l;
  };
}
var qr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Sr = new RegExp(qr.source, "g");
function Ls(e) {
  return function() {
    return e;
  };
}
function Rs(e) {
  return function(t) {
    return e(t) + "";
  };
}
function qs(e, t) {
  var n = qr.lastIndex = Sr.lastIndex = 0, l, r, i, o = -1, a = [], f = [];
  for (e = e + "", t = t + ""; (l = qr.exec(e)) && (r = Sr.exec(t)); )
    (i = r.index) > n && (i = t.slice(n, i), a[o] ? a[o] += i : a[++o] = i), (l = l[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, f.push({ i: o, x: Ul(l, r) })), n = Sr.lastIndex;
  return n < t.length && (i = t.slice(n), a[o] ? a[o] += i : a[++o] = i), a.length < 2 ? f[0] ? Rs(f[0].x) : Ls(t) : (t = f.length, function(s) {
    for (var u = 0, c; u < t; ++u)
      a[(c = f[u]).i] = c.x(s);
    return a.join("");
  });
}
function Ir(e, t) {
  var n = typeof t, l;
  return t == null || n === "boolean" ? xr(t) : (n === "number" ? Ul : n === "string" ? (l = Dn(t)) ? (t = l, di) : qs : t instanceof Dn ? di : t instanceof Date ? Ms : Ss(t) ? Cs : Array.isArray(t) ? Ns : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? zs : Ul)(e, t);
}
function Ds(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function tr(e) {
  var t = e.length;
  return function(n) {
    return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
  };
}
const Es = tr(Kt("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
tr(Kt("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
tr(Kt("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
tr(Kt("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function As(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = k("span"), b(t, "class", n = "bar " + /*absolutePosition*/
      (e[0] ? "absolute top-0" : "") + " " + /*hoverable*/
      (e[7] ? "hover:opacity-50" : "") + " svelte-109q9hn"), b(t, "style", l = "width: " + /*widthString*/
      e[9] + "; " + /*colorScale*/
      (e[4] != null ? "background-color: " + /*colorScale*/
      e[4](
        /*fraction*/
        e[1]
      ) + "; " : `background-color: ${/*color*/
      e[5]};`) + " " + /*absolutePosition*/
      (e[0] ? `left: ${/*maxWidth*/
      e[3] * /*leftFraction*/
      e[2]}px;` : "")), se(
        t,
        "animated",
        /*loaded*/
        e[8]
      ), se(
        t,
        "rounded-full",
        /*rounded*/
        e[6]
      );
    },
    m(o, a) {
      L(o, t, a), r || (i = [
        U(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[10]
        ),
        U(
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
      (o[7] ? "hover:opacity-50" : "") + " svelte-109q9hn") && b(t, "class", n), a & /*widthString, colorScale, fraction, color, absolutePosition, maxWidth, leftFraction*/
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
      o[2]}px;` : "")) && b(t, "style", l), a & /*absolutePosition, hoverable, loaded*/
      385 && se(
        t,
        "animated",
        /*loaded*/
        o[8]
      ), a & /*absolutePosition, hoverable, rounded*/
      193 && se(
        t,
        "rounded-full",
        /*rounded*/
        o[6]
      );
    },
    i: Z,
    o: Z,
    d(o) {
      o && M(t), r = !1, we(i);
    }
  };
}
function Ts(e, t, n) {
  let { absolutePosition: l = !1 } = t, { fraction: r = 1 } = t, { leftFraction: i = 0 } = t, { maxWidth: o = null } = t, { colorScale: a = null } = t, { color: f = "lightgray" } = t, { rounded: s = !0 } = t, { hoverable: u = !1 } = t;
  pt(() => {
    setTimeout(() => n(8, c = !0), 100);
  });
  let c = !1, d = "";
  function m(h) {
    Mr.call(this, e, h);
  }
  function g(h) {
    Mr.call(this, e, h);
  }
  return e.$$set = (h) => {
    "absolutePosition" in h && n(0, l = h.absolutePosition), "fraction" in h && n(1, r = h.fraction), "leftFraction" in h && n(2, i = h.leftFraction), "maxWidth" in h && n(3, o = h.maxWidth), "colorScale" in h && n(4, a = h.colorScale), "color" in h && n(5, f = h.color), "rounded" in h && n(6, s = h.rounded), "hoverable" in h && n(7, u = h.hoverable);
  }, e.$$.update = () => {
    e.$$.dirty & /*maxWidth, rounded, fraction*/
    74 && (o != null ? n(9, d = `${s ? (o - 6) * r + 6 : o * r}px`) : n(9, d = s ? `calc((100% - 6px) * ${r} + 6px)` : `${r.toFixed(2)}%`));
  }, [
    l,
    r,
    i,
    o,
    a,
    f,
    s,
    u,
    c,
    d,
    m,
    g
  ];
}
class Fr extends ke {
  constructor(t) {
    super(), pe(this, t, Ts, As, ye, {
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
function Os(e) {
  return e.map(
    ((t) => (n) => t += n)(0)
  );
}
const Ps = (e) => ({
  hoveringIndex: e & /*hoveringIndex*/
  8192
}), gi = (e) => ({ hoveringIndex: (
  /*hoveringIndex*/
  e[13]
) });
function mi(e, t, n) {
  const l = e.slice();
  return l[25] = t[n], l[27] = n, l;
}
function bi(e) {
  let t, n;
  return {
    c() {
      t = k("div"), n = I(
        /*title*/
        e[11]
      ), b(t, "class", "font-bold text-xs truncate text-right"), le(t, "width", "96px");
    },
    m(l, r) {
      L(l, t, r), _(t, n);
    },
    p(l, r) {
      r & /*title*/
      2048 && ae(
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
function _i(e) {
  let t, n;
  return t = new Fr({
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
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
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
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function Qs(e) {
  let t, n;
  return t = new Fr({
    props: {
      absolutePosition: !0,
      fraction: (
        /*scale*/
        (e[1] || wi)(
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
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*scale, value*/
      6 && (i.fraction = /*scale*/
      (l[1] || wi)(
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
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function js(e) {
  let t, n, l = (
    /*values*/
    e[3]
  ), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = hi(mi(e, l, o));
  const i = (o) => R(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      t = _e();
    },
    m(o, a) {
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(o, a);
      L(o, t, a), n = !0;
    },
    p(o, a) {
      if (a & /*scale, offsets, values, colors, hoverable, hoveringIndex*/
      25674) {
        l = /*values*/
        o[3];
        let f;
        for (f = 0; f < l.length; f += 1) {
          const s = mi(o, l, f);
          r[f] ? (r[f].p(s, a), w(r[f], 1)) : (r[f] = hi(s), r[f].c(), w(r[f], 1), r[f].m(t.parentNode, t));
        }
        for (ie(), f = l.length; f < r.length; f += 1)
          i(f);
        oe();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < l.length; a += 1)
          w(r[a]);
        n = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1)
        R(r[a]);
      n = !1;
    },
    d(o) {
      Ee(r, o), o && M(t);
    }
  };
}
function hi(e) {
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
  return t = new Fr({
    props: {
      absolutePosition: !0,
      leftFraction: (
        /*i*/
        e[27] > 0 ? (
          /*scale*/
          (e[1] || pi)(
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
        (e[1] || ki)(
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
      W(t.$$.fragment);
    },
    m(r, i) {
      B(t, r, i), n = !0;
    },
    p(r, i) {
      e = r;
      const o = {};
      i & /*scale, offsets*/
      16386 && (o.leftFraction = /*i*/
      e[27] > 0 ? (
        /*scale*/
        (e[1] || pi)(
          /*offsets*/
          e[14][
            /*i*/
            e[27] - 1
          ]
        )
      ) : 0), i & /*scale, values*/
      10 && (o.fraction = /*scale*/
      (e[1] || ki)(
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
      n || (w(t.$$.fragment, r), n = !0);
    },
    o(r) {
      R(t.$$.fragment, r), n = !1;
    },
    d(r) {
      G(t, r);
    }
  };
}
function yi(e) {
  let t, n, l, r;
  const i = [Is, xs], o = [];
  function a(f, s) {
    return (
      /*$$slots*/
      f[15].caption ? 1 : 0
    );
  }
  return n = a(e), l = o[n] = i[n](e), {
    c() {
      t = k("div"), l.c(), b(t, "class", "text-xs text-gray-800 dark:text-gray-200");
    },
    m(f, s) {
      L(f, t, s), o[n].m(t, null), r = !0;
    },
    p(f, s) {
      let u = n;
      n = a(f), n === u ? o[n].p(f, s) : (ie(), R(o[u], 1, 1, () => {
        o[u] = null;
      }), oe(), l = o[n], l ? l.p(f, s) : (l = o[n] = i[n](f), l.c()), w(l, 1), l.m(t, null));
    },
    i(f) {
      r || (w(l), r = !0);
    },
    o(f) {
      R(l), r = !1;
    },
    d(f) {
      f && M(t), o[n].d();
    }
  };
}
function xs(e) {
  let t;
  const n = (
    /*#slots*/
    e[17].caption
  ), l = Pe(
    n,
    e,
    /*$$scope*/
    e[16],
    gi
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
        t ? Qe(
          n,
          /*$$scope*/
          r[16],
          i,
          Ps
        ) : xe(
          /*$$scope*/
          r[16]
        ),
        gi
      );
    },
    i(r) {
      t || (w(l, r), t = !0);
    },
    o(r) {
      R(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function Is(e) {
  let t = Ce(".3")(
    /*value*/
    e[2]
  ) + "", n;
  return {
    c() {
      n = I(t);
    },
    m(l, r) {
      L(l, n, r);
    },
    p(l, r) {
      r & /*value*/
      4 && t !== (t = Ce(".3")(
        /*value*/
        l[2]
      ) + "") && ae(n, t);
    },
    i: Z,
    o: Z,
    d(l) {
      l && M(n);
    }
  };
}
function Fs(e) {
  let t, n, l, r, i, o, a, f, s = !!/*title*/
  e[11] && bi(e), u = (
    /*showFullBar*/
    e[4] && _i(e)
  );
  const c = [js, Qs], d = [];
  function m(h, p) {
    return (
      /*values*/
      h[3] != null ? 0 : 1
    );
  }
  i = m(e), o = d[i] = c[i](e);
  let g = (
    /*showTooltip*/
    e[5] && yi(e)
  );
  return {
    c() {
      t = k("div"), s && s.c(), n = P(), l = k("div"), u && u.c(), r = P(), o.c(), a = P(), g && g.c(), b(l, "class", "parent-bar relative rounded-full overflow-hidden"), le(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), le(l, "height", "6px"), se(l, "mb-1", !/*horizontalLayout*/
      e[12]), b(t, "class", "items-center gap-1"), se(
        t,
        "flex",
        /*horizontalLayout*/
        e[12]
      );
    },
    m(h, p) {
      L(h, t, p), s && s.m(t, null), _(t, n), _(t, l), u && u.m(l, null), _(l, r), d[i].m(l, null), _(t, a), g && g.m(t, null), f = !0;
    },
    p(h, [p]) {
      /*title*/
      h[11] ? s ? s.p(h, p) : (s = bi(h), s.c(), s.m(t, n)) : s && (s.d(1), s = null), /*showFullBar*/
      h[4] ? u ? (u.p(h, p), p & /*showFullBar*/
      16 && w(u, 1)) : (u = _i(h), u.c(), w(u, 1), u.m(l, r)) : u && (ie(), R(u, 1, 1, () => {
        u = null;
      }), oe());
      let S = i;
      i = m(h), i === S ? d[i].p(h, p) : (ie(), R(d[S], 1, 1, () => {
        d[S] = null;
      }), oe(), o = d[i], o ? o.p(h, p) : (o = d[i] = c[i](h), o.c()), w(o, 1), o.m(l, null)), (!f || p & /*width*/
      1) && le(
        l,
        "width",
        /*width*/
        h[0] == null ? "100%" : `${/*width*/
        h[0]}px`
      ), (!f || p & /*horizontalLayout*/
      4096) && se(l, "mb-1", !/*horizontalLayout*/
      h[12]), /*showTooltip*/
      h[5] ? g ? (g.p(h, p), p & /*showTooltip*/
      32 && w(g, 1)) : (g = yi(h), g.c(), w(g, 1), g.m(t, null)) : g && (ie(), R(g, 1, 1, () => {
        g = null;
      }), oe()), (!f || p & /*horizontalLayout*/
      4096) && se(
        t,
        "flex",
        /*horizontalLayout*/
        h[12]
      );
    },
    i(h) {
      f || (w(u), w(o), w(g), f = !0);
    },
    o(h) {
      R(u), R(o), R(g), f = !1;
    },
    d(h) {
      h && M(t), s && s.d(), u && u.d(), d[i].d(), g && g.d();
    }
  };
}
const pi = (e) => e, ki = (e) => e, wi = (e) => e;
function Hs(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = Tr(l);
  let { width: o = 100 } = t, { scale: a = null } = t, { value: f = 0 } = t, { values: s = null } = t, { showFullBar: u = !1 } = t, { showTooltip: c = !0 } = t, { colors: d = os } = t, { colorScale: m = Es } = t, { color: g = null } = t, { fullBarColor: h = "#e5e7eb" } = t, { hoverable: p = !1 } = t, { title: S = null } = t, { horizontalLayout: y = !1 } = t, v = null, N = [];
  const q = (T) => n(13, v = -1), D = (T) => n(13, v = null), x = (T, ee) => n(13, v = T), V = (T) => n(13, v = null), A = () => g, O = (T) => n(13, v = 0), C = (T) => n(13, v = null);
  return e.$$set = (T) => {
    "width" in T && n(0, o = T.width), "scale" in T && n(1, a = T.scale), "value" in T && n(2, f = T.value), "values" in T && n(3, s = T.values), "showFullBar" in T && n(4, u = T.showFullBar), "showTooltip" in T && n(5, c = T.showTooltip), "colors" in T && n(6, d = T.colors), "colorScale" in T && n(7, m = T.colorScale), "color" in T && n(8, g = T.color), "fullBarColor" in T && n(9, h = T.fullBarColor), "hoverable" in T && n(10, p = T.hoverable), "title" in T && n(11, S = T.title), "horizontalLayout" in T && n(12, y = T.horizontalLayout), "$$scope" in T && n(16, r = T.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*values*/
    8 && (s != null ? n(14, N = Os(s)) : n(14, N = []));
  }, [
    o,
    a,
    f,
    s,
    u,
    c,
    d,
    m,
    g,
    h,
    p,
    S,
    y,
    v,
    N,
    i,
    r,
    l,
    q,
    D,
    x,
    V,
    A,
    O,
    C
  ];
}
class Hr extends ke {
  constructor(t) {
    super(), pe(this, t, Hs, Fs, ye, {
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
const Bs = (e) => ({ hovering: e & /*hovering*/
1 }), vi = (e) => ({ hovering: (
  /*hovering*/
  e[0]
) });
function Gs(e) {
  let t, n, l, r;
  const i = (
    /*#slots*/
    e[4].default
  ), o = Pe(
    i,
    e,
    /*$$scope*/
    e[3],
    vi
  );
  return {
    c() {
      t = k("div"), o && o.c(), b(
        t,
        "class",
        /*clazz*/
        e[1]
      ), b(
        t,
        "style",
        /*style*/
        e[2]
      );
    },
    m(a, f) {
      L(a, t, f), o && o.m(t, null), n = !0, l || (r = [
        U(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[6]
        ),
        U(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[7]
        ),
        U(
          t,
          "click",
          /*click_handler*/
          e[5]
        )
      ], l = !0);
    },
    p(a, [f]) {
      o && o.p && (!n || f & /*$$scope, hovering*/
      9) && je(
        o,
        i,
        a,
        /*$$scope*/
        a[3],
        n ? Qe(
          i,
          /*$$scope*/
          a[3],
          f,
          Bs
        ) : xe(
          /*$$scope*/
          a[3]
        ),
        vi
      ), (!n || f & /*clazz*/
      2) && b(
        t,
        "class",
        /*clazz*/
        a[1]
      ), (!n || f & /*style*/
      4) && b(
        t,
        "style",
        /*style*/
        a[2]
      );
    },
    i(a) {
      n || (w(o, a), n = !0);
    },
    o(a) {
      R(o, a), n = !1;
    },
    d(a) {
      a && M(t), o && o.d(a), l = !1, we(r);
    }
  };
}
function Vs(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t, { hovering: i = !1 } = t, { class: o = "" } = t, { style: a = "" } = t;
  function f(c) {
    Mr.call(this, e, c);
  }
  const s = () => n(0, i = !0), u = () => n(0, i = !1);
  return e.$$set = (c) => {
    "hovering" in c && n(0, i = c.hovering), "class" in c && n(1, o = c.class), "style" in c && n(2, a = c.style), "$$scope" in c && n(3, r = c.$$scope);
  }, [
    i,
    o,
    a,
    r,
    l,
    f,
    s,
    u
  ];
}
class nr extends ke {
  constructor(t) {
    super(), pe(this, t, Vs, Gs, ye, { hovering: 0, class: 1, style: 2 });
  }
}
function Ci(e, t, n) {
  const l = e.slice();
  return l[37] = t[n], l[39] = n, l;
}
function Si(e, t, n) {
  const l = e.slice();
  return l[41] = t[n], l;
}
function Ni(e) {
  let t, n = (
    /*scope*/
    e[41] + ""
  ), l, r;
  return {
    c() {
      t = k("option"), l = I(n), t.__value = r = /*scope*/
      e[41], t.value = t.__value;
    },
    m(i, o) {
      L(i, t, o), _(t, l);
    },
    p(i, o) {
      o[0] & /*scopes*/
      4 && n !== (n = /*scope*/
      i[41] + "") && ae(l, n), o[0] & /*scopes*/
      4 && r !== (r = /*scope*/
      i[41]) && (t.__value = r, t.value = t.__value);
    },
    d(i) {
      i && M(t);
    }
  };
}
function Ws(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, g, h, p, S, y, v, N, q, D, x, V, A, O, C, T, ee;
  function X(te, be) {
    if (
      /*hasError*/
      te[19]
    )
      return Us;
    if (
      /*hasConceptIds*/
      te[20]
    )
      return Ys;
  }
  let Q = X(e), H = Q && Q(e), ne = (
    /*totalCount*/
    e[21] > 0 && Mi(e)
  );
  const ue = [Zs, Js], re = [];
  function E(te, be) {
    return (
      /*paginatedConcepts*/
      te[18].length > 0 ? 0 : 1
    );
  }
  h = E(e), p = re[h] = ue[h](e), N = new me({
    props: { icon: yt, class: "inline mr-2" }
  });
  let Y = (
    /*selectedConceptIDs*/
    e[12].size > 0 && Di(e)
  );
  function K(te, be) {
    return (
      /*queryByName*/
      te[1] ? tu : eu
    );
  }
  let ce = K(e), F = ce(e), fe = (
    /*sortedConcepts*/
    e[15].length > Ke && Ei(e)
  );
  return {
    c() {
      H && H.c(), t = P(), n = k("div"), l = k("div"), r = k("div"), i = k("input"), o = P(), a = k("div"), a.textContent = "Data Element", f = P(), s = k("div"), s.textContent = "Type", u = P(), c = k("div"), d = I(`Count
            `), ne && ne.c(), m = P(), g = k("div"), p.c(), S = P(), y = k("div"), v = k("button"), W(N.$$.fragment), q = I(`
          Query `), Y && Y.c(), x = P(), V = k("button"), F.c(), O = P(), fe && fe.c(), b(i, "type", "checkbox"), b(i, "class", "form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"), i.checked = /*allFilteredSelected*/
      e[13], i.indeterminate = /*someFilteredSelected*/
      e[17], b(i, "aria-label", "Select all concepts"), b(r, "class", "flex items-center justify-center"), b(a, "class", "font-semibold text-gray-900 dark:text-gray-100"), b(s, "class", "font-semibold text-gray-900 dark:text-gray-100"), b(c, "class", "font-semibold text-gray-900 dark:text-gray-100"), b(l, "class", "grid gap-4 px-4 py-4 items-center"), le(l, "grid-template-columns", "2rem 2fr 1fr 2fr"), b(n, "class", "bg-gray-50 dark:bg-gray-800 rounded-t-lg border border-gray-200 dark:border-gray-700"), b(g, "class", "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-b-lg overflow-y-auto custom-scrollbar min-h-0 flex-auto svelte-1xw87wt"), b(v, "class", "px-3 py-1.5 font-semibold rounded transition-colors duration-200 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-200/50 disabled:dark:bg-gray-700/50 text-white disabled:text-gray-500/50 whitespace-nowrap"), v.disabled = D = /*selectedConceptIDs*/
      e[12].size == 0, V.disabled = A = /*selectedConceptIDs*/
      e[12].size == 0, b(V, "class", "px-3 py-1.5 font-semibold rounded transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white whitespace-nowrap"), b(V, "title", "Change whether to add to query by concept name or ID"), b(y, "class", "py-2 flex items-center gap-2");
    },
    m(te, be) {
      H && H.m(te, be), L(te, t, be), L(te, n, be), _(n, l), _(l, r), _(r, i), _(l, o), _(l, a), _(l, f), _(l, s), _(l, u), _(l, c), _(c, d), ne && ne.m(c, null), L(te, m, be), L(te, g, be), re[h].m(g, null), L(te, S, be), L(te, y, be), _(y, v), B(N, v, null), _(v, q), Y && Y.m(v, null), _(y, x), _(y, V), F.m(V, null), _(y, O), fe && fe.m(y, null), C = !0, T || (ee = [
        U(
          i,
          "change",
          /*toggleSelectAllFiltered*/
          e[25]
        ),
        U(
          v,
          "click",
          /*click_handler_3*/
          e[35]
        ),
        U(
          V,
          "click",
          /*click_handler_4*/
          e[36]
        )
      ], T = !0);
    },
    p(te, be) {
      Q === (Q = X(te)) && H ? H.p(te, be) : (H && H.d(1), H = Q && Q(te), H && (H.c(), H.m(t.parentNode, t))), (!C || be[0] & /*allFilteredSelected*/
      8192) && (i.checked = /*allFilteredSelected*/
      te[13]), (!C || be[0] & /*someFilteredSelected*/
      131072) && (i.indeterminate = /*someFilteredSelected*/
      te[17]), /*totalCount*/
      te[21] > 0 ? ne ? ne.p(te, be) : (ne = Mi(te), ne.c(), ne.m(c, null)) : ne && (ne.d(1), ne = null);
      let $ = h;
      h = E(te), h === $ ? re[h].p(te, be) : (ie(), R(re[$], 1, 1, () => {
        re[$] = null;
      }), oe(), p = re[h], p ? p.p(te, be) : (p = re[h] = ue[h](te), p.c()), w(p, 1), p.m(g, null)), /*selectedConceptIDs*/
      te[12].size > 0 ? Y ? Y.p(te, be) : (Y = Di(te), Y.c(), Y.m(v, null)) : Y && (Y.d(1), Y = null), (!C || be[0] & /*selectedConceptIDs*/
      4096 && D !== (D = /*selectedConceptIDs*/
      te[12].size == 0)) && (v.disabled = D), ce !== (ce = K(te)) && (F.d(1), F = ce(te), F && (F.c(), F.m(V, null))), (!C || be[0] & /*selectedConceptIDs*/
      4096 && A !== (A = /*selectedConceptIDs*/
      te[12].size == 0)) && (V.disabled = A), /*sortedConcepts*/
      te[15].length > Ke ? fe ? (fe.p(te, be), be[0] & /*sortedConcepts*/
      32768 && w(fe, 1)) : (fe = Ei(te), fe.c(), w(fe, 1), fe.m(y, null)) : fe && (ie(), R(fe, 1, 1, () => {
        fe = null;
      }), oe());
    },
    i(te) {
      C || (w(p), w(N.$$.fragment, te), w(fe), C = !0);
    },
    o(te) {
      R(p), R(N.$$.fragment, te), R(fe), C = !1;
    },
    d(te) {
      H && H.d(te), te && M(t), te && M(n), ne && ne.d(), te && M(m), te && M(g), re[h].d(), te && M(S), te && M(y), G(N), Y && Y.d(), F.d(), fe && fe.d(), T = !1, we(ee);
    }
  };
}
function Ks(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m;
  return a = new me({
    props: { icon: Sf, class: "inline mr-2" }
  }), {
    c() {
      t = k("div"), n = k("div"), n.textContent = "Data elements not retrieved yet", l = P(), r = k("p"), r.textContent = "Click below to retrieve available data elements in this scope.", i = P(), o = k("button"), W(a.$$.fragment), f = I(`
          Load Data Elements for `), s = k("span"), u = I(
        /*scopeName*/
        e[0]
      ), b(n, "class", "w-3/4 text-gray-700 dark:text-gray-200 text-lg font-semibold"), b(r, "class", "text-gray-600 dark:text-gray-400 w-1/3"), b(s, "class", "font-mono"), b(o, "class", "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md"), o.disabled = /*isLoading*/
      e[4], b(t, "class", "flex flex-col w-full h-full items-center justify-center text-center gap-4");
    },
    m(g, h) {
      L(g, t, h), _(t, n), _(t, l), _(t, r), _(t, i), _(t, o), B(a, o, null), _(o, f), _(o, s), _(s, u), c = !0, d || (m = U(o, "click", function() {
        Je(
          /*onAnalyze*/
          e[6]
        ) && e[6].apply(this, arguments);
      }), d = !0);
    },
    p(g, h) {
      e = g, (!c || h[0] & /*scopeName*/
      1) && ae(
        u,
        /*scopeName*/
        e[0]
      ), (!c || h[0] & /*isLoading*/
      16) && (o.disabled = /*isLoading*/
      e[4]);
    },
    i(g) {
      c || (w(a.$$.fragment, g), c = !0);
    },
    o(g) {
      R(a.$$.fragment, g), c = !1;
    },
    d(g) {
      g && M(t), G(a), d = !1, m();
    }
  };
}
function Xs(e) {
  let t, n, l, r = (
    /*loadingMessage*/
    e[5] && Ai(e)
  );
  return {
    c() {
      t = k("div"), n = k("div"), n.innerHTML = `<div class="relative"><div class="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-spin"></div> 
            
            <div class="absolute top-2 left-2 w-12 h-12 border-4 border-blue-600 dark:border-blue-400 rounded-full animate-spin" style="animation-direction: reverse; animation-duration: 1.5s;"></div> 
            
            <div class="absolute top-6 left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div></div>`, l = P(), r && r.c(), b(n, "class", "flex justify-center mb-8"), b(t, "class", "text-center py-16");
    },
    m(i, o) {
      L(i, t, o), _(t, n), _(t, l), r && r.m(t, null);
    },
    p(i, o) {
      /*loadingMessage*/
      i[5] ? r ? r.p(i, o) : (r = Ai(i), r.c(), r.m(t, null)) : r && (r.d(1), r = null);
    },
    i: Z,
    o: Z,
    d(i) {
      i && M(t), r && r.d();
    }
  };
}
function Ys(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m;
  return {
    c() {
      t = k("div"), n = k("div"), l = k("div"), l.innerHTML = '<span class="text-yellow-600 dark:text-yellow-400">⚠️</span>', r = P(), i = k("div"), o = k("h3"), o.textContent = "Concept Names Not Found", a = P(), f = k("div"), s = k("p"), s.textContent = `Some concepts are showing as IDs instead of human-readable
                  names. This might be due to vocabulary lookup issues.`, u = P(), c = k("button"), c.textContent = "🔄 Refresh Analysis", b(l, "class", "flex-shrink-0"), b(o, "class", "text-sm font-medium text-yellow-800 dark:text-yellow-200"), b(c, "class", "mt-2 bg-yellow-600 hover:bg-yellow-700 text-white text-xs px-3 py-1 rounded transition-colors duration-200"), b(f, "class", "mt-2 text-sm text-yellow-700 dark:text-yellow-300"), b(i, "class", "ml-3"), b(n, "class", "flex items-start"), b(t, "class", "bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4");
    },
    m(g, h) {
      L(g, t, h), _(t, n), _(n, l), _(n, r), _(n, i), _(i, o), _(i, a), _(i, f), _(f, s), _(f, u), _(f, c), d || (m = U(
        c,
        "click",
        /*click_handler_1*/
        e[32]
      ), d = !0);
    },
    p: Z,
    d(g) {
      g && M(t), d = !1, m();
    }
  };
}
function Us(e) {
  let t, n, l, r, i, o, a, f, s, u = (
    /*scopeConcepts*/
    e[8].error + ""
  ), c, d, m, g, h;
  return {
    c() {
      t = k("div"), n = k("div"), l = k("div"), l.innerHTML = '<span class="text-red-600 dark:text-red-400">❌</span>', r = P(), i = k("div"), o = k("h3"), o.textContent = "Analysis Failed", a = P(), f = k("div"), s = k("p"), c = I(u), d = P(), m = k("button"), m.textContent = "🔄 Retry Analysis", b(l, "class", "flex-shrink-0"), b(o, "class", "text-sm font-medium text-red-800 dark:text-red-200"), b(m, "class", "mt-2 bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded transition-colors duration-200"), b(f, "class", "mt-2 text-sm text-red-700 dark:text-red-300"), b(i, "class", "ml-3"), b(n, "class", "flex items-start"), b(t, "class", "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4");
    },
    m(p, S) {
      L(p, t, S), _(t, n), _(n, l), _(n, r), _(n, i), _(i, o), _(i, a), _(i, f), _(f, s), _(s, c), _(f, d), _(f, m), g || (h = U(
        m,
        "click",
        /*click_handler*/
        e[31]
      ), g = !0);
    },
    p(p, S) {
      S[0] & /*scopeConcepts*/
      256 && u !== (u = /*scopeConcepts*/
      p[8].error + "") && ae(c, u);
    },
    d(p) {
      p && M(t), g = !1, h();
    }
  };
}
function Mi(e) {
  let t, n, l = (
    /*totalCount*/
    e[21].toLocaleString() + ""
  ), r, i;
  return {
    c() {
      t = k("span"), n = I("(Total: "), r = I(l), i = I(")"), b(t, "class", "text-sm font-normal text-gray-600 dark:text-gray-400");
    },
    m(o, a) {
      L(o, t, a), _(t, n), _(t, r), _(t, i);
    },
    p(o, a) {
      a[0] & /*totalCount*/
      2097152 && l !== (l = /*totalCount*/
      o[21].toLocaleString() + "") && ae(r, l);
    },
    d(o) {
      o && M(t);
    }
  };
}
function Js(e) {
  let t;
  return {
    c() {
      t = k("div"), t.textContent = "No concepts found for this scope.", b(t, "class", "px-6 py-8 text-center text-gray-500 dark:text-gray-400");
    },
    m(n, l) {
      L(n, t, l);
    },
    p: Z,
    i: Z,
    o: Z,
    d(n) {
      n && M(t);
    }
  };
}
function Zs(e) {
  let t, n, l = (
    /*paginatedConcepts*/
    e[18]
  ), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = qi(Ci(e, l, o));
  const i = (o) => R(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      t = _e();
    },
    m(o, a) {
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(o, a);
      L(o, t, a), n = !0;
    },
    p(o, a) {
      if (a[0] & /*queryByName, onInsert, scopeName, paginatedConcepts, totalCount, $theme, selectedConceptIDs, toggleSelectConcept*/
      73666691 | a[1] & /*hovering*/
      512) {
        l = /*paginatedConcepts*/
        o[18];
        let f;
        for (f = 0; f < l.length; f += 1) {
          const s = Ci(o, l, f);
          r[f] ? (r[f].p(s, a), w(r[f], 1)) : (r[f] = qi(s), r[f].c(), w(r[f], 1), r[f].m(t.parentNode, t));
        }
        for (ie(), f = l.length; f < r.length; f += 1)
          i(f);
        oe();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < l.length; a += 1)
          w(r[a]);
        n = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1)
        R(r[a]);
      n = !1;
    },
    d(o) {
      Ee(r, o), o && M(t);
    }
  };
}
function zi(e) {
  let t, n = (
    /*concept*/
    e[37].id + ""
  ), l;
  return {
    c() {
      t = k("div"), l = I(n), b(t, "class", "text-xs font-mono text-gray-500 dark:text-gray-400 truncate");
    },
    m(r, i) {
      L(r, t, i), _(t, l);
    },
    p(r, i) {
      i[0] & /*paginatedConcepts*/
      262144 && n !== (n = /*concept*/
      r[37].id + "") && ae(l, n);
    },
    d(r) {
      r && M(t);
    }
  };
}
function Li(e) {
  let t, n;
  return t = new Hr({
    props: {
      width: null,
      value: (
        /*concept*/
        e[37].count / /*totalCount*/
        e[21]
      ),
      showTooltip: !1,
      showFullBar: !0,
      color: "#3b82f6",
      fullBarColor: (
        /*$theme*/
        e[22] == "dark" ? "#374151" : "#e5e7eb"
      ),
      horizontalLayout: !0
    }
  }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r[0] & /*paginatedConcepts, totalCount*/
      2359296 && (i.value = /*concept*/
      l[37].count / /*totalCount*/
      l[21]), r[0] & /*$theme*/
      4194304 && (i.fullBarColor = /*$theme*/
      l[22] == "dark" ? "#374151" : "#e5e7eb"), t.$set(i);
    },
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function Ri(e) {
  let t, n, l, r, i;
  n = new me({ props: { icon: yt, class: "inline" } });
  function o() {
    return (
      /*click_handler_2*/
      e[34](
        /*concept*/
        e[37]
      )
    );
  }
  return {
    c() {
      t = k("button"), W(n.$$.fragment), b(t, "class", "px-2 py-1.5 text-sm text-center font-semibold rounded transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white whitespace-nowrap"), b(t, "title", "Add this concept to your query");
    },
    m(a, f) {
      L(a, t, f), B(n, t, null), l = !0, r || (i = U(t, "click", o), r = !0);
    },
    p(a, f) {
      e = a;
    },
    i(a) {
      l || (w(n.$$.fragment, a), l = !0);
    },
    o(a) {
      R(n.$$.fragment, a), l = !1;
    },
    d(a) {
      a && M(t), G(n), r = !1, i();
    }
  };
}
function $s(e) {
  let t, n, l, r, i, o, a = (
    /*concept*/
    e[37].name + ""
  ), f, s, u, c, d, m, g = (
    /*concept*/
    e[37].type + ""
  ), h, p, S, y, v, N, q, D = (
    /*concept*/
    e[37].count.toLocaleString() + ""
  ), x, V, A, O = (
    /*totalCount*/
    e[21].toLocaleString() + ""
  ), C, T, ee, X, Q, H;
  function ne() {
    return (
      /*change_handler_1*/
      e[33](
        /*concept*/
        e[37]
      )
    );
  }
  let ue = (
    /*concept*/
    e[37].id != /*concept*/
    e[37].name && zi(e)
  ), re = (
    /*totalCount*/
    e[21] > 0 && Li(e)
  ), E = (
    /*hovering*/
    e[40] && Ri(e)
  );
  return {
    c() {
      t = k("div"), n = k("input"), r = P(), i = k("div"), o = k("div"), f = I(a), u = P(), ue && ue.c(), c = P(), d = k("div"), m = k("span"), h = I(g), S = P(), y = k("div"), v = k("div"), re && re.c(), N = P(), q = k("div"), x = I(D), V = k("span"), A = I(" / "), C = I(O), T = P(), E && E.c(), ee = P(), b(n, "type", "checkbox"), b(n, "class", "form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"), n.checked = l = /*selectedConceptIDs*/
      e[12].has(
        /*concept*/
        e[37].id
      ), b(n, "aria-label", "Select concept"), b(t, "class", "flex items-center justify-center"), b(o, "class", "text-gray-900 dark:text-gray-100 font-medium truncate"), b(o, "title", s = /*concept*/
      e[37].name), b(i, "class", "space-y-1 truncate"), b(m, "class", p = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " + /*concept*/
      (e[37].type === "event" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : (
        /*concept*/
        e[37].type === "interval" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
      ))), b(d, "class", "text-gray-600 dark:text-gray-400"), b(V, "class", "opacity-80"), b(q, "class", "text-gray-600 dark:text-gray-200 font-mono text-sm truncate"), b(v, "class", "space-y-2 shrink"), b(y, "class", "flex gap-2 items-center justify-between min-w-0");
    },
    m(Y, K) {
      L(Y, t, K), _(t, n), L(Y, r, K), L(Y, i, K), _(i, o), _(o, f), _(i, u), ue && ue.m(i, null), L(Y, c, K), L(Y, d, K), _(d, m), _(m, h), L(Y, S, K), L(Y, y, K), _(y, v), re && re.m(v, null), _(v, N), _(v, q), _(q, x), _(q, V), _(V, A), _(V, C), _(y, T), E && E.m(y, null), L(Y, ee, K), X = !0, Q || (H = U(n, "change", ne), Q = !0);
    },
    p(Y, K) {
      e = Y, (!X || K[0] & /*selectedConceptIDs, paginatedConcepts*/
      266240 && l !== (l = /*selectedConceptIDs*/
      e[12].has(
        /*concept*/
        e[37].id
      ))) && (n.checked = l), (!X || K[0] & /*paginatedConcepts*/
      262144) && a !== (a = /*concept*/
      e[37].name + "") && ae(f, a), (!X || K[0] & /*paginatedConcepts*/
      262144 && s !== (s = /*concept*/
      e[37].name)) && b(o, "title", s), /*concept*/
      e[37].id != /*concept*/
      e[37].name ? ue ? ue.p(e, K) : (ue = zi(e), ue.c(), ue.m(i, null)) : ue && (ue.d(1), ue = null), (!X || K[0] & /*paginatedConcepts*/
      262144) && g !== (g = /*concept*/
      e[37].type + "") && ae(h, g), (!X || K[0] & /*paginatedConcepts*/
      262144 && p !== (p = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " + /*concept*/
      (e[37].type === "event" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : (
        /*concept*/
        e[37].type === "interval" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
      )))) && b(m, "class", p), /*totalCount*/
      e[21] > 0 ? re ? (re.p(e, K), K[0] & /*totalCount*/
      2097152 && w(re, 1)) : (re = Li(e), re.c(), w(re, 1), re.m(v, N)) : re && (ie(), R(re, 1, 1, () => {
        re = null;
      }), oe()), (!X || K[0] & /*paginatedConcepts*/
      262144) && D !== (D = /*concept*/
      e[37].count.toLocaleString() + "") && ae(x, D), (!X || K[0] & /*totalCount*/
      2097152) && O !== (O = /*totalCount*/
      e[21].toLocaleString() + "") && ae(C, O), /*hovering*/
      e[40] ? E ? (E.p(e, K), K[1] & /*hovering*/
      512 && w(E, 1)) : (E = Ri(e), E.c(), w(E, 1), E.m(y, null)) : E && (ie(), R(E, 1, 1, () => {
        E = null;
      }), oe());
    },
    i(Y) {
      X || (w(re), w(E), X = !0);
    },
    o(Y) {
      R(re), R(E), X = !1;
    },
    d(Y) {
      Y && M(t), Y && M(r), Y && M(i), ue && ue.d(), Y && M(c), Y && M(d), Y && M(S), Y && M(y), re && re.d(), E && E.d(), Y && M(ee), Q = !1, H();
    }
  };
}
function qi(e) {
  let t, n;
  return t = new nr({
    props: {
      class: "grid gap-4 px-4 py-4 border-b border-gray-100 dark:border-gray-800 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 items-center",
      style: "grid-template-columns: 2rem 2fr 1fr minmax(0, 2fr);",
      $$slots: {
        default: [
          $s,
          ({ hovering: l }) => ({ 40: l }),
          ({ hovering: l }) => [0, l ? 512 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r[0] & /*queryByName, onInsert, scopeName, paginatedConcepts, totalCount, $theme, selectedConceptIDs*/
      6557827 | r[1] & /*$$scope, hovering*/
      8704 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function Di(e) {
  let t = (
    /*selectedConceptIDs*/
    e[12].size + ""
  ), n, l, r = (
    /*selectedConceptIDs*/
    e[12].size != 1 ? "s" : ""
  ), i;
  return {
    c() {
      n = I(t), l = I(" Concept"), i = I(r);
    },
    m(o, a) {
      L(o, n, a), L(o, l, a), L(o, i, a);
    },
    p(o, a) {
      a[0] & /*selectedConceptIDs*/
      4096 && t !== (t = /*selectedConceptIDs*/
      o[12].size + "") && ae(n, t), a[0] & /*selectedConceptIDs*/
      4096 && r !== (r = /*selectedConceptIDs*/
      o[12].size != 1 ? "s" : "") && ae(i, r);
    },
    d(o) {
      o && M(n), o && M(l), o && M(i);
    }
  };
}
function eu(e) {
  let t;
  return {
    c() {
      t = I("By ID");
    },
    m(n, l) {
      L(n, t, l);
    },
    d(n) {
      n && M(t);
    }
  };
}
function tu(e) {
  let t;
  return {
    c() {
      t = I("By Name");
    },
    m(n, l) {
      L(n, t, l);
    },
    d(n) {
      n && M(t);
    }
  };
}
function Ei(e) {
  let t, n, l, r, i, o, a, f, s, u = (
    /*currentPage*/
    (e[11] - 1) * Ke + 1 + ""
  ), c, d, m = Math.min(
    /*currentPage*/
    e[11] * Ke,
    /*concepts*/
    e[9].length
  ) + "", g, h, p = (
    /*concepts*/
    e[9].length + ""
  ), S, y, v, N, q, D, x, V;
  return i = new me({ props: { icon: zf } }), N = new me({ props: { icon: Ze } }), {
    c() {
      t = k("div"), n = P(), l = k("div"), r = k("button"), W(i.$$.fragment), a = P(), f = k("span"), s = I("Concepts "), c = I(u), d = I(" - "), g = I(m), h = I(" of "), S = I(p), y = P(), v = k("button"), W(N.$$.fragment), b(t, "class", "flex-auto"), b(r, "class", "p-2 hover:opacity-50 disabled:opacity-30 disabled:cursor-not-allowed"), r.disabled = o = /*currentPage*/
      e[11] === 1, b(r, "aria-label", "Previous Page"), b(f, "class", "text-sm"), b(v, "class", "p-2 hover:opacity-50 disabled:opacity-30 disabled:cursor-not-allowed"), v.disabled = q = /*currentPage*/
      e[11] === /*totalPages*/
      e[14], b(v, "aria-label", "Next Page"), b(l, "class", "shrink-0 flex justify-end items-center text-gray-700 dark:text-gray-200");
    },
    m(A, O) {
      L(A, t, O), L(A, n, O), L(A, l, O), _(l, r), B(i, r, null), _(l, a), _(l, f), _(f, s), _(f, c), _(f, d), _(f, g), _(f, h), _(f, S), _(l, y), _(l, v), B(N, v, null), D = !0, x || (V = [
        U(
          r,
          "click",
          /*prevPage*/
          e[23]
        ),
        U(
          v,
          "click",
          /*nextPage*/
          e[24]
        )
      ], x = !0);
    },
    p(A, O) {
      (!D || O[0] & /*currentPage*/
      2048 && o !== (o = /*currentPage*/
      A[11] === 1)) && (r.disabled = o), (!D || O[0] & /*currentPage*/
      2048) && u !== (u = /*currentPage*/
      (A[11] - 1) * Ke + 1 + "") && ae(c, u), (!D || O[0] & /*currentPage, concepts*/
      2560) && m !== (m = Math.min(
        /*currentPage*/
        A[11] * Ke,
        /*concepts*/
        A[9].length
      ) + "") && ae(g, m), (!D || O[0] & /*concepts*/
      512) && p !== (p = /*concepts*/
      A[9].length + "") && ae(S, p), (!D || O[0] & /*currentPage, totalPages*/
      18432 && q !== (q = /*currentPage*/
      A[11] === /*totalPages*/
      A[14])) && (v.disabled = q);
    },
    i(A) {
      D || (w(i.$$.fragment, A), w(N.$$.fragment, A), D = !0);
    },
    o(A) {
      R(i.$$.fragment, A), R(N.$$.fragment, A), D = !1;
    },
    d(A) {
      A && M(t), A && M(n), A && M(l), G(i), G(N), x = !1, we(V);
    }
  };
}
function Ai(e) {
  let t, n, l, r, i, o;
  return {
    c() {
      t = k("div"), n = k("div"), l = k("div"), r = P(), i = k("span"), o = I(
        /*loadingMessage*/
        e[5]
      ), b(l, "class", "w-2 h-2 bg-blue-500 rounded-full animate-pulse"), b(i, "class", "text-sm text-blue-700 dark:text-blue-300 font-medium"), b(n, "class", "flex items-center space-x-2"), b(t, "class", "mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg");
    },
    m(a, f) {
      L(a, t, f), _(t, n), _(n, l), _(n, r), _(n, i), _(i, o);
    },
    p(a, f) {
      f[0] & /*loadingMessage*/
      32 && ae(
        o,
        /*loadingMessage*/
        a[5]
      );
    },
    d(a) {
      a && M(t);
    }
  };
}
function nu(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m = (
    /*scopes*/
    e[2]
  ), g = [];
  for (let y = 0; y < m.length; y += 1)
    g[y] = Ni(Si(e, m, y));
  const h = [Xs, Ks, Ws], p = [];
  function S(y, v) {
    return (
      /*isLoading*/
      y[4] ? 0 : (
        /*isAnalyzed*/
        y[16] ? 2 : 1
      )
    );
  }
  return f = S(e), s = p[f] = h[f](e), {
    c() {
      t = k("div"), n = k("div"), l = k("select");
      for (let y = 0; y < g.length; y += 1)
        g[y].c();
      r = P(), i = k("input"), o = P(), a = k("div"), s.c(), b(l, "class", "text-2xl font-bold text-gray-900 dark:text-gray-100 flex-auto flat-select"), b(l, "aria-label", "Select scope"), le(l, "min-width", "0"), le(l, "max-width", "100%"), /*scopeName*/
      e[0] === void 0 && Ln(() => (
        /*select_change_handler*/
        e[28].call(l)
      )), b(i, "type", "search"), b(i, "class", "shrink px-3 py-1.5 rounded overflow-hidden focus:bg-white bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline focus:outline-blue-500 w-64 transition-colors duration-200"), b(i, "placeholder", "Filter concepts..."), b(i, "autocomplete", "off"), b(n, "class", "pb-6 shrink-0 flex items-center justify-between gap-2"), b(a, "class", "w-full flex-auto flex flex-col h-0"), b(t, "class", "w-full h-full flex flex-col p-4");
    },
    m(y, v) {
      L(y, t, v), _(t, n), _(n, l);
      for (let N = 0; N < g.length; N += 1)
        g[N] && g[N].m(l, null);
      Yr(
        l,
        /*scopeName*/
        e[0],
        !0
      ), _(n, r), _(n, i), ut(
        i,
        /*search*/
        e[10]
      ), _(t, o), _(t, a), p[f].m(a, null), u = !0, c || (d = [
        U(
          l,
          "change",
          /*select_change_handler*/
          e[28]
        ),
        U(
          l,
          "change",
          /*change_handler*/
          e[29]
        ),
        U(
          i,
          "input",
          /*input_input_handler*/
          e[30]
        )
      ], c = !0);
    },
    p(y, v) {
      if (v[0] & /*scopes*/
      4) {
        m = /*scopes*/
        y[2];
        let q;
        for (q = 0; q < m.length; q += 1) {
          const D = Si(y, m, q);
          g[q] ? g[q].p(D, v) : (g[q] = Ni(D), g[q].c(), g[q].m(l, null));
        }
        for (; q < g.length; q += 1)
          g[q].d(1);
        g.length = m.length;
      }
      v[0] & /*scopeName, scopes*/
      5 && Yr(
        l,
        /*scopeName*/
        y[0]
      ), v[0] & /*search*/
      1024 && i.value !== /*search*/
      y[10] && ut(
        i,
        /*search*/
        y[10]
      );
      let N = f;
      f = S(y), f === N ? p[f].p(y, v) : (ie(), R(p[N], 1, 1, () => {
        p[N] = null;
      }), oe(), s = p[f], s ? s.p(y, v) : (s = p[f] = h[f](y), s.c()), w(s, 1), s.m(a, null));
    },
    i(y) {
      u || (w(s), u = !0);
    },
    o(y) {
      R(s), u = !1;
    },
    d(y) {
      y && M(t), Ee(g, y), p[f].d(), c = !1, we(d);
    }
  };
}
const Ke = 50;
function lu(e, t, n) {
  let l, r, i, o, a, f, s, u, c, d, m;
  j(e, Gl, (F) => n(22, m = F));
  let { scopes: g = [] } = t, { onScopeSelect: h = () => {
  } } = t, { scopeName: p = "" } = t, { isLoading: S = !1 } = t, { loadingMessage: y = "" } = t, { onAnalyze: v = () => {
  } } = t, { onInsert: N = () => {
  } } = t, { scopeConcepts: q = {} } = t, { queryByName: D = !1 } = t, x = [], V = "", A = 1;
  function O() {
    A > 1 && n(11, A -= 1);
  }
  function C() {
    A < s && n(11, A += 1);
  }
  let T = /* @__PURE__ */ new Set();
  function ee() {
    c ? (a.forEach((F) => T.delete(F.id)), n(12, T = new Set(T))) : (a.forEach((F) => T.add(F.id)), n(12, T = new Set(T)));
  }
  function X(F) {
    T.has(F) ? T.delete(F) : T.add(F), n(12, T = new Set(T));
  }
  function Q() {
    p = rf(this), n(0, p), n(2, g), n(3, h), n(2, g);
  }
  const H = (F) => h(F.target.value);
  function ne() {
    V = this.value, n(10, V);
  }
  const ue = () => v(), re = () => v(), E = (F) => X(F.id), Y = (F) => {
    D ? N(p, `name = '${F.name}'`) : typeof F.id == "string" && Number.isNaN(parseFloat(F.id)) ? N(p, `id = '${F.id}'`) : N(p, `id = ${F.id}`);
  }, K = () => {
    if (D) {
      let F = x.filter((fe) => T.has(fe.id)).map((fe) => "'" + fe.name + "'");
      N(p, `name in (${F.join(", ")})`);
    } else {
      let F;
      x.some((fe) => typeof fe.id == "string" && Number.isNaN(parseFloat(fe.id))) ? F = x.filter((fe) => T.has(fe.id)).map((fe) => `'${fe.id}'`) : F = x.filter((fe) => T.has(fe.id)).map((fe) => `${fe.id}`), N(p, `id in (${F.join(", ")})`);
    }
  }, ce = () => n(1, D = !D);
  return e.$$set = (F) => {
    "scopes" in F && n(2, g = F.scopes), "onScopeSelect" in F && n(3, h = F.onScopeSelect), "scopeName" in F && n(0, p = F.scopeName), "isLoading" in F && n(4, S = F.isLoading), "loadingMessage" in F && n(5, y = F.loadingMessage), "onAnalyze" in F && n(6, v = F.onAnalyze), "onInsert" in F && n(7, N = F.onInsert), "scopeConcepts" in F && n(8, q = F.scopeConcepts), "queryByName" in F && n(1, D = F.queryByName);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*scopes, scopeName, onScopeSelect*/
    13 && g.length > 0 && !p && (n(0, p = g[0]), h(p)), e.$$.dirty[0] & /*scopeName, scopeConcepts*/
    257 && n(16, l = p && q && q.scope_name === p), e.$$.dirty[0] & /*isAnalyzed, scopeConcepts*/
    65792 && n(9, x = l && q.concepts ? q.concepts : []), e.$$.dirty[0] & /*concepts*/
    512 && n(21, r = x.reduce((F, fe) => F + fe.count, 0)), e.$$.dirty[0] & /*concepts*/
    512 && n(20, i = x.some((F) => F.name.startsWith("Concept "))), e.$$.dirty[0] & /*scopeConcepts*/
    256 && n(19, o = q && q.error), e.$$.dirty[0] & /*search, concepts*/
    1536 && n(27, a = V.trim() ? x.filter((F) => (F.name ?? "").toLocaleLowerCase().includes(V.trim().toLocaleLowerCase()) || `${F.id ?? ""}`.toLocaleLowerCase().includes(V.trim().toLocaleLowerCase())) : x), e.$$.dirty[0] & /*filteredConcepts*/
    134217728 && n(15, f = [...a].sort((F, fe) => fe.count - F.count)), e.$$.dirty[0] & /*sortedConcepts*/
    32768 && n(14, s = Math.max(1, Math.ceil(f.length / Ke))), e.$$.dirty[0] & /*currentPage, totalPages*/
    18432 && A > s && n(11, A = 1), e.$$.dirty[0] & /*sortedConcepts, currentPage*/
    34816 && n(18, u = f.slice((A - 1) * Ke, A * Ke)), e.$$.dirty[0] & /*filteredConcepts, selectedConceptIDs*/
    134221824 && n(13, c = a.length > 0 && a.every((F) => T.has(F.id))), e.$$.dirty[0] & /*filteredConcepts, selectedConceptIDs, allFilteredSelected*/
    134230016 && n(17, d = a.some((F) => T.has(F.id)) && !c);
  }, [
    p,
    D,
    g,
    h,
    S,
    y,
    v,
    N,
    q,
    x,
    V,
    A,
    T,
    c,
    s,
    f,
    l,
    d,
    u,
    o,
    i,
    r,
    m,
    O,
    C,
    ee,
    X,
    a,
    Q,
    H,
    ne,
    ue,
    re,
    E,
    Y,
    K,
    ce
  ];
}
class ru extends ke {
  constructor(t) {
    super(), pe(
      this,
      t,
      lu,
      nu,
      ye,
      {
        scopes: 2,
        onScopeSelect: 3,
        scopeName: 0,
        isLoading: 4,
        loadingMessage: 5,
        onAnalyze: 6,
        onInsert: 7,
        scopeConcepts: 8,
        queryByName: 1
      },
      null,
      [-1, -1]
    );
  }
}
function iu(e) {
  return e === 0 ? !0 : e;
}
function ft(e) {
  return iu(e) ? Array.isArray(e) ? (t) => e.map((n) => typeof n != "function" ? t[n] : n(t)) : typeof e != "function" ? (t) => t[e] : e : null;
}
function ou(e) {
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
function Nr(e, t = {}) {
  return ou(Object.entries(e).filter(([n, l]) => l !== void 0 && t[n] === void 0));
}
function au(e, t = 300) {
  let n;
  return (...l) => {
    clearTimeout(n), n = setTimeout(() => {
      e.apply(this, l);
    }, t);
  };
}
function fu(e, t, { sort: n = !1 } = {}) {
  if (!Array.isArray(e))
    throw new TypeError(`The first argument of calcUniques() must be an array. You passed in a ${typeof e}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(t) || t === void 0 || t === null)
    throw new TypeError("The second argument of calcUniques() must be an object with field names as keys as accessor functions as values.");
  const l = {}, r = Object.keys(t), i = r.length;
  let o, a, f, s, u, c, d;
  const m = e.length;
  for (o = 0; o < i; o += 1) {
    for (d = /* @__PURE__ */ new Set(), s = r[o], u = t[s], a = 0; a < m; a += 1)
      if (c = u(e[a]), Array.isArray(c)) {
        const h = c.length;
        for (f = 0; f < h; f += 1)
          d.add(c[f]);
      } else
        d.add(c);
    const g = Array.from(d);
    l[s] = n === !0 ? g.sort() : g;
  }
  return l;
}
function su(e, t) {
  if (!Array.isArray(e))
    throw new TypeError(`The first argument of calcExtents() must be an array. You passed in a ${typeof e}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(t) || t === void 0 || t === null)
    throw new TypeError("The second argument of calcExtents() must be an object with field names as keys as accessor functions as values.");
  const n = {}, l = Object.keys(t), r = l.length;
  let i, o, a, f, s, u, c, d;
  const m = e.length;
  for (i = 0; i < r; i += 1) {
    for (f = l[i], c = t[f], s = null, u = null, o = 0; o < m; o += 1)
      if (d = c(e[o]), Array.isArray(d)) {
        const g = d.length;
        for (a = 0; a < g; a += 1)
          d[a] !== !1 && d[a] !== void 0 && d[a] !== null && Number.isNaN(d[a]) === !1 && ((s === null || d[a] < s) && (s = d[a]), (u === null || d[a] > u) && (u = d[a]));
      } else
        d !== !1 && d !== void 0 && d !== null && Number.isNaN(d) === !1 && ((s === null || d < s) && (s = d), (u === null || d > u) && (u = d));
    n[f] = [s, u];
  }
  return n;
}
function Cn(e, t) {
  return e.length !== t.length ? !1 : e.every((n) => t.includes(n));
}
function Ma(e) {
  return !!(typeof e.bandwidth == "function" || Cn(Object.keys(e), ["domain", "range", "unknown", "copy"]));
}
function uu(e, t, n) {
  const l = Object.keys(n).reduce((i, o) => {
    const a = Ma(n[o]) === !0 ? "ordinal" : "other";
    return i[a] || (i[a] = {}), i[a][o] = t[o], i;
  }, { ordinal: !1, other: !1 });
  let r = {};
  return l.ordinal && (r = fu(e, l.ordinal)), l.other && (r = { ...r, ...su(e, l.other) }), r;
}
function cu(e = [], t) {
  return Array.isArray(t) === !0 ? t.map((n, l) => n === null ? e[l] : n) : e;
}
function Pl(e) {
  return function([n, l]) {
    return typeof l == "function" && (l = l(n[e])), n ? cu(n[e], l) : l;
  };
}
function Hl(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function du(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function za(e) {
  let t, n, l;
  e.length !== 2 ? (t = Hl, n = (a, f) => Hl(e(a), f), l = (a, f) => e(a) - f) : (t = e === Hl || e === du ? e : gu, n = e, l = e);
  function r(a, f, s = 0, u = a.length) {
    if (s < u) {
      if (t(f, f) !== 0)
        return u;
      do {
        const c = s + u >>> 1;
        n(a[c], f) < 0 ? s = c + 1 : u = c;
      } while (s < u);
    }
    return s;
  }
  function i(a, f, s = 0, u = a.length) {
    if (s < u) {
      if (t(f, f) !== 0)
        return u;
      do {
        const c = s + u >>> 1;
        n(a[c], f) <= 0 ? s = c + 1 : u = c;
      } while (s < u);
    }
    return s;
  }
  function o(a, f, s = 0, u = a.length) {
    const c = r(a, f, s, u - 1);
    return c > s && l(a[c - 1], f) > -l(a[c], f) ? c - 1 : c;
  }
  return { left: r, center: o, right: i };
}
function gu() {
  return 0;
}
function mu(e) {
  return e === null ? NaN : +e;
}
const bu = za(Hl), _u = bu.right;
za(mu).center;
const hu = _u;
class Ti extends Map {
  constructor(t, n = ku) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [l, r] of t)
        this.set(l, r);
  }
  get(t) {
    return super.get(Oi(this, t));
  }
  has(t) {
    return super.has(Oi(this, t));
  }
  set(t, n) {
    return super.set(yu(this, t), n);
  }
  delete(t) {
    return super.delete(pu(this, t));
  }
}
function Oi({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) ? e.get(l) : n;
}
function yu({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) ? e.get(l) : (e.set(l, n), n);
}
function pu({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) && (n = e.get(l), e.delete(l)), n;
}
function ku(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const wu = Math.sqrt(50), vu = Math.sqrt(10), Cu = Math.sqrt(2);
function Jl(e, t, n) {
  const l = (t - e) / Math.max(0, n), r = Math.floor(Math.log10(l)), i = l / Math.pow(10, r), o = i >= wu ? 10 : i >= vu ? 5 : i >= Cu ? 2 : 1;
  let a, f, s;
  return r < 0 ? (s = Math.pow(10, -r) / o, a = Math.round(e * s), f = Math.round(t * s), a / s < e && ++a, f / s > t && --f, s = -s) : (s = Math.pow(10, r) * o, a = Math.round(e / s), f = Math.round(t / s), a * s < e && ++a, f * s > t && --f), f < a && 0.5 <= n && n < 2 ? Jl(e, t, n * 2) : [a, f, s];
}
function Su(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0))
    return [];
  if (e === t)
    return [e];
  const l = t < e, [r, i, o] = l ? Jl(t, e, n) : Jl(e, t, n);
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
function Dr(e, t, n) {
  return t = +t, e = +e, n = +n, Jl(e, t, n)[2];
}
function Nu(e, t, n) {
  t = +t, e = +e, n = +n;
  const l = t < e, r = l ? Dr(t, e, n) : Dr(e, t, n);
  return (l ? -1 : 1) * (r < 0 ? 1 / -r : r);
}
function Xe(e, t, n) {
  e = +e, t = +t, n = (r = arguments.length) < 2 ? (t = e, e = 0, 1) : r < 3 ? 1 : +n;
  for (var l = -1, r = Math.max(0, Math.ceil((t - e) / n)) | 0, i = new Array(r); ++l < r; )
    i[l] = e + l * n;
  return i;
}
function lr(e, t) {
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
const Pi = Symbol("implicit");
function rr() {
  var e = new Ti(), t = [], n = [], l = Pi;
  function r(i) {
    let o = e.get(i);
    if (o === void 0) {
      if (l !== Pi)
        return l;
      e.set(i, o = t.push(i) - 1);
    }
    return n[o % n.length];
  }
  return r.domain = function(i) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new Ti();
    for (const o of i)
      e.has(o) || e.set(o, t.push(o) - 1);
    return r;
  }, r.range = function(i) {
    return arguments.length ? (n = Array.from(i), r) : n.slice();
  }, r.unknown = function(i) {
    return arguments.length ? (l = i, r) : l;
  }, r.copy = function() {
    return rr(t, n).unknown(l);
  }, lr.apply(r, arguments), r;
}
function Br() {
  var e = rr().unknown(void 0), t = e.domain, n = e.range, l = 0, r = 1, i, o, a = !1, f = 0, s = 0, u = 0.5;
  delete e.unknown;
  function c() {
    var d = t().length, m = r < l, g = m ? r : l, h = m ? l : r;
    i = (h - g) / Math.max(1, d - f + s * 2), a && (i = Math.floor(i)), g += (h - g - i * (d - f)) * u, o = i * (1 - f), a && (g = Math.round(g), o = Math.round(o));
    var p = Xe(d).map(function(S) {
      return g + i * S;
    });
    return n(m ? p.reverse() : p);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), c()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([l, r] = d, l = +l, r = +r, c()) : [l, r];
  }, e.rangeRound = function(d) {
    return [l, r] = d, l = +l, r = +r, a = !0, c();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return i;
  }, e.round = function(d) {
    return arguments.length ? (a = !!d, c()) : a;
  }, e.padding = function(d) {
    return arguments.length ? (f = Math.min(1, s = +d), c()) : f;
  }, e.paddingInner = function(d) {
    return arguments.length ? (f = Math.min(1, d), c()) : f;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (s = +d, c()) : s;
  }, e.align = function(d) {
    return arguments.length ? (u = Math.max(0, Math.min(1, d)), c()) : u;
  }, e.copy = function() {
    return Br(t(), [l, r]).round(a).paddingInner(f).paddingOuter(s).align(u);
  }, lr.apply(c(), arguments);
}
function Mu(e) {
  return function() {
    return e;
  };
}
function zu(e) {
  return +e;
}
var Qi = [0, 1];
function He(e) {
  return e;
}
function Er(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Mu(isNaN(t) ? NaN : 0.5);
}
function Lu(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(l) {
    return Math.max(e, Math.min(t, l));
  };
}
function Ru(e, t, n) {
  var l = e[0], r = e[1], i = t[0], o = t[1];
  return r < l ? (l = Er(r, l), i = n(o, i)) : (l = Er(l, r), i = n(i, o)), function(a) {
    return i(l(a));
  };
}
function qu(e, t, n) {
  var l = Math.min(e.length, t.length) - 1, r = new Array(l), i = new Array(l), o = -1;
  for (e[l] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < l; )
    r[o] = Er(e[o], e[o + 1]), i[o] = n(t[o], t[o + 1]);
  return function(a) {
    var f = hu(e, a, 1, l) - 1;
    return i[f](r[f](a));
  };
}
function La(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ra() {
  var e = Qi, t = Qi, n = Ir, l, r, i, o = He, a, f, s;
  function u() {
    var d = Math.min(e.length, t.length);
    return o !== He && (o = Lu(e[0], e[d - 1])), a = d > 2 ? qu : Ru, f = s = null, c;
  }
  function c(d) {
    return d == null || isNaN(d = +d) ? i : (f || (f = a(e.map(l), t, n)))(l(o(d)));
  }
  return c.invert = function(d) {
    return o(r((s || (s = a(t, e.map(l), Ul)))(d)));
  }, c.domain = function(d) {
    return arguments.length ? (e = Array.from(d, zu), u()) : e.slice();
  }, c.range = function(d) {
    return arguments.length ? (t = Array.from(d), u()) : t.slice();
  }, c.rangeRound = function(d) {
    return t = Array.from(d), n = Ds, u();
  }, c.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : He, u()) : o !== He;
  }, c.interpolate = function(d) {
    return arguments.length ? (n = d, u()) : n;
  }, c.unknown = function(d) {
    return arguments.length ? (i = d, c) : i;
  }, function(d, m) {
    return l = d, r = m, u();
  };
}
function Du() {
  return Ra()(He, He);
}
function Eu(e, t, n, l) {
  var r = Nu(e, t, n), i;
  switch (l = Wl(l ?? ",f"), l.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return l.precision == null && !isNaN(i = rs(r, o)) && (l.precision = i), wa(l, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      l.precision == null && !isNaN(i = is(r, Math.max(Math.abs(e), Math.abs(t)))) && (l.precision = i - (l.type === "e"));
      break;
    }
    case "f":
    case "%": {
      l.precision == null && !isNaN(i = va(r)) && (l.precision = i - (l.type === "%") * 2);
      break;
    }
  }
  return Ce(l);
}
function qa(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var l = t();
    return Su(l[0], l[l.length - 1], n ?? 10);
  }, e.tickFormat = function(n, l) {
    var r = t();
    return Eu(r[0], r[r.length - 1], n ?? 10, l);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var l = t(), r = 0, i = l.length - 1, o = l[r], a = l[i], f, s, u = 10;
    for (a < o && (s = o, o = a, a = s, s = r, r = i, i = s); u-- > 0; ) {
      if (s = Dr(o, a, n), s === f)
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
function st() {
  var e = Du();
  return e.copy = function() {
    return La(e, st());
  }, lr.apply(e, arguments), qa(e);
}
function ji(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function Au(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Tu(e) {
  return e < 0 ? -e * e : e * e;
}
function Ou(e) {
  var t = e(He, He), n = 1;
  function l() {
    return n === 1 ? e(He, He) : n === 0.5 ? e(Au, Tu) : e(ji(n), ji(1 / n));
  }
  return t.exponent = function(r) {
    return arguments.length ? (n = +r, l()) : n;
  }, qa(t);
}
function Da() {
  var e = Ou(Ra());
  return e.copy = function() {
    return La(e, Da()).exponent(e.exponent());
  }, lr.apply(e, arguments), e;
}
function Pu() {
  return Da.apply(null, arguments).exponent(0.5);
}
const Sn = {
  x: st,
  y: st,
  z: st,
  r: Pu
};
function Qu(e) {
  return e.constant ? "symlog" : e.base ? "log" : e.exponent ? e.exponent() === 0.5 ? "sqrt" : "pow" : "other";
}
function xi(e) {
  return e;
}
function ju(e) {
  return (t) => Math.log(e * t);
}
function xu(e) {
  return (t) => e * Math.exp(t);
}
function Iu(e) {
  return (t) => Math.sign(t) * Math.log1p(Math.abs(t / e));
}
function Fu(e) {
  return (t) => Math.sign(t) * Math.expm1(Math.abs(t)) * e;
}
function Ql(e) {
  return function(n) {
    return n < 0 ? -Math.pow(-n, e) : Math.pow(n, e);
  };
}
function Hu(e) {
  const t = Qu(e);
  if (t === "log") {
    const n = Math.sign(e.domain()[0]);
    return { lift: ju(n), ground: xu(n), scaleType: t };
  }
  return t === "pow" ? { lift: Ql(1), ground: Ql(1 / 1), scaleType: t } : t === "sqrt" ? { lift: Ql(0.5), ground: Ql(1 / 0.5), scaleType: t } : t === "symlog" ? { lift: Iu(1), ground: Fu(1), scaleType: t } : { lift: xi, ground: xi, scaleType: t };
}
function Zl(e) {
  return e.replace(/^\w/, (t) => t.toUpperCase());
}
function Re(e, t = "") {
  return `scale${Zl(t)}${Zl(e)}`;
}
function Ea(e) {
  if (typeof e.bandwidth == "function")
    return typeof e.paddingInner == "function" ? Re("band") : Re("point");
  if (Cn(Object.keys(e), ["domain", "range", "unknown", "copy"]))
    return Re("ordinal");
  let t = "";
  if (e.interpolator && (e.domain().length === 3 ? t = "diverging" : t = "sequential"), e.quantiles)
    return Re("quantile", t);
  if (e.thresholds)
    return Re("quantize", t);
  if (e.constant)
    return Re("symlog", t);
  if (e.base)
    return Re("log", t);
  if (e.exponent)
    return e.exponent() === 0.5 ? Re("sqrt", t) : Re("pow", t);
  if (Cn(Object.keys(e), ["domain", "range", "invertExtent", "unknown", "copy"]))
    return Re("threshold");
  if (Cn(Object.keys(e), ["invert", "range", "domain", "unknown", "copy", "ticks", "tickFormat", "nice"]))
    return Re("identity");
  if (Cn(Object.keys(e), [
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
    return Re("radial");
  if (t)
    return Re(t);
  if (e.domain()[0] instanceof Date) {
    const n = /* @__PURE__ */ new Date();
    let l;
    return n.getDay = () => l = "time", n.getUTCDay = () => l = "utc", e.tickFormat(0, "%a")(n), Re(l);
  }
  return Re("linear");
}
const Bu = ["scaleThreshold", "scaleQuantile", "scaleQuantize", "scaleSequentialQuantile"];
function Gu(e, t) {
  if (typeof e.range != "function")
    throw console.log(e), new Error("Scale method `range` must be a function");
  if (typeof e.domain != "function")
    throw new Error("Scale method `domain` must be a function");
  if (!Array.isArray(t) || Bu.includes(Ea(e)) || Ma(e) === !0)
    return e.domain();
  const { lift: n, ground: l } = Hu(e), r = e.domain()[0], i = Object.prototype.toString.call(r) === "[object Date]", [o, a] = e.domain().map((m) => n(i ? m.getTime() : m)), [f, s] = e.range(), u = t[0] || 0, c = t[1] || 0, d = (a - o) / (Math.abs(s - f) - u - c);
  return [o - u * d, c * d + a].map((m) => l(i ? new Date(m) : m));
}
function Vu(e, t, n, l, r) {
  let i, o;
  return r === !0 ? (i = 0, o = 100) : (i = e === "r" ? 1 : 0, o = e === "y" ? n : e === "r" ? 25 : t), l === !0 ? [o, i] : [i, o];
}
function Wu(e, t, n, l, r, i) {
  return r ? typeof r == "function" ? r({ width: t, height: n }) : r : Vu(e, t, n, l, i);
}
function jl(e) {
  return function([n, l, r, i, o, a, f, s, u, c]) {
    if (l === null)
      return null;
    const d = Wu(e, f, s, a, u, c), m = n === Sn[e] ? n() : n.copy();
    return m.domain(r), (!m.interpolator || typeof m.interpolator == "function" && m.interpolator().name.startsWith("identity")) && m.range(d), i && m.domain(Gu(m, i)), (o === !0 || typeof o == "number") && (typeof m.nice == "function" ? m.nice(typeof o == "number" ? o : void 0) : console.error(`[Layer Cake] You set \`${e}Nice: true\` but the ${e}Scale does not have a \`.nice\` method. Ignoring...`)), m;
  };
}
function xl([e, t]) {
  return (n) => {
    const l = e(n);
    return Array.isArray(l) ? l.map((r) => t(r)) : t(l);
  };
}
function Il([e]) {
  if (typeof e == "function") {
    if (typeof e.range == "function")
      return e.range();
    console.error("[LayerCake] Your scale doesn't have a `.range` method?");
  }
  return null;
}
const Fe = "    ";
function Ku(e) {
  const { r: t, g: n, b: l, opacity: r } = Xl(e);
  return [t, n, l].every((i) => i >= 0 && i <= 255) ? { r: t, g: n, b: l, o: r } : !1;
}
function Xu({ r: e, g: t, b: n }) {
  return (0.2126 * e + 0.7152 * t + 0.0722 * n) / 255 > 0.6 ? "black" : "white";
}
function Yu(e) {
  console.log("/********* LayerCake Debug ************/"), console.log("Bounding box:"), Uu(e.boundingBox), console.log(`Scales:
`), Object.keys(e.activeGetters).forEach((t) => {
    Ju(t, e[`${t}Scale`], e[t]);
  }), console.log(`/************ End LayerCake Debug ***************/
`);
}
function Uu(e) {
  Object.entries(e).forEach(([t, n]) => {
    console.log(`${Fe}${t}:`, n);
  });
}
function Ju(e, t, n) {
  const l = Ea(t);
  console.log(`${Fe}${e}:`), console.log(`${Fe}${Fe}Accessor: "${n.toString()}"`), console.log(`${Fe}${Fe}Type: ${l}`), Ii(t, "domain"), Ii(t, "range", " ");
}
function Ii(e, t, n = "") {
  const l = e[t](), r = $u(l);
  r ? Zu(r, t, l) : console.log(`${Fe}${Fe}${Zl(t)}:${n}`, l);
}
function Zu(e, t, n) {
  console.log(
    `${Fe}${Fe}${Zl(t)}:    %cArray%c(${n.length}) ` + e[0] + "%c ]",
    "color: #1377e4",
    "color: #737373",
    "color: #1478e4",
    ...e[1],
    "color: #1478e4"
  );
}
function $u(e) {
  const t = [], n = e.map((l, r) => {
    const i = Ku(l);
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
      (l) => `background-color: rgba(${l.r}, ${l.g}, ${l.b}, ${l.o}); color:${Xu(l)};`
    )
  ] : null;
}
const ec = (e) => ({
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
}), Fi = (e) => ({
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
function Hi(e) {
  let t, n, l;
  const r = (
    /*#slots*/
    e[153].default
  ), i = Pe(
    r,
    e,
    /*$$scope*/
    e[152],
    Fi
  );
  return {
    c() {
      t = k("div"), i && i.c(), b(t, "class", "layercake-container svelte-vhzpsp"), Ln(() => (
        /*div_elementresize_handler*/
        e[155].call(t)
      )), le(
        t,
        "position",
        /*position*/
        e[5]
      ), le(
        t,
        "top",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), le(
        t,
        "right",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), le(
        t,
        "bottom",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), le(
        t,
        "left",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), le(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[4] === !1 ? "none" : null
      );
    },
    m(o, a) {
      L(o, t, a), i && i.m(t, null), e[154](t), n = af(
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
        l ? Qe(
          r,
          /*$$scope*/
          o[152],
          a,
          ec
        ) : xe(
          /*$$scope*/
          o[152]
        ),
        Fi
      ), a[0] & /*position*/
      32 && le(
        t,
        "position",
        /*position*/
        o[5]
      ), a[0] & /*position*/
      32 && le(
        t,
        "top",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && le(
        t,
        "right",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && le(
        t,
        "bottom",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && le(
        t,
        "left",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), a[0] & /*pointerEvents*/
      16 && le(
        t,
        "pointer-events",
        /*pointerEvents*/
        o[4] === !1 ? "none" : null
      );
    },
    i(o) {
      l || (w(i, o), l = !0);
    },
    o(o) {
      R(i, o), l = !1;
    },
    d(o) {
      o && M(t), i && i.d(o), e[154](null), n();
    }
  };
}
function tc(e) {
  let t, n, l = (
    /*ssr*/
    (e[3] === !0 || typeof window < "u") && Hi(e)
  );
  return {
    c() {
      l && l.c(), t = _e();
    },
    m(r, i) {
      l && l.m(r, i), L(r, t, i), n = !0;
    },
    p(r, i) {
      /*ssr*/
      r[3] === !0 || typeof window < "u" ? l ? (l.p(r, i), i[0] & /*ssr*/
      8 && w(l, 1)) : (l = Hi(r), l.c(), w(l, 1), l.m(t.parentNode, t)) : l && (ie(), R(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (w(l), n = !0);
    },
    o(r) {
      R(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && M(t);
    }
  };
}
function nc(e, t, n) {
  let l, r, i, o, a, f, s, u, c, d, m, g, h, p, S, y, v, N, q, D, x, V, A, O, C, T, ee, X, Q, H, ne, ue, re, E, Y, K, ce, F, fe, te, be, $, Le, ct, dt, Xt, On, Ge, Yt, Ut, gt, kt, $e, et, tt, Pn, Qn, jn, xn, In, Fn, Hn, { $$slots: ar = {}, $$scope: Bn } = t;
  const fr = au(Yu, 200);
  let { ssr: Jt = !1 } = t, { pointerEvents: Gn = !0 } = t, { position: Vn = "relative" } = t, { percentRange: wt = !1 } = t, { width: Zt = void 0 } = t, { height: $t = void 0 } = t, { containerWidth: nt = Zt || 100 } = t, { containerHeight: lt = $t || 100 } = t, { element: J = void 0 } = t, { x: rt = void 0 } = t, { y: vt = void 0 } = t, { z: Ct = void 0 } = t, { r: St = void 0 } = t, { data: Nt = [] } = t, { xDomain: Mt = void 0 } = t, { yDomain: zt = void 0 } = t, { zDomain: Lt = void 0 } = t, { rDomain: Rt = void 0 } = t, { xNice: Wn = !1 } = t, { yNice: Kn = !1 } = t, { zNice: Xn = !1 } = t, { rNice: Yn = !1 } = t, { xPadding: Un = void 0 } = t, { yPadding: Jn = void 0 } = t, { zPadding: Zn = void 0 } = t, { rPadding: $n = void 0 } = t, { xScale: el = Sn.x } = t, { yScale: en = Sn.y } = t, { zScale: tl = Sn.z } = t, { rScale: nl = Sn.r } = t, { xRange: qt = void 0 } = t, { yRange: Dt = void 0 } = t, { zRange: Et = void 0 } = t, { rRange: At = void 0 } = t, { xReverse: ll = !1 } = t, { yReverse: rl = void 0 } = t, { zReverse: il = !1 } = t, { rReverse: ol = !1 } = t, { padding: al = {} } = t, { extents: fl = {} } = t, { flatData: sl = void 0 } = t, { custom: ul = {} } = t, { debug: sr = !1 } = t, ur = !1;
  pt(() => {
    ur = !0;
  });
  const he = {}, it = ge(wt);
  j(e, it, (z) => n(33, dt = z));
  const Tt = ge(nt);
  j(e, Tt, (z) => n(32, ct = z));
  const Ot = ge(lt);
  j(e, Ot, (z) => n(31, Le = z));
  const cl = ge(Nr(fl));
  j(e, cl, (z) => n(170, $ = z));
  const dl = ge(Nt);
  j(e, dl, (z) => n(30, be = z));
  const tn = ge(sl || Nt);
  j(e, tn, (z) => n(29, te = z));
  const gl = ge(al);
  j(e, gl, (z) => n(169, fe = z));
  const Pt = ge(ft(rt));
  j(e, Pt, (z) => n(28, F = z));
  const Qt = ge(ft(vt));
  j(e, Qt, (z) => n(27, ce = z));
  const jt = ge(ft(Ct));
  j(e, jt, (z) => n(26, K = z));
  const xt = ge(ft(St));
  j(e, xt, (z) => n(25, Y = z));
  const ml = ge(Mt);
  j(e, ml, (z) => n(168, E = z));
  const bl = ge(zt);
  j(e, bl, (z) => n(167, re = z));
  const _l = ge(Lt);
  j(e, _l, (z) => n(166, ue = z));
  const hl = ge(Rt);
  j(e, hl, (z) => n(165, ne = z));
  const nn = ge(Wn);
  j(e, nn, (z) => n(24, H = z));
  const ln = ge(Kn);
  j(e, ln, (z) => n(23, Q = z));
  const rn = ge(Xn);
  j(e, rn, (z) => n(22, X = z));
  const on = ge(Yn);
  j(e, on, (z) => n(21, ee = z));
  const an = ge(ll);
  j(e, an, (z) => n(20, T = z));
  const fn = ge(l);
  j(e, fn, (z) => n(19, C = z));
  const sn = ge(il);
  j(e, sn, (z) => n(18, O = z));
  const un = ge(ol);
  j(e, un, (z) => n(17, A = z));
  const cn = ge(Un);
  j(e, cn, (z) => n(16, V = z));
  const dn = ge(Jn);
  j(e, dn, (z) => n(15, x = z));
  const gn = ge(Zn);
  j(e, gn, (z) => n(14, D = z));
  const mn = ge($n);
  j(e, mn, (z) => n(13, q = z));
  const yl = ge(qt);
  j(e, yl, (z) => n(164, N = z));
  const pl = ge(Dt);
  j(e, pl, (z) => n(163, v = z));
  const kl = ge(Et);
  j(e, kl, (z) => n(162, y = z));
  const wl = ge(At);
  j(e, wl, (z) => n(161, S = z));
  const bn = ge(el);
  j(e, bn, (z) => n(160, p = z));
  const _n = ge(en);
  j(e, _n, (z) => n(159, h = z));
  const hn = ge(tl);
  j(e, hn, (z) => n(158, g = z));
  const yn = ge(nl);
  j(e, yn, (z) => n(157, m = z));
  const vl = ge(he);
  j(e, vl, (z) => n(11, c = z));
  const Cl = ge(ul);
  j(e, Cl, (z) => n(12, d = z));
  const Sl = ve([Pt, Qt, jt, xt], ([z, Ve, Ie, ze]) => {
    const mt = {};
    return z && (mt.x = z), Ve && (mt.y = Ve), Ie && (mt.z = Ie), ze && (mt.r = ze), mt;
  });
  j(e, Sl, (z) => n(10, s = z));
  const Nl = ve([gl, Tt, Ot], ([z]) => Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, z));
  j(e, Nl, (z) => n(37, Yt = z));
  const Ml = ve([Tt, Ot, Nl], ([z, Ve, Ie]) => {
    const ze = {};
    return ze.top = Ie.top, ze.right = z - Ie.right, ze.bottom = Ve - Ie.bottom, ze.left = Ie.left, ze.width = ze.right - ze.left, ze.height = ze.bottom - ze.top, ze.width <= 0 && ur === !0 && console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?"), ze.height <= 0 && ur === !0 && console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?"), ze;
  });
  j(e, Ml, (z) => n(151, u = z));
  const ot = ve([Ml], ([z]) => z.width);
  j(e, ot, (z) => n(34, Xt = z));
  const at = ve([Ml], ([z]) => z.height);
  j(e, at, (z) => n(35, On = z));
  const Te = ve([tn, Sl, cl, bn, _n, yn, hn], ([z, Ve, Ie, ze, mt, Ja, Za]) => {
    const $a = {
      x: ze,
      y: mt,
      r: Ja,
      z: Za
    }, kr = Nr(Ve, Ie), ef = Object.fromEntries(Object.keys(kr).map((wr) => [wr, $a[wr]]));
    return Object.keys(kr).length > 0 ? { ...uu(z, kr, ef), ...Ie } : {};
  });
  j(e, Te, (z) => n(38, Ut = z));
  const zl = ve([Te, ml], Pl("x"));
  j(e, zl, (z) => n(39, gt = z));
  const Ll = ve([Te, bl], Pl("y"));
  j(e, Ll, (z) => n(40, kt = z));
  const Rl = ve([Te, _l], Pl("z"));
  j(e, Rl, (z) => n(41, $e = z));
  const ql = ve([Te, hl], Pl("r"));
  j(e, ql, (z) => n(42, et = z));
  const pn = ve(
    [
      bn,
      Te,
      zl,
      cn,
      nn,
      an,
      ot,
      at,
      yl,
      it
    ],
    jl("x")
  );
  j(e, pn, (z) => n(9, f = z));
  const cr = ve([Pt, pn], xl);
  j(e, cr, (z) => n(47, xn = z));
  const kn = ve(
    [
      _n,
      Te,
      Ll,
      dn,
      ln,
      fn,
      ot,
      at,
      pl,
      it
    ],
    jl("y")
  );
  j(e, kn, (z) => n(8, a = z));
  const dr = ve([Qt, kn], xl);
  j(e, dr, (z) => n(48, In = z));
  const wn = ve(
    [
      hn,
      Te,
      Rl,
      gn,
      rn,
      sn,
      ot,
      at,
      kl,
      it
    ],
    jl("z")
  );
  j(e, wn, (z) => n(7, o = z));
  const gr = ve([jt, wn], xl);
  j(e, gr, (z) => n(49, Fn = z));
  const vn = ve(
    [
      yn,
      Te,
      ql,
      mn,
      on,
      un,
      ot,
      at,
      wl,
      it
    ],
    jl("r")
  );
  j(e, vn, (z) => n(6, i = z));
  const mr = ve([xt, vn], xl);
  j(e, mr, (z) => n(50, Hn = z));
  const br = ve([pn], Il);
  j(e, br, (z) => n(43, tt = z));
  const _r = ve([kn], Il);
  j(e, _r, (z) => n(44, Pn = z));
  const hr = ve([wn], Il);
  j(e, hr, (z) => n(45, Qn = z));
  const yr = ve([vn], Il);
  j(e, yr, (z) => n(46, jn = z));
  const pr = ve([ot, at], ([z, Ve]) => z / Ve);
  j(e, pr, (z) => n(36, Ge = z));
  function Ya(z) {
    Me[z ? "unshift" : "push"](() => {
      J = z, n(2, J);
    });
  }
  function Ua() {
    nt = this.clientWidth, lt = this.clientHeight, n(0, nt), n(1, lt);
  }
  return e.$$set = (z) => {
    "ssr" in z && n(3, Jt = z.ssr), "pointerEvents" in z && n(4, Gn = z.pointerEvents), "position" in z && n(5, Vn = z.position), "percentRange" in z && n(111, wt = z.percentRange), "width" in z && n(112, Zt = z.width), "height" in z && n(113, $t = z.height), "containerWidth" in z && n(0, nt = z.containerWidth), "containerHeight" in z && n(1, lt = z.containerHeight), "element" in z && n(2, J = z.element), "x" in z && n(114, rt = z.x), "y" in z && n(115, vt = z.y), "z" in z && n(116, Ct = z.z), "r" in z && n(117, St = z.r), "data" in z && n(118, Nt = z.data), "xDomain" in z && n(119, Mt = z.xDomain), "yDomain" in z && n(120, zt = z.yDomain), "zDomain" in z && n(121, Lt = z.zDomain), "rDomain" in z && n(122, Rt = z.rDomain), "xNice" in z && n(123, Wn = z.xNice), "yNice" in z && n(124, Kn = z.yNice), "zNice" in z && n(125, Xn = z.zNice), "rNice" in z && n(126, Yn = z.rNice), "xPadding" in z && n(127, Un = z.xPadding), "yPadding" in z && n(128, Jn = z.yPadding), "zPadding" in z && n(129, Zn = z.zPadding), "rPadding" in z && n(130, $n = z.rPadding), "xScale" in z && n(131, el = z.xScale), "yScale" in z && n(132, en = z.yScale), "zScale" in z && n(133, tl = z.zScale), "rScale" in z && n(134, nl = z.rScale), "xRange" in z && n(135, qt = z.xRange), "yRange" in z && n(136, Dt = z.yRange), "zRange" in z && n(137, Et = z.zRange), "rRange" in z && n(138, At = z.rRange), "xReverse" in z && n(139, ll = z.xReverse), "yReverse" in z && n(140, rl = z.yReverse), "zReverse" in z && n(141, il = z.zReverse), "rReverse" in z && n(142, ol = z.rReverse), "padding" in z && n(143, al = z.padding), "extents" in z && n(144, fl = z.extents), "flatData" in z && n(145, sl = z.flatData), "custom" in z && n(146, ul = z.custom), "debug" in z && n(147, sr = z.debug), "$$scope" in z && n(152, Bn = z.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[4] & /*yReverse, yScale*/
    65792 && n(150, l = typeof rl > "u" ? typeof en.bandwidth != "function" : rl), e.$$.dirty[3] & /*x*/
    2097152 && rt && n(148, he.x = rt, he), e.$$.dirty[3] & /*y*/
    4194304 && vt && n(148, he.y = vt, he), e.$$.dirty[3] & /*z*/
    8388608 && Ct && n(148, he.z = Ct, he), e.$$.dirty[3] & /*r*/
    16777216 && St && n(148, he.r = St, he), e.$$.dirty[3] & /*xDomain*/
    67108864 && Mt && n(148, he.xDomain = Mt, he), e.$$.dirty[3] & /*yDomain*/
    134217728 && zt && n(148, he.yDomain = zt, he), e.$$.dirty[3] & /*zDomain*/
    268435456 && Lt && n(148, he.zDomain = Lt, he), e.$$.dirty[3] & /*rDomain*/
    536870912 && Rt && n(148, he.rDomain = Rt, he), e.$$.dirty[4] & /*xRange*/
    2048 && qt && n(148, he.xRange = qt, he), e.$$.dirty[4] & /*yRange*/
    4096 && Dt && n(148, he.yRange = Dt, he), e.$$.dirty[4] & /*zRange*/
    8192 && Et && n(148, he.zRange = Et, he), e.$$.dirty[4] & /*rRange*/
    16384 && At && n(148, he.rRange = At, he), e.$$.dirty[3] & /*percentRange*/
    262144 && de(it, dt = wt, dt), e.$$.dirty[0] & /*containerWidth*/
    1 && de(Tt, ct = nt, ct), e.$$.dirty[0] & /*containerHeight*/
    2 && de(Ot, Le = lt, Le), e.$$.dirty[4] & /*extents*/
    1048576 && de(cl, $ = Nr(fl), $), e.$$.dirty[3] & /*data*/
    33554432 && de(dl, be = Nt, be), e.$$.dirty[3] & /*data*/
    33554432 | e.$$.dirty[4] & /*flatData*/
    2097152 && de(tn, te = sl || Nt, te), e.$$.dirty[4] & /*padding*/
    524288 && de(gl, fe = al, fe), e.$$.dirty[3] & /*x*/
    2097152 && de(Pt, F = ft(rt), F), e.$$.dirty[3] & /*y*/
    4194304 && de(Qt, ce = ft(vt), ce), e.$$.dirty[3] & /*z*/
    8388608 && de(jt, K = ft(Ct), K), e.$$.dirty[3] & /*r*/
    16777216 && de(xt, Y = ft(St), Y), e.$$.dirty[3] & /*xDomain*/
    67108864 && de(ml, E = Mt, E), e.$$.dirty[3] & /*yDomain*/
    134217728 && de(bl, re = zt, re), e.$$.dirty[3] & /*zDomain*/
    268435456 && de(_l, ue = Lt, ue), e.$$.dirty[3] & /*rDomain*/
    536870912 && de(hl, ne = Rt, ne), e.$$.dirty[3] & /*xNice*/
    1073741824 && de(nn, H = Wn, H), e.$$.dirty[4] & /*yNice*/
    1 && de(ln, Q = Kn, Q), e.$$.dirty[4] & /*zNice*/
    2 && de(rn, X = Xn, X), e.$$.dirty[4] & /*rNice*/
    4 && de(on, ee = Yn, ee), e.$$.dirty[4] & /*xReverse*/
    32768 && de(an, T = ll, T), e.$$.dirty[4] & /*yReverseValue*/
    67108864 && de(fn, C = l, C), e.$$.dirty[4] & /*zReverse*/
    131072 && de(sn, O = il, O), e.$$.dirty[4] & /*rReverse*/
    262144 && de(un, A = ol, A), e.$$.dirty[4] & /*xPadding*/
    8 && de(cn, V = Un, V), e.$$.dirty[4] & /*yPadding*/
    16 && de(dn, x = Jn, x), e.$$.dirty[4] & /*zPadding*/
    32 && de(gn, D = Zn, D), e.$$.dirty[4] & /*rPadding*/
    64 && de(mn, q = $n, q), e.$$.dirty[4] & /*xRange*/
    2048 && de(yl, N = qt, N), e.$$.dirty[4] & /*yRange*/
    4096 && de(pl, v = Dt, v), e.$$.dirty[4] & /*zRange*/
    8192 && de(kl, y = Et, y), e.$$.dirty[4] & /*rRange*/
    16384 && de(wl, S = At, S), e.$$.dirty[4] & /*xScale*/
    128 && de(bn, p = el, p), e.$$.dirty[4] & /*yScale*/
    256 && de(_n, h = en, h), e.$$.dirty[4] & /*zScale*/
    512 && de(hn, g = tl, g), e.$$.dirty[4] & /*rScale*/
    1024 && de(yn, m = nl, m), e.$$.dirty[4] & /*custom*/
    4194304 && de(Cl, d = ul, d), e.$$.dirty[4] & /*config*/
    16777216 && de(vl, c = he, c), e.$$.dirty[4] & /*context*/
    33554432 && uf("LayerCake", r), e.$$.dirty[0] & /*ssr, $activeGetters_d, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
    1992 | e.$$.dirty[4] & /*$box_d, debug, config*/
    159383552 && u && sr === !0 && (Jt === !0 || typeof window < "u") && fr({
      boundingBox: u,
      activeGetters: s,
      x: he.x,
      y: he.y,
      z: he.z,
      r: he.r,
      xScale: f,
      yScale: a,
      zScale: o,
      rScale: i
    });
  }, n(149, r = {
    activeGetters: Sl,
    width: ot,
    height: at,
    percentRange: it,
    aspectRatio: pr,
    containerWidth: Tt,
    containerHeight: Ot,
    x: Pt,
    y: Qt,
    z: jt,
    r: xt,
    custom: Cl,
    data: dl,
    xNice: nn,
    yNice: ln,
    zNice: rn,
    rNice: on,
    xReverse: an,
    yReverse: fn,
    zReverse: sn,
    rReverse: un,
    xPadding: cn,
    yPadding: dn,
    zPadding: gn,
    rPadding: mn,
    padding: Nl,
    flatData: tn,
    extents: Te,
    xDomain: zl,
    yDomain: Ll,
    zDomain: Rl,
    rDomain: ql,
    xRange: br,
    yRange: _r,
    zRange: hr,
    rRange: yr,
    config: vl,
    xScale: pn,
    xGet: cr,
    yScale: kn,
    yGet: dr,
    zScale: wn,
    zGet: gr,
    rScale: vn,
    rGet: mr
  }), [
    nt,
    lt,
    J,
    Jt,
    Gn,
    Vn,
    i,
    o,
    a,
    f,
    s,
    c,
    d,
    q,
    D,
    x,
    V,
    A,
    O,
    C,
    T,
    ee,
    X,
    Q,
    H,
    Y,
    K,
    ce,
    F,
    te,
    be,
    Le,
    ct,
    dt,
    Xt,
    On,
    Ge,
    Yt,
    Ut,
    gt,
    kt,
    $e,
    et,
    tt,
    Pn,
    Qn,
    jn,
    xn,
    In,
    Fn,
    Hn,
    it,
    Tt,
    Ot,
    cl,
    dl,
    tn,
    gl,
    Pt,
    Qt,
    jt,
    xt,
    ml,
    bl,
    _l,
    hl,
    nn,
    ln,
    rn,
    on,
    an,
    fn,
    sn,
    un,
    cn,
    dn,
    gn,
    mn,
    yl,
    pl,
    kl,
    wl,
    bn,
    _n,
    hn,
    yn,
    vl,
    Cl,
    Sl,
    Nl,
    Ml,
    ot,
    at,
    Te,
    zl,
    Ll,
    Rl,
    ql,
    pn,
    cr,
    kn,
    dr,
    wn,
    gr,
    vn,
    mr,
    br,
    _r,
    hr,
    yr,
    pr,
    wt,
    Zt,
    $t,
    rt,
    vt,
    Ct,
    St,
    Nt,
    Mt,
    zt,
    Lt,
    Rt,
    Wn,
    Kn,
    Xn,
    Yn,
    Un,
    Jn,
    Zn,
    $n,
    el,
    en,
    tl,
    nl,
    qt,
    Dt,
    Et,
    At,
    ll,
    rl,
    il,
    ol,
    al,
    fl,
    sl,
    ul,
    sr,
    he,
    r,
    l,
    u,
    Bn,
    ar,
    Ya,
    Ua
  ];
}
class ir extends ke {
  constructor(t) {
    super(), pe(
      this,
      t,
      nc,
      tc,
      ye,
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
const lc = (e) => ({ element: e & /*element*/
1 }), Bi = (e) => ({ element: (
  /*element*/
  e[0]
) });
function rc(e) {
  let t, n;
  const l = (
    /*#slots*/
    e[11].default
  ), r = Pe(
    l,
    e,
    /*$$scope*/
    e[10],
    Bi
  );
  return {
    c() {
      t = k("div"), r && r.c(), b(t, "class", "layercake-layout-html svelte-1bu60uu"), b(
        t,
        "role",
        /*roleVal*/
        e[6]
      ), b(
        t,
        "aria-label",
        /*label*/
        e[3]
      ), b(
        t,
        "aria-labelledby",
        /*labelledBy*/
        e[4]
      ), b(
        t,
        "aria-describedby",
        /*describedBy*/
        e[5]
      ), le(
        t,
        "z-index",
        /*zIndex*/
        e[1]
      ), le(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[2] === !1 ? "none" : null
      ), le(
        t,
        "top",
        /*$padding*/
        e[7].top + "px"
      ), le(
        t,
        "right",
        /*$padding*/
        e[7].right + "px"
      ), le(
        t,
        "bottom",
        /*$padding*/
        e[7].bottom + "px"
      ), le(
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
      1025) && je(
        r,
        l,
        i,
        /*$$scope*/
        i[10],
        n ? Qe(
          l,
          /*$$scope*/
          i[10],
          o,
          lc
        ) : xe(
          /*$$scope*/
          i[10]
        ),
        Bi
      ), (!n || o & /*roleVal*/
      64) && b(
        t,
        "role",
        /*roleVal*/
        i[6]
      ), (!n || o & /*label*/
      8) && b(
        t,
        "aria-label",
        /*label*/
        i[3]
      ), (!n || o & /*labelledBy*/
      16) && b(
        t,
        "aria-labelledby",
        /*labelledBy*/
        i[4]
      ), (!n || o & /*describedBy*/
      32) && b(
        t,
        "aria-describedby",
        /*describedBy*/
        i[5]
      ), o & /*zIndex*/
      2 && le(
        t,
        "z-index",
        /*zIndex*/
        i[1]
      ), o & /*pointerEvents*/
      4 && le(
        t,
        "pointer-events",
        /*pointerEvents*/
        i[2] === !1 ? "none" : null
      ), o & /*$padding*/
      128 && le(
        t,
        "top",
        /*$padding*/
        i[7].top + "px"
      ), o & /*$padding*/
      128 && le(
        t,
        "right",
        /*$padding*/
        i[7].right + "px"
      ), o & /*$padding*/
      128 && le(
        t,
        "bottom",
        /*$padding*/
        i[7].bottom + "px"
      ), o & /*$padding*/
      128 && le(
        t,
        "left",
        /*$padding*/
        i[7].left + "px"
      );
    },
    i(i) {
      n || (w(r, i), n = !0);
    },
    o(i) {
      R(r, i), n = !1;
    },
    d(i) {
      i && M(t), r && r.d(i), e[12](null);
    }
  };
}
function ic(e, t, n) {
  let l, r, { $$slots: i = {}, $$scope: o } = t;
  const { padding: a } = An("LayerCake");
  j(e, a, (p) => n(7, r = p));
  let { element: f = void 0 } = t, { zIndex: s = void 0 } = t, { pointerEvents: u = void 0 } = t, { role: c = void 0 } = t, { label: d = void 0 } = t, { labelledBy: m = void 0 } = t, { describedBy: g = void 0 } = t;
  function h(p) {
    Me[p ? "unshift" : "push"](() => {
      f = p, n(0, f);
    });
  }
  return e.$$set = (p) => {
    "element" in p && n(0, f = p.element), "zIndex" in p && n(1, s = p.zIndex), "pointerEvents" in p && n(2, u = p.pointerEvents), "role" in p && n(9, c = p.role), "label" in p && n(3, d = p.label), "labelledBy" in p && n(4, m = p.labelledBy), "describedBy" in p && n(5, g = p.describedBy), "$$scope" in p && n(10, o = p.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*role, label, labelledBy, describedBy*/
    568 && n(6, l = c || (d || m || g ? "figure" : void 0));
  }, [
    f,
    s,
    u,
    d,
    m,
    g,
    l,
    r,
    a,
    c,
    o,
    i,
    h
  ];
}
class Aa extends ke {
  constructor(t) {
    super(), pe(this, t, ic, rc, ye, {
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
const oc = (e) => ({ element: e & /*element*/
1 }), Gi = (e) => ({ element: (
  /*element*/
  e[0]
) }), ac = (e) => ({ element: e & /*element*/
1 }), Vi = (e) => ({ element: (
  /*element*/
  e[0]
) }), fc = (e) => ({ element: e & /*element*/
1 }), Wi = (e) => ({ element: (
  /*element*/
  e[0]
) });
function Ki(e) {
  let t, n;
  return {
    c() {
      t = Se("title"), n = I(
        /*title*/
        e[8]
      );
    },
    m(l, r) {
      L(l, t, r), _(t, n);
    },
    p(l, r) {
      r & /*title*/
      256 && ae(
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
function sc(e) {
  let t, n = (
    /*title*/
    e[8] && Ki(e)
  );
  return {
    c() {
      n && n.c(), t = _e();
    },
    m(l, r) {
      n && n.m(l, r), L(l, t, r);
    },
    p(l, r) {
      /*title*/
      l[8] ? n ? n.p(l, r) : (n = Ki(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(l) {
      n && n.d(l), l && M(t);
    }
  };
}
function uc(e) {
  let t, n, l, r, i;
  const o = (
    /*#slots*/
    e[16].title
  ), a = Pe(
    o,
    e,
    /*$$scope*/
    e[15],
    Wi
  ), f = a || sc(e), s = (
    /*#slots*/
    e[16].defs
  ), u = Pe(
    s,
    e,
    /*$$scope*/
    e[15],
    Vi
  ), c = (
    /*#slots*/
    e[16].default
  ), d = Pe(
    c,
    e,
    /*$$scope*/
    e[15],
    Gi
  );
  return {
    c() {
      t = Se("svg"), f && f.c(), n = Se("defs"), u && u.c(), l = Se("g"), d && d.c(), b(l, "class", "layercake-layout-svg_g"), b(l, "transform", r = "translate(" + /*$padding*/
      e[11].left + ", " + /*$padding*/
      e[11].top + ")"), b(t, "class", "layercake-layout-svg svelte-u84d8d"), b(
        t,
        "viewBox",
        /*viewBox*/
        e[4]
      ), b(
        t,
        "width",
        /*$containerWidth*/
        e[9]
      ), b(
        t,
        "height",
        /*$containerHeight*/
        e[10]
      ), b(
        t,
        "aria-label",
        /*label*/
        e[5]
      ), b(
        t,
        "aria-labelledby",
        /*labelledBy*/
        e[6]
      ), b(
        t,
        "aria-describedby",
        /*describedBy*/
        e[7]
      ), le(
        t,
        "z-index",
        /*zIndex*/
        e[2]
      ), le(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[3] === !1 ? "none" : null
      );
    },
    m(m, g) {
      L(m, t, g), f && f.m(t, null), _(t, n), u && u.m(n, null), _(t, l), d && d.m(l, null), e[17](l), e[18](t), i = !0;
    },
    p(m, [g]) {
      a ? a.p && (!i || g & /*$$scope, element*/
      32769) && je(
        a,
        o,
        m,
        /*$$scope*/
        m[15],
        i ? Qe(
          o,
          /*$$scope*/
          m[15],
          g,
          fc
        ) : xe(
          /*$$scope*/
          m[15]
        ),
        Wi
      ) : f && f.p && (!i || g & /*title*/
      256) && f.p(m, i ? g : -1), u && u.p && (!i || g & /*$$scope, element*/
      32769) && je(
        u,
        s,
        m,
        /*$$scope*/
        m[15],
        i ? Qe(
          s,
          /*$$scope*/
          m[15],
          g,
          ac
        ) : xe(
          /*$$scope*/
          m[15]
        ),
        Vi
      ), d && d.p && (!i || g & /*$$scope, element*/
      32769) && je(
        d,
        c,
        m,
        /*$$scope*/
        m[15],
        i ? Qe(
          c,
          /*$$scope*/
          m[15],
          g,
          oc
        ) : xe(
          /*$$scope*/
          m[15]
        ),
        Gi
      ), (!i || g & /*$padding*/
      2048 && r !== (r = "translate(" + /*$padding*/
      m[11].left + ", " + /*$padding*/
      m[11].top + ")")) && b(l, "transform", r), (!i || g & /*viewBox*/
      16) && b(
        t,
        "viewBox",
        /*viewBox*/
        m[4]
      ), (!i || g & /*$containerWidth*/
      512) && b(
        t,
        "width",
        /*$containerWidth*/
        m[9]
      ), (!i || g & /*$containerHeight*/
      1024) && b(
        t,
        "height",
        /*$containerHeight*/
        m[10]
      ), (!i || g & /*label*/
      32) && b(
        t,
        "aria-label",
        /*label*/
        m[5]
      ), (!i || g & /*labelledBy*/
      64) && b(
        t,
        "aria-labelledby",
        /*labelledBy*/
        m[6]
      ), (!i || g & /*describedBy*/
      128) && b(
        t,
        "aria-describedby",
        /*describedBy*/
        m[7]
      ), g & /*zIndex*/
      4 && le(
        t,
        "z-index",
        /*zIndex*/
        m[2]
      ), g & /*pointerEvents*/
      8 && le(
        t,
        "pointer-events",
        /*pointerEvents*/
        m[3] === !1 ? "none" : null
      );
    },
    i(m) {
      i || (w(f, m), w(u, m), w(d, m), i = !0);
    },
    o(m) {
      R(f, m), R(u, m), R(d, m), i = !1;
    },
    d(m) {
      m && M(t), f && f.d(m), u && u.d(m), d && d.d(m), e[17](null), e[18](null);
    }
  };
}
function cc(e, t, n) {
  let l, r, i, { $$slots: o = {}, $$scope: a } = t, { element: f = void 0 } = t, { innerElement: s = void 0 } = t, { zIndex: u = void 0 } = t, { pointerEvents: c = void 0 } = t, { viewBox: d = void 0 } = t, { label: m = void 0 } = t, { labelledBy: g = void 0 } = t, { describedBy: h = void 0 } = t, { title: p = void 0 } = t;
  const { containerWidth: S, containerHeight: y, padding: v } = An("LayerCake");
  j(e, S, (D) => n(9, l = D)), j(e, y, (D) => n(10, r = D)), j(e, v, (D) => n(11, i = D));
  function N(D) {
    Me[D ? "unshift" : "push"](() => {
      s = D, n(1, s);
    });
  }
  function q(D) {
    Me[D ? "unshift" : "push"](() => {
      f = D, n(0, f);
    });
  }
  return e.$$set = (D) => {
    "element" in D && n(0, f = D.element), "innerElement" in D && n(1, s = D.innerElement), "zIndex" in D && n(2, u = D.zIndex), "pointerEvents" in D && n(3, c = D.pointerEvents), "viewBox" in D && n(4, d = D.viewBox), "label" in D && n(5, m = D.label), "labelledBy" in D && n(6, g = D.labelledBy), "describedBy" in D && n(7, h = D.describedBy), "title" in D && n(8, p = D.title), "$$scope" in D && n(15, a = D.$$scope);
  }, [
    f,
    s,
    u,
    c,
    d,
    m,
    g,
    h,
    p,
    l,
    r,
    i,
    S,
    y,
    v,
    a,
    o,
    N,
    q
  ];
}
class Ta extends ke {
  constructor(t) {
    super(), pe(this, t, cc, uc, ye, {
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
function Xi(e, t, n) {
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
function Yi(e) {
  let t, n = (
    /*yValue*/
    e[34] + ""
  ), l, r, i;
  return {
    c() {
      t = Se("text"), l = I(n), b(t, "x", r = /*xPos*/
      e[32] + /*colWidth*/
      e[33] / 2), b(t, "y", i = /*$height*/
      e[12] - /*colHeight*/
      e[30] - 5), b(t, "text-anchor", "middle"), b(t, "class", "svelte-1c28ck9");
    },
    m(o, a) {
      L(o, t, a), _(t, l);
    },
    p(o, a) {
      a[0] & /*$y, $data*/
      1280 && n !== (n = /*yValue*/
      o[34] + "") && ae(l, n), a[0] & /*$xGet, $data, $xScale, columnWidth*/
      904 && r !== (r = /*xPos*/
      o[32] + /*colWidth*/
      o[33] / 2) && b(t, "x", r), a[0] & /*$height, columnHeight, $data*/
      4416 && i !== (i = /*$height*/
      o[12] - /*colHeight*/
      o[30] - 5) && b(t, "y", i);
    },
    d(o) {
      o && M(t);
    }
  };
}
function Ui(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, g, h;
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
  let S = (
    /*showLabels*/
    e[1] && /*yValue*/
    e[34] && Yi(e)
  );
  return {
    c() {
      t = Se("rect"), u = Se("rect"), S && S.c(), m = _e(), b(t, "class", "group-rect svelte-1c28ck9"), b(
        t,
        "data-id",
        /*i*/
        e[36]
      ), b(t, "data-range", n = /*$x*/
      e[11](
        /*d*/
        e[29]
      )), b(t, "data-count", l = /*yValue*/
      e[34]), b(t, "x", r = /*xPos*/
      e[32]), b(t, "y", i = /*$yGet*/
      e[2](
        /*d*/
        e[29]
      )), b(t, "width", o = /*colWidth*/
      e[33]), b(t, "height", a = /*colHeight*/
      e[30]), b(
        t,
        "fill",
        /*fill*/
        e[0]
      ), b(t, "stroke", f = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Ji : "none"), b(t, "stroke-width", s = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Zi : 0), se(
        t,
        "animated",
        /*loaded*/
        e[5]
      ), b(u, "class", "hover-zone svelte-1c28ck9"), b(u, "x", c = /*xPos*/
      e[32]), b(u, "y", 0), b(u, "width", d = /*colWidth*/
      e[33]), b(
        u,
        "height",
        /*$height*/
        e[12]
      ), b(u, "fill", "none"), b(u, "stroke", "none");
    },
    m(y, v) {
      L(y, t, v), L(y, u, v), S && S.m(y, v), L(y, m, v), g || (h = [
        U(u, "mouseenter", p),
        U(
          u,
          "mouseleave",
          /*mouseleave_handler*/
          e[24]
        )
      ], g = !0);
    },
    p(y, v) {
      e = y, v[0] & /*$x, $data*/
      2304 && n !== (n = /*$x*/
      e[11](
        /*d*/
        e[29]
      )) && b(t, "data-range", n), v[0] & /*$y, $data*/
      1280 && l !== (l = /*yValue*/
      e[34]) && b(t, "data-count", l), v[0] & /*$xGet, $data*/
      264 && r !== (r = /*xPos*/
      e[32]) && b(t, "x", r), v[0] & /*$yGet, $data*/
      260 && i !== (i = /*$yGet*/
      e[2](
        /*d*/
        e[29]
      )) && b(t, "y", i), v[0] & /*$xScale, columnWidth, $data*/
      896 && o !== (o = /*colWidth*/
      e[33]) && b(t, "width", o), v[0] & /*columnHeight, $data*/
      320 && a !== (a = /*colHeight*/
      e[30]) && b(t, "height", a), v[0] & /*fill*/
      1 && b(
        t,
        "fill",
        /*fill*/
        e[0]
      ), v[0] & /*hoveredIndex*/
      16 && f !== (f = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Ji : "none") && b(t, "stroke", f), v[0] & /*hoveredIndex*/
      16 && s !== (s = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Zi : 0) && b(t, "stroke-width", s), v[0] & /*loaded*/
      32 && se(
        t,
        "animated",
        /*loaded*/
        e[5]
      ), v[0] & /*$xGet, $data*/
      264 && c !== (c = /*xPos*/
      e[32]) && b(u, "x", c), v[0] & /*$xScale, columnWidth, $data*/
      896 && d !== (d = /*colWidth*/
      e[33]) && b(u, "width", d), v[0] & /*$height*/
      4096 && b(
        u,
        "height",
        /*$height*/
        e[12]
      ), /*showLabels*/
      e[1] && /*yValue*/
      e[34] ? S ? S.p(e, v) : (S = Yi(e), S.c(), S.m(m.parentNode, m)) : S && (S.d(1), S = null);
    },
    d(y) {
      y && M(t), y && M(u), S && S.d(y), y && M(m), g = !1, we(h);
    }
  };
}
function dc(e) {
  let t, n = (
    /*$data*/
    e[8]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Ui(Xi(e, n, r));
  return {
    c() {
      t = Se("g");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      b(t, "class", "column-group");
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
          const a = Xi(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = Ui(a), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    i: Z,
    o: Z,
    d(r) {
      r && M(t), Ee(l, r);
    }
  };
}
const Ji = "#333", Zi = 1;
function gc(e, t, n) {
  let l, r, i, o, a, f, s, u, c, d;
  const m = ba(), { data: g, xGet: h, yGet: p, x: S, yRange: y, xScale: v, y: N, height: q, zGet: D, zScale: x, z: V, custom: A } = An("LayerCake");
  j(e, g, (H) => n(8, f = H)), j(e, h, (H) => n(3, a = H)), j(e, p, (H) => n(2, i = H)), j(e, S, (H) => n(11, c = H)), j(e, y, (H) => n(22, o = H)), j(e, v, (H) => n(9, s = H)), j(e, N, (H) => n(10, u = H)), j(e, q, (H) => n(12, d = H));
  let { fill: O = "#00e047" } = t, { showLabels: C = !1 } = t, T = null;
  pt(() => {
    setTimeout(() => n(5, ee = !0), 100);
  });
  let ee = !1;
  const X = (H, ne) => {
    n(4, T = H), m("hover", ne);
  }, Q = () => {
    n(4, T = null), m("hover", null);
  };
  return e.$$set = (H) => {
    "fill" in H && n(0, O = H.fill), "showLabels" in H && n(1, C = H.showLabels);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*$xGet*/
    8 && n(7, l = (H) => {
      const ne = a(H);
      return Math.abs(ne[1] - ne[0]);
    }), e.$$.dirty[0] & /*$yRange, $yGet*/
    4194308 && n(6, r = (H) => o[0] - i(H));
  }, [
    O,
    C,
    i,
    a,
    T,
    ee,
    r,
    l,
    f,
    s,
    u,
    c,
    d,
    m,
    g,
    h,
    p,
    S,
    y,
    v,
    N,
    q,
    o,
    X,
    Q
  ];
}
class Oa extends ke {
  constructor(t) {
    super(), pe(this, t, gc, dc, ye, { fill: 0, showLabels: 1 }, null, [-1, -1]);
  }
}
function $i(e, t, n) {
  const l = e.slice();
  return l[28] = t[n], l[30] = n, l;
}
function eo(e) {
  let t, n, l;
  return {
    c() {
      t = Se("line"), b(t, "y1", n = /*$height*/
      e[15] * -1), b(t, "y2", "0"), b(t, "x1", "0"), b(t, "x2", "0"), b(t, "stroke-width", l = /*tick*/
      e[28] == 0 ? 2 : 1), b(t, "class", "svelte-rkqqab"), se(
        t,
        "gridline",
        /*tick*/
        e[28] != 0
      ), se(
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
      r[15] * -1) && b(t, "y1", n), i & /*tickVals*/
      8192 && l !== (l = /*tick*/
      r[28] == 0 ? 2 : 1) && b(t, "stroke-width", l), i & /*tickVals*/
      8192 && se(
        t,
        "gridline",
        /*tick*/
        r[28] != 0
      ), i & /*tickVals*/
      8192 && se(
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
function to(e) {
  let t, n, l;
  return {
    c() {
      t = Se("line"), b(t, "class", "tick-mark svelte-rkqqab"), b(t, "y1", 0), b(t, "y2", 6), b(t, "x1", n = /*xTick*/
      e[5] || /*isBandwidth*/
      e[11] ? (
        /*$xScale*/
        e[12].bandwidth() / 2
      ) : 0), b(t, "x2", l = /*xTick*/
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
      ) : 0) && b(t, "x1", n), i & /*xTick, isBandwidth, $xScale*/
      6176 && l !== (l = /*xTick*/
      r[5] || /*isBandwidth*/
      r[11] ? (
        /*$xScale*/
        r[12].bandwidth() / 2
      ) : 0) && b(t, "x2", l);
    },
    d(r) {
      r && M(t);
    }
  };
}
function no(e) {
  let t, n, l, r = (
    /*formatTick*/
    e[4](
      /*tick*/
      e[28]
    ) + ""
  ), i, o, a, f, s, u, c = (
    /*gridlines*/
    e[0] !== !1 && eo(e)
  ), d = (
    /*tickMarks*/
    e[1] === !0 && to(e)
  );
  return {
    c() {
      t = Se("g"), c && c.c(), n = _e(), d && d.c(), l = Se("text"), i = I(r), b(l, "x", o = /*xTick*/
      e[5] || /*isBandwidth*/
      e[11] ? (
        /*$xScale*/
        e[12].bandwidth() / 2
      ) : 0), b(l, "y", a = /*yTick*/
      e[6] - /*angle*/
      (e[10] ? 4 : 0)), b(l, "dx", ""), b(l, "dy", ""), b(l, "transform", f = /*angle*/
      e[10] ? "rotate(-45)" : ""), le(
        l,
        "fill",
        /*color*/
        e[9]
      ), b(l, "text-anchor", s = /*textAnchor*/
      e[24](
        /*tick*/
        e[28]
      )), b(l, "class", "svelte-rkqqab"), b(t, "class", "tick tick-" + /*i*/
      e[30] + " svelte-rkqqab"), b(t, "transform", u = "translate(" + /*$xScale*/
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
    m(m, g) {
      L(m, t, g), c && c.m(t, null), _(t, n), d && d.m(t, null), _(t, l), _(l, i);
    },
    p(m, g) {
      /*gridlines*/
      m[0] !== !1 ? c ? c.p(m, g) : (c = eo(m), c.c(), c.m(t, n)) : c && (c.d(1), c = null), /*tickMarks*/
      m[1] === !0 ? d ? d.p(m, g) : (d = to(m), d.c(), d.m(t, l)) : d && (d.d(1), d = null), g & /*formatTick, tickVals*/
      8208 && r !== (r = /*formatTick*/
      m[4](
        /*tick*/
        m[28]
      ) + "") && ae(i, r), g & /*xTick, isBandwidth, $xScale*/
      6176 && o !== (o = /*xTick*/
      m[5] || /*isBandwidth*/
      m[11] ? (
        /*$xScale*/
        m[12].bandwidth() / 2
      ) : 0) && b(l, "x", o), g & /*yTick, angle*/
      1088 && a !== (a = /*yTick*/
      m[6] - /*angle*/
      (m[10] ? 4 : 0)) && b(l, "y", a), g & /*angle*/
      1024 && f !== (f = /*angle*/
      m[10] ? "rotate(-45)" : "") && b(l, "transform", f), g & /*color*/
      512 && le(
        l,
        "fill",
        /*color*/
        m[9]
      ), g & /*tickVals*/
      8192 && s !== (s = /*textAnchor*/
      m[24](
        /*tick*/
        m[28]
      )) && b(l, "text-anchor", s), g & /*$xScale, tickVals, $yRange*/
      28672 && u !== (u = "translate(" + /*$xScale*/
      m[12](
        /*tick*/
        m[28]
      ) + "," + Math.max(
        /*$yRange*/
        m[14][0],
        /*$yRange*/
        m[14][1]
      ) + ")") && b(t, "transform", u);
    },
    d(m) {
      m && M(t), c && c.d(), d && d.d();
    }
  };
}
function lo(e) {
  let t, n, l;
  return {
    c() {
      t = Se("line"), b(t, "class", "baseline svelte-rkqqab"), b(t, "y1", n = /*$height*/
      e[15] + 0.5), b(t, "y2", l = /*$height*/
      e[15] + 0.5), b(t, "x1", "0"), b(
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
      r[15] + 0.5) && b(t, "y1", n), i & /*$height*/
      32768 && l !== (l = /*$height*/
      r[15] + 0.5) && b(t, "y2", l), i & /*$width*/
      65536 && b(
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
function ro(e) {
  let t, n, l, r;
  return {
    c() {
      t = Se("text"), b(t, "x", n = /*labelLeft*/
      e[8] ? (
        /*$xRange*/
        e[17][0] - 4 - 12
      ) : (
        /*$width*/
        e[16] * 0.5
      )), b(
        t,
        "y",
        /*$height*/
        e[15]
      ), b(t, "dy", l = /*labelLeft*/
      e[8] ? "18px" : "36px"), b(t, "text-anchor", r = /*labelLeft*/
      e[8] ? "end" : "middle"), le(
        t,
        "fill",
        /*color*/
        e[9]
      ), b(t, "class", "axis-label svelte-rkqqab");
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
      )) && b(t, "x", n), o & /*$height*/
      32768 && b(
        t,
        "y",
        /*$height*/
        i[15]
      ), o & /*labelLeft*/
      256 && l !== (l = /*labelLeft*/
      i[8] ? "18px" : "36px") && b(t, "dy", l), o & /*labelLeft*/
      256 && r !== (r = /*labelLeft*/
      i[8] ? "end" : "middle") && b(t, "text-anchor", r), o & /*color*/
      512 && le(
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
function mc(e) {
  let t, n, l, r = (
    /*tickVals*/
    e[13]
  ), i = [];
  for (let f = 0; f < r.length; f += 1)
    i[f] = no($i(e, r, f));
  let o = (
    /*baseline*/
    e[2] === !0 && lo(e)
  ), a = !!/*label*/
  e[7] && ro(e);
  return {
    c() {
      t = Se("g");
      for (let f = 0; f < i.length; f += 1)
        i[f].c();
      n = _e(), o && o.c(), l = _e(), a && a.c(), b(t, "class", "axis x-axis svelte-rkqqab"), se(
        t,
        "snapTicks",
        /*snapTicks*/
        e[3]
      );
    },
    m(f, s) {
      L(f, t, s);
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(t, null);
      _(t, n), o && o.m(t, null), _(t, l), a && a.m(t, null);
    },
    p(f, [s]) {
      if (s & /*$xScale, tickVals, Math, $yRange, xTick, isBandwidth, yTick, angle, color, textAnchor, formatTick, tickMarks, $height, gridlines*/
      16842355) {
        r = /*tickVals*/
        f[13];
        let u;
        for (u = 0; u < r.length; u += 1) {
          const c = $i(f, r, u);
          i[u] ? i[u].p(c, s) : (i[u] = no(c), i[u].c(), i[u].m(t, n));
        }
        for (; u < i.length; u += 1)
          i[u].d(1);
        i.length = r.length;
      }
      /*baseline*/
      f[2] === !0 ? o ? o.p(f, s) : (o = lo(f), o.c(), o.m(t, l)) : o && (o.d(1), o = null), /*label*/
      f[7] ? a ? a.p(f, s) : (a = ro(f), a.c(), a.m(t, null)) : a && (a.d(1), a = null), s & /*snapTicks*/
      8 && se(
        t,
        "snapTicks",
        /*snapTicks*/
        f[3]
      );
    },
    i: Z,
    o: Z,
    d(f) {
      f && M(t), Ee(i, f), o && o.d(), a && a.d();
    }
  };
}
function bc(e, t, n) {
  let l, r, i, o, a, f, s, u;
  const { width: c, height: d, xRange: m, padding: g, xScale: h, xDomain: p, yRange: S } = An("LayerCake");
  j(e, c, (Q) => n(16, s = Q)), j(e, d, (Q) => n(15, f = Q)), j(e, m, (Q) => n(17, u = Q)), j(e, h, (Q) => n(12, o = Q)), j(e, p, (Q) => n(26, i = Q)), j(e, S, (Q) => n(14, a = Q));
  let { gridlines: y = !0 } = t, { tickMarks: v = !1 } = t, { baseline: N = !1 } = t, { snapTicks: q = !1 } = t, { formatTick: D = (Q) => Q } = t, { ticks: x = void 0 } = t, { xTick: V = 0 } = t, { yTick: A = 16 } = t, { label: O = "" } = t, { labelLeft: C = !1 } = t, { color: T = "#333" } = t, { angle: ee = !1 } = t;
  function X(Q) {
    if (ee)
      return "end";
    if (q === !0) {
      if (Q == i[0])
        return "start";
      if (Q == i[1])
        return "end";
    }
    return "middle";
  }
  return e.$$set = (Q) => {
    "gridlines" in Q && n(0, y = Q.gridlines), "tickMarks" in Q && n(1, v = Q.tickMarks), "baseline" in Q && n(2, N = Q.baseline), "snapTicks" in Q && n(3, q = Q.snapTicks), "formatTick" in Q && n(4, D = Q.formatTick), "ticks" in Q && n(25, x = Q.ticks), "xTick" in Q && n(5, V = Q.xTick), "yTick" in Q && n(6, A = Q.yTick), "label" in Q && n(7, O = Q.label), "labelLeft" in Q && n(8, C = Q.labelLeft), "color" in Q && n(9, T = Q.color), "angle" in Q && n(10, ee = Q.angle);
  }, e.$$.update = () => {
    e.$$.dirty & /*$xScale*/
    4096 && n(11, l = typeof o.bandwidth == "function"), e.$$.dirty & /*ticks, isBandwidth, $xScale*/
    33560576 && n(13, r = Array.isArray(x) ? x : l ? o.domain() : typeof x == "function" ? x(o.ticks()) : o.ticks(x));
  }, [
    y,
    v,
    N,
    q,
    D,
    V,
    A,
    O,
    C,
    T,
    ee,
    l,
    o,
    r,
    a,
    f,
    s,
    u,
    c,
    d,
    m,
    h,
    p,
    S,
    X,
    x
  ];
}
class Pa extends ke {
  constructor(t) {
    super(), pe(this, t, bc, mc, ye, {
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
const _c = (e) => ({}), io = (e) => ({}), hc = (e) => ({}), oo = (e) => ({});
function yc(e) {
  let t, n, l, r, i, o, a, f, s = !!/*title*/
  e[3] && ao(e), u = (
    /*loaded*/
    e[9] && /*histBins*/
    e[8].length > 0 && fo(e)
  );
  const c = [Cc, vc], d = [];
  function m(g, h) {
    return (
      /*$$slots*/
      g[12].caption ? 1 : 0
    );
  }
  return o = m(e), a = d[o] = c[o](e), {
    c() {
      t = k("div"), s && s.c(), n = P(), l = k("div"), u && u.c(), r = P(), i = k("div"), a.c(), le(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), le(l, "height", "16px"), b(i, "class", "text-xs text-gray-800 dark:text-gray-200 truncate"), se(i, "mt-1", !/*horizontalLayout*/
      e[4]), b(t, "class", "gap-1 items-center"), se(
        t,
        "flex",
        /*horizontalLayout*/
        e[4]
      ), se(
        t,
        "my-0.5",
        /*horizontalLayout*/
        e[4]
      );
    },
    m(g, h) {
      L(g, t, h), s && s.m(t, null), _(t, n), _(t, l), u && u.m(l, null), _(t, r), _(t, i), d[o].m(i, null), f = !0;
    },
    p(g, h) {
      /*title*/
      g[3] ? s ? s.p(g, h) : (s = ao(g), s.c(), s.m(t, n)) : s && (s.d(1), s = null), /*loaded*/
      g[9] && /*histBins*/
      g[8].length > 0 ? u ? (u.p(g, h), h & /*loaded, histBins*/
      768 && w(u, 1)) : (u = fo(g), u.c(), w(u, 1), u.m(l, null)) : u && (ie(), R(u, 1, 1, () => {
        u = null;
      }), oe()), (!f || h & /*width*/
      1) && le(
        l,
        "width",
        /*width*/
        g[0] == null ? "100%" : `${/*width*/
        g[0]}px`
      );
      let p = o;
      o = m(g), o === p ? d[o].p(g, h) : (ie(), R(d[p], 1, 1, () => {
        d[p] = null;
      }), oe(), a = d[o], a ? a.p(g, h) : (a = d[o] = c[o](g), a.c()), w(a, 1), a.m(i, null)), (!f || h & /*horizontalLayout*/
      16) && se(i, "mt-1", !/*horizontalLayout*/
      g[4]), (!f || h & /*horizontalLayout*/
      16) && se(
        t,
        "flex",
        /*horizontalLayout*/
        g[4]
      ), (!f || h & /*horizontalLayout*/
      16) && se(
        t,
        "my-0.5",
        /*horizontalLayout*/
        g[4]
      );
    },
    i(g) {
      f || (w(u), w(a), f = !0);
    },
    o(g) {
      R(u), R(a), f = !1;
    },
    d(g) {
      g && M(t), s && s.d(), u && u.d(), d[o].d();
    }
  };
}
function pc(e) {
  let t, n, l, r, i, o, a, f = !!/*title*/
  e[3] && so(e), s = (
    /*loaded*/
    e[9] && /*histBins*/
    e[8].length > 0 && uo(e)
  );
  const u = [qc, Rc], c = [];
  function d(m, g) {
    return (
      /*$$slots*/
      m[12].caption ? 1 : 0
    );
  }
  return i = d(e), o = c[i] = u[i](e), {
    c() {
      f && f.c(), t = P(), n = k("div"), s && s.c(), l = P(), r = k("div"), o.c(), le(
        n,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), le(n, "height", "16px"), b(r, "class", "text-xs text-gray-800 dark:text-gray-200 truncate"), se(r, "mt-1", !/*horizontalLayout*/
      e[4]);
    },
    m(m, g) {
      f && f.m(m, g), L(m, t, g), L(m, n, g), s && s.m(n, null), L(m, l, g), L(m, r, g), c[i].m(r, null), a = !0;
    },
    p(m, g) {
      /*title*/
      m[3] ? f ? f.p(m, g) : (f = so(m), f.c(), f.m(t.parentNode, t)) : f && (f.d(1), f = null), /*loaded*/
      m[9] && /*histBins*/
      m[8].length > 0 ? s ? (s.p(m, g), g & /*loaded, histBins*/
      768 && w(s, 1)) : (s = uo(m), s.c(), w(s, 1), s.m(n, null)) : s && (ie(), R(s, 1, 1, () => {
        s = null;
      }), oe()), (!a || g & /*width*/
      1) && le(
        n,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let h = i;
      i = d(m), i === h ? c[i].p(m, g) : (ie(), R(c[h], 1, 1, () => {
        c[h] = null;
      }), oe(), o = c[i], o ? o.p(m, g) : (o = c[i] = u[i](m), o.c()), w(o, 1), o.m(r, null)), (!a || g & /*horizontalLayout*/
      16) && se(r, "mt-1", !/*horizontalLayout*/
      m[4]);
    },
    i(m) {
      a || (w(s), w(o), a = !0);
    },
    o(m) {
      R(s), R(o), a = !1;
    },
    d(m) {
      f && f.d(m), m && M(t), m && M(n), s && s.d(), m && M(l), m && M(r), c[i].d();
    }
  };
}
function ao(e) {
  let t, n;
  return {
    c() {
      t = k("div"), n = I(
        /*title*/
        e[3]
      ), b(t, "class", "font-bold text-xs truncate text-right"), le(t, "width", "96px");
    },
    m(l, r) {
      L(l, t, r), _(t, n);
    },
    p(l, r) {
      r & /*title*/
      8 && ae(
        n,
        /*title*/
        l[3]
      );
    },
    d(l) {
      l && M(t);
    }
  };
}
function fo(e) {
  let t, n;
  return t = new ir({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: Br().round(!0),
      xDomain: (
        /*histBins*/
        e[8]
      ),
      yScale: st(),
      yDomain: [0, null],
      data: (
        /*data*/
        e[7]
      ),
      custom: { hoveredGet: (
        /*func_2*/
        e[20]
      ) },
      $$slots: { default: [wc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
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
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function kc(e) {
  let t, n, l, r;
  return t = new Oa({ props: { fill: (
    /*color*/
    e[6]
  ) } }), t.$on(
    "hover",
    /*hover_handler_1*/
    e[19]
  ), l = new Pa({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      W(t.$$.fragment), n = P(), W(l.$$.fragment);
    },
    m(i, o) {
      B(t, i, o), L(i, n, o), B(l, i, o), r = !0;
    },
    p(i, o) {
      const a = {};
      o & /*color*/
      64 && (a.fill = /*color*/
      i[6]), t.$set(a);
    },
    i(i) {
      r || (w(t.$$.fragment, i), w(l.$$.fragment, i), r = !0);
    },
    o(i) {
      R(t.$$.fragment, i), R(l.$$.fragment, i), r = !1;
    },
    d(i) {
      G(t, i), i && M(n), G(l, i);
    }
  };
}
function wc(e) {
  let t, n;
  return t = new Ta({
    props: {
      $$slots: { default: [kc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*$$scope, color, hoveredBin*/
      4195392 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function vc(e) {
  let t;
  const n = (
    /*#slots*/
    e[15].caption
  ), l = Pe(
    n,
    e,
    /*$$scope*/
    e[22],
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
      4194304) && je(
        l,
        n,
        r,
        /*$$scope*/
        r[22],
        t ? Qe(
          n,
          /*$$scope*/
          r[22],
          i,
          _c
        ) : xe(
          /*$$scope*/
          r[22]
        ),
        io
      );
    },
    i(r) {
      t || (w(l, r), t = !0);
    },
    o(r) {
      R(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function Cc(e) {
  let t;
  function n(i, o) {
    return (
      /*hoveredBin*/
      i[10] != null ? Mc : (
        /*mean*/
        i[1] != null ? Nc : Sc
      )
    );
  }
  let l = n(e), r = l(e);
  return {
    c() {
      r.c(), t = _e();
    },
    m(i, o) {
      r.m(i, o), L(i, t, o);
    },
    p(i, o) {
      l === (l = n(i)) && r ? r.p(i, o) : (r.d(1), r = l(i), r && (r.c(), r.m(t.parentNode, t)));
    },
    i: Z,
    o: Z,
    d(i) {
      r.d(i), i && M(t);
    }
  };
}
function Sc(e) {
  let t;
  return {
    c() {
      t = I(" ");
    },
    m(n, l) {
      L(n, t, l);
    },
    p: Z,
    d(n) {
      n && M(t);
    }
  };
}
function Nc(e) {
  let t, n, l = Ce(".3")(
    /*mean*/
    e[1]
  ) + "", r, i = /*unit*/ e[2] ? " " + /*unit*/
  e[2] : "", o;
  return {
    c() {
      t = I("M = "), n = k("strong"), r = I(l), o = I(i);
    },
    m(a, f) {
      L(a, t, f), L(a, n, f), _(n, r), _(n, o);
    },
    p(a, f) {
      f & /*mean*/
      2 && l !== (l = Ce(".3")(
        /*mean*/
        a[1]
      ) + "") && ae(r, l), f & /*unit*/
      4 && i !== (i = /*unit*/
      a[2] ? " " + /*unit*/
      a[2] : "") && ae(o, i);
    },
    d(a) {
      a && M(t), a && M(n);
    }
  };
}
function Mc(e) {
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
      n = I(t);
    },
    m(l, r) {
      L(l, n, r);
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
      ) + "") && ae(n, t);
    },
    d(l) {
      l && M(n);
    }
  };
}
function so(e) {
  let t, n;
  return {
    c() {
      t = k("div"), n = I(
        /*title*/
        e[3]
      ), b(t, "class", "font-bold text-xs truncate text-right");
    },
    m(l, r) {
      L(l, t, r), _(t, n);
    },
    p(l, r) {
      r & /*title*/
      8 && ae(
        n,
        /*title*/
        l[3]
      );
    },
    d(l) {
      l && M(t);
    }
  };
}
function uo(e) {
  let t, n;
  return t = new ir({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: Br().round(!0),
      xDomain: (
        /*histBins*/
        e[8]
      ),
      yScale: st(),
      yDomain: [0, null],
      data: (
        /*data*/
        e[7]
      ),
      custom: { hoveredGet: (
        /*func*/
        e[17]
      ) },
      $$slots: { default: [Lc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
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
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function zc(e) {
  let t, n, l, r;
  return t = new Oa({ props: { fill: (
    /*color*/
    e[6]
  ) } }), t.$on(
    "hover",
    /*hover_handler*/
    e[16]
  ), l = new Pa({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      W(t.$$.fragment), n = P(), W(l.$$.fragment);
    },
    m(i, o) {
      B(t, i, o), L(i, n, o), B(l, i, o), r = !0;
    },
    p(i, o) {
      const a = {};
      o & /*color*/
      64 && (a.fill = /*color*/
      i[6]), t.$set(a);
    },
    i(i) {
      r || (w(t.$$.fragment, i), w(l.$$.fragment, i), r = !0);
    },
    o(i) {
      R(t.$$.fragment, i), R(l.$$.fragment, i), r = !1;
    },
    d(i) {
      G(t, i), i && M(n), G(l, i);
    }
  };
}
function Lc(e) {
  let t, n;
  return t = new Ta({
    props: {
      $$slots: { default: [zc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*$$scope, color, hoveredBin*/
      4195392 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function Rc(e) {
  let t;
  const n = (
    /*#slots*/
    e[15].caption
  ), l = Pe(
    n,
    e,
    /*$$scope*/
    e[22],
    oo
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
      4194304) && je(
        l,
        n,
        r,
        /*$$scope*/
        r[22],
        t ? Qe(
          n,
          /*$$scope*/
          r[22],
          i,
          hc
        ) : xe(
          /*$$scope*/
          r[22]
        ),
        oo
      );
    },
    i(r) {
      t || (w(l, r), t = !0);
    },
    o(r) {
      R(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function qc(e) {
  let t;
  function n(i, o) {
    return (
      /*hoveredBin*/
      i[10] != null ? Ac : (
        /*mean*/
        i[1] != null ? Ec : Dc
      )
    );
  }
  let l = n(e), r = l(e);
  return {
    c() {
      r.c(), t = _e();
    },
    m(i, o) {
      r.m(i, o), L(i, t, o);
    },
    p(i, o) {
      l === (l = n(i)) && r ? r.p(i, o) : (r.d(1), r = l(i), r && (r.c(), r.m(t.parentNode, t)));
    },
    i: Z,
    o: Z,
    d(i) {
      r.d(i), i && M(t);
    }
  };
}
function Dc(e) {
  let t;
  return {
    c() {
      t = I(" ");
    },
    m(n, l) {
      L(n, t, l);
    },
    p: Z,
    d(n) {
      n && M(t);
    }
  };
}
function Ec(e) {
  let t, n, l = Ce(".3")(
    /*mean*/
    e[1]
  ) + "", r;
  return {
    c() {
      t = I("M = "), n = k("strong"), r = I(l);
    },
    m(i, o) {
      L(i, t, o), L(i, n, o), _(n, r);
    },
    p(i, o) {
      o & /*mean*/
      2 && l !== (l = Ce(".3")(
        /*mean*/
        i[1]
      ) + "") && ae(r, l);
    },
    d(i) {
      i && M(t), i && M(n);
    }
  };
}
function Ac(e) {
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
      n = I(t);
    },
    m(l, r) {
      L(l, n, r);
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
      ) + "") && ae(n, t);
    },
    d(l) {
      l && M(n);
    }
  };
}
function Tc(e) {
  let t, n, l, r;
  const i = [pc, yc], o = [];
  function a(f, s) {
    return (
      /*noParent*/
      f[5] ? 0 : 1
    );
  }
  return t = a(e), n = o[t] = i[t](e), {
    c() {
      n.c(), l = _e();
    },
    m(f, s) {
      o[t].m(f, s), L(f, l, s), r = !0;
    },
    p(f, [s]) {
      let u = t;
      t = a(f), t === u ? o[t].p(f, s) : (ie(), R(o[u], 1, 1, () => {
        o[u] = null;
      }), oe(), n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), w(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      r || (w(n), r = !0);
    },
    o(f) {
      R(n), r = !1;
    },
    d(f) {
      o[t].d(f), f && M(l);
    }
  };
}
function Oc(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = Tr(l);
  let { width: o = 100 } = t, { histValues: a } = t, { mean: f = null } = t, { unit: s = null } = t, { title: u = null } = t, { horizontalLayout: c = !1 } = t, { noParent: d = !1 } = t, { color: m = "#3b82f6" } = t, g = [], h = [], p = Ce(".3g"), S = Ce(","), y = !1;
  pt(() => setTimeout(() => n(9, y = !0), 0));
  let v;
  function N(C) {
    return `${C.label}${s ? " " + s : ""}: ${S(C.count)} instances`;
  }
  const q = (C) => n(10, v = C.detail != null ? C.detail.bin : null), D = (C) => C.bin == v, x = (C) => C.label == v, V = (C) => n(10, v = C.detail != null ? C.detail.label : null), A = (C) => C.label == v, O = (C) => C.label == v;
  return e.$$set = (C) => {
    "width" in C && n(0, o = C.width), "histValues" in C && n(13, a = C.histValues), "mean" in C && n(1, f = C.mean), "unit" in C && n(2, s = C.unit), "title" in C && n(3, u = C.title), "horizontalLayout" in C && n(4, c = C.horizontalLayout), "noParent" in C && n(5, d = C.noParent), "color" in C && n(6, m = C.color), "$$scope" in C && n(22, r = C.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*histValues, binFormat, data*/
    24704)
      if (a) {
        let C = Object.keys(a), T = C.reduce(
          (X, Q, H) => H > 0 ? Math.min(X, Math.abs(parseFloat(Q) - parseFloat(C[H - 1]))) : X,
          1e9
        );
        n(14, p = Ce(`.${va(T)}f`));
        let ee = Object.keys(a).some((X) => X.search(/[^0-9.]/) >= 0);
        console.log("string labels:", ee, Object.keys(a)), n(7, g = Object.entries(a).map((X) => ({
          bin: ee ? X[0] : parseFloat(X[0]),
          count: X[1],
          label: ee ? X[0] : p(X[0])
        }))), g.sort((X, Q) => ee ? X.label.localeCompare(Q.label) : parseFloat(X.bin) - parseFloat(Q.bin)), n(8, h = g.map((X) => X.bin));
      } else
        n(7, g = []), n(8, h = []);
    e.$$.dirty & /*histBins*/
    256 && console.log("histBins", h), e.$$.dirty & /*histValues*/
    8192 && console.log("histValues", a);
  }, [
    o,
    f,
    s,
    u,
    c,
    d,
    m,
    g,
    h,
    y,
    v,
    N,
    i,
    a,
    p,
    l,
    q,
    D,
    x,
    V,
    A,
    O,
    r
  ];
}
class Pc extends ke {
  constructor(t) {
    super(), pe(this, t, Oc, Tc, ye, {
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
function co(e, t, n) {
  const l = e.slice();
  return l[24] = t[n], l[26] = n, l;
}
function go(e) {
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
      t = k("span"), b(t, "class", "bar absolute content-box svelte-mwmtzu"), le(t, "top", "0"), le(
        t,
        "left",
        /*$xGet*/
        e[3](
          /*d*/
          e[24]
        ) * /*$xRange*/
        (e[4][1] <= 1 ? 100 : 1) + /*$xRange*/
        (e[4][1] <= 1 ? "%" : "px")
      ), le(
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
      ), le(
        t,
        "background-color",
        /*$yGet*/
        e[7](
          /*d*/
          e[24]
        )
      ), se(
        t,
        "animated",
        /*loaded*/
        e[1]
      ), se(
        t,
        "border",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      ), se(
        t,
        "border-black",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      );
    },
    m(i, o) {
      L(i, t, o), n || (l = [
        U(t, "mouseenter", r),
        U(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[16]
        )
      ], n = !0);
    },
    p(i, o) {
      e = i, o & /*$xGet, $data, $xRange*/
      28 && le(
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
      124 && le(
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
      132 && le(
        t,
        "background-color",
        /*$yGet*/
        e[7](
          /*d*/
          e[24]
        )
      ), o & /*loaded*/
      2 && se(
        t,
        "animated",
        /*loaded*/
        e[1]
      ), o & /*hoveredIndex, $data*/
      5 && se(
        t,
        "border",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      ), o & /*hoveredIndex, $data*/
      5 && se(
        t,
        "border-black",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      );
    },
    d(i) {
      i && M(t), n = !1, we(l);
    }
  };
}
function Qc(e) {
  let t, n = (
    /*$data*/
    e[2]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = go(co(e, n, r));
  return {
    c() {
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      t = _e();
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
          const a = co(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = go(a), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    i: Z,
    o: Z,
    d(r) {
      Ee(l, r), r && M(t);
    }
  };
}
function jc(e, t, n) {
  let l, r, i, o, a, f;
  const s = ba(), { data: u, xGet: c, yGet: d, xRange: m, x: g, yRange: h, xScale: p, y: S, height: y, zGet: v, zScale: N, z: q, custom: D } = An("LayerCake");
  j(e, u, (C) => n(2, l = C)), j(e, c, (C) => n(3, r = C)), j(e, d, (C) => n(7, f = C)), j(e, m, (C) => n(4, i = C)), j(e, p, (C) => n(5, o = C)), j(e, q, (C) => n(6, a = C));
  let x = null;
  pt(() => {
    setTimeout(() => n(1, V = !0), 100);
  });
  let V = !1;
  return [
    x,
    V,
    l,
    r,
    i,
    o,
    a,
    f,
    s,
    u,
    c,
    d,
    m,
    p,
    q,
    (C, T) => {
      n(0, x = C), s("hover", T);
    },
    () => {
      n(0, x = null), s("hover", null);
    }
  ];
}
class Qa extends ke {
  constructor(t) {
    super(), pe(this, t, jc, Qc, ye, {});
  }
}
const xc = (e) => ({}), mo = (e) => ({}), Ic = (e) => ({}), bo = (e) => ({});
function Fc(e) {
  let t, n, l, r, i, o, a, f, s, u = !!/*title*/
  e[1] && _o(e);
  r = new ir({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: st(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        e[0] ?? 1
      ],
      yScale: rr(),
      yDomain: Xe(
        /*counts*/
        e[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        e[4]
      ) ? (
        /*colorScale*/
        e[4]
      ) : Xe(0, 1.00001, 1 / /*data*/
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
      $$slots: { default: [Gc] },
      $$scope: { ctx: e }
    }
  });
  const c = [Kc, Wc, Vc], d = [];
  function m(g, h) {
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
  return ~(a = m(e)) && (f = d[a] = c[a](e)), {
    c() {
      t = k("div"), u && u.c(), n = P(), l = k("div"), W(r.$$.fragment), i = P(), o = k("div"), f && f.c(), le(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), le(l, "height", "6px"), b(l, "class", "rounded overflow-hidden mb-1"), b(o, "class", "text-xs text-gray-800 dark:text-gray-200"), b(t, "class", "gap-1 items-center"), se(
        t,
        "flex",
        /*horizontalLayout*/
        e[2]
      );
    },
    m(g, h) {
      L(g, t, h), u && u.m(t, null), _(t, n), _(t, l), B(r, l, null), _(t, i), _(t, o), ~a && d[a].m(o, null), s = !0;
    },
    p(g, h) {
      /*title*/
      g[1] ? u ? u.p(g, h) : (u = _o(g), u.c(), u.m(t, n)) : u && (u.d(1), u = null);
      const p = {};
      h & /*width*/
      1 && (p.xRange = [
        0,
        /*width*/
        g[0] ?? 1
      ]), h & /*counts*/
      32 && (p.yDomain = Xe(
        /*counts*/
        g[5].length
      )), h & /*colorScale, data*/
      80 && (p.yRange = Array.isArray(
        /*colorScale*/
        g[4]
      ) ? (
        /*colorScale*/
        g[4]
      ) : Xe(0, 1.00001, 1 / /*data*/
      (g[6].length - 1)).map(
        /*func_2*/
        g[17]
      )), h & /*data*/
      64 && (p.data = /*data*/
      g[6]), h & /*hoveredIndex*/
      128 && (p.custom = { hoveredGet: (
        /*func_3*/
        g[18]
      ) }), h & /*$$scope, hoveredIndex*/
      524416 && (p.$$scope = { dirty: h, ctx: g }), r.$set(p), (!s || h & /*width*/
      1) && le(
        l,
        "width",
        /*width*/
        g[0] == null ? "100%" : `${/*width*/
        g[0]}px`
      );
      let S = a;
      a = m(g), a === S ? ~a && d[a].p(g, h) : (f && (ie(), R(d[S], 1, 1, () => {
        d[S] = null;
      }), oe()), ~a ? (f = d[a], f ? f.p(g, h) : (f = d[a] = c[a](g), f.c()), w(f, 1), f.m(o, null)) : f = null), (!s || h & /*horizontalLayout*/
      4) && se(
        t,
        "flex",
        /*horizontalLayout*/
        g[2]
      );
    },
    i(g) {
      s || (w(r.$$.fragment, g), w(f), s = !0);
    },
    o(g) {
      R(r.$$.fragment, g), R(f), s = !1;
    },
    d(g) {
      g && M(t), u && u.d(), G(r), ~a && d[a].d();
    }
  };
}
function Hc(e) {
  let t, n, l, r, i, o, a, f, s = !!/*title*/
  e[1] && ho(e);
  l = new ir({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: st(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        e[0] ?? 1
      ],
      yScale: rr(),
      yDomain: Xe(
        /*counts*/
        e[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        e[4]
      ) ? (
        /*colorScale*/
        e[4]
      ) : Xe(0, 1.00001, 1 / /*data*/
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
      $$slots: { default: [Yc] },
      $$scope: { ctx: e }
    }
  });
  const u = [Zc, Jc, Uc], c = [];
  function d(m, g) {
    return (
      /*$$slots*/
      m[10].caption ? 0 : (
        /*hoveredIndex*/
        m[7] != null ? 1 : (
          /*mostCommonDatum*/
          m[8] ? 2 : -1
        )
      )
    );
  }
  return ~(o = d(e)) && (a = c[o] = u[o](e)), {
    c() {
      s && s.c(), t = P(), n = k("div"), W(l.$$.fragment), r = P(), i = k("div"), a && a.c(), le(
        n,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), le(n, "height", "6px"), b(n, "class", "rounded overflow-hidden mb-1"), b(i, "class", "text-xs text-gray-800 dark:text-gray-200");
    },
    m(m, g) {
      s && s.m(m, g), L(m, t, g), L(m, n, g), B(l, n, null), L(m, r, g), L(m, i, g), ~o && c[o].m(i, null), f = !0;
    },
    p(m, g) {
      /*title*/
      m[1] ? s ? s.p(m, g) : (s = ho(m), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null);
      const h = {};
      g & /*width*/
      1 && (h.xRange = [
        0,
        /*width*/
        m[0] ?? 1
      ]), g & /*counts*/
      32 && (h.yDomain = Xe(
        /*counts*/
        m[5].length
      )), g & /*colorScale, data*/
      80 && (h.yRange = Array.isArray(
        /*colorScale*/
        m[4]
      ) ? (
        /*colorScale*/
        m[4]
      ) : Xe(0, 1.00001, 1 / /*data*/
      (m[6].length - 1)).map(
        /*func*/
        m[14]
      )), g & /*data*/
      64 && (h.data = /*data*/
      m[6]), g & /*hoveredIndex*/
      128 && (h.custom = { hoveredGet: (
        /*func_1*/
        m[15]
      ) }), g & /*$$scope, hoveredIndex*/
      524416 && (h.$$scope = { dirty: g, ctx: m }), l.$set(h), (!f || g & /*width*/
      1) && le(
        n,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let p = o;
      o = d(m), o === p ? ~o && c[o].p(m, g) : (a && (ie(), R(c[p], 1, 1, () => {
        c[p] = null;
      }), oe()), ~o ? (a = c[o], a ? a.p(m, g) : (a = c[o] = u[o](m), a.c()), w(a, 1), a.m(i, null)) : a = null);
    },
    i(m) {
      f || (w(l.$$.fragment, m), w(a), f = !0);
    },
    o(m) {
      R(l.$$.fragment, m), R(a), f = !1;
    },
    d(m) {
      s && s.d(m), m && M(t), m && M(n), G(l), m && M(r), m && M(i), ~o && c[o].d();
    }
  };
}
function _o(e) {
  let t, n;
  return {
    c() {
      t = k("div"), n = I(
        /*title*/
        e[1]
      ), b(t, "class", "font-bold text-xs truncate text-right"), le(t, "width", "84px");
    },
    m(l, r) {
      L(l, t, r), _(t, n);
    },
    p(l, r) {
      r & /*title*/
      2 && ae(
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
function Bc(e) {
  let t, n;
  return t = new Qa({}), t.$on(
    "hover",
    /*hover_handler_1*/
    e[16]
  ), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
    },
    p: Z,
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function Gc(e) {
  let t, n;
  return t = new Aa({
    props: {
      $$slots: { default: [Bc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*$$scope, hoveredIndex*/
      524416 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function Vc(e) {
  let t, n = (
    /*makeTooltipText*/
    e[9](
      /*mostCommonDatum*/
      e[8]
    ) + ""
  ), l;
  return {
    c() {
      t = new $l(!1), l = _e(), t.a = l;
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
    i: Z,
    o: Z,
    d(r) {
      r && M(l), r && t.d();
    }
  };
}
function Wc(e) {
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
      t = new $l(!1), l = _e(), t.a = l;
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
    i: Z,
    o: Z,
    d(r) {
      r && M(l), r && t.d();
    }
  };
}
function Kc(e) {
  let t;
  const n = (
    /*#slots*/
    e[12].caption
  ), l = Pe(
    n,
    e,
    /*$$scope*/
    e[19],
    mo
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
        t ? Qe(
          n,
          /*$$scope*/
          r[19],
          i,
          xc
        ) : xe(
          /*$$scope*/
          r[19]
        ),
        mo
      );
    },
    i(r) {
      t || (w(l, r), t = !0);
    },
    o(r) {
      R(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function ho(e) {
  let t, n;
  return {
    c() {
      t = k("div"), n = I(
        /*title*/
        e[1]
      ), b(t, "class", "font-bold text-xs truncate text-right");
    },
    m(l, r) {
      L(l, t, r), _(t, n);
    },
    p(l, r) {
      r & /*title*/
      2 && ae(
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
function Xc(e) {
  let t, n;
  return t = new Qa({}), t.$on(
    "hover",
    /*hover_handler*/
    e[13]
  ), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
    },
    p: Z,
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function Yc(e) {
  let t, n;
  return t = new Aa({
    props: {
      $$slots: { default: [Xc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*$$scope, hoveredIndex*/
      524416 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function Uc(e) {
  let t, n = (
    /*makeTooltipText*/
    e[9](
      /*mostCommonDatum*/
      e[8]
    ) + ""
  ), l;
  return {
    c() {
      t = new $l(!1), l = _e(), t.a = l;
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
    i: Z,
    o: Z,
    d(r) {
      r && M(l), r && t.d();
    }
  };
}
function Jc(e) {
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
      t = new $l(!1), l = _e(), t.a = l;
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
    i: Z,
    o: Z,
    d(r) {
      r && M(l), r && t.d();
    }
  };
}
function Zc(e) {
  let t;
  const n = (
    /*#slots*/
    e[12].caption
  ), l = Pe(
    n,
    e,
    /*$$scope*/
    e[19],
    bo
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
        t ? Qe(
          n,
          /*$$scope*/
          r[19],
          i,
          Ic
        ) : xe(
          /*$$scope*/
          r[19]
        ),
        bo
      );
    },
    i(r) {
      t || (w(l, r), t = !0);
    },
    o(r) {
      R(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function $c(e) {
  let t, n, l, r;
  const i = [Hc, Fc], o = [];
  function a(f, s) {
    return (
      /*noParent*/
      f[3] ? 0 : 1
    );
  }
  return t = a(e), n = o[t] = i[t](e), {
    c() {
      n.c(), l = _e();
    },
    m(f, s) {
      o[t].m(f, s), L(f, l, s), r = !0;
    },
    p(f, [s]) {
      let u = t;
      t = a(f), t === u ? o[t].p(f, s) : (ie(), R(o[u], 1, 1, () => {
        o[u] = null;
      }), oe(), n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), w(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      r || (w(n), r = !0);
    },
    o(f) {
      R(n), r = !1;
    },
    d(f) {
      o[t].d(f), f && M(l);
    }
  };
}
function e0(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = Tr(l);
  let { width: o = null } = t, { title: a = null } = t, { horizontalLayout: f = !1 } = t, { noParent: s = !1 } = t, { colorScale: u = Array.from(as) } = t, { counts: c = null } = t, { order: d = [] } = t, m = [], g;
  Ce(",");
  let h = Ce(".1~%"), p = 1;
  function S(A) {
    return `<strong>${h(A.count / p)}</strong> ${A.name}`;
  }
  let y = null;
  const v = (A) => n(7, g = A.detail ? A.detail.index : null), N = (A) => u(A), q = (A) => A.index == g, D = (A) => n(7, g = A.detail ? A.detail.index : null), x = (A) => u(A), V = (A) => A.index == g;
  return e.$$set = (A) => {
    "width" in A && n(0, o = A.width), "title" in A && n(1, a = A.title), "horizontalLayout" in A && n(2, f = A.horizontalLayout), "noParent" in A && n(3, s = A.noParent), "colorScale" in A && n(4, u = A.colorScale), "counts" in A && n(5, c = A.counts), "order" in A && n(11, d = A.order), "$$scope" in A && n(19, r = A.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*counts, order*/
    2080)
      if (c && d.length > 0) {
        let A = Object.values(c).reduce((C, T) => C + T, 0), O = 0;
        n(6, m = d.map((C, T) => {
          let ee = O;
          return O += c[C] || 0, {
            start: ee / A,
            end: O / A,
            index: T,
            name: C,
            count: c[C] || 0
          };
        }));
      } else
        n(6, m = []);
    e.$$.dirty & /*counts*/
    32 && (c ? p = Object.values(c).reduce((A, O) => A + O, 0) : p = 1), e.$$.dirty & /*data*/
    64 && (m.length > 0 ? n(8, y = m.reduce((A, O) => A.count > O.count ? A : O, m[0])) : n(8, y = null));
  }, [
    o,
    a,
    f,
    s,
    u,
    c,
    m,
    g,
    y,
    S,
    i,
    d,
    l,
    v,
    N,
    q,
    D,
    x,
    V,
    r
  ];
}
class t0 extends ke {
  constructor(t) {
    super(), pe(this, t, e0, $c, ye, {
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
function Nn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Nn.prototype = {
  constructor: Nn,
  scale: function(e) {
    return e === 1 ? this : new Nn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Nn(this.k, this.x + this.k * e, this.y + this.k * t);
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
Nn.prototype;
function yo(e) {
  let t, n, l, r;
  const i = [i0, r0, l0, n0], o = [];
  function a(f, s) {
    return (
      /*values*/
      f[0].type == "binary" ? 0 : (
        /*values*/
        f[0].type == "count" ? 1 : (
          /*values*/
          f[0].type == "continuous" ? 2 : (
            /*values*/
            f[0].type == "categorical" ? 3 : -1
          )
        )
      )
    );
  }
  return ~(t = a(e)) && (n = o[t] = i[t](e)), {
    c() {
      n && n.c(), l = _e();
    },
    m(f, s) {
      ~t && o[t].m(f, s), L(f, l, s), r = !0;
    },
    p(f, s) {
      let u = t;
      t = a(f), t === u ? ~t && o[t].p(f, s) : (n && (ie(), R(o[u], 1, 1, () => {
        o[u] = null;
      }), oe()), ~t ? (n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), w(n, 1), n.m(l.parentNode, l)) : n = null);
    },
    i(f) {
      r || (w(n), r = !0);
    },
    o(f) {
      R(n), r = !1;
    },
    d(f) {
      ~t && o[t].d(f), f && M(l);
    }
  };
}
function n0(e) {
  let t, n;
  return t = new t0({
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
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
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
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function l0(e) {
  let t, n;
  return t = new Pc({
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
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
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
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function r0(e) {
  let t, n;
  return t = new Hr({
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
      $$slots: { caption: [o0] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
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
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function i0(e) {
  let t, n;
  return t = new Hr({
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
      $$slots: { caption: [a0] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
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
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function o0(e) {
  let t, n, l = Ce(",")(
    /*values*/
    e[0].count ?? 0
  ) + "", r, i, o = Ce(",")(
    /*values*/
    e[0].total ?? 1
  ) + "", a;
  return {
    c() {
      t = k("span"), n = k("strong"), r = I(l), i = I(`
        / `), a = I(o), b(t, "slot", "caption");
    },
    m(f, s) {
      L(f, t, s), _(t, n), _(n, r), _(t, i), _(t, a);
    },
    p(f, s) {
      s & /*values*/
      1 && l !== (l = Ce(",")(
        /*values*/
        f[0].count ?? 0
      ) + "") && ae(r, l), s & /*values*/
      1 && o !== (o = Ce(",")(
        /*values*/
        f[0].total ?? 1
      ) + "") && ae(a, o);
    },
    d(f) {
      f && M(t);
    }
  };
}
function a0(e) {
  let t, n, l = Ce(".1%")(
    /*values*/
    e[0].mean ?? 0
  ) + "", r, i, o, a = Ce(".1%")(1 - /*values*/
  (e[0].mean ?? 0)) + "", f, s;
  return {
    c() {
      t = k("span"), n = k("strong"), r = I(l), i = I(`
        true,
        `), o = k("strong"), f = I(a), s = I(`
        false`), b(t, "slot", "caption");
    },
    m(u, c) {
      L(u, t, c), _(t, n), _(n, r), _(t, i), _(t, o), _(o, f), _(t, s);
    },
    p(u, c) {
      c & /*values*/
      1 && l !== (l = Ce(".1%")(
        /*values*/
        u[0].mean ?? 0
      ) + "") && ae(r, l), c & /*values*/
      1 && a !== (a = Ce(".1%")(1 - /*values*/
      (u[0].mean ?? 0)) + "") && ae(f, a);
    },
    d(u) {
      u && M(t);
    }
  };
}
function f0(e) {
  let t, n, l = !!/*values*/
  e[0] && yo(e);
  return {
    c() {
      l && l.c(), t = _e();
    },
    m(r, i) {
      l && l.m(r, i), L(r, t, i), n = !0;
    },
    p(r, [i]) {
      /*values*/
      r[0] ? l ? (l.p(r, i), i & /*values*/
      1 && w(l, 1)) : (l = yo(r), l.c(), w(l, 1), l.m(t.parentNode, t)) : l && (ie(), R(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (w(l), n = !0);
    },
    o(r) {
      R(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && M(t);
    }
  };
}
function s0(e, t, n) {
  let l;
  j(e, Gl, (o) => n(1, l = o)), pt(() => {
    console.log("mounted metric hcart");
  });
  let { values: r = null } = t;
  const i = (o, a) => {
    var f, s;
    return (((f = r.counts) == null ? void 0 : f[a]) ?? 0) - (((s = r.counts) == null ? void 0 : s[o]) ?? 0);
  };
  return e.$$set = (o) => {
    "values" in o && n(0, r = o.values);
  }, e.$$.update = () => {
    e.$$.dirty & /*values*/
    1 && console.log("values in metricchart:", r);
  }, [r, l, i];
}
class Wt extends ke {
  constructor(t) {
    super(), pe(this, t, s0, f0, ye, { values: 0 });
  }
}
function po(e) {
  var Y;
  let t, n, l, r, i = (
    /*values*/
    (e[0].type || "unknown") + ""
  ), o, a, f, s, u, c, d, m, g, h, p, S = (
    /*formatNumber*/
    e[4](
      /*values*/
      ((Y = e[0].values) == null ? void 0 : Y.length) ?? 0
    ) + ""
  ), y, v, N, q, D, x, V, A, O, C, T, ee, X;
  c = new me({
    props: {
      icon: (
        /*showCountDetails*/
        e[1] ? Ae : Ze
      ),
      class: "text-gray-500 dark:text-gray-300"
    }
  });
  let Q = (
    /*showCountDetails*/
    e[1] && ko(e)
  ), H = !!/*values*/
  e[0].missingness && /*values*/
  (e[0].missingness.rate.count ?? 0) > 0 && vo(e), ne = (
    /*values*/
    e[0].types && No(e)
  );
  const ue = [c0, u0], re = [];
  function E(K, ce) {
    var F;
    return (
      /*values*/
      (F = K[0].values) != null && F.type ? 0 : 1
    );
  }
  return O = E(e), C = re[O] = ue[O](e), {
    c() {
      t = k("div"), n = k("span"), n.textContent = "Type:", l = P(), r = k("span"), o = I(i), a = P(), f = k("div"), s = k("div"), u = k("button"), W(c.$$.fragment), d = P(), m = k("div"), g = k("span"), g.textContent = "Count:", h = P(), p = k("span"), y = I(S), v = P(), N = k("span"), N.textContent = "rows", q = P(), Q && Q.c(), D = P(), H && H.c(), x = P(), ne && ne.c(), V = P(), A = k("div"), C.c(), b(n, "class", "font-semibold"), b(r, "class", "font-mono"), b(t, "class", "text-sm text-gray-700 dark:text-gray-300 mb-4"), b(g, "class", "font-bold text-gray-900 dark:text-gray-100"), b(p, "class", "tabular-nums text-gray-700 dark:text-gray-200"), b(N, "class", "text-gray-500 dark:text-gray-400"), b(u, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), b(u, "aria-label", "Toggle count details"), b(s, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-base w-full rounded-md overflow-hidden"), b(A, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-2 text-base w-full rounded-md"), b(f, "class", "space-y-2");
    },
    m(K, ce) {
      L(K, t, ce), _(t, n), _(t, l), _(t, r), _(r, o), L(K, a, ce), L(K, f, ce), _(f, s), _(s, u), B(c, u, null), _(u, d), _(u, m), _(m, g), _(m, h), _(m, p), _(p, y), _(m, v), _(m, N), _(s, q), Q && Q.m(s, null), _(f, D), H && H.m(f, null), _(f, x), ne && ne.m(f, null), _(f, V), _(f, A), re[O].m(A, null), T = !0, ee || (X = U(
        u,
        "click",
        /*click_handler*/
        e[6]
      ), ee = !0);
    },
    p(K, ce) {
      var te;
      (!T || ce & /*values*/
      1) && i !== (i = /*values*/
      (K[0].type || "unknown") + "") && ae(o, i);
      const F = {};
      ce & /*showCountDetails*/
      2 && (F.icon = /*showCountDetails*/
      K[1] ? Ae : Ze), c.$set(F), (!T || ce & /*values*/
      1) && S !== (S = /*formatNumber*/
      K[4](
        /*values*/
        ((te = K[0].values) == null ? void 0 : te.length) ?? 0
      ) + "") && ae(y, S), /*showCountDetails*/
      K[1] ? Q ? (Q.p(K, ce), ce & /*showCountDetails*/
      2 && w(Q, 1)) : (Q = ko(K), Q.c(), w(Q, 1), Q.m(s, null)) : Q && (ie(), R(Q, 1, 1, () => {
        Q = null;
      }), oe()), /*values*/
      K[0].missingness && /*values*/
      (K[0].missingness.rate.count ?? 0) > 0 ? H ? (H.p(K, ce), ce & /*values*/
      1 && w(H, 1)) : (H = vo(K), H.c(), w(H, 1), H.m(f, x)) : H && (ie(), R(H, 1, 1, () => {
        H = null;
      }), oe()), /*values*/
      K[0].types ? ne ? (ne.p(K, ce), ce & /*values*/
      1 && w(ne, 1)) : (ne = No(K), ne.c(), w(ne, 1), ne.m(f, V)) : ne && (ie(), R(ne, 1, 1, () => {
        ne = null;
      }), oe());
      let fe = O;
      O = E(K), O === fe ? re[O].p(K, ce) : (ie(), R(re[fe], 1, 1, () => {
        re[fe] = null;
      }), oe(), C = re[O], C ? C.p(K, ce) : (C = re[O] = ue[O](K), C.c()), w(C, 1), C.m(A, null));
    },
    i(K) {
      T || (w(c.$$.fragment, K), w(Q), w(H), w(ne), w(C), T = !0);
    },
    o(K) {
      R(c.$$.fragment, K), R(Q), R(H), R(ne), R(C), T = !1;
    },
    d(K) {
      K && M(t), K && M(a), K && M(f), G(c), Q && Q.d(), H && H.d(), ne && ne.d(), re[O].d(), ee = !1, X();
    }
  };
}
function ko(e) {
  let t, n, l = (
    /*values*/
    e[0].ids && wo(e)
  );
  return {
    c() {
      t = k("div"), l && l.c(), b(t, "class", "mx-2 px-2 py-2");
    },
    m(r, i) {
      L(r, t, i), l && l.m(t, null), n = !0;
    },
    p(r, i) {
      /*values*/
      r[0].ids ? l ? (l.p(r, i), i & /*values*/
      1 && w(l, 1)) : (l = wo(r), l.c(), w(l, 1), l.m(t, null)) : l && (ie(), R(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (w(l), n = !0);
    },
    o(r) {
      R(l), n = !1;
    },
    d(r) {
      r && M(t), l && l.d();
    }
  };
}
function wo(e) {
  let t, n, l, r, i, o, a, f, s, u;
  return r = new Wt({
    props: { values: (
      /*values*/
      e[0].ids.count
    ) }
  }), s = new Wt({
    props: {
      values: (
        /*values*/
        e[0].ids.count_per_trajectory
      )
    }
  }), {
    c() {
      t = k("div"), t.textContent = "Trajectories", n = P(), l = k("div"), W(r.$$.fragment), i = P(), o = k("div"), o.textContent = "Timesteps per Trajectory", a = P(), f = k("div"), W(s.$$.fragment), b(t, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), b(l, "class", "mb-2"), b(o, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), b(f, "class", "mb-2");
    },
    m(c, d) {
      L(c, t, d), L(c, n, d), L(c, l, d), B(r, l, null), L(c, i, d), L(c, o, d), L(c, a, d), L(c, f, d), B(s, f, null), u = !0;
    },
    p(c, d) {
      const m = {};
      d & /*values*/
      1 && (m.values = /*values*/
      c[0].ids.count), r.$set(m);
      const g = {};
      d & /*values*/
      1 && (g.values = /*values*/
      c[0].ids.count_per_trajectory), s.$set(g);
    },
    i(c) {
      u || (w(r.$$.fragment, c), w(s.$$.fragment, c), u = !0);
    },
    o(c) {
      R(r.$$.fragment, c), R(s.$$.fragment, c), u = !1;
    },
    d(c) {
      c && M(t), c && M(n), c && M(l), G(r), c && M(i), c && M(o), c && M(a), c && M(f), G(s);
    }
  };
}
function vo(e) {
  let t, n, l, r, i, o, a, f, s = (
    /*formatPercent*/
    e[5](
      /*values*/
      (e[0].missingness.rate.count ?? 0) / /*values*/
      (e[0].missingness.rate.total ?? 1)
    ) + ""
  ), u, c, d, m, g, h, p;
  l = new me({
    props: {
      icon: (
        /*showMissingnessDetails*/
        e[2] ? Ae : Ze
      ),
      class: "text-gray-500 dark:text-gray-300"
    }
  });
  let S = (
    /*showMissingnessDetails*/
    e[2] && Co(e)
  );
  return {
    c() {
      t = k("div"), n = k("button"), W(l.$$.fragment), r = P(), i = k("div"), o = k("span"), o.textContent = "Missingness:", a = P(), f = k("span"), u = I(s), c = P(), d = k("span"), d.textContent = "of rows", m = P(), S && S.c(), b(o, "class", "font-bold text-gray-900 dark:text-gray-100"), b(f, "class", "tabular-nums text-gray-700 dark:text-gray-200"), b(d, "class", "text-gray-500 dark:text-gray-400"), b(n, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), b(n, "aria-label", "Toggle missingness details"), b(t, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-base w-full rounded-md overflow-hidden");
    },
    m(y, v) {
      L(y, t, v), _(t, n), B(l, n, null), _(n, r), _(n, i), _(i, o), _(i, a), _(i, f), _(f, u), _(i, c), _(i, d), _(t, m), S && S.m(t, null), g = !0, h || (p = U(
        n,
        "click",
        /*click_handler_1*/
        e[7]
      ), h = !0);
    },
    p(y, v) {
      const N = {};
      v & /*showMissingnessDetails*/
      4 && (N.icon = /*showMissingnessDetails*/
      y[2] ? Ae : Ze), l.$set(N), (!g || v & /*values*/
      1) && s !== (s = /*formatPercent*/
      y[5](
        /*values*/
        (y[0].missingness.rate.count ?? 0) / /*values*/
        (y[0].missingness.rate.total ?? 1)
      ) + "") && ae(u, s), /*showMissingnessDetails*/
      y[2] ? S ? (S.p(y, v), v & /*showMissingnessDetails*/
      4 && w(S, 1)) : (S = Co(y), S.c(), w(S, 1), S.m(t, null)) : S && (ie(), R(S, 1, 1, () => {
        S = null;
      }), oe());
    },
    i(y) {
      g || (w(l.$$.fragment, y), w(S), g = !0);
    },
    o(y) {
      R(l.$$.fragment, y), R(S), g = !1;
    },
    d(y) {
      y && M(t), G(l), S && S.d(), h = !1, p();
    }
  };
}
function Co(e) {
  let t, n, l = (
    /*values*/
    e[0].missingness && So(e)
  );
  return {
    c() {
      t = k("div"), l && l.c(), b(t, "class", "mx-2 px-2 py-2");
    },
    m(r, i) {
      L(r, t, i), l && l.m(t, null), n = !0;
    },
    p(r, i) {
      /*values*/
      r[0].missingness ? l ? (l.p(r, i), i & /*values*/
      1 && w(l, 1)) : (l = So(r), l.c(), w(l, 1), l.m(t, null)) : l && (ie(), R(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (w(l), n = !0);
    },
    o(r) {
      R(l), n = !1;
    },
    d(r) {
      r && M(t), l && l.d();
    }
  };
}
function So(e) {
  let t, n, l, r, i, o, a, f, s, u;
  return r = new Wt({
    props: {
      values: (
        /*values*/
        e[0].missingness.rate
      )
    }
  }), s = new Wt({
    props: {
      values: (
        /*values*/
        e[0].missingness.rate_per_trajectory
      )
    }
  }), {
    c() {
      t = k("div"), t.textContent = "Number of Missing Values", n = P(), l = k("div"), W(r.$$.fragment), i = P(), o = k("div"), o.textContent = "Missingness Rate per Trajectory", a = P(), f = k("div"), W(s.$$.fragment), b(t, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), b(l, "class", "mb-2"), b(o, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), b(f, "class", "mb-2");
    },
    m(c, d) {
      L(c, t, d), L(c, n, d), L(c, l, d), B(r, l, null), L(c, i, d), L(c, o, d), L(c, a, d), L(c, f, d), B(s, f, null), u = !0;
    },
    p(c, d) {
      const m = {};
      d & /*values*/
      1 && (m.values = /*values*/
      c[0].missingness.rate), r.$set(m);
      const g = {};
      d & /*values*/
      1 && (g.values = /*values*/
      c[0].missingness.rate_per_trajectory), s.$set(g);
    },
    i(c) {
      u || (w(r.$$.fragment, c), w(s.$$.fragment, c), u = !0);
    },
    o(c) {
      R(r.$$.fragment, c), R(s.$$.fragment, c), u = !1;
    },
    d(c) {
      c && M(t), c && M(n), c && M(l), G(r), c && M(i), c && M(o), c && M(a), c && M(f), G(s);
    }
  };
}
function No(e) {
  let t, n, l, r, i, o, a, f, s = (
    /*formatNumber*/
    e[4](Object.keys(
      /*values*/
      e[0].types.counts
    ).length ?? 0) + ""
  ), u, c, d, m, g, h, p;
  l = new me({
    props: {
      icon: (
        /*showTypeDetails*/
        e[3] ? Ae : Ze
      ),
      class: "text-gray-500 dark:text-gray-300"
    }
  });
  let S = (
    /*showTypeDetails*/
    e[3] && Mo(e)
  );
  return {
    c() {
      t = k("div"), n = k("button"), W(l.$$.fragment), r = P(), i = k("div"), o = k("span"), o.textContent = "Data Elements:", a = P(), f = k("span"), u = I(s), c = P(), d = k("span"), d.textContent = "distinct elements", m = P(), S && S.c(), b(o, "class", "font-bold text-gray-900 dark:text-gray-100"), b(f, "class", "tabular-nums text-gray-700 dark:text-gray-200"), b(d, "class", "text-gray-500 dark:text-gray-400"), b(n, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), b(n, "aria-label", "Toggle type details"), b(t, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-base w-full rounded-md");
    },
    m(y, v) {
      L(y, t, v), _(t, n), B(l, n, null), _(n, r), _(n, i), _(i, o), _(i, a), _(i, f), _(f, u), _(i, c), _(i, d), _(t, m), S && S.m(t, null), g = !0, h || (p = U(
        n,
        "click",
        /*click_handler_2*/
        e[8]
      ), h = !0);
    },
    p(y, v) {
      const N = {};
      v & /*showTypeDetails*/
      8 && (N.icon = /*showTypeDetails*/
      y[3] ? Ae : Ze), l.$set(N), (!g || v & /*values*/
      1) && s !== (s = /*formatNumber*/
      y[4](Object.keys(
        /*values*/
        y[0].types.counts
      ).length ?? 0) + "") && ae(u, s), /*showTypeDetails*/
      y[3] ? S ? (S.p(y, v), v & /*showTypeDetails*/
      8 && w(S, 1)) : (S = Mo(y), S.c(), w(S, 1), S.m(t, null)) : S && (ie(), R(S, 1, 1, () => {
        S = null;
      }), oe());
    },
    i(y) {
      g || (w(l.$$.fragment, y), w(S), g = !0);
    },
    o(y) {
      R(l.$$.fragment, y), R(S), g = !1;
    },
    d(y) {
      y && M(t), G(l), S && S.d(), h = !1, p();
    }
  };
}
function Mo(e) {
  let t, n, l;
  return n = new Wt({
    props: { values: (
      /*values*/
      e[0].types
    ) }
  }), {
    c() {
      t = k("div"), W(n.$$.fragment), b(t, "class", "mx-2 px-2 py-2");
    },
    m(r, i) {
      L(r, t, i), B(n, t, null), l = !0;
    },
    p(r, i) {
      const o = {};
      i & /*values*/
      1 && (o.values = /*values*/
      r[0].types), n.$set(o);
    },
    i(r) {
      l || (w(n.$$.fragment, r), l = !0);
    },
    o(r) {
      R(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && M(t), G(n);
    }
  };
}
function u0(e) {
  let t;
  return {
    c() {
      t = k("div"), t.innerHTML = 'Values: <span class="font-normal text-gray-500 dark:text-gray-400">none</span>', b(t, "class", "text-sm font-bold text-gray-900 dark:text-gray-100 mr-2");
    },
    m(n, l) {
      L(n, t, l);
    },
    p: Z,
    i: Z,
    o: Z,
    d(n) {
      n && M(t);
    }
  };
}
function c0(e) {
  let t, n, l, r;
  return l = new Wt({
    props: { values: (
      /*values*/
      e[0].values
    ) }
  }), {
    c() {
      t = k("div"), t.textContent = "Values:", n = P(), W(l.$$.fragment), b(t, "class", "mb-2 text-sm font-bold text-gray-900 dark:text-gray-100 mr-2");
    },
    m(i, o) {
      L(i, t, o), L(i, n, o), B(l, i, o), r = !0;
    },
    p(i, o) {
      const a = {};
      o & /*values*/
      1 && (a.values = /*values*/
      i[0].values), l.$set(a);
    },
    i(i) {
      r || (w(l.$$.fragment, i), r = !0);
    },
    o(i) {
      R(l.$$.fragment, i), r = !1;
    },
    d(i) {
      i && M(t), i && M(n), G(l, i);
    }
  };
}
function d0(e) {
  let t, n, l = (
    /*values*/
    e[0] && /*values*/
    (e[0].ids || /*values*/
    e[0].missingness || /*values*/
    e[0].values) && po(e)
  );
  return {
    c() {
      l && l.c(), t = _e();
    },
    m(r, i) {
      l && l.m(r, i), L(r, t, i), n = !0;
    },
    p(r, [i]) {
      /*values*/
      r[0] && /*values*/
      (r[0].ids || /*values*/
      r[0].missingness || /*values*/
      r[0].values) ? l ? (l.p(r, i), i & /*values*/
      1 && w(l, 1)) : (l = po(r), l.c(), w(l, 1), l.m(t.parentNode, t)) : l && (ie(), R(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (w(l), n = !0);
    },
    o(r) {
      R(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && M(t);
    }
  };
}
function g0(e, t, n) {
  let { values: l = null } = t, r = !1, i = !1, o = !1;
  const a = Ce(","), f = Ce(".2~%"), s = () => n(1, r = !r), u = () => n(2, i = !i), c = () => n(3, o = !o);
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
    a,
    f,
    s,
    u,
    c
  ];
}
class ja extends ke {
  constructor(t) {
    super(), pe(this, t, g0, d0, ye, { values: 0 });
  }
}
function zo(e, t, n) {
  const l = e.slice();
  return l[4] = t[n], l;
}
function Lo(e) {
  let t, n, l, r, i;
  n = new ja({
    props: { values: (
      /*data*/
      e[1].result
    ) }
  });
  let o = (
    /*data*/
    e[1].dataset_queries && /*data*/
    e[1].dataset_queries.length > 0 && Ro(e)
  );
  return {
    c() {
      t = k("div"), W(n.$$.fragment), l = P(), o && o.c(), r = _e(), b(t, "class", "p-4 border-t border-gray-200 dark:border-gray-700");
    },
    m(a, f) {
      L(a, t, f), B(n, t, null), L(a, l, f), o && o.m(a, f), L(a, r, f), i = !0;
    },
    p(a, f) {
      const s = {};
      f & /*data*/
      2 && (s.values = /*data*/
      a[1].result), n.$set(s), /*data*/
      a[1].dataset_queries && /*data*/
      a[1].dataset_queries.length > 0 ? o ? o.p(a, f) : (o = Ro(a), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
    },
    i(a) {
      i || (w(n.$$.fragment, a), i = !0);
    },
    o(a) {
      R(n.$$.fragment, a), i = !1;
    },
    d(a) {
      a && M(t), G(n), a && M(l), o && o.d(a), a && M(r);
    }
  };
}
function Ro(e) {
  let t, n, l, r = (
    /*data*/
    e[1].dataset_queries
  ), i = [];
  for (let o = 0; o < r.length; o += 1)
    i[o] = qo(zo(e, r, o));
  return {
    c() {
      t = k("div"), n = k("div"), n.textContent = "SQL Queries", l = P();
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      b(n, "class", "text-xs font-semibold text-gray-500 mb-1 uppercase"), b(t, "class", "p-4 border-t border-gray-200 dark:border-gray-700");
    },
    m(o, a) {
      L(o, t, a), _(t, n), _(t, l);
      for (let f = 0; f < i.length; f += 1)
        i[f] && i[f].m(t, null);
    },
    p(o, a) {
      if (a & /*data*/
      2) {
        r = /*data*/
        o[1].dataset_queries;
        let f;
        for (f = 0; f < r.length; f += 1) {
          const s = zo(o, r, f);
          i[f] ? i[f].p(s, a) : (i[f] = qo(s), i[f].c(), i[f].m(t, null));
        }
        for (; f < i.length; f += 1)
          i[f].d(1);
        i.length = r.length;
      }
    },
    d(o) {
      o && M(t), Ee(i, o);
    }
  };
}
function qo(e) {
  let t, n = (
    /*sql*/
    e[4] + ""
  ), l;
  return {
    c() {
      t = k("pre"), l = I(n), b(t, "class", "bg-white dark:bg-gray-900 text-xs font-mono p-2 rounded");
    },
    m(r, i) {
      L(r, t, i), _(t, l);
    },
    p(r, i) {
      i & /*data*/
      2 && n !== (n = /*sql*/
      r[4] + "") && ae(l, n);
    },
    d(r) {
      r && M(t);
    }
  };
}
function m0(e) {
  let t, n, l, r, i, o, a, f, s, u;
  o = new me({
    props: {
      icon: (
        /*isExpanded*/
        e[2] ? Bl : Ae
      ),
      class: "text-gray-600 dark:text-gray-300"
    }
  });
  let c = (
    /*isExpanded*/
    e[2] && Lo(e)
  );
  return {
    c() {
      t = k("div"), n = k("button"), l = k("span"), r = I(
        /*queryText*/
        e[0]
      ), i = P(), W(o.$$.fragment), a = P(), c && c.c(), b(l, "class", "text-sm font-mono text-gray-700 dark:text-gray-300 truncate flex-1"), b(n, "class", "w-full px-3 py-2 text-left flex items-center justify-between bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none"), b(t, "class", "border border-gray-300 dark:border-gray-600 rounded-md mb-2 overflow-hidden");
    },
    m(d, m) {
      L(d, t, m), _(t, n), _(n, l), _(l, r), _(n, i), B(o, n, null), _(t, a), c && c.m(t, null), f = !0, s || (u = U(
        n,
        "click",
        /*toggleExpanded*/
        e[3]
      ), s = !0);
    },
    p(d, [m]) {
      (!f || m & /*queryText*/
      1) && ae(
        r,
        /*queryText*/
        d[0]
      );
      const g = {};
      m & /*isExpanded*/
      4 && (g.icon = /*isExpanded*/
      d[2] ? Bl : Ae), o.$set(g), /*isExpanded*/
      d[2] ? c ? (c.p(d, m), m & /*isExpanded*/
      4 && w(c, 1)) : (c = Lo(d), c.c(), w(c, 1), c.m(t, null)) : c && (ie(), R(c, 1, 1, () => {
        c = null;
      }), oe());
    },
    i(d) {
      f || (w(o.$$.fragment, d), w(c), f = !0);
    },
    o(d) {
      R(o.$$.fragment, d), R(c), f = !1;
    },
    d(d) {
      d && M(t), G(o), c && c.d(), s = !1, u();
    }
  };
}
function b0(e, t, n) {
  let { queryText: l } = t, { data: r } = t, i = !1;
  function o() {
    n(2, i = !i);
  }
  return e.$$set = (a) => {
    "queryText" in a && n(0, l = a.queryText), "data" in a && n(1, r = a.data);
  }, [l, r, i, o];
}
class _0 extends ke {
  constructor(t) {
    super(), pe(this, t, b0, m0, ye, { queryText: 0, data: 1 });
  }
}
function Do(e, t, n) {
  const l = e.slice();
  return l[5] = t[n][0], l[6] = t[n][1], l;
}
function Eo(e) {
  let t, n, l, r, i;
  const o = [y0, h0], a = [];
  function f(s, u) {
    return u & /*subqueries*/
    4 && (n = null), n == null && (n = Object.keys(
      /*subqueries*/
      s[2]
    ).length > 0), n ? 0 : 1;
  }
  return l = f(e, -1), r = a[l] = o[l](e), {
    c() {
      t = k("div"), r.c(), b(t, "class", "space-y-2 mt-3");
    },
    m(s, u) {
      L(s, t, u), a[l].m(t, null), i = !0;
    },
    p(s, u) {
      let c = l;
      l = f(s, u), l === c ? a[l].p(s, u) : (ie(), R(a[c], 1, 1, () => {
        a[c] = null;
      }), oe(), r = a[l], r ? r.p(s, u) : (r = a[l] = o[l](s), r.c()), w(r, 1), r.m(t, null));
    },
    i(s) {
      i || (w(r), i = !0);
    },
    o(s) {
      R(r), i = !1;
    },
    d(s) {
      s && M(t), a[l].d();
    }
  };
}
function h0(e) {
  let t;
  return {
    c() {
      t = k("div"), t.textContent = "No subqueries yet", b(t, "class", "text-center py-8 text-gray-900 dark:text-gray-100");
    },
    m(n, l) {
      L(n, t, l);
    },
    p: Z,
    i: Z,
    o: Z,
    d(n) {
      n && M(t);
    }
  };
}
function y0(e) {
  let t, n, l = Object.entries(
    /*subqueries*/
    e[2]
  ), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = Ao(Do(e, l, o));
  const i = (o) => R(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      t = _e();
    },
    m(o, a) {
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(o, a);
      L(o, t, a), n = !0;
    },
    p(o, a) {
      if (a & /*Object, subqueries*/
      4) {
        l = Object.entries(
          /*subqueries*/
          o[2]
        );
        let f;
        for (f = 0; f < l.length; f += 1) {
          const s = Do(o, l, f);
          r[f] ? (r[f].p(s, a), w(r[f], 1)) : (r[f] = Ao(s), r[f].c(), w(r[f], 1), r[f].m(t.parentNode, t));
        }
        for (ie(), f = l.length; f < r.length; f += 1)
          i(f);
        oe();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < l.length; a += 1)
          w(r[a]);
        n = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1)
        R(r[a]);
      n = !1;
    },
    d(o) {
      Ee(r, o), o && M(t);
    }
  };
}
function Ao(e) {
  let t, n;
  return t = new _0({
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
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
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
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function p0(e) {
  let t, n, l, r, i, o, a, f, s, u, c;
  o = new me({
    props: {
      icon: (
        /*enabled*/
        e[0] ? Bl : Ae
      ),
      class: "inline"
    }
  });
  let d = (
    /*enabled*/
    e[0] && Eo(e)
  );
  return {
    c() {
      t = k("div"), n = k("button"), l = k("h3"), l.textContent = "Subqueries", r = P(), i = k("div"), W(o.$$.fragment), a = P(), d && d.c(), b(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100"), b(i, "class", "p-2 text-gray-800 dark:text-gray-200"), b(n, "class", "block flex items-center justify-between mb-2 bg-transparent hover:opacity-50"), b(t, "class", f = "p-2 mb-0 border-0 rounded-none " + /*width*/
      e[1] + " transition-colors duration-200"), se(t, "opacity-50", Object.keys(
        /*subqueries*/
        e[2]
      ).length == 0);
    },
    m(m, g) {
      L(m, t, g), _(t, n), _(n, l), _(n, r), _(n, i), B(o, i, null), _(t, a), d && d.m(t, null), s = !0, u || (c = U(
        n,
        "click",
        /*click_handler*/
        e[4]
      ), u = !0);
    },
    p(m, [g]) {
      const h = {};
      g & /*enabled*/
      1 && (h.icon = /*enabled*/
      m[0] ? Bl : Ae), o.$set(h), /*enabled*/
      m[0] ? d ? (d.p(m, g), g & /*enabled*/
      1 && w(d, 1)) : (d = Eo(m), d.c(), w(d, 1), d.m(t, null)) : d && (ie(), R(d, 1, 1, () => {
        d = null;
      }), oe()), (!s || g & /*width*/
      2 && f !== (f = "p-2 mb-0 border-0 rounded-none " + /*width*/
      m[1] + " transition-colors duration-200")) && b(t, "class", f), (!s || g & /*width, Object, subqueries*/
      6) && se(t, "opacity-50", Object.keys(
        /*subqueries*/
        m[2]
      ).length == 0);
    },
    i(m) {
      s || (w(o.$$.fragment, m), w(d), s = !0);
    },
    o(m) {
      R(o.$$.fragment, m), R(d), s = !1;
    },
    d(m) {
      m && M(t), G(o), d && d.d(), u = !1, c();
    }
  };
}
function k0(e, t, n) {
  let { width: l = "w-full max-w-2xl" } = t, { enabled: r = !1 } = t, { subqueries: i = {} } = t, { idsLength: o = 0 } = t;
  const a = () => n(0, r = !r);
  return e.$$set = (f) => {
    "width" in f && n(1, l = f.width), "enabled" in f && n(0, r = f.enabled), "subqueries" in f && n(2, i = f.subqueries), "idsLength" in f && n(3, o = f.idsLength);
  }, e.$$.update = () => {
    e.$$.dirty & /*subqueries, enabled*/
    5 && (console.log("🔍 SubquerySection - subqueries changed:", i), console.log("🔍 SubquerySection - enabled:", r), console.log("🔍 SubquerySection - subqueries keys:", Object.keys(i)));
  }, [r, l, i, o, a];
}
class w0 extends ke {
  constructor(t) {
    super(), pe(this, t, k0, p0, ye, {
      width: 1,
      enabled: 0,
      subqueries: 2,
      idsLength: 3
    });
  }
}
function v0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xa = { exports: {} };
(function(e, t) {
  (function() {
    function n(i, o, a) {
      var f = null, s = null, u = null, c = null;
      if (a = a || "", !o.length)
        return a || "";
      if (i.some(function(m) {
        m.name;
        var g = m.match instanceof RegExp, h = g ? m.match : m.match[0], p = g ? null : m.match[1] || null, S = g ? null : m.match[2] || null;
        return f = o.match(h), s = f ? m.name : null, u = p, c = S, !!f;
      }), f) {
        var d = '<span class="' + s + '">' + f[1] + "</span>";
        return u && (d = u + d), c && (d = d + c), n(i, o.slice(f[0].length), a + d);
      } else
        return n(i, o.slice(1), a + o[0]);
    }
    function l(i) {
      var o = i.replace(/^\n+|\n+\s+$/g, ""), a = o.match(/^\s+/);
      if (!a)
        return o;
      var f = o.split(`
`), s = f.map(function(u, c) {
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
        var u = (typeof i.patterns == "function" ? i.patterns(s) : i.patterns) || {}, c = s.innerText, d = l(c), m = a(n(u, f(d)));
        i.linenums && (m = m.split(`
`).map(function(g, h) {
          if (!h)
            return g;
          var p = h - 1 + "";
          return p.length < 2 && (p = "0" + p), '<span class="linenum">' + p + "</span> " + g;
        }).join(`
`)), s.innerHTML = m;
      });
    }
    e.exports = r;
  })();
})(xa);
var C0 = xa.exports;
const Ia = /* @__PURE__ */ v0(C0), Fa = [
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
function Ha(e) {
  return e = e.replaceAll(/<([A-z]+?)>/g, "####TOKEN####$1####ENDTOKEN####"), e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function S0(e) {
  let t, n;
  return t = new me({ props: { icon: er } }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
    },
    p: Z,
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function N0(e) {
  let t, n;
  return t = new me({ props: { icon: Rf } }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
    },
    p: Z,
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function M0(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, g;
  const h = [N0, S0], p = [];
  function S(y, v) {
    return (
      /*copied*/
      y[3] ? 0 : 1
    );
  }
  return r = S(e), i = p[r] = h[r](e), f = new me({ props: { icon: ya } }), {
    c() {
      t = k("div"), n = k("div"), l = k("button"), i.c(), o = P(), a = k("button"), W(f.$$.fragment), s = P(), u = k("code"), c = I(
        /*content*/
        e[0]
      ), b(l, "class", "p-2 hover:opacity-50 text-gray-700 dark:text-gray-200 text-sm"), b(l, "title", "Copy"), b(a, "class", "p-2 hover:opacity-50 text-gray-700 dark:text-gray-200 text-sm"), b(a, "title", "Run this query"), b(n, "class", "flex items-center absolute right-0 top-0 mr-2 mt-2"), b(u, "class", "font-mono whitespace-pre-line"), b(
        u,
        "id",
        /*highlightedViewID*/
        e[4]
      ), b(t, "class", "bg-gray-100 dark:bg-gray-800 rounded-md my-2 p-4 pr-12 relative text-gray-900 dark:text-gray-100");
    },
    m(y, v) {
      L(y, t, v), _(t, n), _(n, l), p[r].m(l, null), _(n, o), _(n, a), B(f, a, null), _(t, s), _(t, u), _(u, c), e[8](u), d = !0, m || (g = [
        U(
          l,
          "click",
          /*click_handler*/
          e[6]
        ),
        U(
          a,
          "click",
          /*click_handler_1*/
          e[7]
        )
      ], m = !0);
    },
    p(y, [v]) {
      let N = r;
      r = S(y), r === N ? p[r].p(y, v) : (ie(), R(p[N], 1, 1, () => {
        p[N] = null;
      }), oe(), i = p[r], i ? i.p(y, v) : (i = p[r] = h[r](y), i.c()), w(i, 1), i.m(l, null)), (!d || v & /*content*/
      1) && ae(
        c,
        /*content*/
        y[0]
      );
    },
    i(y) {
      d || (w(i), w(f.$$.fragment, y), d = !0);
    },
    o(y) {
      R(i), R(f.$$.fragment, y), d = !1;
    },
    d(y) {
      y && M(t), p[r].d(), G(f), e[8](null), m = !1, we(g);
    }
  };
}
function z0(e, t, n) {
  let { content: l = "" } = t, { onRun: r = () => {
  } } = t, i = "highlightView-" + new Array(20).fill(0).map(() => Math.floor(Math.random() * 10)).join(""), o, a = !1;
  async function f(d) {
    try {
      await navigator.clipboard.writeText(d);
    } catch {
      const g = document.createElement("textarea");
      g.value = d, document.body.appendChild(g), g.select(), document.execCommand("copy"), document.body.removeChild(g);
    }
    n(3, a = !0), setTimeout(() => n(3, a = !1), 5e3);
  }
  const s = () => f(l), u = () => r(l);
  function c(d) {
    Me[d ? "unshift" : "push"](() => {
      o = d, n(2, o), n(0, l), n(4, i);
    });
  }
  return e.$$set = (d) => {
    "content" in d && n(0, l = d.content), "onRun" in d && n(1, r = d.onRun);
  }, e.$$.update = () => {
    e.$$.dirty & /*highlightView, content*/
    5 && o && l && (n(2, o.innerText = Ha(l), o), Ia({
      selector: `#${i}`,
      patterns: Fa
    }));
  }, [
    l,
    r,
    o,
    a,
    i,
    f,
    s,
    u,
    c
  ];
}
class L0 extends ke {
  constructor(t) {
    super(), pe(this, t, z0, M0, ye, { content: 0, onRun: 1 });
  }
}
function To(e, t, n) {
  const l = e.slice();
  return l[7] = t[n], l[9] = n, l;
}
function R0(e) {
  let t, n = Qo(
    /*block*/
    e[7].content
  ) + "";
  return {
    c() {
      t = k("div"), b(t, "class", "leading-relaxed mb-2");
    },
    m(l, r) {
      L(l, t, r), t.innerHTML = n;
    },
    p(l, r) {
      r & /*blocks*/
      8 && n !== (n = Qo(
        /*block*/
        l[7].content
      ) + "") && (t.innerHTML = n);
    },
    i: Z,
    o: Z,
    d(l) {
      l && M(t);
    }
  };
}
function q0(e) {
  let t, n;
  return t = new L0({
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
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
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
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function Oo(e) {
  let t, n, l, r;
  const i = [q0, R0], o = [];
  function a(f, s) {
    return (
      /*block*/
      f[7].type === "code" ? 0 : 1
    );
  }
  return t = a(e), n = o[t] = i[t](e), {
    c() {
      n.c(), l = _e();
    },
    m(f, s) {
      o[t].m(f, s), L(f, l, s), r = !0;
    },
    p(f, s) {
      let u = t;
      t = a(f), t === u ? o[t].p(f, s) : (ie(), R(o[u], 1, 1, () => {
        o[u] = null;
      }), oe(), n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), w(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      r || (w(n), r = !0);
    },
    o(f) {
      R(n), r = !1;
    },
    d(f) {
      o[t].d(f), f && M(l);
    }
  };
}
function Po(e) {
  let t, n, l = /*collapsed*/ e[1] ? "More" : "Less", r, i, o;
  return {
    c() {
      t = k("div"), n = k("a"), r = I(l), b(n, "class", "text-blue-600 dark:text-blue-400 hover:opacity-50 text-sm"), b(n, "href", "#");
    },
    m(a, f) {
      L(a, t, f), _(t, n), _(n, r), i || (o = U(
        n,
        "click",
        /*click_handler*/
        e[6]
      ), i = !0);
    },
    p(a, f) {
      f & /*collapsed*/
      2 && l !== (l = /*collapsed*/
      a[1] ? "More" : "Less") && ae(r, l);
    },
    d(a) {
      a && M(t), i = !1, o();
    }
  };
}
function D0(e) {
  let t, n, l, r = (
    /*blocks*/
    e[3]
  ), i = [];
  for (let f = 0; f < r.length; f += 1)
    i[f] = Oo(To(e, r, f));
  const o = (f) => R(i[f], 1, 1, () => {
    i[f] = null;
  });
  let a = (
    /*collapsible*/
    e[2] && Po(e)
  );
  return {
    c() {
      for (let f = 0; f < i.length; f += 1)
        i[f].c();
      t = P(), a && a.c(), n = _e();
    },
    m(f, s) {
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(f, s);
      L(f, t, s), a && a.m(f, s), L(f, n, s), l = !0;
    },
    p(f, [s]) {
      if (s & /*blocks, onRun, formatMarkdown*/
      9) {
        r = /*blocks*/
        f[3];
        let u;
        for (u = 0; u < r.length; u += 1) {
          const c = To(f, r, u);
          i[u] ? (i[u].p(c, s), w(i[u], 1)) : (i[u] = Oo(c), i[u].c(), w(i[u], 1), i[u].m(t.parentNode, t));
        }
        for (ie(), u = r.length; u < i.length; u += 1)
          o(u);
        oe();
      }
      /*collapsible*/
      f[2] ? a ? a.p(f, s) : (a = Po(f), a.c(), a.m(n.parentNode, n)) : a && (a.d(1), a = null);
    },
    i(f) {
      if (!l) {
        for (let s = 0; s < r.length; s += 1)
          w(i[s]);
        l = !0;
      }
    },
    o(f) {
      i = i.filter(Boolean);
      for (let s = 0; s < i.length; s += 1)
        R(i[s]);
      l = !1;
    },
    d(f) {
      Ee(i, f), f && M(t), a && a.d(f), f && M(n);
    }
  };
}
function E0(e) {
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
function Qo(e) {
  let t = e;
  return t = t.replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\*\*([^\*\n]+)(\*\*|$)/g, "<strong>$1</strong>").replace(/\*([^\*\n]+)\*/g, "<em>$1</em>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>'), t = t.replace(new RegExp("(?<!<\\/[ou]l>)\\n", "g"), "<br>"), t;
}
function A0(e, t, n) {
  let l, { text: r } = t, { collapseLength: i = null } = t, { onRun: o = () => {
  } } = t, a = [], f = !1;
  const s = () => n(1, f = !f);
  return e.$$set = (u) => {
    "text" in u && n(4, r = u.text), "collapseLength" in u && n(5, i = u.collapseLength), "onRun" in u && n(0, o = u.onRun);
  }, e.$$.update = () => {
    e.$$.dirty & /*collapseLength, text*/
    48 && n(2, l = !!i && r.length > i), e.$$.dirty & /*text*/
    16 && n(1, f = !1), e.$$.dirty & /*collapsible, collapsed, text, collapseLength*/
    54 && n(3, a = E0(l && f ? r.slice(0, i) + "..." : r));
  }, [o, f, l, a, r, i, s];
}
class Ba extends ke {
  constructor(t) {
    super(), pe(this, t, A0, D0, ye, { text: 4, collapseLength: 5, onRun: 0 });
  }
}
function jo(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = k("div"), n = k("h3"), n.textContent = "Query Error", l = P(), r = k("div"), i = I(
        /*queryError*/
        e[3]
      ), b(n, "class", "text-lg font-medium text-red-700 dark:text-red-100 mb-2"), b(r, "class", "text-sm font-mono text-gray-800 dark:text-gray-100"), b(t, "class", "bg-red-50 dark:bg-red-800/40 rounded-lg border border-red-200 dark:border-red-400 p-4 mb-4");
    },
    m(o, a) {
      L(o, t, a), _(t, n), _(t, l), _(t, r), _(r, i);
    },
    p(o, a) {
      a & /*queryError*/
      8 && ae(
        i,
        /*queryError*/
        o[3]
      );
    },
    d(o) {
      o && M(t);
    }
  };
}
function xo(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m;
  o = new me({
    props: {
      icon: _a,
      class: "inline mr-2"
    }
  });
  function g(y, v) {
    return (
      /*queryError*/
      y[3] ? O0 : T0
    );
  }
  let h = g(e), p = h(e), S = (
    /*llmExplanation*/
    e[8] && Io(e)
  );
  return {
    c() {
      t = k("div"), n = k("div"), l = k("h3"), l.textContent = "Explanation", r = P(), i = k("button"), W(o.$$.fragment), a = P(), p.c(), s = P(), S && S.c(), b(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100"), b(i, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50"), i.disabled = f = (!/*values*/
      e[4] || Object.keys(
        /*values*/
        e[4]
      ).length == 0) && !/*queryError*/
      e[3], b(n, "class", "flex items-center justify-between mb-2"), b(t, "class", u = "px-2 mb-4 " + /*width*/
      e[6] + " dark:text-gray-100"), se(t, "opacity-50", (!/*values*/
      e[4] || Object.keys(
        /*values*/
        e[4]
      ).length == 0) && !/*queryError*/
      e[3]);
    },
    m(y, v) {
      L(y, t, v), _(t, n), _(n, l), _(n, r), _(n, i), B(o, i, null), _(i, a), p.m(i, null), _(t, s), S && S.m(t, null), c = !0, d || (m = U(
        i,
        "click",
        /*click_handler*/
        e[9]
      ), d = !0);
    },
    p(y, v) {
      h !== (h = g(y)) && (p.d(1), p = h(y), p && (p.c(), p.m(i, null))), (!c || v & /*values, queryError*/
      24 && f !== (f = (!/*values*/
      y[4] || Object.keys(
        /*values*/
        y[4]
      ).length == 0) && !/*queryError*/
      y[3])) && (i.disabled = f), /*llmExplanation*/
      y[8] ? S ? (S.p(y, v), v & /*llmExplanation*/
      256 && w(S, 1)) : (S = Io(y), S.c(), w(S, 1), S.m(t, null)) : S && (ie(), R(S, 1, 1, () => {
        S = null;
      }), oe()), (!c || v & /*width*/
      64 && u !== (u = "px-2 mb-4 " + /*width*/
      y[6] + " dark:text-gray-100")) && b(t, "class", u), (!c || v & /*width, values, Object, queryError*/
      88) && se(t, "opacity-50", (!/*values*/
      y[4] || Object.keys(
        /*values*/
        y[4]
      ).length == 0) && !/*queryError*/
      y[3]);
    },
    i(y) {
      c || (w(o.$$.fragment, y), w(S), c = !0);
    },
    o(y) {
      R(o.$$.fragment, y), R(S), c = !1;
    },
    d(y) {
      y && M(t), G(o), p.d(), S && S.d(), d = !1, m();
    }
  };
}
function T0(e) {
  let t;
  return {
    c() {
      t = I("Explain");
    },
    m(n, l) {
      L(n, t, l);
    },
    d(n) {
      n && M(t);
    }
  };
}
function O0(e) {
  let t;
  return {
    c() {
      t = I("Explain and Fix");
    },
    m(n, l) {
      L(n, t, l);
    },
    d(n) {
      n && M(t);
    }
  };
}
function Io(e) {
  let t, n;
  return t = new Ba({
    props: {
      text: (
        /*llmExplanation*/
        e[8]
      ),
      collapseLength: 250,
      onRun: (
        /*func*/
        e[10]
      )
    }
  }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*llmExplanation*/
      256 && (i.text = /*llmExplanation*/
      l[8]), r & /*textInput, onRun*/
      3 && (i.onRun = /*func*/
      l[10]), t.$set(i);
    },
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function P0(e) {
  let t;
  return {
    c() {
      t = k("div"), t.textContent = "No query results", b(t, "class", "text-center py-8 text-gray-900 dark:text-gray-100");
    },
    m(n, l) {
      L(n, t, l);
    },
    p: Z,
    i: Z,
    o: Z,
    d(n) {
      n && M(t);
    }
  };
}
function Q0(e) {
  let t, n;
  return t = new ja({ props: { values: (
    /*values*/
    e[4]
  ) } }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*values*/
      16 && (i.values = /*values*/
      l[4]), t.$set(i);
    },
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function j0(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, g = !!/*queryError*/
  e[3] && jo(e), h = (
    /*llmAvailable*/
    e[7] && xo(e)
  );
  const p = [Q0, P0], S = [];
  function y(v, N) {
    return N & /*values*/
    16 && (a = null), a == null && (a = !!(/*values*/
    v[4] && Object.keys(
      /*values*/
      v[4]
    ).length > 0)), a ? 0 : 1;
  }
  return f = y(e, -1), s = S[f] = p[f](e), d = new w0({
    props: {
      width: "w-full",
      subqueries: (
        /*subqueries*/
        e[5]
      )
    }
  }), {
    c() {
      t = k("div"), g && g.c(), n = P(), h && h.c(), l = P(), r = k("div"), i = k("div"), i.innerHTML = '<h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Query Result</h3>', o = P(), s.c(), c = P(), W(d.$$.fragment), b(i, "class", "flex items-center justify-between mb-2"), b(r, "class", u = "px-2 mb-4 " + /*width*/
      e[6] + " dark:text-gray-100"), se(r, "opacity-50", !/*values*/
      e[4] || Object.keys(
        /*values*/
        e[4]
      ).length == 0), b(t, "class", "flex-auto p-4 h-full overflow-auto");
    },
    m(v, N) {
      L(v, t, N), g && g.m(t, null), _(t, n), h && h.m(t, null), _(t, l), _(t, r), _(r, i), _(r, o), S[f].m(r, null), _(t, c), B(d, t, null), m = !0;
    },
    p(v, [N]) {
      /*queryError*/
      v[3] ? g ? g.p(v, N) : (g = jo(v), g.c(), g.m(t, n)) : g && (g.d(1), g = null), /*llmAvailable*/
      v[7] ? h ? (h.p(v, N), N & /*llmAvailable*/
      128 && w(h, 1)) : (h = xo(v), h.c(), w(h, 1), h.m(t, l)) : h && (ie(), R(h, 1, 1, () => {
        h = null;
      }), oe());
      let q = f;
      f = y(v, N), f === q ? S[f].p(v, N) : (ie(), R(S[q], 1, 1, () => {
        S[q] = null;
      }), oe(), s = S[f], s ? s.p(v, N) : (s = S[f] = p[f](v), s.c()), w(s, 1), s.m(r, null)), (!m || N & /*width*/
      64 && u !== (u = "px-2 mb-4 " + /*width*/
      v[6] + " dark:text-gray-100")) && b(r, "class", u), (!m || N & /*width, values, Object*/
      80) && se(r, "opacity-50", !/*values*/
      v[4] || Object.keys(
        /*values*/
        v[4]
      ).length == 0);
      const D = {};
      N & /*subqueries*/
      32 && (D.subqueries = /*subqueries*/
      v[5]), d.$set(D);
    },
    i(v) {
      m || (w(h), w(s), w(d.$$.fragment, v), m = !0);
    },
    o(v) {
      R(h), R(s), R(d.$$.fragment, v), m = !1;
    },
    d(v) {
      v && M(t), g && g.d(), h && h.d(), S[f].d(), G(d);
    }
  };
}
function x0(e, t, n) {
  let { textInput: l = "" } = t, { onRun: r = () => {
  } } = t, { onExplain: i = () => {
  } } = t, { queryError: o = "" } = t, { values: a = {} } = t, { subqueries: f = {} } = t, { width: s = "w-full" } = t, { llmAvailable: u = !1 } = t, { llmExplanation: c = "" } = t;
  const d = () => {
    i();
  }, m = (g) => {
    n(0, l = g), r();
  };
  return e.$$set = (g) => {
    "textInput" in g && n(0, l = g.textInput), "onRun" in g && n(1, r = g.onRun), "onExplain" in g && n(2, i = g.onExplain), "queryError" in g && n(3, o = g.queryError), "values" in g && n(4, a = g.values), "subqueries" in g && n(5, f = g.subqueries), "width" in g && n(6, s = g.width), "llmAvailable" in g && n(7, u = g.llmAvailable), "llmExplanation" in g && n(8, c = g.llmExplanation);
  }, [
    l,
    r,
    i,
    o,
    a,
    f,
    s,
    u,
    c,
    d,
    m
  ];
}
class I0 extends ke {
  constructor(t) {
    super(), pe(this, t, x0, j0, ye, {
      textInput: 0,
      onRun: 1,
      onExplain: 2,
      queryError: 3,
      values: 4,
      subqueries: 5,
      width: 6,
      llmAvailable: 7,
      llmExplanation: 8
    });
  }
}
function Fo(e) {
  let t, n, l, r, i, o = (
    /*message*/
    (e[1] || "Loading...") + ""
  ), a, f, s;
  return {
    c() {
      t = k("div"), n = k("div"), l = k("div"), r = k("div"), i = k("p"), a = I(o), f = P(), s = k("div"), s.innerHTML = '<div class="bg-blue-600 h-2 rounded-full animate-pulse" style="width: 100%"></div>', b(i, "class", "text-sm font-medium text-gray-900 dark:text-gray-100"), b(r, "class", "flex-1"), b(s, "class", "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"), b(l, "class", "space-y-3"), b(n, "class", "bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 w-1/2 p-6"), b(t, "class", "absolute top-0 left-0 right-0 top-0 bottom-0 bg-white/80 dark:bg-gray-900/80 flex items-center justify-center z-80");
    },
    m(u, c) {
      L(u, t, c), _(t, n), _(n, l), _(l, r), _(r, i), _(i, a), _(l, f), _(l, s);
    },
    p(u, c) {
      c & /*message*/
      2 && o !== (o = /*message*/
      (u[1] || "Loading...") + "") && ae(a, o);
    },
    d(u) {
      u && M(t);
    }
  };
}
function F0(e) {
  let t, n = (
    /*isLoading*/
    e[0] && Fo(e)
  );
  return {
    c() {
      n && n.c(), t = _e();
    },
    m(l, r) {
      n && n.m(l, r), L(l, t, r);
    },
    p(l, [r]) {
      /*isLoading*/
      l[0] ? n ? n.p(l, r) : (n = Fo(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: Z,
    o: Z,
    d(l) {
      n && n.d(l), l && M(t);
    }
  };
}
function H0(e, t, n) {
  let { isLoading: l = !1 } = t, { message: r = "" } = t, { width: i = "w-full" } = t;
  return e.$$set = (o) => {
    "isLoading" in o && n(0, l = o.isLoading), "message" in o && n(1, r = o.message), "width" in o && n(2, i = o.width);
  }, [l, r, i];
}
class B0 extends ke {
  constructor(t) {
    super(), pe(this, t, H0, F0, ye, { isLoading: 0, message: 1, width: 2 });
  }
}
function Ho(e, t, n) {
  const l = e.slice();
  return l[7] = t[n], l[9] = n, l;
}
function Bo(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, g;
  s = new me({ props: { icon: Mf } });
  function h(y, v) {
    return (
      /*history*/
      y[1].length === 0 ? V0 : G0
    );
  }
  let p = h(e), S = p(e);
  return {
    c() {
      t = k("div"), n = P(), l = k("div"), r = k("div"), i = k("div"), o = k("h3"), o.textContent = "Query History", a = P(), f = k("button"), W(s.$$.fragment), u = P(), c = k("div"), S.c(), b(t, "class", "absolute top-0 left-0 w-full h-full bg-white/80 z-40"), b(o, "class", "font-medium text-gray-900"), b(f, "class", "text-gray-600 dark:text-gray-300 hover:opacity-50 transition-colors p-2"), b(f, "title", "Close history"), b(i, "class", "flex items-center justify-between px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white"), b(c, "class", "max-h-80 overflow-y-auto svelte-6p3axr"), b(r, "class", "bg-white dark:bg-gray-800 border-2 border-gray-300/50 dark:border-gray-600/2 rounded-lg w-2/3 h-2/3 overflow-auto pointer-events-auto"), b(l, "class", "absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 pointer-events-none");
    },
    m(y, v) {
      L(y, t, v), L(y, n, v), L(y, l, v), _(l, r), _(r, i), _(i, o), _(i, a), _(i, f), B(s, f, null), _(r, u), _(r, c), S.m(c, null), d = !0, m || (g = [
        U(t, "click", qe(
          /*handleClickOutside*/
          e[4]
        )),
        U(f, "click", function() {
          Je(
            /*onClose*/
            e[2]
          ) && e[2].apply(this, arguments);
        })
      ], m = !0);
    },
    p(y, v) {
      e = y, p === (p = h(e)) && S ? S.p(e, v) : (S.d(1), S = p(e), S && (S.c(), S.m(c, null)));
    },
    i(y) {
      d || (w(s.$$.fragment, y), d = !0);
    },
    o(y) {
      R(s.$$.fragment, y), d = !1;
    },
    d(y) {
      y && M(t), y && M(n), y && M(l), G(s), S.d(), m = !1, we(g);
    }
  };
}
function G0(e) {
  let t, n = (
    /*history*/
    e[1]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Vo(Ho(e, n, r));
  return {
    c() {
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      t = _e();
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
          const a = Ho(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = Vo(a), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(r) {
      Ee(l, r), r && M(t);
    }
  };
}
function V0(e) {
  let t;
  return {
    c() {
      t = k("div"), t.textContent = "No query history yet", b(t, "class", "p-4 text-center text-gray-500 dark:text-gray-400 text-sm");
    },
    m(n, l) {
      L(n, t, l);
    },
    p: Z,
    d(n) {
      n && M(t);
    }
  };
}
function W0(e) {
  let t, n = (
    /*historyItem*/
    (e[7].query || "No query extracted") + ""
  ), l;
  return {
    c() {
      t = k("span"), l = I(n), b(t, "class", "font-mono");
    },
    m(r, i) {
      L(r, t, i), _(t, l);
    },
    p(r, i) {
      i & /*history*/
      2 && n !== (n = /*historyItem*/
      (r[7].query || "No query extracted") + "") && ae(l, n);
    },
    d(r) {
      r && M(t);
    }
  };
}
function K0(e) {
  let t = (
    /*historyItem*/
    e[7].question + ""
  ), n;
  return {
    c() {
      n = I(t);
    },
    m(l, r) {
      L(l, n, r);
    },
    p(l, r) {
      r & /*history*/
      2 && t !== (t = /*historyItem*/
      l[7].question + "") && ae(n, t);
    },
    d(l) {
      l && M(n);
    }
  };
}
function Go(e) {
  let t, n = (
    /*historyItem*/
    e[7].answer + ""
  ), l;
  return {
    c() {
      t = k("p"), l = I(n), b(t, "class", "text-xs text-gray-600 dark:text-gray-300 line-clamp-2 mt-2 svelte-6p3axr");
    },
    m(r, i) {
      L(r, t, i), _(t, l);
    },
    p(r, i) {
      i & /*history*/
      2 && n !== (n = /*historyItem*/
      r[7].answer + "") && ae(l, n);
    },
    d(r) {
      r && M(t);
    }
  };
}
function Vo(e) {
  let t, n, l, r, i, o = Wo(
    /*historyItem*/
    e[7].timestamp
  ) + "", a, f, s, u, c;
  function d(S, y) {
    return (
      /*historyItem*/
      S[7].question ? K0 : W0
    );
  }
  let m = d(e), g = m(e), h = (
    /*historyItem*/
    e[7].answer && Go(e)
  );
  function p() {
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
      t = k("div"), n = k("div"), l = k("h4"), g.c(), r = P(), i = k("span"), a = I(o), f = P(), h && h.c(), s = P(), b(l, "class", "text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-2 flex-1 svelte-6p3axr"), b(i, "class", "text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0"), b(n, "class", "flex items-start justify-between"), b(t, "class", "p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors");
    },
    m(S, y) {
      L(S, t, y), _(t, n), _(n, l), g.m(l, null), _(n, r), _(n, i), _(i, a), _(t, f), h && h.m(t, null), _(t, s), u || (c = U(t, "click", p), u = !0);
    },
    p(S, y) {
      e = S, m === (m = d(e)) && g ? g.p(e, y) : (g.d(1), g = m(e), g && (g.c(), g.m(l, null))), y & /*history*/
      2 && o !== (o = Wo(
        /*historyItem*/
        e[7].timestamp
      ) + "") && ae(a, o), /*historyItem*/
      e[7].answer ? h ? h.p(e, y) : (h = Go(e), h.c(), h.m(t, s)) : h && (h.d(1), h = null);
    },
    d(S) {
      S && M(t), g.d(), h && h.d(), u = !1, c();
    }
  };
}
function X0(e) {
  let t, n, l = (
    /*isVisible*/
    e[0] && Bo(e)
  );
  return {
    c() {
      l && l.c(), t = _e();
    },
    m(r, i) {
      l && l.m(r, i), L(r, t, i), n = !0;
    },
    p(r, [i]) {
      /*isVisible*/
      r[0] ? l ? (l.p(r, i), i & /*isVisible*/
      1 && w(l, 1)) : (l = Bo(r), l.c(), w(l, 1), l.m(t.parentNode, t)) : l && (ie(), R(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (w(l), n = !0);
    },
    o(r) {
      R(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && M(t);
    }
  };
}
function Wo(e) {
  let t = /* @__PURE__ */ new Date();
  t.setTime(Date.parse(e)), console.log("format:", e, Date.parse(e));
  const l = (/* @__PURE__ */ new Date()).getTime() - t.getTime(), r = Math.floor(l / 6e4), i = Math.floor(l / 36e5), o = Math.floor(l / 864e5);
  return r < 1 ? "Just now" : r < 60 ? `${r}m ago` : i < 24 ? `${i}h ago` : `${o}d ago`;
}
function Y0(e, t, n) {
  let { isVisible: l = !1 } = t, { history: r = [] } = t, { onClose: i = () => {
  } } = t, { onSelect: o = () => {
  } } = t, { position: a = { top: 0, left: 0 } } = t;
  function f(u) {
    u.target, i && i();
  }
  const s = (u) => o(u);
  return e.$$set = (u) => {
    "isVisible" in u && n(0, l = u.isVisible), "history" in u && n(1, r = u.history), "onClose" in u && n(2, i = u.onClose), "onSelect" in u && n(3, o = u.onSelect), "position" in u && n(5, a = u.position);
  }, [
    l,
    r,
    i,
    o,
    f,
    a,
    s
  ];
}
class Ko extends ke {
  constructor(t) {
    super(), pe(this, t, Y0, X0, ye, {
      isVisible: 0,
      history: 1,
      onClose: 2,
      onSelect: 3,
      position: 5
    });
  }
}
function Ar(e, t = []) {
  if (t.length > 0)
    return Ar(e[t[0]], t.slice(1));
  let n = 1, l = `Group ${n}`;
  for (; e[l]; )
    n += 1, l = `Group ${n}`;
  return { ...e, [l]: {} };
}
function Gr(e, t = []) {
  if (t.length > 0) {
    let r = Gr(e[t[0]], t.slice(1));
    return {
      contents: { ...e, [t[0]]: r.contents },
      queryPath: [t[0], ...r.queryPath]
    };
  }
  let n = 1, l = `Query ${n}`;
  for (; e[l]; )
    n += 1, l = `Query ${n}`;
  return { contents: { ...e, [l]: "" }, queryPath: [l] };
}
function or(e, t) {
  if (t.length > 1) {
    let n = or(e[t[0]], t.slice(1));
    return { ...e, [t[0]]: n };
  }
  return Object.fromEntries(
    Object.entries(e).filter((n) => n[0] != t[0])
  );
}
function Ga(e, t, n) {
  if (t.length > 1) {
    let l = Ga(e[t[0]], t.slice(1), n);
    return { ...e, [t[0]]: l };
  }
  return {
    ...Object.fromEntries(
      Object.entries(e).filter((l) => l[0] != t[0])
    ),
    [t[0]]: n
  };
}
function Va(e, t, n) {
  if (t.length > 1) {
    let l = Va(
      e[t[0]],
      t.slice(1),
      n
    );
    return { ...e, [t[0]]: l };
  }
  return {
    ...Object.fromEntries(
      Object.entries(e).filter((l) => l[0] != t[0])
    ),
    [t[0]]: n
  };
}
function Vr(e, t) {
  return t.length > 1 ? typeof e[t[0]] == "object" && Vr(e[t[0]], t.slice(1)) : e[t[0]] !== void 0;
}
function Wr(e, t = []) {
  if (t.length > 1) {
    let r = Wr(e[t[0]], t.slice(1));
    return {
      contents: { ...e, [t[0]]: r.contents },
      queryPath: [t[0], ...r.queryPath]
    };
  }
  let n = 2, l = `${t[0]} ${n}`;
  for (; e[l]; )
    n += 1, l = `${t[0]} ${n}`;
  return {
    contents: { ...e, [l]: e[t[0]] },
    queryPath: [l]
  };
}
function Kr(e, t) {
  return t.length > 1 ? Kr(e[t[0]], t.slice(1)) : e[t[0]];
}
function Wa(e, t, n) {
  let l = Kr(e, t), r = or(e, t);
  return Ga(r, n, l);
}
function U0(e) {
  let t, n, l, r, i;
  const o = [e1, $0, Z0], a = [];
  function f(s, u) {
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
  return ~(n = f(e)) && (l = a[n] = o[n](e)), {
    c() {
      t = k("div"), l && l.c(), b(t, "class", r = "h-full " + /*scrollable*/
      (e[7] ? "overflow-auto" : ""));
    },
    m(s, u) {
      L(s, t, u), ~n && a[n].m(t, null), i = !0;
    },
    p(s, u) {
      let c = n;
      n = f(s), n === c ? ~n && a[n].p(s, u) : (l && (ie(), R(a[c], 1, 1, () => {
        a[c] = null;
      }), oe()), ~n ? (l = a[n], l ? l.p(s, u) : (l = a[n] = o[n](s), l.c()), w(l, 1), l.m(t, null)) : l = null), (!i || u & /*scrollable*/
      128 && r !== (r = "h-full " + /*scrollable*/
      (s[7] ? "overflow-auto" : ""))) && b(t, "class", r);
    },
    i(s) {
      i || (w(l), i = !0);
    },
    o(s) {
      R(l), i = !1;
    },
    d(s) {
      s && M(t), ~n && a[n].d();
    }
  };
}
function J0(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, g, h;
  return o = new me({
    props: { icon: ha, class: "inline mr-2" }
  }), u = new me({
    props: {
      icon: _a,
      class: "inline mr-2"
    }
  }), {
    c() {
      t = k("div"), n = k("textarea"), l = P(), r = k("div"), i = k("button"), W(o.$$.fragment), a = I(`
          History`), f = P(), s = k("button"), W(u.$$.fragment), c = I(`
          Ask AI`), b(n, "class", "w-full h-full p-4 pb-16 bg-transparent text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none overflow-hidden min-h-[120px] relative z-20"), b(n, "placeholder", "Ask me to generate, update, or explain a TempoQL query..."), n.disabled = /*isLoading*/
      e[2], b(n, "rows", "5"), b(i, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), b(i, "title", "View query history"), b(s, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50"), s.disabled = d = !/*question*/
      e[0].trim() || /*isLoading*/
      e[2], b(r, "class", "absolute right-0 bottom-0 mr-4 mb-4 flex justify-end items-center gap-2 z-50"), b(t, "class", "relative w-full min-h-0 flex-auto");
    },
    m(p, S) {
      L(p, t, S), _(t, n), e[20](n), ut(
        n,
        /*question*/
        e[0]
      ), _(t, l), _(t, r), _(r, i), B(o, i, null), _(i, a), _(r, f), _(r, s), B(u, s, null), _(s, c), m = !0, g || (h = [
        U(
          n,
          "input",
          /*textarea_input_handler*/
          e[21]
        ),
        U(
          n,
          "keydown",
          /*handleKeydown*/
          e[13]
        ),
        U(i, "click", function() {
          Je(
            /*onHistoryClick*/
            e[8]
          ) && e[8].apply(this, arguments);
        }),
        U(
          s,
          "click",
          /*click_handler_2*/
          e[22]
        )
      ], g = !0);
    },
    p(p, S) {
      e = p, (!m || S & /*isLoading*/
      4) && (n.disabled = /*isLoading*/
      e[2]), S & /*question*/
      1 && ut(
        n,
        /*question*/
        e[0]
      ), (!m || S & /*question, isLoading*/
      5 && d !== (d = !/*question*/
      e[0].trim() || /*isLoading*/
      e[2])) && (s.disabled = d);
    },
    i(p) {
      m || (w(o.$$.fragment, p), w(u.$$.fragment, p), m = !0);
    },
    o(p) {
      R(o.$$.fragment, p), R(u.$$.fragment, p), m = !1;
    },
    d(p) {
      p && M(t), e[20](null), G(o), G(u), g = !1, we(h);
    }
  };
}
function Z0(e) {
  let t, n, l, r;
  return l = new Ba({
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
      t = k("div"), n = k("div"), W(l.$$.fragment), b(n, "class", "text-gray-700 dark:text-gray-200 text-sm leading-relaxed prose prose-sm max-w-none"), b(t, "class", "flex-1 overflow-y-auto ai-scrollbar");
    },
    m(i, o) {
      L(i, t, o), _(t, n), B(l, n, null), r = !0;
    },
    p(i, o) {
      const a = {};
      o & /*llmResponse*/
      16 && (a.text = /*llmResponse*/
      i[4]), o & /*onRun*/
      2 && (a.onRun = /*onRun*/
      i[1]), l.$set(a);
    },
    i(i) {
      r || (w(l.$$.fragment, i), r = !0);
    },
    o(i) {
      R(l.$$.fragment, i), r = !1;
    },
    d(i) {
      i && M(t), G(l);
    }
  };
}
function $0(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = k("div"), n = k("h3"), n.textContent = "Error", l = P(), r = k("div"), i = I(
        /*error*/
        e[3]
      ), b(n, "class", "text-lg font-medium text-red-700 dark:text-red-100 mb-2"), b(r, "class", "text-sm font-mono text-gray-800 dark:text-gray-100"), b(t, "class", "bg-red-50 dark:bg-red-800/40 rounded-lg border border-red-200 dark:border-red-400 p-4 mb-4");
    },
    m(o, a) {
      L(o, t, a), _(t, n), _(t, l), _(t, r), _(r, i);
    },
    p(o, a) {
      a & /*error*/
      8 && ae(
        i,
        /*error*/
        o[3]
      );
    },
    i: Z,
    o: Z,
    d(o) {
      o && M(t);
    }
  };
}
function e1(e) {
  let t;
  return {
    c() {
      t = k("h4"), t.innerHTML = `<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 dark:border-blue-400"></span>
           AI is thinking...`, b(t, "class", "text-blue-600 dark:text-blue-400 font-medium text-sm");
    },
    m(n, l) {
      L(n, t, l);
    },
    p: Z,
    i: Z,
    o: Z,
    d(n) {
      n && M(t);
    }
  };
}
function t1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, g, h, p, S, y, v, N, q, D, x, V, A, O;
  S = new me({
    props: {
      icon: (
        /*apiStatusInfo*/
        e[11].icon
      ),
      class: "inline mr-2"
    }
  });
  const C = [J0, U0], T = [];
  function ee(X, Q) {
    return (
      /*tab*/
      X[9] == "query" ? 0 : 1
    );
  }
  return q = ee(e), D = T[q] = C[q](e), {
    c() {
      t = k("div"), n = k("div"), l = k("h3"), l.textContent = "AI Assistant", r = P(), i = k("button"), o = I("Query"), f = P(), s = k("button"), u = I("Response"), m = P(), g = k("div"), h = P(), p = k("div"), W(S.$$.fragment), y = P(), v = I(
        /*apiStatus*/
        e[5]
      ), N = P(), D.c(), b(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100 pr-2"), b(i, "class", a = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*tab*/
      (e[9] === "query" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800")), b(i, "type", "button"), b(s, "class", c = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 disabled:opacity-50 " + /*tab*/
      (e[9] === "response" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800")), s.disabled = d = !/*llmResponse*/
      e[4] && !/*error*/
      e[3], b(s, "type", "button"), b(g, "class", "flex-auto"), b(p, "class", "flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"), b(n, "class", "flex items-center mb-4 gap-2 shrink-0"), b(t, "class", x = "px-4 pb-4 " + /*width*/
      e[6] + " h-full flex flex-col");
    },
    m(X, Q) {
      L(X, t, Q), _(t, n), _(n, l), _(n, r), _(n, i), _(i, o), _(n, f), _(n, s), _(s, u), _(n, m), _(n, g), _(n, h), _(n, p), B(S, p, null), _(p, y), _(p, v), _(t, N), T[q].m(t, null), V = !0, A || (O = [
        U(
          i,
          "click",
          /*click_handler*/
          e[18]
        ),
        U(
          s,
          "click",
          /*click_handler_1*/
          e[19]
        )
      ], A = !0);
    },
    p(X, [Q]) {
      (!V || Q & /*tab*/
      512 && a !== (a = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*tab*/
      (X[9] === "query" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"))) && b(i, "class", a), (!V || Q & /*tab*/
      512 && c !== (c = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 disabled:opacity-50 " + /*tab*/
      (X[9] === "response" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"))) && b(s, "class", c), (!V || Q & /*llmResponse, error*/
      24 && d !== (d = !/*llmResponse*/
      X[4] && !/*error*/
      X[3])) && (s.disabled = d);
      const H = {};
      Q & /*apiStatusInfo*/
      2048 && (H.icon = /*apiStatusInfo*/
      X[11].icon), S.$set(H), (!V || Q & /*apiStatus*/
      32) && ae(
        v,
        /*apiStatus*/
        X[5]
      );
      let ne = q;
      q = ee(X), q === ne ? T[q].p(X, Q) : (ie(), R(T[ne], 1, 1, () => {
        T[ne] = null;
      }), oe(), D = T[q], D ? D.p(X, Q) : (D = T[q] = C[q](X), D.c()), w(D, 1), D.m(t, null)), (!V || Q & /*width*/
      64 && x !== (x = "px-4 pb-4 " + /*width*/
      X[6] + " h-full flex flex-col")) && b(t, "class", x);
    },
    i(X) {
      V || (w(S.$$.fragment, X), w(D), V = !0);
    },
    o(X) {
      R(S.$$.fragment, X), R(D), V = !1;
    },
    d(X) {
      X && M(t), G(S), T[q].d(), A = !1, we(O);
    }
  };
}
function n1(e, t, n) {
  let l, { onSubmit: r = () => {
  } } = t, { onRun: i = () => {
  } } = t, { isLoading: o = !1 } = t, { error: a = "" } = t, { llmResponse: f = "" } = t, { apiStatus: s = "Checking API connection..." } = t, { width: u = "w-full" } = t, { scrollable: c = !0 } = t, { extractedQuery: d = "" } = t, { hasExtractedQuery: m = !1 } = t, { onQueryExtracted: g = () => {
  } } = t, { onHistoryClick: h = () => {
  } } = t, p = "query", { question: S = "" } = t, y;
  function v() {
    S.trim() && (r(S.trim()), y && y.focus());
  }
  function N(C) {
    C.key === "Enter" && !C.shiftKey && (C.preventDefault(), v());
  }
  function q(C) {
    return C.includes("Configured") || C.includes("ready") ? {
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      icon: wf
    } : C.includes("Not configured") || C.includes("Invalid") ? {
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      icon: Tf
    } : {
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      icon: Df
    };
  }
  const D = () => n(9, p = "query"), x = () => n(9, p = "response");
  function V(C) {
    Me[C ? "unshift" : "push"](() => {
      y = C, n(10, y);
    });
  }
  function A() {
    S = this.value, n(0, S);
  }
  const O = () => {
    v(), n(9, p = "response");
  };
  return e.$$set = (C) => {
    "onSubmit" in C && n(14, r = C.onSubmit), "onRun" in C && n(1, i = C.onRun), "isLoading" in C && n(2, o = C.isLoading), "error" in C && n(3, a = C.error), "llmResponse" in C && n(4, f = C.llmResponse), "apiStatus" in C && n(5, s = C.apiStatus), "width" in C && n(6, u = C.width), "scrollable" in C && n(7, c = C.scrollable), "extractedQuery" in C && n(15, d = C.extractedQuery), "hasExtractedQuery" in C && n(16, m = C.hasExtractedQuery), "onQueryExtracted" in C && n(17, g = C.onQueryExtracted), "onHistoryClick" in C && n(8, h = C.onHistoryClick), "question" in C && n(0, S = C.question);
  }, e.$$.update = () => {
    e.$$.dirty & /*hasExtractedQuery, extractedQuery, onQueryExtracted*/
    229376 && m && d && (console.log("🤖 AIAssistant: Query extracted, triggering handler:", d), g()), e.$$.dirty & /*apiStatus*/
    32 && n(11, l = q(s));
  }, [
    S,
    i,
    o,
    a,
    f,
    s,
    u,
    c,
    h,
    p,
    y,
    l,
    v,
    N,
    r,
    d,
    m,
    g,
    D,
    x,
    V,
    A,
    O
  ];
}
class l1 extends ke {
  constructor(t) {
    super(), pe(this, t, n1, t1, ye, {
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
const Xo = [
  "now",
  "value",
  "mintime",
  "maxtime",
  "indexvalue"
];
function r1(e, t, n) {
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
    const i = r.toLowerCase(), o = e.filter((s) => s.toLowerCase().startsWith(i)).sort((s, u) => s.length !== u.length ? s.length - u.length : s.localeCompare(u)).slice(0, 10), a = e.filter((s) => {
      const u = s.toLowerCase();
      return u.includes(i) && !u.startsWith(i);
    }).sort((s, u) => {
      const c = s.toLowerCase().indexOf(i), d = u.toLowerCase().indexOf(i);
      return c !== d ? c - d : s.length !== u.length ? s.length - u.length : s.localeCompare(u);
    }).slice(0, 5), f = [...o, ...a].map((s) => ({
      value: s,
      type: "data_item"
    }));
    return console.log("🔍 getAutocompleteOptions - Data field matches:", f), f;
  }
  if (l = n.match(/#([^\s]*)/), console.log("🔍 getAutocompleteOptions - Constant regex result:", l), l) {
    console.log("🔍 getAutocompleteOptions - Processing constants");
    const r = l[1] || "";
    console.log(
      "🔍 getAutocompleteOptions - Constant search query:",
      r
    );
    const i = r.toLowerCase(), o = Xo.filter((s) => s.toLowerCase().startsWith(i)).sort((s, u) => s.length - u.length), a = Xo.filter((s) => {
      const u = s.toLowerCase();
      return u.includes(i) && !u.startsWith(i);
    }).sort((s, u) => s.length - u.length), f = [...o, ...a].map((s) => ({
      value: s,
      type: "constant"
    }));
    return console.log("🔍 getAutocompleteOptions - Constant matches:", f), f;
  }
  return console.log("🔍 getAutocompleteOptions - No matches found"), [];
}
function Yo(e, t, n) {
  const l = e.slice();
  return l[33] = t[n], l[35] = n, l;
}
function Uo(e) {
  let t, n = (
    /*autocompleteOptions*/
    e[6]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Jo(Yo(e, n, r));
  return {
    c() {
      t = k("div");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      b(t, "class", "absolute z-30 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-xl max-h-48 overflow-y-auto");
    },
    m(r, i) {
      L(r, t, i);
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
          const a = Yo(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = Jo(a), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(r) {
      r && M(t), Ee(l, r), e[23](null);
    }
  };
}
function Jo(e) {
  let t, n, l, r = (
    /*option*/
    e[33].value + ""
  ), i, o, a, f = (
    /*option*/
    e[33].type === "data_item" ? "field" : "const"
  ), s, u, c, d, m;
  function g() {
    return (
      /*click_handler*/
      e[20](
        /*option*/
        e[33]
      )
    );
  }
  function h(...S) {
    return (
      /*keydown_handler*/
      e[21](
        /*option*/
        e[33],
        ...S
      )
    );
  }
  function p() {
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
      t = k("div"), n = k("div"), l = k("span"), i = I(r), o = P(), a = k("span"), s = I(f), u = P(), b(l, "class", "font-mono text-sm"), b(a, "class", "text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"), b(n, "class", "flex items-center justify-between"), b(t, "class", c = "px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors " + /*index*/
      (e[35] === /*selectedIndex*/
      e[7] ? "bg-blue-600 text-white" : "text-gray-700 dark:text-gray-200")), b(t, "role", "button"), b(t, "tabindex", "0");
    },
    m(S, y) {
      L(S, t, y), _(t, n), _(n, l), _(l, i), _(n, o), _(n, a), _(a, s), _(t, u), d || (m = [
        U(t, "click", g),
        U(t, "keydown", h),
        U(t, "mouseenter", p)
      ], d = !0);
    },
    p(S, y) {
      e = S, y[0] & /*autocompleteOptions*/
      64 && r !== (r = /*option*/
      e[33].value + "") && ae(i, r), y[0] & /*autocompleteOptions*/
      64 && f !== (f = /*option*/
      e[33].type === "data_item" ? "field" : "const") && ae(s, f), y[0] & /*selectedIndex*/
      128 && c !== (c = "px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors " + /*index*/
      (e[35] === /*selectedIndex*/
      e[7] ? "bg-blue-600 text-white" : "text-gray-700 dark:text-gray-200")) && b(t, "class", c);
    },
    d(S) {
      S && M(t), d = !1, we(m);
    }
  };
}
function i1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, g, h, p, S, y, v, N = (
    /*showAutocomplete*/
    e[8] && /*autocompleteOptions*/
    e[6].length > 0 && Uo(e)
  );
  return u = new me({
    props: { icon: ha, class: "inline mr-2" }
  }), g = new me({
    props: { icon: ya, class: "inline mr-2" }
  }), {
    c() {
      t = k("div"), n = k("div"), l = k("textarea"), r = P(), i = k("div"), o = P(), N && N.c(), a = P(), f = k("div"), s = k("button"), W(u.$$.fragment), c = I(`
        History`), d = P(), m = k("button"), W(g.$$.fragment), h = I(`
        Run Query`), b(l, "id", "text-input"), b(l, "class", "w-full h-full p-4 pb-16 bg-transparent font-mono text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none overflow-hidden min-h-[120px] relative z-20 svelte-1w5ogy4"), b(l, "placeholder", "// Write your Tempo-QL query here... (Ctrl+Z to undo, Ctrl+Y to redo)"), b(l, "autocomplete", "false"), b(l, "autocapitalize", "false"), b(l, "autocorrect", "false"), b(l, "spellcheck", "false"), b(l, "rows", "1"), le(l, "color", "transparent"), le(l, "caret-color", "currentColor"), b(i, "class", "absolute top-0 left-0 w-full h-full p-4 pb-16 font-mono text-sm pointer-events-none bg-transparent z-10 text-wrap whitespace-pre-wrap break-words text-gray-900 dark:text-gray-100 svelte-1w5ogy4"), b(
        i,
        "id",
        /*highlightedViewID*/
        e[9]
      ), b(s, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), b(s, "title", "View query history"), b(m, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white"), m.disabled = p = !/*value*/
      e[0].trim(), se(m, "opacity-50", !/*value*/
      e[0].trim()), se(m, "cursor-not-allowed", !/*value*/
      e[0].trim()), b(f, "class", "absolute right-0 bottom-0 mr-4 mb-4 flex justify-end items-center gap-2 z-50"), b(n, "class", "relative flex-auto min-h-0"), b(t, "class", "flex flex-col w-full h-full px-4 mb-2");
    },
    m(q, D) {
      L(q, t, D), _(t, n), _(n, l), e[17](l), ut(
        l,
        /*value*/
        e[0]
      ), _(n, r), _(n, i), e[19](i), _(n, o), N && N.m(n, null), _(n, a), _(n, f), _(f, s), B(u, s, null), _(s, c), _(f, d), _(f, m), B(g, m, null), _(m, h), S = !0, y || (v = [
        U(
          l,
          "input",
          /*textarea_1_input_handler*/
          e[18]
        ),
        U(
          l,
          "input",
          /*handleInput*/
          e[10]
        ),
        U(
          l,
          "keydown",
          /*handleKeydown*/
          e[11]
        ),
        U(s, "click", function() {
          Je(
            /*onHistoryClick*/
            e[2]
          ) && e[2].apply(this, arguments);
        }),
        U(m, "click", function() {
          Je(
            /*onRun*/
            e[1]
          ) && e[1].apply(this, arguments);
        })
      ], y = !0);
    },
    p(q, D) {
      e = q, D[0] & /*value*/
      1 && ut(
        l,
        /*value*/
        e[0]
      ), /*showAutocomplete*/
      e[8] && /*autocompleteOptions*/
      e[6].length > 0 ? N ? N.p(e, D) : (N = Uo(e), N.c(), N.m(n, a)) : N && (N.d(1), N = null), (!S || D[0] & /*value*/
      1 && p !== (p = !/*value*/
      e[0].trim())) && (m.disabled = p), (!S || D[0] & /*value*/
      1) && se(m, "opacity-50", !/*value*/
      e[0].trim()), (!S || D[0] & /*value*/
      1) && se(m, "cursor-not-allowed", !/*value*/
      e[0].trim());
    },
    i(q) {
      S || (w(u.$$.fragment, q), w(g.$$.fragment, q), S = !0);
    },
    o(q) {
      R(u.$$.fragment, q), R(g.$$.fragment, q), S = !1;
    },
    d(q) {
      q && M(t), e[17](null), e[19](null), N && N.d(), G(u), G(g), y = !1, we(v);
    }
  };
}
function o1(e, t, n) {
  let { value: l = "" } = t, { onInput: r = () => {
  } } = t, { width: i = "w-full max-w-2xl" } = t, { dataFields: o = [] } = t, { onRun: a = () => {
  } } = t, { onExplain: f = () => {
  } } = t, { onHistoryClick: s = () => {
  } } = t, u, c, d, m = [], g = 0, h = !1, p = 0, S = "highlightView-" + new Array(20).fill(0).map(() => Math.floor(Math.random() * 10)).join(""), y = [], v = -1, N = !1;
  pt(() => {
    D(""), document.addEventListener("click", q);
  }), sf(() => {
    document.removeEventListener("click", q);
  });
  function q(E) {
    if (c && u) {
      const Y = E.target, K = c.contains(Y), ce = u.contains(Y);
      (!K || ce && h) && (console.log("🖱️ Click detected - closing autocomplete"), n(8, h = !1));
    }
  }
  function D(E) {
    if (N) {
      N = !1;
      return;
    }
    y = y.slice(0, v + 1), y.push(E), v = y.length - 1, y.length > 50 && (y = y.slice(-50), v = y.length - 1), console.log("📝 Added to history:", E, "Index:", v);
  }
  function x() {
    if (v > 0) {
      N = !0, v--;
      const E = y[v];
      console.log("↶ Undo to:", E), n(0, l = E), r(E), u && (n(3, u.value = E, u), u.focus());
    }
  }
  function V() {
    if (v < y.length - 1) {
      N = !0, v++;
      const E = y[v];
      console.log("↷ Redo to:", E), n(0, l = E), r(E), u && (n(3, u.value = E, u), u.focus());
    }
  }
  function A(E) {
    const Y = E.target, K = Y.value;
    console.log("🔍 handleInput - New value:", K), console.log("🔍 handleInput - Cursor position:", Y.selectionStart), D(K), n(0, l = K), r(K), p = Y.selectionStart || 0, console.log("🔍 handleInput - Updated cursor position:", p), O(K, p);
  }
  function O(E, Y) {
    console.log("🔍 updateAutocompleteOptions - Text:", E), console.log("🔍 updateAutocompleteOptions - Position:", Y);
    const K = E.substring(0, Y), ce = E.substring(Y);
    console.log("🔍 updateAutocompleteOptions - Before cursor:", K), console.log("🔍 updateAutocompleteOptions - After cursor:", ce);
    const F = K.match(/([^\s]*)$/), fe = F ? F[1] : "";
    console.log("🔍 updateAutocompleteOptions - Current word:", fe), console.log("🔍 updateAutocompleteOptions - Data fields available:", o), fe.length > 0 ? (n(6, m = r1(o, fe, K)), console.log("🔍 updateAutocompleteOptions - Autocomplete options:", m), n(8, h = m.length > 0), n(7, g = 0), console.log("🔍 updateAutocompleteOptions - Show autocomplete:", h)) : (n(8, h = !1), console.log("🔍 updateAutocompleteOptions - No current word, hiding autocomplete"));
  }
  function C(E) {
    if (console.log("🔍 handleKeydown - Key pressed:", E.key), console.log("🔍 handleKeydown - Show autocomplete:", h), console.log("🔍 handleKeydown - Options count:", m.length), E.ctrlKey || E.metaKey) {
      if (E.key === "z" && !E.shiftKey) {
        E.preventDefault(), console.log("⌨️ Ctrl+Z pressed - Undo"), x();
        return;
      } else if (E.key === "y" || E.key === "z" && E.shiftKey) {
        E.preventDefault(), console.log("⌨️ Ctrl+Y or Ctrl+Shift+Z pressed - Redo"), V();
        return;
      }
    }
    if (!h) {
      console.log("🔍 handleKeydown - Autocomplete not shown, ignoring key");
      return;
    }
    switch (E.key) {
      case "ArrowDown":
        E.preventDefault(), n(7, g = (g + 1) % m.length), console.log("🔍 handleKeydown - ArrowDown, new selectedIndex:", g);
        break;
      case "ArrowUp":
        E.preventDefault(), n(7, g = g === 0 ? m.length - 1 : g - 1), console.log("🔍 handleKeydown - ArrowUp, new selectedIndex:", g);
        break;
      case "Enter":
        h && (E.preventDefault(), console.log("🔍 handleKeydown - Enter pressed, selecting option:", m[g]), T(m[g]));
        break;
      case "Escape":
        n(8, h = !1), console.log("🔍 handleKeydown - Escape pressed, hiding autocomplete");
        break;
      case "Tab":
        h && (E.preventDefault(), console.log("🔍 handleKeydown - Tab pressed, selecting option:", m[g]), T(m[g]));
        break;
    }
  }
  function T(E) {
    console.log("🔍 selectAutocompleteOption - Selected option:", E), console.log("🔍 selectAutocompleteOption - Current value:", l), console.log("🔍 selectAutocompleteOption - Cursor position:", p);
    const Y = l.substring(0, p), K = l.substring(p);
    console.log("🔍 selectAutocompleteOption - Before cursor:", Y), console.log("🔍 selectAutocompleteOption - After cursor:", K);
    const ce = Y.match(/([^\s]*)$/), F = ce ? ce[1] : "", fe = Y.length - F.length;
    console.log("🔍 selectAutocompleteOption - Current word:", F), console.log("🔍 selectAutocompleteOption - Word start position:", fe);
    let te;
    if (E.type === "data_item")
      if (F.includes("{")) {
        const Le = Y.match(/\{([^}]*?)(?:,\s*([^},]*))?$/);
        Le ? Le[2] ? te = Y.substring(0, Le.index + Le[1].length + 2) + E.value : te = Y.substring(0, Le.index + 1) + E.value : te = Y + E.value;
      } else
        te = Y + "{" + E.value;
    else
      te = Y.substring(0, fe) + "#" + E.value;
    console.log("🔍 selectAutocompleteOption - Replacement:", te);
    const be = te + K;
    console.log("🔍 selectAutocompleteOption - New value:", be), n(0, l = be), r(be);
    const $ = te.length;
    console.log("🔍 selectAutocompleteOption - New cursor position:", $), setTimeout(
      () => {
        u && (u.setSelectionRange($, $), u.focus(), console.log("🔍 selectAutocompleteOption - Cursor position set"));
      },
      0
    ), n(8, h = !1), console.log("🔍 selectAutocompleteOption - Autocomplete hidden");
  }
  function ee(E) {
    Me[E ? "unshift" : "push"](() => {
      u = E, n(3, u), n(0, l);
    });
  }
  function X() {
    l = this.value, n(0, l);
  }
  function Q(E) {
    Me[E ? "unshift" : "push"](() => {
      d = E, n(4, d), n(0, l), n(9, S);
    });
  }
  const H = (E) => T(E), ne = (E, Y) => {
    (Y.key === "Enter" || Y.key === " ") && (Y.preventDefault(), T(E));
  }, ue = (E) => n(7, g = E);
  function re(E) {
    Me[E ? "unshift" : "push"](() => {
      c = E, n(5, c);
    });
  }
  return e.$$set = (E) => {
    "value" in E && n(0, l = E.value), "onInput" in E && n(13, r = E.onInput), "width" in E && n(14, i = E.width), "dataFields" in E && n(15, o = E.dataFields), "onRun" in E && n(1, a = E.onRun), "onExplain" in E && n(16, f = E.onExplain), "onHistoryClick" in E && n(2, s = E.onHistoryClick);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*highlightedView, value*/
    17 && d && l !== void 0) {
      let E = l;
      n(4, d.innerText = Ha(E), d), Ia({
        selector: `#${S}`,
        patterns: Fa
      });
    }
    e.$$.dirty[0] & /*textarea, value*/
    9 && u && l !== void 0 && u.value !== l && (n(3, u.value = l, u), D(l));
  }, [
    l,
    a,
    s,
    u,
    d,
    c,
    m,
    g,
    h,
    S,
    A,
    C,
    T,
    r,
    i,
    o,
    f,
    ee,
    X,
    Q,
    H,
    ne,
    ue,
    re
  ];
}
class a1 extends ke {
  constructor(t) {
    super(), pe(
      this,
      t,
      o1,
      i1,
      ye,
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
    this.$$set({ value: t }), We();
  }
  get onInput() {
    return this.$$.ctx[13];
  }
  set onInput(t) {
    this.$$set({ onInput: t }), We();
  }
  get width() {
    return this.$$.ctx[14];
  }
  set width(t) {
    this.$$set({ width: t }), We();
  }
  get dataFields() {
    return this.$$.ctx[15];
  }
  set dataFields(t) {
    this.$$set({ dataFields: t }), We();
  }
  get onRun() {
    return this.$$.ctx[1];
  }
  set onRun(t) {
    this.$$set({ onRun: t }), We();
  }
  get onExplain() {
    return this.$$.ctx[16];
  }
  set onExplain(t) {
    this.$$set({ onExplain: t }), We();
  }
  get onHistoryClick() {
    return this.$$.ctx[2];
  }
  set onHistoryClick(t) {
    this.$$set({ onHistoryClick: t }), We();
  }
}
function Zo(e, t, n) {
  const l = e.slice();
  return l[33] = t[n][0], l[34] = t[n][1], l[36] = n, l;
}
function $o(e) {
  let t, n, l, r, i, o;
  return n = new nr({
    props: {
      class: "w-full flex items-center gap-2 " + /*draggingCounter*/
      (e[11] > 0 ? "bg-blue-200 dark:bg-blue-200/40" : "hover:bg-gray-100 dark:hover:bg-gray-800") + " dark:text-gray-100 text-gray-900 px-4 py-2 ",
      $$slots: {
        default: [
          f1,
          ({ hovering: a }) => ({ 37: a }),
          ({ hovering: a }) => [0, a ? 64 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      t = k("div"), W(n.$$.fragment), b(t, "class", l = "w-full cursor-pointer select-none " + (!/*collapsed*/
      e[12] && /*itemCount*/
      e[13] > 0 || /*collapsed*/
      (e[12] || /*itemCount*/
      e[13] == 0) && /*showBorder*/
      e[10] ? "border-b border-gray-200 dark:border-gray-700" : "")), b(t, "draggable", "true");
    },
    m(a, f) {
      L(a, t, f), B(n, t, null), r = !0, i || (o = [
        U(t, "dragover", Ka),
        U(
          t,
          "drop",
          /*drop_handler*/
          e[22]
        ),
        U(
          t,
          "click",
          /*toggle*/
          e[14]
        ),
        U(
          t,
          "dragstart",
          /*dragstart_handler*/
          e[23]
        ),
        U(t, "dragenter", qe(Or(
          /*dragenter_handler*/
          e[24]
        ))),
        U(t, "dragleave", qe(
          /*dragleave_handler*/
          e[25]
        ))
      ], i = !0);
    },
    p(a, f) {
      const s = {};
      f[0] & /*draggingCounter*/
      2048 && (s.class = "w-full flex items-center gap-2 " + /*draggingCounter*/
      (a[11] > 0 ? "bg-blue-200 dark:bg-blue-200/40" : "hover:bg-gray-100 dark:hover:bg-gray-800") + " dark:text-gray-100 text-gray-900 px-4 py-2 "), f[0] & /*onDuplicate, path, onNewQuery, onNewGroup, collapsed, itemCount, name*/
      12643 | f[1] & /*$$scope, hovering*/
      192 && (s.$$scope = { dirty: f, ctx: a }), n.$set(s), (!r || f[0] & /*collapsed, itemCount, showBorder*/
      13312 && l !== (l = "w-full cursor-pointer select-none " + (!/*collapsed*/
      a[12] && /*itemCount*/
      a[13] > 0 || /*collapsed*/
      (a[12] || /*itemCount*/
      a[13] == 0) && /*showBorder*/
      a[10] ? "border-b border-gray-200 dark:border-gray-700" : ""))) && b(t, "class", l);
    },
    i(a) {
      r || (w(n.$$.fragment, a), r = !0);
    },
    o(a) {
      R(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && M(t), G(n), i = !1, we(o);
    }
  };
}
function ea(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, g, h, p, S, y, v;
  return r = new me({
    props: { icon: yt, class: "inline mr-2" }
  }), f = new me({
    props: { icon: yt, class: "inline mr-2" }
  }), m = new me({ props: { icon: er } }), p = new me({ props: { icon: Pr } }), {
    c() {
      t = k("div"), n = P(), l = k("button"), W(r.$$.fragment), i = I(`
          Group`), o = P(), a = k("button"), W(f.$$.fragment), s = I(`
          Query`), u = P(), c = k("div"), d = k("button"), W(m.$$.fragment), g = P(), h = k("button"), W(p.$$.fragment), b(t, "class", "flex-auto"), b(l, "class", "px-2 py-1 font-semibold text-xs rounded transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), b(l, "title", "Create a new group"), b(a, "class", "px-2 py-1 font-semibold text-xs rounded transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), b(a, "title", "Create a new query"), b(d, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), b(d, "title", "Duplicate this group"), b(h, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), b(h, "title", "Delete this group"), b(c, "class", "flex items-center");
    },
    m(N, q) {
      L(N, t, q), L(N, n, q), L(N, l, q), B(r, l, null), _(l, i), L(N, o, q), L(N, a, q), B(f, a, null), _(a, s), L(N, u, q), L(N, c, q), _(c, d), B(m, d, null), _(c, g), _(c, h), B(p, h, null), S = !0, y || (v = [
        U(l, "click", qe(
          /*click_handler*/
          e[18]
        )),
        U(a, "click", qe(
          /*click_handler_1*/
          e[19]
        )),
        U(d, "click", qe(
          /*click_handler_2*/
          e[20]
        )),
        U(h, "click", qe(
          /*click_handler_3*/
          e[21]
        ))
      ], y = !0);
    },
    p: Z,
    i(N) {
      S || (w(r.$$.fragment, N), w(f.$$.fragment, N), w(m.$$.fragment, N), w(p.$$.fragment, N), S = !0);
    },
    o(N) {
      R(r.$$.fragment, N), R(f.$$.fragment, N), R(m.$$.fragment, N), R(p.$$.fragment, N), S = !1;
    },
    d(N) {
      N && M(t), N && M(n), N && M(l), G(r), N && M(o), N && M(a), G(f), N && M(u), N && M(c), G(m), G(p), y = !1, we(v);
    }
  };
}
function f1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d;
  t = new me({
    props: {
      icon: (
        /*collapsed*/
        e[12] ? Ze : Ae
      ),
      class: "w-4 mr-2 shrink-0"
    }
  });
  let m = (
    /*hovering*/
    e[37] && ea(e)
  );
  return {
    c() {
      W(t.$$.fragment), n = P(), l = k("div"), r = I(
        /*name*/
        e[0]
      ), i = P(), o = k("span"), a = I("("), f = I(
        /*itemCount*/
        e[13]
      ), s = I(")"), u = P(), m && m.c(), c = _e(), b(o, "class", "text-xs text-gray-500"), b(l, "class", "font-semibold flex-auto py-0.5 truncate");
    },
    m(g, h) {
      B(t, g, h), L(g, n, h), L(g, l, h), _(l, r), _(l, i), _(l, o), _(o, a), _(o, f), _(o, s), L(g, u, h), m && m.m(g, h), L(g, c, h), d = !0;
    },
    p(g, h) {
      const p = {};
      h[0] & /*collapsed*/
      4096 && (p.icon = /*collapsed*/
      g[12] ? Ze : Ae), t.$set(p), (!d || h[0] & /*name*/
      1) && ae(
        r,
        /*name*/
        g[0]
      ), (!d || h[0] & /*itemCount*/
      8192) && ae(
        f,
        /*itemCount*/
        g[13]
      ), /*hovering*/
      g[37] ? m ? (m.p(g, h), h[1] & /*hovering*/
      64 && w(m, 1)) : (m = ea(g), m.c(), w(m, 1), m.m(c.parentNode, c)) : m && (ie(), R(m, 1, 1, () => {
        m = null;
      }), oe());
    },
    i(g) {
      d || (w(t.$$.fragment, g), w(m), d = !0);
    },
    o(g) {
      R(t.$$.fragment, g), R(m), d = !1;
    },
    d(g) {
      G(t, g), g && M(n), g && M(l), g && M(u), m && m.d(g), g && M(c);
    }
  };
}
function ta(e) {
  let t, n, l = Object.entries(
    /*queries*/
    e[2]
  ).sort(ia), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = la(Zo(e, l, o));
  const i = (o) => R(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      t = _e();
    },
    m(o, a) {
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(o, a);
      L(o, t, a), n = !0;
    },
    p(o, a) {
      if (a[0] & /*itemCount, showBorder, onSelect, path, queries, handleDrop, draggingCounter, indentLevel, deleteItem, onDuplicate, onNewQuery, onNewGroup, onDelete, onMove*/
      110590 | a[1] & /*hovering*/
      64) {
        l = Object.entries(
          /*queries*/
          o[2]
        ).sort(ia);
        let f;
        for (f = 0; f < l.length; f += 1) {
          const s = Zo(o, l, f);
          r[f] ? (r[f].p(s, a), w(r[f], 1)) : (r[f] = la(s), r[f].c(), w(r[f], 1), r[f].m(t.parentNode, t));
        }
        for (ie(), f = l.length; f < r.length; f += 1)
          i(f);
        oe();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < l.length; a += 1)
          w(r[a]);
        n = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1)
        R(r[a]);
      n = !1;
    },
    d(o) {
      Ee(r, o), o && M(t);
    }
  };
}
function s1(e) {
  let t, n;
  return t = new Xa({
    props: {
      name: (
        /*key*/
        e[33]
      ),
      queries: (
        /*value*/
        e[34]
      ),
      path: [
        .../*path*/
        e[1],
        /*key*/
        e[33]
      ],
      indentLevel: (
        /*indentLevel*/
        e[3] + 1
      ),
      onSelect: (
        /*onSelect*/
        e[4]
      ),
      onNewQuery: (
        /*onNewQuery*/
        e[6]
      ),
      onNewGroup: (
        /*onNewGroup*/
        e[5]
      ),
      onDelete: (
        /*onDelete*/
        e[7]
      ),
      onDuplicate: (
        /*onDuplicate*/
        e[8]
      ),
      onMove: (
        /*onMove*/
        e[9]
      ),
      showBorder: (
        /*i*/
        e[36] < /*itemCount*/
        e[13] - 1
      )
    }
  }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r[0] & /*queries*/
      4 && (i.name = /*key*/
      l[33]), r[0] & /*queries*/
      4 && (i.queries = /*value*/
      l[34]), r[0] & /*path, queries*/
      6 && (i.path = [
        .../*path*/
        l[1],
        /*key*/
        l[33]
      ]), r[0] & /*indentLevel*/
      8 && (i.indentLevel = /*indentLevel*/
      l[3] + 1), r[0] & /*onSelect*/
      16 && (i.onSelect = /*onSelect*/
      l[4]), r[0] & /*onNewQuery*/
      64 && (i.onNewQuery = /*onNewQuery*/
      l[6]), r[0] & /*onNewGroup*/
      32 && (i.onNewGroup = /*onNewGroup*/
      l[5]), r[0] & /*onDelete*/
      128 && (i.onDelete = /*onDelete*/
      l[7]), r[0] & /*onDuplicate*/
      256 && (i.onDuplicate = /*onDuplicate*/
      l[8]), r[0] & /*onMove*/
      512 && (i.onMove = /*onMove*/
      l[9]), r[0] & /*itemCount*/
      8192 && (i.showBorder = /*i*/
      l[36] < /*itemCount*/
      l[13] - 1), t.$set(i);
    },
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function u1(e) {
  let t, n, l, r, i, o, a;
  n = new nr({
    props: {
      class: "pl-" + /*indentLevel*/
      (e[3] + 1) * 4 + " block w-full flex items-center gap-2 pr-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100 text-gray-900",
      $$slots: {
        default: [
          c1,
          ({ hovering: u }) => ({ 37: u }),
          ({ hovering: u }) => [0, u ? 64 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  });
  function f() {
    return (
      /*click_handler_6*/
      e[28](
        /*key*/
        e[33],
        /*value*/
        e[34]
      )
    );
  }
  function s(...u) {
    return (
      /*dragstart_handler_1*/
      e[29](
        /*key*/
        e[33],
        ...u
      )
    );
  }
  return {
    c() {
      t = k("div"), W(n.$$.fragment), l = P(), b(t, "class", r = "w-full cursor-pointer select-none " + /*i*/
      (e[36] < /*itemCount*/
      e[13] - 1 || /*showBorder*/
      e[10] ? "border-b border-gray-200 dark:border-gray-700" : "")), b(t, "draggable", "true");
    },
    m(u, c) {
      L(u, t, c), B(n, t, null), _(t, l), i = !0, o || (a = [
        U(t, "click", f),
        U(t, "dragstart", s),
        U(t, "dragover", Ka),
        U(
          t,
          "drop",
          /*drop_handler_1*/
          e[30]
        ),
        U(t, "dragenter", qe(Or(
          /*dragenter_handler_1*/
          e[31]
        ))),
        U(t, "dragleave", qe(
          /*dragleave_handler_1*/
          e[32]
        ))
      ], o = !0);
    },
    p(u, c) {
      e = u;
      const d = {};
      c[0] & /*indentLevel*/
      8 && (d.class = "pl-" + /*indentLevel*/
      (e[3] + 1) * 4 + " block w-full flex items-center gap-2 pr-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100 text-gray-900"), c[0] & /*queries, onDuplicate, path*/
      262 | c[1] & /*$$scope, hovering*/
      192 && (d.$$scope = { dirty: c, ctx: e }), n.$set(d), (!i || c[0] & /*itemCount, showBorder*/
      9216 && r !== (r = "w-full cursor-pointer select-none " + /*i*/
      (e[36] < /*itemCount*/
      e[13] - 1 || /*showBorder*/
      e[10] ? "border-b border-gray-200 dark:border-gray-700" : ""))) && b(t, "class", r);
    },
    i(u) {
      i || (w(n.$$.fragment, u), i = !0);
    },
    o(u) {
      R(n.$$.fragment, u), i = !1;
    },
    d(u) {
      u && M(t), G(n), o = !1, we(a);
    }
  };
}
function na(e) {
  let t, n, l, r, i, o, a, f, s, u, c;
  i = new me({ props: { icon: er } });
  function d() {
    return (
      /*click_handler_4*/
      e[26](
        /*key*/
        e[33]
      )
    );
  }
  f = new me({ props: { icon: Pr } });
  function m() {
    return (
      /*click_handler_5*/
      e[27](
        /*key*/
        e[33]
      )
    );
  }
  return {
    c() {
      t = k("div"), n = P(), l = k("div"), r = k("button"), W(i.$$.fragment), o = P(), a = k("button"), W(f.$$.fragment), b(t, "class", "flex-auto"), b(r, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), b(r, "title", "Duplicate this query"), b(a, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), b(a, "title", "Delete this query"), b(l, "class", "flex items-center");
    },
    m(g, h) {
      L(g, t, h), L(g, n, h), L(g, l, h), _(l, r), B(i, r, null), _(l, o), _(l, a), B(f, a, null), s = !0, u || (c = [
        U(r, "click", qe(d)),
        U(a, "click", qe(m))
      ], u = !0);
    },
    p(g, h) {
      e = g;
    },
    i(g) {
      s || (w(i.$$.fragment, g), w(f.$$.fragment, g), s = !0);
    },
    o(g) {
      R(i.$$.fragment, g), R(f.$$.fragment, g), s = !1;
    },
    d(g) {
      g && M(t), g && M(n), g && M(l), G(i), G(f), u = !1, we(c);
    }
  };
}
function c1(e) {
  let t, n = (
    /*key*/
    e[33] + ""
  ), l, r, i, o = (
    /*value*/
    e[34].replace(`
`, " ") + ""
  ), a, f, s, u, c, d = (
    /*hovering*/
    e[37] && na(e)
  );
  return {
    c() {
      t = k("div"), l = I(n), r = P(), i = k("span"), a = I(o), s = P(), d && d.c(), u = _e(), b(i, "class", "font-normal font-mono text-gray-600 dark:text-gray-400"), b(t, "class", "font-semibold whitespace-nowrap truncate"), b(t, "title", f = /*key*/
      e[33]);
    },
    m(m, g) {
      L(m, t, g), _(t, l), _(t, r), _(t, i), _(i, a), L(m, s, g), d && d.m(m, g), L(m, u, g), c = !0;
    },
    p(m, g) {
      (!c || g[0] & /*queries*/
      4) && n !== (n = /*key*/
      m[33] + "") && ae(l, n), (!c || g[0] & /*queries*/
      4) && o !== (o = /*value*/
      m[34].replace(`
`, " ") + "") && ae(a, o), (!c || g[0] & /*queries*/
      4 && f !== (f = /*key*/
      m[33])) && b(t, "title", f), /*hovering*/
      m[37] ? d ? (d.p(m, g), g[1] & /*hovering*/
      64 && w(d, 1)) : (d = na(m), d.c(), w(d, 1), d.m(u.parentNode, u)) : d && (ie(), R(d, 1, 1, () => {
        d = null;
      }), oe());
    },
    i(m) {
      c || (w(d), c = !0);
    },
    o(m) {
      R(d), c = !1;
    },
    d(m) {
      m && M(t), m && M(s), d && d.d(m), m && M(u);
    }
  };
}
function la(e) {
  let t, n, l, r;
  const i = [u1, s1], o = [];
  function a(f, s) {
    return typeof /*value*/
    f[34] == "string" ? 0 : 1;
  }
  return t = a(e), n = o[t] = i[t](e), {
    c() {
      n.c(), l = _e();
    },
    m(f, s) {
      o[t].m(f, s), L(f, l, s), r = !0;
    },
    p(f, s) {
      let u = t;
      t = a(f), t === u ? o[t].p(f, s) : (ie(), R(o[u], 1, 1, () => {
        o[u] = null;
      }), oe(), n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), w(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      r || (w(n), r = !0);
    },
    o(f) {
      R(n), r = !1;
    },
    d(f) {
      o[t].d(f), f && M(l);
    }
  };
}
function d1(e) {
  let t, n, l, r = (
    /*indentLevel*/
    e[3] > 0 && $o(e)
  ), i = !/*collapsed*/
  e[12] && ta(e);
  return {
    c() {
      r && r.c(), t = P(), i && i.c(), n = _e();
    },
    m(o, a) {
      r && r.m(o, a), L(o, t, a), i && i.m(o, a), L(o, n, a), l = !0;
    },
    p(o, a) {
      /*indentLevel*/
      o[3] > 0 ? r ? (r.p(o, a), a[0] & /*indentLevel*/
      8 && w(r, 1)) : (r = $o(o), r.c(), w(r, 1), r.m(t.parentNode, t)) : r && (ie(), R(r, 1, 1, () => {
        r = null;
      }), oe()), /*collapsed*/
      o[12] ? i && (ie(), R(i, 1, 1, () => {
        i = null;
      }), oe()) : i ? (i.p(o, a), a[0] & /*collapsed*/
      4096 && w(i, 1)) : (i = ta(o), i.c(), w(i, 1), i.m(n.parentNode, n));
    },
    i(o) {
      l || (w(r), w(i), l = !0);
    },
    o(o) {
      R(r), R(i), l = !1;
    },
    d(o) {
      r && r.d(o), o && M(t), i && i.d(o), o && M(n);
    }
  };
}
function ra(e, t) {
  var n, l;
  (n = e.dataTransfer) == null || n.setData("application/json", JSON.stringify(t)), (l = e.dataTransfer) == null || l.setData("text/plain", JSON.stringify(t)), e.stopPropagation();
}
function Ka(e) {
  e.preventDefault(), e.dataTransfer.dropEffect = "move";
}
function ia(e, t) {
  return typeof e[1] == "string" == (typeof t[1] == "string") ? e[0].localeCompare(t[0]) : typeof e[1] == "string" ? -1 : 1;
}
function g1(e, t, n) {
  let l, { name: r = null } = t, { path: i = [] } = t, { queries: o = {} } = t, { indentLevel: a = 0 } = t, { onSelect: f = () => {
  } } = t, { onNewGroup: s = () => {
  } } = t, { onNewQuery: u = () => {
  } } = t, { onDelete: c = () => {
  } } = t, { onDuplicate: d = () => {
  } } = t, { onDraggingChange: m = () => {
  } } = t, { onMove: g = () => {
  } } = t, { showBorder: h = !1 } = t, p = a > 0;
  function S() {
    a > 0 && n(12, p = !p);
  }
  function y(E = null) {
    confirm(`Are you sure you want to delete this ${E != null ? "query" : "group"}? This action cannot be undone.`) && c(E != null ? [...i, E] : i);
  }
  function v(E, Y) {
    var ce;
    E.preventDefault(), n(11, N = 0);
    const K = (ce = E.dataTransfer) == null ? void 0 : ce.getData("application/json");
    if (K) {
      const F = JSON.parse(K);
      Y = [...Y, F[F.length - 1]], JSON.stringify(F) !== JSON.stringify(Y) && g(F, Y);
    }
    n(12, p = !1);
  }
  let N = 0;
  const q = () => {
    s(i), n(12, p = !1);
  }, D = () => u(i), x = () => d(i), V = () => y(), A = (E) => v(E, i), O = (E) => ra(E, i), C = () => n(11, N++, N), T = () => n(11, N--, N), ee = (E) => d([...i, E]), X = (E) => y(E), Q = (E, Y) => f([...i, E], Y), H = (E, Y) => ra(Y, [...i, E]), ne = (E) => v(E, i), ue = () => n(11, N++, N), re = () => n(11, N--, N);
  return e.$$set = (E) => {
    "name" in E && n(0, r = E.name), "path" in E && n(1, i = E.path), "queries" in E && n(2, o = E.queries), "indentLevel" in E && n(3, a = E.indentLevel), "onSelect" in E && n(4, f = E.onSelect), "onNewGroup" in E && n(5, s = E.onNewGroup), "onNewQuery" in E && n(6, u = E.onNewQuery), "onDelete" in E && n(7, c = E.onDelete), "onDuplicate" in E && n(8, d = E.onDuplicate), "onDraggingChange" in E && n(17, m = E.onDraggingChange), "onMove" in E && n(9, g = E.onMove), "showBorder" in E && n(10, h = E.showBorder);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*queries*/
    4 && n(13, l = o ? Object.keys(o).length : 0), e.$$.dirty[0] & /*onDraggingChange, draggingCounter*/
    133120 && m(N > 0);
  }, [
    r,
    i,
    o,
    a,
    f,
    s,
    u,
    c,
    d,
    g,
    h,
    N,
    p,
    l,
    S,
    y,
    v,
    m,
    q,
    D,
    x,
    V,
    A,
    O,
    C,
    T,
    ee,
    X,
    Q,
    H,
    ne,
    ue,
    re
  ];
}
class Xa extends ke {
  constructor(t) {
    super(), pe(
      this,
      t,
      g1,
      d1,
      ye,
      {
        name: 0,
        path: 1,
        queries: 2,
        indentLevel: 3,
        onSelect: 4,
        onNewGroup: 5,
        onNewQuery: 6,
        onDelete: 7,
        onDuplicate: 8,
        onDraggingChange: 17,
        onMove: 9,
        showBorder: 10
      },
      null,
      [-1, -1]
    );
  }
}
function oa(e) {
  let t, n, l, r, i;
  return n = new me({
    props: { icon: pa, class: "inline" }
  }), {
    c() {
      t = k("button"), W(n.$$.fragment), b(t, "class", "px-2 py-1.5 text-sm text-center font-semibold rounded transition-colors duration-200 bg-gray-600 hover:bg-gray-500 text-white whitespace-nowrap"), b(t, "title", "Close query browser");
    },
    m(o, a) {
      L(o, t, a), B(n, t, null), l = !0, r || (i = U(t, "click", function() {
        Je(
          /*onClose*/
          e[3]
        ) && e[3].apply(this, arguments);
      }), r = !0);
    },
    p(o, a) {
      e = o;
    },
    i(o) {
      l || (w(n.$$.fragment, o), l = !0);
    },
    o(o) {
      R(n.$$.fragment, o), l = !1;
    },
    d(o) {
      o && M(t), G(n), r = !1, i();
    }
  };
}
function m1(e) {
  let t;
  return {
    c() {
      t = k("div"), t.innerHTML = `<div class="w-3/4 text-gray-700 dark:text-gray-200 text-lg font-semibold">File is empty</div> 
      <p class="text-gray-600 dark:text-gray-400 w-1/3">Click above to create a query or group of queries in this file.</p>`, b(t, "class", "flex flex-col w-full flex-auto min-h-0 items-center justify-center text-center gap-4");
    },
    m(n, l) {
      L(n, t, l);
    },
    p: Z,
    i: Z,
    o: Z,
    d(n) {
      n && M(t);
    }
  };
}
function b1(e) {
  let t, n, l, r, i, o, a;
  function f(u) {
    e[16](u);
  }
  let s = {
    onSelect: (
      /*onSelect*/
      e[4]
    ),
    onNewGroup: (
      /*func*/
      e[10]
    ),
    onNewQuery: (
      /*func_1*/
      e[11]
    ),
    onDelete: (
      /*func_2*/
      e[12]
    ),
    onDuplicate: (
      /*func_3*/
      e[13]
    ),
    onMove: (
      /*func_4*/
      e[14]
    ),
    onDraggingChange: (
      /*func_5*/
      e[15]
    )
  };
  return (
    /*fileContents*/
    e[0] !== void 0 && (s.queries = /*fileContents*/
    e[0]), r = new Xa({ props: s }), Me.push(() => Ue(r, "queries", f)), {
      c() {
        t = k("div"), t.textContent = `Click on a query to edit, hover to see actions, or drag-and-drop to
      organize.`, n = P(), l = k("div"), W(r.$$.fragment), b(t, "class", "mx-4 mb-2 text-xs text-gray-500 dark:text-gray-400"), b(l, "class", o = "rounded-lg " + /*draggingOnBrowser*/
        (e[5] ? "outline outline-2 outline-blue-500" : "") + " border border-gray-200 dark:border-gray-700 overflow-auto min-h-0 flex-auto mx-4");
      },
      m(u, c) {
        L(u, t, c), L(u, n, c), L(u, l, c), B(r, l, null), a = !0;
      },
      p(u, c) {
        const d = {};
        c & /*onSelect*/
        16 && (d.onSelect = /*onSelect*/
        u[4]), c & /*fileContents*/
        1 && (d.onNewGroup = /*func*/
        u[10]), c & /*fileContents*/
        1 && (d.onDelete = /*func_2*/
        u[12]), c & /*fileContents*/
        1 && (d.onDuplicate = /*func_3*/
        u[13]), c & /*draggingOnBrowser*/
        32 && (d.onDraggingChange = /*func_5*/
        u[15]), !i && c & /*fileContents*/
        1 && (i = !0, d.queries = /*fileContents*/
        u[0], Ye(() => i = !1)), r.$set(d), (!a || c & /*draggingOnBrowser*/
        32 && o !== (o = "rounded-lg " + /*draggingOnBrowser*/
        (u[5] ? "outline outline-2 outline-blue-500" : "") + " border border-gray-200 dark:border-gray-700 overflow-auto min-h-0 flex-auto mx-4")) && b(l, "class", o);
      },
      i(u) {
        a || (w(r.$$.fragment, u), a = !0);
      },
      o(u) {
        R(r.$$.fragment, u), a = !1;
      },
      d(u) {
        u && M(t), u && M(n), u && M(l), G(r);
      }
    }
  );
}
function aa(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = k("div"), n = k("span"), l = I("Queries saved to "), r = k("span"), i = I(
        /*savePath*/
        e[1]
      ), b(r, "class", "font-mono"), b(n, "class", "px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"), b(t, "class", "mx-4 mt-4");
    },
    m(o, a) {
      L(o, t, a), _(t, n), _(n, l), _(n, r), _(r, i);
    },
    p(o, a) {
      a & /*savePath*/
      2 && ae(
        i,
        /*savePath*/
        o[1]
      );
    },
    d(o) {
      o && M(t);
    }
  };
}
function _1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, g, h, p, S, y, v, N, q = (
    /*allowClose*/
    e[2] && oa(e)
  );
  a = new me({
    props: { icon: yt, class: "inline mr-2" }
  }), c = new me({
    props: { icon: yt, class: "inline mr-2" }
  });
  const D = [b1, m1], x = [];
  function V(O, C) {
    return C & /*fileContents*/
    1 && (g = null), g == null && (g = Object.entries(
      /*fileContents*/
      O[0]
    ).length > 0), g ? 0 : 1;
  }
  h = V(e, -1), p = x[h] = D[h](e);
  let A = (
    /*savePath*/
    e[1] && aa(e)
  );
  return {
    c() {
      t = k("div"), n = k("div"), q && q.c(), l = P(), r = k("h3"), r.textContent = "Queries", i = P(), o = k("button"), W(a.$$.fragment), f = I(`
      Group`), s = P(), u = k("button"), W(c.$$.fragment), d = I(`
      Query`), m = P(), p.c(), S = P(), A && A.c(), b(r, "class", "text-lg py-1 font-semibold text-gray-900 dark:text-gray-100 flex-auto"), se(
        r,
        "px-2",
        /*allowClose*/
        e[2]
      ), b(o, "class", "px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), b(o, "title", "Create a new group"), b(u, "class", "px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), b(u, "title", "Create a new query at the top level"), b(n, "class", "px-4 pt-2 flex items-center mb-4 gap-2 shrink-0"), b(t, "class", "flex flex-col");
    },
    m(O, C) {
      L(O, t, C), _(t, n), q && q.m(n, null), _(n, l), _(n, r), _(n, i), _(n, o), B(a, o, null), _(o, f), _(n, s), _(n, u), B(c, u, null), _(u, d), _(t, m), x[h].m(t, null), _(t, S), A && A.m(t, null), y = !0, v || (N = [
        U(
          o,
          "click",
          /*click_handler*/
          e[8]
        ),
        U(
          u,
          "click",
          /*click_handler_1*/
          e[9]
        )
      ], v = !0);
    },
    p(O, [C]) {
      /*allowClose*/
      O[2] ? q ? (q.p(O, C), C & /*allowClose*/
      4 && w(q, 1)) : (q = oa(O), q.c(), w(q, 1), q.m(n, l)) : q && (ie(), R(q, 1, 1, () => {
        q = null;
      }), oe()), (!y || C & /*allowClose*/
      4) && se(
        r,
        "px-2",
        /*allowClose*/
        O[2]
      );
      let T = h;
      h = V(O, C), h === T ? x[h].p(O, C) : (ie(), R(x[T], 1, 1, () => {
        x[T] = null;
      }), oe(), p = x[h], p ? p.p(O, C) : (p = x[h] = D[h](O), p.c()), w(p, 1), p.m(t, S)), /*savePath*/
      O[1] ? A ? A.p(O, C) : (A = aa(O), A.c(), A.m(t, null)) : A && (A.d(1), A = null);
    },
    i(O) {
      y || (w(q), w(a.$$.fragment, O), w(c.$$.fragment, O), w(p), y = !0);
    },
    o(O) {
      R(q), R(a.$$.fragment, O), R(c.$$.fragment, O), R(p), y = !1;
    },
    d(O) {
      O && M(t), q && q.d(), G(a), G(c), x[h].d(), A && A.d(), v = !1, we(N);
    }
  };
}
function h1(e, t, n) {
  let { fileContents: l = {} } = t, { savePath: r = "" } = t, { allowClose: i = !0 } = t, { onClose: o = () => {
  } } = t, { onSelect: a = () => {
  } } = t;
  function f(N = []) {
    let q = Gr(l, N);
    n(0, l = q.contents), a(q.queryPath, Kr(l, q.queryPath));
  }
  function s(N, q) {
    Vr(l, q) && !confirm("An item with this name already exists in this location. Replace it?") || n(0, l = Wa(l, N, q));
  }
  let u = !1;
  const c = () => n(0, l = Ar(l, [])), d = () => {
    f([]);
  }, m = (N) => n(0, l = Ar(l, N)), g = (N) => f(N), h = (N) => n(0, l = or(l, N)), p = (N) => n(0, l = Wr(l, N).contents), S = (N, q) => s(N, q), y = (N) => n(5, u = N);
  function v(N) {
    l = N, n(0, l);
  }
  return e.$$set = (N) => {
    "fileContents" in N && n(0, l = N.fileContents), "savePath" in N && n(1, r = N.savePath), "allowClose" in N && n(2, i = N.allowClose), "onClose" in N && n(3, o = N.onClose), "onSelect" in N && n(4, a = N.onSelect);
  }, [
    l,
    r,
    i,
    o,
    a,
    u,
    f,
    s,
    c,
    d,
    m,
    g,
    h,
    p,
    S,
    y,
    v
  ];
}
class y1 extends ke {
  constructor(t) {
    super(), pe(this, t, h1, _1, ye, {
      fileContents: 0,
      savePath: 1,
      allowClose: 2,
      onClose: 3,
      onSelect: 4
    });
  }
}
function p1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d = !!/*savePath*/
  e[3] && fa(e);
  const m = [v1, w1], g = [];
  function h(v, N) {
    return (
      /*currentQueryPath*/
      v[18] ? 0 : 1
    );
  }
  l = h(e), r = g[l] = m[l](e);
  function p(v) {
    e[38](v);
  }
  let S = {
    dataFields: (
      /*dataFields*/
      e[4]
    ),
    onRun: (
      /*runAndSaveQuery*/
      e[25]
    ),
    onExplain: (
      /*onExplain*/
      e[6]
    ),
    onHistoryClick: (
      /*onQueryHistoryClick*/
      e[17]
    ),
    width: "w-full"
  };
  /*textInput*/
  e[1] !== void 0 && (S.value = /*textInput*/
  e[1]), a = new a1({ props: S }), Me.push(() => Ue(a, "value", p));
  let y = (
    /*llmAvailable*/
    e[11] && ca(e)
  );
  return {
    c() {
      t = k("div"), d && d.c(), n = P(), r.c(), i = P(), o = k("div"), W(a.$$.fragment), s = P(), y && y.c(), u = _e(), b(t, "class", "px-4 pt-2 flex items-center mb-4 gap-2 shrink-0"), b(o, "class", "shrink h-2/3");
    },
    m(v, N) {
      L(v, t, N), d && d.m(t, null), _(t, n), g[l].m(t, null), L(v, i, N), L(v, o, N), B(a, o, null), L(v, s, N), y && y.m(v, N), L(v, u, N), c = !0;
    },
    p(v, N) {
      /*savePath*/
      v[3] ? d ? (d.p(v, N), N[0] & /*savePath*/
      8 && w(d, 1)) : (d = fa(v), d.c(), w(d, 1), d.m(t, n)) : d && (ie(), R(d, 1, 1, () => {
        d = null;
      }), oe());
      let q = l;
      l = h(v), l === q ? g[l].p(v, N) : (ie(), R(g[q], 1, 1, () => {
        g[q] = null;
      }), oe(), r = g[l], r ? r.p(v, N) : (r = g[l] = m[l](v), r.c()), w(r, 1), r.m(t, null));
      const D = {};
      N[0] & /*dataFields*/
      16 && (D.dataFields = /*dataFields*/
      v[4]), N[0] & /*onExplain*/
      64 && (D.onExplain = /*onExplain*/
      v[6]), N[0] & /*onQueryHistoryClick*/
      131072 && (D.onHistoryClick = /*onQueryHistoryClick*/
      v[17]), !f && N[0] & /*textInput*/
      2 && (f = !0, D.value = /*textInput*/
      v[1], Ye(() => f = !1)), a.$set(D), /*llmAvailable*/
      v[11] ? y ? (y.p(v, N), N[0] & /*llmAvailable*/
      2048 && w(y, 1)) : (y = ca(v), y.c(), w(y, 1), y.m(u.parentNode, u)) : y && (ie(), R(y, 1, 1, () => {
        y = null;
      }), oe());
    },
    i(v) {
      c || (w(d), w(r), w(a.$$.fragment, v), w(y), c = !0);
    },
    o(v) {
      R(d), R(r), R(a.$$.fragment, v), R(y), c = !1;
    },
    d(v) {
      v && M(t), d && d.d(), g[l].d(), v && M(i), v && M(o), G(a), v && M(s), y && y.d(v), v && M(u);
    }
  };
}
function k1(e) {
  let t, n, l;
  function r(o) {
    e[28](o);
  }
  let i = {
    savePath: (
      /*savePath*/
      e[3]
    ),
    allowClose: (
      /*currentQueryPath*/
      e[18].length > 0
    ),
    onClose: (
      /*func*/
      e[27]
    ),
    onSelect: (
      /*handleQuerySelection*/
      e[23]
    )
  };
  return (
    /*fileContents*/
    e[0] !== void 0 && (i.fileContents = /*fileContents*/
    e[0]), t = new y1({ props: i }), Me.push(() => Ue(t, "fileContents", r)), {
      c() {
        W(t.$$.fragment);
      },
      m(o, a) {
        B(t, o, a), l = !0;
      },
      p(o, a) {
        const f = {};
        a[0] & /*savePath*/
        8 && (f.savePath = /*savePath*/
        o[3]), a[0] & /*currentQueryPath*/
        262144 && (f.allowClose = /*currentQueryPath*/
        o[18].length > 0), a[0] & /*showingBrowser*/
        4194304 && (f.onClose = /*func*/
        o[27]), !n && a[0] & /*fileContents*/
        1 && (n = !0, f.fileContents = /*fileContents*/
        o[0], Ye(() => n = !1)), t.$set(f);
      },
      i(o) {
        l || (w(t.$$.fragment, o), l = !0);
      },
      o(o) {
        R(t.$$.fragment, o), l = !1;
      },
      d(o) {
        G(t, o);
      }
    }
  );
}
function fa(e) {
  let t, n, l, r, i;
  return n = new me({
    props: { icon: pa, class: "inline" }
  }), {
    c() {
      t = k("button"), W(n.$$.fragment), b(t, "class", "px-2 py-1.5 text-sm text-center font-semibold rounded transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100 whitespace-nowrap"), b(t, "title", "Browse saved queries");
    },
    m(o, a) {
      L(o, t, a), B(n, t, null), l = !0, r || (i = U(
        t,
        "click",
        /*click_handler*/
        e[29]
      ), r = !0);
    },
    p: Z,
    i(o) {
      l || (w(n.$$.fragment, o), l = !0);
    },
    o(o) {
      R(n.$$.fragment, o), l = !1;
    },
    d(o) {
      o && M(t), G(n), r = !1, i();
    }
  };
}
function w1(e) {
  let t;
  return {
    c() {
      t = k("h3"), t.textContent = "TempoQL Query", b(t, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100 pr-2 whitespace-nowrap truncate");
    },
    m(n, l) {
      L(n, t, l);
    },
    p: Z,
    i: Z,
    o: Z,
    d(n) {
      n && M(t);
    }
  };
}
function v1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, g, h, p;
  const S = [S1, C1], y = [];
  function v(N, q) {
    return (
      /*isEditingName*/
      N[19] ? 0 : 1
    );
  }
  return t = v(e), n = y[t] = S[t](e), o = new me({ props: { icon: er } }), s = new me({ props: { icon: Pr } }), d = new me({
    props: { icon: yt, class: "inline mr-2" }
  }), {
    c() {
      n.c(), l = P(), r = k("div"), i = k("button"), W(o.$$.fragment), a = P(), f = k("button"), W(s.$$.fragment), u = P(), c = k("button"), W(d.$$.fragment), m = I(`
          Query`), b(i, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), b(i, "title", "Duplicate this query"), b(f, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), b(f, "title", "Delete this query"), b(r, "class", "flex items-center"), b(c, "class", "px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), b(c, "title", "Create a new query at the top level");
    },
    m(N, q) {
      y[t].m(N, q), L(N, l, q), L(N, r, q), _(r, i), B(o, i, null), _(r, a), _(r, f), B(s, f, null), L(N, u, q), L(N, c, q), B(d, c, null), _(c, m), g = !0, h || (p = [
        U(i, "click", qe(
          /*click_handler_2*/
          e[35]
        )),
        U(f, "click", qe(
          /*click_handler_3*/
          e[36]
        )),
        U(
          c,
          "click",
          /*click_handler_4*/
          e[37]
        )
      ], h = !0);
    },
    p(N, q) {
      let D = t;
      t = v(N), t === D ? y[t].p(N, q) : (ie(), R(y[D], 1, 1, () => {
        y[D] = null;
      }), oe(), n = y[t], n ? n.p(N, q) : (n = y[t] = S[t](N), n.c()), w(n, 1), n.m(l.parentNode, l));
    },
    i(N) {
      g || (w(n), w(o.$$.fragment, N), w(s.$$.fragment, N), w(d.$$.fragment, N), g = !0);
    },
    o(N) {
      R(n), R(o.$$.fragment, N), R(s.$$.fragment, N), R(d.$$.fragment, N), g = !1;
    },
    d(N) {
      y[t].d(N), N && M(l), N && M(r), G(o), G(s), N && M(u), N && M(c), G(d), h = !1, we(p);
    }
  };
}
function C1(e) {
  let t, n, l, r, i;
  t = new nr({
    props: {
      class: "rounded-lg px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2 cursor-pointer",
      $$slots: {
        default: [
          N1,
          ({ hovering: a }) => ({ 41: a }),
          ({ hovering: a }) => [0, a ? 1024 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    e[34]
  );
  let o = (
    /*currentQueryPath*/
    e[18].length > 1 && ua(e)
  );
  return {
    c() {
      W(t.$$.fragment), n = P(), o && o.c(), l = P(), r = k("div"), b(r, "class", "flex-auto");
    },
    m(a, f) {
      B(t, a, f), L(a, n, f), o && o.m(a, f), L(a, l, f), L(a, r, f), i = !0;
    },
    p(a, f) {
      const s = {};
      f[0] & /*currentQueryPath*/
      262144 | f[1] & /*$$scope, hovering*/
      3072 && (s.$$scope = { dirty: f, ctx: a }), t.$set(s), /*currentQueryPath*/
      a[18].length > 1 ? o ? o.p(a, f) : (o = ua(a), o.c(), o.m(l.parentNode, l)) : o && (o.d(1), o = null);
    },
    i(a) {
      i || (w(t.$$.fragment, a), i = !0);
    },
    o(a) {
      R(t.$$.fragment, a), i = !1;
    },
    d(a) {
      G(t, a), a && M(n), o && o.d(a), a && M(l), a && M(r);
    }
  };
}
function S1(e) {
  let t, n, l, r;
  return {
    c() {
      t = k("form"), n = k("input"), b(n, "type", "text"), b(n, "class", "flat-text-input w-full"), b(t, "class", "flex-auto");
    },
    m(i, o) {
      L(i, t, o), _(t, n), ut(
        n,
        /*newName*/
        e[20]
      ), e[31](n), l || (r = [
        U(
          n,
          "input",
          /*input_input_handler*/
          e[30]
        ),
        U(
          n,
          "blur",
          /*blur_handler*/
          e[32]
        ),
        U(t, "submit", qe(Or(
          /*submit_handler*/
          e[33]
        )))
      ], l = !0);
    },
    p(i, o) {
      o[0] & /*newName*/
      1048576 && n.value !== /*newName*/
      i[20] && ut(
        n,
        /*newName*/
        i[20]
      );
    },
    i: Z,
    o: Z,
    d(i) {
      i && M(t), e[31](null), l = !1, we(r);
    }
  };
}
function sa(e) {
  let t, n;
  return t = new me({
    props: {
      icon: yf,
      class: "pl-2 text-gray-900 dark:text-gray-100"
    }
  }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      B(t, l, r), n = !0;
    },
    p: Z,
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      R(t.$$.fragment, l), n = !1;
    },
    d(l) {
      G(t, l);
    }
  };
}
function N1(e) {
  let t, n = (
    /*currentQueryPath*/
    (e[18][
      /*currentQueryPath*/
      e[18].length - 1
    ] ?? "TempoQL Query") + ""
  ), l, r, i, o, a = (
    /*hovering*/
    e[41] && sa()
  );
  return {
    c() {
      t = k("h3"), l = I(n), r = P(), a && a.c(), i = _e(), b(t, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap truncate");
    },
    m(f, s) {
      L(f, t, s), _(t, l), L(f, r, s), a && a.m(f, s), L(f, i, s), o = !0;
    },
    p(f, s) {
      (!o || s[0] & /*currentQueryPath*/
      262144) && n !== (n = /*currentQueryPath*/
      (f[18][
        /*currentQueryPath*/
        f[18].length - 1
      ] ?? "TempoQL Query") + "") && ae(l, n), /*hovering*/
      f[41] ? a ? (a.p(f, s), s[1] & /*hovering*/
      1024 && w(a, 1)) : (a = sa(), a.c(), w(a, 1), a.m(i.parentNode, i)) : a && (ie(), R(a, 1, 1, () => {
        a = null;
      }), oe());
    },
    i(f) {
      o || (w(a), o = !0);
    },
    o(f) {
      R(a), o = !1;
    },
    d(f) {
      f && M(t), f && M(r), a && a.d(f), f && M(i);
    }
  };
}
function ua(e) {
  let t, n, l, r = (
    /*currentQueryPath*/
    e[18][
      /*currentQueryPath*/
      e[18].length - 2
    ] + ""
  ), i;
  return {
    c() {
      t = k("div"), n = I("in "), l = k("span"), i = I(r), b(l, "class", "font-mono"), b(t, "class", "text-sm text-gray-600 dark:text-gray-400");
    },
    m(o, a) {
      L(o, t, a), _(t, n), _(t, l), _(l, i);
    },
    p(o, a) {
      a[0] & /*currentQueryPath*/
      262144 && r !== (r = /*currentQueryPath*/
      o[18][
        /*currentQueryPath*/
        o[18].length - 2
      ] + "") && ae(i, r);
    },
    d(o) {
      o && M(t);
    }
  };
}
function ca(e) {
  let t, n, l, r;
  function i(a) {
    e[40](a);
  }
  let o = {
    onSubmit: (
      /*onLLMSubmit*/
      e[7]
    ),
    llmResponse: (
      /*llmResponse*/
      e[8]
    ),
    isLoading: (
      /*llmLoading*/
      e[9]
    ),
    error: (
      /*llmError*/
      e[10]
    ),
    apiStatus: (
      /*apiStatus*/
      e[12]
    ),
    width: "w-full",
    scrollable: !0,
    extractedQuery: (
      /*extractedQuery*/
      e[13]
    ),
    hasExtractedQuery: (
      /*hasExtractedQuery*/
      e[14]
    ),
    onQueryExtracted: (
      /*onQueryExtracted*/
      e[15]
    ),
    onHistoryClick: (
      /*onHistoryClick*/
      e[16]
    ),
    onRun: (
      /*func_1*/
      e[39]
    )
  };
  return (
    /*aiQuestion*/
    e[2] !== void 0 && (o.question = /*aiQuestion*/
    e[2]), n = new l1({ props: o }), Me.push(() => Ue(n, "question", i)), {
      c() {
        t = k("div"), W(n.$$.fragment), b(t, "class", "w-full h-1/2 overflow-hidden");
      },
      m(a, f) {
        L(a, t, f), B(n, t, null), r = !0;
      },
      p(a, f) {
        const s = {};
        f[0] & /*onLLMSubmit*/
        128 && (s.onSubmit = /*onLLMSubmit*/
        a[7]), f[0] & /*llmResponse*/
        256 && (s.llmResponse = /*llmResponse*/
        a[8]), f[0] & /*llmLoading*/
        512 && (s.isLoading = /*llmLoading*/
        a[9]), f[0] & /*llmError*/
        1024 && (s.error = /*llmError*/
        a[10]), f[0] & /*apiStatus*/
        4096 && (s.apiStatus = /*apiStatus*/
        a[12]), f[0] & /*extractedQuery*/
        8192 && (s.extractedQuery = /*extractedQuery*/
        a[13]), f[0] & /*hasExtractedQuery*/
        16384 && (s.hasExtractedQuery = /*hasExtractedQuery*/
        a[14]), f[0] & /*onQueryExtracted*/
        32768 && (s.onQueryExtracted = /*onQueryExtracted*/
        a[15]), f[0] & /*onHistoryClick*/
        65536 && (s.onHistoryClick = /*onHistoryClick*/
        a[16]), f[0] & /*textInput, onRun*/
        34 && (s.onRun = /*func_1*/
        a[39]), !l && f[0] & /*aiQuestion*/
        4 && (l = !0, s.question = /*aiQuestion*/
        a[2], Ye(() => l = !1)), n.$set(s);
      },
      i(a) {
        r || (w(n.$$.fragment, a), r = !0);
      },
      o(a) {
        R(n.$$.fragment, a), r = !1;
      },
      d(a) {
        a && M(t), G(n);
      }
    }
  );
}
function M1(e) {
  let t, n, l, r;
  const i = [k1, p1], o = [];
  function a(f, s) {
    return (
      /*showingBrowser*/
      f[22] ? 0 : 1
    );
  }
  return n = a(e), l = o[n] = i[n](e), {
    c() {
      t = k("div"), l.c(), b(t, "class", "w-1/2 shrink-0 flex flex-col h-full z-0");
    },
    m(f, s) {
      L(f, t, s), o[n].m(t, null), r = !0;
    },
    p(f, s) {
      let u = n;
      n = a(f), n === u ? o[n].p(f, s) : (ie(), R(o[u], 1, 1, () => {
        o[u] = null;
      }), oe(), l = o[n], l ? l.p(f, s) : (l = o[n] = i[n](f), l.c()), w(l, 1), l.m(t, null));
    },
    i(f) {
      r || (w(l), r = !0);
    },
    o(f) {
      R(l), r = !1;
    },
    d(f) {
      f && M(t), o[n].d();
    }
  };
}
function z1(e, t, n) {
  let { fileContents: l = {} } = t, { savePath: r = "" } = t, { textInput: i = "" } = t, { dataFields: o = [] } = t, { onRun: a = () => {
  } } = t, { onExplain: f = () => {
  } } = t, { onLLMSubmit: s = () => {
  } } = t, { llmResponse: u = "" } = t, { llmLoading: c = !1 } = t, { llmError: d = "" } = t, { llmAvailable: m = !1 } = t, { apiStatus: g = "" } = t, { extractedQuery: h = "" } = t, { hasExtractedQuery: p = !1 } = t, { onQueryExtracted: S = () => {
  } } = t, { onHistoryClick: y = () => {
  } } = t, { onQueryHistoryClick: v = () => {
  } } = t, { aiQuestion: N = "" } = t, q = !1, D = [];
  function x($, Le) {
    n(18, D = $), n(1, i = Le), n(22, q = !1);
  }
  let V = !1, A = null, O, C;
  function T($) {
    n(19, V = !1), $ != D[D.length - 1] && (Vr(l, [...D.slice(0, D.length - 1), $]) && !confirm("This name already exists. Are you sure you want to overwrite the existing item?") || (n(0, l = Wa(l, D, [...D.slice(0, D.length - 1), $])), n(18, D = [...D.slice(0, D.length - 1), $])));
  }
  function ee() {
    D.length > 0 && n(0, l = Va(l, D, i)), a();
  }
  const X = () => n(22, q = !1);
  function Q($) {
    l = $, n(0, l);
  }
  const H = () => n(22, q = !0);
  function ne() {
    A = this.value, n(20, A), n(19, V), n(18, D);
  }
  function ue($) {
    Me[$ ? "unshift" : "push"](() => {
      C = $, n(21, C);
    });
  }
  const re = () => T(A), E = () => {
    console.log("renaming!"), T(A);
  }, Y = () => n(19, V = !0), K = () => {
    let $ = Wr(l, D);
    n(0, l = $.contents), n(18, D = $.queryPath);
  }, ce = () => {
    n(0, l = or(l, D)), n(18, D = []);
  }, F = () => {
    let $ = Gr(l, D.slice(0, D.length - 1));
    n(0, l = $.contents), n(18, D = $.queryPath), n(1, i = "");
  };
  function fe($) {
    i = $, n(1, i);
  }
  const te = ($) => {
    n(1, i = $), a();
  };
  function be($) {
    N = $, n(2, N);
  }
  return e.$$set = ($) => {
    "fileContents" in $ && n(0, l = $.fileContents), "savePath" in $ && n(3, r = $.savePath), "textInput" in $ && n(1, i = $.textInput), "dataFields" in $ && n(4, o = $.dataFields), "onRun" in $ && n(5, a = $.onRun), "onExplain" in $ && n(6, f = $.onExplain), "onLLMSubmit" in $ && n(7, s = $.onLLMSubmit), "llmResponse" in $ && n(8, u = $.llmResponse), "llmLoading" in $ && n(9, c = $.llmLoading), "llmError" in $ && n(10, d = $.llmError), "llmAvailable" in $ && n(11, m = $.llmAvailable), "apiStatus" in $ && n(12, g = $.apiStatus), "extractedQuery" in $ && n(13, h = $.extractedQuery), "hasExtractedQuery" in $ && n(14, p = $.hasExtractedQuery), "onQueryExtracted" in $ && n(15, S = $.onQueryExtracted), "onHistoryClick" in $ && n(16, y = $.onHistoryClick), "onQueryHistoryClick" in $ && n(17, v = $.onQueryHistoryClick), "aiQuestion" in $ && n(2, N = $.aiQuestion);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*savePath, currentQueryPath*/
    262152 && r && D.length == 0 && n(22, q = !0), e.$$.dirty[0] & /*isEditingName, newName, currentQueryPath*/
    1835008 && (V && A == null ? n(20, A = D[D.length - 1] ?? null) : V || n(20, A = null)), e.$$.dirty[0] & /*editBox, oldEditBox*/
    69206016 && C !== O && (C && (C.focus(), C.select()), n(26, O = C));
  }, [
    l,
    i,
    N,
    r,
    o,
    a,
    f,
    s,
    u,
    c,
    d,
    m,
    g,
    h,
    p,
    S,
    y,
    v,
    D,
    V,
    A,
    C,
    q,
    x,
    T,
    ee,
    O,
    X,
    Q,
    H,
    ne,
    ue,
    re,
    E,
    Y,
    K,
    ce,
    F,
    fe,
    te,
    be
  ];
}
class L1 extends ke {
  constructor(t) {
    super(), pe(
      this,
      t,
      z1,
      M1,
      ye,
      {
        fileContents: 0,
        savePath: 3,
        textInput: 1,
        dataFields: 4,
        onRun: 5,
        onExplain: 6,
        onLLMSubmit: 7,
        llmResponse: 8,
        llmLoading: 9,
        llmError: 10,
        llmAvailable: 11,
        apiStatus: 12,
        extractedQuery: 13,
        hasExtractedQuery: 14,
        onQueryExtracted: 15,
        onHistoryClick: 16,
        onQueryHistoryClick: 17,
        aiQuestion: 2
      },
      null,
      [-1, -1]
    );
  }
}
function R1(e) {
  let t, n, l;
  function r(o) {
    e[69](o);
  }
  let i = {
    scopes: (
      /*$scopes*/
      e[20]
    ),
    scopeConcepts: (
      /*$scopeConcepts*/
      e[21]
    ),
    isLoading: (
      /*$isLoading*/
      e[22]
    ),
    loadingMessage: (
      /*$loadingMessage*/
      e[23]
    ),
    onScopeSelect: (
      /*func*/
      e[66]
    ),
    onAnalyze: (
      /*func_1*/
      e[67]
    ),
    onInsert: (
      /*func_2*/
      e[68]
    )
  };
  return (
    /*selectedScope*/
    e[0] !== void 0 && (i.scopeName = /*selectedScope*/
    e[0]), t = new ru({ props: i }), Me.push(() => Ue(t, "scopeName", r)), {
      c() {
        W(t.$$.fragment);
      },
      m(o, a) {
        B(t, o, a), l = !0;
      },
      p(o, a) {
        const f = {};
        a[0] & /*$scopes*/
        1048576 && (f.scopes = /*$scopes*/
        o[20]), a[0] & /*$scopeConcepts*/
        2097152 && (f.scopeConcepts = /*$scopeConcepts*/
        o[21]), a[0] & /*$isLoading*/
        4194304 && (f.isLoading = /*$isLoading*/
        o[22]), a[0] & /*$loadingMessage*/
        8388608 && (f.loadingMessage = /*$loadingMessage*/
        o[23]), a[0] & /*selectedScope*/
        1 && (f.onAnalyze = /*func_1*/
        o[67]), a[0] & /*$textInput*/
        128 && (f.onInsert = /*func_2*/
        o[68]), !n && a[0] & /*selectedScope*/
        1 && (n = !0, f.scopeName = /*selectedScope*/
        o[0], Ye(() => n = !1)), t.$set(f);
      },
      i(o) {
        l || (w(t.$$.fragment, o), l = !0);
      },
      o(o) {
        R(t.$$.fragment, o), l = !1;
      },
      d(o) {
        G(t, o);
      }
    }
  );
}
function q1(e) {
  let t, n, l;
  function r(o) {
    e[65](o);
  }
  let i = {
    onRun: (
      /*handleRun*/
      e[54]
    ),
    onExplain: (
      /*handleLLMExplanation*/
      e[30]
    ),
    queryError: (
      /*$queryError*/
      e[16]
    ),
    values: (
      /*$values*/
      e[17]
    ),
    subqueries: (
      /*$subqueries*/
      e[18]
    ),
    llmAvailable: (
      /*$llmAvailable*/
      e[12]
    ),
    llmExplanation: (
      /*$llmExplanation*/
      e[19]
    ),
    width: "w-full"
  };
  return (
    /*$textInput*/
    e[7] !== void 0 && (i.textInput = /*$textInput*/
    e[7]), t = new I0({ props: i }), Me.push(() => Ue(t, "textInput", r)), {
      c() {
        W(t.$$.fragment);
      },
      m(o, a) {
        B(t, o, a), l = !0;
      },
      p(o, a) {
        const f = {};
        a[0] & /*$queryError*/
        65536 && (f.queryError = /*$queryError*/
        o[16]), a[0] & /*$values*/
        131072 && (f.values = /*$values*/
        o[17]), a[0] & /*$subqueries*/
        262144 && (f.subqueries = /*$subqueries*/
        o[18]), a[0] & /*$llmAvailable*/
        4096 && (f.llmAvailable = /*$llmAvailable*/
        o[12]), a[0] & /*$llmExplanation*/
        524288 && (f.llmExplanation = /*$llmExplanation*/
        o[19]), !n && a[0] & /*$textInput*/
        128 && (n = !0, f.textInput = /*$textInput*/
        o[7], Ye(() => n = !1)), t.$set(f);
      },
      i(o) {
        l || (w(t.$$.fragment, o), l = !0);
      },
      o(o) {
        R(t.$$.fragment, o), l = !1;
      },
      d(o) {
        G(t, o);
      }
    }
  );
}
function D1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, g, h, p, S, y, v;
  function N(C) {
    e[62](C);
  }
  function q(C) {
    e[63](C);
  }
  function D(C) {
    e[64](C);
  }
  let x = {
    savePath: (
      /*$savePath*/
      e[9]
    ),
    dataFields: (
      /*dataFields*/
      e[5]
    ),
    onRun: (
      /*handleRun*/
      e[54]
    ),
    onExplain: (
      /*handleLLMExplanation*/
      e[30]
    ),
    onLLMSubmit: (
      /*handleLLMQuestionSubmit*/
      e[52]
    ),
    llmResponse: (
      /*$llmResponse*/
      e[6]
    ),
    llmLoading: (
      /*$llmLoading*/
      e[10]
    ),
    llmError: (
      /*$llmError*/
      e[11]
    ),
    llmAvailable: (
      /*$llmAvailable*/
      e[12]
    ),
    apiStatus: (
      /*$apiStatus*/
      e[13]
    ),
    extractedQuery: (
      /*$extractedQuery*/
      e[14]
    ),
    hasExtractedQuery: (
      /*$hasExtractedQuery*/
      e[15]
    ),
    onQueryExtracted: (
      /*handleQueryExtraction*/
      e[46]
    ),
    onHistoryClick: (
      /*handleHistoryClick*/
      e[55]
    ),
    onQueryHistoryClick: (
      /*handleQueryHistoryClick*/
      e[56]
    )
  };
  /*$fileContents*/
  e[8] !== void 0 && (x.fileContents = /*$fileContents*/
  e[8]), /*$textInput*/
  e[7] !== void 0 && (x.textInput = /*$textInput*/
  e[7]), /*currentQuestion*/
  e[4] !== void 0 && (x.aiQuestion = /*currentQuestion*/
  e[4]), n = new L1({ props: x }), Me.push(() => Ue(n, "fileContents", N)), Me.push(() => Ue(n, "textInput", q)), Me.push(() => Ue(n, "aiQuestion", D)), f = new Yf({
    props: {
      activeTab: (
        /*activeTab*/
        e[1]
      ),
      onTabChange: (
        /*handleTabChange*/
        e[53]
      )
    }
  });
  const V = [q1, R1], A = [];
  function O(C, T) {
    return (
      /*activeTab*/
      C[1] === "results" ? 0 : (
        /*activeTab*/
        C[1] === "data-elements" ? 1 : -1
      )
    );
  }
  return ~(c = O(e)) && (d = A[c] = V[c](e)), g = new Ko({
    props: {
      isVisible: (
        /*showAIHistoryDropdown*/
        e[2]
      ),
      history: (
        /*$aiHistory*/
        e[24]
      ),
      onClose: (
        /*handleHistoryClose*/
        e[58]
      ),
      onSelect: (
        /*handleSelectHistoricalQuery*/
        e[57]
      ),
      position: (
        /*historyDropdownPosition*/
        e[50]
      )
    }
  }), p = new Ko({
    props: {
      isVisible: (
        /*showQueryHistoryDropdown*/
        e[3]
      ),
      history: (
        /*$queryHistory*/
        e[25]
      ),
      onClose: (
        /*handleQueryHistoryClose*/
        e[59]
      ),
      onSelect: (
        /*handleSelectHistoricalQuery*/
        e[57]
      ),
      position: (
        /*queryHistoryDropdownPosition*/
        e[51]
      )
    }
  }), y = new B0({
    props: {
      isLoading: (
        /*$isLoading*/
        e[22]
      ),
      message: (
        /*$loadingMessage*/
        e[23]
      )
    }
  }), {
    c() {
      t = k("main"), W(n.$$.fragment), o = P(), a = k("div"), W(f.$$.fragment), s = P(), u = k("div"), d && d.c(), m = P(), W(g.$$.fragment), h = P(), W(p.$$.fragment), S = P(), W(y.$$.fragment), b(u, "class", "flex-auto w-full min-h-0 z-0 svelte-1pq5c6y"), b(a, "class", "w-1/2 h-full rounded-lg border border-gray-200 dark:border-gray-600 overflow-hidden flex flex-col dark:bg-gray-900 svelte-1pq5c6y"), b(t, "class", "w-full bg-white dark:bg-gray-950 transition-colors duration-200 relative overflow-hidden flex svelte-1pq5c6y"), le(t, "height", "600px");
    },
    m(C, T) {
      L(C, t, T), B(n, t, null), _(t, o), _(t, a), B(f, a, null), _(a, s), _(a, u), ~c && A[c].m(u, null), _(t, m), B(g, t, null), _(t, h), B(p, t, null), _(t, S), B(y, t, null), v = !0;
    },
    p(C, T) {
      const ee = {};
      T[0] & /*$savePath*/
      512 && (ee.savePath = /*$savePath*/
      C[9]), T[0] & /*dataFields*/
      32 && (ee.dataFields = /*dataFields*/
      C[5]), T[0] & /*$llmResponse*/
      64 && (ee.llmResponse = /*$llmResponse*/
      C[6]), T[0] & /*$llmLoading*/
      1024 && (ee.llmLoading = /*$llmLoading*/
      C[10]), T[0] & /*$llmError*/
      2048 && (ee.llmError = /*$llmError*/
      C[11]), T[0] & /*$llmAvailable*/
      4096 && (ee.llmAvailable = /*$llmAvailable*/
      C[12]), T[0] & /*$apiStatus*/
      8192 && (ee.apiStatus = /*$apiStatus*/
      C[13]), T[0] & /*$extractedQuery*/
      16384 && (ee.extractedQuery = /*$extractedQuery*/
      C[14]), T[0] & /*$hasExtractedQuery*/
      32768 && (ee.hasExtractedQuery = /*$hasExtractedQuery*/
      C[15]), !l && T[0] & /*$fileContents*/
      256 && (l = !0, ee.fileContents = /*$fileContents*/
      C[8], Ye(() => l = !1)), !r && T[0] & /*$textInput*/
      128 && (r = !0, ee.textInput = /*$textInput*/
      C[7], Ye(() => r = !1)), !i && T[0] & /*currentQuestion*/
      16 && (i = !0, ee.aiQuestion = /*currentQuestion*/
      C[4], Ye(() => i = !1)), n.$set(ee);
      const X = {};
      T[0] & /*activeTab*/
      2 && (X.activeTab = /*activeTab*/
      C[1]), f.$set(X);
      let Q = c;
      c = O(C), c === Q ? ~c && A[c].p(C, T) : (d && (ie(), R(A[Q], 1, 1, () => {
        A[Q] = null;
      }), oe()), ~c ? (d = A[c], d ? d.p(C, T) : (d = A[c] = V[c](C), d.c()), w(d, 1), d.m(u, null)) : d = null);
      const H = {};
      T[0] & /*showAIHistoryDropdown*/
      4 && (H.isVisible = /*showAIHistoryDropdown*/
      C[2]), T[0] & /*$aiHistory*/
      16777216 && (H.history = /*$aiHistory*/
      C[24]), g.$set(H);
      const ne = {};
      T[0] & /*showQueryHistoryDropdown*/
      8 && (ne.isVisible = /*showQueryHistoryDropdown*/
      C[3]), T[0] & /*$queryHistory*/
      33554432 && (ne.history = /*$queryHistory*/
      C[25]), p.$set(ne);
      const ue = {};
      T[0] & /*$isLoading*/
      4194304 && (ue.isLoading = /*$isLoading*/
      C[22]), T[0] & /*$loadingMessage*/
      8388608 && (ue.message = /*$loadingMessage*/
      C[23]), y.$set(ue);
    },
    i(C) {
      v || (w(n.$$.fragment, C), w(f.$$.fragment, C), w(d), w(g.$$.fragment, C), w(p.$$.fragment, C), w(y.$$.fragment, C), v = !0);
    },
    o(C) {
      R(n.$$.fragment, C), R(f.$$.fragment, C), R(d), R(g.$$.fragment, C), R(p.$$.fragment, C), R(y.$$.fragment, C), v = !1;
    },
    d(C) {
      C && M(t), G(n), G(f), ~c && A[c].d(), G(g), G(p), G(y);
    }
  };
}
function E1(e, t, n) {
  let l, r, i, o, a, f, s, u, c, d, m, g, h, p, S, y, v, N, q, D, x, V, { model: A } = t;
  const O = hf(A), { savePath: C, fileContents: T, values: ee, listNames: X, runQuery: Q, handleLLMQuestion: H, handleLLMExplanation: ne, subqueries: ue, queryError: re, scopes: E, scopeConcepts: Y, handleScopeAnalysis: K, llmResponse: ce, llmLoading: F, llmError: fe, llmAvailable: te, llmExplanation: be, apiStatus: $, isLoading: Le, loadingMessage: ct, extractedQuery: dt, hasExtractedQuery: Xt, handleQueryExtraction: On, textInput: Ge, queryHistory: Yt, aiHistory: Ut } = O;
  j(e, C, (J) => n(9, f = J)), j(e, T, (J) => n(8, a = J)), j(e, ee, (J) => n(17, p = J)), j(e, X, (J) => n(61, o = J)), j(e, ue, (J) => n(18, S = J)), j(e, re, (J) => n(16, h = J)), j(e, E, (J) => n(20, v = J)), j(e, Y, (J) => n(21, N = J)), j(e, ce, (J) => n(6, r = J)), j(e, F, (J) => n(10, s = J)), j(e, fe, (J) => n(11, u = J)), j(e, te, (J) => n(12, c = J)), j(e, be, (J) => n(19, y = J)), j(e, $, (J) => n(13, d = J)), j(e, Le, (J) => n(22, q = J)), j(e, ct, (J) => n(23, D = J)), j(e, dt, (J) => n(14, m = J)), j(e, Xt, (J) => n(15, g = J)), j(e, Ge, (J) => n(7, i = J)), j(e, Yt, (J) => n(25, V = J)), j(e, Ut, (J) => n(24, x = J));
  let gt = "", kt = "data-elements", $e = !1, et = !1, tt = "", Pn = { top: 0, left: 0 }, Qn = { top: 0, left: 0 };
  function jn(J) {
    n(4, tt = J), H(J);
  }
  function xn(J) {
    n(1, kt = J);
  }
  function In() {
    console.log("text input", i), i.trim() && Q(i), n(1, kt = "results");
  }
  function Fn() {
    n(2, $e = !$e);
  }
  function Hn() {
    n(3, et = !et);
  }
  function ar(J) {
    console.log("📚 AI History item selected:", J), n(2, $e = !1), n(3, et = !1), J.query && (de(Ge, i = J.query, i), A.set("text_input", J.query), A.save_changes()), J.question && n(4, tt = J.question), J.answer && de(ce, r = J.answer, r);
  }
  function Bn() {
    n(2, $e = !1);
  }
  function fr() {
    n(3, et = !1);
  }
  function Jt(J) {
    a = J, T.set(a);
  }
  function Gn(J) {
    i = J, Ge.set(i);
  }
  function Vn(J) {
    tt = J, n(4, tt);
  }
  function wt(J) {
    i = J, Ge.set(i);
  }
  const Zt = (J) => {
    K(J, !1);
  }, $t = () => {
    K(gt, !0);
  }, nt = (J, rt) => {
    de(Ge, i = i + `{${rt}; scope = ${J}}`, i);
  };
  function lt(J) {
    gt = J, n(0, gt);
  }
  return e.$$set = (J) => {
    "model" in J && n(60, A = J.model);
  }, e.$$.update = () => {
    e.$$.dirty[1] & /*$listNames*/
    1073741824 && n(5, l = o || []);
  }, [
    gt,
    kt,
    $e,
    et,
    tt,
    l,
    r,
    i,
    a,
    f,
    s,
    u,
    c,
    d,
    m,
    g,
    h,
    p,
    S,
    y,
    v,
    N,
    q,
    D,
    x,
    V,
    C,
    T,
    ee,
    X,
    ne,
    ue,
    re,
    E,
    Y,
    K,
    ce,
    F,
    fe,
    te,
    be,
    $,
    Le,
    ct,
    dt,
    Xt,
    On,
    Ge,
    Yt,
    Ut,
    Pn,
    Qn,
    jn,
    xn,
    In,
    Fn,
    Hn,
    ar,
    Bn,
    fr,
    A,
    o,
    Jt,
    Gn,
    Vn,
    wt,
    Zt,
    $t,
    nt,
    lt
  ];
}
class A1 extends ke {
  constructor(t) {
    super(), pe(this, t, E1, D1, ye, { model: 60 }, null, [-1, -1, -1]);
  }
}
function T1(e) {
  new A1({
    target: e.el,
    props: {
      model: e.model
    }
  });
}
export {
  T1 as render
};
