function _() {
}
function ce(e) {
  return e();
}
function te() {
  return /* @__PURE__ */ Object.create(null);
}
function O(e) {
  e.forEach(ce);
}
function R(e) {
  return typeof e == "function";
}
function E(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function de(e) {
  return Object.keys(e).length === 0;
}
function ge(e, ...t) {
  if (e == null)
    return _;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function ne(e, t, n) {
  e.$$.on_destroy.push(ge(t, n));
}
function P(e, t, n) {
  return e.set(n), t;
}
function f(e, t) {
  e.appendChild(t);
}
function w(e, t, n) {
  e.insertBefore(t, n || null);
}
function y(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function me(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function h(e) {
  return document.createElement(e);
}
function j(e) {
  return document.createTextNode(e);
}
function x() {
  return j(" ");
}
function $(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function d(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function ae(e) {
  return e === "" ? null : +e;
}
function he(e) {
  return Array.from(e.childNodes);
}
function H(e, t) {
  t = "" + t, e.data !== t && (e.data = t);
}
function G(e, t) {
  e.value = t ?? "";
}
let Z;
function Q(e) {
  Z = e;
}
const M = [], re = [];
let W = [];
const oe = [], be = /* @__PURE__ */ Promise.resolve();
let U = !1;
function pe() {
  U || (U = !0, be.then(fe));
}
function X(e) {
  W.push(e);
}
const K = /* @__PURE__ */ new Set();
let B = 0;
function fe() {
  if (B !== 0)
    return;
  const e = Z;
  do {
    try {
      for (; B < M.length; ) {
        const t = M[B];
        B++, Q(t), _e(t.$$);
      }
    } catch (t) {
      throw M.length = 0, B = 0, t;
    }
    for (Q(null), M.length = 0, B = 0; re.length; )
      re.pop()();
    for (let t = 0; t < W.length; t += 1) {
      const n = W[t];
      K.has(n) || (K.add(n), n());
    }
    W.length = 0;
  } while (M.length);
  for (; oe.length; )
    oe.pop()();
  U = !1, K.clear(), Q(e);
}
function _e(e) {
  if (e.fragment !== null) {
    e.update(), O(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(X);
  }
}
function ve(e) {
  const t = [], n = [];
  W.forEach((r) => e.indexOf(r) === -1 ? t.push(r) : n.push(r)), n.forEach((r) => r()), W = t;
}
const Y = /* @__PURE__ */ new Set();
let xe;
function T(e, t) {
  e && e.i && (Y.delete(e), e.i(t));
}
function N(e, t, n, r) {
  if (e && e.o) {
    if (Y.has(e))
      return;
    Y.add(e), xe.c.push(() => {
      Y.delete(e), r && (n && e.d(1), r());
    }), e.o(t);
  } else
    r && r();
}
function S(e) {
  e && e.c();
}
function A(e, t, n, r) {
  const { fragment: o, after_update: s } = e.$$;
  o && o.m(t, n), r || X(() => {
    const l = e.$$.on_mount.map(ce).filter(R);
    e.$$.on_destroy ? e.$$.on_destroy.push(...l) : O(l), e.$$.on_mount = [];
  }), s.forEach(X);
}
function I(e, t) {
  const n = e.$$;
  n.fragment !== null && (ve(n.after_update), O(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ye(e, t) {
  e.$$.dirty[0] === -1 && (M.push(e), pe(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function F(e, t, n, r, o, s, l, u = [-1]) {
  const c = Z;
  Q(e);
  const i = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: _,
    not_equal: o,
    bound: te(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: te(),
    dirty: u,
    skip_bound: !1,
    root: t.target || c.$$.root
  };
  l && l(i.root);
  let a = !1;
  if (i.ctx = n ? n(e, t.props || {}, (g, b, ...v) => {
    const m = v.length ? v[0] : b;
    return i.ctx && o(i.ctx[g], i.ctx[g] = m) && (!i.skip_bound && i.bound[g] && i.bound[g](m), a && ye(e, g)), b;
  }) : [], i.update(), a = !0, O(i.before_update), i.fragment = r ? r(i.ctx) : !1, t.target) {
    if (t.hydrate) {
      const g = he(t.target);
      i.fragment && i.fragment.l(g), g.forEach(y);
    } else
      i.fragment && i.fragment.c();
    t.intro && T(e.$$.fragment), A(e, t.target, t.anchor, t.customElement), fe();
  }
  Q(c);
}
class L {
  $destroy() {
    I(this, 1), this.$destroy = _;
  }
  $on(t, n) {
    if (!R(n))
      return _;
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return r.push(n), () => {
      const o = r.indexOf(n);
      o !== -1 && r.splice(o, 1);
    };
  }
  $set(t) {
    this.$$set && !de(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const D = [];
function we(e, t = _) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function o(u) {
    if (E(e, u) && (e = u, n)) {
      const c = !D.length;
      for (const i of r)
        i[1](), D.push(i, e);
      if (c) {
        for (let i = 0; i < D.length; i += 2)
          D[i][0](D[i + 1]);
        D.length = 0;
      }
    }
  }
  function s(u) {
    o(u(e));
  }
  function l(u, c = _) {
    const i = [u, c];
    return r.add(i), r.size === 1 && (n = t(o) || _), u(e), () => {
      r.delete(i), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: s, subscribe: l };
}
function ie(e, t, n) {
  const r = t, o = we(e.get(r) || n);
  return e.on("change:" + r, (s, l) => o.set(l), null), e.onAttach && e.onAttach(async () => {
    let s = await e.fetch(r);
    o.set(s);
  }), {
    set: (s) => {
      o.set(s), e.set(r, s), e.save_changes();
    },
    subscribe: o.subscribe,
    update: (s) => {
      o.update((l) => {
        let u = s(l);
        return e.set(r, u), e.save_changes(), u;
      });
    }
  };
}
function Ce(e) {
  let t, n, r, o, s, l, u;
  return {
    c() {
      t = h("div"), n = h("div"), r = h("h1"), o = j(
        /*title*/
        e[0]
      ), s = x(), l = h("p"), u = j(
        /*subtitle*/
        e[1]
      ), d(r, "class", "text-2xl font-bold text-white mb-2"), d(l, "class", "text-blue-100 text-sm"), d(n, "class", "text-center"), d(t, "class", "bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg p-6 mb-6");
    },
    m(c, i) {
      w(c, t, i), f(t, n), f(n, r), f(r, o), f(n, s), f(n, l), f(l, u);
    },
    p(c, [i]) {
      i & /*title*/
      1 && H(
        o,
        /*title*/
        c[0]
      ), i & /*subtitle*/
      2 && H(
        u,
        /*subtitle*/
        c[1]
      );
    },
    i: _,
    o: _,
    d(c) {
      c && y(t);
    }
  };
}
function ke(e, t, n) {
  let { title: r = "Tempo-QL Widget" } = t, { subtitle: o = "Interactive Counter Demo" } = t;
  return e.$$set = (s) => {
    "title" in s && n(0, r = s.title), "subtitle" in s && n(1, o = s.subtitle);
  }, [r, o];
}
class $e extends L {
  constructor(t) {
    super(), F(this, t, ke, Ce, E, { title: 0, subtitle: 1 });
  }
}
function Ee(e) {
  let t, n, r, o, s, l, u;
  return {
    c() {
      t = h("div"), n = h("div"), r = h("label"), r.textContent = "Enter Your Text", o = x(), s = h("input"), d(r, "for", "text-input"), d(r, "class", "block text-sm font-medium text-gray-700 mb-2"), d(s, "id", "text-input"), d(s, "type", "text"), d(s, "class", "w-full p-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"), d(s, "placeholder", "Type your text here..."), d(n, "class", "mb-4"), d(t, "class", "bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200");
    },
    m(c, i) {
      w(c, t, i), f(t, n), f(n, r), f(n, o), f(n, s), G(
        s,
        /*value*/
        e[0]
      ), l || (u = [
        $(
          s,
          "input",
          /*input_input_handler*/
          e[3]
        ),
        $(
          s,
          "input",
          /*handleInput*/
          e[1]
        )
      ], l = !0);
    },
    p(c, [i]) {
      i & /*value*/
      1 && s.value !== /*value*/
      c[0] && G(
        s,
        /*value*/
        c[0]
      );
    },
    i: _,
    o: _,
    d(c) {
      c && y(t), l = !1, O(u);
    }
  };
}
function Te(e, t, n) {
  let { value: r = "" } = t, { onInput: o = () => {
  } } = t;
  function s(u) {
    const c = u.target;
    o(c.value);
  }
  function l() {
    r = this.value, n(0, r);
  }
  return e.$$set = (u) => {
    "value" in u && n(0, r = u.value), "onInput" in u && n(2, o = u.onInput);
  }, [r, s, o, l];
}
class Ae extends L {
  constructor(t) {
    super(), F(this, t, Te, Ee, E, { value: 0, onInput: 2 });
  }
}
function se(e, t, n) {
  const r = e.slice();
  return r[1] = t[n], r;
}
function le(e) {
  let t, n = (
    /*btn*/
    e[1].icon + ""
  ), r;
  return {
    c() {
      t = h("span"), r = j(n), d(t, "class", "text-sm");
    },
    m(o, s) {
      w(o, t, s), f(t, r);
    },
    p(o, s) {
      s & /*buttons*/
      1 && n !== (n = /*btn*/
      o[1].icon + "") && H(r, n);
    },
    d(o) {
      o && y(t);
    }
  };
}
function ue(e) {
  let t, n, r, o = (
    /*btn*/
    e[1].label + ""
  ), s, l, u, c, i, a = (
    /*btn*/
    e[1].icon && le(e)
  );
  return {
    c() {
      t = h("button"), a && a.c(), n = x(), r = h("span"), s = j(o), l = x(), d(t, "class", u = `font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 ${/*btn*/
      e[1].colorClass}`);
    },
    m(g, b) {
      w(g, t, b), a && a.m(t, null), f(t, n), f(t, r), f(r, s), f(t, l), c || (i = $(t, "click", function() {
        R(
          /*btn*/
          e[1].onClick
        ) && e[1].onClick.apply(this, arguments);
      }), c = !0);
    },
    p(g, b) {
      e = g, /*btn*/
      e[1].icon ? a ? a.p(e, b) : (a = le(e), a.c(), a.m(t, n)) : a && (a.d(1), a = null), b & /*buttons*/
      1 && o !== (o = /*btn*/
      e[1].label + "") && H(s, o), b & /*buttons*/
      1 && u !== (u = `font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 ${/*btn*/
      e[1].colorClass}`) && d(t, "class", u);
    },
    d(g) {
      g && y(t), a && a.d(), c = !1, i();
    }
  };
}
function Ie(e) {
  let t, n, r, o, s = (
    /*buttons*/
    e[0]
  ), l = [];
  for (let u = 0; u < s.length; u += 1)
    l[u] = ue(se(e, s, u));
  return {
    c() {
      t = h("div"), n = h("h3"), n.textContent = "Actions", r = x(), o = h("div");
      for (let u = 0; u < l.length; u += 1)
        l[u].c();
      d(n, "class", "text-lg font-semibold text-gray-800 mb-4"), d(o, "class", "grid grid-cols-1 gap-3 sm:grid-cols-5"), d(t, "class", "bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200");
    },
    m(u, c) {
      w(u, t, c), f(t, n), f(t, r), f(t, o);
      for (let i = 0; i < l.length; i += 1)
        l[i] && l[i].m(o, null);
    },
    p(u, [c]) {
      if (c & /*buttons*/
      1) {
        s = /*buttons*/
        u[0];
        let i;
        for (i = 0; i < s.length; i += 1) {
          const a = se(u, s, i);
          l[i] ? l[i].p(a, c) : (l[i] = ue(a), l[i].c(), l[i].m(o, null));
        }
        for (; i < l.length; i += 1)
          l[i].d(1);
        l.length = s.length;
      }
    },
    i: _,
    o: _,
    d(u) {
      u && y(t), me(l, u);
    }
  };
}
function je(e, t, n) {
  let { buttons: r = [] } = t;
  return e.$$set = (o) => {
    "buttons" in o && n(0, r = o.buttons);
  }, [r];
}
class Fe extends L {
  constructor(t) {
    super(), F(this, t, je, Ie, E, { buttons: 0 });
  }
}
function Le(e) {
  let t, n, r, o, s, l, u, c, i, a, g, b, v, m, p, C, z, k, J, ee;
  return {
    c() {
      t = h("div"), n = h("div"), r = h("h2"), r.textContent = "Counter Control", o = x(), s = h("div"), l = j(
        /*counter*/
        e[0]
      ), u = x(), c = h("div"), i = h("label"), i.textContent = "Set Counter Value", a = x(), g = h("input"), b = x(), v = h("div"), m = h("button"), m.innerHTML = '<span class="text-lg">−</span>', p = x(), C = h("button"), C.textContent = "Reset", z = x(), k = h("button"), k.innerHTML = '<span class="text-lg">+</span>', d(r, "class", "text-lg font-semibold text-gray-800 mb-2"), d(s, "class", "text-4xl font-bold text-indigo-600 mb-4"), d(n, "class", "text-center mb-4"), d(i, "for", "counter-input"), d(i, "class", "block text-sm font-medium text-gray-700 mb-2"), d(g, "id", "counter-input"), d(g, "type", "number"), d(g, "class", "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"), d(g, "placeholder", "Enter a number..."), d(c, "class", "mb-4"), d(m, "class", "bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"), d(C, "class", "bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"), d(k, "class", "bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"), d(v, "class", "grid grid-cols-3 gap-3"), d(t, "class", "bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200");
    },
    m(q, V) {
      w(q, t, V), f(t, n), f(n, r), f(n, o), f(n, s), f(s, l), f(t, u), f(t, c), f(c, i), f(c, a), f(c, g), G(
        g,
        /*counter*/
        e[0]
      ), f(t, b), f(t, v), f(v, m), f(v, p), f(v, C), f(v, z), f(v, k), J || (ee = [
        $(
          g,
          "input",
          /*input_input_handler*/
          e[6]
        ),
        $(
          g,
          "input",
          /*handleInput*/
          e[4]
        ),
        $(m, "click", function() {
          R(
            /*decrement*/
            e[2]
          ) && e[2].apply(this, arguments);
        }),
        $(C, "click", function() {
          R(
            /*reset*/
            e[3]
          ) && e[3].apply(this, arguments);
        }),
        $(k, "click", function() {
          R(
            /*increment*/
            e[1]
          ) && e[1].apply(this, arguments);
        })
      ], J = !0);
    },
    p(q, [V]) {
      e = q, V & /*counter*/
      1 && H(
        l,
        /*counter*/
        e[0]
      ), V & /*counter*/
      1 && ae(g.value) !== /*counter*/
      e[0] && G(
        g,
        /*counter*/
        e[0]
      );
    },
    i: _,
    o: _,
    d(q) {
      q && y(t), J = !1, O(ee);
    }
  };
}
function Be(e, t, n) {
  let { counter: r = 0 } = t, { setCounter: o = () => {
  } } = t, { increment: s = () => {
  } } = t, { decrement: l = () => {
  } } = t, { reset: u = () => {
  } } = t;
  function c(a) {
    const g = a.target;
    o(+g.value);
  }
  function i() {
    r = ae(this.value), n(0, r);
  }
  return e.$$set = (a) => {
    "counter" in a && n(0, r = a.counter), "setCounter" in a && n(5, o = a.setCounter), "increment" in a && n(1, s = a.increment), "decrement" in a && n(2, l = a.decrement), "reset" in a && n(3, u = a.reset);
  }, [
    r,
    s,
    l,
    u,
    c,
    o,
    i
  ];
}
class Ne extends L {
  constructor(t) {
    super(), F(this, t, Be, Le, E, {
      counter: 0,
      setCounter: 5,
      increment: 1,
      decrement: 2,
      reset: 3
    });
  }
}
function Se(e) {
  let t, n, r, o, s, l = (
    /*message*/
    (e[0] || "No message from backend yet. Try changing the counter!") + ""
  ), u;
  return {
    c() {
      t = h("div"), n = h("h3"), n.textContent = "Backend Communication", r = x(), o = h("div"), s = h("p"), u = j(l), d(n, "class", "text-lg font-semibold text-gray-800 mb-3"), d(s, "class", "text-gray-700 text-sm leading-relaxed"), d(o, "class", "bg-gray-50 rounded-lg p-4 border-l-4 border-indigo-500"), d(t, "class", "bg-white rounded-lg shadow-md p-6 border border-gray-200");
    },
    m(c, i) {
      w(c, t, i), f(t, n), f(t, r), f(t, o), f(o, s), f(s, u);
    },
    p(c, [i]) {
      i & /*message*/
      1 && l !== (l = /*message*/
      (c[0] || "No message from backend yet. Try changing the counter!") + "") && H(u, l);
    },
    i: _,
    o: _,
    d(c) {
      c && y(t);
    }
  };
}
function De(e, t, n) {
  let { message: r = "" } = t;
  return e.$$set = (o) => {
    "message" in o && n(0, r = o.message);
  }, [r];
}
class Me extends L {
  constructor(t) {
    super(), F(this, t, De, Se, E, { message: 0 });
  }
}
function Re(e) {
  let t;
  return {
    c() {
      t = h("div"), t.innerHTML = `<div class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"><div class="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
    Widget Active</div>`, d(t, "class", "mt-6 text-center");
    },
    m(n, r) {
      w(n, t, r);
    },
    p: _,
    i: _,
    o: _,
    d(n) {
      n && y(t);
    }
  };
}
class We extends L {
  constructor(t) {
    super(), F(this, t, null, Re, E, {});
  }
}
function He(e) {
  let t, n, r, o, s, l, u, c, i, a, g, b, v;
  return n = new $e({
    props: {
      title: "Tempo-QL Widget",
      subtitle: "Interactive Counter Demo"
    }
  }), o = new Ae({
    props: {
      value: (
        /*textInput*/
        e[0]
      ),
      onInput: (
        /*handleTextInput*/
        e[10]
      )
    }
  }), l = new Fe({
    props: { actionButtons: (
      /*actionButtons*/
      e[5]
    ) }
  }), c = new Ne({
    props: {
      counter: (
        /*$counter*/
        e[1]
      ),
      setCounter: (
        /*setCounter*/
        e[9]
      ),
      increment: (
        /*increment*/
        e[6]
      ),
      decrement: (
        /*decrement*/
        e[7]
      ),
      reset: (
        /*reset*/
        e[8]
      )
    }
  }), a = new Me({ props: { message: (
    /*$message*/
    e[2]
  ) } }), b = new We({}), {
    c() {
      t = h("main"), S(n.$$.fragment), r = x(), S(o.$$.fragment), s = x(), S(l.$$.fragment), u = x(), S(c.$$.fragment), i = x(), S(a.$$.fragment), g = x(), S(b.$$.fragment), d(t, "class", "w-full max-w-md mx-auto p-6 svelte-c0zlh6");
    },
    m(m, p) {
      w(m, t, p), A(n, t, null), f(t, r), A(o, t, null), f(t, s), A(l, t, null), f(t, u), A(c, t, null), f(t, i), A(a, t, null), f(t, g), A(b, t, null), v = !0;
    },
    p(m, [p]) {
      const C = {};
      p & /*textInput*/
      1 && (C.value = /*textInput*/
      m[0]), o.$set(C);
      const z = {};
      p & /*$counter*/
      2 && (z.counter = /*$counter*/
      m[1]), c.$set(z);
      const k = {};
      p & /*$message*/
      4 && (k.message = /*$message*/
      m[2]), a.$set(k);
    },
    i(m) {
      v || (T(n.$$.fragment, m), T(o.$$.fragment, m), T(l.$$.fragment, m), T(c.$$.fragment, m), T(a.$$.fragment, m), T(b.$$.fragment, m), v = !0);
    },
    o(m) {
      N(n.$$.fragment, m), N(o.$$.fragment, m), N(l.$$.fragment, m), N(c.$$.fragment, m), N(a.$$.fragment, m), N(b.$$.fragment, m), v = !1;
    },
    d(m) {
      m && y(t), I(n), I(o), I(l), I(c), I(a), I(b);
    }
  };
}
function Oe(e, t, n) {
  let r, o, { model: s } = t, l = ie(s, "counter", 0);
  ne(e, l, (p) => n(1, r = p));
  let u = ie(s, "message", "");
  ne(e, u, (p) => n(2, o = p));
  let c = "";
  const i = [
    {
      label: "Template",
      icon: "📝",
      colorClass: "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white",
      onClick: () => console.log("Template action clicked")
    },
    {
      label: "Write",
      icon: "✍️",
      colorClass: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white",
      onClick: () => console.log("Write action clicked")
    },
    {
      label: "Refine",
      icon: "✨",
      colorClass: "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white",
      onClick: () => console.log("Refine action clicked")
    },
    {
      label: "Explain",
      icon: "💡",
      colorClass: "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white",
      onClick: () => console.log("Explain action clicked")
    },
    {
      label: "Run",
      icon: "▶️",
      colorClass: "bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white",
      onClick: () => console.log("Run action clicked")
    }
  ];
  function a() {
    P(l, r += 1, r);
  }
  function g() {
    P(l, r -= 1, r);
  }
  function b() {
    P(l, r = 0, r);
  }
  function v(p) {
    P(l, r = p, r);
  }
  function m(p) {
    n(0, c = p), console.log("Text input changed:", p);
  }
  return e.$$set = (p) => {
    "model" in p && n(11, s = p.model);
  }, [
    c,
    r,
    o,
    l,
    u,
    i,
    a,
    g,
    b,
    v,
    m,
    s
  ];
}
class ze extends L {
  constructor(t) {
    super(), F(this, t, Oe, He, E, { model: 11 });
  }
}
function qe(e) {
  new ze({
    target: e.el,
    props: {
      model: e.model
    }
  });
}
export {
  qe as render
};
