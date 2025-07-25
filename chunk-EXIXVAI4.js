import {a as Ht, b as ci, c as Pa, d as ns, e as Aa, f as Es, g as le, h as Na} from "./chunk-26ZSANA4.js";
import {A as bs, B as Ea, D as ji, E as $i, I as Sa, J as Ta, a as se, b as wa, c as Ot, h as Ae, i as Le, j as ze, k as q, m as va, n as Vt, o as vs, p as qi, q as ai, r as yt, s as ce, t as Br, u as Ke, v as Mr, w as ba, x as _, y as Vr, z as K} from "./chunk-QYDEHUYP.js";
import {a as ca, b as Lr, c as la, d as Xh, e as pa, f as ri, g as jr, h as da, i as ys, j as Ve, k as xe, l as ua, m as ts, n as ss, o as ga, p as fa, q as ya} from "./chunk-VUTG6GIZ.js";
import {a as qr, b as ha, c as ws, d as is, e as Fe, f as Pe, g as ma, i as Tt, j as Mt, k as mt, l as rs, m as Li, p as ni, q as oi, r as ot, s as et, t as $r, u as je, v as He} from "./chunk-WSOYI2AJ.js";
import {a as Hr, b as zr, c as Ia, d as Kr, e as Ca, f as _a} from "./chunk-HNVFGTPV.js";
import "./chunk-HBZ5ZBJB.js";
import "./chunk-J3Q5VSKP.js";
import "./chunk-43A6WDDN.js";
import {a as Fi} from "./chunk-EHBBQRNU.js";
import "./chunk-DYADWNQA.js";
import {j as Fr} from "./chunk-MXRAEGHM.js";
import "./chunk-YTUIZ7QE.js";
import "./chunk-TLA6RWUK.js";
import "./chunk-KOO2GJBY.js";
import "./chunk-VQJZCEAB.js";
import "./chunk-CRYW3XTN.js";
import "./chunk-6WGECOWL.js";
import {a as j, b as be, d as aa, i as ft, k as Dr, l as h} from "./chunk-JOVT4LBN.js";
var $t = ft(Fi());
var xa = ft(Fi())
  , Zh = Object.defineProperty
  , Qh = (s, e, t) => e in s ? Zh(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Oa = (s, e, t) => Qh(s, typeof e != "symbol" ? e + "" : e, t)
  , Bi = class extends ts {
    constructor(e) {
        super(),
        this.opts = e,
        Oa(this, "protocol", "wc"),
        Oa(this, "version", 2)
    }
}
;
var ep = Object.defineProperty
  , tp = (s, e, t) => e in s ? ep(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , sp = (s, e, t) => tp(s, typeof e != "symbol" ? e + "" : e, t)
  , Mi = class extends ts {
    constructor(e, t) {
        super(),
        this.core = e,
        this.logger = t,
        sp(this, "records", new Map)
    }
}
  , Vi = class {
    constructor(e, t) {
        this.logger = e,
        this.core = t
    }
}
  , Hi = class extends ts {
    constructor(e, t) {
        super(),
        this.relayer = e,
        this.logger = t
    }
}
  , zi = class extends ts {
    constructor(e) {
        super()
    }
}
  , Ki = class {
    constructor(e, t, i, r) {
        this.core = e,
        this.logger = t,
        this.name = i
    }
}
;
var Wi = class extends ts {
    constructor(e, t) {
        super(),
        this.relayer = e,
        this.logger = t
    }
}
;
var Gi = class extends ts {
    constructor(e, t) {
        super(),
        this.core = e,
        this.logger = t
    }
}
;
var Yi = class {
    constructor(e, t, i) {
        this.core = e,
        this.logger = t,
        this.store = i
    }
}
  , Ji = class {
    constructor(e, t) {
        this.projectId = e,
        this.logger = t
    }
}
  , Xi = class {
    constructor(e, t, i) {
        this.core = e,
        this.logger = t,
        this.telemetryEnabled = i
    }
}
  , ip = Object.defineProperty
  , rp = (s, e, t) => e in s ? ip(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Ra = (s, e, t) => rp(s, typeof e != "symbol" ? e + "" : e, t);
var Zi = class {
    constructor(e) {
        this.opts = e,
        Ra(this, "protocol", "wc"),
        Ra(this, "version", 2)
    }
}
;
var Qi = class {
    constructor(e) {
        this.client = e
    }
}
;
var $ = ft(Lr());
var Dt = ft(Lr())
  , lt = ft(la())
  , fc = ft(Xh());
function ka(s) {
    let e = Ca(`0x${s.substring(4)}`).substring(26);
    return _a(`0x${e}`)
}
function Da(t) {
    return h(this, arguments, function*({hash: s, signature: e}) {
        let i = Hr(s) ? s : Kr(s)
          , {secp256k1: r} = yield import("./chunk-5VA33UGM.js");
        return `0x${( () => {
            if (typeof e == "object" && "r"in e && "s"in e) {
                let {r: p, s: d, v: u, yParity: m} = e
                  , f = Number(m ?? u)
                  , y = Ua(f);
                return new r.Signature(zr(p),zr(d)).addRecoveryBit(y)
            }
            let a = Hr(e) ? e : Kr(e)
              , c = Ia(`0x${a.slice(130)}`)
              , l = Ua(c);
            return r.Signature.fromCompact(a.substring(2, 130)).addRecoveryBit(l)
        }
        )().recoverPublicKey(i.substring(2)).toHex(!1)}`
    })
}
function Ua(s) {
    if (s === 0 || s === 1)
        return s;
    if (s === 27)
        return 0;
    if (s === 28)
        return 1;
    throw new Error("Invalid yParityOrV value")
}
function Wr(t) {
    return h(this, arguments, function*({hash: s, signature: e}) {
        return ka(yield Da({
            hash: s,
            signature: e
        }))
    })
}
function np(s) {
    if (s.length >= 255)
        throw new TypeError("Alphabet too long");
    let e = new Uint8Array(256);
    for (let l = 0; l < e.length; l++)
        e[l] = 255;
    for (let l = 0; l < s.length; l++) {
        let p = s.charAt(l)
          , d = p.charCodeAt(0);
        if (e[d] !== 255)
            throw new TypeError(p + " is ambiguous");
        e[d] = l
    }
    let t = s.length
      , i = s.charAt(0)
      , r = Math.log(t) / Math.log(256)
      , n = Math.log(256) / Math.log(t);
    function o(l) {
        if (l instanceof Uint8Array || (ArrayBuffer.isView(l) ? l = new Uint8Array(l.buffer,l.byteOffset,l.byteLength) : Array.isArray(l) && (l = Uint8Array.from(l))),
        !(l instanceof Uint8Array))
            throw new TypeError("Expected Uint8Array");
        if (l.length === 0)
            return "";
        let p = 0
          , d = 0
          , u = 0
          , m = l.length;
        for (; u !== m && l[u] === 0; )
            u++,
            p++;
        let f = (m - u) * n + 1 >>> 0
          , y = new Uint8Array(f);
        for (; u !== m; ) {
            let w = l[u]
              , b = 0;
            for (let P = f - 1; (w !== 0 || b < d) && P !== -1; P--,
            b++)
                w += 256 * y[P] >>> 0,
                y[P] = w % t >>> 0,
                w = w / t >>> 0;
            if (w !== 0)
                throw new Error("Non-zero carry");
            d = b,
            u++
        }
        let g = f - d;
        for (; g !== f && y[g] === 0; )
            g++;
        let v = i.repeat(p);
        for (; g < f; ++g)
            v += s.charAt(y[g]);
        return v
    }
    function a(l) {
        if (typeof l != "string")
            throw new TypeError("Expected String");
        if (l.length === 0)
            return new Uint8Array;
        let p = 0
          , d = 0
          , u = 0;
        for (; l[p] === i; )
            d++,
            p++;
        let m = (l.length - p) * r + 1 >>> 0
          , f = new Uint8Array(m);
        for (; p < l.length; ) {
            let w = l.charCodeAt(p);
            if (w > 255)
                return;
            let b = e[w];
            if (b === 255)
                return;
            let P = 0;
            for (let R = m - 1; (b !== 0 || P < u) && R !== -1; R--,
            P++)
                b += t * f[R] >>> 0,
                f[R] = b % 256 >>> 0,
                b = b / 256 >>> 0;
            if (b !== 0)
                throw new Error("Non-zero carry");
            u = P,
            p++
        }
        let y = m - u;
        for (; y !== m && f[y] === 0; )
            y++;
        let g = new Uint8Array(d + (m - y))
          , v = d;
        for (; y !== m; )
            g[v++] = f[y++];
        return g
    }
    function c(l) {
        let p = a(l);
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
var Fa = np;
var op = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
  , er = Fa(op);
var ap = ":";
function Jt(s) {
    let[e,t] = s.split(ap);
    return {
        namespace: e,
        reference: t
    }
}
function mc(s, e) {
    return s.includes(":") ? [s] : e.chains || []
}
var cp = Object.defineProperty
  , lp = Object.defineProperties
  , hp = Object.getOwnPropertyDescriptors
  , La = Object.getOwnPropertySymbols
  , pp = Object.prototype.hasOwnProperty
  , dp = Object.prototype.propertyIsEnumerable
  , qa = (s, e, t) => e in s ? cp(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , ja = (s, e) => {
    for (var t in e || (e = {}))
        pp.call(e, t) && qa(s, t, e[t]);
    if (La)
        for (var t of La(e))
            dp.call(e, t) && qa(s, t, e[t]);
    return s
}
  , up = (s, e) => lp(s, hp(e))
  , gp = "ReactNative"
  , Be = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
};
var fp = "js";
function mi() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
}
function Ft() {
    return !(0,
    lt.getDocument)() && !!(0,
    lt.getNavigator)() && navigator.product === gp
}
function yc() {
    return Ft() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "android"
}
function wc() {
    return Ft() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "ios"
}
function ps() {
    return !mi() && !!(0,
    lt.getNavigator)() && !!(0,
    lt.getDocument)()
}
function yi() {
    return Ft() ? Be.reactNative : mi() ? Be.node : ps() ? Be.browser : Be.unknown
}
function vn() {
    var s;
    try {
        return Ft() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (s = global.Application) == null ? void 0 : s.applicationId : void 0
    } catch {
        return
    }
}
function mp(s, e) {
    let t = new URLSearchParams(s);
    for (let i of Object.keys(e).sort())
        if (e.hasOwnProperty(i)) {
            let r = e[i];
            r !== void 0 && t.set(i, r)
        }
    return t.toString()
}
function vc(s) {
    var e, t;
    let i = bn();
    try {
        return s != null && s.url && i.url && new URL(s.url).host !== new URL(i.url).host && (console.warn(`The configured WalletConnect 'metadata.url':${s.url} differs from the actual page url:${i.url}. This is probably unintended and can lead to issues.`),
        s.url = i.url),
        (e = s?.icons) != null && e.length && s.icons.length > 0 && (s.icons = s.icons.filter(r => r !== "")),
        up(ja(ja({}, i), s), {
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
function bn() {
    return (0,
    fc.getWindowMetadata)() || {
        name: "",
        description: "",
        url: "",
        icons: [""]
    }
}
function yp() {
    if (yi() === Be.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
        let {OS: t, Version: i} = global.Platform;
        return [t, i].join("-")
    }
    let s = ca();
    if (s === null)
        return "unknown";
    let e = s.os ? s.os.replace(" ", "").toLowerCase() : "unknown";
    return s.type === "browser" ? [e, s.name, s.version].join("-") : [e, s.version].join("-")
}
function wp() {
    var s;
    let e = yi();
    return e === Be.browser ? [e, ((s = (0,
    lt.getLocation)()) == null ? void 0 : s.host) || "unknown"].join(":") : e
}
function En(s, e, t) {
    let i = yp()
      , r = wp();
    return [[s, e].join("-"), [fp, t].join("-"), i, r].join("/")
}
function bc({protocol: s, version: e, relayUrl: t, sdkVersion: i, auth: r, projectId: n, useOnCloseEvent: o, bundleId: a, packageName: c}) {
    let l = t.split("?")
      , p = En(s, e, i)
      , d = {
        auth: r,
        ua: p,
        projectId: n,
        useOnCloseEvent: o || void 0,
        packageName: c || void 0,
        bundleId: a || void 0
    }
      , u = mp(l[1] || "", d);
    return l[0] + "?" + u
}
function as(s, e) {
    return s.filter(t => e.includes(t)).length === s.length
}
function or(s) {
    return Object.fromEntries(s.entries())
}
function ar(s) {
    return new Map(Object.entries(s))
}
function Lt(s=Dt.FIVE_MINUTES, e) {
    let t = (0,
    Dt.toMiliseconds)(s || Dt.FIVE_MINUTES), i, r, n, o;
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
                let l = new Error(e);
                o = Promise.reject(l),
                c(l)
            }
            , t),
            i = a,
            r = c
        }
        )
    }
}
function qt(s, e, t) {
    return new Promise( (i, r) => h(this, null, function*() {
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
function Ec(s, e) {
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
function Ic(s) {
    return Ec("topic", s)
}
function Cc(s) {
    return Ec("id", s)
}
function cr(s) {
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
function de(s, e) {
    return (0,
    Dt.fromMiliseconds)((e || Date.now()) + (0,
    Dt.toMiliseconds)(s))
}
function vt(s) {
    return Date.now() >= (0,
    Dt.toMiliseconds)(s)
}
function X(s, e) {
    return `${s}${e ? `:${e}` : ""}`
}
function ct(s=[], e=[]) {
    return [...new Set([...s, ...e])]
}
function _c(i) {
    return h(this, arguments, function*({id: s, topic: e, wcDeepLink: t}) {
        var r;
        try {
            if (!t)
                return;
            let n = typeof t == "string" ? JSON.parse(t) : t
              , o = n?.href;
            if (typeof o != "string")
                return;
            let a = vp(o, s, e)
              , c = yi();
            if (c === Be.browser) {
                if (!((r = (0,
                lt.getDocument)()) != null && r.hasFocus())) {
                    console.warn("Document does not have focus, skipping deeplink.");
                    return
                }
                bp(a)
            } else
                c === Be.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && (yield global.Linking.openURL(a))
        } catch (n) {
            console.error(n)
        }
    })
}
function vp(s, e, t) {
    let i = `requestId=${e}&sessionTopic=${t}`;
    s.endsWith("/") && (s = s.slice(0, -1));
    let r = `${s}`;
    if (s.startsWith("https://t.me")) {
        let n = s.includes("?") ? "&startapp=" : "?startapp=";
        r = `${r}${n}${Cp(i, !0)}`
    } else
        r = `${r}/wc?${i}`;
    return r
}
function bp(s) {
    let e = "_self";
    Ip() ? e = "_top" : (Ep() || s.startsWith("https://") || s.startsWith("http://")) && (e = "_blank"),
    window.open(s, e, "noreferrer noopener")
}
function Pc(s, e) {
    return h(this, null, function*() {
        let t = "";
        try {
            if (ps() && (t = localStorage.getItem(e),
            t))
                return t;
            t = yield s.getItem(e)
        } catch (i) {
            console.error(i)
        }
        return t
    })
}
function In(s, e) {
    if (!s.includes(e))
        return null;
    let t = s.split(/([&,?,=])/)
      , i = t.indexOf(e);
    return t[i + 2]
}
function Cn() {
    return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, s => {
        let e = Math.random() * 16 | 0;
        return (s === "x" ? e : e & 3 | 8).toString(16)
    }
    )
}
function wi() {
    return typeof process < "u" && process.env.IS_VITEST === "true"
}
function Ep() {
    return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto)
}
function Ip() {
    try {
        return window.self !== window.top
    } catch {
        return !1
    }
}
function Cp(s, e=!1) {
    let t = Buffer.from(s).toString("base64");
    return e ? t.replace(/[=]/g, "") : t
}
function Ac(s) {
    return Buffer.from(s, "base64").toString("utf-8")
}
function Nc(s) {
    return new Promise(e => setTimeout(e, s))
}
function pi(s) {
    if (!Number.isSafeInteger(s) || s < 0)
        throw new Error("positive integer expected, got " + s)
}
function _p(s) {
    return s instanceof Uint8Array || ArrayBuffer.isView(s) && s.constructor.name === "Uint8Array"
}
function vi(s, ...e) {
    if (!_p(s))
        throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(s.length))
        throw new Error("Uint8Array expected of length " + e + ", got length=" + s.length)
}
function _n(s) {
    if (typeof s != "function" || typeof s.create != "function")
        throw new Error("Hash should be wrapped by utils.wrapConstructor");
    pi(s.outputLen),
    pi(s.blockLen)
}
function Ps(s, e=!0) {
    if (s.destroyed)
        throw new Error("Hash instance has been destroyed");
    if (e && s.finished)
        throw new Error("Hash#digest() has already been called")
}
function Sc(s, e) {
    vi(s);
    let t = e.outputLen;
    if (s.length < t)
        throw new Error("digestInto() expects output buffer of length at least " + t)
}
var tr = BigInt(2 ** 32 - 1)
  , $a = BigInt(32);
function Pp(s, e=!1) {
    return e ? {
        h: Number(s & tr),
        l: Number(s >> $a & tr)
    } : {
        h: Number(s >> $a & tr) | 0,
        l: Number(s & tr) | 0
    }
}
function Ap(s, e=!1) {
    let t = new Uint32Array(s.length)
      , i = new Uint32Array(s.length);
    for (let r = 0; r < s.length; r++) {
        let {h: n, l: o} = Pp(s[r], e);
        [t[r],i[r]] = [n, o]
    }
    return [t, i]
}
var Np = (s, e, t) => s << t | e >>> 32 - t
  , Sp = (s, e, t) => e << t | s >>> 32 - t
  , Tp = (s, e, t) => e << t - 32 | s >>> 64 - t
  , Op = (s, e, t) => s << t - 32 | e >>> 64 - t
  , Is = typeof globalThis == "object" && "crypto"in globalThis ? globalThis.crypto : void 0;
function Rp(s) {
    return new Uint32Array(s.buffer,s.byteOffset,Math.floor(s.byteLength / 4))
}
function Gr(s) {
    return new DataView(s.buffer,s.byteOffset,s.byteLength)
}
function wt(s, e) {
    return s << 32 - e | s >>> e
}
var Ba = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function xp(s) {
    return s << 24 & 4278190080 | s << 8 & 16711680 | s >>> 8 & 65280 | s >>> 24 & 255
}
function Ma(s) {
    for (let e = 0; e < s.length; e++)
        s[e] = xp(s[e])
}
function kp(s) {
    if (typeof s != "string")
        throw new Error("utf8ToBytes expected string, got " + typeof s);
    return new Uint8Array(new TextEncoder().encode(s))
}
function As(s) {
    return typeof s == "string" && (s = kp(s)),
    vi(s),
    s
}
function Up(...s) {
    let e = 0;
    for (let i = 0; i < s.length; i++) {
        let r = s[i];
        vi(r),
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
var di = class {
    clone() {
        return this._cloneInto()
    }
}
;
function Tc(s) {
    let e = i => s().update(As(i)).digest()
      , t = s();
    return e.outputLen = t.outputLen,
    e.blockLen = t.blockLen,
    e.create = () => s(),
    e
}
function xs(s=32) {
    if (Is && typeof Is.getRandomValues == "function")
        return Is.getRandomValues(new Uint8Array(s));
    if (Is && typeof Is.randomBytes == "function")
        return Is.randomBytes(s);
    throw new Error("crypto.getRandomValues must be defined")
}
var Oc = []
  , Rc = []
  , xc = []
  , Dp = BigInt(0)
  , li = BigInt(1)
  , Fp = BigInt(2)
  , Lp = BigInt(7)
  , qp = BigInt(256)
  , jp = BigInt(113);
for (let s = 0, e = li, t = 1, i = 0; s < 24; s++) {
    [t,i] = [i, (2 * t + 3 * i) % 5],
    Oc.push(2 * (5 * i + t)),
    Rc.push((s + 1) * (s + 2) / 2 % 64);
    let r = Dp;
    for (let n = 0; n < 7; n++)
        e = (e << li ^ (e >> Lp) * jp) % qp,
        e & Fp && (r ^= li << (li << BigInt(n)) - li);
    xc.push(r)
}
var [$p,Bp] = Ap(xc, !0)
  , Va = (s, e, t) => t > 32 ? Tp(s, e, t) : Np(s, e, t)
  , Ha = (s, e, t) => t > 32 ? Op(s, e, t) : Sp(s, e, t);
function Mp(s, e=24) {
    let t = new Uint32Array(10);
    for (let i = 24 - e; i < 24; i++) {
        for (let o = 0; o < 10; o++)
            t[o] = s[o] ^ s[o + 10] ^ s[o + 20] ^ s[o + 30] ^ s[o + 40];
        for (let o = 0; o < 10; o += 2) {
            let a = (o + 8) % 10
              , c = (o + 2) % 10
              , l = t[c]
              , p = t[c + 1]
              , d = Va(l, p, 1) ^ t[a]
              , u = Ha(l, p, 1) ^ t[a + 1];
            for (let m = 0; m < 50; m += 10)
                s[o + m] ^= d,
                s[o + m + 1] ^= u
        }
        let r = s[2]
          , n = s[3];
        for (let o = 0; o < 24; o++) {
            let a = Rc[o]
              , c = Va(r, n, a)
              , l = Ha(r, n, a)
              , p = Oc[o];
            r = s[p],
            n = s[p + 1],
            s[p] = c,
            s[p + 1] = l
        }
        for (let o = 0; o < 50; o += 10) {
            for (let a = 0; a < 10; a++)
                t[a] = s[o + a];
            for (let a = 0; a < 10; a++)
                s[o + a] ^= ~t[(a + 2) % 10] & t[(a + 4) % 10]
        }
        s[0] ^= $p[i],
        s[1] ^= Bp[i]
    }
    t.fill(0)
}
var on = class s extends di {
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
        pi(i),
        0 >= this.blockLen || this.blockLen >= 200)
            throw new Error("Sha3 supports only keccak-f1600 function");
        this.state = new Uint8Array(200),
        this.state32 = Rp(this.state)
    }
    keccak() {
        Ba || Ma(this.state32),
        Mp(this.state32, this.rounds),
        Ba || Ma(this.state32),
        this.posOut = 0,
        this.pos = 0
    }
    update(e) {
        Ps(this);
        let {blockLen: t, state: i} = this;
        e = As(e);
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
        Ps(this, !1),
        vi(e),
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
        return pi(e),
        this.xofInto(new Uint8Array(e))
    }
    digestInto(e) {
        if (Sc(e, this),
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
  , Vp = (s, e, t) => Tc( () => new on(e,s,t))
  , Hp = Vp(1, 136, 256 / 8)
  , zp = "https://rpc.walletconnect.org/v1";
function kc(s) {
    let e = `Ethereum Signed Message:
${s.length}`
      , t = new TextEncoder().encode(e + s);
    return "0x" + Buffer.from(Hp(t)).toString("hex")
}
function Kp(s, e, t, i, r, n) {
    return h(this, null, function*() {
        switch (t.t) {
        case "eip191":
            return yield Wp(s, e, t.s);
        case "eip1271":
            return yield Gp(s, e, t.s, i, r, n);
        default:
            throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${t.t}`)
        }
    })
}
function Wp(s, e, t) {
    return h(this, null, function*() {
        return (yield Wr({
            hash: kc(e),
            signature: t
        })).toLowerCase() === s.toLowerCase()
    })
}
function Gp(s, e, t, i, r, n) {
    return h(this, null, function*() {
        let o = Jt(i);
        if (!o.namespace || !o.reference)
            throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${i}`);
        try {
            let a = "0x1626ba7e"
              , c = "0000000000000000000000000000000000000000000000000000000000000040"
              , l = "0000000000000000000000000000000000000000000000000000000000000041"
              , p = t.substring(2)
              , d = kc(e).substring(2)
              , u = a + d + c + l + p
              , m = yield fetch(`${n || zp}/?chainId=${i}&projectId=${r}`, {
                method: "POST",
                body: JSON.stringify({
                    id: Yp(),
                    jsonrpc: "2.0",
                    method: "eth_call",
                    params: [{
                        to: s,
                        data: u
                    }, "latest"]
                })
            })
              , {result: f} = yield m.json();
            return f ? f.slice(0, a.length).toLowerCase() === a.toLowerCase() : !1
        } catch (a) {
            return console.error("isValidEip1271Signature: ", a),
            !1
        }
    })
}
function Yp() {
    return Date.now() + Math.floor(Math.random() * 1e3)
}
function Uc(s) {
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
    return er.encode(n)
}
var Jp = Object.defineProperty
  , Xp = Object.defineProperties
  , Zp = Object.getOwnPropertyDescriptors
  , za = Object.getOwnPropertySymbols
  , Qp = Object.prototype.hasOwnProperty
  , ed = Object.prototype.propertyIsEnumerable
  , Ka = (s, e, t) => e in s ? Jp(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , td = (s, e) => {
    for (var t in e || (e = {}))
        Qp.call(e, t) && Ka(s, t, e[t]);
    if (za)
        for (var t of za(e))
            ed.call(e, t) && Ka(s, t, e[t]);
    return s
}
  , sd = (s, e) => Xp(s, Zp(e))
  , id = "did:pkh:"
  , Pn = s => s?.split(":")
  , rd = s => {
    let e = s && Pn(s);
    if (e)
        return s.includes(id) ? e[3] : e[1]
}
  , lr = s => {
    let e = s && Pn(s);
    if (e)
        return e[2] + ":" + e[3]
}
  , bi = s => {
    let e = s && Pn(s);
    if (e)
        return e.pop()
}
;
function An(s) {
    return h(this, null, function*() {
        let {cacao: e, projectId: t} = s
          , {s: i, p: r} = e
          , n = Nn(r, r.iss)
          , o = bi(r.iss);
        return yield Kp(o, n, i, lr(r.iss), t)
    })
}
var Nn = (s, e) => {
    let t = `${s.domain} wants you to sign in with your Ethereum account:`
      , i = bi(e);
    if (!s.aud && !s.uri)
        throw new Error("Either `aud` or `uri` is required to construct the message");
    let r = s.statement || void 0
      , n = `URI: ${s.aud || s.uri}`
      , o = `Version: ${s.version}`
      , a = `Chain ID: ${rd(e)}`
      , c = `Nonce: ${s.nonce}`
      , l = `Issued At: ${s.iat}`
      , p = s.exp ? `Expiration Time: ${s.exp}` : void 0
      , d = s.nbf ? `Not Before: ${s.nbf}` : void 0
      , u = s.requestId ? `Request ID: ${s.requestId}` : void 0
      , m = s.resources ? `Resources:${s.resources.map(y => `
- ${y}`).join("")}` : void 0
      , f = Ei(s.resources);
    if (f) {
        let y = ui(f);
        r = pd(r, y)
    }
    return [t, i, "", r, "", n, o, a, c, l, p, d, u, m].filter(y => y != null).join(`
`)
}
;
function nd(s) {
    return Buffer.from(JSON.stringify(s)).toString("base64")
}
function od(s) {
    return JSON.parse(Buffer.from(s, "base64").toString("utf-8"))
}
function ls(s) {
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
function ad(s, e, t, i={}) {
    return t?.sort( (r, n) => r.localeCompare(n)),
    {
        att: {
            [s]: cd(e, t, i)
        }
    }
}
function cd(s, e, t={}) {
    e = e?.sort( (r, n) => r.localeCompare(n));
    let i = e.map(r => ({
        [`${s}/${r}`]: [t]
    }));
    return Object.assign({}, ...i)
}
function Dc(s) {
    return ls(s),
    `urn:recap:${nd(s).replace(/=/g, "")}`
}
function ui(s) {
    let e = od(s.replace("urn:recap:", ""));
    return ls(e),
    e
}
function Fc(s, e, t) {
    let i = ad(s, e, t);
    return Dc(i)
}
function ld(s) {
    return s && s.includes("urn:recap:")
}
function Lc(s, e) {
    let t = ui(s)
      , i = ui(e)
      , r = hd(t, i);
    return Dc(r)
}
function hd(s, e) {
    ls(s),
    ls(e);
    let t = Object.keys(s.att).concat(Object.keys(e.att)).sort( (r, n) => r.localeCompare(n))
      , i = {
        att: {}
    };
    return t.forEach(r => {
        var n, o;
        Object.keys(((n = s.att) == null ? void 0 : n[r]) || {}).concat(Object.keys(((o = e.att) == null ? void 0 : o[r]) || {})).sort( (a, c) => a.localeCompare(c)).forEach(a => {
            var c, l;
            i.att[r] = sd(td({}, i.att[r]), {
                [a]: ((c = s.att[r]) == null ? void 0 : c[a]) || ((l = e.att[r]) == null ? void 0 : l[a])
            })
        }
        )
    }
    ),
    i
}
function pd(s="", e) {
    ls(e);
    let t = "I further authorize the stated URI to perform the following actions on my behalf: ";
    if (s.includes(t))
        return s;
    let i = []
      , r = 0;
    Object.keys(e.att).forEach(a => {
        let c = Object.keys(e.att[a]).map(d => ({
            ability: d.split("/")[0],
            action: d.split("/")[1]
        }));
        c.sort( (d, u) => d.action.localeCompare(u.action));
        let l = {};
        c.forEach(d => {
            l[d.ability] || (l[d.ability] = []),
            l[d.ability].push(d.action)
        }
        );
        let p = Object.keys(l).map(d => (r++,
        `(${r}) '${d}': '${l[d].join("', '")}' for '${a}'.`));
        i.push(p.join(", ").replace(".,", "."))
    }
    );
    let n = i.join(" ")
      , o = `${t}${n}`;
    return `${s ? s + " " : ""}${o}`
}
function Sn(s) {
    var e;
    let t = ui(s);
    ls(t);
    let i = (e = t.att) == null ? void 0 : e.eip155;
    return i ? Object.keys(i).map(r => r.split("/")[1]) : []
}
function Tn(s) {
    let e = ui(s);
    ls(e);
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
function Ei(s) {
    if (!s)
        return;
    let e = s?.[s.length - 1];
    return ld(e) ? e : void 0
}
function Yr(s) {
    if (!Number.isSafeInteger(s) || s < 0)
        throw new Error("positive integer expected, got " + s)
}
function qc(s) {
    return s instanceof Uint8Array || ArrayBuffer.isView(s) && s.constructor.name === "Uint8Array"
}
function Ge(s, ...e) {
    if (!qc(s))
        throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(s.length))
        throw new Error("Uint8Array expected of length " + e + ", got length=" + s.length)
}
function Wa(s, e=!0) {
    if (s.destroyed)
        throw new Error("Hash instance has been destroyed");
    if (e && s.finished)
        throw new Error("Hash#digest() has already been called")
}
function dd(s, e) {
    Ge(s);
    let t = e.outputLen;
    if (s.length < t)
        throw new Error("digestInto() expects output buffer of length at least " + t)
}
function Ga(s) {
    if (typeof s != "boolean")
        throw new Error(`boolean expected, not ${s}`)
}
var Wt = s => new Uint32Array(s.buffer,s.byteOffset,Math.floor(s.byteLength / 4))
  , ud = s => new DataView(s.buffer,s.byteOffset,s.byteLength)
  , gd = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!gd)
    throw new Error("Non little-endian hardware is not supported");
function fd(s) {
    if (typeof s != "string")
        throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(s))
}
function an(s) {
    if (typeof s == "string")
        s = fd(s);
    else if (qc(s))
        s = cn(s);
    else
        throw new Error("Uint8Array expected, got " + typeof s);
    return s
}
function md(s, e) {
    if (e == null || typeof e != "object")
        throw new Error("options must be defined");
    return Object.assign(s, e)
}
function yd(s, e) {
    if (s.length !== e.length)
        return !1;
    let t = 0;
    for (let i = 0; i < s.length; i++)
        t |= s[i] ^ e[i];
    return t === 0
}
var wd = (s, e) => {
    function t(i, ...r) {
        if (Ge(i),
        s.nonceLength !== void 0) {
            let l = r[0];
            if (!l)
                throw new Error("nonce / iv required");
            s.varSizeNonce ? Ge(l) : Ge(l, s.nonceLength)
        }
        let n = s.tagLength;
        n && r[1] !== void 0 && Ge(r[1]);
        let o = e(i, ...r)
          , a = (l, p) => {
            if (p !== void 0) {
                if (l !== 2)
                    throw new Error("cipher output not supported");
                Ge(p)
            }
        }
          , c = !1;
        return {
            encrypt(l, p) {
                if (c)
                    throw new Error("cannot encrypt() twice with same key + nonce");
                return c = !0,
                Ge(l),
                a(o.encrypt.length, p),
                o.encrypt(l, p)
            },
            decrypt(l, p) {
                if (Ge(l),
                n && l.length < n)
                    throw new Error("invalid ciphertext length: smaller than tagLength=" + n);
                return a(o.decrypt.length, p),
                o.decrypt(l, p)
            }
        }
    }
    return Object.assign(t, s),
    t
}
;
function Ya(s, e, t=!0) {
    if (e === void 0)
        return new Uint8Array(s);
    if (e.length !== s)
        throw new Error("invalid output length, expected " + s + ", got: " + e.length);
    if (t && !vd(e))
        throw new Error("invalid output, must be aligned");
    return e
}
function Ja(s, e, t, i) {
    if (typeof s.setBigUint64 == "function")
        return s.setBigUint64(e, t, i);
    let r = BigInt(32)
      , n = BigInt(4294967295)
      , o = Number(t >> r & n)
      , a = Number(t & n)
      , c = i ? 4 : 0
      , l = i ? 0 : 4;
    s.setUint32(e + c, o, i),
    s.setUint32(e + l, a, i)
}
function vd(s) {
    return s.byteOffset % 4 === 0
}
function cn(s) {
    return Uint8Array.from(s)
}
function Ns(...s) {
    for (let e = 0; e < s.length; e++)
        s[e].fill(0)
}
var jc = s => Uint8Array.from(s.split("").map(e => e.charCodeAt(0)))
  , bd = jc("expand 16-byte k")
  , Ed = jc("expand 32-byte k")
  , Id = Wt(bd)
  , Cd = Wt(Ed);
function J(s, e) {
    return s << e | s >>> 32 - e
}
function ln(s) {
    return s.byteOffset % 4 === 0
}
var sr = 64
  , _d = 16
  , $c = 2 ** 32 - 1
  , Xa = new Uint32Array;
function Pd(s, e, t, i, r, n, o, a) {
    let c = r.length
      , l = new Uint8Array(sr)
      , p = Wt(l)
      , d = ln(r) && ln(n)
      , u = d ? Wt(r) : Xa
      , m = d ? Wt(n) : Xa;
    for (let f = 0; f < c; o++) {
        if (s(e, t, i, p, o, a),
        o >= $c)
            throw new Error("arx: counter overflow");
        let y = Math.min(sr, c - f);
        if (d && y === sr) {
            let g = f / 4;
            if (f % 4 !== 0)
                throw new Error("arx: invalid block position");
            for (let v = 0, w; v < _d; v++)
                w = g + v,
                m[w] = u[w] ^ p[v];
            f += sr;
            continue
        }
        for (let g = 0, v; g < y; g++)
            v = f + g,
            n[v] = r[v] ^ l[g];
        f += y
    }
}
function Ad(s, e) {
    let {allowShortKeys: t, extendNonceFn: i, counterLength: r, counterRight: n, rounds: o} = md({
        allowShortKeys: !1,
        counterLength: 8,
        counterRight: !1,
        rounds: 20
    }, e);
    if (typeof s != "function")
        throw new Error("core must be a function");
    return Yr(r),
    Yr(o),
    Ga(n),
    Ga(t),
    (a, c, l, p, d=0) => {
        Ge(a),
        Ge(c),
        Ge(l);
        let u = l.length;
        if (p === void 0 && (p = new Uint8Array(u)),
        Ge(p),
        Yr(d),
        d < 0 || d >= $c)
            throw new Error("arx: counter overflow");
        if (p.length < u)
            throw new Error(`arx: output (${p.length}) is shorter than data (${u})`);
        let m = [], f = a.length, y, g;
        if (f === 32)
            m.push(y = cn(a)),
            g = Cd;
        else if (f === 16 && t)
            y = new Uint8Array(32),
            y.set(a),
            y.set(a, 16),
            g = Id,
            m.push(y);
        else
            throw new Error(`arx: invalid 32-byte key, got length=${f}`);
        ln(c) || m.push(c = cn(c));
        let v = Wt(y);
        if (i) {
            if (c.length !== 24)
                throw new Error("arx: extended nonce must be 24 bytes");
            i(g, v, Wt(c.subarray(0, 16)), v),
            c = c.subarray(16)
        }
        let w = 16 - r;
        if (w !== c.length)
            throw new Error(`arx: nonce must be ${w} or 16 bytes`);
        if (w !== 12) {
            let P = new Uint8Array(12);
            P.set(c, n ? 0 : 12 - c.length),
            c = P,
            m.push(c)
        }
        let b = Wt(c);
        return Pd(s, g, v, b, l, p, d, o),
        Ns(...m),
        p
    }
}
var Ne = (s, e) => s[e++] & 255 | (s[e++] & 255) << 8
  , hn = class {
    constructor(e) {
        this.blockLen = 16,
        this.outputLen = 16,
        this.buffer = new Uint8Array(16),
        this.r = new Uint16Array(10),
        this.h = new Uint16Array(10),
        this.pad = new Uint16Array(8),
        this.pos = 0,
        this.finished = !1,
        e = an(e),
        Ge(e, 32);
        let t = Ne(e, 0)
          , i = Ne(e, 2)
          , r = Ne(e, 4)
          , n = Ne(e, 6)
          , o = Ne(e, 8)
          , a = Ne(e, 10)
          , c = Ne(e, 12)
          , l = Ne(e, 14);
        this.r[0] = t & 8191,
        this.r[1] = (t >>> 13 | i << 3) & 8191,
        this.r[2] = (i >>> 10 | r << 6) & 7939,
        this.r[3] = (r >>> 7 | n << 9) & 8191,
        this.r[4] = (n >>> 4 | o << 12) & 255,
        this.r[5] = o >>> 1 & 8190,
        this.r[6] = (o >>> 14 | a << 2) & 8191,
        this.r[7] = (a >>> 11 | c << 5) & 8065,
        this.r[8] = (c >>> 8 | l << 8) & 8191,
        this.r[9] = l >>> 5 & 127;
        for (let p = 0; p < 8; p++)
            this.pad[p] = Ne(e, 16 + 2 * p)
    }
    process(e, t, i=!1) {
        let r = i ? 0 : 2048
          , {h: n, r: o} = this
          , a = o[0]
          , c = o[1]
          , l = o[2]
          , p = o[3]
          , d = o[4]
          , u = o[5]
          , m = o[6]
          , f = o[7]
          , y = o[8]
          , g = o[9]
          , v = Ne(e, t + 0)
          , w = Ne(e, t + 2)
          , b = Ne(e, t + 4)
          , P = Ne(e, t + 6)
          , R = Ne(e, t + 8)
          , A = Ne(e, t + 10)
          , S = Ne(e, t + 12)
          , k = Ne(e, t + 14)
          , E = n[0] + (v & 8191)
          , B = n[1] + ((v >>> 13 | w << 3) & 8191)
          , D = n[2] + ((w >>> 10 | b << 6) & 8191)
          , L = n[3] + ((b >>> 7 | P << 9) & 8191)
          , V = n[4] + ((P >>> 4 | R << 12) & 8191)
          , C = n[5] + (R >>> 1 & 8191)
          , O = n[6] + ((R >>> 14 | A << 2) & 8191)
          , T = n[7] + ((A >>> 11 | S << 5) & 8191)
          , U = n[8] + ((S >>> 8 | k << 8) & 8191)
          , F = n[9] + (k >>> 5 | r)
          , N = 0
          , M = N + E * a + B * (5 * g) + D * (5 * y) + L * (5 * f) + V * (5 * m);
        N = M >>> 13,
        M &= 8191,
        M += C * (5 * u) + O * (5 * d) + T * (5 * p) + U * (5 * l) + F * (5 * c),
        N += M >>> 13,
        M &= 8191;
        let H = N + E * c + B * a + D * (5 * g) + L * (5 * y) + V * (5 * f);
        N = H >>> 13,
        H &= 8191,
        H += C * (5 * m) + O * (5 * u) + T * (5 * d) + U * (5 * p) + F * (5 * l),
        N += H >>> 13,
        H &= 8191;
        let z = N + E * l + B * c + D * a + L * (5 * g) + V * (5 * y);
        N = z >>> 13,
        z &= 8191,
        z += C * (5 * f) + O * (5 * m) + T * (5 * u) + U * (5 * d) + F * (5 * p),
        N += z >>> 13,
        z &= 8191;
        let ne = N + E * p + B * l + D * c + L * a + V * (5 * g);
        N = ne >>> 13,
        ne &= 8191,
        ne += C * (5 * y) + O * (5 * f) + T * (5 * m) + U * (5 * u) + F * (5 * d),
        N += ne >>> 13,
        ne &= 8191;
        let te = N + E * d + B * p + D * l + L * c + V * a;
        N = te >>> 13,
        te &= 8191,
        te += C * (5 * g) + O * (5 * y) + T * (5 * f) + U * (5 * m) + F * (5 * u),
        N += te >>> 13,
        te &= 8191;
        let ue = N + E * u + B * d + D * p + L * l + V * c;
        N = ue >>> 13,
        ue &= 8191,
        ue += C * a + O * (5 * g) + T * (5 * y) + U * (5 * f) + F * (5 * m),
        N += ue >>> 13,
        ue &= 8191;
        let ve = N + E * m + B * u + D * d + L * p + V * l;
        N = ve >>> 13,
        ve &= 8191,
        ve += C * c + O * a + T * (5 * g) + U * (5 * y) + F * (5 * f),
        N += ve >>> 13,
        ve &= 8191;
        let Re = N + E * f + B * m + D * u + L * d + V * p;
        N = Re >>> 13,
        Re &= 8191,
        Re += C * l + O * c + T * a + U * (5 * g) + F * (5 * y),
        N += Re >>> 13,
        Re &= 8191;
        let fe = N + E * y + B * f + D * m + L * u + V * d;
        N = fe >>> 13,
        fe &= 8191,
        fe += C * p + O * l + T * c + U * a + F * (5 * g),
        N += fe >>> 13,
        fe &= 8191;
        let me = N + E * g + B * y + D * f + L * m + V * u;
        N = me >>> 13,
        me &= 8191,
        me += C * d + O * p + T * l + U * c + F * a,
        N += me >>> 13,
        me &= 8191,
        N = (N << 2) + N | 0,
        N = N + M | 0,
        M = N & 8191,
        N = N >>> 13,
        H += N,
        n[0] = M,
        n[1] = H,
        n[2] = z,
        n[3] = ne,
        n[4] = te,
        n[5] = ue,
        n[6] = ve,
        n[7] = Re,
        n[8] = fe,
        n[9] = me
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
        Ns(i)
    }
    update(e) {
        Wa(this);
        let {buffer: t, blockLen: i} = this;
        e = an(e);
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
        Ns(this.h, this.r, this.buffer, this.pad)
    }
    digestInto(e) {
        Wa(this),
        dd(e, this),
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
function Nd(s) {
    let e = (i, r) => s(r).update(an(i)).digest()
      , t = s(new Uint8Array(32));
    return e.outputLen = t.outputLen,
    e.blockLen = t.blockLen,
    e.create = i => s(i),
    e
}
var Sd = Nd(s => new hn(s));
function Td(s, e, t, i, r, n=20) {
    let o = s[0]
      , a = s[1]
      , c = s[2]
      , l = s[3]
      , p = e[0]
      , d = e[1]
      , u = e[2]
      , m = e[3]
      , f = e[4]
      , y = e[5]
      , g = e[6]
      , v = e[7]
      , w = r
      , b = t[0]
      , P = t[1]
      , R = t[2]
      , A = o
      , S = a
      , k = c
      , E = l
      , B = p
      , D = d
      , L = u
      , V = m
      , C = f
      , O = y
      , T = g
      , U = v
      , F = w
      , N = b
      , M = P
      , H = R;
    for (let ne = 0; ne < n; ne += 2)
        A = A + B | 0,
        F = J(F ^ A, 16),
        C = C + F | 0,
        B = J(B ^ C, 12),
        A = A + B | 0,
        F = J(F ^ A, 8),
        C = C + F | 0,
        B = J(B ^ C, 7),
        S = S + D | 0,
        N = J(N ^ S, 16),
        O = O + N | 0,
        D = J(D ^ O, 12),
        S = S + D | 0,
        N = J(N ^ S, 8),
        O = O + N | 0,
        D = J(D ^ O, 7),
        k = k + L | 0,
        M = J(M ^ k, 16),
        T = T + M | 0,
        L = J(L ^ T, 12),
        k = k + L | 0,
        M = J(M ^ k, 8),
        T = T + M | 0,
        L = J(L ^ T, 7),
        E = E + V | 0,
        H = J(H ^ E, 16),
        U = U + H | 0,
        V = J(V ^ U, 12),
        E = E + V | 0,
        H = J(H ^ E, 8),
        U = U + H | 0,
        V = J(V ^ U, 7),
        A = A + D | 0,
        H = J(H ^ A, 16),
        T = T + H | 0,
        D = J(D ^ T, 12),
        A = A + D | 0,
        H = J(H ^ A, 8),
        T = T + H | 0,
        D = J(D ^ T, 7),
        S = S + L | 0,
        F = J(F ^ S, 16),
        U = U + F | 0,
        L = J(L ^ U, 12),
        S = S + L | 0,
        F = J(F ^ S, 8),
        U = U + F | 0,
        L = J(L ^ U, 7),
        k = k + V | 0,
        N = J(N ^ k, 16),
        C = C + N | 0,
        V = J(V ^ C, 12),
        k = k + V | 0,
        N = J(N ^ k, 8),
        C = C + N | 0,
        V = J(V ^ C, 7),
        E = E + B | 0,
        M = J(M ^ E, 16),
        O = O + M | 0,
        B = J(B ^ O, 12),
        E = E + B | 0,
        M = J(M ^ E, 8),
        O = O + M | 0,
        B = J(B ^ O, 7);
    let z = 0;
    i[z++] = o + A | 0,
    i[z++] = a + S | 0,
    i[z++] = c + k | 0,
    i[z++] = l + E | 0,
    i[z++] = p + B | 0,
    i[z++] = d + D | 0,
    i[z++] = u + L | 0,
    i[z++] = m + V | 0,
    i[z++] = f + C | 0,
    i[z++] = y + O | 0,
    i[z++] = g + T | 0,
    i[z++] = v + U | 0,
    i[z++] = w + F | 0,
    i[z++] = b + N | 0,
    i[z++] = P + M | 0,
    i[z++] = R + H | 0
}
var Od = Ad(Td, {
    counterRight: !1,
    counterLength: 4,
    allowShortKeys: !1
})
  , Rd = new Uint8Array(16)
  , Za = (s, e) => {
    s.update(e);
    let t = e.length % 16;
    t && s.update(Rd.subarray(t))
}
  , xd = new Uint8Array(32);
function Qa(s, e, t, i, r) {
    let n = s(e, t, xd)
      , o = Sd.create(n);
    r && Za(o, r),
    Za(o, i);
    let a = new Uint8Array(16)
      , c = ud(a);
    Ja(c, 0, BigInt(r ? r.length : 0), !0),
    Ja(c, 8, BigInt(i.length), !0),
    o.update(a);
    let l = o.digest();
    return Ns(n, a),
    l
}
var kd = s => (e, t, i) => ({
    encrypt(r, n) {
        let o = r.length;
        n = Ya(o + 16, n, !1),
        n.set(r);
        let a = n.subarray(0, -16);
        s(e, t, a, a, 1);
        let c = Qa(s, e, t, a, i);
        return n.set(c, o),
        Ns(c),
        n
    },
    decrypt(r, n) {
        n = Ya(r.length - 16, n, !1);
        let o = r.subarray(0, -16)
          , a = r.subarray(-16)
          , c = Qa(s, e, t, o, i);
        if (!yd(a, c))
            throw new Error("invalid tag");
        return n.set(r.subarray(0, -16)),
        s(e, t, n, n, 1),
        Ns(c),
        n
    }
})
  , Bc = wd({
    blockSize: 64,
    nonceLength: 12,
    tagLength: 16
}, kd(Od))
  , rr = class extends di {
    constructor(e, t) {
        super(),
        this.finished = !1,
        this.destroyed = !1,
        _n(e);
        let i = As(t);
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
        return Ps(this),
        this.iHash.update(e),
        this
    }
    digestInto(e) {
        Ps(this),
        vi(e, this.outputLen),
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
  , hr = (s, e, t) => new rr(s,e).update(t).digest();
hr.create = (s, e) => new rr(s,e);
function Ud(s, e, t) {
    return _n(s),
    t === void 0 && (t = new Uint8Array(s.outputLen)),
    hr(s, As(t), As(e))
}
var Jr = new Uint8Array([0])
  , ec = new Uint8Array;
function Dd(s, e, t, i=32) {
    if (_n(s),
    pi(i),
    i > 255 * s.outputLen)
        throw new Error("Length should be <= 255*HashLen");
    let r = Math.ceil(i / s.outputLen);
    t === void 0 && (t = ec);
    let n = new Uint8Array(r * s.outputLen)
      , o = hr.create(s, e)
      , a = o._cloneInto()
      , c = new Uint8Array(o.outputLen);
    for (let l = 0; l < r; l++)
        Jr[0] = l + 1,
        a.update(l === 0 ? ec : c).update(t).update(Jr).digestInto(c),
        n.set(c, s.outputLen * l),
        o._cloneInto(a);
    return o.destroy(),
    a.destroy(),
    c.fill(0),
    Jr.fill(0),
    n.slice(0, i)
}
var Fd = (s, e, t, i, r) => Dd(s, Ud(s, e, t), i, r);
function Ld(s, e, t, i) {
    if (typeof s.setBigUint64 == "function")
        return s.setBigUint64(e, t, i);
    let r = BigInt(32)
      , n = BigInt(4294967295)
      , o = Number(t >> r & n)
      , a = Number(t & n)
      , c = i ? 4 : 0
      , l = i ? 0 : 4;
    s.setUint32(e + c, o, i),
    s.setUint32(e + l, a, i)
}
function qd(s, e, t) {
    return s & e ^ ~s & t
}
function jd(s, e, t) {
    return s & e ^ s & t ^ e & t
}
var pn = class extends di {
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
        this.view = Gr(this.buffer)
    }
    update(e) {
        Ps(this);
        let {view: t, buffer: i, blockLen: r} = this;
        e = As(e);
        let n = e.length;
        for (let o = 0; o < n; ) {
            let a = Math.min(r - this.pos, n - o);
            if (a === r) {
                let c = Gr(e);
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
        Ps(this),
        Sc(e, this),
        this.finished = !0;
        let {buffer: t, view: i, blockLen: r, isLE: n} = this
          , {pos: o} = this;
        t[o++] = 128,
        this.buffer.subarray(o).fill(0),
        this.padOffset > r - o && (this.process(i, 0),
        o = 0);
        for (let d = o; d < r; d++)
            t[d] = 0;
        Ld(i, r - 8, BigInt(this.length * 8), n),
        this.process(i, 0);
        let a = Gr(e)
          , c = this.outputLen;
        if (c % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
        let l = c / 4
          , p = this.get();
        if (l > p.length)
            throw new Error("_sha2: outputLen bigger than state");
        for (let d = 0; d < l; d++)
            a.setUint32(4 * d, p[d], n)
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
  , $d = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298])
  , zt = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225])
  , Kt = new Uint32Array(64)
  , dn = class extends pn {
    constructor() {
        super(64, 32, 8, !1),
        this.A = zt[0] | 0,
        this.B = zt[1] | 0,
        this.C = zt[2] | 0,
        this.D = zt[3] | 0,
        this.E = zt[4] | 0,
        this.F = zt[5] | 0,
        this.G = zt[6] | 0,
        this.H = zt[7] | 0
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
        for (let d = 0; d < 16; d++,
        t += 4)
            Kt[d] = e.getUint32(t, !1);
        for (let d = 16; d < 64; d++) {
            let u = Kt[d - 15]
              , m = Kt[d - 2]
              , f = wt(u, 7) ^ wt(u, 18) ^ u >>> 3
              , y = wt(m, 17) ^ wt(m, 19) ^ m >>> 10;
            Kt[d] = y + Kt[d - 7] + f + Kt[d - 16] | 0
        }
        let {A: i, B: r, C: n, D: o, E: a, F: c, G: l, H: p} = this;
        for (let d = 0; d < 64; d++) {
            let u = wt(a, 6) ^ wt(a, 11) ^ wt(a, 25)
              , m = p + u + qd(a, c, l) + $d[d] + Kt[d] | 0
              , f = (wt(i, 2) ^ wt(i, 13) ^ wt(i, 22)) + jd(i, r, n) | 0;
            p = l,
            l = c,
            c = a,
            a = o + m | 0,
            o = n,
            n = r,
            r = i,
            i = m + f | 0
        }
        i = i + this.A | 0,
        r = r + this.B | 0,
        n = n + this.C | 0,
        o = o + this.D | 0,
        a = a + this.E | 0,
        c = c + this.F | 0,
        l = l + this.G | 0,
        p = p + this.H | 0,
        this.set(i, r, n, o, a, c, l, p)
    }
    roundClean() {
        Kt.fill(0)
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0),
        this.buffer.fill(0)
    }
}
  , Ii = Tc( () => new dn);
var pr = BigInt(0)
  , dr = BigInt(1)
  , Bd = BigInt(2);
function hs(s) {
    return s instanceof Uint8Array || ArrayBuffer.isView(s) && s.constructor.name === "Uint8Array"
}
function Ci(s) {
    if (!hs(s))
        throw new Error("Uint8Array expected")
}
function Ss(s, e) {
    if (typeof e != "boolean")
        throw new Error(s + " boolean expected, got " + e)
}
var Md = Array.from({
    length: 256
}, (s, e) => e.toString(16).padStart(2, "0"));
function Ts(s) {
    Ci(s);
    let e = "";
    for (let t = 0; t < s.length; t++)
        e += Md[s[t]];
    return e
}
function _s(s) {
    let e = s.toString(16);
    return e.length & 1 ? "0" + e : e
}
function On(s) {
    if (typeof s != "string")
        throw new Error("hex string expected, got " + typeof s);
    return s === "" ? pr : BigInt("0x" + s)
}
var Rt = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function tc(s) {
    if (s >= Rt._0 && s <= Rt._9)
        return s - Rt._0;
    if (s >= Rt.A && s <= Rt.F)
        return s - (Rt.A - 10);
    if (s >= Rt.a && s <= Rt.f)
        return s - (Rt.a - 10)
}
function Os(s) {
    if (typeof s != "string")
        throw new Error("hex string expected, got " + typeof s);
    let e = s.length
      , t = e / 2;
    if (e % 2)
        throw new Error("hex string expected, got unpadded hex of length " + e);
    let i = new Uint8Array(t);
    for (let r = 0, n = 0; r < t; r++,
    n += 2) {
        let o = tc(s.charCodeAt(n))
          , a = tc(s.charCodeAt(n + 1));
        if (o === void 0 || a === void 0) {
            let c = s[n] + s[n + 1];
            throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + n)
        }
        i[r] = o * 16 + a
    }
    return i
}
function cs(s) {
    return On(Ts(s))
}
function gi(s) {
    return Ci(s),
    On(Ts(Uint8Array.from(s).reverse()))
}
function Rs(s, e) {
    return Os(s.toString(16).padStart(e * 2, "0"))
}
function ur(s, e) {
    return Rs(s, e).reverse()
}
function Vd(s) {
    return Os(_s(s))
}
function We(s, e, t) {
    let i;
    if (typeof e == "string")
        try {
            i = Os(e)
        } catch (n) {
            throw new Error(s + " must be hex string or Uint8Array, cause: " + n)
        }
    else if (hs(e))
        i = Uint8Array.from(e);
    else
        throw new Error(s + " must be hex string or Uint8Array");
    let r = i.length;
    if (typeof t == "number" && r !== t)
        throw new Error(s + " of length " + t + " expected, got " + r);
    return i
}
function fi(...s) {
    let e = 0;
    for (let i = 0; i < s.length; i++) {
        let r = s[i];
        Ci(r),
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
function Hd(s, e) {
    if (s.length !== e.length)
        return !1;
    let t = 0;
    for (let i = 0; i < s.length; i++)
        t |= s[i] ^ e[i];
    return t === 0
}
function zd(s) {
    if (typeof s != "string")
        throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(s))
}
var Xr = s => typeof s == "bigint" && pr <= s;
function gr(s, e, t) {
    return Xr(s) && Xr(e) && Xr(t) && e <= s && s < t
}
function Ut(s, e, t, i) {
    if (!gr(e, t, i))
        throw new Error("expected valid " + s + ": " + t + " <= n < " + i + ", got " + e)
}
function Mc(s) {
    let e;
    for (e = 0; s > pr; s >>= dr,
    e += 1)
        ;
    return e
}
function Kd(s, e) {
    return s >> BigInt(e) & dr
}
function Wd(s, e, t) {
    return s | (t ? dr : pr) << BigInt(e)
}
var Rn = s => (Bd << BigInt(s - 1)) - dr
  , Zr = s => new Uint8Array(s)
  , sc = s => Uint8Array.from(s);
function Vc(s, e, t) {
    if (typeof s != "number" || s < 2)
        throw new Error("hashLen must be a number");
    if (typeof e != "number" || e < 2)
        throw new Error("qByteLen must be a number");
    if (typeof t != "function")
        throw new Error("hmacFn must be a function");
    let i = Zr(s)
      , r = Zr(s)
      , n = 0
      , o = () => {
        i.fill(1),
        r.fill(0),
        n = 0
    }
      , a = (...p) => t(r, i, ...p)
      , c = (p=Zr()) => {
        r = a(sc([0]), p),
        i = a(),
        p.length !== 0 && (r = a(sc([1]), p),
        i = a())
    }
      , l = () => {
        if (n++ >= 1e3)
            throw new Error("drbg: tried 1000 values");
        let p = 0
          , d = [];
        for (; p < e; ) {
            i = a();
            let u = i.slice();
            d.push(u),
            p += i.length
        }
        return fi(...d)
    }
    ;
    return (p, d) => {
        o(),
        c(p);
        let u;
        for (; !(u = d(l())); )
            c();
        return o(),
        u
    }
}
var Gd = {
    bigint: s => typeof s == "bigint",
    function: s => typeof s == "function",
    boolean: s => typeof s == "boolean",
    string: s => typeof s == "string",
    stringOrUint8Array: s => typeof s == "string" || hs(s),
    isSafeInteger: s => Number.isSafeInteger(s),
    array: s => Array.isArray(s),
    field: (s, e) => e.Fp.isValid(s),
    hash: s => typeof s == "function" && Number.isSafeInteger(s.outputLen)
};
function ks(s, e, t={}) {
    let i = (r, n, o) => {
        let a = Gd[n];
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
var Yd = () => {
    throw new Error("not implemented")
}
;
function un(s) {
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
var Jd = Object.freeze({
    __proto__: null,
    isBytes: hs,
    abytes: Ci,
    abool: Ss,
    bytesToHex: Ts,
    numberToHexUnpadded: _s,
    hexToNumber: On,
    hexToBytes: Os,
    bytesToNumberBE: cs,
    bytesToNumberLE: gi,
    numberToBytesBE: Rs,
    numberToBytesLE: ur,
    numberToVarBytesBE: Vd,
    ensureBytes: We,
    concatBytes: fi,
    equalBytes: Hd,
    utf8ToBytes: zd,
    inRange: gr,
    aInRange: Ut,
    bitLen: Mc,
    bitGet: Kd,
    bitSet: Wd,
    bitMask: Rn,
    createHmacDrbg: Vc,
    validateObject: ks,
    notImplemented: Yd,
    memoized: un
})
  , Ie = BigInt(0)
  , pe = BigInt(1)
  , os = BigInt(2)
  , Xd = BigInt(3)
  , gn = BigInt(4)
  , ic = BigInt(5)
  , rc = BigInt(8);
function $e(s, e) {
    let t = s % e;
    return t >= Ie ? t : e + t
}
function Hc(s, e, t) {
    if (e < Ie)
        throw new Error("invalid exponent, negatives unsupported");
    if (t <= Ie)
        throw new Error("invalid modulus");
    if (t === pe)
        return Ie;
    let i = pe;
    for (; e > Ie; )
        e & pe && (i = i * s % t),
        s = s * s % t,
        e >>= pe;
    return i
}
function at(s, e, t) {
    let i = s;
    for (; e-- > Ie; )
        i *= i,
        i %= t;
    return i
}
function fn(s, e) {
    if (s === Ie)
        throw new Error("invert: expected non-zero number");
    if (e <= Ie)
        throw new Error("invert: expected positive modulus, got " + e);
    let t = $e(s, e)
      , i = e
      , r = Ie
      , n = pe;
    for (; t !== Ie; ) {
        let o = i / t
          , a = i % t
          , c = r - n * o;
        i = t,
        t = a,
        r = n,
        n = c
    }
    if (i !== pe)
        throw new Error("invert: does not exist");
    return $e(r, e)
}
function Zd(s) {
    let e = (s - pe) / os, t, i, r;
    for (t = s - pe,
    i = 0; t % os === Ie; t /= os,
    i++)
        ;
    for (r = os; r < s && Hc(r, e, s) !== s - pe; r++)
        if (r > 1e3)
            throw new Error("Cannot find square root: likely non-prime P");
    if (i === 1) {
        let o = (s + pe) / gn;
        return function(a, c) {
            let l = a.pow(c, o);
            if (!a.eql(a.sqr(l), c))
                throw new Error("Cannot find square root");
            return l
        }
    }
    let n = (t + pe) / os;
    return function(o, a) {
        if (o.pow(a, e) === o.neg(o.ONE))
            throw new Error("Cannot find square root");
        let c = i
          , l = o.pow(o.mul(o.ONE, r), t)
          , p = o.pow(a, n)
          , d = o.pow(a, t);
        for (; !o.eql(d, o.ONE); ) {
            if (o.eql(d, o.ZERO))
                return o.ZERO;
            let u = 1;
            for (let f = o.sqr(d); u < c && !o.eql(f, o.ONE); u++)
                f = o.sqr(f);
            let m = o.pow(l, pe << BigInt(c - u - 1));
            l = o.sqr(m),
            p = o.mul(p, m),
            d = o.mul(d, l),
            c = u
        }
        return p
    }
}
function Qd(s) {
    if (s % gn === Xd) {
        let e = (s + pe) / gn;
        return function(t, i) {
            let r = t.pow(i, e);
            if (!t.eql(t.sqr(r), i))
                throw new Error("Cannot find square root");
            return r
        }
    }
    if (s % rc === ic) {
        let e = (s - ic) / rc;
        return function(t, i) {
            let r = t.mul(i, os)
              , n = t.pow(r, e)
              , o = t.mul(i, n)
              , a = t.mul(t.mul(o, os), n)
              , c = t.mul(o, t.sub(a, t.ONE));
            if (!t.eql(t.sqr(c), i))
                throw new Error("Cannot find square root");
            return c
        }
    }
    return Zd(s)
}
var eu = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function tu(s) {
    let e = {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "isSafeInteger",
        BITS: "isSafeInteger"
    }
      , t = eu.reduce( (i, r) => (i[r] = "function",
    i), e);
    return ks(s, t)
}
function su(s, e, t) {
    if (t < Ie)
        throw new Error("invalid exponent, negatives unsupported");
    if (t === Ie)
        return s.ONE;
    if (t === pe)
        return e;
    let i = s.ONE
      , r = e;
    for (; t > Ie; )
        t & pe && (i = s.mul(i, r)),
        r = s.sqr(r),
        t >>= pe;
    return i
}
function iu(s, e) {
    let t = new Array(e.length)
      , i = e.reduce( (n, o, a) => s.is0(o) ? n : (t[a] = n,
    s.mul(n, o)), s.ONE)
      , r = s.inv(i);
    return e.reduceRight( (n, o, a) => s.is0(o) ? n : (t[a] = s.mul(n, t[a]),
    s.mul(n, o)), r),
    t
}
function zc(s, e) {
    let t = e !== void 0 ? e : s.toString(2).length
      , i = Math.ceil(t / 8);
    return {
        nBitLength: t,
        nByteLength: i
    }
}
function Kc(s, e, t=!1, i={}) {
    if (s <= Ie)
        throw new Error("invalid field: expected ORDER > 0, got " + s);
    let {nBitLength: r, nByteLength: n} = zc(s, e);
    if (n > 2048)
        throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let o, a = Object.freeze({
        ORDER: s,
        isLE: t,
        BITS: r,
        BYTES: n,
        MASK: Rn(r),
        ZERO: Ie,
        ONE: pe,
        create: c => $e(c, s),
        isValid: c => {
            if (typeof c != "bigint")
                throw new Error("invalid field element: expected bigint, got " + typeof c);
            return Ie <= c && c < s
        }
        ,
        is0: c => c === Ie,
        isOdd: c => (c & pe) === pe,
        neg: c => $e(-c, s),
        eql: (c, l) => c === l,
        sqr: c => $e(c * c, s),
        add: (c, l) => $e(c + l, s),
        sub: (c, l) => $e(c - l, s),
        mul: (c, l) => $e(c * l, s),
        pow: (c, l) => su(a, c, l),
        div: (c, l) => $e(c * fn(l, s), s),
        sqrN: c => c * c,
        addN: (c, l) => c + l,
        subN: (c, l) => c - l,
        mulN: (c, l) => c * l,
        inv: c => fn(c, s),
        sqrt: i.sqrt || (c => (o || (o = Qd(s)),
        o(a, c))),
        invertBatch: c => iu(a, c),
        cmov: (c, l, p) => p ? l : c,
        toBytes: c => t ? ur(c, n) : Rs(c, n),
        fromBytes: c => {
            if (c.length !== n)
                throw new Error("Field.fromBytes: expected " + n + " bytes, got " + c.length);
            return t ? gi(c) : cs(c)
        }
    });
    return Object.freeze(a)
}
function Wc(s) {
    if (typeof s != "bigint")
        throw new Error("field order must be bigint");
    let e = s.toString(2).length;
    return Math.ceil(e / 8)
}
function Gc(s) {
    let e = Wc(s);
    return e + Math.ceil(e / 2)
}
function ru(s, e, t=!1) {
    let i = s.length
      , r = Wc(e)
      , n = Gc(e);
    if (i < 16 || i < n || i > 1024)
        throw new Error("expected " + n + "-1024 bytes of input, got " + i);
    let o = t ? gi(s) : cs(s)
      , a = $e(o, e - pe) + pe;
    return t ? ur(a, r) : Rs(a, r)
}
var nc = BigInt(0)
  , ir = BigInt(1);
function Qr(s, e) {
    let t = e.negate();
    return s ? t : e
}
function Yc(s, e) {
    if (!Number.isSafeInteger(s) || s <= 0 || s > e)
        throw new Error("invalid window size, expected [1.." + e + "], got W=" + s)
}
function en(s, e) {
    Yc(s, e);
    let t = Math.ceil(e / s) + 1
      , i = 2 ** (s - 1);
    return {
        windows: t,
        windowSize: i
    }
}
function nu(s, e) {
    if (!Array.isArray(s))
        throw new Error("array expected");
    s.forEach( (t, i) => {
        if (!(t instanceof e))
            throw new Error("invalid point at index " + i)
    }
    )
}
function ou(s, e) {
    if (!Array.isArray(s))
        throw new Error("array of scalars expected");
    s.forEach( (t, i) => {
        if (!e.isValid(t))
            throw new Error("invalid scalar at index " + i)
    }
    )
}
var tn = new WeakMap
  , Jc = new WeakMap;
function sn(s) {
    return Jc.get(s) || 1
}
function au(s, e) {
    return {
        constTimeNegate: Qr,
        hasPrecomputes(t) {
            return sn(t) !== 1
        },
        unsafeLadder(t, i, r=s.ZERO) {
            let n = t;
            for (; i > nc; )
                i & ir && (r = r.add(n)),
                n = n.double(),
                i >>= ir;
            return r
        },
        precomputeWindow(t, i) {
            let {windows: r, windowSize: n} = en(i, e)
              , o = []
              , a = t
              , c = a;
            for (let l = 0; l < r; l++) {
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
            let {windows: n, windowSize: o} = en(t, e)
              , a = s.ZERO
              , c = s.BASE
              , l = BigInt(2 ** t - 1)
              , p = 2 ** t
              , d = BigInt(t);
            for (let u = 0; u < n; u++) {
                let m = u * o
                  , f = Number(r & l);
                r >>= d,
                f > o && (f -= p,
                r += ir);
                let y = m
                  , g = m + Math.abs(f) - 1
                  , v = u % 2 !== 0
                  , w = f < 0;
                f === 0 ? c = c.add(Qr(v, i[y])) : a = a.add(Qr(w, i[g]))
            }
            return {
                p: a,
                f: c
            }
        },
        wNAFUnsafe(t, i, r, n=s.ZERO) {
            let {windows: o, windowSize: a} = en(t, e)
              , c = BigInt(2 ** t - 1)
              , l = 2 ** t
              , p = BigInt(t);
            for (let d = 0; d < o; d++) {
                let u = d * a;
                if (r === nc)
                    break;
                let m = Number(r & c);
                if (r >>= p,
                m > a && (m -= l,
                r += ir),
                m === 0)
                    continue;
                let f = i[u + Math.abs(m) - 1];
                m < 0 && (f = f.negate()),
                n = n.add(f)
            }
            return n
        },
        getPrecomputes(t, i, r) {
            let n = tn.get(i);
            return n || (n = this.precomputeWindow(i, t),
            t !== 1 && tn.set(i, r(n))),
            n
        },
        wNAFCached(t, i, r) {
            let n = sn(t);
            return this.wNAF(n, this.getPrecomputes(n, t, r), i)
        },
        wNAFCachedUnsafe(t, i, r, n) {
            let o = sn(t);
            return o === 1 ? this.unsafeLadder(t, i, n) : this.wNAFUnsafe(o, this.getPrecomputes(o, t, r), i, n)
        },
        setWindowSize(t, i) {
            Yc(i, e),
            Jc.set(t, i),
            tn.delete(t)
        }
    }
}
function cu(s, e, t, i) {
    if (nu(t, s),
    ou(i, e),
    t.length !== i.length)
        throw new Error("arrays of points and scalars must have equal length");
    let r = s.ZERO
      , n = Mc(BigInt(t.length))
      , o = n > 12 ? n - 3 : n > 4 ? n - 2 : n ? 2 : 1
      , a = (1 << o) - 1
      , c = new Array(a + 1).fill(r)
      , l = Math.floor((e.BITS - 1) / o) * o
      , p = r;
    for (let d = l; d >= 0; d -= o) {
        c.fill(r);
        for (let m = 0; m < i.length; m++) {
            let f = i[m]
              , y = Number(f >> BigInt(d) & BigInt(a));
            c[y] = c[y].add(t[m])
        }
        let u = r;
        for (let m = c.length - 1, f = r; m > 0; m--)
            f = f.add(c[m]),
            u = u.add(f);
        if (p = p.add(u),
        d !== 0)
            for (let m = 0; m < o; m++)
                p = p.double()
    }
    return p
}
function Xc(s) {
    return tu(s.Fp),
    ks(s, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
    }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
    }),
    Object.freeze(be(j(j({}, zc(s.n, s.nBitLength)), s), {
        p: s.Fp.ORDER
    }))
}
BigInt(0),
BigInt(1),
BigInt(2),
BigInt(8);
var Cs = BigInt(0)
  , rn = BigInt(1);
function lu(s) {
    return ks(s, {
        a: "bigint"
    }, {
        montgomeryBits: "isSafeInteger",
        nByteLength: "isSafeInteger",
        adjustScalarBytes: "function",
        domain: "function",
        powPminus2: "function",
        Gu: "bigint"
    }),
    Object.freeze(j({}, s))
}
function hu(s) {
    let e = lu(s)
      , {P: t} = e
      , i = w => $e(w, t)
      , r = e.montgomeryBits
      , n = Math.ceil(r / 8)
      , o = e.nByteLength
      , a = e.adjustScalarBytes || (w => w)
      , c = e.powPminus2 || (w => Hc(w, t - BigInt(2), t));
    function l(w, b, P) {
        let R = i(w * (b - P));
        return b = i(b - R),
        P = i(P + R),
        [b, P]
    }
    let p = (e.a - BigInt(2)) / BigInt(4);
    function d(w, b) {
        Ut("u", w, Cs, t),
        Ut("scalar", b, Cs, t);
        let P = b, R = w, A = rn, S = Cs, k = w, E = rn, B = Cs, D;
        for (let V = BigInt(r - 1); V >= Cs; V--) {
            let C = P >> V & rn;
            B ^= C,
            D = l(B, A, k),
            A = D[0],
            k = D[1],
            D = l(B, S, E),
            S = D[0],
            E = D[1],
            B = C;
            let O = A + S
              , T = i(O * O)
              , U = A - S
              , F = i(U * U)
              , N = T - F
              , M = k + E
              , H = k - E
              , z = i(H * O)
              , ne = i(M * U)
              , te = z + ne
              , ue = z - ne;
            k = i(te * te),
            E = i(R * i(ue * ue)),
            A = i(T * F),
            S = i(N * (T + i(p * N)))
        }
        D = l(B, A, k),
        A = D[0],
        k = D[1],
        D = l(B, S, E),
        S = D[0],
        E = D[1];
        let L = c(S);
        return i(A * L)
    }
    function u(w) {
        return ur(i(w), n)
    }
    function m(w) {
        let b = We("u coordinate", w, n);
        return o === 32 && (b[31] &= 127),
        gi(b)
    }
    function f(w) {
        let b = We("scalar", w)
          , P = b.length;
        if (P !== n && P !== o) {
            let R = "" + n + " or " + o;
            throw new Error("invalid scalar, expected " + R + " bytes, got " + P)
        }
        return gi(a(b))
    }
    function y(w, b) {
        let P = m(b)
          , R = f(w)
          , A = d(P, R);
        if (A === Cs)
            throw new Error("invalid private or public key received");
        return u(A)
    }
    let g = u(e.Gu);
    function v(w) {
        return y(w, g)
    }
    return {
        scalarMult: y,
        scalarMultBase: v,
        getSharedSecret: (w, b) => y(w, b),
        getPublicKey: w => v(w),
        utils: {
            randomPrivateKey: () => e.randomBytes(e.nByteLength)
        },
        GuBytes: g
    }
}
var mn = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
BigInt(0);
var pu = BigInt(1)
  , oc = BigInt(2)
  , du = BigInt(3)
  , uu = BigInt(5);
BigInt(8);
function gu(s) {
    let e = BigInt(10)
      , t = BigInt(20)
      , i = BigInt(40)
      , r = BigInt(80)
      , n = mn
      , o = s * s % n * s % n
      , a = at(o, oc, n) * o % n
      , c = at(a, pu, n) * s % n
      , l = at(c, uu, n) * c % n
      , p = at(l, e, n) * l % n
      , d = at(p, t, n) * p % n
      , u = at(d, i, n) * d % n
      , m = at(u, r, n) * u % n
      , f = at(m, r, n) * u % n
      , y = at(f, e, n) * l % n;
    return {
        pow_p_5_8: at(y, oc, n) * s % n,
        b2: o
    }
}
function fu(s) {
    return s[0] &= 248,
    s[31] &= 127,
    s[31] |= 64,
    s
}
var yn = hu({
    P: mn,
    a: BigInt(486662),
    montgomeryBits: 255,
    nByteLength: 32,
    Gu: BigInt(9),
    powPminus2: s => {
        let e = mn
          , {pow_p_5_8: t, b2: i} = gu(s);
        return $e(at(t, du, e) * i, e)
    }
    ,
    adjustScalarBytes: fu,
    randomBytes: xs
});
function ac(s) {
    s.lowS !== void 0 && Ss("lowS", s.lowS),
    s.prehash !== void 0 && Ss("prehash", s.prehash)
}
function mu(s) {
    let e = Xc(s);
    ks(e, {
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
    return Object.freeze(j({}, e))
}
var {bytesToNumberBE: yu, hexToBytes: wu} = Jd
  , wn = class extends Error {
    constructor(e="") {
        super(e)
    }
}
  , xt = {
    Err: wn,
    _tlv: {
        encode: (s, e) => {
            let {Err: t} = xt;
            if (s < 0 || s > 256)
                throw new t("tlv.encode: wrong tag");
            if (e.length & 1)
                throw new t("tlv.encode: unpadded data");
            let i = e.length / 2
              , r = _s(i);
            if (r.length / 2 & 128)
                throw new t("tlv.encode: long form length too big");
            let n = i > 127 ? _s(r.length / 2 | 128) : "";
            return _s(s) + n + r + e
        }
        ,
        decode(s, e) {
            let {Err: t} = xt
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
                let l = e.subarray(i, i + c);
                if (l.length !== c)
                    throw new t("tlv.decode: length bytes not complete");
                if (l[0] === 0)
                    throw new t("tlv.decode(long): zero leftmost byte");
                for (let p of l)
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
            let {Err: e} = xt;
            if (s < kt)
                throw new e("integer: negative integers are not allowed");
            let t = _s(s);
            if (Number.parseInt(t[0], 16) & 8 && (t = "00" + t),
            t.length & 1)
                throw new e("unexpected DER parsing assertion: unpadded hex");
            return t
        },
        decode(s) {
            let {Err: e} = xt;
            if (s[0] & 128)
                throw new e("invalid signature integer: negative");
            if (s[0] === 0 && !(s[1] & 128))
                throw new e("invalid signature integer: unnecessary leading zero");
            return yu(s)
        }
    },
    toSig(s) {
        let {Err: e, _int: t, _tlv: i} = xt
          , r = typeof s == "string" ? wu(s) : s;
        Ci(r);
        let {v: n, l: o} = i.decode(48, r);
        if (o.length)
            throw new e("invalid signature: left bytes after parsing");
        let {v: a, l: c} = i.decode(2, n)
          , {v: l, l: p} = i.decode(2, c);
        if (p.length)
            throw new e("invalid signature: left bytes after parsing");
        return {
            r: t.decode(a),
            s: t.decode(l)
        }
    },
    hexFromSig(s) {
        let {_tlv: e, _int: t} = xt
          , i = e.encode(2, t.encode(s.r))
          , r = e.encode(2, t.encode(s.s))
          , n = i + r;
        return e.encode(48, n)
    }
}
  , kt = BigInt(0)
  , Ee = BigInt(1);
BigInt(2);
var cc = BigInt(3);
BigInt(4);
function vu(s) {
    let e = mu(s)
      , {Fp: t} = e
      , i = Kc(e.n, e.nBitLength)
      , r = e.toBytes || ( (y, g, v) => {
        let w = g.toAffine();
        return fi(Uint8Array.from([4]), t.toBytes(w.x), t.toBytes(w.y))
    }
    )
      , n = e.fromBytes || (y => {
        let g = y.subarray(1)
          , v = t.fromBytes(g.subarray(0, t.BYTES))
          , w = t.fromBytes(g.subarray(t.BYTES, 2 * t.BYTES));
        return {
            x: v,
            y: w
        }
    }
    );
    function o(y) {
        let {a: g, b: v} = e
          , w = t.sqr(y)
          , b = t.mul(w, y);
        return t.add(t.add(b, t.mul(y, g)), v)
    }
    if (!t.eql(t.sqr(e.Gy), o(e.Gx)))
        throw new Error("bad generator point: equation left != right");
    function a(y) {
        return gr(y, Ee, e.n)
    }
    function c(y) {
        let {allowedPrivateKeyLengths: g, nByteLength: v, wrapPrivateKey: w, n: b} = e;
        if (g && typeof y != "bigint") {
            if (hs(y) && (y = Ts(y)),
            typeof y != "string" || !g.includes(y.length))
                throw new Error("invalid private key");
            y = y.padStart(v * 2, "0")
        }
        let P;
        try {
            P = typeof y == "bigint" ? y : cs(We("private key", y, v))
        } catch {
            throw new Error("invalid private key, expected hex or " + v + " bytes, got " + typeof y)
        }
        return w && (P = $e(P, b)),
        Ut("private key", P, Ee, b),
        P
    }
    function l(y) {
        if (!(y instanceof u))
            throw new Error("ProjectivePoint expected")
    }
    let p = un( (y, g) => {
        let {px: v, py: w, pz: b} = y;
        if (t.eql(b, t.ONE))
            return {
                x: v,
                y: w
            };
        let P = y.is0();
        g == null && (g = P ? t.ONE : t.inv(b));
        let R = t.mul(v, g)
          , A = t.mul(w, g)
          , S = t.mul(b, g);
        if (P)
            return {
                x: t.ZERO,
                y: t.ZERO
            };
        if (!t.eql(S, t.ONE))
            throw new Error("invZ was invalid");
        return {
            x: R,
            y: A
        }
    }
    )
      , d = un(y => {
        if (y.is0()) {
            if (e.allowInfinityPoint && !t.is0(y.py))
                return;
            throw new Error("bad point: ZERO")
        }
        let {x: g, y: v} = y.toAffine();
        if (!t.isValid(g) || !t.isValid(v))
            throw new Error("bad point: x or y not FE");
        let w = t.sqr(v)
          , b = o(g);
        if (!t.eql(w, b))
            throw new Error("bad point: equation left != right");
        if (!y.isTorsionFree())
            throw new Error("bad point: not in prime-order subgroup");
        return !0
    }
    );
    class u {
        constructor(g, v, w) {
            if (this.px = g,
            this.py = v,
            this.pz = w,
            g == null || !t.isValid(g))
                throw new Error("x required");
            if (v == null || !t.isValid(v))
                throw new Error("y required");
            if (w == null || !t.isValid(w))
                throw new Error("z required");
            Object.freeze(this)
        }
        static fromAffine(g) {
            let {x: v, y: w} = g || {};
            if (!g || !t.isValid(v) || !t.isValid(w))
                throw new Error("invalid affine point");
            if (g instanceof u)
                throw new Error("projective point not allowed");
            let b = P => t.eql(P, t.ZERO);
            return b(v) && b(w) ? u.ZERO : new u(v,w,t.ONE)
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static normalizeZ(g) {
            let v = t.invertBatch(g.map(w => w.pz));
            return g.map( (w, b) => w.toAffine(v[b])).map(u.fromAffine)
        }
        static fromHex(g) {
            let v = u.fromAffine(n(We("pointHex", g)));
            return v.assertValidity(),
            v
        }
        static fromPrivateKey(g) {
            return u.BASE.multiply(c(g))
        }
        static msm(g, v) {
            return cu(u, i, g, v)
        }
        _setWindowSize(g) {
            f.setWindowSize(this, g)
        }
        assertValidity() {
            d(this)
        }
        hasEvenY() {
            let {y: g} = this.toAffine();
            if (t.isOdd)
                return !t.isOdd(g);
            throw new Error("Field doesn't support isOdd")
        }
        equals(g) {
            l(g);
            let {px: v, py: w, pz: b} = this
              , {px: P, py: R, pz: A} = g
              , S = t.eql(t.mul(v, A), t.mul(P, b))
              , k = t.eql(t.mul(w, A), t.mul(R, b));
            return S && k
        }
        negate() {
            return new u(this.px,t.neg(this.py),this.pz)
        }
        double() {
            let {a: g, b: v} = e
              , w = t.mul(v, cc)
              , {px: b, py: P, pz: R} = this
              , A = t.ZERO
              , S = t.ZERO
              , k = t.ZERO
              , E = t.mul(b, b)
              , B = t.mul(P, P)
              , D = t.mul(R, R)
              , L = t.mul(b, P);
            return L = t.add(L, L),
            k = t.mul(b, R),
            k = t.add(k, k),
            A = t.mul(g, k),
            S = t.mul(w, D),
            S = t.add(A, S),
            A = t.sub(B, S),
            S = t.add(B, S),
            S = t.mul(A, S),
            A = t.mul(L, A),
            k = t.mul(w, k),
            D = t.mul(g, D),
            L = t.sub(E, D),
            L = t.mul(g, L),
            L = t.add(L, k),
            k = t.add(E, E),
            E = t.add(k, E),
            E = t.add(E, D),
            E = t.mul(E, L),
            S = t.add(S, E),
            D = t.mul(P, R),
            D = t.add(D, D),
            E = t.mul(D, L),
            A = t.sub(A, E),
            k = t.mul(D, B),
            k = t.add(k, k),
            k = t.add(k, k),
            new u(A,S,k)
        }
        add(g) {
            l(g);
            let {px: v, py: w, pz: b} = this
              , {px: P, py: R, pz: A} = g
              , S = t.ZERO
              , k = t.ZERO
              , E = t.ZERO
              , B = e.a
              , D = t.mul(e.b, cc)
              , L = t.mul(v, P)
              , V = t.mul(w, R)
              , C = t.mul(b, A)
              , O = t.add(v, w)
              , T = t.add(P, R);
            O = t.mul(O, T),
            T = t.add(L, V),
            O = t.sub(O, T),
            T = t.add(v, b);
            let U = t.add(P, A);
            return T = t.mul(T, U),
            U = t.add(L, C),
            T = t.sub(T, U),
            U = t.add(w, b),
            S = t.add(R, A),
            U = t.mul(U, S),
            S = t.add(V, C),
            U = t.sub(U, S),
            E = t.mul(B, T),
            S = t.mul(D, C),
            E = t.add(S, E),
            S = t.sub(V, E),
            E = t.add(V, E),
            k = t.mul(S, E),
            V = t.add(L, L),
            V = t.add(V, L),
            C = t.mul(B, C),
            T = t.mul(D, T),
            V = t.add(V, C),
            C = t.sub(L, C),
            C = t.mul(B, C),
            T = t.add(T, C),
            L = t.mul(V, T),
            k = t.add(k, L),
            L = t.mul(U, T),
            S = t.mul(O, S),
            S = t.sub(S, L),
            L = t.mul(O, V),
            E = t.mul(U, E),
            E = t.add(E, L),
            new u(S,k,E)
        }
        subtract(g) {
            return this.add(g.negate())
        }
        is0() {
            return this.equals(u.ZERO)
        }
        wNAF(g) {
            return f.wNAFCached(this, g, u.normalizeZ)
        }
        multiplyUnsafe(g) {
            let {endo: v, n: w} = e;
            Ut("scalar", g, kt, w);
            let b = u.ZERO;
            if (g === kt)
                return b;
            if (this.is0() || g === Ee)
                return this;
            if (!v || f.hasPrecomputes(this))
                return f.wNAFCachedUnsafe(this, g, u.normalizeZ);
            let {k1neg: P, k1: R, k2neg: A, k2: S} = v.splitScalar(g)
              , k = b
              , E = b
              , B = this;
            for (; R > kt || S > kt; )
                R & Ee && (k = k.add(B)),
                S & Ee && (E = E.add(B)),
                B = B.double(),
                R >>= Ee,
                S >>= Ee;
            return P && (k = k.negate()),
            A && (E = E.negate()),
            E = new u(t.mul(E.px, v.beta),E.py,E.pz),
            k.add(E)
        }
        multiply(g) {
            let {endo: v, n: w} = e;
            Ut("scalar", g, Ee, w);
            let b, P;
            if (v) {
                let {k1neg: R, k1: A, k2neg: S, k2: k} = v.splitScalar(g)
                  , {p: E, f: B} = this.wNAF(A)
                  , {p: D, f: L} = this.wNAF(k);
                E = f.constTimeNegate(R, E),
                D = f.constTimeNegate(S, D),
                D = new u(t.mul(D.px, v.beta),D.py,D.pz),
                b = E.add(D),
                P = B.add(L)
            } else {
                let {p: R, f: A} = this.wNAF(g);
                b = R,
                P = A
            }
            return u.normalizeZ([b, P])[0]
        }
        multiplyAndAddUnsafe(g, v, w) {
            let b = u.BASE
              , P = (A, S) => S === kt || S === Ee || !A.equals(b) ? A.multiplyUnsafe(S) : A.multiply(S)
              , R = P(this, v).add(P(g, w));
            return R.is0() ? void 0 : R
        }
        toAffine(g) {
            return p(this, g)
        }
        isTorsionFree() {
            let {h: g, isTorsionFree: v} = e;
            if (g === Ee)
                return !0;
            if (v)
                return v(u, this);
            throw new Error("isTorsionFree() has not been declared for the elliptic curve")
        }
        clearCofactor() {
            let {h: g, clearCofactor: v} = e;
            return g === Ee ? this : v ? v(u, this) : this.multiplyUnsafe(e.h)
        }
        toRawBytes(g=!0) {
            return Ss("isCompressed", g),
            this.assertValidity(),
            r(u, this, g)
        }
        toHex(g=!0) {
            return Ss("isCompressed", g),
            Ts(this.toRawBytes(g))
        }
    }
    u.BASE = new u(e.Gx,e.Gy,t.ONE),
    u.ZERO = new u(t.ZERO,t.ONE,t.ZERO);
    let m = e.nBitLength
      , f = au(u, e.endo ? Math.ceil(m / 2) : m);
    return {
        CURVE: e,
        ProjectivePoint: u,
        normPrivateKeyToScalar: c,
        weierstrassEquation: o,
        isWithinCurveOrder: a
    }
}
function bu(s) {
    let e = Xc(s);
    return ks(e, {
        hash: "hash",
        hmac: "function",
        randomBytes: "function"
    }, {
        bits2int: "function",
        bits2int_modN: "function",
        lowS: "boolean"
    }),
    Object.freeze(j({
        lowS: !0
    }, e))
}
function Eu(s) {
    let e = bu(s)
      , {Fp: t, n: i} = e
      , r = t.BYTES + 1
      , n = 2 * t.BYTES + 1;
    function o(C) {
        return $e(C, i)
    }
    function a(C) {
        return fn(C, i)
    }
    let {ProjectivePoint: c, normPrivateKeyToScalar: l, weierstrassEquation: p, isWithinCurveOrder: d} = vu(be(j({}, e), {
        toBytes(C, O, T) {
            let U = O.toAffine()
              , F = t.toBytes(U.x)
              , N = fi;
            return Ss("isCompressed", T),
            T ? N(Uint8Array.from([O.hasEvenY() ? 2 : 3]), F) : N(Uint8Array.from([4]), F, t.toBytes(U.y))
        },
        fromBytes(C) {
            let O = C.length
              , T = C[0]
              , U = C.subarray(1);
            if (O === r && (T === 2 || T === 3)) {
                let F = cs(U);
                if (!gr(F, Ee, t.ORDER))
                    throw new Error("Point is not on curve");
                let N = p(F), M;
                try {
                    M = t.sqrt(N)
                } catch (z) {
                    let ne = z instanceof Error ? ": " + z.message : "";
                    throw new Error("Point is not on curve" + ne)
                }
                let H = (M & Ee) === Ee;
                return (T & 1) === 1 !== H && (M = t.neg(M)),
                {
                    x: F,
                    y: M
                }
            } else if (O === n && T === 4) {
                let F = t.fromBytes(U.subarray(0, t.BYTES))
                  , N = t.fromBytes(U.subarray(t.BYTES, 2 * t.BYTES));
                return {
                    x: F,
                    y: N
                }
            } else {
                let F = r
                  , N = n;
                throw new Error("invalid Point, expected length of " + F + ", or uncompressed " + N + ", got " + O)
            }
        }
    }))
      , u = C => Ts(Rs(C, e.nByteLength));
    function m(C) {
        let O = i >> Ee;
        return C > O
    }
    function f(C) {
        return m(C) ? o(-C) : C
    }
    let y = (C, O, T) => cs(C.slice(O, T));
    class g {
        constructor(O, T, U) {
            this.r = O,
            this.s = T,
            this.recovery = U,
            this.assertValidity()
        }
        static fromCompact(O) {
            let T = e.nByteLength;
            return O = We("compactSignature", O, T * 2),
            new g(y(O, 0, T),y(O, T, 2 * T))
        }
        static fromDER(O) {
            let {r: T, s: U} = xt.toSig(We("DER", O));
            return new g(T,U)
        }
        assertValidity() {
            Ut("r", this.r, Ee, i),
            Ut("s", this.s, Ee, i)
        }
        addRecoveryBit(O) {
            return new g(this.r,this.s,O)
        }
        recoverPublicKey(O) {
            let {r: T, s: U, recovery: F} = this
              , N = A(We("msgHash", O));
            if (F == null || ![0, 1, 2, 3].includes(F))
                throw new Error("recovery id invalid");
            let M = F === 2 || F === 3 ? T + e.n : T;
            if (M >= t.ORDER)
                throw new Error("recovery id 2 or 3 invalid");
            let H = F & 1 ? "03" : "02"
              , z = c.fromHex(H + u(M))
              , ne = a(M)
              , te = o(-N * ne)
              , ue = o(U * ne)
              , ve = c.BASE.multiplyAndAddUnsafe(z, te, ue);
            if (!ve)
                throw new Error("point at infinify");
            return ve.assertValidity(),
            ve
        }
        hasHighS() {
            return m(this.s)
        }
        normalizeS() {
            return this.hasHighS() ? new g(this.r,o(-this.s),this.recovery) : this
        }
        toDERRawBytes() {
            return Os(this.toDERHex())
        }
        toDERHex() {
            return xt.hexFromSig({
                r: this.r,
                s: this.s
            })
        }
        toCompactRawBytes() {
            return Os(this.toCompactHex())
        }
        toCompactHex() {
            return u(this.r) + u(this.s)
        }
    }
    let v = {
        isValidPrivateKey(C) {
            try {
                return l(C),
                !0
            } catch {
                return !1
            }
        },
        normPrivateKeyToScalar: l,
        randomPrivateKey: () => {
            let C = Gc(e.n);
            return ru(e.randomBytes(C), e.n)
        }
        ,
        precompute(C=8, O=c.BASE) {
            return O._setWindowSize(C),
            O.multiply(BigInt(3)),
            O
        }
    };
    function w(C, O=!0) {
        return c.fromPrivateKey(C).toRawBytes(O)
    }
    function b(C) {
        let O = hs(C)
          , T = typeof C == "string"
          , U = (O || T) && C.length;
        return O ? U === r || U === n : T ? U === 2 * r || U === 2 * n : C instanceof c
    }
    function P(C, O, T=!0) {
        if (b(C))
            throw new Error("first arg must be private key");
        if (!b(O))
            throw new Error("second arg must be public key");
        return c.fromHex(O).multiply(l(C)).toRawBytes(T)
    }
    let R = e.bits2int || function(C) {
        if (C.length > 8192)
            throw new Error("input is too large");
        let O = cs(C)
          , T = C.length * 8 - e.nBitLength;
        return T > 0 ? O >> BigInt(T) : O
    }
      , A = e.bits2int_modN || function(C) {
        return o(R(C))
    }
      , S = Rn(e.nBitLength);
    function k(C) {
        return Ut("num < 2^" + e.nBitLength, C, kt, S),
        Rs(C, e.nByteLength)
    }
    function E(C, O, T=B) {
        if (["recovered", "canonical"].some(fe => fe in T))
            throw new Error("sign() legacy options not supported");
        let {hash: U, randomBytes: F} = e
          , {lowS: N, prehash: M, extraEntropy: H} = T;
        N == null && (N = !0),
        C = We("msgHash", C),
        ac(T),
        M && (C = We("prehashed msgHash", U(C)));
        let z = A(C)
          , ne = l(O)
          , te = [k(ne), k(z)];
        if (H != null && H !== !1) {
            let fe = H === !0 ? F(t.BYTES) : H;
            te.push(We("extraEntropy", fe))
        }
        let ue = fi(...te)
          , ve = z;
        function Re(fe) {
            let me = R(fe);
            if (!d(me))
                return;
            let es = a(me)
              , Nt = c.BASE.multiply(me).toAffine()
              , gt = o(Nt.x);
            if (gt === kt)
                return;
            let St = o(es * o(ve + gt * ne));
            if (St === kt)
                return;
            let ms = (Nt.x === gt ? 0 : 2) | Number(Nt.y & Ee)
              , Di = St;
            return N && m(St) && (Di = f(St),
            ms ^= 1),
            new g(gt,Di,ms)
        }
        return {
            seed: ue,
            k2sig: Re
        }
    }
    let B = {
        lowS: e.lowS,
        prehash: !1
    }
      , D = {
        lowS: e.lowS,
        prehash: !1
    };
    function L(C, O, T=B) {
        let {seed: U, k2sig: F} = E(C, O, T)
          , N = e;
        return Vc(N.hash.outputLen, N.nByteLength, N.hmac)(U, F)
    }
    c.BASE._setWindowSize(8);
    function V(C, O, T, U=D) {
        let F = C;
        O = We("msgHash", O),
        T = We("publicKey", T);
        let {lowS: N, prehash: M, format: H} = U;
        if (ac(U),
        "strict"in U)
            throw new Error("options.strict was renamed to lowS");
        if (H !== void 0 && H !== "compact" && H !== "der")
            throw new Error("format must be compact or der");
        let z = typeof F == "string" || hs(F)
          , ne = !z && !H && typeof F == "object" && F !== null && typeof F.r == "bigint" && typeof F.s == "bigint";
        if (!z && !ne)
            throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
        let te, ue;
        try {
            if (ne && (te = new g(F.r,F.s)),
            z) {
                try {
                    H !== "compact" && (te = g.fromDER(F))
                } catch (St) {
                    if (!(St instanceof xt.Err))
                        throw St
                }
                !te && H !== "der" && (te = g.fromCompact(F))
            }
            ue = c.fromHex(T)
        } catch {
            return !1
        }
        if (!te || N && te.hasHighS())
            return !1;
        M && (O = e.hash(O));
        let {r: ve, s: Re} = te
          , fe = A(O)
          , me = a(Re)
          , es = o(fe * me)
          , Nt = o(ve * me)
          , gt = c.BASE.multiplyAndAddUnsafe(ue, es, Nt)?.toAffine();
        return gt ? o(gt.x) === ve : !1
    }
    return {
        CURVE: e,
        getPublicKey: w,
        getSharedSecret: P,
        sign: L,
        verify: V,
        ProjectivePoint: c,
        Signature: g,
        utils: v
    }
}
function Iu(s) {
    return {
        hash: s,
        hmac: (e, ...t) => hr(s, e, Up(...t)),
        randomBytes: xs
    }
}
function Cu(s, e) {
    let t = i => Eu(j(j({}, s), Iu(i)));
    return be(j({}, t(e)), {
        create: t
    })
}
var Zc = Kc(BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"))
  , _u = Zc.create(BigInt("-3"))
  , Pu = BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b")
  , Au = Cu({
    a: _u,
    b: Pu,
    Fp: Zc,
    n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),
    Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),
    Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"),
    h: BigInt(1),
    lowS: !1
}, Ii)
  , Qc = "base10"
  , ke = "base16"
  , Ye = "base64pad"
  , jt = "base64url"
  , _i = "utf8"
  , el = 0
  , ht = 1
  , Us = 2
  , Nu = 0
  , lc = 1
  , hi = 12
  , xn = 32;
function tl() {
    let s = yn.utils.randomPrivateKey()
      , e = yn.getPublicKey(s);
    return {
        privateKey: xe(s, ke),
        publicKey: xe(e, ke)
    }
}
function fr() {
    let s = xs(xn);
    return xe(s, ke)
}
function sl(s, e) {
    let t = yn.getSharedSecret(Ve(s, ke), Ve(e, ke))
      , i = Fd(Ii, t, void 0, void 0, xn);
    return xe(i, ke)
}
function Ds(s) {
    let e = Ii(Ve(s, ke));
    return xe(e, ke)
}
function tt(s) {
    let e = Ii(Ve(s, _i));
    return xe(e, ke)
}
function il(s) {
    return Ve(`${s}`, Qc)
}
function Gt(s) {
    return Number(xe(s, Qc))
}
function rl(s) {
    return s.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}
function nl(s) {
    let e = s.replace(/-/g, "+").replace(/_/g, "/")
      , t = (4 - e.length % 4) % 4;
    return e + "=".repeat(t)
}
function ol(s) {
    let e = il(typeof s.type < "u" ? s.type : el);
    if (Gt(e) === ht && typeof s.senderPublicKey > "u")
        throw new Error("Missing sender public key for type 1 envelope");
    let t = typeof s.senderPublicKey < "u" ? Ve(s.senderPublicKey, ke) : void 0
      , i = typeof s.iv < "u" ? Ve(s.iv, ke) : xs(hi)
      , r = Ve(s.symKey, ke)
      , n = Bc(r, i).encrypt(Ve(s.message, _i))
      , o = hl({
        type: e,
        sealed: n,
        iv: i,
        senderPublicKey: t
    });
    return s.encoding === jt ? rl(o) : o
}
function al(s) {
    let e = Ve(s.symKey, ke)
      , {sealed: t, iv: i} = Fs({
        encoded: s.encoded,
        encoding: s.encoding
    })
      , r = Bc(e, i).decrypt(t);
    if (r === null)
        throw new Error("Failed to decrypt");
    return xe(r, _i)
}
function cl(s, e) {
    let t = il(Us)
      , i = xs(hi)
      , r = Ve(s, _i)
      , n = hl({
        type: t,
        sealed: r,
        iv: i
    });
    return e === jt ? rl(n) : n
}
function ll(s, e) {
    let {sealed: t} = Fs({
        encoded: s,
        encoding: e
    });
    return xe(t, _i)
}
function hl(s) {
    if (Gt(s.type) === Us)
        return xe(ys([s.type, s.sealed]), Ye);
    if (Gt(s.type) === ht) {
        if (typeof s.senderPublicKey > "u")
            throw new Error("Missing sender public key for type 1 envelope");
        return xe(ys([s.type, s.senderPublicKey, s.iv, s.sealed]), Ye)
    }
    return xe(ys([s.type, s.iv, s.sealed]), Ye)
}
function Fs(s) {
    let e = (s.encoding || Ye) === jt ? nl(s.encoded) : s.encoded
      , t = Ve(e, Ye)
      , i = t.slice(Nu, lc)
      , r = lc;
    if (Gt(i) === ht) {
        let c = r + xn
          , l = c + hi
          , p = t.slice(r, c)
          , d = t.slice(c, l)
          , u = t.slice(l);
        return {
            type: i,
            sealed: u,
            iv: d,
            senderPublicKey: p
        }
    }
    if (Gt(i) === Us) {
        let c = t.slice(r)
          , l = xs(hi);
        return {
            type: i,
            sealed: c,
            iv: l
        }
    }
    let n = r + hi
      , o = t.slice(r, n)
      , a = t.slice(n);
    return {
        type: i,
        sealed: a,
        iv: o
    }
}
function pl(s, e) {
    let t = Fs({
        encoded: s,
        encoding: e?.encoding
    });
    return kn({
        type: Gt(t.type),
        senderPublicKey: typeof t.senderPublicKey < "u" ? xe(t.senderPublicKey, ke) : void 0,
        receiverPublicKey: e?.receiverPublicKey
    })
}
function kn(s) {
    let e = s?.type || el;
    if (e === ht) {
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
function Un(s) {
    return s.type === ht && typeof s.senderPublicKey == "string" && typeof s.receiverPublicKey == "string"
}
function Dn(s) {
    return s.type === Us
}
function Su(s) {
    let e = Buffer.from(s.x, "base64")
      , t = Buffer.from(s.y, "base64");
    return ys([new Uint8Array([4]), e, t])
}
function dl(s, e) {
    let[t,i,r] = s.split(".")
      , n = Buffer.from(nl(r), "base64");
    if (n.length !== 64)
        throw new Error("Invalid signature length");
    let o = n.slice(0, 32)
      , a = n.slice(32, 64)
      , c = `${t}.${i}`
      , l = Ii(c)
      , p = Su(e);
    if (!Au.verify(ys([o, a]), l, p))
        throw new Error("Invalid signature");
    return ri(s).payload
}
var Tu = "irn";
function Pi(s) {
    return s?.relay || {
        protocol: Tu
    }
}
function Ls(s) {
    let e = ua[s];
    if (typeof e > "u")
        throw new Error(`Relay Protocol not supported: ${s}`);
    return e
}
function Ou(s, e="-") {
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
function Fn(s) {
    if (!s.includes("wc:")) {
        let l = Ac(s);
        l != null && l.includes("wc:") && (s = l)
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
    o.forEach( (l, p) => {
        a[p] = l
    }
    );
    let c = typeof a.methods == "string" ? a.methods.split(",") : void 0;
    return {
        protocol: i,
        topic: Ru(r[0]),
        version: parseInt(r[1], 10),
        symKey: a.symKey,
        relay: Ou(a),
        methods: c,
        expiryTimestamp: a.expiryTimestamp ? parseInt(a.expiryTimestamp, 10) : void 0
    }
}
function Ru(s) {
    return s.startsWith("//") ? s.substring(2) : s
}
function xu(s, e="-") {
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
function Ln(s) {
    let e = new URLSearchParams
      , t = xu(s.relay);
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
function Ai(s, e, t) {
    return `${s}?wc_ev=${t}&topic=${e}`
}
var ku = Object.defineProperty
  , Uu = Object.defineProperties
  , Du = Object.getOwnPropertyDescriptors
  , hc = Object.getOwnPropertySymbols
  , Fu = Object.prototype.hasOwnProperty
  , Lu = Object.prototype.propertyIsEnumerable
  , pc = (s, e, t) => e in s ? ku(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , qu = (s, e) => {
    for (var t in e || (e = {}))
        Fu.call(e, t) && pc(s, t, e[t]);
    if (hc)
        for (var t of hc(e))
            Lu.call(e, t) && pc(s, t, e[t]);
    return s
}
  , ju = (s, e) => Uu(s, Du(e));
function qs(s) {
    let e = [];
    return s.forEach(t => {
        let[i,r] = t.split(":");
        e.push(`${i}:${r}`)
    }
    ),
    e
}
function $u(s) {
    let e = [];
    return Object.values(s).forEach(t => {
        e.push(...qs(t.accounts))
    }
    ),
    e
}
function Bu(s, e) {
    let t = [];
    return Object.values(s).forEach(i => {
        qs(i.accounts).includes(e) && t.push(...i.methods)
    }
    ),
    t
}
function Mu(s, e) {
    let t = [];
    return Object.values(s).forEach(i => {
        qs(i.accounts).includes(e) && t.push(...i.events)
    }
    ),
    t
}
function Ni(s) {
    return s.includes(":")
}
function ds(s) {
    return Ni(s) ? s.split(":")[0] : s
}
function dc(s) {
    var e, t, i;
    let r = {};
    if (!Et(s))
        return r;
    for (let[n,o] of Object.entries(s)) {
        let a = Ni(n) ? [n] : o.chains
          , c = o.methods || []
          , l = o.events || []
          , p = ds(n);
        r[p] = ju(qu({}, r[p]), {
            chains: ct(a, (e = r[p]) == null ? void 0 : e.chains),
            methods: ct(c, (t = r[p]) == null ? void 0 : t.methods),
            events: ct(l, (i = r[p]) == null ? void 0 : i.events)
        })
    }
    return r
}
function Vu(s) {
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
function qn(s, e) {
    e = e.map(i => i.replace("did:pkh:", ""));
    let t = Vu(e);
    for (let[i,r] of Object.entries(t))
        r.methods ? r.methods = ct(r.methods, s) : r.methods = s,
        r.events = ["chainChanged", "accountsChanged"];
    return t
}
function ul(s, e) {
    var t, i, r, n, o, a;
    let c = dc(s)
      , l = dc(e)
      , p = {}
      , d = Object.keys(c).concat(Object.keys(l));
    for (let u of d)
        p[u] = {
            chains: ct((t = c[u]) == null ? void 0 : t.chains, (i = l[u]) == null ? void 0 : i.chains),
            methods: ct((r = c[u]) == null ? void 0 : r.methods, (n = l[u]) == null ? void 0 : n.methods),
            events: ct((o = c[u]) == null ? void 0 : o.events, (a = l[u]) == null ? void 0 : a.events)
        };
    return p
}
var Hu = {
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
  , zu = {
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
function x(s, e) {
    let {message: t, code: i} = zu[s];
    return {
        message: e ? `${t} ${e}` : t,
        code: i
    }
}
function ee(s, e) {
    let {message: t, code: i} = Hu[s];
    return {
        message: e ? `${t} ${e}` : t,
        code: i
    }
}
function bt(s, e) {
    return Array.isArray(s) ? typeof e < "u" && s.length ? s.every(e) : !0 : !1
}
function Et(s) {
    return Object.getPrototypeOf(s) === Object.prototype && Object.keys(s).length
}
function ye(s) {
    return typeof s > "u"
}
function he(s, e) {
    return e && ye(s) ? !0 : typeof s == "string" && !!s.trim().length
}
function jn(s, e) {
    return e && ye(s) ? !0 : typeof s == "number" && !isNaN(s)
}
function gl(s, e) {
    let {requiredNamespaces: t} = e
      , i = Object.keys(s.namespaces)
      , r = Object.keys(t)
      , n = !0;
    return as(r, i) ? (i.forEach(o => {
        let {accounts: a, methods: c, events: l} = s.namespaces[o]
          , p = qs(a)
          , d = t[o];
        (!as(mc(o, d), p) || !as(d.methods, c) || !as(d.events, l)) && (n = !1)
    }
    ),
    n) : !1
}
function nr(s) {
    return he(s, !1) && s.includes(":") ? s.split(":").length === 2 : !1
}
function Ku(s) {
    if (he(s, !1) && s.includes(":")) {
        let e = s.split(":");
        if (e.length === 3) {
            let t = e[0] + ":" + e[1];
            return !!e[2] && nr(t)
        }
    }
    return !1
}
function fl(s) {
    function e(t) {
        try {
            return typeof new URL(t) < "u"
        } catch {
            return !1
        }
    }
    try {
        if (he(s, !1)) {
            if (e(s))
                return !0;
            let t = Ac(s);
            return e(t)
        }
    } catch {}
    return !1
}
function ml(s) {
    var e;
    return (e = s?.proposer) == null ? void 0 : e.publicKey
}
function yl(s) {
    return s?.topic
}
function wl(s, e) {
    let t = null;
    return he(s?.publicKey, !1) || (t = x("MISSING_OR_INVALID", `${e} controller public key should be a string`)),
    t
}
function uc(s) {
    let e = !0;
    return bt(s) ? s.length && (e = s.every(t => he(t, !1))) : e = !1,
    e
}
function Wu(s, e, t) {
    let i = null;
    return bt(e) && e.length ? e.forEach(r => {
        i || nr(r) || (i = ee("UNSUPPORTED_CHAINS", `${t}, chain ${r} should be a string and conform to "namespace:chainId" format`))
    }
    ) : nr(s) || (i = ee("UNSUPPORTED_CHAINS", `${t}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),
    i
}
function Gu(s, e, t) {
    let i = null;
    return Object.entries(s).forEach( ([r,n]) => {
        if (i)
            return;
        let o = Wu(r, mc(r, n), `${e} ${t}`);
        o && (i = o)
    }
    ),
    i
}
function Yu(s, e) {
    let t = null;
    return bt(s) ? s.forEach(i => {
        t || Ku(i) || (t = ee("UNSUPPORTED_ACCOUNTS", `${e}, account ${i} should be a string and conform to "namespace:chainId:address" format`))
    }
    ) : t = ee("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),
    t
}
function Ju(s, e) {
    let t = null;
    return Object.values(s).forEach(i => {
        if (t)
            return;
        let r = Yu(i?.accounts, `${e} namespace`);
        r && (t = r)
    }
    ),
    t
}
function Xu(s, e) {
    let t = null;
    return uc(s?.methods) ? uc(s?.events) || (t = ee("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : t = ee("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`),
    t
}
function vl(s, e) {
    let t = null;
    return Object.values(s).forEach(i => {
        if (t)
            return;
        let r = Xu(i, `${e}, namespace`);
        r && (t = r)
    }
    ),
    t
}
function bl(s, e, t) {
    let i = null;
    if (s && Et(s)) {
        let r = vl(s, e);
        r && (i = r);
        let n = Gu(s, e, t);
        n && (i = n)
    } else
        i = x("MISSING_OR_INVALID", `${e}, ${t} should be an object with data`);
    return i
}
function mr(s, e) {
    let t = null;
    if (s && Et(s)) {
        let i = vl(s, e);
        i && (t = i);
        let r = Ju(s, e);
        r && (t = r)
    } else
        t = x("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
    return t
}
function $n(s) {
    return he(s.protocol, !0)
}
function El(s, e) {
    let t = !1;
    return e && !s ? t = !0 : s && bt(s) && s.length && s.forEach(i => {
        t = $n(i)
    }
    ),
    t
}
function Il(s) {
    return typeof s == "number"
}
function Ue(s) {
    return typeof s < "u" && typeof s !== null
}
function Cl(s) {
    return !(!s || typeof s != "object" || !s.code || !jn(s.code, !1) || !s.message || !he(s.message, !1))
}
function _l(s) {
    return !(ye(s) || !he(s.method, !1))
}
function Pl(s) {
    return !(ye(s) || ye(s.result) && ye(s.error) || !jn(s.id, !1) || !he(s.jsonrpc, !1))
}
function Al(s) {
    return !(ye(s) || !he(s.name, !1))
}
function Bn(s, e) {
    return !(!nr(e) || !$u(s).includes(e))
}
function Nl(s, e, t) {
    return he(t, !1) ? Bu(s, e).includes(t) : !1
}
function Sl(s, e, t) {
    return he(t, !1) ? Mu(s, e).includes(t) : !1
}
function Mn(s, e, t) {
    let i = null
      , r = Zu(s)
      , n = Qu(e)
      , o = Object.keys(r)
      , a = Object.keys(n)
      , c = gc(Object.keys(s))
      , l = gc(Object.keys(e))
      , p = c.filter(d => !l.includes(d));
    return p.length && (i = x("NON_CONFORMING_NAMESPACES", `${t} namespaces keys don't satisfy requiredNamespaces.
      Required: ${p.toString()}
      Received: ${Object.keys(e).toString()}`)),
    as(o, a) || (i = x("NON_CONFORMING_NAMESPACES", `${t} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)),
    Object.keys(e).forEach(d => {
        if (!d.includes(":") || i)
            return;
        let u = qs(e[d].accounts);
        u.includes(d) || (i = x("NON_CONFORMING_NAMESPACES", `${t} namespaces accounts don't satisfy namespace accounts for ${d}
        Required: ${d}
        Approved: ${u.toString()}`))
    }
    ),
    o.forEach(d => {
        i || (as(r[d].methods, n[d].methods) ? as(r[d].events, n[d].events) || (i = x("NON_CONFORMING_NAMESPACES", `${t} namespaces events don't satisfy namespace events for ${d}`)) : i = x("NON_CONFORMING_NAMESPACES", `${t} namespaces methods don't satisfy namespace methods for ${d}`))
    }
    ),
    i
}
function Zu(s) {
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
function gc(s) {
    return [...new Set(s.map(e => e.includes(":") ? e.split(":")[0] : e))]
}
function Qu(s) {
    let e = {};
    return Object.keys(s).forEach(t => {
        t.includes(":") ? e[t] = s[t] : qs(s[t].accounts)?.forEach(r => {
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
function Tl(s, e) {
    return jn(s, !1) && s <= e.max && s >= e.min
}
function Vn() {
    let s = yi();
    return new Promise(e => {
        switch (s) {
        case Be.browser:
            e(eg());
            break;
        case Be.reactNative:
            e(tg());
            break;
        case Be.node:
            e(sg());
            break;
        default:
            e(!0)
        }
    }
    )
}
function eg() {
    return ps() && navigator?.onLine
}
function tg() {
    return h(this, null, function*() {
        return Ft() && typeof global < "u" && global != null && global.NetInfo ? (yield global == null ? void 0 : global.NetInfo.fetch())?.isConnected : !0
    })
}
function sg() {
    return !0
}
function Ol(s) {
    switch (yi()) {
    case Be.browser:
        ig(s);
        break;
    case Be.reactNative:
        rg(s);
        break;
    case Be.node:
        break
    }
}
function ig(s) {
    !Ft() && ps() && (window.addEventListener("online", () => s(!0)),
    window.addEventListener("offline", () => s(!1)))
}
function rg(s) {
    Ft() && typeof global < "u" && global != null && global.NetInfo && global?.NetInfo.addEventListener(e => s(e?.isConnected))
}
function Rl() {
    var s;
    return ps() && (0,
    lt.getDocument)() ? ((s = (0,
    lt.getDocument)()) == null ? void 0 : s.visibilityState) === "visible" : !0
}
var nn = {}
  , Yt = class {
    static get(e) {
        return nn[e]
    }
    static set(e, t) {
        nn[e] = t
    }
    static delete(e) {
        delete nn[e]
    }
}
;
var sh = ft(la());
var ih = "wc"
  , rh = 2
  , vr = "core"
  , _t = `${ih}@2:${vr}:`
  , ng = {
    name: vr,
    logger: "error"
}
  , og = {
    database: ":memory:"
}
  , ag = "crypto"
  , xl = "client_ed25519_seed"
  , cg = $.ONE_DAY
  , lg = "keychain"
  , hg = "0.3"
  , pg = "messages"
  , dg = "0.3"
  , kl = $.SIX_HOURS
  , ug = "publisher"
  , Po = "irn"
  , gg = "error"
  , nh = "wss://relay.walletconnect.org"
  , fg = "relayer"
  , we = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish"
}
  , mg = "_subscription"
  , st = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error"
}
  , yg = .1;
var Gn = "2.21.0";
var ae = {
    link_mode: "link_mode",
    relay: "relay"
}
  , wr = {
    inbound: "inbound",
    outbound: "outbound"
}
  , wg = "0.3"
  , vg = "WALLETCONNECT_CLIENT_ID"
  , Ul = "WALLETCONNECT_LINK_MODE_APPS"
  , Xe = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed"
};
var bg = "subscription"
  , Eg = "0.3"
  , Vv = $.FIVE_SECONDS * 1e3
  , Ig = "pairing"
  , Cg = "0.3";
var Si = {
    wc_pairingDelete: {
        req: {
            ttl: $.ONE_DAY,
            prompt: !1,
            tag: 1e3
        },
        res: {
            ttl: $.ONE_DAY,
            prompt: !1,
            tag: 1001
        }
    },
    wc_pairingPing: {
        req: {
            ttl: $.THIRTY_SECONDS,
            prompt: !1,
            tag: 1002
        },
        res: {
            ttl: $.THIRTY_SECONDS,
            prompt: !1,
            tag: 1003
        }
    },
    unregistered_method: {
        req: {
            ttl: $.ONE_DAY,
            prompt: !1,
            tag: 0
        },
        res: {
            ttl: $.ONE_DAY,
            prompt: !1,
            tag: 0
        }
    }
}
  , Xt = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping"
}
  , pt = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
}
  , _g = "history"
  , Pg = "0.3"
  , Ag = "expirer"
  , Ze = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync"
}
  , Ng = "0.3";
var Sg = "verify-api"
  , Tg = "https://verify.walletconnect.com"
  , oh = "https://verify.walletconnect.org"
  , $s = oh
  , Og = `${$s}/v3`
  , Rg = [Tg, oh]
  , xg = "echo"
  , kg = "https://echo.walletconnect.com";
var ut = {
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
  , Ct = {
    no_wss_connection: "no_wss_connection",
    no_internet_connection: "no_internet_connection",
    malformed_pairing_uri: "malformed_pairing_uri",
    active_pairing_already_exists: "active_pairing_already_exists",
    subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
    pairing_expired: "pairing_expired",
    proposal_expired: "proposal_expired",
    proposal_listener_not_found: "proposal_listener_not_found"
}
  , it = {
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
  , Zt = {
    no_internet_connection: "no_internet_connection",
    no_wss_connection: "no_wss_connection",
    proposal_expired: "proposal_expired",
    subscribe_session_topic_failure: "subscribe_session_topic_failure",
    session_approve_publish_failure: "session_approve_publish_failure",
    session_settle_publish_failure: "session_settle_publish_failure",
    session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure",
    proposal_not_found: "proposal_not_found"
}
  , Qt = {
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
  , Bs = {
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
  , Ug = .1
  , Dg = "event-client"
  , Fg = 86400
  , Lg = "https://pulse.walletconnect.org/batch";
function qg(s, e) {
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
      , l = Math.log(a) / Math.log(256)
      , p = Math.log(256) / Math.log(a);
    function d(f) {
        if (f instanceof Uint8Array || (ArrayBuffer.isView(f) ? f = new Uint8Array(f.buffer,f.byteOffset,f.byteLength) : Array.isArray(f) && (f = Uint8Array.from(f))),
        !(f instanceof Uint8Array))
            throw new TypeError("Expected Uint8Array");
        if (f.length === 0)
            return "";
        for (var y = 0, g = 0, v = 0, w = f.length; v !== w && f[v] === 0; )
            v++,
            y++;
        for (var b = (w - v) * p + 1 >>> 0, P = new Uint8Array(b); v !== w; ) {
            for (var R = f[v], A = 0, S = b - 1; (R !== 0 || A < g) && S !== -1; S--,
            A++)
                R += 256 * P[S] >>> 0,
                P[S] = R % a >>> 0,
                R = R / a >>> 0;
            if (R !== 0)
                throw new Error("Non-zero carry");
            g = A,
            v++
        }
        for (var k = b - g; k !== b && P[k] === 0; )
            k++;
        for (var E = c.repeat(y); k < b; ++k)
            E += s.charAt(P[k]);
        return E
    }
    function u(f) {
        if (typeof f != "string")
            throw new TypeError("Expected String");
        if (f.length === 0)
            return new Uint8Array;
        var y = 0;
        if (f[y] !== " ") {
            for (var g = 0, v = 0; f[y] === c; )
                g++,
                y++;
            for (var w = (f.length - y) * l + 1 >>> 0, b = new Uint8Array(w); f[y]; ) {
                var P = t[f.charCodeAt(y)];
                if (P === 255)
                    return;
                for (var R = 0, A = w - 1; (P !== 0 || R < v) && A !== -1; A--,
                R++)
                    P += a * b[A] >>> 0,
                    b[A] = P % 256 >>> 0,
                    P = P / 256 >>> 0;
                if (P !== 0)
                    throw new Error("Non-zero carry");
                v = R,
                y++
            }
            if (f[y] !== " ") {
                for (var S = w - v; S !== w && b[S] === 0; )
                    S++;
                for (var k = new Uint8Array(g + (w - S)), E = g; S !== w; )
                    k[E++] = b[S++];
                return k
            }
        }
    }
    function m(f) {
        var y = u(f);
        if (y)
            return y;
        throw new Error(`Non-${e} character`)
    }
    return {
        encode: d,
        decodeUnsafe: u,
        decode: m
    }
}
var jg = qg
  , $g = jg
  , ah = s => {
    if (s instanceof Uint8Array && s.constructor.name === "Uint8Array")
        return s;
    if (s instanceof ArrayBuffer)
        return new Uint8Array(s);
    if (ArrayBuffer.isView(s))
        return new Uint8Array(s.buffer,s.byteOffset,s.byteLength);
    throw new Error("Unknown type, must be binary type")
}
  , Bg = s => new TextEncoder().encode(s)
  , Mg = s => new TextDecoder().decode(s)
  , Yn = class {
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
  , Jn = class {
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
        return ch(this, e)
    }
}
  , Xn = class {
    constructor(e) {
        this.decoders = e
    }
    or(e) {
        return ch(this, e)
    }
    decode(e) {
        let t = e[0]
          , i = this.decoders[t];
        if (i)
            return i.decode(e);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
}
  , ch = (s, e) => new Xn(j(j({}, s.decoders || {
    [s.prefix]: s
}), e.decoders || {
    [e.prefix]: e
}))
  , Zn = class {
    constructor(e, t, i, r) {
        this.name = e,
        this.prefix = t,
        this.baseEncode = i,
        this.baseDecode = r,
        this.encoder = new Yn(e,t,i),
        this.decoder = new Jn(e,t,r)
    }
    encode(e) {
        return this.encoder.encode(e)
    }
    decode(e) {
        return this.decoder.decode(e)
    }
}
  , br = ({name: s, prefix: e, encode: t, decode: i}) => new Zn(s,e,t,i)
  , ki = ({prefix: s, name: e, alphabet: t}) => {
    let {encode: i, decode: r} = $g(t, e);
    return br({
        prefix: s,
        name: e,
        encode: i,
        decode: n => ah(r(n))
    })
}
  , Vg = (s, e, t, i) => {
    let r = {};
    for (let p = 0; p < e.length; ++p)
        r[e[p]] = p;
    let n = s.length;
    for (; s[n - 1] === "="; )
        --n;
    let o = new Uint8Array(n * t / 8 | 0)
      , a = 0
      , c = 0
      , l = 0;
    for (let p = 0; p < n; ++p) {
        let d = r[s[p]];
        if (d === void 0)
            throw new SyntaxError(`Non-${i} character`);
        c = c << t | d,
        a += t,
        a >= 8 && (a -= 8,
        o[l++] = 255 & c >> a)
    }
    if (a >= t || 255 & c << 8 - a)
        throw new SyntaxError("Unexpected end of data");
    return o
}
  , Hg = (s, e, t) => {
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
  , Oe = ({name: s, prefix: e, bitsPerChar: t, alphabet: i}) => br({
    prefix: e,
    name: s,
    encode(r) {
        return Hg(r, i, t)
    },
    decode(r) {
        return Vg(r, i, t, s)
    }
})
  , zg = br({
    prefix: "\0",
    name: "identity",
    encode: s => Mg(s),
    decode: s => Bg(s)
})
  , Kg = Object.freeze({
    __proto__: null,
    identity: zg
})
  , Wg = Oe({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
})
  , Gg = Object.freeze({
    __proto__: null,
    base2: Wg
})
  , Yg = Oe({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
})
  , Jg = Object.freeze({
    __proto__: null,
    base8: Yg
})
  , Xg = ki({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
})
  , Zg = Object.freeze({
    __proto__: null,
    base10: Xg
})
  , Qg = Oe({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
})
  , ef = Oe({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
})
  , tf = Object.freeze({
    __proto__: null,
    base16: Qg,
    base16upper: ef
})
  , sf = Oe({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
})
  , rf = Oe({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
})
  , nf = Oe({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
})
  , of = Oe({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
})
  , af = Oe({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
})
  , cf = Oe({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
})
  , lf = Oe({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
})
  , hf = Oe({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
})
  , pf = Oe({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
})
  , df = Object.freeze({
    __proto__: null,
    base32: sf,
    base32upper: rf,
    base32pad: nf,
    base32padupper: of,
    base32hex: af,
    base32hexupper: cf,
    base32hexpad: lf,
    base32hexpadupper: hf,
    base32z: pf
})
  , uf = ki({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
})
  , gf = ki({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
})
  , ff = Object.freeze({
    __proto__: null,
    base36: uf,
    base36upper: gf
})
  , mf = ki({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
})
  , yf = ki({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
})
  , wf = Object.freeze({
    __proto__: null,
    base58btc: mf,
    base58flickr: yf
})
  , vf = Oe({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
})
  , bf = Oe({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
})
  , Ef = Oe({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
})
  , If = Oe({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
})
  , Cf = Object.freeze({
    __proto__: null,
    base64: vf,
    base64pad: bf,
    base64url: Ef,
    base64urlpad: If
})
  , lh = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}")
  , _f = lh.reduce( (s, e, t) => (s[t] = e,
s), [])
  , Pf = lh.reduce( (s, e, t) => (s[e.codePointAt(0)] = t,
s), []);
function Af(s) {
    return s.reduce( (e, t) => (e += _f[t],
    e), "")
}
function Nf(s) {
    let e = [];
    for (let t of s) {
        let i = Pf[t.codePointAt(0)];
        if (i === void 0)
            throw new Error(`Non-base256emoji character: ${t}`);
        e.push(i)
    }
    return new Uint8Array(e)
}
var Sf = br({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: Af,
    decode: Nf
})
  , Tf = Object.freeze({
    __proto__: null,
    base256emoji: Sf
})
  , Of = hh
  , Dl = 128
  , Rf = 127
  , xf = ~Rf
  , kf = Math.pow(2, 31);
function hh(s, e, t) {
    e = e || [],
    t = t || 0;
    for (var i = t; s >= kf; )
        e[t++] = s & 255 | Dl,
        s /= 128;
    for (; s & xf; )
        e[t++] = s & 255 | Dl,
        s >>>= 7;
    return e[t] = s | 0,
    hh.bytes = t - i + 1,
    e
}
var Uf = Qn
  , Df = 128
  , Fl = 127;
function Qn(s, i) {
    var t = 0, i = i || 0, r = 0, n = i, o, a = s.length;
    do {
        if (n >= a)
            throw Qn.bytes = 0,
            new RangeError("Could not decode varint");
        o = s[n++],
        t += r < 28 ? (o & Fl) << r : (o & Fl) * Math.pow(2, r),
        r += 7
    } while (o >= Df);
    return Qn.bytes = n - i,
    t
}
var Ff = Math.pow(2, 7)
  , Lf = Math.pow(2, 14)
  , qf = Math.pow(2, 21)
  , jf = Math.pow(2, 28)
  , $f = Math.pow(2, 35)
  , Bf = Math.pow(2, 42)
  , Mf = Math.pow(2, 49)
  , Vf = Math.pow(2, 56)
  , Hf = Math.pow(2, 63)
  , zf = function(s) {
    return s < Ff ? 1 : s < Lf ? 2 : s < qf ? 3 : s < jf ? 4 : s < $f ? 5 : s < Bf ? 6 : s < Mf ? 7 : s < Vf ? 8 : s < Hf ? 9 : 10
}
  , Kf = {
    encode: Of,
    decode: Uf,
    encodingLength: zf
}
  , ph = Kf
  , Ll = (s, e, t=0) => (ph.encode(s, e, t),
e)
  , ql = s => ph.encodingLength(s)
  , eo = (s, e) => {
    let t = e.byteLength
      , i = ql(s)
      , r = i + ql(t)
      , n = new Uint8Array(r + t);
    return Ll(s, n, 0),
    Ll(t, n, i),
    n.set(e, r),
    new to(s,t,e,n)
}
  , to = class {
    constructor(e, t, i, r) {
        this.code = e,
        this.size = t,
        this.digest = i,
        this.bytes = r
    }
}
  , dh = ({name: s, code: e, encode: t}) => new so(s,e,t)
  , so = class {
    constructor(e, t, i) {
        this.name = e,
        this.code = t,
        this.encode = i
    }
    digest(e) {
        if (e instanceof Uint8Array) {
            let t = this.encode(e);
            return t instanceof Uint8Array ? eo(this.code, t) : t.then(i => eo(this.code, i))
        } else
            throw Error("Unknown type, must be binary type")
    }
}
  , uh = s => e => h(void 0, null, function*() {
    return new Uint8Array(yield crypto.subtle.digest(s, e))
})
  , Wf = dh({
    name: "sha2-256",
    code: 18,
    encode: uh("SHA-256")
})
  , Gf = dh({
    name: "sha2-512",
    code: 19,
    encode: uh("SHA-512")
})
  , Yf = Object.freeze({
    __proto__: null,
    sha256: Wf,
    sha512: Gf
})
  , gh = 0
  , Jf = "identity"
  , fh = ah
  , Xf = s => eo(gh, fh(s))
  , Zf = {
    code: gh,
    name: Jf,
    encode: fh,
    digest: Xf
}
  , Qf = Object.freeze({
    __proto__: null,
    identity: Zf
});
new TextEncoder,
new TextDecoder;
var jl = j(j(j(j(j(j(j(j(j(j({}, Kg), Gg), Jg), Zg), tf), df), ff), wf), Cf), Tf);
j(j({}, Yf), Qf);
function em(s=0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(s) : new Uint8Array(s)
}
function mh(s, e, t, i) {
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
var $l = mh("utf8", "u", s => "u" + new TextDecoder("utf8").decode(s), s => new TextEncoder().encode(s.substring(1)))
  , Hn = mh("ascii", "a", s => {
    let e = "a";
    for (let t = 0; t < s.length; t++)
        e += String.fromCharCode(s[t]);
    return e
}
, s => {
    s = s.substring(1);
    let e = em(s.length);
    for (let t = 0; t < s.length; t++)
        e[t] = s.charCodeAt(t);
    return e
}
)
  , tm = j({
    utf8: $l,
    "utf-8": $l,
    hex: jl.base16,
    latin1: Hn,
    ascii: Hn,
    binary: Hn
}, jl);
function sm(s, e="utf8") {
    let t = tm[e];
    if (!t)
        throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(s, "utf8") : t.decoder.decode(`${t.prefix}${s}`)
}
var im = Object.defineProperty
  , rm = (s, e, t) => e in s ? im(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , It = (s, e, t) => rm(s, typeof e != "symbol" ? e + "" : e, t)
  , io = class {
    constructor(e, t) {
        this.core = e,
        this.logger = t,
        It(this, "keychain", new Map),
        It(this, "name", lg),
        It(this, "version", hg),
        It(this, "initialized", !1),
        It(this, "storagePrefix", _t),
        It(this, "init", () => h(this, null, function*() {
            if (!this.initialized) {
                let i = yield this.getKeyChain();
                typeof i < "u" && (this.keychain = i),
                this.initialized = !0
            }
        })),
        It(this, "has", i => (this.isInitialized(),
        this.keychain.has(i))),
        It(this, "set", (i, r) => h(this, null, function*() {
            this.isInitialized(),
            this.keychain.set(i, r),
            yield this.persist()
        })),
        It(this, "get", i => {
            this.isInitialized();
            let r = this.keychain.get(i);
            if (typeof r > "u") {
                let {message: n} = x("NO_MATCHING_KEY", `${this.name}: ${i}`);
                throw new Error(n)
            }
            return r
        }
        ),
        It(this, "del", i => h(this, null, function*() {
            this.isInitialized(),
            this.keychain.delete(i),
            yield this.persist()
        })),
        this.core = e,
        this.logger = Pe(t, this.name)
    }
    get context() {
        return Fe(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    setKeyChain(e) {
        return h(this, null, function*() {
            yield this.core.storage.setItem(this.storageKey, or(e))
        })
    }
    getKeyChain() {
        return h(this, null, function*() {
            let e = yield this.core.storage.getItem(this.storageKey);
            return typeof e < "u" ? ar(e) : void 0
        })
    }
    persist() {
        return h(this, null, function*() {
            yield this.setKeyChain(this.keychain)
        })
    }
    isInitialized() {
        if (!this.initialized) {
            let {message: e} = x("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
  , nm = Object.defineProperty
  , om = (s, e, t) => e in s ? nm(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Se = (s, e, t) => om(s, typeof e != "symbol" ? e + "" : e, t)
  , ro = class {
    constructor(e, t, i) {
        this.core = e,
        this.logger = t,
        Se(this, "name", ag),
        Se(this, "keychain"),
        Se(this, "randomSessionIdentifier", fr()),
        Se(this, "initialized", !1),
        Se(this, "init", () => h(this, null, function*() {
            this.initialized || (yield this.keychain.init(),
            this.initialized = !0)
        })),
        Se(this, "hasKeys", r => (this.isInitialized(),
        this.keychain.has(r))),
        Se(this, "getClientId", () => h(this, null, function*() {
            this.isInitialized();
            let r = yield this.getClientSeed()
              , n = jr(r);
            return pa(n.publicKey)
        })),
        Se(this, "generateKeyPair", () => {
            this.isInitialized();
            let r = tl();
            return this.setPrivateKey(r.publicKey, r.privateKey)
        }
        ),
        Se(this, "signJWT", r => h(this, null, function*() {
            this.isInitialized();
            let n = yield this.getClientSeed()
              , o = jr(n)
              , a = this.randomSessionIdentifier;
            return yield da(a, r, cg, o)
        })),
        Se(this, "generateSharedKey", (r, n, o) => {
            this.isInitialized();
            let a = this.getPrivateKey(r)
              , c = sl(a, n);
            return this.setSymKey(c, o)
        }
        ),
        Se(this, "setSymKey", (r, n) => h(this, null, function*() {
            this.isInitialized();
            let o = n || Ds(r);
            return yield this.keychain.set(o, r),
            o
        })),
        Se(this, "deleteKeyPair", r => h(this, null, function*() {
            this.isInitialized(),
            yield this.keychain.del(r)
        })),
        Se(this, "deleteSymKey", r => h(this, null, function*() {
            this.isInitialized(),
            yield this.keychain.del(r)
        })),
        Se(this, "encode", (r, n, o) => h(this, null, function*() {
            this.isInitialized();
            let a = kn(o)
              , c = ha(n);
            if (Dn(a))
                return cl(c, o?.encoding);
            if (Un(a)) {
                let u = a.senderPublicKey
                  , m = a.receiverPublicKey;
                r = yield this.generateSharedKey(u, m)
            }
            let l = this.getSymKey(r)
              , {type: p, senderPublicKey: d} = a;
            return ol({
                type: p,
                symKey: l,
                message: c,
                senderPublicKey: d,
                encoding: o?.encoding
            })
        })),
        Se(this, "decode", (r, n, o) => h(this, null, function*() {
            this.isInitialized();
            let a = pl(n, o);
            if (Dn(a)) {
                let c = ll(n, o?.encoding);
                return qr(c)
            }
            if (Un(a)) {
                let c = a.receiverPublicKey
                  , l = a.senderPublicKey;
                r = yield this.generateSharedKey(c, l)
            }
            try {
                let c = this.getSymKey(r)
                  , l = al({
                    symKey: c,
                    encoded: n,
                    encoding: o?.encoding
                });
                return qr(l)
            } catch (c) {
                this.logger.error(`Failed to decode message from topic: '${r}', clientId: '${yield this.getClientId()}'`),
                this.logger.error(c)
            }
        })),
        Se(this, "getPayloadType", (r, n=Ye) => {
            let o = Fs({
                encoded: r,
                encoding: n
            });
            return Gt(o.type)
        }
        ),
        Se(this, "getPayloadSenderPublicKey", (r, n=Ye) => {
            let o = Fs({
                encoded: r,
                encoding: n
            });
            return o.senderPublicKey ? xe(o.senderPublicKey, ke) : void 0
        }
        ),
        this.core = e,
        this.logger = Pe(t, this.name),
        this.keychain = i || new io(this.core,this.logger)
    }
    get context() {
        return Fe(this.logger)
    }
    setPrivateKey(e, t) {
        return h(this, null, function*() {
            return yield this.keychain.set(e, t),
            e
        })
    }
    getPrivateKey(e) {
        return this.keychain.get(e)
    }
    getClientSeed() {
        return h(this, null, function*() {
            let e = "";
            try {
                e = this.keychain.get(xl)
            } catch {
                e = fr(),
                yield this.keychain.set(xl, e)
            }
            return sm(e, "base16")
        })
    }
    getSymKey(e) {
        return this.keychain.get(e)
    }
    isInitialized() {
        if (!this.initialized) {
            let {message: e} = x("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
  , am = Object.defineProperty
  , cm = Object.defineProperties
  , lm = Object.getOwnPropertyDescriptors
  , Bl = Object.getOwnPropertySymbols
  , hm = Object.prototype.hasOwnProperty
  , pm = Object.prototype.propertyIsEnumerable
  , no = (s, e, t) => e in s ? am(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , dm = (s, e) => {
    for (var t in e || (e = {}))
        hm.call(e, t) && no(s, t, e[t]);
    if (Bl)
        for (var t of Bl(e))
            pm.call(e, t) && no(s, t, e[t]);
    return s
}
  , um = (s, e) => cm(s, lm(e))
  , Je = (s, e, t) => no(s, typeof e != "symbol" ? e + "" : e, t)
  , oo = class extends Vi {
    constructor(e, t) {
        super(e, t),
        this.logger = e,
        this.core = t,
        Je(this, "messages", new Map),
        Je(this, "messagesWithoutClientAck", new Map),
        Je(this, "name", pg),
        Je(this, "version", dg),
        Je(this, "initialized", !1),
        Je(this, "storagePrefix", _t),
        Je(this, "init", () => h(this, null, function*() {
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
        Je(this, "set", (i, r, n) => h(this, null, function*() {
            this.isInitialized();
            let o = tt(r)
              , a = this.messages.get(i);
            if (typeof a > "u" && (a = {}),
            typeof a[o] < "u")
                return o;
            if (a[o] = r,
            this.messages.set(i, a),
            n === wr.inbound) {
                let c = this.messagesWithoutClientAck.get(i) || {};
                this.messagesWithoutClientAck.set(i, um(dm({}, c), {
                    [o]: r
                }))
            }
            return yield this.persist(),
            o
        })),
        Je(this, "get", i => {
            this.isInitialized();
            let r = this.messages.get(i);
            return typeof r > "u" && (r = {}),
            r
        }
        ),
        Je(this, "getWithoutAck", i => {
            this.isInitialized();
            let r = {};
            for (let n of i) {
                let o = this.messagesWithoutClientAck.get(n) || {};
                r[n] = Object.values(o)
            }
            return r
        }
        ),
        Je(this, "has", (i, r) => {
            this.isInitialized();
            let n = this.get(i)
              , o = tt(r);
            return typeof n[o] < "u"
        }
        ),
        Je(this, "ack", (i, r) => h(this, null, function*() {
            this.isInitialized();
            let n = this.messagesWithoutClientAck.get(i);
            if (typeof n > "u")
                return;
            let o = tt(r);
            delete n[o],
            Object.keys(n).length === 0 ? this.messagesWithoutClientAck.delete(i) : this.messagesWithoutClientAck.set(i, n),
            yield this.persist()
        })),
        Je(this, "del", i => h(this, null, function*() {
            this.isInitialized(),
            this.messages.delete(i),
            this.messagesWithoutClientAck.delete(i),
            yield this.persist()
        })),
        this.logger = Pe(e, this.name),
        this.core = t
    }
    get context() {
        return Fe(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get storageKeyWithoutClientAck() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name + "_withoutClientAck"
    }
    setRelayerMessages(e) {
        return h(this, null, function*() {
            yield this.core.storage.setItem(this.storageKey, or(e))
        })
    }
    setRelayerMessagesWithoutClientAck(e) {
        return h(this, null, function*() {
            yield this.core.storage.setItem(this.storageKeyWithoutClientAck, or(e))
        })
    }
    getRelayerMessages() {
        return h(this, null, function*() {
            let e = yield this.core.storage.getItem(this.storageKey);
            return typeof e < "u" ? ar(e) : void 0
        })
    }
    getRelayerMessagesWithoutClientAck() {
        return h(this, null, function*() {
            let e = yield this.core.storage.getItem(this.storageKeyWithoutClientAck);
            return typeof e < "u" ? ar(e) : void 0
        })
    }
    persist() {
        return h(this, null, function*() {
            yield this.setRelayerMessages(this.messages),
            yield this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck)
        })
    }
    isInitialized() {
        if (!this.initialized) {
            let {message: e} = x("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
  , gm = Object.defineProperty
  , fm = Object.defineProperties
  , mm = Object.getOwnPropertyDescriptors
  , Ml = Object.getOwnPropertySymbols
  , ym = Object.prototype.hasOwnProperty
  , wm = Object.prototype.propertyIsEnumerable
  , ao = (s, e, t) => e in s ? gm(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , yr = (s, e) => {
    for (var t in e || (e = {}))
        ym.call(e, t) && ao(s, t, e[t]);
    if (Ml)
        for (var t of Ml(e))
            wm.call(e, t) && ao(s, t, e[t]);
    return s
}
  , zn = (s, e) => fm(s, mm(e))
  , dt = (s, e, t) => ao(s, typeof e != "symbol" ? e + "" : e, t)
  , co = class extends Hi {
    constructor(e, t) {
        super(e, t),
        this.relayer = e,
        this.logger = t,
        dt(this, "events", new $t.EventEmitter),
        dt(this, "name", ug),
        dt(this, "queue", new Map),
        dt(this, "publishTimeout", (0,
        $.toMiliseconds)($.ONE_MINUTE)),
        dt(this, "initialPublishTimeout", (0,
        $.toMiliseconds)($.ONE_SECOND * 15)),
        dt(this, "needsTransportRestart", !1),
        dt(this, "publish", (i, r, n) => h(this, null, function*() {
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
            let a = n?.ttl || kl
              , c = Pi(n)
              , l = n?.prompt || !1
              , p = n?.tag || 0
              , d = n?.id || Mt().toString()
              , u = {
                topic: i,
                message: r,
                opts: {
                    ttl: a,
                    relay: c,
                    prompt: l,
                    tag: p,
                    id: d,
                    attestation: n?.attestation,
                    tvf: n?.tvf
                }
            }
              , m = `Failed to publish payload, please try again. id:${d} tag:${p}`;
            try {
                let f = new Promise(y => h(this, null, function*() {
                    let g = ({id: w}) => {
                        u.opts.id === w && (this.removeRequestFromQueue(w),
                        this.relayer.events.removeListener(we.publish, g),
                        y(u))
                    }
                    ;
                    this.relayer.events.on(we.publish, g);
                    let v = qt(new Promise( (w, b) => {
                        this.rpcPublish({
                            topic: i,
                            message: r,
                            ttl: a,
                            prompt: l,
                            tag: p,
                            id: d,
                            attestation: n?.attestation,
                            tvf: n?.tvf
                        }).then(w).catch(P => {
                            this.logger.warn(P, P?.message),
                            b(P)
                        }
                        )
                    }
                    ), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${d} tag:${p}`);
                    try {
                        yield v,
                        this.events.removeListener(we.publish, g)
                    } catch (w) {
                        this.queue.set(d, zn(yr({}, u), {
                            attempt: 1
                        })),
                        this.logger.warn(w, w?.message)
                    }
                }));
                this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        id: d,
                        topic: i,
                        message: r,
                        opts: n
                    }
                }),
                yield qt(f, this.publishTimeout, m)
            } catch (f) {
                if (this.logger.debug("Failed to Publish Payload"),
                this.logger.error(f),
                (o = n?.internal) != null && o.throwOnFailedPublish)
                    throw f
            } finally {
                this.queue.delete(d)
            }
        })),
        dt(this, "on", (i, r) => {
            this.events.on(i, r)
        }
        ),
        dt(this, "once", (i, r) => {
            this.events.once(i, r)
        }
        ),
        dt(this, "off", (i, r) => {
            this.events.off(i, r)
        }
        ),
        dt(this, "removeListener", (i, r) => {
            this.events.removeListener(i, r)
        }
        ),
        this.relayer = e,
        this.logger = Pe(t, this.name),
        this.registerEventListeners()
    }
    get context() {
        return Fe(this.logger)
    }
    rpcPublish(e) {
        return h(this, null, function*() {
            var t, i, r, n;
            let {topic: o, message: a, ttl: c=kl, prompt: l, tag: p, id: d, attestation: u, tvf: m} = e
              , f = {
                method: Ls(Pi().protocol).publish,
                params: yr({
                    topic: o,
                    message: a,
                    ttl: c,
                    prompt: l,
                    tag: p,
                    attestation: u
                }, m),
                id: d
            };
            ye((t = f.params) == null ? void 0 : t.prompt) && ((i = f.params) == null || delete i.prompt),
            ye((r = f.params) == null ? void 0 : r.tag) && ((n = f.params) == null || delete n.tag),
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
                type: "message",
                direction: "outgoing",
                request: f
            });
            let y = yield this.relayer.request(f);
            return this.relayer.events.emit(we.publish, e),
            this.logger.debug("Successfully Published Payload"),
            y
        })
    }
    removeRequestFromQueue(e) {
        this.queue.delete(e)
    }
    checkQueue() {
        this.queue.forEach( (e, t) => h(this, null, function*() {
            let i = e.attempt + 1;
            this.queue.set(t, zn(yr({}, e), {
                attempt: i
            }));
            let {topic: r, message: n, opts: o, attestation: a} = e;
            this.logger.warn({}, `Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${i}`),
            yield this.rpcPublish(zn(yr({}, e), {
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
        this.relayer.core.heartbeat.on(ss.pulse, () => {
            if (this.needsTransportRestart) {
                this.needsTransportRestart = !1,
                this.relayer.events.emit(we.connection_stalled);
                return
            }
            this.checkQueue()
        }
        ),
        this.relayer.on(we.message_ack, e => {
            this.removeRequestFromQueue(e.id.toString())
        }
        )
    }
}
  , vm = Object.defineProperty
  , bm = (s, e, t) => e in s ? vm(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , js = (s, e, t) => bm(s, typeof e != "symbol" ? e + "" : e, t)
  , lo = class {
    constructor() {
        js(this, "map", new Map),
        js(this, "set", (e, t) => {
            let i = this.get(e);
            this.exists(e, t) || this.map.set(e, [...i, t])
        }
        ),
        js(this, "get", e => this.map.get(e) || []),
        js(this, "exists", (e, t) => this.get(e).includes(t)),
        js(this, "delete", (e, t) => {
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
        js(this, "clear", () => {
            this.map.clear()
        }
        )
    }
    get topics() {
        return Array.from(this.map.keys())
    }
}
  , Em = Object.defineProperty
  , Im = Object.defineProperties
  , Cm = Object.getOwnPropertyDescriptors
  , Vl = Object.getOwnPropertySymbols
  , _m = Object.prototype.hasOwnProperty
  , Pm = Object.prototype.propertyIsEnumerable
  , ho = (s, e, t) => e in s ? Em(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Ti = (s, e) => {
    for (var t in e || (e = {}))
        _m.call(e, t) && ho(s, t, e[t]);
    if (Vl)
        for (var t of Vl(e))
            Pm.call(e, t) && ho(s, t, e[t]);
    return s
}
  , Kn = (s, e) => Im(s, Cm(e))
  , ie = (s, e, t) => ho(s, typeof e != "symbol" ? e + "" : e, t)
  , po = class extends Wi {
    constructor(e, t) {
        super(e, t),
        this.relayer = e,
        this.logger = t,
        ie(this, "subscriptions", new Map),
        ie(this, "topicMap", new lo),
        ie(this, "events", new $t.EventEmitter),
        ie(this, "name", bg),
        ie(this, "version", Eg),
        ie(this, "pending", new Map),
        ie(this, "cached", []),
        ie(this, "initialized", !1),
        ie(this, "storagePrefix", _t),
        ie(this, "subscribeTimeout", (0,
        $.toMiliseconds)($.ONE_MINUTE)),
        ie(this, "initialSubscribeTimeout", (0,
        $.toMiliseconds)($.ONE_SECOND * 15)),
        ie(this, "clientId"),
        ie(this, "batchSubscribeTopicsLimit", 500),
        ie(this, "init", () => h(this, null, function*() {
            this.initialized || (this.logger.trace("Initialized"),
            this.registerEventListeners(),
            yield this.restore()),
            this.initialized = !0
        })),
        ie(this, "subscribe", (i, r) => h(this, null, function*() {
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
                let n = Pi(r)
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
        ie(this, "unsubscribe", (i, r) => h(this, null, function*() {
            this.isInitialized(),
            typeof r?.id < "u" ? yield this.unsubscribeById(i, r.id, r) : yield this.unsubscribeByTopic(i, r)
        })),
        ie(this, "isSubscribed", i => new Promise(r => {
            r(this.topicMap.topics.includes(i))
        }
        )),
        ie(this, "isKnownTopic", i => new Promise(r => {
            r(this.topicMap.topics.includes(i) || this.pending.has(i) || this.cached.some(n => n.topic === i))
        }
        )),
        ie(this, "on", (i, r) => {
            this.events.on(i, r)
        }
        ),
        ie(this, "once", (i, r) => {
            this.events.once(i, r)
        }
        ),
        ie(this, "off", (i, r) => {
            this.events.off(i, r)
        }
        ),
        ie(this, "removeListener", (i, r) => {
            this.events.removeListener(i, r)
        }
        ),
        ie(this, "start", () => h(this, null, function*() {
            yield this.onConnect()
        })),
        ie(this, "stop", () => h(this, null, function*() {
            yield this.onDisconnect()
        })),
        ie(this, "restart", () => h(this, null, function*() {
            yield this.restore(),
            yield this.onRestart()
        })),
        ie(this, "checkPending", () => h(this, null, function*() {
            if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected))
                return;
            let i = [];
            this.pending.forEach(r => {
                i.push(r)
            }
            ),
            yield this.batchSubscribe(i)
        })),
        ie(this, "registerEventListeners", () => {
            this.relayer.core.heartbeat.on(ss.pulse, () => h(this, null, function*() {
                yield this.checkPending()
            })),
            this.events.on(Xe.created, i => h(this, null, function*() {
                let r = Xe.created;
                this.logger.info(`Emitting ${r}`),
                this.logger.debug({
                    type: "event",
                    event: r,
                    data: i
                }),
                yield this.persist()
            })),
            this.events.on(Xe.deleted, i => h(this, null, function*() {
                let r = Xe.deleted;
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
        this.logger = Pe(t, this.name),
        this.clientId = ""
    }
    get context() {
        return Fe(this.logger)
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
        return h(this, null, function*() {
            let i = this.topicMap.get(e);
            yield Promise.all(i.map(r => h(this, null, function*() {
                return yield this.unsubscribeById(e, r, t)
            })))
        })
    }
    unsubscribeById(e, t, i) {
        return h(this, null, function*() {
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
                let r = Pi(i);
                yield this.restartToComplete({
                    topic: e,
                    id: t,
                    relay: r
                }),
                yield this.rpcUnsubscribe(e, t, r);
                let n = ee("USER_DISCONNECTED", `${this.name}, ${e}`);
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
        return h(this, null, function*() {
            var r;
            (!i || i?.transportType === ae.relay) && (yield this.restartToComplete({
                topic: e,
                id: e,
                relay: t
            }));
            let n = {
                method: Ls(t.protocol).subscribe,
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
                if (i?.transportType === ae.link_mode)
                    return setTimeout( () => {
                        (this.relayer.connected || this.relayer.connecting) && this.relayer.request(n).catch(p => this.logger.warn(p))
                    }
                    , (0,
                    $.toMiliseconds)($.ONE_SECOND)),
                    a;
                let c = new Promise(p => h(this, null, function*() {
                    let d = u => {
                        u.topic === e && (this.events.removeListener(Xe.created, d),
                        p(u.id))
                    }
                    ;
                    this.events.on(Xe.created, d);
                    try {
                        let u = yield qt(new Promise( (m, f) => {
                            this.relayer.request(n).catch(y => {
                                this.logger.warn(y, y?.message),
                                f(y)
                            }
                            ).then(m)
                        }
                        ), this.initialSubscribeTimeout, `Subscribing to ${e} failed, please try again`);
                        this.events.removeListener(Xe.created, d),
                        p(u)
                    } catch {}
                }))
                  , l = yield qt(c, this.subscribeTimeout, `Subscribing to ${e} failed, please try again`);
                if (!l && o)
                    throw new Error(`Subscribing to ${e} failed, please try again`);
                return l ? a : null
            } catch (a) {
                if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
                this.relayer.events.emit(we.connection_stalled),
                o)
                    throw a
            }
            return null
        })
    }
    rpcBatchSubscribe(e) {
        return h(this, null, function*() {
            if (!e.length)
                return;
            let t = e[0].relay
              , i = {
                method: Ls(t.protocol).batchSubscribe,
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
                yield yield qt(new Promise(r => {
                    this.relayer.request(i).catch(n => this.logger.warn(n)).then(r)
                }
                ), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again")
            } catch {
                this.relayer.events.emit(we.connection_stalled)
            }
        })
    }
    rpcBatchFetchMessages(e) {
        return h(this, null, function*() {
            if (!e.length)
                return;
            let t = e[0].relay
              , i = {
                method: Ls(t.protocol).batchFetchMessages,
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
                r = yield yield qt(new Promise( (n, o) => {
                    this.relayer.request(i).catch(a => {
                        this.logger.warn(a),
                        o(a)
                    }
                    ).then(n)
                }
                ), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again")
            } catch {
                this.relayer.events.emit(we.connection_stalled)
            }
            return r
        })
    }
    rpcUnsubscribe(e, t, i) {
        let r = {
            method: Ls(i.protocol).unsubscribe,
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
        this.setSubscription(e, Kn(Ti({}, t), {
            id: e
        })),
        this.pending.delete(t.topic)
    }
    onBatchSubscribe(e) {
        e.length && e.forEach(t => {
            this.setSubscription(t.id, Ti({}, t)),
            this.pending.delete(t.topic)
        }
        )
    }
    onUnsubscribe(e, t, i) {
        return h(this, null, function*() {
            this.events.removeAllListeners(t),
            this.hasSubscription(t, e) && this.deleteSubscription(t, i),
            yield this.relayer.messages.del(e)
        })
    }
    setRelayerSubscriptions(e) {
        return h(this, null, function*() {
            yield this.relayer.core.storage.setItem(this.storageKey, e)
        })
    }
    getRelayerSubscriptions() {
        return h(this, null, function*() {
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
        this.subscriptions.set(e, Ti({}, t)),
        this.topicMap.set(t.topic, e),
        this.events.emit(Xe.created, t)
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
            let {message: i} = x("NO_MATCHING_KEY", `${this.name}: ${e}`);
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
        this.events.emit(Xe.deleted, Kn(Ti({}, i), {
            reason: t
        }))
    }
    persist() {
        return h(this, null, function*() {
            yield this.setRelayerSubscriptions(this.values),
            this.events.emit(Xe.sync)
        })
    }
    onRestart() {
        return h(this, null, function*() {
            if (this.cached.length) {
                let e = [...this.cached]
                  , t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                for (let i = 0; i < t; i++) {
                    let r = e.splice(0, this.batchSubscribeTopicsLimit);
                    yield this.batchSubscribe(r)
                }
            }
            this.events.emit(Xe.resubscribed)
        })
    }
    restore() {
        return h(this, null, function*() {
            try {
                let e = yield this.getRelayerSubscriptions();
                if (typeof e > "u" || !e.length)
                    return;
                if (this.subscriptions.size) {
                    let {message: t} = x("RESTORE_WILL_OVERRIDE", this.name);
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
        return h(this, null, function*() {
            e.length && (yield this.rpcBatchSubscribe(e),
            this.onBatchSubscribe(yield Promise.all(e.map(t => h(this, null, function*() {
                return Kn(Ti({}, t), {
                    id: yield this.getSubscriptionId(t.topic)
                })
            })))))
        })
    }
    batchFetchMessages(e) {
        return h(this, null, function*() {
            if (!e.length)
                return;
            this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
            let t = yield this.rpcBatchFetchMessages(e);
            t && t.messages && (yield Nc((0,
            $.toMiliseconds)($.ONE_SECOND)),
            yield this.relayer.handleBatchMessageEvents(t.messages))
        })
    }
    onConnect() {
        return h(this, null, function*() {
            yield this.restart(),
            this.reset()
        })
    }
    onDisconnect() {
        this.onDisable()
    }
    isInitialized() {
        if (!this.initialized) {
            let {message: e} = x("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    restartToComplete(e) {
        return h(this, null, function*() {
            !this.relayer.connected && !this.relayer.connecting && (this.cached.push(e),
            yield this.relayer.transportOpen())
        })
    }
    getClientId() {
        return h(this, null, function*() {
            return this.clientId || (this.clientId = yield this.relayer.core.crypto.getClientId()),
            this.clientId
        })
    }
    getSubscriptionId(e) {
        return h(this, null, function*() {
            return tt(e + (yield this.getClientId()))
        })
    }
}
  , Am = Object.defineProperty
  , Hl = Object.getOwnPropertySymbols
  , Nm = Object.prototype.hasOwnProperty
  , Sm = Object.prototype.propertyIsEnumerable
  , uo = (s, e, t) => e in s ? Am(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , zl = (s, e) => {
    for (var t in e || (e = {}))
        Nm.call(e, t) && uo(s, t, e[t]);
    if (Hl)
        for (var t of Hl(e))
            Sm.call(e, t) && uo(s, t, e[t]);
    return s
}
  , Z = (s, e, t) => uo(s, typeof e != "symbol" ? e + "" : e, t)
  , go = class extends zi {
    constructor(e) {
        super(e),
        Z(this, "protocol", "wc"),
        Z(this, "version", 2),
        Z(this, "core"),
        Z(this, "logger"),
        Z(this, "events", new $t.EventEmitter),
        Z(this, "provider"),
        Z(this, "messages"),
        Z(this, "subscriber"),
        Z(this, "publisher"),
        Z(this, "name", fg),
        Z(this, "transportExplicitlyClosed", !1),
        Z(this, "initialized", !1),
        Z(this, "connectionAttemptInProgress", !1),
        Z(this, "relayUrl"),
        Z(this, "projectId"),
        Z(this, "packageName"),
        Z(this, "bundleId"),
        Z(this, "hasExperiencedNetworkDisruption", !1),
        Z(this, "pingTimeout"),
        Z(this, "heartBeatTimeout", (0,
        $.toMiliseconds)($.THIRTY_SECONDS + $.FIVE_SECONDS)),
        Z(this, "reconnectTimeout"),
        Z(this, "connectPromise"),
        Z(this, "reconnectInProgress", !1),
        Z(this, "requestsInFlight", []),
        Z(this, "connectTimeout", (0,
        $.toMiliseconds)($.ONE_SECOND * 15)),
        Z(this, "request", t => h(this, null, function*() {
            var i, r;
            this.logger.debug("Publishing Request Payload");
            let n = t.id || Mt().toString();
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
        Z(this, "resetPingTimeout", () => {
            mi() && (clearTimeout(this.pingTimeout),
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
        Z(this, "onPayloadHandler", t => {
            this.onProviderPayload(t),
            this.resetPingTimeout()
        }
        ),
        Z(this, "onConnectHandler", () => {
            this.logger.warn({}, "Relayer connected \u{1F6DC}"),
            this.startPingTimeout(),
            this.events.emit(we.connect)
        }
        ),
        Z(this, "onDisconnectHandler", () => {
            this.logger.warn({}, "Relayer disconnected \u{1F6D1}"),
            this.requestsInFlight = [],
            this.onProviderDisconnect()
        }
        ),
        Z(this, "onProviderErrorHandler", t => {
            this.logger.fatal(`Fatal socket error: ${t.message}`),
            this.events.emit(we.error, t),
            this.logger.fatal("Fatal socket error received, closing transport"),
            this.transportClose()
        }
        ),
        Z(this, "registerProviderListeners", () => {
            this.provider.on(st.payload, this.onPayloadHandler),
            this.provider.on(st.connect, this.onConnectHandler),
            this.provider.on(st.disconnect, this.onDisconnectHandler),
            this.provider.on(st.error, this.onProviderErrorHandler)
        }
        ),
        this.core = e.core,
        this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? Pe(e.logger, this.name) : (0,
        ws.default)(is({
            level: e.logger || gg
        })),
        this.messages = new oo(this.logger,e.core),
        this.subscriber = new po(this,this.logger),
        this.publisher = new co(this,this.logger),
        this.relayUrl = e?.relayUrl || nh,
        this.projectId = e.projectId,
        yc() ? this.packageName = vn() : wc() && (this.bundleId = vn()),
        this.provider = {}
    }
    init() {
        return h(this, null, function*() {
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
        return Fe(this.logger)
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
        return h(this, null, function*() {
            this.isInitialized(),
            yield this.publisher.publish(e, t, i),
            yield this.recordMessageEvent({
                topic: e,
                message: t,
                publishedAt: Date.now(),
                transportType: ae.relay
            }, wr.outbound)
        })
    }
    subscribe(e, t) {
        return h(this, null, function*() {
            var i, r, n;
            this.isInitialized(),
            (!(t != null && t.transportType) || t?.transportType === "relay") && (yield this.toEstablishConnection());
            let o = typeof ((i = t?.internal) == null ? void 0 : i.throwOnFailedPublish) > "u" ? !0 : (r = t?.internal) == null ? void 0 : r.throwOnFailedPublish, a = ((n = this.subscriber.topicMap.get(e)) == null ? void 0 : n[0]) || "", c, l = p => {
                p.topic === e && (this.subscriber.off(Xe.created, l),
                c())
            }
            ;
            return yield Promise.all([new Promise(p => {
                c = p,
                this.subscriber.on(Xe.created, l)
            }
            ), new Promise( (p, d) => h(this, null, function*() {
                a = (yield this.subscriber.subscribe(e, zl({
                    internal: {
                        throwOnFailedPublish: o
                    }
                }, t)).catch(u => {
                    o && d(u)
                }
                )) || a,
                p()
            }))]),
            a
        })
    }
    unsubscribe(e, t) {
        return h(this, null, function*() {
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
        return h(this, null, function*() {
            this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? yield qt(this.provider.disconnect(), 2e3, "provider.disconnect()").catch( () => this.onProviderDisconnect()) : this.onProviderDisconnect()
        })
    }
    transportClose() {
        return h(this, null, function*() {
            this.transportExplicitlyClosed = !0,
            yield this.transportDisconnect()
        })
    }
    transportOpen(e) {
        return h(this, null, function*() {
            if (!this.subscriber.hasAnyTopics) {
                this.logger.warn("Starting WS connection skipped because the client has no topics to work with.");
                return
            }
            if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."),
            yield this.connectPromise,
            this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise( (t, i) => h(this, null, function*() {
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
        return h(this, null, function*() {
            this.logger.debug({}, "Restarting transport..."),
            !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl,
            yield this.confirmOnlineStateOrThrow(),
            yield this.transportClose(),
            yield this.transportOpen())
        })
    }
    confirmOnlineStateOrThrow() {
        return h(this, null, function*() {
            if (!(yield Vn()))
                throw new Error("No internet connection detected. Please restart your network and try again.")
        })
    }
    handleBatchMessageEvents(e) {
        return h(this, null, function*() {
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
        return h(this, null, function*() {
            let {topic: i} = e;
            if (!t.sessionExists) {
                let r = de($.FIVE_MINUTES)
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
            this.events.emit(we.message, e),
            yield this.recordMessageEvent(e, wr.inbound)
        })
    }
    connect(e) {
        return h(this, null, function*() {
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
                    yield new Promise( (i, r) => h(this, null, function*() {
                        let n = () => {
                            r(new Error("Connection interrupted while trying to subscribe"))
                        }
                        ;
                        this.provider.once(st.disconnect, n),
                        yield qt(new Promise( (o, a) => {
                            this.provider.connect().then(o).catch(a)
                        }
                        ), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch(o => {
                            r(o)
                        }
                        ).finally( () => {
                            this.provider.off(st.disconnect, n),
                            clearTimeout(this.reconnectTimeout)
                        }
                        ),
                        yield new Promise( (o, a) => h(this, null, function*() {
                            let c = () => {
                                a(new Error("Connection interrupted while trying to subscribe"))
                            }
                            ;
                            this.provider.once(st.disconnect, c),
                            yield this.subscriber.start().then(o).catch(a).finally( () => {
                                this.provider.off(st.disconnect, c)
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
                $.toMiliseconds)(t * 1))),
                t++
            }
        })
    }
    startPingTimeout() {
        var e, t, i, r, n;
        if (mi())
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
        return h(this, null, function*() {
            this.provider.connection && this.unregisterProviderListeners();
            let e = yield this.core.crypto.signJWT(this.relayUrl);
            this.provider = new je(new ya(bc({
                sdkVersion: Gn,
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
        return h(this, null, function*() {
            let {topic: i, message: r} = e;
            yield this.messages.set(i, r, t)
        })
    }
    shouldIgnoreMessageEvent(e) {
        return h(this, null, function*() {
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
        return h(this, null, function*() {
            if (this.logger.debug("Incoming Relay Payload"),
            this.logger.trace({
                type: "payload",
                direction: "incoming",
                payload: e
            }),
            ni(e)) {
                if (!e.method.endsWith(mg))
                    return;
                let t = e.params
                  , {topic: i, message: r, publishedAt: n, attestation: o} = t.data
                  , a = {
                    topic: i,
                    message: r,
                    publishedAt: n,
                    transportType: ae.relay,
                    attestation: o
                };
                this.logger.debug("Emitting Relayer Payload"),
                this.logger.trace(zl({
                    type: "event",
                    event: t.id
                }, a)),
                this.events.emit(t.id, a),
                yield this.acknowledgePayload(e),
                yield this.onMessageEvent(a)
            } else
                oi(e) && this.events.emit(we.message_ack, e)
        })
    }
    onMessageEvent(e) {
        return h(this, null, function*() {
            (yield this.shouldIgnoreMessageEvent(e)) || (yield this.recordMessageEvent(e, wr.inbound),
            this.events.emit(we.message, e))
        })
    }
    acknowledgePayload(e) {
        return h(this, null, function*() {
            let t = rs(e.id, !0);
            yield this.provider.connection.send(t)
        })
    }
    unregisterProviderListeners() {
        this.provider.off(st.payload, this.onPayloadHandler),
        this.provider.off(st.connect, this.onConnectHandler),
        this.provider.off(st.disconnect, this.onDisconnectHandler),
        this.provider.off(st.error, this.onProviderErrorHandler),
        clearTimeout(this.pingTimeout)
    }
    registerEventListeners() {
        return h(this, null, function*() {
            let e = yield Vn();
            Ol(t => h(this, null, function*() {
                e !== t && (e = t,
                t ? yield this.transportOpen().catch(i => this.logger.error(i, i?.message)) : (this.hasExperiencedNetworkDisruption = !0,
                yield this.transportDisconnect(),
                this.transportExplicitlyClosed = !1))
            })),
            this.core.heartbeat.on(ss.pulse, () => h(this, null, function*() {
                if (!this.transportExplicitlyClosed && !this.connected && Rl())
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
        return h(this, null, function*() {
            clearTimeout(this.pingTimeout),
            this.events.emit(we.disconnect),
            this.connectionAttemptInProgress = !1,
            !this.reconnectInProgress && (this.reconnectInProgress = !0,
            yield this.subscriber.stop(),
            this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout( () => h(this, null, function*() {
                yield this.transportOpen().catch(e => this.logger.error(e, e?.message)),
                this.reconnectTimeout = void 0,
                this.reconnectInProgress = !1
            }), (0,
            $.toMiliseconds)(yg)))))
        })
    }
    isInitialized() {
        if (!this.initialized) {
            let {message: e} = x("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    toEstablishConnection() {
        return h(this, null, function*() {
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
function Tm() {}
function Kl(s) {
    if (!s || typeof s != "object")
        return !1;
    let e = Object.getPrototypeOf(s);
    return e === null || e === Object.prototype || Object.getPrototypeOf(e) === null ? Object.prototype.toString.call(s) === "[object Object]" : !1
}
function Wl(s) {
    return Object.getOwnPropertySymbols(s).filter(e => Object.prototype.propertyIsEnumerable.call(s, e))
}
function Gl(s) {
    return s == null ? s === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(s)
}
var Om = "[object RegExp]"
  , Rm = "[object String]"
  , xm = "[object Number]"
  , km = "[object Boolean]"
  , Yl = "[object Arguments]"
  , Um = "[object Symbol]"
  , Dm = "[object Date]"
  , Fm = "[object Map]"
  , Lm = "[object Set]"
  , qm = "[object Array]"
  , jm = "[object Function]"
  , $m = "[object ArrayBuffer]"
  , Wn = "[object Object]"
  , Bm = "[object Error]"
  , Mm = "[object DataView]"
  , Vm = "[object Uint8Array]"
  , Hm = "[object Uint8ClampedArray]"
  , zm = "[object Uint16Array]"
  , Km = "[object Uint32Array]"
  , Wm = "[object BigUint64Array]"
  , Gm = "[object Int8Array]"
  , Ym = "[object Int16Array]"
  , Jm = "[object Int32Array]"
  , Xm = "[object BigInt64Array]"
  , Zm = "[object Float32Array]"
  , Qm = "[object Float64Array]";
function ey(s, e) {
    return s === e || Number.isNaN(s) && Number.isNaN(e)
}
function ty(s, e, t) {
    return Ri(s, e, void 0, void 0, void 0, void 0, t)
}
function Ri(s, e, t, i, r, n, o) {
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
            return xi(s, e, n, o)
        }
    return xi(s, e, n, o)
}
function xi(s, e, t, i) {
    if (Object.is(s, e))
        return !0;
    let r = Gl(s)
      , n = Gl(e);
    if (r === Yl && (r = Wn),
    n === Yl && (n = Wn),
    r !== n)
        return !1;
    switch (r) {
    case Rm:
        return s.toString() === e.toString();
    case xm:
        {
            let c = s.valueOf()
              , l = e.valueOf();
            return ey(c, l)
        }
    case km:
    case Dm:
    case Um:
        return Object.is(s.valueOf(), e.valueOf());
    case Om:
        return s.source === e.source && s.flags === e.flags;
    case jm:
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
        case Fm:
            {
                if (s.size !== e.size)
                    return !1;
                for (let[c,l] of s.entries())
                    if (!e.has(c) || !Ri(l, e.get(c), c, s, e, t, i))
                        return !1;
                return !0
            }
        case Lm:
            {
                if (s.size !== e.size)
                    return !1;
                let c = Array.from(s.values())
                  , l = Array.from(e.values());
                for (let p = 0; p < c.length; p++) {
                    let d = c[p]
                      , u = l.findIndex(m => Ri(d, m, void 0, s, e, t, i));
                    if (u === -1)
                        return !1;
                    l.splice(u, 1)
                }
                return !0
            }
        case qm:
        case Vm:
        case Hm:
        case zm:
        case Km:
        case Wm:
        case Gm:
        case Ym:
        case Jm:
        case Xm:
        case Zm:
        case Qm:
            {
                if (typeof Buffer < "u" && Buffer.isBuffer(s) !== Buffer.isBuffer(e) || s.length !== e.length)
                    return !1;
                for (let c = 0; c < s.length; c++)
                    if (!Ri(s[c], e[c], c, s, e, t, i))
                        return !1;
                return !0
            }
        case $m:
            return s.byteLength !== e.byteLength ? !1 : xi(new Uint8Array(s), new Uint8Array(e), t, i);
        case Mm:
            return s.byteLength !== e.byteLength || s.byteOffset !== e.byteOffset ? !1 : xi(new Uint8Array(s), new Uint8Array(e), t, i);
        case Bm:
            return s.name === e.name && s.message === e.message;
        case Wn:
            {
                if (!(xi(s.constructor, e.constructor, t, i) || Kl(s) && Kl(e)))
                    return !1;
                let c = [...Object.keys(s), ...Wl(s)]
                  , l = [...Object.keys(e), ...Wl(e)];
                if (c.length !== l.length)
                    return !1;
                for (let p = 0; p < c.length; p++) {
                    let d = c[p]
                      , u = s[d];
                    if (!Object.hasOwn(e, d))
                        return !1;
                    let m = e[d];
                    if (!Ri(u, m, d, s, e, t, i))
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
function sy(s, e) {
    return ty(s, e, Tm)
}
var iy = Object.defineProperty
  , Jl = Object.getOwnPropertySymbols
  , ry = Object.prototype.hasOwnProperty
  , ny = Object.prototype.propertyIsEnumerable
  , fo = (s, e, t) => e in s ? iy(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Xl = (s, e) => {
    for (var t in e || (e = {}))
        ry.call(e, t) && fo(s, t, e[t]);
    if (Jl)
        for (var t of Jl(e))
            ny.call(e, t) && fo(s, t, e[t]);
    return s
}
  , Me = (s, e, t) => fo(s, typeof e != "symbol" ? e + "" : e, t)
  , Pt = class extends Ki {
    constructor(e, t, i, r=_t, n=void 0) {
        super(e, t, i, r),
        this.core = e,
        this.logger = t,
        this.name = i,
        Me(this, "map", new Map),
        Me(this, "version", wg),
        Me(this, "cached", []),
        Me(this, "initialized", !1),
        Me(this, "getKey"),
        Me(this, "storagePrefix", _t),
        Me(this, "recentlyDeleted", []),
        Me(this, "recentlyDeletedLimit", 200),
        Me(this, "init", () => h(this, null, function*() {
            this.initialized || (this.logger.trace("Initialized"),
            yield this.restore(),
            this.cached.forEach(o => {
                this.getKey && o !== null && !ye(o) ? this.map.set(this.getKey(o), o) : ml(o) ? this.map.set(o.id, o) : yl(o) && this.map.set(o.topic, o)
            }
            ),
            this.cached = [],
            this.initialized = !0)
        })),
        Me(this, "set", (o, a) => h(this, null, function*() {
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
        Me(this, "get", o => (this.isInitialized(),
        this.logger.debug("Getting value"),
        this.logger.trace({
            type: "method",
            method: "get",
            key: o
        }),
        this.getData(o))),
        Me(this, "getAll", o => (this.isInitialized(),
        o ? this.values.filter(a => Object.keys(o).every(c => sy(a[c], o[c]))) : this.values)),
        Me(this, "update", (o, a) => h(this, null, function*() {
            this.isInitialized(),
            this.logger.debug("Updating value"),
            this.logger.trace({
                type: "method",
                method: "update",
                key: o,
                update: a
            });
            let c = Xl(Xl({}, this.getData(o)), a);
            this.map.set(o, c),
            yield this.persist()
        })),
        Me(this, "delete", (o, a) => h(this, null, function*() {
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
        this.logger = Pe(t, this.name),
        this.storagePrefix = r,
        this.getKey = n
    }
    get context() {
        return Fe(this.logger)
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
        return h(this, null, function*() {
            yield this.core.storage.setItem(this.storageKey, e)
        })
    }
    getDataStore() {
        return h(this, null, function*() {
            return yield this.core.storage.getItem(this.storageKey)
        })
    }
    getData(e) {
        let t = this.map.get(e);
        if (!t) {
            if (this.recentlyDeleted.includes(e)) {
                let {message: r} = x("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
                throw this.logger.error(r),
                new Error(r)
            }
            let {message: i} = x("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.error(i),
            new Error(i)
        }
        return t
    }
    persist() {
        return h(this, null, function*() {
            yield this.setDataStore(this.values)
        })
    }
    restore() {
        return h(this, null, function*() {
            try {
                let e = yield this.getDataStore();
                if (typeof e > "u" || !e.length)
                    return;
                if (this.map.size) {
                    let {message: t} = x("RESTORE_WILL_OVERRIDE", this.name);
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
            let {message: e} = x("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
  , oy = Object.defineProperty
  , ay = (s, e, t) => e in s ? oy(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , G = (s, e, t) => ay(s, typeof e != "symbol" ? e + "" : e, t)
  , mo = class {
    constructor(e, t) {
        this.core = e,
        this.logger = t,
        G(this, "name", Ig),
        G(this, "version", Cg),
        G(this, "events", new $t.default),
        G(this, "pairings"),
        G(this, "initialized", !1),
        G(this, "storagePrefix", _t),
        G(this, "ignoredPayloadTypes", [ht]),
        G(this, "registeredMethods", []),
        G(this, "init", () => h(this, null, function*() {
            this.initialized || (yield this.pairings.init(),
            yield this.cleanup(),
            this.registerRelayerEvents(),
            this.registerExpirerEvents(),
            this.initialized = !0,
            this.logger.trace("Initialized"))
        })),
        G(this, "register", ({methods: i}) => {
            this.isInitialized(),
            this.registeredMethods = [...new Set([...this.registeredMethods, ...i])]
        }
        ),
        G(this, "create", i => h(this, null, function*() {
            this.isInitialized();
            let r = fr()
              , n = yield this.core.crypto.setSymKey(r)
              , o = de($.FIVE_MINUTES)
              , a = {
                protocol: Po
            }
              , c = {
                topic: n,
                expiry: o,
                relay: a,
                active: !1,
                methods: i?.methods
            }
              , l = Ln({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: n,
                symKey: r,
                relay: a,
                expiryTimestamp: o,
                methods: i?.methods
            });
            return this.events.emit(Xt.create, c),
            this.core.expirer.set(n, o),
            yield this.pairings.set(n, c),
            yield this.core.relayer.subscribe(n, {
                transportType: i?.transportType
            }),
            {
                topic: n,
                uri: l
            }
        })),
        G(this, "pair", i => h(this, null, function*() {
            this.isInitialized();
            let r = this.core.eventClient.createEvent({
                properties: {
                    topic: i?.uri,
                    trace: [ut.pairing_started]
                }
            });
            this.isValidPair(i, r);
            let {topic: n, symKey: o, relay: a, expiryTimestamp: c, methods: l} = Fn(i.uri);
            r.props.properties.topic = n,
            r.addTrace(ut.pairing_uri_validation_success),
            r.addTrace(ut.pairing_uri_not_expired);
            let p;
            if (this.pairings.keys.includes(n)) {
                if (p = this.pairings.get(n),
                r.addTrace(ut.existing_pairing),
                p.active)
                    throw r.setError(Ct.active_pairing_already_exists),
                    new Error(`Pairing already exists: ${n}. Please try again with a new connection URI.`);
                r.addTrace(ut.pairing_not_expired)
            }
            let d = c || de($.FIVE_MINUTES)
              , u = {
                topic: n,
                relay: a,
                expiry: d,
                active: !1,
                methods: l
            };
            this.core.expirer.set(n, d),
            yield this.pairings.set(n, u),
            r.addTrace(ut.store_new_pairing),
            i.activatePairing && (yield this.activate({
                topic: n
            })),
            this.events.emit(Xt.create, u),
            r.addTrace(ut.emit_inactive_pairing),
            this.core.crypto.keychain.has(n) || (yield this.core.crypto.setSymKey(o, n)),
            r.addTrace(ut.subscribing_pairing_topic);
            try {
                yield this.core.relayer.confirmOnlineStateOrThrow()
            } catch {
                r.setError(Ct.no_internet_connection)
            }
            try {
                yield this.core.relayer.subscribe(n, {
                    relay: a
                })
            } catch (m) {
                throw r.setError(Ct.subscribe_pairing_topic_failure),
                m
            }
            return r.addTrace(ut.subscribe_pairing_topic_success),
            u
        })),
        G(this, "activate", r => h(this, [r], function*({topic: i}) {
            this.isInitialized();
            let n = de($.FIVE_MINUTES);
            this.core.expirer.set(i, n),
            yield this.pairings.update(i, {
                active: !0,
                expiry: n
            })
        })),
        G(this, "ping", i => h(this, null, function*() {
            this.isInitialized(),
            yield this.isValidPing(i),
            this.logger.warn("ping() is deprecated and will be removed in the next major release.");
            let {topic: r} = i;
            if (this.pairings.keys.includes(r)) {
                let n = yield this.sendRequest(r, "wc_pairingPing", {})
                  , {done: o, resolve: a, reject: c} = Lt();
                this.events.once(X("pairing_ping", n), ({error: l}) => {
                    l ? c(l) : a()
                }
                ),
                yield o()
            }
        })),
        G(this, "updateExpiry", n => h(this, [n], function*({topic: i, expiry: r}) {
            this.isInitialized(),
            yield this.pairings.update(i, {
                expiry: r
            })
        })),
        G(this, "updateMetadata", n => h(this, [n], function*({topic: i, metadata: r}) {
            this.isInitialized(),
            yield this.pairings.update(i, {
                peerMetadata: r
            })
        })),
        G(this, "getPairings", () => (this.isInitialized(),
        this.pairings.values)),
        G(this, "disconnect", i => h(this, null, function*() {
            this.isInitialized(),
            yield this.isValidDisconnect(i);
            let {topic: r} = i;
            this.pairings.keys.includes(r) && (yield this.sendRequest(r, "wc_pairingDelete", ee("USER_DISCONNECTED")),
            yield this.deletePairing(r))
        })),
        G(this, "formatUriFromPairing", i => {
            this.isInitialized();
            let {topic: r, relay: n, expiry: o, methods: a} = i
              , c = this.core.crypto.keychain.get(r);
            return Ln({
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
        G(this, "sendRequest", (i, r, n) => h(this, null, function*() {
            let o = mt(r, n)
              , a = yield this.core.crypto.encode(i, o)
              , c = Si[r].req;
            return this.core.history.set(i, o),
            this.core.relayer.publish(i, a, c),
            o.id
        })),
        G(this, "sendResult", (i, r, n) => h(this, null, function*() {
            let o = rs(i, n)
              , a = yield this.core.crypto.encode(r, o)
              , c = (yield this.core.history.get(r, i)).request.method
              , l = Si[c].res;
            yield this.core.relayer.publish(r, a, l),
            yield this.core.history.resolve(o)
        })),
        G(this, "sendError", (i, r, n) => h(this, null, function*() {
            let o = Li(i, n)
              , a = yield this.core.crypto.encode(r, o)
              , c = (yield this.core.history.get(r, i)).request.method
              , l = Si[c] ? Si[c].res : Si.unregistered_method.res;
            yield this.core.relayer.publish(r, a, l),
            yield this.core.history.resolve(o)
        })),
        G(this, "deletePairing", (i, r) => h(this, null, function*() {
            yield this.core.relayer.unsubscribe(i),
            yield Promise.all([this.pairings.delete(i, ee("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i), r ? Promise.resolve() : this.core.expirer.del(i)])
        })),
        G(this, "cleanup", () => h(this, null, function*() {
            let i = this.pairings.getAll().filter(r => vt(r.expiry));
            yield Promise.all(i.map(r => this.deletePairing(r.topic)))
        })),
        G(this, "onRelayEventRequest", i => h(this, null, function*() {
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
        G(this, "onRelayEventResponse", i => h(this, null, function*() {
            let {topic: r, payload: n} = i
              , o = (yield this.core.history.get(r, n.id)).request.method;
            switch (o) {
            case "wc_pairingPing":
                return this.onPairingPingResponse(r, n);
            default:
                return this.onUnknownRpcMethodResponse(o)
            }
        })),
        G(this, "onPairingPingRequest", (i, r) => h(this, null, function*() {
            let {id: n} = r;
            try {
                this.isValidPing({
                    topic: i
                }),
                yield this.sendResult(n, i, !0),
                this.events.emit(Xt.ping, {
                    id: n,
                    topic: i
                })
            } catch (o) {
                yield this.sendError(n, i, o),
                this.logger.error(o)
            }
        })),
        G(this, "onPairingPingResponse", (i, r) => {
            let {id: n} = r;
            setTimeout( () => {
                ot(r) ? this.events.emit(X("pairing_ping", n), {}) : et(r) && this.events.emit(X("pairing_ping", n), {
                    error: r.error
                })
            }
            , 500)
        }
        ),
        G(this, "onPairingDeleteRequest", (i, r) => h(this, null, function*() {
            let {id: n} = r;
            try {
                this.isValidDisconnect({
                    topic: i
                }),
                yield this.deletePairing(i),
                this.events.emit(Xt.delete, {
                    id: n,
                    topic: i
                })
            } catch (o) {
                yield this.sendError(n, i, o),
                this.logger.error(o)
            }
        })),
        G(this, "onUnknownRpcMethodRequest", (i, r) => h(this, null, function*() {
            let {id: n, method: o} = r;
            try {
                if (this.registeredMethods.includes(o))
                    return;
                let a = ee("WC_METHOD_UNSUPPORTED", o);
                yield this.sendError(n, i, a),
                this.logger.error(a)
            } catch (a) {
                yield this.sendError(n, i, a),
                this.logger.error(a)
            }
        })),
        G(this, "onUnknownRpcMethodResponse", i => {
            this.registeredMethods.includes(i) || this.logger.error(ee("WC_METHOD_UNSUPPORTED", i))
        }
        ),
        G(this, "isValidPair", (i, r) => {
            var n;
            if (!Ue(i)) {
                let {message: a} = x("MISSING_OR_INVALID", `pair() params: ${i}`);
                throw r.setError(Ct.malformed_pairing_uri),
                new Error(a)
            }
            if (!fl(i.uri)) {
                let {message: a} = x("MISSING_OR_INVALID", `pair() uri: ${i.uri}`);
                throw r.setError(Ct.malformed_pairing_uri),
                new Error(a)
            }
            let o = Fn(i?.uri);
            if (!((n = o?.relay) != null && n.protocol)) {
                let {message: a} = x("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                throw r.setError(Ct.malformed_pairing_uri),
                new Error(a)
            }
            if (!(o != null && o.symKey)) {
                let {message: a} = x("MISSING_OR_INVALID", "pair() uri#symKey");
                throw r.setError(Ct.malformed_pairing_uri),
                new Error(a)
            }
            if (o != null && o.expiryTimestamp && (0,
            $.toMiliseconds)(o?.expiryTimestamp) < Date.now()) {
                r.setError(Ct.pairing_expired);
                let {message: a} = x("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
                throw new Error(a)
            }
        }
        ),
        G(this, "isValidPing", i => h(this, null, function*() {
            if (!Ue(i)) {
                let {message: n} = x("MISSING_OR_INVALID", `ping() params: ${i}`);
                throw new Error(n)
            }
            let {topic: r} = i;
            yield this.isValidPairingTopic(r)
        })),
        G(this, "isValidDisconnect", i => h(this, null, function*() {
            if (!Ue(i)) {
                let {message: n} = x("MISSING_OR_INVALID", `disconnect() params: ${i}`);
                throw new Error(n)
            }
            let {topic: r} = i;
            yield this.isValidPairingTopic(r)
        })),
        G(this, "isValidPairingTopic", i => h(this, null, function*() {
            if (!he(i, !1)) {
                let {message: r} = x("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
                throw new Error(r)
            }
            if (!this.pairings.keys.includes(i)) {
                let {message: r} = x("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
                throw new Error(r)
            }
            if (vt(this.pairings.get(i).expiry)) {
                yield this.deletePairing(i);
                let {message: r} = x("EXPIRED", `pairing topic: ${i}`);
                throw new Error(r)
            }
        })),
        this.core = e,
        this.logger = Pe(t, this.name),
        this.pairings = new Pt(this.core,this.logger,this.name,this.storagePrefix)
    }
    get context() {
        return Fe(this.logger)
    }
    isInitialized() {
        if (!this.initialized) {
            let {message: e} = x("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    registerRelayerEvents() {
        this.core.relayer.on(we.message, e => h(this, null, function*() {
            let {topic: t, message: i, transportType: r} = e;
            if (this.pairings.keys.includes(t) && r !== ae.link_mode && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i)))
                try {
                    let n = yield this.core.crypto.decode(t, i);
                    ni(n) ? (this.core.history.set(t, n),
                    yield this.onRelayEventRequest({
                        topic: t,
                        payload: n
                    })) : oi(n) && (yield this.core.history.resolve(n),
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
        this.core.expirer.on(Ze.expired, e => h(this, null, function*() {
            let {topic: t} = cr(e.target);
            t && this.pairings.keys.includes(t) && (yield this.deletePairing(t, !0),
            this.events.emit(Xt.expire, {
                topic: t
            }))
        }))
    }
}
  , cy = Object.defineProperty
  , ly = (s, e, t) => e in s ? cy(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Te = (s, e, t) => ly(s, typeof e != "symbol" ? e + "" : e, t)
  , yo = class extends Mi {
    constructor(e, t) {
        super(e, t),
        this.core = e,
        this.logger = t,
        Te(this, "records", new Map),
        Te(this, "events", new $t.EventEmitter),
        Te(this, "name", _g),
        Te(this, "version", Pg),
        Te(this, "cached", []),
        Te(this, "initialized", !1),
        Te(this, "storagePrefix", _t),
        Te(this, "init", () => h(this, null, function*() {
            this.initialized || (this.logger.trace("Initialized"),
            yield this.restore(),
            this.cached.forEach(i => this.records.set(i.id, i)),
            this.cached = [],
            this.registerEventListeners(),
            this.initialized = !0)
        })),
        Te(this, "set", (i, r, n) => {
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
                expiry: de($.THIRTY_DAYS)
            };
            this.records.set(o.id, o),
            this.persist(),
            this.events.emit(pt.created, o)
        }
        ),
        Te(this, "resolve", i => h(this, null, function*() {
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
            typeof r.response > "u" && (r.response = et(i) ? {
                error: i.error
            } : {
                result: i.result
            },
            this.records.set(r.id, r),
            this.persist(),
            this.events.emit(pt.updated, r))
        })),
        Te(this, "get", (i, r) => h(this, null, function*() {
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
        Te(this, "delete", (i, r) => {
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
                    this.events.emit(pt.deleted, n)
                }
            }
            ),
            this.persist()
        }
        ),
        Te(this, "exists", (i, r) => h(this, null, function*() {
            return this.isInitialized(),
            this.records.has(r) ? (yield this.getRecord(r)).topic === i : !1
        })),
        Te(this, "on", (i, r) => {
            this.events.on(i, r)
        }
        ),
        Te(this, "once", (i, r) => {
            this.events.once(i, r)
        }
        ),
        Te(this, "off", (i, r) => {
            this.events.off(i, r)
        }
        ),
        Te(this, "removeListener", (i, r) => {
            this.events.removeListener(i, r)
        }
        ),
        this.logger = Pe(t, this.name)
    }
    get context() {
        return Fe(this.logger)
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
                request: mt(t.request.method, t.request.params, t.id),
                chainId: t.chainId
            };
            return e.push(i)
        }
        ),
        e
    }
    setJsonRpcRecords(e) {
        return h(this, null, function*() {
            yield this.core.storage.setItem(this.storageKey, e)
        })
    }
    getJsonRpcRecords() {
        return h(this, null, function*() {
            return yield this.core.storage.getItem(this.storageKey)
        })
    }
    getRecord(e) {
        this.isInitialized();
        let t = this.records.get(e);
        if (!t) {
            let {message: i} = x("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(i)
        }
        return t
    }
    persist() {
        return h(this, null, function*() {
            yield this.setJsonRpcRecords(this.values),
            this.events.emit(pt.sync)
        })
    }
    restore() {
        return h(this, null, function*() {
            try {
                let e = yield this.getJsonRpcRecords();
                if (typeof e > "u" || !e.length)
                    return;
                if (this.records.size) {
                    let {message: t} = x("RESTORE_WILL_OVERRIDE", this.name);
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
        this.events.on(pt.created, e => {
            let t = pt.created;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                record: e
            })
        }
        ),
        this.events.on(pt.updated, e => {
            let t = pt.updated;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                record: e
            })
        }
        ),
        this.events.on(pt.deleted, e => {
            let t = pt.deleted;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                record: e
            })
        }
        ),
        this.core.heartbeat.on(ss.pulse, () => {
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
                $.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`),
                this.records.delete(t.id),
                this.events.emit(pt.deleted, t, !1),
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
            let {message: e} = x("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
  , hy = Object.defineProperty
  , py = (s, e, t) => e in s ? hy(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , De = (s, e, t) => py(s, typeof e != "symbol" ? e + "" : e, t)
  , wo = class extends Gi {
    constructor(e, t) {
        super(e, t),
        this.core = e,
        this.logger = t,
        De(this, "expirations", new Map),
        De(this, "events", new $t.EventEmitter),
        De(this, "name", Ag),
        De(this, "version", Ng),
        De(this, "cached", []),
        De(this, "initialized", !1),
        De(this, "storagePrefix", _t),
        De(this, "init", () => h(this, null, function*() {
            this.initialized || (this.logger.trace("Initialized"),
            yield this.restore(),
            this.cached.forEach(i => this.expirations.set(i.target, i)),
            this.cached = [],
            this.registerEventListeners(),
            this.initialized = !0)
        })),
        De(this, "has", i => {
            try {
                let r = this.formatTarget(i);
                return typeof this.getExpiration(r) < "u"
            } catch {
                return !1
            }
        }
        ),
        De(this, "set", (i, r) => {
            this.isInitialized();
            let n = this.formatTarget(i)
              , o = {
                target: n,
                expiry: r
            };
            this.expirations.set(n, o),
            this.checkExpiry(n, o),
            this.events.emit(Ze.created, {
                target: n,
                expiration: o
            })
        }
        ),
        De(this, "get", i => {
            this.isInitialized();
            let r = this.formatTarget(i);
            return this.getExpiration(r)
        }
        ),
        De(this, "del", i => {
            if (this.isInitialized(),
            this.has(i)) {
                let r = this.formatTarget(i)
                  , n = this.getExpiration(r);
                this.expirations.delete(r),
                this.events.emit(Ze.deleted, {
                    target: r,
                    expiration: n
                })
            }
        }
        ),
        De(this, "on", (i, r) => {
            this.events.on(i, r)
        }
        ),
        De(this, "once", (i, r) => {
            this.events.once(i, r)
        }
        ),
        De(this, "off", (i, r) => {
            this.events.off(i, r)
        }
        ),
        De(this, "removeListener", (i, r) => {
            this.events.removeListener(i, r)
        }
        ),
        this.logger = Pe(t, this.name)
    }
    get context() {
        return Fe(this.logger)
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
            return Ic(e);
        if (typeof e == "number")
            return Cc(e);
        let {message: t} = x("UNKNOWN_TYPE", `Target type: ${typeof e}`);
        throw new Error(t)
    }
    setExpirations(e) {
        return h(this, null, function*() {
            yield this.core.storage.setItem(this.storageKey, e)
        })
    }
    getExpirations() {
        return h(this, null, function*() {
            return yield this.core.storage.getItem(this.storageKey)
        })
    }
    persist() {
        return h(this, null, function*() {
            yield this.setExpirations(this.values),
            this.events.emit(Ze.sync)
        })
    }
    restore() {
        return h(this, null, function*() {
            try {
                let e = yield this.getExpirations();
                if (typeof e > "u" || !e.length)
                    return;
                if (this.expirations.size) {
                    let {message: t} = x("RESTORE_WILL_OVERRIDE", this.name);
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
            let {message: i} = x("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.warn(i),
            new Error(i)
        }
        return t
    }
    checkExpiry(e, t) {
        let {expiry: i} = t;
        (0,
        $.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t)
    }
    expire(e, t) {
        this.expirations.delete(e),
        this.events.emit(Ze.expired, {
            target: e,
            expiration: t
        })
    }
    checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach( (e, t) => this.checkExpiry(t, e))
    }
    registerEventListeners() {
        this.core.heartbeat.on(ss.pulse, () => this.checkExpirations()),
        this.events.on(Ze.created, e => {
            let t = Ze.created;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                data: e
            }),
            this.persist()
        }
        ),
        this.events.on(Ze.expired, e => {
            let t = Ze.expired;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                data: e
            }),
            this.persist()
        }
        ),
        this.events.on(Ze.deleted, e => {
            let t = Ze.deleted;
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
            let {message: e} = x("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
  , dy = Object.defineProperty
  , uy = (s, e, t) => e in s ? dy(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , ge = (s, e, t) => uy(s, typeof e != "symbol" ? e + "" : e, t)
  , vo = class extends Yi {
    constructor(e, t, i) {
        super(e, t, i),
        this.core = e,
        this.logger = t,
        this.store = i,
        ge(this, "name", Sg),
        ge(this, "abortController"),
        ge(this, "isDevEnv"),
        ge(this, "verifyUrlV3", Og),
        ge(this, "storagePrefix", _t),
        ge(this, "version", rh),
        ge(this, "publicKey"),
        ge(this, "fetchPromise"),
        ge(this, "init", () => h(this, null, function*() {
            var r;
            this.isDevEnv || (this.publicKey = yield this.store.getItem(this.storeKey),
            this.publicKey && (0,
            $.toMiliseconds)((r = this.publicKey) == null ? void 0 : r.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"),
            yield this.removePublicKey()))
        })),
        ge(this, "register", r => h(this, null, function*() {
            if (!ps() || this.isDevEnv)
                return;
            let n = window.location.origin
              , {id: o, decryptedId: a} = r
              , c = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${n}&id=${o}&decryptedId=${a}`;
            try {
                let l = (0,
                sh.getDocument)()
                  , p = this.startAbortTimer($.ONE_SECOND * 5)
                  , d = yield new Promise( (u, m) => {
                    let f = () => {
                        window.removeEventListener("message", g),
                        l.body.removeChild(y),
                        m("attestation aborted")
                    }
                    ;
                    this.abortController.signal.addEventListener("abort", f);
                    let y = l.createElement("iframe");
                    y.src = c,
                    y.style.display = "none",
                    y.addEventListener("error", f, {
                        signal: this.abortController.signal
                    });
                    let g = v => {
                        if (v.data && typeof v.data == "string")
                            try {
                                let w = JSON.parse(v.data);
                                if (w.type === "verify_attestation") {
                                    if (ri(w.attestation).payload.id !== o)
                                        return;
                                    clearInterval(p),
                                    l.body.removeChild(y),
                                    this.abortController.signal.removeEventListener("abort", f),
                                    window.removeEventListener("message", g),
                                    u(w.attestation === null ? "" : w.attestation)
                                }
                            } catch (w) {
                                this.logger.warn(w)
                            }
                    }
                    ;
                    l.body.appendChild(y),
                    window.addEventListener("message", g, {
                        signal: this.abortController.signal
                    })
                }
                );
                return this.logger.debug("jwt attestation", d),
                d
            } catch (l) {
                this.logger.warn(l)
            }
            return ""
        })),
        ge(this, "resolve", r => h(this, null, function*() {
            if (this.isDevEnv)
                return "";
            let {attestationId: n, hash: o, encryptedId: a} = r;
            if (n === "") {
                this.logger.debug("resolve: attestationId is empty, skipping");
                return
            }
            if (n) {
                if (ri(n).payload.id !== a)
                    return;
                let l = yield this.isValidJwtAttestation(n);
                if (l) {
                    if (!l.isVerified) {
                        this.logger.warn("resolve: jwt attestation: origin url not verified");
                        return
                    }
                    return l
                }
            }
            if (!o)
                return;
            let c = this.getVerifyUrl(r?.verifyUrl);
            return this.fetchAttestation(o, c)
        })),
        ge(this, "fetchAttestation", (r, n) => h(this, null, function*() {
            this.logger.debug(`resolving attestation: ${r} from url: ${n}`);
            let o = this.startAbortTimer($.ONE_SECOND * 5)
              , a = yield fetch(`${n}/attestation/${r}?v2Supported=true`, {
                signal: this.abortController.signal
            });
            return clearTimeout(o),
            a.status === 200 ? yield a.json() : void 0
        })),
        ge(this, "getVerifyUrl", r => {
            let n = r || $s;
            return Rg.includes(n) || (this.logger.info(`verify url: ${n}, not included in trusted list, assigning default: ${$s}`),
            n = $s),
            n
        }
        ),
        ge(this, "fetchPublicKey", () => h(this, null, function*() {
            try {
                this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
                let r = this.startAbortTimer($.FIVE_SECONDS)
                  , n = yield fetch(`${this.verifyUrlV3}/public-key`, {
                    signal: this.abortController.signal
                });
                return clearTimeout(r),
                yield n.json()
            } catch (r) {
                this.logger.warn(r)
            }
        })),
        ge(this, "persistPublicKey", r => h(this, null, function*() {
            this.logger.debug("persisting public key to local storage", r),
            yield this.store.setItem(this.storeKey, r),
            this.publicKey = r
        })),
        ge(this, "removePublicKey", () => h(this, null, function*() {
            this.logger.debug("removing verify v2 public key from storage"),
            yield this.store.removeItem(this.storeKey),
            this.publicKey = void 0
        })),
        ge(this, "isValidJwtAttestation", r => h(this, null, function*() {
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
        ge(this, "getPublicKey", () => h(this, null, function*() {
            return this.publicKey ? this.publicKey : yield this.fetchAndPersistPublicKey()
        })),
        ge(this, "fetchAndPersistPublicKey", () => h(this, null, function*() {
            if (this.fetchPromise)
                return yield this.fetchPromise,
                this.publicKey;
            this.fetchPromise = new Promise(n => h(this, null, function*() {
                let o = yield this.fetchPublicKey();
                o && (yield this.persistPublicKey(o),
                n(o))
            }));
            let r = yield this.fetchPromise;
            return this.fetchPromise = void 0,
            r
        })),
        ge(this, "validateAttestation", (r, n) => {
            let o = dl(r, n.publicKey)
              , a = {
                hasExpired: (0,
                $.toMiliseconds)(o.exp) < Date.now(),
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
        this.logger = Pe(t, this.name),
        this.abortController = new AbortController,
        this.isDevEnv = wi(),
        this.init()
    }
    get storeKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key"
    }
    get context() {
        return Fe(this.logger)
    }
    startAbortTimer(e) {
        return this.abortController = new AbortController,
        setTimeout( () => this.abortController.abort(), (0,
        $.toMiliseconds)(e))
    }
}
  , gy = Object.defineProperty
  , fy = (s, e, t) => e in s ? gy(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Zl = (s, e, t) => fy(s, typeof e != "symbol" ? e + "" : e, t)
  , bo = class extends Ji {
    constructor(e, t) {
        super(e, t),
        this.projectId = e,
        this.logger = t,
        Zl(this, "context", xg),
        Zl(this, "registerDeviceToken", i => h(this, null, function*() {
            let {clientId: r, token: n, notificationType: o, enableEncrypted: a=!1} = i
              , c = `${kg}/${this.projectId}/clients`;
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
        this.logger = Pe(t, this.context)
    }
}
  , my = Object.defineProperty
  , Ql = Object.getOwnPropertySymbols
  , yy = Object.prototype.hasOwnProperty
  , wy = Object.prototype.propertyIsEnumerable
  , Eo = (s, e, t) => e in s ? my(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Oi = (s, e) => {
    for (var t in e || (e = {}))
        yy.call(e, t) && Eo(s, t, e[t]);
    if (Ql)
        for (var t of Ql(e))
            wy.call(e, t) && Eo(s, t, e[t]);
    return s
}
  , Ce = (s, e, t) => Eo(s, typeof e != "symbol" ? e + "" : e, t)
  , Io = class extends Xi {
    constructor(e, t, i=!0) {
        super(e, t, i),
        this.core = e,
        this.logger = t,
        Ce(this, "context", Dg),
        Ce(this, "storagePrefix", _t),
        Ce(this, "storageVersion", Ug),
        Ce(this, "events", new Map),
        Ce(this, "shouldPersist", !1),
        Ce(this, "init", () => h(this, null, function*() {
            if (!wi())
                try {
                    let r = {
                        eventId: Cn(),
                        timestamp: Date.now(),
                        domain: this.getAppDomain(),
                        props: {
                            event: "INIT",
                            type: "",
                            properties: {
                                client_id: yield this.core.crypto.getClientId(),
                                user_agent: En(this.core.relayer.protocol, this.core.relayer.version, Gn)
                            }
                        }
                    };
                    yield this.sendEvent([r])
                } catch (r) {
                    this.logger.warn(r)
                }
        })),
        Ce(this, "createEvent", r => {
            let {event: n="ERROR", type: o="", properties: {topic: a, trace: c}} = r
              , l = Cn()
              , p = this.core.projectId || ""
              , d = Date.now()
              , u = Oi({
                eventId: l,
                timestamp: d,
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
            }, this.setMethods(l));
            return this.telemetryEnabled && (this.events.set(l, u),
            this.shouldPersist = !0),
            u
        }
        ),
        Ce(this, "getEvent", r => {
            let {eventId: n, topic: o} = r;
            if (n)
                return this.events.get(n);
            let a = Array.from(this.events.values()).find(c => c.props.properties.topic === o);
            if (a)
                return Oi(Oi({}, a), this.setMethods(a.eventId))
        }
        ),
        Ce(this, "deleteEvent", r => {
            let {eventId: n} = r;
            this.events.delete(n),
            this.shouldPersist = !0
        }
        ),
        Ce(this, "setEventListeners", () => {
            this.core.heartbeat.on(ss.pulse, () => h(this, null, function*() {
                this.shouldPersist && (yield this.persist()),
                this.events.forEach(r => {
                    (0,
                    $.fromMiliseconds)(Date.now()) - (0,
                    $.fromMiliseconds)(r.timestamp) > Fg && (this.events.delete(r.eventId),
                    this.shouldPersist = !0)
                }
                )
            }))
        }
        ),
        Ce(this, "setMethods", r => ({
            addTrace: n => this.addTrace(r, n),
            setError: n => this.setError(r, n)
        })),
        Ce(this, "addTrace", (r, n) => {
            let o = this.events.get(r);
            o && (o.props.properties.trace.push(n),
            this.events.set(r, o),
            this.shouldPersist = !0)
        }
        ),
        Ce(this, "setError", (r, n) => {
            let o = this.events.get(r);
            o && (o.props.type = n,
            o.timestamp = Date.now(),
            this.events.set(r, o),
            this.shouldPersist = !0)
        }
        ),
        Ce(this, "persist", () => h(this, null, function*() {
            yield this.core.storage.setItem(this.storageKey, Array.from(this.events.values())),
            this.shouldPersist = !1
        })),
        Ce(this, "restore", () => h(this, null, function*() {
            try {
                let r = (yield this.core.storage.getItem(this.storageKey)) || [];
                if (!r.length)
                    return;
                r.forEach(n => {
                    this.events.set(n.eventId, Oi(Oi({}, n), this.setMethods(n.eventId)))
                }
                )
            } catch (r) {
                this.logger.warn(r)
            }
        })),
        Ce(this, "submit", () => h(this, null, function*() {
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
        Ce(this, "sendEvent", r => h(this, null, function*() {
            let n = this.getAppDomain() ? "" : "&sp=desktop";
            return yield fetch(`${Lg}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${Gn}${n}`, {
                method: "POST",
                body: JSON.stringify(r)
            })
        })),
        Ce(this, "getAppDomain", () => bn().url),
        this.logger = Pe(t, this.context),
        this.telemetryEnabled = i,
        i ? this.restore().then( () => h(this, null, function*() {
            yield this.submit(),
            this.setEventListeners()
        })) : this.persist()
    }
    get storageKey() {
        return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context
    }
}
  , vy = Object.defineProperty
  , eh = Object.getOwnPropertySymbols
  , by = Object.prototype.hasOwnProperty
  , Ey = Object.prototype.propertyIsEnumerable
  , Co = (s, e, t) => e in s ? vy(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , th = (s, e) => {
    for (var t in e || (e = {}))
        by.call(e, t) && Co(s, t, e[t]);
    if (eh)
        for (var t of eh(e))
            Ey.call(e, t) && Co(s, t, e[t]);
    return s
}
  , oe = (s, e, t) => Co(s, typeof e != "symbol" ? e + "" : e, t)
  , _o = class s extends Bi {
    constructor(e) {
        var t;
        super(e),
        oe(this, "protocol", ih),
        oe(this, "version", rh),
        oe(this, "name", vr),
        oe(this, "relayUrl"),
        oe(this, "projectId"),
        oe(this, "customStoragePrefix"),
        oe(this, "events", new $t.EventEmitter),
        oe(this, "logger"),
        oe(this, "heartbeat"),
        oe(this, "relayer"),
        oe(this, "crypto"),
        oe(this, "storage"),
        oe(this, "history"),
        oe(this, "expirer"),
        oe(this, "pairing"),
        oe(this, "verify"),
        oe(this, "echoClient"),
        oe(this, "linkModeSupportedApps"),
        oe(this, "eventClient"),
        oe(this, "initialized", !1),
        oe(this, "logChunkController"),
        oe(this, "on", (a, c) => this.events.on(a, c)),
        oe(this, "once", (a, c) => this.events.once(a, c)),
        oe(this, "off", (a, c) => this.events.off(a, c)),
        oe(this, "removeListener", (a, c) => this.events.removeListener(a, c)),
        oe(this, "dispatchEnvelope", ({topic: a, message: c, sessionExists: l}) => {
            if (!a || !c)
                return;
            let p = {
                topic: a,
                message: c,
                publishedAt: Date.now(),
                transportType: ae.link_mode
            };
            this.relayer.onLinkMessageEvent(p, {
                sessionExists: l
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
        this.relayUrl = e?.relayUrl || nh,
        this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
        let r = is({
            level: typeof e?.logger == "string" && e.logger ? e.logger : ng.logger,
            name: vr
        })
          , {logger: n, chunkLoggerController: o} = ma({
            opts: r,
            maxSizeInBytes: e?.maxLogBlobSizeInBytes,
            loggerOverride: e?.logger
        });
        this.logChunkController = o,
        (t = this.logChunkController) != null && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = () => h(this, null, function*() {
            var a, c;
            (a = this.logChunkController) != null && a.downloadLogsBlobInBrowser && ((c = this.logChunkController) == null || c.downloadLogsBlobInBrowser({
                clientId: yield this.crypto.getClientId()
            }))
        })),
        this.logger = Pe(n, this.name),
        this.heartbeat = new ga,
        this.crypto = new ro(this,this.logger,e?.keychain),
        this.history = new yo(this,this.logger),
        this.expirer = new wo(this,this.logger),
        this.storage = e != null && e.storage ? e.storage : new fa(th(th({}, og), e?.storageOptions)),
        this.relayer = new go({
            core: this,
            logger: this.logger,
            relayUrl: this.relayUrl,
            projectId: this.projectId
        }),
        this.pairing = new mo(this,this.logger),
        this.verify = new vo(this,this.logger,this.storage),
        this.echoClient = new bo(this.projectId || "",this.logger),
        this.linkModeSupportedApps = [],
        this.eventClient = new Io(this,this.logger,e?.telemetryEnabled),
        this.setGlobalCore(this)
    }
    static init(e) {
        return h(this, null, function*() {
            let t = new s(e);
            yield t.initialize();
            let i = yield t.crypto.getClientId();
            return yield t.storage.setItem(vg, i),
            t
        })
    }
    get context() {
        return Fe(this.logger)
    }
    start() {
        return h(this, null, function*() {
            this.initialized || (yield this.initialize())
        })
    }
    getLogsBlob() {
        return h(this, null, function*() {
            var e;
            return (e = this.logChunkController) == null ? void 0 : e.logsToBlob({
                clientId: yield this.crypto.getClientId()
            })
        })
    }
    addLinkModeSupportedApp(e) {
        return h(this, null, function*() {
            this.linkModeSupportedApps.includes(e) || (this.linkModeSupportedApps.push(e),
            yield this.storage.setItem(Ul, this.linkModeSupportedApps))
        })
    }
    initialize() {
        return h(this, null, function*() {
            this.logger.trace("Initialized");
            try {
                yield this.crypto.init(),
                yield this.history.init(),
                yield this.expirer.init(),
                yield this.relayer.init(),
                yield this.heartbeat.init(),
                yield this.pairing.init(),
                this.linkModeSupportedApps = (yield this.storage.getItem(Ul)) || [],
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
  , yh = _o;
var W = ft(Lr());
var Cr = ft(Fi());
var Ih = "wc"
  , Ch = 2
  , _h = "client"
  , qo = `${Ih}@${Ch}:${_h}:`
  , Ao = {
    name: _h,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.org"
};
var wh = "WALLETCONNECT_DEEPLINK_CHOICE";
var Iy = "proposal";
var vh = "Proposal expired"
  , Cy = "session"
  , Ms = W.SEVEN_DAYS
  , _y = "engine"
  , _e = {
    wc_sessionPropose: {
        req: {
            ttl: W.FIVE_MINUTES,
            prompt: !0,
            tag: 1100
        },
        res: {
            ttl: W.FIVE_MINUTES,
            prompt: !1,
            tag: 1101
        },
        reject: {
            ttl: W.FIVE_MINUTES,
            prompt: !1,
            tag: 1120
        },
        autoReject: {
            ttl: W.FIVE_MINUTES,
            prompt: !1,
            tag: 1121
        }
    },
    wc_sessionSettle: {
        req: {
            ttl: W.FIVE_MINUTES,
            prompt: !1,
            tag: 1102
        },
        res: {
            ttl: W.FIVE_MINUTES,
            prompt: !1,
            tag: 1103
        }
    },
    wc_sessionUpdate: {
        req: {
            ttl: W.ONE_DAY,
            prompt: !1,
            tag: 1104
        },
        res: {
            ttl: W.ONE_DAY,
            prompt: !1,
            tag: 1105
        }
    },
    wc_sessionExtend: {
        req: {
            ttl: W.ONE_DAY,
            prompt: !1,
            tag: 1106
        },
        res: {
            ttl: W.ONE_DAY,
            prompt: !1,
            tag: 1107
        }
    },
    wc_sessionRequest: {
        req: {
            ttl: W.FIVE_MINUTES,
            prompt: !0,
            tag: 1108
        },
        res: {
            ttl: W.FIVE_MINUTES,
            prompt: !1,
            tag: 1109
        }
    },
    wc_sessionEvent: {
        req: {
            ttl: W.FIVE_MINUTES,
            prompt: !0,
            tag: 1110
        },
        res: {
            ttl: W.FIVE_MINUTES,
            prompt: !1,
            tag: 1111
        }
    },
    wc_sessionDelete: {
        req: {
            ttl: W.ONE_DAY,
            prompt: !1,
            tag: 1112
        },
        res: {
            ttl: W.ONE_DAY,
            prompt: !1,
            tag: 1113
        }
    },
    wc_sessionPing: {
        req: {
            ttl: W.ONE_DAY,
            prompt: !1,
            tag: 1114
        },
        res: {
            ttl: W.ONE_DAY,
            prompt: !1,
            tag: 1115
        }
    },
    wc_sessionAuthenticate: {
        req: {
            ttl: W.ONE_HOUR,
            prompt: !0,
            tag: 1116
        },
        res: {
            ttl: W.ONE_HOUR,
            prompt: !1,
            tag: 1117
        },
        reject: {
            ttl: W.FIVE_MINUTES,
            prompt: !1,
            tag: 1118
        },
        autoReject: {
            ttl: W.FIVE_MINUTES,
            prompt: !1,
            tag: 1119
        }
    }
}
  , No = {
    min: W.FIVE_MINUTES,
    max: W.SEVEN_DAYS
}
  , At = {
    idle: "IDLE",
    active: "ACTIVE"
}
  , bh = {
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
  , Py = "request"
  , Ay = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"]
  , Ny = "wc";
var Sy = "auth"
  , Ty = "authKeys"
  , Oy = "pairingTopics"
  , Ry = "requests"
  , _r = `${Ny}@${1.5}:${Sy}:`
  , Er = `${_r}:PUB_KEY`
  , xy = Object.defineProperty
  , ky = Object.defineProperties
  , Uy = Object.getOwnPropertyDescriptors
  , Eh = Object.getOwnPropertySymbols
  , Dy = Object.prototype.hasOwnProperty
  , Fy = Object.prototype.propertyIsEnumerable
  , To = (s, e, t) => e in s ? xy(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , re = (s, e) => {
    for (var t in e || (e = {}))
        Dy.call(e, t) && To(s, t, e[t]);
    if (Eh)
        for (var t of Eh(e))
            Fy.call(e, t) && To(s, t, e[t]);
    return s
}
  , qe = (s, e) => ky(s, Uy(e))
  , I = (s, e, t) => To(s, typeof e != "symbol" ? e + "" : e, t)
  , Oo = class extends Qi {
    constructor(e) {
        super(e),
        I(this, "name", _y),
        I(this, "events", new Cr.default),
        I(this, "initialized", !1),
        I(this, "requestQueue", {
            state: At.idle,
            queue: []
        }),
        I(this, "sessionRequestQueue", {
            state: At.idle,
            queue: []
        }),
        I(this, "requestQueueDelay", W.ONE_SECOND),
        I(this, "expectedPairingMethodMap", new Map),
        I(this, "recentlyDeletedMap", new Map),
        I(this, "recentlyDeletedLimit", 200),
        I(this, "relayMessageCache", []),
        I(this, "pendingSessions", new Map),
        I(this, "init", () => h(this, null, function*() {
            this.initialized || (yield this.cleanup(),
            this.registerRelayerEvents(),
            this.registerExpirerEvents(),
            this.registerPairingEvents(),
            yield this.registerLinkModeListeners(),
            this.client.core.pairing.register({
                methods: Object.keys(_e)
            }),
            this.initialized = !0,
            setTimeout( () => h(this, null, function*() {
                yield this.processPendingMessageEvents(),
                this.sessionRequestQueue.queue = this.getPendingSessionRequests(),
                this.processSessionRequestQueue()
            }), (0,
            W.toMiliseconds)(this.requestQueueDelay)))
        })),
        I(this, "connect", t => h(this, null, function*() {
            this.isInitialized(),
            yield this.confirmOnlineStateOrThrow();
            let i = qe(re({}, t), {
                requiredNamespaces: t.requiredNamespaces || {},
                optionalNamespaces: t.optionalNamespaces || {}
            });
            yield this.isValidConnect(i),
            i.optionalNamespaces = ul(i.requiredNamespaces, i.optionalNamespaces),
            i.requiredNamespaces = {};
            let {pairingTopic: r, requiredNamespaces: n, optionalNamespaces: o, sessionProperties: a, scopedProperties: c, relays: l} = i, p = r, d, u = !1;
            try {
                if (p) {
                    let A = this.client.core.pairing.pairings.get(p);
                    this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."),
                    u = A.active
                }
            } catch (A) {
                throw this.client.logger.error(`connect() -> pairing.get(${p}) failed`),
                A
            }
            if (!p || !u) {
                let {topic: A, uri: S} = yield this.client.core.pairing.create();
                p = A,
                d = S
            }
            if (!p) {
                let {message: A} = x("NO_MATCHING_KEY", `connect() pairing topic: ${p}`);
                throw new Error(A)
            }
            let m = yield this.client.core.crypto.generateKeyPair()
              , f = _e.wc_sessionPropose.req.ttl || W.FIVE_MINUTES
              , y = de(f)
              , g = qe(re(re({
                requiredNamespaces: n,
                optionalNamespaces: o,
                relays: l ?? [{
                    protocol: Po
                }],
                proposer: {
                    publicKey: m,
                    metadata: this.client.metadata
                },
                expiryTimestamp: y,
                pairingTopic: p
            }, a && {
                sessionProperties: a
            }), c && {
                scopedProperties: c
            }), {
                id: Tt()
            })
              , v = X("session_connect", g.id)
              , {reject: w, resolve: b, done: P} = Lt(f, vh)
              , R = ({id: A}) => {
                A === g.id && (this.client.events.off("proposal_expire", R),
                this.pendingSessions.delete(g.id),
                this.events.emit(v, {
                    error: {
                        message: vh,
                        code: 0
                    }
                }))
            }
            ;
            return this.client.events.on("proposal_expire", R),
            this.events.once(v, ({error: A, session: S}) => {
                this.client.events.off("proposal_expire", R),
                A ? w(A) : S && b(S)
            }
            ),
            yield this.sendRequest({
                topic: p,
                method: "wc_sessionPropose",
                params: g,
                throwOnFailedPublish: !0,
                clientRpcId: g.id
            }),
            yield this.setProposal(g.id, g),
            {
                uri: d,
                approval: P
            }
        })),
        I(this, "pair", t => h(this, null, function*() {
            this.isInitialized(),
            yield this.confirmOnlineStateOrThrow();
            try {
                return yield this.client.core.pairing.pair(t)
            } catch (i) {
                throw this.client.logger.error("pair() failed"),
                i
            }
        })),
        I(this, "approve", t => h(this, null, function*() {
            var i, r, n;
            let o = this.client.core.eventClient.createEvent({
                properties: {
                    topic: (i = t?.id) == null ? void 0 : i.toString(),
                    trace: [it.session_approve_started]
                }
            });
            try {
                this.isInitialized(),
                yield this.confirmOnlineStateOrThrow()
            } catch (E) {
                throw o.setError(Zt.no_internet_connection),
                E
            }
            try {
                yield this.isValidProposalId(t?.id)
            } catch (E) {
                throw this.client.logger.error(`approve() -> proposal.get(${t?.id}) failed`),
                o.setError(Zt.proposal_not_found),
                E
            }
            try {
                yield this.isValidApprove(t)
            } catch (E) {
                throw this.client.logger.error("approve() -> isValidApprove() failed"),
                o.setError(Zt.session_approve_namespace_validation_failure),
                E
            }
            let {id: a, relayProtocol: c, namespaces: l, sessionProperties: p, scopedProperties: d, sessionConfig: u} = t
              , m = this.client.proposal.get(a);
            this.client.core.eventClient.deleteEvent({
                eventId: o.eventId
            });
            let {pairingTopic: f, proposer: y, requiredNamespaces: g, optionalNamespaces: v} = m
              , w = (r = this.client.core.eventClient) == null ? void 0 : r.getEvent({
                topic: f
            });
            w || (w = (n = this.client.core.eventClient) == null ? void 0 : n.createEvent({
                type: it.session_approve_started,
                properties: {
                    topic: f,
                    trace: [it.session_approve_started, it.session_namespaces_validation_success]
                }
            }));
            let b = yield this.client.core.crypto.generateKeyPair()
              , P = y.publicKey
              , R = yield this.client.core.crypto.generateSharedKey(b, P)
              , A = re(re(re({
                relay: {
                    protocol: c ?? "irn"
                },
                namespaces: l,
                controller: {
                    publicKey: b,
                    metadata: this.client.metadata
                },
                expiry: de(Ms)
            }, p && {
                sessionProperties: p
            }), d && {
                scopedProperties: d
            }), u && {
                sessionConfig: u
            })
              , S = ae.relay;
            w.addTrace(it.subscribing_session_topic);
            try {
                yield this.client.core.relayer.subscribe(R, {
                    transportType: S
                })
            } catch (E) {
                throw w.setError(Zt.subscribe_session_topic_failure),
                E
            }
            w.addTrace(it.subscribe_session_topic_success);
            let k = qe(re({}, A), {
                topic: R,
                requiredNamespaces: g,
                optionalNamespaces: v,
                pairingTopic: f,
                acknowledged: !1,
                self: A.controller,
                peer: {
                    publicKey: y.publicKey,
                    metadata: y.metadata
                },
                controller: b,
                transportType: ae.relay
            });
            yield this.client.session.set(R, k),
            w.addTrace(it.store_session);
            try {
                w.addTrace(it.publishing_session_settle),
                yield this.sendRequest({
                    topic: R,
                    method: "wc_sessionSettle",
                    params: A,
                    throwOnFailedPublish: !0
                }).catch(E => {
                    throw w?.setError(Zt.session_settle_publish_failure),
                    E
                }
                ),
                w.addTrace(it.session_settle_publish_success),
                w.addTrace(it.publishing_session_approve),
                yield this.sendResult({
                    id: a,
                    topic: f,
                    result: {
                        relay: {
                            protocol: c ?? "irn"
                        },
                        responderPublicKey: b
                    },
                    throwOnFailedPublish: !0
                }).catch(E => {
                    throw w?.setError(Zt.session_approve_publish_failure),
                    E
                }
                ),
                w.addTrace(it.session_approve_publish_success)
            } catch (E) {
                throw this.client.logger.error(E),
                this.client.session.delete(R, ee("USER_DISCONNECTED")),
                yield this.client.core.relayer.unsubscribe(R),
                E
            }
            return this.client.core.eventClient.deleteEvent({
                eventId: w.eventId
            }),
            yield this.client.core.pairing.updateMetadata({
                topic: f,
                metadata: y.metadata
            }),
            yield this.client.proposal.delete(a, ee("USER_DISCONNECTED")),
            yield this.client.core.pairing.activate({
                topic: f
            }),
            yield this.setExpiry(R, de(Ms)),
            {
                topic: R,
                acknowledged: () => Promise.resolve(this.client.session.get(R))
            }
        })),
        I(this, "reject", t => h(this, null, function*() {
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
                rpcOpts: _e.wc_sessionPropose.reject
            }),
            yield this.client.proposal.delete(i, ee("USER_DISCONNECTED")))
        })),
        I(this, "update", t => h(this, null, function*() {
            this.isInitialized(),
            yield this.confirmOnlineStateOrThrow();
            try {
                yield this.isValidUpdate(t)
            } catch (d) {
                throw this.client.logger.error("update() -> isValidUpdate() failed"),
                d
            }
            let {topic: i, namespaces: r} = t
              , {done: n, resolve: o, reject: a} = Lt()
              , c = Tt()
              , l = Mt().toString()
              , p = this.client.session.get(i).namespaces;
            return this.events.once(X("session_update", c), ({error: d}) => {
                d ? a(d) : o()
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
                relayRpcId: l
            }).catch(d => {
                this.client.logger.error(d),
                this.client.session.update(i, {
                    namespaces: p
                }),
                a(d)
            }
            ),
            {
                acknowledged: n
            }
        })),
        I(this, "extend", t => h(this, null, function*() {
            this.isInitialized(),
            yield this.confirmOnlineStateOrThrow();
            try {
                yield this.isValidExtend(t)
            } catch (c) {
                throw this.client.logger.error("extend() -> isValidExtend() failed"),
                c
            }
            let {topic: i} = t
              , r = Tt()
              , {done: n, resolve: o, reject: a} = Lt();
            return this.events.once(X("session_extend", r), ({error: c}) => {
                c ? a(c) : o()
            }
            ),
            yield this.setExpiry(i, de(Ms)),
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
        I(this, "request", t => h(this, null, function*() {
            this.isInitialized();
            try {
                yield this.isValidRequest(t)
            } catch (v) {
                throw this.client.logger.error("request() -> isValidRequest() failed"),
                v
            }
            let {chainId: i, request: r, topic: n, expiry: o=_e.wc_sessionRequest.req.ttl} = t
              , a = this.client.session.get(n);
            a?.transportType === ae.relay && (yield this.confirmOnlineStateOrThrow());
            let c = Tt()
              , l = Mt().toString()
              , {done: p, resolve: d, reject: u} = Lt(o, "Request expired. Please try again.");
            this.events.once(X("session_request", c), ({error: v, result: w}) => {
                v ? u(v) : d(w)
            }
            );
            let m = "wc_sessionRequest"
              , f = this.getAppLinkIfEnabled(a.peer.metadata, a.transportType);
            if (f)
                return yield this.sendRequest({
                    clientRpcId: c,
                    relayRpcId: l,
                    topic: n,
                    method: m,
                    params: {
                        request: qe(re({}, r), {
                            expiryTimestamp: de(o)
                        }),
                        chainId: i
                    },
                    expiry: o,
                    throwOnFailedPublish: !0,
                    appLink: f
                }).catch(v => u(v)),
                this.client.events.emit("session_request_sent", {
                    topic: n,
                    request: r,
                    chainId: i,
                    id: c
                }),
                yield p();
            let y = {
                request: qe(re({}, r), {
                    expiryTimestamp: de(o)
                }),
                chainId: i
            }
              , g = this.shouldSetTVF(m, y);
            return yield Promise.all([new Promise(v => h(this, null, function*() {
                yield this.sendRequest(re({
                    clientRpcId: c,
                    relayRpcId: l,
                    topic: n,
                    method: m,
                    params: y,
                    expiry: o,
                    throwOnFailedPublish: !0
                }, g && {
                    tvf: this.getTVFParams(c, y)
                })).catch(w => u(w)),
                this.client.events.emit("session_request_sent", {
                    topic: n,
                    request: r,
                    chainId: i,
                    id: c
                }),
                v()
            })), new Promise(v => h(this, null, function*() {
                var w;
                if (!((w = a.sessionConfig) != null && w.disableDeepLink)) {
                    let b = yield Pc(this.client.core.storage, wh);
                    yield _c({
                        id: c,
                        topic: n,
                        wcDeepLink: b
                    })
                }
                v()
            })), p()]).then(v => v[2])
        })),
        I(this, "respond", t => h(this, null, function*() {
            this.isInitialized(),
            yield this.isValidRespond(t);
            let {topic: i, response: r} = t
              , {id: n} = r
              , o = this.client.session.get(i);
            o.transportType === ae.relay && (yield this.confirmOnlineStateOrThrow());
            let a = this.getAppLinkIfEnabled(o.peer.metadata, o.transportType);
            ot(r) ? yield this.sendResult({
                id: n,
                topic: i,
                result: r.result,
                throwOnFailedPublish: !0,
                appLink: a
            }) : et(r) && (yield this.sendError({
                id: n,
                topic: i,
                error: r.error,
                appLink: a
            })),
            this.cleanupAfterResponse(t)
        })),
        I(this, "ping", t => h(this, null, function*() {
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
                let r = Tt()
                  , n = Mt().toString()
                  , {done: o, resolve: a, reject: c} = Lt();
                this.events.once(X("session_ping", r), ({error: l}) => {
                    l ? c(l) : a()
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
        I(this, "emit", t => h(this, null, function*() {
            this.isInitialized(),
            yield this.confirmOnlineStateOrThrow(),
            yield this.isValidEmit(t);
            let {topic: i, event: r, chainId: n} = t
              , o = Mt().toString()
              , a = Tt();
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
        I(this, "disconnect", t => h(this, null, function*() {
            this.isInitialized(),
            yield this.confirmOnlineStateOrThrow(),
            yield this.isValidDisconnect(t);
            let {topic: i} = t;
            if (this.client.session.keys.includes(i))
                yield this.sendRequest({
                    topic: i,
                    method: "wc_sessionDelete",
                    params: ee("USER_DISCONNECTED"),
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
                let {message: r} = x("MISMATCHED_TOPIC", `Session or pairing topic not found: ${i}`);
                throw new Error(r)
            }
        })),
        I(this, "find", t => (this.isInitialized(),
        this.client.session.getAll().filter(i => gl(i, t)))),
        I(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()),
        I(this, "authenticate", (t, i) => h(this, null, function*() {
            var r;
            this.isInitialized(),
            this.isValidAuthenticate(t);
            let n = i && this.client.core.linkModeSupportedApps.includes(i) && ((r = this.client.metadata.redirect) == null ? void 0 : r.linkMode)
              , o = n ? ae.link_mode : ae.relay;
            o === ae.relay && (yield this.confirmOnlineStateOrThrow());
            let {chains: a, statement: c="", uri: l, domain: p, nonce: d, type: u, exp: m, nbf: f, methods: y=[], expiry: g} = t
              , v = [...t.resources || []]
              , {topic: w, uri: b} = yield this.client.core.pairing.create({
                methods: ["wc_sessionAuthenticate"],
                transportType: o
            });
            this.client.logger.info({
                message: "Generated new pairing",
                pairing: {
                    topic: w,
                    uri: b
                }
            });
            let P = yield this.client.core.crypto.generateKeyPair()
              , R = Ds(P);
            if (yield Promise.all([this.client.auth.authKeys.set(Er, {
                responseTopic: R,
                publicKey: P
            }), this.client.auth.pairingTopics.set(R, {
                topic: R,
                pairingTopic: w
            })]),
            yield this.client.core.relayer.subscribe(R, {
                transportType: o
            }),
            this.client.logger.info(`sending request to new pairing topic: ${w}`),
            y.length > 0) {
                let {namespace: N} = Jt(a[0])
                  , M = Fc(N, "request", y);
                Ei(v) && (M = Lc(M, v.pop())),
                v.push(M)
            }
            let A = g && g > _e.wc_sessionAuthenticate.req.ttl ? g : _e.wc_sessionAuthenticate.req.ttl
              , S = {
                authPayload: {
                    type: u ?? "caip122",
                    chains: a,
                    statement: c,
                    aud: l,
                    domain: p,
                    version: "1",
                    nonce: d,
                    iat: new Date().toISOString(),
                    exp: m,
                    nbf: f,
                    resources: v
                },
                requester: {
                    publicKey: P,
                    metadata: this.client.metadata
                },
                expiryTimestamp: de(A)
            }
              , k = {
                eip155: {
                    chains: a,
                    methods: [...new Set(["personal_sign", ...y])],
                    events: ["chainChanged", "accountsChanged"]
                }
            }
              , E = {
                requiredNamespaces: {},
                optionalNamespaces: k,
                relays: [{
                    protocol: "irn"
                }],
                pairingTopic: w,
                proposer: {
                    publicKey: P,
                    metadata: this.client.metadata
                },
                expiryTimestamp: de(_e.wc_sessionPropose.req.ttl),
                id: Tt()
            }
              , {done: B, resolve: D, reject: L} = Lt(A, "Request expired")
              , V = Tt()
              , C = X("session_connect", E.id)
              , O = X("session_request", V)
              , T = H => h(this, [H], function*({error: N, session: M}) {
                this.events.off(O, U),
                N ? L(N) : M && D({
                    session: M
                })
            })
              , U = N => h(this, null, function*() {
                var M, H, z;
                if (yield this.deletePendingAuthRequest(V, {
                    message: "fulfilled",
                    code: 0
                }),
                N.error) {
                    let me = ee("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
                    return N.error.code === me.code ? void 0 : (this.events.off(C, T),
                    L(N.error.message))
                }
                yield this.deleteProposal(E.id),
                this.events.off(C, T);
                let {cacaos: ne, responder: te} = N.result
                  , ue = []
                  , ve = [];
                for (let me of ne) {
                    (yield An({
                        cacao: me,
                        projectId: this.client.core.projectId
                    })) || (this.client.logger.error(me, "Signature verification failed"),
                    L(ee("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
                    let {p: es} = me
                      , Nt = Ei(es.resources)
                      , gt = [lr(es.iss)]
                      , St = bi(es.iss);
                    if (Nt) {
                        let ms = Sn(Nt)
                          , Di = Tn(Nt);
                        ue.push(...ms),
                        gt.push(...Di)
                    }
                    for (let ms of gt)
                        ve.push(`${ms}:${St}`)
                }
                let Re = yield this.client.core.crypto.generateSharedKey(P, te.publicKey), fe;
                ue.length > 0 && (fe = {
                    topic: Re,
                    acknowledged: !0,
                    self: {
                        publicKey: P,
                        metadata: this.client.metadata
                    },
                    peer: te,
                    controller: te.publicKey,
                    expiry: de(Ms),
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    relay: {
                        protocol: "irn"
                    },
                    pairingTopic: w,
                    namespaces: qn([...new Set(ue)], [...new Set(ve)]),
                    transportType: o
                },
                yield this.client.core.relayer.subscribe(Re, {
                    transportType: o
                }),
                yield this.client.session.set(Re, fe),
                w && (yield this.client.core.pairing.updateMetadata({
                    topic: w,
                    metadata: te.metadata
                })),
                fe = this.client.session.get(Re)),
                (M = this.client.metadata.redirect) != null && M.linkMode && (H = te.metadata.redirect) != null && H.linkMode && (z = te.metadata.redirect) != null && z.universal && i && (this.client.core.addLinkModeSupportedApp(te.metadata.redirect.universal),
                this.client.session.update(Re, {
                    transportType: ae.link_mode
                })),
                D({
                    auths: ne,
                    session: fe
                })
            });
            this.events.once(C, T),
            this.events.once(O, U);
            let F;
            try {
                if (n) {
                    let N = mt("wc_sessionAuthenticate", S, V);
                    this.client.core.history.set(w, N);
                    let M = yield this.client.core.crypto.encode("", N, {
                        type: Us,
                        encoding: jt
                    });
                    F = Ai(i, w, M)
                } else
                    yield Promise.all([this.sendRequest({
                        topic: w,
                        method: "wc_sessionAuthenticate",
                        params: S,
                        expiry: t.expiry,
                        throwOnFailedPublish: !0,
                        clientRpcId: V
                    }), this.sendRequest({
                        topic: w,
                        method: "wc_sessionPropose",
                        params: E,
                        expiry: _e.wc_sessionPropose.req.ttl,
                        throwOnFailedPublish: !0,
                        clientRpcId: E.id
                    })])
            } catch (N) {
                throw this.events.off(C, T),
                this.events.off(O, U),
                N
            }
            return yield this.setProposal(E.id, E),
            yield this.setAuthRequest(V, {
                request: qe(re({}, S), {
                    verifyContext: {}
                }),
                pairingTopic: w,
                transportType: o
            }),
            {
                uri: F ?? b,
                response: B
            }
        })),
        I(this, "approveSessionAuthenticate", t => h(this, null, function*() {
            let {id: i, auths: r} = t
              , n = this.client.core.eventClient.createEvent({
                properties: {
                    topic: i.toString(),
                    trace: [Qt.authenticated_session_approve_started]
                }
            });
            try {
                this.isInitialized()
            } catch (g) {
                throw n.setError(Bs.no_internet_connection),
                g
            }
            let o = this.getPendingAuthRequest(i);
            if (!o)
                throw n.setError(Bs.authenticated_session_pending_request_not_found),
                new Error(`Could not find pending auth request with id ${i}`);
            let a = o.transportType || ae.relay;
            a === ae.relay && (yield this.confirmOnlineStateOrThrow());
            let c = o.requester.publicKey
              , l = yield this.client.core.crypto.generateKeyPair()
              , p = Ds(c)
              , d = {
                type: ht,
                receiverPublicKey: c,
                senderPublicKey: l
            }
              , u = []
              , m = [];
            for (let g of r) {
                if (!(yield An({
                    cacao: g,
                    projectId: this.client.core.projectId
                }))) {
                    n.setError(Bs.invalid_cacao);
                    let R = ee("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
                    throw yield this.sendError({
                        id: i,
                        topic: p,
                        error: R,
                        encodeOpts: d
                    }),
                    new Error(R.message)
                }
                n.addTrace(Qt.cacaos_verified);
                let {p: v} = g
                  , w = Ei(v.resources)
                  , b = [lr(v.iss)]
                  , P = bi(v.iss);
                if (w) {
                    let R = Sn(w)
                      , A = Tn(w);
                    u.push(...R),
                    b.push(...A)
                }
                for (let R of b)
                    m.push(`${R}:${P}`)
            }
            let f = yield this.client.core.crypto.generateSharedKey(l, c);
            n.addTrace(Qt.create_authenticated_session_topic);
            let y;
            if (u?.length > 0) {
                y = {
                    topic: f,
                    acknowledged: !0,
                    self: {
                        publicKey: l,
                        metadata: this.client.metadata
                    },
                    peer: {
                        publicKey: c,
                        metadata: o.requester.metadata
                    },
                    controller: c,
                    expiry: de(Ms),
                    authentication: r,
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    relay: {
                        protocol: "irn"
                    },
                    pairingTopic: o.pairingTopic,
                    namespaces: qn([...new Set(u)], [...new Set(m)]),
                    transportType: a
                },
                n.addTrace(Qt.subscribing_authenticated_session_topic);
                try {
                    yield this.client.core.relayer.subscribe(f, {
                        transportType: a
                    })
                } catch (g) {
                    throw n.setError(Bs.subscribe_authenticated_session_topic_failure),
                    g
                }
                n.addTrace(Qt.subscribe_authenticated_session_topic_success),
                yield this.client.session.set(f, y),
                n.addTrace(Qt.store_authenticated_session),
                yield this.client.core.pairing.updateMetadata({
                    topic: o.pairingTopic,
                    metadata: o.requester.metadata
                })
            }
            n.addTrace(Qt.publishing_authenticated_session_approve);
            try {
                yield this.sendResult({
                    topic: p,
                    id: i,
                    result: {
                        cacaos: r,
                        responder: {
                            publicKey: l,
                            metadata: this.client.metadata
                        }
                    },
                    encodeOpts: d,
                    throwOnFailedPublish: !0,
                    appLink: this.getAppLinkIfEnabled(o.requester.metadata, a)
                })
            } catch (g) {
                throw n.setError(Bs.authenticated_session_approve_publish_failure),
                g
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
        I(this, "rejectSessionAuthenticate", t => h(this, null, function*() {
            this.isInitialized();
            let {id: i, reason: r} = t
              , n = this.getPendingAuthRequest(i);
            if (!n)
                throw new Error(`Could not find pending auth request with id ${i}`);
            n.transportType === ae.relay && (yield this.confirmOnlineStateOrThrow());
            let o = n.requester.publicKey
              , a = yield this.client.core.crypto.generateKeyPair()
              , c = Ds(o)
              , l = {
                type: ht,
                receiverPublicKey: o,
                senderPublicKey: a
            };
            yield this.sendError({
                id: i,
                topic: c,
                error: r,
                encodeOpts: l,
                rpcOpts: _e.wc_sessionAuthenticate.reject,
                appLink: this.getAppLinkIfEnabled(n.requester.metadata, n.transportType)
            }),
            yield this.client.auth.requests.delete(i, {
                message: "rejected",
                code: 0
            }),
            yield this.client.proposal.delete(i, ee("USER_DISCONNECTED"))
        })),
        I(this, "formatAuthMessage", t => {
            this.isInitialized();
            let {request: i, iss: r} = t;
            return Nn(i, r)
        }
        ),
        I(this, "processRelayMessageCache", () => {
            setTimeout( () => h(this, null, function*() {
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
        I(this, "cleanupDuplicatePairings", t => h(this, null, function*() {
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
        I(this, "deleteSession", t => h(this, null, function*() {
            var i;
            let {topic: r, expirerHasDeleted: n=!1, emitEvent: o=!0, id: a=0} = t
              , {self: c} = this.client.session.get(r);
            yield this.client.core.relayer.unsubscribe(r),
            yield this.client.session.delete(r, ee("USER_DISCONNECTED")),
            this.addToRecentlyDeleted(r, "session"),
            this.client.core.crypto.keychain.has(c.publicKey) && (yield this.client.core.crypto.deleteKeyPair(c.publicKey)),
            this.client.core.crypto.keychain.has(r) && (yield this.client.core.crypto.deleteSymKey(r)),
            n || this.client.core.expirer.del(r),
            this.client.core.storage.removeItem(wh).catch(l => this.client.logger.warn(l)),
            this.getPendingSessionRequests().forEach(l => {
                l.topic === r && this.deletePendingSessionRequest(l.id, ee("USER_DISCONNECTED"))
            }
            ),
            r === ((i = this.sessionRequestQueue.queue[0]) == null ? void 0 : i.topic) && (this.sessionRequestQueue.state = At.idle),
            o && this.client.events.emit("session_delete", {
                id: a,
                topic: r
            })
        })),
        I(this, "deleteProposal", (t, i) => h(this, null, function*() {
            if (i)
                try {
                    let r = this.client.proposal.get(t);
                    this.client.core.eventClient.getEvent({
                        topic: r.pairingTopic
                    })?.setError(Zt.proposal_expired)
                } catch {}
            yield Promise.all([this.client.proposal.delete(t, ee("USER_DISCONNECTED")), i ? Promise.resolve() : this.client.core.expirer.del(t)]),
            this.addToRecentlyDeleted(t, "proposal")
        })),
        I(this, "deletePendingSessionRequest", (t, i, r=!1) => h(this, null, function*() {
            yield Promise.all([this.client.pendingRequest.delete(t, i), r ? Promise.resolve() : this.client.core.expirer.del(t)]),
            this.addToRecentlyDeleted(t, "request"),
            this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(n => n.id !== t),
            r && (this.sessionRequestQueue.state = At.idle,
            this.client.events.emit("session_request_expire", {
                id: t
            }))
        })),
        I(this, "deletePendingAuthRequest", (t, i, r=!1) => h(this, null, function*() {
            yield Promise.all([this.client.auth.requests.delete(t, i), r ? Promise.resolve() : this.client.core.expirer.del(t)])
        })),
        I(this, "setExpiry", (t, i) => h(this, null, function*() {
            this.client.session.keys.includes(t) && (this.client.core.expirer.set(t, i),
            yield this.client.session.update(t, {
                expiry: i
            }))
        })),
        I(this, "setProposal", (t, i) => h(this, null, function*() {
            this.client.core.expirer.set(t, de(_e.wc_sessionPropose.req.ttl)),
            yield this.client.proposal.set(t, i)
        })),
        I(this, "setAuthRequest", (t, i) => h(this, null, function*() {
            let {request: r, pairingTopic: n, transportType: o=ae.relay} = i;
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
        I(this, "setPendingSessionRequest", t => h(this, null, function*() {
            let {id: i, topic: r, params: n, verifyContext: o} = t
              , a = n.request.expiryTimestamp || de(_e.wc_sessionRequest.req.ttl);
            this.client.core.expirer.set(i, a),
            yield this.client.pendingRequest.set(i, {
                id: i,
                topic: r,
                params: n,
                verifyContext: o
            })
        })),
        I(this, "sendRequest", t => h(this, null, function*() {
            let {topic: i, method: r, params: n, expiry: o, relayRpcId: a, clientRpcId: c, throwOnFailedPublish: l, appLink: p, tvf: d} = t, u = mt(r, n, c), m, f = !!p;
            try {
                let v = f ? jt : Ye;
                m = yield this.client.core.crypto.encode(i, u, {
                    encoding: v
                })
            } catch (v) {
                throw yield this.cleanup(),
                this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${i} failed`),
                v
            }
            let y;
            if (Ay.includes(r)) {
                let v = tt(JSON.stringify(u))
                  , w = tt(m);
                y = yield this.client.core.verify.register({
                    id: w,
                    decryptedId: v
                })
            }
            let g = _e[r].req;
            if (g.attestation = y,
            o && (g.ttl = o),
            a && (g.id = a),
            this.client.core.history.set(i, u),
            f) {
                let v = Ai(p, i, m);
                yield global.Linking.openURL(v, this.client.name)
            } else {
                let v = _e[r].req;
                o && (v.ttl = o),
                a && (v.id = a),
                v.tvf = qe(re({}, d), {
                    correlationId: u.id
                }),
                l ? (v.internal = qe(re({}, v.internal), {
                    throwOnFailedPublish: !0
                }),
                yield this.client.core.relayer.publish(i, m, v)) : this.client.core.relayer.publish(i, m, v).catch(w => this.client.logger.error(w))
            }
            return u.id
        })),
        I(this, "sendResult", t => h(this, null, function*() {
            let {id: i, topic: r, result: n, throwOnFailedPublish: o, encodeOpts: a, appLink: c} = t, l = rs(i, n), p, d = c && typeof (global == null ? void 0 : global.Linking) < "u";
            try {
                let f = d ? jt : Ye;
                p = yield this.client.core.crypto.encode(r, l, qe(re({}, a || {}), {
                    encoding: f
                }))
            } catch (f) {
                throw yield this.cleanup(),
                this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${r} failed`),
                f
            }
            let u, m;
            try {
                u = yield this.client.core.history.get(r, i);
                let f = u.request;
                try {
                    this.shouldSetTVF(f.method, f.params) && (m = this.getTVFParams(i, f.params, n))
                } catch (y) {
                    this.client.logger.warn("sendResult() -> getTVFParams() failed", y)
                }
            } catch (f) {
                throw this.client.logger.error(`sendResult() -> history.get(${r}, ${i}) failed`),
                f
            }
            if (d) {
                let f = Ai(c, r, p);
                yield global.Linking.openURL(f, this.client.name)
            } else {
                let f = u.request.method
                  , y = _e[f].res;
                y.tvf = qe(re({}, m), {
                    correlationId: i
                }),
                o ? (y.internal = qe(re({}, y.internal), {
                    throwOnFailedPublish: !0
                }),
                yield this.client.core.relayer.publish(r, p, y)) : this.client.core.relayer.publish(r, p, y).catch(g => this.client.logger.error(g))
            }
            yield this.client.core.history.resolve(l)
        })),
        I(this, "sendError", t => h(this, null, function*() {
            let {id: i, topic: r, error: n, encodeOpts: o, rpcOpts: a, appLink: c} = t, l = Li(i, n), p, d = c && typeof (global == null ? void 0 : global.Linking) < "u";
            try {
                let m = d ? jt : Ye;
                p = yield this.client.core.crypto.encode(r, l, qe(re({}, o || {}), {
                    encoding: m
                }))
            } catch (m) {
                throw yield this.cleanup(),
                this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${r} failed`),
                m
            }
            let u;
            try {
                u = yield this.client.core.history.get(r, i)
            } catch (m) {
                throw this.client.logger.error(`sendError() -> history.get(${r}, ${i}) failed`),
                m
            }
            if (d) {
                let m = Ai(c, r, p);
                yield global.Linking.openURL(m, this.client.name)
            } else {
                let m = u.request.method
                  , f = a || _e[m].res;
                this.client.core.relayer.publish(r, p, f)
            }
            yield this.client.core.history.resolve(l)
        })),
        I(this, "cleanup", () => h(this, null, function*() {
            let t = []
              , i = [];
            this.client.session.getAll().forEach(r => {
                let n = !1;
                vt(r.expiry) && (n = !0),
                this.client.core.crypto.keychain.has(r.topic) || (n = !0),
                n && t.push(r.topic)
            }
            ),
            this.client.proposal.getAll().forEach(r => {
                vt(r.expiryTimestamp) && i.push(r.id)
            }
            ),
            yield Promise.all([...t.map(r => this.deleteSession({
                topic: r
            })), ...i.map(r => this.deleteProposal(r))])
        })),
        I(this, "onProviderMessageEvent", t => h(this, null, function*() {
            !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(t) : yield this.onRelayMessage(t)
        })),
        I(this, "onRelayEventRequest", t => h(this, null, function*() {
            this.requestQueue.queue.push(t),
            yield this.processRequestsQueue()
        })),
        I(this, "processRequestsQueue", () => h(this, null, function*() {
            if (this.requestQueue.state === At.active) {
                this.client.logger.info("Request queue already active, skipping...");
                return
            }
            for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
                this.requestQueue.state = At.active;
                let t = this.requestQueue.queue.shift();
                if (t)
                    try {
                        yield this.processRequest(t)
                    } catch (i) {
                        this.client.logger.warn(i)
                    }
            }
            this.requestQueue.state = At.idle
        })),
        I(this, "processRequest", t => h(this, null, function*() {
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
        I(this, "onRelayEventResponse", t => h(this, null, function*() {
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
              , {message: r} = x("MISSING_OR_INVALID", `Decoded payload on topic ${i} is not identifiable as a JSON-RPC request or a response.`);
            throw new Error(r)
        }
        ),
        I(this, "shouldIgnorePairingRequest", t => {
            let {topic: i, requestMethod: r} = t
              , n = this.expectedPairingMethodMap.get(i);
            return !n || n.includes(r) ? !1 : !!(n.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0)
        }
        ),
        I(this, "onSessionProposeRequest", t => h(this, null, function*() {
            let {topic: i, payload: r, attestation: n, encryptedId: o} = t
              , {params: a, id: c} = r;
            try {
                let l = this.client.core.eventClient.getEvent({
                    topic: i
                });
                this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"),
                l?.setError(Ct.proposal_listener_not_found)),
                this.isValidConnect(re({}, r.params));
                let p = a.expiryTimestamp || de(_e.wc_sessionPropose.req.ttl)
                  , d = re({
                    id: c,
                    pairingTopic: i,
                    expiryTimestamp: p
                }, a);
                yield this.setProposal(c, d);
                let u = yield this.getVerifyContext({
                    attestationId: n,
                    hash: tt(JSON.stringify(r)),
                    encryptedId: o,
                    metadata: d.proposer.metadata
                });
                l?.addTrace(ut.emit_session_proposal),
                this.client.events.emit("session_proposal", {
                    id: c,
                    params: d,
                    verifyContext: u
                })
            } catch (l) {
                yield this.sendError({
                    id: c,
                    topic: i,
                    error: l,
                    rpcOpts: _e.wc_sessionPropose.autoReject
                }),
                this.client.logger.error(l)
            }
        })),
        I(this, "onSessionProposeResponse", (t, i, r) => h(this, null, function*() {
            let {id: n} = i;
            if (ot(i)) {
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
                let l = o.responderPublicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    peerPublicKey: l
                });
                let p = yield this.client.core.crypto.generateSharedKey(c, l);
                this.pendingSessions.set(n, {
                    sessionTopic: p,
                    pairingTopic: t,
                    proposalId: n,
                    publicKey: c
                });
                let d = yield this.client.core.relayer.subscribe(p, {
                    transportType: r
                });
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    subscriptionId: d
                }),
                yield this.client.core.pairing.activate({
                    topic: t
                })
            } else if (et(i)) {
                yield this.client.proposal.delete(n, ee("USER_DISCONNECTED"));
                let o = X("session_connect", n);
                if (this.events.listenerCount(o) === 0)
                    throw new Error(`emitting ${o} without any listeners, 954`);
                this.events.emit(o, {
                    error: i.error
                })
            }
        })),
        I(this, "onSessionSettleRequest", (t, i) => h(this, null, function*() {
            let {id: r, params: n} = i;
            try {
                this.isValidSessionSettleRequest(n);
                let {relay: o, controller: a, expiry: c, namespaces: l, sessionProperties: p, scopedProperties: d, sessionConfig: u} = i.params
                  , m = [...this.pendingSessions.values()].find(g => g.sessionTopic === t);
                if (!m)
                    return this.client.logger.error(`Pending session not found for topic ${t}`);
                let f = this.client.proposal.get(m.proposalId)
                  , y = qe(re(re(re({
                    topic: t,
                    relay: o,
                    expiry: c,
                    namespaces: l,
                    acknowledged: !0,
                    pairingTopic: m.pairingTopic,
                    requiredNamespaces: f.requiredNamespaces,
                    optionalNamespaces: f.optionalNamespaces,
                    controller: a.publicKey,
                    self: {
                        publicKey: m.publicKey,
                        metadata: this.client.metadata
                    },
                    peer: {
                        publicKey: a.publicKey,
                        metadata: a.metadata
                    }
                }, p && {
                    sessionProperties: p
                }), d && {
                    scopedProperties: d
                }), u && {
                    sessionConfig: u
                }), {
                    transportType: ae.relay
                });
                yield this.client.session.set(y.topic, y),
                yield this.setExpiry(y.topic, y.expiry),
                yield this.client.core.pairing.updateMetadata({
                    topic: m.pairingTopic,
                    metadata: y.peer.metadata
                }),
                this.client.events.emit("session_connect", {
                    session: y
                }),
                this.events.emit(X("session_connect", m.proposalId), {
                    session: y
                }),
                this.pendingSessions.delete(m.proposalId),
                this.deleteProposal(m.proposalId, !1),
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
        I(this, "onSessionSettleResponse", (t, i) => h(this, null, function*() {
            let {id: r} = i;
            ot(i) ? (yield this.client.session.update(t, {
                acknowledged: !0
            }),
            this.events.emit(X("session_approve", r), {})) : et(i) && (yield this.client.session.delete(t, ee("USER_DISCONNECTED")),
            this.events.emit(X("session_approve", r), {
                error: i.error
            }))
        })),
        I(this, "onSessionUpdateRequest", (t, i) => h(this, null, function*() {
            let {params: r, id: n} = i;
            try {
                let o = `${t}_session_update`
                  , a = Yt.get(o);
                if (a && this.isRequestOutOfSync(a, n)) {
                    this.client.logger.warn(`Discarding out of sync request - ${n}`),
                    this.sendError({
                        id: n,
                        topic: t,
                        error: ee("INVALID_UPDATE_REQUEST")
                    });
                    return
                }
                this.isValidUpdate(re({
                    topic: t
                }, r));
                try {
                    Yt.set(o, n),
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
                    throw Yt.delete(o),
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
              , n = X("session_update", r);
            if (this.events.listenerCount(n) === 0)
                throw new Error(`emitting ${n} without any listeners`);
            ot(i) ? this.events.emit(X("session_update", r), {}) : et(i) && this.events.emit(X("session_update", r), {
                error: i.error
            })
        }
        ),
        I(this, "onSessionExtendRequest", (t, i) => h(this, null, function*() {
            let {id: r} = i;
            try {
                this.isValidExtend({
                    topic: t
                }),
                yield this.setExpiry(t, de(Ms)),
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
              , n = X("session_extend", r);
            if (this.events.listenerCount(n) === 0)
                throw new Error(`emitting ${n} without any listeners`);
            ot(i) ? this.events.emit(X("session_extend", r), {}) : et(i) && this.events.emit(X("session_extend", r), {
                error: i.error
            })
        }
        ),
        I(this, "onSessionPingRequest", (t, i) => h(this, null, function*() {
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
              , n = X("session_ping", r);
            setTimeout( () => {
                if (this.events.listenerCount(n) === 0)
                    throw new Error(`emitting ${n} without any listeners 2176`);
                ot(i) ? this.events.emit(X("session_ping", r), {}) : et(i) && this.events.emit(X("session_ping", r), {
                    error: i.error
                })
            }
            , 500)
        }
        ),
        I(this, "onSessionDeleteRequest", (t, i) => h(this, null, function*() {
            let {id: r} = i;
            try {
                this.isValidDisconnect({
                    topic: t,
                    reason: i.params
                }),
                Promise.all([new Promise(n => {
                    this.client.core.relayer.once(we.publish, () => h(this, null, function*() {
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
                    error: ee("USER_DISCONNECTED")
                })]).catch(n => this.client.logger.error(n))
            } catch (n) {
                this.client.logger.error(n)
            }
        })),
        I(this, "onSessionRequest", t => h(this, null, function*() {
            var i, r, n;
            let {topic: o, payload: a, attestation: c, encryptedId: l, transportType: p} = t
              , {id: d, params: u} = a;
            try {
                yield this.isValidRequest(re({
                    topic: o
                }, u));
                let m = this.client.session.get(o)
                  , f = yield this.getVerifyContext({
                    attestationId: c,
                    hash: tt(JSON.stringify(mt("wc_sessionRequest", u, d))),
                    encryptedId: l,
                    metadata: m.peer.metadata,
                    transportType: p
                })
                  , y = {
                    id: d,
                    topic: o,
                    params: u,
                    verifyContext: f
                };
                yield this.setPendingSessionRequest(y),
                p === ae.link_mode && (i = m.peer.metadata.redirect) != null && i.universal && this.client.core.addLinkModeSupportedApp((r = m.peer.metadata.redirect) == null ? void 0 : r.universal),
                (n = this.client.signConfig) != null && n.disableRequestQueue ? this.emitSessionRequest(y) : (this.addSessionRequestToSessionRequestQueue(y),
                this.processSessionRequestQueue())
            } catch (m) {
                yield this.sendError({
                    id: d,
                    topic: o,
                    error: m
                }),
                this.client.logger.error(m)
            }
        })),
        I(this, "onSessionRequestResponse", (t, i) => {
            let {id: r} = i
              , n = X("session_request", r);
            if (this.events.listenerCount(n) === 0)
                throw new Error(`emitting ${n} without any listeners`);
            ot(i) ? this.events.emit(X("session_request", r), {
                result: i.result
            }) : et(i) && this.events.emit(X("session_request", r), {
                error: i.error
            })
        }
        ),
        I(this, "onSessionEventRequest", (t, i) => h(this, null, function*() {
            let {id: r, params: n} = i;
            try {
                let o = `${t}_session_event_${n.event.name}`
                  , a = Yt.get(o);
                if (a && this.isRequestOutOfSync(a, r)) {
                    this.client.logger.info(`Discarding out of sync request - ${r}`);
                    return
                }
                this.isValidEmit(re({
                    topic: t
                }, n)),
                this.client.events.emit("session_event", {
                    id: r,
                    topic: t,
                    params: n
                }),
                Yt.set(o, r)
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
            ot(i) ? this.events.emit(X("session_request", r), {
                result: i.result
            }) : et(i) && this.events.emit(X("session_request", r), {
                error: i.error
            })
        }
        ),
        I(this, "onSessionAuthenticateRequest", t => h(this, null, function*() {
            var i;
            let {topic: r, payload: n, attestation: o, encryptedId: a, transportType: c} = t;
            try {
                let {requester: l, authPayload: p, expiryTimestamp: d} = n.params
                  , u = yield this.getVerifyContext({
                    attestationId: o,
                    hash: tt(JSON.stringify(n)),
                    encryptedId: a,
                    metadata: l.metadata,
                    transportType: c
                })
                  , m = {
                    requester: l,
                    pairingTopic: r,
                    id: n.id,
                    authPayload: p,
                    verifyContext: u,
                    expiryTimestamp: d
                };
                yield this.setAuthRequest(n.id, {
                    request: m,
                    pairingTopic: r,
                    transportType: c
                }),
                c === ae.link_mode && (i = l.metadata.redirect) != null && i.universal && this.client.core.addLinkModeSupportedApp(l.metadata.redirect.universal),
                this.client.events.emit("session_authenticate", {
                    topic: r,
                    params: n.params,
                    id: n.id,
                    verifyContext: u
                })
            } catch (l) {
                this.client.logger.error(l);
                let p = n.params.requester.publicKey
                  , d = yield this.client.core.crypto.generateKeyPair()
                  , u = this.getAppLinkIfEnabled(n.params.requester.metadata, c)
                  , m = {
                    type: ht,
                    receiverPublicKey: p,
                    senderPublicKey: d
                };
                yield this.sendError({
                    id: n.id,
                    topic: r,
                    error: l,
                    encodeOpts: m,
                    rpcOpts: _e.wc_sessionAuthenticate.autoReject,
                    appLink: u
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
                this.sessionRequestQueue.state = At.idle,
                this.processSessionRequestQueue()
            }
            , (0,
            W.toMiliseconds)(this.requestQueueDelay))
        }
        ),
        I(this, "cleanupPendingSentRequestsForTopic", ({topic: t, error: i}) => {
            let r = this.client.core.history.pending;
            r.length > 0 && r.filter(n => n.topic === t && n.request.method === "wc_sessionRequest").forEach(n => {
                let o = n.request.id
                  , a = X("session_request", o);
                if (this.events.listenerCount(a) === 0)
                    throw new Error(`emitting ${a} without any listeners`);
                this.events.emit(X("session_request", n.request.id), {
                    error: i
                })
            }
            )
        }
        ),
        I(this, "processSessionRequestQueue", () => {
            if (this.sessionRequestQueue.state === At.active) {
                this.client.logger.info("session request queue is already active.");
                return
            }
            let t = this.sessionRequestQueue.queue[0];
            if (!t) {
                this.client.logger.info("session request queue is empty.");
                return
            }
            try {
                this.sessionRequestQueue.state = At.active,
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
                payload: mt("wc_sessionPropose", qe(re({}, i), {
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
        I(this, "isValidConnect", t => h(this, null, function*() {
            if (!Ue(t)) {
                let {message: l} = x("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
                throw new Error(l)
            }
            let {pairingTopic: i, requiredNamespaces: r, optionalNamespaces: n, sessionProperties: o, scopedProperties: a, relays: c} = t;
            if (ye(i) || (yield this.isValidPairingTopic(i)),
            !El(c, !0)) {
                let {message: l} = x("MISSING_OR_INVALID", `connect() relays: ${c}`);
                throw new Error(l)
            }
            if (!ye(r) && Et(r) !== 0) {
                let l = "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
                ["fatal", "error", "silent"].includes(this.client.logger.level) ? console.warn(l) : this.client.logger.warn(l),
                this.validateNamespaces(r, "requiredNamespaces")
            }
            if (!ye(n) && Et(n) !== 0 && this.validateNamespaces(n, "optionalNamespaces"),
            ye(o) || this.validateSessionProps(o, "sessionProperties"),
            !ye(a)) {
                this.validateSessionProps(a, "scopedProperties");
                let l = Object.keys(r || {}).concat(Object.keys(n || {}));
                if (!Object.keys(a).every(p => l.includes(p)))
                    throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(a)}, required/optional namespaces: ${JSON.stringify(l)}`)
            }
        })),
        I(this, "validateNamespaces", (t, i) => {
            let r = bl(t, "connect()", i);
            if (r)
                throw new Error(r.message)
        }
        ),
        I(this, "isValidApprove", t => h(this, null, function*() {
            if (!Ue(t))
                throw new Error(x("MISSING_OR_INVALID", `approve() params: ${t}`).message);
            let {id: i, namespaces: r, relayProtocol: n, sessionProperties: o, scopedProperties: a} = t;
            this.checkRecentlyDeleted(i),
            yield this.isValidProposalId(i);
            let c = this.client.proposal.get(i)
              , l = mr(r, "approve()");
            if (l)
                throw new Error(l.message);
            let p = Mn(c.requiredNamespaces, r, "approve()");
            if (p)
                throw new Error(p.message);
            if (!he(n, !0)) {
                let {message: d} = x("MISSING_OR_INVALID", `approve() relayProtocol: ${n}`);
                throw new Error(d)
            }
            if (ye(o) || this.validateSessionProps(o, "sessionProperties"),
            !ye(a)) {
                this.validateSessionProps(a, "scopedProperties");
                let d = new Set(Object.keys(r));
                if (!Object.keys(a).every(u => d.has(u)))
                    throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(a)}, approved namespaces: ${Array.from(d).join(", ")}`)
            }
        })),
        I(this, "isValidReject", t => h(this, null, function*() {
            if (!Ue(t)) {
                let {message: n} = x("MISSING_OR_INVALID", `reject() params: ${t}`);
                throw new Error(n)
            }
            let {id: i, reason: r} = t;
            if (this.checkRecentlyDeleted(i),
            yield this.isValidProposalId(i),
            !Cl(r)) {
                let {message: n} = x("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
                throw new Error(n)
            }
        })),
        I(this, "isValidSessionSettleRequest", t => {
            if (!Ue(t)) {
                let {message: l} = x("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
                throw new Error(l)
            }
            let {relay: i, controller: r, namespaces: n, expiry: o} = t;
            if (!$n(i)) {
                let {message: l} = x("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                throw new Error(l)
            }
            let a = wl(r, "onSessionSettleRequest()");
            if (a)
                throw new Error(a.message);
            let c = mr(n, "onSessionSettleRequest()");
            if (c)
                throw new Error(c.message);
            if (vt(o)) {
                let {message: l} = x("EXPIRED", "onSessionSettleRequest()");
                throw new Error(l)
            }
        }
        ),
        I(this, "isValidUpdate", t => h(this, null, function*() {
            if (!Ue(t)) {
                let {message: c} = x("MISSING_OR_INVALID", `update() params: ${t}`);
                throw new Error(c)
            }
            let {topic: i, namespaces: r} = t;
            this.checkRecentlyDeleted(i),
            yield this.isValidSessionTopic(i);
            let n = this.client.session.get(i)
              , o = mr(r, "update()");
            if (o)
                throw new Error(o.message);
            let a = Mn(n.requiredNamespaces, r, "update()");
            if (a)
                throw new Error(a.message)
        })),
        I(this, "isValidExtend", t => h(this, null, function*() {
            if (!Ue(t)) {
                let {message: r} = x("MISSING_OR_INVALID", `extend() params: ${t}`);
                throw new Error(r)
            }
            let {topic: i} = t;
            this.checkRecentlyDeleted(i),
            yield this.isValidSessionTopic(i)
        })),
        I(this, "isValidRequest", t => h(this, null, function*() {
            if (!Ue(t)) {
                let {message: c} = x("MISSING_OR_INVALID", `request() params: ${t}`);
                throw new Error(c)
            }
            let {topic: i, request: r, chainId: n, expiry: o} = t;
            this.checkRecentlyDeleted(i),
            yield this.isValidSessionTopic(i);
            let {namespaces: a} = this.client.session.get(i);
            if (!Bn(a, n)) {
                let {message: c} = x("MISSING_OR_INVALID", `request() chainId: ${n}`);
                throw new Error(c)
            }
            if (!_l(r)) {
                let {message: c} = x("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
                throw new Error(c)
            }
            if (!Nl(a, n, r.method)) {
                let {message: c} = x("MISSING_OR_INVALID", `request() method: ${r.method}`);
                throw new Error(c)
            }
            if (o && !Tl(o, No)) {
                let {message: c} = x("MISSING_OR_INVALID", `request() expiry: ${o}. Expiry must be a number (in seconds) between ${No.min} and ${No.max}`);
                throw new Error(c)
            }
        })),
        I(this, "isValidRespond", t => h(this, null, function*() {
            var i;
            if (!Ue(t)) {
                let {message: o} = x("MISSING_OR_INVALID", `respond() params: ${t}`);
                throw new Error(o)
            }
            let {topic: r, response: n} = t;
            try {
                yield this.isValidSessionTopic(r)
            } catch (o) {
                throw (i = t?.response) != null && i.id && this.cleanupAfterResponse(t),
                o
            }
            if (!Pl(n)) {
                let {message: o} = x("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(n)}`);
                throw new Error(o)
            }
        })),
        I(this, "isValidPing", t => h(this, null, function*() {
            if (!Ue(t)) {
                let {message: r} = x("MISSING_OR_INVALID", `ping() params: ${t}`);
                throw new Error(r)
            }
            let {topic: i} = t;
            yield this.isValidSessionOrPairingTopic(i)
        })),
        I(this, "isValidEmit", t => h(this, null, function*() {
            if (!Ue(t)) {
                let {message: a} = x("MISSING_OR_INVALID", `emit() params: ${t}`);
                throw new Error(a)
            }
            let {topic: i, event: r, chainId: n} = t;
            yield this.isValidSessionTopic(i);
            let {namespaces: o} = this.client.session.get(i);
            if (!Bn(o, n)) {
                let {message: a} = x("MISSING_OR_INVALID", `emit() chainId: ${n}`);
                throw new Error(a)
            }
            if (!Al(r)) {
                let {message: a} = x("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                throw new Error(a)
            }
            if (!Sl(o, n, r.name)) {
                let {message: a} = x("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                throw new Error(a)
            }
        })),
        I(this, "isValidDisconnect", t => h(this, null, function*() {
            if (!Ue(t)) {
                let {message: r} = x("MISSING_OR_INVALID", `disconnect() params: ${t}`);
                throw new Error(r)
            }
            let {topic: i} = t;
            yield this.isValidSessionOrPairingTopic(i)
        })),
        I(this, "isValidAuthenticate", t => {
            let {chains: i, uri: r, domain: n, nonce: o} = t;
            if (!Array.isArray(i) || i.length === 0)
                throw new Error("chains is required and must be a non-empty array");
            if (!he(r, !1))
                throw new Error("uri is required parameter");
            if (!he(n, !1))
                throw new Error("domain is required parameter");
            if (!he(o, !1))
                throw new Error("nonce is required parameter");
            if ([...new Set(i.map(c => Jt(c).namespace))].length > 1)
                throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
            let {namespace: a} = Jt(i[0]);
            if (a !== "eip155")
                throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.")
        }
        ),
        I(this, "getVerifyContext", t => h(this, null, function*() {
            let {attestationId: i, hash: r, encryptedId: n, metadata: o, transportType: a} = t
              , c = {
                verified: {
                    verifyUrl: o.verifyUrl || $s,
                    validation: "UNKNOWN",
                    origin: o.url || ""
                }
            };
            try {
                if (a === ae.link_mode) {
                    let p = this.getAppLinkIfEnabled(o, a);
                    return c.verified.validation = p && new URL(p).origin === new URL(o.url).origin ? "VALID" : "INVALID",
                    c
                }
                let l = yield this.client.core.verify.resolve({
                    attestationId: i,
                    hash: r,
                    encryptedId: n,
                    verifyUrl: o.verifyUrl
                });
                l && (c.verified.origin = l.origin,
                c.verified.isScam = l.isScam,
                c.verified.validation = l.origin === new URL(o.url).origin ? "VALID" : "INVALID")
            } catch (l) {
                this.client.logger.warn(l)
            }
            return this.client.logger.debug(`Verify context: ${JSON.stringify(c)}`),
            c
        })),
        I(this, "validateSessionProps", (t, i) => {
            Object.values(t).forEach( (r, n) => {
                if (r == null) {
                    let {message: o} = x("MISSING_OR_INVALID", `${i} must contain an existing value for each key. Received: ${r} for key ${Object.keys(t)[n]}`);
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
                let {message: r} = x("MISSING_OR_INVALID", `Record was recently deleted - ${i}: ${t}`);
                throw new Error(r)
            }
        }
        ),
        I(this, "isLinkModeEnabled", (t, i) => {
            var r, n, o, a, c, l, p, d, u;
            return !t || i !== ae.link_mode ? !1 : ((n = (r = this.client.metadata) == null ? void 0 : r.redirect) == null ? void 0 : n.linkMode) === !0 && ((a = (o = this.client.metadata) == null ? void 0 : o.redirect) == null ? void 0 : a.universal) !== void 0 && ((l = (c = this.client.metadata) == null ? void 0 : c.redirect) == null ? void 0 : l.universal) !== "" && ((p = t?.redirect) == null ? void 0 : p.universal) !== void 0 && ((d = t?.redirect) == null ? void 0 : d.universal) !== "" && ((u = t?.redirect) == null ? void 0 : u.linkMode) === !0 && this.client.core.linkModeSupportedApps.includes(t.redirect.universal) && typeof (global == null ? void 0 : global.Linking) < "u"
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
            let i = In(t, "topic") || ""
              , r = decodeURIComponent(In(t, "wc_ev") || "")
              , n = this.client.session.keys.includes(i);
            n && this.client.session.update(i, {
                transportType: ae.link_mode
            }),
            this.client.core.dispatchEnvelope({
                topic: i,
                message: r,
                sessionExists: n
            })
        }
        ),
        I(this, "registerLinkModeListeners", () => h(this, null, function*() {
            var t;
            if (wi() || Ft() && (t = this.client.metadata.redirect) != null && t.linkMode) {
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
            return Object.keys(bh).includes(r.method)
        }
        ),
        I(this, "getTVFParams", (t, i, r) => {
            var n, o;
            try {
                let a = i.request.method
                  , c = this.extractTxHashesFromResult(a, r);
                return qe(re({
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
                let r = bh[t];
                if (typeof i == "string")
                    return [i];
                let n = i[r.key];
                if (bt(n))
                    return t === "solana_signAllTransactions" ? n.map(o => Uc(o)) : n;
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
        return h(this, null, function*() {
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
            let {message: e} = x("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    confirmOnlineStateOrThrow() {
        return h(this, null, function*() {
            yield this.client.core.relayer.confirmOnlineStateOrThrow()
        })
    }
    registerRelayerEvents() {
        this.client.core.relayer.on(we.message, e => {
            this.onProviderMessageEvent(e)
        }
        )
    }
    onRelayMessage(e) {
        return h(this, null, function*() {
            let {topic: t, message: i, attestation: r, transportType: n} = e
              , {publicKey: o} = this.client.auth.authKeys.keys.includes(Er) ? this.client.auth.authKeys.get(Er) : {
                responseTopic: void 0,
                publicKey: void 0
            };
            try {
                let a = yield this.client.core.crypto.decode(t, i, {
                    receiverPublicKey: o,
                    encoding: n === ae.link_mode ? jt : Ye
                });
                ni(a) ? (this.client.core.history.set(t, a),
                yield this.onRelayEventRequest({
                    topic: t,
                    payload: a,
                    attestation: r,
                    transportType: n,
                    encryptedId: tt(i)
                })) : oi(a) ? (yield this.client.core.history.resolve(a),
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
        this.client.core.expirer.on(Ze.expired, e => h(this, null, function*() {
            let {topic: t, id: i} = cr(e.target);
            if (i && this.client.pendingRequest.keys.includes(i))
                return yield this.deletePendingSessionRequest(i, x("EXPIRED"), !0);
            if (i && this.client.auth.requests.keys.includes(i))
                return yield this.deletePendingAuthRequest(i, x("EXPIRED"), !0);
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
        this.client.core.pairing.events.on(Xt.create, e => this.onPairingCreated(e)),
        this.client.core.pairing.events.on(Xt.delete, e => {
            this.addToRecentlyDeleted(e.topic, "pairing")
        }
        )
    }
    isValidPairingTopic(e) {
        if (!he(e, !1)) {
            let {message: t} = x("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
            throw new Error(t)
        }
        if (!this.client.core.pairing.pairings.keys.includes(e)) {
            let {message: t} = x("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
            throw new Error(t)
        }
        if (vt(this.client.core.pairing.pairings.get(e).expiry)) {
            let {message: t} = x("EXPIRED", `pairing topic: ${e}`);
            throw new Error(t)
        }
    }
    isValidSessionTopic(e) {
        return h(this, null, function*() {
            if (!he(e, !1)) {
                let {message: t} = x("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
                throw new Error(t)
            }
            if (this.checkRecentlyDeleted(e),
            !this.client.session.keys.includes(e)) {
                let {message: t} = x("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
                throw new Error(t)
            }
            if (vt(this.client.session.get(e).expiry)) {
                yield this.deleteSession({
                    topic: e
                });
                let {message: t} = x("EXPIRED", `session topic: ${e}`);
                throw new Error(t)
            }
            if (!this.client.core.crypto.keychain.has(e)) {
                let {message: t} = x("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
                throw yield this.deleteSession({
                    topic: e
                }),
                new Error(t)
            }
        })
    }
    isValidSessionOrPairingTopic(e) {
        return h(this, null, function*() {
            if (this.checkRecentlyDeleted(e),
            this.client.session.keys.includes(e))
                yield this.isValidSessionTopic(e);
            else if (this.client.core.pairing.pairings.keys.includes(e))
                this.isValidPairingTopic(e);
            else if (he(e, !1)) {
                let {message: t} = x("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
                throw new Error(t)
            } else {
                let {message: t} = x("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
                throw new Error(t)
            }
        })
    }
    isValidProposalId(e) {
        return h(this, null, function*() {
            if (!Il(e)) {
                let {message: t} = x("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
                throw new Error(t)
            }
            if (!this.client.proposal.keys.includes(e)) {
                let {message: t} = x("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
                throw new Error(t)
            }
            if (vt(this.client.proposal.get(e).expiryTimestamp)) {
                yield this.deleteProposal(e);
                let {message: t} = x("EXPIRED", `proposal id: ${e}`);
                throw new Error(t)
            }
        })
    }
}
  , Ro = class extends Pt {
    constructor(e, t) {
        super(e, t, Iy, qo),
        this.core = e,
        this.logger = t
    }
}
  , xo = class extends Pt {
    constructor(e, t) {
        super(e, t, Cy, qo),
        this.core = e,
        this.logger = t
    }
}
  , ko = class extends Pt {
    constructor(e, t) {
        super(e, t, Py, qo, i => i.id),
        this.core = e,
        this.logger = t
    }
}
  , Uo = class extends Pt {
    constructor(e, t) {
        super(e, t, Ty, _r, () => Er),
        this.core = e,
        this.logger = t
    }
}
  , Do = class extends Pt {
    constructor(e, t) {
        super(e, t, Oy, _r),
        this.core = e,
        this.logger = t
    }
}
  , Fo = class extends Pt {
    constructor(e, t) {
        super(e, t, Ry, _r, i => i.id),
        this.core = e,
        this.logger = t
    }
}
  , Ly = Object.defineProperty
  , qy = (s, e, t) => e in s ? Ly(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , So = (s, e, t) => qy(s, typeof e != "symbol" ? e + "" : e, t)
  , Lo = class {
    constructor(e, t) {
        this.core = e,
        this.logger = t,
        So(this, "authKeys"),
        So(this, "pairingTopics"),
        So(this, "requests"),
        this.authKeys = new Uo(this.core,this.logger),
        this.pairingTopics = new Do(this.core,this.logger),
        this.requests = new Fo(this.core,this.logger)
    }
    init() {
        return h(this, null, function*() {
            yield this.authKeys.init(),
            yield this.pairingTopics.init(),
            yield this.requests.init()
        })
    }
}
  , jy = Object.defineProperty
  , $y = (s, e, t) => e in s ? jy(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Y = (s, e, t) => $y(s, typeof e != "symbol" ? e + "" : e, t)
  , Ir = class s extends Zi {
    constructor(e) {
        super(e),
        Y(this, "protocol", Ih),
        Y(this, "version", Ch),
        Y(this, "name", Ao.name),
        Y(this, "metadata"),
        Y(this, "core"),
        Y(this, "logger"),
        Y(this, "events", new Cr.EventEmitter),
        Y(this, "engine"),
        Y(this, "session"),
        Y(this, "proposal"),
        Y(this, "pendingRequest"),
        Y(this, "auth"),
        Y(this, "signConfig"),
        Y(this, "on", (i, r) => this.events.on(i, r)),
        Y(this, "once", (i, r) => this.events.once(i, r)),
        Y(this, "off", (i, r) => this.events.off(i, r)),
        Y(this, "removeListener", (i, r) => this.events.removeListener(i, r)),
        Y(this, "removeAllListeners", i => this.events.removeAllListeners(i)),
        Y(this, "connect", i => h(this, null, function*() {
            try {
                return yield this.engine.connect(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        Y(this, "pair", i => h(this, null, function*() {
            try {
                return yield this.engine.pair(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        Y(this, "approve", i => h(this, null, function*() {
            try {
                return yield this.engine.approve(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        Y(this, "reject", i => h(this, null, function*() {
            try {
                return yield this.engine.reject(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        Y(this, "update", i => h(this, null, function*() {
            try {
                return yield this.engine.update(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        Y(this, "extend", i => h(this, null, function*() {
            try {
                return yield this.engine.extend(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        Y(this, "request", i => h(this, null, function*() {
            try {
                return yield this.engine.request(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        Y(this, "respond", i => h(this, null, function*() {
            try {
                return yield this.engine.respond(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        Y(this, "ping", i => h(this, null, function*() {
            try {
                return yield this.engine.ping(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        Y(this, "emit", i => h(this, null, function*() {
            try {
                return yield this.engine.emit(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        Y(this, "disconnect", i => h(this, null, function*() {
            try {
                return yield this.engine.disconnect(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        Y(this, "find", i => {
            try {
                return this.engine.find(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        }
        ),
        Y(this, "getPendingSessionRequests", () => {
            try {
                return this.engine.getPendingSessionRequests()
            } catch (i) {
                throw this.logger.error(i.message),
                i
            }
        }
        ),
        Y(this, "authenticate", (i, r) => h(this, null, function*() {
            try {
                return yield this.engine.authenticate(i, r)
            } catch (n) {
                throw this.logger.error(n.message),
                n
            }
        })),
        Y(this, "formatAuthMessage", i => {
            try {
                return this.engine.formatAuthMessage(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        }
        ),
        Y(this, "approveSessionAuthenticate", i => h(this, null, function*() {
            try {
                return yield this.engine.approveSessionAuthenticate(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        Y(this, "rejectSessionAuthenticate", i => h(this, null, function*() {
            try {
                return yield this.engine.rejectSessionAuthenticate(i)
            } catch (r) {
                throw this.logger.error(r.message),
                r
            }
        })),
        this.name = e?.name || Ao.name,
        this.metadata = vc(e?.metadata),
        this.signConfig = e?.signConfig;
        let t = typeof e?.logger < "u" && typeof e?.logger != "string" ? e.logger : (0,
        ws.default)(is({
            level: e?.logger || Ao.logger
        }));
        this.core = e?.core || new yh(e),
        this.logger = Pe(t, this.name),
        this.session = new xo(this.core,this.logger),
        this.proposal = new Ro(this.core,this.logger),
        this.pendingRequest = new ko(this.core,this.logger),
        this.engine = new Oo(this),
        this.auth = new Lo(this.core,this.logger)
    }
    static init(e) {
        return h(this, null, function*() {
            let t = new s(e);
            return yield t.initialize(),
            t
        })
    }
    get context() {
        return Fe(this.logger)
    }
    get pairing() {
        return this.core.pairing.pairings
    }
    initialize() {
        return h(this, null, function*() {
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
                W.toMiliseconds)(W.ONE_SECOND))
            } catch (e) {
                throw this.logger.info("SignClient Initialization Failure"),
                this.logger.error(e.message),
                e
            }
        })
    }
}
;
var qh = ft(Fi());
var Ph = "error"
  , By = "wss://relay.walletconnect.org"
  , My = "wc"
  , Vy = "universal_provider"
  , Pr = `${My}@2:${Vy}:`
  , jh = "https://rpc.walletconnect.org/v1/"
  , ei = "generic"
  , Hy = `${jh}bundler`
  , nt = {
    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
};
function zy() {}
function sa(s) {
    return s == null || typeof s != "object" && typeof s != "function"
}
function ia(s) {
    return ArrayBuffer.isView(s) && !(s instanceof DataView)
}
function Ky(s) {
    if (sa(s))
        return s;
    if (Array.isArray(s) || ia(s) || s instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && s instanceof SharedArrayBuffer)
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
function Ah(s) {
    return typeof s == "object" && s !== null
}
function $h(s) {
    return Object.getOwnPropertySymbols(s).filter(e => Object.prototype.propertyIsEnumerable.call(s, e))
}
function Bh(s) {
    return s == null ? s === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(s)
}
var Wy = "[object RegExp]"
  , Mh = "[object String]"
  , Vh = "[object Number]"
  , Hh = "[object Boolean]"
  , zh = "[object Arguments]"
  , Gy = "[object Symbol]"
  , Yy = "[object Date]"
  , Jy = "[object Map]"
  , Xy = "[object Set]"
  , Zy = "[object Array]"
  , Qy = "[object ArrayBuffer]"
  , ew = "[object Object]"
  , tw = "[object DataView]"
  , sw = "[object Uint8Array]"
  , iw = "[object Uint8ClampedArray]"
  , rw = "[object Uint16Array]"
  , nw = "[object Uint32Array]"
  , ow = "[object Int8Array]"
  , aw = "[object Int16Array]"
  , cw = "[object Int32Array]"
  , lw = "[object Float32Array]"
  , hw = "[object Float64Array]";
function pw(s, e) {
    return ti(s, void 0, s, new Map, e)
}
function ti(s, e, t, i=new Map, r=void 0) {
    let n = r?.(s, e, t, i);
    if (n != null)
        return n;
    if (sa(s))
        return s;
    if (i.has(s))
        return i.get(s);
    if (Array.isArray(s)) {
        let o = new Array(s.length);
        i.set(s, o);
        for (let a = 0; a < s.length; a++)
            o[a] = ti(s[a], a, t, i, r);
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
            o.set(a, ti(c, a, t, i, r));
        return o
    }
    if (s instanceof Set) {
        let o = new Set;
        i.set(s, o);
        for (let a of s)
            o.add(ti(a, void 0, t, i, r));
        return o
    }
    if (typeof Buffer < "u" && Buffer.isBuffer(s))
        return s.subarray();
    if (ia(s)) {
        let o = new (Object.getPrototypeOf(s)).constructor(s.length);
        i.set(s, o);
        for (let a = 0; a < s.length; a++)
            o[a] = ti(s[a], a, t, i, r);
        return o
    }
    if (s instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && s instanceof SharedArrayBuffer)
        return s.slice(0);
    if (s instanceof DataView) {
        let o = new DataView(s.buffer.slice(0),s.byteOffset,s.byteLength);
        return i.set(s, o),
        us(o, s, t, i, r),
        o
    }
    if (typeof File < "u" && s instanceof File) {
        let o = new File([s],s.name,{
            type: s.type
        });
        return i.set(s, o),
        us(o, s, t, i, r),
        o
    }
    if (s instanceof Blob) {
        let o = new Blob([s],{
            type: s.type
        });
        return i.set(s, o),
        us(o, s, t, i, r),
        o
    }
    if (s instanceof Error) {
        let o = new s.constructor;
        return i.set(s, o),
        o.message = s.message,
        o.name = s.name,
        o.stack = s.stack,
        o.cause = s.cause,
        us(o, s, t, i, r),
        o
    }
    if (typeof s == "object" && dw(s)) {
        let o = Object.create(Object.getPrototypeOf(s));
        return i.set(s, o),
        us(o, s, t, i, r),
        o
    }
    return s
}
function us(s, e, t=s, i, r) {
    let n = [...Object.keys(e), ...$h(e)];
    for (let o = 0; o < n.length; o++) {
        let a = n[o]
          , c = Object.getOwnPropertyDescriptor(s, a);
        (c == null || c.writable) && (s[a] = ti(e[a], a, t, i, r))
    }
}
function dw(s) {
    switch (Bh(s)) {
    case zh:
    case Zy:
    case Qy:
    case tw:
    case Hh:
    case Yy:
    case lw:
    case hw:
    case ow:
    case aw:
    case cw:
    case Jy:
    case Vh:
    case ew:
    case Wy:
    case Xy:
    case Mh:
    case Gy:
    case sw:
    case iw:
    case rw:
    case nw:
        return !0;
    default:
        return !1
    }
}
function uw(s, e) {
    return pw(s, (t, i, r, n) => {
        let o = e?.(t, i, r, n);
        if (o != null)
            return o;
        if (typeof s == "object")
            switch (Object.prototype.toString.call(s)) {
            case Vh:
            case Mh:
            case Hh:
                {
                    let a = new s.constructor(s?.valueOf());
                    return us(a, s),
                    a
                }
            case zh:
                {
                    let a = {};
                    return us(a, s),
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
function Nh(s) {
    return uw(s)
}
function Sh(s) {
    return s !== null && typeof s == "object" && Bh(s) === "[object Arguments]"
}
function gw(s) {
    return ia(s)
}
function fw(s) {
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
function mw(s, ...e) {
    let t = e.slice(0, -1)
      , i = e[e.length - 1]
      , r = s;
    for (let n = 0; n < t.length; n++) {
        let o = t[n];
        r = Mo(r, o, i, new Map)
    }
    return r
}
function Mo(s, e, t, i) {
    if (sa(s) && (s = Object(s)),
    e == null || typeof e != "object")
        return s;
    if (i.has(e))
        return Ky(i.get(e));
    if (i.set(e, s),
    Array.isArray(e)) {
        e = e.slice();
        for (let n = 0; n < e.length; n++)
            e[n] = e[n] ?? void 0
    }
    let r = [...Object.keys(e), ...$h(e)];
    for (let n = 0; n < r.length; n++) {
        let o = r[n]
          , a = e[o]
          , c = s[o];
        if (Sh(a) && (a = j({}, a)),
        Sh(c) && (c = j({}, c)),
        typeof Buffer < "u" && Buffer.isBuffer(a) && (a = Nh(a)),
        Array.isArray(a))
            if (typeof c == "object" && c != null) {
                let p = []
                  , d = Reflect.ownKeys(c);
                for (let u = 0; u < d.length; u++) {
                    let m = d[u];
                    p[m] = c[m]
                }
                c = p
            } else
                c = [];
        let l = t(c, a, o, s, e, i);
        l != null ? s[o] = l : Array.isArray(a) || Ah(c) && Ah(a) ? s[o] = Mo(c, a, t, i) : c == null && fw(a) ? s[o] = Mo({}, a, t, i) : c == null && gw(a) ? s[o] = Nh(a) : (c === void 0 || a !== void 0) && (s[o] = a)
    }
    return s
}
function yw(s, ...e) {
    return mw(s, ...e, zy)
}
var ww = Object.defineProperty
  , vw = Object.defineProperties
  , bw = Object.getOwnPropertyDescriptors
  , Th = Object.getOwnPropertySymbols
  , Ew = Object.prototype.hasOwnProperty
  , Iw = Object.prototype.propertyIsEnumerable
  , Oh = (s, e, t) => e in s ? ww(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Ar = (s, e) => {
    for (var t in e || (e = {}))
        Ew.call(e, t) && Oh(s, t, e[t]);
    if (Th)
        for (var t of Th(e))
            Iw.call(e, t) && Oh(s, t, e[t]);
    return s
}
  , Cw = (s, e) => vw(s, bw(e));
function Qe(s, e, t) {
    var i;
    let r = Jt(s);
    return ((i = e.rpcMap) == null ? void 0 : i[r.reference]) || `${jh}?chainId=${r.namespace}:${r.reference}&projectId=${t}`
}
function gs(s) {
    return s.includes(":") ? s.split(":")[1] : s
}
function Kh(s) {
    return s.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`)
}
function _w(s, e) {
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
function Nr(s={}, e={}) {
    let t = Rh(s)
      , i = Rh(e);
    return yw(t, i)
}
function Rh(s) {
    var e, t, i, r, n;
    let o = {};
    if (!Et(s))
        return o;
    for (let[a,c] of Object.entries(s)) {
        let l = Ni(a) ? [a] : c.chains
          , p = c.methods || []
          , d = c.events || []
          , u = c.rpcMap || {}
          , m = ds(a);
        o[m] = Cw(Ar(Ar({}, o[m]), c), {
            chains: ct(l, (e = o[m]) == null ? void 0 : e.chains),
            methods: ct(p, (t = o[m]) == null ? void 0 : t.methods),
            events: ct(d, (i = o[m]) == null ? void 0 : i.events)
        }),
        (Et(u) || Et(((r = o[m]) == null ? void 0 : r.rpcMap) || {})) && (o[m].rpcMap = Ar(Ar({}, u), (n = o[m]) == null ? void 0 : n.rpcMap))
    }
    return o
}
function xh(s) {
    return s.includes(":") ? s.split(":")[2] : s
}
function kh(s) {
    let e = {};
    for (let[t,i] of Object.entries(s)) {
        let r = i.methods || []
          , n = i.events || []
          , o = i.accounts || []
          , a = Ni(t) ? [t] : i.chains ? i.chains : Kh(i.accounts);
        e[t] = {
            chains: a,
            methods: r,
            events: n,
            accounts: o
        }
    }
    return e
}
function jo(s) {
    return typeof s == "number" ? s : s.includes("0x") ? parseInt(s, 16) : (s = s.includes(":") ? s.split(":")[1] : s,
    isNaN(Number(s)) ? s : Number(s))
}
var Wh = {}
  , Q = s => Wh[s]
  , $o = (s, e) => {
    Wh[s] = e
}
  , Pw = Object.defineProperty
  , Aw = (s, e, t) => e in s ? Pw(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Vs = (s, e, t) => Aw(s, typeof e != "symbol" ? e + "" : e, t)
  , Vo = class {
    constructor(e) {
        Vs(this, "name", "polkadot"),
        Vs(this, "client"),
        Vs(this, "httpProviders"),
        Vs(this, "events"),
        Vs(this, "namespace"),
        Vs(this, "chainId"),
        this.namespace = e.namespace,
        this.events = Q("events"),
        this.client = Q("client"),
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
        this.events.emit(nt.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getAccounts() {
        let e = this.namespace.accounts;
        return e ? e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        let e = {};
        return this.namespace.chains.forEach(t => {
            var i;
            let r = gs(t);
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
        let i = t || Qe(e, this.namespace, this.client.core.projectId);
        if (!i)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new je(new He(i,Q("disableProviderPing")))
    }
}
  , Nw = Object.defineProperty
  , Sw = Object.defineProperties
  , Tw = Object.getOwnPropertyDescriptors
  , Uh = Object.getOwnPropertySymbols
  , Ow = Object.prototype.hasOwnProperty
  , Rw = Object.prototype.propertyIsEnumerable
  , Ho = (s, e, t) => e in s ? Nw(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Dh = (s, e) => {
    for (var t in e || (e = {}))
        Ow.call(e, t) && Ho(s, t, e[t]);
    if (Uh)
        for (var t of Uh(e))
            Rw.call(e, t) && Ho(s, t, e[t]);
    return s
}
  , Fh = (s, e) => Sw(s, Tw(e))
  , Hs = (s, e, t) => Ho(s, typeof e != "symbol" ? e + "" : e, t)
  , zo = class {
    constructor(e) {
        Hs(this, "name", "eip155"),
        Hs(this, "client"),
        Hs(this, "chainId"),
        Hs(this, "namespace"),
        Hs(this, "httpProviders"),
        Hs(this, "events"),
        this.namespace = e.namespace,
        this.events = Q("events"),
        this.client = Q("client"),
        this.httpProviders = this.createHttpProviders(),
        this.chainId = parseInt(this.getDefaultChain())
    }
    request(e) {
        return h(this, null, function*() {
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
        this.events.emit(nt.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
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
        let i = t || Qe(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
        if (!i)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new je(new He(i,Q("disableProviderPing")))
    }
    setHttpProvider(e, t) {
        let i = this.createHttpProvider(e, t);
        i && (this.httpProviders[e] = i)
    }
    createHttpProviders() {
        let e = {};
        return this.namespace.chains.forEach(t => {
            var i;
            let r = parseInt(gs(t));
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
        return h(this, null, function*() {
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
        return h(this, null, function*() {
            var t, i, r, n, o;
            let a = (i = (t = e.request) == null ? void 0 : t.params) == null ? void 0 : i[0]
              , c = ((n = (r = e.request) == null ? void 0 : r.params) == null ? void 0 : n[1]) || []
              , l = `${a}${c.join(",")}`;
            if (!a)
                throw new Error("Missing address parameter in `wallet_getCapabilities` request");
            let p = this.client.session.get(e.topic)
              , d = ((o = p?.sessionProperties) == null ? void 0 : o.capabilities) || {};
            if (d != null && d[l])
                return d?.[l];
            let u = yield this.client.request(e);
            try {
                yield this.client.session.update(e.topic, {
                    sessionProperties: Fh(Dh({}, p.sessionProperties || {}), {
                        capabilities: Fh(Dh({}, d || {}), {
                            [l]: u
                        })
                    })
                })
            } catch (m) {
                console.warn("Failed to update session with capabilities", m)
            }
            return u
        })
    }
    getCallStatus(e) {
        return h(this, null, function*() {
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
        return h(this, null, function*() {
            var i;
            let r = new URL(e)
              , n = yield fetch(r, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(mt("eth_getUserOperationReceipt", [(i = t.request.params) == null ? void 0 : i[0]]))
            });
            if (!n.ok)
                throw new Error(`Failed to fetch user operation receipt - ${n.status}`);
            return yield n.json()
        })
    }
    getBundlerUrl(e, t) {
        return `${Hy}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${t}`
    }
}
  , xw = Object.defineProperty
  , kw = (s, e, t) => e in s ? xw(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , zs = (s, e, t) => kw(s, typeof e != "symbol" ? e + "" : e, t)
  , Ko = class {
    constructor(e) {
        zs(this, "name", "solana"),
        zs(this, "client"),
        zs(this, "httpProviders"),
        zs(this, "events"),
        zs(this, "namespace"),
        zs(this, "chainId"),
        this.namespace = e.namespace,
        this.events = Q("events"),
        this.client = Q("client"),
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
        this.events.emit(nt.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
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
            let r = gs(t);
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
        let i = t || Qe(e, this.namespace, this.client.core.projectId);
        if (!i)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new je(new He(i,Q("disableProviderPing")))
    }
}
  , Uw = Object.defineProperty
  , Dw = (s, e, t) => e in s ? Uw(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Ks = (s, e, t) => Dw(s, typeof e != "symbol" ? e + "" : e, t)
  , Wo = class {
    constructor(e) {
        Ks(this, "name", "cosmos"),
        Ks(this, "client"),
        Ks(this, "httpProviders"),
        Ks(this, "events"),
        Ks(this, "namespace"),
        Ks(this, "chainId"),
        this.namespace = e.namespace,
        this.events = Q("events"),
        this.client = Q("client"),
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
        this.events.emit(nt.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        let e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        let e = {};
        return this.namespace.chains.forEach(t => {
            var i;
            let r = gs(t);
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
        let i = t || Qe(e, this.namespace, this.client.core.projectId);
        if (!i)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new je(new He(i,Q("disableProviderPing")))
    }
}
  , Fw = Object.defineProperty
  , Lw = (s, e, t) => e in s ? Fw(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Ws = (s, e, t) => Lw(s, typeof e != "symbol" ? e + "" : e, t)
  , Go = class {
    constructor(e) {
        Ws(this, "name", "algorand"),
        Ws(this, "client"),
        Ws(this, "httpProviders"),
        Ws(this, "events"),
        Ws(this, "namespace"),
        Ws(this, "chainId"),
        this.namespace = e.namespace,
        this.events = Q("events"),
        this.client = Q("client"),
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
            let i = t || Qe(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
            if (!i)
                throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, i)
        }
        this.chainId = e,
        this.events.emit(nt.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
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
        let i = t || Qe(e, this.namespace, this.client.core.projectId);
        return typeof i > "u" ? void 0 : new je(new He(i,Q("disableProviderPing")))
    }
}
  , qw = Object.defineProperty
  , jw = (s, e, t) => e in s ? qw(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Gs = (s, e, t) => jw(s, typeof e != "symbol" ? e + "" : e, t)
  , Yo = class {
    constructor(e) {
        Gs(this, "name", "cip34"),
        Gs(this, "client"),
        Gs(this, "httpProviders"),
        Gs(this, "events"),
        Gs(this, "namespace"),
        Gs(this, "chainId"),
        this.namespace = e.namespace,
        this.events = Q("events"),
        this.client = Q("client"),
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
        this.events.emit(nt.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        let e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        let e = {};
        return this.namespace.chains.forEach(t => {
            let i = this.getCardanoRPCUrl(t)
              , r = gs(t);
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
        return new je(new He(i,Q("disableProviderPing")))
    }
}
  , $w = Object.defineProperty
  , Bw = (s, e, t) => e in s ? $w(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Ys = (s, e, t) => Bw(s, typeof e != "symbol" ? e + "" : e, t)
  , Jo = class {
    constructor(e) {
        Ys(this, "name", "elrond"),
        Ys(this, "client"),
        Ys(this, "httpProviders"),
        Ys(this, "events"),
        Ys(this, "namespace"),
        Ys(this, "chainId"),
        this.namespace = e.namespace,
        this.events = Q("events"),
        this.client = Q("client"),
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
        this.events.emit(nt.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
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
            let r = gs(t);
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
        let i = t || Qe(e, this.namespace, this.client.core.projectId);
        if (!i)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new je(new He(i,Q("disableProviderPing")))
    }
}
  , Mw = Object.defineProperty
  , Vw = (s, e, t) => e in s ? Mw(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Js = (s, e, t) => Vw(s, typeof e != "symbol" ? e + "" : e, t)
  , Xo = class {
    constructor(e) {
        Js(this, "name", "multiversx"),
        Js(this, "client"),
        Js(this, "httpProviders"),
        Js(this, "events"),
        Js(this, "namespace"),
        Js(this, "chainId"),
        this.namespace = e.namespace,
        this.events = Q("events"),
        this.client = Q("client"),
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
        this.events.emit(nt.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
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
            let r = gs(t);
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
        let i = t || Qe(e, this.namespace, this.client.core.projectId);
        if (!i)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new je(new He(i,Q("disableProviderPing")))
    }
}
  , Hw = Object.defineProperty
  , zw = (s, e, t) => e in s ? Hw(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Xs = (s, e, t) => zw(s, typeof e != "symbol" ? e + "" : e, t)
  , Zo = class {
    constructor(e) {
        Xs(this, "name", "near"),
        Xs(this, "client"),
        Xs(this, "httpProviders"),
        Xs(this, "events"),
        Xs(this, "namespace"),
        Xs(this, "chainId"),
        this.namespace = e.namespace,
        this.events = Q("events"),
        this.client = Q("client"),
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
            let i = t || Qe(`${this.name}:${e}`, this.namespace);
            if (!i)
                throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, i)
        }
        this.events.emit(nt.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
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
        let i = t || Qe(e, this.namespace);
        return typeof i > "u" ? void 0 : new je(new He(i,Q("disableProviderPing")))
    }
}
  , Kw = Object.defineProperty
  , Ww = (s, e, t) => e in s ? Kw(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Zs = (s, e, t) => Ww(s, typeof e != "symbol" ? e + "" : e, t)
  , Qo = class {
    constructor(e) {
        Zs(this, "name", "tezos"),
        Zs(this, "client"),
        Zs(this, "httpProviders"),
        Zs(this, "events"),
        Zs(this, "namespace"),
        Zs(this, "chainId"),
        this.namespace = e.namespace,
        this.events = Q("events"),
        this.client = Q("client"),
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
            let i = t || Qe(`${this.name}:${e}`, this.namespace);
            if (!i)
                throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, i)
        }
        this.events.emit(nt.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
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
        let i = t || Qe(e, this.namespace);
        return typeof i > "u" ? void 0 : new je(new He(i))
    }
}
  , Gw = Object.defineProperty
  , Yw = (s, e, t) => e in s ? Gw(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Qs = (s, e, t) => Yw(s, typeof e != "symbol" ? e + "" : e, t)
  , ea = class {
    constructor(e) {
        Qs(this, "name", ei),
        Qs(this, "client"),
        Qs(this, "httpProviders"),
        Qs(this, "events"),
        Qs(this, "namespace"),
        Qs(this, "chainId"),
        this.namespace = e.namespace,
        this.events = Q("events"),
        this.client = Q("client"),
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
        this.events.emit(nt.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
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
            let n = Jt(r);
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
        let i = t || Qe(e, this.namespace, this.client.core.projectId);
        if (!i)
            throw new Error(`No RPC url provided for chainId: ${e}`);
        return new je(new He(i,Q("disableProviderPing")))
    }
}
  , Jw = Object.defineProperty
  , Xw = Object.defineProperties
  , Zw = Object.getOwnPropertyDescriptors
  , Lh = Object.getOwnPropertySymbols
  , Qw = Object.prototype.hasOwnProperty
  , ev = Object.prototype.propertyIsEnumerable
  , ta = (s, e, t) => e in s ? Jw(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t
  , Sr = (s, e) => {
    for (var t in e || (e = {}))
        Qw.call(e, t) && ta(s, t, e[t]);
    if (Lh)
        for (var t of Lh(e))
            ev.call(e, t) && ta(s, t, e[t]);
    return s
}
  , Bo = (s, e) => Xw(s, Zw(e))
  , rt = (s, e, t) => ta(s, typeof e != "symbol" ? e + "" : e, t)
  , Tr = class s {
    constructor(e) {
        rt(this, "client"),
        rt(this, "namespaces"),
        rt(this, "optionalNamespaces"),
        rt(this, "sessionProperties"),
        rt(this, "scopedProperties"),
        rt(this, "events", new qh.default),
        rt(this, "rpcProviders", {}),
        rt(this, "session"),
        rt(this, "providerOpts"),
        rt(this, "logger"),
        rt(this, "uri"),
        rt(this, "disableProviderPing", !1),
        this.providerOpts = e,
        this.logger = typeof e?.logger < "u" && typeof e?.logger != "string" ? e.logger : (0,
        ws.default)(is({
            level: e?.logger || Ph
        })),
        this.disableProviderPing = e?.disableProviderPing || !1
    }
    static init(e) {
        return h(this, null, function*() {
            let t = new s(e);
            return yield t.initialize(),
            t
        })
    }
    request(e, t, i) {
        return h(this, null, function*() {
            let[r,n] = this.validateChain(t);
            if (!this.session)
                throw new Error("Please call connect() before request()");
            return yield this.getProvider(r).request({
                request: Sr({}, e),
                chainId: `${r}:${n}`,
                topic: this.session.topic,
                expiry: i
            })
        })
    }
    sendAsync(e, t, i, r) {
        let n = new Date().getTime();
        this.request(e, i, r).then(o => t(null, rs(n, o))).catch(o => t(o, void 0))
    }
    enable() {
        return h(this, null, function*() {
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
        return h(this, null, function*() {
            var e;
            if (!this.session)
                throw new Error("Please call connect() before enable()");
            yield this.client.disconnect({
                topic: (e = this.session) == null ? void 0 : e.topic,
                reason: ee("USER_DISCONNECTED")
            }),
            yield this.cleanup()
        })
    }
    connect(e) {
        return h(this, null, function*() {
            if (!this.client)
                throw new Error("Sign Client not initialized");
            if (this.setNamespaces(e),
            yield this.cleanupPendingPairings(),
            !e.skipPairing)
                return yield this.pair(e.pairingTopic)
        })
    }
    authenticate(e, t) {
        return h(this, null, function*() {
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
                let o = kh(this.session.namespaces);
                this.namespaces = Nr(this.namespaces, o),
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
        return h(this, null, function*() {
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
            let n = kh(r.namespaces);
            return this.namespaces = Nr(this.namespaces, n),
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
            n.name === ei ? n.setDefaultChain(`${i}:${r}`, t) : n.setDefaultChain(r, t)
        } catch (i) {
            if (!/Please call connect/.test(i.message))
                throw i
        }
    }
    cleanupPendingPairings() {
        return h(this, arguments, function*(e={}) {
            this.logger.info("Cleaning up inactive pairings...");
            let t = this.client.pairing.getAll();
            if (bt(t)) {
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
        return h(this, null, function*() {
            this.namespaces = (yield this.getFromStore("namespaces")) || {},
            this.optionalNamespaces = (yield this.getFromStore("optionalNamespaces")) || {},
            this.session && this.createProviders()
        })
    }
    initialize() {
        return h(this, null, function*() {
            this.logger.trace("Initialized"),
            yield this.createClient(),
            yield this.checkStorage(),
            this.registerEventListeners()
        })
    }
    createClient() {
        return h(this, null, function*() {
            var e, t;
            if (this.client = this.providerOpts.client || (yield Ir.init({
                core: this.providerOpts.core,
                logger: this.providerOpts.logger || Ph,
                relayUrl: this.providerOpts.relayUrl || By,
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
        let e = [...new Set(Object.keys(this.session.namespaces).map(t => ds(t)))];
        $o("client", this.client),
        $o("events", this.events),
        $o("disableProviderPing", this.disableProviderPing),
        e.forEach(t => {
            if (!this.session)
                return;
            let i = _w(t, this.session)
              , r = Kh(i)
              , n = Nr(this.namespaces, this.optionalNamespaces)
              , o = Bo(Sr({}, n[t]), {
                accounts: i,
                chains: r
            });
            switch (t) {
            case "eip155":
                this.rpcProviders[t] = new zo({
                    namespace: o
                });
                break;
            case "algorand":
                this.rpcProviders[t] = new Go({
                    namespace: o
                });
                break;
            case "solana":
                this.rpcProviders[t] = new Ko({
                    namespace: o
                });
                break;
            case "cosmos":
                this.rpcProviders[t] = new Wo({
                    namespace: o
                });
                break;
            case "polkadot":
                this.rpcProviders[t] = new Vo({
                    namespace: o
                });
                break;
            case "cip34":
                this.rpcProviders[t] = new Yo({
                    namespace: o
                });
                break;
            case "elrond":
                this.rpcProviders[t] = new Jo({
                    namespace: o
                });
                break;
            case "multiversx":
                this.rpcProviders[t] = new Xo({
                    namespace: o
                });
                break;
            case "near":
                this.rpcProviders[t] = new Zo({
                    namespace: o
                });
                break;
            case "tezos":
                this.rpcProviders[t] = new Qo({
                    namespace: o
                });
                break;
            default:
                this.rpcProviders[ei] ? this.rpcProviders[ei].updateNamespace(o) : this.rpcProviders[ei] = new ea({
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
                o && bt(o) && this.events.emit("accountsChanged", o.map(xh))
            } else if (n.name === "chainChanged") {
                let o = i.chainId
                  , a = i.event.data
                  , c = ds(o)
                  , l = jo(o) !== jo(a) ? `${c}:${jo(a)}` : o;
                this.onChainChanged(l)
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
            this.session = Bo(Sr({}, o), {
                namespaces: n
            }),
            this.onSessionUpdate(),
            this.events.emit("session_update", {
                topic: e,
                params: t
            })
        }
        ),
        this.client.on("session_delete", e => h(this, null, function*() {
            var t;
            e.topic === ((t = this.session) == null ? void 0 : t.topic) && (yield this.cleanup(),
            this.events.emit("session_delete", e),
            this.events.emit("disconnect", Bo(Sr({}, ee("USER_DISCONNECTED")), {
                data: e.topic
            })))
        })),
        this.on(nt.DEFAULT_CHAIN_CHANGED, e => {
            this.onChainChanged(e, !0)
        }
        )
    }
    getProvider(e) {
        return this.rpcProviders[e] || this.rpcProviders[ei]
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
        this.optionalNamespaces = Nr(t, i),
        this.sessionProperties = r,
        this.scopedProperties = n
    }
    validateChain(e) {
        let[t,i] = e?.split(":") || ["", ""];
        if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [t, i];
        if (t && !Object.keys(this.namespaces || {}).map(o => ds(o)).includes(t))
            throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
        if (t && i)
            return [t, i];
        let r = ds(Object.keys(this.namespaces)[0])
          , n = this.rpcProviders[r].getDefaultChain();
        return [r, n]
    }
    requestAccounts() {
        return h(this, null, function*() {
            let[e] = this.validateChain();
            return yield this.getProvider(e).requestAccounts()
        })
    }
    onChainChanged(e, t=!1) {
        return h(this, null, function*() {
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
            let a = o.filter(c => c.includes(`${i}:`)).map(xh);
            if (!bt(a))
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
        return h(this, null, function*() {
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
        return h(this, null, function*() {
            var i;
            let r = ((i = this.session) == null ? void 0 : i.topic) || "";
            yield this.client.core.storage.setItem(`${Pr}/${e}${r}`, t)
        })
    }
    getFromStore(e) {
        return h(this, null, function*() {
            var t;
            let i = ((t = this.session) == null ? void 0 : t.topic) || "";
            return yield this.client.core.storage.getItem(`${Pr}/${e}${i}`)
        })
    }
    deleteFromStore(e) {
        return h(this, null, function*() {
            var t;
            let i = ((t = this.session) == null ? void 0 : t.topic) || "";
            yield this.client.core.storage.removeItem(`${Pr}/${e}${i}`)
        })
    }
    cleanupStorage() {
        return h(this, null, function*() {
            var e;
            try {
                if (((e = this.client) == null ? void 0 : e.session.length) > 0)
                    return;
                let t = yield this.client.core.storage.getKeys();
                for (let i of t)
                    i.startsWith(Pr) && (yield this.client.core.storage.removeItem(i))
            } catch (t) {
                this.logger.warn("Failed to cleanup storage", t)
            }
        })
    }
}
;
function Ui(s, e) {
    return ce.getConnectorId(s) === e
}
function ra(s) {
    let e = Array.from(_.state.chains.keys())
      , t = [];
    return s ? (t.push([s, _.state.chains.get(s)]),
    Ui(s, se.CONNECTOR_ID.WALLET_CONNECT) ? e.forEach(i => {
        i !== s && Ui(i, se.CONNECTOR_ID.WALLET_CONNECT) && t.push([i, _.state.chains.get(i)])
    }
    ) : Ui(s, se.CONNECTOR_ID.AUTH) && e.forEach(i => {
        i !== s && Ui(i, se.CONNECTOR_ID.AUTH) && t.push([i, _.state.chains.get(i)])
    }
    )) : t = Array.from(_.state.chains.entries()),
    t
}
var fs = {
    ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
    ERROR_CODE_DEFAULT: 5e3,
    ERROR_INVALID_CHAIN_ID: 32603,
    DEFAULT_ALLOWED_ANCESTORS: ["http://localhost:*", "https://*.pages.dev", "https://*.vercel.app", "https://*.ngrok-free.app", "https://secure-mobile.walletconnect.com", "https://secure-mobile.walletconnect.org"]
};
function Bt(s) {
    return j({
        formatters: void 0,
        fees: void 0,
        serializers: void 0
    }, s)
}
var na = Bt({
    id: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
    name: "Solana",
    network: "solana-mainnet",
    nativeCurrency: {
        name: "Solana",
        symbol: "SOL",
        decimals: 9
    },
    rpcUrls: {
        default: {
            http: ["https://rpc.walletconnect.org/v1"]
        }
    },
    blockExplorers: {
        default: {
            name: "Solscan",
            url: "https://solscan.io"
        }
    },
    testnet: !1,
    chainNamespace: "solana",
    caipNetworkId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
    deprecatedCaipNetworkId: "solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ"
});
var oa = Bt({
    id: "EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
    name: "Solana Devnet",
    network: "solana-devnet",
    nativeCurrency: {
        name: "Solana",
        symbol: "SOL",
        decimals: 9
    },
    rpcUrls: {
        default: {
            http: ["https://rpc.walletconnect.org/v1"]
        }
    },
    blockExplorers: {
        default: {
            name: "Solscan",
            url: "https://solscan.io"
        }
    },
    testnet: !0,
    chainNamespace: "solana",
    caipNetworkId: "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
    deprecatedCaipNetworkId: "solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K"
});
var Nb = Bt({
    id: "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
    name: "Solana Testnet",
    network: "solana-testnet",
    nativeCurrency: {
        name: "Solana",
        symbol: "SOL",
        decimals: 9
    },
    rpcUrls: {
        default: {
            http: ["https://rpc.walletconnect.org/v1"]
        }
    },
    blockExplorers: {
        default: {
            name: "Solscan",
            url: "https://solscan.io"
        }
    },
    testnet: !0,
    chainNamespace: "solana",
    caipNetworkId: "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z"
});
var Ub = Bt({
    id: "000000000019d6689c085ae165831e93",
    caipNetworkId: "bip122:000000000019d6689c085ae165831e93",
    chainNamespace: "bip122",
    name: "Bitcoin",
    nativeCurrency: {
        name: "Bitcoin",
        symbol: "BTC",
        decimals: 8
    },
    rpcUrls: {
        default: {
            http: ["https://rpc.walletconnect.org/v1"]
        }
    }
})
  , Db = Bt({
    id: "000000000933ea01ad0ee984209779ba",
    caipNetworkId: "bip122:000000000933ea01ad0ee984209779ba",
    chainNamespace: "bip122",
    name: "Bitcoin Testnet",
    nativeCurrency: {
        name: "Bitcoin",
        symbol: "BTC",
        decimals: 8
    },
    rpcUrls: {
        default: {
            http: ["https://rpc.walletconnect.org/v1"]
        }
    },
    testnet: !0
});
var tv = {
    solana: ["solana_signMessage", "solana_signTransaction", "solana_requestAccounts", "solana_getAccounts", "solana_signAllTransactions", "solana_signAndSendTransaction"],
    eip155: ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_getCallsStatus", "wallet_showCallsStatus", "wallet_sendCalls", "wallet_getCapabilities", "wallet_grantPermissions", "wallet_revokePermissions", "wallet_getAssets"],
    bip122: ["sendTransfer", "signMessage", "signPsbt", "getAccountAddresses"]
}
  , si = {
    getMethodsByChainNamespace(s) {
        return tv[s] || []
    },
    createDefaultNamespace(s) {
        return {
            methods: this.getMethodsByChainNamespace(s),
            events: ["accountsChanged", "chainChanged"],
            chains: [],
            rpcMap: {}
        }
    },
    applyNamespaceOverrides(s, e) {
        if (!e)
            return j({}, s);
        let t = j({}, s)
          , i = new Set;
        if (e.methods && Object.keys(e.methods).forEach(r => i.add(r)),
        e.chains && Object.keys(e.chains).forEach(r => i.add(r)),
        e.events && Object.keys(e.events).forEach(r => i.add(r)),
        e.rpcMap && Object.keys(e.rpcMap).forEach(r => {
            let[n] = r.split(":");
            n && i.add(n)
        }
        ),
        i.forEach(r => {
            t[r] || (t[r] = this.createDefaultNamespace(r))
        }
        ),
        e.methods && Object.entries(e.methods).forEach( ([r,n]) => {
            t[r] && (t[r].methods = n)
        }
        ),
        e.chains && Object.entries(e.chains).forEach( ([r,n]) => {
            t[r] && (t[r].chains = n)
        }
        ),
        e.events && Object.entries(e.events).forEach( ([r,n]) => {
            t[r] && (t[r].events = n)
        }
        ),
        e.rpcMap) {
            let r = new Set;
            Object.entries(e.rpcMap).forEach( ([n,o]) => {
                let[a,c] = n.split(":");
                !a || !c || !t[a] || (t[a].rpcMap || (t[a].rpcMap = {}),
                r.has(a) || (t[a].rpcMap = {},
                r.add(a)),
                t[a].rpcMap[c] = o)
            }
            )
        }
        return t
    },
    createNamespaces(s, e) {
        let t = s.reduce( (i, r) => {
            let {id: n, chainNamespace: o, rpcUrls: a} = r
              , c = a.default.http[0];
            i[o] || (i[o] = this.createDefaultNamespace(o));
            let l = `${o}:${n}`
              , p = i[o];
            switch (p.chains.push(l),
            l) {
            case na.caipNetworkId:
                p.chains.push(na.deprecatedCaipNetworkId);
                break;
            case oa.caipNetworkId:
                p.chains.push(oa.deprecatedCaipNetworkId);
                break;
            default:
            }
            return p?.rpcMap && c && (p.rpcMap[n] = c),
            i
        }
        , {});
        return this.applyNamespaceOverrides(t, e)
    },
    resolveReownName: s => h(void 0, null, function*() {
        let e = yield ji.resolveName(s);
        return (Object.values(e?.addresses) || [])[0]?.address || !1
    }),
    getChainsFromNamespaces(s={}) {
        return Object.values(s).flatMap(e => {
            let t = e.chains || []
              , i = e.accounts.map(r => {
                let[n,o] = r.split(":");
                return `${n}:${o}`
            }
            );
            return Array.from(new Set([...t, ...i]))
        }
        )
    },
    isSessionEventData(s) {
        return typeof s == "object" && s !== null && "id"in s && "topic"in s && "params"in s && typeof s.params == "object" && s.params !== null && "chainId"in s.params && "event"in s.params && typeof s.params.event == "object" && s.params.event !== null
    },
    isOriginAllowed(s, e, t) {
        for (let i of [...e, ...t])
            if (i.includes("*")) {
                let n = `^${i.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&").replace(/\\\*/gu, ".*")}$`;
                if (new RegExp(n,"u").test(s))
                    return !0
            } else
                try {
                    if (new URL(i).origin === s)
                        return !0
                } catch {
                    if (i === s)
                        return !0
                }
        return !1
    }
};
var ii = class {
    constructor({provider: e, namespace: t}) {
        this.id = se.CONNECTOR_ID.WALLET_CONNECT,
        this.name = ci.ConnectorNamesMap[se.CONNECTOR_ID.WALLET_CONNECT],
        this.type = "WALLET_CONNECT",
        this.imageId = ci.ConnectorImageIds[se.CONNECTOR_ID.WALLET_CONNECT],
        this.getCaipNetworks = _.getCaipNetworks.bind(_),
        this.caipNetworks = this.getCaipNetworks(),
        this.provider = e,
        this.chain = t
    }
    get chains() {
        return this.getCaipNetworks()
    }
    connectWalletConnect() {
        return h(this, null, function*() {
            if (!(yield this.authenticate())) {
                let t = this.getCaipNetworks()
                  , i = q.state.universalProviderConfigOverride
                  , r = si.createNamespaces(t, i);
                yield this.provider.connect({
                    optionalNamespaces: r
                })
            }
            return {
                clientId: yield this.provider.client.core.crypto.getClientId(),
                session: this.provider.session
            }
        })
    }
    disconnect() {
        return h(this, null, function*() {
            yield this.provider.disconnect()
        })
    }
    authenticate() {
        return h(this, null, function*() {
            let e = this.chains.map(t => t.caipNetworkId);
            return $i.universalProviderAuthenticate({
                universalProvider: this.provider,
                chains: e,
                methods: sv
            })
        })
    }
}
  , sv = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_getCallsStatus", "wallet_sendCalls", "wallet_getCapabilities", "wallet_grantPermissions", "wallet_revokePermissions", "wallet_getAssets"];
var Or = class {
    constructor(e) {
        this.availableConnectors = [],
        this.eventListeners = new Map,
        this.getCaipNetworks = t => _.getCaipNetworks(t),
        e && this.construct(e)
    }
    construct(e) {
        this.projectId = e.projectId,
        this.namespace = e.namespace,
        this.adapterType = e.adapterType
    }
    get connectors() {
        return this.availableConnectors
    }
    get networks() {
        return this.getCaipNetworks(this.namespace)
    }
    setAuthProvider(e) {
        this.addConnector({
            id: se.CONNECTOR_ID.AUTH,
            type: "AUTH",
            name: se.CONNECTOR_NAMES.AUTH,
            provider: e,
            imageId: ci.ConnectorImageIds[se.CONNECTOR_ID.AUTH],
            chain: this.namespace,
            chains: []
        })
    }
    addConnector(...e) {
        let t = new Set;
        this.availableConnectors = [...e, ...this.availableConnectors].filter(i => t.has(i.id) ? !1 : (t.add(i.id),
        !0)),
        this.emit("connectors", this.availableConnectors)
    }
    setStatus(e, t) {
        K.setStatus(e, t)
    }
    on(e, t) {
        this.eventListeners.has(e) || this.eventListeners.set(e, new Set),
        this.eventListeners.get(e)?.add(t)
    }
    off(e, t) {
        let i = this.eventListeners.get(e);
        i && i.delete(t)
    }
    removeAllEventListeners() {
        this.eventListeners.forEach(e => {
            e.clear()
        }
        )
    }
    emit(e, t) {
        let i = this.eventListeners.get(e);
        i && i.forEach(r => r(t))
    }
    connectWalletConnect(e) {
        return h(this, null, function*() {
            return {
                clientId: (yield this.getWalletConnectConnector().connectWalletConnect()).clientId
            }
        })
    }
    switchNetwork(e) {
        return h(this, null, function*() {
            let {caipNetwork: t, providerType: i} = e;
            if (!e.provider)
                return;
            let r = "provider"in e.provider ? e.provider.provider : e.provider;
            if (i === "WALLET_CONNECT") {
                r.setDefaultChain(t.caipNetworkId);
                return
            }
            if (r && i === "AUTH") {
                let n = r
                  , o = K.state.preferredAccountTypes?.[t.chainNamespace];
                yield n.switchNetwork(t.caipNetworkId);
                let a = yield n.getUser({
                    chainId: t.caipNetworkId,
                    preferredAccountType: o
                });
                this.emit("switchNetwork", a)
            }
        })
    }
    getWalletConnectConnector() {
        let e = this.connectors.find(t => t instanceof ii);
        if (!e)
            throw new Error("WalletConnectConnector not found");
        return e
    }
}
;
var Rr = class extends Or {
    setUniversalProvider(e) {
        this.addConnector(new ii({
            provider: e,
            caipNetworks: this.getCaipNetworks(),
            namespace: this.namespace
        }))
    }
    connect(e) {
        return h(this, null, function*() {
            return Promise.resolve({
                id: "WALLET_CONNECT",
                type: "WALLET_CONNECT",
                chainId: Number(e.chainId),
                provider: this.provider,
                address: ""
            })
        })
    }
    disconnect() {
        return h(this, null, function*() {
            try {
                yield this.getWalletConnectConnector().disconnect()
            } catch (e) {
                console.warn("UniversalAdapter:disconnect - error", e)
            }
        })
    }
    getAccounts(t) {
        return h(this, arguments, function*({namespace: e}) {
            let r = this.provider?.session?.namespaces?.[e]?.accounts?.map(n => {
                let[,,o] = n.split(":");
                return o
            }
            ).filter( (n, o, a) => a.indexOf(n) === o) || [];
            return Promise.resolve({
                accounts: r.map(n => ze.createAccount(e, n, e === "bip122" ? "payment" : "eoa"))
            })
        })
    }
    syncConnectors() {
        return h(this, null, function*() {
            return Promise.resolve()
        })
    }
    getBalance(e) {
        return h(this, null, function*() {
            if (!(e.caipNetwork && Ae.BALANCE_SUPPORTED_CHAINS.includes(e.caipNetwork?.chainNamespace)) || e.caipNetwork?.testnet)
                return {
                    balance: "0.00",
                    symbol: e.caipNetwork?.nativeCurrency.symbol || ""
                };
            if (K.state.balanceLoading && e.chainId === _.state.activeCaipNetwork?.id)
                return {
                    balance: K.state.balance || "0.00",
                    symbol: K.state.balanceSymbol || ""
                };
            let r = (yield K.fetchTokenBalance()).find(n => n.chainId === `${e.caipNetwork?.chainNamespace}:${e.chainId}` && n.symbol === e.caipNetwork?.nativeCurrency.symbol);
            return {
                balance: r?.quantity.numeric || "0.00",
                symbol: r?.symbol || e.caipNetwork?.nativeCurrency.symbol || ""
            }
        })
    }
    signMessage(e) {
        return h(this, null, function*() {
            let {provider: t, message: i, address: r} = e;
            if (!t)
                throw new Error("UniversalAdapter:signMessage - provider is undefined");
            let n = "";
            return _.state.activeCaipNetwork?.chainNamespace === se.CHAIN.SOLANA ? n = (yield t.request({
                method: "solana_signMessage",
                params: {
                    message: er.encode(new TextEncoder().encode(i)),
                    pubkey: r
                }
            }, _.state.activeCaipNetwork?.caipNetworkId)).signature : n = yield t.request({
                method: "personal_sign",
                params: [i, r]
            }, _.state.activeCaipNetwork?.caipNetworkId),
            {
                signature: n
            }
        })
    }
    estimateGas() {
        return h(this, null, function*() {
            return Promise.resolve({
                gas: BigInt(0)
            })
        })
    }
    sendTransaction() {
        return h(this, null, function*() {
            return Promise.resolve({
                hash: ""
            })
        })
    }
    walletGetAssets(e) {
        return Promise.resolve({})
    }
    writeContract() {
        return h(this, null, function*() {
            return Promise.resolve({
                hash: ""
            })
        })
    }
    parseUnits() {
        return 0n
    }
    formatUnits() {
        return "0"
    }
    getCapabilities() {
        return h(this, null, function*() {
            return Promise.resolve({})
        })
    }
    grantPermissions() {
        return h(this, null, function*() {
            return Promise.resolve({})
        })
    }
    revokePermissions() {
        return h(this, null, function*() {
            return Promise.resolve("0x")
        })
    }
    syncConnection() {
        return h(this, null, function*() {
            return Promise.resolve({
                id: "WALLET_CONNECT",
                type: "WALLET_CONNECT",
                chainId: 1,
                provider: this.provider,
                address: ""
            })
        })
    }
    switchNetwork(e) {
        return h(this, null, function*() {
            let {caipNetwork: t} = e
              , i = this.getWalletConnectConnector();
            if (t.chainNamespace === se.CHAIN.EVM)
                try {
                    yield i.provider?.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: Fr(t.id)
                        }]
                    })
                } catch (r) {
                    if (r.code === fs.ERROR_CODE_UNRECOGNIZED_CHAIN_ID || r.code === fs.ERROR_INVALID_CHAIN_ID || r.code === fs.ERROR_CODE_DEFAULT || r?.data?.originalError?.code === fs.ERROR_CODE_UNRECOGNIZED_CHAIN_ID)
                        try {
                            yield i.provider?.request({
                                method: "wallet_addEthereumChain",
                                params: [{
                                    chainId: Fr(t.id),
                                    rpcUrls: [t?.rpcUrls.chainDefault?.http],
                                    chainName: t.name,
                                    nativeCurrency: t.nativeCurrency,
                                    blockExplorerUrls: [t.blockExplorers?.default.url]
                                }]
                            })
                        } catch {
                            throw new Error("Chain is not supported")
                        }
                }
            i.provider.setDefaultChain(t.caipNetworkId)
        })
    }
    getWalletConnectProvider() {
        return this.connectors.find(i => i.type === "WALLET_CONNECT")?.provider
    }
}
;
var iv = ["email", "socials", "swaps", "onramp", "activity", "reownBranding"]
  , xr = {
    email: {
        apiFeatureName: "social_login",
        localFeatureName: "email",
        returnType: !1,
        isLegacy: !1,
        isAvailableOnBasic: !1,
        processApi: s => {
            if (!s?.config)
                return !1;
            let e = s.config;
            return !!s.isEnabled && e.includes("email")
        }
        ,
        processFallback: s => s === void 0 ? Ae.DEFAULT_REMOTE_FEATURES.email : !!s
    },
    socials: {
        apiFeatureName: "social_login",
        localFeatureName: "socials",
        returnType: !1,
        isLegacy: !1,
        isAvailableOnBasic: !1,
        processApi: s => {
            if (!s?.config)
                return !1;
            let e = s.config;
            return s.isEnabled && e.length > 0 ? e.filter(t => t !== "email") : !1
        }
        ,
        processFallback: s => s === void 0 ? Ae.DEFAULT_REMOTE_FEATURES.socials : typeof s == "boolean" ? s ? Ae.DEFAULT_REMOTE_FEATURES.socials : !1 : s
    },
    swaps: {
        apiFeatureName: "swap",
        localFeatureName: "swaps",
        returnType: !1,
        isLegacy: !1,
        isAvailableOnBasic: !1,
        processApi: s => {
            if (!s?.config)
                return !1;
            let e = s.config;
            return s.isEnabled && e.length > 0 ? e : !1
        }
        ,
        processFallback: s => s === void 0 ? Ae.DEFAULT_REMOTE_FEATURES.swaps : typeof s == "boolean" ? s ? Ae.DEFAULT_REMOTE_FEATURES.swaps : !1 : s
    },
    onramp: {
        apiFeatureName: "onramp",
        localFeatureName: "onramp",
        returnType: !1,
        isLegacy: !1,
        isAvailableOnBasic: !1,
        processApi: s => {
            if (!s?.config)
                return !1;
            let e = s.config;
            return s.isEnabled && e.length > 0 ? e : !1
        }
        ,
        processFallback: s => s === void 0 ? Ae.DEFAULT_REMOTE_FEATURES.onramp : typeof s == "boolean" ? s ? Ae.DEFAULT_REMOTE_FEATURES.onramp : !1 : s
    },
    activity: {
        apiFeatureName: "activity",
        localFeatureName: "history",
        returnType: !1,
        isLegacy: !0,
        isAvailableOnBasic: !1,
        processApi: s => !!s.isEnabled,
        processFallback: s => s === void 0 ? Ae.DEFAULT_REMOTE_FEATURES.activity : !!s
    },
    reownBranding: {
        apiFeatureName: "reown_branding",
        localFeatureName: "reownBranding",
        returnType: !1,
        isLegacy: !1,
        isAvailableOnBasic: !1,
        processApi: s => !!s.isEnabled,
        processFallback: s => s === void 0 ? Ae.DEFAULT_REMOTE_FEATURES.reownBranding : !!s
    }
}
  , Gh = {
    localSettingsOverridden: new Set,
    getApiConfig(s, e) {
        return e?.find(t => t.id === s)
    },
    addWarning(s, e) {
        if (s !== void 0) {
            let t = xr[e]
              , i = t.isLegacy ? `"features.${t.localFeatureName}" (now "${e}")` : `"features.${e}"`;
            this.localSettingsOverridden.add(i)
        }
    },
    processFeature(s, e, t, i, r) {
        let n = xr[s]
          , o = e[n.localFeatureName];
        if (r && !n.isAvailableOnBasic)
            return !1;
        if (i) {
            let a = this.getApiConfig(n.apiFeatureName, t);
            return a?.config === null ? this.processFallbackFeature(s, o) : a?.config ? (o !== void 0 && this.addWarning(o, s),
            this.processApiFeature(s, a)) : !1
        }
        return this.processFallbackFeature(s, o)
    },
    processApiFeature(s, e) {
        return xr[s].processApi(e)
    },
    processFallbackFeature(s, e) {
        return xr[s].processFallback(e)
    },
    fetchRemoteFeatures(s) {
        return h(this, null, function*() {
            let e = s.basic ?? !1
              , t = s.features || {};
            this.localSettingsOverridden.clear();
            let i = null
              , r = !1;
            try {
                i = yield qi.fetchProjectConfig(),
                r = i != null
            } catch (o) {
                console.warn("[Reown Config] Failed to fetch remote project configuration. Using local/default values.", o)
            }
            let n = r && !e ? Ae.DEFAULT_REMOTE_FEATURES : Ae.DEFAULT_REMOTE_FEATURES_DISABLED;
            try {
                for (let o of iv) {
                    let a = this.processFeature(o, t, i, r, e);
                    Object.assign(n, {
                        [o]: a
                    })
                }
            } catch (o) {
                return console.warn("[Reown Config] Failed to process the configuration from Cloud. Using default values.", o),
                Ae.DEFAULT_REMOTE_FEATURES
            }
            if (r && this.localSettingsOverridden.size > 0) {
                let o = `Your local configuration for ${Array.from(this.localSettingsOverridden).join(", ")} was ignored because a remote configuration was successfully fetched. Please manage these features via your project dashboard on dashboard.reown.com.`;
                Vt.open({
                    shortMessage: "Local configuration ignored",
                    longMessage: `[Reown Config Notice] ${o}`
                }, "warning")
            }
            return n
        })
    }
};
var kr = class {
    constructor(e) {
        this.chainNamespaces = [],
        this.remoteFeatures = {},
        this.reportedAlertErrors = {},
        this.getCaipNetwork = (t, i) => {
            if (t) {
                let r = _.getNetworkData(t)?.requestedCaipNetworks?.find(a => a.id === i);
                if (r)
                    return r;
                let n = _.getNetworkData(t)?.caipNetwork;
                return n || _.getRequestedCaipNetworks(t).filter(a => a.chainNamespace === t)?.[0]
            }
            return _.state.activeCaipNetwork || this.defaultCaipNetwork
        }
        ,
        this.getCaipNetworkId = () => {
            let t = this.getCaipNetwork();
            if (t)
                return t.id
        }
        ,
        this.getCaipNetworks = t => _.getCaipNetworks(t),
        this.getActiveChainNamespace = () => _.state.activeChain,
        this.setRequestedCaipNetworks = (t, i) => {
            _.setRequestedCaipNetworks(t, i)
        }
        ,
        this.getApprovedCaipNetworkIds = () => _.getAllApprovedCaipNetworkIds(),
        this.getCaipAddress = t => _.state.activeChain === t || !t ? _.state.activeCaipAddress : _.getAccountProp("caipAddress", t),
        this.setClientId = t => {
            Vr.setClientId(t)
        }
        ,
        this.getProvider = t => le.getProvider(t),
        this.getProviderType = t => le.getProviderId(t),
        this.getPreferredAccountType = t => K.state.preferredAccountTypes?.[t],
        this.setCaipAddress = (t, i) => {
            K.setCaipAddress(t, i),
            t && q.state.enableEmbedded && this.close()
        }
        ,
        this.setBalance = (t, i, r) => {
            K.setBalance(t, i, r)
        }
        ,
        this.setProfileName = (t, i) => {
            K.setProfileName(t, i)
        }
        ,
        this.setProfileImage = (t, i) => {
            K.setProfileImage(t, i)
        }
        ,
        this.setUser = (t, i) => {
            K.setUser(t, i)
        }
        ,
        this.resetAccount = t => {
            K.resetAccount(t)
        }
        ,
        this.setCaipNetwork = t => {
            _.setActiveCaipNetwork(t)
        }
        ,
        this.setCaipNetworkOfNamespace = (t, i) => {
            _.setChainNetworkData(i, {
                caipNetwork: t
            })
        }
        ,
        this.setAllAccounts = (t, i) => {
            K.setAllAccounts(t, i),
            q.setHasMultipleAddresses(t?.length > 1)
        }
        ,
        this.setStatus = (t, i) => {
            K.setStatus(t, i),
            ce.isConnected() ? Le.setConnectionStatus("connected") : Le.setConnectionStatus("disconnected")
        }
        ,
        this.getAddressByChainNamespace = t => _.getAccountProp("address", t),
        this.setConnectors = t => {
            let i = [...ce.state.allConnectors, ...t];
            ce.setConnectors(i)
        }
        ,
        this.setConnections = (t, i) => {
            Ke.setConnections(t, i)
        }
        ,
        this.fetchIdentity = t => Vr.fetchIdentity(t),
        this.getReownName = t => ji.getNamesForAddress(t),
        this.getConnectors = () => ce.getConnectors(),
        this.getConnectorImage = t => va.getConnectorImage(t),
        this.setConnectedWalletInfo = (t, i) => {
            let r = le.getProviderId(i)
              , n = t ? be(j({}, t), {
                type: r
            }) : void 0;
            K.setConnectedWalletInfo(n, i)
        }
        ,
        this.getIsConnectedState = () => !!_.state.activeCaipAddress,
        this.addAddressLabel = (t, i, r) => {
            K.addAddressLabel(t, i, r)
        }
        ,
        this.removeAddressLabel = (t, i) => {
            K.removeAddressLabel(t, i)
        }
        ,
        this.getAddress = t => _.state.activeChain === t || !t ? K.state.address : _.getAccountProp("address", t),
        this.setApprovedCaipNetworksData = t => _.setApprovedCaipNetworksData(t),
        this.resetNetwork = t => {
            _.resetNetwork(t)
        }
        ,
        this.addConnector = t => {
            ce.addConnector(t)
        }
        ,
        this.resetWcConnection = () => {
            Ke.resetWcConnection()
        }
        ,
        this.setAddressExplorerUrl = (t, i) => {
            K.setAddressExplorerUrl(t, i)
        }
        ,
        this.setSmartAccountDeployed = (t, i) => {
            K.setSmartAccountDeployed(t, i)
        }
        ,
        this.setSmartAccountEnabledNetworks = (t, i) => {
            _.setSmartAccountEnabledNetworks(t, i)
        }
        ,
        this.setPreferredAccountType = (t, i) => {
            K.setPreferredAccountType(t, i)
        }
        ,
        this.setEIP6963Enabled = t => {
            q.setEIP6963Enabled(t)
        }
        ,
        this.handleUnsafeRPCRequest = () => {
            if (this.isOpen()) {
                if (this.isTransactionStackEmpty())
                    return;
                this.redirect("ApproveTransaction")
            } else
                this.open({
                    view: "ApproveTransaction"
                })
        }
        ,
        this.options = e,
        this.version = e.sdkVersion,
        this.caipNetworks = this.extendCaipNetworks(e),
        this.chainNamespaces = this.getChainNamespacesSet(e.adapters, this.caipNetworks),
        this.defaultCaipNetwork = this.extendDefaultCaipNetwork(e),
        this.chainAdapters = this.createAdapters(e.adapters),
        this.readyPromise = this.initialize(e)
    }
    getChainNamespacesSet(e, t) {
        let i = e?.map(n => n.namespace).filter(n => !!n);
        if (i?.length)
            return [...new Set(i)];
        let r = t?.map(n => n.chainNamespace);
        return [...new Set(r)]
    }
    initialize(e) {
        return h(this, null, function*() {
            this.initializeProjectSettings(e),
            this.initControllers(e),
            yield this.initChainAdapters(),
            this.sendInitializeEvent(e),
            yield this.syncExistingConnection(),
            this.remoteFeatures = yield Gh.fetchRemoteFeatures(e),
            q.setRemoteFeatures(this.remoteFeatures),
            this.remoteFeatures.onramp && Ea.setOnrampProviders(this.remoteFeatures.onramp),
            (q.state.remoteFeatures?.email || Array.isArray(q.state.remoteFeatures?.socials) && q.state.remoteFeatures?.socials.length > 0) && (yield this.checkAllowedOrigins())
        })
    }
    checkAllowedOrigins() {
        return h(this, null, function*() {
            let e = yield qi.fetchAllowedOrigins();
            if (e && ze.isClient()) {
                let t = window.location.origin;
                si.isOriginAllowed(t, e, fs.DEFAULT_ALLOWED_ANCESTORS) || Vt.open(ns.ALERT_ERRORS.INVALID_APP_CONFIGURATION, "error")
            } else
                Vt.open(ns.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error")
        })
    }
    sendInitializeEvent(e) {
        let t = aa(e, []);
        delete t.adapters,
        delete t.universalProvider,
        vs.sendEvent({
            type: "track",
            event: "INITIALIZE",
            properties: be(j({}, t), {
                networks: e.networks.map(i => i.id),
                siweConfig: {
                    options: e.siweConfig?.options || {}
                }
            })
        })
    }
    initControllers(e) {
        this.initializeOptionsController(e),
        this.initializeChainController(e),
        this.initializeThemeController(e),
        this.initializeConnectionController(e),
        this.initializeConnectorController()
    }
    initializeThemeController(e) {
        e.themeMode && yt.setThemeMode(e.themeMode),
        e.themeVariables && yt.setThemeVariables(e.themeVariables)
    }
    initializeChainController(e) {
        if (!this.connectionControllerClient || !this.networkControllerClient)
            throw new Error("ConnectionControllerClient and NetworkControllerClient must be set");
        _.initialize(e.adapters ?? [], this.caipNetworks, {
            connectionControllerClient: this.connectionControllerClient,
            networkControllerClient: this.networkControllerClient
        });
        let t = this.getDefaultNetwork();
        t && _.setActiveCaipNetwork(t)
    }
    initializeConnectionController(e) {
        Ke.setWcBasic(e.basic ?? !1)
    }
    initializeConnectorController() {
        ce.initialize(this.chainNamespaces)
    }
    initializeProjectSettings(e) {
        q.setProjectId(e.projectId),
        q.setSdkVersion(e.sdkVersion)
    }
    initializeOptionsController(e) {
        q.setDebug(e.debug !== !1),
        q.setEnableWalletConnect(e.enableWalletConnect !== !1),
        q.setEnableWalletGuide(e.enableWalletGuide !== !1),
        q.setEnableWallets(e.enableWallets !== !1),
        q.setEIP6963Enabled(e.enableEIP6963 !== !1),
        q.setEnableNetworkSwitch(e.enableNetworkSwitch !== !1),
        q.setEnableAuthLogger(e.enableAuthLogger !== !1),
        q.setCustomRpcUrls(e.customRpcUrls),
        q.setEnableEmbedded(e.enableEmbedded),
        q.setAllWallets(e.allWallets),
        q.setIncludeWalletIds(e.includeWalletIds),
        q.setExcludeWalletIds(e.excludeWalletIds),
        q.setFeaturedWalletIds(e.featuredWalletIds),
        q.setTokens(e.tokens),
        q.setTermsConditionsUrl(e.termsConditionsUrl),
        q.setPrivacyPolicyUrl(e.privacyPolicyUrl),
        q.setCustomWallets(e.customWallets),
        q.setFeatures(e.features),
        q.setAllowUnsupportedChain(e.allowUnsupportedChain),
        q.setUniversalProviderConfigOverride(e.universalProviderConfigOverride),
        q.setPreferUniversalLinks(e.experimental_preferUniversalLinks),
        q.setDefaultAccountTypes(e.defaultAccountTypes);
        let t = Le.getPreferredAccountTypes() || {}
          , i = j(j({}, q.state.defaultAccountTypes), t);
        K.setPreferredAccountTypes(i);
        let r = this.getDefaultMetaData();
        if (!e.metadata && r && (e.metadata = r),
        q.setMetadata(e.metadata),
        q.setDisableAppend(e.disableAppend),
        q.setEnableEmbedded(e.enableEmbedded),
        q.setSIWX(e.siwx),
        !e.projectId) {
            Vt.open(ns.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED, "error");
            return
        }
        if (e.adapters?.find(o => o.namespace === se.CHAIN.EVM) && e.siweConfig) {
            if (e.siwx)
                throw new Error("Cannot set both `siweConfig` and `siwx` options");
            q.setSIWX(e.siweConfig.mapToSIWX())
        }
    }
    getDefaultMetaData() {
        return ze.isClient() ? {
            name: document.getElementsByTagName("title")?.[0]?.textContent || "",
            description: document.querySelector('meta[property="og:description"]')?.content || "",
            url: window.location.origin,
            icons: [document.querySelector('link[rel~="icon"]')?.href || ""]
        } : null
    }
    setUnsupportedNetwork(e) {
        let t = this.getActiveChainNamespace();
        if (t) {
            let i = Es.getUnsupportedNetwork(`${t}:${e}`);
            _.setActiveCaipNetwork(i)
        }
    }
    getDefaultNetwork() {
        return Es.getCaipNetworkFromStorage(this.defaultCaipNetwork)
    }
    extendCaipNetwork(e, t) {
        return Es.extendCaipNetwork(e, {
            customNetworkImageUrls: t.chainImages,
            projectId: t.projectId
        })
    }
    extendCaipNetworks(e) {
        return Es.extendCaipNetworks(e.networks, {
            customNetworkImageUrls: e.chainImages,
            customRpcUrls: e.customRpcUrls,
            projectId: e.projectId
        })
    }
    extendDefaultCaipNetwork(e) {
        let t = e.networks.find(r => r.id === e.defaultNetwork?.id);
        return t ? Es.extendCaipNetwork(t, {
            customNetworkImageUrls: e.chainImages,
            customRpcUrls: e.customRpcUrls,
            projectId: e.projectId
        }) : void 0
    }
    disconnectNamespace(e) {
        return h(this, null, function*() {
            try {
                let t = this.getAdapter(e)
                  , i = le.getProvider(e)
                  , r = le.getProviderId(e)
                  , {caipAddress: n} = _.getAccountData(e) || {};
                this.setLoading(!0, e),
                n && t?.disconnect && (yield t.disconnect({
                    provider: i,
                    providerType: r
                })),
                Le.removeConnectedNamespace(e),
                le.resetChain(e),
                this.setUser(void 0, e),
                this.setStatus("disconnected", e),
                this.setConnectedWalletInfo(void 0, e),
                ce.removeConnectorId(e),
                _.resetAccount(e),
                _.resetNetwork(e),
                this.setLoading(!1, e)
            } catch (t) {
                throw this.setLoading(!1, e),
                new Error(`Failed to disconnect chain ${e}: ${t.message}`)
            }
        })
    }
    createClients() {
        this.connectionControllerClient = {
            connectWalletConnect: () => h(this, null, function*() {
                let e = _.state.activeChain
                  , t = this.getAdapter(e)
                  , i = this.getCaipNetwork(e)?.id;
                if (!t)
                    throw new Error("Adapter not found");
                let r = yield t.connectWalletConnect(i);
                this.close(),
                this.setClientId(r?.clientId || null),
                Le.setConnectedNamespaces([..._.state.chains.keys()]),
                this.chainNamespaces.forEach(n => {
                    ce.setConnectorId(Ht.CONNECTOR_TYPE_WALLET_CONNECT, n)
                }
                ),
                yield this.syncWalletConnectAccount()
            }),
            connectExternal: c => h(this, [c], function*({id: e, info: t, type: i, provider: r, chain: n, caipNetwork: o, socialUri: a}) {
                let l = _.state.activeChain
                  , p = n || l
                  , d = this.getAdapter(p);
                if (n && n !== l && !o) {
                    let g = this.getCaipNetworks().find(v => v.chainNamespace === n);
                    g && this.setCaipNetwork(g)
                }
                if (!d)
                    throw new Error("Adapter not found");
                let u = this.getCaipNetwork(p)
                  , m = yield d.connect({
                    id: e,
                    info: t,
                    type: i,
                    provider: r,
                    socialUri: a,
                    chainId: o?.id || u?.id,
                    rpcUrl: o?.rpcUrls?.default?.http?.[0] || u?.rpcUrls?.default?.http?.[0]
                });
                if (!m)
                    return;
                Le.addConnectedNamespace(p),
                this.syncProvider(be(j({}, m), {
                    chainNamespace: p
                }));
                let f = K.state.allAccounts
                  , {accounts: y} = f?.length > 0 ? {
                    accounts: [...f]
                } : yield d.getAccounts({
                    namespace: p,
                    id: e
                });
                this.setAllAccounts(y, p),
                this.setStatus("connected", p),
                this.syncConnectedWalletInfo(p)
            }),
            reconnectExternal: n => h(this, [n], function*({id: e, info: t, type: i, provider: r}) {
                let o = _.state.activeChain
                  , a = this.getAdapter(o);
                a?.reconnect && (yield a?.reconnect({
                    id: e,
                    info: t,
                    type: i,
                    provider: r,
                    chainId: this.getCaipNetwork()?.id
                }),
                Le.addConnectedNamespace(o),
                this.syncConnectedWalletInfo(o))
            }),
            disconnect: e => h(this, null, function*() {
                let t = ra(e);
                try {
                    let i = yield Promise.allSettled(t.map(o => h(this, [o], function*([n]) {
                        return this.disconnectNamespace(n)
                    })));
                    ba.resetSend(),
                    Ke.resetWcConnection(),
                    yield $i.clearSessions(),
                    ce.setFilterByNamespace(void 0);
                    let r = i.filter(n => n.status === "rejected");
                    if (r.length > 0)
                        throw new Error(r.map(n => n.reason.message).join(", "));
                    Le.deleteConnectedSocialProvider(),
                    vs.sendEvent({
                        type: "track",
                        event: "DISCONNECT_SUCCESS",
                        properties: {
                            namespace: e || "all"
                        }
                    })
                } catch (i) {
                    throw new Error(`Failed to disconnect chains: ${i.message}`)
                }
            }),
            checkInstalled: e => e ? e.some(t => !!window.ethereum?.[String(t)]) : !!window.ethereum,
            signMessage: e => h(this, null, function*() {
                return (yield this.getAdapter(_.state.activeChain)?.signMessage({
                    message: e,
                    address: K.state.address,
                    provider: le.getProvider(_.state.activeChain)
                }))?.signature || ""
            }),
            sendTransaction: e => h(this, null, function*() {
                let t = e.chainNamespace;
                if (Ae.SEND_SUPPORTED_NAMESPACES.includes(t)) {
                    let i = this.getAdapter(_.state.activeChain)
                      , r = le.getProvider(t);
                    return (yield i?.sendTransaction(be(j({}, e), {
                        caipNetwork: this.getCaipNetwork(),
                        provider: r
                    })))?.hash || ""
                }
                return ""
            }),
            estimateGas: e => h(this, null, function*() {
                if (e.chainNamespace === se.CHAIN.EVM) {
                    let t = this.getAdapter(_.state.activeChain)
                      , i = le.getProvider(_.state.activeChain)
                      , r = this.getCaipNetwork();
                    if (!r)
                        throw new Error("CaipNetwork is undefined");
                    return (yield t?.estimateGas(be(j({}, e), {
                        provider: i,
                        caipNetwork: r
                    })))?.gas || 0n
                }
                return 0n
            }),
            getEnsAvatar: () => h(this, null, function*() {
                return yield this.syncIdentity({
                    address: K.state.address,
                    chainId: Number(this.getCaipNetwork()?.id),
                    chainNamespace: _.state.activeChain
                }),
                K.state.profileImage || !1
            }),
            getEnsAddress: e => h(this, null, function*() {
                return yield si.resolveReownName(e)
            }),
            writeContract: e => h(this, null, function*() {
                let t = this.getAdapter(_.state.activeChain)
                  , i = this.getCaipNetwork()
                  , r = this.getCaipAddress()
                  , n = le.getProvider(_.state.activeChain);
                if (!i || !r)
                    throw new Error("CaipNetwork or CaipAddress is undefined");
                return (yield t?.writeContract(be(j({}, e), {
                    caipNetwork: i,
                    provider: n,
                    caipAddress: r
                })))?.hash
            }),
            parseUnits: (e, t) => this.getAdapter(_.state.activeChain)?.parseUnits({
                value: e,
                decimals: t
            }) ?? 0n,
            formatUnits: (e, t) => this.getAdapter(_.state.activeChain)?.formatUnits({
                value: e,
                decimals: t
            }) ?? "0",
            getCapabilities: e => h(this, null, function*() {
                return yield this.getAdapter(_.state.activeChain)?.getCapabilities(e)
            }),
            grantPermissions: e => h(this, null, function*() {
                return yield this.getAdapter(_.state.activeChain)?.grantPermissions(e)
            }),
            revokePermissions: e => h(this, null, function*() {
                let t = this.getAdapter(_.state.activeChain);
                return t?.revokePermissions ? yield t.revokePermissions(e) : "0x"
            }),
            walletGetAssets: e => h(this, null, function*() {
                return (yield this.getAdapter(_.state.activeChain)?.walletGetAssets(e)) ?? {}
            }),
            updateBalance: e => {
                let t = this.getCaipNetwork(e);
                !t || !K.state.address || this.updateNativeBalance(K.state.address, t?.id, e)
            }
        },
        this.networkControllerClient = {
            switchCaipNetwork: e => h(this, null, function*() {
                return yield this.switchCaipNetwork(e)
            }),
            getApprovedCaipNetworksData: () => h(this, null, function*() {
                return this.getApprovedCaipNetworksData()
            })
        },
        Ke.setClient(this.connectionControllerClient)
    }
    getApprovedCaipNetworksData() {
        if (le.getProviderId(_.state.activeChain) === Ht.CONNECTOR_TYPE_WALLET_CONNECT) {
            let t = this.universalProvider?.session?.namespaces;
            return {
                supportsAllNetworks: this.universalProvider?.session?.peer?.metadata.name === "MetaMask Wallet",
                approvedCaipNetworkIds: this.getChainsFromNamespaces(t)
            }
        }
        return {
            supportsAllNetworks: !0,
            approvedCaipNetworkIds: []
        }
    }
    switchCaipNetwork(e) {
        return h(this, null, function*() {
            if (!e)
                return;
            let t = e.chainNamespace;
            if (this.getAddressByChainNamespace(e.chainNamespace)) {
                let r = le.getProvider(t)
                  , n = le.getProviderId(t);
                if (e.chainNamespace === _.state.activeChain)
                    yield this.getAdapter(t)?.switchNetwork({
                        caipNetwork: e,
                        provider: r,
                        providerType: n
                    });
                else if (this.setCaipNetwork(e),
                n === Ht.CONNECTOR_TYPE_WALLET_CONNECT)
                    this.syncWalletConnectAccount();
                else {
                    let o = this.getAddressByChainNamespace(t);
                    o && this.syncAccount({
                        address: o,
                        chainId: e.id,
                        chainNamespace: t
                    })
                }
            } else
                this.setCaipNetwork(e)
        })
    }
    getChainsFromNamespaces(e={}) {
        return Object.values(e).flatMap(t => {
            let i = t.chains || []
              , r = t.accounts.map(n => {
                let {chainId: o, chainNamespace: a} = Ot.parseCaipAddress(n);
                return `${a}:${o}`
            }
            );
            return Array.from(new Set([...i, ...r]))
        }
        )
    }
    createAdapters(e) {
        return this.createClients(),
        this.chainNamespaces.reduce( (t, i) => {
            let r = e?.find(n => n.namespace === i);
            return r ? (r.construct({
                namespace: i,
                projectId: this.options?.projectId,
                networks: this.getCaipNetworks()
            }),
            t[i] = r) : t[i] = new Rr({
                namespace: i,
                networks: this.getCaipNetworks()
            }),
            t
        }
        , {})
    }
    initChainAdapter(e) {
        return h(this, null, function*() {
            this.onConnectors(e),
            this.listenAdapter(e),
            yield this.chainAdapters?.[e].syncConnectors(this.options, this),
            yield this.createUniversalProviderForAdapter(e)
        })
    }
    initChainAdapters() {
        return h(this, null, function*() {
            yield Promise.all(this.chainNamespaces.map(e => h(this, null, function*() {
                yield this.initChainAdapter(e)
            })))
        })
    }
    onConnectors(e) {
        this.getAdapter(e)?.on("connectors", this.setConnectors.bind(this))
    }
    listenAdapter(e) {
        let t = this.getAdapter(e);
        if (!t)
            return;
        let i = Le.getConnectionStatus();
        i === "connected" ? this.setStatus("connecting", e) : i === "disconnected" ? (Le.clearAddressCache(),
        this.setStatus(i, e)) : this.setStatus(i, e),
        t.on("switchNetwork", ({address: r, chainId: n}) => {
            let o = this.getCaipNetworks().find(l => l.id === n || l.caipNetworkId === n)
              , a = _.state.activeChain === e
              , c = _.getAccountProp("address", e);
            if (o) {
                let l = a && r ? r : c;
                l && this.syncAccount({
                    address: l,
                    chainId: o.id,
                    chainNamespace: e
                })
            } else
                this.setUnsupportedNetwork(n)
        }
        ),
        t.on("disconnect", this.disconnect.bind(this, e)),
        t.on("connections", r => {
            this.setConnections(r, e)
        }
        ),
        t.on("pendingTransactions", () => {
            let r = K.state.address
              , n = _.state.activeCaipNetwork;
            !r || !n?.id || this.updateNativeBalance(r, n.id, n.chainNamespace)
        }
        ),
        t.on("accountChanged", ({address: r, chainId: n}) => {
            let o = _.state.activeChain === e;
            o && n ? this.syncAccount({
                address: r,
                chainId: n,
                chainNamespace: e
            }) : o && _.state.activeCaipNetwork?.id ? this.syncAccount({
                address: r,
                chainId: _.state.activeCaipNetwork?.id,
                chainNamespace: e
            }) : this.syncAccountInfo(r, n, e),
            this.syncAllAccounts(e)
        }
        )
    }
    createUniversalProviderForAdapter(e) {
        return h(this, null, function*() {
            yield this.getUniversalProvider(),
            this.universalProvider && this.chainAdapters?.[e]?.setUniversalProvider?.(this.universalProvider)
        })
    }
    syncExistingConnection() {
        return h(this, null, function*() {
            yield Promise.allSettled(this.chainNamespaces.map(e => this.syncNamespaceConnection(e)))
        })
    }
    syncNamespaceConnection(e) {
        return h(this, null, function*() {
            try {
                e === se.CHAIN.EVM && ze.isSafeApp() && ce.setConnectorId(se.CONNECTOR_ID.SAFE, e);
                let t = ce.getConnectorId(e);
                switch (this.setStatus("connecting", e),
                t) {
                case se.CONNECTOR_ID.WALLET_CONNECT:
                    yield this.syncWalletConnectAccount();
                    break;
                case se.CONNECTOR_ID.AUTH:
                    break;
                default:
                    yield this.syncAdapterConnection(e)
                }
            } catch (t) {
                console.warn("AppKit couldn't sync existing connection", t),
                this.setStatus("disconnected", e)
            }
        })
    }
    syncAdapterConnection(e) {
        return h(this, null, function*() {
            let t = this.getAdapter(e)
              , i = ce.getConnectorId(e)
              , r = this.getCaipNetwork(e)
              , o = ce.getConnectors(e).find(a => a.id === i);
            try {
                if (!t || !o)
                    throw new Error(`Adapter or connector not found for namespace ${e}`);
                if (!r?.id)
                    throw new Error("CaipNetwork not found");
                let a = yield t?.syncConnection({
                    namespace: e,
                    id: o.id,
                    chainId: r.id,
                    rpcUrl: r?.rpcUrls?.default?.http?.[0]
                });
                if (a) {
                    let c = yield t?.getAccounts({
                        namespace: e,
                        id: o.id
                    });
                    c && c.accounts.length > 0 ? this.setAllAccounts(c.accounts, e) : this.setAllAccounts([ze.createAccount(e, a.address, "eoa")], e),
                    this.syncProvider(be(j({}, a), {
                        chainNamespace: e
                    })),
                    yield this.syncAccount(be(j({}, a), {
                        chainNamespace: e
                    })),
                    this.setStatus("connected", e)
                } else
                    this.setStatus("disconnected", e)
            } catch {
                this.setStatus("disconnected", e)
            }
        })
    }
    syncWalletConnectAccount() {
        return h(this, null, function*() {
            let e = this.chainNamespaces.map(t => h(this, null, function*() {
                let i = this.getAdapter(t)
                  , r = this.universalProvider?.session?.namespaces?.[t]?.accounts || []
                  , n = _.state.activeCaipNetwork?.id
                  , o = r.find(a => {
                    let {chainId: c} = Ot.parseCaipAddress(a);
                    return c === n?.toString()
                }
                ) || r[0];
                if (o) {
                    let a = Ot.validateCaipAddress(o)
                      , {chainId: c, address: l} = Ot.parseCaipAddress(a);
                    if (le.setProviderId(t, Ht.CONNECTOR_TYPE_WALLET_CONNECT),
                    this.caipNetworks && _.state.activeCaipNetwork && i?.namespace !== se.CHAIN.EVM) {
                        let p = i?.getWalletConnectProvider({
                            caipNetworks: this.getCaipNetworks(),
                            provider: this.universalProvider,
                            activeCaipNetwork: _.state.activeCaipNetwork
                        });
                        le.setProvider(t, p)
                    } else
                        le.setProvider(t, this.universalProvider);
                    ce.setConnectorId(se.CONNECTOR_ID.WALLET_CONNECT, t),
                    Le.addConnectedNamespace(t),
                    this.syncWalletConnectAccounts(t),
                    yield this.syncAccount({
                        address: l,
                        chainId: c,
                        chainNamespace: t
                    })
                } else
                    this.setStatus("disconnected", t);
                this.syncConnectedWalletInfo(t),
                yield _.setApprovedCaipNetworksData(t)
            }));
            yield Promise.all(e)
        })
    }
    syncWalletConnectAccounts(e) {
        let t = this.universalProvider?.session?.namespaces?.[e]?.accounts?.map(i => {
            let {address: r} = Ot.parseCaipAddress(i);
            return r
        }
        ).filter( (i, r, n) => n.indexOf(i) === r);
        t && this.setAllAccounts(t.map(i => ze.createAccount(e, i, e === "bip122" ? "payment" : "eoa")), e)
    }
    syncProvider({type: e, provider: t, id: i, chainNamespace: r}) {
        le.setProviderId(r, e),
        le.setProvider(r, t),
        ce.setConnectorId(i, r)
    }
    syncAllAccounts(e) {
        return h(this, null, function*() {
            let t = ce.getConnectorId(e);
            if (!t)
                return;
            let r = yield this.getAdapter(e)?.getAccounts({
                namespace: e,
                id: t
            });
            r && r.accounts.length > 0 && this.setAllAccounts(r.accounts, e)
        })
    }
    syncAccount(e) {
        return h(this, null, function*() {
            let t = e.chainNamespace === _.state.activeChain
              , i = _.getCaipNetworkByNamespace(e.chainNamespace, e.chainId)
              , {address: r, chainId: n, chainNamespace: o} = e
              , {chainId: a} = Le.getActiveNetworkProps()
              , c = n || a
              , l = _.state.activeCaipNetwork?.name === se.UNSUPPORTED_NETWORK_NAME
              , p = _.getNetworkProp("supportsAllNetworks", o);
            if (this.setStatus("connected", o),
            !(l && !p) && c) {
                let d = this.getCaipNetworks().find(f => f.id.toString() === c.toString())
                  , u = this.getCaipNetworks().find(f => f.chainNamespace === o);
                if (!p && !d && !u) {
                    let f = this.getApprovedCaipNetworkIds() || []
                      , y = f.find(v => Ot.parseCaipNetworkId(v)?.chainId === c.toString())
                      , g = f.find(v => Ot.parseCaipNetworkId(v)?.chainNamespace === o);
                    d = this.getCaipNetworks().find(v => v.caipNetworkId === y),
                    u = this.getCaipNetworks().find(v => v.caipNetworkId === g || "deprecatedCaipNetworkId"in v && v.deprecatedCaipNetworkId === g)
                }
                let m = d || u;
                m?.chainNamespace === _.state.activeChain ? q.state.enableNetworkSwitch && !q.state.allowUnsupportedChain && _.state.activeCaipNetwork?.name === se.UNSUPPORTED_NETWORK_NAME ? _.showUnsupportedChainUI() : this.setCaipNetwork(m) : t || i && this.setCaipNetworkOfNamespace(i, o),
                this.syncConnectedWalletInfo(o),
                Pa.isLowerCaseMatch(r, K.state.address) || this.syncAccountInfo(r, m?.id, o),
                t ? yield this.syncBalance({
                    address: r,
                    chainId: m?.id,
                    chainNamespace: o
                }) : yield this.syncBalance({
                    address: r,
                    chainId: i?.id,
                    chainNamespace: o
                })
            }
        })
    }
    syncAccountInfo(e, t, i) {
        return h(this, null, function*() {
            let r = this.getCaipAddress(i)
              , n = t || r?.split(":")[1];
            if (!n)
                return;
            let o = `${i}:${n}:${e}`;
            this.setCaipAddress(o, i),
            yield this.syncIdentity({
                address: e,
                chainId: n,
                chainNamespace: i
            })
        })
    }
    syncReownName(e, t) {
        return h(this, null, function*() {
            try {
                let i = yield this.getReownName(e);
                if (i[0]) {
                    let r = i[0];
                    this.setProfileName(r.name, t)
                } else
                    this.setProfileName(null, t)
            } catch {
                this.setProfileName(null, t)
            }
        })
    }
    syncConnectedWalletInfo(e) {
        let t = ce.getConnectorId(e)
          , i = le.getProviderId(e);
        if (i === Ht.CONNECTOR_TYPE_ANNOUNCED || i === Ht.CONNECTOR_TYPE_INJECTED) {
            if (t) {
                let r = this.getConnectors().find(n => n.id === t);
                if (r) {
                    let {info: n, name: o, imageUrl: a} = r
                      , c = a || this.getConnectorImage(r);
                    this.setConnectedWalletInfo(j({
                        name: o,
                        icon: c
                    }, n), e)
                }
            }
        } else if (i === Ht.CONNECTOR_TYPE_WALLET_CONNECT) {
            let r = le.getProvider(e);
            r?.session && this.setConnectedWalletInfo(be(j({}, r.session.peer.metadata), {
                name: r.session.peer.metadata.name,
                icon: r.session.peer.metadata.icons?.[0]
            }), e)
        } else if (t && t === se.CONNECTOR_ID.COINBASE) {
            let r = this.getConnectors().find(n => n.id === se.CONNECTOR_ID.COINBASE);
            this.setConnectedWalletInfo({
                name: "Coinbase Wallet",
                icon: this.getConnectorImage(r)
            }, e)
        }
    }
    syncBalance(e) {
        return h(this, null, function*() {
            !wa.getNetworksByNamespace(this.getCaipNetworks(), e.chainNamespace).find(i => i.id.toString() === e.chainId?.toString()) || !e.chainId || (yield this.updateNativeBalance(e.address, e.chainId, e.chainNamespace))
        })
    }
    ready() {
        return h(this, null, function*() {
            yield this.readyPromise
        })
    }
    updateNativeBalance(e, t, i) {
        return h(this, null, function*() {
            let r = this.getAdapter(i)
              , n = _.getCaipNetworkByNamespace(i, t);
            if (r) {
                let o = yield r.getBalance({
                    address: e,
                    chainId: t,
                    caipNetwork: n,
                    tokens: this.options.tokens
                });
                return this.setBalance(o.balance, o.symbol, i),
                o
            }
        })
    }
    initializeUniversalAdapter() {
        return h(this, null, function*() {
            let e = Aa.createLogger( (i, ...r) => {
                i && this.handleAlertError(i),
                console.error(...r)
            }
            )
              , t = {
                projectId: this.options?.projectId,
                metadata: {
                    name: this.options?.metadata ? this.options?.metadata.name : "",
                    description: this.options?.metadata ? this.options?.metadata.description : "",
                    url: this.options?.metadata ? this.options?.metadata.url : "",
                    icons: this.options?.metadata ? this.options?.metadata.icons : [""]
                },
                logger: e
            };
            q.setManualWCControl(!!this.options?.manualWCControl),
            this.universalProvider = this.options.universalProvider ?? (yield Tr.init(t)),
            this.listenWalletConnect()
        })
    }
    listenWalletConnect() {
        this.universalProvider && (this.universalProvider.on("display_uri", e => {
            Ke.setUri(e)
        }
        ),
        this.universalProvider.on("connect", Ke.finalizeWcConnection),
        this.universalProvider.on("disconnect", () => {
            this.chainNamespaces.forEach(e => {
                this.resetAccount(e)
            }
            ),
            Ke.resetWcConnection()
        }
        ),
        this.universalProvider.on("chainChanged", e => {
            let t = this.getCaipNetworks().find(r => r.id == e)
              , i = this.getCaipNetwork();
            if (!t) {
                this.setUnsupportedNetwork(e);
                return
            }
            i?.id !== t?.id && this.setCaipNetwork(t)
        }
        ),
        this.universalProvider.on("session_event", e => {
            if (si.isSessionEventData(e)) {
                let {name: t, data: i} = e.params.event;
                t === "accountsChanged" && Array.isArray(i) && ze.isCaipAddress(i[0]) && this.syncAccount(Ot.parseCaipAddress(i[0]))
            }
        }
        ))
    }
    createUniversalProvider() {
        return !this.universalProviderInitPromise && ze.isClient() && this.options?.projectId && (this.universalProviderInitPromise = this.initializeUniversalAdapter()),
        this.universalProviderInitPromise
    }
    getUniversalProvider() {
        return h(this, null, function*() {
            if (!this.universalProvider)
                try {
                    yield this.createUniversalProvider()
                } catch (e) {
                    vs.sendEvent({
                        type: "error",
                        event: "INTERNAL_SDK_ERROR",
                        properties: {
                            errorType: "UniversalProviderInitError",
                            errorMessage: e instanceof Error ? e.message : "Unknown",
                            uncaught: !1
                        }
                    }),
                    console.error("AppKit:getUniversalProvider - Cannot create provider", e)
                }
            return this.universalProvider
        })
    }
    handleAlertError(e) {
        let t = Object.entries(ns.UniversalProviderErrors).find( ([,{message: a}]) => e.message.includes(a))
          , [i,r] = t ?? []
          , {message: n, alertErrorKey: o} = r ?? {};
        if (i && n && !this.reportedAlertErrors[i]) {
            let a = ns.ALERT_ERRORS[o];
            a && (Vt.open(a, "error"),
            this.reportedAlertErrors[i] = !0)
        }
    }
    getAdapter(e) {
        if (e)
            return this.chainAdapters?.[e]
    }
    createAdapter(e) {
        if (!e)
            return;
        let t = e.namespace;
        if (!t)
            return;
        this.createClients();
        let i = e;
        i.namespace = t,
        i.construct({
            namespace: t,
            projectId: this.options?.projectId,
            networks: this.getCaipNetworks()
        }),
        this.chainNamespaces.includes(t) || this.chainNamespaces.push(t),
        this.chainAdapters && (this.chainAdapters[t] = i)
    }
    open(e) {
        return h(this, null, function*() {
            if (yield this.injectModalUi(),
            e?.uri && Ke.setUri(e.uri),
            e?.arguments)
                switch (e?.view) {
                case "Swap":
                    return bs.open(be(j({}, e), {
                        data: {
                            swap: e.arguments
                        }
                    }));
                default:
                }
            return bs.open(e)
        })
    }
    close() {
        return h(this, null, function*() {
            yield this.injectModalUi(),
            bs.close()
        })
    }
    setLoading(e, t) {
        bs.setLoading(e, t)
    }
    disconnect(e) {
        return h(this, null, function*() {
            yield Ke.disconnect(e)
        })
    }
    getSIWX() {
        return q.state.siwx
    }
    getError() {
        return ""
    }
    getChainId() {
        return _.state.activeCaipNetwork?.id
    }
    switchNetwork(e) {
        return h(this, null, function*() {
            let t = this.getCaipNetworks().find(i => i.id === e.id);
            if (!t) {
                Vt.open(ns.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND, "error");
                return
            }
            yield _.switchActiveNetwork(t)
        })
    }
    getWalletProvider() {
        return _.state.activeChain ? le.state.providers[_.state.activeChain] : null
    }
    getWalletProviderType() {
        return le.getProviderId(_.state.activeChain)
    }
    subscribeProviders(e) {
        return le.subscribeProviders(e)
    }
    getThemeMode() {
        return yt.state.themeMode
    }
    getThemeVariables() {
        return yt.state.themeVariables
    }
    setThemeMode(e) {
        yt.setThemeMode(e),
        Sa(yt.state.themeMode)
    }
    setTermsConditionsUrl(e) {
        q.setTermsConditionsUrl(e)
    }
    setPrivacyPolicyUrl(e) {
        q.setPrivacyPolicyUrl(e)
    }
    setThemeVariables(e) {
        yt.setThemeVariables(e),
        Ta(yt.state.themeVariables)
    }
    subscribeTheme(e) {
        return yt.subscribe(e)
    }
    getWalletInfo() {
        return K.state.connectedWalletInfo
    }
    getAccount(e) {
        let t = ce.getAuthConnector(e)
          , i = _.getAccountData(e)
          , r = _.state.activeChain
          , n = Le.getConnectedConnectorId(e || r);
        if (i)
            return {
                allAccounts: i.allAccounts,
                caipAddress: i.caipAddress,
                address: ze.getPlainAddress(i.caipAddress),
                isConnected: !!i.caipAddress,
                status: i.status,
                embeddedWalletInfo: t && n === se.CONNECTOR_ID.AUTH ? {
                    user: i.user ? be(j({}, i.user), {
                        username: Le.getConnectedSocialUsername()
                    }) : void 0,
                    authProvider: i.socialProvider || "email",
                    accountType: i.preferredAccountTypes?.[e || r],
                    isSmartAccountDeployed: !!i.smartAccountDeployed
                } : void 0
            }
    }
    subscribeAccount(e, t) {
        let i = () => {
            let r = this.getAccount(t);
            r && e(r)
        }
        ;
        t ? _.subscribeChainProp("accountState", i, t) : _.subscribe(i),
        ce.subscribe(i)
    }
    subscribeNetwork(e) {
        return _.subscribe( ({activeCaipNetwork: t}) => {
            e({
                caipNetwork: t,
                chainId: t?.id,
                caipNetworkId: t?.caipNetworkId
            })
        }
        )
    }
    subscribeWalletInfo(e) {
        return K.subscribeKey("connectedWalletInfo", e)
    }
    subscribeShouldUpdateToAddress(e) {
        K.subscribeKey("shouldUpdateToAddress", e)
    }
    subscribeCaipNetworkChange(e) {
        _.subscribeKey("activeCaipNetwork", e)
    }
    getState() {
        return Mr.state
    }
    subscribeState(e) {
        return Mr.subscribe(e)
    }
    showErrorMessage(e) {
        Br.showError(e)
    }
    showSuccessMessage(e) {
        Br.showSuccess(e)
    }
    getEvent() {
        return j({}, vs.state)
    }
    subscribeEvents(e) {
        return vs.subscribe(e)
    }
    replace(e) {
        ai.replace(e)
    }
    redirect(e) {
        ai.push(e)
    }
    popTransactionStack(e) {
        ai.popTransactionStack(e)
    }
    isOpen() {
        return bs.state.open
    }
    isTransactionStackEmpty() {
        return ai.state.transactionStack.length === 0
    }
    static getInstance() {
        return this.instance
    }
    updateFeatures(e) {
        q.setFeatures(e)
    }
    updateRemoteFeatures(e) {
        q.setRemoteFeatures(e)
    }
    updateOptions(e) {
        let t = q.state || {}
          , i = j(j({}, t), e);
        q.setOptions(i)
    }
    setConnectMethodsOrder(e) {
        q.setConnectMethodsOrder(e)
    }
    setWalletFeaturesOrder(e) {
        q.setWalletFeaturesOrder(e)
    }
    setCollapseWallets(e) {
        q.setCollapseWallets(e)
    }
    setSocialsOrder(e) {
        q.setSocialsOrder(e)
    }
    getConnectMethodsOrder() {
        return Na.getConnectOrderMethod(q.state.features, ce.getConnectors())
    }
    addNetwork(e, t) {
        if (this.chainAdapters && !this.chainAdapters[e])
            throw new Error(`Adapter for namespace ${e} doesn't exist`);
        let i = this.extendCaipNetwork(t, this.options);
        this.getCaipNetworks().find(r => r.id === i.id) || _.addNetwork(i)
    }
    removeNetwork(e, t) {
        if (this.chainAdapters && !this.chainAdapters[e])
            throw new Error(`Adapter for namespace ${e} doesn't exist`);
        this.getCaipNetworks().find(r => r.id === t) && _.removeNetwork(e, t)
    }
}
;
var Yh = !1
  , Ur = class s extends kr {
    open(e) {
        return h(this, null, function*() {
            ce.isConnected() || (yield Dr(s.prototype, this, "open").call(this, e))
        })
    }
    close() {
        return h(this, null, function*() {
            yield Dr(s.prototype, this, "close").call(this),
            this.options.manualWCControl && Ke.finalizeWcConnection()
        })
    }
    syncIdentity(e) {
        return h(this, null, function*() {
            return Promise.resolve()
        })
    }
    syncBalance(e) {
        return h(this, null, function*() {
            return Promise.resolve()
        })
    }
    injectModalUi() {
        return h(this, null, function*() {
            if (!Yh && ze.isClient()) {
                if (yield import("./chunk-Z2JGYBAK.js"),
                yield import("./chunk-OUXWOIYZ.js"),
                !document.querySelector("w3m-modal")) {
                    let t = document.createElement("w3m-modal");
                    !q.state.disableAppend && !q.state.enableEmbedded && document.body.insertAdjacentElement("beforeend", t)
                }
                Yh = !0
            }
        })
    }
}
;
var Jh = "1.7.8";
function HE(s) {
    return new Ur(be(j({}, s), {
        basic: !0,
        sdkVersion: `html-core-${Jh}`
    }))
}
export {Ur as AppKit, HE as createAppKit};
