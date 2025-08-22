function U() {
}
function va(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function Io(e) {
  return e();
}
function qi() {
  return /* @__PURE__ */ Object.create(null);
}
function ye(e) {
  e.forEach(Io);
}
function ot(e) {
  return typeof e == "function";
}
function ue(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Sa(e) {
  return Object.keys(e).length === 0;
}
function Fo(e, ...t) {
  if (e == null)
    return U;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Q(e, t, n) {
  e.$$.on_destroy.push(Fo(t, n));
}
function Te(e, t, n, l) {
  if (e) {
    const i = Qo(e, t, n, l);
    return e[0](i);
  }
}
function Qo(e, t, n, l) {
  return e[1] && l ? va(n.ctx.slice(), e[1](l(t))) : n.ctx;
}
function qe(e, t, n, l) {
  if (e[2] && l) {
    const i = e[2](l(n));
    if (t.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const r = [], o = Math.max(t.dirty.length, i.length);
      for (let s = 0; s < o; s += 1)
        r[s] = t.dirty[s] | i[s];
      return r;
    }
    return t.dirty | i;
  }
  return t.dirty;
}
function Oe(e, t, n, l, i, r) {
  if (i) {
    const o = Qo(t, n, l, r);
    e.p(o, i);
  }
}
function He(e) {
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
function re(e, t, n) {
  return e.set(n), t;
}
function g(e, t) {
  e.appendChild(t);
}
function R(e, t, n) {
  e.insertBefore(t, n || null);
}
function M(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function xe(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function y(e) {
  return document.createElement(e);
}
function ge(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function V(e) {
  return document.createTextNode(e);
}
function P() {
  return V(" ");
}
function fe() {
  return V("");
}
function te(e, t, n, l) {
  return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
}
function Ca(e) {
  return function(t) {
    return t.stopPropagation(), e.call(this, t);
  };
}
function b(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Ma(e) {
  return Array.from(e.childNodes);
}
function ee(e, t) {
  t = "" + t, e.data !== t && (e.data = t);
}
function jt(e, t) {
  e.value = t ?? "";
}
function $(e, t, n, l) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, l ? "important" : "");
}
let zl;
function za() {
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
function Ra(e, t) {
  getComputedStyle(e).position === "static" && (e.style.position = "relative");
  const l = y("iframe");
  l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), l.setAttribute("aria-hidden", "true"), l.tabIndex = -1;
  const i = za();
  let r;
  return i ? (l.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", r = te(window, "message", (o) => {
    o.source === l.contentWindow && t();
  })) : (l.src = "about:blank", l.onload = () => {
    r = te(l.contentWindow, "resize", t), t();
  }), g(e, l), () => {
    (i || r && l.contentWindow) && r(), M(l);
  };
}
function ie(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
function La(e, t, { bubbles: n = !1, cancelable: l = !1 } = {}) {
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
    this.e || (this.is_svg ? this.e = ge(n.nodeName) : this.e = y(n.nodeType === 11 ? "TEMPLATE" : n.nodeName), this.t = n.tagName !== "TEMPLATE" ? n : n.content, this.c(t)), this.i(l);
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
let pn;
function _n(e) {
  pn = e;
}
function vn() {
  if (!pn)
    throw new Error("Function called outside component initialization");
  return pn;
}
function mt(e) {
  vn().$$.on_mount.push(e);
}
function Aa(e) {
  vn().$$.on_destroy.push(e);
}
function Bo() {
  const e = vn();
  return (t, n, { cancelable: l = !1 } = {}) => {
    const i = e.$$.callbacks[t];
    if (i) {
      const r = La(t, n, { cancelable: l });
      return i.slice().forEach((o) => {
        o.call(e, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
function xa(e, t) {
  return vn().$$.context.set(e, t), t;
}
function Sn(e) {
  return vn().$$.context.get(e);
}
function Oi(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((l) => l.call(this, t));
}
const Ot = [], Se = [];
let Ht = [];
const pi = [], Na = /* @__PURE__ */ Promise.resolve();
let ki = !1;
function Ea() {
  ki || (ki = !0, Na.then(We));
}
function Pl(e) {
  Ht.push(e);
}
function Mi(e) {
  pi.push(e);
}
const bi = /* @__PURE__ */ new Set();
let Tt = 0;
function We() {
  if (Tt !== 0)
    return;
  const e = pn;
  do {
    try {
      for (; Tt < Ot.length; ) {
        const t = Ot[Tt];
        Tt++, _n(t), Da(t.$$);
      }
    } catch (t) {
      throw Ot.length = 0, Tt = 0, t;
    }
    for (_n(null), Ot.length = 0, Tt = 0; Se.length; )
      Se.pop()();
    for (let t = 0; t < Ht.length; t += 1) {
      const n = Ht[t];
      bi.has(n) || (bi.add(n), n());
    }
    Ht.length = 0;
  } while (Ot.length);
  for (; pi.length; )
    pi.pop()();
  ki = !1, bi.clear(), _n(e);
}
function Da(e) {
  if (e.fragment !== null) {
    e.update(), ye(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Pl);
  }
}
function Ta(e) {
  const t = [], n = [];
  Ht.forEach((l) => e.indexOf(l) === -1 ? t.push(l) : n.push(l)), n.forEach((l) => l()), Ht = t;
}
const Ol = /* @__PURE__ */ new Set();
let ft;
function ne() {
  ft = {
    r: 0,
    c: [],
    p: ft
    // parent group
  };
}
function le() {
  ft.r || ye(ft.c), ft = ft.p;
}
function S(e, t) {
  e && e.i && (Ol.delete(e), e.i(t));
}
function L(e, t, n, l) {
  if (e && e.o) {
    if (Ol.has(e))
      return;
    Ol.add(e), ft.c.push(() => {
      Ol.delete(e), l && (n && e.d(1), l());
    }), e.o(t);
  } else
    l && l();
}
function zi(e, t, n) {
  const l = e.$$.props[t];
  l !== void 0 && (e.$$.bound[l] = n, n(e.$$.ctx[l]));
}
function Z(e) {
  e && e.c();
}
function Y(e, t, n, l) {
  const { fragment: i, after_update: r } = e.$$;
  i && i.m(t, n), l || Pl(() => {
    const o = e.$$.on_mount.map(Io).filter(ot);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : ye(o), e.$$.on_mount = [];
  }), r.forEach(Pl);
}
function X(e, t) {
  const n = e.$$;
  n.fragment !== null && (Ta(n.after_update), ye(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function qa(e, t) {
  e.$$.dirty[0] === -1 && (Ot.push(e), Ea(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ce(e, t, n, l, i, r, o, s = [-1]) {
  const a = pn;
  _n(e);
  const f = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: U,
    not_equal: i,
    bound: qi(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: qi(),
    dirty: s,
    skip_bound: !1,
    root: t.target || a.$$.root
  };
  o && o(f.root);
  let u = !1;
  if (f.ctx = n ? n(e, t.props || {}, (c, d, ...m) => {
    const h = m.length ? m[0] : d;
    return f.ctx && i(f.ctx[c], f.ctx[c] = h) && (!f.skip_bound && f.bound[c] && f.bound[c](h), u && qa(e, c)), d;
  }) : [], f.update(), u = !0, ye(f.before_update), f.fragment = l ? l(f.ctx) : !1, t.target) {
    if (t.hydrate) {
      const c = Ma(t.target);
      f.fragment && f.fragment.l(c), c.forEach(M);
    } else
      f.fragment && f.fragment.c();
    t.intro && S(e.$$.fragment), Y(e, t.target, t.anchor, t.customElement), We();
  }
  _n(a);
}
class de {
  $destroy() {
    X(this, 1), this.$destroy = U;
  }
  $on(t, n) {
    if (!ot(n))
      return U;
    const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return l.push(n), () => {
      const i = l.indexOf(n);
      i !== -1 && l.splice(i, 1);
    };
  }
  $set(t) {
    this.$$set && !Sa(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const qt = [];
function Oa(e, t) {
  return {
    subscribe: oe(e, t).subscribe
  };
}
function oe(e, t = U) {
  let n;
  const l = /* @__PURE__ */ new Set();
  function i(s) {
    if (ue(e, s) && (e = s, n)) {
      const a = !qt.length;
      for (const f of l)
        f[1](), qt.push(f, e);
      if (a) {
        for (let f = 0; f < qt.length; f += 2)
          qt[f][0](qt[f + 1]);
        qt.length = 0;
      }
    }
  }
  function r(s) {
    i(s(e));
  }
  function o(s, a = U) {
    const f = [s, a];
    return l.add(f), l.size === 1 && (n = t(i) || U), s(e), () => {
      l.delete(f), l.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: r, subscribe: o };
}
function be(e, t, n) {
  const l = !Array.isArray(e), i = l ? [e] : e, r = t.length < 2;
  return Oa(n, (o) => {
    let s = !1;
    const a = [];
    let f = 0, u = U;
    const c = () => {
      if (f)
        return;
      u();
      const m = t(l ? a[0] : a, o);
      r ? o(m) : u = ot(m) ? m : U;
    }, d = i.map((m, h) => Fo(m, (_) => {
      a[h] = _, f &= ~(1 << h), s && c();
    }, () => {
      f |= 1 << h;
    }));
    return s = !0, c(), function() {
      ye(d), u(), s = !1;
    };
  });
}
function ke(e, t, n) {
  const l = t, i = oe(e.get(l) || n);
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
        let s = r(o);
        return e.set(l, s), e.save_changes(), s;
      });
    }
  };
}
function Ha(e) {
  const t = ke(e, "type", "meds"), n = ke(e, "values", {}), l = ke(e, "list_names", {
    attributes: [],
    events: [],
    intervals: []
  }), i = ke(e, "subqueries", {}), r = ke(e, "query_error", ""), o = ke(e, "text_input", ""), s = ke(e, "scopes", []), a = ke(e, "scope_concepts", {}), f = ke(e, "isLoading", !1), u = ke(e, "loadingMessage", ""), c = ke(e, "llm_available", !1), d = ke(e, "llm_response", ""), m = ke(e, "llm_loading", !1), h = ke(e, "llm_error", ""), _ = ke(e, "api_status", "Checking API connection..."), p = ke(e, "extracted_query", ""), k = ke(e, "llm_explanation", ""), w = ke(e, "has_extracted_query", !1);
  let z = "";
  return {
    // Reactive stores
    type: t,
    values: n,
    listNames: l,
    subqueries: i,
    queryError: r,
    scopes: s,
    scopeConcepts: a,
    isLoading: f,
    loadingMessage: u,
    llmResponse: d,
    llmLoading: m,
    llmError: h,
    llmAvailable: c,
    apiStatus: _,
    extractedQuery: p,
    llmExplanation: k,
    hasExtractedQuery: w,
    textInput: o,
    runQuery: (D) => {
      e.set("text_input", D), e.set("process_trigger", "run"), e.save_changes();
    },
    // LLM question handler
    handleLLMQuestion: (D) => {
      e.set("llm_question", D), e.set("llm_trigger", "ask"), e.save_changes();
    },
    handleLLMExplanation: () => {
      e.set("llm_trigger", "explain"), e.save_changes();
    },
    // Query extraction handler - triggered when AI extracts a query
    handleQueryExtraction: () => {
      let D = "";
      p.subscribe((O) => D = O)(), D && D !== z ? (console.log(
        "🔄 Query extracted from AI response:",
        D
      ), console.log("🔄 Current text input:", z), console.log("🔄 Updating text input with extracted query"), z = D, e.set("text_input", D), e.save_changes()) : D === z && console.log(
        "🔄 Extracted query is same as current input, no update needed"
      );
    },
    // Scope analysis handler
    handleScopeAnalysis: (D, O = !1) => {
      console.log(
        "🔍 Scope Analysis requested for:",
        D,
        O ? "(force refresh)" : ""
      );
      const x = O ? `${D}:force` : D;
      e.set("scope_analysis_trigger", x), e.save_changes();
    }
  };
}
function Pa() {
  const t = (typeof window < "u" ? localStorage.getItem("theme") : "dark") || "dark", { subscribe: n, set: l, update: i } = oe(t);
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
        const s = document.documentElement;
        o === "dark" ? s.classList.add("dark") : s.classList.remove("dark");
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
const Hi = Pa();
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const jl = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [512, 512, [], "f077", "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
}, ja = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, Ia = ja, Fa = {
  prefix: "fas",
  iconName: "code",
  icon: [640, 512, [], "f121", "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]
}, Vo = {
  prefix: "fas",
  iconName: "bolt-lightning",
  icon: [384, 512, [], "e0b7", "M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z"]
}, Go = {
  prefix: "fas",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
}, Qa = {
  prefix: "fas",
  iconName: "sun",
  icon: [512, 512, [9728], "f185", "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]
}, Ba = {
  prefix: "fas",
  iconName: "play",
  icon: [384, 512, [9654], "f04b", "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]
}, Va = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, Ga = Va, Be = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, Wa = {
  prefix: "fas",
  iconName: "copy",
  icon: [448, 512, [], "f0c5", "M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]
}, Wo = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}, Ka = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, dt = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, Ya = {
  prefix: "fas",
  iconName: "moon",
  icon: [384, 512, [127769, 9214], "f186", "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]
}, Xa = {
  prefix: "fas",
  iconName: "check",
  icon: [448, 512, [10003, 10004], "f00c", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, Ua = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, Za = Ua, Ja = {
  prefix: "fas",
  iconName: "database",
  icon: [448, 512, [], "f1c0", "M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z"]
}, $a = {
  prefix: "fas",
  iconName: "circle-xmark",
  icon: [512, 512, [61532, "times-circle", "xmark-circle"], "f057", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]
}, es = $a, Rl = parseFloat;
function yi(e, t = ";") {
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
function ts(e, t, n, l) {
  let i, r;
  const o = "1em";
  let s, a, f, u = "-.125em";
  const c = "visible";
  return l && (f = "center", r = "1.25em"), n && (i = n), t && (t == "lg" ? (a = "1.33333em", s = ".75em", u = "-.225em") : t == "xs" ? a = ".75em" : t == "sm" ? a = ".875em" : a = t.replace("x", "em")), yi([
    yi({
      float: i,
      width: r,
      height: o,
      "line-height": s,
      "font-size": a,
      "text-align": f,
      "vertical-align": u,
      "transform-origin": "center",
      overflow: c
    }),
    e
  ]);
}
function ns(e, t, n, l, i, r = 1, o = "", s = "") {
  let a = 1, f = 1;
  return i && (i == "horizontal" ? a = -1 : i == "vertical" ? f = -1 : a = f = -1), yi(
    [
      `translate(${Rl(t) * r}${o},${Rl(n) * r}${o})`,
      `scale(${a * Rl(e)},${f * Rl(e)})`,
      l && `rotate(${l}${s})`
    ],
    " "
  );
}
function Pi(e) {
  let t, n, l, i, r, o, s, a;
  function f(d, m) {
    return typeof /*i*/
    d[10][4] == "string" ? is : ls;
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
      e[1] || void 0), b(t, "class", s = "svelte-fa " + /*clazz*/
      e[0] + " svelte-1cj2gr0"), b(
        t,
        "style",
        /*s*/
        e[11]
      ), b(t, "viewBox", a = "0 0 " + /*i*/
      e[10][0] + " " + /*i*/
      e[10][1]), b(t, "aria-hidden", "true"), b(t, "role", "img"), b(t, "xmlns", "http://www.w3.org/2000/svg"), ie(
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
    m(d, m) {
      R(d, t, m), g(t, n), g(n, l), c.m(l, null);
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
      1 && s !== (s = "svelte-fa " + /*clazz*/
      d[0] + " svelte-1cj2gr0") && b(t, "class", s), m & /*s*/
      2048 && b(
        t,
        "style",
        /*s*/
        d[11]
      ), m & /*i*/
      1024 && a !== (a = "0 0 " + /*i*/
      d[10][0] + " " + /*i*/
      d[10][1]) && b(t, "viewBox", a), m & /*clazz, pulse*/
      17 && ie(
        t,
        "pulse",
        /*pulse*/
        d[4]
      ), m & /*clazz, spin*/
      9 && ie(
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
function ls(e) {
  let t, n, l, i, r, o, s, a, f, u;
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
      e[10][1] / -2 + ")"), b(o, "d", s = /*i*/
      e[10][4][1]), b(o, "fill", a = /*primaryColor*/
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
      R(c, t, d), R(c, o, d);
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
      1024 && s !== (s = /*i*/
      c[10][4][1]) && b(o, "d", s), d & /*primaryColor, color*/
      36 && a !== (a = /*primaryColor*/
      c[5] || /*color*/
      c[2] || "currentColor") && b(o, "fill", a), d & /*swapOpacity, secondaryOpacity, primaryOpacity*/
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
      c && M(t), c && M(o);
    }
  };
}
function is(e) {
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
      R(r, t, o);
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
      r && M(t);
    }
  };
}
function rs(e) {
  let t, n = (
    /*i*/
    e[10][4] && Pi(e)
  );
  return {
    c() {
      n && n.c(), t = fe();
    },
    m(l, i) {
      n && n.m(l, i), R(l, t, i);
    },
    p(l, [i]) {
      /*i*/
      l[10][4] ? n ? n.p(l, i) : (n = Pi(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: U,
    o: U,
    d(l) {
      n && n.d(l), l && M(t);
    }
  };
}
function os(e, t, n) {
  let { class: l = "" } = t, { id: i = "" } = t, { style: r = "" } = t, { icon: o } = t, { size: s = "" } = t, { color: a = "" } = t, { fw: f = !1 } = t, { pull: u = "" } = t, { scale: c = 1 } = t, { translateX: d = 0 } = t, { translateY: m = 0 } = t, { rotate: h = "" } = t, { flip: _ = !1 } = t, { spin: p = !1 } = t, { pulse: k = !1 } = t, { primaryColor: w = "" } = t, { secondaryColor: z = "" } = t, { primaryOpacity: D = 1 } = t, { secondaryOpacity: O = 0.4 } = t, { swapOpacity: x = !1 } = t, T, E, j;
  return e.$$set = (N) => {
    "class" in N && n(0, l = N.class), "id" in N && n(1, i = N.id), "style" in N && n(13, r = N.style), "icon" in N && n(14, o = N.icon), "size" in N && n(15, s = N.size), "color" in N && n(2, a = N.color), "fw" in N && n(16, f = N.fw), "pull" in N && n(17, u = N.pull), "scale" in N && n(18, c = N.scale), "translateX" in N && n(19, d = N.translateX), "translateY" in N && n(20, m = N.translateY), "rotate" in N && n(21, h = N.rotate), "flip" in N && n(22, _ = N.flip), "spin" in N && n(3, p = N.spin), "pulse" in N && n(4, k = N.pulse), "primaryColor" in N && n(5, w = N.primaryColor), "secondaryColor" in N && n(6, z = N.secondaryColor), "primaryOpacity" in N && n(7, D = N.primaryOpacity), "secondaryOpacity" in N && n(8, O = N.secondaryOpacity), "swapOpacity" in N && n(9, x = N.swapOpacity);
  }, e.$$.update = () => {
    e.$$.dirty & /*icon*/
    16384 && n(10, T = o && o.icon || [0, 0, "", [], ""]), e.$$.dirty & /*style, size, pull, fw*/
    237568 && n(11, E = ts(r, s, u, f)), e.$$.dirty & /*scale, translateX, translateY, rotate, flip*/
    8126464 && n(12, j = ns(c, d, m, h, _, 512));
  }, [
    l,
    i,
    a,
    p,
    k,
    w,
    z,
    D,
    O,
    x,
    T,
    E,
    j,
    r,
    o,
    s,
    f,
    u,
    c,
    d,
    m,
    h,
    _
  ];
}
class _e extends de {
  constructor(t) {
    super(), ce(this, t, os, rs, ue, {
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
function as(e) {
  let t, n;
  return t = new _e({ props: { icon: Ya } }), {
    c() {
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
    },
    p: U,
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function ss(e) {
  let t, n;
  return t = new _e({ props: { icon: Qa } }), {
    c() {
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
    },
    p: U,
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function fs(e) {
  let t, n, l, i, r, o;
  const s = [ss, as], a = [];
  function f(u, c) {
    return (
      /*$theme*/
      u[0] === "dark" ? 0 : 1
    );
  }
  return n = f(e), l = a[n] = s[n](e), {
    c() {
      t = y("button"), l.c(), b(t, "class", "px-3 py-2 rounded-md bg-slate-200 hover:bg-slate-200/50 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors duration-200"), b(t, "title", "Toggle theme");
    },
    m(u, c) {
      R(u, t, c), a[n].m(t, null), i = !0, r || (o = te(
        t,
        "click",
        /*toggleTheme*/
        e[1]
      ), r = !0);
    },
    p(u, [c]) {
      let d = n;
      n = f(u), n === d ? a[n].p(u, c) : (ne(), L(a[d], 1, 1, () => {
        a[d] = null;
      }), le(), l = a[n], l ? l.p(u, c) : (l = a[n] = s[n](u), l.c()), S(l, 1), l.m(t, null));
    },
    i(u) {
      i || (S(l), i = !0);
    },
    o(u) {
      L(l), i = !1;
    },
    d(u) {
      u && M(t), a[n].d(), r = !1, o();
    }
  };
}
function us(e, t, n) {
  let l;
  Q(e, Hi, (r) => n(0, l = r));
  function i() {
    console.log("Theme toggle clicked, current theme:", l), Hi.toggle();
  }
  return e.$$.update = () => {
    if (e.$$.dirty & /*$theme*/
    1 && (console.log("Theme changed to:", l), typeof window < "u")) {
      const r = document.documentElement;
      console.log("HTML classes:", r.className), console.log("Has dark class:", r.classList.contains("dark"));
    }
  }, [l, i];
}
class cs extends de {
  constructor(t) {
    super(), ce(this, t, us, fs, ue, {});
  }
}
function ji(e, t, n) {
  const l = e.slice();
  return l[4] = t[n], l;
}
function Ii(e) {
  let t, n, l, i = (
    /*tab*/
    e[4].label + ""
  ), r, o, s, a, f;
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
      t = y("button"), Z(n.$$.fragment), l = P(), r = V(i), b(t, "class", o = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*activeTab*/
      (e[0] === /*tab*/
      e[4].id ? "bg-slate-600 text-white dark:bg-slate-200 dark:text-slate-800" : "bg-slate-200 hover:bg-slate-200/50 dark:bg-slate-700 dark:hover:bg-slate-600"));
    },
    m(c, d) {
      R(c, t, d), Y(n, t, null), g(t, l), g(t, r), s = !0, a || (f = te(t, "click", u), a = !0);
    },
    p(c, d) {
      e = c, (!s || d & /*activeTab*/
      1 && o !== (o = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*activeTab*/
      (e[0] === /*tab*/
      e[4].id ? "bg-slate-600 text-white dark:bg-slate-200 dark:text-slate-800" : "bg-slate-200 hover:bg-slate-200/50 dark:bg-slate-700 dark:hover:bg-slate-600"))) && b(t, "class", o);
    },
    i(c) {
      s || (S(n.$$.fragment, c), s = !0);
    },
    o(c) {
      L(n.$$.fragment, c), s = !1;
    },
    d(c) {
      c && M(t), X(n), a = !1, f();
    }
  };
}
function ds(e) {
  let t, n, l, i, r, o, s, a = (
    /*tabs*/
    e[2]
  ), f = [];
  for (let c = 0; c < a.length; c += 1)
    f[c] = Ii(ji(e, a, c));
  const u = (c) => L(f[c], 1, 1, () => {
    f[c] = null;
  });
  return o = new cs({}), {
    c() {
      t = y("div"), n = y("nav");
      for (let c = 0; c < f.length; c += 1)
        f[c].c();
      l = P(), i = y("div"), r = P(), Z(o.$$.fragment), b(i, "class", "flex-auto"), b(n, "class", "flex gap-2 px-4 py-2"), b(n, "aria-label", "Tabs"), b(t, "class", "w-full bg-slate-300 dark:bg-slate-800 dark:text-white");
    },
    m(c, d) {
      R(c, t, d), g(t, n);
      for (let m = 0; m < f.length; m += 1)
        f[m] && f[m].m(n, null);
      g(n, l), g(n, i), g(n, r), Y(o, n, null), s = !0;
    },
    p(c, [d]) {
      if (d & /*activeTab, tabs, onTabChange*/
      7) {
        a = /*tabs*/
        c[2];
        let m;
        for (m = 0; m < a.length; m += 1) {
          const h = ji(c, a, m);
          f[m] ? (f[m].p(h, d), S(f[m], 1)) : (f[m] = Ii(h), f[m].c(), S(f[m], 1), f[m].m(n, l));
        }
        for (ne(), m = a.length; m < f.length; m += 1)
          u(m);
        le();
      }
    },
    i(c) {
      if (!s) {
        for (let d = 0; d < a.length; d += 1)
          S(f[d]);
        S(o.$$.fragment, c), s = !0;
      }
    },
    o(c) {
      f = f.filter(Boolean);
      for (let d = 0; d < f.length; d += 1)
        L(f[d]);
      L(o.$$.fragment, c), s = !1;
    },
    d(c) {
      c && M(t), xe(f, c), X(o);
    }
  };
}
function ms(e, t, n) {
  let { activeTab: l = "query-inspector" } = t, { onTabChange: i = () => {
  } } = t;
  const r = [
    {
      id: "query-inspector",
      label: "Query Inspector",
      icon: Fa
    },
    {
      id: "data-elements",
      label: "Data Elements",
      icon: Ja
    }
  ], o = (s) => i(s.id);
  return e.$$set = (s) => {
    "activeTab" in s && n(0, l = s.activeTab), "onTabChange" in s && n(1, i = s.onTabChange);
  }, [l, i, r, o];
}
class bs extends de {
  constructor(t) {
    super(), ce(this, t, ms, ds, ue, { activeTab: 0, onTabChange: 1 });
  }
}
function hs(e) {
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
function It(e) {
  return e = Il(Math.abs(e)), e ? e[1] : NaN;
}
function gs(e, t) {
  return function(n, l) {
    for (var i = n.length, r = [], o = 0, s = e[0], a = 0; i > 0 && s > 0 && (a + s + 1 > l && (s = Math.max(1, l - a)), r.push(n.substring(i -= s, i + s)), !((a += s + 1) > l)); )
      s = e[o = (o + 1) % e.length];
    return r.reverse().join(t);
  };
}
function _s(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var ps = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Fl(e) {
  if (!(t = ps.exec(e)))
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
Fl.prototype = Ri.prototype;
function Ri(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Ri.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function ks(e) {
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
var Ko;
function ys(e, t) {
  var n = Il(e, t);
  if (!n)
    return e + "";
  var l = n[0], i = n[1], r = i - (Ko = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = l.length;
  return r === o ? l : r > o ? l + new Array(r - o + 1).join("0") : r > 0 ? l.slice(0, r) + "." + l.slice(r) : "0." + new Array(1 - r).join("0") + Il(e, Math.max(0, t + r - 1))[0];
}
function Fi(e, t) {
  var n = Il(e, t);
  if (!n)
    return e + "";
  var l = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + l : l.length > i + 1 ? l.slice(0, i + 1) + "." + l.slice(i + 1) : l + new Array(i - l.length + 2).join("0");
}
const Qi = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: hs,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Fi(e * 100, t),
  r: Fi,
  s: ys,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Bi(e) {
  return e;
}
var Vi = Array.prototype.map, Gi = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function ws(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Bi : gs(Vi.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", l = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", r = e.numerals === void 0 ? Bi : _s(Vi.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", a = e.nan === void 0 ? "NaN" : e.nan + "";
  function f(c) {
    c = Fl(c);
    var d = c.fill, m = c.align, h = c.sign, _ = c.symbol, p = c.zero, k = c.width, w = c.comma, z = c.precision, D = c.trim, O = c.type;
    O === "n" ? (w = !0, O = "g") : Qi[O] || (z === void 0 && (z = 12), D = !0, O = "g"), (p || d === "0" && m === "=") && (p = !0, d = "0", m = "=");
    var x = _ === "$" ? n : _ === "#" && /[boxX]/.test(O) ? "0" + O.toLowerCase() : "", T = _ === "$" ? l : /[%p]/.test(O) ? o : "", E = Qi[O], j = /[defgprs%]/.test(O);
    z = z === void 0 ? 6 : /[gprs]/.test(O) ? Math.max(1, Math.min(21, z)) : Math.max(0, Math.min(20, z));
    function N(F) {
      var A = x, W = T, C, H, B;
      if (O === "c")
        W = E(F) + W, F = "";
      else {
        F = +F;
        var I = F < 0 || 1 / F < 0;
        if (F = isNaN(F) ? a : E(Math.abs(F), z), D && (F = ks(F)), I && +F == 0 && h !== "+" && (I = !1), A = (I ? h === "(" ? h : s : h === "-" || h === "(" ? "" : h) + A, W = (O === "s" ? Gi[8 + Ko / 3] : "") + W + (I && h === "(" ? ")" : ""), j) {
          for (C = -1, H = F.length; ++C < H; )
            if (B = F.charCodeAt(C), 48 > B || B > 57) {
              W = (B === 46 ? i + F.slice(C + 1) : F.slice(C)) + W, F = F.slice(0, C);
              break;
            }
        }
      }
      w && !p && (F = t(F, 1 / 0));
      var J = A.length + F.length + W.length, K = J < k ? new Array(k - J + 1).join(d) : "";
      switch (w && p && (F = t(K + F, K.length ? k - W.length : 1 / 0), K = ""), m) {
        case "<":
          F = A + F + W + K;
          break;
        case "=":
          F = A + K + F + W;
          break;
        case "^":
          F = K.slice(0, J = K.length >> 1) + A + F + W + K.slice(J);
          break;
        default:
          F = K + A + F + W;
          break;
      }
      return r(F);
    }
    return N.toString = function() {
      return c + "";
    }, N;
  }
  function u(c, d) {
    var m = f((c = Fl(c), c.type = "f", c)), h = Math.max(-8, Math.min(8, Math.floor(It(d) / 3))) * 3, _ = Math.pow(10, -h), p = Gi[8 + h / 3];
    return function(k) {
      return m(_ * k) + p;
    };
  }
  return {
    format: f,
    formatPrefix: u
  };
}
var Ll, he, Yo;
vs({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function vs(e) {
  return Ll = ws(e), he = Ll.format, Yo = Ll.formatPrefix, Ll;
}
function Xo(e) {
  return Math.max(0, -It(Math.abs(e)));
}
function Ss(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(It(t) / 3))) * 3 - It(Math.abs(e)));
}
function Cs(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, It(t) - It(e)) + 1;
}
function Qt(e) {
  for (var t = e.length / 6 | 0, n = new Array(t), l = 0; l < t; )
    n[l] = "#" + e.slice(l * 6, ++l * 6);
  return n;
}
const Ms = Qt("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), zs = Qt("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function Li(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Uo(e, t) {
  var n = Object.create(e.prototype);
  for (var l in t)
    n[l] = t[l];
  return n;
}
function Cn() {
}
var kn = 0.7, Ql = 1 / kn, Pt = "\\s*([+-]?\\d+)\\s*", yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Qe = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Rs = /^#([0-9a-f]{3,8})$/, Ls = new RegExp(`^rgb\\(${Pt},${Pt},${Pt}\\)$`), As = new RegExp(`^rgb\\(${Qe},${Qe},${Qe}\\)$`), xs = new RegExp(`^rgba\\(${Pt},${Pt},${Pt},${yn}\\)$`), Ns = new RegExp(`^rgba\\(${Qe},${Qe},${Qe},${yn}\\)$`), Es = new RegExp(`^hsl\\(${yn},${Qe},${Qe}\\)$`), Ds = new RegExp(`^hsla\\(${yn},${Qe},${Qe},${yn}\\)$`), Wi = {
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
Li(Cn, wn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ki,
  // Deprecated! Use color.formatHex.
  formatHex: Ki,
  formatHex8: Ts,
  formatHsl: qs,
  formatRgb: Yi,
  toString: Yi
});
function Ki() {
  return this.rgb().formatHex();
}
function Ts() {
  return this.rgb().formatHex8();
}
function qs() {
  return Zo(this).formatHsl();
}
function Yi() {
  return this.rgb().formatRgb();
}
function wn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Rs.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Xi(t) : n === 3 ? new Le(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Al(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Al(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ls.exec(e)) ? new Le(t[1], t[2], t[3], 1) : (t = As.exec(e)) ? new Le(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = xs.exec(e)) ? Al(t[1], t[2], t[3], t[4]) : (t = Ns.exec(e)) ? Al(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Es.exec(e)) ? Ji(t[1], t[2] / 100, t[3] / 100, 1) : (t = Ds.exec(e)) ? Ji(t[1], t[2] / 100, t[3] / 100, t[4]) : Wi.hasOwnProperty(e) ? Xi(Wi[e]) : e === "transparent" ? new Le(NaN, NaN, NaN, 0) : null;
}
function Xi(e) {
  return new Le(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Al(e, t, n, l) {
  return l <= 0 && (e = t = n = NaN), new Le(e, t, n, l);
}
function Os(e) {
  return e instanceof Cn || (e = wn(e)), e ? (e = e.rgb(), new Le(e.r, e.g, e.b, e.opacity)) : new Le();
}
function Bl(e, t, n, l) {
  return arguments.length === 1 ? Os(e) : new Le(e, t, n, l ?? 1);
}
function Le(e, t, n, l) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +l;
}
Li(Le, Bl, Uo(Cn, {
  brighter(e) {
    return e = e == null ? Ql : Math.pow(Ql, e), new Le(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? kn : Math.pow(kn, e), new Le(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Le(ct(this.r), ct(this.g), ct(this.b), Vl(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ui,
  // Deprecated! Use color.formatHex.
  formatHex: Ui,
  formatHex8: Hs,
  formatRgb: Zi,
  toString: Zi
}));
function Ui() {
  return `#${ut(this.r)}${ut(this.g)}${ut(this.b)}`;
}
function Hs() {
  return `#${ut(this.r)}${ut(this.g)}${ut(this.b)}${ut((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Zi() {
  const e = Vl(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${ct(this.r)}, ${ct(this.g)}, ${ct(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Vl(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function ct(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ut(e) {
  return e = ct(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ji(e, t, n, l) {
  return l <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new De(e, t, n, l);
}
function Zo(e) {
  if (e instanceof De)
    return new De(e.h, e.s, e.l, e.opacity);
  if (e instanceof Cn || (e = wn(e)), !e)
    return new De();
  if (e instanceof De)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, l = e.b / 255, i = Math.min(t, n, l), r = Math.max(t, n, l), o = NaN, s = r - i, a = (r + i) / 2;
  return s ? (t === r ? o = (n - l) / s + (n < l) * 6 : n === r ? o = (l - t) / s + 2 : o = (t - n) / s + 4, s /= a < 0.5 ? r + i : 2 - r - i, o *= 60) : s = a > 0 && a < 1 ? 0 : o, new De(o, s, a, e.opacity);
}
function Ps(e, t, n, l) {
  return arguments.length === 1 ? Zo(e) : new De(e, t, n, l ?? 1);
}
function De(e, t, n, l) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +l;
}
Li(De, Ps, Uo(Cn, {
  brighter(e) {
    return e = e == null ? Ql : Math.pow(Ql, e), new De(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? kn : Math.pow(kn, e), new De(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, l = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - l;
    return new Le(
      hi(e >= 240 ? e - 240 : e + 120, i, l),
      hi(e, i, l),
      hi(e < 120 ? e + 240 : e - 120, i, l),
      this.opacity
    );
  },
  clamp() {
    return new De($i(this.h), xl(this.s), xl(this.l), Vl(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Vl(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${$i(this.h)}, ${xl(this.s) * 100}%, ${xl(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function $i(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function xl(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function hi(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Ai = (e) => () => e;
function js(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Is(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(l) {
    return Math.pow(e + l * t, n);
  };
}
function Fs(e) {
  return (e = +e) == 1 ? Jo : function(t, n) {
    return n - t ? Is(t, n, e) : Ai(isNaN(t) ? n : t);
  };
}
function Jo(e, t) {
  var n = t - e;
  return n ? js(e, n) : Ai(isNaN(e) ? t : e);
}
const er = function e(t) {
  var n = Fs(t);
  function l(i, r) {
    var o = n((i = Bl(i)).r, (r = Bl(r)).r), s = n(i.g, r.g), a = n(i.b, r.b), f = Jo(i.opacity, r.opacity);
    return function(u) {
      return i.r = o(u), i.g = s(u), i.b = a(u), i.opacity = f(u), i + "";
    };
  }
  return l.gamma = e, l;
}(1);
function Qs(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, l = t.slice(), i;
  return function(r) {
    for (i = 0; i < n; ++i)
      l[i] = e[i] * (1 - r) + t[i] * r;
    return l;
  };
}
function Bs(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Vs(e, t) {
  var n = t ? t.length : 0, l = e ? Math.min(n, e.length) : 0, i = new Array(l), r = new Array(n), o;
  for (o = 0; o < l; ++o)
    i[o] = xi(e[o], t[o]);
  for (; o < n; ++o)
    r[o] = t[o];
  return function(s) {
    for (o = 0; o < l; ++o)
      r[o] = i[o](s);
    return r;
  };
}
function Gs(e, t) {
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
function Ws(e, t) {
  var n = {}, l = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? n[i] = xi(e[i], t[i]) : l[i] = t[i];
  return function(r) {
    for (i in n)
      l[i] = n[i](r);
    return l;
  };
}
var wi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, gi = new RegExp(wi.source, "g");
function Ks(e) {
  return function() {
    return e;
  };
}
function Ys(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Xs(e, t) {
  var n = wi.lastIndex = gi.lastIndex = 0, l, i, r, o = -1, s = [], a = [];
  for (e = e + "", t = t + ""; (l = wi.exec(e)) && (i = gi.exec(t)); )
    (r = i.index) > n && (r = t.slice(n, r), s[o] ? s[o] += r : s[++o] = r), (l = l[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, a.push({ i: o, x: Gl(l, i) })), n = gi.lastIndex;
  return n < t.length && (r = t.slice(n), s[o] ? s[o] += r : s[++o] = r), s.length < 2 ? a[0] ? Ys(a[0].x) : Ks(t) : (t = a.length, function(f) {
    for (var u = 0, c; u < t; ++u)
      s[(c = a[u]).i] = c.x(f);
    return s.join("");
  });
}
function xi(e, t) {
  var n = typeof t, l;
  return t == null || n === "boolean" ? Ai(t) : (n === "number" ? Gl : n === "string" ? (l = wn(t)) ? (t = l, er) : Xs : t instanceof wn ? er : t instanceof Date ? Gs : Bs(t) ? Qs : Array.isArray(t) ? Vs : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Ws : Gl)(e, t);
}
function Us(e, t) {
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
const Zs = Xl(Qt("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
Xl(Qt("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
Xl(Qt("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
Xl(Qt("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function Js(e) {
  let t, n, l, i, r;
  return {
    c() {
      t = y("span"), b(t, "class", n = "bar " + /*absolutePosition*/
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
    m(o, s) {
      R(o, t, s), i || (r = [
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
      ], i = !0);
    },
    p(o, [s]) {
      s & /*absolutePosition, hoverable*/
      129 && n !== (n = "bar " + /*absolutePosition*/
      (o[0] ? "absolute top-0" : "") + " " + /*hoverable*/
      (o[7] ? "hover:opacity-50" : "") + " svelte-109q9hn") && b(t, "class", n), s & /*widthString, colorScale, fraction, color, absolutePosition, maxWidth, leftFraction*/
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
      o[2]}px;` : "")) && b(t, "style", l), s & /*absolutePosition, hoverable, loaded*/
      385 && ie(
        t,
        "animated",
        /*loaded*/
        o[8]
      ), s & /*absolutePosition, hoverable, rounded*/
      193 && ie(
        t,
        "rounded-full",
        /*rounded*/
        o[6]
      );
    },
    i: U,
    o: U,
    d(o) {
      o && M(t), i = !1, ye(r);
    }
  };
}
function $s(e, t, n) {
  let { absolutePosition: l = !1 } = t, { fraction: i = 1 } = t, { leftFraction: r = 0 } = t, { maxWidth: o = null } = t, { colorScale: s = null } = t, { color: a = "lightgray" } = t, { rounded: f = !0 } = t, { hoverable: u = !1 } = t;
  mt(() => {
    setTimeout(() => n(8, c = !0), 100);
  });
  let c = !1, d = "";
  function m(_) {
    Oi.call(this, e, _);
  }
  function h(_) {
    Oi.call(this, e, _);
  }
  return e.$$set = (_) => {
    "absolutePosition" in _ && n(0, l = _.absolutePosition), "fraction" in _ && n(1, i = _.fraction), "leftFraction" in _ && n(2, r = _.leftFraction), "maxWidth" in _ && n(3, o = _.maxWidth), "colorScale" in _ && n(4, s = _.colorScale), "color" in _ && n(5, a = _.color), "rounded" in _ && n(6, f = _.rounded), "hoverable" in _ && n(7, u = _.hoverable);
  }, e.$$.update = () => {
    e.$$.dirty & /*maxWidth, rounded, fraction*/
    74 && (o != null ? n(9, d = `${f ? (o - 6) * i + 6 : o * i}px`) : n(9, d = f ? `calc((100% - 6px) * ${i} + 6px)` : `${i.toFixed(2)}%`));
  }, [
    l,
    i,
    r,
    o,
    s,
    a,
    f,
    u,
    c,
    d,
    m,
    h
  ];
}
class Ni extends de {
  constructor(t) {
    super(), ce(this, t, $s, Js, ue, {
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
function ef(e) {
  return e.map(
    ((t) => (n) => t += n)(0)
  );
}
const tf = (e) => ({
  hoveringIndex: e & /*hoveringIndex*/
  8192
}), tr = (e) => ({ hoveringIndex: (
  /*hoveringIndex*/
  e[13]
) });
function nr(e, t, n) {
  const l = e.slice();
  return l[25] = t[n], l[27] = n, l;
}
function lr(e) {
  let t, n;
  return {
    c() {
      t = y("div"), n = V(
        /*title*/
        e[11]
      ), b(t, "class", "font-bold text-xs truncate text-right"), $(t, "width", "96px");
    },
    m(l, i) {
      R(l, t, i), g(t, n);
    },
    p(l, i) {
      i & /*title*/
      2048 && ee(
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
function ir(e) {
  let t, n;
  return t = new Ni({
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
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
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
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function nf(e) {
  let t, n;
  return t = new Ni({
    props: {
      absolutePosition: !0,
      fraction: (
        /*scale*/
        (e[1] || fr)(
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
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*scale, value*/
      6 && (r.fraction = /*scale*/
      (l[1] || fr)(
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
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function lf(e) {
  let t, n, l = (
    /*values*/
    e[3]
  ), i = [];
  for (let o = 0; o < l.length; o += 1)
    i[o] = rr(nr(e, l, o));
  const r = (o) => L(i[o], 1, 1, () => {
    i[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      t = fe();
    },
    m(o, s) {
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(o, s);
      R(o, t, s), n = !0;
    },
    p(o, s) {
      if (s & /*scale, offsets, values, colors, hoverable, hoveringIndex*/
      25674) {
        l = /*values*/
        o[3];
        let a;
        for (a = 0; a < l.length; a += 1) {
          const f = nr(o, l, a);
          i[a] ? (i[a].p(f, s), S(i[a], 1)) : (i[a] = rr(f), i[a].c(), S(i[a], 1), i[a].m(t.parentNode, t));
        }
        for (ne(), a = l.length; a < i.length; a += 1)
          r(a);
        le();
      }
    },
    i(o) {
      if (!n) {
        for (let s = 0; s < l.length; s += 1)
          S(i[s]);
        n = !0;
      }
    },
    o(o) {
      i = i.filter(Boolean);
      for (let s = 0; s < i.length; s += 1)
        L(i[s]);
      n = !1;
    },
    d(o) {
      xe(i, o), o && M(t);
    }
  };
}
function rr(e) {
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
  return t = new Ni({
    props: {
      absolutePosition: !0,
      leftFraction: (
        /*i*/
        e[27] > 0 ? (
          /*scale*/
          (e[1] || ar)(
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
        (e[1] || sr)(
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
      Z(t.$$.fragment);
    },
    m(i, r) {
      Y(t, i, r), n = !0;
    },
    p(i, r) {
      e = i;
      const o = {};
      r & /*scale, offsets*/
      16386 && (o.leftFraction = /*i*/
      e[27] > 0 ? (
        /*scale*/
        (e[1] || ar)(
          /*offsets*/
          e[14][
            /*i*/
            e[27] - 1
          ]
        )
      ) : 0), r & /*scale, values*/
      10 && (o.fraction = /*scale*/
      (e[1] || sr)(
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
      n || (S(t.$$.fragment, i), n = !0);
    },
    o(i) {
      L(t.$$.fragment, i), n = !1;
    },
    d(i) {
      X(t, i);
    }
  };
}
function or(e) {
  let t, n, l, i;
  const r = [of, rf], o = [];
  function s(a, f) {
    return (
      /*$$slots*/
      a[15].caption ? 1 : 0
    );
  }
  return n = s(e), l = o[n] = r[n](e), {
    c() {
      t = y("div"), l.c(), b(t, "class", "text-xs text-slate-800 dark:text-slate-200");
    },
    m(a, f) {
      R(a, t, f), o[n].m(t, null), i = !0;
    },
    p(a, f) {
      let u = n;
      n = s(a), n === u ? o[n].p(a, f) : (ne(), L(o[u], 1, 1, () => {
        o[u] = null;
      }), le(), l = o[n], l ? l.p(a, f) : (l = o[n] = r[n](a), l.c()), S(l, 1), l.m(t, null));
    },
    i(a) {
      i || (S(l), i = !0);
    },
    o(a) {
      L(l), i = !1;
    },
    d(a) {
      a && M(t), o[n].d();
    }
  };
}
function rf(e) {
  let t;
  const n = (
    /*#slots*/
    e[17].caption
  ), l = Te(
    n,
    e,
    /*$$scope*/
    e[16],
    tr
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
      73728) && Oe(
        l,
        n,
        i,
        /*$$scope*/
        i[16],
        t ? qe(
          n,
          /*$$scope*/
          i[16],
          r,
          tf
        ) : He(
          /*$$scope*/
          i[16]
        ),
        tr
      );
    },
    i(i) {
      t || (S(l, i), t = !0);
    },
    o(i) {
      L(l, i), t = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function of(e) {
  let t = he(".3")(
    /*value*/
    e[2]
  ) + "", n;
  return {
    c() {
      n = V(t);
    },
    m(l, i) {
      R(l, n, i);
    },
    p(l, i) {
      i & /*value*/
      4 && t !== (t = he(".3")(
        /*value*/
        l[2]
      ) + "") && ee(n, t);
    },
    i: U,
    o: U,
    d(l) {
      l && M(n);
    }
  };
}
function af(e) {
  let t, n, l, i, r, o, s, a, f = !!/*title*/
  e[11] && lr(e), u = (
    /*showFullBar*/
    e[4] && ir(e)
  );
  const c = [lf, nf], d = [];
  function m(_, p) {
    return (
      /*values*/
      _[3] != null ? 0 : 1
    );
  }
  r = m(e), o = d[r] = c[r](e);
  let h = (
    /*showTooltip*/
    e[5] && or(e)
  );
  return {
    c() {
      t = y("div"), f && f.c(), n = P(), l = y("div"), u && u.c(), i = P(), o.c(), s = P(), h && h.c(), b(l, "class", "parent-bar relative rounded-full overflow-hidden"), $(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), $(l, "height", "6px"), ie(l, "mb-1", !/*horizontalLayout*/
      e[12]), b(t, "class", "items-center gap-1"), ie(
        t,
        "flex",
        /*horizontalLayout*/
        e[12]
      );
    },
    m(_, p) {
      R(_, t, p), f && f.m(t, null), g(t, n), g(t, l), u && u.m(l, null), g(l, i), d[r].m(l, null), g(t, s), h && h.m(t, null), a = !0;
    },
    p(_, [p]) {
      /*title*/
      _[11] ? f ? f.p(_, p) : (f = lr(_), f.c(), f.m(t, n)) : f && (f.d(1), f = null), /*showFullBar*/
      _[4] ? u ? (u.p(_, p), p & /*showFullBar*/
      16 && S(u, 1)) : (u = ir(_), u.c(), S(u, 1), u.m(l, i)) : u && (ne(), L(u, 1, 1, () => {
        u = null;
      }), le());
      let k = r;
      r = m(_), r === k ? d[r].p(_, p) : (ne(), L(d[k], 1, 1, () => {
        d[k] = null;
      }), le(), o = d[r], o ? o.p(_, p) : (o = d[r] = c[r](_), o.c()), S(o, 1), o.m(l, null)), (!a || p & /*width*/
      1) && $(
        l,
        "width",
        /*width*/
        _[0] == null ? "100%" : `${/*width*/
        _[0]}px`
      ), (!a || p & /*horizontalLayout*/
      4096) && ie(l, "mb-1", !/*horizontalLayout*/
      _[12]), /*showTooltip*/
      _[5] ? h ? (h.p(_, p), p & /*showTooltip*/
      32 && S(h, 1)) : (h = or(_), h.c(), S(h, 1), h.m(t, null)) : h && (ne(), L(h, 1, 1, () => {
        h = null;
      }), le()), (!a || p & /*horizontalLayout*/
      4096) && ie(
        t,
        "flex",
        /*horizontalLayout*/
        _[12]
      );
    },
    i(_) {
      a || (S(u), S(o), S(h), a = !0);
    },
    o(_) {
      L(u), L(o), L(h), a = !1;
    },
    d(_) {
      _ && M(t), f && f.d(), u && u.d(), d[r].d(), h && h.d();
    }
  };
}
const ar = (e) => e, sr = (e) => e, fr = (e) => e;
function sf(e, t, n) {
  let { $$slots: l = {}, $$scope: i } = t;
  const r = Ci(l);
  let { width: o = 100 } = t, { scale: s = null } = t, { value: a = 0 } = t, { values: f = null } = t, { showFullBar: u = !1 } = t, { showTooltip: c = !0 } = t, { colors: d = Ms } = t, { colorScale: m = Zs } = t, { color: h = null } = t, { fullBarColor: _ = "#e5e7eb" } = t, { hoverable: p = !1 } = t, { title: k = null } = t, { horizontalLayout: w = !1 } = t, z = null, D = [];
  const O = (A) => n(13, z = -1), x = (A) => n(13, z = null), T = (A, W) => n(13, z = A), E = (A) => n(13, z = null), j = () => h, N = (A) => n(13, z = 0), F = (A) => n(13, z = null);
  return e.$$set = (A) => {
    "width" in A && n(0, o = A.width), "scale" in A && n(1, s = A.scale), "value" in A && n(2, a = A.value), "values" in A && n(3, f = A.values), "showFullBar" in A && n(4, u = A.showFullBar), "showTooltip" in A && n(5, c = A.showTooltip), "colors" in A && n(6, d = A.colors), "colorScale" in A && n(7, m = A.colorScale), "color" in A && n(8, h = A.color), "fullBarColor" in A && n(9, _ = A.fullBarColor), "hoverable" in A && n(10, p = A.hoverable), "title" in A && n(11, k = A.title), "horizontalLayout" in A && n(12, w = A.horizontalLayout), "$$scope" in A && n(16, i = A.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*values*/
    8 && (f != null ? n(14, D = ef(f)) : n(14, D = []));
  }, [
    o,
    s,
    a,
    f,
    u,
    c,
    d,
    m,
    h,
    _,
    p,
    k,
    w,
    z,
    D,
    r,
    i,
    l,
    O,
    x,
    T,
    E,
    j,
    N,
    F
  ];
}
class Ei extends de {
  constructor(t) {
    super(), ce(this, t, sf, af, ue, {
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
const ff = (e) => ({ hovering: e & /*hovering*/
1 }), ur = (e) => ({ hovering: (
  /*hovering*/
  e[0]
) });
function uf(e) {
  let t, n, l, i;
  const r = (
    /*#slots*/
    e[4].default
  ), o = Te(
    r,
    e,
    /*$$scope*/
    e[3],
    ur
  );
  return {
    c() {
      t = y("div"), o && o.c(), b(
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
    m(s, a) {
      R(s, t, a), o && o.m(t, null), n = !0, l || (i = [
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
    p(s, [a]) {
      o && o.p && (!n || a & /*$$scope, hovering*/
      9) && Oe(
        o,
        r,
        s,
        /*$$scope*/
        s[3],
        n ? qe(
          r,
          /*$$scope*/
          s[3],
          a,
          ff
        ) : He(
          /*$$scope*/
          s[3]
        ),
        ur
      ), (!n || a & /*clazz*/
      2) && b(
        t,
        "class",
        /*clazz*/
        s[1]
      ), (!n || a & /*style*/
      4) && b(
        t,
        "style",
        /*style*/
        s[2]
      );
    },
    i(s) {
      n || (S(o, s), n = !0);
    },
    o(s) {
      L(o, s), n = !1;
    },
    d(s) {
      s && M(t), o && o.d(s), l = !1, ye(i);
    }
  };
}
function cf(e, t, n) {
  let { $$slots: l = {}, $$scope: i } = t, { hovering: r = !1 } = t, { class: o = "" } = t, { style: s = "" } = t;
  const a = () => n(0, r = !0), f = () => n(0, r = !1);
  return e.$$set = (u) => {
    "hovering" in u && n(0, r = u.hovering), "class" in u && n(1, o = u.class), "style" in u && n(2, s = u.style), "$$scope" in u && n(3, i = u.$$scope);
  }, [r, o, s, i, l, a, f];
}
class df extends de {
  constructor(t) {
    super(), ce(this, t, cf, uf, ue, { hovering: 0, class: 1, style: 2 });
  }
}
function cr(e, t, n) {
  const l = e.slice();
  return l[30] = t[n], l[32] = n, l;
}
function dr(e) {
  let t = (
    /*selectedConceptIDs*/
    e[10].size + ""
  ), n, l, i = (
    /*selectedConceptIDs*/
    e[10].size != 1 ? "s" : ""
  ), r;
  return {
    c() {
      n = V(t), l = V(" Concept"), r = V(i);
    },
    m(o, s) {
      R(o, n, s), R(o, l, s), R(o, r, s);
    },
    p(o, s) {
      s[0] & /*selectedConceptIDs*/
      1024 && t !== (t = /*selectedConceptIDs*/
      o[10].size + "") && ee(n, t), s[0] & /*selectedConceptIDs*/
      1024 && i !== (i = /*selectedConceptIDs*/
      o[10].size != 1 ? "s" : "") && ee(r, i);
    },
    d(o) {
      o && M(n), o && M(l), o && M(r);
    }
  };
}
function mf(e) {
  let t, n, l, i, r, o, s, a, f, u, c, d, m, h, _, p, k, w, z, D, O;
  function x(C, H) {
    if (
      /*hasError*/
      C[16]
    )
      return _f;
    if (
      /*hasConceptIds*/
      C[17]
    )
      return gf;
  }
  let T = x(e), E = T && T(e), j = (
    /*totalCount*/
    e[18] > 0 && mr(e)
  );
  const N = [kf, pf], F = [];
  function A(C, H) {
    return (
      /*paginatedConcepts*/
      C[15].length > 0 ? 0 : 1
    );
  }
  _ = A(e), p = F[_] = N[_](e);
  let W = (
    /*sortedConcepts*/
    e[13].length > Ke && pr(e)
  );
  return {
    c() {
      E && E.c(), t = P(), n = y("div"), l = y("div"), i = y("div"), r = y("input"), o = P(), s = y("div"), s.textContent = "Data Element", a = P(), f = y("div"), f.textContent = "Type", u = P(), c = y("div"), d = V(`Count
          `), j && j.c(), m = P(), h = y("div"), p.c(), k = P(), W && W.c(), w = fe(), b(r, "type", "checkbox"), b(r, "class", "form-checkbox h-5 w-5 text-blue-600 rounded border-slate-300 dark:border-slate-600 focus:ring-blue-500"), r.checked = /*allFilteredSelected*/
      e[11], r.indeterminate = /*someFilteredSelected*/
      e[14], b(r, "aria-label", "Select all concepts"), b(i, "class", "flex items-center justify-center"), b(s, "class", "font-semibold text-slate-900 dark:text-slate-100"), b(f, "class", "font-semibold text-slate-900 dark:text-slate-100"), b(c, "class", "font-semibold text-slate-900 dark:text-slate-100"), b(l, "class", "grid gap-4 px-4 py-4 items-center"), $(l, "grid-template-columns", "2rem 2fr 1fr 2fr"), b(n, "class", "bg-slate-50 dark:bg-slate-800 rounded-t-lg border border-slate-200 dark:border-slate-700"), b(h, "class", "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-b-lg overflow-y-auto custom-scrollbar min-h-0 flex-auto svelte-1xw87wt");
    },
    m(C, H) {
      E && E.m(C, H), R(C, t, H), R(C, n, H), g(n, l), g(l, i), g(i, r), g(l, o), g(l, s), g(l, a), g(l, f), g(l, u), g(l, c), g(c, d), j && j.m(c, null), R(C, m, H), R(C, h, H), F[_].m(h, null), R(C, k, H), W && W.m(C, H), R(C, w, H), z = !0, D || (O = te(
        r,
        "change",
        /*toggleSelectAllFiltered*/
        e[21]
      ), D = !0);
    },
    p(C, H) {
      T === (T = x(C)) && E ? E.p(C, H) : (E && E.d(1), E = T && T(C), E && (E.c(), E.m(t.parentNode, t))), (!z || H[0] & /*allFilteredSelected*/
      2048) && (r.checked = /*allFilteredSelected*/
      C[11]), (!z || H[0] & /*someFilteredSelected*/
      16384) && (r.indeterminate = /*someFilteredSelected*/
      C[14]), /*totalCount*/
      C[18] > 0 ? j ? j.p(C, H) : (j = mr(C), j.c(), j.m(c, null)) : j && (j.d(1), j = null);
      let B = _;
      _ = A(C), _ === B ? F[_].p(C, H) : (ne(), L(F[B], 1, 1, () => {
        F[B] = null;
      }), le(), p = F[_], p ? p.p(C, H) : (p = F[_] = N[_](C), p.c()), S(p, 1), p.m(h, null)), /*sortedConcepts*/
      C[13].length > Ke ? W ? (W.p(C, H), H[0] & /*sortedConcepts*/
      8192 && S(W, 1)) : (W = pr(C), W.c(), S(W, 1), W.m(w.parentNode, w)) : W && (ne(), L(W, 1, 1, () => {
        W = null;
      }), le());
    },
    i(C) {
      z || (S(p), S(W), z = !0);
    },
    o(C) {
      L(p), L(W), z = !1;
    },
    d(C) {
      E && E.d(C), C && M(t), C && M(n), j && j.d(), C && M(m), C && M(h), F[_].d(), C && M(k), W && W.d(C), C && M(w), D = !1, O();
    }
  };
}
function bf(e) {
  let t, n, l, i, r, o, s, a, f, u, c, d, m;
  return s = new _e({
    props: { icon: Ga, class: "inline mr-2" }
  }), {
    c() {
      t = y("div"), n = y("div"), n.textContent = "Data elements not retrieved yet", l = P(), i = y("p"), i.textContent = "Click below to retrieve available data elements in this scope.", r = P(), o = y("button"), Z(s.$$.fragment), a = V(`
        Load Data Elements for `), f = y("span"), u = V(
        /*scopeName*/
        e[0]
      ), b(n, "class", "w-1/2 text-slate-700 dark:text-slate-200 text-lg font-semibold"), b(i, "class", "text-slate-600 dark:text-slate-400 w-1/3"), b(f, "class", "font-mono"), b(o, "class", "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md"), o.disabled = /*isLoading*/
      e[2], b(t, "class", "flex flex-col w-full h-full items-center justify-center text-center gap-4");
    },
    m(h, _) {
      R(h, t, _), g(t, n), g(t, l), g(t, i), g(t, r), g(t, o), Y(s, o, null), g(o, a), g(o, f), g(f, u), c = !0, d || (m = te(o, "click", function() {
        ot(
          /*onAnalyze*/
          e[4]
        ) && e[4].apply(this, arguments);
      }), d = !0);
    },
    p(h, _) {
      e = h, (!c || _[0] & /*scopeName*/
      1) && ee(
        u,
        /*scopeName*/
        e[0]
      ), (!c || _[0] & /*isLoading*/
      4) && (o.disabled = /*isLoading*/
      e[2]);
    },
    i(h) {
      c || (S(s.$$.fragment, h), c = !0);
    },
    o(h) {
      L(s.$$.fragment, h), c = !1;
    },
    d(h) {
      h && M(t), X(s), d = !1, m();
    }
  };
}
function hf(e) {
  let t, n, l, i = (
    /*loadingMessage*/
    e[3] && kr(e)
  );
  return {
    c() {
      t = y("div"), n = y("div"), n.innerHTML = `<div class="relative"><div class="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-spin"></div> 
          
          <div class="absolute top-2 left-2 w-12 h-12 border-4 border-blue-600 dark:border-blue-400 rounded-full animate-spin" style="animation-direction: reverse; animation-duration: 1.5s;"></div> 
          
          <div class="absolute top-6 left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div></div>`, l = P(), i && i.c(), b(n, "class", "flex justify-center mb-8"), b(t, "class", "text-center py-16");
    },
    m(r, o) {
      R(r, t, o), g(t, n), g(t, l), i && i.m(t, null);
    },
    p(r, o) {
      /*loadingMessage*/
      r[3] ? i ? i.p(r, o) : (i = kr(r), i.c(), i.m(t, null)) : i && (i.d(1), i = null);
    },
    i: U,
    o: U,
    d(r) {
      r && M(t), i && i.d();
    }
  };
}
function gf(e) {
  let t, n, l, i, r, o, s, a, f, u, c, d, m;
  return {
    c() {
      t = y("div"), n = y("div"), l = y("div"), l.innerHTML = '<span class="text-yellow-600 dark:text-yellow-400">⚠️</span>', i = P(), r = y("div"), o = y("h3"), o.textContent = "Concept Names Not Found", s = P(), a = y("div"), f = y("p"), f.textContent = `Some concepts are showing as IDs instead of human-readable
                names. This might be due to vocabulary lookup issues.`, u = P(), c = y("button"), c.textContent = "🔄 Refresh Analysis", b(l, "class", "flex-shrink-0"), b(o, "class", "text-sm font-medium text-yellow-800 dark:text-yellow-200"), b(c, "class", "mt-2 bg-yellow-600 hover:bg-yellow-700 text-white text-xs px-3 py-1 rounded transition-colors duration-200"), b(a, "class", "mt-2 text-sm text-yellow-700 dark:text-yellow-300"), b(r, "class", "ml-3"), b(n, "class", "flex items-start"), b(t, "class", "bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4");
    },
    m(h, _) {
      R(h, t, _), g(t, n), g(n, l), g(n, i), g(n, r), g(r, o), g(r, s), g(r, a), g(a, f), g(a, u), g(a, c), d || (m = te(
        c,
        "click",
        /*click_handler_2*/
        e[27]
      ), d = !0);
    },
    p: U,
    d(h) {
      h && M(t), d = !1, m();
    }
  };
}
function _f(e) {
  let t, n, l, i, r, o, s, a, f, u = (
    /*scopeConcepts*/
    e[7].error + ""
  ), c, d, m, h, _;
  return {
    c() {
      t = y("div"), n = y("div"), l = y("div"), l.innerHTML = '<span class="text-red-600 dark:text-red-400">❌</span>', i = P(), r = y("div"), o = y("h3"), o.textContent = "Analysis Failed", s = P(), a = y("div"), f = y("p"), c = V(u), d = P(), m = y("button"), m.textContent = "🔄 Retry Analysis", b(l, "class", "flex-shrink-0"), b(o, "class", "text-sm font-medium text-red-800 dark:text-red-200"), b(m, "class", "mt-2 bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded transition-colors duration-200"), b(a, "class", "mt-2 text-sm text-red-700 dark:text-red-300"), b(r, "class", "ml-3"), b(n, "class", "flex items-start"), b(t, "class", "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4");
    },
    m(p, k) {
      R(p, t, k), g(t, n), g(n, l), g(n, i), g(n, r), g(r, o), g(r, s), g(r, a), g(a, f), g(f, c), g(a, d), g(a, m), h || (_ = te(
        m,
        "click",
        /*click_handler_1*/
        e[26]
      ), h = !0);
    },
    p(p, k) {
      k[0] & /*scopeConcepts*/
      128 && u !== (u = /*scopeConcepts*/
      p[7].error + "") && ee(c, u);
    },
    d(p) {
      p && M(t), h = !1, _();
    }
  };
}
function mr(e) {
  let t, n, l = (
    /*totalCount*/
    e[18].toLocaleString() + ""
  ), i, r;
  return {
    c() {
      t = y("span"), n = V("(Total: "), i = V(l), r = V(")"), b(t, "class", "text-sm font-normal text-slate-600 dark:text-slate-400");
    },
    m(o, s) {
      R(o, t, s), g(t, n), g(t, i), g(t, r);
    },
    p(o, s) {
      s[0] & /*totalCount*/
      262144 && l !== (l = /*totalCount*/
      o[18].toLocaleString() + "") && ee(i, l);
    },
    d(o) {
      o && M(t);
    }
  };
}
function pf(e) {
  let t;
  return {
    c() {
      t = y("div"), t.textContent = "No concepts found for this scope.", b(t, "class", "px-6 py-8 text-center text-slate-500 dark:text-slate-400");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: U,
    i: U,
    o: U,
    d(n) {
      n && M(t);
    }
  };
}
function kf(e) {
  let t, n, l = (
    /*paginatedConcepts*/
    e[15]
  ), i = [];
  for (let o = 0; o < l.length; o += 1)
    i[o] = _r(cr(e, l, o));
  const r = (o) => L(i[o], 1, 1, () => {
    i[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      t = fe();
    },
    m(o, s) {
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(o, s);
      R(o, t, s), n = !0;
    },
    p(o, s) {
      if (s[0] & /*paginatedConcepts, onInsert, scopeName, totalCount, selectedConceptIDs, toggleSelectConcept*/
      4490273 | s[1] & /*hovering*/
      4) {
        l = /*paginatedConcepts*/
        o[15];
        let a;
        for (a = 0; a < l.length; a += 1) {
          const f = cr(o, l, a);
          i[a] ? (i[a].p(f, s), S(i[a], 1)) : (i[a] = _r(f), i[a].c(), S(i[a], 1), i[a].m(t.parentNode, t));
        }
        for (ne(), a = l.length; a < i.length; a += 1)
          r(a);
        le();
      }
    },
    i(o) {
      if (!n) {
        for (let s = 0; s < l.length; s += 1)
          S(i[s]);
        n = !0;
      }
    },
    o(o) {
      i = i.filter(Boolean);
      for (let s = 0; s < i.length; s += 1)
        L(i[s]);
      n = !1;
    },
    d(o) {
      xe(i, o), o && M(t);
    }
  };
}
function br(e) {
  let t, n = (
    /*concept*/
    e[30].id + ""
  ), l, i;
  return {
    c() {
      t = y("span"), l = V(n), i = V(" "), b(t, "class", "font-mono text-slate-500 dark:text-slate-400");
    },
    m(r, o) {
      R(r, t, o), g(t, l), g(t, i);
    },
    p(r, o) {
      o[0] & /*paginatedConcepts*/
      32768 && n !== (n = /*concept*/
      r[30].id + "") && ee(l, n);
    },
    d(r) {
      r && M(t);
    }
  };
}
function hr(e) {
  let t, n, l;
  return n = new Ei({
    props: {
      width: 128,
      value: (
        /*concept*/
        e[30].count / /*totalCount*/
        e[18]
      ),
      showTooltip: !1,
      showFullBar: !0,
      color: "#3b82f6",
      fullBarColor: "#9ca3af",
      horizontalLayout: !0
    }
  }), {
    c() {
      t = y("div"), Z(n.$$.fragment), b(t, "class", "w-32");
    },
    m(i, r) {
      R(i, t, r), Y(n, t, null), l = !0;
    },
    p(i, r) {
      const o = {};
      r[0] & /*paginatedConcepts, totalCount*/
      294912 && (o.value = /*concept*/
      i[30].count / /*totalCount*/
      i[18]), n.$set(o);
    },
    i(i) {
      l || (S(n.$$.fragment, i), l = !0);
    },
    o(i) {
      L(n.$$.fragment, i), l = !1;
    },
    d(i) {
      i && M(t), X(n);
    }
  };
}
function gr(e) {
  let t, n, l, i, r, o;
  n = new _e({
    props: { icon: Wo, class: "inline mr-2" }
  });
  function s() {
    return (
      /*click_handler_3*/
      e[29](
        /*concept*/
        e[30]
      )
    );
  }
  return {
    c() {
      t = y("button"), Z(n.$$.fragment), l = V(`
                  Query`), b(t, "class", "px-3 py-0.5 text-sm font-semibold rounded transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white");
    },
    m(a, f) {
      R(a, t, f), Y(n, t, null), g(t, l), i = !0, r || (o = te(t, "click", s), r = !0);
    },
    p(a, f) {
      e = a;
    },
    i(a) {
      i || (S(n.$$.fragment, a), i = !0);
    },
    o(a) {
      L(n.$$.fragment, a), i = !1;
    },
    d(a) {
      a && M(t), X(n), r = !1, o();
    }
  };
}
function yf(e) {
  let t, n, l, i, r, o = (
    /*concept*/
    e[30].name + ""
  ), s, a, f, u, c, d = (
    /*concept*/
    e[30].type + ""
  ), m, h, _, p, k, w, z, D = (
    /*concept*/
    e[30].count.toLocaleString() + ""
  ), O, x, T, E = (
    /*totalCount*/
    e[18].toLocaleString() + ""
  ), j, N, F, A, W, C;
  function H() {
    return (
      /*change_handler*/
      e[28](
        /*concept*/
        e[30]
      )
    );
  }
  let B = (
    /*concept*/
    e[30].id != /*concept*/
    e[30].name && br(e)
  ), I = (
    /*totalCount*/
    e[18] > 0 && hr(e)
  ), J = (
    /*hovering*/
    e[33] && gr(e)
  );
  return {
    c() {
      t = y("div"), n = y("input"), i = P(), r = y("div"), B && B.c(), s = V(o), f = P(), u = y("div"), c = y("span"), m = V(d), _ = P(), p = y("div"), k = y("div"), I && I.c(), w = P(), z = y("div"), O = V(D), x = y("span"), T = V(" / "), j = V(E), N = P(), J && J.c(), F = P(), b(n, "type", "checkbox"), b(n, "class", "form-checkbox h-5 w-5 text-blue-600 rounded border-slate-300 dark:border-slate-600 focus:ring-blue-500"), n.checked = l = /*selectedConceptIDs*/
      e[10].has(
        /*concept*/
        e[30].id
      ), b(n, "aria-label", "Select concept"), b(t, "class", "flex items-center justify-center"), b(r, "class", "text-slate-900 dark:text-slate-100 font-medium truncate"), b(r, "title", a = /*concept*/
      e[30].name), b(c, "class", h = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " + /*concept*/
      (e[30].type === "event" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : (
        /*concept*/
        e[30].type === "interval" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200"
      ))), b(u, "class", "text-slate-600 dark:text-slate-400"), b(x, "class", "opacity-80"), b(z, "class", "text-slate-600 dark:text-slate-200 font-mono text-sm"), b(k, "class", "flex flex-col space-y-2"), b(p, "class", "flex gap-2 justify-between");
    },
    m(K, q) {
      R(K, t, q), g(t, n), R(K, i, q), R(K, r, q), B && B.m(r, null), g(r, s), R(K, f, q), R(K, u, q), g(u, c), g(c, m), R(K, _, q), R(K, p, q), g(p, k), I && I.m(k, null), g(k, w), g(k, z), g(z, O), g(z, x), g(x, T), g(x, j), g(p, N), J && J.m(p, null), R(K, F, q), A = !0, W || (C = te(n, "change", H), W = !0);
    },
    p(K, q) {
      e = K, (!A || q[0] & /*selectedConceptIDs, paginatedConcepts*/
      33792 && l !== (l = /*selectedConceptIDs*/
      e[10].has(
        /*concept*/
        e[30].id
      ))) && (n.checked = l), /*concept*/
      e[30].id != /*concept*/
      e[30].name ? B ? B.p(e, q) : (B = br(e), B.c(), B.m(r, s)) : B && (B.d(1), B = null), (!A || q[0] & /*paginatedConcepts*/
      32768) && o !== (o = /*concept*/
      e[30].name + "") && ee(s, o), (!A || q[0] & /*paginatedConcepts*/
      32768 && a !== (a = /*concept*/
      e[30].name)) && b(r, "title", a), (!A || q[0] & /*paginatedConcepts*/
      32768) && d !== (d = /*concept*/
      e[30].type + "") && ee(m, d), (!A || q[0] & /*paginatedConcepts*/
      32768 && h !== (h = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " + /*concept*/
      (e[30].type === "event" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : (
        /*concept*/
        e[30].type === "interval" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200"
      )))) && b(c, "class", h), /*totalCount*/
      e[18] > 0 ? I ? (I.p(e, q), q[0] & /*totalCount*/
      262144 && S(I, 1)) : (I = hr(e), I.c(), S(I, 1), I.m(k, w)) : I && (ne(), L(I, 1, 1, () => {
        I = null;
      }), le()), (!A || q[0] & /*paginatedConcepts*/
      32768) && D !== (D = /*concept*/
      e[30].count.toLocaleString() + "") && ee(O, D), (!A || q[0] & /*totalCount*/
      262144) && E !== (E = /*totalCount*/
      e[18].toLocaleString() + "") && ee(j, E), /*hovering*/
      e[33] ? J ? (J.p(e, q), q[1] & /*hovering*/
      4 && S(J, 1)) : (J = gr(e), J.c(), S(J, 1), J.m(p, null)) : J && (ne(), L(J, 1, 1, () => {
        J = null;
      }), le());
    },
    i(K) {
      A || (S(I), S(J), A = !0);
    },
    o(K) {
      L(I), L(J), A = !1;
    },
    d(K) {
      K && M(t), K && M(i), K && M(r), B && B.d(), K && M(f), K && M(u), K && M(_), K && M(p), I && I.d(), J && J.d(), K && M(F), W = !1, C();
    }
  };
}
function _r(e) {
  let t, n;
  return t = new df({
    props: {
      class: "grid gap-4 px-4 py-4 border-b border-slate-100 dark:border-slate-800 last:border-b-0 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-150 items-center",
      style: "grid-template-columns: 2rem 2fr 1fr 2fr;",
      $$slots: {
        default: [
          yf,
          ({ hovering: l }) => ({ 33: l }),
          ({ hovering: l }) => [0, l ? 4 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i[0] & /*paginatedConcepts, onInsert, scopeName, totalCount, selectedConceptIDs*/
      295969 | i[1] & /*$$scope, hovering*/
      12 && (r.$$scope = { dirty: i, ctx: l }), t.$set(r);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function pr(e) {
  let t, n, l, i, r, o, s, a = (
    /*currentPage*/
    (e[9] - 1) * Ke + 1 + ""
  ), f, u, c = Math.min(
    /*currentPage*/
    e[9] * Ke,
    /*concepts*/
    e[6].length
  ) + "", d, m, h = (
    /*concepts*/
    e[6].length + ""
  ), _, p, k, w, z, D, O, x;
  return l = new _e({ props: { icon: Ka } }), w = new _e({ props: { icon: dt } }), {
    c() {
      t = y("div"), n = y("button"), Z(l.$$.fragment), r = P(), o = y("span"), s = V("Concepts "), f = V(a), u = V(" - "), d = V(c), m = V(" of "), _ = V(h), p = P(), k = y("button"), Z(w.$$.fragment), b(n, "class", "p-2 hover:opacity-50 disabled:opacity-30 disabled:cursor-not-allowed"), n.disabled = i = /*currentPage*/
      e[9] === 1, b(n, "aria-label", "Previous Page"), b(o, "class", "text-sm"), b(k, "class", "p-2 hover:opacity-50 disabled:opacity-30 disabled:cursor-not-allowed"), k.disabled = z = /*currentPage*/
      e[9] === /*totalPages*/
      e[12], b(k, "aria-label", "Next Page"), b(t, "class", "shrink-0 flex justify-end items-center px-6 py-2 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200");
    },
    m(T, E) {
      R(T, t, E), g(t, n), Y(l, n, null), g(t, r), g(t, o), g(o, s), g(o, f), g(o, u), g(o, d), g(o, m), g(o, _), g(t, p), g(t, k), Y(w, k, null), D = !0, O || (x = [
        te(
          n,
          "click",
          /*prevPage*/
          e[19]
        ),
        te(
          k,
          "click",
          /*nextPage*/
          e[20]
        )
      ], O = !0);
    },
    p(T, E) {
      (!D || E[0] & /*currentPage*/
      512 && i !== (i = /*currentPage*/
      T[9] === 1)) && (n.disabled = i), (!D || E[0] & /*currentPage*/
      512) && a !== (a = /*currentPage*/
      (T[9] - 1) * Ke + 1 + "") && ee(f, a), (!D || E[0] & /*currentPage, concepts*/
      576) && c !== (c = Math.min(
        /*currentPage*/
        T[9] * Ke,
        /*concepts*/
        T[6].length
      ) + "") && ee(d, c), (!D || E[0] & /*concepts*/
      64) && h !== (h = /*concepts*/
      T[6].length + "") && ee(_, h), (!D || E[0] & /*currentPage, totalPages*/
      4608 && z !== (z = /*currentPage*/
      T[9] === /*totalPages*/
      T[12])) && (k.disabled = z);
    },
    i(T) {
      D || (S(l.$$.fragment, T), S(w.$$.fragment, T), D = !0);
    },
    o(T) {
      L(l.$$.fragment, T), L(w.$$.fragment, T), D = !1;
    },
    d(T) {
      T && M(t), X(l), X(w), O = !1, ye(x);
    }
  };
}
function kr(e) {
  let t, n, l, i, r, o;
  return {
    c() {
      t = y("div"), n = y("div"), l = y("div"), i = P(), r = y("span"), o = V(
        /*loadingMessage*/
        e[3]
      ), b(l, "class", "w-2 h-2 bg-blue-500 rounded-full animate-pulse"), b(r, "class", "text-sm text-blue-700 dark:text-blue-300 font-medium"), b(n, "class", "flex items-center space-x-2"), b(t, "class", "mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg");
    },
    m(s, a) {
      R(s, t, a), g(t, n), g(n, l), g(n, i), g(n, r), g(r, o);
    },
    p(s, a) {
      a[0] & /*loadingMessage*/
      8 && ee(
        o,
        /*loadingMessage*/
        s[3]
      );
    },
    d(s) {
      s && M(t);
    }
  };
}
function wf(e) {
  let t, n, l, i, r, o, s, a, f, u, c, d, m, h, _, p, k;
  o = new _e({
    props: { icon: Wo, class: "inline mr-2" }
  });
  let w = (
    /*selectedConceptIDs*/
    e[10].size > 0 && dr(e)
  );
  const z = [hf, bf, mf], D = [];
  function O(x, T) {
    return (
      /*isLoading*/
      x[2] ? 0 : (
        /*isAnalyzed*/
        x[1] ? 2 : 1
      )
    );
  }
  return m = O(e), h = D[m] = z[m](e), {
    c() {
      t = y("div"), n = y("h2"), l = V(
        /*scopeName*/
        e[0]
      ), i = P(), r = y("button"), Z(o.$$.fragment), s = V(`
    Query `), w && w.c(), f = P(), u = y("input"), c = P(), d = y("div"), h.c(), b(n, "class", "text-2xl font-bold text-slate-900 dark:text-slate-100 flex-auto"), b(r, "class", "px-3 py-1.5 font-semibold rounded transition-colors duration-200 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-200/50 disabled:dark:bg-slate-700/50 text-white disabled:text-slate-500/50"), r.disabled = a = /*selectedConceptIDs*/
      e[10].size == 0, b(u, "type", "search"), b(u, "class", "shrink-1 ml-4 px-3 py-1.5 rounded overflow-hidden focus:bg-white bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline focus:outline-blue-500 w-64 transition-colors duration-200"), b(u, "placeholder", "Filter concepts..."), b(u, "autocomplete", "off"), b(t, "class", "pb-6 shrink-0 flex items-center justify-between"), b(d, "class", "w-full flex-auto flex flex-col h-0");
    },
    m(x, T) {
      R(x, t, T), g(t, n), g(n, l), g(t, i), g(t, r), Y(o, r, null), g(r, s), w && w.m(r, null), g(t, f), g(t, u), jt(
        u,
        /*search*/
        e[8]
      ), R(x, c, T), R(x, d, T), D[m].m(d, null), _ = !0, p || (k = [
        te(
          r,
          "click",
          /*click_handler*/
          e[24]
        ),
        te(
          u,
          "input",
          /*input_input_handler*/
          e[25]
        )
      ], p = !0);
    },
    p(x, T) {
      (!_ || T[0] & /*scopeName*/
      1) && ee(
        l,
        /*scopeName*/
        x[0]
      ), /*selectedConceptIDs*/
      x[10].size > 0 ? w ? w.p(x, T) : (w = dr(x), w.c(), w.m(r, null)) : w && (w.d(1), w = null), (!_ || T[0] & /*selectedConceptIDs*/
      1024 && a !== (a = /*selectedConceptIDs*/
      x[10].size == 0)) && (r.disabled = a), T[0] & /*search*/
      256 && u.value !== /*search*/
      x[8] && jt(
        u,
        /*search*/
        x[8]
      );
      let E = m;
      m = O(x), m === E ? D[m].p(x, T) : (ne(), L(D[E], 1, 1, () => {
        D[E] = null;
      }), le(), h = D[m], h ? h.p(x, T) : (h = D[m] = z[m](x), h.c()), S(h, 1), h.m(d, null));
    },
    i(x) {
      _ || (S(o.$$.fragment, x), S(h), _ = !0);
    },
    o(x) {
      L(o.$$.fragment, x), L(h), _ = !1;
    },
    d(x) {
      x && M(t), X(o), w && w.d(), x && M(c), x && M(d), D[m].d(), p = !1, ye(k);
    }
  };
}
const Ke = 50;
function vf(e, t, n) {
  let l, i, r, o, s, a, f, u, c, { scopeName: d = "" } = t, { isAnalyzed: m = !1 } = t, { isLoading: h = !1 } = t, { loadingMessage: _ = "" } = t, { onAnalyze: p = () => {
  } } = t, { onInsert: k = () => {
  } } = t, { concepts: w = [] } = t, { scopeConcepts: z = {} } = t, D = "", O = 1;
  function x() {
    O > 1 && n(9, O -= 1);
  }
  function T() {
    O < a && n(9, O += 1);
  }
  let E = /* @__PURE__ */ new Set();
  function j() {
    u ? (o.forEach((I) => E.delete(I.id)), n(10, E = new Set(E))) : (o.forEach((I) => E.add(I.id)), n(10, E = new Set(E)));
  }
  function N(I) {
    E.has(I) ? E.delete(I) : E.add(I), n(10, E = new Set(E));
  }
  const F = () => {
    let I = w.filter((J) => E.has(J.id)).map((J) => "'" + J.name + "'");
    k(d, `name in (${I.join(", ")}'`);
  };
  function A() {
    D = this.value, n(8, D);
  }
  const W = () => p(), C = () => p(), H = (I) => N(I.id), B = (I) => {
    !I.id || I.id == I.name ? k(d, `name = '${I.name}'`) : k(d, `id = ${I.id}`);
  };
  return e.$$set = (I) => {
    "scopeName" in I && n(0, d = I.scopeName), "isAnalyzed" in I && n(1, m = I.isAnalyzed), "isLoading" in I && n(2, h = I.isLoading), "loadingMessage" in I && n(3, _ = I.loadingMessage), "onAnalyze" in I && n(4, p = I.onAnalyze), "onInsert" in I && n(5, k = I.onInsert), "concepts" in I && n(6, w = I.concepts), "scopeConcepts" in I && n(7, z = I.scopeConcepts);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*concepts*/
    64 && n(18, l = w.reduce((I, J) => I + J.count, 0)), e.$$.dirty[0] & /*concepts*/
    64 && n(17, i = w.some((I) => I.name.startsWith("Concept "))), e.$$.dirty[0] & /*scopeConcepts*/
    128 && n(16, r = z && z.error), e.$$.dirty[0] & /*search, concepts*/
    320 && n(23, o = D.trim() ? w.filter((I) => (I.name ?? "").toLocaleLowerCase().includes(D.trim().toLocaleLowerCase()) || `${I.id ?? ""}`.toLocaleLowerCase().includes(D.trim().toLocaleLowerCase())) : w), e.$$.dirty[0] & /*filteredConcepts*/
    8388608 && n(13, s = [...o].sort((I, J) => J.count - I.count)), e.$$.dirty[0] & /*sortedConcepts*/
    8192 && n(12, a = Math.max(1, Math.ceil(s.length / Ke))), e.$$.dirty[0] & /*currentPage, totalPages*/
    4608 && O > a && n(9, O = 1), e.$$.dirty[0] & /*sortedConcepts, currentPage*/
    8704 && n(15, f = s.slice((O - 1) * Ke, O * Ke)), e.$$.dirty[0] & /*filteredConcepts, selectedConceptIDs*/
    8389632 && n(11, u = o.length > 0 && o.every((I) => E.has(I.id))), e.$$.dirty[0] & /*filteredConcepts, selectedConceptIDs, allFilteredSelected*/
    8391680 && n(14, c = o.some((I) => E.has(I.id)) && !u);
  }, [
    d,
    m,
    h,
    _,
    p,
    k,
    w,
    z,
    D,
    O,
    E,
    u,
    a,
    s,
    c,
    f,
    r,
    i,
    l,
    x,
    T,
    j,
    N,
    o,
    F,
    A,
    W,
    C,
    H,
    B
  ];
}
class Sf extends de {
  constructor(t) {
    super(), ce(
      this,
      t,
      vf,
      wf,
      ue,
      {
        scopeName: 0,
        isAnalyzed: 1,
        isLoading: 2,
        loadingMessage: 3,
        onAnalyze: 4,
        onInsert: 5,
        concepts: 6,
        scopeConcepts: 7
      },
      null,
      [-1, -1]
    );
  }
}
function yr(e, t, n) {
  const l = e.slice();
  return l[13] = t[n], l;
}
function Cf(e) {
  let t;
  return {
    c() {
      t = y("div"), t.textContent = "No scopes available...", b(t, "class", "text-slate-500 dark:text-slate-400 text-sm");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: U,
    d(n) {
      n && M(t);
    }
  };
}
function Mf(e) {
  let t, n = (
    /*scopes*/
    e[2]
  ), l = [];
  for (let i = 0; i < n.length; i += 1)
    l[i] = wr(yr(e, n, i));
  return {
    c() {
      t = y("div");
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      b(t, "class", "space-y-1");
    },
    m(i, r) {
      R(i, t, r);
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
          const s = yr(i, n, o);
          l[o] ? l[o].p(s, r) : (l[o] = wr(s), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(i) {
      i && M(t), xe(l, i);
    }
  };
}
function wr(e) {
  let t, n = (
    /*scope*/
    e[13] + ""
  ), l, i, r, o, s;
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
      t = y("button"), l = V(n), i = P(), b(t, "class", r = "w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 " + /*selectedScope*/
      (e[0] === /*scope*/
      e[13] ? "bg-blue-100 dark:bg-blue-500 text-blue-700 dark:text-white font-medium" : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:bg-slate-700 dark:hover:bg-slate-600"));
    },
    m(f, u) {
      R(f, t, u), g(t, l), g(t, i), o || (s = te(t, "click", a), o = !0);
    },
    p(f, u) {
      e = f, u & /*scopes*/
      4 && n !== (n = /*scope*/
      e[13] + "") && ee(l, n), u & /*selectedScope, scopes*/
      5 && r !== (r = "w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 " + /*selectedScope*/
      (e[0] === /*scope*/
      e[13] ? "bg-blue-100 dark:bg-blue-500 text-blue-700 dark:text-white font-medium" : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:bg-slate-700 dark:hover:bg-slate-600")) && b(t, "class", r);
    },
    d(f) {
      f && M(t), o = !1, s();
    }
  };
}
function zf(e) {
  let t;
  return {
    c() {
      t = y("div"), t.innerHTML = '<div class="w-1/2 text-slate-600 dark:text-slate-400 text-center">Select a scope from the sidebar to explore available data elements.</div>', b(t, "class", "flex w-full h-full items-center justify-center");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: U,
    i: U,
    o: U,
    d(n) {
      n && M(t);
    }
  };
}
function Rf(e) {
  let t, n;
  return t = new Sf({
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
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*selectedScope*/
      1 && (r.scopeName = /*selectedScope*/
      l[0]), i & /*isAnalyzed*/
      512 && (r.isAnalyzed = /*isAnalyzed*/
      l[9]), i & /*isLoading*/
      16 && (r.isLoading = /*isLoading*/
      l[4]), i & /*loadingMessage*/
      32 && (r.loadingMessage = /*loadingMessage*/
      l[5]), i & /*concepts*/
      1024 && (r.concepts = /*concepts*/
      l[10]), i & /*scopeConcepts*/
      8 && (r.scopeConcepts = /*scopeConcepts*/
      l[3]), i & /*onInsert*/
      256 && (r.onInsert = /*onInsert*/
      l[8]), i & /*onAnalyzeScope, selectedScope*/
      129 && (r.onAnalyze = /*func*/
      l[12]), t.$set(r);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function Lf(e) {
  let t, n, l, i, r, o, s, a, f, u, c;
  function d(w, z) {
    return (
      /*scopes*/
      w[2].length > 0 ? Mf : Cf
    );
  }
  let m = d(e), h = m(e);
  const _ = [Rf, zf], p = [];
  function k(w, z) {
    return (
      /*selectedScope*/
      w[0] ? 0 : 1
    );
  }
  return a = k(e), f = p[a] = _[a](e), {
    c() {
      t = y("div"), n = y("div"), l = y("h3"), l.textContent = "Scopes", i = P(), r = y("div"), h.c(), o = P(), s = y("div"), f.c(), b(l, "class", "px-4 py-3 font-semibold uppercase text-slate-900 dark:text-slate-100"), b(r, "class", "px-4"), b(n, "class", "w-1/4 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 flex-shrink-0"), b(s, "class", "flex-auto bg-white dark:bg-slate-900 p-6 flex flex-col h-full"), b(t, "class", u = "flex h-full " + /*width*/
      e[1] + " overflow-hidden");
    },
    m(w, z) {
      R(w, t, z), g(t, n), g(n, l), g(n, i), g(n, r), h.m(r, null), g(t, o), g(t, s), p[a].m(s, null), c = !0;
    },
    p(w, [z]) {
      m === (m = d(w)) && h ? h.p(w, z) : (h.d(1), h = m(w), h && (h.c(), h.m(r, null)));
      let D = a;
      a = k(w), a === D ? p[a].p(w, z) : (ne(), L(p[D], 1, 1, () => {
        p[D] = null;
      }), le(), f = p[a], f ? f.p(w, z) : (f = p[a] = _[a](w), f.c()), S(f, 1), f.m(s, null)), (!c || z & /*width*/
      2 && u !== (u = "flex h-full " + /*width*/
      w[1] + " overflow-hidden")) && b(t, "class", u);
    },
    i(w) {
      c || (S(f), c = !0);
    },
    o(w) {
      L(f), c = !1;
    },
    d(w) {
      w && M(t), h.d(), p[a].d();
    }
  };
}
function Af(e, t, n) {
  let l, i, { width: r = "w-full" } = t, { scopes: o = [] } = t, { selectedScope: s = "" } = t, { scopeConcepts: a = {} } = t, { isLoading: f = !1 } = t, { loadingMessage: u = "" } = t, { onScopeSelect: c = () => {
  } } = t, { onAnalyzeScope: d = () => {
  } } = t, { onInsert: m = () => {
  } } = t;
  const h = (p) => {
    n(0, s = p), c(p);
  }, _ = () => d(s);
  return e.$$set = (p) => {
    "width" in p && n(1, r = p.width), "scopes" in p && n(2, o = p.scopes), "selectedScope" in p && n(0, s = p.selectedScope), "scopeConcepts" in p && n(3, a = p.scopeConcepts), "isLoading" in p && n(4, f = p.isLoading), "loadingMessage" in p && n(5, u = p.loadingMessage), "onScopeSelect" in p && n(6, c = p.onScopeSelect), "onAnalyzeScope" in p && n(7, d = p.onAnalyzeScope), "onInsert" in p && n(8, m = p.onInsert);
  }, e.$$.update = () => {
    e.$$.dirty & /*selectedScope, scopes, onScopeSelect*/
    69 && !s && o.length > 0 && (n(0, s = o[0]), c(s)), e.$$.dirty & /*selectedScope, scopeConcepts*/
    9 && n(9, l = s && a && a.scope_name === s), e.$$.dirty & /*isAnalyzed, scopeConcepts*/
    520 && n(10, i = l && a.concepts ? a.concepts : []);
  }, [
    s,
    r,
    o,
    a,
    f,
    u,
    c,
    d,
    m,
    l,
    i,
    h,
    _
  ];
}
class xf extends de {
  constructor(t) {
    super(), ce(this, t, Af, Lf, ue, {
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
const vr = [
  "now",
  "value",
  "mintime",
  "maxtime",
  "indexvalue"
];
function Nf(e, t, n) {
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
    const r = i.toLowerCase(), o = e.filter((f) => f.toLowerCase().startsWith(r)).sort((f, u) => f.length !== u.length ? f.length - u.length : f.localeCompare(u)).slice(0, 10), s = e.filter((f) => {
      const u = f.toLowerCase();
      return u.includes(r) && !u.startsWith(r);
    }).sort((f, u) => {
      const c = f.toLowerCase().indexOf(r), d = u.toLowerCase().indexOf(r);
      return c !== d ? c - d : f.length !== u.length ? f.length - u.length : f.localeCompare(u);
    }).slice(0, 5), a = [...o, ...s].map((f) => ({
      value: f,
      type: "data_item"
    }));
    return console.log("🔍 getAutocompleteOptions - Data field matches:", a), a;
  }
  if (l = n.match(/#([^\s]*)/), console.log("🔍 getAutocompleteOptions - Constant regex result:", l), l) {
    console.log("🔍 getAutocompleteOptions - Processing constants");
    const i = l[1] || "";
    console.log(
      "🔍 getAutocompleteOptions - Constant search query:",
      i
    );
    const r = i.toLowerCase(), o = vr.filter((f) => f.toLowerCase().startsWith(r)).sort((f, u) => f.length - u.length), s = vr.filter((f) => {
      const u = f.toLowerCase();
      return u.includes(r) && !u.startsWith(r);
    }).sort((f, u) => f.length - u.length), a = [...o, ...s].map((f) => ({
      value: f,
      type: "constant"
    }));
    return console.log("🔍 getAutocompleteOptions - Constant matches:", a), a;
  }
  return console.log("🔍 getAutocompleteOptions - No matches found"), [];
}
function Ef(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $o = { exports: {} };
(function(e, t) {
  (function() {
    function n(r, o, s) {
      var a = null, f = null, u = null, c = null;
      if (s = s || "", !o.length)
        return s || "";
      if (r.some(function(m) {
        m.name;
        var h = m.match instanceof RegExp, _ = h ? m.match : m.match[0], p = h ? null : m.match[1] || null, k = h ? null : m.match[2] || null;
        return a = o.match(_), f = a ? m.name : null, u = p, c = k, !!a;
      }), a) {
        var d = '<span class="' + f + '">' + a[1] + "</span>";
        return u && (d = u + d), c && (d = d + c), n(r, o.slice(a[0].length), s + d);
      } else
        return n(r, o.slice(1), s + o[0]);
    }
    function l(r) {
      var o = r.replace(/^\n+|\n+\s+$/g, ""), s = o.match(/^\s+/);
      if (!s)
        return o;
      var a = o.split(`
`), f = a.map(function(u, c) {
        return !u || /^\s+$/.test(u) ? u : u.replace(s[0], "");
      }).join(`
`);
      return `
` + f;
    }
    function i(r) {
      var o = r.selector || "pre code", s = r.postProcess || function(f) {
        return f;
      }, a = r.preProcess || function(f) {
        return f;
      };
      Array.prototype.slice.call(document.querySelectorAll(o)).forEach(function(f) {
        var u = (typeof r.patterns == "function" ? r.patterns(f) : r.patterns) || {}, c = f.innerText, d = l(c), m = s(n(u, a(d)));
        r.linenums && (m = m.split(`
`).map(function(h, _) {
          if (!_)
            return h;
          var p = _ - 1 + "";
          return p.length < 2 && (p = "0" + p), '<span class="linenum">' + p + "</span> " + h;
        }).join(`
`)), f.innerHTML = m;
      });
    }
    e.exports = i;
  })();
})($o);
var Df = $o.exports;
const ea = /* @__PURE__ */ Ef(Df), ta = [
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
function na(e) {
  return e = e.replaceAll(/<([A-z]+?)>/g, "####TOKEN####$1####ENDTOKEN####"), e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function Sr(e, t, n) {
  const l = e.slice();
  return l[33] = t[n], l[35] = n, l;
}
function Cr(e) {
  let t, n = (
    /*autocompleteOptions*/
    e[6]
  ), l = [];
  for (let i = 0; i < n.length; i += 1)
    l[i] = Mr(Sr(e, n, i));
  return {
    c() {
      t = y("div");
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      b(t, "class", "absolute z-30 w-full mt-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md shadow-xl max-h-48 overflow-y-auto");
    },
    m(i, r) {
      R(i, t, r);
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
          const s = Sr(i, n, o);
          l[o] ? l[o].p(s, r) : (l[o] = Mr(s), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(i) {
      i && M(t), xe(l, i), e[23](null);
    }
  };
}
function Mr(e) {
  let t, n, l, i = (
    /*option*/
    e[33].value + ""
  ), r, o, s, a = (
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
  function _(...k) {
    return (
      /*keydown_handler*/
      e[21](
        /*option*/
        e[33],
        ...k
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
      t = y("div"), n = y("div"), l = y("span"), r = V(i), o = P(), s = y("span"), f = V(a), u = P(), b(l, "class", "font-mono text-sm"), b(s, "class", "text-xs px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"), b(n, "class", "flex items-center justify-between"), b(t, "class", c = "px-4 py-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors " + /*index*/
      (e[35] === /*selectedIndex*/
      e[7] ? "bg-blue-600 text-white" : "text-slate-700 dark:text-slate-200")), b(t, "role", "button"), b(t, "tabindex", "0");
    },
    m(k, w) {
      R(k, t, w), g(t, n), g(n, l), g(l, r), g(n, o), g(n, s), g(s, f), g(t, u), d || (m = [
        te(t, "click", h),
        te(t, "keydown", _),
        te(t, "mouseenter", p)
      ], d = !0);
    },
    p(k, w) {
      e = k, w[0] & /*autocompleteOptions*/
      64 && i !== (i = /*option*/
      e[33].value + "") && ee(r, i), w[0] & /*autocompleteOptions*/
      64 && a !== (a = /*option*/
      e[33].type === "data_item" ? "field" : "const") && ee(f, a), w[0] & /*selectedIndex*/
      128 && c !== (c = "px-4 py-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors " + /*index*/
      (e[35] === /*selectedIndex*/
      e[7] ? "bg-blue-600 text-white" : "text-slate-700 dark:text-slate-200")) && b(t, "class", c);
    },
    d(k) {
      k && M(t), d = !1, ye(m);
    }
  };
}
function Tf(e) {
  let t, n, l, i, r, o, s, a, f, u, c, d, m, h, _, p, k, w, z, D, O, x = (
    /*showAutocomplete*/
    e[8] && /*autocompleteOptions*/
    e[6].length > 0 && Cr(e)
  );
  return d = new _e({
    props: { icon: Go, class: "inline mr-2" }
  }), p = new _e({
    props: { icon: Ba, class: "inline mr-2" }
  }), {
    c() {
      t = y("div"), n = y("div"), n.innerHTML = '<h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100 pr-2">TempoQL Query</h3>', l = P(), i = y("div"), r = y("textarea"), o = P(), s = y("div"), a = P(), x && x.c(), f = P(), u = y("div"), c = y("button"), Z(d.$$.fragment), m = V(`
        History`), h = P(), _ = y("button"), Z(p.$$.fragment), k = V(`
        Run Query`), b(n, "class", "flex items-center mb-4 gap-2 shrink-0"), b(r, "id", "text-input"), b(r, "class", "w-full h-full p-4 pb-16 bg-transparent font-mono text-sm bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-slate-500 dark:placeholder-slate-400 resize-none overflow-hidden min-h-[120px] relative z-20 svelte-1w5ogy4"), b(r, "placeholder", "// Write your Tempo-QL query here... (Ctrl+Z to undo, Ctrl+Y to redo)"), b(r, "rows", "1"), $(r, "color", "transparent"), $(r, "caret-color", "currentColor"), b(s, "class", "absolute top-0 left-0 w-full h-full p-4 pb-16 font-mono text-sm pointer-events-none bg-transparent z-10 text-wrap whitespace-pre-wrap break-words text-slate-900 dark:text-slate-100 svelte-1w5ogy4"), b(
        s,
        "id",
        /*highlightedViewID*/
        e[9]
      ), b(c, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-slate-200 hover:bg-slate-200/50 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white"), b(c, "title", "View query history"), b(_, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white"), _.disabled = w = !/*value*/
      e[0].trim(), ie(_, "opacity-50", !/*value*/
      e[0].trim()), ie(_, "cursor-not-allowed", !/*value*/
      e[0].trim()), b(u, "class", "absolute right-0 bottom-0 mr-4 mb-4 flex justify-end items-center gap-2 z-50"), b(i, "class", "relative flex-auto min-h-0"), b(t, "class", "flex flex-col w-full h-full p-4 mb-2");
    },
    m(T, E) {
      R(T, t, E), g(t, n), g(t, l), g(t, i), g(i, r), e[17](r), jt(
        r,
        /*value*/
        e[0]
      ), g(i, o), g(i, s), e[19](s), g(i, a), x && x.m(i, null), g(i, f), g(i, u), g(u, c), Y(d, c, null), g(c, m), g(u, h), g(u, _), Y(p, _, null), g(_, k), z = !0, D || (O = [
        te(
          r,
          "input",
          /*textarea_1_input_handler*/
          e[18]
        ),
        te(
          r,
          "input",
          /*handleInput*/
          e[10]
        ),
        te(
          r,
          "keydown",
          /*handleKeydown*/
          e[11]
        ),
        te(c, "click", function() {
          ot(
            /*onHistoryClick*/
            e[2]
          ) && e[2].apply(this, arguments);
        }),
        te(_, "click", function() {
          ot(
            /*onRun*/
            e[1]
          ) && e[1].apply(this, arguments);
        })
      ], D = !0);
    },
    p(T, E) {
      e = T, E[0] & /*value*/
      1 && jt(
        r,
        /*value*/
        e[0]
      ), /*showAutocomplete*/
      e[8] && /*autocompleteOptions*/
      e[6].length > 0 ? x ? x.p(e, E) : (x = Cr(e), x.c(), x.m(i, f)) : x && (x.d(1), x = null), (!z || E[0] & /*value*/
      1 && w !== (w = !/*value*/
      e[0].trim())) && (_.disabled = w), (!z || E[0] & /*value*/
      1) && ie(_, "opacity-50", !/*value*/
      e[0].trim()), (!z || E[0] & /*value*/
      1) && ie(_, "cursor-not-allowed", !/*value*/
      e[0].trim());
    },
    i(T) {
      z || (S(d.$$.fragment, T), S(p.$$.fragment, T), z = !0);
    },
    o(T) {
      L(d.$$.fragment, T), L(p.$$.fragment, T), z = !1;
    },
    d(T) {
      T && M(t), e[17](null), e[19](null), x && x.d(), X(d), X(p), D = !1, ye(O);
    }
  };
}
function qf(e, t, n) {
  let { value: l = "" } = t, { onInput: i = () => {
  } } = t, { width: r = "w-full max-w-2xl" } = t, { dataFields: o = [] } = t, { onRun: s = () => {
  } } = t, { onExplain: a = () => {
  } } = t, { onHistoryClick: f = () => {
  } } = t, u, c, d, m = [], h = 0, _ = !1, p = 0, k = "highlightView-" + new Array(20).fill(0).map(() => Math.floor(Math.random() * 10)).join(""), w = [], z = -1, D = !1;
  mt(() => {
    x(""), document.addEventListener("click", O);
  }), Aa(() => {
    document.removeEventListener("click", O);
  });
  function O(q) {
    if (c && u) {
      const ae = q.target, me = c.contains(ae), Ce = u.contains(ae);
      (!me || Ce && _) && (console.log("🖱️ Click detected - closing autocomplete"), n(8, _ = !1));
    }
  }
  function x(q) {
    if (D) {
      D = !1;
      return;
    }
    w = w.slice(0, z + 1), w.push(q), z = w.length - 1, w.length > 50 && (w = w.slice(-50), z = w.length - 1), console.log("📝 Added to history:", q, "Index:", z);
  }
  function T() {
    if (z > 0) {
      D = !0, z--;
      const q = w[z];
      console.log("↶ Undo to:", q), n(0, l = q), i(q), u && (n(3, u.value = q, u), u.focus());
    }
  }
  function E() {
    if (z < w.length - 1) {
      D = !0, z++;
      const q = w[z];
      console.log("↷ Redo to:", q), n(0, l = q), i(q), u && (n(3, u.value = q, u), u.focus());
    }
  }
  function j(q) {
    const ae = q.target, me = ae.value;
    console.log("🔍 handleInput - New value:", me), console.log("🔍 handleInput - Cursor position:", ae.selectionStart), x(me), n(0, l = me), i(me), p = ae.selectionStart || 0, console.log("🔍 handleInput - Updated cursor position:", p), N(me, p);
  }
  function N(q, ae) {
    console.log("🔍 updateAutocompleteOptions - Text:", q), console.log("🔍 updateAutocompleteOptions - Position:", ae);
    const me = q.substring(0, ae), Ce = q.substring(ae);
    console.log("🔍 updateAutocompleteOptions - Before cursor:", me), console.log("🔍 updateAutocompleteOptions - After cursor:", Ce);
    const Me = me.match(/([^\s]*)$/), Ae = Me ? Me[1] : "";
    console.log("🔍 updateAutocompleteOptions - Current word:", Ae), console.log("🔍 updateAutocompleteOptions - Data fields available:", o), Ae.length > 0 ? (n(6, m = Nf(o, Ae, me)), console.log("🔍 updateAutocompleteOptions - Autocomplete options:", m), n(8, _ = m.length > 0), n(7, h = 0), console.log("🔍 updateAutocompleteOptions - Show autocomplete:", _)) : (n(8, _ = !1), console.log("🔍 updateAutocompleteOptions - No current word, hiding autocomplete"));
  }
  function F(q) {
    if (console.log("🔍 handleKeydown - Key pressed:", q.key), console.log("🔍 handleKeydown - Show autocomplete:", _), console.log("🔍 handleKeydown - Options count:", m.length), q.ctrlKey || q.metaKey) {
      if (q.key === "z" && !q.shiftKey) {
        q.preventDefault(), console.log("⌨️ Ctrl+Z pressed - Undo"), T();
        return;
      } else if (q.key === "y" || q.key === "z" && q.shiftKey) {
        q.preventDefault(), console.log("⌨️ Ctrl+Y or Ctrl+Shift+Z pressed - Redo"), E();
        return;
      }
    }
    if (!_) {
      console.log("🔍 handleKeydown - Autocomplete not shown, ignoring key");
      return;
    }
    switch (q.key) {
      case "ArrowDown":
        q.preventDefault(), n(7, h = (h + 1) % m.length), console.log("🔍 handleKeydown - ArrowDown, new selectedIndex:", h);
        break;
      case "ArrowUp":
        q.preventDefault(), n(7, h = h === 0 ? m.length - 1 : h - 1), console.log("🔍 handleKeydown - ArrowUp, new selectedIndex:", h);
        break;
      case "Enter":
        _ && (q.preventDefault(), console.log("🔍 handleKeydown - Enter pressed, selecting option:", m[h]), A(m[h]));
        break;
      case "Escape":
        n(8, _ = !1), console.log("🔍 handleKeydown - Escape pressed, hiding autocomplete");
        break;
      case "Tab":
        _ && (q.preventDefault(), console.log("🔍 handleKeydown - Tab pressed, selecting option:", m[h]), A(m[h]));
        break;
    }
  }
  function A(q) {
    console.log("🔍 selectAutocompleteOption - Selected option:", q), console.log("🔍 selectAutocompleteOption - Current value:", l), console.log("🔍 selectAutocompleteOption - Cursor position:", p);
    const ae = l.substring(0, p), me = l.substring(p);
    console.log("🔍 selectAutocompleteOption - Before cursor:", ae), console.log("🔍 selectAutocompleteOption - After cursor:", me);
    const Ce = ae.match(/([^\s]*)$/), Me = Ce ? Ce[1] : "", Ae = ae.length - Me.length;
    console.log("🔍 selectAutocompleteOption - Current word:", Me), console.log("🔍 selectAutocompleteOption - Word start position:", Ae);
    let we;
    if (q.type === "data_item")
      if (Me.includes("{")) {
        const Re = ae.match(/\{([^}]*?)(?:,\s*([^},]*))?$/);
        Re ? Re[2] ? we = ae.substring(0, Re.index + Re[1].length + 2) + q.value : we = ae.substring(0, Re.index + 1) + q.value : we = ae + q.value;
      } else
        we = ae + "{" + q.value;
    else
      we = ae.substring(0, Ae) + "#" + q.value;
    console.log("🔍 selectAutocompleteOption - Replacement:", we);
    const Pe = we + me;
    console.log("🔍 selectAutocompleteOption - New value:", Pe), n(0, l = Pe), i(Pe);
    const ze = we.length;
    console.log("🔍 selectAutocompleteOption - New cursor position:", ze), setTimeout(
      () => {
        u && (u.setSelectionRange(ze, ze), u.focus(), console.log("🔍 selectAutocompleteOption - Cursor position set"));
      },
      0
    ), n(8, _ = !1), console.log("🔍 selectAutocompleteOption - Autocomplete hidden");
  }
  function W(q) {
    Se[q ? "unshift" : "push"](() => {
      u = q, n(3, u), n(0, l);
    });
  }
  function C() {
    l = this.value, n(0, l);
  }
  function H(q) {
    Se[q ? "unshift" : "push"](() => {
      d = q, n(4, d), n(0, l), n(9, k);
    });
  }
  const B = (q) => A(q), I = (q, ae) => {
    (ae.key === "Enter" || ae.key === " ") && (ae.preventDefault(), A(q));
  }, J = (q) => n(7, h = q);
  function K(q) {
    Se[q ? "unshift" : "push"](() => {
      c = q, n(5, c);
    });
  }
  return e.$$set = (q) => {
    "value" in q && n(0, l = q.value), "onInput" in q && n(13, i = q.onInput), "width" in q && n(14, r = q.width), "dataFields" in q && n(15, o = q.dataFields), "onRun" in q && n(1, s = q.onRun), "onExplain" in q && n(16, a = q.onExplain), "onHistoryClick" in q && n(2, f = q.onHistoryClick);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*highlightedView, value*/
    17 && d && l !== void 0) {
      let q = l;
      n(4, d.innerText = na(q), d), ea({
        selector: `#${k}`,
        patterns: ta
      });
    }
    e.$$.dirty[0] & /*textarea, value*/
    9 && u && l !== void 0 && u.value !== l && (n(3, u.value = l, u), x(l));
  }, [
    l,
    s,
    f,
    u,
    d,
    c,
    m,
    h,
    _,
    k,
    j,
    F,
    A,
    i,
    r,
    o,
    a,
    W,
    C,
    H,
    B,
    I,
    J,
    K
  ];
}
class Of extends de {
  constructor(t) {
    super(), ce(
      this,
      t,
      qf,
      Tf,
      ue,
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
function Hf(e) {
  return e === 0 ? !0 : e;
}
function it(e) {
  return Hf(e) ? Array.isArray(e) ? (t) => e.map((n) => typeof n != "function" ? t[n] : n(t)) : typeof e != "function" ? (t) => t[e] : e : null;
}
function Pf(e) {
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
  return Pf(Object.entries(e).filter(([n, l]) => l !== void 0 && t[n] === void 0));
}
function jf(e, t = 300) {
  let n;
  return (...l) => {
    clearTimeout(n), n = setTimeout(() => {
      e.apply(this, l);
    }, t);
  };
}
function If(e, t, { sort: n = !1 } = {}) {
  if (!Array.isArray(e))
    throw new TypeError(`The first argument of calcUniques() must be an array. You passed in a ${typeof e}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(t) || t === void 0 || t === null)
    throw new TypeError("The second argument of calcUniques() must be an object with field names as keys as accessor functions as values.");
  const l = {}, i = Object.keys(t), r = i.length;
  let o, s, a, f, u, c, d;
  const m = e.length;
  for (o = 0; o < r; o += 1) {
    for (d = /* @__PURE__ */ new Set(), f = i[o], u = t[f], s = 0; s < m; s += 1)
      if (c = u(e[s]), Array.isArray(c)) {
        const _ = c.length;
        for (a = 0; a < _; a += 1)
          d.add(c[a]);
      } else
        d.add(c);
    const h = Array.from(d);
    l[f] = n === !0 ? h.sort() : h;
  }
  return l;
}
function Ff(e, t) {
  if (!Array.isArray(e))
    throw new TypeError(`The first argument of calcExtents() must be an array. You passed in a ${typeof e}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(t) || t === void 0 || t === null)
    throw new TypeError("The second argument of calcExtents() must be an object with field names as keys as accessor functions as values.");
  const n = {}, l = Object.keys(t), i = l.length;
  let r, o, s, a, f, u, c, d;
  const m = e.length;
  for (r = 0; r < i; r += 1) {
    for (a = l[r], c = t[a], f = null, u = null, o = 0; o < m; o += 1)
      if (d = c(e[o]), Array.isArray(d)) {
        const h = d.length;
        for (s = 0; s < h; s += 1)
          d[s] !== !1 && d[s] !== void 0 && d[s] !== null && Number.isNaN(d[s]) === !1 && ((f === null || d[s] < f) && (f = d[s]), (u === null || d[s] > u) && (u = d[s]));
      } else
        d !== !1 && d !== void 0 && d !== null && Number.isNaN(d) === !1 && ((f === null || d < f) && (f = d), (u === null || d > u) && (u = d));
    n[a] = [f, u];
  }
  return n;
}
function bn(e, t) {
  return e.length !== t.length ? !1 : e.every((n) => t.includes(n));
}
function la(e) {
  return !!(typeof e.bandwidth == "function" || bn(Object.keys(e), ["domain", "range", "unknown", "copy"]));
}
function Qf(e, t, n) {
  const l = Object.keys(n).reduce((r, o) => {
    const s = la(n[o]) === !0 ? "ordinal" : "other";
    return r[s] || (r[s] = {}), r[s][o] = t[o], r;
  }, { ordinal: !1, other: !1 });
  let i = {};
  return l.ordinal && (i = If(e, l.ordinal)), l.other && (i = { ...i, ...Ff(e, l.other) }), i;
}
function Bf(e = [], t) {
  return Array.isArray(t) === !0 ? t.map((n, l) => n === null ? e[l] : n) : e;
}
function Nl(e) {
  return function([n, l]) {
    return typeof l == "function" && (l = l(n[e])), n ? Bf(n[e], l) : l;
  };
}
function Hl(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Vf(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ia(e) {
  let t, n, l;
  e.length !== 2 ? (t = Hl, n = (s, a) => Hl(e(s), a), l = (s, a) => e(s) - a) : (t = e === Hl || e === Vf ? e : Gf, n = e, l = e);
  function i(s, a, f = 0, u = s.length) {
    if (f < u) {
      if (t(a, a) !== 0)
        return u;
      do {
        const c = f + u >>> 1;
        n(s[c], a) < 0 ? f = c + 1 : u = c;
      } while (f < u);
    }
    return f;
  }
  function r(s, a, f = 0, u = s.length) {
    if (f < u) {
      if (t(a, a) !== 0)
        return u;
      do {
        const c = f + u >>> 1;
        n(s[c], a) <= 0 ? f = c + 1 : u = c;
      } while (f < u);
    }
    return f;
  }
  function o(s, a, f = 0, u = s.length) {
    const c = i(s, a, f, u - 1);
    return c > f && l(s[c - 1], a) > -l(s[c], a) ? c - 1 : c;
  }
  return { left: i, center: o, right: r };
}
function Gf() {
  return 0;
}
function Wf(e) {
  return e === null ? NaN : +e;
}
const Kf = ia(Hl), Yf = Kf.right;
ia(Wf).center;
const Xf = Yf;
class zr extends Map {
  constructor(t, n = Jf) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [l, i] of t)
        this.set(l, i);
  }
  get(t) {
    return super.get(Rr(this, t));
  }
  has(t) {
    return super.has(Rr(this, t));
  }
  set(t, n) {
    return super.set(Uf(this, t), n);
  }
  delete(t) {
    return super.delete(Zf(this, t));
  }
}
function Rr({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) ? e.get(l) : n;
}
function Uf({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) ? e.get(l) : (e.set(l, n), n);
}
function Zf({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) && (n = e.get(l), e.delete(l)), n;
}
function Jf(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const $f = Math.sqrt(50), eu = Math.sqrt(10), tu = Math.sqrt(2);
function Wl(e, t, n) {
  const l = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(l)), r = l / Math.pow(10, i), o = r >= $f ? 10 : r >= eu ? 5 : r >= tu ? 2 : 1;
  let s, a, f;
  return i < 0 ? (f = Math.pow(10, -i) / o, s = Math.round(e * f), a = Math.round(t * f), s / f < e && ++s, a / f > t && --a, f = -f) : (f = Math.pow(10, i) * o, s = Math.round(e / f), a = Math.round(t / f), s * f < e && ++s, a * f > t && --a), a < s && 0.5 <= n && n < 2 ? Wl(e, t, n * 2) : [s, a, f];
}
function nu(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0))
    return [];
  if (e === t)
    return [e];
  const l = t < e, [i, r, o] = l ? Wl(t, e, n) : Wl(e, t, n);
  if (!(r >= i))
    return [];
  const s = r - i + 1, a = new Array(s);
  if (l)
    if (o < 0)
      for (let f = 0; f < s; ++f)
        a[f] = (r - f) / -o;
    else
      for (let f = 0; f < s; ++f)
        a[f] = (r - f) * o;
  else if (o < 0)
    for (let f = 0; f < s; ++f)
      a[f] = (i + f) / -o;
  else
    for (let f = 0; f < s; ++f)
      a[f] = (i + f) * o;
  return a;
}
function vi(e, t, n) {
  return t = +t, e = +e, n = +n, Wl(e, t, n)[2];
}
function lu(e, t, n) {
  t = +t, e = +e, n = +n;
  const l = t < e, i = l ? vi(t, e, n) : vi(e, t, n);
  return (l ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Ye(e, t, n) {
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
const Lr = Symbol("implicit");
function Zl() {
  var e = new zr(), t = [], n = [], l = Lr;
  function i(r) {
    let o = e.get(r);
    if (o === void 0) {
      if (l !== Lr)
        return l;
      e.set(r, o = t.push(r) - 1);
    }
    return n[o % n.length];
  }
  return i.domain = function(r) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new zr();
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
function Di() {
  var e = Zl().unknown(void 0), t = e.domain, n = e.range, l = 0, i = 1, r, o, s = !1, a = 0, f = 0, u = 0.5;
  delete e.unknown;
  function c() {
    var d = t().length, m = i < l, h = m ? i : l, _ = m ? l : i;
    r = (_ - h) / Math.max(1, d - a + f * 2), s && (r = Math.floor(r)), h += (_ - h - r * (d - a)) * u, o = r * (1 - a), s && (h = Math.round(h), o = Math.round(o));
    var p = Ye(d).map(function(k) {
      return h + r * k;
    });
    return n(m ? p.reverse() : p);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), c()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([l, i] = d, l = +l, i = +i, c()) : [l, i];
  }, e.rangeRound = function(d) {
    return [l, i] = d, l = +l, i = +i, s = !0, c();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return r;
  }, e.round = function(d) {
    return arguments.length ? (s = !!d, c()) : s;
  }, e.padding = function(d) {
    return arguments.length ? (a = Math.min(1, f = +d), c()) : a;
  }, e.paddingInner = function(d) {
    return arguments.length ? (a = Math.min(1, d), c()) : a;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (f = +d, c()) : f;
  }, e.align = function(d) {
    return arguments.length ? (u = Math.max(0, Math.min(1, d)), c()) : u;
  }, e.copy = function() {
    return Di(t(), [l, i]).round(s).paddingInner(a).paddingOuter(f).align(u);
  }, Ul.apply(c(), arguments);
}
function iu(e) {
  return function() {
    return e;
  };
}
function ru(e) {
  return +e;
}
var Ar = [0, 1];
function Fe(e) {
  return e;
}
function Si(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : iu(isNaN(t) ? NaN : 0.5);
}
function ou(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(l) {
    return Math.max(e, Math.min(t, l));
  };
}
function au(e, t, n) {
  var l = e[0], i = e[1], r = t[0], o = t[1];
  return i < l ? (l = Si(i, l), r = n(o, r)) : (l = Si(l, i), r = n(r, o)), function(s) {
    return r(l(s));
  };
}
function su(e, t, n) {
  var l = Math.min(e.length, t.length) - 1, i = new Array(l), r = new Array(l), o = -1;
  for (e[l] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < l; )
    i[o] = Si(e[o], e[o + 1]), r[o] = n(t[o], t[o + 1]);
  return function(s) {
    var a = Xf(e, s, 1, l) - 1;
    return r[a](i[a](s));
  };
}
function ra(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function oa() {
  var e = Ar, t = Ar, n = xi, l, i, r, o = Fe, s, a, f;
  function u() {
    var d = Math.min(e.length, t.length);
    return o !== Fe && (o = ou(e[0], e[d - 1])), s = d > 2 ? su : au, a = f = null, c;
  }
  function c(d) {
    return d == null || isNaN(d = +d) ? r : (a || (a = s(e.map(l), t, n)))(l(o(d)));
  }
  return c.invert = function(d) {
    return o(i((f || (f = s(t, e.map(l), Gl)))(d)));
  }, c.domain = function(d) {
    return arguments.length ? (e = Array.from(d, ru), u()) : e.slice();
  }, c.range = function(d) {
    return arguments.length ? (t = Array.from(d), u()) : t.slice();
  }, c.rangeRound = function(d) {
    return t = Array.from(d), n = Us, u();
  }, c.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : Fe, u()) : o !== Fe;
  }, c.interpolate = function(d) {
    return arguments.length ? (n = d, u()) : n;
  }, c.unknown = function(d) {
    return arguments.length ? (r = d, c) : r;
  }, function(d, m) {
    return l = d, i = m, u();
  };
}
function fu() {
  return oa()(Fe, Fe);
}
function uu(e, t, n, l) {
  var i = lu(e, t, n), r;
  switch (l = Fl(l ?? ",f"), l.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return l.precision == null && !isNaN(r = Ss(i, o)) && (l.precision = r), Yo(l, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      l.precision == null && !isNaN(r = Cs(i, Math.max(Math.abs(e), Math.abs(t)))) && (l.precision = r - (l.type === "e"));
      break;
    }
    case "f":
    case "%": {
      l.precision == null && !isNaN(r = Xo(i)) && (l.precision = r - (l.type === "%") * 2);
      break;
    }
  }
  return he(l);
}
function aa(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var l = t();
    return nu(l[0], l[l.length - 1], n ?? 10);
  }, e.tickFormat = function(n, l) {
    var i = t();
    return uu(i[0], i[i.length - 1], n ?? 10, l);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var l = t(), i = 0, r = l.length - 1, o = l[i], s = l[r], a, f, u = 10;
    for (s < o && (f = o, o = s, s = f, f = i, i = r, r = f); u-- > 0; ) {
      if (f = vi(o, s, n), f === a)
        return l[i] = o, l[r] = s, t(l);
      if (f > 0)
        o = Math.floor(o / f) * f, s = Math.ceil(s / f) * f;
      else if (f < 0)
        o = Math.ceil(o * f) / f, s = Math.floor(s * f) / f;
      else
        break;
      a = f;
    }
    return e;
  }, e;
}
function rt() {
  var e = fu();
  return e.copy = function() {
    return ra(e, rt());
  }, Ul.apply(e, arguments), aa(e);
}
function xr(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function cu(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function du(e) {
  return e < 0 ? -e * e : e * e;
}
function mu(e) {
  var t = e(Fe, Fe), n = 1;
  function l() {
    return n === 1 ? e(Fe, Fe) : n === 0.5 ? e(cu, du) : e(xr(n), xr(1 / n));
  }
  return t.exponent = function(i) {
    return arguments.length ? (n = +i, l()) : n;
  }, aa(t);
}
function sa() {
  var e = mu(oa());
  return e.copy = function() {
    return ra(e, sa()).exponent(e.exponent());
  }, Ul.apply(e, arguments), e;
}
function bu() {
  return sa.apply(null, arguments).exponent(0.5);
}
const hn = {
  x: rt,
  y: rt,
  z: rt,
  r: bu
};
function hu(e) {
  return e.constant ? "symlog" : e.base ? "log" : e.exponent ? e.exponent() === 0.5 ? "sqrt" : "pow" : "other";
}
function Nr(e) {
  return e;
}
function gu(e) {
  return (t) => Math.log(e * t);
}
function _u(e) {
  return (t) => e * Math.exp(t);
}
function pu(e) {
  return (t) => Math.sign(t) * Math.log1p(Math.abs(t / e));
}
function ku(e) {
  return (t) => Math.sign(t) * Math.expm1(Math.abs(t)) * e;
}
function El(e) {
  return function(n) {
    return n < 0 ? -Math.pow(-n, e) : Math.pow(n, e);
  };
}
function yu(e) {
  const t = hu(e);
  if (t === "log") {
    const n = Math.sign(e.domain()[0]);
    return { lift: gu(n), ground: _u(n), scaleType: t };
  }
  return t === "pow" ? { lift: El(1), ground: El(1 / 1), scaleType: t } : t === "sqrt" ? { lift: El(0.5), ground: El(1 / 0.5), scaleType: t } : t === "symlog" ? { lift: pu(1), ground: ku(1), scaleType: t } : { lift: Nr, ground: Nr, scaleType: t };
}
function Kl(e) {
  return e.replace(/^\w/, (t) => t.toUpperCase());
}
function ve(e, t = "") {
  return `scale${Kl(t)}${Kl(e)}`;
}
function fa(e) {
  if (typeof e.bandwidth == "function")
    return typeof e.paddingInner == "function" ? ve("band") : ve("point");
  if (bn(Object.keys(e), ["domain", "range", "unknown", "copy"]))
    return ve("ordinal");
  let t = "";
  if (e.interpolator && (e.domain().length === 3 ? t = "diverging" : t = "sequential"), e.quantiles)
    return ve("quantile", t);
  if (e.thresholds)
    return ve("quantize", t);
  if (e.constant)
    return ve("symlog", t);
  if (e.base)
    return ve("log", t);
  if (e.exponent)
    return e.exponent() === 0.5 ? ve("sqrt", t) : ve("pow", t);
  if (bn(Object.keys(e), ["domain", "range", "invertExtent", "unknown", "copy"]))
    return ve("threshold");
  if (bn(Object.keys(e), ["invert", "range", "domain", "unknown", "copy", "ticks", "tickFormat", "nice"]))
    return ve("identity");
  if (bn(Object.keys(e), [
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
    return ve("radial");
  if (t)
    return ve(t);
  if (e.domain()[0] instanceof Date) {
    const n = /* @__PURE__ */ new Date();
    let l;
    return n.getDay = () => l = "time", n.getUTCDay = () => l = "utc", e.tickFormat(0, "%a")(n), ve(l);
  }
  return ve("linear");
}
const wu = ["scaleThreshold", "scaleQuantile", "scaleQuantize", "scaleSequentialQuantile"];
function vu(e, t) {
  if (typeof e.range != "function")
    throw console.log(e), new Error("Scale method `range` must be a function");
  if (typeof e.domain != "function")
    throw new Error("Scale method `domain` must be a function");
  if (!Array.isArray(t) || wu.includes(fa(e)) || la(e) === !0)
    return e.domain();
  const { lift: n, ground: l } = yu(e), i = e.domain()[0], r = Object.prototype.toString.call(i) === "[object Date]", [o, s] = e.domain().map((m) => n(r ? m.getTime() : m)), [a, f] = e.range(), u = t[0] || 0, c = t[1] || 0, d = (s - o) / (Math.abs(f - a) - u - c);
  return [o - u * d, c * d + s].map((m) => l(r ? new Date(m) : m));
}
function Su(e, t, n, l, i) {
  let r, o;
  return i === !0 ? (r = 0, o = 100) : (r = e === "r" ? 1 : 0, o = e === "y" ? n : e === "r" ? 25 : t), l === !0 ? [o, r] : [r, o];
}
function Cu(e, t, n, l, i, r) {
  return i ? typeof i == "function" ? i({ width: t, height: n }) : i : Su(e, t, n, l, r);
}
function Dl(e) {
  return function([n, l, i, r, o, s, a, f, u, c]) {
    if (l === null)
      return null;
    const d = Cu(e, a, f, s, u, c), m = n === hn[e] ? n() : n.copy();
    return m.domain(i), (!m.interpolator || typeof m.interpolator == "function" && m.interpolator().name.startsWith("identity")) && m.range(d), r && m.domain(vu(m, r)), (o === !0 || typeof o == "number") && (typeof m.nice == "function" ? m.nice(typeof o == "number" ? o : void 0) : console.error(`[Layer Cake] You set \`${e}Nice: true\` but the ${e}Scale does not have a \`.nice\` method. Ignoring...`)), m;
  };
}
function Tl([e, t]) {
  return (n) => {
    const l = e(n);
    return Array.isArray(l) ? l.map((i) => t(i)) : t(l);
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
const Ie = "    ";
function Mu(e) {
  const { r: t, g: n, b: l, opacity: i } = Bl(e);
  return [t, n, l].every((r) => r >= 0 && r <= 255) ? { r: t, g: n, b: l, o: i } : !1;
}
function zu({ r: e, g: t, b: n }) {
  return (0.2126 * e + 0.7152 * t + 0.0722 * n) / 255 > 0.6 ? "black" : "white";
}
function Ru(e) {
  console.log("/********* LayerCake Debug ************/"), console.log("Bounding box:"), Lu(e.boundingBox), console.log(`Scales:
`), Object.keys(e.activeGetters).forEach((t) => {
    Au(t, e[`${t}Scale`], e[t]);
  }), console.log(`/************ End LayerCake Debug ***************/
`);
}
function Lu(e) {
  Object.entries(e).forEach(([t, n]) => {
    console.log(`${Ie}${t}:`, n);
  });
}
function Au(e, t, n) {
  const l = fa(t);
  console.log(`${Ie}${e}:`), console.log(`${Ie}${Ie}Accessor: "${n.toString()}"`), console.log(`${Ie}${Ie}Type: ${l}`), Er(t, "domain"), Er(t, "range", " ");
}
function Er(e, t, n = "") {
  const l = e[t](), i = Nu(l);
  i ? xu(i, t, l) : console.log(`${Ie}${Ie}${Kl(t)}:${n}`, l);
}
function xu(e, t, n) {
  console.log(
    `${Ie}${Ie}${Kl(t)}:    %cArray%c(${n.length}) ` + e[0] + "%c ]",
    "color: #1377e4",
    "color: #737373",
    "color: #1478e4",
    ...e[1],
    "color: #1478e4"
  );
}
function Nu(e) {
  const t = [], n = e.map((l, i) => {
    const r = Mu(l);
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
      (l) => `background-color: rgba(${l.r}, ${l.g}, ${l.b}, ${l.o}); color:${zu(l)};`
    )
  ] : null;
}
const Eu = (e) => ({
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
}), Dr = (e) => ({
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
function Tr(e) {
  let t, n, l;
  const i = (
    /*#slots*/
    e[153].default
  ), r = Te(
    i,
    e,
    /*$$scope*/
    e[152],
    Dr
  );
  return {
    c() {
      t = y("div"), r && r.c(), b(t, "class", "layercake-container svelte-vhzpsp"), Pl(() => (
        /*div_elementresize_handler*/
        e[155].call(t)
      )), $(
        t,
        "position",
        /*position*/
        e[5]
      ), $(
        t,
        "top",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), $(
        t,
        "right",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), $(
        t,
        "bottom",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), $(
        t,
        "left",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), $(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[4] === !1 ? "none" : null
      );
    },
    m(o, s) {
      R(o, t, s), r && r.m(t, null), e[154](t), n = Ra(
        t,
        /*div_elementresize_handler*/
        e[155].bind(t)
      ), l = !0;
    },
    p(o, s) {
      r && r.p && (!l || s[0] & /*element, $activeGetters_d, $_x, $_y, $_z, $_r, $_custom, $_data, $_xNice, $_yNice, $_zNice, $_rNice, $_xReverse, $_yReverse, $_zReverse, $_rReverse, $_xPadding, $_yPadding, $_zPadding, $_rPadding, $_flatData, $_config, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
      2147483588 | s[1] & /*$width_d, $height_d, $aspectRatio_d, $_containerWidth, $_containerHeight, $_percentRange, $padding_d, $extents_d, $xDomain_d, $yDomain_d, $zDomain_d, $rDomain_d, $xRange_d, $yRange_d, $zRange_d, $rRange_d, $xGet_d, $yGet_d, $zGet_d, $rGet_d*/
      1048575 | s[4] & /*$$scope*/
      268435456) && Oe(
        r,
        i,
        o,
        /*$$scope*/
        o[152],
        l ? qe(
          i,
          /*$$scope*/
          o[152],
          s,
          Eu
        ) : He(
          /*$$scope*/
          o[152]
        ),
        Dr
      ), s[0] & /*position*/
      32 && $(
        t,
        "position",
        /*position*/
        o[5]
      ), s[0] & /*position*/
      32 && $(
        t,
        "top",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), s[0] & /*position*/
      32 && $(
        t,
        "right",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), s[0] & /*position*/
      32 && $(
        t,
        "bottom",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), s[0] & /*position*/
      32 && $(
        t,
        "left",
        /*position*/
        o[5] === "absolute" ? "0" : null
      ), s[0] & /*pointerEvents*/
      16 && $(
        t,
        "pointer-events",
        /*pointerEvents*/
        o[4] === !1 ? "none" : null
      );
    },
    i(o) {
      l || (S(r, o), l = !0);
    },
    o(o) {
      L(r, o), l = !1;
    },
    d(o) {
      o && M(t), r && r.d(o), e[154](null), n();
    }
  };
}
function Du(e) {
  let t, n, l = (
    /*ssr*/
    (e[3] === !0 || typeof window < "u") && Tr(e)
  );
  return {
    c() {
      l && l.c(), t = fe();
    },
    m(i, r) {
      l && l.m(i, r), R(i, t, r), n = !0;
    },
    p(i, r) {
      /*ssr*/
      i[3] === !0 || typeof window < "u" ? l ? (l.p(i, r), r[0] & /*ssr*/
      8 && S(l, 1)) : (l = Tr(i), l.c(), S(l, 1), l.m(t.parentNode, t)) : l && (ne(), L(l, 1, 1, () => {
        l = null;
      }), le());
    },
    i(i) {
      n || (S(l), n = !0);
    },
    o(i) {
      L(l), n = !1;
    },
    d(i) {
      l && l.d(i), i && M(t);
    }
  };
}
function Tu(e, t, n) {
  let l, i, r, o, s, a, f, u, c, d, m, h, _, p, k, w, z, D, O, x, T, E, j, N, F, A, W, C, H, B, I, J, K, q, ae, me, Ce, Me, Ae, we, Pe, ze, Re, Xe, Ne, Ue, Ze, Je, Mn, zn, Rn, $e, et, Ln, An, xn, Nn, En, Dn, Tn, qn, On, { $$slots: $l = {}, $$scope: Hn } = t;
  const ei = jf(Ru, 200);
  let { ssr: Bt = !1 } = t, { pointerEvents: Pn = !0 } = t, { position: jn = "relative" } = t, { percentRange: G = !1 } = t, { width: at = void 0 } = t, { height: Vt = void 0 } = t, { containerWidth: Ve = at || 100 } = t, { containerHeight: bt = Vt || 100 } = t, { element: In = void 0 } = t, { x: ht = void 0 } = t, { y: gt = void 0 } = t, { z: _t = void 0 } = t, { r: pt = void 0 } = t, { data: kt = [] } = t, { xDomain: yt = void 0 } = t, { yDomain: wt = void 0 } = t, { zDomain: vt = void 0 } = t, { rDomain: St = void 0 } = t, { xNice: Fn = !1 } = t, { yNice: Qn = !1 } = t, { zNice: Bn = !1 } = t, { rNice: Vn = !1 } = t, { xPadding: Gn = void 0 } = t, { yPadding: Wn = void 0 } = t, { zPadding: Kn = void 0 } = t, { rPadding: Yn = void 0 } = t, { xScale: Xn = hn.x } = t, { yScale: Gt = hn.y } = t, { zScale: Un = hn.z } = t, { rScale: Zn = hn.r } = t, { xRange: Ct = void 0 } = t, { yRange: Mt = void 0 } = t, { zRange: zt = void 0 } = t, { rRange: Rt = void 0 } = t, { xReverse: Jn = !1 } = t, { yReverse: $n = void 0 } = t, { zReverse: el = !1 } = t, { rReverse: tl = !1 } = t, { padding: nl = {} } = t, { extents: ll = {} } = t, { flatData: il = void 0 } = t, { custom: rl = {} } = t, { debug: ti = !1 } = t, ni = !1;
  mt(() => {
    ni = !0;
  });
  const se = {}, tt = oe(G);
  Q(e, tt, (v) => n(33, Ne = v));
  const Lt = oe(Ve);
  Q(e, Lt, (v) => n(32, Xe = v));
  const At = oe(bt);
  Q(e, At, (v) => n(31, Re = v));
  const ol = oe(_i(ll));
  Q(e, ol, (v) => n(170, ze = v));
  const al = oe(kt);
  Q(e, al, (v) => n(30, Pe = v));
  const Wt = oe(il || kt);
  Q(e, Wt, (v) => n(29, we = v));
  const sl = oe(nl);
  Q(e, sl, (v) => n(169, Ae = v));
  const xt = oe(it(ht));
  Q(e, xt, (v) => n(28, Me = v));
  const Nt = oe(it(gt));
  Q(e, Nt, (v) => n(27, Ce = v));
  const Et = oe(it(_t));
  Q(e, Et, (v) => n(26, me = v));
  const Dt = oe(it(pt));
  Q(e, Dt, (v) => n(25, ae = v));
  const fl = oe(yt);
  Q(e, fl, (v) => n(168, q = v));
  const ul = oe(wt);
  Q(e, ul, (v) => n(167, K = v));
  const cl = oe(vt);
  Q(e, cl, (v) => n(166, J = v));
  const dl = oe(St);
  Q(e, dl, (v) => n(165, I = v));
  const Kt = oe(Fn);
  Q(e, Kt, (v) => n(24, B = v));
  const Yt = oe(Qn);
  Q(e, Yt, (v) => n(23, H = v));
  const Xt = oe(Bn);
  Q(e, Xt, (v) => n(22, C = v));
  const Ut = oe(Vn);
  Q(e, Ut, (v) => n(21, W = v));
  const Zt = oe(Jn);
  Q(e, Zt, (v) => n(20, A = v));
  const Jt = oe(l);
  Q(e, Jt, (v) => n(19, F = v));
  const $t = oe(el);
  Q(e, $t, (v) => n(18, N = v));
  const en = oe(tl);
  Q(e, en, (v) => n(17, j = v));
  const tn = oe(Gn);
  Q(e, tn, (v) => n(16, E = v));
  const nn = oe(Wn);
  Q(e, nn, (v) => n(15, T = v));
  const ln = oe(Kn);
  Q(e, ln, (v) => n(14, x = v));
  const rn = oe(Yn);
  Q(e, rn, (v) => n(13, O = v));
  const ml = oe(Ct);
  Q(e, ml, (v) => n(164, D = v));
  const bl = oe(Mt);
  Q(e, bl, (v) => n(163, z = v));
  const hl = oe(zt);
  Q(e, hl, (v) => n(162, w = v));
  const gl = oe(Rt);
  Q(e, gl, (v) => n(161, k = v));
  const on = oe(Xn);
  Q(e, on, (v) => n(160, p = v));
  const an = oe(Gt);
  Q(e, an, (v) => n(159, _ = v));
  const sn = oe(Un);
  Q(e, sn, (v) => n(158, h = v));
  const fn = oe(Zn);
  Q(e, fn, (v) => n(157, m = v));
  const _l = oe(se);
  Q(e, _l, (v) => n(11, c = v));
  const pl = oe(rl);
  Q(e, pl, (v) => n(12, d = v));
  const kl = be([xt, Nt, Et, Dt], ([v, Ge, je, pe]) => {
    const st = {};
    return v && (st.x = v), Ge && (st.y = Ge), je && (st.z = je), pe && (st.r = pe), st;
  });
  Q(e, kl, (v) => n(10, f = v));
  const yl = be([sl, Lt, At], ([v]) => Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, v));
  Q(e, yl, (v) => n(37, Mn = v));
  const wl = be([Lt, At, yl], ([v, Ge, je]) => {
    const pe = {};
    return pe.top = je.top, pe.right = v - je.right, pe.bottom = Ge - je.bottom, pe.left = je.left, pe.width = pe.right - pe.left, pe.height = pe.bottom - pe.top, pe.width <= 0 && ni === !0 && console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?"), pe.height <= 0 && ni === !0 && console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?"), pe;
  });
  Q(e, wl, (v) => n(151, u = v));
  const nt = be([wl], ([v]) => v.width);
  Q(e, nt, (v) => n(34, Ue = v));
  const lt = be([wl], ([v]) => v.height);
  Q(e, lt, (v) => n(35, Ze = v));
  const Ee = be([Wt, kl, ol, on, an, fn, sn], ([v, Ge, je, pe, st, pa, ka]) => {
    const ya = {
      x: pe,
      y: st,
      r: pa,
      z: ka
    }, di = _i(Ge, je), wa = Object.fromEntries(Object.keys(di).map((mi) => [mi, ya[mi]]));
    return Object.keys(di).length > 0 ? { ...Qf(v, di, wa), ...je } : {};
  });
  Q(e, Ee, (v) => n(38, zn = v));
  const vl = be([Ee, fl], Nl("x"));
  Q(e, vl, (v) => n(39, Rn = v));
  const Sl = be([Ee, ul], Nl("y"));
  Q(e, Sl, (v) => n(40, $e = v));
  const Cl = be([Ee, cl], Nl("z"));
  Q(e, Cl, (v) => n(41, et = v));
  const Ml = be([Ee, dl], Nl("r"));
  Q(e, Ml, (v) => n(42, Ln = v));
  const un = be(
    [
      on,
      Ee,
      vl,
      tn,
      Kt,
      Zt,
      nt,
      lt,
      ml,
      tt
    ],
    Dl("x")
  );
  Q(e, un, (v) => n(9, a = v));
  const li = be([xt, un], Tl);
  Q(e, li, (v) => n(47, Dn = v));
  const cn = be(
    [
      an,
      Ee,
      Sl,
      nn,
      Yt,
      Jt,
      nt,
      lt,
      bl,
      tt
    ],
    Dl("y")
  );
  Q(e, cn, (v) => n(8, s = v));
  const ii = be([Nt, cn], Tl);
  Q(e, ii, (v) => n(48, Tn = v));
  const dn = be(
    [
      sn,
      Ee,
      Cl,
      ln,
      Xt,
      $t,
      nt,
      lt,
      hl,
      tt
    ],
    Dl("z")
  );
  Q(e, dn, (v) => n(7, o = v));
  const ri = be([Et, dn], Tl);
  Q(e, ri, (v) => n(49, qn = v));
  const mn = be(
    [
      fn,
      Ee,
      Ml,
      rn,
      Ut,
      en,
      nt,
      lt,
      gl,
      tt
    ],
    Dl("r")
  );
  Q(e, mn, (v) => n(6, r = v));
  const oi = be([Dt, mn], Tl);
  Q(e, oi, (v) => n(50, On = v));
  const ai = be([un], ql);
  Q(e, ai, (v) => n(43, An = v));
  const si = be([cn], ql);
  Q(e, si, (v) => n(44, xn = v));
  const fi = be([dn], ql);
  Q(e, fi, (v) => n(45, Nn = v));
  const ui = be([mn], ql);
  Q(e, ui, (v) => n(46, En = v));
  const ci = be([nt, lt], ([v, Ge]) => v / Ge);
  Q(e, ci, (v) => n(36, Je = v));
  function ga(v) {
    Se[v ? "unshift" : "push"](() => {
      In = v, n(2, In);
    });
  }
  function _a() {
    Ve = this.clientWidth, bt = this.clientHeight, n(0, Ve), n(1, bt);
  }
  return e.$$set = (v) => {
    "ssr" in v && n(3, Bt = v.ssr), "pointerEvents" in v && n(4, Pn = v.pointerEvents), "position" in v && n(5, jn = v.position), "percentRange" in v && n(111, G = v.percentRange), "width" in v && n(112, at = v.width), "height" in v && n(113, Vt = v.height), "containerWidth" in v && n(0, Ve = v.containerWidth), "containerHeight" in v && n(1, bt = v.containerHeight), "element" in v && n(2, In = v.element), "x" in v && n(114, ht = v.x), "y" in v && n(115, gt = v.y), "z" in v && n(116, _t = v.z), "r" in v && n(117, pt = v.r), "data" in v && n(118, kt = v.data), "xDomain" in v && n(119, yt = v.xDomain), "yDomain" in v && n(120, wt = v.yDomain), "zDomain" in v && n(121, vt = v.zDomain), "rDomain" in v && n(122, St = v.rDomain), "xNice" in v && n(123, Fn = v.xNice), "yNice" in v && n(124, Qn = v.yNice), "zNice" in v && n(125, Bn = v.zNice), "rNice" in v && n(126, Vn = v.rNice), "xPadding" in v && n(127, Gn = v.xPadding), "yPadding" in v && n(128, Wn = v.yPadding), "zPadding" in v && n(129, Kn = v.zPadding), "rPadding" in v && n(130, Yn = v.rPadding), "xScale" in v && n(131, Xn = v.xScale), "yScale" in v && n(132, Gt = v.yScale), "zScale" in v && n(133, Un = v.zScale), "rScale" in v && n(134, Zn = v.rScale), "xRange" in v && n(135, Ct = v.xRange), "yRange" in v && n(136, Mt = v.yRange), "zRange" in v && n(137, zt = v.zRange), "rRange" in v && n(138, Rt = v.rRange), "xReverse" in v && n(139, Jn = v.xReverse), "yReverse" in v && n(140, $n = v.yReverse), "zReverse" in v && n(141, el = v.zReverse), "rReverse" in v && n(142, tl = v.rReverse), "padding" in v && n(143, nl = v.padding), "extents" in v && n(144, ll = v.extents), "flatData" in v && n(145, il = v.flatData), "custom" in v && n(146, rl = v.custom), "debug" in v && n(147, ti = v.debug), "$$scope" in v && n(152, Hn = v.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[4] & /*yReverse, yScale*/
    65792 && n(150, l = typeof $n > "u" ? typeof Gt.bandwidth != "function" : $n), e.$$.dirty[3] & /*x*/
    2097152 && ht && n(148, se.x = ht, se), e.$$.dirty[3] & /*y*/
    4194304 && gt && n(148, se.y = gt, se), e.$$.dirty[3] & /*z*/
    8388608 && _t && n(148, se.z = _t, se), e.$$.dirty[3] & /*r*/
    16777216 && pt && n(148, se.r = pt, se), e.$$.dirty[3] & /*xDomain*/
    67108864 && yt && n(148, se.xDomain = yt, se), e.$$.dirty[3] & /*yDomain*/
    134217728 && wt && n(148, se.yDomain = wt, se), e.$$.dirty[3] & /*zDomain*/
    268435456 && vt && n(148, se.zDomain = vt, se), e.$$.dirty[3] & /*rDomain*/
    536870912 && St && n(148, se.rDomain = St, se), e.$$.dirty[4] & /*xRange*/
    2048 && Ct && n(148, se.xRange = Ct, se), e.$$.dirty[4] & /*yRange*/
    4096 && Mt && n(148, se.yRange = Mt, se), e.$$.dirty[4] & /*zRange*/
    8192 && zt && n(148, se.zRange = zt, se), e.$$.dirty[4] & /*rRange*/
    16384 && Rt && n(148, se.rRange = Rt, se), e.$$.dirty[3] & /*percentRange*/
    262144 && re(tt, Ne = G, Ne), e.$$.dirty[0] & /*containerWidth*/
    1 && re(Lt, Xe = Ve, Xe), e.$$.dirty[0] & /*containerHeight*/
    2 && re(At, Re = bt, Re), e.$$.dirty[4] & /*extents*/
    1048576 && re(ol, ze = _i(ll), ze), e.$$.dirty[3] & /*data*/
    33554432 && re(al, Pe = kt, Pe), e.$$.dirty[3] & /*data*/
    33554432 | e.$$.dirty[4] & /*flatData*/
    2097152 && re(Wt, we = il || kt, we), e.$$.dirty[4] & /*padding*/
    524288 && re(sl, Ae = nl, Ae), e.$$.dirty[3] & /*x*/
    2097152 && re(xt, Me = it(ht), Me), e.$$.dirty[3] & /*y*/
    4194304 && re(Nt, Ce = it(gt), Ce), e.$$.dirty[3] & /*z*/
    8388608 && re(Et, me = it(_t), me), e.$$.dirty[3] & /*r*/
    16777216 && re(Dt, ae = it(pt), ae), e.$$.dirty[3] & /*xDomain*/
    67108864 && re(fl, q = yt, q), e.$$.dirty[3] & /*yDomain*/
    134217728 && re(ul, K = wt, K), e.$$.dirty[3] & /*zDomain*/
    268435456 && re(cl, J = vt, J), e.$$.dirty[3] & /*rDomain*/
    536870912 && re(dl, I = St, I), e.$$.dirty[3] & /*xNice*/
    1073741824 && re(Kt, B = Fn, B), e.$$.dirty[4] & /*yNice*/
    1 && re(Yt, H = Qn, H), e.$$.dirty[4] & /*zNice*/
    2 && re(Xt, C = Bn, C), e.$$.dirty[4] & /*rNice*/
    4 && re(Ut, W = Vn, W), e.$$.dirty[4] & /*xReverse*/
    32768 && re(Zt, A = Jn, A), e.$$.dirty[4] & /*yReverseValue*/
    67108864 && re(Jt, F = l, F), e.$$.dirty[4] & /*zReverse*/
    131072 && re($t, N = el, N), e.$$.dirty[4] & /*rReverse*/
    262144 && re(en, j = tl, j), e.$$.dirty[4] & /*xPadding*/
    8 && re(tn, E = Gn, E), e.$$.dirty[4] & /*yPadding*/
    16 && re(nn, T = Wn, T), e.$$.dirty[4] & /*zPadding*/
    32 && re(ln, x = Kn, x), e.$$.dirty[4] & /*rPadding*/
    64 && re(rn, O = Yn, O), e.$$.dirty[4] & /*xRange*/
    2048 && re(ml, D = Ct, D), e.$$.dirty[4] & /*yRange*/
    4096 && re(bl, z = Mt, z), e.$$.dirty[4] & /*zRange*/
    8192 && re(hl, w = zt, w), e.$$.dirty[4] & /*rRange*/
    16384 && re(gl, k = Rt, k), e.$$.dirty[4] & /*xScale*/
    128 && re(on, p = Xn, p), e.$$.dirty[4] & /*yScale*/
    256 && re(an, _ = Gt, _), e.$$.dirty[4] & /*zScale*/
    512 && re(sn, h = Un, h), e.$$.dirty[4] & /*rScale*/
    1024 && re(fn, m = Zn, m), e.$$.dirty[4] & /*custom*/
    4194304 && re(pl, d = rl, d), e.$$.dirty[4] & /*config*/
    16777216 && re(_l, c = se, c), e.$$.dirty[4] & /*context*/
    33554432 && xa("LayerCake", i), e.$$.dirty[0] & /*ssr, $activeGetters_d, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
    1992 | e.$$.dirty[4] & /*$box_d, debug, config*/
    159383552 && u && ti === !0 && (Bt === !0 || typeof window < "u") && ei({
      boundingBox: u,
      activeGetters: f,
      x: se.x,
      y: se.y,
      z: se.z,
      r: se.r,
      xScale: a,
      yScale: s,
      zScale: o,
      rScale: r
    });
  }, n(149, i = {
    activeGetters: kl,
    width: nt,
    height: lt,
    percentRange: tt,
    aspectRatio: ci,
    containerWidth: Lt,
    containerHeight: At,
    x: xt,
    y: Nt,
    z: Et,
    r: Dt,
    custom: pl,
    data: al,
    xNice: Kt,
    yNice: Yt,
    zNice: Xt,
    rNice: Ut,
    xReverse: Zt,
    yReverse: Jt,
    zReverse: $t,
    rReverse: en,
    xPadding: tn,
    yPadding: nn,
    zPadding: ln,
    rPadding: rn,
    padding: yl,
    flatData: Wt,
    extents: Ee,
    xDomain: vl,
    yDomain: Sl,
    zDomain: Cl,
    rDomain: Ml,
    xRange: ai,
    yRange: si,
    zRange: fi,
    rRange: ui,
    config: _l,
    xScale: un,
    xGet: li,
    yScale: cn,
    yGet: ii,
    zScale: dn,
    zGet: ri,
    rScale: mn,
    rGet: oi
  }), [
    Ve,
    bt,
    In,
    Bt,
    Pn,
    jn,
    r,
    o,
    s,
    a,
    f,
    c,
    d,
    O,
    x,
    T,
    E,
    j,
    N,
    F,
    A,
    W,
    C,
    H,
    B,
    ae,
    me,
    Ce,
    Me,
    we,
    Pe,
    Re,
    Xe,
    Ne,
    Ue,
    Ze,
    Je,
    Mn,
    zn,
    Rn,
    $e,
    et,
    Ln,
    An,
    xn,
    Nn,
    En,
    Dn,
    Tn,
    qn,
    On,
    tt,
    Lt,
    At,
    ol,
    al,
    Wt,
    sl,
    xt,
    Nt,
    Et,
    Dt,
    fl,
    ul,
    cl,
    dl,
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
    ln,
    rn,
    ml,
    bl,
    hl,
    gl,
    on,
    an,
    sn,
    fn,
    _l,
    pl,
    kl,
    yl,
    wl,
    nt,
    lt,
    Ee,
    vl,
    Sl,
    Cl,
    Ml,
    un,
    li,
    cn,
    ii,
    dn,
    ri,
    mn,
    oi,
    ai,
    si,
    fi,
    ui,
    ci,
    G,
    at,
    Vt,
    ht,
    gt,
    _t,
    pt,
    kt,
    yt,
    wt,
    vt,
    St,
    Fn,
    Qn,
    Bn,
    Vn,
    Gn,
    Wn,
    Kn,
    Yn,
    Xn,
    Gt,
    Un,
    Zn,
    Ct,
    Mt,
    zt,
    Rt,
    Jn,
    $n,
    el,
    tl,
    nl,
    ll,
    il,
    rl,
    ti,
    se,
    i,
    l,
    u,
    Hn,
    $l,
    ga,
    _a
  ];
}
class Jl extends de {
  constructor(t) {
    super(), ce(
      this,
      t,
      Tu,
      Du,
      ue,
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
const qu = (e) => ({ element: e & /*element*/
1 }), qr = (e) => ({ element: (
  /*element*/
  e[0]
) });
function Ou(e) {
  let t, n;
  const l = (
    /*#slots*/
    e[11].default
  ), i = Te(
    l,
    e,
    /*$$scope*/
    e[10],
    qr
  );
  return {
    c() {
      t = y("div"), i && i.c(), b(t, "class", "layercake-layout-html svelte-1bu60uu"), b(
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
      ), $(
        t,
        "z-index",
        /*zIndex*/
        e[1]
      ), $(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[2] === !1 ? "none" : null
      ), $(
        t,
        "top",
        /*$padding*/
        e[7].top + "px"
      ), $(
        t,
        "right",
        /*$padding*/
        e[7].right + "px"
      ), $(
        t,
        "bottom",
        /*$padding*/
        e[7].bottom + "px"
      ), $(
        t,
        "left",
        /*$padding*/
        e[7].left + "px"
      );
    },
    m(r, o) {
      R(r, t, o), i && i.m(t, null), e[12](t), n = !0;
    },
    p(r, [o]) {
      i && i.p && (!n || o & /*$$scope, element*/
      1025) && Oe(
        i,
        l,
        r,
        /*$$scope*/
        r[10],
        n ? qe(
          l,
          /*$$scope*/
          r[10],
          o,
          qu
        ) : He(
          /*$$scope*/
          r[10]
        ),
        qr
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
      2 && $(
        t,
        "z-index",
        /*zIndex*/
        r[1]
      ), o & /*pointerEvents*/
      4 && $(
        t,
        "pointer-events",
        /*pointerEvents*/
        r[2] === !1 ? "none" : null
      ), o & /*$padding*/
      128 && $(
        t,
        "top",
        /*$padding*/
        r[7].top + "px"
      ), o & /*$padding*/
      128 && $(
        t,
        "right",
        /*$padding*/
        r[7].right + "px"
      ), o & /*$padding*/
      128 && $(
        t,
        "bottom",
        /*$padding*/
        r[7].bottom + "px"
      ), o & /*$padding*/
      128 && $(
        t,
        "left",
        /*$padding*/
        r[7].left + "px"
      );
    },
    i(r) {
      n || (S(i, r), n = !0);
    },
    o(r) {
      L(i, r), n = !1;
    },
    d(r) {
      r && M(t), i && i.d(r), e[12](null);
    }
  };
}
function Hu(e, t, n) {
  let l, i, { $$slots: r = {}, $$scope: o } = t;
  const { padding: s } = Sn("LayerCake");
  Q(e, s, (p) => n(7, i = p));
  let { element: a = void 0 } = t, { zIndex: f = void 0 } = t, { pointerEvents: u = void 0 } = t, { role: c = void 0 } = t, { label: d = void 0 } = t, { labelledBy: m = void 0 } = t, { describedBy: h = void 0 } = t;
  function _(p) {
    Se[p ? "unshift" : "push"](() => {
      a = p, n(0, a);
    });
  }
  return e.$$set = (p) => {
    "element" in p && n(0, a = p.element), "zIndex" in p && n(1, f = p.zIndex), "pointerEvents" in p && n(2, u = p.pointerEvents), "role" in p && n(9, c = p.role), "label" in p && n(3, d = p.label), "labelledBy" in p && n(4, m = p.labelledBy), "describedBy" in p && n(5, h = p.describedBy), "$$scope" in p && n(10, o = p.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*role, label, labelledBy, describedBy*/
    568 && n(6, l = c || (d || m || h ? "figure" : void 0));
  }, [
    a,
    f,
    u,
    d,
    m,
    h,
    l,
    i,
    s,
    c,
    o,
    r,
    _
  ];
}
class ua extends de {
  constructor(t) {
    super(), ce(this, t, Hu, Ou, ue, {
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
const Pu = (e) => ({ element: e & /*element*/
1 }), Or = (e) => ({ element: (
  /*element*/
  e[0]
) }), ju = (e) => ({ element: e & /*element*/
1 }), Hr = (e) => ({ element: (
  /*element*/
  e[0]
) }), Iu = (e) => ({ element: e & /*element*/
1 }), Pr = (e) => ({ element: (
  /*element*/
  e[0]
) });
function jr(e) {
  let t, n;
  return {
    c() {
      t = ge("title"), n = V(
        /*title*/
        e[8]
      );
    },
    m(l, i) {
      R(l, t, i), g(t, n);
    },
    p(l, i) {
      i & /*title*/
      256 && ee(
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
function Fu(e) {
  let t, n = (
    /*title*/
    e[8] && jr(e)
  );
  return {
    c() {
      n && n.c(), t = fe();
    },
    m(l, i) {
      n && n.m(l, i), R(l, t, i);
    },
    p(l, i) {
      /*title*/
      l[8] ? n ? n.p(l, i) : (n = jr(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(l) {
      n && n.d(l), l && M(t);
    }
  };
}
function Qu(e) {
  let t, n, l, i, r;
  const o = (
    /*#slots*/
    e[16].title
  ), s = Te(
    o,
    e,
    /*$$scope*/
    e[15],
    Pr
  ), a = s || Fu(e), f = (
    /*#slots*/
    e[16].defs
  ), u = Te(
    f,
    e,
    /*$$scope*/
    e[15],
    Hr
  ), c = (
    /*#slots*/
    e[16].default
  ), d = Te(
    c,
    e,
    /*$$scope*/
    e[15],
    Or
  );
  return {
    c() {
      t = ge("svg"), a && a.c(), n = ge("defs"), u && u.c(), l = ge("g"), d && d.c(), b(l, "class", "layercake-layout-svg_g"), b(l, "transform", i = "translate(" + /*$padding*/
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
      ), $(
        t,
        "z-index",
        /*zIndex*/
        e[2]
      ), $(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[3] === !1 ? "none" : null
      );
    },
    m(m, h) {
      R(m, t, h), a && a.m(t, null), g(t, n), u && u.m(n, null), g(t, l), d && d.m(l, null), e[17](l), e[18](t), r = !0;
    },
    p(m, [h]) {
      s ? s.p && (!r || h & /*$$scope, element*/
      32769) && Oe(
        s,
        o,
        m,
        /*$$scope*/
        m[15],
        r ? qe(
          o,
          /*$$scope*/
          m[15],
          h,
          Iu
        ) : He(
          /*$$scope*/
          m[15]
        ),
        Pr
      ) : a && a.p && (!r || h & /*title*/
      256) && a.p(m, r ? h : -1), u && u.p && (!r || h & /*$$scope, element*/
      32769) && Oe(
        u,
        f,
        m,
        /*$$scope*/
        m[15],
        r ? qe(
          f,
          /*$$scope*/
          m[15],
          h,
          ju
        ) : He(
          /*$$scope*/
          m[15]
        ),
        Hr
      ), d && d.p && (!r || h & /*$$scope, element*/
      32769) && Oe(
        d,
        c,
        m,
        /*$$scope*/
        m[15],
        r ? qe(
          c,
          /*$$scope*/
          m[15],
          h,
          Pu
        ) : He(
          /*$$scope*/
          m[15]
        ),
        Or
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
      4 && $(
        t,
        "z-index",
        /*zIndex*/
        m[2]
      ), h & /*pointerEvents*/
      8 && $(
        t,
        "pointer-events",
        /*pointerEvents*/
        m[3] === !1 ? "none" : null
      );
    },
    i(m) {
      r || (S(a, m), S(u, m), S(d, m), r = !0);
    },
    o(m) {
      L(a, m), L(u, m), L(d, m), r = !1;
    },
    d(m) {
      m && M(t), a && a.d(m), u && u.d(m), d && d.d(m), e[17](null), e[18](null);
    }
  };
}
function Bu(e, t, n) {
  let l, i, r, { $$slots: o = {}, $$scope: s } = t, { element: a = void 0 } = t, { innerElement: f = void 0 } = t, { zIndex: u = void 0 } = t, { pointerEvents: c = void 0 } = t, { viewBox: d = void 0 } = t, { label: m = void 0 } = t, { labelledBy: h = void 0 } = t, { describedBy: _ = void 0 } = t, { title: p = void 0 } = t;
  const { containerWidth: k, containerHeight: w, padding: z } = Sn("LayerCake");
  Q(e, k, (x) => n(9, l = x)), Q(e, w, (x) => n(10, i = x)), Q(e, z, (x) => n(11, r = x));
  function D(x) {
    Se[x ? "unshift" : "push"](() => {
      f = x, n(1, f);
    });
  }
  function O(x) {
    Se[x ? "unshift" : "push"](() => {
      a = x, n(0, a);
    });
  }
  return e.$$set = (x) => {
    "element" in x && n(0, a = x.element), "innerElement" in x && n(1, f = x.innerElement), "zIndex" in x && n(2, u = x.zIndex), "pointerEvents" in x && n(3, c = x.pointerEvents), "viewBox" in x && n(4, d = x.viewBox), "label" in x && n(5, m = x.label), "labelledBy" in x && n(6, h = x.labelledBy), "describedBy" in x && n(7, _ = x.describedBy), "title" in x && n(8, p = x.title), "$$scope" in x && n(15, s = x.$$scope);
  }, [
    a,
    f,
    u,
    c,
    d,
    m,
    h,
    _,
    p,
    l,
    i,
    r,
    k,
    w,
    z,
    s,
    o,
    D,
    O
  ];
}
class ca extends de {
  constructor(t) {
    super(), ce(this, t, Bu, Qu, ue, {
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
function Ir(e, t, n) {
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
  const s = (
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
  l[33] = s;
  const a = (
    /*$y*/
    l[10](
      /*d*/
      l[29]
    )
  );
  return l[34] = a, l;
}
function Fr(e) {
  let t, n = (
    /*yValue*/
    e[34] + ""
  ), l, i, r;
  return {
    c() {
      t = ge("text"), l = V(n), b(t, "x", i = /*xPos*/
      e[32] + /*colWidth*/
      e[33] / 2), b(t, "y", r = /*$height*/
      e[12] - /*colHeight*/
      e[30] - 5), b(t, "text-anchor", "middle"), b(t, "class", "svelte-1c28ck9");
    },
    m(o, s) {
      R(o, t, s), g(t, l);
    },
    p(o, s) {
      s[0] & /*$y, $data*/
      1280 && n !== (n = /*yValue*/
      o[34] + "") && ee(l, n), s[0] & /*$xGet, $data, $xScale, columnWidth*/
      904 && i !== (i = /*xPos*/
      o[32] + /*colWidth*/
      o[33] / 2) && b(t, "x", i), s[0] & /*$height, columnHeight, $data*/
      4416 && r !== (r = /*$height*/
      o[12] - /*colHeight*/
      o[30] - 5) && b(t, "y", r);
    },
    d(o) {
      o && M(t);
    }
  };
}
function Qr(e) {
  let t, n, l, i, r, o, s, a, f, u, c, d, m, h, _;
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
  let k = (
    /*showLabels*/
    e[1] && /*yValue*/
    e[34] && Fr(e)
  );
  return {
    c() {
      t = ge("rect"), u = ge("rect"), k && k.c(), m = fe(), b(t, "class", "group-rect svelte-1c28ck9"), b(
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
      e[33]), b(t, "height", s = /*colHeight*/
      e[30]), b(
        t,
        "fill",
        /*fill*/
        e[0]
      ), b(t, "stroke", a = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Br : "none"), b(t, "stroke-width", f = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Vr : 0), ie(
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
    m(w, z) {
      R(w, t, z), R(w, u, z), k && k.m(w, z), R(w, m, z), h || (_ = [
        te(u, "mouseenter", p),
        te(
          u,
          "mouseleave",
          /*mouseleave_handler*/
          e[24]
        )
      ], h = !0);
    },
    p(w, z) {
      e = w, z[0] & /*$x, $data*/
      2304 && n !== (n = /*$x*/
      e[11](
        /*d*/
        e[29]
      )) && b(t, "data-range", n), z[0] & /*$y, $data*/
      1280 && l !== (l = /*yValue*/
      e[34]) && b(t, "data-count", l), z[0] & /*$xGet, $data*/
      264 && i !== (i = /*xPos*/
      e[32]) && b(t, "x", i), z[0] & /*$yGet, $data*/
      260 && r !== (r = /*$yGet*/
      e[2](
        /*d*/
        e[29]
      )) && b(t, "y", r), z[0] & /*$xScale, columnWidth, $data*/
      896 && o !== (o = /*colWidth*/
      e[33]) && b(t, "width", o), z[0] & /*columnHeight, $data*/
      320 && s !== (s = /*colHeight*/
      e[30]) && b(t, "height", s), z[0] & /*fill*/
      1 && b(
        t,
        "fill",
        /*fill*/
        e[0]
      ), z[0] & /*hoveredIndex*/
      16 && a !== (a = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Br : "none") && b(t, "stroke", a), z[0] & /*hoveredIndex*/
      16 && f !== (f = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? Vr : 0) && b(t, "stroke-width", f), z[0] & /*loaded*/
      32 && ie(
        t,
        "animated",
        /*loaded*/
        e[5]
      ), z[0] & /*$xGet, $data*/
      264 && c !== (c = /*xPos*/
      e[32]) && b(u, "x", c), z[0] & /*$xScale, columnWidth, $data*/
      896 && d !== (d = /*colWidth*/
      e[33]) && b(u, "width", d), z[0] & /*$height*/
      4096 && b(
        u,
        "height",
        /*$height*/
        e[12]
      ), /*showLabels*/
      e[1] && /*yValue*/
      e[34] ? k ? k.p(e, z) : (k = Fr(e), k.c(), k.m(m.parentNode, m)) : k && (k.d(1), k = null);
    },
    d(w) {
      w && M(t), w && M(u), k && k.d(w), w && M(m), h = !1, ye(_);
    }
  };
}
function Vu(e) {
  let t, n = (
    /*$data*/
    e[8]
  ), l = [];
  for (let i = 0; i < n.length; i += 1)
    l[i] = Qr(Ir(e, n, i));
  return {
    c() {
      t = ge("g");
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      b(t, "class", "column-group");
    },
    m(i, r) {
      R(i, t, r);
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
          const s = Ir(i, n, o);
          l[o] ? l[o].p(s, r) : (l[o] = Qr(s), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    i: U,
    o: U,
    d(i) {
      i && M(t), xe(l, i);
    }
  };
}
const Br = "#333", Vr = 1;
function Gu(e, t, n) {
  let l, i, r, o, s, a, f, u, c, d;
  const m = Bo(), { data: h, xGet: _, yGet: p, x: k, yRange: w, xScale: z, y: D, height: O, zGet: x, zScale: T, z: E, custom: j } = Sn("LayerCake");
  Q(e, h, (B) => n(8, a = B)), Q(e, _, (B) => n(3, s = B)), Q(e, p, (B) => n(2, r = B)), Q(e, k, (B) => n(11, c = B)), Q(e, w, (B) => n(22, o = B)), Q(e, z, (B) => n(9, f = B)), Q(e, D, (B) => n(10, u = B)), Q(e, O, (B) => n(12, d = B));
  let { fill: N = "#00e047" } = t, { showLabels: F = !1 } = t, A = null;
  mt(() => {
    setTimeout(() => n(5, W = !0), 100);
  });
  let W = !1;
  const C = (B, I) => {
    n(4, A = B), m("hover", I);
  }, H = () => {
    n(4, A = null), m("hover", null);
  };
  return e.$$set = (B) => {
    "fill" in B && n(0, N = B.fill), "showLabels" in B && n(1, F = B.showLabels);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*$xGet*/
    8 && n(7, l = (B) => {
      const I = s(B);
      return Math.abs(I[1] - I[0]);
    }), e.$$.dirty[0] & /*$yRange, $yGet*/
    4194308 && n(6, i = (B) => o[0] - r(B));
  }, [
    N,
    F,
    r,
    s,
    A,
    W,
    i,
    l,
    a,
    f,
    u,
    c,
    d,
    m,
    h,
    _,
    p,
    k,
    w,
    z,
    D,
    O,
    o,
    C,
    H
  ];
}
class da extends de {
  constructor(t) {
    super(), ce(this, t, Gu, Vu, ue, { fill: 0, showLabels: 1 }, null, [-1, -1]);
  }
}
function Gr(e, t, n) {
  const l = e.slice();
  return l[28] = t[n], l[30] = n, l;
}
function Wr(e) {
  let t, n, l;
  return {
    c() {
      t = ge("line"), b(t, "y1", n = /*$height*/
      e[15] * -1), b(t, "y2", "0"), b(t, "x1", "0"), b(t, "x2", "0"), b(t, "stroke-width", l = /*tick*/
      e[28] == 0 ? 2 : 1), b(t, "class", "svelte-rkqqab"), ie(
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
    m(i, r) {
      R(i, t, r);
    },
    p(i, r) {
      r & /*$height*/
      32768 && n !== (n = /*$height*/
      i[15] * -1) && b(t, "y1", n), r & /*tickVals*/
      8192 && l !== (l = /*tick*/
      i[28] == 0 ? 2 : 1) && b(t, "stroke-width", l), r & /*tickVals*/
      8192 && ie(
        t,
        "gridline",
        /*tick*/
        i[28] != 0
      ), r & /*tickVals*/
      8192 && ie(
        t,
        "baseline",
        /*tick*/
        i[28] == 0
      );
    },
    d(i) {
      i && M(t);
    }
  };
}
function Kr(e) {
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
      R(i, t, r);
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
      i && M(t);
    }
  };
}
function Yr(e) {
  let t, n, l, i = (
    /*formatTick*/
    e[4](
      /*tick*/
      e[28]
    ) + ""
  ), r, o, s, a, f, u, c = (
    /*gridlines*/
    e[0] !== !1 && Wr(e)
  ), d = (
    /*tickMarks*/
    e[1] === !0 && Kr(e)
  );
  return {
    c() {
      t = ge("g"), c && c.c(), n = fe(), d && d.c(), l = ge("text"), r = V(i), b(l, "x", o = /*xTick*/
      e[5] || /*isBandwidth*/
      e[11] ? (
        /*$xScale*/
        e[12].bandwidth() / 2
      ) : 0), b(l, "y", s = /*yTick*/
      e[6] - /*angle*/
      (e[10] ? 4 : 0)), b(l, "dx", ""), b(l, "dy", ""), b(l, "transform", a = /*angle*/
      e[10] ? "rotate(-45)" : ""), $(
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
      R(m, t, h), c && c.m(t, null), g(t, n), d && d.m(t, null), g(t, l), g(l, r);
    },
    p(m, h) {
      /*gridlines*/
      m[0] !== !1 ? c ? c.p(m, h) : (c = Wr(m), c.c(), c.m(t, n)) : c && (c.d(1), c = null), /*tickMarks*/
      m[1] === !0 ? d ? d.p(m, h) : (d = Kr(m), d.c(), d.m(t, l)) : d && (d.d(1), d = null), h & /*formatTick, tickVals*/
      8208 && i !== (i = /*formatTick*/
      m[4](
        /*tick*/
        m[28]
      ) + "") && ee(r, i), h & /*xTick, isBandwidth, $xScale*/
      6176 && o !== (o = /*xTick*/
      m[5] || /*isBandwidth*/
      m[11] ? (
        /*$xScale*/
        m[12].bandwidth() / 2
      ) : 0) && b(l, "x", o), h & /*yTick, angle*/
      1088 && s !== (s = /*yTick*/
      m[6] - /*angle*/
      (m[10] ? 4 : 0)) && b(l, "y", s), h & /*angle*/
      1024 && a !== (a = /*angle*/
      m[10] ? "rotate(-45)" : "") && b(l, "transform", a), h & /*color*/
      512 && $(
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
      m && M(t), c && c.d(), d && d.d();
    }
  };
}
function Xr(e) {
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
      R(i, t, r);
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
      i && M(t);
    }
  };
}
function Ur(e) {
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
      e[8] ? "end" : "middle"), $(
        t,
        "fill",
        /*color*/
        e[9]
      ), b(t, "class", "axis-label svelte-rkqqab");
    },
    m(r, o) {
      R(r, t, o), t.innerHTML = /*label*/
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
      512 && $(
        t,
        "fill",
        /*color*/
        r[9]
      );
    },
    d(r) {
      r && M(t);
    }
  };
}
function Wu(e) {
  let t, n, l, i = (
    /*tickVals*/
    e[13]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = Yr(Gr(e, i, a));
  let o = (
    /*baseline*/
    e[2] === !0 && Xr(e)
  ), s = !!/*label*/
  e[7] && Ur(e);
  return {
    c() {
      t = ge("g");
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      n = fe(), o && o.c(), l = fe(), s && s.c(), b(t, "class", "axis x-axis svelte-rkqqab"), ie(
        t,
        "snapTicks",
        /*snapTicks*/
        e[3]
      );
    },
    m(a, f) {
      R(a, t, f);
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(t, null);
      g(t, n), o && o.m(t, null), g(t, l), s && s.m(t, null);
    },
    p(a, [f]) {
      if (f & /*$xScale, tickVals, Math, $yRange, xTick, isBandwidth, yTick, angle, color, textAnchor, formatTick, tickMarks, $height, gridlines*/
      16842355) {
        i = /*tickVals*/
        a[13];
        let u;
        for (u = 0; u < i.length; u += 1) {
          const c = Gr(a, i, u);
          r[u] ? r[u].p(c, f) : (r[u] = Yr(c), r[u].c(), r[u].m(t, n));
        }
        for (; u < r.length; u += 1)
          r[u].d(1);
        r.length = i.length;
      }
      /*baseline*/
      a[2] === !0 ? o ? o.p(a, f) : (o = Xr(a), o.c(), o.m(t, l)) : o && (o.d(1), o = null), /*label*/
      a[7] ? s ? s.p(a, f) : (s = Ur(a), s.c(), s.m(t, null)) : s && (s.d(1), s = null), f & /*snapTicks*/
      8 && ie(
        t,
        "snapTicks",
        /*snapTicks*/
        a[3]
      );
    },
    i: U,
    o: U,
    d(a) {
      a && M(t), xe(r, a), o && o.d(), s && s.d();
    }
  };
}
function Ku(e, t, n) {
  let l, i, r, o, s, a, f, u;
  const { width: c, height: d, xRange: m, padding: h, xScale: _, xDomain: p, yRange: k } = Sn("LayerCake");
  Q(e, c, (H) => n(16, f = H)), Q(e, d, (H) => n(15, a = H)), Q(e, m, (H) => n(17, u = H)), Q(e, _, (H) => n(12, o = H)), Q(e, p, (H) => n(26, r = H)), Q(e, k, (H) => n(14, s = H));
  let { gridlines: w = !0 } = t, { tickMarks: z = !1 } = t, { baseline: D = !1 } = t, { snapTicks: O = !1 } = t, { formatTick: x = (H) => H } = t, { ticks: T = void 0 } = t, { xTick: E = 0 } = t, { yTick: j = 16 } = t, { label: N = "" } = t, { labelLeft: F = !1 } = t, { color: A = "#333" } = t, { angle: W = !1 } = t;
  function C(H) {
    if (W)
      return "end";
    if (O === !0) {
      if (H == r[0])
        return "start";
      if (H == r[1])
        return "end";
    }
    return "middle";
  }
  return e.$$set = (H) => {
    "gridlines" in H && n(0, w = H.gridlines), "tickMarks" in H && n(1, z = H.tickMarks), "baseline" in H && n(2, D = H.baseline), "snapTicks" in H && n(3, O = H.snapTicks), "formatTick" in H && n(4, x = H.formatTick), "ticks" in H && n(25, T = H.ticks), "xTick" in H && n(5, E = H.xTick), "yTick" in H && n(6, j = H.yTick), "label" in H && n(7, N = H.label), "labelLeft" in H && n(8, F = H.labelLeft), "color" in H && n(9, A = H.color), "angle" in H && n(10, W = H.angle);
  }, e.$$.update = () => {
    e.$$.dirty & /*$xScale*/
    4096 && n(11, l = typeof o.bandwidth == "function"), e.$$.dirty & /*ticks, isBandwidth, $xScale*/
    33560576 && n(13, i = Array.isArray(T) ? T : l ? o.domain() : typeof T == "function" ? T(o.ticks()) : o.ticks(T));
  }, [
    w,
    z,
    D,
    O,
    x,
    E,
    j,
    N,
    F,
    A,
    W,
    l,
    o,
    i,
    s,
    a,
    f,
    u,
    c,
    d,
    m,
    _,
    p,
    k,
    C,
    T
  ];
}
class ma extends de {
  constructor(t) {
    super(), ce(this, t, Ku, Wu, ue, {
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
const Yu = (e) => ({}), Zr = (e) => ({}), Xu = (e) => ({}), Jr = (e) => ({});
function Uu(e) {
  let t, n, l, i, r, o, s, a, f = !!/*title*/
  e[2] && $r(e), u = (
    /*loaded*/
    e[8] && /*histBins*/
    e[7].length > 0 && eo(e)
  );
  const c = [tc, ec], d = [];
  function m(h, _) {
    return (
      /*$$slots*/
      h[11].caption ? 1 : 0
    );
  }
  return o = m(e), s = d[o] = c[o](e), {
    c() {
      t = y("div"), f && f.c(), n = P(), l = y("div"), u && u.c(), i = P(), r = y("div"), s.c(), $(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), $(l, "height", "16px"), b(r, "class", "text-xs text-slate-800 dark:text-slate-200 truncate"), ie(r, "mt-1", !/*horizontalLayout*/
      e[3]), b(t, "class", "gap-1 items-center"), ie(
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
    m(h, _) {
      R(h, t, _), f && f.m(t, null), g(t, n), g(t, l), u && u.m(l, null), g(t, i), g(t, r), d[o].m(r, null), a = !0;
    },
    p(h, _) {
      /*title*/
      h[2] ? f ? f.p(h, _) : (f = $r(h), f.c(), f.m(t, n)) : f && (f.d(1), f = null), /*loaded*/
      h[8] && /*histBins*/
      h[7].length > 0 ? u ? (u.p(h, _), _ & /*loaded, histBins*/
      384 && S(u, 1)) : (u = eo(h), u.c(), S(u, 1), u.m(l, null)) : u && (ne(), L(u, 1, 1, () => {
        u = null;
      }), le()), (!a || _ & /*width*/
      1) && $(
        l,
        "width",
        /*width*/
        h[0] == null ? "100%" : `${/*width*/
        h[0]}px`
      );
      let p = o;
      o = m(h), o === p ? d[o].p(h, _) : (ne(), L(d[p], 1, 1, () => {
        d[p] = null;
      }), le(), s = d[o], s ? s.p(h, _) : (s = d[o] = c[o](h), s.c()), S(s, 1), s.m(r, null)), (!a || _ & /*horizontalLayout*/
      8) && ie(r, "mt-1", !/*horizontalLayout*/
      h[3]), (!a || _ & /*horizontalLayout*/
      8) && ie(
        t,
        "flex",
        /*horizontalLayout*/
        h[3]
      ), (!a || _ & /*horizontalLayout*/
      8) && ie(
        t,
        "my-0.5",
        /*horizontalLayout*/
        h[3]
      );
    },
    i(h) {
      a || (S(u), S(s), a = !0);
    },
    o(h) {
      L(u), L(s), a = !1;
    },
    d(h) {
      h && M(t), f && f.d(), u && u.d(), d[o].d();
    }
  };
}
function Zu(e) {
  let t, n, l, i, r, o, s, a = !!/*title*/
  e[2] && to(e), f = (
    /*loaded*/
    e[8] && /*histBins*/
    e[7].length > 0 && no(e)
  );
  const u = [sc, ac], c = [];
  function d(m, h) {
    return (
      /*$$slots*/
      m[11].caption ? 1 : 0
    );
  }
  return r = d(e), o = c[r] = u[r](e), {
    c() {
      a && a.c(), t = P(), n = y("div"), f && f.c(), l = P(), i = y("div"), o.c(), $(
        n,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), $(n, "height", "16px"), b(i, "class", "text-xs text-slate-800 dark:text-slate-200 truncate"), ie(i, "mt-1", !/*horizontalLayout*/
      e[3]);
    },
    m(m, h) {
      a && a.m(m, h), R(m, t, h), R(m, n, h), f && f.m(n, null), R(m, l, h), R(m, i, h), c[r].m(i, null), s = !0;
    },
    p(m, h) {
      /*title*/
      m[2] ? a ? a.p(m, h) : (a = to(m), a.c(), a.m(t.parentNode, t)) : a && (a.d(1), a = null), /*loaded*/
      m[8] && /*histBins*/
      m[7].length > 0 ? f ? (f.p(m, h), h & /*loaded, histBins*/
      384 && S(f, 1)) : (f = no(m), f.c(), S(f, 1), f.m(n, null)) : f && (ne(), L(f, 1, 1, () => {
        f = null;
      }), le()), (!s || h & /*width*/
      1) && $(
        n,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let _ = r;
      r = d(m), r === _ ? c[r].p(m, h) : (ne(), L(c[_], 1, 1, () => {
        c[_] = null;
      }), le(), o = c[r], o ? o.p(m, h) : (o = c[r] = u[r](m), o.c()), S(o, 1), o.m(i, null)), (!s || h & /*horizontalLayout*/
      8) && ie(i, "mt-1", !/*horizontalLayout*/
      m[3]);
    },
    i(m) {
      s || (S(f), S(o), s = !0);
    },
    o(m) {
      L(f), L(o), s = !1;
    },
    d(m) {
      a && a.d(m), m && M(t), m && M(n), f && f.d(), m && M(l), m && M(i), c[r].d();
    }
  };
}
function $r(e) {
  let t, n;
  return {
    c() {
      t = y("div"), n = V(
        /*title*/
        e[2]
      ), b(t, "class", "font-bold text-xs truncate text-right"), $(t, "width", "96px");
    },
    m(l, i) {
      R(l, t, i), g(t, n);
    },
    p(l, i) {
      i & /*title*/
      4 && ee(
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
function eo(e) {
  let t, n;
  return t = new Jl({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: Di().round(!0),
      xDomain: (
        /*histBins*/
        e[7]
      ),
      yScale: rt(),
      yDomain: [0, null],
      data: (
        /*data*/
        e[6]
      ),
      custom: { hoveredGet: (
        /*func_2*/
        e[18]
      ) },
      $$slots: { default: [$u] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
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
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function Ju(e) {
  let t, n, l, i;
  return t = new da({ props: { fill: (
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
      Z(t.$$.fragment), n = P(), Z(l.$$.fragment);
    },
    m(r, o) {
      Y(t, r, o), R(r, n, o), Y(l, r, o), i = !0;
    },
    p(r, o) {
      const s = {};
      o & /*color*/
      32 && (s.fill = /*color*/
      r[5]), t.$set(s);
    },
    i(r) {
      i || (S(t.$$.fragment, r), S(l.$$.fragment, r), i = !0);
    },
    o(r) {
      L(t.$$.fragment, r), L(l.$$.fragment, r), i = !1;
    },
    d(r) {
      X(t, r), r && M(n), X(l, r);
    }
  };
}
function $u(e) {
  let t, n;
  return t = new ca({
    props: {
      $$slots: { default: [Ju] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, color, hoveredBin*/
      1049120 && (r.$$scope = { dirty: i, ctx: l }), t.$set(r);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function ec(e) {
  let t;
  const n = (
    /*#slots*/
    e[13].caption
  ), l = Te(
    n,
    e,
    /*$$scope*/
    e[20],
    Zr
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
      1048576) && Oe(
        l,
        n,
        i,
        /*$$scope*/
        i[20],
        t ? qe(
          n,
          /*$$scope*/
          i[20],
          r,
          Yu
        ) : He(
          /*$$scope*/
          i[20]
        ),
        Zr
      );
    },
    i(i) {
      t || (S(l, i), t = !0);
    },
    o(i) {
      L(l, i), t = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function tc(e) {
  let t;
  function n(r, o) {
    return (
      /*hoveredBin*/
      r[9] != null ? ic : (
        /*mean*/
        r[1] != null ? lc : nc
      )
    );
  }
  let l = n(e), i = l(e);
  return {
    c() {
      i.c(), t = fe();
    },
    m(r, o) {
      i.m(r, o), R(r, t, o);
    },
    p(r, o) {
      l === (l = n(r)) && i ? i.p(r, o) : (i.d(1), i = l(r), i && (i.c(), i.m(t.parentNode, t)));
    },
    i: U,
    o: U,
    d(r) {
      i.d(r), r && M(t);
    }
  };
}
function nc(e) {
  let t;
  return {
    c() {
      t = V(" ");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: U,
    d(n) {
      n && M(t);
    }
  };
}
function lc(e) {
  let t, n, l = he(".3")(
    /*mean*/
    e[1]
  ) + "", i;
  return {
    c() {
      t = V("M = "), n = y("strong"), i = V(l);
    },
    m(r, o) {
      R(r, t, o), R(r, n, o), g(n, i);
    },
    p(r, o) {
      o & /*mean*/
      2 && l !== (l = he(".3")(
        /*mean*/
        r[1]
      ) + "") && ee(i, l);
    },
    d(r) {
      r && M(t), r && M(n);
    }
  };
}
function ic(e) {
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
      n = V(t);
    },
    m(l, i) {
      R(l, n, i);
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
      ) + "") && ee(n, t);
    },
    d(l) {
      l && M(n);
    }
  };
}
function to(e) {
  let t, n;
  return {
    c() {
      t = y("div"), n = V(
        /*title*/
        e[2]
      ), b(t, "class", "font-bold text-xs truncate text-right");
    },
    m(l, i) {
      R(l, t, i), g(t, n);
    },
    p(l, i) {
      i & /*title*/
      4 && ee(
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
function no(e) {
  let t, n;
  return t = new Jl({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: Di().round(!0),
      xDomain: (
        /*histBins*/
        e[7]
      ),
      yScale: rt(),
      yDomain: [0, null],
      data: (
        /*data*/
        e[6]
      ),
      custom: { hoveredGet: (
        /*func*/
        e[15]
      ) },
      $$slots: { default: [oc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
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
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function rc(e) {
  let t, n, l, i;
  return t = new da({ props: { fill: (
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
      Z(t.$$.fragment), n = P(), Z(l.$$.fragment);
    },
    m(r, o) {
      Y(t, r, o), R(r, n, o), Y(l, r, o), i = !0;
    },
    p(r, o) {
      const s = {};
      o & /*color*/
      32 && (s.fill = /*color*/
      r[5]), t.$set(s);
    },
    i(r) {
      i || (S(t.$$.fragment, r), S(l.$$.fragment, r), i = !0);
    },
    o(r) {
      L(t.$$.fragment, r), L(l.$$.fragment, r), i = !1;
    },
    d(r) {
      X(t, r), r && M(n), X(l, r);
    }
  };
}
function oc(e) {
  let t, n;
  return t = new ca({
    props: {
      $$slots: { default: [rc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, color, hoveredBin*/
      1049120 && (r.$$scope = { dirty: i, ctx: l }), t.$set(r);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function ac(e) {
  let t;
  const n = (
    /*#slots*/
    e[13].caption
  ), l = Te(
    n,
    e,
    /*$$scope*/
    e[20],
    Jr
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
      1048576) && Oe(
        l,
        n,
        i,
        /*$$scope*/
        i[20],
        t ? qe(
          n,
          /*$$scope*/
          i[20],
          r,
          Xu
        ) : He(
          /*$$scope*/
          i[20]
        ),
        Jr
      );
    },
    i(i) {
      t || (S(l, i), t = !0);
    },
    o(i) {
      L(l, i), t = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function sc(e) {
  let t;
  function n(r, o) {
    return (
      /*hoveredBin*/
      r[9] != null ? cc : (
        /*mean*/
        r[1] != null ? uc : fc
      )
    );
  }
  let l = n(e), i = l(e);
  return {
    c() {
      i.c(), t = fe();
    },
    m(r, o) {
      i.m(r, o), R(r, t, o);
    },
    p(r, o) {
      l === (l = n(r)) && i ? i.p(r, o) : (i.d(1), i = l(r), i && (i.c(), i.m(t.parentNode, t)));
    },
    i: U,
    o: U,
    d(r) {
      i.d(r), r && M(t);
    }
  };
}
function fc(e) {
  let t;
  return {
    c() {
      t = V(" ");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: U,
    d(n) {
      n && M(t);
    }
  };
}
function uc(e) {
  let t, n, l = he(".3")(
    /*mean*/
    e[1]
  ) + "", i;
  return {
    c() {
      t = V("M = "), n = y("strong"), i = V(l);
    },
    m(r, o) {
      R(r, t, o), R(r, n, o), g(n, i);
    },
    p(r, o) {
      o & /*mean*/
      2 && l !== (l = he(".3")(
        /*mean*/
        r[1]
      ) + "") && ee(i, l);
    },
    d(r) {
      r && M(t), r && M(n);
    }
  };
}
function cc(e) {
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
      n = V(t);
    },
    m(l, i) {
      R(l, n, i);
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
      ) + "") && ee(n, t);
    },
    d(l) {
      l && M(n);
    }
  };
}
function dc(e) {
  let t, n, l, i;
  const r = [Zu, Uu], o = [];
  function s(a, f) {
    return (
      /*noParent*/
      a[4] ? 0 : 1
    );
  }
  return t = s(e), n = o[t] = r[t](e), {
    c() {
      n.c(), l = fe();
    },
    m(a, f) {
      o[t].m(a, f), R(a, l, f), i = !0;
    },
    p(a, [f]) {
      let u = t;
      t = s(a), t === u ? o[t].p(a, f) : (ne(), L(o[u], 1, 1, () => {
        o[u] = null;
      }), le(), n = o[t], n ? n.p(a, f) : (n = o[t] = r[t](a), n.c()), S(n, 1), n.m(l.parentNode, l));
    },
    i(a) {
      i || (S(n), i = !0);
    },
    o(a) {
      L(n), i = !1;
    },
    d(a) {
      o[t].d(a), a && M(l);
    }
  };
}
function mc(e, t, n) {
  let { $$slots: l = {}, $$scope: i } = t;
  const r = Ci(l);
  let { width: o = 100 } = t, { histValues: s } = t, { mean: a = null } = t, { title: f = null } = t, { horizontalLayout: u = !1 } = t, { noParent: c = !1 } = t, { color: d = "#3b82f6" } = t, m = [], h = [], _ = !1;
  mt(() => setTimeout(() => n(8, _ = !0), 0));
  let p, k = he(".3g"), w = he(",");
  function z(N) {
    return `${k(N.bin)}: ${w(N.count)} instances`;
  }
  const D = (N) => n(9, p = N.detail != null ? N.detail.bin : null), O = (N) => N.bin == p, x = (N) => N.bin == p, T = (N) => n(9, p = N.detail != null ? N.detail.bin : null), E = (N) => N.bin == p, j = (N) => N.bin == p;
  return e.$$set = (N) => {
    "width" in N && n(0, o = N.width), "histValues" in N && n(12, s = N.histValues), "mean" in N && n(1, a = N.mean), "title" in N && n(2, f = N.title), "horizontalLayout" in N && n(3, u = N.horizontalLayout), "noParent" in N && n(4, c = N.noParent), "color" in N && n(5, d = N.color), "$$scope" in N && n(20, i = N.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*histValues, data*/
    4160 && (s ? (n(6, m = Object.entries(s).map((N) => ({ bin: parseFloat(N[0]), count: N[1] }))), m.sort((N, F) => N.bin - F.bin), n(7, h = m.map((N) => N.bin))) : (n(6, m = []), n(7, h = []))), e.$$.dirty & /*data*/
    64 && m.length > 0) {
      let N = m.reduce(
        (F, A, W) => W > 0 ? Math.min(F, Math.abs(A.bin - m[W - 1].bin)) : F,
        1e9
      );
      k = he(`.${Xo(N)}f`);
    }
    e.$$.dirty & /*histBins*/
    128 && console.log("histBins", h), e.$$.dirty & /*histValues*/
    4096 && console.log("histValues", s);
  }, [
    o,
    a,
    f,
    u,
    c,
    d,
    m,
    h,
    _,
    p,
    z,
    r,
    s,
    l,
    D,
    O,
    x,
    T,
    E,
    j,
    i
  ];
}
class bc extends de {
  constructor(t) {
    super(), ce(this, t, mc, dc, ue, {
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
function lo(e, t, n) {
  const l = e.slice();
  return l[24] = t[n], l[26] = n, l;
}
function io(e) {
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
      t = y("span"), b(t, "class", "bar absolute content-box svelte-mwmtzu"), $(t, "top", "0"), $(
        t,
        "left",
        /*$xGet*/
        e[3](
          /*d*/
          e[24]
        ) * /*$xRange*/
        (e[4][1] <= 1 ? 100 : 1) + /*$xRange*/
        (e[4][1] <= 1 ? "%" : "px")
      ), $(
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
      ), $(
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
    m(r, o) {
      R(r, t, o), n || (l = [
        te(t, "mouseenter", i),
        te(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[16]
        )
      ], n = !0);
    },
    p(r, o) {
      e = r, o & /*$xGet, $data, $xRange*/
      28 && $(
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
      124 && $(
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
      132 && $(
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
    d(r) {
      r && M(t), n = !1, ye(l);
    }
  };
}
function hc(e) {
  let t, n = (
    /*$data*/
    e[2]
  ), l = [];
  for (let i = 0; i < n.length; i += 1)
    l[i] = io(lo(e, n, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      t = fe();
    },
    m(i, r) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(i, r);
      R(i, t, r);
    },
    p(i, [r]) {
      if (r & /*$xGet, $data, $xRange, $xScale, $z, $yGet, loaded, hoveredIndex, dispatch*/
      511) {
        n = /*$data*/
        i[2];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const s = lo(i, n, o);
          l[o] ? l[o].p(s, r) : (l[o] = io(s), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    i: U,
    o: U,
    d(i) {
      xe(l, i), i && M(t);
    }
  };
}
function gc(e, t, n) {
  let l, i, r, o, s, a;
  const f = Bo(), { data: u, xGet: c, yGet: d, xRange: m, x: h, yRange: _, xScale: p, y: k, height: w, zGet: z, zScale: D, z: O, custom: x } = Sn("LayerCake");
  Q(e, u, (F) => n(2, l = F)), Q(e, c, (F) => n(3, i = F)), Q(e, d, (F) => n(7, a = F)), Q(e, m, (F) => n(4, r = F)), Q(e, p, (F) => n(5, o = F)), Q(e, O, (F) => n(6, s = F));
  let T = null;
  mt(() => {
    setTimeout(() => n(1, E = !0), 100);
  });
  let E = !1;
  return [
    T,
    E,
    l,
    i,
    r,
    o,
    s,
    a,
    f,
    u,
    c,
    d,
    m,
    p,
    O,
    (F, A) => {
      n(0, T = F), f("hover", A);
    },
    () => {
      n(0, T = null), f("hover", null);
    }
  ];
}
class ba extends de {
  constructor(t) {
    super(), ce(this, t, gc, hc, ue, {});
  }
}
const _c = (e) => ({}), ro = (e) => ({}), pc = (e) => ({}), oo = (e) => ({});
function kc(e) {
  let t, n, l, i, r, o, s, a, f, u = !!/*title*/
  e[1] && ao(e);
  i = new Jl({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: rt(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        e[0] ?? 1
      ],
      yScale: Zl(),
      yDomain: Ye(
        /*counts*/
        e[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        e[4]
      ) ? (
        /*colorScale*/
        e[4]
      ) : Ye(0, 1.00001, 1 / /*data*/
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
      $$slots: { default: [vc] },
      $$scope: { ctx: e }
    }
  });
  const c = [Mc, Cc, Sc], d = [];
  function m(h, _) {
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
  return ~(s = m(e)) && (a = d[s] = c[s](e)), {
    c() {
      t = y("div"), u && u.c(), n = P(), l = y("div"), Z(i.$$.fragment), r = P(), o = y("div"), a && a.c(), $(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), $(l, "height", "6px"), b(l, "class", "rounded overflow-hidden mb-1"), b(o, "class", "text-xs text-slate-800 dark:text-slate-200"), b(t, "class", "gap-1 items-center"), ie(
        t,
        "flex",
        /*horizontalLayout*/
        e[2]
      );
    },
    m(h, _) {
      R(h, t, _), u && u.m(t, null), g(t, n), g(t, l), Y(i, l, null), g(t, r), g(t, o), ~s && d[s].m(o, null), f = !0;
    },
    p(h, _) {
      /*title*/
      h[1] ? u ? u.p(h, _) : (u = ao(h), u.c(), u.m(t, n)) : u && (u.d(1), u = null);
      const p = {};
      _ & /*width*/
      1 && (p.xRange = [
        0,
        /*width*/
        h[0] ?? 1
      ]), _ & /*counts*/
      32 && (p.yDomain = Ye(
        /*counts*/
        h[5].length
      )), _ & /*colorScale, data*/
      80 && (p.yRange = Array.isArray(
        /*colorScale*/
        h[4]
      ) ? (
        /*colorScale*/
        h[4]
      ) : Ye(0, 1.00001, 1 / /*data*/
      (h[6].length - 1)).map(
        /*func_2*/
        h[17]
      )), _ & /*data*/
      64 && (p.data = /*data*/
      h[6]), _ & /*hoveredIndex*/
      128 && (p.custom = { hoveredGet: (
        /*func_3*/
        h[18]
      ) }), _ & /*$$scope, hoveredIndex*/
      524416 && (p.$$scope = { dirty: _, ctx: h }), i.$set(p), (!f || _ & /*width*/
      1) && $(
        l,
        "width",
        /*width*/
        h[0] == null ? "100%" : `${/*width*/
        h[0]}px`
      );
      let k = s;
      s = m(h), s === k ? ~s && d[s].p(h, _) : (a && (ne(), L(d[k], 1, 1, () => {
        d[k] = null;
      }), le()), ~s ? (a = d[s], a ? a.p(h, _) : (a = d[s] = c[s](h), a.c()), S(a, 1), a.m(o, null)) : a = null), (!f || _ & /*horizontalLayout*/
      4) && ie(
        t,
        "flex",
        /*horizontalLayout*/
        h[2]
      );
    },
    i(h) {
      f || (S(i.$$.fragment, h), S(a), f = !0);
    },
    o(h) {
      L(i.$$.fragment, h), L(a), f = !1;
    },
    d(h) {
      h && M(t), u && u.d(), X(i), ~s && d[s].d();
    }
  };
}
function yc(e) {
  let t, n, l, i, r, o, s, a, f = !!/*title*/
  e[1] && so(e);
  l = new Jl({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: rt(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        e[0] ?? 1
      ],
      yScale: Zl(),
      yDomain: Ye(
        /*counts*/
        e[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        e[4]
      ) ? (
        /*colorScale*/
        e[4]
      ) : Ye(0, 1.00001, 1 / /*data*/
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
      $$slots: { default: [Rc] },
      $$scope: { ctx: e }
    }
  });
  const u = [xc, Ac, Lc], c = [];
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
  return ~(o = d(e)) && (s = c[o] = u[o](e)), {
    c() {
      f && f.c(), t = P(), n = y("div"), Z(l.$$.fragment), i = P(), r = y("div"), s && s.c(), $(
        n,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), $(n, "height", "6px"), b(n, "class", "rounded overflow-hidden mb-1"), b(r, "class", "text-xs text-slate-800 dark:text-slate-200");
    },
    m(m, h) {
      f && f.m(m, h), R(m, t, h), R(m, n, h), Y(l, n, null), R(m, i, h), R(m, r, h), ~o && c[o].m(r, null), a = !0;
    },
    p(m, h) {
      /*title*/
      m[1] ? f ? f.p(m, h) : (f = so(m), f.c(), f.m(t.parentNode, t)) : f && (f.d(1), f = null);
      const _ = {};
      h & /*width*/
      1 && (_.xRange = [
        0,
        /*width*/
        m[0] ?? 1
      ]), h & /*counts*/
      32 && (_.yDomain = Ye(
        /*counts*/
        m[5].length
      )), h & /*colorScale, data*/
      80 && (_.yRange = Array.isArray(
        /*colorScale*/
        m[4]
      ) ? (
        /*colorScale*/
        m[4]
      ) : Ye(0, 1.00001, 1 / /*data*/
      (m[6].length - 1)).map(
        /*func*/
        m[14]
      )), h & /*data*/
      64 && (_.data = /*data*/
      m[6]), h & /*hoveredIndex*/
      128 && (_.custom = { hoveredGet: (
        /*func_1*/
        m[15]
      ) }), h & /*$$scope, hoveredIndex*/
      524416 && (_.$$scope = { dirty: h, ctx: m }), l.$set(_), (!a || h & /*width*/
      1) && $(
        n,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let p = o;
      o = d(m), o === p ? ~o && c[o].p(m, h) : (s && (ne(), L(c[p], 1, 1, () => {
        c[p] = null;
      }), le()), ~o ? (s = c[o], s ? s.p(m, h) : (s = c[o] = u[o](m), s.c()), S(s, 1), s.m(r, null)) : s = null);
    },
    i(m) {
      a || (S(l.$$.fragment, m), S(s), a = !0);
    },
    o(m) {
      L(l.$$.fragment, m), L(s), a = !1;
    },
    d(m) {
      f && f.d(m), m && M(t), m && M(n), X(l), m && M(i), m && M(r), ~o && c[o].d();
    }
  };
}
function ao(e) {
  let t, n;
  return {
    c() {
      t = y("div"), n = V(
        /*title*/
        e[1]
      ), b(t, "class", "font-bold text-xs truncate text-right"), $(t, "width", "84px");
    },
    m(l, i) {
      R(l, t, i), g(t, n);
    },
    p(l, i) {
      i & /*title*/
      2 && ee(
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
function wc(e) {
  let t, n;
  return t = new ba({}), t.$on(
    "hover",
    /*hover_handler_1*/
    e[16]
  ), {
    c() {
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
    },
    p: U,
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function vc(e) {
  let t, n;
  return t = new ua({
    props: {
      $$slots: { default: [wc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, hoveredIndex*/
      524416 && (r.$$scope = { dirty: i, ctx: l }), t.$set(r);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function Sc(e) {
  let t, n = (
    /*makeTooltipText*/
    e[9](
      /*mostCommonDatum*/
      e[8]
    ) + ""
  ), l;
  return {
    c() {
      t = new Yl(!1), l = fe(), t.a = l;
    },
    m(i, r) {
      t.m(n, i, r), R(i, l, r);
    },
    p(i, r) {
      r & /*mostCommonDatum*/
      256 && n !== (n = /*makeTooltipText*/
      i[9](
        /*mostCommonDatum*/
        i[8]
      ) + "") && t.p(n);
    },
    i: U,
    o: U,
    d(i) {
      i && M(l), i && t.d();
    }
  };
}
function Cc(e) {
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
      t = new Yl(!1), l = fe(), t.a = l;
    },
    m(i, r) {
      t.m(n, i, r), R(i, l, r);
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
    i: U,
    o: U,
    d(i) {
      i && M(l), i && t.d();
    }
  };
}
function Mc(e) {
  let t;
  const n = (
    /*#slots*/
    e[12].caption
  ), l = Te(
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
    m(i, r) {
      l && l.m(i, r), t = !0;
    },
    p(i, r) {
      l && l.p && (!t || r & /*$$scope*/
      524288) && Oe(
        l,
        n,
        i,
        /*$$scope*/
        i[19],
        t ? qe(
          n,
          /*$$scope*/
          i[19],
          r,
          _c
        ) : He(
          /*$$scope*/
          i[19]
        ),
        ro
      );
    },
    i(i) {
      t || (S(l, i), t = !0);
    },
    o(i) {
      L(l, i), t = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function so(e) {
  let t, n;
  return {
    c() {
      t = y("div"), n = V(
        /*title*/
        e[1]
      ), b(t, "class", "font-bold text-xs truncate text-right");
    },
    m(l, i) {
      R(l, t, i), g(t, n);
    },
    p(l, i) {
      i & /*title*/
      2 && ee(
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
function zc(e) {
  let t, n;
  return t = new ba({}), t.$on(
    "hover",
    /*hover_handler*/
    e[13]
  ), {
    c() {
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
    },
    p: U,
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function Rc(e) {
  let t, n;
  return t = new ua({
    props: {
      $$slots: { default: [zc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*$$scope, hoveredIndex*/
      524416 && (r.$$scope = { dirty: i, ctx: l }), t.$set(r);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
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
      t = new Yl(!1), l = fe(), t.a = l;
    },
    m(i, r) {
      t.m(n, i, r), R(i, l, r);
    },
    p(i, r) {
      r & /*mostCommonDatum*/
      256 && n !== (n = /*makeTooltipText*/
      i[9](
        /*mostCommonDatum*/
        i[8]
      ) + "") && t.p(n);
    },
    i: U,
    o: U,
    d(i) {
      i && M(l), i && t.d();
    }
  };
}
function Ac(e) {
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
      t = new Yl(!1), l = fe(), t.a = l;
    },
    m(i, r) {
      t.m(n, i, r), R(i, l, r);
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
    i: U,
    o: U,
    d(i) {
      i && M(l), i && t.d();
    }
  };
}
function xc(e) {
  let t;
  const n = (
    /*#slots*/
    e[12].caption
  ), l = Te(
    n,
    e,
    /*$$scope*/
    e[19],
    oo
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
      524288) && Oe(
        l,
        n,
        i,
        /*$$scope*/
        i[19],
        t ? qe(
          n,
          /*$$scope*/
          i[19],
          r,
          pc
        ) : He(
          /*$$scope*/
          i[19]
        ),
        oo
      );
    },
    i(i) {
      t || (S(l, i), t = !0);
    },
    o(i) {
      L(l, i), t = !1;
    },
    d(i) {
      l && l.d(i);
    }
  };
}
function Nc(e) {
  let t, n, l, i;
  const r = [yc, kc], o = [];
  function s(a, f) {
    return (
      /*noParent*/
      a[3] ? 0 : 1
    );
  }
  return t = s(e), n = o[t] = r[t](e), {
    c() {
      n.c(), l = fe();
    },
    m(a, f) {
      o[t].m(a, f), R(a, l, f), i = !0;
    },
    p(a, [f]) {
      let u = t;
      t = s(a), t === u ? o[t].p(a, f) : (ne(), L(o[u], 1, 1, () => {
        o[u] = null;
      }), le(), n = o[t], n ? n.p(a, f) : (n = o[t] = r[t](a), n.c()), S(n, 1), n.m(l.parentNode, l));
    },
    i(a) {
      i || (S(n), i = !0);
    },
    o(a) {
      L(n), i = !1;
    },
    d(a) {
      o[t].d(a), a && M(l);
    }
  };
}
function Ec(e, t, n) {
  let { $$slots: l = {}, $$scope: i } = t;
  const r = Ci(l);
  let { width: o = null } = t, { title: s = null } = t, { horizontalLayout: a = !1 } = t, { noParent: f = !1 } = t, { colorScale: u = Array.from(zs) } = t, { counts: c = null } = t, { order: d = [] } = t, m = [], h;
  he(",");
  let _ = he(".1~%"), p = 1;
  function k(j) {
    return `<strong>${_(j.count / p)}</strong> ${j.name}`;
  }
  let w = null;
  const z = (j) => n(7, h = j.detail ? j.detail.index : null), D = (j) => u(j), O = (j) => j.index == h, x = (j) => n(7, h = j.detail ? j.detail.index : null), T = (j) => u(j), E = (j) => j.index == h;
  return e.$$set = (j) => {
    "width" in j && n(0, o = j.width), "title" in j && n(1, s = j.title), "horizontalLayout" in j && n(2, a = j.horizontalLayout), "noParent" in j && n(3, f = j.noParent), "colorScale" in j && n(4, u = j.colorScale), "counts" in j && n(5, c = j.counts), "order" in j && n(11, d = j.order), "$$scope" in j && n(19, i = j.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*counts, order*/
    2080)
      if (c && d.length > 0) {
        let j = Object.values(c).reduce((F, A) => F + A, 0), N = 0;
        n(6, m = d.map((F, A) => {
          let W = N;
          return N += c[F] || 0, {
            start: W / j,
            end: N / j,
            index: A,
            name: F,
            count: c[F] || 0
          };
        }));
      } else
        n(6, m = []);
    e.$$.dirty & /*counts*/
    32 && (c ? p = Object.values(c).reduce((j, N) => j + N, 0) : p = 1), e.$$.dirty & /*data*/
    64 && (m.length > 0 ? n(8, w = m.reduce((j, N) => j.count > N.count ? j : N, m[0])) : n(8, w = null));
  }, [
    o,
    s,
    a,
    f,
    u,
    c,
    m,
    h,
    w,
    k,
    r,
    d,
    l,
    z,
    D,
    O,
    x,
    T,
    E,
    i
  ];
}
class Dc extends de {
  constructor(t) {
    super(), ce(this, t, Ec, Nc, ue, {
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
function gn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
gn.prototype = {
  constructor: gn,
  scale: function(e) {
    return e === 1 ? this : new gn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new gn(this.k, this.x + this.k * e, this.y + this.k * t);
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
gn.prototype;
function fo(e) {
  let t, n, l, i;
  const r = [Hc, Oc, qc, Tc], o = [];
  function s(a, f) {
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
  return ~(t = s(e)) && (n = o[t] = r[t](e)), {
    c() {
      n && n.c(), l = fe();
    },
    m(a, f) {
      ~t && o[t].m(a, f), R(a, l, f), i = !0;
    },
    p(a, f) {
      let u = t;
      t = s(a), t === u ? ~t && o[t].p(a, f) : (n && (ne(), L(o[u], 1, 1, () => {
        o[u] = null;
      }), le()), ~t ? (n = o[t], n ? n.p(a, f) : (n = o[t] = r[t](a), n.c()), S(n, 1), n.m(l.parentNode, l)) : n = null);
    },
    i(a) {
      i || (S(n), i = !0);
    },
    o(a) {
      L(n), i = !1;
    },
    d(a) {
      ~t && o[t].d(a), a && M(l);
    }
  };
}
function Tc(e) {
  let t, n;
  return t = new Dc({
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
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
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
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function qc(e) {
  let t, n;
  return t = new bc({
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
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
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
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function Oc(e) {
  let t, n;
  return t = new Ei({
    props: {
      value: (
        /*values*/
        (e[0].count ?? 0) / /*values*/
        (e[0].total ?? 1)
      ),
      width: null,
      color: "#d97706",
      showFullBar: !0,
      $$slots: { caption: [Pc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
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
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function Hc(e) {
  let t, n;
  return t = new Ei({
    props: {
      value: (
        /*values*/
        e[0].mean ?? 0
      ),
      width: null,
      color: "#d97706",
      showFullBar: !0,
      $$slots: { caption: [jc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*values*/
      1 && (r.value = /*values*/
      l[0].mean ?? 0), i & /*$$scope, values*/
      5 && (r.$$scope = { dirty: i, ctx: l }), t.$set(r);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function Pc(e) {
  let t, n, l = he(",")(
    /*values*/
    e[0].count ?? 0
  ) + "", i, r, o = he(",")(
    /*values*/
    e[0].total ?? 1
  ) + "", s;
  return {
    c() {
      t = y("span"), n = y("strong"), i = V(l), r = V(`
        / `), s = V(o), b(t, "slot", "caption");
    },
    m(a, f) {
      R(a, t, f), g(t, n), g(n, i), g(t, r), g(t, s);
    },
    p(a, f) {
      f & /*values*/
      1 && l !== (l = he(",")(
        /*values*/
        a[0].count ?? 0
      ) + "") && ee(i, l), f & /*values*/
      1 && o !== (o = he(",")(
        /*values*/
        a[0].total ?? 1
      ) + "") && ee(s, o);
    },
    d(a) {
      a && M(t);
    }
  };
}
function jc(e) {
  let t, n, l = he(".1%")(
    /*values*/
    e[0].mean ?? 0
  ) + "", i, r, o, s = he(".1%")(1 - /*values*/
  (e[0].mean ?? 0)) + "", a, f;
  return {
    c() {
      t = y("span"), n = y("strong"), i = V(l), r = V(`
        true,
        `), o = y("strong"), a = V(s), f = V(`
        false`), b(t, "slot", "caption");
    },
    m(u, c) {
      R(u, t, c), g(t, n), g(n, i), g(t, r), g(t, o), g(o, a), g(t, f);
    },
    p(u, c) {
      c & /*values*/
      1 && l !== (l = he(".1%")(
        /*values*/
        u[0].mean ?? 0
      ) + "") && ee(i, l), c & /*values*/
      1 && s !== (s = he(".1%")(1 - /*values*/
      (u[0].mean ?? 0)) + "") && ee(a, s);
    },
    d(u) {
      u && M(t);
    }
  };
}
function Ic(e) {
  let t, n, l = !!/*values*/
  e[0] && fo(e);
  return {
    c() {
      l && l.c(), t = fe();
    },
    m(i, r) {
      l && l.m(i, r), R(i, t, r), n = !0;
    },
    p(i, [r]) {
      /*values*/
      i[0] ? l ? (l.p(i, r), r & /*values*/
      1 && S(l, 1)) : (l = fo(i), l.c(), S(l, 1), l.m(t.parentNode, t)) : l && (ne(), L(l, 1, 1, () => {
        l = null;
      }), le());
    },
    i(i) {
      n || (S(l), n = !0);
    },
    o(i) {
      L(l), n = !1;
    },
    d(i) {
      l && l.d(i), i && M(t);
    }
  };
}
function Fc(e, t, n) {
  mt(() => {
    console.log("mounted metric hcart");
  });
  let { values: l = null } = t;
  const i = (r, o) => {
    var s, a;
    return (((s = l.counts) == null ? void 0 : s[o]) ?? 0) - (((a = l.counts) == null ? void 0 : a[r]) ?? 0);
  };
  return e.$$set = (r) => {
    "values" in r && n(0, l = r.values);
  }, e.$$.update = () => {
    e.$$.dirty & /*values*/
    1 && console.log("values in metricchart:", l);
  }, [l, i];
}
class Ft extends de {
  constructor(t) {
    super(), ce(this, t, Fc, Ic, ue, { values: 0 });
  }
}
function uo(e) {
  let t, n, l, i, r = (
    /*values*/
    (e[0].type || "unknown") + ""
  ), o, s, a, f, u, c, d, m, h, _, p, k = (
    /*formatNumber*/
    e[4](
      /*values*/
      e[0].values.length ?? 0
    ) + ""
  ), w, z, D, O, x, T, E, j, N, F, A, W, C, H;
  c = new _e({
    props: {
      icon: (
        /*showCountDetails*/
        e[1] ? Be : dt
      ),
      class: "text-slate-500 dark:text-slate-300"
    }
  });
  let B = (
    /*showCountDetails*/
    e[1] && co(e)
  ), I = (
    /*values*/
    (e[0].missingness.rate.count ?? 0) > 0 && bo(e)
  ), J = (
    /*values*/
    e[0].types && _o(e)
  );
  return A = new Ft({
    props: { values: (
      /*values*/
      e[0].values
    ) }
  }), {
    c() {
      t = y("div"), n = y("span"), n.textContent = "Type:", l = P(), i = y("span"), o = V(r), s = P(), a = y("div"), f = y("div"), u = y("button"), Z(c.$$.fragment), d = P(), m = y("div"), h = y("span"), h.textContent = "Count:", _ = P(), p = y("span"), w = V(k), z = P(), D = y("span"), D.textContent = "rows", O = P(), B && B.c(), x = P(), I && I.c(), T = P(), J && J.c(), E = P(), j = y("div"), N = y("div"), N.textContent = "Values:", F = P(), Z(A.$$.fragment), b(n, "class", "font-semibold"), b(i, "class", "font-mono"), b(t, "class", "text-sm text-slate-700 dark:text-slate-300 mb-4"), b(h, "class", "font-bold text-slate-900 dark:text-slate-100"), b(p, "class", "tabular-nums text-slate-700 dark:text-slate-200"), b(D, "class", "text-slate-500 dark:text-slate-400"), b(u, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), b(u, "aria-label", "Toggle count details"), b(f, "class", "flex flex-col bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-base w-full rounded-md overflow-hidden"), b(N, "class", "mb-2 text-sm font-bold text-slate-900 dark:text-slate-100 mr-2"), b(j, "class", "flex flex-col bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 px-4 py-2 text-base w-full rounded-md"), b(a, "class", "space-y-2");
    },
    m(K, q) {
      R(K, t, q), g(t, n), g(t, l), g(t, i), g(i, o), R(K, s, q), R(K, a, q), g(a, f), g(f, u), Y(c, u, null), g(u, d), g(u, m), g(m, h), g(m, _), g(m, p), g(p, w), g(m, z), g(m, D), g(f, O), B && B.m(f, null), g(a, x), I && I.m(a, null), g(a, T), J && J.m(a, null), g(a, E), g(a, j), g(j, N), g(j, F), Y(A, j, null), W = !0, C || (H = te(
        u,
        "click",
        /*click_handler*/
        e[6]
      ), C = !0);
    },
    p(K, q) {
      (!W || q & /*values*/
      1) && r !== (r = /*values*/
      (K[0].type || "unknown") + "") && ee(o, r);
      const ae = {};
      q & /*showCountDetails*/
      2 && (ae.icon = /*showCountDetails*/
      K[1] ? Be : dt), c.$set(ae), (!W || q & /*values*/
      1) && k !== (k = /*formatNumber*/
      K[4](
        /*values*/
        K[0].values.length ?? 0
      ) + "") && ee(w, k), /*showCountDetails*/
      K[1] ? B ? (B.p(K, q), q & /*showCountDetails*/
      2 && S(B, 1)) : (B = co(K), B.c(), S(B, 1), B.m(f, null)) : B && (ne(), L(B, 1, 1, () => {
        B = null;
      }), le()), /*values*/
      (K[0].missingness.rate.count ?? 0) > 0 ? I ? (I.p(K, q), q & /*values*/
      1 && S(I, 1)) : (I = bo(K), I.c(), S(I, 1), I.m(a, T)) : I && (ne(), L(I, 1, 1, () => {
        I = null;
      }), le()), /*values*/
      K[0].types ? J ? (J.p(K, q), q & /*values*/
      1 && S(J, 1)) : (J = _o(K), J.c(), S(J, 1), J.m(a, E)) : J && (ne(), L(J, 1, 1, () => {
        J = null;
      }), le());
      const me = {};
      q & /*values*/
      1 && (me.values = /*values*/
      K[0].values), A.$set(me);
    },
    i(K) {
      W || (S(c.$$.fragment, K), S(B), S(I), S(J), S(A.$$.fragment, K), W = !0);
    },
    o(K) {
      L(c.$$.fragment, K), L(B), L(I), L(J), L(A.$$.fragment, K), W = !1;
    },
    d(K) {
      K && M(t), K && M(s), K && M(a), X(c), B && B.d(), I && I.d(), J && J.d(), X(A), C = !1, H();
    }
  };
}
function co(e) {
  let t, n, l = (
    /*values*/
    e[0].ids && mo(e)
  );
  return {
    c() {
      t = y("div"), l && l.c(), b(t, "class", "mx-2 px-2 py-2");
    },
    m(i, r) {
      R(i, t, r), l && l.m(t, null), n = !0;
    },
    p(i, r) {
      /*values*/
      i[0].ids ? l ? (l.p(i, r), r & /*values*/
      1 && S(l, 1)) : (l = mo(i), l.c(), S(l, 1), l.m(t, null)) : l && (ne(), L(l, 1, 1, () => {
        l = null;
      }), le());
    },
    i(i) {
      n || (S(l), n = !0);
    },
    o(i) {
      L(l), n = !1;
    },
    d(i) {
      i && M(t), l && l.d();
    }
  };
}
function mo(e) {
  let t, n, l, i, r, o, s, a, f, u;
  return i = new Ft({
    props: { values: (
      /*values*/
      e[0].ids.count
    ) }
  }), f = new Ft({
    props: {
      values: (
        /*values*/
        e[0].ids.count_per_trajectory
      )
    }
  }), {
    c() {
      t = y("div"), t.textContent = "Trajectories", n = P(), l = y("div"), Z(i.$$.fragment), r = P(), o = y("div"), o.textContent = "Timesteps per Trajectory", s = P(), a = y("div"), Z(f.$$.fragment), b(t, "class", "mb-1 font-semibold text-sm text-slate-800 dark:text-slate-200"), b(l, "class", "mb-2"), b(o, "class", "mb-1 font-semibold text-sm text-slate-800 dark:text-slate-200"), b(a, "class", "mb-2");
    },
    m(c, d) {
      R(c, t, d), R(c, n, d), R(c, l, d), Y(i, l, null), R(c, r, d), R(c, o, d), R(c, s, d), R(c, a, d), Y(f, a, null), u = !0;
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
      u || (S(i.$$.fragment, c), S(f.$$.fragment, c), u = !0);
    },
    o(c) {
      L(i.$$.fragment, c), L(f.$$.fragment, c), u = !1;
    },
    d(c) {
      c && M(t), c && M(n), c && M(l), X(i), c && M(r), c && M(o), c && M(s), c && M(a), X(f);
    }
  };
}
function bo(e) {
  let t, n, l, i, r, o, s, a, f = (
    /*formatPercent*/
    e[5](
      /*values*/
      (e[0].missingness.rate.count ?? 0) / /*values*/
      (e[0].missingness.rate.total ?? 1)
    ) + ""
  ), u, c, d, m, h, _, p;
  l = new _e({
    props: {
      icon: (
        /*showMissingnessDetails*/
        e[2] ? Be : dt
      ),
      class: "text-slate-500 dark:text-slate-300"
    }
  });
  let k = (
    /*showMissingnessDetails*/
    e[2] && ho(e)
  );
  return {
    c() {
      t = y("div"), n = y("button"), Z(l.$$.fragment), i = P(), r = y("div"), o = y("span"), o.textContent = "Missingness:", s = P(), a = y("span"), u = V(f), c = P(), d = y("span"), d.textContent = "of rows", m = P(), k && k.c(), b(o, "class", "font-bold text-slate-900 dark:text-slate-100"), b(a, "class", "tabular-nums text-slate-700 dark:text-slate-200"), b(d, "class", "text-slate-500 dark:text-slate-400"), b(n, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), b(n, "aria-label", "Toggle missingness details"), b(t, "class", "flex flex-col bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-base w-full rounded-md overflow-hidden");
    },
    m(w, z) {
      R(w, t, z), g(t, n), Y(l, n, null), g(n, i), g(n, r), g(r, o), g(r, s), g(r, a), g(a, u), g(r, c), g(r, d), g(t, m), k && k.m(t, null), h = !0, _ || (p = te(
        n,
        "click",
        /*click_handler_1*/
        e[7]
      ), _ = !0);
    },
    p(w, z) {
      const D = {};
      z & /*showMissingnessDetails*/
      4 && (D.icon = /*showMissingnessDetails*/
      w[2] ? Be : dt), l.$set(D), (!h || z & /*values*/
      1) && f !== (f = /*formatPercent*/
      w[5](
        /*values*/
        (w[0].missingness.rate.count ?? 0) / /*values*/
        (w[0].missingness.rate.total ?? 1)
      ) + "") && ee(u, f), /*showMissingnessDetails*/
      w[2] ? k ? (k.p(w, z), z & /*showMissingnessDetails*/
      4 && S(k, 1)) : (k = ho(w), k.c(), S(k, 1), k.m(t, null)) : k && (ne(), L(k, 1, 1, () => {
        k = null;
      }), le());
    },
    i(w) {
      h || (S(l.$$.fragment, w), S(k), h = !0);
    },
    o(w) {
      L(l.$$.fragment, w), L(k), h = !1;
    },
    d(w) {
      w && M(t), X(l), k && k.d(), _ = !1, p();
    }
  };
}
function ho(e) {
  let t, n, l = (
    /*values*/
    e[0].missingness && go(e)
  );
  return {
    c() {
      t = y("div"), l && l.c(), b(t, "class", "mx-2 px-2 py-2");
    },
    m(i, r) {
      R(i, t, r), l && l.m(t, null), n = !0;
    },
    p(i, r) {
      /*values*/
      i[0].missingness ? l ? (l.p(i, r), r & /*values*/
      1 && S(l, 1)) : (l = go(i), l.c(), S(l, 1), l.m(t, null)) : l && (ne(), L(l, 1, 1, () => {
        l = null;
      }), le());
    },
    i(i) {
      n || (S(l), n = !0);
    },
    o(i) {
      L(l), n = !1;
    },
    d(i) {
      i && M(t), l && l.d();
    }
  };
}
function go(e) {
  let t, n, l, i, r, o, s, a, f, u;
  return i = new Ft({
    props: {
      values: (
        /*values*/
        e[0].missingness.rate
      )
    }
  }), f = new Ft({
    props: {
      values: (
        /*values*/
        e[0].missingness.rate_per_trajectory
      )
    }
  }), {
    c() {
      t = y("div"), t.textContent = "Number of Missing Values", n = P(), l = y("div"), Z(i.$$.fragment), r = P(), o = y("div"), o.textContent = "Missingness Rate per Trajectory", s = P(), a = y("div"), Z(f.$$.fragment), b(t, "class", "mb-1 font-semibold text-sm text-slate-800 dark:text-slate-200"), b(l, "class", "mb-2"), b(o, "class", "mb-1 font-semibold text-sm text-slate-800 dark:text-slate-200"), b(a, "class", "mb-2");
    },
    m(c, d) {
      R(c, t, d), R(c, n, d), R(c, l, d), Y(i, l, null), R(c, r, d), R(c, o, d), R(c, s, d), R(c, a, d), Y(f, a, null), u = !0;
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
      u || (S(i.$$.fragment, c), S(f.$$.fragment, c), u = !0);
    },
    o(c) {
      L(i.$$.fragment, c), L(f.$$.fragment, c), u = !1;
    },
    d(c) {
      c && M(t), c && M(n), c && M(l), X(i), c && M(r), c && M(o), c && M(s), c && M(a), X(f);
    }
  };
}
function _o(e) {
  let t, n, l, i, r, o, s, a, f = (
    /*formatNumber*/
    e[4](Object.keys(
      /*values*/
      e[0].types.counts
    ).length ?? 0) + ""
  ), u, c, d, m, h, _, p;
  l = new _e({
    props: {
      icon: (
        /*showTypeDetails*/
        e[3] ? Be : dt
      ),
      class: "text-slate-500 dark:text-slate-300"
    }
  });
  let k = (
    /*showTypeDetails*/
    e[3] && po(e)
  );
  return {
    c() {
      t = y("div"), n = y("button"), Z(l.$$.fragment), i = P(), r = y("div"), o = y("span"), o.textContent = "Data Elements:", s = P(), a = y("span"), u = V(f), c = P(), d = y("span"), d.textContent = "distinct elements", m = P(), k && k.c(), b(o, "class", "font-bold text-slate-900 dark:text-slate-100"), b(a, "class", "tabular-nums text-slate-700 dark:text-slate-200"), b(d, "class", "text-slate-500 dark:text-slate-400"), b(n, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), b(n, "aria-label", "Toggle type details"), b(t, "class", "flex flex-col bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-base w-full rounded-md");
    },
    m(w, z) {
      R(w, t, z), g(t, n), Y(l, n, null), g(n, i), g(n, r), g(r, o), g(r, s), g(r, a), g(a, u), g(r, c), g(r, d), g(t, m), k && k.m(t, null), h = !0, _ || (p = te(
        n,
        "click",
        /*click_handler_2*/
        e[8]
      ), _ = !0);
    },
    p(w, z) {
      const D = {};
      z & /*showTypeDetails*/
      8 && (D.icon = /*showTypeDetails*/
      w[3] ? Be : dt), l.$set(D), (!h || z & /*values*/
      1) && f !== (f = /*formatNumber*/
      w[4](Object.keys(
        /*values*/
        w[0].types.counts
      ).length ?? 0) + "") && ee(u, f), /*showTypeDetails*/
      w[3] ? k ? (k.p(w, z), z & /*showTypeDetails*/
      8 && S(k, 1)) : (k = po(w), k.c(), S(k, 1), k.m(t, null)) : k && (ne(), L(k, 1, 1, () => {
        k = null;
      }), le());
    },
    i(w) {
      h || (S(l.$$.fragment, w), S(k), h = !0);
    },
    o(w) {
      L(l.$$.fragment, w), L(k), h = !1;
    },
    d(w) {
      w && M(t), X(l), k && k.d(), _ = !1, p();
    }
  };
}
function po(e) {
  let t, n, l;
  return n = new Ft({
    props: { values: (
      /*values*/
      e[0].types
    ) }
  }), {
    c() {
      t = y("div"), Z(n.$$.fragment), b(t, "class", "mx-2 px-2 py-2");
    },
    m(i, r) {
      R(i, t, r), Y(n, t, null), l = !0;
    },
    p(i, r) {
      const o = {};
      r & /*values*/
      1 && (o.values = /*values*/
      i[0].types), n.$set(o);
    },
    i(i) {
      l || (S(n.$$.fragment, i), l = !0);
    },
    o(i) {
      L(n.$$.fragment, i), l = !1;
    },
    d(i) {
      i && M(t), X(n);
    }
  };
}
function Qc(e) {
  let t, n, l = (
    /*values*/
    e[0] && /*values*/
    e[0].values && uo(e)
  );
  return {
    c() {
      l && l.c(), t = fe();
    },
    m(i, r) {
      l && l.m(i, r), R(i, t, r), n = !0;
    },
    p(i, [r]) {
      /*values*/
      i[0] && /*values*/
      i[0].values ? l ? (l.p(i, r), r & /*values*/
      1 && S(l, 1)) : (l = uo(i), l.c(), S(l, 1), l.m(t.parentNode, t)) : l && (ne(), L(l, 1, 1, () => {
        l = null;
      }), le());
    },
    i(i) {
      n || (S(l), n = !0);
    },
    o(i) {
      L(l), n = !1;
    },
    d(i) {
      l && l.d(i), i && M(t);
    }
  };
}
function Bc(e, t, n) {
  let { values: l = null } = t, i = !1, r = !1, o = !1;
  const s = he(","), a = he(".1~%"), f = () => n(1, i = !i), u = () => n(2, r = !r), c = () => n(3, o = !o);
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
    s,
    a,
    f,
    u,
    c
  ];
}
class ha extends de {
  constructor(t) {
    super(), ce(this, t, Bc, Qc, ue, { values: 0 });
  }
}
function ko(e, t, n) {
  const l = e.slice();
  return l[4] = t[n], l;
}
function yo(e) {
  let t, n, l, i, r;
  n = new ha({
    props: { values: (
      /*data*/
      e[1].result
    ) }
  });
  let o = (
    /*data*/
    e[1].dataset_queries && /*data*/
    e[1].dataset_queries.length > 0 && wo(e)
  );
  return {
    c() {
      t = y("div"), Z(n.$$.fragment), l = P(), o && o.c(), i = fe(), b(t, "class", "p-4 border-t border-slate-200 dark:border-slate-700");
    },
    m(s, a) {
      R(s, t, a), Y(n, t, null), R(s, l, a), o && o.m(s, a), R(s, i, a), r = !0;
    },
    p(s, a) {
      const f = {};
      a & /*data*/
      2 && (f.values = /*data*/
      s[1].result), n.$set(f), /*data*/
      s[1].dataset_queries && /*data*/
      s[1].dataset_queries.length > 0 ? o ? o.p(s, a) : (o = wo(s), o.c(), o.m(i.parentNode, i)) : o && (o.d(1), o = null);
    },
    i(s) {
      r || (S(n.$$.fragment, s), r = !0);
    },
    o(s) {
      L(n.$$.fragment, s), r = !1;
    },
    d(s) {
      s && M(t), X(n), s && M(l), o && o.d(s), s && M(i);
    }
  };
}
function wo(e) {
  let t, n, l, i = (
    /*data*/
    e[1].dataset_queries
  ), r = [];
  for (let o = 0; o < i.length; o += 1)
    r[o] = vo(ko(e, i, o));
  return {
    c() {
      t = y("div"), n = y("div"), n.textContent = "SQL Queries", l = P();
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      b(n, "class", "text-xs font-semibold text-slate-500 mb-1 uppercase"), b(t, "class", "p-4 border-t border-slate-200 dark:border-slate-700");
    },
    m(o, s) {
      R(o, t, s), g(t, n), g(t, l);
      for (let a = 0; a < r.length; a += 1)
        r[a] && r[a].m(t, null);
    },
    p(o, s) {
      if (s & /*data*/
      2) {
        i = /*data*/
        o[1].dataset_queries;
        let a;
        for (a = 0; a < i.length; a += 1) {
          const f = ko(o, i, a);
          r[a] ? r[a].p(f, s) : (r[a] = vo(f), r[a].c(), r[a].m(t, null));
        }
        for (; a < r.length; a += 1)
          r[a].d(1);
        r.length = i.length;
      }
    },
    d(o) {
      o && M(t), xe(r, o);
    }
  };
}
function vo(e) {
  let t, n = (
    /*sql*/
    e[4] + ""
  ), l;
  return {
    c() {
      t = y("pre"), l = V(n), b(t, "class", "bg-white dark:bg-slate-900 text-xs font-mono p-2 rounded");
    },
    m(i, r) {
      R(i, t, r), g(t, l);
    },
    p(i, r) {
      r & /*data*/
      2 && n !== (n = /*sql*/
      i[4] + "") && ee(l, n);
    },
    d(i) {
      i && M(t);
    }
  };
}
function Vc(e) {
  let t, n, l, i, r, o, s, a, f, u;
  o = new _e({
    props: {
      icon: (
        /*isExpanded*/
        e[2] ? jl : Be
      ),
      class: "text-slate-600 dark:text-slate-300"
    }
  });
  let c = (
    /*isExpanded*/
    e[2] && yo(e)
  );
  return {
    c() {
      t = y("div"), n = y("button"), l = y("span"), i = V(
        /*queryText*/
        e[0]
      ), r = P(), Z(o.$$.fragment), s = P(), c && c.c(), b(l, "class", "text-sm font-mono text-slate-700 dark:text-slate-300 truncate flex-1"), b(n, "class", "w-full px-3 py-2 text-left flex items-center justify-between bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200 focus:outline-none"), b(t, "class", "border border-slate-300 dark:border-slate-600 rounded-md mb-2 overflow-hidden");
    },
    m(d, m) {
      R(d, t, m), g(t, n), g(n, l), g(l, i), g(n, r), Y(o, n, null), g(t, s), c && c.m(t, null), a = !0, f || (u = te(
        n,
        "click",
        /*toggleExpanded*/
        e[3]
      ), f = !0);
    },
    p(d, [m]) {
      (!a || m & /*queryText*/
      1) && ee(
        i,
        /*queryText*/
        d[0]
      );
      const h = {};
      m & /*isExpanded*/
      4 && (h.icon = /*isExpanded*/
      d[2] ? jl : Be), o.$set(h), /*isExpanded*/
      d[2] ? c ? (c.p(d, m), m & /*isExpanded*/
      4 && S(c, 1)) : (c = yo(d), c.c(), S(c, 1), c.m(t, null)) : c && (ne(), L(c, 1, 1, () => {
        c = null;
      }), le());
    },
    i(d) {
      a || (S(o.$$.fragment, d), S(c), a = !0);
    },
    o(d) {
      L(o.$$.fragment, d), L(c), a = !1;
    },
    d(d) {
      d && M(t), X(o), c && c.d(), f = !1, u();
    }
  };
}
function Gc(e, t, n) {
  let { queryText: l } = t, { data: i } = t, r = !1;
  function o() {
    n(2, r = !r);
  }
  return e.$$set = (s) => {
    "queryText" in s && n(0, l = s.queryText), "data" in s && n(1, i = s.data);
  }, [l, i, r, o];
}
class Wc extends de {
  constructor(t) {
    super(), ce(this, t, Gc, Vc, ue, { queryText: 0, data: 1 });
  }
}
function So(e, t, n) {
  const l = e.slice();
  return l[5] = t[n][0], l[6] = t[n][1], l;
}
function Co(e) {
  let t, n, l, i, r;
  const o = [Yc, Kc], s = [];
  function a(f, u) {
    return u & /*subqueries*/
    4 && (n = null), n == null && (n = Object.keys(
      /*subqueries*/
      f[2]
    ).length > 0), n ? 0 : 1;
  }
  return l = a(e, -1), i = s[l] = o[l](e), {
    c() {
      t = y("div"), i.c(), b(t, "class", "space-y-2 mt-3");
    },
    m(f, u) {
      R(f, t, u), s[l].m(t, null), r = !0;
    },
    p(f, u) {
      let c = l;
      l = a(f, u), l === c ? s[l].p(f, u) : (ne(), L(s[c], 1, 1, () => {
        s[c] = null;
      }), le(), i = s[l], i ? i.p(f, u) : (i = s[l] = o[l](f), i.c()), S(i, 1), i.m(t, null));
    },
    i(f) {
      r || (S(i), r = !0);
    },
    o(f) {
      L(i), r = !1;
    },
    d(f) {
      f && M(t), s[l].d();
    }
  };
}
function Kc(e) {
  let t;
  return {
    c() {
      t = y("div"), t.textContent = "No subqueries yet", b(t, "class", "text-center py-8 text-slate-900 dark:text-slate-100");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: U,
    i: U,
    o: U,
    d(n) {
      n && M(t);
    }
  };
}
function Yc(e) {
  let t, n, l = Object.entries(
    /*subqueries*/
    e[2]
  ), i = [];
  for (let o = 0; o < l.length; o += 1)
    i[o] = Mo(So(e, l, o));
  const r = (o) => L(i[o], 1, 1, () => {
    i[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      t = fe();
    },
    m(o, s) {
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(o, s);
      R(o, t, s), n = !0;
    },
    p(o, s) {
      if (s & /*Object, subqueries*/
      4) {
        l = Object.entries(
          /*subqueries*/
          o[2]
        );
        let a;
        for (a = 0; a < l.length; a += 1) {
          const f = So(o, l, a);
          i[a] ? (i[a].p(f, s), S(i[a], 1)) : (i[a] = Mo(f), i[a].c(), S(i[a], 1), i[a].m(t.parentNode, t));
        }
        for (ne(), a = l.length; a < i.length; a += 1)
          r(a);
        le();
      }
    },
    i(o) {
      if (!n) {
        for (let s = 0; s < l.length; s += 1)
          S(i[s]);
        n = !0;
      }
    },
    o(o) {
      i = i.filter(Boolean);
      for (let s = 0; s < i.length; s += 1)
        L(i[s]);
      n = !1;
    },
    d(o) {
      xe(i, o), o && M(t);
    }
  };
}
function Mo(e) {
  let t, n;
  return t = new Wc({
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
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
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
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function Xc(e) {
  let t, n, l, i, r, o, s, a, f, u, c;
  o = new _e({
    props: {
      icon: (
        /*enabled*/
        e[0] ? jl : Be
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
      t = y("div"), n = y("button"), l = y("h3"), l.textContent = "Subqueries", i = P(), r = y("div"), Z(o.$$.fragment), s = P(), d && d.c(), b(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100"), b(r, "class", "p-2 text-slate-800 dark:text-slate-200"), b(n, "class", "block flex items-center justify-between mb-2 bg-transparent hover:opacity-50"), b(t, "class", a = "p-2 mb-0 border-0 rounded-none " + /*width*/
      e[1] + " transition-colors duration-200"), ie(t, "opacity-50", Object.keys(
        /*subqueries*/
        e[2]
      ).length == 0);
    },
    m(m, h) {
      R(m, t, h), g(t, n), g(n, l), g(n, i), g(n, r), Y(o, r, null), g(t, s), d && d.m(t, null), f = !0, u || (c = te(
        n,
        "click",
        /*click_handler*/
        e[4]
      ), u = !0);
    },
    p(m, [h]) {
      const _ = {};
      h & /*enabled*/
      1 && (_.icon = /*enabled*/
      m[0] ? jl : Be), o.$set(_), /*enabled*/
      m[0] ? d ? (d.p(m, h), h & /*enabled*/
      1 && S(d, 1)) : (d = Co(m), d.c(), S(d, 1), d.m(t, null)) : d && (ne(), L(d, 1, 1, () => {
        d = null;
      }), le()), (!f || h & /*width*/
      2 && a !== (a = "p-2 mb-0 border-0 rounded-none " + /*width*/
      m[1] + " transition-colors duration-200")) && b(t, "class", a), (!f || h & /*width, Object, subqueries*/
      6) && ie(t, "opacity-50", Object.keys(
        /*subqueries*/
        m[2]
      ).length == 0);
    },
    i(m) {
      f || (S(o.$$.fragment, m), S(d), f = !0);
    },
    o(m) {
      L(o.$$.fragment, m), L(d), f = !1;
    },
    d(m) {
      m && M(t), X(o), d && d.d(), u = !1, c();
    }
  };
}
function Uc(e, t, n) {
  let { width: l = "w-full max-w-2xl" } = t, { enabled: i = !1 } = t, { subqueries: r = {} } = t, { idsLength: o = 0 } = t;
  const s = () => n(0, i = !i);
  return e.$$set = (a) => {
    "width" in a && n(1, l = a.width), "enabled" in a && n(0, i = a.enabled), "subqueries" in a && n(2, r = a.subqueries), "idsLength" in a && n(3, o = a.idsLength);
  }, e.$$.update = () => {
    e.$$.dirty & /*subqueries, enabled*/
    5 && (console.log("🔍 SubquerySection - subqueries changed:", r), console.log("🔍 SubquerySection - enabled:", i), console.log("🔍 SubquerySection - subqueries keys:", Object.keys(r)));
  }, [i, l, r, o, s];
}
class Zc extends de {
  constructor(t) {
    super(), ce(this, t, Uc, Xc, ue, {
      width: 1,
      enabled: 0,
      subqueries: 2,
      idsLength: 3
    });
  }
}
function Jc(e) {
  let t, n;
  return t = new _e({ props: { icon: Wa } }), {
    c() {
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
    },
    p: U,
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function $c(e) {
  let t, n;
  return t = new _e({ props: { icon: Xa } }), {
    c() {
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
    },
    p: U,
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function e0(e) {
  let t, n, l, i, r, o, s, a, f, u;
  const c = [$c, Jc], d = [];
  function m(h, _) {
    return (
      /*copied*/
      h[2] ? 0 : 1
    );
  }
  return l = m(e), i = d[l] = c[l](e), {
    c() {
      t = y("div"), n = y("button"), i.c(), r = P(), o = y("code"), s = V(
        /*content*/
        e[0]
      ), b(n, "class", "p-2 absolute right-0 top-0 mr-2 mt-2 hover:opacity-50 text-slate-700 dark:text-slate-200 text-sm"), b(n, "title", "Copy"), b(o, "class", "font-mono whitespace-pre-line"), b(
        o,
        "id",
        /*highlightedViewID*/
        e[3]
      ), b(t, "class", "bg-slate-100 dark:bg-slate-800 rounded-md my-2 p-4 pr-8 relative text-slate-900 dark:text-slate-100");
    },
    m(h, _) {
      R(h, t, _), g(t, n), d[l].m(n, null), g(t, r), g(t, o), g(o, s), e[6](o), a = !0, f || (u = te(
        n,
        "click",
        /*click_handler*/
        e[5]
      ), f = !0);
    },
    p(h, [_]) {
      let p = l;
      l = m(h), l === p ? d[l].p(h, _) : (ne(), L(d[p], 1, 1, () => {
        d[p] = null;
      }), le(), i = d[l], i ? i.p(h, _) : (i = d[l] = c[l](h), i.c()), S(i, 1), i.m(n, null)), (!a || _ & /*content*/
      1) && ee(
        s,
        /*content*/
        h[0]
      );
    },
    i(h) {
      a || (S(i), a = !0);
    },
    o(h) {
      L(i), a = !1;
    },
    d(h) {
      h && M(t), d[l].d(), e[6](null), f = !1, u();
    }
  };
}
function t0(e, t, n) {
  let { content: l = "" } = t, i = "highlightView-" + new Array(20).fill(0).map(() => Math.floor(Math.random() * 10)).join(""), r, o = !1;
  async function s(u) {
    try {
      await navigator.clipboard.writeText(u);
    } catch {
      const d = document.createElement("textarea");
      d.value = u, document.body.appendChild(d), d.select(), document.execCommand("copy"), document.body.removeChild(d);
    }
    n(2, o = !0), setTimeout(() => n(2, o = !1), 5e3);
  }
  const a = () => s(l);
  function f(u) {
    Se[u ? "unshift" : "push"](() => {
      r = u, n(1, r), n(0, l), n(3, i);
    });
  }
  return e.$$set = (u) => {
    "content" in u && n(0, l = u.content);
  }, e.$$.update = () => {
    e.$$.dirty & /*highlightView, content*/
    3 && r && l && (n(1, r.innerText = na(l), r), ea({
      selector: `#${i}`,
      patterns: ta
    }));
  }, [
    l,
    r,
    o,
    i,
    s,
    a,
    f
  ];
}
class n0 extends de {
  constructor(t) {
    super(), ce(this, t, t0, e0, ue, { content: 0 });
  }
}
function zo(e, t, n) {
  const l = e.slice();
  return l[6] = t[n], l[8] = n, l;
}
function l0(e) {
  let t, n = Ao(
    /*block*/
    e[6].content
  ) + "";
  return {
    c() {
      t = y("div"), b(t, "class", "leading-relaxed mb-2");
    },
    m(l, i) {
      R(l, t, i), t.innerHTML = n;
    },
    p(l, i) {
      i & /*blocks*/
      4 && n !== (n = Ao(
        /*block*/
        l[6].content
      ) + "") && (t.innerHTML = n);
    },
    i: U,
    o: U,
    d(l) {
      l && M(t);
    }
  };
}
function i0(e) {
  let t, n;
  return t = new n0({
    props: { content: (
      /*block*/
      e[6].content
    ) }
  }), {
    c() {
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*blocks*/
      4 && (r.content = /*block*/
      l[6].content), t.$set(r);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function Ro(e) {
  let t, n, l, i;
  const r = [i0, l0], o = [];
  function s(a, f) {
    return (
      /*block*/
      a[6].type === "code" ? 0 : 1
    );
  }
  return t = s(e), n = o[t] = r[t](e), {
    c() {
      n.c(), l = fe();
    },
    m(a, f) {
      o[t].m(a, f), R(a, l, f), i = !0;
    },
    p(a, f) {
      let u = t;
      t = s(a), t === u ? o[t].p(a, f) : (ne(), L(o[u], 1, 1, () => {
        o[u] = null;
      }), le(), n = o[t], n ? n.p(a, f) : (n = o[t] = r[t](a), n.c()), S(n, 1), n.m(l.parentNode, l));
    },
    i(a) {
      i || (S(n), i = !0);
    },
    o(a) {
      L(n), i = !1;
    },
    d(a) {
      o[t].d(a), a && M(l);
    }
  };
}
function Lo(e) {
  let t, n, l = /*collapsed*/ e[0] ? "More" : "Less", i, r, o;
  return {
    c() {
      t = y("div"), n = y("a"), i = V(l), b(n, "class", "text-blue-600 dark:text-blue-400 hover:opacity-50 text-sm"), b(n, "href", "#");
    },
    m(s, a) {
      R(s, t, a), g(t, n), g(n, i), r || (o = te(
        n,
        "click",
        /*click_handler*/
        e[5]
      ), r = !0);
    },
    p(s, a) {
      a & /*collapsed*/
      1 && l !== (l = /*collapsed*/
      s[0] ? "More" : "Less") && ee(i, l);
    },
    d(s) {
      s && M(t), r = !1, o();
    }
  };
}
function r0(e) {
  let t, n, l, i = (
    /*blocks*/
    e[2]
  ), r = [];
  for (let a = 0; a < i.length; a += 1)
    r[a] = Ro(zo(e, i, a));
  const o = (a) => L(r[a], 1, 1, () => {
    r[a] = null;
  });
  let s = (
    /*collapsible*/
    e[1] && Lo(e)
  );
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      t = P(), s && s.c(), n = fe();
    },
    m(a, f) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(a, f);
      R(a, t, f), s && s.m(a, f), R(a, n, f), l = !0;
    },
    p(a, [f]) {
      if (f & /*blocks, formatMarkdown*/
      4) {
        i = /*blocks*/
        a[2];
        let u;
        for (u = 0; u < i.length; u += 1) {
          const c = zo(a, i, u);
          r[u] ? (r[u].p(c, f), S(r[u], 1)) : (r[u] = Ro(c), r[u].c(), S(r[u], 1), r[u].m(t.parentNode, t));
        }
        for (ne(), u = i.length; u < r.length; u += 1)
          o(u);
        le();
      }
      /*collapsible*/
      a[1] ? s ? s.p(a, f) : (s = Lo(a), s.c(), s.m(n.parentNode, n)) : s && (s.d(1), s = null);
    },
    i(a) {
      if (!l) {
        for (let f = 0; f < i.length; f += 1)
          S(r[f]);
        l = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let f = 0; f < r.length; f += 1)
        L(r[f]);
      l = !1;
    },
    d(a) {
      xe(r, a), a && M(t), s && s.d(a), a && M(n);
    }
  };
}
function o0(e) {
  const t = e.split(`
`), n = [];
  let l = !1, i = [], r = [];
  for (let o of t)
    o.startsWith("```") ? l ? (l = !1, n.push({
      type: "code",
      content: i.join(`
`)
    }), i = []) : (l = !0, o.slice(3).trim(), r.length && (n.push({
      type: "text",
      content: r.join(`
`)
    }), r = [])) : l ? i.push(o) : r.push(o);
  return r.length && n.push({
    type: "text",
    content: r.join(`
`)
  }), n;
}
function Ao(e) {
  let t = e;
  return t = t.replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\*\*([^\*\n]+)(\*\*|$)/g, "<strong>$1</strong>").replace(/\*([^\*\n]+)\*/g, "<em>$1</em>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>'), t = t.replace(new RegExp("(?<!<\\/[ou]l>)\\n", "g"), "<br>"), t;
}
function a0(e, t, n) {
  let l, { text: i } = t, { collapseLength: r = null } = t, o = [], s = !0;
  const a = () => n(0, s = !s);
  return e.$$set = (f) => {
    "text" in f && n(3, i = f.text), "collapseLength" in f && n(4, r = f.collapseLength);
  }, e.$$.update = () => {
    e.$$.dirty & /*collapseLength, text*/
    24 && n(1, l = !!r && i.length > r), e.$$.dirty & /*collapsible, collapsed, text, collapseLength*/
    27 && n(2, o = o0(l && s ? i.slice(0, r) + "..." : i));
  }, [s, l, o, i, r, a];
}
class Ti extends de {
  constructor(t) {
    super(), ce(this, t, a0, r0, ue, { text: 3, collapseLength: 4 });
  }
}
function s0(e) {
  let t, n, l, i, r;
  const o = [m0, d0, c0, u0], s = [];
  function a(f, u) {
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
  return ~(n = a(e)) && (l = s[n] = o[n](e)), {
    c() {
      t = y("div"), l && l.c(), b(t, "class", i = "h-full " + /*scrollable*/
      (e[5] ? "overflow-auto" : ""));
    },
    m(f, u) {
      R(f, t, u), ~n && s[n].m(t, null), r = !0;
    },
    p(f, u) {
      let c = n;
      n = a(f), n === c ? ~n && s[n].p(f, u) : (l && (ne(), L(s[c], 1, 1, () => {
        s[c] = null;
      }), le()), ~n ? (l = s[n], l ? l.p(f, u) : (l = s[n] = o[n](f), l.c()), S(l, 1), l.m(t, null)) : l = null), (!r || u & /*scrollable*/
      32 && i !== (i = "h-full " + /*scrollable*/
      (f[5] ? "overflow-auto" : ""))) && b(t, "class", i);
    },
    i(f) {
      r || (S(l), r = !0);
    },
    o(f) {
      L(l), r = !1;
    },
    d(f) {
      f && M(t), ~n && s[n].d();
    }
  };
}
function f0(e) {
  let t, n, l, i, r, o, s, a, f, u, c, d, m, h, _;
  return o = new _e({
    props: { icon: Go, class: "inline mr-2" }
  }), u = new _e({
    props: {
      icon: Vo,
      class: "inline mr-2"
    }
  }), {
    c() {
      t = y("div"), n = y("textarea"), l = P(), i = y("div"), r = y("button"), Z(o.$$.fragment), s = V(`
          History`), a = P(), f = y("button"), Z(u.$$.fragment), c = V(`
          Ask AI`), b(n, "class", "w-full h-full p-4 pb-16 bg-transparent text-sm bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-slate-500 dark:placeholder-slate-400 resize-none overflow-hidden min-h-[120px] relative z-20"), b(n, "placeholder", "Ask me to generate, update, or explain a TempoQL query..."), n.disabled = /*isLoading*/
      e[0], b(n, "rows", "5"), b(r, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-slate-200 hover:bg-slate-200/50 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white"), b(r, "title", "View query history"), b(f, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50"), f.disabled = d = !/*inputValue*/
      e[8].trim() || /*isLoading*/
      e[0], b(i, "class", "absolute right-0 bottom-0 mr-4 mb-4 flex justify-end items-center gap-2 z-50"), b(t, "class", "relative w-full min-h-0 flex-auto");
    },
    m(p, k) {
      R(p, t, k), g(t, n), e[21](n), jt(
        n,
        /*inputValue*/
        e[8]
      ), g(t, l), g(t, i), g(i, r), Y(o, r, null), g(r, s), g(i, a), g(i, f), Y(u, f, null), g(f, c), m = !0, h || (_ = [
        te(
          n,
          "input",
          /*textarea_input_handler*/
          e[22]
        ),
        te(
          n,
          "keydown",
          /*handleKeydown*/
          e[13]
        ),
        te(r, "click", function() {
          ot(
            /*onHistoryClick*/
            e[6]
          ) && e[6].apply(this, arguments);
        }),
        te(
          f,
          "click",
          /*click_handler_2*/
          e[23]
        )
      ], h = !0);
    },
    p(p, k) {
      e = p, (!m || k & /*isLoading*/
      1) && (n.disabled = /*isLoading*/
      e[0]), k & /*inputValue*/
      256 && jt(
        n,
        /*inputValue*/
        e[8]
      ), (!m || k & /*inputValue, isLoading*/
      257 && d !== (d = !/*inputValue*/
      e[8].trim() || /*isLoading*/
      e[0])) && (f.disabled = d);
    },
    i(p) {
      m || (S(o.$$.fragment, p), S(u.$$.fragment, p), m = !0);
    },
    o(p) {
      L(o.$$.fragment, p), L(u.$$.fragment, p), m = !1;
    },
    d(p) {
      p && M(t), e[21](null), X(o), X(u), h = !1, ye(_);
    }
  };
}
function u0(e) {
  let t, n, l, i;
  return l = new Ti({ props: { text: (
    /*llmResponse*/
    e[2]
  ) } }), {
    c() {
      t = y("div"), n = y("div"), Z(l.$$.fragment), b(n, "class", "text-slate-700 dark:text-slate-200 text-sm leading-relaxed prose prose-sm max-w-none"), b(t, "class", "flex-1 overflow-y-auto ai-scrollbar");
    },
    m(r, o) {
      R(r, t, o), g(t, n), Y(l, n, null), i = !0;
    },
    p(r, o) {
      const s = {};
      o & /*llmResponse*/
      4 && (s.text = /*llmResponse*/
      r[2]), l.$set(s);
    },
    i(r) {
      i || (S(l.$$.fragment, r), i = !0);
    },
    o(r) {
      L(l.$$.fragment, r), i = !1;
    },
    d(r) {
      r && M(t), X(l);
    }
  };
}
function c0(e) {
  let t, n, l, i, r;
  return i = new Ti({
    props: { text: (
      /*historicalResponse*/
      e[7]
    ) }
  }), {
    c() {
      t = y("div"), t.innerHTML = `<span class="text-purple-600 dark:text-purple-400 text-lg">📚</span> 
          <h4 class="text-purple-600 dark:text-purple-400 font-medium text-sm">Historical Response</h4>`, n = P(), l = y("div"), Z(i.$$.fragment), b(t, "class", "flex items-center space-x-3 p-4 border-b border-slate-300 dark:border-slate-600 flex-shrink-0"), b(l, "class", "flex-1 overflow-y-auto p-4 ai-scrollbar");
    },
    m(o, s) {
      R(o, t, s), R(o, n, s), R(o, l, s), Y(i, l, null), r = !0;
    },
    p(o, s) {
      const a = {};
      s & /*historicalResponse*/
      128 && (a.text = /*historicalResponse*/
      o[7]), i.$set(a);
    },
    i(o) {
      r || (S(i.$$.fragment, o), r = !0);
    },
    o(o) {
      L(i.$$.fragment, o), r = !1;
    },
    d(o) {
      o && M(t), o && M(n), o && M(l), X(i);
    }
  };
}
function d0(e) {
  let t, n, l, i, r;
  return {
    c() {
      t = y("div"), n = y("h3"), n.textContent = "Error", l = P(), i = y("div"), r = V(
        /*error*/
        e[1]
      ), b(n, "class", "text-lg font-medium text-red-700 dark:text-red-100 mb-2"), b(i, "class", "text-sm font-mono text-slate-800 dark:text-slate-100"), b(t, "class", "bg-red-50 dark:bg-red-800/40 rounded-lg border border-red-200 dark:border-red-400 p-4 mb-4");
    },
    m(o, s) {
      R(o, t, s), g(t, n), g(t, l), g(t, i), g(i, r);
    },
    p(o, s) {
      s & /*error*/
      2 && ee(
        r,
        /*error*/
        o[1]
      );
    },
    i: U,
    o: U,
    d(o) {
      o && M(t);
    }
  };
}
function m0(e) {
  let t;
  return {
    c() {
      t = y("h4"), t.innerHTML = `<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 dark:border-blue-400"></span>
           AI is thinking...`, b(t, "class", "text-blue-600 dark:text-blue-400 font-medium text-sm");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: U,
    i: U,
    o: U,
    d(n) {
      n && M(t);
    }
  };
}
function b0(e) {
  let t, n, l, i, r, o, s, a, f, u, c, d, m, h, _, p, k, w, z, D, O, x, T, E, j, N;
  k = new _e({
    props: {
      icon: (
        /*apiStatusInfo*/
        e[11].icon
      ),
      class: "inline mr-2"
    }
  });
  const F = [f0, s0], A = [];
  function W(C, H) {
    return (
      /*tab*/
      C[9] == "query" ? 0 : 1
    );
  }
  return O = W(e), x = A[O] = F[O](e), {
    c() {
      t = y("div"), n = y("div"), l = y("h3"), l.textContent = "AI Assistant", i = P(), r = y("button"), o = V("Query"), a = P(), f = y("button"), u = V("Response"), m = P(), h = y("div"), _ = P(), p = y("div"), Z(k.$$.fragment), w = P(), z = V(
        /*apiStatus*/
        e[3]
      ), D = P(), x.c(), b(l, "class", "text-lg font-semibold text-slate-900 dark:text-slate-100 pr-2"), b(r, "class", s = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*tab*/
      (e[9] === "query" ? "bg-slate-600 text-white dark:bg-slate-200 dark:text-slate-800" : "dark:text-white bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800")), b(r, "type", "button"), b(f, "class", c = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 disabled:opacity-50 " + /*tab*/
      (e[9] === "response" ? "bg-slate-600 text-white dark:bg-slate-200 dark:text-slate-800" : "dark:text-white bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800")), f.disabled = d = !/*llmResponse*/
      e[2] && !/*error*/
      e[1], b(f, "type", "button"), b(h, "class", "flex-auto"), b(p, "class", "flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300"), b(n, "class", "flex items-center mb-4 gap-2 shrink-0"), b(t, "class", T = "px-4 pb-4 " + /*width*/
      e[4] + " h-full flex flex-col");
    },
    m(C, H) {
      R(C, t, H), g(t, n), g(n, l), g(n, i), g(n, r), g(r, o), g(n, a), g(n, f), g(f, u), g(n, m), g(n, h), g(n, _), g(n, p), Y(k, p, null), g(p, w), g(p, z), g(t, D), A[O].m(t, null), E = !0, j || (N = [
        te(
          r,
          "click",
          /*click_handler*/
          e[19]
        ),
        te(
          f,
          "click",
          /*click_handler_1*/
          e[20]
        )
      ], j = !0);
    },
    p(C, [H]) {
      (!E || H & /*tab*/
      512 && s !== (s = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*tab*/
      (C[9] === "query" ? "bg-slate-600 text-white dark:bg-slate-200 dark:text-slate-800" : "dark:text-white bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800"))) && b(r, "class", s), (!E || H & /*tab*/
      512 && c !== (c = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 disabled:opacity-50 " + /*tab*/
      (C[9] === "response" ? "bg-slate-600 text-white dark:bg-slate-200 dark:text-slate-800" : "dark:text-white bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800"))) && b(f, "class", c), (!E || H & /*llmResponse, error*/
      6 && d !== (d = !/*llmResponse*/
      C[2] && !/*error*/
      C[1])) && (f.disabled = d);
      const B = {};
      H & /*apiStatusInfo*/
      2048 && (B.icon = /*apiStatusInfo*/
      C[11].icon), k.$set(B), (!E || H & /*apiStatus*/
      8) && ee(
        z,
        /*apiStatus*/
        C[3]
      );
      let I = O;
      O = W(C), O === I ? A[O].p(C, H) : (ne(), L(A[I], 1, 1, () => {
        A[I] = null;
      }), le(), x = A[O], x ? x.p(C, H) : (x = A[O] = F[O](C), x.c()), S(x, 1), x.m(t, null)), (!E || H & /*width*/
      16 && T !== (T = "px-4 pb-4 " + /*width*/
      C[4] + " h-full flex flex-col")) && b(t, "class", T);
    },
    i(C) {
      E || (S(k.$$.fragment, C), S(x), E = !0);
    },
    o(C) {
      L(k.$$.fragment, C), L(x), E = !1;
    },
    d(C) {
      C && M(t), X(k), A[O].d(), j = !1, ye(N);
    }
  };
}
function h0(e, t, n) {
  let l, { onSubmit: i = () => {
  } } = t, { isLoading: r = !1 } = t, { error: o = "" } = t, { llmResponse: s = "" } = t, { apiStatus: a = "Checking API connection..." } = t, { width: f = "w-full" } = t, { scrollable: u = !0 } = t, { extractedQuery: c = "" } = t, { hasExtractedQuery: d = !1 } = t, { onQueryExtracted: m = () => {
  } } = t, { onHistoryClick: h = () => {
  } } = t, { inputValueOverride: _ = "" } = t, { historicalResponse: p = "" } = t, k = "query", w = "", z;
  function D() {
    w.trim() && (i(w.trim()), z && z.focus());
  }
  function O(A) {
    A.key === "Enter" && !A.shiftKey && (A.preventDefault(), D());
  }
  function x(A) {
    return A.includes("Configured") || A.includes("ready") ? {
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      icon: Ia
    } : A.includes("Not configured") || A.includes("Invalid") ? {
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      icon: es
    } : {
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      icon: Za
    };
  }
  const T = () => n(9, k = "query"), E = () => n(9, k = "response");
  function j(A) {
    Se[A ? "unshift" : "push"](() => {
      z = A, n(10, z);
    });
  }
  function N() {
    w = this.value, n(8, w), n(18, _);
  }
  const F = () => {
    D(), n(9, k = "response");
  };
  return e.$$set = (A) => {
    "onSubmit" in A && n(14, i = A.onSubmit), "isLoading" in A && n(0, r = A.isLoading), "error" in A && n(1, o = A.error), "llmResponse" in A && n(2, s = A.llmResponse), "apiStatus" in A && n(3, a = A.apiStatus), "width" in A && n(4, f = A.width), "scrollable" in A && n(5, u = A.scrollable), "extractedQuery" in A && n(15, c = A.extractedQuery), "hasExtractedQuery" in A && n(16, d = A.hasExtractedQuery), "onQueryExtracted" in A && n(17, m = A.onQueryExtracted), "onHistoryClick" in A && n(6, h = A.onHistoryClick), "inputValueOverride" in A && n(18, _ = A.inputValueOverride), "historicalResponse" in A && n(7, p = A.historicalResponse);
  }, e.$$.update = () => {
    e.$$.dirty & /*inputValueOverride, inputValue*/
    262400 && _ && _ !== w && n(8, w = _), e.$$.dirty & /*hasExtractedQuery, extractedQuery, onQueryExtracted*/
    229376 && d && c && (console.log("🤖 AIAssistant: Query extracted, triggering handler:", c), m()), e.$$.dirty & /*apiStatus*/
    8 && n(11, l = x(a));
  }, [
    r,
    o,
    s,
    a,
    f,
    u,
    h,
    p,
    w,
    k,
    z,
    l,
    D,
    O,
    i,
    c,
    d,
    m,
    _,
    T,
    E,
    j,
    N,
    F
  ];
}
class g0 extends de {
  constructor(t) {
    super(), ce(this, t, h0, b0, ue, {
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
function xo(e) {
  let t, n, l;
  return n = new g0({
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
      inputValueOverride: (
        /*aiInputValueOverride*/
        e[21]
      ),
      historicalResponse: (
        /*historicalResponse*/
        e[22]
      )
    }
  }), {
    c() {
      t = y("div"), Z(n.$$.fragment), b(t, "class", "w-full h-1/2 overflow-hidden");
    },
    m(i, r) {
      R(i, t, r), Y(n, t, null), e[25](t), l = !0;
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
      131072 && (o.hasExtractedQuery = /*hasExtractedQuery*/
      i[17]), r & /*onQueryExtracted*/
      262144 && (o.onQueryExtracted = /*onQueryExtracted*/
      i[18]), r & /*onHistoryClick*/
      524288 && (o.onHistoryClick = /*onHistoryClick*/
      i[19]), r & /*aiInputValueOverride*/
      2097152 && (o.inputValueOverride = /*aiInputValueOverride*/
      i[21]), r & /*historicalResponse*/
      4194304 && (o.historicalResponse = /*historicalResponse*/
      i[22]), n.$set(o);
    },
    i(i) {
      l || (S(n.$$.fragment, i), l = !0);
    },
    o(i) {
      L(n.$$.fragment, i), l = !1;
    },
    d(i) {
      i && M(t), X(n), e[25](null);
    }
  };
}
function No(e) {
  let t, n, l, i, r;
  return {
    c() {
      t = y("div"), n = y("h3"), n.textContent = "Query Error", l = P(), i = y("div"), r = V(
        /*queryError*/
        e[5]
      ), b(n, "class", "text-lg font-medium text-red-700 dark:text-red-100 mb-2"), b(i, "class", "text-sm font-mono text-slate-800 dark:text-slate-100"), b(t, "class", "bg-red-50 dark:bg-red-800/40 rounded-lg border border-red-200 dark:border-red-400 p-4 mb-4");
    },
    m(o, s) {
      R(o, t, s), g(t, n), g(t, l), g(t, i), g(i, r);
    },
    p(o, s) {
      s & /*queryError*/
      32 && ee(
        r,
        /*queryError*/
        o[5]
      );
    },
    d(o) {
      o && M(t);
    }
  };
}
function Eo(e) {
  let t, n, l, i, r, o, s, a, f, u, c, d, m;
  o = new _e({
    props: {
      icon: Vo,
      class: "inline mr-2"
    }
  });
  function h(w, z) {
    return (
      /*queryError*/
      w[5] ? p0 : _0
    );
  }
  let _ = h(e), p = _(e), k = (
    /*llmExplanation*/
    e[16] && Do(e)
  );
  return {
    c() {
      t = y("div"), n = y("div"), l = y("h3"), l.textContent = "Explanation", i = P(), r = y("button"), Z(o.$$.fragment), s = P(), p.c(), f = P(), k && k.c(), b(l, "class", "text-lg font-semibold text-slate-900 dark:text-slate-100"), b(r, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50"), r.disabled = a = (!/*values*/
      e[6] || Object.keys(
        /*values*/
        e[6]
      ).length == 0) && !/*queryError*/
      e[5], b(n, "class", "flex items-center justify-between mb-2"), b(t, "class", u = "px-2 mb-4 " + /*width*/
      e[8] + " dark:text-slate-100"), ie(t, "opacity-50", (!/*values*/
      e[6] || Object.keys(
        /*values*/
        e[6]
      ).length == 0) && !/*queryError*/
      e[5]);
    },
    m(w, z) {
      R(w, t, z), g(t, n), g(n, l), g(n, i), g(n, r), Y(o, r, null), g(r, s), p.m(r, null), g(t, f), k && k.m(t, null), c = !0, d || (m = te(
        r,
        "click",
        /*click_handler*/
        e[26]
      ), d = !0);
    },
    p(w, z) {
      _ !== (_ = h(w)) && (p.d(1), p = _(w), p && (p.c(), p.m(r, null))), (!c || z & /*values, queryError*/
      96 && a !== (a = (!/*values*/
      w[6] || Object.keys(
        /*values*/
        w[6]
      ).length == 0) && !/*queryError*/
      w[5])) && (r.disabled = a), /*llmExplanation*/
      w[16] ? k ? (k.p(w, z), z & /*llmExplanation*/
      65536 && S(k, 1)) : (k = Do(w), k.c(), S(k, 1), k.m(t, null)) : k && (ne(), L(k, 1, 1, () => {
        k = null;
      }), le()), (!c || z & /*width*/
      256 && u !== (u = "px-2 mb-4 " + /*width*/
      w[8] + " dark:text-slate-100")) && b(t, "class", u), (!c || z & /*width, values, Object, queryError*/
      352) && ie(t, "opacity-50", (!/*values*/
      w[6] || Object.keys(
        /*values*/
        w[6]
      ).length == 0) && !/*queryError*/
      w[5]);
    },
    i(w) {
      c || (S(o.$$.fragment, w), S(k), c = !0);
    },
    o(w) {
      L(o.$$.fragment, w), L(k), c = !1;
    },
    d(w) {
      w && M(t), X(o), p.d(), k && k.d(), d = !1, m();
    }
  };
}
function _0(e) {
  let t;
  return {
    c() {
      t = V("Explain");
    },
    m(n, l) {
      R(n, t, l);
    },
    d(n) {
      n && M(t);
    }
  };
}
function p0(e) {
  let t;
  return {
    c() {
      t = V("Explain and Fix");
    },
    m(n, l) {
      R(n, t, l);
    },
    d(n) {
      n && M(t);
    }
  };
}
function Do(e) {
  let t, n;
  return t = new Ti({
    props: {
      text: (
        /*llmExplanation*/
        e[16]
      ),
      collapseLength: 250
    }
  }), {
    c() {
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*llmExplanation*/
      65536 && (r.text = /*llmExplanation*/
      l[16]), t.$set(r);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function k0(e) {
  let t;
  return {
    c() {
      t = y("div"), t.textContent = "No query results", b(t, "class", "text-center py-8 text-slate-900 dark:text-slate-100");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: U,
    i: U,
    o: U,
    d(n) {
      n && M(t);
    }
  };
}
function y0(e) {
  let t, n;
  return t = new ha({ props: { values: (
    /*values*/
    e[6]
  ) } }), {
    c() {
      Z(t.$$.fragment);
    },
    m(l, i) {
      Y(t, l, i), n = !0;
    },
    p(l, i) {
      const r = {};
      i & /*values*/
      64 && (r.values = /*values*/
      l[6]), t.$set(r);
    },
    i(l) {
      n || (S(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function w0(e) {
  let t, n, l, i, r, o, s, a, f, u, c, d, m, h, _, p, k, w, z, D, O;
  function x(C) {
    e[24](C);
  }
  let T = {
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
  e[0] !== void 0 && (T.value = /*textInput*/
  e[0]), i = new Of({ props: T }), Se.push(() => zi(i, "value", x));
  let E = (
    /*llmAvailable*/
    e[13] && xo(e)
  ), j = !!/*queryError*/
  e[5] && No(e), N = (
    /*llmAvailable*/
    e[13] && Eo(e)
  );
  const F = [y0, k0], A = [];
  function W(C, H) {
    return H & /*values*/
    64 && (h = null), h == null && (h = !!(/*values*/
    C[6] && Object.keys(
      /*values*/
      C[6]
    ).length > 0)), h ? 0 : 1;
  }
  return _ = W(e, -1), p = A[_] = F[_](e), z = new Zc({
    props: {
      width: "w-full",
      subqueries: (
        /*subqueries*/
        e[7]
      )
    }
  }), {
    c() {
      t = y("div"), n = y("div"), l = y("div"), Z(i.$$.fragment), o = P(), E && E.c(), s = P(), a = y("div"), j && j.c(), f = P(), N && N.c(), u = P(), c = y("div"), d = y("div"), d.innerHTML = '<h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Query Result</h3>', m = P(), p.c(), w = P(), Z(z.$$.fragment), b(l, "class", "flex-auto"), b(n, "class", "w-1/2 shrink-0 flex flex-col h-full"), b(d, "class", "flex items-center justify-between mb-2"), b(c, "class", k = "px-2 mb-4 " + /*width*/
      e[8] + " dark:text-slate-100"), ie(c, "opacity-50", !/*values*/
      e[6] || Object.keys(
        /*values*/
        e[6]
      ).length == 0), b(a, "class", "flex-auto p-4 border-l border-slate-400 dark:border-slate-600 h-full overflow-auto"), b(t, "class", D = "flex " + /*width*/
      e[8] + " h-full");
    },
    m(C, H) {
      R(C, t, H), g(t, n), g(n, l), Y(i, l, null), g(n, o), E && E.m(n, null), g(t, s), g(t, a), j && j.m(a, null), g(a, f), N && N.m(a, null), g(a, u), g(a, c), g(c, d), g(c, m), A[_].m(c, null), g(a, w), Y(z, a, null), O = !0;
    },
    p(C, [H]) {
      const B = {};
      H & /*dataFields*/
      4 && (B.dataFields = /*dataFields*/
      C[2]), H & /*onRun*/
      8 && (B.onRun = /*onRun*/
      C[3]), H & /*onExplain*/
      16 && (B.onExplain = /*onExplain*/
      C[4]), H & /*onQueryHistoryClick*/
      1048576 && (B.onHistoryClick = /*onQueryHistoryClick*/
      C[20]), !r && H & /*textInput*/
      1 && (r = !0, B.value = /*textInput*/
      C[0], Mi(() => r = !1)), i.$set(B), /*llmAvailable*/
      C[13] ? E ? (E.p(C, H), H & /*llmAvailable*/
      8192 && S(E, 1)) : (E = xo(C), E.c(), S(E, 1), E.m(n, null)) : E && (ne(), L(E, 1, 1, () => {
        E = null;
      }), le()), /*queryError*/
      C[5] ? j ? j.p(C, H) : (j = No(C), j.c(), j.m(a, f)) : j && (j.d(1), j = null), /*llmAvailable*/
      C[13] ? N ? (N.p(C, H), H & /*llmAvailable*/
      8192 && S(N, 1)) : (N = Eo(C), N.c(), S(N, 1), N.m(a, u)) : N && (ne(), L(N, 1, 1, () => {
        N = null;
      }), le());
      let I = _;
      _ = W(C, H), _ === I ? A[_].p(C, H) : (ne(), L(A[I], 1, 1, () => {
        A[I] = null;
      }), le(), p = A[_], p ? p.p(C, H) : (p = A[_] = F[_](C), p.c()), S(p, 1), p.m(c, null)), (!O || H & /*width*/
      256 && k !== (k = "px-2 mb-4 " + /*width*/
      C[8] + " dark:text-slate-100")) && b(c, "class", k), (!O || H & /*width, values, Object*/
      320) && ie(c, "opacity-50", !/*values*/
      C[6] || Object.keys(
        /*values*/
        C[6]
      ).length == 0);
      const J = {};
      H & /*subqueries*/
      128 && (J.subqueries = /*subqueries*/
      C[7]), z.$set(J), (!O || H & /*width*/
      256 && D !== (D = "flex " + /*width*/
      C[8] + " h-full")) && b(t, "class", D);
    },
    i(C) {
      O || (S(i.$$.fragment, C), S(E), S(N), S(p), S(z.$$.fragment, C), O = !0);
    },
    o(C) {
      L(i.$$.fragment, C), L(E), L(N), L(p), L(z.$$.fragment, C), O = !1;
    },
    d(C) {
      C && M(t), X(i), E && E.d(), j && j.d(), N && N.d(), A[_].d(), X(z);
    }
  };
}
function v0(e, t, n) {
  let { textInput: l = "" } = t, { onTextInput: i = () => {
  } } = t, { dataFields: r = [] } = t, { onRun: o = () => {
  } } = t, { onExplain: s = () => {
  } } = t, { queryError: a = "" } = t, { values: f = {} } = t, { subqueries: u = {} } = t, { width: c = "w-full" } = t, { onLLMSubmit: d = () => {
  } } = t, { llmResponse: m = "" } = t, { llmLoading: h = !1 } = t, { llmError: _ = "" } = t, { llmAvailable: p = !1 } = t, { apiStatus: k = "" } = t, { extractedQuery: w = "" } = t, { llmExplanation: z = "" } = t, { hasExtractedQuery: D = !1 } = t, { onQueryExtracted: O = () => {
  } } = t, { onHistoryClick: x = () => {
  } } = t, { onQueryHistoryClick: T = () => {
  } } = t, { aiAssistantRef: E = void 0 } = t, { aiInputValueOverride: j = "" } = t, { historicalResponse: N = "" } = t;
  function F(C) {
    l = C, n(0, l);
  }
  function A(C) {
    Se[C ? "unshift" : "push"](() => {
      E = C, n(1, E);
    });
  }
  const W = () => {
    s();
  };
  return e.$$set = (C) => {
    "textInput" in C && n(0, l = C.textInput), "onTextInput" in C && n(23, i = C.onTextInput), "dataFields" in C && n(2, r = C.dataFields), "onRun" in C && n(3, o = C.onRun), "onExplain" in C && n(4, s = C.onExplain), "queryError" in C && n(5, a = C.queryError), "values" in C && n(6, f = C.values), "subqueries" in C && n(7, u = C.subqueries), "width" in C && n(8, c = C.width), "onLLMSubmit" in C && n(9, d = C.onLLMSubmit), "llmResponse" in C && n(10, m = C.llmResponse), "llmLoading" in C && n(11, h = C.llmLoading), "llmError" in C && n(12, _ = C.llmError), "llmAvailable" in C && n(13, p = C.llmAvailable), "apiStatus" in C && n(14, k = C.apiStatus), "extractedQuery" in C && n(15, w = C.extractedQuery), "llmExplanation" in C && n(16, z = C.llmExplanation), "hasExtractedQuery" in C && n(17, D = C.hasExtractedQuery), "onQueryExtracted" in C && n(18, O = C.onQueryExtracted), "onHistoryClick" in C && n(19, x = C.onHistoryClick), "onQueryHistoryClick" in C && n(20, T = C.onQueryHistoryClick), "aiAssistantRef" in C && n(1, E = C.aiAssistantRef), "aiInputValueOverride" in C && n(21, j = C.aiInputValueOverride), "historicalResponse" in C && n(22, N = C.historicalResponse);
  }, [
    l,
    E,
    r,
    o,
    s,
    a,
    f,
    u,
    c,
    d,
    m,
    h,
    _,
    p,
    k,
    w,
    z,
    D,
    O,
    x,
    T,
    j,
    N,
    i,
    F,
    A,
    W
  ];
}
class S0 extends de {
  constructor(t) {
    super(), ce(this, t, v0, w0, ue, {
      textInput: 0,
      onTextInput: 23,
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
      aiAssistantRef: 1,
      aiInputValueOverride: 21,
      historicalResponse: 22
    });
  }
}
function To(e) {
  let t, n, l, i, r, o = (
    /*message*/
    (e[1] || "Loading...") + ""
  ), s, a, f;
  return {
    c() {
      t = y("div"), n = y("div"), l = y("div"), i = y("div"), r = y("p"), s = V(o), a = P(), f = y("div"), f.innerHTML = '<div class="bg-blue-600 h-2 rounded-full animate-pulse" style="width: 100%"></div>', b(r, "class", "text-sm font-medium text-slate-900 dark:text-slate-100"), b(i, "class", "flex-1"), b(f, "class", "w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2"), b(l, "class", "space-y-3"), b(n, "class", "bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 w-1/2 p-6"), b(t, "class", "absolute top-0 left-0 right-0 top-0 bottom-0 bg-white/80 dark:bg-slate-900/80 flex items-center justify-center z-80");
    },
    m(u, c) {
      R(u, t, c), g(t, n), g(n, l), g(l, i), g(i, r), g(r, s), g(l, a), g(l, f);
    },
    p(u, c) {
      c & /*message*/
      2 && o !== (o = /*message*/
      (u[1] || "Loading...") + "") && ee(s, o);
    },
    d(u) {
      u && M(t);
    }
  };
}
function C0(e) {
  let t, n = (
    /*isLoading*/
    e[0] && To(e)
  );
  return {
    c() {
      n && n.c(), t = fe();
    },
    m(l, i) {
      n && n.m(l, i), R(l, t, i);
    },
    p(l, [i]) {
      /*isLoading*/
      l[0] ? n ? n.p(l, i) : (n = To(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: U,
    o: U,
    d(l) {
      n && n.d(l), l && M(t);
    }
  };
}
function M0(e, t, n) {
  let { isLoading: l = !1 } = t, { message: i = "" } = t, { width: r = "w-full" } = t;
  return e.$$set = (o) => {
    "isLoading" in o && n(0, l = o.isLoading), "message" in o && n(1, i = o.message), "width" in o && n(2, r = o.width);
  }, [l, i, r];
}
class z0 extends de {
  constructor(t) {
    super(), ce(this, t, M0, C0, ue, { isLoading: 0, message: 1, width: 2 });
  }
}
function qo(e, t, n) {
  const l = e.slice();
  return l[7] = t[n], l[9] = n, l;
}
function Oo(e) {
  let t, n, l, i, r, o, s, a, f, u, c, d, m, h, _ = (
    /*history*/
    e[1].length + ""
  ), p, k, w, z;
  function D(T, E) {
    return (
      /*history*/
      T[1].length === 0 ? L0 : R0
    );
  }
  let O = D(e), x = O(e);
  return {
    c() {
      t = y("div"), n = P(), l = y("div"), i = y("div"), r = y("div"), o = y("h3"), o.textContent = "Query History", s = P(), a = y("button"), a.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>', f = P(), u = y("div"), x.c(), c = P(), d = y("div"), m = y("div"), h = V("Showing "), p = V(_), k = V(" of 10 recent queries"), b(t, "class", "absolute top-0 left-0 w-full h-full bg-white/80 z-40"), b(o, "class", "text-sm font-medium text-gray-900 dark:text-gray-100"), b(a, "class", "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-1 rounded"), b(a, "title", "Close history"), b(r, "class", "flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700"), b(u, "class", "max-h-80 overflow-y-auto svelte-6p3axr"), b(m, "class", "text-xs text-gray-500 dark:text-gray-400 text-center"), b(d, "class", "p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700"), b(i, "class", "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg w-2/3 h-2/3 overflow-auto pointer-events-auto"), b(l, "class", "absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 pointer-events-none");
    },
    m(T, E) {
      R(T, t, E), R(T, n, E), R(T, l, E), g(l, i), g(i, r), g(r, o), g(r, s), g(r, a), g(i, f), g(i, u), x.m(u, null), g(i, c), g(i, d), g(d, m), g(m, h), g(m, p), g(m, k), w || (z = [
        te(t, "click", Ca(
          /*handleClickOutside*/
          e[4]
        )),
        te(a, "click", function() {
          ot(
            /*onClose*/
            e[2]
          ) && e[2].apply(this, arguments);
        })
      ], w = !0);
    },
    p(T, E) {
      e = T, O === (O = D(e)) && x ? x.p(e, E) : (x.d(1), x = O(e), x && (x.c(), x.m(u, null))), E & /*history*/
      2 && _ !== (_ = /*history*/
      e[1].length + "") && ee(p, _);
    },
    d(T) {
      T && M(t), T && M(n), T && M(l), x.d(), w = !1, ye(z);
    }
  };
}
function R0(e) {
  let t, n = (
    /*history*/
    e[1]
  ), l = [];
  for (let i = 0; i < n.length; i += 1)
    l[i] = Ho(qo(e, n, i));
  return {
    c() {
      for (let i = 0; i < l.length; i += 1)
        l[i].c();
      t = fe();
    },
    m(i, r) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(i, r);
      R(i, t, r);
    },
    p(i, r) {
      if (r & /*onSelect, history, formatTimestamp*/
      10) {
        n = /*history*/
        i[1];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const s = qo(i, n, o);
          l[o] ? l[o].p(s, r) : (l[o] = Ho(s), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(i) {
      xe(l, i), i && M(t);
    }
  };
}
function L0(e) {
  let t;
  return {
    c() {
      t = y("div"), t.textContent = "No query history yet", b(t, "class", "p-4 text-center text-gray-500 dark:text-gray-400 text-sm");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: U,
    d(n) {
      n && M(t);
    }
  };
}
function Ho(e) {
  let t, n, l, i = (
    /*historyItem*/
    (e[7].query || "No query extracted") + ""
  ), r, o, s, a = Po(
    /*historyItem*/
    e[7].timestamp
  ) + "", f, u, c, d = (
    /*historyItem*/
    (e[7].answer || "No response available") + ""
  ), m, h, _, p;
  function k() {
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
      t = y("div"), n = y("div"), l = y("h4"), r = V(i), o = P(), s = y("span"), f = V(a), u = P(), c = y("p"), m = V(d), h = P(), b(l, "class", "text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-2 flex-1 svelte-6p3axr"), b(s, "class", "text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0"), b(n, "class", "flex items-start justify-between mb-2"), b(c, "class", "text-xs text-gray-600 dark:text-gray-300 line-clamp-3 svelte-6p3axr"), b(t, "class", "p-3 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors");
    },
    m(w, z) {
      R(w, t, z), g(t, n), g(n, l), g(l, r), g(n, o), g(n, s), g(s, f), g(t, u), g(t, c), g(c, m), g(t, h), _ || (p = te(t, "click", k), _ = !0);
    },
    p(w, z) {
      e = w, z & /*history*/
      2 && i !== (i = /*historyItem*/
      (e[7].query || "No query extracted") + "") && ee(r, i), z & /*history*/
      2 && a !== (a = Po(
        /*historyItem*/
        e[7].timestamp
      ) + "") && ee(f, a), z & /*history*/
      2 && d !== (d = /*historyItem*/
      (e[7].answer || "No response available") + "") && ee(m, d);
    },
    d(w) {
      w && M(t), _ = !1, p();
    }
  };
}
function A0(e) {
  let t, n = (
    /*isVisible*/
    e[0] && Oo(e)
  );
  return {
    c() {
      n && n.c(), t = fe();
    },
    m(l, i) {
      n && n.m(l, i), R(l, t, i);
    },
    p(l, [i]) {
      /*isVisible*/
      l[0] ? n ? n.p(l, i) : (n = Oo(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: U,
    o: U,
    d(l) {
      n && n.d(l), l && M(t);
    }
  };
}
function Po(e) {
  const n = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), l = Math.floor(n / 6e4), i = Math.floor(n / 36e5), r = Math.floor(n / 864e5);
  return l < 1 ? "Just now" : l < 60 ? `${l}m ago` : i < 24 ? `${i}h ago` : `${r}d ago`;
}
function x0(e, t, n) {
  let { isVisible: l = !1 } = t, { history: i = [] } = t, { onClose: r = () => {
  } } = t, { onSelect: o = () => {
  } } = t, { position: s = { top: 0, left: 0 } } = t;
  function a(u) {
    u.target, r && r();
  }
  const f = (u) => o(u);
  return e.$$set = (u) => {
    "isVisible" in u && n(0, l = u.isVisible), "history" in u && n(1, i = u.history), "onClose" in u && n(2, r = u.onClose), "onSelect" in u && n(3, o = u.onSelect), "position" in u && n(5, s = u.position);
  }, [
    l,
    i,
    r,
    o,
    a,
    s,
    f
  ];
}
class jo extends de {
  constructor(t) {
    super(), ce(this, t, x0, A0, ue, {
      isVisible: 0,
      history: 1,
      onClose: 2,
      onSelect: 3,
      position: 5
    });
  }
}
function N0(e) {
  let t, n, l;
  function i(o) {
    e[63](o);
  }
  let r = {
    dataFields: (
      /*dataFields*/
      e[10]
    ),
    onRun: (
      /*handleRun*/
      e[49]
    ),
    onExplain: (
      /*handleLLMExplanation*/
      e[26]
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
      e[47]
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
      e[42]
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
      e[46]
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
    e[11]), t = new S0({ props: r }), Se.push(() => zi(t, "textInput", i)), {
      c() {
        Z(t.$$.fragment);
      },
      m(o, s) {
        Y(t, o, s), l = !0;
      },
      p(o, s) {
        const a = {};
        s[0] & /*dataFields*/
        1024 && (a.dataFields = /*dataFields*/
        o[10]), s[0] & /*$queryError*/
        65536 && (a.queryError = /*$queryError*/
        o[16]), s[0] & /*$values*/
        131072 && (a.values = /*$values*/
        o[17]), s[0] & /*$subqueries*/
        262144 && (a.subqueries = /*$subqueries*/
        o[18]), s[0] & /*$llmResponse*/
        2 && (a.llmResponse = /*$llmResponse*/
        o[1]), s[0] & /*$llmLoading*/
        8 && (a.llmLoading = /*$llmLoading*/
        o[3]), s[0] & /*$llmError*/
        524288 && (a.llmError = /*$llmError*/
        o[19]), s[0] & /*$llmAvailable*/
        1048576 && (a.llmAvailable = /*$llmAvailable*/
        o[20]), s[0] & /*$apiStatus*/
        2097152 && (a.apiStatus = /*$apiStatus*/
        o[21]), s[0] & /*$extractedQuery*/
        4 && (a.extractedQuery = /*$extractedQuery*/
        o[2]), s[0] & /*$llmExplanation*/
        4194304 && (a.llmExplanation = /*$llmExplanation*/
        o[22]), s[0] & /*$hasExtractedQuery*/
        8388608 && (a.hasExtractedQuery = /*$hasExtractedQuery*/
        o[23]), s[0] & /*aiInputValueOverride*/
        512 && (a.aiInputValueOverride = /*aiInputValueOverride*/
        o[9]), s[0] & /*historicalResponse*/
        1 && (a.historicalResponse = /*historicalResponse*/
        o[0]), !n && s[0] & /*$textInput*/
        2048 && (n = !0, a.textInput = /*$textInput*/
        o[11], Mi(() => n = !1)), t.$set(a);
      },
      i(o) {
        l || (S(t.$$.fragment, o), l = !0);
      },
      o(o) {
        L(t.$$.fragment, o), l = !1;
      },
      d(o) {
        X(t, o);
      }
    }
  );
}
function E0(e) {
  let t, n, l;
  function i(o) {
    e[62](o);
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
    ),
    onInsert: (
      /*func_2*/
      e[61]
    )
  };
  return (
    /*selectedScope*/
    e[4] !== void 0 && (r.selectedScope = /*selectedScope*/
    e[4]), t = new xf({ props: r }), Se.push(() => zi(t, "selectedScope", i)), {
      c() {
        Z(t.$$.fragment);
      },
      m(o, s) {
        Y(t, o, s), l = !0;
      },
      p(o, s) {
        const a = {};
        s[0] & /*$scopes*/
        4096 && (a.scopes = /*$scopes*/
        o[12]), s[0] & /*$scopeConcepts*/
        8192 && (a.scopeConcepts = /*$scopeConcepts*/
        o[13]), s[0] & /*$isLoading*/
        16384 && (a.isLoading = /*$isLoading*/
        o[14]), s[0] & /*$loadingMessage*/
        32768 && (a.loadingMessage = /*$loadingMessage*/
        o[15]), s[0] & /*$textInput, activeTab*/
        2080 && (a.onInsert = /*func_2*/
        o[61]), !n && s[0] & /*selectedScope*/
        16 && (n = !0, a.selectedScope = /*selectedScope*/
        o[4], Mi(() => n = !1)), t.$set(a);
      },
      i(o) {
        l || (S(t.$$.fragment, o), l = !0);
      },
      o(o) {
        L(t.$$.fragment, o), l = !1;
      },
      d(o) {
        X(t, o);
      }
    }
  );
}
function D0(e) {
  let t, n, l, i, r, o, s, a, f, u, c, d, m;
  n = new bs({
    props: {
      activeTab: (
        /*activeTab*/
        e[5]
      ),
      onTabChange: (
        /*handleTabChange*/
        e[48]
      )
    }
  });
  const h = [E0, N0], _ = [];
  function p(k, w) {
    return (
      /*activeTab*/
      k[5] === "data-elements" ? 0 : (
        /*activeTab*/
        k[5] === "query-inspector" ? 1 : -1
      )
    );
  }
  return ~(r = p(e)) && (o = _[r] = h[r](e)), a = new jo({
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
        e[44]
      )
    }
  }), u = new jo({
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
        e[45]
      )
    }
  }), d = new z0({
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
      t = y("main"), Z(n.$$.fragment), l = P(), i = y("div"), o && o.c(), s = P(), Z(a.$$.fragment), f = P(), Z(u.$$.fragment), c = P(), Z(d.$$.fragment), b(i, "class", "flex-auto w-full min-h-0 z-0 svelte-1pq5c6y"), b(t, "class", "w-full bg-white dark:bg-slate-950 transition-colors duration-200 relative overflow-hidden flex flex-col svelte-1pq5c6y"), $(t, "height", "600px");
    },
    m(k, w) {
      R(k, t, w), Y(n, t, null), g(t, l), g(t, i), ~r && _[r].m(i, null), g(t, s), Y(a, t, null), g(t, f), Y(u, t, null), g(t, c), Y(d, t, null), m = !0;
    },
    p(k, w) {
      const z = {};
      w[0] & /*activeTab*/
      32 && (z.activeTab = /*activeTab*/
      k[5]), n.$set(z);
      let D = r;
      r = p(k), r === D ? ~r && _[r].p(k, w) : (o && (ne(), L(_[D], 1, 1, () => {
        _[D] = null;
      }), le()), ~r ? (o = _[r], o ? o.p(k, w) : (o = _[r] = h[r](k), o.c()), S(o, 1), o.m(i, null)) : o = null);
      const O = {};
      w[0] & /*showHistoryDropdown*/
      128 && (O.isVisible = /*showHistoryDropdown*/
      k[7]), w[0] & /*aiHistory*/
      64 && (O.history = /*aiHistory*/
      k[6]), a.$set(O);
      const x = {};
      w[0] & /*showQueryHistoryDropdown*/
      256 && (x.isVisible = /*showQueryHistoryDropdown*/
      k[8]), w[0] & /*aiHistory*/
      64 && (x.history = /*aiHistory*/
      k[6]), u.$set(x);
      const T = {};
      w[0] & /*$isLoading*/
      16384 && (T.isLoading = /*$isLoading*/
      k[14]), w[0] & /*$loadingMessage*/
      32768 && (T.message = /*$loadingMessage*/
      k[15]), d.$set(T);
    },
    i(k) {
      m || (S(n.$$.fragment, k), S(o), S(a.$$.fragment, k), S(u.$$.fragment, k), S(d.$$.fragment, k), m = !0);
    },
    o(k) {
      L(n.$$.fragment, k), L(o), L(a.$$.fragment, k), L(u.$$.fragment, k), L(d.$$.fragment, k), m = !1;
    },
    d(k) {
      k && M(t), X(n), ~r && _[r].d(), X(a), X(u), X(d);
    }
  };
}
function T0(e, t, n) {
  let l, i, r, o, s, a, f, u, c, d, m, h, _, p, k, w, z, D, { model: O } = t;
  const x = Ha(O), { values: T, listNames: E, runQuery: j, handleLLMQuestion: N, handleLLMExplanation: F, subqueries: A, queryError: W, scopes: C, scopeConcepts: H, handleScopeAnalysis: B, llmResponse: I, llmLoading: J, llmError: K, llmAvailable: q, llmExplanation: ae, apiStatus: me, isLoading: Ce, loadingMessage: Me, extractedQuery: Ae, hasExtractedQuery: we, handleQueryExtraction: Pe, textInput: ze } = x;
  Q(e, T, (G) => n(17, h = G)), Q(e, E, (G) => n(58, a = G)), Q(e, A, (G) => n(18, _ = G)), Q(e, W, (G) => n(16, m = G)), Q(e, C, (G) => n(12, f = G)), Q(e, H, (G) => n(13, u = G)), Q(e, I, (G) => n(1, r = G)), Q(e, J, (G) => n(3, s = G)), Q(e, K, (G) => n(19, p = G)), Q(e, q, (G) => n(20, k = G)), Q(e, ae, (G) => n(22, z = G)), Q(e, me, (G) => n(21, w = G)), Q(e, Ce, (G) => n(14, c = G)), Q(e, Me, (G) => n(15, d = G)), Q(e, Ae, (G) => n(2, o = G)), Q(e, we, (G) => n(23, D = G)), Q(e, ze, (G) => n(11, i = G));
  let Re = "", Xe = "query-inspector", Ne = [
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
  ], Ue = !1, Ze = !1, Je = "", Mn = { top: 0, left: 0 }, zn = { top: 0, left: 0 }, Rn, $e = "", et = "";
  function Ln(G) {
    n(57, Je = G), n(0, et = ""), N(G);
  }
  function An(G) {
    n(5, Xe = G);
  }
  function xn() {
    console.log("text input", i), i.trim() && j(i);
  }
  function Nn(G, at, Vt = null) {
    const Ve = {
      question: G,
      answer: at,
      query: Vt,
      timestamp: /* @__PURE__ */ new Date()
    };
    n(6, Ne = [Ve, ...Ne]), Ne.length > 10 && n(6, Ne = Ne.slice(0, 10)), console.log("📚 Added to history:", Ve);
  }
  function En() {
    console.log("📚 History button clicked"), n(7, Ue = !Ue);
  }
  function Dn() {
    console.log("📚 Query History button clicked"), n(8, Ze = !Ze);
  }
  function Tn(G) {
    console.log("📚 AI History item selected:", G), n(7, Ue = !1), G.query && (re(ze, i = G.query, i), O.set("text_input", G.query), O.save_changes()), G.question && (n(9, $e = G.question), setTimeout(
      () => {
        n(9, $e = "");
      },
      100
    )), G.answer && n(0, et = G.answer);
  }
  function qn(G) {
    console.log("📚 Query History item selected:", G), n(8, Ze = !1), G.query && (re(ze, i = G.query, i), O.set("text_input", G.query), O.save_changes()), G.question && (n(9, $e = G.question), setTimeout(
      () => {
        n(9, $e = "");
      },
      100
    )), G.answer && n(0, et = G.answer);
  }
  function On() {
    n(7, Ue = !1);
  }
  function $l() {
    n(8, Ze = !1);
  }
  const Hn = (G) => {
    B(G, !1);
  }, ei = (G) => {
    B(G, !0);
  }, Bt = (G, at) => {
    re(ze, i = i + `{${at}; scope = ${G}}`, i), n(5, Xe = "query-inspector");
  };
  function Pn(G) {
    Re = G, n(4, Re);
  }
  function jn(G) {
    i = G, ze.set(i);
  }
  return e.$$set = (G) => {
    "model" in G && n(56, O = G.model);
  }, e.$$.update = () => {
    e.$$.dirty[1] & /*$listNames*/
    134217728 && n(10, l = a || []), e.$$.dirty[0] & /*$llmResponse, $llmLoading, historicalResponse, $extractedQuery*/
    15 | e.$$.dirty[1] & /*currentQuestion*/
    67108864 && r && r.trim() && !s && Je && !et && (Nn(Je, r, o || null), n(57, Je = ""));
  }, [
    et,
    r,
    o,
    s,
    Re,
    Xe,
    Ne,
    Ue,
    Ze,
    $e,
    l,
    i,
    f,
    u,
    c,
    d,
    m,
    h,
    _,
    p,
    k,
    w,
    z,
    D,
    T,
    E,
    F,
    A,
    W,
    C,
    H,
    B,
    I,
    J,
    K,
    q,
    ae,
    me,
    Ce,
    Me,
    Ae,
    we,
    Pe,
    ze,
    Mn,
    zn,
    Rn,
    Ln,
    An,
    xn,
    En,
    Dn,
    Tn,
    qn,
    On,
    $l,
    O,
    Je,
    a,
    Hn,
    ei,
    Bt,
    Pn,
    jn
  ];
}
class q0 extends de {
  constructor(t) {
    super(), ce(this, t, T0, D0, ue, { model: 56 }, null, [-1, -1, -1]);
  }
}
function O0(e) {
  new q0({
    target: e.el,
    props: {
      model: e.model
    }
  });
}
export {
  O0 as render
};
