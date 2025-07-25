var zt = (r, t) => () => (t || r((t = {
    exports: {}
}).exports, t),
t.exports);
var Qe = zt(Qt => {
    "use strict";
    Qt.byteLength = Xr;
    Qt.toByteArray = Jr;
    Qt.fromByteArray = tn;
    var pt = []
      , st = []
      , zr = typeof Uint8Array < "u" ? Uint8Array : Array
      , ge = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (At = 0,
    Je = ge.length; At < Je; ++At)
        pt[At] = ge[At],
        st[ge.charCodeAt(At)] = At;
    var At, Je;
    st[45] = 62;
    st[95] = 63;
    function Ke(r) {
        var t = r.length;
        if (t % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
        var e = r.indexOf("=");
        e === -1 && (e = t);
        var n = e === t ? 0 : 4 - e % 4;
        return [e, n]
    }
    function Xr(r) {
        var t = Ke(r)
          , e = t[0]
          , n = t[1];
        return (e + n) * 3 / 4 - n
    }
    function Yr(r, t, e) {
        return (t + e) * 3 / 4 - e
    }
    function Jr(r) {
        var t, e = Ke(r), n = e[0], i = e[1], o = new zr(Yr(r, n, i)), s = 0, f = i > 0 ? n - 4 : n, h;
        for (h = 0; h < f; h += 4)
            t = st[r.charCodeAt(h)] << 18 | st[r.charCodeAt(h + 1)] << 12 | st[r.charCodeAt(h + 2)] << 6 | st[r.charCodeAt(h + 3)],
            o[s++] = t >> 16 & 255,
            o[s++] = t >> 8 & 255,
            o[s++] = t & 255;
        return i === 2 && (t = st[r.charCodeAt(h)] << 2 | st[r.charCodeAt(h + 1)] >> 4,
        o[s++] = t & 255),
        i === 1 && (t = st[r.charCodeAt(h)] << 10 | st[r.charCodeAt(h + 1)] << 4 | st[r.charCodeAt(h + 2)] >> 2,
        o[s++] = t >> 8 & 255,
        o[s++] = t & 255),
        o
    }
    function Kr(r) {
        return pt[r >> 18 & 63] + pt[r >> 12 & 63] + pt[r >> 6 & 63] + pt[r & 63]
    }
    function Qr(r, t, e) {
        for (var n, i = [], o = t; o < e; o += 3)
            n = (r[o] << 16 & 16711680) + (r[o + 1] << 8 & 65280) + (r[o + 2] & 255),
            i.push(Kr(n));
        return i.join("")
    }
    function tn(r) {
        for (var t, e = r.length, n = e % 3, i = [], o = 16383, s = 0, f = e - n; s < f; s += o)
            i.push(Qr(r, s, s + o > f ? f : s + o));
        return n === 1 ? (t = r[e - 1],
        i.push(pt[t >> 2] + pt[t << 4 & 63] + "==")) : n === 2 && (t = (r[e - 2] << 8) + r[e - 1],
        i.push(pt[t >> 10] + pt[t >> 4 & 63] + pt[t << 2 & 63] + "=")),
        i.join("")
    }
}
);
var tr = zt(me => {
    "use strict";
    me.read = function(r, t, e, n, i) {
        var o, s, f = i * 8 - n - 1, h = (1 << f) - 1, m = h >> 1, p = -7, d = e ? i - 1 : 0, C = e ? -1 : 1, N = r[t + d];
        for (d += C,
        o = N & (1 << -p) - 1,
        N >>= -p,
        p += f; p > 0; o = o * 256 + r[t + d],
        d += C,
        p -= 8)
            ;
        for (s = o & (1 << -p) - 1,
        o >>= -p,
        p += n; p > 0; s = s * 256 + r[t + d],
        d += C,
        p -= 8)
            ;
        if (o === 0)
            o = 1 - m;
        else {
            if (o === h)
                return s ? NaN : (N ? -1 : 1) * (1 / 0);
            s = s + Math.pow(2, n),
            o = o - m
        }
        return (N ? -1 : 1) * s * Math.pow(2, o - n)
    }
    ;
    me.write = function(r, t, e, n, i, o) {
        var s, f, h, m = o * 8 - i - 1, p = (1 << m) - 1, d = p >> 1, C = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, N = n ? 0 : o - 1, j = n ? 1 : -1, Q = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t),
        isNaN(t) || t === 1 / 0 ? (f = isNaN(t) ? 1 : 0,
        s = p) : (s = Math.floor(Math.log(t) / Math.LN2),
        t * (h = Math.pow(2, -s)) < 1 && (s--,
        h *= 2),
        s + d >= 1 ? t += C / h : t += C * Math.pow(2, 1 - d),
        t * h >= 2 && (s++,
        h /= 2),
        s + d >= p ? (f = 0,
        s = p) : s + d >= 1 ? (f = (t * h - 1) * Math.pow(2, i),
        s = s + d) : (f = t * Math.pow(2, d - 1) * Math.pow(2, i),
        s = 0)); i >= 8; r[e + N] = f & 255,
        N += j,
        f /= 256,
        i -= 8)
            ;
        for (s = s << i | f,
        m += i; m > 0; r[e + N] = s & 255,
        N += j,
        s /= 256,
        m -= 8)
            ;
        r[e + N - j] |= Q * 128
    }
}
);
var gr = zt(Zt => {
    "use strict";
    var _e = Qe()
      , Ut = tr()
      , er = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    Zt.Buffer = l;
    Zt.SlowBuffer = cn;
    Zt.INSPECT_MAX_BYTES = 50;
    var te = 2147483647;
    Zt.kMaxLength = te;
    l.TYPED_ARRAY_SUPPORT = en();
    !l.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function en() {
        try {
            let r = new Uint8Array(1)
              , t = {
                foo: function() {
                    return 42
                }
            };
            return Object.setPrototypeOf(t, Uint8Array.prototype),
            Object.setPrototypeOf(r, t),
            r.foo() === 42
        } catch {
            return !1
        }
    }
    Object.defineProperty(l.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (l.isBuffer(this))
                return this.buffer
        }
    });
    Object.defineProperty(l.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (l.isBuffer(this))
                return this.byteOffset
        }
    });
    function xt(r) {
        if (r > te)
            throw new RangeError('The value "' + r + '" is invalid for option "size"');
        let t = new Uint8Array(r);
        return Object.setPrototypeOf(t, l.prototype),
        t
    }
    function l(r, t, e) {
        if (typeof r == "number") {
            if (typeof t == "string")
                throw new TypeError('The "string" argument must be of type string. Received type number');
            return xe(r)
        }
        return or(r, t, e)
    }
    l.poolSize = 8192;
    function or(r, t, e) {
        if (typeof r == "string")
            return nn(r, t);
        if (ArrayBuffer.isView(r))
            return on(r);
        if (r == null)
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r);
        if (dt(r, ArrayBuffer) || r && dt(r.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (dt(r, SharedArrayBuffer) || r && dt(r.buffer, SharedArrayBuffer)))
            return we(r, t, e);
        if (typeof r == "number")
            throw new TypeError('The "value" argument must not be of type number. Received type number');
        let n = r.valueOf && r.valueOf();
        if (n != null && n !== r)
            return l.from(n, t, e);
        let i = sn(r);
        if (i)
            return i;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof r[Symbol.toPrimitive] == "function")
            return l.from(r[Symbol.toPrimitive]("string"), t, e);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r)
    }
    l.from = function(r, t, e) {
        return or(r, t, e)
    }
    ;
    Object.setPrototypeOf(l.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(l, Uint8Array);
    function sr(r) {
        if (typeof r != "number")
            throw new TypeError('"size" argument must be of type number');
        if (r < 0)
            throw new RangeError('The value "' + r + '" is invalid for option "size"')
    }
    function rn(r, t, e) {
        return sr(r),
        r <= 0 ? xt(r) : t !== void 0 ? typeof e == "string" ? xt(r).fill(t, e) : xt(r).fill(t) : xt(r)
    }
    l.alloc = function(r, t, e) {
        return rn(r, t, e)
    }
    ;
    function xe(r) {
        return sr(r),
        xt(r < 0 ? 0 : Ie(r) | 0)
    }
    l.allocUnsafe = function(r) {
        return xe(r)
    }
    ;
    l.allocUnsafeSlow = function(r) {
        return xe(r)
    }
    ;
    function nn(r, t) {
        if ((typeof t != "string" || t === "") && (t = "utf8"),
        !l.isEncoding(t))
            throw new TypeError("Unknown encoding: " + t);
        let e = cr(r, t) | 0
          , n = xt(e)
          , i = n.write(r, t);
        return i !== e && (n = n.slice(0, i)),
        n
    }
    function Te(r) {
        let t = r.length < 0 ? 0 : Ie(r.length) | 0
          , e = xt(t);
        for (let n = 0; n < t; n += 1)
            e[n] = r[n] & 255;
        return e
    }
    function on(r) {
        if (dt(r, Uint8Array)) {
            let t = new Uint8Array(r);
            return we(t.buffer, t.byteOffset, t.byteLength)
        }
        return Te(r)
    }
    function we(r, t, e) {
        if (t < 0 || r.byteLength < t)
            throw new RangeError('"offset" is outside of buffer bounds');
        if (r.byteLength < t + (e || 0))
            throw new RangeError('"length" is outside of buffer bounds');
        let n;
        return t === void 0 && e === void 0 ? n = new Uint8Array(r) : e === void 0 ? n = new Uint8Array(r,t) : n = new Uint8Array(r,t,e),
        Object.setPrototypeOf(n, l.prototype),
        n
    }
    function sn(r) {
        if (l.isBuffer(r)) {
            let t = Ie(r.length) | 0
              , e = xt(t);
            return e.length === 0 || r.copy(e, 0, 0, t),
            e
        }
        if (r.length !== void 0)
            return typeof r.length != "number" || be(r.length) ? xt(0) : Te(r);
        if (r.type === "Buffer" && Array.isArray(r.data))
            return Te(r.data)
    }
    function Ie(r) {
        if (r >= te)
            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + te.toString(16) + " bytes");
        return r | 0
    }
    function cn(r) {
        return +r != r && (r = 0),
        l.alloc(+r)
    }
    l.isBuffer = function(t) {
        return t != null && t._isBuffer === !0 && t !== l.prototype
    }
    ;
    l.compare = function(t, e) {
        if (dt(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)),
        dt(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)),
        !l.isBuffer(t) || !l.isBuffer(e))
            throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (t === e)
            return 0;
        let n = t.length
          , i = e.length;
        for (let o = 0, s = Math.min(n, i); o < s; ++o)
            if (t[o] !== e[o]) {
                n = t[o],
                i = e[o];
                break
            }
        return n < i ? -1 : i < n ? 1 : 0
    }
    ;
    l.isEncoding = function(t) {
        switch (String(t).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
            return !0;
        default:
            return !1
        }
    }
    ;
    l.concat = function(t, e) {
        if (!Array.isArray(t))
            throw new TypeError('"list" argument must be an Array of Buffers');
        if (t.length === 0)
            return l.alloc(0);
        let n;
        if (e === void 0)
            for (e = 0,
            n = 0; n < t.length; ++n)
                e += t[n].length;
        let i = l.allocUnsafe(e)
          , o = 0;
        for (n = 0; n < t.length; ++n) {
            let s = t[n];
            if (dt(s, Uint8Array))
                o + s.length > i.length ? (l.isBuffer(s) || (s = l.from(s)),
                s.copy(i, o)) : Uint8Array.prototype.set.call(i, s, o);
            else if (l.isBuffer(s))
                s.copy(i, o);
            else
                throw new TypeError('"list" argument must be an Array of Buffers');
            o += s.length
        }
        return i
    }
    ;
    function cr(r, t) {
        if (l.isBuffer(r))
            return r.length;
        if (ArrayBuffer.isView(r) || dt(r, ArrayBuffer))
            return r.byteLength;
        if (typeof r != "string")
            throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof r);
        let e = r.length
          , n = arguments.length > 2 && arguments[2] === !0;
        if (!n && e === 0)
            return 0;
        let i = !1;
        for (; ; )
            switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
                return e;
            case "utf8":
            case "utf-8":
                return ke(r).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return e * 2;
            case "hex":
                return e >>> 1;
            case "base64":
                return Er(r).length;
            default:
                if (i)
                    return n ? -1 : ke(r).length;
                t = ("" + t).toLowerCase(),
                i = !0
            }
    }
    l.byteLength = cr;
    function un(r, t, e) {
        let n = !1;
        if ((t === void 0 || t < 0) && (t = 0),
        t > this.length || ((e === void 0 || e > this.length) && (e = this.length),
        e <= 0) || (e >>>= 0,
        t >>>= 0,
        e <= t))
            return "";
        for (r || (r = "utf8"); ; )
            switch (r) {
            case "hex":
                return mn(this, t, e);
            case "utf8":
            case "utf-8":
                return ar(this, t, e);
            case "ascii":
                return En(this, t, e);
            case "latin1":
            case "binary":
                return gn(this, t, e);
            case "base64":
                return dn(this, t, e);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return _n(this, t, e);
            default:
                if (n)
                    throw new TypeError("Unknown encoding: " + r);
                r = (r + "").toLowerCase(),
                n = !0
            }
    }
    l.prototype._isBuffer = !0;
    function Pt(r, t, e) {
        let n = r[t];
        r[t] = r[e],
        r[e] = n
    }
    l.prototype.swap16 = function() {
        let t = this.length;
        if (t % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let e = 0; e < t; e += 2)
            Pt(this, e, e + 1);
        return this
    }
    ;
    l.prototype.swap32 = function() {
        let t = this.length;
        if (t % 4 !== 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let e = 0; e < t; e += 4)
            Pt(this, e, e + 3),
            Pt(this, e + 1, e + 2);
        return this
    }
    ;
    l.prototype.swap64 = function() {
        let t = this.length;
        if (t % 8 !== 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let e = 0; e < t; e += 8)
            Pt(this, e, e + 7),
            Pt(this, e + 1, e + 6),
            Pt(this, e + 2, e + 5),
            Pt(this, e + 3, e + 4);
        return this
    }
    ;
    l.prototype.toString = function() {
        let t = this.length;
        return t === 0 ? "" : arguments.length === 0 ? ar(this, 0, t) : un.apply(this, arguments)
    }
    ;
    l.prototype.toLocaleString = l.prototype.toString;
    l.prototype.equals = function(t) {
        if (!l.isBuffer(t))
            throw new TypeError("Argument must be a Buffer");
        return this === t ? !0 : l.compare(this, t) === 0
    }
    ;
    l.prototype.inspect = function() {
        let t = ""
          , e = Zt.INSPECT_MAX_BYTES;
        return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(),
        this.length > e && (t += " ... "),
        "<Buffer " + t + ">"
    }
    ;
    er && (l.prototype[er] = l.prototype.inspect);
    l.prototype.compare = function(t, e, n, i, o) {
        if (dt(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)),
        !l.isBuffer(t))
            throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
        if (e === void 0 && (e = 0),
        n === void 0 && (n = t ? t.length : 0),
        i === void 0 && (i = 0),
        o === void 0 && (o = this.length),
        e < 0 || n > t.length || i < 0 || o > this.length)
            throw new RangeError("out of range index");
        if (i >= o && e >= n)
            return 0;
        if (i >= o)
            return -1;
        if (e >= n)
            return 1;
        if (e >>>= 0,
        n >>>= 0,
        i >>>= 0,
        o >>>= 0,
        this === t)
            return 0;
        let s = o - i
          , f = n - e
          , h = Math.min(s, f)
          , m = this.slice(i, o)
          , p = t.slice(e, n);
        for (let d = 0; d < h; ++d)
            if (m[d] !== p[d]) {
                s = m[d],
                f = p[d];
                break
            }
        return s < f ? -1 : f < s ? 1 : 0
    }
    ;
    function ur(r, t, e, n, i) {
        if (r.length === 0)
            return -1;
        if (typeof e == "string" ? (n = e,
        e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648),
        e = +e,
        be(e) && (e = i ? 0 : r.length - 1),
        e < 0 && (e = r.length + e),
        e >= r.length) {
            if (i)
                return -1;
            e = r.length - 1
        } else if (e < 0)
            if (i)
                e = 0;
            else
                return -1;
        if (typeof t == "string" && (t = l.from(t, n)),
        l.isBuffer(t))
            return t.length === 0 ? -1 : rr(r, t, e, n, i);
        if (typeof t == "number")
            return t = t & 255,
            typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(r, t, e) : Uint8Array.prototype.lastIndexOf.call(r, t, e) : rr(r, [t], e, n, i);
        throw new TypeError("val must be string, number or Buffer")
    }
    function rr(r, t, e, n, i) {
        let o = 1
          , s = r.length
          , f = t.length;
        if (n !== void 0 && (n = String(n).toLowerCase(),
        n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
            if (r.length < 2 || t.length < 2)
                return -1;
            o = 2,
            s /= 2,
            f /= 2,
            e /= 2
        }
        function h(p, d) {
            return o === 1 ? p[d] : p.readUInt16BE(d * o)
        }
        let m;
        if (i) {
            let p = -1;
            for (m = e; m < s; m++)
                if (h(r, m) === h(t, p === -1 ? 0 : m - p)) {
                    if (p === -1 && (p = m),
                    m - p + 1 === f)
                        return p * o
                } else
                    p !== -1 && (m -= m - p),
                    p = -1
        } else
            for (e + f > s && (e = s - f),
            m = e; m >= 0; m--) {
                let p = !0;
                for (let d = 0; d < f; d++)
                    if (h(r, m + d) !== h(t, d)) {
                        p = !1;
                        break
                    }
                if (p)
                    return m
            }
        return -1
    }
    l.prototype.includes = function(t, e, n) {
        return this.indexOf(t, e, n) !== -1
    }
    ;
    l.prototype.indexOf = function(t, e, n) {
        return ur(this, t, e, n, !0)
    }
    ;
    l.prototype.lastIndexOf = function(t, e, n) {
        return ur(this, t, e, n, !1)
    }
    ;
    function an(r, t, e, n) {
        e = Number(e) || 0;
        let i = r.length - e;
        n ? (n = Number(n),
        n > i && (n = i)) : n = i;
        let o = t.length;
        n > o / 2 && (n = o / 2);
        let s;
        for (s = 0; s < n; ++s) {
            let f = parseInt(t.substr(s * 2, 2), 16);
            if (be(f))
                return s;
            r[e + s] = f
        }
        return s
    }
    function ln(r, t, e, n) {
        return ee(ke(t, r.length - e), r, e, n)
    }
    function fn(r, t, e, n) {
        return ee(xn(t), r, e, n)
    }
    function hn(r, t, e, n) {
        return ee(Er(t), r, e, n)
    }
    function pn(r, t, e, n) {
        return ee(In(t, r.length - e), r, e, n)
    }
    l.prototype.write = function(t, e, n, i) {
        if (e === void 0)
            i = "utf8",
            n = this.length,
            e = 0;
        else if (n === void 0 && typeof e == "string")
            i = e,
            n = this.length,
            e = 0;
        else if (isFinite(e))
            e = e >>> 0,
            isFinite(n) ? (n = n >>> 0,
            i === void 0 && (i = "utf8")) : (i = n,
            n = void 0);
        else
            throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        let o = this.length - e;
        if ((n === void 0 || n > o) && (n = o),
        t.length > 0 && (n < 0 || e < 0) || e > this.length)
            throw new RangeError("Attempt to write outside buffer bounds");
        i || (i = "utf8");
        let s = !1;
        for (; ; )
            switch (i) {
            case "hex":
                return an(this, t, e, n);
            case "utf8":
            case "utf-8":
                return ln(this, t, e, n);
            case "ascii":
            case "latin1":
            case "binary":
                return fn(this, t, e, n);
            case "base64":
                return hn(this, t, e, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return pn(this, t, e, n);
            default:
                if (s)
                    throw new TypeError("Unknown encoding: " + i);
                i = ("" + i).toLowerCase(),
                s = !0
            }
    }
    ;
    l.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    }
    ;
    function dn(r, t, e) {
        return t === 0 && e === r.length ? _e.fromByteArray(r) : _e.fromByteArray(r.slice(t, e))
    }
    function ar(r, t, e) {
        e = Math.min(r.length, e);
        let n = []
          , i = t;
        for (; i < e; ) {
            let o = r[i]
              , s = null
              , f = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
            if (i + f <= e) {
                let h, m, p, d;
                switch (f) {
                case 1:
                    o < 128 && (s = o);
                    break;
                case 2:
                    h = r[i + 1],
                    (h & 192) === 128 && (d = (o & 31) << 6 | h & 63,
                    d > 127 && (s = d));
                    break;
                case 3:
                    h = r[i + 1],
                    m = r[i + 2],
                    (h & 192) === 128 && (m & 192) === 128 && (d = (o & 15) << 12 | (h & 63) << 6 | m & 63,
                    d > 2047 && (d < 55296 || d > 57343) && (s = d));
                    break;
                case 4:
                    h = r[i + 1],
                    m = r[i + 2],
                    p = r[i + 3],
                    (h & 192) === 128 && (m & 192) === 128 && (p & 192) === 128 && (d = (o & 15) << 18 | (h & 63) << 12 | (m & 63) << 6 | p & 63,
                    d > 65535 && d < 1114112 && (s = d))
                }
            }
            s === null ? (s = 65533,
            f = 1) : s > 65535 && (s -= 65536,
            n.push(s >>> 10 & 1023 | 55296),
            s = 56320 | s & 1023),
            n.push(s),
            i += f
        }
        return yn(n)
    }
    var nr = 4096;
    function yn(r) {
        let t = r.length;
        if (t <= nr)
            return String.fromCharCode.apply(String, r);
        let e = ""
          , n = 0;
        for (; n < t; )
            e += String.fromCharCode.apply(String, r.slice(n, n += nr));
        return e
    }
    function En(r, t, e) {
        let n = "";
        e = Math.min(r.length, e);
        for (let i = t; i < e; ++i)
            n += String.fromCharCode(r[i] & 127);
        return n
    }
    function gn(r, t, e) {
        let n = "";
        e = Math.min(r.length, e);
        for (let i = t; i < e; ++i)
            n += String.fromCharCode(r[i]);
        return n
    }
    function mn(r, t, e) {
        let n = r.length;
        (!t || t < 0) && (t = 0),
        (!e || e < 0 || e > n) && (e = n);
        let i = "";
        for (let o = t; o < e; ++o)
            i += Bn[r[o]];
        return i
    }
    function _n(r, t, e) {
        let n = r.slice(t, e)
          , i = "";
        for (let o = 0; o < n.length - 1; o += 2)
            i += String.fromCharCode(n[o] + n[o + 1] * 256);
        return i
    }
    l.prototype.slice = function(t, e) {
        let n = this.length;
        t = ~~t,
        e = e === void 0 ? n : ~~e,
        t < 0 ? (t += n,
        t < 0 && (t = 0)) : t > n && (t = n),
        e < 0 ? (e += n,
        e < 0 && (e = 0)) : e > n && (e = n),
        e < t && (e = t);
        let i = this.subarray(t, e);
        return Object.setPrototypeOf(i, l.prototype),
        i
    }
    ;
    function tt(r, t, e) {
        if (r % 1 !== 0 || r < 0)
            throw new RangeError("offset is not uint");
        if (r + t > e)
            throw new RangeError("Trying to access beyond buffer length")
    }
    l.prototype.readUintLE = l.prototype.readUIntLE = function(t, e, n) {
        t = t >>> 0,
        e = e >>> 0,
        n || tt(t, e, this.length);
        let i = this[t]
          , o = 1
          , s = 0;
        for (; ++s < e && (o *= 256); )
            i += this[t + s] * o;
        return i
    }
    ;
    l.prototype.readUintBE = l.prototype.readUIntBE = function(t, e, n) {
        t = t >>> 0,
        e = e >>> 0,
        n || tt(t, e, this.length);
        let i = this[t + --e]
          , o = 1;
        for (; e > 0 && (o *= 256); )
            i += this[t + --e] * o;
        return i
    }
    ;
    l.prototype.readUint8 = l.prototype.readUInt8 = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 1, this.length),
        this[t]
    }
    ;
    l.prototype.readUint16LE = l.prototype.readUInt16LE = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 2, this.length),
        this[t] | this[t + 1] << 8
    }
    ;
    l.prototype.readUint16BE = l.prototype.readUInt16BE = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 2, this.length),
        this[t] << 8 | this[t + 1]
    }
    ;
    l.prototype.readUint32LE = l.prototype.readUInt32LE = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 4, this.length),
        (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216
    }
    ;
    l.prototype.readUint32BE = l.prototype.readUInt32BE = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 4, this.length),
        this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
    }
    ;
    l.prototype.readBigUInt64LE = Ct(function(t) {
        t = t >>> 0,
        Mt(t, "offset");
        let e = this[t]
          , n = this[t + 7];
        (e === void 0 || n === void 0) && qt(t, this.length - 8);
        let i = e + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24
          , o = this[++t] + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + n * 2 ** 24;
        return BigInt(i) + (BigInt(o) << BigInt(32))
    });
    l.prototype.readBigUInt64BE = Ct(function(t) {
        t = t >>> 0,
        Mt(t, "offset");
        let e = this[t]
          , n = this[t + 7];
        (e === void 0 || n === void 0) && qt(t, this.length - 8);
        let i = e * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t]
          , o = this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n;
        return (BigInt(i) << BigInt(32)) + BigInt(o)
    });
    l.prototype.readIntLE = function(t, e, n) {
        t = t >>> 0,
        e = e >>> 0,
        n || tt(t, e, this.length);
        let i = this[t]
          , o = 1
          , s = 0;
        for (; ++s < e && (o *= 256); )
            i += this[t + s] * o;
        return o *= 128,
        i >= o && (i -= Math.pow(2, 8 * e)),
        i
    }
    ;
    l.prototype.readIntBE = function(t, e, n) {
        t = t >>> 0,
        e = e >>> 0,
        n || tt(t, e, this.length);
        let i = e
          , o = 1
          , s = this[t + --i];
        for (; i > 0 && (o *= 256); )
            s += this[t + --i] * o;
        return o *= 128,
        s >= o && (s -= Math.pow(2, 8 * e)),
        s
    }
    ;
    l.prototype.readInt8 = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 1, this.length),
        this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t]
    }
    ;
    l.prototype.readInt16LE = function(t, e) {
        t = t >>> 0,
        e || tt(t, 2, this.length);
        let n = this[t] | this[t + 1] << 8;
        return n & 32768 ? n | 4294901760 : n
    }
    ;
    l.prototype.readInt16BE = function(t, e) {
        t = t >>> 0,
        e || tt(t, 2, this.length);
        let n = this[t + 1] | this[t] << 8;
        return n & 32768 ? n | 4294901760 : n
    }
    ;
    l.prototype.readInt32LE = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 4, this.length),
        this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
    }
    ;
    l.prototype.readInt32BE = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 4, this.length),
        this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
    }
    ;
    l.prototype.readBigInt64LE = Ct(function(t) {
        t = t >>> 0,
        Mt(t, "offset");
        let e = this[t]
          , n = this[t + 7];
        (e === void 0 || n === void 0) && qt(t, this.length - 8);
        let i = this[t + 4] + this[t + 5] * 2 ** 8 + this[t + 6] * 2 ** 16 + (n << 24);
        return (BigInt(i) << BigInt(32)) + BigInt(e + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24)
    });
    l.prototype.readBigInt64BE = Ct(function(t) {
        t = t >>> 0,
        Mt(t, "offset");
        let e = this[t]
          , n = this[t + 7];
        (e === void 0 || n === void 0) && qt(t, this.length - 8);
        let i = (e << 24) + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
        return (BigInt(i) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n)
    });
    l.prototype.readFloatLE = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 4, this.length),
        Ut.read(this, t, !0, 23, 4)
    }
    ;
    l.prototype.readFloatBE = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 4, this.length),
        Ut.read(this, t, !1, 23, 4)
    }
    ;
    l.prototype.readDoubleLE = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 8, this.length),
        Ut.read(this, t, !0, 52, 8)
    }
    ;
    l.prototype.readDoubleBE = function(t, e) {
        return t = t >>> 0,
        e || tt(t, 8, this.length),
        Ut.read(this, t, !1, 52, 8)
    }
    ;
    function nt(r, t, e, n, i, o) {
        if (!l.isBuffer(r))
            throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < o)
            throw new RangeError('"value" argument is out of bounds');
        if (e + n > r.length)
            throw new RangeError("Index out of range")
    }
    l.prototype.writeUintLE = l.prototype.writeUIntLE = function(t, e, n, i) {
        if (t = +t,
        e = e >>> 0,
        n = n >>> 0,
        !i) {
            let f = Math.pow(2, 8 * n) - 1;
            nt(this, t, e, n, f, 0)
        }
        let o = 1
          , s = 0;
        for (this[e] = t & 255; ++s < n && (o *= 256); )
            this[e + s] = t / o & 255;
        return e + n
    }
    ;
    l.prototype.writeUintBE = l.prototype.writeUIntBE = function(t, e, n, i) {
        if (t = +t,
        e = e >>> 0,
        n = n >>> 0,
        !i) {
            let f = Math.pow(2, 8 * n) - 1;
            nt(this, t, e, n, f, 0)
        }
        let o = n - 1
          , s = 1;
        for (this[e + o] = t & 255; --o >= 0 && (s *= 256); )
            this[e + o] = t / s & 255;
        return e + n
    }
    ;
    l.prototype.writeUint8 = l.prototype.writeUInt8 = function(t, e, n) {
        return t = +t,
        e = e >>> 0,
        n || nt(this, t, e, 1, 255, 0),
        this[e] = t & 255,
        e + 1
    }
    ;
    l.prototype.writeUint16LE = l.prototype.writeUInt16LE = function(t, e, n) {
        return t = +t,
        e = e >>> 0,
        n || nt(this, t, e, 2, 65535, 0),
        this[e] = t & 255,
        this[e + 1] = t >>> 8,
        e + 2
    }
    ;
    l.prototype.writeUint16BE = l.prototype.writeUInt16BE = function(t, e, n) {
        return t = +t,
        e = e >>> 0,
        n || nt(this, t, e, 2, 65535, 0),
        this[e] = t >>> 8,
        this[e + 1] = t & 255,
        e + 2
    }
    ;
    l.prototype.writeUint32LE = l.prototype.writeUInt32LE = function(t, e, n) {
        return t = +t,
        e = e >>> 0,
        n || nt(this, t, e, 4, 4294967295, 0),
        this[e + 3] = t >>> 24,
        this[e + 2] = t >>> 16,
        this[e + 1] = t >>> 8,
        this[e] = t & 255,
        e + 4
    }
    ;
    l.prototype.writeUint32BE = l.prototype.writeUInt32BE = function(t, e, n) {
        return t = +t,
        e = e >>> 0,
        n || nt(this, t, e, 4, 4294967295, 0),
        this[e] = t >>> 24,
        this[e + 1] = t >>> 16,
        this[e + 2] = t >>> 8,
        this[e + 3] = t & 255,
        e + 4
    }
    ;
    function lr(r, t, e, n, i) {
        yr(t, n, i, r, e, 7);
        let o = Number(t & BigInt(4294967295));
        r[e++] = o,
        o = o >> 8,
        r[e++] = o,
        o = o >> 8,
        r[e++] = o,
        o = o >> 8,
        r[e++] = o;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return r[e++] = s,
        s = s >> 8,
        r[e++] = s,
        s = s >> 8,
        r[e++] = s,
        s = s >> 8,
        r[e++] = s,
        e
    }
    function fr(r, t, e, n, i) {
        yr(t, n, i, r, e, 7);
        let o = Number(t & BigInt(4294967295));
        r[e + 7] = o,
        o = o >> 8,
        r[e + 6] = o,
        o = o >> 8,
        r[e + 5] = o,
        o = o >> 8,
        r[e + 4] = o;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return r[e + 3] = s,
        s = s >> 8,
        r[e + 2] = s,
        s = s >> 8,
        r[e + 1] = s,
        s = s >> 8,
        r[e] = s,
        e + 8
    }
    l.prototype.writeBigUInt64LE = Ct(function(t, e=0) {
        return lr(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
    });
    l.prototype.writeBigUInt64BE = Ct(function(t, e=0) {
        return fr(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
    });
    l.prototype.writeIntLE = function(t, e, n, i) {
        if (t = +t,
        e = e >>> 0,
        !i) {
            let h = Math.pow(2, 8 * n - 1);
            nt(this, t, e, n, h - 1, -h)
        }
        let o = 0
          , s = 1
          , f = 0;
        for (this[e] = t & 255; ++o < n && (s *= 256); )
            t < 0 && f === 0 && this[e + o - 1] !== 0 && (f = 1),
            this[e + o] = (t / s >> 0) - f & 255;
        return e + n
    }
    ;
    l.prototype.writeIntBE = function(t, e, n, i) {
        if (t = +t,
        e = e >>> 0,
        !i) {
            let h = Math.pow(2, 8 * n - 1);
            nt(this, t, e, n, h - 1, -h)
        }
        let o = n - 1
          , s = 1
          , f = 0;
        for (this[e + o] = t & 255; --o >= 0 && (s *= 256); )
            t < 0 && f === 0 && this[e + o + 1] !== 0 && (f = 1),
            this[e + o] = (t / s >> 0) - f & 255;
        return e + n
    }
    ;
    l.prototype.writeInt8 = function(t, e, n) {
        return t = +t,
        e = e >>> 0,
        n || nt(this, t, e, 1, 127, -128),
        t < 0 && (t = 255 + t + 1),
        this[e] = t & 255,
        e + 1
    }
    ;
    l.prototype.writeInt16LE = function(t, e, n) {
        return t = +t,
        e = e >>> 0,
        n || nt(this, t, e, 2, 32767, -32768),
        this[e] = t & 255,
        this[e + 1] = t >>> 8,
        e + 2
    }
    ;
    l.prototype.writeInt16BE = function(t, e, n) {
        return t = +t,
        e = e >>> 0,
        n || nt(this, t, e, 2, 32767, -32768),
        this[e] = t >>> 8,
        this[e + 1] = t & 255,
        e + 2
    }
    ;
    l.prototype.writeInt32LE = function(t, e, n) {
        return t = +t,
        e = e >>> 0,
        n || nt(this, t, e, 4, 2147483647, -2147483648),
        this[e] = t & 255,
        this[e + 1] = t >>> 8,
        this[e + 2] = t >>> 16,
        this[e + 3] = t >>> 24,
        e + 4
    }
    ;
    l.prototype.writeInt32BE = function(t, e, n) {
        return t = +t,
        e = e >>> 0,
        n || nt(this, t, e, 4, 2147483647, -2147483648),
        t < 0 && (t = 4294967295 + t + 1),
        this[e] = t >>> 24,
        this[e + 1] = t >>> 16,
        this[e + 2] = t >>> 8,
        this[e + 3] = t & 255,
        e + 4
    }
    ;
    l.prototype.writeBigInt64LE = Ct(function(t, e=0) {
        return lr(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });
    l.prototype.writeBigInt64BE = Ct(function(t, e=0) {
        return fr(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });
    function hr(r, t, e, n, i, o) {
        if (e + n > r.length)
            throw new RangeError("Index out of range");
        if (e < 0)
            throw new RangeError("Index out of range")
    }
    function pr(r, t, e, n, i) {
        return t = +t,
        e = e >>> 0,
        i || hr(r, t, e, 4, 34028234663852886e22, -34028234663852886e22),
        Ut.write(r, t, e, n, 23, 4),
        e + 4
    }
    l.prototype.writeFloatLE = function(t, e, n) {
        return pr(this, t, e, !0, n)
    }
    ;
    l.prototype.writeFloatBE = function(t, e, n) {
        return pr(this, t, e, !1, n)
    }
    ;
    function dr(r, t, e, n, i) {
        return t = +t,
        e = e >>> 0,
        i || hr(r, t, e, 8, 17976931348623157e292, -17976931348623157e292),
        Ut.write(r, t, e, n, 52, 8),
        e + 8
    }
    l.prototype.writeDoubleLE = function(t, e, n) {
        return dr(this, t, e, !0, n)
    }
    ;
    l.prototype.writeDoubleBE = function(t, e, n) {
        return dr(this, t, e, !1, n)
    }
    ;
    l.prototype.copy = function(t, e, n, i) {
        if (!l.isBuffer(t))
            throw new TypeError("argument should be a Buffer");
        if (n || (n = 0),
        !i && i !== 0 && (i = this.length),
        e >= t.length && (e = t.length),
        e || (e = 0),
        i > 0 && i < n && (i = n),
        i === n || t.length === 0 || this.length === 0)
            return 0;
        if (e < 0)
            throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length)
            throw new RangeError("Index out of range");
        if (i < 0)
            throw new RangeError("sourceEnd out of bounds");
        i > this.length && (i = this.length),
        t.length - e < i - n && (i = t.length - e + n);
        let o = i - n;
        return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(e, n, i) : Uint8Array.prototype.set.call(t, this.subarray(n, i), e),
        o
    }
    ;
    l.prototype.fill = function(t, e, n, i) {
        if (typeof t == "string") {
            if (typeof e == "string" ? (i = e,
            e = 0,
            n = this.length) : typeof n == "string" && (i = n,
            n = this.length),
            i !== void 0 && typeof i != "string")
                throw new TypeError("encoding must be a string");
            if (typeof i == "string" && !l.isEncoding(i))
                throw new TypeError("Unknown encoding: " + i);
            if (t.length === 1) {
                let s = t.charCodeAt(0);
                (i === "utf8" && s < 128 || i === "latin1") && (t = s)
            }
        } else
            typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
        if (e < 0 || this.length < e || this.length < n)
            throw new RangeError("Out of range index");
        if (n <= e)
            return this;
        e = e >>> 0,
        n = n === void 0 ? this.length : n >>> 0,
        t || (t = 0);
        let o;
        if (typeof t == "number")
            for (o = e; o < n; ++o)
                this[o] = t;
        else {
            let s = l.isBuffer(t) ? t : l.from(t, i)
              , f = s.length;
            if (f === 0)
                throw new TypeError('The value "' + t + '" is invalid for argument "value"');
            for (o = 0; o < n - e; ++o)
                this[o + e] = s[o % f]
        }
        return this
    }
    ;
    var Ot = {};
    function Be(r, t, e) {
        Ot[r] = class extends e {
            constructor() {
                super(),
                Object.defineProperty(this, "message", {
                    value: t.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }),
                this.name = `${this.name} [${r}]`,
                this.stack,
                delete this.name
            }
            get code() {
                return r
            }
            set code(i) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: i,
                    writable: !0
                })
            }
            toString() {
                return `${this.name} [${r}]: ${this.message}`
            }
        }
    }
    Be("ERR_BUFFER_OUT_OF_BOUNDS", function(r) {
        return r ? `${r} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
    }, RangeError);
    Be("ERR_INVALID_ARG_TYPE", function(r, t) {
        return `The "${r}" argument must be of type number. Received type ${typeof t}`
    }, TypeError);
    Be("ERR_OUT_OF_RANGE", function(r, t, e) {
        let n = `The value of "${r}" is out of range.`
          , i = e;
        return Number.isInteger(e) && Math.abs(e) > 2 ** 32 ? i = ir(String(e)) : typeof e == "bigint" && (i = String(e),
        (e > BigInt(2) ** BigInt(32) || e < -(BigInt(2) ** BigInt(32))) && (i = ir(i)),
        i += "n"),
        n += ` It must be ${t}. Received ${i}`,
        n
    }, RangeError);
    function ir(r) {
        let t = ""
          , e = r.length
          , n = r[0] === "-" ? 1 : 0;
        for (; e >= n + 4; e -= 3)
            t = `_${r.slice(e - 3, e)}${t}`;
        return `${r.slice(0, e)}${t}`
    }
    function Tn(r, t, e) {
        Mt(t, "offset"),
        (r[t] === void 0 || r[t + e] === void 0) && qt(t, r.length - (e + 1))
    }
    function yr(r, t, e, n, i, o) {
        if (r > e || r < t) {
            let s = typeof t == "bigint" ? "n" : "", f;
            throw o > 3 ? t === 0 || t === BigInt(0) ? f = `>= 0${s} and < 2${s} ** ${(o + 1) * 8}${s}` : f = `>= -(2${s} ** ${(o + 1) * 8 - 1}${s}) and < 2 ** ${(o + 1) * 8 - 1}${s}` : f = `>= ${t}${s} and <= ${e}${s}`,
            new Ot.ERR_OUT_OF_RANGE("value",f,r)
        }
        Tn(n, i, o)
    }
    function Mt(r, t) {
        if (typeof r != "number")
            throw new Ot.ERR_INVALID_ARG_TYPE(t,"number",r)
    }
    function qt(r, t, e) {
        throw Math.floor(r) !== r ? (Mt(r, e),
        new Ot.ERR_OUT_OF_RANGE(e || "offset","an integer",r)) : t < 0 ? new Ot.ERR_BUFFER_OUT_OF_BOUNDS : new Ot.ERR_OUT_OF_RANGE(e || "offset",`>= ${e ? 1 : 0} and <= ${t}`,r)
    }
    var wn = /[^+/0-9A-Za-z-_]/g;
    function kn(r) {
        if (r = r.split("=")[0],
        r = r.trim().replace(wn, ""),
        r.length < 2)
            return "";
        for (; r.length % 4 !== 0; )
            r = r + "=";
        return r
    }
    function ke(r, t) {
        t = t || 1 / 0;
        let e, n = r.length, i = null, o = [];
        for (let s = 0; s < n; ++s) {
            if (e = r.charCodeAt(s),
            e > 55295 && e < 57344) {
                if (!i) {
                    if (e > 56319) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue
                    } else if (s + 1 === n) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue
                    }
                    i = e;
                    continue
                }
                if (e < 56320) {
                    (t -= 3) > -1 && o.push(239, 191, 189),
                    i = e;
                    continue
                }
                e = (i - 55296 << 10 | e - 56320) + 65536
            } else
                i && (t -= 3) > -1 && o.push(239, 191, 189);
            if (i = null,
            e < 128) {
                if ((t -= 1) < 0)
                    break;
                o.push(e)
            } else if (e < 2048) {
                if ((t -= 2) < 0)
                    break;
                o.push(e >> 6 | 192, e & 63 | 128)
            } else if (e < 65536) {
                if ((t -= 3) < 0)
                    break;
                o.push(e >> 12 | 224, e >> 6 & 63 | 128, e & 63 | 128)
            } else if (e < 1114112) {
                if ((t -= 4) < 0)
                    break;
                o.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, e & 63 | 128)
            } else
                throw new Error("Invalid code point")
        }
        return o
    }
    function xn(r) {
        let t = [];
        for (let e = 0; e < r.length; ++e)
            t.push(r.charCodeAt(e) & 255);
        return t
    }
    function In(r, t) {
        let e, n, i, o = [];
        for (let s = 0; s < r.length && !((t -= 2) < 0); ++s)
            e = r.charCodeAt(s),
            n = e >> 8,
            i = e % 256,
            o.push(i),
            o.push(n);
        return o
    }
    function Er(r) {
        return _e.toByteArray(kn(r))
    }
    function ee(r, t, e, n) {
        let i;
        for (i = 0; i < n && !(i + e >= t.length || i >= r.length); ++i)
            t[i + e] = r[i];
        return i
    }
    function dt(r, t) {
        return r instanceof t || r != null && r.constructor != null && r.constructor.name != null && r.constructor.name === t.name
    }
    function be(r) {
        return r !== r
    }
    var Bn = function() {
        let r = "0123456789abcdef"
          , t = new Array(256);
        for (let e = 0; e < 16; ++e) {
            let n = e * 16;
            for (let i = 0; i < 16; ++i)
                t[n + i] = r[e] + r[i]
        }
        return t
    }();
    function Ct(r) {
        return typeof BigInt > "u" ? bn : r
    }
    function bn() {
        throw new Error("BigInt not supported")
    }
}
);
var kr = zt( (Dn, wr) => {
    "use strict";
    var J = wr.exports = {}, yt, Et;
    function Re() {
        throw new Error("setTimeout has not been defined")
    }
    function Ce() {
        throw new Error("clearTimeout has not been defined")
    }
    (function() {
        try {
            typeof setTimeout == "function" ? yt = setTimeout : yt = Re
        } catch {
            yt = Re
        }
        try {
            typeof clearTimeout == "function" ? Et = clearTimeout : Et = Ce
        } catch {
            Et = Ce
        }
    }
    )();
    function mr(r) {
        if (yt === setTimeout)
            return setTimeout(r, 0);
        if ((yt === Re || !yt) && setTimeout)
            return yt = setTimeout,
            setTimeout(r, 0);
        try {
            return yt(r, 0)
        } catch {
            try {
                return yt.call(null, r, 0)
            } catch {
                return yt.call(this, r, 0)
            }
        }
    }
    function Rn(r) {
        if (Et === clearTimeout)
            return clearTimeout(r);
        if ((Et === Ce || !Et) && clearTimeout)
            return Et = clearTimeout,
            clearTimeout(r);
        try {
            return Et(r)
        } catch {
            try {
                return Et.call(null, r)
            } catch {
                return Et.call(this, r)
            }
        }
    }
    var It = [], jt = !1, St, re = -1;
    function Cn() {
        !jt || !St || (jt = !1,
        St.length ? It = St.concat(It) : re = -1,
        It.length && _r())
    }
    function _r() {
        if (!jt) {
            var r = mr(Cn);
            jt = !0;
            for (var t = It.length; t; ) {
                for (St = It,
                It = []; ++re < t; )
                    St && St[re].run();
                re = -1,
                t = It.length
            }
            St = null,
            jt = !1,
            Rn(r)
        }
    }
    J.nextTick = function(r) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var e = 1; e < arguments.length; e++)
                t[e - 1] = arguments[e];
        It.push(new Tr(r,t)),
        It.length === 1 && !jt && mr(_r)
    }
    ;
    function Tr(r, t) {
        this.fun = r,
        this.array = t
    }
    Tr.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ;
    J.title = "browser";
    J.browser = !0;
    J.env = {};
    J.argv = [];
    J.version = "";
    J.versions = {};
    function Bt() {}
    J.on = Bt;
    J.addListener = Bt;
    J.once = Bt;
    J.off = Bt;
    J.removeListener = Bt;
    J.removeAllListeners = Bt;
    J.emit = Bt;
    J.prependListener = Bt;
    J.prependOnceListener = Bt;
    J.listeners = function(r) {
        return []
    }
    ;
    J.binding = function(r) {
        throw new Error("process.binding is not supported")
    }
    ;
    J.cwd = function() {
        return "/"
    }
    ;
    J.chdir = function(r) {
        throw new Error("process.chdir is not supported")
    }
    ;
    J.umask = function() {
        return 0
    }
}
);
var ht = globalThis;
function it(r) {
    return (ht.__Zone_symbol_prefix || "__zone_symbol__") + r
}
function Ir() {
    let r = ht.performance;
    function t(v) {
        r && r.mark && r.mark(v)
    }
    function e(v, T) {
        r && r.measure && r.measure(v, T)
    }
    t("Zone");
    let n = ( () => {
        class v {
            static{this.__symbol__ = it
            }static assertZonePatched() {
                if (ht.Promise !== F.ZoneAwarePromise)
                    throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")
            }
            static get root() {
                let c = v.current;
                for (; c.parent; )
                    c = c.parent;
                return c
            }
            static get current() {
                return b.zone
            }
            static get currentTask() {
                return S
            }
            static __load_patch(c, u, x=!1) {
                if (F.hasOwnProperty(c)) {
                    let R = ht[it("forceDuplicateZoneCheck")] === !0;
                    if (!x && R)
                        throw Error("Already loaded patch: " + c)
                } else if (!ht["__Zone_disable_" + c]) {
                    let R = "Zone:" + c;
                    t(R),
                    F[c] = u(ht, v, A),
                    e(R, R)
                }
            }
            get parent() {
                return this._parent
            }
            get name() {
                return this._name
            }
            constructor(c, u) {
                this._parent = c,
                this._name = u ? u.name || "unnamed" : "<root>",
                this._properties = u && u.properties || {},
                this._zoneDelegate = new o(this,this._parent && this._parent._zoneDelegate,u)
            }
            get(c) {
                let u = this.getZoneWith(c);
                if (u)
                    return u._properties[c]
            }
            getZoneWith(c) {
                let u = this;
                for (; u; ) {
                    if (u._properties.hasOwnProperty(c))
                        return u;
                    u = u._parent
                }
                return null
            }
            fork(c) {
                if (!c)
                    throw new Error("ZoneSpec required!");
                return this._zoneDelegate.fork(this, c)
            }
            wrap(c, u) {
                if (typeof c != "function")
                    throw new Error("Expecting function got: " + c);
                let x = this._zoneDelegate.intercept(this, c, u)
                  , R = this;
                return function() {
                    return R.runGuarded(x, this, arguments, u)
                }
            }
            run(c, u, x, R) {
                b = {
                    parent: b,
                    zone: this
                };
                try {
                    return this._zoneDelegate.invoke(this, c, u, x, R)
                } finally {
                    b = b.parent
                }
            }
            runGuarded(c, u=null, x, R) {
                b = {
                    parent: b,
                    zone: this
                };
                try {
                    try {
                        return this._zoneDelegate.invoke(this, c, u, x, R)
                    } catch (z) {
                        if (this._zoneDelegate.handleError(this, z))
                            throw z
                    }
                } finally {
                    b = b.parent
                }
            }
            runTask(c, u, x) {
                if (c.zone != this)
                    throw new Error("A task can only be run in the zone of creation! (Creation: " + (c.zone || et).name + "; Execution: " + this.name + ")");
                let R = c
                  , {type: z, data: {isPeriodic: U=!1, isRefreshable: bt=!1}={}} = c;
                if (c.state === X && (z === q || z === w))
                    return;
                let gt = c.state != M;
                gt && R._transitionTo(M, _);
                let mt = S;
                S = R,
                b = {
                    parent: b,
                    zone: this
                };
                try {
                    z == w && c.data && !U && !bt && (c.cancelFn = void 0);
                    try {
                        return this._zoneDelegate.invokeTask(this, R, u, x)
                    } catch (ct) {
                        if (this._zoneDelegate.handleError(this, ct))
                            throw ct
                    }
                } finally {
                    let ct = c.state;
                    if (ct !== X && ct !== Y)
                        if (z == q || U || bt && ct === I)
                            gt && R._transitionTo(_, M, I);
                        else {
                            let g = R._zoneDelegates;
                            this._updateTaskCount(R, -1),
                            gt && R._transitionTo(X, M, X),
                            bt && (R._zoneDelegates = g)
                        }
                    b = b.parent,
                    S = mt
                }
            }
            scheduleTask(c) {
                if (c.zone && c.zone !== this) {
                    let x = this;
                    for (; x; ) {
                        if (x === c.zone)
                            throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${c.zone.name}`);
                        x = x.parent
                    }
                }
                c._transitionTo(I, X);
                let u = [];
                c._zoneDelegates = u,
                c._zone = this;
                try {
                    c = this._zoneDelegate.scheduleTask(this, c)
                } catch (x) {
                    throw c._transitionTo(Y, I, X),
                    this._zoneDelegate.handleError(this, x),
                    x
                }
                return c._zoneDelegates === u && this._updateTaskCount(c, 1),
                c.state == I && c._transitionTo(_, I),
                c
            }
            scheduleMicroTask(c, u, x, R) {
                return this.scheduleTask(new s(G,c,u,x,R,void 0))
            }
            scheduleMacroTask(c, u, x, R, z) {
                return this.scheduleTask(new s(w,c,u,x,R,z))
            }
            scheduleEventTask(c, u, x, R, z) {
                return this.scheduleTask(new s(q,c,u,x,R,z))
            }
            cancelTask(c) {
                if (c.zone != this)
                    throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (c.zone || et).name + "; Execution: " + this.name + ")");
                if (!(c.state !== _ && c.state !== M)) {
                    c._transitionTo(H, _, M);
                    try {
                        this._zoneDelegate.cancelTask(this, c)
                    } catch (u) {
                        throw c._transitionTo(Y, H),
                        this._zoneDelegate.handleError(this, u),
                        u
                    }
                    return this._updateTaskCount(c, -1),
                    c._transitionTo(X, H),
                    c.runCount = -1,
                    c
                }
            }
            _updateTaskCount(c, u) {
                let x = c._zoneDelegates;
                u == -1 && (c._zoneDelegates = null);
                for (let R = 0; R < x.length; R++)
                    x[R]._updateTaskCount(c.type, u)
            }
        }
        return v
    }
    )()
      , i = {
        name: "",
        onHasTask: (v, T, c, u) => v.hasTask(c, u),
        onScheduleTask: (v, T, c, u) => v.scheduleTask(c, u),
        onInvokeTask: (v, T, c, u, x, R) => v.invokeTask(c, u, x, R),
        onCancelTask: (v, T, c, u) => v.cancelTask(c, u)
    };
    class o {
        get zone() {
            return this._zone
        }
        constructor(T, c, u) {
            this._taskCounts = {
                microTask: 0,
                macroTask: 0,
                eventTask: 0
            },
            this._zone = T,
            this._parentDelegate = c,
            this._forkZS = u && (u && u.onFork ? u : c._forkZS),
            this._forkDlgt = u && (u.onFork ? c : c._forkDlgt),
            this._forkCurrZone = u && (u.onFork ? this._zone : c._forkCurrZone),
            this._interceptZS = u && (u.onIntercept ? u : c._interceptZS),
            this._interceptDlgt = u && (u.onIntercept ? c : c._interceptDlgt),
            this._interceptCurrZone = u && (u.onIntercept ? this._zone : c._interceptCurrZone),
            this._invokeZS = u && (u.onInvoke ? u : c._invokeZS),
            this._invokeDlgt = u && (u.onInvoke ? c : c._invokeDlgt),
            this._invokeCurrZone = u && (u.onInvoke ? this._zone : c._invokeCurrZone),
            this._handleErrorZS = u && (u.onHandleError ? u : c._handleErrorZS),
            this._handleErrorDlgt = u && (u.onHandleError ? c : c._handleErrorDlgt),
            this._handleErrorCurrZone = u && (u.onHandleError ? this._zone : c._handleErrorCurrZone),
            this._scheduleTaskZS = u && (u.onScheduleTask ? u : c._scheduleTaskZS),
            this._scheduleTaskDlgt = u && (u.onScheduleTask ? c : c._scheduleTaskDlgt),
            this._scheduleTaskCurrZone = u && (u.onScheduleTask ? this._zone : c._scheduleTaskCurrZone),
            this._invokeTaskZS = u && (u.onInvokeTask ? u : c._invokeTaskZS),
            this._invokeTaskDlgt = u && (u.onInvokeTask ? c : c._invokeTaskDlgt),
            this._invokeTaskCurrZone = u && (u.onInvokeTask ? this._zone : c._invokeTaskCurrZone),
            this._cancelTaskZS = u && (u.onCancelTask ? u : c._cancelTaskZS),
            this._cancelTaskDlgt = u && (u.onCancelTask ? c : c._cancelTaskDlgt),
            this._cancelTaskCurrZone = u && (u.onCancelTask ? this._zone : c._cancelTaskCurrZone),
            this._hasTaskZS = null,
            this._hasTaskDlgt = null,
            this._hasTaskDlgtOwner = null,
            this._hasTaskCurrZone = null;
            let x = u && u.onHasTask
              , R = c && c._hasTaskZS;
            (x || R) && (this._hasTaskZS = x ? u : i,
            this._hasTaskDlgt = c,
            this._hasTaskDlgtOwner = this,
            this._hasTaskCurrZone = this._zone,
            u.onScheduleTask || (this._scheduleTaskZS = i,
            this._scheduleTaskDlgt = c,
            this._scheduleTaskCurrZone = this._zone),
            u.onInvokeTask || (this._invokeTaskZS = i,
            this._invokeTaskDlgt = c,
            this._invokeTaskCurrZone = this._zone),
            u.onCancelTask || (this._cancelTaskZS = i,
            this._cancelTaskDlgt = c,
            this._cancelTaskCurrZone = this._zone))
        }
        fork(T, c) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, T, c) : new n(T,c)
        }
        intercept(T, c, u) {
            return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, T, c, u) : c
        }
        invoke(T, c, u, x, R) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, T, c, u, x, R) : c.apply(u, x)
        }
        handleError(T, c) {
            return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, T, c) : !0
        }
        scheduleTask(T, c) {
            let u = c;
            if (this._scheduleTaskZS)
                this._hasTaskZS && u._zoneDelegates.push(this._hasTaskDlgtOwner),
                u = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, T, c),
                u || (u = c);
            else if (c.scheduleFn)
                c.scheduleFn(c);
            else if (c.type == G)
                j(c);
            else
                throw new Error("Task is missing scheduleFn.");
            return u
        }
        invokeTask(T, c, u, x) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, T, c, u, x) : c.callback.apply(u, x)
        }
        cancelTask(T, c) {
            let u;
            if (this._cancelTaskZS)
                u = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, T, c);
            else {
                if (!c.cancelFn)
                    throw Error("Task is not cancelable");
                u = c.cancelFn(c)
            }
            return u
        }
        hasTask(T, c) {
            try {
                this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, T, c)
            } catch (u) {
                this.handleError(T, u)
            }
        }
        _updateTaskCount(T, c) {
            let u = this._taskCounts
              , x = u[T]
              , R = u[T] = x + c;
            if (R < 0)
                throw new Error("More tasks executed then were scheduled.");
            if (x == 0 || R == 0) {
                let z = {
                    microTask: u.microTask > 0,
                    macroTask: u.macroTask > 0,
                    eventTask: u.eventTask > 0,
                    change: T
                };
                this.hasTask(this._zone, z)
            }
        }
    }
    class s {
        constructor(T, c, u, x, R, z) {
            if (this._zone = null,
            this.runCount = 0,
            this._zoneDelegates = null,
            this._state = "notScheduled",
            this.type = T,
            this.source = c,
            this.data = x,
            this.scheduleFn = R,
            this.cancelFn = z,
            !u)
                throw new Error("callback is not defined");
            this.callback = u;
            let U = this;
            T === q && x && x.useG ? this.invoke = s.invokeTask : this.invoke = function() {
                return s.invokeTask.call(ht, U, this, arguments)
            }
        }
        static invokeTask(T, c, u) {
            T || (T = this),
            rt++;
            try {
                return T.runCount++,
                T.zone.runTask(T, c, u)
            } finally {
                rt == 1 && Q(),
                rt--
            }
        }
        get zone() {
            return this._zone
        }
        get state() {
            return this._state
        }
        cancelScheduleRequest() {
            this._transitionTo(X, I)
        }
        _transitionTo(T, c, u) {
            if (this._state === c || this._state === u)
                this._state = T,
                T == X && (this._zoneDelegates = null);
            else
                throw new Error(`${this.type} '${this.source}': can not transition to '${T}', expecting state '${c}'${u ? " or '" + u + "'" : ""}, was '${this._state}'.`)
        }
        toString() {
            return this.data && typeof this.data.handleId < "u" ? this.data.handleId.toString() : Object.prototype.toString.call(this)
        }
        toJSON() {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            }
        }
    }
    let f = it("setTimeout"), h = it("Promise"), m = it("then"), p = [], d = !1, C;
    function N(v) {
        if (C || ht[h] && (C = ht[h].resolve(0)),
        C) {
            let T = C[m];
            T || (T = C.then),
            T.call(C, v)
        } else
            ht[f](v, 0)
    }
    function j(v) {
        rt === 0 && p.length === 0 && N(Q),
        v && p.push(v)
    }
    function Q() {
        if (!d) {
            for (d = !0; p.length; ) {
                let v = p;
                p = [];
                for (let T = 0; T < v.length; T++) {
                    let c = v[T];
                    try {
                        c.zone.runTask(c, null, null)
                    } catch (u) {
                        A.onUnhandledError(u)
                    }
                }
            }
            A.microtaskDrainDone(),
            d = !1
        }
    }
    let et = {
        name: "NO ZONE"
    }
      , X = "notScheduled"
      , I = "scheduling"
      , _ = "scheduled"
      , M = "running"
      , H = "canceling"
      , Y = "unknown"
      , G = "microTask"
      , w = "macroTask"
      , q = "eventTask"
      , F = {}
      , A = {
        symbol: it,
        currentZoneFrame: () => b,
        onUnhandledError: W,
        microtaskDrainDone: W,
        scheduleMicroTask: j,
        showUncaughtError: () => !n[it("ignoreConsoleErrorUncaughtError")],
        patchEventTarget: () => [],
        patchOnProperties: W,
        patchMethod: () => W,
        bindArguments: () => [],
        patchThen: () => W,
        patchMacroTask: () => W,
        patchEventPrototype: () => W,
        isIEOrEdge: () => !1,
        getGlobalObjects: () => {}
        ,
        ObjectDefineProperty: () => W,
        ObjectGetOwnPropertyDescriptor: () => {}
        ,
        ObjectCreate: () => {}
        ,
        ArraySlice: () => [],
        patchClass: () => W,
        wrapWithCurrentZone: () => W,
        filterProperties: () => [],
        attachOriginToPatched: () => W,
        _redefineProperty: () => W,
        patchCallbacks: () => W,
        nativeScheduleMicroTask: N
    }
      , b = {
        parent: null,
        zone: new n(null,null)
    }
      , S = null
      , rt = 0;
    function W() {}
    return e("Zone", "Zone"),
    n
}
function Br() {
    let r = globalThis
      , t = r[it("forceDuplicateZoneCheck")] === !0;
    if (r.Zone && (t || typeof r.Zone.__symbol__ != "function"))
        throw new Error("Zone already loaded.");
    return r.Zone ??= Ir(),
    r.Zone
}
var Vt = Object.getOwnPropertyDescriptor
  , ae = Object.defineProperty
  , le = Object.getPrototypeOf
  , br = Object.create
  , Rr = Array.prototype.slice
  , fe = "addEventListener"
  , he = "removeEventListener"
  , oe = it(fe)
  , se = it(he)
  , _t = "true"
  , Tt = "false"
  , $t = it("");
function pe(r, t) {
    return Zone.current.wrap(r, t)
}
function de(r, t, e, n, i) {
    return Zone.current.scheduleMacroTask(r, t, e, n, i)
}
var Z = it
  , Jt = typeof window < "u"
  , Lt = Jt ? window : void 0
  , K = Jt && Lt || globalThis
  , Cr = "removeAttribute";
function ye(r, t) {
    for (let e = r.length - 1; e >= 0; e--)
        typeof r[e] == "function" && (r[e] = pe(r[e], t + "_" + e));
    return r
}
function Ar(r, t) {
    let e = r.constructor.name;
    for (let n = 0; n < t.length; n++) {
        let i = t[n]
          , o = r[i];
        if (o) {
            let s = Vt(r, i);
            if (!Ze(s))
                continue;
            r[i] = (f => {
                let h = function() {
                    return f.apply(this, ye(arguments, e + "." + i))
                };
                return kt(h, f),
                h
            }
            )(o)
        }
    }
}
function Ze(r) {
    return r ? r.writable === !1 ? !1 : !(typeof r.get == "function" && typeof r.set > "u") : !0
}
var je = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope
  , Kt = !("nw"in K) && typeof K.process < "u" && K.process.toString() === "[object process]"
  , Ee = !Kt && !je && !!(Jt && Lt.HTMLElement)
  , He = typeof K.process < "u" && K.process.toString() === "[object process]" && !je && !!(Jt && Lt.HTMLElement)
  , Yt = {}
  , Pr = Z("enable_beforeunload")
  , De = function(r) {
    if (r = r || K.event,
    !r)
        return;
    let t = Yt[r.type];
    t || (t = Yt[r.type] = Z("ON_PROPERTY" + r.type));
    let e = this || r.target || K, n = e[t], i;
    if (Ee && e === Lt && r.type === "error") {
        let o = r;
        i = n && n.call(this, o.message, o.filename, o.lineno, o.colno, o.error),
        i === !0 && r.preventDefault()
    } else
        i = n && n.apply(this, arguments),
        r.type === "beforeunload" && K[Pr] && typeof i == "string" ? r.returnValue = i : i != null && !i && r.preventDefault();
    return i
};
function Ne(r, t, e) {
    let n = Vt(r, t);
    if (!n && e && Vt(e, t) && (n = {
        enumerable: !0,
        configurable: !0
    }),
    !n || !n.configurable)
        return;
    let i = Z("on" + t + "patched");
    if (r.hasOwnProperty(i) && r[i])
        return;
    delete n.writable,
    delete n.value;
    let o = n.get
      , s = n.set
      , f = t.slice(2)
      , h = Yt[f];
    h || (h = Yt[f] = Z("ON_PROPERTY" + f)),
    n.set = function(m) {
        let p = this;
        if (!p && r === K && (p = K),
        !p)
            return;
        typeof p[h] == "function" && p.removeEventListener(f, De),
        s && s.call(p, null),
        p[h] = m,
        typeof m == "function" && p.addEventListener(f, De, !1)
    }
    ,
    n.get = function() {
        let m = this;
        if (!m && r === K && (m = K),
        !m)
            return null;
        let p = m[h];
        if (p)
            return p;
        if (o) {
            let d = o.call(this);
            if (d)
                return n.set.call(this, d),
                typeof m[Cr] == "function" && m.removeAttribute(t),
                d
        }
        return null
    }
    ,
    ae(r, t, n),
    r[i] = !0
}
function Ge(r, t, e) {
    if (t)
        for (let n = 0; n < t.length; n++)
            Ne(r, "on" + t[n], e);
    else {
        let n = [];
        for (let i in r)
            i.slice(0, 2) == "on" && n.push(i);
        for (let i = 0; i < n.length; i++)
            Ne(r, n[i], e)
    }
}
var at = Z("originalInstance");
function Gt(r) {
    let t = K[r];
    if (!t)
        return;
    K[Z(r)] = t,
    K[r] = function() {
        let i = ye(arguments, r);
        switch (i.length) {
        case 0:
            this[at] = new t;
            break;
        case 1:
            this[at] = new t(i[0]);
            break;
        case 2:
            this[at] = new t(i[0],i[1]);
            break;
        case 3:
            this[at] = new t(i[0],i[1],i[2]);
            break;
        case 4:
            this[at] = new t(i[0],i[1],i[2],i[3]);
            break;
        default:
            throw new Error("Arg list too long.")
        }
    }
    ,
    kt(K[r], t);
    let e = new t(function() {}
    ), n;
    for (n in e)
        r === "XMLHttpRequest" && n === "responseBlob" || function(i) {
            typeof e[i] == "function" ? K[r].prototype[i] = function() {
                return this[at][i].apply(this[at], arguments)
            }
            : ae(K[r].prototype, i, {
                set: function(o) {
                    typeof o == "function" ? (this[at][i] = pe(o, r + "." + i),
                    kt(this[at][i], o)) : this[at][i] = o
                },
                get: function() {
                    return this[at][i]
                }
            })
        }(n);
    for (n in t)
        n !== "prototype" && t.hasOwnProperty(n) && (K[r][n] = t[n])
}
function wt(r, t, e) {
    let n = r;
    for (; n && !n.hasOwnProperty(t); )
        n = le(n);
    !n && r[t] && (n = r);
    let i = Z(t)
      , o = null;
    if (n && (!(o = n[i]) || !n.hasOwnProperty(i))) {
        o = n[i] = n[t];
        let s = n && Vt(n, t);
        if (Ze(s)) {
            let f = e(o, i, t);
            n[t] = function() {
                return f(this, arguments)
            }
            ,
            kt(n[t], o)
        }
    }
    return o
}
function Sr(r, t, e) {
    let n = null;
    function i(o) {
        let s = o.data;
        return s.args[s.cbIdx] = function() {
            o.invoke.apply(this, arguments)
        }
        ,
        n.apply(s.target, s.args),
        o
    }
    n = wt(r, t, o => function(s, f) {
        let h = e(s, f);
        return h.cbIdx >= 0 && typeof f[h.cbIdx] == "function" ? de(h.name, f[h.cbIdx], h, i) : o.apply(s, f)
    }
    )
}
function kt(r, t) {
    r[Z("OriginalDelegate")] = t
}
var Le = !1
  , ce = !1;
function Fr() {
    try {
        let r = Lt.navigator.userAgent;
        if (r.indexOf("MSIE ") !== -1 || r.indexOf("Trident/") !== -1)
            return !0
    } catch {}
    return !1
}
function vr() {
    if (Le)
        return ce;
    Le = !0;
    try {
        let r = Lt.navigator.userAgent;
        (r.indexOf("MSIE ") !== -1 || r.indexOf("Trident/") !== -1 || r.indexOf("Edge/") !== -1) && (ce = !0)
    } catch {}
    return ce
}
function Oe(r) {
    return typeof r == "function"
}
function Ue(r) {
    return typeof r == "number"
}
var Nt = !1;
if (typeof window < "u")
    try {
        let r = Object.defineProperty({}, "passive", {
            get: function() {
                Nt = !0
            }
        });
        window.addEventListener("test", r, r),
        window.removeEventListener("test", r, r)
    } catch {
        Nt = !1
    }
var Dr = {
    useG: !0
}
  , ot = {}
  , Ve = {}
  , $e = new RegExp("^" + $t + "(\\w+)(true|false)$")
  , qe = Z("propagationStopped");
function We(r, t) {
    let e = (t ? t(r) : r) + Tt
      , n = (t ? t(r) : r) + _t
      , i = $t + e
      , o = $t + n;
    ot[r] = {},
    ot[r][Tt] = i,
    ot[r][_t] = o
}
function Nr(r, t, e, n) {
    let i = n && n.add || fe
      , o = n && n.rm || he
      , s = n && n.listeners || "eventListeners"
      , f = n && n.rmAll || "removeAllListeners"
      , h = Z(i)
      , m = "." + i + ":"
      , p = "prependListener"
      , d = "." + p + ":"
      , C = function(I, _, M) {
        if (I.isRemoved)
            return;
        let H = I.callback;
        typeof H == "object" && H.handleEvent && (I.callback = w => H.handleEvent(w),
        I.originalDelegate = H);
        let Y;
        try {
            I.invoke(I, _, [M])
        } catch (w) {
            Y = w
        }
        let G = I.options;
        if (G && typeof G == "object" && G.once) {
            let w = I.originalDelegate ? I.originalDelegate : I.callback;
            _[o].call(_, M.type, w, G)
        }
        return Y
    };
    function N(I, _, M) {
        if (_ = _ || r.event,
        !_)
            return;
        let H = I || _.target || r
          , Y = H[ot[_.type][M ? _t : Tt]];
        if (Y) {
            let G = [];
            if (Y.length === 1) {
                let w = C(Y[0], H, _);
                w && G.push(w)
            } else {
                let w = Y.slice();
                for (let q = 0; q < w.length && !(_ && _[qe] === !0); q++) {
                    let F = C(w[q], H, _);
                    F && G.push(F)
                }
            }
            if (G.length === 1)
                throw G[0];
            for (let w = 0; w < G.length; w++) {
                let q = G[w];
                t.nativeScheduleMicroTask( () => {
                    throw q
                }
                )
            }
        }
    }
    let j = function(I) {
        return N(this, I, !1)
    }
      , Q = function(I) {
        return N(this, I, !0)
    };
    function et(I, _) {
        if (!I)
            return !1;
        let M = !0;
        _ && _.useG !== void 0 && (M = _.useG);
        let H = _ && _.vh
          , Y = !0;
        _ && _.chkDup !== void 0 && (Y = _.chkDup);
        let G = !1;
        _ && _.rt !== void 0 && (G = _.rt);
        let w = I;
        for (; w && !w.hasOwnProperty(i); )
            w = le(w);
        if (!w && I[i] && (w = I),
        !w || w[h])
            return !1;
        let q = _ && _.eventNameToString, F = {}, A = w[h] = w[i], b = w[Z(o)] = w[o], S = w[Z(s)] = w[s], rt = w[Z(f)] = w[f], W;
        _ && _.prepend && (W = w[Z(_.prepend)] = w[_.prepend]);
        function v(a, E) {
            return !Nt && typeof a == "object" && a ? !!a.capture : !Nt || !E ? a : typeof a == "boolean" ? {
                capture: a,
                passive: !0
            } : a ? typeof a == "object" && a.passive !== !1 ? {
                ...a,
                passive: !0
            } : a : {
                passive: !0
            }
        }
        let T = function(a) {
            if (!F.isExisting)
                return A.call(F.target, F.eventName, F.capture ? Q : j, F.options)
        }
          , c = function(a) {
            if (!a.isRemoved) {
                let E = ot[a.eventName], B;
                E && (B = E[a.capture ? _t : Tt]);
                let P = B && a.target[B];
                if (P) {
                    for (let k = 0; k < P.length; k++)
                        if (P[k] === a) {
                            P.splice(k, 1),
                            a.isRemoved = !0,
                            a.removeAbortListener && (a.removeAbortListener(),
                            a.removeAbortListener = null),
                            P.length === 0 && (a.allRemoved = !0,
                            a.target[B] = null);
                            break
                        }
                }
            }
            if (a.allRemoved)
                return b.call(a.target, a.eventName, a.capture ? Q : j, a.options)
        }
          , u = function(a) {
            return A.call(F.target, F.eventName, a.invoke, F.options)
        }
          , x = function(a) {
            return W.call(F.target, F.eventName, a.invoke, F.options)
        }
          , R = function(a) {
            return b.call(a.target, a.eventName, a.invoke, a.options)
        }
          , z = M ? T : u
          , U = M ? c : R
          , bt = function(a, E) {
            let B = typeof E;
            return B === "function" && a.callback === E || B === "object" && a.originalDelegate === E
        }
          , gt = _ && _.diff ? _.diff : bt
          , mt = Zone[Z("UNPATCHED_EVENTS")]
          , ct = r[Z("PASSIVE_EVENTS")];
        function g(a) {
            if (typeof a == "object" && a !== null) {
                let E = {
                    ...a
                };
                return a.signal && (E.signal = a.signal),
                E
            }
            return a
        }
        let y = function(a, E, B, P, k=!1, D=!1) {
            return function() {
                let L = this || r
                  , O = arguments[0];
                _ && _.transferEventName && (O = _.transferEventName(O));
                let V = arguments[1];
                if (!V)
                    return a.apply(this, arguments);
                if (Kt && O === "uncaughtException")
                    return a.apply(this, arguments);
                let $ = !1;
                if (typeof V != "function") {
                    if (!V.handleEvent)
                        return a.apply(this, arguments);
                    $ = !0
                }
                if (H && !H(a, V, L, arguments))
                    return;
                let Rt = Nt && !!ct && ct.indexOf(O) !== -1
                  , lt = g(v(arguments[2], Rt))
                  , Ft = lt?.signal;
                if (Ft?.aborted)
                    return;
                if (mt) {
                    for (let ft = 0; ft < mt.length; ft++)
                        if (O === mt[ft])
                            return Rt ? a.call(L, O, V, lt) : a.apply(this, arguments)
                }
                let ne = lt ? typeof lt == "boolean" ? !0 : lt.capture : !1
                  , Ae = lt && typeof lt == "object" ? lt.once : !1
                  , xr = Zone.current
                  , ie = ot[O];
                ie || (We(O, q),
                ie = ot[O]);
                let Pe = ie[ne ? _t : Tt]
                  , vt = L[Pe]
                  , Se = !1;
                if (vt) {
                    if (Se = !0,
                    Y) {
                        for (let ft = 0; ft < vt.length; ft++)
                            if (gt(vt[ft], V))
                                return
                    }
                } else
                    vt = L[Pe] = [];
                let Wt, Fe = L.constructor.name, ve = Ve[Fe];
                ve && (Wt = ve[O]),
                Wt || (Wt = Fe + E + (q ? q(O) : O)),
                F.options = lt,
                Ae && (F.options.once = !1),
                F.target = L,
                F.capture = ne,
                F.eventName = O,
                F.isExisting = Se;
                let Ht = M ? Dr : void 0;
                Ht && (Ht.taskData = F),
                Ft && (F.options.signal = void 0);
                let ut = xr.scheduleEventTask(Wt, V, Ht, B, P);
                if (Ft) {
                    F.options.signal = Ft;
                    let ft = () => ut.zone.cancelTask(ut);
                    a.call(Ft, "abort", ft, {
                        once: !0
                    }),
                    ut.removeAbortListener = () => Ft.removeEventListener("abort", ft)
                }
                if (F.target = null,
                Ht && (Ht.taskData = null),
                Ae && (F.options.once = !0),
                !Nt && typeof ut.options == "boolean" || (ut.options = lt),
                ut.target = L,
                ut.capture = ne,
                ut.eventName = O,
                $ && (ut.originalDelegate = V),
                D ? vt.unshift(ut) : vt.push(ut),
                k)
                    return L
            }
        };
        return w[i] = y(A, m, z, U, G),
        W && (w[p] = y(W, d, x, U, G, !0)),
        w[o] = function() {
            let a = this || r
              , E = arguments[0];
            _ && _.transferEventName && (E = _.transferEventName(E));
            let B = arguments[2]
              , P = B ? typeof B == "boolean" ? !0 : B.capture : !1
              , k = arguments[1];
            if (!k)
                return b.apply(this, arguments);
            if (H && !H(b, k, a, arguments))
                return;
            let D = ot[E], L;
            D && (L = D[P ? _t : Tt]);
            let O = L && a[L];
            if (O)
                for (let V = 0; V < O.length; V++) {
                    let $ = O[V];
                    if (gt($, k)) {
                        if (O.splice(V, 1),
                        $.isRemoved = !0,
                        O.length === 0 && ($.allRemoved = !0,
                        a[L] = null,
                        !P && typeof E == "string")) {
                            let Rt = $t + "ON_PROPERTY" + E;
                            a[Rt] = null
                        }
                        return $.zone.cancelTask($),
                        G ? a : void 0
                    }
                }
            return b.apply(this, arguments)
        }
        ,
        w[s] = function() {
            let a = this || r
              , E = arguments[0];
            _ && _.transferEventName && (E = _.transferEventName(E));
            let B = []
              , P = ze(a, q ? q(E) : E);
            for (let k = 0; k < P.length; k++) {
                let D = P[k]
                  , L = D.originalDelegate ? D.originalDelegate : D.callback;
                B.push(L)
            }
            return B
        }
        ,
        w[f] = function() {
            let a = this || r
              , E = arguments[0];
            if (E) {
                _ && _.transferEventName && (E = _.transferEventName(E));
                let B = ot[E];
                if (B) {
                    let P = B[Tt]
                      , k = B[_t]
                      , D = a[P]
                      , L = a[k];
                    if (D) {
                        let O = D.slice();
                        for (let V = 0; V < O.length; V++) {
                            let $ = O[V]
                              , Rt = $.originalDelegate ? $.originalDelegate : $.callback;
                            this[o].call(this, E, Rt, $.options)
                        }
                    }
                    if (L) {
                        let O = L.slice();
                        for (let V = 0; V < O.length; V++) {
                            let $ = O[V]
                              , Rt = $.originalDelegate ? $.originalDelegate : $.callback;
                            this[o].call(this, E, Rt, $.options)
                        }
                    }
                }
            } else {
                let B = Object.keys(a);
                for (let P = 0; P < B.length; P++) {
                    let k = B[P]
                      , D = $e.exec(k)
                      , L = D && D[1];
                    L && L !== "removeListener" && this[f].call(this, L)
                }
                this[f].call(this, "removeListener")
            }
            if (G)
                return this
        }
        ,
        kt(w[i], A),
        kt(w[o], b),
        rt && kt(w[f], rt),
        S && kt(w[s], S),
        !0
    }
    let X = [];
    for (let I = 0; I < e.length; I++)
        X[I] = et(e[I], n);
    return X
}
function ze(r, t) {
    if (!t) {
        let o = [];
        for (let s in r) {
            let f = $e.exec(s)
              , h = f && f[1];
            if (h && (!t || h === t)) {
                let m = r[s];
                if (m)
                    for (let p = 0; p < m.length; p++)
                        o.push(m[p])
            }
        }
        return o
    }
    let e = ot[t];
    e || (We(t),
    e = ot[t]);
    let n = r[e[Tt]]
      , i = r[e[_t]];
    return n ? i ? n.concat(i) : n.slice() : i ? i.slice() : []
}
function Lr(r, t) {
    let e = r.Event;
    e && e.prototype && t.patchMethod(e.prototype, "stopImmediatePropagation", n => function(i, o) {
        i[qe] = !0,
        n && n.apply(i, o)
    }
    )
}
function Or(r, t) {
    t.patchMethod(r, "queueMicrotask", e => function(n, i) {
        Zone.current.scheduleMicroTask("queueMicrotask", i[0])
    }
    )
}
var Xt = Z("zoneTask");
function Dt(r, t, e, n) {
    let i = null
      , o = null;
    t += n,
    e += n;
    let s = {};
    function f(m) {
        let p = m.data;
        p.args[0] = function() {
            return m.invoke.apply(this, arguments)
        }
        ;
        let d = i.apply(r, p.args);
        return Ue(d) ? p.handleId = d : (p.handle = d,
        p.isRefreshable = Oe(d.refresh)),
        m
    }
    function h(m) {
        let {handle: p, handleId: d} = m.data;
        return o.call(r, p ?? d)
    }
    i = wt(r, t, m => function(p, d) {
        if (Oe(d[0])) {
            let C = {
                isRefreshable: !1,
                isPeriodic: n === "Interval",
                delay: n === "Timeout" || n === "Interval" ? d[1] || 0 : void 0,
                args: d
            }
              , N = d[0];
            d[0] = function() {
                try {
                    return N.apply(this, arguments)
                } finally {
                    let {handle: M, handleId: H, isPeriodic: Y, isRefreshable: G} = C;
                    !Y && !G && (H ? delete s[H] : M && (M[Xt] = null))
                }
            }
            ;
            let j = de(t, d[0], C, f, h);
            if (!j)
                return j;
            let {handleId: Q, handle: et, isRefreshable: X, isPeriodic: I} = j.data;
            if (Q)
                s[Q] = j;
            else if (et && (et[Xt] = j,
            X && !I)) {
                let _ = et.refresh;
                et.refresh = function() {
                    let {zone: M, state: H} = j;
                    return H === "notScheduled" ? (j._state = "scheduled",
                    M._updateTaskCount(j, 1)) : H === "running" && (j._state = "scheduling"),
                    _.call(this)
                }
            }
            return et ?? Q ?? j
        } else
            return m.apply(r, d)
    }
    ),
    o = wt(r, e, m => function(p, d) {
        let C = d[0], N;
        Ue(C) ? (N = s[C],
        delete s[C]) : (N = C?.[Xt],
        N ? C[Xt] = null : N = C),
        N?.type ? N.cancelFn && N.zone.cancelTask(N) : m.apply(r, d)
    }
    )
}
function Ur(r, t) {
    let {isBrowser: e, isMix: n} = t.getGlobalObjects();
    if (!e && !n || !r.customElements || !("customElements"in r))
        return;
    let i = ["connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback", "formAssociatedCallback", "formDisabledCallback", "formResetCallback", "formStateRestoreCallback"];
    t.patchCallbacks(t, r.customElements, "customElements", "define", i)
}
function Mr(r, t) {
    if (Zone[t.symbol("patchEventTarget")])
        return;
    let {eventNames: e, zoneSymbolEventNames: n, TRUE_STR: i, FALSE_STR: o, ZONE_SYMBOL_PREFIX: s} = t.getGlobalObjects();
    for (let h = 0; h < e.length; h++) {
        let m = e[h]
          , p = m + o
          , d = m + i
          , C = s + p
          , N = s + d;
        n[m] = {},
        n[m][o] = C,
        n[m][i] = N
    }
    let f = r.EventTarget;
    if (!(!f || !f.prototype))
        return t.patchEventTarget(r, t, [f && f.prototype]),
        !0
}
function Zr(r, t) {
    t.patchEventPrototype(r, t)
}
function Xe(r, t, e) {
    if (!e || e.length === 0)
        return t;
    let n = e.filter(o => o.target === r);
    if (!n || n.length === 0)
        return t;
    let i = n[0].ignoreProperties;
    return t.filter(o => i.indexOf(o) === -1)
}
function Me(r, t, e, n) {
    if (!r)
        return;
    let i = Xe(r, t, e);
    Ge(r, i, n)
}
function ue(r) {
    return Object.getOwnPropertyNames(r).filter(t => t.startsWith("on") && t.length > 2).map(t => t.substring(2))
}
function jr(r, t) {
    if (Kt && !He || Zone[r.symbol("patchEvents")])
        return;
    let e = t.__Zone_ignore_on_properties
      , n = [];
    if (Ee) {
        let i = window;
        n = n.concat(["Document", "SVGElement", "Element", "HTMLElement", "HTMLBodyElement", "HTMLMediaElement", "HTMLFrameSetElement", "HTMLFrameElement", "HTMLIFrameElement", "HTMLMarqueeElement", "Worker"]);
        let o = Fr() ? [{
            target: i,
            ignoreProperties: ["error"]
        }] : [];
        Me(i, ue(i), e && e.concat(o), le(i))
    }
    n = n.concat(["XMLHttpRequest", "XMLHttpRequestEventTarget", "IDBIndex", "IDBRequest", "IDBOpenDBRequest", "IDBDatabase", "IDBTransaction", "IDBCursor", "WebSocket"]);
    for (let i = 0; i < n.length; i++) {
        let o = t[n[i]];
        o && o.prototype && Me(o.prototype, ue(o.prototype), e)
    }
}
function Hr(r) {
    r.__load_patch("legacy", t => {
        let e = t[r.__symbol__("legacyPatch")];
        e && e()
    }
    ),
    r.__load_patch("timers", t => {
        let e = "set"
          , n = "clear";
        Dt(t, e, n, "Timeout"),
        Dt(t, e, n, "Interval"),
        Dt(t, e, n, "Immediate")
    }
    ),
    r.__load_patch("requestAnimationFrame", t => {
        Dt(t, "request", "cancel", "AnimationFrame"),
        Dt(t, "mozRequest", "mozCancel", "AnimationFrame"),
        Dt(t, "webkitRequest", "webkitCancel", "AnimationFrame")
    }
    ),
    r.__load_patch("blocking", (t, e) => {
        let n = ["alert", "prompt", "confirm"];
        for (let i = 0; i < n.length; i++) {
            let o = n[i];
            wt(t, o, (s, f, h) => function(m, p) {
                return e.current.run(s, t, p, h)
            }
            )
        }
    }
    ),
    r.__load_patch("EventTarget", (t, e, n) => {
        Zr(t, n),
        Mr(t, n);
        let i = t.XMLHttpRequestEventTarget;
        i && i.prototype && n.patchEventTarget(t, n, [i.prototype])
    }
    ),
    r.__load_patch("MutationObserver", (t, e, n) => {
        Gt("MutationObserver"),
        Gt("WebKitMutationObserver")
    }
    ),
    r.__load_patch("IntersectionObserver", (t, e, n) => {
        Gt("IntersectionObserver")
    }
    ),
    r.__load_patch("FileReader", (t, e, n) => {
        Gt("FileReader")
    }
    ),
    r.__load_patch("on_property", (t, e, n) => {
        jr(n, t)
    }
    ),
    r.__load_patch("customElements", (t, e, n) => {
        Ur(t, n)
    }
    ),
    r.__load_patch("XHR", (t, e) => {
        m(t);
        let n = Z("xhrTask")
          , i = Z("xhrSync")
          , o = Z("xhrListener")
          , s = Z("xhrScheduled")
          , f = Z("xhrURL")
          , h = Z("xhrErrorBeforeScheduled");
        function m(p) {
            let d = p.XMLHttpRequest;
            if (!d)
                return;
            let C = d.prototype;
            function N(A) {
                return A[n]
            }
            let j = C[oe]
              , Q = C[se];
            if (!j) {
                let A = p.XMLHttpRequestEventTarget;
                if (A) {
                    let b = A.prototype;
                    j = b[oe],
                    Q = b[se]
                }
            }
            let et = "readystatechange"
              , X = "scheduled";
            function I(A) {
                let b = A.data
                  , S = b.target;
                S[s] = !1,
                S[h] = !1;
                let rt = S[o];
                j || (j = S[oe],
                Q = S[se]),
                rt && Q.call(S, et, rt);
                let W = S[o] = () => {
                    if (S.readyState === S.DONE)
                        if (!b.aborted && S[s] && A.state === X) {
                            let T = S[e.__symbol__("loadfalse")];
                            if (S.status !== 0 && T && T.length > 0) {
                                let c = A.invoke;
                                A.invoke = function() {
                                    let u = S[e.__symbol__("loadfalse")];
                                    for (let x = 0; x < u.length; x++)
                                        u[x] === A && u.splice(x, 1);
                                    !b.aborted && A.state === X && c.call(A)
                                }
                                ,
                                T.push(A)
                            } else
                                A.invoke()
                        } else
                            !b.aborted && S[s] === !1 && (S[h] = !0)
                }
                ;
                return j.call(S, et, W),
                S[n] || (S[n] = A),
                q.apply(S, b.args),
                S[s] = !0,
                A
            }
            function _() {}
            function M(A) {
                let b = A.data;
                return b.aborted = !0,
                F.apply(b.target, b.args)
            }
            let H = wt(C, "open", () => function(A, b) {
                return A[i] = b[2] == !1,
                A[f] = b[1],
                H.apply(A, b)
            }
            )
              , Y = "XMLHttpRequest.send"
              , G = Z("fetchTaskAborting")
              , w = Z("fetchTaskScheduling")
              , q = wt(C, "send", () => function(A, b) {
                if (e.current[w] === !0 || A[i])
                    return q.apply(A, b);
                {
                    let S = {
                        target: A,
                        url: A[f],
                        isPeriodic: !1,
                        args: b,
                        aborted: !1
                    }
                      , rt = de(Y, _, S, I, M);
                    A && A[h] === !0 && !S.aborted && rt.state === X && rt.invoke()
                }
            }
            )
              , F = wt(C, "abort", () => function(A, b) {
                let S = N(A);
                if (S && typeof S.type == "string") {
                    if (S.cancelFn == null || S.data && S.data.aborted)
                        return;
                    S.zone.cancelTask(S)
                } else if (e.current[G] === !0)
                    return F.apply(A, b)
            }
            )
        }
    }
    ),
    r.__load_patch("geolocation", t => {
        t.navigator && t.navigator.geolocation && Ar(t.navigator.geolocation, ["getCurrentPosition", "watchPosition"])
    }
    ),
    r.__load_patch("PromiseRejectionEvent", (t, e) => {
        function n(i) {
            return function(o) {
                ze(t, i).forEach(f => {
                    let h = t.PromiseRejectionEvent;
                    if (h) {
                        let m = new h(i,{
                            promise: o.promise,
                            reason: o.rejection
                        });
                        f.invoke(m)
                    }
                }
                )
            }
        }
        t.PromiseRejectionEvent && (e[Z("unhandledPromiseRejectionHandler")] = n("unhandledrejection"),
        e[Z("rejectionHandledHandler")] = n("rejectionhandled"))
    }
    ),
    r.__load_patch("queueMicrotask", (t, e, n) => {
        Or(t, n)
    }
    )
}
function Gr(r) {
    r.__load_patch("ZoneAwarePromise", (t, e, n) => {
        let i = Object.getOwnPropertyDescriptor
          , o = Object.defineProperty;
        function s(g) {
            if (g && g.toString === Object.prototype.toString) {
                let y = g.constructor && g.constructor.name;
                return (y || "") + ": " + JSON.stringify(g)
            }
            return g ? g.toString() : Object.prototype.toString.call(g)
        }
        let f = n.symbol
          , h = []
          , m = t[f("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")] !== !1
          , p = f("Promise")
          , d = f("then")
          , C = "__creationTrace__";
        n.onUnhandledError = g => {
            if (n.showUncaughtError()) {
                let y = g && g.rejection;
                y ? console.error("Unhandled Promise rejection:", y instanceof Error ? y.message : y, "; Zone:", g.zone.name, "; Task:", g.task && g.task.source, "; Value:", y, y instanceof Error ? y.stack : void 0) : console.error(g)
            }
        }
        ,
        n.microtaskDrainDone = () => {
            for (; h.length; ) {
                let g = h.shift();
                try {
                    g.zone.runGuarded( () => {
                        throw g.throwOriginal ? g.rejection : g
                    }
                    )
                } catch (y) {
                    j(y)
                }
            }
        }
        ;
        let N = f("unhandledPromiseRejectionHandler");
        function j(g) {
            n.onUnhandledError(g);
            try {
                let y = e[N];
                typeof y == "function" && y.call(this, g)
            } catch {}
        }
        function Q(g) {
            return g && g.then
        }
        function et(g) {
            return g
        }
        function X(g) {
            return U.reject(g)
        }
        let I = f("state")
          , _ = f("value")
          , M = f("finally")
          , H = f("parentPromiseValue")
          , Y = f("parentPromiseState")
          , G = "Promise.then"
          , w = null
          , q = !0
          , F = !1
          , A = 0;
        function b(g, y) {
            return a => {
                try {
                    v(g, y, a)
                } catch (E) {
                    v(g, !1, E)
                }
            }
        }
        let S = function() {
            let g = !1;
            return function(a) {
                return function() {
                    g || (g = !0,
                    a.apply(null, arguments))
                }
            }
        }
          , rt = "Promise resolved with itself"
          , W = f("currentTaskTrace");
        function v(g, y, a) {
            let E = S();
            if (g === a)
                throw new TypeError(rt);
            if (g[I] === w) {
                let B = null;
                try {
                    (typeof a == "object" || typeof a == "function") && (B = a && a.then)
                } catch (P) {
                    return E( () => {
                        v(g, !1, P)
                    }
                    )(),
                    g
                }
                if (y !== F && a instanceof U && a.hasOwnProperty(I) && a.hasOwnProperty(_) && a[I] !== w)
                    c(a),
                    v(g, a[I], a[_]);
                else if (y !== F && typeof B == "function")
                    try {
                        B.call(a, E(b(g, y)), E(b(g, !1)))
                    } catch (P) {
                        E( () => {
                            v(g, !1, P)
                        }
                        )()
                    }
                else {
                    g[I] = y;
                    let P = g[_];
                    if (g[_] = a,
                    g[M] === M && y === q && (g[I] = g[Y],
                    g[_] = g[H]),
                    y === F && a instanceof Error) {
                        let k = e.currentTask && e.currentTask.data && e.currentTask.data[C];
                        k && o(a, W, {
                            configurable: !0,
                            enumerable: !1,
                            writable: !0,
                            value: k
                        })
                    }
                    for (let k = 0; k < P.length; )
                        u(g, P[k++], P[k++], P[k++], P[k++]);
                    if (P.length == 0 && y == F) {
                        g[I] = A;
                        let k = a;
                        try {
                            throw new Error("Uncaught (in promise): " + s(a) + (a && a.stack ? `
` + a.stack : ""))
                        } catch (D) {
                            k = D
                        }
                        m && (k.throwOriginal = !0),
                        k.rejection = a,
                        k.promise = g,
                        k.zone = e.current,
                        k.task = e.currentTask,
                        h.push(k),
                        n.scheduleMicroTask()
                    }
                }
            }
            return g
        }
        let T = f("rejectionHandledHandler");
        function c(g) {
            if (g[I] === A) {
                try {
                    let y = e[T];
                    y && typeof y == "function" && y.call(this, {
                        rejection: g[_],
                        promise: g
                    })
                } catch {}
                g[I] = F;
                for (let y = 0; y < h.length; y++)
                    g === h[y].promise && h.splice(y, 1)
            }
        }
        function u(g, y, a, E, B) {
            c(g);
            let P = g[I]
              , k = P ? typeof E == "function" ? E : et : typeof B == "function" ? B : X;
            y.scheduleMicroTask(G, () => {
                try {
                    let D = g[_]
                      , L = !!a && M === a[M];
                    L && (a[H] = D,
                    a[Y] = P);
                    let O = y.run(k, void 0, L && k !== X && k !== et ? [] : [D]);
                    v(a, !0, O)
                } catch (D) {
                    v(a, !1, D)
                }
            }
            , a)
        }
        let x = "function ZoneAwarePromise() { [native code] }"
          , R = function() {}
          , z = t.AggregateError;
        class U {
            static toString() {
                return x
            }
            static resolve(y) {
                return y instanceof U ? y : v(new this(null), q, y)
            }
            static reject(y) {
                return v(new this(null), F, y)
            }
            static withResolvers() {
                let y = {};
                return y.promise = new U( (a, E) => {
                    y.resolve = a,
                    y.reject = E
                }
                ),
                y
            }
            static any(y) {
                if (!y || typeof y[Symbol.iterator] != "function")
                    return Promise.reject(new z([],"All promises were rejected"));
                let a = []
                  , E = 0;
                try {
                    for (let k of y)
                        E++,
                        a.push(U.resolve(k))
                } catch {
                    return Promise.reject(new z([],"All promises were rejected"))
                }
                if (E === 0)
                    return Promise.reject(new z([],"All promises were rejected"));
                let B = !1
                  , P = [];
                return new U( (k, D) => {
                    for (let L = 0; L < a.length; L++)
                        a[L].then(O => {
                            B || (B = !0,
                            k(O))
                        }
                        , O => {
                            P.push(O),
                            E--,
                            E === 0 && (B = !0,
                            D(new z(P,"All promises were rejected")))
                        }
                        )
                }
                )
            }
            static race(y) {
                let a, E, B = new this( (D, L) => {
                    a = D,
                    E = L
                }
                );
                function P(D) {
                    a(D)
                }
                function k(D) {
                    E(D)
                }
                for (let D of y)
                    Q(D) || (D = this.resolve(D)),
                    D.then(P, k);
                return B
            }
            static all(y) {
                return U.allWithCallback(y)
            }
            static allSettled(y) {
                return (this && this.prototype instanceof U ? this : U).allWithCallback(y, {
                    thenCallback: E => ({
                        status: "fulfilled",
                        value: E
                    }),
                    errorCallback: E => ({
                        status: "rejected",
                        reason: E
                    })
                })
            }
            static allWithCallback(y, a) {
                let E, B, P = new this( (O, V) => {
                    E = O,
                    B = V
                }
                ), k = 2, D = 0, L = [];
                for (let O of y) {
                    Q(O) || (O = this.resolve(O));
                    let V = D;
                    try {
                        O.then($ => {
                            L[V] = a ? a.thenCallback($) : $,
                            k--,
                            k === 0 && E(L)
                        }
                        , $ => {
                            a ? (L[V] = a.errorCallback($),
                            k--,
                            k === 0 && E(L)) : B($)
                        }
                        )
                    } catch ($) {
                        B($)
                    }
                    k++,
                    D++
                }
                return k -= 2,
                k === 0 && E(L),
                P
            }
            constructor(y) {
                let a = this;
                if (!(a instanceof U))
                    throw new Error("Must be an instanceof Promise.");
                a[I] = w,
                a[_] = [];
                try {
                    let E = S();
                    y && y(E(b(a, q)), E(b(a, F)))
                } catch (E) {
                    v(a, !1, E)
                }
            }
            get[Symbol.toStringTag]() {
                return "Promise"
            }
            get[Symbol.species]() {
                return U
            }
            then(y, a) {
                let E = this.constructor?.[Symbol.species];
                (!E || typeof E != "function") && (E = this.constructor || U);
                let B = new E(R)
                  , P = e.current;
                return this[I] == w ? this[_].push(P, B, y, a) : u(this, P, B, y, a),
                B
            }
            catch(y) {
                return this.then(null, y)
            }
            finally(y) {
                let a = this.constructor?.[Symbol.species];
                (!a || typeof a != "function") && (a = U);
                let E = new a(R);
                E[M] = M;
                let B = e.current;
                return this[I] == w ? this[_].push(B, E, y, y) : u(this, B, E, y, y),
                E
            }
        }
        U.resolve = U.resolve,
        U.reject = U.reject,
        U.race = U.race,
        U.all = U.all;
        let bt = t[p] = t.Promise;
        t.Promise = U;
        let gt = f("thenPatched");
        function mt(g) {
            let y = g.prototype
              , a = i(y, "then");
            if (a && (a.writable === !1 || !a.configurable))
                return;
            let E = y.then;
            y[d] = E,
            g.prototype.then = function(B, P) {
                return new U( (D, L) => {
                    E.call(this, D, L)
                }
                ).then(B, P)
            }
            ,
            g[gt] = !0
        }
        n.patchThen = mt;
        function ct(g) {
            return function(y, a) {
                let E = g.apply(y, a);
                if (E instanceof U)
                    return E;
                let B = E.constructor;
                return B[gt] || mt(B),
                E
            }
        }
        return bt && (mt(bt),
        wt(t, "fetch", g => ct(g))),
        Promise[e.__symbol__("uncaughtPromiseErrors")] = h,
        U
    }
    )
}
function Vr(r) {
    r.__load_patch("toString", t => {
        let e = Function.prototype.toString
          , n = Z("OriginalDelegate")
          , i = Z("Promise")
          , o = Z("Error")
          , s = function() {
            if (typeof this == "function") {
                let p = this[n];
                if (p)
                    return typeof p == "function" ? e.call(p) : Object.prototype.toString.call(p);
                if (this === Promise) {
                    let d = t[i];
                    if (d)
                        return e.call(d)
                }
                if (this === Error) {
                    let d = t[o];
                    if (d)
                        return e.call(d)
                }
            }
            return e.call(this)
        };
        s[n] = e,
        Function.prototype.toString = s;
        let f = Object.prototype.toString
          , h = "[object Promise]";
        Object.prototype.toString = function() {
            return typeof Promise == "function" && this instanceof Promise ? h : f.call(this)
        }
    }
    )
}
function $r(r, t, e, n, i) {
    let o = Zone.__symbol__(n);
    if (t[o])
        return;
    let s = t[o] = t[n];
    t[n] = function(f, h, m) {
        return h && h.prototype && i.forEach(function(p) {
            let d = `${e}.${n}::` + p
              , C = h.prototype;
            try {
                if (C.hasOwnProperty(p)) {
                    let N = r.ObjectGetOwnPropertyDescriptor(C, p);
                    N && N.value ? (N.value = r.wrapWithCurrentZone(N.value, d),
                    r._redefineProperty(h.prototype, p, N)) : C[p] && (C[p] = r.wrapWithCurrentZone(C[p], d))
                } else
                    C[p] && (C[p] = r.wrapWithCurrentZone(C[p], d))
            } catch {}
        }),
        s.call(t, f, h, m)
    }
    ,
    r.attachOriginToPatched(t[n], s)
}
function qr(r) {
    r.__load_patch("util", (t, e, n) => {
        let i = ue(t);
        n.patchOnProperties = Ge,
        n.patchMethod = wt,
        n.bindArguments = ye,
        n.patchMacroTask = Sr;
        let o = e.__symbol__("BLACK_LISTED_EVENTS")
          , s = e.__symbol__("UNPATCHED_EVENTS");
        t[s] && (t[o] = t[s]),
        t[o] && (e[o] = e[s] = t[o]),
        n.patchEventPrototype = Lr,
        n.patchEventTarget = Nr,
        n.isIEOrEdge = vr,
        n.ObjectDefineProperty = ae,
        n.ObjectGetOwnPropertyDescriptor = Vt,
        n.ObjectCreate = br,
        n.ArraySlice = Rr,
        n.patchClass = Gt,
        n.wrapWithCurrentZone = pe,
        n.filterProperties = Xe,
        n.attachOriginToPatched = kt,
        n._redefineProperty = Object.defineProperty,
        n.patchCallbacks = $r,
        n.getGlobalObjects = () => ({
            globalSources: Ve,
            zoneSymbolEventNames: ot,
            eventNames: i,
            isBrowser: Ee,
            isMix: He,
            isNode: Kt,
            TRUE_STR: _t,
            FALSE_STR: Tt,
            ZONE_SYMBOL_PREFIX: $t,
            ADD_EVENT_LISTENER_STR: fe,
            REMOVE_EVENT_LISTENER_STR: he
        })
    }
    )
}
function Wr(r) {
    Gr(r),
    Vr(r),
    qr(r)
}
var Ye = Br();
Wr(Ye);
Hr(Ye);
window.global = window;
global.Buffer = global.Buffer || gr().Buffer;
global.process = kr();
