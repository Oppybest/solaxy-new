import {f as C} from "./chunk-JOVT4LBN.js";
var T = C( (F, p) => {
    "use strict";
    var c = typeof Reflect == "object" ? Reflect : null, d = c && typeof c.apply == "function" ? c.apply : function(e, n, r) {
        return Function.prototype.apply.call(e, n, r)
    }
    , l;
    c && typeof c.ownKeys == "function" ? l = c.ownKeys : Object.getOwnPropertySymbols ? l = function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    }
    : l = function(e) {
        return Object.getOwnPropertyNames(e)
    }
    ;
    function j(t) {
        console && console.warn && console.warn(t)
    }
    var m = Number.isNaN || function(e) {
        return e !== e
    }
    ;
    function o() {
        o.init.call(this)
    }
    p.exports = o;
    p.exports.once = A;
    o.EventEmitter = o;
    o.prototype._events = void 0;
    o.prototype._eventsCount = 0;
    o.prototype._maxListeners = void 0;
    var L = 10;
    function v(t) {
        if (typeof t != "function")
            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
    }
    Object.defineProperty(o, "defaultMaxListeners", {
        enumerable: !0,
        get: function() {
            return L
        },
        set: function(t) {
            if (typeof t != "number" || t < 0 || m(t))
                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
            L = t
        }
    });
    o.init = function() {
        (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null),
        this._eventsCount = 0),
        this._maxListeners = this._maxListeners || void 0
    }
    ;
    o.prototype.setMaxListeners = function(e) {
        if (typeof e != "number" || e < 0 || m(e))
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return this._maxListeners = e,
        this
    }
    ;
    function y(t) {
        return t._maxListeners === void 0 ? o.defaultMaxListeners : t._maxListeners
    }
    o.prototype.getMaxListeners = function() {
        return y(this)
    }
    ;
    o.prototype.emit = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++)
            n.push(arguments[r]);
        var i = e === "error"
          , f = this._events;
        if (f !== void 0)
            i = i && f.error === void 0;
        else if (!i)
            return !1;
        if (i) {
            var s;
            if (n.length > 0 && (s = n[0]),
            s instanceof Error)
                throw s;
            var u = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
            throw u.context = s,
            u
        }
        var a = f[e];
        if (a === void 0)
            return !1;
        if (typeof a == "function")
            d(a, this, n);
        else
            for (var h = a.length, x = E(a, h), r = 0; r < h; ++r)
                d(x[r], this, n);
        return !0
    }
    ;
    function g(t, e, n, r) {
        var i, f, s;
        if (v(n),
        f = t._events,
        f === void 0 ? (f = t._events = Object.create(null),
        t._eventsCount = 0) : (f.newListener !== void 0 && (t.emit("newListener", e, n.listener ? n.listener : n),
        f = t._events),
        s = f[e]),
        s === void 0)
            s = f[e] = n,
            ++t._eventsCount;
        else if (typeof s == "function" ? s = f[e] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n),
        i = y(t),
        i > 0 && s.length > i && !s.warned) {
            s.warned = !0;
            var u = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            u.name = "MaxListenersExceededWarning",
            u.emitter = t,
            u.type = e,
            u.count = s.length,
            j(u)
        }
        return t
    }
    o.prototype.addListener = function(e, n) {
        return g(this, e, n, !1)
    }
    ;
    o.prototype.on = o.prototype.addListener;
    o.prototype.prependListener = function(e, n) {
        return g(this, e, n, !0)
    }
    ;
    function R() {
        if (!this.fired)
            return this.target.removeListener(this.type, this.wrapFn),
            this.fired = !0,
            arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
    }
    function _(t, e, n) {
        var r = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: n
        }
          , i = R.bind(r);
        return i.listener = n,
        r.wrapFn = i,
        i
    }
    o.prototype.once = function(e, n) {
        return v(n),
        this.on(e, _(this, e, n)),
        this
    }
    ;
    o.prototype.prependOnceListener = function(e, n) {
        return v(n),
        this.prependListener(e, _(this, e, n)),
        this
    }
    ;
    o.prototype.removeListener = function(e, n) {
        var r, i, f, s, u;
        if (v(n),
        i = this._events,
        i === void 0)
            return this;
        if (r = i[e],
        r === void 0)
            return this;
        if (r === n || r.listener === n)
            --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[e],
            i.removeListener && this.emit("removeListener", e, r.listener || n));
        else if (typeof r != "function") {
            for (f = -1,
            s = r.length - 1; s >= 0; s--)
                if (r[s] === n || r[s].listener === n) {
                    u = r[s].listener,
                    f = s;
                    break
                }
            if (f < 0)
                return this;
            f === 0 ? r.shift() : N(r, f),
            r.length === 1 && (i[e] = r[0]),
            i.removeListener !== void 0 && this.emit("removeListener", e, u || n)
        }
        return this
    }
    ;
    o.prototype.off = o.prototype.removeListener;
    o.prototype.removeAllListeners = function(e) {
        var n, r, i;
        if (r = this._events,
        r === void 0)
            return this;
        if (r.removeListener === void 0)
            return arguments.length === 0 ? (this._events = Object.create(null),
            this._eventsCount = 0) : r[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete r[e]),
            this;
        if (arguments.length === 0) {
            var f = Object.keys(r), s;
            for (i = 0; i < f.length; ++i)
                s = f[i],
                s !== "removeListener" && this.removeAllListeners(s);
            return this.removeAllListeners("removeListener"),
            this._events = Object.create(null),
            this._eventsCount = 0,
            this
        }
        if (n = r[e],
        typeof n == "function")
            this.removeListener(e, n);
        else if (n !== void 0)
            for (i = n.length - 1; i >= 0; i--)
                this.removeListener(e, n[i]);
        return this
    }
    ;
    function w(t, e, n) {
        var r = t._events;
        if (r === void 0)
            return [];
        var i = r[e];
        return i === void 0 ? [] : typeof i == "function" ? n ? [i.listener || i] : [i] : n ? M(i) : E(i, i.length)
    }
    o.prototype.listeners = function(e) {
        return w(this, e, !0)
    }
    ;
    o.prototype.rawListeners = function(e) {
        return w(this, e, !1)
    }
    ;
    o.listenerCount = function(t, e) {
        return typeof t.listenerCount == "function" ? t.listenerCount(e) : b.call(t, e)
    }
    ;
    o.prototype.listenerCount = b;
    function b(t) {
        var e = this._events;
        if (e !== void 0) {
            var n = e[t];
            if (typeof n == "function")
                return 1;
            if (n !== void 0)
                return n.length
        }
        return 0
    }
    o.prototype.eventNames = function() {
        return this._eventsCount > 0 ? l(this._events) : []
    }
    ;
    function E(t, e) {
        for (var n = new Array(e), r = 0; r < e; ++r)
            n[r] = t[r];
        return n
    }
    function N(t, e) {
        for (; e + 1 < t.length; e++)
            t[e] = t[e + 1];
        t.pop()
    }
    function M(t) {
        for (var e = new Array(t.length), n = 0; n < e.length; ++n)
            e[n] = t[n].listener || t[n];
        return e
    }
    function A(t, e) {
        return new Promise(function(n, r) {
            function i(s) {
                t.removeListener(e, f),
                r(s)
            }
            function f() {
                typeof t.removeListener == "function" && t.removeListener("error", i),
                n([].slice.call(arguments))
            }
            O(t, e, f, {
                once: !0
            }),
            e !== "error" && P(t, i, {
                once: !0
            })
        }
        )
    }
    function P(t, e, n) {
        typeof t.on == "function" && O(t, "error", e, n)
    }
    function O(t, e, n, r) {
        if (typeof t.on == "function")
            r.once ? t.once(e, n) : t.on(e, n);
        else if (typeof t.addEventListener == "function")
            t.addEventListener(e, function i(f) {
                r.once && t.removeEventListener(e, i),
                n(f)
            });
        else
            throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
    }
}
);
export {T as a};
