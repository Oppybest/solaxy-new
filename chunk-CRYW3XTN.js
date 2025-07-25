import {A as y, B as K, C as A, H as a0, J as f0, K as Q, M as r0, a as $, b as z, c as O, d as G, e as U, f as V, g as W, l as g, m as v, n as t0, o as s0, p as e0, q as h0, r as c0, s as u0, v as i0, x as P, y as x0} from "./chunk-6WGECOWL.js";
import {e as Z} from "./chunk-JOVT4LBN.js";
function p0(u, t, x, s) {
    if (typeof u.setBigUint64 == "function")
        return u.setBigUint64(t, x, s);
    let e = BigInt(32)
      , a = BigInt(4294967295)
      , c = Number(x >> e & a)
      , i = Number(x & a)
      , f = s ? 4 : 0
      , b = s ? 0 : 4;
    u.setUint32(t + f, c, s),
    u.setUint32(t + b, i, s)
}
function o0(u, t, x) {
    return u & t ^ ~u & x
}
function b0(u, t, x) {
    return u & t ^ u & x ^ t & x
}
var M, S, l, n0 = Z( () => {
    "use strict";
    r0();
    M = class extends f0 {
        constructor(t, x, s, e) {
            super(),
            this.finished = !1,
            this.length = 0,
            this.pos = 0,
            this.destroyed = !1,
            this.blockLen = t,
            this.outputLen = x,
            this.padOffset = s,
            this.isLE = e,
            this.buffer = new Uint8Array(t),
            this.view = K(this.buffer)
        }
        update(t) {
            P(this),
            t = a0(t),
            i0(t);
            let {view: x, buffer: s, blockLen: e} = this
              , a = t.length;
            for (let c = 0; c < a; ) {
                let i = Math.min(e - this.pos, a - c);
                if (i === e) {
                    let f = K(t);
                    for (; e <= a - c; c += e)
                        this.process(f, c);
                    continue
                }
                s.set(t.subarray(c, c + i), this.pos),
                this.pos += i,
                c += i,
                this.pos === e && (this.process(x, 0),
                this.pos = 0)
            }
            return this.length += t.length,
            this.roundClean(),
            this
        }
        digestInto(t) {
            P(this),
            x0(t, this),
            this.finished = !0;
            let {buffer: x, view: s, blockLen: e, isLE: a} = this
              , {pos: c} = this;
            x[c++] = 128,
            y(this.buffer.subarray(c)),
            this.padOffset > e - c && (this.process(s, 0),
            c = 0);
            for (let h = c; h < e; h++)
                x[h] = 0;
            p0(s, e - 8, BigInt(this.length * 8), a),
            this.process(s, 0);
            let i = K(t)
              , f = this.outputLen;
            if (f % 4)
                throw new Error("_sha2: outputLen should be aligned to 32bit");
            let b = f / 4
              , n = this.get();
            if (b > n.length)
                throw new Error("_sha2: outputLen bigger than state");
            for (let h = 0; h < b; h++)
                i.setUint32(4 * h, n[h], a)
        }
        digest() {
            let {buffer: t, outputLen: x} = this;
            this.digestInto(t);
            let s = t.slice(0, x);
            return this.destroy(),
            s
        }
        _cloneInto(t) {
            t || (t = new this.constructor),
            t.set(...this.get());
            let {blockLen: x, buffer: s, length: e, finished: a, destroyed: c, pos: i} = this;
            return t.destroyed = c,
            t.finished = a,
            t.length = e,
            t.pos = i,
            e % x && t.buffer.set(s),
            t
        }
        clone() {
            return this._cloneInto()
        }
    }
    ,
    S = Uint32Array.from([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
    l = Uint32Array.from([1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209])
}
);
var H0, D, R, d0, A0, B0, E, F, X, F0, G0, g0 = Z( () => {
    "use strict";
    n0();
    u0();
    r0();
    H0 = Uint32Array.from([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
    D = new Uint32Array(64),
    R = class extends M {
        constructor(t=32) {
            super(64, t, 8, !1),
            this.A = S[0] | 0,
            this.B = S[1] | 0,
            this.C = S[2] | 0,
            this.D = S[3] | 0,
            this.E = S[4] | 0,
            this.F = S[5] | 0,
            this.G = S[6] | 0,
            this.H = S[7] | 0
        }
        get() {
            let {A: t, B: x, C: s, D: e, E: a, F: c, G: i, H: f} = this;
            return [t, x, s, e, a, c, i, f]
        }
        set(t, x, s, e, a, c, i, f) {
            this.A = t | 0,
            this.B = x | 0,
            this.C = s | 0,
            this.D = e | 0,
            this.E = a | 0,
            this.F = c | 0,
            this.G = i | 0,
            this.H = f | 0
        }
        process(t, x) {
            for (let h = 0; h < 16; h++,
            x += 4)
                D[h] = t.getUint32(x, !1);
            for (let h = 16; h < 64; h++) {
                let o = D[h - 15]
                  , d = D[h - 2]
                  , H = A(o, 7) ^ A(o, 18) ^ o >>> 3
                  , p = A(d, 17) ^ A(d, 19) ^ d >>> 10;
                D[h] = p + D[h - 7] + H + D[h - 16] | 0
            }
            let {A: s, B: e, C: a, D: c, E: i, F: f, G: b, H: n} = this;
            for (let h = 0; h < 64; h++) {
                let o = A(i, 6) ^ A(i, 11) ^ A(i, 25)
                  , d = n + o + o0(i, f, b) + H0[h] + D[h] | 0
                  , p = (A(s, 2) ^ A(s, 13) ^ A(s, 22)) + b0(s, e, a) | 0;
                n = b,
                b = f,
                f = i,
                i = c + d | 0,
                c = a,
                a = e,
                e = s,
                s = d + p | 0
            }
            s = s + this.A | 0,
            e = e + this.B | 0,
            a = a + this.C | 0,
            c = c + this.D | 0,
            i = i + this.E | 0,
            f = f + this.F | 0,
            b = b + this.G | 0,
            n = n + this.H | 0,
            this.set(s, e, a, c, i, f, b, n)
        }
        roundClean() {
            y(D)
        }
        destroy() {
            this.set(0, 0, 0, 0, 0, 0, 0, 0),
            y(this.buffer)
        }
    }
    ,
    d0 = $(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(u => BigInt(u))),
    A0 = d0[0],
    B0 = d0[1],
    E = new Uint32Array(80),
    F = new Uint32Array(80),
    X = class extends M {
        constructor(t=64) {
            super(128, t, 16, !1),
            this.Ah = l[0] | 0,
            this.Al = l[1] | 0,
            this.Bh = l[2] | 0,
            this.Bl = l[3] | 0,
            this.Ch = l[4] | 0,
            this.Cl = l[5] | 0,
            this.Dh = l[6] | 0,
            this.Dl = l[7] | 0,
            this.Eh = l[8] | 0,
            this.El = l[9] | 0,
            this.Fh = l[10] | 0,
            this.Fl = l[11] | 0,
            this.Gh = l[12] | 0,
            this.Gl = l[13] | 0,
            this.Hh = l[14] | 0,
            this.Hl = l[15] | 0
        }
        get() {
            let {Ah: t, Al: x, Bh: s, Bl: e, Ch: a, Cl: c, Dh: i, Dl: f, Eh: b, El: n, Fh: h, Fl: o, Gh: d, Gl: H, Hh: p, Hl: B} = this;
            return [t, x, s, e, a, c, i, f, b, n, h, o, d, H, p, B]
        }
        set(t, x, s, e, a, c, i, f, b, n, h, o, d, H, p, B) {
            this.Ah = t | 0,
            this.Al = x | 0,
            this.Bh = s | 0,
            this.Bl = e | 0,
            this.Ch = a | 0,
            this.Cl = c | 0,
            this.Dh = i | 0,
            this.Dl = f | 0,
            this.Eh = b | 0,
            this.El = n | 0,
            this.Fh = h | 0,
            this.Fl = o | 0,
            this.Gh = d | 0,
            this.Gl = H | 0,
            this.Hh = p | 0,
            this.Hl = B | 0
        }
        process(t, x) {
            for (let r = 0; r < 16; r++,
            x += 4)
                E[r] = t.getUint32(x),
                F[r] = t.getUint32(x += 4);
            for (let r = 16; r < 80; r++) {
                let _ = E[r - 15] | 0
                  , L = F[r - 15] | 0
                  , j = G(_, L, 1) ^ G(_, L, 8) ^ z(_, L, 7)
                  , J = U(_, L, 1) ^ U(_, L, 8) ^ O(_, L, 7)
                  , C = E[r - 2] | 0
                  , m = F[r - 2] | 0
                  , T = G(C, m, 19) ^ V(C, m, 61) ^ z(C, m, 6)
                  , N = U(C, m, 19) ^ W(C, m, 61) ^ O(C, m, 6)
                  , k = s0(J, N, F[r - 7], F[r - 16])
                  , q = e0(k, j, T, E[r - 7], E[r - 16]);
                E[r] = q | 0,
                F[r] = k | 0
            }
            let {Ah: s, Al: e, Bh: a, Bl: c, Ch: i, Cl: f, Dh: b, Dl: n, Eh: h, El: o, Fh: d, Fl: H, Gh: p, Gl: B, Hh: I, Hl: w} = this;
            for (let r = 0; r < 80; r++) {
                let _ = G(h, o, 14) ^ G(h, o, 18) ^ V(h, o, 41)
                  , L = U(h, o, 14) ^ U(h, o, 18) ^ W(h, o, 41)
                  , j = h & d ^ ~h & p
                  , J = o & H ^ ~o & B
                  , C = h0(w, L, J, B0[r], F[r])
                  , m = c0(C, I, _, j, A0[r], E[r])
                  , T = C | 0
                  , N = G(s, e, 28) ^ V(s, e, 34) ^ V(s, e, 39)
                  , k = U(s, e, 28) ^ W(s, e, 34) ^ W(s, e, 39)
                  , q = s & a ^ s & i ^ a & i
                  , l0 = e & c ^ e & f ^ c & f;
                I = p | 0,
                w = B | 0,
                p = d | 0,
                B = H | 0,
                d = h | 0,
                H = o | 0,
                {h, l: o} = g(b | 0, n | 0, m | 0, T | 0),
                b = i | 0,
                n = f | 0,
                i = a | 0,
                f = c | 0,
                a = s | 0,
                c = e | 0;
                let Y = v(T, k, l0);
                s = t0(Y, m, N, q),
                e = Y | 0
            }
            ({h: s, l: e} = g(this.Ah | 0, this.Al | 0, s | 0, e | 0)),
            {h: a, l: c} = g(this.Bh | 0, this.Bl | 0, a | 0, c | 0),
            {h: i, l: f} = g(this.Ch | 0, this.Cl | 0, i | 0, f | 0),
            {h: b, l: n} = g(this.Dh | 0, this.Dl | 0, b | 0, n | 0),
            {h, l: o} = g(this.Eh | 0, this.El | 0, h | 0, o | 0),
            {h: d, l: H} = g(this.Fh | 0, this.Fl | 0, d | 0, H | 0),
            {h: p, l: B} = g(this.Gh | 0, this.Gl | 0, p | 0, B | 0),
            {h: I, l: w} = g(this.Hh | 0, this.Hl | 0, I | 0, w | 0),
            this.set(s, e, a, c, i, f, b, n, h, o, d, H, p, B, I, w)
        }
        roundClean() {
            y(E, F)
        }
        destroy() {
            y(this.buffer),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        }
    }
    ,
    F0 = Q( () => new R),
    G0 = Q( () => new X)
}
);
export {F0 as a, G0 as b, g0 as c};
