import {a as pe, b as ge, h as Yr, m as Jr, n as Ft, o as Gr, t as Ct} from "./chunk-WSOYI2AJ.js";
import {a as $r} from "./chunk-EHBBQRNU.js";
import {a as A, b as Ge, e as ai, f as X, g as Z, i as Xe, j as Ze, l as y} from "./chunk-JOVT4LBN.js";
var Re = {};
Z(Re, {
    __assign: () => _t,
    __asyncDelegator: () => Ni,
    __asyncGenerator: () => Oi,
    __asyncValues: () => Ti,
    __await: () => Ue,
    __awaiter: () => Fi,
    __classPrivateFieldGet: () => Mi,
    __classPrivateFieldSet: () => Li,
    __createBinding: () => Ai,
    __decorate: () => vi,
    __exportStar: () => _i,
    __extends: () => yi,
    __generator: () => Ci,
    __importDefault: () => Pi,
    __importStar: () => Ri,
    __makeTemplateObject: () => Ui,
    __metadata: () => Si,
    __param: () => xi,
    __read: () => tn,
    __rest: () => Ei,
    __spread: () => Ii,
    __spreadArrays: () => Bi,
    __values: () => It
});
function yi(e, t) {
    At(e, t);
    function r() {
        this.constructor = e
    }
    e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype,
    new r)
}
function Ei(e, t) {
    var r = {};
    for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
            t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
    return r
}
function vi(e, t, r, n) {
    var o = arguments.length, i = o < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n, a;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        i = Reflect.decorate(e, t, r, n);
    else
        for (var f = e.length - 1; f >= 0; f--)
            (a = e[f]) && (i = (o < 3 ? a(i) : o > 3 ? a(t, r, i) : a(t, r)) || i);
    return o > 3 && i && Object.defineProperty(t, r, i),
    i
}
function xi(e, t) {
    return function(r, n) {
        t(r, n, e)
    }
}
function Si(e, t) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(e, t)
}
function Fi(e, t, r, n) {
    function o(i) {
        return i instanceof r ? i : new r(function(a) {
            a(i)
        }
        )
    }
    return new (r || (r = Promise))(function(i, a) {
        function f(s) {
            try {
                h(n.next(s))
            } catch (c) {
                a(c)
            }
        }
        function u(s) {
            try {
                h(n.throw(s))
            } catch (c) {
                a(c)
            }
        }
        function h(s) {
            s.done ? i(s.value) : o(s.value).then(f, u)
        }
        h((n = n.apply(e, t || [])).next())
    }
    )
}
function Ci(e, t) {
    var r = {
        label: 0,
        sent: function() {
            if (i[0] & 1)
                throw i[1];
            return i[1]
        },
        trys: [],
        ops: []
    }, n, o, i, a;
    return a = {
        next: f(0),
        throw: f(1),
        return: f(2)
    },
    typeof Symbol == "function" && (a[Symbol.iterator] = function() {
        return this
    }
    ),
    a;
    function f(h) {
        return function(s) {
            return u([h, s])
        }
    }
    function u(h) {
        if (n)
            throw new TypeError("Generator is already executing.");
        for (; r; )
            try {
                if (n = 1,
                o && (i = h[0] & 2 ? o.return : h[0] ? o.throw || ((i = o.return) && i.call(o),
                0) : o.next) && !(i = i.call(o, h[1])).done)
                    return i;
                switch (o = 0,
                i && (h = [h[0] & 2, i.value]),
                h[0]) {
                case 0:
                case 1:
                    i = h;
                    break;
                case 4:
                    return r.label++,
                    {
                        value: h[1],
                        done: !1
                    };
                case 5:
                    r.label++,
                    o = h[1],
                    h = [0];
                    continue;
                case 7:
                    h = r.ops.pop(),
                    r.trys.pop();
                    continue;
                default:
                    if (i = r.trys,
                    !(i = i.length > 0 && i[i.length - 1]) && (h[0] === 6 || h[0] === 2)) {
                        r = 0;
                        continue
                    }
                    if (h[0] === 3 && (!i || h[1] > i[0] && h[1] < i[3])) {
                        r.label = h[1];
                        break
                    }
                    if (h[0] === 6 && r.label < i[1]) {
                        r.label = i[1],
                        i = h;
                        break
                    }
                    if (i && r.label < i[2]) {
                        r.label = i[2],
                        r.ops.push(h);
                        break
                    }
                    i[2] && r.ops.pop(),
                    r.trys.pop();
                    continue
                }
                h = t.call(e, r)
            } catch (s) {
                h = [6, s],
                o = 0
            } finally {
                n = i = 0
            }
        if (h[0] & 5)
            throw h[1];
        return {
            value: h[0] ? h[1] : void 0,
            done: !0
        }
    }
}
function Ai(e, t, r, n) {
    n === void 0 && (n = r),
    e[n] = t[r]
}
function _i(e, t) {
    for (var r in e)
        r !== "default" && !t.hasOwnProperty(r) && (t[r] = e[r])
}
function It(e) {
    var t = typeof Symbol == "function" && Symbol.iterator
      , r = t && e[t]
      , n = 0;
    if (r)
        return r.call(e);
    if (e && typeof e.length == "number")
        return {
            next: function() {
                return e && n >= e.length && (e = void 0),
                {
                    value: e && e[n++],
                    done: !e
                }
            }
        };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
function tn(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r)
        return e;
    var n = r.call(e), o, i = [], a;
    try {
        for (; (t === void 0 || t-- > 0) && !(o = n.next()).done; )
            i.push(o.value)
    } catch (f) {
        a = {
            error: f
        }
    } finally {
        try {
            o && !o.done && (r = n.return) && r.call(n)
        } finally {
            if (a)
                throw a.error
        }
    }
    return i
}
function Ii() {
    for (var e = [], t = 0; t < arguments.length; t++)
        e = e.concat(tn(arguments[t]));
    return e
}
function Bi() {
    for (var e = 0, t = 0, r = arguments.length; t < r; t++)
        e += arguments[t].length;
    for (var n = Array(e), o = 0, t = 0; t < r; t++)
        for (var i = arguments[t], a = 0, f = i.length; a < f; a++,
        o++)
            n[o] = i[a];
    return n
}
function Ue(e) {
    return this instanceof Ue ? (this.v = e,
    this) : new Ue(e)
}
function Oi(e, t, r) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = r.apply(e, t || []), o, i = [];
    return o = {},
    a("next"),
    a("throw"),
    a("return"),
    o[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    o;
    function a(l) {
        n[l] && (o[l] = function(p) {
            return new Promise(function(d, g) {
                i.push([l, p, d, g]) > 1 || f(l, p)
            }
            )
        }
        )
    }
    function f(l, p) {
        try {
            u(n[l](p))
        } catch (d) {
            c(i[0][3], d)
        }
    }
    function u(l) {
        l.value instanceof Ue ? Promise.resolve(l.value.v).then(h, s) : c(i[0][2], l)
    }
    function h(l) {
        f("next", l)
    }
    function s(l) {
        f("throw", l)
    }
    function c(l, p) {
        l(p),
        i.shift(),
        i.length && f(i[0][0], i[0][1])
    }
}
function Ni(e) {
    var t, r;
    return t = {},
    n("next"),
    n("throw", function(o) {
        throw o
    }),
    n("return"),
    t[Symbol.iterator] = function() {
        return this
    }
    ,
    t;
    function n(o, i) {
        t[o] = e[o] ? function(a) {
            return (r = !r) ? {
                value: Ue(e[o](a)),
                done: o === "return"
            } : i ? i(a) : a
        }
        : i
    }
}
function Ti(e) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], r;
    return t ? t.call(e) : (e = typeof It == "function" ? It(e) : e[Symbol.iterator](),
    r = {},
    n("next"),
    n("throw"),
    n("return"),
    r[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    r);
    function n(i) {
        r[i] = e[i] && function(a) {
            return new Promise(function(f, u) {
                a = e[i](a),
                o(f, u, a.done, a.value)
            }
            )
        }
    }
    function o(i, a, f, u) {
        Promise.resolve(u).then(function(h) {
            i({
                value: h,
                done: f
            })
        }, a)
    }
}
function Ui(e, t) {
    return Object.defineProperty ? Object.defineProperty(e, "raw", {
        value: t
    }) : e.raw = t,
    e
}
function Ri(e) {
    if (e && e.__esModule)
        return e;
    var t = {};
    if (e != null)
        for (var r in e)
            Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e,
    t
}
function Pi(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}
function Mi(e, t) {
    if (!t.has(e))
        throw new TypeError("attempted to get private field on non-instance");
    return t.get(e)
}
function Li(e, t, r) {
    if (!t.has(e))
        throw new TypeError("attempted to set private field on non-instance");
    return t.set(e, r),
    r
}
var At, _t, Pe = ai( () => {
    "use strict";
    At = function(e, t) {
        return At = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(r, n) {
            r.__proto__ = n
        }
        || function(r, n) {
            for (var o in n)
                n.hasOwnProperty(o) && (r[o] = n[o])
        }
        ,
        At(e, t)
    }
    ;
    _t = function() {
        return _t = Object.assign || function(t) {
            for (var r, n = 1, o = arguments.length; n < o; n++) {
                r = arguments[n];
                for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
            }
            return t
        }
        ,
        _t.apply(this, arguments)
    }
}
);
var rn = X(Qe => {
    "use strict";
    Object.defineProperty(Qe, "__esModule", {
        value: !0
    });
    Qe.delay = void 0;
    function zi(e) {
        return new Promise(t => {
            setTimeout( () => {
                t(!0)
            }
            , e)
        }
        )
    }
    Qe.delay = zi
}
);
var nn = X(ve => {
    "use strict";
    Object.defineProperty(ve, "__esModule", {
        value: !0
    });
    ve.ONE_THOUSAND = ve.ONE_HUNDRED = void 0;
    ve.ONE_HUNDRED = 100;
    ve.ONE_THOUSAND = 1e3
}
);
var on = X(w => {
    "use strict";
    Object.defineProperty(w, "__esModule", {
        value: !0
    });
    w.ONE_YEAR = w.FOUR_WEEKS = w.THREE_WEEKS = w.TWO_WEEKS = w.ONE_WEEK = w.THIRTY_DAYS = w.SEVEN_DAYS = w.FIVE_DAYS = w.THREE_DAYS = w.ONE_DAY = w.TWENTY_FOUR_HOURS = w.TWELVE_HOURS = w.SIX_HOURS = w.THREE_HOURS = w.ONE_HOUR = w.SIXTY_MINUTES = w.THIRTY_MINUTES = w.TEN_MINUTES = w.FIVE_MINUTES = w.ONE_MINUTE = w.SIXTY_SECONDS = w.THIRTY_SECONDS = w.TEN_SECONDS = w.FIVE_SECONDS = w.ONE_SECOND = void 0;
    w.ONE_SECOND = 1;
    w.FIVE_SECONDS = 5;
    w.TEN_SECONDS = 10;
    w.THIRTY_SECONDS = 30;
    w.SIXTY_SECONDS = 60;
    w.ONE_MINUTE = w.SIXTY_SECONDS;
    w.FIVE_MINUTES = w.ONE_MINUTE * 5;
    w.TEN_MINUTES = w.ONE_MINUTE * 10;
    w.THIRTY_MINUTES = w.ONE_MINUTE * 30;
    w.SIXTY_MINUTES = w.ONE_MINUTE * 60;
    w.ONE_HOUR = w.SIXTY_MINUTES;
    w.THREE_HOURS = w.ONE_HOUR * 3;
    w.SIX_HOURS = w.ONE_HOUR * 6;
    w.TWELVE_HOURS = w.ONE_HOUR * 12;
    w.TWENTY_FOUR_HOURS = w.ONE_HOUR * 24;
    w.ONE_DAY = w.TWENTY_FOUR_HOURS;
    w.THREE_DAYS = w.ONE_DAY * 3;
    w.FIVE_DAYS = w.ONE_DAY * 5;
    w.SEVEN_DAYS = w.ONE_DAY * 7;
    w.THIRTY_DAYS = w.ONE_DAY * 30;
    w.ONE_WEEK = w.SEVEN_DAYS;
    w.TWO_WEEKS = w.ONE_WEEK * 2;
    w.THREE_WEEKS = w.ONE_WEEK * 3;
    w.FOUR_WEEKS = w.ONE_WEEK * 4;
    w.ONE_YEAR = w.ONE_DAY * 365
}
);
var Bt = X(et => {
    "use strict";
    Object.defineProperty(et, "__esModule", {
        value: !0
    });
    var sn = (Pe(),
    Ze(Re));
    sn.__exportStar(nn(), et);
    sn.__exportStar(on(), et)
}
);
var un = X(xe => {
    "use strict";
    Object.defineProperty(xe, "__esModule", {
        value: !0
    });
    xe.fromMiliseconds = xe.toMiliseconds = void 0;
    var an = Bt();
    function Wi(e) {
        return e * an.ONE_THOUSAND
    }
    xe.toMiliseconds = Wi;
    function ki(e) {
        return Math.floor(e / an.ONE_THOUSAND)
    }
    xe.fromMiliseconds = ki
}
);
var fn = X(tt => {
    "use strict";
    Object.defineProperty(tt, "__esModule", {
        value: !0
    });
    var cn = (Pe(),
    Ze(Re));
    cn.__exportStar(rn(), tt);
    cn.__exportStar(un(), tt)
}
);
var ln = X(Me => {
    "use strict";
    Object.defineProperty(Me, "__esModule", {
        value: !0
    });
    Me.Watch = void 0;
    var rt = class {
        constructor() {
            this.timestamps = new Map
        }
        start(t) {
            if (this.timestamps.has(t))
                throw new Error(`Watch already started for label: ${t}`);
            this.timestamps.set(t, {
                started: Date.now()
            })
        }
        stop(t) {
            let r = this.get(t);
            if (typeof r.elapsed < "u")
                throw new Error(`Watch already stopped for label: ${t}`);
            let n = Date.now() - r.started;
            this.timestamps.set(t, {
                started: r.started,
                elapsed: n
            })
        }
        get(t) {
            let r = this.timestamps.get(t);
            if (typeof r > "u")
                throw new Error(`No timestamp found for label: ${t}`);
            return r
        }
        elapsed(t) {
            let r = this.get(t);
            return r.elapsed || Date.now() - r.started
        }
    }
    ;
    Me.Watch = rt;
    Me.default = rt
}
);
var dn = X(nt => {
    "use strict";
    Object.defineProperty(nt, "__esModule", {
        value: !0
    });
    nt.IWatch = void 0;
    var Ot = class {
    }
    ;
    nt.IWatch = Ot
}
);
var hn = X(Nt => {
    "use strict";
    Object.defineProperty(Nt, "__esModule", {
        value: !0
    });
    var ji = (Pe(),
    Ze(Re));
    ji.__exportStar(dn(), Nt)
}
);
var Tt = X(Se => {
    "use strict";
    Object.defineProperty(Se, "__esModule", {
        value: !0
    });
    var ot = (Pe(),
    Ze(Re));
    ot.__exportStar(fn(), Se);
    ot.__exportStar(ln(), Se);
    ot.__exportStar(hn(), Se);
    ot.__exportStar(Bt(), Se)
}
);
var pn = X(M => {
    "use strict";
    Object.defineProperty(M, "__esModule", {
        value: !0
    });
    M.getLocalStorage = M.getLocalStorageOrThrow = M.getCrypto = M.getCryptoOrThrow = M.getLocation = M.getLocationOrThrow = M.getNavigator = M.getNavigatorOrThrow = M.getDocument = M.getDocumentOrThrow = M.getFromWindowOrThrow = M.getFromWindow = void 0;
    function be(e) {
        let t;
        return typeof window < "u" && typeof window[e] < "u" && (t = window[e]),
        t
    }
    M.getFromWindow = be;
    function Fe(e) {
        let t = be(e);
        if (!t)
            throw new Error(`${e} is not defined in Window`);
        return t
    }
    M.getFromWindowOrThrow = Fe;
    function Ki() {
        return Fe("document")
    }
    M.getDocumentOrThrow = Ki;
    function Hi() {
        return be("document")
    }
    M.getDocument = Hi;
    function Vi() {
        return Fe("navigator")
    }
    M.getNavigatorOrThrow = Vi;
    function qi() {
        return be("navigator")
    }
    M.getNavigator = qi;
    function $i() {
        return Fe("location")
    }
    M.getLocationOrThrow = $i;
    function Yi() {
        return be("location")
    }
    M.getLocation = Yi;
    function Ji() {
        return Fe("crypto")
    }
    M.getCryptoOrThrow = Ji;
    function Gi() {
        return be("crypto")
    }
    M.getCrypto = Gi;
    function Xi() {
        return Fe("localStorage")
    }
    M.getLocalStorageOrThrow = Xi;
    function Zi() {
        return be("localStorage")
    }
    M.getLocalStorage = Zi
}
);
var es = X(it => {
    "use strict";
    Object.defineProperty(it, "__esModule", {
        value: !0
    });
    it.getWindowMetadata = void 0;
    var gn = pn();
    function Qi() {
        let e, t;
        try {
            e = gn.getDocumentOrThrow(),
            t = gn.getLocationOrThrow()
        } catch {
            return null
        }
        function r() {
            let c = e.getElementsByTagName("link")
              , l = [];
            for (let p = 0; p < c.length; p++) {
                let d = c[p]
                  , g = d.getAttribute("rel");
                if (g && g.toLowerCase().indexOf("icon") > -1) {
                    let b = d.getAttribute("href");
                    if (b)
                        if (b.toLowerCase().indexOf("https:") === -1 && b.toLowerCase().indexOf("http:") === -1 && b.indexOf("//") !== 0) {
                            let v = t.protocol + "//" + t.host;
                            if (b.indexOf("/") === 0)
                                v += b;
                            else {
                                let x = t.pathname.split("/");
                                x.pop();
                                let D = x.join("/");
                                v += D + "/" + b
                            }
                            l.push(v)
                        } else if (b.indexOf("//") === 0) {
                            let v = t.protocol + b;
                            l.push(v)
                        } else
                            l.push(b)
                }
            }
            return l
        }
        function n(...c) {
            let l = e.getElementsByTagName("meta");
            for (let p = 0; p < l.length; p++) {
                let d = l[p]
                  , g = ["itemprop", "property", "name"].map(b => d.getAttribute(b)).filter(b => b ? c.includes(b) : !1);
                if (g.length && g) {
                    let b = d.getAttribute("content");
                    if (b)
                        return b
                }
            }
            return ""
        }
        function o() {
            let c = n("name", "og:site_name", "og:title", "twitter:title");
            return c || (c = e.title),
            c
        }
        function i() {
            return n("description", "og:description", "twitter:description", "keywords")
        }
        let a = o()
          , f = i()
          , u = t.origin
          , h = r();
        return {
            description: f,
            url: u,
            icons: h,
            name: a
        }
    }
    it.getWindowMetadata = Qi
}
);
var Yo = X( (Dd, $o) => {
    "use strict";
    $o.exports = function() {
        throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
    }
}
);
var Xr = function(e, t, r) {
    if (r || arguments.length === 2)
        for (var n = 0, o = t.length, i; n < o; n++)
            (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)),
            i[n] = t[n]);
    return e.concat(i || Array.prototype.slice.call(t))
}
  , ui = function() {
    function e(t, r, n) {
        this.name = t,
        this.version = r,
        this.os = n,
        this.type = "browser"
    }
    return e
}();
var ci = function() {
    function e(t) {
        this.version = t,
        this.type = "node",
        this.name = "node",
        this.os = process.platform
    }
    return e
}();
var fi = function() {
    function e(t, r, n, o) {
        this.name = t,
        this.version = r,
        this.os = n,
        this.bot = o,
        this.type = "bot-device"
    }
    return e
}();
var li = function() {
    function e() {
        this.type = "bot",
        this.bot = !0,
        this.name = "bot",
        this.version = null,
        this.os = null
    }
    return e
}();
var di = function() {
    function e() {
        this.type = "react-native",
        this.name = "react-native",
        this.version = null,
        this.os = null
    }
    return e
}();
var hi = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/
  , pi = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/
  , Zr = 3
  , gi = [["aol", /AOLShield\/([0-9\._]+)/], ["edge", /Edge\/([0-9\._]+)/], ["edge-ios", /EdgiOS\/([0-9\._]+)/], ["yandexbrowser", /YaBrowser\/([0-9\._]+)/], ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/], ["samsung", /SamsungBrowser\/([0-9\.]+)/], ["silk", /\bSilk\/([0-9._-]+)\b/], ["miui", /MiuiBrowser\/([0-9\.]+)$/], ["beaker", /BeakerBrowser\/([0-9\.]+)/], ["edge-chromium", /EdgA?\/([0-9\.]+)/], ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/], ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/], ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/], ["fxios", /FxiOS\/([0-9\.]+)/], ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/], ["opera", /Opera\/([0-9\.]+)(?:\s|$)/], ["opera", /OPR\/([0-9\.]+)(:?\s|$)/], ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/], ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/], ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/], ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/], ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ["ie", /MSIE\s(7\.0)/], ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/], ["android", /Android\s([0-9\.]+)/], ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/], ["safari", /Version\/([0-9\._]+).*Safari/], ["facebook", /FB[AS]V\/([0-9\.]+)/], ["instagram", /Instagram\s([0-9\.]+)/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/], ["curl", /^curl\/([0-9\.]+)$/], ["searchbot", hi]]
  , Qr = [["iOS", /iP(hone|od|ad)/], ["Android OS", /Android/], ["BlackBerry OS", /BlackBerry|BB10/], ["Windows Mobile", /IEMobile/], ["Amazon OS", /Kindle/], ["Windows 3.11", /Win16/], ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/], ["Windows 98", /(Windows 98)|(Win98)/], ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/], ["Windows XP", /(Windows NT 5.1)|(Windows XP)/], ["Windows Server 2003", /(Windows NT 5.2)/], ["Windows Vista", /(Windows NT 6.0)/], ["Windows 7", /(Windows NT 6.1)/], ["Windows 8", /(Windows NT 6.2)/], ["Windows 8.1", /(Windows NT 6.3)/], ["Windows 10", /(Windows NT 10.0)/], ["Windows ME", /Windows ME/], ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/], ["Open BSD", /OpenBSD/], ["Sun OS", /SunOS/], ["Chrome OS", /CrOS/], ["Linux", /(Linux)|(X11)/], ["Mac OS", /(Mac_PowerPC)|(Macintosh)/], ["QNX", /QNX/], ["BeOS", /BeOS/], ["OS/2", /OS\/2/]];
function vf(e) {
    return e ? en(e) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new di : typeof navigator < "u" ? en(navigator.userAgent) : mi()
}
function bi(e) {
    return e !== "" && gi.reduce(function(t, r) {
        var n = r[0]
          , o = r[1];
        if (t)
            return t;
        var i = o.exec(e);
        return !!i && [n, i]
    }, !1)
}
function en(e) {
    var t = bi(e);
    if (!t)
        return null;
    var r = t[0]
      , n = t[1];
    if (r === "searchbot")
        return new li;
    var o = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
    o ? o.length < Zr && (o = Xr(Xr([], o, !0), wi(Zr - o.length), !0)) : o = [];
    var i = o.join(".")
      , a = Di(e)
      , f = pi.exec(e);
    return f && f[1] ? new fi(r,i,a,f[1]) : new ui(r,i,a)
}
function Di(e) {
    for (var t = 0, r = Qr.length; t < r; t++) {
        var n = Qr[t]
          , o = n[0]
          , i = n[1]
          , a = i.exec(e);
        if (a)
            return o
    }
    return null
}
function mi() {
    var e = typeof process < "u" && process.version;
    return e ? new ci(process.version.slice(1)) : null
}
function wi(e) {
    for (var t = [], r = 0; r < e; r++)
        t.push("0");
    return t
}
var Un = Xe(Tt());
function ts(e) {
    return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array"
}
function Rn(e, ...t) {
    if (!ts(e))
        throw new Error("Uint8Array expected");
    if (t.length > 0 && !t.includes(e.length))
        throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length)
}
function bn(e, t=!0) {
    if (e.destroyed)
        throw new Error("Hash instance has been destroyed");
    if (t && e.finished)
        throw new Error("Hash#digest() has already been called")
}
function rs(e, t) {
    Rn(e);
    let r = t.outputLen;
    if (e.length < r)
        throw new Error("digestInto() expects output buffer of length at least " + r)
}
var Ce = typeof globalThis == "object" && "crypto"in globalThis ? globalThis.crypto : void 0;
var Ut = e => new DataView(e.buffer,e.byteOffset,e.byteLength);
function ns(e) {
    if (typeof e != "string")
        throw new Error("utf8ToBytes expected string, got " + typeof e);
    return new Uint8Array(new TextEncoder().encode(e))
}
function Pn(e) {
    return typeof e == "string" && (e = ns(e)),
    Rn(e),
    e
}
var jt = class {
    clone() {
        return this._cloneInto()
    }
}
;
function os(e) {
    let t = n => e().update(Pn(n)).digest()
      , r = e();
    return t.outputLen = r.outputLen,
    t.blockLen = r.blockLen,
    t.create = () => e(),
    t
}
function Mn(e=32) {
    if (Ce && typeof Ce.getRandomValues == "function")
        return Ce.getRandomValues(new Uint8Array(e));
    if (Ce && typeof Ce.randomBytes == "function")
        return Ce.randomBytes(e);
    throw new Error("crypto.getRandomValues must be defined")
}
function is(e, t, r, n) {
    if (typeof e.setBigUint64 == "function")
        return e.setBigUint64(t, r, n);
    let o = BigInt(32)
      , i = BigInt(4294967295)
      , a = Number(r >> o & i)
      , f = Number(r & i)
      , u = n ? 4 : 0
      , h = n ? 0 : 4;
    e.setUint32(t + u, a, n),
    e.setUint32(t + h, f, n)
}
var Kt = class extends jt {
    constructor(t, r, n, o) {
        super(),
        this.blockLen = t,
        this.outputLen = r,
        this.padOffset = n,
        this.isLE = o,
        this.finished = !1,
        this.length = 0,
        this.pos = 0,
        this.destroyed = !1,
        this.buffer = new Uint8Array(t),
        this.view = Ut(this.buffer)
    }
    update(t) {
        bn(this);
        let {view: r, buffer: n, blockLen: o} = this;
        t = Pn(t);
        let i = t.length;
        for (let a = 0; a < i; ) {
            let f = Math.min(o - this.pos, i - a);
            if (f === o) {
                let u = Ut(t);
                for (; o <= i - a; a += o)
                    this.process(u, a);
                continue
            }
            n.set(t.subarray(a, a + f), this.pos),
            this.pos += f,
            a += f,
            this.pos === o && (this.process(r, 0),
            this.pos = 0)
        }
        return this.length += t.length,
        this.roundClean(),
        this
    }
    digestInto(t) {
        bn(this),
        rs(t, this),
        this.finished = !0;
        let {buffer: r, view: n, blockLen: o, isLE: i} = this
          , {pos: a} = this;
        r[a++] = 128,
        this.buffer.subarray(a).fill(0),
        this.padOffset > o - a && (this.process(n, 0),
        a = 0);
        for (let c = a; c < o; c++)
            r[c] = 0;
        is(n, o - 8, BigInt(this.length * 8), i),
        this.process(n, 0);
        let f = Ut(t)
          , u = this.outputLen;
        if (u % 4)
            throw new Error("_sha2: outputLen should be aligned to 32bit");
        let h = u / 4
          , s = this.get();
        if (h > s.length)
            throw new Error("_sha2: outputLen bigger than state");
        for (let c = 0; c < h; c++)
            f.setUint32(4 * c, s[c], i)
    }
    digest() {
        let {buffer: t, outputLen: r} = this;
        this.digestInto(t);
        let n = t.slice(0, r);
        return this.destroy(),
        n
    }
    _cloneInto(t) {
        t || (t = new this.constructor),
        t.set(...this.get());
        let {blockLen: r, buffer: n, length: o, finished: i, destroyed: a, pos: f} = this;
        return t.length = o,
        t.pos = f,
        t.finished = i,
        t.destroyed = a,
        o % r && t.buffer.set(n),
        t
    }
}
  , st = BigInt(2 ** 32 - 1)
  , Ht = BigInt(32);
function Ln(e, t=!1) {
    return t ? {
        h: Number(e & st),
        l: Number(e >> Ht & st)
    } : {
        h: Number(e >> Ht & st) | 0,
        l: Number(e & st) | 0
    }
}
function ss(e, t=!1) {
    let r = new Uint32Array(e.length)
      , n = new Uint32Array(e.length);
    for (let o = 0; o < e.length; o++) {
        let {h: i, l: a} = Ln(e[o], t);
        [r[o],n[o]] = [i, a]
    }
    return [r, n]
}
var as = (e, t) => BigInt(e >>> 0) << Ht | BigInt(t >>> 0)
  , us = (e, t, r) => e >>> r
  , cs = (e, t, r) => e << 32 - r | t >>> r
  , fs = (e, t, r) => e >>> r | t << 32 - r
  , ls = (e, t, r) => e << 32 - r | t >>> r
  , ds = (e, t, r) => e << 64 - r | t >>> r - 32
  , hs = (e, t, r) => e >>> r - 32 | t << 64 - r
  , ps = (e, t) => t
  , gs = (e, t) => e
  , bs = (e, t, r) => e << r | t >>> 32 - r
  , Ds = (e, t, r) => t << r | e >>> 32 - r
  , ms = (e, t, r) => t << r - 32 | e >>> 64 - r
  , ws = (e, t, r) => e << r - 32 | t >>> 64 - r;
function ys(e, t, r, n) {
    let o = (t >>> 0) + (n >>> 0);
    return {
        h: e + r + (o / 2 ** 32 | 0) | 0,
        l: o | 0
    }
}
var Es = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0)
  , vs = (e, t, r, n) => t + r + n + (e / 2 ** 32 | 0) | 0
  , xs = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0)
  , Ss = (e, t, r, n, o) => t + r + n + o + (e / 2 ** 32 | 0) | 0
  , Fs = (e, t, r, n, o) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (o >>> 0)
  , Cs = (e, t, r, n, o, i) => t + r + n + o + i + (e / 2 ** 32 | 0) | 0
  , _ = {
    fromBig: Ln,
    split: ss,
    toBig: as,
    shrSH: us,
    shrSL: cs,
    rotrSH: fs,
    rotrSL: ls,
    rotrBH: ds,
    rotrBL: hs,
    rotr32H: ps,
    rotr32L: gs,
    rotlSH: bs,
    rotlSL: Ds,
    rotlBH: ms,
    rotlBL: ws,
    add: ys,
    add3L: Es,
    add3H: vs,
    add4L: xs,
    add4H: Ss,
    add5H: Cs,
    add5L: Fs
}
  , [As,_s] = _.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(e => BigInt(e)))
  , ce = new Uint32Array(80)
  , fe = new Uint32Array(80)
  , Vt = class extends Kt {
    constructor() {
        super(128, 64, 16, !1),
        this.Ah = 1779033703,
        this.Al = -205731576,
        this.Bh = -1150833019,
        this.Bl = -2067093701,
        this.Ch = 1013904242,
        this.Cl = -23791573,
        this.Dh = -1521486534,
        this.Dl = 1595750129,
        this.Eh = 1359893119,
        this.El = -1377402159,
        this.Fh = -1694144372,
        this.Fl = 725511199,
        this.Gh = 528734635,
        this.Gl = -79577749,
        this.Hh = 1541459225,
        this.Hl = 327033209
    }
    get() {
        let {Ah: t, Al: r, Bh: n, Bl: o, Ch: i, Cl: a, Dh: f, Dl: u, Eh: h, El: s, Fh: c, Fl: l, Gh: p, Gl: d, Hh: g, Hl: b} = this;
        return [t, r, n, o, i, a, f, u, h, s, c, l, p, d, g, b]
    }
    set(t, r, n, o, i, a, f, u, h, s, c, l, p, d, g, b) {
        this.Ah = t | 0,
        this.Al = r | 0,
        this.Bh = n | 0,
        this.Bl = o | 0,
        this.Ch = i | 0,
        this.Cl = a | 0,
        this.Dh = f | 0,
        this.Dl = u | 0,
        this.Eh = h | 0,
        this.El = s | 0,
        this.Fh = c | 0,
        this.Fl = l | 0,
        this.Gh = p | 0,
        this.Gl = d | 0,
        this.Hh = g | 0,
        this.Hl = b | 0
    }
    process(t, r) {
        for (let D = 0; D < 16; D++,
        r += 4)
            ce[D] = t.getUint32(r),
            fe[D] = t.getUint32(r += 4);
        for (let D = 16; D < 80; D++) {
            let S = ce[D - 15] | 0
              , I = fe[D - 15] | 0
              , U = _.rotrSH(S, I, 1) ^ _.rotrSH(S, I, 8) ^ _.shrSH(S, I, 7)
              , T = _.rotrSL(S, I, 1) ^ _.rotrSL(S, I, 8) ^ _.shrSL(S, I, 7)
              , B = ce[D - 2] | 0
              , L = fe[D - 2] | 0
              , ye = _.rotrSH(B, L, 19) ^ _.rotrBH(B, L, 61) ^ _.shrSH(B, L, 6)
              , de = _.rotrSL(B, L, 19) ^ _.rotrBL(B, L, 61) ^ _.shrSL(B, L, 6)
              , Ee = _.add4L(T, de, fe[D - 7], fe[D - 16])
              , Te = _.add4H(Ee, U, ye, ce[D - 7], ce[D - 16]);
            ce[D] = Te | 0,
            fe[D] = Ee | 0
        }
        let {Ah: n, Al: o, Bh: i, Bl: a, Ch: f, Cl: u, Dh: h, Dl: s, Eh: c, El: l, Fh: p, Fl: d, Gh: g, Gl: b, Hh: v, Hl: x} = this;
        for (let D = 0; D < 80; D++) {
            let S = _.rotrSH(c, l, 14) ^ _.rotrSH(c, l, 18) ^ _.rotrBH(c, l, 41)
              , I = _.rotrSL(c, l, 14) ^ _.rotrSL(c, l, 18) ^ _.rotrBL(c, l, 41)
              , U = c & p ^ ~c & g
              , T = l & d ^ ~l & b
              , B = _.add5L(x, I, T, _s[D], fe[D])
              , L = _.add5H(B, v, S, U, As[D], ce[D])
              , ye = B | 0
              , de = _.rotrSH(n, o, 28) ^ _.rotrBH(n, o, 34) ^ _.rotrBH(n, o, 39)
              , Ee = _.rotrSL(n, o, 28) ^ _.rotrBL(n, o, 34) ^ _.rotrBL(n, o, 39)
              , Te = n & i ^ n & f ^ i & f
              , xt = o & a ^ o & u ^ a & u;
            v = g | 0,
            x = b | 0,
            g = p | 0,
            b = d | 0,
            p = c | 0,
            d = l | 0,
            {h: c, l} = _.add(h | 0, s | 0, L | 0, ye | 0),
            h = f | 0,
            s = u | 0,
            f = i | 0,
            u = a | 0,
            i = n | 0,
            a = o | 0;
            let F = _.add3L(ye, Ee, xt);
            n = _.add3H(F, L, de, Te),
            o = F | 0
        }
        ({h: n, l: o} = _.add(this.Ah | 0, this.Al | 0, n | 0, o | 0)),
        {h: i, l: a} = _.add(this.Bh | 0, this.Bl | 0, i | 0, a | 0),
        {h: f, l: u} = _.add(this.Ch | 0, this.Cl | 0, f | 0, u | 0),
        {h, l: s} = _.add(this.Dh | 0, this.Dl | 0, h | 0, s | 0),
        {h: c, l} = _.add(this.Eh | 0, this.El | 0, c | 0, l | 0),
        {h: p, l: d} = _.add(this.Fh | 0, this.Fl | 0, p | 0, d | 0),
        {h: g, l: b} = _.add(this.Gh | 0, this.Gl | 0, g | 0, b | 0),
        {h: v, l: x} = _.add(this.Hh | 0, this.Hl | 0, v | 0, x | 0),
        this.set(n, o, i, a, f, u, h, s, c, l, p, d, g, b, v, x)
    }
    roundClean() {
        ce.fill(0),
        fe.fill(0)
    }
    destroy() {
        this.buffer.fill(0),
        this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    }
}
  , Is = os( () => new Vt);
var rr = BigInt(0)
  , zn = BigInt(1)
  , Bs = BigInt(2);
function nr(e) {
    return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array"
}
function or(e) {
    if (!nr(e))
        throw new Error("Uint8Array expected")
}
function Rt(e, t) {
    if (typeof t != "boolean")
        throw new Error(e + " boolean expected, got " + t)
}
var Os = Array.from({
    length: 256
}, (e, t) => t.toString(16).padStart(2, "0"));
function ir(e) {
    or(e);
    let t = "";
    for (let r = 0; r < e.length; r++)
        t += Os[e[r]];
    return t
}
function Wn(e) {
    if (typeof e != "string")
        throw new Error("hex string expected, got " + typeof e);
    return e === "" ? rr : BigInt("0x" + e)
}
var ie = {
    _0: 48,
    _9: 57,
    A: 65,
    F: 70,
    a: 97,
    f: 102
};
function Dn(e) {
    if (e >= ie._0 && e <= ie._9)
        return e - ie._0;
    if (e >= ie.A && e <= ie.F)
        return e - (ie.A - 10);
    if (e >= ie.a && e <= ie.f)
        return e - (ie.a - 10)
}
function kn(e) {
    if (typeof e != "string")
        throw new Error("hex string expected, got " + typeof e);
    let t = e.length
      , r = t / 2;
    if (t % 2)
        throw new Error("hex string expected, got unpadded hex of length " + t);
    let n = new Uint8Array(r);
    for (let o = 0, i = 0; o < r; o++,
    i += 2) {
        let a = Dn(e.charCodeAt(i))
          , f = Dn(e.charCodeAt(i + 1));
        if (a === void 0 || f === void 0) {
            let u = e[i] + e[i + 1];
            throw new Error('hex string expected, got non-hex character "' + u + '" at index ' + i)
        }
        n[o] = a * 16 + f
    }
    return n
}
function Ns(e) {
    return Wn(ir(e))
}
function ct(e) {
    return or(e),
    Wn(ir(Uint8Array.from(e).reverse()))
}
function jn(e, t) {
    return kn(e.toString(16).padStart(t * 2, "0"))
}
function qt(e, t) {
    return jn(e, t).reverse()
}
function se(e, t, r) {
    let n;
    if (typeof t == "string")
        try {
            n = kn(t)
        } catch (i) {
            throw new Error(e + " must be hex string or Uint8Array, cause: " + i)
        }
    else if (nr(t))
        n = Uint8Array.from(t);
    else
        throw new Error(e + " must be hex string or Uint8Array");
    let o = n.length;
    if (typeof r == "number" && o !== r)
        throw new Error(e + " of length " + r + " expected, got " + o);
    return n
}
function mn(...e) {
    let t = 0;
    for (let n = 0; n < e.length; n++) {
        let o = e[n];
        or(o),
        t += o.length
    }
    let r = new Uint8Array(t);
    for (let n = 0, o = 0; n < e.length; n++) {
        let i = e[n];
        r.set(i, o),
        o += i.length
    }
    return r
}
var Pt = e => typeof e == "bigint" && rr <= e;
function Ts(e, t, r) {
    return Pt(e) && Pt(t) && Pt(r) && t <= e && e < r
}
function Le(e, t, r, n) {
    if (!Ts(t, r, n))
        throw new Error("expected valid " + e + ": " + r + " <= n < " + n + ", got " + t)
}
function Us(e) {
    let t;
    for (t = 0; e > rr; e >>= zn,
    t += 1)
        ;
    return t
}
var Rs = e => (Bs << BigInt(e - 1)) - zn
  , Ps = {
    bigint: e => typeof e == "bigint",
    function: e => typeof e == "function",
    boolean: e => typeof e == "boolean",
    string: e => typeof e == "string",
    stringOrUint8Array: e => typeof e == "string" || nr(e),
    isSafeInteger: e => Number.isSafeInteger(e),
    array: e => Array.isArray(e),
    field: (e, t) => t.Fp.isValid(e),
    hash: e => typeof e == "function" && Number.isSafeInteger(e.outputLen)
};
function sr(e, t, r={}) {
    let n = (o, i, a) => {
        let f = Ps[i];
        if (typeof f != "function")
            throw new Error("invalid validator function");
        let u = e[o];
        if (!(a && u === void 0) && !f(u, e))
            throw new Error("param " + String(o) + " is invalid. Expected " + i + ", got " + u)
    }
    ;
    for (let[o,i] of Object.entries(t))
        n(o, i, !1);
    for (let[o,i] of Object.entries(r))
        n(o, i, !0);
    return e
}
function wn(e) {
    let t = new WeakMap;
    return (r, ...n) => {
        let o = t.get(r);
        if (o !== void 0)
            return o;
        let i = e(r, ...n);
        return t.set(r, i),
        i
    }
}
var V = BigInt(0)
  , j = BigInt(1)
  , De = BigInt(2)
  , Ms = BigInt(3)
  , $t = BigInt(4)
  , yn = BigInt(5)
  , En = BigInt(8);
function K(e, t) {
    let r = e % t;
    return r >= V ? r : t + r
}
function Ls(e, t, r) {
    if (t < V)
        throw new Error("invalid exponent, negatives unsupported");
    if (r <= V)
        throw new Error("invalid modulus");
    if (r === j)
        return V;
    let n = j;
    for (; t > V; )
        t & j && (n = n * e % r),
        e = e * e % r,
        t >>= j;
    return n
}
function te(e, t, r) {
    let n = e;
    for (; t-- > V; )
        n *= n,
        n %= r;
    return n
}
function vn(e, t) {
    if (e === V)
        throw new Error("invert: expected non-zero number");
    if (t <= V)
        throw new Error("invert: expected positive modulus, got " + t);
    let r = K(e, t)
      , n = t
      , o = V
      , i = j;
    for (; r !== V; ) {
        let a = n / r
          , f = n % r
          , u = o - i * a;
        n = r,
        r = f,
        o = i,
        i = u
    }
    if (n !== j)
        throw new Error("invert: does not exist");
    return K(o, t)
}
function zs(e) {
    let t = (e - j) / De, r, n, o;
    for (r = e - j,
    n = 0; r % De === V; r /= De,
    n++)
        ;
    for (o = De; o < e && Ls(o, t, e) !== e - j; o++)
        if (o > 1e3)
            throw new Error("Cannot find square root: likely non-prime P");
    if (n === 1) {
        let a = (e + j) / $t;
        return function(f, u) {
            let h = f.pow(u, a);
            if (!f.eql(f.sqr(h), u))
                throw new Error("Cannot find square root");
            return h
        }
    }
    let i = (r + j) / De;
    return function(a, f) {
        if (a.pow(f, t) === a.neg(a.ONE))
            throw new Error("Cannot find square root");
        let u = n
          , h = a.pow(a.mul(a.ONE, o), r)
          , s = a.pow(f, i)
          , c = a.pow(f, r);
        for (; !a.eql(c, a.ONE); ) {
            if (a.eql(c, a.ZERO))
                return a.ZERO;
            let l = 1;
            for (let d = a.sqr(c); l < u && !a.eql(d, a.ONE); l++)
                d = a.sqr(d);
            let p = a.pow(h, j << BigInt(u - l - 1));
            h = a.sqr(p),
            s = a.mul(s, p),
            c = a.mul(c, h),
            u = l
        }
        return s
    }
}
function Ws(e) {
    if (e % $t === Ms) {
        let t = (e + j) / $t;
        return function(r, n) {
            let o = r.pow(n, t);
            if (!r.eql(r.sqr(o), n))
                throw new Error("Cannot find square root");
            return o
        }
    }
    if (e % En === yn) {
        let t = (e - yn) / En;
        return function(r, n) {
            let o = r.mul(n, De)
              , i = r.pow(o, t)
              , a = r.mul(n, i)
              , f = r.mul(r.mul(a, De), i)
              , u = r.mul(a, r.sub(f, r.ONE));
            if (!r.eql(r.sqr(u), n))
                throw new Error("Cannot find square root");
            return u
        }
    }
    return zs(e)
}
var ks = (e, t) => (K(e, t) & j) === j
  , js = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function Ks(e) {
    let t = {
        ORDER: "bigint",
        MASK: "bigint",
        BYTES: "isSafeInteger",
        BITS: "isSafeInteger"
    }
      , r = js.reduce( (n, o) => (n[o] = "function",
    n), t);
    return sr(e, r)
}
function Hs(e, t, r) {
    if (r < V)
        throw new Error("invalid exponent, negatives unsupported");
    if (r === V)
        return e.ONE;
    if (r === j)
        return t;
    let n = e.ONE
      , o = t;
    for (; r > V; )
        r & j && (n = e.mul(n, o)),
        o = e.sqr(o),
        r >>= j;
    return n
}
function Vs(e, t) {
    let r = new Array(t.length)
      , n = t.reduce( (i, a, f) => e.is0(a) ? i : (r[f] = i,
    e.mul(i, a)), e.ONE)
      , o = e.inv(n);
    return t.reduceRight( (i, a, f) => e.is0(a) ? i : (r[f] = e.mul(i, r[f]),
    e.mul(i, a)), o),
    r
}
function Kn(e, t) {
    let r = t !== void 0 ? t : e.toString(2).length
      , n = Math.ceil(r / 8);
    return {
        nBitLength: r,
        nByteLength: n
    }
}
function Hn(e, t, r=!1, n={}) {
    if (e <= V)
        throw new Error("invalid field: expected ORDER > 0, got " + e);
    let {nBitLength: o, nByteLength: i} = Kn(e, t);
    if (i > 2048)
        throw new Error("invalid field: expected ORDER of <= 2048 bytes");
    let a, f = Object.freeze({
        ORDER: e,
        isLE: r,
        BITS: o,
        BYTES: i,
        MASK: Rs(o),
        ZERO: V,
        ONE: j,
        create: u => K(u, e),
        isValid: u => {
            if (typeof u != "bigint")
                throw new Error("invalid field element: expected bigint, got " + typeof u);
            return V <= u && u < e
        }
        ,
        is0: u => u === V,
        isOdd: u => (u & j) === j,
        neg: u => K(-u, e),
        eql: (u, h) => u === h,
        sqr: u => K(u * u, e),
        add: (u, h) => K(u + h, e),
        sub: (u, h) => K(u - h, e),
        mul: (u, h) => K(u * h, e),
        pow: (u, h) => Hs(f, u, h),
        div: (u, h) => K(u * vn(h, e), e),
        sqrN: u => u * u,
        addN: (u, h) => u + h,
        subN: (u, h) => u - h,
        mulN: (u, h) => u * h,
        inv: u => vn(u, e),
        sqrt: n.sqrt || (u => (a || (a = Ws(e)),
        a(f, u))),
        invertBatch: u => Vs(f, u),
        cmov: (u, h, s) => s ? h : u,
        toBytes: u => r ? qt(u, i) : jn(u, i),
        fromBytes: u => {
            if (u.length !== i)
                throw new Error("Field.fromBytes: expected " + i + " bytes, got " + u.length);
            return r ? ct(u) : Ns(u)
        }
    });
    return Object.freeze(f)
}
var xn = BigInt(0)
  , at = BigInt(1);
function Mt(e, t) {
    let r = t.negate();
    return e ? r : t
}
function Vn(e, t) {
    if (!Number.isSafeInteger(e) || e <= 0 || e > t)
        throw new Error("invalid window size, expected [1.." + t + "], got W=" + e)
}
function Lt(e, t) {
    Vn(e, t);
    let r = Math.ceil(t / e) + 1
      , n = 2 ** (e - 1);
    return {
        windows: r,
        windowSize: n
    }
}
function qs(e, t) {
    if (!Array.isArray(e))
        throw new Error("array expected");
    e.forEach( (r, n) => {
        if (!(r instanceof t))
            throw new Error("invalid point at index " + n)
    }
    )
}
function $s(e, t) {
    if (!Array.isArray(e))
        throw new Error("array of scalars expected");
    e.forEach( (r, n) => {
        if (!t.isValid(r))
            throw new Error("invalid scalar at index " + n)
    }
    )
}
var zt = new WeakMap
  , qn = new WeakMap;
function Wt(e) {
    return qn.get(e) || 1
}
function Ys(e, t) {
    return {
        constTimeNegate: Mt,
        hasPrecomputes(r) {
            return Wt(r) !== 1
        },
        unsafeLadder(r, n, o=e.ZERO) {
            let i = r;
            for (; n > xn; )
                n & at && (o = o.add(i)),
                i = i.double(),
                n >>= at;
            return o
        },
        precomputeWindow(r, n) {
            let {windows: o, windowSize: i} = Lt(n, t)
              , a = []
              , f = r
              , u = f;
            for (let h = 0; h < o; h++) {
                u = f,
                a.push(u);
                for (let s = 1; s < i; s++)
                    u = u.add(f),
                    a.push(u);
                f = u.double()
            }
            return a
        },
        wNAF(r, n, o) {
            let {windows: i, windowSize: a} = Lt(r, t)
              , f = e.ZERO
              , u = e.BASE
              , h = BigInt(2 ** r - 1)
              , s = 2 ** r
              , c = BigInt(r);
            for (let l = 0; l < i; l++) {
                let p = l * a
                  , d = Number(o & h);
                o >>= c,
                d > a && (d -= s,
                o += at);
                let g = p
                  , b = p + Math.abs(d) - 1
                  , v = l % 2 !== 0
                  , x = d < 0;
                d === 0 ? u = u.add(Mt(v, n[g])) : f = f.add(Mt(x, n[b]))
            }
            return {
                p: f,
                f: u
            }
        },
        wNAFUnsafe(r, n, o, i=e.ZERO) {
            let {windows: a, windowSize: f} = Lt(r, t)
              , u = BigInt(2 ** r - 1)
              , h = 2 ** r
              , s = BigInt(r);
            for (let c = 0; c < a; c++) {
                let l = c * f;
                if (o === xn)
                    break;
                let p = Number(o & u);
                if (o >>= s,
                p > f && (p -= h,
                o += at),
                p === 0)
                    continue;
                let d = n[l + Math.abs(p) - 1];
                p < 0 && (d = d.negate()),
                i = i.add(d)
            }
            return i
        },
        getPrecomputes(r, n, o) {
            let i = zt.get(n);
            return i || (i = this.precomputeWindow(n, r),
            r !== 1 && zt.set(n, o(i))),
            i
        },
        wNAFCached(r, n, o) {
            let i = Wt(r);
            return this.wNAF(i, this.getPrecomputes(i, r, o), n)
        },
        wNAFCachedUnsafe(r, n, o, i) {
            let a = Wt(r);
            return a === 1 ? this.unsafeLadder(r, n, i) : this.wNAFUnsafe(a, this.getPrecomputes(a, r, o), n, i)
        },
        setWindowSize(r, n) {
            Vn(n, t),
            qn.set(r, n),
            zt.delete(r)
        }
    }
}
function Js(e, t, r, n) {
    if (qs(r, e),
    $s(n, t),
    r.length !== n.length)
        throw new Error("arrays of points and scalars must have equal length");
    let o = e.ZERO
      , i = Us(BigInt(r.length))
      , a = i > 12 ? i - 3 : i > 4 ? i - 2 : i ? 2 : 1
      , f = (1 << a) - 1
      , u = new Array(f + 1).fill(o)
      , h = Math.floor((t.BITS - 1) / a) * a
      , s = o;
    for (let c = h; c >= 0; c -= a) {
        u.fill(o);
        for (let p = 0; p < n.length; p++) {
            let d = n[p]
              , g = Number(d >> BigInt(c) & BigInt(f));
            u[g] = u[g].add(r[p])
        }
        let l = o;
        for (let p = u.length - 1, d = o; p > 0; p--)
            d = d.add(u[p]),
            l = l.add(d);
        if (s = s.add(l),
        c !== 0)
            for (let p = 0; p < a; p++)
                s = s.double()
    }
    return s
}
function Gs(e) {
    return Ks(e.Fp),
    sr(e, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
    }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
    }),
    Object.freeze(Ge(A(A({}, Kn(e.n, e.nBitLength)), e), {
        p: e.Fp.ORDER
    }))
}
var ee = BigInt(0)
  , G = BigInt(1)
  , ut = BigInt(2)
  , Xs = BigInt(8)
  , Zs = {
    zip215: !0
};
function Qs(e) {
    let t = Gs(e);
    return sr(e, {
        hash: "function",
        a: "bigint",
        d: "bigint",
        randomBytes: "function"
    }, {
        adjustScalarBytes: "function",
        domain: "function",
        uvRatio: "function",
        mapToCurve: "function"
    }),
    Object.freeze(A({}, t))
}
function ea(e) {
    let t = Qs(e)
      , {Fp: r, n, prehash: o, hash: i, randomBytes: a, nByteLength: f, h: u} = t
      , h = ut << BigInt(f * 8) - G
      , s = r.create
      , c = Hn(t.n, t.nBitLength)
      , l = t.uvRatio || ( (F, m) => {
        try {
            return {
                isValid: !0,
                value: r.sqrt(F * r.inv(m))
            }
        } catch {
            return {
                isValid: !1,
                value: ee
            }
        }
    }
    )
      , p = t.adjustScalarBytes || (F => F)
      , d = t.domain || ( (F, m, E) => {
        if (Rt("phflag", E),
        m.length || E)
            throw new Error("Contexts/pre-hash are not supported");
        return F
    }
    );
    function g(F, m) {
        Le("coordinate " + F, m, ee, h)
    }
    function b(F) {
        if (!(F instanceof D))
            throw new Error("ExtendedPoint expected")
    }
    let v = wn( (F, m) => {
        let {ex: E, ey: C, ez: O} = F
          , N = F.is0();
        m == null && (m = N ? Xs : r.inv(O));
        let R = s(E * m)
          , z = s(C * m)
          , P = s(O * m);
        if (N)
            return {
                x: ee,
                y: G
            };
        if (P !== G)
            throw new Error("invZ was invalid");
        return {
            x: R,
            y: z
        }
    }
    )
      , x = wn(F => {
        let {a: m, d: E} = t;
        if (F.is0())
            throw new Error("bad point: ZERO");
        let {ex: C, ey: O, ez: N, et: R} = F
          , z = s(C * C)
          , P = s(O * O)
          , W = s(N * N)
          , q = s(W * W)
          , J = s(z * m)
          , ne = s(W * s(J + P))
          , oe = s(q + s(E * s(z * P)));
        if (ne !== oe)
            throw new Error("bad point: equation left != right (1)");
        let Q = s(C * O)
          , ue = s(N * R);
        if (Q !== ue)
            throw new Error("bad point: equation left != right (2)");
        return !0
    }
    );
    class D {
        constructor(m, E, C, O) {
            this.ex = m,
            this.ey = E,
            this.ez = C,
            this.et = O,
            g("x", m),
            g("y", E),
            g("z", C),
            g("t", O),
            Object.freeze(this)
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static fromAffine(m) {
            if (m instanceof D)
                throw new Error("extended point not allowed");
            let {x: E, y: C} = m || {};
            return g("x", E),
            g("y", C),
            new D(E,C,G,s(E * C))
        }
        static normalizeZ(m) {
            let E = r.invertBatch(m.map(C => C.ez));
            return m.map( (C, O) => C.toAffine(E[O])).map(D.fromAffine)
        }
        static msm(m, E) {
            return Js(D, c, m, E)
        }
        _setWindowSize(m) {
            U.setWindowSize(this, m)
        }
        assertValidity() {
            x(this)
        }
        equals(m) {
            b(m);
            let {ex: E, ey: C, ez: O} = this
              , {ex: N, ey: R, ez: z} = m
              , P = s(E * z)
              , W = s(N * O)
              , q = s(C * z)
              , J = s(R * O);
            return P === W && q === J
        }
        is0() {
            return this.equals(D.ZERO)
        }
        negate() {
            return new D(s(-this.ex),this.ey,this.ez,s(-this.et))
        }
        double() {
            let {a: m} = t
              , {ex: E, ey: C, ez: O} = this
              , N = s(E * E)
              , R = s(C * C)
              , z = s(ut * s(O * O))
              , P = s(m * N)
              , W = E + C
              , q = s(s(W * W) - N - R)
              , J = P + R
              , ne = J - z
              , oe = P - R
              , Q = s(q * ne)
              , ue = s(J * oe)
              , he = s(q * oe)
              , Je = s(ne * J);
            return new D(Q,ue,Je,he)
        }
        add(m) {
            b(m);
            let {a: E, d: C} = t
              , {ex: O, ey: N, ez: R, et: z} = this
              , {ex: P, ey: W, ez: q, et: J} = m;
            if (E === BigInt(-1)) {
                let Wr = s((N - O) * (W + P))
                  , kr = s((N + O) * (W - P))
                  , St = s(kr - Wr);
                if (St === ee)
                    return this.double();
                let jr = s(R * ut * J)
                  , Kr = s(z * ut * q)
                  , Hr = Kr + jr
                  , Vr = kr + Wr
                  , qr = Kr - jr
                  , ni = s(Hr * St)
                  , oi = s(Vr * qr)
                  , ii = s(Hr * qr)
                  , si = s(St * Vr);
                return new D(ni,oi,si,ii)
            }
            let ne = s(O * P)
              , oe = s(N * W)
              , Q = s(z * C * J)
              , ue = s(R * q)
              , he = s((O + N) * (P + W) - ne - oe)
              , Je = ue - Q
              , Lr = ue + Q
              , zr = s(oe - E * ne)
              , Qo = s(he * Je)
              , ei = s(Lr * zr)
              , ti = s(he * zr)
              , ri = s(Je * Lr);
            return new D(Qo,ei,ri,ti)
        }
        subtract(m) {
            return this.add(m.negate())
        }
        wNAF(m) {
            return U.wNAFCached(this, m, D.normalizeZ)
        }
        multiply(m) {
            let E = m;
            Le("scalar", E, G, n);
            let {p: C, f: O} = this.wNAF(E);
            return D.normalizeZ([C, O])[0]
        }
        multiplyUnsafe(m, E=D.ZERO) {
            let C = m;
            return Le("scalar", C, ee, n),
            C === ee ? I : this.is0() || C === G ? this : U.wNAFCachedUnsafe(this, C, D.normalizeZ, E)
        }
        isSmallOrder() {
            return this.multiplyUnsafe(u).is0()
        }
        isTorsionFree() {
            return U.unsafeLadder(this, n).is0()
        }
        toAffine(m) {
            return v(this, m)
        }
        clearCofactor() {
            let {h: m} = t;
            return m === G ? this : this.multiplyUnsafe(m)
        }
        static fromHex(m, E=!1) {
            let {d: C, a: O} = t
              , N = r.BYTES;
            m = se("pointHex", m, N),
            Rt("zip215", E);
            let R = m.slice()
              , z = m[N - 1];
            R[N - 1] = z & -129;
            let P = ct(R)
              , W = E ? h : r.ORDER;
            Le("pointHex.y", P, ee, W);
            let q = s(P * P)
              , J = s(q - G)
              , ne = s(C * q - O)
              , {isValid: oe, value: Q} = l(J, ne);
            if (!oe)
                throw new Error("Point.fromHex: invalid y coordinate");
            let ue = (Q & G) === G
              , he = (z & 128) !== 0;
            if (!E && Q === ee && he)
                throw new Error("Point.fromHex: x=0 and x_0=1");
            return he !== ue && (Q = s(-Q)),
            D.fromAffine({
                x: Q,
                y: P
            })
        }
        static fromPrivateKey(m) {
            return L(m).point
        }
        toRawBytes() {
            let {x: m, y: E} = this.toAffine()
              , C = qt(E, r.BYTES);
            return C[C.length - 1] |= m & G ? 128 : 0,
            C
        }
        toHex() {
            return ir(this.toRawBytes())
        }
    }
    D.BASE = new D(t.Gx,t.Gy,G,s(t.Gx * t.Gy)),
    D.ZERO = new D(ee,G,G,ee);
    let {BASE: S, ZERO: I} = D
      , U = Ys(D, f * 8);
    function T(F) {
        return K(F, n)
    }
    function B(F) {
        return T(ct(F))
    }
    function L(F) {
        let m = r.BYTES;
        F = se("private key", F, m);
        let E = se("hashed private key", i(F), 2 * m)
          , C = p(E.slice(0, m))
          , O = E.slice(m, 2 * m)
          , N = B(C)
          , R = S.multiply(N)
          , z = R.toRawBytes();
        return {
            head: C,
            prefix: O,
            scalar: N,
            point: R,
            pointBytes: z
        }
    }
    function ye(F) {
        return L(F).pointBytes
    }
    function de(F=new Uint8Array, ...m) {
        let E = mn(...m);
        return B(i(d(E, se("context", F), !!o)))
    }
    function Ee(F, m, E={}) {
        F = se("message", F),
        o && (F = o(F));
        let {prefix: C, scalar: O, pointBytes: N} = L(m)
          , R = de(E.context, C, F)
          , z = S.multiply(R).toRawBytes()
          , P = de(E.context, z, N, F)
          , W = T(R + P * O);
        Le("signature.s", W, ee, n);
        let q = mn(z, qt(W, r.BYTES));
        return se("result", q, r.BYTES * 2)
    }
    let Te = Zs;
    function xt(F, m, E, C=Te) {
        let {context: O, zip215: N} = C
          , R = r.BYTES;
        F = se("signature", F, 2 * R),
        m = se("message", m),
        E = se("publicKey", E, R),
        N !== void 0 && Rt("zip215", N),
        o && (m = o(m));
        let z = ct(F.slice(R, 2 * R)), P, W, q;
        try {
            P = D.fromHex(E, N),
            W = D.fromHex(F.slice(0, R), N),
            q = S.multiplyUnsafe(z)
        } catch {
            return !1
        }
        if (!N && P.isSmallOrder())
            return !1;
        let J = de(O, W.toRawBytes(), P.toRawBytes(), m);
        return W.add(P.multiplyUnsafe(J)).subtract(q).clearCofactor().equals(D.ZERO)
    }
    return S._setWindowSize(8),
    {
        CURVE: t,
        getPublicKey: ye,
        sign: Ee,
        verify: xt,
        ExtendedPoint: D,
        utils: {
            getExtendedPublicKey: L,
            randomPrivateKey: () => a(r.BYTES),
            precompute(F=8, m=D.BASE) {
                return m._setWindowSize(F),
                m.multiply(BigInt(3)),
                m
            }
        }
    }
}
BigInt(0),
BigInt(1);
var ar = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949")
  , Sn = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
var ta = BigInt(1)
  , Fn = BigInt(2);
BigInt(3);
var ra = BigInt(5)
  , na = BigInt(8);
function oa(e) {
    let t = BigInt(10)
      , r = BigInt(20)
      , n = BigInt(40)
      , o = BigInt(80)
      , i = ar
      , a = e * e % i * e % i
      , f = te(a, Fn, i) * a % i
      , u = te(f, ta, i) * e % i
      , h = te(u, ra, i) * u % i
      , s = te(h, t, i) * h % i
      , c = te(s, r, i) * s % i
      , l = te(c, n, i) * c % i
      , p = te(l, o, i) * l % i
      , d = te(p, o, i) * l % i
      , g = te(d, t, i) * h % i;
    return {
        pow_p_5_8: te(g, Fn, i) * e % i,
        b2: a
    }
}
function ia(e) {
    return e[0] &= 248,
    e[31] &= 127,
    e[31] |= 64,
    e
}
function sa(e, t) {
    let r = ar
      , n = K(t * t * t, r)
      , o = K(n * n * t, r)
      , i = oa(e * o).pow_p_5_8
      , a = K(e * n * i, r)
      , f = K(t * a * a, r)
      , u = a
      , h = K(a * Sn, r)
      , s = f === e
      , c = f === K(-e, r)
      , l = f === K(-e * Sn, r);
    return s && (a = u),
    (c || l) && (a = h),
    ks(a, r) && (a = K(-a, r)),
    {
        isValid: s || c,
        value: a
    }
}
var aa = Hn(ar, void 0, !0)
  , ua = {
    a: BigInt(-1),
    d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
    Fp: aa,
    n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
    h: na,
    Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
    Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
    hash: Is,
    randomBytes: Mn,
    adjustScalarBytes: ia,
    uvRatio: sa
}
  , $n = ea(ua)
  , ca = "EdDSA"
  , fa = "JWT"
  , ft = "."
  , dt = "base64url"
  , Yn = "utf8"
  , Jn = "utf8"
  , la = ":"
  , da = "did"
  , ha = "key"
  , Cn = "base58btc"
  , pa = "z"
  , ga = "K36";
var ba = 32;
function ur(e) {
    return globalThis.Buffer != null ? new Uint8Array(e.buffer,e.byteOffset,e.byteLength) : e
}
function Gn(e=0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? ur(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
}
function Xn(e, t) {
    t || (t = e.reduce( (o, i) => o + i.length, 0));
    let r = Gn(t)
      , n = 0;
    for (let o of e)
        r.set(o, n),
        n += o.length;
    return ur(r)
}
function Da(e, t) {
    if (e.length >= 255)
        throw new TypeError("Alphabet too long");
    for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
        r[n] = 255;
    for (var o = 0; o < e.length; o++) {
        var i = e.charAt(o)
          , a = i.charCodeAt(0);
        if (r[a] !== 255)
            throw new TypeError(i + " is ambiguous");
        r[a] = o
    }
    var f = e.length
      , u = e.charAt(0)
      , h = Math.log(f) / Math.log(256)
      , s = Math.log(256) / Math.log(f);
    function c(d) {
        if (d instanceof Uint8Array || (ArrayBuffer.isView(d) ? d = new Uint8Array(d.buffer,d.byteOffset,d.byteLength) : Array.isArray(d) && (d = Uint8Array.from(d))),
        !(d instanceof Uint8Array))
            throw new TypeError("Expected Uint8Array");
        if (d.length === 0)
            return "";
        for (var g = 0, b = 0, v = 0, x = d.length; v !== x && d[v] === 0; )
            v++,
            g++;
        for (var D = (x - v) * s + 1 >>> 0, S = new Uint8Array(D); v !== x; ) {
            for (var I = d[v], U = 0, T = D - 1; (I !== 0 || U < b) && T !== -1; T--,
            U++)
                I += 256 * S[T] >>> 0,
                S[T] = I % f >>> 0,
                I = I / f >>> 0;
            if (I !== 0)
                throw new Error("Non-zero carry");
            b = U,
            v++
        }
        for (var B = D - b; B !== D && S[B] === 0; )
            B++;
        for (var L = u.repeat(g); B < D; ++B)
            L += e.charAt(S[B]);
        return L
    }
    function l(d) {
        if (typeof d != "string")
            throw new TypeError("Expected String");
        if (d.length === 0)
            return new Uint8Array;
        var g = 0;
        if (d[g] !== " ") {
            for (var b = 0, v = 0; d[g] === u; )
                b++,
                g++;
            for (var x = (d.length - g) * h + 1 >>> 0, D = new Uint8Array(x); d[g]; ) {
                var S = r[d.charCodeAt(g)];
                if (S === 255)
                    return;
                for (var I = 0, U = x - 1; (S !== 0 || I < v) && U !== -1; U--,
                I++)
                    S += f * D[U] >>> 0,
                    D[U] = S % 256 >>> 0,
                    S = S / 256 >>> 0;
                if (S !== 0)
                    throw new Error("Non-zero carry");
                v = I,
                g++
            }
            if (d[g] !== " ") {
                for (var T = x - v; T !== x && D[T] === 0; )
                    T++;
                for (var B = new Uint8Array(b + (x - T)), L = b; T !== x; )
                    B[L++] = D[T++];
                return B
            }
        }
    }
    function p(d) {
        var g = l(d);
        if (g)
            return g;
        throw new Error(`Non-${t} character`)
    }
    return {
        encode: c,
        decodeUnsafe: l,
        decode: p
    }
}
var ma = Da
  , wa = ma
  , Zn = e => {
    if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
        return e;
    if (e instanceof ArrayBuffer)
        return new Uint8Array(e);
    if (ArrayBuffer.isView(e))
        return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);
    throw new Error("Unknown type, must be binary type")
}
  , ya = e => new TextEncoder().encode(e)
  , Ea = e => new TextDecoder().decode(e)
  , Yt = class {
    constructor(t, r, n) {
        this.name = t,
        this.prefix = r,
        this.baseEncode = n
    }
    encode(t) {
        if (t instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(t)}`;
        throw Error("Unknown type, must be binary type")
    }
}
  , Jt = class {
    constructor(t, r, n) {
        if (this.name = t,
        this.prefix = r,
        r.codePointAt(0) === void 0)
            throw new Error("Invalid prefix character");
        this.prefixCodePoint = r.codePointAt(0),
        this.baseDecode = n
    }
    decode(t) {
        if (typeof t == "string") {
            if (t.codePointAt(0) !== this.prefixCodePoint)
                throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(t.slice(this.prefix.length))
        } else
            throw Error("Can only multibase decode strings")
    }
    or(t) {
        return Qn(this, t)
    }
}
  , Gt = class {
    constructor(t) {
        this.decoders = t
    }
    or(t) {
        return Qn(this, t)
    }
    decode(t) {
        let r = t[0]
          , n = this.decoders[r];
        if (n)
            return n.decode(t);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
}
  , Qn = (e, t) => new Gt(A(A({}, e.decoders || {
    [e.prefix]: e
}), t.decoders || {
    [t.prefix]: t
}))
  , Xt = class {
    constructor(t, r, n, o) {
        this.name = t,
        this.prefix = r,
        this.baseEncode = n,
        this.baseDecode = o,
        this.encoder = new Yt(t,r,n),
        this.decoder = new Jt(t,r,o)
    }
    encode(t) {
        return this.encoder.encode(t)
    }
    decode(t) {
        return this.decoder.decode(t)
    }
}
  , ht = ({name: e, prefix: t, encode: r, decode: n}) => new Xt(e,t,r,n)
  , ze = ({prefix: e, name: t, alphabet: r}) => {
    let {encode: n, decode: o} = wa(r, t);
    return ht({
        prefix: e,
        name: t,
        encode: n,
        decode: i => Zn(o(i))
    })
}
  , va = (e, t, r, n) => {
    let o = {};
    for (let s = 0; s < t.length; ++s)
        o[t[s]] = s;
    let i = e.length;
    for (; e[i - 1] === "="; )
        --i;
    let a = new Uint8Array(i * r / 8 | 0)
      , f = 0
      , u = 0
      , h = 0;
    for (let s = 0; s < i; ++s) {
        let c = o[e[s]];
        if (c === void 0)
            throw new SyntaxError(`Non-${n} character`);
        u = u << r | c,
        f += r,
        f >= 8 && (f -= 8,
        a[h++] = 255 & u >> f)
    }
    if (f >= r || 255 & u << 8 - f)
        throw new SyntaxError("Unexpected end of data");
    return a
}
  , xa = (e, t, r) => {
    let n = t[t.length - 1] === "="
      , o = (1 << r) - 1
      , i = ""
      , a = 0
      , f = 0;
    for (let u = 0; u < e.length; ++u)
        for (f = f << 8 | e[u],
        a += 8; a > r; )
            a -= r,
            i += t[o & f >> a];
    if (a && (i += t[o & f << r - a]),
    n)
        for (; i.length * r & 7; )
            i += "=";
    return i
}
  , $ = ({name: e, prefix: t, bitsPerChar: r, alphabet: n}) => ht({
    prefix: t,
    name: e,
    encode(o) {
        return xa(o, n, r)
    },
    decode(o) {
        return va(o, n, r, e)
    }
})
  , Sa = ht({
    prefix: "\0",
    name: "identity",
    encode: e => Ea(e),
    decode: e => ya(e)
})
  , Fa = Object.freeze({
    __proto__: null,
    identity: Sa
})
  , Ca = $({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
})
  , Aa = Object.freeze({
    __proto__: null,
    base2: Ca
})
  , _a = $({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
})
  , Ia = Object.freeze({
    __proto__: null,
    base8: _a
})
  , Ba = ze({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
})
  , Oa = Object.freeze({
    __proto__: null,
    base10: Ba
})
  , Na = $({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
})
  , Ta = $({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
})
  , Ua = Object.freeze({
    __proto__: null,
    base16: Na,
    base16upper: Ta
})
  , Ra = $({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
})
  , Pa = $({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
})
  , Ma = $({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
})
  , La = $({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
})
  , za = $({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
})
  , Wa = $({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
})
  , ka = $({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
})
  , ja = $({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
})
  , Ka = $({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
})
  , Ha = Object.freeze({
    __proto__: null,
    base32: Ra,
    base32upper: Pa,
    base32pad: Ma,
    base32padupper: La,
    base32hex: za,
    base32hexupper: Wa,
    base32hexpad: ka,
    base32hexpadupper: ja,
    base32z: Ka
})
  , Va = ze({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
})
  , qa = ze({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
})
  , $a = Object.freeze({
    __proto__: null,
    base36: Va,
    base36upper: qa
})
  , Ya = ze({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
})
  , Ja = ze({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
})
  , Ga = Object.freeze({
    __proto__: null,
    base58btc: Ya,
    base58flickr: Ja
})
  , Xa = $({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
})
  , Za = $({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
})
  , Qa = $({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
})
  , eu = $({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
})
  , tu = Object.freeze({
    __proto__: null,
    base64: Xa,
    base64pad: Za,
    base64url: Qa,
    base64urlpad: eu
})
  , eo = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}")
  , ru = eo.reduce( (e, t, r) => (e[r] = t,
e), [])
  , nu = eo.reduce( (e, t, r) => (e[t.codePointAt(0)] = r,
e), []);
function ou(e) {
    return e.reduce( (t, r) => (t += ru[r],
    t), "")
}
function iu(e) {
    let t = [];
    for (let r of e) {
        let n = nu[r.codePointAt(0)];
        if (n === void 0)
            throw new Error(`Non-base256emoji character: ${r}`);
        t.push(n)
    }
    return new Uint8Array(t)
}
var su = ht({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: ou,
    decode: iu
})
  , au = Object.freeze({
    __proto__: null,
    base256emoji: su
})
  , uu = to
  , An = 128
  , cu = 127
  , fu = ~cu
  , lu = Math.pow(2, 31);
function to(e, t, r) {
    t = t || [],
    r = r || 0;
    for (var n = r; e >= lu; )
        t[r++] = e & 255 | An,
        e /= 128;
    for (; e & fu; )
        t[r++] = e & 255 | An,
        e >>>= 7;
    return t[r] = e | 0,
    to.bytes = r - n + 1,
    t
}
var du = Zt
  , hu = 128
  , _n = 127;
function Zt(e, n) {
    var r = 0, n = n || 0, o = 0, i = n, a, f = e.length;
    do {
        if (i >= f)
            throw Zt.bytes = 0,
            new RangeError("Could not decode varint");
        a = e[i++],
        r += o < 28 ? (a & _n) << o : (a & _n) * Math.pow(2, o),
        o += 7
    } while (a >= hu);
    return Zt.bytes = i - n,
    r
}
var pu = Math.pow(2, 7)
  , gu = Math.pow(2, 14)
  , bu = Math.pow(2, 21)
  , Du = Math.pow(2, 28)
  , mu = Math.pow(2, 35)
  , wu = Math.pow(2, 42)
  , yu = Math.pow(2, 49)
  , Eu = Math.pow(2, 56)
  , vu = Math.pow(2, 63)
  , xu = function(e) {
    return e < pu ? 1 : e < gu ? 2 : e < bu ? 3 : e < Du ? 4 : e < mu ? 5 : e < wu ? 6 : e < yu ? 7 : e < Eu ? 8 : e < vu ? 9 : 10
}
  , Su = {
    encode: uu,
    decode: du,
    encodingLength: xu
}
  , ro = Su
  , In = (e, t, r=0) => (ro.encode(e, t, r),
t)
  , Bn = e => ro.encodingLength(e)
  , Qt = (e, t) => {
    let r = t.byteLength
      , n = Bn(e)
      , o = n + Bn(r)
      , i = new Uint8Array(o + r);
    return In(e, i, 0),
    In(r, i, n),
    i.set(t, o),
    new er(e,r,t,i)
}
  , er = class {
    constructor(t, r, n, o) {
        this.code = t,
        this.size = r,
        this.digest = n,
        this.bytes = o
    }
}
  , no = ({name: e, code: t, encode: r}) => new tr(e,t,r)
  , tr = class {
    constructor(t, r, n) {
        this.name = t,
        this.code = r,
        this.encode = n
    }
    digest(t) {
        if (t instanceof Uint8Array) {
            let r = this.encode(t);
            return r instanceof Uint8Array ? Qt(this.code, r) : r.then(n => Qt(this.code, n))
        } else
            throw Error("Unknown type, must be binary type")
    }
}
  , oo = e => t => y(void 0, null, function*() {
    return new Uint8Array(yield crypto.subtle.digest(e, t))
})
  , Fu = no({
    name: "sha2-256",
    code: 18,
    encode: oo("SHA-256")
})
  , Cu = no({
    name: "sha2-512",
    code: 19,
    encode: oo("SHA-512")
})
  , Au = Object.freeze({
    __proto__: null,
    sha256: Fu,
    sha512: Cu
})
  , io = 0
  , _u = "identity"
  , so = Zn
  , Iu = e => Qt(io, so(e))
  , Bu = {
    code: io,
    name: _u,
    encode: so,
    digest: Iu
}
  , Ou = Object.freeze({
    __proto__: null,
    identity: Bu
});
new TextEncoder,
new TextDecoder;
var On = A(A(A(A(A(A(A(A(A(A({}, Fa), Aa), Ia), Oa), Ua), Ha), $a), Ga), tu), au);
A(A({}, Au), Ou);
function ao(e, t, r, n) {
    return {
        name: e,
        prefix: t,
        encoder: {
            name: e,
            prefix: t,
            encode: r
        },
        decoder: {
            decode: n
        }
    }
}
var Nn = ao("utf8", "u", e => "u" + new TextDecoder("utf8").decode(e), e => new TextEncoder().encode(e.substring(1)))
  , kt = ao("ascii", "a", e => {
    let t = "a";
    for (let r = 0; r < e.length; r++)
        t += String.fromCharCode(e[r]);
    return t
}
, e => {
    e = e.substring(1);
    let t = Gn(e.length);
    for (let r = 0; r < e.length; r++)
        t[r] = e.charCodeAt(r);
    return t
}
)
  , uo = A({
    utf8: Nn,
    "utf-8": Nn,
    hex: On.base16,
    latin1: kt,
    ascii: kt,
    binary: kt
}, On);
function pt(e, t="utf8") {
    let r = uo[t];
    if (!r)
        throw new Error(`Unsupported encoding "${t}"`);
    return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8") : r.encoder.encode(e).substring(1)
}
function Ae(e, t="utf8") {
    let r = uo[t];
    if (!r)
        throw new Error(`Unsupported encoding "${t}"`);
    return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? ur(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`)
}
function Tn(e) {
    return pe(pt(Ae(e, dt), Yn))
}
function lt(e) {
    return pt(Ae(ge(e), Yn), dt)
}
function Nu(e) {
    let t = Ae(ga, Cn)
      , r = pa + pt(Xn([t, e]), Cn);
    return [da, ha, r].join(la)
}
function Tu(e) {
    return pt(e, dt)
}
function Uu(e) {
    return Ae(e, dt)
}
function Ru(e) {
    return Ae([lt(e.header), lt(e.payload)].join(ft), Jn)
}
function Pu(e) {
    return [lt(e.header), lt(e.payload), Tu(e.signature)].join(ft)
}
function Mf(e) {
    let t = e.split(ft)
      , r = Tn(t[0])
      , n = Tn(t[1])
      , o = Uu(t[2])
      , i = Ae(t.slice(0, 2).join(ft), Jn);
    return {
        header: r,
        payload: n,
        signature: o,
        data: i
    }
}
function Lf(e=Mn(ba)) {
    let t = $n.getPublicKey(e);
    return {
        secretKey: Xn([e, t]),
        publicKey: t
    }
}
function zf(i, a, f, u) {
    return y(this, arguments, function*(e, t, r, n, o=(0,
    Un.fromMiliseconds)(Date.now())) {
        let h = {
            alg: ca,
            typ: fa
        }
          , s = Nu(n.publicKey)
          , c = o + r
          , l = {
            iss: s,
            sub: e,
            aud: t,
            iat: o,
            exp: c
        }
          , p = Ru({
            header: h,
            payload: l
        })
          , d = $n.sign(p, n.secretKey.slice(0, 32));
        return Pu({
            header: h,
            payload: l,
            signature: d
        })
    })
}
function We(e=0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? globalThis.Buffer.allocUnsafe(e) : new Uint8Array(e)
}
function Mu(e, t) {
    t || (t = e.reduce( (o, i) => o + i.length, 0));
    let r = We(t)
      , n = 0;
    for (let o of e)
        r.set(o, n),
        n += o.length;
    return r
}
var hr = {};
Z(hr, {
    identity: () => Ku
});
function Lu(e, t) {
    if (e.length >= 255)
        throw new TypeError("Alphabet too long");
    for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
        r[n] = 255;
    for (var o = 0; o < e.length; o++) {
        var i = e.charAt(o)
          , a = i.charCodeAt(0);
        if (r[a] !== 255)
            throw new TypeError(i + " is ambiguous");
        r[a] = o
    }
    var f = e.length
      , u = e.charAt(0)
      , h = Math.log(f) / Math.log(256)
      , s = Math.log(256) / Math.log(f);
    function c(d) {
        if (d instanceof Uint8Array || (ArrayBuffer.isView(d) ? d = new Uint8Array(d.buffer,d.byteOffset,d.byteLength) : Array.isArray(d) && (d = Uint8Array.from(d))),
        !(d instanceof Uint8Array))
            throw new TypeError("Expected Uint8Array");
        if (d.length === 0)
            return "";
        for (var g = 0, b = 0, v = 0, x = d.length; v !== x && d[v] === 0; )
            v++,
            g++;
        for (var D = (x - v) * s + 1 >>> 0, S = new Uint8Array(D); v !== x; ) {
            for (var I = d[v], U = 0, T = D - 1; (I !== 0 || U < b) && T !== -1; T--,
            U++)
                I += 256 * S[T] >>> 0,
                S[T] = I % f >>> 0,
                I = I / f >>> 0;
            if (I !== 0)
                throw new Error("Non-zero carry");
            b = U,
            v++
        }
        for (var B = D - b; B !== D && S[B] === 0; )
            B++;
        for (var L = u.repeat(g); B < D; ++B)
            L += e.charAt(S[B]);
        return L
    }
    function l(d) {
        if (typeof d != "string")
            throw new TypeError("Expected String");
        if (d.length === 0)
            return new Uint8Array;
        var g = 0;
        if (d[g] !== " ") {
            for (var b = 0, v = 0; d[g] === u; )
                b++,
                g++;
            for (var x = (d.length - g) * h + 1 >>> 0, D = new Uint8Array(x); d[g]; ) {
                var S = r[d.charCodeAt(g)];
                if (S === 255)
                    return;
                for (var I = 0, U = x - 1; (S !== 0 || I < v) && U !== -1; U--,
                I++)
                    S += f * D[U] >>> 0,
                    D[U] = S % 256 >>> 0,
                    S = S / 256 >>> 0;
                if (S !== 0)
                    throw new Error("Non-zero carry");
                v = I,
                g++
            }
            if (d[g] !== " ") {
                for (var T = x - v; T !== x && D[T] === 0; )
                    T++;
                for (var B = new Uint8Array(b + (x - T)), L = b; T !== x; )
                    B[L++] = D[T++];
                return B
            }
        }
    }
    function p(d) {
        var g = l(d);
        if (g)
            return g;
        throw new Error(`Non-${t} character`)
    }
    return {
        encode: c,
        decodeUnsafe: l,
        decode: p
    }
}
var zu = Lu
  , Wu = zu
  , co = Wu;
var qf = new Uint8Array(0);
var fo = (e, t) => {
    if (e === t)
        return !0;
    if (e.byteLength !== t.byteLength)
        return !1;
    for (let r = 0; r < e.byteLength; r++)
        if (e[r] !== t[r])
            return !1;
    return !0
}
  , ae = e => {
    if (e instanceof Uint8Array && e.constructor.name === "Uint8Array")
        return e;
    if (e instanceof ArrayBuffer)
        return new Uint8Array(e);
    if (ArrayBuffer.isView(e))
        return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);
    throw new Error("Unknown type, must be binary type")
}
;
var lo = e => new TextEncoder().encode(e)
  , ho = e => new TextDecoder().decode(e);
var cr = class {
    constructor(t, r, n) {
        this.name = t,
        this.prefix = r,
        this.baseEncode = n
    }
    encode(t) {
        if (t instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(t)}`;
        throw Error("Unknown type, must be binary type")
    }
}
  , fr = class {
    constructor(t, r, n) {
        if (this.name = t,
        this.prefix = r,
        r.codePointAt(0) === void 0)
            throw new Error("Invalid prefix character");
        this.prefixCodePoint = r.codePointAt(0),
        this.baseDecode = n
    }
    decode(t) {
        if (typeof t == "string") {
            if (t.codePointAt(0) !== this.prefixCodePoint)
                throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(t.slice(this.prefix.length))
        } else
            throw Error("Can only multibase decode strings")
    }
    or(t) {
        return go(this, t)
    }
}
  , lr = class {
    constructor(t) {
        this.decoders = t
    }
    or(t) {
        return go(this, t)
    }
    decode(t) {
        let r = t[0]
          , n = this.decoders[r];
        if (n)
            return n.decode(t);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
}
  , go = (e, t) => new lr(A(A({}, e.decoders || {
    [e.prefix]: e
}), t.decoders || {
    [t.prefix]: t
}))
  , dr = class {
    constructor(t, r, n, o) {
        this.name = t,
        this.prefix = r,
        this.baseEncode = n,
        this.baseDecode = o,
        this.encoder = new cr(t,r,n),
        this.decoder = new fr(t,r,o)
    }
    encode(t) {
        return this.encoder.encode(t)
    }
    decode(t) {
        return this.decoder.decode(t)
    }
}
  , _e = ({name: e, prefix: t, encode: r, decode: n}) => new dr(e,t,r,n)
  , le = ({prefix: e, name: t, alphabet: r}) => {
    let {encode: n, decode: o} = co(r, t);
    return _e({
        prefix: e,
        name: t,
        encode: n,
        decode: i => ae(o(i))
    })
}
  , ku = (e, t, r, n) => {
    let o = {};
    for (let s = 0; s < t.length; ++s)
        o[t[s]] = s;
    let i = e.length;
    for (; e[i - 1] === "="; )
        --i;
    let a = new Uint8Array(i * r / 8 | 0)
      , f = 0
      , u = 0
      , h = 0;
    for (let s = 0; s < i; ++s) {
        let c = o[e[s]];
        if (c === void 0)
            throw new SyntaxError(`Non-${n} character`);
        u = u << r | c,
        f += r,
        f >= 8 && (f -= 8,
        a[h++] = 255 & u >> f)
    }
    if (f >= r || 255 & u << 8 - f)
        throw new SyntaxError("Unexpected end of data");
    return a
}
  , ju = (e, t, r) => {
    let n = t[t.length - 1] === "="
      , o = (1 << r) - 1
      , i = ""
      , a = 0
      , f = 0;
    for (let u = 0; u < e.length; ++u)
        for (f = f << 8 | e[u],
        a += 8; a > r; )
            a -= r,
            i += t[o & f >> a];
    if (a && (i += t[o & f << r - a]),
    n)
        for (; i.length * r & 7; )
            i += "=";
    return i
}
  , k = ({name: e, prefix: t, bitsPerChar: r, alphabet: n}) => _e({
    prefix: t,
    name: e,
    encode(o) {
        return ju(o, n, r)
    },
    decode(o) {
        return ku(o, n, r, e)
    }
});
var Ku = _e({
    prefix: "\0",
    name: "identity",
    encode: e => ho(e),
    decode: e => lo(e)
});
var pr = {};
Z(pr, {
    base2: () => Hu
});
var Hu = k({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var gr = {};
Z(gr, {
    base8: () => Vu
});
var Vu = k({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var br = {};
Z(br, {
    base10: () => qu
});
var qu = le({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var Dr = {};
Z(Dr, {
    base16: () => $u,
    base16upper: () => Yu
});
var $u = k({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
})
  , Yu = k({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
});
var mr = {};
Z(mr, {
    base32: () => Ie,
    base32hex: () => Zu,
    base32hexpad: () => ec,
    base32hexpadupper: () => tc,
    base32hexupper: () => Qu,
    base32pad: () => Gu,
    base32padupper: () => Xu,
    base32upper: () => Ju,
    base32z: () => rc
});
var Ie = k({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
})
  , Ju = k({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
})
  , Gu = k({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
})
  , Xu = k({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
})
  , Zu = k({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
})
  , Qu = k({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
})
  , ec = k({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
})
  , tc = k({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
})
  , rc = k({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
});
var wr = {};
Z(wr, {
    base36: () => nc,
    base36upper: () => oc
});
var nc = le({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
})
  , oc = le({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
var yr = {};
Z(yr, {
    base58btc: () => re,
    base58flickr: () => ic
});
var re = le({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
})
  , ic = le({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
var Er = {};
Z(Er, {
    base64: () => sc,
    base64pad: () => ac,
    base64url: () => uc,
    base64urlpad: () => cc
});
var sc = k({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
})
  , ac = k({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
})
  , uc = k({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
})
  , cc = k({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
});
var vr = {};
Z(vr, {
    base256emoji: () => pc
});
var bo = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}")
  , fc = bo.reduce( (e, t, r) => (e[r] = t,
e), [])
  , lc = bo.reduce( (e, t, r) => (e[t.codePointAt(0)] = r,
e), []);
function dc(e) {
    return e.reduce( (t, r) => (t += fc[r],
    t), "")
}
function hc(e) {
    let t = [];
    for (let r of e) {
        let n = lc[r.codePointAt(0)];
        if (n === void 0)
            throw new Error(`Non-base256emoji character: ${r}`);
        t.push(n)
    }
    return new Uint8Array(t)
}
var pc = _e({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: dc,
    decode: hc
});
var Cr = {};
Z(Cr, {
    sha256: () => Tc,
    sha512: () => Uc
});
var gc = wo
  , Do = 128
  , bc = 127
  , Dc = ~bc
  , mc = Math.pow(2, 31);
function wo(e, t, r) {
    t = t || [],
    r = r || 0;
    for (var n = r; e >= mc; )
        t[r++] = e & 255 | Do,
        e /= 128;
    for (; e & Dc; )
        t[r++] = e & 255 | Do,
        e >>>= 7;
    return t[r] = e | 0,
    wo.bytes = r - n + 1,
    t
}
var wc = xr
  , yc = 128
  , mo = 127;
function xr(e, n) {
    var r = 0, n = n || 0, o = 0, i = n, a, f = e.length;
    do {
        if (i >= f)
            throw xr.bytes = 0,
            new RangeError("Could not decode varint");
        a = e[i++],
        r += o < 28 ? (a & mo) << o : (a & mo) * Math.pow(2, o),
        o += 7
    } while (a >= yc);
    return xr.bytes = i - n,
    r
}
var Ec = Math.pow(2, 7)
  , vc = Math.pow(2, 14)
  , xc = Math.pow(2, 21)
  , Sc = Math.pow(2, 28)
  , Fc = Math.pow(2, 35)
  , Cc = Math.pow(2, 42)
  , Ac = Math.pow(2, 49)
  , _c = Math.pow(2, 56)
  , Ic = Math.pow(2, 63)
  , Bc = function(e) {
    return e < Ec ? 1 : e < vc ? 2 : e < xc ? 3 : e < Sc ? 4 : e < Fc ? 5 : e < Cc ? 6 : e < Ac ? 7 : e < _c ? 8 : e < Ic ? 9 : 10
}
  , Oc = {
    encode: gc,
    decode: wc,
    encodingLength: Bc
}
  , Nc = Oc
  , ke = Nc;
var je = (e, t=0) => [ke.decode(e, t), ke.decode.bytes]
  , Be = (e, t, r=0) => (ke.encode(e, t, r),
t)
  , Oe = e => ke.encodingLength(e);
var me = (e, t) => {
    let r = t.byteLength
      , n = Oe(e)
      , o = n + Oe(r)
      , i = new Uint8Array(o + r);
    return Be(e, i, 0),
    Be(r, i, n),
    i.set(t, o),
    new Ne(e,r,t,i)
}
  , yo = e => {
    let t = ae(e)
      , [r,n] = je(t)
      , [o,i] = je(t.subarray(n))
      , a = t.subarray(n + i);
    if (a.byteLength !== o)
        throw new Error("Incorrect length");
    return new Ne(r,o,a,t)
}
  , Eo = (e, t) => e === t ? !0 : e.code === t.code && e.size === t.size && fo(e.bytes, t.bytes)
  , Ne = class {
    constructor(t, r, n, o) {
        this.code = t,
        this.size = r,
        this.digest = n,
        this.bytes = o
    }
}
;
var Fr = ({name: e, code: t, encode: r}) => new Sr(e,t,r)
  , Sr = class {
    constructor(t, r, n) {
        this.name = t,
        this.code = r,
        this.encode = n
    }
    digest(t) {
        if (t instanceof Uint8Array) {
            let r = this.encode(t);
            return r instanceof Uint8Array ? me(this.code, r) : r.then(n => me(this.code, n))
        } else
            throw Error("Unknown type, must be binary type")
    }
}
;
var xo = e => t => y(void 0, null, function*() {
    return new Uint8Array(yield crypto.subtle.digest(e, t))
})
  , Tc = Fr({
    name: "sha2-256",
    code: 18,
    encode: xo("SHA-256")
})
  , Uc = Fr({
    name: "sha2-512",
    code: 19,
    encode: xo("SHA-512")
});
var Ar = {};
Z(Ar, {
    identity: () => Mc
});
var So = 0
  , Rc = "identity"
  , Fo = ae
  , Pc = e => me(So, Fo(e))
  , Mc = {
    code: So,
    name: Rc,
    encode: Fo,
    digest: Pc
};
var gl = new TextEncoder
  , bl = new TextDecoder;
var mt = class e {
    constructor(t, r, n, o) {
        this.code = r,
        this.version = t,
        this.multihash = n,
        this.bytes = o,
        this.byteOffset = o.byteOffset,
        this.byteLength = o.byteLength,
        this.asCID = this,
        this._baseCache = new Map,
        Object.defineProperties(this, {
            byteOffset: Dt,
            byteLength: Dt,
            code: bt,
            version: bt,
            multihash: bt,
            bytes: bt,
            _baseCache: Dt,
            asCID: Dt
        })
    }
    toV0() {
        switch (this.version) {
        case 0:
            return this;
        default:
            {
                let {code: t, multihash: r} = this;
                if (t !== He)
                    throw new Error("Cannot convert a non dag-pb CID to CIDv0");
                if (r.code !== Kc)
                    throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
                return e.createV0(r)
            }
        }
    }
    toV1() {
        switch (this.version) {
        case 0:
            {
                let {code: t, digest: r} = this.multihash
                  , n = me(t, r);
                return e.createV1(this.code, n)
            }
        case 1:
            return this;
        default:
            throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)
        }
    }
    equals(t) {
        return t && this.code === t.code && this.version === t.version && Eo(this.multihash, t.multihash)
    }
    toString(t) {
        let {bytes: r, version: n, _baseCache: o} = this;
        switch (n) {
        case 0:
            return kc(r, o, t || re.encoder);
        default:
            return jc(r, o, t || Ie.encoder)
        }
    }
    toJSON() {
        return {
            code: this.code,
            version: this.version,
            hash: this.multihash.bytes
        }
    }
    get[Symbol.toStringTag]() {
        return "CID"
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return "CID(" + this.toString() + ")"
    }
    static isCID(t) {
        return Vc(/^0\.0/, qc),
        !!(t && (t[Ao] || t.asCID === t))
    }
    get toBaseEncodedString() {
        throw new Error("Deprecated, use .toString()")
    }
    get codec() {
        throw new Error('"codec" property is deprecated, use integer "code" property instead')
    }
    get buffer() {
        throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")
    }
    get multibaseName() {
        throw new Error('"multibaseName" property is deprecated')
    }
    get prefix() {
        throw new Error('"prefix" property is deprecated')
    }
    static asCID(t) {
        if (t instanceof e)
            return t;
        if (t != null && t.asCID === t) {
            let {version: r, code: n, multihash: o, bytes: i} = t;
            return new e(r,n,o,i || Co(r, n, o.bytes))
        } else if (t != null && t[Ao] === !0) {
            let {version: r, multihash: n, code: o} = t
              , i = yo(n);
            return e.create(r, o, i)
        } else
            return null
    }
    static create(t, r, n) {
        if (typeof r != "number")
            throw new Error("String codecs are no longer supported");
        switch (t) {
        case 0:
            {
                if (r !== He)
                    throw new Error(`Version 0 CID must use dag-pb (code: ${He}) block encoding`);
                return new e(t,r,n,n.bytes)
            }
        case 1:
            {
                let o = Co(t, r, n.bytes);
                return new e(t,r,n,o)
            }
        default:
            throw new Error("Invalid version")
        }
    }
    static createV0(t) {
        return e.create(0, He, t)
    }
    static createV1(t, r) {
        return e.create(1, t, r)
    }
    static decode(t) {
        let[r,n] = e.decodeFirst(t);
        if (n.length)
            throw new Error("Incorrect length");
        return r
    }
    static decodeFirst(t) {
        let r = e.inspectBytes(t)
          , n = r.size - r.multihashSize
          , o = ae(t.subarray(n, n + r.multihashSize));
        if (o.byteLength !== r.multihashSize)
            throw new Error("Incorrect length");
        let i = o.subarray(r.multihashSize - r.digestSize)
          , a = new Ne(r.multihashCode,r.digestSize,i,o);
        return [r.version === 0 ? e.createV0(a) : e.createV1(r.codec, a), t.subarray(r.size)]
    }
    static inspectBytes(t) {
        let r = 0
          , n = () => {
            let[c,l] = je(t.subarray(r));
            return r += l,
            c
        }
          , o = n()
          , i = He;
        if (o === 18 ? (o = 0,
        r = 0) : o === 1 && (i = n()),
        o !== 0 && o !== 1)
            throw new RangeError(`Invalid CID version ${o}`);
        let a = r
          , f = n()
          , u = n()
          , h = r + u
          , s = h - a;
        return {
            version: o,
            codec: i,
            multihashCode: f,
            digestSize: u,
            multihashSize: s,
            size: h
        }
    }
    static parse(t, r) {
        let[n,o] = Wc(t, r)
          , i = e.decode(o);
        return i._baseCache.set(n, t),
        i
    }
}
  , Wc = (e, t) => {
    switch (e[0]) {
    case "Q":
        {
            let r = t || re;
            return [re.prefix, r.decode(`${re.prefix}${e}`)]
        }
    case re.prefix:
        {
            let r = t || re;
            return [re.prefix, r.decode(e)]
        }
    case Ie.prefix:
        {
            let r = t || Ie;
            return [Ie.prefix, r.decode(e)]
        }
    default:
        {
            if (t == null)
                throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
            return [e[0], t.decode(e)]
        }
    }
}
  , kc = (e, t, r) => {
    let {prefix: n} = r;
    if (n !== re.prefix)
        throw Error(`Cannot string encode V0 in ${r.name} encoding`);
    let o = t.get(n);
    if (o == null) {
        let i = r.encode(e).slice(1);
        return t.set(n, i),
        i
    } else
        return o
}
  , jc = (e, t, r) => {
    let {prefix: n} = r
      , o = t.get(n);
    if (o == null) {
        let i = r.encode(e);
        return t.set(n, i),
        i
    } else
        return o
}
  , He = 112
  , Kc = 18
  , Co = (e, t, r) => {
    let n = Oe(e)
      , o = n + Oe(t)
      , i = new Uint8Array(o + r.byteLength);
    return Be(e, i, 0),
    Be(t, i, n),
    i.set(r, o),
    i
}
  , Ao = Symbol.for("@ipld/js-cid/CID")
  , bt = {
    writable: !1,
    configurable: !1,
    enumerable: !0
}
  , Dt = {
    writable: !1,
    enumerable: !1,
    configurable: !1
}
  , Hc = "0.0.0-dev"
  , Vc = (e, t) => {
    if (e.test(Hc))
        console.warn(t);
    else
        throw new Error(t)
}
  , qc = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;
var _r = A(A(A(A(A(A(A(A(A(A({}, hr), pr), gr), br), Dr), mr), wr), yr), Er), vr)
  , Sl = A(A({}, Cr), Ar);
function Io(e, t, r, n) {
    return {
        name: e,
        prefix: t,
        encoder: {
            name: e,
            prefix: t,
            encode: r
        },
        decoder: {
            decode: n
        }
    }
}
var _o = Io("utf8", "u", e => "u" + new TextDecoder("utf8").decode(e), e => new TextEncoder().encode(e.substring(1)))
  , Ir = Io("ascii", "a", e => {
    let t = "a";
    for (let r = 0; r < e.length; r++)
        t += String.fromCharCode(e[r]);
    return t
}
, e => {
    e = e.substring(1);
    let t = We(e.length);
    for (let r = 0; r < e.length; r++)
        t[r] = e.charCodeAt(r);
    return t
}
)
  , $c = A({
    utf8: _o,
    "utf-8": _o,
    hex: _r.base16,
    latin1: Ir,
    ascii: Ir,
    binary: Ir
}, _r)
  , wt = $c;
function Yc(e, t="utf8") {
    let r = wt[t];
    if (!r)
        throw new Error(`Unsupported encoding "${t}"`);
    return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(e, "utf8") : r.decoder.decode(`${r.prefix}${e}`)
}
function Jc(e, t="utf8") {
    let r = wt[t];
    if (!r)
        throw new Error(`Unsupported encoding "${t}"`);
    return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8") : r.encoder.encode(e).substring(1)
}
var Jl = {
    waku: {
        publish: "waku_publish",
        batchPublish: "waku_batchPublish",
        subscribe: "waku_subscribe",
        batchSubscribe: "waku_batchSubscribe",
        subscription: "waku_subscription",
        unsubscribe: "waku_unsubscribe",
        batchUnsubscribe: "waku_batchUnsubscribe",
        batchFetchMessages: "waku_batchFetchMessages"
    },
    irn: {
        publish: "irn_publish",
        batchPublish: "irn_batchPublish",
        subscribe: "irn_subscribe",
        batchSubscribe: "irn_batchSubscribe",
        subscription: "irn_subscription",
        unsubscribe: "irn_unsubscribe",
        batchUnsubscribe: "irn_batchUnsubscribe",
        batchFetchMessages: "irn_batchFetchMessages"
    },
    iridium: {
        publish: "iridium_publish",
        batchPublish: "iridium_batchPublish",
        subscribe: "iridium_subscribe",
        batchSubscribe: "iridium_batchSubscribe",
        subscription: "iridium_subscription",
        unsubscribe: "iridium_unsubscribe",
        batchUnsubscribe: "iridium_batchUnsubscribe",
        batchFetchMessages: "iridium_batchFetchMessages"
    }
};
var yt = class {
}
;
var No = Xe($r())
  , Et = Xe(Tt());
var Br = class extends yt {
    constructor(t) {
        super()
    }
}
  , Bo = Et.FIVE_SECONDS
  , Gc = {
    pulse: "heartbeat_pulse"
}
  , Oo = class e extends Br {
    constructor(t) {
        super(t),
        this.events = new No.EventEmitter,
        this.interval = Bo,
        this.interval = t?.interval || Bo
    }
    static init(t) {
        return y(this, null, function*() {
            let r = new e(t);
            return yield r.init(),
            r
        })
    }
    init() {
        return y(this, null, function*() {
            yield this.initialize()
        })
    }
    stop() {
        clearInterval(this.intervalRef)
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
    initialize() {
        return y(this, null, function*() {
            this.intervalRef = setInterval( () => this.pulse(), (0,
            Et.toMiliseconds)(this.interval))
        })
    }
    pulse() {
        this.events.emit(Gc.pulse)
    }
}
;
var Xc = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/
  , Zc = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/
  , Qc = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function ef(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype"in t) {
        tf(e);
        return
    }
    return t
}
function tf(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}
function Ve(e, t={}) {
    if (typeof e != "string")
        return e;
    if (e[0] === '"' && e[e.length - 1] === '"' && e.indexOf("\\") === -1)
        return e.slice(1, -1);
    let r = e.trim();
    if (r.length <= 9)
        switch (r.toLowerCase()) {
        case "true":
            return !0;
        case "false":
            return !1;
        case "undefined":
            return;
        case "null":
            return null;
        case "nan":
            return Number.NaN;
        case "infinity":
            return Number.POSITIVE_INFINITY;
        case "-infinity":
            return Number.NEGATIVE_INFINITY
        }
    if (!Qc.test(e)) {
        if (t.strict)
            throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (Xc.test(e) || Zc.test(e)) {
            if (t.strict)
                throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, ef)
        }
        return JSON.parse(e)
    } catch (n) {
        if (t.strict)
            throw n;
        return e
    }
}
function rf(e) {
    return !e || typeof e.then != "function" ? Promise.resolve(e) : e
}
function H(e, ...t) {
    try {
        return rf(e(...t))
    } catch (r) {
        return Promise.reject(r)
    }
}
function nf(e) {
    let t = typeof e;
    return e === null || t !== "object" && t !== "function"
}
function of(e) {
    let t = Object.getPrototypeOf(e);
    return !t || t.isPrototypeOf(Object)
}
function qe(e) {
    if (nf(e))
        return String(e);
    if (of(e) || Array.isArray(e))
        return JSON.stringify(e);
    if (typeof e.toJSON == "function")
        return qe(e.toJSON());
    throw new Error("[unstorage] Cannot stringify value!")
}
var Or = "base64:";
function To(e) {
    return typeof e == "string" ? e : Or + af(e)
}
function Uo(e) {
    return typeof e != "string" || !e.startsWith(Or) ? e : sf(e.slice(Or.length))
}
function sf(e) {
    return globalThis.Buffer ? Buffer.from(e, "base64") : Uint8Array.from(globalThis.atob(e), t => t.codePointAt(0))
}
function af(e) {
    return globalThis.Buffer ? Buffer.from(e).toString("base64") : globalThis.btoa(String.fromCodePoint(...e))
}
function Y(e) {
    return e && e.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || ""
}
function Ro(...e) {
    return Y(e.join(":"))
}
function $e(e) {
    return e = Y(e),
    e ? e + ":" : ""
}
function Po(e, t) {
    if (t === void 0)
        return !0;
    let r = 0
      , n = e.indexOf(":");
    for (; n > -1; )
        r++,
        n = e.indexOf(":", n + 1);
    return r <= t
}
function Mo(e, t) {
    return t ? e.startsWith(t) && e[e.length - 1] !== "$" : e[e.length - 1] !== "$"
}
var uf = "memory"
  , cf = () => {
    let e = new Map;
    return {
        name: uf,
        getInstance: () => e,
        hasItem(t) {
            return e.has(t)
        },
        getItem(t) {
            return e.get(t) ?? null
        },
        getItemRaw(t) {
            return e.get(t) ?? null
        },
        setItem(t, r) {
            e.set(t, r)
        },
        setItemRaw(t, r) {
            e.set(t, r)
        },
        removeItem(t) {
            e.delete(t)
        },
        getKeys() {
            return [...e.keys()]
        },
        clear() {
            e.clear()
        },
        dispose() {
            e.clear()
        }
    }
}
;
function Wo(e={}) {
    let t = {
        mounts: {
            "": e.driver || cf()
        },
        mountpoints: [""],
        watching: !1,
        watchListeners: [],
        unwatch: {}
    }
      , r = s => {
        for (let c of t.mountpoints)
            if (s.startsWith(c))
                return {
                    base: c,
                    relativeKey: s.slice(c.length),
                    driver: t.mounts[c]
                };
        return {
            base: "",
            relativeKey: s,
            driver: t.mounts[""]
        }
    }
      , n = (s, c) => t.mountpoints.filter(l => l.startsWith(s) || c && s.startsWith(l)).map(l => ({
        relativeBase: s.length > l.length ? s.slice(l.length) : void 0,
        mountpoint: l,
        driver: t.mounts[l]
    }))
      , o = (s, c) => {
        if (t.watching) {
            c = Y(c);
            for (let l of t.watchListeners)
                l(s, c)
        }
    }
      , i = () => y(this, null, function*() {
        if (!t.watching) {
            t.watching = !0;
            for (let s in t.mounts)
                t.unwatch[s] = yield Lo(t.mounts[s], o, s)
        }
    })
      , a = () => y(this, null, function*() {
        if (t.watching) {
            for (let s in t.unwatch)
                yield t.unwatch[s]();
            t.unwatch = {},
            t.watching = !1
        }
    })
      , f = (s, c, l) => {
        let p = new Map
          , d = g => {
            let b = p.get(g.base);
            return b || (b = {
                driver: g.driver,
                base: g.base,
                items: []
            },
            p.set(g.base, b)),
            b
        }
        ;
        for (let g of s) {
            let b = typeof g == "string"
              , v = Y(b ? g : g.key)
              , x = b ? void 0 : g.value
              , D = b || !g.options ? c : A(A({}, c), g.options)
              , S = r(v);
            d(S).items.push({
                key: v,
                value: x,
                relativeKey: S.relativeKey,
                options: D
            })
        }
        return Promise.all([...p.values()].map(g => l(g))).then(g => g.flat())
    }
      , u = {
        hasItem(s, c={}) {
            s = Y(s);
            let {relativeKey: l, driver: p} = r(s);
            return H(p.hasItem, l, c)
        },
        getItem(s, c={}) {
            s = Y(s);
            let {relativeKey: l, driver: p} = r(s);
            return H(p.getItem, l, c).then(d => Ve(d))
        },
        getItems(s, c={}) {
            return f(s, c, l => l.driver.getItems ? H(l.driver.getItems, l.items.map(p => ({
                key: p.relativeKey,
                options: p.options
            })), c).then(p => p.map(d => ({
                key: Ro(l.base, d.key),
                value: Ve(d.value)
            }))) : Promise.all(l.items.map(p => H(l.driver.getItem, p.relativeKey, p.options).then(d => ({
                key: p.key,
                value: Ve(d)
            })))))
        },
        getItemRaw(s, c={}) {
            s = Y(s);
            let {relativeKey: l, driver: p} = r(s);
            return p.getItemRaw ? H(p.getItemRaw, l, c) : H(p.getItem, l, c).then(d => Uo(d))
        },
        setItem(p, d) {
            return y(this, arguments, function*(s, c, l={}) {
                if (c === void 0)
                    return u.removeItem(s);
                s = Y(s);
                let {relativeKey: g, driver: b} = r(s);
                b.setItem && (yield H(b.setItem, g, qe(c), l),
                b.watch || o("update", s))
            })
        },
        setItems(s, c) {
            return y(this, null, function*() {
                yield f(s, c, l => y(this, null, function*() {
                    if (l.driver.setItems)
                        return H(l.driver.setItems, l.items.map(p => ({
                            key: p.relativeKey,
                            value: qe(p.value),
                            options: p.options
                        })), c);
                    l.driver.setItem && (yield Promise.all(l.items.map(p => H(l.driver.setItem, p.relativeKey, qe(p.value), p.options))))
                }))
            })
        },
        setItemRaw(p, d) {
            return y(this, arguments, function*(s, c, l={}) {
                if (c === void 0)
                    return u.removeItem(s, l);
                s = Y(s);
                let {relativeKey: g, driver: b} = r(s);
                if (b.setItemRaw)
                    yield H(b.setItemRaw, g, c, l);
                else if (b.setItem)
                    yield H(b.setItem, g, To(c), l);
                else
                    return;
                b.watch || o("update", s)
            })
        },
        removeItem(l) {
            return y(this, arguments, function*(s, c={}) {
                typeof c == "boolean" && (c = {
                    removeMeta: c
                }),
                s = Y(s);
                let {relativeKey: p, driver: d} = r(s);
                d.removeItem && (yield H(d.removeItem, p, c),
                (c.removeMeta || c.removeMata) && (yield H(d.removeItem, p + "$", c)),
                d.watch || o("remove", s))
            })
        },
        getMeta(l) {
            return y(this, arguments, function*(s, c={}) {
                typeof c == "boolean" && (c = {
                    nativeOnly: c
                }),
                s = Y(s);
                let {relativeKey: p, driver: d} = r(s)
                  , g = Object.create(null);
                if (d.getMeta && Object.assign(g, yield H(d.getMeta, p, c)),
                !c.nativeOnly) {
                    let b = yield H(d.getItem, p + "$", c).then(v => Ve(v));
                    b && typeof b == "object" && (typeof b.atime == "string" && (b.atime = new Date(b.atime)),
                    typeof b.mtime == "string" && (b.mtime = new Date(b.mtime)),
                    Object.assign(g, b))
                }
                return g
            })
        },
        setMeta(s, c, l={}) {
            return this.setItem(s + "$", c, l)
        },
        removeMeta(s, c={}) {
            return this.removeItem(s + "$", c)
        },
        getKeys(l) {
            return y(this, arguments, function*(s, c={}) {
                s = $e(s);
                let p = n(s, !0)
                  , d = []
                  , g = []
                  , b = !0;
                for (let x of p) {
                    x.driver.flags?.maxDepth || (b = !1);
                    let D = yield H(x.driver.getKeys, x.relativeBase, c);
                    for (let S of D) {
                        let I = x.mountpoint + Y(S);
                        d.some(U => I.startsWith(U)) || g.push(I)
                    }
                    d = [x.mountpoint, ...d.filter(S => !S.startsWith(x.mountpoint))]
                }
                let v = c.maxDepth !== void 0 && !b;
                return g.filter(x => (!v || Po(x, c.maxDepth)) && Mo(x, s))
            })
        },
        clear(l) {
            return y(this, arguments, function*(s, c={}) {
                s = $e(s),
                yield Promise.all(n(s, !1).map(p => y(this, null, function*() {
                    if (p.driver.clear)
                        return H(p.driver.clear, p.relativeBase, c);
                    if (p.driver.removeItem) {
                        let d = yield p.driver.getKeys(p.relativeBase || "", c);
                        return Promise.all(d.map(g => p.driver.removeItem(g, c)))
                    }
                })))
            })
        },
        dispose() {
            return y(this, null, function*() {
                yield Promise.all(Object.values(t.mounts).map(s => zo(s)))
            })
        },
        watch(s) {
            return y(this, null, function*() {
                return yield i(),
                t.watchListeners.push(s),
                () => y(this, null, function*() {
                    t.watchListeners = t.watchListeners.filter(c => c !== s),
                    t.watchListeners.length === 0 && (yield a())
                })
            })
        },
        unwatch() {
            return y(this, null, function*() {
                t.watchListeners = [],
                yield a()
            })
        },
        mount(s, c) {
            if (s = $e(s),
            s && t.mounts[s])
                throw new Error(`already mounted at ${s}`);
            return s && (t.mountpoints.push(s),
            t.mountpoints.sort( (l, p) => p.length - l.length)),
            t.mounts[s] = c,
            t.watching && Promise.resolve(Lo(c, o, s)).then(l => {
                t.unwatch[s] = l
            }
            ).catch(console.error),
            u
        },
        unmount(s, c=!0) {
            return y(this, null, function*() {
                s = $e(s),
                !(!s || !t.mounts[s]) && (t.watching && s in t.unwatch && (t.unwatch[s]?.(),
                delete t.unwatch[s]),
                c && (yield zo(t.mounts[s])),
                t.mountpoints = t.mountpoints.filter(l => l !== s),
                delete t.mounts[s])
            })
        },
        getMount(s="") {
            s = Y(s) + ":";
            let c = r(s);
            return {
                driver: c.driver,
                base: c.base
            }
        },
        getMounts(s="", c={}) {
            return s = Y(s),
            n(s, c.parents).map(p => ({
                driver: p.driver,
                base: p.mountpoint
            }))
        },
        keys: (s, c={}) => u.getKeys(s, c),
        get: (s, c={}) => u.getItem(s, c),
        set: (s, c, l={}) => u.setItem(s, c, l),
        has: (s, c={}) => u.hasItem(s, c),
        del: (s, c={}) => u.removeItem(s, c),
        remove: (s, c={}) => u.removeItem(s, c)
    };
    return u
}
function Lo(e, t, r) {
    return e.watch ? e.watch( (n, o) => t(n, r + o)) : () => {}
}
function zo(e) {
    return y(this, null, function*() {
        typeof e.dispose == "function" && (yield H(e.dispose))
    })
}
function we(e) {
    return new Promise( (t, r) => {
        e.oncomplete = e.onsuccess = () => t(e.result),
        e.onabort = e.onerror = () => r(e.error)
    }
    )
}
function Tr(e, t) {
    let r, n = () => {
        if (r)
            return r;
        let o = indexedDB.open(e);
        return o.onupgradeneeded = () => o.result.createObjectStore(t),
        r = we(o),
        r.then(i => {
            i.onclose = () => r = void 0
        }
        , () => {}
        ),
        r
    }
    ;
    return (o, i) => n().then(a => i(a.transaction(t, o).objectStore(t)))
}
var Nr;
function Ye() {
    return Nr || (Nr = Tr("keyval-store", "keyval")),
    Nr
}
function Ur(e, t=Ye()) {
    return t("readonly", r => we(r.get(e)))
}
function ko(e, t, r=Ye()) {
    return r("readwrite", n => (n.put(t, e),
    we(n.transaction)))
}
function jo(e, t=Ye()) {
    return t("readwrite", r => (r.delete(e),
    we(r.transaction)))
}
function Ko(e=Ye()) {
    return e("readwrite", t => (t.clear(),
    we(t.transaction)))
}
function ff(e, t) {
    return e.openCursor().onsuccess = function() {
        this.result && (t(this.result),
        this.result.continue())
    }
    ,
    we(e.transaction)
}
function Ho(e=Ye()) {
    return e("readonly", t => {
        if (t.getAllKeys)
            return we(t.getAllKeys());
        let r = [];
        return ff(t, n => r.push(n.key)).then( () => r)
    }
    )
}
var lf = "idb-keyval"
  , df = (e={}) => {
    let t = e.base && e.base.length > 0 ? `${e.base}:` : "", r = i => t + i, n;
    return e.dbName && e.storeName && (n = Tr(e.dbName, e.storeName)),
    {
        name: lf,
        options: e,
        hasItem(i) {
            return y(this, null, function*() {
                return !(typeof (yield Ur(r(i), n)) > "u")
            })
        },
        getItem(i) {
            return y(this, null, function*() {
                return (yield Ur(r(i), n)) ?? null
            })
        },
        setItem(i, a) {
            return ko(r(i), a, n)
        },
        removeItem(i) {
            return jo(r(i), n)
        },
        getKeys() {
            return Ho(n)
        },
        clear() {
            return Ko(n)
        }
    }
}
  , hf = "WALLET_CONNECT_V2_INDEXED_DB"
  , pf = "keyvaluestorage"
  , Pr = class {
    constructor() {
        this.indexedDb = Wo({
            driver: df({
                dbName: hf,
                storeName: pf
            })
        })
    }
    getKeys() {
        return y(this, null, function*() {
            return this.indexedDb.getKeys()
        })
    }
    getEntries() {
        return y(this, null, function*() {
            return (yield this.indexedDb.getItems(yield this.indexedDb.getKeys())).map(t => [t.key, t.value])
        })
    }
    getItem(t) {
        return y(this, null, function*() {
            let r = yield this.indexedDb.getItem(t);
            if (r !== null)
                return r
        })
    }
    setItem(t, r) {
        return y(this, null, function*() {
            yield this.indexedDb.setItem(t, ge(r))
        })
    }
    removeItem(t) {
        return y(this, null, function*() {
            yield this.indexedDb.removeItem(t)
        })
    }
}
  , Rr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , vt = {
    exports: {}
};
(function() {
    let e;
    function t() {}
    e = t,
    e.prototype.getItem = function(r) {
        return this.hasOwnProperty(r) ? String(this[r]) : null
    }
    ,
    e.prototype.setItem = function(r, n) {
        this[r] = String(n)
    }
    ,
    e.prototype.removeItem = function(r) {
        delete this[r]
    }
    ,
    e.prototype.clear = function() {
        let r = this;
        Object.keys(r).forEach(function(n) {
            r[n] = void 0,
            delete r[n]
        })
    }
    ,
    e.prototype.key = function(r) {
        return r = r || 0,
        Object.keys(this)[r]
    }
    ,
    e.prototype.__defineGetter__("length", function() {
        return Object.keys(this).length
    }),
    typeof Rr < "u" && Rr.localStorage ? vt.exports = Rr.localStorage : typeof window < "u" && window.localStorage ? vt.exports = window.localStorage : vt.exports = new t
}
)();
function gf(e) {
    var t;
    return [e[0], pe((t = e[1]) != null ? t : "")]
}
var Mr = class {
    constructor() {
        this.localStorage = vt.exports
    }
    getKeys() {
        return y(this, null, function*() {
            return Object.keys(this.localStorage)
        })
    }
    getEntries() {
        return y(this, null, function*() {
            return Object.entries(this.localStorage).map(gf)
        })
    }
    getItem(t) {
        return y(this, null, function*() {
            let r = this.localStorage.getItem(t);
            if (r !== null)
                return pe(r)
        })
    }
    setItem(t, r) {
        return y(this, null, function*() {
            this.localStorage.setItem(t, ge(r))
        })
    }
    removeItem(t) {
        return y(this, null, function*() {
            this.localStorage.removeItem(t)
        })
    }
}
  , bf = "wc_storage_version"
  , Vo = 1
  , Df = (e, t, r) => y(void 0, null, function*() {
    let n = bf
      , o = yield t.getItem(n);
    if (o && o >= Vo) {
        r(t);
        return
    }
    let i = yield e.getKeys();
    if (!i.length) {
        r(t);
        return
    }
    let a = [];
    for (; i.length; ) {
        let f = i.shift();
        if (!f)
            continue;
        let u = f.toLowerCase();
        if (u.includes("wc@") || u.includes("walletconnect") || u.includes("wc_") || u.includes("wallet_connect")) {
            let h = yield e.getItem(f);
            yield t.setItem(f, h),
            a.push(f)
        }
    }
    yield t.setItem(n, Vo),
    r(t),
    mf(e, a)
})
  , mf = (e, t) => y(void 0, null, function*() {
    t.length && t.forEach(r => y(void 0, null, function*() {
        yield e.removeItem(r)
    }))
})
  , qo = class {
    constructor() {
        this.initialized = !1,
        this.setInitialized = r => {
            this.storage = r,
            this.initialized = !0
        }
        ;
        let t = new Mr;
        this.storage = t;
        try {
            let r = new Pr;
            Df(t, r, this.setInitialized)
        } catch {
            this.initialized = !0
        }
    }
    getKeys() {
        return y(this, null, function*() {
            return yield this.initialize(),
            this.storage.getKeys()
        })
    }
    getEntries() {
        return y(this, null, function*() {
            return yield this.initialize(),
            this.storage.getEntries()
        })
    }
    getItem(t) {
        return y(this, null, function*() {
            return yield this.initialize(),
            this.storage.getItem(t)
        })
    }
    setItem(t, r) {
        return y(this, null, function*() {
            return yield this.initialize(),
            this.storage.setItem(t, r)
        })
    }
    removeItem(t) {
        return y(this, null, function*() {
            return yield this.initialize(),
            this.storage.removeItem(t)
        })
    }
    initialize() {
        return y(this, null, function*() {
            this.initialized || (yield new Promise(t => {
                let r = setInterval( () => {
                    this.initialized && (clearInterval(r),
                    t())
                }
                , 20)
            }
            ))
        })
    }
}
;
var Zo = Xe($r());
var wf = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : Yo()
  , yf = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u"
  , Jo = e => e.split("?")[0]
  , Go = 10
  , Ef = wf()
  , Xo = class {
    constructor(t) {
        if (this.url = t,
        this.events = new Zo.EventEmitter,
        this.registering = !1,
        !Ft(t))
            throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
        this.url = t
    }
    get connected() {
        return typeof this.socket < "u"
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
        return y(this, arguments, function*(t=this.url) {
            yield this.register(t)
        })
    }
    close() {
        return y(this, null, function*() {
            return new Promise( (t, r) => {
                if (typeof this.socket > "u") {
                    r(new Error("Connection already closed"));
                    return
                }
                this.socket.onclose = n => {
                    this.onClose(n),
                    t()
                }
                ,
                this.socket.close()
            }
            )
        })
    }
    send(t) {
        return y(this, null, function*() {
            typeof this.socket > "u" && (this.socket = yield this.register());
            try {
                this.socket.send(ge(t))
            } catch (r) {
                this.onError(t.id, r)
            }
        })
    }
    register(t=this.url) {
        if (!Ft(t))
            throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
        if (this.registering) {
            let r = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1),
            new Promise( (n, o) => {
                this.events.once("register_error", i => {
                    this.resetMaxListeners(),
                    o(i)
                }
                ),
                this.events.once("open", () => {
                    if (this.resetMaxListeners(),
                    typeof this.socket > "u")
                        return o(new Error("WebSocket connection is missing or invalid"));
                    n(this.socket)
                }
                )
            }
            )
        }
        return this.url = t,
        this.registering = !0,
        new Promise( (r, n) => {
            let o = (0,
            Ct.isReactNative)() ? void 0 : {
                rejectUnauthorized: !Gr(t)
            }
              , i = new Ef(t,[],o);
            yf() ? i.onerror = a => {
                let f = a;
                n(this.emitError(f.error))
            }
            : i.on("error", a => {
                n(this.emitError(a))
            }
            ),
            i.onopen = () => {
                this.onOpen(i),
                r(i)
            }
        }
        )
    }
    onOpen(t) {
        t.onmessage = r => this.onPayload(r),
        t.onclose = r => this.onClose(r),
        this.socket = t,
        this.registering = !1,
        this.events.emit("open")
    }
    onClose(t) {
        this.socket = void 0,
        this.registering = !1,
        this.events.emit("close", t)
    }
    onPayload(t) {
        if (typeof t.data > "u")
            return;
        let r = typeof t.data == "string" ? pe(t.data) : t.data;
        this.events.emit("payload", r)
    }
    onError(t, r) {
        let n = this.parseError(r)
          , o = n.message || n.toString()
          , i = Jr(t, o);
        this.events.emit("payload", i)
    }
    parseError(t, r=this.url) {
        return Yr(t, Jo(r), "WS")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > Go && this.events.setMaxListeners(Go)
    }
    emitError(t) {
        let r = this.parseError(new Error(t?.message || `WebSocket connection failed for host: ${Jo(this.url)}`));
        return this.events.emit("register_error", r),
        r
    }
}
;
export {vf as a, Tt as b, pn as c, es as d, Nu as e, Mf as f, Lf as g, zf as h, Mu as i, Yc as j, Jc as k, Jl as l, yt as m, Gc as n, Oo as o, qo as p, Xo as q};
