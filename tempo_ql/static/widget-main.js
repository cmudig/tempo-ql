function Z() {
}
function af(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function _a(e) {
  return e();
}
function Jr() {
  return /* @__PURE__ */ Object.create(null);
}
function ve(e) {
  e.forEach(_a);
}
function Ye(e) {
  return typeof e == "function";
}
function ke(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function ff(e) {
  return Object.keys(e).length === 0;
}
function ha(e, ...t) {
  if (e == null)
    return Z;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function F(e, t, n) {
  e.$$.on_destroy.push(ha(t, n));
}
function Ve(e, t, n, l) {
  if (e) {
    const r = ya(e, t, n, l);
    return e[0](r);
  }
}
function ya(e, t, n, l) {
  return e[1] && l ? af(n.ctx.slice(), e[1](l(t))) : n.ctx;
}
function We(e, t, n, l) {
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
function Ke(e, t, n, l, r, i) {
  if (r) {
    const o = ya(t, n, l, i);
    e.p(o, r);
  }
}
function Xe(e) {
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
function ge(e, t, n) {
  return e.set(n), t;
}
function _(e, t) {
  e.appendChild(t);
}
function R(e, t, n) {
  e.insertBefore(t, n || null);
}
function N(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Oe(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function p(e) {
  return document.createElement(e);
}
function qe(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function V(e) {
  return document.createTextNode(e);
}
function P() {
  return V(" ");
}
function _e() {
  return V("");
}
function W(e, t, n, l) {
  return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
}
function tn(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function Re(e) {
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
function ae(e, t) {
  t = "" + t, e.data !== t && (e.data = t);
}
function He(e, t) {
  e.value = t ?? "";
}
function re(e, t, n, l) {
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
  const l = p("iframe");
  l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), l.setAttribute("aria-hidden", "true"), l.tabIndex = -1;
  const r = cf();
  let i;
  return r ? (l.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", i = W(window, "message", (o) => {
    o.source === l.contentWindow && t();
  })) : (l.src = "about:blank", l.onload = () => {
    i = W(l.contentWindow, "resize", t), t();
  }), _(e, l), () => {
    (r || i && l.contentWindow) && i(), N(l);
  };
}
function fe(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
function gf(e, t, { bubbles: n = !1, cancelable: l = !1 } = {}) {
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
    this.e || (this.is_svg ? this.e = qe(n.nodeName) : this.e = p(n.nodeType === 11 ? "TEMPLATE" : n.nodeName), this.t = n.tagName !== "TEMPLATE" ? n : n.content, this.c(t)), this.i(l);
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
    this.n.forEach(N);
  }
}
let An;
function Dn(e) {
  An = e;
}
function In() {
  if (!An)
    throw new Error("Function called outside component initialization");
  return An;
}
function vt(e) {
  In().$$.on_mount.push(e);
}
function ka(e) {
  In().$$.on_destroy.push(e);
}
function pa() {
  const e = In();
  return (t, n, { cancelable: l = !1 } = {}) => {
    const r = e.$$.callbacks[t];
    if (r) {
      const i = gf(t, n, { cancelable: l });
      return r.slice().forEach((o) => {
        o.call(e, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function mf(e, t) {
  return In().$$.context.set(e, t), t;
}
function Hn(e) {
  return In().$$.context.get(e);
}
function Er(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((l) => l.call(this, t));
}
const Yt = [], Ce = [];
let Ut = [];
const Dr = [], bf = /* @__PURE__ */ Promise.resolve();
let Ar = !1;
function _f() {
  Ar || (Ar = !0, bf.then(Ge));
}
function Tn(e) {
  Ut.push(e);
}
function et(e) {
  Dr.push(e);
}
const qr = /* @__PURE__ */ new Set();
let Kt = 0;
function Ge() {
  if (Kt !== 0)
    return;
  const e = An;
  do {
    try {
      for (; Kt < Yt.length; ) {
        const t = Yt[Kt];
        Kt++, Dn(t), hf(t.$$);
      }
    } catch (t) {
      throw Yt.length = 0, Kt = 0, t;
    }
    for (Dn(null), Yt.length = 0, Kt = 0; Ce.length; )
      Ce.pop()();
    for (let t = 0; t < Ut.length; t += 1) {
      const n = Ut[t];
      qr.has(n) || (qr.add(n), n());
    }
    Ut.length = 0;
  } while (Yt.length);
  for (; Dr.length; )
    Dr.pop()();
  Ar = !1, qr.clear(), Dn(e);
}
function hf(e) {
  if (e.fragment !== null) {
    e.update(), ve(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Tn);
  }
}
function yf(e) {
  const t = [], n = [];
  Ut.forEach((l) => e.indexOf(l) === -1 ? t.push(l) : n.push(l)), n.forEach((l) => l()), Ut = t;
}
const Vl = /* @__PURE__ */ new Set();
let Nt;
function ie() {
  Nt = {
    r: 0,
    c: [],
    p: Nt
    // parent group
  };
}
function oe() {
  Nt.r || ve(Nt.c), Nt = Nt.p;
}
function w(e, t) {
  e && e.i && (Vl.delete(e), e.i(t));
}
function q(e, t, n, l) {
  if (e && e.o) {
    if (Vl.has(e))
      return;
    Vl.add(e), Nt.c.push(() => {
      Vl.delete(e), l && (n && e.d(1), l());
    }), e.o(t);
  } else
    l && l();
}
function tt(e, t, n) {
  const l = e.$$.props[t];
  l !== void 0 && (e.$$.bound[l] = n, n(e.$$.ctx[l]));
}
function Y(e) {
  e && e.c();
}
function K(e, t, n, l) {
  const { fragment: r, after_update: i } = e.$$;
  r && r.m(t, n), l || Tn(() => {
    const o = e.$$.on_mount.map(_a).filter(Ye);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : ve(o), e.$$.on_mount = [];
  }), i.forEach(Tn);
}
function X(e, t) {
  const n = e.$$;
  n.fragment !== null && (yf(n.after_update), ve(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function kf(e, t) {
  e.$$.dirty[0] === -1 && (Yt.push(e), _f(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function pe(e, t, n, l, r, i, o, a = [-1]) {
  const f = An;
  Dn(e);
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
  }) : [], s.update(), u = !0, ve(s.before_update), s.fragment = l ? l(s.ctx) : !1, t.target) {
    if (t.hydrate) {
      const c = sf(t.target);
      s.fragment && s.fragment.l(c), c.forEach(N);
    } else
      s.fragment && s.fragment.c();
    t.intro && w(e.$$.fragment), K(e, t.target, t.anchor, t.customElement), Ge();
  }
  Dn(f);
}
class we {
  $destroy() {
    X(this, 1), this.$destroy = Z;
  }
  $on(t, n) {
    if (!Ye(n))
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
    if (ke(e, a) && (e = a, n)) {
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
function Se(e, t, n) {
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
      i ? o(m) : u = Ye(m) ? m : Z;
    }, d = r.map((m, b) => ha(m, (h) => {
      f[b] = h, s &= ~(1 << b), a && c();
    }, () => {
      s |= 1 << b;
    }));
    return a = !0, c(), function() {
      ve(d), u(), a = !1;
    };
  });
}
function Me(e, t, n) {
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
  const t = Me(e, "values", {}), n = Me(e, "file_contents", {}), l = Me(e, "_save_path", ""), r = Me(e, "list_names", {
    attributes: [],
    events: [],
    intervals: []
  }), i = Me(e, "subqueries", {}), o = Me(e, "query_error", ""), a = Me(e, "text_input", ""), f = Me(e, "query_for_results", ""), s = Me(e, "scopes", []), u = Me(e, "scope_concepts", {}), c = Me(e, "isLoading", !1), d = Me(e, "loadingMessage", ""), m = Me(e, "llm_available", !1), b = Me(e, "llm_response", ""), h = Me(e, "llm_loading", !1), y = Me(e, "llm_error", ""), C = Me(e, "api_status", "Checking API connection..."), k = Me(e, "extracted_query", ""), v = Me(e, "llm_explanation", ""), z = Me(e, "has_extracted_query", !1), L = Me(e, "query_history", []), D = Me(e, "ai_history", []);
  let B = "";
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
    llmLoading: h,
    llmError: y,
    llmAvailable: m,
    apiStatus: C,
    extractedQuery: k,
    llmExplanation: v,
    hasExtractedQuery: z,
    textInput: a,
    queryHistory: L,
    aiHistory: D,
    runQuery: (O, E) => {
      e.set("text_input", E), e.set(
        "process_trigger",
        O != null ? `variable:${O}` : "run"
      ), e.save_changes();
    },
    // LLM question handler
    handleLLMQuestion: (O) => {
      e.set("llm_question", O), e.set("llm_trigger", "ask"), e.save_changes();
    },
    handleLLMExplanation: () => {
      e.set("llm_trigger", "explain"), e.save_changes();
    },
    // Query extraction handler - triggered when AI extracts a query
    handleQueryExtraction: () => {
      let O = "";
      k.subscribe((E) => O = E)(), O && O !== B ? (console.log(
        "🔄 Query extracted from AI response:",
        O
      ), console.log("🔄 Current text input:", B), console.log("🔄 Updating text input with extracted query"), B = O, e.set("text_input", O), e.save_changes()) : O === B && console.log(
        "🔄 Extracted query is same as current input, no update needed"
      );
    },
    // Scope analysis handler
    handleScopeAnalysis: (O, E = !1) => {
      console.log(
        "🔍 Scope Analysis requested for:",
        O,
        E ? "(force refresh)" : ""
      );
      const A = E ? `${O}:force` : O;
      e.set("scope_analysis_trigger", A), e.save_changes();
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
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, Sf = Cf, wa = {
  prefix: "fas",
  iconName: "bolt-lightning",
  icon: [384, 512, [], "e0b7", "M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z"]
}, Nf = {
  prefix: "fas",
  iconName: "floppy-disk",
  icon: [448, 512, [128190, 128426, "save"], "f0c7", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm0 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 224c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]
}, Mf = Nf, Br = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, va = {
  prefix: "fas",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
}, qf = {
  prefix: "fas",
  iconName: "sun",
  icon: [512, 512, [9728], "f185", "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]
}, Ca = {
  prefix: "fas",
  iconName: "play",
  icon: [384, 512, [9654], "f04b", "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]
}, Rf = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, zf = Rf, Ue = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, Lf = {
  prefix: "fas",
  iconName: "list-ul",
  icon: [512, 512, ["list-dots"], "f0ca", "M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]
}, Sa = Lf, rr = {
  prefix: "fas",
  iconName: "copy",
  icon: [448, 512, [], "f0c5", "M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"]
}, Rt = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}, Ef = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, Df = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, zt = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, Af = {
  prefix: "fas",
  iconName: "moon",
  icon: [384, 512, [127769, 9214], "f186", "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]
}, Tf = {
  prefix: "fas",
  iconName: "check",
  icon: [448, 512, [10003, 10004], "f00c", "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, Pf = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, Qf = Pf, jf = {
  prefix: "fas",
  iconName: "database",
  icon: [448, 512, [], "f1c0", "M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z"]
}, Of = {
  prefix: "fas",
  iconName: "circle-xmark",
  icon: [512, 512, [61532, "times-circle", "xmark-circle"], "f057", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]
}, If = Of, Ql = parseFloat;
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
function Hf(e, t, n, l) {
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
function Bf(e, t, n, l, r, i = 1, o = "", a = "") {
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
    d[10][4] == "string" ? Gf : Ff;
  }
  let u = s(e), c = u(e);
  return {
    c() {
      t = qe("svg"), n = qe("g"), l = qe("g"), c.c(), g(
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
      R(d, t, m), _(t, n), _(n, l), c.m(l, null);
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
      d && N(t), c.d();
    }
  };
}
function Ff(e) {
  let t, n, l, r, i, o, a, f, s, u;
  return {
    c() {
      t = qe("path"), o = qe("path"), g(t, "d", n = /*i*/
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
      R(c, t, d), R(c, o, d);
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
      c && N(t), c && N(o);
    }
  };
}
function Gf(e) {
  let t, n, l, r;
  return {
    c() {
      t = qe("path"), g(t, "d", n = /*i*/
      e[10][4]), g(t, "fill", l = /*color*/
      e[2] || /*primaryColor*/
      e[5] || "currentColor"), g(t, "transform", r = "translate(" + /*i*/
      e[10][0] / -2 + " " + /*i*/
      e[10][1] / -2 + ")");
    },
    m(i, o) {
      R(i, t, o);
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
      i && N(t);
    }
  };
}
function xf(e) {
  let t, n = (
    /*i*/
    e[10][4] && $r(e)
  );
  return {
    c() {
      n && n.c(), t = _e();
    },
    m(l, r) {
      n && n.m(l, r), R(l, t, r);
    },
    p(l, [r]) {
      /*i*/
      l[10][4] ? n ? n.p(l, r) : (n = $r(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: Z,
    o: Z,
    d(l) {
      n && n.d(l), l && N(t);
    }
  };
}
function Vf(e, t, n) {
  let { class: l = "" } = t, { id: r = "" } = t, { style: i = "" } = t, { icon: o } = t, { size: a = "" } = t, { color: f = "" } = t, { fw: s = !1 } = t, { pull: u = "" } = t, { scale: c = 1 } = t, { translateX: d = 0 } = t, { translateY: m = 0 } = t, { rotate: b = "" } = t, { flip: h = !1 } = t, { spin: y = !1 } = t, { pulse: C = !1 } = t, { primaryColor: k = "" } = t, { secondaryColor: v = "" } = t, { primaryOpacity: z = 1 } = t, { secondaryOpacity: L = 0.4 } = t, { swapOpacity: D = !1 } = t, B, O, E;
  return e.$$set = (A) => {
    "class" in A && n(0, l = A.class), "id" in A && n(1, r = A.id), "style" in A && n(13, i = A.style), "icon" in A && n(14, o = A.icon), "size" in A && n(15, a = A.size), "color" in A && n(2, f = A.color), "fw" in A && n(16, s = A.fw), "pull" in A && n(17, u = A.pull), "scale" in A && n(18, c = A.scale), "translateX" in A && n(19, d = A.translateX), "translateY" in A && n(20, m = A.translateY), "rotate" in A && n(21, b = A.rotate), "flip" in A && n(22, h = A.flip), "spin" in A && n(3, y = A.spin), "pulse" in A && n(4, C = A.pulse), "primaryColor" in A && n(5, k = A.primaryColor), "secondaryColor" in A && n(6, v = A.secondaryColor), "primaryOpacity" in A && n(7, z = A.primaryOpacity), "secondaryOpacity" in A && n(8, L = A.secondaryOpacity), "swapOpacity" in A && n(9, D = A.swapOpacity);
  }, e.$$.update = () => {
    e.$$.dirty & /*icon*/
    16384 && n(10, B = o && o.icon || [0, 0, "", [], ""]), e.$$.dirty & /*style, size, pull, fw*/
    237568 && n(11, O = Hf(i, a, u, s)), e.$$.dirty & /*scale, translateX, translateY, rotate, flip*/
    8126464 && n(12, E = Bf(c, d, m, b, h, 512));
  }, [
    l,
    r,
    f,
    y,
    C,
    k,
    v,
    z,
    L,
    D,
    B,
    O,
    E,
    i,
    o,
    a,
    s,
    u,
    c,
    d,
    m,
    b,
    h
  ];
}
class ce extends we {
  constructor(t) {
    super(), pe(this, t, Vf, xf, ke, {
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
function Wf() {
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
const Xl = Wf();
function Kf(e) {
  let t, n;
  return t = new ce({ props: { icon: Af } }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p: Z,
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function Xf(e) {
  let t, n;
  return t = new ce({ props: { icon: qf } }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p: Z,
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function Yf(e) {
  let t, n, l, r, i, o;
  const a = [Xf, Kf], f = [];
  function s(u, c) {
    return (
      /*$theme*/
      u[0] === "dark" ? 0 : 1
    );
  }
  return n = s(e), l = f[n] = a[n](e), {
    c() {
      t = p("button"), l.c(), g(t, "class", "px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"), g(t, "title", "Toggle theme");
    },
    m(u, c) {
      R(u, t, c), f[n].m(t, null), r = !0, i || (o = W(
        t,
        "click",
        /*toggleTheme*/
        e[1]
      ), i = !0);
    },
    p(u, [c]) {
      let d = n;
      n = s(u), n === d ? f[n].p(u, c) : (ie(), q(f[d], 1, 1, () => {
        f[d] = null;
      }), oe(), l = f[n], l ? l.p(u, c) : (l = f[n] = a[n](u), l.c()), w(l, 1), l.m(t, null));
    },
    i(u) {
      r || (w(l), r = !0);
    },
    o(u) {
      q(l), r = !1;
    },
    d(u) {
      u && N(t), f[n].d(), i = !1, o();
    }
  };
}
function Uf(e, t, n) {
  let l;
  F(e, Xl, (i) => n(0, l = i));
  function r() {
    console.log("Theme toggle clicked, current theme:", l), Xl.toggle();
  }
  return e.$$.update = () => {
    if (e.$$.dirty & /*$theme*/
    1 && (console.log("Theme changed to:", l), typeof window < "u")) {
      const i = document.documentElement;
      console.log("HTML classes:", i.className), console.log("Has dark class:", i.classList.contains("dark"));
    }
  }, [l, r];
}
class Jf extends we {
  constructor(t) {
    super(), pe(this, t, Uf, Yf, ke, {});
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
      t = p("button"), Y(n.$$.fragment), l = P(), i = V(r), g(t, "class", o = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*activeTab*/
      (e[0] === /*tab*/
      e[4].id ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600"));
    },
    m(c, d) {
      R(c, t, d), K(n, t, null), _(t, l), _(t, i), a = !0, f || (s = W(t, "click", u), f = !0);
    },
    p(c, d) {
      e = c, (!a || d & /*activeTab*/
      1 && o !== (o = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*activeTab*/
      (e[0] === /*tab*/
      e[4].id ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600"))) && g(t, "class", o);
    },
    i(c) {
      a || (w(n.$$.fragment, c), a = !0);
    },
    o(c) {
      q(n.$$.fragment, c), a = !1;
    },
    d(c) {
      c && N(t), X(n), f = !1, s();
    }
  };
}
function Zf(e) {
  let t, n, l, r, i, o, a, f = (
    /*tabs*/
    e[2]
  ), s = [];
  for (let c = 0; c < f.length; c += 1)
    s[c] = ti(ei(e, f, c));
  const u = (c) => q(s[c], 1, 1, () => {
    s[c] = null;
  });
  return o = new Jf({}), {
    c() {
      t = p("div"), n = p("nav");
      for (let c = 0; c < s.length; c += 1)
        s[c].c();
      l = P(), r = p("div"), i = P(), Y(o.$$.fragment), g(r, "class", "flex-auto"), g(n, "class", "flex gap-2 px-4 py-2"), g(n, "aria-label", "Tabs"), g(t, "class", "w-full bg-gray-300 dark:bg-gray-800 dark:text-white");
    },
    m(c, d) {
      R(c, t, d), _(t, n);
      for (let m = 0; m < s.length; m += 1)
        s[m] && s[m].m(n, null);
      _(n, l), _(n, r), _(n, i), K(o, n, null), a = !0;
    },
    p(c, [d]) {
      if (d & /*activeTab, tabs, onTabChange*/
      7) {
        f = /*tabs*/
        c[2];
        let m;
        for (m = 0; m < f.length; m += 1) {
          const b = ei(c, f, m);
          s[m] ? (s[m].p(b, d), w(s[m], 1)) : (s[m] = ti(b), s[m].c(), w(s[m], 1), s[m].m(n, l));
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
        q(s[d]);
      q(o.$$.fragment, c), a = !1;
    },
    d(c) {
      c && N(t), Oe(s, c), X(o);
    }
  };
}
function $f(e, t, n) {
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
      icon: jf
    }
  ], o = (a) => r(a.id);
  return e.$$set = (a) => {
    "activeTab" in a && n(0, l = a.activeTab), "onTabChange" in a && n(1, r = a.onTabChange);
  }, [l, r, i, o];
}
class es extends we {
  constructor(t) {
    super(), pe(this, t, $f, Zf, ke, { activeTab: 0, onTabChange: 1 });
  }
}
function ts(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Yl(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, l = e.slice(0, n);
  return [
    l.length > 1 ? l[0] + l.slice(2) : l,
    +e.slice(n + 1)
  ];
}
function $t(e) {
  return e = Yl(Math.abs(e)), e ? e[1] : NaN;
}
function ns(e, t) {
  return function(n, l) {
    for (var r = n.length, i = [], o = 0, a = e[0], f = 0; r > 0 && a > 0 && (f + a + 1 > l && (a = Math.max(1, l - f)), i.push(n.substring(r -= a, r + a)), !((f += a + 1) > l)); )
      a = e[o = (o + 1) % e.length];
    return i.reverse().join(t);
  };
}
function ls(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var rs = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ul(e) {
  if (!(t = rs.exec(e)))
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
Ul.prototype = Fr.prototype;
function Fr(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Fr.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function is(e) {
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
var Na;
function os(e, t) {
  var n = Yl(e, t);
  if (!n)
    return e + "";
  var l = n[0], r = n[1], i = r - (Na = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, o = l.length;
  return i === o ? l : i > o ? l + new Array(i - o + 1).join("0") : i > 0 ? l.slice(0, i) + "." + l.slice(i) : "0." + new Array(1 - i).join("0") + Yl(e, Math.max(0, t + i - 1))[0];
}
function ni(e, t) {
  var n = Yl(e, t);
  if (!n)
    return e + "";
  var l = n[0], r = n[1];
  return r < 0 ? "0." + new Array(-r).join("0") + l : l.length > r + 1 ? l.slice(0, r + 1) + "." + l.slice(r + 1) : l + new Array(r - l.length + 2).join("0");
}
const li = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: ts,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => ni(e * 100, t),
  r: ni,
  s: os,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function ri(e) {
  return e;
}
var ii = Array.prototype.map, oi = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function as(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? ri : ns(ii.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", l = e.currency === void 0 ? "" : e.currency[1] + "", r = e.decimal === void 0 ? "." : e.decimal + "", i = e.numerals === void 0 ? ri : ls(ii.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", a = e.minus === void 0 ? "−" : e.minus + "", f = e.nan === void 0 ? "NaN" : e.nan + "";
  function s(c) {
    c = Ul(c);
    var d = c.fill, m = c.align, b = c.sign, h = c.symbol, y = c.zero, C = c.width, k = c.comma, v = c.precision, z = c.trim, L = c.type;
    L === "n" ? (k = !0, L = "g") : li[L] || (v === void 0 && (v = 12), z = !0, L = "g"), (y || d === "0" && m === "=") && (y = !0, d = "0", m = "=");
    var D = h === "$" ? n : h === "#" && /[boxX]/.test(L) ? "0" + L.toLowerCase() : "", B = h === "$" ? l : /[%p]/.test(L) ? o : "", O = li[L], E = /[defgprs%]/.test(L);
    v = v === void 0 ? 6 : /[gprs]/.test(L) ? Math.max(1, Math.min(21, v)) : Math.max(0, Math.min(20, v));
    function A(S) {
      var T = D, ne = B, j, Q, H;
      if (L === "c")
        ne = O(S) + ne, S = "";
      else {
        S = +S;
        var U = S < 0 || 1 / S < 0;
        if (S = isNaN(S) ? f : O(Math.abs(S), v), z && (S = is(S)), U && +S == 0 && b !== "+" && (U = !1), T = (U ? b === "(" ? b : a : b === "-" || b === "(" ? "" : b) + T, ne = (L === "s" ? oi[8 + Na / 3] : "") + ne + (U && b === "(" ? ")" : ""), E) {
          for (j = -1, Q = S.length; ++j < Q; )
            if (H = S.charCodeAt(j), 48 > H || H > 57) {
              ne = (H === 46 ? r + S.slice(j + 1) : S.slice(j)) + ne, S = S.slice(0, j);
              break;
            }
        }
      }
      k && !y && (S = t(S, 1 / 0));
      var he = T.length + S.length + ne.length, te = he < C ? new Array(C - he + 1).join(d) : "";
      switch (k && y && (S = t(te + S, te.length ? C - ne.length : 1 / 0), te = ""), m) {
        case "<":
          S = T + S + ne + te;
          break;
        case "=":
          S = T + te + S + ne;
          break;
        case "^":
          S = te.slice(0, he = te.length >> 1) + T + S + ne + te.slice(he);
          break;
        default:
          S = te + T + S + ne;
          break;
      }
      return i(S);
    }
    return A.toString = function() {
      return c + "";
    }, A;
  }
  function u(c, d) {
    var m = s((c = Ul(c), c.type = "f", c)), b = Math.max(-8, Math.min(8, Math.floor($t(d) / 3))) * 3, h = Math.pow(10, -b), y = oi[8 + b / 3];
    return function(C) {
      return m(h * C) + y;
    };
  }
  return {
    format: s,
    formatPrefix: u
  };
}
var jl, Ne, Ma;
fs({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function fs(e) {
  return jl = as(e), Ne = jl.format, Ma = jl.formatPrefix, jl;
}
function qa(e) {
  return Math.max(0, -$t(Math.abs(e)));
}
function ss(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor($t(t) / 3))) * 3 - $t(Math.abs(e)));
}
function us(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, $t(t) - $t(e)) + 1;
}
function nn(e) {
  for (var t = e.length / 6 | 0, n = new Array(t), l = 0; l < t; )
    n[l] = "#" + e.slice(l * 6, ++l * 6);
  return n;
}
const cs = nn("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), ds = nn("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function Gr(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Ra(e, t) {
  var n = Object.create(e.prototype);
  for (var l in t)
    n[l] = t[l];
  return n;
}
function Bn() {
}
var Pn = 0.7, Jl = 1 / Pn, Jt = "\\s*([+-]?\\d+)\\s*", Qn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", lt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", gs = /^#([0-9a-f]{3,8})$/, ms = new RegExp(`^rgb\\(${Jt},${Jt},${Jt}\\)$`), bs = new RegExp(`^rgb\\(${lt},${lt},${lt}\\)$`), _s = new RegExp(`^rgba\\(${Jt},${Jt},${Jt},${Qn}\\)$`), hs = new RegExp(`^rgba\\(${lt},${lt},${lt},${Qn}\\)$`), ys = new RegExp(`^hsl\\(${Qn},${lt},${lt}\\)$`), ks = new RegExp(`^hsla\\(${Qn},${lt},${lt},${Qn}\\)$`), ai = {
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
Gr(Bn, jn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: fi,
  // Deprecated! Use color.formatHex.
  formatHex: fi,
  formatHex8: ps,
  formatHsl: ws,
  formatRgb: si,
  toString: si
});
function fi() {
  return this.rgb().formatHex();
}
function ps() {
  return this.rgb().formatHex8();
}
function ws() {
  return za(this).formatHsl();
}
function si() {
  return this.rgb().formatRgb();
}
function jn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = gs.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ui(t) : n === 3 ? new Qe(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ol(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ol(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ms.exec(e)) ? new Qe(t[1], t[2], t[3], 1) : (t = bs.exec(e)) ? new Qe(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = _s.exec(e)) ? Ol(t[1], t[2], t[3], t[4]) : (t = hs.exec(e)) ? Ol(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ys.exec(e)) ? gi(t[1], t[2] / 100, t[3] / 100, 1) : (t = ks.exec(e)) ? gi(t[1], t[2] / 100, t[3] / 100, t[4]) : ai.hasOwnProperty(e) ? ui(ai[e]) : e === "transparent" ? new Qe(NaN, NaN, NaN, 0) : null;
}
function ui(e) {
  return new Qe(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ol(e, t, n, l) {
  return l <= 0 && (e = t = n = NaN), new Qe(e, t, n, l);
}
function vs(e) {
  return e instanceof Bn || (e = jn(e)), e ? (e = e.rgb(), new Qe(e.r, e.g, e.b, e.opacity)) : new Qe();
}
function Zl(e, t, n, l) {
  return arguments.length === 1 ? vs(e) : new Qe(e, t, n, l ?? 1);
}
function Qe(e, t, n, l) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +l;
}
Gr(Qe, Zl, Ra(Bn, {
  brighter(e) {
    return e = e == null ? Jl : Math.pow(Jl, e), new Qe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Pn : Math.pow(Pn, e), new Qe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Qe(qt(this.r), qt(this.g), qt(this.b), $l(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ci,
  // Deprecated! Use color.formatHex.
  formatHex: ci,
  formatHex8: Cs,
  formatRgb: di,
  toString: di
}));
function ci() {
  return `#${Mt(this.r)}${Mt(this.g)}${Mt(this.b)}`;
}
function Cs() {
  return `#${Mt(this.r)}${Mt(this.g)}${Mt(this.b)}${Mt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function di() {
  const e = $l(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${qt(this.r)}, ${qt(this.g)}, ${qt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function $l(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function qt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Mt(e) {
  return e = qt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function gi(e, t, n, l) {
  return l <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new xe(e, t, n, l);
}
function za(e) {
  if (e instanceof xe)
    return new xe(e.h, e.s, e.l, e.opacity);
  if (e instanceof Bn || (e = jn(e)), !e)
    return new xe();
  if (e instanceof xe)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, l = e.b / 255, r = Math.min(t, n, l), i = Math.max(t, n, l), o = NaN, a = i - r, f = (i + r) / 2;
  return a ? (t === i ? o = (n - l) / a + (n < l) * 6 : n === i ? o = (l - t) / a + 2 : o = (t - n) / a + 4, a /= f < 0.5 ? i + r : 2 - i - r, o *= 60) : a = f > 0 && f < 1 ? 0 : o, new xe(o, a, f, e.opacity);
}
function Ss(e, t, n, l) {
  return arguments.length === 1 ? za(e) : new xe(e, t, n, l ?? 1);
}
function xe(e, t, n, l) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +l;
}
Gr(xe, Ss, Ra(Bn, {
  brighter(e) {
    return e = e == null ? Jl : Math.pow(Jl, e), new xe(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Pn : Math.pow(Pn, e), new xe(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, l = n + (n < 0.5 ? n : 1 - n) * t, r = 2 * n - l;
    return new Qe(
      Rr(e >= 240 ? e - 240 : e + 120, r, l),
      Rr(e, r, l),
      Rr(e < 120 ? e + 240 : e - 120, r, l),
      this.opacity
    );
  },
  clamp() {
    return new xe(mi(this.h), Il(this.s), Il(this.l), $l(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = $l(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${mi(this.h)}, ${Il(this.s) * 100}%, ${Il(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function mi(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Il(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Rr(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const xr = (e) => () => e;
function Ns(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Ms(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(l) {
    return Math.pow(e + l * t, n);
  };
}
function qs(e) {
  return (e = +e) == 1 ? La : function(t, n) {
    return n - t ? Ms(t, n, e) : xr(isNaN(t) ? n : t);
  };
}
function La(e, t) {
  var n = t - e;
  return n ? Ns(e, n) : xr(isNaN(e) ? t : e);
}
const bi = function e(t) {
  var n = qs(t);
  function l(r, i) {
    var o = n((r = Zl(r)).r, (i = Zl(i)).r), a = n(r.g, i.g), f = n(r.b, i.b), s = La(r.opacity, i.opacity);
    return function(u) {
      return r.r = o(u), r.g = a(u), r.b = f(u), r.opacity = s(u), r + "";
    };
  }
  return l.gamma = e, l;
}(1);
function Rs(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, l = t.slice(), r;
  return function(i) {
    for (r = 0; r < n; ++r)
      l[r] = e[r] * (1 - i) + t[r] * i;
    return l;
  };
}
function zs(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Ls(e, t) {
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
function Es(e, t) {
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
function Ds(e, t) {
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
var Pr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, zr = new RegExp(Pr.source, "g");
function As(e) {
  return function() {
    return e;
  };
}
function Ts(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Ps(e, t) {
  var n = Pr.lastIndex = zr.lastIndex = 0, l, r, i, o = -1, a = [], f = [];
  for (e = e + "", t = t + ""; (l = Pr.exec(e)) && (r = zr.exec(t)); )
    (i = r.index) > n && (i = t.slice(n, i), a[o] ? a[o] += i : a[++o] = i), (l = l[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, f.push({ i: o, x: er(l, r) })), n = zr.lastIndex;
  return n < t.length && (i = t.slice(n), a[o] ? a[o] += i : a[++o] = i), a.length < 2 ? f[0] ? Ts(f[0].x) : As(t) : (t = f.length, function(s) {
    for (var u = 0, c; u < t; ++u)
      a[(c = f[u]).i] = c.x(s);
    return a.join("");
  });
}
function Vr(e, t) {
  var n = typeof t, l;
  return t == null || n === "boolean" ? xr(t) : (n === "number" ? er : n === "string" ? (l = jn(t)) ? (t = l, bi) : Ps : t instanceof jn ? bi : t instanceof Date ? Es : zs(t) ? Rs : Array.isArray(t) ? Ls : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Ds : er)(e, t);
}
function Qs(e, t) {
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
const js = ir(nn("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
ir(nn("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
ir(nn("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
ir(nn("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function Os(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = p("span"), g(t, "class", n = "bar " + /*absolutePosition*/
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
      R(o, t, a), r || (i = [
        W(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[10]
        ),
        W(
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
      o && N(t), r = !1, ve(i);
    }
  };
}
function Is(e, t, n) {
  let { absolutePosition: l = !1 } = t, { fraction: r = 1 } = t, { leftFraction: i = 0 } = t, { maxWidth: o = null } = t, { colorScale: a = null } = t, { color: f = "lightgray" } = t, { rounded: s = !0 } = t, { hoverable: u = !1 } = t;
  vt(() => {
    setTimeout(() => n(8, c = !0), 100);
  });
  let c = !1, d = "";
  function m(h) {
    Er.call(this, e, h);
  }
  function b(h) {
    Er.call(this, e, h);
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
    b
  ];
}
class Wr extends we {
  constructor(t) {
    super(), pe(this, t, Is, Os, ke, {
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
function Hs(e) {
  return e.map(
    ((t) => (n) => t += n)(0)
  );
}
const Bs = (e) => ({
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
      t = p("div"), n = V(
        /*title*/
        e[11]
      ), g(t, "class", "font-bold text-xs truncate text-right"), re(t, "width", "96px");
    },
    m(l, r) {
      R(l, t, r), _(t, n);
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
      l && N(t);
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
      Y(t.$$.fragment);
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
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function Fs(e) {
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
      Y(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
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
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function Gs(e) {
  let t, n, l = (
    /*values*/
    e[3]
  ), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = pi(hi(e, l, o));
  const i = (o) => q(r[o], 1, 1, () => {
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
      R(o, t, a), n = !0;
    },
    p(o, a) {
      if (a & /*scale, offsets, values, colors, hoverable, hoveringIndex*/
      25674) {
        l = /*values*/
        o[3];
        let f;
        for (f = 0; f < l.length; f += 1) {
          const s = hi(o, l, f);
          r[f] ? (r[f].p(s, a), w(r[f], 1)) : (r[f] = pi(s), r[f].c(), w(r[f], 1), r[f].m(t.parentNode, t));
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
        q(r[a]);
      n = !1;
    },
    d(o) {
      Oe(r, o), o && N(t);
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
      Y(t.$$.fragment);
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
      n || (w(t.$$.fragment, r), n = !0);
    },
    o(r) {
      q(t.$$.fragment, r), n = !1;
    },
    d(r) {
      X(t, r);
    }
  };
}
function wi(e) {
  let t, n, l, r;
  const i = [Vs, xs], o = [];
  function a(f, s) {
    return (
      /*$$slots*/
      f[15].caption ? 1 : 0
    );
  }
  return n = a(e), l = o[n] = i[n](e), {
    c() {
      t = p("div"), l.c(), g(t, "class", "text-xs text-gray-800 dark:text-gray-200");
    },
    m(f, s) {
      R(f, t, s), o[n].m(t, null), r = !0;
    },
    p(f, s) {
      let u = n;
      n = a(f), n === u ? o[n].p(f, s) : (ie(), q(o[u], 1, 1, () => {
        o[u] = null;
      }), oe(), l = o[n], l ? l.p(f, s) : (l = o[n] = i[n](f), l.c()), w(l, 1), l.m(t, null));
    },
    i(f) {
      r || (w(l), r = !0);
    },
    o(f) {
      q(l), r = !1;
    },
    d(f) {
      f && N(t), o[n].d();
    }
  };
}
function xs(e) {
  let t;
  const n = (
    /*#slots*/
    e[17].caption
  ), l = Ve(
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
      73728) && Ke(
        l,
        n,
        r,
        /*$$scope*/
        r[16],
        t ? We(
          n,
          /*$$scope*/
          r[16],
          i,
          Bs
        ) : Xe(
          /*$$scope*/
          r[16]
        ),
        _i
      );
    },
    i(r) {
      t || (w(l, r), t = !0);
    },
    o(r) {
      q(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function Vs(e) {
  let t = Ne(".3")(
    /*value*/
    e[2]
  ) + "", n;
  return {
    c() {
      n = V(t);
    },
    m(l, r) {
      R(l, n, r);
    },
    p(l, r) {
      r & /*value*/
      4 && t !== (t = Ne(".3")(
        /*value*/
        l[2]
      ) + "") && ae(n, t);
    },
    i: Z,
    o: Z,
    d(l) {
      l && N(n);
    }
  };
}
function Ws(e) {
  let t, n, l, r, i, o, a, f, s = !!/*title*/
  e[11] && yi(e), u = (
    /*showFullBar*/
    e[4] && ki(e)
  );
  const c = [Gs, Fs], d = [];
  function m(h, y) {
    return (
      /*values*/
      h[3] != null ? 0 : 1
    );
  }
  i = m(e), o = d[i] = c[i](e);
  let b = (
    /*showTooltip*/
    e[5] && wi(e)
  );
  return {
    c() {
      t = p("div"), s && s.c(), n = P(), l = p("div"), u && u.c(), r = P(), o.c(), a = P(), b && b.c(), g(l, "class", "parent-bar relative rounded-full overflow-hidden"), re(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), re(l, "height", "6px"), fe(l, "mb-1", !/*horizontalLayout*/
      e[12]), g(t, "class", "items-center gap-1"), fe(
        t,
        "flex",
        /*horizontalLayout*/
        e[12]
      );
    },
    m(h, y) {
      R(h, t, y), s && s.m(t, null), _(t, n), _(t, l), u && u.m(l, null), _(l, r), d[i].m(l, null), _(t, a), b && b.m(t, null), f = !0;
    },
    p(h, [y]) {
      /*title*/
      h[11] ? s ? s.p(h, y) : (s = yi(h), s.c(), s.m(t, n)) : s && (s.d(1), s = null), /*showFullBar*/
      h[4] ? u ? (u.p(h, y), y & /*showFullBar*/
      16 && w(u, 1)) : (u = ki(h), u.c(), w(u, 1), u.m(l, r)) : u && (ie(), q(u, 1, 1, () => {
        u = null;
      }), oe());
      let C = i;
      i = m(h), i === C ? d[i].p(h, y) : (ie(), q(d[C], 1, 1, () => {
        d[C] = null;
      }), oe(), o = d[i], o ? o.p(h, y) : (o = d[i] = c[i](h), o.c()), w(o, 1), o.m(l, null)), (!f || y & /*width*/
      1) && re(
        l,
        "width",
        /*width*/
        h[0] == null ? "100%" : `${/*width*/
        h[0]}px`
      ), (!f || y & /*horizontalLayout*/
      4096) && fe(l, "mb-1", !/*horizontalLayout*/
      h[12]), /*showTooltip*/
      h[5] ? b ? (b.p(h, y), y & /*showTooltip*/
      32 && w(b, 1)) : (b = wi(h), b.c(), w(b, 1), b.m(t, null)) : b && (ie(), q(b, 1, 1, () => {
        b = null;
      }), oe()), (!f || y & /*horizontalLayout*/
      4096) && fe(
        t,
        "flex",
        /*horizontalLayout*/
        h[12]
      );
    },
    i(h) {
      f || (w(u), w(o), w(b), f = !0);
    },
    o(h) {
      q(u), q(o), q(b), f = !1;
    },
    d(h) {
      h && N(t), s && s.d(), u && u.d(), d[i].d(), b && b.d();
    }
  };
}
const vi = (e) => e, Ci = (e) => e, Si = (e) => e;
function Ks(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = Ir(l);
  let { width: o = 100 } = t, { scale: a = null } = t, { value: f = 0 } = t, { values: s = null } = t, { showFullBar: u = !1 } = t, { showTooltip: c = !0 } = t, { colors: d = cs } = t, { colorScale: m = js } = t, { color: b = null } = t, { fullBarColor: h = "#e5e7eb" } = t, { hoverable: y = !1 } = t, { title: C = null } = t, { horizontalLayout: k = !1 } = t, v = null, z = [];
  const L = (T) => n(13, v = -1), D = (T) => n(13, v = null), B = (T, ne) => n(13, v = T), O = (T) => n(13, v = null), E = () => b, A = (T) => n(13, v = 0), S = (T) => n(13, v = null);
  return e.$$set = (T) => {
    "width" in T && n(0, o = T.width), "scale" in T && n(1, a = T.scale), "value" in T && n(2, f = T.value), "values" in T && n(3, s = T.values), "showFullBar" in T && n(4, u = T.showFullBar), "showTooltip" in T && n(5, c = T.showTooltip), "colors" in T && n(6, d = T.colors), "colorScale" in T && n(7, m = T.colorScale), "color" in T && n(8, b = T.color), "fullBarColor" in T && n(9, h = T.fullBarColor), "hoverable" in T && n(10, y = T.hoverable), "title" in T && n(11, C = T.title), "horizontalLayout" in T && n(12, k = T.horizontalLayout), "$$scope" in T && n(16, r = T.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*values*/
    8 && (s != null ? n(14, z = Hs(s)) : n(14, z = []));
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
    h,
    y,
    C,
    k,
    v,
    z,
    i,
    r,
    l,
    L,
    D,
    B,
    O,
    E,
    A,
    S
  ];
}
class Kr extends we {
  constructor(t) {
    super(), pe(this, t, Ks, Ws, ke, {
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
const Xs = (e) => ({ hovering: e & /*hovering*/
1 }), Ni = (e) => ({ hovering: (
  /*hovering*/
  e[0]
) });
function Ys(e) {
  let t, n, l, r;
  const i = (
    /*#slots*/
    e[4].default
  ), o = Ve(
    i,
    e,
    /*$$scope*/
    e[3],
    Ni
  );
  return {
    c() {
      t = p("div"), o && o.c(), g(
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
      R(a, t, f), o && o.m(t, null), n = !0, l || (r = [
        W(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[6]
        ),
        W(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[7]
        ),
        W(
          t,
          "click",
          /*click_handler*/
          e[5]
        )
      ], l = !0);
    },
    p(a, [f]) {
      o && o.p && (!n || f & /*$$scope, hovering*/
      9) && Ke(
        o,
        i,
        a,
        /*$$scope*/
        a[3],
        n ? We(
          i,
          /*$$scope*/
          a[3],
          f,
          Xs
        ) : Xe(
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
      n || (w(o, a), n = !0);
    },
    o(a) {
      q(o, a), n = !1;
    },
    d(a) {
      a && N(t), o && o.d(a), l = !1, ve(r);
    }
  };
}
function Us(e, t, n) {
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
class or extends we {
  constructor(t) {
    super(), pe(this, t, Us, Ys, ke, { hovering: 0, class: 1, style: 2 });
  }
}
function Mi(e, t, n) {
  const l = e.slice();
  return l[37] = t[n], l[39] = n, l;
}
function qi(e, t, n) {
  const l = e.slice();
  return l[41] = t[n], l;
}
function Ri(e) {
  let t, n = (
    /*scope*/
    e[41] + ""
  ), l, r;
  return {
    c() {
      t = p("option"), l = V(n), t.__value = r = /*scope*/
      e[41], t.value = t.__value;
    },
    m(i, o) {
      R(i, t, o), _(t, l);
    },
    p(i, o) {
      o[0] & /*scopes*/
      4 && n !== (n = /*scope*/
      i[41] + "") && ae(l, n), o[0] & /*scopes*/
      4 && r !== (r = /*scope*/
      i[41]) && (t.__value = r, t.value = t.__value);
    },
    d(i) {
      i && N(t);
    }
  };
}
function Js(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b, h, y, C, k, v, z, L, D, B, O, E, A, S, T, ne;
  function j(ee, de) {
    if (
      /*hasError*/
      ee[19]
    )
      return tu;
    if (
      /*hasConceptIds*/
      ee[20]
    )
      return eu;
  }
  let Q = j(e), H = Q && Q(e), U = (
    /*totalCount*/
    e[21] > 0 && zi(e)
  );
  const he = [lu, nu], te = [];
  function ue(ee, de) {
    return (
      /*paginatedConcepts*/
      ee[18].length > 0 ? 0 : 1
    );
  }
  h = ue(e), y = te[h] = he[h](e), z = new ce({
    props: { icon: Rt, class: "inline mr-2" }
  });
  let be = (
    /*selectedConceptIDs*/
    e[12].size > 0 && Ai(e)
  );
  function se(ee, de) {
    return (
      /*queryByName*/
      ee[1] ? ou : iu
    );
  }
  let I = se(e), G = I(e), le = (
    /*sortedConcepts*/
    e[15].length > at && Ti(e)
  );
  return {
    c() {
      H && H.c(), t = P(), n = p("div"), l = p("div"), r = p("div"), i = p("input"), o = P(), a = p("div"), a.textContent = "Data Element", f = P(), s = p("div"), s.textContent = "Type", u = P(), c = p("div"), d = V(`Count
            `), U && U.c(), m = P(), b = p("div"), y.c(), C = P(), k = p("div"), v = p("button"), Y(z.$$.fragment), L = V(`
          Query `), be && be.c(), B = P(), O = p("button"), G.c(), A = P(), le && le.c(), g(i, "type", "checkbox"), g(i, "class", "form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"), i.checked = /*allFilteredSelected*/
      e[13], i.indeterminate = /*someFilteredSelected*/
      e[17], g(i, "aria-label", "Select all concepts"), g(r, "class", "flex items-center justify-center"), g(a, "class", "font-semibold text-gray-900 dark:text-gray-100"), g(s, "class", "font-semibold text-gray-900 dark:text-gray-100"), g(c, "class", "font-semibold text-gray-900 dark:text-gray-100"), g(l, "class", "grid gap-4 px-4 py-4 items-center"), re(l, "grid-template-columns", "2rem 2fr 1fr 2fr"), g(n, "class", "bg-gray-50 dark:bg-gray-800 rounded-t-lg border border-gray-200 dark:border-gray-700"), g(b, "class", "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-b-lg overflow-y-auto custom-scrollbar min-h-0 flex-auto svelte-1xw87wt"), g(v, "class", "px-3 py-1.5 font-semibold rounded transition-colors duration-200 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-200/50 disabled:dark:bg-gray-700/50 text-white disabled:text-gray-500/50 whitespace-nowrap"), v.disabled = D = /*selectedConceptIDs*/
      e[12].size == 0, O.disabled = E = /*selectedConceptIDs*/
      e[12].size == 0, g(O, "class", "px-3 py-1.5 font-semibold rounded transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 disabled:opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white whitespace-nowrap"), g(O, "title", "Change whether to add to query by concept name or ID"), g(k, "class", "py-2 flex items-center gap-2");
    },
    m(ee, de) {
      H && H.m(ee, de), R(ee, t, de), R(ee, n, de), _(n, l), _(l, r), _(r, i), _(l, o), _(l, a), _(l, f), _(l, s), _(l, u), _(l, c), _(c, d), U && U.m(c, null), R(ee, m, de), R(ee, b, de), te[h].m(b, null), R(ee, C, de), R(ee, k, de), _(k, v), K(z, v, null), _(v, L), be && be.m(v, null), _(k, B), _(k, O), G.m(O, null), _(k, A), le && le.m(k, null), S = !0, T || (ne = [
        W(
          i,
          "change",
          /*toggleSelectAllFiltered*/
          e[25]
        ),
        W(
          v,
          "click",
          /*click_handler_3*/
          e[35]
        ),
        W(
          O,
          "click",
          /*click_handler_4*/
          e[36]
        )
      ], T = !0);
    },
    p(ee, de) {
      Q === (Q = j(ee)) && H ? H.p(ee, de) : (H && H.d(1), H = Q && Q(ee), H && (H.c(), H.m(t.parentNode, t))), (!S || de[0] & /*allFilteredSelected*/
      8192) && (i.checked = /*allFilteredSelected*/
      ee[13]), (!S || de[0] & /*someFilteredSelected*/
      131072) && (i.indeterminate = /*someFilteredSelected*/
      ee[17]), /*totalCount*/
      ee[21] > 0 ? U ? U.p(ee, de) : (U = zi(ee), U.c(), U.m(c, null)) : U && (U.d(1), U = null);
      let Ee = h;
      h = ue(ee), h === Ee ? te[h].p(ee, de) : (ie(), q(te[Ee], 1, 1, () => {
        te[Ee] = null;
      }), oe(), y = te[h], y ? y.p(ee, de) : (y = te[h] = he[h](ee), y.c()), w(y, 1), y.m(b, null)), /*selectedConceptIDs*/
      ee[12].size > 0 ? be ? be.p(ee, de) : (be = Ai(ee), be.c(), be.m(v, null)) : be && (be.d(1), be = null), (!S || de[0] & /*selectedConceptIDs*/
      4096 && D !== (D = /*selectedConceptIDs*/
      ee[12].size == 0)) && (v.disabled = D), I !== (I = se(ee)) && (G.d(1), G = I(ee), G && (G.c(), G.m(O, null))), (!S || de[0] & /*selectedConceptIDs*/
      4096 && E !== (E = /*selectedConceptIDs*/
      ee[12].size == 0)) && (O.disabled = E), /*sortedConcepts*/
      ee[15].length > at ? le ? (le.p(ee, de), de[0] & /*sortedConcepts*/
      32768 && w(le, 1)) : (le = Ti(ee), le.c(), w(le, 1), le.m(k, null)) : le && (ie(), q(le, 1, 1, () => {
        le = null;
      }), oe());
    },
    i(ee) {
      S || (w(y), w(z.$$.fragment, ee), w(le), S = !0);
    },
    o(ee) {
      q(y), q(z.$$.fragment, ee), q(le), S = !1;
    },
    d(ee) {
      H && H.d(ee), ee && N(t), ee && N(n), U && U.d(), ee && N(m), ee && N(b), te[h].d(), ee && N(C), ee && N(k), X(z), be && be.d(), G.d(), le && le.d(), T = !1, ve(ne);
    }
  };
}
function Zs(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m;
  return a = new ce({
    props: { icon: zf, class: "inline mr-2" }
  }), {
    c() {
      t = p("div"), n = p("div"), n.textContent = "Data elements not retrieved yet", l = P(), r = p("p"), r.textContent = "Click below to retrieve available data elements in this scope.", i = P(), o = p("button"), Y(a.$$.fragment), f = V(`
          Load Data Elements for `), s = p("span"), u = V(
        /*scopeName*/
        e[0]
      ), g(n, "class", "w-3/4 text-gray-700 dark:text-gray-200 text-lg font-semibold"), g(r, "class", "text-gray-600 dark:text-gray-400 w-1/3"), g(s, "class", "font-mono"), g(o, "class", "px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md"), o.disabled = /*isLoading*/
      e[4], g(t, "class", "flex flex-col w-full h-full items-center justify-center text-center gap-4");
    },
    m(b, h) {
      R(b, t, h), _(t, n), _(t, l), _(t, r), _(t, i), _(t, o), K(a, o, null), _(o, f), _(o, s), _(s, u), c = !0, d || (m = W(o, "click", function() {
        Ye(
          /*onAnalyze*/
          e[6]
        ) && e[6].apply(this, arguments);
      }), d = !0);
    },
    p(b, h) {
      e = b, (!c || h[0] & /*scopeName*/
      1) && ae(
        u,
        /*scopeName*/
        e[0]
      ), (!c || h[0] & /*isLoading*/
      16) && (o.disabled = /*isLoading*/
      e[4]);
    },
    i(b) {
      c || (w(a.$$.fragment, b), c = !0);
    },
    o(b) {
      q(a.$$.fragment, b), c = !1;
    },
    d(b) {
      b && N(t), X(a), d = !1, m();
    }
  };
}
function $s(e) {
  let t, n, l, r = (
    /*loadingMessage*/
    e[5] && Pi(e)
  );
  return {
    c() {
      t = p("div"), n = p("div"), n.innerHTML = `<div class="relative"><div class="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-spin"></div> 
            
            <div class="absolute top-2 left-2 w-12 h-12 border-4 border-blue-600 dark:border-blue-400 rounded-full animate-spin" style="animation-direction: reverse; animation-duration: 1.5s;"></div> 
            
            <div class="absolute top-6 left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div></div>`, l = P(), r && r.c(), g(n, "class", "flex justify-center mb-8"), g(t, "class", "text-center py-16");
    },
    m(i, o) {
      R(i, t, o), _(t, n), _(t, l), r && r.m(t, null);
    },
    p(i, o) {
      /*loadingMessage*/
      i[5] ? r ? r.p(i, o) : (r = Pi(i), r.c(), r.m(t, null)) : r && (r.d(1), r = null);
    },
    i: Z,
    o: Z,
    d(i) {
      i && N(t), r && r.d();
    }
  };
}
function eu(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m;
  return {
    c() {
      t = p("div"), n = p("div"), l = p("div"), l.innerHTML = '<span class="text-yellow-600 dark:text-yellow-400">⚠️</span>', r = P(), i = p("div"), o = p("h3"), o.textContent = "Concept Names Not Found", a = P(), f = p("div"), s = p("p"), s.textContent = `Some concepts are showing as IDs instead of human-readable
                  names. This might be due to vocabulary lookup issues.`, u = P(), c = p("button"), c.textContent = "🔄 Refresh Analysis", g(l, "class", "flex-shrink-0"), g(o, "class", "text-sm font-medium text-yellow-800 dark:text-yellow-200"), g(c, "class", "mt-2 bg-yellow-600 hover:bg-yellow-700 text-white text-xs px-3 py-1 rounded transition-colors duration-200"), g(f, "class", "mt-2 text-sm text-yellow-700 dark:text-yellow-300"), g(i, "class", "ml-3"), g(n, "class", "flex items-start"), g(t, "class", "bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4");
    },
    m(b, h) {
      R(b, t, h), _(t, n), _(n, l), _(n, r), _(n, i), _(i, o), _(i, a), _(i, f), _(f, s), _(f, u), _(f, c), d || (m = W(
        c,
        "click",
        /*click_handler_1*/
        e[32]
      ), d = !0);
    },
    p: Z,
    d(b) {
      b && N(t), d = !1, m();
    }
  };
}
function tu(e) {
  let t, n, l, r, i, o, a, f, s, u = (
    /*scopeConcepts*/
    e[8].error + ""
  ), c, d, m, b, h;
  return {
    c() {
      t = p("div"), n = p("div"), l = p("div"), l.innerHTML = '<span class="text-red-600 dark:text-red-400">❌</span>', r = P(), i = p("div"), o = p("h3"), o.textContent = "Analysis Failed", a = P(), f = p("div"), s = p("p"), c = V(u), d = P(), m = p("button"), m.textContent = "🔄 Retry Analysis", g(l, "class", "flex-shrink-0"), g(o, "class", "text-sm font-medium text-red-800 dark:text-red-200"), g(m, "class", "mt-2 bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded transition-colors duration-200"), g(f, "class", "mt-2 text-sm text-red-700 dark:text-red-300"), g(i, "class", "ml-3"), g(n, "class", "flex items-start"), g(t, "class", "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-4");
    },
    m(y, C) {
      R(y, t, C), _(t, n), _(n, l), _(n, r), _(n, i), _(i, o), _(i, a), _(i, f), _(f, s), _(s, c), _(f, d), _(f, m), b || (h = W(
        m,
        "click",
        /*click_handler*/
        e[31]
      ), b = !0);
    },
    p(y, C) {
      C[0] & /*scopeConcepts*/
      256 && u !== (u = /*scopeConcepts*/
      y[8].error + "") && ae(c, u);
    },
    d(y) {
      y && N(t), b = !1, h();
    }
  };
}
function zi(e) {
  let t, n, l = (
    /*totalCount*/
    e[21].toLocaleString() + ""
  ), r, i;
  return {
    c() {
      t = p("span"), n = V("(Total: "), r = V(l), i = V(")"), g(t, "class", "text-sm font-normal text-gray-600 dark:text-gray-400");
    },
    m(o, a) {
      R(o, t, a), _(t, n), _(t, r), _(t, i);
    },
    p(o, a) {
      a[0] & /*totalCount*/
      2097152 && l !== (l = /*totalCount*/
      o[21].toLocaleString() + "") && ae(r, l);
    },
    d(o) {
      o && N(t);
    }
  };
}
function nu(e) {
  let t;
  return {
    c() {
      t = p("div"), t.textContent = "No concepts found for this scope.", g(t, "class", "px-6 py-8 text-center text-gray-500 dark:text-gray-400");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: Z,
    i: Z,
    o: Z,
    d(n) {
      n && N(t);
    }
  };
}
function lu(e) {
  let t, n, l = (
    /*paginatedConcepts*/
    e[18]
  ), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = Di(Mi(e, l, o));
  const i = (o) => q(r[o], 1, 1, () => {
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
          const s = Mi(o, l, f);
          r[f] ? (r[f].p(s, a), w(r[f], 1)) : (r[f] = Di(s), r[f].c(), w(r[f], 1), r[f].m(t.parentNode, t));
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
        q(r[a]);
      n = !1;
    },
    d(o) {
      Oe(r, o), o && N(t);
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
      t = p("div"), l = V(n), g(t, "class", "text-xs font-mono text-gray-500 dark:text-gray-400 truncate");
    },
    m(r, i) {
      R(r, t, i), _(t, l);
    },
    p(r, i) {
      i[0] & /*paginatedConcepts*/
      262144 && n !== (n = /*concept*/
      r[37].id + "") && ae(l, n);
    },
    d(r) {
      r && N(t);
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
      Y(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
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
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function ru(e) {
  let t, n, l, r, i, o, a = (
    /*concept*/
    e[37].name + ""
  ), f, s, u, c, d, m, b = (
    /*concept*/
    e[37].type + ""
  ), h, y, C, k, v, z, L, D = (
    /*concept*/
    e[37].count.toLocaleString() + ""
  ), B, O, E, A, S, T, ne, j;
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
  ), U = (
    /*totalCount*/
    e[21] > 0 && Ei(e)
  );
  A = new ce({ props: { icon: Rt, class: "inline" } });
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
      t = p("div"), n = p("input"), r = P(), i = p("div"), o = p("div"), f = V(a), u = P(), H && H.c(), c = P(), d = p("div"), m = p("span"), h = V(b), C = P(), k = p("div"), v = p("div"), U && U.c(), z = P(), L = p("div"), B = V(D), O = P(), E = p("button"), Y(A.$$.fragment), S = P(), g(n, "type", "checkbox"), g(n, "class", "form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500"), n.checked = l = /*selectedConceptIDs*/
      e[12].has(
        /*concept*/
        e[37].id
      ), g(n, "aria-label", "Select concept"), g(t, "class", "flex items-center justify-center"), g(o, "class", "text-gray-900 dark:text-gray-100 font-medium truncate"), g(o, "title", s = /*concept*/
      e[37].name), g(i, "class", "space-y-1 truncate"), g(m, "class", y = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " + /*concept*/
      (e[37].type === "event" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : (
        /*concept*/
        e[37].type === "interval" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
      ))), g(d, "class", "text-gray-600 dark:text-gray-400"), g(L, "class", "text-gray-600 dark:text-gray-200 font-mono text-sm truncate"), g(v, "class", "space-y-2 flex-auto shrink min-w-0"), g(E, "class", "px-2 py-1.5 text-sm text-center font-semibold rounded transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white whitespace-nowrap"), g(E, "title", "Add this concept to your query"), fe(E, "invisible", !/*hovering*/
      e[40]), g(k, "class", "flex gap-2 items-center justify-between min-w-0");
    },
    m(te, ue) {
      R(te, t, ue), _(t, n), R(te, r, ue), R(te, i, ue), _(i, o), _(o, f), _(i, u), H && H.m(i, null), R(te, c, ue), R(te, d, ue), _(d, m), _(m, h), R(te, C, ue), R(te, k, ue), _(k, v), U && U.m(v, null), _(v, z), _(v, L), _(L, B), _(k, O), _(k, E), K(A, E, null), R(te, S, ue), T = !0, ne || (j = [
        W(n, "change", Q),
        W(E, "click", he)
      ], ne = !0);
    },
    p(te, ue) {
      e = te, (!T || ue[0] & /*selectedConceptIDs, paginatedConcepts*/
      266240 && l !== (l = /*selectedConceptIDs*/
      e[12].has(
        /*concept*/
        e[37].id
      ))) && (n.checked = l), (!T || ue[0] & /*paginatedConcepts*/
      262144) && a !== (a = /*concept*/
      e[37].name + "") && ae(f, a), (!T || ue[0] & /*paginatedConcepts*/
      262144 && s !== (s = /*concept*/
      e[37].name)) && g(o, "title", s), /*concept*/
      e[37].id != /*concept*/
      e[37].name ? H ? H.p(e, ue) : (H = Li(e), H.c(), H.m(i, null)) : H && (H.d(1), H = null), (!T || ue[0] & /*paginatedConcepts*/
      262144) && b !== (b = /*concept*/
      e[37].type + "") && ae(h, b), (!T || ue[0] & /*paginatedConcepts*/
      262144 && y !== (y = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium " + /*concept*/
      (e[37].type === "event" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : (
        /*concept*/
        e[37].type === "interval" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
      )))) && g(m, "class", y), /*totalCount*/
      e[21] > 0 ? U ? (U.p(e, ue), ue[0] & /*totalCount*/
      2097152 && w(U, 1)) : (U = Ei(e), U.c(), w(U, 1), U.m(v, z)) : U && (ie(), q(U, 1, 1, () => {
        U = null;
      }), oe()), (!T || ue[0] & /*paginatedConcepts*/
      262144) && D !== (D = /*concept*/
      e[37].count.toLocaleString() + "") && ae(B, D), (!T || ue[1] & /*hovering*/
      512) && fe(E, "invisible", !/*hovering*/
      e[40]);
    },
    i(te) {
      T || (w(U), w(A.$$.fragment, te), T = !0);
    },
    o(te) {
      q(U), q(A.$$.fragment, te), T = !1;
    },
    d(te) {
      te && N(t), te && N(r), te && N(i), H && H.d(), te && N(c), te && N(d), te && N(C), te && N(k), U && U.d(), X(A), te && N(S), ne = !1, ve(j);
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
          ru,
          ({ hovering: l }) => ({ 40: l }),
          ({ hovering: l }) => [0, l ? 512 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
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
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
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
      n = V(t), l = V(" Concept"), i = V(r);
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
      o && N(n), o && N(l), o && N(i);
    }
  };
}
function iu(e) {
  let t;
  return {
    c() {
      t = V("By ID");
    },
    m(n, l) {
      R(n, t, l);
    },
    d(n) {
      n && N(t);
    }
  };
}
function ou(e) {
  let t;
  return {
    c() {
      t = V("By Name");
    },
    m(n, l) {
      R(n, t, l);
    },
    d(n) {
      n && N(t);
    }
  };
}
function Ti(e) {
  let t, n, l, r, i, o, a, f, s, u = (
    /*currentPage*/
    (e[11] - 1) * at + 1 + ""
  ), c, d, m = Math.min(
    /*currentPage*/
    e[11] * at,
    /*concepts*/
    e[9].length
  ) + "", b, h, y = (
    /*concepts*/
    e[9].length + ""
  ), C, k, v, z, L, D, B, O;
  return i = new ce({ props: { icon: Df } }), z = new ce({ props: { icon: zt } }), {
    c() {
      t = p("div"), n = P(), l = p("div"), r = p("button"), Y(i.$$.fragment), a = P(), f = p("span"), s = V("Concepts "), c = V(u), d = V(" - "), b = V(m), h = V(" of "), C = V(y), k = P(), v = p("button"), Y(z.$$.fragment), g(t, "class", "flex-auto"), g(r, "class", "p-2 hover:opacity-50 disabled:opacity-30 disabled:cursor-not-allowed"), r.disabled = o = /*currentPage*/
      e[11] === 1, g(r, "aria-label", "Previous Page"), g(f, "class", "text-sm"), g(v, "class", "p-2 hover:opacity-50 disabled:opacity-30 disabled:cursor-not-allowed"), v.disabled = L = /*currentPage*/
      e[11] === /*totalPages*/
      e[14], g(v, "aria-label", "Next Page"), g(l, "class", "shrink-0 flex justify-end items-center text-gray-700 dark:text-gray-200");
    },
    m(E, A) {
      R(E, t, A), R(E, n, A), R(E, l, A), _(l, r), K(i, r, null), _(l, a), _(l, f), _(f, s), _(f, c), _(f, d), _(f, b), _(f, h), _(f, C), _(l, k), _(l, v), K(z, v, null), D = !0, B || (O = [
        W(
          r,
          "click",
          /*prevPage*/
          e[23]
        ),
        W(
          v,
          "click",
          /*nextPage*/
          e[24]
        )
      ], B = !0);
    },
    p(E, A) {
      (!D || A[0] & /*currentPage*/
      2048 && o !== (o = /*currentPage*/
      E[11] === 1)) && (r.disabled = o), (!D || A[0] & /*currentPage*/
      2048) && u !== (u = /*currentPage*/
      (E[11] - 1) * at + 1 + "") && ae(c, u), (!D || A[0] & /*currentPage, concepts*/
      2560) && m !== (m = Math.min(
        /*currentPage*/
        E[11] * at,
        /*concepts*/
        E[9].length
      ) + "") && ae(b, m), (!D || A[0] & /*concepts*/
      512) && y !== (y = /*concepts*/
      E[9].length + "") && ae(C, y), (!D || A[0] & /*currentPage, totalPages*/
      18432 && L !== (L = /*currentPage*/
      E[11] === /*totalPages*/
      E[14])) && (v.disabled = L);
    },
    i(E) {
      D || (w(i.$$.fragment, E), w(z.$$.fragment, E), D = !0);
    },
    o(E) {
      q(i.$$.fragment, E), q(z.$$.fragment, E), D = !1;
    },
    d(E) {
      E && N(t), E && N(n), E && N(l), X(i), X(z), B = !1, ve(O);
    }
  };
}
function Pi(e) {
  let t, n, l, r, i, o;
  return {
    c() {
      t = p("div"), n = p("div"), l = p("div"), r = P(), i = p("span"), o = V(
        /*loadingMessage*/
        e[5]
      ), g(l, "class", "w-2 h-2 bg-blue-500 rounded-full animate-pulse"), g(i, "class", "text-sm text-blue-700 dark:text-blue-300 font-medium"), g(n, "class", "flex items-center space-x-2"), g(t, "class", "mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg");
    },
    m(a, f) {
      R(a, t, f), _(t, n), _(n, l), _(n, r), _(n, i), _(i, o);
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
      a && N(t);
    }
  };
}
function au(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m = (
    /*scopes*/
    e[2]
  ), b = [];
  for (let k = 0; k < m.length; k += 1)
    b[k] = Ri(qi(e, m, k));
  const h = [$s, Zs, Js], y = [];
  function C(k, v) {
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
      t = p("div"), n = p("div"), l = p("select");
      for (let k = 0; k < b.length; k += 1)
        b[k].c();
      r = P(), i = p("input"), o = P(), a = p("div"), s.c(), g(l, "class", "text-2xl font-bold text-gray-900 dark:text-gray-100 flex-auto flat-select"), g(l, "aria-label", "Select scope"), re(l, "min-width", "0"), re(l, "max-width", "100%"), /*scopeName*/
      e[0] === void 0 && Tn(() => (
        /*select_change_handler*/
        e[28].call(l)
      )), g(i, "type", "search"), g(i, "class", "shrink px-3 py-1.5 rounded overflow-hidden focus:bg-white bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline focus:outline-blue-500 w-64 transition-colors duration-200"), g(i, "placeholder", "Filter concepts..."), g(i, "autocomplete", "off"), g(n, "class", "pb-6 shrink-0 flex items-center justify-between gap-2"), g(a, "class", "w-full flex-auto flex flex-col h-0"), g(t, "class", "w-full h-full flex flex-col p-4");
    },
    m(k, v) {
      R(k, t, v), _(t, n), _(n, l);
      for (let z = 0; z < b.length; z += 1)
        b[z] && b[z].m(l, null);
      Zr(
        l,
        /*scopeName*/
        e[0],
        !0
      ), _(n, r), _(n, i), He(
        i,
        /*search*/
        e[10]
      ), _(t, o), _(t, a), y[f].m(a, null), u = !0, c || (d = [
        W(
          l,
          "change",
          /*select_change_handler*/
          e[28]
        ),
        W(
          l,
          "change",
          /*change_handler*/
          e[29]
        ),
        W(
          i,
          "input",
          /*input_input_handler*/
          e[30]
        )
      ], c = !0);
    },
    p(k, v) {
      if (v[0] & /*scopes*/
      4) {
        m = /*scopes*/
        k[2];
        let L;
        for (L = 0; L < m.length; L += 1) {
          const D = qi(k, m, L);
          b[L] ? b[L].p(D, v) : (b[L] = Ri(D), b[L].c(), b[L].m(l, null));
        }
        for (; L < b.length; L += 1)
          b[L].d(1);
        b.length = m.length;
      }
      v[0] & /*scopeName, scopes*/
      5 && Zr(
        l,
        /*scopeName*/
        k[0]
      ), v[0] & /*search*/
      1024 && i.value !== /*search*/
      k[10] && He(
        i,
        /*search*/
        k[10]
      );
      let z = f;
      f = C(k), f === z ? y[f].p(k, v) : (ie(), q(y[z], 1, 1, () => {
        y[z] = null;
      }), oe(), s = y[f], s ? s.p(k, v) : (s = y[f] = h[f](k), s.c()), w(s, 1), s.m(a, null));
    },
    i(k) {
      u || (w(s), u = !0);
    },
    o(k) {
      q(s), u = !1;
    },
    d(k) {
      k && N(t), Oe(b, k), y[f].d(), c = !1, ve(d);
    }
  };
}
const at = 50;
function fu(e, t, n) {
  let l, r, i, o, a, f, s, u, c, d, m;
  F(e, Xl, (G) => n(22, m = G));
  let { scopes: b = [] } = t, { onScopeSelect: h = () => {
  } } = t, { scopeName: y = "" } = t, { isLoading: C = !1 } = t, { loadingMessage: k = "" } = t, { onAnalyze: v = () => {
  } } = t, { onInsert: z = () => {
  } } = t, { scopeConcepts: L = {} } = t, { queryByName: D = !1 } = t, B = [], O = "", E = 1;
  function A() {
    E > 1 && n(11, E -= 1);
  }
  function S() {
    E < s && n(11, E += 1);
  }
  let T = /* @__PURE__ */ new Set();
  function ne() {
    c ? (a.forEach((G) => T.delete(G.id)), n(12, T = new Set(T))) : (a.forEach((G) => T.add(G.id)), n(12, T = new Set(T)));
  }
  function j(G) {
    T.has(G) ? T.delete(G) : T.add(G), n(12, T = new Set(T));
  }
  function Q() {
    y = uf(this), n(0, y), n(2, b), n(3, h), n(2, b);
  }
  const H = (G) => h(G.target.value);
  function U() {
    O = this.value, n(10, O);
  }
  const he = () => v(), te = () => v(), ue = (G) => j(G.id), be = (G) => {
    D ? z(y, `name = '${G.name}'`) : typeof G.id == "string" && Number.isNaN(parseFloat(G.id)) ? z(y, `id = '${G.id}'`) : z(y, `id = ${G.id}`);
  }, se = () => {
    if (D) {
      let G = B.filter((le) => T.has(le.id)).map((le) => "'" + le.name + "'");
      z(y, `name in (${G.join(", ")})`);
    } else {
      let G;
      B.some((le) => typeof le.id == "string" && Number.isNaN(parseFloat(le.id))) ? G = B.filter((le) => T.has(le.id)).map((le) => `'${le.id}'`) : G = B.filter((le) => T.has(le.id)).map((le) => `${le.id}`), z(y, `id in (${G.join(", ")})`);
    }
  }, I = () => n(1, D = !D);
  return e.$$set = (G) => {
    "scopes" in G && n(2, b = G.scopes), "onScopeSelect" in G && n(3, h = G.onScopeSelect), "scopeName" in G && n(0, y = G.scopeName), "isLoading" in G && n(4, C = G.isLoading), "loadingMessage" in G && n(5, k = G.loadingMessage), "onAnalyze" in G && n(6, v = G.onAnalyze), "onInsert" in G && n(7, z = G.onInsert), "scopeConcepts" in G && n(8, L = G.scopeConcepts), "queryByName" in G && n(1, D = G.queryByName);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*scopes, scopeName, onScopeSelect*/
    13 && b.length > 0 && !y && (n(0, y = b[0]), h(y)), e.$$.dirty[0] & /*scopeName, scopeConcepts*/
    257 && n(16, l = y && L && L.scope_name === y), e.$$.dirty[0] & /*isAnalyzed, scopeConcepts*/
    65792 && n(9, B = l && L.concepts ? L.concepts : []), e.$$.dirty[0] & /*concepts*/
    512 && n(21, r = B.reduce((G, le) => G + le.count, 0)), e.$$.dirty[0] & /*concepts*/
    512 && n(20, i = B.some((G) => G.name.startsWith("Concept "))), e.$$.dirty[0] & /*scopeConcepts*/
    256 && n(19, o = L && L.error), e.$$.dirty[0] & /*search, concepts*/
    1536 && n(27, a = O.trim() ? B.filter((G) => (G.name ?? "").toLocaleLowerCase().includes(O.trim().toLocaleLowerCase()) || `${G.id ?? ""}`.toLocaleLowerCase().includes(O.trim().toLocaleLowerCase())) : B), e.$$.dirty[0] & /*filteredConcepts*/
    134217728 && n(15, f = [...a].sort((G, le) => le.count - G.count)), e.$$.dirty[0] & /*sortedConcepts*/
    32768 && n(14, s = Math.max(1, Math.ceil(f.length / at))), e.$$.dirty[0] & /*currentPage, totalPages*/
    18432 && E > s && n(11, E = 1), e.$$.dirty[0] & /*sortedConcepts, currentPage*/
    34816 && n(18, u = f.slice((E - 1) * at, E * at)), e.$$.dirty[0] & /*filteredConcepts, selectedConceptIDs*/
    134221824 && n(13, c = a.length > 0 && a.every((G) => T.has(G.id))), e.$$.dirty[0] & /*filteredConcepts, selectedConceptIDs, allFilteredSelected*/
    134230016 && n(17, d = a.some((G) => T.has(G.id)) && !c);
  }, [
    y,
    D,
    b,
    h,
    C,
    k,
    v,
    z,
    L,
    B,
    O,
    E,
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
    A,
    S,
    ne,
    j,
    a,
    Q,
    H,
    U,
    he,
    te,
    ue,
    be,
    se,
    I
  ];
}
class su extends we {
  constructor(t) {
    super(), pe(
      this,
      t,
      fu,
      au,
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
function uu(e) {
  return e === 0 ? !0 : e;
}
function pt(e) {
  return uu(e) ? Array.isArray(e) ? (t) => e.map((n) => typeof n != "function" ? t[n] : n(t)) : typeof e != "function" ? (t) => t[e] : e : null;
}
function cu(e) {
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
function Lr(e, t = {}) {
  return cu(Object.entries(e).filter(([n, l]) => l !== void 0 && t[n] === void 0));
}
function du(e, t = 300) {
  let n;
  return (...l) => {
    clearTimeout(n), n = setTimeout(() => {
      e.apply(this, l);
    }, t);
  };
}
function gu(e, t, { sort: n = !1 } = {}) {
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
    const b = Array.from(d);
    l[s] = n === !0 ? b.sort() : b;
  }
  return l;
}
function mu(e, t) {
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
function zn(e, t) {
  return e.length !== t.length ? !1 : e.every((n) => t.includes(n));
}
function Ea(e) {
  return !!(typeof e.bandwidth == "function" || zn(Object.keys(e), ["domain", "range", "unknown", "copy"]));
}
function bu(e, t, n) {
  const l = Object.keys(n).reduce((i, o) => {
    const a = Ea(n[o]) === !0 ? "ordinal" : "other";
    return i[a] || (i[a] = {}), i[a][o] = t[o], i;
  }, { ordinal: !1, other: !1 });
  let r = {};
  return l.ordinal && (r = gu(e, l.ordinal)), l.other && (r = { ...r, ...mu(e, l.other) }), r;
}
function _u(e = [], t) {
  return Array.isArray(t) === !0 ? t.map((n, l) => n === null ? e[l] : n) : e;
}
function Hl(e) {
  return function([n, l]) {
    return typeof l == "function" && (l = l(n[e])), n ? _u(n[e], l) : l;
  };
}
function Wl(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function hu(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Da(e) {
  let t, n, l;
  e.length !== 2 ? (t = Wl, n = (a, f) => Wl(e(a), f), l = (a, f) => e(a) - f) : (t = e === Wl || e === hu ? e : yu, n = e, l = e);
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
function yu() {
  return 0;
}
function ku(e) {
  return e === null ? NaN : +e;
}
const pu = Da(Wl), wu = pu.right;
Da(ku).center;
const vu = wu;
class Qi extends Map {
  constructor(t, n = Nu) {
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
    return super.set(Cu(this, t), n);
  }
  delete(t) {
    return super.delete(Su(this, t));
  }
}
function ji({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) ? e.get(l) : n;
}
function Cu({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) ? e.get(l) : (e.set(l, n), n);
}
function Su({ _intern: e, _key: t }, n) {
  const l = t(n);
  return e.has(l) && (n = e.get(l), e.delete(l)), n;
}
function Nu(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Mu = Math.sqrt(50), qu = Math.sqrt(10), Ru = Math.sqrt(2);
function tr(e, t, n) {
  const l = (t - e) / Math.max(0, n), r = Math.floor(Math.log10(l)), i = l / Math.pow(10, r), o = i >= Mu ? 10 : i >= qu ? 5 : i >= Ru ? 2 : 1;
  let a, f, s;
  return r < 0 ? (s = Math.pow(10, -r) / o, a = Math.round(e * s), f = Math.round(t * s), a / s < e && ++a, f / s > t && --f, s = -s) : (s = Math.pow(10, r) * o, a = Math.round(e / s), f = Math.round(t / s), a * s < e && ++a, f * s > t && --f), f < a && 0.5 <= n && n < 2 ? tr(e, t, n * 2) : [a, f, s];
}
function zu(e, t, n) {
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
function Lu(e, t, n) {
  t = +t, e = +e, n = +n;
  const l = t < e, r = l ? Qr(t, e, n) : Qr(e, t, n);
  return (l ? -1 : 1) * (r < 0 ? 1 / -r : r);
}
function ft(e, t, n) {
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
function Xr() {
  var e = fr().unknown(void 0), t = e.domain, n = e.range, l = 0, r = 1, i, o, a = !1, f = 0, s = 0, u = 0.5;
  delete e.unknown;
  function c() {
    var d = t().length, m = r < l, b = m ? r : l, h = m ? l : r;
    i = (h - b) / Math.max(1, d - f + s * 2), a && (i = Math.floor(i)), b += (h - b - i * (d - f)) * u, o = i * (1 - f), a && (b = Math.round(b), o = Math.round(o));
    var y = ft(d).map(function(C) {
      return b + i * C;
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
    return Xr(t(), [l, r]).round(a).paddingInner(f).paddingOuter(s).align(u);
  }, ar.apply(c(), arguments);
}
function Eu(e) {
  return function() {
    return e;
  };
}
function Du(e) {
  return +e;
}
var Ii = [0, 1];
function nt(e) {
  return e;
}
function jr(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Eu(isNaN(t) ? NaN : 0.5);
}
function Au(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(l) {
    return Math.max(e, Math.min(t, l));
  };
}
function Tu(e, t, n) {
  var l = e[0], r = e[1], i = t[0], o = t[1];
  return r < l ? (l = jr(r, l), i = n(o, i)) : (l = jr(l, r), i = n(i, o)), function(a) {
    return i(l(a));
  };
}
function Pu(e, t, n) {
  var l = Math.min(e.length, t.length) - 1, r = new Array(l), i = new Array(l), o = -1;
  for (e[l] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < l; )
    r[o] = jr(e[o], e[o + 1]), i[o] = n(t[o], t[o + 1]);
  return function(a) {
    var f = vu(e, a, 1, l) - 1;
    return i[f](r[f](a));
  };
}
function Aa(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ta() {
  var e = Ii, t = Ii, n = Vr, l, r, i, o = nt, a, f, s;
  function u() {
    var d = Math.min(e.length, t.length);
    return o !== nt && (o = Au(e[0], e[d - 1])), a = d > 2 ? Pu : Tu, f = s = null, c;
  }
  function c(d) {
    return d == null || isNaN(d = +d) ? i : (f || (f = a(e.map(l), t, n)))(l(o(d)));
  }
  return c.invert = function(d) {
    return o(r((s || (s = a(t, e.map(l), er)))(d)));
  }, c.domain = function(d) {
    return arguments.length ? (e = Array.from(d, Du), u()) : e.slice();
  }, c.range = function(d) {
    return arguments.length ? (t = Array.from(d), u()) : t.slice();
  }, c.rangeRound = function(d) {
    return t = Array.from(d), n = Qs, u();
  }, c.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : nt, u()) : o !== nt;
  }, c.interpolate = function(d) {
    return arguments.length ? (n = d, u()) : n;
  }, c.unknown = function(d) {
    return arguments.length ? (i = d, c) : i;
  }, function(d, m) {
    return l = d, r = m, u();
  };
}
function Qu() {
  return Ta()(nt, nt);
}
function ju(e, t, n, l) {
  var r = Lu(e, t, n), i;
  switch (l = Ul(l ?? ",f"), l.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return l.precision == null && !isNaN(i = ss(r, o)) && (l.precision = i), Ma(l, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      l.precision == null && !isNaN(i = us(r, Math.max(Math.abs(e), Math.abs(t)))) && (l.precision = i - (l.type === "e"));
      break;
    }
    case "f":
    case "%": {
      l.precision == null && !isNaN(i = qa(r)) && (l.precision = i - (l.type === "%") * 2);
      break;
    }
  }
  return Ne(l);
}
function Pa(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var l = t();
    return zu(l[0], l[l.length - 1], n ?? 10);
  }, e.tickFormat = function(n, l) {
    var r = t();
    return ju(r[0], r[r.length - 1], n ?? 10, l);
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
function wt() {
  var e = Qu();
  return e.copy = function() {
    return Aa(e, wt());
  }, ar.apply(e, arguments), Pa(e);
}
function Hi(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function Ou(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Iu(e) {
  return e < 0 ? -e * e : e * e;
}
function Hu(e) {
  var t = e(nt, nt), n = 1;
  function l() {
    return n === 1 ? e(nt, nt) : n === 0.5 ? e(Ou, Iu) : e(Hi(n), Hi(1 / n));
  }
  return t.exponent = function(r) {
    return arguments.length ? (n = +r, l()) : n;
  }, Pa(t);
}
function Qa() {
  var e = Hu(Ta());
  return e.copy = function() {
    return Aa(e, Qa()).exponent(e.exponent());
  }, ar.apply(e, arguments), e;
}
function Bu() {
  return Qa.apply(null, arguments).exponent(0.5);
}
const Ln = {
  x: wt,
  y: wt,
  z: wt,
  r: Bu
};
function Fu(e) {
  return e.constant ? "symlog" : e.base ? "log" : e.exponent ? e.exponent() === 0.5 ? "sqrt" : "pow" : "other";
}
function Bi(e) {
  return e;
}
function Gu(e) {
  return (t) => Math.log(e * t);
}
function xu(e) {
  return (t) => e * Math.exp(t);
}
function Vu(e) {
  return (t) => Math.sign(t) * Math.log1p(Math.abs(t / e));
}
function Wu(e) {
  return (t) => Math.sign(t) * Math.expm1(Math.abs(t)) * e;
}
function Bl(e) {
  return function(n) {
    return n < 0 ? -Math.pow(-n, e) : Math.pow(n, e);
  };
}
function Ku(e) {
  const t = Fu(e);
  if (t === "log") {
    const n = Math.sign(e.domain()[0]);
    return { lift: Gu(n), ground: xu(n), scaleType: t };
  }
  return t === "pow" ? { lift: Bl(1), ground: Bl(1 / 1), scaleType: t } : t === "sqrt" ? { lift: Bl(0.5), ground: Bl(1 / 0.5), scaleType: t } : t === "symlog" ? { lift: Vu(1), ground: Wu(1), scaleType: t } : { lift: Bi, ground: Bi, scaleType: t };
}
function nr(e) {
  return e.replace(/^\w/, (t) => t.toUpperCase());
}
function De(e, t = "") {
  return `scale${nr(t)}${nr(e)}`;
}
function ja(e) {
  if (typeof e.bandwidth == "function")
    return typeof e.paddingInner == "function" ? De("band") : De("point");
  if (zn(Object.keys(e), ["domain", "range", "unknown", "copy"]))
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
  if (zn(Object.keys(e), ["domain", "range", "invertExtent", "unknown", "copy"]))
    return De("threshold");
  if (zn(Object.keys(e), ["invert", "range", "domain", "unknown", "copy", "ticks", "tickFormat", "nice"]))
    return De("identity");
  if (zn(Object.keys(e), [
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
const Xu = ["scaleThreshold", "scaleQuantile", "scaleQuantize", "scaleSequentialQuantile"];
function Yu(e, t) {
  if (typeof e.range != "function")
    throw console.log(e), new Error("Scale method `range` must be a function");
  if (typeof e.domain != "function")
    throw new Error("Scale method `domain` must be a function");
  if (!Array.isArray(t) || Xu.includes(ja(e)) || Ea(e) === !0)
    return e.domain();
  const { lift: n, ground: l } = Ku(e), r = e.domain()[0], i = Object.prototype.toString.call(r) === "[object Date]", [o, a] = e.domain().map((m) => n(i ? m.getTime() : m)), [f, s] = e.range(), u = t[0] || 0, c = t[1] || 0, d = (a - o) / (Math.abs(s - f) - u - c);
  return [o - u * d, c * d + a].map((m) => l(i ? new Date(m) : m));
}
function Uu(e, t, n, l, r) {
  let i, o;
  return r === !0 ? (i = 0, o = 100) : (i = e === "r" ? 1 : 0, o = e === "y" ? n : e === "r" ? 25 : t), l === !0 ? [o, i] : [i, o];
}
function Ju(e, t, n, l, r, i) {
  return r ? typeof r == "function" ? r({ width: t, height: n }) : r : Uu(e, t, n, l, i);
}
function Fl(e) {
  return function([n, l, r, i, o, a, f, s, u, c]) {
    if (l === null)
      return null;
    const d = Ju(e, f, s, a, u, c), m = n === Ln[e] ? n() : n.copy();
    return m.domain(r), (!m.interpolator || typeof m.interpolator == "function" && m.interpolator().name.startsWith("identity")) && m.range(d), i && m.domain(Yu(m, i)), (o === !0 || typeof o == "number") && (typeof m.nice == "function" ? m.nice(typeof o == "number" ? o : void 0) : console.error(`[Layer Cake] You set \`${e}Nice: true\` but the ${e}Scale does not have a \`.nice\` method. Ignoring...`)), m;
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
const $e = "    ";
function Zu(e) {
  const { r: t, g: n, b: l, opacity: r } = Zl(e);
  return [t, n, l].every((i) => i >= 0 && i <= 255) ? { r: t, g: n, b: l, o: r } : !1;
}
function $u({ r: e, g: t, b: n }) {
  return (0.2126 * e + 0.7152 * t + 0.0722 * n) / 255 > 0.6 ? "black" : "white";
}
function ec(e) {
  console.log("/********* LayerCake Debug ************/"), console.log("Bounding box:"), tc(e.boundingBox), console.log(`Scales:
`), Object.keys(e.activeGetters).forEach((t) => {
    nc(t, e[`${t}Scale`], e[t]);
  }), console.log(`/************ End LayerCake Debug ***************/
`);
}
function tc(e) {
  Object.entries(e).forEach(([t, n]) => {
    console.log(`${$e}${t}:`, n);
  });
}
function nc(e, t, n) {
  const l = ja(t);
  console.log(`${$e}${e}:`), console.log(`${$e}${$e}Accessor: "${n.toString()}"`), console.log(`${$e}${$e}Type: ${l}`), Fi(t, "domain"), Fi(t, "range", " ");
}
function Fi(e, t, n = "") {
  const l = e[t](), r = rc(l);
  r ? lc(r, t, l) : console.log(`${$e}${$e}${nr(t)}:${n}`, l);
}
function lc(e, t, n) {
  console.log(
    `${$e}${$e}${nr(t)}:    %cArray%c(${n.length}) ` + e[0] + "%c ]",
    "color: #1377e4",
    "color: #737373",
    "color: #1478e4",
    ...e[1],
    "color: #1478e4"
  );
}
function rc(e) {
  const t = [], n = e.map((l, r) => {
    const i = Zu(l);
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
      (l) => `background-color: rgba(${l.r}, ${l.g}, ${l.b}, ${l.o}); color:${$u(l)};`
    )
  ] : null;
}
const ic = (e) => ({
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
  ), i = Ve(
    r,
    e,
    /*$$scope*/
    e[152],
    Gi
  );
  return {
    c() {
      t = p("div"), i && i.c(), g(t, "class", "layercake-container svelte-vhzpsp"), Tn(() => (
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
      R(o, t, a), i && i.m(t, null), e[154](t), n = df(
        t,
        /*div_elementresize_handler*/
        e[155].bind(t)
      ), l = !0;
    },
    p(o, a) {
      i && i.p && (!l || a[0] & /*element, $activeGetters_d, $_x, $_y, $_z, $_r, $_custom, $_data, $_xNice, $_yNice, $_zNice, $_rNice, $_xReverse, $_yReverse, $_zReverse, $_rReverse, $_xPadding, $_yPadding, $_zPadding, $_rPadding, $_flatData, $_config, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
      2147483588 | a[1] & /*$width_d, $height_d, $aspectRatio_d, $_containerWidth, $_containerHeight, $_percentRange, $padding_d, $extents_d, $xDomain_d, $yDomain_d, $zDomain_d, $rDomain_d, $xRange_d, $yRange_d, $zRange_d, $rRange_d, $xGet_d, $yGet_d, $zGet_d, $rGet_d*/
      1048575 | a[4] & /*$$scope*/
      268435456) && Ke(
        i,
        r,
        o,
        /*$$scope*/
        o[152],
        l ? We(
          r,
          /*$$scope*/
          o[152],
          a,
          ic
        ) : Xe(
          /*$$scope*/
          o[152]
        ),
        Gi
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
      l || (w(i, o), l = !0);
    },
    o(o) {
      q(i, o), l = !1;
    },
    d(o) {
      o && N(t), i && i.d(o), e[154](null), n();
    }
  };
}
function oc(e) {
  let t, n, l = (
    /*ssr*/
    (e[3] === !0 || typeof window < "u") && xi(e)
  );
  return {
    c() {
      l && l.c(), t = _e();
    },
    m(r, i) {
      l && l.m(r, i), R(r, t, i), n = !0;
    },
    p(r, i) {
      /*ssr*/
      r[3] === !0 || typeof window < "u" ? l ? (l.p(r, i), i[0] & /*ssr*/
      8 && w(l, 1)) : (l = xi(r), l.c(), w(l, 1), l.m(t.parentNode, t)) : l && (ie(), q(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (w(l), n = !0);
    },
    o(r) {
      q(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && N(t);
    }
  };
}
function ac(e, t, n) {
  let l, r, i, o, a, f, s, u, c, d, m, b, h, y, C, k, v, z, L, D, B, O, E, A, S, T, ne, j, Q, H, U, he, te, ue, be, se, I, G, le, ee, de, Ee, ze, Ae, Te, x, Ie, Lt, Be, Ct, $, Pe, Je, rt, je, st, ut, Gn, xn, it, Vn, Wn, { $$slots: dr = {}, $$scope: Kn } = t;
  const gr = du(ec, 200);
  let { ssr: ln = !1 } = t, { pointerEvents: Xn = !0 } = t, { position: Yn = "relative" } = t, { percentRange: Et = !1 } = t, { width: rn = void 0 } = t, { height: on = void 0 } = t, { containerWidth: ct = rn || 100 } = t, { containerHeight: dt = on || 100 } = t, { element: Dt = void 0 } = t, { x: gt = void 0 } = t, { y: mt = void 0 } = t, { z: bt = void 0 } = t, { r: J = void 0 } = t, { data: _t = [] } = t, { xDomain: At = void 0 } = t, { yDomain: Tt = void 0 } = t, { zDomain: Pt = void 0 } = t, { rDomain: Qt = void 0 } = t, { xNice: Un = !1 } = t, { yNice: Jn = !1 } = t, { zNice: Zn = !1 } = t, { rNice: $n = !1 } = t, { xPadding: el = void 0 } = t, { yPadding: tl = void 0 } = t, { zPadding: nl = void 0 } = t, { rPadding: ll = void 0 } = t, { xScale: rl = Ln.x } = t, { yScale: an = Ln.y } = t, { zScale: il = Ln.z } = t, { rScale: ol = Ln.r } = t, { xRange: jt = void 0 } = t, { yRange: Ot = void 0 } = t, { zRange: It = void 0 } = t, { rRange: Ht = void 0 } = t, { xReverse: al = !1 } = t, { yReverse: fl = void 0 } = t, { zReverse: sl = !1 } = t, { rReverse: ul = !1 } = t, { padding: cl = {} } = t, { extents: dl = {} } = t, { flatData: gl = void 0 } = t, { custom: ml = {} } = t, { debug: mr = !1 } = t, br = !1;
  vt(() => {
    br = !0;
  });
  const ye = {}, ht = me(Et);
  F(e, ht, (M) => n(33, Te = M));
  const Bt = me(ct);
  F(e, Bt, (M) => n(32, Ae = M));
  const Ft = me(dt);
  F(e, Ft, (M) => n(31, ze = M));
  const bl = me(Lr(dl));
  F(e, bl, (M) => n(170, Ee = M));
  const _l = me(_t);
  F(e, _l, (M) => n(30, de = M));
  const fn = me(gl || _t);
  F(e, fn, (M) => n(29, ee = M));
  const hl = me(cl);
  F(e, hl, (M) => n(169, le = M));
  const Gt = me(pt(gt));
  F(e, Gt, (M) => n(28, G = M));
  const xt = me(pt(mt));
  F(e, xt, (M) => n(27, I = M));
  const Vt = me(pt(bt));
  F(e, Vt, (M) => n(26, se = M));
  const Wt = me(pt(J));
  F(e, Wt, (M) => n(25, be = M));
  const yl = me(At);
  F(e, yl, (M) => n(168, ue = M));
  const kl = me(Tt);
  F(e, kl, (M) => n(167, te = M));
  const pl = me(Pt);
  F(e, pl, (M) => n(166, he = M));
  const wl = me(Qt);
  F(e, wl, (M) => n(165, U = M));
  const sn = me(Un);
  F(e, sn, (M) => n(24, H = M));
  const un = me(Jn);
  F(e, un, (M) => n(23, Q = M));
  const cn = me(Zn);
  F(e, cn, (M) => n(22, j = M));
  const dn = me($n);
  F(e, dn, (M) => n(21, ne = M));
  const gn = me(al);
  F(e, gn, (M) => n(20, T = M));
  const mn = me(l);
  F(e, mn, (M) => n(19, S = M));
  const bn = me(sl);
  F(e, bn, (M) => n(18, A = M));
  const _n = me(ul);
  F(e, _n, (M) => n(17, E = M));
  const hn = me(el);
  F(e, hn, (M) => n(16, O = M));
  const yn = me(tl);
  F(e, yn, (M) => n(15, B = M));
  const kn = me(nl);
  F(e, kn, (M) => n(14, D = M));
  const pn = me(ll);
  F(e, pn, (M) => n(13, L = M));
  const vl = me(jt);
  F(e, vl, (M) => n(164, z = M));
  const Cl = me(Ot);
  F(e, Cl, (M) => n(163, v = M));
  const Sl = me(It);
  F(e, Sl, (M) => n(162, k = M));
  const Nl = me(Ht);
  F(e, Nl, (M) => n(161, C = M));
  const wn = me(rl);
  F(e, wn, (M) => n(160, y = M));
  const vn = me(an);
  F(e, vn, (M) => n(159, h = M));
  const Cn = me(il);
  F(e, Cn, (M) => n(158, b = M));
  const Sn = me(ol);
  F(e, Sn, (M) => n(157, m = M));
  const Ml = me(ye);
  F(e, Ml, (M) => n(11, c = M));
  const ql = me(ml);
  F(e, ql, (M) => n(12, d = M));
  const Rl = Se([Gt, xt, Vt, Wt], ([M, ot, Ze, Le]) => {
    const St = {};
    return M && (St.x = M), ot && (St.y = ot), Ze && (St.z = Ze), Le && (St.r = Le), St;
  });
  F(e, Rl, (M) => n(10, s = M));
  const zl = Se([hl, Bt, Ft], ([M]) => Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, M));
  F(e, zl, (M) => n(37, Be = M));
  const Ll = Se([Bt, Ft, zl], ([M, ot, Ze]) => {
    const Le = {};
    return Le.top = Ze.top, Le.right = M - Ze.right, Le.bottom = ot - Ze.bottom, Le.left = Ze.left, Le.width = Le.right - Le.left, Le.height = Le.bottom - Le.top, Le.width <= 0 && br === !0 && console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?"), Le.height <= 0 && br === !0 && console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?"), Le;
  });
  F(e, Ll, (M) => n(151, u = M));
  const yt = Se([Ll], ([M]) => M.width);
  F(e, yt, (M) => n(34, x = M));
  const kt = Se([Ll], ([M]) => M.height);
  F(e, kt, (M) => n(35, Ie = M));
  const Fe = Se([fn, Rl, bl, wn, vn, Sn, Cn], ([M, ot, Ze, Le, St, nf, lf]) => {
    const rf = {
      x: Le,
      y: St,
      r: nf,
      z: lf
    }, Nr = Lr(ot, Ze), of = Object.fromEntries(Object.keys(Nr).map((Mr) => [Mr, rf[Mr]]));
    return Object.keys(Nr).length > 0 ? { ...bu(M, Nr, of), ...Ze } : {};
  });
  F(e, Fe, (M) => n(38, Ct = M));
  const El = Se([Fe, yl], Hl("x"));
  F(e, El, (M) => n(39, $ = M));
  const Dl = Se([Fe, kl], Hl("y"));
  F(e, Dl, (M) => n(40, Pe = M));
  const Al = Se([Fe, pl], Hl("z"));
  F(e, Al, (M) => n(41, Je = M));
  const Tl = Se([Fe, wl], Hl("r"));
  F(e, Tl, (M) => n(42, rt = M));
  const Nn = Se(
    [
      wn,
      Fe,
      El,
      hn,
      sn,
      gn,
      yt,
      kt,
      vl,
      ht
    ],
    Fl("x")
  );
  F(e, Nn, (M) => n(9, f = M));
  const _r = Se([Gt, Nn], Gl);
  F(e, _r, (M) => n(47, xn = M));
  const Mn = Se(
    [
      vn,
      Fe,
      Dl,
      yn,
      un,
      mn,
      yt,
      kt,
      Cl,
      ht
    ],
    Fl("y")
  );
  F(e, Mn, (M) => n(8, a = M));
  const hr = Se([xt, Mn], Gl);
  F(e, hr, (M) => n(48, it = M));
  const qn = Se(
    [
      Cn,
      Fe,
      Al,
      kn,
      cn,
      bn,
      yt,
      kt,
      Sl,
      ht
    ],
    Fl("z")
  );
  F(e, qn, (M) => n(7, o = M));
  const yr = Se([Vt, qn], Gl);
  F(e, yr, (M) => n(49, Vn = M));
  const Rn = Se(
    [
      Sn,
      Fe,
      Tl,
      pn,
      dn,
      _n,
      yt,
      kt,
      Nl,
      ht
    ],
    Fl("r")
  );
  F(e, Rn, (M) => n(6, i = M));
  const kr = Se([Wt, Rn], Gl);
  F(e, kr, (M) => n(50, Wn = M));
  const pr = Se([Nn], xl);
  F(e, pr, (M) => n(43, je = M));
  const wr = Se([Mn], xl);
  F(e, wr, (M) => n(44, st = M));
  const vr = Se([qn], xl);
  F(e, vr, (M) => n(45, ut = M));
  const Cr = Se([Rn], xl);
  F(e, Cr, (M) => n(46, Gn = M));
  const Sr = Se([yt, kt], ([M, ot]) => M / ot);
  F(e, Sr, (M) => n(36, Lt = M));
  function ef(M) {
    Ce[M ? "unshift" : "push"](() => {
      Dt = M, n(2, Dt);
    });
  }
  function tf() {
    ct = this.clientWidth, dt = this.clientHeight, n(0, ct), n(1, dt);
  }
  return e.$$set = (M) => {
    "ssr" in M && n(3, ln = M.ssr), "pointerEvents" in M && n(4, Xn = M.pointerEvents), "position" in M && n(5, Yn = M.position), "percentRange" in M && n(111, Et = M.percentRange), "width" in M && n(112, rn = M.width), "height" in M && n(113, on = M.height), "containerWidth" in M && n(0, ct = M.containerWidth), "containerHeight" in M && n(1, dt = M.containerHeight), "element" in M && n(2, Dt = M.element), "x" in M && n(114, gt = M.x), "y" in M && n(115, mt = M.y), "z" in M && n(116, bt = M.z), "r" in M && n(117, J = M.r), "data" in M && n(118, _t = M.data), "xDomain" in M && n(119, At = M.xDomain), "yDomain" in M && n(120, Tt = M.yDomain), "zDomain" in M && n(121, Pt = M.zDomain), "rDomain" in M && n(122, Qt = M.rDomain), "xNice" in M && n(123, Un = M.xNice), "yNice" in M && n(124, Jn = M.yNice), "zNice" in M && n(125, Zn = M.zNice), "rNice" in M && n(126, $n = M.rNice), "xPadding" in M && n(127, el = M.xPadding), "yPadding" in M && n(128, tl = M.yPadding), "zPadding" in M && n(129, nl = M.zPadding), "rPadding" in M && n(130, ll = M.rPadding), "xScale" in M && n(131, rl = M.xScale), "yScale" in M && n(132, an = M.yScale), "zScale" in M && n(133, il = M.zScale), "rScale" in M && n(134, ol = M.rScale), "xRange" in M && n(135, jt = M.xRange), "yRange" in M && n(136, Ot = M.yRange), "zRange" in M && n(137, It = M.zRange), "rRange" in M && n(138, Ht = M.rRange), "xReverse" in M && n(139, al = M.xReverse), "yReverse" in M && n(140, fl = M.yReverse), "zReverse" in M && n(141, sl = M.zReverse), "rReverse" in M && n(142, ul = M.rReverse), "padding" in M && n(143, cl = M.padding), "extents" in M && n(144, dl = M.extents), "flatData" in M && n(145, gl = M.flatData), "custom" in M && n(146, ml = M.custom), "debug" in M && n(147, mr = M.debug), "$$scope" in M && n(152, Kn = M.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[4] & /*yReverse, yScale*/
    65792 && n(150, l = typeof fl > "u" ? typeof an.bandwidth != "function" : fl), e.$$.dirty[3] & /*x*/
    2097152 && gt && n(148, ye.x = gt, ye), e.$$.dirty[3] & /*y*/
    4194304 && mt && n(148, ye.y = mt, ye), e.$$.dirty[3] & /*z*/
    8388608 && bt && n(148, ye.z = bt, ye), e.$$.dirty[3] & /*r*/
    16777216 && J && n(148, ye.r = J, ye), e.$$.dirty[3] & /*xDomain*/
    67108864 && At && n(148, ye.xDomain = At, ye), e.$$.dirty[3] & /*yDomain*/
    134217728 && Tt && n(148, ye.yDomain = Tt, ye), e.$$.dirty[3] & /*zDomain*/
    268435456 && Pt && n(148, ye.zDomain = Pt, ye), e.$$.dirty[3] & /*rDomain*/
    536870912 && Qt && n(148, ye.rDomain = Qt, ye), e.$$.dirty[4] & /*xRange*/
    2048 && jt && n(148, ye.xRange = jt, ye), e.$$.dirty[4] & /*yRange*/
    4096 && Ot && n(148, ye.yRange = Ot, ye), e.$$.dirty[4] & /*zRange*/
    8192 && It && n(148, ye.zRange = It, ye), e.$$.dirty[4] & /*rRange*/
    16384 && Ht && n(148, ye.rRange = Ht, ye), e.$$.dirty[3] & /*percentRange*/
    262144 && ge(ht, Te = Et, Te), e.$$.dirty[0] & /*containerWidth*/
    1 && ge(Bt, Ae = ct, Ae), e.$$.dirty[0] & /*containerHeight*/
    2 && ge(Ft, ze = dt, ze), e.$$.dirty[4] & /*extents*/
    1048576 && ge(bl, Ee = Lr(dl), Ee), e.$$.dirty[3] & /*data*/
    33554432 && ge(_l, de = _t, de), e.$$.dirty[3] & /*data*/
    33554432 | e.$$.dirty[4] & /*flatData*/
    2097152 && ge(fn, ee = gl || _t, ee), e.$$.dirty[4] & /*padding*/
    524288 && ge(hl, le = cl, le), e.$$.dirty[3] & /*x*/
    2097152 && ge(Gt, G = pt(gt), G), e.$$.dirty[3] & /*y*/
    4194304 && ge(xt, I = pt(mt), I), e.$$.dirty[3] & /*z*/
    8388608 && ge(Vt, se = pt(bt), se), e.$$.dirty[3] & /*r*/
    16777216 && ge(Wt, be = pt(J), be), e.$$.dirty[3] & /*xDomain*/
    67108864 && ge(yl, ue = At, ue), e.$$.dirty[3] & /*yDomain*/
    134217728 && ge(kl, te = Tt, te), e.$$.dirty[3] & /*zDomain*/
    268435456 && ge(pl, he = Pt, he), e.$$.dirty[3] & /*rDomain*/
    536870912 && ge(wl, U = Qt, U), e.$$.dirty[3] & /*xNice*/
    1073741824 && ge(sn, H = Un, H), e.$$.dirty[4] & /*yNice*/
    1 && ge(un, Q = Jn, Q), e.$$.dirty[4] & /*zNice*/
    2 && ge(cn, j = Zn, j), e.$$.dirty[4] & /*rNice*/
    4 && ge(dn, ne = $n, ne), e.$$.dirty[4] & /*xReverse*/
    32768 && ge(gn, T = al, T), e.$$.dirty[4] & /*yReverseValue*/
    67108864 && ge(mn, S = l, S), e.$$.dirty[4] & /*zReverse*/
    131072 && ge(bn, A = sl, A), e.$$.dirty[4] & /*rReverse*/
    262144 && ge(_n, E = ul, E), e.$$.dirty[4] & /*xPadding*/
    8 && ge(hn, O = el, O), e.$$.dirty[4] & /*yPadding*/
    16 && ge(yn, B = tl, B), e.$$.dirty[4] & /*zPadding*/
    32 && ge(kn, D = nl, D), e.$$.dirty[4] & /*rPadding*/
    64 && ge(pn, L = ll, L), e.$$.dirty[4] & /*xRange*/
    2048 && ge(vl, z = jt, z), e.$$.dirty[4] & /*yRange*/
    4096 && ge(Cl, v = Ot, v), e.$$.dirty[4] & /*zRange*/
    8192 && ge(Sl, k = It, k), e.$$.dirty[4] & /*rRange*/
    16384 && ge(Nl, C = Ht, C), e.$$.dirty[4] & /*xScale*/
    128 && ge(wn, y = rl, y), e.$$.dirty[4] & /*yScale*/
    256 && ge(vn, h = an, h), e.$$.dirty[4] & /*zScale*/
    512 && ge(Cn, b = il, b), e.$$.dirty[4] & /*rScale*/
    1024 && ge(Sn, m = ol, m), e.$$.dirty[4] & /*custom*/
    4194304 && ge(ql, d = ml, d), e.$$.dirty[4] & /*config*/
    16777216 && ge(Ml, c = ye, c), e.$$.dirty[4] & /*context*/
    33554432 && mf("LayerCake", r), e.$$.dirty[0] & /*ssr, $activeGetters_d, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
    1992 | e.$$.dirty[4] & /*$box_d, debug, config*/
    159383552 && u && mr === !0 && (ln === !0 || typeof window < "u") && gr({
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
    activeGetters: Rl,
    width: yt,
    height: kt,
    percentRange: ht,
    aspectRatio: Sr,
    containerWidth: Bt,
    containerHeight: Ft,
    x: Gt,
    y: xt,
    z: Vt,
    r: Wt,
    custom: ql,
    data: _l,
    xNice: sn,
    yNice: un,
    zNice: cn,
    rNice: dn,
    xReverse: gn,
    yReverse: mn,
    zReverse: bn,
    rReverse: _n,
    xPadding: hn,
    yPadding: yn,
    zPadding: kn,
    rPadding: pn,
    padding: zl,
    flatData: fn,
    extents: Fe,
    xDomain: El,
    yDomain: Dl,
    zDomain: Al,
    rDomain: Tl,
    xRange: pr,
    yRange: wr,
    zRange: vr,
    rRange: Cr,
    config: Ml,
    xScale: Nn,
    xGet: _r,
    yScale: Mn,
    yGet: hr,
    zScale: qn,
    zGet: yr,
    rScale: Rn,
    rGet: kr
  }), [
    ct,
    dt,
    Dt,
    ln,
    Xn,
    Yn,
    i,
    o,
    a,
    f,
    s,
    c,
    d,
    L,
    D,
    B,
    O,
    E,
    A,
    S,
    T,
    ne,
    j,
    Q,
    H,
    be,
    se,
    I,
    G,
    ee,
    de,
    ze,
    Ae,
    Te,
    x,
    Ie,
    Lt,
    Be,
    Ct,
    $,
    Pe,
    Je,
    rt,
    je,
    st,
    ut,
    Gn,
    xn,
    it,
    Vn,
    Wn,
    ht,
    Bt,
    Ft,
    bl,
    _l,
    fn,
    hl,
    Gt,
    xt,
    Vt,
    Wt,
    yl,
    kl,
    pl,
    wl,
    sn,
    un,
    cn,
    dn,
    gn,
    mn,
    bn,
    _n,
    hn,
    yn,
    kn,
    pn,
    vl,
    Cl,
    Sl,
    Nl,
    wn,
    vn,
    Cn,
    Sn,
    Ml,
    ql,
    Rl,
    zl,
    Ll,
    yt,
    kt,
    Fe,
    El,
    Dl,
    Al,
    Tl,
    Nn,
    _r,
    Mn,
    hr,
    qn,
    yr,
    Rn,
    kr,
    pr,
    wr,
    vr,
    Cr,
    Sr,
    Et,
    rn,
    on,
    gt,
    mt,
    bt,
    J,
    _t,
    At,
    Tt,
    Pt,
    Qt,
    Un,
    Jn,
    Zn,
    $n,
    el,
    tl,
    nl,
    ll,
    rl,
    an,
    il,
    ol,
    jt,
    Ot,
    It,
    Ht,
    al,
    fl,
    sl,
    ul,
    cl,
    dl,
    gl,
    ml,
    mr,
    ye,
    r,
    l,
    u,
    Kn,
    dr,
    ef,
    tf
  ];
}
class sr extends we {
  constructor(t) {
    super(), pe(
      this,
      t,
      ac,
      oc,
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
const fc = (e) => ({ element: e & /*element*/
1 }), Vi = (e) => ({ element: (
  /*element*/
  e[0]
) });
function sc(e) {
  let t, n;
  const l = (
    /*#slots*/
    e[11].default
  ), r = Ve(
    l,
    e,
    /*$$scope*/
    e[10],
    Vi
  );
  return {
    c() {
      t = p("div"), r && r.c(), g(t, "class", "layercake-layout-html svelte-1bu60uu"), g(
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
      1025) && Ke(
        r,
        l,
        i,
        /*$$scope*/
        i[10],
        n ? We(
          l,
          /*$$scope*/
          i[10],
          o,
          fc
        ) : Xe(
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
      n || (w(r, i), n = !0);
    },
    o(i) {
      q(r, i), n = !1;
    },
    d(i) {
      i && N(t), r && r.d(i), e[12](null);
    }
  };
}
function uc(e, t, n) {
  let l, r, { $$slots: i = {}, $$scope: o } = t;
  const { padding: a } = Hn("LayerCake");
  F(e, a, (y) => n(7, r = y));
  let { element: f = void 0 } = t, { zIndex: s = void 0 } = t, { pointerEvents: u = void 0 } = t, { role: c = void 0 } = t, { label: d = void 0 } = t, { labelledBy: m = void 0 } = t, { describedBy: b = void 0 } = t;
  function h(y) {
    Ce[y ? "unshift" : "push"](() => {
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
    h
  ];
}
class Oa extends we {
  constructor(t) {
    super(), pe(this, t, uc, sc, ke, {
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
const cc = (e) => ({ element: e & /*element*/
1 }), Wi = (e) => ({ element: (
  /*element*/
  e[0]
) }), dc = (e) => ({ element: e & /*element*/
1 }), Ki = (e) => ({ element: (
  /*element*/
  e[0]
) }), gc = (e) => ({ element: e & /*element*/
1 }), Xi = (e) => ({ element: (
  /*element*/
  e[0]
) });
function Yi(e) {
  let t, n;
  return {
    c() {
      t = qe("title"), n = V(
        /*title*/
        e[8]
      );
    },
    m(l, r) {
      R(l, t, r), _(t, n);
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
      l && N(t);
    }
  };
}
function mc(e) {
  let t, n = (
    /*title*/
    e[8] && Yi(e)
  );
  return {
    c() {
      n && n.c(), t = _e();
    },
    m(l, r) {
      n && n.m(l, r), R(l, t, r);
    },
    p(l, r) {
      /*title*/
      l[8] ? n ? n.p(l, r) : (n = Yi(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(l) {
      n && n.d(l), l && N(t);
    }
  };
}
function bc(e) {
  let t, n, l, r, i;
  const o = (
    /*#slots*/
    e[16].title
  ), a = Ve(
    o,
    e,
    /*$$scope*/
    e[15],
    Xi
  ), f = a || mc(e), s = (
    /*#slots*/
    e[16].defs
  ), u = Ve(
    s,
    e,
    /*$$scope*/
    e[15],
    Ki
  ), c = (
    /*#slots*/
    e[16].default
  ), d = Ve(
    c,
    e,
    /*$$scope*/
    e[15],
    Wi
  );
  return {
    c() {
      t = qe("svg"), f && f.c(), n = qe("defs"), u && u.c(), l = qe("g"), d && d.c(), g(l, "class", "layercake-layout-svg_g"), g(l, "transform", r = "translate(" + /*$padding*/
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
    m(m, b) {
      R(m, t, b), f && f.m(t, null), _(t, n), u && u.m(n, null), _(t, l), d && d.m(l, null), e[17](l), e[18](t), i = !0;
    },
    p(m, [b]) {
      a ? a.p && (!i || b & /*$$scope, element*/
      32769) && Ke(
        a,
        o,
        m,
        /*$$scope*/
        m[15],
        i ? We(
          o,
          /*$$scope*/
          m[15],
          b,
          gc
        ) : Xe(
          /*$$scope*/
          m[15]
        ),
        Xi
      ) : f && f.p && (!i || b & /*title*/
      256) && f.p(m, i ? b : -1), u && u.p && (!i || b & /*$$scope, element*/
      32769) && Ke(
        u,
        s,
        m,
        /*$$scope*/
        m[15],
        i ? We(
          s,
          /*$$scope*/
          m[15],
          b,
          dc
        ) : Xe(
          /*$$scope*/
          m[15]
        ),
        Ki
      ), d && d.p && (!i || b & /*$$scope, element*/
      32769) && Ke(
        d,
        c,
        m,
        /*$$scope*/
        m[15],
        i ? We(
          c,
          /*$$scope*/
          m[15],
          b,
          cc
        ) : Xe(
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
      4 && re(
        t,
        "z-index",
        /*zIndex*/
        m[2]
      ), b & /*pointerEvents*/
      8 && re(
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
      q(f, m), q(u, m), q(d, m), i = !1;
    },
    d(m) {
      m && N(t), f && f.d(m), u && u.d(m), d && d.d(m), e[17](null), e[18](null);
    }
  };
}
function _c(e, t, n) {
  let l, r, i, { $$slots: o = {}, $$scope: a } = t, { element: f = void 0 } = t, { innerElement: s = void 0 } = t, { zIndex: u = void 0 } = t, { pointerEvents: c = void 0 } = t, { viewBox: d = void 0 } = t, { label: m = void 0 } = t, { labelledBy: b = void 0 } = t, { describedBy: h = void 0 } = t, { title: y = void 0 } = t;
  const { containerWidth: C, containerHeight: k, padding: v } = Hn("LayerCake");
  F(e, C, (D) => n(9, l = D)), F(e, k, (D) => n(10, r = D)), F(e, v, (D) => n(11, i = D));
  function z(D) {
    Ce[D ? "unshift" : "push"](() => {
      s = D, n(1, s);
    });
  }
  function L(D) {
    Ce[D ? "unshift" : "push"](() => {
      f = D, n(0, f);
    });
  }
  return e.$$set = (D) => {
    "element" in D && n(0, f = D.element), "innerElement" in D && n(1, s = D.innerElement), "zIndex" in D && n(2, u = D.zIndex), "pointerEvents" in D && n(3, c = D.pointerEvents), "viewBox" in D && n(4, d = D.viewBox), "label" in D && n(5, m = D.label), "labelledBy" in D && n(6, b = D.labelledBy), "describedBy" in D && n(7, h = D.describedBy), "title" in D && n(8, y = D.title), "$$scope" in D && n(15, a = D.$$scope);
  }, [
    f,
    s,
    u,
    c,
    d,
    m,
    b,
    h,
    y,
    l,
    r,
    i,
    C,
    k,
    v,
    a,
    o,
    z,
    L
  ];
}
class Ia extends we {
  constructor(t) {
    super(), pe(this, t, _c, bc, ke, {
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
function Ui(e, t, n) {
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
      t = qe("text"), l = V(n), g(t, "x", r = /*xPos*/
      e[32] + /*colWidth*/
      e[33] / 2), g(t, "y", i = /*$height*/
      e[12] - /*colHeight*/
      e[30] - 5), g(t, "text-anchor", "middle"), g(t, "class", "svelte-1c28ck9");
    },
    m(o, a) {
      R(o, t, a), _(t, l);
    },
    p(o, a) {
      a[0] & /*$y, $data*/
      1280 && n !== (n = /*yValue*/
      o[34] + "") && ae(l, n), a[0] & /*$xGet, $data, $xScale, columnWidth*/
      904 && r !== (r = /*xPos*/
      o[32] + /*colWidth*/
      o[33] / 2) && g(t, "x", r), a[0] & /*$height, columnHeight, $data*/
      4416 && i !== (i = /*$height*/
      o[12] - /*colHeight*/
      o[30] - 5) && g(t, "y", i);
    },
    d(o) {
      o && N(t);
    }
  };
}
function Zi(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b, h;
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
    e[34] && Ji(e)
  );
  return {
    c() {
      t = qe("rect"), u = qe("rect"), C && C.c(), m = _e(), g(t, "class", "group-rect svelte-1c28ck9"), g(
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
    m(k, v) {
      R(k, t, v), R(k, u, v), C && C.m(k, v), R(k, m, v), b || (h = [
        W(u, "mouseenter", y),
        W(
          u,
          "mouseleave",
          /*mouseleave_handler*/
          e[24]
        )
      ], b = !0);
    },
    p(k, v) {
      e = k, v[0] & /*$x, $data*/
      2304 && n !== (n = /*$x*/
      e[11](
        /*d*/
        e[29]
      )) && g(t, "data-range", n), v[0] & /*$y, $data*/
      1280 && l !== (l = /*yValue*/
      e[34]) && g(t, "data-count", l), v[0] & /*$xGet, $data*/
      264 && r !== (r = /*xPos*/
      e[32]) && g(t, "x", r), v[0] & /*$yGet, $data*/
      260 && i !== (i = /*$yGet*/
      e[2](
        /*d*/
        e[29]
      )) && g(t, "y", i), v[0] & /*$xScale, columnWidth, $data*/
      896 && o !== (o = /*colWidth*/
      e[33]) && g(t, "width", o), v[0] & /*columnHeight, $data*/
      320 && a !== (a = /*colHeight*/
      e[30]) && g(t, "height", a), v[0] & /*fill*/
      1 && g(
        t,
        "fill",
        /*fill*/
        e[0]
      ), v[0] & /*hoveredIndex*/
      16 && f !== (f = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? $i : "none") && g(t, "stroke", f), v[0] & /*hoveredIndex*/
      16 && s !== (s = /*hoveredIndex*/
      e[4] == /*i*/
      e[36] ? eo : 0) && g(t, "stroke-width", s), v[0] & /*loaded*/
      32 && fe(
        t,
        "animated",
        /*loaded*/
        e[5]
      ), v[0] & /*$xGet, $data*/
      264 && c !== (c = /*xPos*/
      e[32]) && g(u, "x", c), v[0] & /*$xScale, columnWidth, $data*/
      896 && d !== (d = /*colWidth*/
      e[33]) && g(u, "width", d), v[0] & /*$height*/
      4096 && g(
        u,
        "height",
        /*$height*/
        e[12]
      ), /*showLabels*/
      e[1] && /*yValue*/
      e[34] ? C ? C.p(e, v) : (C = Ji(e), C.c(), C.m(m.parentNode, m)) : C && (C.d(1), C = null);
    },
    d(k) {
      k && N(t), k && N(u), C && C.d(k), k && N(m), b = !1, ve(h);
    }
  };
}
function hc(e) {
  let t, n = (
    /*$data*/
    e[8]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Zi(Ui(e, n, r));
  return {
    c() {
      t = qe("g");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      g(t, "class", "column-group");
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
          const a = Ui(r, n, o);
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
      r && N(t), Oe(l, r);
    }
  };
}
const $i = "#333", eo = 1;
function yc(e, t, n) {
  let l, r, i, o, a, f, s, u, c, d;
  const m = pa(), { data: b, xGet: h, yGet: y, x: C, yRange: k, xScale: v, y: z, height: L, zGet: D, zScale: B, z: O, custom: E } = Hn("LayerCake");
  F(e, b, (H) => n(8, f = H)), F(e, h, (H) => n(3, a = H)), F(e, y, (H) => n(2, i = H)), F(e, C, (H) => n(11, c = H)), F(e, k, (H) => n(22, o = H)), F(e, v, (H) => n(9, s = H)), F(e, z, (H) => n(10, u = H)), F(e, L, (H) => n(12, d = H));
  let { fill: A = "#00e047" } = t, { showLabels: S = !1 } = t, T = null;
  vt(() => {
    setTimeout(() => n(5, ne = !0), 100);
  });
  let ne = !1;
  const j = (H, U) => {
    n(4, T = H), m("hover", U);
  }, Q = () => {
    n(4, T = null), m("hover", null);
  };
  return e.$$set = (H) => {
    "fill" in H && n(0, A = H.fill), "showLabels" in H && n(1, S = H.showLabels);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*$xGet*/
    8 && n(7, l = (H) => {
      const U = a(H);
      return Math.abs(U[1] - U[0]);
    }), e.$$.dirty[0] & /*$yRange, $yGet*/
    4194308 && n(6, r = (H) => o[0] - i(H));
  }, [
    A,
    S,
    i,
    a,
    T,
    ne,
    r,
    l,
    f,
    s,
    u,
    c,
    d,
    m,
    b,
    h,
    y,
    C,
    k,
    v,
    z,
    L,
    o,
    j,
    Q
  ];
}
class Ha extends we {
  constructor(t) {
    super(), pe(this, t, yc, hc, ke, { fill: 0, showLabels: 1 }, null, [-1, -1]);
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
      t = qe("line"), g(t, "y1", n = /*$height*/
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
      R(r, t, i);
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
      r && N(t);
    }
  };
}
function lo(e) {
  let t, n, l;
  return {
    c() {
      t = qe("line"), g(t, "class", "tick-mark svelte-rkqqab"), g(t, "y1", 0), g(t, "y2", 6), g(t, "x1", n = /*xTick*/
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
      R(r, t, i);
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
      r && N(t);
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
      t = qe("g"), c && c.c(), n = _e(), d && d.c(), l = qe("text"), i = V(r), g(l, "x", o = /*xTick*/
      e[5] || /*isBandwidth*/
      e[11] ? (
        /*$xScale*/
        e[12].bandwidth() / 2
      ) : 0), g(l, "y", a = /*yTick*/
      e[6] - /*angle*/
      (e[10] ? 4 : 0)), g(l, "dx", ""), g(l, "dy", ""), g(l, "transform", f = /*angle*/
      e[10] ? "rotate(-45)" : ""), re(
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
      R(m, t, b), c && c.m(t, null), _(t, n), d && d.m(t, null), _(t, l), _(l, i);
    },
    p(m, b) {
      /*gridlines*/
      m[0] !== !1 ? c ? c.p(m, b) : (c = no(m), c.c(), c.m(t, n)) : c && (c.d(1), c = null), /*tickMarks*/
      m[1] === !0 ? d ? d.p(m, b) : (d = lo(m), d.c(), d.m(t, l)) : d && (d.d(1), d = null), b & /*formatTick, tickVals*/
      8208 && r !== (r = /*formatTick*/
      m[4](
        /*tick*/
        m[28]
      ) + "") && ae(i, r), b & /*xTick, isBandwidth, $xScale*/
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
      512 && re(
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
      m && N(t), c && c.d(), d && d.d();
    }
  };
}
function io(e) {
  let t, n, l;
  return {
    c() {
      t = qe("line"), g(t, "class", "baseline svelte-rkqqab"), g(t, "y1", n = /*$height*/
      e[15] + 0.5), g(t, "y2", l = /*$height*/
      e[15] + 0.5), g(t, "x1", "0"), g(
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
      r && N(t);
    }
  };
}
function oo(e) {
  let t, n, l, r;
  return {
    c() {
      t = qe("text"), g(t, "x", n = /*labelLeft*/
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
      e[8] ? "end" : "middle"), re(
        t,
        "fill",
        /*color*/
        e[9]
      ), g(t, "class", "axis-label svelte-rkqqab");
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
function kc(e) {
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
      t = qe("g");
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
      R(f, t, s);
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
      f && N(t), Oe(i, f), o && o.d(), a && a.d();
    }
  };
}
function pc(e, t, n) {
  let l, r, i, o, a, f, s, u;
  const { width: c, height: d, xRange: m, padding: b, xScale: h, xDomain: y, yRange: C } = Hn("LayerCake");
  F(e, c, (Q) => n(16, s = Q)), F(e, d, (Q) => n(15, f = Q)), F(e, m, (Q) => n(17, u = Q)), F(e, h, (Q) => n(12, o = Q)), F(e, y, (Q) => n(26, i = Q)), F(e, C, (Q) => n(14, a = Q));
  let { gridlines: k = !0 } = t, { tickMarks: v = !1 } = t, { baseline: z = !1 } = t, { snapTicks: L = !1 } = t, { formatTick: D = (Q) => Q } = t, { ticks: B = void 0 } = t, { xTick: O = 0 } = t, { yTick: E = 16 } = t, { label: A = "" } = t, { labelLeft: S = !1 } = t, { color: T = "#333" } = t, { angle: ne = !1 } = t;
  function j(Q) {
    if (ne)
      return "end";
    if (L === !0) {
      if (Q == i[0])
        return "start";
      if (Q == i[1])
        return "end";
    }
    return "middle";
  }
  return e.$$set = (Q) => {
    "gridlines" in Q && n(0, k = Q.gridlines), "tickMarks" in Q && n(1, v = Q.tickMarks), "baseline" in Q && n(2, z = Q.baseline), "snapTicks" in Q && n(3, L = Q.snapTicks), "formatTick" in Q && n(4, D = Q.formatTick), "ticks" in Q && n(25, B = Q.ticks), "xTick" in Q && n(5, O = Q.xTick), "yTick" in Q && n(6, E = Q.yTick), "label" in Q && n(7, A = Q.label), "labelLeft" in Q && n(8, S = Q.labelLeft), "color" in Q && n(9, T = Q.color), "angle" in Q && n(10, ne = Q.angle);
  }, e.$$.update = () => {
    e.$$.dirty & /*$xScale*/
    4096 && n(11, l = typeof o.bandwidth == "function"), e.$$.dirty & /*ticks, isBandwidth, $xScale*/
    33560576 && n(13, r = Array.isArray(B) ? B : l ? o.domain() : typeof B == "function" ? B(o.ticks()) : o.ticks(B));
  }, [
    k,
    v,
    z,
    L,
    D,
    O,
    E,
    A,
    S,
    T,
    ne,
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
    y,
    C,
    j,
    B
  ];
}
class Ba extends we {
  constructor(t) {
    super(), pe(this, t, pc, kc, ke, {
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
const wc = (e) => ({}), ao = (e) => ({}), vc = (e) => ({}), fo = (e) => ({});
function Cc(e) {
  let t, n, l, r, i, o, a, f, s = !!/*title*/
  e[3] && so(e), u = (
    /*loaded*/
    e[9] && /*histBins*/
    e[8].length > 0 && uo(e)
  );
  const c = [Rc, qc], d = [];
  function m(b, h) {
    return (
      /*$$slots*/
      b[12].caption ? 1 : 0
    );
  }
  return o = m(e), a = d[o] = c[o](e), {
    c() {
      t = p("div"), s && s.c(), n = P(), l = p("div"), u && u.c(), r = P(), i = p("div"), a.c(), re(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), re(l, "height", "16px"), g(i, "class", "text-xs text-gray-800 dark:text-gray-200 truncate"), fe(i, "mt-1", !/*horizontalLayout*/
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
    m(b, h) {
      R(b, t, h), s && s.m(t, null), _(t, n), _(t, l), u && u.m(l, null), _(t, r), _(t, i), d[o].m(i, null), f = !0;
    },
    p(b, h) {
      /*title*/
      b[3] ? s ? s.p(b, h) : (s = so(b), s.c(), s.m(t, n)) : s && (s.d(1), s = null), /*loaded*/
      b[9] && /*histBins*/
      b[8].length > 0 ? u ? (u.p(b, h), h & /*loaded, histBins*/
      768 && w(u, 1)) : (u = uo(b), u.c(), w(u, 1), u.m(l, null)) : u && (ie(), q(u, 1, 1, () => {
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
      o = m(b), o === y ? d[o].p(b, h) : (ie(), q(d[y], 1, 1, () => {
        d[y] = null;
      }), oe(), a = d[o], a ? a.p(b, h) : (a = d[o] = c[o](b), a.c()), w(a, 1), a.m(i, null)), (!f || h & /*horizontalLayout*/
      16) && fe(i, "mt-1", !/*horizontalLayout*/
      b[4]), (!f || h & /*horizontalLayout*/
      16) && fe(
        t,
        "flex",
        /*horizontalLayout*/
        b[4]
      ), (!f || h & /*horizontalLayout*/
      16) && fe(
        t,
        "my-0.5",
        /*horizontalLayout*/
        b[4]
      );
    },
    i(b) {
      f || (w(u), w(a), f = !0);
    },
    o(b) {
      q(u), q(a), f = !1;
    },
    d(b) {
      b && N(t), s && s.d(), u && u.d(), d[o].d();
    }
  };
}
function Sc(e) {
  let t, n, l, r, i, o, a, f = !!/*title*/
  e[3] && co(e), s = (
    /*loaded*/
    e[9] && /*histBins*/
    e[8].length > 0 && go(e)
  );
  const u = [Pc, Tc], c = [];
  function d(m, b) {
    return (
      /*$$slots*/
      m[12].caption ? 1 : 0
    );
  }
  return i = d(e), o = c[i] = u[i](e), {
    c() {
      f && f.c(), t = P(), n = p("div"), s && s.c(), l = P(), r = p("div"), o.c(), re(
        n,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), re(n, "height", "16px"), g(r, "class", "text-xs text-gray-800 dark:text-gray-200 truncate"), fe(r, "mt-1", !/*horizontalLayout*/
      e[4]);
    },
    m(m, b) {
      f && f.m(m, b), R(m, t, b), R(m, n, b), s && s.m(n, null), R(m, l, b), R(m, r, b), c[i].m(r, null), a = !0;
    },
    p(m, b) {
      /*title*/
      m[3] ? f ? f.p(m, b) : (f = co(m), f.c(), f.m(t.parentNode, t)) : f && (f.d(1), f = null), /*loaded*/
      m[9] && /*histBins*/
      m[8].length > 0 ? s ? (s.p(m, b), b & /*loaded, histBins*/
      768 && w(s, 1)) : (s = go(m), s.c(), w(s, 1), s.m(n, null)) : s && (ie(), q(s, 1, 1, () => {
        s = null;
      }), oe()), (!a || b & /*width*/
      1) && re(
        n,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let h = i;
      i = d(m), i === h ? c[i].p(m, b) : (ie(), q(c[h], 1, 1, () => {
        c[h] = null;
      }), oe(), o = c[i], o ? o.p(m, b) : (o = c[i] = u[i](m), o.c()), w(o, 1), o.m(r, null)), (!a || b & /*horizontalLayout*/
      16) && fe(r, "mt-1", !/*horizontalLayout*/
      m[4]);
    },
    i(m) {
      a || (w(s), w(o), a = !0);
    },
    o(m) {
      q(s), q(o), a = !1;
    },
    d(m) {
      f && f.d(m), m && N(t), m && N(n), s && s.d(), m && N(l), m && N(r), c[i].d();
    }
  };
}
function so(e) {
  let t, n;
  return {
    c() {
      t = p("div"), n = V(
        /*title*/
        e[3]
      ), g(t, "class", "font-bold text-xs truncate text-right"), re(t, "width", "96px");
    },
    m(l, r) {
      R(l, t, r), _(t, n);
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
      l && N(t);
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
      xScale: Xr().round(!0),
      xDomain: (
        /*histBins*/
        e[8]
      ),
      yScale: wt(),
      yDomain: [0, null],
      data: (
        /*data*/
        e[7]
      ),
      custom: { hoveredGet: (
        /*func_2*/
        e[20]
      ) },
      $$slots: { default: [Mc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
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
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function Nc(e) {
  let t, n, l, r;
  return t = new Ha({ props: { fill: (
    /*color*/
    e[6]
  ) } }), t.$on(
    "hover",
    /*hover_handler_1*/
    e[19]
  ), l = new Ba({
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
      K(t, i, o), R(i, n, o), K(l, i, o), r = !0;
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
      q(t.$$.fragment, i), q(l.$$.fragment, i), r = !1;
    },
    d(i) {
      X(t, i), i && N(n), X(l, i);
    }
  };
}
function Mc(e) {
  let t, n;
  return t = new Ia({
    props: {
      $$slots: { default: [Nc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
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
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function qc(e) {
  let t;
  const n = (
    /*#slots*/
    e[15].caption
  ), l = Ve(
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
      4194304) && Ke(
        l,
        n,
        r,
        /*$$scope*/
        r[22],
        t ? We(
          n,
          /*$$scope*/
          r[22],
          i,
          wc
        ) : Xe(
          /*$$scope*/
          r[22]
        ),
        ao
      );
    },
    i(r) {
      t || (w(l, r), t = !0);
    },
    o(r) {
      q(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function Rc(e) {
  let t;
  function n(i, o) {
    return (
      /*hoveredBin*/
      i[10] != null ? Ec : (
        /*mean*/
        i[1] != null ? Lc : zc
      )
    );
  }
  let l = n(e), r = l(e);
  return {
    c() {
      r.c(), t = _e();
    },
    m(i, o) {
      r.m(i, o), R(i, t, o);
    },
    p(i, o) {
      l === (l = n(i)) && r ? r.p(i, o) : (r.d(1), r = l(i), r && (r.c(), r.m(t.parentNode, t)));
    },
    i: Z,
    o: Z,
    d(i) {
      r.d(i), i && N(t);
    }
  };
}
function zc(e) {
  let t;
  return {
    c() {
      t = V(" ");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: Z,
    d(n) {
      n && N(t);
    }
  };
}
function Lc(e) {
  let t, n, l = Ne(".3")(
    /*mean*/
    e[1]
  ) + "", r, i = /*unit*/ e[2] ? " " + /*unit*/
  e[2] : "", o;
  return {
    c() {
      t = V("M = "), n = p("strong"), r = V(l), o = V(i);
    },
    m(a, f) {
      R(a, t, f), R(a, n, f), _(n, r), _(n, o);
    },
    p(a, f) {
      f & /*mean*/
      2 && l !== (l = Ne(".3")(
        /*mean*/
        a[1]
      ) + "") && ae(r, l), f & /*unit*/
      4 && i !== (i = /*unit*/
      a[2] ? " " + /*unit*/
      a[2] : "") && ae(o, i);
    },
    d(a) {
      a && N(t), a && N(n);
    }
  };
}
function Ec(e) {
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
      n = V(t);
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
      l && N(n);
    }
  };
}
function co(e) {
  let t, n;
  return {
    c() {
      t = p("div"), n = V(
        /*title*/
        e[3]
      ), g(t, "class", "font-bold text-xs truncate text-right");
    },
    m(l, r) {
      R(l, t, r), _(t, n);
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
      l && N(t);
    }
  };
}
function go(e) {
  let t, n;
  return t = new sr({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: Xr().round(!0),
      xDomain: (
        /*histBins*/
        e[8]
      ),
      yScale: wt(),
      yDomain: [0, null],
      data: (
        /*data*/
        e[7]
      ),
      custom: { hoveredGet: (
        /*func*/
        e[17]
      ) },
      $$slots: { default: [Ac] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
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
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function Dc(e) {
  let t, n, l, r;
  return t = new Ha({ props: { fill: (
    /*color*/
    e[6]
  ) } }), t.$on(
    "hover",
    /*hover_handler*/
    e[16]
  ), l = new Ba({
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
      K(t, i, o), R(i, n, o), K(l, i, o), r = !0;
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
      q(t.$$.fragment, i), q(l.$$.fragment, i), r = !1;
    },
    d(i) {
      X(t, i), i && N(n), X(l, i);
    }
  };
}
function Ac(e) {
  let t, n;
  return t = new Ia({
    props: {
      $$slots: { default: [Dc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
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
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function Tc(e) {
  let t;
  const n = (
    /*#slots*/
    e[15].caption
  ), l = Ve(
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
      4194304) && Ke(
        l,
        n,
        r,
        /*$$scope*/
        r[22],
        t ? We(
          n,
          /*$$scope*/
          r[22],
          i,
          vc
        ) : Xe(
          /*$$scope*/
          r[22]
        ),
        fo
      );
    },
    i(r) {
      t || (w(l, r), t = !0);
    },
    o(r) {
      q(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function Pc(e) {
  let t;
  function n(i, o) {
    return (
      /*hoveredBin*/
      i[10] != null ? Oc : (
        /*mean*/
        i[1] != null ? jc : Qc
      )
    );
  }
  let l = n(e), r = l(e);
  return {
    c() {
      r.c(), t = _e();
    },
    m(i, o) {
      r.m(i, o), R(i, t, o);
    },
    p(i, o) {
      l === (l = n(i)) && r ? r.p(i, o) : (r.d(1), r = l(i), r && (r.c(), r.m(t.parentNode, t)));
    },
    i: Z,
    o: Z,
    d(i) {
      r.d(i), i && N(t);
    }
  };
}
function Qc(e) {
  let t;
  return {
    c() {
      t = V(" ");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: Z,
    d(n) {
      n && N(t);
    }
  };
}
function jc(e) {
  let t, n, l = Ne(".3")(
    /*mean*/
    e[1]
  ) + "", r;
  return {
    c() {
      t = V("M = "), n = p("strong"), r = V(l);
    },
    m(i, o) {
      R(i, t, o), R(i, n, o), _(n, r);
    },
    p(i, o) {
      o & /*mean*/
      2 && l !== (l = Ne(".3")(
        /*mean*/
        i[1]
      ) + "") && ae(r, l);
    },
    d(i) {
      i && N(t), i && N(n);
    }
  };
}
function Oc(e) {
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
      n = V(t);
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
      l && N(n);
    }
  };
}
function Ic(e) {
  let t, n, l, r;
  const i = [Sc, Cc], o = [];
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
      o[t].m(f, s), R(f, l, s), r = !0;
    },
    p(f, [s]) {
      let u = t;
      t = a(f), t === u ? o[t].p(f, s) : (ie(), q(o[u], 1, 1, () => {
        o[u] = null;
      }), oe(), n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), w(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      r || (w(n), r = !0);
    },
    o(f) {
      q(n), r = !1;
    },
    d(f) {
      o[t].d(f), f && N(l);
    }
  };
}
function Hc(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = Ir(l);
  let { width: o = 100 } = t, { histValues: a } = t, { mean: f = null } = t, { unit: s = null } = t, { title: u = null } = t, { horizontalLayout: c = !1 } = t, { noParent: d = !1 } = t, { color: m = "#3b82f6" } = t, b = [], h = [], y = Ne(".3g"), C = Ne(","), k = !1;
  vt(() => setTimeout(() => n(9, k = !0), 0));
  let v;
  function z(S) {
    return `${S.label}${s ? " " + s : ""}: ${C(S.count)} instances`;
  }
  const L = (S) => n(10, v = S.detail != null ? S.detail.bin : null), D = (S) => S.bin == v, B = (S) => S.label == v, O = (S) => n(10, v = S.detail != null ? S.detail.label : null), E = (S) => S.label == v, A = (S) => S.label == v;
  return e.$$set = (S) => {
    "width" in S && n(0, o = S.width), "histValues" in S && n(13, a = S.histValues), "mean" in S && n(1, f = S.mean), "unit" in S && n(2, s = S.unit), "title" in S && n(3, u = S.title), "horizontalLayout" in S && n(4, c = S.horizontalLayout), "noParent" in S && n(5, d = S.noParent), "color" in S && n(6, m = S.color), "$$scope" in S && n(22, r = S.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*histValues, binFormat, data*/
    24704)
      if (a) {
        let S = Object.keys(a), T = S.reduce(
          (j, Q, H) => H > 0 ? Math.min(j, Math.abs(parseFloat(Q) - parseFloat(S[H - 1]))) : j,
          1e9
        );
        n(14, y = Ne(`.${qa(T)}f`));
        let ne = Object.keys(a).some((j) => j.search(/[^-0-9.]/) >= 0);
        console.log("string labels:", ne, Object.keys(a)), n(7, b = Object.entries(a).map((j) => ({
          bin: ne ? j[0] : parseFloat(j[0]),
          count: j[1],
          label: ne ? j[0] : y(j[0])
        }))), b.sort((j, Q) => ne ? j.label.localeCompare(Q.label) : parseFloat(j.bin) - parseFloat(Q.bin)), n(8, h = b.map((j) => j.bin));
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
    m,
    b,
    h,
    k,
    v,
    z,
    i,
    a,
    y,
    l,
    L,
    D,
    B,
    O,
    E,
    A,
    r
  ];
}
class Bc extends we {
  constructor(t) {
    super(), pe(this, t, Hc, Ic, ke, {
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
function mo(e, t, n) {
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
      t = p("span"), g(t, "class", "bar absolute content-box svelte-mwmtzu"), re(t, "top", "0"), re(
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
      R(i, t, o), n || (l = [
        W(t, "mouseenter", r),
        W(
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
      i && N(t), n = !1, ve(l);
    }
  };
}
function Fc(e) {
  let t, n = (
    /*$data*/
    e[2]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = bo(mo(e, n, r));
  return {
    c() {
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      t = _e();
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
          const a = mo(r, n, o);
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
      Oe(l, r), r && N(t);
    }
  };
}
function Gc(e, t, n) {
  let l, r, i, o, a, f;
  const s = pa(), { data: u, xGet: c, yGet: d, xRange: m, x: b, yRange: h, xScale: y, y: C, height: k, zGet: v, zScale: z, z: L, custom: D } = Hn("LayerCake");
  F(e, u, (S) => n(2, l = S)), F(e, c, (S) => n(3, r = S)), F(e, d, (S) => n(7, f = S)), F(e, m, (S) => n(4, i = S)), F(e, y, (S) => n(5, o = S)), F(e, L, (S) => n(6, a = S));
  let B = null;
  vt(() => {
    setTimeout(() => n(1, O = !0), 100);
  });
  let O = !1;
  return [
    B,
    O,
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
    L,
    (S, T) => {
      n(0, B = S), s("hover", T);
    },
    () => {
      n(0, B = null), s("hover", null);
    }
  ];
}
class Fa extends we {
  constructor(t) {
    super(), pe(this, t, Gc, Fc, ke, {});
  }
}
const xc = (e) => ({}), _o = (e) => ({}), Vc = (e) => ({}), ho = (e) => ({});
function Wc(e) {
  let t, n, l, r, i, o, a, f, s, u = !!/*title*/
  e[1] && yo(e);
  r = new sr({
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
      yScale: fr(),
      yDomain: ft(
        /*counts*/
        e[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        e[4]
      ) ? (
        /*colorScale*/
        e[4]
      ) : ft(0, 1.00001, 1 / /*data*/
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
      $$slots: { default: [Yc] },
      $$scope: { ctx: e }
    }
  });
  const c = [Zc, Jc, Uc], d = [];
  function m(b, h) {
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
      t = p("div"), u && u.c(), n = P(), l = p("div"), Y(r.$$.fragment), i = P(), o = p("div"), f && f.c(), re(
        l,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), re(l, "height", "6px"), g(l, "class", "rounded overflow-hidden mb-1"), g(o, "class", "text-xs text-gray-800 dark:text-gray-200"), g(t, "class", "gap-1 items-center"), fe(
        t,
        "flex",
        /*horizontalLayout*/
        e[2]
      );
    },
    m(b, h) {
      R(b, t, h), u && u.m(t, null), _(t, n), _(t, l), K(r, l, null), _(t, i), _(t, o), ~a && d[a].m(o, null), s = !0;
    },
    p(b, h) {
      /*title*/
      b[1] ? u ? u.p(b, h) : (u = yo(b), u.c(), u.m(t, n)) : u && (u.d(1), u = null);
      const y = {};
      h & /*width*/
      1 && (y.xRange = [
        0,
        /*width*/
        b[0] ?? 1
      ]), h & /*counts*/
      32 && (y.yDomain = ft(
        /*counts*/
        b[5].length
      )), h & /*colorScale, data*/
      80 && (y.yRange = Array.isArray(
        /*colorScale*/
        b[4]
      ) ? (
        /*colorScale*/
        b[4]
      ) : ft(0, 1.00001, 1 / /*data*/
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
      a = m(b), a === C ? ~a && d[a].p(b, h) : (f && (ie(), q(d[C], 1, 1, () => {
        d[C] = null;
      }), oe()), ~a ? (f = d[a], f ? f.p(b, h) : (f = d[a] = c[a](b), f.c()), w(f, 1), f.m(o, null)) : f = null), (!s || h & /*horizontalLayout*/
      4) && fe(
        t,
        "flex",
        /*horizontalLayout*/
        b[2]
      );
    },
    i(b) {
      s || (w(r.$$.fragment, b), w(f), s = !0);
    },
    o(b) {
      q(r.$$.fragment, b), q(f), s = !1;
    },
    d(b) {
      b && N(t), u && u.d(), X(r), ~a && d[a].d();
    }
  };
}
function Kc(e) {
  let t, n, l, r, i, o, a, f, s = !!/*title*/
  e[1] && ko(e);
  l = new sr({
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
      yScale: fr(),
      yDomain: ft(
        /*counts*/
        e[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        e[4]
      ) ? (
        /*colorScale*/
        e[4]
      ) : ft(0, 1.00001, 1 / /*data*/
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
      $$slots: { default: [e0] },
      $$scope: { ctx: e }
    }
  });
  const u = [l0, n0, t0], c = [];
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
      s && s.c(), t = P(), n = p("div"), Y(l.$$.fragment), r = P(), i = p("div"), a && a.c(), re(
        n,
        "width",
        /*width*/
        e[0] == null ? "100%" : `${/*width*/
        e[0]}px`
      ), re(n, "height", "6px"), g(n, "class", "rounded overflow-hidden mb-1"), g(i, "class", "text-xs text-gray-800 dark:text-gray-200");
    },
    m(m, b) {
      s && s.m(m, b), R(m, t, b), R(m, n, b), K(l, n, null), R(m, r, b), R(m, i, b), ~o && c[o].m(i, null), f = !0;
    },
    p(m, b) {
      /*title*/
      m[1] ? s ? s.p(m, b) : (s = ko(m), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null);
      const h = {};
      b & /*width*/
      1 && (h.xRange = [
        0,
        /*width*/
        m[0] ?? 1
      ]), b & /*counts*/
      32 && (h.yDomain = ft(
        /*counts*/
        m[5].length
      )), b & /*colorScale, data*/
      80 && (h.yRange = Array.isArray(
        /*colorScale*/
        m[4]
      ) ? (
        /*colorScale*/
        m[4]
      ) : ft(0, 1.00001, 1 / /*data*/
      (m[6].length - 1)).map(
        /*func*/
        m[14]
      )), b & /*data*/
      64 && (h.data = /*data*/
      m[6]), b & /*hoveredIndex*/
      128 && (h.custom = { hoveredGet: (
        /*func_1*/
        m[15]
      ) }), b & /*$$scope, hoveredIndex*/
      524416 && (h.$$scope = { dirty: b, ctx: m }), l.$set(h), (!f || b & /*width*/
      1) && re(
        n,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let y = o;
      o = d(m), o === y ? ~o && c[o].p(m, b) : (a && (ie(), q(c[y], 1, 1, () => {
        c[y] = null;
      }), oe()), ~o ? (a = c[o], a ? a.p(m, b) : (a = c[o] = u[o](m), a.c()), w(a, 1), a.m(i, null)) : a = null);
    },
    i(m) {
      f || (w(l.$$.fragment, m), w(a), f = !0);
    },
    o(m) {
      q(l.$$.fragment, m), q(a), f = !1;
    },
    d(m) {
      s && s.d(m), m && N(t), m && N(n), X(l), m && N(r), m && N(i), ~o && c[o].d();
    }
  };
}
function yo(e) {
  let t, n;
  return {
    c() {
      t = p("div"), n = V(
        /*title*/
        e[1]
      ), g(t, "class", "font-bold text-xs truncate text-right"), re(t, "width", "84px");
    },
    m(l, r) {
      R(l, t, r), _(t, n);
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
      l && N(t);
    }
  };
}
function Xc(e) {
  let t, n;
  return t = new Fa({}), t.$on(
    "hover",
    /*hover_handler_1*/
    e[16]
  ), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p: Z,
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
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
      Y(t.$$.fragment);
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
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
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
      t = new lr(!1), l = _e(), t.a = l;
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
    i: Z,
    o: Z,
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
      t = new lr(!1), l = _e(), t.a = l;
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
    i: Z,
    o: Z,
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
  ), l = Ve(
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
      524288) && Ke(
        l,
        n,
        r,
        /*$$scope*/
        r[19],
        t ? We(
          n,
          /*$$scope*/
          r[19],
          i,
          xc
        ) : Xe(
          /*$$scope*/
          r[19]
        ),
        _o
      );
    },
    i(r) {
      t || (w(l, r), t = !0);
    },
    o(r) {
      q(l, r), t = !1;
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
      t = p("div"), n = V(
        /*title*/
        e[1]
      ), g(t, "class", "font-bold text-xs truncate text-right");
    },
    m(l, r) {
      R(l, t, r), _(t, n);
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
      l && N(t);
    }
  };
}
function $c(e) {
  let t, n;
  return t = new Fa({}), t.$on(
    "hover",
    /*hover_handler*/
    e[13]
  ), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p: Z,
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function e0(e) {
  let t, n;
  return t = new Oa({
    props: {
      $$slots: { default: [$c] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Y(t.$$.fragment);
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
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function t0(e) {
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
    i: Z,
    o: Z,
    d(r) {
      r && N(l), r && t.d();
    }
  };
}
function n0(e) {
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
    i: Z,
    o: Z,
    d(r) {
      r && N(l), r && t.d();
    }
  };
}
function l0(e) {
  let t;
  const n = (
    /*#slots*/
    e[12].caption
  ), l = Ve(
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
      524288) && Ke(
        l,
        n,
        r,
        /*$$scope*/
        r[19],
        t ? We(
          n,
          /*$$scope*/
          r[19],
          i,
          Vc
        ) : Xe(
          /*$$scope*/
          r[19]
        ),
        ho
      );
    },
    i(r) {
      t || (w(l, r), t = !0);
    },
    o(r) {
      q(l, r), t = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function r0(e) {
  let t, n, l, r;
  const i = [Kc, Wc], o = [];
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
      o[t].m(f, s), R(f, l, s), r = !0;
    },
    p(f, [s]) {
      let u = t;
      t = a(f), t === u ? o[t].p(f, s) : (ie(), q(o[u], 1, 1, () => {
        o[u] = null;
      }), oe(), n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), w(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      r || (w(n), r = !0);
    },
    o(f) {
      q(n), r = !1;
    },
    d(f) {
      o[t].d(f), f && N(l);
    }
  };
}
function i0(e, t, n) {
  let { $$slots: l = {}, $$scope: r } = t;
  const i = Ir(l);
  let { width: o = null } = t, { title: a = null } = t, { horizontalLayout: f = !1 } = t, { noParent: s = !1 } = t, { colorScale: u = Array.from(ds) } = t, { counts: c = null } = t, { order: d = [] } = t, m = [], b;
  Ne(",");
  let h = Ne(".1~%"), y = 1;
  function C(E) {
    return `<strong>${h(E.count / y)}</strong> ${E.name}`;
  }
  let k = null;
  const v = (E) => n(7, b = E.detail ? E.detail.index : null), z = (E) => u(E), L = (E) => E.index == b, D = (E) => n(7, b = E.detail ? E.detail.index : null), B = (E) => u(E), O = (E) => E.index == b;
  return e.$$set = (E) => {
    "width" in E && n(0, o = E.width), "title" in E && n(1, a = E.title), "horizontalLayout" in E && n(2, f = E.horizontalLayout), "noParent" in E && n(3, s = E.noParent), "colorScale" in E && n(4, u = E.colorScale), "counts" in E && n(5, c = E.counts), "order" in E && n(11, d = E.order), "$$scope" in E && n(19, r = E.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*counts, order*/
    2080)
      if (c && d.length > 0) {
        let E = Object.values(c).reduce((S, T) => S + T, 0), A = 0;
        n(6, m = d.map((S, T) => {
          let ne = A;
          return A += c[S] || 0, {
            start: ne / E,
            end: A / E,
            index: T,
            name: S,
            count: c[S] || 0
          };
        }));
      } else
        n(6, m = []);
    e.$$.dirty & /*counts*/
    32 && (c ? y = Object.values(c).reduce((E, A) => E + A, 0) : y = 1), e.$$.dirty & /*data*/
    64 && (m.length > 0 ? n(8, k = m.reduce((E, A) => E.count > A.count ? E : A, m[0])) : n(8, k = null));
  }, [
    o,
    a,
    f,
    s,
    u,
    c,
    m,
    b,
    k,
    C,
    i,
    d,
    l,
    v,
    z,
    L,
    D,
    B,
    O,
    r
  ];
}
class o0 extends we {
  constructor(t) {
    super(), pe(this, t, i0, r0, ke, {
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
function En(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
En.prototype = {
  constructor: En,
  scale: function(e) {
    return e === 1 ? this : new En(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new En(this.k, this.x + this.k * e, this.y + this.k * t);
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
En.prototype;
function po(e) {
  let t, n, l, r;
  const i = [u0, s0, f0, a0], o = [];
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
      ~t && o[t].m(f, s), R(f, l, s), r = !0;
    },
    p(f, s) {
      let u = t;
      t = a(f), t === u ? ~t && o[t].p(f, s) : (n && (ie(), q(o[u], 1, 1, () => {
        o[u] = null;
      }), oe()), ~t ? (n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), w(n, 1), n.m(l.parentNode, l)) : n = null);
    },
    i(f) {
      r || (w(n), r = !0);
    },
    o(f) {
      q(n), r = !1;
    },
    d(f) {
      ~t && o[t].d(f), f && N(l);
    }
  };
}
function a0(e) {
  let t, n;
  return t = new o0({
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
      K(t, l, r), n = !0;
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
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function f0(e) {
  let t, n;
  return t = new Bc({
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
      K(t, l, r), n = !0;
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
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function s0(e) {
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
      $$slots: { caption: [c0] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
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
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function u0(e) {
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
      $$slots: { caption: [d0] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
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
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function c0(e) {
  let t, n, l = Ne(",")(
    /*values*/
    e[0].count ?? 0
  ) + "", r, i, o = Ne(",")(
    /*values*/
    e[0].total ?? 1
  ) + "", a;
  return {
    c() {
      t = p("span"), n = p("strong"), r = V(l), i = V(`
        / `), a = V(o), g(t, "slot", "caption");
    },
    m(f, s) {
      R(f, t, s), _(t, n), _(n, r), _(t, i), _(t, a);
    },
    p(f, s) {
      s & /*values*/
      1 && l !== (l = Ne(",")(
        /*values*/
        f[0].count ?? 0
      ) + "") && ae(r, l), s & /*values*/
      1 && o !== (o = Ne(",")(
        /*values*/
        f[0].total ?? 1
      ) + "") && ae(a, o);
    },
    d(f) {
      f && N(t);
    }
  };
}
function d0(e) {
  let t, n, l = Ne(".1%")(
    /*values*/
    e[0].mean ?? 0
  ) + "", r, i, o, a = Ne(".1%")(1 - /*values*/
  (e[0].mean ?? 0)) + "", f, s;
  return {
    c() {
      t = p("span"), n = p("strong"), r = V(l), i = V(`
        true,
        `), o = p("strong"), f = V(a), s = V(`
        false`), g(t, "slot", "caption");
    },
    m(u, c) {
      R(u, t, c), _(t, n), _(n, r), _(t, i), _(t, o), _(o, f), _(t, s);
    },
    p(u, c) {
      c & /*values*/
      1 && l !== (l = Ne(".1%")(
        /*values*/
        u[0].mean ?? 0
      ) + "") && ae(r, l), c & /*values*/
      1 && a !== (a = Ne(".1%")(1 - /*values*/
      (u[0].mean ?? 0)) + "") && ae(f, a);
    },
    d(u) {
      u && N(t);
    }
  };
}
function g0(e) {
  let t, n, l = !!/*values*/
  e[0] && po(e);
  return {
    c() {
      l && l.c(), t = _e();
    },
    m(r, i) {
      l && l.m(r, i), R(r, t, i), n = !0;
    },
    p(r, [i]) {
      /*values*/
      r[0] ? l ? (l.p(r, i), i & /*values*/
      1 && w(l, 1)) : (l = po(r), l.c(), w(l, 1), l.m(t.parentNode, t)) : l && (ie(), q(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (w(l), n = !0);
    },
    o(r) {
      q(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && N(t);
    }
  };
}
function m0(e, t, n) {
  let l;
  F(e, Xl, (o) => n(1, l = o)), vt(() => {
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
class en extends we {
  constructor(t) {
    super(), pe(this, t, m0, g0, ke, { values: 0 });
  }
}
function wo(e) {
  var be;
  let t, n, l, r, i = (
    /*values*/
    (e[0].type || "unknown") + ""
  ), o, a, f, s, u, c, d, m, b, h, y, C = (
    /*formatNumber*/
    e[4](
      /*values*/
      ((be = e[0].values) == null ? void 0 : be.length) ?? 0
    ) + ""
  ), k, v, z, L, D, B, O, E, A, S, T, ne, j;
  c = new ce({
    props: {
      icon: (
        /*showCountDetails*/
        e[1] ? Ue : zt
      ),
      class: "text-gray-500 dark:text-gray-300"
    }
  });
  let Q = (
    /*showCountDetails*/
    e[1] && vo(e)
  ), H = !!/*values*/
  e[0].missingness && /*values*/
  (e[0].missingness.rate.count ?? 0) > 0 && So(e), U = (
    /*values*/
    e[0].types && qo(e)
  );
  const he = [_0, b0], te = [];
  function ue(se, I) {
    var G;
    return (
      /*values*/
      (G = se[0].values) != null && G.type ? 0 : 1
    );
  }
  return A = ue(e), S = te[A] = he[A](e), {
    c() {
      t = p("div"), n = p("span"), n.textContent = "Type:", l = P(), r = p("span"), o = V(i), a = P(), f = p("div"), s = p("div"), u = p("button"), Y(c.$$.fragment), d = P(), m = p("div"), b = p("span"), b.textContent = "Count:", h = P(), y = p("span"), k = V(C), v = P(), z = p("span"), z.textContent = "rows", L = P(), Q && Q.c(), D = P(), H && H.c(), B = P(), U && U.c(), O = P(), E = p("div"), S.c(), g(n, "class", "font-semibold"), g(r, "class", "font-mono"), g(t, "class", "text-sm text-gray-700 dark:text-gray-300 mb-4"), g(b, "class", "font-bold text-gray-900 dark:text-gray-100"), g(y, "class", "tabular-nums text-gray-700 dark:text-gray-200"), g(z, "class", "text-gray-500 dark:text-gray-400"), g(u, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), g(u, "aria-label", "Toggle count details"), g(s, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-base w-full rounded-md overflow-hidden"), g(E, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 px-4 py-2 text-base w-full rounded-md"), g(f, "class", "space-y-2");
    },
    m(se, I) {
      R(se, t, I), _(t, n), _(t, l), _(t, r), _(r, o), R(se, a, I), R(se, f, I), _(f, s), _(s, u), K(c, u, null), _(u, d), _(u, m), _(m, b), _(m, h), _(m, y), _(y, k), _(m, v), _(m, z), _(s, L), Q && Q.m(s, null), _(f, D), H && H.m(f, null), _(f, B), U && U.m(f, null), _(f, O), _(f, E), te[A].m(E, null), T = !0, ne || (j = W(
        u,
        "click",
        /*click_handler*/
        e[6]
      ), ne = !0);
    },
    p(se, I) {
      var ee;
      (!T || I & /*values*/
      1) && i !== (i = /*values*/
      (se[0].type || "unknown") + "") && ae(o, i);
      const G = {};
      I & /*showCountDetails*/
      2 && (G.icon = /*showCountDetails*/
      se[1] ? Ue : zt), c.$set(G), (!T || I & /*values*/
      1) && C !== (C = /*formatNumber*/
      se[4](
        /*values*/
        ((ee = se[0].values) == null ? void 0 : ee.length) ?? 0
      ) + "") && ae(k, C), /*showCountDetails*/
      se[1] ? Q ? (Q.p(se, I), I & /*showCountDetails*/
      2 && w(Q, 1)) : (Q = vo(se), Q.c(), w(Q, 1), Q.m(s, null)) : Q && (ie(), q(Q, 1, 1, () => {
        Q = null;
      }), oe()), /*values*/
      se[0].missingness && /*values*/
      (se[0].missingness.rate.count ?? 0) > 0 ? H ? (H.p(se, I), I & /*values*/
      1 && w(H, 1)) : (H = So(se), H.c(), w(H, 1), H.m(f, B)) : H && (ie(), q(H, 1, 1, () => {
        H = null;
      }), oe()), /*values*/
      se[0].types ? U ? (U.p(se, I), I & /*values*/
      1 && w(U, 1)) : (U = qo(se), U.c(), w(U, 1), U.m(f, O)) : U && (ie(), q(U, 1, 1, () => {
        U = null;
      }), oe());
      let le = A;
      A = ue(se), A === le ? te[A].p(se, I) : (ie(), q(te[le], 1, 1, () => {
        te[le] = null;
      }), oe(), S = te[A], S ? S.p(se, I) : (S = te[A] = he[A](se), S.c()), w(S, 1), S.m(E, null));
    },
    i(se) {
      T || (w(c.$$.fragment, se), w(Q), w(H), w(U), w(S), T = !0);
    },
    o(se) {
      q(c.$$.fragment, se), q(Q), q(H), q(U), q(S), T = !1;
    },
    d(se) {
      se && N(t), se && N(a), se && N(f), X(c), Q && Q.d(), H && H.d(), U && U.d(), te[A].d(), ne = !1, j();
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
      t = p("div"), l && l.c(), g(t, "class", "mx-2 px-2 py-2");
    },
    m(r, i) {
      R(r, t, i), l && l.m(t, null), n = !0;
    },
    p(r, i) {
      /*values*/
      r[0].ids ? l ? (l.p(r, i), i & /*values*/
      1 && w(l, 1)) : (l = Co(r), l.c(), w(l, 1), l.m(t, null)) : l && (ie(), q(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (w(l), n = !0);
    },
    o(r) {
      q(l), n = !1;
    },
    d(r) {
      r && N(t), l && l.d();
    }
  };
}
function Co(e) {
  let t, n, l, r, i, o, a, f, s, u;
  return r = new en({
    props: { values: (
      /*values*/
      e[0].ids.count
    ) }
  }), s = new en({
    props: {
      values: (
        /*values*/
        e[0].ids.count_per_trajectory
      )
    }
  }), {
    c() {
      t = p("div"), t.textContent = "Trajectories", n = P(), l = p("div"), Y(r.$$.fragment), i = P(), o = p("div"), o.textContent = "Timesteps per Trajectory", a = P(), f = p("div"), Y(s.$$.fragment), g(t, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), g(l, "class", "mb-2"), g(o, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), g(f, "class", "mb-2");
    },
    m(c, d) {
      R(c, t, d), R(c, n, d), R(c, l, d), K(r, l, null), R(c, i, d), R(c, o, d), R(c, a, d), R(c, f, d), K(s, f, null), u = !0;
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
      u || (w(r.$$.fragment, c), w(s.$$.fragment, c), u = !0);
    },
    o(c) {
      q(r.$$.fragment, c), q(s.$$.fragment, c), u = !1;
    },
    d(c) {
      c && N(t), c && N(n), c && N(l), X(r), c && N(i), c && N(o), c && N(a), c && N(f), X(s);
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
  ), u, c, d, m, b, h, y;
  l = new ce({
    props: {
      icon: (
        /*showMissingnessDetails*/
        e[2] ? Ue : zt
      ),
      class: "text-gray-500 dark:text-gray-300"
    }
  });
  let C = (
    /*showMissingnessDetails*/
    e[2] && No(e)
  );
  return {
    c() {
      t = p("div"), n = p("button"), Y(l.$$.fragment), r = P(), i = p("div"), o = p("span"), o.textContent = "Missingness:", a = P(), f = p("span"), u = V(s), c = P(), d = p("span"), d.textContent = "of rows", m = P(), C && C.c(), g(o, "class", "font-bold text-gray-900 dark:text-gray-100"), g(f, "class", "tabular-nums text-gray-700 dark:text-gray-200"), g(d, "class", "text-gray-500 dark:text-gray-400"), g(n, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), g(n, "aria-label", "Toggle missingness details"), g(t, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-base w-full rounded-md overflow-hidden");
    },
    m(k, v) {
      R(k, t, v), _(t, n), K(l, n, null), _(n, r), _(n, i), _(i, o), _(i, a), _(i, f), _(f, u), _(i, c), _(i, d), _(t, m), C && C.m(t, null), b = !0, h || (y = W(
        n,
        "click",
        /*click_handler_1*/
        e[7]
      ), h = !0);
    },
    p(k, v) {
      const z = {};
      v & /*showMissingnessDetails*/
      4 && (z.icon = /*showMissingnessDetails*/
      k[2] ? Ue : zt), l.$set(z), (!b || v & /*values*/
      1) && s !== (s = /*formatPercent*/
      k[5](
        /*values*/
        (k[0].missingness.rate.count ?? 0) / /*values*/
        (k[0].missingness.rate.total ?? 1)
      ) + "") && ae(u, s), /*showMissingnessDetails*/
      k[2] ? C ? (C.p(k, v), v & /*showMissingnessDetails*/
      4 && w(C, 1)) : (C = No(k), C.c(), w(C, 1), C.m(t, null)) : C && (ie(), q(C, 1, 1, () => {
        C = null;
      }), oe());
    },
    i(k) {
      b || (w(l.$$.fragment, k), w(C), b = !0);
    },
    o(k) {
      q(l.$$.fragment, k), q(C), b = !1;
    },
    d(k) {
      k && N(t), X(l), C && C.d(), h = !1, y();
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
      t = p("div"), l && l.c(), g(t, "class", "mx-2 px-2 py-2");
    },
    m(r, i) {
      R(r, t, i), l && l.m(t, null), n = !0;
    },
    p(r, i) {
      /*values*/
      r[0].missingness ? l ? (l.p(r, i), i & /*values*/
      1 && w(l, 1)) : (l = Mo(r), l.c(), w(l, 1), l.m(t, null)) : l && (ie(), q(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (w(l), n = !0);
    },
    o(r) {
      q(l), n = !1;
    },
    d(r) {
      r && N(t), l && l.d();
    }
  };
}
function Mo(e) {
  let t, n, l, r, i, o, a, f, s, u;
  return r = new en({
    props: {
      values: (
        /*values*/
        e[0].missingness.rate
      )
    }
  }), s = new en({
    props: {
      values: (
        /*values*/
        e[0].missingness.rate_per_trajectory
      )
    }
  }), {
    c() {
      t = p("div"), t.textContent = "Number of Missing Values", n = P(), l = p("div"), Y(r.$$.fragment), i = P(), o = p("div"), o.textContent = "Missingness Rate per Trajectory", a = P(), f = p("div"), Y(s.$$.fragment), g(t, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), g(l, "class", "mb-2"), g(o, "class", "mb-1 font-semibold text-sm text-gray-800 dark:text-gray-200"), g(f, "class", "mb-2");
    },
    m(c, d) {
      R(c, t, d), R(c, n, d), R(c, l, d), K(r, l, null), R(c, i, d), R(c, o, d), R(c, a, d), R(c, f, d), K(s, f, null), u = !0;
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
      u || (w(r.$$.fragment, c), w(s.$$.fragment, c), u = !0);
    },
    o(c) {
      q(r.$$.fragment, c), q(s.$$.fragment, c), u = !1;
    },
    d(c) {
      c && N(t), c && N(n), c && N(l), X(r), c && N(i), c && N(o), c && N(a), c && N(f), X(s);
    }
  };
}
function qo(e) {
  let t, n, l, r, i, o, a, f, s = (
    /*formatNumber*/
    e[4](Object.keys(
      /*values*/
      e[0].types.counts
    ).length ?? 0) + ""
  ), u, c, d, m, b, h, y;
  l = new ce({
    props: {
      icon: (
        /*showTypeDetails*/
        e[3] ? Ue : zt
      ),
      class: "text-gray-500 dark:text-gray-300"
    }
  });
  let C = (
    /*showTypeDetails*/
    e[3] && Ro(e)
  );
  return {
    c() {
      t = p("div"), n = p("button"), Y(l.$$.fragment), r = P(), i = p("div"), o = p("span"), o.textContent = "Data Elements:", a = P(), f = p("span"), u = V(s), c = P(), d = p("span"), d.textContent = "distinct elements", m = P(), C && C.c(), g(o, "class", "font-bold text-gray-900 dark:text-gray-100"), g(f, "class", "tabular-nums text-gray-700 dark:text-gray-200"), g(d, "class", "text-gray-500 dark:text-gray-400"), g(n, "class", "flex items-center text-sm hover:opacity-50 gap-2 px-4 py-2"), g(n, "aria-label", "Toggle type details"), g(t, "class", "flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-base w-full rounded-md");
    },
    m(k, v) {
      R(k, t, v), _(t, n), K(l, n, null), _(n, r), _(n, i), _(i, o), _(i, a), _(i, f), _(f, u), _(i, c), _(i, d), _(t, m), C && C.m(t, null), b = !0, h || (y = W(
        n,
        "click",
        /*click_handler_2*/
        e[8]
      ), h = !0);
    },
    p(k, v) {
      const z = {};
      v & /*showTypeDetails*/
      8 && (z.icon = /*showTypeDetails*/
      k[3] ? Ue : zt), l.$set(z), (!b || v & /*values*/
      1) && s !== (s = /*formatNumber*/
      k[4](Object.keys(
        /*values*/
        k[0].types.counts
      ).length ?? 0) + "") && ae(u, s), /*showTypeDetails*/
      k[3] ? C ? (C.p(k, v), v & /*showTypeDetails*/
      8 && w(C, 1)) : (C = Ro(k), C.c(), w(C, 1), C.m(t, null)) : C && (ie(), q(C, 1, 1, () => {
        C = null;
      }), oe());
    },
    i(k) {
      b || (w(l.$$.fragment, k), w(C), b = !0);
    },
    o(k) {
      q(l.$$.fragment, k), q(C), b = !1;
    },
    d(k) {
      k && N(t), X(l), C && C.d(), h = !1, y();
    }
  };
}
function Ro(e) {
  let t, n, l;
  return n = new en({
    props: { values: (
      /*values*/
      e[0].types
    ) }
  }), {
    c() {
      t = p("div"), Y(n.$$.fragment), g(t, "class", "mx-2 px-2 py-2");
    },
    m(r, i) {
      R(r, t, i), K(n, t, null), l = !0;
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
      q(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && N(t), X(n);
    }
  };
}
function b0(e) {
  let t;
  return {
    c() {
      t = p("div"), t.innerHTML = 'Values: <span class="font-normal text-gray-500 dark:text-gray-400">none</span>', g(t, "class", "text-sm font-bold text-gray-900 dark:text-gray-100 mr-2");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: Z,
    i: Z,
    o: Z,
    d(n) {
      n && N(t);
    }
  };
}
function _0(e) {
  let t, n, l, r;
  return l = new en({
    props: { values: (
      /*values*/
      e[0].values
    ) }
  }), {
    c() {
      t = p("div"), t.textContent = "Values:", n = P(), Y(l.$$.fragment), g(t, "class", "mb-2 text-sm font-bold text-gray-900 dark:text-gray-100 mr-2");
    },
    m(i, o) {
      R(i, t, o), R(i, n, o), K(l, i, o), r = !0;
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
      q(l.$$.fragment, i), r = !1;
    },
    d(i) {
      i && N(t), i && N(n), X(l, i);
    }
  };
}
function h0(e) {
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
      l && l.m(r, i), R(r, t, i), n = !0;
    },
    p(r, [i]) {
      /*values*/
      r[0] && /*values*/
      (r[0].ids || /*values*/
      r[0].missingness || /*values*/
      r[0].values) ? l ? (l.p(r, i), i & /*values*/
      1 && w(l, 1)) : (l = wo(r), l.c(), w(l, 1), l.m(t.parentNode, t)) : l && (ie(), q(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (w(l), n = !0);
    },
    o(r) {
      q(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && N(t);
    }
  };
}
function y0(e, t, n) {
  let { values: l = null } = t, r = !1, i = !1, o = !1;
  const a = Ne(","), f = Ne(".2~%"), s = () => n(1, r = !r), u = () => n(2, i = !i), c = () => n(3, o = !o);
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
class Ga extends we {
  constructor(t) {
    super(), pe(this, t, y0, h0, ke, { values: 0 });
  }
}
function zo(e, t, n) {
  const l = e.slice();
  return l[4] = t[n], l;
}
function Lo(e) {
  let t, n, l, r, i;
  n = new Ga({
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
      t = p("div"), Y(n.$$.fragment), l = P(), o && o.c(), r = _e(), g(t, "class", "p-4 border-t border-gray-200 dark:border-gray-700");
    },
    m(a, f) {
      R(a, t, f), K(n, t, null), R(a, l, f), o && o.m(a, f), R(a, r, f), i = !0;
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
      i || (w(n.$$.fragment, a), i = !0);
    },
    o(a) {
      q(n.$$.fragment, a), i = !1;
    },
    d(a) {
      a && N(t), X(n), a && N(l), o && o.d(a), a && N(r);
    }
  };
}
function Eo(e) {
  let t, n, l, r = (
    /*data*/
    e[1].dataset_queries
  ), i = [];
  for (let o = 0; o < r.length; o += 1)
    i[o] = Do(zo(e, r, o));
  return {
    c() {
      t = p("div"), n = p("div"), n.textContent = "SQL Queries", l = P();
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      g(n, "class", "text-xs font-semibold text-gray-500 mb-1 uppercase"), g(t, "class", "p-4 border-t border-gray-200 dark:border-gray-700");
    },
    m(o, a) {
      R(o, t, a), _(t, n), _(t, l);
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
          i[f] ? i[f].p(s, a) : (i[f] = Do(s), i[f].c(), i[f].m(t, null));
        }
        for (; f < i.length; f += 1)
          i[f].d(1);
        i.length = r.length;
      }
    },
    d(o) {
      o && N(t), Oe(i, o);
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
      t = p("pre"), l = V(n), g(t, "class", "bg-white dark:bg-gray-900 text-xs font-mono p-2 rounded");
    },
    m(r, i) {
      R(r, t, i), _(t, l);
    },
    p(r, i) {
      i & /*data*/
      2 && n !== (n = /*sql*/
      r[4] + "") && ae(l, n);
    },
    d(r) {
      r && N(t);
    }
  };
}
function k0(e) {
  let t, n, l, r, i, o, a, f, s, u;
  o = new ce({
    props: {
      icon: (
        /*isExpanded*/
        e[2] ? Kl : Ue
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
      t = p("div"), n = p("button"), l = p("span"), r = V(
        /*queryText*/
        e[0]
      ), i = P(), Y(o.$$.fragment), a = P(), c && c.c(), g(l, "class", "text-sm font-mono text-gray-700 dark:text-gray-300 truncate flex-1"), g(n, "class", "w-full px-3 py-2 text-left flex items-center justify-between bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none"), g(t, "class", "border border-gray-300 dark:border-gray-600 rounded-md mb-2 overflow-hidden");
    },
    m(d, m) {
      R(d, t, m), _(t, n), _(n, l), _(l, r), _(n, i), K(o, n, null), _(t, a), c && c.m(t, null), f = !0, s || (u = W(
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
      const b = {};
      m & /*isExpanded*/
      4 && (b.icon = /*isExpanded*/
      d[2] ? Kl : Ue), o.$set(b), /*isExpanded*/
      d[2] ? c ? (c.p(d, m), m & /*isExpanded*/
      4 && w(c, 1)) : (c = Lo(d), c.c(), w(c, 1), c.m(t, null)) : c && (ie(), q(c, 1, 1, () => {
        c = null;
      }), oe());
    },
    i(d) {
      f || (w(o.$$.fragment, d), w(c), f = !0);
    },
    o(d) {
      q(o.$$.fragment, d), q(c), f = !1;
    },
    d(d) {
      d && N(t), X(o), c && c.d(), s = !1, u();
    }
  };
}
function p0(e, t, n) {
  let { queryText: l } = t, { data: r } = t, i = !1;
  function o() {
    n(2, i = !i);
  }
  return e.$$set = (a) => {
    "queryText" in a && n(0, l = a.queryText), "data" in a && n(1, r = a.data);
  }, [l, r, i, o];
}
class w0 extends we {
  constructor(t) {
    super(), pe(this, t, p0, k0, ke, { queryText: 0, data: 1 });
  }
}
function Ao(e, t, n) {
  const l = e.slice();
  return l[5] = t[n][0], l[6] = t[n][1], l;
}
function To(e) {
  let t, n, l, r, i;
  const o = [C0, v0], a = [];
  function f(s, u) {
    return u & /*subqueries*/
    4 && (n = null), n == null && (n = Object.keys(
      /*subqueries*/
      s[2]
    ).length > 0), n ? 0 : 1;
  }
  return l = f(e, -1), r = a[l] = o[l](e), {
    c() {
      t = p("div"), r.c(), g(t, "class", "space-y-2 mt-3");
    },
    m(s, u) {
      R(s, t, u), a[l].m(t, null), i = !0;
    },
    p(s, u) {
      let c = l;
      l = f(s, u), l === c ? a[l].p(s, u) : (ie(), q(a[c], 1, 1, () => {
        a[c] = null;
      }), oe(), r = a[l], r ? r.p(s, u) : (r = a[l] = o[l](s), r.c()), w(r, 1), r.m(t, null));
    },
    i(s) {
      i || (w(r), i = !0);
    },
    o(s) {
      q(r), i = !1;
    },
    d(s) {
      s && N(t), a[l].d();
    }
  };
}
function v0(e) {
  let t;
  return {
    c() {
      t = p("div"), t.textContent = "No subqueries yet", g(t, "class", "text-center py-8 text-gray-900 dark:text-gray-100");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: Z,
    i: Z,
    o: Z,
    d(n) {
      n && N(t);
    }
  };
}
function C0(e) {
  let t, n, l = Object.entries(
    /*subqueries*/
    e[2]
  ), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = Po(Ao(e, l, o));
  const i = (o) => q(r[o], 1, 1, () => {
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
          const s = Ao(o, l, f);
          r[f] ? (r[f].p(s, a), w(r[f], 1)) : (r[f] = Po(s), r[f].c(), w(r[f], 1), r[f].m(t.parentNode, t));
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
        q(r[a]);
      n = !1;
    },
    d(o) {
      Oe(r, o), o && N(t);
    }
  };
}
function Po(e) {
  let t, n;
  return t = new w0({
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
      K(t, l, r), n = !0;
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
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function S0(e) {
  let t, n, l, r, i, o, a, f, s, u, c;
  o = new ce({
    props: {
      icon: (
        /*enabled*/
        e[0] ? Kl : Ue
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
      t = p("div"), n = p("button"), l = p("h3"), l.textContent = "Subqueries", r = P(), i = p("div"), Y(o.$$.fragment), a = P(), d && d.c(), g(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100"), g(i, "class", "p-2 text-gray-800 dark:text-gray-200"), g(n, "class", "block flex items-center justify-between mb-2 bg-transparent hover:opacity-50"), g(t, "class", f = "p-2 mb-0 border-0 rounded-none " + /*width*/
      e[1] + " transition-colors duration-200"), fe(t, "opacity-50", Object.keys(
        /*subqueries*/
        e[2]
      ).length == 0);
    },
    m(m, b) {
      R(m, t, b), _(t, n), _(n, l), _(n, r), _(n, i), K(o, i, null), _(t, a), d && d.m(t, null), s = !0, u || (c = W(
        n,
        "click",
        /*click_handler*/
        e[4]
      ), u = !0);
    },
    p(m, [b]) {
      const h = {};
      b & /*enabled*/
      1 && (h.icon = /*enabled*/
      m[0] ? Kl : Ue), o.$set(h), /*enabled*/
      m[0] ? d ? (d.p(m, b), b & /*enabled*/
      1 && w(d, 1)) : (d = To(m), d.c(), w(d, 1), d.m(t, null)) : d && (ie(), q(d, 1, 1, () => {
        d = null;
      }), oe()), (!s || b & /*width*/
      2 && f !== (f = "p-2 mb-0 border-0 rounded-none " + /*width*/
      m[1] + " transition-colors duration-200")) && g(t, "class", f), (!s || b & /*width, Object, subqueries*/
      6) && fe(t, "opacity-50", Object.keys(
        /*subqueries*/
        m[2]
      ).length == 0);
    },
    i(m) {
      s || (w(o.$$.fragment, m), w(d), s = !0);
    },
    o(m) {
      q(o.$$.fragment, m), q(d), s = !1;
    },
    d(m) {
      m && N(t), X(o), d && d.d(), u = !1, c();
    }
  };
}
function N0(e, t, n) {
  let { width: l = "w-full max-w-2xl" } = t, { enabled: r = !1 } = t, { subqueries: i = {} } = t, { idsLength: o = 0 } = t;
  const a = () => n(0, r = !r);
  return e.$$set = (f) => {
    "width" in f && n(1, l = f.width), "enabled" in f && n(0, r = f.enabled), "subqueries" in f && n(2, i = f.subqueries), "idsLength" in f && n(3, o = f.idsLength);
  }, e.$$.update = () => {
    e.$$.dirty & /*subqueries, enabled*/
    5 && (console.log("🔍 SubquerySection - subqueries changed:", i), console.log("🔍 SubquerySection - enabled:", r), console.log("🔍 SubquerySection - subqueries keys:", Object.keys(i)));
  }, [r, l, i, o, a];
}
class M0 extends we {
  constructor(t) {
    super(), pe(this, t, N0, S0, ke, {
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
var xa = { exports: {} };
(function(e, t) {
  (function() {
    function n(i, o, a) {
      var f = null, s = null, u = null, c = null;
      if (a = a || "", !o.length)
        return a || "";
      if (i.some(function(m) {
        m.name;
        var b = m.match instanceof RegExp, h = b ? m.match : m.match[0], y = b ? null : m.match[1] || null, C = b ? null : m.match[2] || null;
        return f = o.match(h), s = f ? m.name : null, u = y, c = C, !!f;
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
`).map(function(b, h) {
          if (!h)
            return b;
          var y = h - 1 + "";
          return y.length < 2 && (y = "0" + y), '<span class="linenum">' + y + "</span> " + b;
        }).join(`
`)), s.innerHTML = m;
      });
    }
    e.exports = r;
  })();
})(xa);
var R0 = xa.exports;
const Va = /* @__PURE__ */ q0(R0), Wa = [
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
function Ka(e) {
  return e = e.replaceAll(/<([A-z]+?)>/g, "####TOKEN####$1####ENDTOKEN####"), e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function z0(e) {
  let t, n;
  return t = new ce({ props: { icon: rr } }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p: Z,
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function L0(e) {
  let t, n;
  return t = new ce({ props: { icon: Tf } }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p: Z,
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function E0(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b;
  const h = [L0, z0], y = [];
  function C(k, v) {
    return (
      /*copied*/
      k[3] ? 0 : 1
    );
  }
  return r = C(e), i = y[r] = h[r](e), f = new ce({ props: { icon: Ca } }), {
    c() {
      t = p("div"), n = p("div"), l = p("button"), i.c(), o = P(), a = p("button"), Y(f.$$.fragment), s = P(), u = p("code"), c = V(
        /*content*/
        e[0]
      ), g(l, "class", "p-2 hover:opacity-50 text-gray-700 dark:text-gray-200 text-sm"), g(l, "title", "Copy"), g(a, "class", "p-2 hover:opacity-50 text-gray-700 dark:text-gray-200 text-sm"), g(a, "title", "Run this query"), g(n, "class", "flex items-center absolute right-0 top-0 mr-2 mt-2"), g(u, "class", "font-mono whitespace-pre-line"), g(
        u,
        "id",
        /*highlightedViewID*/
        e[4]
      ), g(t, "class", "bg-gray-100 dark:bg-gray-800 rounded-md my-2 p-4 pr-12 relative text-gray-900 dark:text-gray-100");
    },
    m(k, v) {
      R(k, t, v), _(t, n), _(n, l), y[r].m(l, null), _(n, o), _(n, a), K(f, a, null), _(t, s), _(t, u), _(u, c), e[8](u), d = !0, m || (b = [
        W(
          l,
          "click",
          /*click_handler*/
          e[6]
        ),
        W(
          a,
          "click",
          /*click_handler_1*/
          e[7]
        )
      ], m = !0);
    },
    p(k, [v]) {
      let z = r;
      r = C(k), r === z ? y[r].p(k, v) : (ie(), q(y[z], 1, 1, () => {
        y[z] = null;
      }), oe(), i = y[r], i ? i.p(k, v) : (i = y[r] = h[r](k), i.c()), w(i, 1), i.m(l, null)), (!d || v & /*content*/
      1) && ae(
        c,
        /*content*/
        k[0]
      );
    },
    i(k) {
      d || (w(i), w(f.$$.fragment, k), d = !0);
    },
    o(k) {
      q(i), q(f.$$.fragment, k), d = !1;
    },
    d(k) {
      k && N(t), y[r].d(), X(f), e[8](null), m = !1, ve(b);
    }
  };
}
function D0(e, t, n) {
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
    Ce[d ? "unshift" : "push"](() => {
      o = d, n(2, o), n(0, l), n(4, i);
    });
  }
  return e.$$set = (d) => {
    "content" in d && n(0, l = d.content), "onRun" in d && n(1, r = d.onRun);
  }, e.$$.update = () => {
    e.$$.dirty & /*highlightView, content*/
    5 && o && l && (n(2, o.innerText = Ka(l), o), Va({
      selector: `#${i}`,
      patterns: Wa
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
class A0 extends we {
  constructor(t) {
    super(), pe(this, t, D0, E0, ke, { content: 0, onRun: 1 });
  }
}
function Qo(e, t, n) {
  const l = e.slice();
  return l[7] = t[n], l[9] = n, l;
}
function T0(e) {
  let t, n = Io(
    /*block*/
    e[7].content
  ) + "";
  return {
    c() {
      t = p("div"), g(t, "class", "leading-relaxed mb-2");
    },
    m(l, r) {
      R(l, t, r), t.innerHTML = n;
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
      l && N(t);
    }
  };
}
function P0(e) {
  let t, n;
  return t = new A0({
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
      K(t, l, r), n = !0;
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
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function jo(e) {
  let t, n, l, r;
  const i = [P0, T0], o = [];
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
      o[t].m(f, s), R(f, l, s), r = !0;
    },
    p(f, s) {
      let u = t;
      t = a(f), t === u ? o[t].p(f, s) : (ie(), q(o[u], 1, 1, () => {
        o[u] = null;
      }), oe(), n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), w(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      r || (w(n), r = !0);
    },
    o(f) {
      q(n), r = !1;
    },
    d(f) {
      o[t].d(f), f && N(l);
    }
  };
}
function Oo(e) {
  let t, n, l = /*collapsed*/ e[1] ? "More" : "Less", r, i, o;
  return {
    c() {
      t = p("div"), n = p("a"), r = V(l), g(n, "class", "text-blue-600 dark:text-blue-400 hover:opacity-50 text-sm"), g(n, "href", "#");
    },
    m(a, f) {
      R(a, t, f), _(t, n), _(n, r), i || (o = W(
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
      a && N(t), i = !1, o();
    }
  };
}
function Q0(e) {
  let t, n, l, r = (
    /*blocks*/
    e[3]
  ), i = [];
  for (let f = 0; f < r.length; f += 1)
    i[f] = jo(Qo(e, r, f));
  const o = (f) => q(i[f], 1, 1, () => {
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
      R(f, t, s), a && a.m(f, s), R(f, n, s), l = !0;
    },
    p(f, [s]) {
      if (s & /*blocks, onRun, formatMarkdown*/
      9) {
        r = /*blocks*/
        f[3];
        let u;
        for (u = 0; u < r.length; u += 1) {
          const c = Qo(f, r, u);
          i[u] ? (i[u].p(c, s), w(i[u], 1)) : (i[u] = jo(c), i[u].c(), w(i[u], 1), i[u].m(t.parentNode, t));
        }
        for (ie(), u = r.length; u < i.length; u += 1)
          o(u);
        oe();
      }
      /*collapsible*/
      f[2] ? a ? a.p(f, s) : (a = Oo(f), a.c(), a.m(n.parentNode, n)) : a && (a.d(1), a = null);
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
        q(i[s]);
      l = !1;
    },
    d(f) {
      Oe(i, f), f && N(t), a && a.d(f), f && N(n);
    }
  };
}
function j0(e) {
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
function O0(e, t, n) {
  let l, { text: r } = t, { collapseLength: i = null } = t, { onRun: o = () => {
  } } = t, a = [], f = !1;
  const s = () => n(1, f = !f);
  return e.$$set = (u) => {
    "text" in u && n(4, r = u.text), "collapseLength" in u && n(5, i = u.collapseLength), "onRun" in u && n(0, o = u.onRun);
  }, e.$$.update = () => {
    e.$$.dirty & /*collapseLength, text*/
    48 && n(2, l = !!i && r.length > i), e.$$.dirty & /*text*/
    16 && n(1, f = !1), e.$$.dirty & /*collapsible, collapsed, text, collapseLength*/
    54 && n(3, a = j0(l && f ? r.slice(0, i) + "..." : r));
  }, [o, f, l, a, r, i, s];
}
class Xa extends we {
  constructor(t) {
    super(), pe(this, t, O0, Q0, ke, { text: 4, collapseLength: 5, onRun: 0 });
  }
}
function Ho(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = p("div"), n = p("h3"), n.textContent = "Query Error", l = P(), r = p("div"), i = V(
        /*queryError*/
        e[4]
      ), g(n, "class", "text-lg font-medium text-red-700 dark:text-red-100 mb-2"), g(r, "class", "text-sm font-mono text-gray-800 dark:text-gray-100"), g(t, "class", "bg-red-50 dark:bg-red-800/40 rounded-lg border border-red-200 dark:border-red-400 p-4 mb-4");
    },
    m(o, a) {
      R(o, t, a), _(t, n), _(t, l), _(t, r), _(r, i);
    },
    p(o, a) {
      a & /*queryError*/
      16 && ae(
        i,
        /*queryError*/
        o[4]
      );
    },
    d(o) {
      o && N(t);
    }
  };
}
function Bo(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m;
  o = new ce({
    props: {
      icon: wa,
      class: "inline mr-2"
    }
  });
  function b(k, v) {
    return (
      /*queryError*/
      k[4] ? H0 : I0
    );
  }
  let h = b(e), y = h(e), C = (
    /*llmExplanation*/
    e[9] && Fo(e)
  );
  return {
    c() {
      t = p("div"), n = p("div"), l = p("h3"), l.textContent = "Explanation", r = P(), i = p("button"), Y(o.$$.fragment), a = P(), y.c(), s = P(), C && C.c(), g(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100"), g(i, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50"), i.disabled = f = (!/*values*/
      e[5] || Object.keys(
        /*values*/
        e[5]
      ).length == 0) && !/*queryError*/
      e[4], g(n, "class", "flex items-center justify-between mb-2"), g(t, "class", u = "px-2 mb-4 " + /*width*/
      e[7] + " dark:text-gray-100"), fe(t, "opacity-50", (!/*values*/
      e[5] || Object.keys(
        /*values*/
        e[5]
      ).length == 0) && !/*queryError*/
      e[4]);
    },
    m(k, v) {
      R(k, t, v), _(t, n), _(n, l), _(n, r), _(n, i), K(o, i, null), _(i, a), y.m(i, null), _(t, s), C && C.m(t, null), c = !0, d || (m = W(
        i,
        "click",
        /*click_handler*/
        e[10]
      ), d = !0);
    },
    p(k, v) {
      h !== (h = b(k)) && (y.d(1), y = h(k), y && (y.c(), y.m(i, null))), (!c || v & /*values, queryError*/
      48 && f !== (f = (!/*values*/
      k[5] || Object.keys(
        /*values*/
        k[5]
      ).length == 0) && !/*queryError*/
      k[4])) && (i.disabled = f), /*llmExplanation*/
      k[9] ? C ? (C.p(k, v), v & /*llmExplanation*/
      512 && w(C, 1)) : (C = Fo(k), C.c(), w(C, 1), C.m(t, null)) : C && (ie(), q(C, 1, 1, () => {
        C = null;
      }), oe()), (!c || v & /*width*/
      128 && u !== (u = "px-2 mb-4 " + /*width*/
      k[7] + " dark:text-gray-100")) && g(t, "class", u), (!c || v & /*width, values, Object, queryError*/
      176) && fe(t, "opacity-50", (!/*values*/
      k[5] || Object.keys(
        /*values*/
        k[5]
      ).length == 0) && !/*queryError*/
      k[4]);
    },
    i(k) {
      c || (w(o.$$.fragment, k), w(C), c = !0);
    },
    o(k) {
      q(o.$$.fragment, k), q(C), c = !1;
    },
    d(k) {
      k && N(t), X(o), y.d(), C && C.d(), d = !1, m();
    }
  };
}
function I0(e) {
  let t;
  return {
    c() {
      t = V("Explain");
    },
    m(n, l) {
      R(n, t, l);
    },
    d(n) {
      n && N(t);
    }
  };
}
function H0(e) {
  let t;
  return {
    c() {
      t = V("Explain and Fix");
    },
    m(n, l) {
      R(n, t, l);
    },
    d(n) {
      n && N(t);
    }
  };
}
function Fo(e) {
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
        e[11]
      )
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*llmExplanation*/
      512 && (i.text = /*llmExplanation*/
      l[9]), r & /*textInput, onRun*/
      3 && (i.onRun = /*func*/
      l[11]), t.$set(i);
    },
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function B0(e) {
  let t;
  return {
    c() {
      t = p("div"), t.textContent = "No query results", g(t, "class", "text-center py-8 text-gray-900 dark:text-gray-100");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: Z,
    i: Z,
    o: Z,
    d(n) {
      n && N(t);
    }
  };
}
function F0(e) {
  let t, n;
  return t = new Ga({ props: { values: (
    /*values*/
    e[5]
  ) } }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p(l, r) {
      const i = {};
      r & /*values*/
      32 && (i.values = /*values*/
      l[5]), t.$set(i);
    },
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function G0(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b = !!/*queryError*/
  e[4] && Ho(e), h = (
    /*llmAvailable*/
    e[8] && Bo(e)
  );
  const y = [F0, B0], C = [];
  function k(v, z) {
    return z & /*values*/
    32 && (a = null), a == null && (a = !!(/*values*/
    v[5] && Object.keys(
      /*values*/
      v[5]
    ).length > 0)), a ? 0 : 1;
  }
  return f = k(e, -1), s = C[f] = y[f](e), d = new M0({
    props: {
      width: "w-full",
      subqueries: (
        /*subqueries*/
        e[6]
      )
    }
  }), {
    c() {
      t = p("div"), b && b.c(), n = P(), h && h.c(), l = P(), r = p("div"), i = p("div"), i.innerHTML = '<h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Query Result</h3>', o = P(), s.c(), c = P(), Y(d.$$.fragment), g(i, "class", "flex items-center justify-between mb-2"), g(r, "class", u = "px-2 mb-4 " + /*width*/
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
    m(v, z) {
      R(v, t, z), b && b.m(t, null), _(t, n), h && h.m(t, null), _(t, l), _(t, r), _(r, i), _(r, o), C[f].m(r, null), _(t, c), K(d, t, null), m = !0;
    },
    p(v, [z]) {
      /*queryError*/
      v[4] ? b ? b.p(v, z) : (b = Ho(v), b.c(), b.m(t, n)) : b && (b.d(1), b = null), /*llmAvailable*/
      v[8] ? h ? (h.p(v, z), z & /*llmAvailable*/
      256 && w(h, 1)) : (h = Bo(v), h.c(), w(h, 1), h.m(t, l)) : h && (ie(), q(h, 1, 1, () => {
        h = null;
      }), oe());
      let L = f;
      f = k(v, z), f === L ? C[f].p(v, z) : (ie(), q(C[L], 1, 1, () => {
        C[L] = null;
      }), oe(), s = C[f], s ? s.p(v, z) : (s = C[f] = y[f](v), s.c()), w(s, 1), s.m(r, null)), (!m || z & /*width*/
      128 && u !== (u = "px-2 mb-4 " + /*width*/
      v[7] + " dark:text-gray-100")) && g(r, "class", u), (!m || z & /*width, values, Object*/
      160) && fe(r, "opacity-50", !/*values*/
      v[5] || Object.keys(
        /*values*/
        v[5]
      ).length == 0);
      const D = {};
      z & /*subqueries*/
      64 && (D.subqueries = /*subqueries*/
      v[6]), d.$set(D), (!m || z & /*values, Object, textInput, queryForResults*/
      41) && fe(t, "opacity-50", !!/*values*/
      v[5] && Object.keys(
        /*values*/
        v[5]
      ).length > 0 && /*textInput*/
      v[0] != /*queryForResults*/
      v[3]);
    },
    i(v) {
      m || (w(h), w(s), w(d.$$.fragment, v), m = !0);
    },
    o(v) {
      q(h), q(s), q(d.$$.fragment, v), m = !1;
    },
    d(v) {
      v && N(t), b && b.d(), h && h.d(), C[f].d(), X(d);
    }
  };
}
function x0(e, t, n) {
  let { textInput: l = "" } = t, { onRun: r = () => {
  } } = t, { onExplain: i = () => {
  } } = t, { queryForResults: o = "" } = t, { queryError: a = "" } = t, { values: f = {} } = t, { subqueries: s = {} } = t, { width: u = "w-full" } = t, { llmAvailable: c = !1 } = t, { llmExplanation: d = "" } = t;
  const m = () => {
    i();
  }, b = (h) => {
    n(0, l = h), r();
  };
  return e.$$set = (h) => {
    "textInput" in h && n(0, l = h.textInput), "onRun" in h && n(1, r = h.onRun), "onExplain" in h && n(2, i = h.onExplain), "queryForResults" in h && n(3, o = h.queryForResults), "queryError" in h && n(4, a = h.queryError), "values" in h && n(5, f = h.values), "subqueries" in h && n(6, s = h.subqueries), "width" in h && n(7, u = h.width), "llmAvailable" in h && n(8, c = h.llmAvailable), "llmExplanation" in h && n(9, d = h.llmExplanation);
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
class V0 extends we {
  constructor(t) {
    super(), pe(this, t, x0, G0, ke, {
      textInput: 0,
      onRun: 1,
      onExplain: 2,
      queryForResults: 3,
      queryError: 4,
      values: 5,
      subqueries: 6,
      width: 7,
      llmAvailable: 8,
      llmExplanation: 9
    });
  }
}
function Go(e) {
  let t, n, l, r, i, o = (
    /*message*/
    (e[1] || "Loading...") + ""
  ), a, f, s;
  return {
    c() {
      t = p("div"), n = p("div"), l = p("div"), r = p("div"), i = p("p"), a = V(o), f = P(), s = p("div"), s.innerHTML = '<div class="bg-blue-600 h-2 rounded-full animate-pulse" style="width: 100%"></div>', g(i, "class", "text-sm font-medium text-gray-900 dark:text-gray-100"), g(r, "class", "flex-1"), g(s, "class", "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"), g(l, "class", "space-y-3"), g(n, "class", "bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 w-1/2 p-6"), g(t, "class", "absolute top-0 left-0 right-0 top-0 bottom-0 bg-white/80 dark:bg-gray-900/80 flex items-center justify-center z-80");
    },
    m(u, c) {
      R(u, t, c), _(t, n), _(n, l), _(l, r), _(r, i), _(i, a), _(l, f), _(l, s);
    },
    p(u, c) {
      c & /*message*/
      2 && o !== (o = /*message*/
      (u[1] || "Loading...") + "") && ae(a, o);
    },
    d(u) {
      u && N(t);
    }
  };
}
function W0(e) {
  let t, n = (
    /*isLoading*/
    e[0] && Go(e)
  );
  return {
    c() {
      n && n.c(), t = _e();
    },
    m(l, r) {
      n && n.m(l, r), R(l, t, r);
    },
    p(l, [r]) {
      /*isLoading*/
      l[0] ? n ? n.p(l, r) : (n = Go(l), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: Z,
    o: Z,
    d(l) {
      n && n.d(l), l && N(t);
    }
  };
}
function K0(e, t, n) {
  let { isLoading: l = !1 } = t, { message: r = "" } = t, { width: i = "w-full" } = t;
  return e.$$set = (o) => {
    "isLoading" in o && n(0, l = o.isLoading), "message" in o && n(1, r = o.message), "width" in o && n(2, i = o.width);
  }, [l, r, i];
}
class X0 extends we {
  constructor(t) {
    super(), pe(this, t, K0, W0, ke, { isLoading: 0, message: 1, width: 2 });
  }
}
function xo(e, t, n) {
  const l = e.slice();
  return l[7] = t[n], l[9] = n, l;
}
function Vo(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b;
  s = new ce({ props: { icon: Ef } });
  function h(k, v) {
    return (
      /*history*/
      k[1].length === 0 ? U0 : Y0
    );
  }
  let y = h(e), C = y(e);
  return {
    c() {
      t = p("div"), n = P(), l = p("div"), r = p("div"), i = p("div"), o = p("h3"), o.textContent = "Query History", a = P(), f = p("button"), Y(s.$$.fragment), u = P(), c = p("div"), C.c(), g(t, "class", "absolute top-0 left-0 w-full h-full bg-white/80 dark:bg-gray-900/80 z-40"), g(o, "class", "font-medium"), g(f, "class", "text-gray-600 dark:text-gray-300 hover:opacity-50 transition-colors p-2"), g(f, "title", "Close history"), g(i, "class", "flex items-center justify-between px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white"), g(c, "class", "max-h-80 overflow-y-auto svelte-6p3axr"), g(r, "class", "bg-white dark:bg-gray-800 border-2 border-gray-300/50 dark:border-gray-600/2 rounded-lg w-2/3 h-2/3 overflow-auto pointer-events-auto"), g(l, "class", "absolute top-0 left-0 w-full h-full flex items-center justify-center z-50 pointer-events-none");
    },
    m(k, v) {
      R(k, t, v), R(k, n, v), R(k, l, v), _(l, r), _(r, i), _(i, o), _(i, a), _(i, f), K(s, f, null), _(r, u), _(r, c), C.m(c, null), d = !0, m || (b = [
        W(t, "click", Re(
          /*handleClickOutside*/
          e[4]
        )),
        W(f, "click", function() {
          Ye(
            /*onClose*/
            e[2]
          ) && e[2].apply(this, arguments);
        })
      ], m = !0);
    },
    p(k, v) {
      e = k, y === (y = h(e)) && C ? C.p(e, v) : (C.d(1), C = y(e), C && (C.c(), C.m(c, null)));
    },
    i(k) {
      d || (w(s.$$.fragment, k), d = !0);
    },
    o(k) {
      q(s.$$.fragment, k), d = !1;
    },
    d(k) {
      k && N(t), k && N(n), k && N(l), X(s), C.d(), m = !1, ve(b);
    }
  };
}
function Y0(e) {
  let t, n = (
    /*history*/
    e[1]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Ko(xo(e, n, r));
  return {
    c() {
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      t = _e();
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
          const a = xo(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = Ko(a), l[o].c(), l[o].m(t.parentNode, t));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(r) {
      Oe(l, r), r && N(t);
    }
  };
}
function U0(e) {
  let t;
  return {
    c() {
      t = p("div"), t.textContent = "No query history yet", g(t, "class", "p-4 text-center text-gray-500 dark:text-gray-400 text-sm");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: Z,
    d(n) {
      n && N(t);
    }
  };
}
function J0(e) {
  let t, n = (
    /*historyItem*/
    (e[7].query || "No query extracted") + ""
  ), l;
  return {
    c() {
      t = p("span"), l = V(n), g(t, "class", "font-mono");
    },
    m(r, i) {
      R(r, t, i), _(t, l);
    },
    p(r, i) {
      i & /*history*/
      2 && n !== (n = /*historyItem*/
      (r[7].query || "No query extracted") + "") && ae(l, n);
    },
    d(r) {
      r && N(t);
    }
  };
}
function Z0(e) {
  let t = (
    /*historyItem*/
    e[7].question + ""
  ), n;
  return {
    c() {
      n = V(t);
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
      l && N(n);
    }
  };
}
function Wo(e) {
  let t, n = (
    /*historyItem*/
    e[7].answer + ""
  ), l;
  return {
    c() {
      t = p("p"), l = V(n), g(t, "class", "text-xs text-gray-600 dark:text-gray-300 line-clamp-2 mt-2 svelte-6p3axr");
    },
    m(r, i) {
      R(r, t, i), _(t, l);
    },
    p(r, i) {
      i & /*history*/
      2 && n !== (n = /*historyItem*/
      r[7].answer + "") && ae(l, n);
    },
    d(r) {
      r && N(t);
    }
  };
}
function Ko(e) {
  let t, n, l, r, i, o = Xo(
    /*historyItem*/
    e[7].timestamp
  ) + "", a, f, s, u, c;
  function d(C, k) {
    return (
      /*historyItem*/
      C[7].question ? Z0 : J0
    );
  }
  let m = d(e), b = m(e), h = (
    /*historyItem*/
    e[7].answer && Wo(e)
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
      t = p("div"), n = p("div"), l = p("h4"), b.c(), r = P(), i = p("span"), a = V(o), f = P(), h && h.c(), s = P(), g(l, "class", "text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-2 flex-1 svelte-6p3axr"), g(i, "class", "text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0"), g(n, "class", "flex items-start justify-between"), g(t, "class", "p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors");
    },
    m(C, k) {
      R(C, t, k), _(t, n), _(n, l), b.m(l, null), _(n, r), _(n, i), _(i, a), _(t, f), h && h.m(t, null), _(t, s), u || (c = W(t, "click", y), u = !0);
    },
    p(C, k) {
      e = C, m === (m = d(e)) && b ? b.p(e, k) : (b.d(1), b = m(e), b && (b.c(), b.m(l, null))), k & /*history*/
      2 && o !== (o = Xo(
        /*historyItem*/
        e[7].timestamp
      ) + "") && ae(a, o), /*historyItem*/
      e[7].answer ? h ? h.p(e, k) : (h = Wo(e), h.c(), h.m(t, s)) : h && (h.d(1), h = null);
    },
    d(C) {
      C && N(t), b.d(), h && h.d(), u = !1, c();
    }
  };
}
function $0(e) {
  let t, n, l = (
    /*isVisible*/
    e[0] && Vo(e)
  );
  return {
    c() {
      l && l.c(), t = _e();
    },
    m(r, i) {
      l && l.m(r, i), R(r, t, i), n = !0;
    },
    p(r, [i]) {
      /*isVisible*/
      r[0] ? l ? (l.p(r, i), i & /*isVisible*/
      1 && w(l, 1)) : (l = Vo(r), l.c(), w(l, 1), l.m(t.parentNode, t)) : l && (ie(), q(l, 1, 1, () => {
        l = null;
      }), oe());
    },
    i(r) {
      n || (w(l), n = !0);
    },
    o(r) {
      q(l), n = !1;
    },
    d(r) {
      l && l.d(r), r && N(t);
    }
  };
}
function Xo(e) {
  let t = /* @__PURE__ */ new Date();
  t.setTime(Date.parse(e)), console.log("format:", e, Date.parse(e));
  const l = (/* @__PURE__ */ new Date()).getTime() - t.getTime(), r = Math.floor(l / 6e4), i = Math.floor(l / 36e5), o = Math.floor(l / 864e5);
  return r < 1 ? "Just now" : r < 60 ? `${r}m ago` : i < 24 ? `${i}h ago` : `${o}d ago`;
}
function e1(e, t, n) {
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
class Yo extends we {
  constructor(t) {
    super(), pe(this, t, e1, $0, ke, {
      isVisible: 0,
      history: 1,
      onClose: 2,
      onSelect: 3,
      position: 5
    });
  }
}
function Uo(e, t = []) {
  let n = 1, l = `Group ${n}`;
  for (; cr(e, l); )
    n += 1, l = `Group ${n}`;
  return Fn(e, [...t, l], {});
}
function Ya(e, t = []) {
  let n = 1, l = `Query${n}`;
  for (; cr(e, l); )
    n += 1, l = `Query${n}`;
  return {
    contents: Fn(e, [...t, l], ""),
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
function Fn(e, t, n) {
  if (t.length > 1) {
    let l = Fn(e[t[0]], t.slice(1), n);
    return { ...e, [t[0]]: l };
  }
  return {
    ...Object.fromEntries(
      Object.entries(e).filter((l) => l[0] != t[0])
    ),
    [t[0]]: n
  };
}
function Ua(e, t, n) {
  if (t.length > 1) {
    let l = Ua(
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
function Or(e) {
  return e.search(/[^A-Za-z0-9_]/) < 0 && e.search(/^[0-9]/) < 0;
}
function Yr(e, t) {
  return t.length > 1 ? typeof e[t[0]] == "object" && Yr(e[t[0]], t.slice(1)) : e[t[0]] !== void 0;
}
function cr(e, t) {
  if (typeof e[t] == "string")
    return !0;
  for (let n of Object.keys(e))
    if (typeof e[n] == "object" && cr(e[n], t))
      return !0;
  return !1;
}
function Ur(e, t = []) {
  if (t.length > 1) {
    let r = Ur(e[t[0]], t.slice(1));
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
function On(e, t) {
  return t.length > 1 ? On(e[t[0]], t.slice(1)) : e[t[0]];
}
function Ja(e, t, n) {
  let l = On(e, t), r = ur(e, t);
  return Fn(r, n, l);
}
function t1(e) {
  let t, n, l, r, i;
  const o = [i1, r1, l1], a = [];
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
      t = p("div"), l && l.c(), g(t, "class", r = "h-full " + /*scrollable*/
      (e[7] ? "overflow-auto" : ""));
    },
    m(s, u) {
      R(s, t, u), ~n && a[n].m(t, null), i = !0;
    },
    p(s, u) {
      let c = n;
      n = f(s), n === c ? ~n && a[n].p(s, u) : (l && (ie(), q(a[c], 1, 1, () => {
        a[c] = null;
      }), oe()), ~n ? (l = a[n], l ? l.p(s, u) : (l = a[n] = o[n](s), l.c()), w(l, 1), l.m(t, null)) : l = null), (!i || u & /*scrollable*/
      128 && r !== (r = "h-full " + /*scrollable*/
      (s[7] ? "overflow-auto" : ""))) && g(t, "class", r);
    },
    i(s) {
      i || (w(l), i = !0);
    },
    o(s) {
      q(l), i = !1;
    },
    d(s) {
      s && N(t), ~n && a[n].d();
    }
  };
}
function n1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b, h;
  return o = new ce({
    props: { icon: va, class: "inline mr-2" }
  }), u = new ce({
    props: {
      icon: wa,
      class: "inline mr-2"
    }
  }), {
    c() {
      t = p("div"), n = p("textarea"), l = P(), r = p("div"), i = p("button"), Y(o.$$.fragment), a = V(`
          History`), f = P(), s = p("button"), Y(u.$$.fragment), c = V(`
          Ask AI`), g(n, "class", "w-full h-full p-4 pb-16 bg-transparent text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none overflow-hidden min-h-[120px] relative z-20"), g(n, "placeholder", "Ask me to generate, update, or explain a TempoQL query..."), n.disabled = /*isLoading*/
      e[2], g(n, "rows", "5"), g(i, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), g(i, "title", "View query history"), g(s, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50"), s.disabled = d = !/*question*/
      e[0].trim() || /*isLoading*/
      e[2], g(r, "class", "absolute right-0 bottom-0 mr-4 mb-4 flex justify-end items-center gap-2 z-50"), g(t, "class", "relative w-full min-h-0 flex-auto");
    },
    m(y, C) {
      R(y, t, C), _(t, n), e[20](n), He(
        n,
        /*question*/
        e[0]
      ), _(t, l), _(t, r), _(r, i), K(o, i, null), _(i, a), _(r, f), _(r, s), K(u, s, null), _(s, c), m = !0, b || (h = [
        W(
          n,
          "input",
          /*textarea_input_handler*/
          e[21]
        ),
        W(
          n,
          "keydown",
          /*handleKeydown*/
          e[13]
        ),
        W(i, "click", function() {
          Ye(
            /*onHistoryClick*/
            e[8]
          ) && e[8].apply(this, arguments);
        }),
        W(
          s,
          "click",
          /*click_handler_2*/
          e[22]
        )
      ], b = !0);
    },
    p(y, C) {
      e = y, (!m || C & /*isLoading*/
      4) && (n.disabled = /*isLoading*/
      e[2]), C & /*question*/
      1 && He(
        n,
        /*question*/
        e[0]
      ), (!m || C & /*question, isLoading*/
      5 && d !== (d = !/*question*/
      e[0].trim() || /*isLoading*/
      e[2])) && (s.disabled = d);
    },
    i(y) {
      m || (w(o.$$.fragment, y), w(u.$$.fragment, y), m = !0);
    },
    o(y) {
      q(o.$$.fragment, y), q(u.$$.fragment, y), m = !1;
    },
    d(y) {
      y && N(t), e[20](null), X(o), X(u), b = !1, ve(h);
    }
  };
}
function l1(e) {
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
      t = p("div"), n = p("div"), Y(l.$$.fragment), g(n, "class", "text-gray-700 dark:text-gray-200 text-sm leading-relaxed prose prose-sm max-w-none"), g(t, "class", "flex-1 overflow-y-auto ai-scrollbar");
    },
    m(i, o) {
      R(i, t, o), _(t, n), K(l, n, null), r = !0;
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
      q(l.$$.fragment, i), r = !1;
    },
    d(i) {
      i && N(t), X(l);
    }
  };
}
function r1(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = p("div"), n = p("h3"), n.textContent = "Error", l = P(), r = p("div"), i = V(
        /*error*/
        e[3]
      ), g(n, "class", "text-lg font-medium text-red-700 dark:text-red-100 mb-2"), g(r, "class", "text-sm font-mono text-gray-800 dark:text-gray-100"), g(t, "class", "bg-red-50 dark:bg-red-800/40 rounded-lg border border-red-200 dark:border-red-400 p-4 mb-4");
    },
    m(o, a) {
      R(o, t, a), _(t, n), _(t, l), _(t, r), _(r, i);
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
      o && N(t);
    }
  };
}
function i1(e) {
  let t;
  return {
    c() {
      t = p("h4"), t.innerHTML = `<span class="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 dark:border-blue-400"></span>
           AI is thinking...`, g(t, "class", "text-blue-600 dark:text-blue-400 font-medium text-sm");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: Z,
    i: Z,
    o: Z,
    d(n) {
      n && N(t);
    }
  };
}
function o1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b, h, y, C, k, v, z, L, D, B, O, E, A;
  C = new ce({
    props: {
      icon: (
        /*apiStatusInfo*/
        e[11].icon
      ),
      class: "inline mr-2"
    }
  });
  const S = [n1, t1], T = [];
  function ne(j, Q) {
    return (
      /*tab*/
      j[9] == "query" ? 0 : 1
    );
  }
  return L = ne(e), D = T[L] = S[L](e), {
    c() {
      t = p("div"), n = p("div"), l = p("h3"), l.textContent = "AI Assistant", r = P(), i = p("button"), o = V("Question"), f = P(), s = p("button"), u = V("Answer"), m = P(), b = p("div"), h = P(), y = p("div"), Y(C.$$.fragment), k = P(), v = V(
        /*apiStatus*/
        e[5]
      ), z = P(), D.c(), g(l, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100 pr-2"), g(i, "class", a = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*tab*/
      (e[9] === "query" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800")), g(i, "type", "button"), g(s, "class", c = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 disabled:opacity-50 " + /*tab*/
      (e[9] === "response" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800")), s.disabled = d = !/*llmResponse*/
      e[4] && !/*error*/
      e[3], g(s, "type", "button"), g(b, "class", "flex-auto"), g(y, "class", "flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"), g(n, "class", "flex items-center mb-4 gap-2 shrink-0"), g(t, "class", B = "px-4 pb-2 " + /*width*/
      e[6] + " h-full flex flex-col");
    },
    m(j, Q) {
      R(j, t, Q), _(t, n), _(n, l), _(n, r), _(n, i), _(i, o), _(n, f), _(n, s), _(s, u), _(n, m), _(n, b), _(n, h), _(n, y), K(C, y, null), _(y, k), _(y, v), _(t, z), T[L].m(t, null), O = !0, E || (A = [
        W(
          i,
          "click",
          /*click_handler*/
          e[18]
        ),
        W(
          s,
          "click",
          /*click_handler_1*/
          e[19]
        )
      ], E = !0);
    },
    p(j, [Q]) {
      (!O || Q & /*tab*/
      512 && a !== (a = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 " + /*tab*/
      (j[9] === "query" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"))) && g(i, "class", a), (!O || Q & /*tab*/
      512 && c !== (c = "px-4 py-1 font-semibold rounded-md transition-colors duration-200 disabled:opacity-50 " + /*tab*/
      (j[9] === "response" ? "bg-gray-600 text-white dark:bg-gray-200 dark:text-gray-800" : "dark:text-white bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"))) && g(s, "class", c), (!O || Q & /*llmResponse, error*/
      24 && d !== (d = !/*llmResponse*/
      j[4] && !/*error*/
      j[3])) && (s.disabled = d);
      const H = {};
      Q & /*apiStatusInfo*/
      2048 && (H.icon = /*apiStatusInfo*/
      j[11].icon), C.$set(H), (!O || Q & /*apiStatus*/
      32) && ae(
        v,
        /*apiStatus*/
        j[5]
      );
      let U = L;
      L = ne(j), L === U ? T[L].p(j, Q) : (ie(), q(T[U], 1, 1, () => {
        T[U] = null;
      }), oe(), D = T[L], D ? D.p(j, Q) : (D = T[L] = S[L](j), D.c()), w(D, 1), D.m(t, null)), (!O || Q & /*width*/
      64 && B !== (B = "px-4 pb-2 " + /*width*/
      j[6] + " h-full flex flex-col")) && g(t, "class", B);
    },
    i(j) {
      O || (w(C.$$.fragment, j), w(D), O = !0);
    },
    o(j) {
      q(C.$$.fragment, j), q(D), O = !1;
    },
    d(j) {
      j && N(t), X(C), T[L].d(), E = !1, ve(A);
    }
  };
}
function a1(e, t, n) {
  let l, { onSubmit: r = () => {
  } } = t, { onRun: i = () => {
  } } = t, { isLoading: o = !1 } = t, { error: a = "" } = t, { llmResponse: f = "" } = t, { apiStatus: s = "Checking API connection..." } = t, { width: u = "w-full" } = t, { scrollable: c = !0 } = t, { extractedQuery: d = "" } = t, { hasExtractedQuery: m = !1 } = t, { onQueryExtracted: b = () => {
  } } = t, { onHistoryClick: h = () => {
  } } = t, y = "query", { question: C = "" } = t, k;
  function v() {
    C.trim() && (r(C.trim()), k && k.focus());
  }
  function z(S) {
    S.key === "Enter" && !S.shiftKey && (S.preventDefault(), v());
  }
  function L(S) {
    return S.includes("Configured") || S.includes("ready") ? {
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      icon: Sf
    } : S.includes("Not configured") || S.includes("Invalid") ? {
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      icon: If
    } : {
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      icon: Qf
    };
  }
  const D = () => n(9, y = "query"), B = () => n(9, y = "response");
  function O(S) {
    Ce[S ? "unshift" : "push"](() => {
      k = S, n(10, k);
    });
  }
  function E() {
    C = this.value, n(0, C);
  }
  const A = () => {
    v(), n(9, y = "response");
  };
  return e.$$set = (S) => {
    "onSubmit" in S && n(14, r = S.onSubmit), "onRun" in S && n(1, i = S.onRun), "isLoading" in S && n(2, o = S.isLoading), "error" in S && n(3, a = S.error), "llmResponse" in S && n(4, f = S.llmResponse), "apiStatus" in S && n(5, s = S.apiStatus), "width" in S && n(6, u = S.width), "scrollable" in S && n(7, c = S.scrollable), "extractedQuery" in S && n(15, d = S.extractedQuery), "hasExtractedQuery" in S && n(16, m = S.hasExtractedQuery), "onQueryExtracted" in S && n(17, b = S.onQueryExtracted), "onHistoryClick" in S && n(8, h = S.onHistoryClick), "question" in S && n(0, C = S.question);
  }, e.$$.update = () => {
    e.$$.dirty & /*hasExtractedQuery, extractedQuery, onQueryExtracted*/
    229376 && m && d && (console.log("🤖 AIAssistant: Query extracted, triggering handler:", d), b()), e.$$.dirty & /*apiStatus*/
    32 && n(11, l = L(s));
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
    v,
    z,
    r,
    d,
    m,
    b,
    D,
    B,
    O,
    E,
    A
  ];
}
class f1 extends we {
  constructor(t) {
    super(), pe(this, t, a1, o1, ke, {
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
const Jo = [
  "now",
  "value",
  "mintime",
  "maxtime",
  "indexvalue"
];
function s1(e, t, n) {
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
    const i = r.toLowerCase(), o = Jo.filter((s) => s.toLowerCase().startsWith(i)).sort((s, u) => s.length - u.length), a = Jo.filter((s) => {
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
function Zo(e, t, n) {
  const l = e.slice();
  return l[36] = t[n], l[38] = n, l;
}
function $o(e) {
  let t, n = (
    /*autocompleteOptions*/
    e[7]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = ea(Zo(e, n, r));
  return {
    c() {
      t = p("div");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      g(t, "class", "absolute z-30 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-xl max-h-48 overflow-y-auto");
    },
    m(r, i) {
      R(r, t, i);
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(t, null);
      e[26](t);
    },
    p(r, i) {
      if (i[0] & /*selectedIndex, selectAutocompleteOption, autocompleteOptions*/
      8576) {
        n = /*autocompleteOptions*/
        r[7];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = Zo(r, n, o);
          l[o] ? l[o].p(a, i) : (l[o] = ea(a), l[o].c(), l[o].m(t, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = n.length;
      }
    },
    d(r) {
      r && N(t), Oe(l, r), e[26](null);
    }
  };
}
function ea(e) {
  let t, n, l, r = (
    /*option*/
    e[36].value + ""
  ), i, o, a, f = (
    /*option*/
    e[36].type === "data_item" ? "field" : "const"
  ), s, u, c, d, m;
  function b() {
    return (
      /*click_handler*/
      e[23](
        /*option*/
        e[36]
      )
    );
  }
  function h(...C) {
    return (
      /*keydown_handler*/
      e[24](
        /*option*/
        e[36],
        ...C
      )
    );
  }
  function y() {
    return (
      /*mouseenter_handler*/
      e[25](
        /*index*/
        e[38]
      )
    );
  }
  return {
    c() {
      t = p("div"), n = p("div"), l = p("span"), i = V(r), o = P(), a = p("span"), s = V(f), u = P(), g(l, "class", "font-mono text-sm"), g(a, "class", "text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"), g(n, "class", "flex items-center justify-between"), g(t, "class", c = "px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors " + /*index*/
      (e[38] === /*selectedIndex*/
      e[8] ? "bg-blue-600 text-white" : "text-gray-700 dark:text-gray-200")), g(t, "role", "button"), g(t, "tabindex", "0");
    },
    m(C, k) {
      R(C, t, k), _(t, n), _(n, l), _(l, i), _(n, o), _(n, a), _(a, s), _(t, u), d || (m = [
        W(t, "click", b),
        W(t, "keydown", h),
        W(t, "mouseenter", y)
      ], d = !0);
    },
    p(C, k) {
      e = C, k[0] & /*autocompleteOptions*/
      128 && r !== (r = /*option*/
      e[36].value + "") && ae(i, r), k[0] & /*autocompleteOptions*/
      128 && f !== (f = /*option*/
      e[36].type === "data_item" ? "field" : "const") && ae(s, f), k[0] & /*selectedIndex*/
      256 && c !== (c = "px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors " + /*index*/
      (e[38] === /*selectedIndex*/
      e[8] ? "bg-blue-600 text-white" : "text-gray-700 dark:text-gray-200")) && g(t, "class", c);
    },
    d(C) {
      C && N(t), d = !1, ve(m);
    }
  };
}
function ta(e) {
  let t, n, l, r, i, o;
  return n = new ce({
    props: { icon: Mf, class: "inline mr-2" }
  }), {
    c() {
      t = p("button"), Y(n.$$.fragment), l = V(`
          Save As...`), g(t, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), g(t, "title", "Save this query to a new variable (Ctrl+S)");
    },
    m(a, f) {
      R(a, t, f), K(n, t, null), _(t, l), r = !0, i || (o = W(
        t,
        "click",
        /*saveAs*/
        e[14]
      ), i = !0);
    },
    p: Z,
    i(a) {
      r || (w(n.$$.fragment, a), r = !0);
    },
    o(a) {
      q(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && N(t), X(n), i = !1, o();
    }
  };
}
function u1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b, h, y, C = (
    /*allowSave*/
    e[3] ? "Save and Run" : "Run Query"
  ), k, v, z, L, D, B = (
    /*showAutocomplete*/
    e[9] && /*autocompleteOptions*/
    e[7].length > 0 && $o(e)
  );
  u = new ce({
    props: { icon: va, class: "inline mr-2" }
  });
  let O = (
    /*allowSave*/
    e[3] && ta(e)
  );
  return h = new ce({
    props: { icon: Ca, class: "inline mr-2" }
  }), {
    c() {
      t = p("div"), n = p("div"), l = p("textarea"), r = P(), i = p("div"), o = P(), B && B.c(), a = P(), f = p("div"), s = p("button"), Y(u.$$.fragment), c = V(`
        History`), d = P(), O && O.c(), m = P(), b = p("button"), Y(h.$$.fragment), y = P(), k = V(C), g(l, "id", "text-input"), g(l, "class", "w-full h-full p-4 pb-16 bg-transparent font-mono text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400 resize-none overflow-hidden min-h-[40px] relative z-20 svelte-1w5ogy4"), g(l, "placeholder", "// Write your TempoQL query here... (Ctrl+Z to undo, Ctrl+Y to redo)"), g(l, "autocomplete", "false"), g(l, "autocapitalize", "false"), g(l, "autocorrect", "false"), g(l, "spellcheck", "false"), g(l, "rows", "1"), re(l, "color", "transparent"), re(l, "caret-color", "currentColor"), g(i, "class", "absolute top-0 left-0 w-full h-full p-4 pb-16 font-mono text-sm pointer-events-none bg-transparent z-10 text-wrap whitespace-pre-wrap break-words text-gray-900 dark:text-gray-100 svelte-1w5ogy4"), g(
        i,
        "id",
        /*highlightedViewID*/
        e[10]
      ), g(s, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-200/50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), g(s, "title", "View query history"), g(b, "class", "px-4 py-1 font-semibold rounded-md transition-colors duration-200 bg-blue-600 hover:bg-blue-500 text-white"), b.disabled = v = !/*value*/
      e[0].trim(), g(b, "title", "Run the query on the dataset (Ctrl+Shift+Enter)"), fe(b, "opacity-50", !/*value*/
      e[0].trim()), fe(b, "cursor-not-allowed", !/*value*/
      e[0].trim()), g(f, "class", "absolute right-0 bottom-0 mr-4 mb-4 flex justify-end items-center gap-2 z-50"), g(n, "class", "relative flex-auto min-h-0"), g(t, "class", "flex flex-col w-full h-full px-4 mb-2");
    },
    m(E, A) {
      R(E, t, A), _(t, n), _(n, l), e[20](l), He(
        l,
        /*value*/
        e[0]
      ), _(n, r), _(n, i), e[22](i), _(n, o), B && B.m(n, null), _(n, a), _(n, f), _(f, s), K(u, s, null), _(s, c), _(f, d), O && O.m(f, null), _(f, m), _(f, b), K(h, b, null), _(b, y), _(b, k), z = !0, L || (D = [
        W(
          l,
          "input",
          /*textarea_1_input_handler*/
          e[21]
        ),
        W(
          l,
          "input",
          /*handleInput*/
          e[11]
        ),
        W(
          l,
          "keydown",
          /*handleKeydown*/
          e[12]
        ),
        W(s, "click", function() {
          Ye(
            /*onHistoryClick*/
            e[2]
          ) && e[2].apply(this, arguments);
        }),
        W(b, "click", function() {
          Ye(
            /*onRun*/
            e[1]
          ) && e[1].apply(this, arguments);
        })
      ], L = !0);
    },
    p(E, A) {
      e = E, A[0] & /*value*/
      1 && He(
        l,
        /*value*/
        e[0]
      ), /*showAutocomplete*/
      e[9] && /*autocompleteOptions*/
      e[7].length > 0 ? B ? B.p(e, A) : (B = $o(e), B.c(), B.m(n, a)) : B && (B.d(1), B = null), /*allowSave*/
      e[3] ? O ? (O.p(e, A), A[0] & /*allowSave*/
      8 && w(O, 1)) : (O = ta(e), O.c(), w(O, 1), O.m(f, m)) : O && (ie(), q(O, 1, 1, () => {
        O = null;
      }), oe()), (!z || A[0] & /*allowSave*/
      8) && C !== (C = /*allowSave*/
      e[3] ? "Save and Run" : "Run Query") && ae(k, C), (!z || A[0] & /*value*/
      1 && v !== (v = !/*value*/
      e[0].trim())) && (b.disabled = v), (!z || A[0] & /*value*/
      1) && fe(b, "opacity-50", !/*value*/
      e[0].trim()), (!z || A[0] & /*value*/
      1) && fe(b, "cursor-not-allowed", !/*value*/
      e[0].trim());
    },
    i(E) {
      z || (w(u.$$.fragment, E), w(O), w(h.$$.fragment, E), z = !0);
    },
    o(E) {
      q(u.$$.fragment, E), q(O), q(h.$$.fragment, E), z = !1;
    },
    d(E) {
      E && N(t), e[20](null), e[22](null), B && B.d(), X(u), O && O.d(), X(h), L = !1, ve(D);
    }
  };
}
function c1(e, t, n) {
  let { value: l = "" } = t, { onInput: r = () => {
  } } = t, { width: i = "w-full max-w-2xl" } = t, { dataFields: o = [] } = t, { onRun: a = () => {
  } } = t, { onSaveAs: f = () => {
  } } = t, { onExplain: s = () => {
  } } = t, { onHistoryClick: u = () => {
  } } = t, { allowSave: c = !1 } = t, d, m, b, h = [], y = 0, C = !1, k = 0, v = "highlightView-" + new Array(20).fill(0).map(() => Math.floor(Math.random() * 10)).join(""), z = [], L = -1, D = !1;
  vt(() => {
    O(""), document.addEventListener("click", B);
  }), ka(() => {
    document.removeEventListener("click", B);
  });
  function B(I) {
    if (m && d) {
      const G = I.target, le = m.contains(G), ee = d.contains(G);
      (!le || ee && C) && (console.log("🖱️ Click detected - closing autocomplete"), n(9, C = !1));
    }
  }
  function O(I) {
    if (D) {
      D = !1;
      return;
    }
    z = z.slice(0, L + 1), z.push(I), L = z.length - 1, z.length > 50 && (z = z.slice(-50), L = z.length - 1), console.log("📝 Added to history:", I, "Index:", L);
  }
  function E() {
    if (L > 0) {
      D = !0, L--;
      const I = z[L];
      console.log("↶ Undo to:", I), n(0, l = I), r(I), d && (n(4, d.value = I, d), d.focus());
    }
  }
  function A() {
    if (L < z.length - 1) {
      D = !0, L++;
      const I = z[L];
      console.log("↷ Redo to:", I), n(0, l = I), r(I), d && (n(4, d.value = I, d), d.focus());
    }
  }
  function S(I) {
    const G = I.target, le = G.value;
    O(le), n(0, l = le), r(le), k = G.selectionStart || 0, T(le, k);
  }
  function T(I, G) {
    const le = I.substring(0, G);
    I.substring(G);
    const ee = le.match(/([^\s]*)$/), de = ee ? ee[1] : "";
    de.length > 0 ? (n(7, h = s1(o, de, le)), n(9, C = h.length > 0), n(8, y = 0)) : n(9, C = !1);
  }
  function ne(I) {
    if (I.ctrlKey || I.metaKey)
      if (I.key === "z" && !I.shiftKey) {
        I.preventDefault(), E();
        return;
      } else if (I.key === "y" || I.key === "z" && I.shiftKey) {
        I.preventDefault(), A();
        return;
      } else if (I.key === "Enter" && I.shiftKey) {
        I.preventDefault(), a();
        return;
      } else
        I.key === "s" && !I.shiftKey && c && (I.preventDefault(), Q());
    if (C)
      switch (I.key) {
        case "ArrowDown":
          I.preventDefault(), n(8, y = (y + 1) % h.length);
          break;
        case "ArrowUp":
          I.preventDefault(), n(8, y = y === 0 ? h.length - 1 : y - 1);
          break;
        case "Enter":
          C && (I.preventDefault(), j(h[y]));
          break;
        case "Escape":
          n(9, C = !1);
          break;
        case "Tab":
          C && (I.preventDefault(), j(h[y]));
          break;
      }
  }
  function j(I) {
    const G = l.substring(0, k), le = l.substring(k), ee = G.match(/([^\s]*)$/), de = ee ? ee[1] : "", Ee = G.length - de.length;
    let ze;
    if (I.type === "data_item")
      if (de.includes("{")) {
        const x = G.match(/\{([^}]*?)(?:,\s*([^},]*))?$/);
        x ? x[2] ? ze = G.substring(0, x.index + x[1].length + 2) + I.value : ze = G.substring(0, x.index + 1) + I.value : ze = G + I.value;
      } else
        ze = G + "{" + I.value;
    else
      ze = G.substring(0, Ee) + "#" + I.value;
    const Ae = ze + le;
    n(0, l = Ae), r(Ae);
    const Te = ze.length;
    setTimeout(
      () => {
        d && (d.setSelectionRange(Te, Te), d.focus());
      },
      0
    ), n(9, C = !1);
  }
  function Q() {
    let I = prompt("Choose a name for the new variable:");
    I && f(I);
  }
  function H(I) {
    Ce[I ? "unshift" : "push"](() => {
      d = I, n(4, d), n(0, l);
    });
  }
  function U() {
    l = this.value, n(0, l);
  }
  function he(I) {
    Ce[I ? "unshift" : "push"](() => {
      b = I, n(5, b), n(0, l), n(10, v);
    });
  }
  const te = (I) => j(I), ue = (I, G) => {
    (G.key === "Enter" || G.key === " ") && (G.preventDefault(), j(I));
  }, be = (I) => n(8, y = I);
  function se(I) {
    Ce[I ? "unshift" : "push"](() => {
      m = I, n(6, m);
    });
  }
  return e.$$set = (I) => {
    "value" in I && n(0, l = I.value), "onInput" in I && n(15, r = I.onInput), "width" in I && n(16, i = I.width), "dataFields" in I && n(17, o = I.dataFields), "onRun" in I && n(1, a = I.onRun), "onSaveAs" in I && n(18, f = I.onSaveAs), "onExplain" in I && n(19, s = I.onExplain), "onHistoryClick" in I && n(2, u = I.onHistoryClick), "allowSave" in I && n(3, c = I.allowSave);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*highlightedView, value*/
    33 && b && l !== void 0) {
      let I = l;
      n(5, b.innerText = Ka(I), b), Va({
        selector: `#${v}`,
        patterns: Wa
      });
    }
    e.$$.dirty[0] & /*textarea, value*/
    17 && d && l !== void 0 && d.value !== l && (n(4, d.value = l, d), O(l));
  }, [
    l,
    a,
    u,
    c,
    d,
    b,
    m,
    h,
    y,
    C,
    v,
    S,
    ne,
    j,
    Q,
    r,
    i,
    o,
    f,
    s,
    H,
    U,
    he,
    te,
    ue,
    be,
    se
  ];
}
class d1 extends we {
  constructor(t) {
    super(), pe(
      this,
      t,
      c1,
      u1,
      ke,
      {
        value: 0,
        onInput: 15,
        width: 16,
        dataFields: 17,
        onRun: 1,
        onSaveAs: 18,
        onExplain: 19,
        onHistoryClick: 2,
        allowSave: 3
      },
      null,
      [-1, -1]
    );
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(t) {
    this.$$set({ value: t }), Ge();
  }
  get onInput() {
    return this.$$.ctx[15];
  }
  set onInput(t) {
    this.$$set({ onInput: t }), Ge();
  }
  get width() {
    return this.$$.ctx[16];
  }
  set width(t) {
    this.$$set({ width: t }), Ge();
  }
  get dataFields() {
    return this.$$.ctx[17];
  }
  set dataFields(t) {
    this.$$set({ dataFields: t }), Ge();
  }
  get onRun() {
    return this.$$.ctx[1];
  }
  set onRun(t) {
    this.$$set({ onRun: t }), Ge();
  }
  get onSaveAs() {
    return this.$$.ctx[18];
  }
  set onSaveAs(t) {
    this.$$set({ onSaveAs: t }), Ge();
  }
  get onExplain() {
    return this.$$.ctx[19];
  }
  set onExplain(t) {
    this.$$set({ onExplain: t }), Ge();
  }
  get onHistoryClick() {
    return this.$$.ctx[2];
  }
  set onHistoryClick(t) {
    this.$$set({ onHistoryClick: t }), Ge();
  }
  get allowSave() {
    return this.$$.ctx[3];
  }
  set allowSave(t) {
    this.$$set({ allowSave: t }), Ge();
  }
}
function Zt(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object) || e.constructor !== t.constructor)
    return !1;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      if (!t.hasOwnProperty(n))
        return !1;
      if (e[n] !== t[n] && (typeof e[n] != "object" || !Zt(e[n], t[n])))
        return !1;
    }
  for (n in t)
    if (t.hasOwnProperty(n) && !e.hasOwnProperty(n))
      return !1;
  return !0;
}
function na(e, t, n) {
  const l = e.slice();
  return l[50] = t[n][0], l[51] = t[n][1], l[53] = n, l;
}
function la(e) {
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
          b1,
          ({ hovering: a }) => ({ 54: a }),
          ({ hovering: a }) => [0, a ? 8388608 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      t = p("div"), Y(n.$$.fragment), g(t, "class", l = "w-full cursor-pointer select-none " + (!/*collapsed*/
      e[16] && /*itemCount*/
      e[17] > 0 || /*collapsed*/
      (e[16] || /*itemCount*/
      e[17] == 0) && /*showBorder*/
      e[10] ? "border-b border-gray-200 dark:border-gray-700" : "")), g(t, "draggable", "true");
    },
    m(a, f) {
      R(a, t, f), K(n, t, null), r = !0, i || (o = [
        W(t, "dragover", Za),
        W(
          t,
          "drop",
          /*drop_handler*/
          e[33]
        ),
        W(t, "click", function() {
          Ye(
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
        W(
          t,
          "dragstart",
          /*dragstart_handler*/
          e[34]
        ),
        W(t, "dragenter", Re(tn(
          /*dragenter_handler*/
          e[35]
        ))),
        W(t, "dragleave", Re(
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
      r || (w(n.$$.fragment, a), r = !0);
    },
    o(a) {
      q(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && N(t), X(n), i = !1, ve(o);
    }
  };
}
function g1(e) {
  let t, n, l, r, i, o, a;
  return {
    c() {
      t = p("div"), n = V(
        /*name*/
        e[0]
      ), l = P(), r = p("span"), i = V("("), o = V(
        /*itemCount*/
        e[17]
      ), a = V(")"), g(r, "class", "text-xs text-gray-500"), g(t, "class", "font-semibold flex-auto py-0.5 truncate");
    },
    m(f, s) {
      R(f, t, s), _(t, n), _(t, l), _(t, r), _(r, i), _(r, o), _(r, a);
    },
    p(f, s) {
      s[0] & /*name*/
      1 && ae(
        n,
        /*name*/
        f[0]
      ), s[0] & /*itemCount*/
      131072 && ae(
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
function m1(e) {
  let t, n, l, r;
  return {
    c() {
      t = p("form"), n = p("input"), g(n, "type", "text"), g(n, "class", "flat-text-input w-full"), g(t, "class", "flex-auto");
    },
    m(i, o) {
      R(i, t, o), _(t, n), He(
        n,
        /*newName*/
        e[13]
      ), e[24](n), l || (r = [
        W(
          n,
          "input",
          /*input_input_handler*/
          e[23]
        ),
        W(
          n,
          "keydown",
          /*keydown_handler*/
          e[25]
        ),
        W(
          n,
          "blur",
          /*blur_handler*/
          e[26]
        ),
        W(t, "submit", Re(tn(
          /*submit_handler*/
          e[27]
        )))
      ], l = !0);
    },
    p(i, o) {
      o[0] & /*newName*/
      8192 && n.value !== /*newName*/
      i[13] && He(
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
function ra(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b, h, y, C, k, v, z;
  return n = new ce({
    props: { icon: Rt, class: "inline mr-2" }
  }), o = new ce({
    props: { icon: Rt, class: "inline mr-2" }
  }), c = new ce({
    props: { icon: Hr, class: "inline" }
  }), b = new ce({ props: { icon: rr } }), C = new ce({ props: { icon: Br } }), {
    c() {
      t = p("button"), Y(n.$$.fragment), l = V(`
          Group`), r = P(), i = p("button"), Y(o.$$.fragment), a = V(`
          Query`), f = P(), s = p("div"), u = p("button"), Y(c.$$.fragment), d = P(), m = p("button"), Y(b.$$.fragment), h = P(), y = p("button"), Y(C.$$.fragment), g(t, "class", "px-2 py-1 font-semibold text-xs rounded transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white whitespace-nowrap"), g(t, "title", "Create a new group"), g(i, "class", "px-2 py-1 font-semibold text-xs rounded transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white whitespace-nowrap"), g(i, "title", "Create a new query"), g(u, "class", "px-1 text-xs hover:opacity-50 dark:text-gray-100"), g(u, "title", "Rename this group"), g(m, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), g(m, "title", "Duplicate this group"), g(y, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), g(y, "title", "Delete this group"), g(s, "class", "flex items-center");
    },
    m(L, D) {
      R(L, t, D), K(n, t, null), _(t, l), R(L, r, D), R(L, i, D), K(o, i, null), _(i, a), R(L, f, D), R(L, s, D), _(s, u), K(c, u, null), _(s, d), _(s, m), K(b, m, null), _(s, h), _(s, y), K(C, y, null), k = !0, v || (z = [
        W(t, "click", Re(
          /*click_handler*/
          e[28]
        )),
        W(i, "click", Re(
          /*click_handler_1*/
          e[29]
        )),
        W(u, "click", Re(
          /*click_handler_2*/
          e[30]
        )),
        W(m, "click", Re(
          /*click_handler_3*/
          e[31]
        )),
        W(y, "click", Re(
          /*click_handler_4*/
          e[32]
        ))
      ], v = !0);
    },
    p: Z,
    i(L) {
      k || (w(n.$$.fragment, L), w(o.$$.fragment, L), w(c.$$.fragment, L), w(b.$$.fragment, L), w(C.$$.fragment, L), k = !0);
    },
    o(L) {
      q(n.$$.fragment, L), q(o.$$.fragment, L), q(c.$$.fragment, L), q(b.$$.fragment, L), q(C.$$.fragment, L), k = !1;
    },
    d(L) {
      L && N(t), X(n), L && N(r), L && N(i), X(o), L && N(f), L && N(s), X(c), X(b), X(C), v = !1, ve(z);
    }
  };
}
function b1(e) {
  let t, n, l, r, i, o, a;
  n = new ce({
    props: {
      icon: Ue,
      class: "inline-block w-3 h-3 shrink-0 text-sm opacity-70 " + /*collapsed*/
      (e[16] ? "-rotate-90" : "")
    }
  });
  function f(d, m) {
    return m[0] & /*editingPath, path*/
    4098 && (r = null), r == null && (r = !!Zt(
      /*editingPath*/
      d[12],
      /*path*/
      d[1]
    )), r ? m1 : g1;
  }
  let s = f(e, [-1, -1]), u = s(e), c = (
    /*hovering*/
    e[54] && ra(e)
  );
  return {
    c() {
      t = p("div"), Y(n.$$.fragment), l = P(), u.c(), i = P(), c && c.c(), o = _e(), g(t, "class", "w-4");
    },
    m(d, m) {
      R(d, t, m), K(n, t, null), R(d, l, m), u.m(d, m), R(d, i, m), c && c.m(d, m), R(d, o, m), a = !0;
    },
    p(d, m) {
      const b = {};
      m[0] & /*collapsed*/
      65536 && (b.class = "inline-block w-3 h-3 shrink-0 text-sm opacity-70 " + /*collapsed*/
      (d[16] ? "-rotate-90" : "")), n.$set(b), s === (s = f(d, m)) && u ? u.p(d, m) : (u.d(1), u = s(d), u && (u.c(), u.m(i.parentNode, i))), /*hovering*/
      d[54] ? c ? (c.p(d, m), m[1] & /*hovering*/
      8388608 && w(c, 1)) : (c = ra(d), c.c(), w(c, 1), c.m(o.parentNode, o)) : c && (ie(), q(c, 1, 1, () => {
        c = null;
      }), oe());
    },
    i(d) {
      a || (w(n.$$.fragment, d), w(c), a = !0);
    },
    o(d) {
      q(n.$$.fragment, d), q(c), a = !1;
    },
    d(d) {
      d && N(t), X(n), d && N(l), u.d(d), d && N(i), c && c.d(d), d && N(o);
    }
  };
}
function ia(e) {
  let t, n, l = Object.entries(
    /*queries*/
    e[2]
  ).sort(sa), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = aa(na(e, l, o));
  const i = (o) => q(r[o], 1, 1, () => {
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
      R(o, t, a), n = !0;
    },
    p(o, a) {
      if (a[0] & /*itemCount, showBorder, draggingCounter, draggingInto, onSelect, path, queries, handleDrop, indentLevel, deleteItem, onDuplicate, editingPath, onMove, newName, editBox, onNewQuery, onNewGroup, onDelete*/
      1769470 | a[1] & /*hovering*/
      8388608) {
        l = Object.entries(
          /*queries*/
          o[2]
        ).sort(sa);
        let f;
        for (f = 0; f < l.length; f += 1) {
          const s = na(o, l, f);
          r[f] ? (r[f].p(s, a), w(r[f], 1)) : (r[f] = aa(s), r[f].c(), w(r[f], 1), r[f].m(t.parentNode, t));
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
        q(r[a]);
      n = !1;
    },
    d(o) {
      Oe(r, o), o && N(t);
    }
  };
}
function _1(e) {
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
      Y(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
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
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function h1(e) {
  let t, n, l, r, i, o, a;
  n = new or({
    props: {
      class: "block w-full flex items-center gap-2 pr-4 py-2.5 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100 text-gray-900",
      style: "padding-left: " + (-0.5 + /*indentLevel*/
      (e[3] + 1) * 1.5) + "rem;",
      $$slots: {
        default: [
          p1,
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
      t = p("div"), Y(n.$$.fragment), l = P(), g(t, "class", r = "w-full cursor-pointer select-none " + /*i*/
      (e[53] < /*itemCount*/
      e[17] - 1 || /*showBorder*/
      e[10] ? "border-b border-gray-200 dark:border-gray-700" : "")), g(t, "draggable", "true");
    },
    m(u, c) {
      R(u, t, c), K(n, t, null), _(t, l), i = !0, o || (a = [
        W(t, "click", function() {
          Ye(
            /*draggingCounter*/
            e[15] > 0 || /*draggingInto*/
            e[11] ? void 0 : f
          ) && /*draggingCounter*/
          (e[15] > 0 || /*draggingInto*/
          e[11] ? void 0 : f).apply(this, arguments);
        }),
        W(t, "dragstart", s),
        W(t, "dragover", Za),
        W(
          t,
          "drop",
          /*drop_handler_1*/
          e[47]
        ),
        W(t, "dragenter", Re(tn(
          /*dragenter_handler_1*/
          e[48]
        ))),
        W(t, "dragleave", Re(
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
      i || (w(n.$$.fragment, u), i = !0);
    },
    o(u) {
      q(n.$$.fragment, u), i = !1;
    },
    d(u) {
      u && N(t), X(n), o = !1, ve(a);
    }
  };
}
function y1(e) {
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
      t = p("div"), l = V(n), r = V(`  
              `), i = p("span"), a = V(o), g(i, "class", "font-normal font-mono text-gray-600 dark:text-gray-400"), g(t, "class", "font-semibold whitespace-nowrap flex-auto truncate"), g(t, "title", f = /*key*/
      e[50]);
    },
    m(s, u) {
      R(s, t, u), _(t, l), _(t, r), _(t, i), _(i, a);
    },
    p(s, u) {
      u[0] & /*queries*/
      4 && n !== (n = /*key*/
      s[50] + "") && ae(l, n), u[0] & /*queries*/
      4 && o !== (o = /*value*/
      s[51].replace(`
`, " ") + "") && ae(a, o), u[0] & /*queries*/
      4 && f !== (f = /*key*/
      s[50]) && g(t, "title", f);
    },
    d(s) {
      s && N(t);
    }
  };
}
function k1(e) {
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
      t = p("form"), n = p("input"), g(n, "type", "text"), g(n, "class", "flat-text-input w-full"), g(t, "class", "flex-auto");
    },
    m(a, f) {
      R(a, t, f), _(t, n), He(
        n,
        /*newName*/
        e[13]
      ), e[38](n), l || (r = [
        W(
          n,
          "input",
          /*input_input_handler_1*/
          e[37]
        ),
        W(
          n,
          "keydown",
          /*keydown_handler_1*/
          e[39]
        ),
        W(n, "blur", i),
        W(t, "submit", Re(tn(o)))
      ], l = !0);
    },
    p(a, f) {
      e = a, f[0] & /*newName*/
      8192 && n.value !== /*newName*/
      e[13] && He(
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
function oa(e) {
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
      t = p("div"), n = p("button"), Y(l.$$.fragment), r = P(), i = p("button"), Y(o.$$.fragment), a = P(), f = p("button"), Y(s.$$.fragment), g(n, "class", "px-1 text-xs hover:opacity-50 dark:text-gray-100"), g(n, "title", "Rename this group"), g(i, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), g(i, "title", "Duplicate this query"), g(f, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), g(f, "title", "Delete this query"), g(t, "class", "flex items-center");
    },
    m(y, C) {
      R(y, t, C), _(t, n), K(l, n, null), _(t, r), _(t, i), K(o, i, null), _(t, a), _(t, f), K(s, f, null), u = !0, c || (d = [
        W(n, "click", Re(m)),
        W(i, "click", Re(b)),
        W(f, "click", Re(h))
      ], c = !0);
    },
    p(y, C) {
      e = y;
    },
    i(y) {
      u || (w(l.$$.fragment, y), w(o.$$.fragment, y), w(s.$$.fragment, y), u = !0);
    },
    o(y) {
      q(l.$$.fragment, y), q(o.$$.fragment, y), q(s.$$.fragment, y), u = !1;
    },
    d(y) {
      y && N(t), X(l), X(o), X(s), c = !1, ve(d);
    }
  };
}
function p1(e) {
  let t, n, l, r;
  function i(s, u) {
    return u[0] & /*editingPath, path, queries*/
    4102 && (t = null), t == null && (t = !!Zt(
      /*editingPath*/
      s[12],
      [
        .../*path*/
        s[1],
        /*key*/
        s[50]
      ]
    )), t ? k1 : y1;
  }
  let o = i(e, [-1, -1]), a = o(e), f = (
    /*hovering*/
    e[54] && oa(e)
  );
  return {
    c() {
      a.c(), n = P(), f && f.c(), l = _e();
    },
    m(s, u) {
      a.m(s, u), R(s, n, u), f && f.m(s, u), R(s, l, u), r = !0;
    },
    p(s, u) {
      o === (o = i(s, u)) && a ? a.p(s, u) : (a.d(1), a = o(s), a && (a.c(), a.m(n.parentNode, n))), /*hovering*/
      s[54] ? f ? (f.p(s, u), u[1] & /*hovering*/
      8388608 && w(f, 1)) : (f = oa(s), f.c(), w(f, 1), f.m(l.parentNode, l)) : f && (ie(), q(f, 1, 1, () => {
        f = null;
      }), oe());
    },
    i(s) {
      r || (w(f), r = !0);
    },
    o(s) {
      q(f), r = !1;
    },
    d(s) {
      a.d(s), s && N(n), f && f.d(s), s && N(l);
    }
  };
}
function aa(e) {
  let t, n, l, r;
  const i = [h1, _1], o = [];
  function a(f, s) {
    return typeof /*value*/
    f[51] == "string" ? 0 : 1;
  }
  return t = a(e), n = o[t] = i[t](e), {
    c() {
      n.c(), l = _e();
    },
    m(f, s) {
      o[t].m(f, s), R(f, l, s), r = !0;
    },
    p(f, s) {
      let u = t;
      t = a(f), t === u ? o[t].p(f, s) : (ie(), q(o[u], 1, 1, () => {
        o[u] = null;
      }), oe(), n = o[t], n ? n.p(f, s) : (n = o[t] = i[t](f), n.c()), w(n, 1), n.m(l.parentNode, l));
    },
    i(f) {
      r || (w(n), r = !0);
    },
    o(f) {
      q(n), r = !1;
    },
    d(f) {
      o[t].d(f), f && N(l);
    }
  };
}
function w1(e) {
  let t, n, l, r = (
    /*indentLevel*/
    e[3] > 0 && la(e)
  ), i = !/*collapsed*/
  e[16] && ia(e);
  return {
    c() {
      r && r.c(), t = P(), i && i.c(), n = _e();
    },
    m(o, a) {
      r && r.m(o, a), R(o, t, a), i && i.m(o, a), R(o, n, a), l = !0;
    },
    p(o, a) {
      /*indentLevel*/
      o[3] > 0 ? r ? (r.p(o, a), a[0] & /*indentLevel*/
      8 && w(r, 1)) : (r = la(o), r.c(), w(r, 1), r.m(t.parentNode, t)) : r && (ie(), q(r, 1, 1, () => {
        r = null;
      }), oe()), /*collapsed*/
      o[16] ? i && (ie(), q(i, 1, 1, () => {
        i = null;
      }), oe()) : i ? (i.p(o, a), a[0] & /*collapsed*/
      65536 && w(i, 1)) : (i = ia(o), i.c(), w(i, 1), i.m(n.parentNode, n));
    },
    i(o) {
      l || (w(r), w(i), l = !0);
    },
    o(o) {
      q(r), q(i), l = !1;
    },
    d(o) {
      r && r.d(o), o && N(t), i && i.d(o), o && N(n);
    }
  };
}
function fa(e, t) {
  var n, l;
  (n = e.dataTransfer) == null || n.setData("application/json", JSON.stringify(t)), (l = e.dataTransfer) == null || l.setData("text/plain", JSON.stringify(t)), e.stopPropagation();
}
function Za(e) {
  e.preventDefault(), e.dataTransfer.dropEffect = "move";
}
function sa(e, t) {
  return typeof e[1] == "string" == (typeof t[1] == "string") ? e[0].localeCompare(t[0]) : typeof e[1] == "string" ? -1 : 1;
}
function v1(e, t, n) {
  let l, { name: r = null } = t, { path: i = [] } = t, { queries: o = {} } = t, { indentLevel: a = 0 } = t, { onSelect: f = () => {
  } } = t, { onNewGroup: s = () => {
  } } = t, { onNewQuery: u = () => {
  } } = t, { onDelete: c = () => {
  } } = t, { onDuplicate: d = () => {
  } } = t, { onDraggingChange: m = () => {
  } } = t, { onMove: b = () => {
  } } = t, { showBorder: h = !1 } = t, { draggingInto: y = !1 } = t, C = a > 0;
  function k() {
    a > 0 && n(16, C = !C);
  }
  function v($ = null) {
    ($ == null || l == 0 || typeof o[$] == "string" && o[$].length == 0 || confirm(`Are you sure you want to delete this ${$ != null ? "query" : "group"}? This action cannot be undone.`)) && c($ != null ? [...i, $] : i);
  }
  let z = null, L = null, D, B;
  function O($, Pe) {
    var rt;
    $.preventDefault(), n(15, E = 0);
    const Je = (rt = $.dataTransfer) == null ? void 0 : rt.getData("application/json");
    if (Je) {
      const je = JSON.parse(Je);
      Pe = [...Pe, je[je.length - 1]], JSON.stringify(je) !== JSON.stringify(Pe) && b(je, Pe);
    }
    n(16, C = !1);
  }
  let E = 0;
  function A() {
    L = this.value, n(13, L), n(12, z);
  }
  function S($) {
    Ce[$ ? "unshift" : "push"](() => {
      B = $, n(14, B);
    });
  }
  const T = ($) => {
    $.key === "Escape" && ($.preventDefault(), n(12, z = null));
  }, ne = () => b(i, [...i.slice(0, i.length - 1), L]), j = () => {
    b(i, [...i.slice(0, i.length - 1), L]);
  }, Q = () => {
    s(i), n(16, C = !1);
  }, H = () => u(i), U = () => n(12, z = i), he = () => d(i), te = () => v(), ue = ($) => O($, i), be = ($) => fa($, i), se = () => n(15, E++, E), I = () => n(15, E--, E);
  function G() {
    L = this.value, n(13, L), n(12, z);
  }
  function le($) {
    Ce[$ ? "unshift" : "push"](() => {
      B = $, n(14, B);
    });
  }
  const ee = ($) => {
    $.key === "Escape" && ($.preventDefault(), n(12, z = null));
  }, de = ($) => {
    b([...i, $], [...i, L]), n(12, z = null);
  }, Ee = ($) => {
    b([...i, $], [...i, L]);
  }, ze = ($) => n(12, z = [...i, $]), Ae = ($) => d([...i, $]), Te = ($) => v($), x = ($, Pe) => f([...i, $], Pe), Ie = ($, Pe) => fa(Pe, [...i, $]), Lt = ($) => O($, i), Be = () => n(15, E++, E), Ct = () => n(15, E--, E);
  return e.$$set = ($) => {
    "name" in $ && n(0, r = $.name), "path" in $ && n(1, i = $.path), "queries" in $ && n(2, o = $.queries), "indentLevel" in $ && n(3, a = $.indentLevel), "onSelect" in $ && n(4, f = $.onSelect), "onNewGroup" in $ && n(5, s = $.onNewGroup), "onNewQuery" in $ && n(6, u = $.onNewQuery), "onDelete" in $ && n(7, c = $.onDelete), "onDuplicate" in $ && n(8, d = $.onDuplicate), "onDraggingChange" in $ && n(21, m = $.onDraggingChange), "onMove" in $ && n(9, b = $.onMove), "showBorder" in $ && n(10, h = $.showBorder), "draggingInto" in $ && n(11, y = $.draggingInto);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*queries*/
    4 && n(17, l = o ? Object.keys(o).length : 0), e.$$.dirty[0] & /*editingPath, newName*/
    12288 && (z != null && L == null ? n(13, L = z[z.length - 1] ?? null) : z || n(13, L = null)), e.$$.dirty[0] & /*editBox, oldEditBox*/
    4210688 && B !== D && (B && (B.focus(), B.select()), n(22, D = B)), e.$$.dirty[0] & /*onDraggingChange, draggingCounter, draggingInto*/
    2131968 && m(E > 0 || y);
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
    z,
    L,
    B,
    E,
    C,
    l,
    k,
    v,
    O,
    m,
    D,
    A,
    S,
    T,
    ne,
    j,
    Q,
    H,
    U,
    he,
    te,
    ue,
    be,
    se,
    I,
    G,
    le,
    ee,
    de,
    Ee,
    ze,
    Ae,
    Te,
    x,
    Ie,
    Lt,
    Be,
    Ct
  ];
}
class $a extends we {
  constructor(t) {
    super(), pe(
      this,
      t,
      v1,
      w1,
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
function ua(e) {
  let t, n, l, r, i;
  return n = new ce({
    props: { icon: Sa, class: "inline" }
  }), {
    c() {
      t = p("button"), Y(n.$$.fragment), g(t, "class", "px-2 py-1.5 text-sm text-center font-semibold rounded transition-colors duration-200 bg-gray-600 hover:bg-gray-500 text-white whitespace-nowrap"), g(t, "title", "Close query browser");
    },
    m(o, a) {
      R(o, t, a), K(n, t, null), l = !0, r || (i = W(t, "click", function() {
        Ye(
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
      q(n.$$.fragment, o), l = !1;
    },
    d(o) {
      o && N(t), X(n), r = !1, i();
    }
  };
}
function C1(e) {
  let t;
  return {
    c() {
      t = p("div"), t.innerHTML = `<div class="w-3/4 text-gray-700 dark:text-gray-200 text-lg font-semibold">File is empty</div> 
      <p class="text-gray-600 dark:text-gray-400 w-1/3">Click above to create a query or group of queries in this file.</p>`, g(t, "class", "flex flex-col w-full flex-auto min-h-0 items-center justify-center text-center gap-4");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: Z,
    i: Z,
    o: Z,
    d(n) {
      n && N(t);
    }
  };
}
function S1(e) {
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
    e[0]), r = new $a({ props: s }), Ce.push(() => tt(r, "queries", f)), {
      c() {
        t = p("div"), t.textContent = `Click on a query to edit, hover to see actions, or drag-and-drop to
      organize.`, n = P(), l = p("div"), Y(r.$$.fragment), g(t, "class", "mx-4 mb-2 text-xs text-gray-500 dark:text-gray-400"), g(l, "class", o = "rounded-lg " + /*draggingOnBrowser*/
        (e[5] || /*draggingCounter*/
        e[6] > 0 ? "outline outline-2 outline-blue-500" : "") + " border border-gray-200 dark:border-gray-700 overflow-auto min-h-0 flex-auto mx-4");
      },
      m(u, c) {
        R(u, t, c), R(u, n, c), R(u, l, c), K(r, l, null), a = !0;
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
        u[0], et(() => i = !1)), r.$set(d), (!a || c & /*draggingOnBrowser, draggingCounter*/
        96 && o !== (o = "rounded-lg " + /*draggingOnBrowser*/
        (u[5] || /*draggingCounter*/
        u[6] > 0 ? "outline outline-2 outline-blue-500" : "") + " border border-gray-200 dark:border-gray-700 overflow-auto min-h-0 flex-auto mx-4")) && g(l, "class", o);
      },
      i(u) {
        a || (w(r.$$.fragment, u), a = !0);
      },
      o(u) {
        q(r.$$.fragment, u), a = !1;
      },
      d(u) {
        u && N(t), u && N(n), u && N(l), X(r);
      }
    }
  );
}
function ca(e) {
  let t, n, l, r, i;
  return {
    c() {
      t = p("div"), n = p("span"), l = V("Queries saved to "), r = p("span"), i = V(
        /*savePath*/
        e[1]
      ), g(r, "class", "font-mono"), g(n, "class", "px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"), g(t, "class", "mx-4 mt-4");
    },
    m(o, a) {
      R(o, t, a), _(t, n), _(n, l), _(n, r), _(r, i);
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
      o && N(t);
    }
  };
}
function N1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b, h, y, C, k, v, z, L = (
    /*allowClose*/
    e[2] && ua(e)
  );
  a = new ce({
    props: { icon: Rt, class: "inline mr-2" }
  }), c = new ce({
    props: { icon: Rt, class: "inline mr-2" }
  });
  const D = [S1, C1], B = [];
  function O(A, S) {
    return S & /*fileContents*/
    1 && (b = null), b == null && (b = Object.entries(
      /*fileContents*/
      A[0]
    ).length > 0), b ? 0 : 1;
  }
  h = O(e, -1), y = B[h] = D[h](e);
  let E = (
    /*savePath*/
    e[1] && ca(e)
  );
  return {
    c() {
      t = p("div"), n = p("div"), L && L.c(), l = P(), r = p("h3"), r.textContent = "Queries", i = P(), o = p("button"), Y(a.$$.fragment), f = V(`
      Group`), s = P(), u = p("button"), Y(c.$$.fragment), d = V(`
      Query`), m = P(), y.c(), C = P(), E && E.c(), g(r, "class", "text-lg py-1 font-semibold text-gray-900 dark:text-gray-100 flex-auto"), fe(
        r,
        "px-2",
        /*allowClose*/
        e[2]
      ), g(o, "class", "px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), g(o, "title", "Create a new group"), g(u, "class", "px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"), g(u, "title", "Create a new query at the top level"), g(n, "class", "px-4 pt-2 flex items-center mb-4 gap-2 shrink-0"), g(t, "class", "flex flex-col mb-2 max-h-full"), fe(t, "h-full", Object.entries(
        /*fileContents*/
        e[0]
      ).length == 0);
    },
    m(A, S) {
      R(A, t, S), _(t, n), L && L.m(n, null), _(n, l), _(n, r), _(n, i), _(n, o), K(a, o, null), _(o, f), _(n, s), _(n, u), K(c, u, null), _(u, d), _(t, m), B[h].m(t, null), _(t, C), E && E.m(t, null), k = !0, v || (z = [
        W(
          o,
          "click",
          /*click_handler*/
          e[12]
        ),
        W(
          u,
          "click",
          /*click_handler_1*/
          e[13]
        ),
        W(t, "dragover", M1),
        W(
          t,
          "drop",
          /*drop_handler*/
          e[21]
        ),
        W(t, "dragenter", Re(tn(
          /*dragenter_handler*/
          e[22]
        ))),
        W(t, "dragleave", Re(
          /*dragleave_handler*/
          e[23]
        ))
      ], v = !0);
    },
    p(A, [S]) {
      /*allowClose*/
      A[2] ? L ? (L.p(A, S), S & /*allowClose*/
      4 && w(L, 1)) : (L = ua(A), L.c(), w(L, 1), L.m(n, l)) : L && (ie(), q(L, 1, 1, () => {
        L = null;
      }), oe()), (!k || S & /*allowClose*/
      4) && fe(
        r,
        "px-2",
        /*allowClose*/
        A[2]
      );
      let T = h;
      h = O(A, S), h === T ? B[h].p(A, S) : (ie(), q(B[T], 1, 1, () => {
        B[T] = null;
      }), oe(), y = B[h], y ? y.p(A, S) : (y = B[h] = D[h](A), y.c()), w(y, 1), y.m(t, C)), /*savePath*/
      A[1] ? E ? E.p(A, S) : (E = ca(A), E.c(), E.m(t, null)) : E && (E.d(1), E = null), (!k || S & /*Object, fileContents*/
      1) && fe(t, "h-full", Object.entries(
        /*fileContents*/
        A[0]
      ).length == 0);
    },
    i(A) {
      k || (w(L), w(a.$$.fragment, A), w(c.$$.fragment, A), w(y), k = !0);
    },
    o(A) {
      q(L), q(a.$$.fragment, A), q(c.$$.fragment, A), q(y), k = !1;
    },
    d(A) {
      A && N(t), L && L.d(), X(a), X(c), B[h].d(), E && E.d(), v = !1, ve(z);
    }
  };
}
function M1(e) {
  e.preventDefault(), e.dataTransfer.dropEffect = "move";
}
function q1(e, t, n) {
  let { fileContents: l = {} } = t, { currentQueryPath: r = [] } = t, { savePath: i = "" } = t, { allowClose: o = !0 } = t, { onClose: a = () => {
  } } = t, { onSelect: f = () => {
  } } = t, { onRename: s = () => {
  } } = t;
  function u(S = []) {
    let T = Ya(l, S);
    n(0, l = T.contents), f(T.queryPath, On(l, T.queryPath));
  }
  function c(S, T) {
    if (console.log("moving", S, T, Zt(S, T)), !Zt(S, T)) {
      if (typeof On(l, S) == "string" && !Or(T[T.length - 1])) {
        alert("Queries must have variable-style names, containing only alphanumeric characters or underscores, and they must not start with a number.");
        return;
      }
      if (Yr(l, T)) {
        alert("An item with this name already exists - all items must have unique names.");
        return;
      }
      n(0, l = Ja(l, S, T)), Zt(r, S) && s(T);
    }
  }
  function d(S, T) {
    var j;
    S.preventDefault(), n(6, b = 0);
    const ne = (j = S.dataTransfer) == null ? void 0 : j.getData("application/json");
    if (ne) {
      const Q = JSON.parse(ne);
      T = [...T, Q[Q.length - 1]], JSON.stringify(Q) !== JSON.stringify(T) && c(Q, T);
    }
  }
  let m = !1, b = 0;
  const h = () => n(0, l = Uo(l, [])), y = () => {
    u([]);
  }, C = (S) => n(0, l = Uo(l, S)), k = (S) => u(S), v = (S) => n(0, l = ur(l, S)), z = (S) => n(0, l = Ur(l, S).contents), L = (S, T) => c(S, T), D = (S) => n(5, m = S);
  function B(S) {
    l = S, n(0, l);
  }
  const O = (S) => d(S, []), E = () => n(6, b++, b), A = () => n(6, b--, b);
  return e.$$set = (S) => {
    "fileContents" in S && n(0, l = S.fileContents), "currentQueryPath" in S && n(10, r = S.currentQueryPath), "savePath" in S && n(1, i = S.savePath), "allowClose" in S && n(2, o = S.allowClose), "onClose" in S && n(3, a = S.onClose), "onSelect" in S && n(4, f = S.onSelect), "onRename" in S && n(11, s = S.onRename);
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
    h,
    y,
    C,
    k,
    v,
    z,
    L,
    D,
    B,
    O,
    E,
    A
  ];
}
class R1 extends we {
  constructor(t) {
    super(), pe(this, t, q1, N1, ke, {
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
function z1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d = !!/*savePath*/
  e[4] && da(e);
  const m = [D1, E1], b = [];
  function h(v, z) {
    return (
      /*currentQueryPath*/
      v[0].length > 0 ? 0 : 1
    );
  }
  l = h(e), r = b[l] = m[l](e);
  function y(v) {
    e[40](v);
  }
  let C = {
    dataFields: (
      /*dataFields*/
      e[5]
    ),
    onRun: (
      /*runAndSaveQuery*/
      e[28]
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
    )
  };
  /*textInput*/
  e[2] !== void 0 && (C.value = /*textInput*/
  e[2]), a = new d1({ props: C }), Ce.push(() => tt(a, "value", y));
  let k = (
    /*llmAvailable*/
    e[12] && ba(e)
  );
  return {
    c() {
      t = p("div"), d && d.c(), n = P(), r.c(), i = P(), o = p("div"), Y(a.$$.fragment), s = P(), k && k.c(), u = _e(), g(t, "class", "px-4 pt-2 flex items-center mb-4 gap-2 shrink-0"), g(o, "class", "shrink h-2/3");
    },
    m(v, z) {
      R(v, t, z), d && d.m(t, null), _(t, n), b[l].m(t, null), R(v, i, z), R(v, o, z), K(a, o, null), R(v, s, z), k && k.m(v, z), R(v, u, z), c = !0;
    },
    p(v, z) {
      /*savePath*/
      v[4] ? d ? (d.p(v, z), z[0] & /*savePath*/
      16 && w(d, 1)) : (d = da(v), d.c(), w(d, 1), d.m(t, n)) : d && (ie(), q(d, 1, 1, () => {
        d = null;
      }), oe());
      let L = l;
      l = h(v), l === L ? b[l].p(v, z) : (ie(), q(b[L], 1, 1, () => {
        b[L] = null;
      }), oe(), r = b[l], r ? r.p(v, z) : (r = b[l] = m[l](v), r.c()), w(r, 1), r.m(t, null));
      const D = {};
      z[0] & /*dataFields*/
      32 && (D.dataFields = /*dataFields*/
      v[5]), z[0] & /*onExplain*/
      128 && (D.onExplain = /*onExplain*/
      v[7]), z[0] & /*onQueryHistoryClick*/
      262144 && (D.onHistoryClick = /*onQueryHistoryClick*/
      v[18]), z[0] & /*savePath*/
      16 && (D.allowSave = !!/*savePath*/
      v[4]), !f && z[0] & /*textInput*/
      4 && (f = !0, D.value = /*textInput*/
      v[2], et(() => f = !1)), a.$set(D), /*llmAvailable*/
      v[12] ? k ? (k.p(v, z), z[0] & /*llmAvailable*/
      4096 && w(k, 1)) : (k = ba(v), k.c(), w(k, 1), k.m(u.parentNode, u)) : k && (ie(), q(k, 1, 1, () => {
        k = null;
      }), oe());
    },
    i(v) {
      c || (w(d), w(r), w(a.$$.fragment, v), w(k), c = !0);
    },
    o(v) {
      q(d), q(r), q(a.$$.fragment, v), q(k), c = !1;
    },
    d(v) {
      v && N(t), d && d.d(), b[l].d(), v && N(i), v && N(o), X(a), v && N(s), k && k.d(v), v && N(u);
    }
  };
}
function L1(e) {
  let t, n, l;
  function r(o) {
    e[32](o);
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
      e[30]
    ),
    onSelect: (
      /*handleQuerySelection*/
      e[23]
    ),
    onRename: (
      /*func_1*/
      e[31]
    )
  };
  return (
    /*fileContents*/
    e[1] !== void 0 && (i.fileContents = /*fileContents*/
    e[1]), t = new R1({ props: i }), Ce.push(() => tt(t, "fileContents", r)), {
      c() {
        Y(t.$$.fragment);
      },
      m(o, a) {
        K(t, o, a), l = !0;
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
        o[30]), a[0] & /*currentQueryPath*/
        1 && (f.onRename = /*func_1*/
        o[31]), !n && a[0] & /*fileContents*/
        2 && (n = !0, f.fileContents = /*fileContents*/
        o[1], et(() => n = !1)), t.$set(f);
      },
      i(o) {
        l || (w(t.$$.fragment, o), l = !0);
      },
      o(o) {
        q(t.$$.fragment, o), l = !1;
      },
      d(o) {
        X(t, o);
      }
    }
  );
}
function da(e) {
  let t, n, l, r, i;
  return n = new ce({
    props: { icon: Sa, class: "inline" }
  }), {
    c() {
      t = p("button"), Y(n.$$.fragment), g(t, "class", "px-2 py-1.5 text-sm text-center font-semibold rounded transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100 whitespace-nowrap"), g(t, "title", "Browse saved queries (Ctrl+Q)");
    },
    m(o, a) {
      R(o, t, a), K(n, t, null), l = !0, r || (i = W(
        t,
        "click",
        /*click_handler*/
        e[33]
      ), r = !0);
    },
    p: Z,
    i(o) {
      l || (w(n.$$.fragment, o), l = !0);
    },
    o(o) {
      q(n.$$.fragment, o), l = !1;
    },
    d(o) {
      o && N(t), X(n), r = !1, i();
    }
  };
}
function E1(e) {
  let t;
  return {
    c() {
      t = p("h3"), t.textContent = "TempoQL Query", g(t, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100 pr-2 whitespace-nowrap truncate");
    },
    m(n, l) {
      R(n, t, l);
    },
    p: Z,
    i: Z,
    o: Z,
    d(n) {
      n && N(t);
    }
  };
}
function D1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b, h, y;
  const C = [T1, A1], k = [];
  function v(z, L) {
    return (
      /*isEditingName*/
      z[19] ? 0 : 1
    );
  }
  return t = v(e), n = k[t] = C[t](e), o = new ce({ props: { icon: rr } }), s = new ce({ props: { icon: Br } }), d = new ce({
    props: { icon: Rt, class: "inline mr-2" }
  }), {
    c() {
      n.c(), l = P(), r = p("div"), i = p("button"), Y(o.$$.fragment), a = P(), f = p("button"), Y(s.$$.fragment), u = P(), c = p("button"), Y(d.$$.fragment), m = V(`
          Query`), g(i, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), g(i, "title", "Duplicate this query (Ctrl+D)"), g(f, "class", "px-2 py-1 text-xs hover:opacity-50 dark:text-gray-100"), g(f, "title", "Delete this query (Ctrl+Shift+Backspace)"), g(r, "class", "flex items-center"), g(c, "class", "px-3 py-1.5 font-semibold rounded-md transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white whitespace-nowrap"), g(c, "title", "Create a new query at the top level");
    },
    m(z, L) {
      k[t].m(z, L), R(z, l, L), R(z, r, L), _(r, i), K(o, i, null), _(r, a), _(r, f), K(s, f, null), R(z, u, L), R(z, c, L), K(d, c, null), _(c, m), b = !0, h || (y = [
        W(i, "click", Re(
          /*duplicateQuery*/
          e[26]
        )),
        W(f, "click", Re(
          /*deleteQuery*/
          e[27]
        )),
        W(
          c,
          "click",
          /*click_handler_2*/
          e[39]
        )
      ], h = !0);
    },
    p(z, L) {
      let D = t;
      t = v(z), t === D ? k[t].p(z, L) : (ie(), q(k[D], 1, 1, () => {
        k[D] = null;
      }), oe(), n = k[t], n ? n.p(z, L) : (n = k[t] = C[t](z), n.c()), w(n, 1), n.m(l.parentNode, l));
    },
    i(z) {
      b || (w(n), w(o.$$.fragment, z), w(s.$$.fragment, z), w(d.$$.fragment, z), b = !0);
    },
    o(z) {
      q(n), q(o.$$.fragment, z), q(s.$$.fragment, z), q(d.$$.fragment, z), b = !1;
    },
    d(z) {
      k[t].d(z), z && N(l), z && N(r), X(o), X(s), z && N(u), z && N(c), X(d), h = !1, ve(y);
    }
  };
}
function A1(e) {
  let t, n, l, r, i;
  t = new or({
    props: {
      class: "rounded-lg px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2 cursor-pointer",
      $$slots: {
        default: [
          P1,
          ({ hovering: a }) => ({ 45: a }),
          ({ hovering: a }) => [0, a ? 16384 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), t.$on(
    "click",
    /*click_handler_1*/
    e[38]
  );
  let o = (
    /*currentQueryPath*/
    e[0].length > 1 && ma(e)
  );
  return {
    c() {
      Y(t.$$.fragment), n = P(), o && o.c(), l = P(), r = p("div"), g(r, "class", "flex-auto");
    },
    m(a, f) {
      K(t, a, f), R(a, n, f), o && o.m(a, f), R(a, l, f), R(a, r, f), i = !0;
    },
    p(a, f) {
      const s = {};
      f[0] & /*currentQueryPath*/
      1 | f[1] & /*$$scope, hovering*/
      49152 && (s.$$scope = { dirty: f, ctx: a }), t.$set(s), /*currentQueryPath*/
      a[0].length > 1 ? o ? o.p(a, f) : (o = ma(a), o.c(), o.m(l.parentNode, l)) : o && (o.d(1), o = null);
    },
    i(a) {
      i || (w(t.$$.fragment, a), i = !0);
    },
    o(a) {
      q(t.$$.fragment, a), i = !1;
    },
    d(a) {
      X(t, a), a && N(n), o && o.d(a), a && N(l), a && N(r);
    }
  };
}
function T1(e) {
  let t, n, l, r;
  return {
    c() {
      t = p("form"), n = p("input"), g(n, "type", "text"), g(n, "class", "flat-text-input w-full"), g(t, "class", "flex-auto");
    },
    m(i, o) {
      R(i, t, o), _(t, n), He(
        n,
        /*newName*/
        e[20]
      ), e[35](n), l || (r = [
        W(
          n,
          "input",
          /*input_input_handler*/
          e[34]
        ),
        W(
          n,
          "blur",
          /*blur_handler*/
          e[36]
        ),
        W(t, "submit", Re(tn(
          /*submit_handler*/
          e[37]
        )))
      ], l = !0);
    },
    p(i, o) {
      o[0] & /*newName*/
      1048576 && n.value !== /*newName*/
      i[20] && He(
        n,
        /*newName*/
        i[20]
      );
    },
    i: Z,
    o: Z,
    d(i) {
      i && N(t), e[35](null), l = !1, ve(r);
    }
  };
}
function ga(e) {
  let t, n;
  return t = new ce({
    props: {
      icon: Hr,
      class: "pl-2 text-gray-900 dark:text-gray-100"
    }
  }), {
    c() {
      Y(t.$$.fragment);
    },
    m(l, r) {
      K(t, l, r), n = !0;
    },
    p: Z,
    i(l) {
      n || (w(t.$$.fragment, l), n = !0);
    },
    o(l) {
      q(t.$$.fragment, l), n = !1;
    },
    d(l) {
      X(t, l);
    }
  };
}
function P1(e) {
  let t, n = (
    /*currentQueryPath*/
    (e[0][
      /*currentQueryPath*/
      e[0].length - 1
    ] ?? "TempoQL Query") + ""
  ), l, r, i, o, a = (
    /*hovering*/
    e[45] && ga()
  );
  return {
    c() {
      t = p("h3"), l = V(n), r = P(), a && a.c(), i = _e(), g(t, "class", "text-lg font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap truncate"), g(t, "title", "Rename this query (Ctrl+R)");
    },
    m(f, s) {
      R(f, t, s), _(t, l), R(f, r, s), a && a.m(f, s), R(f, i, s), o = !0;
    },
    p(f, s) {
      (!o || s[0] & /*currentQueryPath*/
      1) && n !== (n = /*currentQueryPath*/
      (f[0][
        /*currentQueryPath*/
        f[0].length - 1
      ] ?? "TempoQL Query") + "") && ae(l, n), /*hovering*/
      f[45] ? a ? (a.p(f, s), s[1] & /*hovering*/
      16384 && w(a, 1)) : (a = ga(), a.c(), w(a, 1), a.m(i.parentNode, i)) : a && (ie(), q(a, 1, 1, () => {
        a = null;
      }), oe());
    },
    i(f) {
      o || (w(a), o = !0);
    },
    o(f) {
      q(a), o = !1;
    },
    d(f) {
      f && N(t), f && N(r), a && a.d(f), f && N(i);
    }
  };
}
function ma(e) {
  let t, n, l, r = (
    /*currentQueryPath*/
    e[0][
      /*currentQueryPath*/
      e[0].length - 2
    ] + ""
  ), i;
  return {
    c() {
      t = p("div"), n = V("in "), l = p("span"), i = V(r), g(l, "class", "font-mono"), g(t, "class", "text-sm text-gray-600 dark:text-gray-400 truncate min-w-0");
    },
    m(o, a) {
      R(o, t, a), _(t, n), _(t, l), _(l, i);
    },
    p(o, a) {
      a[0] & /*currentQueryPath*/
      1 && r !== (r = /*currentQueryPath*/
      o[0][
        /*currentQueryPath*/
        o[0].length - 2
      ] + "") && ae(i, r);
    },
    d(o) {
      o && N(t);
    }
  };
}
function ba(e) {
  let t, n, l, r;
  function i(a) {
    e[42](a);
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
      /*func_2*/
      e[41]
    )
  };
  return (
    /*aiQuestion*/
    e[3] !== void 0 && (o.question = /*aiQuestion*/
    e[3]), n = new f1({ props: o }), Ce.push(() => tt(n, "question", i)), {
      c() {
        t = p("div"), Y(n.$$.fragment), g(t, "class", "mt-4 w-full h-1/2 overflow-hidden");
      },
      m(a, f) {
        R(a, t, f), K(n, t, null), r = !0;
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
        68 && (s.onRun = /*func_2*/
        a[41]), !l && f[0] & /*aiQuestion*/
        8 && (l = !0, s.question = /*aiQuestion*/
        a[3], et(() => l = !1)), n.$set(s);
      },
      i(a) {
        r || (w(n.$$.fragment, a), r = !0);
      },
      o(a) {
        q(n.$$.fragment, a), r = !1;
      },
      d(a) {
        a && N(t), X(n);
      }
    }
  );
}
function Q1(e) {
  let t, n, l, r;
  const i = [L1, z1], o = [];
  function a(f, s) {
    return (
      /*showingBrowser*/
      f[22] ? 0 : 1
    );
  }
  return n = a(e), l = o[n] = i[n](e), {
    c() {
      t = p("div"), l.c(), g(t, "class", "w-1/2 shrink-0 flex flex-col h-full z-0");
    },
    m(f, s) {
      R(f, t, s), o[n].m(t, null), r = !0;
    },
    p(f, s) {
      let u = n;
      n = a(f), n === u ? o[n].p(f, s) : (ie(), q(o[u], 1, 1, () => {
        o[u] = null;
      }), oe(), l = o[n], l ? l.p(f, s) : (l = o[n] = i[n](f), l.c()), w(l, 1), l.m(t, null));
    },
    i(f) {
      r || (w(l), r = !0);
    },
    o(f) {
      q(l), r = !1;
    },
    d(f) {
      f && N(t), o[n].d();
    }
  };
}
function j1(e, t, n) {
  let { fileContents: l = {} } = t, { savePath: r = "" } = t, { textInput: i = "" } = t, { dataFields: o = [] } = t, { onRun: a = () => {
  } } = t, { onExplain: f = () => {
  } } = t, { onLLMSubmit: s = () => {
  } } = t, { llmResponse: u = "" } = t, { llmLoading: c = !1 } = t, { llmError: d = "" } = t, { llmAvailable: m = !1 } = t, { apiStatus: b = "" } = t, { extractedQuery: h = "" } = t, { hasExtractedQuery: y = !1 } = t, { onQueryExtracted: C = () => {
  } } = t, { onHistoryClick: k = () => {
  } } = t, { onQueryHistoryClick: v = () => {
  } } = t, { aiQuestion: z = "" } = t, L = !1, { currentQueryPath: D = [] } = t;
  function B(x, Ie) {
    D.length > 0 && i != On(l, D) && !confirm(`You have unsaved changes for ${D[D.length - 1]}. Proceed without saving changes?`) || (n(0, D = x), n(2, i = Ie), n(22, L = !1));
  }
  let O = !1, E = null, A, S;
  function T(x) {
    if (n(19, O = !1), x != D[D.length - 1]) {
      if (!Or(x)) {
        alert("Queries must have variable-style names, containing only alphanumeric characters or underscores, and they must not start with a number.");
        return;
      }
      if (Yr(l, [...D.slice(0, D.length - 1), x])) {
        alert("This name already exists. All item names must be unique.");
        return;
      }
      n(1, l = Ja(l, D, [...D.slice(0, D.length - 1), x])), n(0, D = [...D.slice(0, D.length - 1), x]);
    }
  }
  function ne(x) {
    if (!Or(x)) {
      alert("Queries must have variable-style names, containing only alphanumeric characters or underscores, and they must not start with a number.");
      return;
    }
    if (cr(l, x)) {
      alert("The variable name already exists. All variable names must be unique.");
      return;
    }
    let Ie = [...D.slice(0, D.length - 1), x];
    n(1, l = Fn(l, Ie, i)), n(0, D = Ie);
  }
  function j() {
    let x = Ur(l, D);
    n(1, l = x.contents), n(0, D = x.queryPath);
  }
  function Q() {
    confirm("Are you sure you want to delete this query? This action cannot be undone.") && (n(1, l = ur(l, D)), n(0, D = []));
  }
  function H() {
    D.length > 0 && n(1, l = Ua(l, D, i)), a();
  }
  let U = !1;
  function he(x) {
    if (U && (x.ctrlKey || x.metaKey)) {
      if (r && x.key === "r" && !x.shiftKey) {
        x.preventDefault(), n(19, O = !0);
        return;
      } else if (r && x.key === "d" && !x.shiftKey) {
        x.preventDefault(), j();
        return;
      } else if (r && x.key === "Backspace" && x.shiftKey) {
        x.preventDefault(), Q();
        return;
      } else if (r && x.key === "q" && D.length > 0) {
        x.preventDefault(), n(22, L = !L);
        return;
      }
    }
  }
  vt(() => {
    U = !0, window.addEventListener("keydown", he);
  }), ka(() => {
    U = !1, window.removeEventListener("keydown", he);
  });
  const te = () => n(22, L = !1), ue = (x) => {
    n(0, D = x);
  };
  function be(x) {
    l = x, n(1, l);
  }
  const se = () => n(22, L = !0);
  function I() {
    E = this.value, n(20, E), n(19, O), n(0, D);
  }
  function G(x) {
    Ce[x ? "unshift" : "push"](() => {
      S = x, n(21, S);
    });
  }
  const le = () => T(E), ee = () => {
    console.log("renaming!"), T(E);
  }, de = () => n(19, O = !0), Ee = () => {
    let x = Ya(l, D.slice(0, D.length - 1));
    console.log("result", x), n(1, l = x.contents), n(0, D = x.queryPath), n(2, i = "");
  };
  function ze(x) {
    i = x, n(2, i);
  }
  const Ae = (x) => {
    n(2, i = x), a();
  };
  function Te(x) {
    z = x, n(3, z);
  }
  return e.$$set = (x) => {
    "fileContents" in x && n(1, l = x.fileContents), "savePath" in x && n(4, r = x.savePath), "textInput" in x && n(2, i = x.textInput), "dataFields" in x && n(5, o = x.dataFields), "onRun" in x && n(6, a = x.onRun), "onExplain" in x && n(7, f = x.onExplain), "onLLMSubmit" in x && n(8, s = x.onLLMSubmit), "llmResponse" in x && n(9, u = x.llmResponse), "llmLoading" in x && n(10, c = x.llmLoading), "llmError" in x && n(11, d = x.llmError), "llmAvailable" in x && n(12, m = x.llmAvailable), "apiStatus" in x && n(13, b = x.apiStatus), "extractedQuery" in x && n(14, h = x.extractedQuery), "hasExtractedQuery" in x && n(15, y = x.hasExtractedQuery), "onQueryExtracted" in x && n(16, C = x.onQueryExtracted), "onHistoryClick" in x && n(17, k = x.onHistoryClick), "onQueryHistoryClick" in x && n(18, v = x.onQueryHistoryClick), "aiQuestion" in x && n(3, z = x.aiQuestion), "currentQueryPath" in x && n(0, D = x.currentQueryPath);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*savePath, currentQueryPath*/
    17 && r && D.length == 0 && n(22, L = !0), e.$$.dirty[0] & /*isEditingName, newName, currentQueryPath*/
    1572865 && (O && E == null ? n(20, E = D[D.length - 1] ?? null) : O || n(20, E = null)), e.$$.dirty[0] & /*editBox, oldEditBox*/
    538968064 && S !== A && (S && (S.focus(), S.select()), n(29, A = S));
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
    h,
    y,
    C,
    k,
    v,
    O,
    E,
    S,
    L,
    B,
    T,
    ne,
    j,
    Q,
    H,
    A,
    te,
    ue,
    be,
    se,
    I,
    G,
    le,
    ee,
    de,
    Ee,
    ze,
    Ae,
    Te
  ];
}
class O1 extends we {
  constructor(t) {
    super(), pe(
      this,
      t,
      j1,
      Q1,
      ke,
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
function I1(e) {
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
    e[0]), t = new su({ props: i }), Ce.push(() => tt(t, "scopeName", r)), {
      c() {
        Y(t.$$.fragment);
      },
      m(o, a) {
        K(t, o, a), l = !0;
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
        o[0], et(() => n = !1)), t.$set(f);
      },
      i(o) {
        l || (w(t.$$.fragment, o), l = !0);
      },
      o(o) {
        q(t.$$.fragment, o), l = !1;
      },
      d(o) {
        X(t, o);
      }
    }
  );
}
function H1(e) {
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
    width: "w-full"
  };
  return (
    /*$textInput*/
    e[8] !== void 0 && (i.textInput = /*$textInput*/
    e[8]), t = new V0({ props: i }), Ce.push(() => tt(t, "textInput", r)), {
      c() {
        Y(t.$$.fragment);
      },
      m(o, a) {
        K(t, o, a), l = !0;
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
        o[21]), !n && a[0] & /*$textInput*/
        256 && (n = !0, f.textInput = /*$textInput*/
        o[8], et(() => n = !1)), t.$set(f);
      },
      i(o) {
        l || (w(t.$$.fragment, o), l = !0);
      },
      o(o) {
        q(t.$$.fragment, o), l = !1;
      },
      d(o) {
        X(t, o);
      }
    }
  );
}
function B1(e) {
  let t, n, l, r, i, o, a, f, s, u, c, d, m, b, h, y, C, k, v, z, L;
  function D(j) {
    e[65](j);
  }
  function B(j) {
    e[66](j);
  }
  function O(j) {
    e[67](j);
  }
  function E(j) {
    e[68](j);
  }
  let A = {
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
  e[9] !== void 0 && (A.fileContents = /*$fileContents*/
  e[9]), /*$textInput*/
  e[8] !== void 0 && (A.textInput = /*$textInput*/
  e[8]), /*currentQuestion*/
  e[4] !== void 0 && (A.aiQuestion = /*currentQuestion*/
  e[4]), /*currentQueryPath*/
  e[5] !== void 0 && (A.currentQueryPath = /*currentQueryPath*/
  e[5]), n = new O1({ props: A }), Ce.push(() => tt(n, "fileContents", D)), Ce.push(() => tt(n, "textInput", B)), Ce.push(() => tt(n, "aiQuestion", O)), Ce.push(() => tt(n, "currentQueryPath", E)), u = new es({
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
  const S = [H1, I1], T = [];
  function ne(j, Q) {
    return (
      /*activeTab*/
      j[1] === "results" ? 0 : (
        /*activeTab*/
        j[1] === "data-elements" ? 1 : -1
      )
    );
  }
  return ~(m = ne(e)) && (b = T[m] = S[m](e)), y = new Yo({
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
  }), k = new Yo({
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
  }), z = new X0({
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
      t = p("main"), Y(n.$$.fragment), a = P(), f = p("div"), s = p("div"), Y(u.$$.fragment), c = P(), d = p("div"), b && b.c(), h = P(), Y(y.$$.fragment), C = P(), Y(k.$$.fragment), v = P(), Y(z.$$.fragment), g(d, "class", "flex-auto w-full min-h-0 z-0 svelte-1pq5c6y"), g(s, "class", "w-full h-full rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden flex flex-col dark:bg-gray-900 svelte-1pq5c6y"), g(f, "class", "w-1/2 mb-2 svelte-1pq5c6y"), g(t, "class", "w-full bg-white dark:bg-gray-950 transition-colors duration-200 relative overflow-hidden flex svelte-1pq5c6y"), re(t, "height", "min(600px, max(400px, 70vh))");
    },
    m(j, Q) {
      R(j, t, Q), K(n, t, null), _(t, a), _(t, f), _(f, s), K(u, s, null), _(s, c), _(s, d), ~m && T[m].m(d, null), _(t, h), K(y, t, null), _(t, C), K(k, t, null), _(t, v), K(z, t, null), L = !0;
    },
    p(j, Q) {
      const H = {};
      Q[0] & /*$savePath*/
      1024 && (H.savePath = /*$savePath*/
      j[10]), Q[0] & /*dataFields*/
      64 && (H.dataFields = /*dataFields*/
      j[6]), Q[0] & /*$llmResponse*/
      128 && (H.llmResponse = /*$llmResponse*/
      j[7]), Q[0] & /*$llmLoading*/
      2048 && (H.llmLoading = /*$llmLoading*/
      j[11]), Q[0] & /*$llmError*/
      4096 && (H.llmError = /*$llmError*/
      j[12]), Q[0] & /*$llmAvailable*/
      8192 && (H.llmAvailable = /*$llmAvailable*/
      j[13]), Q[0] & /*$apiStatus*/
      16384 && (H.apiStatus = /*$apiStatus*/
      j[14]), Q[0] & /*$extractedQuery*/
      32768 && (H.extractedQuery = /*$extractedQuery*/
      j[15]), Q[0] & /*$hasExtractedQuery*/
      65536 && (H.hasExtractedQuery = /*$hasExtractedQuery*/
      j[16]), !l && Q[0] & /*$fileContents*/
      512 && (l = !0, H.fileContents = /*$fileContents*/
      j[9], et(() => l = !1)), !r && Q[0] & /*$textInput*/
      256 && (r = !0, H.textInput = /*$textInput*/
      j[8], et(() => r = !1)), !i && Q[0] & /*currentQuestion*/
      16 && (i = !0, H.aiQuestion = /*currentQuestion*/
      j[4], et(() => i = !1)), !o && Q[0] & /*currentQueryPath*/
      32 && (o = !0, H.currentQueryPath = /*currentQueryPath*/
      j[5], et(() => o = !1)), n.$set(H);
      const U = {};
      Q[0] & /*activeTab*/
      2 && (U.activeTab = /*activeTab*/
      j[1]), u.$set(U);
      let he = m;
      m = ne(j), m === he ? ~m && T[m].p(j, Q) : (b && (ie(), q(T[he], 1, 1, () => {
        T[he] = null;
      }), oe()), ~m ? (b = T[m], b ? b.p(j, Q) : (b = T[m] = S[m](j), b.c()), w(b, 1), b.m(d, null)) : b = null);
      const te = {};
      Q[0] & /*showAIHistoryDropdown*/
      4 && (te.isVisible = /*showAIHistoryDropdown*/
      j[2]), Q[0] & /*$aiHistory*/
      67108864 && (te.history = /*$aiHistory*/
      j[26]), y.$set(te);
      const ue = {};
      Q[0] & /*showQueryHistoryDropdown*/
      8 && (ue.isVisible = /*showQueryHistoryDropdown*/
      j[3]), Q[0] & /*$queryHistory*/
      134217728 && (ue.history = /*$queryHistory*/
      j[27]), k.$set(ue);
      const be = {};
      Q[0] & /*$isLoading*/
      16777216 && (be.isLoading = /*$isLoading*/
      j[24]), Q[0] & /*$loadingMessage*/
      33554432 && (be.message = /*$loadingMessage*/
      j[25]), z.$set(be);
    },
    i(j) {
      L || (w(n.$$.fragment, j), w(u.$$.fragment, j), w(b), w(y.$$.fragment, j), w(k.$$.fragment, j), w(z.$$.fragment, j), L = !0);
    },
    o(j) {
      q(n.$$.fragment, j), q(u.$$.fragment, j), q(b), q(y.$$.fragment, j), q(k.$$.fragment, j), q(z.$$.fragment, j), L = !1;
    },
    d(j) {
      j && N(t), X(n), X(u), ~m && T[m].d(), X(y), X(k), X(z);
    }
  };
}
function F1(e, t, n) {
  let l, r, i, o, a, f, s, u, c, d, m, b, h, y, C, k, v, z, L, D, B, O, E, { model: A } = t;
  const S = wf(A), { savePath: T, fileContents: ne, values: j, listNames: Q, runQuery: H, handleLLMQuestion: U, handleLLMExplanation: he, subqueries: te, queryError: ue, scopes: be, scopeConcepts: se, handleScopeAnalysis: I, llmResponse: G, llmLoading: le, llmError: ee, llmAvailable: de, llmExplanation: Ee, apiStatus: ze, isLoading: Ae, loadingMessage: Te, extractedQuery: x, hasExtractedQuery: Ie, handleQueryExtraction: Lt, textInput: Be, queryForResults: Ct, queryHistory: $, aiHistory: Pe } = S;
  F(e, T, (J) => n(10, f = J)), F(e, ne, (J) => n(9, a = J)), F(e, j, (J) => n(19, C = J)), F(e, Q, (J) => n(64, o = J)), F(e, te, (J) => n(20, k = J)), F(e, ue, (J) => n(18, y = J)), F(e, be, (J) => n(22, z = J)), F(e, se, (J) => n(23, L = J)), F(e, G, (J) => n(7, r = J)), F(e, le, (J) => n(11, s = J)), F(e, ee, (J) => n(12, u = J)), F(e, de, (J) => n(13, c = J)), F(e, Ee, (J) => n(21, v = J)), F(e, ze, (J) => n(14, d = J)), F(e, Ae, (J) => n(24, D = J)), F(e, Te, (J) => n(25, B = J)), F(e, x, (J) => n(15, m = J)), F(e, Ie, (J) => n(16, b = J)), F(e, Be, (J) => n(8, i = J)), F(e, Ct, (J) => n(17, h = J)), F(e, $, (J) => n(27, E = J)), F(e, Pe, (J) => n(26, O = J));
  let Je = "", rt = "data-elements", je = !1, st = !1, ut = "", Gn = { top: 0, left: 0 }, xn = { top: 0, left: 0 }, it = [];
  function Vn(J) {
    n(4, ut = J), U(J);
  }
  function Wn(J) {
    n(1, rt = J);
  }
  function dr() {
    console.log("text input", i), i.trim() && H(
      it.length > 0 ? it[it.length - 1] : null,
      i
    ), n(1, rt = "results");
  }
  function Kn() {
    n(2, je = !je);
  }
  function gr() {
    n(3, st = !st);
  }
  function ln(J) {
    console.log("📚 AI History item selected:", J), n(2, je = !1), n(3, st = !1), J.query && (ge(Be, i = J.query, i), A.set("text_input", J.query), A.save_changes()), J.question && n(4, ut = J.question), J.answer && ge(G, r = J.answer, r);
  }
  function Xn() {
    n(2, je = !1);
  }
  function Yn() {
    n(3, st = !1);
  }
  function Et(J) {
    a = J, ne.set(a);
  }
  function rn(J) {
    i = J, Be.set(i);
  }
  function on(J) {
    ut = J, n(4, ut);
  }
  function ct(J) {
    it = J, n(5, it);
  }
  function dt(J) {
    i = J, Be.set(i);
  }
  const Dt = (J) => {
    I(J, !1);
  }, gt = () => {
    I(Je, !0);
  }, mt = (J, _t) => {
    ge(Be, i = i + `{${_t}; scope = ${J}}`, i);
  };
  function bt(J) {
    Je = J, n(0, Je);
  }
  return e.$$set = (J) => {
    "model" in J && n(63, A = J.model);
  }, e.$$.update = () => {
    e.$$.dirty[2] & /*$listNames*/
    4 && n(6, l = o || []);
  }, [
    Je,
    rt,
    je,
    st,
    ut,
    it,
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
    h,
    y,
    C,
    k,
    v,
    z,
    L,
    D,
    B,
    O,
    E,
    T,
    ne,
    j,
    Q,
    he,
    te,
    ue,
    be,
    se,
    I,
    G,
    le,
    ee,
    de,
    Ee,
    ze,
    Ae,
    Te,
    x,
    Ie,
    Lt,
    Be,
    Ct,
    $,
    Pe,
    Gn,
    xn,
    Vn,
    Wn,
    dr,
    Kn,
    gr,
    ln,
    Xn,
    Yn,
    A,
    o,
    Et,
    rn,
    on,
    ct,
    dt,
    Dt,
    gt,
    mt,
    bt
  ];
}
class G1 extends we {
  constructor(t) {
    super(), pe(this, t, F1, B1, ke, { model: 63 }, null, [-1, -1, -1]);
  }
}
function x1(e) {
  new G1({
    target: e.el,
    props: {
      model: e.model
    }
  });
}
export {
  x1 as render
};
