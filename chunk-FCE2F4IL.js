import {f as x} from "./chunk-JOVT4LBN.js";
var E = x( (V, k) => {
    "use strict";
    var h = 1e3
      , g = h * 60
      , m = g * 60
      , f = m * 24
      , J = f * 7
      , P = f * 365.25;
    k.exports = function(r, n) {
        n = n || {};
        var e = typeof r;
        if (e === "string" && r.length > 0)
            return U(r);
        if (e === "number" && isFinite(r))
            return n.long ? G(r) : q(r);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(r))
    }
    ;
    function U(r) {
        if (r = String(r),
        !(r.length > 100)) {
            var n = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(r);
            if (n) {
                var e = parseFloat(n[1])
                  , l = (n[2] || "ms").toLowerCase();
                switch (l) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return e * P;
                case "weeks":
                case "week":
                case "w":
                    return e * J;
                case "days":
                case "day":
                case "d":
                    return e * f;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return e * m;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return e * g;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return e * h;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return e;
                default:
                    return
                }
            }
        }
    }
    function q(r) {
        var n = Math.abs(r);
        return n >= f ? Math.round(r / f) + "d" : n >= m ? Math.round(r / m) + "h" : n >= g ? Math.round(r / g) + "m" : n >= h ? Math.round(r / h) + "s" : r + "ms"
    }
    function G(r) {
        var n = Math.abs(r);
        return n >= f ? b(r, n, f, "day") : n >= m ? b(r, n, m, "hour") : n >= g ? b(r, n, g, "minute") : n >= h ? b(r, n, h, "second") : r + " ms"
    }
    function b(r, n, e, l) {
        var d = n >= e * 1.5;
        return Math.round(r / e) + " " + l + (d ? "s" : "")
    }
}
);
var j = x( (X, M) => {
    "use strict";
    function T(r) {
        e.debug = e,
        e.default = e,
        e.coerce = D,
        e.disable = O,
        e.enable = d,
        e.enabled = S,
        e.humanize = E(),
        e.destroy = L,
        Object.keys(r).forEach(t => {
            e[t] = r[t]
        }
        ),
        e.names = [],
        e.skips = [],
        e.formatters = {};
        function n(t) {
            let o = 0;
            for (let s = 0; s < t.length; s++)
                o = (o << 5) - o + t.charCodeAt(s),
                o |= 0;
            return e.colors[Math.abs(o) % e.colors.length]
        }
        e.selectColor = n;
        function e(t) {
            let o, s = null, i, F;
            function a(...u) {
                if (!a.enabled)
                    return;
                let C = a
                  , p = Number(new Date)
                  , z = p - (o || p);
                C.diff = z,
                C.prev = o,
                C.curr = p,
                o = p,
                u[0] = e.coerce(u[0]),
                typeof u[0] != "string" && u.unshift("%O");
                let y = 0;
                u[0] = u[0].replace(/%([a-zA-Z%])/g, (v, N) => {
                    if (v === "%%")
                        return "%";
                    y++;
                    let I = e.formatters[N];
                    if (typeof I == "function") {
                        let B = u[y];
                        v = I.call(C, B),
                        u.splice(y, 1),
                        y--
                    }
                    return v
                }
                ),
                e.formatArgs.call(C, u),
                (C.log || e.log).apply(C, u)
            }
            return a.namespace = t,
            a.useColors = e.useColors(),
            a.color = e.selectColor(t),
            a.extend = l,
            a.destroy = e.destroy,
            Object.defineProperty(a, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () => s !== null ? s : (i !== e.namespaces && (i = e.namespaces,
                F = e.enabled(t)),
                F),
                set: u => {
                    s = u
                }
            }),
            typeof e.init == "function" && e.init(a),
            a
        }
        function l(t, o) {
            let s = e(this.namespace + (typeof o > "u" ? ":" : o) + t);
            return s.log = this.log,
            s
        }
        function d(t) {
            e.save(t),
            e.namespaces = t,
            e.names = [],
            e.skips = [];
            let o = (typeof t == "string" ? t : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
            for (let s of o)
                s[0] === "-" ? e.skips.push(s.slice(1)) : e.names.push(s)
        }
        function A(t, o) {
            let s = 0
              , i = 0
              , F = -1
              , a = 0;
            for (; s < t.length; )
                if (i < o.length && (o[i] === t[s] || o[i] === "*"))
                    o[i] === "*" ? (F = i,
                    a = s,
                    i++) : (s++,
                    i++);
                else if (F !== -1)
                    i = F + 1,
                    a++,
                    s = a;
                else
                    return !1;
            for (; i < o.length && o[i] === "*"; )
                i++;
            return i === o.length
        }
        function O() {
            let t = [...e.names, ...e.skips.map(o => "-" + o)].join(",");
            return e.enable(""),
            t
        }
        function S(t) {
            for (let o of e.skips)
                if (A(t, o))
                    return !1;
            for (let o of e.names)
                if (A(t, o))
                    return !0;
            return !1
        }
        function D(t) {
            return t instanceof Error ? t.stack || t.message : t
        }
        function L() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
        }
        return e.enable(e.load()),
        e
    }
    M.exports = T
}
);
var Q = x( (c, w) => {
    "use strict";
    c.formatArgs = _;
    c.save = W;
    c.load = $;
    c.useColors = Z;
    c.storage = H();
    c.destroy = ( () => {
        let r = !1;
        return () => {
            r || (r = !0,
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
        }
    }
    )();
    c.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
    function Z() {
        if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
            return !0;
        if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
            return !1;
        let r;
        return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (r = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(r[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }
    function _(r) {
        if (r[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + r[0] + (this.useColors ? "%c " : " ") + "+" + w.exports.humanize(this.diff),
        !this.useColors)
            return;
        let n = "color: " + this.color;
        r.splice(1, 0, n, "color: inherit");
        let e = 0
          , l = 0;
        r[0].replace(/%[a-zA-Z%]/g, d => {
            d !== "%%" && (e++,
            d === "%c" && (l = e))
        }
        ),
        r.splice(l, 0, n)
    }
    c.log = console.debug || console.log || ( () => {}
    );
    function W(r) {
        try {
            r ? c.storage.setItem("debug", r) : c.storage.removeItem("debug")
        } catch {}
    }
    function $() {
        let r;
        try {
            r = c.storage.getItem("debug") || c.storage.getItem("DEBUG")
        } catch {}
        return !r && typeof process < "u" && "env"in process && (r = process.env.DEBUG),
        r
    }
    function H() {
        try {
            return localStorage
        } catch {}
    }
    w.exports = j()(c);
    var {formatters: K} = w.exports;
    K.j = function(r) {
        try {
            return JSON.stringify(r)
        } catch (n) {
            return "[UnexpectedJSONParseError]: " + n.message
        }
    }
}
);
export {Q as a};
