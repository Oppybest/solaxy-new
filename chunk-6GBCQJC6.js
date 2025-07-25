import {a as To, b as nr, c as Ao, d as gl, e as Fo, f as js, g as lr, h as Uo, i as ts, j as Fe, k as Pe, l as ko, m as $t, n as Mt, o as jo, p as Lo, q as Mo} from "./chunk-VUTG6GIZ.js";
import {a as hr, b as Do, c as ss, d as Bt, e as xe, f as we, g as $o, i as wt, j as Tt, k as at, l as Vt, m as fi, p as Ls, q as $s, r as Xe, s as He, t as pr, u as Ae, v as Ue} from "./chunk-WSOYI2AJ.js";
import {a as or, b as ar, c as Co, d as cr, e as No, f as qo} from "./chunk-BVLIEWWQ.js";
import "./chunk-5VG4SAOU.js";
import {a as ks} from "./chunk-EHBBQRNU.js";
import "./chunk-TLA6RWUK.js";
import {a as X, b as gi, i as Qe, l} from "./chunk-JOVT4LBN.js";
var pl = Qe(ks());
var _t = Qe(nr())
  , tt = Qe(Ao())
  , Sa = Qe(gl());
function Bo(s) {
    let e = No(`0x${s.substring(4)}`).substring(26);
    return qo(`0x${e}`)
}
function zo(t) {
    return l(this, arguments, function*({hash: s, signature: e}) {
        let i = or(s) ? s : cr(s)
          , {secp256k1: r} = yield import("./chunk-XMHKONTC.js");
        return `0x${( () => {
            if (typeof e == "object" && "r"in e && "s"in e) {
                let {r: p, s: u, v: d, yParity: g} = e
                  , f = Number(g ?? d)
                  , y = Vo(f);
                return new r.Signature(ar(p),ar(u)).addRecoveryBit(y)
            }
            let a = or(e) ? e : cr(e)
              , c = Co(`0x${a.slice(130)}`)
              , h = Vo(c);
            return r.Signature.fromCompact(a.substring(2, 130)).addRecoveryBit(h)
        }
        )().recoverPublicKey(i.substring(2)).toHex(!1)}`
    })
}
function Vo(s) {
    if (s === 0 || s === 1)
        return s;
    if (s === 27)
        return 0;
    if (s === 28)
        return 1;
    throw new Error("Invalid yParityOrV value")
}
function ur(t) {
    return l(this, arguments, function*({hash: s, signature: e}) {
        return Bo(yield zo({
            hash: s,
            signature: e
        }))
    })
}
function fl(s) {
    if (s.length >= 255)
        throw new TypeError("Alphabet too long");
    let e = new Uint8Array(256);
    for (let h = 0; h < e.length; h++)
        e[h] = 255;
    for (let h = 0; h < s.length; h++) {
        let p = s.charAt(h)
          , u = p.charCodeAt(0);
        if (e[u] !== 255)
            throw new TypeError(p + " is ambiguous");
        e[u] = h
    }
    let t = s.length
      , i = s.charAt(0)
      , r = Math.log(t) / Math.log(256)
      , n = Math.log(256) / Math.log(t);
    function o(h) {
        if (h instanceof Uint8Array || (ArrayBuffer.isView(h) ? h = new Uint8Array(h.buffer,h.byteOffset,h.byteLength) : Array.isArray(h) && (h = Uint8Array.from(h))),
        !(h instanceof Uint8Array))
            throw new TypeError("Expected Uint8Array");
        if (h.length === 0)
            return "";
        let p = 0
          , u = 0
          , d = 0
          , g = h.length;
        for (; d !== g && h[d] === 0; )
            d++,
            p++;
        let f = (g - d) * n + 1 >>> 0
          , y = new Uint8Array(f);
        for (; d !== g; ) {
            let w = h[d]
              , v = 0;
            for (let P = f - 1; (w !== 0 || v < u) && P !== -1; P--,
            v++)
                w += 256 * y[P] >>> 0,
                y[P] = w % t >>> 0,
                w = w / t >>> 0;
            if (w !== 0)
                throw new Error("Non-zero carry");
            u = v,
            d++
        }
        let m = f - u;
        for (; m !== f && y[m] === 0; )
            m++;
        let b = i.repeat(p);
        for (; m < f; ++m)
            b += s.charAt(y[m]);
        return b
    }
    function a(h) {
        if (typeof h != "string")
            throw new TypeError("Expected String");
        if (h.length === 0)
            return new Uint8Array;
        let p = 0
          , u = 0
          , d = 0;
        for (; h[p] === i; )
            u++,
            p++;
        let g = (h.length - p) * r + 1 >>> 0
          , f = new Uint8Array(g);
        for (; p < h.length; ) {
            let w = h.charCodeAt(p);
            if (w > 255)
                return;
            let v = e[w];
            if (v === 255)
                return;
            let P = 0;
            for (let A = g - 1; (v !== 0 || P < d) && A !== -1; A--,
            P++)
                v += t * f[A] >>> 0,
                f[A] = v % 256 >>> 0,
                v = v / 256 >>> 0;
            if (v !== 0)
                throw new Error("Non-zero carry");
            d = P,
            p++
        }
        let y = g - d;
        for (; y !== g && f[y] === 0; )
            y++;
        let m = new Uint8Array(u + (g - y))
          , b = u;
        for (; y !== g; )
            m[b++] = f[y++];
        return m
    }
    function c(h) {
        let p = a(h);
        if (p)
            return p;
        throw new Error("Non-base" + t + " character")
    }
    return {
        encode: o,
        decodeUnsafe: a,
        decode: c
    }
}
var Ho = fl;
var ml = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  , Ko = Ho(ml);
var yl = ":";
function Ft(s) {
    let[e,t] = s.split(yl);
    return {
        namespace: e,
        reference: t
    }
}
function kr(s, e=[]) {
    let t = [];
    return Object.keys(s).forEach(i => {
        if (e.length && !e.includes(i))
            return;
        let r = s[i];
        t.push(...r.accounts)
    }
    ),
    t
}
function Oa(s, e) {
    return s.includes(":") ? [s] : e.chains || []
}
var wl = Object.defineProperty
  , bl = Object.defineProperties
  , vl = Object.getOwnPropertyDescriptors
  , Go = Object.getOwnPropertySymbols
  , El = Object.prototype.hasOwnProperty
  , Il = Object.prototype.propertyIsEnumerable
  , Wo = (s, e, t) => e in s ? wl(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Yo = (s, e) => {
    for (var t in e || (e = {}))
        El.call(e, t) && Wo(s, t, e[t]);
    if (Go)
        for (var t of Go(e))
            Il.call(e, t) && Wo(s, t, e[t]);
    return s
}
  , _l = (s, e) => bl(s, vl(e))
  , Pl = "ReactNative"
  , Ne = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
};
var Sl = "js";
function Ws() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
}
function Pt() {
    return !(0,
    tt.getDocument)() && !!(0,
    tt.getNavigator)() && navigator.product === Pl
}
function Ra() {
    return Pt() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "android"
}
function xa() {
    return Pt() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "ios"
}
function Yt() {
    return !Ws() && !!(0,
    tt.getNavigator)() && !!(0,
    tt.getDocument)()
}
function Ys() {
    return Pt() ? Ne.reactNative : Ws() ? Ne.node : Yt() ? Ne.browser : Ne.unknown
}
function jr() {
    var s;
    try {
        return Pt() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (s = global.Application) == null ? void 0 : s.applicationId : void 0
    } catch {
        return
    }
}
function Ol(s, e) {
    let t = new URLSearchParams(s);
    for (let i of Object.keys(e).sort())
        if (e.hasOwnProperty(i)) {
            let r = e[i];
            r !== void 0 && t.set(i, r)
        }
    return t.toString()
}
function Ta(s) {
    var e, t;
    let i = Lr();
    try {
        return s != null && s.url && i.url && new URL(s.url).host !== new URL(i.url).host && (console.warn(`The configured WalletConnect 'metadata.url':${s.url} differs from the actual page url:${i.url}. This is probably unintended and can lead to issues.`),
        s.url = i.url),
        (e = s?.icons) != null && e.length && s.icons.length > 0 && (s.icons = s.icons.filter(r => r !== "")),
        _l(Yo(Yo({}, i), s), {
            url: s?.url || i.url,
            name: s?.name || i.name,
            description: s?.description || i.description,
            icons: (t = s?.icons) != null && t.length && s.icons.length > 0 ? s.icons : i.icons
        })
    } catch (r) {
        return console.warn("Error populating app metadata", r),
        s || i
    }
}
function Lr() {
    return (0,
    Sa.getWindowMetadata)() || {
        name: "",
        description: "",
        url: "",
        icons: [""]
    }
}
function Rl() {
    if (Ys() === Ne.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
        let {OS: t, Version: i} = global.Platform;
        return [t, i].join("-")
    }
    let s = To();
    if (s === null)
        return "unknown";
    let e = s.os ? s.os.replace(" ", "").toLowerCase() : "unknown";
    return s.type === "browser" ? [e, s.name, s.version].join("-") : [e, s.version].join("-")
}
function xl() {
    var s;
    let e = Ys();
    return e === Ne.browser ? [e, ((s = (0,
    tt.getLocation)()) == null ? void 0 : s.host) || "unknown"].join(":") : e
}
function $r(s, e, t) {
    let i = Rl()
      , r = xl();
    return [[s, e].join("-"), [Sl, t].join("-"), i, r].join("/")
}
function Aa({protocol: s, version: e, relayUrl: t, sdkVersion: i, auth: r, projectId: n, useOnCloseEvent: o, bundleId: a, packageName: c}) {
    let h = t.split("?")
      , p = $r(s, e, i)
      , u = {
        auth: r,
        ua: p,
        projectId: n,
        useOnCloseEvent: o || void 0,
        packageName: c || void 0,
        bundleId: a || void 0
    }
      , d = Ol(h[1] || "", u);
    return h[0] + "?" + d
}
function Ht(s, e) {
    return s.filter(t => e.includes(t)).length === s.length
}
function Ei(s) {
    return Object.fromEntries(s.entries())
}
function Ii(s) {
    return new Map(Object.entries(s))
}
function St(s=_t.FIVE_MINUTES, e) {
    let t = (0,
    _t.toMiliseconds)(s || _t.FIVE_MINUTES), i, r, n, o;
    return {
        resolve: a => {
            n && i && (clearTimeout(n),
            i(a),
            o = Promise.resolve(a))
        }
        ,
        reject: a => {
            n && r && (clearTimeout(n),
            r(a))
        }
        ,
        done: () => new Promise( (a, c) => {
            if (o)
                return a(o);
            n = setTimeout( () => {
                let h = new Error(e);
                o = Promise.reject(h),
                c(h)
            }
            , t),
            i = a,
            r = c
        }
        )
    }
}
function Ot(s, e, t) {
    return new Promise( (i, r) => l(this, null, function*() {
        let n = setTimeout( () => r(new Error(t)), e);
        try {
            let o = yield s;
            i(o)
        } catch (o) {
            r(o)
        }
        clearTimeout(n)
    }))
}
function Ca(s, e) {
    if (typeof e == "string" && e.startsWith(`${s}:`))
        return e;
    if (s.toLowerCase() === "topic") {
        if (typeof e != "string")
            throw new Error('Value must be "string" for expirer target type: topic');
        return `topic:${e}`
    } else if (s.toLowerCase() === "id") {
        if (typeof e != "number")
            throw new Error('Value must be "number" for expirer target type: id');
        return `id:${e}`
    }
    throw new Error(`Unknown expirer target type: ${s}`)
}
function Na(s) {
    return Ca("topic", s)
}
function qa(s) {
    return Ca("id", s)
}
function _i(s) {
    let[e,t] = s.split(":")
      , i = {
        id: void 0,
        topic: void 0
    };
    if (e === "topic" && typeof t == "string")
        i.topic = t;
    else if (e === "id" && Number.isInteger(Number(t)))
        i.id = Number(t);
    else
        throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${t}`);
    return i
}
function oe(s, e) {
    return (0,
    _t.fromMiliseconds)((e || Date.now()) + (0,
    _t.toMiliseconds)(s))
}
function ht(s) {
    return Date.now() >= (0,
    _t.toMiliseconds)(s)
}
function W(s, e) {
    return `${s}${e ? `:${e}` : ""}`
}
function et(s=[], e=[]) {
    return [...new Set([...s, ...e])]
}
function Da(i) {
    return l(this, arguments, function*({id: s, topic: e, wcDeepLink: t}) {
        var r;
        try {
            if (!t)
                return;
            let n = typeof t == "string" ? JSON.parse(t) : t
              , o = n?.href;
            if (typeof o != "string")
                return;
            let a = Tl(o, s, e)
              , c = Ys();
            if (c === Ne.browser) {
                if (!((r = (0,
                tt.getDocument)()) != null && r.hasFocus())) {
                    console.warn("Document does not have focus, skipping deeplink.");
                    return
                }
                Al(a)
            } else
                c === Ne.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && (yield global.Linking.openURL(a))
        } catch (n) {
            console.error(n)
        }
    })
}
function Tl(s, e, t) {
    let i = `requestId=${e}&sessionTopic=${t}`;
    s.endsWith("/") && (s = s.slice(0, -1));
    let r = `${s}`;
    if (s.startsWith("https://t.me")) {
        let n = s.includes("?") ? "&startapp=" : "?startapp=";
        r = `${r}${n}${ql(i, !0)}`
    } else
        r = `${r}/wc?${i}`;
    return r
}
function Al(s) {
    let e = "_self";
    Nl() ? e = "_top" : (Cl() || s.startsWith("https://") || s.startsWith("http://")) && (e = "_blank"),
    window.open(s, e, "noreferrer noopener")
}
function Fa(s, e) {
    return l(this, null, function*() {
        let t = "";
        try {
            if (Yt() && (t = localStorage.getItem(e),
            t))
                return t;
            t = yield s.getItem(e)
        } catch (i) {
            console.error(i)
        }
        return t
    })
}
function Mr(s, e) {
    if (!s.includes(e))
        return null;
    let t = s.split(/([&,?,=])/)
      , i = t.indexOf(e);
    return t[i + 2]
}
function Br() {
    return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, s => {
        let e = Math.random() * 16 | 0;
        return (s === "x" ? e : e & 3 | 8).toString(16)
    }
    )
}
function Js() {
    return typeof process < "u" && process.env.IS_VITEST === "true"
}
function Cl() {
    return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto)
}
function Nl() {
    try {
        return window.self !== window.top
    } catch {
        return !1
    }
}
function ql(s, e=!1) {
    let t = Buffer.from(s).toString("base64");
    return e ? t.replace(/[=]/g, "") : t
}
function Ua(s) {
    return Buffer.from(s, "base64").toString("utf-8")
}
function ka(s) {
    return new Promise(e => setTimeout(e, s))
}
function Vs(s) {
    if (!Number.isSafeInteger(s) || s < 0)
        throw new Error("positive integer expected, got " + s)
}
function Dl(s) {
    return s instanceof Uint8Array || ArrayBuffer.isView(s) && s.constructor.name === "Uint8Array"
}
function Qs(s, ...e) {
    if (!Dl(s))
        throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(s.length))
        throw new Error("Uint8Array expected of length " + e + ", got length=" + s.length)
}
function Vr(s) {
    if (typeof s != "function" || typeof s.create != "function")
        throw new Error("Hash should be wrapped by utils.wrapConstructor");
    Vs(s.outputLen),
    Vs(s.blockLen)
}
function os(s, e=!0) {
    if (s.destroyed)
        throw new Error("Hash instance has been destroyed");
    if (e && s.finished)
        throw new Error("Hash#digest() has already been called")
}
function ja(s, e) {
    Qs(s);
    let t = e.outputLen;
    if (s.length < t)
        throw new Error("digestInto() expects output buffer of length at least " + t)
}
var mi = BigInt(2 ** 32 - 1)
  , Jo = BigInt(32);
function Fl(s, e=!1) {
    return e ? {
        h: Number(s & mi),
        l: Number(s >> Jo & mi)
    } : {
        h: Number(s >> Jo & mi) | 0,
        l: Number(s & mi) | 0
    }
}
function Ul(s, e=!1) {
    let t = new Uint32Array(s.length)
      , i = new Uint32Array(s.length);
    for (let r = 0; r < s.length; r++) {
        let {h: n, l: o} = Fl(s[r], e);
        [t[r],i[r]] = [n, o]
    }
    return [t, i]
}
var kl = (s, e, t) => s << t | e >>> 32 - t
  , jl = (s, e, t) => e << t | s >>> 32 - t
  , Ll = (s, e, t) => e << t - 32 | s >>> 64 - t
  , $l = (s, e, t) => s << t - 32 | e >>> 64 - t
  , is = typeof globalThis == "object" && "crypto"in globalThis ? globalThis.crypto : void 0;
function Ml(s) {
    return new Uint32Array(s.buffer,s.byteOffset,Math.floor(s.byteLength / 4))
}
function dr(s) {
    return new DataView(s.buffer,s.byteOffset,s.byteLength)
}
function ct(s, e) {
    return s << 32 - e | s >>> e
}
var Qo = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function Bl(s) {
    return s << 24 & 4278190080 | s << 8 & 16711680 | s >>> 8 & 65280 | s >>> 24 & 255
}
function Xo(s) {
    for (let e = 0; e < s.length; e++)
        s[e] = Bl(s[e])
}
function Vl(s) {
    if (typeof s != "string")
        throw new Error("utf8ToBytes expected string, got " + typeof s);
    return new Uint8Array(new TextEncoder().encode(s))
}
function as(s) {
    return typeof s == "string" && (s = Vl(s)),
    Qs(s),
    s
}
function zl(...s) {
    let e = 0;
    for (let i = 0; i < s.length; i++) {
        let r = s[i];
        Qs(r),
        e += r.length
    }
    let t = new Uint8Array(e);
    for (let i = 0, r = 0; i < s.length; i++) {
        let n = s[i];
        t.set(n, r),
        r += n.length
    }
    return t
}
var zs = class {
    clone() {
        return this._cloneInto()
    }
}
;
function La(s) {
    let e = i => s().update(as(i)).digest()
      , t = s();
    return e.outputLen = t.outputLen,
    e.blockLen = t.blockLen,
    e.create = () => s(),
    e
}
function ds(s=32) {
    if (is && typeof is.getRandomValues == "function")
        return is.getRandomValues(new Uint8Array(s));
    if (is && typeof is.randomBytes == "function")
        return is.randomBytes(s);
    throw new Error("crypto.getRandomValues must be defined")
}
var $a = []
  , Ma = []
  , Ba = []
  , Hl = BigInt(0)
  , Ms = BigInt(1)
  , Kl = BigInt(2)
  , Gl = BigInt(7)
  , Wl = BigInt(256)
  , Yl = BigInt(113);
for (let s = 0, e = Ms, t = 1, i = 0; s < 24; s++) {
    [t,i] = [i, (2 * t + 3 * i) % 5],
    $a.push(2 * (5 * i + t)),
    Ma.push((s + 1) * (s + 2) / 2 % 64);
    let r = Hl;
    for (let n = 0; n < 7; n++)
        e = (e << Ms ^ (e >> Gl) * Yl) % Wl,
        e & Kl && (r ^= Ms << (Ms << BigInt(n)) - Ms);
    Ba.push(r)
}
var [Jl,Ql] = Ul(Ba, !0)
  , Zo = (s, e, t) => t > 32 ? Ll(s, e, t) : kl(s, e, t)
  , ea = (s, e, t) => t > 32 ? $l(s, e, t) : jl(s, e, t);
function Xl(s, e=24) {
    let t = new Uint32Array(10);
    for (let i = 24 - e; i < 24; i++) {
        for (let o = 0; o < 10; o++)
            t[o] = s[o] ^ s[o + 10] ^ s[o + 20] ^ s[o + 30] ^ s[o + 40];
        for (let o = 0; o < 10; o += 2) {
            let a = (o + 8) % 10
              , c = (o + 2) % 10
              , h = t[c]
              , p = t[c + 1]
              , u = Zo(h, p, 1) ^ t[a]
              , d = ea(h, p, 1) ^ t[a + 1];
            for (let g = 0; g < 50; g += 10)
                s[o + g] ^= u,
                s[o + g + 1] ^= d
        }
        let r = s[2]
          , n = s[3];
        for (let o = 0; o < 24; o++) {
            let a = Ma[o]
              , c = Zo(r, n, a)
              , h = ea(r, n, a)
              , p = $a[o];
            r = s[p],
            n = s[p + 1],
            s[p] = c,
            s[p + 1] = h
        }
        for (let o = 0; o < 50; o += 10) {
            for (let a = 0; a < 10; a++)
                t[a] = s[o + a];
            for (let a = 0; a < 10; a++)
                s[o + a] ^= ~t[(a + 2) % 10] & t[(a + 4) % 10]
        }
        s[0] ^= Jl[i],
        s[1] ^= Ql[i]
    }
    t.fill(0)
}
var Pr = class s extends zs {
    constructor(e, t, i, r=!1, n=24) {
        if (super(),
        this.blockLen = e,
        this.suffix = t,
        this.outputLen = i,
        this.enableXOF = r,
        this.rounds = n,
        this.pos = 0,
        this.posOut = 0,
        this.finished = !1,
        this.destroyed = !1,
        Vs(i),
        0 >= this.blockLen || this.blockLen >= 200)
            throw new Error("Sha3 supports only keccak-f1600 function");
        this.state = new Uint8Array(200),
        this.state32 = Ml(this.state)
    }
    keccak() {
        Qo || Xo(this.state32),
        Xl(this.state32, this.rounds),
        Qo || Xo(this.state32),
        this.posOut = 0,
        this.pos = 0
    }
    update(e) {
        os(this);
        let {blockLen: t, state: i} = this;
        e = as(e);
        let r = e.length;
        for (let n = 0; n < r; ) {
            let o = Math.min(t - this.pos, r - n);
            for (let a = 0; a < o; a++)
                i[this.pos++] ^= e[n++];
            this.pos === t && this.keccak()
        }
        return this
    }
    finish() {
        if (this.finished)
            return;
        this.finished = !0;
        let {state: e, suffix: t, pos: i, blockLen: r} = this;
        e[i] ^= t,
        t & 128 && i === r - 1 && this.keccak(),
        e[r - 1] ^= 128,
        this.keccak()
    }
    writeInto(e) {
        os(this, !1),
        Qs(e),
        this.finish();
        let t = this.state
          , {blockLen: i} = this;
        for (let r = 0, n = e.length; r < n; ) {
            this.posOut >= i && this.keccak();
            let o = Math.min(i - this.posOut, n - r);
            e.set(t.subarray(this.posOut, this.posOut + o), r),
            this.posOut += o,
            r += o
        }
        return e
    }
    xofInto(e) {
        if (!this.enableXOF)
            throw new Error("XOF is not possible for this instance");
        return this.writeInto(e)
    }
    xof(e) {
        return Vs(e),
        this.xofInto(new Uint8Array(e))
    }
    digestInto(e) {
        if (ja(e, this),
        this.finished)
            throw new Error("digest() was already called");
        return this.writeInto(e),
        this.destroy(),
        e
    }
    digest() {
        return this.digestInto(new Uint8Array(this.outputLen))
    }
    destroy() {
        this.destroyed = !0,
        this.state.fill(0)
    }
    _cloneInto(e) {
        let {blockLen: t, suffix: i, outputLen: r, rounds: n, enableXOF: o} = this;
        return e || (e = new s(t,i,r,o,n)),
        e.state32.set(this.state32),
        e.pos = this.pos,
        e.posOut = this.posOut,
        e.finished = this.finished,
        e.rounds = n,
        e.suffix = i,
        e.outputLen = r,
        e.enableXOF = o,
        e.destroyed = this.destroyed,
        e
    }
}
  , Zl = (s, e, t) => La( () => new Pr(e,s,t))
  , ep = Zl(1, 136, 256 / 8)
  , tp = "https://rpc.walletconnect.org/v1";
function Va(s) {
    let e = `Ethereum Signed Message:
${s.length}`
      , t = new TextEncoder().encode(e + s);
    return "0x" + Buffer.from(ep(t)).toString("hex")
}
function sp(s, e, t, i, r, n) {
    return l(this, null, function*() {
        switch (t.t) {
        case "eip191":
            return yield ip(s, e, t.s);
        case "eip1271":
            return yield rp(s, e, t.s, i, r, n);
        default:
            throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${t.t}`)
        }
    })
}
function ip(s, e, t) {
    return l(this, null, function*() {
        return (yield ur({
            hash: Va(e),
            signature: t
        })).toLowerCase() === s.toLowerCase()
    })
}
function rp(s, e, t, i, r, n) {
    return l(this, null, function*() {
        let o = Ft(i);
        if (!o.namespace || !o.reference)
            throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${i}`);
        try {
            let a = "0x1626ba7e"
              , c = "0000000000000000000000000000000000000000000000000000000000000040"
              , h = "0000000000000000000000000000000000000000000000000000000000000041"
              , p = t.substring(2)
              , u = Va(e).substring(2)
              , d = a + u + c + h + p
              , g = yield fetch(`${n || tp}/?chainId=${i}&projectId=${r}`, {
                method: "POST",
                body: JSON.stringify({
                    id: np(),
                    jsonrpc: "2.0",
                    method: "eth_call",
                    params: [{
                        to: s,
                        data: d
                    }, "latest"]
                })
            })
              , {result: f} = yield g.json();
            return f ? f.slice(0, a.length).toLowerCase() === a.toLowerCase() : !1
        } catch (a) {
            return console.error("isValidEip1271Signature: ", a),
            !1
        }
    })
}
function np() {
    return Date.now() + Math.floor(Math.random() * 1e3)
}
function za(s) {
    let e = atob(s)
      , t = new Uint8Array(e.length);
    for (let o = 0; o < e.length; o++)
        t[o] = e.charCodeAt(o);
    let i = t[0];
    if (i === 0)
        throw new Error("No signatures found");
    let r = 1 + i * 64;
    if (t.length < r)
        throw new Error("Transaction data too short for claimed signature count");
    if (t.length < 100)
        throw new Error("Transaction too short");
    let n = Buffer.from(s, "base64").slice(1, 65);
    return Ko.encode(n)
}
var op = Object.defineProperty
  , ap = Object.defineProperties
  , cp = Object.getOwnPropertyDescriptors
  , ta = Object.getOwnPropertySymbols
  , hp = Object.prototype.hasOwnProperty
  , lp = Object.prototype.propertyIsEnumerable
  , sa = (s, e, t) => e in s ? op(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , pp = (s, e) => {
    for (var t in e || (e = {}))
        hp.call(e, t) && sa(s, t, e[t]);
    if (ta)
        for (var t of ta(e))
            lp.call(e, t) && sa(s, t, e[t]);
    return s
}
  , up = (s, e) => ap(s, cp(e))
  , dp = "did:pkh:"
  , zr = s => s?.split(":")
  , gp = s => {
    let e = s && zr(s);
    if (e)
        return s.includes(dp) ? e[3] : e[1]
}
  , Pi = s => {
    let e = s && zr(s);
    if (e)
        return e[2] + ":" + e[3]
}
  , Xs = s => {
    let e = s && zr(s);
    if (e)
        return e.pop()
}
;
function Hr(s) {
    return l(this, null, function*() {
        let {cacao: e, projectId: t} = s
          , {s: i, p: r} = e
          , n = Kr(r, r.iss)
          , o = Xs(r.iss);
        return yield sp(o, n, i, Pi(r.iss), t)
    })
}
var Kr = (s, e) => {
    let t = `${s.domain} wants you to sign in with your Ethereum account:`
      , i = Xs(e);
    if (!s.aud && !s.uri)
        throw new Error("Either `aud` or `uri` is required to construct the message");
    let r = s.statement || void 0
      , n = `URI: ${s.aud || s.uri}`
      , o = `Version: ${s.version}`
      , a = `Chain ID: ${gp(e)}`
      , c = `Nonce: ${s.nonce}`
      , h = `Issued At: ${s.iat}`
      , p = s.exp ? `Expiration Time: ${s.exp}` : void 0
      , u = s.nbf ? `Not Before: ${s.nbf}` : void 0
      , d = s.requestId ? `Request ID: ${s.requestId}` : void 0
      , g = s.resources ? `Resources:${s.resources.map(y => `
- ${y}`).join("")}` : void 0
      , f = Zs(s.resources);
    if (f) {
        let y = Hs(f);
        r = Ep(r, y)
    }
    return [t, i, "", r, "", n, o, a, c, h, p, u, d, g].filter(y => y != null).join(`
`)
}
;
function fp(s) {
    return Buffer.from(JSON.stringify(s)).toString("base64")
}
function mp(s) {
    return JSON.parse(Buffer.from(s, "base64").toString("utf-8"))
}
function Gt(s) {
    if (!s)
        throw new Error("No recap provided, value is undefined");
    if (!s.att)
        throw new Error("No `att` property found");
    let e = Object.keys(s.att);
    if (!(e != null && e.length))
        throw new Error("No resources found in `att` property");
    e.forEach(t => {
        let i = s.att[t];
        if (Array.isArray(i))
            throw new Error(`Resource must be an object: ${t}`);
        if (typeof i != "object")
            throw new Error(`Resource must be an object: ${t}`);
        if (!Object.keys(i).length)
            throw new Error(`Resource object is empty: ${t}`);
        Object.keys(i).forEach(r => {
            let n = i[r];
            if (!Array.isArray(n))
                throw new Error(`Ability limits ${r} must be an array of objects, found: ${n}`);
            if (!n.length)
                throw new Error(`Value of ${r} is empty array, must be an array with objects`);
            n.forEach(o => {
                if (typeof o != "object")
                    throw new Error(`Ability limits (${r}) must be an array of objects, found: ${o}`)
            }
            )
        }
        )
    }
    )
}
function yp(s, e, t, i={}) {
    return t?.sort( (r, n) => r.localeCompare(n)),
    {
        att: {
            [s]: wp(e, t, i)
        }
    }
}
function wp(s, e, t={}) {
    e = e?.sort( (r, n) => r.localeCompare(n));
    let i = e.map(r => ({
        [`${s}/${r}`]: [t]
    }));
    return Object.assign({}, ...i)
}
function Ha(s) {
    return Gt(s),
    `urn:recap:${fp(s).replace(/=/g, "")}`
}
function Hs(s) {
    let e = mp(s.replace("urn:recap:", ""));
    return Gt(e),
    e
}
function Ka(s, e, t) {
    let i = yp(s, e, t);
    return Ha(i)
}
function bp(s) {
    return s && s.includes("urn:recap:")
}
function Ga(s, e) {
    let t = Hs(s)
      , i = Hs(e)
      , r = vp(t, i);
    return Ha(r)
}
function vp(s, e) {
    Gt(s),
    Gt(e);
    let t = Object.keys(s.att).concat(Object.keys(e.att)).sort( (r, n) => r.localeCompare(n))
      , i = {
        att: {}
    };
    return t.forEach(r => {
        var n, o;
        Object.keys(((n = s.att) == null ? void 0 : n[r]) || {}).concat(Object.keys(((o = e.att) == null ? void 0 : o[r]) || {})).sort( (a, c) => a.localeCompare(c)).forEach(a => {
            var c, h;
            i.att[r] = up(pp({}, i.att[r]), {
                [a]: ((c = s.att[r]) == null ? void 0 : c[a]) || ((h = e.att[r]) == null ? void 0 : h[a])
            })
        }
        )
    }
    ),
    i
}
function Ep(s="", e) {
    Gt(e);
    let t = "I further authorize the stated URI to perform the following actions on my behalf: ";
    if (s.includes(t))
        return s;
    let i = []
      , r = 0;
    Object.keys(e.att).forEach(a => {
        let c = Object.keys(e.att[a]).map(u => ({
            ability: u.split("/")[0],
            action: u.split("/")[1]
        }));
        c.sort( (u, d) => u.action.localeCompare(d.action));
        let h = {};
        c.forEach(u => {
            h[u.ability] || (h[u.ability] = []),
            h[u.ability].push(u.action)
        }
        );
        let p = Object.keys(h).map(u => (r++,
        `(${r}) '${u}': '${h[u].join("', '")}' for '${a}'.`));
        i.push(p.join(", ").replace(".,", "."))
    }
    );
    let n = i.join(" ")
      , o = `${t}${n}`;
    return `${s ? s + " " : ""}${o}`
}
function Gr(s) {
    var e;
    let t = Hs(s);
    Gt(t);
    let i = (e = t.att) == null ? void 0 : e.eip155;
    return i ? Object.keys(i).map(r => r.split("/")[1]) : []
}
function Wr(s) {
    let e = Hs(s);
    Gt(e);
    let t = [];
    return Object.values(e.att).forEach(i => {
        Object.values(i).forEach(r => {
            var n;
            (n = r?.[0]) != null && n.chains && t.push(r[0].chains)
        }
        )
    }
    ),
    [...new Set(t.flat())]
}
function Zs(s) {
    if (!s)
        return;
    let e = s?.[s.length - 1];
    return bp(e) ? e : void 0
}
function gr(s) {
    if (!Number.isSafeInteger(s) || s < 0)
        throw new Error("positive integer expected, got " + s)
}
function Wa(s) {
    return s instanceof Uint8Array || ArrayBuffer.isView(s) && s.constructor.name === "Uint8Array"
}
function je(s, ...e) {
    if (!Wa(s))
        throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(s.length))
        throw new Error("Uint8Array expected of length " + e + ", got length=" + s.length)
}
function ia(s, e=!0) {
    if (s.destroyed)
        throw new Error("Hash instance has been destroyed");
    if (e && s.finished)
        throw new Error("Hash#digest() has already been called")
}
function Ip(s, e) {
    je(s);
    let t = e.outputLen;
    if (s.length < t)
        throw new Error("digestInto() expects output buffer of length at least " + t)
}
function ra(s) {
    if (typeof s != "boolean")
        throw new Error(`boolean expected, not ${s}`)
}
var Nt = s => new Uint32Array(s.buffer,s.byteOffset,Math.floor(s.byteLength / 4))
  , _p = s => new DataView(s.buffer,s.byteOffset,s.byteLength)
  , Pp = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!Pp)
    throw new Error("Non little-endian hardware is not supported");
function Sp(s) {
    if (typeof s != "string")
        throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(s))
}
function Sr(s) {
    if (typeof s == "string")
        s = Sp(s);
    else if (Wa(s))
        s = Or(s);
    else
        throw new Error("Uint8Array expected, got " + typeof s);
    return s
}
function Op(s, e) {
    if (e == null || typeof e != "object")
        throw new Error("options must be defined");
    return Object.assign(s, e)
}
function Rp(s, e) {
    if (s.length !== e.length)
        return !1;
    let t = 0;
    for (let i = 0; i < s.length; i++)
        t |= s[i] ^ e[i];
    return t === 0
}
var xp = (s, e) => {
    function t(i, ...r) {
        if (je(i),
        s.nonceLength !== void 0) {
            let h = r[0];
            if (!h)
                throw new Error("nonce / iv required");
            s.varSizeNonce ? je(h) : je(h, s.nonceLength)
        }
        let n = s.tagLength;
        n && r[1] !== void 0 && je(r[1]);
        let o = e(i, ...r)
          , a = (h, p) => {
            if (p !== void 0) {
                if (h !== 2)
                    throw new Error("cipher output not supported");
                je(p)
            }
        }
          , c = !1;
        return {
            encrypt(h, p) {
                if (c)
                    throw new Error("cannot encrypt() twice with same key + nonce");
                return c = !0,
                je(h),
                a(o.encrypt.length, p),
                o.encrypt(h, p)
            },
            decrypt(h, p) {
                if (je(h),
                n && h.length < n)
                    throw new Error("invalid ciphertext length: smaller than tagLength=" + n);
                return a(o.decrypt.length, p),
                o.decrypt(h, p)
            }
        }
    }
    return Object.assign(t, s),
    t
}
;
function na(s, e, t=!0) {
    if (e === void 0)
        return new Uint8Array(s);
    if (e.length !== s)
        throw new Error("invalid output length, expected " + s + ", got: " + e.length);
    if (t && !Tp(e))
        throw new Error("invalid output, must be aligned");
    return e
}
function oa(s, e, t, i) {
    if (typeof s.setBigUint64 == "function")
        return s.setBigUint64(e, t, i);
    let r = BigInt(32)
      , n = BigInt(4294967295)
      , o = Number(t >> r & n)
      , a = Number(t & n)
      , c = i ? 4 : 0
      , h = i ? 0 : 4;
    s.setUint32(e + c, o, i),
    s.setUint32(e + h, a, i)
}
function Tp(s) {
    return s.byteOffset % 4 === 0
}
function Or(s) {
    return Uint8Array.from(s)
}
function cs(...s) {
    for (let e = 0; e < s.length; e++)
        s[e].fill(0)
}
var Ya = s => Uint8Array.from(s.split("").map(e => e.charCodeAt(0)))
  , Ap = Ya("expand 16-byte k")
  , Cp = Ya("expand 32-byte k")
  , Np = Nt(Ap)
  , qp = Nt(Cp);
function G(s, e) {
    return s << e | s >>> 32 - e
}
function Rr(s) {
    return s.byteOffset % 4 === 0
}
var yi = 64
  , Dp = 16
  , Ja = 2 ** 32 - 1
  , aa = new Uint32Array;
function Fp(s, e, t, i, r, n, o, a) {
    let c = r.length
      , h = new Uint8Array(yi)
      , p = Nt(h)
      , u = Rr(r) && Rr(n)
      , d = u ? Nt(r) : aa
      , g = u ? Nt(n) : aa;
    for (let f = 0; f < c; o++) {
        if (s(e, t, i, p, o, a),
        o >= Ja)
            throw new Error("arx: counter overflow");
        let y = Math.min(yi, c - f);
        if (u && y === yi) {
            let m = f / 4;
            if (f % 4 !== 0)
                throw new Error("arx: invalid block position");
            for (let b = 0, w; b < Dp; b++)
                w = m + b,
                g[w] = d[w] ^ p[b];
            f += yi;
            continue
        }
        for (let m = 0, b; m < y; m++)
            b = f + m,
            n[b] = r[b] ^ h[m];
        f += y
    }
}
function Up(s, e) {
    let {allowShortKeys: t, extendNonceFn: i, counterLength: r, counterRight: n, rounds: o} = Op({
        allowShortKeys: !1,
        counterLength: 8,
        counterRight: !1,
        rounds: 20
    }, e);
    if (typeof s != "function")
        throw new Error("core must be a function");
    return gr(r),
    gr(o),
    ra(n),
    ra(t),
    (a, c, h, p, u=0) => {
        je(a),
        je(c),
        je(h);
        let d = h.length;
        if (p === void 0 && (p = new Uint8Array(d)),
        je(p),
        gr(u),
        u < 0 || u >= Ja)
            throw new Error("arx: counter overflow");
        if (p.length < d)
            throw new Error(`arx: output (${p.length}) is shorter than data (${d})`);
        let g = [], f = a.length, y, m;
        if (f === 32)
            g.push(y = Or(a)),
            m = qp;
        else if (f === 16 && t)
            y = new Uint8Array(32),
            y.set(a),
            y.set(a, 16),
            m = Np,
            g.push(y);
        else
            throw new Error(`arx: invalid 32-byte key, got length=${f}`);
        Rr(c) || g.push(c = Or(c));
        let b = Nt(y);
        if (i) {
            if (c.length !== 24)
                throw new Error("arx: extended nonce must be 24 bytes");
            i(m, b, Nt(c.subarray(0, 16)), b),
            c = c.subarray(16)
        }
        let w = 16 - r;
        if (w !== c.length)
            throw new Error(`arx: nonce must be ${w} or 16 bytes`);
        if (w !== 12) {
            let P = new Uint8Array(12);
            P.set(c, n ? 0 : 12 - c.length),
            c = P,
            g.push(c)
        }
        let v = Nt(c);
        return Fp(s, m, b, v, h, p, u, o),
        cs(...g),
        p
    }
}
var be = (s, e) => s[e++] & 255 | (s[e++] & 255) << 8
  , xr = class {
    constructor(e) {
        this.blockLen = 16,
        this.outputLen = 16,
        this.buffer = new Uint8Array(16),
        this.r = new Uint16Array(10),
        this.h = new Uint16Array(10),
        this.pad = new Uint16Array(8),
        this.pos = 0,
        this.finished = !1,
        e = Sr(e),
        je(e, 32);
        let t = be(e, 0)
          , i = be(e, 2)
          , r = be(e, 4)
          , n = be(e, 6)
          , o = be(e, 8)
          , a = be(e, 10)
          , c = be(e, 12)
          , h = be(e, 14);
        this.r[0] = t & 8191,
        this.r[1] = (t >>> 13 | i << 3) & 8191,
        this.r[2] = (i >>> 10 | r << 6) & 7939,
        this.r[3] = (r >>> 7 | n << 9) & 8191,
        this.r[4] = (n >>> 4 | o << 12) & 255,
        this.r[5] = o >>> 1 & 8190,
        this.r[6] = (o >>> 14 | a << 2) & 8191,
        this.r[7] = (a >>> 11 | c << 5) & 8065,
        this.r[8] = (c >>> 8 | h << 8) & 8191,
        this.r[9] = h >>> 5 & 127;
        for (let p = 0; p < 8; p++)
            this.pad[p] = be(e, 16 + 2 * p)
    }
    process(e, t, i=!1) {
        let r = i ? 0 : 2048
          , {h: n, r: o} = this
          , a = o[0]
          , c = o[1]
          , h = o[2]
          , p = o[3]
          , u = o[4]
          , d = o[5]
          , g = o[6]
          , f = o[7]
          , y = o[8]
          , m = o[9]
          , b = be(e, t + 0)
          , w = be(e, t + 2)
          , v = be(e, t + 4)
          , P = be(e, t + 6)
          , A = be(e, t + 8)
          , S = be(e, t + 10)
          , R = be(e, t + 12)
          , N = be(e, t + 14)
          , E = n[0] + (b & 8191)
          , j = n[1] + ((b >>> 13 | w << 3) & 8191)
          , D = n[2] + ((w >>> 10 | v << 6) & 8191)
          , U = n[3] + ((v >>> 7 | P << 9) & 8191)
          , $ = n[4] + ((P >>> 4 | A << 12) & 8191)
          , _ = n[5] + (A >>> 1 & 8191)
          , T = n[6] + ((A >>> 14 | S << 2) & 8191)
          , x = n[7] + ((S >>> 11 | R << 5) & 8191)
          , q = n[8] + ((R >>> 8 | N << 8) & 8191)
          , F = n[9] + (N >>> 5 | r)
          , O = 0
          , L = O + E * a + j * (5 * m) + D * (5 * y) + U * (5 * f) + $ * (5 * g);
        O = L >>> 13,
        L &= 8191,
        L += _ * (5 * d) + T * (5 * u) + x * (5 * p) + q * (5 * h) + F * (5 * c),
        O += L >>> 13,
        L &= 8191;
        let M = O + E * c + j * a + D * (5 * m) + U * (5 * y) + $ * (5 * f);
        O = M >>> 13,
        M &= 8191,
        M += _ * (5 * g) + T * (5 * d) + x * (5 * u) + q * (5 * p) + F * (5 * h),
        O += M >>> 13,
        M &= 8191;
        let B = O + E * h + j * c + D * a + U * (5 * m) + $ * (5 * y);
        O = B >>> 13,
        B &= 8191,
        B += _ * (5 * f) + T * (5 * g) + x * (5 * d) + q * (5 * u) + F * (5 * p),
        O += B >>> 13,
        B &= 8191;
        let te = O + E * p + j * h + D * c + U * a + $ * (5 * m);
        O = te >>> 13,
        te &= 8191,
        te += _ * (5 * y) + T * (5 * f) + x * (5 * g) + q * (5 * d) + F * (5 * u),
        O += te >>> 13,
        te &= 8191;
        let Q = O + E * u + j * p + D * h + U * c + $ * a;
        O = Q >>> 13,
        Q &= 8191,
        Q += _ * (5 * m) + T * (5 * y) + x * (5 * f) + q * (5 * g) + F * (5 * d),
        O += Q >>> 13,
        Q &= 8191;
        let ae = O + E * d + j * u + D * p + U * h + $ * c;
        O = ae >>> 13,
        ae &= 8191,
        ae += _ * a + T * (5 * m) + x * (5 * y) + q * (5 * f) + F * (5 * g),
        O += ae >>> 13,
        ae &= 8191;
        let de = O + E * g + j * d + D * u + U * p + $ * h;
        O = de >>> 13,
        de &= 8191,
        de += _ * c + T * a + x * (5 * m) + q * (5 * y) + F * (5 * f),
        O += de >>> 13,
        de &= 8191;
        let _e = O + E * f + j * g + D * d + U * u + $ * p;
        O = _e >>> 13,
        _e &= 8191,
        _e += _ * h + T * c + x * a + q * (5 * m) + F * (5 * y),
        O += _e >>> 13,
        _e &= 8191;
        let he = O + E * y + j * f + D * g + U * d + $ * u;
        O = he >>> 13,
        he &= 8191,
        he += _ * p + T * h + x * c + q * a + F * (5 * m),
        O += he >>> 13,
        he &= 8191;
        let le = O + E * m + j * y + D * f + U * g + $ * d;
        O = le >>> 13,
        le &= 8191,
        le += _ * u + T * p + x * h + q * c + F * a,
        O += le >>> 13,
        le &= 8191,
        O = (O << 2) + O | 0,
        O = O + L | 0,
        L = O & 8191,
        O = O >>> 13,
        M += O,
        n[0] = L,
        n[1] = M,
        n[2] = B,
        n[3] = te,
        n[4] = Q,
        n[5] = ae,
        n[6] = de,
        n[7] = _e,
        n[8] = he,
        n[9] = le
    }
    finalize() {
        let {h: e, pad: t} = this
          , i = new Uint16Array(10)
          , r = e[1] >>> 13;
        e[1] &= 8191;
        for (let a = 2; a < 10; a++)
            e[a] += r,
            r = e[a] >>> 13,
            e[a] &= 8191;
        e[0] += r * 5,
        r = e[0] >>> 13,
        e[0] &= 8191,
        e[1] += r,
        r = e[1] >>> 13,
        e[1] &= 8191,
        e[2] += r,
        i[0] = e[0] + 5,
        r = i[0] >>> 13,
        i[0] &= 8191;
        for (let a = 1; a < 10; a++)
            i[a] = e[a] + r,
            r = i[a] >>> 13,
            i[a] &= 8191;
        i[9] -= 8192;
        let n = (r ^ 1) - 1;
        for (let a = 0; a < 10; a++)
            i[a] &= n;
        n = ~n;
        for (let a = 0; a < 10; a++)
            e[a] = e[a] & n | i[a];
        e[0] = (e[0] | e[1] << 13) & 65535,
        e[1] = (e[1] >>> 3 | e[2] << 10) & 65535,
        e[2] = (e[2] >>> 6 | e[3] << 7) & 65535,
        e[3] = (e[3] >>> 9 | e[4] << 4) & 65535,
        e[4] = (e[4] >>> 12 | e[5] << 1 | e[6] << 14) & 65535,
        e[5] = (e[6] >>> 2 | e[7] << 11) & 65535,
        e[6] = (e[7] >>> 5 | e[8] << 8) & 65535,
        e[7] = (e[8] >>> 8 | e[9] << 5) & 65535;
        let o = e[0] + t[0];
        e[0] = o & 65535;
        for (let a = 1; a < 8; a++)
            o = (e[a] + t[a] | 0) + (o >>> 16) | 0,
            e[a] = o & 65535;
        cs(i)
    }
    update(e) {
        ia(this);
        let {buffer: t, blockLen: i} = this;
        e = Sr(e);
        let r = e.length;
        for (let n = 0; n < r; ) {
            let o = Math.min(i - this.pos, r - n);
            if (o === i) {
                for (; i <= r - n; n += i)
                    this.process(e, n);
                continue
            }
            t.set(e.subarray(n, n + o), this.pos),
            this.pos += o,
            n += o,
            this.pos === i && (this.process(t, 0, !1),
            this.pos = 0)
        }
        return this
    }
    destroy() {
        cs(this.h, this.r, this.buffer, this.pad)
    }
    digestInto(e) {
        ia(this),
        Ip(e, this),
        this.finished = !0;
        let {buffer: t, h: i} = this
          , {pos: r} = this;
        if (r) {
            for (t[r++] = 1; r < 16; r++)
                t[r] = 0;
            this.process(t, 0, !0)
        }
        this.finalize();
        let n = 0;
        for (let o = 0; o < 8; o++)
            e[n++] = i[o] >>> 0,
            e[n++] = i[o] >>> 8;
        return e
    }
    digest() {
        let {buffer: e, outputLen: t} = this;
        this.digestInto(e);
        let i = e.slice(0, t);
        return this.destroy(),
        i
    }
}
;
function kp(s) {
    let e = (i, r) => s(r).update(Sr(i)).digest()
      , t = s(new Uint8Array(32));
    return e.outputLen = t.outputLen,
    e.blockLen = t.blockLen,
    e.create = i => s(i),
    e
}
var jp = kp(s => new xr(s));
function Lp(s, e, t, i, r, n=20) {
    let o = s[0]
      , a = s[1]
      , c = s[2]
      , h = s[3]
      , p = e[0]
      , u = e[1]
      , d = e[2]
      , g = e[3]
      , f = e[4]
      , y = e[5]
      , m = e[6]
      , b = e[7]
      , w = r
      , v = t[0]
      , P = t[1]
      , A = t[2]
      , S = o
      , R = a
      , N = c
      , E = h
      , j = p
      , D = u
      , U = d
      , $ = g
      , _ = f
      , T = y
      , x = m
      , q = b
      , F = w
      , O = v
      , L = P
      , M = A;
    for (let te = 0; te < n; te += 2)
        S = S + j | 0,
        F = G(F ^ S, 16),
        _ = _ + F | 0,
        j = G(j ^ _, 12),
        S = S + j | 0,
        F = G(F ^ S, 8),
        _ = _ + F | 0,
        j = G(j ^ _, 7),
        R = R + D | 0,
        O = G(O ^ R, 16),
        T = T + O | 0,
        D = G(D ^ T, 12),
        R = R + D | 0,
        O = G(O ^ R, 8),
        T = T + O | 0,
        D = G(D ^ T, 7),
        N = N + U | 0,
        L = G(L ^ N, 16),
        x = x + L | 0,
        U = G(U ^ x, 12),
        N = N + U | 0,
        L = G(L ^ N, 8),
        x = x + L | 0,
        U = G(U ^ x, 7),
        E = E + $ | 0,
        M = G(M ^ E, 16),
        q = q + M | 0,
        $ = G($ ^ q, 12),
        E = E + $ | 0,
        M = G(M ^ E, 8),
        q = q + M | 0,
        $ = G($ ^ q, 7),
        S = S + D | 0,
        M = G(M ^ S, 16),
        x = x + M | 0,
        D = G(D ^ x, 12),
        S = S + D | 0,
        M = G(M ^ S, 8),
        x = x + M | 0,
        D = G(D ^ x, 7),
        R = R + U | 0,
        F = G(F ^ R, 16),
        q = q + F | 0,
        U = G(U ^ q, 12),
        R = R + U | 0,
        F = G(F ^ R, 8),
        q = q + F | 0,
        U = G(U ^ q, 7),
        N = N + $ | 0,
        O = G(O ^ N, 16),
        _ = _ + O | 0,
        $ = G($ ^ _, 12),
        N = N + $ | 0,
        O = G(O ^ N, 8),
        _ = _ + O | 0,
        $ = G($ ^ _, 7),
        E = E + j | 0,
        L = G(L ^ E, 16),
        T = T + L | 0,
        j = G(j ^ T, 12),
        E = E + j | 0,
        L = G(L ^ E, 8),
        T = T + L | 0,
        j = G(j ^ T, 7);
    let B = 0;
    i[B++] = o + S | 0,
    i[B++] = a + R | 0,
    i[B++] = c + N | 0,
    i[B++] = h + E | 0,
    i[B++] = p + j | 0,
    i[B++] = u + D | 0,
    i[B++] = d + U | 0,
    i[B++] = g + $ | 0,
    i[B++] = f + _ | 0,
    i[B++] = y + T | 0,
    i[B++] = m + x | 0,
    i[B++] = b + q | 0,
    i[B++] = w + F | 0,
    i[B++] = v + O | 0,
    i[B++] = P + L | 0,
    i[B++] = A + M | 0
}
var $p = Up(Lp, {
    counterRight: !1,
    counterLength: 4,
    allowShortKeys: !1
})
  , Mp = new Uint8Array(16)
  , ca = (s, e) => {
    s.update(e);
    let t = e.length % 16;
    t && s.update(Mp.subarray(t))
}
  , Bp = new Uint8Array(32);
function ha(s, e, t, i, r) {
    let n = s(e, t, Bp)
      , o = jp.create(n);
    r && ca(o, r),
    ca(o, i);
    let a = new Uint8Array(16)
      , c = _p(a);
    oa(c, 0, BigInt(r ? r.length : 0), !0),
    oa(c, 8, BigInt(i.length), !0),
    o.update(a);
    let h = o.digest();
    return cs(n, a),
    h
}
var Vp = s => (e, t, i) => ({
    encrypt(r, n) {
        let o = r.length;
        n = na(o + 16, n, !1),
        n.set(r);
        let a = n.subarray(0, -16);
        s(e, t, a, a, 1);
        let c = ha(s, e, t, a, i);
        return n.set(c, o),
        cs(c),
        n
    },
    decrypt(r, n) {
        n = na(r.length - 16, n, !1);
        let o = r.subarray(0, -16)
          , a = r.subarray(-16)
          , c = ha(s, e, t, o, i);
        if (!Rp(a, c))
            throw new Error("invalid tag");
        return n.set(r.subarray(0, -16)),
        s(e, t, n, n, 1),
        cs(c),
        n
    }
})
  , Qa = xp({
    blockSize: 64,
    nonceLength: 12,
    tagLength: 16
}, Vp($p))
  , bi = class extends zs {
    constructor(e, t) {
        super(),
        this.finished = !1,
        this.destroyed = !1,
        Vr(e);
        let i = as(t);
        if (this.iHash = e.create(),
        typeof this.iHash.update != "function")
            throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen,
        this.outputLen = this.iHash.outputLen;
        let r = this.blockLen
          , n = new Uint8Array(r);
        n.set(i.length > r ? e.create().update(i).digest() : i);
        for (let o = 0; o < n.length; o++)
            n[o] ^= 54;
        this.iHash.update(n),
        this.oHash = e.create();
        for (let o = 0; o < n.length; o++)
            n[o] ^= 106;
        this.oHash.update(n),
        n.fill(0)
    }
    update(e) {
        return os(this),
        this.iHash.update(e),
        this
    }
    digestInto(e) {
        os(this),
        Qs(e, this.outputLen),
        this.finished = !0,
        this.iHash.digestInto(e),
        this.oHash.update(e),
        this.oHash.digestInto(e),
        this.destroy()
    }
    digest() {
        let e = new Uint8Array(this.oHash.outputLen);
        return this.digestInto(e),
        e
    }
    _cloneInto(e) {
        e || (e = Object.create(Object.getPrototypeOf(this), {}));
        let {oHash: t, iHash: i, finished: r, destroyed: n, blockLen: o, outputLen: a} = this;
        return e = e,
        e.finished = r,
        e.destroyed = n,
        e.blockLen = o,
        e.outputLen = a,
        e.oHash = t._cloneInto(e.oHash),
        e.iHash = i._cloneInto(e.iHash),
        e
    }
    destroy() {
        this.destroyed = !0,
        this.oHash.destroy(),
        this.iHash.destroy()
    }
}
  , Si = (s, e, t) => new bi(s,e).update(t).digest();
Si.create = (s, e) => new bi(s,e);
function zp(s, e, t) {
    return Vr(s),
    t === void 0 && (t = new Uint8Array(s.outputLen)),
    Si(s, as(t), as(e))
}
var fr = new Uint8Array([0])
  , la = new Uint8Array;
function Hp(s, e, t, i=32) {
    if (Vr(s),
    Vs(i),
    i > 255 * s.outputLen)
        throw new Error("Length should be <= 255*HashLen");
    let r = Math.ceil(i / s.outputLen);
    t === void 0 && (t = la);
    let n = new Uint8Array(r * s.outputLen)
      , o = Si.create(s, e)
      , a = o._cloneInto()
      , c = new Uint8Array(o.outputLen);
    for (let h = 0; h < r; h++)
        fr[0] = h + 1,
        a.update(h === 0 ? la : c).update(t).update(fr).digestInto(c),
        n.set(c, s.outputLen * h),
        o._cloneInto(a);
    return o.destroy(),
    a.destroy(),
    c.fill(0),
    fr.fill(0),
    n.slice(0, i)
}
var Kp = (s, e, t, i, r) => Hp(s, zp(s, e, t), i, r);
function Gp(s, e, t, i) {
    if (typeof s.setBigUint64 == "function")
        return s.setBigUint64(e, t, i);
    let r = BigInt(32)
      , n = BigInt(4294967295)
      , o = Number(t >> r & n)
      , a = Number(t & n)
      , c = i ? 4 : 0
      , h = i ? 0 : 4;
    s.setUint32(e + c, o, i),
    s.setUint32(e + h, a, i)
}
function Wp(s, e, t) {
    return s & e ^ ~s & t
}
function Yp(s, e, t) {
    return s & e ^ s & t ^ e & t
}
var Tr = class extends zs {
    constructor(e, t, i, r) {
        super(),
        this.blockLen = e,
        this.outputLen = t,
        this.padOffset = i,
        this.isLE = r,
        this.finished = !1,
        this.length = 0,
        this.pos = 0,
        this.destroyed = !1,
        this.buffer = new Uint8Array(e),
        this.view = dr(this.buffer)
    }
    update(e) {
        os(this);
        let {view: t, buffer: i, blockLen: r} = this;
        e = as(e);
        let n = e.length;
        for (let o = 0; o < n; ) {
            let a = Math.min(r - this.pos, n - o);
            if (a === r) {
                let c = dr(e);
                for (; r <= n - o; o += r)
                    this.process(c, o);
                continue
            }
            i.set(e.subarray(o, o + a), this.pos),
            this.pos += a,
            o += a,
            this.pos === r && (this.process(t, 0),
            this.pos = 0)
        }
        return this.length += e.length,
        this.roundClean(),
        this
    }
    digestInto(e) {
        os(this),
        ja(e, this),
        this.finished = !0;
        let {buffer: t, view: i, blockLen: r, isLE: n} = this
          , {pos: o} = this;
        t[o++] = 128,
        this.buffer.subarray(o).fill(0),
        this.padOffset > r - o && (this.process(i, 0),
        o = 0);
        for (let u = o; u < r; u++)
            t[u] = 0;
        Gp(i, r - 8, BigInt(this.length * 8), n),
        this.process(i, 0);
        let a = dr(e)
          , c = this.outputLen;
        if (c % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
        let h = c / 4
          , p = this.get();
        if (h > p.length)
            throw new Error("_sha2: outputLen bigger than state");
        for (let u = 0; u < h; u++)
            a.setUint32(4 * u, p[u], n)
    }
    digest() {
        let {buffer: e, outputLen: t} = this;
        this.digestInto(e);
        let i = e.slice(0, t);
        return this.destroy(),
        i
    }
    _cloneInto(e) {
        e || (e = new this.constructor),
        e.set(...this.get());
        let {blockLen: t, buffer: i, length: r, finished: n, destroyed: o, pos: a} = this;
        return e.length = r,
        e.pos = a,
        e.finished = n,
        e.destroyed = o,
        r % t && e.buffer.set(i),
        e
    }
}
  , Jp = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298])
  , At = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225])
  , Ct = new Uint32Array(64)
  , Ar = class extends Tr {
    constructor() {
        super(64, 32, 8, !1),
        this.A = At[0] | 0,
        this.B = At[1] | 0,
        this.C = At[2] | 0,
        this.D = At[3] | 0,
        this.E = At[4] | 0,
        this.F = At[5] | 0,
        this.G = At[6] | 0,
        this.H = At[7] | 0
    }
    get() {
        let {A: e, B: t, C: i, D: r, E: n, F: o, G: a, H: c} = this;
        return [e, t, i, r, n, o, a, c]
    }
    set(e, t, i, r, n, o, a, c) {
        this.A = e | 0,
        this.B = t | 0,
        this.C = i | 0,
        this.D = r | 0,
        this.E = n | 0,
        this.F = o | 0,
        this.G = a | 0,
        this.H = c | 0
    }
    process(e, t) {
        for (let u = 0; u < 16; u++,
        t += 4)
            Ct[u] = e.getUint32(t, !1);
        for (let u = 16; u < 64; u++) {
            let d = Ct[u - 15]
              , g = Ct[u - 2]
              , f = ct(d, 7) ^ ct(d, 18) ^ d >>> 3
              , y = ct(g, 17) ^ ct(g, 19) ^ g >>> 10;
            Ct[u] = y + Ct[u - 7] + f + Ct[u - 16] | 0
        }
        let {A: i, B: r, C: n, D: o, E: a, F: c, G: h, H: p} = this;
        for (let u = 0; u < 64; u++) {
            let d = ct(a, 6) ^ ct(a, 11) ^ ct(a, 25)
              , g = p + d + Wp(a, c, h) + Jp[u] + Ct[u] | 0
              , f = (ct(i, 2) ^ ct(i, 13) ^ ct(i, 22)) + Yp(i, r, n) | 0;
            p = h,
            h = c,
            c = a,
            a = o + g | 0,
            o = n,
            n = r,
            r = i,
            i = g + f | 0
        }
        i = i + this.A | 0,
        r = r + this.B | 0,
        n = n + this.C | 0,
        o = o + this.D | 0,
        a = a + this.E | 0,
        c = c + this.F | 0,
        h = h + this.G | 0,
        p = p + this.H | 0,
        this.set(i, r, n, o, a, c, h, p)
    }
    roundClean() {
        Ct.fill(0)
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0),
        this.buffer.fill(0)
    }
}
  , ei = La( () => new Ar);
var Oi = BigInt(0)
  , Ri = BigInt(1)
  , Qp = BigInt(2);
function Wt(s) {
    return s instanceof Uint8Array || ArrayBuffer.isView(s) && s.constructor.name === "Uint8Array"
}
function ti(s) {
    if (!Wt(s))
        throw new Error("Uint8Array expected")
}
function hs(s, e) {
    if (typeof e != "boolean")
        throw new Error(s + " boolean expected, got " + e)
}
var Xp = Array.from({
    length: 256
}, (s, e) => e.toString(16).padStart(2, "0"));
function ls(s) {
    ti(s);
    let e = "";
    for (let t = 0; t < s.length; t++)
        e += Xp[s[t]];
    return e
}
function ns(s) {
    let e = s.toString(16);
    return e.length & 1 ? "0" + e : e
}
function Yr(s) {
    if (typeof s != "string")
        throw new Error("hex string expected, got " + typeof s);
    return s === "" ? Oi : BigInt("0x" + s)
}
var bt = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function pa(s) {
    if (s >= bt._0 && s <= bt._9)
        return s - bt._0;
    if (s >= bt.A && s <= bt.F)
        return s - (bt.A - 10);
    if (s >= bt.a && s <= bt.f)
        return s - (bt.a - 10)
}
function ps(s) {
    if (typeof s != "string")
        throw new Error("hex string expected, got " + typeof s);
    let e = s.length
      , t = e / 2;
    if (e % 2)
        throw new Error("hex string expected, got unpadded hex of length " + e);
    let i = new Uint8Array(t);
    for (let r = 0, n = 0; r < t; r++,
    n += 2) {
        let o = pa(s.charCodeAt(n))
          , a = pa(s.charCodeAt(n + 1));
        if (o === void 0 || a === void 0) {
            let c = s[n] + s[n + 1];
            throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + n)
        }
        i[r] = o * 16 + a
    }
    return i
}
function Kt(s) {
    return Yr(ls(s))
}
function Ks(s) {
    return ti(s),
    Yr(ls(Uint8Array.from(s).reverse()))
}
function us(s, e) {
    return ps(s.toString(16).padStart(e * 2, "0"))
}
function xi(s, e) {
    return us(s, e).reverse()
}
function Zp(s) {
    return ps(ns(s))
}
function ke(s, e, t) {
    let i;
    if (typeof e == "string")
        try {
            i = ps(e)
        } catch (n) {
            throw new Error(s + " must be hex string or Uint8Array, cause: " + n)
        }
    else if (Wt(e))
        i = Uint8Array.from(e);
    else
        throw new Error(s + " must be hex string or Uint8Array");
    let r = i.length;
    if (typeof t == "number" && r !== t)
        throw new Error(s + " of length " + t + " expected, got " + r);
    return i
}
function Gs(...s) {
    let e = 0;
    for (let i = 0; i < s.length; i++) {
        let r = s[i];
        ti(r),
        e += r.length
    }
    let t = new Uint8Array(e);
    for (let i = 0, r = 0; i < s.length; i++) {
        let n = s[i];
        t.set(n, r),
        r += n.length
    }
    return t
}
function eu(s, e) {
    if (s.length !== e.length)
        return !1;
    let t = 0;
    for (let i = 0; i < s.length; i++)
        t |= s[i] ^ e[i];
    return t === 0
}
function tu(s) {
    if (typeof s != "string")
        throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(s))
}
var mr = s => typeof s == "bigint" && Oi <= s;
function Ti(s, e, t) {
    return mr(s) && mr(e) && mr(t) && e <= s && s < t
}
function It(s, e, t, i) {
    if (!Ti(e, t, i))
        throw new Error("expected valid " + s + ": " + t + " <= n < " + i + ", got " + e)
}
function Xa(s) {
    let e;
    for (e = 0; s > Oi; s >>= Ri,
    e += 1)
        ;
    return e
}
function su(s, e) {
    return s >> BigInt(e) & Ri
}
function iu(s, e, t) {
    return s | (t ? Ri : Oi) << BigInt(e)
}
var Jr = s => (Qp << BigInt(s - 1)) - Ri
  , yr = s => new Uint8Array(s)
  , ua = s => Uint8Array.from(s);
function Za(s, e, t) {
    if (typeof s != "number" || s < 2)
        throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2)
        throw new Error("qByteLen must be a number");
    if (typeof t != "function")
        throw new Error("hmacFn must be a function");
    let i = yr(s)
      , r = yr(s)
      , n = 0
      , o = () => {
        i.fill(1),
        r.fill(0),
        n = 0
    }
      , a = (...p) => t(r, i, ...p)
      , c = (p=yr()) => {
        r = a(ua([0]), p),
        i = a(),
        p.length !== 0 && (r = a(ua([1]), p),
        i = a())
    }
      , h = () => {
        if (n++ >= 1e3)
            throw new Error("drbg: tried 1000 values");
        let p = 0
          , u = [];
        for (; p < e; ) {
            i = a();
            let d = i.slice();
            u.push(d),
            p += i.length
        }
        return Gs(...u)
    }
    ;
    return (p, u) => {
        o(),
        c(p);
        let d;
        for (; !(d = u(h())); )
            c();
        return o(),
        d
    }
}
var ru = {
    bigint: s => typeof s == "bigint",
    function: s => typeof s == "function",
    boolean: s => typeof s == "boolean",
    string: s => typeof s == "string",
    stringOrUint8Array: s => typeof s == "string" || Wt(s),
    isSafeInteger: s => Number.isSafeInteger(s),
    array: s => Array.isArray(s),
    field: (s, e) => e.Fp.isValid(s),
    hash: s => typeof s == "function" && Number.isSafeInteger(s.outputLen)
};
function gs(s, e, t={}) {
    let i = (r, n, o) => {
        let a = ru[n];
        if (typeof a != "function")
            throw new Error("invalid validator function");
        let c = s[r];
        if (!(o && c === void 0) && !a(c, s))
            throw new Error("param " + String(r) + " is invalid. Expected " + n + ", got " + c)
    }
    ;
    for (let[r,n] of Object.entries(e))
        i(r, n, !1);
    for (let[r,n] of Object.entries(t))
        i(r, n, !0);
    return s
}
var nu = () => {
    throw new Error("not implemented")
}
;
function Cr(s) {
    let e = new WeakMap;
    return (t, ...i) => {
        let r = e.get(t);
        if (r !== void 0)
            return r;
        let n = s(t, ...i);
        return e.set(t, n),
        n
    }
}
var ou = Object.freeze({
    __proto__: null,
    isBytes: Wt,
    abytes: ti,
    abool: hs,
    bytesToHex: ls,
    numberToHexUnpadded: ns,
    hexToNumber: Yr,
    hexToBytes: ps,
    bytesToNumberBE: Kt,
    bytesToNumberLE: Ks,
    numberToBytesBE: us,
    numberToBytesLE: xi,
    numberToVarBytesBE: Zp,
    ensureBytes: ke,
    concatBytes: Gs,
    equalBytes: eu,
    utf8ToBytes: tu,
    inRange: Ti,
    aInRange: It,
    bitLen: Xa,
    bitGet: su,
    bitSet: iu,
    bitMask: Jr,
    createHmacDrbg: Za,
    validateObject: gs,
    notImplemented: nu,
    memoized: Cr
})
  , fe = BigInt(0)
  , ne = BigInt(1)
  , zt = BigInt(2)
  , au = BigInt(3)
  , Nr = BigInt(4)
  , da = BigInt(5)
  , ga = BigInt(8);
function Ce(s, e) {
    let t = s % e;
    return t >= fe ? t : e + t
}
function ec(s, e, t) {
    if (e < fe)
        throw new Error("invalid exponent, negatives unsupported");
    if (t <= fe)
        throw new Error("invalid modulus");
    if (t === ne)
        return fe;
    let i = ne;
    for (; e > fe; )
        e & ne && (i = i * s % t),
        s = s * s % t,
        e >>= ne;
    return i
}
function Ze(s, e, t) {
    let i = s;
    for (; e-- > fe; )
        i *= i,
        i %= t;
    return i
}
function qr(s, e) {
    if (s === fe)
        throw new Error("invert: expected non-zero number");
    if (e <= fe)
        throw new Error("invert: expected positive modulus, got " + e);
    let t = Ce(s, e)
      , i = e
      , r = fe
      , n = ne;
    for (; t !== fe; ) {
        let o = i / t
          , a = i % t
          , c = r - n * o;
        i = t,
        t = a,
        r = n,
        n = c
    }
    if (i !== ne)
        throw new Error("invert: does not exist");
    return Ce(r, e)
}
function cu(s) {
    let e = (s - ne) / zt, t, i, r;
    for (t = s - ne,
    i = 0; t % zt === fe; t /= zt,
    i++)
        ;
    for (r = zt; r < s && ec(r, e, s) !== s - ne; r++)
        if (r > 1e3)
            throw new Error("Cannot find square root: likely non-prime P");
    if (i === 1) {
        let o = (s + ne) / Nr;
        return function(a, c) {
            let h = a.pow(c, o);
            if (!a.eql(a.sqr(h), c))
                throw new Error("Cannot find square root");
            return h
        }
    }
    let n = (t + ne) / zt;
    return function(o, a) {
        if (o.pow(a, e) === o.neg(o.ONE))
            throw new Error("Cannot find square root");
        let c = i
          , h = o.pow(o.mul(o.ONE, r), t)
          , p = o.pow(a, n)
          , u = o.pow(a, t);
        for (; !o.eql(u, o.ONE); ) {
            if (o.eql(u, o.ZERO))
                return o.ZERO;
            let d = 1;
            for (let f = o.sqr(u); d < c && !o.eql(f, o.ONE); d++)
                f = o.sqr(f);
            let g = o.pow(h, ne << BigInt(c - d - 1));
            h = o.sqr(g),
            p = o.mul(p, g),
            u = o.mul(u, h),
            c = d
        }
        return p
    }
}
function hu(s) {
    if (s % Nr === au) {
        let e = (s + ne) / Nr;
        return function(t, i) {
            let r = t.pow(i, e);
            if (!t.eql(t.sqr(r), i))
                throw new Error("Cannot find square root");
            return r
        }
    }
    if (s % ga === da) {
        let e = (s - da) / ga;
        return function(t, i) {
            let r = t.mul(i, zt)
              , n = t.pow(r, e)
              , o = t.mul(i, n)
              , a = t.mul(t.mul(o, zt), n)
              , c = t.mul(o, t.sub(a, t.ONE));
            if (!t.eql(t.sqr(c), i))
                throw new Error("Cannot find square root");
            return c
        }
    }
    return cu(s)
}
var lu = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function pu(s) {
    let e = {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "isSafeInteger",
        BITS: "isSafeInteger"
    }
      , t = lu.reduce( (i, r) => (i[r] = "function",
    i), e);
    return gs(s, t)
}
function uu(s, e, t) {
    if (t < fe)
        throw new Error("invalid exponent, negatives unsupported");
    if (t === fe)
        return s.ONE;
    if (t === ne)
        return e;
    let i = s.ONE
      , r = e;
    for (; t > fe; )
        t & ne && (i = s.mul(i, r)),
        r = s.sqr(r),
        t >>= ne;
    return i
}
function du(s, e) {
    let t = new Array(e.length)
      , i = e.reduce( (n, o, a) => s.is0(o) ? n : (t[a] = n,
    s.mul(n, o)), s.ONE)
      , r = s.inv(i);
    return e.reduceRight( (n, o, a) => s.is0(o) ? n : (t[a] = s.mul(n, t[a]),
    s.mul(n, o)), r),
    t
}
function tc(s, e) {
    let t = e !== void 0 ? e : s.toString(2).length
      , i = Math.ceil(t / 8);
    return {
        nBitLength: t,
        nByteLength: i
    }
}
function sc(s, e, t=!1, i={}) {
    if (s <= fe)
        throw new Error("invalid field: expected ORDER > 0, got " + s);
    let {nBitLength: r, nByteLength: n} = tc(s, e);
    if (n > 2048)
        throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let o, a = Object.freeze({
        ORDER: s,
        isLE: t,
        BITS: r,
        BYTES: n,
        MASK: Jr(r),
        ZERO: fe,
        ONE: ne,
        create: c => Ce(c, s),
        isValid: c => {
            if (typeof c != "bigint")
                throw new Error("invalid field element: expected bigint, got " + typeof c);
            return fe <= c && c < s
        }
        ,
        is0: c => c === fe,
        isOdd: c => (c & ne) === ne,
        neg: c => Ce(-c, s),
        eql: (c, h) => c === h,
        sqr: c => Ce(c * c, s),
        add: (c, h) => Ce(c + h, s),
        sub: (c, h) => Ce(c - h, s),
        mul: (c, h) => Ce(c * h, s),
        pow: (c, h) => uu(a, c, h),
        div: (c, h) => Ce(c * qr(h, s), s),
        sqrN: c => c * c,
        addN: (c, h) => c + h,
        subN: (c, h) => c - h,
        mulN: (c, h) => c * h,
        inv: c => qr(c, s),
        sqrt: i.sqrt || (c => (o || (o = hu(s)),
        o(a, c))),
        invertBatch: c => du(a, c),
        cmov: (c, h, p) => p ? h : c,
        toBytes: c => t ? xi(c, n) : us(c, n),
        fromBytes: c => {
            if (c.length !== n)
                throw new Error("Field.fromBytes: expected " + n + " bytes, got " + c.length);
            return t ? Ks(c) : Kt(c)
        }
    });
    return Object.freeze(a)
}
function ic(s) {
    if (typeof s != "bigint")
        throw new Error("field order must be bigint");
    let e = s.toString(2).length;
    return Math.ceil(e / 8)
}
function rc(s) {
    let e = ic(s);
    return e + Math.ceil(e / 2)
}
function gu(s, e, t=!1) {
    let i = s.length
      , r = ic(e)
      , n = rc(e);
    if (i < 16 || i < n || i > 1024)
        throw new Error("expected " + n + "-1024 bytes of input, got " + i);
    let o = t ? Ks(s) : Kt(s)
      , a = Ce(o, e - ne) + ne;
    return t ? xi(a, r) : us(a, r)
}
var fa = BigInt(0)
  , wi = BigInt(1);
function wr(s, e) {
    let t = e.negate();
    return s ? t : e
}
function nc(s, e) {
    if (!Number.isSafeInteger(s) || s <= 0 || s > e)
        throw new Error("invalid window size, expected [1.." + e + "], got W=" + s)
}
function br(s, e) {
    nc(s, e);
    let t = Math.ceil(e / s) + 1
      , i = 2 ** (s - 1);
    return {
        windows: t,
        windowSize: i
    }
}
function fu(s, e) {
    if (!Array.isArray(s))
        throw new Error("array expected");
    s.forEach( (t, i) => {
        if (!(t instanceof e))
            throw new Error("invalid point at index " + i)
    }
    )
}
function mu(s, e) {
    if (!Array.isArray(s))
        throw new Error("array of scalars expected");
    s.forEach( (t, i) => {
        if (!e.isValid(t))
            throw new Error("invalid scalar at index " + i)
    }
    )
}
var vr = new WeakMap
  , oc = new WeakMap;
function Er(s) {
    return oc.get(s) || 1
}
function yu(s, e) {
    return {
        constTimeNegate: wr,
        hasPrecomputes(t) {
            return Er(t) !== 1
        },
        unsafeLadder(t, i, r=s.ZERO) {
            let n = t;
            for (; i > fa; )
                i & wi && (r = r.add(n)),
                n = n.double(),
                i >>= wi;
            return r
        },
        precomputeWindow(t, i) {
            let {windows: r, windowSize: n} = br(i, e)
              , o = []
              , a = t
              , c = a;
            for (let h = 0; h < r; h++) {
                c = a,
                o.push(c);
                for (let p = 1; p < n; p++)
                    c = c.add(a),
                    o.push(c);
                a = c.double()
            }
            return o
        },
        wNAF(t, i, r) {
            let {windows: n, windowSize: o} = br(t, e)
              , a = s.ZERO
              , c = s.BASE
              , h = BigInt(2 ** t - 1)
              , p = 2 ** t
              , u = BigInt(t);
            for (let d = 0; d < n; d++) {
                let g = d * o
                  , f = Number(r & h);
                r >>= u,
                f > o && (f -= p,
                r += wi);
                let y = g
                  , m = g + Math.abs(f) - 1
                  , b = d % 2 !== 0
                  , w = f < 0;
                f === 0 ? c = c.add(wr(b, i[y])) : a = a.add(wr(w, i[m]))
            }
            return {
                p: a,
                f: c
            }
        },
        wNAFUnsafe(t, i, r, n=s.ZERO) {
            let {windows: o, windowSize: a} = br(t, e)
              , c = BigInt(2 ** t - 1)
              , h = 2 ** t
              , p = BigInt(t);
            for (let u = 0; u < o; u++) {
                let d = u * a;
                if (r === fa)
                    break;
                let g = Number(r & c);
                if (r >>= p,
                g > a && (g -= h,
                r += wi),
                g === 0)
                    continue;
                let f = i[d + Math.abs(g) - 1];
                g < 0 && (f = f.negate()),
                n = n.add(f)
            }
            return n
        },
        getPrecomputes(t, i, r) {
            let n = vr.get(i);
            return n || (n = this.precomputeWindow(i, t),
            t !== 1 && vr.set(i, r(n))),
            n
        },
        wNAFCached(t, i, r) {
            let n = Er(t);
            return this.wNAF(n, this.getPrecomputes(n, t, r), i)
        },
        wNAFCachedUnsafe(t, i, r, n) {
            let o = Er(t);
            return o === 1 ? this.unsafeLadder(t, i, n) : this.wNAFUnsafe(o, this.getPrecomputes(o, t, r), i, n)
        },
        setWindowSize(t, i) {
            nc(i, e),
            oc.set(t, i),
            vr.delete(t)
        }
    }
}
function wu(s, e, t, i) {
    if (fu(t, s),
    mu(i, e),
    t.length !== i.length)
        throw new Error("arrays of points and scalars must have equal length");
    let r = s.ZERO
      , n = Xa(BigInt(t.length))
      , o = n > 12 ? n - 3 : n > 4 ? n - 2 : n ? 2 : 1
      , a = (1 << o) - 1
      , c = new Array(a + 1).fill(r)
      , h = Math.floor((e.BITS - 1) / o) * o
      , p = r;
    for (let u = h; u >= 0; u -= o) {
        c.fill(r);
        for (let g = 0; g < i.length; g++) {
            let f = i[g]
              , y = Number(f >> BigInt(u) & BigInt(a));
            c[y] = c[y].add(t[g])
        }
        let d = r;
        for (let g = c.length - 1, f = r; g > 0; g--)
            f = f.add(c[g]),
            d = d.add(f);
        if (p = p.add(d),
        u !== 0)
            for (let g = 0; g < o; g++)
                p = p.double()
    }
    return p
}
function ac(s) {
    return pu(s.Fp),
    gs(s, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
    }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
    }),
    Object.freeze(gi(X(X({}, tc(s.n, s.nBitLength)), s), {
        p: s.Fp.ORDER
    }))
}
BigInt(0),
BigInt(1),
BigInt(2),
BigInt(8);
var rs = BigInt(0)
  , Ir = BigInt(1);
function bu(s) {
    return gs(s, {
        a: "bigint"
    }, {
        montgomeryBits: "isSafeInteger",
        nByteLength: "isSafeInteger",
        adjustScalarBytes: "function",
        domain: "function",
        powPminus2: "function",
        Gu: "bigint"
    }),
    Object.freeze(X({}, s))
}
function vu(s) {
    let e = bu(s)
      , {P: t} = e
      , i = w => Ce(w, t)
      , r = e.montgomeryBits
      , n = Math.ceil(r / 8)
      , o = e.nByteLength
      , a = e.adjustScalarBytes || (w => w)
      , c = e.powPminus2 || (w => ec(w, t - BigInt(2), t));
    function h(w, v, P) {
        let A = i(w * (v - P));
        return v = i(v - A),
        P = i(P + A),
        [v, P]
    }
    let p = (e.a - BigInt(2)) / BigInt(4);
    function u(w, v) {
        It("u", w, rs, t),
        It("scalar", v, rs, t);
        let P = v, A = w, S = Ir, R = rs, N = w, E = Ir, j = rs, D;
        for (let $ = BigInt(r - 1); $ >= rs; $--) {
            let _ = P >> $ & Ir;
            j ^= _,
            D = h(j, S, N),
            S = D[0],
            N = D[1],
            D = h(j, R, E),
            R = D[0],
            E = D[1],
            j = _;
            let T = S + R
              , x = i(T * T)
              , q = S - R
              , F = i(q * q)
              , O = x - F
              , L = N + E
              , M = N - E
              , B = i(M * T)
              , te = i(L * q)
              , Q = B + te
              , ae = B - te;
            N = i(Q * Q),
            E = i(A * i(ae * ae)),
            S = i(x * F),
            R = i(O * (x + i(p * O)))
        }
        D = h(j, S, N),
        S = D[0],
        N = D[1],
        D = h(j, R, E),
        R = D[0],
        E = D[1];
        let U = c(R);
        return i(S * U)
    }
    function d(w) {
        return xi(i(w), n)
    }
    function g(w) {
        let v = ke("u coordinate", w, n);
        return o === 32 && (v[31] &= 127),
        Ks(v)
    }
    function f(w) {
        let v = ke("scalar", w)
          , P = v.length;
        if (P !== n && P !== o) {
            let A = "" + n + " or " + o;
            throw new Error("invalid scalar, expected " + A + " bytes, got " + P)
        }
        return Ks(a(v))
    }
    function y(w, v) {
        let P = g(v)
          , A = f(w)
          , S = u(P, A);
        if (S === rs)
            throw new Error("invalid private or public key received");
        return d(S)
    }
    let m = d(e.Gu);
    function b(w) {
        return y(w, m)
    }
    return {
        scalarMult: y,
        scalarMultBase: b,
        getSharedSecret: (w, v) => y(w, v),
        getPublicKey: w => b(w),
        utils: {
            randomPrivateKey: () => e.randomBytes(e.nByteLength)
        },
        GuBytes: m
    }
}
var Dr = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
BigInt(0);
var Eu = BigInt(1)
  , ma = BigInt(2)
  , Iu = BigInt(3)
  , _u = BigInt(5);
BigInt(8);
function Pu(s) {
    let e = BigInt(10)
      , t = BigInt(20)
      , i = BigInt(40)
      , r = BigInt(80)
      , n = Dr
      , o = s * s % n * s % n
      , a = Ze(o, ma, n) * o % n
      , c = Ze(a, Eu, n) * s % n
      , h = Ze(c, _u, n) * c % n
      , p = Ze(h, e, n) * h % n
      , u = Ze(p, t, n) * p % n
      , d = Ze(u, i, n) * u % n
      , g = Ze(d, r, n) * d % n
      , f = Ze(g, r, n) * d % n
      , y = Ze(f, e, n) * h % n;
    return {
        pow_p_5_8: Ze(y, ma, n) * s % n,
        b2: o
    }
}
function Su(s) {
    return s[0] &= 248,
    s[31] &= 127,
    s[31] |= 64,
    s
}
var Fr = vu({
    P: Dr,
    a: BigInt(486662),
    montgomeryBits: 255,
    nByteLength: 32,
    Gu: BigInt(9),
    powPminus2: s => {
        let e = Dr
          , {pow_p_5_8: t, b2: i} = Pu(s);
        return Ce(Ze(t, Iu, e) * i, e)
    }
    ,
    adjustScalarBytes: Su,
    randomBytes: ds
});
function ya(s) {
    s.lowS !== void 0 && hs("lowS", s.lowS),
    s.prehash !== void 0 && hs("prehash", s.prehash)
}
function Ou(s) {
    let e = ac(s);
    gs(e, {
        a: "field",
        b: "field"
    }, {
        allowedPrivateKeyLengths: "array",
        wrapPrivateKey: "boolean",
        isTorsionFree: "function",
        clearCofactor: "function",
        allowInfinityPoint: "boolean",
        fromBytes: "function",
        toBytes: "function"
    });
    let {endo: t, Fp: i, a: r} = e;
    if (t) {
        if (!i.eql(r, i.ZERO))
            throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");
        if (typeof t != "object" || typeof t.beta != "bigint" || typeof t.splitScalar != "function")
            throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function")
    }
    return Object.freeze(X({}, e))
}
var {bytesToNumberBE: Ru, hexToBytes: xu} = ou
  , Ur = class extends Error {
    constructor(e="") {
        super(e)
    }
}
  , vt = {
    Err: Ur,
    _tlv: {
        encode: (s, e) => {
            let {Err: t} = vt;
            if (s < 0 || s > 256)
                throw new t("tlv.encode: wrong tag");
            if (e.length & 1)
                throw new t("tlv.encode: unpadded data");
            let i = e.length / 2
              , r = ns(i);
            if (r.length / 2 & 128)
                throw new t("tlv.encode: long form length too big");
            let n = i > 127 ? ns(r.length / 2 | 128) : "";
            return ns(s) + n + r + e
        }
        ,
        decode(s, e) {
            let {Err: t} = vt
              , i = 0;
            if (s < 0 || s > 256)
                throw new t("tlv.encode: wrong tag");
            if (e.length < 2 || e[i++] !== s)
                throw new t("tlv.decode: wrong tlv");
            let r = e[i++]
              , n = !!(r & 128)
              , o = 0;
            if (!n)
                o = r;
            else {
                let c = r & 127;
                if (!c)
                    throw new t("tlv.decode(long): indefinite length not supported");
                if (c > 4)
                    throw new t("tlv.decode(long): byte length is too big");
                let h = e.subarray(i, i + c);
                if (h.length !== c)
                    throw new t("tlv.decode: length bytes not complete");
                if (h[0] === 0)
                    throw new t("tlv.decode(long): zero leftmost byte");
                for (let p of h)
                    o = o << 8 | p;
                if (i += c,
                o < 128)
                    throw new t("tlv.decode(long): not minimal encoding")
            }
            let a = e.subarray(i, i + o);
            if (a.length !== o)
                throw new t("tlv.decode: wrong value length");
            return {
                v: a,
                l: e.subarray(i + o)
            }
        }
    },
    _int: {
        encode(s) {
            let {Err: e} = vt;
            if (s < Et)
                throw new e("integer: negative integers are not allowed");
            let t = ns(s);
            if (Number.parseInt(t[0], 16) & 8 && (t = "00" + t),
            t.length & 1)
                throw new e("unexpected DER parsing assertion: unpadded hex");
            return t
        },
        decode(s) {
            let {Err: e} = vt;
            if (s[0] & 128)
                throw new e("invalid signature integer: negative");
            if (s[0] === 0 && !(s[1] & 128))
                throw new e("invalid signature integer: unnecessary leading zero");
            return Ru(s)
        }
    },
    toSig(s) {
        let {Err: e, _int: t, _tlv: i} = vt
          , r = typeof s == "string" ? xu(s) : s;
        ti(r);
        let {v: n, l: o} = i.decode(48, r);
        if (o.length)
            throw new e("invalid signature: left bytes after parsing");
        let {v: a, l: c} = i.decode(2, n)
          , {v: h, l: p} = i.decode(2, c);
        if (p.length)
            throw new e("invalid signature: left bytes after parsing");
        return {
            r: t.decode(a),
            s: t.decode(h)
        }
    },
    hexFromSig(s) {
        let {_tlv: e, _int: t} = vt
          , i = e.encode(2, t.encode(s.r))
          , r = e.encode(2, t.encode(s.s))
          , n = i + r;
        return e.encode(48, n)
    }
}
  , Et = BigInt(0)
  , ge = BigInt(1);
BigInt(2);
var wa = BigInt(3);
BigInt(4);
function Tu(s) {
    let e = Ou(s)
      , {Fp: t} = e
      , i = sc(e.n, e.nBitLength)
      , r = e.toBytes || ( (y, m, b) => {
        let w = m.toAffine();
        return Gs(Uint8Array.from([4]), t.toBytes(w.x), t.toBytes(w.y))
    }
    )
      , n = e.fromBytes || (y => {
        let m = y.subarray(1)
          , b = t.fromBytes(m.subarray(0, t.BYTES))
          , w = t.fromBytes(m.subarray(t.BYTES, 2 * t.BYTES));
        return {
            x: b,
            y: w
        }
    }
    );
    function o(y) {
        let {a: m, b} = e
          , w = t.sqr(y)
          , v = t.mul(w, y);
        return t.add(t.add(v, t.mul(y, m)), b)
    }
    if (!t.eql(t.sqr(e.Gy), o(e.Gx)))
        throw new Error("bad generator point: equation left != right");
    function a(y) {
        return Ti(y, ge, e.n)
    }
    function c(y) {
        let {allowedPrivateKeyLengths: m, nByteLength: b, wrapPrivateKey: w, n: v} = e;
        if (m && typeof y != "bigint") {
            if (Wt(y) && (y = ls(y)),
            typeof y != "string" || !m.includes(y.length))
                throw new Error("invalid private key");
            y = y.padStart(b * 2, "0")
        }
        let P;
        try {
            P = typeof y == "bigint" ? y : Kt(ke("private key", y, b))
        } catch {
            throw new Error("invalid private key, expected hex or " + b + " bytes, got " + typeof y)
        }
        return w && (P = Ce(P, v)),
        It("private key", P, ge, v),
        P
    }
    function h(y) {
        if (!(y instanceof d))
            throw new Error("ProjectivePoint expected")
    }
    let p = Cr( (y, m) => {
        let {px: b, py: w, pz: v} = y;
        if (t.eql(v, t.ONE))
            return {
                x: b,
                y: w
            };
        let P = y.is0();
        m == null && (m = P ? t.ONE : t.inv(v));
        let A = t.mul(b, m)
          , S = t.mul(w, m)
          , R = t.mul(v, m);
        if (P)
            return {
                x: t.ZERO,
                y: t.ZERO
            };
        if (!t.eql(R, t.ONE))
            throw new Error("invZ was invalid");
        return {
            x: A,
            y: S
        }
    }
    )
      , u = Cr(y => {
        if (y.is0()) {
            if (e.allowInfinityPoint && !t.is0(y.py))
                return;
            throw new Error("bad point: ZERO")
        }
        let {x: m, y: b} = y.toAffine();
        if (!t.isValid(m) || !t.isValid(b))
            throw new Error("bad point: x or y not FE");
        let w = t.sqr(b)
          , v = o(m);
        if (!t.eql(w, v))
            throw new Error("bad point: equation left != right");
        if (!y.isTorsionFree())
            throw new Error("bad point: not in prime-order subgroup");
        return !0
    }
    );
    class d {
        constructor(m, b, w) {
            if (this.px = m,
            this.py = b,
            this.pz = w,
            m == null || !t.isValid(m))
                throw new Error("x required");
            if (b == null || !t.isValid(b))
                throw new Error("y required");
            if (w == null || !t.isValid(w))
                throw new Error("z required");
            Object.freeze(this)
        }
        static fromAffine(m) {
            let {x: b, y: w} = m || {};
            if (!m || !t.isValid(b) || !t.isValid(w))
                throw new Error("invalid affine point");
            if (m instanceof d)
                throw new Error("projective point not allowed");
            let v = P => t.eql(P, t.ZERO);
            return v(b) && v(w) ? d.ZERO : new d(b,w,t.ONE)
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static normalizeZ(m) {
            let b = t.invertBatch(m.map(w => w.pz));
            return m.map( (w, v) => w.toAffine(b[v])).map(d.fromAffine)
        }
        static fromHex(m) {
            let b = d.fromAffine(n(ke("pointHex", m)));
            return b.assertValidity(),
            b
        }
        static fromPrivateKey(m) {
            return d.BASE.multiply(c(m))
        }
        static msm(m, b) {
            return wu(d, i, m, b)
        }
        _setWindowSize(m) {
            f.setWindowSize(this, m)
        }
        assertValidity() {
            u(this)
        }
        hasEvenY() {
            let {y: m} = this.toAffine();
            if (t.isOdd)
                return !t.isOdd(m);
            throw new Error("Field doesn't support isOdd")
        }
        equals(m) {
            h(m);
            let {px: b, py: w, pz: v} = this
              , {px: P, py: A, pz: S} = m
              , R = t.eql(t.mul(b, S), t.mul(P, v))
              , N = t.eql(t.mul(w, S), t.mul(A, v));
            return R && N
        }
        negate() {
            return new d(this.px,t.neg(this.py),this.pz)
        }
        double() {
            let {a: m, b} = e
              , w = t.mul(b, wa)
              , {px: v, py: P, pz: A} = this
              , S = t.ZERO
              , R = t.ZERO
              , N = t.ZERO
              , E = t.mul(v, v)
              , j = t.mul(P, P)
              , D = t.mul(A, A)
              , U = t.mul(v, P);
            return U = t.add(U, U),
            N = t.mul(v, A),
            N = t.add(N, N),
            S = t.mul(m, N),
            R = t.mul(w, D),
            R = t.add(S, R),
            S = t.sub(j, R),
            R = t.add(j, R),
            R = t.mul(S, R),
            S = t.mul(U, S),
            N = t.mul(w, N),
            D = t.mul(m, D),
            U = t.sub(E, D),
            U = t.mul(m, U),
            U = t.add(U, N),
            N = t.add(E, E),
            E = t.add(N, E),
            E = t.add(E, D),
            E = t.mul(E, U),
            R = t.add(R, E),
            D = t.mul(P, A),
            D = t.add(D, D),
            E = t.mul(D, U),
            S = t.sub(S, E),
            N = t.mul(D, j),
            N = t.add(N, N),
            N = t.add(N, N),
            new d(S,R,N)
        }
        add(m) {
            h(m);
            let {px: b, py: w, pz: v} = this
              , {px: P, py: A, pz: S} = m
              , R = t.ZERO
              , N = t.ZERO
              , E = t.ZERO
              , j = e.a
              , D = t.mul(e.b, wa)
              , U = t.mul(b, P)
              , $ = t.mul(w, A)
              , _ = t.mul(v, S)
              , T = t.add(b, w)
              , x = t.add(P, A);
            T = t.mul(T, x),
            x = t.add(U, $),
            T = t.sub(T, x),
            x = t.add(b, v);
            let q = t.add(P, S);
            return x = t.mul(x, q),
            q = t.add(U, _),
            x = t.sub(x, q),
            q = t.add(w, v),
            R = t.add(A, S),
            q = t.mul(q, R),
            R = t.add($, _),
            q = t.sub(q, R),
            E = t.mul(j, x),
            R = t.mul(D, _),
            E = t.add(R, E),
            R = t.sub($, E),
            E = t.add($, E),
            N = t.mul(R, E),
            $ = t.add(U, U),
            $ = t.add($, U),
            _ = t.mul(j, _),
            x = t.mul(D, x),
            $ = t.add($, _),
            _ = t.sub(U, _),
            _ = t.mul(j, _),
            x = t.add(x, _),
            U = t.mul($, x),
            N = t.add(N, U),
            U = t.mul(q, x),
            R = t.mul(T, R),
            R = t.sub(R, U),
            U = t.mul(T, $),
            E = t.mul(q, E),
            E = t.add(E, U),
            new d(R,N,E)
        }
        subtract(m) {
            return this.add(m.negate())
        }
        is0() {
            return this.equals(d.ZERO)
        }
        wNAF(m) {
            return f.wNAFCached(this, m, d.normalizeZ)
        }
        multiplyUnsafe(m) {
            let {endo: b, n: w} = e;
            It("scalar", m, Et, w);
            let v = d.ZERO;
            if (m === Et)
                return v;
            if (this.is0() || m === ge)
                return this;
            if (!b || f.hasPrecomputes(this))
                return f.wNAFCachedUnsafe(this, m, d.normalizeZ);
            let {k1neg: P, k1: A, k2neg: S, k2: R} = b.splitScalar(m)
              , N = v
              , E = v
              , j = this;
            for (; A > Et || R > Et; )
                A & ge && (N = N.add(j)),
                R & ge && (E = E.add(j)),
                j = j.double(),
                A >>= ge,
                R >>= ge;
            return P && (N = N.negate()),
            S && (E = E.negate()),
            E = new d(t.mul(E.px, b.beta),E.py,E.pz),
            N.add(E)
        }
        multiply(m) {
            let {endo: b, n: w} = e;
            It("scalar", m, ge, w);
            let v, P;
            if (b) {
                let {k1neg: A, k1: S, k2neg: R, k2: N} = b.splitScalar(m)
                  , {p: E, f: j} = this.wNAF(S)
                  , {p: D, f: U} = this.wNAF(N);
                E = f.constTimeNegate(A, E),
                D = f.constTimeNegate(R, D),
                D = new d(t.mul(D.px, b.beta),D.py,D.pz),
                v = E.add(D),
                P = j.add(U)
            } else {
                let {p: A, f: S} = this.wNAF(m);
                v = A,
                P = S
            }
            return d.normalizeZ([v, P])[0]
        }
        multiplyAndAddUnsafe(m, b, w) {
            let v = d.BASE
              , P = (S, R) => R === Et || R === ge || !S.equals(v) ? S.multiplyUnsafe(R) : S.multiply(R)
              , A = P(this, b).add(P(m, w));
            return A.is0() ? void 0 : A
        }
        toAffine(m) {
            return p(this, m)
        }
        isTorsionFree() {
            let {h: m, isTorsionFree: b} = e;
            if (m === ge)
                return !0;
            if (b)
                return b(d, this);
            throw new Error("isTorsionFree() has not been declared for the elliptic curve")
        }
        clearCofactor() {
            let {h: m, clearCofactor: b} = e;
            return m === ge ? this : b ? b(d, this) : this.multiplyUnsafe(e.h)
        }
        toRawBytes(m=!0) {
            return hs("isCompressed", m),
            this.assertValidity(),
            r(d, this, m)
        }
        toHex(m=!0) {
            return hs("isCompressed", m),
            ls(this.toRawBytes(m))
        }
    }
    d.BASE = new d(e.Gx,e.Gy,t.ONE),
    d.ZERO = new d(t.ZERO,t.ONE,t.ZERO);
    let g = e.nBitLength
      , f = yu(d, e.endo ? Math.ceil(g / 2) : g);
    return {
        CURVE: e,
        ProjectivePoint: d,
        normPrivateKeyToScalar: c,
        weierstrassEquation: o,
        isWithinCurveOrder: a
    }
}
function Au(s) {
    let e = ac(s);
    return gs(e, {
        hash: "hash",
        hmac: "function",
        randomBytes: "function"
    }, {
        bits2int: "function",
        bits2int_modN: "function",
        lowS: "boolean"
    }),
    Object.freeze(X({
        lowS: !0
    }, e))
}
function Cu(s) {
    let e = Au(s)
      , {Fp: t, n: i} = e
      , r = t.BYTES + 1
      , n = 2 * t.BYTES + 1;
    function o(_) {
        return Ce(_, i)
    }
    function a(_) {
        return qr(_, i)
    }
    let {ProjectivePoint: c, normPrivateKeyToScalar: h, weierstrassEquation: p, isWithinCurveOrder: u} = Tu(gi(X({}, e), {
        toBytes(_, T, x) {
            let q = T.toAffine()
              , F = t.toBytes(q.x)
              , O = Gs;
            return hs("isCompressed", x),
            x ? O(Uint8Array.from([T.hasEvenY() ? 2 : 3]), F) : O(Uint8Array.from([4]), F, t.toBytes(q.y))
        },
        fromBytes(_) {
            let T = _.length
              , x = _[0]
              , q = _.subarray(1);
            if (T === r && (x === 2 || x === 3)) {
                let F = Kt(q);
                if (!Ti(F, ge, t.ORDER))
                    throw new Error("Point is not on curve");
                let O = p(F), L;
                try {
                    L = t.sqrt(O)
                } catch (B) {
                    let te = B instanceof Error ? ": " + B.message : "";
                    throw new Error("Point is not on curve" + te)
                }
                let M = (L & ge) === ge;
                return (x & 1) === 1 !== M && (L = t.neg(L)),
                {
                    x: F,
                    y: L
                }
            } else if (T === n && x === 4) {
                let F = t.fromBytes(q.subarray(0, t.BYTES))
                  , O = t.fromBytes(q.subarray(t.BYTES, 2 * t.BYTES));
                return {
                    x: F,
                    y: O
                }
            } else {
                let F = r
                  , O = n;
                throw new Error("invalid Point, expected length of " + F + ", or uncompressed " + O + ", got " + T)
            }
        }
    }))
      , d = _ => ls(us(_, e.nByteLength));
    function g(_) {
        let T = i >> ge;
        return _ > T
    }
    function f(_) {
        return g(_) ? o(-_) : _
    }
    let y = (_, T, x) => Kt(_.slice(T, x));
    class m {
        constructor(T, x, q) {
            this.r = T,
            this.s = x,
            this.recovery = q,
            this.assertValidity()
        }
        static fromCompact(T) {
            let x = e.nByteLength;
            return T = ke("compactSignature", T, x * 2),
            new m(y(T, 0, x),y(T, x, 2 * x))
        }
        static fromDER(T) {
            let {r: x, s: q} = vt.toSig(ke("DER", T));
            return new m(x,q)
        }
        assertValidity() {
            It("r", this.r, ge, i),
            It("s", this.s, ge, i)
        }
        addRecoveryBit(T) {
            return new m(this.r,this.s,T)
        }
        recoverPublicKey(T) {
            let {r: x, s: q, recovery: F} = this
              , O = S(ke("msgHash", T));
            if (F == null || ![0, 1, 2, 3].includes(F))
                throw new Error("recovery id invalid");
            let L = F === 2 || F === 3 ? x + e.n : x;
            if (L >= t.ORDER)
                throw new Error("recovery id 2 or 3 invalid");
            let M = F & 1 ? "03" : "02"
              , B = c.fromHex(M + d(L))
              , te = a(L)
              , Q = o(-O * te)
              , ae = o(q * te)
              , de = c.BASE.multiplyAndAddUnsafe(B, Q, ae);
            if (!de)
                throw new Error("point at infinify");
            return de.assertValidity(),
            de
        }
        hasHighS() {
            return g(this.s)
        }
        normalizeS() {
            return this.hasHighS() ? new m(this.r,o(-this.s),this.recovery) : this
        }
        toDERRawBytes() {
            return ps(this.toDERHex())
        }
        toDERHex() {
            return vt.hexFromSig({
                r: this.r,
                s: this.s
            })
        }
        toCompactRawBytes() {
            return ps(this.toCompactHex())
        }
        toCompactHex() {
            return d(this.r) + d(this.s)
        }
    }
    let b = {
        isValidPrivateKey(_) {
            try {
                return h(_),
                !0
            } catch {
                return !1
            }
        },
        normPrivateKeyToScalar: h,
        randomPrivateKey: () => {
            let _ = rc(e.n);
            return gu(e.randomBytes(_), e.n)
        }
        ,
        precompute(_=8, T=c.BASE) {
            return T._setWindowSize(_),
            T.multiply(BigInt(3)),
            T
        }
    };
    function w(_, T=!0) {
        return c.fromPrivateKey(_).toRawBytes(T)
    }
    function v(_) {
        let T = Wt(_)
          , x = typeof _ == "string"
          , q = (T || x) && _.length;
        return T ? q === r || q === n : x ? q === 2 * r || q === 2 * n : _ instanceof c
    }
    function P(_, T, x=!0) {
        if (v(_))
            throw new Error("first arg must be private key");
        if (!v(T))
            throw new Error("second arg must be public key");
        return c.fromHex(T).multiply(h(_)).toRawBytes(x)
    }
    let A = e.bits2int || function(_) {
        if (_.length > 8192)
            throw new Error("input is too large");
        let T = Kt(_)
          , x = _.length * 8 - e.nBitLength;
        return x > 0 ? T >> BigInt(x) : T
    }
      , S = e.bits2int_modN || function(_) {
        return o(A(_))
    }
      , R = Jr(e.nBitLength);
    function N(_) {
        return It("num < 2^" + e.nBitLength, _, Et, R),
        us(_, e.nByteLength)
    }
    function E(_, T, x=j) {
        if (["recovered", "canonical"].some(he => he in x))
            throw new Error("sign() legacy options not supported");
        let {hash: q, randomBytes: F} = e
          , {lowS: O, prehash: L, extraEntropy: M} = x;
        O == null && (O = !0),
        _ = ke("msgHash", _),
        ya(x),
        L && (_ = ke("prehashed msgHash", q(_)));
        let B = S(_)
          , te = h(T)
          , Q = [N(te), N(B)];
        if (M != null && M !== !1) {
            let he = M === !0 ? F(t.BYTES) : M;
            Q.push(ke("extraEntropy", he))
        }
        let ae = Gs(...Q)
          , de = B;
        function _e(he) {
            let le = A(he);
            if (!u(le))
                return;
            let Lt = a(le)
              , mt = c.BASE.multiply(le).toAffine()
              , ot = o(mt.x);
            if (ot === Et)
                return;
            let yt = o(Lt * o(de + ot * te));
            if (yt === Et)
                return;
            let es = (mt.x === ot ? 0 : 2) | Number(mt.y & ge)
              , di = yt;
            return O && g(yt) && (di = f(yt),
            es ^= 1),
            new m(ot,di,es)
        }
        return {
            seed: ae,
            k2sig: _e
        }
    }
    let j = {
        lowS: e.lowS,
        prehash: !1
    }
      , D = {
        lowS: e.lowS,
        prehash: !1
    };
    function U(_, T, x=j) {
        let {seed: q, k2sig: F} = E(_, T, x)
          , O = e;
        return Za(O.hash.outputLen, O.nByteLength, O.hmac)(q, F)
    }
    c.BASE._setWindowSize(8);
    function $(_, T, x, q=D) {
        let F = _;
        T = ke("msgHash", T),
        x = ke("publicKey", x);
        let {lowS: O, prehash: L, format: M} = q;
        if (ya(q),
        "strict"in q)
            throw new Error("options.strict was renamed to lowS");
        if (M !== void 0 && M !== "compact" && M !== "der")
            throw new Error("format must be compact or der");
        let B = typeof F == "string" || Wt(F)
          , te = !B && !M && typeof F == "object" && F !== null && typeof F.r == "bigint" && typeof F.s == "bigint";
        if (!B && !te)
            throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
        let Q, ae;
        try {
            if (te && (Q = new m(F.r,F.s)),
            B) {
                try {
                    M !== "compact" && (Q = m.fromDER(F))
                } catch (yt) {
                    if (!(yt instanceof vt.Err))
                        throw yt
                }
                !Q && M !== "der" && (Q = m.fromCompact(F))
            }
            ae = c.fromHex(x)
        } catch {
            return !1
        }
        if (!Q || O && Q.hasHighS())
            return !1;
        L && (T = e.hash(T));
        let {r: de, s: _e} = Q
          , he = S(T)
          , le = a(_e)
          , Lt = o(he * le)
          , mt = o(de * le)
          , ot = c.BASE.multiplyAndAddUnsafe(ae, Lt, mt)?.toAffine();
        return ot ? o(ot.x) === de : !1
    }
    return {
        CURVE: e,
        getPublicKey: w,
        getSharedSecret: P,
        sign: U,
        verify: $,
        ProjectivePoint: c,
        Signature: m,
        utils: b
    }
}
function Nu(s) {
    return {
        hash: s,
        hmac: (e, ...t) => Si(s, e, zl(...t)),
        randomBytes: ds
    }
}
function qu(s, e) {
    let t = i => Cu(X(X({}, s), Nu(i)));
    return gi(X({}, t(e)), {
        create: t
    })
}
var cc = sc(BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"))
  , Du = cc.create(BigInt("-3"))
  , Fu = BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b")
  , Uu = qu({
    a: Du,
    b: Fu,
    Fp: cc,
    n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),
    Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),
    Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"),
    h: BigInt(1),
    lowS: !1
}, ei)
  , hc = "base10"
  , Se = "base16"
  , Le = "base64pad"
  , Rt = "base64url"
  , si = "utf8"
  , lc = 0
  , st = 1
  , fs = 2
  , ku = 0
  , ba = 1
  , Bs = 12
  , Qr = 32;
function pc() {
    let s = Fr.utils.randomPrivateKey()
      , e = Fr.getPublicKey(s);
    return {
        privateKey: Pe(s, Se),
        publicKey: Pe(e, Se)
    }
}
function Ai() {
    let s = ds(Qr);
    return Pe(s, Se)
}
function uc(s, e) {
    let t = Fr.getSharedSecret(Fe(s, Se), Fe(e, Se))
      , i = Kp(ei, t, void 0, void 0, Qr);
    return Pe(i, Se)
}
function ms(s) {
    let e = ei(Fe(s, Se));
    return Pe(e, Se)
}
function Ke(s) {
    let e = ei(Fe(s, si));
    return Pe(e, Se)
}
function dc(s) {
    return Fe(`${s}`, hc)
}
function qt(s) {
    return Number(Pe(s, hc))
}
function gc(s) {
    return s.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}
function fc(s) {
    let e = s.replace(/-/g, "+").replace(/_/g, "/")
      , t = (4 - e.length % 4) % 4;
    return e + "=".repeat(t)
}
function mc(s) {
    let e = dc(typeof s.type < "u" ? s.type : lc);
    if (qt(e) === st && typeof s.senderPublicKey > "u")
        throw new Error("Missing sender public key for type 1 envelope");
    let t = typeof s.senderPublicKey < "u" ? Fe(s.senderPublicKey, Se) : void 0
      , i = typeof s.iv < "u" ? Fe(s.iv, Se) : ds(Bs)
      , r = Fe(s.symKey, Se)
      , n = Qa(r, i).encrypt(Fe(s.message, si))
      , o = vc({
        type: e,
        sealed: n,
        iv: i,
        senderPublicKey: t
    });
    return s.encoding === Rt ? gc(o) : o
}
function yc(s) {
    let e = Fe(s.symKey, Se)
      , {sealed: t, iv: i} = ys({
        encoded: s.encoded,
        encoding: s.encoding
    })
      , r = Qa(e, i).decrypt(t);
    if (r === null)
        throw new Error("Failed to decrypt");
    return Pe(r, si)
}
function wc(s, e) {
    let t = dc(fs)
      , i = ds(Bs)
      , r = Fe(s, si)
      , n = vc({
        type: t,
        sealed: r,
        iv: i
    });
    return e === Rt ? gc(n) : n
}
function bc(s, e) {
    let {sealed: t} = ys({
        encoded: s,
        encoding: e
    });
    return Pe(t, si)
}
function vc(s) {
    if (qt(s.type) === fs)
        return Pe(ts([s.type, s.sealed]), Le);
    if (qt(s.type) === st) {
        if (typeof s.senderPublicKey > "u")
            throw new Error("Missing sender public key for type 1 envelope");
        return Pe(ts([s.type, s.senderPublicKey, s.iv, s.sealed]), Le)
    }
    return Pe(ts([s.type, s.iv, s.sealed]), Le)
}
function ys(s) {
    let e = (s.encoding || Le) === Rt ? fc(s.encoded) : s.encoded
      , t = Fe(e, Le)
      , i = t.slice(ku, ba)
      , r = ba;
    if (qt(i) === st) {
        let c = r + Qr
          , h = c + Bs
          , p = t.slice(r, c)
          , u = t.slice(c, h)
          , d = t.slice(h);
        return {
            type: i,
            sealed: d,
            iv: u,
            senderPublicKey: p
        }
    }
    if (qt(i) === fs) {
        let c = t.slice(r)
          , h = ds(Bs);
        return {
            type: i,
            sealed: c,
            iv: h
        }
    }
    let n = r + Bs
      , o = t.slice(r, n)
      , a = t.slice(n);
    return {
        type: i,
        sealed: a,
        iv: o
    }
}
function Ec(s, e) {
    let t = ys({
        encoded: s,
        encoding: e?.encoding
    });
    return Xr({
        type: qt(t.type),
        senderPublicKey: typeof t.senderPublicKey < "u" ? Pe(t.senderPublicKey, Se) : void 0,
        receiverPublicKey: e?.receiverPublicKey
    })
}
function Xr(s) {
    let e = s?.type || lc;
    if (e === st) {
        if (typeof s?.senderPublicKey > "u")
            throw new Error("missing sender public key");
        if (typeof s?.receiverPublicKey > "u")
            throw new Error("missing receiver public key")
    }
    return {
        type: e,
        senderPublicKey: s?.senderPublicKey,
        receiverPublicKey: s?.receiverPublicKey
    }
}
function Zr(s) {
    return s.type === st && typeof s.senderPublicKey == "string" && typeof s.receiverPublicKey == "string"
}
function en(s) {
    return s.type === fs
}
function ju(s) {
    let e = Buffer.from(s.x, "base64")
      , t = Buffer.from(s.y, "base64");
    return ts([new Uint8Array([4]), e, t])
}
function Ic(s, e) {
    let[t,i,r] = s.split(".")
      , n = Buffer.from(fc(r), "base64");
    if (n.length !== 64)
        throw new Error("Invalid signature length");
    let o = n.slice(0, 32)
      , a = n.slice(32, 64)
      , c = `${t}.${i}`
      , h = ei(c)
      , p = ju(e);
    if (!Uu.verify(ts([o, a]), h, p))
        throw new Error("Invalid signature");
    return js(s).payload
}
var Lu = "irn";
function ii(s) {
    return s?.relay || {
        protocol: Lu
    }
}
function ws(s) {
    let e = ko[s];
    if (typeof e > "u")
        throw new Error(`Relay Protocol not supported: ${s}`);
    return e
}
function $u(s, e="-") {
    let t = {}
      , i = "relay" + e;
    return Object.keys(s).forEach(r => {
        if (r.startsWith(i)) {
            let n = r.replace(i, "")
              , o = s[r];
            t[n] = o
        }
    }
    ),
    t
}
function tn(s) {
    if (!s.includes("wc:")) {
        let h = Ua(s);
        h != null && h.includes("wc:") && (s = h)
    }
    s = s.includes("wc://") ? s.replace("wc://", "") : s,
    s = s.includes("wc:") ? s.replace("wc:", "") : s;
    let e = s.indexOf(":")
      , t = s.indexOf("?") !== -1 ? s.indexOf("?") : void 0
      , i = s.substring(0, e)
      , r = s.substring(e + 1, t).split("@")
      , n = typeof t < "u" ? s.substring(t) : ""
      , o = new URLSearchParams(n)
      , a = {};
    o.forEach( (h, p) => {
        a[p] = h
    }
    );
    let c = typeof a.methods == "string" ? a.methods.split(",") : void 0;
    return {
        protocol: i,
        topic: Mu(r[0]),
        version: parseInt(r[1], 10),
        symKey: a.symKey,
        relay: $u(a),
        methods: c,
        expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0
    }
}
function Mu(s) {
    return s.startsWith("//") ? s.substring(2) : s
}
function Bu(s, e="-") {
    let t = "relay"
      , i = {};
    return Object.keys(s).forEach(r => {
        let n = r
          , o = t + e + n;
        s[n] && (i[o] = s[n])
    }
    ),
    i
}
function sn(s) {
    let e = new URLSearchParams
      , t = Bu(s.relay);
    Object.keys(t).sort().forEach(r => {
        e.set(r, t[r])
    }
    ),
    e.set("symKey", s.symKey),
    s.expiryTimestamp && e.set("expiryTimestamp", s.expiryTimestamp.toString()),
    s.methods && e.set("methods", s.methods.join(","));
    let i = e.toString();
    return `${s.protocol}:${s.topic}@${s.version}?${i}`
}
function ri(s, e, t) {
    return `${s}?wc_ev=${t}&topic=${e}`
}
var Vu = Object.defineProperty
  , zu = Object.defineProperties
  , Hu = Object.getOwnPropertyDescriptors
  , va = Object.getOwnPropertySymbols
  , Ku = Object.prototype.hasOwnProperty
  , Gu = Object.prototype.propertyIsEnumerable
  , Ea = (s, e, t) => e in s ? Vu(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Wu = (s, e) => {
    for (var t in e || (e = {}))
        Ku.call(e, t) && Ea(s, t, e[t]);
    if (va)
        for (var t of va(e))
            Gu.call(e, t) && Ea(s, t, e[t]);
    return s
}
  , Yu = (s, e) => zu(s, Hu(e));
function bs(s) {
    let e = [];
    return s.forEach(t => {
        let[i,r] = t.split(":");
        e.push(`${i}:${r}`)
    }
    ),
    e
}
function Ju(s) {
    let e = [];
    return Object.values(s).forEach(t => {
        e.push(...bs(t.accounts))
    }
    ),
    e
}
function Qu(s, e) {
    let t = [];
    return Object.values(s).forEach(i => {
        bs(i.accounts).includes(e) && t.push(...i.methods)
    }
    ),
    t
}
function Xu(s, e) {
    let t = [];
    return Object.values(s).forEach(i => {
        bs(i.accounts).includes(e) && t.push(...i.events)
    }
    ),
    t
}
function ni(s) {
    return s.includes(":")
}
function Jt(s) {
    return ni(s) ? s.split(":")[0] : s
}
function Ia(s) {
    var e, t, i;
    let r = {};
    if (!lt(s))
        return r;
    for (let[n,o] of Object.entries(s)) {
        let a = ni(n) ? [n] : o.chains
          , c = o.methods || []
          , h = o.events || []
          , p = Jt(n);
        r[p] = Yu(Wu({}, r[p]), {
            chains: et(a, (e = r[p]) == null ? void 0 : e.chains),
            methods: et(c, (t = r[p]) == null ? void 0 : t.methods),
            events: et(h, (i = r[p]) == null ? void 0 : i.events)
        })
    }
    return r
}
function Zu(s) {
    let e = {};
    return s?.forEach(t => {
        var i;
        let[r,n] = t.split(":");
        e[r] || (e[r] = {
            accounts: [],
            chains: [],
            events: [],
            methods: []
        }),
        e[r].accounts.push(t),
        (i = e[r].chains) == null || i.push(`${r}:${n}`)
    }
    ),
    e
}
function rn(s, e) {
    e = e.map(i => i.replace("did:pkh:", ""));
    let t = Zu(e);
    for (let[i,r] of Object.entries(t))
        r.methods ? r.methods = et(r.methods, s) : r.methods = s,
        r.events = ["chainChanged", "accountsChanged"];
    return t
}
function _c(s, e) {
    var t, i, r, n, o, a;
    let c = Ia(s)
      , h = Ia(e)
      , p = {}
      , u = Object.keys(c).concat(Object.keys(h));
    for (let d of u)
        p[d] = {
            chains: et((t = c[d]) == null ? void 0 : t.chains, (i = h[d]) == null ? void 0 : i.chains),
            methods: et((r = c[d]) == null ? void 0 : r.methods, (n = h[d]) == null ? void 0 : n.methods),
            events: et((o = c[d]) == null ? void 0 : o.events, (a = h[d]) == null ? void 0 : a.events)
        };
    return p
}
var ed = {
    INVALID_METHOD: {
        message: "Invalid method.",
        code: 1001
    },
    INVALID_EVENT: {
        message: "Invalid event.",
        code: 1002
    },
    INVALID_UPDATE_REQUEST: {
        message: "Invalid update request.",
        code: 1003
    },
    INVALID_EXTEND_REQUEST: {
        message: "Invalid extend request.",
        code: 1004
    },
    INVALID_SESSION_SETTLE_REQUEST: {
        message: "Invalid session settle request.",
        code: 1005
    },
    UNAUTHORIZED_METHOD: {
        message: "Unauthorized method.",
        code: 3001
    },
    UNAUTHORIZED_EVENT: {
        message: "Unauthorized event.",
        code: 3002
    },
    UNAUTHORIZED_UPDATE_REQUEST: {
        message: "Unauthorized update request.",
        code: 3003
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
        message: "Unauthorized extend request.",
        code: 3004
    },
    USER_REJECTED: {
        message: "User rejected.",
        code: 5e3
    },
    USER_REJECTED_CHAINS: {
        message: "User rejected chains.",
        code: 5001
    },
    USER_REJECTED_METHODS: {
        message: "User rejected methods.",
        code: 5002
    },
    USER_REJECTED_EVENTS: {
        message: "User rejected events.",
        code: 5003
    },
    UNSUPPORTED_CHAINS: {
        message: "Unsupported chains.",
        code: 5100
    },
    UNSUPPORTED_METHODS: {
        message: "Unsupported methods.",
        code: 5101
    },
    UNSUPPORTED_EVENTS: {
        message: "Unsupported events.",
        code: 5102
    },
    UNSUPPORTED_ACCOUNTS: {
        message: "Unsupported accounts.",
        code: 5103
    },
    UNSUPPORTED_NAMESPACE_KEY: {
        message: "Unsupported namespace key.",
        code: 5104
    },
    USER_DISCONNECTED: {
        message: "User disconnected.",
        code: 6e3
    },
    SESSION_SETTLEMENT_FAILED: {
        message: "Session settlement failed.",
        code: 7e3
    },
    WC_METHOD_UNSUPPORTED: {
        message: "Unsupported wc_ method.",
        code: 10001
    }
}
  , td = {
    NOT_INITIALIZED: {
        message: "Not initialized.",
        code: 1
    },
    NO_MATCHING_KEY: {
        message: "No matching key.",
        code: 2
    },
    RESTORE_WILL_OVERRIDE: {
        message: "Restore will override.",
        code: 3
    },
    RESUBSCRIBED: {
        message: "Resubscribed.",
        code: 4
    },
    MISSING_OR_INVALID: {
        message: "Missing or invalid.",
        code: 5
    },
    EXPIRED: {
        message: "Expired.",
        code: 6
    },
    UNKNOWN_TYPE: {
        message: "Unknown type.",
        code: 7
    },
    MISMATCHED_TOPIC: {
        message: "Mismatched topic.",
        code: 8
    },
    NON_CONFORMING_NAMESPACES: {
        message: "Non conforming namespaces.",
        code: 9
    }
};
function C(s, e) {
    let {message: t, code: i} = td[s];
    return {
        message: e ? `${t} ${e}` : t,
        code: i
    }
}
function K(s, e) {
    let {message: t, code: i} = ed[s];
    return {
        message: e ? `${t} ${e}` : t,
        code: i
    }
}
function qe(s, e) {
    return Array.isArray(s) ? typeof e < "u" && s.length ? s.every(e) : !0 : !1
}
function lt(s) {
    return Object.getPrototypeOf(s) === Object.prototype && Object.keys(s).length
}
function pe(s) {
    return typeof s > "u"
}
function re(s, e) {
    return e && pe(s) ? !0 : typeof s == "string" && !!s.trim().length
}
function nn(s, e) {
    return e && pe(s) ? !0 : typeof s == "number" && !isNaN(s)
}
function Pc(s, e) {
    let {requiredNamespaces: t} = e
      , i = Object.keys(s.namespaces)
      , r = Object.keys(t)
      , n = !0;
    return Ht(r, i) ? (i.forEach(o => {
        let {accounts: a, methods: c, events: h} = s.namespaces[o]
          , p = bs(a)
          , u = t[o];
        (!Ht(Oa(o, u), p) || !Ht(u.methods, c) || !Ht(u.events, h)) && (n = !1)
    }
    ),
    n) : !1
}
function vi(s) {
    return re(s, !1) && s.includes(":") ? s.split(":").length === 2 : !1
}
function sd(s) {
    if (re(s, !1) && s.includes(":")) {
        let e = s.split(":");
        if (e.length === 3) {
            let t = e[0] + ":" + e[1];
            return !!e[2] && vi(t)
        }
    }
    return !1
}
function Sc(s) {
    function e(t) {
        try {
            return typeof new URL(t) < "u"
        } catch {
            return !1
        }
    }
    try {
        if (re(s, !1)) {
            if (e(s))
                return !0;
            let t = Ua(s);
            return e(t)
        }
    } catch {}
    return !1
}
function Oc(s) {
    var e;
    return (e = s?.proposer) == null ? void 0 : e.publicKey
}
function Rc(s) {
    return s?.topic
}
function xc(s, e) {
    let t = null;
    return re(s?.publicKey, !1) || (t = C("MISSING_OR_INVALID", `${e} controller public key should be a string`)),
    t
}
function _a(s) {
    let e = !0;
    return qe(s) ? s.length && (e = s.every(t => re(t, !1))) : e = !1,
    e
}
function id(s, e, t) {
    let i = null;
    return qe(e) && e.length ? e.forEach(r => {
        i || vi(r) || (i = K("UNSUPPORTED_CHAINS", `${t}, chain ${r} should be a string and conform to "namespace:chainId" format`))
    }
    ) : vi(s) || (i = K("UNSUPPORTED_CHAINS", `${t}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),
    i
}
function rd(s, e, t) {
    let i = null;
    return Object.entries(s).forEach( ([r,n]) => {
        if (i)
            return;
        let o = id(r, Oa(r, n), `${e} ${t}`);
        o && (i = o)
    }
    ),
    i
}
function nd(s, e) {
    let t = null;
    return qe(s) ? s.forEach(i => {
        t || sd(i) || (t = K("UNSUPPORTED_ACCOUNTS", `${e}, account ${i} should be a string and conform to "namespace:chainId:address" format`))
    }
    ) : t = K("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),
    t
}
function od(s, e) {
    let t = null;
    return Object.values(s).forEach(i => {
        if (t)
            return;
        let r = nd(i?.accounts, `${e} namespace`);
        r && (t = r)
    }
    ),
    t
}
function ad(s, e) {
    let t = null;
    return _a(s?.methods) ? _a(s?.events) || (t = K("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : t = K("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`),
    t
}
function Tc(s, e) {
    let t = null;
    return Object.values(s).forEach(i => {
        if (t)
            return;
        let r = ad(i, `${e}, namespace`);
        r && (t = r)
    }
    ),
    t
}
function Ac(s, e, t) {
    let i = null;
    if (s && lt(s)) {
        let r = Tc(s, e);
        r && (i = r);
        let n = rd(s, e, t);
        n && (i = n)
    } else
        i = C("MISSING_OR_INVALID", `${e}, ${t} should be an object with data`);
    return i
}
function Ci(s, e) {
    let t = null;
    if (s && lt(s)) {
        let i = Tc(s, e);
        i && (t = i);
        let r = od(s, e);
        r && (t = r)
    } else
        t = C("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
    return t
}
function on(s) {
    return re(s.protocol, !0)
}
function Cc(s, e) {
    let t = !1;
    return e && !s ? t = !0 : s && qe(s) && s.length && s.forEach(i => {
        t = on(i)
    }
    ),
    t
}
function Nc(s) {
    return typeof s == "number"
}
function Oe(s) {
    return typeof s < "u" && typeof s !== null
}
function qc(s) {
    return !(!s || typeof s != "object" || !s.code || !nn(s.code, !1) || !s.message || !re(s.message, !1))
}
function Dc(s) {
    return !(pe(s) || !re(s.method, !1))
}
function Fc(s) {
    return !(pe(s) || pe(s.result) && pe(s.error) || !nn(s.id, !1) || !re(s.jsonrpc, !1))
}
function Uc(s) {
    return !(pe(s) || !re(s.name, !1))
}
function an(s, e) {
    return !(!vi(e) || !Ju(s).includes(e))
}
function kc(s, e, t) {
    return re(t, !1) ? Qu(s, e).includes(t) : !1
}
function jc(s, e, t) {
    return re(t, !1) ? Xu(s, e).includes(t) : !1
}
function cn(s, e, t) {
    let i = null
      , r = cd(s)
      , n = hd(e)
      , o = Object.keys(r)
      , a = Object.keys(n)
      , c = Pa(Object.keys(s))
      , h = Pa(Object.keys(e))
      , p = c.filter(u => !h.includes(u));
    return p.length && (i = C("NON_CONFORMING_NAMESPACES", `${t} namespaces keys don't satisfy requiredNamespaces.
      Required: ${p.toString()}
      Received: ${Object.keys(e).toString()}`)),
    Ht(o, a) || (i = C("NON_CONFORMING_NAMESPACES", `${t} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)),
    Object.keys(e).forEach(u => {
        if (!u.includes(":") || i)
            return;
        let d = bs(e[u].accounts);
        d.includes(u) || (i = C("NON_CONFORMING_NAMESPACES", `${t} namespaces accounts don't satisfy namespace accounts for ${u}
        Required: ${u}
        Approved: ${d.toString()}`))
    }
    ),
    o.forEach(u => {
        i || (Ht(r[u].methods, n[u].methods) ? Ht(r[u].events, n[u].events) || (i = C("NON_CONFORMING_NAMESPACES", `${t} namespaces events don't satisfy namespace events for ${u}`)) : i = C("NON_CONFORMING_NAMESPACES", `${t} namespaces methods don't satisfy namespace methods for ${u}`))
    }
    ),
    i
}
function cd(s) {
    let e = {};
    return Object.keys(s).forEach(t => {
        var i;
        t.includes(":") ? e[t] = s[t] : (i = s[t].chains) == null || i.forEach(r => {
            e[r] = {
                methods: s[t].methods,
                events: s[t].events
            }
        }
        )
    }
    ),
    e
}
function Pa(s) {
    return [...new Set(s.map(e => e.includes(":") ? e.split(":")[0] : e))]
}
function hd(s) {
    let e = {};
    return Object.keys(s).forEach(t => {
        t.includes(":") ? e[t] = s[t] : bs(s[t].accounts)?.forEach(r => {
            e[r] = {
                accounts: s[t].accounts.filter(n => n.includes(`${r}:`)),
                methods: s[t].methods,
                events: s[t].events
            }
        }
        )
    }
    ),
    e
}
function Lc(s, e) {
    return nn(s, !1) && s <= e.max && s >= e.min
}
function hn() {
    let s = Ys();
    return new Promise(e => {
        switch (s) {
        case Ne.browser:
            e(ld());
            break;
        case Ne.reactNative:
            e(pd());
            break;
        case Ne.node:
            e(ud());
            break;
        default:
            e(!0)
        }
    }
    )
}
function ld() {
    return Yt() && navigator?.onLine
}
function pd() {
    return l(this, null, function*() {
        return Pt() && typeof global < "u" && global != null && global.NetInfo ? (yield global == null ? void 0 : global.NetInfo.fetch())?.isConnected : !0
    })
}
function ud() {
    return !0
}
function $c(s) {
    switch (Ys()) {
    case Ne.browser:
        dd(s);
        break;
    case Ne.reactNative:
        gd(s);
        break;
    case Ne.node:
        break
    }
}
function dd(s) {
    !Pt() && Yt() && (window.addEventListener("online", () => s(!0)),
    window.addEventListener("offline", () => s(!1)))
}
function gd(s) {
    Pt() && typeof global < "u" && global != null && global.NetInfo && global?.NetInfo.addEventListener(e => s(e?.isConnected))
}
function Mc() {
    var s;
    return Yt() && (0,
    tt.getDocument)() ? ((s = (0,
    tt.getDocument)()) == null ? void 0 : s.visibilityState) === "visible" : !0
}
var _r = {}
  , Dt = class {
    static get(e) {
        return _r[e]
    }
    static set(e, t) {
        _r[e] = t
    }
    static delete(e) {
        delete _r[e]
    }
}
;
var xt = Qe(ks());
var zc = Qe(ks())
  , fd = Object.defineProperty
  , md = (s, e, t) => e in s ? fd(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Bc = (s, e, t) => md(s, typeof e != "symbol" ? e + "" : e, t)
  , Ni = class extends $t {
    constructor(e) {
        super(),
        this.opts = e,
        Bc(this, "protocol", "wc"),
        Bc(this, "version", 2)
    }
}
;
var yd = Object.defineProperty
  , wd = (s, e, t) => e in s ? yd(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , bd = (s, e, t) => wd(s, typeof e != "symbol" ? e + "" : e, t)
  , qi = class extends $t {
    constructor(e, t) {
        super(),
        this.core = e,
        this.logger = t,
        bd(this, "records", new Map)
    }
}
  , Di = class {
    constructor(e, t) {
        this.logger = e,
        this.core = t
    }
}
  , Fi = class extends $t {
    constructor(e, t) {
        super(),
        this.relayer = e,
        this.logger = t
    }
}
  , Ui = class extends $t {
    constructor(e) {
        super()
    }
}
  , ki = class {
    constructor(e, t, i, r) {
        this.core = e,
        this.logger = t,
        this.name = i
    }
}
;
var ji = class extends $t {
    constructor(e, t) {
        super(),
        this.relayer = e,
        this.logger = t
    }
}
;
var Li = class extends $t {
    constructor(e, t) {
        super(),
        this.core = e,
        this.logger = t
    }
}
;
var $i = class {
    constructor(e, t, i) {
        this.core = e,
        this.logger = t,
        this.store = i
    }
}
  , Mi = class {
    constructor(e, t) {
        this.projectId = e,
        this.logger = t
    }
}
  , Bi = class {
    constructor(e, t, i) {
        this.core = e,
        this.logger = t,
        this.telemetryEnabled = i
    }
}
  , vd = Object.defineProperty
  , Ed = (s, e, t) => e in s ? vd(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Vc = (s, e, t) => Ed(s, typeof e != "symbol" ? e + "" : e, t);
var Vi = class {
    constructor(e) {
        this.opts = e,
        Vc(this, "protocol", "wc"),
        Vc(this, "version", 2)
    }
}
;
var zi = class {
    constructor(e) {
        this.client = e
    }
}
;
var k = Qe(nr());
var fh = Qe(Ao());
var mh = "wc"
  , yh = 2
  , Gi = "core"
  , dt = `${mh}@2:${Gi}:`
  , Id = {
    name: Gi,
    logger: "error"
}
  , _d = {
    database: ":memory:"
}
  , Pd = "crypto"
  , Hc = "client_ed25519_seed"
  , Sd = k.ONE_DAY
  , Od = "keychain"
  , Rd = "0.3"
  , xd = "messages"
  , Td = "0.3"
  , Kc = k.SIX_HOURS
  , Ad = "publisher"
  , zn = "irn"
  , Cd = "error"
  , wh = "wss://relay.walletconnect.org"
  , Nd = "relayer"
  , ue = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish"
}
  , qd = "_subscription"
  , Ge = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error"
}
  , Dd = .1;
var gn = "2.21.1";
var ie = {
    link_mode: "link_mode",
    relay: "relay"
}
  , Ki = {
    inbound: "inbound",
    outbound: "outbound"
}
  , Fd = "0.3"
  , Ud = "WALLETCONNECT_CLIENT_ID"
  , Gc = "WALLETCONNECT_LINK_MODE_APPS"
  , Me = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed"
};
var kd = "subscription"
  , jd = "0.3"
  , Ob = k.FIVE_SECONDS * 1e3
  , Ld = "pairing"
  , $d = "0.3";
var oi = {
    wc_pairingDelete: {
        req: {
            ttl: k.ONE_DAY,
            prompt: !1,
            tag: 1e3
        },
        res: {
            ttl: k.ONE_DAY,
            prompt: !1,
            tag: 1001
        }
    },
    wc_pairingPing: {
        req: {
            ttl: k.THIRTY_SECONDS,
            prompt: !1,
            tag: 1002
        },
        res: {
            ttl: k.THIRTY_SECONDS,
            prompt: !1,
            tag: 1003
        }
    },
    unregistered_method: {
        req: {
            ttl: k.ONE_DAY,
            prompt: !1,
            tag: 0
        },
        res: {
            ttl: k.ONE_DAY,
            prompt: !1,
            tag: 0
        }
    }
}
  , Ut = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping"
}
  , it = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
}
  , Md = "history"
  , Bd = "0.3"
  , Vd = "expirer"
  , Be = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync"
}
  , zd = "0.3";
var Hd = "verify-api"
  , Kd = "https://verify.walletconnect.com"
  , bh = "https://verify.walletconnect.org"
  , Es = bh
  , Gd = `${Es}/v3`
  , Wd = [Kd, bh]
  , Yd = "echo"
  , Jd = "https://echo.walletconnect.com";
var nt = {
    pairing_started: "pairing_started",
    pairing_uri_validation_success: "pairing_uri_validation_success",
    pairing_uri_not_expired: "pairing_uri_not_expired",
    store_new_pairing: "store_new_pairing",
    subscribing_pairing_topic: "subscribing_pairing_topic",
    subscribe_pairing_topic_success: "subscribe_pairing_topic_success",
    existing_pairing: "existing_pairing",
    pairing_not_expired: "pairing_not_expired",
    emit_inactive_pairing: "emit_inactive_pairing",
    emit_session_proposal: "emit_session_proposal",
    subscribing_to_pairing_topic: "subscribing_to_pairing_topic"
}
  , ut = {
    no_wss_connection: "no_wss_connection",
    no_internet_connection: "no_internet_connection",
    malformed_pairing_uri: "malformed_pairing_uri",
    active_pairing_already_exists: "active_pairing_already_exists",
    subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
    pairing_expired: "pairing_expired",
    proposal_expired: "proposal_expired",
    proposal_listener_not_found: "proposal_listener_not_found"
}
  , We = {
    session_approve_started: "session_approve_started",
    proposal_not_expired: "proposal_not_expired",
    session_namespaces_validation_success: "session_namespaces_validation_success",
    create_session_topic: "create_session_topic",
    subscribing_session_topic: "subscribing_session_topic",
    subscribe_session_topic_success: "subscribe_session_topic_success",
    publishing_session_approve: "publishing_session_approve",
    session_approve_publish_success: "session_approve_publish_success",
    store_session: "store_session",
    publishing_session_settle: "publishing_session_settle",
    session_settle_publish_success: "session_settle_publish_success"
}
  , kt = {
    no_internet_connection: "no_internet_connection",
    no_wss_connection: "no_wss_connection",
    proposal_expired: "proposal_expired",
    subscribe_session_topic_failure: "subscribe_session_topic_failure",
    session_approve_publish_failure: "session_approve_publish_failure",
    session_settle_publish_failure: "session_settle_publish_failure",
    session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure",
    proposal_not_found: "proposal_not_found"
}
  , jt = {
    authenticated_session_approve_started: "authenticated_session_approve_started",
    authenticated_session_not_expired: "authenticated_session_not_expired",
    chains_caip2_compliant: "chains_caip2_compliant",
    chains_evm_compliant: "chains_evm_compliant",
    create_authenticated_session_topic: "create_authenticated_session_topic",
    cacaos_verified: "cacaos_verified",
    store_authenticated_session: "store_authenticated_session",
    subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic",
    subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success",
    publishing_authenticated_session_approve: "publishing_authenticated_session_approve",
    authenticated_session_approve_publish_success: "authenticated_session_approve_publish_success"
}
  , Is = {
    no_internet_connection: "no_internet_connection",
    no_wss_connection: "no_wss_connection",
    missing_session_authenticate_request: "missing_session_authenticate_request",
    session_authenticate_request_expired: "session_authenticate_request_expired",
    chains_caip2_compliant_failure: "chains_caip2_compliant_failure",
    chains_evm_compliant_failure: "chains_evm_compliant_failure",
    invalid_cacao: "invalid_cacao",
    subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure",
    authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure",
    authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found"
}
  , Qd = .1
  , Xd = "event-client"
  , Zd = 86400
  , eg = "https://pulse.walletconnect.org/batch";
function tg(s, e) {
    if (s.length >= 255)
        throw new TypeError("Alphabet too long");
    for (var t = new Uint8Array(256), i = 0; i < t.length; i++)
        t[i] = 255;
    for (var r = 0; r < s.length; r++) {
        var n = s.charAt(r)
          , o = n.charCodeAt(0);
        if (t[o] !== 255)
            throw new TypeError(n + " is ambiguous");
        t[o] = r
    }
    var a = s.length
      , c = s.charAt(0)
      , h = Math.log(a) / Math.log(256)
      , p = Math.log(256) / Math.log(a);
    function u(f) {
        if (f instanceof Uint8Array || (ArrayBuffer.isView(f) ? f = new Uint8Array(f.buffer,f.byteOffset,f.byteLength) : Array.isArray(f) && (f = Uint8Array.from(f))),
        !(f instanceof Uint8Array))
            throw new TypeError("Expected Uint8Array");
        if (f.length === 0)
            return "";
        for (var y = 0, m = 0, b = 0, w = f.length; b !== w && f[b] === 0; )
            b++,
            y++;
        for (var v = (w - b) * p + 1 >>> 0, P = new Uint8Array(v); b !== w; ) {
            for (var A = f[b], S = 0, R = v - 1; (A !== 0 || S < m) && R !== -1; R--,
            S++)
                A += 256 * P[R] >>> 0,
                P[R] = A % a >>> 0,
                A = A / a >>> 0;
            if (A !== 0)
                throw new Error("Non-zero carry");
            m = S,
            b++
        }
        for (var N = v - m; N !== v && P[N] === 0; )
            N++;
        for (var E = c.repeat(y); N < v; ++N)
            E += s.charAt(P[N]);
        return E
    }
    function d(f) {
        if (typeof f != "string")
            throw new TypeError("Expected String");
        if (f.length === 0)
            return new Uint8Array;
        var y = 0;
        if (f[y] !== " ") {
            for (var m = 0, b = 0; f[y] === c; )
                m++,
                y++;
            for (var w = (f.length - y) * h + 1 >>> 0, v = new Uint8Array(w); f[y]; ) {
                var P = t[f.charCodeAt(y)];
                if (P === 255)
                    return;
                for (var A = 0, S = w - 1; (P !== 0 || A < b) && S !== -1; S--,
                A++)
                    P += a * v[S] >>> 0,
                    v[S] = P % 256 >>> 0,
                    P = P / 256 >>> 0;
                if (P !== 0)
                    throw new Error("Non-zero carry");
                b = A,
                y++
            }
            if (f[y] !== " ") {
                for (var R = w - b; R !== w && v[R] === 0; )
                    R++;
                for (var N = new Uint8Array(m + (w - R)), E = m; R !== w; )
                    N[E++] = v[R++];
                return N
            }
        }
    }
    function g(f) {
        var y = d(f);
        if (y)
            return y;
        throw new Error(`Non-${e} character`)
    }
    return {
        encode: u,
        decodeUnsafe: d,
        decode: g
    }
}
var sg = tg
  , ig = sg
  , vh = s => {
    if (s instanceof Uint8Array && s.constructor.name === "Uint8Array")
        return s;
    if (s instanceof ArrayBuffer)
        return new Uint8Array(s);
    if (ArrayBuffer.isView(s))
        return new Uint8Array(s.buffer,s.byteOffset,s.byteLength);
    throw new Error("Unknown type, must be binary type")
}
  , rg = s => new TextEncoder().encode(s)
  , ng = s => new TextDecoder().decode(s)
  , fn = class {
    constructor(e, t, i) {
        this.name = e,
        this.prefix = t,
        this.baseEncode = i
    }
    encode(e) {
        if (e instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(e)}`;
        throw Error("Unknown type, must be binary type")
    }
}
  , mn = class {
    constructor(e, t, i) {
        if (this.name = e,
        this.prefix = t,
        t.codePointAt(0) === void 0)
            throw new Error("Invalid prefix character");
        this.prefixCodePoint = t.codePointAt(0),
        this.baseDecode = i
    }
    decode(e) {
        if (typeof e == "string") {
            if (e.codePointAt(0) !== this.prefixCodePoint)
                throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(e.slice(this.prefix.length))
        } else
            throw Error("Can only multibase decode strings")
    }
    or(e) {
        return Eh(this, e)
    }
}
  , yn = class {
    constructor(e) {
        this.decoders = e
    }
    or(e) {
        return Eh(this, e)
    }
    decode(e) {
        let t = e[0]
          , i = this.decoders[t];
        if (i)
            return i.decode(e);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
}
  , Eh = (s, e) => new yn(X(X({}, s.decoders || {
    [s.prefix]: s
}), e.decoders || {
    [e.prefix]: e
}))
  , wn = class {
    constructor(e, t, i, r) {
        this.name = e,
        this.prefix = t,
        this.baseEncode = i,
        this.baseDecode = r,
        this.encoder = new fn(e,t,i),
        this.decoder = new mn(e,t,r)
    }
    encode(e) {
        return this.encoder.encode(e)
    }
    decode(e) {
        return this.decoder.decode(e)
    }
}
  , Wi = ({name: s, prefix: e, encode: t, decode: i}) => new wn(s,e,t,i)
  , pi = ({prefix: s, name: e, alphabet: t}) => {
    let {encode: i, decode: r} = ig(t, e);
    return Wi({
        prefix: s,
        name: e,
        encode: i,
        decode: n => vh(r(n))
    })
}
  , og = (s, e, t, i) => {
    let r = {};
    for (let p = 0; p < e.length; ++p)
        r[e[p]] = p;
    let n = s.length;
    for (; s[n - 1] === "="; )
        --n;
    let o = new Uint8Array(n * t / 8 | 0)
      , a = 0
      , c = 0
      , h = 0;
    for (let p = 0; p < n; ++p) {
        let u = r[s[p]];
        if (u === void 0)
            throw new SyntaxError(`Non-${i} character`);
        c = c << t | u,
        a += t,
        a >= 8 && (a -= 8,
        o[h++] = 255 & c >> a)
    }
    if (a >= t || 255 & c << 8 - a)
        throw new SyntaxError("Unexpected end of data");
    return o
}
  , ag = (s, e, t) => {
    let i = e[e.length - 1] === "="
      , r = (1 << t) - 1
      , n = ""
      , o = 0
      , a = 0;
    for (let c = 0; c < s.length; ++c)
        for (a = a << 8 | s[c],
        o += 8; o > t; )
            o -= t,
            n += e[r & a >> o];
    if (o && (n += e[r & a << t - o]),
    i)
        for (; n.length * t & 7; )
            n += "=";
    return n
}
  , Ie = ({name: s, prefix: e, bitsPerChar: t, alphabet: i}) => Wi({
    prefix: e,
    name: s,
    encode(r) {
        return ag(r, i, t)
    },
    decode(r) {
        return og(r, i, t, s)
    }
})
  , cg = Wi({
    prefix: "\0",
    name: "identity",
    encode: s => ng(s),
    decode: s => rg(s)
})
  , hg = Object.freeze({
    __proto__: null,
    identity: cg
})
  , lg = Ie({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
})
  , pg = Object.freeze({
    __proto__: null,
    base2: lg
})
  , ug = Ie({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
})
  , dg = Object.freeze({
    __proto__: null,
    base8: ug
})
  , gg = pi({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
})
  , fg = Object.freeze({
    __proto__: null,
    base10: gg
})
  , mg = Ie({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
})
  , yg = Ie({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
})
  , wg = Object.freeze({
    __proto__: null,
    base16: mg,
    base16upper: yg
})
  , bg = Ie({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
})
  , vg = Ie({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
})
  , Eg = Ie({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
})
  , Ig = Ie({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
})
  , _g = Ie({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
})
  , Pg = Ie({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
})
  , Sg = Ie({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
})
  , Og = Ie({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
})
  , Rg = Ie({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
})
  , xg = Object.freeze({
    __proto__: null,
    base32: bg,
    base32upper: vg,
    base32pad: Eg,
    base32padupper: Ig,
    base32hex: _g,
    base32hexupper: Pg,
    base32hexpad: Sg,
    base32hexpadupper: Og,
    base32z: Rg
})
  , Tg = pi({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
})
  , Ag = pi({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
})
  , Cg = Object.freeze({
    __proto__: null,
    base36: Tg,
    base36upper: Ag
})
  , Ng = pi({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
})
  , qg = pi({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
})
  , Dg = Object.freeze({
    __proto__: null,
    base58btc: Ng,
    base58flickr: qg
})
  , Fg = Ie({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
})
  , Ug = Ie({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
})
  , kg = Ie({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
})
  , jg = Ie({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
})
  , Lg = Object.freeze({
    __proto__: null,
    base64: Fg,
    base64pad: Ug,
    base64url: kg,
    base64urlpad: jg
})
  , Ih = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}")
  , $g = Ih.reduce( (s, e, t) => (s[t] = e,
s), [])
  , Mg = Ih.reduce( (s, e, t) => (s[e.codePointAt(0)] = t,
s), []);
function Bg(s) {
    return s.reduce( (e, t) => (e += $g[t],
    e), "")
}
function Vg(s) {
    let e = [];
    for (let t of s) {
        let i = Mg[t.codePointAt(0)];
        if (i === void 0)
            throw new Error(`Non-base256emoji character: ${t}`);
        e.push(i)
    }
    return new Uint8Array(e)
}
var zg = Wi({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: Bg,
    decode: Vg
})
  , Hg = Object.freeze({
    __proto__: null,
    base256emoji: zg
})
  , Kg = _h
  , Wc = 128
  , Gg = 127
  , Wg = ~Gg
  , Yg = Math.pow(2, 31);
function _h(s, e, t) {
    e = e || [],
    t = t || 0;
    for (var i = t; s >= Yg; )
        e[t++] = s & 255 | Wc,
        s /= 128;
    for (; s & Wg; )
        e[t++] = s & 255 | Wc,
        s >>>= 7;
    return e[t] = s | 0,
    _h.bytes = t - i + 1,
    e
}
var Jg = bn
  , Qg = 128
  , Yc = 127;
function bn(s, i) {
    var t = 0, i = i || 0, r = 0, n = i, o, a = s.length;
    do {
        if (n >= a)
            throw bn.bytes = 0,
            new RangeError("Could not decode varint");
        o = s[n++],
        t += r < 28 ? (o & Yc) << r : (o & Yc) * Math.pow(2, r),
        r += 7
    } while (o >= Qg);
    return bn.bytes = n - i,
    t
}
var Xg = Math.pow(2, 7)
  , Zg = Math.pow(2, 14)
  , ef = Math.pow(2, 21)
  , tf = Math.pow(2, 28)
  , sf = Math.pow(2, 35)
  , rf = Math.pow(2, 42)
  , nf = Math.pow(2, 49)
  , of = Math.pow(2, 56)
  , af = Math.pow(2, 63)
  , cf = function(s) {
    return s < Xg ? 1 : s < Zg ? 2 : s < ef ? 3 : s < tf ? 4 : s < sf ? 5 : s < rf ? 6 : s < nf ? 7 : s < of ? 8 : s < af ? 9 : 10
}
  , hf = {
    encode: Kg,
    decode: Jg,
    encodingLength: cf
}
  , Ph = hf
  , Jc = (s, e, t=0) => (Ph.encode(s, e, t),
e)
  , Qc = s => Ph.encodingLength(s)
  , vn = (s, e) => {
    let t = e.byteLength
      , i = Qc(s)
      , r = i + Qc(t)
      , n = new Uint8Array(r + t);
    return Jc(s, n, 0),
    Jc(t, n, i),
    n.set(e, r),
    new En(s,t,e,n)
}
  , En = class {
    constructor(e, t, i, r) {
        this.code = e,
        this.size = t,
        this.digest = i,
        this.bytes = r
    }
}
  , Sh = ({name: s, code: e, encode: t}) => new In(s,e,t)
  , In = class {
    constructor(e, t, i) {
        this.name = e,
        this.code = t,
        this.encode = i
    }
    digest(e) {
        if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array ? vn(this.code, t) : t.then(i => vn(this.code, i))
        } else
            throw Error("Unknown type, must be binary type")
    }
}
  , Oh = s => e => l(void 0, null, function*() {
    return new Uint8Array(yield crypto.subtle.digest(s, e))
})
  , lf = Sh({
    name: "sha2-256",
    code: 18,
    encode: Oh("SHA-256")
})
  , pf = Sh({
    name: "sha2-512",
    code: 19,
    encode: Oh("SHA-512")
})
  , uf = Object.freeze({
    __proto__: null,
    sha256: lf,
    sha512: pf
})
  , Rh = 0
  , df = "identity"
  , xh = vh
  , gf = s => vn(Rh, xh(s))
  , ff = {
    code: Rh,
    name: df,
    encode: xh,
    digest: gf
}
  , mf = Object.freeze({
    __proto__: null,
    identity: ff
});
new TextEncoder,
new TextDecoder;
var Xc = X(X(X(X(X(X(X(X(X(X({}, hg), pg), dg), fg), wg), xg), Cg), Dg), Lg), Hg);
X(X({}, uf), mf);
function yf(s=0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(s) : new Uint8Array(s)
}
function Th(s, e, t, i) {
    return {
        name: s,
        prefix: e,
        encoder: {
            name: s,
            prefix: e,
            encode: t
        },
        decoder: {
            decode: i
        }
    }
}
var Zc = Th("utf8", "u", s => "u" + new TextDecoder("utf8").decode(s), s => new TextEncoder().encode(s.substring(1)))
  , ln = Th("ascii", "a", s => {
    let e = "a";
    for (let t = 0; t < s.length; t++)
        e += String.fromCharCode(s[t]);
    return e
}
, s => {
    s = s.substring(1);
    let e = yf(s.length);
    for (let t = 0; t < s.length; t++)
        e[t] = s.charCodeAt(t);
    return e
}
)
  , wf = X({
    utf8: Zc,
    "utf-8": Zc,
    hex: Xc.base16,
    latin1: ln,
    ascii: ln,
    binary: ln
}, Xc);
function bf(s, e="utf8") {
    let t = wf[e];
    if (!t)
        throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(s, "utf8") : t.decoder.decode(`${t.prefix}${s}`)
}
var vf = Object.defineProperty
  , Ef = (s, e, t) => e in s ? vf(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , pt = (s, e, t) => Ef(s, typeof e != "symbol" ? e + "" : e, t)
  , _n = class {
    constructor(e, t) {
        this.core = e,
        this.logger = t,
        pt(this, "keychain", new Map),
        pt(this, "name", Od),
        pt(this, "version", Rd),
        pt(this, "initialized", !1),
        pt(this, "storagePrefix", dt),
        pt(this, "init", () => l(this, null, function*() {
            if (!this.initialized) {
                let i = yield this.getKeyChain();
                typeof i < "u" && (this.keychain = i),
                this.initialized = !0
            }
        })),
        pt(this, "has", i => (this.isInitialized(),
        this.keychain.has(i))),
        pt(this, "set", (i, r) => l(this, null, function*() {
            this.isInitialized(),
            this.keychain.set(i, r),
            yield this.persist()
        })),
        pt(this, "get", i => {
            this.isInitialized();
            let r = this.keychain.get(i);
            if (typeof r > "u") {
                let {message: n} = C("NO_MATCHING_KEY", `${this.name}: ${i}`);
                throw new Error(n)
            }
            return r
        }
        ),
        pt(this, "del", i => l(this, null, function*() {
            this.isInitialized(),
            this.keychain.delete(i),
            yield this.persist()
        })),
        this.core = e,
        this.logger = we(t, this.name)
    }
    get context() {
        return xe(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    setKeyChain(e) {
        return l(this, null, function*() {
            yield this.core.storage.setItem(this.storageKey, Ei(e))
        })
    }
    getKeyChain() {
        return l(this, null, function*() {
            let e = yield this.core.storage.getItem(this.storageKey);
            return typeof e < "u" ? Ii(e) : void 0
        })
    }
    persist() {
        return l(this, null, function*() {
            yield this.setKeyChain(this.keychain)
        })
    }
    isInitialized() {
        if (!this.initialized) {
            let {message: e} = C("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
  , If = Object.defineProperty
  , _f = (s, e, t) => e in s ? If(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , ve = (s, e, t) => _f(s, typeof e != "symbol" ? e + "" : e, t)
  , Pn = class {
    constructor(e, t, i) {
        this.core = e,
        this.logger = t,
        ve(this, "name", Pd),
        ve(this, "keychain"),
        ve(this, "randomSessionIdentifier", Ai()),
        ve(this, "initialized", !1),
        ve(this, "init", () => l(this, null, function*() {
            this.initialized || (yield this.keychain.init(),
            this.initialized = !0)
        })),
        ve(this, "hasKeys", r => (this.isInitialized(),
        this.keychain.has(r))),
        ve(this, "getClientId", () => l(this, null, function*() {
            this.isInitialized();
            let r = yield this.getClientSeed()
              , n = lr(r);
            return Fo(n.publicKey)
        })),
        ve(this, "generateKeyPair", () => {
            this.isInitialized();
            let r = pc();
            return this.setPrivateKey(r.publicKey, r.privateKey)
        }
        ),
        ve(this, "signJWT", r => l(this, null, function*() {
            this.isInitialized();
            let n = yield this.getClientSeed()
              , o = lr(n)
              , a = this.randomSessionIdentifier;
            return yield Uo(a, r, Sd, o)
        })),
        ve(this, "generateSharedKey", (r, n, o) => {
            this.isInitialized();
            let a = this.getPrivateKey(r)
              , c = uc(a, n);
            return this.setSymKey(c, o)
        }
        ),
        ve(this, "setSymKey", (r, n) => l(this, null, function*() {
            this.isInitialized();
            let o = n || ms(r);
            return yield this.keychain.set(o, r),
            o
        })),
        ve(this, "deleteKeyPair", r => l(this, null, function*() {
            this.isInitialized(),
            yield this.keychain.del(r)
        })),
        ve(this, "deleteSymKey", r => l(this, null, function*() {
            this.isInitialized(),
            yield this.keychain.del(r)
        })),
        ve(this, "encode", (r, n, o) => l(this, null, function*() {
            this.isInitialized();
            let a = Xr(o)
              , c = Do(n);
            if (en(a))
                return wc(c, o?.encoding);
            if (Zr(a)) {
                let d = a.senderPublicKey
                  , g = a.receiverPublicKey;
                r = yield this.generateSharedKey(d, g)
            }
            let h = this.getSymKey(r)
              , {type: p, senderPublicKey: u} = a;
            return mc({
                type: p,
                symKey: h,
                message: c,
                senderPublicKey: u,
                encoding: o?.encoding
            })
        })),
        ve(this, "decode", (r, n, o) => l(this, null, function*() {
            this.isInitialized();
            let a = Ec(n, o);
            if (en(a)) {
                let c = bc(n, o?.encoding);
                return hr(c)
            }
            if (Zr(a)) {
                let c = a.receiverPublicKey
                  , h = a.senderPublicKey;
                r = yield this.generateSharedKey(c, h)
            }
            try {
                let c = this.getSymKey(r)
                  , h = yc({
                    symKey: c,
                    encoded: n,
                    encoding: o?.encoding
                });
                return hr(h)
            } catch (c) {
                this.logger.error(`Failed to decode message from topic: '${r}', clientId: '${yield this.getClientId()}'`),
                this.logger.error(c)
            }
        })),
        ve(this, "getPayloadType", (r, n=Le) => {
            let o = ys({
                encoded: r,
                encoding: n
            });
            return qt(o.type)
        }
        ),
        ve(this, "getPayloadSenderPublicKey", (r, n=Le) => {
            let o = ys({
                encoded: r,
                encoding: n
            });
            return o.senderPublicKey ? Pe(o.senderPublicKey, Se) : void 0
        }
        ),
        this.core = e,
        this.logger = we(t, this.name),
        this.keychain = i || new _n(this.core,this.logger)
    }
    get context() {
        return xe(this.logger)
    }
    setPrivateKey(e, t) {
        return l(this, null, function*() {
            return yield this.keychain.set(e, t),
            e
        })
    }
    getPrivateKey(e) {
        return this.keychain.get(e)
    }
    getClientSeed() {
        return l(this, null, function*() {
            let e = "";
            try {
                e = this.keychain.get(Hc)
            } catch {
                e = Ai(),
                yield this.keychain.set(Hc, e)
            }
            return bf(e, "base16")
        })
    }
    getSymKey(e) {
        return this.keychain.get(e)
    }
    isInitialized() {
        if (!this.initialized) {
            let {message: e} = C("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
  , Pf = Object.defineProperty
  , Sf = Object.defineProperties
  , Of = Object.getOwnPropertyDescriptors
  , eh = Object.getOwnPropertySymbols
  , Rf = Object.prototype.hasOwnProperty
  , xf = Object.prototype.propertyIsEnumerable
  , Sn = (s, e, t) => e in s ? Pf(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Tf = (s, e) => {
    for (var t in e || (e = {}))
        Rf.call(e, t) && Sn(s, t, e[t]);
    if (eh)
        for (var t of eh(e))
            xf.call(e, t) && Sn(s, t, e[t]);
    return s
}
  , Af = (s, e) => Sf(s, Of(e))
  , $e = (s, e, t) => Sn(s, typeof e != "symbol" ? e + "" : e, t)
  , On = class extends Di {
    constructor(e, t) {
        super(e, t),
        this.logger = e,
        this.core = t,
        $e(this, "messages", new Map),
        $e(this, "messagesWithoutClientAck", new Map),
        $e(this, "name", xd),
        $e(this, "version", Td),
        $e(this, "initialized", !1),
        $e(this, "storagePrefix", dt),
        $e(this, "init", () => l(this, null, function*() {
            if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                    let i = yield this.getRelayerMessages();
                    typeof i < "u" && (this.messages = i);
                    let r = yield this.getRelayerMessagesWithoutClientAck();
                    typeof r < "u" && (this.messagesWithoutClientAck = r),
                    this.logger.debug(`Successfully Restored records for ${this.name}`),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        size: this.messages.size
                    })
                } catch (i) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`),
                    this.logger.error(i)
                } finally {
                    this.initialized = !0
                }
            }
        })),
        $e(this, "set", (i, r, n) => l(this, null, function*() {
            this.isInitialized();
            let o = Ke(r)
              , a = this.messages.get(i);
            if (typeof a > "u" && (a = {}),
            typeof a[o] < "u")
                return o;
            if (a[o] = r,
            this.messages.set(i, a),
            n === Ki.inbound) {
                let c = this.messagesWithoutClientAck.get(i) || {};
                this.messagesWithoutClientAck.set(i, Af(Tf({}, c), {
                    [o]: r
                }))
            }
            return yield this.persist(),
            o
        })),
        $e(this, "get", i => {
            this.isInitialized();
            let r = this.messages.get(i);
            return typeof r > "u" && (r = {}),
            r
        }
        ),
        $e(this, "getWithoutAck", i => {
            this.isInitialized();
            let r = {};
            for (let n of i) {
                let o = this.messagesWithoutClientAck.get(n) || {};
                r[n] = Object.values(o)
            }
            return r
        }
        ),
        $e(this, "has", (i, r) => {
            this.isInitialized();
            let n = this.get(i)
              , o = Ke(r);
            return typeof n[o] < "u"
        }
        ),
        $e(this, "ack", (i, r) => l(this, null, function*() {
            this.isInitialized();
            let n = this.messagesWithoutClientAck.get(i);
            if (typeof n > "u")
                return;
            let o = Ke(r);
            delete n[o],
            Object.keys(n).length === 0 ? this.messagesWithoutClientAck.delete(i) : this.messagesWithoutClientAck.set(i, n),
            yield this.persist()
        })),
        $e(this, "del", i => l(this, null, function*() {
            this.isInitialized(),
            this.messages.delete(i),
            this.messagesWithoutClientAck.delete(i),
            yield this.persist()
        })),
        this.logger = we(e, this.name),
        this.core = t
    }
    get context() {
        return xe(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get storageKeyWithoutClientAck() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name + "_withoutClientAck"
    }
    setRelayerMessages(e) {
        return l(this, null, function*() {
            yield this.core.storage.setItem(this.storageKey, Ei(e))
        })
    }
    setRelayerMessagesWithoutClientAck(e) {
        return l(this, null, function*() {
            yield this.core.storage.setItem(this.storageKeyWithoutClientAck, Ei(e))
        })
    }
    getRelayerMessages() {
        return l(this, null, function*() {
            let e = yield this.core.storage.getItem(this.storageKey);
            return typeof e < "u" ? Ii(e) : void 0
        })
    }
    getRelayerMessagesWithoutClientAck() {
        return l(this, null, function*() {
            let e = yield this.core.storage.getItem(this.storageKeyWithoutClientAck);
            return typeof e < "u" ? Ii(e) : void 0
        })
    }
    persist() {
        return l(this, null, function*() {
            yield this.setRelayerMessages(this.messages),
            yield this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck)
        })
    }
    isInitialized() {
        if (!this.initialized) {
            let {message: e} = C("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
  , Cf = Object.defineProperty
  , Nf = Object.defineProperties
  , qf = Object.getOwnPropertyDescriptors
  , th = Object.getOwnPropertySymbols
  , Df = Object.prototype.hasOwnProperty
  , Ff = Object.prototype.propertyIsEnumerable
  , Rn = (s, e, t) => e in s ? Cf(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Hi = (s, e) => {
    for (var t in e || (e = {}))
        Df.call(e, t) && Rn(s, t, e[t]);
    if (th)
        for (var t of th(e))
            Ff.call(e, t) && Rn(s, t, e[t]);
    return s
}
  , pn = (s, e) => Nf(s, qf(e))
  , rt = (s, e, t) => Rn(s, typeof e != "symbol" ? e + "" : e, t)
  , xn = class extends Fi {
    constructor(e, t) {
        super(e, t),
        this.relayer = e,
        this.logger = t,
        rt(this, "events", new xt.EventEmitter),
        rt(this, "name", Ad),
        rt(this, "queue", new Map),
        rt(this, "publishTimeout", (0,
        k.toMiliseconds)(k.ONE_MINUTE)),
        rt(this, "initialPublishTimeout", (0,
        k.toMiliseconds)(k.ONE_SECOND * 15)),
        rt(this, "needsTransportRestart", !1),
        rt(this, "publish", (i, r, n) => l(this, null, function*() {
            var o;
            this.logger.debug("Publishing Payload"),
            this.logger.trace({
                type: "method",
                method: "publish",
                params: {
                    topic: i,
                    message: r,
                    opts: n
                }
            });
            let a = n?.ttl || Kc
              , c = ii(n)
              , h = n?.prompt || !1
              , p = n?.tag || 0
              , u = n?.id || Tt().toString()
              , d = {
                topic: i,
                message: r,
                opts: {
                    ttl: a,
                    relay: c,
                    prompt: h,
                    tag: p,
                    id: u,
                    attestation: n?.attestation,
                    tvf: n?.tvf
                }
            }
              , g = `Failed to publish payload, please try again. id:${u} tag:${p}`;
            try {
                let f = new Promise(y => l(this, null, function*() {
                    let m = ({id: w}) => {
                        d.opts.id === w && (this.removeRequestFromQueue(w),
                        this.relayer.events.removeListener(ue.publish, m),
                        y(d))
                    }
                    ;
                    this.relayer.events.on(ue.publish, m);
                    let b = Ot(new Promise( (w, v) => {
                        this.rpcPublish({
                            topic: i,
                            message: r,
                            ttl: a,
                            prompt: h,
                            tag: p,
                            id: u,
                            attestation: n?.attestation,
                            tvf: n?.tvf
                        }).then(w).catch(P => {
                            this.logger.warn(P, P?.message),
                            v(P)
                        }
                        )
                    }
                    ), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${u} tag:${p}`);
                    try {
                        yield b,
                        this.events.removeListener(ue.publish, m)
                    } catch (w) {
                        this.queue.set(u, pn(Hi({}, d), {
                            attempt: 1
                        })),
                        this.logger.warn(w, w?.message)
                    }
                }));
                this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        id: u,
                        topic: i,
                        message: r,
                        opts: n
                    }
                }),
                yield Ot(f, this.publishTimeout, g)
            } catch (f) {
                if (this.logger.debug("Failed to Publish Payload"),
                this.logger.error(f),
                (o = n?.internal) != null && o.throwOnFailedPublish)
                    throw f
            } finally {
                this.queue.delete(u)
            }
        })),
        rt(this, "on", (i, r) => {
            this.events.on(i, r)
        }
        ),
        rt(this, "once", (i, r) => {
            this.events.once(i, r)
        }
        ),
        rt(this, "off", (i, r) => {
            this.events.off(i, r)
        }
        ),
        rt(this, "removeListener", (i, r) => {
            this.events.removeListener(i, r)
        }
        ),
        this.relayer = e,
        this.logger = we(t, this.name),
        this.registerEventListeners()
    }
    get context() {
        return xe(this.logger)
    }
    rpcPublish(e) {
        return l(this, null, function*() {
            var t, i, r, n;
            let {topic: o, message: a, ttl: c=Kc, prompt: h, tag: p, id: u, attestation: d, tvf: g} = e
              , f = {
                method: ws(ii().protocol).publish,
                params: Hi({
                    topic: o,
                    message: a,
                    ttl: c,
                    prompt: h,
                    tag: p,
                    attestation: d
                }, g),
                id: u
            };
            pe((t = f.params) == null ? void 0 : t.prompt) && ((i = f.params) == null || delete i.prompt),
            pe((r = f.params) == null ? void 0 : r.tag) && ((n = f.params) == null || delete n.tag),
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
                type: "message",
                direction: "outgoing",
                request: f
            });
            let y = yield this.relayer.request(f);
            return this.relayer.events.emit(ue.publish, e),
            this.logger.debug("Successfully Published Payload"),
            y
        })
    }
    removeRequestFromQueue(e) {
        this.queue.delete(e)
    }
    checkQueue() {
        this.queue.forEach( (e, t) => l(this, null, function*() {
            let i = e.attempt + 1;
            this.queue.set(t, pn(Hi({}, e), {
                attempt: i
            }));
            let {topic: r, message: n, opts: o, attestation: a} = e;
            this.logger.warn({}, `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${i}`),
            yield this.rpcPublish(pn(Hi({}, e), {
                topic: r,
                message: n,
                ttl: o.ttl,
                prompt: o.prompt,
                tag: o.tag,
                id: o.id,
                attestation: a,
                tvf: o.tvf
            })),
            this.logger.warn({}, `Publisher: queue->published: ${e.opts.id}`)
        }))
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(Mt.pulse, () => {
            if (this.needsTransportRestart) {
                this.needsTransportRestart = !1,
                this.relayer.events.emit(ue.connection_stalled);
                return
            }
            this.checkQueue()
        }
        ),
        this.relayer.on(ue.message_ack, e => {
            this.removeRequestFromQueue(e.id.toString())
        }
        )
    }
}
  , Uf = Object.defineProperty
  , kf = (s, e, t) => e in s ? Uf(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , vs = (s, e, t) => kf(s, typeof e != "symbol" ? e + "" : e, t)
  , Tn = class {
    constructor() {
        vs(this, "map", new Map),
        vs(this, "set", (e, t) => {
            let i = this.get(e);
            this.exists(e, t) || this.map.set(e, [...i, t])
        }
        ),
        vs(this, "get", e => this.map.get(e) || []),
        vs(this, "exists", (e, t) => this.get(e).includes(t)),
        vs(this, "delete", (e, t) => {
            if (typeof t > "u") {
                this.map.delete(e);
                return
            }
            if (!this.map.has(e))
                return;
            let i = this.get(e);
            if (!this.exists(e, t))
                return;
            let r = i.filter(n => n !== t);
            if (!r.length) {
                this.map.delete(e);
                return
            }
            this.map.set(e, r)
        }
        ),
        vs(this, "clear", () => {
            this.map.clear()
        }
        )
    }
    get topics() {
        return Array.from(this.map.keys())
    }
}
  , jf = Object.defineProperty
  , Lf = Object.defineProperties
  , $f = Object.getOwnPropertyDescriptors
  , sh = Object.getOwnPropertySymbols
  , Mf = Object.prototype.hasOwnProperty
  , Bf = Object.prototype.propertyIsEnumerable
  , An = (s, e, t) => e in s ? jf(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , ai = (s, e) => {
    for (var t in e || (e = {}))
        Mf.call(e, t) && An(s, t, e[t]);
    if (sh)
        for (var t of sh(e))
            Bf.call(e, t) && An(s, t, e[t]);
    return s
}
  , un = (s, e) => Lf(s, $f(e))
  , Z = (s, e, t) => An(s, typeof e != "symbol" ? e + "" : e, t)
  , Cn = class extends ji {
    constructor(e, t) {
        super(e, t),
        this.relayer = e,
        this.logger = t,
        Z(this, "subscriptions", new Map),
        Z(this, "topicMap", new Tn),
        Z(this, "events", new xt.EventEmitter),
        Z(this, "name", kd),
        Z(this, "version", jd),
        Z(this, "pending", new Map),
        Z(this, "cached", []),
        Z(this, "initialized", !1),
        Z(this, "storagePrefix", dt),
        Z(this, "subscribeTimeout", (0,
        k.toMiliseconds)(k.ONE_MINUTE)),
        Z(this, "initialSubscribeTimeout", (0,
        k.toMiliseconds)(k.ONE_SECOND * 15)),
        Z(this, "clientId"),
        Z(this, "batchSubscribeTopicsLimit", 500),
        Z(this, "init", () => l(this, null, function*() {
            this.initialized || (this.logger.trace("Initialized"),
            this.registerEventListeners(),
            yield this.restore()),
            this.initialized = !0
        })),
        Z(this, "subscribe", (i, r) => l(this, null, function*() {
            this.isInitialized(),
            this.logger.debug("Subscribing Topic"),
            this.logger.trace({
                type: "method",
                method: "subscribe",
                params: {
                    topic: i,
                    opts: r
                }
            });
            try {
                let n = ii(r)
                  , o = {
                    topic: i,
                    relay: n,
                    transportType: r?.transportType
                };
                this.pending.set(i, o);
                let a = yield this.rpcSubscribe(i, n, r);
                return typeof a == "string" && (this.onSubscribe(a, o),
                this.logger.debug("Successfully Subscribed Topic"),
                this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: {
                        topic: i,
                        opts: r
                    }
                })),
                a
            } catch (n) {
                throw this.logger.debug("Failed to Subscribe Topic"),
                this.logger.error(n),
                n
            }
        })),
        Z(this, "unsubscribe", (i, r) => l(this, null, function*() {
            this.isInitialized(),
            typeof r?.id < "u" ? yield this.unsubscribeById(i, r.id, r) : yield this.unsubscribeByTopic(i, r)
        })),
        Z(this, "isSubscribed", i => new Promise(r => {
            r(this.topicMap.topics.includes(i))
        }
        )),
        Z(this, "isKnownTopic", i => new Promise(r => {
            r(this.topicMap.topics.includes(i) || this.pending.has(i) || this.cached.some(n => n.topic === i))
        }
        )),
        Z(this, "on", (i, r) => {
            this.events.on(i, r)
        }
        ),
        Z(this, "once", (i, r) => {
            this.events.once(i, r)
        }
        ),
        Z(this, "off", (i, r) => {
            this.events.off(i, r)
        }
        ),
        Z(this, "removeListener", (i, r) => {
            this.events.removeListener(i, r)
        }
        ),
        Z(this, "start", () => l(this, null, function*() {
            yield this.onConnect()
        })),
        Z(this, "stop", () => l(this, null, function*() {
            yield this.onDisconnect()
        })),
        Z(this, "restart", () => l(this, null, function*() {
            yield this.restore(),
            yield this.onRestart()
        })),
        Z(this, "checkPending", () => l(this, null, function*() {
            if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected))
                return;
            let i = [];
            this.pending.forEach(r => {
                i.push(r)
            }
            ),
            yield this.batchSubscribe(i)
        })),
        Z(this, "registerEventListeners", () => {
            this.relayer.core.heartbeat.on(Mt.pulse, () => l(this, null, function*() {
                yield this.checkPending()
            })),
            this.events.on(Me.created, i => l(this, null, function*() {
                let r = Me.created;
                this.logger.info(`Emitting ${r}`),
                this.logger.debug({
                    type: "event",
                    event: r,
                    data: i
                }),
                yield this.persist()
            })),
            this.events.on(Me.deleted, i => l(this, null, function*() {
                let r = Me.deleted;
                this.logger.info(`Emitting ${r}`),
                this.logger.debug({
                    type: "event",
                    event: r,
                    data: i
                }),
                yield this.persist()
            }))
        }
        ),
        this.relayer = e,
        this.logger = we(t, this.name),
        this.clientId = ""
    }
    get context() {
        return xe(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.subscriptions.size
    }
    get ids() {
        return Array.from(this.subscriptions.keys())
    }
    get values() {
        return Array.from(this.subscriptions.values())
    }
    get topics() {
        return this.topicMap.topics
    }
    get hasAnyTopics() {
        return this.topicMap.topics.length > 0 || this.pending.size > 0 || this.cached.length > 0 || this.subscriptions.size > 0
    }
    hasSubscription(e, t) {
        let i = !1;
        try {
            i = this.getSubscription(e).topic === t
        } catch {}
        return i
    }
    reset() {
        this.cached = [],
        this.initialized = !0
    }
    onDisable() {
        this.values.length > 0 && (this.cached = this.values),
        this.subscriptions.clear(),
        this.topicMap.clear()
    }
    unsubscribeByTopic(e, t) {
        return l(this, null, function*() {
            let i = this.topicMap.get(e);
            yield Promise.all(i.map(r => l(this, null, function*() {
                return yield this.unsubscribeById(e, r, t)
            })))
        })
    }
    unsubscribeById(e, t, i) {
        return l(this, null, function*() {
            this.logger.debug("Unsubscribing Topic"),
            this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                    topic: e,
                    id: t,
                    opts: i
                }
            });
            try {
                let r = ii(i);
                yield this.restartToComplete({
                    topic: e,
                    id: t,
                    relay: r
                }),
                yield this.rpcUnsubscribe(e, t, r);
                let n = K("USER_DISCONNECTED", `${this.name}, ${e}`);
                yield this.onUnsubscribe(e, t, n),
                this.logger.debug("Successfully Unsubscribed Topic"),
                this.logger.trace({
                    type: "method",
                    method: "unsubscribe",
                    params: {
                        topic: e,
                        id: t,
                        opts: i
                    }
                })
            } catch (r) {
                throw this.logger.debug("Failed to Unsubscribe Topic"),
                this.logger.error(r),
                r
            }
        })
    }
    rpcSubscribe(e, t, i) {
        return l(this, null, function*() {
            var r;
            (!i || i?.transportType === ie.relay) && (yield this.restartToComplete({
                topic: e,
                id: e,
                relay: t
            }));
            let n = {
                method: ws(t.protocol).subscribe,
                params: {
                    topic: e
                }
            };
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
                type: "payload",
                direction: "outgoing",
                request: n
            });
            let o = (r = i?.internal) == null ? void 0 : r.throwOnFailedPublish;
            try {
                let a = yield this.getSubscriptionId(e);
                if (i?.transportType === ie.link_mode)
                    return setTimeout( () => {
                        (this.relayer.connected || this.relayer.connecting) && this.relayer.request(n).catch(p => this.logger.warn(p))
                    }
                    , (0,
                    k.toMiliseconds)(k.ONE_SECOND)),
                    a;
                let c = new Promise(p => l(this, null, function*() {
                    let u = d => {
                        d.topic === e && (this.events.removeListener(Me.created, u),
                        p(d.id))
                    }
                    ;
                    this.events.on(Me.created, u);
                    try {
                        let d = yield Ot(new Promise( (g, f) => {
                            this.relayer.request(n).catch(y => {
                                this.logger.warn(y, y?.message),
                                f(y)
                            }
                            ).then(g)
                        }
                        ), this.initialSubscribeTimeout, `Subscribing to ${e} failed, please try again`);
                        this.events.removeListener(Me.created, u),
                        p(d)
                    } catch {}
                }))
                  , h = yield Ot(c, this.subscribeTimeout, `Subscribing to ${e} failed, please try again`);
                if (!h && o)
                    throw new Error(`Subscribing to ${e} failed, please try again`);
                return h ? a : null
            } catch (a) {
                if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
                this.relayer.events.emit(ue.connection_stalled),
                o)
                    throw a
            }
            return null
        })
    }
    rpcBatchSubscribe(e) {
        return l(this, null, function*() {
            if (!e.length)
                return;
            let t = e[0].relay
              , i = {
                method: ws(t.protocol).batchSubscribe,
                params: {
                    topics: e.map(r => r.topic)
                }
            };
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
                type: "payload",
                direction: "outgoing",
                request: i
            });
            try {
                yield yield Ot(new Promise(r => {
                    this.relayer.request(i).catch(n => this.logger.warn(n)).then(r)
                }
                ), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again")
            } catch {
                this.relayer.events.emit(ue.connection_stalled)
            }
        })
    }
    rpcBatchFetchMessages(e) {
        return l(this, null, function*() {
            if (!e.length)
                return;
            let t = e[0].relay
              , i = {
                method: ws(t.protocol).batchFetchMessages,
                params: {
                    topics: e.map(n => n.topic)
                }
            };
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
                type: "payload",
                direction: "outgoing",
                request: i
            });
            let r;
            try {
                r = yield yield Ot(new Promise( (n, o) => {
                    this.relayer.request(i).catch(a => {
                        this.logger.warn(a),
                        o(a)
                    }
                    ).then(n)
                }
                ), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again")
            } catch {
                this.relayer.events.emit(ue.connection_stalled)
            }
            return r
        })
    }
    rpcUnsubscribe(e, t, i) {
        let r = {
            method: ws(i.protocol).unsubscribe,
            params: {
                topic: e,
                id: t
            }
        };
        return this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: r
        }),
        this.relayer.request(r)
    }
    onSubscribe(e, t) {
        this.setSubscription(e, un(ai({}, t), {
            id: e
        })),
        this.pending.delete(t.topic)
    }
    onBatchSubscribe(e) {
        e.length && e.forEach(t => {
            this.setSubscription(t.id, ai({}, t)),
            this.pending.delete(t.topic)
        }
        )
    }
    onUnsubscribe(e, t, i) {
        return l(this, null, function*() {
            this.events.removeAllListeners(t),
            this.hasSubscription(t, e) && this.deleteSubscription(t, i),
            yield this.relayer.messages.del(e)
        })
    }
    setRelayerSubscriptions(e) {
        return l(this, null, function*() {
            yield this.relayer.core.storage.setItem(this.storageKey, e)
        })
    }
    getRelayerSubscriptions() {
        return l(this, null, function*() {
            return yield this.relayer.core.storage.getItem(this.storageKey)
        })
    }
    setSubscription(e, t) {
        this.logger.debug("Setting subscription"),
        this.logger.trace({
            type: "method",
            method: "setSubscription",
            id: e,
            subscription: t
        }),
        this.addSubscription(e, t)
    }
    addSubscription(e, t) {
        this.subscriptions.set(e, ai({}, t)),
        this.topicMap.set(t.topic, e),
        this.events.emit(Me.created, t)
    }
    getSubscription(e) {
        this.logger.debug("Getting subscription"),
        this.logger.trace({
            type: "method",
            method: "getSubscription",
            id: e
        });
        let t = this.subscriptions.get(e);
        if (!t) {
            let {message: i} = C("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(i)
        }
        return t
    }
    deleteSubscription(e, t) {
        this.logger.debug("Deleting subscription"),
        this.logger.trace({
            type: "method",
            method: "deleteSubscription",
            id: e,
            reason: t
        });
        let i = this.getSubscription(e);
        this.subscriptions.delete(e),
        this.topicMap.delete(i.topic, e),
        this.events.emit(Me.deleted, un(ai({}, i), {
            reason: t
        }))
    }
    persist() {
        return l(this, null, function*() {
            yield this.setRelayerSubscriptions(this.values),
            this.events.emit(Me.sync)
        })
    }
    onRestart() {
        return l(this, null, function*() {
            if (this.cached.length) {
                let e = [...this.cached]
                  , t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                for (let i = 0; i < t; i++) {
                    let r = e.splice(0, this.batchSubscribeTopicsLimit);
                    yield this.batchSubscribe(r)
                }
            }
            this.events.emit(Me.resubscribed)
        })
    }
    restore() {
        return l(this, null, function*() {
            try {
                let e = yield this.getRelayerSubscriptions();
                if (typeof e > "u" || !e.length)
                    return;
                if (this.subscriptions.size) {
                    let {message: t} = C("RESTORE_WILL_OVERRIDE", this.name);
                    throw this.logger.error(t),
                    this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
                    new Error(t)
                }
                this.cached = e,
                this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),
                this.logger.trace({
                    type: "method",
                    method: "restore",
                    subscriptions: this.values
                })
            } catch (e) {
                this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
                this.logger.error(e)
            }
        })
    }
    batchSubscribe(e) {
        return l(this, null, function*() {
            e.length && (yield this.rpcBatchSubscribe(e),
            this.onBatchSubscribe(yield Promise.all(e.map(t => l(this, null, function*() {
                return un(ai({}, t), {
                    id: yield this.getSubscriptionId(t.topic)
                })
            })))))
        })
    }
    batchFetchMessages(e) {
        return l(this, null, function*() {
            if (!e.length)
                return;
            this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
            let t = yield this.rpcBatchFetchMessages(e);
            t && t.messages && (yield ka((0,
            k.toMiliseconds)(k.ONE_SECOND)),
            yield this.relayer.handleBatchMessageEvents(t.messages))
        })
    }
    onConnect() {
        return l(this, null, function*() {
            yield this.restart(),
            this.reset()
        })
    }
    onDisconnect() {
        this.onDisable()
    }
    isInitialized() {
        if (!this.initialized) {
            let {message: e} = C("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    restartToComplete(e) {
        return l(this, null, function*() {
            !this.relayer.connected && !this.relayer.connecting && (this.cached.push(e),
            yield this.relayer.transportOpen())
        })
    }
    getClientId() {
        return l(this, null, function*() {
            return this.clientId || (this.clientId = yield this.relayer.core.crypto.getClientId()),
            this.clientId
        })
    }
    getSubscriptionId(e) {
        return l(this, null, function*() {
            return Ke(e + (yield this.getClientId()))
        })
    }
}
  , Vf = Object.defineProperty
  , ih = Object.getOwnPropertySymbols
  , zf = Object.prototype.hasOwnProperty
  , Hf = Object.prototype.propertyIsEnumerable
  , Nn = (s, e, t) => e in s ? Vf(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , rh = (s, e) => {
    for (var t in e || (e = {}))
        zf.call(e, t) && Nn(s, t, e[t]);
    if (ih)
        for (var t of ih(e))
            Hf.call(e, t) && Nn(s, t, e[t]);
    return s
}
  , Y = (s, e, t) => Nn(s, typeof e != "symbol" ? e + "" : e, t)
  , qn = class extends Ui {
    constructor(e) {
        super(e),
        Y(this, "protocol", "wc"),
        Y(this, "version", 2),
        Y(this, "core"),
        Y(this, "logger"),
        Y(this, "events", new xt.EventEmitter),
        Y(this, "provider"),
        Y(this, "messages"),
        Y(this, "subscriber"),
        Y(this, "publisher"),
        Y(this, "name", Nd),
        Y(this, "transportExplicitlyClosed", !1),
        Y(this, "initialized", !1),
        Y(this, "connectionAttemptInProgress", !1),
        Y(this, "relayUrl"),
        Y(this, "projectId"),
        Y(this, "packageName"),
        Y(this, "bundleId"),
        Y(this, "hasExperiencedNetworkDisruption", !1),
        Y(this, "pingTimeout"),
        Y(this, "heartBeatTimeout", (0,
        k.toMiliseconds)(k.THIRTY_SECONDS + k.FIVE_SECONDS)),
        Y(this, "reconnectTimeout"),
        Y(this, "connectPromise"),
        Y(this, "reconnectInProgress", !1),
        Y(this, "requestsInFlight", []),
        Y(this, "connectTimeout", (0,
        k.toMiliseconds)(k.ONE_SECOND * 15)),
        Y(this, "request", t => l(this, null, function*() {
            var i, r;
            this.logger.debug("Publishing Request Payload");
            let n = t.id || Tt().toString();
            yield this.toEstablishConnection();
            try {
                this.logger.trace({
                    id: n,
                    method: t.method,
                    topic: (i = t.params) == null ? void 0 : i.topic
                }, "relayer.request - publishing...");
                let o = `${n}:${((r = t.params) == null ? void 0 : r.tag) || ""}`;
                this.requestsInFlight.push(o);
                let a = yield this.provider.request(t);
                return this.requestsInFlight = this.requestsInFlight.filter(c => c !== o),
                a
            } catch (o) {
                throw this.logger.debug(`Failed to Publish Request: ${n}`),
                o
            }
        })),
        Y(this, "resetPingTimeout", () => {
            Ws() && (clearTimeout(this.pingTimeout),
            this.pingTimeout = setTimeout( () => {
                var t, i, r, n;
                try {
                    this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."),
                    (n = (r = (i = (t = this.provider) == null ? void 0 : t.connection) == null ? void 0 : i.socket) == null ? void 0 : r.terminate) == null || n.call(r)
                } catch (o) {
                    this.logger.warn(o, o?.message)
                }
            }
            , this.heartBeatTimeout))
        }
        ),
        Y(this, "onPayloadHandler", t => {
            this.onProviderPayload(t),
            this.resetPingTimeout()
        }
        ),
        Y(this, "onConnectHandler", () => {
            this.logger.warn({}, "Relayer connected \u{1F6DC}"),
            this.startPingTimeout(),
            this.events.emit(ue.connect)
        }
        ),
        Y(this, "onDisconnectHandler", () => {
            this.logger.warn({}, "Relayer disconnected \u{1F6D1}"),
            this.requestsInFlight = [],
            this.onProviderDisconnect()
        }
        ),
        Y(this, "onProviderErrorHandler", t => {
            this.logger.fatal(`Fatal socket error: ${t.message}`),
            this.events.emit(ue.error, t),
            this.logger.fatal("Fatal socket error received, closing transport"),
            this.transportClose()
        }
        ),
        Y(this, "registerProviderListeners", () => {
            this.provider.on(Ge.payload, this.onPayloadHandler),
            this.provider.on(Ge.connect, this.onConnectHandler),
            this.provider.on(Ge.disconnect, this.onDisconnectHandler),
            this.provider.on(Ge.error, this.onProviderErrorHandler)
        }
        ),
        this.core = e.core,
        this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? we(e.logger, this.name) : (0,
        ss.default)(Bt({
            level: e.logger || Cd
        })),
        this.messages = new On(this.logger,e.core),
        this.subscriber = new Cn(this,this.logger),
        this.publisher = new xn(this,this.logger),
        this.relayUrl = e?.relayUrl || wh,
        this.projectId = e.projectId,
        Ra() ? this.packageName = jr() : xa() && (this.bundleId = jr()),
        this.provider = {}
    }
    init() {
        return l(this, null, function*() {
            if (this.logger.trace("Initialized"),
            this.registerEventListeners(),
            yield Promise.all([this.messages.init(), this.subscriber.init()]),
            this.initialized = !0,
            this.subscriber.hasAnyTopics)
                try {
                    yield this.transportOpen()
                } catch (e) {
                    this.logger.warn(e, e?.message)
                }
        })
    }
    get context() {
        return xe(this.logger)
    }
    get connected() {
        var e, t, i;
        return ((i = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : i.readyState) === 1 || !1
    }
    get connecting() {
        var e, t, i;
        return ((i = (t = (e = this.provider) == null ? void 0 : e.connection) == null ? void 0 : t.socket) == null ? void 0 : i.readyState) === 0 || this.connectPromise !== void 0 || !1
    }
    publish(e, t, i) {
        return l(this, null, function*() {
            this.isInitialized(),
            yield this.publisher.publish(e, t, i),
            yield this.recordMessageEvent({
                topic: e,
                message: t,
                publishedAt: Date.now(),
                transportType: ie.relay
            }, Ki.outbound)
        })
    }
    subscribe(e, t) {
        return l(this, null, function*() {
            var i, r, n;
            this.isInitialized(),
            (!(t != null && t.transportType) || t?.transportType === "relay") && (yield this.toEstablishConnection());
            let o = typeof ((i = t?.internal) == null ? void 0 : i.throwOnFailedPublish) > "u" ? !0 : (r = t?.internal) == null ? void 0 : r.throwOnFailedPublish, a = ((n = this.subscriber.topicMap.get(e)) == null ? void 0 : n[0]) || "", c, h = p => {
                p.topic === e && (this.subscriber.off(Me.created, h),
                c())
            }
            ;
            return yield Promise.all([new Promise(p => {
                c = p,
                this.subscriber.on(Me.created, h)
            }
            ), new Promise( (p, u) => l(this, null, function*() {
                a = (yield this.subscriber.subscribe(e, rh({
                    internal: {
                        throwOnFailedPublish: o
                    }
                }, t)).catch(d => {
                    o && u(d)
                }
                )) || a,
                p()
            }))]),
            a
        })
    }
    unsubscribe(e, t) {
        return l(this, null, function*() {
            this.isInitialized(),
            yield this.subscriber.unsubscribe(e, t)
        })
    }
    on(e, t) {
        this.events.on(e, t)
    }
    once(e, t) {
        this.events.once(e, t)
    }
    off(e, t) {
        this.events.off(e, t)
    }
    removeListener(e, t) {
        this.events.removeListener(e, t)
    }
    transportDisconnect() {
        return l(this, null, function*() {
            this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? yield Ot(this.provider.disconnect(), 2e3, "provider.disconnect()").catch( () => this.onProviderDisconnect()) : this.onProviderDisconnect()
        })
    }
    transportClose() {
        return l(this, null, function*() {
            this.transportExplicitlyClosed = !0,
            yield this.transportDisconnect()
        })
    }
    transportOpen(e) {
        return l(this, null, function*() {
            if (!this.subscriber.hasAnyTopics) {
                this.logger.warn("Starting WS connection skipped because the client has no topics to work with.");
                return
            }
            if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."),
            yield this.connectPromise,
            this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise( (t, i) => l(this, null, function*() {
                yield this.connect(e).then(t).catch(i).finally( () => {
                    this.connectPromise = void 0
                }
                )
            })),
            yield this.connectPromise),
            !this.connected)
                throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`)
        })
    }
    restartTransport(e) {
        return l(this, null, function*() {
            this.logger.debug({}, "Restarting transport..."),
            !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl,
            yield this.confirmOnlineStateOrThrow(),
            yield this.transportClose(),
            yield this.transportOpen())
        })
    }
    confirmOnlineStateOrThrow() {
        return l(this, null, function*() {
            if (!(yield hn()))
                throw new Error("No internet connection detected. Please restart your network and try again.")
        })
    }
    handleBatchMessageEvents(e) {
        return l(this, null, function*() {
            if (e?.length === 0) {
                this.logger.trace("Batch message events is empty. Ignoring...");
                return
            }
            let t = e.sort( (i, r) => i.publishedAt - r.publishedAt);
            this.logger.debug(`Batch of ${t.length} message events sorted`);
            for (let i of t)
                try {
                    yield this.onMessageEvent(i)
                } catch (r) {
                    this.logger.warn(r, "Error while processing batch message event: " + r?.message)
                }
            this.logger.trace(`Batch of ${t.length} message events processed`)
        })
    }
    onLinkMessageEvent(e, t) {
        return l(this, null, function*() {
            let {topic: i} = e;
            if (!t.sessionExists) {
                let r = oe(k.FIVE_MINUTES)
                  , n = {
                    topic: i,
                    expiry: r,
                    relay: {
                        protocol: "irn"
                    },
                    active: !1
                };
                yield this.core.pairing.pairings.set(i, n)
            }
            this.events.emit(ue.message, e),
            yield this.recordMessageEvent(e, Ki.inbound)
        })
    }
    connect(e) {
        return l(this, null, function*() {
            yield this.confirmOnlineStateOrThrow(),
            e && e !== this.relayUrl && (this.relayUrl = e,
            yield this.transportDisconnect()),
            this.connectionAttemptInProgress = !0,
            this.transportExplicitlyClosed = !1;
            let t = 1;
            for (; t < 6; ) {
                try {
                    if (this.transportExplicitlyClosed)
                        break;
                    this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${t}...`),
                    yield this.createProvider(),
                    yield new Promise( (i, r) => l(this, null, function*() {
                        let n = () => {
                            r(new Error("Connection interrupted while trying to subscribe"))
                        }
                        ;
                        this.provider.once(Ge.disconnect, n),
                        yield Ot(new Promise( (o, a) => {
                            this.provider.connect().then(o).catch(a)
                        }
                        ), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch(o => {
                            r(o)
                        }
                        ).finally( () => {
                            this.provider.off(Ge.disconnect, n),
                            clearTimeout(this.reconnectTimeout)
                        }
                        ),
                        yield new Promise( (o, a) => l(this, null, function*() {
                            let c = () => {
                                a(new Error("Connection interrupted while trying to subscribe"))
                            }
                            ;
                            this.provider.once(Ge.disconnect, c),
                            yield this.subscriber.start().then(o).catch(a).finally( () => {
                                this.provider.off(Ge.disconnect, c)
                            }
                            )
                        })),
                        this.hasExperiencedNetworkDisruption = !1,
                        i()
                    }))
                } catch (i) {
                    yield this.subscriber.stop();
                    let r = i;
                    this.logger.warn({}, r.message),
                    this.hasExperiencedNetworkDisruption = !0
                } finally {
                    this.connectionAttemptInProgress = !1
                }
                if (this.connected) {
                    this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${t}`);
                    break
                }
                yield new Promise(i => setTimeout(i, (0,
                k.toMiliseconds)(t * 1))),
                t++
            }
        })
    }
    startPingTimeout() {
        var e, t, i, r, n;
        if (Ws())
            try {
                (t = (e = this.provider) == null ? void 0 : e.connection) != null && t.socket && ((n = (r = (i = this.provider) == null ? void 0 : i.connection) == null ? void 0 : r.socket) == null || n.on("ping", () => {
                    this.resetPingTimeout()
                }
                )),
                this.resetPingTimeout()
            } catch (o) {
                this.logger.warn(o, o?.message)
            }
    }
    createProvider() {
        return l(this, null, function*() {
            this.provider.connection && this.unregisterProviderListeners();
            let e = yield this.core.crypto.signJWT(this.relayUrl);
            this.provider = new Ae(new Mo(Aa({
                sdkVersion: gn,
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: e,
                useOnCloseEvent: !0,
                bundleId: this.bundleId,
                packageName: this.packageName
            }))),
            this.registerProviderListeners()
        })
    }
    recordMessageEvent(e, t) {
        return l(this, null, function*() {
            let {topic: i, message: r} = e;
            yield this.messages.set(i, r, t)
        })
    }
    shouldIgnoreMessageEvent(e) {
        return l(this, null, function*() {
            let {topic: t, message: i} = e;
            if (!i || i.length === 0)
                return this.logger.warn(`Ignoring invalid/empty message: ${i}`),
                !0;
            if (!(yield this.subscriber.isKnownTopic(t)))
                return this.logger.warn(`Ignoring message for unknown topic ${t}`),
                !0;
            let r = this.messages.has(t, i);
            return r && this.logger.warn(`Ignoring duplicate message: ${i}`),
            r
        })
    }
    onProviderPayload(e) {
        return l(this, null, function*() {
            if (this.logger.debug("Incoming Relay Payload"),
            this.logger.trace({
                type: "payload",
                direction: "incoming",
                payload: e
            }),
            Ls(e)) {
                if (!e.method.endsWith(qd))
                    return;
                let t = e.params
                  , {topic: i, message: r, publishedAt: n, attestation: o} = t.data
                  , a = {
                    topic: i,
                    message: r,
                    publishedAt: n,
                    transportType: ie.relay,
                    attestation: o
                };
                this.logger.debug("Emitting Relayer Payload"),
                this.logger.trace(rh({
                    type: "event",
                    event: t.id
                }, a)),
                this.events.emit(t.id, a),
                yield this.acknowledgePayload(e),
                yield this.onMessageEvent(a)
            } else
                $s(e) && this.events.emit(ue.message_ack, e)
        })
    }
    onMessageEvent(e) {
        return l(this, null, function*() {
            (yield this.shouldIgnoreMessageEvent(e)) || (yield this.recordMessageEvent(e, Ki.inbound),
            this.events.emit(ue.message, e))
        })
    }
    acknowledgePayload(e) {
        return l(this, null, function*() {
            let t = Vt(e.id, !0);
            yield this.provider.connection.send(t)
        })
    }
    unregisterProviderListeners() {
        this.provider.off(Ge.payload, this.onPayloadHandler),
        this.provider.off(Ge.connect, this.onConnectHandler),
        this.provider.off(Ge.disconnect, this.onDisconnectHandler),
        this.provider.off(Ge.error, this.onProviderErrorHandler),
        clearTimeout(this.pingTimeout)
    }
    registerEventListeners() {
        return l(this, null, function*() {
            let e = yield hn();
            $c(t => l(this, null, function*() {
                e !== t && (e = t,
                t ? yield this.transportOpen().catch(i => this.logger.error(i, i?.message)) : (this.hasExperiencedNetworkDisruption = !0,
                yield this.transportDisconnect(),
                this.transportExplicitlyClosed = !1))
            })),
            this.core.heartbeat.on(Mt.pulse, () => l(this, null, function*() {
                if (!this.transportExplicitlyClosed && !this.connected && Mc())
                    try {
                        yield this.confirmOnlineStateOrThrow(),
                        yield this.transportOpen()
                    } catch (t) {
                        this.logger.warn(t, t?.message)
                    }
            }))
        })
    }
    onProviderDisconnect() {
        return l(this, null, function*() {
            clearTimeout(this.pingTimeout),
            this.events.emit(ue.disconnect),
            this.connectionAttemptInProgress = !1,
            !this.reconnectInProgress && (this.reconnectInProgress = !0,
            yield this.subscriber.stop(),
            this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout( () => l(this, null, function*() {
                yield this.transportOpen().catch(e => this.logger.error(e, e?.message)),
                this.reconnectTimeout = void 0,
                this.reconnectInProgress = !1
            }), (0,
            k.toMiliseconds)(Dd)))))
        })
    }
    isInitialized() {
        if (!this.initialized) {
            let {message: e} = C("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    toEstablishConnection() {
        return l(this, null, function*() {
            if (yield this.confirmOnlineStateOrThrow(),
            !this.connected) {
                if (this.connectPromise) {
                    yield this.connectPromise;
                    return
                }
                yield this.connect()
            }
        })
    }
}
;
function Kf() {}
function nh(s) {
    if (!s || typeof s != "object")
        return !1;
    let e = Object.getPrototypeOf(s);
    return e === null || e === Object.prototype || Object.getPrototypeOf(e) === null ? Object.prototype.toString.call(s) === "[object Object]" : !1
}
function oh(s) {
    return Object.getOwnPropertySymbols(s).filter(e => Object.prototype.propertyIsEnumerable.call(s, e))
}
function ah(s) {
    return s == null ? s === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(s)
}
var Gf = "[object RegExp]"
  , Wf = "[object String]"
  , Yf = "[object Number]"
  , Jf = "[object Boolean]"
  , ch = "[object Arguments]"
  , Qf = "[object Symbol]"
  , Xf = "[object Date]"
  , Zf = "[object Map]"
  , em = "[object Set]"
  , tm = "[object Array]"
  , sm = "[object Function]"
  , im = "[object ArrayBuffer]"
  , dn = "[object Object]"
  , rm = "[object Error]"
  , nm = "[object DataView]"
  , om = "[object Uint8Array]"
  , am = "[object Uint8ClampedArray]"
  , cm = "[object Uint16Array]"
  , hm = "[object Uint32Array]"
  , lm = "[object BigUint64Array]"
  , pm = "[object Int8Array]"
  , um = "[object Int16Array]"
  , dm = "[object Int32Array]"
  , gm = "[object BigInt64Array]"
  , fm = "[object Float32Array]"
  , mm = "[object Float64Array]";
function ym(s, e) {
    return s === e || Number.isNaN(s) && Number.isNaN(e)
}
function wm(s, e, t) {
    return hi(s, e, void 0, void 0, void 0, void 0, t)
}
function hi(s, e, t, i, r, n, o) {
    let a = o(s, e, t, i, r, n);
    if (a !== void 0)
        return a;
    if (typeof s == typeof e)
        switch (typeof s) {
        case "bigint":
        case "string":
        case "boolean":
        case "symbol":
        case "undefined":
            return s === e;
        case "number":
            return s === e || Object.is(s, e);
        case "function":
            return s === e;
        case "object":
            return li(s, e, n, o)
        }
    return li(s, e, n, o)
}
function li(s, e, t, i) {
    if (Object.is(s, e))
        return !0;
    let r = ah(s)
      , n = ah(e);
    if (r === ch && (r = dn),
    n === ch && (n = dn),
    r !== n)
        return !1;
    switch (r) {
    case Wf:
        return s.toString() === e.toString();
    case Yf:
        {
            let c = s.valueOf()
              , h = e.valueOf();
            return ym(c, h)
        }
    case Jf:
    case Xf:
    case Qf:
        return Object.is(s.valueOf(), e.valueOf());
    case Gf:
        return s.source === e.source && s.flags === e.flags;
    case sm:
        return s === e
    }
    t = t ?? new Map;
    let o = t.get(s)
      , a = t.get(e);
    if (o != null && a != null)
        return o === e;
    t.set(s, e),
    t.set(e, s);
    try {
        switch (r) {
        case Zf:
            {
                if (s.size !== e.size)
                    return !1;
                for (let[c,h] of s.entries())
                    if (!e.has(c) || !hi(h, e.get(c), c, s, e, t, i))
                        return !1;
                return !0
            }
        case em:
            {
                if (s.size !== e.size)
                    return !1;
                let c = Array.from(s.values())
                  , h = Array.from(e.values());
                for (let p = 0; p < c.length; p++) {
                    let u = c[p]
                      , d = h.findIndex(g => hi(u, g, void 0, s, e, t, i));
                    if (d === -1)
                        return !1;
                    h.splice(d, 1)
                }
                return !0
            }
        case tm:
        case om:
        case am:
        case cm:
        case hm:
        case lm:
        case pm:
        case um:
        case dm:
        case gm:
        case fm:
        case mm:
            {
                if (typeof Buffer < "u" && Buffer.isBuffer(s) !== Buffer.isBuffer(e) || s.length !== e.length)
                    return !1;
                for (let c = 0; c < s.length; c++)
                    if (!hi(s[c], e[c], c, s, e, t, i))
                        return !1;
                return !0
            }
        case im:
            return s.byteLength !== e.byteLength ? !1 : li(new Uint8Array(s), new Uint8Array(e), t, i);
        case nm:
            return s.byteLength !== e.byteLength || s.byteOffset !== e.byteOffset ? !1 : li(new Uint8Array(s), new Uint8Array(e), t, i);
        case rm:
            return s.name === e.name && s.message === e.message;
        case dn:
            {
                if (!(li(s.constructor, e.constructor, t, i) || nh(s) && nh(e)))
                    return !1;
                let c = [...Object.keys(s), ...oh(s)]
                  , h = [...Object.keys(e), ...oh(e)];
                if (c.length !== h.length)
                    return !1;
                for (let p = 0; p < c.length; p++) {
                    let u = c[p]
                      , d = s[u];
                    if (!Object.hasOwn(e, u))
                        return !1;
                    let g = e[u];
                    if (!hi(d, g, u, s, e, t, i))
                        return !1
                }
                return !0
            }
        default:
            return !1
        }
    } finally {
        t.delete(s),
        t.delete(e)
    }
}
function bm(s, e) {
    return wm(s, e, Kf)
}
var vm = Object.defineProperty
  , hh = Object.getOwnPropertySymbols
  , Em = Object.prototype.hasOwnProperty
  , Im = Object.prototype.propertyIsEnumerable
  , Dn = (s, e, t) => e in s ? vm(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , lh = (s, e) => {
    for (var t in e || (e = {}))
        Em.call(e, t) && Dn(s, t, e[t]);
    if (hh)
        for (var t of hh(e))
            Im.call(e, t) && Dn(s, t, e[t]);
    return s
}
  , De = (s, e, t) => Dn(s, typeof e != "symbol" ? e + "" : e, t)
  , gt = class extends ki {
    constructor(e, t, i, r=dt, n=void 0) {
        super(e, t, i, r),
        this.core = e,
        this.logger = t,
        this.name = i,
        De(this, "map", new Map),
        De(this, "version", Fd),
        De(this, "cached", []),
        De(this, "initialized", !1),
        De(this, "getKey"),
        De(this, "storagePrefix", dt),
        De(this, "recentlyDeleted", []),
        De(this, "recentlyDeletedLimit", 200),
        De(this, "init", () => l(this, null, function*() {
            this.initialized || (this.logger.trace("Initialized"),
            yield this.restore(),
            this.cached.forEach(o => {
                this.getKey && o !== null && !pe(o) ? this.map.set(this.getKey(o), o) : Oc(o) ? this.map.set(o.id, o) : Rc(o) && this.map.set(o.topic, o)
            }
            ),
            this.cached = [],
            this.initialized = !0)
        })),
        De(this, "set", (o, a) => l(this, null, function*() {
            this.isInitialized(),
            this.map.has(o) ? yield this.update(o, a) : (this.logger.debug("Setting value"),
            this.logger.trace({
                type: "method",
                method: "set",
                key: o,
                value: a
            }),
            this.map.set(o, a),
            yield this.persist())
        })),
        De(this, "get", o => (this.isInitialized(),
        this.logger.debug("Getting value"),
        this.logger.trace({
            type: "method",
            method: "get",
            key: o
        }),
        this.getData(o))),
        De(this, "getAll", o => (this.isInitialized(),
        o ? this.values.filter(a => Object.keys(o).every(c => bm(a[c], o[c]))) : this.values)),
        De(this, "update", (o, a) => l(this, null, function*() {
            this.isInitialized(),
            this.logger.debug("Updating value"),
            this.logger.trace({
                type: "method",
                method: "update",
                key: o,
                update: a
            });
            let c = lh(lh({}, this.getData(o)), a);
            this.map.set(o, c),
            yield this.persist()
        })),
        De(this, "delete", (o, a) => l(this, null, function*() {
            this.isInitialized(),
            this.map.has(o) && (this.logger.debug("Deleting value"),
            this.logger.trace({
                type: "method",
                method: "delete",
                key: o,
                reason: a
            }),
            this.map.delete(o),
            this.addToRecentlyDeleted(o),
            yield this.persist())
        })),
        this.logger = we(t, this.name),
        this.storagePrefix = r,
        this.getKey = n
    }
    get context() {
        return xe(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.map.size
    }
    get keys() {
        return Array.from(this.map.keys())
    }
    get values() {
        return Array.from(this.map.values())
    }
    addToRecentlyDeleted(e) {
        this.recentlyDeleted.push(e),
        this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2)
    }
    setDataStore(e) {
        return l(this, null, function*() {
            yield this.core.storage.setItem(this.storageKey, e)
        })
    }
    getDataStore() {
        return l(this, null, function*() {
            return yield this.core.storage.getItem(this.storageKey)
        })
    }
    getData(e) {
        let t = this.map.get(e);
        if (!t) {
            if (this.recentlyDeleted.includes(e)) {
                let {message: r} = C("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
                throw this.logger.error(r),
                new Error(r)
            }
            let {message: i} = C("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.error(i),
            new Error(i)
        }
        return t
    }
    persist() {
        return l(this, null, function*() {
            yield this.setDataStore(this.values)
        })
    }
    restore() {
        return l(this, null, function*() {
            try {
                let e = yield this.getDataStore();
                if (typeof e > "u" || !e.length)
                    return;
                if (this.map.size) {
                    let {message: t} = C("RESTORE_WILL_OVERRIDE", this.name);
                    throw this.logger.error(t),
                    new Error(t)
                }
                this.cached = e,
                this.logger.debug(`Successfully Restored value for ${this.name}`),
                this.logger.trace({
                    type: "method",
                    method: "restore",
                    value: this.values
                })
            } catch (e) {
                this.logger.debug(`Failed to Restore value for ${this.name}`),
                this.logger.error(e)
            }
        })
    }
    isInitialized() {
        if (!this.initialized) {
            let {message: e} = C("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
  , _m = Object.defineProperty
  , Pm = (s, e, t) => e in s ? _m(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , z = (s, e, t) => Pm(s, typeof e != "symbol" ? e + "" : e, t)
  , Fn = class {
    constructor(e, t) {
        this.core = e,
        this.logger = t,
        z(this, "name", Ld),
        z(this, "version", $d),
        z(this, "events", new xt.default),
        z(this, "pairings"),
        z(this, "initialized", !1),
        z(this, "storagePrefix", dt),
        z(this, "ignoredPayloadTypes", [st]),
        z(this, "registeredMethods", []),
        z(this, "init", () => l(this, null, function*() {
            this.initialized || (yield this.pairings.init(),
            yield this.cleanup(),
            this.registerRelayerEvents(),
            this.registerExpirerEvents(),
            this.initialized = !0,
            this.logger.trace("Initialized"))
        })),
        z(this, "register", ({methods: i}) => {
            this.isInitialized(),
            this.registeredMethods = [...new Set([...this.registeredMethods, ...i])]
        }
        ),
        z(this, "create", i => l(this, null, function*() {
            this.isInitialized();
            let r = Ai()
              , n = yield this.core.crypto.setSymKey(r)
              , o = oe(k.FIVE_MINUTES)
              , a = {
                protocol: zn
            }
              , c = {
                topic: n,
                expiry: o,
                relay: a,
                active: !1,
                methods: i?.methods
            }
              , h = sn({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: n,
                symKey: r,
                relay: a,
                expiryTimestamp: o,
                methods: i?.methods
            });
            return this.events.emit(Ut.create, c),
            this.core.expirer.set(n, o),
            yield this.pairings.set(n, c),
            yield this.core.relayer.subscribe(n, {
                transportType: i?.transportType
            }),
            {
                topic: n,
                uri: h
            }
        })),
        z(this, "pair", i => l(this, null, function*() {
            this.isInitialized();
            let r = this.core.eventClient.createEvent({
                properties: {
                    topic: i?.uri,
                    trace: [nt.pairing_started]
                }
            });
            this.isValidPair(i, r);
            let {topic: n, symKey: o, relay: a, expiryTimestamp: c, methods: h} = tn(i.uri);
            r.props.properties.topic = n,
            r.addTrace(nt.pairing_uri_validation_success),
            r.addTrace(nt.pairing_uri_not_expired);
            let p;
            if (this.pairings.keys.includes(n)) {
                if (p = this.pairings.get(n),
                r.addTrace(nt.existing_pairing),
                p.active)
                    throw r.setError(ut.active_pairing_already_exists),
                    new Error(`Pairing already exists: ${n}. Please try again with a new connection URI.`);
                r.addTrace(nt.pairing_not_expired)
            }
            let u = c || oe(k.FIVE_MINUTES)
              , d = {
                topic: n,
                relay: a,
                expiry: u,
                active: !1,
                methods: h
            };
            this.core.expirer.set(n, u),
            yield this.pairings.set(n, d),
            r.addTrace(nt.store_new_pairing),
            i.activatePairing && (yield this.activate({
                topic: n
            })),
            this.events.emit(Ut.create, d),
            r.addTrace(nt.emit_inactive_pairing),
            this.core.crypto.keychain.has(n) || (yield this.core.crypto.setSymKey(o, n)),
            r.addTrace(nt.subscribing_pairing_topic);
            try {
                yield this.core.relayer.confirmOnlineStateOrThrow()
            } catch {
                r.setError(ut.no_internet_connection)
            }
            try {
                yield this.core.relayer.subscribe(n, {
                    relay: a
                })
            } catch (g) {
                throw r.setError(ut.subscribe_pairing_topic_failure),
                g
            }
            return r.addTrace(nt.subscribe_pairing_topic_success),
            d
        })),
        z(this, "activate", r => l(this, [r], function*({topic: i}) {
            this.isInitialized();
            let n = oe(k.FIVE_MINUTES);
            this.core.expirer.set(i, n),
            yield this.pairings.update(i, {
                active: !0,
                expiry: n
            })
        })),
        z(this, "ping", i => l(this, null, function*() {
            this.isInitialized(),
            yield this.isValidPing(i),
            this.logger.warn("ping() is deprecated and will be removed in the next major release.");
            let {topic: r} = i;
            if (this.pairings.keys.includes(r)) {
                let n = yield this.sendRequest(r, "wc_pairingPing", {})
                  , {done: o, resolve: a, reject: c} = St();
                this.events.once(W("pairing_ping", n), ({error: h}) => {
                    h ? c(h) : a()
                }
                ),
                yield o()
            }
        })),
        z(this, "updateExpiry", n => l(this, [n], function*({topic: i, expiry: r}) {
            this.isInitialized(),
            yield this.pairings.update(i, {
                expiry: r
            })
        })),
        z(this, "updateMetadata", n => l(this, [n], function*({topic: i, metadata: r}) {
            this.isInitialized(),
            yield this.pairings.update(i, {
                peerMetadata: r
            })
        })),
        z(this, "getPairings", () => (this.isInitialized(),
        this.pairings.values)),
        z(this, "disconnect", i => l(this, null, function*() {
            this.isInitialized(),
            yield this.isValidDisconnect(i);
            let {topic: r} = i;
            this.pairings.keys.includes(r) && (yield this.sendRequest(r, "wc_pairingDelete", K("USER_DISCONNECTED")),
            yield this.deletePairing(r))
        })),
        z(this, "formatUriFromPairing", i => {
            this.isInitialized();
            let {topic: r, relay: n, expiry: o, methods: a} = i
              , c = this.core.crypto.keychain.get(r);
            return sn({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: r,
                symKey: c,
                relay: n,
                expiryTimestamp: o,
                methods: a
            })
        }
        ),
        z(this, "sendRequest", (i, r, n) => l(this, null, function*() {
            let o = at(r, n)
              , a = yield this.core.crypto.encode(i, o)
              , c = oi[r].req;
            return this.core.history.set(i, o),
            this.core.relayer.publish(i, a, c),
            o.id
        })),
        z(this, "sendResult", (i, r, n) => l(this, null, function*() {
            let o = Vt(i, n)
              , a = yield this.core.crypto.encode(r, o)
              , c = (yield this.core.history.get(r, i)).request.method
              , h = oi[c].res;
            yield this.core.relayer.publish(r, a, h),
            yield this.core.history.resolve(o)
        })),
        z(this, "sendError", (i, r, n) => l(this, null, function*() {
            let o = fi(i, n)
              , a = yield this.core.crypto.encode(r, o)
              , c = (yield this.core.history.get(r, i)).request.method
              , h = oi[c] ? oi[c].res : oi.unregistered_method.res;
            yield this.core.relayer.publish(r, a, h),
            yield this.core.history.resolve(o)
        })),
        z(this, "deletePairing", (i, r) => l(this, null, function*() {
            yield this.core.relayer.unsubscribe(i),
            yield Promise.all([this.pairings.delete(i, K("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), r ? Promise.resolve() : this.core.expirer.del(i)])
        })),
        z(this, "cleanup", () => l(this, null, function*() {
            let i = this.pairings.getAll().filter(r => ht(r.expiry));
            yield Promise.all(i.map(r => this.deletePairing(r.topic)))
        })),
        z(this, "onRelayEventRequest", i => l(this, null, function*() {
            let {topic: r, payload: n} = i;
            switch (n.method) {
            case "wc_pairingPing":
                return yield this.onPairingPingRequest(r, n);
            case "wc_pairingDelete":
                return yield this.onPairingDeleteRequest(r, n);
            default:
                return yield this.onUnknownRpcMethodRequest(r, n)
            }
        })),
        z(this, "onRelayEventResponse", i => l(this, null, function*() {
            let {topic: r, payload: n} = i
              , o = (yield this.core.history.get(r, n.id)).request.method;
            switch (o) {
            case "wc_pairingPing":
                return this.onPairingPingResponse(r, n);
            default:
                return this.onUnknownRpcMethodResponse(o)
            }
        })),
        z(this, "onPairingPingRequest", (i, r) => l(this, null, function*() {
            let {id: n} = r;
            try {
                this.isValidPing({
                    topic: i
                }),
                yield this.sendResult(n, i, !0),
                this.events.emit(Ut.ping, {
                    id: n,
                    topic: i
                })
            } catch (o) {
                yield this.sendError(n, i, o),
                this.logger.error(o)
            }
        })),
        z(this, "onPairingPingResponse", (i, r) => {
            let {id: n} = r;
            setTimeout( () => {
                Xe(r) ? this.events.emit(W("pairing_ping", n), {}) : He(r) && this.events.emit(W("pairing_ping", n), {
                    error: r.error
                })
            }
            , 500)
        }
        ),
        z(this, "onPairingDeleteRequest", (i, r) => l(this, null, function*() {
            let {id: n} = r;
            try {
                this.isValidDisconnect({
                    topic: i
                }),
                yield this.deletePairing(i),
                this.events.emit(Ut.delete, {
                    id: n,
                    topic: i
                })
            } catch (o) {
                yield this.sendError(n, i, o),
                this.logger.error(o)
            }
        })),
        z(this, "onUnknownRpcMethodRequest", (i, r) => l(this, null, function*() {
            let {id: n, method: o} = r;
            try {
                if (this.registeredMethods.includes(o))
                    return;
                let a = K("WC_METHOD_UNSUPPORTED", o);
                yield this.sendError(n, i, a),
                this.logger.error(a)
            } catch (a) {
                yield this.sendError(n, i, a),
                this.logger.error(a)
            }
        })),
        z(this, "onUnknownRpcMethodResponse", i => {
            this.registeredMethods.includes(i) || this.logger.error(K("WC_METHOD_UNSUPPORTED", i))
        }
        ),
        z(this, "isValidPair", (i, r) => {
            var n;
            if (!Oe(i)) {
                let {message: a} = C("MISSING_OR_INVALID", `pair() params: ${i}`);
                throw r.setError(ut.malformed_pairing_uri),
                new Error(a)
            }
            if (!Sc(i.uri)) {
                let {message: a} = C("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
                throw r.setError(ut.malformed_pairing_uri),
                new Error(a)
            }
            let o = tn(i?.uri);
            if (!((n = o?.relay) != null && n.protocol)) {
                let {message: a} = C("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                throw r.setError(ut.malformed_pairing_uri),
                new Error(a)
            }
            if (!(o != null && o.symKey)) {
                let {message: a} = C("MISSING_OR_INVALID", "pair() uri#symKey");
                throw r.setError(ut.malformed_pairing_uri),
                new Error(a)
            }
            if (o != null && o.expiryTimestamp && (0,
            k.toMiliseconds)(o?.expiryTimestamp) < Date.now()) {
                r.setError(ut.pairing_expired);
                let {message: a} = C("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
                throw new Error(a)
            }
        }
        ),
        z(this, "isValidPing", i => l(this, null, function*() {
            if (!Oe(i)) {
                let {message: n} = C("MISSING_OR_INVALID", `ping() params: ${i}`);
                throw new Error(n)
            }
            let {topic: r} = i;
            yield this.isValidPairingTopic(r)
        })),
        z(this, "isValidDisconnect", i => l(this, null, function*() {
            if (!Oe(i)) {
                let {message: n} = C("MISSING_OR_INVALID", `disconnect() params: ${i}`);
                throw new Error(n)
            }
            let {topic: r} = i;
            yield this.isValidPairingTopic(r)
        })),
        z(this, "isValidPairingTopic", i => l(this, null, function*() {
            if (!re(i, !1)) {
                let {message: r} = C("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
                throw new Error(r)
            }
            if (!this.pairings.keys.includes(i)) {
                let {message: r} = C("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
                throw new Error(r)
            }
            if (ht(this.pairings.get(i).expiry)) {
                yield this.deletePairing(i);
                let {message: r} = C("EXPIRED", `pairing topic: ${i}`);
                throw new Error(r)
            }
        })),
        this.core = e,
        this.logger = we(t, this.name),
        this.pairings = new gt(this.core,this.logger,this.name,this.storagePrefix)
    }
    get context() {
        return xe(this.logger)
    }
    isInitialized() {
        if (!this.initialized) {
            let {message: e} = C("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    registerRelayerEvents() {
        this.core.relayer.on(ue.message, e => l(this, null, function*() {
            let {topic: t, message: i, transportType: r} = e;
            if (this.pairings.keys.includes(t) && r !== ie.link_mode && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i)))
                try {
                    let n = yield this.core.crypto.decode(t, i);
                    Ls(n) ? (this.core.history.set(t, n),
                    yield this.onRelayEventRequest({
                        topic: t,
                        payload: n
                    })) : $s(n) && (yield this.core.history.resolve(n),
                    yield this.onRelayEventResponse({
                        topic: t,
                        payload: n
                    }),
                    this.core.history.delete(t, n.id)),
                    yield this.core.relayer.messages.ack(t, i)
                } catch (n) {
                    this.logger.error(n)
                }
        }))
    }
    registerExpirerEvents() {
        this.core.expirer.on(Be.expired, e => l(this, null, function*() {
            let {topic: t} = _i(e.target);
            t && this.pairings.keys.includes(t) && (yield this.deletePairing(t, !0),
            this.events.emit(Ut.expire, {
                topic: t
            }))
        }))
    }
}
  , Sm = Object.defineProperty
  , Om = (s, e, t) => e in s ? Sm(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Ee = (s, e, t) => Om(s, typeof e != "symbol" ? e + "" : e, t)
  , Un = class extends qi {
    constructor(e, t) {
        super(e, t),
        this.core = e,
        this.logger = t,
        Ee(this, "records", new Map),
        Ee(this, "events", new xt.EventEmitter),
        Ee(this, "name", Md),
        Ee(this, "version", Bd),
        Ee(this, "cached", []),
        Ee(this, "initialized", !1),
        Ee(this, "storagePrefix", dt),
        Ee(this, "init", () => l(this, null, function*() {
            this.initialized || (this.logger.trace("Initialized"),
            yield this.restore(),
            this.cached.forEach(i => this.records.set(i.id, i)),
            this.cached = [],
            this.registerEventListeners(),
            this.initialized = !0)
        })),
        Ee(this, "set", (i, r, n) => {
            if (this.isInitialized(),
            this.logger.debug("Setting JSON-RPC request history record"),
            this.logger.trace({
                type: "method",
                method: "set",
                topic: i,
                request: r,
                chainId: n
            }),
            this.records.has(r.id))
                return;
            let o = {
                id: r.id,
                topic: i,
                request: {
                    method: r.method,
                    params: r.params || null
                },
                chainId: n,
                expiry: oe(k.THIRTY_DAYS)
            };
            this.records.set(o.id, o),
            this.persist(),
            this.events.emit(it.created, o)
        }
        ),
        Ee(this, "resolve", i => l(this, null, function*() {
            if (this.isInitialized(),
            this.logger.debug("Updating JSON-RPC response history record"),
            this.logger.trace({
                type: "method",
                method: "update",
                response: i
            }),
            !this.records.has(i.id))
                return;
            let r = yield this.getRecord(i.id);
            typeof r.response > "u" && (r.response = He(i) ? {
                error: i.error
            } : {
                result: i.result
            },
            this.records.set(r.id, r),
            this.persist(),
            this.events.emit(it.updated, r))
        })),
        Ee(this, "get", (i, r) => l(this, null, function*() {
            return this.isInitialized(),
            this.logger.debug("Getting record"),
            this.logger.trace({
                type: "method",
                method: "get",
                topic: i,
                id: r
            }),
            yield this.getRecord(r)
        })),
        Ee(this, "delete", (i, r) => {
            this.isInitialized(),
            this.logger.debug("Deleting record"),
            this.logger.trace({
                type: "method",
                method: "delete",
                id: r
            }),
            this.values.forEach(n => {
                if (n.topic === i) {
                    if (typeof r < "u" && n.id !== r)
                        return;
                    this.records.delete(n.id),
                    this.events.emit(it.deleted, n)
                }
            }
            ),
            this.persist()
        }
        ),
        Ee(this, "exists", (i, r) => l(this, null, function*() {
            return this.isInitialized(),
            this.records.has(r) ? (yield this.getRecord(r)).topic === i : !1
        })),
        Ee(this, "on", (i, r) => {
            this.events.on(i, r)
        }
        ),
        Ee(this, "once", (i, r) => {
            this.events.once(i, r)
        }
        ),
        Ee(this, "off", (i, r) => {
            this.events.off(i, r)
        }
        ),
        Ee(this, "removeListener", (i, r) => {
            this.events.removeListener(i, r)
        }
        ),
        this.logger = we(t, this.name)
    }
    get context() {
        return xe(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get size() {
        return this.records.size
    }
    get keys() {
        return Array.from(this.records.keys())
    }
    get values() {
        return Array.from(this.records.values())
    }
    get pending() {
        let e = [];
        return this.values.forEach(t => {
            if (typeof t.response < "u")
                return;
            let i = {
                topic: t.topic,
                request: at(t.request.method, t.request.params, t.id),
                chainId: t.chainId
            };
            return e.push(i)
        }
        ),
        e
    }
    setJsonRpcRecords(e) {
        return l(this, null, function*() {
            yield this.core.storage.setItem(this.storageKey, e)
        })
    }
    getJsonRpcRecords() {
        return l(this, null, function*() {
            return yield this.core.storage.getItem(this.storageKey)
        })
    }
    getRecord(e) {
        this.isInitialized();
        let t = this.records.get(e);
        if (!t) {
            let {message: i} = C("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(i)
        }
        return t
    }
    persist() {
        return l(this, null, function*() {
            yield this.setJsonRpcRecords(this.values),
            this.events.emit(it.sync)
        })
    }
    restore() {
        return l(this, null, function*() {
            try {
                let e = yield this.getJsonRpcRecords();
                if (typeof e > "u" || !e.length)
                    return;
                if (this.records.size) {
                    let {message: t} = C("RESTORE_WILL_OVERRIDE", this.name);
                    throw this.logger.error(t),
                    new Error(t)
                }
                this.cached = e,
                this.logger.debug(`Successfully Restored records for ${this.name}`),
                this.logger.trace({
                    type: "method",
                    method: "restore",
                    records: this.values
                })
            } catch (e) {
                this.logger.debug(`Failed to Restore records for ${this.name}`),
                this.logger.error(e)
            }
        })
    }
    registerEventListeners() {
        this.events.on(it.created, e => {
            let t = it.created;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                record: e
            })
        }
        ),
        this.events.on(it.updated, e => {
            let t = it.updated;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                record: e
            })
        }
        ),
        this.events.on(it.deleted, e => {
            let t = it.deleted;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                record: e
            })
        }
        ),
        this.core.heartbeat.on(Mt.pulse, () => {
            this.cleanup()
        }
        )
    }
    cleanup() {
        try {
            this.isInitialized();
            let e = !1;
            this.records.forEach(t => {
                (0,
                k.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`),
                this.records.delete(t.id),
                this.events.emit(it.deleted, t, !1),
                e = !0)
            }
            ),
            e && this.persist()
        } catch (e) {
            this.logger.warn(e)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            let {message: e} = C("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
  , Rm = Object.defineProperty
  , xm = (s, e, t) => e in s ? Rm(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Re = (s, e, t) => xm(s, typeof e != "symbol" ? e + "" : e, t)
  , kn = class extends Li {
    constructor(e, t) {
        super(e, t),
        this.core = e,
        this.logger = t,
        Re(this, "expirations", new Map),
        Re(this, "events", new xt.EventEmitter),
        Re(this, "name", Vd),
        Re(this, "version", zd),
        Re(this, "cached", []),
        Re(this, "initialized", !1),
        Re(this, "storagePrefix", dt),
        Re(this, "init", () => l(this, null, function*() {
            this.initialized || (this.logger.trace("Initialized"),
            yield this.restore(),
            this.cached.forEach(i => this.expirations.set(i.target, i)),
            this.cached = [],
            this.registerEventListeners(),
            this.initialized = !0)
        })),
        Re(this, "has", i => {
            try {
                let r = this.formatTarget(i);
                return typeof this.getExpiration(r) < "u"
            } catch {
                return !1
            }
        }
        ),
        Re(this, "set", (i, r) => {
            this.isInitialized();
            let n = this.formatTarget(i)
              , o = {
                target: n,
                expiry: r
            };
            this.expirations.set(n, o),
            this.checkExpiry(n, o),
            this.events.emit(Be.created, {
                target: n,
                expiration: o
            })
        }
        ),
        Re(this, "get", i => {
            this.isInitialized();
            let r = this.formatTarget(i);
            return this.getExpiration(r)
        }
        ),
        Re(this, "del", i => {
            if (this.isInitialized(),
            this.has(i)) {
                let r = this.formatTarget(i)
                  , n = this.getExpiration(r);
                this.expirations.delete(r),
                this.events.emit(Be.deleted, {
                    target: r,
                    expiration: n
                })
            }
        }
        ),
        Re(this, "on", (i, r) => {
            this.events.on(i, r)
        }
        ),
        Re(this, "once", (i, r) => {
            this.events.once(i, r)
        }
        ),
        Re(this, "off", (i, r) => {
            this.events.off(i, r)
        }
        ),
        Re(this, "removeListener", (i, r) => {
            this.events.removeListener(i, r)
        }
        ),
        this.logger = we(t, this.name)
    }
    get context() {
        return xe(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.expirations.size
    }
    get keys() {
        return Array.from(this.expirations.keys())
    }
    get values() {
        return Array.from(this.expirations.values())
    }
    formatTarget(e) {
        if (typeof e == "string")
            return Na(e);
        if (typeof e == "number")
            return qa(e);
        let {message: t} = C("UNKNOWN_TYPE", `Target type: ${typeof e}`);
        throw new Error(t)
    }
    setExpirations(e) {
        return l(this, null, function*() {
            yield this.core.storage.setItem(this.storageKey, e)
        })
    }
    getExpirations() {
        return l(this, null, function*() {
            return yield this.core.storage.getItem(this.storageKey)
        })
    }
    persist() {
        return l(this, null, function*() {
            yield this.setExpirations(this.values),
            this.events.emit(Be.sync)
        })
    }
    restore() {
        return l(this, null, function*() {
            try {
                let e = yield this.getExpirations();
                if (typeof e > "u" || !e.length)
                    return;
                if (this.expirations.size) {
                    let {message: t} = C("RESTORE_WILL_OVERRIDE", this.name);
                    throw this.logger.error(t),
                    new Error(t)
                }
                this.cached = e,
                this.logger.debug(`Successfully Restored expirations for ${this.name}`),
                this.logger.trace({
                    type: "method",
                    method: "restore",
                    expirations: this.values
                })
            } catch (e) {
                this.logger.debug(`Failed to Restore expirations for ${this.name}`),
                this.logger.error(e)
            }
        })
    }
    getExpiration(e) {
        let t = this.expirations.get(e);
        if (!t) {
            let {message: i} = C("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.warn(i),
            new Error(i)
        }
        return t
    }
    checkExpiry(e, t) {
        let {expiry: i} = t;
        (0,
        k.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t)
    }
    expire(e, t) {
        this.expirations.delete(e),
        this.events.emit(Be.expired, {
            target: e,
            expiration: t
        })
    }
    checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach( (e, t) => this.checkExpiry(t, e))
    }
    registerEventListeners() {
        this.core.heartbeat.on(Mt.pulse, () => this.checkExpirations()),
        this.events.on(Be.created, e => {
            let t = Be.created;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                data: e
            }),
            this.persist()
        }
        ),
        this.events.on(Be.expired, e => {
            let t = Be.expired;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                data: e
            }),
            this.persist()
        }
        ),
        this.events.on(Be.deleted, e => {
            let t = Be.deleted;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                data: e
            }),
            this.persist()
        }
        )
    }
    isInitialized() {
        if (!this.initialized) {
            let {message: e} = C("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
  , Tm = Object.defineProperty
  , Am = (s, e, t) => e in s ? Tm(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , ce = (s, e, t) => Am(s, typeof e != "symbol" ? e + "" : e, t)
  , jn = class extends $i {
    constructor(e, t, i) {
        super(e, t, i),
        this.core = e,
        this.logger = t,
        this.store = i,
        ce(this, "name", Hd),
        ce(this, "abortController"),
        ce(this, "isDevEnv"),
        ce(this, "verifyUrlV3", Gd),
        ce(this, "storagePrefix", dt),
        ce(this, "version", yh),
        ce(this, "publicKey"),
        ce(this, "fetchPromise"),
        ce(this, "init", () => l(this, null, function*() {
            var r;
            this.isDevEnv || (this.publicKey = yield this.store.getItem(this.storeKey),
            this.publicKey && (0,
            k.toMiliseconds)((r = this.publicKey) == null ? void 0 : r.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"),
            yield this.removePublicKey()))
        })),
        ce(this, "register", r => l(this, null, function*() {
            if (!Yt() || this.isDevEnv)
                return;
            let n = window.location.origin
              , {id: o, decryptedId: a} = r
              , c = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${n}&id=${o}&decryptedId=${a}`;
            try {
                let h = (0,
                fh.getDocument)()
                  , p = this.startAbortTimer(k.ONE_SECOND * 5)
                  , u = yield new Promise( (d, g) => {
                    let f = () => {
                        window.removeEventListener("message", m),
                        h.body.removeChild(y),
                        g("attestation aborted")
                    }
                    ;
                    this.abortController.signal.addEventListener("abort", f);
                    let y = h.createElement("iframe");
                    y.src = c,
                    y.style.display = "none",
                    y.addEventListener("error", f, {
                        signal: this.abortController.signal
                    });
                    let m = b => {
                        if (b.data && typeof b.data == "string")
                            try {
                                let w = JSON.parse(b.data);
                                if (w.type === "verify_attestation") {
                                    if (js(w.attestation).payload.id !== o)
                                        return;
                                    clearInterval(p),
                                    h.body.removeChild(y),
                                    this.abortController.signal.removeEventListener("abort", f),
                                    window.removeEventListener("message", m),
                                    d(w.attestation === null ? "" : w.attestation)
                                }
                            } catch (w) {
                                this.logger.warn(w)
                            }
                    }
                    ;
                    h.body.appendChild(y),
                    window.addEventListener("message", m, {
                        signal: this.abortController.signal
                    })
                }
                );
                return this.logger.debug("jwt attestation", u),
                u
            } catch (h) {
                this.logger.warn(h)
            }
            return ""
        })),
        ce(this, "resolve", r => l(this, null, function*() {
            if (this.isDevEnv)
                return "";
            let {attestationId: n, hash: o, encryptedId: a} = r;
            if (n === "") {
                this.logger.debug("resolve: attestationId is empty, skipping");
                return
            }
            if (n) {
                if (js(n).payload.id !== a)
                    return;
                let h = yield this.isValidJwtAttestation(n);
                if (h) {
                    if (!h.isVerified) {
                        this.logger.warn("resolve: jwt attestation: origin url not verified");
                        return
                    }
                    return h
                }
            }
            if (!o)
                return;
            let c = this.getVerifyUrl(r?.verifyUrl);
            return this.fetchAttestation(o, c)
        })),
        ce(this, "fetchAttestation", (r, n) => l(this, null, function*() {
            this.logger.debug(`resolving attestation: ${r} from url: ${n}`);
            let o = this.startAbortTimer(k.ONE_SECOND * 5)
              , a = yield fetch(`${n}/attestation/${r}?v2Supported=true`, {
                signal: this.abortController.signal
            });
            return clearTimeout(o),
            a.status === 200 ? yield a.json() : void 0
        })),
        ce(this, "getVerifyUrl", r => {
            let n = r || Es;
            return Wd.includes(n) || (this.logger.info(`verify url: ${n}, not included in trusted list, assigning default: ${Es}`),
            n = Es),
            n
        }
        ),
        ce(this, "fetchPublicKey", () => l(this, null, function*() {
            try {
                this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
                let r = this.startAbortTimer(k.FIVE_SECONDS)
                  , n = yield fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal
                });
                return clearTimeout(r),
                yield n.json()
            } catch (r) {
                this.logger.warn(r)
            }
        })),
        ce(this, "persistPublicKey", r => l(this, null, function*() {
            this.logger.debug("persisting public key to local storage", r),
            yield this.store.setItem(this.storeKey, r),
            this.publicKey = r
        })),
        ce(this, "removePublicKey", () => l(this, null, function*() {
            this.logger.debug("removing verify v2 public key from storage"),
            yield this.store.removeItem(this.storeKey),
            this.publicKey = void 0
        })),
        ce(this, "isValidJwtAttestation", r => l(this, null, function*() {
            let n = yield this.getPublicKey();
            try {
                if (n)
                    return this.validateAttestation(r, n)
            } catch (a) {
                this.logger.error(a),
                this.logger.warn("error validating attestation")
            }
            let o = yield this.fetchAndPersistPublicKey();
            try {
                if (o)
                    return this.validateAttestation(r, o)
            } catch (a) {
                this.logger.error(a),
                this.logger.warn("error validating attestation")
            }
        })),
        ce(this, "getPublicKey", () => l(this, null, function*() {
            return this.publicKey ? this.publicKey : yield this.fetchAndPersistPublicKey()
        })),
        ce(this, "fetchAndPersistPublicKey", () => l(this, null, function*() {
            if (this.fetchPromise)
                return yield this.fetchPromise,
                this.publicKey;
            this.fetchPromise = new Promise(n => l(this, null, function*() {
                let o = yield this.fetchPublicKey();
                o && (yield this.persistPublicKey(o),
                n(o))
            }));
            let r = yield this.fetchPromise;
            return this.fetchPromise = void 0,
            r
        })),
        ce(this, "validateAttestation", (r, n) => {
            let o = Ic(r, n.publicKey)
              , a = {
                hasExpired: (0,
                k.toMiliseconds)(o.exp) < Date.now(),
                payload: o
            };
            if (a.hasExpired)
                throw this.logger.warn("resolve: jwt attestation expired"),
                new Error("JWT attestation expired");
            return {
                origin: a.payload.origin,
                isScam: a.payload.isScam,
                isVerified: a.payload.isVerified
            }
        }
        ),
        this.logger = we(t, this.name),
        this.abortController = new AbortController,
        this.isDevEnv = Js(),
        this.init()
    }
    get storeKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key"
    }
    get context() {
        return xe(this.logger)
    }
    startAbortTimer(e) {
        return this.abortController = new AbortController,
        setTimeout( () => this.abortController.abort(), (0,
        k.toMiliseconds)(e))
    }
}
  , Cm = Object.defineProperty
  , Nm = (s, e, t) => e in s ? Cm(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , ph = (s, e, t) => Nm(s, typeof e != "symbol" ? e + "" : e, t)
  , Ln = class extends Mi {
    constructor(e, t) {
        super(e, t),
        this.projectId = e,
        this.logger = t,
        ph(this, "context", Yd),
        ph(this, "registerDeviceToken", i => l(this, null, function*() {
            let {clientId: r, token: n, notificationType: o, enableEncrypted: a=!1} = i
              , c = `${Jd}/${this.projectId}/clients`;
            yield fetch(c, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    client_id: r,
                    type: o,
                    token: n,
                    always_raw: a
                })
            })
        })),
        this.logger = we(t, this.context)
    }
}
  , qm = Object.defineProperty
  , uh = Object.getOwnPropertySymbols
  , Dm = Object.prototype.hasOwnProperty
  , Fm = Object.prototype.propertyIsEnumerable
  , $n = (s, e, t) => e in s ? qm(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , ci = (s, e) => {
    for (var t in e || (e = {}))
        Dm.call(e, t) && $n(s, t, e[t]);
    if (uh)
        for (var t of uh(e))
            Fm.call(e, t) && $n(s, t, e[t]);
    return s
}
  , me = (s, e, t) => $n(s, typeof e != "symbol" ? e + "" : e, t)
  , Mn = class extends Bi {
    constructor(e, t, i=!0) {
        super(e, t, i),
        this.core = e,
        this.logger = t,
        me(this, "context", Xd),
        me(this, "storagePrefix", dt),
        me(this, "storageVersion", Qd),
        me(this, "events", new Map),
        me(this, "shouldPersist", !1),
        me(this, "init", () => l(this, null, function*() {
            if (!Js())
                try {
                    let r = {
                        eventId: Br(),
                        timestamp: Date.now(),
                        domain: this.getAppDomain(),
                        props: {
                            event: "INIT",
                            type: "",
                            properties: {
                                client_id: yield this.core.crypto.getClientId(),
                                user_agent: $r(this.core.relayer.protocol, this.core.relayer.version, gn)
                            }
                        }
                    };
                    yield this.sendEvent([r])
                } catch (r) {
                    this.logger.warn(r)
                }
        })),
        me(this, "createEvent", r => {
            let {event: n="ERROR", type: o="", properties: {topic: a, trace: c}} = r
              , h = Br()
              , p = this.core.projectId || ""
              , u = Date.now()
              , d = ci({
                eventId: h,
                timestamp: u,
                props: {
                    event: n,
                    type: o,
                    properties: {
                        topic: a,
                        trace: c
                    }
                },
                bundleId: p,
                domain: this.getAppDomain()
            }, this.setMethods(h));
            return this.telemetryEnabled && (this.events.set(h, d),
            this.shouldPersist = !0),
            d
        }
        ),
        me(this, "getEvent", r => {
            let {eventId: n, topic: o} = r;
            if (n)
                return this.events.get(n);
            let a = Array.from(this.events.values()).find(c => c.props.properties.topic === o);
            if (a)
                return ci(ci({}, a), this.setMethods(a.eventId))
        }
        ),
        me(this, "deleteEvent", r => {
            let {eventId: n} = r;
            this.events.delete(n),
            this.shouldPersist = !0
        }
        ),
        me(this, "setEventListeners", () => {
            this.core.heartbeat.on(Mt.pulse, () => l(this, null, function*() {
                this.shouldPersist && (yield this.persist()),
                this.events.forEach(r => {
                    (0,
                    k.fromMiliseconds)(Date.now()) - (0,
                    k.fromMiliseconds)(r.timestamp) > Zd && (this.events.delete(r.eventId),
                    this.shouldPersist = !0)
                }
                )
            }))
        }
        ),
        me(this, "setMethods", r => ({
            addTrace: n => this.addTrace(r, n),
            setError: n => this.setError(r, n)
        })),
        me(this, "addTrace", (r, n) => {
            let o = this.events.get(r);
            o && (o.props.properties.trace.push(n),
            this.events.set(r, o),
            this.shouldPersist = !0)
        }
        ),
        me(this, "setError", (r, n) => {
            let o = this.events.get(r);
            o && (o.props.type = n,
            o.timestamp = Date.now(),
            this.events.set(r, o),
            this.shouldPersist = !0)
        }
        ),
        me(this, "persist", () => l(this, null, function*() {
            yield this.core.storage.setItem(this.storageKey, Array.from(this.events.values())),
            this.shouldPersist = !1
        })),
        me(this, "restore", () => l(this, null, function*() {
            try {
                let r = (yield this.core.storage.getItem(this.storageKey)) || [];
                if (!r.length)
                    return;
                r.forEach(n => {
                    this.events.set(n.eventId, ci(ci({}, n), this.setMethods(n.eventId)))
                }
                )
            } catch (r) {
                this.logger.warn(r)
            }
        })),
        me(this, "submit", () => l(this, null, function*() {
            if (!this.telemetryEnabled || this.events.size === 0)
                return;
            let r = [];
            for (let[n,o] of this.events)
                o.props.type && r.push(o);
            if (r.length !== 0)
                try {
                    if ((yield this.sendEvent(r)).ok)
                        for (let n of r)
                            this.events.delete(n.eventId),
                            this.shouldPersist = !0
                } catch (n) {
                    this.logger.warn(n)
                }
        })),
        me(this, "sendEvent", r => l(this, null, function*() {
            let n = this.getAppDomain() ? "" : "&sp=desktop";
            return yield fetch(`${eg}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${gn}${n}`, {
                method: "POST",
                body: JSON.stringify(r)
            })
        })),
        me(this, "getAppDomain", () => Lr().url),
        this.logger = we(t, this.context),
        this.telemetryEnabled = i,
        i ? this.restore().then( () => l(this, null, function*() {
            yield this.submit(),
            this.setEventListeners()
        })) : this.persist()
    }
    get storageKey() {
        return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context
    }
}
  , Um = Object.defineProperty
  , dh = Object.getOwnPropertySymbols
  , km = Object.prototype.hasOwnProperty
  , jm = Object.prototype.propertyIsEnumerable
  , Bn = (s, e, t) => e in s ? Um(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , gh = (s, e) => {
    for (var t in e || (e = {}))
        km.call(e, t) && Bn(s, t, e[t]);
    if (dh)
        for (var t of dh(e))
            jm.call(e, t) && Bn(s, t, e[t]);
    return s
}
  , se = (s, e, t) => Bn(s, typeof e != "symbol" ? e + "" : e, t)
  , Vn = class s extends Ni {
    constructor(e) {
        var t;
        super(e),
        se(this, "protocol", mh),
        se(this, "version", yh),
        se(this, "name", Gi),
        se(this, "relayUrl"),
        se(this, "projectId"),
        se(this, "customStoragePrefix"),
        se(this, "events", new xt.EventEmitter),
        se(this, "logger"),
        se(this, "heartbeat"),
        se(this, "relayer"),
        se(this, "crypto"),
        se(this, "storage"),
        se(this, "history"),
        se(this, "expirer"),
        se(this, "pairing"),
        se(this, "verify"),
        se(this, "echoClient"),
        se(this, "linkModeSupportedApps"),
        se(this, "eventClient"),
        se(this, "initialized", !1),
        se(this, "logChunkController"),
        se(this, "on", (a, c) => this.events.on(a, c)),
        se(this, "once", (a, c) => this.events.once(a, c)),
        se(this, "off", (a, c) => this.events.off(a, c)),
        se(this, "removeListener", (a, c) => this.events.removeListener(a, c)),
        se(this, "dispatchEnvelope", ({topic: a, message: c, sessionExists: h}) => {
            if (!a || !c)
                return;
            let p = {
                topic: a,
                message: c,
                publishedAt: Date.now(),
                transportType: ie.link_mode
            };
            this.relayer.onLinkMessageEvent(p, {
                sessionExists: h
            })
        }
        );
        let i = this.getGlobalCore(e?.customStoragePrefix);
        if (i)
            try {
                return this.customStoragePrefix = i.customStoragePrefix,
                this.logger = i.logger,
                this.heartbeat = i.heartbeat,
                this.crypto = i.crypto,
                this.history = i.history,
                this.expirer = i.expirer,
                this.storage = i.storage,
                this.relayer = i.relayer,
                this.pairing = i.pairing,
                this.verify = i.verify,
                this.echoClient = i.echoClient,
                this.linkModeSupportedApps = i.linkModeSupportedApps,
                this.eventClient = i.eventClient,
                this.initialized = i.initialized,
                this.logChunkController = i.logChunkController,
                i
            } catch (a) {
                console.warn("Failed to copy global core", a)
            }
        this.projectId = e?.projectId,
        this.relayUrl = e?.relayUrl || wh,
        this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
        let r = Bt({
            level: typeof e?.logger == "string" && e.logger ? e.logger : Id.logger,
            name: Gi
        })
          , {logger: n, chunkLoggerController: o} = $o({
            opts: r,
            maxSizeInBytes: e?.maxLogBlobSizeInBytes,
            loggerOverride: e?.logger
        });
        this.logChunkController = o,
        (t = this.logChunkController) != null && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = () => l(this, null, function*() {
            var a, c;
            (a = this.logChunkController) != null && a.downloadLogsBlobInBrowser && ((c = this.logChunkController) == null || c.downloadLogsBlobInBrowser({
                clientId: yield this.crypto.getClientId()
            }))
        })),
        this.logger = we(n, this.name),
        this.heartbeat = new jo,
        this.crypto = new Pn(this,this.logger,e?.keychain),
        this.history = new Un(this,this.logger),
        this.expirer = new kn(this,this.logger),
        this.storage = e != null && e.storage ? e.storage : new Lo(gh(gh({}, _d), e?.storageOptions)),
        this.relayer = new qn({
            core: this,
            logger: this.logger,
            relayUrl: this.relayUrl,
            projectId: this.projectId
        }),
        this.pairing = new Fn(this,this.logger),
        this.verify = new jn(this,this.logger,this.storage),
        this.echoClient = new Ln(this.projectId || "",this.logger),
        this.linkModeSupportedApps = [],
        this.eventClient = new Mn(this,this.logger,e?.telemetryEnabled),
        this.setGlobalCore(this)
    }
    static init(e) {
        return l(this, null, function*() {
            let t = new s(e);
            yield t.initialize();
            let i = yield t.crypto.getClientId();
            return yield t.storage.setItem(Ud, i),
            t
        })
    }
    get context() {
        return xe(this.logger)
    }
    start() {
        return l(this, null, function*() {
            this.initialized || (yield this.initialize())
        })
    }
    getLogsBlob() {
        return l(this, null, function*() {
            var e;
            return (e = this.logChunkController) == null ? void 0 : e.logsToBlob({
                clientId: yield this.crypto.getClientId()
            })
        })
    }
    addLinkModeSupportedApp(e) {
        return l(this, null, function*() {
            this.linkModeSupportedApps.includes(e) || (this.linkModeSupportedApps.push(e),
            yield this.storage.setItem(Gc, this.linkModeSupportedApps))
        })
    }
    initialize() {
        return l(this, null, function*() {
            this.logger.trace("Initialized");
            try {
                yield this.crypto.init(),
                yield this.history.init(),
                yield this.expirer.init(),
                yield this.relayer.init(),
                yield this.heartbeat.init(),
                yield this.pairing.init(),
                this.linkModeSupportedApps = (yield this.storage.getItem(Gc)) || [],
                this.initialized = !0,
                this.logger.info("Core Initialization Success")
            } catch (e) {
                throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e),
                this.logger.error(e.message),
                e
            }
        })
    }
    getGlobalCore(e="") {
        try {
            if (this.isGlobalCoreDisabled())
                return;
            let t = `_walletConnectCore_${e}`
              , i = `${t}_count`;
            return globalThis[i] = (globalThis[i] || 0) + 1,
            globalThis[i] > 1 && console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[i]} times.`),
            globalThis[t]
        } catch (t) {
            console.warn("Failed to get global WalletConnect core", t);
            return
        }
    }
    setGlobalCore(e) {
        var t;
        try {
            if (this.isGlobalCoreDisabled())
                return;
            let i = `_walletConnectCore_${((t = e.opts) == null ? void 0 : t.customStoragePrefix) || ""}`;
            globalThis[i] = e
        } catch (i) {
            console.warn("Failed to set global WalletConnect core", i)
        }
    }
    isGlobalCoreDisabled() {
        try {
            return typeof process < "u" && process.env.DISABLE_GLOBAL_CORE === "true"
        } catch {
            return !0
        }
    }
}
  , Ah = Vn;
var V = Qe(nr());
var Qi = Qe(ks());
var Fh = "wc"
  , Uh = 2
  , kh = "client"
  , io = `${Fh}@${Uh}:${kh}:`
  , Hn = {
    name: kh,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.org"
};
var Ch = "WALLETCONNECT_DEEPLINK_CHOICE";
var Lm = "proposal";
var Nh = "Proposal expired"
  , $m = "session"
  , _s = V.SEVEN_DAYS
  , Mm = "engine"
  , ye = {
    wc_sessionPropose: {
        req: {
            ttl: V.FIVE_MINUTES,
            prompt: !0,
            tag: 1100
        },
        res: {
            ttl: V.FIVE_MINUTES,
            prompt: !1,
            tag: 1101
        },
        reject: {
            ttl: V.FIVE_MINUTES,
            prompt: !1,
            tag: 1120
        },
        autoReject: {
            ttl: V.FIVE_MINUTES,
            prompt: !1,
            tag: 1121
        }
    },
    wc_sessionSettle: {
        req: {
            ttl: V.FIVE_MINUTES,
            prompt: !1,
            tag: 1102
        },
        res: {
            ttl: V.FIVE_MINUTES,
            prompt: !1,
            tag: 1103
        }
    },
    wc_sessionUpdate: {
        req: {
            ttl: V.ONE_DAY,
            prompt: !1,
            tag: 1104
        },
        res: {
            ttl: V.ONE_DAY,
            prompt: !1,
            tag: 1105
        }
    },
    wc_sessionExtend: {
        req: {
            ttl: V.ONE_DAY,
            prompt: !1,
            tag: 1106
        },
        res: {
            ttl: V.ONE_DAY,
            prompt: !1,
            tag: 1107
        }
    },
    wc_sessionRequest: {
        req: {
            ttl: V.FIVE_MINUTES,
            prompt: !0,
            tag: 1108
        },
        res: {
            ttl: V.FIVE_MINUTES,
            prompt: !1,
            tag: 1109
        }
    },
    wc_sessionEvent: {
        req: {
            ttl: V.FIVE_MINUTES,
            prompt: !0,
            tag: 1110
        },
        res: {
            ttl: V.FIVE_MINUTES,
            prompt: !1,
            tag: 1111
        }
    },
    wc_sessionDelete: {
        req: {
            ttl: V.ONE_DAY,
            prompt: !1,
            tag: 1112
        },
        res: {
            ttl: V.ONE_DAY,
            prompt: !1,
            tag: 1113
        }
    },
    wc_sessionPing: {
        req: {
            ttl: V.ONE_DAY,
            prompt: !1,
            tag: 1114
        },
        res: {
            ttl: V.ONE_DAY,
            prompt: !1,
            tag: 1115
        }
    },
    wc_sessionAuthenticate: {
        req: {
            ttl: V.ONE_HOUR,
            prompt: !0,
            tag: 1116
        },
        res: {
            ttl: V.ONE_HOUR,
            prompt: !1,
            tag: 1117
        },
        reject: {
            ttl: V.FIVE_MINUTES,
            prompt: !1,
            tag: 1118
        },
        autoReject: {
            ttl: V.FIVE_MINUTES,
            prompt: !1,
            tag: 1119
        }
    }
}
  , Kn = {
    min: V.FIVE_MINUTES,
    max: V.SEVEN_DAYS
}
  , ft = {
    idle: "IDLE",
    active: "ACTIVE"
}
  , qh = {
    eth_sendTransaction: {
        key: ""
    },
    eth_sendRawTransaction: {
        key: ""
    },
    wallet_sendCalls: {
        key: ""
    },
    solana_signTransaction: {
        key: "signature"
    },
    solana_signAllTransactions: {
        key: "transactions"
    },
    solana_signAndSendTransaction: {
        key: "signature"
    }
}
  , Bm = "request"
  , Vm = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"]
  , zm = "wc";
var Hm = "auth"
  , Km = "authKeys"
  , Gm = "pairingTopics"
  , Wm = "requests"
  , Xi = `${zm}@${1.5}:${Hm}:`
  , Yi = `${Xi}:PUB_KEY`
  , Ym = Object.defineProperty
  , Jm = Object.defineProperties
  , Qm = Object.getOwnPropertyDescriptors
  , Dh = Object.getOwnPropertySymbols
  , Xm = Object.prototype.hasOwnProperty
  , Zm = Object.prototype.propertyIsEnumerable
  , Wn = (s, e, t) => e in s ? Ym(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , ee = (s, e) => {
    for (var t in e || (e = {}))
        Xm.call(e, t) && Wn(s, t, e[t]);
    if (Dh)
        for (var t of Dh(e))
            Zm.call(e, t) && Wn(s, t, e[t]);
    return s
}
  , Te = (s, e) => Jm(s, Qm(e))
  , I = (s, e, t) => Wn(s, typeof e != "symbol" ? e + "" : e, t)
  , Yn = class extends zi {
    constructor(e) {
        super(e),
        I(this, "name", Mm),
        I(this, "events", new Qi.default),
        I(this, "initialized", !1),
        I(this, "requestQueue", {
            state: ft.idle,
            queue: []
        }),
        I(this, "sessionRequestQueue", {
            state: ft.idle,
            queue: []
        }),
        I(this, "requestQueueDelay", V.ONE_SECOND),
        I(this, "expectedPairingMethodMap", new Map),
        I(this, "recentlyDeletedMap", new Map),
        I(this, "recentlyDeletedLimit", 200),
        I(this, "relayMessageCache", []),
        I(this, "pendingSessions", new Map),
        I(this, "init", () => l(this, null, function*() {
            this.initialized || (yield this.cleanup(),
            this.registerRelayerEvents(),
            this.registerExpirerEvents(),
            this.registerPairingEvents(),
            yield this.registerLinkModeListeners(),
            this.client.core.pairing.register({
                methods: Object.keys(ye)
            }),
            this.initialized = !0,
            setTimeout( () => l(this, null, function*() {
                yield this.processPendingMessageEvents(),
                this.sessionRequestQueue.queue = this.getPendingSessionRequests(),
                this.processSessionRequestQueue()
            }), (0,
            V.toMiliseconds)(this.requestQueueDelay)))
        })),
        I(this, "connect", t => l(this, null, function*() {
            this.isInitialized(),
            yield this.confirmOnlineStateOrThrow();
            let i = Te(ee({}, t), {
                requiredNamespaces: t.requiredNamespaces || {},
                optionalNamespaces: t.optionalNamespaces || {}
            });
            yield this.isValidConnect(i),
            i.optionalNamespaces = _c(i.requiredNamespaces, i.optionalNamespaces),
            i.requiredNamespaces = {};
            let {pairingTopic: r, requiredNamespaces: n, optionalNamespaces: o, sessionProperties: a, scopedProperties: c, relays: h} = i, p = r, u, d = !1;
            try {
                if (p) {
                    let S = this.client.core.pairing.pairings.get(p);
                    this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."),
                    d = S.active
                }
            } catch (S) {
                throw this.client.logger.error(`connect() -> pairing.get(${p}) failed`),
                S
            }
            if (!p || !d) {
                let {topic: S, uri: R} = yield this.client.core.pairing.create();
                p = S,
                u = R
            }
            if (!p) {
                let {message: S} = C("NO_MATCHING_KEY", `connect() pairing topic: ${p}`);
                throw new Error(S)
            }
            let g = yield this.client.core.crypto.generateKeyPair()
              , f = ye.wc_sessionPropose.req.ttl || V.FIVE_MINUTES
              , y = oe(f)
              , m = Te(ee(ee({
                requiredNamespaces: n,
                optionalNamespaces: o,
                relays: h ?? [{
                    protocol: zn
                }],
                proposer: {
                    publicKey: g,
                    metadata: this.client.metadata
                },
                expiryTimestamp: y,
                pairingTopic: p
            }, a && {
                sessionProperties: a
            }), c && {
                scopedProperties: c
            }), {
                id: wt()
            })
              , b = W("session_connect", m.id)
              , {reject: w, resolve: v, done: P} = St(f, Nh)
              , A = ({id: S}) => {
                S === m.id && (this.client.events.off("proposal_expire", A),
                this.pendingSessions.delete(m.id),
                this.events.emit(b, {
                    error: {
                        message: Nh,
                        code: 0
                    }
                }))
            }
            ;
            return this.client.events.on("proposal_expire", A),
            this.events.once(b, ({error: S, session: R}) => {
                this.client.events.off("proposal_expire", A),
                S ? w(S) : R && v(R)
            }
            ),
            yield this.sendRequest({
                topic: p,
                method: "wc_sessionPropose",
                params: m,
                throwOnFailedPublish: !0,
                clientRpcId: m.id
            }),
            yield this.setProposal(m.id, m),
            {
                uri: u,
                approval: P
            }
        })),
        I(this, "pair", t => l(this, null, function*() {
            this.isInitialized(),
            yield this.confirmOnlineStateOrThrow();
            try {
                return yield this.client.core.pairing.pair(t)
            } catch (i) {
                throw this.client.logger.error("pair() failed"),
                i
            }
        })),
        I(this, "approve", t => l(this, null, function*() {
            var i, r, n;
            let o = this.client.core.eventClient.createEvent({
                properties: {
                    topic: (i = t?.id) == null ? void 0 : i.toString(),
                    trace: [We.session_approve_started]
                }
            });
            try {
                this.isInitialized(),
                yield this.confirmOnlineStateOrThrow()
            } catch (E) {
                throw o.setError(kt.no_internet_connection),
                E
            }
            try {
                yield this.isValidProposalId(t?.id)
            } catch (E) {
                throw this.client.logger.error(`approve() -> proposal.get(${t?.id}) failed`),
                o.setError(kt.proposal_not_found),
                E
            }
            try {
                yield this.isValidApprove(t)
            } catch (E) {
                throw this.client.logger.error("approve() -> isValidApprove() failed"),
                o.setError(kt.session_approve_namespace_validation_failure),
                E
            }
            let {id: a, relayProtocol: c, namespaces: h, sessionProperties: p, scopedProperties: u, sessionConfig: d} = t
              , g = this.client.proposal.get(a);
            this.client.core.eventClient.deleteEvent({
                eventId: o.eventId
            });
            let {pairingTopic: f, proposer: y, requiredNamespaces: m, optionalNamespaces: b} = g
              , w = (r = this.client.core.eventClient) == null ? void 0 : r.getEvent({
                topic: f
            });
            w || (w = (n = this.client.core.eventClient) == null ? void 0 : n.createEvent({
                type: We.session_approve_started,
                properties: {
                    topic: f,
                    trace: [We.session_approve_started, We.session_namespaces_validation_success]
                }
            }));
            let v = yield this.client.core.crypto.generateKeyPair()
              , P = y.publicKey
              , A = yield this.client.core.crypto.generateSharedKey(v, P)
              , S = ee(ee(ee({
                relay: {
                    protocol: c ?? "irn"
                },
                namespaces: h,
                controller: {
                    publicKey: v,
                    metadata: this.client.metadata
                },
                expiry: oe(_s)
            }, p && {
                sessionProperties: p
            }), u && {
                scopedProperties: u
            }), d && {
                sessionConfig: d
            })
              , R = ie.relay;
            w.addTrace(We.subscribing_session_topic);
            try {
                yield this.client.core.relayer.subscribe(A, {
                    transportType: R
                })
            } catch (E) {
                throw w.setError(kt.subscribe_session_topic_failure),
                E
            }
            w.addTrace(We.subscribe_session_topic_success);
            let N = Te(ee({}, S), {
                topic: A,
                requiredNamespaces: m,
                optionalNamespaces: b,
                pairingTopic: f,
                acknowledged: !1,
                self: S.controller,
                peer: {
                    publicKey: y.publicKey,
                    metadata: y.metadata
                },
                controller: v,
                transportType: ie.relay
            });
            yield this.client.session.set(A, N),
            w.addTrace(We.store_session);
            try {
                w.addTrace(We.publishing_session_settle),
                yield this.sendRequest({
                    topic: A,
                    method: "wc_sessionSettle",
                    params: S,
                    throwOnFailedPublish: !0
                }).catch(E => {
                    throw w?.setError(kt.session_settle_publish_failure),
                    E
                }
                ),
                w.addTrace(We.session_settle_publish_success),
                w.addTrace(We.publishing_session_approve),
                yield this.sendResult({
                    id: a,
                    topic: f,
                    result: {
                        relay: {
                            protocol: c ?? "irn"
                        },
                        responderPublicKey: v
                    },
                    throwOnFailedPublish: !0
                }).catch(E => {
                    throw w?.setError(kt.session_approve_publish_failure),
                    E
                }
                ),
                w.addTrace(We.session_approve_publish_success)
            } catch (E) {
                throw this.client.logger.error(E),
                this.client.session.delete(A, K("USER_DISCONNECTED")),
                yield this.client.core.relayer.unsubscribe(A),
                E
            }
            return this.client.core.eventClient.deleteEvent({
                eventId: w.eventId
            }),
            yield this.client.core.pairing.updateMetadata({
                topic: f,
                metadata: y.metadata
            }),
            yield this.client.proposal.delete(a, K("USER_DISCONNECTED")),
            yield this.client.core.pairing.activate({
                topic: f
            }),
            yield this.setExpiry(A, oe(_s)),
            {
                topic: A,
                acknowledged: () => Promise.resolve(this.client.session.get(A))
            }
        })),
        I(this, "reject", t => l(this, null, function*() {
            this.isInitialized(),
            yield this.confirmOnlineStateOrThrow();
            try {
                yield this.isValidReject(t)
            } catch (o) {
                throw this.client.logger.error("reject() -> isValidReject() failed"),
                o
            }
            let {id: i, reason: r} = t, n;
            try {
                n = this.client.proposal.get(i).pairingTopic
            } catch (o) {
                throw this.client.logger.error(`reject() -> proposal.get(${i}) failed`),
                o
            }
            n && (yield this.sendError({
                id: i,
                topic: n,
                error: r,
                rpcOpts: ye.wc_sessionPropose.reject
            }),
            yield this.client.proposal.delete(i, K("USER_DISCONNECTED")))
        })),
        I(this, "update", t => l(this, null, function*() {
            this.isInitialized(),
            yield this.confirmOnlineStateOrThrow();
            try {
                yield this.isValidUpdate(t)
            } catch (u) {
                throw this.client.logger.error("update() -> isValidUpdate() failed"),
                u
            }
            let {topic: i, namespaces: r} = t
              , {done: n, resolve: o, reject: a} = St()
              , c = wt()
              , h = Tt().toString()
              , p = this.client.session.get(i).namespaces;
            return this.events.once(W("session_update", c), ({error: u}) => {
                u ? a(u) : o()
            }
            ),
            yield this.client.session.update(i, {
                namespaces: r
            }),
            yield this.sendRequest({
                topic: i,
                method: "wc_sessionUpdate",
                params: {
                    namespaces: r
                },
                throwOnFailedPublish: !0,
                clientRpcId: c,
                relayRpcId: h
            }).catch(u => {
                this.client.logger.error(u),
                this.client.session.update(i, {
                    namespaces: p
                }),
                a(u)
            }
            ),
            {
                acknowledged: n
            }
        })),
        I(this, "extend", t => l(this, null, function*() {
            this.isInitialized(),
            yield this.confirmOnlineStateOrThrow();
            try {
                yield this.isValidExtend(t)
            } catch (c) {
                throw this.client.logger.error("extend() -> isValidExtend() failed"),
                c
            }
            let {topic: i} = t
              , r = wt()
              , {done: n, resolve: o, reject: a} = St();
            return this.events.once(W("session_extend", r), ({error: c}) => {
                c ? a(c) : o()
            }
            ),
            yield this.setExpiry(i, oe(_s)),
            this.sendRequest({
                topic: i,
                method: "wc_sessionExtend",
                params: {},
                clientRpcId: r,
                throwOnFailedPublish: !0
            }).catch(c => {
                a(c)
            }
            ),
            {
                acknowledged: n
            }
        })),
        I(this, "request", t => l(this, null, function*() {
            this.isInitialized();
            try {
                yield this.isValidRequest(t)
            } catch (b) {
                throw this.client.logger.error("request() -> isValidRequest() failed"),
                b
            }
            let {chainId: i, request: r, topic: n, expiry: o=ye.wc_sessionRequest.req.ttl} = t
              , a = this.client.session.get(n);
            a?.transportType === ie.relay && (yield this.confirmOnlineStateOrThrow());
            let c = wt()
              , h = Tt().toString()
              , {done: p, resolve: u, reject: d} = St(o, "Request expired. Please try again.");
            this.events.once(W("session_request", c), ({error: b, result: w}) => {
                b ? d(b) : u(w)
            }
            );
            let g = "wc_sessionRequest"
              , f = this.getAppLinkIfEnabled(a.peer.metadata, a.transportType);
            if (f)
                return yield this.sendRequest({
                    clientRpcId: c,
                    relayRpcId: h,
                    topic: n,
                    method: g,
                    params: {
                        request: Te(ee({}, r), {
                            expiryTimestamp: oe(o)
                        }),
                        chainId: i
                    },
                    expiry: o,
                    throwOnFailedPublish: !0,
                    appLink: f
                }).catch(b => d(b)),
                this.client.events.emit("session_request_sent", {
                    topic: n,
                    request: r,
                    chainId: i,
                    id: c
                }),
                yield p();
            let y = {
                request: Te(ee({}, r), {
                    expiryTimestamp: oe(o)
                }),
                chainId: i
            }
              , m = this.shouldSetTVF(g, y);
            return yield Promise.all([new Promise(b => l(this, null, function*() {
                yield this.sendRequest(ee({
                    clientRpcId: c,
                    relayRpcId: h,
                    topic: n,
                    method: g,
                    params: y,
                    expiry: o,
                    throwOnFailedPublish: !0
                }, m && {
                    tvf: this.getTVFParams(c, y)
                })).catch(w => d(w)),
                this.client.events.emit("session_request_sent", {
                    topic: n,
                    request: r,
                    chainId: i,
                    id: c
                }),
                b()
            })), new Promise(b => l(this, null, function*() {
                var w;
                if (!((w = a.sessionConfig) != null && w.disableDeepLink)) {
                    let v = yield Fa(this.client.core.storage, Ch);
                    yield Da({
                        id: c,
                        topic: n,
                        wcDeepLink: v
                    })
                }
                b()
            })), p()]).then(b => b[2])
        })),
        I(this, "respond", t => l(this, null, function*() {
            this.isInitialized(),
            yield this.isValidRespond(t);
            let {topic: i, response: r} = t
              , {id: n} = r
              , o = this.client.session.get(i);
            o.transportType === ie.relay && (yield this.confirmOnlineStateOrThrow());
            let a = this.getAppLinkIfEnabled(o.peer.metadata, o.transportType);
            Xe(r) ? yield this.sendResult({
                id: n,
                topic: i,
                result: r.result,
                throwOnFailedPublish: !0,
                appLink: a
            }) : He(r) && (yield this.sendError({
                id: n,
                topic: i,
                error: r.error,
                appLink: a
            })),
            this.cleanupAfterResponse(t)
        })),
        I(this, "ping", t => l(this, null, function*() {
            this.isInitialized(),
            yield this.confirmOnlineStateOrThrow();
            try {
                yield this.isValidPing(t)
            } catch (r) {
                throw this.client.logger.error("ping() -> isValidPing() failed"),
                r
            }
            let {topic: i} = t;
            if (this.client.session.keys.includes(i)) {
                let r = wt()
                  , n = Tt().toString()
                  , {done: o, resolve: a, reject: c} = St();
                this.events.once(W("session_ping", r), ({error: h}) => {
                    h ? c(h) : a()
                }
                ),
                yield Promise.all([this.sendRequest({
                    topic: i,
                    method: "wc_sessionPing",
                    params: {},
                    throwOnFailedPublish: !0,
                    clientRpcId: r,
                    relayRpcId: n
                }), o()])
            } else
                this.client.core.pairing.pairings.keys.includes(i) && (this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."),
                yield this.client.core.pairing.ping({
                    topic: i
                }))
        })),
        I(this, "emit", t => l(this, null, function*() {
            this.isInitialized(),
            yield this.confirmOnlineStateOrThrow(),
            yield this.isValidEmit(t);
            let {topic: i, event: r, chainId: n} = t
              , o = Tt().toString()
              , a = wt();
            yield this.sendRequest({
                topic: i,
                method: "wc_sessionEvent",
                params: {
                    event: r,
                    chainId: n
                },
                throwOnFailedPublish: !0,
                relayRpcId: o,
                clientRpcId: a
            })
        })),
        I(this, "disconnect", t => l(this, null, function*() {
            this.isInitialized(),
            yield this.confirmOnlineStateOrThrow(),
            yield this.isValidDisconnect(t);
            let {topic: i} = t;
            if (this.client.session.keys.includes(i))
                yield this.sendRequest({
                    topic: i,
                    method: "wc_sessionDelete",
                    params: K("USER_DISCONNECTED"),
                    throwOnFailedPublish: !0
                }),
                yield this.deleteSession({
                    topic: i,
                    emitEvent: !1
                });
            else if (this.client.core.pairing.pairings.keys.includes(i))
                yield this.client.core.pairing.disconnect({
                    topic: i
                });
            else {
                let {message: r} = C("MISMATCHED_TOPIC", `Session or pairing topic not found: ${i}`);
                throw new Error(r)
            }
        })),
        I(this, "find", t => (this.isInitialized(),
        this.client.session.getAll().filter(i => Pc(i, t)))),
        I(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()),
        I(this, "authenticate", (t, i) => l(this, null, function*() {
            var r;
            this.isInitialized(),
            this.isValidAuthenticate(t);
            let n = i && this.client.core.linkModeSupportedApps.includes(i) && ((r = this.client.metadata.redirect) == null ? void 0 : r.linkMode)
              , o = n ? ie.link_mode : ie.relay;
            o === ie.relay && (yield this.confirmOnlineStateOrThrow());
            let {chains: a, statement: c="", uri: h, domain: p, nonce: u, type: d, exp: g, nbf: f, methods: y=[], expiry: m} = t
              , b = [...t.resources || []]
              , {topic: w, uri: v} = yield this.client.core.pairing.create({
                methods: ["wc_sessionAuthenticate"],
                transportType: o
            });
            this.client.logger.info({
                message: "Generated new pairing",
                pairing: {
                    topic: w,
                    uri: v
                }
            });
            let P = yield this.client.core.crypto.generateKeyPair()
              , A = ms(P);
            if (yield Promise.all([this.client.auth.authKeys.set(Yi, {
                responseTopic: A,
                publicKey: P
            }), this.client.auth.pairingTopics.set(A, {
                topic: A,
                pairingTopic: w
            })]),
            yield this.client.core.relayer.subscribe(A, {
                transportType: o
            }),
            this.client.logger.info(`sending request to new pairing topic: ${w}`),
            y.length > 0) {
                let {namespace: O} = Ft(a[0])
                  , L = Ka(O, "request", y);
                Zs(b) && (L = Ga(L, b.pop())),
                b.push(L)
            }
            let S = m && m > ye.wc_sessionAuthenticate.req.ttl ? m : ye.wc_sessionAuthenticate.req.ttl
              , R = {
                authPayload: {
                    type: d ?? "caip122",
                    chains: a,
                    statement: c,
                    aud: h,
                    domain: p,
                    version: "1",
                    nonce: u,
                    iat: new Date().toISOString(),
                    exp: g,
                    nbf: f,
                    resources: b
                },
                requester: {
                    publicKey: P,
                    metadata: this.client.metadata
                },
                expiryTimestamp: oe(S)
            }
              , N = {
                eip155: {
                    chains: a,
                    methods: [...new Set(["personal_sign", ...y])],
                    events: ["chainChanged", "accountsChanged"]
                }
            }
              , E = {
                requiredNamespaces: {},
                optionalNamespaces: N,
                relays: [{
                    protocol: "irn"
                }],
                pairingTopic: w,
                proposer: {
                    publicKey: P,
                    metadata: this.client.metadata
                },
                expiryTimestamp: oe(ye.wc_sessionPropose.req.ttl),
                id: wt()
            }
              , {done: j, resolve: D, reject: U} = St(S, "Request expired")
              , $ = wt()
              , _ = W("session_connect", E.id)
              , T = W("session_request", $)
              , x = M => l(this, [M], function*({error: O, session: L}) {
                this.events.off(T, q),
                O ? U(O) : L && D({
                    session: L
                })
            })
              , q = O => l(this, null, function*() {
                var L, M, B;
                if (yield this.deletePendingAuthRequest($, {
                    message: "fulfilled",
                    code: 0
                }),
                O.error) {
                    let le = K("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
                    return O.error.code === le.code ? void 0 : (this.events.off(_, x),
                    U(O.error.message))
                }
                yield this.deleteProposal(E.id),
                this.events.off(_, x);
                let {cacaos: te, responder: Q} = O.result
                  , ae = []
                  , de = [];
                for (let le of te) {
                    (yield Hr({
                        cacao: le,
                        projectId: this.client.core.projectId
                    })) || (this.client.logger.error(le, "Signature verification failed"),
                    U(K("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
                    let {p: Lt} = le
                      , mt = Zs(Lt.resources)
                      , ot = [Pi(Lt.iss)]
                      , yt = Xs(Lt.iss);
                    if (mt) {
                        let es = Gr(mt)
                          , di = Wr(mt);
                        ae.push(...es),
                        ot.push(...di)
                    }
                    for (let es of ot)
                        de.push(`${es}:${yt}`)
                }
                let _e = yield this.client.core.crypto.generateSharedKey(P, Q.publicKey), he;
                ae.length > 0 && (he = {
                    topic: _e,
                    acknowledged: !0,
                    self: {
                        publicKey: P,
                        metadata: this.client.metadata
                    },
                    peer: Q,
                    controller: Q.publicKey,
                    expiry: oe(_s),
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    relay: {
                        protocol: "irn"
                    },
                    pairingTopic: w,
                    namespaces: rn([...new Set(ae)], [...new Set(de)]),
                    transportType: o
                },
                yield this.client.core.relayer.subscribe(_e, {
                    transportType: o
                }),
                yield this.client.session.set(_e, he),
                w && (yield this.client.core.pairing.updateMetadata({
                    topic: w,
                    metadata: Q.metadata
                })),
                he = this.client.session.get(_e)),
                (L = this.client.metadata.redirect) != null && L.linkMode && (M = Q.metadata.redirect) != null && M.linkMode && (B = Q.metadata.redirect) != null && B.universal && i && (this.client.core.addLinkModeSupportedApp(Q.metadata.redirect.universal),
                this.client.session.update(_e, {
                    transportType: ie.link_mode
                })),
                D({
                    auths: te,
                    session: he
                })
            });
            this.events.once(_, x),
            this.events.once(T, q);
            let F;
            try {
                if (n) {
                    let O = at("wc_sessionAuthenticate", R, $);
                    this.client.core.history.set(w, O);
                    let L = yield this.client.core.crypto.encode("", O, {
                        type: fs,
                        encoding: Rt
                    });
                    F = ri(i, w, L)
                } else
                    yield Promise.all([this.sendRequest({
                        topic: w,
                        method: "wc_sessionAuthenticate",
                        params: R,
                        expiry: t.expiry,
                        throwOnFailedPublish: !0,
                        clientRpcId: $
                    }), this.sendRequest({
                        topic: w,
                        method: "wc_sessionPropose",
                        params: E,
                        expiry: ye.wc_sessionPropose.req.ttl,
                        throwOnFailedPublish: !0,
                        clientRpcId: E.id
                    })])
            } catch (O) {
                throw this.events.off(_, x),
                this.events.off(T, q),
                O
            }
            return yield this.setProposal(E.id, E),
            yield this.setAuthRequest($, {
                request: Te(ee({}, R), {
                    verifyContext: {}
                }),
                pairingTopic: w,
                transportType: o
            }),
            {
                uri: F ?? v,
                response: j
            }
        })),
        I(this, "approveSessionAuthenticate", t => l(this, null, function*() {
            let {id: i, auths: r} = t
              , n = this.client.core.eventClient.createEvent({
                properties: {
                    topic: i.toString(),
                    trace: [jt.authenticated_session_approve_started]
                }
            });
            try {
                this.isInitialized()
            } catch (m) {
                throw n.setError(Is.no_internet_connection),
                m
            }
            let o = this.getPendingAuthRequest(i);
            if (!o)
                throw n.setError(Is.authenticated_session_pending_request_not_found),
                new Error(`Could not find pending auth request with id ${i}`);
            let a = o.transportType || ie.relay;
            a === ie.relay && (yield this.confirmOnlineStateOrThrow());
            let c = o.requester.publicKey
              , h = yield this.client.core.crypto.generateKeyPair()
              , p = ms(c)
              , u = {
                type: st,
                receiverPublicKey: c,
                senderPublicKey: h
            }
              , d = []
              , g = [];
            for (let m of r) {
                if (!(yield Hr({
                    cacao: m,
                    projectId: this.client.core.projectId
                }))) {
                    n.setError(Is.invalid_cacao);
                    let A = K("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
                    throw yield this.sendError({
                        id: i,
                        topic: p,
                        error: A,
                        encodeOpts: u
                    }),
                    new Error(A.message)
                }
                n.addTrace(jt.cacaos_verified);
                let {p: b} = m
                  , w = Zs(b.resources)
                  , v = [Pi(b.iss)]
                  , P = Xs(b.iss);
                if (w) {
                    let A = Gr(w)
                      , S = Wr(w);
                    d.push(...A),
                    v.push(...S)
                }
                for (let A of v)
                    g.push(`${A}:${P}`)
            }
            let f = yield this.client.core.crypto.generateSharedKey(h, c);
            n.addTrace(jt.create_authenticated_session_topic);
            let y;
            if (d?.length > 0) {
                y = {
                    topic: f,
                    acknowledged: !0,
                    self: {
                        publicKey: h,
                        metadata: this.client.metadata
                    },
                    peer: {
                        publicKey: c,
                        metadata: o.requester.metadata
                    },
                    controller: c,
                    expiry: oe(_s),
                    authentication: r,
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    relay: {
                        protocol: "irn"
                    },
                    pairingTopic: o.pairingTopic,
                    namespaces: rn([...new Set(d)], [...new Set(g)]),
                    transportType: a
                },
                n.addTrace(jt.subscribing_authenticated_session_topic);
                try {
                    yield this.client.core.relayer.subscribe(f, {
                        transportType: a
                    })
                } catch (m) {
                    throw n.setError(Is.subscribe_authenticated_session_topic_failure),
                    m
                }
                n.addTrace(jt.subscribe_authenticated_session_topic_success),
                yield this.client.session.set(f, y),
                n.addTrace(jt.store_authenticated_session),
                yield this.client.core.pairing.updateMetadata({
                    topic: o.pairingTopic,
                    metadata: o.requester.metadata
                })
            }
            n.addTrace(jt.publishing_authenticated_session_approve);
            try {
                yield this.sendResult({
                    topic: p,
                    id: i,
                    result: {
                        cacaos: r,
                        responder: {
                            publicKey: h,
                            metadata: this.client.metadata
                        }
                    },
                    encodeOpts: u,
                    throwOnFailedPublish: !0,
                    appLink: this.getAppLinkIfEnabled(o.requester.metadata, a)
                })
            } catch (m) {
                throw n.setError(Is.authenticated_session_approve_publish_failure),
                m
            }
            return yield this.client.auth.requests.delete(i, {
                message: "fulfilled",
                code: 0
            }),
            yield this.client.core.pairing.activate({
                topic: o.pairingTopic
            }),
            this.client.core.eventClient.deleteEvent({
                eventId: n.eventId
            }),
            {
                session: y
            }
        })),
        I(this, "rejectSessionAuthenticate", t => l(this, null, function*() {
            this.isInitialized();
            let {id: i, reason: r} = t
              , n = this.getPendingAuthRequest(i);
            if (!n)
                throw new Error(`Could not find pending auth request with id ${i}`);
            n.transportType === ie.relay && (yield this.confirmOnlineStateOrThrow());
            let o = n.requester.publicKey
              , a = yield this.client.core.crypto.generateKeyPair()
              , c = ms(o)
              , h = {
                type: st,
                receiverPublicKey: o,
                senderPublicKey: a
            };
            yield this.sendError({
                id: i,
                topic: c,
                error: r,
                encodeOpts: h,
                rpcOpts: ye.wc_sessionAuthenticate.reject,
                appLink: this.getAppLinkIfEnabled(n.requester.metadata, n.transportType)
            }),
            yield this.client.auth.requests.delete(i, {
                message: "rejected",
                code: 0
            }),
            yield this.client.proposal.delete(i, K("USER_DISCONNECTED"))
        })),
        I(this, "formatAuthMessage", t => {
            this.isInitialized();
            let {request: i, iss: r} = t;
            return Kr(i, r)
        }
        ),
        I(this, "processRelayMessageCache", () => {
            setTimeout( () => l(this, null, function*() {
                if (this.relayMessageCache.length !== 0)
                    for (; this.relayMessageCache.length > 0; )
                        try {
                            let t = this.relayMessageCache.shift();
                            t && (yield this.onRelayMessage(t))
                        } catch (t) {
                            this.client.logger.error(t)
                        }
            }), 50)
        }
        ),
        I(this, "cleanupDuplicatePairings", t => l(this, null, function*() {
            if (t.pairingTopic)
                try {
                    let i = this.client.core.pairing.pairings.get(t.pairingTopic)
                      , r = this.client.core.pairing.pairings.getAll().filter(n => {
                        var o, a;
                        return ((o = n.peerMetadata) == null ? void 0 : o.url) && ((a = n.peerMetadata) == null ? void 0 : a.url) === t.peer.metadata.url && n.topic && n.topic !== i.topic
                    }
                    );
                    if (r.length === 0)
                        return;
                    this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`),
                    yield Promise.all(r.map(n => this.client.core.pairing.disconnect({
                        topic: n.topic
                    }))),
                    this.client.logger.info("Duplicate pairings clean up finished")
                } catch (i) {
                    this.client.logger.error(i)
                }
        })),
        I(this, "deleteSession", t => l(this, null, function*() {
            var i;
            let {topic: r, expirerHasDeleted: n=!1, emitEvent: o=!0, id: a=0} = t
              , {self: c} = this.client.session.get(r);
            yield this.client.core.relayer.unsubscribe(r),
            yield this.client.session.delete(r, K("USER_DISCONNECTED")),
            this.addToRecentlyDeleted(r, "session"),
            this.client.core.crypto.keychain.has(c.publicKey) && (yield this.client.core.crypto.deleteKeyPair(c.publicKey)),
            this.client.core.crypto.keychain.has(r) && (yield this.client.core.crypto.deleteSymKey(r)),
            n || this.client.core.expirer.del(r),
            this.client.core.storage.removeItem(Ch).catch(h => this.client.logger.warn(h)),
            this.getPendingSessionRequests().forEach(h => {
                h.topic === r && this.deletePendingSessionRequest(h.id, K("USER_DISCONNECTED"))
            }
            ),
            r === ((i = this.sessionRequestQueue.queue[0]) == null ? void 0 : i.topic) && (this.sessionRequestQueue.state = ft.idle),
            o && this.client.events.emit("session_delete", {
                id: a,
                topic: r
            })
        })),
        I(this, "deleteProposal", (t, i) => l(this, null, function*() {
            if (i)
                try {
                    let r = this.client.proposal.get(t);
                    this.client.core.eventClient.getEvent({
                        topic: r.pairingTopic
                    })?.setError(kt.proposal_expired)
                } catch {}
            yield Promise.all([this.client.proposal.delete(t, K("USER_DISCONNECTED")), i ? Promise.resolve() : this.client.core.expirer.del(t)]),
            this.addToRecentlyDeleted(t, "proposal")
        })),
        I(this, "deletePendingSessionRequest", (t, i, r=!1) => l(this, null, function*() {
            yield Promise.all([this.client.pendingRequest.delete(t, i), r ? Promise.resolve() : this.client.core.expirer.del(t)]),
            this.addToRecentlyDeleted(t, "request"),
            this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(n => n.id !== t),
            r && (this.sessionRequestQueue.state = ft.idle,
            this.client.events.emit("session_request_expire", {
                id: t
            }))
        })),
        I(this, "deletePendingAuthRequest", (t, i, r=!1) => l(this, null, function*() {
            yield Promise.all([this.client.auth.requests.delete(t, i), r ? Promise.resolve() : this.client.core.expirer.del(t)])
        })),
        I(this, "setExpiry", (t, i) => l(this, null, function*() {
            this.client.session.keys.includes(t) && (this.client.core.expirer.set(t, i),
            yield this.client.session.update(t, {
                expiry: i
            }))
        })),
        I(this, "setProposal", (t, i) => l(this, null, function*() {
            this.client.core.expirer.set(t, oe(ye.wc_sessionPropose.req.ttl)),
            yield this.client.proposal.set(t, i)
        })),
        I(this, "setAuthRequest", (t, i) => l(this, null, function*() {
            let {request: r, pairingTopic: n, transportType: o=ie.relay} = i;
            this.client.core.expirer.set(t, r.expiryTimestamp),
            yield this.client.auth.requests.set(t, {
                authPayload: r.authPayload,
                requester: r.requester,
                expiryTimestamp: r.expiryTimestamp,
                id: t,
                pairingTopic: n,
                verifyContext: r.verifyContext,
                transportType: o
            })
        })),
        I(this, "setPendingSessionRequest", t => l(this, null, function*() {
            let {id: i, topic: r, params: n, verifyContext: o} = t
              , a = n.request.expiryTimestamp || oe(ye.wc_sessionRequest.req.ttl);
            this.client.core.expirer.set(i, a),
            yield this.client.pendingRequest.set(i, {
                id: i,
                topic: r,
                params: n,
                verifyContext: o
            })
        })),
        I(this, "sendRequest", t => l(this, null, function*() {
            let {topic: i, method: r, params: n, expiry: o, relayRpcId: a, clientRpcId: c, throwOnFailedPublish: h, appLink: p, tvf: u} = t, d = at(r, n, c), g, f = !!p;
            try {
                let b = f ? Rt : Le;
                g = yield this.client.core.crypto.encode(i, d, {
                    encoding: b
                })
            } catch (b) {
                throw yield this.cleanup(),
                this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${i} failed`),
                b
            }
            let y;
            if (Vm.includes(r)) {
                let b = Ke(JSON.stringify(d))
                  , w = Ke(g);
                y = yield this.client.core.verify.register({
                    id: w,
                    decryptedId: b
                })
            }
            let m = ye[r].req;
            if (m.attestation = y,
            o && (m.ttl = o),
            a && (m.id = a),
            this.client.core.history.set(i, d),
            f) {
                let b = ri(p, i, g);
                yield global.Linking.openURL(b, this.client.name)
            } else {
                let b = ye[r].req;
                o && (b.ttl = o),
                a && (b.id = a),
                b.tvf = Te(ee({}, u), {
                    correlationId: d.id
                }),
                h ? (b.internal = Te(ee({}, b.internal), {
                    throwOnFailedPublish: !0
                }),
                yield this.client.core.relayer.publish(i, g, b)) : this.client.core.relayer.publish(i, g, b).catch(w => this.client.logger.error(w))
            }
            return d.id
        })),
        I(this, "sendResult", t => l(this, null, function*() {
            let {id: i, topic: r, result: n, throwOnFailedPublish: o, encodeOpts: a, appLink: c} = t, h = Vt(i, n), p, u = c && typeof (global == null ? void 0 : global.Linking) < "u";
            try {
                let f = u ? Rt : Le;
                p = yield this.client.core.crypto.encode(r, h, Te(ee({}, a || {}), {
                    encoding: f
                }))
            } catch (f) {
                throw yield this.cleanup(),
                this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${r} failed`),
                f
            }
            let d, g;
            try {
                d = yield this.client.core.history.get(r, i);
                let f = d.request;
                try {
                    this.shouldSetTVF(f.method, f.params) && (g = this.getTVFParams(i, f.params, n))
                } catch (y) {
                    this.client.logger.warn("sendResult() -> getTVFParams() failed", y)
                }
            } catch (f) {
                throw this.client.logger.error(`sendResult() -> history.get(${r}, ${i}) failed`),
                f
            }
            if (u) {
                let f = ri(c, r, p);
                yield global.Linking.openURL(f, this.client.name)
            } else {
                let f = d.request.method
                  , y = ye[f].res;
                y.tvf = Te(ee({}, g), {
                    correlationId: i
                }),
                o ? (y.internal = Te(ee({}, y.internal), {
                    throwOnFailedPublish: !0
                }),
                yield this.client.core.relayer.publish(r, p, y)) : this.client.core.relayer.publish(r, p, y).catch(m => this.client.logger.error(m))
            }
            yield this.client.core.history.resolve(h)
        })),
        I(this, "sendError", t => l(this, null, function*() {
            let {id: i, topic: r, error: n, encodeOpts: o, rpcOpts: a, appLink: c} = t, h = fi(i, n), p, u = c && typeof (global == null ? void 0 : global.Linking) < "u";
            try {
                let g = u ? Rt : Le;
                p = yield this.client.core.crypto.encode(r, h, Te(ee({}, o || {}), {
                    encoding: g
                }))
            } catch (g) {
                throw yield this.cleanup(),
                this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${r} failed`),
                g
            }
            let d;
            try {
                d = yield this.client.core.history.get(r, i)
            } catch (g) {
                throw this.client.logger.error(`sendError() -> history.get(${r}, ${i}) failed`),
                g
            }
            if (u) {
                let g = ri(c, r, p);
                yield global.Linking.openURL(g, this.client.name)
            } else {
                let g = d.request.method
                  , f = a || ye[g].res;
                this.client.core.relayer.publish(r, p, f)
            }
            yield this.client.core.history.resolve(h)
        })),
        I(this, "cleanup", () => l(this, null, function*() {
            let t = []
              , i = [];
            this.client.session.getAll().forEach(r => {
                let n = !1;
                ht(r.expiry) && (n = !0),
                this.client.core.crypto.keychain.has(r.topic) || (n = !0),
                n && t.push(r.topic)
            }
            ),
            this.client.proposal.getAll().forEach(r => {
                ht(r.expiryTimestamp) && i.push(r.id)
            }
            ),
            yield Promise.all([...t.map(r => this.deleteSession({
                topic: r
            })), ...i.map(r => this.deleteProposal(r))])
        })),
        I(this, "onProviderMessageEvent", t => l(this, null, function*() {
            !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(t) : yield this.onRelayMessage(t)
        })),
        I(this, "onRelayEventRequest", t => l(this, null, function*() {
            this.requestQueue.queue.push(t),
            yield this.processRequestsQueue()
        })),
        I(this, "processRequestsQueue", () => l(this, null, function*() {
            if (this.requestQueue.state === ft.active) {
                this.client.logger.info("Request queue already active, skipping...");
                return
            }
            for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
                this.requestQueue.state = ft.active;
                let t = this.requestQueue.queue.shift();
                if (t)
                    try {
                        yield this.processRequest(t)
                    } catch (i) {
                        this.client.logger.warn(i)
                    }
            }
            this.requestQueue.state = ft.idle
        })),
        I(this, "processRequest", t => l(this, null, function*() {
            let {topic: i, payload: r, attestation: n, transportType: o, encryptedId: a} = t
              , c = r.method;
            if (!this.shouldIgnorePairingRequest({
                topic: i,
                requestMethod: c
            }))
                switch (c) {
                case "wc_sessionPropose":
                    return yield this.onSessionProposeRequest({
                        topic: i,
                        payload: r,
                        attestation: n,
                        encryptedId: a
                    });
                case "wc_sessionSettle":
                    return yield this.onSessionSettleRequest(i, r);
                case "wc_sessionUpdate":
                    return yield this.onSessionUpdateRequest(i, r);
                case "wc_sessionExtend":
                    return yield this.onSessionExtendRequest(i, r);
                case "wc_sessionPing":
                    return yield this.onSessionPingRequest(i, r);
                case "wc_sessionDelete":
                    return yield this.onSessionDeleteRequest(i, r);
                case "wc_sessionRequest":
                    return yield this.onSessionRequest({
                        topic: i,
                        payload: r,
                        attestation: n,
                        encryptedId: a,
                        transportType: o
                    });
                case "wc_sessionEvent":
                    return yield this.onSessionEventRequest(i, r);
                case "wc_sessionAuthenticate":
                    return yield this.onSessionAuthenticateRequest({
                        topic: i,
                        payload: r,
                        attestation: n,
                        encryptedId: a,
                        transportType: o
                    });
                default:
                    return this.client.logger.info(`Unsupported request method ${c}`)
                }
        })),
        I(this, "onRelayEventResponse", t => l(this, null, function*() {
            let {topic: i, payload: r, transportType: n} = t
              , o = (yield this.client.core.history.get(i, r.id)).request.method;
            switch (o) {
            case "wc_sessionPropose":
                return this.onSessionProposeResponse(i, r, n);
            case "wc_sessionSettle":
                return this.onSessionSettleResponse(i, r);
            case "wc_sessionUpdate":
                return this.onSessionUpdateResponse(i, r);
            case "wc_sessionExtend":
                return this.onSessionExtendResponse(i, r);
            case "wc_sessionPing":
                return this.onSessionPingResponse(i, r);
            case "wc_sessionRequest":
                return this.onSessionRequestResponse(i, r);
            case "wc_sessionAuthenticate":
                return this.onSessionAuthenticateResponse(i, r);
            default:
                return this.client.logger.info(`Unsupported response method ${o}`)
            }
        })),
        I(this, "onRelayEventUnknownPayload", t => {
            let {topic: i} = t
              , {message: r} = C("MISSING_OR_INVALID", `Decoded payload on topic ${i} is not identifiable as a JSON-RPC request or a response.`);
            throw new Error(r)
        }
        ),
        I(this, "shouldIgnorePairingRequest", t => {
            let {topic: i, requestMethod: r} = t
              , n = this.expectedPairingMethodMap.get(i);
            return !n || n.includes(r) ? !1 : !!(n.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0)
        }
        ),
        I(this, "onSessionProposeRequest", t => l(this, null, function*() {
            let {topic: i, payload: r, attestation: n, encryptedId: o} = t
              , {params: a, id: c} = r;
            try {
                let h = this.client.core.eventClient.getEvent({
                    topic: i
                });
                this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"),
                h?.setError(ut.proposal_listener_not_found)),
                this.isValidConnect(ee({}, r.params));
                let p = a.expiryTimestamp || oe(ye.wc_sessionPropose.req.ttl)
                  , u = ee({
                    id: c,
                    pairingTopic: i,
                    expiryTimestamp: p
                }, a);
                yield this.setProposal(c, u);
                let d = yield this.getVerifyContext({
                    attestationId: n,
                    hash: Ke(JSON.stringify(r)),
                    encryptedId: o,
                    metadata: u.proposer.metadata
                });
                h?.addTrace(nt.emit_session_proposal),
                this.client.events.emit("session_proposal", {
                    id: c,
                    params: u,
                    verifyContext: d
                })
            } catch (h) {
                yield this.sendError({
                    id: c,
                    topic: i,
                    error: h,
                    rpcOpts: ye.wc_sessionPropose.autoReject
                }),
                this.client.logger.error(h)
            }
        })),
        I(this, "onSessionProposeResponse", (t, i, r) => l(this, null, function*() {
            let {id: n} = i;
            if (Xe(i)) {
                let {result: o} = i;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    result: o
                });
                let a = this.client.proposal.get(n);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    proposal: a
                });
                let c = a.proposer.publicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    selfPublicKey: c
                });
                let h = o.responderPublicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    peerPublicKey: h
                });
                let p = yield this.client.core.crypto.generateSharedKey(c, h);
                this.pendingSessions.set(n, {
                    sessionTopic: p,
                    pairingTopic: t,
                    proposalId: n,
                    publicKey: c
                });
                let u = yield this.client.core.relayer.subscribe(p, {
                    transportType: r
                });
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    subscriptionId: u
                }),
                yield this.client.core.pairing.activate({
                    topic: t
                })
            } else if (He(i)) {
                yield this.client.proposal.delete(n, K("USER_DISCONNECTED"));
                let o = W("session_connect", n);
                if (this.events.listenerCount(o) === 0)
                    throw new Error(`emitting ${o} without any listeners, 954`);
                this.events.emit(o, {
                    error: i.error
                })
            }
        })),
        I(this, "onSessionSettleRequest", (t, i) => l(this, null, function*() {
            let {id: r, params: n} = i;
            try {
                this.isValidSessionSettleRequest(n);
                let {relay: o, controller: a, expiry: c, namespaces: h, sessionProperties: p, scopedProperties: u, sessionConfig: d} = i.params
                  , g = [...this.pendingSessions.values()].find(m => m.sessionTopic === t);
                if (!g)
                    return this.client.logger.error(`Pending session not found for topic ${t}`);
                let f = this.client.proposal.get(g.proposalId)
                  , y = Te(ee(ee(ee({
                    topic: t,
                    relay: o,
                    expiry: c,
                    namespaces: h,
                    acknowledged: !0,
                    pairingTopic: g.pairingTopic,
                    requiredNamespaces: f.requiredNamespaces,
                    optionalNamespaces: f.optionalNamespaces,
                    controller: a.publicKey,
                    self: {
                        publicKey: g.publicKey,
                        metadata: this.client.metadata
                    },
                    peer: {
                        publicKey: a.publicKey,
                        metadata: a.metadata
                    }
                }, p && {
                    sessionProperties: p
                }), u && {
                    scopedProperties: u
                }), d && {
                    sessionConfig: d
                }), {
                    transportType: ie.relay
                });
                yield this.client.session.set(y.topic, y),
                yield this.setExpiry(y.topic, y.expiry),
                yield this.client.core.pairing.updateMetadata({
                    topic: g.pairingTopic,
                    metadata: y.peer.metadata
                }),
                this.client.events.emit("session_connect", {
                    session: y
                }),
                this.events.emit(W("session_connect", g.proposalId), {
                    session: y
                }),
                this.pendingSessions.delete(g.proposalId),
                this.deleteProposal(g.proposalId, !1),
                this.cleanupDuplicatePairings(y),
                yield this.sendResult({
                    id: i.id,
                    topic: t,
                    result: !0,
                    throwOnFailedPublish: !0
                })
            } catch (o) {
                yield this.sendError({
                    id: r,
                    topic: t,
                    error: o
                }),
                this.client.logger.error(o)
            }
        })),
        I(this, "onSessionSettleResponse", (t, i) => l(this, null, function*() {
            let {id: r} = i;
            Xe(i) ? (yield this.client.session.update(t, {
                acknowledged: !0
            }),
            this.events.emit(W("session_approve", r), {})) : He(i) && (yield this.client.session.delete(t, K("USER_DISCONNECTED")),
            this.events.emit(W("session_approve", r), {
                error: i.error
            }))
        })),
        I(this, "onSessionUpdateRequest", (t, i) => l(this, null, function*() {
            let {params: r, id: n} = i;
            try {
                let o = `${t}_session_update`
                  , a = Dt.get(o);
                if (a && this.isRequestOutOfSync(a, n)) {
                    this.client.logger.warn(`Discarding out of sync request - ${n}`),
                    this.sendError({
                        id: n,
                        topic: t,
                        error: K("INVALID_UPDATE_REQUEST")
                    });
                    return
                }
                this.isValidUpdate(ee({
                    topic: t
                }, r));
                try {
                    Dt.set(o, n),
                    yield this.client.session.update(t, {
                        namespaces: r.namespaces
                    }),
                    yield this.sendResult({
                        id: n,
                        topic: t,
                        result: !0,
                        throwOnFailedPublish: !0
                    })
                } catch (c) {
                    throw Dt.delete(o),
                    c
                }
                this.client.events.emit("session_update", {
                    id: n,
                    topic: t,
                    params: r
                })
            } catch (o) {
                yield this.sendError({
                    id: n,
                    topic: t,
                    error: o
                }),
                this.client.logger.error(o)
            }
        })),
        I(this, "isRequestOutOfSync", (t, i) => i.toString().slice(0, -3) < t.toString().slice(0, -3)),
        I(this, "onSessionUpdateResponse", (t, i) => {
            let {id: r} = i
              , n = W("session_update", r);
            if (this.events.listenerCount(n) === 0)
                throw new Error(`emitting ${n} without any listeners`);
            Xe(i) ? this.events.emit(W("session_update", r), {}) : He(i) && this.events.emit(W("session_update", r), {
                error: i.error
            })
        }
        ),
        I(this, "onSessionExtendRequest", (t, i) => l(this, null, function*() {
            let {id: r} = i;
            try {
                this.isValidExtend({
                    topic: t
                }),
                yield this.setExpiry(t, oe(_s)),
                yield this.sendResult({
                    id: r,
                    topic: t,
                    result: !0,
                    throwOnFailedPublish: !0
                }),
                this.client.events.emit("session_extend", {
                    id: r,
                    topic: t
                })
            } catch (n) {
                yield this.sendError({
                    id: r,
                    topic: t,
                    error: n
                }),
                this.client.logger.error(n)
            }
        })),
        I(this, "onSessionExtendResponse", (t, i) => {
            let {id: r} = i
              , n = W("session_extend", r);
            if (this.events.listenerCount(n) === 0)
                throw new Error(`emitting ${n} without any listeners`);
            Xe(i) ? this.events.emit(W("session_extend", r), {}) : He(i) && this.events.emit(W("session_extend", r), {
                error: i.error
            })
        }
        ),
        I(this, "onSessionPingRequest", (t, i) => l(this, null, function*() {
            let {id: r} = i;
            try {
                this.isValidPing({
                    topic: t
                }),
                yield this.sendResult({
                    id: r,
                    topic: t,
                    result: !0,
                    throwOnFailedPublish: !0
                }),
                this.client.events.emit("session_ping", {
                    id: r,
                    topic: t
                })
            } catch (n) {
                yield this.sendError({
                    id: r,
                    topic: t,
                    error: n
                }),
                this.client.logger.error(n)
            }
        })),
        I(this, "onSessionPingResponse", (t, i) => {
            let {id: r} = i
              , n = W("session_ping", r);
            setTimeout( () => {
                if (this.events.listenerCount(n) === 0)
                    throw new Error(`emitting ${n} without any listeners 2176`);
                Xe(i) ? this.events.emit(W("session_ping", r), {}) : He(i) && this.events.emit(W("session_ping", r), {
                    error: i.error
                })
            }
            , 500)
        }
        ),
        I(this, "onSessionDeleteRequest", (t, i) => l(this, null, function*() {
            let {id: r} = i;
            try {
                this.isValidDisconnect({
                    topic: t,
                    reason: i.params
                }),
                Promise.all([new Promise(n => {
                    this.client.core.relayer.once(ue.publish, () => l(this, null, function*() {
                        n(yield this.deleteSession({
                            topic: t,
                            id: r
                        }))
                    }))
                }
                ), this.sendResult({
                    id: r,
                    topic: t,
                    result: !0,
                    throwOnFailedPublish: !0
                }), this.cleanupPendingSentRequestsForTopic({
                    topic: t,
                    error: K("USER_DISCONNECTED")
                })]).catch(n => this.client.logger.error(n))
            } catch (n) {
                this.client.logger.error(n)
            }
        })),
        I(this, "onSessionRequest", t => l(this, null, function*() {
            var i, r, n;
            let {topic: o, payload: a, attestation: c, encryptedId: h, transportType: p} = t
              , {id: u, params: d} = a;
            try {
                yield this.isValidRequest(ee({
                    topic: o
                }, d));
                let g = this.client.session.get(o)
                  , f = yield this.getVerifyContext({
                    attestationId: c,
                    hash: Ke(JSON.stringify(at("wc_sessionRequest", d, u))),
                    encryptedId: h,
                    metadata: g.peer.metadata,
                    transportType: p
                })
                  , y = {
                    id: u,
                    topic: o,
                    params: d,
                    verifyContext: f
                };
                yield this.setPendingSessionRequest(y),
                p === ie.link_mode && (i = g.peer.metadata.redirect) != null && i.universal && this.client.core.addLinkModeSupportedApp((r = g.peer.metadata.redirect) == null ? void 0 : r.universal),
                (n = this.client.signConfig) != null && n.disableRequestQueue ? this.emitSessionRequest(y) : (this.addSessionRequestToSessionRequestQueue(y),
                this.processSessionRequestQueue())
            } catch (g) {
                yield this.sendError({
                    id: u,
                    topic: o,
                    error: g
                }),
                this.client.logger.error(g)
            }
        })),
        I(this, "onSessionRequestResponse", (t, i) => {
            let {id: r} = i
              , n = W("session_request", r);
            if (this.events.listenerCount(n) === 0)
                throw new Error(`emitting ${n} without any listeners`);
            Xe(i) ? this.events.emit(W("session_request", r), {
                result: i.result
            }) : He(i) && this.events.emit(W("session_request", r), {
                error: i.error
            })
        }
        ),
        I(this, "onSessionEventRequest", (t, i) => l(this, null, function*() {
            let {id: r, params: n} = i;
            try {
                let o = `${t}_session_event_${n.event.name}`
                  , a = Dt.get(o);
                if (a && this.isRequestOutOfSync(a, r)) {
                    this.client.logger.info(`Discarding out of sync request - ${r}`);
                    return
                }
                this.isValidEmit(ee({
                    topic: t
                }, n)),
                this.client.events.emit("session_event", {
                    id: r,
                    topic: t,
                    params: n
                }),
                Dt.set(o, r)
            } catch (o) {
                yield this.sendError({
                    id: r,
                    topic: t,
                    error: o
                }),
                this.client.logger.error(o)
            }
        })),
        I(this, "onSessionAuthenticateResponse", (t, i) => {
            let {id: r} = i;
            this.client.logger.trace({
                type: "method",
                method: "onSessionAuthenticateResponse",
                topic: t,
                payload: i
            }),
            Xe(i) ? this.events.emit(W("session_request", r), {
                result: i.result
            }) : He(i) && this.events.emit(W("session_request", r), {
                error: i.error
            })
        }
        ),
        I(this, "onSessionAuthenticateRequest", t => l(this, null, function*() {
            var i;
            let {topic: r, payload: n, attestation: o, encryptedId: a, transportType: c} = t;
            try {
                let {requester: h, authPayload: p, expiryTimestamp: u} = n.params
                  , d = yield this.getVerifyContext({
                    attestationId: o,
                    hash: Ke(JSON.stringify(n)),
                    encryptedId: a,
                    metadata: h.metadata,
                    transportType: c
                })
                  , g = {
                    requester: h,
                    pairingTopic: r,
                    id: n.id,
                    authPayload: p,
                    verifyContext: d,
                    expiryTimestamp: u
                };
                yield this.setAuthRequest(n.id, {
                    request: g,
                    pairingTopic: r,
                    transportType: c
                }),
                c === ie.link_mode && (i = h.metadata.redirect) != null && i.universal && this.client.core.addLinkModeSupportedApp(h.metadata.redirect.universal),
                this.client.events.emit("session_authenticate", {
                    topic: r,
                    params: n.params,
                    id: n.id,
                    verifyContext: d
                })
            } catch (h) {
                this.client.logger.error(h);
                let p = n.params.requester.publicKey
                  , u = yield this.client.core.crypto.generateKeyPair()
                  , d = this.getAppLinkIfEnabled(n.params.requester.metadata, c)
                  , g = {
                    type: st,
                    receiverPublicKey: p,
                    senderPublicKey: u
                };
                yield this.sendError({
                    id: n.id,
                    topic: r,
                    error: h,
                    encodeOpts: g,
                    rpcOpts: ye.wc_sessionAuthenticate.autoReject,
                    appLink: d
                })
            }
        })),
        I(this, "addSessionRequestToSessionRequestQueue", t => {
            this.sessionRequestQueue.queue.push(t)
        }
        ),
        I(this, "cleanupAfterResponse", t => {
            this.deletePendingSessionRequest(t.response.id, {
                message: "fulfilled",
                code: 0
            }),
            setTimeout( () => {
                this.sessionRequestQueue.state = ft.idle,
                this.processSessionRequestQueue()
            }
            , (0,
            V.toMiliseconds)(this.requestQueueDelay))
        }
        ),
        I(this, "cleanupPendingSentRequestsForTopic", ({topic: t, error: i}) => {
            let r = this.client.core.history.pending;
            r.length > 0 && r.filter(n => n.topic === t && n.request.method === "wc_sessionRequest").forEach(n => {
                let o = n.request.id
                  , a = W("session_request", o);
                if (this.events.listenerCount(a) === 0)
                    throw new Error(`emitting ${a} without any listeners`);
                this.events.emit(W("session_request", n.request.id), {
                    error: i
                })
            }
            )
        }
        ),
        I(this, "processSessionRequestQueue", () => {
            if (this.sessionRequestQueue.state === ft.active) {
                this.client.logger.info("session request queue is already active.");
                return
            }
            let t = this.sessionRequestQueue.queue[0];
            if (!t) {
                this.client.logger.info("session request queue is empty.");
                return
            }
            try {
                this.sessionRequestQueue.state = ft.active,
                this.emitSessionRequest(t)
            } catch (i) {
                this.client.logger.error(i)
            }
        }
        ),
        I(this, "emitSessionRequest", t => {
            this.client.events.emit("session_request", t)
        }
        ),
        I(this, "onPairingCreated", t => {
            if (t.methods && this.expectedPairingMethodMap.set(t.topic, t.methods),
            t.active)
                return;
            let i = this.client.proposal.getAll().find(r => r.pairingTopic === t.topic);
            i && this.onSessionProposeRequest({
                topic: t.topic,
                payload: at("wc_sessionPropose", Te(ee({}, i), {
                    requiredNamespaces: i.requiredNamespaces,
                    optionalNamespaces: i.optionalNamespaces,
                    relays: i.relays,
                    proposer: i.proposer,
                    sessionProperties: i.sessionProperties,
                    scopedProperties: i.scopedProperties
                }), i.id)
            })
        }
        ),
        I(this, "isValidConnect", t => l(this, null, function*() {
            if (!Oe(t)) {
                let {message: h} = C("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
                throw new Error(h)
            }
            let {pairingTopic: i, requiredNamespaces: r, optionalNamespaces: n, sessionProperties: o, scopedProperties: a, relays: c} = t;
            if (pe(i) || (yield this.isValidPairingTopic(i)),
            !Cc(c, !0)) {
                let {message: h} = C("MISSING_OR_INVALID", `connect() relays: ${c}`);
                throw new Error(h)
            }
            if (!pe(r) && lt(r) !== 0) {
                let h = "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
                ["fatal", "error", "silent"].includes(this.client.logger.level) ? console.warn(h) : this.client.logger.warn(h),
                this.validateNamespaces(r, "requiredNamespaces")
            }
            if (!pe(n) && lt(n) !== 0 && this.validateNamespaces(n, "optionalNamespaces"),
            pe(o) || this.validateSessionProps(o, "sessionProperties"),
            !pe(a)) {
                this.validateSessionProps(a, "scopedProperties");
                let h = Object.keys(r || {}).concat(Object.keys(n || {}));
                if (!Object.keys(a).every(p => h.includes(p)))
                    throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(a)}, required/optional namespaces: ${JSON.stringify(h)}`)
            }
        })),
        I(this, "validateNamespaces", (t, i) => {
            let r = Ac(t, "connect()", i);
            if (r)
                throw new Error(r.message)
        }
        ),
        I(this, "isValidApprove", t => l(this, null, function*() {
            if (!Oe(t))
                throw new Error(C("MISSING_OR_INVALID", `approve() params: ${t}`).message);
            let {id: i, namespaces: r, relayProtocol: n, sessionProperties: o, scopedProperties: a} = t;
            this.checkRecentlyDeleted(i),
            yield this.isValidProposalId(i);
            let c = this.client.proposal.get(i)
              , h = Ci(r, "approve()");
            if (h)
                throw new Error(h.message);
            let p = cn(c.requiredNamespaces, r, "approve()");
            if (p)
                throw new Error(p.message);
            if (!re(n, !0)) {
                let {message: u} = C("MISSING_OR_INVALID", `approve() relayProtocol: ${n}`);
                throw new Error(u)
            }
            if (pe(o) || this.validateSessionProps(o, "sessionProperties"),
            !pe(a)) {
                this.validateSessionProps(a, "scopedProperties");
                let u = new Set(Object.keys(r));
                if (!Object.keys(a).every(d => u.has(d)))
                    throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(a)}, approved namespaces: ${Array.from(u).join(", ")}`)
            }
        })),
        I(this, "isValidReject", t => l(this, null, function*() {
            if (!Oe(t)) {
                let {message: n} = C("MISSING_OR_INVALID", `reject() params: ${t}`);
                throw new Error(n)
            }
            let {id: i, reason: r} = t;
            if (this.checkRecentlyDeleted(i),
            yield this.isValidProposalId(i),
            !qc(r)) {
                let {message: n} = C("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
                throw new Error(n)
            }
        })),
        I(this, "isValidSessionSettleRequest", t => {
            if (!Oe(t)) {
                let {message: h} = C("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
                throw new Error(h)
            }
            let {relay: i, controller: r, namespaces: n, expiry: o} = t;
            if (!on(i)) {
                let {message: h} = C("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                throw new Error(h)
            }
            let a = xc(r, "onSessionSettleRequest()");
            if (a)
                throw new Error(a.message);
            let c = Ci(n, "onSessionSettleRequest()");
            if (c)
                throw new Error(c.message);
            if (ht(o)) {
                let {message: h} = C("EXPIRED", "onSessionSettleRequest()");
                throw new Error(h)
            }
        }
        ),
        I(this, "isValidUpdate", t => l(this, null, function*() {
            if (!Oe(t)) {
                let {message: c} = C("MISSING_OR_INVALID", `update() params: ${t}`);
                throw new Error(c)
            }
            let {topic: i, namespaces: r} = t;
            this.checkRecentlyDeleted(i),
            yield this.isValidSessionTopic(i);
            let n = this.client.session.get(i)
              , o = Ci(r, "update()");
            if (o)
                throw new Error(o.message);
            let a = cn(n.requiredNamespaces, r, "update()");
            if (a)
                throw new Error(a.message)
        })),
        I(this, "isValidExtend", t => l(this, null, function*() {
            if (!Oe(t)) {
                let {message: r} = C("MISSING_OR_INVALID", `extend() params: ${t}`);
                throw new Error(r)
            }
            let {topic: i} = t;
            this.checkRecentlyDeleted(i),
            yield this.isValidSessionTopic(i)
        })),
        I(this, "isValidRequest", t => l(this, null, function*() {
            if (!Oe(t)) {
                let {message: c} = C("MISSING_OR_INVALID", `request() params: ${t}`);
                throw new Error(c)
            }
            let {topic: i, request: r, chainId: n, expiry: o} = t;
            this.checkRecentlyDeleted(i),
            yield this.isValidSessionTopic(i);
            let {namespaces: a} = this.client.session.get(i);
            if (!an(a, n)) {
                let {message: c} = C("MISSING_OR_INVALID", `request() chainId: ${n}`);
                throw new Error(c)
            }
            if (!Dc(r)) {
                let {message: c} = C("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
                throw new Error(c)
            }
            if (!kc(a, n, r.method)) {
                let {message: c} = C("MISSING_OR_INVALID", `request() method: ${r.method}`);
                throw new Error(c)
            }
            if (o && !Lc(o, Kn)) {
                let {message: c} = C("MISSING_OR_INVALID", `request() expiry: ${o}. Expiry must be a number (in seconds) between ${Kn.min} and ${Kn.max}`);
                throw new Error(c)
            }
        })),
        I(this, "isValidRespond", t => l(this, null, function*() {
            var i;
            if (!Oe(t)) {
                let {message: o} = C("MISSING_OR_INVALID", `respond() params: ${t}`);
                throw new Error(o)
            }
            let {topic: r, response: n} = t;
            try {
                yield this.isValidSessionTopic(r)
            } catch (o) {
                throw (i = t?.response) != null && i.id && this.cleanupAfterResponse(t),
                o
            }
            if (!Fc(n)) {
                let {message: o} = C("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(n)}`);
                throw new Error(o)
            }
        })),
        I(this, "isValidPing", t => l(this, null, function*() {
            if (!Oe(t)) {
                let {message: r} = C("MISSING_OR_INVALID", `ping() params: ${t}`);
                throw new Error(r)
            }
            let {topic: i} = t;
            yield this.isValidSessionOrPairingTopic(i)
        })),
        I(this, "isValidEmit", t => l(this, null, function*() {
            if (!Oe(t)) {
                let {message: a} = C("MISSING_OR_INVALID", `emit() params: ${t}`);
                throw new Error(a)
            }
            let {topic: i, event: r, chainId: n} = t;
            yield this.isValidSessionTopic(i);
            let {namespaces: o} = this.client.session.get(i);
            if (!an(o, n)) {
                let {message: a} = C("MISSING_OR_INVALID", `emit() chainId: ${n}`);
                throw new Error(a)
            }
            if (!Uc(r)) {
                let {message: a} = C("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                throw new Error(a)
            }
            if (!jc(o, n, r.name)) {
                let {message: a} = C("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                throw new Error(a)
            }
        })),
        I(this, "isValidDisconnect", t => l(this, null, function*() {
            if (!Oe(t)) {
                let {message: r} = C("MISSING_OR_INVALID", `disconnect() params: ${t}`);
                throw new Error(r)
            }
            let {topic: i} = t;
            yield this.isValidSessionOrPairingTopic(i)
        })),
        I(this, "isValidAuthenticate", t => {
            let {chains: i, uri: r, domain: n, nonce: o} = t;
            if (!Array.isArray(i) || i.length === 0)
                throw new Error("chains is required and must be a non-empty array");
            if (!re(r, !1))
                throw new Error("uri is required parameter");
            if (!re(n, !1))
                throw new Error("domain is required parameter");
            if (!re(o, !1))
                throw new Error("nonce is required parameter");
            if ([...new Set(i.map(c => Ft(c).namespace))].length > 1)
                throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
            let {namespace: a} = Ft(i[0]);
            if (a !== "eip155")
                throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.")
        }
        ),
        I(this, "getVerifyContext", t => l(this, null, function*() {
            let {attestationId: i, hash: r, encryptedId: n, metadata: o, transportType: a} = t
              , c = {
                verified: {
                    verifyUrl: o.verifyUrl || Es,
                    validation: "UNKNOWN",
                    origin: o.url || ""
                }
            };
            try {
                if (a === ie.link_mode) {
                    let p = this.getAppLinkIfEnabled(o, a);
                    return c.verified.validation = p && new URL(p).origin === new URL(o.url).origin ? "VALID" : "INVALID",
                    c
                }
                let h = yield this.client.core.verify.resolve({
                    attestationId: i,
                    hash: r,
                    encryptedId: n,
                    verifyUrl: o.verifyUrl
                });
                h && (c.verified.origin = h.origin,
                c.verified.isScam = h.isScam,
                c.verified.validation = h.origin === new URL(o.url).origin ? "VALID" : "INVALID")
            } catch (h) {
                this.client.logger.warn(h)
            }
            return this.client.logger.debug(`Verify context: ${JSON.stringify(c)}`),
            c
        })),
        I(this, "validateSessionProps", (t, i) => {
            Object.values(t).forEach( (r, n) => {
                if (r == null) {
                    let {message: o} = C("MISSING_OR_INVALID", `${i} must contain an existing value for each key. Received: ${r} for key ${Object.keys(t)[n]}`);
                    throw new Error(o)
                }
            }
            )
        }
        ),
        I(this, "getPendingAuthRequest", t => {
            let i = this.client.auth.requests.get(t);
            return typeof i == "object" ? i : void 0
        }
        ),
        I(this, "addToRecentlyDeleted", (t, i) => {
            if (this.recentlyDeletedMap.set(t, i),
            this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
                let r = 0
                  , n = this.recentlyDeletedLimit / 2;
                for (let o of this.recentlyDeletedMap.keys()) {
                    if (r++ >= n)
                        break;
                    this.recentlyDeletedMap.delete(o)
                }
            }
        }
        ),
        I(this, "checkRecentlyDeleted", t => {
            let i = this.recentlyDeletedMap.get(t);
            if (i) {
                let {message: r} = C("MISSING_OR_INVALID", `Record was recently deleted - ${i}: ${t}`);
                throw new Error(r)
            }
        }
        ),
        I(this, "isLinkModeEnabled", (t, i) => {
            var r, n, o, a, c, h, p, u, d;
            return !t || i !== ie.link_mode ? !1 : ((n = (r = this.client.metadata) == null ? void 0 : r.redirect) == null ? void 0 : n.linkMode) === !0 && ((a = (o = this.client.metadata) == null ? void 0 : o.redirect) == null ? void 0 : a.universal) !== void 0 && ((h = (c = this.client.metadata) == null ? void 0 : c.redirect) == null ? void 0 : h.universal) !== "" && ((p = t?.redirect) == null ? void 0 : p.universal) !== void 0 && ((u = t?.redirect) == null ? void 0 : u.universal) !== "" && ((d = t?.redirect) == null ? void 0 : d.linkMode) === !0 && this.client.core.linkModeSupportedApps.includes(t.redirect.universal) && typeof (global == null ? void 0 : global.Linking) < "u"
        }
        ),
        I(this, "getAppLinkIfEnabled", (t, i) => {
            var r;
            return this.isLinkModeEnabled(t, i) ? (r = t?.redirect) == null ? void 0 : r.universal : void 0
        }
        ),
        I(this, "handleLinkModeMessage", ({url: t}) => {
            if (!t || !t.includes("wc_ev") || !t.includes("topic"))
                return;
            let i = Mr(t, "topic") || ""
              , r = decodeURIComponent(Mr(t, "wc_ev") || "")
              , n = this.client.session.keys.includes(i);
            n && this.client.session.update(i, {
                transportType: ie.link_mode
            }),
            this.client.core.dispatchEnvelope({
                topic: i,
                message: r,
                sessionExists: n
            })
        }
        ),
        I(this, "registerLinkModeListeners", () => l(this, null, function*() {
            var t;
            if (Js() || Pt() && (t = this.client.metadata.redirect) != null && t.linkMode) {
                let i = global == null ? void 0 : global.Linking;
                if (typeof i < "u") {
                    i.addEventListener("url", this.handleLinkModeMessage, this.client.name);
                    let r = yield i.getInitialURL();
                    r && setTimeout( () => {
                        this.handleLinkModeMessage({
                            url: r
                        })
                    }
                    , 50)
                }
            }
        })),
        I(this, "shouldSetTVF", (t, i) => {
            if (!i || t !== "wc_sessionRequest")
                return !1;
            let {request: r} = i;
            return Object.keys(qh).includes(r.method)
        }
        ),
        I(this, "getTVFParams", (t, i, r) => {
            var n, o;
            try {
                let a = i.request.method
                  , c = this.extractTxHashesFromResult(a, r);
                return Te(ee({
                    correlationId: t,
                    rpcMethods: [a],
                    chainId: i.chainId
                }, this.isValidContractData(i.request.params) && {
                    contractAddresses: [(o = (n = i.request.params) == null ? void 0 : n[0]) == null ? void 0 : o.to]
                }), {
                    txHashes: c
                })
            } catch (a) {
                this.client.logger.warn("Error getting TVF params", a)
            }
            return {}
        }
        ),
        I(this, "isValidContractData", t => {
            var i;
            if (!t)
                return !1;
            try {
                let r = t?.data || ((i = t?.[0]) == null ? void 0 : i.data);
                if (!r.startsWith("0x"))
                    return !1;
                let n = r.slice(2);
                return /^[0-9a-fA-F]*$/.test(n) ? n.length % 2 === 0 : !1
            } catch {}
            return !1
        }
        ),
        I(this, "extractTxHashesFromResult", (t, i) => {
            try {
                let r = qh[t];
                if (typeof i == "string")
                    return [i];
                let n = i[r.key];
                if (qe(n))
                    return t === "solana_signAllTransactions" ? n.map(o => za(o)) : n;
                if (typeof n == "string")
                    return [n]
            } catch (r) {
                this.client.logger.warn("Error extracting tx hashes from result", r)
            }
            return []
        }
        )
    }
    processPendingMessageEvents() {
        return l(this, null, function*() {
            try {
                let e = this.client.session.keys
                  , t = this.client.core.relayer.messages.getWithoutAck(e);
                for (let[i,r] of Object.entries(t))
                    for (let n of r)
                        try {
                            yield this.onProviderMessageEvent({
                                topic: i,
                                message: n,
                                publishedAt: Date.now()
                            })
                        } catch {
                            this.client.logger.warn(`Error processing pending message event for topic: ${i}, message: ${n}`)
                        }
            } catch (e) {
                this.client.logger.warn("processPendingMessageEvents failed", e)
            }
        })
    }
    isInitialized() {
        if (!this.initialized) {
            let {message: e} = C("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    confirmOnlineStateOrThrow() {
        return l(this, null, function*() {
            yield this.client.core.relayer.confirmOnlineStateOrThrow()
        })
    }
    registerRelayerEvents() {
        this.client.core.relayer.on(ue.message, e => {
            this.onProviderMessageEvent(e)
        }
        )
    }
    onRelayMessage(e) {
        return l(this, null, function*() {
            let {topic: t, message: i, attestation: r, transportType: n} = e
              , {publicKey: o} = this.client.auth.authKeys.keys.includes(Yi) ? this.client.auth.authKeys.get(Yi) : {
                responseTopic: void 0,
                publicKey: void 0
            };
            try {
                let a = yield this.client.core.crypto.decode(t, i, {
                    receiverPublicKey: o,
                    encoding: n === ie.link_mode ? Rt : Le
                });
                Ls(a) ? (this.client.core.history.set(t, a),
                yield this.onRelayEventRequest({
                    topic: t,
                    payload: a,
                    attestation: r,
                    transportType: n,
                    encryptedId: Ke(i)
                })) : $s(a) ? (yield this.client.core.history.resolve(a),
                yield this.onRelayEventResponse({
                    topic: t,
                    payload: a,
                    transportType: n
                }),
                this.client.core.history.delete(t, a.id)) : yield this.onRelayEventUnknownPayload({
                    topic: t,
                    payload: a,
                    transportType: n
                }),
                yield this.client.core.relayer.messages.ack(t, i)
            } catch (a) {
                this.client.logger.error(a)
            }
        })
    }
    registerExpirerEvents() {
        this.client.core.expirer.on(Be.expired, e => l(this, null, function*() {
            let {topic: t, id: i} = _i(e.target);
            if (i && this.client.pendingRequest.keys.includes(i))
                return yield this.deletePendingSessionRequest(i, C("EXPIRED"), !0);
            if (i && this.client.auth.requests.keys.includes(i))
                return yield this.deletePendingAuthRequest(i, C("EXPIRED"), !0);
            t ? this.client.session.keys.includes(t) && (yield this.deleteSession({
                topic: t,
                expirerHasDeleted: !0
            }),
            this.client.events.emit("session_expire", {
                topic: t
            })) : i && (yield this.deleteProposal(i, !0),
            this.client.events.emit("proposal_expire", {
                id: i
            }))
        }))
    }
    registerPairingEvents() {
        this.client.core.pairing.events.on(Ut.create, e => this.onPairingCreated(e)),
        this.client.core.pairing.events.on(Ut.delete, e => {
            this.addToRecentlyDeleted(e.topic, "pairing")
        }
        )
    }
    isValidPairingTopic(e) {
        if (!re(e, !1)) {
            let {message: t} = C("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
            throw new Error(t)
        }
        if (!this.client.core.pairing.pairings.keys.includes(e)) {
            let {message: t} = C("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
            throw new Error(t)
        }
        if (ht(this.client.core.pairing.pairings.get(e).expiry)) {
            let {message: t} = C("EXPIRED", `pairing topic: ${e}`);
            throw new Error(t)
        }
    }
    isValidSessionTopic(e) {
        return l(this, null, function*() {
            if (!re(e, !1)) {
                let {message: t} = C("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
                throw new Error(t)
            }
            if (this.checkRecentlyDeleted(e),
            !this.client.session.keys.includes(e)) {
                let {message: t} = C("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
                throw new Error(t)
            }
            if (ht(this.client.session.get(e).expiry)) {
                yield this.deleteSession({
                    topic: e
                });
                let {message: t} = C("EXPIRED", `session topic: ${e}`);
                throw new Error(t)
            }
            if (!this.client.core.crypto.keychain.has(e)) {
                let {message: t} = C("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
                throw yield this.deleteSession({
                    topic: e
                }),
                new Error(t)
            }
        })
    }
    isValidSessionOrPairingTopic(e) {
        return l(this, null, function*() {
            if (this.checkRecentlyDeleted(e),
            this.client.session.keys.includes(e))
                yield this.isValidSessionTopic(e);
            else if (this.client.core.pairing.pairings.keys.includes(e))
                this.isValidPairingTopic(e);
            else if (re(e, !1)) {
                let {message: t} = C("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
                throw new Error(t)
            } else {
                let {message: t} = C("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
                throw new Error(t)
            }
        })
    }
    isValidProposalId(e) {
        return l(this, null, function*() {
            if (!Nc(e)) {
                let {message: t} = C("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
                throw new Error(t)
            }
            if (!this.client.proposal.keys.includes(e)) {
                let {message: t} = C("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
                throw new Error(t)
            }
            if (ht(this.client.proposal.get(e).expiryTimestamp)) {
                yield this.deleteProposal(e);
                let {message: t} = C("EXPIRED", `proposal id: ${e}`);
                throw new Error(t)
            }
        })
    }
}
  , Jn = class extends gt {
    constructor(e, t) {
        super(e, t, Lm, io),
        this.core = e,
        this.logger = t
    }
}
  , Qn = class extends gt {
    constructor(e, t) {
        super(e, t, $m, io),
        this.core = e,
        this.logger = t
    }
}
  , Xn = class extends gt {
    constructor(e, t) {
        super(e, t, Bm, io, i => i.id),
        this.core = e,
        this.logger = t
    }
}
  , Zn = class extends gt {
    constructor(e, t) {
        super(e, t, Km, Xi, () => Yi),
        this.core = e,
        this.logger = t
    }
}
  , eo = class extends gt {
    constructor(e, t) {
        super(e, t, Gm, Xi),
        this.core = e,
        this.logger = t
    }
}
  , to = class extends gt {
    constructor(e, t) {
        super(e, t, Wm, Xi, i => i.id),
        this.core = e,
        this.logger = t
    }
}
  , ey = Object.defineProperty
  , ty = (s, e, t) => e in s ? ey(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Gn = (s, e, t) => ty(s, typeof e != "symbol" ? e + "" : e, t)
  , so = class {
    constructor(e, t) {
        this.core = e,
        this.logger = t,
        Gn(this, "authKeys"),
        Gn(this, "pairingTopics"),
        Gn(this, "requests"),
        this.authKeys = new Zn(this.core,this.logger),
        this.pairingTopics = new eo(this.core,this.logger),
        this.requests = new to(this.core,this.logger)
    }
    init() {
        return l(this, null, function*() {
            yield this.authKeys.init(),
            yield this.pairingTopics.init(),
            yield this.requests.init()
        })
    }
}
  , sy = Object.defineProperty
  , iy = (s, e, t) => e in s ? sy(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , H = (s, e, t) => iy(s, typeof e != "symbol" ? e + "" : e, t)
  , Ji = class s extends Vi {
    constructor(e) {
        super(e),
        H(this, "protocol", Fh),
        H(this, "version", Uh),
        H(this, "name", Hn.name),
        H(this, "metadata"),
        H(this, "core"),
        H(this, "logger"),
        H(this, "events", new Qi.EventEmitter),
        H(this, "engine"),
        H(this, "session"),
        H(this, "proposal"),
        H(this, "pendingRequest"),
        H(this, "auth"),
        H(this, "signConfig"),
        H(this, "on", (i, r) => this.events.on(i, r)),
        H(this, "once", (i, r) => this.events.once(i, r)),
        H(this, "off", (i, r) => this.events.off(i, r)),
        H(this, "removeListener", (i, r) => this.events.removeListener(i, r)),
        H(this, "removeAllListeners", i => this.events.removeAllListeners(i)),
        H(this, "connect", i => l(this, null, function*() {
            try {
                return yield this.engine.connect(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        H(this, "pair", i => l(this, null, function*() {
            try {
                return yield this.engine.pair(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        H(this, "approve", i => l(this, null, function*() {
            try {
                return yield this.engine.approve(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        H(this, "reject", i => l(this, null, function*() {
            try {
                return yield this.engine.reject(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        H(this, "update", i => l(this, null, function*() {
            try {
                return yield this.engine.update(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        H(this, "extend", i => l(this, null, function*() {
            try {
                return yield this.engine.extend(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        H(this, "request", i => l(this, null, function*() {
            try {
                return yield this.engine.request(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        H(this, "respond", i => l(this, null, function*() {
            try {
                return yield this.engine.respond(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        H(this, "ping", i => l(this, null, function*() {
            try {
                return yield this.engine.ping(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        H(this, "emit", i => l(this, null, function*() {
            try {
                return yield this.engine.emit(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        H(this, "disconnect", i => l(this, null, function*() {
            try {
                return yield this.engine.disconnect(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        H(this, "find", i => {
            try {
                return this.engine.find(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        }
        ),
        H(this, "getPendingSessionRequests", () => {
            try {
                return this.engine.getPendingSessionRequests()
            } catch (i) {
                throw this.logger.error(i.message),
                i
            }
        }
        ),
        H(this, "authenticate", (i, r) => l(this, null, function*() {
            try {
                return yield this.engine.authenticate(i, r)
            } catch (n) {
                throw this.logger.error(n.message),
                n
            }
        })),
        H(this, "formatAuthMessage", i => {
            try {
                return this.engine.formatAuthMessage(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        }
        ),
        H(this, "approveSessionAuthenticate", i => l(this, null, function*() {
            try {
                return yield this.engine.approveSessionAuthenticate(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        H(this, "rejectSessionAuthenticate", i => l(this, null, function*() {
            try {
                return yield this.engine.rejectSessionAuthenticate(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        this.name = e?.name || Hn.name,
        this.metadata = Ta(e?.metadata),
        this.signConfig = e?.signConfig;
        let t = typeof e?.logger < "u" && typeof e?.logger != "string" ? e.logger : (0,
        ss.default)(Bt({
            level: e?.logger || Hn.logger
        }));
        this.core = e?.core || new Ah(e),
        this.logger = we(t, this.name),
        this.session = new Qn(this.core,this.logger),
        this.proposal = new Jn(this.core,this.logger),
        this.pendingRequest = new Xn(this.core,this.logger),
        this.engine = new Yn(this),
        this.auth = new so(this.core,this.logger)
    }
    static init(e) {
        return l(this, null, function*() {
            let t = new s(e);
            return yield t.initialize(),
            t
        })
    }
    get context() {
        return xe(this.logger)
    }
    get pairing() {
        return this.core.pairing.pairings
    }
    initialize() {
        return l(this, null, function*() {
            this.logger.trace("Initialized");
            try {
                yield this.core.start(),
                yield this.session.init(),
                yield this.proposal.init(),
                yield this.pendingRequest.init(),
                yield this.auth.init(),
                yield this.engine.init(),
                this.logger.info("SignClient Initialization Success"),
                setTimeout( () => {
                    this.engine.processRelayMessageCache()
                }
                , (0,
                V.toMiliseconds)(V.ONE_SECOND))
            } catch (e) {
                throw this.logger.info("SignClient Initialization Failure"),
                this.logger.error(e.message),
                e
            }
        })
    }
}
;
var Qh = Qe(ks());
var jh = "error"
  , ry = "wss://relay.walletconnect.org"
  , ny = "wc"
  , oy = "universal_provider"
  , Zi = `${ny}@2:${oy}:`
  , Xh = "https://rpc.walletconnect.org/v1/"
  , Fs = "generic"
  , ay = `${Xh}bundler`
  , Je = {
    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
};
function cy() {}
function _o(s) {
    return s == null || typeof s != "object" && typeof s != "function"
}
function Po(s) {
    return ArrayBuffer.isView(s) && !(s instanceof DataView)
}
function hy(s) {
    if (_o(s))
        return s;
    if (Array.isArray(s) || Po(s) || s instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && s instanceof SharedArrayBuffer)
        return s.slice(0);
    let e = Object.getPrototypeOf(s)
      , t = e.constructor;
    if (s instanceof Date || s instanceof Map || s instanceof Set)
        return new t(s);
    if (s instanceof RegExp) {
        let i = new t(s);
        return i.lastIndex = s.lastIndex,
        i
    }
    if (s instanceof DataView)
        return new t(s.buffer.slice(0));
    if (s instanceof Error) {
        let i = new t(s.message);
        return i.stack = s.stack,
        i.name = s.name,
        i.cause = s.cause,
        i
    }
    if (typeof File < "u" && s instanceof File)
        return new t([s],s.name,{
            type: s.type,
            lastModified: s.lastModified
        });
    if (typeof s == "object") {
        let i = Object.create(e);
        return Object.assign(i, s)
    }
    return s
}
function Lh(s) {
    return typeof s == "object" && s !== null
}
function Zh(s) {
    return Object.getOwnPropertySymbols(s).filter(e => Object.prototype.propertyIsEnumerable.call(s, e))
}
function el(s) {
    return s == null ? s === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(s)
}
var ly = "[object RegExp]"
  , tl = "[object String]"
  , sl = "[object Number]"
  , il = "[object Boolean]"
  , rl = "[object Arguments]"
  , py = "[object Symbol]"
  , uy = "[object Date]"
  , dy = "[object Map]"
  , gy = "[object Set]"
  , fy = "[object Array]"
  , my = "[object ArrayBuffer]"
  , yy = "[object Object]"
  , wy = "[object DataView]"
  , by = "[object Uint8Array]"
  , vy = "[object Uint8ClampedArray]"
  , Ey = "[object Uint16Array]"
  , Iy = "[object Uint32Array]"
  , _y = "[object Int8Array]"
  , Py = "[object Int16Array]"
  , Sy = "[object Int32Array]"
  , Oy = "[object Float32Array]"
  , Ry = "[object Float64Array]";
function xy(s, e) {
    return Us(s, void 0, s, new Map, e)
}
function Us(s, e, t, i=new Map, r=void 0) {
    let n = r?.(s, e, t, i);
    if (n != null)
        return n;
    if (_o(s))
        return s;
    if (i.has(s))
        return i.get(s);
    if (Array.isArray(s)) {
        let o = new Array(s.length);
        i.set(s, o);
        for (let a = 0; a < s.length; a++)
            o[a] = Us(s[a], a, t, i, r);
        return Object.hasOwn(s, "index") && (o.index = s.index),
        Object.hasOwn(s, "input") && (o.input = s.input),
        o
    }
    if (s instanceof Date)
        return new Date(s.getTime());
    if (s instanceof RegExp) {
        let o = new RegExp(s.source,s.flags);
        return o.lastIndex = s.lastIndex,
        o
    }
    if (s instanceof Map) {
        let o = new Map;
        i.set(s, o);
        for (let[a,c] of s)
            o.set(a, Us(c, a, t, i, r));
        return o
    }
    if (s instanceof Set) {
        let o = new Set;
        i.set(s, o);
        for (let a of s)
            o.add(Us(a, void 0, t, i, r));
        return o
    }
    if (typeof Buffer < "u" && Buffer.isBuffer(s))
        return s.subarray();
    if (Po(s)) {
        let o = new (Object.getPrototypeOf(s)).constructor(s.length);
        i.set(s, o);
        for (let a = 0; a < s.length; a++)
            o[a] = Us(s[a], a, t, i, r);
        return o
    }
    if (s instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && s instanceof SharedArrayBuffer)
        return s.slice(0);
    if (s instanceof DataView) {
        let o = new DataView(s.buffer.slice(0),s.byteOffset,s.byteLength);
        return i.set(s, o),
        Qt(o, s, t, i, r),
        o
    }
    if (typeof File < "u" && s instanceof File) {
        let o = new File([s],s.name,{
            type: s.type
        });
        return i.set(s, o),
        Qt(o, s, t, i, r),
        o
    }
    if (s instanceof Blob) {
        let o = new Blob([s],{
            type: s.type
        });
        return i.set(s, o),
        Qt(o, s, t, i, r),
        o
    }
    if (s instanceof Error) {
        let o = new s.constructor;
        return i.set(s, o),
        o.message = s.message,
        o.name = s.name,
        o.stack = s.stack,
        o.cause = s.cause,
        Qt(o, s, t, i, r),
        o
    }
    if (typeof s == "object" && Ty(s)) {
        let o = Object.create(Object.getPrototypeOf(s));
        return i.set(s, o),
        Qt(o, s, t, i, r),
        o
    }
    return s
}
function Qt(s, e, t=s, i, r) {
    let n = [...Object.keys(e), ...Zh(e)];
    for (let o = 0; o < n.length; o++) {
        let a = n[o]
          , c = Object.getOwnPropertyDescriptor(s, a);
        (c == null || c.writable) && (s[a] = Us(e[a], a, t, i, r))
    }
}
function Ty(s) {
    switch (el(s)) {
    case rl:
    case fy:
    case my:
    case wy:
    case il:
    case uy:
    case Oy:
    case Ry:
    case _y:
    case Py:
    case Sy:
    case dy:
    case sl:
    case yy:
    case ly:
    case gy:
    case tl:
    case py:
    case by:
    case vy:
    case Ey:
    case Iy:
        return !0;
    default:
        return !1
    }
}
function Ay(s, e) {
    return xy(s, (t, i, r, n) => {
        let o = e?.(t, i, r, n);
        if (o != null)
            return o;
        if (typeof s == "object")
            switch (Object.prototype.toString.call(s)) {
            case sl:
            case tl:
            case il:
                {
                    let a = new s.constructor(s?.valueOf());
                    return Qt(a, s),
                    a
                }
            case rl:
                {
                    let a = {};
                    return Qt(a, s),
                    a.length = s.length,
                    a[Symbol.iterator] = s[Symbol.iterator],
                    a
                }
            default:
                return
            }
    }
    )
}
function $h(s) {
    return Ay(s)
}
function Mh(s) {
    return s !== null && typeof s == "object" && el(s) === "[object Arguments]"
}
function Cy(s) {
    return Po(s)
}
function Ny(s) {
    if (typeof s != "object" || s == null)
        return !1;
    if (Object.getPrototypeOf(s) === null)
        return !0;
    if (Object.prototype.toString.call(s) !== "[object Object]") {
        let t = s[Symbol.toStringTag];
        return t == null || !Object.getOwnPropertyDescriptor(s, Symbol.toStringTag)?.writable ? !1 : s.toString() === `[object ${t}]`
    }
    let e = s;
    for (; Object.getPrototypeOf(e) !== null; )
        e = Object.getPrototypeOf(e);
    return Object.getPrototypeOf(s) === e
}
function qy(s, ...e) {
    let t = e.slice(0, -1)
      , i = e[e.length - 1]
      , r = s;
    for (let n = 0; n < t.length; n++) {
        let o = t[n];
        r = ao(r, o, i, new Map)
    }
    return r
}
function ao(s, e, t, i) {
    if (_o(s) && (s = Object(s)),
    e == null || typeof e != "object")
        return s;
    if (i.has(e))
        return hy(i.get(e));
    if (i.set(e, s),
    Array.isArray(e)) {
        e = e.slice();
        for (let n = 0; n < e.length; n++)
            e[n] = e[n] ?? void 0
    }
    let r = [...Object.keys(e), ...Zh(e)];
    for (let n = 0; n < r.length; n++) {
        let o = r[n]
          , a = e[o]
          , c = s[o];
        if (Mh(a) && (a = X({}, a)),
        Mh(c) && (c = X({}, c)),
        typeof Buffer < "u" && Buffer.isBuffer(a) && (a = $h(a)),
        Array.isArray(a))
            if (typeof c == "object" && c != null) {
                let p = []
                  , u = Reflect.ownKeys(c);
                for (let d = 0; d < u.length; d++) {
                    let g = u[d];
                    p[g] = c[g]
                }
                c = p
            } else
                c = [];
        let h = t(c, a, o, s, e, i);
        h != null ? s[o] = h : Array.isArray(a) || Lh(c) && Lh(a) ? s[o] = ao(c, a, t, i) : c == null && Ny(a) ? s[o] = ao({}, a, t, i) : c == null && Cy(a) ? s[o] = $h(a) : (c === void 0 || a !== void 0) && (s[o] = a)
    }
    return s
}
function Dy(s, ...e) {
    return qy(s, ...e, cy)
}
var Fy = Object.defineProperty
  , Uy = Object.defineProperties
  , ky = Object.getOwnPropertyDescriptors
  , Bh = Object.getOwnPropertySymbols
  , jy = Object.prototype.hasOwnProperty
  , Ly = Object.prototype.propertyIsEnumerable
  , Vh = (s, e, t) => e in s ? Fy(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , er = (s, e) => {
    for (var t in e || (e = {}))
        jy.call(e, t) && Vh(s, t, e[t]);
    if (Bh)
        for (var t of Bh(e))
            Ly.call(e, t) && Vh(s, t, e[t]);
    return s
}
  , $y = (s, e) => Uy(s, ky(e));
function Ve(s, e, t) {
    var i;
    let r = Ft(s);
    return ((i = e.rpcMap) == null ? void 0 : i[r.reference]) || `${Xh}?chainId=${r.namespace}:${r.reference}&projectId=${t}`
}
function Xt(s) {
    return s.includes(":") ? s.split(":")[1] : s
}
function nl(s) {
    return s.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`)
}
function My(s, e) {
    let t = Object.keys(e.namespaces).filter(r => r.includes(s));
    if (!t.length)
        return [];
    let i = [];
    return t.forEach(r => {
        let n = e.namespaces[r].accounts;
        i.push(...n)
    }
    ),
    i
}
function tr(s={}, e={}) {
    let t = zh(s)
      , i = zh(e);
    return Dy(t, i)
}
function zh(s) {
    var e, t, i, r, n;
    let o = {};
    if (!lt(s))
        return o;
    for (let[a,c] of Object.entries(s)) {
        let h = ni(a) ? [a] : c.chains
          , p = c.methods || []
          , u = c.events || []
          , d = c.rpcMap || {}
          , g = Jt(a);
        o[g] = $y(er(er({}, o[g]), c), {
            chains: et(h, (e = o[g]) == null ? void 0 : e.chains),
            methods: et(p, (t = o[g]) == null ? void 0 : t.methods),
            events: et(u, (i = o[g]) == null ? void 0 : i.events)
        }),
        (lt(d) || lt(((r = o[g]) == null ? void 0 : r.rpcMap) || {})) && (o[g].rpcMap = er(er({}, d), (n = o[g]) == null ? void 0 : n.rpcMap))
    }
    return o
}
function Hh(s) {
    return s.includes(":") ? s.split(":")[2] : s
}
function Kh(s) {
    let e = {};
    for (let[t,i] of Object.entries(s)) {
        let r = i.methods || []
          , n = i.events || []
          , o = i.accounts || []
          , a = ni(t) ? [t] : i.chains ? i.chains : nl(i.accounts);
        e[t] = {
            chains: a,
            methods: r,
            events: n,
            accounts: o
        }
    }
    return e
}
function ro(s) {
    return typeof s == "number" ? s : s.includes("0x") ? parseInt(s, 16) : (s = s.includes(":") ? s.split(":")[1] : s,
    isNaN(Number(s)) ? s : Number(s))
}
var ol = {}
  , J = s => ol[s]
  , no = (s, e) => {
    ol[s] = e
}
  , By = Object.defineProperty
  , Vy = (s, e, t) => e in s ? By(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Ps = (s, e, t) => Vy(s, typeof e != "symbol" ? e + "" : e, t)
  , co = class {
    constructor(e) {
        Ps(this, "name", "polkadot"),
        Ps(this, "client"),
        Ps(this, "httpProviders"),
        Ps(this, "events"),
        Ps(this, "namespace"),
        Ps(this, "chainId"),
        this.namespace = e.namespace,
        this.events = J("events"),
        this.client = J("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        let e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(Je.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getAccounts() {
        let e = this.namespace.accounts;
        return e ? e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        let e = {};
        return this.namespace.chains.forEach(t => {
            var i;
            let r = Xt(t);
            e[r] = this.createHttpProvider(r, (i = this.namespace.rpcMap) == null ? void 0 : i[t])
        }
        ),
        e
    }
    getHttpProvider() {
        let e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        let i = this.createHttpProvider(e, t);
        i && (this.httpProviders[e] = i)
    }
    createHttpProvider(e, t) {
        let i = t || Ve(e, this.namespace, this.client.core.projectId);
        if (!i)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Ae(new Ue(i,J("disableProviderPing")))
    }
}
  , zy = Object.defineProperty
  , Hy = Object.defineProperties
  , Ky = Object.getOwnPropertyDescriptors
  , Gh = Object.getOwnPropertySymbols
  , Gy = Object.prototype.hasOwnProperty
  , Wy = Object.prototype.propertyIsEnumerable
  , ho = (s, e, t) => e in s ? zy(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Wh = (s, e) => {
    for (var t in e || (e = {}))
        Gy.call(e, t) && ho(s, t, e[t]);
    if (Gh)
        for (var t of Gh(e))
            Wy.call(e, t) && ho(s, t, e[t]);
    return s
}
  , Yh = (s, e) => Hy(s, Ky(e))
  , Ss = (s, e, t) => ho(s, typeof e != "symbol" ? e + "" : e, t)
  , lo = class {
    constructor(e) {
        Ss(this, "name", "eip155"),
        Ss(this, "client"),
        Ss(this, "chainId"),
        Ss(this, "namespace"),
        Ss(this, "httpProviders"),
        Ss(this, "events"),
        this.namespace = e.namespace,
        this.events = J("events"),
        this.client = J("client"),
        this.httpProviders = this.createHttpProviders(),
        this.chainId = parseInt(this.getDefaultChain())
    }
    request(e) {
        return l(this, null, function*() {
            switch (e.request.method) {
            case "eth_requestAccounts":
                return this.getAccounts();
            case "eth_accounts":
                return this.getAccounts();
            case "wallet_switchEthereumChain":
                return yield this.handleSwitchChain(e);
            case "eth_chainId":
                return parseInt(this.getDefaultChain());
            case "wallet_getCapabilities":
                return yield this.getCapabilities(e);
            case "wallet_getCallsStatus":
                return yield this.getCallStatus(e)
            }
            return this.namespace.methods.includes(e.request.method) ? yield this.client.request(e) : this.getHttpProvider().request(e.request)
        })
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
        this.chainId = parseInt(e),
        this.events.emit(Je.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId.toString();
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        let e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    createHttpProvider(e, t) {
        let i = t || Ve(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
        if (!i)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Ae(new Ue(i,J("disableProviderPing")))
    }
    setHttpProvider(e, t) {
        let i = this.createHttpProvider(e, t);
        i && (this.httpProviders[e] = i)
    }
    createHttpProviders() {
        let e = {};
        return this.namespace.chains.forEach(t => {
            var i;
            let r = parseInt(Xt(t));
            e[r] = this.createHttpProvider(r, (i = this.namespace.rpcMap) == null ? void 0 : i[t])
        }
        ),
        e
    }
    getAccounts() {
        let e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    getHttpProvider() {
        let e = this.chainId
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    handleSwitchChain(e) {
        return l(this, null, function*() {
            var t, i;
            let r = e.request.params ? (t = e.request.params[0]) == null ? void 0 : t.chainId : "0x0";
            r = r.startsWith("0x") ? r : `0x${r}`;
            let n = parseInt(r, 16);
            if (this.isChainApproved(n))
                this.setDefaultChain(`${n}`);
            else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
                yield this.client.request({
                    topic: e.topic,
                    request: {
                        method: e.request.method,
                        params: [{
                            chainId: r
                        }]
                    },
                    chainId: (i = this.namespace.chains) == null ? void 0 : i[0]
                }),
                this.setDefaultChain(`${n}`);
            else
                throw new Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
            return null
        })
    }
    isChainApproved(e) {
        return this.namespace.chains.includes(`${this.name}:${e}`)
    }
    getCapabilities(e) {
        return l(this, null, function*() {
            var t, i, r, n, o;
            let a = (i = (t = e.request) == null ? void 0 : t.params) == null ? void 0 : i[0]
              , c = ((n = (r = e.request) == null ? void 0 : r.params) == null ? void 0 : n[1]) || []
              , h = `${a}${c.join(",")}`;
            if (!a)
                throw new Error("Missing address parameter in `wallet_getCapabilities` request");
            let p = this.client.session.get(e.topic)
              , u = ((o = p?.sessionProperties) == null ? void 0 : o.capabilities) || {};
            if (u != null && u[h])
                return u?.[h];
            let d = yield this.client.request(e);
            try {
                yield this.client.session.update(e.topic, {
                    sessionProperties: Yh(Wh({}, p.sessionProperties || {}), {
                        capabilities: Yh(Wh({}, u || {}), {
                            [h]: d
                        })
                    })
                })
            } catch (g) {
                console.warn("Failed to update session with capabilities", g)
            }
            return d
        })
    }
    getCallStatus(e) {
        return l(this, null, function*() {
            var t, i;
            let r = this.client.session.get(e.topic)
              , n = (t = r.sessionProperties) == null ? void 0 : t.bundler_name;
            if (n) {
                let a = this.getBundlerUrl(e.chainId, n);
                try {
                    return yield this.getUserOperationReceipt(a, e)
                } catch (c) {
                    console.warn("Failed to fetch call status from bundler", c, a)
                }
            }
            let o = (i = r.sessionProperties) == null ? void 0 : i.bundler_url;
            if (o)
                try {
                    return yield this.getUserOperationReceipt(o, e)
                } catch (a) {
                    console.warn("Failed to fetch call status from custom bundler", a, o)
                }
            if (this.namespace.methods.includes(e.request.method))
                return yield this.client.request(e);
            throw new Error("Fetching call status not approved by the wallet.")
        })
    }
    getUserOperationReceipt(e, t) {
        return l(this, null, function*() {
            var i;
            let r = new URL(e)
              , n = yield fetch(r, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(at("eth_getUserOperationReceipt", [(i = t.request.params) == null ? void 0 : i[0]]))
            });
            if (!n.ok)
                throw new Error(`Failed to fetch user operation receipt - ${n.status}`);
            return yield n.json()
        })
    }
    getBundlerUrl(e, t) {
        return `${ay}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${t}`
    }
}
  , Yy = Object.defineProperty
  , Jy = (s, e, t) => e in s ? Yy(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Os = (s, e, t) => Jy(s, typeof e != "symbol" ? e + "" : e, t)
  , po = class {
    constructor(e) {
        Os(this, "name", "solana"),
        Os(this, "client"),
        Os(this, "httpProviders"),
        Os(this, "events"),
        Os(this, "namespace"),
        Os(this, "chainId"),
        this.namespace = e.namespace,
        this.events = J("events"),
        this.client = J("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(Je.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        let e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    getAccounts() {
        let e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        let e = {};
        return this.namespace.chains.forEach(t => {
            var i;
            let r = Xt(t);
            e[r] = this.createHttpProvider(r, (i = this.namespace.rpcMap) == null ? void 0 : i[t])
        }
        ),
        e
    }
    getHttpProvider() {
        let e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        let i = this.createHttpProvider(e, t);
        i && (this.httpProviders[e] = i)
    }
    createHttpProvider(e, t) {
        let i = t || Ve(e, this.namespace, this.client.core.projectId);
        if (!i)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Ae(new Ue(i,J("disableProviderPing")))
    }
}
  , Qy = Object.defineProperty
  , Xy = (s, e, t) => e in s ? Qy(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Rs = (s, e, t) => Xy(s, typeof e != "symbol" ? e + "" : e, t)
  , uo = class {
    constructor(e) {
        Rs(this, "name", "cosmos"),
        Rs(this, "client"),
        Rs(this, "httpProviders"),
        Rs(this, "events"),
        Rs(this, "namespace"),
        Rs(this, "chainId"),
        this.namespace = e.namespace,
        this.events = J("events"),
        this.client = J("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        let e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(Je.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        let e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        let e = {};
        return this.namespace.chains.forEach(t => {
            var i;
            let r = Xt(t);
            e[r] = this.createHttpProvider(r, (i = this.namespace.rpcMap) == null ? void 0 : i[t])
        }
        ),
        e
    }
    getHttpProvider() {
        let e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        let i = this.createHttpProvider(e, t);
        i && (this.httpProviders[e] = i)
    }
    createHttpProvider(e, t) {
        let i = t || Ve(e, this.namespace, this.client.core.projectId);
        if (!i)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Ae(new Ue(i,J("disableProviderPing")))
    }
}
  , Zy = Object.defineProperty
  , ew = (s, e, t) => e in s ? Zy(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , xs = (s, e, t) => ew(s, typeof e != "symbol" ? e + "" : e, t)
  , go = class {
    constructor(e) {
        xs(this, "name", "algorand"),
        xs(this, "client"),
        xs(this, "httpProviders"),
        xs(this, "events"),
        xs(this, "namespace"),
        xs(this, "chainId"),
        this.namespace = e.namespace,
        this.events = J("events"),
        this.client = J("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        if (!this.httpProviders[e]) {
            let i = t || Ve(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
            if (!i)
                throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, i)
        }
        this.chainId = e,
        this.events.emit(Je.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        let e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    getAccounts() {
        let e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        let e = {};
        return this.namespace.chains.forEach(t => {
            var i;
            e[t] = this.createHttpProvider(t, (i = this.namespace.rpcMap) == null ? void 0 : i[t])
        }
        ),
        e
    }
    getHttpProvider() {
        let e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        let i = this.createHttpProvider(e, t);
        i && (this.httpProviders[e] = i)
    }
    createHttpProvider(e, t) {
        let i = t || Ve(e, this.namespace, this.client.core.projectId);
        return typeof i > "u" ? void 0 : new Ae(new Ue(i,J("disableProviderPing")))
    }
}
  , tw = Object.defineProperty
  , sw = (s, e, t) => e in s ? tw(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Ts = (s, e, t) => sw(s, typeof e != "symbol" ? e + "" : e, t)
  , fo = class {
    constructor(e) {
        Ts(this, "name", "cip34"),
        Ts(this, "client"),
        Ts(this, "httpProviders"),
        Ts(this, "events"),
        Ts(this, "namespace"),
        Ts(this, "chainId"),
        this.namespace = e.namespace,
        this.events = J("events"),
        this.client = J("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        let e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(Je.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        let e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        let e = {};
        return this.namespace.chains.forEach(t => {
            let i = this.getCardanoRPCUrl(t)
              , r = Xt(t);
            e[r] = this.createHttpProvider(r, i)
        }
        ),
        e
    }
    getHttpProvider() {
        let e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    getCardanoRPCUrl(e) {
        let t = this.namespace.rpcMap;
        if (t)
            return t[e]
    }
    setHttpProvider(e, t) {
        let i = this.createHttpProvider(e, t);
        i && (this.httpProviders[e] = i)
    }
    createHttpProvider(e, t) {
        let i = t || this.getCardanoRPCUrl(e);
        if (!i)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Ae(new Ue(i,J("disableProviderPing")))
    }
}
  , iw = Object.defineProperty
  , rw = (s, e, t) => e in s ? iw(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , As = (s, e, t) => rw(s, typeof e != "symbol" ? e + "" : e, t)
  , mo = class {
    constructor(e) {
        As(this, "name", "elrond"),
        As(this, "client"),
        As(this, "httpProviders"),
        As(this, "events"),
        As(this, "namespace"),
        As(this, "chainId"),
        this.namespace = e.namespace,
        this.events = J("events"),
        this.client = J("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(Je.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        let e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    getAccounts() {
        let e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        let e = {};
        return this.namespace.chains.forEach(t => {
            var i;
            let r = Xt(t);
            e[r] = this.createHttpProvider(r, (i = this.namespace.rpcMap) == null ? void 0 : i[t])
        }
        ),
        e
    }
    getHttpProvider() {
        let e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        let i = this.createHttpProvider(e, t);
        i && (this.httpProviders[e] = i)
    }
    createHttpProvider(e, t) {
        let i = t || Ve(e, this.namespace, this.client.core.projectId);
        if (!i)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Ae(new Ue(i,J("disableProviderPing")))
    }
}
  , nw = Object.defineProperty
  , ow = (s, e, t) => e in s ? nw(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Cs = (s, e, t) => ow(s, typeof e != "symbol" ? e + "" : e, t)
  , yo = class {
    constructor(e) {
        Cs(this, "name", "multiversx"),
        Cs(this, "client"),
        Cs(this, "httpProviders"),
        Cs(this, "events"),
        Cs(this, "namespace"),
        Cs(this, "chainId"),
        this.namespace = e.namespace,
        this.events = J("events"),
        this.client = J("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(Je.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        let e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    getAccounts() {
        let e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        let e = {};
        return this.namespace.chains.forEach(t => {
            var i;
            let r = Xt(t);
            e[r] = this.createHttpProvider(r, (i = this.namespace.rpcMap) == null ? void 0 : i[t])
        }
        ),
        e
    }
    getHttpProvider() {
        let e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        let i = this.createHttpProvider(e, t);
        i && (this.httpProviders[e] = i)
    }
    createHttpProvider(e, t) {
        let i = t || Ve(e, this.namespace, this.client.core.projectId);
        if (!i)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Ae(new Ue(i,J("disableProviderPing")))
    }
}
  , aw = Object.defineProperty
  , cw = (s, e, t) => e in s ? aw(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Ns = (s, e, t) => cw(s, typeof e != "symbol" ? e + "" : e, t)
  , wo = class {
    constructor(e) {
        Ns(this, "name", "near"),
        Ns(this, "client"),
        Ns(this, "httpProviders"),
        Ns(this, "events"),
        Ns(this, "namespace"),
        Ns(this, "chainId"),
        this.namespace = e.namespace,
        this.events = J("events"),
        this.client = J("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        let e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        if (this.chainId = e,
        !this.httpProviders[e]) {
            let i = t || Ve(`${this.name}:${e}`, this.namespace);
            if (!i)
                throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, i)
        }
        this.events.emit(Je.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        let e = this.namespace.accounts;
        return e ? e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        let e = {};
        return this.namespace.chains.forEach(t => {
            var i;
            e[t] = this.createHttpProvider(t, (i = this.namespace.rpcMap) == null ? void 0 : i[t])
        }
        ),
        e
    }
    getHttpProvider() {
        let e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        let i = this.createHttpProvider(e, t);
        i && (this.httpProviders[e] = i)
    }
    createHttpProvider(e, t) {
        let i = t || Ve(e, this.namespace);
        return typeof i > "u" ? void 0 : new Ae(new Ue(i,J("disableProviderPing")))
    }
}
  , hw = Object.defineProperty
  , lw = (s, e, t) => e in s ? hw(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , qs = (s, e, t) => lw(s, typeof e != "symbol" ? e + "" : e, t)
  , bo = class {
    constructor(e) {
        qs(this, "name", "tezos"),
        qs(this, "client"),
        qs(this, "httpProviders"),
        qs(this, "events"),
        qs(this, "namespace"),
        qs(this, "chainId"),
        this.namespace = e.namespace,
        this.events = J("events"),
        this.client = J("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        let e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        if (this.chainId = e,
        !this.httpProviders[e]) {
            let i = t || Ve(`${this.name}:${e}`, this.namespace);
            if (!i)
                throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, i)
        }
        this.events.emit(Je.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        let e = this.namespace.accounts;
        return e ? e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        let e = {};
        return this.namespace.chains.forEach(t => {
            e[t] = this.createHttpProvider(t)
        }
        ),
        e
    }
    getHttpProvider() {
        let e = `${this.name}:${this.chainId}`
          , t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        let i = this.createHttpProvider(e, t);
        i && (this.httpProviders[e] = i)
    }
    createHttpProvider(e, t) {
        let i = t || Ve(e, this.namespace);
        return typeof i > "u" ? void 0 : new Ae(new Ue(i))
    }
}
  , pw = Object.defineProperty
  , uw = (s, e, t) => e in s ? pw(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Ds = (s, e, t) => uw(s, typeof e != "symbol" ? e + "" : e, t)
  , vo = class {
    constructor(e) {
        Ds(this, "name", Fs),
        Ds(this, "client"),
        Ds(this, "httpProviders"),
        Ds(this, "events"),
        Ds(this, "namespace"),
        Ds(this, "chainId"),
        this.namespace = e.namespace,
        this.events = J("events"),
        this.client = J("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace.chains = [...new Set((this.namespace.chains || []).concat(e.chains || []))],
        this.namespace.accounts = [...new Set((this.namespace.accounts || []).concat(e.accounts || []))],
        this.namespace.methods = [...new Set((this.namespace.methods || []).concat(e.methods || []))],
        this.namespace.events = [...new Set((this.namespace.events || []).concat(e.events || []))],
        this.httpProviders = this.createHttpProviders()
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider(e.chainId).request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t),
        this.chainId = e,
        this.events.emit(Je.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        let e = this.namespace.chains[0];
        if (!e)
            throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    getAccounts() {
        let e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        var e, t;
        let i = {};
        return (t = (e = this.namespace) == null ? void 0 : e.accounts) == null || t.forEach(r => {
            let n = Ft(r);
            i[`${n.namespace}:${n.reference}`] = this.createHttpProvider(r)
        }
        ),
        i
    }
    getHttpProvider(e) {
        let t = this.httpProviders[e];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        let i = this.createHttpProvider(e, t);
        i && (this.httpProviders[e] = i)
    }
    createHttpProvider(e, t) {
        let i = t || Ve(e, this.namespace, this.client.core.projectId);
        if (!i)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Ae(new Ue(i,J("disableProviderPing")))
    }
}
  , dw = Object.defineProperty
  , gw = Object.defineProperties
  , fw = Object.getOwnPropertyDescriptors
  , Jh = Object.getOwnPropertySymbols
  , mw = Object.prototype.hasOwnProperty
  , yw = Object.prototype.propertyIsEnumerable
  , Eo = (s, e, t) => e in s ? dw(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , sr = (s, e) => {
    for (var t in e || (e = {}))
        mw.call(e, t) && Eo(s, t, e[t]);
    if (Jh)
        for (var t of Jh(e))
            yw.call(e, t) && Eo(s, t, e[t]);
    return s
}
  , oo = (s, e) => gw(s, fw(e))
  , Ye = (s, e, t) => Eo(s, typeof e != "symbol" ? e + "" : e, t)
  , Io = class s {
    constructor(e) {
        Ye(this, "client"),
        Ye(this, "namespaces"),
        Ye(this, "optionalNamespaces"),
        Ye(this, "sessionProperties"),
        Ye(this, "scopedProperties"),
        Ye(this, "events", new Qh.default),
        Ye(this, "rpcProviders", {}),
        Ye(this, "session"),
        Ye(this, "providerOpts"),
        Ye(this, "logger"),
        Ye(this, "uri"),
        Ye(this, "disableProviderPing", !1),
        this.providerOpts = e,
        this.logger = typeof e?.logger < "u" && typeof e?.logger != "string" ? e.logger : (0,
        ss.default)(Bt({
            level: e?.logger || jh
        })),
        this.disableProviderPing = e?.disableProviderPing || !1
    }
    static init(e) {
        return l(this, null, function*() {
            let t = new s(e);
            return yield t.initialize(),
            t
        })
    }
    request(e, t, i) {
        return l(this, null, function*() {
            let[r,n] = this.validateChain(t);
            if (!this.session)
                throw new Error("Please call connect() before request()");
            return yield this.getProvider(r).request({
                request: sr({}, e),
                chainId: `${r}:${n}`,
                topic: this.session.topic,
                expiry: i
            })
        })
    }
    sendAsync(e, t, i, r) {
        let n = new Date().getTime();
        this.request(e, i, r).then(o => t(null, Vt(n, o))).catch(o => t(o, void 0))
    }
    enable() {
        return l(this, null, function*() {
            if (!this.client)
                throw new Error("Sign Client not initialized");
            return this.session || (yield this.connect({
                namespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties,
                scopedProperties: this.scopedProperties
            })),
            yield this.requestAccounts()
        })
    }
    disconnect() {
        return l(this, null, function*() {
            var e;
            if (!this.session)
                throw new Error("Please call connect() before enable()");
            yield this.client.disconnect({
                topic: (e = this.session) == null ? void 0 : e.topic,
                reason: K("USER_DISCONNECTED")
            }),
            yield this.cleanup()
        })
    }
    connect(e) {
        return l(this, null, function*() {
            if (!this.client)
                throw new Error("Sign Client not initialized");
            if (this.setNamespaces(e),
            yield this.cleanupPendingPairings(),
            !e.skipPairing)
                return yield this.pair(e.pairingTopic)
        })
    }
    authenticate(e, t) {
        return l(this, null, function*() {
            if (!this.client)
                throw new Error("Sign Client not initialized");
            this.setNamespaces(e),
            yield this.cleanupPendingPairings();
            let {uri: i, response: r} = yield this.client.authenticate(e, t);
            i && (this.uri = i,
            this.events.emit("display_uri", i));
            let n = yield r();
            if (this.session = n.session,
            this.session) {
                let o = Kh(this.session.namespaces);
                this.namespaces = tr(this.namespaces, o),
                yield this.persist("namespaces", this.namespaces),
                this.onConnect()
            }
            return n
        })
    }
    on(e, t) {
        this.events.on(e, t)
    }
    once(e, t) {
        this.events.once(e, t)
    }
    removeListener(e, t) {
        this.events.removeListener(e, t)
    }
    off(e, t) {
        this.events.off(e, t)
    }
    get isWalletConnect() {
        return !0
    }
    pair(e) {
        return l(this, null, function*() {
            let {uri: t, approval: i} = yield this.client.connect({
                pairingTopic: e,
                requiredNamespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties,
                scopedProperties: this.scopedProperties
            });
            t && (this.uri = t,
            this.events.emit("display_uri", t));
            let r = yield i();
            this.session = r;
            let n = Kh(r.namespaces);
            return this.namespaces = tr(this.namespaces, n),
            yield this.persist("namespaces", this.namespaces),
            yield this.persist("optionalNamespaces", this.optionalNamespaces),
            this.onConnect(),
            this.session
        })
    }
    setDefaultChain(e, t) {
        try {
            if (!this.session)
                return;
            let[i,r] = this.validateChain(e)
              , n = this.getProvider(i);
            n.name === Fs ? n.setDefaultChain(`${i}:${r}`, t) : n.setDefaultChain(r, t)
        } catch (i) {
            if (!/Please call connect/.test(i.message))
                throw i
        }
    }
    cleanupPendingPairings() {
        return l(this, arguments, function*(e={}) {
            this.logger.info("Cleaning up inactive pairings...");
            let t = this.client.pairing.getAll();
            if (qe(t)) {
                for (let i of t)
                    e.deletePairings ? this.client.core.expirer.set(i.topic, 0) : yield this.client.core.relayer.subscriber.unsubscribe(i.topic);
                this.logger.info(`Inactive pairings cleared: ${t.length}`)
            }
        })
    }
    abortPairingAttempt() {
        this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.")
    }
    checkStorage() {
        return l(this, null, function*() {
            this.namespaces = (yield this.getFromStore("namespaces")) || {},
            this.optionalNamespaces = (yield this.getFromStore("optionalNamespaces")) || {},
            this.session && this.createProviders()
        })
    }
    initialize() {
        return l(this, null, function*() {
            this.logger.trace("Initialized"),
            yield this.createClient(),
            yield this.checkStorage(),
            this.registerEventListeners()
        })
    }
    createClient() {
        return l(this, null, function*() {
            var e, t;
            if (this.client = this.providerOpts.client || (yield Ji.init({
                core: this.providerOpts.core,
                logger: this.providerOpts.logger || jh,
                relayUrl: this.providerOpts.relayUrl || ry,
                projectId: this.providerOpts.projectId,
                metadata: this.providerOpts.metadata,
                storageOptions: this.providerOpts.storageOptions,
                storage: this.providerOpts.storage,
                name: this.providerOpts.name,
                customStoragePrefix: this.providerOpts.customStoragePrefix,
                telemetryEnabled: this.providerOpts.telemetryEnabled
            })),
            this.providerOpts.session)
                try {
                    this.session = this.client.session.get(this.providerOpts.session.topic)
                } catch (i) {
                    throw this.logger.error("Failed to get session", i),
                    new Error(`The provided session: ${(t = (e = this.providerOpts) == null ? void 0 : e.session) == null ? void 0 : t.topic} doesn't exist in the Sign client`)
                }
            else {
                let i = this.client.session.getAll();
                this.session = i[0]
            }
            this.logger.trace("SignClient Initialized")
        })
    }
    createProviders() {
        if (!this.client)
            throw new Error("Sign Client not initialized");
        if (!this.session)
            throw new Error("Session not initialized. Please call connect() before enable()");
        let e = [...new Set(Object.keys(this.session.namespaces).map(t => Jt(t)))];
        no("client", this.client),
        no("events", this.events),
        no("disableProviderPing", this.disableProviderPing),
        e.forEach(t => {
            if (!this.session)
                return;
            let i = My(t, this.session)
              , r = nl(i)
              , n = tr(this.namespaces, this.optionalNamespaces)
              , o = oo(sr({}, n[t]), {
                accounts: i,
                chains: r
            });
            switch (t) {
            case "eip155":
                this.rpcProviders[t] = new lo({
                    namespace: o
                });
                break;
            case "algorand":
                this.rpcProviders[t] = new go({
                    namespace: o
                });
                break;
            case "solana":
                this.rpcProviders[t] = new po({
                    namespace: o
                });
                break;
            case "cosmos":
                this.rpcProviders[t] = new uo({
                    namespace: o
                });
                break;
            case "polkadot":
                this.rpcProviders[t] = new co({
                    namespace: o
                });
                break;
            case "cip34":
                this.rpcProviders[t] = new fo({
                    namespace: o
                });
                break;
            case "elrond":
                this.rpcProviders[t] = new mo({
                    namespace: o
                });
                break;
            case "multiversx":
                this.rpcProviders[t] = new yo({
                    namespace: o
                });
                break;
            case "near":
                this.rpcProviders[t] = new wo({
                    namespace: o
                });
                break;
            case "tezos":
                this.rpcProviders[t] = new bo({
                    namespace: o
                });
                break;
            default:
                this.rpcProviders[Fs] ? this.rpcProviders[Fs].updateNamespace(o) : this.rpcProviders[Fs] = new vo({
                    namespace: o
                })
            }
        }
        )
    }
    registerEventListeners() {
        if (typeof this.client > "u")
            throw new Error("Sign Client is not initialized");
        this.client.on("session_ping", e => {
            var t;
            let {topic: i} = e;
            i === ((t = this.session) == null ? void 0 : t.topic) && this.events.emit("session_ping", e)
        }
        ),
        this.client.on("session_event", e => {
            var t;
            let {params: i, topic: r} = e;
            if (r !== ((t = this.session) == null ? void 0 : t.topic))
                return;
            let {event: n} = i;
            if (n.name === "accountsChanged") {
                let o = n.data;
                o && qe(o) && this.events.emit("accountsChanged", o.map(Hh))
            } else if (n.name === "chainChanged") {
                let o = i.chainId
                  , a = i.event.data
                  , c = Jt(o)
                  , h = ro(o) !== ro(a) ? `${c}:${ro(a)}` : o;
                this.onChainChanged(h)
            } else
                this.events.emit(n.name, n.data);
            this.events.emit("session_event", e)
        }
        ),
        this.client.on("session_update", ({topic: e, params: t}) => {
            var i, r;
            if (e !== ((i = this.session) == null ? void 0 : i.topic))
                return;
            let {namespaces: n} = t
              , o = (r = this.client) == null ? void 0 : r.session.get(e);
            this.session = oo(sr({}, o), {
                namespaces: n
            }),
            this.onSessionUpdate(),
            this.events.emit("session_update", {
                topic: e,
                params: t
            })
        }
        ),
        this.client.on("session_delete", e => l(this, null, function*() {
            var t;
            e.topic === ((t = this.session) == null ? void 0 : t.topic) && (yield this.cleanup(),
            this.events.emit("session_delete", e),
            this.events.emit("disconnect", oo(sr({}, K("USER_DISCONNECTED")), {
                data: e.topic
            })))
        })),
        this.on(Je.DEFAULT_CHAIN_CHANGED, e => {
            this.onChainChanged(e, !0)
        }
        )
    }
    getProvider(e) {
        return this.rpcProviders[e] || this.rpcProviders[Fs]
    }
    onSessionUpdate() {
        Object.keys(this.rpcProviders).forEach(e => {
            var t;
            this.getProvider(e).updateNamespace((t = this.session) == null ? void 0 : t.namespaces[e])
        }
        )
    }
    setNamespaces(e) {
        let {namespaces: t={}, optionalNamespaces: i={}, sessionProperties: r, scopedProperties: n} = e;
        this.optionalNamespaces = tr(t, i),
        this.sessionProperties = r,
        this.scopedProperties = n
    }
    validateChain(e) {
        let[t,i] = e?.split(":") || ["", ""];
        if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [t, i];
        if (t && !Object.keys(this.namespaces || {}).map(o => Jt(o)).includes(t))
            throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
        if (t && i)
            return [t, i];
        let r = Jt(Object.keys(this.namespaces)[0])
          , n = this.rpcProviders[r].getDefaultChain();
        return [r, n]
    }
    requestAccounts() {
        return l(this, null, function*() {
            let[e] = this.validateChain();
            return yield this.getProvider(e).requestAccounts()
        })
    }
    onChainChanged(e, t=!1) {
        return l(this, null, function*() {
            if (!this.namespaces)
                return;
            let[i,r] = this.validateChain(e);
            if (!r)
                return;
            this.updateNamespaceChain(i, r),
            this.events.emit("chainChanged", r);
            let n = this.getProvider(i).getDefaultChain();
            t || this.getProvider(i).setDefaultChain(r),
            this.emitAccountsChangedOnChainChange({
                namespace: i,
                previousChainId: n,
                newChainId: e
            }),
            yield this.persist("namespaces", this.namespaces)
        })
    }
    emitAccountsChangedOnChainChange({namespace: e, previousChainId: t, newChainId: i}) {
        var r, n;
        try {
            if (t === i)
                return;
            let o = (n = (r = this.session) == null ? void 0 : r.namespaces[e]) == null ? void 0 : n.accounts;
            if (!o)
                return;
            let a = o.filter(c => c.includes(`${i}:`)).map(Hh);
            if (!qe(a))
                return;
            this.events.emit("accountsChanged", a)
        } catch (o) {
            this.logger.warn("Failed to emit accountsChanged on chain change", o)
        }
    }
    updateNamespaceChain(e, t) {
        if (!this.namespaces)
            return;
        let i = this.namespaces[e] ? e : `${e}:${t}`
          , r = {
            chains: [],
            methods: [],
            events: [],
            defaultChain: t
        };
        this.namespaces[i] ? this.namespaces[i] && (this.namespaces[i].defaultChain = t) : this.namespaces[i] = r
    }
    onConnect() {
        this.createProviders(),
        this.events.emit("connect", {
            session: this.session
        })
    }
    cleanup() {
        return l(this, null, function*() {
            this.namespaces = void 0,
            this.optionalNamespaces = void 0,
            this.sessionProperties = void 0,
            yield this.deleteFromStore("namespaces"),
            yield this.deleteFromStore("optionalNamespaces"),
            yield this.deleteFromStore("sessionProperties"),
            this.session = void 0,
            yield this.cleanupPendingPairings({
                deletePairings: !0
            }),
            yield this.cleanupStorage()
        })
    }
    persist(e, t) {
        return l(this, null, function*() {
            var i;
            let r = ((i = this.session) == null ? void 0 : i.topic) || "";
            yield this.client.core.storage.setItem(`${Zi}/${e}${r}`, t)
        })
    }
    getFromStore(e) {
        return l(this, null, function*() {
            var t;
            let i = ((t = this.session) == null ? void 0 : t.topic) || "";
            return yield this.client.core.storage.getItem(`${Zi}/${e}${i}`)
        })
    }
    deleteFromStore(e) {
        return l(this, null, function*() {
            var t;
            let i = ((t = this.session) == null ? void 0 : t.topic) || "";
            yield this.client.core.storage.removeItem(`${Zi}/${e}${i}`)
        })
    }
    cleanupStorage() {
        return l(this, null, function*() {
            var e;
            try {
                if (((e = this.client) == null ? void 0 : e.session.length) > 0)
                    return;
                let t = yield this.client.core.storage.getKeys();
                for (let i of t)
                    i.startsWith(Zi) && (yield this.client.core.storage.removeItem(i))
            } catch (t) {
                this.logger.warn("Failed to cleanup storage", t)
            }
        })
    }
}
  , al = Io;
var ww = "wc"
  , bw = "ethereum_provider"
  , vw = `${ww}@2:${bw}:`
  , Ew = "https://rpc.walletconnect.org/v1/"
  , So = ["eth_sendTransaction", "personal_sign"]
  , Iw = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_sendCalls", "wallet_getCapabilities", "wallet_getCallsStatus", "wallet_showCallsStatus"]
  , Oo = ["chainChanged", "accountsChanged"]
  , _w = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"]
  , Pw = () => l(void 0, null, function*() {
    let {createAppKit: s} = yield import("./chunk-EXIXVAI4.js");
    return s
})
  , Sw = Object.defineProperty
  , Ow = Object.defineProperties
  , Rw = Object.getOwnPropertyDescriptors
  , cl = Object.getOwnPropertySymbols
  , xw = Object.prototype.hasOwnProperty
  , Tw = Object.prototype.propertyIsEnumerable
  , Ro = (s, e, t) => e in s ? Sw(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Zt = (s, e) => {
    for (var t in e || (e = {}))
        xw.call(e, t) && Ro(s, t, e[t]);
    if (cl)
        for (var t of cl(e))
            Tw.call(e, t) && Ro(s, t, e[t]);
    return s
}
  , ui = (s, e) => Ow(s, Rw(e))
  , ze = (s, e, t) => Ro(s, typeof e != "symbol" ? e + "" : e, t);
function rr(s) {
    return Number(s[0].split(":")[1])
}
function ir(s) {
    return `0x${s.toString(16)}`
}
function Aw(s) {
    let {chains: e, optionalChains: t, methods: i, optionalMethods: r, events: n, optionalEvents: o, rpcMap: a} = s;
    if (!qe(e))
        throw new Error("Invalid chains");
    let c = {
        chains: e,
        methods: i || So,
        events: n || Oo,
        rpcMap: Zt({}, e.length ? {
            [rr(e)]: a[rr(e)]
        } : {})
    }
      , h = n?.filter(g => !Oo.includes(g))
      , p = i?.filter(g => !So.includes(g));
    if (!t && !o && !r && !(h != null && h.length) && !(p != null && p.length))
        return {
            required: e.length ? c : void 0
        };
    let u = h?.length && p?.length || !t
      , d = {
        chains: [...new Set(u ? c.chains.concat(t || []) : t)],
        methods: [...new Set(c.methods.concat(r != null && r.length ? r : Iw))],
        events: [...new Set(c.events.concat(o != null && o.length ? o : _w))],
        rpcMap: a
    };
    return {
        required: e.length ? c : void 0,
        optional: t.length ? d : void 0
    }
}
var xo = class s {
    constructor() {
        ze(this, "events", new pl.EventEmitter),
        ze(this, "namespace", "eip155"),
        ze(this, "accounts", []),
        ze(this, "signer"),
        ze(this, "chainId", 1),
        ze(this, "modal"),
        ze(this, "rpc"),
        ze(this, "STORAGE_KEY", vw),
        ze(this, "on", (e, t) => (this.events.on(e, t),
        this)),
        ze(this, "once", (e, t) => (this.events.once(e, t),
        this)),
        ze(this, "removeListener", (e, t) => (this.events.removeListener(e, t),
        this)),
        ze(this, "off", (e, t) => (this.events.off(e, t),
        this)),
        ze(this, "parseAccount", e => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e),
        this.signer = {},
        this.rpc = {}
    }
    static init(e) {
        return l(this, null, function*() {
            let t = new s;
            return yield t.initialize(e),
            t
        })
    }
    request(e, t) {
        return l(this, null, function*() {
            return yield this.signer.request(e, this.formatChainId(this.chainId), t)
        })
    }
    sendAsync(e, t, i) {
        this.signer.sendAsync(e, t, this.formatChainId(this.chainId), i)
    }
    get connected() {
        return this.signer.client ? this.signer.client.core.relayer.connected : !1
    }
    get connecting() {
        return this.signer.client ? this.signer.client.core.relayer.connecting : !1
    }
    enable() {
        return l(this, null, function*() {
            return this.session || (yield this.connect()),
            yield this.request({
                method: "eth_requestAccounts"
            })
        })
    }
    connect(e) {
        return l(this, null, function*() {
            var t;
            if (!this.signer.client)
                throw new Error("Provider not initialized. Call init() first");
            this.loadConnectOpts(e);
            let {required: i, optional: r} = Aw(this.rpc);
            try {
                let n = yield new Promise( (a, c) => l(this, null, function*() {
                    var h, p;
                    this.rpc.showQrModal && ((h = this.modal) == null || h.open(),
                    (p = this.modal) == null || p.subscribeState(d => {
                        !d.open && !this.signer.session && (this.signer.abortPairingAttempt(),
                        c(new Error("Connection request reset. Please try again.")))
                    }
                    ));
                    let u = e != null && e.scopedProperties ? {
                        [this.namespace]: e.scopedProperties
                    } : void 0;
                    yield this.signer.connect(ui(Zt({
                        namespaces: Zt({}, i && {
                            [this.namespace]: i
                        })
                    }, r && {
                        optionalNamespaces: {
                            [this.namespace]: r
                        }
                    }), {
                        pairingTopic: e?.pairingTopic,
                        scopedProperties: u
                    })).then(d => {
                        a(d)
                    }
                    ).catch(d => {
                        var g;
                        (g = this.modal) == null || g.showErrorMessage("Unable to connect"),
                        c(new Error(d.message))
                    }
                    )
                }));
                if (!n)
                    return;
                let o = kr(n.namespaces, [this.namespace]);
                this.setChainIds(this.rpc.chains.length ? this.rpc.chains : o),
                this.setAccounts(o),
                this.events.emit("connect", {
                    chainId: ir(this.chainId)
                })
            } catch (n) {
                throw this.signer.logger.error(n),
                n
            } finally {
                (t = this.modal) == null || t.close()
            }
        })
    }
    authenticate(e, t) {
        return l(this, null, function*() {
            var i;
            if (!this.signer.client)
                throw new Error("Provider not initialized. Call init() first");
            this.loadConnectOpts({
                chains: e?.chains
            });
            try {
                let r = yield new Promise( (o, a) => l(this, null, function*() {
                    var c, h;
                    this.rpc.showQrModal && ((c = this.modal) == null || c.open(),
                    (h = this.modal) == null || h.subscribeState(p => {
                        !p.open && !this.signer.session && (this.signer.abortPairingAttempt(),
                        a(new Error("Connection request reset. Please try again.")))
                    }
                    )),
                    yield this.signer.authenticate(ui(Zt({}, e), {
                        chains: this.rpc.chains
                    }), t).then(p => {
                        o(p)
                    }
                    ).catch(p => {
                        var u;
                        (u = this.modal) == null || u.showErrorMessage("Unable to connect"),
                        a(new Error(p.message))
                    }
                    )
                }))
                  , n = r.session;
                if (n) {
                    let o = kr(n.namespaces, [this.namespace]);
                    this.setChainIds(this.rpc.chains.length ? this.rpc.chains : o),
                    this.setAccounts(o),
                    this.events.emit("connect", {
                        chainId: ir(this.chainId)
                    })
                }
                return r
            } catch (r) {
                throw this.signer.logger.error(r),
                r
            } finally {
                (i = this.modal) == null || i.close()
            }
        })
    }
    disconnect() {
        return l(this, null, function*() {
            this.session && (yield this.signer.disconnect()),
            this.reset()
        })
    }
    get isWalletConnect() {
        return !0
    }
    get session() {
        return this.signer.session
    }
    registerEventListeners() {
        this.signer.on("session_event", e => {
            let {params: t} = e
              , {event: i} = t;
            i.name === "accountsChanged" ? (this.accounts = this.parseAccounts(i.data),
            this.events.emit("accountsChanged", this.accounts)) : i.name === "chainChanged" ? this.setChainId(this.formatChainId(i.data)) : this.events.emit(i.name, i.data),
            this.events.emit("session_event", e)
        }
        ),
        this.signer.on("accountsChanged", e => {
            this.accounts = this.parseAccounts(e),
            this.events.emit("accountsChanged", this.accounts)
        }
        ),
        this.signer.on("chainChanged", e => {
            let t = parseInt(e);
            this.chainId = t,
            this.events.emit("chainChanged", ir(this.chainId)),
            this.persist()
        }
        ),
        this.signer.on("session_update", e => {
            this.events.emit("session_update", e)
        }
        ),
        this.signer.on("session_delete", e => {
            this.reset(),
            this.events.emit("session_delete", e),
            this.events.emit("disconnect", ui(Zt({}, K("USER_DISCONNECTED")), {
                data: e.topic,
                name: "USER_DISCONNECTED"
            }))
        }
        ),
        this.signer.on("display_uri", e => {
            this.events.emit("display_uri", e)
        }
        )
    }
    switchEthereumChain(e) {
        this.request({
            method: "wallet_switchEthereumChain",
            params: [{
                chainId: e.toString(16)
            }]
        })
    }
    isCompatibleChainId(e) {
        return typeof e == "string" ? e.startsWith(`${this.namespace}:`) : !1
    }
    formatChainId(e) {
        return `${this.namespace}:${e}`
    }
    parseChainId(e) {
        return Number(e.split(":")[1])
    }
    setChainIds(e) {
        let t = e.filter(i => this.isCompatibleChainId(i)).map(i => this.parseChainId(i));
        t.length && (this.chainId = t[0],
        this.events.emit("chainChanged", ir(this.chainId)),
        this.persist())
    }
    setChainId(e) {
        if (this.isCompatibleChainId(e)) {
            let t = this.parseChainId(e);
            this.chainId = t,
            this.switchEthereumChain(t)
        }
    }
    parseAccountId(e) {
        let[t,i,r] = e.split(":");
        return {
            chainId: `${t}:${i}`,
            address: r
        }
    }
    setAccounts(e) {
        this.accounts = e.filter(t => this.parseChainId(this.parseAccountId(t).chainId) === this.chainId).map(t => this.parseAccountId(t).address),
        this.events.emit("accountsChanged", this.accounts)
    }
    getRpcConfig(e) {
        var t, i;
        let r = (t = e?.chains) != null ? t : []
          , n = (i = e?.optionalChains) != null ? i : []
          , o = r.concat(n);
        if (!o.length)
            throw new Error("No chains specified in either `chains` or `optionalChains`");
        let a = r.length ? e?.methods || So : []
          , c = r.length ? e?.events || Oo : []
          , h = e?.optionalMethods || []
          , p = e?.optionalEvents || []
          , u = e?.rpcMap || this.buildRpcMap(o, e.projectId)
          , d = e?.qrModalOptions || void 0;
        return {
            chains: r?.map(g => this.formatChainId(g)),
            optionalChains: n.map(g => this.formatChainId(g)),
            methods: a,
            events: c,
            optionalMethods: h,
            optionalEvents: p,
            rpcMap: u,
            showQrModal: !!(e != null && e.showQrModal),
            qrModalOptions: d,
            projectId: e.projectId,
            metadata: e.metadata
        }
    }
    buildRpcMap(e, t) {
        let i = {};
        return e.forEach(r => {
            i[r] = this.getRpcUrl(r, t)
        }
        ),
        i
    }
    initialize(e) {
        return l(this, null, function*() {
            if (this.rpc = this.getRpcConfig(e),
            this.chainId = this.rpc.chains.length ? rr(this.rpc.chains) : rr(this.rpc.optionalChains),
            this.signer = yield al.init({
                projectId: this.rpc.projectId,
                metadata: this.rpc.metadata,
                disableProviderPing: e.disableProviderPing,
                relayUrl: e.relayUrl,
                storage: e.storage,
                storageOptions: e.storageOptions,
                customStoragePrefix: e.customStoragePrefix,
                telemetryEnabled: e.telemetryEnabled,
                logger: e.logger
            }),
            this.registerEventListeners(),
            yield this.loadPersistedSession(),
            this.rpc.showQrModal) {
                let t;
                try {
                    let i = yield Pw()
                      , {convertWCMToAppKitOptions: r} = yield Promise.resolve().then(function() {
                        return $w
                    })
                      , n = r(ui(Zt({}, this.rpc.qrModalOptions), {
                        chains: [...new Set([...this.rpc.chains, ...this.rpc.optionalChains])],
                        metadata: this.rpc.metadata,
                        projectId: this.rpc.projectId
                    }));
                    if (!n.networks.length)
                        throw new Error("No networks found for WalletConnect\xB7");
                    t = i(ui(Zt({}, n), {
                        universalProvider: this.signer,
                        manualWCControl: !0
                    }))
                } catch (i) {
                    throw console.warn(i),
                    new Error("To use QR modal, please install @reown/appkit package")
                }
                if (t)
                    try {
                        this.modal = t
                    } catch (i) {
                        throw this.signer.logger.error(i),
                        new Error("Could not generate WalletConnectModal Instance")
                    }
            }
        })
    }
    loadConnectOpts(e) {
        if (!e)
            return;
        let {chains: t, optionalChains: i, rpcMap: r} = e;
        t && qe(t) && (this.rpc.chains = t.map(n => this.formatChainId(n)),
        t.forEach(n => {
            this.rpc.rpcMap[n] = r?.[n] || this.getRpcUrl(n)
        }
        )),
        i && qe(i) && (this.rpc.optionalChains = [],
        this.rpc.optionalChains = i?.map(n => this.formatChainId(n)),
        i.forEach(n => {
            this.rpc.rpcMap[n] = r?.[n] || this.getRpcUrl(n)
        }
        ))
    }
    getRpcUrl(e, t) {
        var i;
        return ((i = this.rpc.rpcMap) == null ? void 0 : i[e]) || `${Ew}?chainId=eip155:${e}&projectId=${t || this.rpc.projectId}`
    }
    loadPersistedSession() {
        return l(this, null, function*() {
            if (this.session)
                try {
                    let e = yield this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`)
                      , t = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
                    this.setChainIds(e ? [this.formatChainId(e)] : t?.accounts),
                    this.setAccounts(t?.accounts)
                } catch (e) {
                    this.signer.logger.error("Failed to load persisted session, clearing state..."),
                    this.signer.logger.error(e),
                    yield this.disconnect().catch(t => this.signer.logger.warn(t))
                }
        })
    }
    reset() {
        this.chainId = 1,
        this.accounts = []
    }
    persist() {
        this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
    }
    parseAccounts(e) {
        return typeof e == "string" || e instanceof String ? [this.parseAccount(e)] : e.map(t => this.parseAccount(t))
    }
}
  , Kb = xo
  , Cw = Object.defineProperty
  , Nw = Object.defineProperties
  , qw = Object.getOwnPropertyDescriptors
  , hl = Object.getOwnPropertySymbols
  , Dw = Object.prototype.hasOwnProperty
  , Fw = Object.prototype.propertyIsEnumerable
  , ll = (s, e, t) => e in s ? Cw(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , ul = (s, e) => {
    for (var t in e || (e = {}))
        Dw.call(e, t) && ll(s, t, e[t]);
    if (hl)
        for (var t of hl(e))
            Fw.call(e, t) && ll(s, t, e[t]);
    return s
}
  , Uw = (s, e) => Nw(s, qw(e));
function kw(s) {
    if (s)
        return {
            "--w3m-font-family": s["--wcm-font-family"],
            "--w3m-accent": s["--wcm-accent-color"],
            "--w3m-color-mix": s["--wcm-background-color"],
            "--w3m-z-index": s["--wcm-z-index"] ? Number(s["--wcm-z-index"]) : void 0,
            "--w3m-qr-color": s["--wcm-accent-color"],
            "--w3m-font-size-master": s["--wcm-text-medium-regular-size"],
            "--w3m-border-radius-master": s["--wcm-container-border-radius"],
            "--w3m-color-mix-strength": 0
        }
}
var jw = s => {
    let[e,t] = s.split(":");
    return dl({
        id: t,
        caipNetworkId: s,
        chainNamespace: e,
        name: "",
        nativeCurrency: {
            name: "",
            symbol: "",
            decimals: 8
        },
        rpcUrls: {
            default: {
                http: ["https://rpc.walletconnect.org/v1"]
            }
        }
    })
}
;
function Lw(s) {
    var e, t, i, r, n, o, a;
    let c = (e = s.chains) == null ? void 0 : e.map(jw).filter(Boolean);
    if (c.length === 0)
        throw new Error("At least one chain must be specified");
    let h = c.find(u => {
        var d;
        return u.id === ((d = s.defaultChain) == null ? void 0 : d.id)
    }
    )
      , p = {
        projectId: s.projectId,
        networks: c,
        themeMode: s.themeMode,
        themeVariables: kw(s.themeVariables),
        chainImages: s.chainImages,
        connectorImages: s.walletImages,
        defaultNetwork: h,
        metadata: Uw(ul({}, s.metadata), {
            name: ((t = s.metadata) == null ? void 0 : t.name) || "WalletConnect",
            description: ((i = s.metadata) == null ? void 0 : i.description) || "Connect to WalletConnect-compatible wallets",
            url: ((r = s.metadata) == null ? void 0 : r.url) || "https://walletconnect.org",
            icons: ((n = s.metadata) == null ? void 0 : n.icons) || ["https://walletconnect.org/walletconnect-logo.png"]
        }),
        showWallets: !0,
        featuredWalletIds: s.explorerRecommendedWalletIds === "NONE" ? [] : Array.isArray(s.explorerRecommendedWalletIds) ? s.explorerRecommendedWalletIds : [],
        excludeWalletIds: s.explorerExcludedWalletIds === "ALL" ? [] : Array.isArray(s.explorerExcludedWalletIds) ? s.explorerExcludedWalletIds : [],
        enableEIP6963: !1,
        enableInjected: !1,
        enableCoinbase: !0,
        enableWalletConnect: !0,
        features: {
            email: !1,
            socials: !1
        }
    };
    if ((o = s.mobileWallets) != null && o.length || (a = s.desktopWallets) != null && a.length) {
        let u = [...(s.mobileWallets || []).map(f => ({
            id: f.id,
            name: f.name,
            links: f.links
        })), ...(s.desktopWallets || []).map(f => ({
            id: f.id,
            name: f.name,
            links: {
                native: f.links.native,
                universal: f.links.universal
            }
        }))]
          , d = [...p.featuredWalletIds || [], ...p.excludeWalletIds || []]
          , g = u.filter(f => !d.includes(f.id));
        g.length && (p.customWallets = g)
    }
    return p
}
function dl(s) {
    return ul({
        formatters: void 0,
        fees: void 0,
        serializers: void 0
    }, s)
}
var $w = Object.freeze({
    __proto__: null,
    convertWCMToAppKitOptions: Lw,
    defineChain: dl
});
export {Kb as EthereumProvider, _w as OPTIONAL_EVENTS, Iw as OPTIONAL_METHODS, Oo as REQUIRED_EVENTS, So as REQUIRED_METHODS, xo as default};
