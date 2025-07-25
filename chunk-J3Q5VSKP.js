var i = typeof globalThis == "object" && "crypto"in globalThis ? globalThis.crypto : void 0;
function c(t) {
    if (!Number.isSafeInteger(t) || t < 0)
        throw new Error("positive integer expected, got " + t)
}
function a(t) {
    return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array"
}
function f(t, ...e) {
    if (!a(t))
        throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length))
        throw new Error("Uint8Array expected of length " + e + ", got length=" + t.length)
}
function g(t) {
    if (typeof t != "function" || typeof t.create != "function")
        throw new Error("Hash should be wrapped by utils.wrapConstructor");
    c(t.outputLen),
    c(t.blockLen)
}
function w(t, e=!0) {
    if (t.destroyed)
        throw new Error("Hash instance has been destroyed");
    if (e && t.finished)
        throw new Error("Hash#digest() has already been called")
}
function x(t, e) {
    f(t);
    let r = e.outputLen;
    if (t.length < r)
        throw new Error("digestInto() expects output buffer of length at least " + r)
}
function L(t) {
    return new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength / 4))
}
function E(t) {
    return new DataView(t.buffer,t.byteOffset,t.byteLength)
}
function B(t, e) {
    return t << 32 - e | t >>> e
}
var U = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function l(t) {
    return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255
}
function O(t) {
    for (let e = 0; e < t.length; e++)
        t[e] = l(t[e])
}
function y(t) {
    if (typeof t != "string")
        throw new Error("utf8ToBytes expected string, got " + typeof t);
    return new Uint8Array(new TextEncoder().encode(t))
}
function p(t) {
    return typeof t == "string" && (t = y(t)),
    f(t),
    t
}
function T(...t) {
    let e = 0;
    for (let n = 0; n < t.length; n++) {
        let o = t[n];
        f(o),
        e += o.length
    }
    let r = new Uint8Array(e);
    for (let n = 0, o = 0; n < t.length; n++) {
        let u = t[n];
        r.set(u, o),
        o += u.length
    }
    return r
}
var s = class {
    clone() {
        return this._cloneInto()
    }
}
;
function k(t) {
    let e = n => t().update(p(n)).digest()
      , r = t();
    return e.outputLen = r.outputLen,
    e.blockLen = r.blockLen,
    e.create = () => t(),
    e
}
function S(t) {
    let e = (n, o) => t(o).update(p(n)).digest()
      , r = t({});
    return e.outputLen = r.outputLen,
    e.blockLen = r.blockLen,
    e.create = n => t(n),
    e
}
function V(t=32) {
    if (i && typeof i.getRandomValues == "function")
        return i.getRandomValues(new Uint8Array(t));
    if (i && typeof i.randomBytes == "function")
        return i.randomBytes(t);
    throw new Error("crypto.getRandomValues must be defined")
}
export {c as a, f as b, g as c, w as d, x as e, L as f, E as g, B as h, U as i, O as j, p as k, T as l, s as m, k as n, S as o, V as p};
