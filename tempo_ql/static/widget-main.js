function G() {
}
function ia(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function Mo(e) {
  return e();
}
function Ti() {
  return /* @__PURE__ */ Object.create(null);
}
function Re(e) {
  e.forEach(Mo);
}
function lt(e) {
  return typeof e == "function";
}
function fe(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function ra(e) {
  return Object.keys(e).length === 0;
}
function Ro(e, ...t) {
  if (e == null)
    return G;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function P(e, t, n) {
  e.$$.on_destroy.push(Ro(t, n));
}
function Fe(e, t, n, l) {
  if (e) {
    const i = zo(e, t, n, l);
    return e[0](i);
  }
}
function zo(e, t, n, l) {
  return e[1] && l ? ia(n.ctx.slice(), e[1](l(t))) : n.ctx;
}
function Pe(e, t, n, l) {
  if (e[2] && l) {
    const i = e[2](l(n));
    if (t.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const r = [], o = Math.max(t.dirty.length, i.length);
      for (let a = 0; a < o; a += 1)
        r[a] = t.dirty[a] | i[a];
      return r;
    }
    return t.dirty | i;
  }
  return t.dirty;
}
function je(e, t, n, l, i, r) {
  if (i) {
    const o = zo(t, n, l, r);
    e.p(o, i);
  }
}
function Ie(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let l = 0; l < n; l++)
      t[l] = -1;
    return t;
  }
  return -1;
}
function Ci(e) {
  const t = {};
  for (const n in e)
    t[n] = !0;
  return t;
}
function ie(e, t, n) {
  return e.set(n), t;
}
function _(e, t) {
  e.appendChild(t);
}
function A(e, t, n) {
  e.insertBefore(t, n || null);
}
function R(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Ge(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function k(e) {
  return document.createElement(e);
}
function ge(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function B(e) {
  return document.createTextNode(e);
}
function H() {
  return B(" ");
}
function ue() {
  return B("");
}
function re(e, t, n, l) {
  return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
}
function oa(e) {
  return function(t) {
    return t.stopPropagation(), e.call(this, t);
  };
}
function b(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function aa(e) {
  return Array.from(e.childNodes);
}
function Z(e, t) {
  t = "" + t, e.data !== t && (e.data = t);
}
function Ol(e, t) {
  e.value = t ?? "";
}
function W(e, t, n, l) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, l ? "important" : "");
}
let Cl;
function sa() {
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
function fa(e, t) {
  getComputedStyle(e).position === "static" && (e.style.position = "relative");
  const l = k("iframe");
  l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), l.setAttribute("aria-hidden", "true"), l.tabIndex = -1;
  const i = sa();
  let r;
  return i ? (l.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", r = re(window, "message", (o) => {
    o.source === l.contentWindow && t();
  })) : (l.src = "about:blank", l.onload = () => {
    r = re(l.contentWindow, "resize", t), t();
  }), _(e, l), () => {
    (i || r && l.contentWindow) && r(), R(l);
  };
}
function J(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
function ua(e, t, { bubbles: n = !1, cancelable: l = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(e, n, l, t), i;
}
class Yl {
  constructor(t = !1) {
    this.is_svg = !1, this.is_svg = t, this.e = this.n = null;
  }
  c(t) {
    this.h(t);
  }
  m(t, n, l = null) {
    this.e || (this.is_svg ? this.e = ge(n.nodeName) : this.e = k(n.nodeType === 11 ? "TEMPLATE" : n.nodeName), this.t = n.tagName !== "TEMPLATE" ? n : n.content, this.c(t)), this.i(l);
  }
  h(t) {
    this.e.innerHTML = t, this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes);
  }
  i(t) {
    for (let n = 0; n < this.n.length; n += 1)
      A(this.t, this.n[n], t);
  }
  p(t) {
    this.d(), this.h(t), this.i(this.a);
  }
  d() {
    this.n.forEach(R);
  }
}
let gn;
function hn(e) {
  gn = e;
}
function kn() {
  if (!gn)
    throw new Error("Function called outside component initialization");
  return gn;
}
function st(e) {
  kn().$$.on_mount.push(e);
}
function ca(e) {
  kn().$$.on_destroy.push(e);
}
function Ao() {
  const e = kn();
  return (t, n, { cancelable: l = !1 } = {}) => {
    const i = e.$$.callbacks[t];
    if (i) {
      const r = ua(t, n, { cancelable: l });
      return i.slice().forEach((o) => {
        o.call(e, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
function da(e, t) {
  return kn().$$.context.set(e, t), t;
}
function wn(e) {
  return kn().$$.context.get(e);
}
function qi(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((l) => l.call(this, t));
}
const Tt = [], Me = [];
let qt = [];
const yi = [], ma = /* @__PURE__ */ Promise.resolve();
let pi = !1;
function ba() {
  pi || (pi = !0, ma.then(We));
}
function Hl(e) {
  qt.push(e);
}
function xi(e) {
  yi.push(e);
}
const bi = /* @__PURE__ */ new Set();
let Dt = 0;
function We() {
  if (Dt !== 0)
    return;
  const e = gn;
  do {
    try {
      for (; Dt < Tt.length; ) {
        const t = Tt[Dt];
        Dt++, hn(t), ha(t.$$);
      }
    } catch (t) {
      throw Tt.length = 0, Dt = 0, t;
    }
    for (hn(null), Tt.length = 0, Dt = 0; Me.length; )
      Me.pop()();
    for (let t = 0; t < qt.length; t += 1) {
      const n = qt[t];
      bi.has(n) || (bi.add(n), n());
    }
    qt.length = 0;
  } while (Tt.length);
  for (; yi.length; )
    yi.pop()();
  pi = !1, bi.clear(), hn(e);
}
function ha(e) {
  if (e.fragment !== null) {
    e.update(), Re(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Hl);
  }
}
function ga(e) {
  const t = [], n = [];
  qt.forEach((l) => e.indexOf(l) === -1 ? t.push(l) : n.push(l)), n.forEach((l) => l()), qt = t;
}
const Tl = /* @__PURE__ */ new Set();
let rt;
function ne() {
  rt = {
    r: 0,
    c: [],
    p: rt
    // parent group
  };
}
function le() {
  rt.r || Re(rt.c), rt = rt.p;
}
function C(e, t) {
  e && e.i && (Tl.delete(e), e.i(t));
}
function z(e, t, n, l) {
  if (e && e.o) {
    if (Tl.has(e))
      return;
    Tl.add(e), rt.c.push(() => {
      Tl.delete(e), l && (n && e.d(1), l());
    }), e.o(t);
  } else
    l && l();
}
function Mi(e, t, n) {
  const l = e.$$.props[t];
  l !== void 0 && (e.$$.bound[l] = n, n(e.$$.ctx[l]));
}
function X(e) {
  e && e.c();
}
function K(e, t, n, l) {
  const { fragment: i, after_update: r } = e.$$;
  i && i.m(t, n), l || Hl(() => {
    const o = e.$$.on_mount.map(Mo).filter(lt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : Re(o), e.$$.on_mount = [];
  }), r.forEach(Hl);
}
function Y(e, t) {
  const n = e.$$;
  n.fragment !== null && (ga(n.after_update), Re(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function _a(e, t) {
  e.$$.dirty[0] === -1 && (Tt.push(e), ba(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ce(e, t, n, l, i, r, o, a = [-1]) {
  const s = gn;
  hn(e);
  const f = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: G,
    not_equal: i,
    bound: Ti(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: Ti(),
    dirty: a,
    skip_bound: !1,
    root: t.target || s.$$.root
  };
  o && o(f.root);
  let u = !1;
  if (f.ctx = n ? n(e, t.props || {}, (c, d, ...m) => {
    const h = m.length ? m[0] : d;
    return f.ctx && i(f.ctx[c], f.ctx[c] = h) && (!f.skip_bound && f.bound[c] && f.bound[c](h), u && _a(e, c)), d;
  }) : [], f.update(), u = !0, Re(f.before_update), f.fragment = l ? l(f.ctx) : !1, t.target) {
    if (t.hydrate) {
      const c = aa(t.target);
      f.fragment && f.fragment.l(c), c.forEach(R);
    } else
      f.fragment && f.fragment.c();
    t.intro && C(e.$$.fragment), K(e, t.target, t.anchor, t.customElement), We();
  }
  hn(s);
}
class de {
  $destroy() {
    Y(this, 1), this.$destroy = G;
  }
  $on(t, n) {
    if (!lt(n))
      return G;
    const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return l.push(n), () => {
      const i = l.indexOf(n);
      i !== -1 && l.splice(i, 1);
    };
  }
  $set(t) {
    this.$$set && !ra(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Nt = [];
function ya(e, t) {
  return {
    subscribe: te(e, t).subscribe
  };
}
function te(e, t = G) {
  let n;
  const l = /* @__PURE__ */ new Set();
  function i(a) {
    if (fe(e, a) && (e = a, n)) {
      const s = !Nt.length;
      for (const f of l)
        f[1](), Nt.push(f, e);
      if (s) {
        for (let f = 0; f < Nt.length; f += 2)
          Nt[f][0](Nt[f + 1]);
        Nt.length = 0;
      }
    }
  }
  function r(a) {
    i(a(e));
  }
  function o(a, s = G) {
    const f = [a, s];
    return l.add(f), l.size === 1 && (n = t(i) || G), a(e), () => {
      l.delete(f), l.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: r, subscribe: o };
}
function me(e, t, n) {
  const l = !Array.isArray(e), i = l ? [e] : e, r = t.length < 2;
  return ya(n, (o) => {
    let a = !1;
    const s = [];
    let f = 0, u = G;
    const c = () => {
      if (f)
        return;
      u();
      const m = t(l ? s[0] : s, o);
      r ? o(m) : u = lt(m) ? m : G;
    }, d = i.map((m, h) => Ro(m, (g) => {
      s[h] = g, f &= ~(1 << h), a && c();
    }, () => {
      f |= 1 << h;
    }));
    return a = !0, c(), function() {
      Re(d), u(), a = !1;
    };
  });
}
function ye(e, t, n) {
  const l = t, i = te(e.get(l) || n);
  return e.on("change:" + l, (r, o) => i.set(o), null), e.onAttach && e.onAttach(async () => {
    let r = await e.fetch(l);
    i.set(r);
  }), {
    set: (r) => {
      i.set(r), e.set(l, r), e.save_changes();
    },
    subscribe: i.subscribe,
    update: (r) => {
      i.update((o) => {
        let a = r(o);
        return e.set(l, a), e.save_changes(), a;
      });
    }
  };
}
function pa(e) {
  const t = ye(e, "type", "meds"), n = ye(e, "values", {}), l = ye(e, "list_names", {
    attributes: [],
    events: [],
    intervals: []
  }), i = ye(e, "subqueries", {}), r = ye(e, "query_error", ""), o = ye(e, "text_input", ""), a = ye(e, "scopes", []), s = ye(e, "scope_concepts", {}), f = ye(e, "isLoading", !1), u = ye(e, "loadingMessage", ""), c = ye(e, "llm_available", !1), d = ye(e, "llm_response", ""), m = ye(e, "llm_loading", !1), h = ye(e, "llm_error", ""), g = ye(e, "api_status", "Checking API connection..."), p = ye(e, "extracted_query", ""), w = ye(e, "llm_explanation", ""), v = ye(e, "has_extracted_query", !1);
  let M = "";
  return {
    // Reactive stores
    type: t,
    values: n,
    listNames: l,
    subqueries: i,
    queryError: r,
    scopes: a,
    scopeConcepts: s,
    isLoading: f,
    loadingMessage: u,
    llmResponse: d,
    llmLoading: m,
    llmError: h,
    llmAvailable: c,
    apiStatus: g,
    extractedQuery: p,
    llmExplanation: w,
    hasExtractedQuery: v,
    textInput: o,
    runQuery: (N) => {
      e.set("text_input", N), e.set("process_trigger", "run"), e.save_changes();
    },
    // LLM question handler
    handleLLMQuestion: (N, q = "generate") => {
      console.log("🤖 LLM Question submitted:", N, "Mode:", q), e.set("llm_question", N), e.set("llm_mode", q), e.set("llm_trigger", "ask"), e.save_changes();
    },
    // Query extraction handler - triggered when AI extracts a query
    handleQueryExtraction: () => {
      let N = "";
      p.subscribe((q) => N = q)(), N && N !== M ? (console.log(
        "🔄 Query extracted from AI response:",
        N
      ), console.log("🔄 Current text input:", M), console.log("🔄 Updating text input with extracted query"), M = N, e.set("text_input", N), e.save_changes()) : N === M && console.log(
        "🔄 Extracted query is same as current input, no update needed"
      );
    },
    // Scope analysis handler
    handleScopeAnalysis: (N, q = !1) => {
      console.log(
        "🔍 Scope Analysis requested for:",
        N,
        q ? "(force refresh)" : ""
      );
      const L = q ? `${N}:force` : N;
      e.set("scope_analysis_trigger", L), e.save_changes();
    }
  };
}
function ka() {
  const t = (typeof window < "u" ? localStorage.getItem("theme") : "dark") || "dark", { subscribe: n, set: l, update: i } = te(t);
  if (typeof window < "u") {
    const r = document.documentElement;
    t === "dark" ? r.classList.add("dark") : r.classList.remove("dark");
  }
  return {
    subscribe: n,
    toggle: () => i((r) => {
      const o = r === "dark" ? "light" : "dark";
      if (typeof window < "u") {
        localStorage.setItem("theme", o);
        const a = document.documentElement;
        o === "dark" ? a.classList.add("dark") : a.classList.remove("dark");
      }
      return o;
    }),
    set: (r) => {
      if (typeof window < "u") {
        localStorage.setItem("theme", r);
        const o = document.documentElement;
        r === "dark" ? o.classList.add("dark") : o.classList.remove("dark");
      }
      l(r);
    }
  };
}
const Oi = ka();
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Fl = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [512, 512, [], "f077", "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
}, wa = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, va = wa, Sa = {
  prefix: "fas",
  iconName: "code",
  icon: [640, 512, [], "f121", "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]
}, Ca = {
  prefix: "fas",
  iconName: "bolt-lightning",
  icon: [384, 512, [], "e0b7", "M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z"]
}, Lo = {
  prefix: "fas",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
}, xa = {
  prefix: "fas",
  iconName: "sun",
  icon: [512, 512, [9728], "f185", "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]
}, Ma = {
  prefix: "fas",
  iconName: "play",
  icon: [384, 512, [9654], "f04b", "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]
}, Ra = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, za = Ra, Be = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, Ht = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, Aa = {
  prefix: "fas",
  iconName: "moon",
  icon: [384, 512, [127769, 9214], "f186", "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]
}, La = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, Eo = La, Ea = {
  prefix: "fas",
  iconName: "database",
  icon: [448, 512, [], "f1c0", "M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z"]
}, Da = {
  prefix: "fas",
  iconName: "circle-xmark",
  icon: [512, 512, [61532, "times-circle", "xmark-circle"], "f057", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]
}, Na = Da, xl = parseFloat;
function ki(e, t = ";") {
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
function Ta(e, t, n, l) {
  let i, r;
  const o = "1em";
  let a, s, f, u = "-.125em";
  const c = "visible";
  return l && (f = "center", r = "1.25em"), n && (i = n), t && (t == "lg" ? (s = "1.33333em", a = ".75em", u = "-.225em") : t == "xs" ? s = ".75em" : t == "sm" ? s = ".875em" : s = t.replace("x", "em")), ki([
    ki({
      float: i,
      width: r,
      height: o,
      "line-height": a,
      "font-size": s,
      "text-align": f,
      "vertical-align": u,
      "transform-origin": "center",
      overflow: c
    }),
    e
  ]);
}
function qa(e, t, n, l, i, r = 1, o = "", a = "") {
  let s = 1, f = 1;
  return i && (i == "horizontal" ? s = -1 : i == "vertical" ? f = -1 : s = f = -1), ki(
    [
      `translate(${xl(t) * r}${o},${xl(n) * r}${o})`,
      `scale(${s * xl(e)},${f * xl(e)})`,
      l && `rotate(${l}${a})`
    ],
    " "
  );
}
function Hi(e) {
  let t, n, l, i, r, o, a, s;
  function f(d, m) {
    return typeof /*i*/
    d[10][4] == "string" ? Ha : Oa;
  }
  let u = f(e), c = u(e);
  return {
    c() {
      t = ge("svg"), n = ge("g"), l = ge("g"), c.c(), b(
        l,
        "transform",
        /*transform*/
        e[12]
      ), b(n, "transform", i = "translate(" + /*i*/
      e[10][0] / 2 + " " + /*i*/
      e[10][1] / 2 + ")"), b(n, "transform-origin", r = /*i*/
      e[10][0] / 4 + " 0"), b(t, "id", o = /*id*/
      e[1] || void 0), b(t, "class", a = "svelte-fa " + /*clazz*/
      e[0] + " svelte-1cj2gr0"), b(
        t,
        "style",
        /*s*/
        e[11]
      ), b(t, "viewBox", s = "0 0 " + /*i*/
      e[10][0] + " " + /*i*/
      e[10][1]), b(t, "aria-hidden", "true"), b(t, "role", "img"), b(t, "xmlns", "http://www.w3.org/2000/svg"), J(
        t,
        "pulse",
        /*pulse*/
        e[4]
      ), J(
        t,
        "spin",
        /*spin*/
        e[3]
      );
    },
    m(d, m) {
      A(d, t, m), _(t, n), _(n, l), c.m(l, null);
    },
    p(d, m) {
      u === (u = f(d)) && c ? c.p(d, m) : (c.d(1), c = u(d), c && (c.c(), c.m(l, null))), m & /*transform*/
      4096 && b(
        l,
        "transform",
        /*transform*/
        d[12]
      ), m & /*i*/
      1024 && i !== (i = "translate(" + /*i*/
      d[10][0] / 2 + " " + /*i*/
      d[10][1] / 2 + ")") && b(n, "transform", i), m & /*i*/
      1024 && r !== (r = /*i*/
      d[10][0] / 4 + " 0") && b(n, "transform-origin", r), m & /*id*/
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
      1024 && s !== (s = "0 0 " + /*i*/
      d[10][0] + " " + /*i*/
      d[10][1]) && b(t, "viewBox", s), m & /*clazz, pulse*/
      17 && J(
        t,
        "pulse",
        /*pulse*/
        d[4]
      ), m & /*clazz, spin*/
      9 && J(
        t,
        "spin",
        /*spin*/
        d[3]
      );
    },
    d(d) {
      d && R(t), c.d();
    }
  };
}
function Oa(e) {
  let t, n, l, i, r, o, a, s, f, u;
  return {
    c() {
      t = ge("path"), o = ge("path"), b(t, "d", n = /*i*/
      e[10][4][0]), b(t, "fill", l = /*secondaryColor*/
      e[6] || /*color*/
      e[2] || "currentColor"), b(t, "fill-opacity", i = /*swapOpacity*/
      e[9] != !1 ? (
        /*primaryOpacity*/
        e[7]
      ) : (
        /*secondaryOpacity*/
        e[8]
      )), b(t, "transform", r = "translate(" + /*i*/
      e[10][0] / -2 + " " + /*i*/
      e[10][1] / -2 + ")"), b(o, "d", a = /*i*/
      e[10][4][1]), b(o, "fill", s = /*primaryColor*/
      e[5] || /*color*/
      e[2] || "currentColor"), b(o, "fill-opacity", f = /*swapOpacity*/
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
      A(c, t, d), A(c, o, d);
    },
    p(c, d) {
      d & /*i*/
      1024 && n !== (n = /*i*/
      c[10][4][0]) && b(t, "d", n), d & /*secondaryColor, color*/
      68 && l !== (l = /*secondaryColor*/
      c[6] || /*color*/
      c[2] || "currentColor") && b(t, "fill", l), d & /*swapOpacity, primaryOpacity, secondaryOpacity*/
      896 && i !== (i = /*swapOpacity*/
      c[9] != !1 ? (
        /*primaryOpacity*/
        c[7]
      ) : (
        /*secondaryOpacity*/
        c[8]
      )) && b(t, "fill-opacity", i), d & /*i*/
      1024 && r !== (r = "translate(" + /*i*/
      c[10][0] / -2 + " " + /*i*/
      c[10][1] / -2 + ")") && b(t, "transform", r), d & /*i*/
      1024 && a !== (a = /*i*/
      c[10][4][1]) && b(o, "d", a), d & /*primaryColor, color*/
      36 && s !== (s = /*primaryColor*/
      c[5] || /*color*/
      c[2] || "currentColor") && b(o, "fill", s), d & /*swapOpacity, secondaryOpacity, primaryOpacity*/
      896 && f !== (f = /*swapOpacity*/
      c[9] != !1 ? (
        /*secondaryOpacity*/
        c[8]
      ) : (
        /*primaryOpacity*/
        c[7]
      )) && b(o, "fill-opacity", f), d & /*i*/
      1024 && u !== (u = "translate(" + /*i*/
      c[10][0] / -2 + " " + /*i*/
      c[10][1] / -2 + ")") && b(o, "transform", u);
    },
    d(c) {
      c && R(t), c && R(o);
    }
  };
}
function Ha(e) {
  let t, n, l, i;
  return {
    c() {
      t = ge("path"), b(t, "d", n = /*i*/
      e[10][4]), b(t, "fill", l = /*color*/
      e[2] || /*primaryColor*/
      e[5] || "currentColor"), b(t, "transform", i = "translate(" + /*i*/
      e[10][0] / -2 + " " + /*i*/
      e[10][1] / -2 + ")");
    },
    m(r, o) {
      A(r, t, o);
    },
    p(r, o) {
      o & /*i*/
      1024 && n !== (n = /*i*/
      r[10][4]) && b(t, "d", n), o & /*color, primaryColor*/
      36 && l !== (l = /*color*/
      r[2] || /*primaryColor*/
      r[5] || "currentColor") && b(t, "fill", l), o & /*i*/
      1024 && i !== (i = "translate(" + /*i*/
      r[10][0] / -2 + " " + /*i*/
      r[10][1] / -2 + ")") && b(t, "transform", i);
    },
    d(r) {
      r && R(t);
    }
  };
}
function Fa(e) {
  let t, n = (
    /*i*/
    e[10][4] && Hi(e)
  );
  return {
    c() {
      n && n.c(), t = ue();
    },
    m(l, i) {
      n && n.m(l, i), A(l, t, i);
    },
    p(l, [i]) {
      /*i*/
      l[10][4] ? n ? n.p(l, i) : (n = Hi(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: G,
    o: G,
    d(l) {
      n && n.d(l), l && R(t);
    }
  };
}
function Pa(e, t, n) {
  let { class: l = "" } = t, { id: i = "" } = t, { style: r = "" } = t, { icon: o } = t, { size: a = "" } = t, { color: s = "" } = t, { fw: f = !1 } = t, { pull: u = "" } = t, { scale: c = 1 } = t, { translateX: d = 0 } = t, { translateY: m = 0 } = t, { rotate: h = "" } = t, { flip: g = !1 } = t, { spin: p = !1 } = t, { pulse: w = !1 } = t, { primaryColor: v = "" } = t, { secondaryColor: M = "" } = t, { primaryOpacity: N = 1 } = t, { secondaryOpacity: q = 0.4 } = t, { swapOpacity: L = !1 } = t, D, O, T;
  return e.$$set = (S) => {
    "class" in S && n(0, l = S.class), "id" in S && n(1, i = S.id), "style" in S && n(13, r = S.style), "icon" in S && n(14, o = S.icon), "size" in S && n(15, a = S.size), "color" in S && n(2, s = S.color), "fw" in S && n(16, f = S.fw), "pull" in S && n(17, u = S.pull), "scale" in S && n(18, c = S.scale), "translateX" in S && n(19, d = S.translateX), "translateY" in S && n(20, m = S.translateY), "rotate" in S && n(21, h = S.rotate), "flip" in S && n(22, g = S.flip), "spin" in S && n(3, p = S.spin), "pulse" in S && n(4, w = S.pulse), "primaryColor" in S && n(5, v = S.primaryColor), "secondaryColor" in S && n(6, M = S.secondaryColor), "primaryOpacity" in S && n(7, N = S.primaryOpacity), "secondaryOpacity" in S && n(8, q = S.secondaryOpacity), "swapOpacity" in S && n(9, L = S.swapOpacity);
  }, e.$$.update = () => {
    e.$$.dirty & /*icon*/
    16384 && n(10, D = o && o.icon || [0, 0, "", [], ""]), e.$$.dirty & /*style, size, pull, fw*/
    237568 && n(11, O = Ta(r, a, u, f)), e.$$.dirty & /*scale, translateX, translateY, rotate, flip*/
    8126464 && n(12, T = qa(c, d, m, h, g, 512));
  }, [
    l,
    i,
    s,
    p,
    w,
    v,
    M,
    N,
    q,
    L,
    D,
    O,
    T,
    r,
    o,
    a,
    f,
    u,
    c,
    d,
    m,
    h,
    g
  ];
}
class we extends de {
  constructor(t) {
    super(), ce(this, t, Pa, Fa, fe, {
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
function ja(e) {
  let t, n;
  return t = new we({ props: { icon: Aa } }), {
    c() {
      X(t.$$.fragment);
    },
    m(l, i) {
      K(t, l, i), n = !0;
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
function Ia(e) {
  let t, n;
  return t = new we({ props: { icon: xa } }), {
    c() {
      X(t.$$.fragment);
    },
    m(l, i) {
      K(t, l, i), n = !0;
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
function Qa(e) {
  let t, n, l, i, r, o;
  const a = [Ia, ja], s = [];
  function f(u, c) {
    return (
      /*$theme*/
      u[0] === "dark" ? 0 : 1
    );
  }
  return n = f(e), l = s[n] = a[n](e), {
    c() {
      t = k("button"), l.c(), b(t, "class", "px-3 py-2 rounded-md bg-slate-200 hover:bg-slate-200/50 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors duration-200"), b(t, "title", "Toggle theme");
    },
    m(u, c) {
      A(u, t, c), s[n].m(t, null), i = !0, r || (o = re(
        t,
        "click",
        /*toggleTheme*/
        e[1]
      ), r = !0);
    },
    p(u, [c]) {
      let d = n;
      n = f(u), n === d ? s[n].p(u, c) : (ne(), z(s[d], 1, 1, () => {
        s[d] = null;
      }), le(), l = s[n], l ? l.p(u, c) : (l = s[n] = a[n](u), l.c()), C(l, 1), l.m(t, null));
    },
    i(u) {
      i || (C(l), i = !0);
    },
    o(u) {
      z(l), i = !1;
    },
    d(u) {
      u && R(t), s[n].d(), r = !1, o();
    }
  };
}
function Ba(e, t, n) {
  let l;
  P(e, Oi, (r) => n(0, l = r));
  function i() {
    console.log("Theme toggle clicked, current theme:", l), Oi.toggle();
  }
  return e.$$.update = () => {
    if (e.$$.dirty & /*$theme*/
    1 && (console.log("Theme changed to:", l), typeof window < "u")) {
      const r = document.documentElement;
      console.log("HTML classes:", r.className), console.log("Has dark class:", r.classList.contains("dark"));
    }
  }, [l, i];
}
class Ga extends de {
  constructor(t) {
    super(), ce(this, t, Ba, Qa, fe, {});
  }
}
function Fi(e, t, n) {
  const l = e.slice();
  return l[4] = t[n], l;
}
function Pi(e) {
  let t, n, l, i = (
    /*tab*/
    e[4].label + ""
  ), r, o, a, s, f;
  n = new we({
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
      t = k("button"), X(n.$$.fragment), l = H(), r = B(i), b(t, "class", o = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*activeTab*/
      (e[0] === /*tab*/
      e[4].id ? "bg-slate-600 text-white dark:bg-slate-200 dark:text-slate-800" : "bg-slate-200 hover:bg-slate-200/50 dark:bg-slate-700 dark:hover:bg-slate-600"));
    },
    m(c, d) {
      A(c, t, d), K(n, t, null), _(t, l), _(t, r), a = !0, s || (f = re(t, "click", u), s = !0);
    },
    p(c, d) {
      e = c, (!a || d & /*activeTab*/
      1 && o !== (o = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*activeTab*/
      (e[0] === /*tab*/
      e[4].id ? "bg-slate-600 text-white dark:bg-slate-200 dark:text-slate-800" : "bg-slate-200 hover:bg-slate-200/50 dark:bg-slate-700 dark:hover:bg-slate-600"))) && b(t, "class", o);
    },
    i(c) {
      a || (C(n.$$.fragment, c), a = !0);
    },
    o(c) {
      z(n.$$.fragment, c), a = !1;
    },
    d(c) {
      c && R(t), Y(n), s = !1, f();
    }
  };
}
function Va(e) {
  let t, n, l, i, r, o, a, s = (
    /*tabs*/
    e[2]
  ), f = [];
  for (let c = 0; c < s.length; c += 1)
    f[c] = Pi(Fi(e, s, c));
  const u = (c) => z(f[c], 1, 1, () => {
    f[c] = null;
  });
  return o = new Ga({}), {
    c() {
      t = k("div"), n = k("nav");
      for (let c = 0; c < f.length; c += 1)
        f[c].c();
      l = H(), i = k("div"), r = H(), X(o.$$.fragment), b(i, "class", "flex-auto"), b(n, "class", "flex gap-2 px-4 py-2"), b(n, "aria-label", "Tabs"), b(t, "class", "w-full bg-slate-300 dark:bg-slate-800 dark:text-white");
    },
    m(c, d) {
      A(c, t, d), _(t, n);
      for (let m = 0; m < f.length; m += 1)
        f[m] && f[m].m(n, null);
      _(n, l), _(n, i), _(n, r), K(o, n, null), a = !0;
    },
    p(c, [d]) {
      if (d & /*activeTab, tabs, onTabChange*/
      7) {
        s = /*tabs*/
        c[2];
        let m;
        for (m = 0; m < s.length; m += 1) {
          const h = Fi(c, s, m);
          f[m] ? (f[m].p(h, d), C(f[m], 1)) : (f[m] = Pi(h), f[m].c(), C(f[m], 1), f[m].m(n, l));
        }
        for (ne(), m = s.length; m < f.length; m += 1)
          u(m);
        le();
      }
    },
    i(c) {
      if (!a) {
        for (let d = 0; d < s.length; d += 1)
          C(f[d]);
        C(o.$$.fragment, c), a = !0;
      }
    },
    o(c) {
      f = f.filter(Boolean);
      for (let d = 0; d < f.length; d += 1)
        z(f[d]);
      z(o.$$.fragment, c), a = !1;
    },
    d(c) {
      c && R(t), Ge(f, c), Y(o);
    }
  };
}
function Wa(e, t, n) {
  let { activeTab: l = "query-inspector" } = t, { onTabChange: i = () => {
  } } = t;
  const r = [
    {
      id: "query-inspector",
      label: "Query Inspector",
      icon: Sa
    },
    {
      id: "data-elements",
      label: "Data Elements",
      icon: Ea
    }
  ], o = (a) => i(a.id);
  return e.$$set = (a) => {
    "activeTab" in a && n(0, l = a.activeTab), "onTabChange" in a && n(1, i = a.onTabChange);
  }, [l, i, r, o];
}
class Ka extends de {
  constructor(t) {
    super(), ce(this, t, Wa, Va, fe, { activeTab: 0, onTabChange: 1 });
  }
}
function Ya(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Pl(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, l = e.slice(0, n);
  return [
    l.length > 1 ? l[0] + l.slice(2) : l,
    +e.slice(n + 1)
  ];
}
function Ft(e) {
  return e = Pl(Math.abs(e)), e ? e[1] : NaN;
}
function Xa(e, t) {
  return function(n, l) {
    for (var i = n.length, r = [], o = 0, a = e[0], s = 0; i > 0 && a > 0 && (s + a + 1 > l && (a = Math.max(1, l - s)), r.push(n.substring(i -= a, i + a)), !((s += a + 1) > l)); )
      a = e[o = (o + 1) % e.length];
    return r.reverse().join(t);
  };
}
function Ua(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var Za = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function jl(e) {
  if (!(t = Za.exec(e)))
    throw new Error("invalid format: " + e);
  var t;
  return new Ri({
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
jl.prototype = Ri.prototype;
function Ri(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Ri.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Ja(e) {
  e:
    for (var t = e.length, n = 1, l = -1, i; n < t; ++n)
      switch (e[n]) {
        case ".":
          l = i = n;
          break;
        case "0":
          l === 0 && (l = n), i = n;
          break;
        default:
          if (!+e[n])
            break e;
          l > 0 && (l = 0);
          break;
      }
  return l > 0 ? e.slice(0, l) + e.slice(i + 1) : e;
}
var Do;
function $a(e, t) {
  var n = Pl(e, t);
  if (!n)
    return e + "";
  var l = n[0], i = n[1], r = i - (Do = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = l.length;
  return r === o ? l : r > o ? l + new Array(r - o + 1).join("0") : r > 0 ? l.slice(0, r) + "." + l.slice(r) : "0." + new Array(1 - r).join("0") + Pl(e, Math.max(0, t + r - 1))[0];
}
function ji(e, t) {
  var n = Pl(e, t);
  if (!n)
    return e + "";
  var l = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + l : l.length > i + 1 ? l.slice(0, i + 1) + "." + l.slice(i + 1) : l + new Array(i - l.length + 2).join("0");
}
const Ii = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Ya,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => ji(e * 100, t),
  r: ji,
  s: $a,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Qi(e) {
  return e;
}
var Bi = Array.prototype.map, Gi = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function es(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Qi : Xa(Bi.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", l = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", r = e.numerals === void 0 ? Qi : Ua(Bi.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", a = e.minus === void 0 ? "−" : e.minus + "", s = e.nan === void 0 ? "NaN" : e.nan + "";
  function f(c) {
    c = jl(c);
    var d = c.fill, m = c.align, h = c.sign, g = c.symbol, p = c.zero, w = c.width, v = c.comma, M = c.precision, N = c.trim, q = c.type;
    q === "n" ? (v = !0, q = "g") : Ii[q] || (M === void 0 && (M = 12), N = !0, q = "g"), (p || d === "0" && m === "=") && (p = !0, d = "0", m = "=");
    var L = g === "$" ? n : g === "#" && /[boxX]/.test(q) ? "0" + q.toLowerCase() : "", D = g === "$" ? l : /[%p]/.test(q) ? o : "", O = Ii[q], T = /[defgprs%]/.test(q);
    M = M === void 0 ? 6 : /[gprs]/.test(q) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function S(F) {
      var x = L, E = D, U, j, V;
      if (q === "c")
        E = O(F) + E, F = "";
      else {
        F = +F;
        var ee = F < 0 || 1 / F < 0;
        if (F = isNaN(F) ? s : O(Math.abs(F), M), N && (F = Ja(F)), ee && +F == 0 && h !== "+" && (ee = !1), x = (ee ? h === "(" ? h : a : h === "-" || h === "(" ? "" : h) + x, E = (q === "s" ? Gi[8 + Do / 3] : "") + E + (ee && h === "(" ? ")" : ""), T) {
          for (U = -1, j = F.length; ++U < j; )
            if (V = F.charCodeAt(U), 48 > V || V > 57) {
              E = (V === 46 ? i + F.slice(U + 1) : F.slice(U)) + E, F = F.slice(0, U);
              break;
            }
        }
      }
      v && !p && (F = t(F, 1 / 0));
      var $ = x.length + F.length + E.length, ae = $ < w ? new Array(w - $ + 1).join(d) : "";
      switch (v && p && (F = t(ae + F, ae.length ? w - E.length : 1 / 0), ae = ""), m) {
        case "<":
          F = x + F + E + ae;
          break;
        case "=":
          F = x + ae + F + E;
          break;
        case "^":
          F = ae.slice(0, $ = ae.length >> 1) + x + F + E + ae.slice($);
          break;
        default:
          F = ae + x + F + E;
          break;
      }
      return r(F);
    }
    return S.toString = function() {
      return c + "";
    }, S;
  }
  function u(c, d) {
    var m = f((c = jl(c), c.type = "f", c)), h = Math.max(-8, Math.min(8, Math.floor(Ft(d) / 3))) * 3, g = Math.pow(10, -h), p = Gi[8 + h / 3];
    return function(w) {
      return m(g * w) + p;
    };
  }
  return {
    format: f,
    formatPrefix: u
  };
}
var Ml, be, No;
ts({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function ts(e) {
  return Ml = es(e), be = Ml.format, No = Ml.formatPrefix, Ml;
}
function To(e) {
  return Math.max(0, -Ft(Math.abs(e)));
}
function ns(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ft(t) / 3))) * 3 - Ft(Math.abs(e)));
}
function ls(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Ft(t) - Ft(e)) + 1;
}
function jt(e) {
  for (var t = e.length / 6 | 0, n = new Array(t), l = 0; l < t; )
    n[l] = "#" + e.slice(l * 6, ++l * 6);
  return n;
}
const is = jt("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), rs = jt("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function zi(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function qo(e, t) {
  var n = Object.create(e.prototype);
  for (var l in t)
    n[l] = t[l];
  return n;
}
function vn() {
}
var _n = 0.7, Il = 1 / _n, Ot = "\\s*([+-]?\\d+)\\s*", yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Qe = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", os = /^#([0-9a-f]{3,8})$/, as = new RegExp(`^rgb\\(${Ot},${Ot},${Ot}\\)$`), ss = new RegExp(`^rgb\\(${Qe},${Qe},${Qe}\\)$`), fs = new RegExp(`^rgba\\(${Ot},${Ot},${Ot},${yn}\\)$`), us = new RegExp(`^rgba\\(${Qe},${Qe},${Qe},${yn}\\)$`), cs = new RegExp(`^hsl\\(${yn},${Qe},${Qe}\\)$`), ds = new RegExp(`^hsla\\(${yn},${Qe},${Qe},${yn}\\)$`), Vi = {
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
zi(vn, pn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Wi,
  // Deprecated! Use color.formatHex.
  formatHex: Wi,
  formatHex8: ms,
  formatHsl: bs,
  formatRgb: Ki,
  toString: Ki
});
function Wi() {
  return this.rgb().formatHex();
}
function ms() {
  return this.rgb().formatHex8();
}
function bs() {
  return Oo(this).formatHsl();
}
function Ki() {
  return this.rgb().formatRgb();
}
function pn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = os.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Yi(t) : n === 3 ? new xe(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Rl(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Rl(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = as.exec(e)) ? new xe(t[1], t[2], t[3], 1) : (t = ss.exec(e)) ? new xe(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = fs.exec(e)) ? Rl(t[1], t[2], t[3], t[4]) : (t = us.exec(e)) ? Rl(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = cs.exec(e)) ? Zi(t[1], t[2] / 100, t[3] / 100, 1) : (t = ds.exec(e)) ? Zi(t[1], t[2] / 100, t[3] / 100, t[4]) : Vi.hasOwnProperty(e) ? Yi(Vi[e]) : e === "transparent" ? new xe(NaN, NaN, NaN, 0) : null;
}
function Yi(e) {
  return new xe(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Rl(e, t, n, l) {
  return l <= 0 && (e = t = n = NaN), new xe(e, t, n, l);
}
function hs(e) {
  return e instanceof vn || (e = pn(e)), e ? (e = e.rgb(), new xe(e.r, e.g, e.b, e.opacity)) : new xe();
}
function Ql(e, t, n, l) {
  return arguments.length === 1 ? hs(e) : new xe(e, t, n, l ?? 1);
}
function xe(e, t, n, l) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +l;
}
zi(xe, Ql, qo(vn, {
  brighter(e) {
    return e = e == null ? Il : Math.pow(Il, e), new xe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? _n : Math.pow(_n, e), new xe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new xe(at(this.r), at(this.g), at(this.b), Bl(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Xi,
  // Deprecated! Use color.formatHex.
  formatHex: Xi,
  formatHex8: gs,
  formatRgb: Ui,
  toString: Ui
}));
function Xi() {
  return `#${ot(this.r)}${ot(this.g)}${ot(this.b)}`;
}
function gs() {
  return `#${ot(this.r)}${ot(this.g)}${ot(this.b)}${ot((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ui() {
  const e = Bl(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${at(this.r)}, ${at(this.g)}, ${at(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Bl(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function at(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ot(e) {
  return e = at(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Zi(e, t, n, l) {
  return l <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ne(e, t, n, l);
}
function Oo(e) {
  if (e instanceof Ne)
    return new Ne(e.h, e.s, e.l, e.opacity);
  if (e instanceof vn || (e = pn(e)), !e)
    return new Ne();
  if (e instanceof Ne)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, l = e.b / 255, i = Math.min(t, n, l), r = Math.max(t, n, l), o = NaN, a = r - i, s = (r + i) / 2;
  return a ? (t === r ? o = (n - l) / a + (n < l) * 6 : n === r ? o = (l - t) / a + 2 : o = (t - n) / a + 4, a /= s < 0.5 ? r + i : 2 - r - i, o *= 60) : a = s > 0 && s < 1 ? 0 : o, new Ne(o, a, s, e.opacity);
}
function _s(e, t, n, l) {
  return arguments.length === 1 ? Oo(e) : new Ne(e, t, n, l ?? 1);
}
function Ne(e, t, n, l) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +l;
}
zi(Ne, _s, qo(vn, {
  brighter(e) {
    return e = e == null ? Il : Math.pow(Il, e), new Ne(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? _n : Math.pow(_n, e), new Ne(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, l = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - l;
    return new xe(
      hi(e >= 240 ? e - 240 : e + 120, i, l),
      hi(e, i, l),
      hi(e < 120 ? e + 240 : e - 120, i, l),
      this.opacity
    );
  },
  clamp() {
    return new Ne(Ji(this.h), zl(this.s), zl(this.l), Bl(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Bl(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ji(this.h)}, ${zl(this.s) * 100}%, ${zl(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ji(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function zl(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function hi(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Ai = (e) => () => e;
function ys(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function ps(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(l) {
    return Math.pow(e + l * t, n);
  };
}
function ks(e) {
  return (e = +e) == 1 ? Ho : function(t, n) {
    return n - t ? ps(t, n, e) : Ai(isNaN(t) ? n : t);
  };
}
function Ho(e, t) {
  var n = t - e;
  return n ? ys(e, n) : Ai(isNaN(e) ? t : e);
}
const $i = function e(t) {
  var n = ks(t);
  function l(i, r) {
    var o = n((i = Ql(i)).r, (r = Ql(r)).r), a = n(i.g, r.g), s = n(i.b, r.b), f = Ho(i.opacity, r.opacity);
    return function(u) {
      return i.r = o(u), i.g = a(u), i.b = s(u), i.opacity = f(u), i + "";
    };
  }
  return l.gamma = e, l;
}(1);
function ws(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, l = t.slice(), i;
  return function(r) {
    for (i = 0; i < n; ++i)
      l[i] = e[i] * (1 - r) + t[i] * r;
    return l;
  };
}
function vs(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Ss(e, t) {
  var n = t ? t.length : 0, l = e ? Math.min(n, e.length) : 0, i = new Array(l), r = new Array(n), o;
  for (o = 0; o < l; ++o)
    i[o] = Li(e[o], t[o]);
  for (; o < n; ++o)
    r[o] = t[o];
  return function(a) {
    for (o = 0; o < l; ++o)
      r[o] = i[o](a);
    return r;
  };
}
function Cs(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(l) {
    return n.setTime(e * (1 - l) + t * l), n;
  };
}
function Gl(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function xs(e, t) {
  var n = {}, l = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? n[i] = Li(e[i], t[i]) : l[i] = t[i];
  return function(r) {
    for (i in n)
      l[i] = n[i](r);
    return l;
  };
}
var wi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, gi = new RegExp(wi.source, "g");
function Ms(e) {
  return function() {
    return e;
  };
}
function Rs(e) {
  return function(t) {
    return e(t) + "";
  };
}
function zs(e, t) {
  var n = wi.lastIndex = gi.lastIndex = 0, l, i, r, o = -1, a = [], s = [];
  for (e = e + "", t = t + ""; (l = wi.exec(e)) && (i = gi.exec(t)); )
    (r = i.index) > n && (r = t.slice(n, r), a[o] ? a[o] += r : a[++o] = r), (l = l[0]) === (i = i[0]) ? a[o] ? a[o] += i : a[++o] = i : (a[++o] = null, s.push({ i: o, x: Gl(l, i) })), n = gi.lastIndex;
  return n < t.length && (r = t.slice(n), a[o] ? a[o] += r : a[++o] = r), a.length < 2 ? s[0] ? Rs(s[0].x) : Ms(t) : (t = s.length, function(f) {
    for (var u = 0, c; u < t; ++u)
      a[(c = s[u]).i] = c.x(f);
    return a.join("");
  });
}
function Li(e, t) {
  var n = typeof t, l;
  return t == null || n === "boolean" ? Ai(t) : (n === "number" ? Gl : n === "string" ? (l = pn(t)) ? (t = l, $i) : zs : t instanceof pn ? $i : t instanceof Date ? Cs : vs(t) ? ws : Array.isArray(t) ? Ss : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? xs : Gl)(e, t);
}
function As(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function Xl(e) {
  var t = e.length;
  return function(n) {
    return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
  };
}
const Ls = Xl(jt("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
Xl(jt("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
Xl(jt("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
Xl(jt("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function Es(e) {
  let t, n, l, i, r;
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
      e[2]}px;` : "")), J(
        t,
        "animated",
        /*loaded*/
        e[8]
      ), J(
        t,
        "rounded-full",
        /*rounded*/
        e[6]
      );
    },
    m(o, a) {
      A(o, t, a), i || (r = [
        re(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[10]
        ),
        re(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[11]
        )
      ], i = !0);
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
      385 && J(
        t,
        "animated",
        /*loaded*/
        o[8]
      ), a & /*absolutePosition, hoverable, rounded*/
      193 && J(
        t,
        "rounded-full",
        /*rounded*/
        o[6]
      );
    },
    i: G,
    o: G,
    d(o) {
      o && R(t), i = !1, Re(r);
    }
  };
}
function Ds(e, t, n) {
  let { absolutePosition: l = !1 } = t, { fraction: i = 1 } = t, { leftFraction: r = 0 } = t, { maxWidth: o = null } = t, { colorScale: a = null } = t, { color: s = "lightgray" } = t, { rounded: f = !0 } = t, { hoverable: u = !1 } = t;
  st(() => {
    setTimeout(() => n(8, c = !0), 100);
  });
  let c = !1, d = "";
  function m(g) {
    qi.call(this, e, g);
  }
  function h(g) {
    qi.call(this, e, g);
  }
  return e.$$set = (g) => {
    "absolutePosition" in g && n(0, l = g.absolutePosition), "fraction" in g && n(1, i = g.fraction), "leftFraction" in g && n(2, r = g.leftFraction), "maxWidth" in g && n(3, o = g.maxWidth), "colorScale" in g && n(4, a = g.colorScale), "color" in g && n(5, s = g.color), "rounded" in g && n(6, f = g.rounded), "hoverable" in g && n(7, u = g.hoverable);
  }, e.$$.update = () => {
    e.$$.dirty & /*maxWidth, rounded, fraction*/
    74 && (o != null ? n(9, d = `${f ? (o - 6) * i + 6 : o * i}px`) : n(9, d = f ? `calc((100% - 6px) * ${i} + 6px)` : `${i.toFixed(2)}%`));
  }, [
    l,
    i,
    r,
    o,
    a,
    s,
    f,
    u,
    c,
    d,
    m,
    h
  ];
}
class Ei extends de {
  constructor(t) {
    super(), ce(this, t, Ds, Es, fe, {
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
function Ns(e) {
  return e.map(
    ((t) => (n) => t += n)(0)
  );
}
const Ts = (e) => ({
  hoveringIndex: e & /*hoveringIndex*/
  8192
}), er = (e) => ({ hoveringIndex: (
  /*hoveringIndex*/
  e[13]
) });
function tr(e, t, n) {
  const l = e.slice();
  return l[25] = t[n], l[27] = n, l;
}
function nr(e) {
  let t, n;
  return {
    c() {
      t = k("div"), n = B(
        /*title*/
        e[11]
      ), b(t, "class", "font-bold text-xs truncate text-right"), W(t, "width", "96px");
    },
    m(l, i) {
      A(l, t, i), _(t, n);
    },
    p(l, i) {
      i & /*title*/
      2048 && Z(
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
function lr(e) {
  let t, n;
  return t = new Ei({
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
    m(l, i) {
      K(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*fullBarColor*/
      512 && (r.color = /*fullBarColor*/
      l[9]), i & /*hoverable*/
      1024 && (r.hoverable = /*hoverable*/
      l[10]), t.$set(r);
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
function qs(e) {
  let t, n;
  return t = new Ei({
    props: {
      absolutePosition: !0,
      fraction: (
        /*scale*/
        (e[1] || sr)(
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
    m(l, i) {
      K(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*scale, value*/
      6 && (r.fraction = /*scale*/
      (l[1] || sr)(
        /*value*/
        l[2]
      )), i & /*color, colorScale*/
      384 && (r.colorScale = /*color*/
      l[8] ? (
        /*func_3*/
        l[22]
      ) : (
        /*colorScale*/
        l[7]
      )), i & /*hoverable*/
      1024 && (r.hoverable = /*hoverable*/
      l[10]), t.$set(r);
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
function Os(e) {
  let t, n, l = (
    /*values*/
    e[3]
  ), i = [];
  for (let o = 0; o < l.length; o += 1)
    i[o] = ir(tr(e, l, o));
  const r = (o) => z(i[o], 1, 1, () => {
    i[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      t = ue();
    },
    m(o, a) {
      for (let s = 0; s < i.length; s += 1)
        i[s] && i[s].m(o, a);
      A(o, t, a), n = !0;
    },
    p(o, a) {
      if (a & /*scale, offsets, values, colors, hoverable, hoveringIndex*/
      25674) {
        l = /*values*/
        o[3];
        let s;
        for (s = 0; s < l.length; s += 1) {
          const f = tr(o, l, s);
          i[s] ? (i[s].p(f, a), C(i[s], 1)) : (i[s] = ir(f), i[s].c(), C(i[s], 1), i[s].m(t.parentNode, t));
        }
        for (ne(), s = l.length; s < i.length; s += 1)
          r(s);
        le();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < l.length; a += 1)
          C(i[a]);
        n = !0;
      }
    },
    o(o) {
      i = i.filter(Boolean);
      for (let a = 0; a < i.length; a += 1)
        z(i[a]);
      n = !1;
    },
    d(o) {
      Ge(i, o), o && R(t);
    }
  };
}
function ir(e) {
  let t, n;
  function l(...i) {
    return (
      /*mouseenter_handler_1*/
      e[20](
        /*i*/
        e[27],
        ...i
      )
    );
  }
  return t = new Ei({
    props: {
      absolutePosition: !0,
      leftFraction: (
        /*i*/
        e[27] > 0 ? (
          /*scale*/
          (e[1] || or)(
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
        (e[1] || ar)(
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
    m(i, r) {
      K(t, i, r), n = !0;
    },
    p(i, r) {
      e = i;
      const o = {};
      r & /*scale, offsets*/
      16386 && (o.leftFraction = /*i*/
      e[27] > 0 ? (
        /*scale*/
        (e[1] || or)(
          /*offsets*/
          e[14][
            /*i*/
            e[27] - 1
          ]
        )
      ) : 0), r & /*scale, values*/
      10 && (o.fraction = /*scale*/
      (e[1] || ar)(
        /*v*/
        e[25]
      )), r & /*colors*/
      64 && (o.color = /*colors*/
      e[6][
        /*i*/
        e[27]
      ]), r & /*hoverable*/
      1024 && (o.hoverable = /*hoverable*/
      e[10]), t.$set(o);
    },
    i(i) {
      n || (C(t.$$.fragment, i), n = !0);
    },
    o(i) {
      z(t.$$.fragment, i), n = !1;
    },
    d(i) {
      Y(t, i);
    }
  };
}
function rr(e) {
  let t, n, l, i;
  const r = [Fs, Hs], o = [];
  function a(s, f) {
    return (
      /*$$slots*/
      s[15].caption ? 1 : 0
    );
  }
  return n = a(e), l = o[n] = r[n](e), {
    c() {
      t = k("div"), l.c(), b(t, "class", "text-xs text-slate-800");
    },
    m(s, f) {
      A(s, t, f), o[n].m(t, null), i = !0;
    },
    p(s, f) {
      let u = n;
      n = a(s), n === u ? o[n].p(s, f) : (ne(), z(o[u], 1, 1, () => {
        o[u] = null;
      }), le(), l = o[n], l ? l.p(s, f) : (l = o[n] = r[n](s), l.c()), C(l, 1), l.m(t, null));
    },
    i(s) {
      i || (C(l), i = !0);
    },
    o(s) {
      z(l), i = !1;
    },
    d(s) {
      s && R(t), o[n].d();
    }
  };
}
function Hs(e) {
  let t;
  const n = (
    /*#slots*/
    e[17].caption
  ), l = Fe(
    n,
    e,
    /*$$scope*/
    e[16],
    er
  );
  return {
    c() {
      l && l.c();
    },
    m(i, r) {
      l && l.m(i, r), t = !0;
    },
    p(i, r) {
      l && l.p && (!t || r & /*$$scope, hoveringIndex*/
      73728) && je(
        l,
        n,
        i,
        /*$$scope*/
        i[16],
        t ? Pe(
          n,
          /*$$scope*/
          i[16],
          r,
          Ts
        ) : Ie(
          /*$$scope*/
          i[16]
        ),
        er
      );
    },
    i(i) {
      t || (C(l, i), t = !0);
    },
    o(i) {
      z(l, i), t = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Fs(e) {
  let t = be(".3")(
    /*value*/
    e[2]
  ) + "", n;
  return {
    c() {
      n = B(t);
    },
    m(l, i) {
      A(l, n, i);
    },
    p(l, i) {
      i & /*value*/
      4 && t !== (t = be(".3")(
        /*value*/
        l[2]
      ) + "") && Z(n, t);
    },
    i: G,
    o: G,
    d(l) {
      l && R(n);
    }
  };
}
function Ps(e) {
  let t, n, l, i, r, o, a, s, f = !!/*title*/
  e[11] && nr(e), u = (
    /*showFullBar*/
    e[4] && lr(e)
  );
  const c = [Os, qs], d = [];
  function m(g, p) {
    return (
      /*values*/
      g[3] != null ? 0 : 1
    );
  }
  r = m(e), o = d[r] = c[r](e);
  let h = (
    /*showTooltip*/
    e[5] && rr(e)
  );
  return {
    c() {
      t = k("div"), f && f.c(), n = H(), l = k("div"), u && u.c(), i = H(), o.c(), a = H(), h && h.c(), b(l, "class", "parent-bar relative rounded-full overflow-hidden"), W(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), W(l, "height", "6px"), J(l, "mb-1", !/*horizontalLayout*/
      e[12]), b(t, "class", "items-center gap-1"), J(
        t,
        "flex",
        /*horizontalLayout*/
        e[12]
      );
    },
    m(g, p) {
      A(g, t, p), f && f.m(t, null), _(t, n), _(t, l), u && u.m(l, null), _(l, i), d[r].m(l, null), _(t, a), h && h.m(t, null), s = !0;
    },
    p(g, [p]) {
      /*title*/
      g[11] ? f ? f.p(g, p) : (f = nr(g), f.c(), f.m(t, n)) : f && (f.d(1), f = null), /*showFullBar*/
      g[4] ? u ? (u.p(g, p), p & /*showFullBar*/
      16 && C(u, 1)) : (u = lr(g), u.c(), C(u, 1), u.m(l, i)) : u && (ne(), z(u, 1, 1, () => {
        u = null;
      }), le());
      let w = r;
      r = m(g), r === w ? d[r].p(g, p) : (ne(), z(d[w], 1, 1, () => {
        d[w] = null;
      }), le(), o = d[r], o ? o.p(g, p) : (o = d[r] = c[r](g), o.c()), C(o, 1), o.m(l, null)), (!s || p & /*width*/
      1) && W(
        l,
        "width",
        /*width*/
        g[0] == null ? "100%" : `${/*width*/
        g[0]}px`
      ), (!s || p & /*horizontalLayout*/
      4096) && J(l, "mb-1", !/*horizontalLayout*/
      g[12]), /*showTooltip*/
      g[5] ? h ? (h.p(g, p), p & /*showTooltip*/
      32 && C(h, 1)) : (h = rr(g), h.c(), C(h, 1), h.m(t, null)) : h && (ne(), z(h, 1, 1, () => {
        h = null;
      }), le()), (!s || p & /*horizontalLayout*/
      4096) && J(
        t,
        "flex",
        /*horizontalLayout*/
        g[12]
      );
    },
    i(g) {
      s || (C(u), C(o), C(h), s = !0);
    },
    o(g) {
      z(u), z(o), z(h), s = !1;
    },
    d(g) {
      g && R(t), f && f.d(), u && u.d(), d[r].d(), h && h.d();
    }
  };
}
const or = (e) => e, ar = (e) => e, sr = (e) => e;
function js(e, t, n) {
  let { $$slots: l = {}, $$scope: i } = t;
  const r = Ci(l);
  let { width: o = 100 } = t, { scale: a = null } = t, { value: s = 0 } = t, { values: f = null } = t, { showFullBar: u = !1 } = t, { showTooltip: c = !0 } = t, { colors: d = is } = t, { colorScale: m = Ls } = t, { color: h = null } = t, { fullBarColor: g = "#e5e7eb" } = t, { hoverable: p = !1 } = t, { title: w = null } = t, { horizontalLayout: v = !1 } = t, M = null, N = [];
  const q = (x) => n(13, M = -1), L = (x) => n(13, M = null), D = (x, E) => n(13, M = x), O = (x) => n(13, M = null), T = () => h, S = (x) => n(13, M = 0), F = (x) => n(13, M = null);
  return e.$$set = (x) => {
    "width" in x && n(0, o = x.width), "scale" in x && n(1, a = x.scale), "value" in x && n(2, s = x.value), "values" in x && n(3, f = x.values), "showFullBar" in x && n(4, u = x.showFullBar), "showTooltip" in x && n(5, c = x.showTooltip), "colors" in x && n(6, d = x.colors), "colorScale" in x && n(7, m = x.colorScale), "color" in x && n(8, h = x.color), "fullBarColor" in x && n(9, g = x.fullBarColor), "hoverable" in x && n(10, p = x.hoverable), "title" in x && n(11, w = x.title), "horizontalLayout" in x && n(12, v = x.horizontalLayout), "$$scope" in x && n(16, i = x.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*values*/
    8 && (f != null ? n(14, N = Ns(f)) : n(14, N = []));
  }, [
    o,
    a,
    s,
    f,
    u,
    c,
    d,
    m,
    h,
    g,
    p,
    w,
    v,
    M,
    N,
    r,
    i,
    l,
    q,
    L,
    D,
    O,
    T,
    S,
    F
  ];
}
class Di extends de {
  constructor(t) {
    super(), ce(this, t, js, Ps, fe, {
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
function fr(e, t, n) {
  const l = e.slice();
  return l[13] = t[n], l[15] = n, l;
}
function Is(e) {
  let t, n, l, i, r, o, a, s, f, u, c, d, m, h, g, p, w;
  function v(S, F) {
    if (
      /*hasError*/
      S[8]
    )
      return Vs;
    if (
      /*hasConceptIds*/
      S[9]
    )
      return Gs;
  }
  let M = v(e), N = M && M(e), q = (
    /*totalCount*/
    e[10] > 0 && ur(e)
  );
  const L = [Ks, Ws], D = [];
  function O(S, F) {
    return (
      /*sortedConcepts*/
      S[7].length > 0 ? 0 : 1
    );
  }
  h = O(e), g = D[h] = L[h](e);
  let T = (
    /*concepts*/
    e[5].length > 0 && mr(e)
  );
  return {
    c() {
      t = k("div"), N && N.c(), n = H(), l = k("div"), i = k("div"), r = k("div"), r.textContent = "Data Element", o = H(), a = k("div"), a.textContent = "Type", s = H(), f = k("div"), u = B(`Count
            `), q && q.c(), c = H(), d = k("div"), m = k("div"), g.c(), p = H(), T && T.c(), b(r, "class", "font-semibold text-slate-900 dark:text-slate-100"), b(a, "class", "font-semibold text-slate-900 dark:text-slate-100"), b(f, "class", "font-semibold text-slate-900 dark:text-slate-100"), b(i, "class", "grid grid-cols-3 gap-4 px-6 py-4"), b(l, "class", "bg-slate-50 dark:bg-slate-800 rounded-t-lg border border-slate-200 dark:border-slate-700"), b(m, "class", "max-h-96 overflow-y-auto custom-scrollbar svelte-1xw87wt"), b(d, "class", "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-b-lg overflow-hidden"), b(t, "class", "w-full");
    },
    m(S, F) {
      A(S, t, F), N && N.m(t, null), _(t, n), _(t, l), _(l, i), _(i, r), _(i, o), _(i, a), _(i, s), _(i, f), _(f, u), q && q.m(f, null), _(t, c), _(t, d), _(d, m), D[h].m(m, null), _(t, p), T && T.m(t, null), w = !0;
    },
    p(S, F) {
      M === (M = v(S)) && N ? N.p(S, F) : (N && N.d(1), N = M && M(S), N && (N.c(), N.m(t, n))), /*totalCount*/
      S[10] > 0 ? q ? q.p(S, F) : (q = ur(S), q.c(), q.m(f, null)) : q && (q.d(1), q = null);
      let x = h;
      h = O(S), h === x ? D[h].p(S, F) : (ne(), z(D[x], 1, 1, () => {
        D[x] = null;
      }), le(), g = D[h], g ? g.p(S, F) : (g = D[h] = L[h](S), g.c()), C(g, 1), g.m(m, null)), /*concepts*/
      S[5].length > 0 ? T ? T.p(S, F) : (T = mr(S), T.c(), T.m(t, null)) : T && (T.d(1), T = null);
    },
    i(S) {
      w || (C(g), w = !0);
    },
    o(S) {
      z(g), w = !1;
    },
    d(S) {
      S && R(t), N && N.d(), q && q.d(), D[h].d(), T && T.d();
    }
  };
}
function Qs(e) {
  let t, n, l, i, r, o, a, s, f, u, c, d, m;
  return a = new we({
    props: { icon: za, class: "inline mr-2" }
  }), {
    c() {
      t = k("div"), n = k("div"), n.textContent = "Data elements not retrieved yet", l = H(), i = k("p"), i.textContent = "Click below to retrieve available data elements in this scope.", r = H(), o = k("button"), X(a.$$.fragment), s = B(`
        Load Data Elements for `), f = k("span"), u = B(
        /*scopeName*/
        e[0]
      ), b(n, "class", "w-1/2 text-slate-700 dark:text-slate-200 text-lg font-semibold"), b(i, "class", "text-slate-600 dark:text-slate-400 w-1/3"), b(f, "class", "font-mono"), b(o, "class", "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md"), o.disabled = /*isLoading*/
      e[2], b(t, "class", "flex flex-col w-full h-full items-center justify-center text-center gap-4");
    },
    m(h, g) {
      A(h, t, g), _(t, n), _(t, l), _(t, i), _(t, r), _(t, o), K(a, o, null), _(o, s), _(o, f), _(f, u), c = !0, d || (m = re(o, "click", function() {
        lt(
          /*onAnalyze*/
          e[4]
        ) && e[4].apply(this, arguments);
      }), d = !0);
    },
    p(h, g) {
      e = h, (!c || g & /*scopeName*/
      1) && Z(
        u,
        /*scopeName*/
        e[0]
      ), (!c || g & /*isLoading*/
      4) && (o.disabled = /*isLoading*/
      e[2]);
    },
    i(h) {
      c || (C(a.$$.fragment, h), c = !0);
    },
    o(h) {
      z(a.$$.fragment, h), c = !1;
    },
    d(h) {
      h && R(t), Y(a), d = !1, m();
    }
  };
}
function Bs(e) {
  let t, n, l, i = (
    /*loadingMessage*/
    e[3] && br(e)
  );
  return {
    c() {
      t = k("div"), n = k("div"), n.innerHTML = `<div class="relative"><div class="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-spin"></div> 
          
          <div class="absolute top-2 left-2 w-12 h-12 border-4 border-blue-600 dark:border-blue-400 rounded-full animate-spin" style="animation-direction: reverse; animation-duration: 1.5s;"></div> 
          
          <div class="absolute top-6 left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div></div>`, l = H(), i && i.c(), b(n, "class", "flex justify-center mb-8"), b(t, "class", "text-center py-16");
    },
    m(r, o) {
      A(r, t, o), _(t, n), _(t, l), i && i.m(t, null);
    },
    p(r, o) {
      /*loadingMessage*/
      r[3] ? i ? i.p(r, o) : (i = br(r), i.c(), i.m(t, null)) : i && (i.d(1), i = null);
    },
    i: G,
    o: G,
    d(r) {
      r && R(t), i && i.d();
    }
  };
}
function Gs(e) {
  let t, n, l, i, r, o, a, s, f, u, c, d, m;
  return {
    c() {
      t = k("div"), n = k("div"), l = k("div"), l.innerHTML = '<span class="text-yellow-600 dark:text-yellow-400">⚠️</span>', i = H(), r = k("div"), o = k("h3"), o.textContent = "Concept Names Not Found", a = H(), s = k("div"), f = k("p"), f.textContent = `Some concepts are showing as IDs instead of human-readable
                  names. This might be due to vocabulary lookup issues.`, u = H(), c = k("button"), c.textContent = "🔄 Refresh Analysis", b(l, "class", "flex-shrink-0"), b(o, "class", "text-sm font-medium text-yellow-800 dark:text-yellow-200"), b(c, "class", "mt-2 bg-yellow-600 hover:bg-yellow-700 text-white text-xs px-3 py-1 rounded transition-colors duration-200"), b(s, "class", "mt-2 text-sm text-yellow-700 dark:text-yellow-300"), b(r, "class", "ml-3"), b(n, "class", "flex items-start"), b(t, "class", "bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4");
    },
    m(h, g) {
      A(h, t, g), _(t, n), _(n, l), _(n, i), _(n, r), _(r, o), _(r, a), _(r, s), _(s, f), _(s, u), _(s, c), d || (m = re(
        c,
        "click",
        /*click_handler_1*/
        e[12]
      ), d = !0);
    },
    p: G,
    d(h) {
      h && R(t), d = !1, m();
    }
  };
}
function Vs(e) {
  let t, n, l, i, r, o, a, s, f, u = (
    /*scopeConcepts*/
    e[6].error + ""
  ), c, d, m, h, g;
  return {
    c() {
      t = k("div"), n = k("div"), l = k("div"), l.innerHTML = '<span class="text-red-600 dark:text-red-400">❌</span>', i = H(), r = k("div"), o = k("h3"), o.textContent = "Analysis Failed", a = H(), s = k("div"), f = k("p"), c = B(u), d = H(), m = k("button"), m.textContent = "🔄 Retry Analysis", b(l, "class", "flex-shrink-0"), b(o, "class", "text-sm font-medium text-red-800 dark:text-red-200"), b(m, "class", "mt-2 bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded transition-colors duration-200"), b(s, "class", "mt-2 text-sm text-red-700 dark:text-red-300"), b(r, "class", "ml-3"), b(n, "class", "flex items-start"), b(t, "class", "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4");
    },
    m(p, w) {
      A(p, t, w), _(t, n), _(n, l), _(n, i), _(n, r), _(r, o), _(r, a), _(r, s), _(s, f), _(f, c), _(s, d), _(s, m), h || (g = re(
        m,
        "click",
        /*click_handler*/
        e[11]
      ), h = !0);
    },
    p(p, w) {
      w & /*scopeConcepts*/
      64 && u !== (u = /*scopeConcepts*/
      p[6].error + "") && Z(c, u);
    },
    d(p) {
      p && R(t), h = !1, g();
    }
  };
}
function ur(e) {
  let t, n, l = (
    /*totalCount*/
    e[10].toLocaleString() + ""
  ), i, r;
  return {
    c() {
      t = k("span"), n = B("(Total: "), i = B(l), r = B(")"), b(t, "class", "text-sm font-normal text-slate-600 dark:text-slate-400");
    },
    m(o, a) {
      A(o, t, a), _(t, n), _(t, i), _(t, r);
    },
    p(o, a) {
      a & /*totalCount*/
      1024 && l !== (l = /*totalCount*/
      o[10].toLocaleString() + "") && Z(i, l);
    },
    d(o) {
      o && R(t);
    }
  };
}
function Ws(e) {
  let t;
  return {
    c() {
      t = k("div"), t.textContent = "No concepts found for this scope.", b(t, "class", "px-6 py-8 text-center text-slate-500 dark:text-slate-400");
    },
    m(n, l) {
      A(n, t, l);
    },
    p: G,
    i: G,
    o: G,
    d(n) {
      n && R(t);
    }
  };
}
function Ks(e) {
  let t, n, l = (
    /*sortedConcepts*/
    e[7]
  ), i = [];
  for (let o = 0; o < l.length; o += 1)
    i[o] = dr(fr(e, l, o));
  const r = (o) => z(i[o], 1, 1, () => {
    i[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      t = ue();
    },
    m(o, a) {
      for (let s = 0; s < i.length; s += 1)
        i[s] && i[s].m(o, a);
      A(o, t, a), n = !0;
    },
    p(o, a) {
      if (a & /*totalCount, sortedConcepts*/
      1152) {
        l = /*sortedConcepts*/
        o[7];
        let s;
        for (s = 0; s < l.length; s += 1) {
          const f = fr(o, l, s);
          i[s] ? (i[s].p(f, a), C(i[s], 1)) : (i[s] = dr(f), i[s].c(), C(i[s], 1), i[s].m(t.parentNode, t));
        }
        for (ne(), s = l.length; s < i.length; s += 1)
          r(s);
        le();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < l.length; a += 1)
          C(i[a]);
        n = !0;
      }
    },
    o(o) {
      i = i.filter(Boolean);
      for (let a = 0; a < i.length; a += 1)
        z(i[a]);
      n = !1;
    },
    d(o) {
      Ge(i, o), o && R(t);
    }
  };
}
function cr(e) {
  let t, n, l, i;
  return l = new Di({
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
      t = k("div"), n = k("div"), X(l.$$.fragment), b(n, "class", "w-32"), b(t, "class", "flex flex-col space-y-1");
    },
    m(r, o) {
      A(r, t, o), _(t, n), K(l, n, null), i = !0;
    },
    p(r, o) {
      const a = {};
      o & /*sortedConcepts, totalCount*/
      1152 && (a.value = /*concept*/
      r[13].count / /*totalCount*/
      r[10]), l.$set(a);
    },
    i(r) {
      i || (C(l.$$.fragment, r), i = !0);
    },
    o(r) {
      z(l.$$.fragment, r), i = !1;
    },
    d(r) {
      r && R(t), Y(l);
    }
  };
}
function dr(e) {
  let t, n, l = (
    /*concept*/
    e[13].name + ""
  ), i, r, o, a, s, f = (
    /*concept*/
    e[13].type + ""
  ), u, c, d, m, h, g, p = (
    /*concept*/
    e[13].count.toLocaleString() + ""
  ), w, v, M, N = (
    /*totalCount*/
    e[10].toLocaleString() + ""
  ), q, L, D, O = (
    /*totalCount*/
    e[10] > 0 && cr(e)
  );
  return {
    c() {
      t = k("div"), n = k("div"), i = B(l), o = H(), a = k("div"), s = k("span"), u = B(f), d = H(), m = k("div"), O && O.c(), h = H(), g = k("div"), w = B(p), v = k("span"), M = B(" / "), q = B(N), L = H(), b(n, "class", "text-slate-900 dark:text-slate-100 font-medium truncate"), b(n, "title", r = /*concept*/
      e[13].name), b(s, "class", c = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " + /*concept*/
      (e[13].type === "event" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : (
        /*concept*/
        e[13].type === "interval" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200"
      ))), b(a, "class", "text-slate-600 dark:text-slate-400"), b(v, "class", "opacity-80"), b(g, "class", "text-slate-600 dark:text-slate-200 font-mono text-sm"), b(m, "class", "flex flex-col space-y-2"), b(t, "class", "grid grid-cols-3 gap-4 px-6 py-4 border-b border-slate-100 dark:border-slate-800 last:border-b-0 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-150");
    },
    m(T, S) {
      A(T, t, S), _(t, n), _(n, i), _(t, o), _(t, a), _(a, s), _(s, u), _(t, d), _(t, m), O && O.m(m, null), _(m, h), _(m, g), _(g, w), _(g, v), _(v, M), _(v, q), _(t, L), D = !0;
    },
    p(T, S) {
      (!D || S & /*sortedConcepts*/
      128) && l !== (l = /*concept*/
      T[13].name + "") && Z(i, l), (!D || S & /*sortedConcepts*/
      128 && r !== (r = /*concept*/
      T[13].name)) && b(n, "title", r), (!D || S & /*sortedConcepts*/
      128) && f !== (f = /*concept*/
      T[13].type + "") && Z(u, f), (!D || S & /*sortedConcepts*/
      128 && c !== (c = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " + /*concept*/
      (T[13].type === "event" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : (
        /*concept*/
        T[13].type === "interval" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200"
      )))) && b(s, "class", c), /*totalCount*/
      T[10] > 0 ? O ? (O.p(T, S), S & /*totalCount*/
      1024 && C(O, 1)) : (O = cr(T), O.c(), C(O, 1), O.m(m, h)) : O && (ne(), z(O, 1, 1, () => {
        O = null;
      }), le()), (!D || S & /*sortedConcepts*/
      128) && p !== (p = /*concept*/
      T[13].count.toLocaleString() + "") && Z(w, p), (!D || S & /*totalCount*/
      1024) && N !== (N = /*totalCount*/
      T[10].toLocaleString() + "") && Z(q, N);
    },
    i(T) {
      D || (C(O), D = !0);
    },
    o(T) {
      z(O), D = !1;
    },
    d(T) {
      T && R(t), O && O.d();
    }
  };
}
function mr(e) {
  let t, n, l = (
    /*concepts*/
    e[5].length + ""
  ), i, r, o = (
    /*concepts*/
    e[5].length !== 1 ? "s" : ""
  ), a, s, f;
  return {
    c() {
      t = k("div"), n = B("Found "), i = B(l), r = B(" concept"), a = B(o), s = B(" in "), f = B(
        /*scopeName*/
        e[0]
      ), b(t, "class", "mt-4 text-sm text-slate-600 dark:text-slate-400");
    },
    m(u, c) {
      A(u, t, c), _(t, n), _(t, i), _(t, r), _(t, a), _(t, s), _(t, f);
    },
    p(u, c) {
      c & /*concepts*/
      32 && l !== (l = /*concepts*/
      u[5].length + "") && Z(i, l), c & /*concepts*/
      32 && o !== (o = /*concepts*/
      u[5].length !== 1 ? "s" : "") && Z(a, o), c & /*scopeName*/
      1 && Z(
        f,
        /*scopeName*/
        u[0]
      );
    },
    d(u) {
      u && R(t);
    }
  };
}
function br(e) {
  let t, n, l, i, r, o;
  return {
    c() {
      t = k("div"), n = k("div"), l = k("div"), i = H(), r = k("span"), o = B(
        /*loadingMessage*/
        e[3]
      ), b(l, "class", "w-2 h-2 bg-blue-500 rounded-full animate-pulse"), b(r, "class", "text-sm text-blue-700 dark:text-blue-300 font-medium"), b(n, "class", "flex items-center space-x-2"), b(t, "class", "mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg");
    },
    m(a, s) {
      A(a, t, s), _(t, n), _(n, l), _(n, i), _(n, r), _(r, o);
    },
    p(a, s) {
      s & /*loadingMessage*/
      8 && Z(
        o,
        /*loadingMessage*/
        a[3]
      );
    },
    d(a) {
      a && R(t);
    }
  };
}
function Ys(e) {
  let t, n, l, i;
  const r = [Bs, Qs, Is], o = [];
  function a(s, f) {
    return (
      /*isLoading*/
      s[2] ? 0 : (
        /*isAnalyzed*/
        s[1] ? 2 : 1
      )
    );
  }
  return n = a(e), l = o[n] = r[n](e), {
    c() {
      t = k("div"), l.c(), b(t, "class", "w-full flex-auto");
    },
    m(s, f) {
      A(s, t, f), o[n].m(t, null), i = !0;
    },
    p(s, [f]) {
      let u = n;
      n = a(s), n === u ? o[n].p(s, f) : (ne(), z(o[u], 1, 1, () => {
        o[u] = null;
      }), le(), l = o[n], l ? l.p(s, f) : (l = o[n] = r[n](s), l.c()), C(l, 1), l.m(t, null));
    },
    i(s) {
      i || (C(l), i = !0);
    },
    o(s) {
      z(l), i = !1;
    },
    d(s) {
      s && R(t), o[n].d();
    }
  };
}
function Xs(e, t, n) {
  let l, i, r, o, { scopeName: a = "" } = t, { isAnalyzed: s = !1 } = t, { isLoading: f = !1 } = t, { loadingMessage: u = "" } = t, { onAnalyze: c = () => {
  } } = t, { concepts: d = [] } = t, { scopeConcepts: m = {} } = t;
  const h = () => c(), g = () => c();
  return e.$$set = (p) => {
    "scopeName" in p && n(0, a = p.scopeName), "isAnalyzed" in p && n(1, s = p.isAnalyzed), "isLoading" in p && n(2, f = p.isLoading), "loadingMessage" in p && n(3, u = p.loadingMessage), "onAnalyze" in p && n(4, c = p.onAnalyze), "concepts" in p && n(5, d = p.concepts), "scopeConcepts" in p && n(6, m = p.scopeConcepts);
  }, e.$$.update = () => {
    e.$$.dirty & /*concepts*/
    32 && n(10, l = d.reduce((p, w) => p + w.count, 0)), e.$$.dirty & /*concepts*/
    32 && n(9, i = d.some((p) => p.name.startsWith("Concept "))), e.$$.dirty & /*scopeConcepts*/
    64 && n(8, r = m && m.error), e.$$.dirty & /*concepts*/
    32 && n(7, o = [...d].sort((p, w) => w.count - p.count));
  }, [
    a,
    s,
    f,
    u,
    c,
    d,
    m,
    o,
    r,
    i,
    l,
    h,
    g
  ];
}
class Us extends de {
  constructor(t) {
    super(), ce(this, t, Xs, Ys, fe, {
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
function hr(e, t, n) {
  const l = e.slice();
  return l[12] = t[n], l;
}
function Zs(e) {
  let t;
  return {
    c() {
      t = k("div"), t.textContent = "No scopes available...", b(t, "class", "text-slate-500 dark:text-slate-400 text-sm");
    },
    m(n, l) {
      A(n, t, l);
    },
    p: G,
    d(n) {
      n && R(t);
    }
  };
}
function Js(e) {
  let t, n = (
    /*scopes*/
    e[2]
  ), l = [];
  for (let i = 0; i < n.length; i += 1)
    l[i] = gr(hr(e, n, i));
  return {
    c() {
      t = k("div");
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      b(t, "class", "space-y-1");
    },
    m(i, r) {
      A(i, t, r);
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(t, null);
    },
    p(i, r) {
      if (r & /*selectedScope, scopes, onScopeSelect*/
      69) {
        n = /*scopes*/
        i[2];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = hr(i, n, o);
          l[o] ? l[o].p(a, r) : (l[o] = gr(a), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(i) {
      i && R(t), Ge(l, i);
    }
  };
}
function gr(e) {
  let t, n = (
    /*scope*/
    e[12] + ""
  ), l, i, r, o, a;
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
      t = k("button"), l = B(n), i = H(), b(t, "class", r = "w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 " + /*selectedScope*/
      (e[0] === /*scope*/
      e[12] ? "bg-blue-100 dark:bg-blue-500 text-blue-700 dark:text-white font-medium" : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600"));
    },
    m(f, u) {
      A(f, t, u), _(t, l), _(t, i), o || (a = re(t, "click", s), o = !0);
    },
    p(f, u) {
      e = f, u & /*scopes*/
      4 && n !== (n = /*scope*/
      e[12] + "") && Z(l, n), u & /*selectedScope, scopes*/
      5 && r !== (r = "w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 " + /*selectedScope*/
      (e[0] === /*scope*/
      e[12] ? "bg-blue-100 dark:bg-blue-500 text-blue-700 dark:text-white font-medium" : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600")) && b(t, "class", r);
    },
    d(f) {
      f && R(t), o = !1, a();
    }
  };
}
function $s(e) {
  let t;
  return {
    c() {
      t = k("div"), t.innerHTML = '<div class="w-1/2 text-slate-600 dark:text-slate-400 text-center">Select a scope from the sidebar to explore available data elements.</div>', b(t, "class", "flex w-full h-full items-center justify-center");
    },
    m(n, l) {
      A(n, t, l);
    },
    p: G,
    i: G,
    o: G,
    d(n) {
      n && R(t);
    }
  };
}
function ef(e) {
  let t, n, l, i, r, o, a, s;
  return a = new Us({
    props: {
      scopeName: (
        /*selectedScope*/
        e[0]
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
      t = k("div"), n = k("h2"), l = B(
        /*selectedScope*/
        e[0]
      ), i = H(), r = k("div"), o = H(), X(a.$$.fragment), b(n, "class", "text-2xl font-bold text-slate-900 dark:text-slate-100"), b(r, "class", "mt-2 h-1 w-16 bg-blue-600 dark:bg-blue-400 rounded"), b(t, "class", "pb-6 shrink-0");
    },
    m(f, u) {
      A(f, t, u), _(t, n), _(n, l), _(t, i), _(t, r), A(f, o, u), K(a, f, u), s = !0;
    },
    p(f, u) {
      (!s || u & /*selectedScope*/
      1) && Z(
        l,
        /*selectedScope*/
        f[0]
      );
      const c = {};
      u & /*selectedScope*/
      1 && (c.scopeName = /*selectedScope*/
      f[0]), u & /*isAnalyzed*/
      256 && (c.isAnalyzed = /*isAnalyzed*/
      f[8]), u & /*isLoading*/
      16 && (c.isLoading = /*isLoading*/
      f[4]), u & /*loadingMessage*/
      32 && (c.loadingMessage = /*loadingMessage*/
      f[5]), u & /*concepts*/
      512 && (c.concepts = /*concepts*/
      f[9]), u & /*scopeConcepts*/
      8 && (c.scopeConcepts = /*scopeConcepts*/
      f[3]), u & /*onAnalyzeScope, selectedScope*/
      129 && (c.onAnalyze = /*func*/
      f[11]), a.$set(c);
    },
    i(f) {
      s || (C(a.$$.fragment, f), s = !0);
    },
    o(f) {
      z(a.$$.fragment, f), s = !1;
    },
    d(f) {
      f && R(t), f && R(o), Y(a, f);
    }
  };
}
function tf(e) {
  let t, n, l, i, r, o, a, s, f, u, c;
  function d(v, M) {
    return (
      /*scopes*/
      v[2].length > 0 ? Js : Zs
    );
  }
  let m = d(e), h = m(e);
  const g = [ef, $s], p = [];
  function w(v, M) {
    return (
      /*selectedScope*/
      v[0] ? 0 : 1
    );
  }
  return s = w(e), f = p[s] = g[s](e), {
    c() {
      t = k("div"), n = k("div"), l = k("h3"), l.textContent = "Scopes", i = H(), r = k("div"), h.c(), o = H(), a = k("div"), f.c(), b(l, "class", "px-4 py-3 font-semibold uppercase text-slate-900 dark:text-slate-100"), b(r, "class", "px-4"), b(n, "class", "w-1/4 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 flex-shrink-0"), b(a, "class", "flex-auto bg-white dark:bg-slate-900 p-6 flex flex-col h-full"), b(t, "class", u = "flex h-full " + /*width*/
      e[1] + " overflow-hidden");
    },
    m(v, M) {
      A(v, t, M), _(t, n), _(n, l), _(n, i), _(n, r), h.m(r, null), _(t, o), _(t, a), p[s].m(a, null), c = !0;
    },
    p(v, [M]) {
      m === (m = d(v)) && h ? h.p(v, M) : (h.d(1), h = m(v), h && (h.c(), h.m(r, null)));
      let N = s;
      s = w(v), s === N ? p[s].p(v, M) : (ne(), z(p[N], 1, 1, () => {
        p[N] = null;
      }), le(), f = p[s], f ? f.p(v, M) : (f = p[s] = g[s](v), f.c()), C(f, 1), f.m(a, null)), (!c || M & /*width*/
      2 && u !== (u = "flex h-full " + /*width*/
      v[1] + " overflow-hidden")) && b(t, "class", u);
    },
    i(v) {
      c || (C(f), c = !0);
    },
    o(v) {
      z(f), c = !1;
    },
    d(v) {
      v && R(t), h.d(), p[s].d();
    }
  };
}
function nf(e, t, n) {
  let l, i, { width: r = "w-full" } = t, { scopes: o = [] } = t, { selectedScope: a = "" } = t, { scopeConcepts: s = {} } = t, { isLoading: f = !1 } = t, { loadingMessage: u = "" } = t, { onScopeSelect: c = () => {
  } } = t, { onAnalyzeScope: d = () => {
  } } = t;
  const m = (g) => {
    n(0, a = g), c(g);
  }, h = () => d(a);
  return e.$$set = (g) => {
    "width" in g && n(1, r = g.width), "scopes" in g && n(2, o = g.scopes), "selectedScope" in g && n(0, a = g.selectedScope), "scopeConcepts" in g && n(3, s = g.scopeConcepts), "isLoading" in g && n(4, f = g.isLoading), "loadingMessage" in g && n(5, u = g.loadingMessage), "onScopeSelect" in g && n(6, c = g.onScopeSelect), "onAnalyzeScope" in g && n(7, d = g.onAnalyzeScope);
  }, e.$$.update = () => {
    e.$$.dirty & /*selectedScope, scopes*/
    5 && !a && o.length > 0 && n(0, a = o[0]), e.$$.dirty & /*selectedScope, scopeConcepts*/
    9 && n(8, l = a && s && s.scope_name === a), e.$$.dirty & /*isAnalyzed, scopeConcepts*/
    264 && n(9, i = l && s.concepts ? s.concepts.map((g) => ({
      name: g.name,
      type: g.type,
      count: g.count
    })) : []);
  }, [
    a,
    r,
    o,
    s,
    f,
    u,
    c,
    d,
    l,
    i,
    m,
    h
  ];
}
class lf extends de {
  constructor(t) {
    super(), ce(this, t, nf, tf, fe, {
      width: 1,
      scopes: 2,
      selectedScope: 0,
      scopeConcepts: 3,
      isLoading: 4,
      loadingMessage: 5,
      onScopeSelect: 6,
      onAnalyzeScope: 7
    });
  }
}
const _r = [
  "now",
  "value",
  "mintime",
  "maxtime",
  "indexvalue"
];
function rf(e, t, n) {
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
    const i = l[2] || l[1] || "";
    if (console.log(
      "🔍 getAutocompleteOptions - Processing data field, searchQuery:",
      i
    ), i.length == 0)
      return [];
    const r = i.toLowerCase(), o = e.filter((f) => f.toLowerCase().startsWith(r)).sort((f, u) => f.length !== u.length ? f.length - u.length : f.localeCompare(u)).slice(0, 10), a = e.filter((f) => {
      const u = f.toLowerCase();
      return u.includes(r) && !u.startsWith(r);
    }).sort((f, u) => {
      const c = f.toLowerCase().indexOf(r), d = u.toLowerCase().indexOf(r);
      return c !== d ? c - d : f.length !== u.length ? f.length - u.length : f.localeCompare(u);
    }).slice(0, 5), s = [...o, ...a].map((f) => ({
      value: f,
      type: "data_item"
    }));
    return console.log("🔍 getAutocompleteOptions - Data field matches:", s), s;
  }
  if (l = n.match(/#([^\s]*)/), console.log("🔍 getAutocompleteOptions - Constant regex result:", l), l) {
    console.log("🔍 getAutocompleteOptions - Processing constants");
    const i = l[1] || "";
    console.log(
      "🔍 getAutocompleteOptions - Constant search query:",
      i
    );
    const r = i.toLowerCase(), o = _r.filter((f) => f.toLowerCase().startsWith(r)).sort((f, u) => f.length - u.length), a = _r.filter((f) => {
      const u = f.toLowerCase();
      return u.includes(r) && !u.startsWith(r);
    }).sort((f, u) => f.length - u.length), s = [...o, ...a].map((f) => ({
      value: f,
      type: "constant"
    }));
    return console.log("🔍 getAutocompleteOptions - Constant matches:", s), s;
  }
  return console.log("🔍 getAutocompleteOptions - No matches found"), [];
}
function of(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fo = { exports: {} };
(function(e, t) {
  (function() {
    function n(r, o, a) {
      var s = null, f = null, u = null, c = null;
      if (a = a || "", !o.length)
        return a || "";
      if (r.some(function(m) {
        m.name;
        var h = m.match instanceof RegExp, g = h ? m.match : m.match[0], p = h ? null : m.match[1] || null, w = h ? null : m.match[2] || null;
        return s = o.match(g), f = s ? m.name : null, u = p, c = w, !!s;
      }), s) {
        var d = '<span class="' + f + '">' + s[1] + "</span>";
        return u && (d = u + d), c && (d = d + c), n(r, o.slice(s[0].length), a + d);
      } else
        return n(r, o.slice(1), a + o[0]);
    }
    function l(r) {
      var o = r.replace(/^\n+|\n+\s+$/g, ""), a = o.match(/^\s+/);
      if (!a)
        return o;
      var s = o.split(`
`), f = s.map(function(u, c) {
        return !u || /^\s+$/.test(u) ? u : u.replace(a[0], "");
      }).join(`
`);
      return `
` + f;
    }
    function i(r) {
      var o = r.selector || "pre code", a = r.postProcess || function(f) {
        return f;
      }, s = r.preProcess || function(f) {
        return f;
      };
      Array.prototype.slice.call(document.querySelectorAll(o)).forEach(function(f) {
        var u = (typeof r.patterns == "function" ? r.patterns(f) : r.patterns) || {}, c = f.innerText, d = l(c), m = a(n(u, s(d)));
        r.linenums && (m = m.split(`
`).map(function(h, g) {
          if (!g)
            return h;
          var p = g - 1 + "";
          return p.length < 2 && (p = "0" + p), '<span class="linenum">' + p + "</span> " + h;
        }).join(`
`)), f.innerHTML = m;
      });
    }
    e.exports = i;
  })();
})(Fo);
var af = Fo.exports;
const sf = /* @__PURE__ */ of(af), ff = [
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
function uf(e) {
  return e = e.replaceAll(/<([A-z]+?)>/g, "####TOKEN####$1####ENDTOKEN####"), e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function yr(e, t, n) {
  const l = e.slice();
  return l[33] = t[n], l[35] = n, l;
}
function pr(e) {
  let t, n = (
    /*autocompleteOptions*/
    e[6]
  ), l = [];
  for (let i = 0; i < n.length; i += 1)
    l[i] = kr(yr(e, n, i));
  return {
    c() {
      t = k("div");
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      b(t, "class", "absolute z-30 w-full mt-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md shadow-xl max-h-48 overflow-y-auto");
    },
    m(i, r) {
      A(i, t, r);
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(t, null);
      e[23](t);
    },
    p(i, r) {
      if (r[0] & /*selectedIndex, selectAutocompleteOption, autocompleteOptions*/
      4288) {
        n = /*autocompleteOptions*/
        i[6];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = yr(i, n, o);
          l[o] ? l[o].p(a, r) : (l[o] = kr(a), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(i) {
      i && R(t), Ge(l, i), e[23](null);
    }
  };
}
function kr(e) {
  let t, n, l, i = (
    /*option*/
    e[33].value + ""
  ), r, o, a, s = (
    /*option*/
    e[33].type === "data_item" ? "field" : "const"
  ), f, u, c, d, m;
  function h() {
    return (
      /*click_handler*/
      e[20](
        /*option*/
        e[33]
      )
    );
  }
  function g(...w) {
    return (
      /*keydown_handler*/
      e[21](
        /*option*/
        e[33],
        ...w
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
      t = k("div"), n = k("div"), l = k("span"), r = B(i), o = H(), a = k("span"), f = B(s), u = H(), b(l, "class", "font-mono text-sm"), b(a, "class", "text-xs px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"), b(n, "class", "flex items-center justify-between"), b(t, "class", c = "px-4 py-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors " + /*index*/
      (e[35] === /*selectedIndex*/
      e[7] ? "bg-blue-600 text-white" : "text-slate-700 dark:text-slate-200")), b(t, "role", "button"), b(t, "tabindex", "0");
    },
    m(w, v) {
      A(w, t, v), _(t, n), _(n, l), _(l, r), _(n, o), _(n, a), _(a, f), _(t, u), d || (m = [
        re(t, "click", h),
        re(t, "keydown", g),
        re(t, "mouseenter", p)
      ], d = !0);
    },
    p(w, v) {
      e = w, v[0] & /*autocompleteOptions*/
      64 && i !== (i = /*option*/
      e[33].value + "") && Z(r, i), v[0] & /*autocompleteOptions*/
      64 && s !== (s = /*option*/
      e[33].type === "data_item" ? "field" : "const") && Z(f, s), v[0] & /*selectedIndex*/
      128 && c !== (c = "px-4 py-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors " + /*index*/
      (e[35] === /*selectedIndex*/
      e[7] ? "bg-blue-600 text-white" : "text-slate-700 dark:text-slate-200")) && b(t, "class", c);
    },
    d(w) {
      w && R(t), d = !1, Re(m);
    }
  };
}
function cf(e) {
  let t, n, l, i, r, o, a, s, f, u, c, d, m, h, g, p, w, v, M, N, q, L = (
    /*showAutocomplete*/
    e[8] && /*autocompleteOptions*/
    e[6].length > 0 && pr(e)
  );
  return d = new we({
    props: { icon: Lo, class: "inline mr-2" }
  }), p = new we({
    props: { icon: Ma, class: "inline mr-2" }
  }), {
    c() {
      t = k("div"), n = k("div"), n.innerHTML = '<h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100 pr-2">TempoQL Query</h3>', l = H(), i = k("div"), r = k("textarea"), o = H(), a = k("div"), s = H(), L && L.c(), f = H(), u = k("div"), c = k("button"), X(d.$$.fragment), m = B(`
        History`), h = H(), g = k("button"), X(p.$$.fragment), w = B(`
        Run Query`), b(n, "class", "flex items-center mb-4 gap-2 shrink-0"), b(r, "id", "text-input"), b(r, "class", "w-full h-full p-4 pb-16 bg-transparent font-mono text-sm bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-slate-500 dark:placeholder-slate-400 resize-none overflow-hidden min-h-[120px] relative z-20 svelte-1w5ogy4"), b(r, "placeholder", "// Write your Tempo-QL query here... (Ctrl+Z to undo, Ctrl+Y to redo)"), b(r, "rows", "1"), W(r, "color", "transparent"), W(r, "caret-color", "currentColor"), b(a, "class", "absolute top-0 left-0 w-full h-full p-4 pb-16 font-mono text-sm pointer-events-none bg-transparent z-10 text-wrap whitespace-pre-wrap break-words svelte-1w5ogy4"), b(
        a,
        "id",
        /*highlightedViewID*/
        e[9]
      ), b(c, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-slate-200 hover:bg-slate-200/50 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white"), b(c, "title", "View query history"), b(g, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white"), g.disabled = v = !/*value*/
      e[0].trim(), J(g, "opacity-50", !/*value*/
      e[0].trim()), J(g, "cursor-not-allowed", !/*value*/
      e[0].trim()), b(u, "class", "absolute right-0 bottom-0 mr-4 mb-4 flex justify-end items-center gap-2 z-50"), b(i, "class", "relative flex-auto min-h-0"), b(t, "class", "flex flex-col w-full h-full p-4 mb-2");
    },
    m(D, O) {
      A(D, t, O), _(t, n), _(t, l), _(t, i), _(i, r), e[17](r), Ol(
        r,
        /*value*/
        e[0]
      ), _(i, o), _(i, a), e[19](a), _(i, s), L && L.m(i, null), _(i, f), _(i, u), _(u, c), K(d, c, null), _(c, m), _(u, h), _(u, g), K(p, g, null), _(g, w), M = !0, N || (q = [
        re(
          r,
          "input",
          /*textarea_1_input_handler*/
          e[18]
        ),
        re(
          r,
          "input",
          /*handleInput*/
          e[10]
        ),
        re(
          r,
          "keydown",
          /*handleKeydown*/
          e[11]
        ),
        re(c, "click", function() {
          lt(
            /*onHistoryClick*/
            e[2]
          ) && e[2].apply(this, arguments);
        }),
        re(g, "click", function() {
          lt(
            /*onRun*/
            e[1]
          ) && e[1].apply(this, arguments);
        })
      ], N = !0);
    },
    p(D, O) {
      e = D, O[0] & /*value*/
      1 && Ol(
        r,
        /*value*/
        e[0]
      ), /*showAutocomplete*/
      e[8] && /*autocompleteOptions*/
      e[6].length > 0 ? L ? L.p(e, O) : (L = pr(e), L.c(), L.m(i, f)) : L && (L.d(1), L = null), (!M || O[0] & /*value*/
      1 && v !== (v = !/*value*/
      e[0].trim())) && (g.disabled = v), (!M || O[0] & /*value*/
      1) && J(g, "opacity-50", !/*value*/
      e[0].trim()), (!M || O[0] & /*value*/
      1) && J(g, "cursor-not-allowed", !/*value*/
      e[0].trim());
    },
    i(D) {
      M || (C(d.$$.fragment, D), C(p.$$.fragment, D), M = !0);
    },
    o(D) {
      z(d.$$.fragment, D), z(p.$$.fragment, D), M = !1;
    },
    d(D) {
      D && R(t), e[17](null), e[19](null), L && L.d(), Y(d), Y(p), N = !1, Re(q);
    }
  };
}
function df(e, t, n) {
  let { value: l = "" } = t, { onInput: i = () => {
  } } = t, { width: r = "w-full max-w-2xl" } = t, { dataFields: o = [] } = t, { onRun: a = () => {
  } } = t, { onExplain: s = () => {
  } } = t, { onHistoryClick: f = () => {
  } } = t, u, c, d, m = [], h = 0, g = !1, p = 0, w = "highlightView-" + new Array(20).fill(0).map(() => Math.floor(Math.random() * 10)).join(""), v = [], M = -1, N = !1;
  st(() => {
    L(""), document.addEventListener("click", q);
  }), ca(() => {
    document.removeEventListener("click", q);
  });
  function q(I) {
    if (c && u) {
      const oe = I.target, he = c.contains(oe), ve = u.contains(oe);
      (!he || ve && g) && (console.log("🖱️ Click detected - closing autocomplete"), n(8, g = !1));
    }
  }
  function L(I) {
    if (N) {
      N = !1;
      return;
    }
    v = v.slice(0, M + 1), v.push(I), M = v.length - 1, v.length > 50 && (v = v.slice(-50), M = v.length - 1), console.log("📝 Added to history:", I, "Index:", M);
  }
  function D() {
    if (M > 0) {
      N = !0, M--;
      const I = v[M];
      console.log("↶ Undo to:", I), n(0, l = I), i(I), u && (n(3, u.value = I, u), u.focus());
    }
  }
  function O() {
    if (M < v.length - 1) {
      N = !0, M++;
      const I = v[M];
      console.log("↷ Redo to:", I), n(0, l = I), i(I), u && (n(3, u.value = I, u), u.focus());
    }
  }
  function T(I) {
    const oe = I.target, he = oe.value;
    console.log("🔍 handleInput - New value:", he), console.log("🔍 handleInput - Cursor position:", oe.selectionStart), L(he), n(0, l = he), i(he), p = oe.selectionStart || 0, console.log("🔍 handleInput - Updated cursor position:", p), S(he, p);
  }
  function S(I, oe) {
    console.log("🔍 updateAutocompleteOptions - Text:", I), console.log("🔍 updateAutocompleteOptions - Position:", oe);
    const he = I.substring(0, oe), ve = I.substring(oe);
    console.log("🔍 updateAutocompleteOptions - Before cursor:", he), console.log("🔍 updateAutocompleteOptions - After cursor:", ve);
    const Se = he.match(/([^\s]*)$/), ze = Se ? Se[1] : "";
    console.log("🔍 updateAutocompleteOptions - Current word:", ze), console.log("🔍 updateAutocompleteOptions - Data fields available:", o), ze.length > 0 ? (n(6, m = rf(o, ze, he)), console.log("🔍 updateAutocompleteOptions - Autocomplete options:", m), n(8, g = m.length > 0), n(7, h = 0), console.log("🔍 updateAutocompleteOptions - Show autocomplete:", g)) : (n(8, g = !1), console.log("🔍 updateAutocompleteOptions - No current word, hiding autocomplete"));
  }
  function F(I) {
    if (console.log("🔍 handleKeydown - Key pressed:", I.key), console.log("🔍 handleKeydown - Show autocomplete:", g), console.log("🔍 handleKeydown - Options count:", m.length), I.ctrlKey || I.metaKey) {
      if (I.key === "z" && !I.shiftKey) {
        I.preventDefault(), console.log("⌨️ Ctrl+Z pressed - Undo"), D();
        return;
      } else if (I.key === "y" || I.key === "z" && I.shiftKey) {
        I.preventDefault(), console.log("⌨️ Ctrl+Y or Ctrl+Shift+Z pressed - Redo"), O();
        return;
      }
    }
    if (!g) {
      console.log("🔍 handleKeydown - Autocomplete not shown, ignoring key");
      return;
    }
    switch (I.key) {
      case "ArrowDown":
        I.preventDefault(), n(7, h = (h + 1) % m.length), console.log("🔍 handleKeydown - ArrowDown, new selectedIndex:", h);
        break;
      case "ArrowUp":
        I.preventDefault(), n(7, h = h === 0 ? m.length - 1 : h - 1), console.log("🔍 handleKeydown - ArrowUp, new selectedIndex:", h);
        break;
      case "Enter":
        g && (I.preventDefault(), console.log("🔍 handleKeydown - Enter pressed, selecting option:", m[h]), x(m[h]));
        break;
      case "Escape":
        n(8, g = !1), console.log("🔍 handleKeydown - Escape pressed, hiding autocomplete");
        break;
      case "Tab":
        g && (I.preventDefault(), console.log("🔍 handleKeydown - Tab pressed, selecting option:", m[h]), x(m[h]));
        break;
    }
  }
  function x(I) {
    console.log("🔍 selectAutocompleteOption - Selected option:", I), console.log("🔍 selectAutocompleteOption - Current value:", l), console.log("🔍 selectAutocompleteOption - Cursor position:", p);
    const oe = l.substring(0, p), he = l.substring(p);
    console.log("🔍 selectAutocompleteOption - Before cursor:", oe), console.log("🔍 selectAutocompleteOption - After cursor:", he);
    const ve = oe.match(/([^\s]*)$/), Se = ve ? ve[1] : "", ze = oe.length - Se.length;
    console.log("🔍 selectAutocompleteOption - Current word:", Se), console.log("🔍 selectAutocompleteOption - Word start position:", ze);
    let pe;
    if (I.type === "data_item")
      if (Se.includes("{")) {
        const Ae = oe.match(/\{([^}]*?)(?:,\s*([^},]*))?$/);
        Ae ? Ae[2] ? pe = oe.substring(0, Ae.index + Ae[1].length + 2) + I.value : pe = oe.substring(0, Ae.index + 1) + I.value : pe = oe + I.value;
      } else
        pe = oe + "{" + I.value;
    else
      pe = oe.substring(0, ze) + "#" + I.value;
    console.log("🔍 selectAutocompleteOption - Replacement:", pe);
    const Ce = pe + he;
    console.log("🔍 selectAutocompleteOption - New value:", Ce), n(0, l = Ce), i(Ce);
    const Le = pe.length;
    console.log("🔍 selectAutocompleteOption - New cursor position:", Le), setTimeout(
      () => {
        u && (u.setSelectionRange(Le, Le), u.focus(), console.log("🔍 selectAutocompleteOption - Cursor position set"));
      },
      0
    ), n(8, g = !1), console.log("🔍 selectAutocompleteOption - Autocomplete hidden");
  }
  function E(I) {
    Me[I ? "unshift" : "push"](() => {
      u = I, n(3, u), n(0, l);
    });
  }
  function U() {
    l = this.value, n(0, l);
  }
  function j(I) {
    Me[I ? "unshift" : "push"](() => {
      d = I, n(4, d), n(0, l), n(9, w);
    });
  }
  const V = (I) => x(I), ee = (I, oe) => {
    (oe.key === "Enter" || oe.key === " ") && (oe.preventDefault(), x(I));
  }, $ = (I) => n(7, h = I);
  function ae(I) {
    Me[I ? "unshift" : "push"](() => {
      c = I, n(5, c);
    });
  }
  return e.$$set = (I) => {
    "value" in I && n(0, l = I.value), "onInput" in I && n(13, i = I.onInput), "width" in I && n(14, r = I.width), "dataFields" in I && n(15, o = I.dataFields), "onRun" in I && n(1, a = I.onRun), "onExplain" in I && n(16, s = I.onExplain), "onHistoryClick" in I && n(2, f = I.onHistoryClick);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*highlightedView, value*/
    17 && d && l !== void 0) {
      let I = l;
      n(4, d.innerText = uf(I), d), sf({
        selector: `#${w}`,
        patterns: ff
      });
    }
    e.$$.dirty[0] & /*textarea, value*/
    9 && u && l !== void 0 && u.value !== l && (n(3, u.value = l, u), L(l));
  }, [
    l,
    a,
    f,
    u,
    d,
    c,
    m,
    h,
    g,
    w,
    T,
    F,
    x,
    i,
    r,
    o,
    s,
    E,
    U,
    j,
    V,
    ee,
    $,
    ae
  ];
}
class mf extends de {
  constructor(t) {
    super(), ce(
      this,
      t,
      df,
      cf,
      fe,
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
function bf(e) {
  return e === 0 ? !0 : e;
}
function tt(e) {
  return bf(e) ? Array.isArray(e) ? (t) => e.map((n) => typeof n != "function" ? t[n] : n(t)) : typeof e != "function" ? (t) => t[e] : e : null;
}
function hf(e) {
  const t = {};
  for (const n of e) {
    if (Object(n) !== n)
      throw new TypeError("iterable for fromEntries should yield objects");
    const { "0": l, "1": i } = n;
    Object.defineProperty(t, l, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: i
    });
  }
  return t;
}
function _i(e, t = {}) {
  return hf(Object.entries(e).filter(([n, l]) => l !== void 0 && t[n] === void 0));
}
function gf(e, t = 300) {
  let n;
  return (...l) => {
    clearTimeout(n), n = setTimeout(() => {
      e.apply(this, l);
    }, t);
  };
}
function _f(e, t, { sort: n = !1 } = {}) {
  if (!Array.isArray(e))
    throw new TypeError(`The first argument of calcUniques() must be an array. You passed in a ${typeof e}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(t) || t === void 0 || t === null)
    throw new TypeError("The second argument of calcUniques() must be an object with field names as keys as accessor functions as values.");
  const l = {}, i = Object.keys(t), r = i.length;
  let o, a, s, f, u, c, d;
  const m = e.length;
  for (o = 0; o < r; o += 1) {
    for (d = /* @__PURE__ */ new Set(), f = i[o], u = t[f], a = 0; a < m; a += 1)
      if (c = u(e[a]), Array.isArray(c)) {
        const g = c.length;
        for (s = 0; s < g; s += 1)
          d.add(c[s]);
      } else
        d.add(c);
    const h = Array.from(d);
    l[f] = n === !0 ? h.sort() : h;
  }
  return l;
}
function yf(e, t) {
  if (!Array.isArray(e))
    throw new TypeError(`The first argument of calcExtents() must be an array. You passed in a ${typeof e}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(t) || t === void 0 || t === null)
    throw new TypeError("The second argument of calcExtents() must be an object with field names as keys as accessor functions as values.");
  const n = {}, l = Object.keys(t), i = l.length;
  let r, o, a, s, f, u, c, d;
  const m = e.length;
  for (r = 0; r < i; r += 1) {
    for (s = l[r], c = t[s], f = null, u = null, o = 0; o < m; o += 1)
      if (d = c(e[o]), Array.isArray(d)) {
        const h = d.length;
        for (a = 0; a < h; a += 1)
          d[a] !== !1 && d[a] !== void 0 && d[a] !== null && Number.isNaN(d[a]) === !1 && ((f === null || d[a] < f) && (f = d[a]), (u === null || d[a] > u) && (u = d[a]));
      } else
        d !== !1 && d !== void 0 && d !== null && Number.isNaN(d) === !1 && ((f === null || d < f) && (f = d), (u === null || d > u) && (u = d));
    n[s] = [f, u];
  }
  return n;
}
function dn(e, t) {
  return e.length !== t.length ? !1 : e.every((n) => t.includes(n));
}
function Po(e) {
  return !!(typeof e.bandwidth == "function" || dn(Object.keys(e), ["domain", "range", "unknown", "copy"]));
}
function pf(e, t, n) {
  const l = Object.keys(n).reduce((r, o) => {
    const a = Po(n[o]) === !0 ? "ordinal" : "other";
    return r[a] || (r[a] = {}), r[a][o] = t[o], r;
  }, { ordinal: !1, other: !1 });
  let i = {};
  return l.ordinal && (i = _f(e, l.ordinal)), l.other && (i = { ...i, ...yf(e, l.other) }), i;
}
function kf(e = [], t) {
  return Array.isArray(t) === !0 ? t.map((n, l) => n === null ? e[l] : n) : e;
}
function Al(e) {
  return function([n, l]) {
    return typeof l == "function" && (l = l(n[e])), n ? kf(n[e], l) : l;
  };
}
function ql(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function wf(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function jo(e) {
  let t, n, l;
  e.length !== 2 ? (t = ql, n = (a, s) => ql(e(a), s), l = (a, s) => e(a) - s) : (t = e === ql || e === wf ? e : vf, n = e, l = e);
  function i(a, s, f = 0, u = a.length) {
    if (f < u) {
      if (t(s, s) !== 0)
        return u;
      do {
        const c = f + u >>> 1;
        n(a[c], s) < 0 ? f = c + 1 : u = c;
      } while (f < u);
    }
    return f;
  }
  function r(a, s, f = 0, u = a.length) {
    if (f < u) {
      if (t(s, s) !== 0)
        return u;
      do {
        const c = f + u >>> 1;
        n(a[c], s) <= 0 ? f = c + 1 : u = c;
      } while (f < u);
    }
    return f;
  }
  function o(a, s, f = 0, u = a.length) {
    const c = i(a, s, f, u - 1);
    return c > f && l(a[c - 1], s) > -l(a[c], s) ? c - 1 : c;
  }
  return { left: i, center: o, right: r };
}
function vf() {
  return 0;
}
function Sf(e) {
  return e === null ? NaN : +e;
}
const Cf = jo(ql), xf = Cf.right;
jo(Sf).center;
const Mf = xf;
class wr extends Map {
  constructor(t, n = Af) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [l, i] of t)
        this.set(l, i);
  }
  get(t) {
    return super.get(vr(this, t));
  }
  has(t) {
    return super.has(vr(this, t));
  }
  set(t, n) {
    return super.set(Rf(this, t), n);
  }
  delete(t) {
    return super.delete(zf(this, t));
  }
}
function vr({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) ? e.get(l) : n;
}
function Rf({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) ? e.get(l) : (e.set(l, n), n);
}
function zf({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) && (n = e.get(l), e.delete(l)), n;
}
function Af(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Lf = Math.sqrt(50), Ef = Math.sqrt(10), Df = Math.sqrt(2);
function Vl(e, t, n) {
  const l = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(l)), r = l / Math.pow(10, i), o = r >= Lf ? 10 : r >= Ef ? 5 : r >= Df ? 2 : 1;
  let a, s, f;
  return i < 0 ? (f = Math.pow(10, -i) / o, a = Math.round(e * f), s = Math.round(t * f), a / f < e && ++a, s / f > t && --s, f = -f) : (f = Math.pow(10, i) * o, a = Math.round(e / f), s = Math.round(t / f), a * f < e && ++a, s * f > t && --s), s < a && 0.5 <= n && n < 2 ? Vl(e, t, n * 2) : [a, s, f];
}
function Nf(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0))
    return [];
  if (e === t)
    return [e];
  const l = t < e, [i, r, o] = l ? Vl(t, e, n) : Vl(e, t, n);
  if (!(r >= i))
    return [];
  const a = r - i + 1, s = new Array(a);
  if (l)
    if (o < 0)
      for (let f = 0; f < a; ++f)
        s[f] = (r - f) / -o;
    else
      for (let f = 0; f < a; ++f)
        s[f] = (r - f) * o;
  else if (o < 0)
    for (let f = 0; f < a; ++f)
      s[f] = (i + f) / -o;
  else
    for (let f = 0; f < a; ++f)
      s[f] = (i + f) * o;
  return s;
}
function vi(e, t, n) {
  return t = +t, e = +e, n = +n, Vl(e, t, n)[2];
}
function Tf(e, t, n) {
  t = +t, e = +e, n = +n;
  const l = t < e, i = l ? vi(t, e, n) : vi(e, t, n);
  return (l ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Ke(e, t, n) {
  e = +e, t = +t, n = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +n;
  for (var l = -1, i = Math.max(0, Math.ceil((t - e) / n)) | 0, r = new Array(i); ++l < i; )
    r[l] = e + l * n;
  return r;
}
function Ul(e, t) {
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
const Sr = Symbol("implicit");
function Zl() {
  var e = new wr(), t = [], n = [], l = Sr;
  function i(r) {
    let o = e.get(r);
    if (o === void 0) {
      if (l !== Sr)
        return l;
      e.set(r, o = t.push(r) - 1);
    }
    return n[o % n.length];
  }
  return i.domain = function(r) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new wr();
    for (const o of r)
      e.has(o) || e.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(r) {
    return arguments.length ? (n = Array.from(r), i) : n.slice();
  }, i.unknown = function(r) {
    return arguments.length ? (l = r, i) : l;
  }, i.copy = function() {
    return Zl(t, n).unknown(l);
  }, Ul.apply(i, arguments), i;
}
function Ni() {
  var e = Zl().unknown(void 0), t = e.domain, n = e.range, l = 0, i = 1, r, o, a = !1, s = 0, f = 0, u = 0.5;
  delete e.unknown;
  function c() {
    var d = t().length, m = i < l, h = m ? i : l, g = m ? l : i;
    r = (g - h) / Math.max(1, d - s + f * 2), a && (r = Math.floor(r)), h += (g - h - r * (d - s)) * u, o = r * (1 - s), a && (h = Math.round(h), o = Math.round(o));
    var p = Ke(d).map(function(w) {
      return h + r * w;
    });
    return n(m ? p.reverse() : p);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), c()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([l, i] = d, l = +l, i = +i, c()) : [l, i];
  }, e.rangeRound = function(d) {
    return [l, i] = d, l = +l, i = +i, a = !0, c();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return r;
  }, e.round = function(d) {
    return arguments.length ? (a = !!d, c()) : a;
  }, e.padding = function(d) {
    return arguments.length ? (s = Math.min(1, f = +d), c()) : s;
  }, e.paddingInner = function(d) {
    return arguments.length ? (s = Math.min(1, d), c()) : s;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (f = +d, c()) : f;
  }, e.align = function(d) {
    return arguments.length ? (u = Math.max(0, Math.min(1, d)), c()) : u;
  }, e.copy = function() {
    return Ni(t(), [l, i]).round(a).paddingInner(s).paddingOuter(f).align(u);
  }, Ul.apply(c(), arguments);
}
function qf(e) {
  return function() {
    return e;
  };
}
function Of(e) {
  return +e;
}
var Cr = [0, 1];
function He(e) {
  return e;
}
function Si(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : qf(isNaN(t) ? NaN : 0.5);
}
function Hf(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(l) {
    return Math.max(e, Math.min(t, l));
  };
}
function Ff(e, t, n) {
  var l = e[0], i = e[1], r = t[0], o = t[1];
  return i < l ? (l = Si(i, l), r = n(o, r)) : (l = Si(l, i), r = n(r, o)), function(a) {
    return r(l(a));
  };
}
function Pf(e, t, n) {
  var l = Math.min(e.length, t.length) - 1, i = new Array(l), r = new Array(l), o = -1;
  for (e[l] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < l; )
    i[o] = Si(e[o], e[o + 1]), r[o] = n(t[o], t[o + 1]);
  return function(a) {
    var s = Mf(e, a, 1, l) - 1;
    return r[s](i[s](a));
  };
}
function Io(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Qo() {
  var e = Cr, t = Cr, n = Li, l, i, r, o = He, a, s, f;
  function u() {
    var d = Math.min(e.length, t.length);
    return o !== He && (o = Hf(e[0], e[d - 1])), a = d > 2 ? Pf : Ff, s = f = null, c;
  }
  function c(d) {
    return d == null || isNaN(d = +d) ? r : (s || (s = a(e.map(l), t, n)))(l(o(d)));
  }
  return c.invert = function(d) {
    return o(i((f || (f = a(t, e.map(l), Gl)))(d)));
  }, c.domain = function(d) {
    return arguments.length ? (e = Array.from(d, Of), u()) : e.slice();
  }, c.range = function(d) {
    return arguments.length ? (t = Array.from(d), u()) : t.slice();
  }, c.rangeRound = function(d) {
    return t = Array.from(d), n = As, u();
  }, c.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : He, u()) : o !== He;
  }, c.interpolate = function(d) {
    return arguments.length ? (n = d, u()) : n;
  }, c.unknown = function(d) {
    return arguments.length ? (r = d, c) : r;
  }, function(d, m) {
    return l = d, i = m, u();
  };
}
function jf() {
  return Qo()(He, He);
}
function If(e, t, n, l) {
  var i = Tf(e, t, n), r;
  switch (l = jl(l ?? ",f"), l.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return l.precision == null && !isNaN(r = ns(i, o)) && (l.precision = r), No(l, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      l.precision == null && !isNaN(r = ls(i, Math.max(Math.abs(e), Math.abs(t)))) && (l.precision = r - (l.type === "e"));
      break;
    }
    case "f":
    case "%": {
      l.precision == null && !isNaN(r = To(i)) && (l.precision = r - (l.type === "%") * 2);
      break;
    }
  }
  return be(l);
}
function Bo(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var l = t();
    return Nf(l[0], l[l.length - 1], n ?? 10);
  }, e.tickFormat = function(n, l) {
    var i = t();
    return If(i[0], i[i.length - 1], n ?? 10, l);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var l = t(), i = 0, r = l.length - 1, o = l[i], a = l[r], s, f, u = 10;
    for (a < o && (f = o, o = a, a = f, f = i, i = r, r = f); u-- > 0; ) {
      if (f = vi(o, a, n), f === s)
        return l[i] = o, l[r] = a, t(l);
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
function nt() {
  var e = jf();
  return e.copy = function() {
    return Io(e, nt());
  }, Ul.apply(e, arguments), Bo(e);
}
function xr(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function Qf(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Bf(e) {
  return e < 0 ? -e * e : e * e;
}
function Gf(e) {
  var t = e(He, He), n = 1;
  function l() {
    return n === 1 ? e(He, He) : n === 0.5 ? e(Qf, Bf) : e(xr(n), xr(1 / n));
  }
  return t.exponent = function(i) {
    return arguments.length ? (n = +i, l()) : n;
  }, Bo(t);
}
function Go() {
  var e = Gf(Qo());
  return e.copy = function() {
    return Io(e, Go()).exponent(e.exponent());
  }, Ul.apply(e, arguments), e;
}
function Vf() {
  return Go.apply(null, arguments).exponent(0.5);
}
const mn = {
  x: nt,
  y: nt,
  z: nt,
  r: Vf
};
function Wf(e) {
  return e.constant ? "symlog" : e.base ? "log" : e.exponent ? e.exponent() === 0.5 ? "sqrt" : "pow" : "other";
}
function Mr(e) {
  return e;
}
function Kf(e) {
  return (t) => Math.log(e * t);
}
function Yf(e) {
  return (t) => e * Math.exp(t);
}
function Xf(e) {
  return (t) => Math.sign(t) * Math.log1p(Math.abs(t / e));
}
function Uf(e) {
  return (t) => Math.sign(t) * Math.expm1(Math.abs(t)) * e;
}
function Ll(e) {
  return function(n) {
    return n < 0 ? -Math.pow(-n, e) : Math.pow(n, e);
  };
}
function Zf(e) {
  const t = Wf(e);
  if (t === "log") {
    const n = Math.sign(e.domain()[0]);
    return { lift: Kf(n), ground: Yf(n), scaleType: t };
  }
  return t === "pow" ? { lift: Ll(1), ground: Ll(1 / 1), scaleType: t } : t === "sqrt" ? { lift: Ll(0.5), ground: Ll(1 / 0.5), scaleType: t } : t === "symlog" ? { lift: Xf(1), ground: Uf(1), scaleType: t } : { lift: Mr, ground: Mr, scaleType: t };
}
function Wl(e) {
  return e.replace(/^\w/, (t) => t.toUpperCase());
}
function ke(e, t = "") {
  return `scale${Wl(t)}${Wl(e)}`;
}
function Vo(e) {
  if (typeof e.bandwidth == "function")
    return typeof e.paddingInner == "function" ? ke("band") : ke("point");
  if (dn(Object.keys(e), ["domain", "range", "unknown", "copy"]))
    return ke("ordinal");
  let t = "";
  if (e.interpolator && (e.domain().length === 3 ? t = "diverging" : t = "sequential"), e.quantiles)
    return ke("quantile", t);
  if (e.thresholds)
    return ke("quantize", t);
  if (e.constant)
    return ke("symlog", t);
  if (e.base)
    return ke("log", t);
  if (e.exponent)
    return e.exponent() === 0.5 ? ke("sqrt", t) : ke("pow", t);
  if (dn(Object.keys(e), ["domain", "range", "invertExtent", "unknown", "copy"]))
    return ke("threshold");
  if (dn(Object.keys(e), ["invert", "range", "domain", "unknown", "copy", "ticks", "tickFormat", "nice"]))
    return ke("identity");
  if (dn(Object.keys(e), [
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
    return ke("radial");
  if (t)
    return ke(t);
  if (e.domain()[0] instanceof Date) {
    const n = /* @__PURE__ */ new Date();
    let l;
    return n.getDay = () => l = "time", n.getUTCDay = () => l = "utc", e.tickFormat(0, "%a")(n), ke(l);
  }
  return ke("linear");
}
const Jf = ["scaleThreshold", "scaleQuantile", "scaleQuantize", "scaleSequentialQuantile"];
function $f(e, t) {
  if (typeof e.range != "function")
    throw console.log(e), new Error("Scale method `range` must be a function");
  if (typeof e.domain != "function")
    throw new Error("Scale method `domain` must be a function");
  if (!Array.isArray(t) || Jf.includes(Vo(e)) || Po(e) === !0)
    return e.domain();
  const { lift: n, ground: l } = Zf(e), i = e.domain()[0], r = Object.prototype.toString.call(i) === "[object Date]", [o, a] = e.domain().map((m) => n(r ? m.getTime() : m)), [s, f] = e.range(), u = t[0] || 0, c = t[1] || 0, d = (a - o) / (Math.abs(f - s) - u - c);
  return [o - u * d, c * d + a].map((m) => l(r ? new Date(m) : m));
}
function eu(e, t, n, l, i) {
  let r, o;
  return i === !0 ? (r = 0, o = 100) : (r = e === "r" ? 1 : 0, o = e === "y" ? n : e === "r" ? 25 : t), l === !0 ? [o, r] : [r, o];
}
function tu(e, t, n, l, i, r) {
  return i ? typeof i == "function" ? i({ width: t, height: n }) : i : eu(e, t, n, l, r);
}
function El(e) {
  return function([n, l, i, r, o, a, s, f, u, c]) {
    if (l === null)
      return null;
    const d = tu(e, s, f, a, u, c), m = n === mn[e] ? n() : n.copy();
    return m.domain(i), (!m.interpolator || typeof m.interpolator == "function" && m.interpolator().name.startsWith("identity")) && m.range(d), r && m.domain($f(m, r)), (o === !0 || typeof o == "number") && (typeof m.nice == "function" ? m.nice(typeof o == "number" ? o : void 0) : console.error(`[Layer Cake] You set \`${e}Nice: true\` but the ${e}Scale does not have a \`.nice\` method. Ignoring...`)), m;
  };
}
function Dl([e, t]) {
  return (n) => {
    const l = e(n);
    return Array.isArray(l) ? l.map((i) => t(i)) : t(l);
  };
}
function Nl([e]) {
  if (typeof e == "function") {
    if (typeof e.range == "function")
      return e.range();
    console.error("[LayerCake] Your scale doesn't have a `.range` method?");
  }
  return null;
}
const Oe = "    ";
function nu(e) {
  const { r: t, g: n, b: l, opacity: i } = Ql(e);
  return [t, n, l].every((r) => r >= 0 && r <= 255) ? { r: t, g: n, b: l, o: i } : !1;
}
function lu({ r: e, g: t, b: n }) {
  return (0.2126 * e + 0.7152 * t + 0.0722 * n) / 255 > 0.6 ? "black" : "white";
}
function iu(e) {
  console.log("/********* LayerCake Debug ************/"), console.log("Bounding box:"), ru(e.boundingBox), console.log(`Scales:
`), Object.keys(e.activeGetters).forEach((t) => {
    ou(t, e[`${t}Scale`], e[t]);
  }), console.log(`/************ End LayerCake Debug ***************/
`);
}
function ru(e) {
  Object.entries(e).forEach(([t, n]) => {
    console.log(`${Oe}${t}:`, n);
  });
}
function ou(e, t, n) {
  const l = Vo(t);
  console.log(`${Oe}${e}:`), console.log(`${Oe}${Oe}Accessor: "${n.toString()}"`), console.log(`${Oe}${Oe}Type: ${l}`), Rr(t, "domain"), Rr(t, "range", " ");
}
function Rr(e, t, n = "") {
  const l = e[t](), i = su(l);
  i ? au(i, t, l) : console.log(`${Oe}${Oe}${Wl(t)}:${n}`, l);
}
function au(e, t, n) {
  console.log(
    `${Oe}${Oe}${Wl(t)}:    %cArray%c(${n.length}) ` + e[0] + "%c ]",
    "color: #1377e4",
    "color: #737373",
    "color: #1478e4",
    ...e[1],
    "color: #1478e4"
  );
}
function su(e) {
  const t = [], n = e.map((l, i) => {
    const r = nu(l);
    if (r !== !1) {
      t.push(r);
      const o = i === e.length - 1 ? " " : "";
      return `%c ${l}${o}`;
    }
    return l;
  });
  return t.length ? [
    `%c[ ${n.join(", ")}`,
    t.map(
      (l) => `background-color: rgba(${l.r}, ${l.g}, ${l.b}, ${l.o}); color:${lu(l)};`
    )
  ] : null;
}
const fu = (e) => ({
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
}), zr = (e) => ({
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
function Ar(e) {
  let t, n, l;
  const i = (
    /*#slots*/
    e[153].default
  ), r = Fe(
    i,
    e,
    /*$$scope*/
    e[152],
    zr
  );
  return {
    c() {
      t = k("div"), r && r.c(), b(t, "class", "layercake-container svelte-vhzpsp"), Hl(() => (
        /*div_elementresize_handler*/
        e[155].call(t)
      )), W(
        t,
        "position",
        /*position*/
        e[5]
      ), W(
        t,
        "top",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), W(
        t,
        "right",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), W(
        t,
        "bottom",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), W(
        t,
        "left",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), W(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[4] === !1 ? "none" : null
      );
    },
    m(o, a) {
      A(o, t, a), r && r.m(t, null), e[154](t), n = fa(
        t,
        /*div_elementresize_handler*/
        e[155].bind(t)
      ), l = !0;
    },
    p(o, a) {
      r && r.p && (!l || a[0] & /*element, $activeGetters_d, $_x, $_y, $_z, $_r, $_custom, $_data, $_xNice, $_yNice, $_zNice, $_rNice, $_xReverse, $_yReverse, $_zReverse, $_rReverse, $_xPadding, $_yPadding, $_zPadding, $_rPadding, $_flatData, $_config, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
      2147483588 | a[1] & /*$width_d, $height_d, $aspectRatio_d, $_containerWidth, $_containerHeight, $_percentRange, $padding_d, $extents_d, $xDomain_d, $yDomain_d, $zDomain_d, $rDomain_d, $xRange_d, $yRange_d, $zRange_d, $rRange_d, $xGet_d, $yGet_d, $zGet_d, $rGet_d*/
      1048575 | a[4] & /*$$scope*/
      268435456) && je(
        r,
        i,
        o,
        /*$$scope*/
        o[152],
        l ? Pe(
          i,
          /*$$scope*/
          o[152],
          a,
          fu
        ) : Ie(
          /*$$scope*/
          o[152]
        ),
        zr
      ), a[0] & /*position*/
      32 && W(
        t,
        "position",
        /*position*/
        o[5]
      ), a[0] & /*position*/
      32 && W(
        t,
        "top",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && W(
        t,
        "right",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && W(
        t,
        "bottom",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && W(
        t,
        "left",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), a[0] & /*pointerEvents*/
      16 && W(
        t,
        "pointer-events",
        /*pointerEvents*/
        o[4] === !1 ? "none" : null
      );
    },
    i(o) {
      l || (C(r, o), l = !0);
    },
    o(o) {
      z(r, o), l = !1;
    },
    d(o) {
      o && R(t), r && r.d(o), e[154](null), n();
    }
  };
}
function uu(e) {
  let t, n, l = (
    /*ssr*/
    (e[3] === !0 || typeof window < "u") && Ar(e)
  );
  return {
    c() {
      l && l.c(), t = ue();
    },
    m(i, r) {
      l && l.m(i, r), A(i, t, r), n = !0;
    },
    p(i, r) {
      /*ssr*/
      i[3] === !0 || typeof window < "u" ? l ? (l.p(i, r), r[0] & /*ssr*/
      8 && C(l, 1)) : (l = Ar(i), l.c(), C(l, 1), l.m(t.parentNode, t)) : l && (ne(), z(l, 1, 1, () => {
        l = null;
      }), le());
    },
    i(i) {
      n || (C(l), n = !0);
    },
    o(i) {
      z(l), n = !1;
    },
    d(i) {
      l && l.d(i), i && R(t);
    }
  };
}
function cu(e, t, n) {
  let l, i, r, o, a, s, f, u, c, d, m, h, g, p, w, v, M, N, q, L, D, O, T, S, F, x, E, U, j, V, ee, $, ae, I, oe, he, ve, Se, ze, pe, Ce, Le, Ae, Ee, Te, Ye, Xe, Sn, Cn, xn, Ue, Ze, Mn, Rn, zn, An, Ln, En, Dn, Nn, Tn, qn, { $$slots: $l = {}, $$scope: On } = t;
  const ei = gf(iu, 200);
  let { ssr: It = !1 } = t, { pointerEvents: Hn = !0 } = t, { position: Q = "relative" } = t, { percentRange: ft = !1 } = t, { width: Qt = void 0 } = t, { height: ut = void 0 } = t, { containerWidth: ct = Qt || 100 } = t, { containerHeight: dt = ut || 100 } = t, { element: Fn = void 0 } = t, { x: mt = void 0 } = t, { y: bt = void 0 } = t, { z: ht = void 0 } = t, { r: gt = void 0 } = t, { data: _t = [] } = t, { xDomain: yt = void 0 } = t, { yDomain: pt = void 0 } = t, { zDomain: kt = void 0 } = t, { rDomain: wt = void 0 } = t, { xNice: Pn = !1 } = t, { yNice: jn = !1 } = t, { zNice: In = !1 } = t, { rNice: Qn = !1 } = t, { xPadding: Bn = void 0 } = t, { yPadding: Gn = void 0 } = t, { zPadding: Vn = void 0 } = t, { rPadding: Wn = void 0 } = t, { xScale: Kn = mn.x } = t, { yScale: Bt = mn.y } = t, { zScale: Yn = mn.z } = t, { rScale: Xn = mn.r } = t, { xRange: vt = void 0 } = t, { yRange: St = void 0 } = t, { zRange: Ct = void 0 } = t, { rRange: xt = void 0 } = t, { xReverse: Un = !1 } = t, { yReverse: Zn = void 0 } = t, { zReverse: Jn = !1 } = t, { rReverse: $n = !1 } = t, { padding: el = {} } = t, { extents: tl = {} } = t, { flatData: nl = void 0 } = t, { custom: ll = {} } = t, { debug: ti = !1 } = t, ni = !1;
  st(() => {
    ni = !0;
  });
  const se = {}, Je = te(ft);
  P(e, Je, (y) => n(33, Te = y));
  const Mt = te(ct);
  P(e, Mt, (y) => n(32, Ee = y));
  const Rt = te(dt);
  P(e, Rt, (y) => n(31, Ae = y));
  const il = te(_i(tl));
  P(e, il, (y) => n(170, Le = y));
  const rl = te(_t);
  P(e, rl, (y) => n(30, Ce = y));
  const Gt = te(nl || _t);
  P(e, Gt, (y) => n(29, pe = y));
  const ol = te(el);
  P(e, ol, (y) => n(169, ze = y));
  const zt = te(tt(mt));
  P(e, zt, (y) => n(28, Se = y));
  const At = te(tt(bt));
  P(e, At, (y) => n(27, ve = y));
  const Lt = te(tt(ht));
  P(e, Lt, (y) => n(26, he = y));
  const Et = te(tt(gt));
  P(e, Et, (y) => n(25, oe = y));
  const al = te(yt);
  P(e, al, (y) => n(168, I = y));
  const sl = te(pt);
  P(e, sl, (y) => n(167, ae = y));
  const fl = te(kt);
  P(e, fl, (y) => n(166, $ = y));
  const ul = te(wt);
  P(e, ul, (y) => n(165, ee = y));
  const Vt = te(Pn);
  P(e, Vt, (y) => n(24, V = y));
  const Wt = te(jn);
  P(e, Wt, (y) => n(23, j = y));
  const Kt = te(In);
  P(e, Kt, (y) => n(22, U = y));
  const Yt = te(Qn);
  P(e, Yt, (y) => n(21, E = y));
  const Xt = te(Un);
  P(e, Xt, (y) => n(20, x = y));
  const Ut = te(l);
  P(e, Ut, (y) => n(19, F = y));
  const Zt = te(Jn);
  P(e, Zt, (y) => n(18, S = y));
  const Jt = te($n);
  P(e, Jt, (y) => n(17, T = y));
  const $t = te(Bn);
  P(e, $t, (y) => n(16, O = y));
  const en = te(Gn);
  P(e, en, (y) => n(15, D = y));
  const tn = te(Vn);
  P(e, tn, (y) => n(14, L = y));
  const nn = te(Wn);
  P(e, nn, (y) => n(13, q = y));
  const cl = te(vt);
  P(e, cl, (y) => n(164, N = y));
  const dl = te(St);
  P(e, dl, (y) => n(163, M = y));
  const ml = te(Ct);
  P(e, ml, (y) => n(162, v = y));
  const bl = te(xt);
  P(e, bl, (y) => n(161, w = y));
  const ln = te(Kn);
  P(e, ln, (y) => n(160, p = y));
  const rn = te(Bt);
  P(e, rn, (y) => n(159, g = y));
  const on = te(Yn);
  P(e, on, (y) => n(158, h = y));
  const an = te(Xn);
  P(e, an, (y) => n(157, m = y));
  const hl = te(se);
  P(e, hl, (y) => n(11, c = y));
  const gl = te(ll);
  P(e, gl, (y) => n(12, d = y));
  const _l = me([zt, At, Lt, Et], ([y, Ve, qe, _e]) => {
    const it = {};
    return y && (it.x = y), Ve && (it.y = Ve), qe && (it.z = qe), _e && (it.r = _e), it;
  });
  P(e, _l, (y) => n(10, f = y));
  const yl = me([ol, Mt, Rt], ([y]) => Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, y));
  P(e, yl, (y) => n(37, Cn = y));
  const pl = me([Mt, Rt, yl], ([y, Ve, qe]) => {
    const _e = {};
    return _e.top = qe.top, _e.right = y - qe.right, _e.bottom = Ve - qe.bottom, _e.left = qe.left, _e.width = _e.right - _e.left, _e.height = _e.bottom - _e.top, _e.width <= 0 && ni === !0 && console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?"), _e.height <= 0 && ni === !0 && console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?"), _e;
  });
  P(e, pl, (y) => n(151, u = y));
  const $e = me([pl], ([y]) => y.width);
  P(e, $e, (y) => n(34, Ye = y));
  const et = me([pl], ([y]) => y.height);
  P(e, et, (y) => n(35, Xe = y));
  const De = me([Gt, _l, il, ln, rn, an, on], ([y, Ve, qe, _e, it, ea, ta]) => {
    const na = {
      x: _e,
      y: it,
      r: ea,
      z: ta
    }, di = _i(Ve, qe), la = Object.fromEntries(Object.keys(di).map((mi) => [mi, na[mi]]));
    return Object.keys(di).length > 0 ? { ...pf(y, di, la), ...qe } : {};
  });
  P(e, De, (y) => n(38, xn = y));
  const kl = me([De, al], Al("x"));
  P(e, kl, (y) => n(39, Ue = y));
  const wl = me([De, sl], Al("y"));
  P(e, wl, (y) => n(40, Ze = y));
  const vl = me([De, fl], Al("z"));
  P(e, vl, (y) => n(41, Mn = y));
  const Sl = me([De, ul], Al("r"));
  P(e, Sl, (y) => n(42, Rn = y));
  const sn = me(
    [
      ln,
      De,
      kl,
      $t,
      Vt,
      Xt,
      $e,
      et,
      cl,
      Je
    ],
    El("x")
  );
  P(e, sn, (y) => n(9, s = y));
  const li = me([zt, sn], Dl);
  P(e, li, (y) => n(47, Dn = y));
  const fn = me(
    [
      rn,
      De,
      wl,
      en,
      Wt,
      Ut,
      $e,
      et,
      dl,
      Je
    ],
    El("y")
  );
  P(e, fn, (y) => n(8, a = y));
  const ii = me([At, fn], Dl);
  P(e, ii, (y) => n(48, Nn = y));
  const un = me(
    [
      on,
      De,
      vl,
      tn,
      Kt,
      Zt,
      $e,
      et,
      ml,
      Je
    ],
    El("z")
  );
  P(e, un, (y) => n(7, o = y));
  const ri = me([Lt, un], Dl);
  P(e, ri, (y) => n(49, Tn = y));
  const cn = me(
    [
      an,
      De,
      Sl,
      nn,
      Yt,
      Jt,
      $e,
      et,
      bl,
      Je
    ],
    El("r")
  );
  P(e, cn, (y) => n(6, r = y));
  const oi = me([Et, cn], Dl);
  P(e, oi, (y) => n(50, qn = y));
  const ai = me([sn], Nl);
  P(e, ai, (y) => n(43, zn = y));
  const si = me([fn], Nl);
  P(e, si, (y) => n(44, An = y));
  const fi = me([un], Nl);
  P(e, fi, (y) => n(45, Ln = y));
  const ui = me([cn], Nl);
  P(e, ui, (y) => n(46, En = y));
  const ci = me([$e, et], ([y, Ve]) => y / Ve);
  P(e, ci, (y) => n(36, Sn = y));
  function Jo(y) {
    Me[y ? "unshift" : "push"](() => {
      Fn = y, n(2, Fn);
    });
  }
  function $o() {
    ct = this.clientWidth, dt = this.clientHeight, n(0, ct), n(1, dt);
  }
  return e.$$set = (y) => {
    "ssr" in y && n(3, It = y.ssr), "pointerEvents" in y && n(4, Hn = y.pointerEvents), "position" in y && n(5, Q = y.position), "percentRange" in y && n(111, ft = y.percentRange), "width" in y && n(112, Qt = y.width), "height" in y && n(113, ut = y.height), "containerWidth" in y && n(0, ct = y.containerWidth), "containerHeight" in y && n(1, dt = y.containerHeight), "element" in y && n(2, Fn = y.element), "x" in y && n(114, mt = y.x), "y" in y && n(115, bt = y.y), "z" in y && n(116, ht = y.z), "r" in y && n(117, gt = y.r), "data" in y && n(118, _t = y.data), "xDomain" in y && n(119, yt = y.xDomain), "yDomain" in y && n(120, pt = y.yDomain), "zDomain" in y && n(121, kt = y.zDomain), "rDomain" in y && n(122, wt = y.rDomain), "xNice" in y && n(123, Pn = y.xNice), "yNice" in y && n(124, jn = y.yNice), "zNice" in y && n(125, In = y.zNice), "rNice" in y && n(126, Qn = y.rNice), "xPadding" in y && n(127, Bn = y.xPadding), "yPadding" in y && n(128, Gn = y.yPadding), "zPadding" in y && n(129, Vn = y.zPadding), "rPadding" in y && n(130, Wn = y.rPadding), "xScale" in y && n(131, Kn = y.xScale), "yScale" in y && n(132, Bt = y.yScale), "zScale" in y && n(133, Yn = y.zScale), "rScale" in y && n(134, Xn = y.rScale), "xRange" in y && n(135, vt = y.xRange), "yRange" in y && n(136, St = y.yRange), "zRange" in y && n(137, Ct = y.zRange), "rRange" in y && n(138, xt = y.rRange), "xReverse" in y && n(139, Un = y.xReverse), "yReverse" in y && n(140, Zn = y.yReverse), "zReverse" in y && n(141, Jn = y.zReverse), "rReverse" in y && n(142, $n = y.rReverse), "padding" in y && n(143, el = y.padding), "extents" in y && n(144, tl = y.extents), "flatData" in y && n(145, nl = y.flatData), "custom" in y && n(146, ll = y.custom), "debug" in y && n(147, ti = y.debug), "$$scope" in y && n(152, On = y.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[4] & /*yReverse, yScale*/
    65792 && n(150, l = typeof Zn > "u" ? typeof Bt.bandwidth != "function" : Zn), e.$$.dirty[3] & /*x*/
    2097152 && mt && n(148, se.x = mt, se), e.$$.dirty[3] & /*y*/
    4194304 && bt && n(148, se.y = bt, se), e.$$.dirty[3] & /*z*/
    8388608 && ht && n(148, se.z = ht, se), e.$$.dirty[3] & /*r*/
    16777216 && gt && n(148, se.r = gt, se), e.$$.dirty[3] & /*xDomain*/
    67108864 && yt && n(148, se.xDomain = yt, se), e.$$.dirty[3] & /*yDomain*/
    134217728 && pt && n(148, se.yDomain = pt, se), e.$$.dirty[3] & /*zDomain*/
    268435456 && kt && n(148, se.zDomain = kt, se), e.$$.dirty[3] & /*rDomain*/
    536870912 && wt && n(148, se.rDomain = wt, se), e.$$.dirty[4] & /*xRange*/
    2048 && vt && n(148, se.xRange = vt, se), e.$$.dirty[4] & /*yRange*/
    4096 && St && n(148, se.yRange = St, se), e.$$.dirty[4] & /*zRange*/
    8192 && Ct && n(148, se.zRange = Ct, se), e.$$.dirty[4] & /*rRange*/
    16384 && xt && n(148, se.rRange = xt, se), e.$$.dirty[3] & /*percentRange*/
    262144 && ie(Je, Te = ft, Te), e.$$.dirty[0] & /*containerWidth*/
    1 && ie(Mt, Ee = ct, Ee), e.$$.dirty[0] & /*containerHeight*/
    2 && ie(Rt, Ae = dt, Ae), e.$$.dirty[4] & /*extents*/
    1048576 && ie(il, Le = _i(tl), Le), e.$$.dirty[3] & /*data*/
    33554432 && ie(rl, Ce = _t, Ce), e.$$.dirty[3] & /*data*/
    33554432 | e.$$.dirty[4] & /*flatData*/
    2097152 && ie(Gt, pe = nl || _t, pe), e.$$.dirty[4] & /*padding*/
    524288 && ie(ol, ze = el, ze), e.$$.dirty[3] & /*x*/
    2097152 && ie(zt, Se = tt(mt), Se), e.$$.dirty[3] & /*y*/
    4194304 && ie(At, ve = tt(bt), ve), e.$$.dirty[3] & /*z*/
    8388608 && ie(Lt, he = tt(ht), he), e.$$.dirty[3] & /*r*/
    16777216 && ie(Et, oe = tt(gt), oe), e.$$.dirty[3] & /*xDomain*/
    67108864 && ie(al, I = yt, I), e.$$.dirty[3] & /*yDomain*/
    134217728 && ie(sl, ae = pt, ae), e.$$.dirty[3] & /*zDomain*/
    268435456 && ie(fl, $ = kt, $), e.$$.dirty[3] & /*rDomain*/
    536870912 && ie(ul, ee = wt, ee), e.$$.dirty[3] & /*xNice*/
    1073741824 && ie(Vt, V = Pn, V), e.$$.dirty[4] & /*yNice*/
    1 && ie(Wt, j = jn, j), e.$$.dirty[4] & /*zNice*/
    2 && ie(Kt, U = In, U), e.$$.dirty[4] & /*rNice*/
    4 && ie(Yt, E = Qn, E), e.$$.dirty[4] & /*xReverse*/
    32768 && ie(Xt, x = Un, x), e.$$.dirty[4] & /*yReverseValue*/
    67108864 && ie(Ut, F = l, F), e.$$.dirty[4] & /*zReverse*/
    131072 && ie(Zt, S = Jn, S), e.$$.dirty[4] & /*rReverse*/
    262144 && ie(Jt, T = $n, T), e.$$.dirty[4] & /*xPadding*/
    8 && ie($t, O = Bn, O), e.$$.dirty[4] & /*yPadding*/
    16 && ie(en, D = Gn, D), e.$$.dirty[4] & /*zPadding*/
    32 && ie(tn, L = Vn, L), e.$$.dirty[4] & /*rPadding*/
    64 && ie(nn, q = Wn, q), e.$$.dirty[4] & /*xRange*/
    2048 && ie(cl, N = vt, N), e.$$.dirty[4] & /*yRange*/
    4096 && ie(dl, M = St, M), e.$$.dirty[4] & /*zRange*/
    8192 && ie(ml, v = Ct, v), e.$$.dirty[4] & /*rRange*/
    16384 && ie(bl, w = xt, w), e.$$.dirty[4] & /*xScale*/
    128 && ie(ln, p = Kn, p), e.$$.dirty[4] & /*yScale*/
    256 && ie(rn, g = Bt, g), e.$$.dirty[4] & /*zScale*/
    512 && ie(on, h = Yn, h), e.$$.dirty[4] & /*rScale*/
    1024 && ie(an, m = Xn, m), e.$$.dirty[4] & /*custom*/
    4194304 && ie(gl, d = ll, d), e.$$.dirty[4] & /*config*/
    16777216 && ie(hl, c = se, c), e.$$.dirty[4] & /*context*/
    33554432 && da("LayerCake", i), e.$$.dirty[0] & /*ssr, $activeGetters_d, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
    1992 | e.$$.dirty[4] & /*$box_d, debug, config*/
    159383552 && u && ti === !0 && (It === !0 || typeof window < "u") && ei({
      boundingBox: u,
      activeGetters: f,
      x: se.x,
      y: se.y,
      z: se.z,
      r: se.r,
      xScale: s,
      yScale: a,
      zScale: o,
      rScale: r
    });
  }, n(149, i = {
    activeGetters: _l,
    width: $e,
    height: et,
    percentRange: Je,
    aspectRatio: ci,
    containerWidth: Mt,
    containerHeight: Rt,
    x: zt,
    y: At,
    z: Lt,
    r: Et,
    custom: gl,
    data: rl,
    xNice: Vt,
    yNice: Wt,
    zNice: Kt,
    rNice: Yt,
    xReverse: Xt,
    yReverse: Ut,
    zReverse: Zt,
    rReverse: Jt,
    xPadding: $t,
    yPadding: en,
    zPadding: tn,
    rPadding: nn,
    padding: yl,
    flatData: Gt,
    extents: De,
    xDomain: kl,
    yDomain: wl,
    zDomain: vl,
    rDomain: Sl,
    xRange: ai,
    yRange: si,
    zRange: fi,
    rRange: ui,
    config: hl,
    xScale: sn,
    xGet: li,
    yScale: fn,
    yGet: ii,
    zScale: un,
    zGet: ri,
    rScale: cn,
    rGet: oi
  }), [
    ct,
    dt,
    Fn,
    It,
    Hn,
    Q,
    r,
    o,
    a,
    s,
    f,
    c,
    d,
    q,
    L,
    D,
    O,
    T,
    S,
    F,
    x,
    E,
    U,
    j,
    V,
    oe,
    he,
    ve,
    Se,
    pe,
    Ce,
    Ae,
    Ee,
    Te,
    Ye,
    Xe,
    Sn,
    Cn,
    xn,
    Ue,
    Ze,
    Mn,
    Rn,
    zn,
    An,
    Ln,
    En,
    Dn,
    Nn,
    Tn,
    qn,
    Je,
    Mt,
    Rt,
    il,
    rl,
    Gt,
    ol,
    zt,
    At,
    Lt,
    Et,
    al,
    sl,
    fl,
    ul,
    Vt,
    Wt,
    Kt,
    Yt,
    Xt,
    Ut,
    Zt,
    Jt,
    $t,
    en,
    tn,
    nn,
    cl,
    dl,
    ml,
    bl,
    ln,
    rn,
    on,
    an,
    hl,
    gl,
    _l,
    yl,
    pl,
    $e,
    et,
    De,
    kl,
    wl,
    vl,
    Sl,
    sn,
    li,
    fn,
    ii,
    un,
    ri,
    cn,
    oi,
    ai,
    si,
    fi,
    ui,
    ci,
    ft,
    Qt,
    ut,
    mt,
    bt,
    ht,
    gt,
    _t,
    yt,
    pt,
    kt,
    wt,
    Pn,
    jn,
    In,
    Qn,
    Bn,
    Gn,
    Vn,
    Wn,
    Kn,
    Bt,
    Yn,
    Xn,
    vt,
    St,
    Ct,
    xt,
    Un,
    Zn,
    Jn,
    $n,
    el,
    tl,
    nl,
    ll,
    ti,
    se,
    i,
    l,
    u,
    On,
    $l,
    Jo,
    $o
  ];
}
class Jl extends de {
  constructor(t) {
    super(), ce(
      this,
      t,
      cu,
      uu,
      fe,
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
const du = (e) => ({ element: e & /*element*/
1 }), Lr = (e) => ({ element: (
  /*element*/
  e[0]
) });
function mu(e) {
  let t, n;
  const l = (
    /*#slots*/
    e[11].default
  ), i = Fe(
    l,
    e,
    /*$$scope*/
    e[10],
    Lr
  );
  return {
    c() {
      t = k("div"), i && i.c(), b(t, "class", "layercake-layout-html svelte-1bu60uu"), b(
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
      ), W(
        t,
        "z-index",
        /*zIndex*/
        e[1]
      ), W(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[2] === !1 ? "none" : null
      ), W(
        t,
        "top",
        /*$padding*/
        e[7].top + "px"
      ), W(
        t,
        "right",
        /*$padding*/
        e[7].right + "px"
      ), W(
        t,
        "bottom",
        /*$padding*/
        e[7].bottom + "px"
      ), W(
        t,
        "left",
        /*$padding*/
        e[7].left + "px"
      );
    },
    m(r, o) {
      A(r, t, o), i && i.m(t, null), e[12](t), n = !0;
    },
    p(r, [o]) {
      i && i.p && (!n || o & /*$$scope, element*/
      1025) && je(
        i,
        l,
        r,
        /*$$scope*/
        r[10],
        n ? Pe(
          l,
          /*$$scope*/
          r[10],
          o,
          du
        ) : Ie(
          /*$$scope*/
          r[10]
        ),
        Lr
      ), (!n || o & /*roleVal*/
      64) && b(
        t,
        "role",
        /*roleVal*/
        r[6]
      ), (!n || o & /*label*/
      8) && b(
        t,
        "aria-label",
        /*label*/
        r[3]
      ), (!n || o & /*labelledBy*/
      16) && b(
        t,
        "aria-labelledby",
        /*labelledBy*/
        r[4]
      ), (!n || o & /*describedBy*/
      32) && b(
        t,
        "aria-describedby",
        /*describedBy*/
        r[5]
      ), o & /*zIndex*/
      2 && W(
        t,
        "z-index",
        /*zIndex*/
        r[1]
      ), o & /*pointerEvents*/
      4 && W(
        t,
        "pointer-events",
        /*pointerEvents*/
        r[2] === !1 ? "none" : null
      ), o & /*$padding*/
      128 && W(
        t,
        "top",
        /*$padding*/
        r[7].top + "px"
      ), o & /*$padding*/
      128 && W(
        t,
        "right",
        /*$padding*/
        r[7].right + "px"
      ), o & /*$padding*/
      128 && W(
        t,
        "bottom",
        /*$padding*/
        r[7].bottom + "px"
      ), o & /*$padding*/
      128 && W(
        t,
        "left",
        /*$padding*/
        r[7].left + "px"
      );
    },
    i(r) {
      n || (C(i, r), n = !0);
    },
    o(r) {
      z(i, r), n = !1;
    },
    d(r) {
      r && R(t), i && i.d(r), e[12](null);
    }
  };
}
function bu(e, t, n) {
  let l, i, { $$slots: r = {}, $$scope: o } = t;
  const { padding: a } = wn("LayerCake");
  P(e, a, (p) => n(7, i = p));
  let { element: s = void 0 } = t, { zIndex: f = void 0 } = t, { pointerEvents: u = void 0 } = t, { role: c = void 0 } = t, { label: d = void 0 } = t, { labelledBy: m = void 0 } = t, { describedBy: h = void 0 } = t;
  function g(p) {
    Me[p ? "unshift" : "push"](() => {
      s = p, n(0, s);
    });
  }
  return e.$$set = (p) => {
    "element" in p && n(0, s = p.element), "zIndex" in p && n(1, f = p.zIndex), "pointerEvents" in p && n(2, u = p.pointerEvents), "role" in p && n(9, c = p.role), "label" in p && n(3, d = p.label), "labelledBy" in p && n(4, m = p.labelledBy), "describedBy" in p && n(5, h = p.describedBy), "$$scope" in p && n(10, o = p.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*role, label, labelledBy, describedBy*/
    568 && n(6, l = c || (d || m || h ? "figure" : void 0));
  }, [
    s,
    f,
    u,
    d,
    m,
    h,
    l,
    i,
    a,
    c,
    o,
    r,
    g
  ];
}
class Wo extends de {
  constructor(t) {
    super(), ce(this, t, bu, mu, fe, {
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
const hu = (e) => ({ element: e & /*element*/
1 }), Er = (e) => ({ element: (
  /*element*/
  e[0]
) }), gu = (e) => ({ element: e & /*element*/
1 }), Dr = (e) => ({ element: (
  /*element*/
  e[0]
) }), _u = (e) => ({ element: e & /*element*/
1 }), Nr = (e) => ({ element: (
  /*element*/
  e[0]
) });
function Tr(e) {
  let t, n;
  return {
    c() {
      t = ge("title"), n = B(
        /*title*/
        e[8]
      );
    },
    m(l, i) {
      A(l, t, i), _(t, n);
    },
    p(l, i) {
      i & /*title*/
      256 && Z(
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
function yu(e) {
  let t, n = (
    /*title*/
    e[8] && Tr(e)
  );
  return {
    c() {
      n && n.c(), t = ue();
    },
    m(l, i) {
      n && n.m(l, i), A(l, t, i);
    },
    p(l, i) {
      /*title*/
      l[8] ? n ? n.p(l, i) : (n = Tr(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(l) {
      n && n.d(l), l && R(t);
    }
  };
}
function pu(e) {
  let t, n, l, i, r;
  const o = (
    /*#slots*/
    e[16].title
  ), a = Fe(
    o,
    e,
    /*$$scope*/
    e[15],
    Nr
  ), s = a || yu(e), f = (
    /*#slots*/
    e[16].defs
  ), u = Fe(
    f,
    e,
    /*$$scope*/
    e[15],
    Dr
  ), c = (
    /*#slots*/
    e[16].default
  ), d = Fe(
    c,
    e,
    /*$$scope*/
    e[15],
    Er
  );
  return {
    c() {
      t = ge("svg"), s && s.c(), n = ge("defs"), u && u.c(), l = ge("g"), d && d.c(), b(l, "class", "layercake-layout-svg_g"), b(l, "transform", i = "translate(" + /*$padding*/
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
      ), W(
        t,
        "z-index",
        /*zIndex*/
        e[2]
      ), W(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[3] === !1 ? "none" : null
      );
    },
    m(m, h) {
      A(m, t, h), s && s.m(t, null), _(t, n), u && u.m(n, null), _(t, l), d && d.m(l, null), e[17](l), e[18](t), r = !0;
    },
    p(m, [h]) {
      a ? a.p && (!r || h & /*$$scope, element*/
      32769) && je(
        a,
        o,
        m,
        /*$$scope*/
        m[15],
        r ? Pe(
          o,
          /*$$scope*/
          m[15],
          h,
          _u
        ) : Ie(
          /*$$scope*/
          m[15]
        ),
        Nr
      ) : s && s.p && (!r || h & /*title*/
      256) && s.p(m, r ? h : -1), u && u.p && (!r || h & /*$$scope, element*/
      32769) && je(
        u,
        f,
        m,
        /*$$scope*/
        m[15],
        r ? Pe(
          f,
          /*$$scope*/
          m[15],
          h,
          gu
        ) : Ie(
          /*$$scope*/
          m[15]
        ),
        Dr
      ), d && d.p && (!r || h & /*$$scope, element*/
      32769) && je(
        d,
        c,
        m,
        /*$$scope*/
        m[15],
        r ? Pe(
          c,
          /*$$scope*/
          m[15],
          h,
          hu
        ) : Ie(
          /*$$scope*/
          m[15]
        ),
        Er
      ), (!r || h & /*$padding*/
      2048 && i !== (i = "translate(" + /*$padding*/
      m[11].left + ", " + /*$padding*/
      m[11].top + ")")) && b(l, "transform", i), (!r || h & /*viewBox*/
      16) && b(
        t,
        "viewBox",
        /*viewBox*/
        m[4]
      ), (!r || h & /*$containerWidth*/
      512) && b(
        t,
        "width",
        /*$containerWidth*/
        m[9]
      ), (!r || h & /*$containerHeight*/
      1024) && b(
        t,
        "height",
        /*$containerHeight*/
        m[10]
      ), (!r || h & /*label*/
      32) && b(
        t,
        "aria-label",
        /*label*/
        m[5]
      ), (!r || h & /*labelledBy*/
      64) && b(
        t,
        "aria-labelledby",
        /*labelledBy*/
        m[6]
      ), (!r || h & /*describedBy*/
      128) && b(
        t,
        "aria-describedby",
        /*describedBy*/
        m[7]
      ), h & /*zIndex*/
      4 && W(
        t,
        "z-index",
        /*zIndex*/
        m[2]
      ), h & /*pointerEvents*/
      8 && W(
        t,
        "pointer-events",
        /*pointerEvents*/
        m[3] === !1 ? "none" : null
      );
    },
    i(m) {
      r || (C(s, m), C(u, m), C(d, m), r = !0);
    },
    o(m) {
      z(s, m), z(u, m), z(d, m), r = !1;
    },
    d(m) {
      m && R(t), s && s.d(m), u && u.d(m), d && d.d(m), e[17](null), e[18](null);
    }
  };
}
function ku(e, t, n) {
  let l, i, r, { $$slots: o = {}, $$scope: a } = t, { element: s = void 0 } = t, { innerElement: f = void 0 } = t, { zIndex: u = void 0 } = t, { pointerEvents: c = void 0 } = t, { viewBox: d = void 0 } = t, { label: m = void 0 } = t, { labelledBy: h = void 0 } = t, { describedBy: g = void 0 } = t, { title: p = void 0 } = t;
  const { containerWidth: w, containerHeight: v, padding: M } = wn("LayerCake");
  P(e, w, (L) => n(9, l = L)), P(e, v, (L) => n(10, i = L)), P(e, M, (L) => n(11, r = L));
  function N(L) {
    Me[L ? "unshift" : "push"](() => {
      f = L, n(1, f);
    });
  }
  function q(L) {
    Me[L ? "unshift" : "push"](() => {
      s = L, n(0, s);
    });
  }
  return e.$$set = (L) => {
    "element" in L && n(0, s = L.element), "innerElement" in L && n(1, f = L.innerElement), "zIndex" in L && n(2, u = L.zIndex), "pointerEvents" in L && n(3, c = L.pointerEvents), "viewBox" in L && n(4, d = L.viewBox), "label" in L && n(5, m = L.label), "labelledBy" in L && n(6, h = L.labelledBy), "describedBy" in L && n(7, g = L.describedBy), "title" in L && n(8, p = L.title), "$$scope" in L && n(15, a = L.$$scope);
  }, [
    s,
    f,
    u,
    c,
    d,
    m,
    h,
    g,
    p,
    l,
    i,
    r,
    w,
    v,
    M,
    a,
    o,
    N,
    q
  ];
}
class Ko extends de {
  constructor(t) {
    super(), ce(this, t, ku, pu, fe, {
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
function qr(e, t, n) {
  const l = e.slice();
  l[29] = t[n], l[36] = n;
  const i = (
    /*columnHeight*/
    l[6](
      /*d*/
      l[29]
    )
  );
  l[30] = i;
  const r = (
    /*$xGet*/
    l[3](
      /*d*/
      l[29]
    )
  );
  l[31] = r;
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
function Or(e) {
  let t, n = (
    /*yValue*/
    e[34] + ""
  ), l, i, r;
  return {
    c() {
      t = ge("text"), l = B(n), b(t, "x", i = /*xPos*/
      e[32] + /*colWidth*/
      e[33] / 2), b(t, "y", r = /*$height*/
      e[12] - /*colHeight*/
      e[30] - 5), b(t, "text-anchor", "middle"), b(t, "class", "svelte-1c28ck9");
    },
    m(o, a) {
      A(o, t, a), _(t, l);
    },
    p(o, a) {
      a[0] & /*$y, $data*/
      1280 && n !== (n = /*yValue*/
      o[34] + "") && Z(l, n), a[0] & /*$xGet, $data, $xScale, columnWidth*/
      904 && i !== (i = /*xPos*/
      o[32] + /*colWidth*/
      o[33] / 2) && b(t, "x", i), a[0] & /*$height, columnHeight, $data*/
      4416 && r !== (r = /*$height*/
      o[12] - /*colHeight*/
      o[30] - 5) && b(t, "y", r);
    },
    d(o) {
      o && R(t);
    }
  };
}
function Hr(e) {
  let t, n, l, i, r, o, a, s, f, u, c, d, m, h, g;
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
    e[34] && Or(e)
  );
  return {
    c() {
      t = ge("rect"), u = ge("rect"), w && w.c(), m = ue(), b(t, "class", "group-rect svelte-1c28ck9"), b(
        t,
        "data-id",
        /*i*/
        e[36]
      ), b(t, "data-range", n = /*$x*/
      e[11](
        /*d*/
        e[29]
      )), b(t, "data-count", l = /*yValue*/
      e[34]), b(t, "x", i = /*xPos*/
      e[32]), b(t, "y", r = /*$yGet*/
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
      ), b(t, "stroke", s = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Fr : "none"), b(t, "stroke-width", f = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Pr : 0), J(
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
    m(v, M) {
      A(v, t, M), A(v, u, M), w && w.m(v, M), A(v, m, M), h || (g = [
        re(u, "mouseenter", p),
        re(
          u,
          "mouseleave",
          /*mouseleave_handler*/
          e[24]
        )
      ], h = !0);
    },
    p(v, M) {
      e = v, M[0] & /*$x, $data*/
      2304 && n !== (n = /*$x*/
      e[11](
        /*d*/
        e[29]
      )) && b(t, "data-range", n), M[0] & /*$y, $data*/
      1280 && l !== (l = /*yValue*/
      e[34]) && b(t, "data-count", l), M[0] & /*$xGet, $data*/
      264 && i !== (i = /*xPos*/
      e[32]) && b(t, "x", i), M[0] & /*$yGet, $data*/
      260 && r !== (r = /*$yGet*/
      e[2](
        /*d*/
        e[29]
      )) && b(t, "y", r), M[0] & /*$xScale, columnWidth, $data*/
      896 && o !== (o = /*colWidth*/
      e[33]) && b(t, "width", o), M[0] & /*columnHeight, $data*/
      320 && a !== (a = /*colHeight*/
      e[30]) && b(t, "height", a), M[0] & /*fill*/
      1 && b(
        t,
        "fill",
        /*fill*/
        e[0]
      ), M[0] & /*hoveredIndex*/
      16 && s !== (s = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Fr : "none") && b(t, "stroke", s), M[0] & /*hoveredIndex*/
      16 && f !== (f = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Pr : 0) && b(t, "stroke-width", f), M[0] & /*loaded*/
      32 && J(
        t,
        "animated",
        /*loaded*/
        e[5]
      ), M[0] & /*$xGet, $data*/
      264 && c !== (c = /*xPos*/
      e[32]) && b(u, "x", c), M[0] & /*$xScale, columnWidth, $data*/
      896 && d !== (d = /*colWidth*/
      e[33]) && b(u, "width", d), M[0] & /*$height*/
      4096 && b(
        u,
        "height",
        /*$height*/
        e[12]
      ), /*showLabels*/
      e[1] && /*yValue*/
      e[34] ? w ? w.p(e, M) : (w = Or(e), w.c(), w.m(m.parentNode, m)) : w && (w.d(1), w = null);
    },
    d(v) {
      v && R(t), v && R(u), w && w.d(v), v && R(m), h = !1, Re(g);
    }
  };
}
function wu(e) {
  let t, n = (
    /*$data*/
    e[8]
  ), l = [];
  for (let i = 0; i < n.length; i += 1)
    l[i] = Hr(qr(e, n, i));
  return {
    c() {
      t = ge("g");
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      b(t, "class", "column-group");
    },
    m(i, r) {
      A(i, t, r);
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(t, null);
    },
    p(i, r) {
      if (r[0] & /*$xGet, $data, $xScale, columnWidth, $height, columnHeight, $y, showLabels, hoveredIndex, dispatch, $x, $yGet, fill, loaded*/
      16383) {
        n = /*$data*/
        i[8];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = qr(i, n, o);
          l[o] ? l[o].p(a, r) : (l[o] = Hr(a), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    i: G,
    o: G,
    d(i) {
      i && R(t), Ge(l, i);
    }
  };
}
const Fr = "#333", Pr = 1;
function vu(e, t, n) {
  let l, i, r, o, a, s, f, u, c, d;
  const m = Ao(), { data: h, xGet: g, yGet: p, x: w, yRange: v, xScale: M, y: N, height: q, zGet: L, zScale: D, z: O, custom: T } = wn("LayerCake");
  P(e, h, (V) => n(8, s = V)), P(e, g, (V) => n(3, a = V)), P(e, p, (V) => n(2, r = V)), P(e, w, (V) => n(11, c = V)), P(e, v, (V) => n(22, o = V)), P(e, M, (V) => n(9, f = V)), P(e, N, (V) => n(10, u = V)), P(e, q, (V) => n(12, d = V));
  let { fill: S = "#00e047" } = t, { showLabels: F = !1 } = t, x = null;
  st(() => {
    setTimeout(() => n(5, E = !0), 100);
  });
  let E = !1;
  const U = (V, ee) => {
    n(4, x = V), m("hover", ee);
  }, j = () => {
    n(4, x = null), m("hover", null);
  };
  return e.$$set = (V) => {
    "fill" in V && n(0, S = V.fill), "showLabels" in V && n(1, F = V.showLabels);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*$xGet*/
    8 && n(7, l = (V) => {
      const ee = a(V);
      return Math.abs(ee[1] - ee[0]);
    }), e.$$.dirty[0] & /*$yRange, $yGet*/
    4194308 && n(6, i = (V) => o[0] - r(V));
  }, [
    S,
    F,
    r,
    a,
    x,
    E,
    i,
    l,
    s,
    f,
    u,
    c,
    d,
    m,
    h,
    g,
    p,
    w,
    v,
    M,
    N,
    q,
    o,
    U,
    j
  ];
}
class Yo extends de {
  constructor(t) {
    super(), ce(this, t, vu, wu, fe, { fill: 0, showLabels: 1 }, null, [-1, -1]);
  }
}
function jr(e, t, n) {
  const l = e.slice();
  return l[28] = t[n], l[30] = n, l;
}
function Ir(e) {
  let t, n, l;
  return {
    c() {
      t = ge("line"), b(t, "y1", n = /*$height*/
      e[15] * -1), b(t, "y2", "0"), b(t, "x1", "0"), b(t, "x2", "0"), b(t, "stroke-width", l = /*tick*/
      e[28] == 0 ? 2 : 1), b(t, "class", "svelte-rkqqab"), J(
        t,
        "gridline",
        /*tick*/
        e[28] != 0
      ), J(
        t,
        "baseline",
        /*tick*/
        e[28] == 0
      );
    },
    m(i, r) {
      A(i, t, r);
    },
    p(i, r) {
      r & /*$height*/
      32768 && n !== (n = /*$height*/
      i[15] * -1) && b(t, "y1", n), r & /*tickVals*/
      8192 && l !== (l = /*tick*/
      i[28] == 0 ? 2 : 1) && b(t, "stroke-width", l), r & /*tickVals*/
      8192 && J(
        t,
        "gridline",
        /*tick*/
        i[28] != 0
      ), r & /*tickVals*/
      8192 && J(
        t,
        "baseline",
        /*tick*/
        i[28] == 0
      );
    },
    d(i) {
      i && R(t);
    }
  };
}
function Qr(e) {
  let t, n, l;
  return {
    c() {
      t = ge("line"), b(t, "class", "tick-mark svelte-rkqqab"), b(t, "y1", 0), b(t, "y2", 6), b(t, "x1", n = /*xTick*/
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
    m(i, r) {
      A(i, t, r);
    },
    p(i, r) {
      r & /*xTick, isBandwidth, $xScale*/
      6176 && n !== (n = /*xTick*/
      i[5] || /*isBandwidth*/
      i[11] ? (
        /*$xScale*/
        i[12].bandwidth() / 2
      ) : 0) && b(t, "x1", n), r & /*xTick, isBandwidth, $xScale*/
      6176 && l !== (l = /*xTick*/
      i[5] || /*isBandwidth*/
      i[11] ? (
        /*$xScale*/
        i[12].bandwidth() / 2
      ) : 0) && b(t, "x2", l);
    },
    d(i) {
      i && R(t);
    }
  };
}
function Br(e) {
  let t, n, l, i = (
    /*formatTick*/
    e[4](
      /*tick*/
      e[28]
    ) + ""
  ), r, o, a, s, f, u, c = (
    /*gridlines*/
    e[0] !== !1 && Ir(e)
  ), d = (
    /*tickMarks*/
    e[1] === !0 && Qr(e)
  );
  return {
    c() {
      t = ge("g"), c && c.c(), n = ue(), d && d.c(), l = ge("text"), r = B(i), b(l, "x", o = /*xTick*/
      e[5] || /*isBandwidth*/
      e[11] ? (
        /*$xScale*/
        e[12].bandwidth() / 2
      ) : 0), b(l, "y", a = /*yTick*/
      e[6] - /*angle*/
      (e[10] ? 4 : 0)), b(l, "dx", ""), b(l, "dy", ""), b(l, "transform", s = /*angle*/
      e[10] ? "rotate(-45)" : ""), W(
        l,
        "fill",
        /*color*/
        e[9]
      ), b(l, "text-anchor", f = /*textAnchor*/
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
    m(m, h) {
      A(m, t, h), c && c.m(t, null), _(t, n), d && d.m(t, null), _(t, l), _(l, r);
    },
    p(m, h) {
      /*gridlines*/
      m[0] !== !1 ? c ? c.p(m, h) : (c = Ir(m), c.c(), c.m(t, n)) : c && (c.d(1), c = null), /*tickMarks*/
      m[1] === !0 ? d ? d.p(m, h) : (d = Qr(m), d.c(), d.m(t, l)) : d && (d.d(1), d = null), h & /*formatTick, tickVals*/
      8208 && i !== (i = /*formatTick*/
      m[4](
        /*tick*/
        m[28]
      ) + "") && Z(r, i), h & /*xTick, isBandwidth, $xScale*/
      6176 && o !== (o = /*xTick*/
      m[5] || /*isBandwidth*/
      m[11] ? (
        /*$xScale*/
        m[12].bandwidth() / 2
      ) : 0) && b(l, "x", o), h & /*yTick, angle*/
      1088 && a !== (a = /*yTick*/
      m[6] - /*angle*/
      (m[10] ? 4 : 0)) && b(l, "y", a), h & /*angle*/
      1024 && s !== (s = /*angle*/
      m[10] ? "rotate(-45)" : "") && b(l, "transform", s), h & /*color*/
      512 && W(
        l,
        "fill",
        /*color*/
        m[9]
      ), h & /*tickVals*/
      8192 && f !== (f = /*textAnchor*/
      m[24](
        /*tick*/
        m[28]
      )) && b(l, "text-anchor", f), h & /*$xScale, tickVals, $yRange*/
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
      m && R(t), c && c.d(), d && d.d();
    }
  };
}
function Gr(e) {
  let t, n, l;
  return {
    c() {
      t = ge("line"), b(t, "class", "baseline svelte-rkqqab"), b(t, "y1", n = /*$height*/
      e[15] + 0.5), b(t, "y2", l = /*$height*/
      e[15] + 0.5), b(t, "x1", "0"), b(
        t,
        "x2",
        /*$width*/
        e[16]
      );
    },
    m(i, r) {
      A(i, t, r);
    },
    p(i, r) {
      r & /*$height*/
      32768 && n !== (n = /*$height*/
      i[15] + 0.5) && b(t, "y1", n), r & /*$height*/
      32768 && l !== (l = /*$height*/
      i[15] + 0.5) && b(t, "y2", l), r & /*$width*/
      65536 && b(
        t,
        "x2",
        /*$width*/
        i[16]
      );
    },
    d(i) {
      i && R(t);
    }
  };
}
function Vr(e) {
  let t, n, l, i;
  return {
    c() {
      t = ge("text"), b(t, "x", n = /*labelLeft*/
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
      e[8] ? "18px" : "36px"), b(t, "text-anchor", i = /*labelLeft*/
      e[8] ? "end" : "middle"), W(
        t,
        "fill",
        /*color*/
        e[9]
      ), b(t, "class", "axis-label svelte-rkqqab");
    },
    m(r, o) {
      A(r, t, o), t.innerHTML = /*label*/
      e[7];
    },
    p(r, o) {
      o & /*label*/
      128 && (t.innerHTML = /*label*/
      r[7]), o & /*labelLeft, $xRange, $width*/
      196864 && n !== (n = /*labelLeft*/
      r[8] ? (
        /*$xRange*/
        r[17][0] - 4 - 12
      ) : (
        /*$width*/
        r[16] * 0.5
      )) && b(t, "x", n), o & /*$height*/
      32768 && b(
        t,
        "y",
        /*$height*/
        r[15]
      ), o & /*labelLeft*/
      256 && l !== (l = /*labelLeft*/
      r[8] ? "18px" : "36px") && b(t, "dy", l), o & /*labelLeft*/
      256 && i !== (i = /*labelLeft*/
      r[8] ? "end" : "middle") && b(t, "text-anchor", i), o & /*color*/
      512 && W(
        t,
        "fill",
        /*color*/
        r[9]
      );
    },
    d(r) {
      r && R(t);
    }
  };
}
function Su(e) {
  let t, n, l, i = (
    /*tickVals*/
    e[13]
  ), r = [];
  for (let s = 0; s < i.length; s += 1)
    r[s] = Br(jr(e, i, s));
  let o = (
    /*baseline*/
    e[2] === !0 && Gr(e)
  ), a = !!/*label*/
  e[7] && Vr(e);
  return {
    c() {
      t = ge("g");
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      n = ue(), o && o.c(), l = ue(), a && a.c(), b(t, "class", "axis x-axis svelte-rkqqab"), J(
        t,
        "snapTicks",
        /*snapTicks*/
        e[3]
      );
    },
    m(s, f) {
      A(s, t, f);
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(t, null);
      _(t, n), o && o.m(t, null), _(t, l), a && a.m(t, null);
    },
    p(s, [f]) {
      if (f & /*$xScale, tickVals, Math, $yRange, xTick, isBandwidth, yTick, angle, color, textAnchor, formatTick, tickMarks, $height, gridlines*/
      16842355) {
        i = /*tickVals*/
        s[13];
        let u;
        for (u = 0; u < i.length; u += 1) {
          const c = jr(s, i, u);
          r[u] ? r[u].p(c, f) : (r[u] = Br(c), r[u].c(), r[u].m(t, n));
        }
        for (; u < r.length; u += 1)
          r[u].d(1);
        r.length = i.length;
      }
      /*baseline*/
      s[2] === !0 ? o ? o.p(s, f) : (o = Gr(s), o.c(), o.m(t, l)) : o && (o.d(1), o = null), /*label*/
      s[7] ? a ? a.p(s, f) : (a = Vr(s), a.c(), a.m(t, null)) : a && (a.d(1), a = null), f & /*snapTicks*/
      8 && J(
        t,
        "snapTicks",
        /*snapTicks*/
        s[3]
      );
    },
    i: G,
    o: G,
    d(s) {
      s && R(t), Ge(r, s), o && o.d(), a && a.d();
    }
  };
}
function Cu(e, t, n) {
  let l, i, r, o, a, s, f, u;
  const { width: c, height: d, xRange: m, padding: h, xScale: g, xDomain: p, yRange: w } = wn("LayerCake");
  P(e, c, (j) => n(16, f = j)), P(e, d, (j) => n(15, s = j)), P(e, m, (j) => n(17, u = j)), P(e, g, (j) => n(12, o = j)), P(e, p, (j) => n(26, r = j)), P(e, w, (j) => n(14, a = j));
  let { gridlines: v = !0 } = t, { tickMarks: M = !1 } = t, { baseline: N = !1 } = t, { snapTicks: q = !1 } = t, { formatTick: L = (j) => j } = t, { ticks: D = void 0 } = t, { xTick: O = 0 } = t, { yTick: T = 16 } = t, { label: S = "" } = t, { labelLeft: F = !1 } = t, { color: x = "#333" } = t, { angle: E = !1 } = t;
  function U(j) {
    if (E)
      return "end";
    if (q === !0) {
      if (j == r[0])
        return "start";
      if (j == r[1])
        return "end";
    }
    return "middle";
  }
  return e.$$set = (j) => {
    "gridlines" in j && n(0, v = j.gridlines), "tickMarks" in j && n(1, M = j.tickMarks), "baseline" in j && n(2, N = j.baseline), "snapTicks" in j && n(3, q = j.snapTicks), "formatTick" in j && n(4, L = j.formatTick), "ticks" in j && n(25, D = j.ticks), "xTick" in j && n(5, O = j.xTick), "yTick" in j && n(6, T = j.yTick), "label" in j && n(7, S = j.label), "labelLeft" in j && n(8, F = j.labelLeft), "color" in j && n(9, x = j.color), "angle" in j && n(10, E = j.angle);
  }, e.$$.update = () => {
    e.$$.dirty & /*$xScale*/
    4096 && n(11, l = typeof o.bandwidth == "function"), e.$$.dirty & /*ticks, isBandwidth, $xScale*/
    33560576 && n(13, i = Array.isArray(D) ? D : l ? o.domain() : typeof D == "function" ? D(o.ticks()) : o.ticks(D));
  }, [
    v,
    M,
    N,
    q,
    L,
    O,
    T,
    S,
    F,
    x,
    E,
    l,
    o,
    i,
    a,
    s,
    f,
    u,
    c,
    d,
    m,
    g,
    p,
    w,
    U,
    D
  ];
}
class Xo extends de {
  constructor(t) {
    super(), ce(this, t, Cu, Su, fe, {
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
const xu = (e) => ({}), Wr = (e) => ({}), Mu = (e) => ({}), Kr = (e) => ({});
function Ru(e) {
  let t, n, l, i, r, o, a, s, f = !!/*title*/
  e[2] && Yr(e), u = (
    /*loaded*/
    e[8] && /*histBins*/
    e[7].length > 0 && Xr(e)
  );
  const c = [Du, Eu], d = [];
  function m(h, g) {
    return (
      /*$$slots*/
      h[11].caption ? 1 : 0
    );
  }
  return o = m(e), a = d[o] = c[o](e), {
    c() {
      t = k("div"), f && f.c(), n = H(), l = k("div"), u && u.c(), i = H(), r = k("div"), a.c(), W(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), W(l, "height", "16px"), b(r, "class", "text-xs text-slate-800 truncate"), J(r, "mt-1", !/*horizontalLayout*/
      e[3]), b(t, "class", "gap-1 items-center"), J(
        t,
        "flex",
        /*horizontalLayout*/
        e[3]
      ), J(
        t,
        "my-0.5",
        /*horizontalLayout*/
        e[3]
      );
    },
    m(h, g) {
      A(h, t, g), f && f.m(t, null), _(t, n), _(t, l), u && u.m(l, null), _(t, i), _(t, r), d[o].m(r, null), s = !0;
    },
    p(h, g) {
      /*title*/
      h[2] ? f ? f.p(h, g) : (f = Yr(h), f.c(), f.m(t, n)) : f && (f.d(1), f = null), /*loaded*/
      h[8] && /*histBins*/
      h[7].length > 0 ? u ? (u.p(h, g), g & /*loaded, histBins*/
      384 && C(u, 1)) : (u = Xr(h), u.c(), C(u, 1), u.m(l, null)) : u && (ne(), z(u, 1, 1, () => {
        u = null;
      }), le()), (!s || g & /*width*/
      1) && W(
        l,
        "width",
        /*width*/
        h[0] == null ? "100%" : `${/*width*/
        h[0]}px`
      );
      let p = o;
      o = m(h), o === p ? d[o].p(h, g) : (ne(), z(d[p], 1, 1, () => {
        d[p] = null;
      }), le(), a = d[o], a ? a.p(h, g) : (a = d[o] = c[o](h), a.c()), C(a, 1), a.m(r, null)), (!s || g & /*horizontalLayout*/
      8) && J(r, "mt-1", !/*horizontalLayout*/
      h[3]), (!s || g & /*horizontalLayout*/
      8) && J(
        t,
        "flex",
        /*horizontalLayout*/
        h[3]
      ), (!s || g & /*horizontalLayout*/
      8) && J(
        t,
        "my-0.5",
        /*horizontalLayout*/
        h[3]
      );
    },
    i(h) {
      s || (C(u), C(a), s = !0);
    },
    o(h) {
      z(u), z(a), s = !1;
    },
    d(h) {
      h && R(t), f && f.d(), u && u.d(), d[o].d();
    }
  };
}
function zu(e) {
  let t, n, l, i, r, o, a, s = !!/*title*/
  e[2] && Ur(e), f = (
    /*loaded*/
    e[8] && /*histBins*/
    e[7].length > 0 && Zr(e)
  );
  const u = [Pu, Fu], c = [];
  function d(m, h) {
    return (
      /*$$slots*/
      m[11].caption ? 1 : 0
    );
  }
  return r = d(e), o = c[r] = u[r](e), {
    c() {
      s && s.c(), t = H(), n = k("div"), f && f.c(), l = H(), i = k("div"), o.c(), W(
        n,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), W(n, "height", "16px"), b(i, "class", "text-xs text-slate-800 truncate"), J(i, "mt-1", !/*horizontalLayout*/
      e[3]);
    },
    m(m, h) {
      s && s.m(m, h), A(m, t, h), A(m, n, h), f && f.m(n, null), A(m, l, h), A(m, i, h), c[r].m(i, null), a = !0;
    },
    p(m, h) {
      /*title*/
      m[2] ? s ? s.p(m, h) : (s = Ur(m), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null), /*loaded*/
      m[8] && /*histBins*/
      m[7].length > 0 ? f ? (f.p(m, h), h & /*loaded, histBins*/
      384 && C(f, 1)) : (f = Zr(m), f.c(), C(f, 1), f.m(n, null)) : f && (ne(), z(f, 1, 1, () => {
        f = null;
      }), le()), (!a || h & /*width*/
      1) && W(
        n,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let g = r;
      r = d(m), r === g ? c[r].p(m, h) : (ne(), z(c[g], 1, 1, () => {
        c[g] = null;
      }), le(), o = c[r], o ? o.p(m, h) : (o = c[r] = u[r](m), o.c()), C(o, 1), o.m(i, null)), (!a || h & /*horizontalLayout*/
      8) && J(i, "mt-1", !/*horizontalLayout*/
      m[3]);
    },
    i(m) {
      a || (C(f), C(o), a = !0);
    },
    o(m) {
      z(f), z(o), a = !1;
    },
    d(m) {
      s && s.d(m), m && R(t), m && R(n), f && f.d(), m && R(l), m && R(i), c[r].d();
    }
  };
}
function Yr(e) {
  let t, n;
  return {
    c() {
      t = k("div"), n = B(
        /*title*/
        e[2]
      ), b(t, "class", "font-bold text-xs truncate text-right"), W(t, "width", "96px");
    },
    m(l, i) {
      A(l, t, i), _(t, n);
    },
    p(l, i) {
      i & /*title*/
      4 && Z(
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
function Xr(e) {
  let t, n;
  return t = new Jl({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: Ni().round(!0),
      xDomain: (
        /*histBins*/
        e[7]
      ),
      yScale: nt(),
      yDomain: [0, null],
      data: (
        /*data*/
        e[6]
      ),
      custom: { hoveredGet: (
        /*func_2*/
        e[18]
      ) },
      $$slots: { default: [Lu] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      X(t.$$.fragment);
    },
    m(l, i) {
      K(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*histBins*/
      128 && (r.xDomain = /*histBins*/
      l[7]), i & /*data*/
      64 && (r.data = /*data*/
      l[6]), i & /*hoveredBin*/
      512 && (r.custom = { hoveredGet: (
        /*func_2*/
        l[18]
      ) }), i & /*$$scope, color, hoveredBin*/
      1049120 && (r.$$scope = { dirty: i, ctx: l }), t.$set(r);
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
  let t, n, l, i;
  return t = new Yo({ props: { fill: (
    /*color*/
    e[5]
  ) } }), t.$on(
    "hover",
    /*hover_handler_1*/
    e[17]
  ), l = new Xo({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      X(t.$$.fragment), n = H(), X(l.$$.fragment);
    },
    m(r, o) {
      K(t, r, o), A(r, n, o), K(l, r, o), i = !0;
    },
    p(r, o) {
      const a = {};
      o & /*color*/
      32 && (a.fill = /*color*/
      r[5]), t.$set(a);
    },
    i(r) {
      i || (C(t.$$.fragment, r), C(l.$$.fragment, r), i = !0);
    },
    o(r) {
      z(t.$$.fragment, r), z(l.$$.fragment, r), i = !1;
    },
    d(r) {
      Y(t, r), r && R(n), Y(l, r);
    }
  };
}
function Lu(e) {
  let t, n;
  return t = new Ko({
    props: {
      $$slots: { default: [Au] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      X(t.$$.fragment);
    },
    m(l, i) {
      K(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, color, hoveredBin*/
      1049120 && (r.$$scope = { dirty: i, ctx: l }), t.$set(r);
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
function Eu(e) {
  let t;
  const n = (
    /*#slots*/
    e[13].caption
  ), l = Fe(
    n,
    e,
    /*$$scope*/
    e[20],
    Wr
  );
  return {
    c() {
      l && l.c();
    },
    m(i, r) {
      l && l.m(i, r), t = !0;
    },
    p(i, r) {
      l && l.p && (!t || r & /*$$scope*/
      1048576) && je(
        l,
        n,
        i,
        /*$$scope*/
        i[20],
        t ? Pe(
          n,
          /*$$scope*/
          i[20],
          r,
          xu
        ) : Ie(
          /*$$scope*/
          i[20]
        ),
        Wr
      );
    },
    i(i) {
      t || (C(l, i), t = !0);
    },
    o(i) {
      z(l, i), t = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Du(e) {
  let t;
  function n(r, o) {
    return (
      /*hoveredBin*/
      r[9] != null ? qu : (
        /*mean*/
        r[1] != null ? Tu : Nu
      )
    );
  }
  let l = n(e), i = l(e);
  return {
    c() {
      i.c(), t = ue();
    },
    m(r, o) {
      i.m(r, o), A(r, t, o);
    },
    p(r, o) {
      l === (l = n(r)) && i ? i.p(r, o) : (i.d(1), i = l(r), i && (i.c(), i.m(t.parentNode, t)));
    },
    i: G,
    o: G,
    d(r) {
      i.d(r), r && R(t);
    }
  };
}
function Nu(e) {
  let t;
  return {
    c() {
      t = B(" ");
    },
    m(n, l) {
      A(n, t, l);
    },
    p: G,
    d(n) {
      n && R(t);
    }
  };
}
function Tu(e) {
  let t, n, l = be(".3")(
    /*mean*/
    e[1]
  ) + "", i;
  return {
    c() {
      t = B("M = "), n = k("strong"), i = B(l);
    },
    m(r, o) {
      A(r, t, o), A(r, n, o), _(n, i);
    },
    p(r, o) {
      o & /*mean*/
      2 && l !== (l = be(".3")(
        /*mean*/
        r[1]
      ) + "") && Z(i, l);
    },
    d(r) {
      r && R(t), r && R(n);
    }
  };
}
function qu(e) {
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
      n = B(t);
    },
    m(l, i) {
      A(l, n, i);
    },
    p(l, i) {
      i & /*data, hoveredBin*/
      576 && t !== (t = /*makeTooltipText*/
      l[10](
        /*data*/
        l[6].find(
          /*func_3*/
          l[19]
        )
      ) + "") && Z(n, t);
    },
    d(l) {
      l && R(n);
    }
  };
}
function Ur(e) {
  let t, n;
  return {
    c() {
      t = k("div"), n = B(
        /*title*/
        e[2]
      ), b(t, "class", "font-bold text-xs truncate text-right");
    },
    m(l, i) {
      A(l, t, i), _(t, n);
    },
    p(l, i) {
      i & /*title*/
      4 && Z(
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
function Zr(e) {
  let t, n;
  return t = new Jl({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: Ni().round(!0),
      xDomain: (
        /*histBins*/
        e[7]
      ),
      yScale: nt(),
      yDomain: [0, null],
      data: (
        /*data*/
        e[6]
      ),
      custom: { hoveredGet: (
        /*func*/
        e[15]
      ) },
      $$slots: { default: [Hu] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      X(t.$$.fragment);
    },
    m(l, i) {
      K(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*histBins*/
      128 && (r.xDomain = /*histBins*/
      l[7]), i & /*data*/
      64 && (r.data = /*data*/
      l[6]), i & /*hoveredBin*/
      512 && (r.custom = { hoveredGet: (
        /*func*/
        l[15]
      ) }), i & /*$$scope, color, hoveredBin*/
      1049120 && (r.$$scope = { dirty: i, ctx: l }), t.$set(r);
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
function Ou(e) {
  let t, n, l, i;
  return t = new Yo({ props: { fill: (
    /*color*/
    e[5]
  ) } }), t.$on(
    "hover",
    /*hover_handler*/
    e[14]
  ), l = new Xo({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      X(t.$$.fragment), n = H(), X(l.$$.fragment);
    },
    m(r, o) {
      K(t, r, o), A(r, n, o), K(l, r, o), i = !0;
    },
    p(r, o) {
      const a = {};
      o & /*color*/
      32 && (a.fill = /*color*/
      r[5]), t.$set(a);
    },
    i(r) {
      i || (C(t.$$.fragment, r), C(l.$$.fragment, r), i = !0);
    },
    o(r) {
      z(t.$$.fragment, r), z(l.$$.fragment, r), i = !1;
    },
    d(r) {
      Y(t, r), r && R(n), Y(l, r);
    }
  };
}
function Hu(e) {
  let t, n;
  return t = new Ko({
    props: {
      $$slots: { default: [Ou] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      X(t.$$.fragment);
    },
    m(l, i) {
      K(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, color, hoveredBin*/
      1049120 && (r.$$scope = { dirty: i, ctx: l }), t.$set(r);
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
function Fu(e) {
  let t;
  const n = (
    /*#slots*/
    e[13].caption
  ), l = Fe(
    n,
    e,
    /*$$scope*/
    e[20],
    Kr
  );
  return {
    c() {
      l && l.c();
    },
    m(i, r) {
      l && l.m(i, r), t = !0;
    },
    p(i, r) {
      l && l.p && (!t || r & /*$$scope*/
      1048576) && je(
        l,
        n,
        i,
        /*$$scope*/
        i[20],
        t ? Pe(
          n,
          /*$$scope*/
          i[20],
          r,
          Mu
        ) : Ie(
          /*$$scope*/
          i[20]
        ),
        Kr
      );
    },
    i(i) {
      t || (C(l, i), t = !0);
    },
    o(i) {
      z(l, i), t = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Pu(e) {
  let t;
  function n(r, o) {
    return (
      /*hoveredBin*/
      r[9] != null ? Qu : (
        /*mean*/
        r[1] != null ? Iu : ju
      )
    );
  }
  let l = n(e), i = l(e);
  return {
    c() {
      i.c(), t = ue();
    },
    m(r, o) {
      i.m(r, o), A(r, t, o);
    },
    p(r, o) {
      l === (l = n(r)) && i ? i.p(r, o) : (i.d(1), i = l(r), i && (i.c(), i.m(t.parentNode, t)));
    },
    i: G,
    o: G,
    d(r) {
      i.d(r), r && R(t);
    }
  };
}
function ju(e) {
  let t;
  return {
    c() {
      t = B(" ");
    },
    m(n, l) {
      A(n, t, l);
    },
    p: G,
    d(n) {
      n && R(t);
    }
  };
}
function Iu(e) {
  let t, n, l = be(".3")(
    /*mean*/
    e[1]
  ) + "", i;
  return {
    c() {
      t = B("M = "), n = k("strong"), i = B(l);
    },
    m(r, o) {
      A(r, t, o), A(r, n, o), _(n, i);
    },
    p(r, o) {
      o & /*mean*/
      2 && l !== (l = be(".3")(
        /*mean*/
        r[1]
      ) + "") && Z(i, l);
    },
    d(r) {
      r && R(t), r && R(n);
    }
  };
}
function Qu(e) {
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
      n = B(t);
    },
    m(l, i) {
      A(l, n, i);
    },
    p(l, i) {
      i & /*data, hoveredBin*/
      576 && t !== (t = /*makeTooltipText*/
      l[10](
        /*data*/
        l[6].find(
          /*func_1*/
          l[16]
        )
      ) + "") && Z(n, t);
    },
    d(l) {
      l && R(n);
    }
  };
}
function Bu(e) {
  let t, n, l, i;
  const r = [zu, Ru], o = [];
  function a(s, f) {
    return (
      /*noParent*/
      s[4] ? 0 : 1
    );
  }
  return t = a(e), n = o[t] = r[t](e), {
    c() {
      n.c(), l = ue();
    },
    m(s, f) {
      o[t].m(s, f), A(s, l, f), i = !0;
    },
    p(s, [f]) {
      let u = t;
      t = a(s), t === u ? o[t].p(s, f) : (ne(), z(o[u], 1, 1, () => {
        o[u] = null;
      }), le(), n = o[t], n ? n.p(s, f) : (n = o[t] = r[t](s), n.c()), C(n, 1), n.m(l.parentNode, l));
    },
    i(s) {
      i || (C(n), i = !0);
    },
    o(s) {
      z(n), i = !1;
    },
    d(s) {
      o[t].d(s), s && R(l);
    }
  };
}
function Gu(e, t, n) {
  let { $$slots: l = {}, $$scope: i } = t;
  const r = Ci(l);
  let { width: o = 100 } = t, { histValues: a } = t, { mean: s = null } = t, { title: f = null } = t, { horizontalLayout: u = !1 } = t, { noParent: c = !1 } = t, { color: d = "#3b82f6" } = t, m = [], h = [], g = !1;
  st(() => setTimeout(() => n(8, g = !0), 0));
  let p, w = be(".3g"), v = be(",");
  function M(S) {
    return `${w(S.bin)}: ${v(S.count)} instances`;
  }
  const N = (S) => n(9, p = S.detail != null ? S.detail.bin : null), q = (S) => S.bin == p, L = (S) => S.bin == p, D = (S) => n(9, p = S.detail != null ? S.detail.bin : null), O = (S) => S.bin == p, T = (S) => S.bin == p;
  return e.$$set = (S) => {
    "width" in S && n(0, o = S.width), "histValues" in S && n(12, a = S.histValues), "mean" in S && n(1, s = S.mean), "title" in S && n(2, f = S.title), "horizontalLayout" in S && n(3, u = S.horizontalLayout), "noParent" in S && n(4, c = S.noParent), "color" in S && n(5, d = S.color), "$$scope" in S && n(20, i = S.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*histValues, data*/
    4160 && (a ? (n(6, m = Object.entries(a).map((S) => ({ bin: parseFloat(S[0]), count: S[1] }))), m.sort((S, F) => S.bin - F.bin), n(7, h = m.map((S) => S.bin))) : (n(6, m = []), n(7, h = []))), e.$$.dirty & /*data*/
    64 && m.length > 0) {
      let S = m.reduce(
        (F, x, E) => E > 0 ? Math.min(F, Math.abs(x.bin - m[E - 1].bin)) : F,
        1e9
      );
      w = be(`.${To(S)}f`);
    }
    e.$$.dirty & /*histBins*/
    128 && console.log("histBins", h), e.$$.dirty & /*histValues*/
    4096 && console.log("histValues", a);
  }, [
    o,
    s,
    f,
    u,
    c,
    d,
    m,
    h,
    g,
    p,
    M,
    r,
    a,
    l,
    N,
    q,
    L,
    D,
    O,
    T,
    i
  ];
}
class Vu extends de {
  constructor(t) {
    super(), ce(this, t, Gu, Bu, fe, {
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
function Jr(e, t, n) {
  const l = e.slice();
  return l[24] = t[n], l[26] = n, l;
}
function $r(e) {
  let t, n, l;
  function i() {
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
      t = k("span"), b(t, "class", "bar absolute content-box svelte-mwmtzu"), W(t, "top", "0"), W(
        t,
        "left",
        /*$xGet*/
        e[3](
          /*d*/
          e[24]
        ) * /*$xRange*/
        (e[4][1] <= 1 ? 100 : 1) + /*$xRange*/
        (e[4][1] <= 1 ? "%" : "px")
      ), W(
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
      ), W(
        t,
        "background-color",
        /*$yGet*/
        e[7](
          /*d*/
          e[24]
        )
      ), J(
        t,
        "animated",
        /*loaded*/
        e[1]
      ), J(
        t,
        "border",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      ), J(
        t,
        "border-black",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      );
    },
    m(r, o) {
      A(r, t, o), n || (l = [
        re(t, "mouseenter", i),
        re(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[16]
        )
      ], n = !0);
    },
    p(r, o) {
      e = r, o & /*$xGet, $data, $xRange*/
      28 && W(
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
      124 && W(
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
      132 && W(
        t,
        "background-color",
        /*$yGet*/
        e[7](
          /*d*/
          e[24]
        )
      ), o & /*loaded*/
      2 && J(
        t,
        "animated",
        /*loaded*/
        e[1]
      ), o & /*hoveredIndex, $data*/
      5 && J(
        t,
        "border",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      ), o & /*hoveredIndex, $data*/
      5 && J(
        t,
        "border-black",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      );
    },
    d(r) {
      r && R(t), n = !1, Re(l);
    }
  };
}
function Wu(e) {
  let t, n = (
    /*$data*/
    e[2]
  ), l = [];
  for (let i = 0; i < n.length; i += 1)
    l[i] = $r(Jr(e, n, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      t = ue();
    },
    m(i, r) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(i, r);
      A(i, t, r);
    },
    p(i, [r]) {
      if (r & /*$xGet, $data, $xRange, $xScale, $z, $yGet, loaded, hoveredIndex, dispatch*/
      511) {
        n = /*$data*/
        i[2];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = Jr(i, n, o);
          l[o] ? l[o].p(a, r) : (l[o] = $r(a), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    i: G,
    o: G,
    d(i) {
      Ge(l, i), i && R(t);
    }
  };
}
function Ku(e, t, n) {
  let l, i, r, o, a, s;
  const f = Ao(), { data: u, xGet: c, yGet: d, xRange: m, x: h, yRange: g, xScale: p, y: w, height: v, zGet: M, zScale: N, z: q, custom: L } = wn("LayerCake");
  P(e, u, (F) => n(2, l = F)), P(e, c, (F) => n(3, i = F)), P(e, d, (F) => n(7, s = F)), P(e, m, (F) => n(4, r = F)), P(e, p, (F) => n(5, o = F)), P(e, q, (F) => n(6, a = F));
  let D = null;
  st(() => {
    setTimeout(() => n(1, O = !0), 100);
  });
  let O = !1;
  return [
    D,
    O,
    l,
    i,
    r,
    o,
    a,
    s,
    f,
    u,
    c,
    d,
    m,
    p,
    q,
    (F, x) => {
      n(0, D = F), f("hover", x);
    },
    () => {
      n(0, D = null), f("hover", null);
    }
  ];
}
class Uo extends de {
  constructor(t) {
    super(), ce(this, t, Ku, Wu, fe, {});
  }
}
const Yu = (e) => ({}), eo = (e) => ({}), Xu = (e) => ({}), to = (e) => ({});
function Uu(e) {
  let t, n, l, i, r, o, a, s, f, u = !!/*title*/
  e[1] && no(e);
  i = new Jl({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: nt(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        e[0] ?? 1
      ],
      yScale: Zl(),
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
      $$slots: { default: [$u] },
      $$scope: { ctx: e }
    }
  });
  const c = [nc, tc, ec], d = [];
  function m(h, g) {
    return (
      /*$$slots*/
      h[10].caption ? 0 : (
        /*hoveredIndex*/
        h[7] != null ? 1 : (
          /*mostCommonDatum*/
          h[8] ? 2 : -1
        )
      )
    );
  }
  return ~(a = m(e)) && (s = d[a] = c[a](e)), {
    c() {
      t = k("div"), u && u.c(), n = H(), l = k("div"), X(i.$$.fragment), r = H(), o = k("div"), s && s.c(), W(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), W(l, "height", "6px"), b(l, "class", "rounded overflow-hidden mb-1"), b(o, "class", "text-xs text-slate-800"), b(t, "class", "gap-1 items-center"), J(
        t,
        "flex",
        /*horizontalLayout*/
        e[2]
      );
    },
    m(h, g) {
      A(h, t, g), u && u.m(t, null), _(t, n), _(t, l), K(i, l, null), _(t, r), _(t, o), ~a && d[a].m(o, null), f = !0;
    },
    p(h, g) {
      /*title*/
      h[1] ? u ? u.p(h, g) : (u = no(h), u.c(), u.m(t, n)) : u && (u.d(1), u = null);
      const p = {};
      g & /*width*/
      1 && (p.xRange = [
        0,
        /*width*/
        h[0] ?? 1
      ]), g & /*counts*/
      32 && (p.yDomain = Ke(
        /*counts*/
        h[5].length
      )), g & /*colorScale, data*/
      80 && (p.yRange = Array.isArray(
        /*colorScale*/
        h[4]
      ) ? (
        /*colorScale*/
        h[4]
      ) : Ke(0, 1.00001, 1 / /*data*/
      (h[6].length - 1)).map(
        /*func_2*/
        h[17]
      )), g & /*data*/
      64 && (p.data = /*data*/
      h[6]), g & /*hoveredIndex*/
      128 && (p.custom = { hoveredGet: (
        /*func_3*/
        h[18]
      ) }), g & /*$$scope, hoveredIndex*/
      524416 && (p.$$scope = { dirty: g, ctx: h }), i.$set(p), (!f || g & /*width*/
      1) && W(
        l,
        "width",
        /*width*/
        h[0] == null ? "100%" : `${/*width*/
        h[0]}px`
      );
      let w = a;
      a = m(h), a === w ? ~a && d[a].p(h, g) : (s && (ne(), z(d[w], 1, 1, () => {
        d[w] = null;
      }), le()), ~a ? (s = d[a], s ? s.p(h, g) : (s = d[a] = c[a](h), s.c()), C(s, 1), s.m(o, null)) : s = null), (!f || g & /*horizontalLayout*/
      4) && J(
        t,
        "flex",
        /*horizontalLayout*/
        h[2]
      );
    },
    i(h) {
      f || (C(i.$$.fragment, h), C(s), f = !0);
    },
    o(h) {
      z(i.$$.fragment, h), z(s), f = !1;
    },
    d(h) {
      h && R(t), u && u.d(), Y(i), ~a && d[a].d();
    }
  };
}
function Zu(e) {
  let t, n, l, i, r, o, a, s, f = !!/*title*/
  e[1] && lo(e);
  l = new Jl({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: nt(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        e[0] ?? 1
      ],
      yScale: Zl(),
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
      $$slots: { default: [ic] },
      $$scope: { ctx: e }
    }
  });
  const u = [ac, oc, rc], c = [];
  function d(m, h) {
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
      f && f.c(), t = H(), n = k("div"), X(l.$$.fragment), i = H(), r = k("div"), a && a.c(), W(
        n,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), W(n, "height", "6px"), b(n, "class", "rounded overflow-hidden mb-1"), b(r, "class", "text-xs text-slate-800");
    },
    m(m, h) {
      f && f.m(m, h), A(m, t, h), A(m, n, h), K(l, n, null), A(m, i, h), A(m, r, h), ~o && c[o].m(r, null), s = !0;
    },
    p(m, h) {
      /*title*/
      m[1] ? f ? f.p(m, h) : (f = lo(m), f.c(), f.m(t.parentNode, t)) : f && (f.d(1), f = null);
      const g = {};
      h & /*width*/
      1 && (g.xRange = [
        0,
        /*width*/
        m[0] ?? 1
      ]), h & /*counts*/
      32 && (g.yDomain = Ke(
        /*counts*/
        m[5].length
      )), h & /*colorScale, data*/
      80 && (g.yRange = Array.isArray(
        /*colorScale*/
        m[4]
      ) ? (
        /*colorScale*/
        m[4]
      ) : Ke(0, 1.00001, 1 / /*data*/
      (m[6].length - 1)).map(
        /*func*/
        m[14]
      )), h & /*data*/
      64 && (g.data = /*data*/
      m[6]), h & /*hoveredIndex*/
      128 && (g.custom = { hoveredGet: (
        /*func_1*/
        m[15]
      ) }), h & /*$$scope, hoveredIndex*/
      524416 && (g.$$scope = { dirty: h, ctx: m }), l.$set(g), (!s || h & /*width*/
      1) && W(
        n,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let p = o;
      o = d(m), o === p ? ~o && c[o].p(m, h) : (a && (ne(), z(c[p], 1, 1, () => {
        c[p] = null;
      }), le()), ~o ? (a = c[o], a ? a.p(m, h) : (a = c[o] = u[o](m), a.c()), C(a, 1), a.m(r, null)) : a = null);
    },
    i(m) {
      s || (C(l.$$.fragment, m), C(a), s = !0);
    },
    o(m) {
      z(l.$$.fragment, m), z(a), s = !1;
    },
    d(m) {
      f && f.d(m), m && R(t), m && R(n), Y(l), m && R(i), m && R(r), ~o && c[o].d();
    }
  };
}
function no(e) {
  let t, n;
  return {
    c() {
      t = k("div"), n = B(
        /*title*/
        e[1]
      ), b(t, "class", "font-bold text-xs truncate text-right"), W(t, "width", "84px");
    },
    m(l, i) {
      A(l, t, i), _(t, n);
    },
    p(l, i) {
      i & /*title*/
      2 && Z(
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
function Ju(e) {
  let t, n;
  return t = new Uo({}), t.$on(
    "hover",
    /*hover_handler_1*/
    e[16]
  ), {
    c() {
      X(t.$$.fragment);
    },
    m(l, i) {
      K(t, l, i), n = !0;
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
  return t = new Wo({
    props: {
      $$slots: { default: [Ju] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      X(t.$$.fragment);
    },
    m(l, i) {
      K(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, hoveredIndex*/
      524416 && (r.$$scope = { dirty: i, ctx: l }), t.$set(r);
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
      t = new Yl(!1), l = ue(), t.a = l;
    },
    m(i, r) {
      t.m(n, i, r), A(i, l, r);
    },
    p(i, r) {
      r & /*mostCommonDatum*/
      256 && n !== (n = /*makeTooltipText*/
      i[9](
        /*mostCommonDatum*/
        i[8]
      ) + "") && t.p(n);
    },
    i: G,
    o: G,
    d(i) {
      i && R(l), i && t.d();
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
      t = new Yl(!1), l = ue(), t.a = l;
    },
    m(i, r) {
      t.m(n, i, r), A(i, l, r);
    },
    p(i, r) {
      r & /*data, hoveredIndex*/
      192 && n !== (n = /*makeTooltipText*/
      i[9](
        /*data*/
        i[6][
          /*hoveredIndex*/
          i[7]
        ]
      ) + "") && t.p(n);
    },
    i: G,
    o: G,
    d(i) {
      i && R(l), i && t.d();
    }
  };
}
function nc(e) {
  let t;
  const n = (
    /*#slots*/
    e[12].caption
  ), l = Fe(
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
    m(i, r) {
      l && l.m(i, r), t = !0;
    },
    p(i, r) {
      l && l.p && (!t || r & /*$$scope*/
      524288) && je(
        l,
        n,
        i,
        /*$$scope*/
        i[19],
        t ? Pe(
          n,
          /*$$scope*/
          i[19],
          r,
          Yu
        ) : Ie(
          /*$$scope*/
          i[19]
        ),
        eo
      );
    },
    i(i) {
      t || (C(l, i), t = !0);
    },
    o(i) {
      z(l, i), t = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function lo(e) {
  let t, n;
  return {
    c() {
      t = k("div"), n = B(
        /*title*/
        e[1]
      ), b(t, "class", "font-bold text-xs truncate text-right");
    },
    m(l, i) {
      A(l, t, i), _(t, n);
    },
    p(l, i) {
      i & /*title*/
      2 && Z(
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
function lc(e) {
  let t, n;
  return t = new Uo({}), t.$on(
    "hover",
    /*hover_handler*/
    e[13]
  ), {
    c() {
      X(t.$$.fragment);
    },
    m(l, i) {
      K(t, l, i), n = !0;
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
function ic(e) {
  let t, n;
  return t = new Wo({
    props: {
      $$slots: { default: [lc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      X(t.$$.fragment);
    },
    m(l, i) {
      K(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, hoveredIndex*/
      524416 && (r.$$scope = { dirty: i, ctx: l }), t.$set(r);
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
function rc(e) {
  let t, n = (
    /*makeTooltipText*/
    e[9](
      /*mostCommonDatum*/
      e[8]
    ) + ""
  ), l;
  return {
    c() {
      t = new Yl(!1), l = ue(), t.a = l;
    },
    m(i, r) {
      t.m(n, i, r), A(i, l, r);
    },
    p(i, r) {
      r & /*mostCommonDatum*/
      256 && n !== (n = /*makeTooltipText*/
      i[9](
        /*mostCommonDatum*/
        i[8]
      ) + "") && t.p(n);
    },
    i: G,
    o: G,
    d(i) {
      i && R(l), i && t.d();
    }
  };
}
function oc(e) {
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
      t = new Yl(!1), l = ue(), t.a = l;
    },
    m(i, r) {
      t.m(n, i, r), A(i, l, r);
    },
    p(i, r) {
      r & /*data, hoveredIndex*/
      192 && n !== (n = /*makeTooltipText*/
      i[9](
        /*data*/
        i[6][
          /*hoveredIndex*/
          i[7]
        ]
      ) + "") && t.p(n);
    },
    i: G,
    o: G,
    d(i) {
      i && R(l), i && t.d();
    }
  };
}
function ac(e) {
  let t;
  const n = (
    /*#slots*/
    e[12].caption
  ), l = Fe(
    n,
    e,
    /*$$scope*/
    e[19],
    to
  );
  return {
    c() {
      l && l.c();
    },
    m(i, r) {
      l && l.m(i, r), t = !0;
    },
    p(i, r) {
      l && l.p && (!t || r & /*$$scope*/
      524288) && je(
        l,
        n,
        i,
        /*$$scope*/
        i[19],
        t ? Pe(
          n,
          /*$$scope*/
          i[19],
          r,
          Xu
        ) : Ie(
          /*$$scope*/
          i[19]
        ),
        to
      );
    },
    i(i) {
      t || (C(l, i), t = !0);
    },
    o(i) {
      z(l, i), t = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function sc(e) {
  let t, n, l, i;
  const r = [Zu, Uu], o = [];
  function a(s, f) {
    return (
      /*noParent*/
      s[3] ? 0 : 1
    );
  }
  return t = a(e), n = o[t] = r[t](e), {
    c() {
      n.c(), l = ue();
    },
    m(s, f) {
      o[t].m(s, f), A(s, l, f), i = !0;
    },
    p(s, [f]) {
      let u = t;
      t = a(s), t === u ? o[t].p(s, f) : (ne(), z(o[u], 1, 1, () => {
        o[u] = null;
      }), le(), n = o[t], n ? n.p(s, f) : (n = o[t] = r[t](s), n.c()), C(n, 1), n.m(l.parentNode, l));
    },
    i(s) {
      i || (C(n), i = !0);
    },
    o(s) {
      z(n), i = !1;
    },
    d(s) {
      o[t].d(s), s && R(l);
    }
  };
}
function fc(e, t, n) {
  let { $$slots: l = {}, $$scope: i } = t;
  const r = Ci(l);
  let { width: o = null } = t, { title: a = null } = t, { horizontalLayout: s = !1 } = t, { noParent: f = !1 } = t, { colorScale: u = Array.from(rs) } = t, { counts: c = null } = t, { order: d = [] } = t, m = [], h;
  be(",");
  let g = be(".1~%"), p = 1;
  function w(T) {
    return `<strong>${g(T.count / p)}</strong> ${T.name}`;
  }
  let v = null;
  const M = (T) => n(7, h = T.detail ? T.detail.index : null), N = (T) => u(T), q = (T) => T.index == h, L = (T) => n(7, h = T.detail ? T.detail.index : null), D = (T) => u(T), O = (T) => T.index == h;
  return e.$$set = (T) => {
    "width" in T && n(0, o = T.width), "title" in T && n(1, a = T.title), "horizontalLayout" in T && n(2, s = T.horizontalLayout), "noParent" in T && n(3, f = T.noParent), "colorScale" in T && n(4, u = T.colorScale), "counts" in T && n(5, c = T.counts), "order" in T && n(11, d = T.order), "$$scope" in T && n(19, i = T.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*counts, order*/
    2080)
      if (c && d.length > 0) {
        let T = Object.values(c).reduce((F, x) => F + x, 0), S = 0;
        n(6, m = d.map((F, x) => {
          let E = S;
          return S += c[F] || 0, {
            start: E / T,
            end: S / T,
            index: x,
            name: F,
            count: c[F] || 0
          };
        }));
      } else
        n(6, m = []);
    e.$$.dirty & /*counts*/
    32 && (c ? p = Object.values(c).reduce((T, S) => T + S, 0) : p = 1), e.$$.dirty & /*data*/
    64 && (m.length > 0 ? n(8, v = m.reduce((T, S) => T.count > S.count ? T : S, m[0])) : n(8, v = null));
  }, [
    o,
    a,
    s,
    f,
    u,
    c,
    m,
    h,
    v,
    w,
    r,
    d,
    l,
    M,
    N,
    q,
    L,
    D,
    O,
    i
  ];
}
class uc extends de {
  constructor(t) {
    super(), ce(this, t, fc, sc, fe, {
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
function bn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
bn.prototype = {
  constructor: bn,
  scale: function(e) {
    return e === 1 ? this : new bn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new bn(this.k, this.x + this.k * e, this.y + this.k * t);
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
bn.prototype;
function io(e) {
  let t, n, l, i;
  const r = [bc, mc, dc, cc], o = [];
  function a(s, f) {
    return (
      /*values*/
      s[0].type == "binary" ? 0 : (
        /*values*/
        s[0].type == "count" ? 1 : (
          /*values*/
          s[0].type == "continuous" ? 2 : (
            /*values*/
            s[0].type == "categorical" ? 3 : -1
          )
        )
      )
    );
  }
  return ~(t = a(e)) && (n = o[t] = r[t](e)), {
    c() {
      n && n.c(), l = ue();
    },
    m(s, f) {
      ~t && o[t].m(s, f), A(s, l, f), i = !0;
    },
    p(s, f) {
      let u = t;
      t = a(s), t === u ? ~t && o[t].p(s, f) : (n && (ne(), z(o[u], 1, 1, () => {
        o[u] = null;
      }), le()), ~t ? (n = o[t], n ? n.p(s, f) : (n = o[t] = r[t](s), n.c()), C(n, 1), n.m(l.parentNode, l)) : n = null);
    },
    i(s) {
      i || (C(n), i = !0);
    },
    o(s) {
      z(n), i = !1;
    },
    d(s) {
      ~t && o[t].d(s), s && R(l);
    }
  };
}
function cc(e) {
  let t, n;
  return t = new uc({
    props: {
      order: Object.keys(
        /*values*/
        e[0].counts || {}
      ).sort(
        /*func*/
        e[1]
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
    m(l, i) {
      K(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*values*/
      1 && (r.order = Object.keys(
        /*values*/
        l[0].counts || {}
      ).sort(
        /*func*/
        l[1]
      )), i & /*values*/
      1 && (r.counts = /*values*/
      l[0].counts || {}), t.$set(r);
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
function dc(e) {
  let t, n;
  return t = new Vu({
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
      X(t.$$.fragment);
    },
    m(l, i) {
      K(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*values*/
      1 && (r.histValues = /*values*/
      l[0].hist), i & /*values*/
      1 && (r.mean = /*values*/
      l[0].mean ?? 0), t.$set(r);
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
  return t = new Di({
    props: {
      value: (
        /*values*/
        (e[0].count ?? 0) / /*values*/
        (e[0].total ?? 1)
      ),
      width: null,
      color: "#d97706",
      showFullBar: !0,
      $$slots: { caption: [hc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      X(t.$$.fragment);
    },
    m(l, i) {
      K(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*values*/
      1 && (r.value = /*values*/
      (l[0].count ?? 0) / /*values*/
      (l[0].total ?? 1)), i & /*$$scope, values*/
      5 && (r.$$scope = { dirty: i, ctx: l }), t.$set(r);
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
  let t, n;
  return t = new Di({
    props: {
      value: (
        /*values*/
        e[0].mean ?? 0
      ),
      width: null,
      color: "#d97706",
      showFullBar: !0,
      $$slots: { caption: [gc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      X(t.$$.fragment);
    },
    m(l, i) {
      K(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*values*/
      1 && (r.value = /*values*/
      l[0].mean ?? 0), i & /*$$scope, values*/
      5 && (r.$$scope = { dirty: i, ctx: l }), t.$set(r);
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
  let t, n, l = be(",")(
    /*values*/
    e[0].count ?? 0
  ) + "", i, r, o = be(",")(
    /*values*/
    e[0].total ?? 1
  ) + "", a;
  return {
    c() {
      t = k("span"), n = k("strong"), i = B(l), r = B(`
        / `), a = B(o), b(t, "slot", "caption");
    },
    m(s, f) {
      A(s, t, f), _(t, n), _(n, i), _(t, r), _(t, a);
    },
    p(s, f) {
      f & /*values*/
      1 && l !== (l = be(",")(
        /*values*/
        s[0].count ?? 0
      ) + "") && Z(i, l), f & /*values*/
      1 && o !== (o = be(",")(
        /*values*/
        s[0].total ?? 1
      ) + "") && Z(a, o);
    },
    d(s) {
      s && R(t);
    }
  };
}
function gc(e) {
  let t, n, l = be(".1%")(
    /*values*/
    e[0].mean ?? 0
  ) + "", i, r, o, a = be(".1%")(1 - /*values*/
  (e[0].mean ?? 0)) + "", s, f;
  return {
    c() {
      t = k("span"), n = k("strong"), i = B(l), r = B(`
        true,
        `), o = k("strong"), s = B(a), f = B(`
        false`), b(t, "slot", "caption");
    },
    m(u, c) {
      A(u, t, c), _(t, n), _(n, i), _(t, r), _(t, o), _(o, s), _(t, f);
    },
    p(u, c) {
      c & /*values*/
      1 && l !== (l = be(".1%")(
        /*values*/
        u[0].mean ?? 0
      ) + "") && Z(i, l), c & /*values*/
      1 && a !== (a = be(".1%")(1 - /*values*/
      (u[0].mean ?? 0)) + "") && Z(s, a);
    },
    d(u) {
      u && R(t);
    }
  };
}
function _c(e) {
  let t, n, l = !!/*values*/
  e[0] && io(e);
  return {
    c() {
      l && l.c(), t = ue();
    },
    m(i, r) {
      l && l.m(i, r), A(i, t, r), n = !0;
    },
    p(i, [r]) {
      /*values*/
      i[0] ? l ? (l.p(i, r), r & /*values*/
      1 && C(l, 1)) : (l = io(i), l.c(), C(l, 1), l.m(t.parentNode, t)) : l && (ne(), z(l, 1, 1, () => {
        l = null;
      }), le());
    },
    i(i) {
      n || (C(l), n = !0);
    },
    o(i) {
      z(l), n = !1;
    },
    d(i) {
      l && l.d(i), i && R(t);
    }
  };
}
function yc(e, t, n) {
  st(() => {
    console.log("mounted metric hcart");
  });
  let { values: l = null } = t;
  const i = (r, o) => {
    var a, s;
    return (((a = l.counts) == null ? void 0 : a[o]) ?? 0) - (((s = l.counts) == null ? void 0 : s[r]) ?? 0);
  };
  return e.$$set = (r) => {
    "values" in r && n(0, l = r.values);
  }, e.$$.update = () => {
    e.$$.dirty & /*values*/
    1 && console.log("values in metricchart:", l);
  }, [l, i];
}
class Pt extends de {
  constructor(t) {
    super(), ce(this, t, yc, _c, fe, { values: 0 });
  }
}
function ro(e) {
  let t, n, l, i = (
    /*values*/
    (e[0].values.type || "Time Series") + ""
  ), r, o, a, s, f, u, c, d, m, h, g, p = (
    /*formatNumber*/
    e[4](
      /*values*/
      e[0].values.length ?? 0
    ) + ""
  ), w, v, M, N, q, L, D, O, T, S, F, x, E, U;
  u = new we({
    props: {
      icon: (
        /*showCountDetails*/
        e[1] ? Be : Ht
      ),
      class: "text-slate-500 dark:text-slate-300"
    }
  });
  let j = (
    /*showCountDetails*/
    e[1] && oo(e)
  ), V = (
    /*values*/
    (e[0].missingness.rate.count ?? 0) > 0 && so(e)
  ), ee = (
    /*values*/
    e[0].types && co(e)
  );
  return F = new Pt({
    props: { values: (
      /*values*/
      e[0].values
    ) }
  }), {
    c() {
      t = k("div"), n = k("span"), n.textContent = "Type:", l = H(), r = B(i), o = H(), a = k("div"), s = k("div"), f = k("button"), X(u.$$.fragment), c = H(), d = k("div"), m = k("span"), m.textContent = "Count:", h = H(), g = k("span"), w = B(p), v = H(), M = k("span"), M.textContent = "rows", N = H(), j && j.c(), q = H(), V && V.c(), L = H(), ee && ee.c(), D = H(), O = k("div"), T = k("div"), T.textContent = "Values:", S = H(), X(F.$$.fragment), b(n, "class", "font-semibold"), b(t, "class", "text-sm font-mono text-slate-700 dark:text-slate-300 mb-4"), b(m, "class", "font-bold text-slate-900 dark:text-slate-100"), b(g, "class", "tabular-nums text-slate-700 dark:text-slate-200"), b(M, "class", "text-slate-500 dark:text-slate-400"), b(f, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), b(f, "aria-label", "Toggle count details"), b(s, "class", "flex flex-col bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-base w-full rounded-md overflow-hidden"), b(T, "class", "mb-2 text-sm font-bold text-slate-900 dark:text-slate-100 mr-2"), b(O, "class", "flex flex-col bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 px-4 py-2 text-base w-full rounded-md"), b(a, "class", "space-y-2");
    },
    m($, ae) {
      A($, t, ae), _(t, n), _(t, l), _(t, r), A($, o, ae), A($, a, ae), _(a, s), _(s, f), K(u, f, null), _(f, c), _(f, d), _(d, m), _(d, h), _(d, g), _(g, w), _(d, v), _(d, M), _(s, N), j && j.m(s, null), _(a, q), V && V.m(a, null), _(a, L), ee && ee.m(a, null), _(a, D), _(a, O), _(O, T), _(O, S), K(F, O, null), x = !0, E || (U = re(
        f,
        "click",
        /*click_handler*/
        e[6]
      ), E = !0);
    },
    p($, ae) {
      (!x || ae & /*values*/
      1) && i !== (i = /*values*/
      ($[0].values.type || "Time Series") + "") && Z(r, i);
      const I = {};
      ae & /*showCountDetails*/
      2 && (I.icon = /*showCountDetails*/
      $[1] ? Be : Ht), u.$set(I), (!x || ae & /*values*/
      1) && p !== (p = /*formatNumber*/
      $[4](
        /*values*/
        $[0].values.length ?? 0
      ) + "") && Z(w, p), /*showCountDetails*/
      $[1] ? j ? (j.p($, ae), ae & /*showCountDetails*/
      2 && C(j, 1)) : (j = oo($), j.c(), C(j, 1), j.m(s, null)) : j && (ne(), z(j, 1, 1, () => {
        j = null;
      }), le()), /*values*/
      ($[0].missingness.rate.count ?? 0) > 0 ? V ? (V.p($, ae), ae & /*values*/
      1 && C(V, 1)) : (V = so($), V.c(), C(V, 1), V.m(a, L)) : V && (ne(), z(V, 1, 1, () => {
        V = null;
      }), le()), /*values*/
      $[0].types ? ee ? (ee.p($, ae), ae & /*values*/
      1 && C(ee, 1)) : (ee = co($), ee.c(), C(ee, 1), ee.m(a, D)) : ee && (ne(), z(ee, 1, 1, () => {
        ee = null;
      }), le());
      const oe = {};
      ae & /*values*/
      1 && (oe.values = /*values*/
      $[0].values), F.$set(oe);
    },
    i($) {
      x || (C(u.$$.fragment, $), C(j), C(V), C(ee), C(F.$$.fragment, $), x = !0);
    },
    o($) {
      z(u.$$.fragment, $), z(j), z(V), z(ee), z(F.$$.fragment, $), x = !1;
    },
    d($) {
      $ && R(t), $ && R(o), $ && R(a), Y(u), j && j.d(), V && V.d(), ee && ee.d(), Y(F), E = !1, U();
    }
  };
}
function oo(e) {
  let t, n, l = (
    /*values*/
    e[0].ids && ao(e)
  );
  return {
    c() {
      t = k("div"), l && l.c(), b(t, "class", "mx-2 px-2 py-2");
    },
    m(i, r) {
      A(i, t, r), l && l.m(t, null), n = !0;
    },
    p(i, r) {
      /*values*/
      i[0].ids ? l ? (l.p(i, r), r & /*values*/
      1 && C(l, 1)) : (l = ao(i), l.c(), C(l, 1), l.m(t, null)) : l && (ne(), z(l, 1, 1, () => {
        l = null;
      }), le());
    },
    i(i) {
      n || (C(l), n = !0);
    },
    o(i) {
      z(l), n = !1;
    },
    d(i) {
      i && R(t), l && l.d();
    }
  };
}
function ao(e) {
  let t, n, l, i, r, o, a, s, f, u;
  return i = new Pt({
    props: { values: (
      /*values*/
      e[0].ids.count
    ) }
  }), f = new Pt({
    props: {
      values: (
        /*values*/
        e[0].ids.count_per_trajectory
      )
    }
  }), {
    c() {
      t = k("div"), t.textContent = "Trajectories", n = H(), l = k("div"), X(i.$$.fragment), r = H(), o = k("div"), o.textContent = "Timesteps per Trajectory", a = H(), s = k("div"), X(f.$$.fragment), b(t, "class", "mb-1 font-semibold text-sm text-slate-800 dark:text-slate-200"), b(l, "class", "mb-2"), b(o, "class", "mb-1 font-semibold text-sm text-slate-800 dark:text-slate-200"), b(s, "class", "mb-2");
    },
    m(c, d) {
      A(c, t, d), A(c, n, d), A(c, l, d), K(i, l, null), A(c, r, d), A(c, o, d), A(c, a, d), A(c, s, d), K(f, s, null), u = !0;
    },
    p(c, d) {
      const m = {};
      d & /*values*/
      1 && (m.values = /*values*/
      c[0].ids.count), i.$set(m);
      const h = {};
      d & /*values*/
      1 && (h.values = /*values*/
      c[0].ids.count_per_trajectory), f.$set(h);
    },
    i(c) {
      u || (C(i.$$.fragment, c), C(f.$$.fragment, c), u = !0);
    },
    o(c) {
      z(i.$$.fragment, c), z(f.$$.fragment, c), u = !1;
    },
    d(c) {
      c && R(t), c && R(n), c && R(l), Y(i), c && R(r), c && R(o), c && R(a), c && R(s), Y(f);
    }
  };
}
function so(e) {
  let t, n, l, i, r, o, a, s, f = (
    /*formatPercent*/
    e[5](
      /*values*/
      (e[0].missingness.rate.count ?? 0) / /*values*/
      (e[0].missingness.rate.total ?? 1)
    ) + ""
  ), u, c, d, m, h, g, p;
  l = new we({
    props: {
      icon: (
        /*showMissingnessDetails*/
        e[2] ? Be : Ht
      ),
      class: "text-slate-500 dark:text-slate-300"
    }
  });
  let w = (
    /*showMissingnessDetails*/
    e[2] && fo(e)
  );
  return {
    c() {
      t = k("div"), n = k("button"), X(l.$$.fragment), i = H(), r = k("div"), o = k("span"), o.textContent = "Missingness:", a = H(), s = k("span"), u = B(f), c = H(), d = k("span"), d.textContent = "of rows", m = H(), w && w.c(), b(o, "class", "font-bold text-slate-900 dark:text-slate-100"), b(s, "class", "tabular-nums text-slate-700 dark:text-slate-200"), b(d, "class", "text-slate-500 dark:text-slate-400"), b(n, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), b(n, "aria-label", "Toggle missingness details"), b(t, "class", "flex flex-col bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-base w-full rounded-md");
    },
    m(v, M) {
      A(v, t, M), _(t, n), K(l, n, null), _(n, i), _(n, r), _(r, o), _(r, a), _(r, s), _(s, u), _(r, c), _(r, d), _(t, m), w && w.m(t, null), h = !0, g || (p = re(
        n,
        "click",
        /*click_handler_1*/
        e[7]
      ), g = !0);
    },
    p(v, M) {
      const N = {};
      M & /*showMissingnessDetails*/
      4 && (N.icon = /*showMissingnessDetails*/
      v[2] ? Be : Ht), l.$set(N), (!h || M & /*values*/
      1) && f !== (f = /*formatPercent*/
      v[5](
        /*values*/
        (v[0].missingness.rate.count ?? 0) / /*values*/
        (v[0].missingness.rate.total ?? 1)
      ) + "") && Z(u, f), /*showMissingnessDetails*/
      v[2] ? w ? (w.p(v, M), M & /*showMissingnessDetails*/
      4 && C(w, 1)) : (w = fo(v), w.c(), C(w, 1), w.m(t, null)) : w && (ne(), z(w, 1, 1, () => {
        w = null;
      }), le());
    },
    i(v) {
      h || (C(l.$$.fragment, v), C(w), h = !0);
    },
    o(v) {
      z(l.$$.fragment, v), z(w), h = !1;
    },
    d(v) {
      v && R(t), Y(l), w && w.d(), g = !1, p();
    }
  };
}
function fo(e) {
  let t, n, l = (
    /*values*/
    e[0].missingness && uo(e)
  );
  return {
    c() {
      t = k("div"), l && l.c(), b(t, "class", "mx-2 px-2 py-2");
    },
    m(i, r) {
      A(i, t, r), l && l.m(t, null), n = !0;
    },
    p(i, r) {
      /*values*/
      i[0].missingness ? l ? (l.p(i, r), r & /*values*/
      1 && C(l, 1)) : (l = uo(i), l.c(), C(l, 1), l.m(t, null)) : l && (ne(), z(l, 1, 1, () => {
        l = null;
      }), le());
    },
    i(i) {
      n || (C(l), n = !0);
    },
    o(i) {
      z(l), n = !1;
    },
    d(i) {
      i && R(t), l && l.d();
    }
  };
}
function uo(e) {
  let t, n, l, i, r, o, a, s, f, u;
  return i = new Pt({
    props: {
      values: (
        /*values*/
        e[0].missingness.rate
      )
    }
  }), f = new Pt({
    props: {
      values: (
        /*values*/
        e[0].missingness.rate_per_trajectory
      )
    }
  }), {
    c() {
      t = k("div"), t.textContent = "Number of Missing Values", n = H(), l = k("div"), X(i.$$.fragment), r = H(), o = k("div"), o.textContent = "Missingness Rate per Trajectory", a = H(), s = k("div"), X(f.$$.fragment), b(t, "class", "mb-1 font-semibold text-sm text-slate-800 dark:text-slate-200"), b(l, "class", "mb-2"), b(o, "class", "mb-1 font-semibold text-sm text-slate-800 dark:text-slate-200"), b(s, "class", "mb-2");
    },
    m(c, d) {
      A(c, t, d), A(c, n, d), A(c, l, d), K(i, l, null), A(c, r, d), A(c, o, d), A(c, a, d), A(c, s, d), K(f, s, null), u = !0;
    },
    p(c, d) {
      const m = {};
      d & /*values*/
      1 && (m.values = /*values*/
      c[0].missingness.rate), i.$set(m);
      const h = {};
      d & /*values*/
      1 && (h.values = /*values*/
      c[0].missingness.rate_per_trajectory), f.$set(h);
    },
    i(c) {
      u || (C(i.$$.fragment, c), C(f.$$.fragment, c), u = !0);
    },
    o(c) {
      z(i.$$.fragment, c), z(f.$$.fragment, c), u = !1;
    },
    d(c) {
      c && R(t), c && R(n), c && R(l), Y(i), c && R(r), c && R(o), c && R(a), c && R(s), Y(f);
    }
  };
}
function co(e) {
  let t, n, l, i, r, o, a, s, f = (
    /*formatNumber*/
    e[4](Object.keys(
      /*values*/
      e[0].types.counts
    ).length ?? 0) + ""
  ), u, c, d, m, h, g, p;
  l = new we({
    props: {
      icon: (
        /*showTypeDetails*/
        e[3] ? Be : Ht
      ),
      class: "text-slate-500 dark:text-slate-300"
    }
  });
  let w = (
    /*showTypeDetails*/
    e[3] && mo(e)
  );
  return {
    c() {
      t = k("div"), n = k("button"), X(l.$$.fragment), i = H(), r = k("div"), o = k("span"), o.textContent = "Data Elements:", a = H(), s = k("span"), u = B(f), c = H(), d = k("span"), d.textContent = "distinct elements", m = H(), w && w.c(), b(o, "class", "font-bold text-slate-900 dark:text-slate-100"), b(s, "class", "tabular-nums text-slate-700 dark:text-slate-200"), b(d, "class", "text-slate-500 dark:text-slate-400"), b(n, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), b(n, "aria-label", "Toggle type details"), b(t, "class", "flex flex-col bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-base w-full rounded-md");
    },
    m(v, M) {
      A(v, t, M), _(t, n), K(l, n, null), _(n, i), _(n, r), _(r, o), _(r, a), _(r, s), _(s, u), _(r, c), _(r, d), _(t, m), w && w.m(t, null), h = !0, g || (p = re(
        n,
        "click",
        /*click_handler_2*/
        e[8]
      ), g = !0);
    },
    p(v, M) {
      const N = {};
      M & /*showTypeDetails*/
      8 && (N.icon = /*showTypeDetails*/
      v[3] ? Be : Ht), l.$set(N), (!h || M & /*values*/
      1) && f !== (f = /*formatNumber*/
      v[4](Object.keys(
        /*values*/
        v[0].types.counts
      ).length ?? 0) + "") && Z(u, f), /*showTypeDetails*/
      v[3] ? w ? (w.p(v, M), M & /*showTypeDetails*/
      8 && C(w, 1)) : (w = mo(v), w.c(), C(w, 1), w.m(t, null)) : w && (ne(), z(w, 1, 1, () => {
        w = null;
      }), le());
    },
    i(v) {
      h || (C(l.$$.fragment, v), C(w), h = !0);
    },
    o(v) {
      z(l.$$.fragment, v), z(w), h = !1;
    },
    d(v) {
      v && R(t), Y(l), w && w.d(), g = !1, p();
    }
  };
}
function mo(e) {
  let t, n, l;
  return n = new Pt({
    props: { values: (
      /*values*/
      e[0].types
    ) }
  }), {
    c() {
      t = k("div"), X(n.$$.fragment), b(t, "class", "mx-2 px-2 py-2");
    },
    m(i, r) {
      A(i, t, r), K(n, t, null), l = !0;
    },
    p(i, r) {
      const o = {};
      r & /*values*/
      1 && (o.values = /*values*/
      i[0].types), n.$set(o);
    },
    i(i) {
      l || (C(n.$$.fragment, i), l = !0);
    },
    o(i) {
      z(n.$$.fragment, i), l = !1;
    },
    d(i) {
      i && R(t), Y(n);
    }
  };
}
function pc(e) {
  let t, n, l = (
    /*values*/
    e[0] && /*values*/
    e[0].values && ro(e)
  );
  return {
    c() {
      l && l.c(), t = ue();
    },
    m(i, r) {
      l && l.m(i, r), A(i, t, r), n = !0;
    },
    p(i, [r]) {
      /*values*/
      i[0] && /*values*/
      i[0].values ? l ? (l.p(i, r), r & /*values*/
      1 && C(l, 1)) : (l = ro(i), l.c(), C(l, 1), l.m(t.parentNode, t)) : l && (ne(), z(l, 1, 1, () => {
        l = null;
      }), le());
    },
    i(i) {
      n || (C(l), n = !0);
    },
    o(i) {
      z(l), n = !1;
    },
    d(i) {
      l && l.d(i), i && R(t);
    }
  };
}
function kc(e, t, n) {
  let { values: l = null } = t, i = !1, r = !1, o = !1;
  const a = be(","), s = be(".1~%"), f = () => n(1, i = !i), u = () => n(2, r = !r), c = () => n(3, o = !o);
  return e.$$set = (d) => {
    "values" in d && n(0, l = d.values);
  }, e.$$.update = () => {
    e.$$.dirty & /*values*/
    1 && (console.log("QueryResultCard - Values received:"), console.log("  values:", l)), e.$$.dirty & /*values*/
    1 && console.log("values", l);
  }, [
    l,
    i,
    r,
    o,
    a,
    s,
    f,
    u,
    c
  ];
}
class Zo extends de {
  constructor(t) {
    super(), ce(this, t, kc, pc, fe, { values: 0 });
  }
}
function bo(e) {
  let t, n, l;
  return n = new Zo({
    props: { values: (
      /*data*/
      e[1].result
    ) }
  }), {
    c() {
      t = k("div"), X(n.$$.fragment), b(t, "class", "p-4 border-t border-slate-200 dark:border-slate-700");
    },
    m(i, r) {
      A(i, t, r), K(n, t, null), l = !0;
    },
    p(i, r) {
      const o = {};
      r & /*data*/
      2 && (o.values = /*data*/
      i[1].result), n.$set(o);
    },
    i(i) {
      l || (C(n.$$.fragment, i), l = !0);
    },
    o(i) {
      z(n.$$.fragment, i), l = !1;
    },
    d(i) {
      i && R(t), Y(n);
    }
  };
}
function wc(e) {
  let t, n, l, i, r, o, a, s, f, u;
  o = new we({
    props: {
      icon: (
        /*isExpanded*/
        e[2] ? Fl : Be
      ),
      class: "text-slate-600 dark:text-slate-300"
    }
  });
  let c = (
    /*isExpanded*/
    e[2] && bo(e)
  );
  return {
    c() {
      t = k("div"), n = k("button"), l = k("span"), i = B(
        /*queryText*/
        e[0]
      ), r = H(), X(o.$$.fragment), a = H(), c && c.c(), b(l, "class", "text-sm font-mono text-slate-700 dark:text-slate-300 truncate flex-1"), b(n, "class", "w-full px-3 py-2 text-left flex items-center justify-between bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200 focus:outline-none"), b(t, "class", "border border-slate-300 dark:border-slate-600 rounded-md mb-2 overflow-hidden");
    },
    m(d, m) {
      A(d, t, m), _(t, n), _(n, l), _(l, i), _(n, r), K(o, n, null), _(t, a), c && c.m(t, null), s = !0, f || (u = re(
        n,
        "click",
        /*toggleExpanded*/
        e[3]
      ), f = !0);
    },
    p(d, [m]) {
      (!s || m & /*queryText*/
      1) && Z(
        i,
        /*queryText*/
        d[0]
      );
      const h = {};
      m & /*isExpanded*/
      4 && (h.icon = /*isExpanded*/
      d[2] ? Fl : Be), o.$set(h), /*isExpanded*/
      d[2] ? c ? (c.p(d, m), m & /*isExpanded*/
      4 && C(c, 1)) : (c = bo(d), c.c(), C(c, 1), c.m(t, null)) : c && (ne(), z(c, 1, 1, () => {
        c = null;
      }), le());
    },
    i(d) {
      s || (C(o.$$.fragment, d), C(c), s = !0);
    },
    o(d) {
      z(o.$$.fragment, d), z(c), s = !1;
    },
    d(d) {
      d && R(t), Y(o), c && c.d(), f = !1, u();
    }
  };
}
function vc(e, t, n) {
  let { queryText: l } = t, { data: i } = t, r = !1;
  function o() {
    n(2, r = !r);
  }
  return e.$$set = (a) => {
    "queryText" in a && n(0, l = a.queryText), "data" in a && n(1, i = a.data);
  }, [l, i, r, o];
}
class Sc extends de {
  constructor(t) {
    super(), ce(this, t, vc, wc, fe, { queryText: 0, data: 1 });
  }
}
function ho(e, t, n) {
  const l = e.slice();
  return l[5] = t[n][0], l[6] = t[n][1], l;
}
function go(e) {
  let t, n, l, i, r;
  const o = [xc, Cc], a = [];
  function s(f, u) {
    return u & /*subqueries*/
    4 && (n = null), n == null && (n = Object.keys(
      /*subqueries*/
      f[2]
    ).length > 0), n ? 0 : 1;
  }
  return l = s(e, -1), i = a[l] = o[l](e), {
    c() {
      t = k("div"), i.c(), b(t, "class", "space-y-2 mt-3");
    },
    m(f, u) {
      A(f, t, u), a[l].m(t, null), r = !0;
    },
    p(f, u) {
      let c = l;
      l = s(f, u), l === c ? a[l].p(f, u) : (ne(), z(a[c], 1, 1, () => {
        a[c] = null;
      }), le(), i = a[l], i ? i.p(f, u) : (i = a[l] = o[l](f), i.c()), C(i, 1), i.m(t, null));
    },
    i(f) {
      r || (C(i), r = !0);
    },
    o(f) {
      z(i), r = !1;
    },
    d(f) {
      f && R(t), a[l].d();
    }
  };
}
function Cc(e) {
  let t;
  return {
    c() {
      t = k("div"), t.textContent = "No subqueries yet", b(t, "class", "text-center py-8 text-slate-900 dark:text-slate-100");
    },
    m(n, l) {
      A(n, t, l);
    },
    p: G,
    i: G,
    o: G,
    d(n) {
      n && R(t);
    }
  };
}
function xc(e) {
  let t, n, l = Object.entries(
    /*subqueries*/
    e[2]
  ), i = [];
  for (let o = 0; o < l.length; o += 1)
    i[o] = _o(ho(e, l, o));
  const r = (o) => z(i[o], 1, 1, () => {
    i[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      t = ue();
    },
    m(o, a) {
      for (let s = 0; s < i.length; s += 1)
        i[s] && i[s].m(o, a);
      A(o, t, a), n = !0;
    },
    p(o, a) {
      if (a & /*Object, subqueries*/
      4) {
        l = Object.entries(
          /*subqueries*/
          o[2]
        );
        let s;
        for (s = 0; s < l.length; s += 1) {
          const f = ho(o, l, s);
          i[s] ? (i[s].p(f, a), C(i[s], 1)) : (i[s] = _o(f), i[s].c(), C(i[s], 1), i[s].m(t.parentNode, t));
        }
        for (ne(), s = l.length; s < i.length; s += 1)
          r(s);
        le();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < l.length; a += 1)
          C(i[a]);
        n = !0;
      }
    },
    o(o) {
      i = i.filter(Boolean);
      for (let a = 0; a < i.length; a += 1)
        z(i[a]);
      n = !1;
    },
    d(o) {
      Ge(i, o), o && R(t);
    }
  };
}
function _o(e) {
  let t, n;
  return t = new Sc({
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
    m(l, i) {
      K(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*subqueries*/
      4 && (r.queryText = /*queryText*/
      l[5]), i & /*subqueries*/
      4 && (r.data = /*subqueryData*/
      l[6]), t.$set(r);
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
  let t, n, l, i, r, o, a, s, f, u, c;
  o = new we({
    props: {
      icon: (
        /*enabled*/
        e[0] ? Fl : Be
      ),
      class: "inline"
    }
  });
  let d = (
    /*enabled*/
    e[0] && go(e)
  );
  return {
    c() {
      t = k("div"), n = k("button"), l = k("h3"), l.textContent = "Subqueries", i = H(), r = k("div"), X(o.$$.fragment), a = H(), d && d.c(), b(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100"), b(r, "class", "p-2 text-slate-800 dark:text-slate-200"), b(n, "class", "block flex items-center justify-between mb-2 hover:opacity-50"), b(t, "class", s = "p-2 mb-0 border-0 rounded-none " + /*width*/
      e[1] + " transition-colors duration-200"), J(t, "opacity-50", Object.keys(
        /*subqueries*/
        e[2]
      ).length == 0);
    },
    m(m, h) {
      A(m, t, h), _(t, n), _(n, l), _(n, i), _(n, r), K(o, r, null), _(t, a), d && d.m(t, null), f = !0, u || (c = re(
        n,
        "click",
        /*click_handler*/
        e[4]
      ), u = !0);
    },
    p(m, [h]) {
      const g = {};
      h & /*enabled*/
      1 && (g.icon = /*enabled*/
      m[0] ? Fl : Be), o.$set(g), /*enabled*/
      m[0] ? d ? (d.p(m, h), h & /*enabled*/
      1 && C(d, 1)) : (d = go(m), d.c(), C(d, 1), d.m(t, null)) : d && (ne(), z(d, 1, 1, () => {
        d = null;
      }), le()), (!f || h & /*width*/
      2 && s !== (s = "p-2 mb-0 border-0 rounded-none " + /*width*/
      m[1] + " transition-colors duration-200")) && b(t, "class", s), (!f || h & /*width, Object, subqueries*/
      6) && J(t, "opacity-50", Object.keys(
        /*subqueries*/
        m[2]
      ).length == 0);
    },
    i(m) {
      f || (C(o.$$.fragment, m), C(d), f = !0);
    },
    o(m) {
      z(o.$$.fragment, m), z(d), f = !1;
    },
    d(m) {
      m && R(t), Y(o), d && d.d(), u = !1, c();
    }
  };
}
function Rc(e, t, n) {
  let { width: l = "w-full max-w-2xl" } = t, { enabled: i = !1 } = t, { subqueries: r = {} } = t, { idsLength: o = 0 } = t;
  const a = () => n(0, i = !i);
  return e.$$set = (s) => {
    "width" in s && n(1, l = s.width), "enabled" in s && n(0, i = s.enabled), "subqueries" in s && n(2, r = s.subqueries), "idsLength" in s && n(3, o = s.idsLength);
  }, e.$$.update = () => {
    e.$$.dirty & /*subqueries, enabled*/
    5 && (console.log("🔍 SubquerySection - subqueries changed:", r), console.log("🔍 SubquerySection - enabled:", i), console.log("🔍 SubquerySection - subqueries keys:", Object.keys(r)));
  }, [i, l, r, o, a];
}
class zc extends de {
  constructor(t) {
    super(), ce(this, t, Rc, Mc, fe, {
      width: 1,
      enabled: 0,
      subqueries: 2,
      idsLength: 3
    });
  }
}
function Ac(e) {
  let t, n, l, i, r;
  const o = [Tc, Nc, Dc, Ec], a = [];
  function s(f, u) {
    return (
      /*isLoading*/
      f[0] ? 0 : (
        /*error*/
        f[1] ? 1 : (
          /*historicalResponse*/
          f[7] ? 2 : (
            /*llmResponse*/
            f[2] ? 3 : -1
          )
        )
      )
    );
  }
  return ~(n = s(e)) && (l = a[n] = o[n](e)), {
    c() {
      t = k("div"), l && l.c(), b(t, "class", i = "h-full " + /*scrollable*/
      (e[5] ? "overflow-auto" : ""));
    },
    m(f, u) {
      A(f, t, u), ~n && a[n].m(t, null), r = !0;
    },
    p(f, u) {
      let c = n;
      n = s(f), n === c ? ~n && a[n].p(f, u) : (l && (ne(), z(a[c], 1, 1, () => {
        a[c] = null;
      }), le()), ~n ? (l = a[n], l ? l.p(f, u) : (l = a[n] = o[n](f), l.c()), C(l, 1), l.m(t, null)) : l = null), (!r || u & /*scrollable*/
      32 && i !== (i = "h-full " + /*scrollable*/
      (f[5] ? "overflow-auto" : ""))) && b(t, "class", i);
    },
    i(f) {
      r || (C(l), r = !0);
    },
    o(f) {
      z(l), r = !1;
    },
    d(f) {
      f && R(t), ~n && a[n].d();
    }
  };
}
function Lc(e) {
  let t, n, l, i, r, o, a, s, f, u, c, d, m, h, g;
  return o = new we({
    props: { icon: Lo, class: "inline mr-2" }
  }), u = new we({
    props: {
      icon: Ca,
      class: "inline mr-2"
    }
  }), {
    c() {
      t = k("div"), n = k("textarea"), l = H(), i = k("div"), r = k("button"), X(o.$$.fragment), a = B(`
          History`), s = H(), f = k("button"), X(u.$$.fragment), c = B(`
          Ask AI`), b(n, "class", "w-full h-full p-4 pb-16 bg-transparent font-mono text-sm bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-slate-500 dark:placeholder-slate-400 resize-none overflow-hidden min-h-[120px] relative z-20"), b(n, "placeholder", "// Ask me to generate a TempoQL query or explain data patterns..."), n.disabled = /*isLoading*/
      e[0], b(n, "rows", "5"), b(r, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-slate-200 hover:bg-slate-200/50 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white"), b(r, "title", "View query history"), b(f, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50"), f.disabled = d = !/*inputValue*/
      e[8].trim() || /*isLoading*/
      e[0], b(i, "class", "absolute right-0 bottom-0 mr-4 mb-4 flex justify-end items-center gap-2 z-50"), b(t, "class", "relative w-full min-h-0 flex-auto");
    },
    m(p, w) {
      A(p, t, w), _(t, n), e[21](n), Ol(
        n,
        /*inputValue*/
        e[8]
      ), _(t, l), _(t, i), _(i, r), K(o, r, null), _(r, a), _(i, s), _(i, f), K(u, f, null), _(f, c), m = !0, h || (g = [
        re(
          n,
          "input",
          /*textarea_input_handler*/
          e[22]
        ),
        re(
          n,
          "keydown",
          /*handleKeydown*/
          e[13]
        ),
        re(r, "click", function() {
          lt(
            /*onHistoryClick*/
            e[6]
          ) && e[6].apply(this, arguments);
        }),
        re(
          f,
          "click",
          /*click_handler_2*/
          e[23]
        )
      ], h = !0);
    },
    p(p, w) {
      e = p, (!m || w & /*isLoading*/
      1) && (n.disabled = /*isLoading*/
      e[0]), w & /*inputValue*/
      256 && Ol(
        n,
        /*inputValue*/
        e[8]
      ), (!m || w & /*inputValue, isLoading*/
      257 && d !== (d = !/*inputValue*/
      e[8].trim() || /*isLoading*/
      e[0])) && (f.disabled = d);
    },
    i(p) {
      m || (C(o.$$.fragment, p), C(u.$$.fragment, p), m = !0);
    },
    o(p) {
      z(o.$$.fragment, p), z(u.$$.fragment, p), m = !1;
    },
    d(p) {
      p && R(t), e[21](null), Y(o), Y(u), h = !1, Re(g);
    }
  };
}
function Ec(e) {
  let t, n, l = Kl(
    /*llmResponse*/
    e[2]
  ) + "";
  return {
    c() {
      t = k("div"), n = k("div"), b(n, "class", "text-slate-700 dark:text-slate-200 text-sm leading-relaxed prose prose-sm max-w-none"), b(t, "class", "flex-1 overflow-y-auto ai-scrollbar");
    },
    m(i, r) {
      A(i, t, r), _(t, n), n.innerHTML = l;
    },
    p(i, r) {
      r & /*llmResponse*/
      4 && l !== (l = Kl(
        /*llmResponse*/
        i[2]
      ) + "") && (n.innerHTML = l);
    },
    i: G,
    o: G,
    d(i) {
      i && R(t);
    }
  };
}
function Dc(e) {
  let t, n, l, i, r = Kl(
    /*historicalResponse*/
    e[7]
  ) + "";
  return {
    c() {
      t = k("div"), t.innerHTML = `<span class="text-purple-600 dark:text-purple-400 text-lg">📚</span> 
          <h4 class="text-purple-600 dark:text-purple-400 font-medium text-sm">Historical Response</h4>`, n = H(), l = k("div"), i = k("div"), b(t, "class", "flex items-center space-x-3 p-4 border-b border-slate-300 dark:border-slate-600 flex-shrink-0"), b(i, "class", "text-slate-700 dark:text-slate-200 text-sm leading-relaxed prose prose-sm max-w-none font-mono"), b(l, "class", "flex-1 overflow-y-auto p-4 ai-scrollbar");
    },
    m(o, a) {
      A(o, t, a), A(o, n, a), A(o, l, a), _(l, i), i.innerHTML = r;
    },
    p(o, a) {
      a & /*historicalResponse*/
      128 && r !== (r = Kl(
        /*historicalResponse*/
        o[7]
      ) + "") && (i.innerHTML = r);
    },
    i: G,
    o: G,
    d(o) {
      o && R(t), o && R(n), o && R(l);
    }
  };
}
function Nc(e) {
  let t, n, l, i, r, o, a, s;
  return n = new we({
    props: { icon: Eo, class: "text-lg" }
  }), {
    c() {
      t = k("div"), X(n.$$.fragment), l = H(), i = k("h4"), i.textContent = "Error", r = H(), o = k("p"), a = B(
        /*error*/
        e[1]
      ), b(i, "class", "text-red-500 dark:text-red-400 font-medium text-sm"), b(o, "class", "text-slate-700 dark:text-slate-300 text-sm font-mono text-center max-w-full"), b(t, "class", "flex items-center flex-col justify-center");
    },
    m(f, u) {
      A(f, t, u), K(n, t, null), _(t, l), _(t, i), _(t, r), _(t, o), _(o, a), s = !0;
    },
    p(f, u) {
      (!s || u & /*error*/
      2) && Z(
        a,
        /*error*/
        f[1]
      );
    },
    i(f) {
      s || (C(n.$$.fragment, f), s = !0);
    },
    o(f) {
      z(n.$$.fragment, f), s = !1;
    },
    d(f) {
      f && R(t), Y(n);
    }
  };
}
function Tc(e) {
  let t, n, l;
  return {
    c() {
      t = k("div"), n = H(), l = k("h4"), l.textContent = "AI is thinking...", b(t, "class", "animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600 dark:border-blue-400"), b(l, "class", "text-blue-600 dark:text-blue-400 font-medium text-sm");
    },
    m(i, r) {
      A(i, t, r), A(i, n, r), A(i, l, r);
    },
    p: G,
    i: G,
    o: G,
    d(i) {
      i && R(t), i && R(n), i && R(l);
    }
  };
}
function qc(e) {
  let t, n, l, i, r, o, a, s, f, u, c, d, m, h, g, p, w, v, M, N, q, L, D, O, T, S;
  w = new we({
    props: {
      icon: (
        /*apiStatusInfo*/
        e[11].icon
      ),
      class: "inline mr-2"
    }
  });
  const F = [Lc, Ac], x = [];
  function E(U, j) {
    return (
      /*tab*/
      U[9] == "query" ? 0 : 1
    );
  }
  return q = E(e), L = x[q] = F[q](e), {
    c() {
      t = k("div"), n = k("div"), l = k("h3"), l.textContent = "AI Assistant", i = H(), r = k("button"), o = B("Query"), s = H(), f = k("button"), u = B("Response"), m = H(), h = k("div"), g = H(), p = k("div"), X(w.$$.fragment), v = H(), M = B(
        /*apiStatus*/
        e[3]
      ), N = H(), L.c(), b(l, "class", "text-lg font-semibold text-slate-900 dark:text-slate-100 pr-2"), b(r, "class", a = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*tab*/
      (e[9] === "query" ? "bg-slate-600 text-white dark:bg-slate-200 dark:text-slate-800" : "dark:text-white bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800")), b(r, "type", "button"), b(f, "class", c = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 disabled:opacity-50 " + /*tab*/
      (e[9] === "response" ? "bg-slate-600 text-white dark:bg-slate-200 dark:text-slate-800" : "dark:text-white bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800")), f.disabled = d = !/*llmResponse*/
      e[2], b(f, "type", "button"), b(h, "class", "flex-auto"), b(p, "class", "flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300"), b(n, "class", "flex items-center mb-4 gap-2 shrink-0"), b(t, "class", D = "px-4 pb-4 " + /*width*/
      e[4] + " h-full flex flex-col");
    },
    m(U, j) {
      A(U, t, j), _(t, n), _(n, l), _(n, i), _(n, r), _(r, o), _(n, s), _(n, f), _(f, u), _(n, m), _(n, h), _(n, g), _(n, p), K(w, p, null), _(p, v), _(p, M), _(t, N), x[q].m(t, null), O = !0, T || (S = [
        re(
          r,
          "click",
          /*click_handler*/
          e[19]
        ),
        re(
          f,
          "click",
          /*click_handler_1*/
          e[20]
        )
      ], T = !0);
    },
    p(U, [j]) {
      (!O || j & /*tab*/
      512 && a !== (a = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*tab*/
      (U[9] === "query" ? "bg-slate-600 text-white dark:bg-slate-200 dark:text-slate-800" : "dark:text-white bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800"))) && b(r, "class", a), (!O || j & /*tab*/
      512 && c !== (c = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 disabled:opacity-50 " + /*tab*/
      (U[9] === "response" ? "bg-slate-600 text-white dark:bg-slate-200 dark:text-slate-800" : "dark:text-white bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800"))) && b(f, "class", c), (!O || j & /*llmResponse*/
      4 && d !== (d = !/*llmResponse*/
      U[2])) && (f.disabled = d);
      const V = {};
      j & /*apiStatusInfo*/
      2048 && (V.icon = /*apiStatusInfo*/
      U[11].icon), w.$set(V), (!O || j & /*apiStatus*/
      8) && Z(
        M,
        /*apiStatus*/
        U[3]
      );
      let ee = q;
      q = E(U), q === ee ? x[q].p(U, j) : (ne(), z(x[ee], 1, 1, () => {
        x[ee] = null;
      }), le(), L = x[q], L ? L.p(U, j) : (L = x[q] = F[q](U), L.c()), C(L, 1), L.m(t, null)), (!O || j & /*width*/
      16 && D !== (D = "px-4 pb-4 " + /*width*/
      U[4] + " h-full flex flex-col")) && b(t, "class", D);
    },
    i(U) {
      O || (C(w.$$.fragment, U), C(L), O = !0);
    },
    o(U) {
      z(w.$$.fragment, U), z(L), O = !1;
    },
    d(U) {
      U && R(t), Y(w), x[q].d(), T = !1, Re(S);
    }
  };
}
function Kl(e) {
  return e ? e.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>").replace(/`(.*?)`/g, '<code class="bg-slate-100 px-1 py-0.5 rounded text-sm font-mono">$1</code>').replace(/\n/g, "<br>") : "";
}
function Oc(e, t, n) {
  let l, { onSubmit: i = () => {
  } } = t, { isLoading: r = !1 } = t, { error: o = "" } = t, { llmResponse: a = "" } = t, { apiStatus: s = "Checking API connection..." } = t, { width: f = "w-full" } = t, { scrollable: u = !0 } = t, { extractedQuery: c = "" } = t, { hasExtractedQuery: d = !1 } = t, { onQueryExtracted: m = () => {
  } } = t, { onHistoryClick: h = () => {
  } } = t, { inputValueOverride: g = "" } = t, { historicalResponse: p = "" } = t, w = "query", v = "", M;
  function N() {
    v.trim() && (i(v.trim()), M && M.focus());
  }
  function q(x) {
    x.key === "Enter" && !x.shiftKey && (x.preventDefault(), N());
  }
  function L(x) {
    return x.includes("Configured") || x.includes("ready") ? {
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      icon: va
    } : x.includes("Not configured") || x.includes("Invalid") ? {
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      icon: Na
    } : {
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      icon: Eo
    };
  }
  const D = () => n(9, w = "query"), O = () => n(9, w = "response");
  function T(x) {
    Me[x ? "unshift" : "push"](() => {
      M = x, n(10, M);
    });
  }
  function S() {
    v = this.value, n(8, v), n(18, g);
  }
  const F = () => {
    N(), n(9, w = "response");
  };
  return e.$$set = (x) => {
    "onSubmit" in x && n(14, i = x.onSubmit), "isLoading" in x && n(0, r = x.isLoading), "error" in x && n(1, o = x.error), "llmResponse" in x && n(2, a = x.llmResponse), "apiStatus" in x && n(3, s = x.apiStatus), "width" in x && n(4, f = x.width), "scrollable" in x && n(5, u = x.scrollable), "extractedQuery" in x && n(15, c = x.extractedQuery), "hasExtractedQuery" in x && n(16, d = x.hasExtractedQuery), "onQueryExtracted" in x && n(17, m = x.onQueryExtracted), "onHistoryClick" in x && n(6, h = x.onHistoryClick), "inputValueOverride" in x && n(18, g = x.inputValueOverride), "historicalResponse" in x && n(7, p = x.historicalResponse);
  }, e.$$.update = () => {
    e.$$.dirty & /*inputValueOverride, inputValue*/
    262400 && g && g !== v && n(8, v = g), e.$$.dirty & /*hasExtractedQuery, extractedQuery, onQueryExtracted*/
    229376 && d && c && (console.log("🤖 AIAssistant: Query extracted, triggering handler:", c), m()), e.$$.dirty & /*apiStatus*/
    8 && n(11, l = L(s));
  }, [
    r,
    o,
    a,
    s,
    f,
    u,
    h,
    p,
    v,
    w,
    M,
    l,
    N,
    q,
    i,
    c,
    d,
    m,
    g,
    D,
    O,
    T,
    S,
    F
  ];
}
class Hc extends de {
  constructor(t) {
    super(), ce(this, t, Oc, qc, fe, {
      onSubmit: 14,
      isLoading: 0,
      error: 1,
      llmResponse: 2,
      apiStatus: 3,
      width: 4,
      scrollable: 5,
      extractedQuery: 15,
      hasExtractedQuery: 16,
      onQueryExtracted: 17,
      onHistoryClick: 6,
      inputValueOverride: 18,
      historicalResponse: 7
    });
  }
}
function yo(e) {
  let t, n, l;
  return n = new Hc({
    props: {
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
        e[16]
      ),
      onQueryExtracted: (
        /*onQueryExtracted*/
        e[17]
      ),
      onHistoryClick: (
        /*onHistoryClick*/
        e[18]
      ),
      inputValueOverride: (
        /*aiInputValueOverride*/
        e[20]
      ),
      historicalResponse: (
        /*historicalResponse*/
        e[21]
      )
    }
  }), {
    c() {
      t = k("div"), X(n.$$.fragment), b(t, "class", "w-full h-1/2 overflow-hidden");
    },
    m(i, r) {
      A(i, t, r), K(n, t, null), e[25](t), l = !0;
    },
    p(i, r) {
      const o = {};
      r & /*onLLMSubmit*/
      512 && (o.onSubmit = /*onLLMSubmit*/
      i[9]), r & /*llmResponse*/
      1024 && (o.llmResponse = /*llmResponse*/
      i[10]), r & /*llmLoading*/
      2048 && (o.isLoading = /*llmLoading*/
      i[11]), r & /*llmError*/
      4096 && (o.error = /*llmError*/
      i[12]), r & /*apiStatus*/
      16384 && (o.apiStatus = /*apiStatus*/
      i[14]), r & /*extractedQuery*/
      32768 && (o.extractedQuery = /*extractedQuery*/
      i[15]), r & /*hasExtractedQuery*/
      65536 && (o.hasExtractedQuery = /*hasExtractedQuery*/
      i[16]), r & /*onQueryExtracted*/
      131072 && (o.onQueryExtracted = /*onQueryExtracted*/
      i[17]), r & /*onHistoryClick*/
      262144 && (o.onHistoryClick = /*onHistoryClick*/
      i[18]), r & /*aiInputValueOverride*/
      1048576 && (o.inputValueOverride = /*aiInputValueOverride*/
      i[20]), r & /*historicalResponse*/
      2097152 && (o.historicalResponse = /*historicalResponse*/
      i[21]), n.$set(o);
    },
    i(i) {
      l || (C(n.$$.fragment, i), l = !0);
    },
    o(i) {
      z(n.$$.fragment, i), l = !1;
    },
    d(i) {
      i && R(t), Y(n), e[25](null);
    }
  };
}
function po(e) {
  let t, n, l, i, r;
  return {
    c() {
      t = k("div"), n = k("h3"), n.textContent = "Query Error", l = H(), i = k("div"), r = B(
        /*queryError*/
        e[5]
      ), b(n, "class", "text-lg font-medium text-red-700 dark:text-red-100 mb-2"), b(i, "class", "text-sm font-mono text-slate-800 dark:text-slate-100"), b(t, "class", "bg-red-50 dark:bg-red-800/40 rounded-lg border border-red-200 dark:border-red-400 p-4 mb-4");
    },
    m(o, a) {
      A(o, t, a), _(t, n), _(t, l), _(t, i), _(i, r);
    },
    p(o, a) {
      a & /*queryError*/
      32 && Z(
        r,
        /*queryError*/
        o[5]
      );
    },
    d(o) {
      o && R(t);
    }
  };
}
function Fc(e) {
  let t;
  return {
    c() {
      t = k("div"), t.textContent = "No query results", b(t, "class", "text-center py-8 text-slate-900 dark:text-slate-100");
    },
    m(n, l) {
      A(n, t, l);
    },
    p: G,
    i: G,
    o: G,
    d(n) {
      n && R(t);
    }
  };
}
function Pc(e) {
  let t, n;
  return t = new Zo({ props: { values: (
    /*values*/
    e[6]
  ) } }), {
    c() {
      X(t.$$.fragment);
    },
    m(l, i) {
      K(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*values*/
      64 && (r.values = /*values*/
      l[6]), t.$set(r);
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
function jc(e) {
  let t, n, l, i, r, o, a, s, f, u, c, d, m, h, g, p, w, v, M, N;
  function q(x) {
    e[24](x);
  }
  let L = {
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
      e[19]
    ),
    width: "w-full"
  };
  /*textInput*/
  e[0] !== void 0 && (L.value = /*textInput*/
  e[0]), i = new mf({ props: L }), Me.push(() => Mi(i, "value", q));
  let D = (
    /*llmAvailable*/
    e[13] && yo(e)
  ), O = !!/*queryError*/
  e[5] && po(e);
  const T = [Pc, Fc], S = [];
  function F(x, E) {
    return E & /*values*/
    64 && (m = null), m == null && (m = !!(/*values*/
    x[6] && Object.keys(
      /*values*/
      x[6]
    ).length > 0)), m ? 0 : 1;
  }
  return h = F(e, -1), g = S[h] = T[h](e), v = new zc({
    props: {
      width: "w-full",
      subqueries: (
        /*subqueries*/
        e[7]
      )
    }
  }), {
    c() {
      t = k("div"), n = k("div"), l = k("div"), X(i.$$.fragment), o = H(), D && D.c(), a = H(), s = k("div"), O && O.c(), f = H(), u = k("div"), c = k("div"), c.innerHTML = '<h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Query Result</h3>', d = H(), g.c(), w = H(), X(v.$$.fragment), b(l, "class", "flex-auto"), b(n, "class", "w-1/2 shrink-0 flex flex-col h-full"), b(c, "class", "flex items-center justify-between mb-2"), b(u, "class", p = "px-2 mb-4 border-0 rounded-none " + /*width*/
      e[8] + " transition-colors duration-200 w-full"), J(u, "opacity-50", !/*values*/
      e[6] || Object.keys(
        /*values*/
        e[6]
      ).length == 0), b(s, "class", "flex-auto p-4 border-l border-slate-400 dark:border-slate-600 h-full overflow-auto"), b(t, "class", M = "flex " + /*width*/
      e[8] + " h-full");
    },
    m(x, E) {
      A(x, t, E), _(t, n), _(n, l), K(i, l, null), _(n, o), D && D.m(n, null), _(t, a), _(t, s), O && O.m(s, null), _(s, f), _(s, u), _(u, c), _(u, d), S[h].m(u, null), _(s, w), K(v, s, null), N = !0;
    },
    p(x, [E]) {
      const U = {};
      E & /*dataFields*/
      4 && (U.dataFields = /*dataFields*/
      x[2]), E & /*onRun*/
      8 && (U.onRun = /*onRun*/
      x[3]), E & /*onExplain*/
      16 && (U.onExplain = /*onExplain*/
      x[4]), E & /*onQueryHistoryClick*/
      524288 && (U.onHistoryClick = /*onQueryHistoryClick*/
      x[19]), !r && E & /*textInput*/
      1 && (r = !0, U.value = /*textInput*/
      x[0], xi(() => r = !1)), i.$set(U), /*llmAvailable*/
      x[13] ? D ? (D.p(x, E), E & /*llmAvailable*/
      8192 && C(D, 1)) : (D = yo(x), D.c(), C(D, 1), D.m(n, null)) : D && (ne(), z(D, 1, 1, () => {
        D = null;
      }), le()), /*queryError*/
      x[5] ? O ? O.p(x, E) : (O = po(x), O.c(), O.m(s, f)) : O && (O.d(1), O = null);
      let j = h;
      h = F(x, E), h === j ? S[h].p(x, E) : (ne(), z(S[j], 1, 1, () => {
        S[j] = null;
      }), le(), g = S[h], g ? g.p(x, E) : (g = S[h] = T[h](x), g.c()), C(g, 1), g.m(u, null)), (!N || E & /*width*/
      256 && p !== (p = "px-2 mb-4 border-0 rounded-none " + /*width*/
      x[8] + " transition-colors duration-200 w-full")) && b(u, "class", p), (!N || E & /*width, values, Object*/
      320) && J(u, "opacity-50", !/*values*/
      x[6] || Object.keys(
        /*values*/
        x[6]
      ).length == 0);
      const V = {};
      E & /*subqueries*/
      128 && (V.subqueries = /*subqueries*/
      x[7]), v.$set(V), (!N || E & /*width*/
      256 && M !== (M = "flex " + /*width*/
      x[8] + " h-full")) && b(t, "class", M);
    },
    i(x) {
      N || (C(i.$$.fragment, x), C(D), C(g), C(v.$$.fragment, x), N = !0);
    },
    o(x) {
      z(i.$$.fragment, x), z(D), z(g), z(v.$$.fragment, x), N = !1;
    },
    d(x) {
      x && R(t), Y(i), D && D.d(), O && O.d(), S[h].d(), Y(v);
    }
  };
}
function Ic(e, t, n) {
  let { textInput: l = "" } = t, { onTextInput: i = () => {
  } } = t, { dataFields: r = [] } = t, { onRun: o = () => {
  } } = t, { onExplain: a = () => {
  } } = t, { queryError: s = "" } = t, { values: f = {} } = t, { subqueries: u = {} } = t, { width: c = "w-full" } = t, { onLLMSubmit: d = () => {
  } } = t, { llmResponse: m = "" } = t, { llmLoading: h = !1 } = t, { llmError: g = "" } = t, { llmAvailable: p = !1 } = t, { apiStatus: w = "" } = t, { extractedQuery: v = "" } = t, { llmExplanation: M = "" } = t, { hasExtractedQuery: N = !1 } = t, { onQueryExtracted: q = () => {
  } } = t, { onHistoryClick: L = () => {
  } } = t, { onQueryHistoryClick: D = () => {
  } } = t, { aiAssistantRef: O = void 0 } = t, { aiInputValueOverride: T = "" } = t, { historicalResponse: S = "" } = t;
  function F(E) {
    l = E, n(0, l);
  }
  function x(E) {
    Me[E ? "unshift" : "push"](() => {
      O = E, n(1, O);
    });
  }
  return e.$$set = (E) => {
    "textInput" in E && n(0, l = E.textInput), "onTextInput" in E && n(22, i = E.onTextInput), "dataFields" in E && n(2, r = E.dataFields), "onRun" in E && n(3, o = E.onRun), "onExplain" in E && n(4, a = E.onExplain), "queryError" in E && n(5, s = E.queryError), "values" in E && n(6, f = E.values), "subqueries" in E && n(7, u = E.subqueries), "width" in E && n(8, c = E.width), "onLLMSubmit" in E && n(9, d = E.onLLMSubmit), "llmResponse" in E && n(10, m = E.llmResponse), "llmLoading" in E && n(11, h = E.llmLoading), "llmError" in E && n(12, g = E.llmError), "llmAvailable" in E && n(13, p = E.llmAvailable), "apiStatus" in E && n(14, w = E.apiStatus), "extractedQuery" in E && n(15, v = E.extractedQuery), "llmExplanation" in E && n(23, M = E.llmExplanation), "hasExtractedQuery" in E && n(16, N = E.hasExtractedQuery), "onQueryExtracted" in E && n(17, q = E.onQueryExtracted), "onHistoryClick" in E && n(18, L = E.onHistoryClick), "onQueryHistoryClick" in E && n(19, D = E.onQueryHistoryClick), "aiAssistantRef" in E && n(1, O = E.aiAssistantRef), "aiInputValueOverride" in E && n(20, T = E.aiInputValueOverride), "historicalResponse" in E && n(21, S = E.historicalResponse);
  }, [
    l,
    O,
    r,
    o,
    a,
    s,
    f,
    u,
    c,
    d,
    m,
    h,
    g,
    p,
    w,
    v,
    N,
    q,
    L,
    D,
    T,
    S,
    i,
    M,
    F,
    x
  ];
}
class Qc extends de {
  constructor(t) {
    super(), ce(this, t, Ic, jc, fe, {
      textInput: 0,
      onTextInput: 22,
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
      llmExplanation: 23,
      hasExtractedQuery: 16,
      onQueryExtracted: 17,
      onHistoryClick: 18,
      onQueryHistoryClick: 19,
      aiAssistantRef: 1,
      aiInputValueOverride: 20,
      historicalResponse: 21
    });
  }
}
function ko(e) {
  let t, n, l, i, r, o = (
    /*message*/
    (e[1] || "Loading...") + ""
  ), a, s, f;
  return {
    c() {
      t = k("div"), n = k("div"), l = k("div"), i = k("div"), r = k("p"), a = B(o), s = H(), f = k("div"), f.innerHTML = '<div class="bg-blue-600 h-2 rounded-full animate-pulse" style="width: 100%"></div>', b(r, "class", "text-sm font-medium text-slate-900 dark:text-slate-100"), b(i, "class", "flex-1"), b(f, "class", "w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2"), b(l, "class", "space-y-3"), b(n, "class", "bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 w-1/2 p-6"), b(t, "class", "absolute top-0 left-0 right-0 top-0 bottom-0 bg-white/80 dark:bg-slate-900/80 flex items-center justify-center z-80");
    },
    m(u, c) {
      A(u, t, c), _(t, n), _(n, l), _(l, i), _(i, r), _(r, a), _(l, s), _(l, f);
    },
    p(u, c) {
      c & /*message*/
      2 && o !== (o = /*message*/
      (u[1] || "Loading...") + "") && Z(a, o);
    },
    d(u) {
      u && R(t);
    }
  };
}
function Bc(e) {
  let t, n = (
    /*isLoading*/
    e[0] && ko(e)
  );
  return {
    c() {
      n && n.c(), t = ue();
    },
    m(l, i) {
      n && n.m(l, i), A(l, t, i);
    },
    p(l, [i]) {
      /*isLoading*/
      l[0] ? n ? n.p(l, i) : (n = ko(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: G,
    o: G,
    d(l) {
      n && n.d(l), l && R(t);
    }
  };
}
function Gc(e, t, n) {
  let { isLoading: l = !1 } = t, { message: i = "" } = t, { width: r = "w-full" } = t;
  return e.$$set = (o) => {
    "isLoading" in o && n(0, l = o.isLoading), "message" in o && n(1, i = o.message), "width" in o && n(2, r = o.width);
  }, [l, i, r];
}
class Vc extends de {
  constructor(t) {
    super(), ce(this, t, Gc, Bc, fe, { isLoading: 0, message: 1, width: 2 });
  }
}
function wo(e, t, n) {
  const l = e.slice();
  return l[7] = t[n], l[9] = n, l;
}
function vo(e) {
  let t, n, l, i, r, o, a, s, f, u, c, d, m, h, g = (
    /*history*/
    e[1].length + ""
  ), p, w, v, M;
  function N(D, O) {
    return (
      /*history*/
      D[1].length === 0 ? Kc : Wc
    );
  }
  let q = N(e), L = q(e);
  return {
    c() {
      t = k("div"), n = H(), l = k("div"), i = k("div"), r = k("div"), o = k("h3"), o.textContent = "Query History", a = H(), s = k("button"), s.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>', f = H(), u = k("div"), L.c(), c = H(), d = k("div"), m = k("div"), h = B("Showing "), p = B(g), w = B(" of 10 recent queries"), b(t, "class", "absolute top-0 left-0 w-full h-full bg-white/80 z-40"), b(o, "class", "text-sm font-medium text-gray-900 dark:text-gray-100"), b(s, "class", "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-1 rounded"), b(s, "title", "Close history"), b(r, "class", "flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700"), b(u, "class", "max-h-80 overflow-y-auto svelte-6p3axr"), b(m, "class", "text-xs text-gray-500 dark:text-gray-400 text-center"), b(d, "class", "p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700"), b(i, "class", "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg w-2/3 h-2/3 overflow-auto pointer-events-auto"), b(l, "class", "absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 pointer-events-none");
    },
    m(D, O) {
      A(D, t, O), A(D, n, O), A(D, l, O), _(l, i), _(i, r), _(r, o), _(r, a), _(r, s), _(i, f), _(i, u), L.m(u, null), _(i, c), _(i, d), _(d, m), _(m, h), _(m, p), _(m, w), v || (M = [
        re(t, "click", oa(
          /*handleClickOutside*/
          e[4]
        )),
        re(s, "click", function() {
          lt(
            /*onClose*/
            e[2]
          ) && e[2].apply(this, arguments);
        })
      ], v = !0);
    },
    p(D, O) {
      e = D, q === (q = N(e)) && L ? L.p(e, O) : (L.d(1), L = q(e), L && (L.c(), L.m(u, null))), O & /*history*/
      2 && g !== (g = /*history*/
      e[1].length + "") && Z(p, g);
    },
    d(D) {
      D && R(t), D && R(n), D && R(l), L.d(), v = !1, Re(M);
    }
  };
}
function Wc(e) {
  let t, n = (
    /*history*/
    e[1]
  ), l = [];
  for (let i = 0; i < n.length; i += 1)
    l[i] = So(wo(e, n, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      t = ue();
    },
    m(i, r) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(i, r);
      A(i, t, r);
    },
    p(i, r) {
      if (r & /*onSelect, history, formatTimestamp*/
      10) {
        n = /*history*/
        i[1];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = wo(i, n, o);
          l[o] ? l[o].p(a, r) : (l[o] = So(a), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(i) {
      Ge(l, i), i && R(t);
    }
  };
}
function Kc(e) {
  let t;
  return {
    c() {
      t = k("div"), t.textContent = "No query history yet", b(t, "class", "p-4 text-center text-gray-500 dark:text-gray-400 text-sm");
    },
    m(n, l) {
      A(n, t, l);
    },
    p: G,
    d(n) {
      n && R(t);
    }
  };
}
function So(e) {
  let t, n, l, i = (
    /*historyItem*/
    (e[7].query || "No query extracted") + ""
  ), r, o, a, s = Co(
    /*historyItem*/
    e[7].timestamp
  ) + "", f, u, c, d = (
    /*historyItem*/
    (e[7].answer || "No response available") + ""
  ), m, h, g, p;
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
      t = k("div"), n = k("div"), l = k("h4"), r = B(i), o = H(), a = k("span"), f = B(s), u = H(), c = k("p"), m = B(d), h = H(), b(l, "class", "text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-2 flex-1 svelte-6p3axr"), b(a, "class", "text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0"), b(n, "class", "flex items-start justify-between mb-2"), b(c, "class", "text-xs text-gray-600 dark:text-gray-300 line-clamp-3 svelte-6p3axr"), b(t, "class", "p-3 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors");
    },
    m(v, M) {
      A(v, t, M), _(t, n), _(n, l), _(l, r), _(n, o), _(n, a), _(a, f), _(t, u), _(t, c), _(c, m), _(t, h), g || (p = re(t, "click", w), g = !0);
    },
    p(v, M) {
      e = v, M & /*history*/
      2 && i !== (i = /*historyItem*/
      (e[7].query || "No query extracted") + "") && Z(r, i), M & /*history*/
      2 && s !== (s = Co(
        /*historyItem*/
        e[7].timestamp
      ) + "") && Z(f, s), M & /*history*/
      2 && d !== (d = /*historyItem*/
      (e[7].answer || "No response available") + "") && Z(m, d);
    },
    d(v) {
      v && R(t), g = !1, p();
    }
  };
}
function Yc(e) {
  let t, n = (
    /*isVisible*/
    e[0] && vo(e)
  );
  return {
    c() {
      n && n.c(), t = ue();
    },
    m(l, i) {
      n && n.m(l, i), A(l, t, i);
    },
    p(l, [i]) {
      /*isVisible*/
      l[0] ? n ? n.p(l, i) : (n = vo(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: G,
    o: G,
    d(l) {
      n && n.d(l), l && R(t);
    }
  };
}
function Co(e) {
  const n = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), l = Math.floor(n / 6e4), i = Math.floor(n / 36e5), r = Math.floor(n / 864e5);
  return l < 1 ? "Just now" : l < 60 ? `${l}m ago` : i < 24 ? `${i}h ago` : `${r}d ago`;
}
function Xc(e, t, n) {
  let { isVisible: l = !1 } = t, { history: i = [] } = t, { onClose: r = () => {
  } } = t, { onSelect: o = () => {
  } } = t, { position: a = { top: 0, left: 0 } } = t;
  function s(u) {
    u.target, r && r();
  }
  const f = (u) => o(u);
  return e.$$set = (u) => {
    "isVisible" in u && n(0, l = u.isVisible), "history" in u && n(1, i = u.history), "onClose" in u && n(2, r = u.onClose), "onSelect" in u && n(3, o = u.onSelect), "position" in u && n(5, a = u.position);
  }, [
    l,
    i,
    r,
    o,
    s,
    a,
    f
  ];
}
class xo extends de {
  constructor(t) {
    super(), ce(this, t, Xc, Yc, fe, {
      isVisible: 0,
      history: 1,
      onClose: 2,
      onSelect: 3,
      position: 5
    });
  }
}
function Uc(e) {
  let t, n, l;
  function i(o) {
    e[62](o);
  }
  let r = {
    dataFields: (
      /*dataFields*/
      e[10]
    ),
    onRun: (
      /*handleRun*/
      e[48]
    ),
    onExplain: (
      /*handleExplain*/
      e[49]
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
    onLLMSubmit: (
      /*handleLLMQuestionSubmit*/
      e[46]
    ),
    llmResponse: (
      /*$llmResponse*/
      e[1]
    ),
    llmLoading: (
      /*$llmLoading*/
      e[3]
    ),
    llmError: (
      /*$llmError*/
      e[19]
    ),
    llmAvailable: (
      /*$llmAvailable*/
      e[20]
    ),
    apiStatus: (
      /*$apiStatus*/
      e[21]
    ),
    extractedQuery: (
      /*$extractedQuery*/
      e[2]
    ),
    llmExplanation: (
      /*$llmExplanation*/
      e[22]
    ),
    hasExtractedQuery: (
      /*$hasExtractedQuery*/
      e[23]
    ),
    onQueryExtracted: (
      /*handleQueryExtraction*/
      e[41]
    ),
    onHistoryClick: (
      /*handleHistoryClick*/
      e[50]
    ),
    onQueryHistoryClick: (
      /*handleQueryHistoryClick*/
      e[51]
    ),
    aiAssistantRef: (
      /*aiAssistantSection*/
      e[45]
    ),
    aiInputValueOverride: (
      /*aiInputValueOverride*/
      e[9]
    ),
    historicalResponse: (
      /*historicalResponse*/
      e[0]
    ),
    width: "w-full"
  };
  return (
    /*$textInput*/
    e[11] !== void 0 && (r.textInput = /*$textInput*/
    e[11]), t = new Qc({ props: r }), Me.push(() => Mi(t, "textInput", i)), {
      c() {
        X(t.$$.fragment);
      },
      m(o, a) {
        K(t, o, a), l = !0;
      },
      p(o, a) {
        const s = {};
        a[0] & /*dataFields*/
        1024 && (s.dataFields = /*dataFields*/
        o[10]), a[0] & /*$queryError*/
        65536 && (s.queryError = /*$queryError*/
        o[16]), a[0] & /*$values*/
        131072 && (s.values = /*$values*/
        o[17]), a[0] & /*$subqueries*/
        262144 && (s.subqueries = /*$subqueries*/
        o[18]), a[0] & /*$llmResponse*/
        2 && (s.llmResponse = /*$llmResponse*/
        o[1]), a[0] & /*$llmLoading*/
        8 && (s.llmLoading = /*$llmLoading*/
        o[3]), a[0] & /*$llmError*/
        524288 && (s.llmError = /*$llmError*/
        o[19]), a[0] & /*$llmAvailable*/
        1048576 && (s.llmAvailable = /*$llmAvailable*/
        o[20]), a[0] & /*$apiStatus*/
        2097152 && (s.apiStatus = /*$apiStatus*/
        o[21]), a[0] & /*$extractedQuery*/
        4 && (s.extractedQuery = /*$extractedQuery*/
        o[2]), a[0] & /*$llmExplanation*/
        4194304 && (s.llmExplanation = /*$llmExplanation*/
        o[22]), a[0] & /*$hasExtractedQuery*/
        8388608 && (s.hasExtractedQuery = /*$hasExtractedQuery*/
        o[23]), a[0] & /*aiInputValueOverride*/
        512 && (s.aiInputValueOverride = /*aiInputValueOverride*/
        o[9]), a[0] & /*historicalResponse*/
        1 && (s.historicalResponse = /*historicalResponse*/
        o[0]), !n && a[0] & /*$textInput*/
        2048 && (n = !0, s.textInput = /*$textInput*/
        o[11], xi(() => n = !1)), t.$set(s);
      },
      i(o) {
        l || (C(t.$$.fragment, o), l = !0);
      },
      o(o) {
        z(t.$$.fragment, o), l = !1;
      },
      d(o) {
        Y(t, o);
      }
    }
  );
}
function Zc(e) {
  let t, n, l;
  function i(o) {
    e[61](o);
  }
  let r = {
    width: "w-full",
    scopes: (
      /*$scopes*/
      e[12]
    ),
    scopeConcepts: (
      /*$scopeConcepts*/
      e[13]
    ),
    isLoading: (
      /*$isLoading*/
      e[14]
    ),
    loadingMessage: (
      /*$loadingMessage*/
      e[15]
    ),
    onScopeSelect: (
      /*func*/
      e[59]
    ),
    onAnalyzeScope: (
      /*func_1*/
      e[60]
    )
  };
  return (
    /*selectedScope*/
    e[4] !== void 0 && (r.selectedScope = /*selectedScope*/
    e[4]), t = new lf({ props: r }), Me.push(() => Mi(t, "selectedScope", i)), {
      c() {
        X(t.$$.fragment);
      },
      m(o, a) {
        K(t, o, a), l = !0;
      },
      p(o, a) {
        const s = {};
        a[0] & /*$scopes*/
        4096 && (s.scopes = /*$scopes*/
        o[12]), a[0] & /*$scopeConcepts*/
        8192 && (s.scopeConcepts = /*$scopeConcepts*/
        o[13]), a[0] & /*$isLoading*/
        16384 && (s.isLoading = /*$isLoading*/
        o[14]), a[0] & /*$loadingMessage*/
        32768 && (s.loadingMessage = /*$loadingMessage*/
        o[15]), !n && a[0] & /*selectedScope*/
        16 && (n = !0, s.selectedScope = /*selectedScope*/
        o[4], xi(() => n = !1)), t.$set(s);
      },
      i(o) {
        l || (C(t.$$.fragment, o), l = !0);
      },
      o(o) {
        z(t.$$.fragment, o), l = !1;
      },
      d(o) {
        Y(t, o);
      }
    }
  );
}
function Jc(e) {
  let t, n, l, i, r, o, a, s, f, u, c, d, m;
  n = new Ka({
    props: {
      activeTab: (
        /*activeTab*/
        e[5]
      ),
      onTabChange: (
        /*handleTabChange*/
        e[47]
      )
    }
  });
  const h = [Zc, Uc], g = [];
  function p(w, v) {
    return (
      /*activeTab*/
      w[5] === "data-elements" ? 0 : (
        /*activeTab*/
        w[5] === "query-inspector" ? 1 : -1
      )
    );
  }
  return ~(r = p(e)) && (o = g[r] = h[r](e)), s = new xo({
    props: {
      isVisible: (
        /*showHistoryDropdown*/
        e[7]
      ),
      history: (
        /*aiHistory*/
        e[6]
      ),
      onClose: (
        /*handleHistoryClose*/
        e[54]
      ),
      onSelect: (
        /*handleHistorySelect*/
        e[52]
      ),
      position: (
        /*historyDropdownPosition*/
        e[43]
      )
    }
  }), u = new xo({
    props: {
      isVisible: (
        /*showQueryHistoryDropdown*/
        e[8]
      ),
      history: (
        /*aiHistory*/
        e[6]
      ),
      onClose: (
        /*handleQueryHistoryClose*/
        e[55]
      ),
      onSelect: (
        /*handleQueryHistorySelect*/
        e[53]
      ),
      position: (
        /*queryHistoryDropdownPosition*/
        e[44]
      )
    }
  }), d = new Vc({
    props: {
      isLoading: (
        /*$isLoading*/
        e[14]
      ),
      message: (
        /*$loadingMessage*/
        e[15]
      )
    }
  }), {
    c() {
      t = k("main"), X(n.$$.fragment), l = H(), i = k("div"), o && o.c(), a = H(), X(s.$$.fragment), f = H(), X(u.$$.fragment), c = H(), X(d.$$.fragment), b(i, "class", "flex-auto w-full min-h-0 z-0 svelte-1pq5c6y"), b(t, "class", "w-full bg-white dark:bg-slate-950 transition-colors duration-200 relative overflow-hidden flex flex-col svelte-1pq5c6y"), W(t, "height", "600px");
    },
    m(w, v) {
      A(w, t, v), K(n, t, null), _(t, l), _(t, i), ~r && g[r].m(i, null), _(t, a), K(s, t, null), _(t, f), K(u, t, null), _(t, c), K(d, t, null), m = !0;
    },
    p(w, v) {
      const M = {};
      v[0] & /*activeTab*/
      32 && (M.activeTab = /*activeTab*/
      w[5]), n.$set(M);
      let N = r;
      r = p(w), r === N ? ~r && g[r].p(w, v) : (o && (ne(), z(g[N], 1, 1, () => {
        g[N] = null;
      }), le()), ~r ? (o = g[r], o ? o.p(w, v) : (o = g[r] = h[r](w), o.c()), C(o, 1), o.m(i, null)) : o = null);
      const q = {};
      v[0] & /*showHistoryDropdown*/
      128 && (q.isVisible = /*showHistoryDropdown*/
      w[7]), v[0] & /*aiHistory*/
      64 && (q.history = /*aiHistory*/
      w[6]), s.$set(q);
      const L = {};
      v[0] & /*showQueryHistoryDropdown*/
      256 && (L.isVisible = /*showQueryHistoryDropdown*/
      w[8]), v[0] & /*aiHistory*/
      64 && (L.history = /*aiHistory*/
      w[6]), u.$set(L);
      const D = {};
      v[0] & /*$isLoading*/
      16384 && (D.isLoading = /*$isLoading*/
      w[14]), v[0] & /*$loadingMessage*/
      32768 && (D.message = /*$loadingMessage*/
      w[15]), d.$set(D);
    },
    i(w) {
      m || (C(n.$$.fragment, w), C(o), C(s.$$.fragment, w), C(u.$$.fragment, w), C(d.$$.fragment, w), m = !0);
    },
    o(w) {
      z(n.$$.fragment, w), z(o), z(s.$$.fragment, w), z(u.$$.fragment, w), z(d.$$.fragment, w), m = !1;
    },
    d(w) {
      w && R(t), Y(n), ~r && g[r].d(), Y(s), Y(u), Y(d);
    }
  };
}
function $c(e, t, n) {
  let l, i, r, o, a, s, f, u, c, d, m, h, g, p, w, v, M, N, { model: q } = t;
  const L = pa(q), { values: D, listNames: O, runQuery: T, handleLLMQuestion: S, subqueries: F, queryError: x, scopes: E, scopeConcepts: U, handleScopeAnalysis: j, llmResponse: V, llmLoading: ee, llmError: $, llmAvailable: ae, llmExplanation: I, apiStatus: oe, isLoading: he, loadingMessage: ve, extractedQuery: Se, hasExtractedQuery: ze, handleQueryExtraction: pe, textInput: Ce } = L;
  P(e, D, (Q) => n(17, h = Q)), P(e, O, (Q) => n(58, s = Q)), P(e, F, (Q) => n(18, g = Q)), P(e, x, (Q) => n(16, m = Q)), P(e, E, (Q) => n(12, f = Q)), P(e, U, (Q) => n(13, u = Q)), P(e, V, (Q) => n(1, r = Q)), P(e, ee, (Q) => n(3, a = Q)), P(e, $, (Q) => n(19, p = Q)), P(e, ae, (Q) => n(20, w = Q)), P(e, I, (Q) => n(22, M = Q)), P(e, oe, (Q) => n(21, v = Q)), P(e, he, (Q) => n(14, c = Q)), P(e, ve, (Q) => n(15, d = Q)), P(e, Se, (Q) => n(2, o = Q)), P(e, ze, (Q) => n(23, N = Q)), P(e, Ce, (Q) => n(11, i = Q));
  let Le = "", Ae = "query-inspector", Ee = [
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
  ], Te = !1, Ye = !1, Xe = "", Sn = { top: 0, left: 0 }, Cn = { top: 0, left: 0 }, xn, Ue = "", Ze = "";
  function Mn(Q) {
    n(57, Xe = Q), n(0, Ze = ""), S(Q);
  }
  function Rn(Q) {
    n(5, Ae = Q);
  }
  function zn() {
    console.log("text input", i), i.trim() && T(i);
  }
  function An() {
    i.trim() && (console.log("🔍 Explain button clicked for query:", i), S(i, "explain"));
  }
  function Ln(Q, ft, Qt = null) {
    const ut = {
      question: Q,
      answer: ft,
      query: Qt,
      timestamp: /* @__PURE__ */ new Date()
    };
    n(6, Ee = [ut, ...Ee]), Ee.length > 10 && n(6, Ee = Ee.slice(0, 10)), console.log("📚 Added to history:", ut);
  }
  function En() {
    console.log("📚 History button clicked"), n(7, Te = !Te);
  }
  function Dn() {
    console.log("📚 Query History button clicked"), n(8, Ye = !Ye);
  }
  function Nn(Q) {
    console.log("📚 AI History item selected:", Q), n(7, Te = !1), Q.query && (ie(Ce, i = Q.query, i), q.set("text_input", Q.query), q.save_changes()), Q.question && (n(9, Ue = Q.question), setTimeout(
      () => {
        n(9, Ue = "");
      },
      100
    )), Q.answer && n(0, Ze = Q.answer);
  }
  function Tn(Q) {
    console.log("📚 Query History item selected:", Q), n(8, Ye = !1), Q.query && (ie(Ce, i = Q.query, i), q.set("text_input", Q.query), q.save_changes()), Q.question && (n(9, Ue = Q.question), setTimeout(
      () => {
        n(9, Ue = "");
      },
      100
    )), Q.answer && n(0, Ze = Q.answer);
  }
  function qn() {
    n(7, Te = !1);
  }
  function $l() {
    n(8, Ye = !1);
  }
  const On = (Q) => {
    j(Q, !1);
  }, ei = (Q) => {
    j(Q, !0);
  };
  function It(Q) {
    Le = Q, n(4, Le);
  }
  function Hn(Q) {
    i = Q, Ce.set(i);
  }
  return e.$$set = (Q) => {
    "model" in Q && n(56, q = Q.model);
  }, e.$$.update = () => {
    e.$$.dirty[1] & /*$listNames*/
    134217728 && n(10, l = s || []), e.$$.dirty[0] & /*$llmResponse, $llmLoading, historicalResponse, $extractedQuery*/
    15 | e.$$.dirty[1] & /*currentQuestion*/
    67108864 && r && r.trim() && !a && Xe && !Ze && (Ln(Xe, r, o || null), n(57, Xe = ""));
  }, [
    Ze,
    r,
    o,
    a,
    Le,
    Ae,
    Ee,
    Te,
    Ye,
    Ue,
    l,
    i,
    f,
    u,
    c,
    d,
    m,
    h,
    g,
    p,
    w,
    v,
    M,
    N,
    D,
    O,
    F,
    x,
    E,
    U,
    j,
    V,
    ee,
    $,
    ae,
    I,
    oe,
    he,
    ve,
    Se,
    ze,
    pe,
    Ce,
    Sn,
    Cn,
    xn,
    Mn,
    Rn,
    zn,
    An,
    En,
    Dn,
    Nn,
    Tn,
    qn,
    $l,
    q,
    Xe,
    s,
    On,
    ei,
    It,
    Hn
  ];
}
class e0 extends de {
  constructor(t) {
    super(), ce(this, t, $c, Jc, fe, { model: 56 }, null, [-1, -1, -1]);
  }
}
function t0(e) {
  new e0({
    target: e.el,
    props: {
      model: e.model
    }
  });
}
export {
  t0 as render
};
