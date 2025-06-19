import {a as Ge} from "./chunk-EHBBQRNU.js";
import {e as zt, f as U, g as Oe, h as O, i as M, j as Mt, l as R} from "./chunk-JOVT4LBN.js";
var We = U( (Kr, Xe) => {
    "use strict";
    function Ut(e) {
        try {
            return JSON.stringify(e)
        } catch {
            return '"[Circular]"'
        }
    }
    Xe.exports = kt;
    function kt(e, t, r) {
        var o = r && r.stringify || Ut
          , s = 1;
        if (typeof e == "object" && e !== null) {
            var i = t.length + s;
            if (i === 1)
                return e;
            var u = new Array(i);
            u[0] = o(e);
            for (var d = 1; d < i; d++)
                u[d] = o(t[d]);
            return u.join(" ")
        }
        if (typeof e != "string")
            return e;
        var l = t.length;
        if (l === 0)
            return e;
        for (var c = "", p = 1 - s, f = -1, v = e && e.length || 0, h = 0; h < v; ) {
            if (e.charCodeAt(h) === 37 && h + 1 < v) {
                switch (f = f > -1 ? f : 0,
                e.charCodeAt(h + 1)) {
                case 100:
                case 102:
                    if (p >= l || t[p] == null)
                        break;
                    f < h && (c += e.slice(f, h)),
                    c += Number(t[p]),
                    f = h + 2,
                    h++;
                    break;
                case 105:
                    if (p >= l || t[p] == null)
                        break;
                    f < h && (c += e.slice(f, h)),
                    c += Math.floor(Number(t[p])),
                    f = h + 2,
                    h++;
                    break;
                case 79:
                case 111:
                case 106:
                    if (p >= l || t[p] === void 0)
                        break;
                    f < h && (c += e.slice(f, h));
                    var m = typeof t[p];
                    if (m === "string") {
                        c += "'" + t[p] + "'",
                        f = h + 2,
                        h++;
                        break
                    }
                    if (m === "function") {
                        c += t[p].name || "<anonymous>",
                        f = h + 2,
                        h++;
                        break
                    }
                    c += o(t[p]),
                    f = h + 2,
                    h++;
                    break;
                case 115:
                    if (p >= l)
                        break;
                    f < h && (c += e.slice(f, h)),
                    c += String(t[p]),
                    f = h + 2,
                    h++;
                    break;
                case 37:
                    f < h && (c += e.slice(f, h)),
                    c += "%",
                    f = h + 2,
                    h++,
                    p--;
                    break
                }
                ++p
            }
            ++h
        }
        return f === -1 ? e : (f < v && (c += e.slice(f)),
        c)
    }
}
);
var Se = U( (en, Ke) => {
    "use strict";
    var Ye = We();
    Ke.exports = A;
    var q = Yt().console || {}
      , Vt = {
        mapHttpRequest: re,
        mapHttpResponse: re,
        wrapRequestSerializer: Re,
        wrapResponseSerializer: Re,
        wrapErrorSerializer: Re,
        req: re,
        res: re,
        err: $t
    };
    function Jt(e, t) {
        return Array.isArray(e) ? e.filter(function(o) {
            return o !== "!stdSerializers.err"
        }) : e === !0 ? Object.keys(t) : !1
    }
    function A(e) {
        e = e || {},
        e.browser = e.browser || {};
        let t = e.browser.transmit;
        if (t && typeof t.send != "function")
            throw Error("pino: transmit option must have a send function");
        let r = e.browser.write || q;
        e.browser.write && (e.browser.asObject = !0);
        let o = e.serializers || {}
          , s = Jt(e.browser.serialize, o)
          , i = e.browser.serialize;
        Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (i = !1);
        let u = ["error", "fatal", "warn", "info", "debug", "trace"];
        typeof r == "function" && (r.error = r.fatal = r.warn = r.info = r.debug = r.trace = r),
        e.enabled === !1 && (e.level = "silent");
        let d = e.level || "info"
          , l = Object.create(r);
        l.log || (l.log = $),
        Object.defineProperty(l, "levelVal", {
            get: p
        }),
        Object.defineProperty(l, "level", {
            get: f,
            set: v
        });
        let c = {
            transmit: t,
            serialize: s,
            asObject: e.browser.asObject,
            levels: u,
            timestamp: Gt(e)
        };
        l.levels = A.levels,
        l.level = d,
        l.setMaxListeners = l.getMaxListeners = l.emit = l.addListener = l.on = l.prependListener = l.once = l.prependOnceListener = l.removeListener = l.removeAllListeners = l.listeners = l.listenerCount = l.eventNames = l.write = l.flush = $,
        l.serializers = o,
        l._serialize = s,
        l._stdErrSerialize = i,
        l.child = h,
        t && (l._logEvent = xe());
        function p() {
            return this.level === "silent" ? 1 / 0 : this.levels.values[this.level]
        }
        function f() {
            return this._level
        }
        function v(m) {
            if (m !== "silent" && !this.levels.values[m])
                throw Error("unknown level " + m);
            this._level = m,
            k(c, l, "error", "log"),
            k(c, l, "fatal", "error"),
            k(c, l, "warn", "error"),
            k(c, l, "info", "log"),
            k(c, l, "debug", "log"),
            k(c, l, "trace", "log")
        }
        function h(m, P) {
            if (!m)
                throw new Error("missing bindings for child Pino");
            P = P || {},
            s && m.serializers && (P.serializers = m.serializers);
            let K = P.serializers;
            if (s && K) {
                var N = Object.assign({}, o, K)
                  , H = e.browser.serialize === !0 ? Object.keys(N) : s;
                delete m.serializers,
                ne([m], H, N, this._stdErrSerialize)
            }
            function ee(T) {
                this._childLevel = (T._childLevel | 0) + 1,
                this.error = V(T, m, "error"),
                this.fatal = V(T, m, "fatal"),
                this.warn = V(T, m, "warn"),
                this.info = V(T, m, "info"),
                this.debug = V(T, m, "debug"),
                this.trace = V(T, m, "trace"),
                N && (this.serializers = N,
                this._serialize = H),
                t && (this._logEvent = xe([].concat(T._logEvent.bindings, m)))
            }
            return ee.prototype = this,
            new ee(this)
        }
        return l
    }
    A.levels = {
        values: {
            fatal: 60,
            error: 50,
            warn: 40,
            info: 30,
            debug: 20,
            trace: 10
        },
        labels: {
            10: "trace",
            20: "debug",
            30: "info",
            40: "warn",
            50: "error",
            60: "fatal"
        }
    };
    A.stdSerializers = Vt;
    A.stdTimeFunctions = Object.assign({}, {
        nullTime: Ze,
        epochTime: Qe,
        unixTime: Xt,
        isoTime: Wt
    });
    function k(e, t, r, o) {
        let s = Object.getPrototypeOf(t);
        t[r] = t.levelVal > t.levels.values[r] ? $ : s[r] ? s[r] : q[r] || q[o] || $,
        Ft(e, t, r)
    }
    function Ft(e, t, r) {
        !e.transmit && t[r] === $ || (t[r] = function(o) {
            return function() {
                let i = e.timestamp()
                  , u = new Array(arguments.length)
                  , d = Object.getPrototypeOf && Object.getPrototypeOf(this) === q ? q : this;
                for (var l = 0; l < u.length; l++)
                    u[l] = arguments[l];
                if (e.serialize && !e.asObject && ne(u, this._serialize, this.serializers, this._stdErrSerialize),
                e.asObject ? o.call(d, Ht(this, r, u, i)) : o.apply(d, u),
                e.transmit) {
                    let c = e.transmit.level || t.level
                      , p = A.levels.values[c]
                      , f = A.levels.values[r];
                    if (f < p)
                        return;
                    qt(this, {
                        ts: i,
                        methodLevel: r,
                        methodValue: f,
                        transmitLevel: c,
                        transmitValue: A.levels.values[e.transmit.level || t.level],
                        send: e.transmit.send,
                        val: t.levelVal
                    }, u)
                }
            }
        }(t[r]))
    }
    function Ht(e, t, r, o) {
        e._serialize && ne(r, e._serialize, e.serializers, e._stdErrSerialize);
        let s = r.slice()
          , i = s[0]
          , u = {};
        o && (u.time = o),
        u.level = A.levels.values[t];
        let d = (e._childLevel | 0) + 1;
        if (d < 1 && (d = 1),
        i !== null && typeof i == "object") {
            for (; d-- && typeof s[0] == "object"; )
                Object.assign(u, s.shift());
            i = s.length ? Ye(s.shift(), s) : void 0
        } else
            typeof i == "string" && (i = Ye(s.shift(), s));
        return i !== void 0 && (u.msg = i),
        u
    }
    function ne(e, t, r, o) {
        for (let s in e)
            if (o && e[s]instanceof Error)
                e[s] = A.stdSerializers.err(e[s]);
            else if (typeof e[s] == "object" && !Array.isArray(e[s]))
                for (let i in e[s])
                    t && t.indexOf(i) > -1 && i in r && (e[s][i] = r[i](e[s][i]))
    }
    function V(e, t, r) {
        return function() {
            let o = new Array(1 + arguments.length);
            o[0] = t;
            for (var s = 1; s < o.length; s++)
                o[s] = arguments[s - 1];
            return e[r].apply(this, o)
        }
    }
    function qt(e, t, r) {
        let o = t.send
          , s = t.ts
          , i = t.methodLevel
          , u = t.methodValue
          , d = t.val
          , l = e._logEvent.bindings;
        ne(r, e._serialize || Object.keys(e.serializers), e.serializers, e._stdErrSerialize === void 0 ? !0 : e._stdErrSerialize),
        e._logEvent.ts = s,
        e._logEvent.messages = r.filter(function(c) {
            return l.indexOf(c) === -1
        }),
        e._logEvent.level.label = i,
        e._logEvent.level.value = u,
        o(i, e._logEvent, d),
        e._logEvent = xe(l)
    }
    function xe(e) {
        return {
            ts: 0,
            messages: [],
            bindings: e || [],
            level: {
                label: "",
                value: 0
            }
        }
    }
    function $t(e) {
        let t = {
            type: e.constructor.name,
            msg: e.message,
            stack: e.stack
        };
        for (let r in e)
            t[r] === void 0 && (t[r] = e[r]);
        return t
    }
    function Gt(e) {
        return typeof e.timestamp == "function" ? e.timestamp : e.timestamp === !1 ? Ze : Qe
    }
    function re() {
        return {}
    }
    function Re(e) {
        return e
    }
    function $() {}
    function Ze() {
        return !1
    }
    function Qe() {
        return Date.now()
    }
    function Xt() {
        return Math.round(Date.now() / 1e3)
    }
    function Wt() {
        return new Date(Date.now()).toISOString()
    }
    function Yt() {
        function e(t) {
            return typeof t < "u" && t
        }
        try {
            return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
                get: function() {
                    return delete Object.prototype.globalThis,
                    this.globalThis = this
                },
                configurable: !0
            }),
            globalThis
        } catch {
            return e(self) || e(window) || e(this) || {}
        }
    }
}
);
var ut = {};
Oe(ut, {
    __assign: () => Me,
    __asyncDelegator: () => Tr,
    __asyncGenerator: () => Sr,
    __asyncValues: () => Ar,
    __await: () => Y,
    __awaiter: () => wr,
    __classPrivateFieldGet: () => Br,
    __classPrivateFieldSet: () => jr,
    __createBinding: () => Er,
    __decorate: () => br,
    __exportStar: () => Or,
    __extends: () => yr,
    __generator: () => _r,
    __importDefault: () => Cr,
    __importStar: () => Pr,
    __makeTemplateObject: () => Lr,
    __metadata: () => mr,
    __param: () => vr,
    __read: () => lt,
    __rest: () => gr,
    __spread: () => Rr,
    __spreadArrays: () => xr,
    __values: () => Ue
});
function yr(e, t) {
    ze(e, t);
    function r() {
        this.constructor = e
    }
    e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype,
    new r)
}
function gr(e, t) {
    var r = {};
    for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
            t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (r[o[s]] = e[o[s]]);
    return r
}
function br(e, t, r, o) {
    var s = arguments.length, i = s < 3 ? t : o === null ? o = Object.getOwnPropertyDescriptor(t, r) : o, u;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(e, t, r, o);
    else
        for (var d = e.length - 1; d >= 0; d--)
            (u = e[d]) && (i = (s < 3 ? u(i) : s > 3 ? u(t, r, i) : u(t, r)) || i);
    return s > 3 && i && Object.defineProperty(t, r, i),
    i
}
function vr(e, t) {
    return function(r, o) {
        t(r, o, e)
    }
}
function mr(e, t) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(e, t)
}
function wr(e, t, r, o) {
    function s(i) {
        return i instanceof r ? i : new r(function(u) {
            u(i)
        }
        )
    }
    return new (r || (r = Promise))(function(i, u) {
        function d(p) {
            try {
                c(o.next(p))
            } catch (f) {
                u(f)
            }
        }
        function l(p) {
            try {
                c(o.throw(p))
            } catch (f) {
                u(f)
            }
        }
        function c(p) {
            p.done ? i(p.value) : s(p.value).then(d, l)
        }
        c((o = o.apply(e, t || [])).next())
    }
    )
}
function _r(e, t) {
    var r = {
        label: 0,
        sent: function() {
            if (i[0] & 1)
                throw i[1];
            return i[1]
        },
        trys: [],
        ops: []
    }, o, s, i, u;
    return u = {
        next: d(0),
        throw: d(1),
        return: d(2)
    },
    typeof Symbol == "function" && (u[Symbol.iterator] = function() {
        return this
    }
    ),
    u;
    function d(c) {
        return function(p) {
            return l([c, p])
        }
    }
    function l(c) {
        if (o)
            throw new TypeError("Generator is already executing.");
        for (; r; )
            try {
                if (o = 1,
                s && (i = c[0] & 2 ? s.return : c[0] ? s.throw || ((i = s.return) && i.call(s),
                0) : s.next) && !(i = i.call(s, c[1])).done)
                    return i;
                switch (s = 0,
                i && (c = [c[0] & 2, i.value]),
                c[0]) {
                case 0:
                case 1:
                    i = c;
                    break;
                case 4:
                    return r.label++,
                    {
                        value: c[1],
                        done: !1
                    };
                case 5:
                    r.label++,
                    s = c[1],
                    c = [0];
                    continue;
                case 7:
                    c = r.ops.pop(),
                    r.trys.pop();
                    continue;
                default:
                    if (i = r.trys,
                    !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                        r = 0;
                        continue
                    }
                    if (c[0] === 3 && (!i || c[1] > i[0] && c[1] < i[3])) {
                        r.label = c[1];
                        break
                    }
                    if (c[0] === 6 && r.label < i[1]) {
                        r.label = i[1],
                        i = c;
                        break
                    }
                    if (i && r.label < i[2]) {
                        r.label = i[2],
                        r.ops.push(c);
                        break
                    }
                    i[2] && r.ops.pop(),
                    r.trys.pop();
                    continue
                }
                c = t.call(e, r)
            } catch (p) {
                c = [6, p],
                s = 0
            } finally {
                o = i = 0
            }
        if (c[0] & 5)
            throw c[1];
        return {
            value: c[0] ? c[1] : void 0,
            done: !0
        }
    }
}
function Er(e, t, r, o) {
    o === void 0 && (o = r),
    e[o] = t[r]
}
function Or(e, t) {
    for (var r in e)
        r !== "default" && !t.hasOwnProperty(r) && (t[r] = e[r])
}
function Ue(e) {
    var t = typeof Symbol == "function" && Symbol.iterator
      , r = t && e[t]
      , o = 0;
    if (r)
        return r.call(e);
    if (e && typeof e.length == "number")
        return {
            next: function() {
                return e && o >= e.length && (e = void 0),
                {
                    value: e && e[o++],
                    done: !e
                }
            }
        };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
function lt(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r)
        return e;
    var o = r.call(e), s, i = [], u;
    try {
        for (; (t === void 0 || t-- > 0) && !(s = o.next()).done; )
            i.push(s.value)
    } catch (d) {
        u = {
            error: d
        }
    } finally {
        try {
            s && !s.done && (r = o.return) && r.call(o)
        } finally {
            if (u)
                throw u.error
        }
    }
    return i
}
function Rr() {
    for (var e = [], t = 0; t < arguments.length; t++)
        e = e.concat(lt(arguments[t]));
    return e
}
function xr() {
    for (var e = 0, t = 0, r = arguments.length; t < r; t++)
        e += arguments[t].length;
    for (var o = Array(e), s = 0, t = 0; t < r; t++)
        for (var i = arguments[t], u = 0, d = i.length; u < d; u++,
        s++)
            o[s] = i[u];
    return o
}
function Y(e) {
    return this instanceof Y ? (this.v = e,
    this) : new Y(e)
}
function Sr(e, t, r) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var o = r.apply(e, t || []), s, i = [];
    return s = {},
    u("next"),
    u("throw"),
    u("return"),
    s[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    s;
    function u(v) {
        o[v] && (s[v] = function(h) {
            return new Promise(function(m, P) {
                i.push([v, h, m, P]) > 1 || d(v, h)
            }
            )
        }
        )
    }
    function d(v, h) {
        try {
            l(o[v](h))
        } catch (m) {
            f(i[0][3], m)
        }
    }
    function l(v) {
        v.value instanceof Y ? Promise.resolve(v.value.v).then(c, p) : f(i[0][2], v)
    }
    function c(v) {
        d("next", v)
    }
    function p(v) {
        d("throw", v)
    }
    function f(v, h) {
        v(h),
        i.shift(),
        i.length && d(i[0][0], i[0][1])
    }
}
function Tr(e) {
    var t, r;
    return t = {},
    o("next"),
    o("throw", function(s) {
        throw s
    }),
    o("return"),
    t[Symbol.iterator] = function() {
        return this
    }
    ,
    t;
    function o(s, i) {
        t[s] = e[s] ? function(u) {
            return (r = !r) ? {
                value: Y(e[s](u)),
                done: s === "return"
            } : i ? i(u) : u
        }
        : i
    }
}
function Ar(e) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], r;
    return t ? t.call(e) : (e = typeof Ue == "function" ? Ue(e) : e[Symbol.iterator](),
    r = {},
    o("next"),
    o("throw"),
    o("return"),
    r[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    r);
    function o(i) {
        r[i] = e[i] && function(u) {
            return new Promise(function(d, l) {
                u = e[i](u),
                s(d, l, u.done, u.value)
            }
            )
        }
    }
    function s(i, u, d, l) {
        Promise.resolve(l).then(function(c) {
            i({
                value: c,
                done: d
            })
        }, u)
    }
}
function Lr(e, t) {
    return Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: t
    }) : e.raw = t,
    e
}
function Pr(e) {
    if (e && e.__esModule)
        return e;
    var t = {};
    if (e != null)
        for (var r in e)
            Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e,
    t
}
function Cr(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function Br(e, t) {
    if (!t.has(e))
        throw new TypeError("attempted to get private field on non-instance");
    return t.get(e)
}
function jr(e, t, r) {
    if (!t.has(e))
        throw new TypeError("attempted to set private field on non-instance");
    return t.set(e, r),
    r
}
var ze, Me, ft = zt( () => {
    "use strict";
    ze = function(e, t) {
        return ze = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(r, o) {
            r.__proto__ = o
        }
        || function(r, o) {
            for (var s in o)
                o.hasOwnProperty(s) && (r[s] = o[s])
        }
        ,
        ze(e, t)
    }
    ;
    Me = function() {
        return Me = Object.assign || function(t) {
            for (var r, o = 1, s = arguments.length; o < s; o++) {
                r = arguments[o];
                for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
            }
            return t
        }
        ,
        Me.apply(this, arguments)
    }
}
);
var dt = U(j => {
    "use strict";
    Object.defineProperty(j, "__esModule", {
        value: !0
    });
    j.isBrowserCryptoAvailable = j.getSubtleCrypto = j.getBrowerCrypto = void 0;
    function ke() {
        return (global == null ? void 0 : global.crypto) || (global == null ? void 0 : global.msCrypto) || {}
    }
    j.getBrowerCrypto = ke;
    function ht() {
        let e = ke();
        return e.subtle || e.webkitSubtle
    }
    j.getSubtleCrypto = ht;
    function Ir() {
        return !!ke() && !!ht()
    }
    j.isBrowserCryptoAvailable = Ir
}
);
var gt = U(I => {
    "use strict";
    Object.defineProperty(I, "__esModule", {
        value: !0
    });
    I.isBrowser = I.isNode = I.isReactNative = void 0;
    function pt() {
        return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative"
    }
    I.isReactNative = pt;
    function yt() {
        return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
    }
    I.isNode = yt;
    function Dr() {
        return !pt() && !yt()
    }
    I.isBrowser = Dr
}
);
var Ve = U(de => {
    "use strict";
    Object.defineProperty(de, "__esModule", {
        value: !0
    });
    var bt = (ft(),
    Mt(ut));
    bt.__exportStar(dt(), de);
    bt.__exportStar(gt(), de)
}
);
var xt = U( (D, Rt) => {
    "use strict";
    var me = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof global < "u" && global
      , we = function() {
        function e() {
            this.fetch = !1,
            this.DOMException = me.DOMException
        }
        return e.prototype = me,
        new e
    }();
    (function(e) {
        var t = function(r) {
            var o = typeof e < "u" && e || typeof self < "u" && self || typeof global < "u" && global || {}
              , s = {
                searchParams: "URLSearchParams"in o,
                iterable: "Symbol"in o && "iterator"in Symbol,
                blob: "FileReader"in o && "Blob"in o && function() {
                    try {
                        return new Blob,
                        !0
                    } catch {
                        return !1
                    }
                }(),
                formData: "FormData"in o,
                arrayBuffer: "ArrayBuffer"in o
            };
            function i(n) {
                return n && DataView.prototype.isPrototypeOf(n)
            }
            if (s.arrayBuffer)
                var u = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                  , d = ArrayBuffer.isView || function(n) {
                    return n && u.indexOf(Object.prototype.toString.call(n)) > -1
                }
                ;
            function l(n) {
                if (typeof n != "string" && (n = String(n)),
                /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(n) || n === "")
                    throw new TypeError('Invalid character in header field name: "' + n + '"');
                return n.toLowerCase()
            }
            function c(n) {
                return typeof n != "string" && (n = String(n)),
                n
            }
            function p(n) {
                var a = {
                    next: function() {
                        var y = n.shift();
                        return {
                            done: y === void 0,
                            value: y
                        }
                    }
                };
                return s.iterable && (a[Symbol.iterator] = function() {
                    return a
                }
                ),
                a
            }
            function f(n) {
                this.map = {},
                n instanceof f ? n.forEach(function(a, y) {
                    this.append(y, a)
                }, this) : Array.isArray(n) ? n.forEach(function(a) {
                    if (a.length != 2)
                        throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + a.length);
                    this.append(a[0], a[1])
                }, this) : n && Object.getOwnPropertyNames(n).forEach(function(a) {
                    this.append(a, n[a])
                }, this)
            }
            f.prototype.append = function(n, a) {
                n = l(n),
                a = c(a);
                var y = this.map[n];
                this.map[n] = y ? y + ", " + a : a
            }
            ,
            f.prototype.delete = function(n) {
                delete this.map[l(n)]
            }
            ,
            f.prototype.get = function(n) {
                return n = l(n),
                this.has(n) ? this.map[n] : null
            }
            ,
            f.prototype.has = function(n) {
                return this.map.hasOwnProperty(l(n))
            }
            ,
            f.prototype.set = function(n, a) {
                this.map[l(n)] = c(a)
            }
            ,
            f.prototype.forEach = function(n, a) {
                for (var y in this.map)
                    this.map.hasOwnProperty(y) && n.call(a, this.map[y], y, this)
            }
            ,
            f.prototype.keys = function() {
                var n = [];
                return this.forEach(function(a, y) {
                    n.push(y)
                }),
                p(n)
            }
            ,
            f.prototype.values = function() {
                var n = [];
                return this.forEach(function(a) {
                    n.push(a)
                }),
                p(n)
            }
            ,
            f.prototype.entries = function() {
                var n = [];
                return this.forEach(function(a, y) {
                    n.push([y, a])
                }),
                p(n)
            }
            ,
            s.iterable && (f.prototype[Symbol.iterator] = f.prototype.entries);
            function v(n) {
                if (!n._noBody) {
                    if (n.bodyUsed)
                        return Promise.reject(new TypeError("Already read"));
                    n.bodyUsed = !0
                }
            }
            function h(n) {
                return new Promise(function(a, y) {
                    n.onload = function() {
                        a(n.result)
                    }
                    ,
                    n.onerror = function() {
                        y(n.error)
                    }
                }
                )
            }
            function m(n) {
                var a = new FileReader
                  , y = h(a);
                return a.readAsArrayBuffer(n),
                y
            }
            function P(n) {
                var a = new FileReader
                  , y = h(a)
                  , b = /charset=([A-Za-z0-9_-]+)/.exec(n.type)
                  , w = b ? b[1] : "utf-8";
                return a.readAsText(n, w),
                y
            }
            function K(n) {
                for (var a = new Uint8Array(n), y = new Array(a.length), b = 0; b < a.length; b++)
                    y[b] = String.fromCharCode(a[b]);
                return y.join("")
            }
            function N(n) {
                if (n.slice)
                    return n.slice(0);
                var a = new Uint8Array(n.byteLength);
                return a.set(new Uint8Array(n)),
                a.buffer
            }
            function H() {
                return this.bodyUsed = !1,
                this._initBody = function(n) {
                    this.bodyUsed = this.bodyUsed,
                    this._bodyInit = n,
                    n ? typeof n == "string" ? this._bodyText = n : s.blob && Blob.prototype.isPrototypeOf(n) ? this._bodyBlob = n : s.formData && FormData.prototype.isPrototypeOf(n) ? this._bodyFormData = n : s.searchParams && URLSearchParams.prototype.isPrototypeOf(n) ? this._bodyText = n.toString() : s.arrayBuffer && s.blob && i(n) ? (this._bodyArrayBuffer = N(n.buffer),
                    this._bodyInit = new Blob([this._bodyArrayBuffer])) : s.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(n) || d(n)) ? this._bodyArrayBuffer = N(n) : this._bodyText = n = Object.prototype.toString.call(n) : (this._noBody = !0,
                    this._bodyText = ""),
                    this.headers.get("content-type") || (typeof n == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : s.searchParams && URLSearchParams.prototype.isPrototypeOf(n) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }
                ,
                s.blob && (this.blob = function() {
                    var n = v(this);
                    if (n)
                        return n;
                    if (this._bodyBlob)
                        return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }
                ),
                this.arrayBuffer = function() {
                    if (this._bodyArrayBuffer) {
                        var n = v(this);
                        return n || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
                    } else {
                        if (s.blob)
                            return this.blob().then(m);
                        throw new Error("could not read as ArrayBuffer")
                    }
                }
                ,
                this.text = function() {
                    var n = v(this);
                    if (n)
                        return n;
                    if (this._bodyBlob)
                        return P(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(K(this._bodyArrayBuffer));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }
                ,
                s.formData && (this.formData = function() {
                    return this.text().then(It)
                }
                ),
                this.json = function() {
                    return this.text().then(JSON.parse)
                }
                ,
                this
            }
            var ee = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
            function T(n) {
                var a = n.toUpperCase();
                return ee.indexOf(a) > -1 ? a : n
            }
            function C(n, a) {
                if (!(this instanceof C))
                    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                a = a || {};
                var y = a.body;
                if (n instanceof C) {
                    if (n.bodyUsed)
                        throw new TypeError("Already read");
                    this.url = n.url,
                    this.credentials = n.credentials,
                    a.headers || (this.headers = new f(n.headers)),
                    this.method = n.method,
                    this.mode = n.mode,
                    this.signal = n.signal,
                    !y && n._bodyInit != null && (y = n._bodyInit,
                    n.bodyUsed = !0)
                } else
                    this.url = String(n);
                if (this.credentials = a.credentials || this.credentials || "same-origin",
                (a.headers || !this.headers) && (this.headers = new f(a.headers)),
                this.method = T(a.method || this.method || "GET"),
                this.mode = a.mode || this.mode || null,
                this.signal = a.signal || this.signal || function() {
                    if ("AbortController"in o) {
                        var g = new AbortController;
                        return g.signal
                    }
                }(),
                this.referrer = null,
                (this.method === "GET" || this.method === "HEAD") && y)
                    throw new TypeError("Body not allowed for GET or HEAD requests");
                if (this._initBody(y),
                (this.method === "GET" || this.method === "HEAD") && (a.cache === "no-store" || a.cache === "no-cache")) {
                    var b = /([?&])_=[^&]*/;
                    if (b.test(this.url))
                        this.url = this.url.replace(b, "$1_=" + new Date().getTime());
                    else {
                        var w = /\?/;
                        this.url += (w.test(this.url) ? "&" : "?") + "_=" + new Date().getTime()
                    }
                }
            }
            C.prototype.clone = function() {
                return new C(this,{
                    body: this._bodyInit
                })
            }
            ;
            function It(n) {
                var a = new FormData;
                return n.trim().split("&").forEach(function(y) {
                    if (y) {
                        var b = y.split("=")
                          , w = b.shift().replace(/\+/g, " ")
                          , g = b.join("=").replace(/\+/g, " ");
                        a.append(decodeURIComponent(w), decodeURIComponent(g))
                    }
                }),
                a
            }
            function Dt(n) {
                var a = new f
                  , y = n.replace(/\r?\n[\t ]+/g, " ");
                return y.split("\r").map(function(b) {
                    return b.indexOf(`
`) === 0 ? b.substr(1, b.length) : b
                }).forEach(function(b) {
                    var w = b.split(":")
                      , g = w.shift().trim();
                    if (g) {
                        var te = w.join(":").trim();
                        try {
                            a.append(g, te)
                        } catch (Ee) {
                            console.warn("Response " + Ee.message)
                        }
                    }
                }),
                a
            }
            H.call(C.prototype);
            function S(n, a) {
                if (!(this instanceof S))
                    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                if (a || (a = {}),
                this.type = "default",
                this.status = a.status === void 0 ? 200 : a.status,
                this.status < 200 || this.status > 599)
                    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
                this.ok = this.status >= 200 && this.status < 300,
                this.statusText = a.statusText === void 0 ? "" : "" + a.statusText,
                this.headers = new f(a.headers),
                this.url = a.url || "",
                this._initBody(n)
            }
            H.call(S.prototype),
            S.prototype.clone = function() {
                return new S(this._bodyInit,{
                    status: this.status,
                    statusText: this.statusText,
                    headers: new f(this.headers),
                    url: this.url
                })
            }
            ,
            S.error = function() {
                var n = new S(null,{
                    status: 200,
                    statusText: ""
                });
                return n.ok = !1,
                n.status = 0,
                n.type = "error",
                n
            }
            ;
            var Nt = [301, 302, 303, 307, 308];
            S.redirect = function(n, a) {
                if (Nt.indexOf(a) === -1)
                    throw new RangeError("Invalid status code");
                return new S(null,{
                    status: a,
                    headers: {
                        location: n
                    }
                })
            }
            ,
            r.DOMException = o.DOMException;
            try {
                new r.DOMException
            } catch {
                r.DOMException = function(a, y) {
                    this.message = a,
                    this.name = y;
                    var b = Error(a);
                    this.stack = b.stack
                }
                ,
                r.DOMException.prototype = Object.create(Error.prototype),
                r.DOMException.prototype.constructor = r.DOMException
            }
            function _e(n, a) {
                return new Promise(function(y, b) {
                    var w = new C(n,a);
                    if (w.signal && w.signal.aborted)
                        return b(new r.DOMException("Aborted","AbortError"));
                    var g = new XMLHttpRequest;
                    function te() {
                        g.abort()
                    }
                    g.onload = function() {
                        var _ = {
                            statusText: g.statusText,
                            headers: Dt(g.getAllResponseHeaders() || "")
                        };
                        w.url.indexOf("file://") === 0 && (g.status < 200 || g.status > 599) ? _.status = 200 : _.status = g.status,
                        _.url = "responseURL"in g ? g.responseURL : _.headers.get("X-Request-URL");
                        var z = "response"in g ? g.response : g.responseText;
                        setTimeout(function() {
                            y(new S(z,_))
                        }, 0)
                    }
                    ,
                    g.onerror = function() {
                        setTimeout(function() {
                            b(new TypeError("Network request failed"))
                        }, 0)
                    }
                    ,
                    g.ontimeout = function() {
                        setTimeout(function() {
                            b(new TypeError("Network request timed out"))
                        }, 0)
                    }
                    ,
                    g.onabort = function() {
                        setTimeout(function() {
                            b(new r.DOMException("Aborted","AbortError"))
                        }, 0)
                    }
                    ;
                    function Ee(_) {
                        try {
                            return _ === "" && o.location.href ? o.location.href : _
                        } catch {
                            return _
                        }
                    }
                    if (g.open(w.method, Ee(w.url), !0),
                    w.credentials === "include" ? g.withCredentials = !0 : w.credentials === "omit" && (g.withCredentials = !1),
                    "responseType"in g && (s.blob ? g.responseType = "blob" : s.arrayBuffer && (g.responseType = "arraybuffer")),
                    a && typeof a.headers == "object" && !(a.headers instanceof f || o.Headers && a.headers instanceof o.Headers)) {
                        var $e = [];
                        Object.getOwnPropertyNames(a.headers).forEach(function(_) {
                            $e.push(l(_)),
                            g.setRequestHeader(_, c(a.headers[_]))
                        }),
                        w.headers.forEach(function(_, z) {
                            $e.indexOf(z) === -1 && g.setRequestHeader(z, _)
                        })
                    } else
                        w.headers.forEach(function(_, z) {
                            g.setRequestHeader(z, _)
                        });
                    w.signal && (w.signal.addEventListener("abort", te),
                    g.onreadystatechange = function() {
                        g.readyState === 4 && w.signal.removeEventListener("abort", te)
                    }
                    ),
                    g.send(typeof w._bodyInit > "u" ? null : w._bodyInit)
                }
                )
            }
            return _e.polyfill = !0,
            o.fetch || (o.fetch = _e,
            o.Headers = f,
            o.Request = C,
            o.Response = S),
            r.Headers = f,
            r.Request = C,
            r.Response = S,
            r.fetch = _e,
            Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            r
        }({})
    }
    )(we);
    we.fetch.ponyfill = !0;
    delete we.fetch.polyfill;
    var F = me.fetch ? me : we;
    D = F.fetch;
    D.default = F.fetch;
    D.fetch = F.fetch;
    D.Headers = F.Headers;
    D.Request = F.Request;
    D.Response = F.Response;
    Rt.exports = D
}
);
var L = M(Se())
  , Kt = M(Se());
var Zt = e => JSON.stringify(e, (t, r) => typeof r == "bigint" ? r.toString() + "n" : r)
  , Qt = e => {
    let t = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g
      , r = e.replace(t, '$1"$2n"$3');
    return JSON.parse(r, (o, s) => typeof s == "string" && s.match(/^\d+n$/) ? BigInt(s.substring(0, s.length - 1)) : s)
}
;
function et(e) {
    if (typeof e != "string")
        throw new Error(`Cannot safe json parse value of type ${typeof e}`);
    try {
        return Qt(e)
    } catch {
        return e
    }
}
function J(e) {
    return typeof e == "string" ? e : Zt(e) || ""
}
var er = {
    level: "info"
}
  , G = "custom_context"
  , Pe = 1e3 * 1024
  , Te = class {
    constructor(t) {
        this.nodeValue = t,
        this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length,
        this.next = null
    }
    get value() {
        return this.nodeValue
    }
    get size() {
        return this.sizeInBytes
    }
}
  , oe = class {
    constructor(t) {
        this.head = null,
        this.tail = null,
        this.lengthInNodes = 0,
        this.maxSizeInBytes = t,
        this.sizeInBytes = 0
    }
    append(t) {
        let r = new Te(t);
        if (r.size > this.maxSizeInBytes)
            throw new Error(`[LinkedList] Value too big to insert into list: ${t} with size ${r.size}`);
        for (; this.size + r.size > this.maxSizeInBytes; )
            this.shift();
        this.head ? (this.tail && (this.tail.next = r),
        this.tail = r) : (this.head = r,
        this.tail = r),
        this.lengthInNodes++,
        this.sizeInBytes += r.size
    }
    shift() {
        if (!this.head)
            return;
        let t = this.head;
        this.head = this.head.next,
        this.head || (this.tail = null),
        this.lengthInNodes--,
        this.sizeInBytes -= t.size
    }
    toArray() {
        let t = []
          , r = this.head;
        for (; r !== null; )
            t.push(r.value),
            r = r.next;
        return t
    }
    get length() {
        return this.lengthInNodes
    }
    get size() {
        return this.sizeInBytes
    }
    toOrderedArray() {
        return Array.from(this)
    }
    [Symbol.iterator]() {
        let t = this.head;
        return {
            next: () => {
                if (!t)
                    return {
                        done: !0,
                        value: null
                    };
                let r = t.value;
                return t = t.next,
                {
                    done: !1,
                    value: r
                }
            }
        }
    }
}
  , se = class {
    constructor(t, r=Pe) {
        this.level = t ?? "error",
        this.levelValue = L.levels.values[this.level],
        this.MAX_LOG_SIZE_IN_BYTES = r,
        this.logs = new oe(this.MAX_LOG_SIZE_IN_BYTES)
    }
    forwardToConsole(t, r) {
        r === L.levels.values.error ? console.error(t) : r === L.levels.values.warn ? console.warn(t) : r === L.levels.values.debug ? console.debug(t) : r === L.levels.values.trace ? console.trace(t) : console.log(t)
    }
    appendToLogs(t) {
        this.logs.append(J({
            timestamp: new Date().toISOString(),
            log: t
        }));
        let r = typeof t == "string" ? JSON.parse(t).level : t.level;
        r >= this.levelValue && this.forwardToConsole(t, r)
    }
    getLogs() {
        return this.logs
    }
    clearLogs() {
        this.logs = new oe(this.MAX_LOG_SIZE_IN_BYTES)
    }
    getLogArray() {
        return Array.from(this.logs)
    }
    logsToBlob(t) {
        let r = this.getLogArray();
        return r.push(J({
            extraMetadata: t
        })),
        new Blob(r,{
            type: "application/json"
        })
    }
}
  , Ae = class {
    constructor(t, r=Pe) {
        this.baseChunkLogger = new se(t,r)
    }
    write(t) {
        this.baseChunkLogger.appendToLogs(t)
    }
    getLogs() {
        return this.baseChunkLogger.getLogs()
    }
    clearLogs() {
        this.baseChunkLogger.clearLogs()
    }
    getLogArray() {
        return this.baseChunkLogger.getLogArray()
    }
    logsToBlob(t) {
        return this.baseChunkLogger.logsToBlob(t)
    }
    downloadLogsBlobInBrowser(t) {
        let r = URL.createObjectURL(this.logsToBlob(t))
          , o = document.createElement("a");
        o.href = r,
        o.download = `walletconnect-logs-${new Date().toISOString()}.txt`,
        document.body.appendChild(o),
        o.click(),
        document.body.removeChild(o),
        URL.revokeObjectURL(r)
    }
}
  , Le = class {
    constructor(t, r=Pe) {
        this.baseChunkLogger = new se(t,r)
    }
    write(t) {
        this.baseChunkLogger.appendToLogs(t)
    }
    getLogs() {
        return this.baseChunkLogger.getLogs()
    }
    clearLogs() {
        this.baseChunkLogger.clearLogs()
    }
    getLogArray() {
        return this.baseChunkLogger.getLogArray()
    }
    logsToBlob(t) {
        return this.baseChunkLogger.logsToBlob(t)
    }
}
  , tr = Object.defineProperty
  , rr = Object.defineProperties
  , nr = Object.getOwnPropertyDescriptors
  , tt = Object.getOwnPropertySymbols
  , or = Object.prototype.hasOwnProperty
  , sr = Object.prototype.propertyIsEnumerable
  , rt = (e, t, r) => t in e ? tr(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , ie = (e, t) => {
    for (var r in t || (t = {}))
        or.call(t, r) && rt(e, r, t[r]);
    if (tt)
        for (var r of tt(t))
            sr.call(t, r) && rt(e, r, t[r]);
    return e
}
  , ae = (e, t) => rr(e, nr(t));
function nn(e) {
    return ae(ie({}, e), {
        level: e?.level || er.level
    })
}
function ir(e, t=G) {
    return e[t] || ""
}
function ar(e, t, r=G) {
    return e[r] = t,
    e
}
function cr(e, t=G) {
    let r = "";
    return typeof e.bindings > "u" ? r = ir(e, t) : r = e.bindings().context || "",
    r
}
function lr(e, t, r=G) {
    let o = cr(e, r);
    return o.trim() ? `${o}/${t}` : t
}
function on(e, t, r=G) {
    let o = lr(e, t, r)
      , s = e.child({
        context: o
    });
    return ar(s, o, r)
}
function ur(e) {
    var t, r;
    let o = new Ae((t = e.opts) == null ? void 0 : t.level,e.maxSizeInBytes);
    return {
        logger: (0,
        L.default)(ae(ie({}, e.opts), {
            level: "trace",
            browser: ae(ie({}, (r = e.opts) == null ? void 0 : r.browser), {
                write: s => o.write(s)
            })
        })),
        chunkLoggerController: o
    }
}
function fr(e) {
    var t;
    let r = new Le((t = e.opts) == null ? void 0 : t.level,e.maxSizeInBytes);
    return {
        logger: (0,
        L.default)(ae(ie({}, e.opts), {
            level: "trace"
        }), r),
        chunkLoggerController: r
    }
}
function sn(e) {
    return typeof e.loggerOverride < "u" && typeof e.loggerOverride != "string" ? {
        logger: e.loggerOverride,
        chunkLoggerController: null
    } : typeof window < "u" ? ur(e) : fr(e)
}
var nt = "PARSE_ERROR"
  , ot = "INVALID_REQUEST"
  , st = "METHOD_NOT_FOUND"
  , it = "INVALID_PARAMS"
  , ce = "INTERNAL_ERROR"
  , X = "SERVER_ERROR"
  , Ce = [-32700, -32600, -32601, -32602, -32603]
  , le = [-32e3, -32099]
  , B = {
    [nt]: {
        code: -32700,
        message: "Parse error"
    },
    [ot]: {
        code: -32600,
        message: "Invalid Request"
    },
    [st]: {
        code: -32601,
        message: "Method not found"
    },
    [it]: {
        code: -32602,
        message: "Invalid params"
    },
    [ce]: {
        code: -32603,
        message: "Internal error"
    },
    [X]: {
        code: -32e3,
        message: "Server error"
    }
}
  , W = X;
function hr(e) {
    return e <= le[0] && e >= le[1]
}
function ue(e) {
    return Ce.includes(e)
}
function at(e) {
    return typeof e == "number"
}
function fe(e) {
    return Object.keys(B).includes(e) ? B[e] : B[W]
}
function he(e) {
    let t = Object.values(B).find(r => r.code === e);
    return t || B[W]
}
function dr(e) {
    if (typeof e.error.code > "u")
        return {
            valid: !1,
            error: "Missing code for JSON-RPC error"
        };
    if (typeof e.error.message > "u")
        return {
            valid: !1,
            error: "Missing message for JSON-RPC error"
        };
    if (!at(e.error.code))
        return {
            valid: !1,
            error: `Invalid error code type for JSON-RPC: ${e.error.code}`
        };
    if (ue(e.error.code)) {
        let t = he(e.error.code);
        if (t.message !== B[W].message && e.error.message === t.message)
            return {
                valid: !1,
                error: `Invalid error code message for JSON-RPC: ${e.error.code}`
            }
    }
    return {
        valid: !0
    }
}
function Be(e, t, r) {
    return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${t}`) : e
}
function je(e=3) {
    let t = Date.now() * Math.pow(10, e)
      , r = Math.floor(Math.random() * Math.pow(10, e));
    return t + r
}
function Ie(e=6) {
    return BigInt(je(e))
}
function De(e, t, r) {
    return {
        id: r || je(),
        jsonrpc: "2.0",
        method: e,
        params: t
    }
}
function pr(e, t) {
    return {
        id: e,
        jsonrpc: "2.0",
        result: t
    }
}
function Ne(e, t, r) {
    return {
        id: e,
        jsonrpc: "2.0",
        error: ct(t, r)
    }
}
function ct(e, t) {
    return typeof e > "u" ? fe(ce) : (typeof e == "string" && (e = Object.assign(Object.assign({}, fe(X)), {
        message: e
    })),
    typeof t < "u" && (e.data = t),
    ue(e.code) && (e = he(e.code)),
    e)
}
var x = {};
Oe(x, {
    DEFAULT_ERROR: () => W,
    IBaseJsonRpcProvider: () => ge,
    IEvents: () => Z,
    IJsonRpcConnection: () => Je,
    IJsonRpcProvider: () => Q,
    INTERNAL_ERROR: () => ce,
    INVALID_PARAMS: () => it,
    INVALID_REQUEST: () => ot,
    METHOD_NOT_FOUND: () => st,
    PARSE_ERROR: () => nt,
    RESERVED_ERROR_CODES: () => Ce,
    SERVER_ERROR: () => X,
    SERVER_ERROR_CODE_RANGE: () => le,
    STANDARD_ERROR_MAP: () => B,
    formatErrorMessage: () => ct,
    formatJsonRpcError: () => Ne,
    formatJsonRpcRequest: () => De,
    formatJsonRpcResult: () => pr,
    getBigIntRpcId: () => Ie,
    getError: () => fe,
    getErrorByCode: () => he,
    isHttpUrl: () => be,
    isJsonRpcError: () => ve,
    isJsonRpcPayload: () => Fe,
    isJsonRpcRequest: () => Hr,
    isJsonRpcResponse: () => He,
    isJsonRpcResult: () => _t,
    isJsonRpcValidationInvalid: () => qr,
    isLocalhostUrl: () => Fr,
    isNodeJs: () => mt,
    isReservedErrorCode: () => ue,
    isServerErrorCode: () => hr,
    isValidDefaultRoute: () => pe,
    isValidErrorCode: () => at,
    isValidLeadingWildcardRoute: () => zr,
    isValidRoute: () => Nr,
    isValidTrailingWildcardRoute: () => Mr,
    isValidWildcardRoute: () => ye,
    isWsUrl: () => Jr,
    parseConnectionError: () => Be,
    payloadId: () => je,
    validateJsonRpcError: () => dr
});
var E = {};
Oe(E, {
    isNodeJs: () => mt
});
var vt = M(Ve());
O(E, M(Ve()));
var mt = vt.isNode;
O(x, E);
function Nr(e) {
    return e.includes("*") ? ye(e) : !/\W/g.test(e)
}
function pe(e) {
    return e === "*"
}
function ye(e) {
    return pe(e) ? !0 : !(!e.includes("*") || e.split("*").length !== 2 || e.split("*").filter(t => t.trim() === "").length !== 1)
}
function zr(e) {
    return !pe(e) && ye(e) && !e.split("*")[0].trim()
}
function Mr(e) {
    return !pe(e) && ye(e) && !e.split("*")[1].trim()
}
var Z = class {
}
  , Je = class extends Z {
    constructor(t) {
        super()
    }
}
  , ge = class extends Z {
    constructor() {
        super()
    }
}
  , Q = class extends ge {
    constructor(t) {
        super()
    }
}
;
var Ur = "^https?:"
  , kr = "^wss?:";
function Vr(e) {
    let t = e.match(new RegExp(/^\w+:/,"gi"));
    if (!(!t || !t.length))
        return t[0]
}
function wt(e, t) {
    let r = Vr(e);
    return typeof r > "u" ? !1 : new RegExp(t).test(r)
}
function be(e) {
    return wt(e, Ur)
}
function Jr(e) {
    return wt(e, kr)
}
function Fr(e) {
    return new RegExp("wss?://localhost(:d{2,5})?").test(e)
}
function Fe(e) {
    return typeof e == "object" && "id"in e && "jsonrpc"in e && e.jsonrpc === "2.0"
}
function Hr(e) {
    return Fe(e) && "method"in e
}
function He(e) {
    return Fe(e) && (_t(e) || ve(e))
}
function _t(e) {
    return "result"in e
}
function ve(e) {
    return "error"in e
}
function qr(e) {
    return "error"in e && e.valid === !1
}
var Ot = M(Ge());
var Et = class extends Q {
    constructor(t) {
        super(t),
        this.events = new Ot.EventEmitter,
        this.hasRegisteredEventListeners = !1,
        this.connection = this.setConnection(t),
        this.connection.connected && this.registerEventListeners()
    }
    connect() {
        return R(this, arguments, function*(t=this.connection) {
            yield this.open(t)
        })
    }
    disconnect() {
        return R(this, null, function*() {
            yield this.close()
        })
    }
    on(t, r) {
        this.events.on(t, r)
    }
    once(t, r) {
        this.events.once(t, r)
    }
    off(t, r) {
        this.events.off(t, r)
    }
    removeListener(t, r) {
        this.events.removeListener(t, r)
    }
    request(t, r) {
        return R(this, null, function*() {
            return this.requestStrict(De(t.method, t.params || [], t.id || Ie().toString()), r)
        })
    }
    requestStrict(t, r) {
        return R(this, null, function*() {
            return new Promise( (o, s) => R(this, null, function*() {
                if (!this.connection.connected)
                    try {
                        yield this.open()
                    } catch (i) {
                        s(i)
                    }
                this.events.on(`${t.id}`, i => {
                    ve(i) ? s(i.error) : o(i.result)
                }
                );
                try {
                    yield this.connection.send(t, r)
                } catch (i) {
                    s(i)
                }
            }))
        })
    }
    setConnection(t=this.connection) {
        return t
    }
    onPayload(t) {
        this.events.emit("payload", t),
        He(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
            type: t.method,
            data: t.params
        })
    }
    onClose(t) {
        t && t.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason ? `(${t.reason})` : ""}`)),
        this.events.emit("disconnect")
    }
    open() {
        return R(this, arguments, function*(t=this.connection) {
            this.connection === t && this.connection.connected || (this.connection.connected && this.close(),
            typeof t == "string" && (yield this.connection.open(t),
            t = this.connection),
            this.connection = this.setConnection(t),
            yield this.connection.open(),
            this.registerEventListeners(),
            this.events.emit("connect"))
        })
    }
    close() {
        return R(this, null, function*() {
            yield this.connection.close()
        })
    }
    registerEventListeners() {
        this.hasRegisteredEventListeners || (this.connection.on("payload", t => this.onPayload(t)),
        this.connection.on("close", t => this.onClose(t)),
        this.connection.on("error", t => this.events.emit("error", t)),
        this.connection.on("register_error", t => this.onClose()),
        this.hasRegisteredEventListeners = !0)
    }
}
;
var jt = M(Ge())
  , qe = M(xt());
var $r = Object.defineProperty
  , Gr = Object.defineProperties
  , Xr = Object.getOwnPropertyDescriptors
  , St = Object.getOwnPropertySymbols
  , Wr = Object.prototype.hasOwnProperty
  , Yr = Object.prototype.propertyIsEnumerable
  , Tt = (e, t, r) => t in e ? $r(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , At = (e, t) => {
    for (var r in t || (t = {}))
        Wr.call(t, r) && Tt(e, r, t[r]);
    if (St)
        for (var r of St(t))
            Yr.call(t, r) && Tt(e, r, t[r]);
    return e
}
  , Lt = (e, t) => Gr(e, Xr(t))
  , Zr = {
    Accept: "application/json",
    "Content-Type": "application/json"
}
  , Qr = "POST"
  , Pt = {
    headers: Zr,
    method: Qr
}
  , Ct = 10
  , Bt = class {
    constructor(t, r=!1) {
        if (this.url = t,
        this.disableProviderPing = r,
        this.events = new jt.EventEmitter,
        this.isAvailable = !1,
        this.registering = !1,
        !be(t))
            throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
        this.url = t,
        this.disableProviderPing = r
    }
    get connected() {
        return this.isAvailable
    }
    get connecting() {
        return this.registering
    }
    on(t, r) {
        this.events.on(t, r)
    }
    once(t, r) {
        this.events.once(t, r)
    }
    off(t, r) {
        this.events.off(t, r)
    }
    removeListener(t, r) {
        this.events.removeListener(t, r)
    }
    open() {
        return R(this, arguments, function*(t=this.url) {
            yield this.register(t)
        })
    }
    close() {
        return R(this, null, function*() {
            if (!this.isAvailable)
                throw new Error("Connection already closed");
            this.onClose()
        })
    }
    send(t) {
        return R(this, null, function*() {
            this.isAvailable || (yield this.register());
            try {
                let r = J(t)
                  , o = yield(yield(0,
                qe.default)(this.url, Lt(At({}, Pt), {
                    body: r
                }))).json();
                this.onPayload({
                    data: o
                })
            } catch (r) {
                this.onError(t.id, r)
            }
        })
    }
    register() {
        return R(this, arguments, function*(t=this.url) {
            if (!be(t))
                throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
            if (this.registering) {
                let r = this.events.getMaxListeners();
                return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1),
                new Promise( (o, s) => {
                    this.events.once("register_error", i => {
                        this.resetMaxListeners(),
                        s(i)
                    }
                    ),
                    this.events.once("open", () => {
                        if (this.resetMaxListeners(),
                        typeof this.isAvailable > "u")
                            return s(new Error("HTTP connection is missing or invalid"));
                        o()
                    }
                    )
                }
                )
            }
            this.url = t,
            this.registering = !0;
            try {
                if (!this.disableProviderPing) {
                    let r = J({
                        id: 1,
                        jsonrpc: "2.0",
                        method: "test",
                        params: []
                    });
                    yield(0,
                    qe.default)(t, Lt(At({}, Pt), {
                        body: r
                    }))
                }
                this.onOpen()
            } catch (r) {
                let o = this.parseError(r);
                throw this.events.emit("register_error", o),
                this.onClose(),
                o
            }
        })
    }
    onOpen() {
        this.isAvailable = !0,
        this.registering = !1,
        this.events.emit("open")
    }
    onClose() {
        this.isAvailable = !1,
        this.registering = !1,
        this.events.emit("close")
    }
    onPayload(t) {
        if (typeof t.data > "u")
            return;
        let r = typeof t.data == "string" ? et(t.data) : t.data;
        this.events.emit("payload", r)
    }
    onError(t, r) {
        let o = this.parseError(r)
          , s = o.message || o.toString()
          , i = Ne(t, s);
        this.events.emit("payload", i)
    }
    parseError(t, r=this.url) {
        return Be(t, r, "HTTP")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > Ct && this.events.setMaxListeners(Ct)
    }
}
;
export {et as a, J as b, Kt as c, nn as d, cr as e, on as f, sn as g, Be as h, je as i, Ie as j, De as k, pr as l, Ne as m, Jr as n, Fr as o, Hr as p, He as q, _t as r, ve as s, x as t, Et as u, Bt as v};
