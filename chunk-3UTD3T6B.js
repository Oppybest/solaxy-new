import {a as Bt, b as St, c as Q, d as Kt, e as gt, f as Pt, g as k, h as Lt, i as Ht, j as he, k as st, l as me, m as we, n as it, o as Dt, p as _t} from "./chunk-KOO2GJBY.js";
import {a as vt, c as nn} from "./chunk-CRYW3XTN.js";
import {A as ae, E as At, F as fe, G as Rt, H as de, I as V, J as ue, L as Tt, M as le, t as Nt, u as ie, v as $, w as ce, x as Vt} from "./chunk-6WGECOWL.js";
import {a as mt, b as wt, e as ot} from "./chunk-JOVT4LBN.js";
var Zt, Yt, ge = ot( () => {
    "use strict";
    le();
    Zt = class extends ue {
        constructor(n, e) {
            super(),
            this.finished = !1,
            this.destroyed = !1,
            ce(n);
            let r = de(e);
            if (this.iHash = n.create(),
            typeof this.iHash.update != "function")
                throw new Error("Expected instance of class which extends utils.Hash");
            this.blockLen = this.iHash.blockLen,
            this.outputLen = this.iHash.outputLen;
            let s = this.blockLen
              , i = new Uint8Array(s);
            i.set(r.length > s ? n.create().update(r).digest() : r);
            for (let o = 0; o < i.length; o++)
                i[o] ^= 54;
            this.iHash.update(i),
            this.oHash = n.create();
            for (let o = 0; o < i.length; o++)
                i[o] ^= 106;
            this.oHash.update(i),
            ae(i)
        }
        update(n) {
            return Vt(this),
            this.iHash.update(n),
            this
        }
        digestInto(n) {
            Vt(this),
            $(n, this.outputLen),
            this.finished = !0,
            this.iHash.digestInto(n),
            this.oHash.update(n),
            this.oHash.digestInto(n),
            this.destroy()
        }
        digest() {
            let n = new Uint8Array(this.oHash.outputLen);
            return this.digestInto(n),
            n
        }
        _cloneInto(n) {
            n || (n = Object.create(Object.getPrototypeOf(this), {}));
            let {oHash: e, iHash: r, finished: s, destroyed: i, blockLen: o, outputLen: f} = this;
            return n = n,
            n.finished = s,
            n.destroyed = i,
            n.blockLen = o,
            n.outputLen = f,
            n.oHash = e._cloneInto(n.oHash),
            n.iHash = r._cloneInto(n.iHash),
            n
        }
        clone() {
            return this._cloneInto()
        }
        destroy() {
            this.destroyed = !0,
            this.oHash.destroy(),
            this.iHash.destroy()
        }
    }
    ,
    Yt = (t, n, e) => new Zt(t,n).update(e).digest();
    Yt.create = (t, n) => new Zt(t,n)
}
);
function z(t, n) {
    let e = t % n;
    return e >= Y ? e : n + e
}
function X(t, n, e) {
    let r = t;
    for (; n-- > Y; )
        r *= r,
        r %= e;
    return r
}
function ye(t, n) {
    if (t === Y)
        throw new Error("invert: expected non-zero number");
    if (n <= Y)
        throw new Error("invert: expected positive modulus, got " + n);
    let e = z(t, n)
      , r = n
      , s = Y
      , i = M
      , o = M
      , f = Y;
    for (; e !== Y; ) {
        let l = r / e
          , c = r % e
          , m = s - o * l
          , w = i - f * l;
        r = e,
        e = c,
        s = o,
        i = f,
        o = m,
        f = w
    }
    if (r !== M)
        throw new Error("invert: does not exist");
    return z(s, n)
}
function ve(t, n) {
    let e = (t.ORDER + M) / pe
      , r = t.pow(n, e);
    if (!t.eql(t.sqr(r), n))
        throw new Error("Cannot find square root");
    return r
}
function on(t, n) {
    let e = (t.ORDER - xe) / Ee
      , r = t.mul(n, ct)
      , s = t.pow(r, e)
      , i = t.mul(n, s)
      , o = t.mul(t.mul(i, ct), s)
      , f = t.mul(i, t.sub(o, t.ONE));
    if (!t.eql(t.sqr(f), n))
        throw new Error("Cannot find square root");
    return f
}
function sn(t) {
    if (t < BigInt(3))
        throw new Error("sqrt is not defined for small field");
    let n = t - M
      , e = 0;
    for (; n % ct === Y; )
        n /= ct,
        e++;
    let r = ct
      , s = ft(t);
    for (; be(s, r) === 1; )
        if (r++ > 1e3)
            throw new Error("Cannot find square root: probably non-prime P");
    if (e === 1)
        return ve;
    let i = s.pow(r, n)
      , o = (n + M) / ct;
    return function(a, l) {
        if (a.is0(l))
            return l;
        if (be(a, l) !== 1)
            throw new Error("Cannot find square root");
        let c = e
          , m = a.mul(a.ONE, i)
          , w = a.pow(l, n)
          , p = a.pow(l, o);
        for (; !a.eql(w, a.ONE); ) {
            if (a.is0(w))
                return a.ZERO;
            let B = 1
              , q = a.sqr(w);
            for (; !a.eql(q, a.ONE); )
                if (B++,
                q = a.sqr(q),
                B === c)
                    throw new Error("Cannot find square root");
            let O = M << BigInt(c - B - 1)
              , N = a.pow(m, O);
            c = B,
            m = a.sqr(N),
            w = a.mul(w, m),
            p = a.mul(p, N)
        }
        return p
    }
}
function cn(t) {
    return t % pe === rn ? ve : t % Ee === xe ? on : sn(t)
}
function kt(t) {
    let n = {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "number",
        BITS: "number"
    }
      , e = an.reduce( (r, s) => (r[s] = "function",
    r), n);
    return it(t, e),
    t
}
function fn(t, n, e) {
    if (e < Y)
        throw new Error("invalid exponent, negatives unsupported");
    if (e === Y)
        return t.ONE;
    if (e === M)
        return n;
    let r = t.ONE
      , s = n;
    for (; e > Y; )
        e & M && (r = t.mul(r, s)),
        s = t.sqr(s),
        e >>= M;
    return r
}
function at(t, n, e=!1) {
    let r = new Array(n.length).fill(e ? t.ZERO : void 0)
      , s = n.reduce( (o, f, a) => t.is0(f) ? o : (r[a] = o,
    t.mul(o, f)), t.ONE)
      , i = t.inv(s);
    return n.reduceRight( (o, f, a) => t.is0(f) ? o : (r[a] = t.mul(o, r[a]),
    t.mul(o, f)), i),
    r
}
function be(t, n) {
    let e = (t.ORDER - M) / ct
      , r = t.pow(n, e)
      , s = t.eql(r, t.ONE)
      , i = t.eql(r, t.ZERO)
      , o = t.eql(r, t.neg(t.ONE));
    if (!s && !i && !o)
        throw new Error("invalid Legendre symbol result");
    return s ? 1 : i ? 0 : -1
}
function Be(t, n) {
    n !== void 0 && ie(n);
    let e = n !== void 0 ? n : t.toString(2).length
      , r = Math.ceil(e / 8);
    return {
        nBitLength: e,
        nByteLength: r
    }
}
function ft(t, n, e=!1, r={}) {
    if (t <= Y)
        throw new Error("invalid field: expected ORDER > 0, got " + t);
    let s, i;
    if (typeof n == "object" && n != null) {
        if (r.sqrt || e)
            throw new Error("cannot specify opts in two arguments");
        let c = n;
        c.BITS && (s = c.BITS),
        c.sqrt && (i = c.sqrt),
        typeof c.isLE == "boolean" && (e = c.isLE)
    } else
        typeof n == "number" && (s = n),
        r.sqrt && (i = r.sqrt);
    let {nBitLength: o, nByteLength: f} = Be(t, s);
    if (f > 2048)
        throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let a, l = Object.freeze({
        ORDER: t,
        isLE: e,
        BITS: o,
        BYTES: f,
        MASK: st(o),
        ZERO: Y,
        ONE: M,
        create: c => z(c, t),
        isValid: c => {
            if (typeof c != "bigint")
                throw new Error("invalid field element: expected bigint, got " + typeof c);
            return Y <= c && c < t
        }
        ,
        is0: c => c === Y,
        isValidNot0: c => !l.is0(c) && l.isValid(c),
        isOdd: c => (c & M) === M,
        neg: c => z(-c, t),
        eql: (c, m) => c === m,
        sqr: c => z(c * c, t),
        add: (c, m) => z(c + m, t),
        sub: (c, m) => z(c - m, t),
        mul: (c, m) => z(c * m, t),
        pow: (c, m) => fn(l, c, m),
        div: (c, m) => z(c * ye(m, t), t),
        sqrN: c => c * c,
        addN: (c, m) => c + m,
        subN: (c, m) => c - m,
        mulN: (c, m) => c * m,
        inv: c => ye(c, t),
        sqrt: i || (c => (a || (a = cn(t)),
        a(l, c))),
        toBytes: c => e ? Pt(c, f) : gt(c, f),
        fromBytes: c => {
            if (c.length !== f)
                throw new Error("Field.fromBytes: expected " + f + " bytes, got " + c.length);
            return e ? Kt(c) : Q(c)
        }
        ,
        invertBatch: c => at(l, c),
        cmov: (c, m, w) => w ? m : c
    });
    return Object.freeze(l)
}
function Se(t) {
    if (typeof t != "bigint")
        throw new Error("field order must be bigint");
    let n = t.toString(2).length;
    return Math.ceil(n / 8)
}
function Gt(t) {
    let n = Se(t);
    return n + Math.ceil(n / 2)
}
function _e(t, n, e=!1) {
    let r = t.length
      , s = Se(n)
      , i = Gt(n);
    if (r < 16 || r < i || r > 1024)
        throw new Error("expected " + i + "-1024 bytes of input, got " + r);
    let o = e ? Kt(t) : Q(t)
      , f = z(o, n - M) + M;
    return e ? Pt(f, s) : gt(f, s)
}
var Y, M, ct, rn, pe, xe, Ee, Rn, an, It = ot( () => {
    "use strict";
    _t();
    Y = BigInt(0),
    M = BigInt(1),
    ct = BigInt(2),
    rn = BigInt(3),
    pe = BigInt(4),
    xe = BigInt(5),
    Ee = BigInt(8);
    Rn = (t, n) => (z(t, n) & M) === M,
    an = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"]
}
);
function yt(t, n) {
    let e = n.negate();
    return t ? e : n
}
function Ne(t, n, e) {
    let r = n === "pz" ? o => o.pz : o => o.ez
      , s = at(t.Fp, e.map(r));
    return e.map( (o, f) => o.toAffine(s[f])).map(t.fromAffine)
}
function Ae(t, n) {
    if (!Number.isSafeInteger(t) || t <= 0 || t > n)
        throw new Error("invalid window size, expected [1.." + n + "], got W=" + t)
}
function Wt(t, n) {
    Ae(t, n);
    let e = Math.ceil(n / t) + 1
      , r = 2 ** (t - 1)
      , s = 2 ** t
      , i = st(t)
      , o = BigInt(t);
    return {
        windows: e,
        windowSize: r,
        mask: i,
        maxNumber: s,
        shiftBy: o
    }
}
function Ie(t, n, e) {
    let {windowSize: r, mask: s, maxNumber: i, shiftBy: o} = e
      , f = Number(t & s)
      , a = t >> o;
    f > r && (f -= i,
    a += dt);
    let l = n * r
      , c = l + Math.abs(f) - 1
      , m = f === 0
      , w = f < 0
      , p = n % 2 !== 0;
    return {
        nextN: a,
        offset: c,
        isZero: m,
        isNeg: w,
        isNegF: p,
        offsetF: l
    }
}
function dn(t, n) {
    if (!Array.isArray(t))
        throw new Error("array expected");
    t.forEach( (e, r) => {
        if (!(e instanceof n))
            throw new Error("invalid point at index " + r)
    }
    )
}
function un(t, n) {
    if (!Array.isArray(t))
        throw new Error("array of scalars expected");
    t.forEach( (e, r) => {
        if (!n.isValid(e))
            throw new Error("invalid scalar at index " + r)
    }
    )
}
function $t(t) {
    return Re.get(t) || 1
}
function qe(t) {
    if (t !== bt)
        throw new Error("invalid wNAF")
}
function Te(t, n) {
    return {
        constTimeNegate: yt,
        hasPrecomputes(e) {
            return $t(e) !== 1
        },
        unsafeLadder(e, r, s=t.ZERO) {
            let i = e;
            for (; r > bt; )
                r & dt && (s = s.add(i)),
                i = i.double(),
                r >>= dt;
            return s
        },
        precomputeWindow(e, r) {
            let {windows: s, windowSize: i} = Wt(r, n)
              , o = []
              , f = e
              , a = f;
            for (let l = 0; l < s; l++) {
                a = f,
                o.push(a);
                for (let c = 1; c < i; c++)
                    a = a.add(f),
                    o.push(a);
                f = a.double()
            }
            return o
        },
        wNAF(e, r, s) {
            let i = t.ZERO
              , o = t.BASE
              , f = Wt(e, n);
            for (let a = 0; a < f.windows; a++) {
                let {nextN: l, offset: c, isZero: m, isNeg: w, isNegF: p, offsetF: B} = Ie(s, a, f);
                s = l,
                m ? o = o.add(yt(p, r[B])) : i = i.add(yt(w, r[c]))
            }
            return qe(s),
            {
                p: i,
                f: o
            }
        },
        wNAFUnsafe(e, r, s, i=t.ZERO) {
            let o = Wt(e, n);
            for (let f = 0; f < o.windows && s !== bt; f++) {
                let {nextN: a, offset: l, isZero: c, isNeg: m} = Ie(s, f, o);
                if (s = a,
                !c) {
                    let w = r[l];
                    i = i.add(m ? w.negate() : w)
                }
            }
            return qe(s),
            i
        },
        getPrecomputes(e, r, s) {
            let i = Xt.get(r);
            return i || (i = this.precomputeWindow(r, e),
            e !== 1 && (typeof s == "function" && (i = s(i)),
            Xt.set(r, i))),
            i
        },
        wNAFCached(e, r, s) {
            let i = $t(e);
            return this.wNAF(i, this.getPrecomputes(i, e, s), r)
        },
        wNAFCachedUnsafe(e, r, s, i) {
            let o = $t(e);
            return o === 1 ? this.unsafeLadder(e, r, i) : this.wNAFUnsafe(o, this.getPrecomputes(o, e, s), r, i)
        },
        setWindowSize(e, r) {
            Ae(r, n),
            Re.set(e, r),
            Xt.delete(e)
        }
    }
}
function Le(t, n, e, r) {
    let s = n
      , i = t.ZERO
      , o = t.ZERO;
    for (; e > bt || r > bt; )
        e & dt && (i = i.add(s)),
        r & dt && (o = o.add(s)),
        s = s.double(),
        e >>= dt,
        r >>= dt;
    return {
        p1: i,
        p2: o
    }
}
function He(t, n, e, r) {
    dn(e, t),
    un(r, n);
    let s = e.length
      , i = r.length;
    if (s !== i)
        throw new Error("arrays of points and scalars must have equal length");
    let o = t.ZERO
      , f = he(BigInt(s))
      , a = 1;
    f > 12 ? a = f - 3 : f > 4 ? a = f - 2 : f > 0 && (a = 2);
    let l = st(a)
      , c = new Array(Number(l) + 1).fill(o)
      , m = Math.floor((n.BITS - 1) / a) * a
      , w = o;
    for (let p = m; p >= 0; p -= a) {
        c.fill(o);
        for (let q = 0; q < i; q++) {
            let O = r[q]
              , N = Number(O >> BigInt(p) & l);
            c[N] = c[N].add(e[q])
        }
        let B = o;
        for (let q = c.length - 1, O = o; q > 0; q--)
            O = O.add(c[q]),
            B = B.add(O);
        if (w = w.add(B),
        p !== 0)
            for (let q = 0; q < a; q++)
                w = w.double()
    }
    return w
}
function Oe(t, n) {
    if (n) {
        if (n.ORDER !== t)
            throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
        return kt(n),
        n
    } else
        return ft(t)
}
function Ze(t, n, e={}) {
    if (!n || typeof n != "object")
        throw new Error(`expected valid ${t} CURVE object`);
    for (let f of ["p", "n", "h"]) {
        let a = n[f];
        if (!(typeof a == "bigint" && a > bt))
            throw new Error(`CURVE.${f} must be positive bigint`)
    }
    let r = Oe(n.p, e.Fp)
      , s = Oe(n.n, e.Fn)
      , o = ["Gx", "Gy", "a", t === "weierstrass" ? "b" : "d"];
    for (let f of o)
        if (!r.isValid(n[f]))
            throw new Error(`CURVE.${f} must be valid field element of CURVE.Fp`);
    return {
        Fp: r,
        Fn: s
    }
}
var bt, dt, Xt, Re, ke = ot( () => {
    "use strict";
    _t();
    It();
    bt = BigInt(0),
    dt = BigInt(1);
    Xt = new WeakMap,
    Re = new WeakMap
}
);
function Ce(t) {
    t.lowS !== void 0 && Bt("lowS", t.lowS),
    t.prehash !== void 0 && Bt("prehash", t.prehash)
}
function ln(t, n, e) {
    function r(s) {
        let i = t.sqr(s)
          , o = t.mul(i, s);
        return t.add(t.add(o, t.mul(s, n)), e)
    }
    return r
}
function ze(t, n, e) {
    let {BYTES: r} = t;
    function s(i) {
        let o;
        if (typeof i == "bigint")
            o = i;
        else {
            let f = k("private key", i);
            if (n) {
                if (!n.includes(f.length * 2))
                    throw new Error("invalid private key");
                let a = new Uint8Array(r);
                a.set(f, a.length - f.length),
                f = a
            }
            try {
                o = t.fromBytes(f)
            } catch {
                throw new Error(`invalid private key: expected ui8a of size ${r}, got ${typeof i}`)
            }
        }
        if (e && (o = t.create(o)),
        !t.isValidNot0(o))
            throw new Error("invalid private key: out of range [1..N-1]");
        return o
    }
    return s
}
function hn(t, n={}) {
    let {Fp: e, Fn: r} = Ze("weierstrass", t, n)
      , {h: s, n: i} = t;
    it(n, {}, {
        allowInfinityPoint: "boolean",
        clearCofactor: "function",
        isTorsionFree: "function",
        fromBytes: "function",
        toBytes: "function",
        endo: "object",
        wrapPrivateKey: "boolean"
    });
    let {endo: o} = n;
    if (o && (!e.is0(t.a) || typeof o.beta != "bigint" || typeof o.splitScalar != "function"))
        throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function');
    function f() {
        if (!e.isOdd)
            throw new Error("compression is not supported: Field does not have .isOdd()")
    }
    function a(A, d, g) {
        let {x: u, y: h} = d.toAffine()
          , y = e.toBytes(u);
        if (Bt("isCompressed", g),
        g) {
            f();
            let E = !e.isOdd(h);
            return V(Ue(E), y)
        } else
            return V(Uint8Array.of(4), y, e.toBytes(h))
    }
    function l(A) {
        $(A);
        let d = e.BYTES
          , g = d + 1
          , u = 2 * d + 1
          , h = A.length
          , y = A[0]
          , E = A.subarray(1);
        if (h === g && (y === 2 || y === 3)) {
            let b = e.fromBytes(E);
            if (!e.isValid(b))
                throw new Error("bad point: is not on curve, wrong x");
            let x = w(b), S;
            try {
                S = e.sqrt(x)
            } catch (T) {
                let I = T instanceof Error ? ": " + T.message : "";
                throw new Error("bad point: is not on curve, sqrt error" + I)
            }
            f();
            let v = e.isOdd(S);
            return (y & 1) === 1 !== v && (S = e.neg(S)),
            {
                x: b,
                y: S
            }
        } else if (h === u && y === 4) {
            let b = e.fromBytes(E.subarray(d * 0, d * 1))
              , x = e.fromBytes(E.subarray(d * 1, d * 2));
            if (!p(b, x))
                throw new Error("bad point: is not on curve");
            return {
                x: b,
                y: x
            }
        } else
            throw new Error(`bad point: got length ${h}, expected compressed=${g} or uncompressed=${u}`)
    }
    let c = n.toBytes || a
      , m = n.fromBytes || l
      , w = ln(e, t.a, t.b);
    function p(A, d) {
        let g = e.sqr(d)
          , u = w(A);
        return e.eql(g, u)
    }
    if (!p(t.Gx, t.Gy))
        throw new Error("bad curve params: generator point");
    let B = e.mul(e.pow(t.a, pt), Jt)
      , q = e.mul(e.sqr(t.b), BigInt(27));
    if (e.is0(e.add(B, q)))
        throw new Error("bad curve params: a or b");
    function O(A, d, g=!1) {
        if (!e.isValid(d) || g && e.is0(d))
            throw new Error(`bad point coordinate ${A}`);
        return d
    }
    function N(A) {
        if (!(A instanceof _))
            throw new Error("ProjectivePoint expected")
    }
    let R = Dt( (A, d) => {
        let {px: g, py: u, pz: h} = A;
        if (e.eql(h, e.ONE))
            return {
                x: g,
                y: u
            };
        let y = A.is0();
        d == null && (d = y ? e.ONE : e.inv(h));
        let E = e.mul(g, d)
          , b = e.mul(u, d)
          , x = e.mul(h, d);
        if (y)
            return {
                x: e.ZERO,
                y: e.ZERO
            };
        if (!e.eql(x, e.ONE))
            throw new Error("invZ was invalid");
        return {
            x: E,
            y: b
        }
    }
    )
      , H = Dt(A => {
        if (A.is0()) {
            if (n.allowInfinityPoint && !e.is0(A.py))
                return;
            throw new Error("bad point: ZERO")
        }
        let {x: d, y: g} = A.toAffine();
        if (!e.isValid(d) || !e.isValid(g))
            throw new Error("bad point: x or y not field elements");
        if (!p(d, g))
            throw new Error("bad point: equation left != right");
        if (!A.isTorsionFree())
            throw new Error("bad point: not in prime-order subgroup");
        return !0
    }
    );
    function Z(A, d, g, u, h) {
        return g = new _(e.mul(g.px, A),g.py,g.pz),
        d = yt(u, d),
        g = yt(h, g),
        d.add(g)
    }
    class _ {
        constructor(d, g, u) {
            this.px = O("x", d),
            this.py = O("y", g, !0),
            this.pz = O("z", u),
            Object.freeze(this)
        }
        static fromAffine(d) {
            let {x: g, y: u} = d || {};
            if (!d || !e.isValid(g) || !e.isValid(u))
                throw new Error("invalid affine point");
            if (d instanceof _)
                throw new Error("projective point not allowed");
            return e.is0(g) && e.is0(u) ? _.ZERO : new _(g,u,e.ONE)
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static normalizeZ(d) {
            return Ne(_, "pz", d)
        }
        static fromBytes(d) {
            return $(d),
            _.fromHex(d)
        }
        static fromHex(d) {
            let g = _.fromAffine(m(k("pointHex", d)));
            return g.assertValidity(),
            g
        }
        static fromPrivateKey(d) {
            let g = ze(r, n.allowedPrivateKeyLengths, n.wrapPrivateKey);
            return _.BASE.multiply(g(d))
        }
        static msm(d, g) {
            return He(_, r, d, g)
        }
        precompute(d=8, g=!0) {
            return P.setWindowSize(this, d),
            g || this.multiply(pt),
            this
        }
        _setWindowSize(d) {
            this.precompute(d)
        }
        assertValidity() {
            H(this)
        }
        hasEvenY() {
            let {y: d} = this.toAffine();
            if (!e.isOdd)
                throw new Error("Field doesn't support isOdd");
            return !e.isOdd(d)
        }
        equals(d) {
            N(d);
            let {px: g, py: u, pz: h} = this
              , {px: y, py: E, pz: b} = d
              , x = e.eql(e.mul(g, b), e.mul(y, h))
              , S = e.eql(e.mul(u, b), e.mul(E, h));
            return x && S
        }
        negate() {
            return new _(this.px,e.neg(this.py),this.pz)
        }
        double() {
            let {a: d, b: g} = t
              , u = e.mul(g, pt)
              , {px: h, py: y, pz: E} = this
              , b = e.ZERO
              , x = e.ZERO
              , S = e.ZERO
              , v = e.mul(h, h)
              , C = e.mul(y, y)
              , T = e.mul(E, E)
              , I = e.mul(h, y);
            return I = e.add(I, I),
            S = e.mul(h, E),
            S = e.add(S, S),
            b = e.mul(d, S),
            x = e.mul(u, T),
            x = e.add(b, x),
            b = e.sub(C, x),
            x = e.add(C, x),
            x = e.mul(b, x),
            b = e.mul(I, b),
            S = e.mul(u, S),
            T = e.mul(d, T),
            I = e.sub(v, T),
            I = e.mul(d, I),
            I = e.add(I, S),
            S = e.add(v, v),
            v = e.add(S, v),
            v = e.add(v, T),
            v = e.mul(v, I),
            x = e.add(x, v),
            T = e.mul(y, E),
            T = e.add(T, T),
            v = e.mul(T, I),
            b = e.sub(b, v),
            S = e.mul(T, C),
            S = e.add(S, S),
            S = e.add(S, S),
            new _(b,x,S)
        }
        add(d) {
            N(d);
            let {px: g, py: u, pz: h} = this
              , {px: y, py: E, pz: b} = d
              , x = e.ZERO
              , S = e.ZERO
              , v = e.ZERO
              , C = t.a
              , T = e.mul(t.b, pt)
              , I = e.mul(g, y)
              , U = e.mul(u, E)
              , j = e.mul(h, b)
              , K = e.add(g, u)
              , L = e.add(y, E);
            K = e.mul(K, L),
            L = e.add(I, U),
            K = e.sub(K, L),
            L = e.add(g, h);
            let D = e.add(y, b);
            return L = e.mul(L, D),
            D = e.add(I, j),
            L = e.sub(L, D),
            D = e.add(u, h),
            x = e.add(E, b),
            D = e.mul(D, x),
            x = e.add(U, j),
            D = e.sub(D, x),
            v = e.mul(C, L),
            x = e.mul(T, j),
            v = e.add(x, v),
            x = e.sub(U, v),
            v = e.add(U, v),
            S = e.mul(x, v),
            U = e.add(I, I),
            U = e.add(U, I),
            j = e.mul(C, j),
            L = e.mul(T, L),
            U = e.add(U, j),
            j = e.sub(I, j),
            j = e.mul(C, j),
            L = e.add(L, j),
            I = e.mul(U, L),
            S = e.add(S, I),
            I = e.mul(D, L),
            x = e.mul(K, x),
            x = e.sub(x, I),
            I = e.mul(K, U),
            v = e.mul(D, v),
            v = e.add(v, I),
            new _(x,S,v)
        }
        subtract(d) {
            return this.add(d.negate())
        }
        is0() {
            return this.equals(_.ZERO)
        }
        multiply(d) {
            let {endo: g} = n;
            if (!r.isValidNot0(d))
                throw new Error("invalid scalar: out of range");
            let u, h, y = E => P.wNAFCached(this, E, _.normalizeZ);
            if (g) {
                let {k1neg: E, k1: b, k2neg: x, k2: S} = g.splitScalar(d)
                  , {p: v, f: C} = y(b)
                  , {p: T, f: I} = y(S);
                h = C.add(I),
                u = Z(g.beta, v, T, E, x)
            } else {
                let {p: E, f: b} = y(d);
                u = E,
                h = b
            }
            return _.normalizeZ([u, h])[0]
        }
        multiplyUnsafe(d) {
            let {endo: g} = n
              , u = this;
            if (!r.isValid(d))
                throw new Error("invalid scalar: out of range");
            if (d === ut || u.is0())
                return _.ZERO;
            if (d === G)
                return u;
            if (P.hasPrecomputes(this))
                return this.multiply(d);
            if (g) {
                let {k1neg: h, k1: y, k2neg: E, k2: b} = g.splitScalar(d)
                  , {p1: x, p2: S} = Le(_, u, y, b);
                return Z(g.beta, x, S, h, E)
            } else
                return P.wNAFCachedUnsafe(u, d)
        }
        multiplyAndAddUnsafe(d, g, u) {
            let h = this.multiplyUnsafe(g).add(d.multiplyUnsafe(u));
            return h.is0() ? void 0 : h
        }
        toAffine(d) {
            return R(this, d)
        }
        isTorsionFree() {
            let {isTorsionFree: d} = n;
            return s === G ? !0 : d ? d(_, this) : P.wNAFCachedUnsafe(this, i).is0()
        }
        clearCofactor() {
            let {clearCofactor: d} = n;
            return s === G ? this : d ? d(_, this) : this.multiplyUnsafe(s)
        }
        toBytes(d=!0) {
            return Bt("isCompressed", d),
            this.assertValidity(),
            c(_, this, d)
        }
        toRawBytes(d=!0) {
            return this.toBytes(d)
        }
        toHex(d=!0) {
            return At(this.toBytes(d))
        }
        toString() {
            return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`
        }
    }
    _.BASE = new _(t.Gx,t.Gy,e.ONE),
    _.ZERO = new _(e.ZERO,e.ONE,e.ZERO),
    _.Fp = e,
    _.Fn = r;
    let W = r.BITS
      , P = Te(_, n.endo ? Math.ceil(W / 2) : W);
    return _
}
function Ue(t) {
    return Uint8Array.of(t ? 2 : 3)
}
function mn(t, n, e={}) {
    it(n, {
        hash: "function"
    }, {
        hmac: "function",
        lowS: "boolean",
        randomBytes: "function",
        bits2int: "function",
        bits2int_modN: "function"
    });
    let r = n.randomBytes || Tt
      , s = n.hmac || ( (u, ...h) => Yt(n.hash, u, V(...h)))
      , {Fp: i, Fn: o} = t
      , {ORDER: f, BITS: a} = o;
    function l(u) {
        let h = f >> G;
        return u > h
    }
    function c(u) {
        return l(u) ? o.neg(u) : u
    }
    function m(u, h) {
        if (!o.isValidNot0(h))
            throw new Error(`invalid signature ${u}: out of range 1..CURVE.n`)
    }
    class w {
        constructor(h, y, E) {
            m("r", h),
            m("s", y),
            this.r = h,
            this.s = y,
            E != null && (this.recovery = E),
            Object.freeze(this)
        }
        static fromCompact(h) {
            let y = o.BYTES
              , E = k("compactSignature", h, y * 2);
            return new w(o.fromBytes(E.subarray(0, y)),o.fromBytes(E.subarray(y, y * 2)))
        }
        static fromDER(h) {
            let {r: y, s: E} = F.toSig(k("DER", h));
            return new w(y,E)
        }
        assertValidity() {}
        addRecoveryBit(h) {
            return new w(this.r,this.s,h)
        }
        recoverPublicKey(h) {
            let y = i.ORDER
              , {r: E, s: b, recovery: x} = this;
            if (x == null || ![0, 1, 2, 3].includes(x))
                throw new Error("recovery id invalid");
            if (f * J < y && x > 1)
                throw new Error("recovery id is ambiguous for h>1 curve");
            let v = x === 2 || x === 3 ? E + f : E;
            if (!i.isValid(v))
                throw new Error("recovery id 2 or 3 invalid");
            let C = i.toBytes(v)
              , T = t.fromHex(V(Ue((x & 1) === 0), C))
              , I = o.inv(v)
              , U = H(k("msgHash", h))
              , j = o.create(-U * I)
              , K = o.create(b * I)
              , L = t.BASE.multiplyUnsafe(j).add(T.multiplyUnsafe(K));
            if (L.is0())
                throw new Error("point at infinify");
            return L.assertValidity(),
            L
        }
        hasHighS() {
            return l(this.s)
        }
        normalizeS() {
            return this.hasHighS() ? new w(this.r,o.neg(this.s),this.recovery) : this
        }
        toBytes(h) {
            if (h === "compact")
                return V(o.toBytes(this.r), o.toBytes(this.s));
            if (h === "der")
                return fe(F.hexFromSig(this));
            throw new Error("invalid format")
        }
        toDERRawBytes() {
            return this.toBytes("der")
        }
        toDERHex() {
            return At(this.toBytes("der"))
        }
        toCompactRawBytes() {
            return this.toBytes("compact")
        }
        toCompactHex() {
            return At(this.toBytes("compact"))
        }
    }
    let p = ze(o, e.allowedPrivateKeyLengths, e.wrapPrivateKey)
      , B = {
        isValidPrivateKey(u) {
            try {
                return p(u),
                !0
            } catch {
                return !1
            }
        },
        normPrivateKeyToScalar: p,
        randomPrivateKey: () => {
            let u = f;
            return _e(r(Gt(u)), u)
        }
        ,
        precompute(u=8, h=t.BASE) {
            return h.precompute(u, !1)
        }
    };
    function q(u, h=!0) {
        return t.fromPrivateKey(u).toBytes(h)
    }
    function O(u) {
        if (typeof u == "bigint")
            return !1;
        if (u instanceof t)
            return !0;
        let y = k("key", u).length
          , E = i.BYTES
          , b = E + 1
          , x = 2 * E + 1;
        if (!(e.allowedPrivateKeyLengths || o.BYTES === b))
            return y === b || y === x
    }
    function N(u, h, y=!0) {
        if (O(u) === !0)
            throw new Error("first arg must be private key");
        if (O(h) === !1)
            throw new Error("second arg must be public key");
        return t.fromHex(h).multiply(p(u)).toBytes(y)
    }
    let R = n.bits2int || function(u) {
        if (u.length > 8192)
            throw new Error("input is too large");
        let h = Q(u)
          , y = u.length * 8 - a;
        return y > 0 ? h >> BigInt(y) : h
    }
      , H = n.bits2int_modN || function(u) {
        return o.create(R(u))
    }
      , Z = st(a);
    function _(u) {
        return Ht("num < 2^" + a, u, ut, Z),
        o.toBytes(u)
    }
    function W(u, h, y=P) {
        if (["recovered", "canonical"].some(K => K in y))
            throw new Error("sign() legacy options not supported");
        let {hash: E} = n
          , {lowS: b, prehash: x, extraEntropy: S} = y;
        b == null && (b = !0),
        u = k("msgHash", u),
        Ce(y),
        x && (u = k("prehashed msgHash", E(u)));
        let v = H(u)
          , C = p(h)
          , T = [_(C), _(v)];
        if (S != null && S !== !1) {
            let K = S === !0 ? r(i.BYTES) : S;
            T.push(k("extraEntropy", K))
        }
        let I = V(...T)
          , U = v;
        function j(K) {
            let L = R(K);
            if (!o.isValidNot0(L))
                return;
            let D = o.inv(L)
              , Et = t.BASE.multiply(L).toAffine()
              , lt = o.create(Et.x);
            if (lt === ut)
                return;
            let rt = o.create(D * o.create(U + lt * C));
            if (rt === ut)
                return;
            let Mt = (Et.x === lt ? 0 : 2) | Number(Et.y & G)
              , ht = rt;
            return b && l(rt) && (ht = c(rt),
            Mt ^= 1),
            new w(lt,ht,Mt)
        }
        return {
            seed: I,
            k2sig: j
        }
    }
    let P = {
        lowS: n.lowS,
        prehash: !1
    }
      , A = {
        lowS: n.lowS,
        prehash: !1
    };
    function d(u, h, y=P) {
        let {seed: E, k2sig: b} = W(u, h, y);
        return me(n.hash.outputLen, o.BYTES, s)(E, b)
    }
    t.BASE.precompute(8);
    function g(u, h, y, E=A) {
        let b = u;
        h = k("msgHash", h),
        y = k("publicKey", y),
        Ce(E);
        let {lowS: x, prehash: S, format: v} = E;
        if ("strict"in E)
            throw new Error("options.strict was renamed to lowS");
        if (v !== void 0 && !["compact", "der", "js"].includes(v))
            throw new Error('format must be "compact", "der" or "js"');
        let C = typeof b == "string" || Nt(b)
          , T = !C && !v && typeof b == "object" && b !== null && typeof b.r == "bigint" && typeof b.s == "bigint";
        if (!C && !T)
            throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
        let I, U;
        try {
            if (T)
                if (v === void 0 || v === "js")
                    I = new w(b.r,b.s);
                else
                    throw new Error("invalid format");
            if (C) {
                try {
                    v !== "compact" && (I = w.fromDER(b))
                } catch (ht) {
                    if (!(ht instanceof F.Err))
                        throw ht
                }
                !I && v !== "der" && (I = w.fromCompact(b))
            }
            U = t.fromHex(y)
        } catch {
            return !1
        }
        if (!I || x && I.hasHighS())
            return !1;
        S && (h = n.hash(h));
        let {r: j, s: K} = I
          , L = H(h)
          , D = o.inv(K)
          , Et = o.create(L * D)
          , lt = o.create(j * D)
          , rt = t.BASE.multiplyUnsafe(Et).add(U.multiplyUnsafe(lt));
        return rt.is0() ? !1 : o.create(rt.x) === j
    }
    return Object.freeze({
        getPublicKey: q,
        getSharedSecret: N,
        sign: d,
        verify: g,
        utils: B,
        Point: t,
        Signature: w
    })
}
function wn(t) {
    let n = {
        a: t.a,
        b: t.b,
        p: t.Fp.ORDER,
        n: t.n,
        h: t.h,
        Gx: t.Gx,
        Gy: t.Gy
    }
      , e = t.Fp
      , r = ft(n.n, t.nBitLength)
      , s = {
        Fp: e,
        Fn: r,
        allowedPrivateKeyLengths: t.allowedPrivateKeyLengths,
        allowInfinityPoint: t.allowInfinityPoint,
        endo: t.endo,
        wrapPrivateKey: t.wrapPrivateKey,
        isTorsionFree: t.isTorsionFree,
        clearCofactor: t.clearCofactor,
        fromBytes: t.fromBytes,
        toBytes: t.toBytes
    };
    return {
        CURVE: n,
        curveOpts: s
    }
}
function gn(t) {
    let {CURVE: n, curveOpts: e} = wn(t)
      , r = {
        hash: t.hash,
        hmac: t.hmac,
        randomBytes: t.randomBytes,
        lowS: t.lowS,
        bits2int: t.bits2int,
        bits2int_modN: t.bits2int_modN
    };
    return {
        CURVE: n,
        curveOpts: e,
        ecdsaOpts: r
    }
}
function yn(t, n) {
    return Object.assign({}, n, {
        ProjectivePoint: n.Point,
        CURVE: t
    })
}
function je(t) {
    let {CURVE: n, curveOpts: e, ecdsaOpts: r} = gn(t)
      , s = hn(n, e)
      , i = mn(s, r, e);
    return yn(t, i)
}
function bn(t, n) {
    let e = t.ORDER
      , r = ut;
    for (let B = e - G; B % J === ut; B /= J)
        r += G;
    let s = r
      , i = J << s - G - G
      , o = i * J
      , f = (e - G) / o
      , a = (f - G) / J
      , l = o - G
      , c = i
      , m = t.pow(n, f)
      , w = t.pow(n, (f + G) / J)
      , p = (B, q) => {
        let O = m
          , N = t.pow(q, l)
          , R = t.sqr(N);
        R = t.mul(R, q);
        let H = t.mul(B, R);
        H = t.pow(H, a),
        H = t.mul(H, N),
        N = t.mul(H, q),
        R = t.mul(H, B);
        let Z = t.mul(R, N);
        H = t.pow(Z, c);
        let _ = t.eql(H, t.ONE);
        N = t.mul(R, w),
        H = t.mul(Z, O),
        R = t.cmov(N, R, _),
        Z = t.cmov(H, Z, _);
        for (let W = s; W > G; W--) {
            let P = W - J;
            P = J << P - G;
            let A = t.pow(Z, P)
              , d = t.eql(A, t.ONE);
            N = t.mul(R, O),
            O = t.mul(O, O),
            A = t.mul(Z, O),
            R = t.cmov(N, R, d),
            Z = t.cmov(A, Z, d)
        }
        return {
            isValid: _,
            value: R
        }
    }
    ;
    if (t.ORDER % Jt === pt) {
        let B = (t.ORDER - pt) / Jt
          , q = t.sqrt(t.neg(n));
        p = (O, N) => {
            let R = t.sqr(N)
              , H = t.mul(O, N);
            R = t.mul(R, H);
            let Z = t.pow(R, B);
            Z = t.mul(Z, H);
            let _ = t.mul(Z, q)
              , W = t.mul(t.sqr(Z), N)
              , P = t.eql(W, O)
              , A = t.cmov(_, Z, P);
            return {
                isValid: P,
                value: A
            }
        }
    }
    return p
}
function Me(t, n) {
    kt(t);
    let {A: e, B: r, Z: s} = n;
    if (!t.isValid(e) || !t.isValid(r) || !t.isValid(s))
        throw new Error("mapToCurveSimpleSWU: invalid opts");
    let i = bn(t, s);
    if (!t.isOdd)
        throw new Error("Field does not have .isOdd()");
    return o => {
        let f, a, l, c, m, w, p, B;
        f = t.sqr(o),
        f = t.mul(f, s),
        a = t.sqr(f),
        a = t.add(a, f),
        l = t.add(a, t.ONE),
        l = t.mul(l, r),
        c = t.cmov(s, t.neg(a), !t.eql(a, t.ZERO)),
        c = t.mul(c, e),
        a = t.sqr(l),
        w = t.sqr(c),
        m = t.mul(w, e),
        a = t.add(a, m),
        a = t.mul(a, l),
        w = t.mul(w, c),
        m = t.mul(w, r),
        a = t.add(a, m),
        p = t.mul(f, l);
        let {isValid: q, value: O} = i(a, w);
        B = t.mul(f, o),
        B = t.mul(B, O),
        p = t.cmov(p, l, q),
        B = t.cmov(B, O, q);
        let N = t.isOdd(o) === t.isOdd(B);
        B = t.cmov(t.neg(B), B, N);
        let R = at(t, [c], !0)[0];
        return p = t.mul(p, R),
        {
            x: p,
            y: B
        }
    }
}
var Qt, F, ut, G, J, pt, Jt, Ft = ot( () => {
    "use strict";
    ge();
    _t();
    ke();
    It();
    Qt = class extends Error {
        constructor(n="") {
            super(n)
        }
    }
    ,
    F = {
        Err: Qt,
        _tlv: {
            encode: (t, n) => {
                let {Err: e} = F;
                if (t < 0 || t > 256)
                    throw new e("tlv.encode: wrong tag");
                if (n.length & 1)
                    throw new e("tlv.encode: unpadded data");
                let r = n.length / 2
                  , s = St(r);
                if (s.length / 2 & 128)
                    throw new e("tlv.encode: long form length too big");
                let i = r > 127 ? St(s.length / 2 | 128) : "";
                return St(t) + i + s + n
            }
            ,
            decode(t, n) {
                let {Err: e} = F
                  , r = 0;
                if (t < 0 || t > 256)
                    throw new e("tlv.encode: wrong tag");
                if (n.length < 2 || n[r++] !== t)
                    throw new e("tlv.decode: wrong tlv");
                let s = n[r++]
                  , i = !!(s & 128)
                  , o = 0;
                if (!i)
                    o = s;
                else {
                    let a = s & 127;
                    if (!a)
                        throw new e("tlv.decode(long): indefinite length not supported");
                    if (a > 4)
                        throw new e("tlv.decode(long): byte length is too big");
                    let l = n.subarray(r, r + a);
                    if (l.length !== a)
                        throw new e("tlv.decode: length bytes not complete");
                    if (l[0] === 0)
                        throw new e("tlv.decode(long): zero leftmost byte");
                    for (let c of l)
                        o = o << 8 | c;
                    if (r += a,
                    o < 128)
                        throw new e("tlv.decode(long): not minimal encoding")
                }
                let f = n.subarray(r, r + o);
                if (f.length !== o)
                    throw new e("tlv.decode: wrong value length");
                return {
                    v: f,
                    l: n.subarray(r + o)
                }
            }
        },
        _int: {
            encode(t) {
                let {Err: n} = F;
                if (t < ut)
                    throw new n("integer: negative integers are not allowed");
                let e = St(t);
                if (Number.parseInt(e[0], 16) & 8 && (e = "00" + e),
                e.length & 1)
                    throw new n("unexpected DER parsing assertion: unpadded hex");
                return e
            },
            decode(t) {
                let {Err: n} = F;
                if (t[0] & 128)
                    throw new n("invalid signature integer: negative");
                if (t[0] === 0 && !(t[1] & 128))
                    throw new n("invalid signature integer: unnecessary leading zero");
                return Q(t)
            }
        },
        toSig(t) {
            let {Err: n, _int: e, _tlv: r} = F
              , s = k("signature", t)
              , {v: i, l: o} = r.decode(48, s);
            if (o.length)
                throw new n("invalid signature: left bytes after parsing");
            let {v: f, l: a} = r.decode(2, i)
              , {v: l, l: c} = r.decode(2, a);
            if (c.length)
                throw new n("invalid signature: left bytes after parsing");
            return {
                r: e.decode(f),
                s: e.decode(l)
            }
        },
        hexFromSig(t) {
            let {_tlv: n, _int: e} = F
              , r = n.encode(2, e.encode(t.r))
              , s = n.encode(2, e.encode(t.s))
              , i = r + s;
            return n.encode(48, i)
        }
    },
    ut = BigInt(0),
    G = BigInt(1),
    J = BigInt(2),
    pt = BigInt(3),
    Jt = BigInt(4)
}
);
function Ve(t, n) {
    let e = r => je(wt(mt({}, t), {
        hash: r
    }));
    return wt(mt({}, e(n)), {
        create: e
    })
}
var Ke = ot( () => {
    "use strict";
    Ft();
}
);
function et(t, n) {
    if (qt(t),
    qt(n),
    t < 0 || t >= 1 << 8 * n)
        throw new Error("invalid I2OSP input: " + t);
    let e = Array.from({
        length: n
    }).fill(0);
    for (let r = n - 1; r >= 0; r--)
        e[r] = t & 255,
        t >>>= 8;
    return new Uint8Array(e)
}
function xn(t, n) {
    let e = new Uint8Array(t.length);
    for (let r = 0; r < t.length; r++)
        e[r] = t[r] ^ n[r];
    return e
}
function qt(t) {
    if (!Number.isSafeInteger(t))
        throw new Error("number expected")
}
function En(t, n, e, r) {
    $(t),
    $(n),
    qt(e),
    n.length > 255 && (n = r(V(Rt("H2C-OVERSIZE-DST-"), n)));
    let {outputLen: s, blockLen: i} = r
      , o = Math.ceil(e / s);
    if (e > 65535 || o > 255)
        throw new Error("expand_message_xmd: invalid lenInBytes");
    let f = V(n, et(n.length, 1))
      , a = et(0, i)
      , l = et(e, 2)
      , c = new Array(o)
      , m = r(V(a, t, l, et(0, 1), f));
    c[0] = r(V(m, et(1, 1), f));
    for (let p = 1; p <= o; p++) {
        let B = [xn(m, c[p - 1]), et(p + 1, 1), f];
        c[p] = r(V(...B))
    }
    return V(...c).slice(0, e)
}
function vn(t, n, e, r, s) {
    if ($(t),
    $(n),
    qt(e),
    n.length > 255) {
        let i = Math.ceil(2 * r / 8);
        n = s.create({
            dkLen: i
        }).update(Rt("H2C-OVERSIZE-DST-")).update(n).digest()
    }
    if (e > 65535 || n.length > 255)
        throw new Error("expand_message_xof: invalid lenInBytes");
    return s.create({
        dkLen: e
    }).update(t).update(et(e, 2)).update(n).update(et(n.length, 1)).digest()
}
function Pe(t, n, e) {
    it(e, {
        p: "bigint",
        m: "number",
        k: "number",
        hash: "function"
    });
    let {p: r, k: s, m: i, hash: o, expand: f, DST: a} = e;
    if (!Nt(a) && typeof a != "string")
        throw new Error("DST must be string or uint8array");
    if (!we(e.hash))
        throw new Error("expected valid hash");
    $(t),
    qt(n);
    let l = typeof a == "string" ? Rt(a) : a, c = r.toString(2).length, m = Math.ceil((c + s) / 8), w = n * i * m, p;
    if (f === "xmd")
        p = En(t, l, w, o);
    else if (f === "xof")
        p = vn(t, l, w, s, o);
    else if (f === "_internal_pass")
        p = t;
    else
        throw new Error('expand must be "xmd" or "xof"');
    let B = new Array(n);
    for (let q = 0; q < n; q++) {
        let O = new Array(i);
        for (let N = 0; N < i; N++) {
            let R = m * (N + q * i)
              , H = p.subarray(R, R + m);
            O[N] = z(pn(H), r)
        }
        B[q] = O
    }
    return B
}
function De(t, n) {
    let e = n.map(r => Array.from(r).reverse());
    return (r, s) => {
        let[i,o,f,a] = e.map(m => m.reduce( (w, p) => t.add(t.mul(w, r), p)))
          , [l,c] = at(t, [o, a], !0);
        return r = t.mul(i, l),
        s = t.mul(s, t.mul(f, c)),
        {
            x: r,
            y: s
        }
    }
}
function Ye(t, n, e) {
    if (typeof n != "function")
        throw new Error("mapToCurve() must be defined");
    function r(i) {
        return t.fromAffine(n(i))
    }
    function s(i) {
        let o = i.clearCofactor();
        return o.equals(t.ZERO) ? t.ZERO : (o.assertValidity(),
        o)
    }
    return {
        defaults: e,
        hashToCurve(i, o) {
            let f = e.DST ? e.DST : {}
              , a = Object.assign({}, e, f, o)
              , l = Pe(i, 2, a)
              , c = r(l[0])
              , m = r(l[1]);
            return s(c.add(m))
        },
        encodeToCurve(i, o) {
            let f = e.encodeDST ? e.encodeDST : {}
              , a = Object.assign({}, e, f, o)
              , l = Pe(i, 1, a);
            return s(r(l[0]))
        },
        mapToCurve(i) {
            if (!Array.isArray(i))
                throw new Error("expected array of bigints");
            for (let o of i)
                if (typeof o != "bigint")
                    throw new Error("expected array of bigints");
            return s(r(i))
        }
    }
}
var pn, Ge = ot( () => {
    "use strict";
    _t();
    It();
    pn = Q
}
);
function Qe(t) {
    let n = tt.p
      , e = BigInt(3)
      , r = BigInt(6)
      , s = BigInt(11)
      , i = BigInt(22)
      , o = BigInt(23)
      , f = BigInt(44)
      , a = BigInt(88)
      , l = t * t * t % n
      , c = l * l * t % n
      , m = X(c, e, n) * c % n
      , w = X(m, e, n) * c % n
      , p = X(w, zt, n) * l % n
      , B = X(p, s, n) * p % n
      , q = X(B, i, n) * B % n
      , O = X(q, f, n) * q % n
      , N = X(O, a, n) * O % n
      , R = X(N, f, n) * q % n
      , H = X(R, e, n) * c % n
      , Z = X(H, o, n) * B % n
      , _ = X(Z, r, n) * l % n
      , W = X(_, zt, n);
    if (!nt.eql(nt.sqr(W), t))
        throw new Error("Cannot find square root");
    return W
}
function Ut(t, ...n) {
    let e = Xe[t];
    if (e === void 0) {
        let r = vt(Uint8Array.from(t, s => s.charCodeAt(0)));
        e = V(r, r),
        Xe[t] = e
    }
    return vt(V(e, ...n))
}
function ne(t) {
    let n = jt.utils.normPrivateKeyToScalar(t)
      , e = oe.fromPrivateKey(n);
    return {
        scalar: se(e.y) ? n : Ot(-n),
        bytes: re(e)
    }
}
function Je(t) {
    Ht("x", t, Ct, tt.p);
    let n = te(t * t)
      , e = te(n * t + BigInt(7))
      , r = Qe(e);
    se(r) || (r = te(-r));
    let s = oe.fromAffine({
        x: t,
        y: r
    });
    return s.assertValidity(),
    s
}
function Fe(...t) {
    return Ot(xt(Ut("BIP0340/challenge", ...t)))
}
function Bn(t) {
    return ne(t).bytes
}
function Sn(t, n, e=Tt(32)) {
    let r = k("message", t)
      , {bytes: s, scalar: i} = ne(n)
      , o = k("auxRand", e, 32)
      , f = ee(i ^ xt(Ut("BIP0340/aux", o)))
      , a = Ut("BIP0340/nonce", f, s, r)
      , l = Ot(xt(a));
    if (l === $e)
        throw new Error("sign failed: k is zero");
    let {bytes: c, scalar: m} = ne(l)
      , w = Fe(c, s, r)
      , p = new Uint8Array(64);
    if (p.set(c, 0),
    p.set(ee(Ot(m + w * i)), 32),
    !tn(p, r, s))
        throw new Error("sign: Invalid signature produced");
    return p
}
function tn(t, n, e) {
    let r = k("signature", t, 64)
      , s = k("message", n)
      , i = k("publicKey", e, 32);
    try {
        let o = Je(xt(i))
          , f = xt(r.subarray(0, 32));
        if (!Lt(f, Ct, tt.p))
            return !1;
        let a = xt(r.subarray(32, 64));
        if (!Lt(a, Ct, tt.n))
            return !1;
        let l = Fe(ee(f), re(o), s)
          , c = oe.BASE.multiplyUnsafe(a).add(o.multiplyUnsafe(Ot(-l)))
          , {x: m, y: w} = c.toAffine();
        return !(c.is0() || !se(w) || m !== f)
    } catch {
        return !1
    }
}
var tt, $e, Ct, zt, We, nt, jt, Xe, re, ee, te, Ot, oe, se, xt, nr, _n, In, en, rr, or, qn = ot( () => {
    nn();
    le();
    Ke();
    Ge();
    It();
    Ft();
    _t();
    tt = {
        p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
        n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
        h: BigInt(1),
        a: BigInt(0),
        b: BigInt(7),
        Gx: BigInt("0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"),
        Gy: BigInt("0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8")
    },
    $e = BigInt(0),
    Ct = BigInt(1),
    zt = BigInt(2),
    We = (t, n) => (t + n / zt) / n;
    nt = ft(tt.p, void 0, void 0, {
        sqrt: Qe
    }),
    jt = Ve(wt(mt({}, tt), {
        Fp: nt,
        lowS: !0,
        endo: {
            beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
            splitScalar: t => {
                let n = tt.n
                  , e = BigInt("0x3086d221a7d46bcde86c90e49284eb15")
                  , r = -Ct * BigInt("0xe4437ed6010e88286f547fa90abfe4c3")
                  , s = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8")
                  , i = e
                  , o = BigInt("0x100000000000000000000000000000000")
                  , f = We(i * t, n)
                  , a = We(-r * t, n)
                  , l = z(t - f * e - a * s, n)
                  , c = z(-f * r - a * i, n)
                  , m = l > o
                  , w = c > o;
                if (m && (l = n - l),
                w && (c = n - c),
                l > o || c > o)
                    throw new Error("splitScalar: Endomorphism failed, k=" + t);
                return {
                    k1neg: m,
                    k1: l,
                    k2neg: w,
                    k2: c
                }
            }
        }
    }), vt),
    Xe = {};
    re = t => t.toBytes(!0).slice(1),
    ee = t => gt(t, 32),
    te = t => z(t, tt.p),
    Ot = t => z(t, tt.n),
    oe = jt.Point,
    se = t => t % zt === $e;
    xt = Q;
    nr = {
        getPublicKey: Bn,
        sign: Sn,
        verify: tn,
        utils: {
            randomPrivateKey: jt.utils.randomPrivateKey,
            lift_x: Je,
            pointToBytes: re,
            numberToBytesBE: gt,
            bytesToNumberBE: Q,
            taggedHash: Ut,
            mod: z
        }
    },
    _n = De(nt, [["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7", "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581", "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262", "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"], ["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b", "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14", "0x0000000000000000000000000000000000000000000000000000000000000001"], ["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c", "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3", "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931", "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"], ["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b", "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573", "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f", "0x0000000000000000000000000000000000000000000000000000000000000001"]].map(t => t.map(n => BigInt(n)))),
    In = Me(nt, {
        A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
        B: BigInt("1771"),
        Z: nt.create(BigInt("-11"))
    }),
    en = Ye(jt.Point, t => {
        let {x: n, y: e} = In(nt.create(t[0]));
        return _n(n, e)
    }
    , {
        DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
        encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
        p: nt.ORDER,
        m: 1,
        k: 128,
        expand: "xmd",
        hash: vt
    }),
    rr = en.hashToCurve,
    or = en.encodeToCurve
}
);
export {z as a, X as b, Rn as c, ft as d, It as e, Ne as f, Te as g, He as h, Ze as i, ke as j, jt as k, nr as l, en as m, rr as n, or as o, qn as p};
