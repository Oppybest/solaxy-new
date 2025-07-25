import {E as y, F as b, I as m, M as E, t as g, v as d} from "./chunk-6WGECOWL.js";
import {e as I} from "./chunk-JOVT4LBN.js";
function F(t, e) {
    if (typeof e != "boolean")
        throw new Error(t + " boolean expected, got " + e)
}
function V(t) {
    let e = t.toString(16);
    return e.length & 1 ? "0" + e : e
}
function T(t) {
    if (typeof t != "string")
        throw new Error("hex string expected, got " + typeof t);
    return t === "" ? h : BigInt("0x" + t)
}
function $(t) {
    return T(y(t))
}
function M(t) {
    return d(t),
    T(y(Uint8Array.from(t).reverse()))
}
function U(t, e) {
    return b(t.toString(16).padStart(e * 2, "0"))
}
function R(t, e) {
    return U(t, e).reverse()
}
function z(t, e, n) {
    let o;
    if (typeof e == "string")
        try {
            o = b(e)
        } catch (r) {
            throw new Error(t + " must be hex string or Uint8Array, cause: " + r)
        }
    else if (g(e))
        o = Uint8Array.from(e);
    else
        throw new Error(t + " must be hex string or Uint8Array");
    let i = o.length;
    if (typeof n == "number" && i !== n)
        throw new Error(t + " of length " + n + " expected, got " + i);
    return o
}
function A(t, e, n) {
    return w(t) && w(e) && w(n) && e <= t && t < n
}
function D(t, e, n, o) {
    if (!A(e, n, o))
        throw new Error("expected valid " + t + ": " + n + " <= n < " + o + ", got " + e)
}
function G(t) {
    let e;
    for (e = 0; t > h; t >>= x,
    e += 1)
        ;
    return e
}
function W(t, e, n) {
    if (typeof t != "number" || t < 2)
        throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2)
        throw new Error("qByteLen must be a number");
    if (typeof n != "function")
        throw new Error("hmacFn must be a function");
    let o = s => new Uint8Array(s)
      , i = s => Uint8Array.of(s)
      , r = o(t)
      , f = o(t)
      , u = 0
      , c = () => {
        r.fill(1),
        f.fill(0),
        u = 0
    }
      , a = (...s) => n(f, r, ...s)
      , B = (s=o(0)) => {
        f = a(i(0), s),
        r = a(),
        s.length !== 0 && (f = a(i(1), s),
        r = a())
    }
      , v = () => {
        if (u++ >= 1e3)
            throw new Error("drbg: tried 1000 values");
        let s = 0
          , p = [];
        for (; s < e; ) {
            r = a();
            let l = r.slice();
            p.push(l),
            s += r.length
        }
        return m(...p)
    }
    ;
    return (s, p) => {
        c(),
        B(s);
        let l;
        for (; !(l = p(v())); )
            B();
        return c(),
        l
    }
}
function q(t) {
    return typeof t == "function" && Number.isSafeInteger(t.outputLen)
}
function C(t, e, n={}) {
    if (!t || typeof t != "object")
        throw new Error("expected valid options object");
    function o(i, r, f) {
        let u = t[i];
        if (f && u === void 0)
            return;
        let c = typeof u;
        if (c !== r || u === null)
            throw new Error(`param "${i}" is invalid: expected ${r}, got ${c}`)
    }
    Object.entries(e).forEach( ([i,r]) => o(i, r, !1)),
    Object.entries(n).forEach( ([i,r]) => o(i, r, !0))
}
function J(t) {
    let e = new WeakMap;
    return (n, ...o) => {
        let i = e.get(n);
        if (i !== void 0)
            return i;
        let r = t(n, ...o);
        return e.set(n, r),
        r
    }
}
var h, x, w, P, S = I( () => {
    "use strict";
    E();
    E();
    h = BigInt(0),
    x = BigInt(1);
    w = t => typeof t == "bigint" && h <= t;
    P = t => (x << BigInt(t)) - x
}
);
export {F as a, V as b, $ as c, M as d, U as e, R as f, z as g, A as h, D as i, G as j, P as k, W as l, q as m, C as n, J as o, S as p};
