function $() {
}
function lf(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function ga(e) {
  return e();
}
function Ur() {
  return /* @__PURE__ */ Object.create(null);
}
function ve(e) {
  e.forEach(ga);
}
function Xe(e) {
  return typeof e == "function";
}
function ke(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function rf(e) {
  return Object.keys(e).length === 0;
}
function ma(e, ...t) {
  if (e == null)
    return $;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function I(e, t, n) {
  e.$$.on_destroy.push(ma(t, n));
}
function Ge(e, t, n, l) {
  if (e) {
    const r = ba(e, t, n, l);
    return e[0](r);
  }
}
function ba(e, t, n, l) {
  return e[1] && l ? lf(n.ctx.slice(), e[1](l(t))) : n.ctx;
}
function Ve(e, t, n, l) {
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
function We(e, t, n, l, r, i) {
  if (r) {
    const o = ba(t, n, l, i);
    e.p(o, r);
  }
}
function Ke(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let l = 0; l < n; l++)
      t[l] = -1;
    return t;
  }
  return -1;
}
function Pr(e) {
  const t = {};
  for (const n in e)
    t[n] = !0;
  return t;
}
function ge(e, t, n) {
  return e.set(n), t;
}
function _(e, t) {
  e.appendChild(t);
}
function M(e, t, n) {
  e.insertBefore(t, n || null);
}
function N(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Pe(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function w(e) {
  return document.createElement(e);
}
function Me(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function x(e) {
  return document.createTextNode(e);
}
function O() {
  return x(" ");
}
function _e() {
  return x("");
}
function F(e, t, n, l) {
  return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
}
function Jt(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function Re(e) {
  return function(t) {
    return t.stopPropagation(), e.call(this, t);
  };
}
function m(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function of(e) {
  return Array.from(e.childNodes);
}
function fe(e, t) {
  t = "" + t, e.data !== t && (e.data = t);
}
function je(e, t) {
  e.value = t ?? "";
}
function re(e, t, n, l) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, l ? "important" : "");
}
function Jr(e, t, n) {
  for (let l = 0; l < e.options.length; l += 1) {
    const r = e.options[l];
    if (r.__value === t) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function af(e) {
  const t = e.querySelector(":checked");
  return t && t.__value;
}
let Dl;
function ff() {
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
function sf(e, t) {
  getComputedStyle(e).position === "static" && (e.style.position = "relative");
  const l = w("iframe");
  l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), l.setAttribute("aria-hidden", "true"), l.tabIndex = -1;
  const r = ff();
  let i;
  return r ? (l.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", i = F(window, "message", (o) => {
    o.source === l.contentWindow && t();
  })) : (l.src = "about:blank", l.onload = () => {
    i = F(l.contentWindow, "resize", t), t();
  }), _(e, l), () => {
    (r || i && l.contentWindow) && i(), N(l);
  };
}
function se(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
function uf(e, t, { bubbles: n = !1, cancelable: l = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(e, n, l, t), r;
}
class er {
  constructor(t = !1) {
    this.is_svg = !1, this.is_svg = t, this.e = this.n = null;
  }
  c(t) {
    this.h(t);
  }
  m(t, n, l = null) {
    this.e || (this.is_svg ? this.e = Me(n.nodeName) : this.e = w(n.nodeType === 11 ? "TEMPLATE" : n.nodeName), this.t = n.tagName !== "TEMPLATE" ? n : n.content, this.c(t)), this.i(l);
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
    this.n.forEach(N);
  }
}
let Ln;
function Rn(e) {
  Ln = e;
}
function An() {
  if (!Ln)
    throw new Error("Function called outside component initialization");
  return Ln;
}
function mt(e) {
  An().$$.on_mount.push(e);
}
function _a(e) {
  An().$$.on_destroy.push(e);
}
function ha() {
  const e = An();
  return (t, n, { cancelable: l = !1 } = {}) => {
    const r = e.$$.callbacks[t];
    if (r) {
      const i = uf(t, n, { cancelable: l });
      return r.slice().forEach((o) => {
        o.call(e, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function cf(e, t) {
  return An().$$.context.set(e, t), t;
}
function On(e) {
  return An().$$.context.get(e);
}
function Rr(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((l) => l.call(this, t));
}
const Wt = [], Ne = [];
let Kt = [];
const Lr = [], df = /* @__PURE__ */ Promise.resolve();
let qr = !1;
function gf() {
  qr || (qr = !0, df.then(Je));
}
function qn(e) {
  Kt.push(e);
}
function rt(e) {
  Lr.push(e);
}
const Sr = /* @__PURE__ */ new Set();
let Gt = 0;
function Je() {
  if (Gt !== 0)
    return;
  const e = Ln;
  do {
    try {
      for (; Gt < Wt.length; ) {
        const t = Wt[Gt];
        Gt++, Rn(t), mf(t.$$);
      }
    } catch (t) {
      throw Wt.length = 0, Gt = 0, t;
    }
    for (Rn(null), Wt.length = 0, Gt = 0; Ne.length; )
      Ne.pop()();
    for (let t = 0; t < Kt.length; t += 1) {
      const n = Kt[t];
      Sr.has(n) || (Sr.add(n), n());
    }
    Kt.length = 0;
  } while (Wt.length);
  for (; Lr.length; )
    Lr.pop()();
  qr = !1, Sr.clear(), Rn(e);
}
function mf(e) {
  if (e.fragment !== null) {
    e.update(), ve(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(qn);
  }
}
function bf(e) {
  const t = [], n = [];
  Kt.forEach((l) => e.indexOf(l) === -1 ? t.push(l) : n.push(l)), n.forEach((l) => l()), Kt = t;
}
const xl = /* @__PURE__ */ new Set();
let kt;
function ie() {
  kt = {
    r: 0,
    c: [],
    p: kt
    // parent group
  };
}
function oe() {
  kt.r || ve(kt.c), kt = kt.p;
}
function v(e, t) {
  e && e.i && (xl.delete(e), e.i(t));
}
function z(e, t, n, l) {
  if (e && e.o) {
    if (xl.has(e))
      return;
    xl.add(e), kt.c.push(() => {
      xl.delete(e), l && (n && e.d(1), l());
    }), e.o(t);
  } else
    l && l();
}
function it(e, t, n) {
  const l = e.$$.props[t];
  l !== void 0 && (e.$$.bound[l] = n, n(e.$$.ctx[l]));
}
function X(e) {
  e && e.c();
}
function G(e, t, n, l) {
  const { fragment: r, after_update: i } = e.$$;
  r && r.m(t, n), l || qn(() => {
    const o = e.$$.on_mount.map(ga).filter(Xe);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : ve(o), e.$$.on_mount = [];
  }), i.forEach(qn);
}
function V(e, t) {
  const n = e.$$;
  n.fragment !== null && (bf(n.after_update), ve(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function _f(e, t) {
  e.$$.dirty[0] === -1 && (Wt.push(e), gf(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function pe(e, t, n, l, r, i, o, a = [-1]) {
  const f = Ln;
  Rn(e);
  const s = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: $,
    not_equal: r,
    bound: Ur(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: Ur(),
    dirty: a,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  o && o(s.root);
  let u = !1;
  if (s.ctx = n ? n(e, t.props || {}, (c, d, ...g) => {
    const b = g.length ? g[0] : d;
    return s.ctx && r(s.ctx[c], s.ctx[c] = b) && (!s.skip_bound && s.bound[c] && s.bound[c](b), u && _f(e, c)), d;
  }) : [], s.update(), u = !0, ve(s.before_update), s.fragment = l ? l(s.ctx) : !1, t.target) {
    if (t.hydrate) {
      const c = of(t.target);
      s.fragment && s.fragment.l(c), c.forEach(N);
    } else
      s.fragment && s.fragment.c();
    t.intro && v(e.$$.fragment), G(e, t.target, t.anchor, t.customElement), Je();
  }
  Rn(f);
}
class we {
  $destroy() {
    V(this, 1), this.$destroy = $;
  }
  $on(t, n) {
    if (!Xe(n))
      return $;
    const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return l.push(n), () => {
      const r = l.indexOf(n);
      r !== -1 && l.splice(r, 1);
    };
  }
  $set(t) {
    this.$$set && !rf(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Vt = [];
function hf(e, t) {
  return {
    subscribe: me(e, t).subscribe
  };
}
function me(e, t = $) {
  let n;
  const l = /* @__PURE__ */ new Set();
  function r(a) {
    if (ke(e, a) && (e = a, n)) {
      const f = !Vt.length;
      for (const s of l)
        s[1](), Vt.push(s, e);
      if (f) {
        for (let s = 0; s < Vt.length; s += 2)
          Vt[s][0](Vt[s + 1]);
        Vt.length = 0;
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
function Ce(e, t, n) {
  const l = !Array.isArray(e), r = l ? [e] : e, i = t.length < 2;
  return hf(n, (o) => {
    let a = !1;
    const f = [];
    let s = 0, u = $;
    const c = () => {
      if (s)
        return;
      u();
      const g = t(l ? f[0] : f, o);
      i ? o(g) : u = Xe(g) ? g : $;
    }, d = r.map((g, b) => ma(g, (h) => {
      f[b] = h, s &= ~(1 << b), a && c();
    }, () => {
      s |= 1 << b;
    }));
    return a = !0, c(), function() {
      ve(d), u(), a = !1;
    };
  });
}
function ze(e, t, n) {
  const l = t, r = me(e.get(l) || n);
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
function yf(e) {
  const t = ze(e, "values", {}), n = ze(e, "file_contents", {}), l = ze(e, "_save_path", ""), r = ze(e, "list_names", {
    attributes: [],
    events: [],
    intervals: []
  }), i = ze(e, "subqueries", {}), o = ze(e, "query_error", ""), a = ze(e, "text_input", ""), f = ze(e, "scopes", []), s = ze(e, "scope_concepts", {}), u = ze(e, "isLoading", !1), c = ze(e, "loadingMessage", ""), d = ze(e, "llm_available", !1), g = ze(e, "llm_response", ""), b = ze(e, "llm_loading", !1), h = ze(e, "llm_error", ""), y = ze(e, "api_status", "Checking API connection..."), C = ze(e, "extracted_query", ""), k = ze(e, "llm_explanation", ""), p = ze(e, "has_extracted_query", !1), q = ze(e, "query_history", []), E = ze(e, "ai_history", []);
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
    llmResponse: g,
    llmLoading: b,
    llmError: h,
    llmAvailable: d,
    apiStatus: y,
    extractedQuery: C,
    llmExplanation: k,
    hasExtractedQuery: p,
    textInput: a,
    queryHistory: q,
    aiHistory: E,
    runQuery: (P) => {
      e.set("text_input", P), e.set("process_trigger", "run"), e.save_changes();
    },
    // LLM question handler
    handleLLMQuestion: (P) => {
      e.set("llm_question", P), e.set("llm_trigger", "ask"), e.save_changes();
    },
    handleLLMExplanation: () => {
      e.set("llm_trigger", "explain"), e.save_changes();
    },
    // Query extraction handler - triggered when AI extracts a query
    handleQueryExtraction: () => {
      let P = "";
      C.subscribe((B) => P = B)(), P && P !== D ? (console.log(
        "🔄 Query extracted from AI response:",
        P
      ), console.log("🔄 Current text input:", D), console.log("🔄 Updating text input with extracted query"), D = P, e.set("text_input", P), e.save_changes()) : P === D && console.log(
        "🔄 Extracted query is same as current input, no update needed"
      );
    },
    // Scope analysis handler
    handleScopeAnalysis: (P, B = !1) => {
      console.log(
        "🔍 Scope Analysis requested for:",
        P,
        B ? "(force refresh)" : ""
      );
      const L = B ? `${P}:force` : P;
      e.set("scope_analysis_trigger", L), e.save_changes();
    }
  };
}
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const jr = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, Gl = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [512, 512, [], "f077", "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
}, kf = {
  prefix: "fas",
  iconName: "chart-simple",
  icon: [448, 512, [], "e473", "M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z"]
}, pf = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, wf = pf, ya = {
  prefix: "fas",
  iconName: "bolt-lightning",
  icon: [384, 512, [], "e0b7", "M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z"]
}, Qr = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, ka = {
  prefix: "fas",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
}, vf = {
  prefix: "fas",
  iconName: "sun",
  icon: [512, 512, [9728], "f185", "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]
}, pa = {
  prefix: "fas",
  iconName: "play",
  icon: [384, 512, [9654], "f04b", "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]
}, Cf = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, Sf = Cf, Ye = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, Nf = {
  prefix: "fas",
  iconName: "list-ul",
  icon: [512, 512, ["list-dots"], "f0ca", "M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]
}, wa = Nf, tr = {
  prefix: "fas",
  iconName: "copy",
  icon: [448, 512, [], "f0c5", "M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]
}, vt = {
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
}, Ct = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, Rf = {
  prefix: "fas",
  iconName: "moon",
  icon: [384, 512, [127769, 9214], "f186", "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]
}, Lf = {
  prefix: "fas",
  iconName: "check",
  icon: [448, 512, [10003, 10004], "f00c", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, qf = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, Ef = qf, Df = {
  prefix: "fas",
  iconName: "database",
  icon: [448, 512, [], "f1c0", "M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z"]
}, Tf = {
  prefix: "fas",
  iconName: "circle-xmark",
  icon: [512, 512, [61532, "times-circle", "xmark-circle"], "f057", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]
}, Af = Tf, Tl = parseFloat;
function Er(e, t = ";") {
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
  return l && (s = "center", i = "1.25em"), n && (r = n), t && (t == "lg" ? (f = "1.33333em", a = ".75em", u = "-.225em") : t == "xs" ? f = ".75em" : t == "sm" ? f = ".875em" : f = t.replace("x", "em")), Er([
    Er({
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
  return r && (r == "horizontal" ? f = -1 : r == "vertical" ? s = -1 : f = s = -1), Er(
    [
      `translate(${Tl(t) * i}${o},${Tl(n) * i}${o})`,
      `scale(${f * Tl(e)},${s * Tl(e)})`,
      l && `rotate(${l}${a})`
    ],
    " "
  );
}
function Zr(e) {
  let t, n, l, r, i, o, a, f;
  function s(d, g) {
    return typeof /*i*/
    d[10][4] == "string" ? Qf : jf;
  }
  let u = s(e), c = u(e);
  return {
    c() {
      t = Me("svg"), n = Me("g"), l = Me("g"), c.c(), m(
        l,
        "transform",
        /*transform*/
        e[12]
      ), m(n, "transform", r = "translate(" + /*i*/
      e[10][0] / 2 + " " + /*i*/
      e[10][1] / 2 + ")"), m(n, "transform-origin", i = /*i*/
      e[10][0] / 4 + " 0"), m(t, "id", o = /*id*/
      e[1] || void 0), m(t, "class", a = "svelte-fa " + /*clazz*/
      e[0] + " svelte-1cj2gr0"), m(
        t,
        "style",
        /*s*/
        e[11]
      ), m(t, "viewBox", f = "0 0 " + /*i*/
      e[10][0] + " " + /*i*/
      e[10][1]), m(t, "aria-hidden", "true"), m(t, "role", "img"), m(t, "xmlns", "http://www.w3.org/2000/svg"), se(
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
    m(d, g) {
      M(d, t, g), _(t, n), _(n, l), c.m(l, null);
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
      1 && a !== (a = "svelte-fa " + /*clazz*/
      d[0] + " svelte-1cj2gr0") && m(t, "class", a), g & /*s*/
      2048 && m(
        t,
        "style",
        /*s*/
        d[11]
      ), g & /*i*/
      1024 && f !== (f = "0 0 " + /*i*/
      d[10][0] + " " + /*i*/
      d[10][1]) && m(t, "viewBox", f), g & /*clazz, pulse*/
      17 && se(
        t,
        "pulse",
        /*pulse*/
        d[4]
      ), g & /*clazz, spin*/
      9 && se(
        t,
        "spin",
        /*spin*/
        d[3]
      );
    },
    d(d) {
      d && N(t), c.d();
    }
  };
}
function jf(e) {
  let t, n, l, r, i, o, a, f, s, u;
  return {
    c() {
      t = Me("path"), o = Me("path"), m(t, "d", n = /*i*/
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
      e[10][1] / -2 + ")"), m(o, "d", a = /*i*/
      e[10][4][1]), m(o, "fill", f = /*primaryColor*/
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
      M(c, t, d), M(c, o, d);
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
      1024 && a !== (a = /*i*/
      c[10][4][1]) && m(o, "d", a), d & /*primaryColor, color*/
      36 && f !== (f = /*primaryColor*/
      c[5] || /*color*/
      c[2] || "currentColor") && m(o, "fill", f), d & /*swapOpacity, secondaryOpacity, primaryOpacity*/
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
      c && N(t), c && N(o);
    }
  };
}
function Qf(e) {
  let t, n, l, r;
  return {
    c() {
      t = Me("path"), m(t, "d", n = /*i*/
      e[10][4]), m(t, "fill", l = /*color*/
      e[2] || /*primaryColor*/
      e[5] || "currentColor"), m(t, "transform", r = "translate(" + /*i*/
      e[10][0] / -2 + " " + /*i*/
      e[10][1] / -2 + ")");
    },
    m(i, o) {
      M(i, t, o);
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
      i && N(t);
    }
  };
}
function If(e) {
  let t, n = (
    /*i*/
    e[10][4] && Zr(e)
  );
  return {
    c() {
      n && n.c(), t = _e();
    },
    m(l, r) {
      n && n.m(l, r), M(l, t, r);
    },
    p(l, [r]) {
      /*i*/
      l[10][4] ? n ? n.p(l, r) : (n = Zr(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: $,
    o: $,
    d(l) {
      n && n.d(l), l && N(t);
    }
  };
}
function Hf(e, t, n) {
  let { class: l = "" } = t, { id: r = "" } = t, { style: i = "" } = t, { icon: o } = t, { size: a = "" } = t, { color: f = "" } = t, { fw: s = !1 } = t, { pull: u = "" } = t, { scale: c = 1 } = t, { translateX: d = 0 } = t, { translateY: g = 0 } = t, { rotate: b = "" } = t, { flip: h = !1 } = t, { spin: y = !1 } = t, { pulse: C = !1 } = t, { primaryColor: k = "" } = t, { secondaryColor: p = "" } = t, { primaryOpacity: q = 1 } = t, { secondaryOpacity: E = 0.4 } = t, { swapOpacity: D = !1 } = t, P, B, L;
  return e.$$set = (A) => {
    "class" in A && n(0, l = A.class), "id" in A && n(1, r = A.id), "style" in A && n(13, i = A.style), "icon" in A && n(14, o = A.icon), "size" in A && n(15, a = A.size), "color" in A && n(2, f = A.color), "fw" in A && n(16, s = A.fw), "pull" in A && n(17, u = A.pull), "scale" in A && n(18, c = A.scale), "translateX" in A && n(19, d = A.translateX), "translateY" in A && n(20, g = A.translateY), "rotate" in A && n(21, b = A.rotate), "flip" in A && n(22, h = A.flip), "spin" in A && n(3, y = A.spin), "pulse" in A && n(4, C = A.pulse), "primaryColor" in A && n(5, k = A.primaryColor), "secondaryColor" in A && n(6, p = A.secondaryColor), "primaryOpacity" in A && n(7, q = A.primaryOpacity), "secondaryOpacity" in A && n(8, E = A.secondaryOpacity), "swapOpacity" in A && n(9, D = A.swapOpacity);
  }, e.$$.update = () => {
    e.$$.dirty & /*icon*/
    16384 && n(10, P = o && o.icon || [0, 0, "", [], ""]), e.$$.dirty & /*style, size, pull, fw*/
    237568 && n(11, B = Of(i, a, u, s)), e.$$.dirty & /*scale, translateX, translateY, rotate, flip*/
    8126464 && n(12, L = Pf(c, d, g, b, h, 512));
  }, [
    l,
    r,
    f,
    y,
    C,
    k,
    p,
    q,
    E,
    D,
    P,
    B,
    L,
    i,
    o,
    a,
    s,
    u,
    c,
    d,
    g,
    b,
    h
  ];
}
class be extends we {
  constructor(t) {
    super(), pe(this, t, Hf, If, ke, {
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
function Bf() {
  const t = (typeof window < "u" ? localStorage.getItem("theme") : "dark") || "dark", { subscribe: n, set: l, update: r } = me(t);
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
const Vl = Bf();
function xf(e) {
  let t, n;
  return t = new be({ props: { icon: Rf } }), {
    c() {
      X(t.$$.fragment);
    },
    m(l, r) {
      G(t, l, r), n = !0;
    },
    p: $,
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function Ff(e) {
  let t, n;
  return t = new be({ props: { icon: vf } }), {
    c() {
      X(t.$$.fragment);
    },
    m(l, r) {
      G(t, l, r), n = !0;
    },
    p: $,
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function Gf(e) {
  let t, n, l, r, i, o;
  const a = [Ff, xf], f = [];
  function s(u, c) {
    return (
      /*$theme*/
      u[0] === "dark" ? 0 : 1
    );
  }
  return n = s(e), l = f[n] = a[n](e), {
    c() {
      t = w("button"), l.c(), m(t, "class", "px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"), m(t, "title", "Toggle theme");
    },
    m(u, c) {
      M(u, t, c), f[n].m(t, null), r = !0, i || (o = F(
        t,
        "click",
        /*toggleTheme*/
        e[1]
      ), i = !0);
    },
    p(u, [c]) {
      let d = n;
      n = s(u), n === d ? f[n].p(u, c) : (ie(), z(f[d], 1, 1, () => {
        f[d] = null;
      }), oe(), l = f[n], l ? l.p(u, c) : (l = f[n] = a[n](u), l.c()), v(l, 1), l.m(t, null));
    },
    i(u) {
      r || (v(l), r = !0);
    },
    o(u) {
      z(l), r = !1;
    },
    d(u) {
      u && N(t), f[n].d(), i = !1, o();
    }
  };
}
function Vf(e, t, n) {
  let l;
  I(e, Vl, (i) => n(0, l = i));
  function r() {
    console.log("Theme toggle clicked, current theme:", l), Vl.toggle();
  }
  return e.$$.update = () => {
    if (e.$$.dirty & /*$theme*/
    1 && (console.log("Theme changed to:", l), typeof window < "u")) {
      const i = document.documentElement;
      console.log("HTML classes:", i.className), console.log("Has dark class:", i.classList.contains("dark"));
    }
  }, [l, r];
}
class Wf extends we {
  constructor(t) {
    super(), pe(this, t, Vf, Gf, ke, {});
  }
}
function $r(e, t, n) {
  const l = e.slice();
  return l[4] = t[n], l;
}
function ei(e) {
  let t, n, l, r = (
    /*tab*/
    e[4].label + ""
  ), i, o, a, f, s;
  n = new be({
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
      t = w("button"), X(n.$$.fragment), l = O(), i = x(r), m(t, "class", o = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*activeTab*/
      (e[0] === /*tab*/
      e[4].id ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600"));
    },
    m(c, d) {
      M(c, t, d), G(n, t, null), _(t, l), _(t, i), a = !0, f || (s = F(t, "click", u), f = !0);
    },
    p(c, d) {
      e = c, (!a || d & /*activeTab*/
      1 && o !== (o = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*activeTab*/
      (e[0] === /*tab*/
      e[4].id ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600"))) && m(t, "class", o);
    },
    i(c) {
      a || (v(n.$$.fragment, c), a = !0);
    },
    o(c) {
      z(n.$$.fragment, c), a = !1;
    },
    d(c) {
      c && N(t), V(n), f = !1, s();
    }
  };
}
function Kf(e) {
  let t, n, l, r, i, o, a, f = (
    /*tabs*/
    e[2]
  ), s = [];
  for (let c = 0; c < f.length; c += 1)
    s[c] = ei($r(e, f, c));
  const u = (c) => z(s[c], 1, 1, () => {
    s[c] = null;
  });
  return o = new Wf({}), {
    c() {
      t = w("div"), n = w("nav");
      for (let c = 0; c < s.length; c += 1)
        s[c].c();
      l = O(), r = w("div"), i = O(), X(o.$$.fragment), m(r, "class", "flex-auto"), m(n, "class", "flex gap-2 px-4 py-2"), m(n, "aria-label", "Tabs"), m(t, "class", "w-full bg-gray-300 dark:bg-gray-800 dark:text-white");
    },
    m(c, d) {
      M(c, t, d), _(t, n);
      for (let g = 0; g < s.length; g += 1)
        s[g] && s[g].m(n, null);
      _(n, l), _(n, r), _(n, i), G(o, n, null), a = !0;
    },
    p(c, [d]) {
      if (d & /*activeTab, tabs, onTabChange*/
      7) {
        f = /*tabs*/
        c[2];
        let g;
        for (g = 0; g < f.length; g += 1) {
          const b = $r(c, f, g);
          s[g] ? (s[g].p(b, d), v(s[g], 1)) : (s[g] = ei(b), s[g].c(), v(s[g], 1), s[g].m(n, l));
        }
        for (ie(), g = f.length; g < s.length; g += 1)
          u(g);
        oe();
      }
    },
    i(c) {
      if (!a) {
        for (let d = 0; d < f.length; d += 1)
          v(s[d]);
        v(o.$$.fragment, c), a = !0;
      }
    },
    o(c) {
      s = s.filter(Boolean);
      for (let d = 0; d < s.length; d += 1)
        z(s[d]);
      z(o.$$.fragment, c), a = !1;
    },
    d(c) {
      c && N(t), Pe(s, c), V(o);
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
      icon: kf
    },
    {
      id: "data-elements",
      label: "Data Elements",
      icon: Df
    }
  ], o = (a) => r(a.id);
  return e.$$set = (a) => {
    "activeTab" in a && n(0, l = a.activeTab), "onTabChange" in a && n(1, r = a.onTabChange);
  }, [l, r, i, o];
}
class Yf extends we {
  constructor(t) {
    super(), pe(this, t, Xf, Kf, ke, { activeTab: 0, onTabChange: 1 });
  }
}
function Uf(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Wl(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, l = e.slice(0, n);
  return [
    l.length > 1 ? l[0] + l.slice(2) : l,
    +e.slice(n + 1)
  ];
}
function Yt(e) {
  return e = Wl(Math.abs(e)), e ? e[1] : NaN;
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
function Kl(e) {
  if (!(t = $f.exec(e)))
    throw new Error("invalid format: " + e);
  var t;
  return new Ir({
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
Kl.prototype = Ir.prototype;
function Ir(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Ir.prototype.toString = function() {
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
var va;
function ts(e, t) {
  var n = Wl(e, t);
  if (!n)
    return e + "";
  var l = n[0], r = n[1], i = r - (va = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, o = l.length;
  return i === o ? l : i > o ? l + new Array(i - o + 1).join("0") : i > 0 ? l.slice(0, i) + "." + l.slice(i) : "0." + new Array(1 - i).join("0") + Wl(e, Math.max(0, t + i - 1))[0];
}
function ti(e, t) {
  var n = Wl(e, t);
  if (!n)
    return e + "";
  var l = n[0], r = n[1];
  return r < 0 ? "0." + new Array(-r).join("0") + l : l.length > r + 1 ? l.slice(0, r + 1) + "." + l.slice(r + 1) : l + new Array(r - l.length + 2).join("0");
}
const ni = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Uf,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => ti(e * 100, t),
  r: ti,
  s: ts,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function li(e) {
  return e;
}
var ri = Array.prototype.map, ii = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function ns(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? li : Jf(ri.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", l = e.currency === void 0 ? "" : e.currency[1] + "", r = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? li : Zf(ri.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", a = e.minus === void 0 ? "−" : e.minus + "", f = e.nan === void 0 ? "NaN" : e.nan + "";
  function s(c) {
    c = Kl(c);
    var d = c.fill, g = c.align, b = c.sign, h = c.symbol, y = c.zero, C = c.width, k = c.comma, p = c.precision, q = c.trim, E = c.type;
    E === "n" ? (k = !0, E = "g") : ni[E] || (p === void 0 && (p = 12), q = !0, E = "g"), (y || d === "0" && g === "=") && (y = !0, d = "0", g = "=");
    var D = h === "$" ? n : h === "#" && /[boxX]/.test(E) ? "0" + E.toLowerCase() : "", P = h === "$" ? l : /[%p]/.test(E) ? o : "", B = ni[E], L = /[defgprs%]/.test(E);
    p = p === void 0 ? 6 : /[gprs]/.test(E) ? Math.max(1, Math.min(21, p)) : Math.max(0, Math.min(20, p));
    function A(R) {
      var T = D, W = P, U, Q, H;
      if (E === "c")
        W = B(R) + W, R = "";
      else {
        R = +R;
        var J = R < 0 || 1 / R < 0;
        if (R = isNaN(R) ? f : B(Math.abs(R), p), q && (R = es(R)), J && +R == 0 && b !== "+" && (J = !1), T = (J ? b === "(" ? b : a : b === "-" || b === "(" ? "" : b) + T, W = (E === "s" ? ii[8 + va / 3] : "") + W + (J && b === "(" ? ")" : ""), L) {
          for (U = -1, Q = R.length; ++U < Q; )
            if (H = R.charCodeAt(U), 48 > H || H > 57) {
              W = (H === 46 ? r + R.slice(U + 1) : R.slice(U)) + W, R = R.slice(0, U);
              break;
            }
        }
      }
      k && !y && (R = t(R, 1 / 0));
      var he = T.length + R.length + W.length, ne = he < C ? new Array(C - he + 1).join(d) : "";
      switch (k && y && (R = t(ne + R, ne.length ? C - W.length : 1 / 0), ne = ""), g) {
        case "<":
          R = T + R + W + ne;
          break;
        case "=":
          R = T + ne + R + W;
          break;
        case "^":
          R = ne.slice(0, he = ne.length >> 1) + T + R + W + ne.slice(he);
          break;
        default:
          R = ne + T + R + W;
          break;
      }
      return i(R);
    }
    return A.toString = function() {
      return c + "";
    }, A;
  }
  function u(c, d) {
    var g = s((c = Kl(c), c.type = "f", c)), b = Math.max(-8, Math.min(8, Math.floor(Yt(d) / 3))) * 3, h = Math.pow(10, -b), y = ii[8 + b / 3];
    return function(C) {
      return g(h * C) + y;
    };
  }
  return {
    format: s,
    formatPrefix: u
  };
}
var Al, Se, Ca;
ls({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function ls(e) {
  return Al = ns(e), Se = Al.format, Ca = Al.formatPrefix, Al;
}
function Sa(e) {
  return Math.max(0, -Yt(Math.abs(e)));
}
function rs(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Yt(t) / 3))) * 3 - Yt(Math.abs(e)));
}
function is(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Yt(t) - Yt(e)) + 1;
}
function Zt(e) {
  for (var t = e.length / 6 | 0, n = new Array(t), l = 0; l < t; )
    n[l] = "#" + e.slice(l * 6, ++l * 6);
  return n;
}
const os = Zt("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), as = Zt("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function Hr(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Na(e, t) {
  var n = Object.create(e.prototype);
  for (var l in t)
    n[l] = t[l];
  return n;
}
function Pn() {
}
var En = 0.7, Xl = 1 / En, Xt = "\\s*([+-]?\\d+)\\s*", Dn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", et = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", fs = /^#([0-9a-f]{3,8})$/, ss = new RegExp(`^rgb\\(${Xt},${Xt},${Xt}\\)$`), us = new RegExp(`^rgb\\(${et},${et},${et}\\)$`), cs = new RegExp(`^rgba\\(${Xt},${Xt},${Xt},${Dn}\\)$`), ds = new RegExp(`^rgba\\(${et},${et},${et},${Dn}\\)$`), gs = new RegExp(`^hsl\\(${Dn},${et},${et}\\)$`), ms = new RegExp(`^hsla\\(${Dn},${et},${et},${Dn}\\)$`), oi = {
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
Hr(Pn, Tn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ai,
  // Deprecated! Use color.formatHex.
  formatHex: ai,
  formatHex8: bs,
  formatHsl: _s,
  formatRgb: fi,
  toString: fi
});
function ai() {
  return this.rgb().formatHex();
}
function bs() {
  return this.rgb().formatHex8();
}
function _s() {
  return Ma(this).formatHsl();
}
function fi() {
  return this.rgb().formatRgb();
}
function Tn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = fs.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? si(t) : n === 3 ? new Ae(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ol(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ol(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ss.exec(e)) ? new Ae(t[1], t[2], t[3], 1) : (t = us.exec(e)) ? new Ae(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = cs.exec(e)) ? Ol(t[1], t[2], t[3], t[4]) : (t = ds.exec(e)) ? Ol(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = gs.exec(e)) ? di(t[1], t[2] / 100, t[3] / 100, 1) : (t = ms.exec(e)) ? di(t[1], t[2] / 100, t[3] / 100, t[4]) : oi.hasOwnProperty(e) ? si(oi[e]) : e === "transparent" ? new Ae(NaN, NaN, NaN, 0) : null;
}
function si(e) {
  return new Ae(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ol(e, t, n, l) {
  return l <= 0 && (e = t = n = NaN), new Ae(e, t, n, l);
}
function hs(e) {
  return e instanceof Pn || (e = Tn(e)), e ? (e = e.rgb(), new Ae(e.r, e.g, e.b, e.opacity)) : new Ae();
}
function Yl(e, t, n, l) {
  return arguments.length === 1 ? hs(e) : new Ae(e, t, n, l ?? 1);
}
function Ae(e, t, n, l) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +l;
}
Hr(Ae, Yl, Na(Pn, {
  brighter(e) {
    return e = e == null ? Xl : Math.pow(Xl, e), new Ae(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? En : Math.pow(En, e), new Ae(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ae(wt(this.r), wt(this.g), wt(this.b), Ul(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ui,
  // Deprecated! Use color.formatHex.
  formatHex: ui,
  formatHex8: ys,
  formatRgb: ci,
  toString: ci
}));
function ui() {
  return `#${pt(this.r)}${pt(this.g)}${pt(this.b)}`;
}
function ys() {
  return `#${pt(this.r)}${pt(this.g)}${pt(this.b)}${pt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ci() {
  const e = Ul(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${wt(this.r)}, ${wt(this.g)}, ${wt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ul(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function wt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function pt(e) {
  return e = wt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function di(e, t, n, l) {
  return l <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Fe(e, t, n, l);
}
function Ma(e) {
  if (e instanceof Fe)
    return new Fe(e.h, e.s, e.l, e.opacity);
  if (e instanceof Pn || (e = Tn(e)), !e)
    return new Fe();
  if (e instanceof Fe)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, l = e.b / 255, r = Math.min(t, n, l), i = Math.max(t, n, l), o = NaN, a = i - r, f = (i + r) / 2;
  return a ? (t === i ? o = (n - l) / a + (n < l) * 6 : n === i ? o = (l - t) / a + 2 : o = (t - n) / a + 4, a /= f < 0.5 ? i + r : 2 - i - r, o *= 60) : a = f > 0 && f < 1 ? 0 : o, new Fe(o, a, f, e.opacity);
}
function ks(e, t, n, l) {
  return arguments.length === 1 ? Ma(e) : new Fe(e, t, n, l ?? 1);
}
function Fe(e, t, n, l) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +l;
}
Hr(Fe, ks, Na(Pn, {
  brighter(e) {
    return e = e == null ? Xl : Math.pow(Xl, e), new Fe(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? En : Math.pow(En, e), new Fe(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, l = n + (n < 0.5 ? n : 1 - n) * t, r = 2 * n - l;
    return new Ae(
      Nr(e >= 240 ? e - 240 : e + 120, r, l),
      Nr(e, r, l),
      Nr(e < 120 ? e + 240 : e - 120, r, l),
      this.opacity
    );
  },
  clamp() {
    return new Fe(gi(this.h), Pl(this.s), Pl(this.l), Ul(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ul(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${gi(this.h)}, ${Pl(this.s) * 100}%, ${Pl(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function gi(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Pl(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Nr(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Br = (e) => () => e;
function ps(e, t) {
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
  return (e = +e) == 1 ? za : function(t, n) {
    return n - t ? ws(t, n, e) : Br(isNaN(t) ? n : t);
  };
}
function za(e, t) {
  var n = t - e;
  return n ? ps(e, n) : Br(isNaN(e) ? t : e);
}
const mi = function e(t) {
  var n = vs(t);
  function l(r, i) {
    var o = n((r = Yl(r)).r, (i = Yl(i)).r), a = n(r.g, i.g), f = n(r.b, i.b), s = za(r.opacity, i.opacity);
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
    r[o] = xr(e[o], t[o]);
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
function Jl(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function zs(e, t) {
  var n = {}, l = {}, r;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (r in t)
    r in e ? n[r] = xr(e[r], t[r]) : l[r] = t[r];
  return function(i) {
    for (r in n)
      l[r] = n[r](i);
    return l;
  };
}
var Dr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Mr = new RegExp(Dr.source, "g");
function Rs(e) {
  return function() {
    return e;
  };
}
function Ls(e) {
  return function(t) {
    return e(t) + "";
  };
}
function qs(e, t) {
  var n = Dr.lastIndex = Mr.lastIndex = 0, l, r, i, o = -1, a = [], f = [];
  for (e = e + "", t = t + ""; (l = Dr.exec(e)) && (r = Mr.exec(t)); )
    (i = r.index) > n && (i = t.slice(n, i), a[o] ? a[o] += i : a[++o] = i), (l = l[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, f.push({ i: o, x: Jl(l, r) })), n = Mr.lastIndex;
  return n < t.length && (i = t.slice(n), a[o] ? a[o] += i : a[++o] = i), a.length < 2 ? f[0] ? Ls(f[0].x) : Rs(t) : (t = f.length, function(s) {
    for (var u = 0, c; u < t; ++u)
      a[(c = f[u]).i] = c.x(s);
    return a.join("");
  });
}
function xr(e, t) {
  var n = typeof t, l;
  return t == null || n === "boolean" ? Br(t) : (n === "number" ? Jl : n === "string" ? (l = Tn(t)) ? (t = l, mi) : qs : t instanceof Tn ? mi : t instanceof Date ? Ms : Ss(t) ? Cs : Array.isArray(t) ? Ns : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? zs : Jl)(e, t);
}
function Es(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function nr(e) {
  var t = e.length;
  return function(n) {
    return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
  };
}
const Ds = nr(Zt("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
nr(Zt("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
nr(Zt("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
nr(Zt("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function Ts(e) {
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
      M(o, t, a), r || (i = [
        F(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[10]
        ),
        F(
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
      (o[7] ? "hover:opacity-50" : "") + " svelte-109q9hn") && m(t, "class", n), a & /*widthString, colorScale, fraction, color, absolutePosition, maxWidth, leftFraction*/
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
      o[2]}px;` : "")) && m(t, "style", l), a & /*absolutePosition, hoverable, loaded*/
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
      o && N(t), r = !1, ve(i);
    }
  };
}
function As(e, t, n) {
  let { absolutePosition: l = !1 } = t, { fraction: r = 1 } = t, { leftFraction: i = 0 } = t, { maxWidth: o = null } = t, { colorScale: a = null } = t, { color: f = "lightgray" } = t, { rounded: s = !0 } = t, { hoverable: u = !1 } = t;
  mt(() => {
    setTimeout(() => n(8, c = !0), 100);
  });
  let c = !1, d = "";
  function g(h) {
    Rr.call(this, e, h);
  }
  function b(h) {
    Rr.call(this, e, h);
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
    g,
    b
  ];
}
class Fr extends we {
  constructor(t) {
    super(), pe(this, t, As, Ts, ke, {
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
}), bi = (e) => ({ hoveringIndex: (
  /*hoveringIndex*/
  e[13]
) });
function _i(e, t, n) {
  const l = e.slice();
  return l[25] = t[n], l[27] = n, l;
}
function hi(e) {
  let t, n;
  return {
    c() {
      t = w("div"), n = x(
        /*title*/
        e[11]
      ), m(t, "class", "font-bold text-xs truncate text-right"), re(t, "width", "96px");
    },
    m(l, r) {
      M(l, t, r), _(t, n);
    },
    p(l, r) {
      r & /*title*/
      2048 && fe(
        n,
        /*title*/
        l[11]
      );
    },
    d(l) {
      l && N(t);
    }
  };
}
function yi(e) {
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
      X(t.$$.fragment);
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
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function js(e) {
  let t, n;
  return t = new Fr({
    props: {
      absolutePosition: !0,
      fraction: (
        /*scale*/
        (e[1] || Ci)(
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
      G(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*scale, value*/
      6 && (i.fraction = /*scale*/
      (l[1] || Ci)(
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
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function Qs(e) {
  let t, n, l = (
    /*values*/
    e[3]
  ), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = ki(_i(e, l, o));
  const i = (o) => z(r[o], 1, 1, () => {
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
      M(o, t, a), n = !0;
    },
    p(o, a) {
      if (a & /*scale, offsets, values, colors, hoverable, hoveringIndex*/
      25674) {
        l = /*values*/
        o[3];
        let f;
        for (f = 0; f < l.length; f += 1) {
          const s = _i(o, l, f);
          r[f] ? (r[f].p(s, a), v(r[f], 1)) : (r[f] = ki(s), r[f].c(), v(r[f], 1), r[f].m(t.parentNode, t));
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
        z(r[a]);
      n = !1;
    },
    d(o) {
      Pe(r, o), o && N(t);
    }
  };
}
function ki(e) {
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
          (e[1] || wi)(
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
        (e[1] || vi)(
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
      G(t, r, i), n = !0;
    },
    p(r, i) {
      e = r;
      const o = {};
      i & /*scale, offsets*/
      16386 && (o.leftFraction = /*i*/
      e[27] > 0 ? (
        /*scale*/
        (e[1] || wi)(
          /*offsets*/
          e[14][
            /*i*/
            e[27] - 1
          ]
        )
      ) : 0), i & /*scale, values*/
      10 && (o.fraction = /*scale*/
      (e[1] || vi)(
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
      z(t.$$.fragment, r), n = !1;
    },
    d(r) {
      V(t, r);
    }
  };
}
function pi(e) {
  let t, n, l, r;
  const i = [Hs, Is], o = [];
  function a(f, s) {
    return (
      /*$$slots*/
      f[15].caption ? 1 : 0
    );
  }
  return n = a(e), l = o[n] = i[n](e), {
    c() {
      t = w("div"), l.c(), m(t, "class", "text-xs text-gray-800 dark:text-gray-200");
    },
    m(f, s) {
      M(f, t, s), o[n].m(t, null), r = !0;
    },
    p(f, s) {
      let u = n;
      n = a(f), n === u ? o[n].p(f, s) : (ie(), z(o[u], 1, 1, () => {
        o[u] = null;
      }), oe(), l = o[n], l ? l.p(f, s) : (l = o[n] = i[n](f), l.c()), v(l, 1), l.m(t, null));
    },
    i(f) {
      r || (v(l), r = !0);
    },
    o(f) {
      z(l), r = !1;
    },
    d(f) {
      f && N(t), o[n].d();
    }
  };
}
function Is(e) {
  let t;
  const n = (
    /*#slots*/
    e[17].caption
  ), l = Ge(
    n,
    e,
    /*$$scope*/
    e[16],
    bi
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
      73728) && We(
        l,
        n,
        r,
        /*$$scope*/
        r[16],
        t ? Ve(
          n,
          /*$$scope*/
          r[16],
          i,
          Ps
        ) : Ke(
          /*$$scope*/
          r[16]
        ),
        bi
      );
    },
    i(r) {
      t || (v(l, r), t = !0);
    },
    o(r) {
      z(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function Hs(e) {
  let t = Se(".3")(
    /*value*/
    e[2]
  ) + "", n;
  return {
    c() {
      n = x(t);
    },
    m(l, r) {
      M(l, n, r);
    },
    p(l, r) {
      r & /*value*/
      4 && t !== (t = Se(".3")(
        /*value*/
        l[2]
      ) + "") && fe(n, t);
    },
    i: $,
    o: $,
    d(l) {
      l && N(n);
    }
  };
}
function Bs(e) {
  let t, n, l, r, i, o, a, f, s = !!/*title*/
  e[11] && hi(e), u = (
    /*showFullBar*/
    e[4] && yi(e)
  );
  const c = [Qs, js], d = [];
  function g(h, y) {
    return (
      /*values*/
      h[3] != null ? 0 : 1
    );
  }
  i = g(e), o = d[i] = c[i](e);
  let b = (
    /*showTooltip*/
    e[5] && pi(e)
  );
  return {
    c() {
      t = w("div"), s && s.c(), n = O(), l = w("div"), u && u.c(), r = O(), o.c(), a = O(), b && b.c(), m(l, "class", "parent-bar relative rounded-full overflow-hidden"), re(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), re(l, "height", "6px"), se(l, "mb-1", !/*horizontalLayout*/
      e[12]), m(t, "class", "items-center gap-1"), se(
        t,
        "flex",
        /*horizontalLayout*/
        e[12]
      );
    },
    m(h, y) {
      M(h, t, y), s && s.m(t, null), _(t, n), _(t, l), u && u.m(l, null), _(l, r), d[i].m(l, null), _(t, a), b && b.m(t, null), f = !0;
    },
    p(h, [y]) {
      /*title*/
      h[11] ? s ? s.p(h, y) : (s = hi(h), s.c(), s.m(t, n)) : s && (s.d(1), s = null), /*showFullBar*/
      h[4] ? u ? (u.p(h, y), y & /*showFullBar*/
      16 && v(u, 1)) : (u = yi(h), u.c(), v(u, 1), u.m(l, r)) : u && (ie(), z(u, 1, 1, () => {
        u = null;
      }), oe());
      let C = i;
      i = g(h), i === C ? d[i].p(h, y) : (ie(), z(d[C], 1, 1, () => {
        d[C] = null;
      }), oe(), o = d[i], o ? o.p(h, y) : (o = d[i] = c[i](h), o.c()), v(o, 1), o.m(l, null)), (!f || y & /*width*/
      1) && re(
        l,
        "width",
        /*width*/
        h[0] == null ? "100%" : `${/*width*/
        h[0]}px`
      ), (!f || y & /*horizontalLayout*/
      4096) && se(l, "mb-1", !/*horizontalLayout*/
      h[12]), /*showTooltip*/
      h[5] ? b ? (b.p(h, y), y & /*showTooltip*/
      32 && v(b, 1)) : (b = pi(h), b.c(), v(b, 1), b.m(t, null)) : b && (ie(), z(b, 1, 1, () => {
        b = null;
      }), oe()), (!f || y & /*horizontalLayout*/
      4096) && se(
        t,
        "flex",
        /*horizontalLayout*/
        h[12]
      );
    },
    i(h) {
      f || (v(u), v(o), v(b), f = !0);
    },
    o(h) {
      z(u), z(o), z(b), f = !1;
    },
    d(h) {
      h && N(t), s && s.d(), u && u.d(), d[i].d(), b && b.d();
    }
  };
}
const wi = (e) => e, vi = (e) => e, Ci = (e) => e;
function xs(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = Pr(l);
  let { width: o = 100 } = t, { scale: a = null } = t, { value: f = 0 } = t, { values: s = null } = t, { showFullBar: u = !1 } = t, { showTooltip: c = !0 } = t, { colors: d = os } = t, { colorScale: g = Ds } = t, { color: b = null } = t, { fullBarColor: h = "#e5e7eb" } = t, { hoverable: y = !1 } = t, { title: C = null } = t, { horizontalLayout: k = !1 } = t, p = null, q = [];
  const E = (T) => n(13, p = -1), D = (T) => n(13, p = null), P = (T, W) => n(13, p = T), B = (T) => n(13, p = null), L = () => b, A = (T) => n(13, p = 0), R = (T) => n(13, p = null);
  return e.$$set = (T) => {
    "width" in T && n(0, o = T.width), "scale" in T && n(1, a = T.scale), "value" in T && n(2, f = T.value), "values" in T && n(3, s = T.values), "showFullBar" in T && n(4, u = T.showFullBar), "showTooltip" in T && n(5, c = T.showTooltip), "colors" in T && n(6, d = T.colors), "colorScale" in T && n(7, g = T.colorScale), "color" in T && n(8, b = T.color), "fullBarColor" in T && n(9, h = T.fullBarColor), "hoverable" in T && n(10, y = T.hoverable), "title" in T && n(11, C = T.title), "horizontalLayout" in T && n(12, k = T.horizontalLayout), "$$scope" in T && n(16, r = T.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*values*/
    8 && (s != null ? n(14, q = Os(s)) : n(14, q = []));
  }, [
    o,
    a,
    f,
    s,
    u,
    c,
    d,
    g,
    b,
    h,
    y,
    C,
    k,
    p,
    q,
    i,
    r,
    l,
    E,
    D,
    P,
    B,
    L,
    A,
    R
  ];
}
class Gr extends we {
  constructor(t) {
    super(), pe(this, t, xs, Bs, ke, {
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
const Fs = (e) => ({ hovering: e & /*hovering*/
1 }), Si = (e) => ({ hovering: (
  /*hovering*/
  e[0]
) });
function Gs(e) {
  let t, n, l, r;
  const i = (
    /*#slots*/
    e[4].default
  ), o = Ge(
    i,
    e,
    /*$$scope*/
    e[3],
    Si
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
    m(a, f) {
      M(a, t, f), o && o.m(t, null), n = !0, l || (r = [
        F(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[6]
        ),
        F(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[7]
        ),
        F(
          t,
          "click",
          /*click_handler*/
          e[5]
        )
      ], l = !0);
    },
    p(a, [f]) {
      o && o.p && (!n || f & /*$$scope, hovering*/
      9) && We(
        o,
        i,
        a,
        /*$$scope*/
        a[3],
        n ? Ve(
          i,
          /*$$scope*/
          a[3],
          f,
          Fs
        ) : Ke(
          /*$$scope*/
          a[3]
        ),
        Si
      ), (!n || f & /*clazz*/
      2) && m(
        t,
        "class",
        /*clazz*/
        a[1]
      ), (!n || f & /*style*/
      4) && m(
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
      z(o, a), n = !1;
    },
    d(a) {
      a && N(t), o && o.d(a), l = !1, ve(r);
    }
  };
}
function Vs(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t, { hovering: i = !1 } = t, { class: o = "" } = t, { style: a = "" } = t;
  function f(c) {
    Rr.call(this, e, c);
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
class lr extends we {
  constructor(t) {
    super(), pe(this, t, Vs, Gs, ke, { hovering: 0, class: 1, style: 2 });
  }
}
function Ni(e, t, n) {
  const l = e.slice();
  return l[37] = t[n], l[39] = n, l;
}
function Mi(e, t, n) {
  const l = e.slice();
  return l[41] = t[n], l;
}
function zi(e) {
  let t, n = (
    /*scope*/
    e[41] + ""
  ), l, r;
  return {
    c() {
      t = w("option"), l = x(n), t.__value = r = /*scope*/
      e[41], t.value = t.__value;
    },
    m(i, o) {
      M(i, t, o), _(t, l);
    },
    p(i, o) {
      o[0] & /*scopes*/
      4 && n !== (n = /*scope*/
      i[41] + "") && fe(l, n), o[0] & /*scopes*/
      4 && r !== (r = /*scope*/
      i[41]) && (t.__value = r, t.value = t.__value);
    },
    d(i) {
      i && N(t);
    }
  };
}
function Ws(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, g, b, h, y, C, k, p, q, E, D, P, B, L, A, R, T, W;
  function U(le, ce) {
    if (
      /*hasError*/
      le[19]
    )
      return Us;
    if (
      /*hasConceptIds*/
      le[20]
    )
      return Ys;
  }
  let Q = U(e), H = Q && Q(e), J = (
    /*totalCount*/
    e[21] > 0 && Ri(e)
  );
  const he = [Zs, Js], ne = [];
  function de(le, ce) {
    return (
      /*paginatedConcepts*/
      le[18].length > 0 ? 0 : 1
    );
  }
  h = de(e), y = ne[h] = he[h](e), q = new be({
    props: { icon: vt, class: "inline mr-2" }
  });
  let j = (
    /*selectedConceptIDs*/
    e[12].size > 0 && Di(e)
  );
  function te(le, ce) {
    return (
      /*queryByName*/
      le[1] ? tu : eu
    );
  }
  let ue = te(e), K = ue(e), ae = (
    /*sortedConcepts*/
    e[15].length > nt && Ti(e)
  );
  return {
    c() {
      H && H.c(), t = O(), n = w("div"), l = w("div"), r = w("div"), i = w("input"), o = O(), a = w("div"), a.textContent = "Data Element", f = O(), s = w("div"), s.textContent = "Type", u = O(), c = w("div"), d = x(`Count
            `), J && J.c(), g = O(), b = w("div"), y.c(), C = O(), k = w("div"), p = w("button"), X(q.$$.fragment), E = x(`
          Query `), j && j.c(), P = O(), B = w("button"), K.c(), A = O(), ae && ae.c(), m(i, "type", "checkbox"), m(i, "class", "form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"), i.checked = /*allFilteredSelected*/
      e[13], i.indeterminate = /*someFilteredSelected*/
      e[17], m(i, "aria-label", "Select all concepts"), m(r, "class", "flex items-center justify-center"), m(a, "class", "font-semibold text-gray-900 dark:text-gray-100"), m(s, "class", "font-semibold text-gray-900 dark:text-gray-100"), m(c, "class", "font-semibold text-gray-900 dark:text-gray-100"), m(l, "class", "grid gap-4 px-4 py-4 items-center"), re(l, "grid-template-columns", "2rem 2fr 1fr 2fr"), m(n, "class", "bg-gray-50 dark:bg-gray-800 rounded-t-lg border border-gray-200 dark:border-gray-700"), m(b, "class", "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-b-lg overflow-y-auto custom-scrollbar min-h-0 flex-auto svelte-1xw87wt"), m(p, "class", "px-3 py-1.5 font-semibold rounded transition-colors duration-200 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-200/50 disabled:dark:bg-gray-700/50 text-white disabled:text-gray-500/50 whitespace-nowrap"), p.disabled = D = /*selectedConceptIDs*/
      e[12].size == 0, B.disabled = L = /*selectedConceptIDs*/
      e[12].size == 0, m(B, "class", "px-3 py-1.5 font-semibold rounded transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white whitespace-nowrap"), m(B, "title", "Change whether to add to query by concept name or ID"), m(k, "class", "py-2 flex items-center gap-2");
    },
    m(le, ce) {
      H && H.m(le, ce), M(le, t, ce), M(le, n, ce), _(n, l), _(l, r), _(r, i), _(l, o), _(l, a), _(l, f), _(l, s), _(l, u), _(l, c), _(c, d), J && J.m(c, null), M(le, g, ce), M(le, b, ce), ne[h].m(b, null), M(le, C, ce), M(le, k, ce), _(k, p), G(q, p, null), _(p, E), j && j.m(p, null), _(k, P), _(k, B), K.m(B, null), _(k, A), ae && ae.m(k, null), R = !0, T || (W = [
        F(
          i,
          "change",
          /*toggleSelectAllFiltered*/
          e[25]
        ),
        F(
          p,
          "click",
          /*click_handler_3*/
          e[35]
        ),
        F(
          B,
          "click",
          /*click_handler_4*/
          e[36]
        )
      ], T = !0);
    },
    p(le, ce) {
      Q === (Q = U(le)) && H ? H.p(le, ce) : (H && H.d(1), H = Q && Q(le), H && (H.c(), H.m(t.parentNode, t))), (!R || ce[0] & /*allFilteredSelected*/
      8192) && (i.checked = /*allFilteredSelected*/
      le[13]), (!R || ce[0] & /*someFilteredSelected*/
      131072) && (i.indeterminate = /*someFilteredSelected*/
      le[17]), /*totalCount*/
      le[21] > 0 ? J ? J.p(le, ce) : (J = Ri(le), J.c(), J.m(c, null)) : J && (J.d(1), J = null);
      let qe = h;
      h = de(le), h === qe ? ne[h].p(le, ce) : (ie(), z(ne[qe], 1, 1, () => {
        ne[qe] = null;
      }), oe(), y = ne[h], y ? y.p(le, ce) : (y = ne[h] = he[h](le), y.c()), v(y, 1), y.m(b, null)), /*selectedConceptIDs*/
      le[12].size > 0 ? j ? j.p(le, ce) : (j = Di(le), j.c(), j.m(p, null)) : j && (j.d(1), j = null), (!R || ce[0] & /*selectedConceptIDs*/
      4096 && D !== (D = /*selectedConceptIDs*/
      le[12].size == 0)) && (p.disabled = D), ue !== (ue = te(le)) && (K.d(1), K = ue(le), K && (K.c(), K.m(B, null))), (!R || ce[0] & /*selectedConceptIDs*/
      4096 && L !== (L = /*selectedConceptIDs*/
      le[12].size == 0)) && (B.disabled = L), /*sortedConcepts*/
      le[15].length > nt ? ae ? (ae.p(le, ce), ce[0] & /*sortedConcepts*/
      32768 && v(ae, 1)) : (ae = Ti(le), ae.c(), v(ae, 1), ae.m(k, null)) : ae && (ie(), z(ae, 1, 1, () => {
        ae = null;
      }), oe());
    },
    i(le) {
      R || (v(y), v(q.$$.fragment, le), v(ae), R = !0);
    },
    o(le) {
      z(y), z(q.$$.fragment, le), z(ae), R = !1;
    },
    d(le) {
      H && H.d(le), le && N(t), le && N(n), J && J.d(), le && N(g), le && N(b), ne[h].d(), le && N(C), le && N(k), V(q), j && j.d(), K.d(), ae && ae.d(), T = !1, ve(W);
    }
  };
}
function Ks(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, g;
  return a = new be({
    props: { icon: Sf, class: "inline mr-2" }
  }), {
    c() {
      t = w("div"), n = w("div"), n.textContent = "Data elements not retrieved yet", l = O(), r = w("p"), r.textContent = "Click below to retrieve available data elements in this scope.", i = O(), o = w("button"), X(a.$$.fragment), f = x(`
          Load Data Elements for `), s = w("span"), u = x(
        /*scopeName*/
        e[0]
      ), m(n, "class", "w-3/4 text-gray-700 dark:text-gray-200 text-lg font-semibold"), m(r, "class", "text-gray-600 dark:text-gray-400 w-1/3"), m(s, "class", "font-mono"), m(o, "class", "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md"), o.disabled = /*isLoading*/
      e[4], m(t, "class", "flex flex-col w-full h-full items-center justify-center text-center gap-4");
    },
    m(b, h) {
      M(b, t, h), _(t, n), _(t, l), _(t, r), _(t, i), _(t, o), G(a, o, null), _(o, f), _(o, s), _(s, u), c = !0, d || (g = F(o, "click", function() {
        Xe(
          /*onAnalyze*/
          e[6]
        ) && e[6].apply(this, arguments);
      }), d = !0);
    },
    p(b, h) {
      e = b, (!c || h[0] & /*scopeName*/
      1) && fe(
        u,
        /*scopeName*/
        e[0]
      ), (!c || h[0] & /*isLoading*/
      16) && (o.disabled = /*isLoading*/
      e[4]);
    },
    i(b) {
      c || (v(a.$$.fragment, b), c = !0);
    },
    o(b) {
      z(a.$$.fragment, b), c = !1;
    },
    d(b) {
      b && N(t), V(a), d = !1, g();
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
      t = w("div"), n = w("div"), n.innerHTML = `<div class="relative"><div class="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-spin"></div> 
            
            <div class="absolute top-2 left-2 w-12 h-12 border-4 border-blue-600 dark:border-blue-400 rounded-full animate-spin" style="animation-direction: reverse; animation-duration: 1.5s;"></div> 
            
            <div class="absolute top-6 left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div></div>`, l = O(), r && r.c(), m(n, "class", "flex justify-center mb-8"), m(t, "class", "text-center py-16");
    },
    m(i, o) {
      M(i, t, o), _(t, n), _(t, l), r && r.m(t, null);
    },
    p(i, o) {
      /*loadingMessage*/
      i[5] ? r ? r.p(i, o) : (r = Ai(i), r.c(), r.m(t, null)) : r && (r.d(1), r = null);
    },
    i: $,
    o: $,
    d(i) {
      i && N(t), r && r.d();
    }
  };
}
function Ys(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, g;
  return {
    c() {
      t = w("div"), n = w("div"), l = w("div"), l.innerHTML = '<span class="text-yellow-600 dark:text-yellow-400">⚠️</span>', r = O(), i = w("div"), o = w("h3"), o.textContent = "Concept Names Not Found", a = O(), f = w("div"), s = w("p"), s.textContent = `Some concepts are showing as IDs instead of human-readable
                  names. This might be due to vocabulary lookup issues.`, u = O(), c = w("button"), c.textContent = "🔄 Refresh Analysis", m(l, "class", "flex-shrink-0"), m(o, "class", "text-sm font-medium text-yellow-800 dark:text-yellow-200"), m(c, "class", "mt-2 bg-yellow-600 hover:bg-yellow-700 text-white text-xs px-3 py-1 rounded transition-colors duration-200"), m(f, "class", "mt-2 text-sm text-yellow-700 dark:text-yellow-300"), m(i, "class", "ml-3"), m(n, "class", "flex items-start"), m(t, "class", "bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4");
    },
    m(b, h) {
      M(b, t, h), _(t, n), _(n, l), _(n, r), _(n, i), _(i, o), _(i, a), _(i, f), _(f, s), _(f, u), _(f, c), d || (g = F(
        c,
        "click",
        /*click_handler_1*/
        e[32]
      ), d = !0);
    },
    p: $,
    d(b) {
      b && N(t), d = !1, g();
    }
  };
}
function Us(e) {
  let t, n, l, r, i, o, a, f, s, u = (
    /*scopeConcepts*/
    e[8].error + ""
  ), c, d, g, b, h;
  return {
    c() {
      t = w("div"), n = w("div"), l = w("div"), l.innerHTML = '<span class="text-red-600 dark:text-red-400">❌</span>', r = O(), i = w("div"), o = w("h3"), o.textContent = "Analysis Failed", a = O(), f = w("div"), s = w("p"), c = x(u), d = O(), g = w("button"), g.textContent = "🔄 Retry Analysis", m(l, "class", "flex-shrink-0"), m(o, "class", "text-sm font-medium text-red-800 dark:text-red-200"), m(g, "class", "mt-2 bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded transition-colors duration-200"), m(f, "class", "mt-2 text-sm text-red-700 dark:text-red-300"), m(i, "class", "ml-3"), m(n, "class", "flex items-start"), m(t, "class", "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4");
    },
    m(y, C) {
      M(y, t, C), _(t, n), _(n, l), _(n, r), _(n, i), _(i, o), _(i, a), _(i, f), _(f, s), _(s, c), _(f, d), _(f, g), b || (h = F(
        g,
        "click",
        /*click_handler*/
        e[31]
      ), b = !0);
    },
    p(y, C) {
      C[0] & /*scopeConcepts*/
      256 && u !== (u = /*scopeConcepts*/
      y[8].error + "") && fe(c, u);
    },
    d(y) {
      y && N(t), b = !1, h();
    }
  };
}
function Ri(e) {
  let t, n, l = (
    /*totalCount*/
    e[21].toLocaleString() + ""
  ), r, i;
  return {
    c() {
      t = w("span"), n = x("(Total: "), r = x(l), i = x(")"), m(t, "class", "text-sm font-normal text-gray-600 dark:text-gray-400");
    },
    m(o, a) {
      M(o, t, a), _(t, n), _(t, r), _(t, i);
    },
    p(o, a) {
      a[0] & /*totalCount*/
      2097152 && l !== (l = /*totalCount*/
      o[21].toLocaleString() + "") && fe(r, l);
    },
    d(o) {
      o && N(t);
    }
  };
}
function Js(e) {
  let t;
  return {
    c() {
      t = w("div"), t.textContent = "No concepts found for this scope.", m(t, "class", "px-6 py-8 text-center text-gray-500 dark:text-gray-400");
    },
    m(n, l) {
      M(n, t, l);
    },
    p: $,
    i: $,
    o: $,
    d(n) {
      n && N(t);
    }
  };
}
function Zs(e) {
  let t, n, l = (
    /*paginatedConcepts*/
    e[18]
  ), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = Ei(Ni(e, l, o));
  const i = (o) => z(r[o], 1, 1, () => {
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
      M(o, t, a), n = !0;
    },
    p(o, a) {
      if (a[0] & /*queryByName, onInsert, scopeName, paginatedConcepts, totalCount, $theme, selectedConceptIDs, toggleSelectConcept*/
      73666691 | a[1] & /*hovering*/
      512) {
        l = /*paginatedConcepts*/
        o[18];
        let f;
        for (f = 0; f < l.length; f += 1) {
          const s = Ni(o, l, f);
          r[f] ? (r[f].p(s, a), v(r[f], 1)) : (r[f] = Ei(s), r[f].c(), v(r[f], 1), r[f].m(t.parentNode, t));
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
        z(r[a]);
      n = !1;
    },
    d(o) {
      Pe(r, o), o && N(t);
    }
  };
}
function Li(e) {
  let t, n = (
    /*concept*/
    e[37].id + ""
  ), l;
  return {
    c() {
      t = w("div"), l = x(n), m(t, "class", "text-xs font-mono text-gray-500 dark:text-gray-400 truncate");
    },
    m(r, i) {
      M(r, t, i), _(t, l);
    },
    p(r, i) {
      i[0] & /*paginatedConcepts*/
      262144 && n !== (n = /*concept*/
      r[37].id + "") && fe(l, n);
    },
    d(r) {
      r && N(t);
    }
  };
}
function qi(e) {
  let t, n;
  return t = new Gr({
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
      X(t.$$.fragment);
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
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function $s(e) {
  let t, n, l, r, i, o, a = (
    /*concept*/
    e[37].name + ""
  ), f, s, u, c, d, g, b = (
    /*concept*/
    e[37].type + ""
  ), h, y, C, k, p, q, E, D = (
    /*concept*/
    e[37].count.toLocaleString() + ""
  ), P, B, L, A, R, T, W, U;
  function Q() {
    return (
      /*change_handler_1*/
      e[33](
        /*concept*/
        e[37]
      )
    );
  }
  let H = (
    /*concept*/
    e[37].id != /*concept*/
    e[37].name && Li(e)
  ), J = (
    /*totalCount*/
    e[21] > 0 && qi(e)
  );
  A = new be({ props: { icon: vt, class: "inline" } });
  function he() {
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
      t = w("div"), n = w("input"), r = O(), i = w("div"), o = w("div"), f = x(a), u = O(), H && H.c(), c = O(), d = w("div"), g = w("span"), h = x(b), C = O(), k = w("div"), p = w("div"), J && J.c(), q = O(), E = w("div"), P = x(D), B = O(), L = w("button"), X(A.$$.fragment), R = O(), m(n, "type", "checkbox"), m(n, "class", "form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"), n.checked = l = /*selectedConceptIDs*/
      e[12].has(
        /*concept*/
        e[37].id
      ), m(n, "aria-label", "Select concept"), m(t, "class", "flex items-center justify-center"), m(o, "class", "text-gray-900 dark:text-gray-100 font-medium truncate"), m(o, "title", s = /*concept*/
      e[37].name), m(i, "class", "space-y-1 truncate"), m(g, "class", y = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " + /*concept*/
      (e[37].type === "event" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : (
        /*concept*/
        e[37].type === "interval" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
      ))), m(d, "class", "text-gray-600 dark:text-gray-400"), m(E, "class", "text-gray-600 dark:text-gray-200 font-mono text-sm truncate"), m(p, "class", "space-y-2 flex-auto shrink min-w-0"), m(L, "class", "px-2 py-1.5 text-sm text-center font-semibold rounded transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white whitespace-nowrap"), m(L, "title", "Add this concept to your query"), se(L, "invisible", !/*hovering*/
      e[40]), m(k, "class", "flex gap-2 items-center justify-between min-w-0");
    },
    m(ne, de) {
      M(ne, t, de), _(t, n), M(ne, r, de), M(ne, i, de), _(i, o), _(o, f), _(i, u), H && H.m(i, null), M(ne, c, de), M(ne, d, de), _(d, g), _(g, h), M(ne, C, de), M(ne, k, de), _(k, p), J && J.m(p, null), _(p, q), _(p, E), _(E, P), _(k, B), _(k, L), G(A, L, null), M(ne, R, de), T = !0, W || (U = [
        F(n, "change", Q),
        F(L, "click", he)
      ], W = !0);
    },
    p(ne, de) {
      e = ne, (!T || de[0] & /*selectedConceptIDs, paginatedConcepts*/
      266240 && l !== (l = /*selectedConceptIDs*/
      e[12].has(
        /*concept*/
        e[37].id
      ))) && (n.checked = l), (!T || de[0] & /*paginatedConcepts*/
      262144) && a !== (a = /*concept*/
      e[37].name + "") && fe(f, a), (!T || de[0] & /*paginatedConcepts*/
      262144 && s !== (s = /*concept*/
      e[37].name)) && m(o, "title", s), /*concept*/
      e[37].id != /*concept*/
      e[37].name ? H ? H.p(e, de) : (H = Li(e), H.c(), H.m(i, null)) : H && (H.d(1), H = null), (!T || de[0] & /*paginatedConcepts*/
      262144) && b !== (b = /*concept*/
      e[37].type + "") && fe(h, b), (!T || de[0] & /*paginatedConcepts*/
      262144 && y !== (y = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " + /*concept*/
      (e[37].type === "event" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : (
        /*concept*/
        e[37].type === "interval" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
      )))) && m(g, "class", y), /*totalCount*/
      e[21] > 0 ? J ? (J.p(e, de), de[0] & /*totalCount*/
      2097152 && v(J, 1)) : (J = qi(e), J.c(), v(J, 1), J.m(p, q)) : J && (ie(), z(J, 1, 1, () => {
        J = null;
      }), oe()), (!T || de[0] & /*paginatedConcepts*/
      262144) && D !== (D = /*concept*/
      e[37].count.toLocaleString() + "") && fe(P, D), (!T || de[1] & /*hovering*/
      512) && se(L, "invisible", !/*hovering*/
      e[40]);
    },
    i(ne) {
      T || (v(J), v(A.$$.fragment, ne), T = !0);
    },
    o(ne) {
      z(J), z(A.$$.fragment, ne), T = !1;
    },
    d(ne) {
      ne && N(t), ne && N(r), ne && N(i), H && H.d(), ne && N(c), ne && N(d), ne && N(C), ne && N(k), J && J.d(), V(A), ne && N(R), W = !1, ve(U);
    }
  };
}
function Ei(e) {
  let t, n;
  return t = new lr({
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
      X(t.$$.fragment);
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
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
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
      n = x(t), l = x(" Concept"), i = x(r);
    },
    m(o, a) {
      M(o, n, a), M(o, l, a), M(o, i, a);
    },
    p(o, a) {
      a[0] & /*selectedConceptIDs*/
      4096 && t !== (t = /*selectedConceptIDs*/
      o[12].size + "") && fe(n, t), a[0] & /*selectedConceptIDs*/
      4096 && r !== (r = /*selectedConceptIDs*/
      o[12].size != 1 ? "s" : "") && fe(i, r);
    },
    d(o) {
      o && N(n), o && N(l), o && N(i);
    }
  };
}
function eu(e) {
  let t;
  return {
    c() {
      t = x("By ID");
    },
    m(n, l) {
      M(n, t, l);
    },
    d(n) {
      n && N(t);
    }
  };
}
function tu(e) {
  let t;
  return {
    c() {
      t = x("By Name");
    },
    m(n, l) {
      M(n, t, l);
    },
    d(n) {
      n && N(t);
    }
  };
}
function Ti(e) {
  let t, n, l, r, i, o, a, f, s, u = (
    /*currentPage*/
    (e[11] - 1) * nt + 1 + ""
  ), c, d, g = Math.min(
    /*currentPage*/
    e[11] * nt,
    /*concepts*/
    e[9].length
  ) + "", b, h, y = (
    /*concepts*/
    e[9].length + ""
  ), C, k, p, q, E, D, P, B;
  return i = new be({ props: { icon: zf } }), q = new be({ props: { icon: Ct } }), {
    c() {
      t = w("div"), n = O(), l = w("div"), r = w("button"), X(i.$$.fragment), a = O(), f = w("span"), s = x("Concepts "), c = x(u), d = x(" - "), b = x(g), h = x(" of "), C = x(y), k = O(), p = w("button"), X(q.$$.fragment), m(t, "class", "flex-auto"), m(r, "class", "p-2 hover:opacity-50 disabled:opacity-30 disabled:cursor-not-allowed"), r.disabled = o = /*currentPage*/
      e[11] === 1, m(r, "aria-label", "Previous Page"), m(f, "class", "text-sm"), m(p, "class", "p-2 hover:opacity-50 disabled:opacity-30 disabled:cursor-not-allowed"), p.disabled = E = /*currentPage*/
      e[11] === /*totalPages*/
      e[14], m(p, "aria-label", "Next Page"), m(l, "class", "shrink-0 flex justify-end items-center text-gray-700 dark:text-gray-200");
    },
    m(L, A) {
      M(L, t, A), M(L, n, A), M(L, l, A), _(l, r), G(i, r, null), _(l, a), _(l, f), _(f, s), _(f, c), _(f, d), _(f, b), _(f, h), _(f, C), _(l, k), _(l, p), G(q, p, null), D = !0, P || (B = [
        F(
          r,
          "click",
          /*prevPage*/
          e[23]
        ),
        F(
          p,
          "click",
          /*nextPage*/
          e[24]
        )
      ], P = !0);
    },
    p(L, A) {
      (!D || A[0] & /*currentPage*/
      2048 && o !== (o = /*currentPage*/
      L[11] === 1)) && (r.disabled = o), (!D || A[0] & /*currentPage*/
      2048) && u !== (u = /*currentPage*/
      (L[11] - 1) * nt + 1 + "") && fe(c, u), (!D || A[0] & /*currentPage, concepts*/
      2560) && g !== (g = Math.min(
        /*currentPage*/
        L[11] * nt,
        /*concepts*/
        L[9].length
      ) + "") && fe(b, g), (!D || A[0] & /*concepts*/
      512) && y !== (y = /*concepts*/
      L[9].length + "") && fe(C, y), (!D || A[0] & /*currentPage, totalPages*/
      18432 && E !== (E = /*currentPage*/
      L[11] === /*totalPages*/
      L[14])) && (p.disabled = E);
    },
    i(L) {
      D || (v(i.$$.fragment, L), v(q.$$.fragment, L), D = !0);
    },
    o(L) {
      z(i.$$.fragment, L), z(q.$$.fragment, L), D = !1;
    },
    d(L) {
      L && N(t), L && N(n), L && N(l), V(i), V(q), P = !1, ve(B);
    }
  };
}
function Ai(e) {
  let t, n, l, r, i, o;
  return {
    c() {
      t = w("div"), n = w("div"), l = w("div"), r = O(), i = w("span"), o = x(
        /*loadingMessage*/
        e[5]
      ), m(l, "class", "w-2 h-2 bg-blue-500 rounded-full animate-pulse"), m(i, "class", "text-sm text-blue-700 dark:text-blue-300 font-medium"), m(n, "class", "flex items-center space-x-2"), m(t, "class", "mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg");
    },
    m(a, f) {
      M(a, t, f), _(t, n), _(n, l), _(n, r), _(n, i), _(i, o);
    },
    p(a, f) {
      f[0] & /*loadingMessage*/
      32 && fe(
        o,
        /*loadingMessage*/
        a[5]
      );
    },
    d(a) {
      a && N(t);
    }
  };
}
function nu(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, g = (
    /*scopes*/
    e[2]
  ), b = [];
  for (let k = 0; k < g.length; k += 1)
    b[k] = zi(Mi(e, g, k));
  const h = [Xs, Ks, Ws], y = [];
  function C(k, p) {
    return (
      /*isLoading*/
      k[4] ? 0 : (
        /*isAnalyzed*/
        k[16] ? 2 : 1
      )
    );
  }
  return f = C(e), s = y[f] = h[f](e), {
    c() {
      t = w("div"), n = w("div"), l = w("select");
      for (let k = 0; k < b.length; k += 1)
        b[k].c();
      r = O(), i = w("input"), o = O(), a = w("div"), s.c(), m(l, "class", "text-2xl font-bold text-gray-900 dark:text-gray-100 flex-auto flat-select"), m(l, "aria-label", "Select scope"), re(l, "min-width", "0"), re(l, "max-width", "100%"), /*scopeName*/
      e[0] === void 0 && qn(() => (
        /*select_change_handler*/
        e[28].call(l)
      )), m(i, "type", "search"), m(i, "class", "shrink px-3 py-1.5 rounded overflow-hidden focus:bg-white bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline focus:outline-blue-500 w-64 transition-colors duration-200"), m(i, "placeholder", "Filter concepts..."), m(i, "autocomplete", "off"), m(n, "class", "pb-6 shrink-0 flex items-center justify-between gap-2"), m(a, "class", "w-full flex-auto flex flex-col h-0"), m(t, "class", "w-full h-full flex flex-col p-4");
    },
    m(k, p) {
      M(k, t, p), _(t, n), _(n, l);
      for (let q = 0; q < b.length; q += 1)
        b[q] && b[q].m(l, null);
      Jr(
        l,
        /*scopeName*/
        e[0],
        !0
      ), _(n, r), _(n, i), je(
        i,
        /*search*/
        e[10]
      ), _(t, o), _(t, a), y[f].m(a, null), u = !0, c || (d = [
        F(
          l,
          "change",
          /*select_change_handler*/
          e[28]
        ),
        F(
          l,
          "change",
          /*change_handler*/
          e[29]
        ),
        F(
          i,
          "input",
          /*input_input_handler*/
          e[30]
        )
      ], c = !0);
    },
    p(k, p) {
      if (p[0] & /*scopes*/
      4) {
        g = /*scopes*/
        k[2];
        let E;
        for (E = 0; E < g.length; E += 1) {
          const D = Mi(k, g, E);
          b[E] ? b[E].p(D, p) : (b[E] = zi(D), b[E].c(), b[E].m(l, null));
        }
        for (; E < b.length; E += 1)
          b[E].d(1);
        b.length = g.length;
      }
      p[0] & /*scopeName, scopes*/
      5 && Jr(
        l,
        /*scopeName*/
        k[0]
      ), p[0] & /*search*/
      1024 && i.value !== /*search*/
      k[10] && je(
        i,
        /*search*/
        k[10]
      );
      let q = f;
      f = C(k), f === q ? y[f].p(k, p) : (ie(), z(y[q], 1, 1, () => {
        y[q] = null;
      }), oe(), s = y[f], s ? s.p(k, p) : (s = y[f] = h[f](k), s.c()), v(s, 1), s.m(a, null));
    },
    i(k) {
      u || (v(s), u = !0);
    },
    o(k) {
      z(s), u = !1;
    },
    d(k) {
      k && N(t), Pe(b, k), y[f].d(), c = !1, ve(d);
    }
  };
}
const nt = 50;
function lu(e, t, n) {
  let l, r, i, o, a, f, s, u, c, d, g;
  I(e, Vl, (K) => n(22, g = K));
  let { scopes: b = [] } = t, { onScopeSelect: h = () => {
  } } = t, { scopeName: y = "" } = t, { isLoading: C = !1 } = t, { loadingMessage: k = "" } = t, { onAnalyze: p = () => {
  } } = t, { onInsert: q = () => {
  } } = t, { scopeConcepts: E = {} } = t, { queryByName: D = !1 } = t, P = [], B = "", L = 1;
  function A() {
    L > 1 && n(11, L -= 1);
  }
  function R() {
    L < s && n(11, L += 1);
  }
  let T = /* @__PURE__ */ new Set();
  function W() {
    c ? (a.forEach((K) => T.delete(K.id)), n(12, T = new Set(T))) : (a.forEach((K) => T.add(K.id)), n(12, T = new Set(T)));
  }
  function U(K) {
    T.has(K) ? T.delete(K) : T.add(K), n(12, T = new Set(T));
  }
  function Q() {
    y = af(this), n(0, y), n(2, b), n(3, h), n(2, b);
  }
  const H = (K) => h(K.target.value);
  function J() {
    B = this.value, n(10, B);
  }
  const he = () => p(), ne = () => p(), de = (K) => U(K.id), j = (K) => {
    D ? q(y, `name = '${K.name}'`) : typeof K.id == "string" && Number.isNaN(parseFloat(K.id)) ? q(y, `id = '${K.id}'`) : q(y, `id = ${K.id}`);
  }, te = () => {
    if (D) {
      let K = P.filter((ae) => T.has(ae.id)).map((ae) => "'" + ae.name + "'");
      q(y, `name in (${K.join(", ")})`);
    } else {
      let K;
      P.some((ae) => typeof ae.id == "string" && Number.isNaN(parseFloat(ae.id))) ? K = P.filter((ae) => T.has(ae.id)).map((ae) => `'${ae.id}'`) : K = P.filter((ae) => T.has(ae.id)).map((ae) => `${ae.id}`), q(y, `id in (${K.join(", ")})`);
    }
  }, ue = () => n(1, D = !D);
  return e.$$set = (K) => {
    "scopes" in K && n(2, b = K.scopes), "onScopeSelect" in K && n(3, h = K.onScopeSelect), "scopeName" in K && n(0, y = K.scopeName), "isLoading" in K && n(4, C = K.isLoading), "loadingMessage" in K && n(5, k = K.loadingMessage), "onAnalyze" in K && n(6, p = K.onAnalyze), "onInsert" in K && n(7, q = K.onInsert), "scopeConcepts" in K && n(8, E = K.scopeConcepts), "queryByName" in K && n(1, D = K.queryByName);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*scopes, scopeName, onScopeSelect*/
    13 && b.length > 0 && !y && (n(0, y = b[0]), h(y)), e.$$.dirty[0] & /*scopeName, scopeConcepts*/
    257 && n(16, l = y && E && E.scope_name === y), e.$$.dirty[0] & /*isAnalyzed, scopeConcepts*/
    65792 && n(9, P = l && E.concepts ? E.concepts : []), e.$$.dirty[0] & /*concepts*/
    512 && n(21, r = P.reduce((K, ae) => K + ae.count, 0)), e.$$.dirty[0] & /*concepts*/
    512 && n(20, i = P.some((K) => K.name.startsWith("Concept "))), e.$$.dirty[0] & /*scopeConcepts*/
    256 && n(19, o = E && E.error), e.$$.dirty[0] & /*search, concepts*/
    1536 && n(27, a = B.trim() ? P.filter((K) => (K.name ?? "").toLocaleLowerCase().includes(B.trim().toLocaleLowerCase()) || `${K.id ?? ""}`.toLocaleLowerCase().includes(B.trim().toLocaleLowerCase())) : P), e.$$.dirty[0] & /*filteredConcepts*/
    134217728 && n(15, f = [...a].sort((K, ae) => ae.count - K.count)), e.$$.dirty[0] & /*sortedConcepts*/
    32768 && n(14, s = Math.max(1, Math.ceil(f.length / nt))), e.$$.dirty[0] & /*currentPage, totalPages*/
    18432 && L > s && n(11, L = 1), e.$$.dirty[0] & /*sortedConcepts, currentPage*/
    34816 && n(18, u = f.slice((L - 1) * nt, L * nt)), e.$$.dirty[0] & /*filteredConcepts, selectedConceptIDs*/
    134221824 && n(13, c = a.length > 0 && a.every((K) => T.has(K.id))), e.$$.dirty[0] & /*filteredConcepts, selectedConceptIDs, allFilteredSelected*/
    134230016 && n(17, d = a.some((K) => T.has(K.id)) && !c);
  }, [
    y,
    D,
    b,
    h,
    C,
    k,
    p,
    q,
    E,
    P,
    B,
    L,
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
    g,
    A,
    R,
    W,
    U,
    a,
    Q,
    H,
    J,
    he,
    ne,
    de,
    j,
    te,
    ue
  ];
}
class ru extends we {
  constructor(t) {
    super(), pe(
      this,
      t,
      lu,
      nu,
      ke,
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
function dt(e) {
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
function zr(e, t = {}) {
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
  const g = e.length;
  for (o = 0; o < i; o += 1) {
    for (d = /* @__PURE__ */ new Set(), s = r[o], u = t[s], a = 0; a < g; a += 1)
      if (c = u(e[a]), Array.isArray(c)) {
        const h = c.length;
        for (f = 0; f < h; f += 1)
          d.add(c[f]);
      } else
        d.add(c);
    const b = Array.from(d);
    l[s] = n === !0 ? b.sort() : b;
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
  const g = e.length;
  for (i = 0; i < r; i += 1) {
    for (f = l[i], c = t[f], s = null, u = null, o = 0; o < g; o += 1)
      if (d = c(e[o]), Array.isArray(d)) {
        const b = d.length;
        for (a = 0; a < b; a += 1)
          d[a] !== !1 && d[a] !== void 0 && d[a] !== null && Number.isNaN(d[a]) === !1 && ((s === null || d[a] < s) && (s = d[a]), (u === null || d[a] > u) && (u = d[a]));
      } else
        d !== !1 && d !== void 0 && d !== null && Number.isNaN(d) === !1 && ((s === null || d < s) && (s = d), (u === null || d > u) && (u = d));
    n[f] = [s, u];
  }
  return n;
}
function Nn(e, t) {
  return e.length !== t.length ? !1 : e.every((n) => t.includes(n));
}
function Ra(e) {
  return !!(typeof e.bandwidth == "function" || Nn(Object.keys(e), ["domain", "range", "unknown", "copy"]));
}
function uu(e, t, n) {
  const l = Object.keys(n).reduce((i, o) => {
    const a = Ra(n[o]) === !0 ? "ordinal" : "other";
    return i[a] || (i[a] = {}), i[a][o] = t[o], i;
  }, { ordinal: !1, other: !1 });
  let r = {};
  return l.ordinal && (r = fu(e, l.ordinal)), l.other && (r = { ...r, ...su(e, l.other) }), r;
}
function cu(e = [], t) {
  return Array.isArray(t) === !0 ? t.map((n, l) => n === null ? e[l] : n) : e;
}
function jl(e) {
  return function([n, l]) {
    return typeof l == "function" && (l = l(n[e])), n ? cu(n[e], l) : l;
  };
}
function Fl(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function du(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function La(e) {
  let t, n, l;
  e.length !== 2 ? (t = Fl, n = (a, f) => Fl(e(a), f), l = (a, f) => e(a) - f) : (t = e === Fl || e === du ? e : gu, n = e, l = e);
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
const bu = La(Fl), _u = bu.right;
La(mu).center;
const hu = _u;
class Oi extends Map {
  constructor(t, n = pu) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [l, r] of t)
        this.set(l, r);
  }
  get(t) {
    return super.get(Pi(this, t));
  }
  has(t) {
    return super.has(Pi(this, t));
  }
  set(t, n) {
    return super.set(yu(this, t), n);
  }
  delete(t) {
    return super.delete(ku(this, t));
  }
}
function Pi({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) ? e.get(l) : n;
}
function yu({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) ? e.get(l) : (e.set(l, n), n);
}
function ku({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) && (n = e.get(l), e.delete(l)), n;
}
function pu(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const wu = Math.sqrt(50), vu = Math.sqrt(10), Cu = Math.sqrt(2);
function Zl(e, t, n) {
  const l = (t - e) / Math.max(0, n), r = Math.floor(Math.log10(l)), i = l / Math.pow(10, r), o = i >= wu ? 10 : i >= vu ? 5 : i >= Cu ? 2 : 1;
  let a, f, s;
  return r < 0 ? (s = Math.pow(10, -r) / o, a = Math.round(e * s), f = Math.round(t * s), a / s < e && ++a, f / s > t && --f, s = -s) : (s = Math.pow(10, r) * o, a = Math.round(e / s), f = Math.round(t / s), a * s < e && ++a, f * s > t && --f), f < a && 0.5 <= n && n < 2 ? Zl(e, t, n * 2) : [a, f, s];
}
function Su(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0))
    return [];
  if (e === t)
    return [e];
  const l = t < e, [r, i, o] = l ? Zl(t, e, n) : Zl(e, t, n);
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
function Tr(e, t, n) {
  return t = +t, e = +e, n = +n, Zl(e, t, n)[2];
}
function Nu(e, t, n) {
  t = +t, e = +e, n = +n;
  const l = t < e, r = l ? Tr(t, e, n) : Tr(e, t, n);
  return (l ? -1 : 1) * (r < 0 ? 1 / -r : r);
}
function lt(e, t, n) {
  e = +e, t = +t, n = (r = arguments.length) < 2 ? (t = e, e = 0, 1) : r < 3 ? 1 : +n;
  for (var l = -1, r = Math.max(0, Math.ceil((t - e) / n)) | 0, i = new Array(r); ++l < r; )
    i[l] = e + l * n;
  return i;
}
function rr(e, t) {
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
const ji = Symbol("implicit");
function ir() {
  var e = new Oi(), t = [], n = [], l = ji;
  function r(i) {
    let o = e.get(i);
    if (o === void 0) {
      if (l !== ji)
        return l;
      e.set(i, o = t.push(i) - 1);
    }
    return n[o % n.length];
  }
  return r.domain = function(i) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new Oi();
    for (const o of i)
      e.has(o) || e.set(o, t.push(o) - 1);
    return r;
  }, r.range = function(i) {
    return arguments.length ? (n = Array.from(i), r) : n.slice();
  }, r.unknown = function(i) {
    return arguments.length ? (l = i, r) : l;
  }, r.copy = function() {
    return ir(t, n).unknown(l);
  }, rr.apply(r, arguments), r;
}
function Vr() {
  var e = ir().unknown(void 0), t = e.domain, n = e.range, l = 0, r = 1, i, o, a = !1, f = 0, s = 0, u = 0.5;
  delete e.unknown;
  function c() {
    var d = t().length, g = r < l, b = g ? r : l, h = g ? l : r;
    i = (h - b) / Math.max(1, d - f + s * 2), a && (i = Math.floor(i)), b += (h - b - i * (d - f)) * u, o = i * (1 - f), a && (b = Math.round(b), o = Math.round(o));
    var y = lt(d).map(function(C) {
      return b + i * C;
    });
    return n(g ? y.reverse() : y);
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
    return Vr(t(), [l, r]).round(a).paddingInner(f).paddingOuter(s).align(u);
  }, rr.apply(c(), arguments);
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
function $e(e) {
  return e;
}
function Ar(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Mu(isNaN(t) ? NaN : 0.5);
}
function Ru(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(l) {
    return Math.max(e, Math.min(t, l));
  };
}
function Lu(e, t, n) {
  var l = e[0], r = e[1], i = t[0], o = t[1];
  return r < l ? (l = Ar(r, l), i = n(o, i)) : (l = Ar(l, r), i = n(i, o)), function(a) {
    return i(l(a));
  };
}
function qu(e, t, n) {
  var l = Math.min(e.length, t.length) - 1, r = new Array(l), i = new Array(l), o = -1;
  for (e[l] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < l; )
    r[o] = Ar(e[o], e[o + 1]), i[o] = n(t[o], t[o + 1]);
  return function(a) {
    var f = hu(e, a, 1, l) - 1;
    return i[f](r[f](a));
  };
}
function qa(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ea() {
  var e = Qi, t = Qi, n = xr, l, r, i, o = $e, a, f, s;
  function u() {
    var d = Math.min(e.length, t.length);
    return o !== $e && (o = Ru(e[0], e[d - 1])), a = d > 2 ? qu : Lu, f = s = null, c;
  }
  function c(d) {
    return d == null || isNaN(d = +d) ? i : (f || (f = a(e.map(l), t, n)))(l(o(d)));
  }
  return c.invert = function(d) {
    return o(r((s || (s = a(t, e.map(l), Jl)))(d)));
  }, c.domain = function(d) {
    return arguments.length ? (e = Array.from(d, zu), u()) : e.slice();
  }, c.range = function(d) {
    return arguments.length ? (t = Array.from(d), u()) : t.slice();
  }, c.rangeRound = function(d) {
    return t = Array.from(d), n = Es, u();
  }, c.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : $e, u()) : o !== $e;
  }, c.interpolate = function(d) {
    return arguments.length ? (n = d, u()) : n;
  }, c.unknown = function(d) {
    return arguments.length ? (i = d, c) : i;
  }, function(d, g) {
    return l = d, r = g, u();
  };
}
function Eu() {
  return Ea()($e, $e);
}
function Du(e, t, n, l) {
  var r = Nu(e, t, n), i;
  switch (l = Kl(l ?? ",f"), l.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return l.precision == null && !isNaN(i = rs(r, o)) && (l.precision = i), Ca(l, o);
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
      l.precision == null && !isNaN(i = Sa(r)) && (l.precision = i - (l.type === "%") * 2);
      break;
    }
  }
  return Se(l);
}
function Da(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var l = t();
    return Su(l[0], l[l.length - 1], n ?? 10);
  }, e.tickFormat = function(n, l) {
    var r = t();
    return Du(r[0], r[r.length - 1], n ?? 10, l);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var l = t(), r = 0, i = l.length - 1, o = l[r], a = l[i], f, s, u = 10;
    for (a < o && (s = o, o = a, a = s, s = r, r = i, i = s); u-- > 0; ) {
      if (s = Tr(o, a, n), s === f)
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
function gt() {
  var e = Eu();
  return e.copy = function() {
    return qa(e, gt());
  }, rr.apply(e, arguments), Da(e);
}
function Ii(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function Tu(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Au(e) {
  return e < 0 ? -e * e : e * e;
}
function Ou(e) {
  var t = e($e, $e), n = 1;
  function l() {
    return n === 1 ? e($e, $e) : n === 0.5 ? e(Tu, Au) : e(Ii(n), Ii(1 / n));
  }
  return t.exponent = function(r) {
    return arguments.length ? (n = +r, l()) : n;
  }, Da(t);
}
function Ta() {
  var e = Ou(Ea());
  return e.copy = function() {
    return qa(e, Ta()).exponent(e.exponent());
  }, rr.apply(e, arguments), e;
}
function Pu() {
  return Ta.apply(null, arguments).exponent(0.5);
}
const Mn = {
  x: gt,
  y: gt,
  z: gt,
  r: Pu
};
function ju(e) {
  return e.constant ? "symlog" : e.base ? "log" : e.exponent ? e.exponent() === 0.5 ? "sqrt" : "pow" : "other";
}
function Hi(e) {
  return e;
}
function Qu(e) {
  return (t) => Math.log(e * t);
}
function Iu(e) {
  return (t) => e * Math.exp(t);
}
function Hu(e) {
  return (t) => Math.sign(t) * Math.log1p(Math.abs(t / e));
}
function Bu(e) {
  return (t) => Math.sign(t) * Math.expm1(Math.abs(t)) * e;
}
function Ql(e) {
  return function(n) {
    return n < 0 ? -Math.pow(-n, e) : Math.pow(n, e);
  };
}
function xu(e) {
  const t = ju(e);
  if (t === "log") {
    const n = Math.sign(e.domain()[0]);
    return { lift: Qu(n), ground: Iu(n), scaleType: t };
  }
  return t === "pow" ? { lift: Ql(1), ground: Ql(1 / 1), scaleType: t } : t === "sqrt" ? { lift: Ql(0.5), ground: Ql(1 / 0.5), scaleType: t } : t === "symlog" ? { lift: Hu(1), ground: Bu(1), scaleType: t } : { lift: Hi, ground: Hi, scaleType: t };
}
function $l(e) {
  return e.replace(/^\w/, (t) => t.toUpperCase());
}
function De(e, t = "") {
  return `scale${$l(t)}${$l(e)}`;
}
function Aa(e) {
  if (typeof e.bandwidth == "function")
    return typeof e.paddingInner == "function" ? De("band") : De("point");
  if (Nn(Object.keys(e), ["domain", "range", "unknown", "copy"]))
    return De("ordinal");
  let t = "";
  if (e.interpolator && (e.domain().length === 3 ? t = "diverging" : t = "sequential"), e.quantiles)
    return De("quantile", t);
  if (e.thresholds)
    return De("quantize", t);
  if (e.constant)
    return De("symlog", t);
  if (e.base)
    return De("log", t);
  if (e.exponent)
    return e.exponent() === 0.5 ? De("sqrt", t) : De("pow", t);
  if (Nn(Object.keys(e), ["domain", "range", "invertExtent", "unknown", "copy"]))
    return De("threshold");
  if (Nn(Object.keys(e), ["invert", "range", "domain", "unknown", "copy", "ticks", "tickFormat", "nice"]))
    return De("identity");
  if (Nn(Object.keys(e), [
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
    return De("radial");
  if (t)
    return De(t);
  if (e.domain()[0] instanceof Date) {
    const n = /* @__PURE__ */ new Date();
    let l;
    return n.getDay = () => l = "time", n.getUTCDay = () => l = "utc", e.tickFormat(0, "%a")(n), De(l);
  }
  return De("linear");
}
const Fu = ["scaleThreshold", "scaleQuantile", "scaleQuantize", "scaleSequentialQuantile"];
function Gu(e, t) {
  if (typeof e.range != "function")
    throw console.log(e), new Error("Scale method `range` must be a function");
  if (typeof e.domain != "function")
    throw new Error("Scale method `domain` must be a function");
  if (!Array.isArray(t) || Fu.includes(Aa(e)) || Ra(e) === !0)
    return e.domain();
  const { lift: n, ground: l } = xu(e), r = e.domain()[0], i = Object.prototype.toString.call(r) === "[object Date]", [o, a] = e.domain().map((g) => n(i ? g.getTime() : g)), [f, s] = e.range(), u = t[0] || 0, c = t[1] || 0, d = (a - o) / (Math.abs(s - f) - u - c);
  return [o - u * d, c * d + a].map((g) => l(i ? new Date(g) : g));
}
function Vu(e, t, n, l, r) {
  let i, o;
  return r === !0 ? (i = 0, o = 100) : (i = e === "r" ? 1 : 0, o = e === "y" ? n : e === "r" ? 25 : t), l === !0 ? [o, i] : [i, o];
}
function Wu(e, t, n, l, r, i) {
  return r ? typeof r == "function" ? r({ width: t, height: n }) : r : Vu(e, t, n, l, i);
}
function Il(e) {
  return function([n, l, r, i, o, a, f, s, u, c]) {
    if (l === null)
      return null;
    const d = Wu(e, f, s, a, u, c), g = n === Mn[e] ? n() : n.copy();
    return g.domain(r), (!g.interpolator || typeof g.interpolator == "function" && g.interpolator().name.startsWith("identity")) && g.range(d), i && g.domain(Gu(g, i)), (o === !0 || typeof o == "number") && (typeof g.nice == "function" ? g.nice(typeof o == "number" ? o : void 0) : console.error(`[Layer Cake] You set \`${e}Nice: true\` but the ${e}Scale does not have a \`.nice\` method. Ignoring...`)), g;
  };
}
function Hl([e, t]) {
  return (n) => {
    const l = e(n);
    return Array.isArray(l) ? l.map((r) => t(r)) : t(l);
  };
}
function Bl([e]) {
  if (typeof e == "function") {
    if (typeof e.range == "function")
      return e.range();
    console.error("[LayerCake] Your scale doesn't have a `.range` method?");
  }
  return null;
}
const Ze = "    ";
function Ku(e) {
  const { r: t, g: n, b: l, opacity: r } = Yl(e);
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
    console.log(`${Ze}${t}:`, n);
  });
}
function Ju(e, t, n) {
  const l = Aa(t);
  console.log(`${Ze}${e}:`), console.log(`${Ze}${Ze}Accessor: "${n.toString()}"`), console.log(`${Ze}${Ze}Type: ${l}`), Bi(t, "domain"), Bi(t, "range", " ");
}
function Bi(e, t, n = "") {
  const l = e[t](), r = $u(l);
  r ? Zu(r, t, l) : console.log(`${Ze}${Ze}${$l(t)}:${n}`, l);
}
function Zu(e, t, n) {
  console.log(
    `${Ze}${Ze}${$l(t)}:    %cArray%c(${n.length}) ` + e[0] + "%c ]",
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
}), xi = (e) => ({
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
function Fi(e) {
  let t, n, l;
  const r = (
    /*#slots*/
    e[153].default
  ), i = Ge(
    r,
    e,
    /*$$scope*/
    e[152],
    xi
  );
  return {
    c() {
      t = w("div"), i && i.c(), m(t, "class", "layercake-container svelte-vhzpsp"), qn(() => (
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
      M(o, t, a), i && i.m(t, null), e[154](t), n = sf(
        t,
        /*div_elementresize_handler*/
        e[155].bind(t)
      ), l = !0;
    },
    p(o, a) {
      i && i.p && (!l || a[0] & /*element, $activeGetters_d, $_x, $_y, $_z, $_r, $_custom, $_data, $_xNice, $_yNice, $_zNice, $_rNice, $_xReverse, $_yReverse, $_zReverse, $_rReverse, $_xPadding, $_yPadding, $_zPadding, $_rPadding, $_flatData, $_config, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
      2147483588 | a[1] & /*$width_d, $height_d, $aspectRatio_d, $_containerWidth, $_containerHeight, $_percentRange, $padding_d, $extents_d, $xDomain_d, $yDomain_d, $zDomain_d, $rDomain_d, $xRange_d, $yRange_d, $zRange_d, $rRange_d, $xGet_d, $yGet_d, $zGet_d, $rGet_d*/
      1048575 | a[4] & /*$$scope*/
      268435456) && We(
        i,
        r,
        o,
        /*$$scope*/
        o[152],
        l ? Ve(
          r,
          /*$$scope*/
          o[152],
          a,
          ec
        ) : Ke(
          /*$$scope*/
          o[152]
        ),
        xi
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
      z(i, o), l = !1;
    },
    d(o) {
      o && N(t), i && i.d(o), e[154](null), n();
    }
  };
}
function tc(e) {
  let t, n, l = (
    /*ssr*/
    (e[3] === !0 || typeof window < "u") && Fi(e)
  );
  return {
    c() {
      l && l.c(), t = _e();
    },
    m(r, i) {
      l && l.m(r, i), M(r, t, i), n = !0;
    },
    p(r, i) {
      /*ssr*/
      r[3] === !0 || typeof window < "u" ? l ? (l.p(r, i), i[0] & /*ssr*/
      8 && v(l, 1)) : (l = Fi(r), l.c(), v(l, 1), l.m(t.parentNode, t)) : l && (ie(), z(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (v(l), n = !0);
    },
    o(r) {
      z(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && N(t);
    }
  };
}
function nc(e, t, n) {
  let l, r, i, o, a, f, s, u, c, d, g, b, h, y, C, k, p, q, E, D, P, B, L, A, R, T, W, U, Q, H, J, he, ne, de, j, te, ue, K, ae, le, ce, qe, Te, Y, Qe, bt, St, Ie, _t, ht, ee, Ee, He, Be, Oe, jn, Qn, In, Hn, Bn, xn, Fn, { $$slots: sr = {}, $$scope: Gn } = t;
  const ur = au(Yu, 200);
  let { ssr: $t = !1 } = t, { pointerEvents: Vn = !0 } = t, { position: Wn = "relative" } = t, { percentRange: Nt = !1 } = t, { width: en = void 0 } = t, { height: tn = void 0 } = t, { containerWidth: ot = en || 100 } = t, { containerHeight: at = tn || 100 } = t, { element: Z = void 0 } = t, { x: ft = void 0 } = t, { y: Mt = void 0 } = t, { z: zt = void 0 } = t, { r: Rt = void 0 } = t, { data: Lt = [] } = t, { xDomain: qt = void 0 } = t, { yDomain: Et = void 0 } = t, { zDomain: Dt = void 0 } = t, { rDomain: Tt = void 0 } = t, { xNice: Kn = !1 } = t, { yNice: Xn = !1 } = t, { zNice: Yn = !1 } = t, { rNice: Un = !1 } = t, { xPadding: Jn = void 0 } = t, { yPadding: Zn = void 0 } = t, { zPadding: $n = void 0 } = t, { rPadding: el = void 0 } = t, { xScale: tl = Mn.x } = t, { yScale: nn = Mn.y } = t, { zScale: nl = Mn.z } = t, { rScale: ll = Mn.r } = t, { xRange: At = void 0 } = t, { yRange: Ot = void 0 } = t, { zRange: Pt = void 0 } = t, { rRange: jt = void 0 } = t, { xReverse: rl = !1 } = t, { yReverse: il = void 0 } = t, { zReverse: ol = !1 } = t, { rReverse: al = !1 } = t, { padding: fl = {} } = t, { extents: sl = {} } = t, { flatData: ul = void 0 } = t, { custom: cl = {} } = t, { debug: cr = !1 } = t, dr = !1;
  mt(() => {
    dr = !0;
  });
  const ye = {}, st = me(Nt);
  I(e, st, (S) => n(33, Qe = S));
  const Qt = me(ot);
  I(e, Qt, (S) => n(32, Y = S));
  const It = me(at);
  I(e, It, (S) => n(31, Te = S));
  const dl = me(zr(sl));
  I(e, dl, (S) => n(170, qe = S));
  const gl = me(Lt);
  I(e, gl, (S) => n(30, ce = S));
  const ln = me(ul || Lt);
  I(e, ln, (S) => n(29, le = S));
  const ml = me(fl);
  I(e, ml, (S) => n(169, ae = S));
  const Ht = me(dt(ft));
  I(e, Ht, (S) => n(28, K = S));
  const Bt = me(dt(Mt));
  I(e, Bt, (S) => n(27, ue = S));
  const xt = me(dt(zt));
  I(e, xt, (S) => n(26, te = S));
  const Ft = me(dt(Rt));
  I(e, Ft, (S) => n(25, j = S));
  const bl = me(qt);
  I(e, bl, (S) => n(168, de = S));
  const _l = me(Et);
  I(e, _l, (S) => n(167, ne = S));
  const hl = me(Dt);
  I(e, hl, (S) => n(166, he = S));
  const yl = me(Tt);
  I(e, yl, (S) => n(165, J = S));
  const rn = me(Kn);
  I(e, rn, (S) => n(24, H = S));
  const on = me(Xn);
  I(e, on, (S) => n(23, Q = S));
  const an = me(Yn);
  I(e, an, (S) => n(22, U = S));
  const fn = me(Un);
  I(e, fn, (S) => n(21, W = S));
  const sn = me(rl);
  I(e, sn, (S) => n(20, T = S));
  const un = me(l);
  I(e, un, (S) => n(19, R = S));
  const cn = me(ol);
  I(e, cn, (S) => n(18, A = S));
  const dn = me(al);
  I(e, dn, (S) => n(17, L = S));
  const gn = me(Jn);
  I(e, gn, (S) => n(16, B = S));
  const mn = me(Zn);
  I(e, mn, (S) => n(15, P = S));
  const bn = me($n);
  I(e, bn, (S) => n(14, D = S));
  const _n = me(el);
  I(e, _n, (S) => n(13, E = S));
  const kl = me(At);
  I(e, kl, (S) => n(164, q = S));
  const pl = me(Ot);
  I(e, pl, (S) => n(163, p = S));
  const wl = me(Pt);
  I(e, wl, (S) => n(162, k = S));
  const vl = me(jt);
  I(e, vl, (S) => n(161, C = S));
  const hn = me(tl);
  I(e, hn, (S) => n(160, y = S));
  const yn = me(nn);
  I(e, yn, (S) => n(159, h = S));
  const kn = me(nl);
  I(e, kn, (S) => n(158, b = S));
  const pn = me(ll);
  I(e, pn, (S) => n(157, g = S));
  const Cl = me(ye);
  I(e, Cl, (S) => n(11, c = S));
  const Sl = me(cl);
  I(e, Sl, (S) => n(12, d = S));
  const Nl = Ce([Ht, Bt, xt, Ft], ([S, tt, Ue, Le]) => {
    const yt = {};
    return S && (yt.x = S), tt && (yt.y = tt), Ue && (yt.z = Ue), Le && (yt.r = Le), yt;
  });
  I(e, Nl, (S) => n(10, s = S));
  const Ml = Ce([ml, Qt, It], ([S]) => Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, S));
  I(e, Ml, (S) => n(37, _t = S));
  const zl = Ce([Qt, It, Ml], ([S, tt, Ue]) => {
    const Le = {};
    return Le.top = Ue.top, Le.right = S - Ue.right, Le.bottom = tt - Ue.bottom, Le.left = Ue.left, Le.width = Le.right - Le.left, Le.height = Le.bottom - Le.top, Le.width <= 0 && dr === !0 && console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?"), Le.height <= 0 && dr === !0 && console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?"), Le;
  });
  I(e, zl, (S) => n(151, u = S));
  const ut = Ce([zl], ([S]) => S.width);
  I(e, ut, (S) => n(34, bt = S));
  const ct = Ce([zl], ([S]) => S.height);
  I(e, ct, (S) => n(35, St = S));
  const xe = Ce([ln, Nl, dl, hn, yn, pn, kn], ([S, tt, Ue, Le, yt, $a, ef]) => {
    const tf = {
      x: Le,
      y: yt,
      r: $a,
      z: ef
    }, vr = zr(tt, Ue), nf = Object.fromEntries(Object.keys(vr).map((Cr) => [Cr, tf[Cr]]));
    return Object.keys(vr).length > 0 ? { ...uu(S, vr, nf), ...Ue } : {};
  });
  I(e, xe, (S) => n(38, ht = S));
  const Rl = Ce([xe, bl], jl("x"));
  I(e, Rl, (S) => n(39, ee = S));
  const Ll = Ce([xe, _l], jl("y"));
  I(e, Ll, (S) => n(40, Ee = S));
  const ql = Ce([xe, hl], jl("z"));
  I(e, ql, (S) => n(41, He = S));
  const El = Ce([xe, yl], jl("r"));
  I(e, El, (S) => n(42, Be = S));
  const wn = Ce(
    [
      hn,
      xe,
      Rl,
      gn,
      rn,
      sn,
      ut,
      ct,
      kl,
      st
    ],
    Il("x")
  );
  I(e, wn, (S) => n(9, f = S));
  const gr = Ce([Ht, wn], Hl);
  I(e, gr, (S) => n(47, Hn = S));
  const vn = Ce(
    [
      yn,
      xe,
      Ll,
      mn,
      on,
      un,
      ut,
      ct,
      pl,
      st
    ],
    Il("y")
  );
  I(e, vn, (S) => n(8, a = S));
  const mr = Ce([Bt, vn], Hl);
  I(e, mr, (S) => n(48, Bn = S));
  const Cn = Ce(
    [
      kn,
      xe,
      ql,
      bn,
      an,
      cn,
      ut,
      ct,
      wl,
      st
    ],
    Il("z")
  );
  I(e, Cn, (S) => n(7, o = S));
  const br = Ce([xt, Cn], Hl);
  I(e, br, (S) => n(49, xn = S));
  const Sn = Ce(
    [
      pn,
      xe,
      El,
      _n,
      fn,
      dn,
      ut,
      ct,
      vl,
      st
    ],
    Il("r")
  );
  I(e, Sn, (S) => n(6, i = S));
  const _r = Ce([Ft, Sn], Hl);
  I(e, _r, (S) => n(50, Fn = S));
  const hr = Ce([wn], Bl);
  I(e, hr, (S) => n(43, Oe = S));
  const yr = Ce([vn], Bl);
  I(e, yr, (S) => n(44, jn = S));
  const kr = Ce([Cn], Bl);
  I(e, kr, (S) => n(45, Qn = S));
  const pr = Ce([Sn], Bl);
  I(e, pr, (S) => n(46, In = S));
  const wr = Ce([ut, ct], ([S, tt]) => S / tt);
  I(e, wr, (S) => n(36, Ie = S));
  function Ja(S) {
    Ne[S ? "unshift" : "push"](() => {
      Z = S, n(2, Z);
    });
  }
  function Za() {
    ot = this.clientWidth, at = this.clientHeight, n(0, ot), n(1, at);
  }
  return e.$$set = (S) => {
    "ssr" in S && n(3, $t = S.ssr), "pointerEvents" in S && n(4, Vn = S.pointerEvents), "position" in S && n(5, Wn = S.position), "percentRange" in S && n(111, Nt = S.percentRange), "width" in S && n(112, en = S.width), "height" in S && n(113, tn = S.height), "containerWidth" in S && n(0, ot = S.containerWidth), "containerHeight" in S && n(1, at = S.containerHeight), "element" in S && n(2, Z = S.element), "x" in S && n(114, ft = S.x), "y" in S && n(115, Mt = S.y), "z" in S && n(116, zt = S.z), "r" in S && n(117, Rt = S.r), "data" in S && n(118, Lt = S.data), "xDomain" in S && n(119, qt = S.xDomain), "yDomain" in S && n(120, Et = S.yDomain), "zDomain" in S && n(121, Dt = S.zDomain), "rDomain" in S && n(122, Tt = S.rDomain), "xNice" in S && n(123, Kn = S.xNice), "yNice" in S && n(124, Xn = S.yNice), "zNice" in S && n(125, Yn = S.zNice), "rNice" in S && n(126, Un = S.rNice), "xPadding" in S && n(127, Jn = S.xPadding), "yPadding" in S && n(128, Zn = S.yPadding), "zPadding" in S && n(129, $n = S.zPadding), "rPadding" in S && n(130, el = S.rPadding), "xScale" in S && n(131, tl = S.xScale), "yScale" in S && n(132, nn = S.yScale), "zScale" in S && n(133, nl = S.zScale), "rScale" in S && n(134, ll = S.rScale), "xRange" in S && n(135, At = S.xRange), "yRange" in S && n(136, Ot = S.yRange), "zRange" in S && n(137, Pt = S.zRange), "rRange" in S && n(138, jt = S.rRange), "xReverse" in S && n(139, rl = S.xReverse), "yReverse" in S && n(140, il = S.yReverse), "zReverse" in S && n(141, ol = S.zReverse), "rReverse" in S && n(142, al = S.rReverse), "padding" in S && n(143, fl = S.padding), "extents" in S && n(144, sl = S.extents), "flatData" in S && n(145, ul = S.flatData), "custom" in S && n(146, cl = S.custom), "debug" in S && n(147, cr = S.debug), "$$scope" in S && n(152, Gn = S.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[4] & /*yReverse, yScale*/
    65792 && n(150, l = typeof il > "u" ? typeof nn.bandwidth != "function" : il), e.$$.dirty[3] & /*x*/
    2097152 && ft && n(148, ye.x = ft, ye), e.$$.dirty[3] & /*y*/
    4194304 && Mt && n(148, ye.y = Mt, ye), e.$$.dirty[3] & /*z*/
    8388608 && zt && n(148, ye.z = zt, ye), e.$$.dirty[3] & /*r*/
    16777216 && Rt && n(148, ye.r = Rt, ye), e.$$.dirty[3] & /*xDomain*/
    67108864 && qt && n(148, ye.xDomain = qt, ye), e.$$.dirty[3] & /*yDomain*/
    134217728 && Et && n(148, ye.yDomain = Et, ye), e.$$.dirty[3] & /*zDomain*/
    268435456 && Dt && n(148, ye.zDomain = Dt, ye), e.$$.dirty[3] & /*rDomain*/
    536870912 && Tt && n(148, ye.rDomain = Tt, ye), e.$$.dirty[4] & /*xRange*/
    2048 && At && n(148, ye.xRange = At, ye), e.$$.dirty[4] & /*yRange*/
    4096 && Ot && n(148, ye.yRange = Ot, ye), e.$$.dirty[4] & /*zRange*/
    8192 && Pt && n(148, ye.zRange = Pt, ye), e.$$.dirty[4] & /*rRange*/
    16384 && jt && n(148, ye.rRange = jt, ye), e.$$.dirty[3] & /*percentRange*/
    262144 && ge(st, Qe = Nt, Qe), e.$$.dirty[0] & /*containerWidth*/
    1 && ge(Qt, Y = ot, Y), e.$$.dirty[0] & /*containerHeight*/
    2 && ge(It, Te = at, Te), e.$$.dirty[4] & /*extents*/
    1048576 && ge(dl, qe = zr(sl), qe), e.$$.dirty[3] & /*data*/
    33554432 && ge(gl, ce = Lt, ce), e.$$.dirty[3] & /*data*/
    33554432 | e.$$.dirty[4] & /*flatData*/
    2097152 && ge(ln, le = ul || Lt, le), e.$$.dirty[4] & /*padding*/
    524288 && ge(ml, ae = fl, ae), e.$$.dirty[3] & /*x*/
    2097152 && ge(Ht, K = dt(ft), K), e.$$.dirty[3] & /*y*/
    4194304 && ge(Bt, ue = dt(Mt), ue), e.$$.dirty[3] & /*z*/
    8388608 && ge(xt, te = dt(zt), te), e.$$.dirty[3] & /*r*/
    16777216 && ge(Ft, j = dt(Rt), j), e.$$.dirty[3] & /*xDomain*/
    67108864 && ge(bl, de = qt, de), e.$$.dirty[3] & /*yDomain*/
    134217728 && ge(_l, ne = Et, ne), e.$$.dirty[3] & /*zDomain*/
    268435456 && ge(hl, he = Dt, he), e.$$.dirty[3] & /*rDomain*/
    536870912 && ge(yl, J = Tt, J), e.$$.dirty[3] & /*xNice*/
    1073741824 && ge(rn, H = Kn, H), e.$$.dirty[4] & /*yNice*/
    1 && ge(on, Q = Xn, Q), e.$$.dirty[4] & /*zNice*/
    2 && ge(an, U = Yn, U), e.$$.dirty[4] & /*rNice*/
    4 && ge(fn, W = Un, W), e.$$.dirty[4] & /*xReverse*/
    32768 && ge(sn, T = rl, T), e.$$.dirty[4] & /*yReverseValue*/
    67108864 && ge(un, R = l, R), e.$$.dirty[4] & /*zReverse*/
    131072 && ge(cn, A = ol, A), e.$$.dirty[4] & /*rReverse*/
    262144 && ge(dn, L = al, L), e.$$.dirty[4] & /*xPadding*/
    8 && ge(gn, B = Jn, B), e.$$.dirty[4] & /*yPadding*/
    16 && ge(mn, P = Zn, P), e.$$.dirty[4] & /*zPadding*/
    32 && ge(bn, D = $n, D), e.$$.dirty[4] & /*rPadding*/
    64 && ge(_n, E = el, E), e.$$.dirty[4] & /*xRange*/
    2048 && ge(kl, q = At, q), e.$$.dirty[4] & /*yRange*/
    4096 && ge(pl, p = Ot, p), e.$$.dirty[4] & /*zRange*/
    8192 && ge(wl, k = Pt, k), e.$$.dirty[4] & /*rRange*/
    16384 && ge(vl, C = jt, C), e.$$.dirty[4] & /*xScale*/
    128 && ge(hn, y = tl, y), e.$$.dirty[4] & /*yScale*/
    256 && ge(yn, h = nn, h), e.$$.dirty[4] & /*zScale*/
    512 && ge(kn, b = nl, b), e.$$.dirty[4] & /*rScale*/
    1024 && ge(pn, g = ll, g), e.$$.dirty[4] & /*custom*/
    4194304 && ge(Sl, d = cl, d), e.$$.dirty[4] & /*config*/
    16777216 && ge(Cl, c = ye, c), e.$$.dirty[4] & /*context*/
    33554432 && cf("LayerCake", r), e.$$.dirty[0] & /*ssr, $activeGetters_d, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
    1992 | e.$$.dirty[4] & /*$box_d, debug, config*/
    159383552 && u && cr === !0 && ($t === !0 || typeof window < "u") && ur({
      boundingBox: u,
      activeGetters: s,
      x: ye.x,
      y: ye.y,
      z: ye.z,
      r: ye.r,
      xScale: f,
      yScale: a,
      zScale: o,
      rScale: i
    });
  }, n(149, r = {
    activeGetters: Nl,
    width: ut,
    height: ct,
    percentRange: st,
    aspectRatio: wr,
    containerWidth: Qt,
    containerHeight: It,
    x: Ht,
    y: Bt,
    z: xt,
    r: Ft,
    custom: Sl,
    data: gl,
    xNice: rn,
    yNice: on,
    zNice: an,
    rNice: fn,
    xReverse: sn,
    yReverse: un,
    zReverse: cn,
    rReverse: dn,
    xPadding: gn,
    yPadding: mn,
    zPadding: bn,
    rPadding: _n,
    padding: Ml,
    flatData: ln,
    extents: xe,
    xDomain: Rl,
    yDomain: Ll,
    zDomain: ql,
    rDomain: El,
    xRange: hr,
    yRange: yr,
    zRange: kr,
    rRange: pr,
    config: Cl,
    xScale: wn,
    xGet: gr,
    yScale: vn,
    yGet: mr,
    zScale: Cn,
    zGet: br,
    rScale: Sn,
    rGet: _r
  }), [
    ot,
    at,
    Z,
    $t,
    Vn,
    Wn,
    i,
    o,
    a,
    f,
    s,
    c,
    d,
    E,
    D,
    P,
    B,
    L,
    A,
    R,
    T,
    W,
    U,
    Q,
    H,
    j,
    te,
    ue,
    K,
    le,
    ce,
    Te,
    Y,
    Qe,
    bt,
    St,
    Ie,
    _t,
    ht,
    ee,
    Ee,
    He,
    Be,
    Oe,
    jn,
    Qn,
    In,
    Hn,
    Bn,
    xn,
    Fn,
    st,
    Qt,
    It,
    dl,
    gl,
    ln,
    ml,
    Ht,
    Bt,
    xt,
    Ft,
    bl,
    _l,
    hl,
    yl,
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
    bn,
    _n,
    kl,
    pl,
    wl,
    vl,
    hn,
    yn,
    kn,
    pn,
    Cl,
    Sl,
    Nl,
    Ml,
    zl,
    ut,
    ct,
    xe,
    Rl,
    Ll,
    ql,
    El,
    wn,
    gr,
    vn,
    mr,
    Cn,
    br,
    Sn,
    _r,
    hr,
    yr,
    kr,
    pr,
    wr,
    Nt,
    en,
    tn,
    ft,
    Mt,
    zt,
    Rt,
    Lt,
    qt,
    Et,
    Dt,
    Tt,
    Kn,
    Xn,
    Yn,
    Un,
    Jn,
    Zn,
    $n,
    el,
    tl,
    nn,
    nl,
    ll,
    At,
    Ot,
    Pt,
    jt,
    rl,
    il,
    ol,
    al,
    fl,
    sl,
    ul,
    cl,
    cr,
    ye,
    r,
    l,
    u,
    Gn,
    sr,
    Ja,
    Za
  ];
}
class or extends we {
  constructor(t) {
    super(), pe(
      this,
      t,
      nc,
      tc,
      ke,
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
1 }), Gi = (e) => ({ element: (
  /*element*/
  e[0]
) });
function rc(e) {
  let t, n;
  const l = (
    /*#slots*/
    e[11].default
  ), r = Ge(
    l,
    e,
    /*$$scope*/
    e[10],
    Gi
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
      M(i, t, o), r && r.m(t, null), e[12](t), n = !0;
    },
    p(i, [o]) {
      r && r.p && (!n || o & /*$$scope, element*/
      1025) && We(
        r,
        l,
        i,
        /*$$scope*/
        i[10],
        n ? Ve(
          l,
          /*$$scope*/
          i[10],
          o,
          lc
        ) : Ke(
          /*$$scope*/
          i[10]
        ),
        Gi
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
      z(r, i), n = !1;
    },
    d(i) {
      i && N(t), r && r.d(i), e[12](null);
    }
  };
}
function ic(e, t, n) {
  let l, r, { $$slots: i = {}, $$scope: o } = t;
  const { padding: a } = On("LayerCake");
  I(e, a, (y) => n(7, r = y));
  let { element: f = void 0 } = t, { zIndex: s = void 0 } = t, { pointerEvents: u = void 0 } = t, { role: c = void 0 } = t, { label: d = void 0 } = t, { labelledBy: g = void 0 } = t, { describedBy: b = void 0 } = t;
  function h(y) {
    Ne[y ? "unshift" : "push"](() => {
      f = y, n(0, f);
    });
  }
  return e.$$set = (y) => {
    "element" in y && n(0, f = y.element), "zIndex" in y && n(1, s = y.zIndex), "pointerEvents" in y && n(2, u = y.pointerEvents), "role" in y && n(9, c = y.role), "label" in y && n(3, d = y.label), "labelledBy" in y && n(4, g = y.labelledBy), "describedBy" in y && n(5, b = y.describedBy), "$$scope" in y && n(10, o = y.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*role, label, labelledBy, describedBy*/
    568 && n(6, l = c || (d || g || b ? "figure" : void 0));
  }, [
    f,
    s,
    u,
    d,
    g,
    b,
    l,
    r,
    a,
    c,
    o,
    i,
    h
  ];
}
class Oa extends we {
  constructor(t) {
    super(), pe(this, t, ic, rc, ke, {
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
1 }), Vi = (e) => ({ element: (
  /*element*/
  e[0]
) }), ac = (e) => ({ element: e & /*element*/
1 }), Wi = (e) => ({ element: (
  /*element*/
  e[0]
) }), fc = (e) => ({ element: e & /*element*/
1 }), Ki = (e) => ({ element: (
  /*element*/
  e[0]
) });
function Xi(e) {
  let t, n;
  return {
    c() {
      t = Me("title"), n = x(
        /*title*/
        e[8]
      );
    },
    m(l, r) {
      M(l, t, r), _(t, n);
    },
    p(l, r) {
      r & /*title*/
      256 && fe(
        n,
        /*title*/
        l[8]
      );
    },
    d(l) {
      l && N(t);
    }
  };
}
function sc(e) {
  let t, n = (
    /*title*/
    e[8] && Xi(e)
  );
  return {
    c() {
      n && n.c(), t = _e();
    },
    m(l, r) {
      n && n.m(l, r), M(l, t, r);
    },
    p(l, r) {
      /*title*/
      l[8] ? n ? n.p(l, r) : (n = Xi(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(l) {
      n && n.d(l), l && N(t);
    }
  };
}
function uc(e) {
  let t, n, l, r, i;
  const o = (
    /*#slots*/
    e[16].title
  ), a = Ge(
    o,
    e,
    /*$$scope*/
    e[15],
    Ki
  ), f = a || sc(e), s = (
    /*#slots*/
    e[16].defs
  ), u = Ge(
    s,
    e,
    /*$$scope*/
    e[15],
    Wi
  ), c = (
    /*#slots*/
    e[16].default
  ), d = Ge(
    c,
    e,
    /*$$scope*/
    e[15],
    Vi
  );
  return {
    c() {
      t = Me("svg"), f && f.c(), n = Me("defs"), u && u.c(), l = Me("g"), d && d.c(), m(l, "class", "layercake-layout-svg_g"), m(l, "transform", r = "translate(" + /*$padding*/
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
    m(g, b) {
      M(g, t, b), f && f.m(t, null), _(t, n), u && u.m(n, null), _(t, l), d && d.m(l, null), e[17](l), e[18](t), i = !0;
    },
    p(g, [b]) {
      a ? a.p && (!i || b & /*$$scope, element*/
      32769) && We(
        a,
        o,
        g,
        /*$$scope*/
        g[15],
        i ? Ve(
          o,
          /*$$scope*/
          g[15],
          b,
          fc
        ) : Ke(
          /*$$scope*/
          g[15]
        ),
        Ki
      ) : f && f.p && (!i || b & /*title*/
      256) && f.p(g, i ? b : -1), u && u.p && (!i || b & /*$$scope, element*/
      32769) && We(
        u,
        s,
        g,
        /*$$scope*/
        g[15],
        i ? Ve(
          s,
          /*$$scope*/
          g[15],
          b,
          ac
        ) : Ke(
          /*$$scope*/
          g[15]
        ),
        Wi
      ), d && d.p && (!i || b & /*$$scope, element*/
      32769) && We(
        d,
        c,
        g,
        /*$$scope*/
        g[15],
        i ? Ve(
          c,
          /*$$scope*/
          g[15],
          b,
          oc
        ) : Ke(
          /*$$scope*/
          g[15]
        ),
        Vi
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
      4 && re(
        t,
        "z-index",
        /*zIndex*/
        g[2]
      ), b & /*pointerEvents*/
      8 && re(
        t,
        "pointer-events",
        /*pointerEvents*/
        g[3] === !1 ? "none" : null
      );
    },
    i(g) {
      i || (v(f, g), v(u, g), v(d, g), i = !0);
    },
    o(g) {
      z(f, g), z(u, g), z(d, g), i = !1;
    },
    d(g) {
      g && N(t), f && f.d(g), u && u.d(g), d && d.d(g), e[17](null), e[18](null);
    }
  };
}
function cc(e, t, n) {
  let l, r, i, { $$slots: o = {}, $$scope: a } = t, { element: f = void 0 } = t, { innerElement: s = void 0 } = t, { zIndex: u = void 0 } = t, { pointerEvents: c = void 0 } = t, { viewBox: d = void 0 } = t, { label: g = void 0 } = t, { labelledBy: b = void 0 } = t, { describedBy: h = void 0 } = t, { title: y = void 0 } = t;
  const { containerWidth: C, containerHeight: k, padding: p } = On("LayerCake");
  I(e, C, (D) => n(9, l = D)), I(e, k, (D) => n(10, r = D)), I(e, p, (D) => n(11, i = D));
  function q(D) {
    Ne[D ? "unshift" : "push"](() => {
      s = D, n(1, s);
    });
  }
  function E(D) {
    Ne[D ? "unshift" : "push"](() => {
      f = D, n(0, f);
    });
  }
  return e.$$set = (D) => {
    "element" in D && n(0, f = D.element), "innerElement" in D && n(1, s = D.innerElement), "zIndex" in D && n(2, u = D.zIndex), "pointerEvents" in D && n(3, c = D.pointerEvents), "viewBox" in D && n(4, d = D.viewBox), "label" in D && n(5, g = D.label), "labelledBy" in D && n(6, b = D.labelledBy), "describedBy" in D && n(7, h = D.describedBy), "title" in D && n(8, y = D.title), "$$scope" in D && n(15, a = D.$$scope);
  }, [
    f,
    s,
    u,
    c,
    d,
    g,
    b,
    h,
    y,
    l,
    r,
    i,
    C,
    k,
    p,
    a,
    o,
    q,
    E
  ];
}
class Pa extends we {
  constructor(t) {
    super(), pe(this, t, cc, uc, ke, {
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
function Yi(e, t, n) {
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
function Ui(e) {
  let t, n = (
    /*yValue*/
    e[34] + ""
  ), l, r, i;
  return {
    c() {
      t = Me("text"), l = x(n), m(t, "x", r = /*xPos*/
      e[32] + /*colWidth*/
      e[33] / 2), m(t, "y", i = /*$height*/
      e[12] - /*colHeight*/
      e[30] - 5), m(t, "text-anchor", "middle"), m(t, "class", "svelte-1c28ck9");
    },
    m(o, a) {
      M(o, t, a), _(t, l);
    },
    p(o, a) {
      a[0] & /*$y, $data*/
      1280 && n !== (n = /*yValue*/
      o[34] + "") && fe(l, n), a[0] & /*$xGet, $data, $xScale, columnWidth*/
      904 && r !== (r = /*xPos*/
      o[32] + /*colWidth*/
      o[33] / 2) && m(t, "x", r), a[0] & /*$height, columnHeight, $data*/
      4416 && i !== (i = /*$height*/
      o[12] - /*colHeight*/
      o[30] - 5) && m(t, "y", i);
    },
    d(o) {
      o && N(t);
    }
  };
}
function Ji(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, g, b, h;
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
  let C = (
    /*showLabels*/
    e[1] && /*yValue*/
    e[34] && Ui(e)
  );
  return {
    c() {
      t = Me("rect"), u = Me("rect"), C && C.c(), g = _e(), m(t, "class", "group-rect svelte-1c28ck9"), m(
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
      e[33]), m(t, "height", a = /*colHeight*/
      e[30]), m(
        t,
        "fill",
        /*fill*/
        e[0]
      ), m(t, "stroke", f = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Zi : "none"), m(t, "stroke-width", s = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? $i : 0), se(
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
    m(k, p) {
      M(k, t, p), M(k, u, p), C && C.m(k, p), M(k, g, p), b || (h = [
        F(u, "mouseenter", y),
        F(
          u,
          "mouseleave",
          /*mouseleave_handler*/
          e[24]
        )
      ], b = !0);
    },
    p(k, p) {
      e = k, p[0] & /*$x, $data*/
      2304 && n !== (n = /*$x*/
      e[11](
        /*d*/
        e[29]
      )) && m(t, "data-range", n), p[0] & /*$y, $data*/
      1280 && l !== (l = /*yValue*/
      e[34]) && m(t, "data-count", l), p[0] & /*$xGet, $data*/
      264 && r !== (r = /*xPos*/
      e[32]) && m(t, "x", r), p[0] & /*$yGet, $data*/
      260 && i !== (i = /*$yGet*/
      e[2](
        /*d*/
        e[29]
      )) && m(t, "y", i), p[0] & /*$xScale, columnWidth, $data*/
      896 && o !== (o = /*colWidth*/
      e[33]) && m(t, "width", o), p[0] & /*columnHeight, $data*/
      320 && a !== (a = /*colHeight*/
      e[30]) && m(t, "height", a), p[0] & /*fill*/
      1 && m(
        t,
        "fill",
        /*fill*/
        e[0]
      ), p[0] & /*hoveredIndex*/
      16 && f !== (f = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Zi : "none") && m(t, "stroke", f), p[0] & /*hoveredIndex*/
      16 && s !== (s = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? $i : 0) && m(t, "stroke-width", s), p[0] & /*loaded*/
      32 && se(
        t,
        "animated",
        /*loaded*/
        e[5]
      ), p[0] & /*$xGet, $data*/
      264 && c !== (c = /*xPos*/
      e[32]) && m(u, "x", c), p[0] & /*$xScale, columnWidth, $data*/
      896 && d !== (d = /*colWidth*/
      e[33]) && m(u, "width", d), p[0] & /*$height*/
      4096 && m(
        u,
        "height",
        /*$height*/
        e[12]
      ), /*showLabels*/
      e[1] && /*yValue*/
      e[34] ? C ? C.p(e, p) : (C = Ui(e), C.c(), C.m(g.parentNode, g)) : C && (C.d(1), C = null);
    },
    d(k) {
      k && N(t), k && N(u), C && C.d(k), k && N(g), b = !1, ve(h);
    }
  };
}
function dc(e) {
  let t, n = (
    /*$data*/
    e[8]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Ji(Yi(e, n, r));
  return {
    c() {
      t = Me("g");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      m(t, "class", "column-group");
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
          const a = Yi(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = Ji(a), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    i: $,
    o: $,
    d(r) {
      r && N(t), Pe(l, r);
    }
  };
}
const Zi = "#333", $i = 1;
function gc(e, t, n) {
  let l, r, i, o, a, f, s, u, c, d;
  const g = ha(), { data: b, xGet: h, yGet: y, x: C, yRange: k, xScale: p, y: q, height: E, zGet: D, zScale: P, z: B, custom: L } = On("LayerCake");
  I(e, b, (H) => n(8, f = H)), I(e, h, (H) => n(3, a = H)), I(e, y, (H) => n(2, i = H)), I(e, C, (H) => n(11, c = H)), I(e, k, (H) => n(22, o = H)), I(e, p, (H) => n(9, s = H)), I(e, q, (H) => n(10, u = H)), I(e, E, (H) => n(12, d = H));
  let { fill: A = "#00e047" } = t, { showLabels: R = !1 } = t, T = null;
  mt(() => {
    setTimeout(() => n(5, W = !0), 100);
  });
  let W = !1;
  const U = (H, J) => {
    n(4, T = H), g("hover", J);
  }, Q = () => {
    n(4, T = null), g("hover", null);
  };
  return e.$$set = (H) => {
    "fill" in H && n(0, A = H.fill), "showLabels" in H && n(1, R = H.showLabels);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*$xGet*/
    8 && n(7, l = (H) => {
      const J = a(H);
      return Math.abs(J[1] - J[0]);
    }), e.$$.dirty[0] & /*$yRange, $yGet*/
    4194308 && n(6, r = (H) => o[0] - i(H));
  }, [
    A,
    R,
    i,
    a,
    T,
    W,
    r,
    l,
    f,
    s,
    u,
    c,
    d,
    g,
    b,
    h,
    y,
    C,
    k,
    p,
    q,
    E,
    o,
    U,
    Q
  ];
}
class ja extends we {
  constructor(t) {
    super(), pe(this, t, gc, dc, ke, { fill: 0, showLabels: 1 }, null, [-1, -1]);
  }
}
function eo(e, t, n) {
  const l = e.slice();
  return l[28] = t[n], l[30] = n, l;
}
function to(e) {
  let t, n, l;
  return {
    c() {
      t = Me("line"), m(t, "y1", n = /*$height*/
      e[15] * -1), m(t, "y2", "0"), m(t, "x1", "0"), m(t, "x2", "0"), m(t, "stroke-width", l = /*tick*/
      e[28] == 0 ? 2 : 1), m(t, "class", "svelte-rkqqab"), se(
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
      M(r, t, i);
    },
    p(r, i) {
      i & /*$height*/
      32768 && n !== (n = /*$height*/
      r[15] * -1) && m(t, "y1", n), i & /*tickVals*/
      8192 && l !== (l = /*tick*/
      r[28] == 0 ? 2 : 1) && m(t, "stroke-width", l), i & /*tickVals*/
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
      r && N(t);
    }
  };
}
function no(e) {
  let t, n, l;
  return {
    c() {
      t = Me("line"), m(t, "class", "tick-mark svelte-rkqqab"), m(t, "y1", 0), m(t, "y2", 6), m(t, "x1", n = /*xTick*/
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
      M(r, t, i);
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
      r && N(t);
    }
  };
}
function lo(e) {
  let t, n, l, r = (
    /*formatTick*/
    e[4](
      /*tick*/
      e[28]
    ) + ""
  ), i, o, a, f, s, u, c = (
    /*gridlines*/
    e[0] !== !1 && to(e)
  ), d = (
    /*tickMarks*/
    e[1] === !0 && no(e)
  );
  return {
    c() {
      t = Me("g"), c && c.c(), n = _e(), d && d.c(), l = Me("text"), i = x(r), m(l, "x", o = /*xTick*/
      e[5] || /*isBandwidth*/
      e[11] ? (
        /*$xScale*/
        e[12].bandwidth() / 2
      ) : 0), m(l, "y", a = /*yTick*/
      e[6] - /*angle*/
      (e[10] ? 4 : 0)), m(l, "dx", ""), m(l, "dy", ""), m(l, "transform", f = /*angle*/
      e[10] ? "rotate(-45)" : ""), re(
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
      M(g, t, b), c && c.m(t, null), _(t, n), d && d.m(t, null), _(t, l), _(l, i);
    },
    p(g, b) {
      /*gridlines*/
      g[0] !== !1 ? c ? c.p(g, b) : (c = to(g), c.c(), c.m(t, n)) : c && (c.d(1), c = null), /*tickMarks*/
      g[1] === !0 ? d ? d.p(g, b) : (d = no(g), d.c(), d.m(t, l)) : d && (d.d(1), d = null), b & /*formatTick, tickVals*/
      8208 && r !== (r = /*formatTick*/
      g[4](
        /*tick*/
        g[28]
      ) + "") && fe(i, r), b & /*xTick, isBandwidth, $xScale*/
      6176 && o !== (o = /*xTick*/
      g[5] || /*isBandwidth*/
      g[11] ? (
        /*$xScale*/
        g[12].bandwidth() / 2
      ) : 0) && m(l, "x", o), b & /*yTick, angle*/
      1088 && a !== (a = /*yTick*/
      g[6] - /*angle*/
      (g[10] ? 4 : 0)) && m(l, "y", a), b & /*angle*/
      1024 && f !== (f = /*angle*/
      g[10] ? "rotate(-45)" : "") && m(l, "transform", f), b & /*color*/
      512 && re(
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
      g && N(t), c && c.d(), d && d.d();
    }
  };
}
function ro(e) {
  let t, n, l;
  return {
    c() {
      t = Me("line"), m(t, "class", "baseline svelte-rkqqab"), m(t, "y1", n = /*$height*/
      e[15] + 0.5), m(t, "y2", l = /*$height*/
      e[15] + 0.5), m(t, "x1", "0"), m(
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
      r && N(t);
    }
  };
}
function io(e) {
  let t, n, l, r;
  return {
    c() {
      t = Me("text"), m(t, "x", n = /*labelLeft*/
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
      e[8] ? "end" : "middle"), re(
        t,
        "fill",
        /*color*/
        e[9]
      ), m(t, "class", "axis-label svelte-rkqqab");
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
      512 && re(
        t,
        "fill",
        /*color*/
        i[9]
      );
    },
    d(i) {
      i && N(t);
    }
  };
}
function mc(e) {
  let t, n, l, r = (
    /*tickVals*/
    e[13]
  ), i = [];
  for (let f = 0; f < r.length; f += 1)
    i[f] = lo(eo(e, r, f));
  let o = (
    /*baseline*/
    e[2] === !0 && ro(e)
  ), a = !!/*label*/
  e[7] && io(e);
  return {
    c() {
      t = Me("g");
      for (let f = 0; f < i.length; f += 1)
        i[f].c();
      n = _e(), o && o.c(), l = _e(), a && a.c(), m(t, "class", "axis x-axis svelte-rkqqab"), se(
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
      _(t, n), o && o.m(t, null), _(t, l), a && a.m(t, null);
    },
    p(f, [s]) {
      if (s & /*$xScale, tickVals, Math, $yRange, xTick, isBandwidth, yTick, angle, color, textAnchor, formatTick, tickMarks, $height, gridlines*/
      16842355) {
        r = /*tickVals*/
        f[13];
        let u;
        for (u = 0; u < r.length; u += 1) {
          const c = eo(f, r, u);
          i[u] ? i[u].p(c, s) : (i[u] = lo(c), i[u].c(), i[u].m(t, n));
        }
        for (; u < i.length; u += 1)
          i[u].d(1);
        i.length = r.length;
      }
      /*baseline*/
      f[2] === !0 ? o ? o.p(f, s) : (o = ro(f), o.c(), o.m(t, l)) : o && (o.d(1), o = null), /*label*/
      f[7] ? a ? a.p(f, s) : (a = io(f), a.c(), a.m(t, null)) : a && (a.d(1), a = null), s & /*snapTicks*/
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
      f && N(t), Pe(i, f), o && o.d(), a && a.d();
    }
  };
}
function bc(e, t, n) {
  let l, r, i, o, a, f, s, u;
  const { width: c, height: d, xRange: g, padding: b, xScale: h, xDomain: y, yRange: C } = On("LayerCake");
  I(e, c, (Q) => n(16, s = Q)), I(e, d, (Q) => n(15, f = Q)), I(e, g, (Q) => n(17, u = Q)), I(e, h, (Q) => n(12, o = Q)), I(e, y, (Q) => n(26, i = Q)), I(e, C, (Q) => n(14, a = Q));
  let { gridlines: k = !0 } = t, { tickMarks: p = !1 } = t, { baseline: q = !1 } = t, { snapTicks: E = !1 } = t, { formatTick: D = (Q) => Q } = t, { ticks: P = void 0 } = t, { xTick: B = 0 } = t, { yTick: L = 16 } = t, { label: A = "" } = t, { labelLeft: R = !1 } = t, { color: T = "#333" } = t, { angle: W = !1 } = t;
  function U(Q) {
    if (W)
      return "end";
    if (E === !0) {
      if (Q == i[0])
        return "start";
      if (Q == i[1])
        return "end";
    }
    return "middle";
  }
  return e.$$set = (Q) => {
    "gridlines" in Q && n(0, k = Q.gridlines), "tickMarks" in Q && n(1, p = Q.tickMarks), "baseline" in Q && n(2, q = Q.baseline), "snapTicks" in Q && n(3, E = Q.snapTicks), "formatTick" in Q && n(4, D = Q.formatTick), "ticks" in Q && n(25, P = Q.ticks), "xTick" in Q && n(5, B = Q.xTick), "yTick" in Q && n(6, L = Q.yTick), "label" in Q && n(7, A = Q.label), "labelLeft" in Q && n(8, R = Q.labelLeft), "color" in Q && n(9, T = Q.color), "angle" in Q && n(10, W = Q.angle);
  }, e.$$.update = () => {
    e.$$.dirty & /*$xScale*/
    4096 && n(11, l = typeof o.bandwidth == "function"), e.$$.dirty & /*ticks, isBandwidth, $xScale*/
    33560576 && n(13, r = Array.isArray(P) ? P : l ? o.domain() : typeof P == "function" ? P(o.ticks()) : o.ticks(P));
  }, [
    k,
    p,
    q,
    E,
    D,
    B,
    L,
    A,
    R,
    T,
    W,
    l,
    o,
    r,
    a,
    f,
    s,
    u,
    c,
    d,
    g,
    h,
    y,
    C,
    U,
    P
  ];
}
class Qa extends we {
  constructor(t) {
    super(), pe(this, t, bc, mc, ke, {
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
const _c = (e) => ({}), oo = (e) => ({}), hc = (e) => ({}), ao = (e) => ({});
function yc(e) {
  let t, n, l, r, i, o, a, f, s = !!/*title*/
  e[3] && fo(e), u = (
    /*loaded*/
    e[9] && /*histBins*/
    e[8].length > 0 && so(e)
  );
  const c = [Cc, vc], d = [];
  function g(b, h) {
    return (
      /*$$slots*/
      b[12].caption ? 1 : 0
    );
  }
  return o = g(e), a = d[o] = c[o](e), {
    c() {
      t = w("div"), s && s.c(), n = O(), l = w("div"), u && u.c(), r = O(), i = w("div"), a.c(), re(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), re(l, "height", "16px"), m(i, "class", "text-xs text-gray-800 dark:text-gray-200 truncate"), se(i, "mt-1", !/*horizontalLayout*/
      e[4]), m(t, "class", "gap-1 items-center"), se(
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
    m(b, h) {
      M(b, t, h), s && s.m(t, null), _(t, n), _(t, l), u && u.m(l, null), _(t, r), _(t, i), d[o].m(i, null), f = !0;
    },
    p(b, h) {
      /*title*/
      b[3] ? s ? s.p(b, h) : (s = fo(b), s.c(), s.m(t, n)) : s && (s.d(1), s = null), /*loaded*/
      b[9] && /*histBins*/
      b[8].length > 0 ? u ? (u.p(b, h), h & /*loaded, histBins*/
      768 && v(u, 1)) : (u = so(b), u.c(), v(u, 1), u.m(l, null)) : u && (ie(), z(u, 1, 1, () => {
        u = null;
      }), oe()), (!f || h & /*width*/
      1) && re(
        l,
        "width",
        /*width*/
        b[0] == null ? "100%" : `${/*width*/
        b[0]}px`
      );
      let y = o;
      o = g(b), o === y ? d[o].p(b, h) : (ie(), z(d[y], 1, 1, () => {
        d[y] = null;
      }), oe(), a = d[o], a ? a.p(b, h) : (a = d[o] = c[o](b), a.c()), v(a, 1), a.m(i, null)), (!f || h & /*horizontalLayout*/
      16) && se(i, "mt-1", !/*horizontalLayout*/
      b[4]), (!f || h & /*horizontalLayout*/
      16) && se(
        t,
        "flex",
        /*horizontalLayout*/
        b[4]
      ), (!f || h & /*horizontalLayout*/
      16) && se(
        t,
        "my-0.5",
        /*horizontalLayout*/
        b[4]
      );
    },
    i(b) {
      f || (v(u), v(a), f = !0);
    },
    o(b) {
      z(u), z(a), f = !1;
    },
    d(b) {
      b && N(t), s && s.d(), u && u.d(), d[o].d();
    }
  };
}
function kc(e) {
  let t, n, l, r, i, o, a, f = !!/*title*/
  e[3] && uo(e), s = (
    /*loaded*/
    e[9] && /*histBins*/
    e[8].length > 0 && co(e)
  );
  const u = [qc, Lc], c = [];
  function d(g, b) {
    return (
      /*$$slots*/
      g[12].caption ? 1 : 0
    );
  }
  return i = d(e), o = c[i] = u[i](e), {
    c() {
      f && f.c(), t = O(), n = w("div"), s && s.c(), l = O(), r = w("div"), o.c(), re(
        n,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), re(n, "height", "16px"), m(r, "class", "text-xs text-gray-800 dark:text-gray-200 truncate"), se(r, "mt-1", !/*horizontalLayout*/
      e[4]);
    },
    m(g, b) {
      f && f.m(g, b), M(g, t, b), M(g, n, b), s && s.m(n, null), M(g, l, b), M(g, r, b), c[i].m(r, null), a = !0;
    },
    p(g, b) {
      /*title*/
      g[3] ? f ? f.p(g, b) : (f = uo(g), f.c(), f.m(t.parentNode, t)) : f && (f.d(1), f = null), /*loaded*/
      g[9] && /*histBins*/
      g[8].length > 0 ? s ? (s.p(g, b), b & /*loaded, histBins*/
      768 && v(s, 1)) : (s = co(g), s.c(), v(s, 1), s.m(n, null)) : s && (ie(), z(s, 1, 1, () => {
        s = null;
      }), oe()), (!a || b & /*width*/
      1) && re(
        n,
        "width",
        /*width*/
        g[0] == null ? "100%" : `${/*width*/
        g[0]}px`
      );
      let h = i;
      i = d(g), i === h ? c[i].p(g, b) : (ie(), z(c[h], 1, 1, () => {
        c[h] = null;
      }), oe(), o = c[i], o ? o.p(g, b) : (o = c[i] = u[i](g), o.c()), v(o, 1), o.m(r, null)), (!a || b & /*horizontalLayout*/
      16) && se(r, "mt-1", !/*horizontalLayout*/
      g[4]);
    },
    i(g) {
      a || (v(s), v(o), a = !0);
    },
    o(g) {
      z(s), z(o), a = !1;
    },
    d(g) {
      f && f.d(g), g && N(t), g && N(n), s && s.d(), g && N(l), g && N(r), c[i].d();
    }
  };
}
function fo(e) {
  let t, n;
  return {
    c() {
      t = w("div"), n = x(
        /*title*/
        e[3]
      ), m(t, "class", "font-bold text-xs truncate text-right"), re(t, "width", "96px");
    },
    m(l, r) {
      M(l, t, r), _(t, n);
    },
    p(l, r) {
      r & /*title*/
      8 && fe(
        n,
        /*title*/
        l[3]
      );
    },
    d(l) {
      l && N(t);
    }
  };
}
function so(e) {
  let t, n;
  return t = new or({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: Vr().round(!0),
      xDomain: (
        /*histBins*/
        e[8]
      ),
      yScale: gt(),
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
      X(t.$$.fragment);
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
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function pc(e) {
  let t, n, l, r;
  return t = new ja({ props: { fill: (
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
      X(t.$$.fragment), n = O(), X(l.$$.fragment);
    },
    m(i, o) {
      G(t, i, o), M(i, n, o), G(l, i, o), r = !0;
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
      z(t.$$.fragment, i), z(l.$$.fragment, i), r = !1;
    },
    d(i) {
      V(t, i), i && N(n), V(l, i);
    }
  };
}
function wc(e) {
  let t, n;
  return t = new Pa({
    props: {
      $$slots: { default: [pc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      X(t.$$.fragment);
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
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function vc(e) {
  let t;
  const n = (
    /*#slots*/
    e[15].caption
  ), l = Ge(
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
      4194304) && We(
        l,
        n,
        r,
        /*$$scope*/
        r[22],
        t ? Ve(
          n,
          /*$$scope*/
          r[22],
          i,
          _c
        ) : Ke(
          /*$$scope*/
          r[22]
        ),
        oo
      );
    },
    i(r) {
      t || (v(l, r), t = !0);
    },
    o(r) {
      z(l, r), t = !1;
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
      r.m(i, o), M(i, t, o);
    },
    p(i, o) {
      l === (l = n(i)) && r ? r.p(i, o) : (r.d(1), r = l(i), r && (r.c(), r.m(t.parentNode, t)));
    },
    i: $,
    o: $,
    d(i) {
      r.d(i), i && N(t);
    }
  };
}
function Sc(e) {
  let t;
  return {
    c() {
      t = x(" ");
    },
    m(n, l) {
      M(n, t, l);
    },
    p: $,
    d(n) {
      n && N(t);
    }
  };
}
function Nc(e) {
  let t, n, l = Se(".3")(
    /*mean*/
    e[1]
  ) + "", r, i = /*unit*/ e[2] ? " " + /*unit*/
  e[2] : "", o;
  return {
    c() {
      t = x("M = "), n = w("strong"), r = x(l), o = x(i);
    },
    m(a, f) {
      M(a, t, f), M(a, n, f), _(n, r), _(n, o);
    },
    p(a, f) {
      f & /*mean*/
      2 && l !== (l = Se(".3")(
        /*mean*/
        a[1]
      ) + "") && fe(r, l), f & /*unit*/
      4 && i !== (i = /*unit*/
      a[2] ? " " + /*unit*/
      a[2] : "") && fe(o, i);
    },
    d(a) {
      a && N(t), a && N(n);
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
      n = x(t);
    },
    m(l, r) {
      M(l, n, r);
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
      ) + "") && fe(n, t);
    },
    d(l) {
      l && N(n);
    }
  };
}
function uo(e) {
  let t, n;
  return {
    c() {
      t = w("div"), n = x(
        /*title*/
        e[3]
      ), m(t, "class", "font-bold text-xs truncate text-right");
    },
    m(l, r) {
      M(l, t, r), _(t, n);
    },
    p(l, r) {
      r & /*title*/
      8 && fe(
        n,
        /*title*/
        l[3]
      );
    },
    d(l) {
      l && N(t);
    }
  };
}
function co(e) {
  let t, n;
  return t = new or({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: Vr().round(!0),
      xDomain: (
        /*histBins*/
        e[8]
      ),
      yScale: gt(),
      yDomain: [0, null],
      data: (
        /*data*/
        e[7]
      ),
      custom: { hoveredGet: (
        /*func*/
        e[17]
      ) },
      $$slots: { default: [Rc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      X(t.$$.fragment);
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
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function zc(e) {
  let t, n, l, r;
  return t = new ja({ props: { fill: (
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
      X(t.$$.fragment), n = O(), X(l.$$.fragment);
    },
    m(i, o) {
      G(t, i, o), M(i, n, o), G(l, i, o), r = !0;
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
      z(t.$$.fragment, i), z(l.$$.fragment, i), r = !1;
    },
    d(i) {
      V(t, i), i && N(n), V(l, i);
    }
  };
}
function Rc(e) {
  let t, n;
  return t = new Pa({
    props: {
      $$slots: { default: [zc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      X(t.$$.fragment);
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
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function Lc(e) {
  let t;
  const n = (
    /*#slots*/
    e[15].caption
  ), l = Ge(
    n,
    e,
    /*$$scope*/
    e[22],
    ao
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
      4194304) && We(
        l,
        n,
        r,
        /*$$scope*/
        r[22],
        t ? Ve(
          n,
          /*$$scope*/
          r[22],
          i,
          hc
        ) : Ke(
          /*$$scope*/
          r[22]
        ),
        ao
      );
    },
    i(r) {
      t || (v(l, r), t = !0);
    },
    o(r) {
      z(l, r), t = !1;
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
      i[10] != null ? Tc : (
        /*mean*/
        i[1] != null ? Dc : Ec
      )
    );
  }
  let l = n(e), r = l(e);
  return {
    c() {
      r.c(), t = _e();
    },
    m(i, o) {
      r.m(i, o), M(i, t, o);
    },
    p(i, o) {
      l === (l = n(i)) && r ? r.p(i, o) : (r.d(1), r = l(i), r && (r.c(), r.m(t.parentNode, t)));
    },
    i: $,
    o: $,
    d(i) {
      r.d(i), i && N(t);
    }
  };
}
function Ec(e) {
  let t;
  return {
    c() {
      t = x(" ");
    },
    m(n, l) {
      M(n, t, l);
    },
    p: $,
    d(n) {
      n && N(t);
    }
  };
}
function Dc(e) {
  let t, n, l = Se(".3")(
    /*mean*/
    e[1]
  ) + "", r;
  return {
    c() {
      t = x("M = "), n = w("strong"), r = x(l);
    },
    m(i, o) {
      M(i, t, o), M(i, n, o), _(n, r);
    },
    p(i, o) {
      o & /*mean*/
      2 && l !== (l = Se(".3")(
        /*mean*/
        i[1]
      ) + "") && fe(r, l);
    },
    d(i) {
      i && N(t), i && N(n);
    }
  };
}
function Tc(e) {
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
      n = x(t);
    },
    m(l, r) {
      M(l, n, r);
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
      ) + "") && fe(n, t);
    },
    d(l) {
      l && N(n);
    }
  };
}
function Ac(e) {
  let t, n, l, r;
  const i = [kc, yc], o = [];
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
      o[t].m(f, s), M(f, l, s), r = !0;
    },
    p(f, [s]) {
      let u = t;
      t = a(f), t === u ? o[t].p(f, s) : (ie(), z(o[u], 1, 1, () => {
        o[u] = null;
      }), oe(), n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), v(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      r || (v(n), r = !0);
    },
    o(f) {
      z(n), r = !1;
    },
    d(f) {
      o[t].d(f), f && N(l);
    }
  };
}
function Oc(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = Pr(l);
  let { width: o = 100 } = t, { histValues: a } = t, { mean: f = null } = t, { unit: s = null } = t, { title: u = null } = t, { horizontalLayout: c = !1 } = t, { noParent: d = !1 } = t, { color: g = "#3b82f6" } = t, b = [], h = [], y = Se(".3g"), C = Se(","), k = !1;
  mt(() => setTimeout(() => n(9, k = !0), 0));
  let p;
  function q(R) {
    return `${R.label}${s ? " " + s : ""}: ${C(R.count)} instances`;
  }
  const E = (R) => n(10, p = R.detail != null ? R.detail.bin : null), D = (R) => R.bin == p, P = (R) => R.label == p, B = (R) => n(10, p = R.detail != null ? R.detail.label : null), L = (R) => R.label == p, A = (R) => R.label == p;
  return e.$$set = (R) => {
    "width" in R && n(0, o = R.width), "histValues" in R && n(13, a = R.histValues), "mean" in R && n(1, f = R.mean), "unit" in R && n(2, s = R.unit), "title" in R && n(3, u = R.title), "horizontalLayout" in R && n(4, c = R.horizontalLayout), "noParent" in R && n(5, d = R.noParent), "color" in R && n(6, g = R.color), "$$scope" in R && n(22, r = R.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*histValues, binFormat, data*/
    24704)
      if (a) {
        let R = Object.keys(a), T = R.reduce(
          (U, Q, H) => H > 0 ? Math.min(U, Math.abs(parseFloat(Q) - parseFloat(R[H - 1]))) : U,
          1e9
        );
        n(14, y = Se(`.${Sa(T)}f`));
        let W = Object.keys(a).some((U) => U.search(/[^0-9.]/) >= 0);
        console.log("string labels:", W, Object.keys(a)), n(7, b = Object.entries(a).map((U) => ({
          bin: W ? U[0] : parseFloat(U[0]),
          count: U[1],
          label: W ? U[0] : y(U[0])
        }))), b.sort((U, Q) => W ? U.label.localeCompare(Q.label) : parseFloat(U.bin) - parseFloat(Q.bin)), n(8, h = b.map((U) => U.bin));
      } else
        n(7, b = []), n(8, h = []);
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
    g,
    b,
    h,
    k,
    p,
    q,
    i,
    a,
    y,
    l,
    E,
    D,
    P,
    B,
    L,
    A,
    r
  ];
}
class Pc extends we {
  constructor(t) {
    super(), pe(this, t, Oc, Ac, ke, {
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
function go(e, t, n) {
  const l = e.slice();
  return l[24] = t[n], l[26] = n, l;
}
function mo(e) {
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
      t = w("span"), m(t, "class", "bar absolute content-box svelte-mwmtzu"), re(t, "top", "0"), re(
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
      M(i, t, o), n || (l = [
        F(t, "mouseenter", r),
        F(
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
      i && N(t), n = !1, ve(l);
    }
  };
}
function jc(e) {
  let t, n = (
    /*$data*/
    e[2]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = mo(go(e, n, r));
  return {
    c() {
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      t = _e();
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
          const a = go(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = mo(a), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    i: $,
    o: $,
    d(r) {
      Pe(l, r), r && N(t);
    }
  };
}
function Qc(e, t, n) {
  let l, r, i, o, a, f;
  const s = ha(), { data: u, xGet: c, yGet: d, xRange: g, x: b, yRange: h, xScale: y, y: C, height: k, zGet: p, zScale: q, z: E, custom: D } = On("LayerCake");
  I(e, u, (R) => n(2, l = R)), I(e, c, (R) => n(3, r = R)), I(e, d, (R) => n(7, f = R)), I(e, g, (R) => n(4, i = R)), I(e, y, (R) => n(5, o = R)), I(e, E, (R) => n(6, a = R));
  let P = null;
  mt(() => {
    setTimeout(() => n(1, B = !0), 100);
  });
  let B = !1;
  return [
    P,
    B,
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
    g,
    y,
    E,
    (R, T) => {
      n(0, P = R), s("hover", T);
    },
    () => {
      n(0, P = null), s("hover", null);
    }
  ];
}
class Ia extends we {
  constructor(t) {
    super(), pe(this, t, Qc, jc, ke, {});
  }
}
const Ic = (e) => ({}), bo = (e) => ({}), Hc = (e) => ({}), _o = (e) => ({});
function Bc(e) {
  let t, n, l, r, i, o, a, f, s, u = !!/*title*/
  e[1] && ho(e);
  r = new or({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: gt(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        e[0] ?? 1
      ],
      yScale: ir(),
      yDomain: lt(
        /*counts*/
        e[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        e[4]
      ) ? (
        /*colorScale*/
        e[4]
      ) : lt(0, 1.00001, 1 / /*data*/
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
  function g(b, h) {
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
  return ~(a = g(e)) && (f = d[a] = c[a](e)), {
    c() {
      t = w("div"), u && u.c(), n = O(), l = w("div"), X(r.$$.fragment), i = O(), o = w("div"), f && f.c(), re(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), re(l, "height", "6px"), m(l, "class", "rounded overflow-hidden mb-1"), m(o, "class", "text-xs text-gray-800 dark:text-gray-200"), m(t, "class", "gap-1 items-center"), se(
        t,
        "flex",
        /*horizontalLayout*/
        e[2]
      );
    },
    m(b, h) {
      M(b, t, h), u && u.m(t, null), _(t, n), _(t, l), G(r, l, null), _(t, i), _(t, o), ~a && d[a].m(o, null), s = !0;
    },
    p(b, h) {
      /*title*/
      b[1] ? u ? u.p(b, h) : (u = ho(b), u.c(), u.m(t, n)) : u && (u.d(1), u = null);
      const y = {};
      h & /*width*/
      1 && (y.xRange = [
        0,
        /*width*/
        b[0] ?? 1
      ]), h & /*counts*/
      32 && (y.yDomain = lt(
        /*counts*/
        b[5].length
      )), h & /*colorScale, data*/
      80 && (y.yRange = Array.isArray(
        /*colorScale*/
        b[4]
      ) ? (
        /*colorScale*/
        b[4]
      ) : lt(0, 1.00001, 1 / /*data*/
      (b[6].length - 1)).map(
        /*func_2*/
        b[17]
      )), h & /*data*/
      64 && (y.data = /*data*/
      b[6]), h & /*hoveredIndex*/
      128 && (y.custom = { hoveredGet: (
        /*func_3*/
        b[18]
      ) }), h & /*$$scope, hoveredIndex*/
      524416 && (y.$$scope = { dirty: h, ctx: b }), r.$set(y), (!s || h & /*width*/
      1) && re(
        l,
        "width",
        /*width*/
        b[0] == null ? "100%" : `${/*width*/
        b[0]}px`
      );
      let C = a;
      a = g(b), a === C ? ~a && d[a].p(b, h) : (f && (ie(), z(d[C], 1, 1, () => {
        d[C] = null;
      }), oe()), ~a ? (f = d[a], f ? f.p(b, h) : (f = d[a] = c[a](b), f.c()), v(f, 1), f.m(o, null)) : f = null), (!s || h & /*horizontalLayout*/
      4) && se(
        t,
        "flex",
        /*horizontalLayout*/
        b[2]
      );
    },
    i(b) {
      s || (v(r.$$.fragment, b), v(f), s = !0);
    },
    o(b) {
      z(r.$$.fragment, b), z(f), s = !1;
    },
    d(b) {
      b && N(t), u && u.d(), V(r), ~a && d[a].d();
    }
  };
}
function xc(e) {
  let t, n, l, r, i, o, a, f, s = !!/*title*/
  e[1] && yo(e);
  l = new or({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: gt(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        e[0] ?? 1
      ],
      yScale: ir(),
      yDomain: lt(
        /*counts*/
        e[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        e[4]
      ) ? (
        /*colorScale*/
        e[4]
      ) : lt(0, 1.00001, 1 / /*data*/
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
  return ~(o = d(e)) && (a = c[o] = u[o](e)), {
    c() {
      s && s.c(), t = O(), n = w("div"), X(l.$$.fragment), r = O(), i = w("div"), a && a.c(), re(
        n,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), re(n, "height", "6px"), m(n, "class", "rounded overflow-hidden mb-1"), m(i, "class", "text-xs text-gray-800 dark:text-gray-200");
    },
    m(g, b) {
      s && s.m(g, b), M(g, t, b), M(g, n, b), G(l, n, null), M(g, r, b), M(g, i, b), ~o && c[o].m(i, null), f = !0;
    },
    p(g, b) {
      /*title*/
      g[1] ? s ? s.p(g, b) : (s = yo(g), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null);
      const h = {};
      b & /*width*/
      1 && (h.xRange = [
        0,
        /*width*/
        g[0] ?? 1
      ]), b & /*counts*/
      32 && (h.yDomain = lt(
        /*counts*/
        g[5].length
      )), b & /*colorScale, data*/
      80 && (h.yRange = Array.isArray(
        /*colorScale*/
        g[4]
      ) ? (
        /*colorScale*/
        g[4]
      ) : lt(0, 1.00001, 1 / /*data*/
      (g[6].length - 1)).map(
        /*func*/
        g[14]
      )), b & /*data*/
      64 && (h.data = /*data*/
      g[6]), b & /*hoveredIndex*/
      128 && (h.custom = { hoveredGet: (
        /*func_1*/
        g[15]
      ) }), b & /*$$scope, hoveredIndex*/
      524416 && (h.$$scope = { dirty: b, ctx: g }), l.$set(h), (!f || b & /*width*/
      1) && re(
        n,
        "width",
        /*width*/
        g[0] == null ? "100%" : `${/*width*/
        g[0]}px`
      );
      let y = o;
      o = d(g), o === y ? ~o && c[o].p(g, b) : (a && (ie(), z(c[y], 1, 1, () => {
        c[y] = null;
      }), oe()), ~o ? (a = c[o], a ? a.p(g, b) : (a = c[o] = u[o](g), a.c()), v(a, 1), a.m(i, null)) : a = null);
    },
    i(g) {
      f || (v(l.$$.fragment, g), v(a), f = !0);
    },
    o(g) {
      z(l.$$.fragment, g), z(a), f = !1;
    },
    d(g) {
      s && s.d(g), g && N(t), g && N(n), V(l), g && N(r), g && N(i), ~o && c[o].d();
    }
  };
}
function ho(e) {
  let t, n;
  return {
    c() {
      t = w("div"), n = x(
        /*title*/
        e[1]
      ), m(t, "class", "font-bold text-xs truncate text-right"), re(t, "width", "84px");
    },
    m(l, r) {
      M(l, t, r), _(t, n);
    },
    p(l, r) {
      r & /*title*/
      2 && fe(
        n,
        /*title*/
        l[1]
      );
    },
    d(l) {
      l && N(t);
    }
  };
}
function Fc(e) {
  let t, n;
  return t = new Ia({}), t.$on(
    "hover",
    /*hover_handler_1*/
    e[16]
  ), {
    c() {
      X(t.$$.fragment);
    },
    m(l, r) {
      G(t, l, r), n = !0;
    },
    p: $,
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function Gc(e) {
  let t, n;
  return t = new Oa({
    props: {
      $$slots: { default: [Fc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      X(t.$$.fragment);
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
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
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
      t = new er(!1), l = _e(), t.a = l;
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
    i: $,
    o: $,
    d(r) {
      r && N(l), r && t.d();
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
      t = new er(!1), l = _e(), t.a = l;
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
    i: $,
    o: $,
    d(r) {
      r && N(l), r && t.d();
    }
  };
}
function Kc(e) {
  let t;
  const n = (
    /*#slots*/
    e[12].caption
  ), l = Ge(
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
      524288) && We(
        l,
        n,
        r,
        /*$$scope*/
        r[19],
        t ? Ve(
          n,
          /*$$scope*/
          r[19],
          i,
          Ic
        ) : Ke(
          /*$$scope*/
          r[19]
        ),
        bo
      );
    },
    i(r) {
      t || (v(l, r), t = !0);
    },
    o(r) {
      z(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function yo(e) {
  let t, n;
  return {
    c() {
      t = w("div"), n = x(
        /*title*/
        e[1]
      ), m(t, "class", "font-bold text-xs truncate text-right");
    },
    m(l, r) {
      M(l, t, r), _(t, n);
    },
    p(l, r) {
      r & /*title*/
      2 && fe(
        n,
        /*title*/
        l[1]
      );
    },
    d(l) {
      l && N(t);
    }
  };
}
function Xc(e) {
  let t, n;
  return t = new Ia({}), t.$on(
    "hover",
    /*hover_handler*/
    e[13]
  ), {
    c() {
      X(t.$$.fragment);
    },
    m(l, r) {
      G(t, l, r), n = !0;
    },
    p: $,
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function Yc(e) {
  let t, n;
  return t = new Oa({
    props: {
      $$slots: { default: [Xc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      X(t.$$.fragment);
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
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
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
      t = new er(!1), l = _e(), t.a = l;
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
    i: $,
    o: $,
    d(r) {
      r && N(l), r && t.d();
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
      t = new er(!1), l = _e(), t.a = l;
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
    i: $,
    o: $,
    d(r) {
      r && N(l), r && t.d();
    }
  };
}
function Zc(e) {
  let t;
  const n = (
    /*#slots*/
    e[12].caption
  ), l = Ge(
    n,
    e,
    /*$$scope*/
    e[19],
    _o
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
      524288) && We(
        l,
        n,
        r,
        /*$$scope*/
        r[19],
        t ? Ve(
          n,
          /*$$scope*/
          r[19],
          i,
          Hc
        ) : Ke(
          /*$$scope*/
          r[19]
        ),
        _o
      );
    },
    i(r) {
      t || (v(l, r), t = !0);
    },
    o(r) {
      z(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function $c(e) {
  let t, n, l, r;
  const i = [xc, Bc], o = [];
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
      o[t].m(f, s), M(f, l, s), r = !0;
    },
    p(f, [s]) {
      let u = t;
      t = a(f), t === u ? o[t].p(f, s) : (ie(), z(o[u], 1, 1, () => {
        o[u] = null;
      }), oe(), n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), v(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      r || (v(n), r = !0);
    },
    o(f) {
      z(n), r = !1;
    },
    d(f) {
      o[t].d(f), f && N(l);
    }
  };
}
function e0(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = Pr(l);
  let { width: o = null } = t, { title: a = null } = t, { horizontalLayout: f = !1 } = t, { noParent: s = !1 } = t, { colorScale: u = Array.from(as) } = t, { counts: c = null } = t, { order: d = [] } = t, g = [], b;
  Se(",");
  let h = Se(".1~%"), y = 1;
  function C(L) {
    return `<strong>${h(L.count / y)}</strong> ${L.name}`;
  }
  let k = null;
  const p = (L) => n(7, b = L.detail ? L.detail.index : null), q = (L) => u(L), E = (L) => L.index == b, D = (L) => n(7, b = L.detail ? L.detail.index : null), P = (L) => u(L), B = (L) => L.index == b;
  return e.$$set = (L) => {
    "width" in L && n(0, o = L.width), "title" in L && n(1, a = L.title), "horizontalLayout" in L && n(2, f = L.horizontalLayout), "noParent" in L && n(3, s = L.noParent), "colorScale" in L && n(4, u = L.colorScale), "counts" in L && n(5, c = L.counts), "order" in L && n(11, d = L.order), "$$scope" in L && n(19, r = L.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*counts, order*/
    2080)
      if (c && d.length > 0) {
        let L = Object.values(c).reduce((R, T) => R + T, 0), A = 0;
        n(6, g = d.map((R, T) => {
          let W = A;
          return A += c[R] || 0, {
            start: W / L,
            end: A / L,
            index: T,
            name: R,
            count: c[R] || 0
          };
        }));
      } else
        n(6, g = []);
    e.$$.dirty & /*counts*/
    32 && (c ? y = Object.values(c).reduce((L, A) => L + A, 0) : y = 1), e.$$.dirty & /*data*/
    64 && (g.length > 0 ? n(8, k = g.reduce((L, A) => L.count > A.count ? L : A, g[0])) : n(8, k = null));
  }, [
    o,
    a,
    f,
    s,
    u,
    c,
    g,
    b,
    k,
    C,
    i,
    d,
    l,
    p,
    q,
    E,
    D,
    P,
    B,
    r
  ];
}
class t0 extends we {
  constructor(t) {
    super(), pe(this, t, e0, $c, ke, {
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
function zn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
zn.prototype = {
  constructor: zn,
  scale: function(e) {
    return e === 1 ? this : new zn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new zn(this.k, this.x + this.k * e, this.y + this.k * t);
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
zn.prototype;
function ko(e) {
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
      ~t && o[t].m(f, s), M(f, l, s), r = !0;
    },
    p(f, s) {
      let u = t;
      t = a(f), t === u ? ~t && o[t].p(f, s) : (n && (ie(), z(o[u], 1, 1, () => {
        o[u] = null;
      }), oe()), ~t ? (n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), v(n, 1), n.m(l.parentNode, l)) : n = null);
    },
    i(f) {
      r || (v(n), r = !0);
    },
    o(f) {
      z(n), r = !1;
    },
    d(f) {
      ~t && o[t].d(f), f && N(l);
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
      X(t.$$.fragment);
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
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
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
      X(t.$$.fragment);
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
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function r0(e) {
  let t, n;
  return t = new Gr({
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
      X(t.$$.fragment);
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
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function i0(e) {
  let t, n;
  return t = new Gr({
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
      X(t.$$.fragment);
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
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function o0(e) {
  let t, n, l = Se(",")(
    /*values*/
    e[0].count ?? 0
  ) + "", r, i, o = Se(",")(
    /*values*/
    e[0].total ?? 1
  ) + "", a;
  return {
    c() {
      t = w("span"), n = w("strong"), r = x(l), i = x(`
        / `), a = x(o), m(t, "slot", "caption");
    },
    m(f, s) {
      M(f, t, s), _(t, n), _(n, r), _(t, i), _(t, a);
    },
    p(f, s) {
      s & /*values*/
      1 && l !== (l = Se(",")(
        /*values*/
        f[0].count ?? 0
      ) + "") && fe(r, l), s & /*values*/
      1 && o !== (o = Se(",")(
        /*values*/
        f[0].total ?? 1
      ) + "") && fe(a, o);
    },
    d(f) {
      f && N(t);
    }
  };
}
function a0(e) {
  let t, n, l = Se(".1%")(
    /*values*/
    e[0].mean ?? 0
  ) + "", r, i, o, a = Se(".1%")(1 - /*values*/
  (e[0].mean ?? 0)) + "", f, s;
  return {
    c() {
      t = w("span"), n = w("strong"), r = x(l), i = x(`
        true,
        `), o = w("strong"), f = x(a), s = x(`
        false`), m(t, "slot", "caption");
    },
    m(u, c) {
      M(u, t, c), _(t, n), _(n, r), _(t, i), _(t, o), _(o, f), _(t, s);
    },
    p(u, c) {
      c & /*values*/
      1 && l !== (l = Se(".1%")(
        /*values*/
        u[0].mean ?? 0
      ) + "") && fe(r, l), c & /*values*/
      1 && a !== (a = Se(".1%")(1 - /*values*/
      (u[0].mean ?? 0)) + "") && fe(f, a);
    },
    d(u) {
      u && N(t);
    }
  };
}
function f0(e) {
  let t, n, l = !!/*values*/
  e[0] && ko(e);
  return {
    c() {
      l && l.c(), t = _e();
    },
    m(r, i) {
      l && l.m(r, i), M(r, t, i), n = !0;
    },
    p(r, [i]) {
      /*values*/
      r[0] ? l ? (l.p(r, i), i & /*values*/
      1 && v(l, 1)) : (l = ko(r), l.c(), v(l, 1), l.m(t.parentNode, t)) : l && (ie(), z(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (v(l), n = !0);
    },
    o(r) {
      z(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && N(t);
    }
  };
}
function s0(e, t, n) {
  let l;
  I(e, Vl, (o) => n(1, l = o)), mt(() => {
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
class Ut extends we {
  constructor(t) {
    super(), pe(this, t, s0, f0, ke, { values: 0 });
  }
}
function po(e) {
  var j;
  let t, n, l, r, i = (
    /*values*/
    (e[0].type || "unknown") + ""
  ), o, a, f, s, u, c, d, g, b, h, y, C = (
    /*formatNumber*/
    e[4](
      /*values*/
      ((j = e[0].values) == null ? void 0 : j.length) ?? 0
    ) + ""
  ), k, p, q, E, D, P, B, L, A, R, T, W, U;
  c = new be({
    props: {
      icon: (
        /*showCountDetails*/
        e[1] ? Ye : Ct
      ),
      class: "text-gray-500 dark:text-gray-300"
    }
  });
  let Q = (
    /*showCountDetails*/
    e[1] && wo(e)
  ), H = !!/*values*/
  e[0].missingness && /*values*/
  (e[0].missingness.rate.count ?? 0) > 0 && Co(e), J = (
    /*values*/
    e[0].types && Mo(e)
  );
  const he = [c0, u0], ne = [];
  function de(te, ue) {
    var K;
    return (
      /*values*/
      (K = te[0].values) != null && K.type ? 0 : 1
    );
  }
  return A = de(e), R = ne[A] = he[A](e), {
    c() {
      t = w("div"), n = w("span"), n.textContent = "Type:", l = O(), r = w("span"), o = x(i), a = O(), f = w("div"), s = w("div"), u = w("button"), X(c.$$.fragment), d = O(), g = w("div"), b = w("span"), b.textContent = "Count:", h = O(), y = w("span"), k = x(C), p = O(), q = w("span"), q.textContent = "rows", E = O(), Q && Q.c(), D = O(), H && H.c(), P = O(), J && J.c(), B = O(), L = w("div"), R.c(), m(n, "class", "font-semibold"), m(r, "class", "font-mono"), m(t, "class", "text-sm text-gray-700 dark:text-gray-300 mb-4"), m(b, "class", "font-bold text-gray-900 dark:text-gray-100"), m(y, "class", "tabular-nums text-gray-700 dark:text-gray-200"), m(q, "class", "text-gray-500 dark:text-gray-400"), m(u, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), m(u, "aria-label", "Toggle count details"), m(s, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-base w-full rounded-md overflow-hidden"), m(L, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-2 text-base w-full rounded-md"), m(f, "class", "space-y-2");
    },
    m(te, ue) {
      M(te, t, ue), _(t, n), _(t, l), _(t, r), _(r, o), M(te, a, ue), M(te, f, ue), _(f, s), _(s, u), G(c, u, null), _(u, d), _(u, g), _(g, b), _(g, h), _(g, y), _(y, k), _(g, p), _(g, q), _(s, E), Q && Q.m(s, null), _(f, D), H && H.m(f, null), _(f, P), J && J.m(f, null), _(f, B), _(f, L), ne[A].m(L, null), T = !0, W || (U = F(
        u,
        "click",
        /*click_handler*/
        e[6]
      ), W = !0);
    },
    p(te, ue) {
      var le;
      (!T || ue & /*values*/
      1) && i !== (i = /*values*/
      (te[0].type || "unknown") + "") && fe(o, i);
      const K = {};
      ue & /*showCountDetails*/
      2 && (K.icon = /*showCountDetails*/
      te[1] ? Ye : Ct), c.$set(K), (!T || ue & /*values*/
      1) && C !== (C = /*formatNumber*/
      te[4](
        /*values*/
        ((le = te[0].values) == null ? void 0 : le.length) ?? 0
      ) + "") && fe(k, C), /*showCountDetails*/
      te[1] ? Q ? (Q.p(te, ue), ue & /*showCountDetails*/
      2 && v(Q, 1)) : (Q = wo(te), Q.c(), v(Q, 1), Q.m(s, null)) : Q && (ie(), z(Q, 1, 1, () => {
        Q = null;
      }), oe()), /*values*/
      te[0].missingness && /*values*/
      (te[0].missingness.rate.count ?? 0) > 0 ? H ? (H.p(te, ue), ue & /*values*/
      1 && v(H, 1)) : (H = Co(te), H.c(), v(H, 1), H.m(f, P)) : H && (ie(), z(H, 1, 1, () => {
        H = null;
      }), oe()), /*values*/
      te[0].types ? J ? (J.p(te, ue), ue & /*values*/
      1 && v(J, 1)) : (J = Mo(te), J.c(), v(J, 1), J.m(f, B)) : J && (ie(), z(J, 1, 1, () => {
        J = null;
      }), oe());
      let ae = A;
      A = de(te), A === ae ? ne[A].p(te, ue) : (ie(), z(ne[ae], 1, 1, () => {
        ne[ae] = null;
      }), oe(), R = ne[A], R ? R.p(te, ue) : (R = ne[A] = he[A](te), R.c()), v(R, 1), R.m(L, null));
    },
    i(te) {
      T || (v(c.$$.fragment, te), v(Q), v(H), v(J), v(R), T = !0);
    },
    o(te) {
      z(c.$$.fragment, te), z(Q), z(H), z(J), z(R), T = !1;
    },
    d(te) {
      te && N(t), te && N(a), te && N(f), V(c), Q && Q.d(), H && H.d(), J && J.d(), ne[A].d(), W = !1, U();
    }
  };
}
function wo(e) {
  let t, n, l = (
    /*values*/
    e[0].ids && vo(e)
  );
  return {
    c() {
      t = w("div"), l && l.c(), m(t, "class", "mx-2 px-2 py-2");
    },
    m(r, i) {
      M(r, t, i), l && l.m(t, null), n = !0;
    },
    p(r, i) {
      /*values*/
      r[0].ids ? l ? (l.p(r, i), i & /*values*/
      1 && v(l, 1)) : (l = vo(r), l.c(), v(l, 1), l.m(t, null)) : l && (ie(), z(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (v(l), n = !0);
    },
    o(r) {
      z(l), n = !1;
    },
    d(r) {
      r && N(t), l && l.d();
    }
  };
}
function vo(e) {
  let t, n, l, r, i, o, a, f, s, u;
  return r = new Ut({
    props: { values: (
      /*values*/
      e[0].ids.count
    ) }
  }), s = new Ut({
    props: {
      values: (
        /*values*/
        e[0].ids.count_per_trajectory
      )
    }
  }), {
    c() {
      t = w("div"), t.textContent = "Trajectories", n = O(), l = w("div"), X(r.$$.fragment), i = O(), o = w("div"), o.textContent = "Timesteps per Trajectory", a = O(), f = w("div"), X(s.$$.fragment), m(t, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), m(l, "class", "mb-2"), m(o, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), m(f, "class", "mb-2");
    },
    m(c, d) {
      M(c, t, d), M(c, n, d), M(c, l, d), G(r, l, null), M(c, i, d), M(c, o, d), M(c, a, d), M(c, f, d), G(s, f, null), u = !0;
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
      u || (v(r.$$.fragment, c), v(s.$$.fragment, c), u = !0);
    },
    o(c) {
      z(r.$$.fragment, c), z(s.$$.fragment, c), u = !1;
    },
    d(c) {
      c && N(t), c && N(n), c && N(l), V(r), c && N(i), c && N(o), c && N(a), c && N(f), V(s);
    }
  };
}
function Co(e) {
  let t, n, l, r, i, o, a, f, s = (
    /*formatPercent*/
    e[5](
      /*values*/
      (e[0].missingness.rate.count ?? 0) / /*values*/
      (e[0].missingness.rate.total ?? 1)
    ) + ""
  ), u, c, d, g, b, h, y;
  l = new be({
    props: {
      icon: (
        /*showMissingnessDetails*/
        e[2] ? Ye : Ct
      ),
      class: "text-gray-500 dark:text-gray-300"
    }
  });
  let C = (
    /*showMissingnessDetails*/
    e[2] && So(e)
  );
  return {
    c() {
      t = w("div"), n = w("button"), X(l.$$.fragment), r = O(), i = w("div"), o = w("span"), o.textContent = "Missingness:", a = O(), f = w("span"), u = x(s), c = O(), d = w("span"), d.textContent = "of rows", g = O(), C && C.c(), m(o, "class", "font-bold text-gray-900 dark:text-gray-100"), m(f, "class", "tabular-nums text-gray-700 dark:text-gray-200"), m(d, "class", "text-gray-500 dark:text-gray-400"), m(n, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), m(n, "aria-label", "Toggle missingness details"), m(t, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-base w-full rounded-md overflow-hidden");
    },
    m(k, p) {
      M(k, t, p), _(t, n), G(l, n, null), _(n, r), _(n, i), _(i, o), _(i, a), _(i, f), _(f, u), _(i, c), _(i, d), _(t, g), C && C.m(t, null), b = !0, h || (y = F(
        n,
        "click",
        /*click_handler_1*/
        e[7]
      ), h = !0);
    },
    p(k, p) {
      const q = {};
      p & /*showMissingnessDetails*/
      4 && (q.icon = /*showMissingnessDetails*/
      k[2] ? Ye : Ct), l.$set(q), (!b || p & /*values*/
      1) && s !== (s = /*formatPercent*/
      k[5](
        /*values*/
        (k[0].missingness.rate.count ?? 0) / /*values*/
        (k[0].missingness.rate.total ?? 1)
      ) + "") && fe(u, s), /*showMissingnessDetails*/
      k[2] ? C ? (C.p(k, p), p & /*showMissingnessDetails*/
      4 && v(C, 1)) : (C = So(k), C.c(), v(C, 1), C.m(t, null)) : C && (ie(), z(C, 1, 1, () => {
        C = null;
      }), oe());
    },
    i(k) {
      b || (v(l.$$.fragment, k), v(C), b = !0);
    },
    o(k) {
      z(l.$$.fragment, k), z(C), b = !1;
    },
    d(k) {
      k && N(t), V(l), C && C.d(), h = !1, y();
    }
  };
}
function So(e) {
  let t, n, l = (
    /*values*/
    e[0].missingness && No(e)
  );
  return {
    c() {
      t = w("div"), l && l.c(), m(t, "class", "mx-2 px-2 py-2");
    },
    m(r, i) {
      M(r, t, i), l && l.m(t, null), n = !0;
    },
    p(r, i) {
      /*values*/
      r[0].missingness ? l ? (l.p(r, i), i & /*values*/
      1 && v(l, 1)) : (l = No(r), l.c(), v(l, 1), l.m(t, null)) : l && (ie(), z(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (v(l), n = !0);
    },
    o(r) {
      z(l), n = !1;
    },
    d(r) {
      r && N(t), l && l.d();
    }
  };
}
function No(e) {
  let t, n, l, r, i, o, a, f, s, u;
  return r = new Ut({
    props: {
      values: (
        /*values*/
        e[0].missingness.rate
      )
    }
  }), s = new Ut({
    props: {
      values: (
        /*values*/
        e[0].missingness.rate_per_trajectory
      )
    }
  }), {
    c() {
      t = w("div"), t.textContent = "Number of Missing Values", n = O(), l = w("div"), X(r.$$.fragment), i = O(), o = w("div"), o.textContent = "Missingness Rate per Trajectory", a = O(), f = w("div"), X(s.$$.fragment), m(t, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), m(l, "class", "mb-2"), m(o, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), m(f, "class", "mb-2");
    },
    m(c, d) {
      M(c, t, d), M(c, n, d), M(c, l, d), G(r, l, null), M(c, i, d), M(c, o, d), M(c, a, d), M(c, f, d), G(s, f, null), u = !0;
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
      u || (v(r.$$.fragment, c), v(s.$$.fragment, c), u = !0);
    },
    o(c) {
      z(r.$$.fragment, c), z(s.$$.fragment, c), u = !1;
    },
    d(c) {
      c && N(t), c && N(n), c && N(l), V(r), c && N(i), c && N(o), c && N(a), c && N(f), V(s);
    }
  };
}
function Mo(e) {
  let t, n, l, r, i, o, a, f, s = (
    /*formatNumber*/
    e[4](Object.keys(
      /*values*/
      e[0].types.counts
    ).length ?? 0) + ""
  ), u, c, d, g, b, h, y;
  l = new be({
    props: {
      icon: (
        /*showTypeDetails*/
        e[3] ? Ye : Ct
      ),
      class: "text-gray-500 dark:text-gray-300"
    }
  });
  let C = (
    /*showTypeDetails*/
    e[3] && zo(e)
  );
  return {
    c() {
      t = w("div"), n = w("button"), X(l.$$.fragment), r = O(), i = w("div"), o = w("span"), o.textContent = "Data Elements:", a = O(), f = w("span"), u = x(s), c = O(), d = w("span"), d.textContent = "distinct elements", g = O(), C && C.c(), m(o, "class", "font-bold text-gray-900 dark:text-gray-100"), m(f, "class", "tabular-nums text-gray-700 dark:text-gray-200"), m(d, "class", "text-gray-500 dark:text-gray-400"), m(n, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), m(n, "aria-label", "Toggle type details"), m(t, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-base w-full rounded-md");
    },
    m(k, p) {
      M(k, t, p), _(t, n), G(l, n, null), _(n, r), _(n, i), _(i, o), _(i, a), _(i, f), _(f, u), _(i, c), _(i, d), _(t, g), C && C.m(t, null), b = !0, h || (y = F(
        n,
        "click",
        /*click_handler_2*/
        e[8]
      ), h = !0);
    },
    p(k, p) {
      const q = {};
      p & /*showTypeDetails*/
      8 && (q.icon = /*showTypeDetails*/
      k[3] ? Ye : Ct), l.$set(q), (!b || p & /*values*/
      1) && s !== (s = /*formatNumber*/
      k[4](Object.keys(
        /*values*/
        k[0].types.counts
      ).length ?? 0) + "") && fe(u, s), /*showTypeDetails*/
      k[3] ? C ? (C.p(k, p), p & /*showTypeDetails*/
      8 && v(C, 1)) : (C = zo(k), C.c(), v(C, 1), C.m(t, null)) : C && (ie(), z(C, 1, 1, () => {
        C = null;
      }), oe());
    },
    i(k) {
      b || (v(l.$$.fragment, k), v(C), b = !0);
    },
    o(k) {
      z(l.$$.fragment, k), z(C), b = !1;
    },
    d(k) {
      k && N(t), V(l), C && C.d(), h = !1, y();
    }
  };
}
function zo(e) {
  let t, n, l;
  return n = new Ut({
    props: { values: (
      /*values*/
      e[0].types
    ) }
  }), {
    c() {
      t = w("div"), X(n.$$.fragment), m(t, "class", "mx-2 px-2 py-2");
    },
    m(r, i) {
      M(r, t, i), G(n, t, null), l = !0;
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
      z(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && N(t), V(n);
    }
  };
}
function u0(e) {
  let t;
  return {
    c() {
      t = w("div"), t.innerHTML = 'Values: <span class="font-normal text-gray-500 dark:text-gray-400">none</span>', m(t, "class", "text-sm font-bold text-gray-900 dark:text-gray-100 mr-2");
    },
    m(n, l) {
      M(n, t, l);
    },
    p: $,
    i: $,
    o: $,
    d(n) {
      n && N(t);
    }
  };
}
function c0(e) {
  let t, n, l, r;
  return l = new Ut({
    props: { values: (
      /*values*/
      e[0].values
    ) }
  }), {
    c() {
      t = w("div"), t.textContent = "Values:", n = O(), X(l.$$.fragment), m(t, "class", "mb-2 text-sm font-bold text-gray-900 dark:text-gray-100 mr-2");
    },
    m(i, o) {
      M(i, t, o), M(i, n, o), G(l, i, o), r = !0;
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
      z(l.$$.fragment, i), r = !1;
    },
    d(i) {
      i && N(t), i && N(n), V(l, i);
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
      l && l.m(r, i), M(r, t, i), n = !0;
    },
    p(r, [i]) {
      /*values*/
      r[0] && /*values*/
      (r[0].ids || /*values*/
      r[0].missingness || /*values*/
      r[0].values) ? l ? (l.p(r, i), i & /*values*/
      1 && v(l, 1)) : (l = po(r), l.c(), v(l, 1), l.m(t.parentNode, t)) : l && (ie(), z(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (v(l), n = !0);
    },
    o(r) {
      z(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && N(t);
    }
  };
}
function g0(e, t, n) {
  let { values: l = null } = t, r = !1, i = !1, o = !1;
  const a = Se(","), f = Se(".2~%"), s = () => n(1, r = !r), u = () => n(2, i = !i), c = () => n(3, o = !o);
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
class Ha extends we {
  constructor(t) {
    super(), pe(this, t, g0, d0, ke, { values: 0 });
  }
}
function Ro(e, t, n) {
  const l = e.slice();
  return l[4] = t[n], l;
}
function Lo(e) {
  let t, n, l, r, i;
  n = new Ha({
    props: { values: (
      /*data*/
      e[1].result
    ) }
  });
  let o = (
    /*data*/
    e[1].dataset_queries && /*data*/
    e[1].dataset_queries.length > 0 && qo(e)
  );
  return {
    c() {
      t = w("div"), X(n.$$.fragment), l = O(), o && o.c(), r = _e(), m(t, "class", "p-4 border-t border-gray-200 dark:border-gray-700");
    },
    m(a, f) {
      M(a, t, f), G(n, t, null), M(a, l, f), o && o.m(a, f), M(a, r, f), i = !0;
    },
    p(a, f) {
      const s = {};
      f & /*data*/
      2 && (s.values = /*data*/
      a[1].result), n.$set(s), /*data*/
      a[1].dataset_queries && /*data*/
      a[1].dataset_queries.length > 0 ? o ? o.p(a, f) : (o = qo(a), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
    },
    i(a) {
      i || (v(n.$$.fragment, a), i = !0);
    },
    o(a) {
      z(n.$$.fragment, a), i = !1;
    },
    d(a) {
      a && N(t), V(n), a && N(l), o && o.d(a), a && N(r);
    }
  };
}
function qo(e) {
  let t, n, l, r = (
    /*data*/
    e[1].dataset_queries
  ), i = [];
  for (let o = 0; o < r.length; o += 1)
    i[o] = Eo(Ro(e, r, o));
  return {
    c() {
      t = w("div"), n = w("div"), n.textContent = "SQL Queries", l = O();
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      m(n, "class", "text-xs font-semibold text-gray-500 mb-1 uppercase"), m(t, "class", "p-4 border-t border-gray-200 dark:border-gray-700");
    },
    m(o, a) {
      M(o, t, a), _(t, n), _(t, l);
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
          const s = Ro(o, r, f);
          i[f] ? i[f].p(s, a) : (i[f] = Eo(s), i[f].c(), i[f].m(t, null));
        }
        for (; f < i.length; f += 1)
          i[f].d(1);
        i.length = r.length;
      }
    },
    d(o) {
      o && N(t), Pe(i, o);
    }
  };
}
function Eo(e) {
  let t, n = (
    /*sql*/
    e[4] + ""
  ), l;
  return {
    c() {
      t = w("pre"), l = x(n), m(t, "class", "bg-white dark:bg-gray-900 text-xs font-mono p-2 rounded");
    },
    m(r, i) {
      M(r, t, i), _(t, l);
    },
    p(r, i) {
      i & /*data*/
      2 && n !== (n = /*sql*/
      r[4] + "") && fe(l, n);
    },
    d(r) {
      r && N(t);
    }
  };
}
function m0(e) {
  let t, n, l, r, i, o, a, f, s, u;
  o = new be({
    props: {
      icon: (
        /*isExpanded*/
        e[2] ? Gl : Ye
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
      t = w("div"), n = w("button"), l = w("span"), r = x(
        /*queryText*/
        e[0]
      ), i = O(), X(o.$$.fragment), a = O(), c && c.c(), m(l, "class", "text-sm font-mono text-gray-700 dark:text-gray-300 truncate flex-1"), m(n, "class", "w-full px-3 py-2 text-left flex items-center justify-between bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none"), m(t, "class", "border border-gray-300 dark:border-gray-600 rounded-md mb-2 overflow-hidden");
    },
    m(d, g) {
      M(d, t, g), _(t, n), _(n, l), _(l, r), _(n, i), G(o, n, null), _(t, a), c && c.m(t, null), f = !0, s || (u = F(
        n,
        "click",
        /*toggleExpanded*/
        e[3]
      ), s = !0);
    },
    p(d, [g]) {
      (!f || g & /*queryText*/
      1) && fe(
        r,
        /*queryText*/
        d[0]
      );
      const b = {};
      g & /*isExpanded*/
      4 && (b.icon = /*isExpanded*/
      d[2] ? Gl : Ye), o.$set(b), /*isExpanded*/
      d[2] ? c ? (c.p(d, g), g & /*isExpanded*/
      4 && v(c, 1)) : (c = Lo(d), c.c(), v(c, 1), c.m(t, null)) : c && (ie(), z(c, 1, 1, () => {
        c = null;
      }), oe());
    },
    i(d) {
      f || (v(o.$$.fragment, d), v(c), f = !0);
    },
    o(d) {
      z(o.$$.fragment, d), z(c), f = !1;
    },
    d(d) {
      d && N(t), V(o), c && c.d(), s = !1, u();
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
class _0 extends we {
  constructor(t) {
    super(), pe(this, t, b0, m0, ke, { queryText: 0, data: 1 });
  }
}
function Do(e, t, n) {
  const l = e.slice();
  return l[5] = t[n][0], l[6] = t[n][1], l;
}
function To(e) {
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
      t = w("div"), r.c(), m(t, "class", "space-y-2 mt-3");
    },
    m(s, u) {
      M(s, t, u), a[l].m(t, null), i = !0;
    },
    p(s, u) {
      let c = l;
      l = f(s, u), l === c ? a[l].p(s, u) : (ie(), z(a[c], 1, 1, () => {
        a[c] = null;
      }), oe(), r = a[l], r ? r.p(s, u) : (r = a[l] = o[l](s), r.c()), v(r, 1), r.m(t, null));
    },
    i(s) {
      i || (v(r), i = !0);
    },
    o(s) {
      z(r), i = !1;
    },
    d(s) {
      s && N(t), a[l].d();
    }
  };
}
function h0(e) {
  let t;
  return {
    c() {
      t = w("div"), t.textContent = "No subqueries yet", m(t, "class", "text-center py-8 text-gray-900 dark:text-gray-100");
    },
    m(n, l) {
      M(n, t, l);
    },
    p: $,
    i: $,
    o: $,
    d(n) {
      n && N(t);
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
  const i = (o) => z(r[o], 1, 1, () => {
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
      M(o, t, a), n = !0;
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
          r[f] ? (r[f].p(s, a), v(r[f], 1)) : (r[f] = Ao(s), r[f].c(), v(r[f], 1), r[f].m(t.parentNode, t));
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
        z(r[a]);
      n = !1;
    },
    d(o) {
      Pe(r, o), o && N(t);
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
      X(t.$$.fragment);
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
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function k0(e) {
  let t, n, l, r, i, o, a, f, s, u, c;
  o = new be({
    props: {
      icon: (
        /*enabled*/
        e[0] ? Gl : Ye
      ),
      class: "inline"
    }
  });
  let d = (
    /*enabled*/
    e[0] && To(e)
  );
  return {
    c() {
      t = w("div"), n = w("button"), l = w("h3"), l.textContent = "Subqueries", r = O(), i = w("div"), X(o.$$.fragment), a = O(), d && d.c(), m(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100"), m(i, "class", "p-2 text-gray-800 dark:text-gray-200"), m(n, "class", "block flex items-center justify-between mb-2 bg-transparent hover:opacity-50"), m(t, "class", f = "p-2 mb-0 border-0 rounded-none " + /*width*/
      e[1] + " transition-colors duration-200"), se(t, "opacity-50", Object.keys(
        /*subqueries*/
        e[2]
      ).length == 0);
    },
    m(g, b) {
      M(g, t, b), _(t, n), _(n, l), _(n, r), _(n, i), G(o, i, null), _(t, a), d && d.m(t, null), s = !0, u || (c = F(
        n,
        "click",
        /*click_handler*/
        e[4]
      ), u = !0);
    },
    p(g, [b]) {
      const h = {};
      b & /*enabled*/
      1 && (h.icon = /*enabled*/
      g[0] ? Gl : Ye), o.$set(h), /*enabled*/
      g[0] ? d ? (d.p(g, b), b & /*enabled*/
      1 && v(d, 1)) : (d = To(g), d.c(), v(d, 1), d.m(t, null)) : d && (ie(), z(d, 1, 1, () => {
        d = null;
      }), oe()), (!s || b & /*width*/
      2 && f !== (f = "p-2 mb-0 border-0 rounded-none " + /*width*/
      g[1] + " transition-colors duration-200")) && m(t, "class", f), (!s || b & /*width, Object, subqueries*/
      6) && se(t, "opacity-50", Object.keys(
        /*subqueries*/
        g[2]
      ).length == 0);
    },
    i(g) {
      s || (v(o.$$.fragment, g), v(d), s = !0);
    },
    o(g) {
      z(o.$$.fragment, g), z(d), s = !1;
    },
    d(g) {
      g && N(t), V(o), d && d.d(), u = !1, c();
    }
  };
}
function p0(e, t, n) {
  let { width: l = "w-full max-w-2xl" } = t, { enabled: r = !1 } = t, { subqueries: i = {} } = t, { idsLength: o = 0 } = t;
  const a = () => n(0, r = !r);
  return e.$$set = (f) => {
    "width" in f && n(1, l = f.width), "enabled" in f && n(0, r = f.enabled), "subqueries" in f && n(2, i = f.subqueries), "idsLength" in f && n(3, o = f.idsLength);
  }, e.$$.update = () => {
    e.$$.dirty & /*subqueries, enabled*/
    5 && (console.log("🔍 SubquerySection - subqueries changed:", i), console.log("🔍 SubquerySection - enabled:", r), console.log("🔍 SubquerySection - subqueries keys:", Object.keys(i)));
  }, [r, l, i, o, a];
}
class w0 extends we {
  constructor(t) {
    super(), pe(this, t, p0, k0, ke, {
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
var Ba = { exports: {} };
(function(e, t) {
  (function() {
    function n(i, o, a) {
      var f = null, s = null, u = null, c = null;
      if (a = a || "", !o.length)
        return a || "";
      if (i.some(function(g) {
        g.name;
        var b = g.match instanceof RegExp, h = b ? g.match : g.match[0], y = b ? null : g.match[1] || null, C = b ? null : g.match[2] || null;
        return f = o.match(h), s = f ? g.name : null, u = y, c = C, !!f;
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
        var u = (typeof i.patterns == "function" ? i.patterns(s) : i.patterns) || {}, c = s.innerText, d = l(c), g = a(n(u, f(d)));
        i.linenums && (g = g.split(`
`).map(function(b, h) {
          if (!h)
            return b;
          var y = h - 1 + "";
          return y.length < 2 && (y = "0" + y), '<span class="linenum">' + y + "</span> " + b;
        }).join(`
`)), s.innerHTML = g;
      });
    }
    e.exports = r;
  })();
})(Ba);
var C0 = Ba.exports;
const xa = /* @__PURE__ */ v0(C0), Fa = [
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
function Ga(e) {
  return e = e.replaceAll(/<([A-z]+?)>/g, "####TOKEN####$1####ENDTOKEN####"), e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function S0(e) {
  let t, n;
  return t = new be({ props: { icon: tr } }), {
    c() {
      X(t.$$.fragment);
    },
    m(l, r) {
      G(t, l, r), n = !0;
    },
    p: $,
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function N0(e) {
  let t, n;
  return t = new be({ props: { icon: Lf } }), {
    c() {
      X(t.$$.fragment);
    },
    m(l, r) {
      G(t, l, r), n = !0;
    },
    p: $,
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function M0(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, g, b;
  const h = [N0, S0], y = [];
  function C(k, p) {
    return (
      /*copied*/
      k[3] ? 0 : 1
    );
  }
  return r = C(e), i = y[r] = h[r](e), f = new be({ props: { icon: pa } }), {
    c() {
      t = w("div"), n = w("div"), l = w("button"), i.c(), o = O(), a = w("button"), X(f.$$.fragment), s = O(), u = w("code"), c = x(
        /*content*/
        e[0]
      ), m(l, "class", "p-2 hover:opacity-50 text-gray-700 dark:text-gray-200 text-sm"), m(l, "title", "Copy"), m(a, "class", "p-2 hover:opacity-50 text-gray-700 dark:text-gray-200 text-sm"), m(a, "title", "Run this query"), m(n, "class", "flex items-center absolute right-0 top-0 mr-2 mt-2"), m(u, "class", "font-mono whitespace-pre-line"), m(
        u,
        "id",
        /*highlightedViewID*/
        e[4]
      ), m(t, "class", "bg-gray-100 dark:bg-gray-800 rounded-md my-2 p-4 pr-12 relative text-gray-900 dark:text-gray-100");
    },
    m(k, p) {
      M(k, t, p), _(t, n), _(n, l), y[r].m(l, null), _(n, o), _(n, a), G(f, a, null), _(t, s), _(t, u), _(u, c), e[8](u), d = !0, g || (b = [
        F(
          l,
          "click",
          /*click_handler*/
          e[6]
        ),
        F(
          a,
          "click",
          /*click_handler_1*/
          e[7]
        )
      ], g = !0);
    },
    p(k, [p]) {
      let q = r;
      r = C(k), r === q ? y[r].p(k, p) : (ie(), z(y[q], 1, 1, () => {
        y[q] = null;
      }), oe(), i = y[r], i ? i.p(k, p) : (i = y[r] = h[r](k), i.c()), v(i, 1), i.m(l, null)), (!d || p & /*content*/
      1) && fe(
        c,
        /*content*/
        k[0]
      );
    },
    i(k) {
      d || (v(i), v(f.$$.fragment, k), d = !0);
    },
    o(k) {
      z(i), z(f.$$.fragment, k), d = !1;
    },
    d(k) {
      k && N(t), y[r].d(), V(f), e[8](null), g = !1, ve(b);
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
      const b = document.createElement("textarea");
      b.value = d, document.body.appendChild(b), b.select(), document.execCommand("copy"), document.body.removeChild(b);
    }
    n(3, a = !0), setTimeout(() => n(3, a = !1), 5e3);
  }
  const s = () => f(l), u = () => r(l);
  function c(d) {
    Ne[d ? "unshift" : "push"](() => {
      o = d, n(2, o), n(0, l), n(4, i);
    });
  }
  return e.$$set = (d) => {
    "content" in d && n(0, l = d.content), "onRun" in d && n(1, r = d.onRun);
  }, e.$$.update = () => {
    e.$$.dirty & /*highlightView, content*/
    5 && o && l && (n(2, o.innerText = Ga(l), o), xa({
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
class R0 extends we {
  constructor(t) {
    super(), pe(this, t, z0, M0, ke, { content: 0, onRun: 1 });
  }
}
function Oo(e, t, n) {
  const l = e.slice();
  return l[7] = t[n], l[9] = n, l;
}
function L0(e) {
  let t, n = Qo(
    /*block*/
    e[7].content
  ) + "";
  return {
    c() {
      t = w("div"), m(t, "class", "leading-relaxed mb-2");
    },
    m(l, r) {
      M(l, t, r), t.innerHTML = n;
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
      l && N(t);
    }
  };
}
function q0(e) {
  let t, n;
  return t = new R0({
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
      X(t.$$.fragment);
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
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function Po(e) {
  let t, n, l, r;
  const i = [q0, L0], o = [];
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
      o[t].m(f, s), M(f, l, s), r = !0;
    },
    p(f, s) {
      let u = t;
      t = a(f), t === u ? o[t].p(f, s) : (ie(), z(o[u], 1, 1, () => {
        o[u] = null;
      }), oe(), n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), v(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      r || (v(n), r = !0);
    },
    o(f) {
      z(n), r = !1;
    },
    d(f) {
      o[t].d(f), f && N(l);
    }
  };
}
function jo(e) {
  let t, n, l = /*collapsed*/ e[1] ? "More" : "Less", r, i, o;
  return {
    c() {
      t = w("div"), n = w("a"), r = x(l), m(n, "class", "text-blue-600 dark:text-blue-400 hover:opacity-50 text-sm"), m(n, "href", "#");
    },
    m(a, f) {
      M(a, t, f), _(t, n), _(n, r), i || (o = F(
        n,
        "click",
        /*click_handler*/
        e[6]
      ), i = !0);
    },
    p(a, f) {
      f & /*collapsed*/
      2 && l !== (l = /*collapsed*/
      a[1] ? "More" : "Less") && fe(r, l);
    },
    d(a) {
      a && N(t), i = !1, o();
    }
  };
}
function E0(e) {
  let t, n, l, r = (
    /*blocks*/
    e[3]
  ), i = [];
  for (let f = 0; f < r.length; f += 1)
    i[f] = Po(Oo(e, r, f));
  const o = (f) => z(i[f], 1, 1, () => {
    i[f] = null;
  });
  let a = (
    /*collapsible*/
    e[2] && jo(e)
  );
  return {
    c() {
      for (let f = 0; f < i.length; f += 1)
        i[f].c();
      t = O(), a && a.c(), n = _e();
    },
    m(f, s) {
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(f, s);
      M(f, t, s), a && a.m(f, s), M(f, n, s), l = !0;
    },
    p(f, [s]) {
      if (s & /*blocks, onRun, formatMarkdown*/
      9) {
        r = /*blocks*/
        f[3];
        let u;
        for (u = 0; u < r.length; u += 1) {
          const c = Oo(f, r, u);
          i[u] ? (i[u].p(c, s), v(i[u], 1)) : (i[u] = Po(c), i[u].c(), v(i[u], 1), i[u].m(t.parentNode, t));
        }
        for (ie(), u = r.length; u < i.length; u += 1)
          o(u);
        oe();
      }
      /*collapsible*/
      f[2] ? a ? a.p(f, s) : (a = jo(f), a.c(), a.m(n.parentNode, n)) : a && (a.d(1), a = null);
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
        z(i[s]);
      l = !1;
    },
    d(f) {
      Pe(i, f), f && N(t), a && a.d(f), f && N(n);
    }
  };
}
function D0(e) {
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
function T0(e, t, n) {
  let l, { text: r } = t, { collapseLength: i = null } = t, { onRun: o = () => {
  } } = t, a = [], f = !1;
  const s = () => n(1, f = !f);
  return e.$$set = (u) => {
    "text" in u && n(4, r = u.text), "collapseLength" in u && n(5, i = u.collapseLength), "onRun" in u && n(0, o = u.onRun);
  }, e.$$.update = () => {
    e.$$.dirty & /*collapseLength, text*/
    48 && n(2, l = !!i && r.length > i), e.$$.dirty & /*text*/
    16 && n(1, f = !1), e.$$.dirty & /*collapsible, collapsed, text, collapseLength*/
    54 && n(3, a = D0(l && f ? r.slice(0, i) + "..." : r));
  }, [o, f, l, a, r, i, s];
}
class Va extends we {
  constructor(t) {
    super(), pe(this, t, T0, E0, ke, { text: 4, collapseLength: 5, onRun: 0 });
  }
}
function Io(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = w("div"), n = w("h3"), n.textContent = "Query Error", l = O(), r = w("div"), i = x(
        /*queryError*/
        e[3]
      ), m(n, "class", "text-lg font-medium text-red-700 dark:text-red-100 mb-2"), m(r, "class", "text-sm font-mono text-gray-800 dark:text-gray-100"), m(t, "class", "bg-red-50 dark:bg-red-800/40 rounded-lg border border-red-200 dark:border-red-400 p-4 mb-4");
    },
    m(o, a) {
      M(o, t, a), _(t, n), _(t, l), _(t, r), _(r, i);
    },
    p(o, a) {
      a & /*queryError*/
      8 && fe(
        i,
        /*queryError*/
        o[3]
      );
    },
    d(o) {
      o && N(t);
    }
  };
}
function Ho(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, g;
  o = new be({
    props: {
      icon: ya,
      class: "inline mr-2"
    }
  });
  function b(k, p) {
    return (
      /*queryError*/
      k[3] ? O0 : A0
    );
  }
  let h = b(e), y = h(e), C = (
    /*llmExplanation*/
    e[8] && Bo(e)
  );
  return {
    c() {
      t = w("div"), n = w("div"), l = w("h3"), l.textContent = "Explanation", r = O(), i = w("button"), X(o.$$.fragment), a = O(), y.c(), s = O(), C && C.c(), m(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100"), m(i, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50"), i.disabled = f = (!/*values*/
      e[4] || Object.keys(
        /*values*/
        e[4]
      ).length == 0) && !/*queryError*/
      e[3], m(n, "class", "flex items-center justify-between mb-2"), m(t, "class", u = "px-2 mb-4 " + /*width*/
      e[6] + " dark:text-gray-100"), se(t, "opacity-50", (!/*values*/
      e[4] || Object.keys(
        /*values*/
        e[4]
      ).length == 0) && !/*queryError*/
      e[3]);
    },
    m(k, p) {
      M(k, t, p), _(t, n), _(n, l), _(n, r), _(n, i), G(o, i, null), _(i, a), y.m(i, null), _(t, s), C && C.m(t, null), c = !0, d || (g = F(
        i,
        "click",
        /*click_handler*/
        e[9]
      ), d = !0);
    },
    p(k, p) {
      h !== (h = b(k)) && (y.d(1), y = h(k), y && (y.c(), y.m(i, null))), (!c || p & /*values, queryError*/
      24 && f !== (f = (!/*values*/
      k[4] || Object.keys(
        /*values*/
        k[4]
      ).length == 0) && !/*queryError*/
      k[3])) && (i.disabled = f), /*llmExplanation*/
      k[8] ? C ? (C.p(k, p), p & /*llmExplanation*/
      256 && v(C, 1)) : (C = Bo(k), C.c(), v(C, 1), C.m(t, null)) : C && (ie(), z(C, 1, 1, () => {
        C = null;
      }), oe()), (!c || p & /*width*/
      64 && u !== (u = "px-2 mb-4 " + /*width*/
      k[6] + " dark:text-gray-100")) && m(t, "class", u), (!c || p & /*width, values, Object, queryError*/
      88) && se(t, "opacity-50", (!/*values*/
      k[4] || Object.keys(
        /*values*/
        k[4]
      ).length == 0) && !/*queryError*/
      k[3]);
    },
    i(k) {
      c || (v(o.$$.fragment, k), v(C), c = !0);
    },
    o(k) {
      z(o.$$.fragment, k), z(C), c = !1;
    },
    d(k) {
      k && N(t), V(o), y.d(), C && C.d(), d = !1, g();
    }
  };
}
function A0(e) {
  let t;
  return {
    c() {
      t = x("Explain");
    },
    m(n, l) {
      M(n, t, l);
    },
    d(n) {
      n && N(t);
    }
  };
}
function O0(e) {
  let t;
  return {
    c() {
      t = x("Explain and Fix");
    },
    m(n, l) {
      M(n, t, l);
    },
    d(n) {
      n && N(t);
    }
  };
}
function Bo(e) {
  let t, n;
  return t = new Va({
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
      X(t.$$.fragment);
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
      z(t.$$.fragment, l), n = !1;
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
      t = w("div"), t.textContent = "No query results", m(t, "class", "text-center py-8 text-gray-900 dark:text-gray-100");
    },
    m(n, l) {
      M(n, t, l);
    },
    p: $,
    i: $,
    o: $,
    d(n) {
      n && N(t);
    }
  };
}
function j0(e) {
  let t, n;
  return t = new Ha({ props: { values: (
    /*values*/
    e[4]
  ) } }), {
    c() {
      X(t.$$.fragment);
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
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function Q0(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, g, b = !!/*queryError*/
  e[3] && Io(e), h = (
    /*llmAvailable*/
    e[7] && Ho(e)
  );
  const y = [j0, P0], C = [];
  function k(p, q) {
    return q & /*values*/
    16 && (a = null), a == null && (a = !!(/*values*/
    p[4] && Object.keys(
      /*values*/
      p[4]
    ).length > 0)), a ? 0 : 1;
  }
  return f = k(e, -1), s = C[f] = y[f](e), d = new w0({
    props: {
      width: "w-full",
      subqueries: (
        /*subqueries*/
        e[5]
      )
    }
  }), {
    c() {
      t = w("div"), b && b.c(), n = O(), h && h.c(), l = O(), r = w("div"), i = w("div"), i.innerHTML = '<h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Query Result</h3>', o = O(), s.c(), c = O(), X(d.$$.fragment), m(i, "class", "flex items-center justify-between mb-2"), m(r, "class", u = "px-2 mb-4 " + /*width*/
      e[6] + " dark:text-gray-100"), se(r, "opacity-50", !/*values*/
      e[4] || Object.keys(
        /*values*/
        e[4]
      ).length == 0), m(t, "class", "flex-auto p-4 h-full overflow-auto");
    },
    m(p, q) {
      M(p, t, q), b && b.m(t, null), _(t, n), h && h.m(t, null), _(t, l), _(t, r), _(r, i), _(r, o), C[f].m(r, null), _(t, c), G(d, t, null), g = !0;
    },
    p(p, [q]) {
      /*queryError*/
      p[3] ? b ? b.p(p, q) : (b = Io(p), b.c(), b.m(t, n)) : b && (b.d(1), b = null), /*llmAvailable*/
      p[7] ? h ? (h.p(p, q), q & /*llmAvailable*/
      128 && v(h, 1)) : (h = Ho(p), h.c(), v(h, 1), h.m(t, l)) : h && (ie(), z(h, 1, 1, () => {
        h = null;
      }), oe());
      let E = f;
      f = k(p, q), f === E ? C[f].p(p, q) : (ie(), z(C[E], 1, 1, () => {
        C[E] = null;
      }), oe(), s = C[f], s ? s.p(p, q) : (s = C[f] = y[f](p), s.c()), v(s, 1), s.m(r, null)), (!g || q & /*width*/
      64 && u !== (u = "px-2 mb-4 " + /*width*/
      p[6] + " dark:text-gray-100")) && m(r, "class", u), (!g || q & /*width, values, Object*/
      80) && se(r, "opacity-50", !/*values*/
      p[4] || Object.keys(
        /*values*/
        p[4]
      ).length == 0);
      const D = {};
      q & /*subqueries*/
      32 && (D.subqueries = /*subqueries*/
      p[5]), d.$set(D);
    },
    i(p) {
      g || (v(h), v(s), v(d.$$.fragment, p), g = !0);
    },
    o(p) {
      z(h), z(s), z(d.$$.fragment, p), g = !1;
    },
    d(p) {
      p && N(t), b && b.d(), h && h.d(), C[f].d(), V(d);
    }
  };
}
function I0(e, t, n) {
  let { textInput: l = "" } = t, { onRun: r = () => {
  } } = t, { onExplain: i = () => {
  } } = t, { queryError: o = "" } = t, { values: a = {} } = t, { subqueries: f = {} } = t, { width: s = "w-full" } = t, { llmAvailable: u = !1 } = t, { llmExplanation: c = "" } = t;
  const d = () => {
    i();
  }, g = (b) => {
    n(0, l = b), r();
  };
  return e.$$set = (b) => {
    "textInput" in b && n(0, l = b.textInput), "onRun" in b && n(1, r = b.onRun), "onExplain" in b && n(2, i = b.onExplain), "queryError" in b && n(3, o = b.queryError), "values" in b && n(4, a = b.values), "subqueries" in b && n(5, f = b.subqueries), "width" in b && n(6, s = b.width), "llmAvailable" in b && n(7, u = b.llmAvailable), "llmExplanation" in b && n(8, c = b.llmExplanation);
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
    g
  ];
}
class H0 extends we {
  constructor(t) {
    super(), pe(this, t, I0, Q0, ke, {
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
function xo(e) {
  let t, n, l, r, i, o = (
    /*message*/
    (e[1] || "Loading...") + ""
  ), a, f, s;
  return {
    c() {
      t = w("div"), n = w("div"), l = w("div"), r = w("div"), i = w("p"), a = x(o), f = O(), s = w("div"), s.innerHTML = '<div class="bg-blue-600 h-2 rounded-full animate-pulse" style="width: 100%"></div>', m(i, "class", "text-sm font-medium text-gray-900 dark:text-gray-100"), m(r, "class", "flex-1"), m(s, "class", "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"), m(l, "class", "space-y-3"), m(n, "class", "bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 w-1/2 p-6"), m(t, "class", "absolute top-0 left-0 right-0 top-0 bottom-0 bg-white/80 dark:bg-gray-900/80 flex items-center justify-center z-80");
    },
    m(u, c) {
      M(u, t, c), _(t, n), _(n, l), _(l, r), _(r, i), _(i, a), _(l, f), _(l, s);
    },
    p(u, c) {
      c & /*message*/
      2 && o !== (o = /*message*/
      (u[1] || "Loading...") + "") && fe(a, o);
    },
    d(u) {
      u && N(t);
    }
  };
}
function B0(e) {
  let t, n = (
    /*isLoading*/
    e[0] && xo(e)
  );
  return {
    c() {
      n && n.c(), t = _e();
    },
    m(l, r) {
      n && n.m(l, r), M(l, t, r);
    },
    p(l, [r]) {
      /*isLoading*/
      l[0] ? n ? n.p(l, r) : (n = xo(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: $,
    o: $,
    d(l) {
      n && n.d(l), l && N(t);
    }
  };
}
function x0(e, t, n) {
  let { isLoading: l = !1 } = t, { message: r = "" } = t, { width: i = "w-full" } = t;
  return e.$$set = (o) => {
    "isLoading" in o && n(0, l = o.isLoading), "message" in o && n(1, r = o.message), "width" in o && n(2, i = o.width);
  }, [l, r, i];
}
class F0 extends we {
  constructor(t) {
    super(), pe(this, t, x0, B0, ke, { isLoading: 0, message: 1, width: 2 });
  }
}
function Fo(e, t, n) {
  const l = e.slice();
  return l[7] = t[n], l[9] = n, l;
}
function Go(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, g, b;
  s = new be({ props: { icon: Mf } });
  function h(k, p) {
    return (
      /*history*/
      k[1].length === 0 ? V0 : G0
    );
  }
  let y = h(e), C = y(e);
  return {
    c() {
      t = w("div"), n = O(), l = w("div"), r = w("div"), i = w("div"), o = w("h3"), o.textContent = "Query History", a = O(), f = w("button"), X(s.$$.fragment), u = O(), c = w("div"), C.c(), m(t, "class", "absolute top-0 left-0 w-full h-full bg-white/80 z-40"), m(o, "class", "font-medium text-gray-900"), m(f, "class", "text-gray-600 dark:text-gray-300 hover:opacity-50 transition-colors p-2"), m(f, "title", "Close history"), m(i, "class", "flex items-center justify-between px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white"), m(c, "class", "max-h-80 overflow-y-auto svelte-6p3axr"), m(r, "class", "bg-white dark:bg-gray-800 border-2 border-gray-300/50 dark:border-gray-600/2 rounded-lg w-2/3 h-2/3 overflow-auto pointer-events-auto"), m(l, "class", "absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 pointer-events-none");
    },
    m(k, p) {
      M(k, t, p), M(k, n, p), M(k, l, p), _(l, r), _(r, i), _(i, o), _(i, a), _(i, f), G(s, f, null), _(r, u), _(r, c), C.m(c, null), d = !0, g || (b = [
        F(t, "click", Re(
          /*handleClickOutside*/
          e[4]
        )),
        F(f, "click", function() {
          Xe(
            /*onClose*/
            e[2]
          ) && e[2].apply(this, arguments);
        })
      ], g = !0);
    },
    p(k, p) {
      e = k, y === (y = h(e)) && C ? C.p(e, p) : (C.d(1), C = y(e), C && (C.c(), C.m(c, null)));
    },
    i(k) {
      d || (v(s.$$.fragment, k), d = !0);
    },
    o(k) {
      z(s.$$.fragment, k), d = !1;
    },
    d(k) {
      k && N(t), k && N(n), k && N(l), V(s), C.d(), g = !1, ve(b);
    }
  };
}
function G0(e) {
  let t, n = (
    /*history*/
    e[1]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Wo(Fo(e, n, r));
  return {
    c() {
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      t = _e();
    },
    m(r, i) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(r, i);
      M(r, t, i);
    },
    p(r, i) {
      if (i & /*onSelect, history, formatTimestamp*/
      10) {
        n = /*history*/
        r[1];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = Fo(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = Wo(a), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(r) {
      Pe(l, r), r && N(t);
    }
  };
}
function V0(e) {
  let t;
  return {
    c() {
      t = w("div"), t.textContent = "No query history yet", m(t, "class", "p-4 text-center text-gray-500 dark:text-gray-400 text-sm");
    },
    m(n, l) {
      M(n, t, l);
    },
    p: $,
    d(n) {
      n && N(t);
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
      t = w("span"), l = x(n), m(t, "class", "font-mono");
    },
    m(r, i) {
      M(r, t, i), _(t, l);
    },
    p(r, i) {
      i & /*history*/
      2 && n !== (n = /*historyItem*/
      (r[7].query || "No query extracted") + "") && fe(l, n);
    },
    d(r) {
      r && N(t);
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
      n = x(t);
    },
    m(l, r) {
      M(l, n, r);
    },
    p(l, r) {
      r & /*history*/
      2 && t !== (t = /*historyItem*/
      l[7].question + "") && fe(n, t);
    },
    d(l) {
      l && N(n);
    }
  };
}
function Vo(e) {
  let t, n = (
    /*historyItem*/
    e[7].answer + ""
  ), l;
  return {
    c() {
      t = w("p"), l = x(n), m(t, "class", "text-xs text-gray-600 dark:text-gray-300 line-clamp-2 mt-2 svelte-6p3axr");
    },
    m(r, i) {
      M(r, t, i), _(t, l);
    },
    p(r, i) {
      i & /*history*/
      2 && n !== (n = /*historyItem*/
      r[7].answer + "") && fe(l, n);
    },
    d(r) {
      r && N(t);
    }
  };
}
function Wo(e) {
  let t, n, l, r, i, o = Ko(
    /*historyItem*/
    e[7].timestamp
  ) + "", a, f, s, u, c;
  function d(C, k) {
    return (
      /*historyItem*/
      C[7].question ? K0 : W0
    );
  }
  let g = d(e), b = g(e), h = (
    /*historyItem*/
    e[7].answer && Vo(e)
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
      t = w("div"), n = w("div"), l = w("h4"), b.c(), r = O(), i = w("span"), a = x(o), f = O(), h && h.c(), s = O(), m(l, "class", "text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-2 flex-1 svelte-6p3axr"), m(i, "class", "text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0"), m(n, "class", "flex items-start justify-between"), m(t, "class", "p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors");
    },
    m(C, k) {
      M(C, t, k), _(t, n), _(n, l), b.m(l, null), _(n, r), _(n, i), _(i, a), _(t, f), h && h.m(t, null), _(t, s), u || (c = F(t, "click", y), u = !0);
    },
    p(C, k) {
      e = C, g === (g = d(e)) && b ? b.p(e, k) : (b.d(1), b = g(e), b && (b.c(), b.m(l, null))), k & /*history*/
      2 && o !== (o = Ko(
        /*historyItem*/
        e[7].timestamp
      ) + "") && fe(a, o), /*historyItem*/
      e[7].answer ? h ? h.p(e, k) : (h = Vo(e), h.c(), h.m(t, s)) : h && (h.d(1), h = null);
    },
    d(C) {
      C && N(t), b.d(), h && h.d(), u = !1, c();
    }
  };
}
function X0(e) {
  let t, n, l = (
    /*isVisible*/
    e[0] && Go(e)
  );
  return {
    c() {
      l && l.c(), t = _e();
    },
    m(r, i) {
      l && l.m(r, i), M(r, t, i), n = !0;
    },
    p(r, [i]) {
      /*isVisible*/
      r[0] ? l ? (l.p(r, i), i & /*isVisible*/
      1 && v(l, 1)) : (l = Go(r), l.c(), v(l, 1), l.m(t.parentNode, t)) : l && (ie(), z(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (v(l), n = !0);
    },
    o(r) {
      z(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && N(t);
    }
  };
}
function Ko(e) {
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
class Xo extends we {
  constructor(t) {
    super(), pe(this, t, Y0, X0, ke, {
      isVisible: 0,
      history: 1,
      onClose: 2,
      onSelect: 3,
      position: 5
    });
  }
}
function Or(e, t = []) {
  if (t.length > 0)
    return {
      ...e,
      [t[0]]: Or(e[t[0]], t.slice(1))
    };
  let n = 1, l = `Group ${n}`;
  for (; e[l] !== void 0; )
    n += 1, l = `Group ${n}`;
  return { ...e, [l]: {} };
}
function Wr(e, t = []) {
  if (t.length > 0) {
    let r = Wr(e[t[0]], t.slice(1));
    return {
      contents: { ...e, [t[0]]: r.contents },
      queryPath: [t[0], ...r.queryPath]
    };
  }
  let n = 1, l = `Query ${n}`;
  for (; e[l] !== void 0; )
    n += 1, l = `Query ${n}`;
  return { contents: { ...e, [l]: "" }, queryPath: [l] };
}
function ar(e, t) {
  if (t.length > 1) {
    let n = ar(e[t[0]], t.slice(1));
    return { ...e, [t[0]]: n };
  }
  return Object.fromEntries(
    Object.entries(e).filter((n) => n[0] != t[0])
  );
}
function Wa(e, t, n) {
  if (t.length > 1) {
    let l = Wa(e[t[0]], t.slice(1), n);
    return { ...e, [t[0]]: l };
  }
  return {
    ...Object.fromEntries(
      Object.entries(e).filter((l) => l[0] != t[0])
    ),
    [t[0]]: n
  };
}
function Ka(e, t, n) {
  if (t.length > 1) {
    let l = Ka(
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
function Kr(e, t) {
  return t.length > 1 ? typeof e[t[0]] == "object" && Kr(e[t[0]], t.slice(1)) : e[t[0]] !== void 0;
}
function Xr(e, t = []) {
  if (t.length > 1) {
    let r = Xr(e[t[0]], t.slice(1));
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
function Yr(e, t) {
  return t.length > 1 ? Yr(e[t[0]], t.slice(1)) : e[t[0]];
}
function Xa(e, t, n) {
  let l = Yr(e, t), r = ar(e, t);
  return Wa(r, n, l);
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
      t = w("div"), l && l.c(), m(t, "class", r = "h-full " + /*scrollable*/
      (e[7] ? "overflow-auto" : ""));
    },
    m(s, u) {
      M(s, t, u), ~n && a[n].m(t, null), i = !0;
    },
    p(s, u) {
      let c = n;
      n = f(s), n === c ? ~n && a[n].p(s, u) : (l && (ie(), z(a[c], 1, 1, () => {
        a[c] = null;
      }), oe()), ~n ? (l = a[n], l ? l.p(s, u) : (l = a[n] = o[n](s), l.c()), v(l, 1), l.m(t, null)) : l = null), (!i || u & /*scrollable*/
      128 && r !== (r = "h-full " + /*scrollable*/
      (s[7] ? "overflow-auto" : ""))) && m(t, "class", r);
    },
    i(s) {
      i || (v(l), i = !0);
    },
    o(s) {
      z(l), i = !1;
    },
    d(s) {
      s && N(t), ~n && a[n].d();
    }
  };
}
function J0(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, g, b, h;
  return o = new be({
    props: { icon: ka, class: "inline mr-2" }
  }), u = new be({
    props: {
      icon: ya,
      class: "inline mr-2"
    }
  }), {
    c() {
      t = w("div"), n = w("textarea"), l = O(), r = w("div"), i = w("button"), X(o.$$.fragment), a = x(`
          History`), f = O(), s = w("button"), X(u.$$.fragment), c = x(`
          Ask AI`), m(n, "class", "w-full h-full p-4 pb-16 bg-transparent text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none overflow-hidden min-h-[120px] relative z-20"), m(n, "placeholder", "Ask me to generate, update, or explain a TempoQL query..."), n.disabled = /*isLoading*/
      e[2], m(n, "rows", "5"), m(i, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), m(i, "title", "View query history"), m(s, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50"), s.disabled = d = !/*question*/
      e[0].trim() || /*isLoading*/
      e[2], m(r, "class", "absolute right-0 bottom-0 mr-4 mb-4 flex justify-end items-center gap-2 z-50"), m(t, "class", "relative w-full min-h-0 flex-auto");
    },
    m(y, C) {
      M(y, t, C), _(t, n), e[20](n), je(
        n,
        /*question*/
        e[0]
      ), _(t, l), _(t, r), _(r, i), G(o, i, null), _(i, a), _(r, f), _(r, s), G(u, s, null), _(s, c), g = !0, b || (h = [
        F(
          n,
          "input",
          /*textarea_input_handler*/
          e[21]
        ),
        F(
          n,
          "keydown",
          /*handleKeydown*/
          e[13]
        ),
        F(i, "click", function() {
          Xe(
            /*onHistoryClick*/
            e[8]
          ) && e[8].apply(this, arguments);
        }),
        F(
          s,
          "click",
          /*click_handler_2*/
          e[22]
        )
      ], b = !0);
    },
    p(y, C) {
      e = y, (!g || C & /*isLoading*/
      4) && (n.disabled = /*isLoading*/
      e[2]), C & /*question*/
      1 && je(
        n,
        /*question*/
        e[0]
      ), (!g || C & /*question, isLoading*/
      5 && d !== (d = !/*question*/
      e[0].trim() || /*isLoading*/
      e[2])) && (s.disabled = d);
    },
    i(y) {
      g || (v(o.$$.fragment, y), v(u.$$.fragment, y), g = !0);
    },
    o(y) {
      z(o.$$.fragment, y), z(u.$$.fragment, y), g = !1;
    },
    d(y) {
      y && N(t), e[20](null), V(o), V(u), b = !1, ve(h);
    }
  };
}
function Z0(e) {
  let t, n, l, r;
  return l = new Va({
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
      t = w("div"), n = w("div"), X(l.$$.fragment), m(n, "class", "text-gray-700 dark:text-gray-200 text-sm leading-relaxed prose prose-sm max-w-none"), m(t, "class", "flex-1 overflow-y-auto ai-scrollbar");
    },
    m(i, o) {
      M(i, t, o), _(t, n), G(l, n, null), r = !0;
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
      z(l.$$.fragment, i), r = !1;
    },
    d(i) {
      i && N(t), V(l);
    }
  };
}
function $0(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = w("div"), n = w("h3"), n.textContent = "Error", l = O(), r = w("div"), i = x(
        /*error*/
        e[3]
      ), m(n, "class", "text-lg font-medium text-red-700 dark:text-red-100 mb-2"), m(r, "class", "text-sm font-mono text-gray-800 dark:text-gray-100"), m(t, "class", "bg-red-50 dark:bg-red-800/40 rounded-lg border border-red-200 dark:border-red-400 p-4 mb-4");
    },
    m(o, a) {
      M(o, t, a), _(t, n), _(t, l), _(t, r), _(r, i);
    },
    p(o, a) {
      a & /*error*/
      8 && fe(
        i,
        /*error*/
        o[3]
      );
    },
    i: $,
    o: $,
    d(o) {
      o && N(t);
    }
  };
}
function e1(e) {
  let t;
  return {
    c() {
      t = w("h4"), t.innerHTML = `<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 dark:border-blue-400"></span>
           AI is thinking...`, m(t, "class", "text-blue-600 dark:text-blue-400 font-medium text-sm");
    },
    m(n, l) {
      M(n, t, l);
    },
    p: $,
    i: $,
    o: $,
    d(n) {
      n && N(t);
    }
  };
}
function t1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, g, b, h, y, C, k, p, q, E, D, P, B, L, A;
  C = new be({
    props: {
      icon: (
        /*apiStatusInfo*/
        e[11].icon
      ),
      class: "inline mr-2"
    }
  });
  const R = [J0, U0], T = [];
  function W(U, Q) {
    return (
      /*tab*/
      U[9] == "query" ? 0 : 1
    );
  }
  return E = W(e), D = T[E] = R[E](e), {
    c() {
      t = w("div"), n = w("div"), l = w("h3"), l.textContent = "AI Assistant", r = O(), i = w("button"), o = x("Query"), f = O(), s = w("button"), u = x("Response"), g = O(), b = w("div"), h = O(), y = w("div"), X(C.$$.fragment), k = O(), p = x(
        /*apiStatus*/
        e[5]
      ), q = O(), D.c(), m(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100 pr-2"), m(i, "class", a = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*tab*/
      (e[9] === "query" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800")), m(i, "type", "button"), m(s, "class", c = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 disabled:opacity-50 " + /*tab*/
      (e[9] === "response" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800")), s.disabled = d = !/*llmResponse*/
      e[4] && !/*error*/
      e[3], m(s, "type", "button"), m(b, "class", "flex-auto"), m(y, "class", "flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"), m(n, "class", "flex items-center mb-4 gap-2 shrink-0"), m(t, "class", P = "px-4 pb-2 " + /*width*/
      e[6] + " h-full flex flex-col");
    },
    m(U, Q) {
      M(U, t, Q), _(t, n), _(n, l), _(n, r), _(n, i), _(i, o), _(n, f), _(n, s), _(s, u), _(n, g), _(n, b), _(n, h), _(n, y), G(C, y, null), _(y, k), _(y, p), _(t, q), T[E].m(t, null), B = !0, L || (A = [
        F(
          i,
          "click",
          /*click_handler*/
          e[18]
        ),
        F(
          s,
          "click",
          /*click_handler_1*/
          e[19]
        )
      ], L = !0);
    },
    p(U, [Q]) {
      (!B || Q & /*tab*/
      512 && a !== (a = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*tab*/
      (U[9] === "query" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"))) && m(i, "class", a), (!B || Q & /*tab*/
      512 && c !== (c = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 disabled:opacity-50 " + /*tab*/
      (U[9] === "response" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"))) && m(s, "class", c), (!B || Q & /*llmResponse, error*/
      24 && d !== (d = !/*llmResponse*/
      U[4] && !/*error*/
      U[3])) && (s.disabled = d);
      const H = {};
      Q & /*apiStatusInfo*/
      2048 && (H.icon = /*apiStatusInfo*/
      U[11].icon), C.$set(H), (!B || Q & /*apiStatus*/
      32) && fe(
        p,
        /*apiStatus*/
        U[5]
      );
      let J = E;
      E = W(U), E === J ? T[E].p(U, Q) : (ie(), z(T[J], 1, 1, () => {
        T[J] = null;
      }), oe(), D = T[E], D ? D.p(U, Q) : (D = T[E] = R[E](U), D.c()), v(D, 1), D.m(t, null)), (!B || Q & /*width*/
      64 && P !== (P = "px-4 pb-2 " + /*width*/
      U[6] + " h-full flex flex-col")) && m(t, "class", P);
    },
    i(U) {
      B || (v(C.$$.fragment, U), v(D), B = !0);
    },
    o(U) {
      z(C.$$.fragment, U), z(D), B = !1;
    },
    d(U) {
      U && N(t), V(C), T[E].d(), L = !1, ve(A);
    }
  };
}
function n1(e, t, n) {
  let l, { onSubmit: r = () => {
  } } = t, { onRun: i = () => {
  } } = t, { isLoading: o = !1 } = t, { error: a = "" } = t, { llmResponse: f = "" } = t, { apiStatus: s = "Checking API connection..." } = t, { width: u = "w-full" } = t, { scrollable: c = !0 } = t, { extractedQuery: d = "" } = t, { hasExtractedQuery: g = !1 } = t, { onQueryExtracted: b = () => {
  } } = t, { onHistoryClick: h = () => {
  } } = t, y = "query", { question: C = "" } = t, k;
  function p() {
    C.trim() && (r(C.trim()), k && k.focus());
  }
  function q(R) {
    R.key === "Enter" && !R.shiftKey && (R.preventDefault(), p());
  }
  function E(R) {
    return R.includes("Configured") || R.includes("ready") ? {
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      icon: wf
    } : R.includes("Not configured") || R.includes("Invalid") ? {
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      icon: Af
    } : {
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      icon: Ef
    };
  }
  const D = () => n(9, y = "query"), P = () => n(9, y = "response");
  function B(R) {
    Ne[R ? "unshift" : "push"](() => {
      k = R, n(10, k);
    });
  }
  function L() {
    C = this.value, n(0, C);
  }
  const A = () => {
    p(), n(9, y = "response");
  };
  return e.$$set = (R) => {
    "onSubmit" in R && n(14, r = R.onSubmit), "onRun" in R && n(1, i = R.onRun), "isLoading" in R && n(2, o = R.isLoading), "error" in R && n(3, a = R.error), "llmResponse" in R && n(4, f = R.llmResponse), "apiStatus" in R && n(5, s = R.apiStatus), "width" in R && n(6, u = R.width), "scrollable" in R && n(7, c = R.scrollable), "extractedQuery" in R && n(15, d = R.extractedQuery), "hasExtractedQuery" in R && n(16, g = R.hasExtractedQuery), "onQueryExtracted" in R && n(17, b = R.onQueryExtracted), "onHistoryClick" in R && n(8, h = R.onHistoryClick), "question" in R && n(0, C = R.question);
  }, e.$$.update = () => {
    e.$$.dirty & /*hasExtractedQuery, extractedQuery, onQueryExtracted*/
    229376 && g && d && (console.log("🤖 AIAssistant: Query extracted, triggering handler:", d), b()), e.$$.dirty & /*apiStatus*/
    32 && n(11, l = E(s));
  }, [
    C,
    i,
    o,
    a,
    f,
    s,
    u,
    c,
    h,
    y,
    k,
    l,
    p,
    q,
    r,
    d,
    g,
    b,
    D,
    P,
    B,
    L,
    A
  ];
}
class l1 extends we {
  constructor(t) {
    super(), pe(this, t, n1, t1, ke, {
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
const Yo = [
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
    const i = r.toLowerCase(), o = Yo.filter((s) => s.toLowerCase().startsWith(i)).sort((s, u) => s.length - u.length), a = Yo.filter((s) => {
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
function Uo(e, t, n) {
  const l = e.slice();
  return l[34] = t[n], l[36] = n, l;
}
function Jo(e) {
  let t, n = (
    /*autocompleteOptions*/
    e[7]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Zo(Uo(e, n, r));
  return {
    c() {
      t = w("div");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      m(t, "class", "absolute z-30 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-xl max-h-48 overflow-y-auto");
    },
    m(r, i) {
      M(r, t, i);
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
          const a = Uo(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = Zo(a), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(r) {
      r && N(t), Pe(l, r), e[24](null);
    }
  };
}
function Zo(e) {
  let t, n, l, r = (
    /*option*/
    e[34].value + ""
  ), i, o, a, f = (
    /*option*/
    e[34].type === "data_item" ? "field" : "const"
  ), s, u, c, d, g;
  function b() {
    return (
      /*click_handler*/
      e[21](
        /*option*/
        e[34]
      )
    );
  }
  function h(...C) {
    return (
      /*keydown_handler*/
      e[22](
        /*option*/
        e[34],
        ...C
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
      t = w("div"), n = w("div"), l = w("span"), i = x(r), o = O(), a = w("span"), s = x(f), u = O(), m(l, "class", "font-mono text-sm"), m(a, "class", "text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"), m(n, "class", "flex items-center justify-between"), m(t, "class", c = "px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors " + /*index*/
      (e[36] === /*selectedIndex*/
      e[8] ? "bg-blue-600 text-white" : "text-gray-700 dark:text-gray-200")), m(t, "role", "button"), m(t, "tabindex", "0");
    },
    m(C, k) {
      M(C, t, k), _(t, n), _(n, l), _(l, i), _(n, o), _(n, a), _(a, s), _(t, u), d || (g = [
        F(t, "click", b),
        F(t, "keydown", h),
        F(t, "mouseenter", y)
      ], d = !0);
    },
    p(C, k) {
      e = C, k[0] & /*autocompleteOptions*/
      128 && r !== (r = /*option*/
      e[34].value + "") && fe(i, r), k[0] & /*autocompleteOptions*/
      128 && f !== (f = /*option*/
      e[34].type === "data_item" ? "field" : "const") && fe(s, f), k[0] & /*selectedIndex*/
      256 && c !== (c = "px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors " + /*index*/
      (e[36] === /*selectedIndex*/
      e[8] ? "bg-blue-600 text-white" : "text-gray-700 dark:text-gray-200")) && m(t, "class", c);
    },
    d(C) {
      C && N(t), d = !1, ve(g);
    }
  };
}
function i1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, g, b, h, y = (
    /*savesOnRun*/
    e[3] ? "Save and Run" : "Run Query"
  ), C, k, p, q, E, D = (
    /*showAutocomplete*/
    e[9] && /*autocompleteOptions*/
    e[7].length > 0 && Jo(e)
  );
  return u = new be({
    props: { icon: ka, class: "inline mr-2" }
  }), b = new be({
    props: { icon: pa, class: "inline mr-2" }
  }), {
    c() {
      t = w("div"), n = w("div"), l = w("textarea"), r = O(), i = w("div"), o = O(), D && D.c(), a = O(), f = w("div"), s = w("button"), X(u.$$.fragment), c = x(`
        History`), d = O(), g = w("button"), X(b.$$.fragment), h = O(), C = x(y), m(l, "id", "text-input"), m(l, "class", "w-full h-full p-4 pb-16 bg-transparent font-mono text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none overflow-hidden min-h-[40px] relative z-20 svelte-1w5ogy4"), m(l, "placeholder", "// Write your Tempo-QL query here... (Ctrl+Z to undo, Ctrl+Y to redo)"), m(l, "autocomplete", "false"), m(l, "autocapitalize", "false"), m(l, "autocorrect", "false"), m(l, "spellcheck", "false"), m(l, "rows", "1"), re(l, "color", "transparent"), re(l, "caret-color", "currentColor"), m(i, "class", "absolute top-0 left-0 w-full h-full p-4 pb-16 font-mono text-sm pointer-events-none bg-transparent z-10 text-wrap whitespace-pre-wrap break-words text-gray-900 dark:text-gray-100 svelte-1w5ogy4"), m(
        i,
        "id",
        /*highlightedViewID*/
        e[10]
      ), m(s, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), m(s, "title", "View query history"), m(g, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white"), g.disabled = k = !/*value*/
      e[0].trim(), m(g, "title", "Run the query on the dataset (Ctrl+Shift+Enter)"), se(g, "opacity-50", !/*value*/
      e[0].trim()), se(g, "cursor-not-allowed", !/*value*/
      e[0].trim()), m(f, "class", "absolute right-0 bottom-0 mr-4 mb-4 flex justify-end items-center gap-2 z-50"), m(n, "class", "relative flex-auto min-h-0"), m(t, "class", "flex flex-col w-full h-full px-4 mb-2");
    },
    m(P, B) {
      M(P, t, B), _(t, n), _(n, l), e[18](l), je(
        l,
        /*value*/
        e[0]
      ), _(n, r), _(n, i), e[20](i), _(n, o), D && D.m(n, null), _(n, a), _(n, f), _(f, s), G(u, s, null), _(s, c), _(f, d), _(f, g), G(b, g, null), _(g, h), _(g, C), p = !0, q || (E = [
        F(
          l,
          "input",
          /*textarea_1_input_handler*/
          e[19]
        ),
        F(
          l,
          "input",
          /*handleInput*/
          e[11]
        ),
        F(
          l,
          "keydown",
          /*handleKeydown*/
          e[12]
        ),
        F(s, "click", function() {
          Xe(
            /*onHistoryClick*/
            e[2]
          ) && e[2].apply(this, arguments);
        }),
        F(g, "click", function() {
          Xe(
            /*onRun*/
            e[1]
          ) && e[1].apply(this, arguments);
        })
      ], q = !0);
    },
    p(P, B) {
      e = P, B[0] & /*value*/
      1 && je(
        l,
        /*value*/
        e[0]
      ), /*showAutocomplete*/
      e[9] && /*autocompleteOptions*/
      e[7].length > 0 ? D ? D.p(e, B) : (D = Jo(e), D.c(), D.m(n, a)) : D && (D.d(1), D = null), (!p || B[0] & /*savesOnRun*/
      8) && y !== (y = /*savesOnRun*/
      e[3] ? "Save and Run" : "Run Query") && fe(C, y), (!p || B[0] & /*value*/
      1 && k !== (k = !/*value*/
      e[0].trim())) && (g.disabled = k), (!p || B[0] & /*value*/
      1) && se(g, "opacity-50", !/*value*/
      e[0].trim()), (!p || B[0] & /*value*/
      1) && se(g, "cursor-not-allowed", !/*value*/
      e[0].trim());
    },
    i(P) {
      p || (v(u.$$.fragment, P), v(b.$$.fragment, P), p = !0);
    },
    o(P) {
      z(u.$$.fragment, P), z(b.$$.fragment, P), p = !1;
    },
    d(P) {
      P && N(t), e[18](null), e[20](null), D && D.d(), V(u), V(b), q = !1, ve(E);
    }
  };
}
function o1(e, t, n) {
  let { value: l = "" } = t, { onInput: r = () => {
  } } = t, { width: i = "w-full max-w-2xl" } = t, { dataFields: o = [] } = t, { onRun: a = () => {
  } } = t, { onExplain: f = () => {
  } } = t, { onHistoryClick: s = () => {
  } } = t, { savesOnRun: u = !1 } = t, c, d, g, b = [], h = 0, y = !1, C = 0, k = "highlightView-" + new Array(20).fill(0).map(() => Math.floor(Math.random() * 10)).join(""), p = [], q = -1, E = !1;
  mt(() => {
    P(""), document.addEventListener("click", D);
  }), _a(() => {
    document.removeEventListener("click", D);
  });
  function D(j) {
    if (d && c) {
      const te = j.target, ue = d.contains(te), K = c.contains(te);
      (!ue || K && y) && (console.log("🖱️ Click detected - closing autocomplete"), n(9, y = !1));
    }
  }
  function P(j) {
    if (E) {
      E = !1;
      return;
    }
    p = p.slice(0, q + 1), p.push(j), q = p.length - 1, p.length > 50 && (p = p.slice(-50), q = p.length - 1), console.log("📝 Added to history:", j, "Index:", q);
  }
  function B() {
    if (q > 0) {
      E = !0, q--;
      const j = p[q];
      console.log("↶ Undo to:", j), n(0, l = j), r(j), c && (n(4, c.value = j, c), c.focus());
    }
  }
  function L() {
    if (q < p.length - 1) {
      E = !0, q++;
      const j = p[q];
      console.log("↷ Redo to:", j), n(0, l = j), r(j), c && (n(4, c.value = j, c), c.focus());
    }
  }
  function A(j) {
    const te = j.target, ue = te.value;
    P(ue), n(0, l = ue), r(ue), C = te.selectionStart || 0, R(ue, C);
  }
  function R(j, te) {
    const ue = j.substring(0, te);
    j.substring(te);
    const K = ue.match(/([^\s]*)$/), ae = K ? K[1] : "";
    ae.length > 0 ? (n(7, b = r1(o, ae, ue)), n(9, y = b.length > 0), n(8, h = 0)) : n(9, y = !1);
  }
  function T(j) {
    if (j.ctrlKey || j.metaKey) {
      if (j.key === "z" && !j.shiftKey) {
        j.preventDefault(), B();
        return;
      } else if (j.key === "y" || j.key === "z" && j.shiftKey) {
        j.preventDefault(), L();
        return;
      } else if (j.key === "Enter" && j.shiftKey) {
        j.preventDefault(), a();
        return;
      }
    }
    if (y)
      switch (j.key) {
        case "ArrowDown":
          j.preventDefault(), n(8, h = (h + 1) % b.length);
          break;
        case "ArrowUp":
          j.preventDefault(), n(8, h = h === 0 ? b.length - 1 : h - 1);
          break;
        case "Enter":
          y && (j.preventDefault(), W(b[h]));
          break;
        case "Escape":
          n(9, y = !1);
          break;
        case "Tab":
          y && (j.preventDefault(), W(b[h]));
          break;
      }
  }
  function W(j) {
    const te = l.substring(0, C), ue = l.substring(C), K = te.match(/([^\s]*)$/), ae = K ? K[1] : "", le = te.length - ae.length;
    let ce;
    if (j.type === "data_item")
      if (ae.includes("{")) {
        const Y = te.match(/\{([^}]*?)(?:,\s*([^},]*))?$/);
        Y ? Y[2] ? ce = te.substring(0, Y.index + Y[1].length + 2) + j.value : ce = te.substring(0, Y.index + 1) + j.value : ce = te + j.value;
      } else
        ce = te + "{" + j.value;
    else
      ce = te.substring(0, le) + "#" + j.value;
    const qe = ce + ue;
    n(0, l = qe), r(qe);
    const Te = ce.length;
    setTimeout(
      () => {
        c && (c.setSelectionRange(Te, Te), c.focus());
      },
      0
    ), n(9, y = !1);
  }
  function U(j) {
    Ne[j ? "unshift" : "push"](() => {
      c = j, n(4, c), n(0, l);
    });
  }
  function Q() {
    l = this.value, n(0, l);
  }
  function H(j) {
    Ne[j ? "unshift" : "push"](() => {
      g = j, n(5, g), n(0, l), n(10, k);
    });
  }
  const J = (j) => W(j), he = (j, te) => {
    (te.key === "Enter" || te.key === " ") && (te.preventDefault(), W(j));
  }, ne = (j) => n(8, h = j);
  function de(j) {
    Ne[j ? "unshift" : "push"](() => {
      d = j, n(6, d);
    });
  }
  return e.$$set = (j) => {
    "value" in j && n(0, l = j.value), "onInput" in j && n(14, r = j.onInput), "width" in j && n(15, i = j.width), "dataFields" in j && n(16, o = j.dataFields), "onRun" in j && n(1, a = j.onRun), "onExplain" in j && n(17, f = j.onExplain), "onHistoryClick" in j && n(2, s = j.onHistoryClick), "savesOnRun" in j && n(3, u = j.savesOnRun);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*highlightedView, value*/
    33 && g && l !== void 0) {
      let j = l;
      n(5, g.innerText = Ga(j), g), xa({
        selector: `#${k}`,
        patterns: Fa
      });
    }
    e.$$.dirty[0] & /*textarea, value*/
    17 && c && l !== void 0 && c.value !== l && (n(4, c.value = l, c), P(l));
  }, [
    l,
    a,
    s,
    u,
    c,
    g,
    d,
    b,
    h,
    y,
    k,
    A,
    T,
    W,
    r,
    i,
    o,
    f,
    U,
    Q,
    H,
    J,
    he,
    ne,
    de
  ];
}
class a1 extends we {
  constructor(t) {
    super(), pe(
      this,
      t,
      o1,
      i1,
      ke,
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
    this.$$set({ value: t }), Je();
  }
  get onInput() {
    return this.$$.ctx[14];
  }
  set onInput(t) {
    this.$$set({ onInput: t }), Je();
  }
  get width() {
    return this.$$.ctx[15];
  }
  set width(t) {
    this.$$set({ width: t }), Je();
  }
  get dataFields() {
    return this.$$.ctx[16];
  }
  set dataFields(t) {
    this.$$set({ dataFields: t }), Je();
  }
  get onRun() {
    return this.$$.ctx[1];
  }
  set onRun(t) {
    this.$$set({ onRun: t }), Je();
  }
  get onExplain() {
    return this.$$.ctx[17];
  }
  set onExplain(t) {
    this.$$set({ onExplain: t }), Je();
  }
  get onHistoryClick() {
    return this.$$.ctx[2];
  }
  set onHistoryClick(t) {
    this.$$set({ onHistoryClick: t }), Je();
  }
  get savesOnRun() {
    return this.$$.ctx[3];
  }
  set savesOnRun(t) {
    this.$$set({ savesOnRun: t }), Je();
  }
}
function fr(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object) || e.constructor !== t.constructor)
    return !1;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      if (!t.hasOwnProperty(n))
        return !1;
      if (e[n] !== t[n] && (typeof e[n] != "object" || !fr(e[n], t[n])))
        return !1;
    }
  for (n in t)
    if (t.hasOwnProperty(n) && !e.hasOwnProperty(n))
      return !1;
  return !0;
}
function $o(e, t, n) {
  const l = e.slice();
  return l[50] = t[n][0], l[51] = t[n][1], l[53] = n, l;
}
function ea(e) {
  let t, n, l, r, i, o;
  return n = new lr({
    props: {
      class: "w-full flex items-center gap-2 " + /*draggingCounter*/
      (e[15] > 0 || /*draggingInto*/
      e[11] ? "bg-blue-200 dark:bg-blue-200/40" : "hover:bg-gray-100 dark:hover:bg-gray-800") + " dark:text-gray-100 text-gray-900 pr-4 py-2 ",
      style: "padding-left: " + (-0.5 + /*indentLevel*/
      e[3] * 1.5) + "rem;",
      $$slots: {
        default: [
          u1,
          ({ hovering: a }) => ({ 54: a }),
          ({ hovering: a }) => [0, a ? 8388608 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      t = w("div"), X(n.$$.fragment), m(t, "class", l = "w-full cursor-pointer select-none " + (!/*collapsed*/
      e[16] && /*itemCount*/
      e[17] > 0 || /*collapsed*/
      (e[16] || /*itemCount*/
      e[17] == 0) && /*showBorder*/
      e[10] ? "border-b border-gray-200 dark:border-gray-700" : "")), m(t, "draggable", "true");
    },
    m(a, f) {
      M(a, t, f), G(n, t, null), r = !0, i || (o = [
        F(t, "dragover", Ya),
        F(
          t,
          "drop",
          /*drop_handler*/
          e[33]
        ),
        F(t, "click", function() {
          Xe(
            /*draggingCounter*/
            e[15] > 0 || /*draggingInto*/
            e[11] ? void 0 : (
              /*toggle*/
              e[18]
            )
          ) && /*draggingCounter*/
          (e[15] > 0 || /*draggingInto*/
          e[11] ? void 0 : (
            /*toggle*/
            e[18]
          )).apply(this, arguments);
        }),
        F(
          t,
          "dragstart",
          /*dragstart_handler*/
          e[34]
        ),
        F(t, "dragenter", Re(Jt(
          /*dragenter_handler*/
          e[35]
        ))),
        F(t, "dragleave", Re(
          /*dragleave_handler*/
          e[36]
        ))
      ], i = !0);
    },
    p(a, f) {
      e = a;
      const s = {};
      f[0] & /*draggingCounter, draggingInto*/
      34816 && (s.class = "w-full flex items-center gap-2 " + /*draggingCounter*/
      (e[15] > 0 || /*draggingInto*/
      e[11] ? "bg-blue-200 dark:bg-blue-200/40" : "hover:bg-gray-100 dark:hover:bg-gray-800") + " dark:text-gray-100 text-gray-900 pr-4 py-2 "), f[0] & /*indentLevel*/
      8 && (s.style = "padding-left: " + (-0.5 + /*indentLevel*/
      e[3] * 1.5) + "rem;"), f[0] & /*onDuplicate, path, editingPath, onNewQuery, onNewGroup, collapsed, onMove, newName, editBox, itemCount, name*/
      226147 | f[1] & /*$$scope, hovering*/
      25165824 && (s.$$scope = { dirty: f, ctx: e }), n.$set(s), (!r || f[0] & /*collapsed, itemCount, showBorder*/
      197632 && l !== (l = "w-full cursor-pointer select-none " + (!/*collapsed*/
      e[16] && /*itemCount*/
      e[17] > 0 || /*collapsed*/
      (e[16] || /*itemCount*/
      e[17] == 0) && /*showBorder*/
      e[10] ? "border-b border-gray-200 dark:border-gray-700" : ""))) && m(t, "class", l);
    },
    i(a) {
      r || (v(n.$$.fragment, a), r = !0);
    },
    o(a) {
      z(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && N(t), V(n), i = !1, ve(o);
    }
  };
}
function f1(e) {
  let t, n, l, r, i, o, a;
  return {
    c() {
      t = w("div"), n = x(
        /*name*/
        e[0]
      ), l = O(), r = w("span"), i = x("("), o = x(
        /*itemCount*/
        e[17]
      ), a = x(")"), m(r, "class", "text-xs text-gray-500"), m(t, "class", "font-semibold flex-auto py-0.5 truncate");
    },
    m(f, s) {
      M(f, t, s), _(t, n), _(t, l), _(t, r), _(r, i), _(r, o), _(r, a);
    },
    p(f, s) {
      s[0] & /*name*/
      1 && fe(
        n,
        /*name*/
        f[0]
      ), s[0] & /*itemCount*/
      131072 && fe(
        o,
        /*itemCount*/
        f[17]
      );
    },
    d(f) {
      f && N(t);
    }
  };
}
function s1(e) {
  let t, n, l, r;
  return {
    c() {
      t = w("form"), n = w("input"), m(n, "type", "text"), m(n, "class", "flat-text-input w-full"), m(t, "class", "flex-auto");
    },
    m(i, o) {
      M(i, t, o), _(t, n), je(
        n,
        /*newName*/
        e[13]
      ), e[24](n), l || (r = [
        F(
          n,
          "input",
          /*input_input_handler*/
          e[23]
        ),
        F(
          n,
          "keydown",
          /*keydown_handler*/
          e[25]
        ),
        F(
          n,
          "blur",
          /*blur_handler*/
          e[26]
        ),
        F(t, "submit", Re(Jt(
          /*submit_handler*/
          e[27]
        )))
      ], l = !0);
    },
    p(i, o) {
      o[0] & /*newName*/
      8192 && n.value !== /*newName*/
      i[13] && je(
        n,
        /*newName*/
        i[13]
      );
    },
    d(i) {
      i && N(t), e[24](null), l = !1, ve(r);
    }
  };
}
function ta(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, g, b, h, y, C, k, p, q;
  return n = new be({
    props: { icon: vt, class: "inline mr-2" }
  }), o = new be({
    props: { icon: vt, class: "inline mr-2" }
  }), c = new be({
    props: { icon: jr, class: "inline" }
  }), b = new be({ props: { icon: tr } }), C = new be({ props: { icon: Qr } }), {
    c() {
      t = w("button"), X(n.$$.fragment), l = x(`
          Group`), r = O(), i = w("button"), X(o.$$.fragment), a = x(`
          Query`), f = O(), s = w("div"), u = w("button"), X(c.$$.fragment), d = O(), g = w("button"), X(b.$$.fragment), h = O(), y = w("button"), X(C.$$.fragment), m(t, "class", "px-2 py-1 font-semibold text-xs rounded transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white whitespace-nowrap"), m(t, "title", "Create a new group"), m(i, "class", "px-2 py-1 font-semibold text-xs rounded transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white whitespace-nowrap"), m(i, "title", "Create a new query"), m(u, "class", "px-1 text-xs hover:opacity-50 dark:text-gray-100"), m(u, "title", "Rename this group"), m(g, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), m(g, "title", "Duplicate this group"), m(y, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), m(y, "title", "Delete this group"), m(s, "class", "flex items-center");
    },
    m(E, D) {
      M(E, t, D), G(n, t, null), _(t, l), M(E, r, D), M(E, i, D), G(o, i, null), _(i, a), M(E, f, D), M(E, s, D), _(s, u), G(c, u, null), _(s, d), _(s, g), G(b, g, null), _(s, h), _(s, y), G(C, y, null), k = !0, p || (q = [
        F(t, "click", Re(
          /*click_handler*/
          e[28]
        )),
        F(i, "click", Re(
          /*click_handler_1*/
          e[29]
        )),
        F(u, "click", Re(
          /*click_handler_2*/
          e[30]
        )),
        F(g, "click", Re(
          /*click_handler_3*/
          e[31]
        )),
        F(y, "click", Re(
          /*click_handler_4*/
          e[32]
        ))
      ], p = !0);
    },
    p: $,
    i(E) {
      k || (v(n.$$.fragment, E), v(o.$$.fragment, E), v(c.$$.fragment, E), v(b.$$.fragment, E), v(C.$$.fragment, E), k = !0);
    },
    o(E) {
      z(n.$$.fragment, E), z(o.$$.fragment, E), z(c.$$.fragment, E), z(b.$$.fragment, E), z(C.$$.fragment, E), k = !1;
    },
    d(E) {
      E && N(t), V(n), E && N(r), E && N(i), V(o), E && N(f), E && N(s), V(c), V(b), V(C), p = !1, ve(q);
    }
  };
}
function u1(e) {
  let t, n, l, r, i, o, a;
  n = new be({
    props: {
      icon: Ye,
      class: "inline-block w-3 h-3 shrink-0 text-sm opacity-70 " + /*collapsed*/
      (e[16] ? "-rotate-90" : "")
    }
  });
  function f(d, g) {
    return g[0] & /*editingPath, path*/
    4098 && (r = null), r == null && (r = !!fr(
      /*editingPath*/
      d[12],
      /*path*/
      d[1]
    )), r ? s1 : f1;
  }
  let s = f(e, [-1, -1]), u = s(e), c = (
    /*hovering*/
    e[54] && ta(e)
  );
  return {
    c() {
      t = w("div"), X(n.$$.fragment), l = O(), u.c(), i = O(), c && c.c(), o = _e(), m(t, "class", "w-4");
    },
    m(d, g) {
      M(d, t, g), G(n, t, null), M(d, l, g), u.m(d, g), M(d, i, g), c && c.m(d, g), M(d, o, g), a = !0;
    },
    p(d, g) {
      const b = {};
      g[0] & /*collapsed*/
      65536 && (b.class = "inline-block w-3 h-3 shrink-0 text-sm opacity-70 " + /*collapsed*/
      (d[16] ? "-rotate-90" : "")), n.$set(b), s === (s = f(d, g)) && u ? u.p(d, g) : (u.d(1), u = s(d), u && (u.c(), u.m(i.parentNode, i))), /*hovering*/
      d[54] ? c ? (c.p(d, g), g[1] & /*hovering*/
      8388608 && v(c, 1)) : (c = ta(d), c.c(), v(c, 1), c.m(o.parentNode, o)) : c && (ie(), z(c, 1, 1, () => {
        c = null;
      }), oe());
    },
    i(d) {
      a || (v(n.$$.fragment, d), v(c), a = !0);
    },
    o(d) {
      z(n.$$.fragment, d), z(c), a = !1;
    },
    d(d) {
      d && N(t), V(n), d && N(l), u.d(d), d && N(i), c && c.d(d), d && N(o);
    }
  };
}
function na(e) {
  let t, n, l = Object.entries(
    /*queries*/
    e[2]
  ).sort(oa), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = ra($o(e, l, o));
  const i = (o) => z(r[o], 1, 1, () => {
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
      M(o, t, a), n = !0;
    },
    p(o, a) {
      if (a[0] & /*itemCount, showBorder, draggingCounter, draggingInto, onSelect, path, queries, handleDrop, indentLevel, deleteItem, onDuplicate, editingPath, onMove, newName, editBox, onNewQuery, onNewGroup, onDelete*/
      1769470 | a[1] & /*hovering*/
      8388608) {
        l = Object.entries(
          /*queries*/
          o[2]
        ).sort(oa);
        let f;
        for (f = 0; f < l.length; f += 1) {
          const s = $o(o, l, f);
          r[f] ? (r[f].p(s, a), v(r[f], 1)) : (r[f] = ra(s), r[f].c(), v(r[f], 1), r[f].m(t.parentNode, t));
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
        z(r[a]);
      n = !1;
    },
    d(o) {
      Pe(r, o), o && N(t);
    }
  };
}
function c1(e) {
  let t, n;
  return t = new Ua({
    props: {
      name: (
        /*key*/
        e[50]
      ),
      queries: (
        /*value*/
        e[51]
      ),
      path: [
        .../*path*/
        e[1],
        /*key*/
        e[50]
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
        e[53] < /*itemCount*/
        e[17] - 1
      )
    }
  }), {
    c() {
      X(t.$$.fragment);
    },
    m(l, r) {
      G(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r[0] & /*queries*/
      4 && (i.name = /*key*/
      l[50]), r[0] & /*queries*/
      4 && (i.queries = /*value*/
      l[51]), r[0] & /*path, queries*/
      6 && (i.path = [
        .../*path*/
        l[1],
        /*key*/
        l[50]
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
      131072 && (i.showBorder = /*i*/
      l[53] < /*itemCount*/
      l[17] - 1), t.$set(i);
    },
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function d1(e) {
  let t, n, l, r, i, o, a;
  n = new lr({
    props: {
      class: "block w-full flex items-center gap-2 pr-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100 text-gray-900",
      style: "padding-left: " + (-0.5 + /*indentLevel*/
      (e[3] + 1) * 1.5) + "rem;",
      $$slots: {
        default: [
          b1,
          ({ hovering: u }) => ({ 54: u }),
          ({ hovering: u }) => [0, u ? 8388608 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  });
  function f() {
    return (
      /*click_handler_8*/
      e[45](
        /*key*/
        e[50],
        /*value*/
        e[51]
      )
    );
  }
  function s(...u) {
    return (
      /*dragstart_handler_1*/
      e[46](
        /*key*/
        e[50],
        ...u
      )
    );
  }
  return {
    c() {
      t = w("div"), X(n.$$.fragment), l = O(), m(t, "class", r = "w-full cursor-pointer select-none " + /*i*/
      (e[53] < /*itemCount*/
      e[17] - 1 || /*showBorder*/
      e[10] ? "border-b border-gray-200 dark:border-gray-700" : "")), m(t, "draggable", "true");
    },
    m(u, c) {
      M(u, t, c), G(n, t, null), _(t, l), i = !0, o || (a = [
        F(t, "click", function() {
          Xe(
            /*draggingCounter*/
            e[15] > 0 || /*draggingInto*/
            e[11] ? void 0 : f
          ) && /*draggingCounter*/
          (e[15] > 0 || /*draggingInto*/
          e[11] ? void 0 : f).apply(this, arguments);
        }),
        F(t, "dragstart", s),
        F(t, "dragover", Ya),
        F(
          t,
          "drop",
          /*drop_handler_1*/
          e[47]
        ),
        F(t, "dragenter", Re(Jt(
          /*dragenter_handler_1*/
          e[48]
        ))),
        F(t, "dragleave", Re(
          /*dragleave_handler_1*/
          e[49]
        ))
      ], o = !0);
    },
    p(u, c) {
      e = u;
      const d = {};
      c[0] & /*indentLevel*/
      8 && (d.style = "padding-left: " + (-0.5 + /*indentLevel*/
      (e[3] + 1) * 1.5) + "rem;"), c[0] & /*queries, onDuplicate, path, editingPath, onMove, newName, editBox*/
      29446 | c[1] & /*$$scope, hovering*/
      25165824 && (d.$$scope = { dirty: c, ctx: e }), n.$set(d), (!i || c[0] & /*itemCount, showBorder*/
      132096 && r !== (r = "w-full cursor-pointer select-none " + /*i*/
      (e[53] < /*itemCount*/
      e[17] - 1 || /*showBorder*/
      e[10] ? "border-b border-gray-200 dark:border-gray-700" : ""))) && m(t, "class", r);
    },
    i(u) {
      i || (v(n.$$.fragment, u), i = !0);
    },
    o(u) {
      z(n.$$.fragment, u), i = !1;
    },
    d(u) {
      u && N(t), V(n), o = !1, ve(a);
    }
  };
}
function g1(e) {
  let t, n = (
    /*key*/
    e[50] + ""
  ), l, r, i, o = (
    /*value*/
    e[51].replace(`
`, " ") + ""
  ), a, f;
  return {
    c() {
      t = w("div"), l = x(n), r = x(`  
              `), i = w("span"), a = x(o), m(i, "class", "font-normal font-mono text-gray-600 dark:text-gray-400"), m(t, "class", "font-semibold whitespace-nowrap flex-auto truncate"), m(t, "title", f = /*key*/
      e[50]);
    },
    m(s, u) {
      M(s, t, u), _(t, l), _(t, r), _(t, i), _(i, a);
    },
    p(s, u) {
      u[0] & /*queries*/
      4 && n !== (n = /*key*/
      s[50] + "") && fe(l, n), u[0] & /*queries*/
      4 && o !== (o = /*value*/
      s[51].replace(`
`, " ") + "") && fe(a, o), u[0] & /*queries*/
      4 && f !== (f = /*key*/
      s[50]) && m(t, "title", f);
    },
    d(s) {
      s && N(t);
    }
  };
}
function m1(e) {
  let t, n, l, r;
  function i() {
    return (
      /*blur_handler_1*/
      e[40](
        /*key*/
        e[50]
      )
    );
  }
  function o() {
    return (
      /*submit_handler_1*/
      e[41](
        /*key*/
        e[50]
      )
    );
  }
  return {
    c() {
      t = w("form"), n = w("input"), m(n, "type", "text"), m(n, "class", "flat-text-input w-full"), m(t, "class", "flex-auto");
    },
    m(a, f) {
      M(a, t, f), _(t, n), je(
        n,
        /*newName*/
        e[13]
      ), e[38](n), l || (r = [
        F(
          n,
          "input",
          /*input_input_handler_1*/
          e[37]
        ),
        F(
          n,
          "keydown",
          /*keydown_handler_1*/
          e[39]
        ),
        F(n, "blur", i),
        F(t, "submit", Re(Jt(o)))
      ], l = !0);
    },
    p(a, f) {
      e = a, f[0] & /*newName*/
      8192 && n.value !== /*newName*/
      e[13] && je(
        n,
        /*newName*/
        e[13]
      );
    },
    d(a) {
      a && N(t), e[38](null), l = !1, ve(r);
    }
  };
}
function la(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d;
  l = new be({
    props: { icon: jr, class: "inline" }
  });
  function g() {
    return (
      /*click_handler_5*/
      e[42](
        /*key*/
        e[50]
      )
    );
  }
  o = new be({ props: { icon: tr } });
  function b() {
    return (
      /*click_handler_6*/
      e[43](
        /*key*/
        e[50]
      )
    );
  }
  s = new be({ props: { icon: Qr } });
  function h() {
    return (
      /*click_handler_7*/
      e[44](
        /*key*/
        e[50]
      )
    );
  }
  return {
    c() {
      t = w("div"), n = w("button"), X(l.$$.fragment), r = O(), i = w("button"), X(o.$$.fragment), a = O(), f = w("button"), X(s.$$.fragment), m(n, "class", "px-1 text-xs hover:opacity-50 dark:text-gray-100"), m(n, "title", "Rename this group"), m(i, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), m(i, "title", "Duplicate this query"), m(f, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), m(f, "title", "Delete this query"), m(t, "class", "flex items-center");
    },
    m(y, C) {
      M(y, t, C), _(t, n), G(l, n, null), _(t, r), _(t, i), G(o, i, null), _(t, a), _(t, f), G(s, f, null), u = !0, c || (d = [
        F(n, "click", Re(g)),
        F(i, "click", Re(b)),
        F(f, "click", Re(h))
      ], c = !0);
    },
    p(y, C) {
      e = y;
    },
    i(y) {
      u || (v(l.$$.fragment, y), v(o.$$.fragment, y), v(s.$$.fragment, y), u = !0);
    },
    o(y) {
      z(l.$$.fragment, y), z(o.$$.fragment, y), z(s.$$.fragment, y), u = !1;
    },
    d(y) {
      y && N(t), V(l), V(o), V(s), c = !1, ve(d);
    }
  };
}
function b1(e) {
  let t, n, l, r;
  function i(s, u) {
    return u[0] & /*editingPath, path, queries*/
    4102 && (t = null), t == null && (t = !!fr(
      /*editingPath*/
      s[12],
      [
        .../*path*/
        s[1],
        /*key*/
        s[50]
      ]
    )), t ? m1 : g1;
  }
  let o = i(e, [-1, -1]), a = o(e), f = (
    /*hovering*/
    e[54] && la(e)
  );
  return {
    c() {
      a.c(), n = O(), f && f.c(), l = _e();
    },
    m(s, u) {
      a.m(s, u), M(s, n, u), f && f.m(s, u), M(s, l, u), r = !0;
    },
    p(s, u) {
      o === (o = i(s, u)) && a ? a.p(s, u) : (a.d(1), a = o(s), a && (a.c(), a.m(n.parentNode, n))), /*hovering*/
      s[54] ? f ? (f.p(s, u), u[1] & /*hovering*/
      8388608 && v(f, 1)) : (f = la(s), f.c(), v(f, 1), f.m(l.parentNode, l)) : f && (ie(), z(f, 1, 1, () => {
        f = null;
      }), oe());
    },
    i(s) {
      r || (v(f), r = !0);
    },
    o(s) {
      z(f), r = !1;
    },
    d(s) {
      a.d(s), s && N(n), f && f.d(s), s && N(l);
    }
  };
}
function ra(e) {
  let t, n, l, r;
  const i = [d1, c1], o = [];
  function a(f, s) {
    return typeof /*value*/
    f[51] == "string" ? 0 : 1;
  }
  return t = a(e), n = o[t] = i[t](e), {
    c() {
      n.c(), l = _e();
    },
    m(f, s) {
      o[t].m(f, s), M(f, l, s), r = !0;
    },
    p(f, s) {
      let u = t;
      t = a(f), t === u ? o[t].p(f, s) : (ie(), z(o[u], 1, 1, () => {
        o[u] = null;
      }), oe(), n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), v(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      r || (v(n), r = !0);
    },
    o(f) {
      z(n), r = !1;
    },
    d(f) {
      o[t].d(f), f && N(l);
    }
  };
}
function _1(e) {
  let t, n, l, r = (
    /*indentLevel*/
    e[3] > 0 && ea(e)
  ), i = !/*collapsed*/
  e[16] && na(e);
  return {
    c() {
      r && r.c(), t = O(), i && i.c(), n = _e();
    },
    m(o, a) {
      r && r.m(o, a), M(o, t, a), i && i.m(o, a), M(o, n, a), l = !0;
    },
    p(o, a) {
      /*indentLevel*/
      o[3] > 0 ? r ? (r.p(o, a), a[0] & /*indentLevel*/
      8 && v(r, 1)) : (r = ea(o), r.c(), v(r, 1), r.m(t.parentNode, t)) : r && (ie(), z(r, 1, 1, () => {
        r = null;
      }), oe()), /*collapsed*/
      o[16] ? i && (ie(), z(i, 1, 1, () => {
        i = null;
      }), oe()) : i ? (i.p(o, a), a[0] & /*collapsed*/
      65536 && v(i, 1)) : (i = na(o), i.c(), v(i, 1), i.m(n.parentNode, n));
    },
    i(o) {
      l || (v(r), v(i), l = !0);
    },
    o(o) {
      z(r), z(i), l = !1;
    },
    d(o) {
      r && r.d(o), o && N(t), i && i.d(o), o && N(n);
    }
  };
}
function ia(e, t) {
  var n, l;
  (n = e.dataTransfer) == null || n.setData("application/json", JSON.stringify(t)), (l = e.dataTransfer) == null || l.setData("text/plain", JSON.stringify(t)), e.stopPropagation();
}
function Ya(e) {
  e.preventDefault(), e.dataTransfer.dropEffect = "move";
}
function oa(e, t) {
  return typeof e[1] == "string" == (typeof t[1] == "string") ? e[0].localeCompare(t[0]) : typeof e[1] == "string" ? -1 : 1;
}
function h1(e, t, n) {
  let l, { name: r = null } = t, { path: i = [] } = t, { queries: o = {} } = t, { indentLevel: a = 0 } = t, { onSelect: f = () => {
  } } = t, { onNewGroup: s = () => {
  } } = t, { onNewQuery: u = () => {
  } } = t, { onDelete: c = () => {
  } } = t, { onDuplicate: d = () => {
  } } = t, { onDraggingChange: g = () => {
  } } = t, { onMove: b = () => {
  } } = t, { showBorder: h = !1 } = t, { draggingInto: y = !1 } = t, C = a > 0;
  function k() {
    a > 0 && n(16, C = !C);
  }
  function p(ee = null) {
    (ee == null || l == 0 || confirm(`Are you sure you want to delete this ${ee != null ? "query" : "group"}? This action cannot be undone.`)) && c(ee != null ? [...i, ee] : i);
  }
  let q = null, E = null, D, P;
  function B(ee, Ee) {
    var Be;
    ee.preventDefault(), n(15, L = 0);
    const He = (Be = ee.dataTransfer) == null ? void 0 : Be.getData("application/json");
    if (He) {
      const Oe = JSON.parse(He);
      Ee = [...Ee, Oe[Oe.length - 1]], JSON.stringify(Oe) !== JSON.stringify(Ee) && b(Oe, Ee);
    }
    n(16, C = !1);
  }
  let L = 0;
  function A() {
    E = this.value, n(13, E), n(12, q);
  }
  function R(ee) {
    Ne[ee ? "unshift" : "push"](() => {
      P = ee, n(14, P);
    });
  }
  const T = (ee) => {
    ee.key === "Escape" && (ee.preventDefault(), n(12, q = null));
  }, W = () => b(i, [...i.slice(0, i.length - 1), E]), U = () => {
    b(i, [...i.slice(0, i.length - 1), E]);
  }, Q = () => {
    s(i), n(16, C = !1);
  }, H = () => u(i), J = () => n(12, q = i), he = () => d(i), ne = () => p(), de = (ee) => B(ee, i), j = (ee) => ia(ee, i), te = () => n(15, L++, L), ue = () => n(15, L--, L);
  function K() {
    E = this.value, n(13, E), n(12, q);
  }
  function ae(ee) {
    Ne[ee ? "unshift" : "push"](() => {
      P = ee, n(14, P);
    });
  }
  const le = (ee) => {
    ee.key === "Escape" && (ee.preventDefault(), n(12, q = null));
  }, ce = (ee) => b([...i, ee], [...i, E]), qe = (ee) => {
    b([...i, ee], [...i, E]);
  }, Te = (ee) => n(12, q = [...i, ee]), Y = (ee) => d([...i, ee]), Qe = (ee) => p(ee), bt = (ee, Ee) => f([...i, ee], Ee), St = (ee, Ee) => ia(Ee, [...i, ee]), Ie = (ee) => B(ee, i), _t = () => n(15, L++, L), ht = () => n(15, L--, L);
  return e.$$set = (ee) => {
    "name" in ee && n(0, r = ee.name), "path" in ee && n(1, i = ee.path), "queries" in ee && n(2, o = ee.queries), "indentLevel" in ee && n(3, a = ee.indentLevel), "onSelect" in ee && n(4, f = ee.onSelect), "onNewGroup" in ee && n(5, s = ee.onNewGroup), "onNewQuery" in ee && n(6, u = ee.onNewQuery), "onDelete" in ee && n(7, c = ee.onDelete), "onDuplicate" in ee && n(8, d = ee.onDuplicate), "onDraggingChange" in ee && n(21, g = ee.onDraggingChange), "onMove" in ee && n(9, b = ee.onMove), "showBorder" in ee && n(10, h = ee.showBorder), "draggingInto" in ee && n(11, y = ee.draggingInto);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*queries*/
    4 && n(17, l = o ? Object.keys(o).length : 0), e.$$.dirty[0] & /*editingPath, newName*/
    12288 && (q != null && E == null ? n(13, E = q[q.length - 1] ?? null) : q || n(13, E = null)), e.$$.dirty[0] & /*editBox, oldEditBox*/
    4210688 && P !== D && (P && (P.focus(), P.select()), n(22, D = P)), e.$$.dirty[0] & /*onDraggingChange, draggingCounter, draggingInto*/
    2131968 && g(L > 0 || y);
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
    b,
    h,
    y,
    q,
    E,
    P,
    L,
    C,
    l,
    k,
    p,
    B,
    g,
    D,
    A,
    R,
    T,
    W,
    U,
    Q,
    H,
    J,
    he,
    ne,
    de,
    j,
    te,
    ue,
    K,
    ae,
    le,
    ce,
    qe,
    Te,
    Y,
    Qe,
    bt,
    St,
    Ie,
    _t,
    ht
  ];
}
class Ua extends we {
  constructor(t) {
    super(), pe(
      this,
      t,
      h1,
      _1,
      ke,
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
        onDraggingChange: 21,
        onMove: 9,
        showBorder: 10,
        draggingInto: 11
      },
      null,
      [-1, -1]
    );
  }
}
function aa(e) {
  let t, n, l, r, i;
  return n = new be({
    props: { icon: wa, class: "inline" }
  }), {
    c() {
      t = w("button"), X(n.$$.fragment), m(t, "class", "px-2 py-1.5 text-sm text-center font-semibold rounded transition-colors duration-200 bg-gray-600 hover:bg-gray-500 text-white whitespace-nowrap"), m(t, "title", "Close query browser");
    },
    m(o, a) {
      M(o, t, a), G(n, t, null), l = !0, r || (i = F(t, "click", function() {
        Xe(
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
      z(n.$$.fragment, o), l = !1;
    },
    d(o) {
      o && N(t), V(n), r = !1, i();
    }
  };
}
function y1(e) {
  let t;
  return {
    c() {
      t = w("div"), t.innerHTML = `<div class="w-3/4 text-gray-700 dark:text-gray-200 text-lg font-semibold">File is empty</div> 
      <p class="text-gray-600 dark:text-gray-400 w-1/3">Click above to create a query or group of queries in this file.</p>`, m(t, "class", "flex flex-col w-full flex-auto min-h-0 items-center justify-center text-center gap-4");
    },
    m(n, l) {
      M(n, t, l);
    },
    p: $,
    i: $,
    o: $,
    d(n) {
      n && N(t);
    }
  };
}
function k1(e) {
  let t, n, l, r, i, o, a;
  function f(u) {
    e[18](u);
  }
  let s = {
    onSelect: (
      /*onSelect*/
      e[4]
    ),
    onNewGroup: (
      /*func*/
      e[12]
    ),
    onNewQuery: (
      /*func_1*/
      e[13]
    ),
    onDelete: (
      /*func_2*/
      e[14]
    ),
    onDuplicate: (
      /*func_3*/
      e[15]
    ),
    onMove: (
      /*func_4*/
      e[16]
    ),
    onDraggingChange: (
      /*func_5*/
      e[17]
    )
  };
  return (
    /*fileContents*/
    e[0] !== void 0 && (s.queries = /*fileContents*/
    e[0]), r = new Ua({ props: s }), Ne.push(() => it(r, "queries", f)), {
      c() {
        t = w("div"), t.textContent = `Click on a query to edit, hover to see actions, or drag-and-drop to
      organize.`, n = O(), l = w("div"), X(r.$$.fragment), m(t, "class", "mx-4 mb-2 text-xs text-gray-500 dark:text-gray-400"), m(l, "class", o = "rounded-lg " + /*draggingOnBrowser*/
        (e[5] || /*draggingCounter*/
        e[6] > 0 ? "outline outline-2 outline-blue-500" : "") + " border border-gray-200 dark:border-gray-700 overflow-auto min-h-0 flex-auto mx-4");
      },
      m(u, c) {
        M(u, t, c), M(u, n, c), M(u, l, c), G(r, l, null), a = !0;
      },
      p(u, c) {
        const d = {};
        c & /*onSelect*/
        16 && (d.onSelect = /*onSelect*/
        u[4]), c & /*fileContents*/
        1 && (d.onNewGroup = /*func*/
        u[12]), c & /*fileContents*/
        1 && (d.onDelete = /*func_2*/
        u[14]), c & /*fileContents*/
        1 && (d.onDuplicate = /*func_3*/
        u[15]), c & /*draggingOnBrowser*/
        32 && (d.onDraggingChange = /*func_5*/
        u[17]), !i && c & /*fileContents*/
        1 && (i = !0, d.queries = /*fileContents*/
        u[0], rt(() => i = !1)), r.$set(d), (!a || c & /*draggingOnBrowser, draggingCounter*/
        96 && o !== (o = "rounded-lg " + /*draggingOnBrowser*/
        (u[5] || /*draggingCounter*/
        u[6] > 0 ? "outline outline-2 outline-blue-500" : "") + " border border-gray-200 dark:border-gray-700 overflow-auto min-h-0 flex-auto mx-4")) && m(l, "class", o);
      },
      i(u) {
        a || (v(r.$$.fragment, u), a = !0);
      },
      o(u) {
        z(r.$$.fragment, u), a = !1;
      },
      d(u) {
        u && N(t), u && N(n), u && N(l), V(r);
      }
    }
  );
}
function fa(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = w("div"), n = w("span"), l = x("Queries saved to "), r = w("span"), i = x(
        /*savePath*/
        e[1]
      ), m(r, "class", "font-mono"), m(n, "class", "px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"), m(t, "class", "mx-4 mt-4");
    },
    m(o, a) {
      M(o, t, a), _(t, n), _(n, l), _(n, r), _(r, i);
    },
    p(o, a) {
      a & /*savePath*/
      2 && fe(
        i,
        /*savePath*/
        o[1]
      );
    },
    d(o) {
      o && N(t);
    }
  };
}
function p1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, g, b, h, y, C, k, p, q, E = (
    /*allowClose*/
    e[2] && aa(e)
  );
  a = new be({
    props: { icon: vt, class: "inline mr-2" }
  }), c = new be({
    props: { icon: vt, class: "inline mr-2" }
  });
  const D = [k1, y1], P = [];
  function B(A, R) {
    return R & /*fileContents*/
    1 && (b = null), b == null && (b = Object.entries(
      /*fileContents*/
      A[0]
    ).length > 0), b ? 0 : 1;
  }
  h = B(e, -1), y = P[h] = D[h](e);
  let L = (
    /*savePath*/
    e[1] && fa(e)
  );
  return {
    c() {
      t = w("div"), n = w("div"), E && E.c(), l = O(), r = w("h3"), r.textContent = "Queries", i = O(), o = w("button"), X(a.$$.fragment), f = x(`
      Group`), s = O(), u = w("button"), X(c.$$.fragment), d = x(`
      Query`), g = O(), y.c(), C = O(), L && L.c(), m(r, "class", "text-lg py-1 font-semibold text-gray-900 dark:text-gray-100 flex-auto"), se(
        r,
        "px-2",
        /*allowClose*/
        e[2]
      ), m(o, "class", "px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), m(o, "title", "Create a new group"), m(u, "class", "px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), m(u, "title", "Create a new query at the top level"), m(n, "class", "px-4 pt-2 flex items-center mb-4 gap-2 shrink-0"), m(t, "class", "flex flex-col mb-2 max-h-full"), se(t, "h-full", Object.entries(
        /*fileContents*/
        e[0]
      ).length == 0);
    },
    m(A, R) {
      M(A, t, R), _(t, n), E && E.m(n, null), _(n, l), _(n, r), _(n, i), _(n, o), G(a, o, null), _(o, f), _(n, s), _(n, u), G(c, u, null), _(u, d), _(t, g), P[h].m(t, null), _(t, C), L && L.m(t, null), k = !0, p || (q = [
        F(
          o,
          "click",
          /*click_handler*/
          e[10]
        ),
        F(
          u,
          "click",
          /*click_handler_1*/
          e[11]
        ),
        F(t, "dragover", w1),
        F(
          t,
          "drop",
          /*drop_handler*/
          e[19]
        ),
        F(t, "dragenter", Re(Jt(
          /*dragenter_handler*/
          e[20]
        ))),
        F(t, "dragleave", Re(
          /*dragleave_handler*/
          e[21]
        ))
      ], p = !0);
    },
    p(A, [R]) {
      /*allowClose*/
      A[2] ? E ? (E.p(A, R), R & /*allowClose*/
      4 && v(E, 1)) : (E = aa(A), E.c(), v(E, 1), E.m(n, l)) : E && (ie(), z(E, 1, 1, () => {
        E = null;
      }), oe()), (!k || R & /*allowClose*/
      4) && se(
        r,
        "px-2",
        /*allowClose*/
        A[2]
      );
      let T = h;
      h = B(A, R), h === T ? P[h].p(A, R) : (ie(), z(P[T], 1, 1, () => {
        P[T] = null;
      }), oe(), y = P[h], y ? y.p(A, R) : (y = P[h] = D[h](A), y.c()), v(y, 1), y.m(t, C)), /*savePath*/
      A[1] ? L ? L.p(A, R) : (L = fa(A), L.c(), L.m(t, null)) : L && (L.d(1), L = null), (!k || R & /*Object, fileContents*/
      1) && se(t, "h-full", Object.entries(
        /*fileContents*/
        A[0]
      ).length == 0);
    },
    i(A) {
      k || (v(E), v(a.$$.fragment, A), v(c.$$.fragment, A), v(y), k = !0);
    },
    o(A) {
      z(E), z(a.$$.fragment, A), z(c.$$.fragment, A), z(y), k = !1;
    },
    d(A) {
      A && N(t), E && E.d(), V(a), V(c), P[h].d(), L && L.d(), p = !1, ve(q);
    }
  };
}
function w1(e) {
  e.preventDefault(), e.dataTransfer.dropEffect = "move";
}
function v1(e, t, n) {
  let { fileContents: l = {} } = t, { savePath: r = "" } = t, { allowClose: i = !0 } = t, { onClose: o = () => {
  } } = t, { onSelect: a = () => {
  } } = t;
  function f(L = []) {
    let A = Wr(l, L);
    n(0, l = A.contents), a(A.queryPath, Yr(l, A.queryPath));
  }
  function s(L, A) {
    if (!fr(L, A)) {
      if (Kr(l, A)) {
        alert("A query with this name already exists - all queries must have unique names.");
        return;
      }
      n(0, l = Xa(l, L, A));
    }
  }
  function u(L, A) {
    var T;
    L.preventDefault(), n(6, d = 0);
    const R = (T = L.dataTransfer) == null ? void 0 : T.getData("application/json");
    if (R) {
      const W = JSON.parse(R);
      A = [...A, W[W.length - 1]], JSON.stringify(W) !== JSON.stringify(A) && s(W, A);
    }
  }
  let c = !1, d = 0;
  const g = () => n(0, l = Or(l, [])), b = () => {
    f([]);
  }, h = (L) => n(0, l = Or(l, L)), y = (L) => f(L), C = (L) => n(0, l = ar(l, L)), k = (L) => n(0, l = Xr(l, L).contents), p = (L, A) => s(L, A), q = (L) => n(5, c = L);
  function E(L) {
    l = L, n(0, l);
  }
  const D = (L) => u(L, []), P = () => n(6, d++, d), B = () => n(6, d--, d);
  return e.$$set = (L) => {
    "fileContents" in L && n(0, l = L.fileContents), "savePath" in L && n(1, r = L.savePath), "allowClose" in L && n(2, i = L.allowClose), "onClose" in L && n(3, o = L.onClose), "onSelect" in L && n(4, a = L.onSelect);
  }, [
    l,
    r,
    i,
    o,
    a,
    c,
    d,
    f,
    s,
    u,
    g,
    b,
    h,
    y,
    C,
    k,
    p,
    q,
    E,
    D,
    P,
    B
  ];
}
class C1 extends we {
  constructor(t) {
    super(), pe(this, t, v1, p1, ke, {
      fileContents: 0,
      savePath: 1,
      allowClose: 2,
      onClose: 3,
      onSelect: 4
    });
  }
}
function S1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d = !!/*savePath*/
  e[3] && sa(e);
  const g = [z1, M1], b = [];
  function h(p, q) {
    return (
      /*currentQueryPath*/
      p[18] ? 0 : 1
    );
  }
  l = h(e), r = b[l] = g[l](e);
  function y(p) {
    e[38](p);
  }
  let C = {
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
  e[1] !== void 0 && (C.value = /*textInput*/
  e[1]), a = new a1({ props: C }), Ne.push(() => it(a, "value", y));
  let k = (
    /*llmAvailable*/
    e[11] && da(e)
  );
  return {
    c() {
      t = w("div"), d && d.c(), n = O(), r.c(), i = O(), o = w("div"), X(a.$$.fragment), s = O(), k && k.c(), u = _e(), m(t, "class", "px-4 pt-2 flex items-center mb-4 gap-2 shrink-0"), m(o, "class", "shrink h-2/3");
    },
    m(p, q) {
      M(p, t, q), d && d.m(t, null), _(t, n), b[l].m(t, null), M(p, i, q), M(p, o, q), G(a, o, null), M(p, s, q), k && k.m(p, q), M(p, u, q), c = !0;
    },
    p(p, q) {
      /*savePath*/
      p[3] ? d ? (d.p(p, q), q[0] & /*savePath*/
      8 && v(d, 1)) : (d = sa(p), d.c(), v(d, 1), d.m(t, n)) : d && (ie(), z(d, 1, 1, () => {
        d = null;
      }), oe());
      let E = l;
      l = h(p), l === E ? b[l].p(p, q) : (ie(), z(b[E], 1, 1, () => {
        b[E] = null;
      }), oe(), r = b[l], r ? r.p(p, q) : (r = b[l] = g[l](p), r.c()), v(r, 1), r.m(t, null));
      const D = {};
      q[0] & /*dataFields*/
      16 && (D.dataFields = /*dataFields*/
      p[4]), q[0] & /*onExplain*/
      64 && (D.onExplain = /*onExplain*/
      p[6]), q[0] & /*onQueryHistoryClick*/
      131072 && (D.onHistoryClick = /*onQueryHistoryClick*/
      p[17]), q[0] & /*savePath*/
      8 && (D.savesOnRun = !!/*savePath*/
      p[3]), !f && q[0] & /*textInput*/
      2 && (f = !0, D.value = /*textInput*/
      p[1], rt(() => f = !1)), a.$set(D), /*llmAvailable*/
      p[11] ? k ? (k.p(p, q), q[0] & /*llmAvailable*/
      2048 && v(k, 1)) : (k = da(p), k.c(), v(k, 1), k.m(u.parentNode, u)) : k && (ie(), z(k, 1, 1, () => {
        k = null;
      }), oe());
    },
    i(p) {
      c || (v(d), v(r), v(a.$$.fragment, p), v(k), c = !0);
    },
    o(p) {
      z(d), z(r), z(a.$$.fragment, p), z(k), c = !1;
    },
    d(p) {
      p && N(t), d && d.d(), b[l].d(), p && N(i), p && N(o), V(a), p && N(s), k && k.d(p), p && N(u);
    }
  };
}
function N1(e) {
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
    e[0]), t = new C1({ props: i }), Ne.push(() => it(t, "fileContents", r)), {
      c() {
        X(t.$$.fragment);
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
        o[0], rt(() => n = !1)), t.$set(f);
      },
      i(o) {
        l || (v(t.$$.fragment, o), l = !0);
      },
      o(o) {
        z(t.$$.fragment, o), l = !1;
      },
      d(o) {
        V(t, o);
      }
    }
  );
}
function sa(e) {
  let t, n, l, r, i;
  return n = new be({
    props: { icon: wa, class: "inline" }
  }), {
    c() {
      t = w("button"), X(n.$$.fragment), m(t, "class", "px-2 py-1.5 text-sm text-center font-semibold rounded transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100 whitespace-nowrap"), m(t, "title", "Browse saved queries (Ctrl+Q)");
    },
    m(o, a) {
      M(o, t, a), G(n, t, null), l = !0, r || (i = F(
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
      z(n.$$.fragment, o), l = !1;
    },
    d(o) {
      o && N(t), V(n), r = !1, i();
    }
  };
}
function M1(e) {
  let t;
  return {
    c() {
      t = w("h3"), t.textContent = "TempoQL Query", m(t, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100 pr-2 whitespace-nowrap truncate");
    },
    m(n, l) {
      M(n, t, l);
    },
    p: $,
    i: $,
    o: $,
    d(n) {
      n && N(t);
    }
  };
}
function z1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, g, b, h, y;
  const C = [L1, R1], k = [];
  function p(q, E) {
    return (
      /*isEditingName*/
      q[19] ? 0 : 1
    );
  }
  return t = p(e), n = k[t] = C[t](e), o = new be({ props: { icon: tr } }), s = new be({ props: { icon: Qr } }), d = new be({
    props: { icon: vt, class: "inline mr-2" }
  }), {
    c() {
      n.c(), l = O(), r = w("div"), i = w("button"), X(o.$$.fragment), a = O(), f = w("button"), X(s.$$.fragment), u = O(), c = w("button"), X(d.$$.fragment), g = x(`
          Query`), m(i, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), m(i, "title", "Duplicate this query (Ctrl+D)"), m(f, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), m(f, "title", "Delete this query (Ctrl+Shift+Backspace)"), m(r, "class", "flex items-center"), m(c, "class", "px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white whitespace-nowrap"), m(c, "title", "Create a new query at the top level");
    },
    m(q, E) {
      k[t].m(q, E), M(q, l, E), M(q, r, E), _(r, i), G(o, i, null), _(r, a), _(r, f), G(s, f, null), M(q, u, E), M(q, c, E), G(d, c, null), _(c, g), b = !0, h || (y = [
        F(i, "click", Re(
          /*duplicateQuery*/
          e[25]
        )),
        F(f, "click", Re(
          /*deleteQuery*/
          e[26]
        )),
        F(
          c,
          "click",
          /*click_handler_2*/
          e[37]
        )
      ], h = !0);
    },
    p(q, E) {
      let D = t;
      t = p(q), t === D ? k[t].p(q, E) : (ie(), z(k[D], 1, 1, () => {
        k[D] = null;
      }), oe(), n = k[t], n ? n.p(q, E) : (n = k[t] = C[t](q), n.c()), v(n, 1), n.m(l.parentNode, l));
    },
    i(q) {
      b || (v(n), v(o.$$.fragment, q), v(s.$$.fragment, q), v(d.$$.fragment, q), b = !0);
    },
    o(q) {
      z(n), z(o.$$.fragment, q), z(s.$$.fragment, q), z(d.$$.fragment, q), b = !1;
    },
    d(q) {
      k[t].d(q), q && N(l), q && N(r), V(o), V(s), q && N(u), q && N(c), V(d), h = !1, ve(y);
    }
  };
}
function R1(e) {
  let t, n, l, r, i;
  t = new lr({
    props: {
      class: "rounded-lg px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2 cursor-pointer",
      $$slots: {
        default: [
          q1,
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
    e[18].length > 1 && ca(e)
  );
  return {
    c() {
      X(t.$$.fragment), n = O(), o && o.c(), l = O(), r = w("div"), m(r, "class", "flex-auto");
    },
    m(a, f) {
      G(t, a, f), M(a, n, f), o && o.m(a, f), M(a, l, f), M(a, r, f), i = !0;
    },
    p(a, f) {
      const s = {};
      f[0] & /*currentQueryPath*/
      262144 | f[1] & /*$$scope, hovering*/
      12288 && (s.$$scope = { dirty: f, ctx: a }), t.$set(s), /*currentQueryPath*/
      a[18].length > 1 ? o ? o.p(a, f) : (o = ca(a), o.c(), o.m(l.parentNode, l)) : o && (o.d(1), o = null);
    },
    i(a) {
      i || (v(t.$$.fragment, a), i = !0);
    },
    o(a) {
      z(t.$$.fragment, a), i = !1;
    },
    d(a) {
      V(t, a), a && N(n), o && o.d(a), a && N(l), a && N(r);
    }
  };
}
function L1(e) {
  let t, n, l, r;
  return {
    c() {
      t = w("form"), n = w("input"), m(n, "type", "text"), m(n, "class", "flat-text-input w-full"), m(t, "class", "flex-auto");
    },
    m(i, o) {
      M(i, t, o), _(t, n), je(
        n,
        /*newName*/
        e[20]
      ), e[33](n), l || (r = [
        F(
          n,
          "input",
          /*input_input_handler*/
          e[32]
        ),
        F(
          n,
          "blur",
          /*blur_handler*/
          e[34]
        ),
        F(t, "submit", Re(Jt(
          /*submit_handler*/
          e[35]
        )))
      ], l = !0);
    },
    p(i, o) {
      o[0] & /*newName*/
      1048576 && n.value !== /*newName*/
      i[20] && je(
        n,
        /*newName*/
        i[20]
      );
    },
    i: $,
    o: $,
    d(i) {
      i && N(t), e[33](null), l = !1, ve(r);
    }
  };
}
function ua(e) {
  let t, n;
  return t = new be({
    props: {
      icon: jr,
      class: "pl-2 text-gray-900 dark:text-gray-100"
    }
  }), {
    c() {
      X(t.$$.fragment);
    },
    m(l, r) {
      G(t, l, r), n = !0;
    },
    p: $,
    i(l) {
      n || (v(t.$$.fragment, l), n = !0);
    },
    o(l) {
      z(t.$$.fragment, l), n = !1;
    },
    d(l) {
      V(t, l);
    }
  };
}
function q1(e) {
  let t, n = (
    /*currentQueryPath*/
    (e[18][
      /*currentQueryPath*/
      e[18].length - 1
    ] ?? "TempoQL Query") + ""
  ), l, r, i, o, a = (
    /*hovering*/
    e[43] && ua()
  );
  return {
    c() {
      t = w("h3"), l = x(n), r = O(), a && a.c(), i = _e(), m(t, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap truncate"), m(t, "title", "Rename this query (Ctrl+R)");
    },
    m(f, s) {
      M(f, t, s), _(t, l), M(f, r, s), a && a.m(f, s), M(f, i, s), o = !0;
    },
    p(f, s) {
      (!o || s[0] & /*currentQueryPath*/
      262144) && n !== (n = /*currentQueryPath*/
      (f[18][
        /*currentQueryPath*/
        f[18].length - 1
      ] ?? "TempoQL Query") + "") && fe(l, n), /*hovering*/
      f[43] ? a ? (a.p(f, s), s[1] & /*hovering*/
      4096 && v(a, 1)) : (a = ua(), a.c(), v(a, 1), a.m(i.parentNode, i)) : a && (ie(), z(a, 1, 1, () => {
        a = null;
      }), oe());
    },
    i(f) {
      o || (v(a), o = !0);
    },
    o(f) {
      z(a), o = !1;
    },
    d(f) {
      f && N(t), f && N(r), a && a.d(f), f && N(i);
    }
  };
}
function ca(e) {
  let t, n, l, r = (
    /*currentQueryPath*/
    e[18][
      /*currentQueryPath*/
      e[18].length - 2
    ] + ""
  ), i;
  return {
    c() {
      t = w("div"), n = x("in "), l = w("span"), i = x(r), m(l, "class", "font-mono"), m(t, "class", "text-sm text-gray-600 dark:text-gray-400 truncate min-w-0");
    },
    m(o, a) {
      M(o, t, a), _(t, n), _(t, l), _(l, i);
    },
    p(o, a) {
      a[0] & /*currentQueryPath*/
      262144 && r !== (r = /*currentQueryPath*/
      o[18][
        /*currentQueryPath*/
        o[18].length - 2
      ] + "") && fe(i, r);
    },
    d(o) {
      o && N(t);
    }
  };
}
function da(e) {
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
    e[2]), n = new l1({ props: o }), Ne.push(() => it(n, "question", i)), {
      c() {
        t = w("div"), X(n.$$.fragment), m(t, "class", "mt-4 w-full h-1/2 overflow-hidden");
      },
      m(a, f) {
        M(a, t, f), G(n, t, null), r = !0;
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
        a[2], rt(() => l = !1)), n.$set(s);
      },
      i(a) {
        r || (v(n.$$.fragment, a), r = !0);
      },
      o(a) {
        z(n.$$.fragment, a), r = !1;
      },
      d(a) {
        a && N(t), V(n);
      }
    }
  );
}
function E1(e) {
  let t, n, l, r;
  const i = [N1, S1], o = [];
  function a(f, s) {
    return (
      /*showingBrowser*/
      f[22] ? 0 : 1
    );
  }
  return n = a(e), l = o[n] = i[n](e), {
    c() {
      t = w("div"), l.c(), m(t, "class", "w-1/2 shrink-0 flex flex-col h-full z-0");
    },
    m(f, s) {
      M(f, t, s), o[n].m(t, null), r = !0;
    },
    p(f, s) {
      let u = n;
      n = a(f), n === u ? o[n].p(f, s) : (ie(), z(o[u], 1, 1, () => {
        o[u] = null;
      }), oe(), l = o[n], l ? l.p(f, s) : (l = o[n] = i[n](f), l.c()), v(l, 1), l.m(t, null));
    },
    i(f) {
      r || (v(l), r = !0);
    },
    o(f) {
      z(l), r = !1;
    },
    d(f) {
      f && N(t), o[n].d();
    }
  };
}
function D1(e, t, n) {
  let { fileContents: l = {} } = t, { savePath: r = "" } = t, { textInput: i = "" } = t, { dataFields: o = [] } = t, { onRun: a = () => {
  } } = t, { onExplain: f = () => {
  } } = t, { onLLMSubmit: s = () => {
  } } = t, { llmResponse: u = "" } = t, { llmLoading: c = !1 } = t, { llmError: d = "" } = t, { llmAvailable: g = !1 } = t, { apiStatus: b = "" } = t, { extractedQuery: h = "" } = t, { hasExtractedQuery: y = !1 } = t, { onQueryExtracted: C = () => {
  } } = t, { onHistoryClick: k = () => {
  } } = t, { onQueryHistoryClick: p = () => {
  } } = t, { aiQuestion: q = "" } = t, E = !1, D = [];
  function P(Y, Qe) {
    n(18, D = Y), n(1, i = Qe), n(22, E = !1);
  }
  let B = !1, L = null, A, R;
  function T(Y) {
    n(19, B = !1), Y != D[D.length - 1] && (Kr(l, [...D.slice(0, D.length - 1), Y]) && !confirm("This name already exists. Are you sure you want to overwrite the existing item?") || (n(0, l = Xa(l, D, [...D.slice(0, D.length - 1), Y])), n(18, D = [...D.slice(0, D.length - 1), Y])));
  }
  function W() {
    let Y = Xr(l, D);
    n(0, l = Y.contents), n(18, D = Y.queryPath);
  }
  function U() {
    confirm("Are you sure you want to delete this query? This action cannot be undone.") && (n(0, l = ar(l, D)), n(18, D = [])), console.error("deletin");
  }
  function Q() {
    D.length > 0 && n(0, l = Ka(l, D, i)), a();
  }
  let H = !1;
  function J(Y) {
    if (H && (Y.ctrlKey || Y.metaKey)) {
      if (r && Y.key === "r" && !Y.shiftKey) {
        Y.preventDefault(), n(19, B = !0);
        return;
      } else if (r && Y.key === "d" && !Y.shiftKey) {
        Y.preventDefault(), W();
        return;
      } else if (r && Y.key === "Backspace" && Y.shiftKey) {
        Y.preventDefault(), U();
        return;
      } else if (r && Y.key === "q" && D.length > 0) {
        Y.preventDefault(), n(22, E = !E);
        return;
      }
    }
  }
  mt(() => {
    H = !0, window.addEventListener("keydown", J);
  }), _a(() => {
    H = !1, window.removeEventListener("keydown", J);
  });
  const he = () => n(22, E = !1);
  function ne(Y) {
    l = Y, n(0, l);
  }
  const de = () => n(22, E = !0);
  function j() {
    L = this.value, n(20, L), n(19, B), n(18, D);
  }
  function te(Y) {
    Ne[Y ? "unshift" : "push"](() => {
      R = Y, n(21, R);
    });
  }
  const ue = () => T(L), K = () => {
    console.log("renaming!"), T(L);
  }, ae = () => n(19, B = !0), le = () => {
    let Y = Wr(l, D.slice(0, D.length - 1));
    console.log("result", Y), n(0, l = Y.contents), n(18, D = Y.queryPath), n(1, i = "");
  };
  function ce(Y) {
    i = Y, n(1, i);
  }
  const qe = (Y) => {
    n(1, i = Y), a();
  };
  function Te(Y) {
    q = Y, n(2, q);
  }
  return e.$$set = (Y) => {
    "fileContents" in Y && n(0, l = Y.fileContents), "savePath" in Y && n(3, r = Y.savePath), "textInput" in Y && n(1, i = Y.textInput), "dataFields" in Y && n(4, o = Y.dataFields), "onRun" in Y && n(5, a = Y.onRun), "onExplain" in Y && n(6, f = Y.onExplain), "onLLMSubmit" in Y && n(7, s = Y.onLLMSubmit), "llmResponse" in Y && n(8, u = Y.llmResponse), "llmLoading" in Y && n(9, c = Y.llmLoading), "llmError" in Y && n(10, d = Y.llmError), "llmAvailable" in Y && n(11, g = Y.llmAvailable), "apiStatus" in Y && n(12, b = Y.apiStatus), "extractedQuery" in Y && n(13, h = Y.extractedQuery), "hasExtractedQuery" in Y && n(14, y = Y.hasExtractedQuery), "onQueryExtracted" in Y && n(15, C = Y.onQueryExtracted), "onHistoryClick" in Y && n(16, k = Y.onHistoryClick), "onQueryHistoryClick" in Y && n(17, p = Y.onQueryHistoryClick), "aiQuestion" in Y && n(2, q = Y.aiQuestion);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*savePath, currentQueryPath*/
    262152 && r && D.length == 0 && n(22, E = !0), e.$$.dirty[0] & /*isEditingName, newName, currentQueryPath*/
    1835008 && (B && L == null ? n(20, L = D[D.length - 1] ?? null) : B || n(20, L = null)), e.$$.dirty[0] & /*editBox, oldEditBox*/
    270532608 && R !== A && (R && (R.focus(), R.select()), n(28, A = R));
  }, [
    l,
    i,
    q,
    r,
    o,
    a,
    f,
    s,
    u,
    c,
    d,
    g,
    b,
    h,
    y,
    C,
    k,
    p,
    D,
    B,
    L,
    R,
    E,
    P,
    T,
    W,
    U,
    Q,
    A,
    he,
    ne,
    de,
    j,
    te,
    ue,
    K,
    ae,
    le,
    ce,
    qe,
    Te
  ];
}
class T1 extends we {
  constructor(t) {
    super(), pe(
      this,
      t,
      D1,
      E1,
      ke,
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
function A1(e) {
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
    e[0]), t = new ru({ props: i }), Ne.push(() => it(t, "scopeName", r)), {
      c() {
        X(t.$$.fragment);
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
        o[0], rt(() => n = !1)), t.$set(f);
      },
      i(o) {
        l || (v(t.$$.fragment, o), l = !0);
      },
      o(o) {
        z(t.$$.fragment, o), l = !1;
      },
      d(o) {
        V(t, o);
      }
    }
  );
}
function O1(e) {
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
    e[7]), t = new H0({ props: i }), Ne.push(() => it(t, "textInput", r)), {
      c() {
        X(t.$$.fragment);
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
        o[7], rt(() => n = !1)), t.$set(f);
      },
      i(o) {
        l || (v(t.$$.fragment, o), l = !0);
      },
      o(o) {
        z(t.$$.fragment, o), l = !1;
      },
      d(o) {
        V(t, o);
      }
    }
  );
}
function P1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, g, b, h, y, C, k, p, q;
  function E(T) {
    e[62](T);
  }
  function D(T) {
    e[63](T);
  }
  function P(T) {
    e[64](T);
  }
  let B = {
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
  e[8] !== void 0 && (B.fileContents = /*$fileContents*/
  e[8]), /*$textInput*/
  e[7] !== void 0 && (B.textInput = /*$textInput*/
  e[7]), /*currentQuestion*/
  e[4] !== void 0 && (B.aiQuestion = /*currentQuestion*/
  e[4]), n = new T1({ props: B }), Ne.push(() => it(n, "fileContents", E)), Ne.push(() => it(n, "textInput", D)), Ne.push(() => it(n, "aiQuestion", P)), s = new Yf({
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
  const L = [O1, A1], A = [];
  function R(T, W) {
    return (
      /*activeTab*/
      T[1] === "results" ? 0 : (
        /*activeTab*/
        T[1] === "data-elements" ? 1 : -1
      )
    );
  }
  return ~(d = R(e)) && (g = A[d] = L[d](e)), h = new Xo({
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
  }), C = new Xo({
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
  }), p = new F0({
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
      t = w("main"), X(n.$$.fragment), o = O(), a = w("div"), f = w("div"), X(s.$$.fragment), u = O(), c = w("div"), g && g.c(), b = O(), X(h.$$.fragment), y = O(), X(C.$$.fragment), k = O(), X(p.$$.fragment), m(c, "class", "flex-auto w-full min-h-0 z-0 svelte-1pq5c6y"), m(f, "class", "w-full h-full rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden flex flex-col dark:bg-gray-900 svelte-1pq5c6y"), m(a, "class", "w-1/2 mb-2 svelte-1pq5c6y"), m(t, "class", "w-full bg-white dark:bg-gray-950 transition-colors duration-200 relative overflow-hidden flex svelte-1pq5c6y"), re(t, "height", "min(600px, max(400px, 70vh))");
    },
    m(T, W) {
      M(T, t, W), G(n, t, null), _(t, o), _(t, a), _(a, f), G(s, f, null), _(f, u), _(f, c), ~d && A[d].m(c, null), _(t, b), G(h, t, null), _(t, y), G(C, t, null), _(t, k), G(p, t, null), q = !0;
    },
    p(T, W) {
      const U = {};
      W[0] & /*$savePath*/
      512 && (U.savePath = /*$savePath*/
      T[9]), W[0] & /*dataFields*/
      32 && (U.dataFields = /*dataFields*/
      T[5]), W[0] & /*$llmResponse*/
      64 && (U.llmResponse = /*$llmResponse*/
      T[6]), W[0] & /*$llmLoading*/
      1024 && (U.llmLoading = /*$llmLoading*/
      T[10]), W[0] & /*$llmError*/
      2048 && (U.llmError = /*$llmError*/
      T[11]), W[0] & /*$llmAvailable*/
      4096 && (U.llmAvailable = /*$llmAvailable*/
      T[12]), W[0] & /*$apiStatus*/
      8192 && (U.apiStatus = /*$apiStatus*/
      T[13]), W[0] & /*$extractedQuery*/
      16384 && (U.extractedQuery = /*$extractedQuery*/
      T[14]), W[0] & /*$hasExtractedQuery*/
      32768 && (U.hasExtractedQuery = /*$hasExtractedQuery*/
      T[15]), !l && W[0] & /*$fileContents*/
      256 && (l = !0, U.fileContents = /*$fileContents*/
      T[8], rt(() => l = !1)), !r && W[0] & /*$textInput*/
      128 && (r = !0, U.textInput = /*$textInput*/
      T[7], rt(() => r = !1)), !i && W[0] & /*currentQuestion*/
      16 && (i = !0, U.aiQuestion = /*currentQuestion*/
      T[4], rt(() => i = !1)), n.$set(U);
      const Q = {};
      W[0] & /*activeTab*/
      2 && (Q.activeTab = /*activeTab*/
      T[1]), s.$set(Q);
      let H = d;
      d = R(T), d === H ? ~d && A[d].p(T, W) : (g && (ie(), z(A[H], 1, 1, () => {
        A[H] = null;
      }), oe()), ~d ? (g = A[d], g ? g.p(T, W) : (g = A[d] = L[d](T), g.c()), v(g, 1), g.m(c, null)) : g = null);
      const J = {};
      W[0] & /*showAIHistoryDropdown*/
      4 && (J.isVisible = /*showAIHistoryDropdown*/
      T[2]), W[0] & /*$aiHistory*/
      16777216 && (J.history = /*$aiHistory*/
      T[24]), h.$set(J);
      const he = {};
      W[0] & /*showQueryHistoryDropdown*/
      8 && (he.isVisible = /*showQueryHistoryDropdown*/
      T[3]), W[0] & /*$queryHistory*/
      33554432 && (he.history = /*$queryHistory*/
      T[25]), C.$set(he);
      const ne = {};
      W[0] & /*$isLoading*/
      4194304 && (ne.isLoading = /*$isLoading*/
      T[22]), W[0] & /*$loadingMessage*/
      8388608 && (ne.message = /*$loadingMessage*/
      T[23]), p.$set(ne);
    },
    i(T) {
      q || (v(n.$$.fragment, T), v(s.$$.fragment, T), v(g), v(h.$$.fragment, T), v(C.$$.fragment, T), v(p.$$.fragment, T), q = !0);
    },
    o(T) {
      z(n.$$.fragment, T), z(s.$$.fragment, T), z(g), z(h.$$.fragment, T), z(C.$$.fragment, T), z(p.$$.fragment, T), q = !1;
    },
    d(T) {
      T && N(t), V(n), V(s), ~d && A[d].d(), V(h), V(C), V(p);
    }
  };
}
function j1(e, t, n) {
  let l, r, i, o, a, f, s, u, c, d, g, b, h, y, C, k, p, q, E, D, P, B, { model: L } = t;
  const A = yf(L), { savePath: R, fileContents: T, values: W, listNames: U, runQuery: Q, handleLLMQuestion: H, handleLLMExplanation: J, subqueries: he, queryError: ne, scopes: de, scopeConcepts: j, handleScopeAnalysis: te, llmResponse: ue, llmLoading: K, llmError: ae, llmAvailable: le, llmExplanation: ce, apiStatus: qe, isLoading: Te, loadingMessage: Y, extractedQuery: Qe, hasExtractedQuery: bt, handleQueryExtraction: St, textInput: Ie, queryHistory: _t, aiHistory: ht } = A;
  I(e, R, (Z) => n(9, f = Z)), I(e, T, (Z) => n(8, a = Z)), I(e, W, (Z) => n(17, y = Z)), I(e, U, (Z) => n(61, o = Z)), I(e, he, (Z) => n(18, C = Z)), I(e, ne, (Z) => n(16, h = Z)), I(e, de, (Z) => n(20, p = Z)), I(e, j, (Z) => n(21, q = Z)), I(e, ue, (Z) => n(6, r = Z)), I(e, K, (Z) => n(10, s = Z)), I(e, ae, (Z) => n(11, u = Z)), I(e, le, (Z) => n(12, c = Z)), I(e, ce, (Z) => n(19, k = Z)), I(e, qe, (Z) => n(13, d = Z)), I(e, Te, (Z) => n(22, E = Z)), I(e, Y, (Z) => n(23, D = Z)), I(e, Qe, (Z) => n(14, g = Z)), I(e, bt, (Z) => n(15, b = Z)), I(e, Ie, (Z) => n(7, i = Z)), I(e, _t, (Z) => n(25, B = Z)), I(e, ht, (Z) => n(24, P = Z));
  let ee = "", Ee = "data-elements", He = !1, Be = !1, Oe = "", jn = { top: 0, left: 0 }, Qn = { top: 0, left: 0 };
  function In(Z) {
    n(4, Oe = Z), H(Z);
  }
  function Hn(Z) {
    n(1, Ee = Z);
  }
  function Bn() {
    console.log("text input", i), i.trim() && Q(i), n(1, Ee = "results");
  }
  function xn() {
    n(2, He = !He);
  }
  function Fn() {
    n(3, Be = !Be);
  }
  function sr(Z) {
    console.log("📚 AI History item selected:", Z), n(2, He = !1), n(3, Be = !1), Z.query && (ge(Ie, i = Z.query, i), L.set("text_input", Z.query), L.save_changes()), Z.question && n(4, Oe = Z.question), Z.answer && ge(ue, r = Z.answer, r);
  }
  function Gn() {
    n(2, He = !1);
  }
  function ur() {
    n(3, Be = !1);
  }
  function $t(Z) {
    a = Z, T.set(a);
  }
  function Vn(Z) {
    i = Z, Ie.set(i);
  }
  function Wn(Z) {
    Oe = Z, n(4, Oe);
  }
  function Nt(Z) {
    i = Z, Ie.set(i);
  }
  const en = (Z) => {
    te(Z, !1);
  }, tn = () => {
    te(ee, !0);
  }, ot = (Z, ft) => {
    ge(Ie, i = i + `{${ft}; scope = ${Z}}`, i);
  };
  function at(Z) {
    ee = Z, n(0, ee);
  }
  return e.$$set = (Z) => {
    "model" in Z && n(60, L = Z.model);
  }, e.$$.update = () => {
    e.$$.dirty[1] & /*$listNames*/
    1073741824 && n(5, l = o || []);
  }, [
    ee,
    Ee,
    He,
    Be,
    Oe,
    l,
    r,
    i,
    a,
    f,
    s,
    u,
    c,
    d,
    g,
    b,
    h,
    y,
    C,
    k,
    p,
    q,
    E,
    D,
    P,
    B,
    R,
    T,
    W,
    U,
    J,
    he,
    ne,
    de,
    j,
    te,
    ue,
    K,
    ae,
    le,
    ce,
    qe,
    Te,
    Y,
    Qe,
    bt,
    St,
    Ie,
    _t,
    ht,
    jn,
    Qn,
    In,
    Hn,
    Bn,
    xn,
    Fn,
    sr,
    Gn,
    ur,
    L,
    o,
    $t,
    Vn,
    Wn,
    Nt,
    en,
    tn,
    ot,
    at
  ];
}
class Q1 extends we {
  constructor(t) {
    super(), pe(this, t, j1, P1, ke, { model: 60 }, null, [-1, -1, -1]);
  }
}
function I1(e) {
  new Q1({
    target: e.el,
    props: {
      model: e.model
    }
  });
}
export {
  I1 as render
};
