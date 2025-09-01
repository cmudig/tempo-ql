function $() {
}
function tf(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function ca(e) {
  return e();
}
function Xr() {
  return /* @__PURE__ */ Object.create(null);
}
function we(e) {
  e.forEach(ca);
}
function $e(e) {
  return typeof e == "function";
}
function ye(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function nf(e) {
  return Object.keys(e).length === 0;
}
function da(e, ...t) {
  if (e == null)
    return $;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function x(e, t, n) {
  e.$$.on_destroy.push(da(t, n));
}
function Qe(e, t, n, l) {
  if (e) {
    const r = ga(e, t, n, l);
    return e[0](r);
  }
}
function ga(e, t, n, l) {
  return e[1] && l ? tf(n.ctx.slice(), e[1](l(t))) : n.ctx;
}
function je(e, t, n, l) {
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
function Oe(e, t, n, l, r, i) {
  if (r) {
    const o = ga(t, n, l, i);
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
function h(e, t) {
  e.appendChild(t);
}
function R(e, t, n) {
  e.insertBefore(t, n || null);
}
function M(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function De(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function w(e) {
  return document.createElement(e);
}
function Se(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function F(e) {
  return document.createTextNode(e);
}
function P() {
  return F(" ");
}
function be() {
  return F("");
}
function U(e, t, n, l) {
  return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
}
function Pr(e) {
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
function ct(e, t) {
  e.value = t ?? "";
}
function re(e, t, n, l) {
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
let El;
function of() {
  if (El === void 0) {
    El = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      El = !0;
    }
  }
  return El;
}
function af(e, t) {
  getComputedStyle(e).position === "static" && (e.style.position = "relative");
  const l = w("iframe");
  l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), l.setAttribute("aria-hidden", "true"), l.tabIndex = -1;
  const r = of();
  let i;
  return r ? (l.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", i = U(window, "message", (o) => {
    o.source === l.contentWindow && t();
  })) : (l.src = "about:blank", l.onload = () => {
    i = U(l.contentWindow, "resize", t), t();
  }), h(e, l), () => {
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
    this.e || (this.is_svg ? this.e = Se(n.nodeName) : this.e = w(n.nodeType === 11 ? "TEMPLATE" : n.nodeName), this.t = n.tagName !== "TEMPLATE" ? n : n.content, this.c(t)), this.i(l);
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
    this.n.forEach(M);
  }
}
let zn;
function Mn(e) {
  zn = e;
}
function Dn() {
  if (!zn)
    throw new Error("Function called outside component initialization");
  return zn;
}
function dt(e) {
  Dn().$$.on_mount.push(e);
}
function ma(e) {
  Dn().$$.on_destroy.push(e);
}
function ba() {
  const e = Dn();
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
function sf(e, t) {
  return Dn().$$.context.set(e, t), t;
}
function An(e) {
  return Dn().$$.context.get(e);
}
function Mr(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((l) => l.call(this, t));
}
const Bt = [], Me = [];
let Ft = [];
const zr = [], uf = /* @__PURE__ */ Promise.resolve();
let Rr = !1;
function cf() {
  Rr || (Rr = !0, uf.then(Be));
}
function Rn(e) {
  Ft.push(e);
}
function Je(e) {
  zr.push(e);
}
const vr = /* @__PURE__ */ new Set();
let It = 0;
function Be() {
  if (It !== 0)
    return;
  const e = zn;
  do {
    try {
      for (; It < Bt.length; ) {
        const t = Bt[It];
        It++, Mn(t), df(t.$$);
      }
    } catch (t) {
      throw Bt.length = 0, It = 0, t;
    }
    for (Mn(null), Bt.length = 0, It = 0; Me.length; )
      Me.pop()();
    for (let t = 0; t < Ft.length; t += 1) {
      const n = Ft[t];
      vr.has(n) || (vr.add(n), n());
    }
    Ft.length = 0;
  } while (Bt.length);
  for (; zr.length; )
    zr.pop()();
  Rr = !1, vr.clear(), Mn(e);
}
function df(e) {
  if (e.fragment !== null) {
    e.update(), we(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Rn);
  }
}
function gf(e) {
  const t = [], n = [];
  Ft.forEach((l) => e.indexOf(l) === -1 ? t.push(l) : n.push(l)), n.forEach((l) => l()), Ft = t;
}
const Hl = /* @__PURE__ */ new Set();
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
function v(e, t) {
  e && e.i && (Hl.delete(e), e.i(t));
}
function L(e, t, n, l) {
  if (e && e.o) {
    if (Hl.has(e))
      return;
    Hl.add(e), bt.c.push(() => {
      Hl.delete(e), l && (n && e.d(1), l());
    }), e.o(t);
  } else
    l && l();
}
function Ze(e, t, n) {
  const l = e.$$.props[t];
  l !== void 0 && (e.$$.bound[l] = n, n(e.$$.ctx[l]));
}
function W(e) {
  e && e.c();
}
function G(e, t, n, l) {
  const { fragment: r, after_update: i } = e.$$;
  r && r.m(t, n), l || Rn(() => {
    const o = e.$$.on_mount.map(ca).filter($e);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : we(o), e.$$.on_mount = [];
  }), i.forEach(Rn);
}
function V(e, t) {
  const n = e.$$;
  n.fragment !== null && (gf(n.after_update), we(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function mf(e, t) {
  e.$$.dirty[0] === -1 && (Bt.push(e), cf(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ke(e, t, n, l, r, i, o, a = [-1]) {
  const f = zn;
  Mn(e);
  const s = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: $,
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
  let c = !1;
  if (s.ctx = n ? n(e, t.props || {}, (u, d, ...m) => {
    const g = m.length ? m[0] : d;
    return s.ctx && r(s.ctx[u], s.ctx[u] = g) && (!s.skip_bound && s.bound[u] && s.bound[u](g), c && mf(e, u)), d;
  }) : [], s.update(), c = !0, we(s.before_update), s.fragment = l ? l(s.ctx) : !1, t.target) {
    if (t.hydrate) {
      const u = lf(t.target);
      s.fragment && s.fragment.l(u), u.forEach(M);
    } else
      s.fragment && s.fragment.c();
    t.intro && v(e.$$.fragment), G(e, t.target, t.anchor, t.customElement), Be();
  }
  Mn(f);
}
class pe {
  $destroy() {
    V(this, 1), this.$destroy = $;
  }
  $on(t, n) {
    if (!$e(n))
      return $;
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
const Ht = [];
function bf(e, t) {
  return {
    subscribe: ge(e, t).subscribe
  };
}
function ge(e, t = $) {
  let n;
  const l = /* @__PURE__ */ new Set();
  function r(a) {
    if (ye(e, a) && (e = a, n)) {
      const f = !Ht.length;
      for (const s of l)
        s[1](), Ht.push(s, e);
      if (f) {
        for (let s = 0; s < Ht.length; s += 2)
          Ht[s][0](Ht[s + 1]);
        Ht.length = 0;
      }
    }
  }
  function i(a) {
    r(a(e));
  }
  function o(a, f = $) {
    const s = [a, f];
    return l.add(s), l.size === 1 && (n = t(r) || $), a(e), () => {
      l.delete(s), l.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: i, subscribe: o };
}
function ve(e, t, n) {
  const l = !Array.isArray(e), r = l ? [e] : e, i = t.length < 2;
  return bf(n, (o) => {
    let a = !1;
    const f = [];
    let s = 0, c = $;
    const u = () => {
      if (s)
        return;
      c();
      const m = t(l ? f[0] : f, o);
      i ? o(m) : c = $e(m) ? m : $;
    }, d = r.map((m, g) => da(m, (_) => {
      f[g] = _, s &= ~(1 << g), a && u();
    }, () => {
      s |= 1 << g;
    }));
    return a = !0, u(), function() {
      we(d), c(), a = !1;
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
function _f(e) {
  const t = Ne(e, "values", {}), n = Ne(e, "file_contents", {}), l = Ne(e, "_save_path", ""), r = Ne(e, "list_names", {
    attributes: [],
    events: [],
    intervals: []
  }), i = Ne(e, "subqueries", {}), o = Ne(e, "query_error", ""), a = Ne(e, "text_input", ""), f = Ne(e, "scopes", []), s = Ne(e, "scope_concepts", {}), c = Ne(e, "isLoading", !1), u = Ne(e, "loadingMessage", ""), d = Ne(e, "llm_available", !1), m = Ne(e, "llm_response", ""), g = Ne(e, "llm_loading", !1), _ = Ne(e, "llm_error", ""), y = Ne(e, "api_status", "Checking API connection..."), S = Ne(e, "extracted_query", ""), k = Ne(e, "llm_explanation", ""), p = Ne(e, "has_extracted_query", !1), N = Ne(e, "query_history", []), E = Ne(e, "ai_history", []);
  let q = "";
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
    isLoading: c,
    loadingMessage: u,
    llmResponse: m,
    llmLoading: g,
    llmError: _,
    llmAvailable: d,
    apiStatus: y,
    extractedQuery: S,
    llmExplanation: k,
    hasExtractedQuery: p,
    textInput: a,
    queryHistory: N,
    aiHistory: E,
    runQuery: (Q) => {
      e.set("text_input", Q), e.set("process_trigger", "run"), e.save_changes();
    },
    // LLM question handler
    handleLLMQuestion: (Q) => {
      e.set("llm_question", Q), e.set("llm_trigger", "ask"), e.save_changes();
    },
    handleLLMExplanation: () => {
      e.set("llm_trigger", "explain"), e.save_changes();
    },
    // Query extraction handler - triggered when AI extracts a query
    handleQueryExtraction: () => {
      let Q = "";
      S.subscribe((H) => Q = H)(), Q && Q !== q ? (console.log(
        "🔄 Query extracted from AI response:",
        Q
      ), console.log("🔄 Current text input:", q), console.log("🔄 Updating text input with extracted query"), q = Q, e.set("text_input", Q), e.save_changes()) : Q === q && console.log(
        "🔄 Extracted query is same as current input, no update needed"
      );
    },
    // Scope analysis handler
    handleScopeAnalysis: (Q, H = !1) => {
      console.log(
        "🔍 Scope Analysis requested for:",
        Q,
        H ? "(force refresh)" : ""
      );
      const D = H ? `${Q}:force` : Q;
      e.set("scope_analysis_trigger", D), e.save_changes();
    }
  };
}
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const hf = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, Fl = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [512, 512, [], "f077", "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
}, yf = {
  prefix: "fas",
  iconName: "chart-simple",
  icon: [448, 512, [], "e473", "M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z"]
}, kf = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, pf = kf, _a = {
  prefix: "fas",
  iconName: "bolt-lightning",
  icon: [384, 512, [], "e0b7", "M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z"]
}, Qr = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, ha = {
  prefix: "fas",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
}, wf = {
  prefix: "fas",
  iconName: "sun",
  icon: [512, 512, [9728], "f185", "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]
}, ya = {
  prefix: "fas",
  iconName: "play",
  icon: [384, 512, [9654], "f04b", "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]
}, vf = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, Cf = vf, Ie = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, Sf = {
  prefix: "fas",
  iconName: "list-ul",
  icon: [512, 512, ["list-dots"], "f0ca", "M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]
}, ka = Sf, er = {
  prefix: "fas",
  iconName: "copy",
  icon: [448, 512, [], "f0c5", "M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]
}, yt = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}, Nf = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, Mf = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, kt = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, zf = {
  prefix: "fas",
  iconName: "moon",
  icon: [384, 512, [127769, 9214], "f186", "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]
}, Rf = {
  prefix: "fas",
  iconName: "check",
  icon: [448, 512, [10003, 10004], "f00c", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, Lf = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, qf = Lf, Ef = {
  prefix: "fas",
  iconName: "database",
  icon: [448, 512, [], "f1c0", "M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z"]
}, Df = {
  prefix: "fas",
  iconName: "circle-xmark",
  icon: [512, 512, [61532, "times-circle", "xmark-circle"], "f057", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]
}, Af = Df, Dl = parseFloat;
function Lr(e, t = ";") {
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
function Tf(e, t, n, l) {
  let r, i;
  const o = "1em";
  let a, f, s, c = "-.125em";
  const u = "visible";
  return l && (s = "center", i = "1.25em"), n && (r = n), t && (t == "lg" ? (f = "1.33333em", a = ".75em", c = "-.225em") : t == "xs" ? f = ".75em" : t == "sm" ? f = ".875em" : f = t.replace("x", "em")), Lr([
    Lr({
      float: r,
      width: i,
      height: o,
      "line-height": a,
      "font-size": f,
      "text-align": s,
      "vertical-align": c,
      "transform-origin": "center",
      overflow: u
    }),
    e
  ]);
}
function Pf(e, t, n, l, r, i = 1, o = "", a = "") {
  let f = 1, s = 1;
  return r && (r == "horizontal" ? f = -1 : r == "vertical" ? s = -1 : f = s = -1), Lr(
    [
      `translate(${Dl(t) * i}${o},${Dl(n) * i}${o})`,
      `scale(${f * Dl(e)},${s * Dl(e)})`,
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
  let c = s(e), u = c(e);
  return {
    c() {
      t = Se("svg"), n = Se("g"), l = Se("g"), u.c(), b(
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
      R(d, t, m), h(t, n), h(n, l), u.m(l, null);
    },
    p(d, m) {
      c === (c = s(d)) && u ? u.p(d, m) : (u.d(1), u = c(d), u && (u.c(), u.m(l, null))), m & /*transform*/
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
      d && M(t), u.d();
    }
  };
}
function Qf(e) {
  let t, n, l, r, i, o, a, f, s, c;
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
      )), b(o, "transform", c = "translate(" + /*i*/
      e[10][0] / -2 + " " + /*i*/
      e[10][1] / -2 + ")");
    },
    m(u, d) {
      R(u, t, d), R(u, o, d);
    },
    p(u, d) {
      d & /*i*/
      1024 && n !== (n = /*i*/
      u[10][4][0]) && b(t, "d", n), d & /*secondaryColor, color*/
      68 && l !== (l = /*secondaryColor*/
      u[6] || /*color*/
      u[2] || "currentColor") && b(t, "fill", l), d & /*swapOpacity, primaryOpacity, secondaryOpacity*/
      896 && r !== (r = /*swapOpacity*/
      u[9] != !1 ? (
        /*primaryOpacity*/
        u[7]
      ) : (
        /*secondaryOpacity*/
        u[8]
      )) && b(t, "fill-opacity", r), d & /*i*/
      1024 && i !== (i = "translate(" + /*i*/
      u[10][0] / -2 + " " + /*i*/
      u[10][1] / -2 + ")") && b(t, "transform", i), d & /*i*/
      1024 && a !== (a = /*i*/
      u[10][4][1]) && b(o, "d", a), d & /*primaryColor, color*/
      36 && f !== (f = /*primaryColor*/
      u[5] || /*color*/
      u[2] || "currentColor") && b(o, "fill", f), d & /*swapOpacity, secondaryOpacity, primaryOpacity*/
      896 && s !== (s = /*swapOpacity*/
      u[9] != !1 ? (
        /*secondaryOpacity*/
        u[8]
      ) : (
        /*primaryOpacity*/
        u[7]
      )) && b(o, "fill-opacity", s), d & /*i*/
      1024 && c !== (c = "translate(" + /*i*/
      u[10][0] / -2 + " " + /*i*/
      u[10][1] / -2 + ")") && b(o, "transform", c);
    },
    d(u) {
      u && M(t), u && M(o);
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
      R(i, t, o);
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
function Of(e) {
  let t, n = (
    /*i*/
    e[10][4] && Ur(e)
  );
  return {
    c() {
      n && n.c(), t = be();
    },
    m(l, r) {
      n && n.m(l, r), R(l, t, r);
    },
    p(l, [r]) {
      /*i*/
      l[10][4] ? n ? n.p(l, r) : (n = Ur(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: $,
    o: $,
    d(l) {
      n && n.d(l), l && M(t);
    }
  };
}
function xf(e, t, n) {
  let { class: l = "" } = t, { id: r = "" } = t, { style: i = "" } = t, { icon: o } = t, { size: a = "" } = t, { color: f = "" } = t, { fw: s = !1 } = t, { pull: c = "" } = t, { scale: u = 1 } = t, { translateX: d = 0 } = t, { translateY: m = 0 } = t, { rotate: g = "" } = t, { flip: _ = !1 } = t, { spin: y = !1 } = t, { pulse: S = !1 } = t, { primaryColor: k = "" } = t, { secondaryColor: p = "" } = t, { primaryOpacity: N = 1 } = t, { secondaryOpacity: E = 0.4 } = t, { swapOpacity: q = !1 } = t, Q, H, D;
  return e.$$set = (T) => {
    "class" in T && n(0, l = T.class), "id" in T && n(1, r = T.id), "style" in T && n(13, i = T.style), "icon" in T && n(14, o = T.icon), "size" in T && n(15, a = T.size), "color" in T && n(2, f = T.color), "fw" in T && n(16, s = T.fw), "pull" in T && n(17, c = T.pull), "scale" in T && n(18, u = T.scale), "translateX" in T && n(19, d = T.translateX), "translateY" in T && n(20, m = T.translateY), "rotate" in T && n(21, g = T.rotate), "flip" in T && n(22, _ = T.flip), "spin" in T && n(3, y = T.spin), "pulse" in T && n(4, S = T.pulse), "primaryColor" in T && n(5, k = T.primaryColor), "secondaryColor" in T && n(6, p = T.secondaryColor), "primaryOpacity" in T && n(7, N = T.primaryOpacity), "secondaryOpacity" in T && n(8, E = T.secondaryOpacity), "swapOpacity" in T && n(9, q = T.swapOpacity);
  }, e.$$.update = () => {
    e.$$.dirty & /*icon*/
    16384 && n(10, Q = o && o.icon || [0, 0, "", [], ""]), e.$$.dirty & /*style, size, pull, fw*/
    237568 && n(11, H = Tf(i, a, c, s)), e.$$.dirty & /*scale, translateX, translateY, rotate, flip*/
    8126464 && n(12, D = Pf(u, d, m, g, _, 512));
  }, [
    l,
    r,
    f,
    y,
    S,
    k,
    p,
    N,
    E,
    q,
    Q,
    H,
    D,
    i,
    o,
    a,
    s,
    c,
    u,
    d,
    m,
    g,
    _
  ];
}
class me extends pe {
  constructor(t) {
    super(), ke(this, t, xf, Of, ye, {
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
function If() {
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
const Gl = If();
function Hf(e) {
  let t, n;
  return t = new me({ props: { icon: zf } }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      G(t, l, r), n = !0;
    },
    p: $,
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function Bf(e) {
  let t, n;
  return t = new me({ props: { icon: wf } }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      G(t, l, r), n = !0;
    },
    p: $,
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function Ff(e) {
  let t, n, l, r, i, o;
  const a = [Bf, Hf], f = [];
  function s(c, u) {
    return (
      /*$theme*/
      c[0] === "dark" ? 0 : 1
    );
  }
  return n = s(e), l = f[n] = a[n](e), {
    c() {
      t = w("button"), l.c(), b(t, "class", "px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"), b(t, "title", "Toggle theme");
    },
    m(c, u) {
      R(c, t, u), f[n].m(t, null), r = !0, i || (o = U(
        t,
        "click",
        /*toggleTheme*/
        e[1]
      ), i = !0);
    },
    p(c, [u]) {
      let d = n;
      n = s(c), n === d ? f[n].p(c, u) : (ie(), L(f[d], 1, 1, () => {
        f[d] = null;
      }), oe(), l = f[n], l ? l.p(c, u) : (l = f[n] = a[n](c), l.c()), v(l, 1), l.m(t, null));
    },
    i(c) {
      r || (v(l), r = !0);
    },
    o(c) {
      L(l), r = !1;
    },
    d(c) {
      c && M(t), f[n].d(), i = !1, o();
    }
  };
}
function Gf(e, t, n) {
  let l;
  x(e, Gl, (i) => n(0, l = i));
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
class Vf extends pe {
  constructor(t) {
    super(), ke(this, t, Gf, Ff, ye, {});
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
  function c() {
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
      t = w("button"), W(n.$$.fragment), l = P(), i = F(r), b(t, "class", o = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*activeTab*/
      (e[0] === /*tab*/
      e[4].id ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600"));
    },
    m(u, d) {
      R(u, t, d), G(n, t, null), h(t, l), h(t, i), a = !0, f || (s = U(t, "click", c), f = !0);
    },
    p(u, d) {
      e = u, (!a || d & /*activeTab*/
      1 && o !== (o = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*activeTab*/
      (e[0] === /*tab*/
      e[4].id ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600"))) && b(t, "class", o);
    },
    i(u) {
      a || (v(n.$$.fragment, u), a = !0);
    },
    o(u) {
      L(n.$$.fragment, u), a = !1;
    },
    d(u) {
      u && M(t), V(n), f = !1, s();
    }
  };
}
function Wf(e) {
  let t, n, l, r, i, o, a, f = (
    /*tabs*/
    e[2]
  ), s = [];
  for (let u = 0; u < f.length; u += 1)
    s[u] = Zr(Jr(e, f, u));
  const c = (u) => L(s[u], 1, 1, () => {
    s[u] = null;
  });
  return o = new Vf({}), {
    c() {
      t = w("div"), n = w("nav");
      for (let u = 0; u < s.length; u += 1)
        s[u].c();
      l = P(), r = w("div"), i = P(), W(o.$$.fragment), b(r, "class", "flex-auto"), b(n, "class", "flex gap-2 px-4 py-2"), b(n, "aria-label", "Tabs"), b(t, "class", "w-full bg-gray-300 dark:bg-gray-800 dark:text-white");
    },
    m(u, d) {
      R(u, t, d), h(t, n);
      for (let m = 0; m < s.length; m += 1)
        s[m] && s[m].m(n, null);
      h(n, l), h(n, r), h(n, i), G(o, n, null), a = !0;
    },
    p(u, [d]) {
      if (d & /*activeTab, tabs, onTabChange*/
      7) {
        f = /*tabs*/
        u[2];
        let m;
        for (m = 0; m < f.length; m += 1) {
          const g = Jr(u, f, m);
          s[m] ? (s[m].p(g, d), v(s[m], 1)) : (s[m] = Zr(g), s[m].c(), v(s[m], 1), s[m].m(n, l));
        }
        for (ie(), m = f.length; m < s.length; m += 1)
          c(m);
        oe();
      }
    },
    i(u) {
      if (!a) {
        for (let d = 0; d < f.length; d += 1)
          v(s[d]);
        v(o.$$.fragment, u), a = !0;
      }
    },
    o(u) {
      s = s.filter(Boolean);
      for (let d = 0; d < s.length; d += 1)
        L(s[d]);
      L(o.$$.fragment, u), a = !1;
    },
    d(u) {
      u && M(t), De(s, u), V(o);
    }
  };
}
function Kf(e, t, n) {
  let { activeTab: l = "query-inspector" } = t, { onTabChange: r = () => {
  } } = t;
  const i = [
    {
      id: "results",
      label: "Query Results",
      icon: yf
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
class Xf extends pe {
  constructor(t) {
    super(), ke(this, t, Kf, Wf, ye, { activeTab: 0, onTabChange: 1 });
  }
}
function Yf(e) {
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
function Uf(e, t) {
  return function(n, l) {
    for (var r = n.length, i = [], o = 0, a = e[0], f = 0; r > 0 && a > 0 && (f + a + 1 > l && (a = Math.max(1, l - f)), i.push(n.substring(r -= a, r + a)), !((f += a + 1) > l)); )
      a = e[o = (o + 1) % e.length];
    return i.reverse().join(t);
  };
}
function Jf(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var Zf = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Wl(e) {
  if (!(t = Zf.exec(e)))
    throw new Error("invalid format: " + e);
  var t;
  return new jr({
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
Wl.prototype = jr.prototype;
function jr(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
jr.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function $f(e) {
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
var pa;
function es(e, t) {
  var n = Vl(e, t);
  if (!n)
    return e + "";
  var l = n[0], r = n[1], i = r - (pa = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, o = l.length;
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
  d: Yf,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => $r(e * 100, t),
  r: $r,
  s: es,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function ti(e) {
  return e;
}
var ni = Array.prototype.map, li = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function ts(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? ti : Uf(ni.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", l = e.currency === void 0 ? "" : e.currency[1] + "", r = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? ti : Jf(ni.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", a = e.minus === void 0 ? "−" : e.minus + "", f = e.nan === void 0 ? "NaN" : e.nan + "";
  function s(u) {
    u = Wl(u);
    var d = u.fill, m = u.align, g = u.sign, _ = u.symbol, y = u.zero, S = u.width, k = u.comma, p = u.precision, N = u.trim, E = u.type;
    E === "n" ? (k = !0, E = "g") : ei[E] || (p === void 0 && (p = 12), N = !0, E = "g"), (y || d === "0" && m === "=") && (y = !0, d = "0", m = "=");
    var q = _ === "$" ? n : _ === "#" && /[boxX]/.test(E) ? "0" + E.toLowerCase() : "", Q = _ === "$" ? l : /[%p]/.test(E) ? o : "", H = ei[E], D = /[defgprs%]/.test(E);
    p = p === void 0 ? 6 : /[gprs]/.test(E) ? Math.max(1, Math.min(21, p)) : Math.max(0, Math.min(20, p));
    function T(C) {
      var A = q, ee = Q, J, O, I;
      if (E === "c")
        ee = H(C) + ee, C = "";
      else {
        C = +C;
        var X = C < 0 || 1 / C < 0;
        if (C = isNaN(C) ? f : H(Math.abs(C), p), N && (C = $f(C)), X && +C == 0 && g !== "+" && (X = !1), A = (X ? g === "(" ? g : a : g === "-" || g === "(" ? "" : g) + A, ee = (E === "s" ? li[8 + pa / 3] : "") + ee + (X && g === "(" ? ")" : ""), D) {
          for (J = -1, O = C.length; ++J < O; )
            if (I = C.charCodeAt(J), 48 > I || I > 57) {
              ee = (I === 46 ? r + C.slice(J + 1) : C.slice(J)) + ee, C = C.slice(0, J);
              break;
            }
        }
      }
      k && !y && (C = t(C, 1 / 0));
      var _e = A.length + C.length + ee.length, ne = _e < S ? new Array(S - _e + 1).join(d) : "";
      switch (k && y && (C = t(ne + C, ne.length ? S - ee.length : 1 / 0), ne = ""), m) {
        case "<":
          C = A + C + ee + ne;
          break;
        case "=":
          C = A + ne + C + ee;
          break;
        case "^":
          C = ne.slice(0, _e = ne.length >> 1) + A + C + ee + ne.slice(_e);
          break;
        default:
          C = ne + A + C + ee;
          break;
      }
      return i(C);
    }
    return T.toString = function() {
      return u + "";
    }, T;
  }
  function c(u, d) {
    var m = s((u = Wl(u), u.type = "f", u)), g = Math.max(-8, Math.min(8, Math.floor(Vt(d) / 3))) * 3, _ = Math.pow(10, -g), y = li[8 + g / 3];
    return function(S) {
      return m(_ * S) + y;
    };
  }
  return {
    format: s,
    formatPrefix: c
  };
}
var Al, Ce, wa;
ns({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function ns(e) {
  return Al = ts(e), Ce = Al.format, wa = Al.formatPrefix, Al;
}
function va(e) {
  return Math.max(0, -Vt(Math.abs(e)));
}
function ls(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Vt(t) / 3))) * 3 - Vt(Math.abs(e)));
}
function rs(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Vt(t) - Vt(e)) + 1;
}
function Kt(e) {
  for (var t = e.length / 6 | 0, n = new Array(t), l = 0; l < t; )
    n[l] = "#" + e.slice(l * 6, ++l * 6);
  return n;
}
const is = Kt("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), os = Kt("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function Or(e, t, n) {
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
var Ln = 0.7, Kl = 1 / Ln, Gt = "\\s*([+-]?\\d+)\\s*", qn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ve = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", as = /^#([0-9a-f]{3,8})$/, fs = new RegExp(`^rgb\\(${Gt},${Gt},${Gt}\\)$`), ss = new RegExp(`^rgb\\(${Ve},${Ve},${Ve}\\)$`), us = new RegExp(`^rgba\\(${Gt},${Gt},${Gt},${qn}\\)$`), cs = new RegExp(`^rgba\\(${Ve},${Ve},${Ve},${qn}\\)$`), ds = new RegExp(`^hsl\\(${qn},${Ve},${Ve}\\)$`), gs = new RegExp(`^hsla\\(${qn},${Ve},${Ve},${qn}\\)$`), ri = {
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
Or(Tn, En, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ii,
  // Deprecated! Use color.formatHex.
  formatHex: ii,
  formatHex8: ms,
  formatHsl: bs,
  formatRgb: oi,
  toString: oi
});
function ii() {
  return this.rgb().formatHex();
}
function ms() {
  return this.rgb().formatHex8();
}
function bs() {
  return Sa(this).formatHsl();
}
function oi() {
  return this.rgb().formatRgb();
}
function En(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = as.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ai(t) : n === 3 ? new Ee(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Tl(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Tl(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = fs.exec(e)) ? new Ee(t[1], t[2], t[3], 1) : (t = ss.exec(e)) ? new Ee(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = us.exec(e)) ? Tl(t[1], t[2], t[3], t[4]) : (t = cs.exec(e)) ? Tl(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ds.exec(e)) ? ui(t[1], t[2] / 100, t[3] / 100, 1) : (t = gs.exec(e)) ? ui(t[1], t[2] / 100, t[3] / 100, t[4]) : ri.hasOwnProperty(e) ? ai(ri[e]) : e === "transparent" ? new Ee(NaN, NaN, NaN, 0) : null;
}
function ai(e) {
  return new Ee(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Tl(e, t, n, l) {
  return l <= 0 && (e = t = n = NaN), new Ee(e, t, n, l);
}
function _s(e) {
  return e instanceof Tn || (e = En(e)), e ? (e = e.rgb(), new Ee(e.r, e.g, e.b, e.opacity)) : new Ee();
}
function Xl(e, t, n, l) {
  return arguments.length === 1 ? _s(e) : new Ee(e, t, n, l ?? 1);
}
function Ee(e, t, n, l) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +l;
}
Or(Ee, Xl, Ca(Tn, {
  brighter(e) {
    return e = e == null ? Kl : Math.pow(Kl, e), new Ee(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ln : Math.pow(Ln, e), new Ee(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ee(ht(this.r), ht(this.g), ht(this.b), Yl(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: fi,
  // Deprecated! Use color.formatHex.
  formatHex: fi,
  formatHex8: hs,
  formatRgb: si,
  toString: si
}));
function fi() {
  return `#${_t(this.r)}${_t(this.g)}${_t(this.b)}`;
}
function hs() {
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
  return l <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Pe(e, t, n, l);
}
function Sa(e) {
  if (e instanceof Pe)
    return new Pe(e.h, e.s, e.l, e.opacity);
  if (e instanceof Tn || (e = En(e)), !e)
    return new Pe();
  if (e instanceof Pe)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, l = e.b / 255, r = Math.min(t, n, l), i = Math.max(t, n, l), o = NaN, a = i - r, f = (i + r) / 2;
  return a ? (t === i ? o = (n - l) / a + (n < l) * 6 : n === i ? o = (l - t) / a + 2 : o = (t - n) / a + 4, a /= f < 0.5 ? i + r : 2 - i - r, o *= 60) : a = f > 0 && f < 1 ? 0 : o, new Pe(o, a, f, e.opacity);
}
function ys(e, t, n, l) {
  return arguments.length === 1 ? Sa(e) : new Pe(e, t, n, l ?? 1);
}
function Pe(e, t, n, l) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +l;
}
Or(Pe, ys, Ca(Tn, {
  brighter(e) {
    return e = e == null ? Kl : Math.pow(Kl, e), new Pe(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ln : Math.pow(Ln, e), new Pe(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, l = n + (n < 0.5 ? n : 1 - n) * t, r = 2 * n - l;
    return new Ee(
      Cr(e >= 240 ? e - 240 : e + 120, r, l),
      Cr(e, r, l),
      Cr(e < 120 ? e + 240 : e - 120, r, l),
      this.opacity
    );
  },
  clamp() {
    return new Pe(ci(this.h), Pl(this.s), Pl(this.l), Yl(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Yl(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ci(this.h)}, ${Pl(this.s) * 100}%, ${Pl(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ci(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Pl(e) {
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
function ps(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(l) {
    return Math.pow(e + l * t, n);
  };
}
function ws(e) {
  return (e = +e) == 1 ? Na : function(t, n) {
    return n - t ? ps(t, n, e) : xr(isNaN(t) ? n : t);
  };
}
function Na(e, t) {
  var n = t - e;
  return n ? ks(e, n) : xr(isNaN(e) ? t : e);
}
const di = function e(t) {
  var n = ws(t);
  function l(r, i) {
    var o = n((r = Xl(r)).r, (i = Xl(i)).r), a = n(r.g, i.g), f = n(r.b, i.b), s = Na(r.opacity, i.opacity);
    return function(c) {
      return r.r = o(c), r.g = a(c), r.b = f(c), r.opacity = s(c), r + "";
    };
  }
  return l.gamma = e, l;
}(1);
function vs(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, l = t.slice(), r;
  return function(i) {
    for (r = 0; r < n; ++r)
      l[r] = e[r] * (1 - i) + t[r] * i;
    return l;
  };
}
function Cs(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Ss(e, t) {
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
function Ns(e, t) {
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
function Ms(e, t) {
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
function zs(e) {
  return function() {
    return e;
  };
}
function Rs(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Ls(e, t) {
  var n = qr.lastIndex = Sr.lastIndex = 0, l, r, i, o = -1, a = [], f = [];
  for (e = e + "", t = t + ""; (l = qr.exec(e)) && (r = Sr.exec(t)); )
    (i = r.index) > n && (i = t.slice(n, i), a[o] ? a[o] += i : a[++o] = i), (l = l[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, f.push({ i: o, x: Ul(l, r) })), n = Sr.lastIndex;
  return n < t.length && (i = t.slice(n), a[o] ? a[o] += i : a[++o] = i), a.length < 2 ? f[0] ? Rs(f[0].x) : zs(t) : (t = f.length, function(s) {
    for (var c = 0, u; c < t; ++c)
      a[(u = f[c]).i] = u.x(s);
    return a.join("");
  });
}
function Ir(e, t) {
  var n = typeof t, l;
  return t == null || n === "boolean" ? xr(t) : (n === "number" ? Ul : n === "string" ? (l = En(t)) ? (t = l, di) : Ls : t instanceof En ? di : t instanceof Date ? Ns : Cs(t) ? vs : Array.isArray(t) ? Ss : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Ms : Ul)(e, t);
}
function qs(e, t) {
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
function Ds(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = w("span"), b(t, "class", n = "bar " + /*absolutePosition*/
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
      R(o, t, a), r || (i = [
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
    i: $,
    o: $,
    d(o) {
      o && M(t), r = !1, we(i);
    }
  };
}
function As(e, t, n) {
  let { absolutePosition: l = !1 } = t, { fraction: r = 1 } = t, { leftFraction: i = 0 } = t, { maxWidth: o = null } = t, { colorScale: a = null } = t, { color: f = "lightgray" } = t, { rounded: s = !0 } = t, { hoverable: c = !1 } = t;
  dt(() => {
    setTimeout(() => n(8, u = !0), 100);
  });
  let u = !1, d = "";
  function m(_) {
    Mr.call(this, e, _);
  }
  function g(_) {
    Mr.call(this, e, _);
  }
  return e.$$set = (_) => {
    "absolutePosition" in _ && n(0, l = _.absolutePosition), "fraction" in _ && n(1, r = _.fraction), "leftFraction" in _ && n(2, i = _.leftFraction), "maxWidth" in _ && n(3, o = _.maxWidth), "colorScale" in _ && n(4, a = _.colorScale), "color" in _ && n(5, f = _.color), "rounded" in _ && n(6, s = _.rounded), "hoverable" in _ && n(7, c = _.hoverable);
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
    c,
    u,
    d,
    m,
    g
  ];
}
class Hr extends pe {
  constructor(t) {
    super(), ke(this, t, As, Ds, ye, {
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
      t = w("div"), n = F(
        /*title*/
        e[11]
      ), b(t, "class", "font-bold text-xs truncate text-right"), re(t, "width", "96px");
    },
    m(l, r) {
      R(l, t, r), h(t, n);
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
  return t = new Hr({
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
      G(t, l, r), n = !0;
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
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function Qs(e) {
  let t, n;
  return t = new Hr({
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
      G(t, l, r), n = !0;
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
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
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
  const i = (o) => L(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      t = be();
    },
    m(o, a) {
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(o, a);
      R(o, t, a), n = !0;
    },
    p(o, a) {
      if (a & /*scale, offsets, values, colors, hoverable, hoveringIndex*/
      25674) {
        l = /*values*/
        o[3];
        let f;
        for (f = 0; f < l.length; f += 1) {
          const s = mi(o, l, f);
          r[f] ? (r[f].p(s, a), v(r[f], 1)) : (r[f] = hi(s), r[f].c(), v(r[f], 1), r[f].m(t.parentNode, t));
        }
        for (ie(), f = l.length; f < r.length; f += 1)
          i(f);
        oe();
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
        L(r[a]);
      n = !1;
    },
    d(o) {
      De(r, o), o && M(t);
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
  return t = new Hr({
    props: {
      absolutePosition: !0,
      leftFraction: (
        /*i*/
        e[27] > 0 ? (
          /*scale*/
          (e[1] || ki)(
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
        (e[1] || pi)(
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
      G(t, r, i), n = !0;
    },
    p(r, i) {
      e = r;
      const o = {};
      i & /*scale, offsets*/
      16386 && (o.leftFraction = /*i*/
      e[27] > 0 ? (
        /*scale*/
        (e[1] || ki)(
          /*offsets*/
          e[14][
            /*i*/
            e[27] - 1
          ]
        )
      ) : 0), i & /*scale, values*/
      10 && (o.fraction = /*scale*/
      (e[1] || pi)(
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
      L(t.$$.fragment, r), n = !1;
    },
    d(r) {
      V(t, r);
    }
  };
}
function yi(e) {
  let t, n, l, r;
  const i = [xs, Os], o = [];
  function a(f, s) {
    return (
      /*$$slots*/
      f[15].caption ? 1 : 0
    );
  }
  return n = a(e), l = o[n] = i[n](e), {
    c() {
      t = w("div"), l.c(), b(t, "class", "text-xs text-gray-800 dark:text-gray-200");
    },
    m(f, s) {
      R(f, t, s), o[n].m(t, null), r = !0;
    },
    p(f, s) {
      let c = n;
      n = a(f), n === c ? o[n].p(f, s) : (ie(), L(o[c], 1, 1, () => {
        o[c] = null;
      }), oe(), l = o[n], l ? l.p(f, s) : (l = o[n] = i[n](f), l.c()), v(l, 1), l.m(t, null));
    },
    i(f) {
      r || (v(l), r = !0);
    },
    o(f) {
      L(l), r = !1;
    },
    d(f) {
      f && M(t), o[n].d();
    }
  };
}
function Os(e) {
  let t;
  const n = (
    /*#slots*/
    e[17].caption
  ), l = Qe(
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
      73728) && Oe(
        l,
        n,
        r,
        /*$$scope*/
        r[16],
        t ? je(
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
      t || (v(l, r), t = !0);
    },
    o(r) {
      L(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function xs(e) {
  let t = Ce(".3")(
    /*value*/
    e[2]
  ) + "", n;
  return {
    c() {
      n = F(t);
    },
    m(l, r) {
      R(l, n, r);
    },
    p(l, r) {
      r & /*value*/
      4 && t !== (t = Ce(".3")(
        /*value*/
        l[2]
      ) + "") && ae(n, t);
    },
    i: $,
    o: $,
    d(l) {
      l && M(n);
    }
  };
}
function Is(e) {
  let t, n, l, r, i, o, a, f, s = !!/*title*/
  e[11] && bi(e), c = (
    /*showFullBar*/
    e[4] && _i(e)
  );
  const u = [js, Qs], d = [];
  function m(_, y) {
    return (
      /*values*/
      _[3] != null ? 0 : 1
    );
  }
  i = m(e), o = d[i] = u[i](e);
  let g = (
    /*showTooltip*/
    e[5] && yi(e)
  );
  return {
    c() {
      t = w("div"), s && s.c(), n = P(), l = w("div"), c && c.c(), r = P(), o.c(), a = P(), g && g.c(), b(l, "class", "parent-bar relative rounded-full overflow-hidden"), re(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), re(l, "height", "6px"), se(l, "mb-1", !/*horizontalLayout*/
      e[12]), b(t, "class", "items-center gap-1"), se(
        t,
        "flex",
        /*horizontalLayout*/
        e[12]
      );
    },
    m(_, y) {
      R(_, t, y), s && s.m(t, null), h(t, n), h(t, l), c && c.m(l, null), h(l, r), d[i].m(l, null), h(t, a), g && g.m(t, null), f = !0;
    },
    p(_, [y]) {
      /*title*/
      _[11] ? s ? s.p(_, y) : (s = bi(_), s.c(), s.m(t, n)) : s && (s.d(1), s = null), /*showFullBar*/
      _[4] ? c ? (c.p(_, y), y & /*showFullBar*/
      16 && v(c, 1)) : (c = _i(_), c.c(), v(c, 1), c.m(l, r)) : c && (ie(), L(c, 1, 1, () => {
        c = null;
      }), oe());
      let S = i;
      i = m(_), i === S ? d[i].p(_, y) : (ie(), L(d[S], 1, 1, () => {
        d[S] = null;
      }), oe(), o = d[i], o ? o.p(_, y) : (o = d[i] = u[i](_), o.c()), v(o, 1), o.m(l, null)), (!f || y & /*width*/
      1) && re(
        l,
        "width",
        /*width*/
        _[0] == null ? "100%" : `${/*width*/
        _[0]}px`
      ), (!f || y & /*horizontalLayout*/
      4096) && se(l, "mb-1", !/*horizontalLayout*/
      _[12]), /*showTooltip*/
      _[5] ? g ? (g.p(_, y), y & /*showTooltip*/
      32 && v(g, 1)) : (g = yi(_), g.c(), v(g, 1), g.m(t, null)) : g && (ie(), L(g, 1, 1, () => {
        g = null;
      }), oe()), (!f || y & /*horizontalLayout*/
      4096) && se(
        t,
        "flex",
        /*horizontalLayout*/
        _[12]
      );
    },
    i(_) {
      f || (v(c), v(o), v(g), f = !0);
    },
    o(_) {
      L(c), L(o), L(g), f = !1;
    },
    d(_) {
      _ && M(t), s && s.d(), c && c.d(), d[i].d(), g && g.d();
    }
  };
}
const ki = (e) => e, pi = (e) => e, wi = (e) => e;
function Hs(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = Tr(l);
  let { width: o = 100 } = t, { scale: a = null } = t, { value: f = 0 } = t, { values: s = null } = t, { showFullBar: c = !1 } = t, { showTooltip: u = !0 } = t, { colors: d = is } = t, { colorScale: m = Es } = t, { color: g = null } = t, { fullBarColor: _ = "#e5e7eb" } = t, { hoverable: y = !1 } = t, { title: S = null } = t, { horizontalLayout: k = !1 } = t, p = null, N = [];
  const E = (A) => n(13, p = -1), q = (A) => n(13, p = null), Q = (A, ee) => n(13, p = A), H = (A) => n(13, p = null), D = () => g, T = (A) => n(13, p = 0), C = (A) => n(13, p = null);
  return e.$$set = (A) => {
    "width" in A && n(0, o = A.width), "scale" in A && n(1, a = A.scale), "value" in A && n(2, f = A.value), "values" in A && n(3, s = A.values), "showFullBar" in A && n(4, c = A.showFullBar), "showTooltip" in A && n(5, u = A.showTooltip), "colors" in A && n(6, d = A.colors), "colorScale" in A && n(7, m = A.colorScale), "color" in A && n(8, g = A.color), "fullBarColor" in A && n(9, _ = A.fullBarColor), "hoverable" in A && n(10, y = A.hoverable), "title" in A && n(11, S = A.title), "horizontalLayout" in A && n(12, k = A.horizontalLayout), "$$scope" in A && n(16, r = A.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*values*/
    8 && (s != null ? n(14, N = Ts(s)) : n(14, N = []));
  }, [
    o,
    a,
    f,
    s,
    c,
    u,
    d,
    m,
    g,
    _,
    y,
    S,
    k,
    p,
    N,
    i,
    r,
    l,
    E,
    q,
    Q,
    H,
    D,
    T,
    C
  ];
}
class Br extends pe {
  constructor(t) {
    super(), ke(this, t, Hs, Is, ye, {
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
function Fs(e) {
  let t, n, l, r;
  const i = (
    /*#slots*/
    e[4].default
  ), o = Qe(
    i,
    e,
    /*$$scope*/
    e[3],
    vi
  );
  return {
    c() {
      t = w("div"), o && o.c(), b(
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
      R(a, t, f), o && o.m(t, null), n = !0, l || (r = [
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
      9) && Oe(
        o,
        i,
        a,
        /*$$scope*/
        a[3],
        n ? je(
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
      n || (v(o, a), n = !0);
    },
    o(a) {
      L(o, a), n = !1;
    },
    d(a) {
      a && M(t), o && o.d(a), l = !1, we(r);
    }
  };
}
function Gs(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t, { hovering: i = !1 } = t, { class: o = "" } = t, { style: a = "" } = t;
  function f(u) {
    Mr.call(this, e, u);
  }
  const s = () => n(0, i = !0), c = () => n(0, i = !1);
  return e.$$set = (u) => {
    "hovering" in u && n(0, i = u.hovering), "class" in u && n(1, o = u.class), "style" in u && n(2, a = u.style), "$$scope" in u && n(3, r = u.$$scope);
  }, [
    i,
    o,
    a,
    r,
    l,
    f,
    s,
    c
  ];
}
class nr extends pe {
  constructor(t) {
    super(), ke(this, t, Gs, Fs, ye, { hovering: 0, class: 1, style: 2 });
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
      t = w("option"), l = F(n), t.__value = r = /*scope*/
      e[41], t.value = t.__value;
    },
    m(i, o) {
      R(i, t, o), h(t, l);
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
function Vs(e) {
  let t, n, l, r, i, o, a, f, s, c, u, d, m, g, _, y, S, k, p, N, E, q, Q, H, D, T, C, A, ee;
  function J(le, ce) {
    if (
      /*hasError*/
      le[19]
    )
      return Ys;
    if (
      /*hasConceptIds*/
      le[20]
    )
      return Xs;
  }
  let O = J(e), I = O && O(e), X = (
    /*totalCount*/
    e[21] > 0 && Mi(e)
  );
  const _e = [Js, Us], ne = [];
  function Y(le, ce) {
    return (
      /*paginatedConcepts*/
      le[18].length > 0 ? 0 : 1
    );
  }
  _ = Y(e), y = ne[_] = _e[_](e), N = new me({
    props: { icon: yt, class: "inline mr-2" }
  });
  let j = (
    /*selectedConceptIDs*/
    e[12].size > 0 && qi(e)
  );
  function te(le, ce) {
    return (
      /*queryByName*/
      le[1] ? eu : $s
    );
  }
  let ue = te(e), B = ue(e), fe = (
    /*sortedConcepts*/
    e[15].length > Ye && Ei(e)
  );
  return {
    c() {
      I && I.c(), t = P(), n = w("div"), l = w("div"), r = w("div"), i = w("input"), o = P(), a = w("div"), a.textContent = "Data Element", f = P(), s = w("div"), s.textContent = "Type", c = P(), u = w("div"), d = F(`Count
            `), X && X.c(), m = P(), g = w("div"), y.c(), S = P(), k = w("div"), p = w("button"), W(N.$$.fragment), E = F(`
          Query `), j && j.c(), Q = P(), H = w("button"), B.c(), T = P(), fe && fe.c(), b(i, "type", "checkbox"), b(i, "class", "form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"), i.checked = /*allFilteredSelected*/
      e[13], i.indeterminate = /*someFilteredSelected*/
      e[17], b(i, "aria-label", "Select all concepts"), b(r, "class", "flex items-center justify-center"), b(a, "class", "font-semibold text-gray-900 dark:text-gray-100"), b(s, "class", "font-semibold text-gray-900 dark:text-gray-100"), b(u, "class", "font-semibold text-gray-900 dark:text-gray-100"), b(l, "class", "grid gap-4 px-4 py-4 items-center"), re(l, "grid-template-columns", "2rem 2fr 1fr 2fr"), b(n, "class", "bg-gray-50 dark:bg-gray-800 rounded-t-lg border border-gray-200 dark:border-gray-700"), b(g, "class", "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-b-lg overflow-y-auto custom-scrollbar min-h-0 flex-auto svelte-1xw87wt"), b(p, "class", "px-3 py-1.5 font-semibold rounded transition-colors duration-200 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-200/50 disabled:dark:bg-gray-700/50 text-white disabled:text-gray-500/50 whitespace-nowrap"), p.disabled = q = /*selectedConceptIDs*/
      e[12].size == 0, H.disabled = D = /*selectedConceptIDs*/
      e[12].size == 0, b(H, "class", "px-3 py-1.5 font-semibold rounded transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white whitespace-nowrap"), b(H, "title", "Change whether to add to query by concept name or ID"), b(k, "class", "py-2 flex items-center gap-2");
    },
    m(le, ce) {
      I && I.m(le, ce), R(le, t, ce), R(le, n, ce), h(n, l), h(l, r), h(r, i), h(l, o), h(l, a), h(l, f), h(l, s), h(l, c), h(l, u), h(u, d), X && X.m(u, null), R(le, m, ce), R(le, g, ce), ne[_].m(g, null), R(le, S, ce), R(le, k, ce), h(k, p), G(N, p, null), h(p, E), j && j.m(p, null), h(k, Q), h(k, H), B.m(H, null), h(k, T), fe && fe.m(k, null), C = !0, A || (ee = [
        U(
          i,
          "change",
          /*toggleSelectAllFiltered*/
          e[25]
        ),
        U(
          p,
          "click",
          /*click_handler_3*/
          e[35]
        ),
        U(
          H,
          "click",
          /*click_handler_4*/
          e[36]
        )
      ], A = !0);
    },
    p(le, ce) {
      O === (O = J(le)) && I ? I.p(le, ce) : (I && I.d(1), I = O && O(le), I && (I.c(), I.m(t.parentNode, t))), (!C || ce[0] & /*allFilteredSelected*/
      8192) && (i.checked = /*allFilteredSelected*/
      le[13]), (!C || ce[0] & /*someFilteredSelected*/
      131072) && (i.indeterminate = /*someFilteredSelected*/
      le[17]), /*totalCount*/
      le[21] > 0 ? X ? X.p(le, ce) : (X = Mi(le), X.c(), X.m(u, null)) : X && (X.d(1), X = null);
      let Re = _;
      _ = Y(le), _ === Re ? ne[_].p(le, ce) : (ie(), L(ne[Re], 1, 1, () => {
        ne[Re] = null;
      }), oe(), y = ne[_], y ? y.p(le, ce) : (y = ne[_] = _e[_](le), y.c()), v(y, 1), y.m(g, null)), /*selectedConceptIDs*/
      le[12].size > 0 ? j ? j.p(le, ce) : (j = qi(le), j.c(), j.m(p, null)) : j && (j.d(1), j = null), (!C || ce[0] & /*selectedConceptIDs*/
      4096 && q !== (q = /*selectedConceptIDs*/
      le[12].size == 0)) && (p.disabled = q), ue !== (ue = te(le)) && (B.d(1), B = ue(le), B && (B.c(), B.m(H, null))), (!C || ce[0] & /*selectedConceptIDs*/
      4096 && D !== (D = /*selectedConceptIDs*/
      le[12].size == 0)) && (H.disabled = D), /*sortedConcepts*/
      le[15].length > Ye ? fe ? (fe.p(le, ce), ce[0] & /*sortedConcepts*/
      32768 && v(fe, 1)) : (fe = Ei(le), fe.c(), v(fe, 1), fe.m(k, null)) : fe && (ie(), L(fe, 1, 1, () => {
        fe = null;
      }), oe());
    },
    i(le) {
      C || (v(y), v(N.$$.fragment, le), v(fe), C = !0);
    },
    o(le) {
      L(y), L(N.$$.fragment, le), L(fe), C = !1;
    },
    d(le) {
      I && I.d(le), le && M(t), le && M(n), X && X.d(), le && M(m), le && M(g), ne[_].d(), le && M(S), le && M(k), V(N), j && j.d(), B.d(), fe && fe.d(), A = !1, we(ee);
    }
  };
}
function Ws(e) {
  let t, n, l, r, i, o, a, f, s, c, u, d, m;
  return a = new me({
    props: { icon: Cf, class: "inline mr-2" }
  }), {
    c() {
      t = w("div"), n = w("div"), n.textContent = "Data elements not retrieved yet", l = P(), r = w("p"), r.textContent = "Click below to retrieve available data elements in this scope.", i = P(), o = w("button"), W(a.$$.fragment), f = F(`
          Load Data Elements for `), s = w("span"), c = F(
        /*scopeName*/
        e[0]
      ), b(n, "class", "w-3/4 text-gray-700 dark:text-gray-200 text-lg font-semibold"), b(r, "class", "text-gray-600 dark:text-gray-400 w-1/3"), b(s, "class", "font-mono"), b(o, "class", "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md"), o.disabled = /*isLoading*/
      e[4], b(t, "class", "flex flex-col w-full h-full items-center justify-center text-center gap-4");
    },
    m(g, _) {
      R(g, t, _), h(t, n), h(t, l), h(t, r), h(t, i), h(t, o), G(a, o, null), h(o, f), h(o, s), h(s, c), u = !0, d || (m = U(o, "click", function() {
        $e(
          /*onAnalyze*/
          e[6]
        ) && e[6].apply(this, arguments);
      }), d = !0);
    },
    p(g, _) {
      e = g, (!u || _[0] & /*scopeName*/
      1) && ae(
        c,
        /*scopeName*/
        e[0]
      ), (!u || _[0] & /*isLoading*/
      16) && (o.disabled = /*isLoading*/
      e[4]);
    },
    i(g) {
      u || (v(a.$$.fragment, g), u = !0);
    },
    o(g) {
      L(a.$$.fragment, g), u = !1;
    },
    d(g) {
      g && M(t), V(a), d = !1, m();
    }
  };
}
function Ks(e) {
  let t, n, l, r = (
    /*loadingMessage*/
    e[5] && Di(e)
  );
  return {
    c() {
      t = w("div"), n = w("div"), n.innerHTML = `<div class="relative"><div class="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-spin"></div> 
            
            <div class="absolute top-2 left-2 w-12 h-12 border-4 border-blue-600 dark:border-blue-400 rounded-full animate-spin" style="animation-direction: reverse; animation-duration: 1.5s;"></div> 
            
            <div class="absolute top-6 left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div></div>`, l = P(), r && r.c(), b(n, "class", "flex justify-center mb-8"), b(t, "class", "text-center py-16");
    },
    m(i, o) {
      R(i, t, o), h(t, n), h(t, l), r && r.m(t, null);
    },
    p(i, o) {
      /*loadingMessage*/
      i[5] ? r ? r.p(i, o) : (r = Di(i), r.c(), r.m(t, null)) : r && (r.d(1), r = null);
    },
    i: $,
    o: $,
    d(i) {
      i && M(t), r && r.d();
    }
  };
}
function Xs(e) {
  let t, n, l, r, i, o, a, f, s, c, u, d, m;
  return {
    c() {
      t = w("div"), n = w("div"), l = w("div"), l.innerHTML = '<span class="text-yellow-600 dark:text-yellow-400">⚠️</span>', r = P(), i = w("div"), o = w("h3"), o.textContent = "Concept Names Not Found", a = P(), f = w("div"), s = w("p"), s.textContent = `Some concepts are showing as IDs instead of human-readable
                  names. This might be due to vocabulary lookup issues.`, c = P(), u = w("button"), u.textContent = "🔄 Refresh Analysis", b(l, "class", "flex-shrink-0"), b(o, "class", "text-sm font-medium text-yellow-800 dark:text-yellow-200"), b(u, "class", "mt-2 bg-yellow-600 hover:bg-yellow-700 text-white text-xs px-3 py-1 rounded transition-colors duration-200"), b(f, "class", "mt-2 text-sm text-yellow-700 dark:text-yellow-300"), b(i, "class", "ml-3"), b(n, "class", "flex items-start"), b(t, "class", "bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4");
    },
    m(g, _) {
      R(g, t, _), h(t, n), h(n, l), h(n, r), h(n, i), h(i, o), h(i, a), h(i, f), h(f, s), h(f, c), h(f, u), d || (m = U(
        u,
        "click",
        /*click_handler_1*/
        e[32]
      ), d = !0);
    },
    p: $,
    d(g) {
      g && M(t), d = !1, m();
    }
  };
}
function Ys(e) {
  let t, n, l, r, i, o, a, f, s, c = (
    /*scopeConcepts*/
    e[8].error + ""
  ), u, d, m, g, _;
  return {
    c() {
      t = w("div"), n = w("div"), l = w("div"), l.innerHTML = '<span class="text-red-600 dark:text-red-400">❌</span>', r = P(), i = w("div"), o = w("h3"), o.textContent = "Analysis Failed", a = P(), f = w("div"), s = w("p"), u = F(c), d = P(), m = w("button"), m.textContent = "🔄 Retry Analysis", b(l, "class", "flex-shrink-0"), b(o, "class", "text-sm font-medium text-red-800 dark:text-red-200"), b(m, "class", "mt-2 bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded transition-colors duration-200"), b(f, "class", "mt-2 text-sm text-red-700 dark:text-red-300"), b(i, "class", "ml-3"), b(n, "class", "flex items-start"), b(t, "class", "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4");
    },
    m(y, S) {
      R(y, t, S), h(t, n), h(n, l), h(n, r), h(n, i), h(i, o), h(i, a), h(i, f), h(f, s), h(s, u), h(f, d), h(f, m), g || (_ = U(
        m,
        "click",
        /*click_handler*/
        e[31]
      ), g = !0);
    },
    p(y, S) {
      S[0] & /*scopeConcepts*/
      256 && c !== (c = /*scopeConcepts*/
      y[8].error + "") && ae(u, c);
    },
    d(y) {
      y && M(t), g = !1, _();
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
      t = w("span"), n = F("(Total: "), r = F(l), i = F(")"), b(t, "class", "text-sm font-normal text-gray-600 dark:text-gray-400");
    },
    m(o, a) {
      R(o, t, a), h(t, n), h(t, r), h(t, i);
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
function Us(e) {
  let t;
  return {
    c() {
      t = w("div"), t.textContent = "No concepts found for this scope.", b(t, "class", "px-6 py-8 text-center text-gray-500 dark:text-gray-400");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: $,
    i: $,
    o: $,
    d(n) {
      n && M(t);
    }
  };
}
function Js(e) {
  let t, n, l = (
    /*paginatedConcepts*/
    e[18]
  ), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = Li(Ci(e, l, o));
  const i = (o) => L(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      t = be();
    },
    m(o, a) {
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(o, a);
      R(o, t, a), n = !0;
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
          r[f] ? (r[f].p(s, a), v(r[f], 1)) : (r[f] = Li(s), r[f].c(), v(r[f], 1), r[f].m(t.parentNode, t));
        }
        for (ie(), f = l.length; f < r.length; f += 1)
          i(f);
        oe();
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
        L(r[a]);
      n = !1;
    },
    d(o) {
      De(r, o), o && M(t);
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
      t = w("div"), l = F(n), b(t, "class", "text-xs font-mono text-gray-500 dark:text-gray-400 truncate");
    },
    m(r, i) {
      R(r, t, i), h(t, l);
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
function Ri(e) {
  let t, n;
  return t = new Br({
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
      G(t, l, r), n = !0;
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
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function Zs(e) {
  let t, n, l, r, i, o, a = (
    /*concept*/
    e[37].name + ""
  ), f, s, c, u, d, m, g = (
    /*concept*/
    e[37].type + ""
  ), _, y, S, k, p, N, E, q = (
    /*concept*/
    e[37].count.toLocaleString() + ""
  ), Q, H, D, T, C, A, ee, J;
  function O() {
    return (
      /*change_handler_1*/
      e[33](
        /*concept*/
        e[37]
      )
    );
  }
  let I = (
    /*concept*/
    e[37].id != /*concept*/
    e[37].name && zi(e)
  ), X = (
    /*totalCount*/
    e[21] > 0 && Ri(e)
  );
  T = new me({ props: { icon: yt, class: "inline" } });
  function _e() {
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
      t = w("div"), n = w("input"), r = P(), i = w("div"), o = w("div"), f = F(a), c = P(), I && I.c(), u = P(), d = w("div"), m = w("span"), _ = F(g), S = P(), k = w("div"), p = w("div"), X && X.c(), N = P(), E = w("div"), Q = F(q), H = P(), D = w("button"), W(T.$$.fragment), C = P(), b(n, "type", "checkbox"), b(n, "class", "form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"), n.checked = l = /*selectedConceptIDs*/
      e[12].has(
        /*concept*/
        e[37].id
      ), b(n, "aria-label", "Select concept"), b(t, "class", "flex items-center justify-center"), b(o, "class", "text-gray-900 dark:text-gray-100 font-medium truncate"), b(o, "title", s = /*concept*/
      e[37].name), b(i, "class", "space-y-1 truncate"), b(m, "class", y = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " + /*concept*/
      (e[37].type === "event" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : (
        /*concept*/
        e[37].type === "interval" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
      ))), b(d, "class", "text-gray-600 dark:text-gray-400"), b(E, "class", "text-gray-600 dark:text-gray-200 font-mono text-sm truncate"), b(p, "class", "space-y-2 flex-auto shrink min-w-0"), b(D, "class", "px-2 py-1.5 text-sm text-center font-semibold rounded transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white whitespace-nowrap"), b(D, "title", "Add this concept to your query"), se(D, "invisible", !/*hovering*/
      e[40]), b(k, "class", "flex gap-2 items-center justify-between min-w-0");
    },
    m(ne, Y) {
      R(ne, t, Y), h(t, n), R(ne, r, Y), R(ne, i, Y), h(i, o), h(o, f), h(i, c), I && I.m(i, null), R(ne, u, Y), R(ne, d, Y), h(d, m), h(m, _), R(ne, S, Y), R(ne, k, Y), h(k, p), X && X.m(p, null), h(p, N), h(p, E), h(E, Q), h(k, H), h(k, D), G(T, D, null), R(ne, C, Y), A = !0, ee || (J = [
        U(n, "change", O),
        U(D, "click", _e)
      ], ee = !0);
    },
    p(ne, Y) {
      e = ne, (!A || Y[0] & /*selectedConceptIDs, paginatedConcepts*/
      266240 && l !== (l = /*selectedConceptIDs*/
      e[12].has(
        /*concept*/
        e[37].id
      ))) && (n.checked = l), (!A || Y[0] & /*paginatedConcepts*/
      262144) && a !== (a = /*concept*/
      e[37].name + "") && ae(f, a), (!A || Y[0] & /*paginatedConcepts*/
      262144 && s !== (s = /*concept*/
      e[37].name)) && b(o, "title", s), /*concept*/
      e[37].id != /*concept*/
      e[37].name ? I ? I.p(e, Y) : (I = zi(e), I.c(), I.m(i, null)) : I && (I.d(1), I = null), (!A || Y[0] & /*paginatedConcepts*/
      262144) && g !== (g = /*concept*/
      e[37].type + "") && ae(_, g), (!A || Y[0] & /*paginatedConcepts*/
      262144 && y !== (y = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " + /*concept*/
      (e[37].type === "event" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : (
        /*concept*/
        e[37].type === "interval" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
      )))) && b(m, "class", y), /*totalCount*/
      e[21] > 0 ? X ? (X.p(e, Y), Y[0] & /*totalCount*/
      2097152 && v(X, 1)) : (X = Ri(e), X.c(), v(X, 1), X.m(p, N)) : X && (ie(), L(X, 1, 1, () => {
        X = null;
      }), oe()), (!A || Y[0] & /*paginatedConcepts*/
      262144) && q !== (q = /*concept*/
      e[37].count.toLocaleString() + "") && ae(Q, q), (!A || Y[1] & /*hovering*/
      512) && se(D, "invisible", !/*hovering*/
      e[40]);
    },
    i(ne) {
      A || (v(X), v(T.$$.fragment, ne), A = !0);
    },
    o(ne) {
      L(X), L(T.$$.fragment, ne), A = !1;
    },
    d(ne) {
      ne && M(t), ne && M(r), ne && M(i), I && I.d(), ne && M(u), ne && M(d), ne && M(S), ne && M(k), X && X.d(), V(T), ne && M(C), ee = !1, we(J);
    }
  };
}
function Li(e) {
  let t, n;
  return t = new nr({
    props: {
      class: "grid gap-4 px-4 py-4 border-b border-gray-100 dark:border-gray-800 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 items-center",
      style: "grid-template-columns: 2rem 2fr 1fr minmax(0, 2fr);",
      $$slots: {
        default: [
          Zs,
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
      G(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r[0] & /*queryByName, onInsert, scopeName, paginatedConcepts, totalCount, $theme, selectedConceptIDs*/
      6557827 | r[1] & /*$$scope, hovering*/
      8704 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function qi(e) {
  let t = (
    /*selectedConceptIDs*/
    e[12].size + ""
  ), n, l, r = (
    /*selectedConceptIDs*/
    e[12].size != 1 ? "s" : ""
  ), i;
  return {
    c() {
      n = F(t), l = F(" Concept"), i = F(r);
    },
    m(o, a) {
      R(o, n, a), R(o, l, a), R(o, i, a);
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
function $s(e) {
  let t;
  return {
    c() {
      t = F("By ID");
    },
    m(n, l) {
      R(n, t, l);
    },
    d(n) {
      n && M(t);
    }
  };
}
function eu(e) {
  let t;
  return {
    c() {
      t = F("By Name");
    },
    m(n, l) {
      R(n, t, l);
    },
    d(n) {
      n && M(t);
    }
  };
}
function Ei(e) {
  let t, n, l, r, i, o, a, f, s, c = (
    /*currentPage*/
    (e[11] - 1) * Ye + 1 + ""
  ), u, d, m = Math.min(
    /*currentPage*/
    e[11] * Ye,
    /*concepts*/
    e[9].length
  ) + "", g, _, y = (
    /*concepts*/
    e[9].length + ""
  ), S, k, p, N, E, q, Q, H;
  return i = new me({ props: { icon: Mf } }), N = new me({ props: { icon: kt } }), {
    c() {
      t = w("div"), n = P(), l = w("div"), r = w("button"), W(i.$$.fragment), a = P(), f = w("span"), s = F("Concepts "), u = F(c), d = F(" - "), g = F(m), _ = F(" of "), S = F(y), k = P(), p = w("button"), W(N.$$.fragment), b(t, "class", "flex-auto"), b(r, "class", "p-2 hover:opacity-50 disabled:opacity-30 disabled:cursor-not-allowed"), r.disabled = o = /*currentPage*/
      e[11] === 1, b(r, "aria-label", "Previous Page"), b(f, "class", "text-sm"), b(p, "class", "p-2 hover:opacity-50 disabled:opacity-30 disabled:cursor-not-allowed"), p.disabled = E = /*currentPage*/
      e[11] === /*totalPages*/
      e[14], b(p, "aria-label", "Next Page"), b(l, "class", "shrink-0 flex justify-end items-center text-gray-700 dark:text-gray-200");
    },
    m(D, T) {
      R(D, t, T), R(D, n, T), R(D, l, T), h(l, r), G(i, r, null), h(l, a), h(l, f), h(f, s), h(f, u), h(f, d), h(f, g), h(f, _), h(f, S), h(l, k), h(l, p), G(N, p, null), q = !0, Q || (H = [
        U(
          r,
          "click",
          /*prevPage*/
          e[23]
        ),
        U(
          p,
          "click",
          /*nextPage*/
          e[24]
        )
      ], Q = !0);
    },
    p(D, T) {
      (!q || T[0] & /*currentPage*/
      2048 && o !== (o = /*currentPage*/
      D[11] === 1)) && (r.disabled = o), (!q || T[0] & /*currentPage*/
      2048) && c !== (c = /*currentPage*/
      (D[11] - 1) * Ye + 1 + "") && ae(u, c), (!q || T[0] & /*currentPage, concepts*/
      2560) && m !== (m = Math.min(
        /*currentPage*/
        D[11] * Ye,
        /*concepts*/
        D[9].length
      ) + "") && ae(g, m), (!q || T[0] & /*concepts*/
      512) && y !== (y = /*concepts*/
      D[9].length + "") && ae(S, y), (!q || T[0] & /*currentPage, totalPages*/
      18432 && E !== (E = /*currentPage*/
      D[11] === /*totalPages*/
      D[14])) && (p.disabled = E);
    },
    i(D) {
      q || (v(i.$$.fragment, D), v(N.$$.fragment, D), q = !0);
    },
    o(D) {
      L(i.$$.fragment, D), L(N.$$.fragment, D), q = !1;
    },
    d(D) {
      D && M(t), D && M(n), D && M(l), V(i), V(N), Q = !1, we(H);
    }
  };
}
function Di(e) {
  let t, n, l, r, i, o;
  return {
    c() {
      t = w("div"), n = w("div"), l = w("div"), r = P(), i = w("span"), o = F(
        /*loadingMessage*/
        e[5]
      ), b(l, "class", "w-2 h-2 bg-blue-500 rounded-full animate-pulse"), b(i, "class", "text-sm text-blue-700 dark:text-blue-300 font-medium"), b(n, "class", "flex items-center space-x-2"), b(t, "class", "mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg");
    },
    m(a, f) {
      R(a, t, f), h(t, n), h(n, l), h(n, r), h(n, i), h(i, o);
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
function tu(e) {
  let t, n, l, r, i, o, a, f, s, c, u, d, m = (
    /*scopes*/
    e[2]
  ), g = [];
  for (let k = 0; k < m.length; k += 1)
    g[k] = Ni(Si(e, m, k));
  const _ = [Ks, Ws, Vs], y = [];
  function S(k, p) {
    return (
      /*isLoading*/
      k[4] ? 0 : (
        /*isAnalyzed*/
        k[16] ? 2 : 1
      )
    );
  }
  return f = S(e), s = y[f] = _[f](e), {
    c() {
      t = w("div"), n = w("div"), l = w("select");
      for (let k = 0; k < g.length; k += 1)
        g[k].c();
      r = P(), i = w("input"), o = P(), a = w("div"), s.c(), b(l, "class", "text-2xl font-bold text-gray-900 dark:text-gray-100 flex-auto flat-select"), b(l, "aria-label", "Select scope"), re(l, "min-width", "0"), re(l, "max-width", "100%"), /*scopeName*/
      e[0] === void 0 && Rn(() => (
        /*select_change_handler*/
        e[28].call(l)
      )), b(i, "type", "search"), b(i, "class", "shrink px-3 py-1.5 rounded overflow-hidden focus:bg-white bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline focus:outline-blue-500 w-64 transition-colors duration-200"), b(i, "placeholder", "Filter concepts..."), b(i, "autocomplete", "off"), b(n, "class", "pb-6 shrink-0 flex items-center justify-between gap-2"), b(a, "class", "w-full flex-auto flex flex-col h-0"), b(t, "class", "w-full h-full flex flex-col p-4");
    },
    m(k, p) {
      R(k, t, p), h(t, n), h(n, l);
      for (let N = 0; N < g.length; N += 1)
        g[N] && g[N].m(l, null);
      Yr(
        l,
        /*scopeName*/
        e[0],
        !0
      ), h(n, r), h(n, i), ct(
        i,
        /*search*/
        e[10]
      ), h(t, o), h(t, a), y[f].m(a, null), c = !0, u || (d = [
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
      ], u = !0);
    },
    p(k, p) {
      if (p[0] & /*scopes*/
      4) {
        m = /*scopes*/
        k[2];
        let E;
        for (E = 0; E < m.length; E += 1) {
          const q = Si(k, m, E);
          g[E] ? g[E].p(q, p) : (g[E] = Ni(q), g[E].c(), g[E].m(l, null));
        }
        for (; E < g.length; E += 1)
          g[E].d(1);
        g.length = m.length;
      }
      p[0] & /*scopeName, scopes*/
      5 && Yr(
        l,
        /*scopeName*/
        k[0]
      ), p[0] & /*search*/
      1024 && i.value !== /*search*/
      k[10] && ct(
        i,
        /*search*/
        k[10]
      );
      let N = f;
      f = S(k), f === N ? y[f].p(k, p) : (ie(), L(y[N], 1, 1, () => {
        y[N] = null;
      }), oe(), s = y[f], s ? s.p(k, p) : (s = y[f] = _[f](k), s.c()), v(s, 1), s.m(a, null));
    },
    i(k) {
      c || (v(s), c = !0);
    },
    o(k) {
      L(s), c = !1;
    },
    d(k) {
      k && M(t), De(g, k), y[f].d(), u = !1, we(d);
    }
  };
}
const Ye = 50;
function nu(e, t, n) {
  let l, r, i, o, a, f, s, c, u, d, m;
  x(e, Gl, (B) => n(22, m = B));
  let { scopes: g = [] } = t, { onScopeSelect: _ = () => {
  } } = t, { scopeName: y = "" } = t, { isLoading: S = !1 } = t, { loadingMessage: k = "" } = t, { onAnalyze: p = () => {
  } } = t, { onInsert: N = () => {
  } } = t, { scopeConcepts: E = {} } = t, { queryByName: q = !1 } = t, Q = [], H = "", D = 1;
  function T() {
    D > 1 && n(11, D -= 1);
  }
  function C() {
    D < s && n(11, D += 1);
  }
  let A = /* @__PURE__ */ new Set();
  function ee() {
    u ? (a.forEach((B) => A.delete(B.id)), n(12, A = new Set(A))) : (a.forEach((B) => A.add(B.id)), n(12, A = new Set(A)));
  }
  function J(B) {
    A.has(B) ? A.delete(B) : A.add(B), n(12, A = new Set(A));
  }
  function O() {
    y = rf(this), n(0, y), n(2, g), n(3, _), n(2, g);
  }
  const I = (B) => _(B.target.value);
  function X() {
    H = this.value, n(10, H);
  }
  const _e = () => p(), ne = () => p(), Y = (B) => J(B.id), j = (B) => {
    q ? N(y, `name = '${B.name}'`) : typeof B.id == "string" && Number.isNaN(parseFloat(B.id)) ? N(y, `id = '${B.id}'`) : N(y, `id = ${B.id}`);
  }, te = () => {
    if (q) {
      let B = Q.filter((fe) => A.has(fe.id)).map((fe) => "'" + fe.name + "'");
      N(y, `name in (${B.join(", ")})`);
    } else {
      let B;
      Q.some((fe) => typeof fe.id == "string" && Number.isNaN(parseFloat(fe.id))) ? B = Q.filter((fe) => A.has(fe.id)).map((fe) => `'${fe.id}'`) : B = Q.filter((fe) => A.has(fe.id)).map((fe) => `${fe.id}`), N(y, `id in (${B.join(", ")})`);
    }
  }, ue = () => n(1, q = !q);
  return e.$$set = (B) => {
    "scopes" in B && n(2, g = B.scopes), "onScopeSelect" in B && n(3, _ = B.onScopeSelect), "scopeName" in B && n(0, y = B.scopeName), "isLoading" in B && n(4, S = B.isLoading), "loadingMessage" in B && n(5, k = B.loadingMessage), "onAnalyze" in B && n(6, p = B.onAnalyze), "onInsert" in B && n(7, N = B.onInsert), "scopeConcepts" in B && n(8, E = B.scopeConcepts), "queryByName" in B && n(1, q = B.queryByName);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*scopes, scopeName, onScopeSelect*/
    13 && g.length > 0 && !y && (n(0, y = g[0]), _(y)), e.$$.dirty[0] & /*scopeName, scopeConcepts*/
    257 && n(16, l = y && E && E.scope_name === y), e.$$.dirty[0] & /*isAnalyzed, scopeConcepts*/
    65792 && n(9, Q = l && E.concepts ? E.concepts : []), e.$$.dirty[0] & /*concepts*/
    512 && n(21, r = Q.reduce((B, fe) => B + fe.count, 0)), e.$$.dirty[0] & /*concepts*/
    512 && n(20, i = Q.some((B) => B.name.startsWith("Concept "))), e.$$.dirty[0] & /*scopeConcepts*/
    256 && n(19, o = E && E.error), e.$$.dirty[0] & /*search, concepts*/
    1536 && n(27, a = H.trim() ? Q.filter((B) => (B.name ?? "").toLocaleLowerCase().includes(H.trim().toLocaleLowerCase()) || `${B.id ?? ""}`.toLocaleLowerCase().includes(H.trim().toLocaleLowerCase())) : Q), e.$$.dirty[0] & /*filteredConcepts*/
    134217728 && n(15, f = [...a].sort((B, fe) => fe.count - B.count)), e.$$.dirty[0] & /*sortedConcepts*/
    32768 && n(14, s = Math.max(1, Math.ceil(f.length / Ye))), e.$$.dirty[0] & /*currentPage, totalPages*/
    18432 && D > s && n(11, D = 1), e.$$.dirty[0] & /*sortedConcepts, currentPage*/
    34816 && n(18, c = f.slice((D - 1) * Ye, D * Ye)), e.$$.dirty[0] & /*filteredConcepts, selectedConceptIDs*/
    134221824 && n(13, u = a.length > 0 && a.every((B) => A.has(B.id))), e.$$.dirty[0] & /*filteredConcepts, selectedConceptIDs, allFilteredSelected*/
    134230016 && n(17, d = a.some((B) => A.has(B.id)) && !u);
  }, [
    y,
    q,
    g,
    _,
    S,
    k,
    p,
    N,
    E,
    Q,
    H,
    D,
    A,
    u,
    s,
    f,
    l,
    d,
    c,
    o,
    i,
    r,
    m,
    T,
    C,
    ee,
    J,
    a,
    O,
    I,
    X,
    _e,
    ne,
    Y,
    j,
    te,
    ue
  ];
}
class lu extends pe {
  constructor(t) {
    super(), ke(
      this,
      t,
      nu,
      tu,
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
function ru(e) {
  return e === 0 ? !0 : e;
}
function st(e) {
  return ru(e) ? Array.isArray(e) ? (t) => e.map((n) => typeof n != "function" ? t[n] : n(t)) : typeof e != "function" ? (t) => t[e] : e : null;
}
function iu(e) {
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
  return iu(Object.entries(e).filter(([n, l]) => l !== void 0 && t[n] === void 0));
}
function ou(e, t = 300) {
  let n;
  return (...l) => {
    clearTimeout(n), n = setTimeout(() => {
      e.apply(this, l);
    }, t);
  };
}
function au(e, t, { sort: n = !1 } = {}) {
  if (!Array.isArray(e))
    throw new TypeError(`The first argument of calcUniques() must be an array. You passed in a ${typeof e}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(t) || t === void 0 || t === null)
    throw new TypeError("The second argument of calcUniques() must be an object with field names as keys as accessor functions as values.");
  const l = {}, r = Object.keys(t), i = r.length;
  let o, a, f, s, c, u, d;
  const m = e.length;
  for (o = 0; o < i; o += 1) {
    for (d = /* @__PURE__ */ new Set(), s = r[o], c = t[s], a = 0; a < m; a += 1)
      if (u = c(e[a]), Array.isArray(u)) {
        const _ = u.length;
        for (f = 0; f < _; f += 1)
          d.add(u[f]);
      } else
        d.add(u);
    const g = Array.from(d);
    l[s] = n === !0 ? g.sort() : g;
  }
  return l;
}
function fu(e, t) {
  if (!Array.isArray(e))
    throw new TypeError(`The first argument of calcExtents() must be an array. You passed in a ${typeof e}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(t) || t === void 0 || t === null)
    throw new TypeError("The second argument of calcExtents() must be an object with field names as keys as accessor functions as values.");
  const n = {}, l = Object.keys(t), r = l.length;
  let i, o, a, f, s, c, u, d;
  const m = e.length;
  for (i = 0; i < r; i += 1) {
    for (f = l[i], u = t[f], s = null, c = null, o = 0; o < m; o += 1)
      if (d = u(e[o]), Array.isArray(d)) {
        const g = d.length;
        for (a = 0; a < g; a += 1)
          d[a] !== !1 && d[a] !== void 0 && d[a] !== null && Number.isNaN(d[a]) === !1 && ((s === null || d[a] < s) && (s = d[a]), (c === null || d[a] > c) && (c = d[a]));
      } else
        d !== !1 && d !== void 0 && d !== null && Number.isNaN(d) === !1 && ((s === null || d < s) && (s = d), (c === null || d > c) && (c = d));
    n[f] = [s, c];
  }
  return n;
}
function Cn(e, t) {
  return e.length !== t.length ? !1 : e.every((n) => t.includes(n));
}
function Ma(e) {
  return !!(typeof e.bandwidth == "function" || Cn(Object.keys(e), ["domain", "range", "unknown", "copy"]));
}
function su(e, t, n) {
  const l = Object.keys(n).reduce((i, o) => {
    const a = Ma(n[o]) === !0 ? "ordinal" : "other";
    return i[a] || (i[a] = {}), i[a][o] = t[o], i;
  }, { ordinal: !1, other: !1 });
  let r = {};
  return l.ordinal && (r = au(e, l.ordinal)), l.other && (r = { ...r, ...fu(e, l.other) }), r;
}
function uu(e = [], t) {
  return Array.isArray(t) === !0 ? t.map((n, l) => n === null ? e[l] : n) : e;
}
function Ql(e) {
  return function([n, l]) {
    return typeof l == "function" && (l = l(n[e])), n ? uu(n[e], l) : l;
  };
}
function Bl(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function cu(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function za(e) {
  let t, n, l;
  e.length !== 2 ? (t = Bl, n = (a, f) => Bl(e(a), f), l = (a, f) => e(a) - f) : (t = e === Bl || e === cu ? e : du, n = e, l = e);
  function r(a, f, s = 0, c = a.length) {
    if (s < c) {
      if (t(f, f) !== 0)
        return c;
      do {
        const u = s + c >>> 1;
        n(a[u], f) < 0 ? s = u + 1 : c = u;
      } while (s < c);
    }
    return s;
  }
  function i(a, f, s = 0, c = a.length) {
    if (s < c) {
      if (t(f, f) !== 0)
        return c;
      do {
        const u = s + c >>> 1;
        n(a[u], f) <= 0 ? s = u + 1 : c = u;
      } while (s < c);
    }
    return s;
  }
  function o(a, f, s = 0, c = a.length) {
    const u = r(a, f, s, c - 1);
    return u > s && l(a[u - 1], f) > -l(a[u], f) ? u - 1 : u;
  }
  return { left: r, center: o, right: i };
}
function du() {
  return 0;
}
function gu(e) {
  return e === null ? NaN : +e;
}
const mu = za(Bl), bu = mu.right;
za(gu).center;
const _u = bu;
class Ai extends Map {
  constructor(t, n = ku) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [l, r] of t)
        this.set(l, r);
  }
  get(t) {
    return super.get(Ti(this, t));
  }
  has(t) {
    return super.has(Ti(this, t));
  }
  set(t, n) {
    return super.set(hu(this, t), n);
  }
  delete(t) {
    return super.delete(yu(this, t));
  }
}
function Ti({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) ? e.get(l) : n;
}
function hu({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) ? e.get(l) : (e.set(l, n), n);
}
function yu({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) && (n = e.get(l), e.delete(l)), n;
}
function ku(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const pu = Math.sqrt(50), wu = Math.sqrt(10), vu = Math.sqrt(2);
function Jl(e, t, n) {
  const l = (t - e) / Math.max(0, n), r = Math.floor(Math.log10(l)), i = l / Math.pow(10, r), o = i >= pu ? 10 : i >= wu ? 5 : i >= vu ? 2 : 1;
  let a, f, s;
  return r < 0 ? (s = Math.pow(10, -r) / o, a = Math.round(e * s), f = Math.round(t * s), a / s < e && ++a, f / s > t && --f, s = -s) : (s = Math.pow(10, r) * o, a = Math.round(e / s), f = Math.round(t / s), a * s < e && ++a, f * s > t && --f), f < a && 0.5 <= n && n < 2 ? Jl(e, t, n * 2) : [a, f, s];
}
function Cu(e, t, n) {
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
function Er(e, t, n) {
  return t = +t, e = +e, n = +n, Jl(e, t, n)[2];
}
function Su(e, t, n) {
  t = +t, e = +e, n = +n;
  const l = t < e, r = l ? Er(t, e, n) : Er(e, t, n);
  return (l ? -1 : 1) * (r < 0 ? 1 / -r : r);
}
function Ue(e, t, n) {
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
  var e = new Ai(), t = [], n = [], l = Pi;
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
    t = [], e = new Ai();
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
function Fr() {
  var e = rr().unknown(void 0), t = e.domain, n = e.range, l = 0, r = 1, i, o, a = !1, f = 0, s = 0, c = 0.5;
  delete e.unknown;
  function u() {
    var d = t().length, m = r < l, g = m ? r : l, _ = m ? l : r;
    i = (_ - g) / Math.max(1, d - f + s * 2), a && (i = Math.floor(i)), g += (_ - g - i * (d - f)) * c, o = i * (1 - f), a && (g = Math.round(g), o = Math.round(o));
    var y = Ue(d).map(function(S) {
      return g + i * S;
    });
    return n(m ? y.reverse() : y);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), u()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([l, r] = d, l = +l, r = +r, u()) : [l, r];
  }, e.rangeRound = function(d) {
    return [l, r] = d, l = +l, r = +r, a = !0, u();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return i;
  }, e.round = function(d) {
    return arguments.length ? (a = !!d, u()) : a;
  }, e.padding = function(d) {
    return arguments.length ? (f = Math.min(1, s = +d), u()) : f;
  }, e.paddingInner = function(d) {
    return arguments.length ? (f = Math.min(1, d), u()) : f;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (s = +d, u()) : s;
  }, e.align = function(d) {
    return arguments.length ? (c = Math.max(0, Math.min(1, d)), u()) : c;
  }, e.copy = function() {
    return Fr(t(), [l, r]).round(a).paddingInner(f).paddingOuter(s).align(c);
  }, lr.apply(u(), arguments);
}
function Nu(e) {
  return function() {
    return e;
  };
}
function Mu(e) {
  return +e;
}
var Qi = [0, 1];
function Ge(e) {
  return e;
}
function Dr(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Nu(isNaN(t) ? NaN : 0.5);
}
function zu(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(l) {
    return Math.max(e, Math.min(t, l));
  };
}
function Ru(e, t, n) {
  var l = e[0], r = e[1], i = t[0], o = t[1];
  return r < l ? (l = Dr(r, l), i = n(o, i)) : (l = Dr(l, r), i = n(i, o)), function(a) {
    return i(l(a));
  };
}
function Lu(e, t, n) {
  var l = Math.min(e.length, t.length) - 1, r = new Array(l), i = new Array(l), o = -1;
  for (e[l] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < l; )
    r[o] = Dr(e[o], e[o + 1]), i[o] = n(t[o], t[o + 1]);
  return function(a) {
    var f = _u(e, a, 1, l) - 1;
    return i[f](r[f](a));
  };
}
function Ra(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function La() {
  var e = Qi, t = Qi, n = Ir, l, r, i, o = Ge, a, f, s;
  function c() {
    var d = Math.min(e.length, t.length);
    return o !== Ge && (o = zu(e[0], e[d - 1])), a = d > 2 ? Lu : Ru, f = s = null, u;
  }
  function u(d) {
    return d == null || isNaN(d = +d) ? i : (f || (f = a(e.map(l), t, n)))(l(o(d)));
  }
  return u.invert = function(d) {
    return o(r((s || (s = a(t, e.map(l), Ul)))(d)));
  }, u.domain = function(d) {
    return arguments.length ? (e = Array.from(d, Mu), c()) : e.slice();
  }, u.range = function(d) {
    return arguments.length ? (t = Array.from(d), c()) : t.slice();
  }, u.rangeRound = function(d) {
    return t = Array.from(d), n = qs, c();
  }, u.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : Ge, c()) : o !== Ge;
  }, u.interpolate = function(d) {
    return arguments.length ? (n = d, c()) : n;
  }, u.unknown = function(d) {
    return arguments.length ? (i = d, u) : i;
  }, function(d, m) {
    return l = d, r = m, c();
  };
}
function qu() {
  return La()(Ge, Ge);
}
function Eu(e, t, n, l) {
  var r = Su(e, t, n), i;
  switch (l = Wl(l ?? ",f"), l.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return l.precision == null && !isNaN(i = ls(r, o)) && (l.precision = i), wa(l, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      l.precision == null && !isNaN(i = rs(r, Math.max(Math.abs(e), Math.abs(t)))) && (l.precision = i - (l.type === "e"));
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
    return Cu(l[0], l[l.length - 1], n ?? 10);
  }, e.tickFormat = function(n, l) {
    var r = t();
    return Eu(r[0], r[r.length - 1], n ?? 10, l);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var l = t(), r = 0, i = l.length - 1, o = l[r], a = l[i], f, s, c = 10;
    for (a < o && (s = o, o = a, a = s, s = r, r = i, i = s); c-- > 0; ) {
      if (s = Er(o, a, n), s === f)
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
function ut() {
  var e = qu();
  return e.copy = function() {
    return Ra(e, ut());
  }, lr.apply(e, arguments), qa(e);
}
function ji(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function Du(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Au(e) {
  return e < 0 ? -e * e : e * e;
}
function Tu(e) {
  var t = e(Ge, Ge), n = 1;
  function l() {
    return n === 1 ? e(Ge, Ge) : n === 0.5 ? e(Du, Au) : e(ji(n), ji(1 / n));
  }
  return t.exponent = function(r) {
    return arguments.length ? (n = +r, l()) : n;
  }, qa(t);
}
function Ea() {
  var e = Tu(La());
  return e.copy = function() {
    return Ra(e, Ea()).exponent(e.exponent());
  }, lr.apply(e, arguments), e;
}
function Pu() {
  return Ea.apply(null, arguments).exponent(0.5);
}
const Sn = {
  x: ut,
  y: ut,
  z: ut,
  r: Pu
};
function Qu(e) {
  return e.constant ? "symlog" : e.base ? "log" : e.exponent ? e.exponent() === 0.5 ? "sqrt" : "pow" : "other";
}
function Oi(e) {
  return e;
}
function ju(e) {
  return (t) => Math.log(e * t);
}
function Ou(e) {
  return (t) => e * Math.exp(t);
}
function xu(e) {
  return (t) => Math.sign(t) * Math.log1p(Math.abs(t / e));
}
function Iu(e) {
  return (t) => Math.sign(t) * Math.expm1(Math.abs(t)) * e;
}
function jl(e) {
  return function(n) {
    return n < 0 ? -Math.pow(-n, e) : Math.pow(n, e);
  };
}
function Hu(e) {
  const t = Qu(e);
  if (t === "log") {
    const n = Math.sign(e.domain()[0]);
    return { lift: ju(n), ground: Ou(n), scaleType: t };
  }
  return t === "pow" ? { lift: jl(1), ground: jl(1 / 1), scaleType: t } : t === "sqrt" ? { lift: jl(0.5), ground: jl(1 / 0.5), scaleType: t } : t === "symlog" ? { lift: xu(1), ground: Iu(1), scaleType: t } : { lift: Oi, ground: Oi, scaleType: t };
}
function Zl(e) {
  return e.replace(/^\w/, (t) => t.toUpperCase());
}
function Le(e, t = "") {
  return `scale${Zl(t)}${Zl(e)}`;
}
function Da(e) {
  if (typeof e.bandwidth == "function")
    return typeof e.paddingInner == "function" ? Le("band") : Le("point");
  if (Cn(Object.keys(e), ["domain", "range", "unknown", "copy"]))
    return Le("ordinal");
  let t = "";
  if (e.interpolator && (e.domain().length === 3 ? t = "diverging" : t = "sequential"), e.quantiles)
    return Le("quantile", t);
  if (e.thresholds)
    return Le("quantize", t);
  if (e.constant)
    return Le("symlog", t);
  if (e.base)
    return Le("log", t);
  if (e.exponent)
    return e.exponent() === 0.5 ? Le("sqrt", t) : Le("pow", t);
  if (Cn(Object.keys(e), ["domain", "range", "invertExtent", "unknown", "copy"]))
    return Le("threshold");
  if (Cn(Object.keys(e), ["invert", "range", "domain", "unknown", "copy", "ticks", "tickFormat", "nice"]))
    return Le("identity");
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
    return Le("radial");
  if (t)
    return Le(t);
  if (e.domain()[0] instanceof Date) {
    const n = /* @__PURE__ */ new Date();
    let l;
    return n.getDay = () => l = "time", n.getUTCDay = () => l = "utc", e.tickFormat(0, "%a")(n), Le(l);
  }
  return Le("linear");
}
const Bu = ["scaleThreshold", "scaleQuantile", "scaleQuantize", "scaleSequentialQuantile"];
function Fu(e, t) {
  if (typeof e.range != "function")
    throw console.log(e), new Error("Scale method `range` must be a function");
  if (typeof e.domain != "function")
    throw new Error("Scale method `domain` must be a function");
  if (!Array.isArray(t) || Bu.includes(Da(e)) || Ma(e) === !0)
    return e.domain();
  const { lift: n, ground: l } = Hu(e), r = e.domain()[0], i = Object.prototype.toString.call(r) === "[object Date]", [o, a] = e.domain().map((m) => n(i ? m.getTime() : m)), [f, s] = e.range(), c = t[0] || 0, u = t[1] || 0, d = (a - o) / (Math.abs(s - f) - c - u);
  return [o - c * d, u * d + a].map((m) => l(i ? new Date(m) : m));
}
function Gu(e, t, n, l, r) {
  let i, o;
  return r === !0 ? (i = 0, o = 100) : (i = e === "r" ? 1 : 0, o = e === "y" ? n : e === "r" ? 25 : t), l === !0 ? [o, i] : [i, o];
}
function Vu(e, t, n, l, r, i) {
  return r ? typeof r == "function" ? r({ width: t, height: n }) : r : Gu(e, t, n, l, i);
}
function Ol(e) {
  return function([n, l, r, i, o, a, f, s, c, u]) {
    if (l === null)
      return null;
    const d = Vu(e, f, s, a, c, u), m = n === Sn[e] ? n() : n.copy();
    return m.domain(r), (!m.interpolator || typeof m.interpolator == "function" && m.interpolator().name.startsWith("identity")) && m.range(d), i && m.domain(Fu(m, i)), (o === !0 || typeof o == "number") && (typeof m.nice == "function" ? m.nice(typeof o == "number" ? o : void 0) : console.error(`[Layer Cake] You set \`${e}Nice: true\` but the ${e}Scale does not have a \`.nice\` method. Ignoring...`)), m;
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
function Wu(e) {
  const { r: t, g: n, b: l, opacity: r } = Xl(e);
  return [t, n, l].every((i) => i >= 0 && i <= 255) ? { r: t, g: n, b: l, o: r } : !1;
}
function Ku({ r: e, g: t, b: n }) {
  return (0.2126 * e + 0.7152 * t + 0.0722 * n) / 255 > 0.6 ? "black" : "white";
}
function Xu(e) {
  console.log("/********* LayerCake Debug ************/"), console.log("Bounding box:"), Yu(e.boundingBox), console.log(`Scales:
`), Object.keys(e.activeGetters).forEach((t) => {
    Uu(t, e[`${t}Scale`], e[t]);
  }), console.log(`/************ End LayerCake Debug ***************/
`);
}
function Yu(e) {
  Object.entries(e).forEach(([t, n]) => {
    console.log(`${Fe}${t}:`, n);
  });
}
function Uu(e, t, n) {
  const l = Da(t);
  console.log(`${Fe}${e}:`), console.log(`${Fe}${Fe}Accessor: "${n.toString()}"`), console.log(`${Fe}${Fe}Type: ${l}`), xi(t, "domain"), xi(t, "range", " ");
}
function xi(e, t, n = "") {
  const l = e[t](), r = Zu(l);
  r ? Ju(r, t, l) : console.log(`${Fe}${Fe}${Zl(t)}:${n}`, l);
}
function Ju(e, t, n) {
  console.log(
    `${Fe}${Fe}${Zl(t)}:    %cArray%c(${n.length}) ` + e[0] + "%c ]",
    "color: #1377e4",
    "color: #737373",
    "color: #1478e4",
    ...e[1],
    "color: #1478e4"
  );
}
function Zu(e) {
  const t = [], n = e.map((l, r) => {
    const i = Wu(l);
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
      (l) => `background-color: rgba(${l.r}, ${l.g}, ${l.b}, ${l.o}); color:${Ku(l)};`
    )
  ] : null;
}
const $u = (e) => ({
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
}), Ii = (e) => ({
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
  ), i = Qe(
    r,
    e,
    /*$$scope*/
    e[152],
    Ii
  );
  return {
    c() {
      t = w("div"), i && i.c(), b(t, "class", "layercake-container svelte-vhzpsp"), Rn(() => (
        /*div_elementresize_handler*/
        e[155].call(t)
      )), re(
        t,
        "position",
        /*position*/
        e[5]
      ), re(
        t,
        "top",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), re(
        t,
        "right",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), re(
        t,
        "bottom",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), re(
        t,
        "left",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), re(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[4] === !1 ? "none" : null
      );
    },
    m(o, a) {
      R(o, t, a), i && i.m(t, null), e[154](t), n = af(
        t,
        /*div_elementresize_handler*/
        e[155].bind(t)
      ), l = !0;
    },
    p(o, a) {
      i && i.p && (!l || a[0] & /*element, $activeGetters_d, $_x, $_y, $_z, $_r, $_custom, $_data, $_xNice, $_yNice, $_zNice, $_rNice, $_xReverse, $_yReverse, $_zReverse, $_rReverse, $_xPadding, $_yPadding, $_zPadding, $_rPadding, $_flatData, $_config, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
      2147483588 | a[1] & /*$width_d, $height_d, $aspectRatio_d, $_containerWidth, $_containerHeight, $_percentRange, $padding_d, $extents_d, $xDomain_d, $yDomain_d, $zDomain_d, $rDomain_d, $xRange_d, $yRange_d, $zRange_d, $rRange_d, $xGet_d, $yGet_d, $zGet_d, $rGet_d*/
      1048575 | a[4] & /*$$scope*/
      268435456) && Oe(
        i,
        r,
        o,
        /*$$scope*/
        o[152],
        l ? je(
          r,
          /*$$scope*/
          o[152],
          a,
          $u
        ) : xe(
          /*$$scope*/
          o[152]
        ),
        Ii
      ), a[0] & /*position*/
      32 && re(
        t,
        "position",
        /*position*/
        o[5]
      ), a[0] & /*position*/
      32 && re(
        t,
        "top",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && re(
        t,
        "right",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && re(
        t,
        "bottom",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && re(
        t,
        "left",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), a[0] & /*pointerEvents*/
      16 && re(
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
      L(i, o), l = !1;
    },
    d(o) {
      o && M(t), i && i.d(o), e[154](null), n();
    }
  };
}
function ec(e) {
  let t, n, l = (
    /*ssr*/
    (e[3] === !0 || typeof window < "u") && Hi(e)
  );
  return {
    c() {
      l && l.c(), t = be();
    },
    m(r, i) {
      l && l.m(r, i), R(r, t, i), n = !0;
    },
    p(r, i) {
      /*ssr*/
      r[3] === !0 || typeof window < "u" ? l ? (l.p(r, i), i[0] & /*ssr*/
      8 && v(l, 1)) : (l = Hi(r), l.c(), v(l, 1), l.m(t.parentNode, t)) : l && (ie(), L(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (v(l), n = !0);
    },
    o(r) {
      L(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && M(t);
    }
  };
}
function tc(e, t, n) {
  let l, r, i, o, a, f, s, c, u, d, m, g, _, y, S, k, p, N, E, q, Q, H, D, T, C, A, ee, J, O, I, X, _e, ne, Y, j, te, ue, B, fe, le, ce, Re, Ae, K, We, Xt, Pn, Ke, Yt, Ut, gt, pt, et, tt, nt, Qn, jn, On, xn, In, Hn, Bn, { $$slots: ar = {}, $$scope: Fn } = t;
  const fr = ou(Xu, 200);
  let { ssr: Jt = !1 } = t, { pointerEvents: Gn = !0 } = t, { position: Vn = "relative" } = t, { percentRange: wt = !1 } = t, { width: Zt = void 0 } = t, { height: $t = void 0 } = t, { containerWidth: lt = Zt || 100 } = t, { containerHeight: rt = $t || 100 } = t, { element: Z = void 0 } = t, { x: it = void 0 } = t, { y: vt = void 0 } = t, { z: Ct = void 0 } = t, { r: St = void 0 } = t, { data: Nt = [] } = t, { xDomain: Mt = void 0 } = t, { yDomain: zt = void 0 } = t, { zDomain: Rt = void 0 } = t, { rDomain: Lt = void 0 } = t, { xNice: Wn = !1 } = t, { yNice: Kn = !1 } = t, { zNice: Xn = !1 } = t, { rNice: Yn = !1 } = t, { xPadding: Un = void 0 } = t, { yPadding: Jn = void 0 } = t, { zPadding: Zn = void 0 } = t, { rPadding: $n = void 0 } = t, { xScale: el = Sn.x } = t, { yScale: en = Sn.y } = t, { zScale: tl = Sn.z } = t, { rScale: nl = Sn.r } = t, { xRange: qt = void 0 } = t, { yRange: Et = void 0 } = t, { zRange: Dt = void 0 } = t, { rRange: At = void 0 } = t, { xReverse: ll = !1 } = t, { yReverse: rl = void 0 } = t, { zReverse: il = !1 } = t, { rReverse: ol = !1 } = t, { padding: al = {} } = t, { extents: fl = {} } = t, { flatData: sl = void 0 } = t, { custom: ul = {} } = t, { debug: sr = !1 } = t, ur = !1;
  dt(() => {
    ur = !0;
  });
  const he = {}, ot = ge(wt);
  x(e, ot, (z) => n(33, We = z));
  const Tt = ge(lt);
  x(e, Tt, (z) => n(32, K = z));
  const Pt = ge(rt);
  x(e, Pt, (z) => n(31, Ae = z));
  const cl = ge(Nr(fl));
  x(e, cl, (z) => n(170, Re = z));
  const dl = ge(Nt);
  x(e, dl, (z) => n(30, ce = z));
  const tn = ge(sl || Nt);
  x(e, tn, (z) => n(29, le = z));
  const gl = ge(al);
  x(e, gl, (z) => n(169, fe = z));
  const Qt = ge(st(it));
  x(e, Qt, (z) => n(28, B = z));
  const jt = ge(st(vt));
  x(e, jt, (z) => n(27, ue = z));
  const Ot = ge(st(Ct));
  x(e, Ot, (z) => n(26, te = z));
  const xt = ge(st(St));
  x(e, xt, (z) => n(25, j = z));
  const ml = ge(Mt);
  x(e, ml, (z) => n(168, Y = z));
  const bl = ge(zt);
  x(e, bl, (z) => n(167, ne = z));
  const _l = ge(Rt);
  x(e, _l, (z) => n(166, _e = z));
  const hl = ge(Lt);
  x(e, hl, (z) => n(165, X = z));
  const nn = ge(Wn);
  x(e, nn, (z) => n(24, I = z));
  const ln = ge(Kn);
  x(e, ln, (z) => n(23, O = z));
  const rn = ge(Xn);
  x(e, rn, (z) => n(22, J = z));
  const on = ge(Yn);
  x(e, on, (z) => n(21, ee = z));
  const an = ge(ll);
  x(e, an, (z) => n(20, A = z));
  const fn = ge(l);
  x(e, fn, (z) => n(19, C = z));
  const sn = ge(il);
  x(e, sn, (z) => n(18, T = z));
  const un = ge(ol);
  x(e, un, (z) => n(17, D = z));
  const cn = ge(Un);
  x(e, cn, (z) => n(16, H = z));
  const dn = ge(Jn);
  x(e, dn, (z) => n(15, Q = z));
  const gn = ge(Zn);
  x(e, gn, (z) => n(14, q = z));
  const mn = ge($n);
  x(e, mn, (z) => n(13, E = z));
  const yl = ge(qt);
  x(e, yl, (z) => n(164, N = z));
  const kl = ge(Et);
  x(e, kl, (z) => n(163, p = z));
  const pl = ge(Dt);
  x(e, pl, (z) => n(162, k = z));
  const wl = ge(At);
  x(e, wl, (z) => n(161, S = z));
  const bn = ge(el);
  x(e, bn, (z) => n(160, y = z));
  const _n = ge(en);
  x(e, _n, (z) => n(159, _ = z));
  const hn = ge(tl);
  x(e, hn, (z) => n(158, g = z));
  const yn = ge(nl);
  x(e, yn, (z) => n(157, m = z));
  const vl = ge(he);
  x(e, vl, (z) => n(11, u = z));
  const Cl = ge(ul);
  x(e, Cl, (z) => n(12, d = z));
  const Sl = ve([Qt, jt, Ot, xt], ([z, Xe, He, ze]) => {
    const mt = {};
    return z && (mt.x = z), Xe && (mt.y = Xe), He && (mt.z = He), ze && (mt.r = ze), mt;
  });
  x(e, Sl, (z) => n(10, s = z));
  const Nl = ve([gl, Tt, Pt], ([z]) => Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, z));
  x(e, Nl, (z) => n(37, Yt = z));
  const Ml = ve([Tt, Pt, Nl], ([z, Xe, He]) => {
    const ze = {};
    return ze.top = He.top, ze.right = z - He.right, ze.bottom = Xe - He.bottom, ze.left = He.left, ze.width = ze.right - ze.left, ze.height = ze.bottom - ze.top, ze.width <= 0 && ur === !0 && console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?"), ze.height <= 0 && ur === !0 && console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?"), ze;
  });
  x(e, Ml, (z) => n(151, c = z));
  const at = ve([Ml], ([z]) => z.width);
  x(e, at, (z) => n(34, Xt = z));
  const ft = ve([Ml], ([z]) => z.height);
  x(e, ft, (z) => n(35, Pn = z));
  const Te = ve([tn, Sl, cl, bn, _n, yn, hn], ([z, Xe, He, ze, mt, Ja, Za]) => {
    const $a = {
      x: ze,
      y: mt,
      r: Ja,
      z: Za
    }, pr = Nr(Xe, He), ef = Object.fromEntries(Object.keys(pr).map((wr) => [wr, $a[wr]]));
    return Object.keys(pr).length > 0 ? { ...su(z, pr, ef), ...He } : {};
  });
  x(e, Te, (z) => n(38, Ut = z));
  const zl = ve([Te, ml], Ql("x"));
  x(e, zl, (z) => n(39, gt = z));
  const Rl = ve([Te, bl], Ql("y"));
  x(e, Rl, (z) => n(40, pt = z));
  const Ll = ve([Te, _l], Ql("z"));
  x(e, Ll, (z) => n(41, et = z));
  const ql = ve([Te, hl], Ql("r"));
  x(e, ql, (z) => n(42, tt = z));
  const kn = ve(
    [
      bn,
      Te,
      zl,
      cn,
      nn,
      an,
      at,
      ft,
      yl,
      ot
    ],
    Ol("x")
  );
  x(e, kn, (z) => n(9, f = z));
  const cr = ve([Qt, kn], xl);
  x(e, cr, (z) => n(47, xn = z));
  const pn = ve(
    [
      _n,
      Te,
      Rl,
      dn,
      ln,
      fn,
      at,
      ft,
      kl,
      ot
    ],
    Ol("y")
  );
  x(e, pn, (z) => n(8, a = z));
  const dr = ve([jt, pn], xl);
  x(e, dr, (z) => n(48, In = z));
  const wn = ve(
    [
      hn,
      Te,
      Ll,
      gn,
      rn,
      sn,
      at,
      ft,
      pl,
      ot
    ],
    Ol("z")
  );
  x(e, wn, (z) => n(7, o = z));
  const gr = ve([Ot, wn], xl);
  x(e, gr, (z) => n(49, Hn = z));
  const vn = ve(
    [
      yn,
      Te,
      ql,
      mn,
      on,
      un,
      at,
      ft,
      wl,
      ot
    ],
    Ol("r")
  );
  x(e, vn, (z) => n(6, i = z));
  const mr = ve([xt, vn], xl);
  x(e, mr, (z) => n(50, Bn = z));
  const br = ve([kn], Il);
  x(e, br, (z) => n(43, nt = z));
  const _r = ve([pn], Il);
  x(e, _r, (z) => n(44, Qn = z));
  const hr = ve([wn], Il);
  x(e, hr, (z) => n(45, jn = z));
  const yr = ve([vn], Il);
  x(e, yr, (z) => n(46, On = z));
  const kr = ve([at, ft], ([z, Xe]) => z / Xe);
  x(e, kr, (z) => n(36, Ke = z));
  function Ya(z) {
    Me[z ? "unshift" : "push"](() => {
      Z = z, n(2, Z);
    });
  }
  function Ua() {
    lt = this.clientWidth, rt = this.clientHeight, n(0, lt), n(1, rt);
  }
  return e.$$set = (z) => {
    "ssr" in z && n(3, Jt = z.ssr), "pointerEvents" in z && n(4, Gn = z.pointerEvents), "position" in z && n(5, Vn = z.position), "percentRange" in z && n(111, wt = z.percentRange), "width" in z && n(112, Zt = z.width), "height" in z && n(113, $t = z.height), "containerWidth" in z && n(0, lt = z.containerWidth), "containerHeight" in z && n(1, rt = z.containerHeight), "element" in z && n(2, Z = z.element), "x" in z && n(114, it = z.x), "y" in z && n(115, vt = z.y), "z" in z && n(116, Ct = z.z), "r" in z && n(117, St = z.r), "data" in z && n(118, Nt = z.data), "xDomain" in z && n(119, Mt = z.xDomain), "yDomain" in z && n(120, zt = z.yDomain), "zDomain" in z && n(121, Rt = z.zDomain), "rDomain" in z && n(122, Lt = z.rDomain), "xNice" in z && n(123, Wn = z.xNice), "yNice" in z && n(124, Kn = z.yNice), "zNice" in z && n(125, Xn = z.zNice), "rNice" in z && n(126, Yn = z.rNice), "xPadding" in z && n(127, Un = z.xPadding), "yPadding" in z && n(128, Jn = z.yPadding), "zPadding" in z && n(129, Zn = z.zPadding), "rPadding" in z && n(130, $n = z.rPadding), "xScale" in z && n(131, el = z.xScale), "yScale" in z && n(132, en = z.yScale), "zScale" in z && n(133, tl = z.zScale), "rScale" in z && n(134, nl = z.rScale), "xRange" in z && n(135, qt = z.xRange), "yRange" in z && n(136, Et = z.yRange), "zRange" in z && n(137, Dt = z.zRange), "rRange" in z && n(138, At = z.rRange), "xReverse" in z && n(139, ll = z.xReverse), "yReverse" in z && n(140, rl = z.yReverse), "zReverse" in z && n(141, il = z.zReverse), "rReverse" in z && n(142, ol = z.rReverse), "padding" in z && n(143, al = z.padding), "extents" in z && n(144, fl = z.extents), "flatData" in z && n(145, sl = z.flatData), "custom" in z && n(146, ul = z.custom), "debug" in z && n(147, sr = z.debug), "$$scope" in z && n(152, Fn = z.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[4] & /*yReverse, yScale*/
    65792 && n(150, l = typeof rl > "u" ? typeof en.bandwidth != "function" : rl), e.$$.dirty[3] & /*x*/
    2097152 && it && n(148, he.x = it, he), e.$$.dirty[3] & /*y*/
    4194304 && vt && n(148, he.y = vt, he), e.$$.dirty[3] & /*z*/
    8388608 && Ct && n(148, he.z = Ct, he), e.$$.dirty[3] & /*r*/
    16777216 && St && n(148, he.r = St, he), e.$$.dirty[3] & /*xDomain*/
    67108864 && Mt && n(148, he.xDomain = Mt, he), e.$$.dirty[3] & /*yDomain*/
    134217728 && zt && n(148, he.yDomain = zt, he), e.$$.dirty[3] & /*zDomain*/
    268435456 && Rt && n(148, he.zDomain = Rt, he), e.$$.dirty[3] & /*rDomain*/
    536870912 && Lt && n(148, he.rDomain = Lt, he), e.$$.dirty[4] & /*xRange*/
    2048 && qt && n(148, he.xRange = qt, he), e.$$.dirty[4] & /*yRange*/
    4096 && Et && n(148, he.yRange = Et, he), e.$$.dirty[4] & /*zRange*/
    8192 && Dt && n(148, he.zRange = Dt, he), e.$$.dirty[4] & /*rRange*/
    16384 && At && n(148, he.rRange = At, he), e.$$.dirty[3] & /*percentRange*/
    262144 && de(ot, We = wt, We), e.$$.dirty[0] & /*containerWidth*/
    1 && de(Tt, K = lt, K), e.$$.dirty[0] & /*containerHeight*/
    2 && de(Pt, Ae = rt, Ae), e.$$.dirty[4] & /*extents*/
    1048576 && de(cl, Re = Nr(fl), Re), e.$$.dirty[3] & /*data*/
    33554432 && de(dl, ce = Nt, ce), e.$$.dirty[3] & /*data*/
    33554432 | e.$$.dirty[4] & /*flatData*/
    2097152 && de(tn, le = sl || Nt, le), e.$$.dirty[4] & /*padding*/
    524288 && de(gl, fe = al, fe), e.$$.dirty[3] & /*x*/
    2097152 && de(Qt, B = st(it), B), e.$$.dirty[3] & /*y*/
    4194304 && de(jt, ue = st(vt), ue), e.$$.dirty[3] & /*z*/
    8388608 && de(Ot, te = st(Ct), te), e.$$.dirty[3] & /*r*/
    16777216 && de(xt, j = st(St), j), e.$$.dirty[3] & /*xDomain*/
    67108864 && de(ml, Y = Mt, Y), e.$$.dirty[3] & /*yDomain*/
    134217728 && de(bl, ne = zt, ne), e.$$.dirty[3] & /*zDomain*/
    268435456 && de(_l, _e = Rt, _e), e.$$.dirty[3] & /*rDomain*/
    536870912 && de(hl, X = Lt, X), e.$$.dirty[3] & /*xNice*/
    1073741824 && de(nn, I = Wn, I), e.$$.dirty[4] & /*yNice*/
    1 && de(ln, O = Kn, O), e.$$.dirty[4] & /*zNice*/
    2 && de(rn, J = Xn, J), e.$$.dirty[4] & /*rNice*/
    4 && de(on, ee = Yn, ee), e.$$.dirty[4] & /*xReverse*/
    32768 && de(an, A = ll, A), e.$$.dirty[4] & /*yReverseValue*/
    67108864 && de(fn, C = l, C), e.$$.dirty[4] & /*zReverse*/
    131072 && de(sn, T = il, T), e.$$.dirty[4] & /*rReverse*/
    262144 && de(un, D = ol, D), e.$$.dirty[4] & /*xPadding*/
    8 && de(cn, H = Un, H), e.$$.dirty[4] & /*yPadding*/
    16 && de(dn, Q = Jn, Q), e.$$.dirty[4] & /*zPadding*/
    32 && de(gn, q = Zn, q), e.$$.dirty[4] & /*rPadding*/
    64 && de(mn, E = $n, E), e.$$.dirty[4] & /*xRange*/
    2048 && de(yl, N = qt, N), e.$$.dirty[4] & /*yRange*/
    4096 && de(kl, p = Et, p), e.$$.dirty[4] & /*zRange*/
    8192 && de(pl, k = Dt, k), e.$$.dirty[4] & /*rRange*/
    16384 && de(wl, S = At, S), e.$$.dirty[4] & /*xScale*/
    128 && de(bn, y = el, y), e.$$.dirty[4] & /*yScale*/
    256 && de(_n, _ = en, _), e.$$.dirty[4] & /*zScale*/
    512 && de(hn, g = tl, g), e.$$.dirty[4] & /*rScale*/
    1024 && de(yn, m = nl, m), e.$$.dirty[4] & /*custom*/
    4194304 && de(Cl, d = ul, d), e.$$.dirty[4] & /*config*/
    16777216 && de(vl, u = he, u), e.$$.dirty[4] & /*context*/
    33554432 && sf("LayerCake", r), e.$$.dirty[0] & /*ssr, $activeGetters_d, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
    1992 | e.$$.dirty[4] & /*$box_d, debug, config*/
    159383552 && c && sr === !0 && (Jt === !0 || typeof window < "u") && fr({
      boundingBox: c,
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
    width: at,
    height: ft,
    percentRange: ot,
    aspectRatio: kr,
    containerWidth: Tt,
    containerHeight: Pt,
    x: Qt,
    y: jt,
    z: Ot,
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
    yDomain: Rl,
    zDomain: Ll,
    rDomain: ql,
    xRange: br,
    yRange: _r,
    zRange: hr,
    rRange: yr,
    config: vl,
    xScale: kn,
    xGet: cr,
    yScale: pn,
    yGet: dr,
    zScale: wn,
    zGet: gr,
    rScale: vn,
    rGet: mr
  }), [
    lt,
    rt,
    Z,
    Jt,
    Gn,
    Vn,
    i,
    o,
    a,
    f,
    s,
    u,
    d,
    E,
    q,
    Q,
    H,
    D,
    T,
    C,
    A,
    ee,
    J,
    O,
    I,
    j,
    te,
    ue,
    B,
    le,
    ce,
    Ae,
    K,
    We,
    Xt,
    Pn,
    Ke,
    Yt,
    Ut,
    gt,
    pt,
    et,
    tt,
    nt,
    Qn,
    jn,
    On,
    xn,
    In,
    Hn,
    Bn,
    ot,
    Tt,
    Pt,
    cl,
    dl,
    tn,
    gl,
    Qt,
    jt,
    Ot,
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
    kl,
    pl,
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
    at,
    ft,
    Te,
    zl,
    Rl,
    Ll,
    ql,
    kn,
    cr,
    pn,
    dr,
    wn,
    gr,
    vn,
    mr,
    br,
    _r,
    hr,
    yr,
    kr,
    wt,
    Zt,
    $t,
    it,
    vt,
    Ct,
    St,
    Nt,
    Mt,
    zt,
    Rt,
    Lt,
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
    Et,
    Dt,
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
    c,
    Fn,
    ar,
    Ya,
    Ua
  ];
}
class ir extends pe {
  constructor(t) {
    super(), ke(
      this,
      t,
      tc,
      ec,
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
const nc = (e) => ({ element: e & /*element*/
1 }), Bi = (e) => ({ element: (
  /*element*/
  e[0]
) });
function lc(e) {
  let t, n;
  const l = (
    /*#slots*/
    e[11].default
  ), r = Qe(
    l,
    e,
    /*$$scope*/
    e[10],
    Bi
  );
  return {
    c() {
      t = w("div"), r && r.c(), b(t, "class", "layercake-layout-html svelte-1bu60uu"), b(
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
      ), re(
        t,
        "z-index",
        /*zIndex*/
        e[1]
      ), re(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[2] === !1 ? "none" : null
      ), re(
        t,
        "top",
        /*$padding*/
        e[7].top + "px"
      ), re(
        t,
        "right",
        /*$padding*/
        e[7].right + "px"
      ), re(
        t,
        "bottom",
        /*$padding*/
        e[7].bottom + "px"
      ), re(
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
      1025) && Oe(
        r,
        l,
        i,
        /*$$scope*/
        i[10],
        n ? je(
          l,
          /*$$scope*/
          i[10],
          o,
          nc
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
      2 && re(
        t,
        "z-index",
        /*zIndex*/
        i[1]
      ), o & /*pointerEvents*/
      4 && re(
        t,
        "pointer-events",
        /*pointerEvents*/
        i[2] === !1 ? "none" : null
      ), o & /*$padding*/
      128 && re(
        t,
        "top",
        /*$padding*/
        i[7].top + "px"
      ), o & /*$padding*/
      128 && re(
        t,
        "right",
        /*$padding*/
        i[7].right + "px"
      ), o & /*$padding*/
      128 && re(
        t,
        "bottom",
        /*$padding*/
        i[7].bottom + "px"
      ), o & /*$padding*/
      128 && re(
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
      L(r, i), n = !1;
    },
    d(i) {
      i && M(t), r && r.d(i), e[12](null);
    }
  };
}
function rc(e, t, n) {
  let l, r, { $$slots: i = {}, $$scope: o } = t;
  const { padding: a } = An("LayerCake");
  x(e, a, (y) => n(7, r = y));
  let { element: f = void 0 } = t, { zIndex: s = void 0 } = t, { pointerEvents: c = void 0 } = t, { role: u = void 0 } = t, { label: d = void 0 } = t, { labelledBy: m = void 0 } = t, { describedBy: g = void 0 } = t;
  function _(y) {
    Me[y ? "unshift" : "push"](() => {
      f = y, n(0, f);
    });
  }
  return e.$$set = (y) => {
    "element" in y && n(0, f = y.element), "zIndex" in y && n(1, s = y.zIndex), "pointerEvents" in y && n(2, c = y.pointerEvents), "role" in y && n(9, u = y.role), "label" in y && n(3, d = y.label), "labelledBy" in y && n(4, m = y.labelledBy), "describedBy" in y && n(5, g = y.describedBy), "$$scope" in y && n(10, o = y.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*role, label, labelledBy, describedBy*/
    568 && n(6, l = u || (d || m || g ? "figure" : void 0));
  }, [
    f,
    s,
    c,
    d,
    m,
    g,
    l,
    r,
    a,
    u,
    o,
    i,
    _
  ];
}
class Aa extends pe {
  constructor(t) {
    super(), ke(this, t, rc, lc, ye, {
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
const ic = (e) => ({ element: e & /*element*/
1 }), Fi = (e) => ({ element: (
  /*element*/
  e[0]
) }), oc = (e) => ({ element: e & /*element*/
1 }), Gi = (e) => ({ element: (
  /*element*/
  e[0]
) }), ac = (e) => ({ element: e & /*element*/
1 }), Vi = (e) => ({ element: (
  /*element*/
  e[0]
) });
function Wi(e) {
  let t, n;
  return {
    c() {
      t = Se("title"), n = F(
        /*title*/
        e[8]
      );
    },
    m(l, r) {
      R(l, t, r), h(t, n);
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
function fc(e) {
  let t, n = (
    /*title*/
    e[8] && Wi(e)
  );
  return {
    c() {
      n && n.c(), t = be();
    },
    m(l, r) {
      n && n.m(l, r), R(l, t, r);
    },
    p(l, r) {
      /*title*/
      l[8] ? n ? n.p(l, r) : (n = Wi(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(l) {
      n && n.d(l), l && M(t);
    }
  };
}
function sc(e) {
  let t, n, l, r, i;
  const o = (
    /*#slots*/
    e[16].title
  ), a = Qe(
    o,
    e,
    /*$$scope*/
    e[15],
    Vi
  ), f = a || fc(e), s = (
    /*#slots*/
    e[16].defs
  ), c = Qe(
    s,
    e,
    /*$$scope*/
    e[15],
    Gi
  ), u = (
    /*#slots*/
    e[16].default
  ), d = Qe(
    u,
    e,
    /*$$scope*/
    e[15],
    Fi
  );
  return {
    c() {
      t = Se("svg"), f && f.c(), n = Se("defs"), c && c.c(), l = Se("g"), d && d.c(), b(l, "class", "layercake-layout-svg_g"), b(l, "transform", r = "translate(" + /*$padding*/
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
      ), re(
        t,
        "z-index",
        /*zIndex*/
        e[2]
      ), re(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[3] === !1 ? "none" : null
      );
    },
    m(m, g) {
      R(m, t, g), f && f.m(t, null), h(t, n), c && c.m(n, null), h(t, l), d && d.m(l, null), e[17](l), e[18](t), i = !0;
    },
    p(m, [g]) {
      a ? a.p && (!i || g & /*$$scope, element*/
      32769) && Oe(
        a,
        o,
        m,
        /*$$scope*/
        m[15],
        i ? je(
          o,
          /*$$scope*/
          m[15],
          g,
          ac
        ) : xe(
          /*$$scope*/
          m[15]
        ),
        Vi
      ) : f && f.p && (!i || g & /*title*/
      256) && f.p(m, i ? g : -1), c && c.p && (!i || g & /*$$scope, element*/
      32769) && Oe(
        c,
        s,
        m,
        /*$$scope*/
        m[15],
        i ? je(
          s,
          /*$$scope*/
          m[15],
          g,
          oc
        ) : xe(
          /*$$scope*/
          m[15]
        ),
        Gi
      ), d && d.p && (!i || g & /*$$scope, element*/
      32769) && Oe(
        d,
        u,
        m,
        /*$$scope*/
        m[15],
        i ? je(
          u,
          /*$$scope*/
          m[15],
          g,
          ic
        ) : xe(
          /*$$scope*/
          m[15]
        ),
        Fi
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
      4 && re(
        t,
        "z-index",
        /*zIndex*/
        m[2]
      ), g & /*pointerEvents*/
      8 && re(
        t,
        "pointer-events",
        /*pointerEvents*/
        m[3] === !1 ? "none" : null
      );
    },
    i(m) {
      i || (v(f, m), v(c, m), v(d, m), i = !0);
    },
    o(m) {
      L(f, m), L(c, m), L(d, m), i = !1;
    },
    d(m) {
      m && M(t), f && f.d(m), c && c.d(m), d && d.d(m), e[17](null), e[18](null);
    }
  };
}
function uc(e, t, n) {
  let l, r, i, { $$slots: o = {}, $$scope: a } = t, { element: f = void 0 } = t, { innerElement: s = void 0 } = t, { zIndex: c = void 0 } = t, { pointerEvents: u = void 0 } = t, { viewBox: d = void 0 } = t, { label: m = void 0 } = t, { labelledBy: g = void 0 } = t, { describedBy: _ = void 0 } = t, { title: y = void 0 } = t;
  const { containerWidth: S, containerHeight: k, padding: p } = An("LayerCake");
  x(e, S, (q) => n(9, l = q)), x(e, k, (q) => n(10, r = q)), x(e, p, (q) => n(11, i = q));
  function N(q) {
    Me[q ? "unshift" : "push"](() => {
      s = q, n(1, s);
    });
  }
  function E(q) {
    Me[q ? "unshift" : "push"](() => {
      f = q, n(0, f);
    });
  }
  return e.$$set = (q) => {
    "element" in q && n(0, f = q.element), "innerElement" in q && n(1, s = q.innerElement), "zIndex" in q && n(2, c = q.zIndex), "pointerEvents" in q && n(3, u = q.pointerEvents), "viewBox" in q && n(4, d = q.viewBox), "label" in q && n(5, m = q.label), "labelledBy" in q && n(6, g = q.labelledBy), "describedBy" in q && n(7, _ = q.describedBy), "title" in q && n(8, y = q.title), "$$scope" in q && n(15, a = q.$$scope);
  }, [
    f,
    s,
    c,
    u,
    d,
    m,
    g,
    _,
    y,
    l,
    r,
    i,
    S,
    k,
    p,
    a,
    o,
    N,
    E
  ];
}
class Ta extends pe {
  constructor(t) {
    super(), ke(this, t, uc, sc, ye, {
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
function Ki(e, t, n) {
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
function Xi(e) {
  let t, n = (
    /*yValue*/
    e[34] + ""
  ), l, r, i;
  return {
    c() {
      t = Se("text"), l = F(n), b(t, "x", r = /*xPos*/
      e[32] + /*colWidth*/
      e[33] / 2), b(t, "y", i = /*$height*/
      e[12] - /*colHeight*/
      e[30] - 5), b(t, "text-anchor", "middle"), b(t, "class", "svelte-1c28ck9");
    },
    m(o, a) {
      R(o, t, a), h(t, l);
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
function Yi(e) {
  let t, n, l, r, i, o, a, f, s, c, u, d, m, g, _;
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
  let S = (
    /*showLabels*/
    e[1] && /*yValue*/
    e[34] && Xi(e)
  );
  return {
    c() {
      t = Se("rect"), c = Se("rect"), S && S.c(), m = be(), b(t, "class", "group-rect svelte-1c28ck9"), b(
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
      e[36] ? Ui : "none"), b(t, "stroke-width", s = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Ji : 0), se(
        t,
        "animated",
        /*loaded*/
        e[5]
      ), b(c, "class", "hover-zone svelte-1c28ck9"), b(c, "x", u = /*xPos*/
      e[32]), b(c, "y", 0), b(c, "width", d = /*colWidth*/
      e[33]), b(
        c,
        "height",
        /*$height*/
        e[12]
      ), b(c, "fill", "none"), b(c, "stroke", "none");
    },
    m(k, p) {
      R(k, t, p), R(k, c, p), S && S.m(k, p), R(k, m, p), g || (_ = [
        U(c, "mouseenter", y),
        U(
          c,
          "mouseleave",
          /*mouseleave_handler*/
          e[24]
        )
      ], g = !0);
    },
    p(k, p) {
      e = k, p[0] & /*$x, $data*/
      2304 && n !== (n = /*$x*/
      e[11](
        /*d*/
        e[29]
      )) && b(t, "data-range", n), p[0] & /*$y, $data*/
      1280 && l !== (l = /*yValue*/
      e[34]) && b(t, "data-count", l), p[0] & /*$xGet, $data*/
      264 && r !== (r = /*xPos*/
      e[32]) && b(t, "x", r), p[0] & /*$yGet, $data*/
      260 && i !== (i = /*$yGet*/
      e[2](
        /*d*/
        e[29]
      )) && b(t, "y", i), p[0] & /*$xScale, columnWidth, $data*/
      896 && o !== (o = /*colWidth*/
      e[33]) && b(t, "width", o), p[0] & /*columnHeight, $data*/
      320 && a !== (a = /*colHeight*/
      e[30]) && b(t, "height", a), p[0] & /*fill*/
      1 && b(
        t,
        "fill",
        /*fill*/
        e[0]
      ), p[0] & /*hoveredIndex*/
      16 && f !== (f = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Ui : "none") && b(t, "stroke", f), p[0] & /*hoveredIndex*/
      16 && s !== (s = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Ji : 0) && b(t, "stroke-width", s), p[0] & /*loaded*/
      32 && se(
        t,
        "animated",
        /*loaded*/
        e[5]
      ), p[0] & /*$xGet, $data*/
      264 && u !== (u = /*xPos*/
      e[32]) && b(c, "x", u), p[0] & /*$xScale, columnWidth, $data*/
      896 && d !== (d = /*colWidth*/
      e[33]) && b(c, "width", d), p[0] & /*$height*/
      4096 && b(
        c,
        "height",
        /*$height*/
        e[12]
      ), /*showLabels*/
      e[1] && /*yValue*/
      e[34] ? S ? S.p(e, p) : (S = Xi(e), S.c(), S.m(m.parentNode, m)) : S && (S.d(1), S = null);
    },
    d(k) {
      k && M(t), k && M(c), S && S.d(k), k && M(m), g = !1, we(_);
    }
  };
}
function cc(e) {
  let t, n = (
    /*$data*/
    e[8]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Yi(Ki(e, n, r));
  return {
    c() {
      t = Se("g");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      b(t, "class", "column-group");
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
          const a = Ki(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = Yi(a), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    i: $,
    o: $,
    d(r) {
      r && M(t), De(l, r);
    }
  };
}
const Ui = "#333", Ji = 1;
function dc(e, t, n) {
  let l, r, i, o, a, f, s, c, u, d;
  const m = ba(), { data: g, xGet: _, yGet: y, x: S, yRange: k, xScale: p, y: N, height: E, zGet: q, zScale: Q, z: H, custom: D } = An("LayerCake");
  x(e, g, (I) => n(8, f = I)), x(e, _, (I) => n(3, a = I)), x(e, y, (I) => n(2, i = I)), x(e, S, (I) => n(11, u = I)), x(e, k, (I) => n(22, o = I)), x(e, p, (I) => n(9, s = I)), x(e, N, (I) => n(10, c = I)), x(e, E, (I) => n(12, d = I));
  let { fill: T = "#00e047" } = t, { showLabels: C = !1 } = t, A = null;
  dt(() => {
    setTimeout(() => n(5, ee = !0), 100);
  });
  let ee = !1;
  const J = (I, X) => {
    n(4, A = I), m("hover", X);
  }, O = () => {
    n(4, A = null), m("hover", null);
  };
  return e.$$set = (I) => {
    "fill" in I && n(0, T = I.fill), "showLabels" in I && n(1, C = I.showLabels);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*$xGet*/
    8 && n(7, l = (I) => {
      const X = a(I);
      return Math.abs(X[1] - X[0]);
    }), e.$$.dirty[0] & /*$yRange, $yGet*/
    4194308 && n(6, r = (I) => o[0] - i(I));
  }, [
    T,
    C,
    i,
    a,
    A,
    ee,
    r,
    l,
    f,
    s,
    c,
    u,
    d,
    m,
    g,
    _,
    y,
    S,
    k,
    p,
    N,
    E,
    o,
    J,
    O
  ];
}
class Pa extends pe {
  constructor(t) {
    super(), ke(this, t, dc, cc, ye, { fill: 0, showLabels: 1 }, null, [-1, -1]);
  }
}
function Zi(e, t, n) {
  const l = e.slice();
  return l[28] = t[n], l[30] = n, l;
}
function $i(e) {
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
      R(r, t, i);
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
function eo(e) {
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
      R(r, t, i);
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
function to(e) {
  let t, n, l, r = (
    /*formatTick*/
    e[4](
      /*tick*/
      e[28]
    ) + ""
  ), i, o, a, f, s, c, u = (
    /*gridlines*/
    e[0] !== !1 && $i(e)
  ), d = (
    /*tickMarks*/
    e[1] === !0 && eo(e)
  );
  return {
    c() {
      t = Se("g"), u && u.c(), n = be(), d && d.c(), l = Se("text"), i = F(r), b(l, "x", o = /*xTick*/
      e[5] || /*isBandwidth*/
      e[11] ? (
        /*$xScale*/
        e[12].bandwidth() / 2
      ) : 0), b(l, "y", a = /*yTick*/
      e[6] - /*angle*/
      (e[10] ? 4 : 0)), b(l, "dx", ""), b(l, "dy", ""), b(l, "transform", f = /*angle*/
      e[10] ? "rotate(-45)" : ""), re(
        l,
        "fill",
        /*color*/
        e[9]
      ), b(l, "text-anchor", s = /*textAnchor*/
      e[24](
        /*tick*/
        e[28]
      )), b(l, "class", "svelte-rkqqab"), b(t, "class", "tick tick-" + /*i*/
      e[30] + " svelte-rkqqab"), b(t, "transform", c = "translate(" + /*$xScale*/
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
      R(m, t, g), u && u.m(t, null), h(t, n), d && d.m(t, null), h(t, l), h(l, i);
    },
    p(m, g) {
      /*gridlines*/
      m[0] !== !1 ? u ? u.p(m, g) : (u = $i(m), u.c(), u.m(t, n)) : u && (u.d(1), u = null), /*tickMarks*/
      m[1] === !0 ? d ? d.p(m, g) : (d = eo(m), d.c(), d.m(t, l)) : d && (d.d(1), d = null), g & /*formatTick, tickVals*/
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
      512 && re(
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
      28672 && c !== (c = "translate(" + /*$xScale*/
      m[12](
        /*tick*/
        m[28]
      ) + "," + Math.max(
        /*$yRange*/
        m[14][0],
        /*$yRange*/
        m[14][1]
      ) + ")") && b(t, "transform", c);
    },
    d(m) {
      m && M(t), u && u.d(), d && d.d();
    }
  };
}
function no(e) {
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
      R(r, t, i);
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
function lo(e) {
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
      e[8] ? "end" : "middle"), re(
        t,
        "fill",
        /*color*/
        e[9]
      ), b(t, "class", "axis-label svelte-rkqqab");
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
      512 && re(
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
function gc(e) {
  let t, n, l, r = (
    /*tickVals*/
    e[13]
  ), i = [];
  for (let f = 0; f < r.length; f += 1)
    i[f] = to(Zi(e, r, f));
  let o = (
    /*baseline*/
    e[2] === !0 && no(e)
  ), a = !!/*label*/
  e[7] && lo(e);
  return {
    c() {
      t = Se("g");
      for (let f = 0; f < i.length; f += 1)
        i[f].c();
      n = be(), o && o.c(), l = be(), a && a.c(), b(t, "class", "axis x-axis svelte-rkqqab"), se(
        t,
        "snapTicks",
        /*snapTicks*/
        e[3]
      );
    },
    m(f, s) {
      R(f, t, s);
      for (let c = 0; c < i.length; c += 1)
        i[c] && i[c].m(t, null);
      h(t, n), o && o.m(t, null), h(t, l), a && a.m(t, null);
    },
    p(f, [s]) {
      if (s & /*$xScale, tickVals, Math, $yRange, xTick, isBandwidth, yTick, angle, color, textAnchor, formatTick, tickMarks, $height, gridlines*/
      16842355) {
        r = /*tickVals*/
        f[13];
        let c;
        for (c = 0; c < r.length; c += 1) {
          const u = Zi(f, r, c);
          i[c] ? i[c].p(u, s) : (i[c] = to(u), i[c].c(), i[c].m(t, n));
        }
        for (; c < i.length; c += 1)
          i[c].d(1);
        i.length = r.length;
      }
      /*baseline*/
      f[2] === !0 ? o ? o.p(f, s) : (o = no(f), o.c(), o.m(t, l)) : o && (o.d(1), o = null), /*label*/
      f[7] ? a ? a.p(f, s) : (a = lo(f), a.c(), a.m(t, null)) : a && (a.d(1), a = null), s & /*snapTicks*/
      8 && se(
        t,
        "snapTicks",
        /*snapTicks*/
        f[3]
      );
    },
    i: $,
    o: $,
    d(f) {
      f && M(t), De(i, f), o && o.d(), a && a.d();
    }
  };
}
function mc(e, t, n) {
  let l, r, i, o, a, f, s, c;
  const { width: u, height: d, xRange: m, padding: g, xScale: _, xDomain: y, yRange: S } = An("LayerCake");
  x(e, u, (O) => n(16, s = O)), x(e, d, (O) => n(15, f = O)), x(e, m, (O) => n(17, c = O)), x(e, _, (O) => n(12, o = O)), x(e, y, (O) => n(26, i = O)), x(e, S, (O) => n(14, a = O));
  let { gridlines: k = !0 } = t, { tickMarks: p = !1 } = t, { baseline: N = !1 } = t, { snapTicks: E = !1 } = t, { formatTick: q = (O) => O } = t, { ticks: Q = void 0 } = t, { xTick: H = 0 } = t, { yTick: D = 16 } = t, { label: T = "" } = t, { labelLeft: C = !1 } = t, { color: A = "#333" } = t, { angle: ee = !1 } = t;
  function J(O) {
    if (ee)
      return "end";
    if (E === !0) {
      if (O == i[0])
        return "start";
      if (O == i[1])
        return "end";
    }
    return "middle";
  }
  return e.$$set = (O) => {
    "gridlines" in O && n(0, k = O.gridlines), "tickMarks" in O && n(1, p = O.tickMarks), "baseline" in O && n(2, N = O.baseline), "snapTicks" in O && n(3, E = O.snapTicks), "formatTick" in O && n(4, q = O.formatTick), "ticks" in O && n(25, Q = O.ticks), "xTick" in O && n(5, H = O.xTick), "yTick" in O && n(6, D = O.yTick), "label" in O && n(7, T = O.label), "labelLeft" in O && n(8, C = O.labelLeft), "color" in O && n(9, A = O.color), "angle" in O && n(10, ee = O.angle);
  }, e.$$.update = () => {
    e.$$.dirty & /*$xScale*/
    4096 && n(11, l = typeof o.bandwidth == "function"), e.$$.dirty & /*ticks, isBandwidth, $xScale*/
    33560576 && n(13, r = Array.isArray(Q) ? Q : l ? o.domain() : typeof Q == "function" ? Q(o.ticks()) : o.ticks(Q));
  }, [
    k,
    p,
    N,
    E,
    q,
    H,
    D,
    T,
    C,
    A,
    ee,
    l,
    o,
    r,
    a,
    f,
    s,
    c,
    u,
    d,
    m,
    _,
    y,
    S,
    J,
    Q
  ];
}
class Qa extends pe {
  constructor(t) {
    super(), ke(this, t, mc, gc, ye, {
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
const bc = (e) => ({}), ro = (e) => ({}), _c = (e) => ({}), io = (e) => ({});
function hc(e) {
  let t, n, l, r, i, o, a, f, s = !!/*title*/
  e[3] && oo(e), c = (
    /*loaded*/
    e[9] && /*histBins*/
    e[8].length > 0 && ao(e)
  );
  const u = [vc, wc], d = [];
  function m(g, _) {
    return (
      /*$$slots*/
      g[12].caption ? 1 : 0
    );
  }
  return o = m(e), a = d[o] = u[o](e), {
    c() {
      t = w("div"), s && s.c(), n = P(), l = w("div"), c && c.c(), r = P(), i = w("div"), a.c(), re(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), re(l, "height", "16px"), b(i, "class", "text-xs text-gray-800 dark:text-gray-200 truncate"), se(i, "mt-1", !/*horizontalLayout*/
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
    m(g, _) {
      R(g, t, _), s && s.m(t, null), h(t, n), h(t, l), c && c.m(l, null), h(t, r), h(t, i), d[o].m(i, null), f = !0;
    },
    p(g, _) {
      /*title*/
      g[3] ? s ? s.p(g, _) : (s = oo(g), s.c(), s.m(t, n)) : s && (s.d(1), s = null), /*loaded*/
      g[9] && /*histBins*/
      g[8].length > 0 ? c ? (c.p(g, _), _ & /*loaded, histBins*/
      768 && v(c, 1)) : (c = ao(g), c.c(), v(c, 1), c.m(l, null)) : c && (ie(), L(c, 1, 1, () => {
        c = null;
      }), oe()), (!f || _ & /*width*/
      1) && re(
        l,
        "width",
        /*width*/
        g[0] == null ? "100%" : `${/*width*/
        g[0]}px`
      );
      let y = o;
      o = m(g), o === y ? d[o].p(g, _) : (ie(), L(d[y], 1, 1, () => {
        d[y] = null;
      }), oe(), a = d[o], a ? a.p(g, _) : (a = d[o] = u[o](g), a.c()), v(a, 1), a.m(i, null)), (!f || _ & /*horizontalLayout*/
      16) && se(i, "mt-1", !/*horizontalLayout*/
      g[4]), (!f || _ & /*horizontalLayout*/
      16) && se(
        t,
        "flex",
        /*horizontalLayout*/
        g[4]
      ), (!f || _ & /*horizontalLayout*/
      16) && se(
        t,
        "my-0.5",
        /*horizontalLayout*/
        g[4]
      );
    },
    i(g) {
      f || (v(c), v(a), f = !0);
    },
    o(g) {
      L(c), L(a), f = !1;
    },
    d(g) {
      g && M(t), s && s.d(), c && c.d(), d[o].d();
    }
  };
}
function yc(e) {
  let t, n, l, r, i, o, a, f = !!/*title*/
  e[3] && fo(e), s = (
    /*loaded*/
    e[9] && /*histBins*/
    e[8].length > 0 && so(e)
  );
  const c = [Lc, Rc], u = [];
  function d(m, g) {
    return (
      /*$$slots*/
      m[12].caption ? 1 : 0
    );
  }
  return i = d(e), o = u[i] = c[i](e), {
    c() {
      f && f.c(), t = P(), n = w("div"), s && s.c(), l = P(), r = w("div"), o.c(), re(
        n,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), re(n, "height", "16px"), b(r, "class", "text-xs text-gray-800 dark:text-gray-200 truncate"), se(r, "mt-1", !/*horizontalLayout*/
      e[4]);
    },
    m(m, g) {
      f && f.m(m, g), R(m, t, g), R(m, n, g), s && s.m(n, null), R(m, l, g), R(m, r, g), u[i].m(r, null), a = !0;
    },
    p(m, g) {
      /*title*/
      m[3] ? f ? f.p(m, g) : (f = fo(m), f.c(), f.m(t.parentNode, t)) : f && (f.d(1), f = null), /*loaded*/
      m[9] && /*histBins*/
      m[8].length > 0 ? s ? (s.p(m, g), g & /*loaded, histBins*/
      768 && v(s, 1)) : (s = so(m), s.c(), v(s, 1), s.m(n, null)) : s && (ie(), L(s, 1, 1, () => {
        s = null;
      }), oe()), (!a || g & /*width*/
      1) && re(
        n,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let _ = i;
      i = d(m), i === _ ? u[i].p(m, g) : (ie(), L(u[_], 1, 1, () => {
        u[_] = null;
      }), oe(), o = u[i], o ? o.p(m, g) : (o = u[i] = c[i](m), o.c()), v(o, 1), o.m(r, null)), (!a || g & /*horizontalLayout*/
      16) && se(r, "mt-1", !/*horizontalLayout*/
      m[4]);
    },
    i(m) {
      a || (v(s), v(o), a = !0);
    },
    o(m) {
      L(s), L(o), a = !1;
    },
    d(m) {
      f && f.d(m), m && M(t), m && M(n), s && s.d(), m && M(l), m && M(r), u[i].d();
    }
  };
}
function oo(e) {
  let t, n;
  return {
    c() {
      t = w("div"), n = F(
        /*title*/
        e[3]
      ), b(t, "class", "font-bold text-xs truncate text-right"), re(t, "width", "96px");
    },
    m(l, r) {
      R(l, t, r), h(t, n);
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
function ao(e) {
  let t, n;
  return t = new ir({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: Fr().round(!0),
      xDomain: (
        /*histBins*/
        e[8]
      ),
      yScale: ut(),
      yDomain: [0, null],
      data: (
        /*data*/
        e[7]
      ),
      custom: { hoveredGet: (
        /*func_2*/
        e[20]
      ) },
      $$slots: { default: [pc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      G(t, l, r), n = !0;
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
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function kc(e) {
  let t, n, l, r;
  return t = new Pa({ props: { fill: (
    /*color*/
    e[6]
  ) } }), t.$on(
    "hover",
    /*hover_handler_1*/
    e[19]
  ), l = new Qa({
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
      G(t, i, o), R(i, n, o), G(l, i, o), r = !0;
    },
    p(i, o) {
      const a = {};
      o & /*color*/
      64 && (a.fill = /*color*/
      i[6]), t.$set(a);
    },
    i(i) {
      r || (v(t.$$.fragment, i), v(l.$$.fragment, i), r = !0);
    },
    o(i) {
      L(t.$$.fragment, i), L(l.$$.fragment, i), r = !1;
    },
    d(i) {
      V(t, i), i && M(n), V(l, i);
    }
  };
}
function pc(e) {
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
      G(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*$$scope, color, hoveredBin*/
      4195392 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function wc(e) {
  let t;
  const n = (
    /*#slots*/
    e[15].caption
  ), l = Qe(
    n,
    e,
    /*$$scope*/
    e[22],
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
      4194304) && Oe(
        l,
        n,
        r,
        /*$$scope*/
        r[22],
        t ? je(
          n,
          /*$$scope*/
          r[22],
          i,
          bc
        ) : xe(
          /*$$scope*/
          r[22]
        ),
        ro
      );
    },
    i(r) {
      t || (v(l, r), t = !0);
    },
    o(r) {
      L(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function vc(e) {
  let t;
  function n(i, o) {
    return (
      /*hoveredBin*/
      i[10] != null ? Nc : (
        /*mean*/
        i[1] != null ? Sc : Cc
      )
    );
  }
  let l = n(e), r = l(e);
  return {
    c() {
      r.c(), t = be();
    },
    m(i, o) {
      r.m(i, o), R(i, t, o);
    },
    p(i, o) {
      l === (l = n(i)) && r ? r.p(i, o) : (r.d(1), r = l(i), r && (r.c(), r.m(t.parentNode, t)));
    },
    i: $,
    o: $,
    d(i) {
      r.d(i), i && M(t);
    }
  };
}
function Cc(e) {
  let t;
  return {
    c() {
      t = F(" ");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: $,
    d(n) {
      n && M(t);
    }
  };
}
function Sc(e) {
  let t, n, l = Ce(".3")(
    /*mean*/
    e[1]
  ) + "", r, i = /*unit*/ e[2] ? " " + /*unit*/
  e[2] : "", o;
  return {
    c() {
      t = F("M = "), n = w("strong"), r = F(l), o = F(i);
    },
    m(a, f) {
      R(a, t, f), R(a, n, f), h(n, r), h(n, o);
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
function Nc(e) {
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
      n = F(t);
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
      ) + "") && ae(n, t);
    },
    d(l) {
      l && M(n);
    }
  };
}
function fo(e) {
  let t, n;
  return {
    c() {
      t = w("div"), n = F(
        /*title*/
        e[3]
      ), b(t, "class", "font-bold text-xs truncate text-right");
    },
    m(l, r) {
      R(l, t, r), h(t, n);
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
function so(e) {
  let t, n;
  return t = new ir({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: Fr().round(!0),
      xDomain: (
        /*histBins*/
        e[8]
      ),
      yScale: ut(),
      yDomain: [0, null],
      data: (
        /*data*/
        e[7]
      ),
      custom: { hoveredGet: (
        /*func*/
        e[17]
      ) },
      $$slots: { default: [zc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      G(t, l, r), n = !0;
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
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function Mc(e) {
  let t, n, l, r;
  return t = new Pa({ props: { fill: (
    /*color*/
    e[6]
  ) } }), t.$on(
    "hover",
    /*hover_handler*/
    e[16]
  ), l = new Qa({
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
      G(t, i, o), R(i, n, o), G(l, i, o), r = !0;
    },
    p(i, o) {
      const a = {};
      o & /*color*/
      64 && (a.fill = /*color*/
      i[6]), t.$set(a);
    },
    i(i) {
      r || (v(t.$$.fragment, i), v(l.$$.fragment, i), r = !0);
    },
    o(i) {
      L(t.$$.fragment, i), L(l.$$.fragment, i), r = !1;
    },
    d(i) {
      V(t, i), i && M(n), V(l, i);
    }
  };
}
function zc(e) {
  let t, n;
  return t = new Ta({
    props: {
      $$slots: { default: [Mc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      G(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*$$scope, color, hoveredBin*/
      4195392 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function Rc(e) {
  let t;
  const n = (
    /*#slots*/
    e[15].caption
  ), l = Qe(
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
      4194304) && Oe(
        l,
        n,
        r,
        /*$$scope*/
        r[22],
        t ? je(
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
      t || (v(l, r), t = !0);
    },
    o(r) {
      L(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function Lc(e) {
  let t;
  function n(i, o) {
    return (
      /*hoveredBin*/
      i[10] != null ? Dc : (
        /*mean*/
        i[1] != null ? Ec : qc
      )
    );
  }
  let l = n(e), r = l(e);
  return {
    c() {
      r.c(), t = be();
    },
    m(i, o) {
      r.m(i, o), R(i, t, o);
    },
    p(i, o) {
      l === (l = n(i)) && r ? r.p(i, o) : (r.d(1), r = l(i), r && (r.c(), r.m(t.parentNode, t)));
    },
    i: $,
    o: $,
    d(i) {
      r.d(i), i && M(t);
    }
  };
}
function qc(e) {
  let t;
  return {
    c() {
      t = F(" ");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: $,
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
      t = F("M = "), n = w("strong"), r = F(l);
    },
    m(i, o) {
      R(i, t, o), R(i, n, o), h(n, r);
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
function Dc(e) {
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
      n = F(t);
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
      ) + "") && ae(n, t);
    },
    d(l) {
      l && M(n);
    }
  };
}
function Ac(e) {
  let t, n, l, r;
  const i = [yc, hc], o = [];
  function a(f, s) {
    return (
      /*noParent*/
      f[5] ? 0 : 1
    );
  }
  return t = a(e), n = o[t] = i[t](e), {
    c() {
      n.c(), l = be();
    },
    m(f, s) {
      o[t].m(f, s), R(f, l, s), r = !0;
    },
    p(f, [s]) {
      let c = t;
      t = a(f), t === c ? o[t].p(f, s) : (ie(), L(o[c], 1, 1, () => {
        o[c] = null;
      }), oe(), n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), v(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      r || (v(n), r = !0);
    },
    o(f) {
      L(n), r = !1;
    },
    d(f) {
      o[t].d(f), f && M(l);
    }
  };
}
function Tc(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = Tr(l);
  let { width: o = 100 } = t, { histValues: a } = t, { mean: f = null } = t, { unit: s = null } = t, { title: c = null } = t, { horizontalLayout: u = !1 } = t, { noParent: d = !1 } = t, { color: m = "#3b82f6" } = t, g = [], _ = [], y = Ce(".3g"), S = Ce(","), k = !1;
  dt(() => setTimeout(() => n(9, k = !0), 0));
  let p;
  function N(C) {
    return `${C.label}${s ? " " + s : ""}: ${S(C.count)} instances`;
  }
  const E = (C) => n(10, p = C.detail != null ? C.detail.bin : null), q = (C) => C.bin == p, Q = (C) => C.label == p, H = (C) => n(10, p = C.detail != null ? C.detail.label : null), D = (C) => C.label == p, T = (C) => C.label == p;
  return e.$$set = (C) => {
    "width" in C && n(0, o = C.width), "histValues" in C && n(13, a = C.histValues), "mean" in C && n(1, f = C.mean), "unit" in C && n(2, s = C.unit), "title" in C && n(3, c = C.title), "horizontalLayout" in C && n(4, u = C.horizontalLayout), "noParent" in C && n(5, d = C.noParent), "color" in C && n(6, m = C.color), "$$scope" in C && n(22, r = C.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*histValues, binFormat, data*/
    24704)
      if (a) {
        let C = Object.keys(a), A = C.reduce(
          (J, O, I) => I > 0 ? Math.min(J, Math.abs(parseFloat(O) - parseFloat(C[I - 1]))) : J,
          1e9
        );
        n(14, y = Ce(`.${va(A)}f`));
        let ee = Object.keys(a).some((J) => J.search(/[^0-9.]/) >= 0);
        console.log("string labels:", ee, Object.keys(a)), n(7, g = Object.entries(a).map((J) => ({
          bin: ee ? J[0] : parseFloat(J[0]),
          count: J[1],
          label: ee ? J[0] : y(J[0])
        }))), g.sort((J, O) => ee ? J.label.localeCompare(O.label) : parseFloat(J.bin) - parseFloat(O.bin)), n(8, _ = g.map((J) => J.bin));
      } else
        n(7, g = []), n(8, _ = []);
    e.$$.dirty & /*histBins*/
    256 && console.log("histBins", _), e.$$.dirty & /*histValues*/
    8192 && console.log("histValues", a);
  }, [
    o,
    f,
    s,
    c,
    u,
    d,
    m,
    g,
    _,
    k,
    p,
    N,
    i,
    a,
    y,
    l,
    E,
    q,
    Q,
    H,
    D,
    T,
    r
  ];
}
class Pc extends pe {
  constructor(t) {
    super(), ke(this, t, Tc, Ac, ye, {
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
function uo(e, t, n) {
  const l = e.slice();
  return l[24] = t[n], l[26] = n, l;
}
function co(e) {
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
      t = w("span"), b(t, "class", "bar absolute content-box svelte-mwmtzu"), re(t, "top", "0"), re(
        t,
        "left",
        /*$xGet*/
        e[3](
          /*d*/
          e[24]
        ) * /*$xRange*/
        (e[4][1] <= 1 ? 100 : 1) + /*$xRange*/
        (e[4][1] <= 1 ? "%" : "px")
      ), re(
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
      ), re(
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
      R(i, t, o), n || (l = [
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
      28 && re(
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
      124 && re(
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
      132 && re(
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
    l[r] = co(uo(e, n, r));
  return {
    c() {
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      t = be();
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
          const a = uo(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = co(a), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    i: $,
    o: $,
    d(r) {
      De(l, r), r && M(t);
    }
  };
}
function jc(e, t, n) {
  let l, r, i, o, a, f;
  const s = ba(), { data: c, xGet: u, yGet: d, xRange: m, x: g, yRange: _, xScale: y, y: S, height: k, zGet: p, zScale: N, z: E, custom: q } = An("LayerCake");
  x(e, c, (C) => n(2, l = C)), x(e, u, (C) => n(3, r = C)), x(e, d, (C) => n(7, f = C)), x(e, m, (C) => n(4, i = C)), x(e, y, (C) => n(5, o = C)), x(e, E, (C) => n(6, a = C));
  let Q = null;
  dt(() => {
    setTimeout(() => n(1, H = !0), 100);
  });
  let H = !1;
  return [
    Q,
    H,
    l,
    r,
    i,
    o,
    a,
    f,
    s,
    c,
    u,
    d,
    m,
    y,
    E,
    (C, A) => {
      n(0, Q = C), s("hover", A);
    },
    () => {
      n(0, Q = null), s("hover", null);
    }
  ];
}
class ja extends pe {
  constructor(t) {
    super(), ke(this, t, jc, Qc, ye, {});
  }
}
const Oc = (e) => ({}), go = (e) => ({}), xc = (e) => ({}), mo = (e) => ({});
function Ic(e) {
  let t, n, l, r, i, o, a, f, s, c = !!/*title*/
  e[1] && bo(e);
  r = new ir({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: ut(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        e[0] ?? 1
      ],
      yScale: rr(),
      yDomain: Ue(
        /*counts*/
        e[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        e[4]
      ) ? (
        /*colorScale*/
        e[4]
      ) : Ue(0, 1.00001, 1 / /*data*/
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
      $$slots: { default: [Fc] },
      $$scope: { ctx: e }
    }
  });
  const u = [Wc, Vc, Gc], d = [];
  function m(g, _) {
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
  return ~(a = m(e)) && (f = d[a] = u[a](e)), {
    c() {
      t = w("div"), c && c.c(), n = P(), l = w("div"), W(r.$$.fragment), i = P(), o = w("div"), f && f.c(), re(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), re(l, "height", "6px"), b(l, "class", "rounded overflow-hidden mb-1"), b(o, "class", "text-xs text-gray-800 dark:text-gray-200"), b(t, "class", "gap-1 items-center"), se(
        t,
        "flex",
        /*horizontalLayout*/
        e[2]
      );
    },
    m(g, _) {
      R(g, t, _), c && c.m(t, null), h(t, n), h(t, l), G(r, l, null), h(t, i), h(t, o), ~a && d[a].m(o, null), s = !0;
    },
    p(g, _) {
      /*title*/
      g[1] ? c ? c.p(g, _) : (c = bo(g), c.c(), c.m(t, n)) : c && (c.d(1), c = null);
      const y = {};
      _ & /*width*/
      1 && (y.xRange = [
        0,
        /*width*/
        g[0] ?? 1
      ]), _ & /*counts*/
      32 && (y.yDomain = Ue(
        /*counts*/
        g[5].length
      )), _ & /*colorScale, data*/
      80 && (y.yRange = Array.isArray(
        /*colorScale*/
        g[4]
      ) ? (
        /*colorScale*/
        g[4]
      ) : Ue(0, 1.00001, 1 / /*data*/
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
      524416 && (y.$$scope = { dirty: _, ctx: g }), r.$set(y), (!s || _ & /*width*/
      1) && re(
        l,
        "width",
        /*width*/
        g[0] == null ? "100%" : `${/*width*/
        g[0]}px`
      );
      let S = a;
      a = m(g), a === S ? ~a && d[a].p(g, _) : (f && (ie(), L(d[S], 1, 1, () => {
        d[S] = null;
      }), oe()), ~a ? (f = d[a], f ? f.p(g, _) : (f = d[a] = u[a](g), f.c()), v(f, 1), f.m(o, null)) : f = null), (!s || _ & /*horizontalLayout*/
      4) && se(
        t,
        "flex",
        /*horizontalLayout*/
        g[2]
      );
    },
    i(g) {
      s || (v(r.$$.fragment, g), v(f), s = !0);
    },
    o(g) {
      L(r.$$.fragment, g), L(f), s = !1;
    },
    d(g) {
      g && M(t), c && c.d(), V(r), ~a && d[a].d();
    }
  };
}
function Hc(e) {
  let t, n, l, r, i, o, a, f, s = !!/*title*/
  e[1] && _o(e);
  l = new ir({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: ut(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        e[0] ?? 1
      ],
      yScale: rr(),
      yDomain: Ue(
        /*counts*/
        e[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        e[4]
      ) ? (
        /*colorScale*/
        e[4]
      ) : Ue(0, 1.00001, 1 / /*data*/
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
      $$slots: { default: [Xc] },
      $$scope: { ctx: e }
    }
  });
  const c = [Jc, Uc, Yc], u = [];
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
  return ~(o = d(e)) && (a = u[o] = c[o](e)), {
    c() {
      s && s.c(), t = P(), n = w("div"), W(l.$$.fragment), r = P(), i = w("div"), a && a.c(), re(
        n,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), re(n, "height", "6px"), b(n, "class", "rounded overflow-hidden mb-1"), b(i, "class", "text-xs text-gray-800 dark:text-gray-200");
    },
    m(m, g) {
      s && s.m(m, g), R(m, t, g), R(m, n, g), G(l, n, null), R(m, r, g), R(m, i, g), ~o && u[o].m(i, null), f = !0;
    },
    p(m, g) {
      /*title*/
      m[1] ? s ? s.p(m, g) : (s = _o(m), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null);
      const _ = {};
      g & /*width*/
      1 && (_.xRange = [
        0,
        /*width*/
        m[0] ?? 1
      ]), g & /*counts*/
      32 && (_.yDomain = Ue(
        /*counts*/
        m[5].length
      )), g & /*colorScale, data*/
      80 && (_.yRange = Array.isArray(
        /*colorScale*/
        m[4]
      ) ? (
        /*colorScale*/
        m[4]
      ) : Ue(0, 1.00001, 1 / /*data*/
      (m[6].length - 1)).map(
        /*func*/
        m[14]
      )), g & /*data*/
      64 && (_.data = /*data*/
      m[6]), g & /*hoveredIndex*/
      128 && (_.custom = { hoveredGet: (
        /*func_1*/
        m[15]
      ) }), g & /*$$scope, hoveredIndex*/
      524416 && (_.$$scope = { dirty: g, ctx: m }), l.$set(_), (!f || g & /*width*/
      1) && re(
        n,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let y = o;
      o = d(m), o === y ? ~o && u[o].p(m, g) : (a && (ie(), L(u[y], 1, 1, () => {
        u[y] = null;
      }), oe()), ~o ? (a = u[o], a ? a.p(m, g) : (a = u[o] = c[o](m), a.c()), v(a, 1), a.m(i, null)) : a = null);
    },
    i(m) {
      f || (v(l.$$.fragment, m), v(a), f = !0);
    },
    o(m) {
      L(l.$$.fragment, m), L(a), f = !1;
    },
    d(m) {
      s && s.d(m), m && M(t), m && M(n), V(l), m && M(r), m && M(i), ~o && u[o].d();
    }
  };
}
function bo(e) {
  let t, n;
  return {
    c() {
      t = w("div"), n = F(
        /*title*/
        e[1]
      ), b(t, "class", "font-bold text-xs truncate text-right"), re(t, "width", "84px");
    },
    m(l, r) {
      R(l, t, r), h(t, n);
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
  return t = new ja({}), t.$on(
    "hover",
    /*hover_handler_1*/
    e[16]
  ), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      G(t, l, r), n = !0;
    },
    p: $,
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function Fc(e) {
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
      G(t, l, r), n = !0;
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
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function Gc(e) {
  let t, n = (
    /*makeTooltipText*/
    e[9](
      /*mostCommonDatum*/
      e[8]
    ) + ""
  ), l;
  return {
    c() {
      t = new $l(!1), l = be(), t.a = l;
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
    i: $,
    o: $,
    d(r) {
      r && M(l), r && t.d();
    }
  };
}
function Vc(e) {
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
      t = new $l(!1), l = be(), t.a = l;
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
    i: $,
    o: $,
    d(r) {
      r && M(l), r && t.d();
    }
  };
}
function Wc(e) {
  let t;
  const n = (
    /*#slots*/
    e[12].caption
  ), l = Qe(
    n,
    e,
    /*$$scope*/
    e[19],
    go
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
      524288) && Oe(
        l,
        n,
        r,
        /*$$scope*/
        r[19],
        t ? je(
          n,
          /*$$scope*/
          r[19],
          i,
          Oc
        ) : xe(
          /*$$scope*/
          r[19]
        ),
        go
      );
    },
    i(r) {
      t || (v(l, r), t = !0);
    },
    o(r) {
      L(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function _o(e) {
  let t, n;
  return {
    c() {
      t = w("div"), n = F(
        /*title*/
        e[1]
      ), b(t, "class", "font-bold text-xs truncate text-right");
    },
    m(l, r) {
      R(l, t, r), h(t, n);
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
function Kc(e) {
  let t, n;
  return t = new ja({}), t.$on(
    "hover",
    /*hover_handler*/
    e[13]
  ), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      G(t, l, r), n = !0;
    },
    p: $,
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function Xc(e) {
  let t, n;
  return t = new Aa({
    props: {
      $$slots: { default: [Kc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      G(t, l, r), n = !0;
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
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function Yc(e) {
  let t, n = (
    /*makeTooltipText*/
    e[9](
      /*mostCommonDatum*/
      e[8]
    ) + ""
  ), l;
  return {
    c() {
      t = new $l(!1), l = be(), t.a = l;
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
    i: $,
    o: $,
    d(r) {
      r && M(l), r && t.d();
    }
  };
}
function Uc(e) {
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
      t = new $l(!1), l = be(), t.a = l;
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
    i: $,
    o: $,
    d(r) {
      r && M(l), r && t.d();
    }
  };
}
function Jc(e) {
  let t;
  const n = (
    /*#slots*/
    e[12].caption
  ), l = Qe(
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
      524288) && Oe(
        l,
        n,
        r,
        /*$$scope*/
        r[19],
        t ? je(
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
      t || (v(l, r), t = !0);
    },
    o(r) {
      L(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function Zc(e) {
  let t, n, l, r;
  const i = [Hc, Ic], o = [];
  function a(f, s) {
    return (
      /*noParent*/
      f[3] ? 0 : 1
    );
  }
  return t = a(e), n = o[t] = i[t](e), {
    c() {
      n.c(), l = be();
    },
    m(f, s) {
      o[t].m(f, s), R(f, l, s), r = !0;
    },
    p(f, [s]) {
      let c = t;
      t = a(f), t === c ? o[t].p(f, s) : (ie(), L(o[c], 1, 1, () => {
        o[c] = null;
      }), oe(), n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), v(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      r || (v(n), r = !0);
    },
    o(f) {
      L(n), r = !1;
    },
    d(f) {
      o[t].d(f), f && M(l);
    }
  };
}
function $c(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = Tr(l);
  let { width: o = null } = t, { title: a = null } = t, { horizontalLayout: f = !1 } = t, { noParent: s = !1 } = t, { colorScale: c = Array.from(os) } = t, { counts: u = null } = t, { order: d = [] } = t, m = [], g;
  Ce(",");
  let _ = Ce(".1~%"), y = 1;
  function S(D) {
    return `<strong>${_(D.count / y)}</strong> ${D.name}`;
  }
  let k = null;
  const p = (D) => n(7, g = D.detail ? D.detail.index : null), N = (D) => c(D), E = (D) => D.index == g, q = (D) => n(7, g = D.detail ? D.detail.index : null), Q = (D) => c(D), H = (D) => D.index == g;
  return e.$$set = (D) => {
    "width" in D && n(0, o = D.width), "title" in D && n(1, a = D.title), "horizontalLayout" in D && n(2, f = D.horizontalLayout), "noParent" in D && n(3, s = D.noParent), "colorScale" in D && n(4, c = D.colorScale), "counts" in D && n(5, u = D.counts), "order" in D && n(11, d = D.order), "$$scope" in D && n(19, r = D.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*counts, order*/
    2080)
      if (u && d.length > 0) {
        let D = Object.values(u).reduce((C, A) => C + A, 0), T = 0;
        n(6, m = d.map((C, A) => {
          let ee = T;
          return T += u[C] || 0, {
            start: ee / D,
            end: T / D,
            index: A,
            name: C,
            count: u[C] || 0
          };
        }));
      } else
        n(6, m = []);
    e.$$.dirty & /*counts*/
    32 && (u ? y = Object.values(u).reduce((D, T) => D + T, 0) : y = 1), e.$$.dirty & /*data*/
    64 && (m.length > 0 ? n(8, k = m.reduce((D, T) => D.count > T.count ? D : T, m[0])) : n(8, k = null));
  }, [
    o,
    a,
    f,
    s,
    c,
    u,
    m,
    g,
    k,
    S,
    i,
    d,
    l,
    p,
    N,
    E,
    q,
    Q,
    H,
    r
  ];
}
class e0 extends pe {
  constructor(t) {
    super(), ke(this, t, $c, Zc, ye, {
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
function ho(e) {
  let t, n, l, r;
  const i = [r0, l0, n0, t0], o = [];
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
      n && n.c(), l = be();
    },
    m(f, s) {
      ~t && o[t].m(f, s), R(f, l, s), r = !0;
    },
    p(f, s) {
      let c = t;
      t = a(f), t === c ? ~t && o[t].p(f, s) : (n && (ie(), L(o[c], 1, 1, () => {
        o[c] = null;
      }), oe()), ~t ? (n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), v(n, 1), n.m(l.parentNode, l)) : n = null);
    },
    i(f) {
      r || (v(n), r = !0);
    },
    o(f) {
      L(n), r = !1;
    },
    d(f) {
      ~t && o[t].d(f), f && M(l);
    }
  };
}
function t0(e) {
  let t, n;
  return t = new e0({
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
      G(t, l, r), n = !0;
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
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function n0(e) {
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
      G(t, l, r), n = !0;
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
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function l0(e) {
  let t, n;
  return t = new Br({
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
      $$slots: { caption: [i0] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      G(t, l, r), n = !0;
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
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function r0(e) {
  let t, n;
  return t = new Br({
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
      $$slots: { caption: [o0] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      G(t, l, r), n = !0;
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
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function i0(e) {
  let t, n, l = Ce(",")(
    /*values*/
    e[0].count ?? 0
  ) + "", r, i, o = Ce(",")(
    /*values*/
    e[0].total ?? 1
  ) + "", a;
  return {
    c() {
      t = w("span"), n = w("strong"), r = F(l), i = F(`
        / `), a = F(o), b(t, "slot", "caption");
    },
    m(f, s) {
      R(f, t, s), h(t, n), h(n, r), h(t, i), h(t, a);
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
function o0(e) {
  let t, n, l = Ce(".1%")(
    /*values*/
    e[0].mean ?? 0
  ) + "", r, i, o, a = Ce(".1%")(1 - /*values*/
  (e[0].mean ?? 0)) + "", f, s;
  return {
    c() {
      t = w("span"), n = w("strong"), r = F(l), i = F(`
        true,
        `), o = w("strong"), f = F(a), s = F(`
        false`), b(t, "slot", "caption");
    },
    m(c, u) {
      R(c, t, u), h(t, n), h(n, r), h(t, i), h(t, o), h(o, f), h(t, s);
    },
    p(c, u) {
      u & /*values*/
      1 && l !== (l = Ce(".1%")(
        /*values*/
        c[0].mean ?? 0
      ) + "") && ae(r, l), u & /*values*/
      1 && a !== (a = Ce(".1%")(1 - /*values*/
      (c[0].mean ?? 0)) + "") && ae(f, a);
    },
    d(c) {
      c && M(t);
    }
  };
}
function a0(e) {
  let t, n, l = !!/*values*/
  e[0] && ho(e);
  return {
    c() {
      l && l.c(), t = be();
    },
    m(r, i) {
      l && l.m(r, i), R(r, t, i), n = !0;
    },
    p(r, [i]) {
      /*values*/
      r[0] ? l ? (l.p(r, i), i & /*values*/
      1 && v(l, 1)) : (l = ho(r), l.c(), v(l, 1), l.m(t.parentNode, t)) : l && (ie(), L(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (v(l), n = !0);
    },
    o(r) {
      L(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && M(t);
    }
  };
}
function f0(e, t, n) {
  let l;
  x(e, Gl, (o) => n(1, l = o)), dt(() => {
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
class Wt extends pe {
  constructor(t) {
    super(), ke(this, t, f0, a0, ye, { values: 0 });
  }
}
function yo(e) {
  var j;
  let t, n, l, r, i = (
    /*values*/
    (e[0].type || "unknown") + ""
  ), o, a, f, s, c, u, d, m, g, _, y, S = (
    /*formatNumber*/
    e[4](
      /*values*/
      ((j = e[0].values) == null ? void 0 : j.length) ?? 0
    ) + ""
  ), k, p, N, E, q, Q, H, D, T, C, A, ee, J;
  u = new me({
    props: {
      icon: (
        /*showCountDetails*/
        e[1] ? Ie : kt
      ),
      class: "text-gray-500 dark:text-gray-300"
    }
  });
  let O = (
    /*showCountDetails*/
    e[1] && ko(e)
  ), I = !!/*values*/
  e[0].missingness && /*values*/
  (e[0].missingness.rate.count ?? 0) > 0 && wo(e), X = (
    /*values*/
    e[0].types && So(e)
  );
  const _e = [u0, s0], ne = [];
  function Y(te, ue) {
    var B;
    return (
      /*values*/
      (B = te[0].values) != null && B.type ? 0 : 1
    );
  }
  return T = Y(e), C = ne[T] = _e[T](e), {
    c() {
      t = w("div"), n = w("span"), n.textContent = "Type:", l = P(), r = w("span"), o = F(i), a = P(), f = w("div"), s = w("div"), c = w("button"), W(u.$$.fragment), d = P(), m = w("div"), g = w("span"), g.textContent = "Count:", _ = P(), y = w("span"), k = F(S), p = P(), N = w("span"), N.textContent = "rows", E = P(), O && O.c(), q = P(), I && I.c(), Q = P(), X && X.c(), H = P(), D = w("div"), C.c(), b(n, "class", "font-semibold"), b(r, "class", "font-mono"), b(t, "class", "text-sm text-gray-700 dark:text-gray-300 mb-4"), b(g, "class", "font-bold text-gray-900 dark:text-gray-100"), b(y, "class", "tabular-nums text-gray-700 dark:text-gray-200"), b(N, "class", "text-gray-500 dark:text-gray-400"), b(c, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), b(c, "aria-label", "Toggle count details"), b(s, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-base w-full rounded-md overflow-hidden"), b(D, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-2 text-base w-full rounded-md"), b(f, "class", "space-y-2");
    },
    m(te, ue) {
      R(te, t, ue), h(t, n), h(t, l), h(t, r), h(r, o), R(te, a, ue), R(te, f, ue), h(f, s), h(s, c), G(u, c, null), h(c, d), h(c, m), h(m, g), h(m, _), h(m, y), h(y, k), h(m, p), h(m, N), h(s, E), O && O.m(s, null), h(f, q), I && I.m(f, null), h(f, Q), X && X.m(f, null), h(f, H), h(f, D), ne[T].m(D, null), A = !0, ee || (J = U(
        c,
        "click",
        /*click_handler*/
        e[6]
      ), ee = !0);
    },
    p(te, ue) {
      var le;
      (!A || ue & /*values*/
      1) && i !== (i = /*values*/
      (te[0].type || "unknown") + "") && ae(o, i);
      const B = {};
      ue & /*showCountDetails*/
      2 && (B.icon = /*showCountDetails*/
      te[1] ? Ie : kt), u.$set(B), (!A || ue & /*values*/
      1) && S !== (S = /*formatNumber*/
      te[4](
        /*values*/
        ((le = te[0].values) == null ? void 0 : le.length) ?? 0
      ) + "") && ae(k, S), /*showCountDetails*/
      te[1] ? O ? (O.p(te, ue), ue & /*showCountDetails*/
      2 && v(O, 1)) : (O = ko(te), O.c(), v(O, 1), O.m(s, null)) : O && (ie(), L(O, 1, 1, () => {
        O = null;
      }), oe()), /*values*/
      te[0].missingness && /*values*/
      (te[0].missingness.rate.count ?? 0) > 0 ? I ? (I.p(te, ue), ue & /*values*/
      1 && v(I, 1)) : (I = wo(te), I.c(), v(I, 1), I.m(f, Q)) : I && (ie(), L(I, 1, 1, () => {
        I = null;
      }), oe()), /*values*/
      te[0].types ? X ? (X.p(te, ue), ue & /*values*/
      1 && v(X, 1)) : (X = So(te), X.c(), v(X, 1), X.m(f, H)) : X && (ie(), L(X, 1, 1, () => {
        X = null;
      }), oe());
      let fe = T;
      T = Y(te), T === fe ? ne[T].p(te, ue) : (ie(), L(ne[fe], 1, 1, () => {
        ne[fe] = null;
      }), oe(), C = ne[T], C ? C.p(te, ue) : (C = ne[T] = _e[T](te), C.c()), v(C, 1), C.m(D, null));
    },
    i(te) {
      A || (v(u.$$.fragment, te), v(O), v(I), v(X), v(C), A = !0);
    },
    o(te) {
      L(u.$$.fragment, te), L(O), L(I), L(X), L(C), A = !1;
    },
    d(te) {
      te && M(t), te && M(a), te && M(f), V(u), O && O.d(), I && I.d(), X && X.d(), ne[T].d(), ee = !1, J();
    }
  };
}
function ko(e) {
  let t, n, l = (
    /*values*/
    e[0].ids && po(e)
  );
  return {
    c() {
      t = w("div"), l && l.c(), b(t, "class", "mx-2 px-2 py-2");
    },
    m(r, i) {
      R(r, t, i), l && l.m(t, null), n = !0;
    },
    p(r, i) {
      /*values*/
      r[0].ids ? l ? (l.p(r, i), i & /*values*/
      1 && v(l, 1)) : (l = po(r), l.c(), v(l, 1), l.m(t, null)) : l && (ie(), L(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (v(l), n = !0);
    },
    o(r) {
      L(l), n = !1;
    },
    d(r) {
      r && M(t), l && l.d();
    }
  };
}
function po(e) {
  let t, n, l, r, i, o, a, f, s, c;
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
      t = w("div"), t.textContent = "Trajectories", n = P(), l = w("div"), W(r.$$.fragment), i = P(), o = w("div"), o.textContent = "Timesteps per Trajectory", a = P(), f = w("div"), W(s.$$.fragment), b(t, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), b(l, "class", "mb-2"), b(o, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), b(f, "class", "mb-2");
    },
    m(u, d) {
      R(u, t, d), R(u, n, d), R(u, l, d), G(r, l, null), R(u, i, d), R(u, o, d), R(u, a, d), R(u, f, d), G(s, f, null), c = !0;
    },
    p(u, d) {
      const m = {};
      d & /*values*/
      1 && (m.values = /*values*/
      u[0].ids.count), r.$set(m);
      const g = {};
      d & /*values*/
      1 && (g.values = /*values*/
      u[0].ids.count_per_trajectory), s.$set(g);
    },
    i(u) {
      c || (v(r.$$.fragment, u), v(s.$$.fragment, u), c = !0);
    },
    o(u) {
      L(r.$$.fragment, u), L(s.$$.fragment, u), c = !1;
    },
    d(u) {
      u && M(t), u && M(n), u && M(l), V(r), u && M(i), u && M(o), u && M(a), u && M(f), V(s);
    }
  };
}
function wo(e) {
  let t, n, l, r, i, o, a, f, s = (
    /*formatPercent*/
    e[5](
      /*values*/
      (e[0].missingness.rate.count ?? 0) / /*values*/
      (e[0].missingness.rate.total ?? 1)
    ) + ""
  ), c, u, d, m, g, _, y;
  l = new me({
    props: {
      icon: (
        /*showMissingnessDetails*/
        e[2] ? Ie : kt
      ),
      class: "text-gray-500 dark:text-gray-300"
    }
  });
  let S = (
    /*showMissingnessDetails*/
    e[2] && vo(e)
  );
  return {
    c() {
      t = w("div"), n = w("button"), W(l.$$.fragment), r = P(), i = w("div"), o = w("span"), o.textContent = "Missingness:", a = P(), f = w("span"), c = F(s), u = P(), d = w("span"), d.textContent = "of rows", m = P(), S && S.c(), b(o, "class", "font-bold text-gray-900 dark:text-gray-100"), b(f, "class", "tabular-nums text-gray-700 dark:text-gray-200"), b(d, "class", "text-gray-500 dark:text-gray-400"), b(n, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), b(n, "aria-label", "Toggle missingness details"), b(t, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-base w-full rounded-md overflow-hidden");
    },
    m(k, p) {
      R(k, t, p), h(t, n), G(l, n, null), h(n, r), h(n, i), h(i, o), h(i, a), h(i, f), h(f, c), h(i, u), h(i, d), h(t, m), S && S.m(t, null), g = !0, _ || (y = U(
        n,
        "click",
        /*click_handler_1*/
        e[7]
      ), _ = !0);
    },
    p(k, p) {
      const N = {};
      p & /*showMissingnessDetails*/
      4 && (N.icon = /*showMissingnessDetails*/
      k[2] ? Ie : kt), l.$set(N), (!g || p & /*values*/
      1) && s !== (s = /*formatPercent*/
      k[5](
        /*values*/
        (k[0].missingness.rate.count ?? 0) / /*values*/
        (k[0].missingness.rate.total ?? 1)
      ) + "") && ae(c, s), /*showMissingnessDetails*/
      k[2] ? S ? (S.p(k, p), p & /*showMissingnessDetails*/
      4 && v(S, 1)) : (S = vo(k), S.c(), v(S, 1), S.m(t, null)) : S && (ie(), L(S, 1, 1, () => {
        S = null;
      }), oe());
    },
    i(k) {
      g || (v(l.$$.fragment, k), v(S), g = !0);
    },
    o(k) {
      L(l.$$.fragment, k), L(S), g = !1;
    },
    d(k) {
      k && M(t), V(l), S && S.d(), _ = !1, y();
    }
  };
}
function vo(e) {
  let t, n, l = (
    /*values*/
    e[0].missingness && Co(e)
  );
  return {
    c() {
      t = w("div"), l && l.c(), b(t, "class", "mx-2 px-2 py-2");
    },
    m(r, i) {
      R(r, t, i), l && l.m(t, null), n = !0;
    },
    p(r, i) {
      /*values*/
      r[0].missingness ? l ? (l.p(r, i), i & /*values*/
      1 && v(l, 1)) : (l = Co(r), l.c(), v(l, 1), l.m(t, null)) : l && (ie(), L(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (v(l), n = !0);
    },
    o(r) {
      L(l), n = !1;
    },
    d(r) {
      r && M(t), l && l.d();
    }
  };
}
function Co(e) {
  let t, n, l, r, i, o, a, f, s, c;
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
      t = w("div"), t.textContent = "Number of Missing Values", n = P(), l = w("div"), W(r.$$.fragment), i = P(), o = w("div"), o.textContent = "Missingness Rate per Trajectory", a = P(), f = w("div"), W(s.$$.fragment), b(t, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), b(l, "class", "mb-2"), b(o, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), b(f, "class", "mb-2");
    },
    m(u, d) {
      R(u, t, d), R(u, n, d), R(u, l, d), G(r, l, null), R(u, i, d), R(u, o, d), R(u, a, d), R(u, f, d), G(s, f, null), c = !0;
    },
    p(u, d) {
      const m = {};
      d & /*values*/
      1 && (m.values = /*values*/
      u[0].missingness.rate), r.$set(m);
      const g = {};
      d & /*values*/
      1 && (g.values = /*values*/
      u[0].missingness.rate_per_trajectory), s.$set(g);
    },
    i(u) {
      c || (v(r.$$.fragment, u), v(s.$$.fragment, u), c = !0);
    },
    o(u) {
      L(r.$$.fragment, u), L(s.$$.fragment, u), c = !1;
    },
    d(u) {
      u && M(t), u && M(n), u && M(l), V(r), u && M(i), u && M(o), u && M(a), u && M(f), V(s);
    }
  };
}
function So(e) {
  let t, n, l, r, i, o, a, f, s = (
    /*formatNumber*/
    e[4](Object.keys(
      /*values*/
      e[0].types.counts
    ).length ?? 0) + ""
  ), c, u, d, m, g, _, y;
  l = new me({
    props: {
      icon: (
        /*showTypeDetails*/
        e[3] ? Ie : kt
      ),
      class: "text-gray-500 dark:text-gray-300"
    }
  });
  let S = (
    /*showTypeDetails*/
    e[3] && No(e)
  );
  return {
    c() {
      t = w("div"), n = w("button"), W(l.$$.fragment), r = P(), i = w("div"), o = w("span"), o.textContent = "Data Elements:", a = P(), f = w("span"), c = F(s), u = P(), d = w("span"), d.textContent = "distinct elements", m = P(), S && S.c(), b(o, "class", "font-bold text-gray-900 dark:text-gray-100"), b(f, "class", "tabular-nums text-gray-700 dark:text-gray-200"), b(d, "class", "text-gray-500 dark:text-gray-400"), b(n, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), b(n, "aria-label", "Toggle type details"), b(t, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-base w-full rounded-md");
    },
    m(k, p) {
      R(k, t, p), h(t, n), G(l, n, null), h(n, r), h(n, i), h(i, o), h(i, a), h(i, f), h(f, c), h(i, u), h(i, d), h(t, m), S && S.m(t, null), g = !0, _ || (y = U(
        n,
        "click",
        /*click_handler_2*/
        e[8]
      ), _ = !0);
    },
    p(k, p) {
      const N = {};
      p & /*showTypeDetails*/
      8 && (N.icon = /*showTypeDetails*/
      k[3] ? Ie : kt), l.$set(N), (!g || p & /*values*/
      1) && s !== (s = /*formatNumber*/
      k[4](Object.keys(
        /*values*/
        k[0].types.counts
      ).length ?? 0) + "") && ae(c, s), /*showTypeDetails*/
      k[3] ? S ? (S.p(k, p), p & /*showTypeDetails*/
      8 && v(S, 1)) : (S = No(k), S.c(), v(S, 1), S.m(t, null)) : S && (ie(), L(S, 1, 1, () => {
        S = null;
      }), oe());
    },
    i(k) {
      g || (v(l.$$.fragment, k), v(S), g = !0);
    },
    o(k) {
      L(l.$$.fragment, k), L(S), g = !1;
    },
    d(k) {
      k && M(t), V(l), S && S.d(), _ = !1, y();
    }
  };
}
function No(e) {
  let t, n, l;
  return n = new Wt({
    props: { values: (
      /*values*/
      e[0].types
    ) }
  }), {
    c() {
      t = w("div"), W(n.$$.fragment), b(t, "class", "mx-2 px-2 py-2");
    },
    m(r, i) {
      R(r, t, i), G(n, t, null), l = !0;
    },
    p(r, i) {
      const o = {};
      i & /*values*/
      1 && (o.values = /*values*/
      r[0].types), n.$set(o);
    },
    i(r) {
      l || (v(n.$$.fragment, r), l = !0);
    },
    o(r) {
      L(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && M(t), V(n);
    }
  };
}
function s0(e) {
  let t;
  return {
    c() {
      t = w("div"), t.innerHTML = 'Values: <span class="font-normal text-gray-500 dark:text-gray-400">none</span>', b(t, "class", "text-sm font-bold text-gray-900 dark:text-gray-100 mr-2");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: $,
    i: $,
    o: $,
    d(n) {
      n && M(t);
    }
  };
}
function u0(e) {
  let t, n, l, r;
  return l = new Wt({
    props: { values: (
      /*values*/
      e[0].values
    ) }
  }), {
    c() {
      t = w("div"), t.textContent = "Values:", n = P(), W(l.$$.fragment), b(t, "class", "mb-2 text-sm font-bold text-gray-900 dark:text-gray-100 mr-2");
    },
    m(i, o) {
      R(i, t, o), R(i, n, o), G(l, i, o), r = !0;
    },
    p(i, o) {
      const a = {};
      o & /*values*/
      1 && (a.values = /*values*/
      i[0].values), l.$set(a);
    },
    i(i) {
      r || (v(l.$$.fragment, i), r = !0);
    },
    o(i) {
      L(l.$$.fragment, i), r = !1;
    },
    d(i) {
      i && M(t), i && M(n), V(l, i);
    }
  };
}
function c0(e) {
  let t, n, l = (
    /*values*/
    e[0] && /*values*/
    (e[0].ids || /*values*/
    e[0].missingness || /*values*/
    e[0].values) && yo(e)
  );
  return {
    c() {
      l && l.c(), t = be();
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
      1 && v(l, 1)) : (l = yo(r), l.c(), v(l, 1), l.m(t.parentNode, t)) : l && (ie(), L(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (v(l), n = !0);
    },
    o(r) {
      L(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && M(t);
    }
  };
}
function d0(e, t, n) {
  let { values: l = null } = t, r = !1, i = !1, o = !1;
  const a = Ce(","), f = Ce(".2~%"), s = () => n(1, r = !r), c = () => n(2, i = !i), u = () => n(3, o = !o);
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
    c,
    u
  ];
}
class Oa extends pe {
  constructor(t) {
    super(), ke(this, t, d0, c0, ye, { values: 0 });
  }
}
function Mo(e, t, n) {
  const l = e.slice();
  return l[4] = t[n], l;
}
function zo(e) {
  let t, n, l, r, i;
  n = new Oa({
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
      t = w("div"), W(n.$$.fragment), l = P(), o && o.c(), r = be(), b(t, "class", "p-4 border-t border-gray-200 dark:border-gray-700");
    },
    m(a, f) {
      R(a, t, f), G(n, t, null), R(a, l, f), o && o.m(a, f), R(a, r, f), i = !0;
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
      i || (v(n.$$.fragment, a), i = !0);
    },
    o(a) {
      L(n.$$.fragment, a), i = !1;
    },
    d(a) {
      a && M(t), V(n), a && M(l), o && o.d(a), a && M(r);
    }
  };
}
function Ro(e) {
  let t, n, l, r = (
    /*data*/
    e[1].dataset_queries
  ), i = [];
  for (let o = 0; o < r.length; o += 1)
    i[o] = Lo(Mo(e, r, o));
  return {
    c() {
      t = w("div"), n = w("div"), n.textContent = "SQL Queries", l = P();
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      b(n, "class", "text-xs font-semibold text-gray-500 mb-1 uppercase"), b(t, "class", "p-4 border-t border-gray-200 dark:border-gray-700");
    },
    m(o, a) {
      R(o, t, a), h(t, n), h(t, l);
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
          const s = Mo(o, r, f);
          i[f] ? i[f].p(s, a) : (i[f] = Lo(s), i[f].c(), i[f].m(t, null));
        }
        for (; f < i.length; f += 1)
          i[f].d(1);
        i.length = r.length;
      }
    },
    d(o) {
      o && M(t), De(i, o);
    }
  };
}
function Lo(e) {
  let t, n = (
    /*sql*/
    e[4] + ""
  ), l;
  return {
    c() {
      t = w("pre"), l = F(n), b(t, "class", "bg-white dark:bg-gray-900 text-xs font-mono p-2 rounded");
    },
    m(r, i) {
      R(r, t, i), h(t, l);
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
function g0(e) {
  let t, n, l, r, i, o, a, f, s, c;
  o = new me({
    props: {
      icon: (
        /*isExpanded*/
        e[2] ? Fl : Ie
      ),
      class: "text-gray-600 dark:text-gray-300"
    }
  });
  let u = (
    /*isExpanded*/
    e[2] && zo(e)
  );
  return {
    c() {
      t = w("div"), n = w("button"), l = w("span"), r = F(
        /*queryText*/
        e[0]
      ), i = P(), W(o.$$.fragment), a = P(), u && u.c(), b(l, "class", "text-sm font-mono text-gray-700 dark:text-gray-300 truncate flex-1"), b(n, "class", "w-full px-3 py-2 text-left flex items-center justify-between bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none"), b(t, "class", "border border-gray-300 dark:border-gray-600 rounded-md mb-2 overflow-hidden");
    },
    m(d, m) {
      R(d, t, m), h(t, n), h(n, l), h(l, r), h(n, i), G(o, n, null), h(t, a), u && u.m(t, null), f = !0, s || (c = U(
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
      d[2] ? Fl : Ie), o.$set(g), /*isExpanded*/
      d[2] ? u ? (u.p(d, m), m & /*isExpanded*/
      4 && v(u, 1)) : (u = zo(d), u.c(), v(u, 1), u.m(t, null)) : u && (ie(), L(u, 1, 1, () => {
        u = null;
      }), oe());
    },
    i(d) {
      f || (v(o.$$.fragment, d), v(u), f = !0);
    },
    o(d) {
      L(o.$$.fragment, d), L(u), f = !1;
    },
    d(d) {
      d && M(t), V(o), u && u.d(), s = !1, c();
    }
  };
}
function m0(e, t, n) {
  let { queryText: l } = t, { data: r } = t, i = !1;
  function o() {
    n(2, i = !i);
  }
  return e.$$set = (a) => {
    "queryText" in a && n(0, l = a.queryText), "data" in a && n(1, r = a.data);
  }, [l, r, i, o];
}
class b0 extends pe {
  constructor(t) {
    super(), ke(this, t, m0, g0, ye, { queryText: 0, data: 1 });
  }
}
function qo(e, t, n) {
  const l = e.slice();
  return l[5] = t[n][0], l[6] = t[n][1], l;
}
function Eo(e) {
  let t, n, l, r, i;
  const o = [h0, _0], a = [];
  function f(s, c) {
    return c & /*subqueries*/
    4 && (n = null), n == null && (n = Object.keys(
      /*subqueries*/
      s[2]
    ).length > 0), n ? 0 : 1;
  }
  return l = f(e, -1), r = a[l] = o[l](e), {
    c() {
      t = w("div"), r.c(), b(t, "class", "space-y-2 mt-3");
    },
    m(s, c) {
      R(s, t, c), a[l].m(t, null), i = !0;
    },
    p(s, c) {
      let u = l;
      l = f(s, c), l === u ? a[l].p(s, c) : (ie(), L(a[u], 1, 1, () => {
        a[u] = null;
      }), oe(), r = a[l], r ? r.p(s, c) : (r = a[l] = o[l](s), r.c()), v(r, 1), r.m(t, null));
    },
    i(s) {
      i || (v(r), i = !0);
    },
    o(s) {
      L(r), i = !1;
    },
    d(s) {
      s && M(t), a[l].d();
    }
  };
}
function _0(e) {
  let t;
  return {
    c() {
      t = w("div"), t.textContent = "No subqueries yet", b(t, "class", "text-center py-8 text-gray-900 dark:text-gray-100");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: $,
    i: $,
    o: $,
    d(n) {
      n && M(t);
    }
  };
}
function h0(e) {
  let t, n, l = Object.entries(
    /*subqueries*/
    e[2]
  ), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = Do(qo(e, l, o));
  const i = (o) => L(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      t = be();
    },
    m(o, a) {
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(o, a);
      R(o, t, a), n = !0;
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
          const s = qo(o, l, f);
          r[f] ? (r[f].p(s, a), v(r[f], 1)) : (r[f] = Do(s), r[f].c(), v(r[f], 1), r[f].m(t.parentNode, t));
        }
        for (ie(), f = l.length; f < r.length; f += 1)
          i(f);
        oe();
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
        L(r[a]);
      n = !1;
    },
    d(o) {
      De(r, o), o && M(t);
    }
  };
}
function Do(e) {
  let t, n;
  return t = new b0({
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
      G(t, l, r), n = !0;
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
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function y0(e) {
  let t, n, l, r, i, o, a, f, s, c, u;
  o = new me({
    props: {
      icon: (
        /*enabled*/
        e[0] ? Fl : Ie
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
      t = w("div"), n = w("button"), l = w("h3"), l.textContent = "Subqueries", r = P(), i = w("div"), W(o.$$.fragment), a = P(), d && d.c(), b(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100"), b(i, "class", "p-2 text-gray-800 dark:text-gray-200"), b(n, "class", "block flex items-center justify-between mb-2 bg-transparent hover:opacity-50"), b(t, "class", f = "p-2 mb-0 border-0 rounded-none " + /*width*/
      e[1] + " transition-colors duration-200"), se(t, "opacity-50", Object.keys(
        /*subqueries*/
        e[2]
      ).length == 0);
    },
    m(m, g) {
      R(m, t, g), h(t, n), h(n, l), h(n, r), h(n, i), G(o, i, null), h(t, a), d && d.m(t, null), s = !0, c || (u = U(
        n,
        "click",
        /*click_handler*/
        e[4]
      ), c = !0);
    },
    p(m, [g]) {
      const _ = {};
      g & /*enabled*/
      1 && (_.icon = /*enabled*/
      m[0] ? Fl : Ie), o.$set(_), /*enabled*/
      m[0] ? d ? (d.p(m, g), g & /*enabled*/
      1 && v(d, 1)) : (d = Eo(m), d.c(), v(d, 1), d.m(t, null)) : d && (ie(), L(d, 1, 1, () => {
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
      s || (v(o.$$.fragment, m), v(d), s = !0);
    },
    o(m) {
      L(o.$$.fragment, m), L(d), s = !1;
    },
    d(m) {
      m && M(t), V(o), d && d.d(), c = !1, u();
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
class p0 extends pe {
  constructor(t) {
    super(), ke(this, t, k0, y0, ye, {
      width: 1,
      enabled: 0,
      subqueries: 2,
      idsLength: 3
    });
  }
}
function w0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xa = { exports: {} };
(function(e, t) {
  (function() {
    function n(i, o, a) {
      var f = null, s = null, c = null, u = null;
      if (a = a || "", !o.length)
        return a || "";
      if (i.some(function(m) {
        m.name;
        var g = m.match instanceof RegExp, _ = g ? m.match : m.match[0], y = g ? null : m.match[1] || null, S = g ? null : m.match[2] || null;
        return f = o.match(_), s = f ? m.name : null, c = y, u = S, !!f;
      }), f) {
        var d = '<span class="' + s + '">' + f[1] + "</span>";
        return c && (d = c + d), u && (d = d + u), n(i, o.slice(f[0].length), a + d);
      } else
        return n(i, o.slice(1), a + o[0]);
    }
    function l(i) {
      var o = i.replace(/^\n+|\n+\s+$/g, ""), a = o.match(/^\s+/);
      if (!a)
        return o;
      var f = o.split(`
`), s = f.map(function(c, u) {
        return !c || /^\s+$/.test(c) ? c : c.replace(a[0], "");
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
        var c = (typeof i.patterns == "function" ? i.patterns(s) : i.patterns) || {}, u = s.innerText, d = l(u), m = a(n(c, f(d)));
        i.linenums && (m = m.split(`
`).map(function(g, _) {
          if (!_)
            return g;
          var y = _ - 1 + "";
          return y.length < 2 && (y = "0" + y), '<span class="linenum">' + y + "</span> " + g;
        }).join(`
`)), s.innerHTML = m;
      });
    }
    e.exports = r;
  })();
})(xa);
var v0 = xa.exports;
const Ia = /* @__PURE__ */ w0(v0), Ha = [
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
function Ba(e) {
  return e = e.replaceAll(/<([A-z]+?)>/g, "####TOKEN####$1####ENDTOKEN####"), e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function C0(e) {
  let t, n;
  return t = new me({ props: { icon: er } }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      G(t, l, r), n = !0;
    },
    p: $,
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function S0(e) {
  let t, n;
  return t = new me({ props: { icon: Rf } }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      G(t, l, r), n = !0;
    },
    p: $,
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function N0(e) {
  let t, n, l, r, i, o, a, f, s, c, u, d, m, g;
  const _ = [S0, C0], y = [];
  function S(k, p) {
    return (
      /*copied*/
      k[3] ? 0 : 1
    );
  }
  return r = S(e), i = y[r] = _[r](e), f = new me({ props: { icon: ya } }), {
    c() {
      t = w("div"), n = w("div"), l = w("button"), i.c(), o = P(), a = w("button"), W(f.$$.fragment), s = P(), c = w("code"), u = F(
        /*content*/
        e[0]
      ), b(l, "class", "p-2 hover:opacity-50 text-gray-700 dark:text-gray-200 text-sm"), b(l, "title", "Copy"), b(a, "class", "p-2 hover:opacity-50 text-gray-700 dark:text-gray-200 text-sm"), b(a, "title", "Run this query"), b(n, "class", "flex items-center absolute right-0 top-0 mr-2 mt-2"), b(c, "class", "font-mono whitespace-pre-line"), b(
        c,
        "id",
        /*highlightedViewID*/
        e[4]
      ), b(t, "class", "bg-gray-100 dark:bg-gray-800 rounded-md my-2 p-4 pr-12 relative text-gray-900 dark:text-gray-100");
    },
    m(k, p) {
      R(k, t, p), h(t, n), h(n, l), y[r].m(l, null), h(n, o), h(n, a), G(f, a, null), h(t, s), h(t, c), h(c, u), e[8](c), d = !0, m || (g = [
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
    p(k, [p]) {
      let N = r;
      r = S(k), r === N ? y[r].p(k, p) : (ie(), L(y[N], 1, 1, () => {
        y[N] = null;
      }), oe(), i = y[r], i ? i.p(k, p) : (i = y[r] = _[r](k), i.c()), v(i, 1), i.m(l, null)), (!d || p & /*content*/
      1) && ae(
        u,
        /*content*/
        k[0]
      );
    },
    i(k) {
      d || (v(i), v(f.$$.fragment, k), d = !0);
    },
    o(k) {
      L(i), L(f.$$.fragment, k), d = !1;
    },
    d(k) {
      k && M(t), y[r].d(), V(f), e[8](null), m = !1, we(g);
    }
  };
}
function M0(e, t, n) {
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
  const s = () => f(l), c = () => r(l);
  function u(d) {
    Me[d ? "unshift" : "push"](() => {
      o = d, n(2, o), n(0, l), n(4, i);
    });
  }
  return e.$$set = (d) => {
    "content" in d && n(0, l = d.content), "onRun" in d && n(1, r = d.onRun);
  }, e.$$.update = () => {
    e.$$.dirty & /*highlightView, content*/
    5 && o && l && (n(2, o.innerText = Ba(l), o), Ia({
      selector: `#${i}`,
      patterns: Ha
    }));
  }, [
    l,
    r,
    o,
    a,
    i,
    f,
    s,
    c,
    u
  ];
}
class z0 extends pe {
  constructor(t) {
    super(), ke(this, t, M0, N0, ye, { content: 0, onRun: 1 });
  }
}
function Ao(e, t, n) {
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
      t = w("div"), b(t, "class", "leading-relaxed mb-2");
    },
    m(l, r) {
      R(l, t, r), t.innerHTML = n;
    },
    p(l, r) {
      r & /*blocks*/
      8 && n !== (n = Qo(
        /*block*/
        l[7].content
      ) + "") && (t.innerHTML = n);
    },
    i: $,
    o: $,
    d(l) {
      l && M(t);
    }
  };
}
function L0(e) {
  let t, n;
  return t = new z0({
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
      G(t, l, r), n = !0;
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
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function To(e) {
  let t, n, l, r;
  const i = [L0, R0], o = [];
  function a(f, s) {
    return (
      /*block*/
      f[7].type === "code" ? 0 : 1
    );
  }
  return t = a(e), n = o[t] = i[t](e), {
    c() {
      n.c(), l = be();
    },
    m(f, s) {
      o[t].m(f, s), R(f, l, s), r = !0;
    },
    p(f, s) {
      let c = t;
      t = a(f), t === c ? o[t].p(f, s) : (ie(), L(o[c], 1, 1, () => {
        o[c] = null;
      }), oe(), n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), v(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      r || (v(n), r = !0);
    },
    o(f) {
      L(n), r = !1;
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
      t = w("div"), n = w("a"), r = F(l), b(n, "class", "text-blue-600 dark:text-blue-400 hover:opacity-50 text-sm"), b(n, "href", "#");
    },
    m(a, f) {
      R(a, t, f), h(t, n), h(n, r), i || (o = U(
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
function q0(e) {
  let t, n, l, r = (
    /*blocks*/
    e[3]
  ), i = [];
  for (let f = 0; f < r.length; f += 1)
    i[f] = To(Ao(e, r, f));
  const o = (f) => L(i[f], 1, 1, () => {
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
      t = P(), a && a.c(), n = be();
    },
    m(f, s) {
      for (let c = 0; c < i.length; c += 1)
        i[c] && i[c].m(f, s);
      R(f, t, s), a && a.m(f, s), R(f, n, s), l = !0;
    },
    p(f, [s]) {
      if (s & /*blocks, onRun, formatMarkdown*/
      9) {
        r = /*blocks*/
        f[3];
        let c;
        for (c = 0; c < r.length; c += 1) {
          const u = Ao(f, r, c);
          i[c] ? (i[c].p(u, s), v(i[c], 1)) : (i[c] = To(u), i[c].c(), v(i[c], 1), i[c].m(t.parentNode, t));
        }
        for (ie(), c = r.length; c < i.length; c += 1)
          o(c);
        oe();
      }
      /*collapsible*/
      f[2] ? a ? a.p(f, s) : (a = Po(f), a.c(), a.m(n.parentNode, n)) : a && (a.d(1), a = null);
    },
    i(f) {
      if (!l) {
        for (let s = 0; s < r.length; s += 1)
          v(i[s]);
        l = !0;
      }
    },
    o(f) {
      i = i.filter(Boolean);
      for (let s = 0; s < i.length; s += 1)
        L(i[s]);
      l = !1;
    },
    d(f) {
      De(i, f), f && M(t), a && a.d(f), f && M(n);
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
function D0(e, t, n) {
  let l, { text: r } = t, { collapseLength: i = null } = t, { onRun: o = () => {
  } } = t, a = [], f = !1;
  const s = () => n(1, f = !f);
  return e.$$set = (c) => {
    "text" in c && n(4, r = c.text), "collapseLength" in c && n(5, i = c.collapseLength), "onRun" in c && n(0, o = c.onRun);
  }, e.$$.update = () => {
    e.$$.dirty & /*collapseLength, text*/
    48 && n(2, l = !!i && r.length > i), e.$$.dirty & /*text*/
    16 && n(1, f = !1), e.$$.dirty & /*collapsible, collapsed, text, collapseLength*/
    54 && n(3, a = E0(l && f ? r.slice(0, i) + "..." : r));
  }, [o, f, l, a, r, i, s];
}
class Fa extends pe {
  constructor(t) {
    super(), ke(this, t, D0, q0, ye, { text: 4, collapseLength: 5, onRun: 0 });
  }
}
function jo(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = w("div"), n = w("h3"), n.textContent = "Query Error", l = P(), r = w("div"), i = F(
        /*queryError*/
        e[3]
      ), b(n, "class", "text-lg font-medium text-red-700 dark:text-red-100 mb-2"), b(r, "class", "text-sm font-mono text-gray-800 dark:text-gray-100"), b(t, "class", "bg-red-50 dark:bg-red-800/40 rounded-lg border border-red-200 dark:border-red-400 p-4 mb-4");
    },
    m(o, a) {
      R(o, t, a), h(t, n), h(t, l), h(t, r), h(r, i);
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
function Oo(e) {
  let t, n, l, r, i, o, a, f, s, c, u, d, m;
  o = new me({
    props: {
      icon: _a,
      class: "inline mr-2"
    }
  });
  function g(k, p) {
    return (
      /*queryError*/
      k[3] ? T0 : A0
    );
  }
  let _ = g(e), y = _(e), S = (
    /*llmExplanation*/
    e[8] && xo(e)
  );
  return {
    c() {
      t = w("div"), n = w("div"), l = w("h3"), l.textContent = "Explanation", r = P(), i = w("button"), W(o.$$.fragment), a = P(), y.c(), s = P(), S && S.c(), b(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100"), b(i, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50"), i.disabled = f = (!/*values*/
      e[4] || Object.keys(
        /*values*/
        e[4]
      ).length == 0) && !/*queryError*/
      e[3], b(n, "class", "flex items-center justify-between mb-2"), b(t, "class", c = "px-2 mb-4 " + /*width*/
      e[6] + " dark:text-gray-100"), se(t, "opacity-50", (!/*values*/
      e[4] || Object.keys(
        /*values*/
        e[4]
      ).length == 0) && !/*queryError*/
      e[3]);
    },
    m(k, p) {
      R(k, t, p), h(t, n), h(n, l), h(n, r), h(n, i), G(o, i, null), h(i, a), y.m(i, null), h(t, s), S && S.m(t, null), u = !0, d || (m = U(
        i,
        "click",
        /*click_handler*/
        e[9]
      ), d = !0);
    },
    p(k, p) {
      _ !== (_ = g(k)) && (y.d(1), y = _(k), y && (y.c(), y.m(i, null))), (!u || p & /*values, queryError*/
      24 && f !== (f = (!/*values*/
      k[4] || Object.keys(
        /*values*/
        k[4]
      ).length == 0) && !/*queryError*/
      k[3])) && (i.disabled = f), /*llmExplanation*/
      k[8] ? S ? (S.p(k, p), p & /*llmExplanation*/
      256 && v(S, 1)) : (S = xo(k), S.c(), v(S, 1), S.m(t, null)) : S && (ie(), L(S, 1, 1, () => {
        S = null;
      }), oe()), (!u || p & /*width*/
      64 && c !== (c = "px-2 mb-4 " + /*width*/
      k[6] + " dark:text-gray-100")) && b(t, "class", c), (!u || p & /*width, values, Object, queryError*/
      88) && se(t, "opacity-50", (!/*values*/
      k[4] || Object.keys(
        /*values*/
        k[4]
      ).length == 0) && !/*queryError*/
      k[3]);
    },
    i(k) {
      u || (v(o.$$.fragment, k), v(S), u = !0);
    },
    o(k) {
      L(o.$$.fragment, k), L(S), u = !1;
    },
    d(k) {
      k && M(t), V(o), y.d(), S && S.d(), d = !1, m();
    }
  };
}
function A0(e) {
  let t;
  return {
    c() {
      t = F("Explain");
    },
    m(n, l) {
      R(n, t, l);
    },
    d(n) {
      n && M(t);
    }
  };
}
function T0(e) {
  let t;
  return {
    c() {
      t = F("Explain and Fix");
    },
    m(n, l) {
      R(n, t, l);
    },
    d(n) {
      n && M(t);
    }
  };
}
function xo(e) {
  let t, n;
  return t = new Fa({
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
      G(t, l, r), n = !0;
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
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function P0(e) {
  let t;
  return {
    c() {
      t = w("div"), t.textContent = "No query results", b(t, "class", "text-center py-8 text-gray-900 dark:text-gray-100");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: $,
    i: $,
    o: $,
    d(n) {
      n && M(t);
    }
  };
}
function Q0(e) {
  let t, n;
  return t = new Oa({ props: { values: (
    /*values*/
    e[4]
  ) } }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      G(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*values*/
      16 && (i.values = /*values*/
      l[4]), t.$set(i);
    },
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function j0(e) {
  let t, n, l, r, i, o, a, f, s, c, u, d, m, g = !!/*queryError*/
  e[3] && jo(e), _ = (
    /*llmAvailable*/
    e[7] && Oo(e)
  );
  const y = [Q0, P0], S = [];
  function k(p, N) {
    return N & /*values*/
    16 && (a = null), a == null && (a = !!(/*values*/
    p[4] && Object.keys(
      /*values*/
      p[4]
    ).length > 0)), a ? 0 : 1;
  }
  return f = k(e, -1), s = S[f] = y[f](e), d = new p0({
    props: {
      width: "w-full",
      subqueries: (
        /*subqueries*/
        e[5]
      )
    }
  }), {
    c() {
      t = w("div"), g && g.c(), n = P(), _ && _.c(), l = P(), r = w("div"), i = w("div"), i.innerHTML = '<h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Query Result</h3>', o = P(), s.c(), u = P(), W(d.$$.fragment), b(i, "class", "flex items-center justify-between mb-2"), b(r, "class", c = "px-2 mb-4 " + /*width*/
      e[6] + " dark:text-gray-100"), se(r, "opacity-50", !/*values*/
      e[4] || Object.keys(
        /*values*/
        e[4]
      ).length == 0), b(t, "class", "flex-auto p-4 h-full overflow-auto");
    },
    m(p, N) {
      R(p, t, N), g && g.m(t, null), h(t, n), _ && _.m(t, null), h(t, l), h(t, r), h(r, i), h(r, o), S[f].m(r, null), h(t, u), G(d, t, null), m = !0;
    },
    p(p, [N]) {
      /*queryError*/
      p[3] ? g ? g.p(p, N) : (g = jo(p), g.c(), g.m(t, n)) : g && (g.d(1), g = null), /*llmAvailable*/
      p[7] ? _ ? (_.p(p, N), N & /*llmAvailable*/
      128 && v(_, 1)) : (_ = Oo(p), _.c(), v(_, 1), _.m(t, l)) : _ && (ie(), L(_, 1, 1, () => {
        _ = null;
      }), oe());
      let E = f;
      f = k(p, N), f === E ? S[f].p(p, N) : (ie(), L(S[E], 1, 1, () => {
        S[E] = null;
      }), oe(), s = S[f], s ? s.p(p, N) : (s = S[f] = y[f](p), s.c()), v(s, 1), s.m(r, null)), (!m || N & /*width*/
      64 && c !== (c = "px-2 mb-4 " + /*width*/
      p[6] + " dark:text-gray-100")) && b(r, "class", c), (!m || N & /*width, values, Object*/
      80) && se(r, "opacity-50", !/*values*/
      p[4] || Object.keys(
        /*values*/
        p[4]
      ).length == 0);
      const q = {};
      N & /*subqueries*/
      32 && (q.subqueries = /*subqueries*/
      p[5]), d.$set(q);
    },
    i(p) {
      m || (v(_), v(s), v(d.$$.fragment, p), m = !0);
    },
    o(p) {
      L(_), L(s), L(d.$$.fragment, p), m = !1;
    },
    d(p) {
      p && M(t), g && g.d(), _ && _.d(), S[f].d(), V(d);
    }
  };
}
function O0(e, t, n) {
  let { textInput: l = "" } = t, { onRun: r = () => {
  } } = t, { onExplain: i = () => {
  } } = t, { queryError: o = "" } = t, { values: a = {} } = t, { subqueries: f = {} } = t, { width: s = "w-full" } = t, { llmAvailable: c = !1 } = t, { llmExplanation: u = "" } = t;
  const d = () => {
    i();
  }, m = (g) => {
    n(0, l = g), r();
  };
  return e.$$set = (g) => {
    "textInput" in g && n(0, l = g.textInput), "onRun" in g && n(1, r = g.onRun), "onExplain" in g && n(2, i = g.onExplain), "queryError" in g && n(3, o = g.queryError), "values" in g && n(4, a = g.values), "subqueries" in g && n(5, f = g.subqueries), "width" in g && n(6, s = g.width), "llmAvailable" in g && n(7, c = g.llmAvailable), "llmExplanation" in g && n(8, u = g.llmExplanation);
  }, [
    l,
    r,
    i,
    o,
    a,
    f,
    s,
    c,
    u,
    d,
    m
  ];
}
class x0 extends pe {
  constructor(t) {
    super(), ke(this, t, O0, j0, ye, {
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
function Io(e) {
  let t, n, l, r, i, o = (
    /*message*/
    (e[1] || "Loading...") + ""
  ), a, f, s;
  return {
    c() {
      t = w("div"), n = w("div"), l = w("div"), r = w("div"), i = w("p"), a = F(o), f = P(), s = w("div"), s.innerHTML = '<div class="bg-blue-600 h-2 rounded-full animate-pulse" style="width: 100%"></div>', b(i, "class", "text-sm font-medium text-gray-900 dark:text-gray-100"), b(r, "class", "flex-1"), b(s, "class", "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"), b(l, "class", "space-y-3"), b(n, "class", "bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 w-1/2 p-6"), b(t, "class", "absolute top-0 left-0 right-0 top-0 bottom-0 bg-white/80 dark:bg-gray-900/80 flex items-center justify-center z-80");
    },
    m(c, u) {
      R(c, t, u), h(t, n), h(n, l), h(l, r), h(r, i), h(i, a), h(l, f), h(l, s);
    },
    p(c, u) {
      u & /*message*/
      2 && o !== (o = /*message*/
      (c[1] || "Loading...") + "") && ae(a, o);
    },
    d(c) {
      c && M(t);
    }
  };
}
function I0(e) {
  let t, n = (
    /*isLoading*/
    e[0] && Io(e)
  );
  return {
    c() {
      n && n.c(), t = be();
    },
    m(l, r) {
      n && n.m(l, r), R(l, t, r);
    },
    p(l, [r]) {
      /*isLoading*/
      l[0] ? n ? n.p(l, r) : (n = Io(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: $,
    o: $,
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
class B0 extends pe {
  constructor(t) {
    super(), ke(this, t, H0, I0, ye, { isLoading: 0, message: 1, width: 2 });
  }
}
function Ho(e, t, n) {
  const l = e.slice();
  return l[7] = t[n], l[9] = n, l;
}
function Bo(e) {
  let t, n, l, r, i, o, a, f, s, c, u, d, m, g;
  s = new me({ props: { icon: Nf } });
  function _(k, p) {
    return (
      /*history*/
      k[1].length === 0 ? G0 : F0
    );
  }
  let y = _(e), S = y(e);
  return {
    c() {
      t = w("div"), n = P(), l = w("div"), r = w("div"), i = w("div"), o = w("h3"), o.textContent = "Query History", a = P(), f = w("button"), W(s.$$.fragment), c = P(), u = w("div"), S.c(), b(t, "class", "absolute top-0 left-0 w-full h-full bg-white/80 z-40"), b(o, "class", "font-medium text-gray-900"), b(f, "class", "text-gray-600 dark:text-gray-300 hover:opacity-50 transition-colors p-2"), b(f, "title", "Close history"), b(i, "class", "flex items-center justify-between px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white"), b(u, "class", "max-h-80 overflow-y-auto svelte-6p3axr"), b(r, "class", "bg-white dark:bg-gray-800 border-2 border-gray-300/50 dark:border-gray-600/2 rounded-lg w-2/3 h-2/3 overflow-auto pointer-events-auto"), b(l, "class", "absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 pointer-events-none");
    },
    m(k, p) {
      R(k, t, p), R(k, n, p), R(k, l, p), h(l, r), h(r, i), h(i, o), h(i, a), h(i, f), G(s, f, null), h(r, c), h(r, u), S.m(u, null), d = !0, m || (g = [
        U(t, "click", qe(
          /*handleClickOutside*/
          e[4]
        )),
        U(f, "click", function() {
          $e(
            /*onClose*/
            e[2]
          ) && e[2].apply(this, arguments);
        })
      ], m = !0);
    },
    p(k, p) {
      e = k, y === (y = _(e)) && S ? S.p(e, p) : (S.d(1), S = y(e), S && (S.c(), S.m(u, null)));
    },
    i(k) {
      d || (v(s.$$.fragment, k), d = !0);
    },
    o(k) {
      L(s.$$.fragment, k), d = !1;
    },
    d(k) {
      k && M(t), k && M(n), k && M(l), V(s), S.d(), m = !1, we(g);
    }
  };
}
function F0(e) {
  let t, n = (
    /*history*/
    e[1]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Go(Ho(e, n, r));
  return {
    c() {
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      t = be();
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
          const a = Ho(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = Go(a), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(r) {
      De(l, r), r && M(t);
    }
  };
}
function G0(e) {
  let t;
  return {
    c() {
      t = w("div"), t.textContent = "No query history yet", b(t, "class", "p-4 text-center text-gray-500 dark:text-gray-400 text-sm");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: $,
    d(n) {
      n && M(t);
    }
  };
}
function V0(e) {
  let t, n = (
    /*historyItem*/
    (e[7].query || "No query extracted") + ""
  ), l;
  return {
    c() {
      t = w("span"), l = F(n), b(t, "class", "font-mono");
    },
    m(r, i) {
      R(r, t, i), h(t, l);
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
function W0(e) {
  let t = (
    /*historyItem*/
    e[7].question + ""
  ), n;
  return {
    c() {
      n = F(t);
    },
    m(l, r) {
      R(l, n, r);
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
function Fo(e) {
  let t, n = (
    /*historyItem*/
    e[7].answer + ""
  ), l;
  return {
    c() {
      t = w("p"), l = F(n), b(t, "class", "text-xs text-gray-600 dark:text-gray-300 line-clamp-2 mt-2 svelte-6p3axr");
    },
    m(r, i) {
      R(r, t, i), h(t, l);
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
function Go(e) {
  let t, n, l, r, i, o = Vo(
    /*historyItem*/
    e[7].timestamp
  ) + "", a, f, s, c, u;
  function d(S, k) {
    return (
      /*historyItem*/
      S[7].question ? W0 : V0
    );
  }
  let m = d(e), g = m(e), _ = (
    /*historyItem*/
    e[7].answer && Fo(e)
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
      t = w("div"), n = w("div"), l = w("h4"), g.c(), r = P(), i = w("span"), a = F(o), f = P(), _ && _.c(), s = P(), b(l, "class", "text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-2 flex-1 svelte-6p3axr"), b(i, "class", "text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0"), b(n, "class", "flex items-start justify-between"), b(t, "class", "p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors");
    },
    m(S, k) {
      R(S, t, k), h(t, n), h(n, l), g.m(l, null), h(n, r), h(n, i), h(i, a), h(t, f), _ && _.m(t, null), h(t, s), c || (u = U(t, "click", y), c = !0);
    },
    p(S, k) {
      e = S, m === (m = d(e)) && g ? g.p(e, k) : (g.d(1), g = m(e), g && (g.c(), g.m(l, null))), k & /*history*/
      2 && o !== (o = Vo(
        /*historyItem*/
        e[7].timestamp
      ) + "") && ae(a, o), /*historyItem*/
      e[7].answer ? _ ? _.p(e, k) : (_ = Fo(e), _.c(), _.m(t, s)) : _ && (_.d(1), _ = null);
    },
    d(S) {
      S && M(t), g.d(), _ && _.d(), c = !1, u();
    }
  };
}
function K0(e) {
  let t, n, l = (
    /*isVisible*/
    e[0] && Bo(e)
  );
  return {
    c() {
      l && l.c(), t = be();
    },
    m(r, i) {
      l && l.m(r, i), R(r, t, i), n = !0;
    },
    p(r, [i]) {
      /*isVisible*/
      r[0] ? l ? (l.p(r, i), i & /*isVisible*/
      1 && v(l, 1)) : (l = Bo(r), l.c(), v(l, 1), l.m(t.parentNode, t)) : l && (ie(), L(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (v(l), n = !0);
    },
    o(r) {
      L(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && M(t);
    }
  };
}
function Vo(e) {
  let t = /* @__PURE__ */ new Date();
  t.setTime(Date.parse(e)), console.log("format:", e, Date.parse(e));
  const l = (/* @__PURE__ */ new Date()).getTime() - t.getTime(), r = Math.floor(l / 6e4), i = Math.floor(l / 36e5), o = Math.floor(l / 864e5);
  return r < 1 ? "Just now" : r < 60 ? `${r}m ago` : i < 24 ? `${i}h ago` : `${o}d ago`;
}
function X0(e, t, n) {
  let { isVisible: l = !1 } = t, { history: r = [] } = t, { onClose: i = () => {
  } } = t, { onSelect: o = () => {
  } } = t, { position: a = { top: 0, left: 0 } } = t;
  function f(c) {
    c.target, i && i();
  }
  const s = (c) => o(c);
  return e.$$set = (c) => {
    "isVisible" in c && n(0, l = c.isVisible), "history" in c && n(1, r = c.history), "onClose" in c && n(2, i = c.onClose), "onSelect" in c && n(3, o = c.onSelect), "position" in c && n(5, a = c.position);
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
class Wo extends pe {
  constructor(t) {
    super(), ke(this, t, X0, K0, ye, {
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
    return {
      ...e,
      [t[0]]: Ar(e[t[0]], t.slice(1))
    };
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
function Y0(e) {
  let t, n, l, r, i;
  const o = [$0, Z0, J0], a = [];
  function f(s, c) {
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
      t = w("div"), l && l.c(), b(t, "class", r = "h-full " + /*scrollable*/
      (e[7] ? "overflow-auto" : ""));
    },
    m(s, c) {
      R(s, t, c), ~n && a[n].m(t, null), i = !0;
    },
    p(s, c) {
      let u = n;
      n = f(s), n === u ? ~n && a[n].p(s, c) : (l && (ie(), L(a[u], 1, 1, () => {
        a[u] = null;
      }), oe()), ~n ? (l = a[n], l ? l.p(s, c) : (l = a[n] = o[n](s), l.c()), v(l, 1), l.m(t, null)) : l = null), (!i || c & /*scrollable*/
      128 && r !== (r = "h-full " + /*scrollable*/
      (s[7] ? "overflow-auto" : ""))) && b(t, "class", r);
    },
    i(s) {
      i || (v(l), i = !0);
    },
    o(s) {
      L(l), i = !1;
    },
    d(s) {
      s && M(t), ~n && a[n].d();
    }
  };
}
function U0(e) {
  let t, n, l, r, i, o, a, f, s, c, u, d, m, g, _;
  return o = new me({
    props: { icon: ha, class: "inline mr-2" }
  }), c = new me({
    props: {
      icon: _a,
      class: "inline mr-2"
    }
  }), {
    c() {
      t = w("div"), n = w("textarea"), l = P(), r = w("div"), i = w("button"), W(o.$$.fragment), a = F(`
          History`), f = P(), s = w("button"), W(c.$$.fragment), u = F(`
          Ask AI`), b(n, "class", "w-full h-full p-4 pb-16 bg-transparent text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none overflow-hidden min-h-[120px] relative z-20"), b(n, "placeholder", "Ask me to generate, update, or explain a TempoQL query..."), n.disabled = /*isLoading*/
      e[2], b(n, "rows", "5"), b(i, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), b(i, "title", "View query history"), b(s, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50"), s.disabled = d = !/*question*/
      e[0].trim() || /*isLoading*/
      e[2], b(r, "class", "absolute right-0 bottom-0 mr-4 mb-4 flex justify-end items-center gap-2 z-50"), b(t, "class", "relative w-full min-h-0 flex-auto");
    },
    m(y, S) {
      R(y, t, S), h(t, n), e[20](n), ct(
        n,
        /*question*/
        e[0]
      ), h(t, l), h(t, r), h(r, i), G(o, i, null), h(i, a), h(r, f), h(r, s), G(c, s, null), h(s, u), m = !0, g || (_ = [
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
          $e(
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
    p(y, S) {
      e = y, (!m || S & /*isLoading*/
      4) && (n.disabled = /*isLoading*/
      e[2]), S & /*question*/
      1 && ct(
        n,
        /*question*/
        e[0]
      ), (!m || S & /*question, isLoading*/
      5 && d !== (d = !/*question*/
      e[0].trim() || /*isLoading*/
      e[2])) && (s.disabled = d);
    },
    i(y) {
      m || (v(o.$$.fragment, y), v(c.$$.fragment, y), m = !0);
    },
    o(y) {
      L(o.$$.fragment, y), L(c.$$.fragment, y), m = !1;
    },
    d(y) {
      y && M(t), e[20](null), V(o), V(c), g = !1, we(_);
    }
  };
}
function J0(e) {
  let t, n, l, r;
  return l = new Fa({
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
      t = w("div"), n = w("div"), W(l.$$.fragment), b(n, "class", "text-gray-700 dark:text-gray-200 text-sm leading-relaxed prose prose-sm max-w-none"), b(t, "class", "flex-1 overflow-y-auto ai-scrollbar");
    },
    m(i, o) {
      R(i, t, o), h(t, n), G(l, n, null), r = !0;
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
      r || (v(l.$$.fragment, i), r = !0);
    },
    o(i) {
      L(l.$$.fragment, i), r = !1;
    },
    d(i) {
      i && M(t), V(l);
    }
  };
}
function Z0(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = w("div"), n = w("h3"), n.textContent = "Error", l = P(), r = w("div"), i = F(
        /*error*/
        e[3]
      ), b(n, "class", "text-lg font-medium text-red-700 dark:text-red-100 mb-2"), b(r, "class", "text-sm font-mono text-gray-800 dark:text-gray-100"), b(t, "class", "bg-red-50 dark:bg-red-800/40 rounded-lg border border-red-200 dark:border-red-400 p-4 mb-4");
    },
    m(o, a) {
      R(o, t, a), h(t, n), h(t, l), h(t, r), h(r, i);
    },
    p(o, a) {
      a & /*error*/
      8 && ae(
        i,
        /*error*/
        o[3]
      );
    },
    i: $,
    o: $,
    d(o) {
      o && M(t);
    }
  };
}
function $0(e) {
  let t;
  return {
    c() {
      t = w("h4"), t.innerHTML = `<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 dark:border-blue-400"></span>
           AI is thinking...`, b(t, "class", "text-blue-600 dark:text-blue-400 font-medium text-sm");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: $,
    i: $,
    o: $,
    d(n) {
      n && M(t);
    }
  };
}
function e1(e) {
  let t, n, l, r, i, o, a, f, s, c, u, d, m, g, _, y, S, k, p, N, E, q, Q, H, D, T;
  S = new me({
    props: {
      icon: (
        /*apiStatusInfo*/
        e[11].icon
      ),
      class: "inline mr-2"
    }
  });
  const C = [U0, Y0], A = [];
  function ee(J, O) {
    return (
      /*tab*/
      J[9] == "query" ? 0 : 1
    );
  }
  return E = ee(e), q = A[E] = C[E](e), {
    c() {
      t = w("div"), n = w("div"), l = w("h3"), l.textContent = "AI Assistant", r = P(), i = w("button"), o = F("Query"), f = P(), s = w("button"), c = F("Response"), m = P(), g = w("div"), _ = P(), y = w("div"), W(S.$$.fragment), k = P(), p = F(
        /*apiStatus*/
        e[5]
      ), N = P(), q.c(), b(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100 pr-2"), b(i, "class", a = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*tab*/
      (e[9] === "query" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800")), b(i, "type", "button"), b(s, "class", u = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 disabled:opacity-50 " + /*tab*/
      (e[9] === "response" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800")), s.disabled = d = !/*llmResponse*/
      e[4] && !/*error*/
      e[3], b(s, "type", "button"), b(g, "class", "flex-auto"), b(y, "class", "flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"), b(n, "class", "flex items-center mb-4 gap-2 shrink-0"), b(t, "class", Q = "px-4 pb-4 " + /*width*/
      e[6] + " h-full flex flex-col");
    },
    m(J, O) {
      R(J, t, O), h(t, n), h(n, l), h(n, r), h(n, i), h(i, o), h(n, f), h(n, s), h(s, c), h(n, m), h(n, g), h(n, _), h(n, y), G(S, y, null), h(y, k), h(y, p), h(t, N), A[E].m(t, null), H = !0, D || (T = [
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
      ], D = !0);
    },
    p(J, [O]) {
      (!H || O & /*tab*/
      512 && a !== (a = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*tab*/
      (J[9] === "query" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"))) && b(i, "class", a), (!H || O & /*tab*/
      512 && u !== (u = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 disabled:opacity-50 " + /*tab*/
      (J[9] === "response" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"))) && b(s, "class", u), (!H || O & /*llmResponse, error*/
      24 && d !== (d = !/*llmResponse*/
      J[4] && !/*error*/
      J[3])) && (s.disabled = d);
      const I = {};
      O & /*apiStatusInfo*/
      2048 && (I.icon = /*apiStatusInfo*/
      J[11].icon), S.$set(I), (!H || O & /*apiStatus*/
      32) && ae(
        p,
        /*apiStatus*/
        J[5]
      );
      let X = E;
      E = ee(J), E === X ? A[E].p(J, O) : (ie(), L(A[X], 1, 1, () => {
        A[X] = null;
      }), oe(), q = A[E], q ? q.p(J, O) : (q = A[E] = C[E](J), q.c()), v(q, 1), q.m(t, null)), (!H || O & /*width*/
      64 && Q !== (Q = "px-4 pb-4 " + /*width*/
      J[6] + " h-full flex flex-col")) && b(t, "class", Q);
    },
    i(J) {
      H || (v(S.$$.fragment, J), v(q), H = !0);
    },
    o(J) {
      L(S.$$.fragment, J), L(q), H = !1;
    },
    d(J) {
      J && M(t), V(S), A[E].d(), D = !1, we(T);
    }
  };
}
function t1(e, t, n) {
  let l, { onSubmit: r = () => {
  } } = t, { onRun: i = () => {
  } } = t, { isLoading: o = !1 } = t, { error: a = "" } = t, { llmResponse: f = "" } = t, { apiStatus: s = "Checking API connection..." } = t, { width: c = "w-full" } = t, { scrollable: u = !0 } = t, { extractedQuery: d = "" } = t, { hasExtractedQuery: m = !1 } = t, { onQueryExtracted: g = () => {
  } } = t, { onHistoryClick: _ = () => {
  } } = t, y = "query", { question: S = "" } = t, k;
  function p() {
    S.trim() && (r(S.trim()), k && k.focus());
  }
  function N(C) {
    C.key === "Enter" && !C.shiftKey && (C.preventDefault(), p());
  }
  function E(C) {
    return C.includes("Configured") || C.includes("ready") ? {
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      icon: pf
    } : C.includes("Not configured") || C.includes("Invalid") ? {
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      icon: Af
    } : {
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      icon: qf
    };
  }
  const q = () => n(9, y = "query"), Q = () => n(9, y = "response");
  function H(C) {
    Me[C ? "unshift" : "push"](() => {
      k = C, n(10, k);
    });
  }
  function D() {
    S = this.value, n(0, S);
  }
  const T = () => {
    p(), n(9, y = "response");
  };
  return e.$$set = (C) => {
    "onSubmit" in C && n(14, r = C.onSubmit), "onRun" in C && n(1, i = C.onRun), "isLoading" in C && n(2, o = C.isLoading), "error" in C && n(3, a = C.error), "llmResponse" in C && n(4, f = C.llmResponse), "apiStatus" in C && n(5, s = C.apiStatus), "width" in C && n(6, c = C.width), "scrollable" in C && n(7, u = C.scrollable), "extractedQuery" in C && n(15, d = C.extractedQuery), "hasExtractedQuery" in C && n(16, m = C.hasExtractedQuery), "onQueryExtracted" in C && n(17, g = C.onQueryExtracted), "onHistoryClick" in C && n(8, _ = C.onHistoryClick), "question" in C && n(0, S = C.question);
  }, e.$$.update = () => {
    e.$$.dirty & /*hasExtractedQuery, extractedQuery, onQueryExtracted*/
    229376 && m && d && (console.log("🤖 AIAssistant: Query extracted, triggering handler:", d), g()), e.$$.dirty & /*apiStatus*/
    32 && n(11, l = E(s));
  }, [
    S,
    i,
    o,
    a,
    f,
    s,
    c,
    u,
    _,
    y,
    k,
    l,
    p,
    N,
    r,
    d,
    m,
    g,
    q,
    Q,
    H,
    D,
    T
  ];
}
class n1 extends pe {
  constructor(t) {
    super(), ke(this, t, t1, e1, ye, {
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
const Ko = [
  "now",
  "value",
  "mintime",
  "maxtime",
  "indexvalue"
];
function l1(e, t, n) {
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
    const i = r.toLowerCase(), o = e.filter((s) => s.toLowerCase().startsWith(i)).sort((s, c) => s.length !== c.length ? s.length - c.length : s.localeCompare(c)).slice(0, 10), a = e.filter((s) => {
      const c = s.toLowerCase();
      return c.includes(i) && !c.startsWith(i);
    }).sort((s, c) => {
      const u = s.toLowerCase().indexOf(i), d = c.toLowerCase().indexOf(i);
      return u !== d ? u - d : s.length !== c.length ? s.length - c.length : s.localeCompare(c);
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
    const i = r.toLowerCase(), o = Ko.filter((s) => s.toLowerCase().startsWith(i)).sort((s, c) => s.length - c.length), a = Ko.filter((s) => {
      const c = s.toLowerCase();
      return c.includes(i) && !c.startsWith(i);
    }).sort((s, c) => s.length - c.length), f = [...o, ...a].map((s) => ({
      value: s,
      type: "constant"
    }));
    return console.log("🔍 getAutocompleteOptions - Constant matches:", f), f;
  }
  return console.log("🔍 getAutocompleteOptions - No matches found"), [];
}
function Xo(e, t, n) {
  const l = e.slice();
  return l[34] = t[n], l[36] = n, l;
}
function Yo(e) {
  let t, n = (
    /*autocompleteOptions*/
    e[7]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Uo(Xo(e, n, r));
  return {
    c() {
      t = w("div");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      b(t, "class", "absolute z-30 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-xl max-h-48 overflow-y-auto");
    },
    m(r, i) {
      R(r, t, i);
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(t, null);
      e[24](t);
    },
    p(r, i) {
      if (i[0] & /*selectedIndex, selectAutocompleteOption, autocompleteOptions*/
      8576) {
        n = /*autocompleteOptions*/
        r[7];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = Xo(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = Uo(a), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(r) {
      r && M(t), De(l, r), e[24](null);
    }
  };
}
function Uo(e) {
  let t, n, l, r = (
    /*option*/
    e[34].value + ""
  ), i, o, a, f = (
    /*option*/
    e[34].type === "data_item" ? "field" : "const"
  ), s, c, u, d, m;
  function g() {
    return (
      /*click_handler*/
      e[21](
        /*option*/
        e[34]
      )
    );
  }
  function _(...S) {
    return (
      /*keydown_handler*/
      e[22](
        /*option*/
        e[34],
        ...S
      )
    );
  }
  function y() {
    return (
      /*mouseenter_handler*/
      e[23](
        /*index*/
        e[36]
      )
    );
  }
  return {
    c() {
      t = w("div"), n = w("div"), l = w("span"), i = F(r), o = P(), a = w("span"), s = F(f), c = P(), b(l, "class", "font-mono text-sm"), b(a, "class", "text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"), b(n, "class", "flex items-center justify-between"), b(t, "class", u = "px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors " + /*index*/
      (e[36] === /*selectedIndex*/
      e[8] ? "bg-blue-600 text-white" : "text-gray-700 dark:text-gray-200")), b(t, "role", "button"), b(t, "tabindex", "0");
    },
    m(S, k) {
      R(S, t, k), h(t, n), h(n, l), h(l, i), h(n, o), h(n, a), h(a, s), h(t, c), d || (m = [
        U(t, "click", g),
        U(t, "keydown", _),
        U(t, "mouseenter", y)
      ], d = !0);
    },
    p(S, k) {
      e = S, k[0] & /*autocompleteOptions*/
      128 && r !== (r = /*option*/
      e[34].value + "") && ae(i, r), k[0] & /*autocompleteOptions*/
      128 && f !== (f = /*option*/
      e[34].type === "data_item" ? "field" : "const") && ae(s, f), k[0] & /*selectedIndex*/
      256 && u !== (u = "px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors " + /*index*/
      (e[36] === /*selectedIndex*/
      e[8] ? "bg-blue-600 text-white" : "text-gray-700 dark:text-gray-200")) && b(t, "class", u);
    },
    d(S) {
      S && M(t), d = !1, we(m);
    }
  };
}
function r1(e) {
  let t, n, l, r, i, o, a, f, s, c, u, d, m, g, _, y = (
    /*savesOnRun*/
    e[3] ? "Save and Run" : "Run Query"
  ), S, k, p, N, E, q = (
    /*showAutocomplete*/
    e[9] && /*autocompleteOptions*/
    e[7].length > 0 && Yo(e)
  );
  return c = new me({
    props: { icon: ha, class: "inline mr-2" }
  }), g = new me({
    props: { icon: ya, class: "inline mr-2" }
  }), {
    c() {
      t = w("div"), n = w("div"), l = w("textarea"), r = P(), i = w("div"), o = P(), q && q.c(), a = P(), f = w("div"), s = w("button"), W(c.$$.fragment), u = F(`
        History`), d = P(), m = w("button"), W(g.$$.fragment), _ = P(), S = F(y), b(l, "id", "text-input"), b(l, "class", "w-full h-full p-4 pb-16 bg-transparent font-mono text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none overflow-hidden min-h-[120px] relative z-20 svelte-1w5ogy4"), b(l, "placeholder", "// Write your Tempo-QL query here... (Ctrl+Z to undo, Ctrl+Y to redo)"), b(l, "autocomplete", "false"), b(l, "autocapitalize", "false"), b(l, "autocorrect", "false"), b(l, "spellcheck", "false"), b(l, "rows", "1"), re(l, "color", "transparent"), re(l, "caret-color", "currentColor"), b(i, "class", "absolute top-0 left-0 w-full h-full p-4 pb-16 font-mono text-sm pointer-events-none bg-transparent z-10 text-wrap whitespace-pre-wrap break-words text-gray-900 dark:text-gray-100 svelte-1w5ogy4"), b(
        i,
        "id",
        /*highlightedViewID*/
        e[10]
      ), b(s, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), b(s, "title", "View query history"), b(m, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white"), m.disabled = k = !/*value*/
      e[0].trim(), se(m, "opacity-50", !/*value*/
      e[0].trim()), se(m, "cursor-not-allowed", !/*value*/
      e[0].trim()), b(f, "class", "absolute right-0 bottom-0 mr-4 mb-4 flex justify-end items-center gap-2 z-50"), b(n, "class", "relative flex-auto min-h-0"), b(t, "class", "flex flex-col w-full h-full px-4 mb-2");
    },
    m(Q, H) {
      R(Q, t, H), h(t, n), h(n, l), e[18](l), ct(
        l,
        /*value*/
        e[0]
      ), h(n, r), h(n, i), e[20](i), h(n, o), q && q.m(n, null), h(n, a), h(n, f), h(f, s), G(c, s, null), h(s, u), h(f, d), h(f, m), G(g, m, null), h(m, _), h(m, S), p = !0, N || (E = [
        U(
          l,
          "input",
          /*textarea_1_input_handler*/
          e[19]
        ),
        U(
          l,
          "input",
          /*handleInput*/
          e[11]
        ),
        U(
          l,
          "keydown",
          /*handleKeydown*/
          e[12]
        ),
        U(s, "click", function() {
          $e(
            /*onHistoryClick*/
            e[2]
          ) && e[2].apply(this, arguments);
        }),
        U(m, "click", function() {
          $e(
            /*onRun*/
            e[1]
          ) && e[1].apply(this, arguments);
        })
      ], N = !0);
    },
    p(Q, H) {
      e = Q, H[0] & /*value*/
      1 && ct(
        l,
        /*value*/
        e[0]
      ), /*showAutocomplete*/
      e[9] && /*autocompleteOptions*/
      e[7].length > 0 ? q ? q.p(e, H) : (q = Yo(e), q.c(), q.m(n, a)) : q && (q.d(1), q = null), (!p || H[0] & /*savesOnRun*/
      8) && y !== (y = /*savesOnRun*/
      e[3] ? "Save and Run" : "Run Query") && ae(S, y), (!p || H[0] & /*value*/
      1 && k !== (k = !/*value*/
      e[0].trim())) && (m.disabled = k), (!p || H[0] & /*value*/
      1) && se(m, "opacity-50", !/*value*/
      e[0].trim()), (!p || H[0] & /*value*/
      1) && se(m, "cursor-not-allowed", !/*value*/
      e[0].trim());
    },
    i(Q) {
      p || (v(c.$$.fragment, Q), v(g.$$.fragment, Q), p = !0);
    },
    o(Q) {
      L(c.$$.fragment, Q), L(g.$$.fragment, Q), p = !1;
    },
    d(Q) {
      Q && M(t), e[18](null), e[20](null), q && q.d(), V(c), V(g), N = !1, we(E);
    }
  };
}
function i1(e, t, n) {
  let { value: l = "" } = t, { onInput: r = () => {
  } } = t, { width: i = "w-full max-w-2xl" } = t, { dataFields: o = [] } = t, { onRun: a = () => {
  } } = t, { onExplain: f = () => {
  } } = t, { onHistoryClick: s = () => {
  } } = t, { savesOnRun: c = !1 } = t, u, d, m, g = [], _ = 0, y = !1, S = 0, k = "highlightView-" + new Array(20).fill(0).map(() => Math.floor(Math.random() * 10)).join(""), p = [], N = -1, E = !1;
  dt(() => {
    Q(""), document.addEventListener("click", q);
  }), ma(() => {
    document.removeEventListener("click", q);
  });
  function q(j) {
    if (d && u) {
      const te = j.target, ue = d.contains(te), B = u.contains(te);
      (!ue || B && y) && (console.log("🖱️ Click detected - closing autocomplete"), n(9, y = !1));
    }
  }
  function Q(j) {
    if (E) {
      E = !1;
      return;
    }
    p = p.slice(0, N + 1), p.push(j), N = p.length - 1, p.length > 50 && (p = p.slice(-50), N = p.length - 1), console.log("📝 Added to history:", j, "Index:", N);
  }
  function H() {
    if (N > 0) {
      E = !0, N--;
      const j = p[N];
      console.log("↶ Undo to:", j), n(0, l = j), r(j), u && (n(4, u.value = j, u), u.focus());
    }
  }
  function D() {
    if (N < p.length - 1) {
      E = !0, N++;
      const j = p[N];
      console.log("↷ Redo to:", j), n(0, l = j), r(j), u && (n(4, u.value = j, u), u.focus());
    }
  }
  function T(j) {
    const te = j.target, ue = te.value;
    Q(ue), n(0, l = ue), r(ue), S = te.selectionStart || 0, C(ue, S);
  }
  function C(j, te) {
    const ue = j.substring(0, te);
    j.substring(te);
    const B = ue.match(/([^\s]*)$/), fe = B ? B[1] : "";
    fe.length > 0 ? (n(7, g = l1(o, fe, ue)), n(9, y = g.length > 0), n(8, _ = 0)) : n(9, y = !1);
  }
  function A(j) {
    if (j.ctrlKey || j.metaKey) {
      if (j.key === "z" && !j.shiftKey) {
        j.preventDefault(), H();
        return;
      } else if (j.key === "y" || j.key === "z" && j.shiftKey) {
        j.preventDefault(), D();
        return;
      }
    }
    if (y)
      switch (j.key) {
        case "ArrowDown":
          j.preventDefault(), n(8, _ = (_ + 1) % g.length);
          break;
        case "ArrowUp":
          j.preventDefault(), n(8, _ = _ === 0 ? g.length - 1 : _ - 1);
          break;
        case "Enter":
          y && (j.preventDefault(), ee(g[_]));
          break;
        case "Escape":
          n(9, y = !1);
          break;
        case "Tab":
          y && (j.preventDefault(), ee(g[_]));
          break;
      }
  }
  function ee(j) {
    const te = l.substring(0, S), ue = l.substring(S), B = te.match(/([^\s]*)$/), fe = B ? B[1] : "", le = te.length - fe.length;
    let ce;
    if (j.type === "data_item")
      if (fe.includes("{")) {
        const K = te.match(/\{([^}]*?)(?:,\s*([^},]*))?$/);
        K ? K[2] ? ce = te.substring(0, K.index + K[1].length + 2) + j.value : ce = te.substring(0, K.index + 1) + j.value : ce = te + j.value;
      } else
        ce = te + "{" + j.value;
    else
      ce = te.substring(0, le) + "#" + j.value;
    const Re = ce + ue;
    n(0, l = Re), r(Re);
    const Ae = ce.length;
    setTimeout(
      () => {
        u && (u.setSelectionRange(Ae, Ae), u.focus());
      },
      0
    ), n(9, y = !1);
  }
  function J(j) {
    Me[j ? "unshift" : "push"](() => {
      u = j, n(4, u), n(0, l);
    });
  }
  function O() {
    l = this.value, n(0, l);
  }
  function I(j) {
    Me[j ? "unshift" : "push"](() => {
      m = j, n(5, m), n(0, l), n(10, k);
    });
  }
  const X = (j) => ee(j), _e = (j, te) => {
    (te.key === "Enter" || te.key === " ") && (te.preventDefault(), ee(j));
  }, ne = (j) => n(8, _ = j);
  function Y(j) {
    Me[j ? "unshift" : "push"](() => {
      d = j, n(6, d);
    });
  }
  return e.$$set = (j) => {
    "value" in j && n(0, l = j.value), "onInput" in j && n(14, r = j.onInput), "width" in j && n(15, i = j.width), "dataFields" in j && n(16, o = j.dataFields), "onRun" in j && n(1, a = j.onRun), "onExplain" in j && n(17, f = j.onExplain), "onHistoryClick" in j && n(2, s = j.onHistoryClick), "savesOnRun" in j && n(3, c = j.savesOnRun);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*highlightedView, value*/
    33 && m && l !== void 0) {
      let j = l;
      n(5, m.innerText = Ba(j), m), Ia({
        selector: `#${k}`,
        patterns: Ha
      });
    }
    e.$$.dirty[0] & /*textarea, value*/
    17 && u && l !== void 0 && u.value !== l && (n(4, u.value = l, u), Q(l));
  }, [
    l,
    a,
    s,
    c,
    u,
    m,
    d,
    g,
    _,
    y,
    k,
    T,
    A,
    ee,
    r,
    i,
    o,
    f,
    J,
    O,
    I,
    X,
    _e,
    ne,
    Y
  ];
}
class o1 extends pe {
  constructor(t) {
    super(), ke(
      this,
      t,
      i1,
      r1,
      ye,
      {
        value: 0,
        onInput: 14,
        width: 15,
        dataFields: 16,
        onRun: 1,
        onExplain: 17,
        onHistoryClick: 2,
        savesOnRun: 3
      },
      null,
      [-1, -1]
    );
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(t) {
    this.$$set({ value: t }), Be();
  }
  get onInput() {
    return this.$$.ctx[14];
  }
  set onInput(t) {
    this.$$set({ onInput: t }), Be();
  }
  get width() {
    return this.$$.ctx[15];
  }
  set width(t) {
    this.$$set({ width: t }), Be();
  }
  get dataFields() {
    return this.$$.ctx[16];
  }
  set dataFields(t) {
    this.$$set({ dataFields: t }), Be();
  }
  get onRun() {
    return this.$$.ctx[1];
  }
  set onRun(t) {
    this.$$set({ onRun: t }), Be();
  }
  get onExplain() {
    return this.$$.ctx[17];
  }
  set onExplain(t) {
    this.$$set({ onExplain: t }), Be();
  }
  get onHistoryClick() {
    return this.$$.ctx[2];
  }
  set onHistoryClick(t) {
    this.$$set({ onHistoryClick: t }), Be();
  }
  get savesOnRun() {
    return this.$$.ctx[3];
  }
  set savesOnRun(t) {
    this.$$set({ savesOnRun: t }), Be();
  }
}
function Jo(e, t, n) {
  const l = e.slice();
  return l[33] = t[n][0], l[34] = t[n][1], l[36] = n, l;
}
function Zo(e) {
  let t, n, l, r, i, o;
  return n = new nr({
    props: {
      class: "w-full flex items-center gap-2 " + /*draggingCounter*/
      (e[11] > 0 ? "bg-blue-200 dark:bg-blue-200/40" : "hover:bg-gray-100 dark:hover:bg-gray-800") + " dark:text-gray-100 text-gray-900 pr-4 py-2 ",
      style: "padding-left: " + (-0.5 + /*indentLevel*/
      e[3] * 1.5) + "rem;",
      $$slots: {
        default: [
          a1,
          ({ hovering: a }) => ({ 37: a }),
          ({ hovering: a }) => [0, a ? 64 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      t = w("div"), W(n.$$.fragment), b(t, "class", l = "w-full cursor-pointer select-none " + (!/*collapsed*/
      e[12] && /*itemCount*/
      e[13] > 0 || /*collapsed*/
      (e[12] || /*itemCount*/
      e[13] == 0) && /*showBorder*/
      e[10] ? "border-b border-gray-200 dark:border-gray-700" : "")), b(t, "draggable", "true");
    },
    m(a, f) {
      R(a, t, f), G(n, t, null), r = !0, i || (o = [
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
        U(t, "dragenter", qe(Pr(
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
      (a[11] > 0 ? "bg-blue-200 dark:bg-blue-200/40" : "hover:bg-gray-100 dark:hover:bg-gray-800") + " dark:text-gray-100 text-gray-900 pr-4 py-2 "), f[0] & /*indentLevel*/
      8 && (s.style = "padding-left: " + (-0.5 + /*indentLevel*/
      a[3] * 1.5) + "rem;"), f[0] & /*onDuplicate, path, onNewQuery, onNewGroup, collapsed, itemCount, name*/
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
      r || (v(n.$$.fragment, a), r = !0);
    },
    o(a) {
      L(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && M(t), V(n), i = !1, we(o);
    }
  };
}
function $o(e) {
  let t, n, l, r, i, o, a, f, s, c, u, d, m, g, _, y, S, k, p;
  return r = new me({
    props: { icon: yt, class: "inline mr-2" }
  }), f = new me({
    props: { icon: yt, class: "inline mr-2" }
  }), m = new me({ props: { icon: er } }), y = new me({ props: { icon: Qr } }), {
    c() {
      t = w("div"), n = P(), l = w("button"), W(r.$$.fragment), i = F(`
          Group`), o = P(), a = w("button"), W(f.$$.fragment), s = F(`
          Query`), c = P(), u = w("div"), d = w("button"), W(m.$$.fragment), g = P(), _ = w("button"), W(y.$$.fragment), b(t, "class", "flex-auto"), b(l, "class", "px-2 py-1 font-semibold text-xs rounded transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), b(l, "title", "Create a new group"), b(a, "class", "px-2 py-1 font-semibold text-xs rounded transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), b(a, "title", "Create a new query"), b(d, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), b(d, "title", "Duplicate this group"), b(_, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), b(_, "title", "Delete this group"), b(u, "class", "flex items-center");
    },
    m(N, E) {
      R(N, t, E), R(N, n, E), R(N, l, E), G(r, l, null), h(l, i), R(N, o, E), R(N, a, E), G(f, a, null), h(a, s), R(N, c, E), R(N, u, E), h(u, d), G(m, d, null), h(u, g), h(u, _), G(y, _, null), S = !0, k || (p = [
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
        U(_, "click", qe(
          /*click_handler_3*/
          e[21]
        ))
      ], k = !0);
    },
    p: $,
    i(N) {
      S || (v(r.$$.fragment, N), v(f.$$.fragment, N), v(m.$$.fragment, N), v(y.$$.fragment, N), S = !0);
    },
    o(N) {
      L(r.$$.fragment, N), L(f.$$.fragment, N), L(m.$$.fragment, N), L(y.$$.fragment, N), S = !1;
    },
    d(N) {
      N && M(t), N && M(n), N && M(l), V(r), N && M(o), N && M(a), V(f), N && M(c), N && M(u), V(m), V(y), k = !1, we(p);
    }
  };
}
function a1(e) {
  let t, n, l, r, i, o, a, f, s, c, u, d, m;
  n = new me({
    props: {
      icon: Ie,
      class: "inline-block w-3 h-3 shrink-0 text-sm opacity-70 " + /*collapsed*/
      (e[12] ? "-rotate-90" : "")
    }
  });
  let g = (
    /*hovering*/
    e[37] && $o(e)
  );
  return {
    c() {
      t = w("div"), W(n.$$.fragment), l = P(), r = w("div"), i = F(
        /*name*/
        e[0]
      ), o = P(), a = w("span"), f = F("("), s = F(
        /*itemCount*/
        e[13]
      ), c = F(")"), u = P(), g && g.c(), d = be(), b(t, "class", "w-4"), b(a, "class", "text-xs text-gray-500"), b(r, "class", "font-semibold flex-auto py-0.5 truncate");
    },
    m(_, y) {
      R(_, t, y), G(n, t, null), R(_, l, y), R(_, r, y), h(r, i), h(r, o), h(r, a), h(a, f), h(a, s), h(a, c), R(_, u, y), g && g.m(_, y), R(_, d, y), m = !0;
    },
    p(_, y) {
      const S = {};
      y[0] & /*collapsed*/
      4096 && (S.class = "inline-block w-3 h-3 shrink-0 text-sm opacity-70 " + /*collapsed*/
      (_[12] ? "-rotate-90" : "")), n.$set(S), (!m || y[0] & /*name*/
      1) && ae(
        i,
        /*name*/
        _[0]
      ), (!m || y[0] & /*itemCount*/
      8192) && ae(
        s,
        /*itemCount*/
        _[13]
      ), /*hovering*/
      _[37] ? g ? (g.p(_, y), y[1] & /*hovering*/
      64 && v(g, 1)) : (g = $o(_), g.c(), v(g, 1), g.m(d.parentNode, d)) : g && (ie(), L(g, 1, 1, () => {
        g = null;
      }), oe());
    },
    i(_) {
      m || (v(n.$$.fragment, _), v(g), m = !0);
    },
    o(_) {
      L(n.$$.fragment, _), L(g), m = !1;
    },
    d(_) {
      _ && M(t), V(n), _ && M(l), _ && M(r), _ && M(u), g && g.d(_), _ && M(d);
    }
  };
}
function ea(e) {
  let t, n, l = Object.entries(
    /*queries*/
    e[2]
  ).sort(ra), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = na(Jo(e, l, o));
  const i = (o) => L(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      t = be();
    },
    m(o, a) {
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(o, a);
      R(o, t, a), n = !0;
    },
    p(o, a) {
      if (a[0] & /*itemCount, showBorder, onSelect, path, queries, handleDrop, draggingCounter, indentLevel, deleteItem, onDuplicate, onNewQuery, onNewGroup, onDelete, onMove*/
      110590 | a[1] & /*hovering*/
      64) {
        l = Object.entries(
          /*queries*/
          o[2]
        ).sort(ra);
        let f;
        for (f = 0; f < l.length; f += 1) {
          const s = Jo(o, l, f);
          r[f] ? (r[f].p(s, a), v(r[f], 1)) : (r[f] = na(s), r[f].c(), v(r[f], 1), r[f].m(t.parentNode, t));
        }
        for (ie(), f = l.length; f < r.length; f += 1)
          i(f);
        oe();
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
        L(r[a]);
      n = !1;
    },
    d(o) {
      De(r, o), o && M(t);
    }
  };
}
function f1(e) {
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
      G(t, l, r), n = !0;
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
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function s1(e) {
  let t, n, l, r, i, o, a;
  n = new nr({
    props: {
      class: "block w-full flex items-center gap-2 pr-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100 text-gray-900",
      style: "padding-left: " + (-0.5 + /*indentLevel*/
      (e[3] + 1) * 1.5) + "rem;",
      $$slots: {
        default: [
          u1,
          ({ hovering: c }) => ({ 37: c }),
          ({ hovering: c }) => [0, c ? 64 : 0]
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
  function s(...c) {
    return (
      /*dragstart_handler_1*/
      e[29](
        /*key*/
        e[33],
        ...c
      )
    );
  }
  return {
    c() {
      t = w("div"), W(n.$$.fragment), l = P(), b(t, "class", r = "w-full cursor-pointer select-none " + /*i*/
      (e[36] < /*itemCount*/
      e[13] - 1 || /*showBorder*/
      e[10] ? "border-b border-gray-200 dark:border-gray-700" : "")), b(t, "draggable", "true");
    },
    m(c, u) {
      R(c, t, u), G(n, t, null), h(t, l), i = !0, o || (a = [
        U(t, "click", f),
        U(t, "dragstart", s),
        U(t, "dragover", Ka),
        U(
          t,
          "drop",
          /*drop_handler_1*/
          e[30]
        ),
        U(t, "dragenter", qe(Pr(
          /*dragenter_handler_1*/
          e[31]
        ))),
        U(t, "dragleave", qe(
          /*dragleave_handler_1*/
          e[32]
        ))
      ], o = !0);
    },
    p(c, u) {
      e = c;
      const d = {};
      u[0] & /*indentLevel*/
      8 && (d.style = "padding-left: " + (-0.5 + /*indentLevel*/
      (e[3] + 1) * 1.5) + "rem;"), u[0] & /*queries, onDuplicate, path*/
      262 | u[1] & /*$$scope, hovering*/
      192 && (d.$$scope = { dirty: u, ctx: e }), n.$set(d), (!i || u[0] & /*itemCount, showBorder*/
      9216 && r !== (r = "w-full cursor-pointer select-none " + /*i*/
      (e[36] < /*itemCount*/
      e[13] - 1 || /*showBorder*/
      e[10] ? "border-b border-gray-200 dark:border-gray-700" : ""))) && b(t, "class", r);
    },
    i(c) {
      i || (v(n.$$.fragment, c), i = !0);
    },
    o(c) {
      L(n.$$.fragment, c), i = !1;
    },
    d(c) {
      c && M(t), V(n), o = !1, we(a);
    }
  };
}
function ta(e) {
  let t, n, l, r, i, o, a, f, s, c, u;
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
  f = new me({ props: { icon: Qr } });
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
      t = w("div"), n = P(), l = w("div"), r = w("button"), W(i.$$.fragment), o = P(), a = w("button"), W(f.$$.fragment), b(t, "class", "flex-auto"), b(r, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), b(r, "title", "Duplicate this query"), b(a, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), b(a, "title", "Delete this query"), b(l, "class", "flex items-center");
    },
    m(g, _) {
      R(g, t, _), R(g, n, _), R(g, l, _), h(l, r), G(i, r, null), h(l, o), h(l, a), G(f, a, null), s = !0, c || (u = [
        U(r, "click", qe(d)),
        U(a, "click", qe(m))
      ], c = !0);
    },
    p(g, _) {
      e = g;
    },
    i(g) {
      s || (v(i.$$.fragment, g), v(f.$$.fragment, g), s = !0);
    },
    o(g) {
      L(i.$$.fragment, g), L(f.$$.fragment, g), s = !1;
    },
    d(g) {
      g && M(t), g && M(n), g && M(l), V(i), V(f), c = !1, we(u);
    }
  };
}
function u1(e) {
  let t, n = (
    /*key*/
    e[33] + ""
  ), l, r, i, o = (
    /*value*/
    e[34].replace(`
`, " ") + ""
  ), a, f, s, c, u, d = (
    /*hovering*/
    e[37] && ta(e)
  );
  return {
    c() {
      t = w("div"), l = F(n), r = P(), i = w("span"), a = F(o), s = P(), d && d.c(), c = be(), b(i, "class", "font-normal font-mono text-gray-600 dark:text-gray-400"), b(t, "class", "font-semibold whitespace-nowrap truncate"), b(t, "title", f = /*key*/
      e[33]);
    },
    m(m, g) {
      R(m, t, g), h(t, l), h(t, r), h(t, i), h(i, a), R(m, s, g), d && d.m(m, g), R(m, c, g), u = !0;
    },
    p(m, g) {
      (!u || g[0] & /*queries*/
      4) && n !== (n = /*key*/
      m[33] + "") && ae(l, n), (!u || g[0] & /*queries*/
      4) && o !== (o = /*value*/
      m[34].replace(`
`, " ") + "") && ae(a, o), (!u || g[0] & /*queries*/
      4 && f !== (f = /*key*/
      m[33])) && b(t, "title", f), /*hovering*/
      m[37] ? d ? (d.p(m, g), g[1] & /*hovering*/
      64 && v(d, 1)) : (d = ta(m), d.c(), v(d, 1), d.m(c.parentNode, c)) : d && (ie(), L(d, 1, 1, () => {
        d = null;
      }), oe());
    },
    i(m) {
      u || (v(d), u = !0);
    },
    o(m) {
      L(d), u = !1;
    },
    d(m) {
      m && M(t), m && M(s), d && d.d(m), m && M(c);
    }
  };
}
function na(e) {
  let t, n, l, r;
  const i = [s1, f1], o = [];
  function a(f, s) {
    return typeof /*value*/
    f[34] == "string" ? 0 : 1;
  }
  return t = a(e), n = o[t] = i[t](e), {
    c() {
      n.c(), l = be();
    },
    m(f, s) {
      o[t].m(f, s), R(f, l, s), r = !0;
    },
    p(f, s) {
      let c = t;
      t = a(f), t === c ? o[t].p(f, s) : (ie(), L(o[c], 1, 1, () => {
        o[c] = null;
      }), oe(), n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), v(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      r || (v(n), r = !0);
    },
    o(f) {
      L(n), r = !1;
    },
    d(f) {
      o[t].d(f), f && M(l);
    }
  };
}
function c1(e) {
  let t, n, l, r = (
    /*indentLevel*/
    e[3] > 0 && Zo(e)
  ), i = !/*collapsed*/
  e[12] && ea(e);
  return {
    c() {
      r && r.c(), t = P(), i && i.c(), n = be();
    },
    m(o, a) {
      r && r.m(o, a), R(o, t, a), i && i.m(o, a), R(o, n, a), l = !0;
    },
    p(o, a) {
      /*indentLevel*/
      o[3] > 0 ? r ? (r.p(o, a), a[0] & /*indentLevel*/
      8 && v(r, 1)) : (r = Zo(o), r.c(), v(r, 1), r.m(t.parentNode, t)) : r && (ie(), L(r, 1, 1, () => {
        r = null;
      }), oe()), /*collapsed*/
      o[12] ? i && (ie(), L(i, 1, 1, () => {
        i = null;
      }), oe()) : i ? (i.p(o, a), a[0] & /*collapsed*/
      4096 && v(i, 1)) : (i = ea(o), i.c(), v(i, 1), i.m(n.parentNode, n));
    },
    i(o) {
      l || (v(r), v(i), l = !0);
    },
    o(o) {
      L(r), L(i), l = !1;
    },
    d(o) {
      r && r.d(o), o && M(t), i && i.d(o), o && M(n);
    }
  };
}
function la(e, t) {
  var n, l;
  (n = e.dataTransfer) == null || n.setData("application/json", JSON.stringify(t)), (l = e.dataTransfer) == null || l.setData("text/plain", JSON.stringify(t)), e.stopPropagation();
}
function Ka(e) {
  e.preventDefault(), e.dataTransfer.dropEffect = "move";
}
function ra(e, t) {
  return typeof e[1] == "string" == (typeof t[1] == "string") ? e[0].localeCompare(t[0]) : typeof e[1] == "string" ? -1 : 1;
}
function d1(e, t, n) {
  let l, { name: r = null } = t, { path: i = [] } = t, { queries: o = {} } = t, { indentLevel: a = 0 } = t, { onSelect: f = () => {
  } } = t, { onNewGroup: s = () => {
  } } = t, { onNewQuery: c = () => {
  } } = t, { onDelete: u = () => {
  } } = t, { onDuplicate: d = () => {
  } } = t, { onDraggingChange: m = () => {
  } } = t, { onMove: g = () => {
  } } = t, { showBorder: _ = !1 } = t, y = a > 0;
  function S() {
    a > 0 && n(12, y = !y);
  }
  function k(Y = null) {
    confirm(`Are you sure you want to delete this ${Y != null ? "query" : "group"}? This action cannot be undone.`) && u(Y != null ? [...i, Y] : i);
  }
  function p(Y, j) {
    var ue;
    Y.preventDefault(), n(11, N = 0);
    const te = (ue = Y.dataTransfer) == null ? void 0 : ue.getData("application/json");
    if (te) {
      const B = JSON.parse(te);
      j = [...j, B[B.length - 1]], JSON.stringify(B) !== JSON.stringify(j) && g(B, j);
    }
    n(12, y = !1);
  }
  let N = 0;
  const E = () => {
    s(i), n(12, y = !1);
  }, q = () => c(i), Q = () => d(i), H = () => k(), D = (Y) => p(Y, i), T = (Y) => la(Y, i), C = () => n(11, N++, N), A = () => n(11, N--, N), ee = (Y) => d([...i, Y]), J = (Y) => k(Y), O = (Y, j) => f([...i, Y], j), I = (Y, j) => la(j, [...i, Y]), X = (Y) => p(Y, i), _e = () => n(11, N++, N), ne = () => n(11, N--, N);
  return e.$$set = (Y) => {
    "name" in Y && n(0, r = Y.name), "path" in Y && n(1, i = Y.path), "queries" in Y && n(2, o = Y.queries), "indentLevel" in Y && n(3, a = Y.indentLevel), "onSelect" in Y && n(4, f = Y.onSelect), "onNewGroup" in Y && n(5, s = Y.onNewGroup), "onNewQuery" in Y && n(6, c = Y.onNewQuery), "onDelete" in Y && n(7, u = Y.onDelete), "onDuplicate" in Y && n(8, d = Y.onDuplicate), "onDraggingChange" in Y && n(17, m = Y.onDraggingChange), "onMove" in Y && n(9, g = Y.onMove), "showBorder" in Y && n(10, _ = Y.showBorder);
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
    c,
    u,
    d,
    g,
    _,
    N,
    y,
    l,
    S,
    k,
    p,
    m,
    E,
    q,
    Q,
    H,
    D,
    T,
    C,
    A,
    ee,
    J,
    O,
    I,
    X,
    _e,
    ne
  ];
}
class Xa extends pe {
  constructor(t) {
    super(), ke(
      this,
      t,
      d1,
      c1,
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
function ia(e) {
  let t, n, l, r, i;
  return n = new me({
    props: { icon: ka, class: "inline" }
  }), {
    c() {
      t = w("button"), W(n.$$.fragment), b(t, "class", "px-2 py-1.5 text-sm text-center font-semibold rounded transition-colors duration-200 bg-gray-600 hover:bg-gray-500 text-white whitespace-nowrap"), b(t, "title", "Close query browser");
    },
    m(o, a) {
      R(o, t, a), G(n, t, null), l = !0, r || (i = U(t, "click", function() {
        $e(
          /*onClose*/
          e[3]
        ) && e[3].apply(this, arguments);
      }), r = !0);
    },
    p(o, a) {
      e = o;
    },
    i(o) {
      l || (v(n.$$.fragment, o), l = !0);
    },
    o(o) {
      L(n.$$.fragment, o), l = !1;
    },
    d(o) {
      o && M(t), V(n), r = !1, i();
    }
  };
}
function g1(e) {
  let t;
  return {
    c() {
      t = w("div"), t.innerHTML = `<div class="w-3/4 text-gray-700 dark:text-gray-200 text-lg font-semibold">File is empty</div> 
      <p class="text-gray-600 dark:text-gray-400 w-1/3">Click above to create a query or group of queries in this file.</p>`, b(t, "class", "flex flex-col w-full flex-auto min-h-0 items-center justify-center text-center gap-4");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: $,
    i: $,
    o: $,
    d(n) {
      n && M(t);
    }
  };
}
function m1(e) {
  let t, n, l, r, i, o, a;
  function f(c) {
    e[16](c);
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
    e[0]), r = new Xa({ props: s }), Me.push(() => Ze(r, "queries", f)), {
      c() {
        t = w("div"), t.textContent = `Click on a query to edit, hover to see actions, or drag-and-drop to
      organize.`, n = P(), l = w("div"), W(r.$$.fragment), b(t, "class", "mx-4 mb-2 text-xs text-gray-500 dark:text-gray-400"), b(l, "class", o = "rounded-lg " + /*draggingOnBrowser*/
        (e[5] ? "outline outline-2 outline-blue-500" : "") + " border border-gray-200 dark:border-gray-700 overflow-auto min-h-0 flex-auto mx-4");
      },
      m(c, u) {
        R(c, t, u), R(c, n, u), R(c, l, u), G(r, l, null), a = !0;
      },
      p(c, u) {
        const d = {};
        u & /*onSelect*/
        16 && (d.onSelect = /*onSelect*/
        c[4]), u & /*fileContents*/
        1 && (d.onNewGroup = /*func*/
        c[10]), u & /*fileContents*/
        1 && (d.onDelete = /*func_2*/
        c[12]), u & /*fileContents*/
        1 && (d.onDuplicate = /*func_3*/
        c[13]), u & /*draggingOnBrowser*/
        32 && (d.onDraggingChange = /*func_5*/
        c[15]), !i && u & /*fileContents*/
        1 && (i = !0, d.queries = /*fileContents*/
        c[0], Je(() => i = !1)), r.$set(d), (!a || u & /*draggingOnBrowser*/
        32 && o !== (o = "rounded-lg " + /*draggingOnBrowser*/
        (c[5] ? "outline outline-2 outline-blue-500" : "") + " border border-gray-200 dark:border-gray-700 overflow-auto min-h-0 flex-auto mx-4")) && b(l, "class", o);
      },
      i(c) {
        a || (v(r.$$.fragment, c), a = !0);
      },
      o(c) {
        L(r.$$.fragment, c), a = !1;
      },
      d(c) {
        c && M(t), c && M(n), c && M(l), V(r);
      }
    }
  );
}
function oa(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = w("div"), n = w("span"), l = F("Queries saved to "), r = w("span"), i = F(
        /*savePath*/
        e[1]
      ), b(r, "class", "font-mono"), b(n, "class", "px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"), b(t, "class", "mx-4 mt-4");
    },
    m(o, a) {
      R(o, t, a), h(t, n), h(n, l), h(n, r), h(r, i);
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
function b1(e) {
  let t, n, l, r, i, o, a, f, s, c, u, d, m, g, _, y, S, k, p, N, E = (
    /*allowClose*/
    e[2] && ia(e)
  );
  a = new me({
    props: { icon: yt, class: "inline mr-2" }
  }), u = new me({
    props: { icon: yt, class: "inline mr-2" }
  });
  const q = [m1, g1], Q = [];
  function H(T, C) {
    return C & /*fileContents*/
    1 && (g = null), g == null && (g = Object.entries(
      /*fileContents*/
      T[0]
    ).length > 0), g ? 0 : 1;
  }
  _ = H(e, -1), y = Q[_] = q[_](e);
  let D = (
    /*savePath*/
    e[1] && oa(e)
  );
  return {
    c() {
      t = w("div"), n = w("div"), E && E.c(), l = P(), r = w("h3"), r.textContent = "Queries", i = P(), o = w("button"), W(a.$$.fragment), f = F(`
      Group`), s = P(), c = w("button"), W(u.$$.fragment), d = F(`
      Query`), m = P(), y.c(), S = P(), D && D.c(), b(r, "class", "text-lg py-1 font-semibold text-gray-900 dark:text-gray-100 flex-auto"), se(
        r,
        "px-2",
        /*allowClose*/
        e[2]
      ), b(o, "class", "px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), b(o, "title", "Create a new group"), b(c, "class", "px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), b(c, "title", "Create a new query at the top level"), b(n, "class", "px-4 pt-2 flex items-center mb-4 gap-2 shrink-0"), b(t, "class", "flex flex-col");
    },
    m(T, C) {
      R(T, t, C), h(t, n), E && E.m(n, null), h(n, l), h(n, r), h(n, i), h(n, o), G(a, o, null), h(o, f), h(n, s), h(n, c), G(u, c, null), h(c, d), h(t, m), Q[_].m(t, null), h(t, S), D && D.m(t, null), k = !0, p || (N = [
        U(
          o,
          "click",
          /*click_handler*/
          e[8]
        ),
        U(
          c,
          "click",
          /*click_handler_1*/
          e[9]
        )
      ], p = !0);
    },
    p(T, [C]) {
      /*allowClose*/
      T[2] ? E ? (E.p(T, C), C & /*allowClose*/
      4 && v(E, 1)) : (E = ia(T), E.c(), v(E, 1), E.m(n, l)) : E && (ie(), L(E, 1, 1, () => {
        E = null;
      }), oe()), (!k || C & /*allowClose*/
      4) && se(
        r,
        "px-2",
        /*allowClose*/
        T[2]
      );
      let A = _;
      _ = H(T, C), _ === A ? Q[_].p(T, C) : (ie(), L(Q[A], 1, 1, () => {
        Q[A] = null;
      }), oe(), y = Q[_], y ? y.p(T, C) : (y = Q[_] = q[_](T), y.c()), v(y, 1), y.m(t, S)), /*savePath*/
      T[1] ? D ? D.p(T, C) : (D = oa(T), D.c(), D.m(t, null)) : D && (D.d(1), D = null);
    },
    i(T) {
      k || (v(E), v(a.$$.fragment, T), v(u.$$.fragment, T), v(y), k = !0);
    },
    o(T) {
      L(E), L(a.$$.fragment, T), L(u.$$.fragment, T), L(y), k = !1;
    },
    d(T) {
      T && M(t), E && E.d(), V(a), V(u), Q[_].d(), D && D.d(), p = !1, we(N);
    }
  };
}
function _1(e, t, n) {
  let { fileContents: l = {} } = t, { savePath: r = "" } = t, { allowClose: i = !0 } = t, { onClose: o = () => {
  } } = t, { onSelect: a = () => {
  } } = t;
  function f(N = []) {
    let E = Gr(l, N);
    n(0, l = E.contents), a(E.queryPath, Kr(l, E.queryPath));
  }
  function s(N, E) {
    Vr(l, E) && !confirm("An item with this name already exists in this location. Replace it?") || n(0, l = Wa(l, N, E));
  }
  let c = !1;
  const u = () => n(0, l = Ar(l, [])), d = () => {
    f([]);
  }, m = (N) => n(0, l = Ar(l, N)), g = (N) => f(N), _ = (N) => n(0, l = or(l, N)), y = (N) => n(0, l = Wr(l, N).contents), S = (N, E) => s(N, E), k = (N) => n(5, c = N);
  function p(N) {
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
    c,
    f,
    s,
    u,
    d,
    m,
    g,
    _,
    y,
    S,
    k,
    p
  ];
}
class h1 extends pe {
  constructor(t) {
    super(), ke(this, t, _1, b1, ye, {
      fileContents: 0,
      savePath: 1,
      allowClose: 2,
      onClose: 3,
      onSelect: 4
    });
  }
}
function y1(e) {
  let t, n, l, r, i, o, a, f, s, c, u, d = !!/*savePath*/
  e[3] && aa(e);
  const m = [w1, p1], g = [];
  function _(p, N) {
    return (
      /*currentQueryPath*/
      p[18] ? 0 : 1
    );
  }
  l = _(e), r = g[l] = m[l](e);
  function y(p) {
    e[38](p);
  }
  let S = {
    dataFields: (
      /*dataFields*/
      e[4]
    ),
    onRun: (
      /*runAndSaveQuery*/
      e[27]
    ),
    onExplain: (
      /*onExplain*/
      e[6]
    ),
    onHistoryClick: (
      /*onQueryHistoryClick*/
      e[17]
    ),
    width: "w-full",
    savesOnRun: !!/*savePath*/
    e[3]
  };
  /*textInput*/
  e[1] !== void 0 && (S.value = /*textInput*/
  e[1]), a = new o1({ props: S }), Me.push(() => Ze(a, "value", y));
  let k = (
    /*llmAvailable*/
    e[11] && ua(e)
  );
  return {
    c() {
      t = w("div"), d && d.c(), n = P(), r.c(), i = P(), o = w("div"), W(a.$$.fragment), s = P(), k && k.c(), c = be(), b(t, "class", "px-4 pt-2 flex items-center mb-4 gap-2 shrink-0"), b(o, "class", "shrink h-2/3");
    },
    m(p, N) {
      R(p, t, N), d && d.m(t, null), h(t, n), g[l].m(t, null), R(p, i, N), R(p, o, N), G(a, o, null), R(p, s, N), k && k.m(p, N), R(p, c, N), u = !0;
    },
    p(p, N) {
      /*savePath*/
      p[3] ? d ? (d.p(p, N), N[0] & /*savePath*/
      8 && v(d, 1)) : (d = aa(p), d.c(), v(d, 1), d.m(t, n)) : d && (ie(), L(d, 1, 1, () => {
        d = null;
      }), oe());
      let E = l;
      l = _(p), l === E ? g[l].p(p, N) : (ie(), L(g[E], 1, 1, () => {
        g[E] = null;
      }), oe(), r = g[l], r ? r.p(p, N) : (r = g[l] = m[l](p), r.c()), v(r, 1), r.m(t, null));
      const q = {};
      N[0] & /*dataFields*/
      16 && (q.dataFields = /*dataFields*/
      p[4]), N[0] & /*onExplain*/
      64 && (q.onExplain = /*onExplain*/
      p[6]), N[0] & /*onQueryHistoryClick*/
      131072 && (q.onHistoryClick = /*onQueryHistoryClick*/
      p[17]), N[0] & /*savePath*/
      8 && (q.savesOnRun = !!/*savePath*/
      p[3]), !f && N[0] & /*textInput*/
      2 && (f = !0, q.value = /*textInput*/
      p[1], Je(() => f = !1)), a.$set(q), /*llmAvailable*/
      p[11] ? k ? (k.p(p, N), N[0] & /*llmAvailable*/
      2048 && v(k, 1)) : (k = ua(p), k.c(), v(k, 1), k.m(c.parentNode, c)) : k && (ie(), L(k, 1, 1, () => {
        k = null;
      }), oe());
    },
    i(p) {
      u || (v(d), v(r), v(a.$$.fragment, p), v(k), u = !0);
    },
    o(p) {
      L(d), L(r), L(a.$$.fragment, p), L(k), u = !1;
    },
    d(p) {
      p && M(t), d && d.d(), g[l].d(), p && M(i), p && M(o), V(a), p && M(s), k && k.d(p), p && M(c);
    }
  };
}
function k1(e) {
  let t, n, l;
  function r(o) {
    e[30](o);
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
      e[29]
    ),
    onSelect: (
      /*handleQuerySelection*/
      e[23]
    )
  };
  return (
    /*fileContents*/
    e[0] !== void 0 && (i.fileContents = /*fileContents*/
    e[0]), t = new h1({ props: i }), Me.push(() => Ze(t, "fileContents", r)), {
      c() {
        W(t.$$.fragment);
      },
      m(o, a) {
        G(t, o, a), l = !0;
      },
      p(o, a) {
        const f = {};
        a[0] & /*savePath*/
        8 && (f.savePath = /*savePath*/
        o[3]), a[0] & /*currentQueryPath*/
        262144 && (f.allowClose = /*currentQueryPath*/
        o[18].length > 0), a[0] & /*showingBrowser*/
        4194304 && (f.onClose = /*func*/
        o[29]), !n && a[0] & /*fileContents*/
        1 && (n = !0, f.fileContents = /*fileContents*/
        o[0], Je(() => n = !1)), t.$set(f);
      },
      i(o) {
        l || (v(t.$$.fragment, o), l = !0);
      },
      o(o) {
        L(t.$$.fragment, o), l = !1;
      },
      d(o) {
        V(t, o);
      }
    }
  );
}
function aa(e) {
  let t, n, l, r, i;
  return n = new me({
    props: { icon: ka, class: "inline" }
  }), {
    c() {
      t = w("button"), W(n.$$.fragment), b(t, "class", "px-2 py-1.5 text-sm text-center font-semibold rounded transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100 whitespace-nowrap"), b(t, "title", "Browse saved queries (Ctrl+Q)");
    },
    m(o, a) {
      R(o, t, a), G(n, t, null), l = !0, r || (i = U(
        t,
        "click",
        /*click_handler*/
        e[31]
      ), r = !0);
    },
    p: $,
    i(o) {
      l || (v(n.$$.fragment, o), l = !0);
    },
    o(o) {
      L(n.$$.fragment, o), l = !1;
    },
    d(o) {
      o && M(t), V(n), r = !1, i();
    }
  };
}
function p1(e) {
  let t;
  return {
    c() {
      t = w("h3"), t.textContent = "TempoQL Query", b(t, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100 pr-2 whitespace-nowrap truncate");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: $,
    i: $,
    o: $,
    d(n) {
      n && M(t);
    }
  };
}
function w1(e) {
  let t, n, l, r, i, o, a, f, s, c, u, d, m, g, _, y;
  const S = [C1, v1], k = [];
  function p(N, E) {
    return (
      /*isEditingName*/
      N[19] ? 0 : 1
    );
  }
  return t = p(e), n = k[t] = S[t](e), o = new me({ props: { icon: er } }), s = new me({ props: { icon: Qr } }), d = new me({
    props: { icon: yt, class: "inline mr-2" }
  }), {
    c() {
      n.c(), l = P(), r = w("div"), i = w("button"), W(o.$$.fragment), a = P(), f = w("button"), W(s.$$.fragment), c = P(), u = w("button"), W(d.$$.fragment), m = F(`
          Query`), b(i, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), b(i, "title", "Duplicate this query (Ctrl+D)"), b(f, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), b(f, "title", "Delete this query (Ctrl+Shift+Backspace)"), b(r, "class", "flex items-center"), b(u, "class", "px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), b(u, "title", "Create a new query at the top level");
    },
    m(N, E) {
      k[t].m(N, E), R(N, l, E), R(N, r, E), h(r, i), G(o, i, null), h(r, a), h(r, f), G(s, f, null), R(N, c, E), R(N, u, E), G(d, u, null), h(u, m), g = !0, _ || (y = [
        U(i, "click", qe(
          /*duplicateQuery*/
          e[25]
        )),
        U(f, "click", qe(
          /*deleteQuery*/
          e[26]
        )),
        U(
          u,
          "click",
          /*click_handler_2*/
          e[37]
        )
      ], _ = !0);
    },
    p(N, E) {
      let q = t;
      t = p(N), t === q ? k[t].p(N, E) : (ie(), L(k[q], 1, 1, () => {
        k[q] = null;
      }), oe(), n = k[t], n ? n.p(N, E) : (n = k[t] = S[t](N), n.c()), v(n, 1), n.m(l.parentNode, l));
    },
    i(N) {
      g || (v(n), v(o.$$.fragment, N), v(s.$$.fragment, N), v(d.$$.fragment, N), g = !0);
    },
    o(N) {
      L(n), L(o.$$.fragment, N), L(s.$$.fragment, N), L(d.$$.fragment, N), g = !1;
    },
    d(N) {
      k[t].d(N), N && M(l), N && M(r), V(o), V(s), N && M(c), N && M(u), V(d), _ = !1, we(y);
    }
  };
}
function v1(e) {
  let t, n, l, r, i;
  t = new nr({
    props: {
      class: "rounded-lg px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2 cursor-pointer",
      $$slots: {
        default: [
          S1,
          ({ hovering: a }) => ({ 43: a }),
          ({ hovering: a }) => [0, a ? 4096 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    e[36]
  );
  let o = (
    /*currentQueryPath*/
    e[18].length > 1 && sa(e)
  );
  return {
    c() {
      W(t.$$.fragment), n = P(), o && o.c(), l = P(), r = w("div"), b(r, "class", "flex-auto");
    },
    m(a, f) {
      G(t, a, f), R(a, n, f), o && o.m(a, f), R(a, l, f), R(a, r, f), i = !0;
    },
    p(a, f) {
      const s = {};
      f[0] & /*currentQueryPath*/
      262144 | f[1] & /*$$scope, hovering*/
      12288 && (s.$$scope = { dirty: f, ctx: a }), t.$set(s), /*currentQueryPath*/
      a[18].length > 1 ? o ? o.p(a, f) : (o = sa(a), o.c(), o.m(l.parentNode, l)) : o && (o.d(1), o = null);
    },
    i(a) {
      i || (v(t.$$.fragment, a), i = !0);
    },
    o(a) {
      L(t.$$.fragment, a), i = !1;
    },
    d(a) {
      V(t, a), a && M(n), o && o.d(a), a && M(l), a && M(r);
    }
  };
}
function C1(e) {
  let t, n, l, r;
  return {
    c() {
      t = w("form"), n = w("input"), b(n, "type", "text"), b(n, "class", "flat-text-input w-full"), b(t, "class", "flex-auto");
    },
    m(i, o) {
      R(i, t, o), h(t, n), ct(
        n,
        /*newName*/
        e[20]
      ), e[33](n), l || (r = [
        U(
          n,
          "input",
          /*input_input_handler*/
          e[32]
        ),
        U(
          n,
          "blur",
          /*blur_handler*/
          e[34]
        ),
        U(t, "submit", qe(Pr(
          /*submit_handler*/
          e[35]
        )))
      ], l = !0);
    },
    p(i, o) {
      o[0] & /*newName*/
      1048576 && n.value !== /*newName*/
      i[20] && ct(
        n,
        /*newName*/
        i[20]
      );
    },
    i: $,
    o: $,
    d(i) {
      i && M(t), e[33](null), l = !1, we(r);
    }
  };
}
function fa(e) {
  let t, n;
  return t = new me({
    props: {
      icon: hf,
      class: "pl-2 text-gray-900 dark:text-gray-100"
    }
  }), {
    c() {
      W(t.$$.fragment);
    },
    m(l, r) {
      G(t, l, r), n = !0;
    },
    p: $,
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function S1(e) {
  let t, n = (
    /*currentQueryPath*/
    (e[18][
      /*currentQueryPath*/
      e[18].length - 1
    ] ?? "TempoQL Query") + ""
  ), l, r, i, o, a = (
    /*hovering*/
    e[43] && fa()
  );
  return {
    c() {
      t = w("h3"), l = F(n), r = P(), a && a.c(), i = be(), b(t, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap truncate"), b(t, "title", "Rename this query (Ctrl+R)");
    },
    m(f, s) {
      R(f, t, s), h(t, l), R(f, r, s), a && a.m(f, s), R(f, i, s), o = !0;
    },
    p(f, s) {
      (!o || s[0] & /*currentQueryPath*/
      262144) && n !== (n = /*currentQueryPath*/
      (f[18][
        /*currentQueryPath*/
        f[18].length - 1
      ] ?? "TempoQL Query") + "") && ae(l, n), /*hovering*/
      f[43] ? a ? (a.p(f, s), s[1] & /*hovering*/
      4096 && v(a, 1)) : (a = fa(), a.c(), v(a, 1), a.m(i.parentNode, i)) : a && (ie(), L(a, 1, 1, () => {
        a = null;
      }), oe());
    },
    i(f) {
      o || (v(a), o = !0);
    },
    o(f) {
      L(a), o = !1;
    },
    d(f) {
      f && M(t), f && M(r), a && a.d(f), f && M(i);
    }
  };
}
function sa(e) {
  let t, n, l, r = (
    /*currentQueryPath*/
    e[18][
      /*currentQueryPath*/
      e[18].length - 2
    ] + ""
  ), i;
  return {
    c() {
      t = w("div"), n = F("in "), l = w("span"), i = F(r), b(l, "class", "font-mono"), b(t, "class", "text-sm text-gray-600 dark:text-gray-400");
    },
    m(o, a) {
      R(o, t, a), h(t, n), h(t, l), h(l, i);
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
function ua(e) {
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
    e[2]), n = new n1({ props: o }), Me.push(() => Ze(n, "question", i)), {
      c() {
        t = w("div"), W(n.$$.fragment), b(t, "class", "w-full h-1/2 overflow-hidden");
      },
      m(a, f) {
        R(a, t, f), G(n, t, null), r = !0;
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
        a[2], Je(() => l = !1)), n.$set(s);
      },
      i(a) {
        r || (v(n.$$.fragment, a), r = !0);
      },
      o(a) {
        L(n.$$.fragment, a), r = !1;
      },
      d(a) {
        a && M(t), V(n);
      }
    }
  );
}
function N1(e) {
  let t, n, l, r;
  const i = [k1, y1], o = [];
  function a(f, s) {
    return (
      /*showingBrowser*/
      f[22] ? 0 : 1
    );
  }
  return n = a(e), l = o[n] = i[n](e), {
    c() {
      t = w("div"), l.c(), b(t, "class", "w-1/2 shrink-0 flex flex-col h-full z-0");
    },
    m(f, s) {
      R(f, t, s), o[n].m(t, null), r = !0;
    },
    p(f, s) {
      let c = n;
      n = a(f), n === c ? o[n].p(f, s) : (ie(), L(o[c], 1, 1, () => {
        o[c] = null;
      }), oe(), l = o[n], l ? l.p(f, s) : (l = o[n] = i[n](f), l.c()), v(l, 1), l.m(t, null));
    },
    i(f) {
      r || (v(l), r = !0);
    },
    o(f) {
      L(l), r = !1;
    },
    d(f) {
      f && M(t), o[n].d();
    }
  };
}
function M1(e, t, n) {
  let { fileContents: l = {} } = t, { savePath: r = "" } = t, { textInput: i = "" } = t, { dataFields: o = [] } = t, { onRun: a = () => {
  } } = t, { onExplain: f = () => {
  } } = t, { onLLMSubmit: s = () => {
  } } = t, { llmResponse: c = "" } = t, { llmLoading: u = !1 } = t, { llmError: d = "" } = t, { llmAvailable: m = !1 } = t, { apiStatus: g = "" } = t, { extractedQuery: _ = "" } = t, { hasExtractedQuery: y = !1 } = t, { onQueryExtracted: S = () => {
  } } = t, { onHistoryClick: k = () => {
  } } = t, { onQueryHistoryClick: p = () => {
  } } = t, { aiQuestion: N = "" } = t, E = !1, q = [];
  function Q(K, We) {
    n(18, q = K), n(1, i = We), n(22, E = !1);
  }
  let H = !1, D = null, T, C;
  function A(K) {
    n(19, H = !1), K != q[q.length - 1] && (Vr(l, [...q.slice(0, q.length - 1), K]) && !confirm("This name already exists. Are you sure you want to overwrite the existing item?") || (n(0, l = Wa(l, q, [...q.slice(0, q.length - 1), K])), n(18, q = [...q.slice(0, q.length - 1), K])));
  }
  function ee() {
    let K = Wr(l, q);
    n(0, l = K.contents), n(18, q = K.queryPath);
  }
  function J() {
    confirm("Are you sure you want to delete this query? This action cannot be undone.") && (n(0, l = or(l, q)), n(18, q = [])), console.error("deletin");
  }
  function O() {
    q.length > 0 && n(0, l = Va(l, q, i)), a();
  }
  let I = !1;
  function X(K) {
    if (I && (K.ctrlKey || K.metaKey)) {
      if (r && K.key === "r" && !K.shiftKey) {
        K.preventDefault(), n(19, H = !0);
        return;
      } else if (r && K.key === "d" && !K.shiftKey) {
        K.preventDefault(), ee();
        return;
      } else if (r && K.key === "Backspace" && K.shiftKey) {
        K.preventDefault(), J();
        return;
      } else if (r && K.key === "q" && q.length > 0) {
        K.preventDefault(), n(22, E = !E);
        return;
      }
    }
  }
  dt(() => {
    I = !0, window.addEventListener("keydown", X);
  }), ma(() => {
    I = !1, window.removeEventListener("keydown", X);
  });
  const _e = () => n(22, E = !1);
  function ne(K) {
    l = K, n(0, l);
  }
  const Y = () => n(22, E = !0);
  function j() {
    D = this.value, n(20, D), n(19, H), n(18, q);
  }
  function te(K) {
    Me[K ? "unshift" : "push"](() => {
      C = K, n(21, C);
    });
  }
  const ue = () => A(D), B = () => {
    console.log("renaming!"), A(D);
  }, fe = () => n(19, H = !0), le = () => {
    let K = Gr(l, q.slice(0, q.length - 1));
    n(0, l = K.contents), n(18, q = K.queryPath), n(1, i = "");
  };
  function ce(K) {
    i = K, n(1, i);
  }
  const Re = (K) => {
    n(1, i = K), a();
  };
  function Ae(K) {
    N = K, n(2, N);
  }
  return e.$$set = (K) => {
    "fileContents" in K && n(0, l = K.fileContents), "savePath" in K && n(3, r = K.savePath), "textInput" in K && n(1, i = K.textInput), "dataFields" in K && n(4, o = K.dataFields), "onRun" in K && n(5, a = K.onRun), "onExplain" in K && n(6, f = K.onExplain), "onLLMSubmit" in K && n(7, s = K.onLLMSubmit), "llmResponse" in K && n(8, c = K.llmResponse), "llmLoading" in K && n(9, u = K.llmLoading), "llmError" in K && n(10, d = K.llmError), "llmAvailable" in K && n(11, m = K.llmAvailable), "apiStatus" in K && n(12, g = K.apiStatus), "extractedQuery" in K && n(13, _ = K.extractedQuery), "hasExtractedQuery" in K && n(14, y = K.hasExtractedQuery), "onQueryExtracted" in K && n(15, S = K.onQueryExtracted), "onHistoryClick" in K && n(16, k = K.onHistoryClick), "onQueryHistoryClick" in K && n(17, p = K.onQueryHistoryClick), "aiQuestion" in K && n(2, N = K.aiQuestion);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*savePath, currentQueryPath*/
    262152 && r && q.length == 0 && n(22, E = !0), e.$$.dirty[0] & /*isEditingName, newName, currentQueryPath*/
    1835008 && (H && D == null ? n(20, D = q[q.length - 1] ?? null) : H || n(20, D = null)), e.$$.dirty[0] & /*editBox, oldEditBox*/
    270532608 && C !== T && (C && (C.focus(), C.select()), n(28, T = C));
  }, [
    l,
    i,
    N,
    r,
    o,
    a,
    f,
    s,
    c,
    u,
    d,
    m,
    g,
    _,
    y,
    S,
    k,
    p,
    q,
    H,
    D,
    C,
    E,
    Q,
    A,
    ee,
    J,
    O,
    T,
    _e,
    ne,
    Y,
    j,
    te,
    ue,
    B,
    fe,
    le,
    ce,
    Re,
    Ae
  ];
}
class z1 extends pe {
  constructor(t) {
    super(), ke(
      this,
      t,
      M1,
      N1,
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
    e[0]), t = new lu({ props: i }), Me.push(() => Ze(t, "scopeName", r)), {
      c() {
        W(t.$$.fragment);
      },
      m(o, a) {
        G(t, o, a), l = !0;
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
        o[0], Je(() => n = !1)), t.$set(f);
      },
      i(o) {
        l || (v(t.$$.fragment, o), l = !0);
      },
      o(o) {
        L(t.$$.fragment, o), l = !1;
      },
      d(o) {
        V(t, o);
      }
    }
  );
}
function L1(e) {
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
    e[7]), t = new x0({ props: i }), Me.push(() => Ze(t, "textInput", r)), {
      c() {
        W(t.$$.fragment);
      },
      m(o, a) {
        G(t, o, a), l = !0;
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
        o[7], Je(() => n = !1)), t.$set(f);
      },
      i(o) {
        l || (v(t.$$.fragment, o), l = !0);
      },
      o(o) {
        L(t.$$.fragment, o), l = !1;
      },
      d(o) {
        V(t, o);
      }
    }
  );
}
function q1(e) {
  let t, n, l, r, i, o, a, f, s, c, u, d, m, g, _, y, S, k, p;
  function N(C) {
    e[62](C);
  }
  function E(C) {
    e[63](C);
  }
  function q(C) {
    e[64](C);
  }
  let Q = {
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
  e[8] !== void 0 && (Q.fileContents = /*$fileContents*/
  e[8]), /*$textInput*/
  e[7] !== void 0 && (Q.textInput = /*$textInput*/
  e[7]), /*currentQuestion*/
  e[4] !== void 0 && (Q.aiQuestion = /*currentQuestion*/
  e[4]), n = new z1({ props: Q }), Me.push(() => Ze(n, "fileContents", N)), Me.push(() => Ze(n, "textInput", E)), Me.push(() => Ze(n, "aiQuestion", q)), f = new Xf({
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
  const H = [L1, R1], D = [];
  function T(C, A) {
    return (
      /*activeTab*/
      C[1] === "results" ? 0 : (
        /*activeTab*/
        C[1] === "data-elements" ? 1 : -1
      )
    );
  }
  return ~(u = T(e)) && (d = D[u] = H[u](e)), g = new Wo({
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
  }), y = new Wo({
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
  }), k = new B0({
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
      t = w("main"), W(n.$$.fragment), o = P(), a = w("div"), W(f.$$.fragment), s = P(), c = w("div"), d && d.c(), m = P(), W(g.$$.fragment), _ = P(), W(y.$$.fragment), S = P(), W(k.$$.fragment), b(c, "class", "flex-auto w-full min-h-0 z-0 svelte-1pq5c6y"), b(a, "class", "w-1/2 h-full rounded-lg border border-gray-200 dark:border-gray-600 overflow-hidden flex flex-col dark:bg-gray-900 svelte-1pq5c6y"), b(t, "class", "w-full bg-white dark:bg-gray-950 transition-colors duration-200 relative overflow-hidden flex svelte-1pq5c6y"), re(t, "height", "600px");
    },
    m(C, A) {
      R(C, t, A), G(n, t, null), h(t, o), h(t, a), G(f, a, null), h(a, s), h(a, c), ~u && D[u].m(c, null), h(t, m), G(g, t, null), h(t, _), G(y, t, null), h(t, S), G(k, t, null), p = !0;
    },
    p(C, A) {
      const ee = {};
      A[0] & /*$savePath*/
      512 && (ee.savePath = /*$savePath*/
      C[9]), A[0] & /*dataFields*/
      32 && (ee.dataFields = /*dataFields*/
      C[5]), A[0] & /*$llmResponse*/
      64 && (ee.llmResponse = /*$llmResponse*/
      C[6]), A[0] & /*$llmLoading*/
      1024 && (ee.llmLoading = /*$llmLoading*/
      C[10]), A[0] & /*$llmError*/
      2048 && (ee.llmError = /*$llmError*/
      C[11]), A[0] & /*$llmAvailable*/
      4096 && (ee.llmAvailable = /*$llmAvailable*/
      C[12]), A[0] & /*$apiStatus*/
      8192 && (ee.apiStatus = /*$apiStatus*/
      C[13]), A[0] & /*$extractedQuery*/
      16384 && (ee.extractedQuery = /*$extractedQuery*/
      C[14]), A[0] & /*$hasExtractedQuery*/
      32768 && (ee.hasExtractedQuery = /*$hasExtractedQuery*/
      C[15]), !l && A[0] & /*$fileContents*/
      256 && (l = !0, ee.fileContents = /*$fileContents*/
      C[8], Je(() => l = !1)), !r && A[0] & /*$textInput*/
      128 && (r = !0, ee.textInput = /*$textInput*/
      C[7], Je(() => r = !1)), !i && A[0] & /*currentQuestion*/
      16 && (i = !0, ee.aiQuestion = /*currentQuestion*/
      C[4], Je(() => i = !1)), n.$set(ee);
      const J = {};
      A[0] & /*activeTab*/
      2 && (J.activeTab = /*activeTab*/
      C[1]), f.$set(J);
      let O = u;
      u = T(C), u === O ? ~u && D[u].p(C, A) : (d && (ie(), L(D[O], 1, 1, () => {
        D[O] = null;
      }), oe()), ~u ? (d = D[u], d ? d.p(C, A) : (d = D[u] = H[u](C), d.c()), v(d, 1), d.m(c, null)) : d = null);
      const I = {};
      A[0] & /*showAIHistoryDropdown*/
      4 && (I.isVisible = /*showAIHistoryDropdown*/
      C[2]), A[0] & /*$aiHistory*/
      16777216 && (I.history = /*$aiHistory*/
      C[24]), g.$set(I);
      const X = {};
      A[0] & /*showQueryHistoryDropdown*/
      8 && (X.isVisible = /*showQueryHistoryDropdown*/
      C[3]), A[0] & /*$queryHistory*/
      33554432 && (X.history = /*$queryHistory*/
      C[25]), y.$set(X);
      const _e = {};
      A[0] & /*$isLoading*/
      4194304 && (_e.isLoading = /*$isLoading*/
      C[22]), A[0] & /*$loadingMessage*/
      8388608 && (_e.message = /*$loadingMessage*/
      C[23]), k.$set(_e);
    },
    i(C) {
      p || (v(n.$$.fragment, C), v(f.$$.fragment, C), v(d), v(g.$$.fragment, C), v(y.$$.fragment, C), v(k.$$.fragment, C), p = !0);
    },
    o(C) {
      L(n.$$.fragment, C), L(f.$$.fragment, C), L(d), L(g.$$.fragment, C), L(y.$$.fragment, C), L(k.$$.fragment, C), p = !1;
    },
    d(C) {
      C && M(t), V(n), V(f), ~u && D[u].d(), V(g), V(y), V(k);
    }
  };
}
function E1(e, t, n) {
  let l, r, i, o, a, f, s, c, u, d, m, g, _, y, S, k, p, N, E, q, Q, H, { model: D } = t;
  const T = _f(D), { savePath: C, fileContents: A, values: ee, listNames: J, runQuery: O, handleLLMQuestion: I, handleLLMExplanation: X, subqueries: _e, queryError: ne, scopes: Y, scopeConcepts: j, handleScopeAnalysis: te, llmResponse: ue, llmLoading: B, llmError: fe, llmAvailable: le, llmExplanation: ce, apiStatus: Re, isLoading: Ae, loadingMessage: K, extractedQuery: We, hasExtractedQuery: Xt, handleQueryExtraction: Pn, textInput: Ke, queryHistory: Yt, aiHistory: Ut } = T;
  x(e, C, (Z) => n(9, f = Z)), x(e, A, (Z) => n(8, a = Z)), x(e, ee, (Z) => n(17, y = Z)), x(e, J, (Z) => n(61, o = Z)), x(e, _e, (Z) => n(18, S = Z)), x(e, ne, (Z) => n(16, _ = Z)), x(e, Y, (Z) => n(20, p = Z)), x(e, j, (Z) => n(21, N = Z)), x(e, ue, (Z) => n(6, r = Z)), x(e, B, (Z) => n(10, s = Z)), x(e, fe, (Z) => n(11, c = Z)), x(e, le, (Z) => n(12, u = Z)), x(e, ce, (Z) => n(19, k = Z)), x(e, Re, (Z) => n(13, d = Z)), x(e, Ae, (Z) => n(22, E = Z)), x(e, K, (Z) => n(23, q = Z)), x(e, We, (Z) => n(14, m = Z)), x(e, Xt, (Z) => n(15, g = Z)), x(e, Ke, (Z) => n(7, i = Z)), x(e, Yt, (Z) => n(25, H = Z)), x(e, Ut, (Z) => n(24, Q = Z));
  let gt = "", pt = "data-elements", et = !1, tt = !1, nt = "", Qn = { top: 0, left: 0 }, jn = { top: 0, left: 0 };
  function On(Z) {
    n(4, nt = Z), I(Z);
  }
  function xn(Z) {
    n(1, pt = Z);
  }
  function In() {
    console.log("text input", i), i.trim() && O(i), n(1, pt = "results");
  }
  function Hn() {
    n(2, et = !et);
  }
  function Bn() {
    n(3, tt = !tt);
  }
  function ar(Z) {
    console.log("📚 AI History item selected:", Z), n(2, et = !1), n(3, tt = !1), Z.query && (de(Ke, i = Z.query, i), D.set("text_input", Z.query), D.save_changes()), Z.question && n(4, nt = Z.question), Z.answer && de(ue, r = Z.answer, r);
  }
  function Fn() {
    n(2, et = !1);
  }
  function fr() {
    n(3, tt = !1);
  }
  function Jt(Z) {
    a = Z, A.set(a);
  }
  function Gn(Z) {
    i = Z, Ke.set(i);
  }
  function Vn(Z) {
    nt = Z, n(4, nt);
  }
  function wt(Z) {
    i = Z, Ke.set(i);
  }
  const Zt = (Z) => {
    te(Z, !1);
  }, $t = () => {
    te(gt, !0);
  }, lt = (Z, it) => {
    de(Ke, i = i + `{${it}; scope = ${Z}}`, i);
  };
  function rt(Z) {
    gt = Z, n(0, gt);
  }
  return e.$$set = (Z) => {
    "model" in Z && n(60, D = Z.model);
  }, e.$$.update = () => {
    e.$$.dirty[1] & /*$listNames*/
    1073741824 && n(5, l = o || []);
  }, [
    gt,
    pt,
    et,
    tt,
    nt,
    l,
    r,
    i,
    a,
    f,
    s,
    c,
    u,
    d,
    m,
    g,
    _,
    y,
    S,
    k,
    p,
    N,
    E,
    q,
    Q,
    H,
    C,
    A,
    ee,
    J,
    X,
    _e,
    ne,
    Y,
    j,
    te,
    ue,
    B,
    fe,
    le,
    ce,
    Re,
    Ae,
    K,
    We,
    Xt,
    Pn,
    Ke,
    Yt,
    Ut,
    Qn,
    jn,
    On,
    xn,
    In,
    Hn,
    Bn,
    ar,
    Fn,
    fr,
    D,
    o,
    Jt,
    Gn,
    Vn,
    wt,
    Zt,
    $t,
    lt,
    rt
  ];
}
class D1 extends pe {
  constructor(t) {
    super(), ke(this, t, E1, q1, ye, { model: 60 }, null, [-1, -1, -1]);
  }
}
function A1(e) {
  new D1({
    target: e.el,
    props: {
      model: e.model
    }
  });
}
export {
  A1 as render
};
