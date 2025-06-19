import {a as qe, b as Ce, c as Ls, d as rn, e as vs, f as Cs, g as Bs, h as xs, i as Ps, j as Vi, k as sn, p as Gi} from "./chunk-3UTD3T6B.js";
import {a as Ds, b as pr, c as Hi} from "./chunk-5OD6RQ4E.js";
import {a as dr, b as Ki} from "./chunk-YTUIZ7QE.js";
import {a as tn, d as nn, f as fr, g as Pe, i as mt, n as lr, o as hr, p as Wi} from "./chunk-KOO2GJBY.js";
import {a as _r, b as qi} from "./chunk-VQJZCEAB.js";
import {b as Ts, c as $i} from "./chunk-CRYW3XTN.js";
import {E as ks, I as ur, L as Ns, v as Os} from "./chunk-6WGECOWL.js";
import {a as C, b as F, d as ve, e as Q, f as it, g as ar, i as Ge, j as cr, l as m} from "./chunk-JOVT4LBN.js";
function Xi(r, e, t, n) {
    let s = r.sqr(t)
      , o = r.sqr(n)
      , i = r.add(r.mul(e.a, s), o)
      , a = r.add(r.ONE, r.mul(e.d, r.mul(s, o)));
    return r.eql(i, a)
}
function Ji(r, e={}) {
    let {Fp: t, Fn: n} = Ps("edwards", r, e)
      , {h: s, n: o} = r;
    lr(e, {}, {
        uvRatio: "function"
    });
    let i = yr << BigInt(n.BYTES * 8) - Se
      , a = R => t.create(R)
      , c = e.uvRatio || ( (R, p) => {
        try {
            return {
                isValid: !0,
                value: t.sqrt(t.div(R, p))
            }
        } catch {
            return {
                isValid: !1,
                value: De
            }
        }
    }
    );
    if (!Xi(t, r, r.Gx, r.Gy))
        throw new Error("bad curve params: generator point");
    function d(R, p, S=!1) {
        let N = S ? Se : De;
        return mt("coordinate " + R, p, N, i),
        p
    }
    function _(R) {
        if (!(R instanceof h))
            throw new Error("ExtendedPoint expected")
    }
    let y = hr( (R, p) => {
        let {ex: S, ey: N, ez: x} = R
          , P = R.is0();
        p == null && (p = P ? ji : t.inv(x));
        let L = a(S * p)
          , D = a(N * p)
          , U = a(x * p);
        if (P)
            return {
                x: De,
                y: Se
            };
        if (U !== Se)
            throw new Error("invZ was invalid");
        return {
            x: L,
            y: D
        }
    }
    )
      , A = hr(R => {
        let {a: p, d: S} = r;
        if (R.is0())
            throw new Error("bad point: ZERO");
        let {ex: N, ey: x, ez: P, et: L} = R
          , D = a(N * N)
          , U = a(x * x)
          , q = a(P * P)
          , re = a(q * q)
          , te = a(D * p)
          , ie = a(q * a(te + U))
          , Ae = a(re + a(S * a(D * U)));
        if (ie !== Ae)
            throw new Error("bad point: equation left != right (1)");
        let oe = a(N * x)
          , me = a(P * L);
        if (oe !== me)
            throw new Error("bad point: equation left != right (2)");
        return !0
    }
    );
    class h {
        constructor(p, S, N, x) {
            this.ex = d("x", p),
            this.ey = d("y", S),
            this.ez = d("z", N, !0),
            this.et = d("t", x),
            Object.freeze(this)
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static fromAffine(p) {
            if (p instanceof h)
                throw new Error("extended point not allowed");
            let {x: S, y: N} = p || {};
            return d("x", S),
            d("y", N),
            new h(S,N,Se,a(S * N))
        }
        static normalizeZ(p) {
            return Cs(h, "ez", p)
        }
        static msm(p, S) {
            return xs(h, n, p, S)
        }
        _setWindowSize(p) {
            this.precompute(p)
        }
        precompute(p=8, S=!0) {
            return g.setWindowSize(this, p),
            S || this.multiply(yr),
            this
        }
        assertValidity() {
            A(this)
        }
        equals(p) {
            _(p);
            let {ex: S, ey: N, ez: x} = this
              , {ex: P, ey: L, ez: D} = p
              , U = a(S * D)
              , q = a(P * x)
              , re = a(N * D)
              , te = a(L * x);
            return U === q && re === te
        }
        is0() {
            return this.equals(h.ZERO)
        }
        negate() {
            return new h(a(-this.ex),this.ey,this.ez,a(-this.et))
        }
        double() {
            let {a: p} = r
              , {ex: S, ey: N, ez: x} = this
              , P = a(S * S)
              , L = a(N * N)
              , D = a(yr * a(x * x))
              , U = a(p * P)
              , q = S + N
              , re = a(a(q * q) - P - L)
              , te = U + L
              , ie = te - D
              , Ae = U - L
              , oe = a(re * ie)
              , me = a(te * Ae)
              , ke = a(re * Ae)
              , Je = a(ie * te);
            return new h(oe,me,Je,ke)
        }
        add(p) {
            _(p);
            let {a: S, d: N} = r
              , {ex: x, ey: P, ez: L, et: D} = this
              , {ex: U, ey: q, ez: re, et: te} = p
              , ie = a(x * U)
              , Ae = a(P * q)
              , oe = a(D * N * te)
              , me = a(L * re)
              , ke = a((x + P) * (U + q) - ie - Ae)
              , Je = me - oe
              , or = me + oe
              , ir = a(Ae - S * ie)
              , Ui = a(ke * Je)
              , zi = a(or * ir)
              , Mi = a(ke * ir)
              , Fi = a(Je * or);
            return new h(Ui,zi,Fi,Mi)
        }
        subtract(p) {
            return this.add(p.negate())
        }
        multiply(p) {
            let S = p;
            mt("scalar", S, Se, o);
            let {p: N, f: x} = g.wNAFCached(this, S, h.normalizeZ);
            return h.normalizeZ([N, x])[0]
        }
        multiplyUnsafe(p, S=h.ZERO) {
            let N = p;
            return mt("scalar", N, De, o),
            N === De ? h.ZERO : this.is0() || N === Se ? this : g.wNAFCachedUnsafe(this, N, h.normalizeZ, S)
        }
        isSmallOrder() {
            return this.multiplyUnsafe(s).is0()
        }
        isTorsionFree() {
            return g.wNAFCachedUnsafe(this, o).is0()
        }
        toAffine(p) {
            return y(this, p)
        }
        clearCofactor() {
            return s === Se ? this : this.multiplyUnsafe(s)
        }
        static fromBytes(p, S=!1) {
            return Os(p),
            this.fromHex(p, S)
        }
        static fromHex(p, S=!1) {
            let {d: N, a: x} = r
              , P = t.BYTES;
            p = Pe("pointHex", p, P),
            tn("zip215", S);
            let L = p.slice()
              , D = p[P - 1];
            L[P - 1] = D & -129;
            let U = nn(L)
              , q = S ? i : t.ORDER;
            mt("pointHex.y", U, De, q);
            let re = a(U * U)
              , te = a(re - Se)
              , ie = a(N * re - x)
              , {isValid: Ae, value: oe} = c(te, ie);
            if (!Ae)
                throw new Error("Point.fromHex: invalid y coordinate");
            let me = (oe & Se) === Se
              , ke = (D & 128) !== 0;
            if (!S && oe === De && ke)
                throw new Error("Point.fromHex: x=0 and x_0=1");
            return ke !== me && (oe = a(-oe)),
            h.fromAffine({
                x: oe,
                y: U
            })
        }
        static fromPrivateScalar(p) {
            return h.BASE.multiply(p)
        }
        toBytes() {
            let {x: p, y: S} = this.toAffine()
              , N = fr(S, t.BYTES);
            return N[N.length - 1] |= p & Se ? 128 : 0,
            N
        }
        toRawBytes() {
            return this.toBytes()
        }
        toHex() {
            return ks(this.toBytes())
        }
        toString() {
            return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`
        }
    }
    h.BASE = new h(r.Gx,r.Gy,Se,a(r.Gx * r.Gy)),
    h.ZERO = new h(De,Se,Se,De),
    h.Fp = t,
    h.Fn = n;
    let g = Bs(h, n.BYTES * 8);
    return h
}
function Zi(r, e) {
    lr(e, {
        hash: "function"
    }, {
        adjustScalarBytes: "function",
        randomBytes: "function",
        domain: "function",
        prehash: "function",
        mapToCurve: "function"
    });
    let {prehash: t, hash: n} = e
      , {BASE: s, Fp: o, Fn: i} = r
      , a = i.ORDER
      , c = e.randomBytes || Ns
      , d = e.adjustScalarBytes || (L => L)
      , _ = e.domain || ( (L, D, U) => {
        if (tn("phflag", U),
        D.length || U)
            throw new Error("Contexts/pre-hash are not supported");
        return L
    }
    );
    function y(L) {
        return i.create(L)
    }
    function A(L) {
        return y(nn(L))
    }
    function h(L) {
        let D = o.BYTES;
        L = Pe("private key", L, D);
        let U = Pe("hashed private key", n(L), 2 * D)
          , q = d(U.slice(0, D))
          , re = U.slice(D, 2 * D)
          , te = A(q);
        return {
            head: q,
            prefix: re,
            scalar: te
        }
    }
    function g(L) {
        let {head: D, prefix: U, scalar: q} = h(L)
          , re = s.multiply(q)
          , te = re.toBytes();
        return {
            head: D,
            prefix: U,
            scalar: q,
            point: re,
            pointBytes: te
        }
    }
    function R(L) {
        return g(L).pointBytes
    }
    function p(L=Uint8Array.of(), ...D) {
        let U = ur(...D);
        return A(n(_(U, Pe("context", L), !!t)))
    }
    function S(L, D, U={}) {
        L = Pe("message", L),
        t && (L = t(L));
        let {prefix: q, scalar: re, pointBytes: te} = g(D)
          , ie = p(U.context, q, L)
          , Ae = s.multiply(ie).toBytes()
          , oe = p(U.context, Ae, te, L)
          , me = y(ie + oe * re);
        mt("signature.s", me, De, a);
        let ke = o.BYTES
          , Je = ur(Ae, fr(me, ke));
        return Pe("result", Je, ke * 2)
    }
    let N = Yi;
    function x(L, D, U, q=N) {
        let {context: re, zip215: te} = q
          , ie = o.BYTES;
        L = Pe("signature", L, 2 * ie),
        D = Pe("message", D),
        U = Pe("publicKey", U, ie),
        te !== void 0 && tn("zip215", te),
        t && (D = t(D));
        let Ae = nn(L.slice(ie, 2 * ie)), oe, me, ke;
        try {
            oe = r.fromHex(U, te),
            me = r.fromHex(L.slice(0, ie), te),
            ke = s.multiplyUnsafe(Ae)
        } catch {
            return !1
        }
        if (!te && oe.isSmallOrder())
            return !1;
        let Je = p(re, me.toBytes(), oe.toBytes(), D);
        return me.add(oe.multiplyUnsafe(Je)).subtract(ke).clearCofactor().is0()
    }
    return s.precompute(8),
    {
        getPublicKey: R,
        sign: S,
        verify: x,
        utils: {
            getExtendedPublicKey: g,
            randomPrivateKey: () => c(o.BYTES),
            precompute(L=8, D=r.BASE) {
                return D.precompute(L, !1)
            }
        },
        Point: r
    }
}
function Qi(r) {
    let e = {
        a: r.a,
        d: r.d,
        p: r.Fp.ORDER,
        n: r.n,
        h: r.h,
        Gx: r.Gx,
        Gy: r.Gy
    }
      , t = r.Fp
      , n = rn(e.n, r.nBitLength, !0)
      , s = {
        Fp: t,
        Fn: n,
        uvRatio: r.uvRatio
    }
      , o = {
        hash: r.hash,
        randomBytes: r.randomBytes,
        adjustScalarBytes: r.adjustScalarBytes,
        domain: r.domain,
        prehash: r.prehash,
        mapToCurve: r.mapToCurve
    };
    return {
        CURVE: e,
        curveOpts: s,
        eddsaOpts: o
    }
}
function ea(r, e) {
    return Object.assign({}, e, {
        ExtendedPoint: e.Point,
        CURVE: r
    })
}
function Us(r) {
    let {CURVE: e, curveOpts: t, eddsaOpts: n} = Qi(r)
      , s = Ji(e, t)
      , o = Zi(s, n);
    return ea(r, o)
}
var De, Se, yr, ji, Yi, zs = Q( () => {
    "use strict";
    Wi();
    Vi();
    vs();
    De = BigInt(0),
    Se = BigInt(1),
    yr = BigInt(2),
    ji = BigInt(8),
    Yi = {
        zip215: !0
    }
}
);
function sa(r) {
    let e = BigInt(10)
      , t = BigInt(20)
      , n = BigInt(40)
      , s = BigInt(80)
      , o = on.p
      , a = r * r % o * r % o
      , c = Ce(a, Ms, o) * a % o
      , d = Ce(c, ta, o) * r % o
      , _ = Ce(d, na, o) * d % o
      , y = Ce(_, e, o) * _ % o
      , A = Ce(y, t, o) * y % o
      , h = Ce(A, n, o) * A % o
      , g = Ce(h, s, o) * h % o
      , R = Ce(g, s, o) * h % o
      , p = Ce(R, e, o) * _ % o;
    return {
        pow_p_5_8: Ce(p, Ms, o) * r % o,
        b2: a
    }
}
function oa(r) {
    return r[0] &= 248,
    r[31] &= 127,
    r[31] |= 64,
    r
}
function ia(r, e) {
    let t = on.p
      , n = qe(e * e * e, t)
      , s = qe(n * n * e, t)
      , o = sa(r * s).pow_p_5_8
      , i = qe(r * n * o, t)
      , a = qe(e * i * i, t)
      , c = i
      , d = qe(i * Fs, t)
      , _ = a === r
      , y = a === qe(-r, t)
      , A = a === qe(-r * Fs, t);
    return _ && (i = c),
    (y || A) && (i = d),
    Ls(i, t) && (i = qe(-i, t)),
    {
        isValid: _ || y,
        value: i
    }
}
var v_, ta, Ms, C_, na, ra, on, Fs, aa, ca, at, Ks = Q( () => {
    "use strict";
    $i();
    zs();
    vs();
    v_ = BigInt(0),
    ta = BigInt(1),
    Ms = BigInt(2),
    C_ = BigInt(3),
    na = BigInt(5),
    ra = BigInt(8),
    on = {
        p: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"),
        n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),
        h: ra,
        a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),
        d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),
        Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),
        Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")
    };
    Fs = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
    aa = rn(on.p, void 0, !0),
    ca = F(C({}, on), {
        Fp: aa,
        hash: Ts,
        adjustScalarBytes: oa,
        uvRatio: ia
    }),
    at = Us(ca)
}
);
var Ws = it( (P_, $s) => {
    "use strict";
    var an = Hi().Buffer;
    function ua(r) {
        if (r.length >= 255)
            throw new TypeError("Alphabet too long");
        for (var e = new Uint8Array(256), t = 0; t < e.length; t++)
            e[t] = 255;
        for (var n = 0; n < r.length; n++) {
            var s = r.charAt(n)
              , o = s.charCodeAt(0);
            if (e[o] !== 255)
                throw new TypeError(s + " is ambiguous");
            e[o] = n
        }
        var i = r.length
          , a = r.charAt(0)
          , c = Math.log(i) / Math.log(256)
          , d = Math.log(256) / Math.log(i);
        function _(h) {
            if ((Array.isArray(h) || h instanceof Uint8Array) && (h = an.from(h)),
            !an.isBuffer(h))
                throw new TypeError("Expected Buffer");
            if (h.length === 0)
                return "";
            for (var g = 0, R = 0, p = 0, S = h.length; p !== S && h[p] === 0; )
                p++,
                g++;
            for (var N = (S - p) * d + 1 >>> 0, x = new Uint8Array(N); p !== S; ) {
                for (var P = h[p], L = 0, D = N - 1; (P !== 0 || L < R) && D !== -1; D--,
                L++)
                    P += 256 * x[D] >>> 0,
                    x[D] = P % i >>> 0,
                    P = P / i >>> 0;
                if (P !== 0)
                    throw new Error("Non-zero carry");
                R = L,
                p++
            }
            for (var U = N - R; U !== N && x[U] === 0; )
                U++;
            for (var q = a.repeat(g); U < N; ++U)
                q += r.charAt(x[U]);
            return q
        }
        function y(h) {
            if (typeof h != "string")
                throw new TypeError("Expected String");
            if (h.length === 0)
                return an.alloc(0);
            for (var g = 0, R = 0, p = 0; h[g] === a; )
                R++,
                g++;
            for (var S = (h.length - g) * c + 1 >>> 0, N = new Uint8Array(S); g < h.length; ) {
                var x = h.charCodeAt(g);
                if (x > 255)
                    return;
                var P = e[x];
                if (P === 255)
                    return;
                for (var L = 0, D = S - 1; (P !== 0 || L < p) && D !== -1; D--,
                L++)
                    P += i * N[D] >>> 0,
                    N[D] = P % 256 >>> 0,
                    P = P / 256 >>> 0;
                if (P !== 0)
                    throw new Error("Non-zero carry");
                p = L,
                g++
            }
            for (var U = S - p; U !== S && N[U] === 0; )
                U++;
            var q = an.allocUnsafe(R + (S - U));
            q.fill(0, 0, R);
            for (var re = R; U !== S; )
                q[re++] = N[U++];
            return q
        }
        function A(h) {
            var g = y(h);
            if (g)
                return g;
            throw new Error("Non-base" + i + " character")
        }
        return {
            encode: _,
            decodeUnsafe: y,
            decode: A
        }
    }
    $s.exports = ua
}
);
var gr = it( (D_, Vs) => {
    "use strict";
    var da = Ws()
      , fa = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    Vs.exports = da(fa)
}
);
var Gs = {};
ar(Gs, {
    TextDecoder: () => dn,
    TextEncoder: () => fn
});
function He(r, e, t) {
    return e <= r && r <= t
}
function ln(r) {
    if (r === void 0)
        return {};
    if (r === Object(r))
        return r;
    throw TypeError("Could not convert argument to dictionary")
}
function la(r) {
    for (var e = String(r), t = e.length, n = 0, s = []; n < t; ) {
        var o = e.charCodeAt(n);
        if (o < 55296 || o > 57343)
            s.push(o);
        else if (56320 <= o && o <= 57343)
            s.push(65533);
        else if (55296 <= o && o <= 56319)
            if (n === t - 1)
                s.push(65533);
            else {
                var i = r.charCodeAt(n + 1);
                if (56320 <= i && i <= 57343) {
                    var a = o & 1023
                      , c = i & 1023;
                    s.push(65536 + (a << 10) + c),
                    n += 1
                } else
                    s.push(65533)
            }
        n += 1
    }
    return s
}
function ha(r) {
    for (var e = "", t = 0; t < r.length; ++t) {
        var n = r[t];
        n <= 65535 ? e += String.fromCharCode(n) : (n -= 65536,
        e += String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320))
    }
    return e
}
function mr(r) {
    this.tokens = [].slice.call(r)
}
function Rr(r, e) {
    if (r)
        throw TypeError("Decoder error");
    return e || 65533
}
function _a() {}
function pa() {}
function dn(r, e) {
    if (!(this instanceof dn))
        return new dn(r,e);
    if (r = r !== void 0 ? String(r).toLowerCase() : un,
    r !== un)
        throw new Error("Encoding not supported. Only utf-8 is supported");
    e = ln(e),
    this._streaming = !1,
    this._BOMseen = !1,
    this._decoder = null,
    this._fatal = !!e.fatal,
    this._ignoreBOM = !!e.ignoreBOM,
    Object.defineProperty(this, "encoding", {
        value: "utf-8"
    }),
    Object.defineProperty(this, "fatal", {
        value: this._fatal
    }),
    Object.defineProperty(this, "ignoreBOM", {
        value: this._ignoreBOM
    })
}
function fn(r, e) {
    if (!(this instanceof fn))
        return new fn(r,e);
    if (r = r !== void 0 ? String(r).toLowerCase() : un,
    r !== un)
        throw new Error("Encoding not supported. Only utf-8 is supported");
    e = ln(e),
    this._streaming = !1,
    this._encoder = null,
    this._options = {
        fatal: !!e.fatal
    },
    Object.defineProperty(this, "encoding", {
        value: "utf-8"
    })
}
function ya(r) {
    var e = r.fatal
      , t = 0
      , n = 0
      , s = 0
      , o = 128
      , i = 191;
    this.handler = function(a, c) {
        if (c === cn && s !== 0)
            return s = 0,
            Rr(e);
        if (c === cn)
            return St;
        if (s === 0) {
            if (He(c, 0, 127))
                return c;
            if (He(c, 194, 223))
                s = 1,
                t = c - 192;
            else if (He(c, 224, 239))
                c === 224 && (o = 160),
                c === 237 && (i = 159),
                s = 2,
                t = c - 224;
            else if (He(c, 240, 244))
                c === 240 && (o = 144),
                c === 244 && (i = 143),
                s = 3,
                t = c - 240;
            else
                return Rr(e);
            return t = t << 6 * s,
            null
        }
        if (!He(c, o, i))
            return t = s = n = 0,
            o = 128,
            i = 191,
            a.prepend(c),
            Rr(e);
        if (o = 128,
        i = 191,
        n += 1,
        t += c - 128 << 6 * (s - n),
        n !== s)
            return null;
        var d = t;
        return t = s = n = 0,
        d
    }
}
function ga(r) {
    var e = r.fatal;
    this.handler = function(t, n) {
        if (n === cn)
            return St;
        if (He(n, 0, 127))
            return n;
        var s, o;
        He(n, 128, 2047) ? (s = 1,
        o = 192) : He(n, 2048, 65535) ? (s = 2,
        o = 224) : He(n, 65536, 1114111) && (s = 3,
        o = 240);
        for (var i = [(n >> 6 * s) + o]; s > 0; ) {
            var a = n >> 6 * (s - 1);
            i.push(128 | a & 63),
            s -= 1
        }
        return i
    }
}
var cn, St, un, qs = Q( () => {
    "use strict";
    cn = -1;
    mr.prototype = {
        endOfStream: function() {
            return !this.tokens.length
        },
        read: function() {
            return this.tokens.length ? this.tokens.shift() : cn
        },
        prepend: function(r) {
            if (Array.isArray(r))
                for (var e = r; e.length; )
                    this.tokens.unshift(e.pop());
            else
                this.tokens.unshift(r)
        },
        push: function(r) {
            if (Array.isArray(r))
                for (var e = r; e.length; )
                    this.tokens.push(e.shift());
            else
                this.tokens.push(r)
        }
    };
    St = -1;
    _a.prototype = {
        handler: function(r, e) {}
    };
    pa.prototype = {
        handler: function(r, e) {}
    };
    un = "utf-8";
    dn.prototype = {
        decode: function(e, t) {
            var n;
            typeof e == "object" && e instanceof ArrayBuffer ? n = new Uint8Array(e) : typeof e == "object" && "buffer"in e && e.buffer instanceof ArrayBuffer ? n = new Uint8Array(e.buffer,e.byteOffset,e.byteLength) : n = new Uint8Array(0),
            t = ln(t),
            this._streaming || (this._decoder = new ya({
                fatal: this._fatal
            }),
            this._BOMseen = !1),
            this._streaming = !!t.stream;
            for (var s = new mr(n), o = [], i; !s.endOfStream() && (i = this._decoder.handler(s, s.read()),
            i !== St); )
                i !== null && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
            if (!this._streaming) {
                do {
                    if (i = this._decoder.handler(s, s.read()),
                    i === St)
                        break;
                    i !== null && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i))
                } while (!s.endOfStream());
                this._decoder = null
            }
            return o.length && ["utf-8"].indexOf(this.encoding) !== -1 && !this._ignoreBOM && !this._BOMseen && (o[0] === 65279 ? (this._BOMseen = !0,
            o.shift()) : this._BOMseen = !0),
            ha(o)
        }
    };
    fn.prototype = {
        encode: function(e, t) {
            e = e ? String(e) : "",
            t = ln(t),
            this._streaming || (this._encoder = new ga(this._options)),
            this._streaming = !!t.stream;
            for (var n = [], s = new mr(la(e)), o; !s.endOfStream() && (o = this._encoder.handler(s, s.read()),
            o !== St); )
                Array.isArray(o) ? n.push.apply(n, o) : n.push(o);
            if (!this._streaming) {
                for (; o = this._encoder.handler(s, s.read()),
                o !== St; )
                    Array.isArray(o) ? n.push.apply(n, o) : n.push(o);
                this._encoder = null
            }
            return new Uint8Array(n)
        }
    }
}
);
var Js = it(X => {
    "use strict";
    var Ra = X && X.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t),
        Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t]
            }
        })
    }
    : function(r, e, t, n) {
        n === void 0 && (n = t),
        r[n] = e[t]
    }
    )
      , ma = X && X.__setModuleDefault || (Object.create ? function(r, e) {
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        })
    }
    : function(r, e) {
        r.default = e
    }
    )
      , Ue = X && X.__decorate || function(r, e, t, n) {
        var s = arguments.length, o = s < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, t) : n, i;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
            o = Reflect.decorate(r, e, t, n);
        else
            for (var a = r.length - 1; a >= 0; a--)
                (i = r[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, t, o) : i(e, t)) || o);
        return s > 3 && o && Object.defineProperty(e, t, o),
        o
    }
      , Sa = X && X.__importStar || function(r) {
        if (r && r.__esModule)
            return r;
        var e = {};
        if (r != null)
            for (var t in r)
                t !== "default" && Object.hasOwnProperty.call(r, t) && Ra(e, r, t);
        return ma(e, r),
        e
    }
      , Hs = X && X.__importDefault || function(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    }
    ;
    Object.defineProperty(X, "__esModule", {
        value: !0
    });
    X.deserializeUnchecked = X.deserialize = X.serialize = X.BinaryReader = X.BinaryWriter = X.BorshError = X.baseDecode = X.baseEncode = void 0;
    var Ze = Hs(Ds())
      , js = Hs(gr())
      , ba = Sa((qs(),
    cr(Gs)))
      , Ea = typeof TextDecoder != "function" ? ba.TextDecoder : TextDecoder
      , Aa = new Ea("utf-8",{
        fatal: !0
    });
    function Ia(r) {
        return typeof r == "string" && (r = Buffer.from(r, "utf8")),
        js.default.encode(Buffer.from(r))
    }
    X.baseEncode = Ia;
    function wa(r) {
        return Buffer.from(js.default.decode(r))
    }
    X.baseDecode = wa;
    var Sr = 1024
      , ue = class extends Error {
        constructor(e) {
            super(e),
            this.fieldPath = [],
            this.originalMessage = e
        }
        addToFieldPath(e) {
            this.fieldPath.splice(0, 0, e),
            this.message = this.originalMessage + ": " + this.fieldPath.join(".")
        }
    }
    ;
    X.BorshError = ue;
    var hn = class {
        constructor() {
            this.buf = Buffer.alloc(Sr),
            this.length = 0
        }
        maybeResize() {
            this.buf.length < 16 + this.length && (this.buf = Buffer.concat([this.buf, Buffer.alloc(Sr)]))
        }
        writeU8(e) {
            this.maybeResize(),
            this.buf.writeUInt8(e, this.length),
            this.length += 1
        }
        writeU16(e) {
            this.maybeResize(),
            this.buf.writeUInt16LE(e, this.length),
            this.length += 2
        }
        writeU32(e) {
            this.maybeResize(),
            this.buf.writeUInt32LE(e, this.length),
            this.length += 4
        }
        writeU64(e) {
            this.maybeResize(),
            this.writeBuffer(Buffer.from(new Ze.default(e).toArray("le", 8)))
        }
        writeU128(e) {
            this.maybeResize(),
            this.writeBuffer(Buffer.from(new Ze.default(e).toArray("le", 16)))
        }
        writeU256(e) {
            this.maybeResize(),
            this.writeBuffer(Buffer.from(new Ze.default(e).toArray("le", 32)))
        }
        writeU512(e) {
            this.maybeResize(),
            this.writeBuffer(Buffer.from(new Ze.default(e).toArray("le", 64)))
        }
        writeBuffer(e) {
            this.buf = Buffer.concat([Buffer.from(this.buf.subarray(0, this.length)), e, Buffer.alloc(Sr)]),
            this.length += e.length
        }
        writeString(e) {
            this.maybeResize();
            let t = Buffer.from(e, "utf8");
            this.writeU32(t.length),
            this.writeBuffer(t)
        }
        writeFixedArray(e) {
            this.writeBuffer(Buffer.from(e))
        }
        writeArray(e, t) {
            this.maybeResize(),
            this.writeU32(e.length);
            for (let n of e)
                this.maybeResize(),
                t(n)
        }
        toArray() {
            return this.buf.subarray(0, this.length)
        }
    }
    ;
    X.BinaryWriter = hn;
    function ze(r, e, t) {
        let n = t.value;
        t.value = function(...s) {
            try {
                return n.apply(this, s)
            } catch (o) {
                if (o instanceof RangeError) {
                    let i = o.code;
                    if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(i) >= 0)
                        throw new ue("Reached the end of buffer when deserializing")
                }
                throw o
            }
        }
    }
    var be = class {
        constructor(e) {
            this.buf = e,
            this.offset = 0
        }
        readU8() {
            let e = this.buf.readUInt8(this.offset);
            return this.offset += 1,
            e
        }
        readU16() {
            let e = this.buf.readUInt16LE(this.offset);
            return this.offset += 2,
            e
        }
        readU32() {
            let e = this.buf.readUInt32LE(this.offset);
            return this.offset += 4,
            e
        }
        readU64() {
            let e = this.readBuffer(8);
            return new Ze.default(e,"le")
        }
        readU128() {
            let e = this.readBuffer(16);
            return new Ze.default(e,"le")
        }
        readU256() {
            let e = this.readBuffer(32);
            return new Ze.default(e,"le")
        }
        readU512() {
            let e = this.readBuffer(64);
            return new Ze.default(e,"le")
        }
        readBuffer(e) {
            if (this.offset + e > this.buf.length)
                throw new ue(`Expected buffer length ${e} isn't within bounds`);
            let t = this.buf.slice(this.offset, this.offset + e);
            return this.offset += e,
            t
        }
        readString() {
            let e = this.readU32()
              , t = this.readBuffer(e);
            try {
                return Aa.decode(t)
            } catch (n) {
                throw new ue(`Error decoding UTF-8 string: ${n}`)
            }
        }
        readFixedArray(e) {
            return new Uint8Array(this.readBuffer(e))
        }
        readArray(e) {
            let t = this.readU32()
              , n = Array();
            for (let s = 0; s < t; ++s)
                n.push(e());
            return n
        }
    }
    ;
    Ue([ze], be.prototype, "readU8", null);
    Ue([ze], be.prototype, "readU16", null);
    Ue([ze], be.prototype, "readU32", null);
    Ue([ze], be.prototype, "readU64", null);
    Ue([ze], be.prototype, "readU128", null);
    Ue([ze], be.prototype, "readU256", null);
    Ue([ze], be.prototype, "readU512", null);
    Ue([ze], be.prototype, "readString", null);
    Ue([ze], be.prototype, "readFixedArray", null);
    Ue([ze], be.prototype, "readArray", null);
    X.BinaryReader = be;
    function Ys(r) {
        return r.charAt(0).toUpperCase() + r.slice(1)
    }
    function ct(r, e, t, n, s) {
        try {
            if (typeof n == "string")
                s[`write${Ys(n)}`](t);
            else if (n instanceof Array)
                if (typeof n[0] == "number") {
                    if (t.length !== n[0])
                        throw new ue(`Expecting byte array of length ${n[0]}, but got ${t.length} bytes`);
                    s.writeFixedArray(t)
                } else if (n.length === 2 && typeof n[1] == "number") {
                    if (t.length !== n[1])
                        throw new ue(`Expecting byte array of length ${n[1]}, but got ${t.length} bytes`);
                    for (let o = 0; o < n[1]; o++)
                        ct(r, null, t[o], n[0], s)
                } else
                    s.writeArray(t, o => {
                        ct(r, e, o, n[0], s)
                    }
                    );
            else if (n.kind !== void 0)
                switch (n.kind) {
                case "option":
                    {
                        t == null ? s.writeU8(0) : (s.writeU8(1),
                        ct(r, e, t, n.type, s));
                        break
                    }
                case "map":
                    {
                        s.writeU32(t.size),
                        t.forEach( (o, i) => {
                            ct(r, e, i, n.key, s),
                            ct(r, e, o, n.value, s)
                        }
                        );
                        break
                    }
                default:
                    throw new ue(`FieldType ${n} unrecognized`)
                }
            else
                Xs(r, t, s)
        } catch (o) {
            throw o instanceof ue && o.addToFieldPath(e),
            o
        }
    }
    function Xs(r, e, t) {
        if (typeof e.borshSerialize == "function") {
            e.borshSerialize(t);
            return
        }
        let n = r.get(e.constructor);
        if (!n)
            throw new ue(`Class ${e.constructor.name} is missing in schema`);
        if (n.kind === "struct")
            n.fields.map( ([s,o]) => {
                ct(r, s, e[s], o, t)
            }
            );
        else if (n.kind === "enum") {
            let s = e[n.field];
            for (let o = 0; o < n.values.length; ++o) {
                let[i,a] = n.values[o];
                if (i === s) {
                    t.writeU8(o),
                    ct(r, i, e[i], a, t);
                    break
                }
            }
        } else
            throw new ue(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`)
    }
    function Oa(r, e, t=hn) {
        let n = new t;
        return Xs(r, e, n),
        n.toArray()
    }
    X.serialize = Oa;
    function ut(r, e, t, n) {
        try {
            if (typeof t == "string")
                return n[`read${Ys(t)}`]();
            if (t instanceof Array) {
                if (typeof t[0] == "number")
                    return n.readFixedArray(t[0]);
                if (typeof t[1] == "number") {
                    let s = [];
                    for (let o = 0; o < t[1]; o++)
                        s.push(ut(r, null, t[0], n));
                    return s
                } else
                    return n.readArray( () => ut(r, e, t[0], n))
            }
            if (t.kind === "option")
                return n.readU8() ? ut(r, e, t.type, n) : void 0;
            if (t.kind === "map") {
                let s = new Map
                  , o = n.readU32();
                for (let i = 0; i < o; i++) {
                    let a = ut(r, e, t.key, n)
                      , c = ut(r, e, t.value, n);
                    s.set(a, c)
                }
                return s
            }
            return br(r, t, n)
        } catch (s) {
            throw s instanceof ue && s.addToFieldPath(e),
            s
        }
    }
    function br(r, e, t) {
        if (typeof e.borshDeserialize == "function")
            return e.borshDeserialize(t);
        let n = r.get(e);
        if (!n)
            throw new ue(`Class ${e.name} is missing in schema`);
        if (n.kind === "struct") {
            let s = {};
            for (let[o,i] of r.get(e).fields)
                s[o] = ut(r, o, i, t);
            return new e(s)
        }
        if (n.kind === "enum") {
            let s = t.readU8();
            if (s >= n.values.length)
                throw new ue(`Enum index: ${s} is out of range`);
            let[o,i] = n.values[s]
              , a = ut(r, o, i, t);
            return new e({
                [o]: a
            })
        }
        throw new ue(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`)
    }
    function ka(r, e, t, n=be) {
        let s = new n(t)
          , o = br(r, e, s);
        if (s.offset < t.length)
            throw new ue(`Unexpected ${t.length - s.offset} bytes after deserialized data`);
        return o
    }
    X.deserialize = ka;
    function Na(r, e, t, n=be) {
        let s = new n(t);
        return br(r, e, s)
    }
    X.deserializeUnchecked = Na
}
);
var wr = it(l => {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    });
    l.s16 = l.s8 = l.nu64be = l.u48be = l.u40be = l.u32be = l.u24be = l.u16be = l.nu64 = l.u48 = l.u40 = l.u32 = l.u24 = l.u16 = l.u8 = l.offset = l.greedy = l.Constant = l.UTF8 = l.CString = l.Blob = l.Boolean = l.BitField = l.BitStructure = l.VariantLayout = l.Union = l.UnionLayoutDiscriminator = l.UnionDiscriminator = l.Structure = l.Sequence = l.DoubleBE = l.Double = l.FloatBE = l.Float = l.NearInt64BE = l.NearInt64 = l.NearUInt64BE = l.NearUInt64 = l.IntBE = l.Int = l.UIntBE = l.UInt = l.OffsetLayout = l.GreedyCount = l.ExternalLayout = l.bindConstructorLayout = l.nameWithProperty = l.Layout = l.uint8ArrayToBuffer = l.checkUint8Array = void 0;
    l.constant = l.utf8 = l.cstr = l.blob = l.unionLayoutDiscriminator = l.union = l.seq = l.bits = l.struct = l.f64be = l.f64 = l.f32be = l.f32 = l.ns64be = l.s48be = l.s40be = l.s32be = l.s24be = l.s16be = l.ns64 = l.s48 = l.s40 = l.s32 = l.s24 = void 0;
    var Ar = pr();
    function At(r) {
        if (!(r instanceof Uint8Array))
            throw new TypeError("b must be a Uint8Array")
    }
    l.checkUint8Array = At;
    function W(r) {
        return At(r),
        Ar.Buffer.from(r.buffer, r.byteOffset, r.length)
    }
    l.uint8ArrayToBuffer = W;
    var G = class {
        constructor(e, t) {
            if (!Number.isInteger(e))
                throw new TypeError("span must be an integer");
            this.span = e,
            this.property = t
        }
        makeDestinationObject() {
            return {}
        }
        getSpan(e, t) {
            if (0 > this.span)
                throw new RangeError("indeterminate span");
            return this.span
        }
        replicate(e) {
            let t = Object.create(this.constructor.prototype);
            return Object.assign(t, this),
            t.property = e,
            t
        }
        fromArray(e) {}
    }
    ;
    l.Layout = G;
    function Ir(r, e) {
        return e.property ? r + "[" + e.property + "]" : r
    }
    l.nameWithProperty = Ir;
    function Ta(r, e) {
        if (typeof r != "function")
            throw new TypeError("Class must be constructor");
        if (Object.prototype.hasOwnProperty.call(r, "layout_"))
            throw new Error("Class is already bound to a layout");
        if (!(e && e instanceof G))
            throw new TypeError("layout must be a Layout");
        if (Object.prototype.hasOwnProperty.call(e, "boundConstructor_"))
            throw new Error("layout is already bound to a constructor");
        r.layout_ = e,
        e.boundConstructor_ = r,
        e.makeDestinationObject = () => new r,
        Object.defineProperty(r.prototype, "encode", {
            value(t, n) {
                return e.encode(this, t, n)
            },
            writable: !0
        }),
        Object.defineProperty(r, "decode", {
            value(t, n) {
                return e.decode(t, n)
            },
            writable: !0
        })
    }
    l.bindConstructorLayout = Ta;
    var le = class extends G {
        isCount() {
            throw new Error("ExternalLayout is abstract")
        }
    }
    ;
    l.ExternalLayout = le;
    var _n = class extends le {
        constructor(e=1, t) {
            if (!Number.isInteger(e) || 0 >= e)
                throw new TypeError("elementSpan must be a (positive) integer");
            super(-1, t),
            this.elementSpan = e
        }
        isCount() {
            return !0
        }
        decode(e, t=0) {
            At(e);
            let n = e.length - t;
            return Math.floor(n / this.elementSpan)
        }
        encode(e, t, n) {
            return 0
        }
    }
    ;
    l.GreedyCount = _n;
    var Bt = class extends le {
        constructor(e, t=0, n) {
            if (!(e instanceof G))
                throw new TypeError("layout must be a Layout");
            if (!Number.isInteger(t))
                throw new TypeError("offset must be integer or undefined");
            super(e.span, n || e.property),
            this.layout = e,
            this.offset = t
        }
        isCount() {
            return this.layout instanceof Ie || this.layout instanceof Ne
        }
        decode(e, t=0) {
            return this.layout.decode(e, t + this.offset)
        }
        encode(e, t, n=0) {
            return this.layout.encode(e, t, n + this.offset)
        }
    }
    ;
    l.OffsetLayout = Bt;
    var Ie = class extends G {
        constructor(e, t) {
            if (super(e, t),
            6 < this.span)
                throw new RangeError("span must not exceed 6 bytes")
        }
        decode(e, t=0) {
            return W(e).readUIntLE(t, this.span)
        }
        encode(e, t, n=0) {
            return W(t).writeUIntLE(e, n, this.span),
            this.span
        }
    }
    ;
    l.UInt = Ie;
    var Ne = class extends G {
        constructor(e, t) {
            if (super(e, t),
            6 < this.span)
                throw new RangeError("span must not exceed 6 bytes")
        }
        decode(e, t=0) {
            return W(e).readUIntBE(t, this.span)
        }
        encode(e, t, n=0) {
            return W(t).writeUIntBE(e, n, this.span),
            this.span
        }
    }
    ;
    l.UIntBE = Ne;
    var je = class extends G {
        constructor(e, t) {
            if (super(e, t),
            6 < this.span)
                throw new RangeError("span must not exceed 6 bytes")
        }
        decode(e, t=0) {
            return W(e).readIntLE(t, this.span)
        }
        encode(e, t, n=0) {
            return W(t).writeIntLE(e, n, this.span),
            this.span
        }
    }
    ;
    l.Int = je;
    var Qe = class extends G {
        constructor(e, t) {
            if (super(e, t),
            6 < this.span)
                throw new RangeError("span must not exceed 6 bytes")
        }
        decode(e, t=0) {
            return W(e).readIntBE(t, this.span)
        }
        encode(e, t, n=0) {
            return W(t).writeIntBE(e, n, this.span),
            this.span
        }
    }
    ;
    l.IntBE = Qe;
    var Er = Math.pow(2, 32);
    function vn(r) {
        let e = Math.floor(r / Er)
          , t = r - e * Er;
        return {
            hi32: e,
            lo32: t
        }
    }
    function Cn(r, e) {
        return r * Er + e
    }
    var pn = class extends G {
        constructor(e) {
            super(8, e)
        }
        decode(e, t=0) {
            let n = W(e)
              , s = n.readUInt32LE(t)
              , o = n.readUInt32LE(t + 4);
            return Cn(o, s)
        }
        encode(e, t, n=0) {
            let s = vn(e)
              , o = W(t);
            return o.writeUInt32LE(s.lo32, n),
            o.writeUInt32LE(s.hi32, n + 4),
            8
        }
    }
    ;
    l.NearUInt64 = pn;
    var yn = class extends G {
        constructor(e) {
            super(8, e)
        }
        decode(e, t=0) {
            let n = W(e)
              , s = n.readUInt32BE(t)
              , o = n.readUInt32BE(t + 4);
            return Cn(s, o)
        }
        encode(e, t, n=0) {
            let s = vn(e)
              , o = W(t);
            return o.writeUInt32BE(s.hi32, n),
            o.writeUInt32BE(s.lo32, n + 4),
            8
        }
    }
    ;
    l.NearUInt64BE = yn;
    var gn = class extends G {
        constructor(e) {
            super(8, e)
        }
        decode(e, t=0) {
            let n = W(e)
              , s = n.readUInt32LE(t)
              , o = n.readInt32LE(t + 4);
            return Cn(o, s)
        }
        encode(e, t, n=0) {
            let s = vn(e)
              , o = W(t);
            return o.writeUInt32LE(s.lo32, n),
            o.writeInt32LE(s.hi32, n + 4),
            8
        }
    }
    ;
    l.NearInt64 = gn;
    var Rn = class extends G {
        constructor(e) {
            super(8, e)
        }
        decode(e, t=0) {
            let n = W(e)
              , s = n.readInt32BE(t)
              , o = n.readUInt32BE(t + 4);
            return Cn(s, o)
        }
        encode(e, t, n=0) {
            let s = vn(e)
              , o = W(t);
            return o.writeInt32BE(s.hi32, n),
            o.writeUInt32BE(s.lo32, n + 4),
            8
        }
    }
    ;
    l.NearInt64BE = Rn;
    var mn = class extends G {
        constructor(e) {
            super(4, e)
        }
        decode(e, t=0) {
            return W(e).readFloatLE(t)
        }
        encode(e, t, n=0) {
            return W(t).writeFloatLE(e, n),
            4
        }
    }
    ;
    l.Float = mn;
    var Sn = class extends G {
        constructor(e) {
            super(4, e)
        }
        decode(e, t=0) {
            return W(e).readFloatBE(t)
        }
        encode(e, t, n=0) {
            return W(t).writeFloatBE(e, n),
            4
        }
    }
    ;
    l.FloatBE = Sn;
    var bn = class extends G {
        constructor(e) {
            super(8, e)
        }
        decode(e, t=0) {
            return W(e).readDoubleLE(t)
        }
        encode(e, t, n=0) {
            return W(t).writeDoubleLE(e, n),
            8
        }
    }
    ;
    l.Double = bn;
    var En = class extends G {
        constructor(e) {
            super(8, e)
        }
        decode(e, t=0) {
            return W(e).readDoubleBE(t)
        }
        encode(e, t, n=0) {
            return W(t).writeDoubleBE(e, n),
            8
        }
    }
    ;
    l.DoubleBE = En;
    var An = class extends G {
        constructor(e, t, n) {
            if (!(e instanceof G))
                throw new TypeError("elementLayout must be a Layout");
            if (!(t instanceof le && t.isCount() || Number.isInteger(t) && 0 <= t))
                throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
            let s = -1;
            !(t instanceof le) && 0 < e.span && (s = t * e.span),
            super(s, n),
            this.elementLayout = e,
            this.count = t
        }
        getSpan(e, t=0) {
            if (0 <= this.span)
                return this.span;
            let n = 0
              , s = this.count;
            if (s instanceof le && (s = s.decode(e, t)),
            0 < this.elementLayout.span)
                n = s * this.elementLayout.span;
            else {
                let o = 0;
                for (; o < s; )
                    n += this.elementLayout.getSpan(e, t + n),
                    ++o
            }
            return n
        }
        decode(e, t=0) {
            let n = []
              , s = 0
              , o = this.count;
            for (o instanceof le && (o = o.decode(e, t)); s < o; )
                n.push(this.elementLayout.decode(e, t)),
                t += this.elementLayout.getSpan(e, t),
                s += 1;
            return n
        }
        encode(e, t, n=0) {
            let s = this.elementLayout
              , o = e.reduce( (i, a) => i + s.encode(a, t, n + i), 0);
            return this.count instanceof le && this.count.encode(e.length, t, n),
            o
        }
    }
    ;
    l.Sequence = An;
    var In = class extends G {
        constructor(e, t, n) {
            if (!(Array.isArray(e) && e.reduce( (o, i) => o && i instanceof G, !0)))
                throw new TypeError("fields must be array of Layout instances");
            typeof t == "boolean" && n === void 0 && (n = t,
            t = void 0);
            for (let o of e)
                if (0 > o.span && o.property === void 0)
                    throw new Error("fields cannot contain unnamed variable-length layout");
            let s = -1;
            try {
                s = e.reduce( (o, i) => o + i.getSpan(), 0)
            } catch {}
            super(s, t),
            this.fields = e,
            this.decodePrefixes = !!n
        }
        getSpan(e, t=0) {
            if (0 <= this.span)
                return this.span;
            let n = 0;
            try {
                n = this.fields.reduce( (s, o) => {
                    let i = o.getSpan(e, t);
                    return t += i,
                    s + i
                }
                , 0)
            } catch {
                throw new RangeError("indeterminate span")
            }
            return n
        }
        decode(e, t=0) {
            At(e);
            let n = this.makeDestinationObject();
            for (let s of this.fields)
                if (s.property !== void 0 && (n[s.property] = s.decode(e, t)),
                t += s.getSpan(e, t),
                this.decodePrefixes && e.length === t)
                    break;
            return n
        }
        encode(e, t, n=0) {
            let s = n
              , o = 0
              , i = 0;
            for (let a of this.fields) {
                let c = a.span;
                if (i = 0 < c ? c : 0,
                a.property !== void 0) {
                    let d = e[a.property];
                    d !== void 0 && (i = a.encode(d, t, n),
                    0 > c && (c = a.getSpan(t, n)))
                }
                o = n,
                n += c
            }
            return o + i - s
        }
        fromArray(e) {
            let t = this.makeDestinationObject();
            for (let n of this.fields)
                n.property !== void 0 && 0 < e.length && (t[n.property] = e.shift());
            return t
        }
        layoutFor(e) {
            if (typeof e != "string")
                throw new TypeError("property must be string");
            for (let t of this.fields)
                if (t.property === e)
                    return t
        }
        offsetOf(e) {
            if (typeof e != "string")
                throw new TypeError("property must be string");
            let t = 0;
            for (let n of this.fields) {
                if (n.property === e)
                    return t;
                0 > n.span ? t = -1 : 0 <= t && (t += n.span)
            }
        }
    }
    ;
    l.Structure = In;
    var xt = class {
        constructor(e) {
            this.property = e
        }
        decode(e, t) {
            throw new Error("UnionDiscriminator is abstract")
        }
        encode(e, t, n) {
            throw new Error("UnionDiscriminator is abstract")
        }
    }
    ;
    l.UnionDiscriminator = xt;
    var Et = class extends xt {
        constructor(e, t) {
            if (!(e instanceof le && e.isCount()))
                throw new TypeError("layout must be an unsigned integer ExternalLayout");
            super(t || e.property || "variant"),
            this.layout = e
        }
        decode(e, t) {
            return this.layout.decode(e, t)
        }
        encode(e, t, n) {
            return this.layout.encode(e, t, n)
        }
    }
    ;
    l.UnionLayoutDiscriminator = Et;
    var Pt = class extends G {
        constructor(e, t, n) {
            let s;
            if (e instanceof Ie || e instanceof Ne)
                s = new Et(new Bt(e));
            else if (e instanceof le && e.isCount())
                s = new Et(e);
            else if (e instanceof xt)
                s = e;
            else
                throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
            if (t === void 0 && (t = null),
            !(t === null || t instanceof G))
                throw new TypeError("defaultLayout must be null or a Layout");
            if (t !== null) {
                if (0 > t.span)
                    throw new Error("defaultLayout must have constant span");
                t.property === void 0 && (t = t.replicate("content"))
            }
            let o = -1;
            t && (o = t.span,
            0 <= o && (e instanceof Ie || e instanceof Ne) && (o += s.layout.span)),
            super(o, n),
            this.discriminator = s,
            this.usesPrefixDiscriminator = e instanceof Ie || e instanceof Ne,
            this.defaultLayout = t,
            this.registry = {};
            let i = this.defaultGetSourceVariant.bind(this);
            this.getSourceVariant = function(a) {
                return i(a)
            }
            ,
            this.configGetSourceVariant = function(a) {
                i = a.bind(this)
            }
        }
        getSpan(e, t=0) {
            if (0 <= this.span)
                return this.span;
            let n = this.getVariant(e, t);
            if (!n)
                throw new Error("unable to determine span for unrecognized variant");
            return n.getSpan(e, t)
        }
        defaultGetSourceVariant(e) {
            if (Object.prototype.hasOwnProperty.call(e, this.discriminator.property)) {
                if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(e, this.defaultLayout.property))
                    return;
                let t = this.registry[e[this.discriminator.property]];
                if (t && (!t.layout || t.property && Object.prototype.hasOwnProperty.call(e, t.property)))
                    return t
            } else
                for (let t in this.registry) {
                    let n = this.registry[t];
                    if (n.property && Object.prototype.hasOwnProperty.call(e, n.property))
                        return n
                }
            throw new Error("unable to infer src variant")
        }
        decode(e, t=0) {
            let n, s = this.discriminator, o = s.decode(e, t), i = this.registry[o];
            if (i === void 0) {
                let a = this.defaultLayout
                  , c = 0;
                this.usesPrefixDiscriminator && (c = s.layout.span),
                n = this.makeDestinationObject(),
                n[s.property] = o,
                n[a.property] = a.decode(e, t + c)
            } else
                n = i.decode(e, t);
            return n
        }
        encode(e, t, n=0) {
            let s = this.getSourceVariant(e);
            if (s === void 0) {
                let o = this.discriminator
                  , i = this.defaultLayout
                  , a = 0;
                return this.usesPrefixDiscriminator && (a = o.layout.span),
                o.encode(e[o.property], t, n),
                a + i.encode(e[i.property], t, n + a)
            }
            return s.encode(e, t, n)
        }
        addVariant(e, t, n) {
            let s = new wn(this,e,t,n);
            return this.registry[e] = s,
            s
        }
        getVariant(e, t=0) {
            let n;
            return e instanceof Uint8Array ? n = this.discriminator.decode(e, t) : n = e,
            this.registry[n]
        }
    }
    ;
    l.Union = Pt;
    var wn = class extends G {
        constructor(e, t, n, s) {
            if (!(e instanceof Pt))
                throw new TypeError("union must be a Union");
            if (!Number.isInteger(t) || 0 > t)
                throw new TypeError("variant must be a (non-negative) integer");
            if (typeof n == "string" && s === void 0 && (s = n,
            n = null),
            n) {
                if (!(n instanceof G))
                    throw new TypeError("layout must be a Layout");
                if (e.defaultLayout !== null && 0 <= n.span && n.span > e.defaultLayout.span)
                    throw new Error("variant span exceeds span of containing union");
                if (typeof s != "string")
                    throw new TypeError("variant must have a String property")
            }
            let o = e.span;
            0 > e.span && (o = n ? n.span : 0,
            0 <= o && e.usesPrefixDiscriminator && (o += e.discriminator.layout.span)),
            super(o, s),
            this.union = e,
            this.variant = t,
            this.layout = n || null
        }
        getSpan(e, t=0) {
            if (0 <= this.span)
                return this.span;
            let n = 0;
            this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span);
            let s = 0;
            return this.layout && (s = this.layout.getSpan(e, t + n)),
            n + s
        }
        decode(e, t=0) {
            let n = this.makeDestinationObject();
            if (this !== this.union.getVariant(e, t))
                throw new Error("variant mismatch");
            let s = 0;
            return this.union.usesPrefixDiscriminator && (s = this.union.discriminator.layout.span),
            this.layout ? n[this.property] = this.layout.decode(e, t + s) : this.property ? n[this.property] = !0 : this.union.usesPrefixDiscriminator && (n[this.union.discriminator.property] = this.variant),
            n
        }
        encode(e, t, n=0) {
            let s = 0;
            if (this.union.usesPrefixDiscriminator && (s = this.union.discriminator.layout.span),
            this.layout && !Object.prototype.hasOwnProperty.call(e, this.property))
                throw new TypeError("variant lacks property " + this.property);
            this.union.discriminator.encode(this.variant, t, n);
            let o = s;
            if (this.layout && (this.layout.encode(e[this.property], t, n + s),
            o += this.layout.getSpan(t, n + s),
            0 <= this.union.span && o > this.union.span))
                throw new Error("encoded variant overruns containing union");
            return o
        }
        fromArray(e) {
            if (this.layout)
                return this.layout.fromArray(e)
        }
    }
    ;
    l.VariantLayout = wn;
    function bt(r) {
        return 0 > r && (r += 4294967296),
        r
    }
    var Dt = class extends G {
        constructor(e, t, n) {
            if (!(e instanceof Ie || e instanceof Ne))
                throw new TypeError("word must be a UInt or UIntBE layout");
            if (typeof t == "string" && n === void 0 && (n = t,
            t = !1),
            4 < e.span)
                throw new RangeError("word cannot exceed 32 bits");
            super(e.span, n),
            this.word = e,
            this.msb = !!t,
            this.fields = [];
            let s = 0;
            this._packedSetValue = function(o) {
                return s = bt(o),
                this
            }
            ,
            this._packedGetValue = function() {
                return s
            }
        }
        decode(e, t=0) {
            let n = this.makeDestinationObject()
              , s = this.word.decode(e, t);
            this._packedSetValue(s);
            for (let o of this.fields)
                o.property !== void 0 && (n[o.property] = o.decode(e));
            return n
        }
        encode(e, t, n=0) {
            let s = this.word.decode(t, n);
            this._packedSetValue(s);
            for (let o of this.fields)
                if (o.property !== void 0) {
                    let i = e[o.property];
                    i !== void 0 && o.encode(i)
                }
            return this.word.encode(this._packedGetValue(), t, n)
        }
        addField(e, t) {
            let n = new Ut(this,e,t);
            return this.fields.push(n),
            n
        }
        addBoolean(e) {
            let t = new On(this,e);
            return this.fields.push(t),
            t
        }
        fieldFor(e) {
            if (typeof e != "string")
                throw new TypeError("property must be string");
            for (let t of this.fields)
                if (t.property === e)
                    return t
        }
    }
    ;
    l.BitStructure = Dt;
    var Ut = class {
        constructor(e, t, n) {
            if (!(e instanceof Dt))
                throw new TypeError("container must be a BitStructure");
            if (!Number.isInteger(t) || 0 >= t)
                throw new TypeError("bits must be positive integer");
            let s = 8 * e.span
              , o = e.fields.reduce( (i, a) => i + a.bits, 0);
            if (t + o > s)
                throw new Error("bits too long for span remainder (" + (s - o) + " of " + s + " remain)");
            this.container = e,
            this.bits = t,
            this.valueMask = (1 << t) - 1,
            t === 32 && (this.valueMask = 4294967295),
            this.start = o,
            this.container.msb && (this.start = s - o - t),
            this.wordMask = bt(this.valueMask << this.start),
            this.property = n
        }
        decode(e, t) {
            let n = this.container._packedGetValue();
            return bt(n & this.wordMask) >>> this.start
        }
        encode(e) {
            if (typeof e != "number" || !Number.isInteger(e) || e !== bt(e & this.valueMask))
                throw new TypeError(Ir("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
            let t = this.container._packedGetValue()
              , n = bt(e << this.start);
            this.container._packedSetValue(bt(t & ~this.wordMask) | n)
        }
    }
    ;
    l.BitField = Ut;
    var On = class extends Ut {
        constructor(e, t) {
            super(e, 1, t)
        }
        decode(e, t) {
            return !!super.decode(e, t)
        }
        encode(e) {
            typeof e == "boolean" && (e = +e),
            super.encode(e)
        }
    }
    ;
    l.Boolean = On;
    var kn = class extends G {
        constructor(e, t) {
            if (!(e instanceof le && e.isCount() || Number.isInteger(e) && 0 <= e))
                throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
            let n = -1;
            e instanceof le || (n = e),
            super(n, t),
            this.length = e
        }
        getSpan(e, t) {
            let n = this.span;
            return 0 > n && (n = this.length.decode(e, t)),
            n
        }
        decode(e, t=0) {
            let n = this.span;
            return 0 > n && (n = this.length.decode(e, t)),
            W(e).slice(t, t + n)
        }
        encode(e, t, n) {
            let s = this.length;
            if (this.length instanceof le && (s = e.length),
            !(e instanceof Uint8Array && s === e.length))
                throw new TypeError(Ir("Blob.encode", this) + " requires (length " + s + ") Uint8Array as src");
            if (n + s > t.length)
                throw new RangeError("encoding overruns Uint8Array");
            let o = W(e);
            return W(t).write(o.toString("hex"), n, s, "hex"),
            this.length instanceof le && this.length.encode(s, t, n),
            s
        }
    }
    ;
    l.Blob = kn;
    var Nn = class extends G {
        constructor(e) {
            super(-1, e)
        }
        getSpan(e, t=0) {
            At(e);
            let n = t;
            for (; n < e.length && e[n] !== 0; )
                n += 1;
            return 1 + n - t
        }
        decode(e, t=0) {
            let n = this.getSpan(e, t);
            return W(e).slice(t, t + n - 1).toString("utf-8")
        }
        encode(e, t, n=0) {
            typeof e != "string" && (e = String(e));
            let s = Ar.Buffer.from(e, "utf8")
              , o = s.length;
            if (n + o > t.length)
                throw new RangeError("encoding overruns Buffer");
            let i = W(t);
            return s.copy(i, n),
            i[n + o] = 0,
            o + 1
        }
    }
    ;
    l.CString = Nn;
    var Tn = class extends G {
        constructor(e, t) {
            if (typeof e == "string" && t === void 0 && (t = e,
            e = void 0),
            e === void 0)
                e = -1;
            else if (!Number.isInteger(e))
                throw new TypeError("maxSpan must be an integer");
            super(-1, t),
            this.maxSpan = e
        }
        getSpan(e, t=0) {
            return At(e),
            e.length - t
        }
        decode(e, t=0) {
            let n = this.getSpan(e, t);
            if (0 <= this.maxSpan && this.maxSpan < n)
                throw new RangeError("text length exceeds maxSpan");
            return W(e).slice(t, t + n).toString("utf-8")
        }
        encode(e, t, n=0) {
            typeof e != "string" && (e = String(e));
            let s = Ar.Buffer.from(e, "utf8")
              , o = s.length;
            if (0 <= this.maxSpan && this.maxSpan < o)
                throw new RangeError("text length exceeds maxSpan");
            if (n + o > t.length)
                throw new RangeError("encoding overruns Buffer");
            return s.copy(W(t), n),
            o
        }
    }
    ;
    l.UTF8 = Tn;
    var Ln = class extends G {
        constructor(e, t) {
            super(0, t),
            this.value = e
        }
        decode(e, t) {
            return this.value
        }
        encode(e, t, n) {
            return 0
        }
    }
    ;
    l.Constant = Ln;
    l.greedy = (r, e) => new _n(r,e);
    l.offset = (r, e, t) => new Bt(r,e,t);
    l.u8 = r => new Ie(1,r);
    l.u16 = r => new Ie(2,r);
    l.u24 = r => new Ie(3,r);
    l.u32 = r => new Ie(4,r);
    l.u40 = r => new Ie(5,r);
    l.u48 = r => new Ie(6,r);
    l.nu64 = r => new pn(r);
    l.u16be = r => new Ne(2,r);
    l.u24be = r => new Ne(3,r);
    l.u32be = r => new Ne(4,r);
    l.u40be = r => new Ne(5,r);
    l.u48be = r => new Ne(6,r);
    l.nu64be = r => new yn(r);
    l.s8 = r => new je(1,r);
    l.s16 = r => new je(2,r);
    l.s24 = r => new je(3,r);
    l.s32 = r => new je(4,r);
    l.s40 = r => new je(5,r);
    l.s48 = r => new je(6,r);
    l.ns64 = r => new gn(r);
    l.s16be = r => new Qe(2,r);
    l.s24be = r => new Qe(3,r);
    l.s32be = r => new Qe(4,r);
    l.s40be = r => new Qe(5,r);
    l.s48be = r => new Qe(6,r);
    l.ns64be = r => new Rn(r);
    l.f32 = r => new mn(r);
    l.f32be = r => new Sn(r);
    l.f64 = r => new bn(r);
    l.f64be = r => new En(r);
    l.struct = (r, e, t) => new In(r,e,t);
    l.bits = (r, e, t) => new Dt(r,e,t);
    l.seq = (r, e, t) => new An(r,e,t);
    l.union = (r, e, t) => new Pt(r,e,t);
    l.unionLayoutDiscriminator = (r, e) => new Et(r,e);
    l.blob = (r, e) => new kn(r,e);
    l.cstr = r => new Nn(r);
    l.utf8 = (r, e) => new Tn(r,e);
    l.constant = (r, e) => new Ln(r,e)
}
);
function so(r) {
    return Array.isArray(r) ? "%5B" + r.map(so).join("%2C%20") + "%5D" : typeof r == "bigint" ? `${r}n` : encodeURIComponent(String(r != null && Object.getPrototypeOf(r) === null ? C({}, r) : r))
}
function Nf([r,e]) {
    return `${r}=${so(e)}`
}
function Tf(r) {
    let e = Object.entries(r).map(Nf).join("&");
    return btoa(e)
}
function Lf(r, e={}) {
    {
        let t = `Solana error #${r}; Decode this error by running \`npx @solana/errors decode -- ${r}`;
        return Object.keys(e).length && (t += ` '${Tf(e)}'`),
        `${t}\``
    }
}
var La, va, Ca, Ba, xa, Pa, Da, Ua, za, Ma, Fa, Ka, $a, Wa, Va, Ga, qa, Ha, ja, Ya, Xa, Ja, Za, Qa, ec, tc, nc, rc, sc, oc, ic, ac, cc, uc, dc, fc, lc, hc, _c, pc, yc, gc, Rc, mc, Sc, bc, Ec, Ac, Ic, wc, Oc, kc, Nc, Tc, Lc, vc, Cc, Bc, xc, Pc, Dc, Uc, zc, Mc, Fc, Kc, $c, Wc, Vc, Gc, qc, Hc, jc, Yc, Xc, Jc, Zc, Qc, eu, tu, nu, ru, su, ou, iu, au, cu, uu, du, fu, lu, hu, _u, pu, yu, gu, Ru, mu, Su, bu, Eu, Au, Iu, wu, Ou, ku, Nu, Tu, Lu, vu, Cu, Bu, xu, Pu, Du, Uu, zu, Mu, Fu, Ku, $u, Wu, Vu, Gu, qu, Hu, ju, Yu, Xu, Ju, Zu, Qu, ed, td, nd, rd, sd, od, id, ad, cd, ud, dd, fd, ld, hd, _d, pd, yd, gd, Rd, md, Sd, bd, Ed, Ad, Id, wd, Od, kd, Nd, Td, Ld, vd, Cd, Bd, xd, Pd, Dd, Ud, zd, Md, Fd, Kd, $d, Wd, Vd, Gd, qd, Hd, jd, Yd, Xd, Jd, Zd, Qd, ef, tf, Or, kr, Zs, Qs, Nr, Tr, Lr, nf, rf, sf, of, vr, af, eo, to, cf, uf, df, ff, lf, no, ro, hf, _f, pf, yf, gf, Rf, mf, Sf, bf, Ef, Af, If, wf, Of, kf, M_, et, Cr = Q( () => {
    "use strict";
    La = 1,
    va = 2,
    Ca = 3,
    Ba = 4,
    xa = 5,
    Pa = 6,
    Da = 7,
    Ua = 8,
    za = 9,
    Ma = 10,
    Fa = -32700,
    Ka = -32603,
    $a = -32602,
    Wa = -32601,
    Va = -32600,
    Ga = -32016,
    qa = -32015,
    Ha = -32014,
    ja = -32013,
    Ya = -32012,
    Xa = -32011,
    Ja = -32010,
    Za = -32009,
    Qa = -32008,
    ec = -32007,
    tc = -32006,
    nc = -32005,
    rc = -32004,
    sc = -32003,
    oc = -32002,
    ic = -32001,
    ac = 28e5,
    cc = 2800001,
    uc = 2800002,
    dc = 2800003,
    fc = 2800004,
    lc = 2800005,
    hc = 2800006,
    _c = 2800007,
    pc = 2800008,
    yc = 2800009,
    gc = 2800010,
    Rc = 323e4,
    mc = 32300001,
    Sc = 3230002,
    bc = 3230003,
    Ec = 3230004,
    Ac = 361e4,
    Ic = 3610001,
    wc = 3610002,
    Oc = 3610003,
    kc = 3610004,
    Nc = 3610005,
    Tc = 3610006,
    Lc = 3610007,
    vc = 3611e3,
    Cc = 3704e3,
    Bc = 3704001,
    xc = 3704002,
    Pc = 3704003,
    Dc = 3704004,
    Uc = 4128e3,
    zc = 4128001,
    Mc = 4128002,
    Fc = 4615e3,
    Kc = 4615001,
    $c = 4615002,
    Wc = 4615003,
    Vc = 4615004,
    Gc = 4615005,
    qc = 4615006,
    Hc = 4615007,
    jc = 4615008,
    Yc = 4615009,
    Xc = 4615010,
    Jc = 4615011,
    Zc = 4615012,
    Qc = 4615013,
    eu = 4615014,
    tu = 4615015,
    nu = 4615016,
    ru = 4615017,
    su = 4615018,
    ou = 4615019,
    iu = 4615020,
    au = 4615021,
    cu = 4615022,
    uu = 4615023,
    du = 4615024,
    fu = 4615025,
    lu = 4615026,
    hu = 4615027,
    _u = 4615028,
    pu = 4615029,
    yu = 4615030,
    gu = 4615031,
    Ru = 4615032,
    mu = 4615033,
    Su = 4615034,
    bu = 4615035,
    Eu = 4615036,
    Au = 4615037,
    Iu = 4615038,
    wu = 4615039,
    Ou = 4615040,
    ku = 4615041,
    Nu = 4615042,
    Tu = 4615043,
    Lu = 4615044,
    vu = 4615045,
    Cu = 4615046,
    Bu = 4615047,
    xu = 4615048,
    Pu = 4615049,
    Du = 4615050,
    Uu = 4615051,
    zu = 4615052,
    Mu = 4615053,
    Fu = 4615054,
    Ku = 5508e3,
    $u = 5508001,
    Wu = 5508002,
    Vu = 5508003,
    Gu = 5508004,
    qu = 5508005,
    Hu = 5508006,
    ju = 5508007,
    Yu = 5508008,
    Xu = 5508009,
    Ju = 5508010,
    Zu = 5508011,
    Qu = 5663e3,
    ed = 5663001,
    td = 5663002,
    nd = 5663003,
    rd = 5663004,
    sd = 5663005,
    od = 5663006,
    id = 5663007,
    ad = 5663008,
    cd = 5663009,
    ud = 5663010,
    dd = 5663011,
    fd = 5663012,
    ld = 5663013,
    hd = 5663014,
    _d = 5663015,
    pd = 5663016,
    yd = 5663017,
    gd = 5663018,
    Rd = 5663019,
    md = 705e4,
    Sd = 7050001,
    bd = 7050002,
    Ed = 7050003,
    Ad = 7050004,
    Id = 7050005,
    wd = 7050006,
    Od = 7050007,
    kd = 7050008,
    Nd = 7050009,
    Td = 7050010,
    Ld = 7050011,
    vd = 7050012,
    Cd = 7050013,
    Bd = 7050014,
    xd = 7050015,
    Pd = 7050016,
    Dd = 7050017,
    Ud = 7050018,
    zd = 7050019,
    Md = 7050020,
    Fd = 7050021,
    Kd = 7050022,
    $d = 7050023,
    Wd = 7050024,
    Vd = 7050025,
    Gd = 7050026,
    qd = 7050027,
    Hd = 7050028,
    jd = 7050029,
    Yd = 7050030,
    Xd = 7050031,
    Jd = 7050032,
    Zd = 7050033,
    Qd = 7050034,
    ef = 7050035,
    tf = 7050036,
    Or = 8078e3,
    kr = 8078001,
    Zs = 8078002,
    Qs = 8078003,
    Nr = 8078004,
    Tr = 8078005,
    Lr = 8078006,
    nf = 8078007,
    rf = 8078008,
    sf = 8078009,
    of = 8078010,
    vr = 8078011,
    af = 8078012,
    eo = 8078013,
    to = 8078014,
    cf = 8078015,
    uf = 8078016,
    df = 8078017,
    ff = 8078018,
    lf = 8078019,
    no = 8078020,
    ro = 8078021,
    hf = 8078022,
    _f = 81e5,
    pf = 8100001,
    yf = 8100002,
    gf = 8100003,
    Rf = 819e4,
    mf = 8190001,
    Sf = 8190002,
    bf = 8190003,
    Ef = 8190004,
    Af = 99e5,
    If = 9900001,
    wf = 9900002,
    Of = 9900003,
    kf = 9900004;
    M_ = {
        [Rc]: "Account not found at address: $address",
        [Ec]: "Not all accounts were decoded. Encoded accounts found at addresses: $addresses.",
        [bc]: "Expected decoded account at address: $address",
        [Sc]: "Failed to decode account data at address: $address",
        [mc]: "Accounts not found at addresses: $addresses",
        [yc]: "Unable to find a viable program address bump seed.",
        [uc]: "$putativeAddress is not a base58-encoded address.",
        [ac]: "Expected base58 encoded address to decode to a byte array of length 32. Actual length: $actualLength.",
        [dc]: "The `CryptoKey` must be an `Ed25519` public key.",
        [pc]: "Invalid seeds; point must fall off the Ed25519 curve.",
        [fc]: "Expected given program derived address to have the following format: [Address, ProgramDerivedAddressBump].",
        [hc]: "A maximum of $maxSeeds seeds, including the bump seed, may be supplied when creating an address. Received: $actual.",
        [_c]: "The seed at index $index with length $actual exceeds the maximum length of $maxSeedLength bytes.",
        [lc]: "Expected program derived address bump to be in the range [0, 255], got: $bump.",
        [gc]: "Program address cannot end with PDA marker.",
        [cc]: "Expected base58-encoded address string of length in the range [32, 44]. Actual length: $actualLength.",
        [Ba]: "Expected base58-encoded blockash string of length in the range [32, 44]. Actual length: $actualLength.",
        [La]: "The network has progressed past the last block for which this transaction could have been committed.",
        [Or]: "Codec [$codecDescription] cannot decode empty byte arrays.",
        [hf]: "Enum codec cannot use lexical values [$stringValues] as discriminators. Either remove all lexical values or set `useValuesAsDiscriminators` to `false`.",
        [no]: "Sentinel [$hexSentinel] must not be present in encoded bytes [$hexEncodedBytes].",
        [Tr]: "Encoder and decoder must have the same fixed size, got [$encoderFixedSize] and [$decoderFixedSize].",
        [Lr]: "Encoder and decoder must have the same max size, got [$encoderMaxSize] and [$decoderMaxSize].",
        [Nr]: "Encoder and decoder must either both be fixed-size or variable-size.",
        [rf]: "Enum discriminator out of range. Expected a number in [$formattedValidDiscriminators], got $discriminator.",
        [Zs]: "Expected a fixed-size codec, got a variable-size one.",
        [eo]: "Codec [$codecDescription] expected a positive byte length, got $bytesLength.",
        [Qs]: "Expected a variable-size codec, got a fixed-size one.",
        [lf]: "Codec [$codecDescription] expected zero-value [$hexZeroValue] to have the same size as the provided fixed-size item [$expectedSize bytes].",
        [kr]: "Codec [$codecDescription] expected $expected bytes, got $bytesLength.",
        [ff]: "Expected byte array constant [$hexConstant] to be present in data [$hexData] at offset [$offset].",
        [sf]: "Invalid discriminated union variant. Expected one of [$variants], got $value.",
        [of]: "Invalid enum variant. Expected one of [$stringValues] or a number in [$formattedNumericalValues], got $variant.",
        [cf]: "Invalid literal union variant. Expected one of [$variants], got $value.",
        [nf]: "Expected [$codecDescription] to have $expected items, got $actual.",
        [af]: "Invalid value $value for base $base with alphabet $alphabet.",
        [uf]: "Literal union discriminator out of range. Expected a number between $minRange and $maxRange, got $discriminator.",
        [vr]: "Codec [$codecDescription] expected number to be in the range [$min, $max], got $value.",
        [to]: "Codec [$codecDescription] expected offset to be in the range [0, $bytesLength], got $offset.",
        [ro]: "Expected sentinel [$hexSentinel] to be present in decoded bytes [$hexDecodedBytes].",
        [df]: "Union variant out of range. Expected an index between $minRange and $maxRange, got $variant.",
        [vc]: "No random values implementation could be found.",
        [Yc]: "instruction requires an uninitialized account",
        [uu]: "instruction tries to borrow reference for an account which is already borrowed",
        [du]: "instruction left account with an outstanding borrowed reference",
        [au]: "program other than the account's owner changed the size of the account data",
        [Gc]: "account data too small for instruction",
        [cu]: "instruction expected an executable account",
        [Cu]: "An account does not have enough lamports to be rent-exempt",
        [xu]: "Program arithmetic overflowed",
        [vu]: "Failed to serialize or deserialize account data: $encodedData",
        [Fu]: "Builtin programs must consume compute units",
        [Ru]: "Cross-program invocation call depth too deep",
        [Iu]: "Computational budget exceeded",
        [lu]: "custom program error: #$code",
        [ru]: "instruction contains duplicate accounts",
        [fu]: "instruction modifications of multiply-passed account differ",
        [yu]: "executable accounts must be rent exempt",
        [_u]: "instruction changed executable accounts data",
        [pu]: "instruction changed the balance of an executable account",
        [su]: "instruction changed executable bit of an account",
        [eu]: "instruction modified data of an account it does not own",
        [Qc]: "instruction spent from the balance of an account it does not own",
        [Kc]: "generic instruction error",
        [Du]: "Provided owner is not allowed",
        [Tu]: "Account is immutable",
        [Lu]: "Incorrect authority provided",
        [Hc]: "incorrect program id for instruction",
        [qc]: "insufficient funds for instruction",
        [Vc]: "invalid account data for instruction",
        [Bu]: "Invalid account owner",
        [$c]: "invalid program argument",
        [hu]: "program returned invalid error code",
        [Wc]: "invalid instruction data",
        [Au]: "Failed to reallocate account data",
        [Eu]: "Provided seeds do not result in a valid address",
        [Uu]: "Accounts data allocations exceeded the maximum allowed per transaction",
        [zu]: "Max accounts exceeded",
        [Mu]: "Max instruction trace length exceeded",
        [bu]: "Length of the seed is too long for address generation",
        [mu]: "An account required by the instruction is missing",
        [jc]: "missing required signature for instruction",
        [Zc]: "instruction illegally modified the program id of an account",
        [iu]: "insufficient account keys for instruction",
        [wu]: "Cross-program invocation with unauthorized signer or writable account",
        [Ou]: "Failed to create program execution environment",
        [Nu]: "Program failed to compile",
        [ku]: "Program failed to complete",
        [nu]: "instruction modified data of a read-only account",
        [tu]: "instruction changed the balance of a read-only account",
        [Su]: "Cross-program invocation reentrancy not allowed for this instruction",
        [ou]: "instruction modified rent epoch of an account",
        [Jc]: "sum of account balances before and after instruction do not match",
        [Xc]: "instruction requires an initialized account",
        [Fc]: "",
        [gu]: "Unsupported program id",
        [Pu]: "Unsupported sysvar",
        [Uc]: "The instruction does not have any accounts.",
        [zc]: "The instruction does not have any data.",
        [Mc]: "Expected instruction to have progress address $expectedProgramAddress, got $actualProgramAddress.",
        [xa]: "Expected base58 encoded blockhash to decode to a byte array of length 32. Actual length: $actualLength.",
        [va]: "The nonce `$expectedNonceValue` is no longer valid. It has advanced to `$actualNonceValue`",
        [wf]: "Invariant violation: Found no abortable iterable cache entry for key `$cacheKey`. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
        [kf]: "Invariant violation: This data publisher does not publish to the channel named `$channelName`. Supported channels include $supportedChannelNames.",
        [If]: "Invariant violation: WebSocket message iterator state is corrupt; iterated without first resolving existing message promise. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
        [Af]: "Invariant violation: WebSocket message iterator is missing state storage. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
        [Of]: "Invariant violation: Switch statement non-exhaustive. Received unexpected value `$unexpectedValue`. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
        [Ka]: "JSON-RPC error: Internal JSON-RPC error ($__serverMessage)",
        [$a]: "JSON-RPC error: Invalid method parameter(s) ($__serverMessage)",
        [Va]: "JSON-RPC error: The JSON sent is not a valid `Request` object ($__serverMessage)",
        [Wa]: "JSON-RPC error: The method does not exist / is not available ($__serverMessage)",
        [Fa]: "JSON-RPC error: An error occurred on the server while parsing the JSON text ($__serverMessage)",
        [Ya]: "$__serverMessage",
        [ic]: "$__serverMessage",
        [rc]: "$__serverMessage",
        [Ha]: "$__serverMessage",
        [Ja]: "$__serverMessage",
        [Za]: "$__serverMessage",
        [Ga]: "Minimum context slot has not been reached",
        [nc]: "Node is unhealthy; behind by $numSlotsBehind slots",
        [Qa]: "No snapshot",
        [oc]: "Transaction simulation failed",
        [ec]: "$__serverMessage",
        [Xa]: "Transaction history is not available from this node",
        [tc]: "$__serverMessage",
        [ja]: "Transaction signature length mismatch",
        [sc]: "Transaction signature verification failure",
        [qa]: "$__serverMessage",
        [Cc]: "Key pair bytes must be of length 64, got $byteLength.",
        [Bc]: "Expected private key bytes with length 32. Actual length: $actualLength.",
        [xc]: "Expected base58-encoded signature to decode to a byte array of length 64. Actual length: $actualLength.",
        [Dc]: "The provided private key does not match the provided public key.",
        [Pc]: "Expected base58-encoded signature string of length in the range [64, 88]. Actual length: $actualLength.",
        [Pa]: "Lamports value must be in the range [0, 2e64-1]",
        [Da]: "`$value` cannot be parsed as a `BigInt`",
        [Ma]: "$message",
        [Ua]: "`$value` cannot be parsed as a `Number`",
        [Ca]: "No nonce account could be found at address `$nonceAccountAddress`",
        [Rf]: "The notification name must end in 'Notifications' and the API must supply a subscription plan creator function for the notification '$notificationName'.",
        [Sf]: "WebSocket was closed before payload could be added to the send buffer",
        [bf]: "WebSocket connection closed",
        [Ef]: "WebSocket failed to connect",
        [mf]: "Failed to obtain a subscription id from the server",
        [gf]: "Could not find an API plan for RPC method: `$method`",
        [_f]: "The $argumentLabel argument to the `$methodName` RPC method$optionalPathLabel was `$value`. This number is unsafe for use with the Solana JSON-RPC because it exceeds `Number.MAX_SAFE_INTEGER`.",
        [yf]: "HTTP error ($statusCode): $message",
        [pf]: "HTTP header(s) forbidden: $headers. Learn more at https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name.",
        [Ku]: "Multiple distinct signers were identified for address `$address`. Please ensure that you are using the same signer instance for each address.",
        [$u]: "The provided value does not implement the `KeyPairSigner` interface",
        [Vu]: "The provided value does not implement the `MessageModifyingSigner` interface",
        [Gu]: "The provided value does not implement the `MessagePartialSigner` interface",
        [Wu]: "The provided value does not implement any of the `MessageSigner` interfaces",
        [Hu]: "The provided value does not implement the `TransactionModifyingSigner` interface",
        [ju]: "The provided value does not implement the `TransactionPartialSigner` interface",
        [Yu]: "The provided value does not implement the `TransactionSendingSigner` interface",
        [qu]: "The provided value does not implement any of the `TransactionSigner` interfaces",
        [Xu]: "More than one `TransactionSendingSigner` was identified.",
        [Ju]: "No `TransactionSendingSigner` was identified. Please provide a valid `ITransactionWithSingleSendingSigner` transaction.",
        [Zu]: "Wallet account signers do not support signing multiple messages/transactions in a single operation",
        [Lc]: "Cannot export a non-extractable key.",
        [Ic]: "No digest implementation could be found.",
        [Ac]: "Cryptographic operations are only allowed in secure browser contexts. Read more here: https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts.",
        [wc]: `This runtime does not support the generation of Ed25519 key pairs.

Install @solana/webcrypto-ed25519-polyfill and call its \`install\` function before generating keys in environments that do not support Ed25519.

For a list of runtimes that currently support Ed25519 operations, visit https://github.com/WICG/webcrypto-secure-curves/issues/20.`,
        [Oc]: "No signature verification implementation could be found.",
        [kc]: "No key generation implementation could be found.",
        [Nc]: "No signing implementation could be found.",
        [Tc]: "No key export implementation could be found.",
        [za]: "Timestamp value must be in the range [-(2n ** 63n), (2n ** 63n) - 1]. `$value` given",
        [Pd]: "Transaction processing left an account with an outstanding borrowed reference",
        [Sd]: "Account in use",
        [bd]: "Account loaded twice",
        [Ed]: "Attempt to debit an account but found no record of a prior credit.",
        [$d]: "Transaction loads an address table account that doesn't exist",
        [Od]: "This transaction has already been processed",
        [kd]: "Blockhash not found",
        [Nd]: "Loader call chain is too deep",
        [xd]: "Transactions are currently disabled due to cluster maintenance",
        [Yd]: "Transaction contains a duplicate instruction ($index) that is not allowed",
        [Id]: "Insufficient funds for fee",
        [Xd]: "Transaction results in an account ($accountIndex) with insufficient funds for rent",
        [wd]: "This account may not be used to pay transaction fees",
        [Ld]: "Transaction contains an invalid account reference",
        [Vd]: "Transaction loads an address table account with invalid data",
        [Gd]: "Transaction address table lookup uses an invalid index",
        [Wd]: "Transaction loads an address table account with an invalid owner",
        [Zd]: "LoadedAccountsDataSizeLimit set for transaction must be greater than 0.",
        [Cd]: "This program may not be used for executing instructions",
        [qd]: "Transaction leaves an account with a lower balance than rent-exempt minimum",
        [zd]: "Transaction loads a writable account that cannot be written",
        [Jd]: "Transaction exceeded max loaded accounts data size cap",
        [Td]: "Transaction requires a fee but has no signature present",
        [Ad]: "Attempt to load a program that does not exist",
        [ef]: "Execution of the program referenced by account at index $accountIndex is temporarily restricted.",
        [Qd]: "ResanitizationNeeded",
        [Bd]: "Transaction failed to sanitize accounts offsets correctly",
        [vd]: "Transaction did not pass signature verification",
        [Kd]: "Transaction locked too many accounts",
        [tf]: "Sum of account balances before and after transaction do not match",
        [md]: "The transaction failed with the error `$errorName`",
        [Ud]: "Transaction version is unsupported",
        [Fd]: "Transaction would exceed account data limit within the block",
        [jd]: "Transaction would exceed total account data limit",
        [Md]: "Transaction would exceed max account limit within the block",
        [Dd]: "Transaction would exceed max Block Cost Limit",
        [Hd]: "Transaction would exceed max Vote Cost Limit",
        [_d]: "Attempted to sign a transaction with an address that is not a signer for it",
        [ud]: "Transaction is missing an address at index: $index.",
        [pd]: "Transaction has no expected signers therefore it cannot be encoded",
        [td]: "Transaction does not have a blockhash lifetime",
        [nd]: "Transaction is not a durable nonce transaction",
        [sd]: "Contents of these address lookup tables unknown: $lookupTableAddresses",
        [od]: "Lookup of address at index $highestRequestedIndex failed for lookup table `$lookupTableAddress`. Highest known index is $highestKnownIndex. The lookup table may have been extended since its contents were retrieved",
        [ad]: "No fee payer set in CompiledTransaction",
        [id]: "Could not find program address at index $index",
        [gd]: "Failed to estimate the compute unit consumption for this transaction message. This is likely because simulating the transaction failed. Inspect the `cause` property of this error to learn more",
        [Rd]: "Transaction failed when it was simulated in order to estimate the compute unit consumption. The compute unit estimate provided is for a transaction that failed when simulated and may not be representative of the compute units this transaction would consume if successful. Inspect the `cause` property of this error to learn more",
        [dd]: "Transaction is missing a fee payer.",
        [fd]: "Could not determine this transaction's signature. Make sure that the transaction has been signed by its fee payer.",
        [hd]: "Transaction first instruction is not advance nonce account instruction.",
        [ld]: "Transaction with no instructions cannot be durable nonce transaction.",
        [Qu]: "This transaction includes an address (`$programAddress`) which is both invoked and set as the fee payer. Program addresses may not pay fees",
        [ed]: "This transaction includes an address (`$programAddress`) which is both invoked and marked writable. Program addresses may not be writable",
        [yd]: "The transaction message expected the transaction to have $signerAddressesLength signatures, got $signaturesLength.",
        [cd]: "Transaction is missing signatures for addresses: $addresses.",
        [rd]: "Transaction version must be in the range [0, 127]. `$actualVersion` given"
    };
    et = class extends Error {
        cause = this.cause;
        context;
        constructor(...[r,e]) {
            let t, n;
            if (e) {
                let o = e
                  , {cause: i} = o
                  , a = ve(o, ["cause"]);
                i && (n = {
                    cause: i
                }),
                Object.keys(a).length > 0 && (t = a)
            }
            let s = Lf(r, t);
            super(s, n),
            this.context = C({
                __code: r
            }, t),
            this.name = "SolanaError"
        }
    }
}
);
function vf(r, e) {
    return "fixedSize"in e ? e.fixedSize : e.getSizeFromValue(r)
}
function oo(r) {
    return Object.freeze(F(C({}, r), {
        encode: e => {
            let t = new Uint8Array(vf(e, r));
            return r.write(e, t, 0),
            t
        }
    }))
}
function io(r) {
    return Object.freeze(F(C({}, r), {
        decode: (e, t=0) => r.read(e, t)[0]
    }))
}
function It(r) {
    return "fixedSize"in r && typeof r.fixedSize == "number"
}
function ao(r, e) {
    if (It(r) !== It(e))
        throw new et(Nr);
    if (It(r) && It(e) && r.fixedSize !== e.fixedSize)
        throw new et(Tr,{
            decoderFixedSize: e.fixedSize,
            encoderFixedSize: r.fixedSize
        });
    if (!It(r) && !It(e) && r.maxSize !== e.maxSize)
        throw new et(Lr,{
            decoderMaxSize: e.maxSize,
            encoderMaxSize: r.maxSize
        });
    return F(C(C({}, e), r), {
        decode: e.decode,
        encode: r.encode,
        read: e.read,
        write: r.write
    })
}
function co(r, e, t=0) {
    if (e.length - t <= 0)
        throw new et(Or,{
            codecDescription: r
        })
}
function uo(r, e, t, n=0) {
    let s = t.length - n;
    if (s < e)
        throw new et(kr,{
            bytesLength: s,
            codecDescription: r,
            expected: e
        })
}
var fo = Q( () => {
    "use strict";
    Cr()
}
);
function Cf(r, e, t, n) {
    if (n < e || n > t)
        throw new et(vr,{
            codecDescription: r,
            max: t,
            min: e,
            value: n
        })
}
function lo(r) {
    return r?.endian !== 1
}
function Bf(r) {
    return oo({
        fixedSize: r.size,
        write(e, t, n) {
            r.range && Cf(r.name, r.range[0], r.range[1], e);
            let s = new ArrayBuffer(r.size);
            return r.set(new DataView(s), e, lo(r.config)),
            t.set(new Uint8Array(s), n),
            n + r.size
        }
    })
}
function xf(r) {
    return io({
        fixedSize: r.size,
        read(e, t=0) {
            co(r.name, e, t),
            uo(r.name, r.size, e, t);
            let n = new DataView(Pf(e, t, r.size));
            return [r.get(n, lo(r.config)), t + r.size]
        }
    })
}
function Pf(r, e, t) {
    let n = r.byteOffset + (e ?? 0)
      , s = t ?? r.byteLength;
    return r.buffer.slice(n, n + s)
}
var Br, Df, ho, _o = Q( () => {
    "use strict";
    Cr();
    fo();
    Br = (r={}) => Bf({
        config: r,
        name: "u64",
        range: [0n, BigInt("0xffffffffffffffff")],
        set: (e, t, n) => e.setBigUint64(0, BigInt(t), n),
        size: 8
    }),
    Df = (r={}) => xf({
        config: r,
        get: (e, t) => e.getBigUint64(0, t),
        name: "u64",
        size: 8
    }),
    ho = (r={}) => ao(Br(r), Df(r))
}
);
function Uf(r) {
    return zt(r) && typeof r[Symbol.iterator] == "function"
}
function zt(r) {
    return typeof r == "object" && r != null
}
function Bn(r) {
    return zt(r) && !Array.isArray(r)
}
function Be(r) {
    return typeof r == "symbol" ? r.toString() : typeof r == "string" ? JSON.stringify(r) : `${r}`
}
function zf(r) {
    let {done: e, value: t} = r.next();
    return e ? void 0 : t
}
function Mf(r, e, t, n) {
    if (r === !0)
        return;
    r === !1 ? r = {} : typeof r == "string" && (r = {
        message: r
    });
    let {path: s, branch: o} = e
      , {type: i} = t
      , {refinement: a, message: c=`Expected a value of type \`${i}\`${a ? ` with refinement \`${a}\`` : ""}, but received: \`${Be(n)}\``} = r;
    return F(C({
        value: n,
        type: i,
        refinement: a,
        key: s[s.length - 1],
        path: s,
        branch: o
    }, r), {
        message: c
    })
}
function *po(r, e, t, n) {
    Uf(r) || (r = [r]);
    for (let s of r) {
        let o = Mf(s, e, t, n);
        o && (yield o)
    }
}
function *Pr(r, e, t={}) {
    let {path: n=[], branch: s=[r], coerce: o=!1, mask: i=!1} = t
      , a = {
        path: n,
        branch: s,
        mask: i
    };
    o && (r = e.coercer(r, a));
    let c = "valid";
    for (let d of e.validator(r, a))
        d.explanation = t.message,
        c = "not_valid",
        yield[d, void 0];
    for (let[d,_,y] of e.entries(r, a)) {
        let A = Pr(_, y, {
            path: d === void 0 ? n : [...n, d],
            branch: d === void 0 ? s : [...s, _],
            coerce: o,
            mask: i,
            message: t.message
        });
        for (let h of A)
            h[0] ? (c = h[0].refinement != null ? "not_refined" : "not_valid",
            yield[h[0], void 0]) : o && (_ = h[1],
            d === void 0 ? r = _ : r instanceof Map ? r.set(d, _) : r instanceof Set ? r.add(_) : zt(r) && (_ !== void 0 || d in r) && (r[d] = _))
    }
    if (c !== "not_valid")
        for (let d of e.refiner(r, a))
            d.explanation = t.message,
            c = "not_refined",
            yield[d, void 0];
    c === "valid" && (yield[void 0, r])
}
function Dr(r, e, t) {
    let n = Mt(r, e, {
        message: t
    });
    if (n[0])
        throw n[0]
}
function I(r, e, t) {
    let n = Mt(r, e, {
        coerce: !0,
        message: t
    });
    if (n[0])
        throw n[0];
    return n[1]
}
function Ff(r, e, t) {
    let n = Mt(r, e, {
        coerce: !0,
        mask: !0,
        message: t
    });
    if (n[0])
        throw n[0];
    return n[1]
}
function yo(r, e) {
    return !Mt(r, e)[0]
}
function Mt(r, e, t={}) {
    let n = Pr(r, e, t)
      , s = zf(n);
    return s[0] ? [new xr(s[0],function*() {
        for (let i of n)
            i[0] && (yield i[0])
    }
    ), void 0] : [void 0, s[1]]
}
function dt(r, e) {
    return new Le({
        type: r,
        schema: null,
        validator: e
    })
}
function go() {
    return dt("any", () => !0)
}
function O(r) {
    return new Le({
        type: "array",
        schema: r,
        *entries(e) {
            if (r && Array.isArray(e))
                for (let[t,n] of e.entries())
                    yield[t, n, r]
        },
        coercer(e) {
            return Array.isArray(e) ? e.slice() : e
        },
        validator(e) {
            return Array.isArray(e) || `Expected an array value, but received: ${Be(e)}`
        }
    })
}
function xe() {
    return dt("boolean", r => typeof r == "boolean")
}
function xn(r) {
    return dt("instance", e => e instanceof r || `Expected a \`${r.name}\` instance, but received: ${Be(e)}`)
}
function ee(r) {
    let e = Be(r)
      , t = typeof r;
    return new Le({
        type: "literal",
        schema: t === "string" || t === "number" || t === "boolean" ? r : null,
        validator(n) {
            return n === r || `Expected the literal \`${e}\`, but received: ${Be(n)}`
        }
    })
}
function Kf() {
    return dt("never", () => !1)
}
function k(r) {
    return new Le(F(C({}, r), {
        validator: (e, t) => e === null || r.validator(e, t),
        refiner: (e, t) => e === null || r.refiner(e, t)
    }))
}
function f() {
    return dt("number", r => typeof r == "number" && !isNaN(r) || `Expected a number, but received: ${Be(r)}`)
}
function v(r) {
    return new Le(F(C({}, r), {
        validator: (e, t) => e === void 0 || r.validator(e, t),
        refiner: (e, t) => e === void 0 || r.refiner(e, t)
    }))
}
function Ur(r, e) {
    return new Le({
        type: "record",
        schema: null,
        *entries(t) {
            if (zt(t))
                for (let n in t) {
                    let s = t[n];
                    yield[n, n, r],
                    yield[n, s, e]
                }
        },
        validator(t) {
            return Bn(t) || `Expected an object, but received: ${Be(t)}`
        },
        coercer(t) {
            return Bn(t) ? C({}, t) : t
        }
    })
}
function E() {
    return dt("string", r => typeof r == "string" || `Expected a string, but received: ${Be(r)}`)
}
function Pn(r) {
    let e = Kf();
    return new Le({
        type: "tuple",
        schema: null,
        *entries(t) {
            if (Array.isArray(t)) {
                let n = Math.max(r.length, t.length);
                for (let s = 0; s < n; s++)
                    yield[s, t[s], r[s] || e]
            }
        },
        validator(t) {
            return Array.isArray(t) || `Expected an array, but received: ${Be(t)}`
        },
        coercer(t) {
            return Array.isArray(t) ? t.slice() : t
        }
    })
}
function b(r) {
    let e = Object.keys(r);
    return new Le({
        type: "type",
        schema: r,
        *entries(t) {
            if (zt(t))
                for (let n of e)
                    yield[n, t[n], r[n]]
        },
        validator(t) {
            return Bn(t) || `Expected an object, but received: ${Be(t)}`
        },
        coercer(t) {
            return Bn(t) ? C({}, t) : t
        }
    })
}
function he(r) {
    let e = r.map(t => t.type).join(" | ");
    return new Le({
        type: "union",
        schema: null,
        coercer(t, n) {
            for (let s of r) {
                let[o,i] = s.validate(t, {
                    coerce: !0,
                    mask: n.mask
                });
                if (!o)
                    return i
            }
            return t
        },
        validator(t, n) {
            let s = [];
            for (let o of r) {
                let[...i] = Pr(t, o, n)
                  , [a] = i;
                if (a[0])
                    for (let[c] of i)
                        c && s.push(c);
                else
                    return []
            }
            return [`Expected the value to satisfy a union of \`${e}\`, but received: ${Be(t)}`, ...s]
        }
    })
}
function ft() {
    return dt("unknown", () => !0)
}
function wt(r, e, t) {
    return new Le(F(C({}, r), {
        coercer: (n, s) => yo(n, e) ? r.coercer(t(n, s), s) : r.coercer(n, s)
    }))
}
var xr, Le, Ro = Q( () => {
    "use strict";
    xr = class extends TypeError {
        constructor(e, t) {
            let n, d = e, {message: s, explanation: o} = d, i = ve(d, ["message", "explanation"]), {path: a} = e, c = a.length === 0 ? s : `At path: ${a.join(".")} -- ${s}`;
            super(o ?? c),
            o != null && (this.cause = c),
            Object.assign(this, i),
            this.name = this.constructor.name,
            this.failures = () => n ?? (n = [e, ...t()])
        }
    }
    ;
    Le = class {
        constructor(e) {
            let {type: t, schema: n, validator: s, refiner: o, coercer: i=c => c, entries: a=function*() {}
            } = e;
            this.type = t,
            this.schema = n,
            this.entries = a,
            this.coercer = i,
            s ? this.validator = (c, d) => {
                let _ = s(c, d);
                return po(_, d, this, c)
            }
            : this.validator = () => [],
            o ? this.refiner = (c, d) => {
                let _ = o(c, d);
                return po(_, d, this, c)
            }
            : this.refiner = () => []
        }
        assert(e, t) {
            return Dr(e, this, t)
        }
        create(e, t) {
            return I(e, this, t)
        }
        is(e) {
            return yo(e, this)
        }
        mask(e, t) {
            return Ff(e, this, t)
        }
        validate(e, t={}) {
            return Mt(e, this, t)
        }
    }
}
);
function Ft() {
    if (!Dn && (Dn = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto),
    !Dn))
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return Dn($f)
}
var Dn, $f, zr = Q( () => {
    "use strict";
    $f = new Uint8Array(16)
}
);
var mo, So = Q( () => {
    "use strict";
    mo = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i
}
);
function Wf(r) {
    return typeof r == "string" && mo.test(r)
}
var tt, Kt = Q( () => {
    "use strict";
    So();
    tt = Wf
}
);
function Vf(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
      , t = (de[r[e + 0]] + de[r[e + 1]] + de[r[e + 2]] + de[r[e + 3]] + "-" + de[r[e + 4]] + de[r[e + 5]] + "-" + de[r[e + 6]] + de[r[e + 7]] + "-" + de[r[e + 8]] + de[r[e + 9]] + "-" + de[r[e + 10]] + de[r[e + 11]] + de[r[e + 12]] + de[r[e + 13]] + de[r[e + 14]] + de[r[e + 15]]).toLowerCase();
    if (!tt(t))
        throw TypeError("Stringified UUID is invalid");
    return t
}
var de, Un, nt, $t = Q( () => {
    "use strict";
    Kt();
    de = [];
    for (Un = 0; Un < 256; ++Un)
        de.push((Un + 256).toString(16).substr(1));
    nt = Vf
}
);
function Gf(r, e, t) {
    var n = e && t || 0
      , s = e || new Array(16);
    r = r || {};
    var o = r.node || bo
      , i = r.clockseq !== void 0 ? r.clockseq : Mr;
    if (o == null || i == null) {
        var a = r.random || (r.rng || Ft)();
        o == null && (o = bo = [a[0] | 1, a[1], a[2], a[3], a[4], a[5]]),
        i == null && (i = Mr = (a[6] << 8 | a[7]) & 16383)
    }
    var c = r.msecs !== void 0 ? r.msecs : Date.now()
      , d = r.nsecs !== void 0 ? r.nsecs : Kr + 1
      , _ = c - Fr + (d - Kr) / 1e4;
    if (_ < 0 && r.clockseq === void 0 && (i = i + 1 & 16383),
    (_ < 0 || c > Fr) && r.nsecs === void 0 && (d = 0),
    d >= 1e4)
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    Fr = c,
    Kr = d,
    Mr = i,
    c += 122192928e5;
    var y = ((c & 268435455) * 1e4 + d) % 4294967296;
    s[n++] = y >>> 24 & 255,
    s[n++] = y >>> 16 & 255,
    s[n++] = y >>> 8 & 255,
    s[n++] = y & 255;
    var A = c / 4294967296 * 1e4 & 268435455;
    s[n++] = A >>> 8 & 255,
    s[n++] = A & 255,
    s[n++] = A >>> 24 & 15 | 16,
    s[n++] = A >>> 16 & 255,
    s[n++] = i >>> 8 | 128,
    s[n++] = i & 255;
    for (var h = 0; h < 6; ++h)
        s[n + h] = o[h];
    return e || nt(s)
}
var bo, Mr, Fr, Kr, Eo, Ao = Q( () => {
    "use strict";
    zr();
    $t();
    Fr = 0,
    Kr = 0;
    Eo = Gf
}
);
function qf(r) {
    if (!tt(r))
        throw TypeError("Invalid UUID");
    var e, t = new Uint8Array(16);
    return t[0] = (e = parseInt(r.slice(0, 8), 16)) >>> 24,
    t[1] = e >>> 16 & 255,
    t[2] = e >>> 8 & 255,
    t[3] = e & 255,
    t[4] = (e = parseInt(r.slice(9, 13), 16)) >>> 8,
    t[5] = e & 255,
    t[6] = (e = parseInt(r.slice(14, 18), 16)) >>> 8,
    t[7] = e & 255,
    t[8] = (e = parseInt(r.slice(19, 23), 16)) >>> 8,
    t[9] = e & 255,
    t[10] = (e = parseInt(r.slice(24, 36), 16)) / 1099511627776 & 255,
    t[11] = e / 4294967296 & 255,
    t[12] = e >>> 24 & 255,
    t[13] = e >>> 16 & 255,
    t[14] = e >>> 8 & 255,
    t[15] = e & 255,
    t
}
var zn, $r = Q( () => {
    "use strict";
    Kt();
    zn = qf
}
);
function Hf(r) {
    r = unescape(encodeURIComponent(r));
    for (var e = [], t = 0; t < r.length; ++t)
        e.push(r.charCodeAt(t));
    return e
}
function Mn(r, e, t) {
    function n(s, o, i, a) {
        if (typeof s == "string" && (s = Hf(s)),
        typeof o == "string" && (o = zn(o)),
        o.length !== 16)
            throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var c = new Uint8Array(16 + s.length);
        if (c.set(o),
        c.set(s, o.length),
        c = t(c),
        c[6] = c[6] & 15 | e,
        c[8] = c[8] & 63 | 128,
        i) {
            a = a || 0;
            for (var d = 0; d < 16; ++d)
                i[a + d] = c[d];
            return i
        }
        return nt(c)
    }
    try {
        n.name = r
    } catch {}
    return n.DNS = jf,
    n.URL = Yf,
    n
}
var jf, Yf, Wr = Q( () => {
    "use strict";
    $t();
    $r();
    jf = "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    Yf = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"
}
);
function Xf(r) {
    if (typeof r == "string") {
        var e = unescape(encodeURIComponent(r));
        r = new Uint8Array(e.length);
        for (var t = 0; t < e.length; ++t)
            r[t] = e.charCodeAt(t)
    }
    return Jf(Zf(Qf(r), r.length * 8))
}
function Jf(r) {
    for (var e = [], t = r.length * 32, n = "0123456789abcdef", s = 0; s < t; s += 8) {
        var o = r[s >> 5] >>> s % 32 & 255
          , i = parseInt(n.charAt(o >>> 4 & 15) + n.charAt(o & 15), 16);
        e.push(i)
    }
    return e
}
function Io(r) {
    return (r + 64 >>> 9 << 4) + 14 + 1
}
function Zf(r, e) {
    r[e >> 5] |= 128 << e % 32,
    r[Io(e) - 1] = e;
    for (var t = 1732584193, n = -271733879, s = -1732584194, o = 271733878, i = 0; i < r.length; i += 16) {
        var a = t
          , c = n
          , d = s
          , _ = o;
        t = _e(t, n, s, o, r[i], 7, -680876936),
        o = _e(o, t, n, s, r[i + 1], 12, -389564586),
        s = _e(s, o, t, n, r[i + 2], 17, 606105819),
        n = _e(n, s, o, t, r[i + 3], 22, -1044525330),
        t = _e(t, n, s, o, r[i + 4], 7, -176418897),
        o = _e(o, t, n, s, r[i + 5], 12, 1200080426),
        s = _e(s, o, t, n, r[i + 6], 17, -1473231341),
        n = _e(n, s, o, t, r[i + 7], 22, -45705983),
        t = _e(t, n, s, o, r[i + 8], 7, 1770035416),
        o = _e(o, t, n, s, r[i + 9], 12, -1958414417),
        s = _e(s, o, t, n, r[i + 10], 17, -42063),
        n = _e(n, s, o, t, r[i + 11], 22, -1990404162),
        t = _e(t, n, s, o, r[i + 12], 7, 1804603682),
        o = _e(o, t, n, s, r[i + 13], 12, -40341101),
        s = _e(s, o, t, n, r[i + 14], 17, -1502002290),
        n = _e(n, s, o, t, r[i + 15], 22, 1236535329),
        t = pe(t, n, s, o, r[i + 1], 5, -165796510),
        o = pe(o, t, n, s, r[i + 6], 9, -1069501632),
        s = pe(s, o, t, n, r[i + 11], 14, 643717713),
        n = pe(n, s, o, t, r[i], 20, -373897302),
        t = pe(t, n, s, o, r[i + 5], 5, -701558691),
        o = pe(o, t, n, s, r[i + 10], 9, 38016083),
        s = pe(s, o, t, n, r[i + 15], 14, -660478335),
        n = pe(n, s, o, t, r[i + 4], 20, -405537848),
        t = pe(t, n, s, o, r[i + 9], 5, 568446438),
        o = pe(o, t, n, s, r[i + 14], 9, -1019803690),
        s = pe(s, o, t, n, r[i + 3], 14, -187363961),
        n = pe(n, s, o, t, r[i + 8], 20, 1163531501),
        t = pe(t, n, s, o, r[i + 13], 5, -1444681467),
        o = pe(o, t, n, s, r[i + 2], 9, -51403784),
        s = pe(s, o, t, n, r[i + 7], 14, 1735328473),
        n = pe(n, s, o, t, r[i + 12], 20, -1926607734),
        t = ye(t, n, s, o, r[i + 5], 4, -378558),
        o = ye(o, t, n, s, r[i + 8], 11, -2022574463),
        s = ye(s, o, t, n, r[i + 11], 16, 1839030562),
        n = ye(n, s, o, t, r[i + 14], 23, -35309556),
        t = ye(t, n, s, o, r[i + 1], 4, -1530992060),
        o = ye(o, t, n, s, r[i + 4], 11, 1272893353),
        s = ye(s, o, t, n, r[i + 7], 16, -155497632),
        n = ye(n, s, o, t, r[i + 10], 23, -1094730640),
        t = ye(t, n, s, o, r[i + 13], 4, 681279174),
        o = ye(o, t, n, s, r[i], 11, -358537222),
        s = ye(s, o, t, n, r[i + 3], 16, -722521979),
        n = ye(n, s, o, t, r[i + 6], 23, 76029189),
        t = ye(t, n, s, o, r[i + 9], 4, -640364487),
        o = ye(o, t, n, s, r[i + 12], 11, -421815835),
        s = ye(s, o, t, n, r[i + 15], 16, 530742520),
        n = ye(n, s, o, t, r[i + 2], 23, -995338651),
        t = ge(t, n, s, o, r[i], 6, -198630844),
        o = ge(o, t, n, s, r[i + 7], 10, 1126891415),
        s = ge(s, o, t, n, r[i + 14], 15, -1416354905),
        n = ge(n, s, o, t, r[i + 5], 21, -57434055),
        t = ge(t, n, s, o, r[i + 12], 6, 1700485571),
        o = ge(o, t, n, s, r[i + 3], 10, -1894986606),
        s = ge(s, o, t, n, r[i + 10], 15, -1051523),
        n = ge(n, s, o, t, r[i + 1], 21, -2054922799),
        t = ge(t, n, s, o, r[i + 8], 6, 1873313359),
        o = ge(o, t, n, s, r[i + 15], 10, -30611744),
        s = ge(s, o, t, n, r[i + 6], 15, -1560198380),
        n = ge(n, s, o, t, r[i + 13], 21, 1309151649),
        t = ge(t, n, s, o, r[i + 4], 6, -145523070),
        o = ge(o, t, n, s, r[i + 11], 10, -1120210379),
        s = ge(s, o, t, n, r[i + 2], 15, 718787259),
        n = ge(n, s, o, t, r[i + 9], 21, -343485551),
        t = rt(t, a),
        n = rt(n, c),
        s = rt(s, d),
        o = rt(o, _)
    }
    return [t, n, s, o]
}
function Qf(r) {
    if (r.length === 0)
        return [];
    for (var e = r.length * 8, t = new Uint32Array(Io(e)), n = 0; n < e; n += 8)
        t[n >> 5] |= (r[n / 8] & 255) << n % 32;
    return t
}
function rt(r, e) {
    var t = (r & 65535) + (e & 65535)
      , n = (r >> 16) + (e >> 16) + (t >> 16);
    return n << 16 | t & 65535
}
function el(r, e) {
    return r << e | r >>> 32 - e
}
function Fn(r, e, t, n, s, o) {
    return rt(el(rt(rt(e, r), rt(n, o)), s), t)
}
function _e(r, e, t, n, s, o, i) {
    return Fn(e & t | ~e & n, r, e, s, o, i)
}
function pe(r, e, t, n, s, o, i) {
    return Fn(e & n | t & ~n, r, e, s, o, i)
}
function ye(r, e, t, n, s, o, i) {
    return Fn(e ^ t ^ n, r, e, s, o, i)
}
function ge(r, e, t, n, s, o, i) {
    return Fn(t ^ (e | ~n), r, e, s, o, i)
}
var wo, Oo = Q( () => {
    "use strict";
    wo = Xf
}
);
var tl, ko, No = Q( () => {
    "use strict";
    Wr();
    Oo();
    tl = Mn("v3", 48, wo),
    ko = tl
}
);
function nl(r, e, t) {
    r = r || {};
    var n = r.random || (r.rng || Ft)();
    if (n[6] = n[6] & 15 | 64,
    n[8] = n[8] & 63 | 128,
    e) {
        t = t || 0;
        for (var s = 0; s < 16; ++s)
            e[t + s] = n[s];
        return e
    }
    return nt(n)
}
var To, Lo = Q( () => {
    "use strict";
    zr();
    $t();
    To = nl
}
);
function rl(r, e, t, n) {
    switch (r) {
    case 0:
        return e & t ^ ~e & n;
    case 1:
        return e ^ t ^ n;
    case 2:
        return e & t ^ e & n ^ t & n;
    case 3:
        return e ^ t ^ n
    }
}
function Vr(r, e) {
    return r << e | r >>> 32 - e
}
function sl(r) {
    var e = [1518500249, 1859775393, 2400959708, 3395469782]
      , t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof r == "string") {
        var n = unescape(encodeURIComponent(r));
        r = [];
        for (var s = 0; s < n.length; ++s)
            r.push(n.charCodeAt(s))
    } else
        Array.isArray(r) || (r = Array.prototype.slice.call(r));
    r.push(128);
    for (var o = r.length / 4 + 2, i = Math.ceil(o / 16), a = new Array(i), c = 0; c < i; ++c) {
        for (var d = new Uint32Array(16), _ = 0; _ < 16; ++_)
            d[_] = r[c * 64 + _ * 4] << 24 | r[c * 64 + _ * 4 + 1] << 16 | r[c * 64 + _ * 4 + 2] << 8 | r[c * 64 + _ * 4 + 3];
        a[c] = d
    }
    a[i - 1][14] = (r.length - 1) * 8 / Math.pow(2, 32),
    a[i - 1][14] = Math.floor(a[i - 1][14]),
    a[i - 1][15] = (r.length - 1) * 8 & 4294967295;
    for (var y = 0; y < i; ++y) {
        for (var A = new Uint32Array(80), h = 0; h < 16; ++h)
            A[h] = a[y][h];
        for (var g = 16; g < 80; ++g)
            A[g] = Vr(A[g - 3] ^ A[g - 8] ^ A[g - 14] ^ A[g - 16], 1);
        for (var R = t[0], p = t[1], S = t[2], N = t[3], x = t[4], P = 0; P < 80; ++P) {
            var L = Math.floor(P / 20)
              , D = Vr(R, 5) + rl(L, p, S, N) + x + e[L] + A[P] >>> 0;
            x = N,
            N = S,
            S = Vr(p, 30) >>> 0,
            p = R,
            R = D
        }
        t[0] = t[0] + R >>> 0,
        t[1] = t[1] + p >>> 0,
        t[2] = t[2] + S >>> 0,
        t[3] = t[3] + N >>> 0,
        t[4] = t[4] + x >>> 0
    }
    return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255]
}
var vo, Co = Q( () => {
    "use strict";
    vo = sl
}
);
var ol, Bo, xo = Q( () => {
    "use strict";
    Wr();
    Co();
    ol = Mn("v5", 80, vo),
    Bo = ol
}
);
var Po, Do = Q( () => {
    "use strict";
    Po = "00000000-0000-0000-0000-000000000000"
}
);
function il(r) {
    if (!tt(r))
        throw TypeError("Invalid UUID");
    return parseInt(r.substr(14, 1), 16)
}
var Uo, zo = Q( () => {
    "use strict";
    Kt();
    Uo = il
}
);
var Gr = {};
ar(Gr, {
    NIL: () => Po,
    parse: () => zn,
    stringify: () => nt,
    v1: () => Eo,
    v3: () => ko,
    v4: () => To,
    v5: () => Bo,
    validate: () => tt,
    version: () => Uo
});
var qr = Q( () => {
    "use strict";
    Ao();
    No();
    Lo();
    xo();
    Do();
    zo();
    Kt();
    $t();
    $r()
}
);
var Fo = it( (Pp, Mo) => {
    "use strict";
    var al = (qr(),
    cr(Gr)).v4
      , cl = function(r, e, t, n) {
        if (typeof r != "string")
            throw new TypeError(r + " must be a string");
        n = n || {};
        let s = typeof n.version == "number" ? n.version : 2;
        if (s !== 1 && s !== 2)
            throw new TypeError(s + " must be 1 or 2");
        let o = {
            method: r
        };
        if (s === 2 && (o.jsonrpc = "2.0"),
        e) {
            if (typeof e != "object" && !Array.isArray(e))
                throw new TypeError(e + " must be an object, array or omitted");
            o.params = e
        }
        if (typeof t > "u") {
            let i = typeof n.generator == "function" ? n.generator : function() {
                return al()
            }
            ;
            o.id = i(o, n)
        } else
            s === 2 && t === null ? n.notificationIdNull && (o.id = null) : o.id = t;
        return o
    };
    Mo.exports = cl
}
);
var $o = it( (Dp, Ko) => {
    "use strict";
    var ul = (qr(),
    cr(Gr)).v4
      , dl = Fo()
      , Wt = function(r, e) {
        if (!(this instanceof Wt))
            return new Wt(r,e);
        e || (e = {}),
        this.options = {
            reviver: typeof e.reviver < "u" ? e.reviver : null,
            replacer: typeof e.replacer < "u" ? e.replacer : null,
            generator: typeof e.generator < "u" ? e.generator : function() {
                return ul()
            }
            ,
            version: typeof e.version < "u" ? e.version : 2,
            notificationIdNull: typeof e.notificationIdNull == "boolean" ? e.notificationIdNull : !1
        },
        this.callServer = r
    };
    Ko.exports = Wt;
    Wt.prototype.request = function(r, e, t, n) {
        let s = this
          , o = null
          , i = Array.isArray(r) && typeof e == "function";
        if (this.options.version === 1 && i)
            throw new TypeError("JSON-RPC 1.0 does not support batching");
        if (i || !i && r && typeof r == "object" && typeof e == "function")
            n = e,
            o = r;
        else {
            typeof t == "function" && (n = t,
            t = void 0);
            let d = typeof n == "function";
            try {
                o = dl(r, e, t, {
                    generator: this.options.generator,
                    version: this.options.version,
                    notificationIdNull: this.options.notificationIdNull
                })
            } catch (_) {
                if (d)
                    return n(_);
                throw _
            }
            if (!d)
                return o
        }
        let c;
        try {
            c = JSON.stringify(o, this.options.replacer)
        } catch (d) {
            return n(d)
        }
        return this.callServer(c, function(d, _) {
            s._parseResponse(d, _, n)
        }),
        o
    }
    ;
    Wt.prototype._parseResponse = function(r, e, t) {
        if (r) {
            t(r);
            return
        }
        if (!e)
            return t();
        let n;
        try {
            n = JSON.parse(e, this.options.reviver)
        } catch (s) {
            return t(s)
        }
        if (t.length === 3)
            if (Array.isArray(n)) {
                let s = function(i) {
                    return typeof i.error < "u"
                }
                  , o = function(i) {
                    return !s(i)
                };
                return t(null, n.filter(s), n.filter(o))
            } else
                return t(null, n.error, n.result);
        t(null, n)
    }
}
);
var Vo = it( (Up, Hr) => {
    "use strict";
    var fl = Object.prototype.hasOwnProperty
      , Ee = "~";
    function Vt() {}
    Object.create && (Vt.prototype = Object.create(null),
    new Vt().__proto__ || (Ee = !1));
    function ll(r, e, t) {
        this.fn = r,
        this.context = e,
        this.once = t || !1
    }
    function Wo(r, e, t, n, s) {
        if (typeof t != "function")
            throw new TypeError("The listener must be a function");
        var o = new ll(t,n || r,s)
          , i = Ee ? Ee + e : e;
        return r._events[i] ? r._events[i].fn ? r._events[i] = [r._events[i], o] : r._events[i].push(o) : (r._events[i] = o,
        r._eventsCount++),
        r
    }
    function Kn(r, e) {
        --r._eventsCount === 0 ? r._events = new Vt : delete r._events[e]
    }
    function Re() {
        this._events = new Vt,
        this._eventsCount = 0
    }
    Re.prototype.eventNames = function() {
        var e = [], t, n;
        if (this._eventsCount === 0)
            return e;
        for (n in t = this._events)
            fl.call(t, n) && e.push(Ee ? n.slice(1) : n);
        return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e
    }
    ;
    Re.prototype.listeners = function(e) {
        var t = Ee ? Ee + e : e
          , n = this._events[t];
        if (!n)
            return [];
        if (n.fn)
            return [n.fn];
        for (var s = 0, o = n.length, i = new Array(o); s < o; s++)
            i[s] = n[s].fn;
        return i
    }
    ;
    Re.prototype.listenerCount = function(e) {
        var t = Ee ? Ee + e : e
          , n = this._events[t];
        return n ? n.fn ? 1 : n.length : 0
    }
    ;
    Re.prototype.emit = function(e, t, n, s, o, i) {
        var a = Ee ? Ee + e : e;
        if (!this._events[a])
            return !1;
        var c = this._events[a], d = arguments.length, _, y;
        if (c.fn) {
            switch (c.once && this.removeListener(e, c.fn, void 0, !0),
            d) {
            case 1:
                return c.fn.call(c.context),
                !0;
            case 2:
                return c.fn.call(c.context, t),
                !0;
            case 3:
                return c.fn.call(c.context, t, n),
                !0;
            case 4:
                return c.fn.call(c.context, t, n, s),
                !0;
            case 5:
                return c.fn.call(c.context, t, n, s, o),
                !0;
            case 6:
                return c.fn.call(c.context, t, n, s, o, i),
                !0
            }
            for (y = 1,
            _ = new Array(d - 1); y < d; y++)
                _[y - 1] = arguments[y];
            c.fn.apply(c.context, _)
        } else {
            var A = c.length, h;
            for (y = 0; y < A; y++)
                switch (c[y].once && this.removeListener(e, c[y].fn, void 0, !0),
                d) {
                case 1:
                    c[y].fn.call(c[y].context);
                    break;
                case 2:
                    c[y].fn.call(c[y].context, t);
                    break;
                case 3:
                    c[y].fn.call(c[y].context, t, n);
                    break;
                case 4:
                    c[y].fn.call(c[y].context, t, n, s);
                    break;
                default:
                    if (!_)
                        for (h = 1,
                        _ = new Array(d - 1); h < d; h++)
                            _[h - 1] = arguments[h];
                    c[y].fn.apply(c[y].context, _)
                }
        }
        return !0
    }
    ;
    Re.prototype.on = function(e, t, n) {
        return Wo(this, e, t, n, !1)
    }
    ;
    Re.prototype.once = function(e, t, n) {
        return Wo(this, e, t, n, !0)
    }
    ;
    Re.prototype.removeListener = function(e, t, n, s) {
        var o = Ee ? Ee + e : e;
        if (!this._events[o])
            return this;
        if (!t)
            return Kn(this, o),
            this;
        var i = this._events[o];
        if (i.fn)
            i.fn === t && (!s || i.once) && (!n || i.context === n) && Kn(this, o);
        else {
            for (var a = 0, c = [], d = i.length; a < d; a++)
                (i[a].fn !== t || s && !i[a].once || n && i[a].context !== n) && c.push(i[a]);
            c.length ? this._events[o] = c.length === 1 ? c[0] : c : Kn(this, o)
        }
        return this
    }
    ;
    Re.prototype.removeAllListeners = function(e) {
        var t;
        return e ? (t = Ee ? Ee + e : e,
        this._events[t] && Kn(this, t)) : (this._events = new Vt,
        this._eventsCount = 0),
        this
    }
    ;
    Re.prototype.off = Re.prototype.removeListener;
    Re.prototype.addListener = Re.prototype.on;
    Re.prefixed = Ee;
    Re.EventEmitter = Re;
    typeof Hr < "u" && (Hr.exports = Re)
}
);
var $n, Go = Q( () => {
    "use strict";
    $n = Ge(Vo(), 1)
}
);
function Ho(r, e) {
    return new hl(r,e)
}
var qo, hl, _l, jo, Yo = Q( () => {
    "use strict";
    qo = Ge(pr(), 1);
    Go();
    hl = class extends $n.default {
        socket;
        constructor(r, e, t) {
            super(),
            this.socket = new window.WebSocket(r,t),
            this.socket.onopen = () => this.emit("open"),
            this.socket.onmessage = n => this.emit("message", n.data),
            this.socket.onerror = n => this.emit("error", n),
            this.socket.onclose = n => {
                this.emit("close", n.code, n.reason)
            }
        }
        send(r, e, t) {
            let n = t || e;
            try {
                this.socket.send(r),
                n()
            } catch (s) {
                n(s)
            }
        }
        close(r, e) {
            this.socket.close(r, e)
        }
        addEventListener(r, e, t) {
            this.socket.addEventListener(r, e, t)
        }
    }
    ;
    _l = class {
        encode(r) {
            return JSON.stringify(r)
        }
        decode(r) {
            return JSON.parse(r)
        }
    }
    ,
    jo = class extends $n.default {
        address;
        rpc_id;
        queue;
        options;
        autoconnect;
        ready;
        reconnect;
        reconnect_timer_id;
        reconnect_interval;
        max_reconnects;
        rest_options;
        current_reconnects;
        generate_request_id;
        socket;
        webSocketFactory;
        dataPack;
        constructor(r, e="ws://localhost:8080", d={}, a, c) {
            var _ = d
              , {autoconnect: t=!0, reconnect: n=!0, reconnect_interval: s=1e3, max_reconnects: o=5} = _
              , i = ve(_, ["autoconnect", "reconnect", "reconnect_interval", "max_reconnects"]);
            super(),
            this.webSocketFactory = r,
            this.queue = {},
            this.rpc_id = 0,
            this.address = e,
            this.autoconnect = t,
            this.ready = !1,
            this.reconnect = n,
            this.reconnect_timer_id = void 0,
            this.reconnect_interval = s,
            this.max_reconnects = o,
            this.rest_options = i,
            this.current_reconnects = 0,
            this.generate_request_id = a || ( () => typeof this.rpc_id == "number" ? ++this.rpc_id : Number(this.rpc_id) + 1),
            c ? this.dataPack = c : this.dataPack = new _l,
            this.autoconnect && this._connect(this.address, C({
                autoconnect: this.autoconnect,
                reconnect: this.reconnect,
                reconnect_interval: this.reconnect_interval,
                max_reconnects: this.max_reconnects
            }, this.rest_options))
        }
        connect() {
            this.socket || this._connect(this.address, C({
                autoconnect: this.autoconnect,
                reconnect: this.reconnect,
                reconnect_interval: this.reconnect_interval,
                max_reconnects: this.max_reconnects
            }, this.rest_options))
        }
        call(r, e, t, n) {
            return !n && typeof t == "object" && (n = t,
            t = null),
            new Promise( (s, o) => {
                if (!this.ready)
                    return o(new Error("socket not ready"));
                let i = this.generate_request_id(r, e)
                  , a = {
                    jsonrpc: "2.0",
                    method: r,
                    params: e || void 0,
                    id: i
                };
                this.socket.send(this.dataPack.encode(a), n, c => {
                    if (c)
                        return o(c);
                    this.queue[i] = {
                        promise: [s, o]
                    },
                    t && (this.queue[i].timeout = setTimeout( () => {
                        delete this.queue[i],
                        o(new Error("reply timeout"))
                    }
                    , t))
                }
                )
            }
            )
        }
        login(r) {
            return m(this, null, function*() {
                let e = yield this.call("rpc.login", r);
                if (!e)
                    throw new Error("authentication failed");
                return e
            })
        }
        listMethods() {
            return m(this, null, function*() {
                return yield this.call("__listMethods")
            })
        }
        notify(r, e) {
            return new Promise( (t, n) => {
                if (!this.ready)
                    return n(new Error("socket not ready"));
                let s = {
                    jsonrpc: "2.0",
                    method: r,
                    params: e
                };
                this.socket.send(this.dataPack.encode(s), o => {
                    if (o)
                        return n(o);
                    t()
                }
                )
            }
            )
        }
        subscribe(r) {
            return m(this, null, function*() {
                typeof r == "string" && (r = [r]);
                let e = yield this.call("rpc.on", r);
                if (typeof r == "string" && e[r] !== "ok")
                    throw new Error("Failed subscribing to an event '" + r + "' with: " + e[r]);
                return e
            })
        }
        unsubscribe(r) {
            return m(this, null, function*() {
                typeof r == "string" && (r = [r]);
                let e = yield this.call("rpc.off", r);
                if (typeof r == "string" && e[r] !== "ok")
                    throw new Error("Failed unsubscribing from an event with: " + e);
                return e
            })
        }
        close(r, e) {
            this.socket.close(r || 1e3, e)
        }
        setAutoReconnect(r) {
            this.reconnect = r
        }
        setReconnectInterval(r) {
            this.reconnect_interval = r
        }
        setMaxReconnects(r) {
            this.max_reconnects = r
        }
        _connect(r, e) {
            clearTimeout(this.reconnect_timer_id),
            this.socket = this.webSocketFactory(r, e),
            this.socket.addEventListener("open", () => {
                this.ready = !0,
                this.emit("open"),
                this.current_reconnects = 0
            }
            ),
            this.socket.addEventListener("message", ({data: t}) => {
                t instanceof ArrayBuffer && (t = qo.Buffer.from(t).toString());
                try {
                    t = this.dataPack.decode(t)
                } catch {
                    return
                }
                if (t.notification && this.listeners(t.notification).length) {
                    if (!Object.keys(t.params).length)
                        return this.emit(t.notification);
                    let n = [t.notification];
                    if (t.params.constructor === Object)
                        n.push(t.params);
                    else
                        for (let s = 0; s < t.params.length; s++)
                            n.push(t.params[s]);
                    return Promise.resolve().then( () => {
                        this.emit.apply(this, n)
                    }
                    )
                }
                if (!this.queue[t.id])
                    return t.method ? Promise.resolve().then( () => {
                        this.emit(t.method, t?.params)
                    }
                    ) : void 0;
                "error"in t == "result"in t && this.queue[t.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')),
                this.queue[t.id].timeout && clearTimeout(this.queue[t.id].timeout),
                t.error ? this.queue[t.id].promise[1](t.error) : this.queue[t.id].promise[0](t.result),
                delete this.queue[t.id]
            }
            ),
            this.socket.addEventListener("error", t => this.emit("error", t)),
            this.socket.addEventListener("close", ({code: t, reason: n}) => {
                this.ready && setTimeout( () => this.emit("close", t, n), 0),
                this.ready = !1,
                this.socket = void 0,
                t !== 1e3 && (this.current_reconnects++,
                this.reconnect && (this.max_reconnects > this.current_reconnects || this.max_reconnects === 0) && (this.reconnect_timer_id = setTimeout( () => this._connect(r, e), this.reconnect_interval)))
            }
            )
        }
    }
}
);
var S_ = {};
ar(S_, {
    Account: () => ns,
    AddressLookupTableAccount: () => Jt,
    AddressLookupTableInstruction: () => ps,
    AddressLookupTableProgram: () => Qt,
    Authorized: () => er,
    BLOCKHASH_CACHE_TIMEOUT_MS: () => Ii,
    BPF_LOADER_DEPRECATED_PROGRAM_ID: () => Rl,
    BPF_LOADER_PROGRAM_ID: () => Pl,
    BpfLoader: () => us,
    COMPUTE_BUDGET_INSTRUCTION_LAYOUTS: () => Ke,
    ComputeBudgetInstruction: () => ys,
    ComputeBudgetProgram: () => en,
    Connection: () => _s,
    Ed25519Program: () => Zn,
    Enum: () => ts,
    EpochSchedule: () => Yn,
    FeeCalculatorLayout: () => bi,
    Keypair: () => Jn,
    LAMPORTS_PER_SOL: () => m_,
    LOOKUP_TABLE_INSTRUCTION_LAYOUTS: () => Xe,
    Loader: () => cs,
    Lockup: () => yt,
    MAX_SEED_LENGTH: () => gi,
    Message: () => Ve,
    MessageAccountKeys: () => _t,
    MessageV0: () => Ot,
    NONCE_ACCOUNT_LENGTH: () => is,
    NonceAccount: () => jn,
    PACKET_DATA_SIZE: () => ot,
    PUBLIC_KEY_LENGTH: () => We,
    PublicKey: () => w,
    SIGNATURE_LENGTH_IN_BYTES: () => jt,
    SOLANA_SCHEMA: () => qt,
    STAKE_CONFIG_ID: () => Pi,
    STAKE_INSTRUCTION_LAYOUTS: () => ae,
    SYSTEM_INSTRUCTION_LAYOUTS: () => Z,
    SYSVAR_CLOCK_PUBKEY: () => Me,
    SYSVAR_EPOCH_SCHEDULE_PUBKEY: () => Nl,
    SYSVAR_INSTRUCTIONS_PUBKEY: () => Tl,
    SYSVAR_RECENT_BLOCKHASHES_PUBKEY: () => Vn,
    SYSVAR_RENT_PUBKEY: () => kt,
    SYSVAR_REWARDS_PUBKEY: () => Ll,
    SYSVAR_SLOT_HASHES_PUBKEY: () => vl,
    SYSVAR_SLOT_HISTORY_PUBKEY: () => Cl,
    SYSVAR_STAKE_HISTORY_PUBKEY: () => Gn,
    Secp256k1Program: () => Qn,
    SendTransactionError: () => pt,
    SolanaJSONRPCError: () => T,
    SolanaJSONRPCErrorCode: () => Bl,
    StakeAuthorizationLayout: () => d_,
    StakeInstruction: () => gs,
    StakeProgram: () => Tt,
    Struct: () => Ht,
    SystemInstruction: () => as,
    SystemProgram: () => fe,
    Transaction: () => j,
    TransactionExpiredBlockheightExceededError: () => Yt,
    TransactionExpiredNonceInvalidError: () => st,
    TransactionExpiredTimeoutError: () => Xt,
    TransactionInstruction: () => Y,
    TransactionMessage: () => rs,
    TransactionStatus: () => Ye,
    VALIDATOR_INFO_KEY: () => Di,
    VERSION_PREFIX_MASK: () => nr,
    VOTE_PROGRAM_ID: () => h_,
    ValidatorInfo: () => ms,
    VersionedMessage: () => Es,
    VersionedTransaction: () => ss,
    VoteAccount: () => Ss,
    VoteAuthorizationLayout: () => f_,
    VoteInit: () => tr,
    VoteInstruction: () => Rs,
    VoteProgram: () => Lt,
    clusterApiUrl: () => g_,
    sendAndConfirmRawTransaction: () => R_,
    sendAndConfirmTransaction: () => os
});
function Jo(r) {
    try {
        return at.ExtendedPoint.fromHex(r),
        !0
    } catch {
        return !1
    }
}
function gl(r) {
    return r._bn !== void 0
}
function Ri(r, e) {
    let t = s => {
        if (s.span >= 0)
            return s.span;
        if (typeof s.alloc == "function")
            return s.alloc(e[s.property]);
        if ("count"in s && "elementLayout"in s) {
            let o = e[s.property];
            if (Array.isArray(o))
                return o.length * t(s.elementLayout)
        } else if ("fields"in s)
            return Ri({
                layout: s
            }, e[s.property]);
        return 0
    }
      , n = 0;
    return r.layout.fields.forEach(s => {
        n += t(s)
    }
    ),
    n
}
function we(r) {
    let e = 0
      , t = 0;
    for (; ; ) {
        let n = r.shift();
        if (e |= (n & 127) << t * 7,
        t += 1,
        !(n & 128))
            break
    }
    return e
}
function Te(r, e) {
    let t = e;
    for (; ; ) {
        let n = t & 127;
        if (t >>= 7,
        t == 0) {
            r.push(n);
            break
        } else
            n |= 128,
            r.push(n)
    }
}
function V(r, e) {
    if (!r)
        throw new Error(e || "Assertion failed")
}
function Fe(r) {
    if (r.length === 0)
        throw new Error(mi);
    return r.shift()
}
function Oe(r, ...e) {
    let[t] = e;
    if (e.length === 2 ? t + (e[1] ?? 0) > r.length : t >= r.length)
        throw new Error(mi);
    return r.splice(...e)
}
function os(r, e, t, n) {
    return m(this, null, function*() {
        let s = n && {
            skipPreflight: n.skipPreflight,
            preflightCommitment: n.preflightCommitment || n.commitment,
            maxRetries: n.maxRetries,
            minContextSlot: n.minContextSlot
        }, o = yield r.sendTransaction(e, t, s), i;
        if (e.recentBlockhash != null && e.lastValidBlockHeight != null)
            i = (yield r.confirmTransaction({
                abortSignal: n?.abortSignal,
                signature: o,
                blockhash: e.recentBlockhash,
                lastValidBlockHeight: e.lastValidBlockHeight
            }, n && n.commitment)).value;
        else if (e.minNonceContextSlot != null && e.nonceInfo != null) {
            let {nonceInstruction: a} = e.nonceInfo
              , c = a.keys[0].pubkey;
            i = (yield r.confirmTransaction({
                abortSignal: n?.abortSignal,
                minContextSlot: e.minNonceContextSlot,
                nonceAccountPubkey: c,
                nonceValue: e.nonceInfo.nonce,
                signature: o
            }, n && n.commitment)).value
        } else
            n?.abortSignal != null && console.warn("sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."),
            i = (yield r.confirmTransaction(o, n && n.commitment)).value;
        if (i.err)
            throw o != null ? new pt({
                action: "send",
                signature: o,
                transactionMessage: `Status: (${JSON.stringify(i)})`
            }) : new Error(`Transaction ${o} failed (${JSON.stringify(i)})`);
        return o
    })
}
function lt(r) {
    return new Promise(e => setTimeout(e, r))
}
function $(r, e) {
    let t = r.layout.span >= 0 ? r.layout.span : Ri(r, e)
      , n = B.Buffer.alloc(t)
      , s = Object.assign({
        instruction: r.index
    }, e);
    return r.layout.encode(s, n),
    n
}
function H(r, e) {
    let t;
    try {
        t = r.layout.decode(e)
    } catch (n) {
        throw new Error("invalid instruction; " + n)
    }
    if (t.instruction !== r.index)
        throw new Error(`invalid instruction; instruction index mismatch ${t.instruction} != ${r.index}`);
    return t
}
function Nt(r) {
    let e = (0,
    _i.blob)(8, r)
      , t = e.decode.bind(e)
      , n = e.encode.bind(e)
      , s = e
      , o = ho();
    return s.decode = (i, a) => {
        let c = t(i, a);
        return o.decode(c)
    }
    ,
    s.encode = (i, a, c) => {
        let d = o.encode(i);
        return n(d, a, c)
    }
    ,
    s
}
function Dl(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}
function Ul() {
    if (Qo)
        return jr;
    Qo = 1;
    var r = Object.prototype.toString
      , e = Object.keys || function(n) {
        var s = [];
        for (var o in n)
            s.push(o);
        return s
    }
    ;
    function t(n, s) {
        var o, i, a, c, d, _, y;
        if (n === !0)
            return "true";
        if (n === !1)
            return "false";
        switch (typeof n) {
        case "object":
            if (n === null)
                return null;
            if (n.toJSON && typeof n.toJSON == "function")
                return t(n.toJSON(), s);
            if (y = r.call(n),
            y === "[object Array]") {
                for (a = "[",
                i = n.length - 1,
                o = 0; o < i; o++)
                    a += t(n[o], !0) + ",";
                return i > -1 && (a += t(n[o], !0)),
                a + "]"
            } else if (y === "[object Object]") {
                for (c = e(n).sort(),
                i = c.length,
                a = "",
                o = 0; o < i; )
                    d = c[o],
                    _ = t(n[d], !1),
                    _ !== void 0 && (a && (a += ","),
                    a += JSON.stringify(d) + ":" + _),
                    o++;
                return "{" + a + "}"
            } else
                return JSON.stringify(n);
        case "function":
        case "undefined":
            return s ? null : void 0;
        case "string":
            return JSON.stringify(n);
        default:
            return isFinite(n) ? n : null
        }
    }
    return jr = function(n) {
        var s = t(n, !1);
        if (s !== void 0)
            return "" + s
    }
    ,
    jr
}
function Yr(r) {
    let e = 0;
    for (; r > 1; )
        r /= 2,
        e++;
    return e
}
function Ml(r) {
    return r === 0 ? 1 : (r--,
    r |= r >> 1,
    r |= r >> 2,
    r |= r >> 4,
    r |= r >> 8,
    r |= r >> 16,
    r |= r >> 32,
    r + 1)
}
function Kl(r, e) {
    let t;
    try {
        t = r.layout.decode(e)
    } catch (n) {
        throw new Error("invalid instruction; " + n)
    }
    if (t.typeIndex !== r.index)
        throw new Error(`invalid account data; account type mismatch ${t.typeIndex} != ${r.index}`);
    return t
}
function Vl(r) {
    let e = r.match(Wl);
    if (e == null)
        throw TypeError(`Failed to validate endpoint URL \`${r}\``);
    let[t,n,s,o] = e
      , i = r.startsWith("https:") ? "wss:" : "ws:"
      , a = s == null ? null : parseInt(s.slice(1), 10)
      , c = a == null ? "" : `:${a + 1}`;
    return `${i}//${n}${c}${o}`
}
function Gl(r) {
    if (/^https?:/.test(r) === !1)
        throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
    return r
}
function J(r) {
    let e, t;
    if (typeof r == "string")
        e = r;
    else if (r) {
        let n = r
          , {commitment: s} = n
          , o = ve(n, ["commitment"]);
        e = s,
        t = o
    }
    return {
        commitment: e,
        config: t
    }
}
function ni(r) {
    return r.map(e => "memcmp"in e ? F(C({}, e), {
        memcmp: F(C({}, e.memcmp), {
            encoding: e.memcmp.encoding ?? "base58"
        })
    }) : e)
}
function wi(r) {
    return he([b({
        jsonrpc: ee("2.0"),
        id: E(),
        result: r
    }), b({
        jsonrpc: ee("2.0"),
        id: E(),
        error: b({
            code: ft(),
            message: E(),
            data: v(go())
        })
    })])
}
function z(r) {
    return wt(wi(r), ql, e => "error"in e ? e : F(C({}, e), {
        result: I(e.result, r)
    }))
}
function se(r) {
    return z(b({
        context: b({
            slot: f()
        }),
        value: r
    }))
}
function rr(r) {
    return b({
        context: b({
            slot: f()
        }),
        value: r
    })
}
function Xr(r, e) {
    return r === 0 ? new Ot({
        header: e.header,
        staticAccountKeys: e.accountKeys.map(t => new w(t)),
        recentBlockhash: e.recentBlockhash,
        compiledInstructions: e.instructions.map(t => ({
            programIdIndex: t.programIdIndex,
            accountKeyIndexes: t.accounts,
            data: ce.default.decode(t.data)
        })),
        addressTableLookups: e.addressTableLookups
    }) : new Ve(e)
}
function ih(r, e, t, n, s, o) {
    let i = t || Fl, a;
    o != null && console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments.");
    let c;
    return n && (c = (_, y) => m(this, null, function*() {
        let A = yield new Promise( (h, g) => {
            try {
                n(_, y, (R, p) => h([R, p]))
            } catch (R) {
                g(R)
            }
        }
        );
        return yield i(...A)
    })),
    new pi.default( (_, y) => m(this, null, function*() {
        let A = {
            method: "POST",
            body: _,
            agent: a,
            headers: Object.assign({
                "Content-Type": "application/json"
            }, e || {}, i_)
        };
        try {
            let h = 5, g, R = 500;
            for (; c ? g = yield c(r, A) : g = yield i(r, A),
            !(g.status !== 429 || s === !0 || (h -= 1,
            h === 0)); )
                console.error(`Server responded with ${g.status} ${g.statusText}.  Retrying after ${R}ms delay...`),
                yield lt(R),
                R *= 2;
            let p = yield g.text();
            g.ok ? y(null, p) : y(new Error(`${g.status} ${g.statusText}: ${p}`))
        } catch (h) {
            h instanceof Error && y(h)
        }
    }),{})
}
function ah(r) {
    return (e, t) => new Promise( (n, s) => {
        r.request(e, t, (o, i) => {
            if (o) {
                s(o);
                return
            }
            n(i)
        }
        )
    }
    )
}
function ch(r) {
    return e => new Promise( (t, n) => {
        e.length === 0 && t([]);
        let s = e.map(o => r.request(o.methodName, o.args));
        r.request(s, (o, i) => {
            if (o) {
                n(o);
                return
            }
            t(i)
        }
        )
    }
    )
}
function p_({authorizedVoter: r, epoch: e}) {
    return {
        epoch: e,
        authorizedVoter: new w(r)
    }
}
function li({authorizedPubkey: r, epochOfLastAuthorizedSwitch: e, targetEpoch: t}) {
    return {
        authorizedPubkey: new w(r),
        epochOfLastAuthorizedSwitch: e,
        targetEpoch: t
    }
}
function y_({buf: r, idx: e, isEmpty: t}) {
    return t ? [] : [...r.slice(e + 1).map(li), ...r.slice(0, e).map(li)]
}
function g_(r, e) {
    let t = e === !1 ? "http" : "https";
    if (!r)
        return hi[t].devnet;
    let n = hi[t][r];
    if (!n)
        throw new Error(`Unknown ${t} cluster: ${r}`);
    return n
}
function R_(r, e, t, n) {
    return m(this, null, function*() {
        let s, o;
        t && Object.prototype.hasOwnProperty.call(t, "lastValidBlockHeight") || t && Object.prototype.hasOwnProperty.call(t, "nonceValue") ? (s = t,
        o = n) : o = t;
        let i = o && {
            skipPreflight: o.skipPreflight,
            preflightCommitment: o.preflightCommitment || o.commitment,
            minContextSlot: o.minContextSlot
        }
          , a = yield r.sendRawTransaction(e, i)
          , c = o && o.commitment
          , _ = (yield s ? r.confirmTransaction(s, c) : r.confirmTransaction(a, c)).value;
        if (_.err)
            throw a != null ? new pt({
                action: i?.skipPreflight ? "send" : "simulate",
                signature: a,
                transactionMessage: `Status: (${JSON.stringify(_)})`
            }) : new Error(`Raw transaction ${a} failed (${JSON.stringify(_)})`);
        return a
    })
}
var B, es, ce, vt, u, _i, pi, pl, Xo, qn, bs, yl, M, Ht, ts, qt, yi, gi, We, Zo, w, ns, Rl, ot, nr, jt, Yt, Xt, st, _t, K, ml, ht, Sl, bl, El, Al, Hn, mi, Ve, Ot, Es, Ye, Il, Y, j, rs, ss, wl, Ol, kl, Si, Me, Nl, Tl, Vn, kt, Ll, vl, Cl, Gn, pt, Bl, T, bi, Ei, is, jn, as, Z, fe, xl, cs, Pl, us, jr, Qo, zl, ei, Gt, Yn, Fl, ds, ti, Jt, $l, Wl, ne, Ai, As, Ii, ql, Hl, jl, Yl, Xl, Jl, Zl, Ql, gt, eh, th, nh, rh, sh, ri, oh, uh, dh, fh, lh, hh, _h, ph, yh, fs, gh, Rh, ls, mh, Sh, Zt, bh, Eh, hs, Ah, Ih, wh, Oh, kh, Nh, Th, Lh, vh, Ch, Bh, xh, Ph, Dh, si, Uh, zh, Mh, Fh, Kh, Oi, Is, ki, Ni, Ti, Li, $h, Wh, vi, Ci, Xn, Bi, sr, ws, Ct, Rt, Vh, Gh, qh, Hh, jh, Yh, Xh, oi, Jr, Wn, Jh, Zh, Qh, e_, t_, n_, r_, s_, o_, i_, _s, Jn, Xe, ps, Qt, ys, Ke, en, ii, ai, ci, ui, Zn, a_, c_, di, Zr, fi, u_, Qr, Qn, xi, Pi, er, yt, gs, ae, d_, Tt, tr, Rs, $e, f_, Lt, Di, l_, ms, h_, __, Ss, hi, m_, b_ = Q( () => {
    B = Ge(pr());
    Ks();
    es = Ge(Ds()),
    ce = Ge(gr());
    qi();
    vt = Ge(Js()),
    u = Ge(wr()),
    _i = Ge(wr());
    _o();
    Ro();
    pi = Ge($o());
    Yo();
    Ki();
    Gi();
    pl = at.utils.randomPrivateKey,
    Xo = () => {
        let r = at.utils.randomPrivateKey()
          , e = qn(r)
          , t = new Uint8Array(64);
        return t.set(r),
        t.set(e, 32),
        {
            publicKey: e,
            secretKey: t
        }
    }
    ,
    qn = at.getPublicKey;
    bs = (r, e) => at.sign(r, e.slice(0, 32)),
    yl = at.verify,
    M = r => B.Buffer.isBuffer(r) ? r : r instanceof Uint8Array ? B.Buffer.from(r.buffer, r.byteOffset, r.byteLength) : B.Buffer.from(r),
    Ht = class {
        constructor(e) {
            Object.assign(this, e)
        }
        encode() {
            return B.Buffer.from((0,
            vt.serialize)(qt, this))
        }
        static decode(e) {
            return (0,
            vt.deserialize)(qt, this, e)
        }
        static decodeUnchecked(e) {
            return (0,
            vt.deserializeUnchecked)(qt, this, e)
        }
    }
    ,
    ts = class extends Ht {
        constructor(e) {
            if (super(e),
            this.enum = "",
            Object.keys(e).length !== 1)
                throw new Error("Enum can only take single value");
            Object.keys(e).map(t => {
                this.enum = t
            }
            )
        }
    }
    ,
    qt = new Map,
    gi = 32,
    We = 32;
    Zo = 1,
    w = class r extends Ht {
        constructor(e) {
            if (super({}),
            this._bn = void 0,
            gl(e))
                this._bn = e._bn;
            else {
                if (typeof e == "string") {
                    let t = ce.default.decode(e);
                    if (t.length != We)
                        throw new Error("Invalid public key input");
                    this._bn = new es.default(t)
                } else
                    this._bn = new es.default(e);
                if (this._bn.byteLength() > We)
                    throw new Error("Invalid public key input")
            }
        }
        static unique() {
            let e = new r(Zo);
            return Zo += 1,
            new r(e.toBuffer())
        }
        equals(e) {
            return this._bn.eq(e._bn)
        }
        toBase58() {
            return ce.default.encode(this.toBytes())
        }
        toJSON() {
            return this.toBase58()
        }
        toBytes() {
            let e = this.toBuffer();
            return new Uint8Array(e.buffer,e.byteOffset,e.byteLength)
        }
        toBuffer() {
            let e = this._bn.toArrayLike(B.Buffer);
            if (e.length === We)
                return e;
            let t = B.Buffer.alloc(32);
            return e.copy(t, 32 - e.length),
            t
        }
        get[Symbol.toStringTag]() {
            return `PublicKey(${this.toString()})`
        }
        toString() {
            return this.toBase58()
        }
        static createWithSeed(e, t, n) {
            return m(this, null, function*() {
                let s = B.Buffer.concat([e.toBuffer(), B.Buffer.from(t), n.toBuffer()])
                  , o = _r(s);
                return new r(o)
            })
        }
        static createProgramAddressSync(e, t) {
            let n = B.Buffer.alloc(0);
            e.forEach(function(o) {
                if (o.length > gi)
                    throw new TypeError("Max seed length exceeded");
                n = B.Buffer.concat([n, M(o)])
            }),
            n = B.Buffer.concat([n, t.toBuffer(), B.Buffer.from("ProgramDerivedAddress")]);
            let s = _r(n);
            if (Jo(s))
                throw new Error("Invalid seeds, address must fall off the curve");
            return new r(s)
        }
        static createProgramAddress(e, t) {
            return m(this, null, function*() {
                return this.createProgramAddressSync(e, t)
            })
        }
        static findProgramAddressSync(e, t) {
            let n = 255, s;
            for (; n != 0; ) {
                try {
                    let o = e.concat(B.Buffer.from([n]));
                    s = this.createProgramAddressSync(o, t)
                } catch (o) {
                    if (o instanceof TypeError)
                        throw o;
                    n--;
                    continue
                }
                return [s, n]
            }
            throw new Error("Unable to find a viable program address nonce")
        }
        static findProgramAddress(e, t) {
            return m(this, null, function*() {
                return this.findProgramAddressSync(e, t)
            })
        }
        static isOnCurve(e) {
            let t = new r(e);
            return Jo(t.toBytes())
        }
    }
    ;
    yi = w;
    w.default = new yi("11111111111111111111111111111111");
    qt.set(w, {
        kind: "struct",
        fields: [["_bn", "u256"]]
    });
    ns = class {
        constructor(e) {
            if (this._publicKey = void 0,
            this._secretKey = void 0,
            e) {
                let t = M(e);
                if (e.length !== 64)
                    throw new Error("bad secret key size");
                this._publicKey = t.slice(32, 64),
                this._secretKey = t.slice(0, 32)
            } else
                this._secretKey = M(pl()),
                this._publicKey = M(qn(this._secretKey))
        }
        get publicKey() {
            return new w(this._publicKey)
        }
        get secretKey() {
            return B.Buffer.concat([this._secretKey, this._publicKey], 64)
        }
    }
    ,
    Rl = new w("BPFLoader1111111111111111111111111111111111"),
    ot = 1232,
    nr = 127,
    jt = 64,
    Yt = class extends Error {
        constructor(e) {
            super(`Signature ${e} has expired: block height exceeded.`),
            this.signature = void 0,
            this.signature = e
        }
    }
    ;
    Object.defineProperty(Yt.prototype, "name", {
        value: "TransactionExpiredBlockheightExceededError"
    });
    Xt = class extends Error {
        constructor(e, t) {
            super(`Transaction was not confirmed in ${t.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`),
            this.signature = void 0,
            this.signature = e
        }
    }
    ;
    Object.defineProperty(Xt.prototype, "name", {
        value: "TransactionExpiredTimeoutError"
    });
    st = class extends Error {
        constructor(e) {
            super(`Signature ${e} has expired: the nonce is no longer valid.`),
            this.signature = void 0,
            this.signature = e
        }
    }
    ;
    Object.defineProperty(st.prototype, "name", {
        value: "TransactionExpiredNonceInvalidError"
    });
    _t = class {
        constructor(e, t) {
            this.staticAccountKeys = void 0,
            this.accountKeysFromLookups = void 0,
            this.staticAccountKeys = e,
            this.accountKeysFromLookups = t
        }
        keySegments() {
            let e = [this.staticAccountKeys];
            return this.accountKeysFromLookups && (e.push(this.accountKeysFromLookups.writable),
            e.push(this.accountKeysFromLookups.readonly)),
            e
        }
        get(e) {
            for (let t of this.keySegments()) {
                if (e < t.length)
                    return t[e];
                e -= t.length
            }
        }
        get length() {
            return this.keySegments().flat().length
        }
        compileInstructions(e) {
            if (this.length > 256)
                throw new Error("Account index overflow encountered during compilation");
            let n = new Map;
            this.keySegments().flat().forEach( (o, i) => {
                n.set(o.toBase58(), i)
            }
            );
            let s = o => {
                let i = n.get(o.toBase58());
                if (i === void 0)
                    throw new Error("Encountered an unknown instruction account key during compilation");
                return i
            }
            ;
            return e.map(o => ({
                programIdIndex: s(o.programId),
                accountKeyIndexes: o.keys.map(i => s(i.pubkey)),
                data: o.data
            }))
        }
    }
    ,
    K = (r="publicKey") => u.blob(32, r),
    ml = (r="signature") => u.blob(64, r),
    ht = (r="string") => {
        let e = u.struct([u.u32("length"), u.u32("lengthPadding"), u.blob(u.offset(u.u32(), -8), "chars")], r)
          , t = e.decode.bind(e)
          , n = e.encode.bind(e)
          , s = e;
        return s.decode = (o, i) => t(o, i).chars.toString(),
        s.encode = (o, i, a) => {
            let c = {
                chars: B.Buffer.from(o, "utf8")
            };
            return n(c, i, a)
        }
        ,
        s.alloc = o => u.u32().span + u.u32().span + B.Buffer.from(o, "utf8").length,
        s
    }
    ,
    Sl = (r="authorized") => u.struct([K("staker"), K("withdrawer")], r),
    bl = (r="lockup") => u.struct([u.ns64("unixTimestamp"), u.ns64("epoch"), K("custodian")], r),
    El = (r="voteInit") => u.struct([K("nodePubkey"), K("authorizedVoter"), K("authorizedWithdrawer"), u.u8("commission")], r),
    Al = (r="voteAuthorizeWithSeedArgs") => u.struct([u.u32("voteAuthorizationType"), K("currentAuthorityDerivedKeyOwnerPubkey"), ht("currentAuthorityDerivedKeySeed"), K("newAuthorized")], r);
    Hn = class r {
        constructor(e, t) {
            this.payer = void 0,
            this.keyMetaMap = void 0,
            this.payer = e,
            this.keyMetaMap = t
        }
        static compile(e, t) {
            let n = new Map
              , s = i => {
                let a = i.toBase58()
                  , c = n.get(a);
                return c === void 0 && (c = {
                    isSigner: !1,
                    isWritable: !1,
                    isInvoked: !1
                },
                n.set(a, c)),
                c
            }
              , o = s(t);
            o.isSigner = !0,
            o.isWritable = !0;
            for (let i of e) {
                s(i.programId).isInvoked = !0;
                for (let a of i.keys) {
                    let c = s(a.pubkey);
                    c.isSigner ||= a.isSigner,
                    c.isWritable ||= a.isWritable
                }
            }
            return new r(t,n)
        }
        getMessageComponents() {
            let e = [...this.keyMetaMap.entries()];
            V(e.length <= 256, "Max static account keys length exceeded");
            let t = e.filter( ([,c]) => c.isSigner && c.isWritable)
              , n = e.filter( ([,c]) => c.isSigner && !c.isWritable)
              , s = e.filter( ([,c]) => !c.isSigner && c.isWritable)
              , o = e.filter( ([,c]) => !c.isSigner && !c.isWritable)
              , i = {
                numRequiredSignatures: t.length + n.length,
                numReadonlySignedAccounts: n.length,
                numReadonlyUnsignedAccounts: o.length
            };
            {
                V(t.length > 0, "Expected at least one writable signer key");
                let[c] = t[0];
                V(c === this.payer.toBase58(), "Expected first writable signer key to be the fee payer")
            }
            let a = [...t.map( ([c]) => new w(c)), ...n.map( ([c]) => new w(c)), ...s.map( ([c]) => new w(c)), ...o.map( ([c]) => new w(c))];
            return [i, a]
        }
        extractTableLookup(e) {
            let[t,n] = this.drainKeysFoundInLookupTable(e.state.addresses, i => !i.isSigner && !i.isInvoked && i.isWritable)
              , [s,o] = this.drainKeysFoundInLookupTable(e.state.addresses, i => !i.isSigner && !i.isInvoked && !i.isWritable);
            if (!(t.length === 0 && s.length === 0))
                return [{
                    accountKey: e.key,
                    writableIndexes: t,
                    readonlyIndexes: s
                }, {
                    writable: n,
                    readonly: o
                }]
        }
        drainKeysFoundInLookupTable(e, t) {
            let n = new Array
              , s = new Array;
            for (let[o,i] of this.keyMetaMap.entries())
                if (t(i)) {
                    let a = new w(o)
                      , c = e.findIndex(d => d.equals(a));
                    c >= 0 && (V(c < 256, "Max lookup table index exceeded"),
                    n.push(c),
                    s.push(a),
                    this.keyMetaMap.delete(o))
                }
            return [n, s]
        }
    }
    ,
    mi = "Reached end of buffer unexpectedly";
    Ve = class r {
        constructor(e) {
            this.header = void 0,
            this.accountKeys = void 0,
            this.recentBlockhash = void 0,
            this.instructions = void 0,
            this.indexToProgramIds = new Map,
            this.header = e.header,
            this.accountKeys = e.accountKeys.map(t => new w(t)),
            this.recentBlockhash = e.recentBlockhash,
            this.instructions = e.instructions,
            this.instructions.forEach(t => this.indexToProgramIds.set(t.programIdIndex, this.accountKeys[t.programIdIndex]))
        }
        get version() {
            return "legacy"
        }
        get staticAccountKeys() {
            return this.accountKeys
        }
        get compiledInstructions() {
            return this.instructions.map(e => ({
                programIdIndex: e.programIdIndex,
                accountKeyIndexes: e.accounts,
                data: ce.default.decode(e.data)
            }))
        }
        get addressTableLookups() {
            return []
        }
        getAccountKeys() {
            return new _t(this.staticAccountKeys)
        }
        static compile(e) {
            let t = Hn.compile(e.instructions, e.payerKey)
              , [n,s] = t.getMessageComponents()
              , i = new _t(s).compileInstructions(e.instructions).map(a => ({
                programIdIndex: a.programIdIndex,
                accounts: a.accountKeyIndexes,
                data: ce.default.encode(a.data)
            }));
            return new r({
                header: n,
                accountKeys: s,
                recentBlockhash: e.recentBlockhash,
                instructions: i
            })
        }
        isAccountSigner(e) {
            return e < this.header.numRequiredSignatures
        }
        isAccountWritable(e) {
            let t = this.header.numRequiredSignatures;
            if (e >= this.header.numRequiredSignatures) {
                let n = e - t
                  , o = this.accountKeys.length - t - this.header.numReadonlyUnsignedAccounts;
                return n < o
            } else {
                let n = t - this.header.numReadonlySignedAccounts;
                return e < n
            }
        }
        isProgramId(e) {
            return this.indexToProgramIds.has(e)
        }
        programIds() {
            return [...this.indexToProgramIds.values()]
        }
        nonProgramIds() {
            return this.accountKeys.filter( (e, t) => !this.isProgramId(t))
        }
        serialize() {
            let e = this.accountKeys.length
              , t = [];
            Te(t, e);
            let n = this.instructions.map(y => {
                let {accounts: A, programIdIndex: h} = y
                  , g = Array.from(ce.default.decode(y.data))
                  , R = [];
                Te(R, A.length);
                let p = [];
                return Te(p, g.length),
                {
                    programIdIndex: h,
                    keyIndicesCount: B.Buffer.from(R),
                    keyIndices: A,
                    dataLength: B.Buffer.from(p),
                    data: g
                }
            }
            )
              , s = [];
            Te(s, n.length);
            let o = B.Buffer.alloc(ot);
            B.Buffer.from(s).copy(o);
            let i = s.length;
            n.forEach(y => {
                let h = u.struct([u.u8("programIdIndex"), u.blob(y.keyIndicesCount.length, "keyIndicesCount"), u.seq(u.u8("keyIndex"), y.keyIndices.length, "keyIndices"), u.blob(y.dataLength.length, "dataLength"), u.seq(u.u8("userdatum"), y.data.length, "data")]).encode(y, o, i);
                i += h
            }
            ),
            o = o.slice(0, i);
            let a = u.struct([u.blob(1, "numRequiredSignatures"), u.blob(1, "numReadonlySignedAccounts"), u.blob(1, "numReadonlyUnsignedAccounts"), u.blob(t.length, "keyCount"), u.seq(K("key"), e, "keys"), K("recentBlockhash")])
              , c = {
                numRequiredSignatures: B.Buffer.from([this.header.numRequiredSignatures]),
                numReadonlySignedAccounts: B.Buffer.from([this.header.numReadonlySignedAccounts]),
                numReadonlyUnsignedAccounts: B.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
                keyCount: B.Buffer.from(t),
                keys: this.accountKeys.map(y => M(y.toBytes())),
                recentBlockhash: ce.default.decode(this.recentBlockhash)
            }
              , d = B.Buffer.alloc(2048)
              , _ = a.encode(c, d);
            return o.copy(d, _),
            d.slice(0, _ + o.length)
        }
        static from(e) {
            let t = [...e]
              , n = Fe(t);
            if (n !== (n & nr))
                throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
            let s = Fe(t)
              , o = Fe(t)
              , i = we(t)
              , a = [];
            for (let A = 0; A < i; A++) {
                let h = Oe(t, 0, We);
                a.push(new w(B.Buffer.from(h)))
            }
            let c = Oe(t, 0, We)
              , d = we(t)
              , _ = [];
            for (let A = 0; A < d; A++) {
                let h = Fe(t)
                  , g = we(t)
                  , R = Oe(t, 0, g)
                  , p = we(t)
                  , S = Oe(t, 0, p)
                  , N = ce.default.encode(B.Buffer.from(S));
                _.push({
                    programIdIndex: h,
                    accounts: R,
                    data: N
                })
            }
            let y = {
                header: {
                    numRequiredSignatures: n,
                    numReadonlySignedAccounts: s,
                    numReadonlyUnsignedAccounts: o
                },
                recentBlockhash: ce.default.encode(B.Buffer.from(c)),
                accountKeys: a,
                instructions: _
            };
            return new r(y)
        }
    }
    ,
    Ot = class r {
        constructor(e) {
            this.header = void 0,
            this.staticAccountKeys = void 0,
            this.recentBlockhash = void 0,
            this.compiledInstructions = void 0,
            this.addressTableLookups = void 0,
            this.header = e.header,
            this.staticAccountKeys = e.staticAccountKeys,
            this.recentBlockhash = e.recentBlockhash,
            this.compiledInstructions = e.compiledInstructions,
            this.addressTableLookups = e.addressTableLookups
        }
        get version() {
            return 0
        }
        get numAccountKeysFromLookups() {
            let e = 0;
            for (let t of this.addressTableLookups)
                e += t.readonlyIndexes.length + t.writableIndexes.length;
            return e
        }
        getAccountKeys(e) {
            let t;
            if (e && "accountKeysFromLookups"in e && e.accountKeysFromLookups) {
                if (this.numAccountKeysFromLookups != e.accountKeysFromLookups.writable.length + e.accountKeysFromLookups.readonly.length)
                    throw new Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
                t = e.accountKeysFromLookups
            } else if (e && "addressLookupTableAccounts"in e && e.addressLookupTableAccounts)
                t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
            else if (this.addressTableLookups.length > 0)
                throw new Error("Failed to get account keys because address table lookups were not resolved");
            return new _t(this.staticAccountKeys,t)
        }
        isAccountSigner(e) {
            return e < this.header.numRequiredSignatures
        }
        isAccountWritable(e) {
            let t = this.header.numRequiredSignatures
              , n = this.staticAccountKeys.length;
            if (e >= n) {
                let s = e - n
                  , o = this.addressTableLookups.reduce( (i, a) => i + a.writableIndexes.length, 0);
                return s < o
            } else if (e >= this.header.numRequiredSignatures) {
                let s = e - t
                  , i = n - t - this.header.numReadonlyUnsignedAccounts;
                return s < i
            } else {
                let s = t - this.header.numReadonlySignedAccounts;
                return e < s
            }
        }
        resolveAddressTableLookups(e) {
            let t = {
                writable: [],
                readonly: []
            };
            for (let n of this.addressTableLookups) {
                let s = e.find(o => o.key.equals(n.accountKey));
                if (!s)
                    throw new Error(`Failed to find address lookup table account for table key ${n.accountKey.toBase58()}`);
                for (let o of n.writableIndexes)
                    if (o < s.state.addresses.length)
                        t.writable.push(s.state.addresses[o]);
                    else
                        throw new Error(`Failed to find address for index ${o} in address lookup table ${n.accountKey.toBase58()}`);
                for (let o of n.readonlyIndexes)
                    if (o < s.state.addresses.length)
                        t.readonly.push(s.state.addresses[o]);
                    else
                        throw new Error(`Failed to find address for index ${o} in address lookup table ${n.accountKey.toBase58()}`)
            }
            return t
        }
        static compile(e) {
            let t = Hn.compile(e.instructions, e.payerKey)
              , n = new Array
              , s = {
                writable: new Array,
                readonly: new Array
            }
              , o = e.addressLookupTableAccounts || [];
            for (let _ of o) {
                let y = t.extractTableLookup(_);
                if (y !== void 0) {
                    let[A,{writable: h, readonly: g}] = y;
                    n.push(A),
                    s.writable.push(...h),
                    s.readonly.push(...g)
                }
            }
            let[i,a] = t.getMessageComponents()
              , d = new _t(a,s).compileInstructions(e.instructions);
            return new r({
                header: i,
                staticAccountKeys: a,
                recentBlockhash: e.recentBlockhash,
                compiledInstructions: d,
                addressTableLookups: n
            })
        }
        serialize() {
            let e = Array();
            Te(e, this.staticAccountKeys.length);
            let t = this.serializeInstructions()
              , n = Array();
            Te(n, this.compiledInstructions.length);
            let s = this.serializeAddressTableLookups()
              , o = Array();
            Te(o, this.addressTableLookups.length);
            let i = u.struct([u.u8("prefix"), u.struct([u.u8("numRequiredSignatures"), u.u8("numReadonlySignedAccounts"), u.u8("numReadonlyUnsignedAccounts")], "header"), u.blob(e.length, "staticAccountKeysLength"), u.seq(K(), this.staticAccountKeys.length, "staticAccountKeys"), K("recentBlockhash"), u.blob(n.length, "instructionsLength"), u.blob(t.length, "serializedInstructions"), u.blob(o.length, "addressTableLookupsLength"), u.blob(s.length, "serializedAddressTableLookups")])
              , a = new Uint8Array(ot)
              , d = i.encode({
                prefix: 128,
                header: this.header,
                staticAccountKeysLength: new Uint8Array(e),
                staticAccountKeys: this.staticAccountKeys.map(_ => _.toBytes()),
                recentBlockhash: ce.default.decode(this.recentBlockhash),
                instructionsLength: new Uint8Array(n),
                serializedInstructions: t,
                addressTableLookupsLength: new Uint8Array(o),
                serializedAddressTableLookups: s
            }, a);
            return a.slice(0, d)
        }
        serializeInstructions() {
            let e = 0
              , t = new Uint8Array(ot);
            for (let n of this.compiledInstructions) {
                let s = Array();
                Te(s, n.accountKeyIndexes.length);
                let o = Array();
                Te(o, n.data.length);
                let i = u.struct([u.u8("programIdIndex"), u.blob(s.length, "encodedAccountKeyIndexesLength"), u.seq(u.u8(), n.accountKeyIndexes.length, "accountKeyIndexes"), u.blob(o.length, "encodedDataLength"), u.blob(n.data.length, "data")]);
                e += i.encode({
                    programIdIndex: n.programIdIndex,
                    encodedAccountKeyIndexesLength: new Uint8Array(s),
                    accountKeyIndexes: n.accountKeyIndexes,
                    encodedDataLength: new Uint8Array(o),
                    data: n.data
                }, t, e)
            }
            return t.slice(0, e)
        }
        serializeAddressTableLookups() {
            let e = 0
              , t = new Uint8Array(ot);
            for (let n of this.addressTableLookups) {
                let s = Array();
                Te(s, n.writableIndexes.length);
                let o = Array();
                Te(o, n.readonlyIndexes.length);
                let i = u.struct([K("accountKey"), u.blob(s.length, "encodedWritableIndexesLength"), u.seq(u.u8(), n.writableIndexes.length, "writableIndexes"), u.blob(o.length, "encodedReadonlyIndexesLength"), u.seq(u.u8(), n.readonlyIndexes.length, "readonlyIndexes")]);
                e += i.encode({
                    accountKey: n.accountKey.toBytes(),
                    encodedWritableIndexesLength: new Uint8Array(s),
                    writableIndexes: n.writableIndexes,
                    encodedReadonlyIndexesLength: new Uint8Array(o),
                    readonlyIndexes: n.readonlyIndexes
                }, t, e)
            }
            return t.slice(0, e)
        }
        static deserialize(e) {
            let t = [...e]
              , n = Fe(t)
              , s = n & nr;
            V(n !== s, "Expected versioned message but received legacy message");
            let o = s;
            V(o === 0, `Expected versioned message with version 0 but found version ${o}`);
            let i = {
                numRequiredSignatures: Fe(t),
                numReadonlySignedAccounts: Fe(t),
                numReadonlyUnsignedAccounts: Fe(t)
            }
              , a = []
              , c = we(t);
            for (let g = 0; g < c; g++)
                a.push(new w(Oe(t, 0, We)));
            let d = ce.default.encode(Oe(t, 0, We))
              , _ = we(t)
              , y = [];
            for (let g = 0; g < _; g++) {
                let R = Fe(t)
                  , p = we(t)
                  , S = Oe(t, 0, p)
                  , N = we(t)
                  , x = new Uint8Array(Oe(t, 0, N));
                y.push({
                    programIdIndex: R,
                    accountKeyIndexes: S,
                    data: x
                })
            }
            let A = we(t)
              , h = [];
            for (let g = 0; g < A; g++) {
                let R = new w(Oe(t, 0, We))
                  , p = we(t)
                  , S = Oe(t, 0, p)
                  , N = we(t)
                  , x = Oe(t, 0, N);
                h.push({
                    accountKey: R,
                    writableIndexes: S,
                    readonlyIndexes: x
                })
            }
            return new r({
                header: i,
                staticAccountKeys: a,
                recentBlockhash: d,
                compiledInstructions: y,
                addressTableLookups: h
            })
        }
    }
    ,
    Es = {
        deserializeMessageVersion(r) {
            let e = r[0]
              , t = e & nr;
            return t === e ? "legacy" : t
        },
        deserialize: r => {
            let e = Es.deserializeMessageVersion(r);
            if (e === "legacy")
                return Ve.from(r);
            if (e === 0)
                return Ot.deserialize(r);
            throw new Error(`Transaction message version ${e} deserialization is not supported`)
        }
    },
    Ye = function(r) {
        return r[r.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED",
        r[r.PROCESSED = 1] = "PROCESSED",
        r[r.TIMED_OUT = 2] = "TIMED_OUT",
        r[r.NONCE_INVALID = 3] = "NONCE_INVALID",
        r
    }({}),
    Il = B.Buffer.alloc(jt).fill(0),
    Y = class {
        constructor(e) {
            this.keys = void 0,
            this.programId = void 0,
            this.data = B.Buffer.alloc(0),
            this.programId = e.programId,
            this.keys = e.keys,
            e.data && (this.data = e.data)
        }
        toJSON() {
            return {
                keys: this.keys.map( ({pubkey: e, isSigner: t, isWritable: n}) => ({
                    pubkey: e.toJSON(),
                    isSigner: t,
                    isWritable: n
                })),
                programId: this.programId.toJSON(),
                data: [...this.data]
            }
        }
    }
    ,
    j = class r {
        get signature() {
            return this.signatures.length > 0 ? this.signatures[0].signature : null
        }
        constructor(e) {
            if (this.signatures = [],
            this.feePayer = void 0,
            this.instructions = [],
            this.recentBlockhash = void 0,
            this.lastValidBlockHeight = void 0,
            this.nonceInfo = void 0,
            this.minNonceContextSlot = void 0,
            this._message = void 0,
            this._json = void 0,
            !!e)
                if (e.feePayer && (this.feePayer = e.feePayer),
                e.signatures && (this.signatures = e.signatures),
                Object.prototype.hasOwnProperty.call(e, "nonceInfo")) {
                    let {minContextSlot: t, nonceInfo: n} = e;
                    this.minNonceContextSlot = t,
                    this.nonceInfo = n
                } else if (Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")) {
                    let {blockhash: t, lastValidBlockHeight: n} = e;
                    this.recentBlockhash = t,
                    this.lastValidBlockHeight = n
                } else {
                    let {recentBlockhash: t, nonceInfo: n} = e;
                    n && (this.nonceInfo = n),
                    this.recentBlockhash = t
                }
        }
        toJSON() {
            return {
                recentBlockhash: this.recentBlockhash || null,
                feePayer: this.feePayer ? this.feePayer.toJSON() : null,
                nonceInfo: this.nonceInfo ? {
                    nonce: this.nonceInfo.nonce,
                    nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
                } : null,
                instructions: this.instructions.map(e => e.toJSON()),
                signers: this.signatures.map( ({publicKey: e}) => e.toJSON())
            }
        }
        add(...e) {
            if (e.length === 0)
                throw new Error("No instructions");
            return e.forEach(t => {
                "instructions"in t ? this.instructions = this.instructions.concat(t.instructions) : "data"in t && "programId"in t && "keys"in t ? this.instructions.push(t) : this.instructions.push(new Y(t))
            }
            ),
            this
        }
        compileMessage() {
            if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json))
                return this._message;
            let e, t;
            if (this.nonceInfo ? (e = this.nonceInfo.nonce,
            this.instructions[0] != this.nonceInfo.nonceInstruction ? t = [this.nonceInfo.nonceInstruction, ...this.instructions] : t = this.instructions) : (e = this.recentBlockhash,
            t = this.instructions),
            !e)
                throw new Error("Transaction recentBlockhash required");
            t.length < 1 && console.warn("No instructions provided");
            let n;
            if (this.feePayer)
                n = this.feePayer;
            else if (this.signatures.length > 0 && this.signatures[0].publicKey)
                n = this.signatures[0].publicKey;
            else
                throw new Error("Transaction fee payer required");
            for (let R = 0; R < t.length; R++)
                if (t[R].programId === void 0)
                    throw new Error(`Transaction instruction index ${R} has undefined program id`);
            let s = []
              , o = [];
            t.forEach(R => {
                R.keys.forEach(S => {
                    o.push(C({}, S))
                }
                );
                let p = R.programId.toString();
                s.includes(p) || s.push(p)
            }
            ),
            s.forEach(R => {
                o.push({
                    pubkey: new w(R),
                    isSigner: !1,
                    isWritable: !1
                })
            }
            );
            let i = [];
            o.forEach(R => {
                let p = R.pubkey.toString()
                  , S = i.findIndex(N => N.pubkey.toString() === p);
                S > -1 ? (i[S].isWritable = i[S].isWritable || R.isWritable,
                i[S].isSigner = i[S].isSigner || R.isSigner) : i.push(R)
            }
            ),
            i.sort(function(R, p) {
                if (R.isSigner !== p.isSigner)
                    return R.isSigner ? -1 : 1;
                if (R.isWritable !== p.isWritable)
                    return R.isWritable ? -1 : 1;
                let S = {
                    localeMatcher: "best fit",
                    usage: "sort",
                    sensitivity: "variant",
                    ignorePunctuation: !1,
                    numeric: !1,
                    caseFirst: "lower"
                };
                return R.pubkey.toBase58().localeCompare(p.pubkey.toBase58(), "en", S)
            });
            let a = i.findIndex(R => R.pubkey.equals(n));
            if (a > -1) {
                let[R] = i.splice(a, 1);
                R.isSigner = !0,
                R.isWritable = !0,
                i.unshift(R)
            } else
                i.unshift({
                    pubkey: n,
                    isSigner: !0,
                    isWritable: !0
                });
            for (let R of this.signatures) {
                let p = i.findIndex(S => S.pubkey.equals(R.publicKey));
                if (p > -1)
                    i[p].isSigner || (i[p].isSigner = !0,
                    console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
                else
                    throw new Error(`unknown signer: ${R.publicKey.toString()}`)
            }
            let c = 0
              , d = 0
              , _ = 0
              , y = []
              , A = [];
            i.forEach( ({pubkey: R, isSigner: p, isWritable: S}) => {
                p ? (y.push(R.toString()),
                c += 1,
                S || (d += 1)) : (A.push(R.toString()),
                S || (_ += 1))
            }
            );
            let h = y.concat(A)
              , g = t.map(R => {
                let {data: p, programId: S} = R;
                return {
                    programIdIndex: h.indexOf(S.toString()),
                    accounts: R.keys.map(N => h.indexOf(N.pubkey.toString())),
                    data: ce.default.encode(p)
                }
            }
            );
            return g.forEach(R => {
                V(R.programIdIndex >= 0),
                R.accounts.forEach(p => V(p >= 0))
            }
            ),
            new Ve({
                header: {
                    numRequiredSignatures: c,
                    numReadonlySignedAccounts: d,
                    numReadonlyUnsignedAccounts: _
                },
                accountKeys: h,
                recentBlockhash: e,
                instructions: g
            })
        }
        _compile() {
            let e = this.compileMessage()
              , t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
            return this.signatures.length === t.length && this.signatures.every( (s, o) => t[o].equals(s.publicKey)) || (this.signatures = t.map(n => ({
                signature: null,
                publicKey: n
            }))),
            e
        }
        serializeMessage() {
            return this._compile().serialize()
        }
        getEstimatedFee(e) {
            return m(this, null, function*() {
                return (yield e.getFeeForMessage(this.compileMessage())).value
            })
        }
        setSigners(...e) {
            if (e.length === 0)
                throw new Error("No signers");
            let t = new Set;
            this.signatures = e.filter(n => {
                let s = n.toString();
                return t.has(s) ? !1 : (t.add(s),
                !0)
            }
            ).map(n => ({
                signature: null,
                publicKey: n
            }))
        }
        sign(...e) {
            if (e.length === 0)
                throw new Error("No signers");
            let t = new Set
              , n = [];
            for (let o of e) {
                let i = o.publicKey.toString();
                t.has(i) || (t.add(i),
                n.push(o))
            }
            this.signatures = n.map(o => ({
                signature: null,
                publicKey: o.publicKey
            }));
            let s = this._compile();
            this._partialSign(s, ...n)
        }
        partialSign(...e) {
            if (e.length === 0)
                throw new Error("No signers");
            let t = new Set
              , n = [];
            for (let o of e) {
                let i = o.publicKey.toString();
                t.has(i) || (t.add(i),
                n.push(o))
            }
            let s = this._compile();
            this._partialSign(s, ...n)
        }
        _partialSign(e, ...t) {
            let n = e.serialize();
            t.forEach(s => {
                let o = bs(n, s.secretKey);
                this._addSignature(s.publicKey, M(o))
            }
            )
        }
        addSignature(e, t) {
            this._compile(),
            this._addSignature(e, t)
        }
        _addSignature(e, t) {
            V(t.length === 64);
            let n = this.signatures.findIndex(s => e.equals(s.publicKey));
            if (n < 0)
                throw new Error(`unknown signer: ${e.toString()}`);
            this.signatures[n].signature = B.Buffer.from(t)
        }
        verifySignatures(e=!0) {
            return !this._getMessageSignednessErrors(this.serializeMessage(), e)
        }
        _getMessageSignednessErrors(e, t) {
            let n = {};
            for (let {signature: s, publicKey: o} of this.signatures)
                s === null ? t && (n.missing ||= []).push(o) : yl(s, e, o.toBytes()) || (n.invalid ||= []).push(o);
            return n.invalid || n.missing ? n : void 0
        }
        serialize(e) {
            let {requireAllSignatures: t, verifySignatures: n} = Object.assign({
                requireAllSignatures: !0,
                verifySignatures: !0
            }, e)
              , s = this.serializeMessage();
            if (n) {
                let o = this._getMessageSignednessErrors(s, t);
                if (o) {
                    let i = "Signature verification failed.";
                    throw o.invalid && (i += `
Invalid signature for public key${o.invalid.length === 1 ? "" : "(s)"} [\`${o.invalid.map(a => a.toBase58()).join("`, `")}\`].`),
                    o.missing && (i += `
Missing signature for public key${o.missing.length === 1 ? "" : "(s)"} [\`${o.missing.map(a => a.toBase58()).join("`, `")}\`].`),
                    new Error(i)
                }
            }
            return this._serialize(s)
        }
        _serialize(e) {
            let {signatures: t} = this
              , n = [];
            Te(n, t.length);
            let s = n.length + t.length * 64 + e.length
              , o = B.Buffer.alloc(s);
            return V(t.length < 256),
            B.Buffer.from(n).copy(o, 0),
            t.forEach( ({signature: i}, a) => {
                i !== null && (V(i.length === 64, "signature has invalid length"),
                B.Buffer.from(i).copy(o, n.length + a * 64))
            }
            ),
            e.copy(o, n.length + t.length * 64),
            V(o.length <= ot, `Transaction too large: ${o.length} > ${ot}`),
            o
        }
        get keys() {
            return V(this.instructions.length === 1),
            this.instructions[0].keys.map(e => e.pubkey)
        }
        get programId() {
            return V(this.instructions.length === 1),
            this.instructions[0].programId
        }
        get data() {
            return V(this.instructions.length === 1),
            this.instructions[0].data
        }
        static from(e) {
            let t = [...e]
              , n = we(t)
              , s = [];
            for (let o = 0; o < n; o++) {
                let i = Oe(t, 0, jt);
                s.push(ce.default.encode(B.Buffer.from(i)))
            }
            return r.populate(Ve.from(t), s)
        }
        static populate(e, t=[]) {
            let n = new r;
            return n.recentBlockhash = e.recentBlockhash,
            e.header.numRequiredSignatures > 0 && (n.feePayer = e.accountKeys[0]),
            t.forEach( (s, o) => {
                let i = {
                    signature: s == ce.default.encode(Il) ? null : ce.default.decode(s),
                    publicKey: e.accountKeys[o]
                };
                n.signatures.push(i)
            }
            ),
            e.instructions.forEach(s => {
                let o = s.accounts.map(i => {
                    let a = e.accountKeys[i];
                    return {
                        pubkey: a,
                        isSigner: n.signatures.some(c => c.publicKey.toString() === a.toString()) || e.isAccountSigner(i),
                        isWritable: e.isAccountWritable(i)
                    }
                }
                );
                n.instructions.push(new Y({
                    keys: o,
                    programId: e.accountKeys[s.programIdIndex],
                    data: ce.default.decode(s.data)
                }))
            }
            ),
            n._message = e,
            n._json = n.toJSON(),
            n
        }
    }
    ,
    rs = class r {
        constructor(e) {
            this.payerKey = void 0,
            this.instructions = void 0,
            this.recentBlockhash = void 0,
            this.payerKey = e.payerKey,
            this.instructions = e.instructions,
            this.recentBlockhash = e.recentBlockhash
        }
        static decompile(e, t) {
            let {header: n, compiledInstructions: s, recentBlockhash: o} = e
              , {numRequiredSignatures: i, numReadonlySignedAccounts: a, numReadonlyUnsignedAccounts: c} = n
              , d = i - a;
            V(d > 0, "Message header is invalid");
            let _ = e.staticAccountKeys.length - i - c;
            V(_ >= 0, "Message header is invalid");
            let y = e.getAccountKeys(t)
              , A = y.get(0);
            if (A === void 0)
                throw new Error("Failed to decompile message because no account keys were found");
            let h = [];
            for (let g of s) {
                let R = [];
                for (let S of g.accountKeyIndexes) {
                    let N = y.get(S);
                    if (N === void 0)
                        throw new Error(`Failed to find key for account key index ${S}`);
                    let x = S < i, P;
                    x ? P = S < d : S < y.staticAccountKeys.length ? P = S - i < _ : P = S - y.staticAccountKeys.length < y.accountKeysFromLookups.writable.length,
                    R.push({
                        pubkey: N,
                        isSigner: S < n.numRequiredSignatures,
                        isWritable: P
                    })
                }
                let p = y.get(g.programIdIndex);
                if (p === void 0)
                    throw new Error(`Failed to find program id for program id index ${g.programIdIndex}`);
                h.push(new Y({
                    programId: p,
                    data: M(g.data),
                    keys: R
                }))
            }
            return new r({
                payerKey: A,
                instructions: h,
                recentBlockhash: o
            })
        }
        compileToLegacyMessage() {
            return Ve.compile({
                payerKey: this.payerKey,
                recentBlockhash: this.recentBlockhash,
                instructions: this.instructions
            })
        }
        compileToV0Message(e) {
            return Ot.compile({
                payerKey: this.payerKey,
                recentBlockhash: this.recentBlockhash,
                instructions: this.instructions,
                addressLookupTableAccounts: e
            })
        }
    }
    ,
    ss = class r {
        get version() {
            return this.message.version
        }
        constructor(e, t) {
            if (this.signatures = void 0,
            this.message = void 0,
            t !== void 0)
                V(t.length === e.header.numRequiredSignatures, "Expected signatures length to be equal to the number of required signatures"),
                this.signatures = t;
            else {
                let n = [];
                for (let s = 0; s < e.header.numRequiredSignatures; s++)
                    n.push(new Uint8Array(jt));
                this.signatures = n
            }
            this.message = e
        }
        serialize() {
            let e = this.message.serialize()
              , t = Array();
            Te(t, this.signatures.length);
            let n = u.struct([u.blob(t.length, "encodedSignaturesLength"), u.seq(ml(), this.signatures.length, "signatures"), u.blob(e.length, "serializedMessage")])
              , s = new Uint8Array(2048)
              , o = n.encode({
                encodedSignaturesLength: new Uint8Array(t),
                signatures: this.signatures,
                serializedMessage: e
            }, s);
            return s.slice(0, o)
        }
        static deserialize(e) {
            let t = [...e]
              , n = []
              , s = we(t);
            for (let i = 0; i < s; i++)
                n.push(new Uint8Array(Oe(t, 0, jt)));
            let o = Es.deserialize(new Uint8Array(t));
            return new r(o,n)
        }
        sign(e) {
            let t = this.message.serialize()
              , n = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
            for (let s of e) {
                let o = n.findIndex(i => i.equals(s.publicKey));
                V(o >= 0, `Cannot sign with non signer key ${s.publicKey.toBase58()}`),
                this.signatures[o] = bs(t, s.secretKey)
            }
        }
        addSignature(e, t) {
            V(t.byteLength === 64, "Signature must be 64 bytes long");
            let s = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures).findIndex(o => o.equals(e));
            V(s >= 0, `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`),
            this.signatures[s] = t
        }
    }
    ,
    wl = 160,
    Ol = 64,
    kl = wl / Ol,
    Si = 1e3 / kl,
    Me = new w("SysvarC1ock11111111111111111111111111111111"),
    Nl = new w("SysvarEpochSchedu1e111111111111111111111111"),
    Tl = new w("Sysvar1nstructions1111111111111111111111111"),
    Vn = new w("SysvarRecentB1ockHashes11111111111111111111"),
    kt = new w("SysvarRent111111111111111111111111111111111"),
    Ll = new w("SysvarRewards111111111111111111111111111111"),
    vl = new w("SysvarS1otHashes111111111111111111111111111"),
    Cl = new w("SysvarS1otHistory11111111111111111111111111"),
    Gn = new w("SysvarStakeHistory1111111111111111111111111"),
    pt = class extends Error {
        constructor({action: e, signature: t, transactionMessage: n, logs: s}) {
            let o = s ? `Logs: 
${JSON.stringify(s.slice(-10), null, 2)}. ` : "", i = "\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.", a;
            switch (e) {
            case "send":
                a = `Transaction ${t} resulted in an error. 
${n}. ` + o + i;
                break;
            case "simulate":
                a = `Simulation failed. 
Message: ${n}. 
` + o + i;
                break;
            default:
                a = `Unknown action '${(c => c)(e)}'`
            }
            super(a),
            this.signature = void 0,
            this.transactionMessage = void 0,
            this.transactionLogs = void 0,
            this.signature = t,
            this.transactionMessage = n,
            this.transactionLogs = s || void 0
        }
        get transactionError() {
            return {
                message: this.transactionMessage,
                logs: Array.isArray(this.transactionLogs) ? this.transactionLogs : void 0
            }
        }
        get logs() {
            let e = this.transactionLogs;
            if (!(e != null && typeof e == "object" && "then"in e))
                return e
        }
        getLogs(e) {
            return m(this, null, function*() {
                return Array.isArray(this.transactionLogs) || (this.transactionLogs = new Promise( (t, n) => {
                    e.getTransaction(this.signature).then(s => {
                        if (s && s.meta && s.meta.logMessages) {
                            let o = s.meta.logMessages;
                            this.transactionLogs = o,
                            t(o)
                        } else
                            n(new Error("Log messages not found"))
                    }
                    ).catch(n)
                }
                )),
                yield this.transactionLogs
            })
        }
    }
    ,
    Bl = {
        JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP: -32001,
        JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE: -32002,
        JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE: -32003,
        JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE: -32004,
        JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY: -32005,
        JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE: -32006,
        JSON_RPC_SERVER_ERROR_SLOT_SKIPPED: -32007,
        JSON_RPC_SERVER_ERROR_NO_SNAPSHOT: -32008,
        JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED: -32009,
        JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX: -32010,
        JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE: -32011,
        JSON_RPC_SCAN_ERROR: -32012,
        JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH: -32013,
        JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET: -32014,
        JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION: -32015,
        JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED: -32016
    },
    T = class extends Error {
        constructor({code: e, message: t, data: n}, s) {
            super(s != null ? `${s}: ${t}` : t),
            this.code = void 0,
            this.data = void 0,
            this.code = e,
            this.data = n,
            this.name = "SolanaJSONRPCError"
        }
    }
    ;
    bi = u.nu64("lamportsPerSignature"),
    Ei = u.struct([u.u32("version"), u.u32("state"), K("authorizedPubkey"), K("nonce"), u.struct([bi], "feeCalculator")]),
    is = Ei.span,
    jn = class r {
        constructor(e) {
            this.authorizedPubkey = void 0,
            this.nonce = void 0,
            this.feeCalculator = void 0,
            this.authorizedPubkey = e.authorizedPubkey,
            this.nonce = e.nonce,
            this.feeCalculator = e.feeCalculator
        }
        static fromAccountData(e) {
            let t = Ei.decode(M(e), 0);
            return new r({
                authorizedPubkey: new w(t.authorizedPubkey),
                nonce: new w(t.nonce).toString(),
                feeCalculator: t.feeCalculator
            })
        }
    }
    ;
    as = class {
        constructor() {}
        static decodeInstructionType(e) {
            this.checkProgramId(e.programId);
            let n = u.u32("instruction").decode(e.data), s;
            for (let[o,i] of Object.entries(Z))
                if (i.index == n) {
                    s = o;
                    break
                }
            if (!s)
                throw new Error("Instruction type incorrect; not a SystemInstruction");
            return s
        }
        static decodeCreateAccount(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 2);
            let {lamports: t, space: n, programId: s} = H(Z.Create, e.data);
            return {
                fromPubkey: e.keys[0].pubkey,
                newAccountPubkey: e.keys[1].pubkey,
                lamports: t,
                space: n,
                programId: new w(s)
            }
        }
        static decodeTransfer(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 2);
            let {lamports: t} = H(Z.Transfer, e.data);
            return {
                fromPubkey: e.keys[0].pubkey,
                toPubkey: e.keys[1].pubkey,
                lamports: t
            }
        }
        static decodeTransferWithSeed(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3);
            let {lamports: t, seed: n, programId: s} = H(Z.TransferWithSeed, e.data);
            return {
                fromPubkey: e.keys[0].pubkey,
                basePubkey: e.keys[1].pubkey,
                toPubkey: e.keys[2].pubkey,
                lamports: t,
                seed: n,
                programId: new w(s)
            }
        }
        static decodeAllocate(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 1);
            let {space: t} = H(Z.Allocate, e.data);
            return {
                accountPubkey: e.keys[0].pubkey,
                space: t
            }
        }
        static decodeAllocateWithSeed(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 1);
            let {base: t, seed: n, space: s, programId: o} = H(Z.AllocateWithSeed, e.data);
            return {
                accountPubkey: e.keys[0].pubkey,
                basePubkey: new w(t),
                seed: n,
                space: s,
                programId: new w(o)
            }
        }
        static decodeAssign(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 1);
            let {programId: t} = H(Z.Assign, e.data);
            return {
                accountPubkey: e.keys[0].pubkey,
                programId: new w(t)
            }
        }
        static decodeAssignWithSeed(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 1);
            let {base: t, seed: n, programId: s} = H(Z.AssignWithSeed, e.data);
            return {
                accountPubkey: e.keys[0].pubkey,
                basePubkey: new w(t),
                seed: n,
                programId: new w(s)
            }
        }
        static decodeCreateWithSeed(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 2);
            let {base: t, seed: n, lamports: s, space: o, programId: i} = H(Z.CreateWithSeed, e.data);
            return {
                fromPubkey: e.keys[0].pubkey,
                newAccountPubkey: e.keys[1].pubkey,
                basePubkey: new w(t),
                seed: n,
                lamports: s,
                space: o,
                programId: new w(i)
            }
        }
        static decodeNonceInitialize(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3);
            let {authorized: t} = H(Z.InitializeNonceAccount, e.data);
            return {
                noncePubkey: e.keys[0].pubkey,
                authorizedPubkey: new w(t)
            }
        }
        static decodeNonceAdvance(e) {
            return this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3),
            H(Z.AdvanceNonceAccount, e.data),
            {
                noncePubkey: e.keys[0].pubkey,
                authorizedPubkey: e.keys[2].pubkey
            }
        }
        static decodeNonceWithdraw(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 5);
            let {lamports: t} = H(Z.WithdrawNonceAccount, e.data);
            return {
                noncePubkey: e.keys[0].pubkey,
                toPubkey: e.keys[1].pubkey,
                authorizedPubkey: e.keys[4].pubkey,
                lamports: t
            }
        }
        static decodeNonceAuthorize(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 2);
            let {authorized: t} = H(Z.AuthorizeNonceAccount, e.data);
            return {
                noncePubkey: e.keys[0].pubkey,
                authorizedPubkey: e.keys[1].pubkey,
                newAuthorizedPubkey: new w(t)
            }
        }
        static checkProgramId(e) {
            if (!e.equals(fe.programId))
                throw new Error("invalid instruction; programId is not SystemProgram")
        }
        static checkKeyLength(e, t) {
            if (e.length < t)
                throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
        }
    }
    ,
    Z = Object.freeze({
        Create: {
            index: 0,
            layout: u.struct([u.u32("instruction"), u.ns64("lamports"), u.ns64("space"), K("programId")])
        },
        Assign: {
            index: 1,
            layout: u.struct([u.u32("instruction"), K("programId")])
        },
        Transfer: {
            index: 2,
            layout: u.struct([u.u32("instruction"), Nt("lamports")])
        },
        CreateWithSeed: {
            index: 3,
            layout: u.struct([u.u32("instruction"), K("base"), ht("seed"), u.ns64("lamports"), u.ns64("space"), K("programId")])
        },
        AdvanceNonceAccount: {
            index: 4,
            layout: u.struct([u.u32("instruction")])
        },
        WithdrawNonceAccount: {
            index: 5,
            layout: u.struct([u.u32("instruction"), u.ns64("lamports")])
        },
        InitializeNonceAccount: {
            index: 6,
            layout: u.struct([u.u32("instruction"), K("authorized")])
        },
        AuthorizeNonceAccount: {
            index: 7,
            layout: u.struct([u.u32("instruction"), K("authorized")])
        },
        Allocate: {
            index: 8,
            layout: u.struct([u.u32("instruction"), u.ns64("space")])
        },
        AllocateWithSeed: {
            index: 9,
            layout: u.struct([u.u32("instruction"), K("base"), ht("seed"), u.ns64("space"), K("programId")])
        },
        AssignWithSeed: {
            index: 10,
            layout: u.struct([u.u32("instruction"), K("base"), ht("seed"), K("programId")])
        },
        TransferWithSeed: {
            index: 11,
            layout: u.struct([u.u32("instruction"), Nt("lamports"), ht("seed"), K("programId")])
        },
        UpgradeNonceAccount: {
            index: 12,
            layout: u.struct([u.u32("instruction")])
        }
    }),
    fe = class r {
        constructor() {}
        static createAccount(e) {
            let t = Z.Create
              , n = $(t, {
                lamports: e.lamports,
                space: e.space,
                programId: M(e.programId.toBuffer())
            });
            return new Y({
                keys: [{
                    pubkey: e.fromPubkey,
                    isSigner: !0,
                    isWritable: !0
                }, {
                    pubkey: e.newAccountPubkey,
                    isSigner: !0,
                    isWritable: !0
                }],
                programId: this.programId,
                data: n
            })
        }
        static transfer(e) {
            let t, n;
            if ("basePubkey"in e) {
                let s = Z.TransferWithSeed;
                t = $(s, {
                    lamports: BigInt(e.lamports),
                    seed: e.seed,
                    programId: M(e.programId.toBuffer())
                }),
                n = [{
                    pubkey: e.fromPubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: e.basePubkey,
                    isSigner: !0,
                    isWritable: !1
                }, {
                    pubkey: e.toPubkey,
                    isSigner: !1,
                    isWritable: !0
                }]
            } else {
                let s = Z.Transfer;
                t = $(s, {
                    lamports: BigInt(e.lamports)
                }),
                n = [{
                    pubkey: e.fromPubkey,
                    isSigner: !0,
                    isWritable: !0
                }, {
                    pubkey: e.toPubkey,
                    isSigner: !1,
                    isWritable: !0
                }]
            }
            return new Y({
                keys: n,
                programId: this.programId,
                data: t
            })
        }
        static assign(e) {
            let t, n;
            if ("basePubkey"in e) {
                let s = Z.AssignWithSeed;
                t = $(s, {
                    base: M(e.basePubkey.toBuffer()),
                    seed: e.seed,
                    programId: M(e.programId.toBuffer())
                }),
                n = [{
                    pubkey: e.accountPubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: e.basePubkey,
                    isSigner: !0,
                    isWritable: !1
                }]
            } else {
                let s = Z.Assign;
                t = $(s, {
                    programId: M(e.programId.toBuffer())
                }),
                n = [{
                    pubkey: e.accountPubkey,
                    isSigner: !0,
                    isWritable: !0
                }]
            }
            return new Y({
                keys: n,
                programId: this.programId,
                data: t
            })
        }
        static createAccountWithSeed(e) {
            let t = Z.CreateWithSeed
              , n = $(t, {
                base: M(e.basePubkey.toBuffer()),
                seed: e.seed,
                lamports: e.lamports,
                space: e.space,
                programId: M(e.programId.toBuffer())
            })
              , s = [{
                pubkey: e.fromPubkey,
                isSigner: !0,
                isWritable: !0
            }, {
                pubkey: e.newAccountPubkey,
                isSigner: !1,
                isWritable: !0
            }];
            return e.basePubkey.equals(e.fromPubkey) || s.push({
                pubkey: e.basePubkey,
                isSigner: !0,
                isWritable: !1
            }),
            new Y({
                keys: s,
                programId: this.programId,
                data: n
            })
        }
        static createNonceAccount(e) {
            let t = new j;
            "basePubkey"in e && "seed"in e ? t.add(r.createAccountWithSeed({
                fromPubkey: e.fromPubkey,
                newAccountPubkey: e.noncePubkey,
                basePubkey: e.basePubkey,
                seed: e.seed,
                lamports: e.lamports,
                space: is,
                programId: this.programId
            })) : t.add(r.createAccount({
                fromPubkey: e.fromPubkey,
                newAccountPubkey: e.noncePubkey,
                lamports: e.lamports,
                space: is,
                programId: this.programId
            }));
            let n = {
                noncePubkey: e.noncePubkey,
                authorizedPubkey: e.authorizedPubkey
            };
            return t.add(this.nonceInitialize(n)),
            t
        }
        static nonceInitialize(e) {
            let t = Z.InitializeNonceAccount
              , n = $(t, {
                authorized: M(e.authorizedPubkey.toBuffer())
            })
              , s = {
                keys: [{
                    pubkey: e.noncePubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: Vn,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: kt,
                    isSigner: !1,
                    isWritable: !1
                }],
                programId: this.programId,
                data: n
            };
            return new Y(s)
        }
        static nonceAdvance(e) {
            let t = Z.AdvanceNonceAccount
              , n = $(t)
              , s = {
                keys: [{
                    pubkey: e.noncePubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: Vn,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: e.authorizedPubkey,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: n
            };
            return new Y(s)
        }
        static nonceWithdraw(e) {
            let t = Z.WithdrawNonceAccount
              , n = $(t, {
                lamports: e.lamports
            });
            return new Y({
                keys: [{
                    pubkey: e.noncePubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: e.toPubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: Vn,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: kt,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: e.authorizedPubkey,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: n
            })
        }
        static nonceAuthorize(e) {
            let t = Z.AuthorizeNonceAccount
              , n = $(t, {
                authorized: M(e.newAuthorizedPubkey.toBuffer())
            });
            return new Y({
                keys: [{
                    pubkey: e.noncePubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: e.authorizedPubkey,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: n
            })
        }
        static allocate(e) {
            let t, n;
            if ("basePubkey"in e) {
                let s = Z.AllocateWithSeed;
                t = $(s, {
                    base: M(e.basePubkey.toBuffer()),
                    seed: e.seed,
                    space: e.space,
                    programId: M(e.programId.toBuffer())
                }),
                n = [{
                    pubkey: e.accountPubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: e.basePubkey,
                    isSigner: !0,
                    isWritable: !1
                }]
            } else {
                let s = Z.Allocate;
                t = $(s, {
                    space: e.space
                }),
                n = [{
                    pubkey: e.accountPubkey,
                    isSigner: !0,
                    isWritable: !0
                }]
            }
            return new Y({
                keys: n,
                programId: this.programId,
                data: t
            })
        }
    }
    ;
    fe.programId = new w("11111111111111111111111111111111");
    xl = ot - 300,
    cs = ( () => {
        class r {
            constructor() {}
            static getMinNumSignatures(t) {
                return 2 * (Math.ceil(t / r.chunkSize) + 1 + 1)
            }
            static load(t, n, s, o, i) {
                return m(this, null, function*() {
                    {
                        let A = yield t.getMinimumBalanceForRentExemption(i.length)
                          , h = yield t.getAccountInfo(s.publicKey, "confirmed")
                          , g = null;
                        if (h !== null) {
                            if (h.executable)
                                return console.error("Program load failed, account is already executable"),
                                !1;
                            h.data.length !== i.length && (g = g || new j,
                            g.add(fe.allocate({
                                accountPubkey: s.publicKey,
                                space: i.length
                            }))),
                            h.owner.equals(o) || (g = g || new j,
                            g.add(fe.assign({
                                accountPubkey: s.publicKey,
                                programId: o
                            }))),
                            h.lamports < A && (g = g || new j,
                            g.add(fe.transfer({
                                fromPubkey: n.publicKey,
                                toPubkey: s.publicKey,
                                lamports: A - h.lamports
                            })))
                        } else
                            g = new j().add(fe.createAccount({
                                fromPubkey: n.publicKey,
                                newAccountPubkey: s.publicKey,
                                lamports: A > 0 ? A : 1,
                                space: i.length,
                                programId: o
                            }));
                        g !== null && (yield os(t, g, [n, s], {
                            commitment: "confirmed"
                        }))
                    }
                    let a = u.struct([u.u32("instruction"), u.u32("offset"), u.u32("bytesLength"), u.u32("bytesLengthPadding"), u.seq(u.u8("byte"), u.offset(u.u32(), -8), "bytes")])
                      , c = r.chunkSize
                      , d = 0
                      , _ = i
                      , y = [];
                    for (; _.length > 0; ) {
                        let A = _.slice(0, c)
                          , h = B.Buffer.alloc(c + 16);
                        a.encode({
                            instruction: 0,
                            offset: d,
                            bytes: A,
                            bytesLength: 0,
                            bytesLengthPadding: 0
                        }, h);
                        let g = new j().add({
                            keys: [{
                                pubkey: s.publicKey,
                                isSigner: !0,
                                isWritable: !0
                            }],
                            programId: o,
                            data: h
                        });
                        y.push(os(t, g, [n, s], {
                            commitment: "confirmed"
                        })),
                        t._rpcEndpoint.includes("solana.com") && (yield lt(1e3 / 4)),
                        d += c,
                        _ = _.slice(c)
                    }
                    yield Promise.all(y);
                    {
                        let A = u.struct([u.u32("instruction")])
                          , h = B.Buffer.alloc(A.span);
                        A.encode({
                            instruction: 1
                        }, h);
                        let g = new j().add({
                            keys: [{
                                pubkey: s.publicKey,
                                isSigner: !0,
                                isWritable: !0
                            }, {
                                pubkey: kt,
                                isSigner: !1,
                                isWritable: !1
                            }],
                            programId: o,
                            data: h
                        })
                          , R = "processed"
                          , p = yield t.sendTransaction(g, [n, s], {
                            preflightCommitment: R
                        })
                          , {context: S, value: N} = yield t.confirmTransaction({
                            signature: p,
                            lastValidBlockHeight: g.lastValidBlockHeight,
                            blockhash: g.recentBlockhash
                        }, R);
                        if (N.err)
                            throw new Error(`Transaction ${p} failed (${JSON.stringify(N)})`);
                        for (; ; ) {
                            try {
                                if ((yield t.getSlot({
                                    commitment: R
                                })) > S.slot)
                                    break
                            } catch {}
                            yield new Promise(x => setTimeout(x, Math.round(Si / 2)))
                        }
                    }
                    return !0
                })
            }
        }
        return r.chunkSize = xl,
        r
    }
    )(),
    Pl = new w("BPFLoader2111111111111111111111111111111111"),
    us = class {
        static getMinNumSignatures(e) {
            return cs.getMinNumSignatures(e)
        }
        static load(e, t, n, s, o) {
            return cs.load(e, t, n, o, s)
        }
    }
    ;
    zl = Ul(),
    ei = Dl(zl),
    Gt = 32;
    Yn = class {
        constructor(e, t, n, s, o) {
            this.slotsPerEpoch = void 0,
            this.leaderScheduleSlotOffset = void 0,
            this.warmup = void 0,
            this.firstNormalEpoch = void 0,
            this.firstNormalSlot = void 0,
            this.slotsPerEpoch = e,
            this.leaderScheduleSlotOffset = t,
            this.warmup = n,
            this.firstNormalEpoch = s,
            this.firstNormalSlot = o
        }
        getEpoch(e) {
            return this.getEpochAndSlotIndex(e)[0]
        }
        getEpochAndSlotIndex(e) {
            if (e < this.firstNormalSlot) {
                let t = Yr(Ml(e + Gt + 1)) - Yr(Gt) - 1
                  , n = this.getSlotsInEpoch(t)
                  , s = e - (n - Gt);
                return [t, s]
            } else {
                let t = e - this.firstNormalSlot
                  , n = Math.floor(t / this.slotsPerEpoch)
                  , s = this.firstNormalEpoch + n
                  , o = t % this.slotsPerEpoch;
                return [s, o]
            }
        }
        getFirstSlotInEpoch(e) {
            return e <= this.firstNormalEpoch ? (Math.pow(2, e) - 1) * Gt : (e - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot
        }
        getLastSlotInEpoch(e) {
            return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1
        }
        getSlotsInEpoch(e) {
            return e < this.firstNormalEpoch ? Math.pow(2, e + Yr(Gt)) : this.slotsPerEpoch
        }
    }
    ,
    Fl = globalThis.fetch,
    ds = class extends jo {
        constructor(e, t, n) {
            let s = o => {
                let i = Ho(o, C({
                    autoconnect: !0,
                    max_reconnects: 5,
                    reconnect: !0,
                    reconnect_interval: 1e3
                }, t));
                return "socket"in i ? this.underlyingSocket = i.socket : this.underlyingSocket = i,
                i
            }
            ;
            super(s, e, t, n),
            this.underlyingSocket = void 0
        }
        call(...e) {
            let t = this.underlyingSocket?.readyState;
            return t === 1 ? super.call(...e) : Promise.reject(new Error("Tried to call a JSON-RPC method `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"))
        }
        notify(...e) {
            let t = this.underlyingSocket?.readyState;
            return t === 1 ? super.notify(...e) : Promise.reject(new Error("Tried to send a JSON-RPC notification `" + e[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + t + ")"))
        }
    }
    ;
    ti = 56,
    Jt = class {
        constructor(e) {
            this.key = void 0,
            this.state = void 0,
            this.key = e.key,
            this.state = e.state
        }
        isActive() {
            let e = BigInt("0xffffffffffffffff");
            return this.state.deactivationSlot === e
        }
        static deserialize(e) {
            let t = Kl($l, e)
              , n = e.length - ti;
            V(n >= 0, "lookup table is invalid"),
            V(n % 32 === 0, "lookup table is invalid");
            let s = n / 32
              , {addresses: o} = u.struct([u.seq(K(), s, "addresses")]).decode(e.slice(ti));
            return {
                deactivationSlot: t.deactivationSlot,
                lastExtendedSlot: t.lastExtendedSlot,
                lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
                authority: t.authority.length !== 0 ? new w(t.authority[0]) : void 0,
                addresses: o.map(i => new w(i))
            }
        }
    }
    ,
    $l = {
        index: 1,
        layout: u.struct([u.u32("typeIndex"), Nt("deactivationSlot"), u.nu64("lastExtendedSlot"), u.u8("lastExtendedStartIndex"), u.u8(), u.seq(K(), u.offset(u.u8(), -1), "authority")])
    },
    Wl = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
    ne = wt(xn(w), E(), r => new w(r)),
    Ai = Pn([E(), ee("base64")]),
    As = wt(xn(B.Buffer), Ai, r => B.Buffer.from(r[0], "base64")),
    Ii = 30 * 1e3;
    ql = wi(ft());
    Hl = b({
        foundation: f(),
        foundationTerm: f(),
        initial: f(),
        taper: f(),
        terminal: f()
    }),
    jl = z(O(k(b({
        epoch: f(),
        effectiveSlot: f(),
        amount: f(),
        postBalance: f(),
        commission: v(k(f()))
    })))),
    Yl = O(b({
        slot: f(),
        prioritizationFee: f()
    })),
    Xl = b({
        total: f(),
        validator: f(),
        foundation: f(),
        epoch: f()
    }),
    Jl = b({
        epoch: f(),
        slotIndex: f(),
        slotsInEpoch: f(),
        absoluteSlot: f(),
        blockHeight: v(f()),
        transactionCount: v(f())
    }),
    Zl = b({
        slotsPerEpoch: f(),
        leaderScheduleSlotOffset: f(),
        warmup: xe(),
        firstNormalEpoch: f(),
        firstNormalSlot: f()
    }),
    Ql = Ur(E(), O(f())),
    gt = k(he([b({}), E()])),
    eh = b({
        err: gt
    }),
    th = ee("receivedSignature"),
    nh = b({
        "solana-core": E(),
        "feature-set": v(f())
    }),
    rh = b({
        program: E(),
        programId: ne,
        parsed: ft()
    }),
    sh = b({
        programId: ne,
        accounts: O(ne),
        data: E()
    }),
    ri = se(b({
        err: k(he([b({}), E()])),
        logs: k(O(E())),
        accounts: v(k(O(k(b({
            executable: xe(),
            owner: E(),
            lamports: f(),
            data: O(E()),
            rentEpoch: v(f())
        }))))),
        unitsConsumed: v(f()),
        returnData: v(k(b({
            programId: E(),
            data: Pn([E(), ee("base64")])
        }))),
        innerInstructions: v(k(O(b({
            index: f(),
            instructions: O(he([rh, sh]))
        }))))
    })),
    oh = se(b({
        byIdentity: Ur(E(), O(f())),
        range: b({
            firstSlot: f(),
            lastSlot: f()
        })
    }));
    uh = z(Hl),
    dh = z(Xl),
    fh = z(Yl),
    lh = z(Jl),
    hh = z(Zl),
    _h = z(Ql),
    ph = z(f()),
    yh = se(b({
        total: f(),
        circulating: f(),
        nonCirculating: f(),
        nonCirculatingAccounts: O(ne)
    })),
    fs = b({
        amount: E(),
        uiAmount: k(f()),
        decimals: f(),
        uiAmountString: v(E())
    }),
    gh = se(O(b({
        address: ne,
        amount: E(),
        uiAmount: k(f()),
        decimals: f(),
        uiAmountString: v(E())
    }))),
    Rh = se(O(b({
        pubkey: ne,
        account: b({
            executable: xe(),
            owner: ne,
            lamports: f(),
            data: As,
            rentEpoch: f()
        })
    }))),
    ls = b({
        program: E(),
        parsed: ft(),
        space: f()
    }),
    mh = se(O(b({
        pubkey: ne,
        account: b({
            executable: xe(),
            owner: ne,
            lamports: f(),
            data: ls,
            rentEpoch: f()
        })
    }))),
    Sh = se(O(b({
        lamports: f(),
        address: ne
    }))),
    Zt = b({
        executable: xe(),
        owner: ne,
        lamports: f(),
        data: As,
        rentEpoch: f()
    }),
    bh = b({
        pubkey: ne,
        account: Zt
    }),
    Eh = wt(he([xn(B.Buffer), ls]), he([Ai, ls]), r => Array.isArray(r) ? I(r, As) : r),
    hs = b({
        executable: xe(),
        owner: ne,
        lamports: f(),
        data: Eh,
        rentEpoch: f()
    }),
    Ah = b({
        pubkey: ne,
        account: hs
    }),
    Ih = b({
        state: he([ee("active"), ee("inactive"), ee("activating"), ee("deactivating")]),
        active: f(),
        inactive: f()
    }),
    wh = z(O(b({
        signature: E(),
        slot: f(),
        err: gt,
        memo: k(E()),
        blockTime: v(k(f()))
    }))),
    Oh = z(O(b({
        signature: E(),
        slot: f(),
        err: gt,
        memo: k(E()),
        blockTime: v(k(f()))
    }))),
    kh = b({
        subscription: f(),
        result: rr(Zt)
    }),
    Nh = b({
        pubkey: ne,
        account: Zt
    }),
    Th = b({
        subscription: f(),
        result: rr(Nh)
    }),
    Lh = b({
        parent: f(),
        slot: f(),
        root: f()
    }),
    vh = b({
        subscription: f(),
        result: Lh
    }),
    Ch = he([b({
        type: he([ee("firstShredReceived"), ee("completed"), ee("optimisticConfirmation"), ee("root")]),
        slot: f(),
        timestamp: f()
    }), b({
        type: ee("createdBank"),
        parent: f(),
        slot: f(),
        timestamp: f()
    }), b({
        type: ee("frozen"),
        slot: f(),
        timestamp: f(),
        stats: b({
            numTransactionEntries: f(),
            numSuccessfulTransactions: f(),
            numFailedTransactions: f(),
            maxTransactionsPerEntry: f()
        })
    }), b({
        type: ee("dead"),
        slot: f(),
        timestamp: f(),
        err: E()
    })]),
    Bh = b({
        subscription: f(),
        result: Ch
    }),
    xh = b({
        subscription: f(),
        result: rr(he([eh, th]))
    }),
    Ph = b({
        subscription: f(),
        result: f()
    }),
    Dh = b({
        pubkey: E(),
        gossip: k(E()),
        tpu: k(E()),
        rpc: k(E()),
        version: k(E())
    }),
    si = b({
        votePubkey: E(),
        nodePubkey: E(),
        activatedStake: f(),
        epochVoteAccount: xe(),
        epochCredits: O(Pn([f(), f(), f()])),
        commission: f(),
        lastVote: f(),
        rootSlot: k(f())
    }),
    Uh = z(b({
        current: O(si),
        delinquent: O(si)
    })),
    zh = he([ee("processed"), ee("confirmed"), ee("finalized")]),
    Mh = b({
        slot: f(),
        confirmations: k(f()),
        err: gt,
        confirmationStatus: v(zh)
    }),
    Fh = se(O(k(Mh))),
    Kh = z(f()),
    Oi = b({
        accountKey: ne,
        writableIndexes: O(f()),
        readonlyIndexes: O(f())
    }),
    Is = b({
        signatures: O(E()),
        message: b({
            accountKeys: O(E()),
            header: b({
                numRequiredSignatures: f(),
                numReadonlySignedAccounts: f(),
                numReadonlyUnsignedAccounts: f()
            }),
            instructions: O(b({
                accounts: O(f()),
                data: E(),
                programIdIndex: f()
            })),
            recentBlockhash: E(),
            addressTableLookups: v(O(Oi))
        })
    }),
    ki = b({
        pubkey: ne,
        signer: xe(),
        writable: xe(),
        source: v(he([ee("transaction"), ee("lookupTable")]))
    }),
    Ni = b({
        accountKeys: O(ki),
        signatures: O(E())
    }),
    Ti = b({
        parsed: ft(),
        program: E(),
        programId: ne
    }),
    Li = b({
        accounts: O(ne),
        data: E(),
        programId: ne
    }),
    $h = he([Li, Ti]),
    Wh = he([b({
        parsed: ft(),
        program: E(),
        programId: E()
    }), b({
        accounts: O(E()),
        data: E(),
        programId: E()
    })]),
    vi = wt($h, Wh, r => "accounts"in r ? I(r, Li) : I(r, Ti)),
    Ci = b({
        signatures: O(E()),
        message: b({
            accountKeys: O(ki),
            instructions: O(vi),
            recentBlockhash: E(),
            addressTableLookups: v(k(O(Oi)))
        })
    }),
    Xn = b({
        accountIndex: f(),
        mint: E(),
        owner: v(E()),
        programId: v(E()),
        uiTokenAmount: fs
    }),
    Bi = b({
        writable: O(ne),
        readonly: O(ne)
    }),
    sr = b({
        err: gt,
        fee: f(),
        innerInstructions: v(k(O(b({
            index: f(),
            instructions: O(b({
                accounts: O(f()),
                data: E(),
                programIdIndex: f()
            }))
        })))),
        preBalances: O(f()),
        postBalances: O(f()),
        logMessages: v(k(O(E()))),
        preTokenBalances: v(k(O(Xn))),
        postTokenBalances: v(k(O(Xn))),
        loadedAddresses: v(Bi),
        computeUnitsConsumed: v(f())
    }),
    ws = b({
        err: gt,
        fee: f(),
        innerInstructions: v(k(O(b({
            index: f(),
            instructions: O(vi)
        })))),
        preBalances: O(f()),
        postBalances: O(f()),
        logMessages: v(k(O(E()))),
        preTokenBalances: v(k(O(Xn))),
        postTokenBalances: v(k(O(Xn))),
        loadedAddresses: v(Bi),
        computeUnitsConsumed: v(f())
    }),
    Ct = he([ee(0), ee("legacy")]),
    Rt = b({
        pubkey: E(),
        lamports: f(),
        postBalance: k(f()),
        rewardType: k(E()),
        commission: v(k(f()))
    }),
    Vh = z(k(b({
        blockhash: E(),
        previousBlockhash: E(),
        parentSlot: f(),
        transactions: O(b({
            transaction: Is,
            meta: k(sr),
            version: v(Ct)
        })),
        rewards: v(O(Rt)),
        blockTime: k(f()),
        blockHeight: k(f())
    }))),
    Gh = z(k(b({
        blockhash: E(),
        previousBlockhash: E(),
        parentSlot: f(),
        rewards: v(O(Rt)),
        blockTime: k(f()),
        blockHeight: k(f())
    }))),
    qh = z(k(b({
        blockhash: E(),
        previousBlockhash: E(),
        parentSlot: f(),
        transactions: O(b({
            transaction: Ni,
            meta: k(sr),
            version: v(Ct)
        })),
        rewards: v(O(Rt)),
        blockTime: k(f()),
        blockHeight: k(f())
    }))),
    Hh = z(k(b({
        blockhash: E(),
        previousBlockhash: E(),
        parentSlot: f(),
        transactions: O(b({
            transaction: Ci,
            meta: k(ws),
            version: v(Ct)
        })),
        rewards: v(O(Rt)),
        blockTime: k(f()),
        blockHeight: k(f())
    }))),
    jh = z(k(b({
        blockhash: E(),
        previousBlockhash: E(),
        parentSlot: f(),
        transactions: O(b({
            transaction: Ni,
            meta: k(ws),
            version: v(Ct)
        })),
        rewards: v(O(Rt)),
        blockTime: k(f()),
        blockHeight: k(f())
    }))),
    Yh = z(k(b({
        blockhash: E(),
        previousBlockhash: E(),
        parentSlot: f(),
        rewards: v(O(Rt)),
        blockTime: k(f()),
        blockHeight: k(f())
    }))),
    Xh = z(k(b({
        blockhash: E(),
        previousBlockhash: E(),
        parentSlot: f(),
        transactions: O(b({
            transaction: Is,
            meta: k(sr)
        })),
        rewards: v(O(Rt)),
        blockTime: k(f())
    }))),
    oi = z(k(b({
        blockhash: E(),
        previousBlockhash: E(),
        parentSlot: f(),
        signatures: O(E()),
        blockTime: k(f())
    }))),
    Jr = z(k(b({
        slot: f(),
        meta: k(sr),
        blockTime: v(k(f())),
        transaction: Is,
        version: v(Ct)
    }))),
    Wn = z(k(b({
        slot: f(),
        transaction: Ci,
        meta: k(ws),
        blockTime: v(k(f())),
        version: v(Ct)
    }))),
    Jh = se(b({
        blockhash: E(),
        lastValidBlockHeight: f()
    })),
    Zh = se(xe()),
    Qh = b({
        slot: f(),
        numTransactions: f(),
        numSlots: f(),
        samplePeriodSecs: f()
    }),
    e_ = z(O(Qh)),
    t_ = se(k(b({
        feeCalculator: b({
            lamportsPerSignature: f()
        })
    }))),
    n_ = z(E()),
    r_ = z(E()),
    s_ = b({
        err: gt,
        logs: O(E()),
        signature: E()
    }),
    o_ = b({
        result: rr(s_),
        subscription: f()
    }),
    i_ = {
        "solana-client": "js/1.0.0-maintenance"
    },
    _s = class {
        constructor(e, t) {
            this._commitment = void 0,
            this._confirmTransactionInitialTimeout = void 0,
            this._rpcEndpoint = void 0,
            this._rpcWsEndpoint = void 0,
            this._rpcClient = void 0,
            this._rpcRequest = void 0,
            this._rpcBatchRequest = void 0,
            this._rpcWebSocket = void 0,
            this._rpcWebSocketConnected = !1,
            this._rpcWebSocketHeartbeat = null,
            this._rpcWebSocketIdleTimeout = null,
            this._rpcWebSocketGeneration = 0,
            this._disableBlockhashCaching = !1,
            this._pollingBlockhash = !1,
            this._blockhashInfo = {
                latestBlockhash: null,
                lastFetch: 0,
                transactionSignatures: [],
                simulatedSignatures: []
            },
            this._nextClientSubscriptionId = 0,
            this._subscriptionDisposeFunctionsByClientSubscriptionId = {},
            this._subscriptionHashByClientSubscriptionId = {},
            this._subscriptionStateChangeCallbacksByHash = {},
            this._subscriptionCallbacksByServerSubscriptionId = {},
            this._subscriptionsByHash = {},
            this._subscriptionsAutoDisposedByRpc = new Set,
            this.getBlockHeight = ( () => {
                let d = {};
                return _ => m(this, null, function*() {
                    let {commitment: y, config: A} = J(_)
                      , h = this._buildArgs([], y, void 0, A)
                      , g = ei(h);
                    return d[g] = d[g] ?? m(this, null, function*() {
                        try {
                            let R = yield this._rpcRequest("getBlockHeight", h)
                              , p = I(R, z(f()));
                            if ("error"in p)
                                throw new T(p.error,"failed to get block height information");
                            return p.result
                        } finally {
                            delete d[g]
                        }
                    }),
                    yield d[g]
                })
            }
            )();
            let n, s, o, i, a, c;
            t && typeof t == "string" ? this._commitment = t : t && (this._commitment = t.commitment,
            this._confirmTransactionInitialTimeout = t.confirmTransactionInitialTimeout,
            n = t.wsEndpoint,
            s = t.httpHeaders,
            o = t.fetch,
            i = t.fetchMiddleware,
            a = t.disableRetryOnRateLimit,
            c = t.httpAgent),
            this._rpcEndpoint = Gl(e),
            this._rpcWsEndpoint = n || Vl(e),
            this._rpcClient = ih(e, s, o, i, a, c),
            this._rpcRequest = ah(this._rpcClient),
            this._rpcBatchRequest = ch(this._rpcClient),
            this._rpcWebSocket = new ds(this._rpcWsEndpoint,{
                autoconnect: !1,
                max_reconnects: 1 / 0
            }),
            this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)),
            this._rpcWebSocket.on("error", this._wsOnError.bind(this)),
            this._rpcWebSocket.on("close", this._wsOnClose.bind(this)),
            this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this)),
            this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this)),
            this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this)),
            this._rpcWebSocket.on("slotsUpdatesNotification", this._wsOnSlotUpdatesNotification.bind(this)),
            this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this)),
            this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this)),
            this._rpcWebSocket.on("logsNotification", this._wsOnLogsNotification.bind(this))
        }
        get commitment() {
            return this._commitment
        }
        get rpcEndpoint() {
            return this._rpcEndpoint
        }
        getBalanceAndContext(e, t) {
            return m(this, null, function*() {
                let {commitment: n, config: s} = J(t)
                  , o = this._buildArgs([e.toBase58()], n, void 0, s)
                  , i = yield this._rpcRequest("getBalance", o)
                  , a = I(i, se(f()));
                if ("error"in a)
                    throw new T(a.error,`failed to get balance for ${e.toBase58()}`);
                return a.result
            })
        }
        getBalance(e, t) {
            return m(this, null, function*() {
                return yield this.getBalanceAndContext(e, t).then(n => n.value).catch(n => {
                    throw new Error("failed to get balance of account " + e.toBase58() + ": " + n)
                }
                )
            })
        }
        getBlockTime(e) {
            return m(this, null, function*() {
                let t = yield this._rpcRequest("getBlockTime", [e])
                  , n = I(t, z(k(f())));
                if ("error"in n)
                    throw new T(n.error,`failed to get block time for slot ${e}`);
                return n.result
            })
        }
        getMinimumLedgerSlot() {
            return m(this, null, function*() {
                let e = yield this._rpcRequest("minimumLedgerSlot", [])
                  , t = I(e, z(f()));
                if ("error"in t)
                    throw new T(t.error,"failed to get minimum ledger slot");
                return t.result
            })
        }
        getFirstAvailableBlock() {
            return m(this, null, function*() {
                let e = yield this._rpcRequest("getFirstAvailableBlock", [])
                  , t = I(e, ph);
                if ("error"in t)
                    throw new T(t.error,"failed to get first available block");
                return t.result
            })
        }
        getSupply(e) {
            return m(this, null, function*() {
                let t = {};
                typeof e == "string" ? t = {
                    commitment: e
                } : e ? t = F(C({}, e), {
                    commitment: e && e.commitment || this.commitment
                }) : t = {
                    commitment: this.commitment
                };
                let n = yield this._rpcRequest("getSupply", [t])
                  , s = I(n, yh);
                if ("error"in s)
                    throw new T(s.error,"failed to get supply");
                return s.result
            })
        }
        getTokenSupply(e, t) {
            return m(this, null, function*() {
                let n = this._buildArgs([e.toBase58()], t)
                  , s = yield this._rpcRequest("getTokenSupply", n)
                  , o = I(s, se(fs));
                if ("error"in o)
                    throw new T(o.error,"failed to get token supply");
                return o.result
            })
        }
        getTokenAccountBalance(e, t) {
            return m(this, null, function*() {
                let n = this._buildArgs([e.toBase58()], t)
                  , s = yield this._rpcRequest("getTokenAccountBalance", n)
                  , o = I(s, se(fs));
                if ("error"in o)
                    throw new T(o.error,"failed to get token account balance");
                return o.result
            })
        }
        getTokenAccountsByOwner(e, t, n) {
            return m(this, null, function*() {
                let {commitment: s, config: o} = J(n)
                  , i = [e.toBase58()];
                "mint"in t ? i.push({
                    mint: t.mint.toBase58()
                }) : i.push({
                    programId: t.programId.toBase58()
                });
                let a = this._buildArgs(i, s, "base64", o)
                  , c = yield this._rpcRequest("getTokenAccountsByOwner", a)
                  , d = I(c, Rh);
                if ("error"in d)
                    throw new T(d.error,`failed to get token accounts owned by account ${e.toBase58()}`);
                return d.result
            })
        }
        getParsedTokenAccountsByOwner(e, t, n) {
            return m(this, null, function*() {
                let s = [e.toBase58()];
                "mint"in t ? s.push({
                    mint: t.mint.toBase58()
                }) : s.push({
                    programId: t.programId.toBase58()
                });
                let o = this._buildArgs(s, n, "jsonParsed")
                  , i = yield this._rpcRequest("getTokenAccountsByOwner", o)
                  , a = I(i, mh);
                if ("error"in a)
                    throw new T(a.error,`failed to get token accounts owned by account ${e.toBase58()}`);
                return a.result
            })
        }
        getLargestAccounts(e) {
            return m(this, null, function*() {
                let t = F(C({}, e), {
                    commitment: e && e.commitment || this.commitment
                })
                  , n = t.filter || t.commitment ? [t] : []
                  , s = yield this._rpcRequest("getLargestAccounts", n)
                  , o = I(s, Sh);
                if ("error"in o)
                    throw new T(o.error,"failed to get largest accounts");
                return o.result
            })
        }
        getTokenLargestAccounts(e, t) {
            return m(this, null, function*() {
                let n = this._buildArgs([e.toBase58()], t)
                  , s = yield this._rpcRequest("getTokenLargestAccounts", n)
                  , o = I(s, gh);
                if ("error"in o)
                    throw new T(o.error,"failed to get token largest accounts");
                return o.result
            })
        }
        getAccountInfoAndContext(e, t) {
            return m(this, null, function*() {
                let {commitment: n, config: s} = J(t)
                  , o = this._buildArgs([e.toBase58()], n, "base64", s)
                  , i = yield this._rpcRequest("getAccountInfo", o)
                  , a = I(i, se(k(Zt)));
                if ("error"in a)
                    throw new T(a.error,`failed to get info about account ${e.toBase58()}`);
                return a.result
            })
        }
        getParsedAccountInfo(e, t) {
            return m(this, null, function*() {
                let {commitment: n, config: s} = J(t)
                  , o = this._buildArgs([e.toBase58()], n, "jsonParsed", s)
                  , i = yield this._rpcRequest("getAccountInfo", o)
                  , a = I(i, se(k(hs)));
                if ("error"in a)
                    throw new T(a.error,`failed to get info about account ${e.toBase58()}`);
                return a.result
            })
        }
        getAccountInfo(e, t) {
            return m(this, null, function*() {
                try {
                    return (yield this.getAccountInfoAndContext(e, t)).value
                } catch (n) {
                    throw new Error("failed to get info about account " + e.toBase58() + ": " + n)
                }
            })
        }
        getMultipleParsedAccounts(e, t) {
            return m(this, null, function*() {
                let {commitment: n, config: s} = J(t)
                  , o = e.map(d => d.toBase58())
                  , i = this._buildArgs([o], n, "jsonParsed", s)
                  , a = yield this._rpcRequest("getMultipleAccounts", i)
                  , c = I(a, se(O(k(hs))));
                if ("error"in c)
                    throw new T(c.error,`failed to get info for accounts ${o}`);
                return c.result
            })
        }
        getMultipleAccountsInfoAndContext(e, t) {
            return m(this, null, function*() {
                let {commitment: n, config: s} = J(t)
                  , o = e.map(d => d.toBase58())
                  , i = this._buildArgs([o], n, "base64", s)
                  , a = yield this._rpcRequest("getMultipleAccounts", i)
                  , c = I(a, se(O(k(Zt))));
                if ("error"in c)
                    throw new T(c.error,`failed to get info for accounts ${o}`);
                return c.result
            })
        }
        getMultipleAccountsInfo(e, t) {
            return m(this, null, function*() {
                return (yield this.getMultipleAccountsInfoAndContext(e, t)).value
            })
        }
        getStakeActivation(e, t, n) {
            return m(this, null, function*() {
                let {commitment: s, config: o} = J(t)
                  , i = this._buildArgs([e.toBase58()], s, void 0, F(C({}, o), {
                    epoch: n ?? o?.epoch
                }))
                  , a = yield this._rpcRequest("getStakeActivation", i)
                  , c = I(a, z(Ih));
                if ("error"in c)
                    throw new T(c.error,`failed to get Stake Activation ${e.toBase58()}`);
                return c.result
            })
        }
        getProgramAccounts(e, t) {
            return m(this, null, function*() {
                let {commitment: n, config: s} = J(t)
                  , y = s || {}
                  , {encoding: o} = y
                  , i = ve(y, ["encoding"])
                  , a = this._buildArgs([e.toBase58()], n, o || "base64", C(C({}, i), i.filters ? {
                    filters: ni(i.filters)
                } : null))
                  , c = yield this._rpcRequest("getProgramAccounts", a)
                  , d = O(bh)
                  , _ = i.withContext === !0 ? I(c, se(d)) : I(c, z(d));
                if ("error"in _)
                    throw new T(_.error,`failed to get accounts owned by program ${e.toBase58()}`);
                return _.result
            })
        }
        getParsedProgramAccounts(e, t) {
            return m(this, null, function*() {
                let {commitment: n, config: s} = J(t)
                  , o = this._buildArgs([e.toBase58()], n, "jsonParsed", s)
                  , i = yield this._rpcRequest("getProgramAccounts", o)
                  , a = I(i, z(O(Ah)));
                if ("error"in a)
                    throw new T(a.error,`failed to get accounts owned by program ${e.toBase58()}`);
                return a.result
            })
        }
        confirmTransaction(e, t) {
            return m(this, null, function*() {
                let n;
                if (typeof e == "string")
                    n = e;
                else {
                    let o = e;
                    if (o.abortSignal?.aborted)
                        return Promise.reject(o.abortSignal.reason);
                    n = o.signature
                }
                let s;
                try {
                    s = ce.default.decode(n)
                } catch {
                    throw new Error("signature must be base58 encoded: " + n)
                }
                return V(s.length === 64, "signature has invalid length"),
                typeof e == "string" ? yield this.confirmTransactionUsingLegacyTimeoutStrategy({
                    commitment: t || this.commitment,
                    signature: n
                }) : "lastValidBlockHeight"in e ? yield this.confirmTransactionUsingBlockHeightExceedanceStrategy({
                    commitment: t || this.commitment,
                    strategy: e
                }) : yield this.confirmTransactionUsingDurableNonceStrategy({
                    commitment: t || this.commitment,
                    strategy: e
                })
            })
        }
        getCancellationPromise(e) {
            return new Promise( (t, n) => {
                e != null && (e.aborted ? n(e.reason) : e.addEventListener("abort", () => {
                    n(e.reason)
                }
                ))
            }
            )
        }
        getTransactionConfirmationPromise({commitment: e, signature: t}) {
            let n, s, o = !1, i = new Promise( (c, d) => {
                try {
                    n = this.onSignature(t, (y, A) => {
                        n = void 0;
                        let h = {
                            context: A,
                            value: y
                        };
                        c({
                            __type: Ye.PROCESSED,
                            response: h
                        })
                    }
                    , e);
                    let _ = new Promise(y => {
                        n == null ? y() : s = this._onSubscriptionStateChange(n, A => {
                            A === "subscribed" && y()
                        }
                        )
                    }
                    );
                    m(this, null, function*() {
                        if (yield _,
                        o)
                            return;
                        let y = yield this.getSignatureStatus(t);
                        if (o || y == null)
                            return;
                        let {context: A, value: h} = y;
                        if (h != null)
                            if (h?.err)
                                d(h.err);
                            else {
                                switch (e) {
                                case "confirmed":
                                case "single":
                                case "singleGossip":
                                    {
                                        if (h.confirmationStatus === "processed")
                                            return;
                                        break
                                    }
                                case "finalized":
                                case "max":
                                case "root":
                                    {
                                        if (h.confirmationStatus === "processed" || h.confirmationStatus === "confirmed")
                                            return;
                                        break
                                    }
                                case "processed":
                                case "recent":
                                }
                                o = !0,
                                c({
                                    __type: Ye.PROCESSED,
                                    response: {
                                        context: A,
                                        value: h
                                    }
                                })
                            }
                    })
                } catch (_) {
                    d(_)
                }
            }
            );
            return {
                abortConfirmation: () => {
                    s && (s(),
                    s = void 0),
                    n != null && (this.removeSignatureListener(n),
                    n = void 0)
                }
                ,
                confirmationPromise: i
            }
        }
        confirmTransactionUsingBlockHeightExceedanceStrategy(o) {
            return m(this, arguments, function*({commitment: e, strategy: {abortSignal: t, lastValidBlockHeight: n, signature: s}}) {
                let i = !1, a = new Promise(A => {
                    let h = () => m(this, null, function*() {
                        try {
                            return yield this.getBlockHeight(e)
                        } catch {
                            return -1
                        }
                    });
                    m(this, null, function*() {
                        let g = yield h();
                        if (!i) {
                            for (; g <= n; )
                                if (yield lt(1e3),
                                i || (g = yield h(),
                                i))
                                    return;
                            A({
                                __type: Ye.BLOCKHEIGHT_EXCEEDED
                            })
                        }
                    })
                }
                ), {abortConfirmation: c, confirmationPromise: d} = this.getTransactionConfirmationPromise({
                    commitment: e,
                    signature: s
                }), _ = this.getCancellationPromise(t), y;
                try {
                    let A = yield Promise.race([_, d, a]);
                    if (A.__type === Ye.PROCESSED)
                        y = A.response;
                    else
                        throw new Yt(s)
                } finally {
                    i = !0,
                    c()
                }
                return y
            })
        }
        confirmTransactionUsingDurableNonceStrategy(a) {
            return m(this, arguments, function*({commitment: e, strategy: {abortSignal: t, minContextSlot: n, nonceAccountPubkey: s, nonceValue: o, signature: i}}) {
                let c = !1, d = new Promise(g => {
                    let R = o
                      , p = null
                      , S = () => m(this, null, function*() {
                        try {
                            let {context: N, value: x} = yield this.getNonceAndContext(s, {
                                commitment: e,
                                minContextSlot: n
                            });
                            return p = N.slot,
                            x?.nonce
                        } catch {
                            return R
                        }
                    });
                    m(this, null, function*() {
                        if (R = yield S(),
                        !c)
                            for (; ; ) {
                                if (o !== R) {
                                    g({
                                        __type: Ye.NONCE_INVALID,
                                        slotInWhichNonceDidAdvance: p
                                    });
                                    return
                                }
                                if (yield lt(2e3),
                                c || (R = yield S(),
                                c))
                                    return
                            }
                    })
                }
                ), {abortConfirmation: _, confirmationPromise: y} = this.getTransactionConfirmationPromise({
                    commitment: e,
                    signature: i
                }), A = this.getCancellationPromise(t), h;
                try {
                    let g = yield Promise.race([A, y, d]);
                    if (g.__type === Ye.PROCESSED)
                        h = g.response;
                    else {
                        let R;
                        for (; ; ) {
                            let p = yield this.getSignatureStatus(i);
                            if (p == null)
                                break;
                            if (p.context.slot < (g.slotInWhichNonceDidAdvance ?? n)) {
                                yield lt(400);
                                continue
                            }
                            R = p;
                            break
                        }
                        if (R?.value) {
                            let p = e || "finalized"
                              , {confirmationStatus: S} = R.value;
                            switch (p) {
                            case "processed":
                            case "recent":
                                if (S !== "processed" && S !== "confirmed" && S !== "finalized")
                                    throw new st(i);
                                break;
                            case "confirmed":
                            case "single":
                            case "singleGossip":
                                if (S !== "confirmed" && S !== "finalized")
                                    throw new st(i);
                                break;
                            case "finalized":
                            case "max":
                            case "root":
                                if (S !== "finalized")
                                    throw new st(i);
                                break;
                            default:
                            }
                            h = {
                                context: R.context,
                                value: {
                                    err: R.value.err
                                }
                            }
                        } else
                            throw new st(i)
                    }
                } finally {
                    c = !0,
                    _()
                }
                return h
            })
        }
        confirmTransactionUsingLegacyTimeoutStrategy(n) {
            return m(this, arguments, function*({commitment: e, signature: t}) {
                let s, o = new Promise(d => {
                    let _ = this._confirmTransactionInitialTimeout || 6e4;
                    switch (e) {
                    case "processed":
                    case "recent":
                    case "single":
                    case "confirmed":
                    case "singleGossip":
                        {
                            _ = this._confirmTransactionInitialTimeout || 3e4;
                            break
                        }
                    }
                    s = setTimeout( () => d({
                        __type: Ye.TIMED_OUT,
                        timeoutMs: _
                    }), _)
                }
                ), {abortConfirmation: i, confirmationPromise: a} = this.getTransactionConfirmationPromise({
                    commitment: e,
                    signature: t
                }), c;
                try {
                    let d = yield Promise.race([a, o]);
                    if (d.__type === Ye.PROCESSED)
                        c = d.response;
                    else
                        throw new Xt(t,d.timeoutMs / 1e3)
                } finally {
                    clearTimeout(s),
                    i()
                }
                return c
            })
        }
        getClusterNodes() {
            return m(this, null, function*() {
                let e = yield this._rpcRequest("getClusterNodes", [])
                  , t = I(e, z(O(Dh)));
                if ("error"in t)
                    throw new T(t.error,"failed to get cluster nodes");
                return t.result
            })
        }
        getVoteAccounts(e) {
            return m(this, null, function*() {
                let t = this._buildArgs([], e)
                  , n = yield this._rpcRequest("getVoteAccounts", t)
                  , s = I(n, Uh);
                if ("error"in s)
                    throw new T(s.error,"failed to get vote accounts");
                return s.result
            })
        }
        getSlot(e) {
            return m(this, null, function*() {
                let {commitment: t, config: n} = J(e)
                  , s = this._buildArgs([], t, void 0, n)
                  , o = yield this._rpcRequest("getSlot", s)
                  , i = I(o, z(f()));
                if ("error"in i)
                    throw new T(i.error,"failed to get slot");
                return i.result
            })
        }
        getSlotLeader(e) {
            return m(this, null, function*() {
                let {commitment: t, config: n} = J(e)
                  , s = this._buildArgs([], t, void 0, n)
                  , o = yield this._rpcRequest("getSlotLeader", s)
                  , i = I(o, z(E()));
                if ("error"in i)
                    throw new T(i.error,"failed to get slot leader");
                return i.result
            })
        }
        getSlotLeaders(e, t) {
            return m(this, null, function*() {
                let n = [e, t]
                  , s = yield this._rpcRequest("getSlotLeaders", n)
                  , o = I(s, z(O(ne)));
                if ("error"in o)
                    throw new T(o.error,"failed to get slot leaders");
                return o.result
            })
        }
        getSignatureStatus(e, t) {
            return m(this, null, function*() {
                let {context: n, value: s} = yield this.getSignatureStatuses([e], t);
                V(s.length === 1);
                let o = s[0];
                return {
                    context: n,
                    value: o
                }
            })
        }
        getSignatureStatuses(e, t) {
            return m(this, null, function*() {
                let n = [e];
                t && n.push(t);
                let s = yield this._rpcRequest("getSignatureStatuses", n)
                  , o = I(s, Fh);
                if ("error"in o)
                    throw new T(o.error,"failed to get signature status");
                return o.result
            })
        }
        getTransactionCount(e) {
            return m(this, null, function*() {
                let {commitment: t, config: n} = J(e)
                  , s = this._buildArgs([], t, void 0, n)
                  , o = yield this._rpcRequest("getTransactionCount", s)
                  , i = I(o, z(f()));
                if ("error"in i)
                    throw new T(i.error,"failed to get transaction count");
                return i.result
            })
        }
        getTotalSupply(e) {
            return m(this, null, function*() {
                return (yield this.getSupply({
                    commitment: e,
                    excludeNonCirculatingAccountsList: !0
                })).value.total
            })
        }
        getInflationGovernor(e) {
            return m(this, null, function*() {
                let t = this._buildArgs([], e)
                  , n = yield this._rpcRequest("getInflationGovernor", t)
                  , s = I(n, uh);
                if ("error"in s)
                    throw new T(s.error,"failed to get inflation");
                return s.result
            })
        }
        getInflationReward(e, t, n) {
            return m(this, null, function*() {
                let {commitment: s, config: o} = J(n)
                  , i = this._buildArgs([e.map(d => d.toBase58())], s, void 0, F(C({}, o), {
                    epoch: t ?? o?.epoch
                }))
                  , a = yield this._rpcRequest("getInflationReward", i)
                  , c = I(a, jl);
                if ("error"in c)
                    throw new T(c.error,"failed to get inflation reward");
                return c.result
            })
        }
        getInflationRate() {
            return m(this, null, function*() {
                let e = yield this._rpcRequest("getInflationRate", [])
                  , t = I(e, dh);
                if ("error"in t)
                    throw new T(t.error,"failed to get inflation rate");
                return t.result
            })
        }
        getEpochInfo(e) {
            return m(this, null, function*() {
                let {commitment: t, config: n} = J(e)
                  , s = this._buildArgs([], t, void 0, n)
                  , o = yield this._rpcRequest("getEpochInfo", s)
                  , i = I(o, lh);
                if ("error"in i)
                    throw new T(i.error,"failed to get epoch info");
                return i.result
            })
        }
        getEpochSchedule() {
            return m(this, null, function*() {
                let e = yield this._rpcRequest("getEpochSchedule", [])
                  , t = I(e, hh);
                if ("error"in t)
                    throw new T(t.error,"failed to get epoch schedule");
                let n = t.result;
                return new Yn(n.slotsPerEpoch,n.leaderScheduleSlotOffset,n.warmup,n.firstNormalEpoch,n.firstNormalSlot)
            })
        }
        getLeaderSchedule() {
            return m(this, null, function*() {
                let e = yield this._rpcRequest("getLeaderSchedule", [])
                  , t = I(e, _h);
                if ("error"in t)
                    throw new T(t.error,"failed to get leader schedule");
                return t.result
            })
        }
        getMinimumBalanceForRentExemption(e, t) {
            return m(this, null, function*() {
                let n = this._buildArgs([e], t)
                  , s = yield this._rpcRequest("getMinimumBalanceForRentExemption", n)
                  , o = I(s, Kh);
                return "error"in o ? (console.warn("Unable to fetch minimum balance for rent exemption"),
                0) : o.result
            })
        }
        getRecentBlockhashAndContext(e) {
            return m(this, null, function*() {
                let {context: t, value: {blockhash: n}} = yield this.getLatestBlockhashAndContext(e);
                return {
                    context: t,
                    value: {
                        blockhash: n,
                        feeCalculator: {
                            get lamportsPerSignature() {
                                throw new Error("The capability to fetch `lamportsPerSignature` using the `getRecentBlockhash` API is no longer offered by the network. Use the `getFeeForMessage` API to obtain the fee for a given message.")
                            },
                            toJSON() {
                                return {}
                            }
                        }
                    }
                }
            })
        }
        getRecentPerformanceSamples(e) {
            return m(this, null, function*() {
                let t = yield this._rpcRequest("getRecentPerformanceSamples", e ? [e] : [])
                  , n = I(t, e_);
                if ("error"in n)
                    throw new T(n.error,"failed to get recent performance samples");
                return n.result
            })
        }
        getFeeCalculatorForBlockhash(e, t) {
            return m(this, null, function*() {
                let n = this._buildArgs([e], t)
                  , s = yield this._rpcRequest("getFeeCalculatorForBlockhash", n)
                  , o = I(s, t_);
                if ("error"in o)
                    throw new T(o.error,"failed to get fee calculator");
                let {context: i, value: a} = o.result;
                return {
                    context: i,
                    value: a !== null ? a.feeCalculator : null
                }
            })
        }
        getFeeForMessage(e, t) {
            return m(this, null, function*() {
                let n = M(e.serialize()).toString("base64")
                  , s = this._buildArgs([n], t)
                  , o = yield this._rpcRequest("getFeeForMessage", s)
                  , i = I(o, se(k(f())));
                if ("error"in i)
                    throw new T(i.error,"failed to get fee for message");
                if (i.result === null)
                    throw new Error("invalid blockhash");
                return i.result
            })
        }
        getRecentPrioritizationFees(e) {
            return m(this, null, function*() {
                let t = e?.lockedWritableAccounts?.map(i => i.toBase58())
                  , n = t?.length ? [t] : []
                  , s = yield this._rpcRequest("getRecentPrioritizationFees", n)
                  , o = I(s, fh);
                if ("error"in o)
                    throw new T(o.error,"failed to get recent prioritization fees");
                return o.result
            })
        }
        getRecentBlockhash(e) {
            return m(this, null, function*() {
                try {
                    return (yield this.getRecentBlockhashAndContext(e)).value
                } catch (t) {
                    throw new Error("failed to get recent blockhash: " + t)
                }
            })
        }
        getLatestBlockhash(e) {
            return m(this, null, function*() {
                try {
                    return (yield this.getLatestBlockhashAndContext(e)).value
                } catch (t) {
                    throw new Error("failed to get recent blockhash: " + t)
                }
            })
        }
        getLatestBlockhashAndContext(e) {
            return m(this, null, function*() {
                let {commitment: t, config: n} = J(e)
                  , s = this._buildArgs([], t, void 0, n)
                  , o = yield this._rpcRequest("getLatestBlockhash", s)
                  , i = I(o, Jh);
                if ("error"in i)
                    throw new T(i.error,"failed to get latest blockhash");
                return i.result
            })
        }
        isBlockhashValid(e, t) {
            return m(this, null, function*() {
                let {commitment: n, config: s} = J(t)
                  , o = this._buildArgs([e], n, void 0, s)
                  , i = yield this._rpcRequest("isBlockhashValid", o)
                  , a = I(i, Zh);
                if ("error"in a)
                    throw new T(a.error,"failed to determine if the blockhash `" + e + "`is valid");
                return a.result
            })
        }
        getVersion() {
            return m(this, null, function*() {
                let e = yield this._rpcRequest("getVersion", [])
                  , t = I(e, z(nh));
                if ("error"in t)
                    throw new T(t.error,"failed to get version");
                return t.result
            })
        }
        getGenesisHash() {
            return m(this, null, function*() {
                let e = yield this._rpcRequest("getGenesisHash", [])
                  , t = I(e, z(E()));
                if ("error"in t)
                    throw new T(t.error,"failed to get genesis hash");
                return t.result
            })
        }
        getBlock(e, t) {
            return m(this, null, function*() {
                let {commitment: n, config: s} = J(t)
                  , o = this._buildArgsAtLeastConfirmed([e], n, void 0, s)
                  , i = yield this._rpcRequest("getBlock", o);
                try {
                    switch (s?.transactionDetails) {
                    case "accounts":
                        {
                            let a = I(i, qh);
                            if ("error"in a)
                                throw a.error;
                            return a.result
                        }
                    case "none":
                        {
                            let a = I(i, Gh);
                            if ("error"in a)
                                throw a.error;
                            return a.result
                        }
                    default:
                        {
                            let a = I(i, Vh);
                            if ("error"in a)
                                throw a.error;
                            let {result: c} = a;
                            return c ? F(C({}, c), {
                                transactions: c.transactions.map( ({transaction: d, meta: _, version: y}) => ({
                                    meta: _,
                                    transaction: F(C({}, d), {
                                        message: Xr(y, d.message)
                                    }),
                                    version: y
                                }))
                            }) : null
                        }
                    }
                } catch (a) {
                    throw new T(a,"failed to get confirmed block")
                }
            })
        }
        getParsedBlock(e, t) {
            return m(this, null, function*() {
                let {commitment: n, config: s} = J(t)
                  , o = this._buildArgsAtLeastConfirmed([e], n, "jsonParsed", s)
                  , i = yield this._rpcRequest("getBlock", o);
                try {
                    switch (s?.transactionDetails) {
                    case "accounts":
                        {
                            let a = I(i, jh);
                            if ("error"in a)
                                throw a.error;
                            return a.result
                        }
                    case "none":
                        {
                            let a = I(i, Yh);
                            if ("error"in a)
                                throw a.error;
                            return a.result
                        }
                    default:
                        {
                            let a = I(i, Hh);
                            if ("error"in a)
                                throw a.error;
                            return a.result
                        }
                    }
                } catch (a) {
                    throw new T(a,"failed to get block")
                }
            })
        }
        getBlockProduction(e) {
            return m(this, null, function*() {
                let t, n;
                if (typeof e == "string")
                    n = e;
                else if (e) {
                    let a = e
                      , {commitment: c} = a
                      , d = ve(a, ["commitment"]);
                    n = c,
                    t = d
                }
                let s = this._buildArgs([], n, "base64", t)
                  , o = yield this._rpcRequest("getBlockProduction", s)
                  , i = I(o, oh);
                if ("error"in i)
                    throw new T(i.error,"failed to get block production information");
                return i.result
            })
        }
        getTransaction(e, t) {
            return m(this, null, function*() {
                let {commitment: n, config: s} = J(t)
                  , o = this._buildArgsAtLeastConfirmed([e], n, void 0, s)
                  , i = yield this._rpcRequest("getTransaction", o)
                  , a = I(i, Jr);
                if ("error"in a)
                    throw new T(a.error,"failed to get transaction");
                let c = a.result;
                return c && F(C({}, c), {
                    transaction: F(C({}, c.transaction), {
                        message: Xr(c.version, c.transaction.message)
                    })
                })
            })
        }
        getParsedTransaction(e, t) {
            return m(this, null, function*() {
                let {commitment: n, config: s} = J(t)
                  , o = this._buildArgsAtLeastConfirmed([e], n, "jsonParsed", s)
                  , i = yield this._rpcRequest("getTransaction", o)
                  , a = I(i, Wn);
                if ("error"in a)
                    throw new T(a.error,"failed to get transaction");
                return a.result
            })
        }
        getParsedTransactions(e, t) {
            return m(this, null, function*() {
                let {commitment: n, config: s} = J(t)
                  , o = e.map(c => ({
                    methodName: "getTransaction",
                    args: this._buildArgsAtLeastConfirmed([c], n, "jsonParsed", s)
                }));
                return (yield this._rpcBatchRequest(o)).map(c => {
                    let d = I(c, Wn);
                    if ("error"in d)
                        throw new T(d.error,"failed to get transactions");
                    return d.result
                }
                )
            })
        }
        getTransactions(e, t) {
            return m(this, null, function*() {
                let {commitment: n, config: s} = J(t)
                  , o = e.map(c => ({
                    methodName: "getTransaction",
                    args: this._buildArgsAtLeastConfirmed([c], n, void 0, s)
                }));
                return (yield this._rpcBatchRequest(o)).map(c => {
                    let d = I(c, Jr);
                    if ("error"in d)
                        throw new T(d.error,"failed to get transactions");
                    let _ = d.result;
                    return _ && F(C({}, _), {
                        transaction: F(C({}, _.transaction), {
                            message: Xr(_.version, _.transaction.message)
                        })
                    })
                }
                )
            })
        }
        getConfirmedBlock(e, t) {
            return m(this, null, function*() {
                let n = this._buildArgsAtLeastConfirmed([e], t)
                  , s = yield this._rpcRequest("getBlock", n)
                  , o = I(s, Xh);
                if ("error"in o)
                    throw new T(o.error,"failed to get confirmed block");
                let i = o.result;
                if (!i)
                    throw new Error("Confirmed block " + e + " not found");
                let a = F(C({}, i), {
                    transactions: i.transactions.map( ({transaction: c, meta: d}) => {
                        let _ = new Ve(c.message);
                        return {
                            meta: d,
                            transaction: F(C({}, c), {
                                message: _
                            })
                        }
                    }
                    )
                });
                return F(C({}, a), {
                    transactions: a.transactions.map( ({transaction: c, meta: d}) => ({
                        meta: d,
                        transaction: j.populate(c.message, c.signatures)
                    }))
                })
            })
        }
        getBlocks(e, t, n) {
            return m(this, null, function*() {
                let s = this._buildArgsAtLeastConfirmed(t !== void 0 ? [e, t] : [e], n)
                  , o = yield this._rpcRequest("getBlocks", s)
                  , i = I(o, z(O(f())));
                if ("error"in i)
                    throw new T(i.error,"failed to get blocks");
                return i.result
            })
        }
        getBlockSignatures(e, t) {
            return m(this, null, function*() {
                let n = this._buildArgsAtLeastConfirmed([e], t, void 0, {
                    transactionDetails: "signatures",
                    rewards: !1
                })
                  , s = yield this._rpcRequest("getBlock", n)
                  , o = I(s, oi);
                if ("error"in o)
                    throw new T(o.error,"failed to get block");
                let i = o.result;
                if (!i)
                    throw new Error("Block " + e + " not found");
                return i
            })
        }
        getConfirmedBlockSignatures(e, t) {
            return m(this, null, function*() {
                let n = this._buildArgsAtLeastConfirmed([e], t, void 0, {
                    transactionDetails: "signatures",
                    rewards: !1
                })
                  , s = yield this._rpcRequest("getBlock", n)
                  , o = I(s, oi);
                if ("error"in o)
                    throw new T(o.error,"failed to get confirmed block");
                let i = o.result;
                if (!i)
                    throw new Error("Confirmed block " + e + " not found");
                return i
            })
        }
        getConfirmedTransaction(e, t) {
            return m(this, null, function*() {
                let n = this._buildArgsAtLeastConfirmed([e], t)
                  , s = yield this._rpcRequest("getTransaction", n)
                  , o = I(s, Jr);
                if ("error"in o)
                    throw new T(o.error,"failed to get transaction");
                let i = o.result;
                if (!i)
                    return i;
                let a = new Ve(i.transaction.message)
                  , c = i.transaction.signatures;
                return F(C({}, i), {
                    transaction: j.populate(a, c)
                })
            })
        }
        getParsedConfirmedTransaction(e, t) {
            return m(this, null, function*() {
                let n = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed")
                  , s = yield this._rpcRequest("getTransaction", n)
                  , o = I(s, Wn);
                if ("error"in o)
                    throw new T(o.error,"failed to get confirmed transaction");
                return o.result
            })
        }
        getParsedConfirmedTransactions(e, t) {
            return m(this, null, function*() {
                let n = e.map(i => ({
                    methodName: "getTransaction",
                    args: this._buildArgsAtLeastConfirmed([i], t, "jsonParsed")
                }));
                return (yield this._rpcBatchRequest(n)).map(i => {
                    let a = I(i, Wn);
                    if ("error"in a)
                        throw new T(a.error,"failed to get confirmed transactions");
                    return a.result
                }
                )
            })
        }
        getConfirmedSignaturesForAddress(e, t, n) {
            return m(this, null, function*() {
                let s = {}
                  , o = yield this.getFirstAvailableBlock();
                for (; !("until"in s) && (t--,
                !(t <= 0 || t < o)); )
                    try {
                        let c = yield this.getConfirmedBlockSignatures(t, "finalized");
                        c.signatures.length > 0 && (s.until = c.signatures[c.signatures.length - 1].toString())
                    } catch (c) {
                        if (c instanceof Error && c.message.includes("skipped"))
                            continue;
                        throw c
                    }
                let i = yield this.getSlot("finalized");
                for (; !("before"in s) && (n++,
                !(n > i)); )
                    try {
                        let c = yield this.getConfirmedBlockSignatures(n);
                        c.signatures.length > 0 && (s.before = c.signatures[c.signatures.length - 1].toString())
                    } catch (c) {
                        if (c instanceof Error && c.message.includes("skipped"))
                            continue;
                        throw c
                    }
                return (yield this.getConfirmedSignaturesForAddress2(e, s)).map(c => c.signature)
            })
        }
        getConfirmedSignaturesForAddress2(e, t, n) {
            return m(this, null, function*() {
                let s = this._buildArgsAtLeastConfirmed([e.toBase58()], n, void 0, t)
                  , o = yield this._rpcRequest("getConfirmedSignaturesForAddress2", s)
                  , i = I(o, wh);
                if ("error"in i)
                    throw new T(i.error,"failed to get confirmed signatures for address");
                return i.result
            })
        }
        getSignaturesForAddress(e, t, n) {
            return m(this, null, function*() {
                let s = this._buildArgsAtLeastConfirmed([e.toBase58()], n, void 0, t)
                  , o = yield this._rpcRequest("getSignaturesForAddress", s)
                  , i = I(o, Oh);
                if ("error"in i)
                    throw new T(i.error,"failed to get signatures for address");
                return i.result
            })
        }
        getAddressLookupTable(e, t) {
            return m(this, null, function*() {
                let {context: n, value: s} = yield this.getAccountInfoAndContext(e, t)
                  , o = null;
                return s !== null && (o = new Jt({
                    key: e,
                    state: Jt.deserialize(s.data)
                })),
                {
                    context: n,
                    value: o
                }
            })
        }
        getNonceAndContext(e, t) {
            return m(this, null, function*() {
                let {context: n, value: s} = yield this.getAccountInfoAndContext(e, t)
                  , o = null;
                return s !== null && (o = jn.fromAccountData(s.data)),
                {
                    context: n,
                    value: o
                }
            })
        }
        getNonce(e, t) {
            return m(this, null, function*() {
                return yield this.getNonceAndContext(e, t).then(n => n.value).catch(n => {
                    throw new Error("failed to get nonce for account " + e.toBase58() + ": " + n)
                }
                )
            })
        }
        requestAirdrop(e, t) {
            return m(this, null, function*() {
                let n = yield this._rpcRequest("requestAirdrop", [e.toBase58(), t])
                  , s = I(n, n_);
                if ("error"in s)
                    throw new T(s.error,`airdrop to ${e.toBase58()} failed`);
                return s.result
            })
        }
        _blockhashWithExpiryBlockHeight(e) {
            return m(this, null, function*() {
                if (!e) {
                    for (; this._pollingBlockhash; )
                        yield lt(100);
                    let n = Date.now() - this._blockhashInfo.lastFetch >= Ii;
                    if (this._blockhashInfo.latestBlockhash !== null && !n)
                        return this._blockhashInfo.latestBlockhash
                }
                return yield this._pollNewBlockhash()
            })
        }
        _pollNewBlockhash() {
            return m(this, null, function*() {
                this._pollingBlockhash = !0;
                try {
                    let e = Date.now()
                      , t = this._blockhashInfo.latestBlockhash
                      , n = t ? t.blockhash : null;
                    for (let s = 0; s < 50; s++) {
                        let o = yield this.getLatestBlockhash("finalized");
                        if (n !== o.blockhash)
                            return this._blockhashInfo = {
                                latestBlockhash: o,
                                lastFetch: Date.now(),
                                transactionSignatures: [],
                                simulatedSignatures: []
                            },
                            o;
                        yield lt(Si / 2)
                    }
                    throw new Error(`Unable to obtain a new blockhash after ${Date.now() - e}ms`)
                } finally {
                    this._pollingBlockhash = !1
                }
            })
        }
        getStakeMinimumDelegation(e) {
            return m(this, null, function*() {
                let {commitment: t, config: n} = J(e)
                  , s = this._buildArgs([], t, "base64", n)
                  , o = yield this._rpcRequest("getStakeMinimumDelegation", s)
                  , i = I(o, se(f()));
                if ("error"in i)
                    throw new T(i.error,"failed to get stake minimum delegation");
                return i.result
            })
        }
        simulateTransaction(e, t, n) {
            return m(this, null, function*() {
                if ("message"in e) {
                    let R = e.serialize()
                      , p = B.Buffer.from(R).toString("base64");
                    if (Array.isArray(t) || n !== void 0)
                        throw new Error("Invalid arguments");
                    let S = t || {};
                    S.encoding = "base64",
                    "commitment"in S || (S.commitment = this.commitment),
                    t && typeof t == "object" && "innerInstructions"in t && (S.innerInstructions = t.innerInstructions);
                    let N = [p, S]
                      , x = yield this._rpcRequest("simulateTransaction", N)
                      , P = I(x, ri);
                    if ("error"in P)
                        throw new Error("failed to simulate transaction: " + P.error.message);
                    return P.result
                }
                let s;
                if (e instanceof j) {
                    let g = e;
                    s = new j,
                    s.feePayer = g.feePayer,
                    s.instructions = e.instructions,
                    s.nonceInfo = g.nonceInfo,
                    s.signatures = g.signatures
                } else
                    s = j.populate(e),
                    s._message = s._json = void 0;
                if (t !== void 0 && !Array.isArray(t))
                    throw new Error("Invalid arguments");
                let o = t;
                if (s.nonceInfo && o)
                    s.sign(...o);
                else {
                    let g = this._disableBlockhashCaching;
                    for (; ; ) {
                        let R = yield this._blockhashWithExpiryBlockHeight(g);
                        if (s.lastValidBlockHeight = R.lastValidBlockHeight,
                        s.recentBlockhash = R.blockhash,
                        !o)
                            break;
                        if (s.sign(...o),
                        !s.signature)
                            throw new Error("!signature");
                        let p = s.signature.toString("base64");
                        if (!this._blockhashInfo.simulatedSignatures.includes(p) && !this._blockhashInfo.transactionSignatures.includes(p)) {
                            this._blockhashInfo.simulatedSignatures.push(p);
                            break
                        } else
                            g = !0
                    }
                }
                let i = s._compile()
                  , a = i.serialize()
                  , d = s._serialize(a).toString("base64")
                  , _ = {
                    encoding: "base64",
                    commitment: this.commitment
                };
                if (n) {
                    let g = (Array.isArray(n) ? n : i.nonProgramIds()).map(R => R.toBase58());
                    _.accounts = {
                        encoding: "base64",
                        addresses: g
                    }
                }
                o && (_.sigVerify = !0),
                t && typeof t == "object" && "innerInstructions"in t && (_.innerInstructions = t.innerInstructions);
                let y = [d, _]
                  , A = yield this._rpcRequest("simulateTransaction", y)
                  , h = I(A, ri);
                if ("error"in h) {
                    let g;
                    if ("data"in h.error && (g = h.error.data.logs,
                    g && Array.isArray(g))) {
                        let R = `
    `
                          , p = R + g.join(R);
                        console.error(h.error.message, p)
                    }
                    throw new pt({
                        action: "simulate",
                        signature: "",
                        transactionMessage: h.error.message,
                        logs: g
                    })
                }
                return h.result
            })
        }
        sendTransaction(e, t, n) {
            return m(this, null, function*() {
                if ("version"in e) {
                    if (t && Array.isArray(t))
                        throw new Error("Invalid arguments");
                    let i = e.serialize();
                    return yield this.sendRawTransaction(i, t)
                }
                if (t === void 0 || !Array.isArray(t))
                    throw new Error("Invalid arguments");
                let s = t;
                if (e.nonceInfo)
                    e.sign(...s);
                else {
                    let i = this._disableBlockhashCaching;
                    for (; ; ) {
                        let a = yield this._blockhashWithExpiryBlockHeight(i);
                        if (e.lastValidBlockHeight = a.lastValidBlockHeight,
                        e.recentBlockhash = a.blockhash,
                        e.sign(...s),
                        !e.signature)
                            throw new Error("!signature");
                        let c = e.signature.toString("base64");
                        if (this._blockhashInfo.transactionSignatures.includes(c))
                            i = !0;
                        else {
                            this._blockhashInfo.transactionSignatures.push(c);
                            break
                        }
                    }
                }
                let o = e.serialize();
                return yield this.sendRawTransaction(o, n)
            })
        }
        sendRawTransaction(e, t) {
            return m(this, null, function*() {
                let n = M(e).toString("base64");
                return yield this.sendEncodedTransaction(n, t)
            })
        }
        sendEncodedTransaction(e, t) {
            return m(this, null, function*() {
                let n = {
                    encoding: "base64"
                }
                  , s = t && t.skipPreflight
                  , o = s === !0 ? "processed" : t && t.preflightCommitment || this.commitment;
                t && t.maxRetries != null && (n.maxRetries = t.maxRetries),
                t && t.minContextSlot != null && (n.minContextSlot = t.minContextSlot),
                s && (n.skipPreflight = s),
                o && (n.preflightCommitment = o);
                let i = [e, n]
                  , a = yield this._rpcRequest("sendTransaction", i)
                  , c = I(a, r_);
                if ("error"in c) {
                    let d;
                    throw "data"in c.error && (d = c.error.data.logs),
                    new pt({
                        action: s ? "send" : "simulate",
                        signature: "",
                        transactionMessage: c.error.message,
                        logs: d
                    })
                }
                return c.result
            })
        }
        _wsOnOpen() {
            this._rpcWebSocketConnected = !0,
            this._rpcWebSocketHeartbeat = setInterval( () => {
                m(this, null, function*() {
                    try {
                        yield this._rpcWebSocket.notify("ping")
                    } catch {}
                })
            }
            , 5e3),
            this._updateSubscriptions()
        }
        _wsOnError(e) {
            this._rpcWebSocketConnected = !1,
            console.error("ws error:", e.message)
        }
        _wsOnClose(e) {
            if (this._rpcWebSocketConnected = !1,
            this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER,
            this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout),
            this._rpcWebSocketIdleTimeout = null),
            this._rpcWebSocketHeartbeat && (clearInterval(this._rpcWebSocketHeartbeat),
            this._rpcWebSocketHeartbeat = null),
            e === 1e3) {
                this._updateSubscriptions();
                return
            }
            this._subscriptionCallbacksByServerSubscriptionId = {},
            Object.entries(this._subscriptionsByHash).forEach( ([t,n]) => {
                this._setSubscription(t, F(C({}, n), {
                    state: "pending"
                }))
            }
            )
        }
        _setSubscription(e, t) {
            let n = this._subscriptionsByHash[e]?.state;
            if (this._subscriptionsByHash[e] = t,
            n !== t.state) {
                let s = this._subscriptionStateChangeCallbacksByHash[e];
                s && s.forEach(o => {
                    try {
                        o(t.state)
                    } catch {}
                }
                )
            }
        }
        _onSubscriptionStateChange(e, t) {
            let n = this._subscriptionHashByClientSubscriptionId[e];
            if (n == null)
                return () => {}
                ;
            let s = this._subscriptionStateChangeCallbacksByHash[n] ||= new Set;
            return s.add(t),
            () => {
                s.delete(t),
                s.size === 0 && delete this._subscriptionStateChangeCallbacksByHash[n]
            }
        }
        _updateSubscriptions() {
            return m(this, null, function*() {
                if (Object.keys(this._subscriptionsByHash).length === 0) {
                    this._rpcWebSocketConnected && (this._rpcWebSocketConnected = !1,
                    this._rpcWebSocketIdleTimeout = setTimeout( () => {
                        this._rpcWebSocketIdleTimeout = null;
                        try {
                            this._rpcWebSocket.close()
                        } catch (n) {
                            n instanceof Error && console.log(`Error when closing socket connection: ${n.message}`)
                        }
                    }
                    , 500));
                    return
                }
                if (this._rpcWebSocketIdleTimeout !== null && (clearTimeout(this._rpcWebSocketIdleTimeout),
                this._rpcWebSocketIdleTimeout = null,
                this._rpcWebSocketConnected = !0),
                !this._rpcWebSocketConnected) {
                    this._rpcWebSocket.connect();
                    return
                }
                let e = this._rpcWebSocketGeneration
                  , t = () => e === this._rpcWebSocketGeneration;
                yield Promise.all(Object.keys(this._subscriptionsByHash).map(n => m(this, null, function*() {
                    let s = this._subscriptionsByHash[n];
                    if (s !== void 0)
                        switch (s.state) {
                        case "pending":
                        case "unsubscribed":
                            if (s.callbacks.size === 0) {
                                delete this._subscriptionsByHash[n],
                                s.state === "unsubscribed" && delete this._subscriptionCallbacksByServerSubscriptionId[s.serverSubscriptionId],
                                yield this._updateSubscriptions();
                                return
                            }
                            yield m(this, null, function*() {
                                let {args: o, method: i} = s;
                                try {
                                    this._setSubscription(n, F(C({}, s), {
                                        state: "subscribing"
                                    }));
                                    let a = yield this._rpcWebSocket.call(i, o);
                                    this._setSubscription(n, F(C({}, s), {
                                        serverSubscriptionId: a,
                                        state: "subscribed"
                                    })),
                                    this._subscriptionCallbacksByServerSubscriptionId[a] = s.callbacks,
                                    yield this._updateSubscriptions()
                                } catch (a) {
                                    if (console.error(`Received ${ainstanceof Error ? "" : "JSON-RPC "}error calling \`${i}\``, {
                                        args: o,
                                        error: a
                                    }),
                                    !t())
                                        return;
                                    this._setSubscription(n, F(C({}, s), {
                                        state: "pending"
                                    })),
                                    yield this._updateSubscriptions()
                                }
                            });
                            break;
                        case "subscribed":
                            s.callbacks.size === 0 && (yield m(this, null, function*() {
                                let {serverSubscriptionId: o, unsubscribeMethod: i} = s;
                                if (this._subscriptionsAutoDisposedByRpc.has(o))
                                    this._subscriptionsAutoDisposedByRpc.delete(o);
                                else {
                                    this._setSubscription(n, F(C({}, s), {
                                        state: "unsubscribing"
                                    })),
                                    this._setSubscription(n, F(C({}, s), {
                                        state: "unsubscribing"
                                    }));
                                    try {
                                        yield this._rpcWebSocket.call(i, [o])
                                    } catch (a) {
                                        if (a instanceof Error && console.error(`${i} error:`, a.message),
                                        !t())
                                            return;
                                        this._setSubscription(n, F(C({}, s), {
                                            state: "subscribed"
                                        })),
                                        yield this._updateSubscriptions();
                                        return
                                    }
                                }
                                this._setSubscription(n, F(C({}, s), {
                                    state: "unsubscribed"
                                })),
                                yield this._updateSubscriptions()
                            }));
                            break
                        }
                })))
            })
        }
        _handleServerNotification(e, t) {
            let n = this._subscriptionCallbacksByServerSubscriptionId[e];
            n !== void 0 && n.forEach(s => {
                try {
                    s(...t)
                } catch (o) {
                    console.error(o)
                }
            }
            )
        }
        _wsOnAccountNotification(e) {
            let {result: t, subscription: n} = I(e, kh);
            this._handleServerNotification(n, [t.value, t.context])
        }
        _makeSubscription(e, t) {
            let n = this._nextClientSubscriptionId++
              , s = ei([e.method, t])
              , o = this._subscriptionsByHash[s];
            return o === void 0 ? this._subscriptionsByHash[s] = F(C({}, e), {
                args: t,
                callbacks: new Set([e.callback]),
                state: "pending"
            }) : o.callbacks.add(e.callback),
            this._subscriptionHashByClientSubscriptionId[n] = s,
            this._subscriptionDisposeFunctionsByClientSubscriptionId[n] = () => m(this, null, function*() {
                delete this._subscriptionDisposeFunctionsByClientSubscriptionId[n],
                delete this._subscriptionHashByClientSubscriptionId[n];
                let i = this._subscriptionsByHash[s];
                V(i !== void 0, `Could not find a \`Subscription\` when tearing down client subscription #${n}`),
                i.callbacks.delete(e.callback),
                yield this._updateSubscriptions()
            }),
            this._updateSubscriptions(),
            n
        }
        onAccountChange(e, t, n) {
            let {commitment: s, config: o} = J(n)
              , i = this._buildArgs([e.toBase58()], s || this._commitment || "finalized", "base64", o);
            return this._makeSubscription({
                callback: t,
                method: "accountSubscribe",
                unsubscribeMethod: "accountUnsubscribe"
            }, i)
        }
        removeAccountChangeListener(e) {
            return m(this, null, function*() {
                yield this._unsubscribeClientSubscription(e, "account change")
            })
        }
        _wsOnProgramAccountNotification(e) {
            let {result: t, subscription: n} = I(e, Th);
            this._handleServerNotification(n, [{
                accountId: t.value.pubkey,
                accountInfo: t.value.account
            }, t.context])
        }
        onProgramAccountChange(e, t, n, s) {
            let {commitment: o, config: i} = J(n)
              , a = this._buildArgs([e.toBase58()], o || this._commitment || "finalized", "base64", i || (s ? {
                filters: ni(s)
            } : void 0));
            return this._makeSubscription({
                callback: t,
                method: "programSubscribe",
                unsubscribeMethod: "programUnsubscribe"
            }, a)
        }
        removeProgramAccountChangeListener(e) {
            return m(this, null, function*() {
                yield this._unsubscribeClientSubscription(e, "program account change")
            })
        }
        onLogs(e, t, n) {
            let s = this._buildArgs([typeof e == "object" ? {
                mentions: [e.toString()]
            } : e], n || this._commitment || "finalized");
            return this._makeSubscription({
                callback: t,
                method: "logsSubscribe",
                unsubscribeMethod: "logsUnsubscribe"
            }, s)
        }
        removeOnLogsListener(e) {
            return m(this, null, function*() {
                yield this._unsubscribeClientSubscription(e, "logs")
            })
        }
        _wsOnLogsNotification(e) {
            let {result: t, subscription: n} = I(e, o_);
            this._handleServerNotification(n, [t.value, t.context])
        }
        _wsOnSlotNotification(e) {
            let {result: t, subscription: n} = I(e, vh);
            this._handleServerNotification(n, [t])
        }
        onSlotChange(e) {
            return this._makeSubscription({
                callback: e,
                method: "slotSubscribe",
                unsubscribeMethod: "slotUnsubscribe"
            }, [])
        }
        removeSlotChangeListener(e) {
            return m(this, null, function*() {
                yield this._unsubscribeClientSubscription(e, "slot change")
            })
        }
        _wsOnSlotUpdatesNotification(e) {
            let {result: t, subscription: n} = I(e, Bh);
            this._handleServerNotification(n, [t])
        }
        onSlotUpdate(e) {
            return this._makeSubscription({
                callback: e,
                method: "slotsUpdatesSubscribe",
                unsubscribeMethod: "slotsUpdatesUnsubscribe"
            }, [])
        }
        removeSlotUpdateListener(e) {
            return m(this, null, function*() {
                yield this._unsubscribeClientSubscription(e, "slot update")
            })
        }
        _unsubscribeClientSubscription(e, t) {
            return m(this, null, function*() {
                let n = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
                n ? yield n() : console.warn(`Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`)
            })
        }
        _buildArgs(e, t, n, s) {
            let o = t || this._commitment;
            if (o || n || s) {
                let i = {};
                n && (i.encoding = n),
                o && (i.commitment = o),
                s && (i = Object.assign(i, s)),
                e.push(i)
            }
            return e
        }
        _buildArgsAtLeastConfirmed(e, t, n, s) {
            let o = t || this._commitment;
            if (o && !["confirmed", "finalized"].includes(o))
                throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
            return this._buildArgs(e, t, n, s)
        }
        _wsOnSignatureNotification(e) {
            let {result: t, subscription: n} = I(e, xh);
            t.value !== "receivedSignature" && this._subscriptionsAutoDisposedByRpc.add(n),
            this._handleServerNotification(n, t.value === "receivedSignature" ? [{
                type: "received"
            }, t.context] : [{
                type: "status",
                result: t.value
            }, t.context])
        }
        onSignature(e, t, n) {
            let s = this._buildArgs([e], n || this._commitment || "finalized")
              , o = this._makeSubscription({
                callback: (i, a) => {
                    if (i.type === "status") {
                        t(i.result, a);
                        try {
                            this.removeSignatureListener(o)
                        } catch {}
                    }
                }
                ,
                method: "signatureSubscribe",
                unsubscribeMethod: "signatureUnsubscribe"
            }, s);
            return o
        }
        onSignatureWithOptions(e, t, n) {
            let c = F(C({}, n), {
                commitment: n && n.commitment || this._commitment || "finalized"
            })
              , {commitment: s} = c
              , o = ve(c, ["commitment"])
              , i = this._buildArgs([e], s, void 0, o)
              , a = this._makeSubscription({
                callback: (d, _) => {
                    t(d, _);
                    try {
                        this.removeSignatureListener(a)
                    } catch {}
                }
                ,
                method: "signatureSubscribe",
                unsubscribeMethod: "signatureUnsubscribe"
            }, i);
            return a
        }
        removeSignatureListener(e) {
            return m(this, null, function*() {
                yield this._unsubscribeClientSubscription(e, "signature result")
            })
        }
        _wsOnRootNotification(e) {
            let {result: t, subscription: n} = I(e, Ph);
            this._handleServerNotification(n, [t])
        }
        onRootChange(e) {
            return this._makeSubscription({
                callback: e,
                method: "rootSubscribe",
                unsubscribeMethod: "rootUnsubscribe"
            }, [])
        }
        removeRootChangeListener(e) {
            return m(this, null, function*() {
                yield this._unsubscribeClientSubscription(e, "root change")
            })
        }
    }
    ,
    Jn = class r {
        constructor(e) {
            this._keypair = void 0,
            this._keypair = e ?? Xo()
        }
        static generate() {
            return new r(Xo())
        }
        static fromSecretKey(e, t) {
            if (e.byteLength !== 64)
                throw new Error("bad secret key size");
            let n = e.slice(32, 64);
            if (!t || !t.skipValidation) {
                let s = e.slice(0, 32)
                  , o = qn(s);
                for (let i = 0; i < 32; i++)
                    if (n[i] !== o[i])
                        throw new Error("provided secretKey is invalid")
            }
            return new r({
                publicKey: n,
                secretKey: e
            })
        }
        static fromSeed(e) {
            let t = qn(e)
              , n = new Uint8Array(64);
            return n.set(e),
            n.set(t, 32),
            new r({
                publicKey: t,
                secretKey: n
            })
        }
        get publicKey() {
            return new w(this._keypair.publicKey)
        }
        get secretKey() {
            return new Uint8Array(this._keypair.secretKey)
        }
    }
    ,
    Xe = Object.freeze({
        CreateLookupTable: {
            index: 0,
            layout: u.struct([u.u32("instruction"), Nt("recentSlot"), u.u8("bumpSeed")])
        },
        FreezeLookupTable: {
            index: 1,
            layout: u.struct([u.u32("instruction")])
        },
        ExtendLookupTable: {
            index: 2,
            layout: u.struct([u.u32("instruction"), Nt(), u.seq(K(), u.offset(u.u32(), -8), "addresses")])
        },
        DeactivateLookupTable: {
            index: 3,
            layout: u.struct([u.u32("instruction")])
        },
        CloseLookupTable: {
            index: 4,
            layout: u.struct([u.u32("instruction")])
        }
    }),
    ps = class {
        constructor() {}
        static decodeInstructionType(e) {
            this.checkProgramId(e.programId);
            let n = u.u32("instruction").decode(e.data), s;
            for (let[o,i] of Object.entries(Xe))
                if (i.index == n) {
                    s = o;
                    break
                }
            if (!s)
                throw new Error("Invalid Instruction. Should be a LookupTable Instruction");
            return s
        }
        static decodeCreateLookupTable(e) {
            this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 4);
            let {recentSlot: t} = H(Xe.CreateLookupTable, e.data);
            return {
                authority: e.keys[1].pubkey,
                payer: e.keys[2].pubkey,
                recentSlot: Number(t)
            }
        }
        static decodeExtendLookupTable(e) {
            if (this.checkProgramId(e.programId),
            e.keys.length < 2)
                throw new Error(`invalid instruction; found ${e.keys.length} keys, expected at least 2`);
            let {addresses: t} = H(Xe.ExtendLookupTable, e.data);
            return {
                lookupTable: e.keys[0].pubkey,
                authority: e.keys[1].pubkey,
                payer: e.keys.length > 2 ? e.keys[2].pubkey : void 0,
                addresses: t.map(n => new w(n))
            }
        }
        static decodeCloseLookupTable(e) {
            return this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 3),
            {
                lookupTable: e.keys[0].pubkey,
                authority: e.keys[1].pubkey,
                recipient: e.keys[2].pubkey
            }
        }
        static decodeFreezeLookupTable(e) {
            return this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 2),
            {
                lookupTable: e.keys[0].pubkey,
                authority: e.keys[1].pubkey
            }
        }
        static decodeDeactivateLookupTable(e) {
            return this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 2),
            {
                lookupTable: e.keys[0].pubkey,
                authority: e.keys[1].pubkey
            }
        }
        static checkProgramId(e) {
            if (!e.equals(Qt.programId))
                throw new Error("invalid instruction; programId is not AddressLookupTable Program")
        }
        static checkKeysLength(e, t) {
            if (e.length < t)
                throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
        }
    }
    ,
    Qt = class {
        constructor() {}
        static createLookupTable(e) {
            let[t,n] = w.findProgramAddressSync([e.authority.toBuffer(), Br().encode(e.recentSlot)], this.programId)
              , s = Xe.CreateLookupTable
              , o = $(s, {
                recentSlot: BigInt(e.recentSlot),
                bumpSeed: n
            })
              , i = [{
                pubkey: t,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.authority,
                isSigner: !0,
                isWritable: !1
            }, {
                pubkey: e.payer,
                isSigner: !0,
                isWritable: !0
            }, {
                pubkey: fe.programId,
                isSigner: !1,
                isWritable: !1
            }];
            return [new Y({
                programId: this.programId,
                keys: i,
                data: o
            }), t]
        }
        static freezeLookupTable(e) {
            let t = Xe.FreezeLookupTable
              , n = $(t)
              , s = [{
                pubkey: e.lookupTable,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.authority,
                isSigner: !0,
                isWritable: !1
            }];
            return new Y({
                programId: this.programId,
                keys: s,
                data: n
            })
        }
        static extendLookupTable(e) {
            let t = Xe.ExtendLookupTable
              , n = $(t, {
                addresses: e.addresses.map(o => o.toBytes())
            })
              , s = [{
                pubkey: e.lookupTable,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.authority,
                isSigner: !0,
                isWritable: !1
            }];
            return e.payer && s.push({
                pubkey: e.payer,
                isSigner: !0,
                isWritable: !0
            }, {
                pubkey: fe.programId,
                isSigner: !1,
                isWritable: !1
            }),
            new Y({
                programId: this.programId,
                keys: s,
                data: n
            })
        }
        static deactivateLookupTable(e) {
            let t = Xe.DeactivateLookupTable
              , n = $(t)
              , s = [{
                pubkey: e.lookupTable,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.authority,
                isSigner: !0,
                isWritable: !1
            }];
            return new Y({
                programId: this.programId,
                keys: s,
                data: n
            })
        }
        static closeLookupTable(e) {
            let t = Xe.CloseLookupTable
              , n = $(t)
              , s = [{
                pubkey: e.lookupTable,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: e.authority,
                isSigner: !0,
                isWritable: !1
            }, {
                pubkey: e.recipient,
                isSigner: !1,
                isWritable: !0
            }];
            return new Y({
                programId: this.programId,
                keys: s,
                data: n
            })
        }
    }
    ;
    Qt.programId = new w("AddressLookupTab1e1111111111111111111111111");
    ys = class {
        constructor() {}
        static decodeInstructionType(e) {
            this.checkProgramId(e.programId);
            let n = u.u8("instruction").decode(e.data), s;
            for (let[o,i] of Object.entries(Ke))
                if (i.index == n) {
                    s = o;
                    break
                }
            if (!s)
                throw new Error("Instruction type incorrect; not a ComputeBudgetInstruction");
            return s
        }
        static decodeRequestUnits(e) {
            this.checkProgramId(e.programId);
            let {units: t, additionalFee: n} = H(Ke.RequestUnits, e.data);
            return {
                units: t,
                additionalFee: n
            }
        }
        static decodeRequestHeapFrame(e) {
            this.checkProgramId(e.programId);
            let {bytes: t} = H(Ke.RequestHeapFrame, e.data);
            return {
                bytes: t
            }
        }
        static decodeSetComputeUnitLimit(e) {
            this.checkProgramId(e.programId);
            let {units: t} = H(Ke.SetComputeUnitLimit, e.data);
            return {
                units: t
            }
        }
        static decodeSetComputeUnitPrice(e) {
            this.checkProgramId(e.programId);
            let {microLamports: t} = H(Ke.SetComputeUnitPrice, e.data);
            return {
                microLamports: t
            }
        }
        static checkProgramId(e) {
            if (!e.equals(en.programId))
                throw new Error("invalid instruction; programId is not ComputeBudgetProgram")
        }
    }
    ,
    Ke = Object.freeze({
        RequestUnits: {
            index: 0,
            layout: u.struct([u.u8("instruction"), u.u32("units"), u.u32("additionalFee")])
        },
        RequestHeapFrame: {
            index: 1,
            layout: u.struct([u.u8("instruction"), u.u32("bytes")])
        },
        SetComputeUnitLimit: {
            index: 2,
            layout: u.struct([u.u8("instruction"), u.u32("units")])
        },
        SetComputeUnitPrice: {
            index: 3,
            layout: u.struct([u.u8("instruction"), Nt("microLamports")])
        }
    }),
    en = class {
        constructor() {}
        static requestUnits(e) {
            let t = Ke.RequestUnits
              , n = $(t, e);
            return new Y({
                keys: [],
                programId: this.programId,
                data: n
            })
        }
        static requestHeapFrame(e) {
            let t = Ke.RequestHeapFrame
              , n = $(t, e);
            return new Y({
                keys: [],
                programId: this.programId,
                data: n
            })
        }
        static setComputeUnitLimit(e) {
            let t = Ke.SetComputeUnitLimit
              , n = $(t, e);
            return new Y({
                keys: [],
                programId: this.programId,
                data: n
            })
        }
        static setComputeUnitPrice(e) {
            let t = Ke.SetComputeUnitPrice
              , n = $(t, {
                microLamports: BigInt(e.microLamports)
            });
            return new Y({
                keys: [],
                programId: this.programId,
                data: n
            })
        }
    }
    ;
    en.programId = new w("ComputeBudget111111111111111111111111111111");
    ii = 64,
    ai = 32,
    ci = 64,
    ui = u.struct([u.u8("numSignatures"), u.u8("padding"), u.u16("signatureOffset"), u.u16("signatureInstructionIndex"), u.u16("publicKeyOffset"), u.u16("publicKeyInstructionIndex"), u.u16("messageDataOffset"), u.u16("messageDataSize"), u.u16("messageInstructionIndex")]),
    Zn = class r {
        constructor() {}
        static createInstructionWithPublicKey(e) {
            let {publicKey: t, message: n, signature: s, instructionIndex: o} = e;
            V(t.length === ai, `Public Key must be ${ai} bytes but received ${t.length} bytes`),
            V(s.length === ci, `Signature must be ${ci} bytes but received ${s.length} bytes`);
            let i = ui.span
              , a = i + t.length
              , c = a + s.length
              , d = 1
              , _ = B.Buffer.alloc(c + n.length)
              , y = o ?? 65535;
            return ui.encode({
                numSignatures: d,
                padding: 0,
                signatureOffset: a,
                signatureInstructionIndex: y,
                publicKeyOffset: i,
                publicKeyInstructionIndex: y,
                messageDataOffset: c,
                messageDataSize: n.length,
                messageInstructionIndex: y
            }, _),
            _.fill(t, i),
            _.fill(s, a),
            _.fill(n, c),
            new Y({
                keys: [],
                programId: r.programId,
                data: _
            })
        }
        static createInstructionWithPrivateKey(e) {
            let {privateKey: t, message: n, instructionIndex: s} = e;
            V(t.length === ii, `Private key must be ${ii} bytes but received ${t.length} bytes`);
            try {
                let o = Jn.fromSecretKey(t)
                  , i = o.publicKey.toBytes()
                  , a = bs(n, o.secretKey);
                return this.createInstructionWithPublicKey({
                    publicKey: i,
                    message: n,
                    signature: a,
                    instructionIndex: s
                })
            } catch (o) {
                throw new Error(`Error creating instruction; ${o}`)
            }
        }
    }
    ;
    Zn.programId = new w("Ed25519SigVerify111111111111111111111111111");
    a_ = (r, e) => {
        let t = sn.sign(r, e);
        return [t.toCompactRawBytes(), t.recovery]
    }
    ;
    sn.utils.isValidPrivateKey;
    c_ = sn.getPublicKey,
    di = 32,
    Zr = 20,
    fi = 64,
    u_ = 11,
    Qr = u.struct([u.u8("numSignatures"), u.u16("signatureOffset"), u.u8("signatureInstructionIndex"), u.u16("ethAddressOffset"), u.u8("ethAddressInstructionIndex"), u.u16("messageDataOffset"), u.u16("messageDataSize"), u.u8("messageInstructionIndex"), u.blob(20, "ethAddress"), u.blob(64, "signature"), u.u8("recoveryId")]),
    Qn = class r {
        constructor() {}
        static publicKeyToEthAddress(e) {
            V(e.length === fi, `Public key must be ${fi} bytes but received ${e.length} bytes`);
            try {
                return B.Buffer.from(dr(M(e))).slice(-Zr)
            } catch (t) {
                throw new Error(`Error constructing Ethereum address: ${t}`)
            }
        }
        static createInstructionWithPublicKey(e) {
            let {publicKey: t, message: n, signature: s, recoveryId: o, instructionIndex: i} = e;
            return r.createInstructionWithEthAddress({
                ethAddress: r.publicKeyToEthAddress(t),
                message: n,
                signature: s,
                recoveryId: o,
                instructionIndex: i
            })
        }
        static createInstructionWithEthAddress(e) {
            let {ethAddress: t, message: n, signature: s, recoveryId: o, instructionIndex: i=0} = e, a;
            typeof t == "string" ? t.startsWith("0x") ? a = B.Buffer.from(t.substr(2), "hex") : a = B.Buffer.from(t, "hex") : a = t,
            V(a.length === Zr, `Address must be ${Zr} bytes but received ${a.length} bytes`);
            let c = 1 + u_
              , d = c
              , _ = c + a.length
              , y = _ + s.length + 1
              , A = 1
              , h = B.Buffer.alloc(Qr.span + n.length);
            return Qr.encode({
                numSignatures: A,
                signatureOffset: _,
                signatureInstructionIndex: i,
                ethAddressOffset: d,
                ethAddressInstructionIndex: i,
                messageDataOffset: y,
                messageDataSize: n.length,
                messageInstructionIndex: i,
                signature: M(s),
                ethAddress: M(a),
                recoveryId: o
            }, h),
            h.fill(M(n), Qr.span),
            new Y({
                keys: [],
                programId: r.programId,
                data: h
            })
        }
        static createInstructionWithPrivateKey(e) {
            let {privateKey: t, message: n, instructionIndex: s} = e;
            V(t.length === di, `Private key must be ${di} bytes but received ${t.length} bytes`);
            try {
                let o = M(t)
                  , i = c_(o, !1).slice(1)
                  , a = B.Buffer.from(dr(M(n)))
                  , [c,d] = a_(a, o);
                return this.createInstructionWithPublicKey({
                    publicKey: i,
                    message: n,
                    signature: c,
                    recoveryId: d,
                    instructionIndex: s
                })
            } catch (o) {
                throw new Error(`Error creating instruction; ${o}`)
            }
        }
    }
    ;
    Qn.programId = new w("KeccakSecp256k11111111111111111111111111111");
    Pi = new w("StakeConfig11111111111111111111111111111111"),
    er = class {
        constructor(e, t) {
            this.staker = void 0,
            this.withdrawer = void 0,
            this.staker = e,
            this.withdrawer = t
        }
    }
    ,
    yt = class {
        constructor(e, t, n) {
            this.unixTimestamp = void 0,
            this.epoch = void 0,
            this.custodian = void 0,
            this.unixTimestamp = e,
            this.epoch = t,
            this.custodian = n
        }
    }
    ;
    xi = yt;
    yt.default = new xi(0,0,w.default);
    gs = class {
        constructor() {}
        static decodeInstructionType(e) {
            this.checkProgramId(e.programId);
            let n = u.u32("instruction").decode(e.data), s;
            for (let[o,i] of Object.entries(ae))
                if (i.index == n) {
                    s = o;
                    break
                }
            if (!s)
                throw new Error("Instruction type incorrect; not a StakeInstruction");
            return s
        }
        static decodeInitialize(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 2);
            let {authorized: t, lockup: n} = H(ae.Initialize, e.data);
            return {
                stakePubkey: e.keys[0].pubkey,
                authorized: new er(new w(t.staker),new w(t.withdrawer)),
                lockup: new yt(n.unixTimestamp,n.epoch,new w(n.custodian))
            }
        }
        static decodeDelegate(e) {
            return this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 6),
            H(ae.Delegate, e.data),
            {
                stakePubkey: e.keys[0].pubkey,
                votePubkey: e.keys[1].pubkey,
                authorizedPubkey: e.keys[5].pubkey
            }
        }
        static decodeAuthorize(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3);
            let {newAuthorized: t, stakeAuthorizationType: n} = H(ae.Authorize, e.data)
              , s = {
                stakePubkey: e.keys[0].pubkey,
                authorizedPubkey: e.keys[2].pubkey,
                newAuthorizedPubkey: new w(t),
                stakeAuthorizationType: {
                    index: n
                }
            };
            return e.keys.length > 3 && (s.custodianPubkey = e.keys[3].pubkey),
            s
        }
        static decodeAuthorizeWithSeed(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 2);
            let {newAuthorized: t, stakeAuthorizationType: n, authoritySeed: s, authorityOwner: o} = H(ae.AuthorizeWithSeed, e.data)
              , i = {
                stakePubkey: e.keys[0].pubkey,
                authorityBase: e.keys[1].pubkey,
                authoritySeed: s,
                authorityOwner: new w(o),
                newAuthorizedPubkey: new w(t),
                stakeAuthorizationType: {
                    index: n
                }
            };
            return e.keys.length > 3 && (i.custodianPubkey = e.keys[3].pubkey),
            i
        }
        static decodeSplit(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3);
            let {lamports: t} = H(ae.Split, e.data);
            return {
                stakePubkey: e.keys[0].pubkey,
                splitStakePubkey: e.keys[1].pubkey,
                authorizedPubkey: e.keys[2].pubkey,
                lamports: t
            }
        }
        static decodeMerge(e) {
            return this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3),
            H(ae.Merge, e.data),
            {
                stakePubkey: e.keys[0].pubkey,
                sourceStakePubKey: e.keys[1].pubkey,
                authorizedPubkey: e.keys[4].pubkey
            }
        }
        static decodeWithdraw(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 5);
            let {lamports: t} = H(ae.Withdraw, e.data)
              , n = {
                stakePubkey: e.keys[0].pubkey,
                toPubkey: e.keys[1].pubkey,
                authorizedPubkey: e.keys[4].pubkey,
                lamports: t
            };
            return e.keys.length > 5 && (n.custodianPubkey = e.keys[5].pubkey),
            n
        }
        static decodeDeactivate(e) {
            return this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3),
            H(ae.Deactivate, e.data),
            {
                stakePubkey: e.keys[0].pubkey,
                authorizedPubkey: e.keys[2].pubkey
            }
        }
        static checkProgramId(e) {
            if (!e.equals(Tt.programId))
                throw new Error("invalid instruction; programId is not StakeProgram")
        }
        static checkKeyLength(e, t) {
            if (e.length < t)
                throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
        }
    }
    ,
    ae = Object.freeze({
        Initialize: {
            index: 0,
            layout: u.struct([u.u32("instruction"), Sl(), bl()])
        },
        Authorize: {
            index: 1,
            layout: u.struct([u.u32("instruction"), K("newAuthorized"), u.u32("stakeAuthorizationType")])
        },
        Delegate: {
            index: 2,
            layout: u.struct([u.u32("instruction")])
        },
        Split: {
            index: 3,
            layout: u.struct([u.u32("instruction"), u.ns64("lamports")])
        },
        Withdraw: {
            index: 4,
            layout: u.struct([u.u32("instruction"), u.ns64("lamports")])
        },
        Deactivate: {
            index: 5,
            layout: u.struct([u.u32("instruction")])
        },
        Merge: {
            index: 7,
            layout: u.struct([u.u32("instruction")])
        },
        AuthorizeWithSeed: {
            index: 8,
            layout: u.struct([u.u32("instruction"), K("newAuthorized"), u.u32("stakeAuthorizationType"), ht("authoritySeed"), K("authorityOwner")])
        }
    }),
    d_ = Object.freeze({
        Staker: {
            index: 0
        },
        Withdrawer: {
            index: 1
        }
    }),
    Tt = class {
        constructor() {}
        static initialize(e) {
            let {stakePubkey: t, authorized: n, lockup: s} = e
              , o = s || yt.default
              , i = ae.Initialize
              , a = $(i, {
                authorized: {
                    staker: M(n.staker.toBuffer()),
                    withdrawer: M(n.withdrawer.toBuffer())
                },
                lockup: {
                    unixTimestamp: o.unixTimestamp,
                    epoch: o.epoch,
                    custodian: M(o.custodian.toBuffer())
                }
            })
              , c = {
                keys: [{
                    pubkey: t,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: kt,
                    isSigner: !1,
                    isWritable: !1
                }],
                programId: this.programId,
                data: a
            };
            return new Y(c)
        }
        static createAccountWithSeed(e) {
            let t = new j;
            t.add(fe.createAccountWithSeed({
                fromPubkey: e.fromPubkey,
                newAccountPubkey: e.stakePubkey,
                basePubkey: e.basePubkey,
                seed: e.seed,
                lamports: e.lamports,
                space: this.space,
                programId: this.programId
            }));
            let {stakePubkey: n, authorized: s, lockup: o} = e;
            return t.add(this.initialize({
                stakePubkey: n,
                authorized: s,
                lockup: o
            }))
        }
        static createAccount(e) {
            let t = new j;
            t.add(fe.createAccount({
                fromPubkey: e.fromPubkey,
                newAccountPubkey: e.stakePubkey,
                lamports: e.lamports,
                space: this.space,
                programId: this.programId
            }));
            let {stakePubkey: n, authorized: s, lockup: o} = e;
            return t.add(this.initialize({
                stakePubkey: n,
                authorized: s,
                lockup: o
            }))
        }
        static delegate(e) {
            let {stakePubkey: t, authorizedPubkey: n, votePubkey: s} = e
              , o = ae.Delegate
              , i = $(o);
            return new j().add({
                keys: [{
                    pubkey: t,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: s,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: Me,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: Gn,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: Pi,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: n,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: i
            })
        }
        static authorize(e) {
            let {stakePubkey: t, authorizedPubkey: n, newAuthorizedPubkey: s, stakeAuthorizationType: o, custodianPubkey: i} = e
              , a = ae.Authorize
              , c = $(a, {
                newAuthorized: M(s.toBuffer()),
                stakeAuthorizationType: o.index
            })
              , d = [{
                pubkey: t,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: Me,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: n,
                isSigner: !0,
                isWritable: !1
            }];
            return i && d.push({
                pubkey: i,
                isSigner: !0,
                isWritable: !1
            }),
            new j().add({
                keys: d,
                programId: this.programId,
                data: c
            })
        }
        static authorizeWithSeed(e) {
            let {stakePubkey: t, authorityBase: n, authoritySeed: s, authorityOwner: o, newAuthorizedPubkey: i, stakeAuthorizationType: a, custodianPubkey: c} = e
              , d = ae.AuthorizeWithSeed
              , _ = $(d, {
                newAuthorized: M(i.toBuffer()),
                stakeAuthorizationType: a.index,
                authoritySeed: s,
                authorityOwner: M(o.toBuffer())
            })
              , y = [{
                pubkey: t,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: n,
                isSigner: !0,
                isWritable: !1
            }, {
                pubkey: Me,
                isSigner: !1,
                isWritable: !1
            }];
            return c && y.push({
                pubkey: c,
                isSigner: !0,
                isWritable: !1
            }),
            new j().add({
                keys: y,
                programId: this.programId,
                data: _
            })
        }
        static splitInstruction(e) {
            let {stakePubkey: t, authorizedPubkey: n, splitStakePubkey: s, lamports: o} = e
              , i = ae.Split
              , a = $(i, {
                lamports: o
            });
            return new Y({
                keys: [{
                    pubkey: t,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: s,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: n,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: a
            })
        }
        static split(e, t) {
            let n = new j;
            return n.add(fe.createAccount({
                fromPubkey: e.authorizedPubkey,
                newAccountPubkey: e.splitStakePubkey,
                lamports: t,
                space: this.space,
                programId: this.programId
            })),
            n.add(this.splitInstruction(e))
        }
        static splitWithSeed(e, t) {
            let {stakePubkey: n, authorizedPubkey: s, splitStakePubkey: o, basePubkey: i, seed: a, lamports: c} = e
              , d = new j;
            return d.add(fe.allocate({
                accountPubkey: o,
                basePubkey: i,
                seed: a,
                space: this.space,
                programId: this.programId
            })),
            t && t > 0 && d.add(fe.transfer({
                fromPubkey: e.authorizedPubkey,
                toPubkey: o,
                lamports: t
            })),
            d.add(this.splitInstruction({
                stakePubkey: n,
                authorizedPubkey: s,
                splitStakePubkey: o,
                lamports: c
            }))
        }
        static merge(e) {
            let {stakePubkey: t, sourceStakePubKey: n, authorizedPubkey: s} = e
              , o = ae.Merge
              , i = $(o);
            return new j().add({
                keys: [{
                    pubkey: t,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: n,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: Me,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: Gn,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: s,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: i
            })
        }
        static withdraw(e) {
            let {stakePubkey: t, authorizedPubkey: n, toPubkey: s, lamports: o, custodianPubkey: i} = e
              , a = ae.Withdraw
              , c = $(a, {
                lamports: o
            })
              , d = [{
                pubkey: t,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: s,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: Me,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: Gn,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: n,
                isSigner: !0,
                isWritable: !1
            }];
            return i && d.push({
                pubkey: i,
                isSigner: !0,
                isWritable: !1
            }),
            new j().add({
                keys: d,
                programId: this.programId,
                data: c
            })
        }
        static deactivate(e) {
            let {stakePubkey: t, authorizedPubkey: n} = e
              , s = ae.Deactivate
              , o = $(s);
            return new j().add({
                keys: [{
                    pubkey: t,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: Me,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: n,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: o
            })
        }
    }
    ;
    Tt.programId = new w("Stake11111111111111111111111111111111111111");
    Tt.space = 200;
    tr = class {
        constructor(e, t, n, s) {
            this.nodePubkey = void 0,
            this.authorizedVoter = void 0,
            this.authorizedWithdrawer = void 0,
            this.commission = void 0,
            this.nodePubkey = e,
            this.authorizedVoter = t,
            this.authorizedWithdrawer = n,
            this.commission = s
        }
    }
    ,
    Rs = class {
        constructor() {}
        static decodeInstructionType(e) {
            this.checkProgramId(e.programId);
            let n = u.u32("instruction").decode(e.data), s;
            for (let[o,i] of Object.entries($e))
                if (i.index == n) {
                    s = o;
                    break
                }
            if (!s)
                throw new Error("Instruction type incorrect; not a VoteInstruction");
            return s
        }
        static decodeInitializeAccount(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 4);
            let {voteInit: t} = H($e.InitializeAccount, e.data);
            return {
                votePubkey: e.keys[0].pubkey,
                nodePubkey: e.keys[3].pubkey,
                voteInit: new tr(new w(t.nodePubkey),new w(t.authorizedVoter),new w(t.authorizedWithdrawer),t.commission)
            }
        }
        static decodeAuthorize(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3);
            let {newAuthorized: t, voteAuthorizationType: n} = H($e.Authorize, e.data);
            return {
                votePubkey: e.keys[0].pubkey,
                authorizedPubkey: e.keys[2].pubkey,
                newAuthorizedPubkey: new w(t),
                voteAuthorizationType: {
                    index: n
                }
            }
        }
        static decodeAuthorizeWithSeed(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3);
            let {voteAuthorizeWithSeedArgs: {currentAuthorityDerivedKeyOwnerPubkey: t, currentAuthorityDerivedKeySeed: n, newAuthorized: s, voteAuthorizationType: o}} = H($e.AuthorizeWithSeed, e.data);
            return {
                currentAuthorityDerivedKeyBasePubkey: e.keys[2].pubkey,
                currentAuthorityDerivedKeyOwnerPubkey: new w(t),
                currentAuthorityDerivedKeySeed: n,
                newAuthorizedPubkey: new w(s),
                voteAuthorizationType: {
                    index: o
                },
                votePubkey: e.keys[0].pubkey
            }
        }
        static decodeWithdraw(e) {
            this.checkProgramId(e.programId),
            this.checkKeyLength(e.keys, 3);
            let {lamports: t} = H($e.Withdraw, e.data);
            return {
                votePubkey: e.keys[0].pubkey,
                authorizedWithdrawerPubkey: e.keys[2].pubkey,
                lamports: t,
                toPubkey: e.keys[1].pubkey
            }
        }
        static checkProgramId(e) {
            if (!e.equals(Lt.programId))
                throw new Error("invalid instruction; programId is not VoteProgram")
        }
        static checkKeyLength(e, t) {
            if (e.length < t)
                throw new Error(`invalid instruction; found ${e.length} keys, expected at least ${t}`)
        }
    }
    ,
    $e = Object.freeze({
        InitializeAccount: {
            index: 0,
            layout: u.struct([u.u32("instruction"), El()])
        },
        Authorize: {
            index: 1,
            layout: u.struct([u.u32("instruction"), K("newAuthorized"), u.u32("voteAuthorizationType")])
        },
        Withdraw: {
            index: 3,
            layout: u.struct([u.u32("instruction"), u.ns64("lamports")])
        },
        UpdateValidatorIdentity: {
            index: 4,
            layout: u.struct([u.u32("instruction")])
        },
        AuthorizeWithSeed: {
            index: 10,
            layout: u.struct([u.u32("instruction"), Al()])
        }
    }),
    f_ = Object.freeze({
        Voter: {
            index: 0
        },
        Withdrawer: {
            index: 1
        }
    }),
    Lt = class r {
        constructor() {}
        static initializeAccount(e) {
            let {votePubkey: t, nodePubkey: n, voteInit: s} = e
              , o = $e.InitializeAccount
              , i = $(o, {
                voteInit: {
                    nodePubkey: M(s.nodePubkey.toBuffer()),
                    authorizedVoter: M(s.authorizedVoter.toBuffer()),
                    authorizedWithdrawer: M(s.authorizedWithdrawer.toBuffer()),
                    commission: s.commission
                }
            })
              , a = {
                keys: [{
                    pubkey: t,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: kt,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: Me,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: n,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: i
            };
            return new Y(a)
        }
        static createAccount(e) {
            let t = new j;
            return t.add(fe.createAccount({
                fromPubkey: e.fromPubkey,
                newAccountPubkey: e.votePubkey,
                lamports: e.lamports,
                space: this.space,
                programId: this.programId
            })),
            t.add(this.initializeAccount({
                votePubkey: e.votePubkey,
                nodePubkey: e.voteInit.nodePubkey,
                voteInit: e.voteInit
            }))
        }
        static authorize(e) {
            let {votePubkey: t, authorizedPubkey: n, newAuthorizedPubkey: s, voteAuthorizationType: o} = e
              , i = $e.Authorize
              , a = $(i, {
                newAuthorized: M(s.toBuffer()),
                voteAuthorizationType: o.index
            })
              , c = [{
                pubkey: t,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: Me,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: n,
                isSigner: !0,
                isWritable: !1
            }];
            return new j().add({
                keys: c,
                programId: this.programId,
                data: a
            })
        }
        static authorizeWithSeed(e) {
            let {currentAuthorityDerivedKeyBasePubkey: t, currentAuthorityDerivedKeyOwnerPubkey: n, currentAuthorityDerivedKeySeed: s, newAuthorizedPubkey: o, voteAuthorizationType: i, votePubkey: a} = e
              , c = $e.AuthorizeWithSeed
              , d = $(c, {
                voteAuthorizeWithSeedArgs: {
                    currentAuthorityDerivedKeyOwnerPubkey: M(n.toBuffer()),
                    currentAuthorityDerivedKeySeed: s,
                    newAuthorized: M(o.toBuffer()),
                    voteAuthorizationType: i.index
                }
            })
              , _ = [{
                pubkey: a,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: Me,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: t,
                isSigner: !0,
                isWritable: !1
            }];
            return new j().add({
                keys: _,
                programId: this.programId,
                data: d
            })
        }
        static withdraw(e) {
            let {votePubkey: t, authorizedWithdrawerPubkey: n, lamports: s, toPubkey: o} = e
              , i = $e.Withdraw
              , a = $(i, {
                lamports: s
            })
              , c = [{
                pubkey: t,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: o,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: n,
                isSigner: !0,
                isWritable: !1
            }];
            return new j().add({
                keys: c,
                programId: this.programId,
                data: a
            })
        }
        static safeWithdraw(e, t, n) {
            if (e.lamports > t - n)
                throw new Error("Withdraw will leave vote account with insufficient funds.");
            return r.withdraw(e)
        }
        static updateValidatorIdentity(e) {
            let {votePubkey: t, authorizedWithdrawerPubkey: n, nodePubkey: s} = e
              , o = $e.UpdateValidatorIdentity
              , i = $(o)
              , a = [{
                pubkey: t,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: s,
                isSigner: !0,
                isWritable: !1
            }, {
                pubkey: n,
                isSigner: !0,
                isWritable: !1
            }];
            return new j().add({
                keys: a,
                programId: this.programId,
                data: i
            })
        }
    }
    ;
    Lt.programId = new w("Vote111111111111111111111111111111111111111");
    Lt.space = 3762;
    Di = new w("Va1idator1nfo111111111111111111111111111111"),
    l_ = b({
        name: E(),
        website: v(E()),
        details: v(E()),
        iconUrl: v(E()),
        keybaseUsername: v(E())
    }),
    ms = class r {
        constructor(e, t) {
            this.key = void 0,
            this.info = void 0,
            this.key = e,
            this.info = t
        }
        static fromConfigData(e) {
            let t = [...e];
            if (we(t) !== 2)
                return null;
            let s = [];
            for (let o = 0; o < 2; o++) {
                let i = new w(Oe(t, 0, We))
                  , a = Fe(t) === 1;
                s.push({
                    publicKey: i,
                    isSigner: a
                })
            }
            if (s[0].publicKey.equals(Di) && s[1].isSigner) {
                let o = ht().decode(B.Buffer.from(t))
                  , i = JSON.parse(o);
                return Dr(i, l_),
                new r(s[1].publicKey,i)
            }
            return null
        }
    }
    ,
    h_ = new w("Vote111111111111111111111111111111111111111"),
    __ = u.struct([K("nodePubkey"), K("authorizedWithdrawer"), u.u8("commission"), u.nu64(), u.seq(u.struct([u.nu64("slot"), u.u32("confirmationCount")]), u.offset(u.u32(), -8), "votes"), u.u8("rootSlotValid"), u.nu64("rootSlot"), u.nu64(), u.seq(u.struct([u.nu64("epoch"), K("authorizedVoter")]), u.offset(u.u32(), -8), "authorizedVoters"), u.struct([u.seq(u.struct([K("authorizedPubkey"), u.nu64("epochOfLastAuthorizedSwitch"), u.nu64("targetEpoch")]), 32, "buf"), u.nu64("idx"), u.u8("isEmpty")], "priorVoters"), u.nu64(), u.seq(u.struct([u.nu64("epoch"), u.nu64("credits"), u.nu64("prevCredits")]), u.offset(u.u32(), -8), "epochCredits"), u.struct([u.nu64("slot"), u.nu64("timestamp")], "lastTimestamp")]),
    Ss = class r {
        constructor(e) {
            this.nodePubkey = void 0,
            this.authorizedWithdrawer = void 0,
            this.commission = void 0,
            this.rootSlot = void 0,
            this.votes = void 0,
            this.authorizedVoters = void 0,
            this.priorVoters = void 0,
            this.epochCredits = void 0,
            this.lastTimestamp = void 0,
            this.nodePubkey = e.nodePubkey,
            this.authorizedWithdrawer = e.authorizedWithdrawer,
            this.commission = e.commission,
            this.rootSlot = e.rootSlot,
            this.votes = e.votes,
            this.authorizedVoters = e.authorizedVoters,
            this.priorVoters = e.priorVoters,
            this.epochCredits = e.epochCredits,
            this.lastTimestamp = e.lastTimestamp
        }
        static fromAccountData(e) {
            let n = __.decode(M(e), 4)
              , s = n.rootSlot;
            return n.rootSlotValid || (s = null),
            new r({
                nodePubkey: new w(n.nodePubkey),
                authorizedWithdrawer: new w(n.authorizedWithdrawer),
                commission: n.commission,
                votes: n.votes,
                rootSlot: s,
                authorizedVoters: n.authorizedVoters.map(p_),
                priorVoters: y_(n.priorVoters),
                epochCredits: n.epochCredits,
                lastTimestamp: n.lastTimestamp
            })
        }
    }
    ;
    hi = {
        http: {
            devnet: "http://api.devnet.solana.com",
            testnet: "http://api.testnet.solana.com",
            "mainnet-beta": "http://api.mainnet-beta.solana.com/"
        },
        https: {
            devnet: "https://api.devnet.solana.com",
            testnet: "https://api.testnet.solana.com",
            "mainnet-beta": "https://api.mainnet-beta.solana.com/"
        }
    };
    m_ = 1e9
}
);
export {gr as a, Ht as b, ts as c, qt as d, gi as e, We as f, w as g, ns as h, Rl as i, ot as j, nr as k, jt as l, Yt as m, Xt as n, st as o, _t as p, Ve as q, Ot as r, Es as s, Ye as t, Y as u, j as v, rs as w, ss as x, Me as y, Nl as z, Tl as A, Vn as B, kt as C, Ll as D, vl as E, Cl as F, Gn as G, pt as H, Bl as I, T as J, os as K, bi as L, is as M, jn as N, as as O, Z as P, fe as Q, cs as R, Pl as S, us as T, Yn as U, Jt as V, Ii as W, _s as X, Jn as Y, Xe as Z, ps as _, Qt as $, ys as aa, Ke as ba, en as ca, Zn as da, Qn as ea, Pi as fa, er as ga, yt as ha, gs as ia, ae as ja, d_ as ka, Tt as la, tr as ma, Rs as na, f_ as oa, Lt as pa, Di as qa, ms as ra, h_ as sa, Ss as ta, g_ as ua, R_ as va, m_ as wa, S_ as xa, b_ as ya};
