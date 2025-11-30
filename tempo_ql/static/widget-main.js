function Z() {
}
function af(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function ya(e) {
  return e();
}
function Jr() {
  return /* @__PURE__ */ Object.create(null);
}
function we(e) {
  e.forEach(ya);
}
function Fe(e) {
  return typeof e == "function";
}
function pe(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function ff(e) {
  return Object.keys(e).length === 0;
}
function ka(e, ...t) {
  if (e == null)
    return Z;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function F(e, t, n) {
  e.$$.on_destroy.push(ka(t, n));
}
function Ue(e, t, n, l) {
  if (e) {
    const r = pa(e, t, n, l);
    return e[0](r);
  }
}
function pa(e, t, n, l) {
  return e[1] && l ? af(n.ctx.slice(), e[1](l(t))) : n.ctx;
}
function Xe(e, t, n, l) {
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
function Ye(e, t, n, l, r, i) {
  if (r) {
    const o = pa(t, n, l, i);
    e.p(o, r);
  }
}
function Je(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let l = 0; l < n; l++)
      t[l] = -1;
    return t;
  }
  return -1;
}
function Ir(e) {
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
function C(e, t, n) {
  e.insertBefore(t, n || null);
}
function v(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Ge(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function k(e) {
  return document.createElement(e);
}
function Re(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function G(e) {
  return document.createTextNode(e);
}
function P() {
  return G(" ");
}
function _e() {
  return G("");
}
function x(e, t, n, l) {
  return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
}
function ln(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function qe(e) {
  return function(t) {
    return t.stopPropagation(), e.call(this, t);
  };
}
function g(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function sf(e) {
  return Array.from(e.childNodes);
}
function oe(e, t) {
  t = "" + t, e.data !== t && (e.data = t);
}
function xe(e, t) {
  e.value = t ?? "";
}
function le(e, t, n, l) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, l ? "important" : "");
}
function Zr(e, t, n) {
  for (let l = 0; l < e.options.length; l += 1) {
    const r = e.options[l];
    if (r.__value === t) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function uf(e) {
  const t = e.querySelector(":checked");
  return t && t.__value;
}
let Pl;
function cf() {
  if (Pl === void 0) {
    Pl = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      Pl = !0;
    }
  }
  return Pl;
}
function df(e, t) {
  getComputedStyle(e).position === "static" && (e.style.position = "relative");
  const l = k("iframe");
  l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), l.setAttribute("aria-hidden", "true"), l.tabIndex = -1;
  const r = cf();
  let i;
  return r ? (l.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", i = x(window, "message", (o) => {
    o.source === l.contentWindow && t();
  })) : (l.src = "about:blank", l.onload = () => {
    i = x(l.contentWindow, "resize", t), t();
  }), h(e, l), () => {
    (r || i && l.contentWindow) && i(), v(l);
  };
}
function fe(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
function mf(e, t, { bubbles: n = !1, cancelable: l = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(e, n, l, t), r;
}
class lr {
  constructor(t = !1) {
    this.is_svg = !1, this.is_svg = t, this.e = this.n = null;
  }
  c(t) {
    this.h(t);
  }
  m(t, n, l = null) {
    this.e || (this.is_svg ? this.e = Re(n.nodeName) : this.e = k(n.nodeType === 11 ? "TEMPLATE" : n.nodeName), this.t = n.tagName !== "TEMPLATE" ? n : n.content, this.c(t)), this.i(l);
  }
  h(t) {
    this.e.innerHTML = t, this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes);
  }
  i(t) {
    for (let n = 0; n < this.n.length; n += 1)
      C(this.t, this.n[n], t);
  }
  p(t) {
    this.d(), this.h(t), this.i(this.a);
  }
  d() {
    this.n.forEach(v);
  }
}
let Pn;
function Tn(e) {
  Pn = e;
}
function Hn() {
  if (!Pn)
    throw new Error("Function called outside component initialization");
  return Pn;
}
function Nt(e) {
  Hn().$$.on_mount.push(e);
}
function wa(e) {
  Hn().$$.on_destroy.push(e);
}
function va() {
  const e = Hn();
  return (t, n, { cancelable: l = !1 } = {}) => {
    const r = e.$$.callbacks[t];
    if (r) {
      const i = mf(t, n, { cancelable: l });
      return r.slice().forEach((o) => {
        o.call(e, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function gf(e, t) {
  return Hn().$$.context.set(e, t), t;
}
function Bn(e) {
  return Hn().$$.context.get(e);
}
function Er(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((l) => l.call(this, t));
}
const Yt = [], Se = [];
let Jt = [];
const Dr = [], bf = /* @__PURE__ */ Promise.resolve();
let Ar = !1;
function _f() {
  Ar || (Ar = !0, bf.then(Oe));
}
function Qn(e) {
  Jt.push(e);
}
function nt(e) {
  Dr.push(e);
}
const Lr = /* @__PURE__ */ new Set();
let Ut = 0;
function Oe() {
  if (Ut !== 0)
    return;
  const e = Pn;
  do {
    try {
      for (; Ut < Yt.length; ) {
        const t = Yt[Ut];
        Ut++, Tn(t), hf(t.$$);
      }
    } catch (t) {
      throw Yt.length = 0, Ut = 0, t;
    }
    for (Tn(null), Yt.length = 0, Ut = 0; Se.length; )
      Se.pop()();
    for (let t = 0; t < Jt.length; t += 1) {
      const n = Jt[t];
      Lr.has(n) || (Lr.add(n), n());
    }
    Jt.length = 0;
  } while (Yt.length);
  for (; Dr.length; )
    Dr.pop()();
  Ar = !1, Lr.clear(), Tn(e);
}
function hf(e) {
  if (e.fragment !== null) {
    e.update(), we(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Qn);
  }
}
function yf(e) {
  const t = [], n = [];
  Jt.forEach((l) => e.indexOf(l) === -1 ? t.push(l) : n.push(l)), n.forEach((l) => l()), Jt = t;
}
const Vl = /* @__PURE__ */ new Set();
let Lt;
function re() {
  Lt = {
    r: 0,
    c: [],
    p: Lt
    // parent group
  };
}
function ie() {
  Lt.r || we(Lt.c), Lt = Lt.p;
}
function p(e, t) {
  e && e.i && (Vl.delete(e), e.i(t));
}
function N(e, t, n, l) {
  if (e && e.o) {
    if (Vl.has(e))
      return;
    Vl.add(e), Lt.c.push(() => {
      Vl.delete(e), l && (n && e.d(1), l());
    }), e.o(t);
  } else
    l && l();
}
function lt(e, t, n) {
  const l = e.$$.props[t];
  l !== void 0 && (e.$$.bound[l] = n, n(e.$$.ctx[l]));
}
function U(e) {
  e && e.c();
}
function V(e, t, n, l) {
  const { fragment: r, after_update: i } = e.$$;
  r && r.m(t, n), l || Qn(() => {
    const o = e.$$.on_mount.map(ya).filter(Fe);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : we(o), e.$$.on_mount = [];
  }), i.forEach(Qn);
}
function W(e, t) {
  const n = e.$$;
  n.fragment !== null && (yf(n.after_update), we(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function kf(e, t) {
  e.$$.dirty[0] === -1 && (Yt.push(e), _f(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ve(e, t, n, l, r, i, o, a = [-1]) {
  const f = Pn;
  Tn(e);
  const s = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: Z,
    not_equal: r,
    bound: Jr(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: Jr(),
    dirty: a,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  o && o(s.root);
  let u = !1;
  if (s.ctx = n ? n(e, t.props || {}, (c, d, ...m) => {
    const b = m.length ? m[0] : d;
    return s.ctx && r(s.ctx[c], s.ctx[c] = b) && (!s.skip_bound && s.bound[c] && s.bound[c](b), u && kf(e, c)), d;
  }) : [], s.update(), u = !0, we(s.before_update), s.fragment = l ? l(s.ctx) : !1, t.target) {
    if (t.hydrate) {
      const c = sf(t.target);
      s.fragment && s.fragment.l(c), c.forEach(v);
    } else
      s.fragment && s.fragment.c();
    t.intro && p(e.$$.fragment), V(e, t.target, t.anchor, t.customElement), Oe();
  }
  Tn(f);
}
class Ce {
  $destroy() {
    W(this, 1), this.$destroy = Z;
  }
  $on(t, n) {
    if (!Fe(n))
      return Z;
    const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return l.push(n), () => {
      const r = l.indexOf(n);
      r !== -1 && l.splice(r, 1);
    };
  }
  $set(t) {
    this.$$set && !ff(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Xt = [];
function pf(e, t) {
  return {
    subscribe: me(e, t).subscribe
  };
}
function me(e, t = Z) {
  let n;
  const l = /* @__PURE__ */ new Set();
  function r(a) {
    if (pe(e, a) && (e = a, n)) {
      const f = !Xt.length;
      for (const s of l)
        s[1](), Xt.push(s, e);
      if (f) {
        for (let s = 0; s < Xt.length; s += 2)
          Xt[s][0](Xt[s + 1]);
        Xt.length = 0;
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
function Me(e, t, n) {
  const l = !Array.isArray(e), r = l ? [e] : e, i = t.length < 2;
  return pf(n, (o) => {
    let a = !1;
    const f = [];
    let s = 0, u = Z;
    const c = () => {
      if (s)
        return;
      u();
      const m = t(l ? f[0] : f, o);
      i ? o(m) : u = Fe(m) ? m : Z;
    }, d = r.map((m, b) => ka(m, (_) => {
      f[b] = _, s &= ~(1 << b), a && c();
    }, () => {
      s |= 1 << b;
    }));
    return a = !0, c(), function() {
      we(d), u(), a = !1;
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
function wf(e) {
  const t = ze(e, "values", {}), n = ze(e, "file_contents", {}), l = ze(e, "_save_path", ""), r = ze(e, "list_names", {
    attributes: [],
    events: [],
    intervals: []
  }), i = ze(e, "subqueries", {}), o = ze(e, "query_error", ""), a = ze(e, "text_input", ""), f = ze(e, "query_for_results", ""), s = ze(e, "scopes", []), u = ze(e, "scope_concepts", {}), c = ze(e, "isLoading", !1), d = ze(e, "loadingMessage", ""), m = ze(e, "llm_available", !1), b = ze(e, "llm_response", ""), _ = ze(e, "llm_loading", !1), y = ze(e, "llm_error", ""), M = ze(e, "api_status", "Checking API connection..."), w = ze(e, "extracted_query", ""), S = ze(e, "llm_explanation", ""), z = ze(e, "has_extracted_query", !1), E = ze(e, "query_history", []), D = ze(e, "ai_history", []);
  let I = "";
  return {
    // Reactive stores
    values: t,
    queryForResults: f,
    savePath: l,
    fileContents: n,
    listNames: r,
    subqueries: i,
    queryError: o,
    scopes: s,
    scopeConcepts: u,
    isLoading: c,
    loadingMessage: d,
    llmResponse: b,
    llmLoading: _,
    llmError: y,
    llmAvailable: m,
    apiStatus: M,
    extractedQuery: w,
    llmExplanation: S,
    hasExtractedQuery: z,
    textInput: a,
    queryHistory: E,
    aiHistory: D,
    runQuery: (j, A) => {
      e.set("text_input", A), e.set(
        "process_trigger",
        j != null ? `variable:${j}` : "run"
      ), e.save_changes();
    },
    // LLM question handler
    handleLLMQuestion: (j) => {
      e.set("llm_question", j), e.set("llm_trigger", "ask"), e.save_changes();
    },
    handleLLMExplanation: () => {
      e.set("llm_trigger", "explain"), e.save_changes();
    },
    // Query extraction handler - triggered when AI extracts a query
    handleQueryExtraction: () => {
      let j = "";
      w.subscribe((A) => j = A)(), j && j !== I ? (console.log(
        "🔄 Query extracted from AI response:",
        j
      ), console.log("🔄 Current text input:", I), console.log("🔄 Updating text input with extracted query"), I = j, e.set("text_input", j), e.save_changes()) : j === I && console.log(
        "🔄 Extracted query is same as current input, no update needed"
      );
    },
    // Scope analysis handler
    handleScopeAnalysis: (j, A = !1) => {
      console.log(
        "🔍 Scope Analysis requested for:",
        j,
        A ? "(force refresh)" : ""
      );
      const q = A ? `${j}:force` : j;
      e.set("scope_analysis_trigger", q), e.save_changes();
    }
  };
}
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Hr = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, Kl = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [512, 512, [], "f077", "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
}, vf = {
  prefix: "fas",
  iconName: "chart-simple",
  icon: [448, 512, [], "e473", "M160 80c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-352zM0 272c0-26.5 21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 272zM368 96l32 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48z"]
}, Cf = {
  prefix: "fas",
  iconName: "rotate-left",
  icon: [512, 512, ["rotate-back", "rotate-backward", "undo-alt"], "f2ea", "M48.5 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.5 224z"]
}, Sf = {
  prefix: "fas",
  iconName: "circle-play",
  icon: [512, 512, [61469, "play-circle"], "f144", "M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"]
}, Nf = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, Mf = Nf, Ca = {
  prefix: "fas",
  iconName: "bolt-lightning",
  icon: [384, 512, [], "e0b7", "M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z"]
}, Lf = {
  prefix: "fas",
  iconName: "floppy-disk",
  icon: [448, 512, [128190, 128426, "save"], "f0c7", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]
}, zf = Lf, Br = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, Sa = {
  prefix: "fas",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
}, Rf = {
  prefix: "fas",
  iconName: "sun",
  icon: [512, 512, [9728], "f185", "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]
}, qf = {
  prefix: "fas",
  iconName: "play",
  icon: [384, 512, [9654], "f04b", "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]
}, Ef = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, Df = Ef, Ze = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, Af = {
  prefix: "fas",
  iconName: "list-ul",
  icon: [512, 512, ["list-dots"], "f0ca", "M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]
}, Na = Af, rr = {
  prefix: "fas",
  iconName: "copy",
  icon: [448, 512, [], "f0c5", "M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]
}, qt = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}, Tf = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, Pf = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, Et = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, Qf = {
  prefix: "fas",
  iconName: "moon",
  icon: [384, 512, [127769, 9214], "f186", "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]
}, jf = {
  prefix: "fas",
  iconName: "check",
  icon: [448, 512, [10003, 10004], "f00c", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, Of = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, If = Of, Hf = {
  prefix: "fas",
  iconName: "database",
  icon: [448, 512, [], "f1c0", "M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z"]
}, Bf = {
  prefix: "fas",
  iconName: "circle-xmark",
  icon: [512, 512, [61532, "times-circle", "xmark-circle"], "f057", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]
}, Ff = Bf, Ql = parseFloat;
function Tr(e, t = ";") {
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
function Gf(e, t, n, l) {
  let r, i;
  const o = "1em";
  let a, f, s, u = "-.125em";
  const c = "visible";
  return l && (s = "center", i = "1.25em"), n && (r = n), t && (t == "lg" ? (f = "1.33333em", a = ".75em", u = "-.225em") : t == "xs" ? f = ".75em" : t == "sm" ? f = ".875em" : f = t.replace("x", "em")), Tr([
    Tr({
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
function xf(e, t, n, l, r, i = 1, o = "", a = "") {
  let f = 1, s = 1;
  return r && (r == "horizontal" ? f = -1 : r == "vertical" ? s = -1 : f = s = -1), Tr(
    [
      `translate(${Ql(t) * i}${o},${Ql(n) * i}${o})`,
      `scale(${f * Ql(e)},${s * Ql(e)})`,
      l && `rotate(${l}${a})`
    ],
    " "
  );
}
function $r(e) {
  let t, n, l, r, i, o, a, f;
  function s(d, m) {
    return typeof /*i*/
    d[10][4] == "string" ? Wf : Vf;
  }
  let u = s(e), c = u(e);
  return {
    c() {
      t = Re("svg"), n = Re("g"), l = Re("g"), c.c(), g(
        l,
        "transform",
        /*transform*/
        e[12]
      ), g(n, "transform", r = "translate(" + /*i*/
      e[10][0] / 2 + " " + /*i*/
      e[10][1] / 2 + ")"), g(n, "transform-origin", i = /*i*/
      e[10][0] / 4 + " 0"), g(t, "id", o = /*id*/
      e[1] || void 0), g(t, "class", a = "svelte-fa " + /*clazz*/
      e[0] + " svelte-1cj2gr0"), g(
        t,
        "style",
        /*s*/
        e[11]
      ), g(t, "viewBox", f = "0 0 " + /*i*/
      e[10][0] + " " + /*i*/
      e[10][1]), g(t, "aria-hidden", "true"), g(t, "role", "img"), g(t, "xmlns", "http://www.w3.org/2000/svg"), fe(
        t,
        "pulse",
        /*pulse*/
        e[4]
      ), fe(
        t,
        "spin",
        /*spin*/
        e[3]
      );
    },
    m(d, m) {
      C(d, t, m), h(t, n), h(n, l), c.m(l, null);
    },
    p(d, m) {
      u === (u = s(d)) && c ? c.p(d, m) : (c.d(1), c = u(d), c && (c.c(), c.m(l, null))), m & /*transform*/
      4096 && g(
        l,
        "transform",
        /*transform*/
        d[12]
      ), m & /*i*/
      1024 && r !== (r = "translate(" + /*i*/
      d[10][0] / 2 + " " + /*i*/
      d[10][1] / 2 + ")") && g(n, "transform", r), m & /*i*/
      1024 && i !== (i = /*i*/
      d[10][0] / 4 + " 0") && g(n, "transform-origin", i), m & /*id*/
      2 && o !== (o = /*id*/
      d[1] || void 0) && g(t, "id", o), m & /*clazz*/
      1 && a !== (a = "svelte-fa " + /*clazz*/
      d[0] + " svelte-1cj2gr0") && g(t, "class", a), m & /*s*/
      2048 && g(
        t,
        "style",
        /*s*/
        d[11]
      ), m & /*i*/
      1024 && f !== (f = "0 0 " + /*i*/
      d[10][0] + " " + /*i*/
      d[10][1]) && g(t, "viewBox", f), m & /*clazz, pulse*/
      17 && fe(
        t,
        "pulse",
        /*pulse*/
        d[4]
      ), m & /*clazz, spin*/
      9 && fe(
        t,
        "spin",
        /*spin*/
        d[3]
      );
    },
    d(d) {
      d && v(t), c.d();
    }
  };
}
function Vf(e) {
  let t, n, l, r, i, o, a, f, s, u;
  return {
    c() {
      t = Re("path"), o = Re("path"), g(t, "d", n = /*i*/
      e[10][4][0]), g(t, "fill", l = /*secondaryColor*/
      e[6] || /*color*/
      e[2] || "currentColor"), g(t, "fill-opacity", r = /*swapOpacity*/
      e[9] != !1 ? (
        /*primaryOpacity*/
        e[7]
      ) : (
        /*secondaryOpacity*/
        e[8]
      )), g(t, "transform", i = "translate(" + /*i*/
      e[10][0] / -2 + " " + /*i*/
      e[10][1] / -2 + ")"), g(o, "d", a = /*i*/
      e[10][4][1]), g(o, "fill", f = /*primaryColor*/
      e[5] || /*color*/
      e[2] || "currentColor"), g(o, "fill-opacity", s = /*swapOpacity*/
      e[9] != !1 ? (
        /*secondaryOpacity*/
        e[8]
      ) : (
        /*primaryOpacity*/
        e[7]
      )), g(o, "transform", u = "translate(" + /*i*/
      e[10][0] / -2 + " " + /*i*/
      e[10][1] / -2 + ")");
    },
    m(c, d) {
      C(c, t, d), C(c, o, d);
    },
    p(c, d) {
      d & /*i*/
      1024 && n !== (n = /*i*/
      c[10][4][0]) && g(t, "d", n), d & /*secondaryColor, color*/
      68 && l !== (l = /*secondaryColor*/
      c[6] || /*color*/
      c[2] || "currentColor") && g(t, "fill", l), d & /*swapOpacity, primaryOpacity, secondaryOpacity*/
      896 && r !== (r = /*swapOpacity*/
      c[9] != !1 ? (
        /*primaryOpacity*/
        c[7]
      ) : (
        /*secondaryOpacity*/
        c[8]
      )) && g(t, "fill-opacity", r), d & /*i*/
      1024 && i !== (i = "translate(" + /*i*/
      c[10][0] / -2 + " " + /*i*/
      c[10][1] / -2 + ")") && g(t, "transform", i), d & /*i*/
      1024 && a !== (a = /*i*/
      c[10][4][1]) && g(o, "d", a), d & /*primaryColor, color*/
      36 && f !== (f = /*primaryColor*/
      c[5] || /*color*/
      c[2] || "currentColor") && g(o, "fill", f), d & /*swapOpacity, secondaryOpacity, primaryOpacity*/
      896 && s !== (s = /*swapOpacity*/
      c[9] != !1 ? (
        /*secondaryOpacity*/
        c[8]
      ) : (
        /*primaryOpacity*/
        c[7]
      )) && g(o, "fill-opacity", s), d & /*i*/
      1024 && u !== (u = "translate(" + /*i*/
      c[10][0] / -2 + " " + /*i*/
      c[10][1] / -2 + ")") && g(o, "transform", u);
    },
    d(c) {
      c && v(t), c && v(o);
    }
  };
}
function Wf(e) {
  let t, n, l, r;
  return {
    c() {
      t = Re("path"), g(t, "d", n = /*i*/
      e[10][4]), g(t, "fill", l = /*color*/
      e[2] || /*primaryColor*/
      e[5] || "currentColor"), g(t, "transform", r = "translate(" + /*i*/
      e[10][0] / -2 + " " + /*i*/
      e[10][1] / -2 + ")");
    },
    m(i, o) {
      C(i, t, o);
    },
    p(i, o) {
      o & /*i*/
      1024 && n !== (n = /*i*/
      i[10][4]) && g(t, "d", n), o & /*color, primaryColor*/
      36 && l !== (l = /*color*/
      i[2] || /*primaryColor*/
      i[5] || "currentColor") && g(t, "fill", l), o & /*i*/
      1024 && r !== (r = "translate(" + /*i*/
      i[10][0] / -2 + " " + /*i*/
      i[10][1] / -2 + ")") && g(t, "transform", r);
    },
    d(i) {
      i && v(t);
    }
  };
}
function Kf(e) {
  let t, n = (
    /*i*/
    e[10][4] && $r(e)
  );
  return {
    c() {
      n && n.c(), t = _e();
    },
    m(l, r) {
      n && n.m(l, r), C(l, t, r);
    },
    p(l, [r]) {
      /*i*/
      l[10][4] ? n ? n.p(l, r) : (n = $r(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: Z,
    o: Z,
    d(l) {
      n && n.d(l), l && v(t);
    }
  };
}
function Uf(e, t, n) {
  let { class: l = "" } = t, { id: r = "" } = t, { style: i = "" } = t, { icon: o } = t, { size: a = "" } = t, { color: f = "" } = t, { fw: s = !1 } = t, { pull: u = "" } = t, { scale: c = 1 } = t, { translateX: d = 0 } = t, { translateY: m = 0 } = t, { rotate: b = "" } = t, { flip: _ = !1 } = t, { spin: y = !1 } = t, { pulse: M = !1 } = t, { primaryColor: w = "" } = t, { secondaryColor: S = "" } = t, { primaryOpacity: z = 1 } = t, { secondaryOpacity: E = 0.4 } = t, { swapOpacity: D = !1 } = t, I, j, A;
  return e.$$set = (q) => {
    "class" in q && n(0, l = q.class), "id" in q && n(1, r = q.id), "style" in q && n(13, i = q.style), "icon" in q && n(14, o = q.icon), "size" in q && n(15, a = q.size), "color" in q && n(2, f = q.color), "fw" in q && n(16, s = q.fw), "pull" in q && n(17, u = q.pull), "scale" in q && n(18, c = q.scale), "translateX" in q && n(19, d = q.translateX), "translateY" in q && n(20, m = q.translateY), "rotate" in q && n(21, b = q.rotate), "flip" in q && n(22, _ = q.flip), "spin" in q && n(3, y = q.spin), "pulse" in q && n(4, M = q.pulse), "primaryColor" in q && n(5, w = q.primaryColor), "secondaryColor" in q && n(6, S = q.secondaryColor), "primaryOpacity" in q && n(7, z = q.primaryOpacity), "secondaryOpacity" in q && n(8, E = q.secondaryOpacity), "swapOpacity" in q && n(9, D = q.swapOpacity);
  }, e.$$.update = () => {
    e.$$.dirty & /*icon*/
    16384 && n(10, I = o && o.icon || [0, 0, "", [], ""]), e.$$.dirty & /*style, size, pull, fw*/
    237568 && n(11, j = Gf(i, a, u, s)), e.$$.dirty & /*scale, translateX, translateY, rotate, flip*/
    8126464 && n(12, A = xf(c, d, m, b, _, 512));
  }, [
    l,
    r,
    f,
    y,
    M,
    w,
    S,
    z,
    E,
    D,
    I,
    j,
    A,
    i,
    o,
    a,
    s,
    u,
    c,
    d,
    m,
    b,
    _
  ];
}
class ce extends Ce {
  constructor(t) {
    super(), ve(this, t, Uf, Kf, pe, {
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
function Xf() {
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
const Ul = Xf();
function Yf(e) {
  let t, n;
  return t = new ce({ props: { icon: Qf } }), {
    c() {
      U(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p: Z,
    i(l) {
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function Jf(e) {
  let t, n;
  return t = new ce({ props: { icon: Rf } }), {
    c() {
      U(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p: Z,
    i(l) {
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function Zf(e) {
  let t, n, l, r, i, o;
  const a = [Jf, Yf], f = [];
  function s(u, c) {
    return (
      /*$theme*/
      u[0] === "dark" ? 0 : 1
    );
  }
  return n = s(e), l = f[n] = a[n](e), {
    c() {
      t = k("button"), l.c(), g(t, "class", "px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"), g(t, "title", "Toggle theme");
    },
    m(u, c) {
      C(u, t, c), f[n].m(t, null), r = !0, i || (o = x(
        t,
        "click",
        /*toggleTheme*/
        e[1]
      ), i = !0);
    },
    p(u, [c]) {
      let d = n;
      n = s(u), n === d ? f[n].p(u, c) : (re(), N(f[d], 1, 1, () => {
        f[d] = null;
      }), ie(), l = f[n], l ? l.p(u, c) : (l = f[n] = a[n](u), l.c()), p(l, 1), l.m(t, null));
    },
    i(u) {
      r || (p(l), r = !0);
    },
    o(u) {
      N(l), r = !1;
    },
    d(u) {
      u && v(t), f[n].d(), i = !1, o();
    }
  };
}
function $f(e, t, n) {
  let l;
  F(e, Ul, (i) => n(0, l = i));
  function r() {
    console.log("Theme toggle clicked, current theme:", l), Ul.toggle();
  }
  return e.$$.update = () => {
    if (e.$$.dirty & /*$theme*/
    1 && (console.log("Theme changed to:", l), typeof window < "u")) {
      const i = document.documentElement;
      console.log("HTML classes:", i.className), console.log("Has dark class:", i.classList.contains("dark"));
    }
  }, [l, r];
}
class es extends Ce {
  constructor(t) {
    super(), ve(this, t, $f, Zf, pe, {});
  }
}
function ei(e, t, n) {
  const l = e.slice();
  return l[4] = t[n], l;
}
function ti(e) {
  let t, n, l, r = (
    /*tab*/
    e[4].label + ""
  ), i, o, a, f, s;
  n = new ce({
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
      t = k("button"), U(n.$$.fragment), l = P(), i = G(r), g(t, "class", o = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*activeTab*/
      (e[0] === /*tab*/
      e[4].id ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600"));
    },
    m(c, d) {
      C(c, t, d), V(n, t, null), h(t, l), h(t, i), a = !0, f || (s = x(t, "click", u), f = !0);
    },
    p(c, d) {
      e = c, (!a || d & /*activeTab*/
      1 && o !== (o = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*activeTab*/
      (e[0] === /*tab*/
      e[4].id ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600"))) && g(t, "class", o);
    },
    i(c) {
      a || (p(n.$$.fragment, c), a = !0);
    },
    o(c) {
      N(n.$$.fragment, c), a = !1;
    },
    d(c) {
      c && v(t), W(n), f = !1, s();
    }
  };
}
function ts(e) {
  let t, n, l, r, i, o, a, f = (
    /*tabs*/
    e[2]
  ), s = [];
  for (let c = 0; c < f.length; c += 1)
    s[c] = ti(ei(e, f, c));
  const u = (c) => N(s[c], 1, 1, () => {
    s[c] = null;
  });
  return o = new es({}), {
    c() {
      t = k("div"), n = k("nav");
      for (let c = 0; c < s.length; c += 1)
        s[c].c();
      l = P(), r = k("div"), i = P(), U(o.$$.fragment), g(r, "class", "flex-auto"), g(n, "class", "flex gap-2 px-4 py-2"), g(n, "aria-label", "Tabs"), g(t, "class", "w-full bg-gray-300 dark:bg-gray-800 dark:text-white");
    },
    m(c, d) {
      C(c, t, d), h(t, n);
      for (let m = 0; m < s.length; m += 1)
        s[m] && s[m].m(n, null);
      h(n, l), h(n, r), h(n, i), V(o, n, null), a = !0;
    },
    p(c, [d]) {
      if (d & /*activeTab, tabs, onTabChange*/
      7) {
        f = /*tabs*/
        c[2];
        let m;
        for (m = 0; m < f.length; m += 1) {
          const b = ei(c, f, m);
          s[m] ? (s[m].p(b, d), p(s[m], 1)) : (s[m] = ti(b), s[m].c(), p(s[m], 1), s[m].m(n, l));
        }
        for (re(), m = f.length; m < s.length; m += 1)
          u(m);
        ie();
      }
    },
    i(c) {
      if (!a) {
        for (let d = 0; d < f.length; d += 1)
          p(s[d]);
        p(o.$$.fragment, c), a = !0;
      }
    },
    o(c) {
      s = s.filter(Boolean);
      for (let d = 0; d < s.length; d += 1)
        N(s[d]);
      N(o.$$.fragment, c), a = !1;
    },
    d(c) {
      c && v(t), Ge(s, c), W(o);
    }
  };
}
function ns(e, t, n) {
  let { activeTab: l = "query-inspector" } = t, { onTabChange: r = () => {
  } } = t;
  const i = [
    {
      id: "results",
      label: "Query Results",
      icon: vf
    },
    {
      id: "data-elements",
      label: "Data Elements",
      icon: Hf
    }
  ], o = (a) => r(a.id);
  return e.$$set = (a) => {
    "activeTab" in a && n(0, l = a.activeTab), "onTabChange" in a && n(1, r = a.onTabChange);
  }, [l, r, i, o];
}
class ls extends Ce {
  constructor(t) {
    super(), ve(this, t, ns, ts, pe, { activeTab: 0, onTabChange: 1 });
  }
}
function rs(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Xl(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, l = e.slice(0, n);
  return [
    l.length > 1 ? l[0] + l.slice(2) : l,
    +e.slice(n + 1)
  ];
}
function en(e) {
  return e = Xl(Math.abs(e)), e ? e[1] : NaN;
}
function is(e, t) {
  return function(n, l) {
    for (var r = n.length, i = [], o = 0, a = e[0], f = 0; r > 0 && a > 0 && (f + a + 1 > l && (a = Math.max(1, l - f)), i.push(n.substring(r -= a, r + a)), !((f += a + 1) > l)); )
      a = e[o = (o + 1) % e.length];
    return i.reverse().join(t);
  };
}
function os(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var as = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Yl(e) {
  if (!(t = as.exec(e)))
    throw new Error("invalid format: " + e);
  var t;
  return new Fr({
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
Yl.prototype = Fr.prototype;
function Fr(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Fr.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function fs(e) {
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
var Ma;
function ss(e, t) {
  var n = Xl(e, t);
  if (!n)
    return e + "";
  var l = n[0], r = n[1], i = r - (Ma = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, o = l.length;
  return i === o ? l : i > o ? l + new Array(i - o + 1).join("0") : i > 0 ? l.slice(0, i) + "." + l.slice(i) : "0." + new Array(1 - i).join("0") + Xl(e, Math.max(0, t + i - 1))[0];
}
function ni(e, t) {
  var n = Xl(e, t);
  if (!n)
    return e + "";
  var l = n[0], r = n[1];
  return r < 0 ? "0." + new Array(-r).join("0") + l : l.length > r + 1 ? l.slice(0, r + 1) + "." + l.slice(r + 1) : l + new Array(r - l.length + 2).join("0");
}
const li = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: rs,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => ni(e * 100, t),
  r: ni,
  s: ss,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function ri(e) {
  return e;
}
var ii = Array.prototype.map, oi = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function us(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? ri : is(ii.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", l = e.currency === void 0 ? "" : e.currency[1] + "", r = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? ri : os(ii.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", a = e.minus === void 0 ? "−" : e.minus + "", f = e.nan === void 0 ? "NaN" : e.nan + "";
  function s(c) {
    c = Yl(c);
    var d = c.fill, m = c.align, b = c.sign, _ = c.symbol, y = c.zero, M = c.width, w = c.comma, S = c.precision, z = c.trim, E = c.type;
    E === "n" ? (w = !0, E = "g") : li[E] || (S === void 0 && (S = 12), z = !0, E = "g"), (y || d === "0" && m === "=") && (y = !0, d = "0", m = "=");
    var D = _ === "$" ? n : _ === "#" && /[boxX]/.test(E) ? "0" + E.toLowerCase() : "", I = _ === "$" ? l : /[%p]/.test(E) ? o : "", j = li[E], A = /[defgprs%]/.test(E);
    S = S === void 0 ? 6 : /[gprs]/.test(E) ? Math.max(1, Math.min(21, S)) : Math.max(0, Math.min(20, S));
    function q(R) {
      var T = D, ee = I, H, Q, B;
      if (E === "c")
        ee = j(R) + ee, R = "";
      else {
        R = +R;
        var Y = R < 0 || 1 / R < 0;
        if (R = isNaN(R) ? f : j(Math.abs(R), S), z && (R = fs(R)), Y && +R == 0 && b !== "+" && (Y = !1), T = (Y ? b === "(" ? b : a : b === "-" || b === "(" ? "" : b) + T, ee = (E === "s" ? oi[8 + Ma / 3] : "") + ee + (Y && b === "(" ? ")" : ""), A) {
          for (H = -1, Q = R.length; ++H < Q; )
            if (B = R.charCodeAt(H), 48 > B || B > 57) {
              ee = (B === 46 ? r + R.slice(H + 1) : R.slice(H)) + ee, R = R.slice(0, H);
              break;
            }
        }
      }
      w && !y && (R = t(R, 1 / 0));
      var ye = T.length + R.length + ee.length, te = ye < M ? new Array(M - ye + 1).join(d) : "";
      switch (w && y && (R = t(te + R, te.length ? M - ee.length : 1 / 0), te = ""), m) {
        case "<":
          R = T + R + ee + te;
          break;
        case "=":
          R = T + te + R + ee;
          break;
        case "^":
          R = te.slice(0, ye = te.length >> 1) + T + R + ee + te.slice(ye);
          break;
        default:
          R = te + T + R + ee;
          break;
      }
      return i(R);
    }
    return q.toString = function() {
      return c + "";
    }, q;
  }
  function u(c, d) {
    var m = s((c = Yl(c), c.type = "f", c)), b = Math.max(-8, Math.min(8, Math.floor(en(d) / 3))) * 3, _ = Math.pow(10, -b), y = oi[8 + b / 3];
    return function(M) {
      return m(_ * M) + y;
    };
  }
  return {
    format: s,
    formatPrefix: u
  };
}
var jl, Le, La;
cs({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function cs(e) {
  return jl = us(e), Le = jl.format, La = jl.formatPrefix, jl;
}
function za(e) {
  return Math.max(0, -en(Math.abs(e)));
}
function ds(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(en(t) / 3))) * 3 - en(Math.abs(e)));
}
function ms(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, en(t) - en(e)) + 1;
}
function rn(e) {
  for (var t = e.length / 6 | 0, n = new Array(t), l = 0; l < t; )
    n[l] = "#" + e.slice(l * 6, ++l * 6);
  return n;
}
const gs = rn("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), bs = rn("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function Gr(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Ra(e, t) {
  var n = Object.create(e.prototype);
  for (var l in t)
    n[l] = t[l];
  return n;
}
function Fn() {
}
var jn = 0.7, Jl = 1 / jn, Zt = "\\s*([+-]?\\d+)\\s*", On = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", it = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", _s = /^#([0-9a-f]{3,8})$/, hs = new RegExp(`^rgb\\(${Zt},${Zt},${Zt}\\)$`), ys = new RegExp(`^rgb\\(${it},${it},${it}\\)$`), ks = new RegExp(`^rgba\\(${Zt},${Zt},${Zt},${On}\\)$`), ps = new RegExp(`^rgba\\(${it},${it},${it},${On}\\)$`), ws = new RegExp(`^hsl\\(${On},${it},${it}\\)$`), vs = new RegExp(`^hsla\\(${On},${it},${it},${On}\\)$`), ai = {
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
Gr(Fn, In, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: fi,
  // Deprecated! Use color.formatHex.
  formatHex: fi,
  formatHex8: Cs,
  formatHsl: Ss,
  formatRgb: si,
  toString: si
});
function fi() {
  return this.rgb().formatHex();
}
function Cs() {
  return this.rgb().formatHex8();
}
function Ss() {
  return qa(this).formatHsl();
}
function si() {
  return this.rgb().formatRgb();
}
function In(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = _s.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ui(t) : n === 3 ? new Ie(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ol(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ol(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = hs.exec(e)) ? new Ie(t[1], t[2], t[3], 1) : (t = ys.exec(e)) ? new Ie(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = ks.exec(e)) ? Ol(t[1], t[2], t[3], t[4]) : (t = ps.exec(e)) ? Ol(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ws.exec(e)) ? mi(t[1], t[2] / 100, t[3] / 100, 1) : (t = vs.exec(e)) ? mi(t[1], t[2] / 100, t[3] / 100, t[4]) : ai.hasOwnProperty(e) ? ui(ai[e]) : e === "transparent" ? new Ie(NaN, NaN, NaN, 0) : null;
}
function ui(e) {
  return new Ie(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ol(e, t, n, l) {
  return l <= 0 && (e = t = n = NaN), new Ie(e, t, n, l);
}
function Ns(e) {
  return e instanceof Fn || (e = In(e)), e ? (e = e.rgb(), new Ie(e.r, e.g, e.b, e.opacity)) : new Ie();
}
function Zl(e, t, n, l) {
  return arguments.length === 1 ? Ns(e) : new Ie(e, t, n, l ?? 1);
}
function Ie(e, t, n, l) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +l;
}
Gr(Ie, Zl, Ra(Fn, {
  brighter(e) {
    return e = e == null ? Jl : Math.pow(Jl, e), new Ie(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? jn : Math.pow(jn, e), new Ie(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ie(Rt(this.r), Rt(this.g), Rt(this.b), $l(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ci,
  // Deprecated! Use color.formatHex.
  formatHex: ci,
  formatHex8: Ms,
  formatRgb: di,
  toString: di
}));
function ci() {
  return `#${zt(this.r)}${zt(this.g)}${zt(this.b)}`;
}
function Ms() {
  return `#${zt(this.r)}${zt(this.g)}${zt(this.b)}${zt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function di() {
  const e = $l(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Rt(this.r)}, ${Rt(this.g)}, ${Rt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function $l(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Rt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function zt(e) {
  return e = Rt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function mi(e, t, n, l) {
  return l <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ke(e, t, n, l);
}
function qa(e) {
  if (e instanceof Ke)
    return new Ke(e.h, e.s, e.l, e.opacity);
  if (e instanceof Fn || (e = In(e)), !e)
    return new Ke();
  if (e instanceof Ke)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, l = e.b / 255, r = Math.min(t, n, l), i = Math.max(t, n, l), o = NaN, a = i - r, f = (i + r) / 2;
  return a ? (t === i ? o = (n - l) / a + (n < l) * 6 : n === i ? o = (l - t) / a + 2 : o = (t - n) / a + 4, a /= f < 0.5 ? i + r : 2 - i - r, o *= 60) : a = f > 0 && f < 1 ? 0 : o, new Ke(o, a, f, e.opacity);
}
function Ls(e, t, n, l) {
  return arguments.length === 1 ? qa(e) : new Ke(e, t, n, l ?? 1);
}
function Ke(e, t, n, l) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +l;
}
Gr(Ke, Ls, Ra(Fn, {
  brighter(e) {
    return e = e == null ? Jl : Math.pow(Jl, e), new Ke(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? jn : Math.pow(jn, e), new Ke(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, l = n + (n < 0.5 ? n : 1 - n) * t, r = 2 * n - l;
    return new Ie(
      zr(e >= 240 ? e - 240 : e + 120, r, l),
      zr(e, r, l),
      zr(e < 120 ? e + 240 : e - 120, r, l),
      this.opacity
    );
  },
  clamp() {
    return new Ke(gi(this.h), Il(this.s), Il(this.l), $l(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = $l(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${gi(this.h)}, ${Il(this.s) * 100}%, ${Il(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function gi(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Il(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function zr(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const xr = (e) => () => e;
function zs(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Rs(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(l) {
    return Math.pow(e + l * t, n);
  };
}
function qs(e) {
  return (e = +e) == 1 ? Ea : function(t, n) {
    return n - t ? Rs(t, n, e) : xr(isNaN(t) ? n : t);
  };
}
function Ea(e, t) {
  var n = t - e;
  return n ? zs(e, n) : xr(isNaN(e) ? t : e);
}
const bi = function e(t) {
  var n = qs(t);
  function l(r, i) {
    var o = n((r = Zl(r)).r, (i = Zl(i)).r), a = n(r.g, i.g), f = n(r.b, i.b), s = Ea(r.opacity, i.opacity);
    return function(u) {
      return r.r = o(u), r.g = a(u), r.b = f(u), r.opacity = s(u), r + "";
    };
  }
  return l.gamma = e, l;
}(1);
function Es(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, l = t.slice(), r;
  return function(i) {
    for (r = 0; r < n; ++r)
      l[r] = e[r] * (1 - i) + t[r] * i;
    return l;
  };
}
function Ds(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function As(e, t) {
  var n = t ? t.length : 0, l = e ? Math.min(n, e.length) : 0, r = new Array(l), i = new Array(n), o;
  for (o = 0; o < l; ++o)
    r[o] = Vr(e[o], t[o]);
  for (; o < n; ++o)
    i[o] = t[o];
  return function(a) {
    for (o = 0; o < l; ++o)
      i[o] = r[o](a);
    return i;
  };
}
function Ts(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(l) {
    return n.setTime(e * (1 - l) + t * l), n;
  };
}
function er(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function Ps(e, t) {
  var n = {}, l = {}, r;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (r in t)
    r in e ? n[r] = Vr(e[r], t[r]) : l[r] = t[r];
  return function(i) {
    for (r in n)
      l[r] = n[r](i);
    return l;
  };
}
var Pr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Rr = new RegExp(Pr.source, "g");
function Qs(e) {
  return function() {
    return e;
  };
}
function js(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Os(e, t) {
  var n = Pr.lastIndex = Rr.lastIndex = 0, l, r, i, o = -1, a = [], f = [];
  for (e = e + "", t = t + ""; (l = Pr.exec(e)) && (r = Rr.exec(t)); )
    (i = r.index) > n && (i = t.slice(n, i), a[o] ? a[o] += i : a[++o] = i), (l = l[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, f.push({ i: o, x: er(l, r) })), n = Rr.lastIndex;
  return n < t.length && (i = t.slice(n), a[o] ? a[o] += i : a[++o] = i), a.length < 2 ? f[0] ? js(f[0].x) : Qs(t) : (t = f.length, function(s) {
    for (var u = 0, c; u < t; ++u)
      a[(c = f[u]).i] = c.x(s);
    return a.join("");
  });
}
function Vr(e, t) {
  var n = typeof t, l;
  return t == null || n === "boolean" ? xr(t) : (n === "number" ? er : n === "string" ? (l = In(t)) ? (t = l, bi) : Os : t instanceof In ? bi : t instanceof Date ? Ts : Ds(t) ? Es : Array.isArray(t) ? As : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Ps : er)(e, t);
}
function Is(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function ir(e) {
  var t = e.length;
  return function(n) {
    return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
  };
}
const Hs = ir(rn("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
ir(rn("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
ir(rn("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
ir(rn("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function Bs(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = k("span"), g(t, "class", n = "bar " + /*absolutePosition*/
      (e[0] ? "absolute top-0" : "") + " " + /*hoverable*/
      (e[7] ? "hover:opacity-50" : "") + " svelte-109q9hn"), g(t, "style", l = "width: " + /*widthString*/
      e[9] + "; " + /*colorScale*/
      (e[4] != null ? "background-color: " + /*colorScale*/
      e[4](
        /*fraction*/
        e[1]
      ) + "; " : `background-color: ${/*color*/
      e[5]};`) + " " + /*absolutePosition*/
      (e[0] ? `left: ${/*maxWidth*/
      e[3] * /*leftFraction*/
      e[2]}px;` : "")), fe(
        t,
        "animated",
        /*loaded*/
        e[8]
      ), fe(
        t,
        "rounded-full",
        /*rounded*/
        e[6]
      );
    },
    m(o, a) {
      C(o, t, a), r || (i = [
        x(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[10]
        ),
        x(
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
      (o[7] ? "hover:opacity-50" : "") + " svelte-109q9hn") && g(t, "class", n), a & /*widthString, colorScale, fraction, color, absolutePosition, maxWidth, leftFraction*/
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
      o[2]}px;` : "")) && g(t, "style", l), a & /*absolutePosition, hoverable, loaded*/
      385 && fe(
        t,
        "animated",
        /*loaded*/
        o[8]
      ), a & /*absolutePosition, hoverable, rounded*/
      193 && fe(
        t,
        "rounded-full",
        /*rounded*/
        o[6]
      );
    },
    i: Z,
    o: Z,
    d(o) {
      o && v(t), r = !1, we(i);
    }
  };
}
function Fs(e, t, n) {
  let { absolutePosition: l = !1 } = t, { fraction: r = 1 } = t, { leftFraction: i = 0 } = t, { maxWidth: o = null } = t, { colorScale: a = null } = t, { color: f = "lightgray" } = t, { rounded: s = !0 } = t, { hoverable: u = !1 } = t;
  Nt(() => {
    setTimeout(() => n(8, c = !0), 100);
  });
  let c = !1, d = "";
  function m(_) {
    Er.call(this, e, _);
  }
  function b(_) {
    Er.call(this, e, _);
  }
  return e.$$set = (_) => {
    "absolutePosition" in _ && n(0, l = _.absolutePosition), "fraction" in _ && n(1, r = _.fraction), "leftFraction" in _ && n(2, i = _.leftFraction), "maxWidth" in _ && n(3, o = _.maxWidth), "colorScale" in _ && n(4, a = _.colorScale), "color" in _ && n(5, f = _.color), "rounded" in _ && n(6, s = _.rounded), "hoverable" in _ && n(7, u = _.hoverable);
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
    b
  ];
}
class Wr extends Ce {
  constructor(t) {
    super(), ve(this, t, Fs, Bs, pe, {
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
function Gs(e) {
  return e.map(
    ((t) => (n) => t += n)(0)
  );
}
const xs = (e) => ({
  hoveringIndex: e & /*hoveringIndex*/
  8192
}), _i = (e) => ({ hoveringIndex: (
  /*hoveringIndex*/
  e[13]
) });
function hi(e, t, n) {
  const l = e.slice();
  return l[25] = t[n], l[27] = n, l;
}
function yi(e) {
  let t, n;
  return {
    c() {
      t = k("div"), n = G(
        /*title*/
        e[11]
      ), g(t, "class", "font-bold text-xs truncate text-right"), le(t, "width", "96px");
    },
    m(l, r) {
      C(l, t, r), h(t, n);
    },
    p(l, r) {
      r & /*title*/
      2048 && oe(
        n,
        /*title*/
        l[11]
      );
    },
    d(l) {
      l && v(t);
    }
  };
}
function ki(e) {
  let t, n;
  return t = new Wr({
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
      U(t.$$.fragment);
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
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function Vs(e) {
  let t, n;
  return t = new Wr({
    props: {
      absolutePosition: !0,
      fraction: (
        /*scale*/
        (e[1] || Si)(
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
      U(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*scale, value*/
      6 && (i.fraction = /*scale*/
      (l[1] || Si)(
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
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function Ws(e) {
  let t, n, l = (
    /*values*/
    e[3]
  ), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = pi(hi(e, l, o));
  const i = (o) => N(r[o], 1, 1, () => {
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
      C(o, t, a), n = !0;
    },
    p(o, a) {
      if (a & /*scale, offsets, values, colors, hoverable, hoveringIndex*/
      25674) {
        l = /*values*/
        o[3];
        let f;
        for (f = 0; f < l.length; f += 1) {
          const s = hi(o, l, f);
          r[f] ? (r[f].p(s, a), p(r[f], 1)) : (r[f] = pi(s), r[f].c(), p(r[f], 1), r[f].m(t.parentNode, t));
        }
        for (re(), f = l.length; f < r.length; f += 1)
          i(f);
        ie();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < l.length; a += 1)
          p(r[a]);
        n = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1)
        N(r[a]);
      n = !1;
    },
    d(o) {
      Ge(r, o), o && v(t);
    }
  };
}
function pi(e) {
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
  return t = new Wr({
    props: {
      absolutePosition: !0,
      leftFraction: (
        /*i*/
        e[27] > 0 ? (
          /*scale*/
          (e[1] || vi)(
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
        (e[1] || Ci)(
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
      U(t.$$.fragment);
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
        (e[1] || vi)(
          /*offsets*/
          e[14][
            /*i*/
            e[27] - 1
          ]
        )
      ) : 0), i & /*scale, values*/
      10 && (o.fraction = /*scale*/
      (e[1] || Ci)(
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
      n || (p(t.$$.fragment, r), n = !0);
    },
    o(r) {
      N(t.$$.fragment, r), n = !1;
    },
    d(r) {
      W(t, r);
    }
  };
}
function wi(e) {
  let t, n, l, r;
  const i = [Us, Ks], o = [];
  function a(f, s) {
    return (
      /*$$slots*/
      f[15].caption ? 1 : 0
    );
  }
  return n = a(e), l = o[n] = i[n](e), {
    c() {
      t = k("div"), l.c(), g(t, "class", "text-xs text-gray-800 dark:text-gray-200");
    },
    m(f, s) {
      C(f, t, s), o[n].m(t, null), r = !0;
    },
    p(f, s) {
      let u = n;
      n = a(f), n === u ? o[n].p(f, s) : (re(), N(o[u], 1, 1, () => {
        o[u] = null;
      }), ie(), l = o[n], l ? l.p(f, s) : (l = o[n] = i[n](f), l.c()), p(l, 1), l.m(t, null));
    },
    i(f) {
      r || (p(l), r = !0);
    },
    o(f) {
      N(l), r = !1;
    },
    d(f) {
      f && v(t), o[n].d();
    }
  };
}
function Ks(e) {
  let t;
  const n = (
    /*#slots*/
    e[17].caption
  ), l = Ue(
    n,
    e,
    /*$$scope*/
    e[16],
    _i
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
      73728) && Ye(
        l,
        n,
        r,
        /*$$scope*/
        r[16],
        t ? Xe(
          n,
          /*$$scope*/
          r[16],
          i,
          xs
        ) : Je(
          /*$$scope*/
          r[16]
        ),
        _i
      );
    },
    i(r) {
      t || (p(l, r), t = !0);
    },
    o(r) {
      N(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function Us(e) {
  let t = Le(".3")(
    /*value*/
    e[2]
  ) + "", n;
  return {
    c() {
      n = G(t);
    },
    m(l, r) {
      C(l, n, r);
    },
    p(l, r) {
      r & /*value*/
      4 && t !== (t = Le(".3")(
        /*value*/
        l[2]
      ) + "") && oe(n, t);
    },
    i: Z,
    o: Z,
    d(l) {
      l && v(n);
    }
  };
}
function Xs(e) {
  let t, n, l, r, i, o, a, f, s = !!/*title*/
  e[11] && yi(e), u = (
    /*showFullBar*/
    e[4] && ki(e)
  );
  const c = [Ws, Vs], d = [];
  function m(_, y) {
    return (
      /*values*/
      _[3] != null ? 0 : 1
    );
  }
  i = m(e), o = d[i] = c[i](e);
  let b = (
    /*showTooltip*/
    e[5] && wi(e)
  );
  return {
    c() {
      t = k("div"), s && s.c(), n = P(), l = k("div"), u && u.c(), r = P(), o.c(), a = P(), b && b.c(), g(l, "class", "parent-bar relative rounded-full overflow-hidden"), le(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), le(l, "height", "6px"), fe(l, "mb-1", !/*horizontalLayout*/
      e[12]), g(t, "class", "items-center gap-1"), fe(
        t,
        "flex",
        /*horizontalLayout*/
        e[12]
      );
    },
    m(_, y) {
      C(_, t, y), s && s.m(t, null), h(t, n), h(t, l), u && u.m(l, null), h(l, r), d[i].m(l, null), h(t, a), b && b.m(t, null), f = !0;
    },
    p(_, [y]) {
      /*title*/
      _[11] ? s ? s.p(_, y) : (s = yi(_), s.c(), s.m(t, n)) : s && (s.d(1), s = null), /*showFullBar*/
      _[4] ? u ? (u.p(_, y), y & /*showFullBar*/
      16 && p(u, 1)) : (u = ki(_), u.c(), p(u, 1), u.m(l, r)) : u && (re(), N(u, 1, 1, () => {
        u = null;
      }), ie());
      let M = i;
      i = m(_), i === M ? d[i].p(_, y) : (re(), N(d[M], 1, 1, () => {
        d[M] = null;
      }), ie(), o = d[i], o ? o.p(_, y) : (o = d[i] = c[i](_), o.c()), p(o, 1), o.m(l, null)), (!f || y & /*width*/
      1) && le(
        l,
        "width",
        /*width*/
        _[0] == null ? "100%" : `${/*width*/
        _[0]}px`
      ), (!f || y & /*horizontalLayout*/
      4096) && fe(l, "mb-1", !/*horizontalLayout*/
      _[12]), /*showTooltip*/
      _[5] ? b ? (b.p(_, y), y & /*showTooltip*/
      32 && p(b, 1)) : (b = wi(_), b.c(), p(b, 1), b.m(t, null)) : b && (re(), N(b, 1, 1, () => {
        b = null;
      }), ie()), (!f || y & /*horizontalLayout*/
      4096) && fe(
        t,
        "flex",
        /*horizontalLayout*/
        _[12]
      );
    },
    i(_) {
      f || (p(u), p(o), p(b), f = !0);
    },
    o(_) {
      N(u), N(o), N(b), f = !1;
    },
    d(_) {
      _ && v(t), s && s.d(), u && u.d(), d[i].d(), b && b.d();
    }
  };
}
const vi = (e) => e, Ci = (e) => e, Si = (e) => e;
function Ys(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = Ir(l);
  let { width: o = 100 } = t, { scale: a = null } = t, { value: f = 0 } = t, { values: s = null } = t, { showFullBar: u = !1 } = t, { showTooltip: c = !0 } = t, { colors: d = gs } = t, { colorScale: m = Hs } = t, { color: b = null } = t, { fullBarColor: _ = "#e5e7eb" } = t, { hoverable: y = !1 } = t, { title: M = null } = t, { horizontalLayout: w = !1 } = t, S = null, z = [];
  const E = (T) => n(13, S = -1), D = (T) => n(13, S = null), I = (T, ee) => n(13, S = T), j = (T) => n(13, S = null), A = () => b, q = (T) => n(13, S = 0), R = (T) => n(13, S = null);
  return e.$$set = (T) => {
    "width" in T && n(0, o = T.width), "scale" in T && n(1, a = T.scale), "value" in T && n(2, f = T.value), "values" in T && n(3, s = T.values), "showFullBar" in T && n(4, u = T.showFullBar), "showTooltip" in T && n(5, c = T.showTooltip), "colors" in T && n(6, d = T.colors), "colorScale" in T && n(7, m = T.colorScale), "color" in T && n(8, b = T.color), "fullBarColor" in T && n(9, _ = T.fullBarColor), "hoverable" in T && n(10, y = T.hoverable), "title" in T && n(11, M = T.title), "horizontalLayout" in T && n(12, w = T.horizontalLayout), "$$scope" in T && n(16, r = T.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*values*/
    8 && (s != null ? n(14, z = Gs(s)) : n(14, z = []));
  }, [
    o,
    a,
    f,
    s,
    u,
    c,
    d,
    m,
    b,
    _,
    y,
    M,
    w,
    S,
    z,
    i,
    r,
    l,
    E,
    D,
    I,
    j,
    A,
    q,
    R
  ];
}
class Kr extends Ce {
  constructor(t) {
    super(), ve(this, t, Ys, Xs, pe, {
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
const Js = (e) => ({ hovering: e & /*hovering*/
1 }), Ni = (e) => ({ hovering: (
  /*hovering*/
  e[0]
) });
function Zs(e) {
  let t, n, l, r;
  const i = (
    /*#slots*/
    e[4].default
  ), o = Ue(
    i,
    e,
    /*$$scope*/
    e[3],
    Ni
  );
  return {
    c() {
      t = k("div"), o && o.c(), g(
        t,
        "class",
        /*clazz*/
        e[1]
      ), g(
        t,
        "style",
        /*style*/
        e[2]
      );
    },
    m(a, f) {
      C(a, t, f), o && o.m(t, null), n = !0, l || (r = [
        x(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[6]
        ),
        x(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[7]
        ),
        x(
          t,
          "click",
          /*click_handler*/
          e[5]
        )
      ], l = !0);
    },
    p(a, [f]) {
      o && o.p && (!n || f & /*$$scope, hovering*/
      9) && Ye(
        o,
        i,
        a,
        /*$$scope*/
        a[3],
        n ? Xe(
          i,
          /*$$scope*/
          a[3],
          f,
          Js
        ) : Je(
          /*$$scope*/
          a[3]
        ),
        Ni
      ), (!n || f & /*clazz*/
      2) && g(
        t,
        "class",
        /*clazz*/
        a[1]
      ), (!n || f & /*style*/
      4) && g(
        t,
        "style",
        /*style*/
        a[2]
      );
    },
    i(a) {
      n || (p(o, a), n = !0);
    },
    o(a) {
      N(o, a), n = !1;
    },
    d(a) {
      a && v(t), o && o.d(a), l = !1, we(r);
    }
  };
}
function $s(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t, { hovering: i = !1 } = t, { class: o = "" } = t, { style: a = "" } = t;
  function f(c) {
    Er.call(this, e, c);
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
class or extends Ce {
  constructor(t) {
    super(), ve(this, t, $s, Zs, pe, { hovering: 0, class: 1, style: 2 });
  }
}
function Mi(e, t, n) {
  const l = e.slice();
  return l[37] = t[n], l[39] = n, l;
}
function Li(e, t, n) {
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
      t = k("option"), l = G(n), t.__value = r = /*scope*/
      e[41], t.value = t.__value;
    },
    m(i, o) {
      C(i, t, o), h(t, l);
    },
    p(i, o) {
      o[0] & /*scopes*/
      4 && n !== (n = /*scope*/
      i[41] + "") && oe(l, n), o[0] & /*scopes*/
      4 && r !== (r = /*scope*/
      i[41]) && (t.__value = r, t.value = t.__value);
    },
    d(i) {
      i && v(t);
    }
  };
}
function eu(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b, _, y, M, w, S, z, E, D, I, j, A, q, R, T, ee;
  function H(ne, O) {
    if (
      /*hasError*/
      ne[19]
    )
      return ru;
    if (
      /*hasConceptIds*/
      ne[20]
    )
      return lu;
  }
  let Q = H(e), B = Q && Q(e), Y = (
    /*totalCount*/
    e[21] > 0 && Ri(e)
  );
  const ye = [ou, iu], te = [];
  function ue(ne, O) {
    return (
      /*paginatedConcepts*/
      ne[18].length > 0 ? 0 : 1
    );
  }
  _ = ue(e), y = te[_] = ye[_](e), z = new ce({
    props: { icon: qt, class: "inline mr-2" }
  });
  let be = (
    /*selectedConceptIDs*/
    e[12].size > 0 && Ai(e)
  );
  function se(ne, O) {
    return (
      /*queryByName*/
      ne[1] ? su : fu
    );
  }
  let ge = se(e), X = ge(e), ae = (
    /*sortedConcepts*/
    e[15].length > st && Ti(e)
  );
  return {
    c() {
      B && B.c(), t = P(), n = k("div"), l = k("div"), r = k("div"), i = k("input"), o = P(), a = k("div"), a.textContent = "Data Element", f = P(), s = k("div"), s.textContent = "Type", u = P(), c = k("div"), d = G(`Count
            `), Y && Y.c(), m = P(), b = k("div"), y.c(), M = P(), w = k("div"), S = k("button"), U(z.$$.fragment), E = G(`
          Query `), be && be.c(), I = P(), j = k("button"), X.c(), q = P(), ae && ae.c(), g(i, "type", "checkbox"), g(i, "class", "form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"), i.checked = /*allFilteredSelected*/
      e[13], i.indeterminate = /*someFilteredSelected*/
      e[17], g(i, "aria-label", "Select all concepts"), g(r, "class", "flex items-center justify-center"), g(a, "class", "font-semibold text-gray-900 dark:text-gray-100"), g(s, "class", "font-semibold text-gray-900 dark:text-gray-100"), g(c, "class", "font-semibold text-gray-900 dark:text-gray-100"), g(l, "class", "grid gap-4 px-4 py-4 items-center"), le(l, "grid-template-columns", "2rem 2fr 1fr 2fr"), g(n, "class", "bg-gray-50 dark:bg-gray-800 rounded-t-lg border border-gray-200 dark:border-gray-700"), g(b, "class", "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-b-lg overflow-y-auto custom-scrollbar min-h-0 flex-auto svelte-1xw87wt"), g(S, "class", "px-3 py-1.5 font-semibold rounded transition-colors duration-200 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-200/50 disabled:dark:bg-gray-700/50 text-white disabled:text-gray-500/50 whitespace-nowrap"), S.disabled = D = /*selectedConceptIDs*/
      e[12].size == 0, j.disabled = A = /*selectedConceptIDs*/
      e[12].size == 0, g(j, "class", "px-3 py-1.5 font-semibold rounded transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white whitespace-nowrap"), g(j, "title", "Change whether to add to query by concept name or ID"), g(w, "class", "py-2 flex items-center gap-2");
    },
    m(ne, O) {
      B && B.m(ne, O), C(ne, t, O), C(ne, n, O), h(n, l), h(l, r), h(r, i), h(l, o), h(l, a), h(l, f), h(l, s), h(l, u), h(l, c), h(c, d), Y && Y.m(c, null), C(ne, m, O), C(ne, b, O), te[_].m(b, null), C(ne, M, O), C(ne, w, O), h(w, S), V(z, S, null), h(S, E), be && be.m(S, null), h(w, I), h(w, j), X.m(j, null), h(w, q), ae && ae.m(w, null), R = !0, T || (ee = [
        x(
          i,
          "change",
          /*toggleSelectAllFiltered*/
          e[25]
        ),
        x(
          S,
          "click",
          /*click_handler_3*/
          e[35]
        ),
        x(
          j,
          "click",
          /*click_handler_4*/
          e[36]
        )
      ], T = !0);
    },
    p(ne, O) {
      Q === (Q = H(ne)) && B ? B.p(ne, O) : (B && B.d(1), B = Q && Q(ne), B && (B.c(), B.m(t.parentNode, t))), (!R || O[0] & /*allFilteredSelected*/
      8192) && (i.checked = /*allFilteredSelected*/
      ne[13]), (!R || O[0] & /*someFilteredSelected*/
      131072) && (i.indeterminate = /*someFilteredSelected*/
      ne[17]), /*totalCount*/
      ne[21] > 0 ? Y ? Y.p(ne, O) : (Y = Ri(ne), Y.c(), Y.m(c, null)) : Y && (Y.d(1), Y = null);
      let he = _;
      _ = ue(ne), _ === he ? te[_].p(ne, O) : (re(), N(te[he], 1, 1, () => {
        te[he] = null;
      }), ie(), y = te[_], y ? y.p(ne, O) : (y = te[_] = ye[_](ne), y.c()), p(y, 1), y.m(b, null)), /*selectedConceptIDs*/
      ne[12].size > 0 ? be ? be.p(ne, O) : (be = Ai(ne), be.c(), be.m(S, null)) : be && (be.d(1), be = null), (!R || O[0] & /*selectedConceptIDs*/
      4096 && D !== (D = /*selectedConceptIDs*/
      ne[12].size == 0)) && (S.disabled = D), ge !== (ge = se(ne)) && (X.d(1), X = ge(ne), X && (X.c(), X.m(j, null))), (!R || O[0] & /*selectedConceptIDs*/
      4096 && A !== (A = /*selectedConceptIDs*/
      ne[12].size == 0)) && (j.disabled = A), /*sortedConcepts*/
      ne[15].length > st ? ae ? (ae.p(ne, O), O[0] & /*sortedConcepts*/
      32768 && p(ae, 1)) : (ae = Ti(ne), ae.c(), p(ae, 1), ae.m(w, null)) : ae && (re(), N(ae, 1, 1, () => {
        ae = null;
      }), ie());
    },
    i(ne) {
      R || (p(y), p(z.$$.fragment, ne), p(ae), R = !0);
    },
    o(ne) {
      N(y), N(z.$$.fragment, ne), N(ae), R = !1;
    },
    d(ne) {
      B && B.d(ne), ne && v(t), ne && v(n), Y && Y.d(), ne && v(m), ne && v(b), te[_].d(), ne && v(M), ne && v(w), W(z), be && be.d(), X.d(), ae && ae.d(), T = !1, we(ee);
    }
  };
}
function tu(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m;
  return a = new ce({
    props: { icon: Df, class: "inline mr-2" }
  }), {
    c() {
      t = k("div"), n = k("div"), n.textContent = "Data elements not retrieved yet", l = P(), r = k("p"), r.textContent = "Click below to retrieve available data elements in this scope.", i = P(), o = k("button"), U(a.$$.fragment), f = G(`
          Load Data Elements for `), s = k("span"), u = G(
        /*scopeName*/
        e[0]
      ), g(n, "class", "w-3/4 text-gray-700 dark:text-gray-200 text-lg font-semibold"), g(r, "class", "text-gray-600 dark:text-gray-400 w-1/3"), g(s, "class", "font-mono"), g(o, "class", "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md"), o.disabled = /*isLoading*/
      e[4], g(t, "class", "flex flex-col w-full h-full items-center justify-center text-center gap-4");
    },
    m(b, _) {
      C(b, t, _), h(t, n), h(t, l), h(t, r), h(t, i), h(t, o), V(a, o, null), h(o, f), h(o, s), h(s, u), c = !0, d || (m = x(o, "click", function() {
        Fe(
          /*onAnalyze*/
          e[6]
        ) && e[6].apply(this, arguments);
      }), d = !0);
    },
    p(b, _) {
      e = b, (!c || _[0] & /*scopeName*/
      1) && oe(
        u,
        /*scopeName*/
        e[0]
      ), (!c || _[0] & /*isLoading*/
      16) && (o.disabled = /*isLoading*/
      e[4]);
    },
    i(b) {
      c || (p(a.$$.fragment, b), c = !0);
    },
    o(b) {
      N(a.$$.fragment, b), c = !1;
    },
    d(b) {
      b && v(t), W(a), d = !1, m();
    }
  };
}
function nu(e) {
  let t, n, l, r = (
    /*loadingMessage*/
    e[5] && Pi(e)
  );
  return {
    c() {
      t = k("div"), n = k("div"), n.innerHTML = `<div class="relative"><div class="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-spin"></div> 
            
            <div class="absolute top-2 left-2 w-12 h-12 border-4 border-blue-600 dark:border-blue-400 rounded-full animate-spin" style="animation-direction: reverse; animation-duration: 1.5s;"></div> 
            
            <div class="absolute top-6 left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div></div>`, l = P(), r && r.c(), g(n, "class", "flex justify-center mb-8"), g(t, "class", "text-center py-16");
    },
    m(i, o) {
      C(i, t, o), h(t, n), h(t, l), r && r.m(t, null);
    },
    p(i, o) {
      /*loadingMessage*/
      i[5] ? r ? r.p(i, o) : (r = Pi(i), r.c(), r.m(t, null)) : r && (r.d(1), r = null);
    },
    i: Z,
    o: Z,
    d(i) {
      i && v(t), r && r.d();
    }
  };
}
function lu(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m;
  return {
    c() {
      t = k("div"), n = k("div"), l = k("div"), l.innerHTML = '<span class="text-yellow-600 dark:text-yellow-400">⚠️</span>', r = P(), i = k("div"), o = k("h3"), o.textContent = "Concept Names Not Found", a = P(), f = k("div"), s = k("p"), s.textContent = `Some concepts are showing as IDs instead of human-readable
                  names. This might be due to vocabulary lookup issues.`, u = P(), c = k("button"), c.textContent = "🔄 Refresh Analysis", g(l, "class", "flex-shrink-0"), g(o, "class", "text-sm font-medium text-yellow-800 dark:text-yellow-200"), g(c, "class", "mt-2 bg-yellow-600 hover:bg-yellow-700 text-white text-xs px-3 py-1 rounded transition-colors duration-200"), g(f, "class", "mt-2 text-sm text-yellow-700 dark:text-yellow-300"), g(i, "class", "ml-3"), g(n, "class", "flex items-start"), g(t, "class", "bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4");
    },
    m(b, _) {
      C(b, t, _), h(t, n), h(n, l), h(n, r), h(n, i), h(i, o), h(i, a), h(i, f), h(f, s), h(f, u), h(f, c), d || (m = x(
        c,
        "click",
        /*click_handler_1*/
        e[32]
      ), d = !0);
    },
    p: Z,
    d(b) {
      b && v(t), d = !1, m();
    }
  };
}
function ru(e) {
  let t, n, l, r, i, o, a, f, s, u = (
    /*scopeConcepts*/
    e[8].error + ""
  ), c, d, m, b, _;
  return {
    c() {
      t = k("div"), n = k("div"), l = k("div"), l.innerHTML = '<span class="text-red-600 dark:text-red-400">❌</span>', r = P(), i = k("div"), o = k("h3"), o.textContent = "Analysis Failed", a = P(), f = k("div"), s = k("p"), c = G(u), d = P(), m = k("button"), m.textContent = "🔄 Retry Analysis", g(l, "class", "flex-shrink-0"), g(o, "class", "text-sm font-medium text-red-800 dark:text-red-200"), g(m, "class", "mt-2 bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded transition-colors duration-200"), g(f, "class", "mt-2 text-sm text-red-700 dark:text-red-300"), g(i, "class", "ml-3"), g(n, "class", "flex items-start"), g(t, "class", "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4");
    },
    m(y, M) {
      C(y, t, M), h(t, n), h(n, l), h(n, r), h(n, i), h(i, o), h(i, a), h(i, f), h(f, s), h(s, c), h(f, d), h(f, m), b || (_ = x(
        m,
        "click",
        /*click_handler*/
        e[31]
      ), b = !0);
    },
    p(y, M) {
      M[0] & /*scopeConcepts*/
      256 && u !== (u = /*scopeConcepts*/
      y[8].error + "") && oe(c, u);
    },
    d(y) {
      y && v(t), b = !1, _();
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
      t = k("span"), n = G("(Total: "), r = G(l), i = G(")"), g(t, "class", "text-sm font-normal text-gray-600 dark:text-gray-400");
    },
    m(o, a) {
      C(o, t, a), h(t, n), h(t, r), h(t, i);
    },
    p(o, a) {
      a[0] & /*totalCount*/
      2097152 && l !== (l = /*totalCount*/
      o[21].toLocaleString() + "") && oe(r, l);
    },
    d(o) {
      o && v(t);
    }
  };
}
function iu(e) {
  let t;
  return {
    c() {
      t = k("div"), t.textContent = "No concepts found for this scope.", g(t, "class", "px-6 py-8 text-center text-gray-500 dark:text-gray-400");
    },
    m(n, l) {
      C(n, t, l);
    },
    p: Z,
    i: Z,
    o: Z,
    d(n) {
      n && v(t);
    }
  };
}
function ou(e) {
  let t, n, l = (
    /*paginatedConcepts*/
    e[18]
  ), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = Di(Mi(e, l, o));
  const i = (o) => N(r[o], 1, 1, () => {
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
      C(o, t, a), n = !0;
    },
    p(o, a) {
      if (a[0] & /*queryByName, onInsert, scopeName, paginatedConcepts, totalCount, $theme, selectedConceptIDs, toggleSelectConcept*/
      73666691 | a[1] & /*hovering*/
      512) {
        l = /*paginatedConcepts*/
        o[18];
        let f;
        for (f = 0; f < l.length; f += 1) {
          const s = Mi(o, l, f);
          r[f] ? (r[f].p(s, a), p(r[f], 1)) : (r[f] = Di(s), r[f].c(), p(r[f], 1), r[f].m(t.parentNode, t));
        }
        for (re(), f = l.length; f < r.length; f += 1)
          i(f);
        ie();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < l.length; a += 1)
          p(r[a]);
        n = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1)
        N(r[a]);
      n = !1;
    },
    d(o) {
      Ge(r, o), o && v(t);
    }
  };
}
function qi(e) {
  let t, n = (
    /*concept*/
    e[37].id + ""
  ), l;
  return {
    c() {
      t = k("div"), l = G(n), g(t, "class", "text-xs font-mono text-gray-500 dark:text-gray-400 truncate");
    },
    m(r, i) {
      C(r, t, i), h(t, l);
    },
    p(r, i) {
      i[0] & /*paginatedConcepts*/
      262144 && n !== (n = /*concept*/
      r[37].id + "") && oe(l, n);
    },
    d(r) {
      r && v(t);
    }
  };
}
function Ei(e) {
  let t, n;
  return t = new Kr({
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
      U(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
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
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function au(e) {
  let t, n, l, r, i, o, a = (
    /*concept*/
    e[37].name + ""
  ), f, s, u, c, d, m, b = (
    /*concept*/
    e[37].type + ""
  ), _, y, M, w, S, z, E, D = (
    /*concept*/
    e[37].count.toLocaleString() + ""
  ), I, j, A, q, R, T, ee, H;
  function Q() {
    return (
      /*change_handler_1*/
      e[33](
        /*concept*/
        e[37]
      )
    );
  }
  let B = (
    /*concept*/
    e[37].id != /*concept*/
    e[37].name && qi(e)
  ), Y = (
    /*totalCount*/
    e[21] > 0 && Ei(e)
  );
  q = new ce({ props: { icon: qt, class: "inline" } });
  function ye() {
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
      t = k("div"), n = k("input"), r = P(), i = k("div"), o = k("div"), f = G(a), u = P(), B && B.c(), c = P(), d = k("div"), m = k("span"), _ = G(b), M = P(), w = k("div"), S = k("div"), Y && Y.c(), z = P(), E = k("div"), I = G(D), j = P(), A = k("button"), U(q.$$.fragment), R = P(), g(n, "type", "checkbox"), g(n, "class", "form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"), n.checked = l = /*selectedConceptIDs*/
      e[12].has(
        /*concept*/
        e[37].id
      ), g(n, "aria-label", "Select concept"), g(t, "class", "flex items-center justify-center"), g(o, "class", "text-gray-900 dark:text-gray-100 font-medium truncate"), g(o, "title", s = /*concept*/
      e[37].name), g(i, "class", "space-y-1 truncate"), g(m, "class", y = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " + /*concept*/
      (e[37].type === "event" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : (
        /*concept*/
        e[37].type === "interval" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
      ))), g(d, "class", "text-gray-600 dark:text-gray-400"), g(E, "class", "text-gray-600 dark:text-gray-200 font-mono text-sm truncate"), g(S, "class", "space-y-2 flex-auto shrink min-w-0"), g(A, "class", "px-2 py-1.5 text-sm text-center font-semibold rounded transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white whitespace-nowrap"), g(A, "title", "Add this concept to your query"), fe(A, "invisible", !/*hovering*/
      e[40]), g(w, "class", "flex gap-2 items-center justify-between min-w-0");
    },
    m(te, ue) {
      C(te, t, ue), h(t, n), C(te, r, ue), C(te, i, ue), h(i, o), h(o, f), h(i, u), B && B.m(i, null), C(te, c, ue), C(te, d, ue), h(d, m), h(m, _), C(te, M, ue), C(te, w, ue), h(w, S), Y && Y.m(S, null), h(S, z), h(S, E), h(E, I), h(w, j), h(w, A), V(q, A, null), C(te, R, ue), T = !0, ee || (H = [
        x(n, "change", Q),
        x(A, "click", ye)
      ], ee = !0);
    },
    p(te, ue) {
      e = te, (!T || ue[0] & /*selectedConceptIDs, paginatedConcepts*/
      266240 && l !== (l = /*selectedConceptIDs*/
      e[12].has(
        /*concept*/
        e[37].id
      ))) && (n.checked = l), (!T || ue[0] & /*paginatedConcepts*/
      262144) && a !== (a = /*concept*/
      e[37].name + "") && oe(f, a), (!T || ue[0] & /*paginatedConcepts*/
      262144 && s !== (s = /*concept*/
      e[37].name)) && g(o, "title", s), /*concept*/
      e[37].id != /*concept*/
      e[37].name ? B ? B.p(e, ue) : (B = qi(e), B.c(), B.m(i, null)) : B && (B.d(1), B = null), (!T || ue[0] & /*paginatedConcepts*/
      262144) && b !== (b = /*concept*/
      e[37].type + "") && oe(_, b), (!T || ue[0] & /*paginatedConcepts*/
      262144 && y !== (y = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " + /*concept*/
      (e[37].type === "event" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : (
        /*concept*/
        e[37].type === "interval" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
      )))) && g(m, "class", y), /*totalCount*/
      e[21] > 0 ? Y ? (Y.p(e, ue), ue[0] & /*totalCount*/
      2097152 && p(Y, 1)) : (Y = Ei(e), Y.c(), p(Y, 1), Y.m(S, z)) : Y && (re(), N(Y, 1, 1, () => {
        Y = null;
      }), ie()), (!T || ue[0] & /*paginatedConcepts*/
      262144) && D !== (D = /*concept*/
      e[37].count.toLocaleString() + "") && oe(I, D), (!T || ue[1] & /*hovering*/
      512) && fe(A, "invisible", !/*hovering*/
      e[40]);
    },
    i(te) {
      T || (p(Y), p(q.$$.fragment, te), T = !0);
    },
    o(te) {
      N(Y), N(q.$$.fragment, te), T = !1;
    },
    d(te) {
      te && v(t), te && v(r), te && v(i), B && B.d(), te && v(c), te && v(d), te && v(M), te && v(w), Y && Y.d(), W(q), te && v(R), ee = !1, we(H);
    }
  };
}
function Di(e) {
  let t, n;
  return t = new or({
    props: {
      class: "grid gap-4 px-4 py-4 border-b border-gray-100 dark:border-gray-800 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 items-center",
      style: "grid-template-columns: 2rem 2fr 1fr minmax(0, 2fr);",
      $$slots: {
        default: [
          au,
          ({ hovering: l }) => ({ 40: l }),
          ({ hovering: l }) => [0, l ? 512 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      U(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r[0] & /*queryByName, onInsert, scopeName, paginatedConcepts, totalCount, $theme, selectedConceptIDs*/
      6557827 | r[1] & /*$$scope, hovering*/
      8704 && (i.$$scope = { dirty: r, ctx: l }), t.$set(i);
    },
    i(l) {
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function Ai(e) {
  let t = (
    /*selectedConceptIDs*/
    e[12].size + ""
  ), n, l, r = (
    /*selectedConceptIDs*/
    e[12].size != 1 ? "s" : ""
  ), i;
  return {
    c() {
      n = G(t), l = G(" Concept"), i = G(r);
    },
    m(o, a) {
      C(o, n, a), C(o, l, a), C(o, i, a);
    },
    p(o, a) {
      a[0] & /*selectedConceptIDs*/
      4096 && t !== (t = /*selectedConceptIDs*/
      o[12].size + "") && oe(n, t), a[0] & /*selectedConceptIDs*/
      4096 && r !== (r = /*selectedConceptIDs*/
      o[12].size != 1 ? "s" : "") && oe(i, r);
    },
    d(o) {
      o && v(n), o && v(l), o && v(i);
    }
  };
}
function fu(e) {
  let t;
  return {
    c() {
      t = G("By ID");
    },
    m(n, l) {
      C(n, t, l);
    },
    d(n) {
      n && v(t);
    }
  };
}
function su(e) {
  let t;
  return {
    c() {
      t = G("By Name");
    },
    m(n, l) {
      C(n, t, l);
    },
    d(n) {
      n && v(t);
    }
  };
}
function Ti(e) {
  let t, n, l, r, i, o, a, f, s, u = (
    /*currentPage*/
    (e[11] - 1) * st + 1 + ""
  ), c, d, m = Math.min(
    /*currentPage*/
    e[11] * st,
    /*concepts*/
    e[9].length
  ) + "", b, _, y = (
    /*concepts*/
    e[9].length + ""
  ), M, w, S, z, E, D, I, j;
  return i = new ce({ props: { icon: Pf } }), z = new ce({ props: { icon: Et } }), {
    c() {
      t = k("div"), n = P(), l = k("div"), r = k("button"), U(i.$$.fragment), a = P(), f = k("span"), s = G("Concepts "), c = G(u), d = G(" - "), b = G(m), _ = G(" of "), M = G(y), w = P(), S = k("button"), U(z.$$.fragment), g(t, "class", "flex-auto"), g(r, "class", "p-2 hover:opacity-50 disabled:opacity-30 disabled:cursor-not-allowed"), r.disabled = o = /*currentPage*/
      e[11] === 1, g(r, "aria-label", "Previous Page"), g(f, "class", "text-sm"), g(S, "class", "p-2 hover:opacity-50 disabled:opacity-30 disabled:cursor-not-allowed"), S.disabled = E = /*currentPage*/
      e[11] === /*totalPages*/
      e[14], g(S, "aria-label", "Next Page"), g(l, "class", "shrink-0 flex justify-end items-center text-gray-700 dark:text-gray-200");
    },
    m(A, q) {
      C(A, t, q), C(A, n, q), C(A, l, q), h(l, r), V(i, r, null), h(l, a), h(l, f), h(f, s), h(f, c), h(f, d), h(f, b), h(f, _), h(f, M), h(l, w), h(l, S), V(z, S, null), D = !0, I || (j = [
        x(
          r,
          "click",
          /*prevPage*/
          e[23]
        ),
        x(
          S,
          "click",
          /*nextPage*/
          e[24]
        )
      ], I = !0);
    },
    p(A, q) {
      (!D || q[0] & /*currentPage*/
      2048 && o !== (o = /*currentPage*/
      A[11] === 1)) && (r.disabled = o), (!D || q[0] & /*currentPage*/
      2048) && u !== (u = /*currentPage*/
      (A[11] - 1) * st + 1 + "") && oe(c, u), (!D || q[0] & /*currentPage, concepts*/
      2560) && m !== (m = Math.min(
        /*currentPage*/
        A[11] * st,
        /*concepts*/
        A[9].length
      ) + "") && oe(b, m), (!D || q[0] & /*concepts*/
      512) && y !== (y = /*concepts*/
      A[9].length + "") && oe(M, y), (!D || q[0] & /*currentPage, totalPages*/
      18432 && E !== (E = /*currentPage*/
      A[11] === /*totalPages*/
      A[14])) && (S.disabled = E);
    },
    i(A) {
      D || (p(i.$$.fragment, A), p(z.$$.fragment, A), D = !0);
    },
    o(A) {
      N(i.$$.fragment, A), N(z.$$.fragment, A), D = !1;
    },
    d(A) {
      A && v(t), A && v(n), A && v(l), W(i), W(z), I = !1, we(j);
    }
  };
}
function Pi(e) {
  let t, n, l, r, i, o;
  return {
    c() {
      t = k("div"), n = k("div"), l = k("div"), r = P(), i = k("span"), o = G(
        /*loadingMessage*/
        e[5]
      ), g(l, "class", "w-2 h-2 bg-blue-500 rounded-full animate-pulse"), g(i, "class", "text-sm text-blue-700 dark:text-blue-300 font-medium"), g(n, "class", "flex items-center space-x-2"), g(t, "class", "mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg");
    },
    m(a, f) {
      C(a, t, f), h(t, n), h(n, l), h(n, r), h(n, i), h(i, o);
    },
    p(a, f) {
      f[0] & /*loadingMessage*/
      32 && oe(
        o,
        /*loadingMessage*/
        a[5]
      );
    },
    d(a) {
      a && v(t);
    }
  };
}
function uu(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m = (
    /*scopes*/
    e[2]
  ), b = [];
  for (let w = 0; w < m.length; w += 1)
    b[w] = zi(Li(e, m, w));
  const _ = [nu, tu, eu], y = [];
  function M(w, S) {
    return (
      /*isLoading*/
      w[4] ? 0 : (
        /*isAnalyzed*/
        w[16] ? 2 : 1
      )
    );
  }
  return f = M(e), s = y[f] = _[f](e), {
    c() {
      t = k("div"), n = k("div"), l = k("select");
      for (let w = 0; w < b.length; w += 1)
        b[w].c();
      r = P(), i = k("input"), o = P(), a = k("div"), s.c(), g(l, "class", "text-2xl font-bold text-gray-900 dark:text-gray-100 flex-auto flat-select"), g(l, "aria-label", "Select scope"), le(l, "min-width", "0"), le(l, "max-width", "100%"), /*scopeName*/
      e[0] === void 0 && Qn(() => (
        /*select_change_handler*/
        e[28].call(l)
      )), g(i, "type", "search"), g(i, "class", "shrink px-3 py-1.5 rounded overflow-hidden focus:bg-white bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline focus:outline-blue-500 w-64 transition-colors duration-200"), g(i, "placeholder", "Filter concepts..."), g(i, "autocomplete", "off"), g(n, "class", "pb-6 shrink-0 flex items-center justify-between gap-2"), g(a, "class", "w-full flex-auto flex flex-col h-0"), g(t, "class", "w-full h-full flex flex-col p-4");
    },
    m(w, S) {
      C(w, t, S), h(t, n), h(n, l);
      for (let z = 0; z < b.length; z += 1)
        b[z] && b[z].m(l, null);
      Zr(
        l,
        /*scopeName*/
        e[0],
        !0
      ), h(n, r), h(n, i), xe(
        i,
        /*search*/
        e[10]
      ), h(t, o), h(t, a), y[f].m(a, null), u = !0, c || (d = [
        x(
          l,
          "change",
          /*select_change_handler*/
          e[28]
        ),
        x(
          l,
          "change",
          /*change_handler*/
          e[29]
        ),
        x(
          i,
          "input",
          /*input_input_handler*/
          e[30]
        )
      ], c = !0);
    },
    p(w, S) {
      if (S[0] & /*scopes*/
      4) {
        m = /*scopes*/
        w[2];
        let E;
        for (E = 0; E < m.length; E += 1) {
          const D = Li(w, m, E);
          b[E] ? b[E].p(D, S) : (b[E] = zi(D), b[E].c(), b[E].m(l, null));
        }
        for (; E < b.length; E += 1)
          b[E].d(1);
        b.length = m.length;
      }
      S[0] & /*scopeName, scopes*/
      5 && Zr(
        l,
        /*scopeName*/
        w[0]
      ), S[0] & /*search*/
      1024 && i.value !== /*search*/
      w[10] && xe(
        i,
        /*search*/
        w[10]
      );
      let z = f;
      f = M(w), f === z ? y[f].p(w, S) : (re(), N(y[z], 1, 1, () => {
        y[z] = null;
      }), ie(), s = y[f], s ? s.p(w, S) : (s = y[f] = _[f](w), s.c()), p(s, 1), s.m(a, null));
    },
    i(w) {
      u || (p(s), u = !0);
    },
    o(w) {
      N(s), u = !1;
    },
    d(w) {
      w && v(t), Ge(b, w), y[f].d(), c = !1, we(d);
    }
  };
}
const st = 50;
function cu(e, t, n) {
  let l, r, i, o, a, f, s, u, c, d, m;
  F(e, Ul, (X) => n(22, m = X));
  let { scopes: b = [] } = t, { onScopeSelect: _ = () => {
  } } = t, { scopeName: y = "" } = t, { isLoading: M = !1 } = t, { loadingMessage: w = "" } = t, { onAnalyze: S = () => {
  } } = t, { onInsert: z = () => {
  } } = t, { scopeConcepts: E = {} } = t, { queryByName: D = !1 } = t, I = [], j = "", A = 1;
  function q() {
    A > 1 && n(11, A -= 1);
  }
  function R() {
    A < s && n(11, A += 1);
  }
  let T = /* @__PURE__ */ new Set();
  function ee() {
    c ? (a.forEach((X) => T.delete(X.id)), n(12, T = new Set(T))) : (a.forEach((X) => T.add(X.id)), n(12, T = new Set(T)));
  }
  function H(X) {
    T.has(X) ? T.delete(X) : T.add(X), n(12, T = new Set(T));
  }
  function Q() {
    y = uf(this), n(0, y), n(2, b), n(3, _), n(2, b);
  }
  const B = (X) => _(X.target.value);
  function Y() {
    j = this.value, n(10, j);
  }
  const ye = () => S(), te = () => S(), ue = (X) => H(X.id), be = (X) => {
    D ? z(y, `name = '${X.name}'`) : typeof X.id == "string" && Number.isNaN(parseFloat(X.id)) ? z(y, `id = '${X.id}'`) : z(y, `id = ${X.id}`);
  }, se = () => {
    if (D) {
      let X = I.filter((ae) => T.has(ae.id)).map((ae) => "'" + ae.name + "'");
      z(y, `name in (${X.join(", ")})`);
    } else {
      let X;
      I.some((ae) => typeof ae.id == "string" && Number.isNaN(parseFloat(ae.id))) ? X = I.filter((ae) => T.has(ae.id)).map((ae) => `'${ae.id}'`) : X = I.filter((ae) => T.has(ae.id)).map((ae) => `${ae.id}`), z(y, `id in (${X.join(", ")})`);
    }
  }, ge = () => n(1, D = !D);
  return e.$$set = (X) => {
    "scopes" in X && n(2, b = X.scopes), "onScopeSelect" in X && n(3, _ = X.onScopeSelect), "scopeName" in X && n(0, y = X.scopeName), "isLoading" in X && n(4, M = X.isLoading), "loadingMessage" in X && n(5, w = X.loadingMessage), "onAnalyze" in X && n(6, S = X.onAnalyze), "onInsert" in X && n(7, z = X.onInsert), "scopeConcepts" in X && n(8, E = X.scopeConcepts), "queryByName" in X && n(1, D = X.queryByName);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*scopes, scopeName, onScopeSelect*/
    13 && b.length > 0 && !y && (n(0, y = b[0]), _(y)), e.$$.dirty[0] & /*scopeName, scopeConcepts*/
    257 && n(16, l = y && E && E.scope_name === y), e.$$.dirty[0] & /*isAnalyzed, scopeConcepts*/
    65792 && n(9, I = l && E.concepts ? E.concepts : []), e.$$.dirty[0] & /*concepts*/
    512 && n(21, r = I.reduce((X, ae) => X + ae.count, 0)), e.$$.dirty[0] & /*concepts*/
    512 && n(20, i = I.some((X) => X.name.startsWith("Concept "))), e.$$.dirty[0] & /*scopeConcepts*/
    256 && n(19, o = E && E.error), e.$$.dirty[0] & /*search, concepts*/
    1536 && n(27, a = j.trim() ? I.filter((X) => (X.name ?? "").toLocaleLowerCase().includes(j.trim().toLocaleLowerCase()) || `${X.id ?? ""}`.toLocaleLowerCase().includes(j.trim().toLocaleLowerCase())) : I), e.$$.dirty[0] & /*filteredConcepts*/
    134217728 && n(15, f = [...a].sort((X, ae) => ae.count - X.count)), e.$$.dirty[0] & /*sortedConcepts*/
    32768 && n(14, s = Math.max(1, Math.ceil(f.length / st))), e.$$.dirty[0] & /*currentPage, totalPages*/
    18432 && A > s && n(11, A = 1), e.$$.dirty[0] & /*sortedConcepts, currentPage*/
    34816 && n(18, u = f.slice((A - 1) * st, A * st)), e.$$.dirty[0] & /*filteredConcepts, selectedConceptIDs*/
    134221824 && n(13, c = a.length > 0 && a.every((X) => T.has(X.id))), e.$$.dirty[0] & /*filteredConcepts, selectedConceptIDs, allFilteredSelected*/
    134230016 && n(17, d = a.some((X) => T.has(X.id)) && !c);
  }, [
    y,
    D,
    b,
    _,
    M,
    w,
    S,
    z,
    E,
    I,
    j,
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
    q,
    R,
    ee,
    H,
    a,
    Q,
    B,
    Y,
    ye,
    te,
    ue,
    be,
    se,
    ge
  ];
}
class du extends Ce {
  constructor(t) {
    super(), ve(
      this,
      t,
      cu,
      uu,
      pe,
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
function mu(e) {
  return e === 0 ? !0 : e;
}
function vt(e) {
  return mu(e) ? Array.isArray(e) ? (t) => e.map((n) => typeof n != "function" ? t[n] : n(t)) : typeof e != "function" ? (t) => t[e] : e : null;
}
function gu(e) {
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
function qr(e, t = {}) {
  return gu(Object.entries(e).filter(([n, l]) => l !== void 0 && t[n] === void 0));
}
function bu(e, t = 300) {
  let n;
  return (...l) => {
    clearTimeout(n), n = setTimeout(() => {
      e.apply(this, l);
    }, t);
  };
}
function _u(e, t, { sort: n = !1 } = {}) {
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
        const _ = c.length;
        for (f = 0; f < _; f += 1)
          d.add(c[f]);
      } else
        d.add(c);
    const b = Array.from(d);
    l[s] = n === !0 ? b.sort() : b;
  }
  return l;
}
function hu(e, t) {
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
        const b = d.length;
        for (a = 0; a < b; a += 1)
          d[a] !== !1 && d[a] !== void 0 && d[a] !== null && Number.isNaN(d[a]) === !1 && ((s === null || d[a] < s) && (s = d[a]), (u === null || d[a] > u) && (u = d[a]));
      } else
        d !== !1 && d !== void 0 && d !== null && Number.isNaN(d) === !1 && ((s === null || d < s) && (s = d), (u === null || d > u) && (u = d));
    n[f] = [s, u];
  }
  return n;
}
function En(e, t) {
  return e.length !== t.length ? !1 : e.every((n) => t.includes(n));
}
function Da(e) {
  return !!(typeof e.bandwidth == "function" || En(Object.keys(e), ["domain", "range", "unknown", "copy"]));
}
function yu(e, t, n) {
  const l = Object.keys(n).reduce((i, o) => {
    const a = Da(n[o]) === !0 ? "ordinal" : "other";
    return i[a] || (i[a] = {}), i[a][o] = t[o], i;
  }, { ordinal: !1, other: !1 });
  let r = {};
  return l.ordinal && (r = _u(e, l.ordinal)), l.other && (r = { ...r, ...hu(e, l.other) }), r;
}
function ku(e = [], t) {
  return Array.isArray(t) === !0 ? t.map((n, l) => n === null ? e[l] : n) : e;
}
function Hl(e) {
  return function([n, l]) {
    return typeof l == "function" && (l = l(n[e])), n ? ku(n[e], l) : l;
  };
}
function Wl(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function pu(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Aa(e) {
  let t, n, l;
  e.length !== 2 ? (t = Wl, n = (a, f) => Wl(e(a), f), l = (a, f) => e(a) - f) : (t = e === Wl || e === pu ? e : wu, n = e, l = e);
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
function wu() {
  return 0;
}
function vu(e) {
  return e === null ? NaN : +e;
}
const Cu = Aa(Wl), Su = Cu.right;
Aa(vu).center;
const Nu = Su;
class Qi extends Map {
  constructor(t, n = zu) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [l, r] of t)
        this.set(l, r);
  }
  get(t) {
    return super.get(ji(this, t));
  }
  has(t) {
    return super.has(ji(this, t));
  }
  set(t, n) {
    return super.set(Mu(this, t), n);
  }
  delete(t) {
    return super.delete(Lu(this, t));
  }
}
function ji({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) ? e.get(l) : n;
}
function Mu({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) ? e.get(l) : (e.set(l, n), n);
}
function Lu({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) && (n = e.get(l), e.delete(l)), n;
}
function zu(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Ru = Math.sqrt(50), qu = Math.sqrt(10), Eu = Math.sqrt(2);
function tr(e, t, n) {
  const l = (t - e) / Math.max(0, n), r = Math.floor(Math.log10(l)), i = l / Math.pow(10, r), o = i >= Ru ? 10 : i >= qu ? 5 : i >= Eu ? 2 : 1;
  let a, f, s;
  return r < 0 ? (s = Math.pow(10, -r) / o, a = Math.round(e * s), f = Math.round(t * s), a / s < e && ++a, f / s > t && --f, s = -s) : (s = Math.pow(10, r) * o, a = Math.round(e / s), f = Math.round(t / s), a * s < e && ++a, f * s > t && --f), f < a && 0.5 <= n && n < 2 ? tr(e, t, n * 2) : [a, f, s];
}
function Du(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0))
    return [];
  if (e === t)
    return [e];
  const l = t < e, [r, i, o] = l ? tr(t, e, n) : tr(e, t, n);
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
function Qr(e, t, n) {
  return t = +t, e = +e, n = +n, tr(e, t, n)[2];
}
function Au(e, t, n) {
  t = +t, e = +e, n = +n;
  const l = t < e, r = l ? Qr(t, e, n) : Qr(e, t, n);
  return (l ? -1 : 1) * (r < 0 ? 1 / -r : r);
}
function ut(e, t, n) {
  e = +e, t = +t, n = (r = arguments.length) < 2 ? (t = e, e = 0, 1) : r < 3 ? 1 : +n;
  for (var l = -1, r = Math.max(0, Math.ceil((t - e) / n)) | 0, i = new Array(r); ++l < r; )
    i[l] = e + l * n;
  return i;
}
function ar(e, t) {
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
const Oi = Symbol("implicit");
function fr() {
  var e = new Qi(), t = [], n = [], l = Oi;
  function r(i) {
    let o = e.get(i);
    if (o === void 0) {
      if (l !== Oi)
        return l;
      e.set(i, o = t.push(i) - 1);
    }
    return n[o % n.length];
  }
  return r.domain = function(i) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new Qi();
    for (const o of i)
      e.has(o) || e.set(o, t.push(o) - 1);
    return r;
  }, r.range = function(i) {
    return arguments.length ? (n = Array.from(i), r) : n.slice();
  }, r.unknown = function(i) {
    return arguments.length ? (l = i, r) : l;
  }, r.copy = function() {
    return fr(t, n).unknown(l);
  }, ar.apply(r, arguments), r;
}
function Ur() {
  var e = fr().unknown(void 0), t = e.domain, n = e.range, l = 0, r = 1, i, o, a = !1, f = 0, s = 0, u = 0.5;
  delete e.unknown;
  function c() {
    var d = t().length, m = r < l, b = m ? r : l, _ = m ? l : r;
    i = (_ - b) / Math.max(1, d - f + s * 2), a && (i = Math.floor(i)), b += (_ - b - i * (d - f)) * u, o = i * (1 - f), a && (b = Math.round(b), o = Math.round(o));
    var y = ut(d).map(function(M) {
      return b + i * M;
    });
    return n(m ? y.reverse() : y);
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
    return Ur(t(), [l, r]).round(a).paddingInner(f).paddingOuter(s).align(u);
  }, ar.apply(c(), arguments);
}
function Tu(e) {
  return function() {
    return e;
  };
}
function Pu(e) {
  return +e;
}
var Ii = [0, 1];
function rt(e) {
  return e;
}
function jr(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Tu(isNaN(t) ? NaN : 0.5);
}
function Qu(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(l) {
    return Math.max(e, Math.min(t, l));
  };
}
function ju(e, t, n) {
  var l = e[0], r = e[1], i = t[0], o = t[1];
  return r < l ? (l = jr(r, l), i = n(o, i)) : (l = jr(l, r), i = n(i, o)), function(a) {
    return i(l(a));
  };
}
function Ou(e, t, n) {
  var l = Math.min(e.length, t.length) - 1, r = new Array(l), i = new Array(l), o = -1;
  for (e[l] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < l; )
    r[o] = jr(e[o], e[o + 1]), i[o] = n(t[o], t[o + 1]);
  return function(a) {
    var f = Nu(e, a, 1, l) - 1;
    return i[f](r[f](a));
  };
}
function Ta(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Pa() {
  var e = Ii, t = Ii, n = Vr, l, r, i, o = rt, a, f, s;
  function u() {
    var d = Math.min(e.length, t.length);
    return o !== rt && (o = Qu(e[0], e[d - 1])), a = d > 2 ? Ou : ju, f = s = null, c;
  }
  function c(d) {
    return d == null || isNaN(d = +d) ? i : (f || (f = a(e.map(l), t, n)))(l(o(d)));
  }
  return c.invert = function(d) {
    return o(r((s || (s = a(t, e.map(l), er)))(d)));
  }, c.domain = function(d) {
    return arguments.length ? (e = Array.from(d, Pu), u()) : e.slice();
  }, c.range = function(d) {
    return arguments.length ? (t = Array.from(d), u()) : t.slice();
  }, c.rangeRound = function(d) {
    return t = Array.from(d), n = Is, u();
  }, c.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : rt, u()) : o !== rt;
  }, c.interpolate = function(d) {
    return arguments.length ? (n = d, u()) : n;
  }, c.unknown = function(d) {
    return arguments.length ? (i = d, c) : i;
  }, function(d, m) {
    return l = d, r = m, u();
  };
}
function Iu() {
  return Pa()(rt, rt);
}
function Hu(e, t, n, l) {
  var r = Au(e, t, n), i;
  switch (l = Yl(l ?? ",f"), l.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return l.precision == null && !isNaN(i = ds(r, o)) && (l.precision = i), La(l, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      l.precision == null && !isNaN(i = ms(r, Math.max(Math.abs(e), Math.abs(t)))) && (l.precision = i - (l.type === "e"));
      break;
    }
    case "f":
    case "%": {
      l.precision == null && !isNaN(i = za(r)) && (l.precision = i - (l.type === "%") * 2);
      break;
    }
  }
  return Le(l);
}
function Qa(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var l = t();
    return Du(l[0], l[l.length - 1], n ?? 10);
  }, e.tickFormat = function(n, l) {
    var r = t();
    return Hu(r[0], r[r.length - 1], n ?? 10, l);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var l = t(), r = 0, i = l.length - 1, o = l[r], a = l[i], f, s, u = 10;
    for (a < o && (s = o, o = a, a = s, s = r, r = i, i = s); u-- > 0; ) {
      if (s = Qr(o, a, n), s === f)
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
function Ct() {
  var e = Iu();
  return e.copy = function() {
    return Ta(e, Ct());
  }, ar.apply(e, arguments), Qa(e);
}
function Hi(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function Bu(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Fu(e) {
  return e < 0 ? -e * e : e * e;
}
function Gu(e) {
  var t = e(rt, rt), n = 1;
  function l() {
    return n === 1 ? e(rt, rt) : n === 0.5 ? e(Bu, Fu) : e(Hi(n), Hi(1 / n));
  }
  return t.exponent = function(r) {
    return arguments.length ? (n = +r, l()) : n;
  }, Qa(t);
}
function ja() {
  var e = Gu(Pa());
  return e.copy = function() {
    return Ta(e, ja()).exponent(e.exponent());
  }, ar.apply(e, arguments), e;
}
function xu() {
  return ja.apply(null, arguments).exponent(0.5);
}
const Dn = {
  x: Ct,
  y: Ct,
  z: Ct,
  r: xu
};
function Vu(e) {
  return e.constant ? "symlog" : e.base ? "log" : e.exponent ? e.exponent() === 0.5 ? "sqrt" : "pow" : "other";
}
function Bi(e) {
  return e;
}
function Wu(e) {
  return (t) => Math.log(e * t);
}
function Ku(e) {
  return (t) => e * Math.exp(t);
}
function Uu(e) {
  return (t) => Math.sign(t) * Math.log1p(Math.abs(t / e));
}
function Xu(e) {
  return (t) => Math.sign(t) * Math.expm1(Math.abs(t)) * e;
}
function Bl(e) {
  return function(n) {
    return n < 0 ? -Math.pow(-n, e) : Math.pow(n, e);
  };
}
function Yu(e) {
  const t = Vu(e);
  if (t === "log") {
    const n = Math.sign(e.domain()[0]);
    return { lift: Wu(n), ground: Ku(n), scaleType: t };
  }
  return t === "pow" ? { lift: Bl(1), ground: Bl(1 / 1), scaleType: t } : t === "sqrt" ? { lift: Bl(0.5), ground: Bl(1 / 0.5), scaleType: t } : t === "symlog" ? { lift: Uu(1), ground: Xu(1), scaleType: t } : { lift: Bi, ground: Bi, scaleType: t };
}
function nr(e) {
  return e.replace(/^\w/, (t) => t.toUpperCase());
}
function Qe(e, t = "") {
  return `scale${nr(t)}${nr(e)}`;
}
function Oa(e) {
  if (typeof e.bandwidth == "function")
    return typeof e.paddingInner == "function" ? Qe("band") : Qe("point");
  if (En(Object.keys(e), ["domain", "range", "unknown", "copy"]))
    return Qe("ordinal");
  let t = "";
  if (e.interpolator && (e.domain().length === 3 ? t = "diverging" : t = "sequential"), e.quantiles)
    return Qe("quantile", t);
  if (e.thresholds)
    return Qe("quantize", t);
  if (e.constant)
    return Qe("symlog", t);
  if (e.base)
    return Qe("log", t);
  if (e.exponent)
    return e.exponent() === 0.5 ? Qe("sqrt", t) : Qe("pow", t);
  if (En(Object.keys(e), ["domain", "range", "invertExtent", "unknown", "copy"]))
    return Qe("threshold");
  if (En(Object.keys(e), ["invert", "range", "domain", "unknown", "copy", "ticks", "tickFormat", "nice"]))
    return Qe("identity");
  if (En(Object.keys(e), [
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
    return Qe("radial");
  if (t)
    return Qe(t);
  if (e.domain()[0] instanceof Date) {
    const n = /* @__PURE__ */ new Date();
    let l;
    return n.getDay = () => l = "time", n.getUTCDay = () => l = "utc", e.tickFormat(0, "%a")(n), Qe(l);
  }
  return Qe("linear");
}
const Ju = ["scaleThreshold", "scaleQuantile", "scaleQuantize", "scaleSequentialQuantile"];
function Zu(e, t) {
  if (typeof e.range != "function")
    throw console.log(e), new Error("Scale method `range` must be a function");
  if (typeof e.domain != "function")
    throw new Error("Scale method `domain` must be a function");
  if (!Array.isArray(t) || Ju.includes(Oa(e)) || Da(e) === !0)
    return e.domain();
  const { lift: n, ground: l } = Yu(e), r = e.domain()[0], i = Object.prototype.toString.call(r) === "[object Date]", [o, a] = e.domain().map((m) => n(i ? m.getTime() : m)), [f, s] = e.range(), u = t[0] || 0, c = t[1] || 0, d = (a - o) / (Math.abs(s - f) - u - c);
  return [o - u * d, c * d + a].map((m) => l(i ? new Date(m) : m));
}
function $u(e, t, n, l, r) {
  let i, o;
  return r === !0 ? (i = 0, o = 100) : (i = e === "r" ? 1 : 0, o = e === "y" ? n : e === "r" ? 25 : t), l === !0 ? [o, i] : [i, o];
}
function ec(e, t, n, l, r, i) {
  return r ? typeof r == "function" ? r({ width: t, height: n }) : r : $u(e, t, n, l, i);
}
function Fl(e) {
  return function([n, l, r, i, o, a, f, s, u, c]) {
    if (l === null)
      return null;
    const d = ec(e, f, s, a, u, c), m = n === Dn[e] ? n() : n.copy();
    return m.domain(r), (!m.interpolator || typeof m.interpolator == "function" && m.interpolator().name.startsWith("identity")) && m.range(d), i && m.domain(Zu(m, i)), (o === !0 || typeof o == "number") && (typeof m.nice == "function" ? m.nice(typeof o == "number" ? o : void 0) : console.error(`[Layer Cake] You set \`${e}Nice: true\` but the ${e}Scale does not have a \`.nice\` method. Ignoring...`)), m;
  };
}
function Gl([e, t]) {
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
const tt = "    ";
function tc(e) {
  const { r: t, g: n, b: l, opacity: r } = Zl(e);
  return [t, n, l].every((i) => i >= 0 && i <= 255) ? { r: t, g: n, b: l, o: r } : !1;
}
function nc({ r: e, g: t, b: n }) {
  return (0.2126 * e + 0.7152 * t + 0.0722 * n) / 255 > 0.6 ? "black" : "white";
}
function lc(e) {
  console.log("/********* LayerCake Debug ************/"), console.log("Bounding box:"), rc(e.boundingBox), console.log(`Scales:
`), Object.keys(e.activeGetters).forEach((t) => {
    ic(t, e[`${t}Scale`], e[t]);
  }), console.log(`/************ End LayerCake Debug ***************/
`);
}
function rc(e) {
  Object.entries(e).forEach(([t, n]) => {
    console.log(`${tt}${t}:`, n);
  });
}
function ic(e, t, n) {
  const l = Oa(t);
  console.log(`${tt}${e}:`), console.log(`${tt}${tt}Accessor: "${n.toString()}"`), console.log(`${tt}${tt}Type: ${l}`), Fi(t, "domain"), Fi(t, "range", " ");
}
function Fi(e, t, n = "") {
  const l = e[t](), r = ac(l);
  r ? oc(r, t, l) : console.log(`${tt}${tt}${nr(t)}:${n}`, l);
}
function oc(e, t, n) {
  console.log(
    `${tt}${tt}${nr(t)}:    %cArray%c(${n.length}) ` + e[0] + "%c ]",
    "color: #1377e4",
    "color: #737373",
    "color: #1478e4",
    ...e[1],
    "color: #1478e4"
  );
}
function ac(e) {
  const t = [], n = e.map((l, r) => {
    const i = tc(l);
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
      (l) => `background-color: rgba(${l.r}, ${l.g}, ${l.b}, ${l.o}); color:${nc(l)};`
    )
  ] : null;
}
const fc = (e) => ({
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
}), Gi = (e) => ({
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
function xi(e) {
  let t, n, l;
  const r = (
    /*#slots*/
    e[153].default
  ), i = Ue(
    r,
    e,
    /*$$scope*/
    e[152],
    Gi
  );
  return {
    c() {
      t = k("div"), i && i.c(), g(t, "class", "layercake-container svelte-vhzpsp"), Qn(() => (
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
      C(o, t, a), i && i.m(t, null), e[154](t), n = df(
        t,
        /*div_elementresize_handler*/
        e[155].bind(t)
      ), l = !0;
    },
    p(o, a) {
      i && i.p && (!l || a[0] & /*element, $activeGetters_d, $_x, $_y, $_z, $_r, $_custom, $_data, $_xNice, $_yNice, $_zNice, $_rNice, $_xReverse, $_yReverse, $_zReverse, $_rReverse, $_xPadding, $_yPadding, $_zPadding, $_rPadding, $_flatData, $_config, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
      2147483588 | a[1] & /*$width_d, $height_d, $aspectRatio_d, $_containerWidth, $_containerHeight, $_percentRange, $padding_d, $extents_d, $xDomain_d, $yDomain_d, $zDomain_d, $rDomain_d, $xRange_d, $yRange_d, $zRange_d, $rRange_d, $xGet_d, $yGet_d, $zGet_d, $rGet_d*/
      1048575 | a[4] & /*$$scope*/
      268435456) && Ye(
        i,
        r,
        o,
        /*$$scope*/
        o[152],
        l ? Xe(
          r,
          /*$$scope*/
          o[152],
          a,
          fc
        ) : Je(
          /*$$scope*/
          o[152]
        ),
        Gi
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
      l || (p(i, o), l = !0);
    },
    o(o) {
      N(i, o), l = !1;
    },
    d(o) {
      o && v(t), i && i.d(o), e[154](null), n();
    }
  };
}
function sc(e) {
  let t, n, l = (
    /*ssr*/
    (e[3] === !0 || typeof window < "u") && xi(e)
  );
  return {
    c() {
      l && l.c(), t = _e();
    },
    m(r, i) {
      l && l.m(r, i), C(r, t, i), n = !0;
    },
    p(r, i) {
      /*ssr*/
      r[3] === !0 || typeof window < "u" ? l ? (l.p(r, i), i[0] & /*ssr*/
      8 && p(l, 1)) : (l = xi(r), l.c(), p(l, 1), l.m(t.parentNode, t)) : l && (re(), N(l, 1, 1, () => {
        l = null;
      }), ie());
    },
    i(r) {
      n || (p(l), n = !0);
    },
    o(r) {
      N(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && v(t);
    }
  };
}
function uc(e, t, n) {
  let l, r, i, o, a, f, s, u, c, d, m, b, _, y, M, w, S, z, E, D, I, j, A, q, R, T, ee, H, Q, B, Y, ye, te, ue, be, se, ge, X, ae, ne, O, he, Ne, Ee, Te, Ve, Pe, K, De, He, $, je, $e, ot, Be, ct, dt, Gn, xn, at, Vn, Wn, { $$slots: dr = {}, $$scope: Kn } = t;
  const mr = bu(lc, 200);
  let { ssr: on = !1 } = t, { pointerEvents: Un = !0 } = t, { position: Xn = "relative" } = t, { percentRange: Dt = !1 } = t, { width: an = void 0 } = t, { height: fn = void 0 } = t, { containerWidth: mt = an || 100 } = t, { containerHeight: gt = fn || 100 } = t, { element: At = void 0 } = t, { x: bt = void 0 } = t, { y: _t = void 0 } = t, { z: ht = void 0 } = t, { r: J = void 0 } = t, { data: yt = [] } = t, { xDomain: Tt = void 0 } = t, { yDomain: Pt = void 0 } = t, { zDomain: Qt = void 0 } = t, { rDomain: jt = void 0 } = t, { xNice: Yn = !1 } = t, { yNice: Jn = !1 } = t, { zNice: Zn = !1 } = t, { rNice: $n = !1 } = t, { xPadding: el = void 0 } = t, { yPadding: tl = void 0 } = t, { zPadding: nl = void 0 } = t, { rPadding: ll = void 0 } = t, { xScale: rl = Dn.x } = t, { yScale: sn = Dn.y } = t, { zScale: il = Dn.z } = t, { rScale: ol = Dn.r } = t, { xRange: Ot = void 0 } = t, { yRange: It = void 0 } = t, { zRange: Ht = void 0 } = t, { rRange: Bt = void 0 } = t, { xReverse: al = !1 } = t, { yReverse: fl = void 0 } = t, { zReverse: sl = !1 } = t, { rReverse: ul = !1 } = t, { padding: cl = {} } = t, { extents: dl = {} } = t, { flatData: ml = void 0 } = t, { custom: gl = {} } = t, { debug: gr = !1 } = t, br = !1;
  Nt(() => {
    br = !0;
  });
  const ke = {}, kt = me(Dt);
  F(e, kt, (L) => n(33, Te = L));
  const Ft = me(mt);
  F(e, Ft, (L) => n(32, Ee = L));
  const Gt = me(gt);
  F(e, Gt, (L) => n(31, Ne = L));
  const bl = me(qr(dl));
  F(e, bl, (L) => n(170, he = L));
  const _l = me(yt);
  F(e, _l, (L) => n(30, O = L));
  const un = me(ml || yt);
  F(e, un, (L) => n(29, ne = L));
  const hl = me(cl);
  F(e, hl, (L) => n(169, ae = L));
  const xt = me(vt(bt));
  F(e, xt, (L) => n(28, X = L));
  const Vt = me(vt(_t));
  F(e, Vt, (L) => n(27, ge = L));
  const Wt = me(vt(ht));
  F(e, Wt, (L) => n(26, se = L));
  const Kt = me(vt(J));
  F(e, Kt, (L) => n(25, be = L));
  const yl = me(Tt);
  F(e, yl, (L) => n(168, ue = L));
  const kl = me(Pt);
  F(e, kl, (L) => n(167, te = L));
  const pl = me(Qt);
  F(e, pl, (L) => n(166, ye = L));
  const wl = me(jt);
  F(e, wl, (L) => n(165, Y = L));
  const cn = me(Yn);
  F(e, cn, (L) => n(24, B = L));
  const dn = me(Jn);
  F(e, dn, (L) => n(23, Q = L));
  const mn = me(Zn);
  F(e, mn, (L) => n(22, H = L));
  const gn = me($n);
  F(e, gn, (L) => n(21, ee = L));
  const bn = me(al);
  F(e, bn, (L) => n(20, T = L));
  const _n = me(l);
  F(e, _n, (L) => n(19, R = L));
  const hn = me(sl);
  F(e, hn, (L) => n(18, q = L));
  const yn = me(ul);
  F(e, yn, (L) => n(17, A = L));
  const kn = me(el);
  F(e, kn, (L) => n(16, j = L));
  const pn = me(tl);
  F(e, pn, (L) => n(15, I = L));
  const wn = me(nl);
  F(e, wn, (L) => n(14, D = L));
  const vn = me(ll);
  F(e, vn, (L) => n(13, E = L));
  const vl = me(Ot);
  F(e, vl, (L) => n(164, z = L));
  const Cl = me(It);
  F(e, Cl, (L) => n(163, S = L));
  const Sl = me(Ht);
  F(e, Sl, (L) => n(162, w = L));
  const Nl = me(Bt);
  F(e, Nl, (L) => n(161, M = L));
  const Cn = me(rl);
  F(e, Cn, (L) => n(160, y = L));
  const Sn = me(sn);
  F(e, Sn, (L) => n(159, _ = L));
  const Nn = me(il);
  F(e, Nn, (L) => n(158, b = L));
  const Mn = me(ol);
  F(e, Mn, (L) => n(157, m = L));
  const Ml = me(ke);
  F(e, Ml, (L) => n(11, c = L));
  const Ll = me(gl);
  F(e, Ll, (L) => n(12, d = L));
  const zl = Me([xt, Vt, Wt, Kt], ([L, ft, et, Ae]) => {
    const Mt = {};
    return L && (Mt.x = L), ft && (Mt.y = ft), et && (Mt.z = et), Ae && (Mt.r = Ae), Mt;
  });
  F(e, zl, (L) => n(10, s = L));
  const Rl = Me([hl, Ft, Gt], ([L]) => Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, L));
  F(e, Rl, (L) => n(37, De = L));
  const ql = Me([Ft, Gt, Rl], ([L, ft, et]) => {
    const Ae = {};
    return Ae.top = et.top, Ae.right = L - et.right, Ae.bottom = ft - et.bottom, Ae.left = et.left, Ae.width = Ae.right - Ae.left, Ae.height = Ae.bottom - Ae.top, Ae.width <= 0 && br === !0 && console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?"), Ae.height <= 0 && br === !0 && console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?"), Ae;
  });
  F(e, ql, (L) => n(151, u = L));
  const pt = Me([ql], ([L]) => L.width);
  F(e, pt, (L) => n(34, Ve = L));
  const wt = Me([ql], ([L]) => L.height);
  F(e, wt, (L) => n(35, Pe = L));
  const We = Me([un, zl, bl, Cn, Sn, Mn, Nn], ([L, ft, et, Ae, Mt, nf, lf]) => {
    const rf = {
      x: Ae,
      y: Mt,
      r: nf,
      z: lf
    }, Nr = qr(ft, et), of = Object.fromEntries(Object.keys(Nr).map((Mr) => [Mr, rf[Mr]]));
    return Object.keys(Nr).length > 0 ? { ...yu(L, Nr, of), ...et } : {};
  });
  F(e, We, (L) => n(38, He = L));
  const El = Me([We, yl], Hl("x"));
  F(e, El, (L) => n(39, $ = L));
  const Dl = Me([We, kl], Hl("y"));
  F(e, Dl, (L) => n(40, je = L));
  const Al = Me([We, pl], Hl("z"));
  F(e, Al, (L) => n(41, $e = L));
  const Tl = Me([We, wl], Hl("r"));
  F(e, Tl, (L) => n(42, ot = L));
  const Ln = Me(
    [
      Cn,
      We,
      El,
      kn,
      cn,
      bn,
      pt,
      wt,
      vl,
      kt
    ],
    Fl("x")
  );
  F(e, Ln, (L) => n(9, f = L));
  const _r = Me([xt, Ln], Gl);
  F(e, _r, (L) => n(47, xn = L));
  const zn = Me(
    [
      Sn,
      We,
      Dl,
      pn,
      dn,
      _n,
      pt,
      wt,
      Cl,
      kt
    ],
    Fl("y")
  );
  F(e, zn, (L) => n(8, a = L));
  const hr = Me([Vt, zn], Gl);
  F(e, hr, (L) => n(48, at = L));
  const Rn = Me(
    [
      Nn,
      We,
      Al,
      wn,
      mn,
      hn,
      pt,
      wt,
      Sl,
      kt
    ],
    Fl("z")
  );
  F(e, Rn, (L) => n(7, o = L));
  const yr = Me([Wt, Rn], Gl);
  F(e, yr, (L) => n(49, Vn = L));
  const qn = Me(
    [
      Mn,
      We,
      Tl,
      vn,
      gn,
      yn,
      pt,
      wt,
      Nl,
      kt
    ],
    Fl("r")
  );
  F(e, qn, (L) => n(6, i = L));
  const kr = Me([Kt, qn], Gl);
  F(e, kr, (L) => n(50, Wn = L));
  const pr = Me([Ln], xl);
  F(e, pr, (L) => n(43, Be = L));
  const wr = Me([zn], xl);
  F(e, wr, (L) => n(44, ct = L));
  const vr = Me([Rn], xl);
  F(e, vr, (L) => n(45, dt = L));
  const Cr = Me([qn], xl);
  F(e, Cr, (L) => n(46, Gn = L));
  const Sr = Me([pt, wt], ([L, ft]) => L / ft);
  F(e, Sr, (L) => n(36, K = L));
  function ef(L) {
    Se[L ? "unshift" : "push"](() => {
      At = L, n(2, At);
    });
  }
  function tf() {
    mt = this.clientWidth, gt = this.clientHeight, n(0, mt), n(1, gt);
  }
  return e.$$set = (L) => {
    "ssr" in L && n(3, on = L.ssr), "pointerEvents" in L && n(4, Un = L.pointerEvents), "position" in L && n(5, Xn = L.position), "percentRange" in L && n(111, Dt = L.percentRange), "width" in L && n(112, an = L.width), "height" in L && n(113, fn = L.height), "containerWidth" in L && n(0, mt = L.containerWidth), "containerHeight" in L && n(1, gt = L.containerHeight), "element" in L && n(2, At = L.element), "x" in L && n(114, bt = L.x), "y" in L && n(115, _t = L.y), "z" in L && n(116, ht = L.z), "r" in L && n(117, J = L.r), "data" in L && n(118, yt = L.data), "xDomain" in L && n(119, Tt = L.xDomain), "yDomain" in L && n(120, Pt = L.yDomain), "zDomain" in L && n(121, Qt = L.zDomain), "rDomain" in L && n(122, jt = L.rDomain), "xNice" in L && n(123, Yn = L.xNice), "yNice" in L && n(124, Jn = L.yNice), "zNice" in L && n(125, Zn = L.zNice), "rNice" in L && n(126, $n = L.rNice), "xPadding" in L && n(127, el = L.xPadding), "yPadding" in L && n(128, tl = L.yPadding), "zPadding" in L && n(129, nl = L.zPadding), "rPadding" in L && n(130, ll = L.rPadding), "xScale" in L && n(131, rl = L.xScale), "yScale" in L && n(132, sn = L.yScale), "zScale" in L && n(133, il = L.zScale), "rScale" in L && n(134, ol = L.rScale), "xRange" in L && n(135, Ot = L.xRange), "yRange" in L && n(136, It = L.yRange), "zRange" in L && n(137, Ht = L.zRange), "rRange" in L && n(138, Bt = L.rRange), "xReverse" in L && n(139, al = L.xReverse), "yReverse" in L && n(140, fl = L.yReverse), "zReverse" in L && n(141, sl = L.zReverse), "rReverse" in L && n(142, ul = L.rReverse), "padding" in L && n(143, cl = L.padding), "extents" in L && n(144, dl = L.extents), "flatData" in L && n(145, ml = L.flatData), "custom" in L && n(146, gl = L.custom), "debug" in L && n(147, gr = L.debug), "$$scope" in L && n(152, Kn = L.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[4] & /*yReverse, yScale*/
    65792 && n(150, l = typeof fl > "u" ? typeof sn.bandwidth != "function" : fl), e.$$.dirty[3] & /*x*/
    2097152 && bt && n(148, ke.x = bt, ke), e.$$.dirty[3] & /*y*/
    4194304 && _t && n(148, ke.y = _t, ke), e.$$.dirty[3] & /*z*/
    8388608 && ht && n(148, ke.z = ht, ke), e.$$.dirty[3] & /*r*/
    16777216 && J && n(148, ke.r = J, ke), e.$$.dirty[3] & /*xDomain*/
    67108864 && Tt && n(148, ke.xDomain = Tt, ke), e.$$.dirty[3] & /*yDomain*/
    134217728 && Pt && n(148, ke.yDomain = Pt, ke), e.$$.dirty[3] & /*zDomain*/
    268435456 && Qt && n(148, ke.zDomain = Qt, ke), e.$$.dirty[3] & /*rDomain*/
    536870912 && jt && n(148, ke.rDomain = jt, ke), e.$$.dirty[4] & /*xRange*/
    2048 && Ot && n(148, ke.xRange = Ot, ke), e.$$.dirty[4] & /*yRange*/
    4096 && It && n(148, ke.yRange = It, ke), e.$$.dirty[4] & /*zRange*/
    8192 && Ht && n(148, ke.zRange = Ht, ke), e.$$.dirty[4] & /*rRange*/
    16384 && Bt && n(148, ke.rRange = Bt, ke), e.$$.dirty[3] & /*percentRange*/
    262144 && de(kt, Te = Dt, Te), e.$$.dirty[0] & /*containerWidth*/
    1 && de(Ft, Ee = mt, Ee), e.$$.dirty[0] & /*containerHeight*/
    2 && de(Gt, Ne = gt, Ne), e.$$.dirty[4] & /*extents*/
    1048576 && de(bl, he = qr(dl), he), e.$$.dirty[3] & /*data*/
    33554432 && de(_l, O = yt, O), e.$$.dirty[3] & /*data*/
    33554432 | e.$$.dirty[4] & /*flatData*/
    2097152 && de(un, ne = ml || yt, ne), e.$$.dirty[4] & /*padding*/
    524288 && de(hl, ae = cl, ae), e.$$.dirty[3] & /*x*/
    2097152 && de(xt, X = vt(bt), X), e.$$.dirty[3] & /*y*/
    4194304 && de(Vt, ge = vt(_t), ge), e.$$.dirty[3] & /*z*/
    8388608 && de(Wt, se = vt(ht), se), e.$$.dirty[3] & /*r*/
    16777216 && de(Kt, be = vt(J), be), e.$$.dirty[3] & /*xDomain*/
    67108864 && de(yl, ue = Tt, ue), e.$$.dirty[3] & /*yDomain*/
    134217728 && de(kl, te = Pt, te), e.$$.dirty[3] & /*zDomain*/
    268435456 && de(pl, ye = Qt, ye), e.$$.dirty[3] & /*rDomain*/
    536870912 && de(wl, Y = jt, Y), e.$$.dirty[3] & /*xNice*/
    1073741824 && de(cn, B = Yn, B), e.$$.dirty[4] & /*yNice*/
    1 && de(dn, Q = Jn, Q), e.$$.dirty[4] & /*zNice*/
    2 && de(mn, H = Zn, H), e.$$.dirty[4] & /*rNice*/
    4 && de(gn, ee = $n, ee), e.$$.dirty[4] & /*xReverse*/
    32768 && de(bn, T = al, T), e.$$.dirty[4] & /*yReverseValue*/
    67108864 && de(_n, R = l, R), e.$$.dirty[4] & /*zReverse*/
    131072 && de(hn, q = sl, q), e.$$.dirty[4] & /*rReverse*/
    262144 && de(yn, A = ul, A), e.$$.dirty[4] & /*xPadding*/
    8 && de(kn, j = el, j), e.$$.dirty[4] & /*yPadding*/
    16 && de(pn, I = tl, I), e.$$.dirty[4] & /*zPadding*/
    32 && de(wn, D = nl, D), e.$$.dirty[4] & /*rPadding*/
    64 && de(vn, E = ll, E), e.$$.dirty[4] & /*xRange*/
    2048 && de(vl, z = Ot, z), e.$$.dirty[4] & /*yRange*/
    4096 && de(Cl, S = It, S), e.$$.dirty[4] & /*zRange*/
    8192 && de(Sl, w = Ht, w), e.$$.dirty[4] & /*rRange*/
    16384 && de(Nl, M = Bt, M), e.$$.dirty[4] & /*xScale*/
    128 && de(Cn, y = rl, y), e.$$.dirty[4] & /*yScale*/
    256 && de(Sn, _ = sn, _), e.$$.dirty[4] & /*zScale*/
    512 && de(Nn, b = il, b), e.$$.dirty[4] & /*rScale*/
    1024 && de(Mn, m = ol, m), e.$$.dirty[4] & /*custom*/
    4194304 && de(Ll, d = gl, d), e.$$.dirty[4] & /*config*/
    16777216 && de(Ml, c = ke, c), e.$$.dirty[4] & /*context*/
    33554432 && gf("LayerCake", r), e.$$.dirty[0] & /*ssr, $activeGetters_d, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
    1992 | e.$$.dirty[4] & /*$box_d, debug, config*/
    159383552 && u && gr === !0 && (on === !0 || typeof window < "u") && mr({
      boundingBox: u,
      activeGetters: s,
      x: ke.x,
      y: ke.y,
      z: ke.z,
      r: ke.r,
      xScale: f,
      yScale: a,
      zScale: o,
      rScale: i
    });
  }, n(149, r = {
    activeGetters: zl,
    width: pt,
    height: wt,
    percentRange: kt,
    aspectRatio: Sr,
    containerWidth: Ft,
    containerHeight: Gt,
    x: xt,
    y: Vt,
    z: Wt,
    r: Kt,
    custom: Ll,
    data: _l,
    xNice: cn,
    yNice: dn,
    zNice: mn,
    rNice: gn,
    xReverse: bn,
    yReverse: _n,
    zReverse: hn,
    rReverse: yn,
    xPadding: kn,
    yPadding: pn,
    zPadding: wn,
    rPadding: vn,
    padding: Rl,
    flatData: un,
    extents: We,
    xDomain: El,
    yDomain: Dl,
    zDomain: Al,
    rDomain: Tl,
    xRange: pr,
    yRange: wr,
    zRange: vr,
    rRange: Cr,
    config: Ml,
    xScale: Ln,
    xGet: _r,
    yScale: zn,
    yGet: hr,
    zScale: Rn,
    zGet: yr,
    rScale: qn,
    rGet: kr
  }), [
    mt,
    gt,
    At,
    on,
    Un,
    Xn,
    i,
    o,
    a,
    f,
    s,
    c,
    d,
    E,
    D,
    I,
    j,
    A,
    q,
    R,
    T,
    ee,
    H,
    Q,
    B,
    be,
    se,
    ge,
    X,
    ne,
    O,
    Ne,
    Ee,
    Te,
    Ve,
    Pe,
    K,
    De,
    He,
    $,
    je,
    $e,
    ot,
    Be,
    ct,
    dt,
    Gn,
    xn,
    at,
    Vn,
    Wn,
    kt,
    Ft,
    Gt,
    bl,
    _l,
    un,
    hl,
    xt,
    Vt,
    Wt,
    Kt,
    yl,
    kl,
    pl,
    wl,
    cn,
    dn,
    mn,
    gn,
    bn,
    _n,
    hn,
    yn,
    kn,
    pn,
    wn,
    vn,
    vl,
    Cl,
    Sl,
    Nl,
    Cn,
    Sn,
    Nn,
    Mn,
    Ml,
    Ll,
    zl,
    Rl,
    ql,
    pt,
    wt,
    We,
    El,
    Dl,
    Al,
    Tl,
    Ln,
    _r,
    zn,
    hr,
    Rn,
    yr,
    qn,
    kr,
    pr,
    wr,
    vr,
    Cr,
    Sr,
    Dt,
    an,
    fn,
    bt,
    _t,
    ht,
    J,
    yt,
    Tt,
    Pt,
    Qt,
    jt,
    Yn,
    Jn,
    Zn,
    $n,
    el,
    tl,
    nl,
    ll,
    rl,
    sn,
    il,
    ol,
    Ot,
    It,
    Ht,
    Bt,
    al,
    fl,
    sl,
    ul,
    cl,
    dl,
    ml,
    gl,
    gr,
    ke,
    r,
    l,
    u,
    Kn,
    dr,
    ef,
    tf
  ];
}
class sr extends Ce {
  constructor(t) {
    super(), ve(
      this,
      t,
      uc,
      sc,
      pe,
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
const cc = (e) => ({ element: e & /*element*/
1 }), Vi = (e) => ({ element: (
  /*element*/
  e[0]
) });
function dc(e) {
  let t, n;
  const l = (
    /*#slots*/
    e[11].default
  ), r = Ue(
    l,
    e,
    /*$$scope*/
    e[10],
    Vi
  );
  return {
    c() {
      t = k("div"), r && r.c(), g(t, "class", "layercake-layout-html svelte-1bu60uu"), g(
        t,
        "role",
        /*roleVal*/
        e[6]
      ), g(
        t,
        "aria-label",
        /*label*/
        e[3]
      ), g(
        t,
        "aria-labelledby",
        /*labelledBy*/
        e[4]
      ), g(
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
      C(i, t, o), r && r.m(t, null), e[12](t), n = !0;
    },
    p(i, [o]) {
      r && r.p && (!n || o & /*$$scope, element*/
      1025) && Ye(
        r,
        l,
        i,
        /*$$scope*/
        i[10],
        n ? Xe(
          l,
          /*$$scope*/
          i[10],
          o,
          cc
        ) : Je(
          /*$$scope*/
          i[10]
        ),
        Vi
      ), (!n || o & /*roleVal*/
      64) && g(
        t,
        "role",
        /*roleVal*/
        i[6]
      ), (!n || o & /*label*/
      8) && g(
        t,
        "aria-label",
        /*label*/
        i[3]
      ), (!n || o & /*labelledBy*/
      16) && g(
        t,
        "aria-labelledby",
        /*labelledBy*/
        i[4]
      ), (!n || o & /*describedBy*/
      32) && g(
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
      n || (p(r, i), n = !0);
    },
    o(i) {
      N(r, i), n = !1;
    },
    d(i) {
      i && v(t), r && r.d(i), e[12](null);
    }
  };
}
function mc(e, t, n) {
  let l, r, { $$slots: i = {}, $$scope: o } = t;
  const { padding: a } = Bn("LayerCake");
  F(e, a, (y) => n(7, r = y));
  let { element: f = void 0 } = t, { zIndex: s = void 0 } = t, { pointerEvents: u = void 0 } = t, { role: c = void 0 } = t, { label: d = void 0 } = t, { labelledBy: m = void 0 } = t, { describedBy: b = void 0 } = t;
  function _(y) {
    Se[y ? "unshift" : "push"](() => {
      f = y, n(0, f);
    });
  }
  return e.$$set = (y) => {
    "element" in y && n(0, f = y.element), "zIndex" in y && n(1, s = y.zIndex), "pointerEvents" in y && n(2, u = y.pointerEvents), "role" in y && n(9, c = y.role), "label" in y && n(3, d = y.label), "labelledBy" in y && n(4, m = y.labelledBy), "describedBy" in y && n(5, b = y.describedBy), "$$scope" in y && n(10, o = y.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*role, label, labelledBy, describedBy*/
    568 && n(6, l = c || (d || m || b ? "figure" : void 0));
  }, [
    f,
    s,
    u,
    d,
    m,
    b,
    l,
    r,
    a,
    c,
    o,
    i,
    _
  ];
}
class Ia extends Ce {
  constructor(t) {
    super(), ve(this, t, mc, dc, pe, {
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
const gc = (e) => ({ element: e & /*element*/
1 }), Wi = (e) => ({ element: (
  /*element*/
  e[0]
) }), bc = (e) => ({ element: e & /*element*/
1 }), Ki = (e) => ({ element: (
  /*element*/
  e[0]
) }), _c = (e) => ({ element: e & /*element*/
1 }), Ui = (e) => ({ element: (
  /*element*/
  e[0]
) });
function Xi(e) {
  let t, n;
  return {
    c() {
      t = Re("title"), n = G(
        /*title*/
        e[8]
      );
    },
    m(l, r) {
      C(l, t, r), h(t, n);
    },
    p(l, r) {
      r & /*title*/
      256 && oe(
        n,
        /*title*/
        l[8]
      );
    },
    d(l) {
      l && v(t);
    }
  };
}
function hc(e) {
  let t, n = (
    /*title*/
    e[8] && Xi(e)
  );
  return {
    c() {
      n && n.c(), t = _e();
    },
    m(l, r) {
      n && n.m(l, r), C(l, t, r);
    },
    p(l, r) {
      /*title*/
      l[8] ? n ? n.p(l, r) : (n = Xi(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(l) {
      n && n.d(l), l && v(t);
    }
  };
}
function yc(e) {
  let t, n, l, r, i;
  const o = (
    /*#slots*/
    e[16].title
  ), a = Ue(
    o,
    e,
    /*$$scope*/
    e[15],
    Ui
  ), f = a || hc(e), s = (
    /*#slots*/
    e[16].defs
  ), u = Ue(
    s,
    e,
    /*$$scope*/
    e[15],
    Ki
  ), c = (
    /*#slots*/
    e[16].default
  ), d = Ue(
    c,
    e,
    /*$$scope*/
    e[15],
    Wi
  );
  return {
    c() {
      t = Re("svg"), f && f.c(), n = Re("defs"), u && u.c(), l = Re("g"), d && d.c(), g(l, "class", "layercake-layout-svg_g"), g(l, "transform", r = "translate(" + /*$padding*/
      e[11].left + ", " + /*$padding*/
      e[11].top + ")"), g(t, "class", "layercake-layout-svg svelte-u84d8d"), g(
        t,
        "viewBox",
        /*viewBox*/
        e[4]
      ), g(
        t,
        "width",
        /*$containerWidth*/
        e[9]
      ), g(
        t,
        "height",
        /*$containerHeight*/
        e[10]
      ), g(
        t,
        "aria-label",
        /*label*/
        e[5]
      ), g(
        t,
        "aria-labelledby",
        /*labelledBy*/
        e[6]
      ), g(
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
    m(m, b) {
      C(m, t, b), f && f.m(t, null), h(t, n), u && u.m(n, null), h(t, l), d && d.m(l, null), e[17](l), e[18](t), i = !0;
    },
    p(m, [b]) {
      a ? a.p && (!i || b & /*$$scope, element*/
      32769) && Ye(
        a,
        o,
        m,
        /*$$scope*/
        m[15],
        i ? Xe(
          o,
          /*$$scope*/
          m[15],
          b,
          _c
        ) : Je(
          /*$$scope*/
          m[15]
        ),
        Ui
      ) : f && f.p && (!i || b & /*title*/
      256) && f.p(m, i ? b : -1), u && u.p && (!i || b & /*$$scope, element*/
      32769) && Ye(
        u,
        s,
        m,
        /*$$scope*/
        m[15],
        i ? Xe(
          s,
          /*$$scope*/
          m[15],
          b,
          bc
        ) : Je(
          /*$$scope*/
          m[15]
        ),
        Ki
      ), d && d.p && (!i || b & /*$$scope, element*/
      32769) && Ye(
        d,
        c,
        m,
        /*$$scope*/
        m[15],
        i ? Xe(
          c,
          /*$$scope*/
          m[15],
          b,
          gc
        ) : Je(
          /*$$scope*/
          m[15]
        ),
        Wi
      ), (!i || b & /*$padding*/
      2048 && r !== (r = "translate(" + /*$padding*/
      m[11].left + ", " + /*$padding*/
      m[11].top + ")")) && g(l, "transform", r), (!i || b & /*viewBox*/
      16) && g(
        t,
        "viewBox",
        /*viewBox*/
        m[4]
      ), (!i || b & /*$containerWidth*/
      512) && g(
        t,
        "width",
        /*$containerWidth*/
        m[9]
      ), (!i || b & /*$containerHeight*/
      1024) && g(
        t,
        "height",
        /*$containerHeight*/
        m[10]
      ), (!i || b & /*label*/
      32) && g(
        t,
        "aria-label",
        /*label*/
        m[5]
      ), (!i || b & /*labelledBy*/
      64) && g(
        t,
        "aria-labelledby",
        /*labelledBy*/
        m[6]
      ), (!i || b & /*describedBy*/
      128) && g(
        t,
        "aria-describedby",
        /*describedBy*/
        m[7]
      ), b & /*zIndex*/
      4 && le(
        t,
        "z-index",
        /*zIndex*/
        m[2]
      ), b & /*pointerEvents*/
      8 && le(
        t,
        "pointer-events",
        /*pointerEvents*/
        m[3] === !1 ? "none" : null
      );
    },
    i(m) {
      i || (p(f, m), p(u, m), p(d, m), i = !0);
    },
    o(m) {
      N(f, m), N(u, m), N(d, m), i = !1;
    },
    d(m) {
      m && v(t), f && f.d(m), u && u.d(m), d && d.d(m), e[17](null), e[18](null);
    }
  };
}
function kc(e, t, n) {
  let l, r, i, { $$slots: o = {}, $$scope: a } = t, { element: f = void 0 } = t, { innerElement: s = void 0 } = t, { zIndex: u = void 0 } = t, { pointerEvents: c = void 0 } = t, { viewBox: d = void 0 } = t, { label: m = void 0 } = t, { labelledBy: b = void 0 } = t, { describedBy: _ = void 0 } = t, { title: y = void 0 } = t;
  const { containerWidth: M, containerHeight: w, padding: S } = Bn("LayerCake");
  F(e, M, (D) => n(9, l = D)), F(e, w, (D) => n(10, r = D)), F(e, S, (D) => n(11, i = D));
  function z(D) {
    Se[D ? "unshift" : "push"](() => {
      s = D, n(1, s);
    });
  }
  function E(D) {
    Se[D ? "unshift" : "push"](() => {
      f = D, n(0, f);
    });
  }
  return e.$$set = (D) => {
    "element" in D && n(0, f = D.element), "innerElement" in D && n(1, s = D.innerElement), "zIndex" in D && n(2, u = D.zIndex), "pointerEvents" in D && n(3, c = D.pointerEvents), "viewBox" in D && n(4, d = D.viewBox), "label" in D && n(5, m = D.label), "labelledBy" in D && n(6, b = D.labelledBy), "describedBy" in D && n(7, _ = D.describedBy), "title" in D && n(8, y = D.title), "$$scope" in D && n(15, a = D.$$scope);
  }, [
    f,
    s,
    u,
    c,
    d,
    m,
    b,
    _,
    y,
    l,
    r,
    i,
    M,
    w,
    S,
    a,
    o,
    z,
    E
  ];
}
class Ha extends Ce {
  constructor(t) {
    super(), ve(this, t, kc, yc, pe, {
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
function Ji(e) {
  let t, n = (
    /*yValue*/
    e[34] + ""
  ), l, r, i;
  return {
    c() {
      t = Re("text"), l = G(n), g(t, "x", r = /*xPos*/
      e[32] + /*colWidth*/
      e[33] / 2), g(t, "y", i = /*$height*/
      e[12] - /*colHeight*/
      e[30] - 5), g(t, "text-anchor", "middle"), g(t, "class", "svelte-1c28ck9");
    },
    m(o, a) {
      C(o, t, a), h(t, l);
    },
    p(o, a) {
      a[0] & /*$y, $data*/
      1280 && n !== (n = /*yValue*/
      o[34] + "") && oe(l, n), a[0] & /*$xGet, $data, $xScale, columnWidth*/
      904 && r !== (r = /*xPos*/
      o[32] + /*colWidth*/
      o[33] / 2) && g(t, "x", r), a[0] & /*$height, columnHeight, $data*/
      4416 && i !== (i = /*$height*/
      o[12] - /*colHeight*/
      o[30] - 5) && g(t, "y", i);
    },
    d(o) {
      o && v(t);
    }
  };
}
function Zi(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b, _;
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
  let M = (
    /*showLabels*/
    e[1] && /*yValue*/
    e[34] && Ji(e)
  );
  return {
    c() {
      t = Re("rect"), u = Re("rect"), M && M.c(), m = _e(), g(t, "class", "group-rect svelte-1c28ck9"), g(
        t,
        "data-id",
        /*i*/
        e[36]
      ), g(t, "data-range", n = /*$x*/
      e[11](
        /*d*/
        e[29]
      )), g(t, "data-count", l = /*yValue*/
      e[34]), g(t, "x", r = /*xPos*/
      e[32]), g(t, "y", i = /*$yGet*/
      e[2](
        /*d*/
        e[29]
      )), g(t, "width", o = /*colWidth*/
      e[33]), g(t, "height", a = /*colHeight*/
      e[30]), g(
        t,
        "fill",
        /*fill*/
        e[0]
      ), g(t, "stroke", f = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? $i : "none"), g(t, "stroke-width", s = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? eo : 0), fe(
        t,
        "animated",
        /*loaded*/
        e[5]
      ), g(u, "class", "hover-zone svelte-1c28ck9"), g(u, "x", c = /*xPos*/
      e[32]), g(u, "y", 0), g(u, "width", d = /*colWidth*/
      e[33]), g(
        u,
        "height",
        /*$height*/
        e[12]
      ), g(u, "fill", "none"), g(u, "stroke", "none");
    },
    m(w, S) {
      C(w, t, S), C(w, u, S), M && M.m(w, S), C(w, m, S), b || (_ = [
        x(u, "mouseenter", y),
        x(
          u,
          "mouseleave",
          /*mouseleave_handler*/
          e[24]
        )
      ], b = !0);
    },
    p(w, S) {
      e = w, S[0] & /*$x, $data*/
      2304 && n !== (n = /*$x*/
      e[11](
        /*d*/
        e[29]
      )) && g(t, "data-range", n), S[0] & /*$y, $data*/
      1280 && l !== (l = /*yValue*/
      e[34]) && g(t, "data-count", l), S[0] & /*$xGet, $data*/
      264 && r !== (r = /*xPos*/
      e[32]) && g(t, "x", r), S[0] & /*$yGet, $data*/
      260 && i !== (i = /*$yGet*/
      e[2](
        /*d*/
        e[29]
      )) && g(t, "y", i), S[0] & /*$xScale, columnWidth, $data*/
      896 && o !== (o = /*colWidth*/
      e[33]) && g(t, "width", o), S[0] & /*columnHeight, $data*/
      320 && a !== (a = /*colHeight*/
      e[30]) && g(t, "height", a), S[0] & /*fill*/
      1 && g(
        t,
        "fill",
        /*fill*/
        e[0]
      ), S[0] & /*hoveredIndex*/
      16 && f !== (f = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? $i : "none") && g(t, "stroke", f), S[0] & /*hoveredIndex*/
      16 && s !== (s = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? eo : 0) && g(t, "stroke-width", s), S[0] & /*loaded*/
      32 && fe(
        t,
        "animated",
        /*loaded*/
        e[5]
      ), S[0] & /*$xGet, $data*/
      264 && c !== (c = /*xPos*/
      e[32]) && g(u, "x", c), S[0] & /*$xScale, columnWidth, $data*/
      896 && d !== (d = /*colWidth*/
      e[33]) && g(u, "width", d), S[0] & /*$height*/
      4096 && g(
        u,
        "height",
        /*$height*/
        e[12]
      ), /*showLabels*/
      e[1] && /*yValue*/
      e[34] ? M ? M.p(e, S) : (M = Ji(e), M.c(), M.m(m.parentNode, m)) : M && (M.d(1), M = null);
    },
    d(w) {
      w && v(t), w && v(u), M && M.d(w), w && v(m), b = !1, we(_);
    }
  };
}
function pc(e) {
  let t, n = (
    /*$data*/
    e[8]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Zi(Yi(e, n, r));
  return {
    c() {
      t = Re("g");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      g(t, "class", "column-group");
    },
    m(r, i) {
      C(r, t, i);
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
          l[o] ? l[o].p(a, i) : (l[o] = Zi(a), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    i: Z,
    o: Z,
    d(r) {
      r && v(t), Ge(l, r);
    }
  };
}
const $i = "#333", eo = 1;
function wc(e, t, n) {
  let l, r, i, o, a, f, s, u, c, d;
  const m = va(), { data: b, xGet: _, yGet: y, x: M, yRange: w, xScale: S, y: z, height: E, zGet: D, zScale: I, z: j, custom: A } = Bn("LayerCake");
  F(e, b, (B) => n(8, f = B)), F(e, _, (B) => n(3, a = B)), F(e, y, (B) => n(2, i = B)), F(e, M, (B) => n(11, c = B)), F(e, w, (B) => n(22, o = B)), F(e, S, (B) => n(9, s = B)), F(e, z, (B) => n(10, u = B)), F(e, E, (B) => n(12, d = B));
  let { fill: q = "#00e047" } = t, { showLabels: R = !1 } = t, T = null;
  Nt(() => {
    setTimeout(() => n(5, ee = !0), 100);
  });
  let ee = !1;
  const H = (B, Y) => {
    n(4, T = B), m("hover", Y);
  }, Q = () => {
    n(4, T = null), m("hover", null);
  };
  return e.$$set = (B) => {
    "fill" in B && n(0, q = B.fill), "showLabels" in B && n(1, R = B.showLabels);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*$xGet*/
    8 && n(7, l = (B) => {
      const Y = a(B);
      return Math.abs(Y[1] - Y[0]);
    }), e.$$.dirty[0] & /*$yRange, $yGet*/
    4194308 && n(6, r = (B) => o[0] - i(B));
  }, [
    q,
    R,
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
    b,
    _,
    y,
    M,
    w,
    S,
    z,
    E,
    o,
    H,
    Q
  ];
}
class Ba extends Ce {
  constructor(t) {
    super(), ve(this, t, wc, pc, pe, { fill: 0, showLabels: 1 }, null, [-1, -1]);
  }
}
function to(e, t, n) {
  const l = e.slice();
  return l[28] = t[n], l[30] = n, l;
}
function no(e) {
  let t, n, l;
  return {
    c() {
      t = Re("line"), g(t, "y1", n = /*$height*/
      e[15] * -1), g(t, "y2", "0"), g(t, "x1", "0"), g(t, "x2", "0"), g(t, "stroke-width", l = /*tick*/
      e[28] == 0 ? 2 : 1), g(t, "class", "svelte-rkqqab"), fe(
        t,
        "gridline",
        /*tick*/
        e[28] != 0
      ), fe(
        t,
        "baseline",
        /*tick*/
        e[28] == 0
      );
    },
    m(r, i) {
      C(r, t, i);
    },
    p(r, i) {
      i & /*$height*/
      32768 && n !== (n = /*$height*/
      r[15] * -1) && g(t, "y1", n), i & /*tickVals*/
      8192 && l !== (l = /*tick*/
      r[28] == 0 ? 2 : 1) && g(t, "stroke-width", l), i & /*tickVals*/
      8192 && fe(
        t,
        "gridline",
        /*tick*/
        r[28] != 0
      ), i & /*tickVals*/
      8192 && fe(
        t,
        "baseline",
        /*tick*/
        r[28] == 0
      );
    },
    d(r) {
      r && v(t);
    }
  };
}
function lo(e) {
  let t, n, l;
  return {
    c() {
      t = Re("line"), g(t, "class", "tick-mark svelte-rkqqab"), g(t, "y1", 0), g(t, "y2", 6), g(t, "x1", n = /*xTick*/
      e[5] || /*isBandwidth*/
      e[11] ? (
        /*$xScale*/
        e[12].bandwidth() / 2
      ) : 0), g(t, "x2", l = /*xTick*/
      e[5] || /*isBandwidth*/
      e[11] ? (
        /*$xScale*/
        e[12].bandwidth() / 2
      ) : 0);
    },
    m(r, i) {
      C(r, t, i);
    },
    p(r, i) {
      i & /*xTick, isBandwidth, $xScale*/
      6176 && n !== (n = /*xTick*/
      r[5] || /*isBandwidth*/
      r[11] ? (
        /*$xScale*/
        r[12].bandwidth() / 2
      ) : 0) && g(t, "x1", n), i & /*xTick, isBandwidth, $xScale*/
      6176 && l !== (l = /*xTick*/
      r[5] || /*isBandwidth*/
      r[11] ? (
        /*$xScale*/
        r[12].bandwidth() / 2
      ) : 0) && g(t, "x2", l);
    },
    d(r) {
      r && v(t);
    }
  };
}
function ro(e) {
  let t, n, l, r = (
    /*formatTick*/
    e[4](
      /*tick*/
      e[28]
    ) + ""
  ), i, o, a, f, s, u, c = (
    /*gridlines*/
    e[0] !== !1 && no(e)
  ), d = (
    /*tickMarks*/
    e[1] === !0 && lo(e)
  );
  return {
    c() {
      t = Re("g"), c && c.c(), n = _e(), d && d.c(), l = Re("text"), i = G(r), g(l, "x", o = /*xTick*/
      e[5] || /*isBandwidth*/
      e[11] ? (
        /*$xScale*/
        e[12].bandwidth() / 2
      ) : 0), g(l, "y", a = /*yTick*/
      e[6] - /*angle*/
      (e[10] ? 4 : 0)), g(l, "dx", ""), g(l, "dy", ""), g(l, "transform", f = /*angle*/
      e[10] ? "rotate(-45)" : ""), le(
        l,
        "fill",
        /*color*/
        e[9]
      ), g(l, "text-anchor", s = /*textAnchor*/
      e[24](
        /*tick*/
        e[28]
      )), g(l, "class", "svelte-rkqqab"), g(t, "class", "tick tick-" + /*i*/
      e[30] + " svelte-rkqqab"), g(t, "transform", u = "translate(" + /*$xScale*/
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
    m(m, b) {
      C(m, t, b), c && c.m(t, null), h(t, n), d && d.m(t, null), h(t, l), h(l, i);
    },
    p(m, b) {
      /*gridlines*/
      m[0] !== !1 ? c ? c.p(m, b) : (c = no(m), c.c(), c.m(t, n)) : c && (c.d(1), c = null), /*tickMarks*/
      m[1] === !0 ? d ? d.p(m, b) : (d = lo(m), d.c(), d.m(t, l)) : d && (d.d(1), d = null), b & /*formatTick, tickVals*/
      8208 && r !== (r = /*formatTick*/
      m[4](
        /*tick*/
        m[28]
      ) + "") && oe(i, r), b & /*xTick, isBandwidth, $xScale*/
      6176 && o !== (o = /*xTick*/
      m[5] || /*isBandwidth*/
      m[11] ? (
        /*$xScale*/
        m[12].bandwidth() / 2
      ) : 0) && g(l, "x", o), b & /*yTick, angle*/
      1088 && a !== (a = /*yTick*/
      m[6] - /*angle*/
      (m[10] ? 4 : 0)) && g(l, "y", a), b & /*angle*/
      1024 && f !== (f = /*angle*/
      m[10] ? "rotate(-45)" : "") && g(l, "transform", f), b & /*color*/
      512 && le(
        l,
        "fill",
        /*color*/
        m[9]
      ), b & /*tickVals*/
      8192 && s !== (s = /*textAnchor*/
      m[24](
        /*tick*/
        m[28]
      )) && g(l, "text-anchor", s), b & /*$xScale, tickVals, $yRange*/
      28672 && u !== (u = "translate(" + /*$xScale*/
      m[12](
        /*tick*/
        m[28]
      ) + "," + Math.max(
        /*$yRange*/
        m[14][0],
        /*$yRange*/
        m[14][1]
      ) + ")") && g(t, "transform", u);
    },
    d(m) {
      m && v(t), c && c.d(), d && d.d();
    }
  };
}
function io(e) {
  let t, n, l;
  return {
    c() {
      t = Re("line"), g(t, "class", "baseline svelte-rkqqab"), g(t, "y1", n = /*$height*/
      e[15] + 0.5), g(t, "y2", l = /*$height*/
      e[15] + 0.5), g(t, "x1", "0"), g(
        t,
        "x2",
        /*$width*/
        e[16]
      );
    },
    m(r, i) {
      C(r, t, i);
    },
    p(r, i) {
      i & /*$height*/
      32768 && n !== (n = /*$height*/
      r[15] + 0.5) && g(t, "y1", n), i & /*$height*/
      32768 && l !== (l = /*$height*/
      r[15] + 0.5) && g(t, "y2", l), i & /*$width*/
      65536 && g(
        t,
        "x2",
        /*$width*/
        r[16]
      );
    },
    d(r) {
      r && v(t);
    }
  };
}
function oo(e) {
  let t, n, l, r;
  return {
    c() {
      t = Re("text"), g(t, "x", n = /*labelLeft*/
      e[8] ? (
        /*$xRange*/
        e[17][0] - 4 - 12
      ) : (
        /*$width*/
        e[16] * 0.5
      )), g(
        t,
        "y",
        /*$height*/
        e[15]
      ), g(t, "dy", l = /*labelLeft*/
      e[8] ? "18px" : "36px"), g(t, "text-anchor", r = /*labelLeft*/
      e[8] ? "end" : "middle"), le(
        t,
        "fill",
        /*color*/
        e[9]
      ), g(t, "class", "axis-label svelte-rkqqab");
    },
    m(i, o) {
      C(i, t, o), t.innerHTML = /*label*/
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
      )) && g(t, "x", n), o & /*$height*/
      32768 && g(
        t,
        "y",
        /*$height*/
        i[15]
      ), o & /*labelLeft*/
      256 && l !== (l = /*labelLeft*/
      i[8] ? "18px" : "36px") && g(t, "dy", l), o & /*labelLeft*/
      256 && r !== (r = /*labelLeft*/
      i[8] ? "end" : "middle") && g(t, "text-anchor", r), o & /*color*/
      512 && le(
        t,
        "fill",
        /*color*/
        i[9]
      );
    },
    d(i) {
      i && v(t);
    }
  };
}
function vc(e) {
  let t, n, l, r = (
    /*tickVals*/
    e[13]
  ), i = [];
  for (let f = 0; f < r.length; f += 1)
    i[f] = ro(to(e, r, f));
  let o = (
    /*baseline*/
    e[2] === !0 && io(e)
  ), a = !!/*label*/
  e[7] && oo(e);
  return {
    c() {
      t = Re("g");
      for (let f = 0; f < i.length; f += 1)
        i[f].c();
      n = _e(), o && o.c(), l = _e(), a && a.c(), g(t, "class", "axis x-axis svelte-rkqqab"), fe(
        t,
        "snapTicks",
        /*snapTicks*/
        e[3]
      );
    },
    m(f, s) {
      C(f, t, s);
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(t, null);
      h(t, n), o && o.m(t, null), h(t, l), a && a.m(t, null);
    },
    p(f, [s]) {
      if (s & /*$xScale, tickVals, Math, $yRange, xTick, isBandwidth, yTick, angle, color, textAnchor, formatTick, tickMarks, $height, gridlines*/
      16842355) {
        r = /*tickVals*/
        f[13];
        let u;
        for (u = 0; u < r.length; u += 1) {
          const c = to(f, r, u);
          i[u] ? i[u].p(c, s) : (i[u] = ro(c), i[u].c(), i[u].m(t, n));
        }
        for (; u < i.length; u += 1)
          i[u].d(1);
        i.length = r.length;
      }
      /*baseline*/
      f[2] === !0 ? o ? o.p(f, s) : (o = io(f), o.c(), o.m(t, l)) : o && (o.d(1), o = null), /*label*/
      f[7] ? a ? a.p(f, s) : (a = oo(f), a.c(), a.m(t, null)) : a && (a.d(1), a = null), s & /*snapTicks*/
      8 && fe(
        t,
        "snapTicks",
        /*snapTicks*/
        f[3]
      );
    },
    i: Z,
    o: Z,
    d(f) {
      f && v(t), Ge(i, f), o && o.d(), a && a.d();
    }
  };
}
function Cc(e, t, n) {
  let l, r, i, o, a, f, s, u;
  const { width: c, height: d, xRange: m, padding: b, xScale: _, xDomain: y, yRange: M } = Bn("LayerCake");
  F(e, c, (Q) => n(16, s = Q)), F(e, d, (Q) => n(15, f = Q)), F(e, m, (Q) => n(17, u = Q)), F(e, _, (Q) => n(12, o = Q)), F(e, y, (Q) => n(26, i = Q)), F(e, M, (Q) => n(14, a = Q));
  let { gridlines: w = !0 } = t, { tickMarks: S = !1 } = t, { baseline: z = !1 } = t, { snapTicks: E = !1 } = t, { formatTick: D = (Q) => Q } = t, { ticks: I = void 0 } = t, { xTick: j = 0 } = t, { yTick: A = 16 } = t, { label: q = "" } = t, { labelLeft: R = !1 } = t, { color: T = "#333" } = t, { angle: ee = !1 } = t;
  function H(Q) {
    if (ee)
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
    "gridlines" in Q && n(0, w = Q.gridlines), "tickMarks" in Q && n(1, S = Q.tickMarks), "baseline" in Q && n(2, z = Q.baseline), "snapTicks" in Q && n(3, E = Q.snapTicks), "formatTick" in Q && n(4, D = Q.formatTick), "ticks" in Q && n(25, I = Q.ticks), "xTick" in Q && n(5, j = Q.xTick), "yTick" in Q && n(6, A = Q.yTick), "label" in Q && n(7, q = Q.label), "labelLeft" in Q && n(8, R = Q.labelLeft), "color" in Q && n(9, T = Q.color), "angle" in Q && n(10, ee = Q.angle);
  }, e.$$.update = () => {
    e.$$.dirty & /*$xScale*/
    4096 && n(11, l = typeof o.bandwidth == "function"), e.$$.dirty & /*ticks, isBandwidth, $xScale*/
    33560576 && n(13, r = Array.isArray(I) ? I : l ? o.domain() : typeof I == "function" ? I(o.ticks()) : o.ticks(I));
  }, [
    w,
    S,
    z,
    E,
    D,
    j,
    A,
    q,
    R,
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
    _,
    y,
    M,
    H,
    I
  ];
}
class Fa extends Ce {
  constructor(t) {
    super(), ve(this, t, Cc, vc, pe, {
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
const Sc = (e) => ({}), ao = (e) => ({}), Nc = (e) => ({}), fo = (e) => ({});
function Mc(e) {
  let t, n, l, r, i, o, a, f, s = !!/*title*/
  e[3] && so(e), u = (
    /*loaded*/
    e[9] && /*histBins*/
    e[8].length > 0 && uo(e)
  );
  const c = [Ec, qc], d = [];
  function m(b, _) {
    return (
      /*$$slots*/
      b[12].caption ? 1 : 0
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
      ), le(l, "height", "16px"), g(i, "class", "text-xs text-gray-800 dark:text-gray-200 truncate"), fe(i, "mt-1", !/*horizontalLayout*/
      e[4]), g(t, "class", "gap-1 items-center"), fe(
        t,
        "flex",
        /*horizontalLayout*/
        e[4]
      ), fe(
        t,
        "my-0.5",
        /*horizontalLayout*/
        e[4]
      );
    },
    m(b, _) {
      C(b, t, _), s && s.m(t, null), h(t, n), h(t, l), u && u.m(l, null), h(t, r), h(t, i), d[o].m(i, null), f = !0;
    },
    p(b, _) {
      /*title*/
      b[3] ? s ? s.p(b, _) : (s = so(b), s.c(), s.m(t, n)) : s && (s.d(1), s = null), /*loaded*/
      b[9] && /*histBins*/
      b[8].length > 0 ? u ? (u.p(b, _), _ & /*loaded, histBins*/
      768 && p(u, 1)) : (u = uo(b), u.c(), p(u, 1), u.m(l, null)) : u && (re(), N(u, 1, 1, () => {
        u = null;
      }), ie()), (!f || _ & /*width*/
      1) && le(
        l,
        "width",
        /*width*/
        b[0] == null ? "100%" : `${/*width*/
        b[0]}px`
      );
      let y = o;
      o = m(b), o === y ? d[o].p(b, _) : (re(), N(d[y], 1, 1, () => {
        d[y] = null;
      }), ie(), a = d[o], a ? a.p(b, _) : (a = d[o] = c[o](b), a.c()), p(a, 1), a.m(i, null)), (!f || _ & /*horizontalLayout*/
      16) && fe(i, "mt-1", !/*horizontalLayout*/
      b[4]), (!f || _ & /*horizontalLayout*/
      16) && fe(
        t,
        "flex",
        /*horizontalLayout*/
        b[4]
      ), (!f || _ & /*horizontalLayout*/
      16) && fe(
        t,
        "my-0.5",
        /*horizontalLayout*/
        b[4]
      );
    },
    i(b) {
      f || (p(u), p(a), f = !0);
    },
    o(b) {
      N(u), N(a), f = !1;
    },
    d(b) {
      b && v(t), s && s.d(), u && u.d(), d[o].d();
    }
  };
}
function Lc(e) {
  let t, n, l, r, i, o, a, f = !!/*title*/
  e[3] && co(e), s = (
    /*loaded*/
    e[9] && /*histBins*/
    e[8].length > 0 && mo(e)
  );
  const u = [Oc, jc], c = [];
  function d(m, b) {
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
      ), le(n, "height", "16px"), g(r, "class", "text-xs text-gray-800 dark:text-gray-200 truncate"), fe(r, "mt-1", !/*horizontalLayout*/
      e[4]);
    },
    m(m, b) {
      f && f.m(m, b), C(m, t, b), C(m, n, b), s && s.m(n, null), C(m, l, b), C(m, r, b), c[i].m(r, null), a = !0;
    },
    p(m, b) {
      /*title*/
      m[3] ? f ? f.p(m, b) : (f = co(m), f.c(), f.m(t.parentNode, t)) : f && (f.d(1), f = null), /*loaded*/
      m[9] && /*histBins*/
      m[8].length > 0 ? s ? (s.p(m, b), b & /*loaded, histBins*/
      768 && p(s, 1)) : (s = mo(m), s.c(), p(s, 1), s.m(n, null)) : s && (re(), N(s, 1, 1, () => {
        s = null;
      }), ie()), (!a || b & /*width*/
      1) && le(
        n,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let _ = i;
      i = d(m), i === _ ? c[i].p(m, b) : (re(), N(c[_], 1, 1, () => {
        c[_] = null;
      }), ie(), o = c[i], o ? o.p(m, b) : (o = c[i] = u[i](m), o.c()), p(o, 1), o.m(r, null)), (!a || b & /*horizontalLayout*/
      16) && fe(r, "mt-1", !/*horizontalLayout*/
      m[4]);
    },
    i(m) {
      a || (p(s), p(o), a = !0);
    },
    o(m) {
      N(s), N(o), a = !1;
    },
    d(m) {
      f && f.d(m), m && v(t), m && v(n), s && s.d(), m && v(l), m && v(r), c[i].d();
    }
  };
}
function so(e) {
  let t, n;
  return {
    c() {
      t = k("div"), n = G(
        /*title*/
        e[3]
      ), g(t, "class", "font-bold text-xs truncate text-right"), le(t, "width", "96px");
    },
    m(l, r) {
      C(l, t, r), h(t, n);
    },
    p(l, r) {
      r & /*title*/
      8 && oe(
        n,
        /*title*/
        l[3]
      );
    },
    d(l) {
      l && v(t);
    }
  };
}
function uo(e) {
  let t, n;
  return t = new sr({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: Ur().round(!0),
      xDomain: (
        /*histBins*/
        e[8]
      ),
      yScale: Ct(),
      yDomain: [0, null],
      data: (
        /*data*/
        e[7]
      ),
      custom: { hoveredGet: (
        /*func_2*/
        e[20]
      ) },
      $$slots: { default: [Rc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      U(t.$$.fragment);
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
      n || (p(t.$$.fragment, l), n = !0);
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
  let t, n, l, r;
  return t = new Ba({ props: { fill: (
    /*color*/
    e[6]
  ) } }), t.$on(
    "hover",
    /*hover_handler_1*/
    e[19]
  ), l = new Fa({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      U(t.$$.fragment), n = P(), U(l.$$.fragment);
    },
    m(i, o) {
      V(t, i, o), C(i, n, o), V(l, i, o), r = !0;
    },
    p(i, o) {
      const a = {};
      o & /*color*/
      64 && (a.fill = /*color*/
      i[6]), t.$set(a);
    },
    i(i) {
      r || (p(t.$$.fragment, i), p(l.$$.fragment, i), r = !0);
    },
    o(i) {
      N(t.$$.fragment, i), N(l.$$.fragment, i), r = !1;
    },
    d(i) {
      W(t, i), i && v(n), W(l, i);
    }
  };
}
function Rc(e) {
  let t, n;
  return t = new Ha({
    props: {
      $$slots: { default: [zc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      U(t.$$.fragment);
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
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function qc(e) {
  let t;
  const n = (
    /*#slots*/
    e[15].caption
  ), l = Ue(
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
      4194304) && Ye(
        l,
        n,
        r,
        /*$$scope*/
        r[22],
        t ? Xe(
          n,
          /*$$scope*/
          r[22],
          i,
          Sc
        ) : Je(
          /*$$scope*/
          r[22]
        ),
        ao
      );
    },
    i(r) {
      t || (p(l, r), t = !0);
    },
    o(r) {
      N(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function Ec(e) {
  let t;
  function n(i, o) {
    return (
      /*hoveredBin*/
      i[10] != null ? Tc : (
        /*mean*/
        i[1] != null ? Ac : Dc
      )
    );
  }
  let l = n(e), r = l(e);
  return {
    c() {
      r.c(), t = _e();
    },
    m(i, o) {
      r.m(i, o), C(i, t, o);
    },
    p(i, o) {
      l === (l = n(i)) && r ? r.p(i, o) : (r.d(1), r = l(i), r && (r.c(), r.m(t.parentNode, t)));
    },
    i: Z,
    o: Z,
    d(i) {
      r.d(i), i && v(t);
    }
  };
}
function Dc(e) {
  let t;
  return {
    c() {
      t = G(" ");
    },
    m(n, l) {
      C(n, t, l);
    },
    p: Z,
    d(n) {
      n && v(t);
    }
  };
}
function Ac(e) {
  let t, n, l = Le(".3")(
    /*mean*/
    e[1]
  ) + "", r, i = /*unit*/ e[2] ? " " + /*unit*/
  e[2] : "", o;
  return {
    c() {
      t = G("M = "), n = k("strong"), r = G(l), o = G(i);
    },
    m(a, f) {
      C(a, t, f), C(a, n, f), h(n, r), h(n, o);
    },
    p(a, f) {
      f & /*mean*/
      2 && l !== (l = Le(".3")(
        /*mean*/
        a[1]
      ) + "") && oe(r, l), f & /*unit*/
      4 && i !== (i = /*unit*/
      a[2] ? " " + /*unit*/
      a[2] : "") && oe(o, i);
    },
    d(a) {
      a && v(t), a && v(n);
    }
  };
}
function Tc(e) {
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
      C(l, n, r);
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
      ) + "") && oe(n, t);
    },
    d(l) {
      l && v(n);
    }
  };
}
function co(e) {
  let t, n;
  return {
    c() {
      t = k("div"), n = G(
        /*title*/
        e[3]
      ), g(t, "class", "font-bold text-xs truncate text-right");
    },
    m(l, r) {
      C(l, t, r), h(t, n);
    },
    p(l, r) {
      r & /*title*/
      8 && oe(
        n,
        /*title*/
        l[3]
      );
    },
    d(l) {
      l && v(t);
    }
  };
}
function mo(e) {
  let t, n;
  return t = new sr({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: Ur().round(!0),
      xDomain: (
        /*histBins*/
        e[8]
      ),
      yScale: Ct(),
      yDomain: [0, null],
      data: (
        /*data*/
        e[7]
      ),
      custom: { hoveredGet: (
        /*func*/
        e[17]
      ) },
      $$slots: { default: [Qc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      U(t.$$.fragment);
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
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function Pc(e) {
  let t, n, l, r;
  return t = new Ba({ props: { fill: (
    /*color*/
    e[6]
  ) } }), t.$on(
    "hover",
    /*hover_handler*/
    e[16]
  ), l = new Fa({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      U(t.$$.fragment), n = P(), U(l.$$.fragment);
    },
    m(i, o) {
      V(t, i, o), C(i, n, o), V(l, i, o), r = !0;
    },
    p(i, o) {
      const a = {};
      o & /*color*/
      64 && (a.fill = /*color*/
      i[6]), t.$set(a);
    },
    i(i) {
      r || (p(t.$$.fragment, i), p(l.$$.fragment, i), r = !0);
    },
    o(i) {
      N(t.$$.fragment, i), N(l.$$.fragment, i), r = !1;
    },
    d(i) {
      W(t, i), i && v(n), W(l, i);
    }
  };
}
function Qc(e) {
  let t, n;
  return t = new Ha({
    props: {
      $$slots: { default: [Pc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      U(t.$$.fragment);
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
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function jc(e) {
  let t;
  const n = (
    /*#slots*/
    e[15].caption
  ), l = Ue(
    n,
    e,
    /*$$scope*/
    e[22],
    fo
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
      4194304) && Ye(
        l,
        n,
        r,
        /*$$scope*/
        r[22],
        t ? Xe(
          n,
          /*$$scope*/
          r[22],
          i,
          Nc
        ) : Je(
          /*$$scope*/
          r[22]
        ),
        fo
      );
    },
    i(r) {
      t || (p(l, r), t = !0);
    },
    o(r) {
      N(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function Oc(e) {
  let t;
  function n(i, o) {
    return (
      /*hoveredBin*/
      i[10] != null ? Bc : (
        /*mean*/
        i[1] != null ? Hc : Ic
      )
    );
  }
  let l = n(e), r = l(e);
  return {
    c() {
      r.c(), t = _e();
    },
    m(i, o) {
      r.m(i, o), C(i, t, o);
    },
    p(i, o) {
      l === (l = n(i)) && r ? r.p(i, o) : (r.d(1), r = l(i), r && (r.c(), r.m(t.parentNode, t)));
    },
    i: Z,
    o: Z,
    d(i) {
      r.d(i), i && v(t);
    }
  };
}
function Ic(e) {
  let t;
  return {
    c() {
      t = G(" ");
    },
    m(n, l) {
      C(n, t, l);
    },
    p: Z,
    d(n) {
      n && v(t);
    }
  };
}
function Hc(e) {
  let t, n, l = Le(".3")(
    /*mean*/
    e[1]
  ) + "", r;
  return {
    c() {
      t = G("M = "), n = k("strong"), r = G(l);
    },
    m(i, o) {
      C(i, t, o), C(i, n, o), h(n, r);
    },
    p(i, o) {
      o & /*mean*/
      2 && l !== (l = Le(".3")(
        /*mean*/
        i[1]
      ) + "") && oe(r, l);
    },
    d(i) {
      i && v(t), i && v(n);
    }
  };
}
function Bc(e) {
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
      C(l, n, r);
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
      ) + "") && oe(n, t);
    },
    d(l) {
      l && v(n);
    }
  };
}
function Fc(e) {
  let t, n, l, r;
  const i = [Lc, Mc], o = [];
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
      o[t].m(f, s), C(f, l, s), r = !0;
    },
    p(f, [s]) {
      let u = t;
      t = a(f), t === u ? o[t].p(f, s) : (re(), N(o[u], 1, 1, () => {
        o[u] = null;
      }), ie(), n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), p(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      r || (p(n), r = !0);
    },
    o(f) {
      N(n), r = !1;
    },
    d(f) {
      o[t].d(f), f && v(l);
    }
  };
}
function Gc(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = Ir(l);
  let { width: o = 100 } = t, { histValues: a } = t, { mean: f = null } = t, { unit: s = null } = t, { title: u = null } = t, { horizontalLayout: c = !1 } = t, { noParent: d = !1 } = t, { color: m = "#3b82f6" } = t, b = [], _ = [], y = Le(".3g"), M = Le(","), w = !1;
  Nt(() => setTimeout(() => n(9, w = !0), 0));
  let S;
  function z(R) {
    return `${R.label}${s ? " " + s : ""}: ${M(R.count)} instances`;
  }
  const E = (R) => n(10, S = R.detail != null ? R.detail.bin : null), D = (R) => R.bin == S, I = (R) => R.label == S, j = (R) => n(10, S = R.detail != null ? R.detail.label : null), A = (R) => R.label == S, q = (R) => R.label == S;
  return e.$$set = (R) => {
    "width" in R && n(0, o = R.width), "histValues" in R && n(13, a = R.histValues), "mean" in R && n(1, f = R.mean), "unit" in R && n(2, s = R.unit), "title" in R && n(3, u = R.title), "horizontalLayout" in R && n(4, c = R.horizontalLayout), "noParent" in R && n(5, d = R.noParent), "color" in R && n(6, m = R.color), "$$scope" in R && n(22, r = R.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*histValues, binFormat, data*/
    24704)
      if (a) {
        let R = Object.keys(a), T = R.reduce(
          (H, Q, B) => B > 0 ? Math.min(H, Math.abs(parseFloat(Q) - parseFloat(R[B - 1]))) : H,
          1e9
        );
        n(14, y = Le(`.${za(T)}f`));
        let ee = Object.keys(a).some((H) => H.search(/[^-0-9.]/) >= 0);
        console.log("string labels:", ee, Object.keys(a)), n(7, b = Object.entries(a).map((H) => ({
          bin: ee ? H[0] : parseFloat(H[0]),
          count: H[1],
          label: ee ? H[0] : y(H[0])
        }))), b.sort((H, Q) => ee ? H.label.localeCompare(Q.label) : parseFloat(H.bin) - parseFloat(Q.bin)), n(8, _ = b.map((H) => H.bin));
      } else
        n(7, b = []), n(8, _ = []);
    e.$$.dirty & /*histBins*/
    256 && console.log("histBins", _), e.$$.dirty & /*histValues*/
    8192 && console.log("histValues", a);
  }, [
    o,
    f,
    s,
    u,
    c,
    d,
    m,
    b,
    _,
    w,
    S,
    z,
    i,
    a,
    y,
    l,
    E,
    D,
    I,
    j,
    A,
    q,
    r
  ];
}
class xc extends Ce {
  constructor(t) {
    super(), ve(this, t, Gc, Fc, pe, {
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
function bo(e) {
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
      t = k("span"), g(t, "class", "bar absolute content-box svelte-mwmtzu"), le(t, "top", "0"), le(
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
      ), fe(
        t,
        "animated",
        /*loaded*/
        e[1]
      ), fe(
        t,
        "border",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      ), fe(
        t,
        "border-black",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      );
    },
    m(i, o) {
      C(i, t, o), n || (l = [
        x(t, "mouseenter", r),
        x(
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
      2 && fe(
        t,
        "animated",
        /*loaded*/
        e[1]
      ), o & /*hoveredIndex, $data*/
      5 && fe(
        t,
        "border",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      ), o & /*hoveredIndex, $data*/
      5 && fe(
        t,
        "border-black",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[24].index
      );
    },
    d(i) {
      i && v(t), n = !1, we(l);
    }
  };
}
function Vc(e) {
  let t, n = (
    /*$data*/
    e[2]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = bo(go(e, n, r));
  return {
    c() {
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      t = _e();
    },
    m(r, i) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(r, i);
      C(r, t, i);
    },
    p(r, [i]) {
      if (i & /*$xGet, $data, $xRange, $xScale, $z, $yGet, loaded, hoveredIndex, dispatch*/
      511) {
        n = /*$data*/
        r[2];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = go(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = bo(a), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    i: Z,
    o: Z,
    d(r) {
      Ge(l, r), r && v(t);
    }
  };
}
function Wc(e, t, n) {
  let l, r, i, o, a, f;
  const s = va(), { data: u, xGet: c, yGet: d, xRange: m, x: b, yRange: _, xScale: y, y: M, height: w, zGet: S, zScale: z, z: E, custom: D } = Bn("LayerCake");
  F(e, u, (R) => n(2, l = R)), F(e, c, (R) => n(3, r = R)), F(e, d, (R) => n(7, f = R)), F(e, m, (R) => n(4, i = R)), F(e, y, (R) => n(5, o = R)), F(e, E, (R) => n(6, a = R));
  let I = null;
  Nt(() => {
    setTimeout(() => n(1, j = !0), 100);
  });
  let j = !1;
  return [
    I,
    j,
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
    y,
    E,
    (R, T) => {
      n(0, I = R), s("hover", T);
    },
    () => {
      n(0, I = null), s("hover", null);
    }
  ];
}
class Ga extends Ce {
  constructor(t) {
    super(), ve(this, t, Wc, Vc, pe, {});
  }
}
const Kc = (e) => ({}), _o = (e) => ({}), Uc = (e) => ({}), ho = (e) => ({});
function Xc(e) {
  let t, n, l, r, i, o, a, f, s, u = !!/*title*/
  e[1] && yo(e);
  r = new sr({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: Ct(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        e[0] ?? 1
      ],
      yScale: fr(),
      yDomain: ut(
        /*counts*/
        e[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        e[4]
      ) ? (
        /*colorScale*/
        e[4]
      ) : ut(0, 1.00001, 1 / /*data*/
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
      $$slots: { default: [Zc] },
      $$scope: { ctx: e }
    }
  });
  const c = [t0, e0, $c], d = [];
  function m(b, _) {
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
  return ~(a = m(e)) && (f = d[a] = c[a](e)), {
    c() {
      t = k("div"), u && u.c(), n = P(), l = k("div"), U(r.$$.fragment), i = P(), o = k("div"), f && f.c(), le(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), le(l, "height", "6px"), g(l, "class", "rounded overflow-hidden mb-1"), g(o, "class", "text-xs text-gray-800 dark:text-gray-200"), g(t, "class", "gap-1 items-center"), fe(
        t,
        "flex",
        /*horizontalLayout*/
        e[2]
      );
    },
    m(b, _) {
      C(b, t, _), u && u.m(t, null), h(t, n), h(t, l), V(r, l, null), h(t, i), h(t, o), ~a && d[a].m(o, null), s = !0;
    },
    p(b, _) {
      /*title*/
      b[1] ? u ? u.p(b, _) : (u = yo(b), u.c(), u.m(t, n)) : u && (u.d(1), u = null);
      const y = {};
      _ & /*width*/
      1 && (y.xRange = [
        0,
        /*width*/
        b[0] ?? 1
      ]), _ & /*counts*/
      32 && (y.yDomain = ut(
        /*counts*/
        b[5].length
      )), _ & /*colorScale, data*/
      80 && (y.yRange = Array.isArray(
        /*colorScale*/
        b[4]
      ) ? (
        /*colorScale*/
        b[4]
      ) : ut(0, 1.00001, 1 / /*data*/
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
      1) && le(
        l,
        "width",
        /*width*/
        b[0] == null ? "100%" : `${/*width*/
        b[0]}px`
      );
      let M = a;
      a = m(b), a === M ? ~a && d[a].p(b, _) : (f && (re(), N(d[M], 1, 1, () => {
        d[M] = null;
      }), ie()), ~a ? (f = d[a], f ? f.p(b, _) : (f = d[a] = c[a](b), f.c()), p(f, 1), f.m(o, null)) : f = null), (!s || _ & /*horizontalLayout*/
      4) && fe(
        t,
        "flex",
        /*horizontalLayout*/
        b[2]
      );
    },
    i(b) {
      s || (p(r.$$.fragment, b), p(f), s = !0);
    },
    o(b) {
      N(r.$$.fragment, b), N(f), s = !1;
    },
    d(b) {
      b && v(t), u && u.d(), W(r), ~a && d[a].d();
    }
  };
}
function Yc(e) {
  let t, n, l, r, i, o, a, f, s = !!/*title*/
  e[1] && ko(e);
  l = new sr({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: Ct(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        e[0] ?? 1
      ],
      yScale: fr(),
      yDomain: ut(
        /*counts*/
        e[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        e[4]
      ) ? (
        /*colorScale*/
        e[4]
      ) : ut(0, 1.00001, 1 / /*data*/
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
      $$slots: { default: [l0] },
      $$scope: { ctx: e }
    }
  });
  const u = [o0, i0, r0], c = [];
  function d(m, b) {
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
      s && s.c(), t = P(), n = k("div"), U(l.$$.fragment), r = P(), i = k("div"), a && a.c(), le(
        n,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), le(n, "height", "6px"), g(n, "class", "rounded overflow-hidden mb-1"), g(i, "class", "text-xs text-gray-800 dark:text-gray-200");
    },
    m(m, b) {
      s && s.m(m, b), C(m, t, b), C(m, n, b), V(l, n, null), C(m, r, b), C(m, i, b), ~o && c[o].m(i, null), f = !0;
    },
    p(m, b) {
      /*title*/
      m[1] ? s ? s.p(m, b) : (s = ko(m), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null);
      const _ = {};
      b & /*width*/
      1 && (_.xRange = [
        0,
        /*width*/
        m[0] ?? 1
      ]), b & /*counts*/
      32 && (_.yDomain = ut(
        /*counts*/
        m[5].length
      )), b & /*colorScale, data*/
      80 && (_.yRange = Array.isArray(
        /*colorScale*/
        m[4]
      ) ? (
        /*colorScale*/
        m[4]
      ) : ut(0, 1.00001, 1 / /*data*/
      (m[6].length - 1)).map(
        /*func*/
        m[14]
      )), b & /*data*/
      64 && (_.data = /*data*/
      m[6]), b & /*hoveredIndex*/
      128 && (_.custom = { hoveredGet: (
        /*func_1*/
        m[15]
      ) }), b & /*$$scope, hoveredIndex*/
      524416 && (_.$$scope = { dirty: b, ctx: m }), l.$set(_), (!f || b & /*width*/
      1) && le(
        n,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let y = o;
      o = d(m), o === y ? ~o && c[o].p(m, b) : (a && (re(), N(c[y], 1, 1, () => {
        c[y] = null;
      }), ie()), ~o ? (a = c[o], a ? a.p(m, b) : (a = c[o] = u[o](m), a.c()), p(a, 1), a.m(i, null)) : a = null);
    },
    i(m) {
      f || (p(l.$$.fragment, m), p(a), f = !0);
    },
    o(m) {
      N(l.$$.fragment, m), N(a), f = !1;
    },
    d(m) {
      s && s.d(m), m && v(t), m && v(n), W(l), m && v(r), m && v(i), ~o && c[o].d();
    }
  };
}
function yo(e) {
  let t, n;
  return {
    c() {
      t = k("div"), n = G(
        /*title*/
        e[1]
      ), g(t, "class", "font-bold text-xs truncate text-right"), le(t, "width", "84px");
    },
    m(l, r) {
      C(l, t, r), h(t, n);
    },
    p(l, r) {
      r & /*title*/
      2 && oe(
        n,
        /*title*/
        l[1]
      );
    },
    d(l) {
      l && v(t);
    }
  };
}
function Jc(e) {
  let t, n;
  return t = new Ga({}), t.$on(
    "hover",
    /*hover_handler_1*/
    e[16]
  ), {
    c() {
      U(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p: Z,
    i(l) {
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function Zc(e) {
  let t, n;
  return t = new Ia({
    props: {
      $$slots: { default: [Jc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      U(t.$$.fragment);
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
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function $c(e) {
  let t, n = (
    /*makeTooltipText*/
    e[9](
      /*mostCommonDatum*/
      e[8]
    ) + ""
  ), l;
  return {
    c() {
      t = new lr(!1), l = _e(), t.a = l;
    },
    m(r, i) {
      t.m(n, r, i), C(r, l, i);
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
      r && v(l), r && t.d();
    }
  };
}
function e0(e) {
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
      t = new lr(!1), l = _e(), t.a = l;
    },
    m(r, i) {
      t.m(n, r, i), C(r, l, i);
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
      r && v(l), r && t.d();
    }
  };
}
function t0(e) {
  let t;
  const n = (
    /*#slots*/
    e[12].caption
  ), l = Ue(
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
      524288) && Ye(
        l,
        n,
        r,
        /*$$scope*/
        r[19],
        t ? Xe(
          n,
          /*$$scope*/
          r[19],
          i,
          Kc
        ) : Je(
          /*$$scope*/
          r[19]
        ),
        _o
      );
    },
    i(r) {
      t || (p(l, r), t = !0);
    },
    o(r) {
      N(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function ko(e) {
  let t, n;
  return {
    c() {
      t = k("div"), n = G(
        /*title*/
        e[1]
      ), g(t, "class", "font-bold text-xs truncate text-right");
    },
    m(l, r) {
      C(l, t, r), h(t, n);
    },
    p(l, r) {
      r & /*title*/
      2 && oe(
        n,
        /*title*/
        l[1]
      );
    },
    d(l) {
      l && v(t);
    }
  };
}
function n0(e) {
  let t, n;
  return t = new Ga({}), t.$on(
    "hover",
    /*hover_handler*/
    e[13]
  ), {
    c() {
      U(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p: Z,
    i(l) {
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function l0(e) {
  let t, n;
  return t = new Ia({
    props: {
      $$slots: { default: [n0] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      U(t.$$.fragment);
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
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function r0(e) {
  let t, n = (
    /*makeTooltipText*/
    e[9](
      /*mostCommonDatum*/
      e[8]
    ) + ""
  ), l;
  return {
    c() {
      t = new lr(!1), l = _e(), t.a = l;
    },
    m(r, i) {
      t.m(n, r, i), C(r, l, i);
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
      r && v(l), r && t.d();
    }
  };
}
function i0(e) {
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
      t = new lr(!1), l = _e(), t.a = l;
    },
    m(r, i) {
      t.m(n, r, i), C(r, l, i);
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
      r && v(l), r && t.d();
    }
  };
}
function o0(e) {
  let t;
  const n = (
    /*#slots*/
    e[12].caption
  ), l = Ue(
    n,
    e,
    /*$$scope*/
    e[19],
    ho
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
      524288) && Ye(
        l,
        n,
        r,
        /*$$scope*/
        r[19],
        t ? Xe(
          n,
          /*$$scope*/
          r[19],
          i,
          Uc
        ) : Je(
          /*$$scope*/
          r[19]
        ),
        ho
      );
    },
    i(r) {
      t || (p(l, r), t = !0);
    },
    o(r) {
      N(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function a0(e) {
  let t, n, l, r;
  const i = [Yc, Xc], o = [];
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
      o[t].m(f, s), C(f, l, s), r = !0;
    },
    p(f, [s]) {
      let u = t;
      t = a(f), t === u ? o[t].p(f, s) : (re(), N(o[u], 1, 1, () => {
        o[u] = null;
      }), ie(), n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), p(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      r || (p(n), r = !0);
    },
    o(f) {
      N(n), r = !1;
    },
    d(f) {
      o[t].d(f), f && v(l);
    }
  };
}
function f0(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = Ir(l);
  let { width: o = null } = t, { title: a = null } = t, { horizontalLayout: f = !1 } = t, { noParent: s = !1 } = t, { colorScale: u = Array.from(bs) } = t, { counts: c = null } = t, { order: d = [] } = t, m = [], b;
  Le(",");
  let _ = Le(".1~%"), y = 1;
  function M(A) {
    return `<strong>${_(A.count / y)}</strong> ${A.name}`;
  }
  let w = null;
  const S = (A) => n(7, b = A.detail ? A.detail.index : null), z = (A) => u(A), E = (A) => A.index == b, D = (A) => n(7, b = A.detail ? A.detail.index : null), I = (A) => u(A), j = (A) => A.index == b;
  return e.$$set = (A) => {
    "width" in A && n(0, o = A.width), "title" in A && n(1, a = A.title), "horizontalLayout" in A && n(2, f = A.horizontalLayout), "noParent" in A && n(3, s = A.noParent), "colorScale" in A && n(4, u = A.colorScale), "counts" in A && n(5, c = A.counts), "order" in A && n(11, d = A.order), "$$scope" in A && n(19, r = A.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*counts, order*/
    2080)
      if (c && d.length > 0) {
        let A = Object.values(c).reduce((R, T) => R + T, 0), q = 0;
        n(6, m = d.map((R, T) => {
          let ee = q;
          return q += c[R] || 0, {
            start: ee / A,
            end: q / A,
            index: T,
            name: R,
            count: c[R] || 0
          };
        }));
      } else
        n(6, m = []);
    e.$$.dirty & /*counts*/
    32 && (c ? y = Object.values(c).reduce((A, q) => A + q, 0) : y = 1), e.$$.dirty & /*data*/
    64 && (m.length > 0 ? n(8, w = m.reduce((A, q) => A.count > q.count ? A : q, m[0])) : n(8, w = null));
  }, [
    o,
    a,
    f,
    s,
    u,
    c,
    m,
    b,
    w,
    M,
    i,
    d,
    l,
    S,
    z,
    E,
    D,
    I,
    j,
    r
  ];
}
class s0 extends Ce {
  constructor(t) {
    super(), ve(this, t, f0, a0, pe, {
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
function An(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
An.prototype = {
  constructor: An,
  scale: function(e) {
    return e === 1 ? this : new An(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new An(this.k, this.x + this.k * e, this.y + this.k * t);
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
An.prototype;
function po(e) {
  let t, n, l, r;
  const i = [m0, d0, c0, u0], o = [];
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
      ~t && o[t].m(f, s), C(f, l, s), r = !0;
    },
    p(f, s) {
      let u = t;
      t = a(f), t === u ? ~t && o[t].p(f, s) : (n && (re(), N(o[u], 1, 1, () => {
        o[u] = null;
      }), ie()), ~t ? (n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), p(n, 1), n.m(l.parentNode, l)) : n = null);
    },
    i(f) {
      r || (p(n), r = !0);
    },
    o(f) {
      N(n), r = !1;
    },
    d(f) {
      ~t && o[t].d(f), f && v(l);
    }
  };
}
function u0(e) {
  let t, n;
  return t = new s0({
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
      U(t.$$.fragment);
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
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function c0(e) {
  let t, n;
  return t = new xc({
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
      U(t.$$.fragment);
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
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function d0(e) {
  let t, n;
  return t = new Kr({
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
      $$slots: { caption: [g0] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      U(t.$$.fragment);
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
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function m0(e) {
  let t, n;
  return t = new Kr({
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
      $$slots: { caption: [b0] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      U(t.$$.fragment);
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
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function g0(e) {
  let t, n, l = Le(",")(
    /*values*/
    e[0].count ?? 0
  ) + "", r, i, o = Le(",")(
    /*values*/
    e[0].total ?? 1
  ) + "", a;
  return {
    c() {
      t = k("span"), n = k("strong"), r = G(l), i = G(`
        / `), a = G(o), g(t, "slot", "caption");
    },
    m(f, s) {
      C(f, t, s), h(t, n), h(n, r), h(t, i), h(t, a);
    },
    p(f, s) {
      s & /*values*/
      1 && l !== (l = Le(",")(
        /*values*/
        f[0].count ?? 0
      ) + "") && oe(r, l), s & /*values*/
      1 && o !== (o = Le(",")(
        /*values*/
        f[0].total ?? 1
      ) + "") && oe(a, o);
    },
    d(f) {
      f && v(t);
    }
  };
}
function b0(e) {
  let t, n, l = Le(".1%")(
    /*values*/
    e[0].mean ?? 0
  ) + "", r, i, o, a = Le(".1%")(1 - /*values*/
  (e[0].mean ?? 0)) + "", f, s;
  return {
    c() {
      t = k("span"), n = k("strong"), r = G(l), i = G(`
        true,
        `), o = k("strong"), f = G(a), s = G(`
        false`), g(t, "slot", "caption");
    },
    m(u, c) {
      C(u, t, c), h(t, n), h(n, r), h(t, i), h(t, o), h(o, f), h(t, s);
    },
    p(u, c) {
      c & /*values*/
      1 && l !== (l = Le(".1%")(
        /*values*/
        u[0].mean ?? 0
      ) + "") && oe(r, l), c & /*values*/
      1 && a !== (a = Le(".1%")(1 - /*values*/
      (u[0].mean ?? 0)) + "") && oe(f, a);
    },
    d(u) {
      u && v(t);
    }
  };
}
function _0(e) {
  let t, n, l = !!/*values*/
  e[0] && po(e);
  return {
    c() {
      l && l.c(), t = _e();
    },
    m(r, i) {
      l && l.m(r, i), C(r, t, i), n = !0;
    },
    p(r, [i]) {
      /*values*/
      r[0] ? l ? (l.p(r, i), i & /*values*/
      1 && p(l, 1)) : (l = po(r), l.c(), p(l, 1), l.m(t.parentNode, t)) : l && (re(), N(l, 1, 1, () => {
        l = null;
      }), ie());
    },
    i(r) {
      n || (p(l), n = !0);
    },
    o(r) {
      N(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && v(t);
    }
  };
}
function h0(e, t, n) {
  let l;
  F(e, Ul, (o) => n(1, l = o)), Nt(() => {
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
class tn extends Ce {
  constructor(t) {
    super(), ve(this, t, h0, _0, pe, { values: 0 });
  }
}
function wo(e) {
  var be;
  let t, n, l, r, i = (
    /*values*/
    (e[0].type || "unknown") + ""
  ), o, a, f, s, u, c, d, m, b, _, y, M = (
    /*formatNumber*/
    e[4](
      /*values*/
      ((be = e[0].values) == null ? void 0 : be.length) ?? 0
    ) + ""
  ), w, S, z, E, D, I, j, A, q, R, T, ee, H;
  c = new ce({
    props: {
      icon: (
        /*showCountDetails*/
        e[1] ? Ze : Et
      ),
      class: "text-gray-500 dark:text-gray-300"
    }
  });
  let Q = (
    /*showCountDetails*/
    e[1] && vo(e)
  ), B = !!/*values*/
  e[0].missingness && /*values*/
  (e[0].missingness.rate.count ?? 0) > 0 && So(e), Y = (
    /*values*/
    e[0].types && Lo(e)
  );
  const ye = [k0, y0], te = [];
  function ue(se, ge) {
    var X;
    return (
      /*values*/
      (X = se[0].values) != null && X.type ? 0 : 1
    );
  }
  return q = ue(e), R = te[q] = ye[q](e), {
    c() {
      t = k("div"), n = k("span"), n.textContent = "Type:", l = P(), r = k("span"), o = G(i), a = P(), f = k("div"), s = k("div"), u = k("button"), U(c.$$.fragment), d = P(), m = k("div"), b = k("span"), b.textContent = "Count:", _ = P(), y = k("span"), w = G(M), S = P(), z = k("span"), z.textContent = "rows", E = P(), Q && Q.c(), D = P(), B && B.c(), I = P(), Y && Y.c(), j = P(), A = k("div"), R.c(), g(n, "class", "font-semibold"), g(r, "class", "font-mono"), g(t, "class", "text-sm text-gray-700 dark:text-gray-300 mb-4"), g(b, "class", "font-bold text-gray-900 dark:text-gray-100"), g(y, "class", "tabular-nums text-gray-700 dark:text-gray-200"), g(z, "class", "text-gray-500 dark:text-gray-400"), g(u, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), g(u, "aria-label", "Toggle count details"), g(s, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-base w-full rounded-md overflow-hidden"), g(A, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-2 text-base w-full rounded-md"), g(f, "class", "space-y-2");
    },
    m(se, ge) {
      C(se, t, ge), h(t, n), h(t, l), h(t, r), h(r, o), C(se, a, ge), C(se, f, ge), h(f, s), h(s, u), V(c, u, null), h(u, d), h(u, m), h(m, b), h(m, _), h(m, y), h(y, w), h(m, S), h(m, z), h(s, E), Q && Q.m(s, null), h(f, D), B && B.m(f, null), h(f, I), Y && Y.m(f, null), h(f, j), h(f, A), te[q].m(A, null), T = !0, ee || (H = x(
        u,
        "click",
        /*click_handler*/
        e[6]
      ), ee = !0);
    },
    p(se, ge) {
      var ne;
      (!T || ge & /*values*/
      1) && i !== (i = /*values*/
      (se[0].type || "unknown") + "") && oe(o, i);
      const X = {};
      ge & /*showCountDetails*/
      2 && (X.icon = /*showCountDetails*/
      se[1] ? Ze : Et), c.$set(X), (!T || ge & /*values*/
      1) && M !== (M = /*formatNumber*/
      se[4](
        /*values*/
        ((ne = se[0].values) == null ? void 0 : ne.length) ?? 0
      ) + "") && oe(w, M), /*showCountDetails*/
      se[1] ? Q ? (Q.p(se, ge), ge & /*showCountDetails*/
      2 && p(Q, 1)) : (Q = vo(se), Q.c(), p(Q, 1), Q.m(s, null)) : Q && (re(), N(Q, 1, 1, () => {
        Q = null;
      }), ie()), /*values*/
      se[0].missingness && /*values*/
      (se[0].missingness.rate.count ?? 0) > 0 ? B ? (B.p(se, ge), ge & /*values*/
      1 && p(B, 1)) : (B = So(se), B.c(), p(B, 1), B.m(f, I)) : B && (re(), N(B, 1, 1, () => {
        B = null;
      }), ie()), /*values*/
      se[0].types ? Y ? (Y.p(se, ge), ge & /*values*/
      1 && p(Y, 1)) : (Y = Lo(se), Y.c(), p(Y, 1), Y.m(f, j)) : Y && (re(), N(Y, 1, 1, () => {
        Y = null;
      }), ie());
      let ae = q;
      q = ue(se), q === ae ? te[q].p(se, ge) : (re(), N(te[ae], 1, 1, () => {
        te[ae] = null;
      }), ie(), R = te[q], R ? R.p(se, ge) : (R = te[q] = ye[q](se), R.c()), p(R, 1), R.m(A, null));
    },
    i(se) {
      T || (p(c.$$.fragment, se), p(Q), p(B), p(Y), p(R), T = !0);
    },
    o(se) {
      N(c.$$.fragment, se), N(Q), N(B), N(Y), N(R), T = !1;
    },
    d(se) {
      se && v(t), se && v(a), se && v(f), W(c), Q && Q.d(), B && B.d(), Y && Y.d(), te[q].d(), ee = !1, H();
    }
  };
}
function vo(e) {
  let t, n, l = (
    /*values*/
    e[0].ids && Co(e)
  );
  return {
    c() {
      t = k("div"), l && l.c(), g(t, "class", "mx-2 px-2 py-2");
    },
    m(r, i) {
      C(r, t, i), l && l.m(t, null), n = !0;
    },
    p(r, i) {
      /*values*/
      r[0].ids ? l ? (l.p(r, i), i & /*values*/
      1 && p(l, 1)) : (l = Co(r), l.c(), p(l, 1), l.m(t, null)) : l && (re(), N(l, 1, 1, () => {
        l = null;
      }), ie());
    },
    i(r) {
      n || (p(l), n = !0);
    },
    o(r) {
      N(l), n = !1;
    },
    d(r) {
      r && v(t), l && l.d();
    }
  };
}
function Co(e) {
  let t, n, l, r, i, o, a, f, s, u;
  return r = new tn({
    props: { values: (
      /*values*/
      e[0].ids.count
    ) }
  }), s = new tn({
    props: {
      values: (
        /*values*/
        e[0].ids.count_per_trajectory
      )
    }
  }), {
    c() {
      t = k("div"), t.textContent = "Trajectories", n = P(), l = k("div"), U(r.$$.fragment), i = P(), o = k("div"), o.textContent = "Timesteps per Trajectory", a = P(), f = k("div"), U(s.$$.fragment), g(t, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), g(l, "class", "mb-2"), g(o, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), g(f, "class", "mb-2");
    },
    m(c, d) {
      C(c, t, d), C(c, n, d), C(c, l, d), V(r, l, null), C(c, i, d), C(c, o, d), C(c, a, d), C(c, f, d), V(s, f, null), u = !0;
    },
    p(c, d) {
      const m = {};
      d & /*values*/
      1 && (m.values = /*values*/
      c[0].ids.count), r.$set(m);
      const b = {};
      d & /*values*/
      1 && (b.values = /*values*/
      c[0].ids.count_per_trajectory), s.$set(b);
    },
    i(c) {
      u || (p(r.$$.fragment, c), p(s.$$.fragment, c), u = !0);
    },
    o(c) {
      N(r.$$.fragment, c), N(s.$$.fragment, c), u = !1;
    },
    d(c) {
      c && v(t), c && v(n), c && v(l), W(r), c && v(i), c && v(o), c && v(a), c && v(f), W(s);
    }
  };
}
function So(e) {
  let t, n, l, r, i, o, a, f, s = (
    /*formatPercent*/
    e[5](
      /*values*/
      (e[0].missingness.rate.count ?? 0) / /*values*/
      (e[0].missingness.rate.total ?? 1)
    ) + ""
  ), u, c, d, m, b, _, y;
  l = new ce({
    props: {
      icon: (
        /*showMissingnessDetails*/
        e[2] ? Ze : Et
      ),
      class: "text-gray-500 dark:text-gray-300"
    }
  });
  let M = (
    /*showMissingnessDetails*/
    e[2] && No(e)
  );
  return {
    c() {
      t = k("div"), n = k("button"), U(l.$$.fragment), r = P(), i = k("div"), o = k("span"), o.textContent = "Missingness:", a = P(), f = k("span"), u = G(s), c = P(), d = k("span"), d.textContent = "of rows", m = P(), M && M.c(), g(o, "class", "font-bold text-gray-900 dark:text-gray-100"), g(f, "class", "tabular-nums text-gray-700 dark:text-gray-200"), g(d, "class", "text-gray-500 dark:text-gray-400"), g(n, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), g(n, "aria-label", "Toggle missingness details"), g(t, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-base w-full rounded-md overflow-hidden");
    },
    m(w, S) {
      C(w, t, S), h(t, n), V(l, n, null), h(n, r), h(n, i), h(i, o), h(i, a), h(i, f), h(f, u), h(i, c), h(i, d), h(t, m), M && M.m(t, null), b = !0, _ || (y = x(
        n,
        "click",
        /*click_handler_1*/
        e[7]
      ), _ = !0);
    },
    p(w, S) {
      const z = {};
      S & /*showMissingnessDetails*/
      4 && (z.icon = /*showMissingnessDetails*/
      w[2] ? Ze : Et), l.$set(z), (!b || S & /*values*/
      1) && s !== (s = /*formatPercent*/
      w[5](
        /*values*/
        (w[0].missingness.rate.count ?? 0) / /*values*/
        (w[0].missingness.rate.total ?? 1)
      ) + "") && oe(u, s), /*showMissingnessDetails*/
      w[2] ? M ? (M.p(w, S), S & /*showMissingnessDetails*/
      4 && p(M, 1)) : (M = No(w), M.c(), p(M, 1), M.m(t, null)) : M && (re(), N(M, 1, 1, () => {
        M = null;
      }), ie());
    },
    i(w) {
      b || (p(l.$$.fragment, w), p(M), b = !0);
    },
    o(w) {
      N(l.$$.fragment, w), N(M), b = !1;
    },
    d(w) {
      w && v(t), W(l), M && M.d(), _ = !1, y();
    }
  };
}
function No(e) {
  let t, n, l = (
    /*values*/
    e[0].missingness && Mo(e)
  );
  return {
    c() {
      t = k("div"), l && l.c(), g(t, "class", "mx-2 px-2 py-2");
    },
    m(r, i) {
      C(r, t, i), l && l.m(t, null), n = !0;
    },
    p(r, i) {
      /*values*/
      r[0].missingness ? l ? (l.p(r, i), i & /*values*/
      1 && p(l, 1)) : (l = Mo(r), l.c(), p(l, 1), l.m(t, null)) : l && (re(), N(l, 1, 1, () => {
        l = null;
      }), ie());
    },
    i(r) {
      n || (p(l), n = !0);
    },
    o(r) {
      N(l), n = !1;
    },
    d(r) {
      r && v(t), l && l.d();
    }
  };
}
function Mo(e) {
  let t, n, l, r, i, o, a, f, s, u;
  return r = new tn({
    props: {
      values: (
        /*values*/
        e[0].missingness.rate
      )
    }
  }), s = new tn({
    props: {
      values: (
        /*values*/
        e[0].missingness.rate_per_trajectory
      )
    }
  }), {
    c() {
      t = k("div"), t.textContent = "Number of Missing Values", n = P(), l = k("div"), U(r.$$.fragment), i = P(), o = k("div"), o.textContent = "Missingness Rate per Trajectory", a = P(), f = k("div"), U(s.$$.fragment), g(t, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), g(l, "class", "mb-2"), g(o, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), g(f, "class", "mb-2");
    },
    m(c, d) {
      C(c, t, d), C(c, n, d), C(c, l, d), V(r, l, null), C(c, i, d), C(c, o, d), C(c, a, d), C(c, f, d), V(s, f, null), u = !0;
    },
    p(c, d) {
      const m = {};
      d & /*values*/
      1 && (m.values = /*values*/
      c[0].missingness.rate), r.$set(m);
      const b = {};
      d & /*values*/
      1 && (b.values = /*values*/
      c[0].missingness.rate_per_trajectory), s.$set(b);
    },
    i(c) {
      u || (p(r.$$.fragment, c), p(s.$$.fragment, c), u = !0);
    },
    o(c) {
      N(r.$$.fragment, c), N(s.$$.fragment, c), u = !1;
    },
    d(c) {
      c && v(t), c && v(n), c && v(l), W(r), c && v(i), c && v(o), c && v(a), c && v(f), W(s);
    }
  };
}
function Lo(e) {
  let t, n, l, r, i, o, a, f, s = (
    /*formatNumber*/
    e[4](Object.keys(
      /*values*/
      e[0].types.counts
    ).length ?? 0) + ""
  ), u, c, d, m, b, _, y;
  l = new ce({
    props: {
      icon: (
        /*showTypeDetails*/
        e[3] ? Ze : Et
      ),
      class: "text-gray-500 dark:text-gray-300"
    }
  });
  let M = (
    /*showTypeDetails*/
    e[3] && zo(e)
  );
  return {
    c() {
      t = k("div"), n = k("button"), U(l.$$.fragment), r = P(), i = k("div"), o = k("span"), o.textContent = "Data Elements:", a = P(), f = k("span"), u = G(s), c = P(), d = k("span"), d.textContent = "distinct elements", m = P(), M && M.c(), g(o, "class", "font-bold text-gray-900 dark:text-gray-100"), g(f, "class", "tabular-nums text-gray-700 dark:text-gray-200"), g(d, "class", "text-gray-500 dark:text-gray-400"), g(n, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), g(n, "aria-label", "Toggle type details"), g(t, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-base w-full rounded-md");
    },
    m(w, S) {
      C(w, t, S), h(t, n), V(l, n, null), h(n, r), h(n, i), h(i, o), h(i, a), h(i, f), h(f, u), h(i, c), h(i, d), h(t, m), M && M.m(t, null), b = !0, _ || (y = x(
        n,
        "click",
        /*click_handler_2*/
        e[8]
      ), _ = !0);
    },
    p(w, S) {
      const z = {};
      S & /*showTypeDetails*/
      8 && (z.icon = /*showTypeDetails*/
      w[3] ? Ze : Et), l.$set(z), (!b || S & /*values*/
      1) && s !== (s = /*formatNumber*/
      w[4](Object.keys(
        /*values*/
        w[0].types.counts
      ).length ?? 0) + "") && oe(u, s), /*showTypeDetails*/
      w[3] ? M ? (M.p(w, S), S & /*showTypeDetails*/
      8 && p(M, 1)) : (M = zo(w), M.c(), p(M, 1), M.m(t, null)) : M && (re(), N(M, 1, 1, () => {
        M = null;
      }), ie());
    },
    i(w) {
      b || (p(l.$$.fragment, w), p(M), b = !0);
    },
    o(w) {
      N(l.$$.fragment, w), N(M), b = !1;
    },
    d(w) {
      w && v(t), W(l), M && M.d(), _ = !1, y();
    }
  };
}
function zo(e) {
  let t, n, l;
  return n = new tn({
    props: { values: (
      /*values*/
      e[0].types
    ) }
  }), {
    c() {
      t = k("div"), U(n.$$.fragment), g(t, "class", "mx-2 px-2 py-2");
    },
    m(r, i) {
      C(r, t, i), V(n, t, null), l = !0;
    },
    p(r, i) {
      const o = {};
      i & /*values*/
      1 && (o.values = /*values*/
      r[0].types), n.$set(o);
    },
    i(r) {
      l || (p(n.$$.fragment, r), l = !0);
    },
    o(r) {
      N(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && v(t), W(n);
    }
  };
}
function y0(e) {
  let t;
  return {
    c() {
      t = k("div"), t.innerHTML = 'Values: <span class="font-normal text-gray-500 dark:text-gray-400">none</span>', g(t, "class", "text-sm font-bold text-gray-900 dark:text-gray-100 mr-2");
    },
    m(n, l) {
      C(n, t, l);
    },
    p: Z,
    i: Z,
    o: Z,
    d(n) {
      n && v(t);
    }
  };
}
function k0(e) {
  let t, n, l, r;
  return l = new tn({
    props: { values: (
      /*values*/
      e[0].values
    ) }
  }), {
    c() {
      t = k("div"), t.textContent = "Values:", n = P(), U(l.$$.fragment), g(t, "class", "mb-2 text-sm font-bold text-gray-900 dark:text-gray-100 mr-2");
    },
    m(i, o) {
      C(i, t, o), C(i, n, o), V(l, i, o), r = !0;
    },
    p(i, o) {
      const a = {};
      o & /*values*/
      1 && (a.values = /*values*/
      i[0].values), l.$set(a);
    },
    i(i) {
      r || (p(l.$$.fragment, i), r = !0);
    },
    o(i) {
      N(l.$$.fragment, i), r = !1;
    },
    d(i) {
      i && v(t), i && v(n), W(l, i);
    }
  };
}
function p0(e) {
  let t, n, l = (
    /*values*/
    e[0] && /*values*/
    (e[0].ids || /*values*/
    e[0].missingness || /*values*/
    e[0].values) && wo(e)
  );
  return {
    c() {
      l && l.c(), t = _e();
    },
    m(r, i) {
      l && l.m(r, i), C(r, t, i), n = !0;
    },
    p(r, [i]) {
      /*values*/
      r[0] && /*values*/
      (r[0].ids || /*values*/
      r[0].missingness || /*values*/
      r[0].values) ? l ? (l.p(r, i), i & /*values*/
      1 && p(l, 1)) : (l = wo(r), l.c(), p(l, 1), l.m(t.parentNode, t)) : l && (re(), N(l, 1, 1, () => {
        l = null;
      }), ie());
    },
    i(r) {
      n || (p(l), n = !0);
    },
    o(r) {
      N(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && v(t);
    }
  };
}
function w0(e, t, n) {
  let { values: l = null } = t, r = !1, i = !1, o = !1;
  const a = Le(","), f = Le(".2~%"), s = () => n(1, r = !r), u = () => n(2, i = !i), c = () => n(3, o = !o);
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
class xa extends Ce {
  constructor(t) {
    super(), ve(this, t, w0, p0, pe, { values: 0 });
  }
}
function Ro(e, t, n) {
  const l = e.slice();
  return l[4] = t[n], l;
}
function qo(e) {
  let t, n, l, r, i;
  n = new xa({
    props: { values: (
      /*data*/
      e[1].result
    ) }
  });
  let o = (
    /*data*/
    e[1].dataset_queries && /*data*/
    e[1].dataset_queries.length > 0 && Eo(e)
  );
  return {
    c() {
      t = k("div"), U(n.$$.fragment), l = P(), o && o.c(), r = _e(), g(t, "class", "p-4 border-t border-gray-200 dark:border-gray-700");
    },
    m(a, f) {
      C(a, t, f), V(n, t, null), C(a, l, f), o && o.m(a, f), C(a, r, f), i = !0;
    },
    p(a, f) {
      const s = {};
      f & /*data*/
      2 && (s.values = /*data*/
      a[1].result), n.$set(s), /*data*/
      a[1].dataset_queries && /*data*/
      a[1].dataset_queries.length > 0 ? o ? o.p(a, f) : (o = Eo(a), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
    },
    i(a) {
      i || (p(n.$$.fragment, a), i = !0);
    },
    o(a) {
      N(n.$$.fragment, a), i = !1;
    },
    d(a) {
      a && v(t), W(n), a && v(l), o && o.d(a), a && v(r);
    }
  };
}
function Eo(e) {
  let t, n, l, r = (
    /*data*/
    e[1].dataset_queries
  ), i = [];
  for (let o = 0; o < r.length; o += 1)
    i[o] = Do(Ro(e, r, o));
  return {
    c() {
      t = k("div"), n = k("div"), n.textContent = "SQL Queries", l = P();
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      g(n, "class", "text-xs font-semibold text-gray-500 mb-1 uppercase"), g(t, "class", "p-4 border-t border-gray-200 dark:border-gray-700");
    },
    m(o, a) {
      C(o, t, a), h(t, n), h(t, l);
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
          i[f] ? i[f].p(s, a) : (i[f] = Do(s), i[f].c(), i[f].m(t, null));
        }
        for (; f < i.length; f += 1)
          i[f].d(1);
        i.length = r.length;
      }
    },
    d(o) {
      o && v(t), Ge(i, o);
    }
  };
}
function Do(e) {
  let t, n = (
    /*sql*/
    e[4] + ""
  ), l;
  return {
    c() {
      t = k("pre"), l = G(n), g(t, "class", "bg-white dark:bg-gray-900 text-xs font-mono p-2 rounded");
    },
    m(r, i) {
      C(r, t, i), h(t, l);
    },
    p(r, i) {
      i & /*data*/
      2 && n !== (n = /*sql*/
      r[4] + "") && oe(l, n);
    },
    d(r) {
      r && v(t);
    }
  };
}
function v0(e) {
  let t, n, l, r, i, o, a, f, s, u, c;
  a = new ce({
    props: {
      icon: (
        /*isExpanded*/
        e[2] ? Kl : Ze
      ),
      class: "text-gray-600 dark:text-gray-300 shrink-0"
    }
  });
  let d = (
    /*isExpanded*/
    e[2] && qo(e)
  );
  return {
    c() {
      t = k("div"), n = k("button"), l = k("div"), r = G(
        /*queryText*/
        e[0]
      ), o = P(), U(a.$$.fragment), f = P(), d && d.c(), g(l, "class", i = "text-sm font-mono text-gray-700 dark:text-gray-300 flex-auto w-0 " + /*isExpanded*/
      (e[2] ? "whitespace-normal" : "truncate")), g(n, "class", "block w-full px-3 py-2 text-left flex items-center justify-between bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none"), g(t, "class", "border border-gray-300 dark:border-gray-600 rounded-md mb-2 overflow-hidden");
    },
    m(m, b) {
      C(m, t, b), h(t, n), h(n, l), h(l, r), h(n, o), V(a, n, null), h(t, f), d && d.m(t, null), s = !0, u || (c = x(
        n,
        "click",
        /*toggleExpanded*/
        e[3]
      ), u = !0);
    },
    p(m, [b]) {
      (!s || b & /*queryText*/
      1) && oe(
        r,
        /*queryText*/
        m[0]
      ), (!s || b & /*isExpanded*/
      4 && i !== (i = "text-sm font-mono text-gray-700 dark:text-gray-300 flex-auto w-0 " + /*isExpanded*/
      (m[2] ? "whitespace-normal" : "truncate"))) && g(l, "class", i);
      const _ = {};
      b & /*isExpanded*/
      4 && (_.icon = /*isExpanded*/
      m[2] ? Kl : Ze), a.$set(_), /*isExpanded*/
      m[2] ? d ? (d.p(m, b), b & /*isExpanded*/
      4 && p(d, 1)) : (d = qo(m), d.c(), p(d, 1), d.m(t, null)) : d && (re(), N(d, 1, 1, () => {
        d = null;
      }), ie());
    },
    i(m) {
      s || (p(a.$$.fragment, m), p(d), s = !0);
    },
    o(m) {
      N(a.$$.fragment, m), N(d), s = !1;
    },
    d(m) {
      m && v(t), W(a), d && d.d(), u = !1, c();
    }
  };
}
function C0(e, t, n) {
  let { queryText: l } = t, { data: r } = t, i = !1;
  function o() {
    n(2, i = !i);
  }
  return e.$$set = (a) => {
    "queryText" in a && n(0, l = a.queryText), "data" in a && n(1, r = a.data);
  }, [l, r, i, o];
}
class S0 extends Ce {
  constructor(t) {
    super(), ve(this, t, C0, v0, pe, { queryText: 0, data: 1 });
  }
}
function Ao(e, t, n) {
  const l = e.slice();
  return l[5] = t[n][0], l[6] = t[n][1], l;
}
function To(e) {
  let t, n, l, r, i;
  const o = [M0, N0], a = [];
  function f(s, u) {
    return u & /*subqueries*/
    4 && (n = null), n == null && (n = Object.keys(
      /*subqueries*/
      s[2]
    ).length > 0), n ? 0 : 1;
  }
  return l = f(e, -1), r = a[l] = o[l](e), {
    c() {
      t = k("div"), r.c(), g(t, "class", "space-y-2 mt-3");
    },
    m(s, u) {
      C(s, t, u), a[l].m(t, null), i = !0;
    },
    p(s, u) {
      let c = l;
      l = f(s, u), l === c ? a[l].p(s, u) : (re(), N(a[c], 1, 1, () => {
        a[c] = null;
      }), ie(), r = a[l], r ? r.p(s, u) : (r = a[l] = o[l](s), r.c()), p(r, 1), r.m(t, null));
    },
    i(s) {
      i || (p(r), i = !0);
    },
    o(s) {
      N(r), i = !1;
    },
    d(s) {
      s && v(t), a[l].d();
    }
  };
}
function N0(e) {
  let t;
  return {
    c() {
      t = k("div"), t.textContent = "No subqueries yet", g(t, "class", "text-center py-8 text-gray-900 dark:text-gray-100");
    },
    m(n, l) {
      C(n, t, l);
    },
    p: Z,
    i: Z,
    o: Z,
    d(n) {
      n && v(t);
    }
  };
}
function M0(e) {
  let t, n, l = Object.entries(
    /*subqueries*/
    e[2]
  ), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = Po(Ao(e, l, o));
  const i = (o) => N(r[o], 1, 1, () => {
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
      C(o, t, a), n = !0;
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
          const s = Ao(o, l, f);
          r[f] ? (r[f].p(s, a), p(r[f], 1)) : (r[f] = Po(s), r[f].c(), p(r[f], 1), r[f].m(t.parentNode, t));
        }
        for (re(), f = l.length; f < r.length; f += 1)
          i(f);
        ie();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < l.length; a += 1)
          p(r[a]);
        n = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1)
        N(r[a]);
      n = !1;
    },
    d(o) {
      Ge(r, o), o && v(t);
    }
  };
}
function Po(e) {
  let t, n;
  return t = new S0({
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
      U(t.$$.fragment);
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
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function L0(e) {
  let t, n, l, r, i, o, a, f, s, u, c;
  o = new ce({
    props: {
      icon: (
        /*enabled*/
        e[0] ? Kl : Ze
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
      t = k("div"), n = k("button"), l = k("h3"), l.textContent = "Subqueries", r = P(), i = k("div"), U(o.$$.fragment), a = P(), d && d.c(), g(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100"), g(i, "class", "p-2 text-gray-800 dark:text-gray-200"), g(n, "class", "block flex items-center justify-between mb-2 bg-transparent hover:opacity-50"), g(t, "class", f = "p-2 mb-0 border-0 rounded-none " + /*width*/
      e[1] + " transition-colors duration-200"), fe(t, "opacity-50", Object.keys(
        /*subqueries*/
        e[2]
      ).length == 0);
    },
    m(m, b) {
      C(m, t, b), h(t, n), h(n, l), h(n, r), h(n, i), V(o, i, null), h(t, a), d && d.m(t, null), s = !0, u || (c = x(
        n,
        "click",
        /*click_handler*/
        e[4]
      ), u = !0);
    },
    p(m, [b]) {
      const _ = {};
      b & /*enabled*/
      1 && (_.icon = /*enabled*/
      m[0] ? Kl : Ze), o.$set(_), /*enabled*/
      m[0] ? d ? (d.p(m, b), b & /*enabled*/
      1 && p(d, 1)) : (d = To(m), d.c(), p(d, 1), d.m(t, null)) : d && (re(), N(d, 1, 1, () => {
        d = null;
      }), ie()), (!s || b & /*width*/
      2 && f !== (f = "p-2 mb-0 border-0 rounded-none " + /*width*/
      m[1] + " transition-colors duration-200")) && g(t, "class", f), (!s || b & /*width, Object, subqueries*/
      6) && fe(t, "opacity-50", Object.keys(
        /*subqueries*/
        m[2]
      ).length == 0);
    },
    i(m) {
      s || (p(o.$$.fragment, m), p(d), s = !0);
    },
    o(m) {
      N(o.$$.fragment, m), N(d), s = !1;
    },
    d(m) {
      m && v(t), W(o), d && d.d(), u = !1, c();
    }
  };
}
function z0(e, t, n) {
  let { width: l = "w-full max-w-2xl" } = t, { enabled: r = !1 } = t, { subqueries: i = {} } = t, { idsLength: o = 0 } = t;
  const a = () => n(0, r = !r);
  return e.$$set = (f) => {
    "width" in f && n(1, l = f.width), "enabled" in f && n(0, r = f.enabled), "subqueries" in f && n(2, i = f.subqueries), "idsLength" in f && n(3, o = f.idsLength);
  }, e.$$.update = () => {
    e.$$.dirty & /*subqueries, enabled*/
    5 && (console.log("🔍 SubquerySection - subqueries changed:", i), console.log("🔍 SubquerySection - enabled:", r), console.log("🔍 SubquerySection - subqueries keys:", Object.keys(i)));
  }, [r, l, i, o, a];
}
class R0 extends Ce {
  constructor(t) {
    super(), ve(this, t, z0, L0, pe, {
      width: 1,
      enabled: 0,
      subqueries: 2,
      idsLength: 3
    });
  }
}
function q0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Va = { exports: {} };
(function(e, t) {
  (function() {
    function n(i, o, a) {
      var f = null, s = null, u = null, c = null;
      if (a = a || "", !o.length)
        return a || "";
      if (i.some(function(m) {
        m.name;
        var b = m.match instanceof RegExp, _ = b ? m.match : m.match[0], y = b ? null : m.match[1] || null, M = b ? null : m.match[2] || null;
        return f = o.match(_), s = f ? m.name : null, u = y, c = M, !!f;
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
`).map(function(b, _) {
          if (!_)
            return b;
          var y = _ - 1 + "";
          return y.length < 2 && (y = "0" + y), '<span class="linenum">' + y + "</span> " + b;
        }).join(`
`)), s.innerHTML = m;
      });
    }
    e.exports = r;
  })();
})(Va);
var E0 = Va.exports;
const Wa = /* @__PURE__ */ q0(E0), Ka = [
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
function Ua(e) {
  return e = e.replaceAll(/<([A-z]+?)>/g, "####TOKEN####$1####ENDTOKEN####"), e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function D0(e) {
  let t, n;
  return t = new ce({ props: { icon: rr } }), {
    c() {
      U(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p: Z,
    i(l) {
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function A0(e) {
  let t, n;
  return t = new ce({ props: { icon: jf } }), {
    c() {
      U(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p: Z,
    i(l) {
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function T0(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b;
  const _ = [A0, D0], y = [];
  function M(w, S) {
    return (
      /*copied*/
      w[3] ? 0 : 1
    );
  }
  return r = M(e), i = y[r] = _[r](e), f = new ce({ props: { icon: qf } }), {
    c() {
      t = k("div"), n = k("div"), l = k("button"), i.c(), o = P(), a = k("button"), U(f.$$.fragment), s = P(), u = k("code"), c = G(
        /*content*/
        e[0]
      ), g(l, "class", "p-2 hover:opacity-50 text-gray-700 dark:text-gray-200 text-sm"), g(l, "title", "Copy"), g(a, "class", "p-2 hover:opacity-50 text-gray-700 dark:text-gray-200 text-sm"), g(a, "title", "Run this query"), g(n, "class", "flex items-center absolute right-0 top-0 mr-2 mt-2"), g(u, "class", "font-mono whitespace-pre-line"), g(
        u,
        "id",
        /*highlightedViewID*/
        e[4]
      ), g(t, "class", "bg-gray-100 dark:bg-gray-800 rounded-md my-2 p-4 pr-12 relative text-gray-900 dark:text-gray-100");
    },
    m(w, S) {
      C(w, t, S), h(t, n), h(n, l), y[r].m(l, null), h(n, o), h(n, a), V(f, a, null), h(t, s), h(t, u), h(u, c), e[8](u), d = !0, m || (b = [
        x(
          l,
          "click",
          /*click_handler*/
          e[6]
        ),
        x(
          a,
          "click",
          /*click_handler_1*/
          e[7]
        )
      ], m = !0);
    },
    p(w, [S]) {
      let z = r;
      r = M(w), r === z ? y[r].p(w, S) : (re(), N(y[z], 1, 1, () => {
        y[z] = null;
      }), ie(), i = y[r], i ? i.p(w, S) : (i = y[r] = _[r](w), i.c()), p(i, 1), i.m(l, null)), (!d || S & /*content*/
      1) && oe(
        c,
        /*content*/
        w[0]
      );
    },
    i(w) {
      d || (p(i), p(f.$$.fragment, w), d = !0);
    },
    o(w) {
      N(i), N(f.$$.fragment, w), d = !1;
    },
    d(w) {
      w && v(t), y[r].d(), W(f), e[8](null), m = !1, we(b);
    }
  };
}
function P0(e, t, n) {
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
    Se[d ? "unshift" : "push"](() => {
      o = d, n(2, o), n(0, l), n(4, i);
    });
  }
  return e.$$set = (d) => {
    "content" in d && n(0, l = d.content), "onRun" in d && n(1, r = d.onRun);
  }, e.$$.update = () => {
    e.$$.dirty & /*highlightView, content*/
    5 && o && l && (n(2, o.innerText = Ua(l), o), Wa({
      selector: `#${i}`,
      patterns: Ka
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
class Q0 extends Ce {
  constructor(t) {
    super(), ve(this, t, P0, T0, pe, { content: 0, onRun: 1 });
  }
}
function Qo(e, t, n) {
  const l = e.slice();
  return l[7] = t[n], l[9] = n, l;
}
function j0(e) {
  let t, n = Io(
    /*block*/
    e[7].content
  ) + "";
  return {
    c() {
      t = k("div"), g(t, "class", "leading-relaxed mb-2");
    },
    m(l, r) {
      C(l, t, r), t.innerHTML = n;
    },
    p(l, r) {
      r & /*blocks*/
      8 && n !== (n = Io(
        /*block*/
        l[7].content
      ) + "") && (t.innerHTML = n);
    },
    i: Z,
    o: Z,
    d(l) {
      l && v(t);
    }
  };
}
function O0(e) {
  let t, n;
  return t = new Q0({
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
      U(t.$$.fragment);
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
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function jo(e) {
  let t, n, l, r;
  const i = [O0, j0], o = [];
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
      o[t].m(f, s), C(f, l, s), r = !0;
    },
    p(f, s) {
      let u = t;
      t = a(f), t === u ? o[t].p(f, s) : (re(), N(o[u], 1, 1, () => {
        o[u] = null;
      }), ie(), n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), p(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      r || (p(n), r = !0);
    },
    o(f) {
      N(n), r = !1;
    },
    d(f) {
      o[t].d(f), f && v(l);
    }
  };
}
function Oo(e) {
  let t, n, l = /*collapsed*/ e[1] ? "More" : "Less", r, i, o;
  return {
    c() {
      t = k("div"), n = k("a"), r = G(l), g(n, "class", "text-blue-600 dark:text-blue-400 hover:opacity-50 text-sm"), g(n, "href", "#");
    },
    m(a, f) {
      C(a, t, f), h(t, n), h(n, r), i || (o = x(
        n,
        "click",
        /*click_handler*/
        e[6]
      ), i = !0);
    },
    p(a, f) {
      f & /*collapsed*/
      2 && l !== (l = /*collapsed*/
      a[1] ? "More" : "Less") && oe(r, l);
    },
    d(a) {
      a && v(t), i = !1, o();
    }
  };
}
function I0(e) {
  let t, n, l, r = (
    /*blocks*/
    e[3]
  ), i = [];
  for (let f = 0; f < r.length; f += 1)
    i[f] = jo(Qo(e, r, f));
  const o = (f) => N(i[f], 1, 1, () => {
    i[f] = null;
  });
  let a = (
    /*collapsible*/
    e[2] && Oo(e)
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
      C(f, t, s), a && a.m(f, s), C(f, n, s), l = !0;
    },
    p(f, [s]) {
      if (s & /*blocks, onRun, formatMarkdown*/
      9) {
        r = /*blocks*/
        f[3];
        let u;
        for (u = 0; u < r.length; u += 1) {
          const c = Qo(f, r, u);
          i[u] ? (i[u].p(c, s), p(i[u], 1)) : (i[u] = jo(c), i[u].c(), p(i[u], 1), i[u].m(t.parentNode, t));
        }
        for (re(), u = r.length; u < i.length; u += 1)
          o(u);
        ie();
      }
      /*collapsible*/
      f[2] ? a ? a.p(f, s) : (a = Oo(f), a.c(), a.m(n.parentNode, n)) : a && (a.d(1), a = null);
    },
    i(f) {
      if (!l) {
        for (let s = 0; s < r.length; s += 1)
          p(i[s]);
        l = !0;
      }
    },
    o(f) {
      i = i.filter(Boolean);
      for (let s = 0; s < i.length; s += 1)
        N(i[s]);
      l = !1;
    },
    d(f) {
      Ge(i, f), f && v(t), a && a.d(f), f && v(n);
    }
  };
}
function H0(e) {
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
function Io(e) {
  let t = e;
  return t = t.replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\*\*([^\*\n]+)(\*\*|$)/g, "<strong>$1</strong>").replace(/\*([^\*\n]+)\*/g, "<em>$1</em>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>'), t = t.replace(new RegExp("(?<!<\\/[ou]l>)\\n", "g"), "<br>"), t;
}
function B0(e, t, n) {
  let l, { text: r } = t, { collapseLength: i = null } = t, { onRun: o = () => {
  } } = t, a = [], f = !1;
  const s = () => n(1, f = !f);
  return e.$$set = (u) => {
    "text" in u && n(4, r = u.text), "collapseLength" in u && n(5, i = u.collapseLength), "onRun" in u && n(0, o = u.onRun);
  }, e.$$.update = () => {
    e.$$.dirty & /*collapseLength, text*/
    48 && n(2, l = !!i && r.length > i), e.$$.dirty & /*text*/
    16 && n(1, f = !1), e.$$.dirty & /*collapsible, collapsed, text, collapseLength*/
    54 && n(3, a = H0(l && f ? r.slice(0, i) + "..." : r));
  }, [o, f, l, a, r, i, s];
}
class Xa extends Ce {
  constructor(t) {
    super(), ve(this, t, B0, I0, pe, { text: 4, collapseLength: 5, onRun: 0 });
  }
}
function Ho(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = k("div"), n = k("h3"), n.textContent = "Query Error", l = P(), r = k("div"), i = G(
        /*queryError*/
        e[4]
      ), g(n, "class", "text-lg font-medium text-red-700 dark:text-red-100 mb-2"), g(r, "class", "text-sm font-mono text-gray-800 dark:text-gray-100"), g(t, "class", "bg-red-50 dark:bg-red-800/40 rounded-lg border border-red-200 dark:border-red-400 p-4 mb-4");
    },
    m(o, a) {
      C(o, t, a), h(t, n), h(t, l), h(t, r), h(r, i);
    },
    p(o, a) {
      a & /*queryError*/
      16 && oe(
        i,
        /*queryError*/
        o[4]
      );
    },
    d(o) {
      o && v(t);
    }
  };
}
function Bo(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b, _;
  o = new ce({
    props: {
      icon: Ca,
      class: "inline mr-2"
    }
  });
  function y(D, I) {
    return (
      /*queryError*/
      D[4] ? G0 : F0
    );
  }
  let M = y(e), w = M(e);
  const S = [V0, x0], z = [];
  function E(D, I) {
    return (
      /*llmLoading*/
      D[10] && !/*llmExplanation*/
      D[9] ? 0 : (
        /*llmExplanation*/
        D[9] ? 1 : -1
      )
    );
  }
  return ~(u = E(e)) && (c = z[u] = S[u](e)), {
    c() {
      t = k("div"), n = k("div"), l = k("h3"), l.textContent = "Explanation", r = P(), i = k("button"), U(o.$$.fragment), a = P(), w.c(), s = P(), c && c.c(), g(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100"), g(i, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50"), i.disabled = f = (!/*values*/
      e[5] || Object.keys(
        /*values*/
        e[5]
      ).length == 0) && !/*queryError*/
      e[4], g(n, "class", "flex items-center justify-between mb-2"), g(t, "class", d = "px-2 mb-4 " + /*width*/
      e[7] + " dark:text-gray-100"), fe(t, "opacity-50", (!/*values*/
      e[5] || Object.keys(
        /*values*/
        e[5]
      ).length == 0) && !/*queryError*/
      e[4]);
    },
    m(D, I) {
      C(D, t, I), h(t, n), h(n, l), h(n, r), h(n, i), V(o, i, null), h(i, a), w.m(i, null), h(t, s), ~u && z[u].m(t, null), m = !0, b || (_ = x(
        i,
        "click",
        /*click_handler*/
        e[11]
      ), b = !0);
    },
    p(D, I) {
      M !== (M = y(D)) && (w.d(1), w = M(D), w && (w.c(), w.m(i, null))), (!m || I & /*values, queryError*/
      48 && f !== (f = (!/*values*/
      D[5] || Object.keys(
        /*values*/
        D[5]
      ).length == 0) && !/*queryError*/
      D[4])) && (i.disabled = f);
      let j = u;
      u = E(D), u === j ? ~u && z[u].p(D, I) : (c && (re(), N(z[j], 1, 1, () => {
        z[j] = null;
      }), ie()), ~u ? (c = z[u], c ? c.p(D, I) : (c = z[u] = S[u](D), c.c()), p(c, 1), c.m(t, null)) : c = null), (!m || I & /*width*/
      128 && d !== (d = "px-2 mb-4 " + /*width*/
      D[7] + " dark:text-gray-100")) && g(t, "class", d), (!m || I & /*width, values, Object, queryError*/
      176) && fe(t, "opacity-50", (!/*values*/
      D[5] || Object.keys(
        /*values*/
        D[5]
      ).length == 0) && !/*queryError*/
      D[4]);
    },
    i(D) {
      m || (p(o.$$.fragment, D), p(c), m = !0);
    },
    o(D) {
      N(o.$$.fragment, D), N(c), m = !1;
    },
    d(D) {
      D && v(t), W(o), w.d(), ~u && z[u].d(), b = !1, _();
    }
  };
}
function F0(e) {
  let t;
  return {
    c() {
      t = G("Explain");
    },
    m(n, l) {
      C(n, t, l);
    },
    d(n) {
      n && v(t);
    }
  };
}
function G0(e) {
  let t;
  return {
    c() {
      t = G("Explain and Fix");
    },
    m(n, l) {
      C(n, t, l);
    },
    d(n) {
      n && v(t);
    }
  };
}
function x0(e) {
  let t, n;
  return t = new Xa({
    props: {
      text: (
        /*llmExplanation*/
        e[9]
      ),
      collapseLength: 250,
      onRun: (
        /*func*/
        e[12]
      )
    }
  }), {
    c() {
      U(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*llmExplanation*/
      512 && (i.text = /*llmExplanation*/
      l[9]), r & /*textInput, onRun*/
      3 && (i.onRun = /*func*/
      l[12]), t.$set(i);
    },
    i(l) {
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function V0(e) {
  let t;
  return {
    c() {
      t = k("h4"), t.innerHTML = `<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 dark:border-blue-400"></span>
           AI is thinking...`, g(t, "class", "text-blue-600 dark:text-blue-400 font-medium text-sm");
    },
    m(n, l) {
      C(n, t, l);
    },
    p: Z,
    i: Z,
    o: Z,
    d(n) {
      n && v(t);
    }
  };
}
function W0(e) {
  let t;
  return {
    c() {
      t = k("div"), t.textContent = "No query results", g(t, "class", "text-center py-8 text-gray-900 dark:text-gray-100");
    },
    m(n, l) {
      C(n, t, l);
    },
    p: Z,
    i: Z,
    o: Z,
    d(n) {
      n && v(t);
    }
  };
}
function K0(e) {
  let t, n;
  return t = new xa({ props: { values: (
    /*values*/
    e[5]
  ) } }), {
    c() {
      U(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*values*/
      32 && (i.values = /*values*/
      l[5]), t.$set(i);
    },
    i(l) {
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function U0(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b = !!/*queryError*/
  e[4] && Ho(e), _ = (
    /*llmAvailable*/
    e[8] && Bo(e)
  );
  const y = [K0, W0], M = [];
  function w(S, z) {
    return z & /*values*/
    32 && (a = null), a == null && (a = !!(/*values*/
    S[5] && Object.keys(
      /*values*/
      S[5]
    ).length > 0)), a ? 0 : 1;
  }
  return f = w(e, -1), s = M[f] = y[f](e), d = new R0({
    props: {
      width: "w-full",
      subqueries: (
        /*subqueries*/
        e[6]
      )
    }
  }), {
    c() {
      t = k("div"), b && b.c(), n = P(), _ && _.c(), l = P(), r = k("div"), i = k("div"), i.innerHTML = '<h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Query Result</h3>', o = P(), s.c(), c = P(), U(d.$$.fragment), g(i, "class", "flex items-center justify-between mb-2"), g(r, "class", u = "px-2 mb-4 " + /*width*/
      e[7] + " dark:text-gray-100"), fe(r, "opacity-50", !/*values*/
      e[5] || Object.keys(
        /*values*/
        e[5]
      ).length == 0), g(t, "class", "flex-auto p-4 h-full overflow-auto"), fe(t, "opacity-50", !!/*values*/
      e[5] && Object.keys(
        /*values*/
        e[5]
      ).length > 0 && /*textInput*/
      e[0] != /*queryForResults*/
      e[3]);
    },
    m(S, z) {
      C(S, t, z), b && b.m(t, null), h(t, n), _ && _.m(t, null), h(t, l), h(t, r), h(r, i), h(r, o), M[f].m(r, null), h(t, c), V(d, t, null), m = !0;
    },
    p(S, [z]) {
      /*queryError*/
      S[4] ? b ? b.p(S, z) : (b = Ho(S), b.c(), b.m(t, n)) : b && (b.d(1), b = null), /*llmAvailable*/
      S[8] ? _ ? (_.p(S, z), z & /*llmAvailable*/
      256 && p(_, 1)) : (_ = Bo(S), _.c(), p(_, 1), _.m(t, l)) : _ && (re(), N(_, 1, 1, () => {
        _ = null;
      }), ie());
      let E = f;
      f = w(S, z), f === E ? M[f].p(S, z) : (re(), N(M[E], 1, 1, () => {
        M[E] = null;
      }), ie(), s = M[f], s ? s.p(S, z) : (s = M[f] = y[f](S), s.c()), p(s, 1), s.m(r, null)), (!m || z & /*width*/
      128 && u !== (u = "px-2 mb-4 " + /*width*/
      S[7] + " dark:text-gray-100")) && g(r, "class", u), (!m || z & /*width, values, Object*/
      160) && fe(r, "opacity-50", !/*values*/
      S[5] || Object.keys(
        /*values*/
        S[5]
      ).length == 0);
      const D = {};
      z & /*subqueries*/
      64 && (D.subqueries = /*subqueries*/
      S[6]), d.$set(D), (!m || z & /*values, Object, textInput, queryForResults*/
      41) && fe(t, "opacity-50", !!/*values*/
      S[5] && Object.keys(
        /*values*/
        S[5]
      ).length > 0 && /*textInput*/
      S[0] != /*queryForResults*/
      S[3]);
    },
    i(S) {
      m || (p(_), p(s), p(d.$$.fragment, S), m = !0);
    },
    o(S) {
      N(_), N(s), N(d.$$.fragment, S), m = !1;
    },
    d(S) {
      S && v(t), b && b.d(), _ && _.d(), M[f].d(), W(d);
    }
  };
}
function X0(e, t, n) {
  let { textInput: l = "" } = t, { onRun: r = () => {
  } } = t, { onExplain: i = () => {
  } } = t, { queryForResults: o = "" } = t, { queryError: a = "" } = t, { values: f = {} } = t, { subqueries: s = {} } = t, { width: u = "w-full" } = t, { llmAvailable: c = !1 } = t, { llmExplanation: d = "" } = t, { llmLoading: m = !1 } = t;
  const b = () => {
    i();
  }, _ = (y) => {
    n(0, l = y), r();
  };
  return e.$$set = (y) => {
    "textInput" in y && n(0, l = y.textInput), "onRun" in y && n(1, r = y.onRun), "onExplain" in y && n(2, i = y.onExplain), "queryForResults" in y && n(3, o = y.queryForResults), "queryError" in y && n(4, a = y.queryError), "values" in y && n(5, f = y.values), "subqueries" in y && n(6, s = y.subqueries), "width" in y && n(7, u = y.width), "llmAvailable" in y && n(8, c = y.llmAvailable), "llmExplanation" in y && n(9, d = y.llmExplanation), "llmLoading" in y && n(10, m = y.llmLoading);
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
    b,
    _
  ];
}
class Y0 extends Ce {
  constructor(t) {
    super(), ve(this, t, X0, U0, pe, {
      textInput: 0,
      onRun: 1,
      onExplain: 2,
      queryForResults: 3,
      queryError: 4,
      values: 5,
      subqueries: 6,
      width: 7,
      llmAvailable: 8,
      llmExplanation: 9,
      llmLoading: 10
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
      t = k("div"), n = k("div"), l = k("div"), r = k("div"), i = k("p"), a = G(o), f = P(), s = k("div"), s.innerHTML = '<div class="bg-blue-600 h-2 rounded-full animate-pulse" style="width: 100%"></div>', g(i, "class", "text-sm font-medium text-gray-900 dark:text-gray-100"), g(r, "class", "flex-1"), g(s, "class", "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"), g(l, "class", "space-y-3"), g(n, "class", "bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 w-1/2 p-6"), g(t, "class", "absolute top-0 left-0 right-0 top-0 bottom-0 bg-white/80 dark:bg-gray-900/80 flex items-center justify-center z-80");
    },
    m(u, c) {
      C(u, t, c), h(t, n), h(n, l), h(l, r), h(r, i), h(i, a), h(l, f), h(l, s);
    },
    p(u, c) {
      c & /*message*/
      2 && o !== (o = /*message*/
      (u[1] || "Loading...") + "") && oe(a, o);
    },
    d(u) {
      u && v(t);
    }
  };
}
function J0(e) {
  let t, n = (
    /*isLoading*/
    e[0] && Fo(e)
  );
  return {
    c() {
      n && n.c(), t = _e();
    },
    m(l, r) {
      n && n.m(l, r), C(l, t, r);
    },
    p(l, [r]) {
      /*isLoading*/
      l[0] ? n ? n.p(l, r) : (n = Fo(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: Z,
    o: Z,
    d(l) {
      n && n.d(l), l && v(t);
    }
  };
}
function Z0(e, t, n) {
  let { isLoading: l = !1 } = t, { message: r = "" } = t, { width: i = "w-full" } = t;
  return e.$$set = (o) => {
    "isLoading" in o && n(0, l = o.isLoading), "message" in o && n(1, r = o.message), "width" in o && n(2, i = o.width);
  }, [l, r, i];
}
class $0 extends Ce {
  constructor(t) {
    super(), ve(this, t, Z0, J0, pe, { isLoading: 0, message: 1, width: 2 });
  }
}
function Go(e, t, n) {
  const l = e.slice();
  return l[7] = t[n], l[9] = n, l;
}
function xo(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b;
  s = new ce({ props: { icon: Tf } });
  function _(w, S) {
    return (
      /*history*/
      w[1].length === 0 ? t1 : e1
    );
  }
  let y = _(e), M = y(e);
  return {
    c() {
      t = k("div"), n = P(), l = k("div"), r = k("div"), i = k("div"), o = k("h3"), o.textContent = "Query History", a = P(), f = k("button"), U(s.$$.fragment), u = P(), c = k("div"), M.c(), g(t, "class", "absolute top-0 left-0 w-full h-full bg-white/80 dark:bg-gray-900/80 z-40"), g(o, "class", "font-medium"), g(f, "class", "text-gray-600 dark:text-gray-300 hover:opacity-50 transition-colors p-2"), g(f, "title", "Close history"), g(i, "class", "flex items-center justify-between px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white"), g(c, "class", "max-h-80 overflow-y-auto svelte-6p3axr"), g(r, "class", "bg-white dark:bg-gray-800 border-2 border-gray-300/50 dark:border-gray-600/2 rounded-lg w-2/3 h-2/3 overflow-auto pointer-events-auto"), g(l, "class", "absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 pointer-events-none");
    },
    m(w, S) {
      C(w, t, S), C(w, n, S), C(w, l, S), h(l, r), h(r, i), h(i, o), h(i, a), h(i, f), V(s, f, null), h(r, u), h(r, c), M.m(c, null), d = !0, m || (b = [
        x(t, "click", qe(
          /*handleClickOutside*/
          e[4]
        )),
        x(f, "click", function() {
          Fe(
            /*onClose*/
            e[2]
          ) && e[2].apply(this, arguments);
        })
      ], m = !0);
    },
    p(w, S) {
      e = w, y === (y = _(e)) && M ? M.p(e, S) : (M.d(1), M = y(e), M && (M.c(), M.m(c, null)));
    },
    i(w) {
      d || (p(s.$$.fragment, w), d = !0);
    },
    o(w) {
      N(s.$$.fragment, w), d = !1;
    },
    d(w) {
      w && v(t), w && v(n), w && v(l), W(s), M.d(), m = !1, we(b);
    }
  };
}
function e1(e) {
  let t, n = (
    /*history*/
    e[1]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Wo(Go(e, n, r));
  return {
    c() {
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      t = _e();
    },
    m(r, i) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(r, i);
      C(r, t, i);
    },
    p(r, i) {
      if (i & /*onSelect, history, formatTimestamp*/
      10) {
        n = /*history*/
        r[1];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = Go(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = Wo(a), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(r) {
      Ge(l, r), r && v(t);
    }
  };
}
function t1(e) {
  let t;
  return {
    c() {
      t = k("div"), t.textContent = "No query history yet", g(t, "class", "p-4 text-center text-gray-500 dark:text-gray-400 text-sm");
    },
    m(n, l) {
      C(n, t, l);
    },
    p: Z,
    d(n) {
      n && v(t);
    }
  };
}
function n1(e) {
  let t, n = (
    /*historyItem*/
    (e[7].query || "No query extracted") + ""
  ), l;
  return {
    c() {
      t = k("span"), l = G(n), g(t, "class", "font-mono");
    },
    m(r, i) {
      C(r, t, i), h(t, l);
    },
    p(r, i) {
      i & /*history*/
      2 && n !== (n = /*historyItem*/
      (r[7].query || "No query extracted") + "") && oe(l, n);
    },
    d(r) {
      r && v(t);
    }
  };
}
function l1(e) {
  let t = (
    /*historyItem*/
    e[7].question + ""
  ), n;
  return {
    c() {
      n = G(t);
    },
    m(l, r) {
      C(l, n, r);
    },
    p(l, r) {
      r & /*history*/
      2 && t !== (t = /*historyItem*/
      l[7].question + "") && oe(n, t);
    },
    d(l) {
      l && v(n);
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
      t = k("p"), l = G(n), g(t, "class", "text-xs text-gray-600 dark:text-gray-300 line-clamp-2 mt-2 svelte-6p3axr");
    },
    m(r, i) {
      C(r, t, i), h(t, l);
    },
    p(r, i) {
      i & /*history*/
      2 && n !== (n = /*historyItem*/
      r[7].answer + "") && oe(l, n);
    },
    d(r) {
      r && v(t);
    }
  };
}
function Wo(e) {
  let t, n, l, r, i, o = Ko(
    /*historyItem*/
    e[7].timestamp
  ) + "", a, f, s, u, c;
  function d(M, w) {
    return (
      /*historyItem*/
      M[7].question ? l1 : n1
    );
  }
  let m = d(e), b = m(e), _ = (
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
      t = k("div"), n = k("div"), l = k("h4"), b.c(), r = P(), i = k("span"), a = G(o), f = P(), _ && _.c(), s = P(), g(l, "class", "text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-2 flex-1 svelte-6p3axr"), g(i, "class", "text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0"), g(n, "class", "flex items-start justify-between"), g(t, "class", "p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors");
    },
    m(M, w) {
      C(M, t, w), h(t, n), h(n, l), b.m(l, null), h(n, r), h(n, i), h(i, a), h(t, f), _ && _.m(t, null), h(t, s), u || (c = x(t, "click", y), u = !0);
    },
    p(M, w) {
      e = M, m === (m = d(e)) && b ? b.p(e, w) : (b.d(1), b = m(e), b && (b.c(), b.m(l, null))), w & /*history*/
      2 && o !== (o = Ko(
        /*historyItem*/
        e[7].timestamp
      ) + "") && oe(a, o), /*historyItem*/
      e[7].answer ? _ ? _.p(e, w) : (_ = Vo(e), _.c(), _.m(t, s)) : _ && (_.d(1), _ = null);
    },
    d(M) {
      M && v(t), b.d(), _ && _.d(), u = !1, c();
    }
  };
}
function r1(e) {
  let t, n, l = (
    /*isVisible*/
    e[0] && xo(e)
  );
  return {
    c() {
      l && l.c(), t = _e();
    },
    m(r, i) {
      l && l.m(r, i), C(r, t, i), n = !0;
    },
    p(r, [i]) {
      /*isVisible*/
      r[0] ? l ? (l.p(r, i), i & /*isVisible*/
      1 && p(l, 1)) : (l = xo(r), l.c(), p(l, 1), l.m(t.parentNode, t)) : l && (re(), N(l, 1, 1, () => {
        l = null;
      }), ie());
    },
    i(r) {
      n || (p(l), n = !0);
    },
    o(r) {
      N(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && v(t);
    }
  };
}
function Ko(e) {
  let t = /* @__PURE__ */ new Date();
  t.setTime(Date.parse(e)), console.log("format:", e, Date.parse(e));
  const l = (/* @__PURE__ */ new Date()).getTime() - t.getTime(), r = Math.floor(l / 6e4), i = Math.floor(l / 36e5), o = Math.floor(l / 864e5);
  return r < 1 ? "Just now" : r < 60 ? `${r}m ago` : i < 24 ? `${i}h ago` : `${o}d ago`;
}
function i1(e, t, n) {
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
class Uo extends Ce {
  constructor(t) {
    super(), ve(this, t, i1, r1, pe, {
      isVisible: 0,
      history: 1,
      onClose: 2,
      onSelect: 3,
      position: 5
    });
  }
}
function Xo(e, t = []) {
  let n = 1, l = `Group ${n}`;
  for (; cr(e, l); )
    n += 1, l = `Group ${n}`;
  return nn(e, [...t, l], {});
}
function Ya(e, t = []) {
  let n = 1, l = `Query${n}`;
  for (; cr(e, l); )
    n += 1, l = `Query${n}`;
  return {
    contents: nn(e, [...t, l], ""),
    queryPath: [...t, l]
  };
}
function ur(e, t) {
  if (t.length > 1) {
    let n = ur(e[t[0]], t.slice(1));
    return { ...e, [t[0]]: n };
  }
  return Object.fromEntries(
    Object.entries(e).filter((n) => n[0] != t[0])
  );
}
function nn(e, t, n) {
  if (t.length > 1) {
    let l = nn(e[t[0]], t.slice(1), n);
    return { ...e, [t[0]]: l };
  }
  return {
    ...Object.fromEntries(
      Object.entries(e).filter((l) => l[0] != t[0])
    ),
    [t[0]]: n
  };
}
function Or(e) {
  return e.search(/[^A-Za-z0-9_]/) < 0 && e.search(/^[0-9]/) < 0;
}
function Xr(e, t) {
  return t.length > 1 ? typeof e[t[0]] == "object" && Xr(e[t[0]], t.slice(1)) : e[t[0]] !== void 0;
}
function cr(e, t) {
  if (typeof e[t] == "string")
    return !0;
  for (let n of Object.keys(e))
    if (typeof e[n] == "object" && cr(e[n], t))
      return !0;
  return !1;
}
function Yr(e, t = []) {
  if (t.length > 1) {
    let r = Yr(e[t[0]], t.slice(1));
    return {
      contents: { ...e, [t[0]]: r.contents },
      queryPath: [t[0], ...r.queryPath]
    };
  }
  let n = 2, l = `${t[0]}${n}`;
  for (; e[l]; )
    n += 1, l = `${t[0]}${n}`;
  return {
    contents: { ...e, [l]: e[t[0]] },
    queryPath: [l]
  };
}
function St(e, t) {
  return t.length > 1 ? St(e[t[0]], t.slice(1)) : e[t[0]];
}
function Ja(e, t, n) {
  let l = St(e, t), r = ur(e, t);
  return nn(r, n, l);
}
function o1(e) {
  let t, n, l, r, i;
  const o = [s1, f1], a = [];
  function f(s, u) {
    return (
      /*error*/
      s[3] ? 0 : 1
    );
  }
  return n = f(e), l = a[n] = o[n](e), {
    c() {
      t = k("div"), l.c(), g(t, "class", r = "h-full " + /*scrollable*/
      (e[6] ? "overflow-auto" : ""));
    },
    m(s, u) {
      C(s, t, u), a[n].m(t, null), i = !0;
    },
    p(s, u) {
      let c = n;
      n = f(s), n === c ? a[n].p(s, u) : (re(), N(a[c], 1, 1, () => {
        a[c] = null;
      }), ie(), l = a[n], l ? l.p(s, u) : (l = a[n] = o[n](s), l.c()), p(l, 1), l.m(t, null)), (!i || u & /*scrollable*/
      64 && r !== (r = "h-full " + /*scrollable*/
      (s[6] ? "overflow-auto" : ""))) && g(t, "class", r);
    },
    i(s) {
      i || (p(l), i = !0);
    },
    o(s) {
      N(l), i = !1;
    },
    d(s) {
      s && v(t), a[n].d();
    }
  };
}
function a1(e) {
  let t, n, l, r, i, o, a, f, s, u, c;
  return o = new ce({
    props: {
      icon: Ca,
      class: "inline mr-2"
    }
  }), {
    c() {
      t = k("div"), n = k("textarea"), l = P(), r = k("div"), i = k("button"), U(o.$$.fragment), a = G(`
          Ask AI`), g(n, "class", "w-full h-full p-4 pb-16 bg-transparent text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none overflow-hidden min-h-[120px] relative z-20"), g(n, "placeholder", "Ask me to generate, update, or explain a TempoQL query..."), n.disabled = /*isLoading*/
      e[2], g(n, "rows", "5"), g(i, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50"), i.disabled = f = !/*question*/
      e[0].trim() || /*isLoading*/
      e[2], g(r, "class", "absolute right-0 bottom-0 mr-4 mb-4 flex justify-end items-center gap-2 z-50"), g(t, "class", "relative w-full min-h-0 flex-auto");
    },
    m(d, m) {
      C(d, t, m), h(t, n), e[19](n), xe(
        n,
        /*question*/
        e[0]
      ), h(t, l), h(t, r), h(r, i), V(o, i, null), h(i, a), s = !0, u || (c = [
        x(
          n,
          "input",
          /*textarea_input_handler*/
          e[20]
        ),
        x(
          n,
          "keydown",
          /*handleKeydown*/
          e[11]
        ),
        x(
          i,
          "click",
          /*click_handler_2*/
          e[21]
        )
      ], u = !0);
    },
    p(d, m) {
      (!s || m & /*isLoading*/
      4) && (n.disabled = /*isLoading*/
      d[2]), m & /*question*/
      1 && xe(
        n,
        /*question*/
        d[0]
      ), (!s || m & /*question, isLoading*/
      5 && f !== (f = !/*question*/
      d[0].trim() || /*isLoading*/
      d[2])) && (i.disabled = f);
    },
    i(d) {
      s || (p(o.$$.fragment, d), s = !0);
    },
    o(d) {
      N(o.$$.fragment, d), s = !1;
    },
    d(d) {
      d && v(t), e[19](null), W(o), u = !1, we(c);
    }
  };
}
function f1(e) {
  let t, n, l, r = (
    /*llmResponse*/
    e[4] && Yo(e)
  ), i = (
    /*isLoading*/
    e[2] && !/*llmResponse*/
    e[4] && Jo()
  );
  return {
    c() {
      r && r.c(), t = P(), i && i.c(), n = _e();
    },
    m(o, a) {
      r && r.m(o, a), C(o, t, a), i && i.m(o, a), C(o, n, a), l = !0;
    },
    p(o, a) {
      /*llmResponse*/
      o[4] ? r ? (r.p(o, a), a & /*llmResponse*/
      16 && p(r, 1)) : (r = Yo(o), r.c(), p(r, 1), r.m(t.parentNode, t)) : r && (re(), N(r, 1, 1, () => {
        r = null;
      }), ie()), /*isLoading*/
      o[2] && !/*llmResponse*/
      o[4] ? i || (i = Jo(), i.c(), i.m(n.parentNode, n)) : i && (i.d(1), i = null);
    },
    i(o) {
      l || (p(r), l = !0);
    },
    o(o) {
      N(r), l = !1;
    },
    d(o) {
      r && r.d(o), o && v(t), i && i.d(o), o && v(n);
    }
  };
}
function s1(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = k("div"), n = k("h3"), n.textContent = "Error", l = P(), r = k("div"), i = G(
        /*error*/
        e[3]
      ), g(n, "class", "text-lg font-medium text-red-700 dark:text-red-100 mb-2"), g(r, "class", "text-sm font-mono text-gray-800 dark:text-gray-100"), g(t, "class", "bg-red-50 dark:bg-red-800/40 rounded-lg border border-red-200 dark:border-red-400 p-4 mb-4");
    },
    m(o, a) {
      C(o, t, a), h(t, n), h(t, l), h(t, r), h(r, i);
    },
    p(o, a) {
      a & /*error*/
      8 && oe(
        i,
        /*error*/
        o[3]
      );
    },
    i: Z,
    o: Z,
    d(o) {
      o && v(t);
    }
  };
}
function Yo(e) {
  let t, n, l, r;
  return l = new Xa({
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
      t = k("div"), n = k("div"), U(l.$$.fragment), g(n, "class", "text-gray-700 dark:text-gray-200 text-sm leading-relaxed prose prose-sm max-w-none"), g(t, "class", "flex-1 overflow-y-auto ai-scrollbar");
    },
    m(i, o) {
      C(i, t, o), h(t, n), V(l, n, null), r = !0;
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
      r || (p(l.$$.fragment, i), r = !0);
    },
    o(i) {
      N(l.$$.fragment, i), r = !1;
    },
    d(i) {
      i && v(t), W(l);
    }
  };
}
function Jo(e) {
  let t;
  return {
    c() {
      t = k("h4"), t.innerHTML = `<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 dark:border-blue-400"></span>
             AI is thinking...`, g(t, "class", "text-blue-600 dark:text-blue-400 font-medium text-sm");
    },
    m(n, l) {
      C(n, t, l);
    },
    d(n) {
      n && v(t);
    }
  };
}
function u1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b, _, y, M, w, S, z, E, D, I, j, A;
  M = new ce({
    props: { icon: Sa, class: "inline mr-2" }
  });
  const q = [a1, o1], R = [];
  function T(ee, H) {
    return (
      /*tab*/
      ee[8] == "query" ? 0 : 1
    );
  }
  return z = T(e), E = R[z] = q[z](e), {
    c() {
      t = k("div"), n = k("div"), l = k("h3"), l.textContent = "AI Assistant", r = P(), i = k("button"), o = G("Question"), f = P(), s = k("button"), u = G("Answer"), m = P(), b = k("div"), _ = P(), y = k("button"), U(M.$$.fragment), w = G(`
      History`), S = P(), E.c(), g(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100 pr-2"), g(i, "class", a = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*tab*/
      (e[8] === "query" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800")), g(i, "type", "button"), g(s, "class", c = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 disabled:opacity-50 " + /*tab*/
      (e[8] === "response" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800")), s.disabled = d = !/*llmResponse*/
      e[4] && !/*error*/
      e[3], g(s, "type", "button"), g(b, "class", "flex-auto"), g(y, "class", "px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), g(y, "title", "View AI question/answer history"), g(n, "class", "flex items-center mb-4 gap-2 shrink-0"), g(t, "class", D = "px-4 pb-2 " + /*width*/
      e[5] + " h-full flex flex-col");
    },
    m(ee, H) {
      C(ee, t, H), h(t, n), h(n, l), h(n, r), h(n, i), h(i, o), h(n, f), h(n, s), h(s, u), h(n, m), h(n, b), h(n, _), h(n, y), V(M, y, null), h(y, w), h(t, S), R[z].m(t, null), I = !0, j || (A = [
        x(
          i,
          "click",
          /*click_handler*/
          e[17]
        ),
        x(
          s,
          "click",
          /*click_handler_1*/
          e[18]
        ),
        x(y, "click", function() {
          Fe(
            /*onHistoryClick*/
            e[7]
          ) && e[7].apply(this, arguments);
        })
      ], j = !0);
    },
    p(ee, [H]) {
      e = ee, (!I || H & /*tab*/
      256 && a !== (a = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*tab*/
      (e[8] === "query" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"))) && g(i, "class", a), (!I || H & /*tab*/
      256 && c !== (c = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 disabled:opacity-50 " + /*tab*/
      (e[8] === "response" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"))) && g(s, "class", c), (!I || H & /*llmResponse, error*/
      24 && d !== (d = !/*llmResponse*/
      e[4] && !/*error*/
      e[3])) && (s.disabled = d);
      let Q = z;
      z = T(e), z === Q ? R[z].p(e, H) : (re(), N(R[Q], 1, 1, () => {
        R[Q] = null;
      }), ie(), E = R[z], E ? E.p(e, H) : (E = R[z] = q[z](e), E.c()), p(E, 1), E.m(t, null)), (!I || H & /*width*/
      32 && D !== (D = "px-4 pb-2 " + /*width*/
      e[5] + " h-full flex flex-col")) && g(t, "class", D);
    },
    i(ee) {
      I || (p(M.$$.fragment, ee), p(E), I = !0);
    },
    o(ee) {
      N(M.$$.fragment, ee), N(E), I = !1;
    },
    d(ee) {
      ee && v(t), W(M), R[z].d(), j = !1, we(A);
    }
  };
}
function c1(e, t, n) {
  let { onSubmit: l = () => {
  } } = t, { onRun: r = () => {
  } } = t, { isLoading: i = !1 } = t, { error: o = "" } = t, { llmResponse: a = "" } = t, { apiStatus: f = "Checking API connection..." } = t, { width: s = "w-full" } = t, { scrollable: u = !0 } = t, { extractedQuery: c = "" } = t, { hasExtractedQuery: d = !1 } = t, { onQueryExtracted: m = () => {
  } } = t, { onHistoryClick: b = () => {
  } } = t, _ = "query", { question: y = "" } = t, M;
  function w() {
    y.trim() && (l(y.trim()), n(8, _ = "response"), M && M.focus());
  }
  function S(q) {
    q.key === "Enter" && !q.shiftKey && (q.preventDefault(), w());
  }
  function z(q) {
    return q.includes("Configured") || q.includes("ready") ? {
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      icon: Mf
    } : q.includes("Not configured") || q.includes("Invalid") ? {
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      icon: Ff
    } : {
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      icon: If
    };
  }
  const E = () => n(8, _ = "query"), D = () => n(8, _ = "response");
  function I(q) {
    Se[q ? "unshift" : "push"](() => {
      M = q, n(9, M);
    });
  }
  function j() {
    y = this.value, n(0, y);
  }
  const A = () => {
    w(), n(8, _ = "response");
  };
  return e.$$set = (q) => {
    "onSubmit" in q && n(12, l = q.onSubmit), "onRun" in q && n(1, r = q.onRun), "isLoading" in q && n(2, i = q.isLoading), "error" in q && n(3, o = q.error), "llmResponse" in q && n(4, a = q.llmResponse), "apiStatus" in q && n(13, f = q.apiStatus), "width" in q && n(5, s = q.width), "scrollable" in q && n(6, u = q.scrollable), "extractedQuery" in q && n(14, c = q.extractedQuery), "hasExtractedQuery" in q && n(15, d = q.hasExtractedQuery), "onQueryExtracted" in q && n(16, m = q.onQueryExtracted), "onHistoryClick" in q && n(7, b = q.onHistoryClick), "question" in q && n(0, y = q.question);
  }, e.$$.update = () => {
    e.$$.dirty & /*hasExtractedQuery, extractedQuery, onQueryExtracted*/
    114688 && d && c && (console.log("🤖 AIAssistant: Query extracted, triggering handler:", c), m()), e.$$.dirty & /*apiStatus*/
    8192 && z(f);
  }, [
    y,
    r,
    i,
    o,
    a,
    s,
    u,
    b,
    _,
    M,
    w,
    S,
    l,
    f,
    c,
    d,
    m,
    E,
    D,
    I,
    j,
    A
  ];
}
class d1 extends Ce {
  constructor(t) {
    super(), ve(this, t, c1, u1, pe, {
      onSubmit: 12,
      onRun: 1,
      isLoading: 2,
      error: 3,
      llmResponse: 4,
      apiStatus: 13,
      width: 5,
      scrollable: 6,
      extractedQuery: 14,
      hasExtractedQuery: 15,
      onQueryExtracted: 16,
      onHistoryClick: 7,
      question: 0
    });
  }
}
const Zo = [
  "now",
  "value",
  "mintime",
  "maxtime",
  "indexvalue"
];
function m1(e, t, n) {
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
    const i = r.toLowerCase(), o = Zo.filter((s) => s.toLowerCase().startsWith(i)).sort((s, u) => s.length - u.length), a = Zo.filter((s) => {
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
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const g1 = {
  prefix: "far",
  iconName: "circle-play",
  icon: [512, 512, [61469, "play-circle"], "f144", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176c0-8.7 4.7-16.7 12.3-20.9z"]
};
function $o(e, t, n) {
  const l = e.slice();
  return l[40] = t[n], l[42] = n, l;
}
function ea(e) {
  let t, n = (
    /*autocompleteOptions*/
    e[9]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = ta($o(e, n, r));
  return {
    c() {
      t = k("div");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      g(t, "class", "absolute z-30 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-xl max-h-48 overflow-y-auto");
    },
    m(r, i) {
      C(r, t, i);
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(t, null);
      e[28](t);
    },
    p(r, i) {
      if (i[0] & /*selectedIndex, selectAutocompleteOption, autocompleteOptions*/
      34304) {
        n = /*autocompleteOptions*/
        r[9];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = $o(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = ta(a), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(r) {
      r && v(t), Ge(l, r), e[28](null);
    }
  };
}
function ta(e) {
  let t, n, l, r = (
    /*option*/
    e[40].value + ""
  ), i, o, a, f = (
    /*option*/
    e[40].type === "data_item" ? "field" : "const"
  ), s, u, c, d, m;
  function b() {
    return (
      /*click_handler*/
      e[25](
        /*option*/
        e[40]
      )
    );
  }
  function _(...M) {
    return (
      /*keydown_handler*/
      e[26](
        /*option*/
        e[40],
        ...M
      )
    );
  }
  function y() {
    return (
      /*mouseenter_handler*/
      e[27](
        /*index*/
        e[42]
      )
    );
  }
  return {
    c() {
      t = k("div"), n = k("div"), l = k("span"), i = G(r), o = P(), a = k("span"), s = G(f), u = P(), g(l, "class", "font-mono text-sm"), g(a, "class", "text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"), g(n, "class", "flex items-center justify-between"), g(t, "class", c = "px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors " + /*index*/
      (e[42] === /*selectedIndex*/
      e[10] ? "bg-blue-600 text-white" : "text-gray-700 dark:text-gray-200")), g(t, "role", "button"), g(t, "tabindex", "0");
    },
    m(M, w) {
      C(M, t, w), h(t, n), h(n, l), h(l, i), h(n, o), h(n, a), h(a, s), h(t, u), d || (m = [
        x(t, "click", b),
        x(t, "keydown", _),
        x(t, "mouseenter", y)
      ], d = !0);
    },
    p(M, w) {
      e = M, w[0] & /*autocompleteOptions*/
      512 && r !== (r = /*option*/
      e[40].value + "") && oe(i, r), w[0] & /*autocompleteOptions*/
      512 && f !== (f = /*option*/
      e[40].type === "data_item" ? "field" : "const") && oe(s, f), w[0] & /*selectedIndex*/
      1024 && c !== (c = "px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors " + /*index*/
      (e[42] === /*selectedIndex*/
      e[10] ? "bg-blue-600 text-white" : "text-gray-700 dark:text-gray-200")) && g(t, "class", c);
    },
    d(M) {
      M && v(t), d = !1, we(m);
    }
  };
}
function na(e) {
  let t, n, l = (
    /*hasUnsavedChanges*/
    e[4] && la(e)
  );
  return {
    c() {
      l && l.c(), t = _e();
    },
    m(r, i) {
      l && l.m(r, i), C(r, t, i), n = !0;
    },
    p(r, i) {
      /*hasUnsavedChanges*/
      r[4] ? l ? (l.p(r, i), i[0] & /*hasUnsavedChanges*/
      16 && p(l, 1)) : (l = la(r), l.c(), p(l, 1), l.m(t.parentNode, t)) : l && (re(), N(l, 1, 1, () => {
        l = null;
      }), ie());
    },
    i(r) {
      n || (p(l), n = !0);
    },
    o(r) {
      N(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && v(t);
    }
  };
}
function la(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b;
  return n = new ce({
    props: { icon: Cf, class: "inline mr-2" }
  }), o = new ce({
    props: {
      icon: g1,
      class: "inline mr-2"
    }
  }), u = new ce({
    props: { icon: zf, class: "inline mr-2" }
  }), {
    c() {
      t = k("button"), U(n.$$.fragment), l = G(`
            Revert`), r = P(), i = k("button"), U(o.$$.fragment), a = G(`
            Run`), f = P(), s = k("button"), U(u.$$.fragment), c = G(`
            Save`), g(t, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white whitespace-nowrap"), g(t, "title", "Discard changes"), g(i, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), g(i, "title", "Run this query without saving it"), g(s, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-200 hover:bg-blue-200/50 dark:bg-blue-200/40 dark:hover:bg-blue-200/60 dark:text-white"), g(s, "title", "Save this query (Ctrl+S)");
    },
    m(_, y) {
      C(_, t, y), V(n, t, null), h(t, l), C(_, r, y), C(_, i, y), V(o, i, null), h(i, a), C(_, f, y), C(_, s, y), V(u, s, null), h(s, c), d = !0, m || (b = [
        x(t, "click", function() {
          Fe(
            /*onDiscard*/
            e[3]
          ) && e[3].apply(this, arguments);
        }),
        x(i, "click", function() {
          Fe(
            /*onRun*/
            e[1]
          ) && e[1].apply(this, arguments);
        }),
        x(s, "click", function() {
          Fe(
            /*onSave*/
            e[2]
          ) && e[2].apply(this, arguments);
        })
      ], m = !0);
    },
    p(_, y) {
      e = _;
    },
    i(_) {
      d || (p(n.$$.fragment, _), p(o.$$.fragment, _), p(u.$$.fragment, _), d = !0);
    },
    o(_) {
      N(n.$$.fragment, _), N(o.$$.fragment, _), N(u.$$.fragment, _), d = !1;
    },
    d(_) {
      _ && v(t), W(n), _ && v(r), _ && v(i), W(o), _ && v(f), _ && v(s), W(u), m = !1, we(b);
    }
  };
}
function b1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m = (
    /*allowSave*/
    e[5] && /*hasUnsavedChanges*/
    e[4] ? "Save and Run" : "Run Query"
  ), b, _, y, M, w, S = (
    /*showAutocomplete*/
    e[11] && /*autocompleteOptions*/
    e[9].length > 0 && ea(e)
  ), z = (
    /*allowSave*/
    e[5] && na(e)
  );
  return c = new ce({
    props: { icon: Sf, class: "inline mr-2" }
  }), {
    c() {
      t = k("div"), n = k("div"), l = k("textarea"), r = P(), i = k("div"), o = P(), S && S.c(), a = P(), f = k("div"), z && z.c(), s = P(), u = k("button"), U(c.$$.fragment), d = P(), b = G(m), g(l, "id", "text-input"), g(l, "class", "w-full h-full p-4 pb-16 bg-transparent font-mono text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none overflow-hidden min-h-[40px] relative z-20 svelte-1w5ogy4"), g(l, "placeholder", "// Write your TempoQL query here... (Ctrl+Z to undo, Ctrl+Y to redo)"), g(l, "autocomplete", "false"), g(l, "autocapitalize", "false"), g(l, "autocorrect", "false"), g(l, "spellcheck", "false"), g(l, "rows", "1"), le(l, "color", "transparent"), le(l, "caret-color", "currentColor"), g(i, "class", "absolute top-0 left-0 w-full h-full p-4 pb-16 font-mono text-sm pointer-events-none bg-transparent z-10 text-wrap whitespace-pre-wrap break-words text-gray-900 dark:text-gray-100 svelte-1w5ogy4"), g(
        i,
        "id",
        /*highlightedViewID*/
        e[12]
      ), g(u, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white"), u.disabled = _ = !/*value*/
      e[0].trim(), g(u, "title", "Run the query on the dataset (Ctrl+Shift+Enter)"), fe(u, "opacity-50", !/*value*/
      e[0].trim()), fe(u, "cursor-not-allowed", !/*value*/
      e[0].trim()), g(f, "class", "absolute right-0 bottom-0 mr-4 mb-4 flex justify-end items-center gap-2 z-50"), g(n, "class", "relative flex-auto min-h-0"), g(t, "class", "flex flex-col w-full h-full px-4 mb-2");
    },
    m(E, D) {
      C(E, t, D), h(t, n), h(n, l), e[22](l), xe(
        l,
        /*value*/
        e[0]
      ), h(n, r), h(n, i), e[24](i), h(n, o), S && S.m(n, null), h(n, a), h(n, f), z && z.m(f, null), h(f, s), h(f, u), V(c, u, null), h(u, d), h(u, b), y = !0, M || (w = [
        x(
          l,
          "input",
          /*textarea_1_input_handler*/
          e[23]
        ),
        x(
          l,
          "input",
          /*handleInput*/
          e[13]
        ),
        x(
          l,
          "keydown",
          /*handleKeydown*/
          e[14]
        ),
        x(
          u,
          "click",
          /*click_handler_1*/
          e[29]
        )
      ], M = !0);
    },
    p(E, D) {
      D[0] & /*value*/
      1 && xe(
        l,
        /*value*/
        E[0]
      ), /*showAutocomplete*/
      E[11] && /*autocompleteOptions*/
      E[9].length > 0 ? S ? S.p(E, D) : (S = ea(E), S.c(), S.m(n, a)) : S && (S.d(1), S = null), /*allowSave*/
      E[5] ? z ? (z.p(E, D), D[0] & /*allowSave*/
      32 && p(z, 1)) : (z = na(E), z.c(), p(z, 1), z.m(f, s)) : z && (re(), N(z, 1, 1, () => {
        z = null;
      }), ie()), (!y || D[0] & /*allowSave, hasUnsavedChanges*/
      48) && m !== (m = /*allowSave*/
      E[5] && /*hasUnsavedChanges*/
      E[4] ? "Save and Run" : "Run Query") && oe(b, m), (!y || D[0] & /*value*/
      1 && _ !== (_ = !/*value*/
      E[0].trim())) && (u.disabled = _), (!y || D[0] & /*value*/
      1) && fe(u, "opacity-50", !/*value*/
      E[0].trim()), (!y || D[0] & /*value*/
      1) && fe(u, "cursor-not-allowed", !/*value*/
      E[0].trim());
    },
    i(E) {
      y || (p(z), p(c.$$.fragment, E), y = !0);
    },
    o(E) {
      N(z), N(c.$$.fragment, E), y = !1;
    },
    d(E) {
      E && v(t), e[22](null), e[24](null), S && S.d(), z && z.d(), W(c), M = !1, we(w);
    }
  };
}
function _1(e, t, n) {
  let { value: l = "" } = t, { onInput: r = () => {
  } } = t, { width: i = "w-full max-w-2xl" } = t, { dataFields: o = [] } = t, { onRun: a = () => {
  } } = t, { onSaveAs: f = () => {
  } } = t, { onSave: s = () => {
  } } = t, { onDiscard: u = () => {
  } } = t, { onExplain: c = () => {
  } } = t, { onHistoryClick: d = () => {
  } } = t, { hasUnsavedChanges: m = !1 } = t, { allowSave: b = !1 } = t, _, y, M, w = [], S = 0, z = !1, E = 0, D = "highlightView-" + new Array(20).fill(0).map(() => Math.floor(Math.random() * 10)).join(""), I = [], j = -1, A = !1;
  Nt(() => {
    R(""), document.addEventListener("click", q);
  }), wa(() => {
    document.removeEventListener("click", q);
  });
  function q(O) {
    if (y && _) {
      const he = O.target, Ne = y.contains(he), Ee = _.contains(he);
      (!Ne || Ee && z) && (console.log("🖱️ Click detected - closing autocomplete"), n(11, z = !1));
    }
  }
  function R(O) {
    if (A) {
      A = !1;
      return;
    }
    I = I.slice(0, j + 1), I.push(O), j = I.length - 1, I.length > 50 && (I = I.slice(-50), j = I.length - 1), console.log("📝 Added to history:", O, "Index:", j);
  }
  function T() {
    if (j > 0) {
      A = !0, j--;
      const O = I[j];
      console.log("↶ Undo to:", O), n(0, l = O), r(O), _ && (n(6, _.value = O, _), _.focus());
    }
  }
  function ee() {
    if (j < I.length - 1) {
      A = !0, j++;
      const O = I[j];
      console.log("↷ Redo to:", O), n(0, l = O), r(O), _ && (n(6, _.value = O, _), _.focus());
    }
  }
  function H(O) {
    const he = O.target, Ne = he.value;
    R(Ne), n(0, l = Ne), r(Ne), E = he.selectionStart || 0, Q(Ne, E);
  }
  function Q(O, he) {
    const Ne = O.substring(0, he);
    O.substring(he);
    const Ee = Ne.match(/([^\s]*)$/), Te = Ee ? Ee[1] : "";
    Te.length > 0 ? (n(9, w = m1(o, Te, Ne)), n(11, z = w.length > 0), n(10, S = 0)) : n(11, z = !1);
  }
  function B(O) {
    if (O.ctrlKey || O.metaKey)
      if (O.key === "z" && !O.shiftKey) {
        O.preventDefault(), T();
        return;
      } else if (O.key === "y" || O.key === "z" && O.shiftKey) {
        O.preventDefault(), ee();
        return;
      } else if (O.key === "Enter" && O.shiftKey) {
        O.preventDefault(), b && s(), a();
        return;
      } else
        O.key === "s" && b && (O.preventDefault(), O.shiftKey ? ye() : s());
    if (z)
      switch (O.key) {
        case "ArrowDown":
          O.preventDefault(), n(10, S = (S + 1) % w.length);
          break;
        case "ArrowUp":
          O.preventDefault(), n(10, S = S === 0 ? w.length - 1 : S - 1);
          break;
        case "Enter":
          z && (O.preventDefault(), Y(w[S]));
          break;
        case "Escape":
          n(11, z = !1);
          break;
        case "Tab":
          z && (O.preventDefault(), Y(w[S]));
          break;
      }
  }
  function Y(O) {
    const he = l.substring(0, E), Ne = l.substring(E), Ee = he.match(/([^\s]*)$/), Te = Ee ? Ee[1] : "", Ve = he.length - Te.length;
    let Pe;
    if (O.type === "data_item")
      if (Te.includes("{")) {
        const He = he.match(/\{([^}]*?)(?:,\s*([^},]*))?$/);
        He ? He[2] ? Pe = he.substring(0, He.index + He[1].length + 2) + O.value : Pe = he.substring(0, He.index + 1) + O.value : Pe = he + O.value;
      } else
        Pe = he + "{" + O.value;
    else
      Pe = he.substring(0, Ve) + "#" + O.value;
    const K = Pe + Ne;
    n(0, l = K), r(K);
    const De = Pe.length;
    setTimeout(
      () => {
        _ && (_.setSelectionRange(De, De), _.focus());
      },
      0
    ), n(11, z = !1);
  }
  function ye() {
    let O = prompt("Choose a name for the new variable:");
    O && f(O);
  }
  function te(O) {
    Se[O ? "unshift" : "push"](() => {
      _ = O, n(6, _), n(0, l);
    });
  }
  function ue() {
    l = this.value, n(0, l);
  }
  function be(O) {
    Se[O ? "unshift" : "push"](() => {
      M = O, n(7, M), n(0, l), n(12, D);
    });
  }
  const se = (O) => Y(O), ge = (O, he) => {
    (he.key === "Enter" || he.key === " ") && (he.preventDefault(), Y(O));
  }, X = (O) => n(10, S = O);
  function ae(O) {
    Se[O ? "unshift" : "push"](() => {
      y = O, n(8, y);
    });
  }
  const ne = () => {
    b && s(), a();
  };
  return e.$$set = (O) => {
    "value" in O && n(0, l = O.value), "onInput" in O && n(16, r = O.onInput), "width" in O && n(17, i = O.width), "dataFields" in O && n(18, o = O.dataFields), "onRun" in O && n(1, a = O.onRun), "onSaveAs" in O && n(19, f = O.onSaveAs), "onSave" in O && n(2, s = O.onSave), "onDiscard" in O && n(3, u = O.onDiscard), "onExplain" in O && n(20, c = O.onExplain), "onHistoryClick" in O && n(21, d = O.onHistoryClick), "hasUnsavedChanges" in O && n(4, m = O.hasUnsavedChanges), "allowSave" in O && n(5, b = O.allowSave);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*highlightedView, value*/
    129 && M && l !== void 0) {
      let O = l;
      n(7, M.innerText = Ua(O), M), Wa({
        selector: `#${D}`,
        patterns: Ka
      });
    }
    e.$$.dirty[0] & /*textarea, value*/
    65 && _ && l !== void 0 && _.value !== l && (n(6, _.value = l, _), R(l));
  }, [
    l,
    a,
    s,
    u,
    m,
    b,
    _,
    M,
    y,
    w,
    S,
    z,
    D,
    H,
    B,
    Y,
    r,
    i,
    o,
    f,
    c,
    d,
    te,
    ue,
    be,
    se,
    ge,
    X,
    ae,
    ne
  ];
}
class h1 extends Ce {
  constructor(t) {
    super(), ve(
      this,
      t,
      _1,
      b1,
      pe,
      {
        value: 0,
        onInput: 16,
        width: 17,
        dataFields: 18,
        onRun: 1,
        onSaveAs: 19,
        onSave: 2,
        onDiscard: 3,
        onExplain: 20,
        onHistoryClick: 21,
        hasUnsavedChanges: 4,
        allowSave: 5
      },
      null,
      [-1, -1]
    );
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(t) {
    this.$$set({ value: t }), Oe();
  }
  get onInput() {
    return this.$$.ctx[16];
  }
  set onInput(t) {
    this.$$set({ onInput: t }), Oe();
  }
  get width() {
    return this.$$.ctx[17];
  }
  set width(t) {
    this.$$set({ width: t }), Oe();
  }
  get dataFields() {
    return this.$$.ctx[18];
  }
  set dataFields(t) {
    this.$$set({ dataFields: t }), Oe();
  }
  get onRun() {
    return this.$$.ctx[1];
  }
  set onRun(t) {
    this.$$set({ onRun: t }), Oe();
  }
  get onSaveAs() {
    return this.$$.ctx[19];
  }
  set onSaveAs(t) {
    this.$$set({ onSaveAs: t }), Oe();
  }
  get onSave() {
    return this.$$.ctx[2];
  }
  set onSave(t) {
    this.$$set({ onSave: t }), Oe();
  }
  get onDiscard() {
    return this.$$.ctx[3];
  }
  set onDiscard(t) {
    this.$$set({ onDiscard: t }), Oe();
  }
  get onExplain() {
    return this.$$.ctx[20];
  }
  set onExplain(t) {
    this.$$set({ onExplain: t }), Oe();
  }
  get onHistoryClick() {
    return this.$$.ctx[21];
  }
  set onHistoryClick(t) {
    this.$$set({ onHistoryClick: t }), Oe();
  }
  get hasUnsavedChanges() {
    return this.$$.ctx[4];
  }
  set hasUnsavedChanges(t) {
    this.$$set({ hasUnsavedChanges: t }), Oe();
  }
  get allowSave() {
    return this.$$.ctx[5];
  }
  set allowSave(t) {
    this.$$set({ allowSave: t }), Oe();
  }
}
function $t(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object) || e.constructor !== t.constructor)
    return !1;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      if (!t.hasOwnProperty(n))
        return !1;
      if (e[n] !== t[n] && (typeof e[n] != "object" || !$t(e[n], t[n])))
        return !1;
    }
  for (n in t)
    if (t.hasOwnProperty(n) && !e.hasOwnProperty(n))
      return !1;
  return !0;
}
function ra(e, t, n) {
  const l = e.slice();
  return l[50] = t[n][0], l[51] = t[n][1], l[53] = n, l;
}
function ia(e) {
  let t, n, l, r, i, o;
  return n = new or({
    props: {
      class: "w-full flex items-center gap-2 " + /*draggingCounter*/
      (e[15] > 0 || /*draggingInto*/
      e[11] ? "bg-blue-200 dark:bg-blue-200/40" : "hover:bg-gray-100 dark:hover:bg-gray-800") + " dark:text-gray-100 text-gray-900 pr-4 py-2 ",
      style: "padding-left: " + (-0.5 + /*indentLevel*/
      e[3] * 1.5) + "rem;",
      $$slots: {
        default: [
          p1,
          ({ hovering: a }) => ({ 54: a }),
          ({ hovering: a }) => [0, a ? 8388608 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      t = k("div"), U(n.$$.fragment), g(t, "class", l = "w-full cursor-pointer select-none " + (!/*collapsed*/
      e[16] && /*itemCount*/
      e[17] > 0 || /*collapsed*/
      (e[16] || /*itemCount*/
      e[17] == 0) && /*showBorder*/
      e[10] ? "border-b border-gray-200 dark:border-gray-700" : "")), g(t, "draggable", "true");
    },
    m(a, f) {
      C(a, t, f), V(n, t, null), r = !0, i || (o = [
        x(t, "dragover", Za),
        x(
          t,
          "drop",
          /*drop_handler*/
          e[33]
        ),
        x(t, "click", function() {
          Fe(
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
        x(
          t,
          "dragstart",
          /*dragstart_handler*/
          e[34]
        ),
        x(t, "dragenter", qe(ln(
          /*dragenter_handler*/
          e[35]
        ))),
        x(t, "dragleave", qe(
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
      e[10] ? "border-b border-gray-200 dark:border-gray-700" : ""))) && g(t, "class", l);
    },
    i(a) {
      r || (p(n.$$.fragment, a), r = !0);
    },
    o(a) {
      N(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && v(t), W(n), i = !1, we(o);
    }
  };
}
function y1(e) {
  let t, n, l, r, i, o, a;
  return {
    c() {
      t = k("div"), n = G(
        /*name*/
        e[0]
      ), l = P(), r = k("span"), i = G("("), o = G(
        /*itemCount*/
        e[17]
      ), a = G(")"), g(r, "class", "text-xs text-gray-500"), g(t, "class", "font-semibold flex-auto py-0.5 truncate");
    },
    m(f, s) {
      C(f, t, s), h(t, n), h(t, l), h(t, r), h(r, i), h(r, o), h(r, a);
    },
    p(f, s) {
      s[0] & /*name*/
      1 && oe(
        n,
        /*name*/
        f[0]
      ), s[0] & /*itemCount*/
      131072 && oe(
        o,
        /*itemCount*/
        f[17]
      );
    },
    d(f) {
      f && v(t);
    }
  };
}
function k1(e) {
  let t, n, l, r;
  return {
    c() {
      t = k("form"), n = k("input"), g(n, "type", "text"), g(n, "class", "flat-text-input w-full"), g(t, "class", "flex-auto");
    },
    m(i, o) {
      C(i, t, o), h(t, n), xe(
        n,
        /*newName*/
        e[13]
      ), e[24](n), l || (r = [
        x(
          n,
          "input",
          /*input_input_handler*/
          e[23]
        ),
        x(
          n,
          "keydown",
          /*keydown_handler*/
          e[25]
        ),
        x(
          n,
          "blur",
          /*blur_handler*/
          e[26]
        ),
        x(t, "submit", qe(ln(
          /*submit_handler*/
          e[27]
        )))
      ], l = !0);
    },
    p(i, o) {
      o[0] & /*newName*/
      8192 && n.value !== /*newName*/
      i[13] && xe(
        n,
        /*newName*/
        i[13]
      );
    },
    d(i) {
      i && v(t), e[24](null), l = !1, we(r);
    }
  };
}
function oa(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b, _, y, M, w, S, z;
  return n = new ce({
    props: { icon: qt, class: "inline mr-2" }
  }), o = new ce({
    props: { icon: qt, class: "inline mr-2" }
  }), c = new ce({
    props: { icon: Hr, class: "inline" }
  }), b = new ce({ props: { icon: rr } }), M = new ce({ props: { icon: Br } }), {
    c() {
      t = k("button"), U(n.$$.fragment), l = G(`
          Group`), r = P(), i = k("button"), U(o.$$.fragment), a = G(`
          Query`), f = P(), s = k("div"), u = k("button"), U(c.$$.fragment), d = P(), m = k("button"), U(b.$$.fragment), _ = P(), y = k("button"), U(M.$$.fragment), g(t, "class", "px-2 py-1 font-semibold text-xs rounded transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white whitespace-nowrap"), g(t, "title", "Create a new group"), g(i, "class", "px-2 py-1 font-semibold text-xs rounded transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white whitespace-nowrap"), g(i, "title", "Create a new query"), g(u, "class", "px-1 text-xs hover:opacity-50 dark:text-gray-100"), g(u, "title", "Rename this group"), g(m, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), g(m, "title", "Duplicate this group"), g(y, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), g(y, "title", "Delete this group"), g(s, "class", "flex items-center");
    },
    m(E, D) {
      C(E, t, D), V(n, t, null), h(t, l), C(E, r, D), C(E, i, D), V(o, i, null), h(i, a), C(E, f, D), C(E, s, D), h(s, u), V(c, u, null), h(s, d), h(s, m), V(b, m, null), h(s, _), h(s, y), V(M, y, null), w = !0, S || (z = [
        x(t, "click", qe(
          /*click_handler*/
          e[28]
        )),
        x(i, "click", qe(
          /*click_handler_1*/
          e[29]
        )),
        x(u, "click", qe(
          /*click_handler_2*/
          e[30]
        )),
        x(m, "click", qe(
          /*click_handler_3*/
          e[31]
        )),
        x(y, "click", qe(
          /*click_handler_4*/
          e[32]
        ))
      ], S = !0);
    },
    p: Z,
    i(E) {
      w || (p(n.$$.fragment, E), p(o.$$.fragment, E), p(c.$$.fragment, E), p(b.$$.fragment, E), p(M.$$.fragment, E), w = !0);
    },
    o(E) {
      N(n.$$.fragment, E), N(o.$$.fragment, E), N(c.$$.fragment, E), N(b.$$.fragment, E), N(M.$$.fragment, E), w = !1;
    },
    d(E) {
      E && v(t), W(n), E && v(r), E && v(i), W(o), E && v(f), E && v(s), W(c), W(b), W(M), S = !1, we(z);
    }
  };
}
function p1(e) {
  let t, n, l, r, i, o, a;
  n = new ce({
    props: {
      icon: Ze,
      class: "inline-block w-3 h-3 shrink-0 text-sm opacity-70 " + /*collapsed*/
      (e[16] ? "-rotate-90" : "")
    }
  });
  function f(d, m) {
    return m[0] & /*editingPath, path*/
    4098 && (r = null), r == null && (r = !!$t(
      /*editingPath*/
      d[12],
      /*path*/
      d[1]
    )), r ? k1 : y1;
  }
  let s = f(e, [-1, -1]), u = s(e), c = (
    /*hovering*/
    e[54] && oa(e)
  );
  return {
    c() {
      t = k("div"), U(n.$$.fragment), l = P(), u.c(), i = P(), c && c.c(), o = _e(), g(t, "class", "w-4");
    },
    m(d, m) {
      C(d, t, m), V(n, t, null), C(d, l, m), u.m(d, m), C(d, i, m), c && c.m(d, m), C(d, o, m), a = !0;
    },
    p(d, m) {
      const b = {};
      m[0] & /*collapsed*/
      65536 && (b.class = "inline-block w-3 h-3 shrink-0 text-sm opacity-70 " + /*collapsed*/
      (d[16] ? "-rotate-90" : "")), n.$set(b), s === (s = f(d, m)) && u ? u.p(d, m) : (u.d(1), u = s(d), u && (u.c(), u.m(i.parentNode, i))), /*hovering*/
      d[54] ? c ? (c.p(d, m), m[1] & /*hovering*/
      8388608 && p(c, 1)) : (c = oa(d), c.c(), p(c, 1), c.m(o.parentNode, o)) : c && (re(), N(c, 1, 1, () => {
        c = null;
      }), ie());
    },
    i(d) {
      a || (p(n.$$.fragment, d), p(c), a = !0);
    },
    o(d) {
      N(n.$$.fragment, d), N(c), a = !1;
    },
    d(d) {
      d && v(t), W(n), d && v(l), u.d(d), d && v(i), c && c.d(d), d && v(o);
    }
  };
}
function aa(e) {
  let t, n, l = Object.entries(
    /*queries*/
    e[2]
  ).sort(ca), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = sa(ra(e, l, o));
  const i = (o) => N(r[o], 1, 1, () => {
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
      C(o, t, a), n = !0;
    },
    p(o, a) {
      if (a[0] & /*itemCount, showBorder, draggingCounter, draggingInto, onSelect, path, queries, handleDrop, indentLevel, deleteItem, onDuplicate, editingPath, onMove, newName, editBox, onNewQuery, onNewGroup, onDelete*/
      1769470 | a[1] & /*hovering*/
      8388608) {
        l = Object.entries(
          /*queries*/
          o[2]
        ).sort(ca);
        let f;
        for (f = 0; f < l.length; f += 1) {
          const s = ra(o, l, f);
          r[f] ? (r[f].p(s, a), p(r[f], 1)) : (r[f] = sa(s), r[f].c(), p(r[f], 1), r[f].m(t.parentNode, t));
        }
        for (re(), f = l.length; f < r.length; f += 1)
          i(f);
        ie();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < l.length; a += 1)
          p(r[a]);
        n = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1)
        N(r[a]);
      n = !1;
    },
    d(o) {
      Ge(r, o), o && v(t);
    }
  };
}
function w1(e) {
  let t, n;
  return t = new $a({
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
      U(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
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
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function v1(e) {
  let t, n, l, r, i, o, a;
  n = new or({
    props: {
      class: "block w-full flex items-center gap-2 pr-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100 text-gray-900",
      style: "padding-left: " + (-0.5 + /*indentLevel*/
      (e[3] + 1) * 1.5) + "rem;",
      $$slots: {
        default: [
          N1,
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
      t = k("div"), U(n.$$.fragment), l = P(), g(t, "class", r = "w-full cursor-pointer select-none " + /*i*/
      (e[53] < /*itemCount*/
      e[17] - 1 || /*showBorder*/
      e[10] ? "border-b border-gray-200 dark:border-gray-700" : "")), g(t, "draggable", "true");
    },
    m(u, c) {
      C(u, t, c), V(n, t, null), h(t, l), i = !0, o || (a = [
        x(t, "click", function() {
          Fe(
            /*draggingCounter*/
            e[15] > 0 || /*draggingInto*/
            e[11] ? void 0 : f
          ) && /*draggingCounter*/
          (e[15] > 0 || /*draggingInto*/
          e[11] ? void 0 : f).apply(this, arguments);
        }),
        x(t, "dragstart", s),
        x(t, "dragover", Za),
        x(
          t,
          "drop",
          /*drop_handler_1*/
          e[47]
        ),
        x(t, "dragenter", qe(ln(
          /*dragenter_handler_1*/
          e[48]
        ))),
        x(t, "dragleave", qe(
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
      e[10] ? "border-b border-gray-200 dark:border-gray-700" : ""))) && g(t, "class", r);
    },
    i(u) {
      i || (p(n.$$.fragment, u), i = !0);
    },
    o(u) {
      N(n.$$.fragment, u), i = !1;
    },
    d(u) {
      u && v(t), W(n), o = !1, we(a);
    }
  };
}
function C1(e) {
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
      t = k("div"), l = G(n), r = G(`  
              `), i = k("span"), a = G(o), g(i, "class", "font-normal font-mono text-gray-600 dark:text-gray-400"), g(t, "class", "font-semibold whitespace-nowrap flex-auto truncate"), g(t, "title", f = /*key*/
      e[50]);
    },
    m(s, u) {
      C(s, t, u), h(t, l), h(t, r), h(t, i), h(i, a);
    },
    p(s, u) {
      u[0] & /*queries*/
      4 && n !== (n = /*key*/
      s[50] + "") && oe(l, n), u[0] & /*queries*/
      4 && o !== (o = /*value*/
      s[51].replace(`
`, " ") + "") && oe(a, o), u[0] & /*queries*/
      4 && f !== (f = /*key*/
      s[50]) && g(t, "title", f);
    },
    d(s) {
      s && v(t);
    }
  };
}
function S1(e) {
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
      t = k("form"), n = k("input"), g(n, "type", "text"), g(n, "class", "flat-text-input w-full"), g(t, "class", "flex-auto");
    },
    m(a, f) {
      C(a, t, f), h(t, n), xe(
        n,
        /*newName*/
        e[13]
      ), e[38](n), l || (r = [
        x(
          n,
          "input",
          /*input_input_handler_1*/
          e[37]
        ),
        x(
          n,
          "keydown",
          /*keydown_handler_1*/
          e[39]
        ),
        x(n, "blur", i),
        x(t, "submit", qe(ln(o)))
      ], l = !0);
    },
    p(a, f) {
      e = a, f[0] & /*newName*/
      8192 && n.value !== /*newName*/
      e[13] && xe(
        n,
        /*newName*/
        e[13]
      );
    },
    d(a) {
      a && v(t), e[38](null), l = !1, we(r);
    }
  };
}
function fa(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d;
  l = new ce({
    props: { icon: Hr, class: "inline" }
  });
  function m() {
    return (
      /*click_handler_5*/
      e[42](
        /*key*/
        e[50]
      )
    );
  }
  o = new ce({ props: { icon: rr } });
  function b() {
    return (
      /*click_handler_6*/
      e[43](
        /*key*/
        e[50]
      )
    );
  }
  s = new ce({ props: { icon: Br } });
  function _() {
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
      t = k("div"), n = k("button"), U(l.$$.fragment), r = P(), i = k("button"), U(o.$$.fragment), a = P(), f = k("button"), U(s.$$.fragment), g(n, "class", "px-1 text-xs hover:opacity-50 dark:text-gray-100"), g(n, "title", "Rename this group"), g(i, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), g(i, "title", "Duplicate this query"), g(f, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), g(f, "title", "Delete this query"), g(t, "class", "flex items-center");
    },
    m(y, M) {
      C(y, t, M), h(t, n), V(l, n, null), h(t, r), h(t, i), V(o, i, null), h(t, a), h(t, f), V(s, f, null), u = !0, c || (d = [
        x(n, "click", qe(m)),
        x(i, "click", qe(b)),
        x(f, "click", qe(_))
      ], c = !0);
    },
    p(y, M) {
      e = y;
    },
    i(y) {
      u || (p(l.$$.fragment, y), p(o.$$.fragment, y), p(s.$$.fragment, y), u = !0);
    },
    o(y) {
      N(l.$$.fragment, y), N(o.$$.fragment, y), N(s.$$.fragment, y), u = !1;
    },
    d(y) {
      y && v(t), W(l), W(o), W(s), c = !1, we(d);
    }
  };
}
function N1(e) {
  let t, n, l, r;
  function i(s, u) {
    return u[0] & /*editingPath, path, queries*/
    4102 && (t = null), t == null && (t = !!$t(
      /*editingPath*/
      s[12],
      [
        .../*path*/
        s[1],
        /*key*/
        s[50]
      ]
    )), t ? S1 : C1;
  }
  let o = i(e, [-1, -1]), a = o(e), f = (
    /*hovering*/
    e[54] && fa(e)
  );
  return {
    c() {
      a.c(), n = P(), f && f.c(), l = _e();
    },
    m(s, u) {
      a.m(s, u), C(s, n, u), f && f.m(s, u), C(s, l, u), r = !0;
    },
    p(s, u) {
      o === (o = i(s, u)) && a ? a.p(s, u) : (a.d(1), a = o(s), a && (a.c(), a.m(n.parentNode, n))), /*hovering*/
      s[54] ? f ? (f.p(s, u), u[1] & /*hovering*/
      8388608 && p(f, 1)) : (f = fa(s), f.c(), p(f, 1), f.m(l.parentNode, l)) : f && (re(), N(f, 1, 1, () => {
        f = null;
      }), ie());
    },
    i(s) {
      r || (p(f), r = !0);
    },
    o(s) {
      N(f), r = !1;
    },
    d(s) {
      a.d(s), s && v(n), f && f.d(s), s && v(l);
    }
  };
}
function sa(e) {
  let t, n, l, r;
  const i = [v1, w1], o = [];
  function a(f, s) {
    return typeof /*value*/
    f[51] == "string" ? 0 : 1;
  }
  return t = a(e), n = o[t] = i[t](e), {
    c() {
      n.c(), l = _e();
    },
    m(f, s) {
      o[t].m(f, s), C(f, l, s), r = !0;
    },
    p(f, s) {
      let u = t;
      t = a(f), t === u ? o[t].p(f, s) : (re(), N(o[u], 1, 1, () => {
        o[u] = null;
      }), ie(), n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), p(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      r || (p(n), r = !0);
    },
    o(f) {
      N(n), r = !1;
    },
    d(f) {
      o[t].d(f), f && v(l);
    }
  };
}
function M1(e) {
  let t, n, l, r = (
    /*indentLevel*/
    e[3] > 0 && ia(e)
  ), i = !/*collapsed*/
  e[16] && aa(e);
  return {
    c() {
      r && r.c(), t = P(), i && i.c(), n = _e();
    },
    m(o, a) {
      r && r.m(o, a), C(o, t, a), i && i.m(o, a), C(o, n, a), l = !0;
    },
    p(o, a) {
      /*indentLevel*/
      o[3] > 0 ? r ? (r.p(o, a), a[0] & /*indentLevel*/
      8 && p(r, 1)) : (r = ia(o), r.c(), p(r, 1), r.m(t.parentNode, t)) : r && (re(), N(r, 1, 1, () => {
        r = null;
      }), ie()), /*collapsed*/
      o[16] ? i && (re(), N(i, 1, 1, () => {
        i = null;
      }), ie()) : i ? (i.p(o, a), a[0] & /*collapsed*/
      65536 && p(i, 1)) : (i = aa(o), i.c(), p(i, 1), i.m(n.parentNode, n));
    },
    i(o) {
      l || (p(r), p(i), l = !0);
    },
    o(o) {
      N(r), N(i), l = !1;
    },
    d(o) {
      r && r.d(o), o && v(t), i && i.d(o), o && v(n);
    }
  };
}
function ua(e, t) {
  var n, l;
  (n = e.dataTransfer) == null || n.setData("application/json", JSON.stringify(t)), (l = e.dataTransfer) == null || l.setData("text/plain", JSON.stringify(t)), e.stopPropagation();
}
function Za(e) {
  e.preventDefault(), e.dataTransfer.dropEffect = "move";
}
function ca(e, t) {
  return typeof e[1] == "string" == (typeof t[1] == "string") ? e[0].localeCompare(t[0]) : typeof e[1] == "string" ? -1 : 1;
}
function L1(e, t, n) {
  let l, { name: r = null } = t, { path: i = [] } = t, { queries: o = {} } = t, { indentLevel: a = 0 } = t, { onSelect: f = () => {
  } } = t, { onNewGroup: s = () => {
  } } = t, { onNewQuery: u = () => {
  } } = t, { onDelete: c = () => {
  } } = t, { onDuplicate: d = () => {
  } } = t, { onDraggingChange: m = () => {
  } } = t, { onMove: b = () => {
  } } = t, { showBorder: _ = !1 } = t, { draggingInto: y = !1 } = t, M = a > 0;
  function w() {
    a > 0 && n(16, M = !M);
  }
  function S($ = null) {
    ($ == null || l == 0 || typeof o[$] == "string" && o[$].length == 0 || confirm(`Are you sure you want to delete this ${$ != null ? "query" : "group"}? This action cannot be undone.`)) && c($ != null ? [...i, $] : i);
  }
  let z = null, E = null, D, I;
  function j($, je) {
    var ot;
    $.preventDefault(), n(15, A = 0);
    const $e = (ot = $.dataTransfer) == null ? void 0 : ot.getData("application/json");
    if ($e) {
      const Be = JSON.parse($e);
      je = [...je, Be[Be.length - 1]], JSON.stringify(Be) !== JSON.stringify(je) && b(Be, je);
    }
    n(16, M = !1);
  }
  let A = 0;
  function q() {
    E = this.value, n(13, E), n(12, z);
  }
  function R($) {
    Se[$ ? "unshift" : "push"](() => {
      I = $, n(14, I);
    });
  }
  const T = ($) => {
    $.key === "Escape" && ($.preventDefault(), n(12, z = null));
  }, ee = () => b(i, [...i.slice(0, i.length - 1), E]), H = () => {
    b(i, [...i.slice(0, i.length - 1), E]);
  }, Q = () => {
    s(i), n(16, M = !1);
  }, B = () => u(i), Y = () => n(12, z = i), ye = () => d(i), te = () => S(), ue = ($) => j($, i), be = ($) => ua($, i), se = () => n(15, A++, A), ge = () => n(15, A--, A);
  function X() {
    E = this.value, n(13, E), n(12, z);
  }
  function ae($) {
    Se[$ ? "unshift" : "push"](() => {
      I = $, n(14, I);
    });
  }
  const ne = ($) => {
    $.key === "Escape" && ($.preventDefault(), n(12, z = null));
  }, O = ($) => {
    b([...i, $], [...i, E]), n(12, z = null);
  }, he = ($) => {
    b([...i, $], [...i, E]);
  }, Ne = ($) => n(12, z = [...i, $]), Ee = ($) => d([...i, $]), Te = ($) => S($), Ve = ($, je) => f([...i, $], je), Pe = ($, je) => ua(je, [...i, $]), K = ($) => j($, i), De = () => n(15, A++, A), He = () => n(15, A--, A);
  return e.$$set = ($) => {
    "name" in $ && n(0, r = $.name), "path" in $ && n(1, i = $.path), "queries" in $ && n(2, o = $.queries), "indentLevel" in $ && n(3, a = $.indentLevel), "onSelect" in $ && n(4, f = $.onSelect), "onNewGroup" in $ && n(5, s = $.onNewGroup), "onNewQuery" in $ && n(6, u = $.onNewQuery), "onDelete" in $ && n(7, c = $.onDelete), "onDuplicate" in $ && n(8, d = $.onDuplicate), "onDraggingChange" in $ && n(21, m = $.onDraggingChange), "onMove" in $ && n(9, b = $.onMove), "showBorder" in $ && n(10, _ = $.showBorder), "draggingInto" in $ && n(11, y = $.draggingInto);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*queries*/
    4 && n(17, l = o ? Object.keys(o).length : 0), e.$$.dirty[0] & /*editingPath, newName*/
    12288 && (z != null && E == null ? n(13, E = z[z.length - 1] ?? null) : z || n(13, E = null)), e.$$.dirty[0] & /*editBox, oldEditBox*/
    4210688 && I !== D && (I && (I.focus(), I.select()), n(22, D = I)), e.$$.dirty[0] & /*onDraggingChange, draggingCounter, draggingInto*/
    2131968 && m(A > 0 || y);
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
    _,
    y,
    z,
    E,
    I,
    A,
    M,
    l,
    w,
    S,
    j,
    m,
    D,
    q,
    R,
    T,
    ee,
    H,
    Q,
    B,
    Y,
    ye,
    te,
    ue,
    be,
    se,
    ge,
    X,
    ae,
    ne,
    O,
    he,
    Ne,
    Ee,
    Te,
    Ve,
    Pe,
    K,
    De,
    He
  ];
}
class $a extends Ce {
  constructor(t) {
    super(), ve(
      this,
      t,
      L1,
      M1,
      pe,
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
function da(e) {
  let t, n, l, r, i;
  return n = new ce({
    props: { icon: Na, class: "inline" }
  }), {
    c() {
      t = k("button"), U(n.$$.fragment), g(t, "class", "px-2 py-1.5 text-sm text-center font-semibold rounded transition-colors duration-200 bg-gray-600 hover:bg-gray-500 text-white whitespace-nowrap"), g(t, "title", "Close query browser");
    },
    m(o, a) {
      C(o, t, a), V(n, t, null), l = !0, r || (i = x(t, "click", function() {
        Fe(
          /*onClose*/
          e[3]
        ) && e[3].apply(this, arguments);
      }), r = !0);
    },
    p(o, a) {
      e = o;
    },
    i(o) {
      l || (p(n.$$.fragment, o), l = !0);
    },
    o(o) {
      N(n.$$.fragment, o), l = !1;
    },
    d(o) {
      o && v(t), W(n), r = !1, i();
    }
  };
}
function z1(e) {
  let t;
  return {
    c() {
      t = k("div"), t.innerHTML = `<div class="w-3/4 text-gray-700 dark:text-gray-200 text-lg font-semibold">File is empty</div> 
      <p class="text-gray-600 dark:text-gray-400 w-1/3">Click above to create a query or group of queries in this file.</p>`, g(t, "class", "flex flex-col w-full flex-auto min-h-0 items-center justify-center text-center gap-4");
    },
    m(n, l) {
      C(n, t, l);
    },
    p: Z,
    i: Z,
    o: Z,
    d(n) {
      n && v(t);
    }
  };
}
function R1(e) {
  let t, n, l, r, i, o, a;
  function f(u) {
    e[20](u);
  }
  let s = {
    onSelect: (
      /*onSelect*/
      e[4]
    ),
    onNewGroup: (
      /*func*/
      e[14]
    ),
    onNewQuery: (
      /*func_1*/
      e[15]
    ),
    onDelete: (
      /*func_2*/
      e[16]
    ),
    onDuplicate: (
      /*func_3*/
      e[17]
    ),
    onMove: (
      /*func_4*/
      e[18]
    ),
    onDraggingChange: (
      /*func_5*/
      e[19]
    )
  };
  return (
    /*fileContents*/
    e[0] !== void 0 && (s.queries = /*fileContents*/
    e[0]), r = new $a({ props: s }), Se.push(() => lt(r, "queries", f)), {
      c() {
        t = k("div"), t.textContent = `Click on a query to edit, hover to see actions, or drag-and-drop to
      organize.`, n = P(), l = k("div"), U(r.$$.fragment), g(t, "class", "mx-4 mb-2 text-xs text-gray-500 dark:text-gray-400"), g(l, "class", o = "rounded-lg " + /*draggingOnBrowser*/
        (e[5] || /*draggingCounter*/
        e[6] > 0 ? "outline outline-2 outline-blue-500" : "") + " border border-gray-200 dark:border-gray-700 overflow-auto min-h-0 flex-auto mx-4");
      },
      m(u, c) {
        C(u, t, c), C(u, n, c), C(u, l, c), V(r, l, null), a = !0;
      },
      p(u, c) {
        const d = {};
        c & /*onSelect*/
        16 && (d.onSelect = /*onSelect*/
        u[4]), c & /*fileContents*/
        1 && (d.onNewGroup = /*func*/
        u[14]), c & /*fileContents*/
        1 && (d.onDelete = /*func_2*/
        u[16]), c & /*fileContents*/
        1 && (d.onDuplicate = /*func_3*/
        u[17]), c & /*draggingOnBrowser*/
        32 && (d.onDraggingChange = /*func_5*/
        u[19]), !i && c & /*fileContents*/
        1 && (i = !0, d.queries = /*fileContents*/
        u[0], nt(() => i = !1)), r.$set(d), (!a || c & /*draggingOnBrowser, draggingCounter*/
        96 && o !== (o = "rounded-lg " + /*draggingOnBrowser*/
        (u[5] || /*draggingCounter*/
        u[6] > 0 ? "outline outline-2 outline-blue-500" : "") + " border border-gray-200 dark:border-gray-700 overflow-auto min-h-0 flex-auto mx-4")) && g(l, "class", o);
      },
      i(u) {
        a || (p(r.$$.fragment, u), a = !0);
      },
      o(u) {
        N(r.$$.fragment, u), a = !1;
      },
      d(u) {
        u && v(t), u && v(n), u && v(l), W(r);
      }
    }
  );
}
function ma(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = k("div"), n = k("span"), l = G("Queries saved to "), r = k("span"), i = G(
        /*savePath*/
        e[1]
      ), g(r, "class", "font-mono"), g(n, "class", "px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"), g(t, "class", "mx-4 mt-4");
    },
    m(o, a) {
      C(o, t, a), h(t, n), h(n, l), h(n, r), h(r, i);
    },
    p(o, a) {
      a & /*savePath*/
      2 && oe(
        i,
        /*savePath*/
        o[1]
      );
    },
    d(o) {
      o && v(t);
    }
  };
}
function q1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b, _, y, M, w, S, z, E = (
    /*allowClose*/
    e[2] && da(e)
  );
  a = new ce({
    props: { icon: qt, class: "inline mr-2" }
  }), c = new ce({
    props: { icon: qt, class: "inline mr-2" }
  });
  const D = [R1, z1], I = [];
  function j(q, R) {
    return R & /*fileContents*/
    1 && (b = null), b == null && (b = Object.entries(
      /*fileContents*/
      q[0]
    ).length > 0), b ? 0 : 1;
  }
  _ = j(e, -1), y = I[_] = D[_](e);
  let A = (
    /*savePath*/
    e[1] && ma(e)
  );
  return {
    c() {
      t = k("div"), n = k("div"), E && E.c(), l = P(), r = k("h3"), r.textContent = "Queries", i = P(), o = k("button"), U(a.$$.fragment), f = G(`
      Group`), s = P(), u = k("button"), U(c.$$.fragment), d = G(`
      Query`), m = P(), y.c(), M = P(), A && A.c(), g(r, "class", "text-lg py-1 font-semibold text-gray-900 dark:text-gray-100 flex-auto"), fe(
        r,
        "px-2",
        /*allowClose*/
        e[2]
      ), g(o, "class", "px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), g(o, "title", "Create a new group"), g(u, "class", "px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), g(u, "title", "Create a new query at the top level"), g(n, "class", "px-4 pt-2 flex items-center mb-4 gap-2 shrink-0"), g(t, "class", "flex flex-col mb-2 max-h-full"), fe(t, "h-full", Object.entries(
        /*fileContents*/
        e[0]
      ).length == 0);
    },
    m(q, R) {
      C(q, t, R), h(t, n), E && E.m(n, null), h(n, l), h(n, r), h(n, i), h(n, o), V(a, o, null), h(o, f), h(n, s), h(n, u), V(c, u, null), h(u, d), h(t, m), I[_].m(t, null), h(t, M), A && A.m(t, null), w = !0, S || (z = [
        x(
          o,
          "click",
          /*click_handler*/
          e[12]
        ),
        x(
          u,
          "click",
          /*click_handler_1*/
          e[13]
        ),
        x(t, "dragover", E1),
        x(
          t,
          "drop",
          /*drop_handler*/
          e[21]
        ),
        x(t, "dragenter", qe(ln(
          /*dragenter_handler*/
          e[22]
        ))),
        x(t, "dragleave", qe(
          /*dragleave_handler*/
          e[23]
        ))
      ], S = !0);
    },
    p(q, [R]) {
      /*allowClose*/
      q[2] ? E ? (E.p(q, R), R & /*allowClose*/
      4 && p(E, 1)) : (E = da(q), E.c(), p(E, 1), E.m(n, l)) : E && (re(), N(E, 1, 1, () => {
        E = null;
      }), ie()), (!w || R & /*allowClose*/
      4) && fe(
        r,
        "px-2",
        /*allowClose*/
        q[2]
      );
      let T = _;
      _ = j(q, R), _ === T ? I[_].p(q, R) : (re(), N(I[T], 1, 1, () => {
        I[T] = null;
      }), ie(), y = I[_], y ? y.p(q, R) : (y = I[_] = D[_](q), y.c()), p(y, 1), y.m(t, M)), /*savePath*/
      q[1] ? A ? A.p(q, R) : (A = ma(q), A.c(), A.m(t, null)) : A && (A.d(1), A = null), (!w || R & /*Object, fileContents*/
      1) && fe(t, "h-full", Object.entries(
        /*fileContents*/
        q[0]
      ).length == 0);
    },
    i(q) {
      w || (p(E), p(a.$$.fragment, q), p(c.$$.fragment, q), p(y), w = !0);
    },
    o(q) {
      N(E), N(a.$$.fragment, q), N(c.$$.fragment, q), N(y), w = !1;
    },
    d(q) {
      q && v(t), E && E.d(), W(a), W(c), I[_].d(), A && A.d(), S = !1, we(z);
    }
  };
}
function E1(e) {
  e.preventDefault(), e.dataTransfer.dropEffect = "move";
}
function D1(e, t, n) {
  let { fileContents: l = {} } = t, { currentQueryPath: r = [] } = t, { savePath: i = "" } = t, { allowClose: o = !0 } = t, { onClose: a = () => {
  } } = t, { onSelect: f = () => {
  } } = t, { onRename: s = () => {
  } } = t;
  function u(R = []) {
    let T = Ya(l, R);
    n(0, l = T.contents), f(T.queryPath, St(l, T.queryPath));
  }
  function c(R, T) {
    if (console.log("moving", R, T, $t(R, T)), !$t(R, T)) {
      if (typeof St(l, R) == "string" && !Or(T[T.length - 1])) {
        alert("Queries must have variable-style names, containing only alphanumeric characters or underscores, and they must not start with a number.");
        return;
      }
      if (Xr(l, T)) {
        alert("An item with this name already exists - all items must have unique names.");
        return;
      }
      n(0, l = Ja(l, R, T)), $t(r, R) && s(T);
    }
  }
  function d(R, T) {
    var H;
    R.preventDefault(), n(6, b = 0);
    const ee = (H = R.dataTransfer) == null ? void 0 : H.getData("application/json");
    if (ee) {
      const Q = JSON.parse(ee);
      T = [...T, Q[Q.length - 1]], JSON.stringify(Q) !== JSON.stringify(T) && c(Q, T);
    }
  }
  let m = !1, b = 0;
  const _ = () => n(0, l = Xo(l, [])), y = () => {
    u([]);
  }, M = (R) => n(0, l = Xo(l, R)), w = (R) => u(R), S = (R) => n(0, l = ur(l, R)), z = (R) => n(0, l = Yr(l, R).contents), E = (R, T) => c(R, T), D = (R) => n(5, m = R);
  function I(R) {
    l = R, n(0, l);
  }
  const j = (R) => d(R, []), A = () => n(6, b++, b), q = () => n(6, b--, b);
  return e.$$set = (R) => {
    "fileContents" in R && n(0, l = R.fileContents), "currentQueryPath" in R && n(10, r = R.currentQueryPath), "savePath" in R && n(1, i = R.savePath), "allowClose" in R && n(2, o = R.allowClose), "onClose" in R && n(3, a = R.onClose), "onSelect" in R && n(4, f = R.onSelect), "onRename" in R && n(11, s = R.onRename);
  }, [
    l,
    i,
    o,
    a,
    f,
    m,
    b,
    u,
    c,
    d,
    r,
    s,
    _,
    y,
    M,
    w,
    S,
    z,
    E,
    D,
    I,
    j,
    A,
    q
  ];
}
class A1 extends Ce {
  constructor(t) {
    super(), ve(this, t, D1, q1, pe, {
      fileContents: 0,
      currentQueryPath: 10,
      savePath: 1,
      allowClose: 2,
      onClose: 3,
      onSelect: 4,
      onRename: 11
    });
  }
}
function T1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b, _, y, M, w = !!/*savePath*/
  e[4] && ga(e);
  const S = [j1, Q1], z = [];
  function E(A, q) {
    return (
      /*currentQueryPath*/
      A[0].length > 0 ? 0 : 1
    );
  }
  l = E(e), r = z[l] = S[l](e), a = new ce({
    props: { icon: Sa, class: "inline mr-2" }
  });
  function D(A) {
    e[42](A);
  }
  let I = {
    dataFields: (
      /*dataFields*/
      e[5]
    ),
    onRun: (
      /*runQuery*/
      e[29]
    ),
    onExplain: (
      /*onExplain*/
      e[7]
    ),
    onHistoryClick: (
      /*onQueryHistoryClick*/
      e[18]
    ),
    width: "w-full",
    allowSave: !!/*savePath*/
    e[4],
    onSaveAs: (
      /*onSaveAs*/
      e[25]
    ),
    onDiscard: (
      /*onDiscard*/
      e[26]
    ),
    onSave: (
      /*func_2*/
      e[41]
    ),
    hasUnsavedChanges: (
      /*currentQueryPath*/
      e[0].length > 0 && !!/*fileContents*/
      e[1] && /*textInput*/
      e[2] != St(
        /*fileContents*/
        e[1],
        /*currentQueryPath*/
        e[0]
      )
    )
  };
  /*textInput*/
  e[2] !== void 0 && (I.value = /*textInput*/
  e[2]), c = new h1({ props: I }), Se.push(() => lt(c, "value", D));
  let j = (
    /*llmAvailable*/
    e[12] && ha(e)
  );
  return {
    c() {
      t = k("div"), w && w.c(), n = P(), r.c(), i = P(), o = k("button"), U(a.$$.fragment), f = G(`
        History`), s = P(), u = k("div"), U(c.$$.fragment), m = P(), j && j.c(), b = _e(), g(o, "class", "px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white whitespace-nowrap"), g(o, "title", "View query history"), g(t, "class", "px-4 pt-2 flex items-center mb-4 gap-2 shrink-0"), g(u, "class", "shrink h-2/3");
    },
    m(A, q) {
      C(A, t, q), w && w.m(t, null), h(t, n), z[l].m(t, null), h(t, i), h(t, o), V(a, o, null), h(o, f), C(A, s, q), C(A, u, q), V(c, u, null), C(A, m, q), j && j.m(A, q), C(A, b, q), _ = !0, y || (M = x(o, "click", function() {
        Fe(
          /*onQueryHistoryClick*/
          e[18]
        ) && e[18].apply(this, arguments);
      }), y = !0);
    },
    p(A, q) {
      e = A, /*savePath*/
      e[4] ? w ? (w.p(e, q), q[0] & /*savePath*/
      16 && p(w, 1)) : (w = ga(e), w.c(), p(w, 1), w.m(t, n)) : w && (re(), N(w, 1, 1, () => {
        w = null;
      }), ie());
      let R = l;
      l = E(e), l === R ? z[l].p(e, q) : (re(), N(z[R], 1, 1, () => {
        z[R] = null;
      }), ie(), r = z[l], r ? r.p(e, q) : (r = z[l] = S[l](e), r.c()), p(r, 1), r.m(t, i));
      const T = {};
      q[0] & /*dataFields*/
      32 && (T.dataFields = /*dataFields*/
      e[5]), q[0] & /*onExplain*/
      128 && (T.onExplain = /*onExplain*/
      e[7]), q[0] & /*onQueryHistoryClick*/
      262144 && (T.onHistoryClick = /*onQueryHistoryClick*/
      e[18]), q[0] & /*savePath*/
      16 && (T.allowSave = !!/*savePath*/
      e[4]), q[0] & /*currentQueryPath, fileContents, textInput*/
      7 && (T.onSave = /*func_2*/
      e[41]), q[0] & /*currentQueryPath, fileContents, textInput*/
      7 && (T.hasUnsavedChanges = /*currentQueryPath*/
      e[0].length > 0 && !!/*fileContents*/
      e[1] && /*textInput*/
      e[2] != St(
        /*fileContents*/
        e[1],
        /*currentQueryPath*/
        e[0]
      )), !d && q[0] & /*textInput*/
      4 && (d = !0, T.value = /*textInput*/
      e[2], nt(() => d = !1)), c.$set(T), /*llmAvailable*/
      e[12] ? j ? (j.p(e, q), q[0] & /*llmAvailable*/
      4096 && p(j, 1)) : (j = ha(e), j.c(), p(j, 1), j.m(b.parentNode, b)) : j && (re(), N(j, 1, 1, () => {
        j = null;
      }), ie());
    },
    i(A) {
      _ || (p(w), p(r), p(a.$$.fragment, A), p(c.$$.fragment, A), p(j), _ = !0);
    },
    o(A) {
      N(w), N(r), N(a.$$.fragment, A), N(c.$$.fragment, A), N(j), _ = !1;
    },
    d(A) {
      A && v(t), w && w.d(), z[l].d(), W(a), A && v(s), A && v(u), W(c), A && v(m), j && j.d(A), A && v(b), y = !1, M();
    }
  };
}
function P1(e) {
  let t, n, l;
  function r(o) {
    e[33](o);
  }
  let i = {
    savePath: (
      /*savePath*/
      e[4]
    ),
    currentQueryPath: (
      /*currentQueryPath*/
      e[0]
    ),
    allowClose: (
      /*currentQueryPath*/
      e[0].length > 0
    ),
    onClose: (
      /*func*/
      e[31]
    ),
    onSelect: (
      /*handleQuerySelection*/
      e[23]
    ),
    onRename: (
      /*func_1*/
      e[32]
    )
  };
  return (
    /*fileContents*/
    e[1] !== void 0 && (i.fileContents = /*fileContents*/
    e[1]), t = new A1({ props: i }), Se.push(() => lt(t, "fileContents", r)), {
      c() {
        U(t.$$.fragment);
      },
      m(o, a) {
        V(t, o, a), l = !0;
      },
      p(o, a) {
        const f = {};
        a[0] & /*savePath*/
        16 && (f.savePath = /*savePath*/
        o[4]), a[0] & /*currentQueryPath*/
        1 && (f.currentQueryPath = /*currentQueryPath*/
        o[0]), a[0] & /*currentQueryPath*/
        1 && (f.allowClose = /*currentQueryPath*/
        o[0].length > 0), a[0] & /*showingBrowser*/
        4194304 && (f.onClose = /*func*/
        o[31]), a[0] & /*currentQueryPath*/
        1 && (f.onRename = /*func_1*/
        o[32]), !n && a[0] & /*fileContents*/
        2 && (n = !0, f.fileContents = /*fileContents*/
        o[1], nt(() => n = !1)), t.$set(f);
      },
      i(o) {
        l || (p(t.$$.fragment, o), l = !0);
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
function ga(e) {
  let t, n, l, r, i;
  return n = new ce({
    props: { icon: Na, class: "inline" }
  }), {
    c() {
      t = k("button"), U(n.$$.fragment), g(t, "class", "px-2 py-1.5 text-sm text-center font-semibold rounded transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100 whitespace-nowrap"), g(t, "title", "Browse saved queries (Ctrl+Q)");
    },
    m(o, a) {
      C(o, t, a), V(n, t, null), l = !0, r || (i = x(
        t,
        "click",
        /*click_handler*/
        e[34]
      ), r = !0);
    },
    p: Z,
    i(o) {
      l || (p(n.$$.fragment, o), l = !0);
    },
    o(o) {
      N(n.$$.fragment, o), l = !1;
    },
    d(o) {
      o && v(t), W(n), r = !1, i();
    }
  };
}
function Q1(e) {
  let t;
  return {
    c() {
      t = k("h3"), t.textContent = "TempoQL Query", g(t, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100 pr-2 whitespace-nowrap flex-auto truncate");
    },
    m(n, l) {
      C(n, t, l);
    },
    p: Z,
    i: Z,
    o: Z,
    d(n) {
      n && v(t);
    }
  };
}
function j1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b, _, y;
  const M = [I1, O1], w = [];
  function S(z, E) {
    return (
      /*isEditingName*/
      z[19] ? 0 : 1
    );
  }
  return t = S(e), n = w[t] = M[t](e), o = new ce({ props: { icon: rr } }), s = new ce({ props: { icon: Br } }), d = new ce({
    props: { icon: qt, class: "inline mr-2" }
  }), {
    c() {
      n.c(), l = P(), r = k("div"), i = k("button"), U(o.$$.fragment), a = P(), f = k("button"), U(s.$$.fragment), u = P(), c = k("button"), U(d.$$.fragment), m = G(`
          Query`), g(i, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), g(i, "title", "Duplicate this query (Ctrl+D)"), g(f, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), g(f, "title", "Delete this query (Ctrl+Shift+Backspace)"), g(r, "class", "flex items-center"), g(c, "class", "px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white whitespace-nowrap"), g(c, "title", "Create a new query at the top level");
    },
    m(z, E) {
      w[t].m(z, E), C(z, l, E), C(z, r, E), h(r, i), V(o, i, null), h(r, a), h(r, f), V(s, f, null), C(z, u, E), C(z, c, E), V(d, c, null), h(c, m), b = !0, _ || (y = [
        x(i, "click", qe(
          /*duplicateQuery*/
          e[27]
        )),
        x(f, "click", qe(
          /*deleteQuery*/
          e[28]
        )),
        x(
          c,
          "click",
          /*click_handler_2*/
          e[40]
        )
      ], _ = !0);
    },
    p(z, E) {
      let D = t;
      t = S(z), t === D ? w[t].p(z, E) : (re(), N(w[D], 1, 1, () => {
        w[D] = null;
      }), ie(), n = w[t], n ? n.p(z, E) : (n = w[t] = M[t](z), n.c()), p(n, 1), n.m(l.parentNode, l));
    },
    i(z) {
      b || (p(n), p(o.$$.fragment, z), p(s.$$.fragment, z), p(d.$$.fragment, z), b = !0);
    },
    o(z) {
      N(n), N(o.$$.fragment, z), N(s.$$.fragment, z), N(d.$$.fragment, z), b = !1;
    },
    d(z) {
      w[t].d(z), z && v(l), z && v(r), W(o), W(s), z && v(u), z && v(c), W(d), _ = !1, we(y);
    }
  };
}
function O1(e) {
  let t, n, l, r, i;
  t = new or({
    props: {
      class: "rounded-lg px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2 cursor-pointer",
      $$slots: {
        default: [
          H1,
          ({ hovering: a }) => ({ 47: a }),
          ({ hovering: a }) => [0, a ? 65536 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    e[39]
  );
  let o = (
    /*currentQueryPath*/
    e[0].length > 1 && _a(e)
  );
  return {
    c() {
      U(t.$$.fragment), n = P(), o && o.c(), l = P(), r = k("div"), g(r, "class", "flex-auto");
    },
    m(a, f) {
      V(t, a, f), C(a, n, f), o && o.m(a, f), C(a, l, f), C(a, r, f), i = !0;
    },
    p(a, f) {
      const s = {};
      f[0] & /*currentQueryPath*/
      1 | f[1] & /*$$scope, hovering*/
      196608 && (s.$$scope = { dirty: f, ctx: a }), t.$set(s), /*currentQueryPath*/
      a[0].length > 1 ? o ? o.p(a, f) : (o = _a(a), o.c(), o.m(l.parentNode, l)) : o && (o.d(1), o = null);
    },
    i(a) {
      i || (p(t.$$.fragment, a), i = !0);
    },
    o(a) {
      N(t.$$.fragment, a), i = !1;
    },
    d(a) {
      W(t, a), a && v(n), o && o.d(a), a && v(l), a && v(r);
    }
  };
}
function I1(e) {
  let t, n, l, r;
  return {
    c() {
      t = k("form"), n = k("input"), g(n, "type", "text"), g(n, "class", "flat-text-input w-full"), g(t, "class", "flex-auto");
    },
    m(i, o) {
      C(i, t, o), h(t, n), xe(
        n,
        /*newName*/
        e[20]
      ), e[36](n), l || (r = [
        x(
          n,
          "input",
          /*input_input_handler*/
          e[35]
        ),
        x(
          n,
          "blur",
          /*blur_handler*/
          e[37]
        ),
        x(t, "submit", qe(ln(
          /*submit_handler*/
          e[38]
        )))
      ], l = !0);
    },
    p(i, o) {
      o[0] & /*newName*/
      1048576 && n.value !== /*newName*/
      i[20] && xe(
        n,
        /*newName*/
        i[20]
      );
    },
    i: Z,
    o: Z,
    d(i) {
      i && v(t), e[36](null), l = !1, we(r);
    }
  };
}
function ba(e) {
  let t, n;
  return t = new ce({
    props: {
      icon: Hr,
      class: "pl-2 text-gray-900 dark:text-gray-100"
    }
  }), {
    c() {
      U(t.$$.fragment);
    },
    m(l, r) {
      V(t, l, r), n = !0;
    },
    p: Z,
    i(l) {
      n || (p(t.$$.fragment, l), n = !0);
    },
    o(l) {
      N(t.$$.fragment, l), n = !1;
    },
    d(l) {
      W(t, l);
    }
  };
}
function H1(e) {
  let t, n = (
    /*currentQueryPath*/
    (e[0][
      /*currentQueryPath*/
      e[0].length - 1
    ] ?? "TempoQL Query") + ""
  ), l, r, i, o, a = (
    /*hovering*/
    e[47] && ba()
  );
  return {
    c() {
      t = k("h3"), l = G(n), r = P(), a && a.c(), i = _e(), g(t, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap truncate"), g(t, "title", "Rename this query (Ctrl+R)");
    },
    m(f, s) {
      C(f, t, s), h(t, l), C(f, r, s), a && a.m(f, s), C(f, i, s), o = !0;
    },
    p(f, s) {
      (!o || s[0] & /*currentQueryPath*/
      1) && n !== (n = /*currentQueryPath*/
      (f[0][
        /*currentQueryPath*/
        f[0].length - 1
      ] ?? "TempoQL Query") + "") && oe(l, n), /*hovering*/
      f[47] ? a ? (a.p(f, s), s[1] & /*hovering*/
      65536 && p(a, 1)) : (a = ba(), a.c(), p(a, 1), a.m(i.parentNode, i)) : a && (re(), N(a, 1, 1, () => {
        a = null;
      }), ie());
    },
    i(f) {
      o || (p(a), o = !0);
    },
    o(f) {
      N(a), o = !1;
    },
    d(f) {
      f && v(t), f && v(r), a && a.d(f), f && v(i);
    }
  };
}
function _a(e) {
  let t, n, l, r = (
    /*currentQueryPath*/
    e[0][
      /*currentQueryPath*/
      e[0].length - 2
    ] + ""
  ), i;
  return {
    c() {
      t = k("div"), n = G("in "), l = k("span"), i = G(r), g(l, "class", "font-mono"), g(t, "class", "text-sm text-gray-600 dark:text-gray-400 truncate min-w-0");
    },
    m(o, a) {
      C(o, t, a), h(t, n), h(t, l), h(l, i);
    },
    p(o, a) {
      a[0] & /*currentQueryPath*/
      1 && r !== (r = /*currentQueryPath*/
      o[0][
        /*currentQueryPath*/
        o[0].length - 2
      ] + "") && oe(i, r);
    },
    d(o) {
      o && v(t);
    }
  };
}
function ha(e) {
  let t, n, l, r;
  function i(a) {
    e[44](a);
  }
  let o = {
    onSubmit: (
      /*onLLMSubmit*/
      e[8]
    ),
    llmResponse: (
      /*llmResponse*/
      e[9]
    ),
    isLoading: (
      /*llmLoading*/
      e[10]
    ),
    error: (
      /*llmError*/
      e[11]
    ),
    apiStatus: (
      /*apiStatus*/
      e[13]
    ),
    width: "w-full",
    scrollable: !0,
    extractedQuery: (
      /*extractedQuery*/
      e[14]
    ),
    hasExtractedQuery: (
      /*hasExtractedQuery*/
      e[15]
    ),
    onQueryExtracted: (
      /*onQueryExtracted*/
      e[16]
    ),
    onHistoryClick: (
      /*onHistoryClick*/
      e[17]
    ),
    onRun: (
      /*func_3*/
      e[43]
    )
  };
  return (
    /*aiQuestion*/
    e[3] !== void 0 && (o.question = /*aiQuestion*/
    e[3]), n = new d1({ props: o }), Se.push(() => lt(n, "question", i)), {
      c() {
        t = k("div"), U(n.$$.fragment), g(t, "class", "mt-4 w-full h-1/2 overflow-hidden");
      },
      m(a, f) {
        C(a, t, f), V(n, t, null), r = !0;
      },
      p(a, f) {
        const s = {};
        f[0] & /*onLLMSubmit*/
        256 && (s.onSubmit = /*onLLMSubmit*/
        a[8]), f[0] & /*llmResponse*/
        512 && (s.llmResponse = /*llmResponse*/
        a[9]), f[0] & /*llmLoading*/
        1024 && (s.isLoading = /*llmLoading*/
        a[10]), f[0] & /*llmError*/
        2048 && (s.error = /*llmError*/
        a[11]), f[0] & /*apiStatus*/
        8192 && (s.apiStatus = /*apiStatus*/
        a[13]), f[0] & /*extractedQuery*/
        16384 && (s.extractedQuery = /*extractedQuery*/
        a[14]), f[0] & /*hasExtractedQuery*/
        32768 && (s.hasExtractedQuery = /*hasExtractedQuery*/
        a[15]), f[0] & /*onQueryExtracted*/
        65536 && (s.onQueryExtracted = /*onQueryExtracted*/
        a[16]), f[0] & /*onHistoryClick*/
        131072 && (s.onHistoryClick = /*onHistoryClick*/
        a[17]), f[0] & /*textInput, onRun*/
        68 && (s.onRun = /*func_3*/
        a[43]), !l && f[0] & /*aiQuestion*/
        8 && (l = !0, s.question = /*aiQuestion*/
        a[3], nt(() => l = !1)), n.$set(s);
      },
      i(a) {
        r || (p(n.$$.fragment, a), r = !0);
      },
      o(a) {
        N(n.$$.fragment, a), r = !1;
      },
      d(a) {
        a && v(t), W(n);
      }
    }
  );
}
function B1(e) {
  let t, n, l, r;
  const i = [P1, T1], o = [];
  function a(f, s) {
    return (
      /*showingBrowser*/
      f[22] ? 0 : 1
    );
  }
  return n = a(e), l = o[n] = i[n](e), {
    c() {
      t = k("div"), l.c(), g(t, "class", "w-1/2 shrink-0 flex flex-col h-full z-0");
    },
    m(f, s) {
      C(f, t, s), o[n].m(t, null), r = !0;
    },
    p(f, s) {
      let u = n;
      n = a(f), n === u ? o[n].p(f, s) : (re(), N(o[u], 1, 1, () => {
        o[u] = null;
      }), ie(), l = o[n], l ? l.p(f, s) : (l = o[n] = i[n](f), l.c()), p(l, 1), l.m(t, null));
    },
    i(f) {
      r || (p(l), r = !0);
    },
    o(f) {
      N(l), r = !1;
    },
    d(f) {
      f && v(t), o[n].d();
    }
  };
}
function F1(e, t, n) {
  let { fileContents: l = {} } = t, { savePath: r = "" } = t, { textInput: i = "" } = t, { dataFields: o = [] } = t, { onRun: a = () => {
  } } = t, { onExplain: f = () => {
  } } = t, { onLLMSubmit: s = () => {
  } } = t, { llmResponse: u = "" } = t, { llmLoading: c = !1 } = t, { llmError: d = "" } = t, { llmAvailable: m = !1 } = t, { apiStatus: b = "" } = t, { extractedQuery: _ = "" } = t, { hasExtractedQuery: y = !1 } = t, { onQueryExtracted: M = () => {
  } } = t, { onHistoryClick: w = () => {
  } } = t, { onQueryHistoryClick: S = () => {
  } } = t, { aiQuestion: z = "" } = t, E = !1, { currentQueryPath: D = [] } = t;
  function I(K, De) {
    D.length > 0 && i != St(l, D) && !confirm(`You have unsaved changes for ${D[D.length - 1]}. Proceed without saving changes?`) || (n(0, D = K), n(2, i = De), n(22, E = !1));
  }
  let j = !1, A = null, q, R;
  function T(K) {
    if (n(19, j = !1), K != D[D.length - 1]) {
      if (!Or(K)) {
        alert("Queries must have variable-style names, containing only alphanumeric characters or underscores, and they must not start with a number.");
        return;
      }
      if (Xr(l, [...D.slice(0, D.length - 1), K])) {
        alert("This name already exists. All item names must be unique.");
        return;
      }
      n(1, l = Ja(l, D, [...D.slice(0, D.length - 1), K])), n(0, D = [...D.slice(0, D.length - 1), K]);
    }
  }
  function ee(K) {
    if (!Or(K)) {
      alert("Queries must have variable-style names, containing only alphanumeric characters or underscores, and they must not start with a number.");
      return;
    }
    if (cr(l, K)) {
      alert("The variable name already exists. All variable names must be unique.");
      return;
    }
    let De = [...D.slice(0, D.length - 1), K];
    n(1, l = nn(l, De, i)), n(0, D = De);
  }
  function H() {
    D.length > 0 && n(2, i = St(l, D));
  }
  function Q() {
    let K = Yr(l, D);
    n(1, l = K.contents), n(0, D = K.queryPath);
  }
  function B() {
    confirm("Are you sure you want to delete this query? This action cannot be undone.") && (n(1, l = ur(l, D)), n(0, D = []));
  }
  function Y() {
    a();
  }
  let ye = !1;
  function te(K) {
    if (ye && (K.ctrlKey || K.metaKey)) {
      if (r && K.key === "r" && !K.shiftKey) {
        K.preventDefault(), n(19, j = !0);
        return;
      } else if (r && K.key === "d" && !K.shiftKey) {
        K.preventDefault(), Q();
        return;
      } else if (r && K.key === "Backspace" && K.shiftKey) {
        K.preventDefault(), B();
        return;
      } else if (r && K.key === "q" && D.length > 0) {
        K.preventDefault(), n(22, E = !E);
        return;
      }
    }
  }
  Nt(() => {
    ye = !0, window.addEventListener("keydown", te);
  }), wa(() => {
    ye = !1, window.removeEventListener("keydown", te);
  });
  const ue = () => n(22, E = !1), be = (K) => {
    n(0, D = K);
  };
  function se(K) {
    l = K, n(1, l);
  }
  const ge = () => n(22, E = !0);
  function X() {
    A = this.value, n(20, A), n(19, j), n(0, D);
  }
  function ae(K) {
    Se[K ? "unshift" : "push"](() => {
      R = K, n(21, R);
    });
  }
  const ne = () => T(A), O = () => {
    console.log("renaming!"), T(A);
  }, he = () => n(19, j = !0), Ne = () => {
    let K = Ya(l, D.slice(0, D.length - 1));
    console.log("result", K), n(1, l = K.contents), n(0, D = K.queryPath), n(2, i = "");
  }, Ee = () => {
    D.length > 0 && n(1, l = nn(l, D, i));
  };
  function Te(K) {
    i = K, n(2, i);
  }
  const Ve = (K) => {
    n(2, i = K), a();
  };
  function Pe(K) {
    z = K, n(3, z);
  }
  return e.$$set = (K) => {
    "fileContents" in K && n(1, l = K.fileContents), "savePath" in K && n(4, r = K.savePath), "textInput" in K && n(2, i = K.textInput), "dataFields" in K && n(5, o = K.dataFields), "onRun" in K && n(6, a = K.onRun), "onExplain" in K && n(7, f = K.onExplain), "onLLMSubmit" in K && n(8, s = K.onLLMSubmit), "llmResponse" in K && n(9, u = K.llmResponse), "llmLoading" in K && n(10, c = K.llmLoading), "llmError" in K && n(11, d = K.llmError), "llmAvailable" in K && n(12, m = K.llmAvailable), "apiStatus" in K && n(13, b = K.apiStatus), "extractedQuery" in K && n(14, _ = K.extractedQuery), "hasExtractedQuery" in K && n(15, y = K.hasExtractedQuery), "onQueryExtracted" in K && n(16, M = K.onQueryExtracted), "onHistoryClick" in K && n(17, w = K.onHistoryClick), "onQueryHistoryClick" in K && n(18, S = K.onQueryHistoryClick), "aiQuestion" in K && n(3, z = K.aiQuestion), "currentQueryPath" in K && n(0, D = K.currentQueryPath);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*savePath, currentQueryPath*/
    17 && r && D.length == 0 && n(22, E = !0), e.$$.dirty[0] & /*isEditingName, newName, currentQueryPath*/
    1572865 && (j && A == null ? n(20, A = D[D.length - 1] ?? null) : j || n(20, A = null)), e.$$.dirty[0] & /*editBox, oldEditBox*/
    1075838976 && R !== q && (R && (R.focus(), R.select()), n(30, q = R));
  }, [
    D,
    l,
    i,
    z,
    r,
    o,
    a,
    f,
    s,
    u,
    c,
    d,
    m,
    b,
    _,
    y,
    M,
    w,
    S,
    j,
    A,
    R,
    E,
    I,
    T,
    ee,
    H,
    Q,
    B,
    Y,
    q,
    ue,
    be,
    se,
    ge,
    X,
    ae,
    ne,
    O,
    he,
    Ne,
    Ee,
    Te,
    Ve,
    Pe
  ];
}
class G1 extends Ce {
  constructor(t) {
    super(), ve(
      this,
      t,
      F1,
      B1,
      pe,
      {
        fileContents: 1,
        savePath: 4,
        textInput: 2,
        dataFields: 5,
        onRun: 6,
        onExplain: 7,
        onLLMSubmit: 8,
        llmResponse: 9,
        llmLoading: 10,
        llmError: 11,
        llmAvailable: 12,
        apiStatus: 13,
        extractedQuery: 14,
        hasExtractedQuery: 15,
        onQueryExtracted: 16,
        onHistoryClick: 17,
        onQueryHistoryClick: 18,
        aiQuestion: 3,
        currentQueryPath: 0
      },
      null,
      [-1, -1]
    );
  }
}
function x1(e) {
  let t, n, l;
  function r(o) {
    e[73](o);
  }
  let i = {
    scopes: (
      /*$scopes*/
      e[22]
    ),
    scopeConcepts: (
      /*$scopeConcepts*/
      e[23]
    ),
    isLoading: (
      /*$isLoading*/
      e[24]
    ),
    loadingMessage: (
      /*$loadingMessage*/
      e[25]
    ),
    onScopeSelect: (
      /*func*/
      e[70]
    ),
    onAnalyze: (
      /*func_1*/
      e[71]
    ),
    onInsert: (
      /*func_2*/
      e[72]
    )
  };
  return (
    /*selectedScope*/
    e[0] !== void 0 && (i.scopeName = /*selectedScope*/
    e[0]), t = new du({ props: i }), Se.push(() => lt(t, "scopeName", r)), {
      c() {
        U(t.$$.fragment);
      },
      m(o, a) {
        V(t, o, a), l = !0;
      },
      p(o, a) {
        const f = {};
        a[0] & /*$scopes*/
        4194304 && (f.scopes = /*$scopes*/
        o[22]), a[0] & /*$scopeConcepts*/
        8388608 && (f.scopeConcepts = /*$scopeConcepts*/
        o[23]), a[0] & /*$isLoading*/
        16777216 && (f.isLoading = /*$isLoading*/
        o[24]), a[0] & /*$loadingMessage*/
        33554432 && (f.loadingMessage = /*$loadingMessage*/
        o[25]), a[0] & /*selectedScope*/
        1 && (f.onAnalyze = /*func_1*/
        o[71]), a[0] & /*$textInput*/
        256 && (f.onInsert = /*func_2*/
        o[72]), !n && a[0] & /*selectedScope*/
        1 && (n = !0, f.scopeName = /*selectedScope*/
        o[0], nt(() => n = !1)), t.$set(f);
      },
      i(o) {
        l || (p(t.$$.fragment, o), l = !0);
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
function V1(e) {
  let t, n, l;
  function r(o) {
    e[69](o);
  }
  let i = {
    queryForResults: (
      /*$queryForResults*/
      e[17]
    ),
    onRun: (
      /*handleRun*/
      e[57]
    ),
    onExplain: (
      /*handleLLMExplanation*/
      e[32]
    ),
    queryError: (
      /*$queryError*/
      e[18]
    ),
    values: (
      /*$values*/
      e[19]
    ),
    subqueries: (
      /*$subqueries*/
      e[20]
    ),
    llmAvailable: (
      /*$llmAvailable*/
      e[13]
    ),
    llmExplanation: (
      /*$llmExplanation*/
      e[21]
    ),
    llmLoading: (
      /*$llmLoading*/
      e[11]
    ),
    width: "w-full"
  };
  return (
    /*$textInput*/
    e[8] !== void 0 && (i.textInput = /*$textInput*/
    e[8]), t = new Y0({ props: i }), Se.push(() => lt(t, "textInput", r)), {
      c() {
        U(t.$$.fragment);
      },
      m(o, a) {
        V(t, o, a), l = !0;
      },
      p(o, a) {
        const f = {};
        a[0] & /*$queryForResults*/
        131072 && (f.queryForResults = /*$queryForResults*/
        o[17]), a[0] & /*$queryError*/
        262144 && (f.queryError = /*$queryError*/
        o[18]), a[0] & /*$values*/
        524288 && (f.values = /*$values*/
        o[19]), a[0] & /*$subqueries*/
        1048576 && (f.subqueries = /*$subqueries*/
        o[20]), a[0] & /*$llmAvailable*/
        8192 && (f.llmAvailable = /*$llmAvailable*/
        o[13]), a[0] & /*$llmExplanation*/
        2097152 && (f.llmExplanation = /*$llmExplanation*/
        o[21]), a[0] & /*$llmLoading*/
        2048 && (f.llmLoading = /*$llmLoading*/
        o[11]), !n && a[0] & /*$textInput*/
        256 && (n = !0, f.textInput = /*$textInput*/
        o[8], nt(() => n = !1)), t.$set(f);
      },
      i(o) {
        l || (p(t.$$.fragment, o), l = !0);
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
function W1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b, _, y, M, w, S, z, E;
  function D(H) {
    e[65](H);
  }
  function I(H) {
    e[66](H);
  }
  function j(H) {
    e[67](H);
  }
  function A(H) {
    e[68](H);
  }
  let q = {
    savePath: (
      /*$savePath*/
      e[10]
    ),
    dataFields: (
      /*dataFields*/
      e[6]
    ),
    onRun: (
      /*handleRun*/
      e[57]
    ),
    onExplain: (
      /*handleLLMExplanation*/
      e[32]
    ),
    onLLMSubmit: (
      /*handleLLMQuestionSubmit*/
      e[55]
    ),
    llmResponse: (
      /*$llmResponse*/
      e[7]
    ),
    llmLoading: (
      /*$llmLoading*/
      e[11]
    ),
    llmError: (
      /*$llmError*/
      e[12]
    ),
    llmAvailable: (
      /*$llmAvailable*/
      e[13]
    ),
    apiStatus: (
      /*$apiStatus*/
      e[14]
    ),
    extractedQuery: (
      /*$extractedQuery*/
      e[15]
    ),
    hasExtractedQuery: (
      /*$hasExtractedQuery*/
      e[16]
    ),
    onQueryExtracted: (
      /*handleQueryExtraction*/
      e[48]
    ),
    onHistoryClick: (
      /*handleHistoryClick*/
      e[58]
    ),
    onQueryHistoryClick: (
      /*handleQueryHistoryClick*/
      e[59]
    )
  };
  /*$fileContents*/
  e[9] !== void 0 && (q.fileContents = /*$fileContents*/
  e[9]), /*$textInput*/
  e[8] !== void 0 && (q.textInput = /*$textInput*/
  e[8]), /*currentQuestion*/
  e[4] !== void 0 && (q.aiQuestion = /*currentQuestion*/
  e[4]), /*currentQueryPath*/
  e[5] !== void 0 && (q.currentQueryPath = /*currentQueryPath*/
  e[5]), n = new G1({ props: q }), Se.push(() => lt(n, "fileContents", D)), Se.push(() => lt(n, "textInput", I)), Se.push(() => lt(n, "aiQuestion", j)), Se.push(() => lt(n, "currentQueryPath", A)), u = new ls({
    props: {
      activeTab: (
        /*activeTab*/
        e[1]
      ),
      onTabChange: (
        /*handleTabChange*/
        e[56]
      )
    }
  });
  const R = [V1, x1], T = [];
  function ee(H, Q) {
    return (
      /*activeTab*/
      H[1] === "results" ? 0 : (
        /*activeTab*/
        H[1] === "data-elements" ? 1 : -1
      )
    );
  }
  return ~(m = ee(e)) && (b = T[m] = R[m](e)), y = new Uo({
    props: {
      isVisible: (
        /*showAIHistoryDropdown*/
        e[2]
      ),
      history: (
        /*$aiHistory*/
        e[26]
      ),
      onClose: (
        /*handleHistoryClose*/
        e[61]
      ),
      onSelect: (
        /*handleSelectHistoricalQuery*/
        e[60]
      ),
      position: (
        /*historyDropdownPosition*/
        e[53]
      )
    }
  }), w = new Uo({
    props: {
      isVisible: (
        /*showQueryHistoryDropdown*/
        e[3]
      ),
      history: (
        /*$queryHistory*/
        e[27]
      ),
      onClose: (
        /*handleQueryHistoryClose*/
        e[62]
      ),
      onSelect: (
        /*handleSelectHistoricalQuery*/
        e[60]
      ),
      position: (
        /*queryHistoryDropdownPosition*/
        e[54]
      )
    }
  }), z = new $0({
    props: {
      isLoading: (
        /*$isLoading*/
        e[24]
      ),
      message: (
        /*$loadingMessage*/
        e[25]
      )
    }
  }), {
    c() {
      t = k("main"), U(n.$$.fragment), a = P(), f = k("div"), s = k("div"), U(u.$$.fragment), c = P(), d = k("div"), b && b.c(), _ = P(), U(y.$$.fragment), M = P(), U(w.$$.fragment), S = P(), U(z.$$.fragment), g(d, "class", "flex-auto w-full min-h-0 z-0 svelte-1pq5c6y"), g(s, "class", "w-full h-full rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden flex flex-col dark:bg-gray-900 svelte-1pq5c6y"), g(f, "class", "w-1/2 mb-2 svelte-1pq5c6y"), g(t, "class", "w-full bg-white dark:bg-gray-950 transition-colors duration-200 relative overflow-hidden flex svelte-1pq5c6y"), le(t, "height", "min(600px, max(400px, 70vh))");
    },
    m(H, Q) {
      C(H, t, Q), V(n, t, null), h(t, a), h(t, f), h(f, s), V(u, s, null), h(s, c), h(s, d), ~m && T[m].m(d, null), h(t, _), V(y, t, null), h(t, M), V(w, t, null), h(t, S), V(z, t, null), E = !0;
    },
    p(H, Q) {
      const B = {};
      Q[0] & /*$savePath*/
      1024 && (B.savePath = /*$savePath*/
      H[10]), Q[0] & /*dataFields*/
      64 && (B.dataFields = /*dataFields*/
      H[6]), Q[0] & /*$llmResponse*/
      128 && (B.llmResponse = /*$llmResponse*/
      H[7]), Q[0] & /*$llmLoading*/
      2048 && (B.llmLoading = /*$llmLoading*/
      H[11]), Q[0] & /*$llmError*/
      4096 && (B.llmError = /*$llmError*/
      H[12]), Q[0] & /*$llmAvailable*/
      8192 && (B.llmAvailable = /*$llmAvailable*/
      H[13]), Q[0] & /*$apiStatus*/
      16384 && (B.apiStatus = /*$apiStatus*/
      H[14]), Q[0] & /*$extractedQuery*/
      32768 && (B.extractedQuery = /*$extractedQuery*/
      H[15]), Q[0] & /*$hasExtractedQuery*/
      65536 && (B.hasExtractedQuery = /*$hasExtractedQuery*/
      H[16]), !l && Q[0] & /*$fileContents*/
      512 && (l = !0, B.fileContents = /*$fileContents*/
      H[9], nt(() => l = !1)), !r && Q[0] & /*$textInput*/
      256 && (r = !0, B.textInput = /*$textInput*/
      H[8], nt(() => r = !1)), !i && Q[0] & /*currentQuestion*/
      16 && (i = !0, B.aiQuestion = /*currentQuestion*/
      H[4], nt(() => i = !1)), !o && Q[0] & /*currentQueryPath*/
      32 && (o = !0, B.currentQueryPath = /*currentQueryPath*/
      H[5], nt(() => o = !1)), n.$set(B);
      const Y = {};
      Q[0] & /*activeTab*/
      2 && (Y.activeTab = /*activeTab*/
      H[1]), u.$set(Y);
      let ye = m;
      m = ee(H), m === ye ? ~m && T[m].p(H, Q) : (b && (re(), N(T[ye], 1, 1, () => {
        T[ye] = null;
      }), ie()), ~m ? (b = T[m], b ? b.p(H, Q) : (b = T[m] = R[m](H), b.c()), p(b, 1), b.m(d, null)) : b = null);
      const te = {};
      Q[0] & /*showAIHistoryDropdown*/
      4 && (te.isVisible = /*showAIHistoryDropdown*/
      H[2]), Q[0] & /*$aiHistory*/
      67108864 && (te.history = /*$aiHistory*/
      H[26]), y.$set(te);
      const ue = {};
      Q[0] & /*showQueryHistoryDropdown*/
      8 && (ue.isVisible = /*showQueryHistoryDropdown*/
      H[3]), Q[0] & /*$queryHistory*/
      134217728 && (ue.history = /*$queryHistory*/
      H[27]), w.$set(ue);
      const be = {};
      Q[0] & /*$isLoading*/
      16777216 && (be.isLoading = /*$isLoading*/
      H[24]), Q[0] & /*$loadingMessage*/
      33554432 && (be.message = /*$loadingMessage*/
      H[25]), z.$set(be);
    },
    i(H) {
      E || (p(n.$$.fragment, H), p(u.$$.fragment, H), p(b), p(y.$$.fragment, H), p(w.$$.fragment, H), p(z.$$.fragment, H), E = !0);
    },
    o(H) {
      N(n.$$.fragment, H), N(u.$$.fragment, H), N(b), N(y.$$.fragment, H), N(w.$$.fragment, H), N(z.$$.fragment, H), E = !1;
    },
    d(H) {
      H && v(t), W(n), W(u), ~m && T[m].d(), W(y), W(w), W(z);
    }
  };
}
function K1(e, t, n) {
  let l, r, i, o, a, f, s, u, c, d, m, b, _, y, M, w, S, z, E, D, I, j, A, { model: q } = t;
  const R = wf(q), { savePath: T, fileContents: ee, values: H, listNames: Q, runQuery: B, handleLLMQuestion: Y, handleLLMExplanation: ye, subqueries: te, queryError: ue, scopes: be, scopeConcepts: se, handleScopeAnalysis: ge, llmResponse: X, llmLoading: ae, llmError: ne, llmAvailable: O, llmExplanation: he, apiStatus: Ne, isLoading: Ee, loadingMessage: Te, extractedQuery: Ve, hasExtractedQuery: Pe, handleQueryExtraction: K, textInput: De, queryForResults: He, queryHistory: $, aiHistory: je } = R;
  F(e, T, (J) => n(10, f = J)), F(e, ee, (J) => n(9, a = J)), F(e, H, (J) => n(19, M = J)), F(e, Q, (J) => n(64, o = J)), F(e, te, (J) => n(20, w = J)), F(e, ue, (J) => n(18, y = J)), F(e, be, (J) => n(22, z = J)), F(e, se, (J) => n(23, E = J)), F(e, X, (J) => n(7, r = J)), F(e, ae, (J) => n(11, s = J)), F(e, ne, (J) => n(12, u = J)), F(e, O, (J) => n(13, c = J)), F(e, he, (J) => n(21, S = J)), F(e, Ne, (J) => n(14, d = J)), F(e, Ee, (J) => n(24, D = J)), F(e, Te, (J) => n(25, I = J)), F(e, Ve, (J) => n(15, m = J)), F(e, Pe, (J) => n(16, b = J)), F(e, De, (J) => n(8, i = J)), F(e, He, (J) => n(17, _ = J)), F(e, $, (J) => n(27, A = J)), F(e, je, (J) => n(26, j = J));
  let $e = "", ot = "data-elements", Be = !1, ct = !1, dt = "", Gn = { top: 0, left: 0 }, xn = { top: 0, left: 0 }, at = [];
  function Vn(J) {
    n(4, dt = J), Y(J);
  }
  function Wn(J) {
    n(1, ot = J);
  }
  function dr() {
    console.log("text input", i), i.trim() && B(
      at.length > 0 ? at[at.length - 1] : null,
      i
    ), n(1, ot = "results");
  }
  function Kn() {
    n(2, Be = !Be);
  }
  function mr() {
    n(3, ct = !ct);
  }
  function on(J) {
    console.log("📚 AI History item selected:", J), n(2, Be = !1), n(3, ct = !1), J.query && (de(De, i = J.query, i), q.set("text_input", J.query), q.save_changes()), J.question && n(4, dt = J.question), J.answer && de(X, r = J.answer, r);
  }
  function Un() {
    n(2, Be = !1);
  }
  function Xn() {
    n(3, ct = !1);
  }
  function Dt(J) {
    a = J, ee.set(a);
  }
  function an(J) {
    i = J, De.set(i);
  }
  function fn(J) {
    dt = J, n(4, dt);
  }
  function mt(J) {
    at = J, n(5, at);
  }
  function gt(J) {
    i = J, De.set(i);
  }
  const At = (J) => {
    ge(J, !1);
  }, bt = () => {
    ge($e, !0);
  }, _t = (J, yt) => {
    de(De, i = i + `{${yt}; scope = ${J}}`, i);
  };
  function ht(J) {
    $e = J, n(0, $e);
  }
  return e.$$set = (J) => {
    "model" in J && n(63, q = J.model);
  }, e.$$.update = () => {
    e.$$.dirty[2] & /*$listNames*/
    4 && n(6, l = o || []);
  }, [
    $e,
    ot,
    Be,
    ct,
    dt,
    at,
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
    b,
    _,
    y,
    M,
    w,
    S,
    z,
    E,
    D,
    I,
    j,
    A,
    T,
    ee,
    H,
    Q,
    ye,
    te,
    ue,
    be,
    se,
    ge,
    X,
    ae,
    ne,
    O,
    he,
    Ne,
    Ee,
    Te,
    Ve,
    Pe,
    K,
    De,
    He,
    $,
    je,
    Gn,
    xn,
    Vn,
    Wn,
    dr,
    Kn,
    mr,
    on,
    Un,
    Xn,
    q,
    o,
    Dt,
    an,
    fn,
    mt,
    gt,
    At,
    bt,
    _t,
    ht
  ];
}
class U1 extends Ce {
  constructor(t) {
    super(), ve(this, t, K1, W1, pe, { model: 63 }, null, [-1, -1, -1]);
  }
}
function X1(e) {
  new U1({
    target: e.el,
    props: {
      model: e.model
    }
  });
}
export {
  X1 as render
};
