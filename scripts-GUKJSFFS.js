/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
(function(nt, ln) {
    "use strict";
    typeof module == "object" && typeof module.exports == "object" ? module.exports = nt.document ? ln(nt, !0) : function(De) {
        if (!De.document)
            throw new Error("jQuery requires a window with a document");
        return ln(De)
    }
    : ln(nt)
}
)(typeof window < "u" ? window : this, function(nt, ln) {
    "use strict";
    var De = []
      , Tt = nt.document
      , ne = Object.getPrototypeOf
      , Ce = De.slice
      , Pr = De.concat
      , cn = De.push
      , Fe = De.indexOf
      , Jn = {}
      , fr = Jn.toString
      , dr = Jn.hasOwnProperty
      , qr = dr.toString
      , Zn = qr.call(Object)
      , Xt = {}
      , At = function(t) {
        return typeof t == "function" && typeof t.nodeType != "number"
    }
      , tr = function(t) {
        return t != null && t === t.window
    }
      , br = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function ni(t, n, a) {
        var s, d, g = (a = a || Tt).createElement("script");
        if (g.text = t,
        n)
            for (s in br)
                (d = n[s] || n.getAttribute && n.getAttribute(s)) && g.setAttribute(s, d);
        a.head.appendChild(g).parentNode.removeChild(g)
    }
    function Be(t) {
        return t == null ? t + "" : typeof t == "object" || typeof t == "function" ? Jn[fr.call(t)] || "object" : typeof t
    }
    var Ee = "3.4.1"
      , u = function(t, n) {
        return new u.fn.init(t,n)
    }
      , hr = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function fi(t) {
        var n = !!t && "length"in t && t.length
          , a = Be(t);
        return !At(t) && !tr(t) && (a === "array" || n === 0 || typeof n == "number" && 0 < n && n - 1 in t)
    }
    u.fn = u.prototype = {
        jquery: Ee,
        constructor: u,
        length: 0,
        toArray: function() {
            return Ce.call(this)
        },
        get: function(t) {
            return t == null ? Ce.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            var n = u.merge(this.constructor(), t);
            return n.prevObject = this,
            n
        },
        each: function(t) {
            return u.each(this, t)
        },
        map: function(t) {
            return this.pushStack(u.map(this, function(n, a) {
                return t.call(n, a, n)
            }))
        },
        slice: function() {
            return this.pushStack(Ce.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var n = this.length
              , a = +t + (t < 0 ? n : 0);
            return this.pushStack(0 <= a && a < n ? [this[a]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: cn,
        sort: De.sort,
        splice: De.splice
    },
    u.extend = u.fn.extend = function() {
        var t, n, a, s, d, g, m = arguments[0] || {}, w = 1, k = arguments.length, f = !1;
        for (typeof m == "boolean" && (f = m,
        m = arguments[w] || {},
        w++),
        typeof m == "object" || At(m) || (m = {}),
        w === k && (m = this,
        w--); w < k; w++)
            if ((t = arguments[w]) != null)
                for (n in t)
                    s = t[n],
                    n !== "__proto__" && m !== s && (f && s && (u.isPlainObject(s) || (d = Array.isArray(s))) ? (a = m[n],
                    g = d && !Array.isArray(a) ? [] : d || u.isPlainObject(a) ? a : {},
                    d = !1,
                    m[n] = u.extend(f, g, s)) : s !== void 0 && (m[n] = s));
        return m
    }
    ,
    u.extend({
        expando: "jQuery" + (Ee + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isPlainObject: function(t) {
            var n, a;
            return !(!t || fr.call(t) !== "[object Object]") && (!(n = ne(t)) || typeof (a = dr.call(n, "constructor") && n.constructor) == "function" && qr.call(a) === Zn)
        },
        isEmptyObject: function(t) {
            var n;
            for (n in t)
                return !1;
            return !0
        },
        globalEval: function(t, n) {
            ni(t, {
                nonce: n && n.nonce
            })
        },
        each: function(t, n) {
            var a, s = 0;
            if (fi(t))
                for (a = t.length; s < a && n.call(t[s], s, t[s]) !== !1; s++)
                    ;
            else
                for (s in t)
                    if (n.call(t[s], s, t[s]) === !1)
                        break;
            return t
        },
        trim: function(t) {
            return t == null ? "" : (t + "").replace(hr, "")
        },
        makeArray: function(t, n) {
            var a = n || [];
            return t != null && (fi(Object(t)) ? u.merge(a, typeof t == "string" ? [t] : t) : cn.call(a, t)),
            a
        },
        inArray: function(t, n, a) {
            return n == null ? -1 : Fe.call(n, t, a)
        },
        merge: function(t, n) {
            for (var a = +n.length, s = 0, d = t.length; s < a; s++)
                t[d++] = n[s];
            return t.length = d,
            t
        },
        grep: function(t, n, a) {
            for (var s = [], d = 0, g = t.length, m = !a; d < g; d++)
                !n(t[d], d) !== m && s.push(t[d]);
            return s
        },
        map: function(t, n, a) {
            var s, d, g = 0, m = [];
            if (fi(t))
                for (s = t.length; g < s; g++)
                    (d = n(t[g], g, a)) != null && m.push(d);
            else
                for (g in t)
                    (d = n(t[g], g, a)) != null && m.push(d);
            return Pr.apply([], m)
        },
        guid: 1,
        support: Xt
    }),
    typeof Symbol == "function" && (u.fn[Symbol.iterator] = De[Symbol.iterator]),
    u.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, n) {
        Jn["[object " + n + "]"] = n.toLowerCase()
    });
    var Hn = function(t) {
        var n, a, s, d, g, m, w, k, f, S, Y, R, j, ft, yt, ht, me, Xe, be, Dt = "sizzle" + 1 * new Date, Et = t.document, Pt = 0, It = 0, Nt = Jr(), Vn = Jr(), on = Jr(), N = Jr(), P = function(v, T) {
            return v === T && (Y = !0),
            0
        }, F = {}.hasOwnProperty, z = [], ot = z.pop, it = z.push, tt = z.push, st = z.slice, _t = function(v, T) {
            for (var D = 0, q = v.length; D < q; D++)
                if (v[D] === T)
                    return D;
            return -1
        }, qt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", mt = "[\\x20\\t\\r\\n\\f]", Ct = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", bt = "\\[" + mt + "*(" + Ct + ")(?:" + mt + "*([*^$|!~]?=)" + mt + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Ct + "))|)" + mt + "*\\]", Te = ":(" + Ct + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + bt + ")*)|.*)\\)|)", Zt = new RegExp(mt + "+","g"), zt = new RegExp("^" + mt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + mt + "+$","g"), an = new RegExp("^" + mt + "*," + mt + "*"), sn = new RegExp("^" + mt + "*([>+~]|" + mt + ")" + mt + "*"), Sn = new RegExp(mt + "|>"), Kr = new RegExp(Te), Ti = new RegExp("^" + Ct + "$"), gi = {
            ID: new RegExp("^#(" + Ct + ")"),
            CLASS: new RegExp("^\\.(" + Ct + ")"),
            TAG: new RegExp("^(" + Ct + "|[*])"),
            ATTR: new RegExp("^" + bt),
            PSEUDO: new RegExp("^" + Te),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + mt + "*(even|odd|(([+-]|)(\\d*)n|)" + mt + "*(?:([+-]|)" + mt + "*(\\d+)|))" + mt + "*\\)|)","i"),
            bool: new RegExp("^(?:" + qt + ")$","i"),
            needsContext: new RegExp("^" + mt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + mt + "*((?:-\\d)?\\d*)" + mt + "*\\)|)(?=[^-]|$)","i")
        }, Vi = /HTML$/i, Gi = /^(?:input|select|textarea|button)$/i, Qi = /^h\d$/i, mi = /^[^{]+\{\s*\[native \w/, Ki = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Oi = /[+~]/, yr = new RegExp("\\\\([\\da-f]{1,6}" + mt + "?|(" + mt + ")|.)","ig"), _r = function(v, T, D) {
            var q = "0x" + T - 65536;
            return q != q || D ? T : q < 0 ? String.fromCharCode(q + 65536) : String.fromCharCode(q >> 10 | 55296, 1023 & q | 56320)
        }, Hi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Pi = function(v, T) {
            return T ? v === "\0" ? "\uFFFD" : v.slice(0, -1) + "\\" + v.charCodeAt(v.length - 1).toString(16) + " " : "\\" + v
        }, ki = function() {
            R()
        }, sr = li(function(v) {
            return v.disabled === !0 && v.nodeName.toLowerCase() === "fieldset"
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            tt.apply(z = st.call(Et.childNodes), Et.childNodes),
            z[Et.childNodes.length].nodeType
        } catch {
            tt = {
                apply: z.length ? function(T, D) {
                    it.apply(T, st.call(D))
                }
                : function(T, D) {
                    for (var q = T.length, O = 0; T[q++] = D[O++]; )
                        ;
                    T.length = q - 1
                }
            }
        }
        function le(v, T, D, q) {
            var O, W, K, rt, lt, Ot, St, Mt = T && T.ownerDocument, Gt = T ? T.nodeType : 9;
            if (D = D || [],
            typeof v != "string" || !v || Gt !== 1 && Gt !== 9 && Gt !== 11)
                return D;
            if (!q && ((T ? T.ownerDocument || T : Et) !== j && R(T),
            T = T || j,
            yt)) {
                if (Gt !== 11 && (lt = Ki.exec(v)))
                    if (O = lt[1]) {
                        if (Gt === 9) {
                            if (!(K = T.getElementById(O)))
                                return D;
                            if (K.id === O)
                                return D.push(K),
                                D
                        } else if (Mt && (K = Mt.getElementById(O)) && be(T, K) && K.id === O)
                            return D.push(K),
                            D
                    } else {
                        if (lt[2])
                            return tt.apply(D, T.getElementsByTagName(v)),
                            D;
                        if ((O = lt[3]) && a.getElementsByClassName && T.getElementsByClassName)
                            return tt.apply(D, T.getElementsByClassName(O)),
                            D
                    }
                if (a.qsa && !N[v + " "] && (!ht || !ht.test(v)) && (Gt !== 1 || T.nodeName.toLowerCase() !== "object")) {
                    if (St = v,
                    Mt = T,
                    Gt === 1 && Sn.test(v)) {
                        for ((rt = T.getAttribute("id")) ? rt = rt.replace(Hi, Pi) : T.setAttribute("id", rt = Dt),
                        W = (Ot = m(v)).length; W--; )
                            Ot[W] = "#" + rt + " " + vi(Ot[W]);
                        St = Ot.join(","),
                        Mt = Oi.test(v) && Ni(T.parentNode) || T
                    }
                    try {
                        return tt.apply(D, Mt.querySelectorAll(St)),
                        D
                    } catch {
                        N(v, !0)
                    } finally {
                        rt === Dt && T.removeAttribute("id")
                    }
                }
            }
            return k(v.replace(zt, "$1"), T, D, q)
        }
        function Jr() {
            var v = [];
            return function T(D, q) {
                return v.push(D + " ") > s.cacheLength && delete T[v.shift()],
                T[D + " "] = q
            }
        }
        function Gn(v) {
            return v[Dt] = !0,
            v
        }
        function ur(v) {
            var T = j.createElement("fieldset");
            try {
                return !!v(T)
            } catch {
                return !1
            } finally {
                T.parentNode && T.parentNode.removeChild(T),
                T = null
            }
        }
        function Di(v, T) {
            for (var D = v.split("|"), q = D.length; q--; )
                s.attrHandle[D[q]] = T
        }
        function Fr(v, T) {
            var D = T && v
              , q = D && v.nodeType === 1 && T.nodeType === 1 && v.sourceIndex - T.sourceIndex;
            if (q)
                return q;
            if (D) {
                for (; D = D.nextSibling; )
                    if (D === T)
                        return -1
            }
            return v ? 1 : -1
        }
        function Br(v) {
            return function(T) {
                return T.nodeName.toLowerCase() === "input" && T.type === v
            }
        }
        function Or(v) {
            return function(T) {
                var D = T.nodeName.toLowerCase();
                return (D === "input" || D === "button") && T.type === v
            }
        }
        function Xi(v) {
            return function(T) {
                return "form"in T ? T.parentNode && T.disabled === !1 ? "label"in T ? "label"in T.parentNode ? T.parentNode.disabled === v : T.disabled === v : T.isDisabled === v || T.isDisabled !== !v && sr(T) === v : T.disabled === v : "label"in T && T.disabled === v
            }
        }
        function Zr(v) {
            return Gn(function(T) {
                return T = +T,
                Gn(function(D, q) {
                    for (var O, W = v([], D.length, T), K = W.length; K--; )
                        D[O = W[K]] && (D[O] = !(q[O] = D[O]))
                })
            })
        }
        function Ni(v) {
            return v && typeof v.getElementsByTagName < "u" && v
        }
        for (n in a = le.support = {},
        g = le.isXML = function(v) {
            var T = v.namespaceURI
              , D = (v.ownerDocument || v).documentElement;
            return !Vi.test(T || D && D.nodeName || "HTML")
        }
        ,
        R = le.setDocument = function(v) {
            var T, D, q = v ? v.ownerDocument || v : Et;
            return q !== j && q.nodeType === 9 && q.documentElement && (ft = (j = q).documentElement,
            yt = !g(j),
            Et !== j && (D = j.defaultView) && D.top !== D && (D.addEventListener ? D.addEventListener("unload", ki, !1) : D.attachEvent && D.attachEvent("onunload", ki)),
            a.attributes = ur(function(O) {
                return O.className = "i",
                !O.getAttribute("className")
            }),
            a.getElementsByTagName = ur(function(O) {
                return O.appendChild(j.createComment("")),
                !O.getElementsByTagName("*").length
            }),
            a.getElementsByClassName = mi.test(j.getElementsByClassName),
            a.getById = ur(function(O) {
                return ft.appendChild(O).id = Dt,
                !j.getElementsByName || !j.getElementsByName(Dt).length
            }),
            a.getById ? (s.filter.ID = function(O) {
                var W = O.replace(yr, _r);
                return function(K) {
                    return K.getAttribute("id") === W
                }
            }
            ,
            s.find.ID = function(O, W) {
                if (typeof W.getElementById < "u" && yt) {
                    var K = W.getElementById(O);
                    return K ? [K] : []
                }
            }
            ) : (s.filter.ID = function(O) {
                var W = O.replace(yr, _r);
                return function(K) {
                    var rt = typeof K.getAttributeNode < "u" && K.getAttributeNode("id");
                    return rt && rt.value === W
                }
            }
            ,
            s.find.ID = function(O, W) {
                if (typeof W.getElementById < "u" && yt) {
                    var K, rt, lt, Ot = W.getElementById(O);
                    if (Ot) {
                        if ((K = Ot.getAttributeNode("id")) && K.value === O)
                            return [Ot];
                        for (lt = W.getElementsByName(O),
                        rt = 0; Ot = lt[rt++]; )
                            if ((K = Ot.getAttributeNode("id")) && K.value === O)
                                return [Ot]
                    }
                    return []
                }
            }
            ),
            s.find.TAG = a.getElementsByTagName ? function(O, W) {
                return typeof W.getElementsByTagName < "u" ? W.getElementsByTagName(O) : a.qsa ? W.querySelectorAll(O) : void 0
            }
            : function(O, W) {
                var K, rt = [], lt = 0, Ot = W.getElementsByTagName(O);
                if (O === "*") {
                    for (; K = Ot[lt++]; )
                        K.nodeType === 1 && rt.push(K);
                    return rt
                }
                return Ot
            }
            ,
            s.find.CLASS = a.getElementsByClassName && function(O, W) {
                if (typeof W.getElementsByClassName < "u" && yt)
                    return W.getElementsByClassName(O)
            }
            ,
            me = [],
            ht = [],
            (a.qsa = mi.test(j.querySelectorAll)) && (ur(function(O) {
                ft.appendChild(O).innerHTML = "<a id='" + Dt + "'></a><select id='" + Dt + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                O.querySelectorAll("[msallowcapture^='']").length && ht.push("[*^$]=" + mt + `*(?:''|"")`),
                O.querySelectorAll("[selected]").length || ht.push("\\[" + mt + "*(?:value|" + qt + ")"),
                O.querySelectorAll("[id~=" + Dt + "-]").length || ht.push("~="),
                O.querySelectorAll(":checked").length || ht.push(":checked"),
                O.querySelectorAll("a#" + Dt + "+*").length || ht.push(".#.+[+~]")
            }),
            ur(function(O) {
                O.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var W = j.createElement("input");
                W.setAttribute("type", "hidden"),
                O.appendChild(W).setAttribute("name", "D"),
                O.querySelectorAll("[name=d]").length && ht.push("name" + mt + "*[*^$|!~]?="),
                O.querySelectorAll(":enabled").length !== 2 && ht.push(":enabled", ":disabled"),
                ft.appendChild(O).disabled = !0,
                O.querySelectorAll(":disabled").length !== 2 && ht.push(":enabled", ":disabled"),
                O.querySelectorAll("*,:x"),
                ht.push(",.*:")
            })),
            (a.matchesSelector = mi.test(Xe = ft.matches || ft.webkitMatchesSelector || ft.mozMatchesSelector || ft.oMatchesSelector || ft.msMatchesSelector)) && ur(function(O) {
                a.disconnectedMatch = Xe.call(O, "*"),
                Xe.call(O, "[s!='']:x"),
                me.push("!=", Te)
            }),
            ht = ht.length && new RegExp(ht.join("|")),
            me = me.length && new RegExp(me.join("|")),
            T = mi.test(ft.compareDocumentPosition),
            be = T || mi.test(ft.contains) ? function(O, W) {
                var K = O.nodeType === 9 ? O.documentElement : O
                  , rt = W && W.parentNode;
                return O === rt || !(!rt || rt.nodeType !== 1 || !(K.contains ? K.contains(rt) : O.compareDocumentPosition && 16 & O.compareDocumentPosition(rt)))
            }
            : function(O, W) {
                if (W) {
                    for (; W = W.parentNode; )
                        if (W === O)
                            return !0
                }
                return !1
            }
            ,
            P = T ? function(O, W) {
                if (O === W)
                    return Y = !0,
                    0;
                var K = !O.compareDocumentPosition - !W.compareDocumentPosition;
                return K || (1 & (K = (O.ownerDocument || O) === (W.ownerDocument || W) ? O.compareDocumentPosition(W) : 1) || !a.sortDetached && W.compareDocumentPosition(O) === K ? O === j || O.ownerDocument === Et && be(Et, O) ? -1 : W === j || W.ownerDocument === Et && be(Et, W) ? 1 : S ? _t(S, O) - _t(S, W) : 0 : 4 & K ? -1 : 1)
            }
            : function(O, W) {
                if (O === W)
                    return Y = !0,
                    0;
                var K, rt = 0, lt = O.parentNode, Ot = W.parentNode, St = [O], Mt = [W];
                if (!lt || !Ot)
                    return O === j ? -1 : W === j ? 1 : lt ? -1 : Ot ? 1 : S ? _t(S, O) - _t(S, W) : 0;
                if (lt === Ot)
                    return Fr(O, W);
                for (K = O; K = K.parentNode; )
                    St.unshift(K);
                for (K = W; K = K.parentNode; )
                    Mt.unshift(K);
                for (; St[rt] === Mt[rt]; )
                    rt++;
                return rt ? Fr(St[rt], Mt[rt]) : St[rt] === Et ? -1 : Mt[rt] === Et ? 1 : 0
            }
            ),
            j
        }
        ,
        le.matches = function(v, T) {
            return le(v, null, null, T)
        }
        ,
        le.matchesSelector = function(v, T) {
            if ((v.ownerDocument || v) !== j && R(v),
            a.matchesSelector && yt && !N[T + " "] && (!me || !me.test(T)) && (!ht || !ht.test(T)))
                try {
                    var D = Xe.call(v, T);
                    if (D || a.disconnectedMatch || v.document && v.document.nodeType !== 11)
                        return D
                } catch {
                    N(T, !0)
                }
            return 0 < le(T, j, null, [v]).length
        }
        ,
        le.contains = function(v, T) {
            return (v.ownerDocument || v) !== j && R(v),
            be(v, T)
        }
        ,
        le.attr = function(v, T) {
            (v.ownerDocument || v) !== j && R(v);
            var D = s.attrHandle[T.toLowerCase()]
              , q = D && F.call(s.attrHandle, T.toLowerCase()) ? D(v, T, !yt) : void 0;
            return q !== void 0 ? q : a.attributes || !yt ? v.getAttribute(T) : (q = v.getAttributeNode(T)) && q.specified ? q.value : null
        }
        ,
        le.escape = function(v) {
            return (v + "").replace(Hi, Pi)
        }
        ,
        le.error = function(v) {
            throw new Error("Syntax error, unrecognized expression: " + v)
        }
        ,
        le.uniqueSort = function(v) {
            var T, D = [], q = 0, O = 0;
            if (Y = !a.detectDuplicates,
            S = !a.sortStable && v.slice(0),
            v.sort(P),
            Y) {
                for (; T = v[O++]; )
                    T === v[O] && (q = D.push(O));
                for (; q--; )
                    v.splice(D[q], 1)
            }
            return S = null,
            v
        }
        ,
        d = le.getText = function(v) {
            var T, D = "", q = 0, O = v.nodeType;
            if (O) {
                if (O === 1 || O === 9 || O === 11) {
                    if (typeof v.textContent == "string")
                        return v.textContent;
                    for (v = v.firstChild; v; v = v.nextSibling)
                        D += d(v)
                } else if (O === 3 || O === 4)
                    return v.nodeValue
            } else
                for (; T = v[q++]; )
                    D += d(T);
            return D
        }
        ,
        (s = le.selectors = {
            cacheLength: 50,
            createPseudo: Gn,
            match: gi,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(v) {
                    return v[1] = v[1].replace(yr, _r),
                    v[3] = (v[3] || v[4] || v[5] || "").replace(yr, _r),
                    v[2] === "~=" && (v[3] = " " + v[3] + " "),
                    v.slice(0, 4)
                },
                CHILD: function(v) {
                    return v[1] = v[1].toLowerCase(),
                    v[1].slice(0, 3) === "nth" ? (v[3] || le.error(v[0]),
                    v[4] = +(v[4] ? v[5] + (v[6] || 1) : 2 * (v[3] === "even" || v[3] === "odd")),
                    v[5] = +(v[7] + v[8] || v[3] === "odd")) : v[3] && le.error(v[0]),
                    v
                },
                PSEUDO: function(v) {
                    var T, D = !v[6] && v[2];
                    return gi.CHILD.test(v[0]) ? null : (v[3] ? v[2] = v[4] || v[5] || "" : D && Kr.test(D) && (T = m(D, !0)) && (T = D.indexOf(")", D.length - T) - D.length) && (v[0] = v[0].slice(0, T),
                    v[2] = D.slice(0, T)),
                    v.slice(0, 3))
                }
            },
            filter: {
                TAG: function(v) {
                    var T = v.replace(yr, _r).toLowerCase();
                    return v === "*" ? function() {
                        return !0
                    }
                    : function(D) {
                        return D.nodeName && D.nodeName.toLowerCase() === T
                    }
                },
                CLASS: function(v) {
                    var T = Nt[v + " "];
                    return T || (T = new RegExp("(^|" + mt + ")" + v + "(" + mt + "|$)")) && Nt(v, function(D) {
                        return T.test(typeof D.className == "string" && D.className || typeof D.getAttribute < "u" && D.getAttribute("class") || "")
                    })
                },
                ATTR: function(v, T, D) {
                    return function(q) {
                        var O = le.attr(q, v);
                        return O == null ? T === "!=" : !T || (O += "",
                        T === "=" ? O === D : T === "!=" ? O !== D : T === "^=" ? D && O.indexOf(D) === 0 : T === "*=" ? D && -1 < O.indexOf(D) : T === "$=" ? D && O.slice(-D.length) === D : T === "~=" ? -1 < (" " + O.replace(Zt, " ") + " ").indexOf(D) : T === "|=" && (O === D || O.slice(0, D.length + 1) === D + "-"))
                    }
                },
                CHILD: function(v, T, D, q, O) {
                    var W = v.slice(0, 3) !== "nth"
                      , K = v.slice(-4) !== "last"
                      , rt = T === "of-type";
                    return q === 1 && O === 0 ? function(lt) {
                        return !!lt.parentNode
                    }
                    : function(lt, Ot, St) {
                        var Mt, Gt, Ve, Lt, en, un, An = W !== K ? "nextSibling" : "previousSibling", ve = lt.parentNode, xr = rt && lt.nodeName.toLowerCase(), xn = !St && !rt, Je = !1;
                        if (ve) {
                            if (W) {
                                for (; An; ) {
                                    for (Lt = lt; Lt = Lt[An]; )
                                        if (rt ? Lt.nodeName.toLowerCase() === xr : Lt.nodeType === 1)
                                            return !1;
                                    un = An = v === "only" && !un && "nextSibling"
                                }
                                return !0
                            }
                            if (un = [K ? ve.firstChild : ve.lastChild],
                            K && xn) {
                                for (Je = (en = (Mt = (Gt = (Ve = (Lt = ve)[Dt] || (Lt[Dt] = {}))[Lt.uniqueID] || (Ve[Lt.uniqueID] = {}))[v] || [])[0] === Pt && Mt[1]) && Mt[2],
                                Lt = en && ve.childNodes[en]; Lt = ++en && Lt && Lt[An] || (Je = en = 0) || un.pop(); )
                                    if (Lt.nodeType === 1 && ++Je && Lt === lt) {
                                        Gt[v] = [Pt, en, Je];
                                        break
                                    }
                            } else if (xn && (Je = en = (Mt = (Gt = (Ve = (Lt = lt)[Dt] || (Lt[Dt] = {}))[Lt.uniqueID] || (Ve[Lt.uniqueID] = {}))[v] || [])[0] === Pt && Mt[1]),
                            Je === !1)
                                for (; (Lt = ++en && Lt && Lt[An] || (Je = en = 0) || un.pop()) && !((rt ? Lt.nodeName.toLowerCase() === xr : Lt.nodeType === 1) && ++Je && (xn && ((Gt = (Ve = Lt[Dt] || (Lt[Dt] = {}))[Lt.uniqueID] || (Ve[Lt.uniqueID] = {}))[v] = [Pt, Je]),
                                Lt === lt)); )
                                    ;
                            return (Je -= O) === q || Je % q == 0 && 0 <= Je / q
                        }
                    }
                },
                PSEUDO: function(v, T) {
                    var D, q = s.pseudos[v] || s.setFilters[v.toLowerCase()] || le.error("unsupported pseudo: " + v);
                    return q[Dt] ? q(T) : 1 < q.length ? (D = [v, v, "", T],
                    s.setFilters.hasOwnProperty(v.toLowerCase()) ? Gn(function(O, W) {
                        for (var K, rt = q(O, T), lt = rt.length; lt--; )
                            O[K = _t(O, rt[lt])] = !(W[K] = rt[lt])
                    }) : function(O) {
                        return q(O, 0, D)
                    }
                    ) : q
                }
            },
            pseudos: {
                not: Gn(function(v) {
                    var T = []
                      , D = []
                      , q = w(v.replace(zt, "$1"));
                    return q[Dt] ? Gn(function(O, W, K, rt) {
                        for (var lt, Ot = q(O, null, rt, []), St = O.length; St--; )
                            (lt = Ot[St]) && (O[St] = !(W[St] = lt))
                    }) : function(O, W, K) {
                        return T[0] = O,
                        q(T, null, K, D),
                        T[0] = null,
                        !D.pop()
                    }
                }),
                has: Gn(function(v) {
                    return function(T) {
                        return 0 < le(v, T).length
                    }
                }),
                contains: Gn(function(v) {
                    return v = v.replace(yr, _r),
                    function(T) {
                        return -1 < (T.textContent || d(T)).indexOf(v)
                    }
                }),
                lang: Gn(function(v) {
                    return Ti.test(v || "") || le.error("unsupported lang: " + v),
                    v = v.replace(yr, _r).toLowerCase(),
                    function(T) {
                        var D;
                        do
                            if (D = yt ? T.lang : T.getAttribute("xml:lang") || T.getAttribute("lang"))
                                return (D = D.toLowerCase()) === v || D.indexOf(v + "-") === 0;
                        while ((T = T.parentNode) && T.nodeType === 1);
                        return !1
                    }
                }),
                target: function(v) {
                    var T = t.location && t.location.hash;
                    return T && T.slice(1) === v.id
                },
                root: function(v) {
                    return v === ft
                },
                focus: function(v) {
                    return v === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(v.type || v.href || ~v.tabIndex)
                },
                enabled: Xi(!1),
                disabled: Xi(!0),
                checked: function(v) {
                    var T = v.nodeName.toLowerCase();
                    return T === "input" && !!v.checked || T === "option" && !!v.selected
                },
                selected: function(v) {
                    return v.parentNode && v.parentNode.selectedIndex,
                    v.selected === !0
                },
                empty: function(v) {
                    for (v = v.firstChild; v; v = v.nextSibling)
                        if (v.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(v) {
                    return !s.pseudos.empty(v)
                },
                header: function(v) {
                    return Qi.test(v.nodeName)
                },
                input: function(v) {
                    return Gi.test(v.nodeName)
                },
                button: function(v) {
                    var T = v.nodeName.toLowerCase();
                    return T === "input" && v.type === "button" || T === "button"
                },
                text: function(v) {
                    var T;
                    return v.nodeName.toLowerCase() === "input" && v.type === "text" && ((T = v.getAttribute("type")) == null || T.toLowerCase() === "text")
                },
                first: Zr(function() {
                    return [0]
                }),
                last: Zr(function(v, T) {
                    return [T - 1]
                }),
                eq: Zr(function(v, T, D) {
                    return [D < 0 ? D + T : D]
                }),
                even: Zr(function(v, T) {
                    for (var D = 0; D < T; D += 2)
                        v.push(D);
                    return v
                }),
                odd: Zr(function(v, T) {
                    for (var D = 1; D < T; D += 2)
                        v.push(D);
                    return v
                }),
                lt: Zr(function(v, T, D) {
                    for (var q = D < 0 ? D + T : T < D ? T : D; 0 <= --q; )
                        v.push(q);
                    return v
                }),
                gt: Zr(function(v, T, D) {
                    for (var q = D < 0 ? D + T : D; ++q < T; )
                        v.push(q);
                    return v
                })
            }
        }).pseudos.nth = s.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            s.pseudos[n] = Br(n);
        for (n in {
            submit: !0,
            reset: !0
        })
            s.pseudos[n] = Or(n);
        function Li() {}
        function vi(v) {
            for (var T = 0, D = v.length, q = ""; T < D; T++)
                q += v[T].value;
            return q
        }
        function li(v, T, D) {
            var q = T.dir
              , O = T.next
              , W = O || q
              , K = D && W === "parentNode"
              , rt = It++;
            return T.first ? function(lt, Ot, St) {
                for (; lt = lt[q]; )
                    if (lt.nodeType === 1 || K)
                        return v(lt, Ot, St);
                return !1
            }
            : function(lt, Ot, St) {
                var Mt, Gt, Ve, Lt = [Pt, rt];
                if (St) {
                    for (; lt = lt[q]; )
                        if ((lt.nodeType === 1 || K) && v(lt, Ot, St))
                            return !0
                } else
                    for (; lt = lt[q]; )
                        if (lt.nodeType === 1 || K)
                            if (Gt = (Ve = lt[Dt] || (lt[Dt] = {}))[lt.uniqueID] || (Ve[lt.uniqueID] = {}),
                            O && O === lt.nodeName.toLowerCase())
                                lt = lt[q] || lt;
                            else {
                                if ((Mt = Gt[W]) && Mt[0] === Pt && Mt[1] === rt)
                                    return Lt[2] = Mt[2];
                                if ((Gt[W] = Lt)[2] = v(lt, Ot, St))
                                    return !0
                            }
                return !1
            }
        }
        function yi(v) {
            return 1 < v.length ? function(T, D, q) {
                for (var O = v.length; O--; )
                    if (!v[O](T, D, q))
                        return !1;
                return !0
            }
            : v[0]
        }
        function ci(v, T, D, q, O) {
            for (var W, K = [], rt = 0, lt = v.length, Ot = T != null; rt < lt; rt++)
                (W = v[rt]) && (D && !D(W, q, O) || (K.push(W),
                Ot && T.push(rt)));
            return K
        }
        function Ri(v, T, D, q, O, W) {
            return q && !q[Dt] && (q = Ri(q)),
            O && !O[Dt] && (O = Ri(O, W)),
            Gn(function(K, rt, lt, Ot) {
                var St, Mt, Gt, Ve = [], Lt = [], en = rt.length, un = K || function(xr, xn, Je) {
                    for (var lr = 0, Ei = xn.length; lr < Ei; lr++)
                        le(xr, xn[lr], Je);
                    return Je
                }(T || "*", lt.nodeType ? [lt] : lt, []), An = !v || !K && T ? un : ci(un, Ve, v, lt, Ot), ve = D ? O || (K ? v : en || q) ? [] : rt : An;
                if (D && D(An, ve, lt, Ot),
                q)
                    for (St = ci(ve, Lt),
                    q(St, [], lt, Ot),
                    Mt = St.length; Mt--; )
                        (Gt = St[Mt]) && (ve[Lt[Mt]] = !(An[Lt[Mt]] = Gt));
                if (K) {
                    if (O || v) {
                        if (O) {
                            for (St = [],
                            Mt = ve.length; Mt--; )
                                (Gt = ve[Mt]) && St.push(An[Mt] = Gt);
                            O(null, ve = [], St, Ot)
                        }
                        for (Mt = ve.length; Mt--; )
                            (Gt = ve[Mt]) && -1 < (St = O ? _t(K, Gt) : Ve[Mt]) && (K[St] = !(rt[St] = Gt))
                    }
                } else
                    ve = ci(ve === rt ? ve.splice(en, ve.length) : ve),
                    O ? O(null, rt, ve, Ot) : tt.apply(rt, ve)
            })
        }
        function Ci(v) {
            for (var T, D, q, O = v.length, W = s.relative[v[0].type], K = W || s.relative[" "], rt = W ? 1 : 0, lt = li(function(Mt) {
                return Mt === T
            }, K, !0), Ot = li(function(Mt) {
                return -1 < _t(T, Mt)
            }, K, !0), St = [function(Mt, Gt, Ve) {
                var Lt = !W && (Ve || Gt !== f) || ((T = Gt).nodeType ? lt(Mt, Gt, Ve) : Ot(Mt, Gt, Ve));
                return T = null,
                Lt
            }
            ]; rt < O; rt++)
                if (D = s.relative[v[rt].type])
                    St = [li(yi(St), D)];
                else {
                    if ((D = s.filter[v[rt].type].apply(null, v[rt].matches))[Dt]) {
                        for (q = ++rt; q < O && !s.relative[v[q].type]; q++)
                            ;
                        return Ri(1 < rt && yi(St), 1 < rt && vi(v.slice(0, rt - 1).concat({
                            value: v[rt - 2].type === " " ? "*" : ""
                        })).replace(zt, "$1"), D, rt < q && Ci(v.slice(rt, q)), q < O && Ci(v = v.slice(q)), q < O && vi(v))
                    }
                    St.push(D)
                }
            return yi(St)
        }
        return Li.prototype = s.filters = s.pseudos,
        s.setFilters = new Li,
        m = le.tokenize = function(v, T) {
            var D, q, O, W, K, rt, lt, Ot = Vn[v + " "];
            if (Ot)
                return T ? 0 : Ot.slice(0);
            for (K = v,
            rt = [],
            lt = s.preFilter; K; ) {
                for (W in D && !(q = an.exec(K)) || (q && (K = K.slice(q[0].length) || K),
                rt.push(O = [])),
                D = !1,
                (q = sn.exec(K)) && (D = q.shift(),
                O.push({
                    value: D,
                    type: q[0].replace(zt, " ")
                }),
                K = K.slice(D.length)),
                s.filter)
                    !(q = gi[W].exec(K)) || lt[W] && !(q = lt[W](q)) || (D = q.shift(),
                    O.push({
                        value: D,
                        type: W,
                        matches: q
                    }),
                    K = K.slice(D.length));
                if (!D)
                    break
            }
            return T ? K.length : K ? le.error(v) : Vn(v, rt).slice(0)
        }
        ,
        w = le.compile = function(v, T) {
            var D, q, O, W, K, rt, lt = [], Ot = [], St = on[v + " "];
            if (!St) {
                for (T || (T = m(v)),
                D = T.length; D--; )
                    (St = Ci(T[D]))[Dt] ? lt.push(St) : Ot.push(St);
                (St = on(v, (q = Ot,
                W = 0 < (O = lt).length,
                K = 0 < q.length,
                rt = function(Mt, Gt, Ve, Lt, en) {
                    var un, An, ve, xr = 0, xn = "0", Je = Mt && [], lr = [], Ei = f, zi = Mt || K && s.find.TAG("*", en), Yi = Pt += Ei == null ? 1 : Math.random() || .1, Ji = zi.length;
                    for (en && (f = Gt === j || Gt || en); xn !== Ji && (un = zi[xn]) != null; xn++) {
                        if (K && un) {
                            for (An = 0,
                            Gt || un.ownerDocument === j || (R(un),
                            Ve = !yt); ve = q[An++]; )
                                if (ve(un, Gt || j, Ve)) {
                                    Lt.push(un);
                                    break
                                }
                            en && (Pt = Yi)
                        }
                        W && ((un = !ve && un) && xr--,
                        Mt && Je.push(un))
                    }
                    if (xr += xn,
                    W && xn !== xr) {
                        for (An = 0; ve = O[An++]; )
                            ve(Je, lr, Gt, Ve);
                        if (Mt) {
                            if (0 < xr)
                                for (; xn--; )
                                    Je[xn] || lr[xn] || (lr[xn] = ot.call(Lt));
                            lr = ci(lr)
                        }
                        tt.apply(Lt, lr),
                        en && !Mt && 0 < lr.length && 1 < xr + O.length && le.uniqueSort(Lt)
                    }
                    return en && (Pt = Yi,
                    f = Ei),
                    Je
                }
                ,
                W ? Gn(rt) : rt))).selector = v
            }
            return St
        }
        ,
        k = le.select = function(v, T, D, q) {
            var O, W, K, rt, lt, Ot = typeof v == "function" && v, St = !q && m(v = Ot.selector || v);
            if (D = D || [],
            St.length === 1) {
                if (2 < (W = St[0] = St[0].slice(0)).length && (K = W[0]).type === "ID" && T.nodeType === 9 && yt && s.relative[W[1].type]) {
                    if (!(T = (s.find.ID(K.matches[0].replace(yr, _r), T) || [])[0]))
                        return D;
                    Ot && (T = T.parentNode),
                    v = v.slice(W.shift().value.length)
                }
                for (O = gi.needsContext.test(v) ? 0 : W.length; O-- && (K = W[O],
                !s.relative[rt = K.type]); )
                    if ((lt = s.find[rt]) && (q = lt(K.matches[0].replace(yr, _r), Oi.test(W[0].type) && Ni(T.parentNode) || T))) {
                        if (W.splice(O, 1),
                        !(v = q.length && vi(W)))
                            return tt.apply(D, q),
                            D;
                        break
                    }
            }
            return (Ot || w(v, St))(q, T, !yt, D, !T || Oi.test(v) && Ni(T.parentNode) || T),
            D
        }
        ,
        a.sortStable = Dt.split("").sort(P).join("") === Dt,
        a.detectDuplicates = !!Y,
        R(),
        a.sortDetached = ur(function(v) {
            return 1 & v.compareDocumentPosition(j.createElement("fieldset"))
        }),
        ur(function(v) {
            return v.innerHTML = "<a href='#'></a>",
            v.firstChild.getAttribute("href") === "#"
        }) || Di("type|href|height|width", function(v, T, D) {
            if (!D)
                return v.getAttribute(T, T.toLowerCase() === "type" ? 1 : 2)
        }),
        a.attributes && ur(function(v) {
            return v.innerHTML = "<input/>",
            v.firstChild.setAttribute("value", ""),
            v.firstChild.getAttribute("value") === ""
        }) || Di("value", function(v, T, D) {
            if (!D && v.nodeName.toLowerCase() === "input")
                return v.defaultValue
        }),
        ur(function(v) {
            return v.getAttribute("disabled") == null
        }) || Di(qt, function(v, T, D) {
            var q;
            if (!D)
                return v[T] === !0 ? T.toLowerCase() : (q = v.getAttributeNode(T)) && q.specified ? q.value : null
        }),
        le
    }(nt);
    u.find = Hn,
    u.expr = Hn.selectors,
    u.expr[":"] = u.expr.pseudos,
    u.uniqueSort = u.unique = Hn.uniqueSort,
    u.text = Hn.getText,
    u.isXMLDoc = Hn.isXML,
    u.contains = Hn.contains,
    u.escapeSelector = Hn.escape;
    var wn = function(t, n, a) {
        for (var s = [], d = a !== void 0; (t = t[n]) && t.nodeType !== 9; )
            if (t.nodeType === 1) {
                if (d && u(t).is(a))
                    break;
                s.push(t)
            }
        return s
    }
      , Hr = function(t, n) {
        for (var a = []; t; t = t.nextSibling)
            t.nodeType === 1 && t !== n && a.push(t);
        return a
    }
      , er = u.expr.match.needsContext;
    function ye(t, n) {
        return t.nodeName && t.nodeName.toLowerCase() === n.toLowerCase()
    }
    var Xr = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function bn(t, n, a) {
        return At(n) ? u.grep(t, function(s, d) {
            return !!n.call(s, d, s) !== a
        }) : n.nodeType ? u.grep(t, function(s) {
            return s === n !== a
        }) : typeof n != "string" ? u.grep(t, function(s) {
            return -1 < Fe.call(n, s) !== a
        }) : u.filter(n, t, a)
    }
    u.filter = function(t, n, a) {
        var s = n[0];
        return a && (t = ":not(" + t + ")"),
        n.length === 1 && s.nodeType === 1 ? u.find.matchesSelector(s, t) ? [s] : [] : u.find.matches(t, u.grep(n, function(d) {
            return d.nodeType === 1
        }))
    }
    ,
    u.fn.extend({
        find: function(t) {
            var n, a, s = this.length, d = this;
            if (typeof t != "string")
                return this.pushStack(u(t).filter(function() {
                    for (n = 0; n < s; n++)
                        if (u.contains(d[n], this))
                            return !0
                }));
            for (a = this.pushStack([]),
            n = 0; n < s; n++)
                u.find(t, d[n], a);
            return 1 < s ? u.uniqueSort(a) : a
        },
        filter: function(t) {
            return this.pushStack(bn(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(bn(this, t || [], !0))
        },
        is: function(t) {
            return !!bn(this, typeof t == "string" && er.test(t) ? u(t) : t || [], !1).length
        }
    });
    var Xn, Mn = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (u.fn.init = function(t, n, a) {
        var s, d;
        if (!t)
            return this;
        if (a = a || Xn,
        typeof t == "string") {
            if (!(s = t[0] === "<" && t[t.length - 1] === ">" && 3 <= t.length ? [null, t, null] : Mn.exec(t)) || !s[1] && n)
                return !n || n.jquery ? (n || a).find(t) : this.constructor(n).find(t);
            if (s[1]) {
                if (n = n instanceof u ? n[0] : n,
                u.merge(this, u.parseHTML(s[1], n && n.nodeType ? n.ownerDocument || n : Tt, !0)),
                Xr.test(s[1]) && u.isPlainObject(n))
                    for (s in n)
                        At(this[s]) ? this[s](n[s]) : this.attr(s, n[s]);
                return this
            }
            return (d = Tt.getElementById(s[2])) && (this[0] = d,
            this.length = 1),
            this
        }
        return t.nodeType ? (this[0] = t,
        this.length = 1,
        this) : At(t) ? a.ready !== void 0 ? a.ready(t) : t(u) : u.makeArray(t, this)
    }
    ).prototype = u.fn,
    Xn = u(Tt);
    var Tr = /^(?:parents|prev(?:Until|All))/
      , fn = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function jn(t, n) {
        for (; (t = t[n]) && t.nodeType !== 1; )
            ;
        return t
    }
    u.fn.extend({
        has: function(t) {
            var n = u(t, this)
              , a = n.length;
            return this.filter(function() {
                for (var s = 0; s < a; s++)
                    if (u.contains(this, n[s]))
                        return !0
            })
        },
        closest: function(t, n) {
            var a, s = 0, d = this.length, g = [], m = typeof t != "string" && u(t);
            if (!er.test(t)) {
                for (; s < d; s++)
                    for (a = this[s]; a && a !== n; a = a.parentNode)
                        if (a.nodeType < 11 && (m ? -1 < m.index(a) : a.nodeType === 1 && u.find.matchesSelector(a, t))) {
                            g.push(a);
                            break
                        }
            }
            return this.pushStack(1 < g.length ? u.uniqueSort(g) : g)
        },
        index: function(t) {
            return t ? typeof t == "string" ? Fe.call(u(t), this[0]) : Fe.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, n) {
            return this.pushStack(u.uniqueSort(u.merge(this.get(), u(t, n))))
        },
        addBack: function(t) {
            return this.add(t == null ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    u.each({
        parent: function(t) {
            var n = t.parentNode;
            return n && n.nodeType !== 11 ? n : null
        },
        parents: function(t) {
            return wn(t, "parentNode")
        },
        parentsUntil: function(t, n, a) {
            return wn(t, "parentNode", a)
        },
        next: function(t) {
            return jn(t, "nextSibling")
        },
        prev: function(t) {
            return jn(t, "previousSibling")
        },
        nextAll: function(t) {
            return wn(t, "nextSibling")
        },
        prevAll: function(t) {
            return wn(t, "previousSibling")
        },
        nextUntil: function(t, n, a) {
            return wn(t, "nextSibling", a)
        },
        prevUntil: function(t, n, a) {
            return wn(t, "previousSibling", a)
        },
        siblings: function(t) {
            return Hr((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return Hr(t.firstChild)
        },
        contents: function(t) {
            return typeof t.contentDocument < "u" ? t.contentDocument : (ye(t, "template") && (t = t.content || t),
            u.merge([], t.childNodes))
        }
    }, function(t, n) {
        u.fn[t] = function(a, s) {
            var d = u.map(this, n, a);
            return t.slice(-5) !== "Until" && (s = a),
            s && typeof s == "string" && (d = u.filter(s, d)),
            1 < this.length && (fn[t] || u.uniqueSort(d),
            Tr.test(t) && d.reverse()),
            this.pushStack(d)
        }
    });
    var Tn = /[^\x20\t\r\n\f]+/g;
    function nr(t) {
        return t
    }
    function pr(t) {
        throw t
    }
    function Nr(t, n, a, s) {
        var d;
        try {
            t && At(d = t.promise) ? d.call(t).done(n).fail(a) : t && At(d = t.then) ? d.call(t, n, a) : n.apply(void 0, [t].slice(s))
        } catch (g) {
            a.apply(void 0, [g])
        }
    }
    u.Callbacks = function(t) {
        var n, a;
        t = typeof t == "string" ? (n = t,
        a = {},
        u.each(n.match(Tn) || [], function(R, j) {
            a[j] = !0
        }),
        a) : u.extend({}, t);
        var s, d, g, m, w = [], k = [], f = -1, S = function() {
            for (m = m || t.once,
            g = s = !0; k.length; f = -1)
                for (d = k.shift(); ++f < w.length; )
                    w[f].apply(d[0], d[1]) === !1 && t.stopOnFalse && (f = w.length,
                    d = !1);
            t.memory || (d = !1),
            s = !1,
            m && (w = d ? [] : "")
        }, Y = {
            add: function() {
                return w && (d && !s && (f = w.length - 1,
                k.push(d)),
                function R(j) {
                    u.each(j, function(ft, yt) {
                        At(yt) ? t.unique && Y.has(yt) || w.push(yt) : yt && yt.length && Be(yt) !== "string" && R(yt)
                    })
                }(arguments),
                d && !s && S()),
                this
            },
            remove: function() {
                return u.each(arguments, function(R, j) {
                    for (var ft; -1 < (ft = u.inArray(j, w, ft)); )
                        w.splice(ft, 1),
                        ft <= f && f--
                }),
                this
            },
            has: function(R) {
                return R ? -1 < u.inArray(R, w) : 0 < w.length
            },
            empty: function() {
                return w && (w = []),
                this
            },
            disable: function() {
                return m = k = [],
                w = d = "",
                this
            },
            disabled: function() {
                return !w
            },
            lock: function() {
                return m = k = [],
                d || s || (w = d = ""),
                this
            },
            locked: function() {
                return !!m
            },
            fireWith: function(R, j) {
                return m || (j = [R, (j = j || []).slice ? j.slice() : j],
                k.push(j),
                s || S()),
                this
            },
            fire: function() {
                return Y.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!g
            }
        };
        return Y
    }
    ,
    u.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", u.Callbacks("memory"), u.Callbacks("memory"), 2], ["resolve", "done", u.Callbacks("once memory"), u.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", u.Callbacks("once memory"), u.Callbacks("once memory"), 1, "rejected"]]
              , a = "pending"
              , s = {
                state: function() {
                    return a
                },
                always: function() {
                    return d.done(arguments).fail(arguments),
                    this
                },
                catch: function(g) {
                    return s.then(null, g)
                },
                pipe: function() {
                    var g = arguments;
                    return u.Deferred(function(m) {
                        u.each(n, function(w, k) {
                            var f = At(g[k[4]]) && g[k[4]];
                            d[k[1]](function() {
                                var S = f && f.apply(this, arguments);
                                S && At(S.promise) ? S.promise().progress(m.notify).done(m.resolve).fail(m.reject) : m[k[0] + "With"](this, f ? [S] : arguments)
                            })
                        }),
                        g = null
                    }).promise()
                },
                then: function(g, m, w) {
                    var k = 0;
                    function f(S, Y, R, j) {
                        return function() {
                            var ft = this
                              , yt = arguments
                              , ht = function() {
                                var Xe, be;
                                if (!(S < k)) {
                                    if ((Xe = R.apply(ft, yt)) === Y.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    be = Xe && (typeof Xe == "object" || typeof Xe == "function") && Xe.then,
                                    At(be) ? j ? be.call(Xe, f(k, Y, nr, j), f(k, Y, pr, j)) : (k++,
                                    be.call(Xe, f(k, Y, nr, j), f(k, Y, pr, j), f(k, Y, nr, Y.notifyWith))) : (R !== nr && (ft = void 0,
                                    yt = [Xe]),
                                    (j || Y.resolveWith)(ft, yt))
                                }
                            }
                              , me = j ? ht : function() {
                                try {
                                    ht()
                                } catch (Xe) {
                                    u.Deferred.exceptionHook && u.Deferred.exceptionHook(Xe, me.stackTrace),
                                    k <= S + 1 && (R !== pr && (ft = void 0,
                                    yt = [Xe]),
                                    Y.rejectWith(ft, yt))
                                }
                            }
                            ;
                            S ? me() : (u.Deferred.getStackHook && (me.stackTrace = u.Deferred.getStackHook()),
                            nt.setTimeout(me))
                        }
                    }
                    return u.Deferred(function(S) {
                        n[0][3].add(f(0, S, At(w) ? w : nr, S.notifyWith)),
                        n[1][3].add(f(0, S, At(g) ? g : nr)),
                        n[2][3].add(f(0, S, At(m) ? m : pr))
                    }).promise()
                },
                promise: function(g) {
                    return g != null ? u.extend(g, s) : s
                }
            }
              , d = {};
            return u.each(n, function(g, m) {
                var w = m[2]
                  , k = m[5];
                s[m[1]] = w.add,
                k && w.add(function() {
                    a = k
                }, n[3 - g][2].disable, n[3 - g][3].disable, n[0][2].lock, n[0][3].lock),
                w.add(m[3].fire),
                d[m[0]] = function() {
                    return d[m[0] + "With"](this === d ? void 0 : this, arguments),
                    this
                }
                ,
                d[m[0] + "With"] = w.fireWith
            }),
            s.promise(d),
            t && t.call(d, d),
            d
        },
        when: function(t) {
            var n = arguments.length
              , a = n
              , s = Array(a)
              , d = Ce.call(arguments)
              , g = u.Deferred()
              , m = function(w) {
                return function(k) {
                    s[w] = this,
                    d[w] = 1 < arguments.length ? Ce.call(arguments) : k,
                    --n || g.resolveWith(s, d)
                }
            };
            if (n <= 1 && (Nr(t, g.done(m(a)).resolve, g.reject, !n),
            g.state() === "pending" || At(d[a] && d[a].then)))
                return g.then();
            for (; a--; )
                Nr(d[a], m(a), g.reject);
            return g.promise()
        }
    });
    var zr = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    u.Deferred.exceptionHook = function(t, n) {
        nt.console && nt.console.warn && t && zr.test(t.name) && nt.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    u.readyException = function(t) {
        nt.setTimeout(function() {
            throw t
        })
    }
    ;
    var Se = u.Deferred();
    function Qt() {
        Tt.removeEventListener("DOMContentLoaded", Qt),
        nt.removeEventListener("load", Qt),
        u.ready()
    }
    u.fn.ready = function(t) {
        return Se.then(t).catch(function(n) {
            u.readyException(n)
        }),
        this
    }
    ,
    u.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(t) {
            (t === !0 ? --u.readyWait : u.isReady) || (u.isReady = !0) !== t && 0 < --u.readyWait || Se.resolveWith(Tt, [u])
        }
    }),
    u.ready.then = Se.then,
    Tt.readyState === "complete" || Tt.readyState !== "loading" && !Tt.documentElement.doScroll ? nt.setTimeout(u.ready) : (Tt.addEventListener("DOMContentLoaded", Qt),
    nt.addEventListener("load", Qt));
    var Le = function(t, n, a, s, d, g, m) {
        var w = 0
          , k = t.length
          , f = a == null;
        if (Be(a) === "object")
            for (w in d = !0,
            a)
                Le(t, n, w, a[w], !0, g, m);
        else if (s !== void 0 && (d = !0,
        At(s) || (m = !0),
        f && (m ? (n.call(t, s),
        n = null) : (f = n,
        n = function(S, Y, R) {
            return f.call(u(S), R)
        }
        )),
        n))
            for (; w < k; w++)
                n(t[w], a, m ? s : s.call(t[w], w, n(t[w], a)));
        return d ? t : f ? n.call(t) : k ? n(t[0], a) : g
    }
      , di = /^-ms-/
      , kr = /-([a-z])/g;
    function Dr(t, n) {
        return n.toUpperCase()
    }
    function ze(t) {
        return t.replace(di, "ms-").replace(kr, Dr)
    }
    var kn = function(t) {
        return t.nodeType === 1 || t.nodeType === 9 || !+t.nodeType
    };
    function Ae() {
        this.expando = u.expando + Ae.uid++
    }
    Ae.uid = 1,
    Ae.prototype = {
        cache: function(t) {
            var n = t[this.expando];
            return n || (n = {},
            kn(t) && (t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                value: n,
                configurable: !0
            }))),
            n
        },
        set: function(t, n, a) {
            var s, d = this.cache(t);
            if (typeof n == "string")
                d[ze(n)] = a;
            else
                for (s in n)
                    d[ze(s)] = n[s];
            return d
        },
        get: function(t, n) {
            return n === void 0 ? this.cache(t) : t[this.expando] && t[this.expando][ze(n)]
        },
        access: function(t, n, a) {
            return n === void 0 || n && typeof n == "string" && a === void 0 ? this.get(t, n) : (this.set(t, n, a),
            a !== void 0 ? a : n)
        },
        remove: function(t, n) {
            var a, s = t[this.expando];
            if (s !== void 0) {
                if (n !== void 0)
                    for (a = (n = Array.isArray(n) ? n.map(ze) : (n = ze(n))in s ? [n] : n.match(Tn) || []).length; a--; )
                        delete s[n[a]];
                (n === void 0 || u.isEmptyObject(s)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var n = t[this.expando];
            return n !== void 0 && !u.isEmptyObject(n)
        }
    };
    var kt = new Ae
      , Ye = new Ae
      , ri = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Lr = /[A-Z]/g;
    function rr(t, n, a) {
        var s, d;
        if (a === void 0 && t.nodeType === 1)
            if (s = "data-" + n.replace(Lr, "-$&").toLowerCase(),
            typeof (a = t.getAttribute(s)) == "string") {
                try {
                    a = (d = a) === "true" || d !== "false" && (d === "null" ? null : d === +d + "" ? +d : ri.test(d) ? JSON.parse(d) : d)
                } catch {}
                Ye.set(t, n, a)
            } else
                a = void 0;
        return a
    }
    u.extend({
        hasData: function(t) {
            return Ye.hasData(t) || kt.hasData(t)
        },
        data: function(t, n, a) {
            return Ye.access(t, n, a)
        },
        removeData: function(t, n) {
            Ye.remove(t, n)
        },
        _data: function(t, n, a) {
            return kt.access(t, n, a)
        },
        _removeData: function(t, n) {
            kt.remove(t, n)
        }
    }),
    u.fn.extend({
        data: function(t, n) {
            var a, s, d, g = this[0], m = g && g.attributes;
            if (t === void 0) {
                if (this.length && (d = Ye.get(g),
                g.nodeType === 1 && !kt.get(g, "hasDataAttrs"))) {
                    for (a = m.length; a--; )
                        m[a] && (s = m[a].name).indexOf("data-") === 0 && (s = ze(s.slice(5)),
                        rr(g, s, d[s]));
                    kt.set(g, "hasDataAttrs", !0)
                }
                return d
            }
            return typeof t == "object" ? this.each(function() {
                Ye.set(this, t)
            }) : Le(this, function(w) {
                var k;
                if (g && w === void 0)
                    return (k = Ye.get(g, t)) !== void 0 || (k = rr(g, t)) !== void 0 ? k : void 0;
                this.each(function() {
                    Ye.set(this, t, w)
                })
            }, null, n, 1 < arguments.length, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                Ye.remove(this, t)
            })
        }
    }),
    u.extend({
        queue: function(t, n, a) {
            var s;
            if (t)
                return n = (n || "fx") + "queue",
                s = kt.get(t, n),
                a && (!s || Array.isArray(a) ? s = kt.access(t, n, u.makeArray(a)) : s.push(a)),
                s || []
        },
        dequeue: function(t, n) {
            n = n || "fx";
            var a = u.queue(t, n)
              , s = a.length
              , d = a.shift()
              , g = u._queueHooks(t, n);
            d === "inprogress" && (d = a.shift(),
            s--),
            d && (n === "fx" && a.unshift("inprogress"),
            delete g.stop,
            d.call(t, function() {
                u.dequeue(t, n)
            }, g)),
            !s && g && g.empty.fire()
        },
        _queueHooks: function(t, n) {
            var a = n + "queueHooks";
            return kt.get(t, a) || kt.access(t, a, {
                empty: u.Callbacks("once memory").add(function() {
                    kt.remove(t, [n + "queue", a])
                })
            })
        }
    }),
    u.fn.extend({
        queue: function(t, n) {
            var a = 2;
            return typeof t != "string" && (n = t,
            t = "fx",
            a--),
            arguments.length < a ? u.queue(this[0], t) : n === void 0 ? this : this.each(function() {
                var s = u.queue(this, t, n);
                u._queueHooks(this, t),
                t === "fx" && s[0] !== "inprogress" && u.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                u.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, n) {
            var a, s = 1, d = u.Deferred(), g = this, m = this.length, w = function() {
                --s || d.resolveWith(g, [g])
            };
            for (typeof t != "string" && (n = t,
            t = void 0),
            t = t || "fx"; m--; )
                (a = kt.get(g[m], t + "queueHooks")) && a.empty && (s++,
                a.empty.add(w));
            return w(),
            d.promise(n)
        }
    });
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Cr = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$","i")
      , On = ["Top", "Right", "Bottom", "Left"]
      , zn = Tt.documentElement
      , Yn = function(t) {
        return u.contains(t.ownerDocument, t)
    }
      , Yr = {
        composed: !0
    };
    zn.getRootNode && (Yn = function(t) {
        return u.contains(t.ownerDocument, t) || t.getRootNode(Yr) === t.ownerDocument
    }
    );
    var Er = function(t, n) {
        return (t = n || t).style.display === "none" || t.style.display === "" && Yn(t) && u.css(t, "display") === "none"
    }
      , Bt = function(t, n, a, s) {
        var d, g, m = {};
        for (g in n)
            m[g] = t.style[g],
            t.style[g] = n[g];
        for (g in d = a.apply(t, s || []),
        n)
            t.style[g] = m[g];
        return d
    };
    function ie(t, n, a, s) {
        var d, g, m = 20, w = s ? function() {
            return s.cur()
        }
        : function() {
            return u.css(t, n, "")
        }
        , k = w(), f = a && a[3] || (u.cssNumber[n] ? "" : "px"), S = t.nodeType && (u.cssNumber[n] || f !== "px" && +k) && Cr.exec(u.css(t, n));
        if (S && S[3] !== f) {
            for (k /= 2,
            f = f || S[3],
            S = +k || 1; m--; )
                u.style(t, n, S + f),
                (1 - g) * (1 - (g = w() / k || .5)) <= 0 && (m = 0),
                S /= g;
            S *= 2,
            u.style(t, n, S + f),
            a = a || []
        }
        return a && (S = +S || +k || 0,
        d = a[1] ? S + (a[1] + 1) * a[2] : +a[2],
        s && (s.unit = f,
        s.start = S,
        s.end = d)),
        d
    }
    var dn = {};
    function Ze(t, n) {
        for (var a, s, d, g, m, w, k, f = [], S = 0, Y = t.length; S < Y; S++)
            (s = t[S]).style && (a = s.style.display,
            n ? (a === "none" && (f[S] = kt.get(s, "display") || null,
            f[S] || (s.style.display = "")),
            s.style.display === "" && Er(s) && (f[S] = (k = m = g = void 0,
            m = (d = s).ownerDocument,
            w = d.nodeName,
            (k = dn[w]) || (g = m.body.appendChild(m.createElement(w)),
            k = u.css(g, "display"),
            g.parentNode.removeChild(g),
            k === "none" && (k = "block"),
            dn[w] = k)))) : a !== "none" && (f[S] = "none",
            kt.set(s, "display", a)));
        for (S = 0; S < Y; S++)
            f[S] != null && (t[S].style.display = f[S]);
        return t
    }
    u.fn.extend({
        show: function() {
            return Ze(this, !0)
        },
        hide: function() {
            return Ze(this)
        },
        toggle: function(t) {
            return typeof t == "boolean" ? t ? this.show() : this.hide() : this.each(function() {
                Er(this) ? u(this).show() : u(this).hide()
            })
        }
    });
    var gn = /^(?:checkbox|radio)$/i
      , ii = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , Pn = /^$|^module$|\/(?:java|ecma)script/i
      , Ie = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function We(t, n) {
        var a;
        return a = typeof t.getElementsByTagName < "u" ? t.getElementsByTagName(n || "*") : typeof t.querySelectorAll < "u" ? t.querySelectorAll(n || "*") : [],
        n === void 0 || n && ye(t, n) ? u.merge([t], a) : a
    }
    function Dn(t, n) {
        for (var a = 0, s = t.length; a < s; a++)
            kt.set(t[a], "globalEval", !n || kt.get(n[a], "globalEval"))
    }
    Ie.optgroup = Ie.option,
    Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead,
    Ie.th = Ie.td;
    var ir, gr, Re = /<|&#?\w+;/;
    function ce(t, n, a, s, d) {
        for (var g, m, w, k, f, S, Y = n.createDocumentFragment(), R = [], j = 0, ft = t.length; j < ft; j++)
            if ((g = t[j]) || g === 0)
                if (Be(g) === "object")
                    u.merge(R, g.nodeType ? [g] : g);
                else if (Re.test(g)) {
                    for (m = m || Y.appendChild(n.createElement("div")),
                    w = (ii.exec(g) || ["", ""])[1].toLowerCase(),
                    k = Ie[w] || Ie._default,
                    m.innerHTML = k[1] + u.htmlPrefilter(g) + k[2],
                    S = k[0]; S--; )
                        m = m.lastChild;
                    u.merge(R, m.childNodes),
                    (m = Y.firstChild).textContent = ""
                } else
                    R.push(n.createTextNode(g));
        for (Y.textContent = "",
        j = 0; g = R[j++]; )
            if (s && -1 < u.inArray(g, s))
                d && d.push(g);
            else if (f = Yn(g),
            m = We(Y.appendChild(g), "script"),
            f && Dn(m),
            a)
                for (S = 0; g = m[S++]; )
                    Pn.test(g.type || "") && a.push(g);
        return Y
    }
    ir = Tt.createDocumentFragment().appendChild(Tt.createElement("div")),
    (gr = Tt.createElement("input")).setAttribute("type", "radio"),
    gr.setAttribute("checked", "checked"),
    gr.setAttribute("name", "t"),
    ir.appendChild(gr),
    Xt.checkClone = ir.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ir.innerHTML = "<textarea>x</textarea>",
    Xt.noCloneChecked = !!ir.cloneNode(!0).lastChild.defaultValue;
    var ue = /^key/
      , qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , mr = /^([^.]*)(?:\.(.+)|)/;
    function Fn() {
        return !0
    }
    function Wn() {
        return !1
    }
    function oi(t, n) {
        return t === function() {
            try {
                return Tt.activeElement
            } catch {}
        }() == (n === "focus")
    }
    function Wr(t, n, a, s, d, g) {
        var m, w;
        if (typeof n == "object") {
            for (w in typeof a != "string" && (s = s || a,
            a = void 0),
            n)
                Wr(t, w, a, s, n[w], g);
            return t
        }
        if (s == null && d == null ? (d = a,
        s = a = void 0) : d == null && (typeof a == "string" ? (d = s,
        s = void 0) : (d = s,
        s = a,
        a = void 0)),
        d === !1)
            d = Wn;
        else if (!d)
            return t;
        return g === 1 && (m = d,
        (d = function(k) {
            return u().off(k),
            m.apply(this, arguments)
        }
        ).guid = m.guid || (m.guid = u.guid++)),
        t.each(function() {
            u.event.add(this, n, d, s, a)
        })
    }
    function Bn(t, n, a) {
        a ? (kt.set(t, n, !1),
        u.event.add(t, n, {
            namespace: !1,
            handler: function(s) {
                var d, g, m = kt.get(this, n);
                if (1 & s.isTrigger && this[n]) {
                    if (m.length)
                        (u.event.special[n] || {}).delegateType && s.stopPropagation();
                    else if (m = Ce.call(arguments),
                    kt.set(this, n, m),
                    d = a(this, n),
                    this[n](),
                    m !== (g = kt.get(this, n)) || d ? kt.set(this, n, !1) : g = {},
                    m !== g)
                        return s.stopImmediatePropagation(),
                        s.preventDefault(),
                        g.value
                } else
                    m.length && (kt.set(this, n, {
                        value: u.event.trigger(u.extend(m[0], u.Event.prototype), m.slice(1), this)
                    }),
                    s.stopImmediatePropagation())
            }
        })) : kt.get(t, n) === void 0 && u.event.add(t, n, Fn)
    }
    u.event = {
        global: {},
        add: function(t, n, a, s, d) {
            var g, m, w, k, f, S, Y, R, j, ft, yt, ht = kt.get(t);
            if (ht)
                for (a.handler && (a = (g = a).handler,
                d = g.selector),
                d && u.find.matchesSelector(zn, d),
                a.guid || (a.guid = u.guid++),
                (k = ht.events) || (k = ht.events = {}),
                (m = ht.handle) || (m = ht.handle = function(me) {
                    return typeof u < "u" && u.event.triggered !== me.type ? u.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                f = (n = (n || "").match(Tn) || [""]).length; f--; )
                    j = yt = (w = mr.exec(n[f]) || [])[1],
                    ft = (w[2] || "").split(".").sort(),
                    j && (Y = u.event.special[j] || {},
                    j = (d ? Y.delegateType : Y.bindType) || j,
                    Y = u.event.special[j] || {},
                    S = u.extend({
                        type: j,
                        origType: yt,
                        data: s,
                        handler: a,
                        guid: a.guid,
                        selector: d,
                        needsContext: d && u.expr.match.needsContext.test(d),
                        namespace: ft.join(".")
                    }, g),
                    (R = k[j]) || ((R = k[j] = []).delegateCount = 0,
                    Y.setup && Y.setup.call(t, s, ft, m) !== !1 || t.addEventListener && t.addEventListener(j, m)),
                    Y.add && (Y.add.call(t, S),
                    S.handler.guid || (S.handler.guid = a.guid)),
                    d ? R.splice(R.delegateCount++, 0, S) : R.push(S),
                    u.event.global[j] = !0)
        },
        remove: function(t, n, a, s, d) {
            var g, m, w, k, f, S, Y, R, j, ft, yt, ht = kt.hasData(t) && kt.get(t);
            if (ht && (k = ht.events)) {
                for (f = (n = (n || "").match(Tn) || [""]).length; f--; )
                    if (j = yt = (w = mr.exec(n[f]) || [])[1],
                    ft = (w[2] || "").split(".").sort(),
                    j) {
                        for (Y = u.event.special[j] || {},
                        R = k[j = (s ? Y.delegateType : Y.bindType) || j] || [],
                        w = w[2] && new RegExp("(^|\\.)" + ft.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        m = g = R.length; g--; )
                            S = R[g],
                            !d && yt !== S.origType || a && a.guid !== S.guid || w && !w.test(S.namespace) || s && s !== S.selector && (s !== "**" || !S.selector) || (R.splice(g, 1),
                            S.selector && R.delegateCount--,
                            Y.remove && Y.remove.call(t, S));
                        m && !R.length && (Y.teardown && Y.teardown.call(t, ft, ht.handle) !== !1 || u.removeEvent(t, j, ht.handle),
                        delete k[j])
                    } else
                        for (j in k)
                            u.event.remove(t, j + n[f], a, s, !0);
                u.isEmptyObject(k) && kt.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var n, a, s, d, g, m, w = u.event.fix(t), k = new Array(arguments.length), f = (kt.get(this, "events") || {})[w.type] || [], S = u.event.special[w.type] || {};
            for (k[0] = w,
            n = 1; n < arguments.length; n++)
                k[n] = arguments[n];
            if (w.delegateTarget = this,
            !S.preDispatch || S.preDispatch.call(this, w) !== !1) {
                for (m = u.event.handlers.call(this, w, f),
                n = 0; (d = m[n++]) && !w.isPropagationStopped(); )
                    for (w.currentTarget = d.elem,
                    a = 0; (g = d.handlers[a++]) && !w.isImmediatePropagationStopped(); )
                        w.rnamespace && g.namespace !== !1 && !w.rnamespace.test(g.namespace) || (w.handleObj = g,
                        w.data = g.data,
                        (s = ((u.event.special[g.origType] || {}).handle || g.handler).apply(d.elem, k)) !== void 0 && (w.result = s) === !1 && (w.preventDefault(),
                        w.stopPropagation()));
                return S.postDispatch && S.postDispatch.call(this, w),
                w.result
            }
        },
        handlers: function(t, n) {
            var a, s, d, g, m, w = [], k = n.delegateCount, f = t.target;
            if (k && f.nodeType && !(t.type === "click" && 1 <= t.button)) {
                for (; f !== this; f = f.parentNode || this)
                    if (f.nodeType === 1 && (t.type !== "click" || f.disabled !== !0)) {
                        for (g = [],
                        m = {},
                        a = 0; a < k; a++)
                            m[d = (s = n[a]).selector + " "] === void 0 && (m[d] = s.needsContext ? -1 < u(d, this).index(f) : u.find(d, this, null, [f]).length),
                            m[d] && g.push(s);
                        g.length && w.push({
                            elem: f,
                            handlers: g
                        })
                    }
            }
            return f = this,
            k < n.length && w.push({
                elem: f,
                handlers: n.slice(k)
            }),
            w
        },
        addProp: function(t, n) {
            Object.defineProperty(u.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: At(n) ? function() {
                    if (this.originalEvent)
                        return n(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(a) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: a
                    })
                }
            })
        },
        fix: function(t) {
            return t[u.expando] ? t : new u.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(t) {
                    var n = this || t;
                    return gn.test(n.type) && n.click && ye(n, "input") && Bn(n, "click", Fn),
                    !1
                },
                trigger: function(t) {
                    var n = this || t;
                    return gn.test(n.type) && n.click && ye(n, "input") && Bn(n, "click"),
                    !0
                },
                _default: function(t) {
                    var n = t.target;
                    return gn.test(n.type) && n.click && ye(n, "input") && kt.get(n, "click") || ye(n, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    t.result !== void 0 && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    },
    u.removeEvent = function(t, n, a) {
        t.removeEventListener && t.removeEventListener(n, a)
    }
    ,
    u.Event = function(t, n) {
        if (!(this instanceof u.Event))
            return new u.Event(t,n);
        t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || t.defaultPrevented === void 0 && t.returnValue === !1 ? Fn : Wn,
        this.target = t.target && t.target.nodeType === 3 ? t.target.parentNode : t.target,
        this.currentTarget = t.currentTarget,
        this.relatedTarget = t.relatedTarget) : this.type = t,
        n && u.extend(this, n),
        this.timeStamp = t && t.timeStamp || Date.now(),
        this[u.expando] = !0
    }
    ,
    u.Event.prototype = {
        constructor: u.Event,
        isDefaultPrevented: Wn,
        isPropagationStopped: Wn,
        isImmediatePropagationStopped: Wn,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = Fn,
            t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = Fn,
            t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = Fn,
            t && !this.isSimulated && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    u.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(t) {
            var n = t.button;
            return t.which == null && ue.test(t.type) ? t.charCode != null ? t.charCode : t.keyCode : !t.which && n !== void 0 && qe.test(t.type) ? 1 & n ? 1 : 2 & n ? 3 : 4 & n ? 2 : 0 : t.which
        }
    }, u.event.addProp),
    u.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, n) {
        u.event.special[t] = {
            setup: function() {
                return Bn(this, t, oi),
                !1
            },
            trigger: function() {
                return Bn(this, t),
                !0
            },
            delegateType: n
        }
    }),
    u.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, n) {
        u.event.special[t] = {
            delegateType: n,
            bindType: n,
            handle: function(a) {
                var s, d = a.relatedTarget, g = a.handleObj;
                return d && (d === this || u.contains(this, d)) || (a.type = g.origType,
                s = g.handler.apply(this, arguments),
                a.type = n),
                s
            }
        }
    }),
    u.fn.extend({
        on: function(t, n, a, s) {
            return Wr(this, t, n, a, s)
        },
        one: function(t, n, a, s) {
            return Wr(this, t, n, a, s, 1)
        },
        off: function(t, n, a) {
            var s, d;
            if (t && t.preventDefault && t.handleObj)
                return s = t.handleObj,
                u(t.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler),
                this;
            if (typeof t == "object") {
                for (d in t)
                    this.off(d, n, t[d]);
                return this
            }
            return n !== !1 && typeof n != "function" || (a = n,
            n = void 0),
            a === !1 && (a = Wn),
            this.each(function() {
                u.event.remove(this, t, a, n)
            })
        }
    });
    var Sr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Rr = /<script|<style|<link/i
      , Ar = /checked\s*(?:[^=]|=\s*.checked.)/i
      , $r = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function mn(t, n) {
        return ye(t, "table") && ye(n.nodeType !== 11 ? n : n.firstChild, "tr") && u(t).children("tbody")[0] || t
    }
    function ai(t) {
        return t.type = (t.getAttribute("type") !== null) + "/" + t.type,
        t
    }
    function Nn(t) {
        return (t.type || "").slice(0, 5) === "true/" ? t.type = t.type.slice(5) : t.removeAttribute("type"),
        t
    }
    function si(t, n) {
        var a, s, d, g, m, w, k, f;
        if (n.nodeType === 1) {
            if (kt.hasData(t) && (g = kt.access(t),
            m = kt.set(n, g),
            f = g.events))
                for (d in delete m.handle,
                m.events = {},
                f)
                    for (a = 0,
                    s = f[d].length; a < s; a++)
                        u.event.add(n, d, f[d][a]);
            Ye.hasData(t) && (w = Ye.access(t),
            k = u.extend({}, w),
            Ye.set(n, k))
        }
    }
    function nn(t, n, a, s) {
        n = Pr.apply([], n);
        var d, g, m, w, k, f, S = 0, Y = t.length, R = Y - 1, j = n[0], ft = At(j);
        if (ft || 1 < Y && typeof j == "string" && !Xt.checkClone && Ar.test(j))
            return t.each(function(yt) {
                var ht = t.eq(yt);
                ft && (n[0] = j.call(this, yt, ht.html())),
                nn(ht, n, a, s)
            });
        if (Y && (g = (d = ce(n, t[0].ownerDocument, !1, t, s)).firstChild,
        d.childNodes.length === 1 && (d = g),
        g || s)) {
            for (w = (m = u.map(We(d, "script"), ai)).length; S < Y; S++)
                k = d,
                S !== R && (k = u.clone(k, !0, !0),
                w && u.merge(m, We(k, "script"))),
                a.call(t[S], k, S);
            if (w)
                for (f = m[m.length - 1].ownerDocument,
                u.map(m, Nn),
                S = 0; S < w; S++)
                    k = m[S],
                    Pn.test(k.type || "") && !kt.access(k, "globalEval") && u.contains(f, k) && (k.src && (k.type || "").toLowerCase() !== "module" ? u._evalUrl && !k.noModule && u._evalUrl(k.src, {
                        nonce: k.nonce || k.getAttribute("nonce")
                    }) : ni(k.textContent.replace($r, ""), k, f))
        }
        return t
    }
    function $n(t, n, a) {
        for (var s, d = n ? u.filter(n, t) : t, g = 0; (s = d[g]) != null; g++)
            a || s.nodeType !== 1 || u.cleanData(We(s)),
            s.parentNode && (a && Yn(s) && Dn(We(s, "script")),
            s.parentNode.removeChild(s));
        return t
    }
    u.extend({
        htmlPrefilter: function(t) {
            return t.replace(Sr, "<$1></$2>")
        },
        clone: function(t, n, a) {
            var s, d, g, m, w, k, f, S = t.cloneNode(!0), Y = Yn(t);
            if (!(Xt.noCloneChecked || t.nodeType !== 1 && t.nodeType !== 11 || u.isXMLDoc(t)))
                for (m = We(S),
                s = 0,
                d = (g = We(t)).length; s < d; s++)
                    w = g[s],
                    k = m[s],
                    (f = k.nodeName.toLowerCase()) === "input" && gn.test(w.type) ? k.checked = w.checked : f !== "input" && f !== "textarea" || (k.defaultValue = w.defaultValue);
            if (n)
                if (a)
                    for (g = g || We(t),
                    m = m || We(S),
                    s = 0,
                    d = g.length; s < d; s++)
                        si(g[s], m[s]);
                else
                    si(t, S);
            return 0 < (m = We(S, "script")).length && Dn(m, !Y && We(t, "script")),
            S
        },
        cleanData: function(t) {
            for (var n, a, s, d = u.event.special, g = 0; (a = t[g]) !== void 0; g++)
                if (kn(a)) {
                    if (n = a[kt.expando]) {
                        if (n.events)
                            for (s in n.events)
                                d[s] ? u.event.remove(a, s) : u.removeEvent(a, s, n.handle);
                        a[kt.expando] = void 0
                    }
                    a[Ye.expando] && (a[Ye.expando] = void 0)
                }
        }
    }),
    u.fn.extend({
        detach: function(t) {
            return $n(this, t, !0)
        },
        remove: function(t) {
            return $n(this, t)
        },
        text: function(t) {
            return Le(this, function(n) {
                return n === void 0 ? u.text(this) : this.empty().each(function() {
                    this.nodeType !== 1 && this.nodeType !== 11 && this.nodeType !== 9 || (this.textContent = n)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return nn(this, arguments, function(t) {
                this.nodeType !== 1 && this.nodeType !== 11 && this.nodeType !== 9 || mn(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return nn(this, arguments, function(t) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var n = mn(this, t);
                    n.insertBefore(t, n.firstChild)
                }
            })
        },
        before: function() {
            return nn(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return nn(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, n = 0; (t = this[n]) != null; n++)
                t.nodeType === 1 && (u.cleanData(We(t, !1)),
                t.textContent = "");
            return this
        },
        clone: function(t, n) {
            return t = t != null && t,
            n = n ?? t,
            this.map(function() {
                return u.clone(this, t, n)
            })
        },
        html: function(t) {
            return Le(this, function(n) {
                var a = this[0] || {}
                  , s = 0
                  , d = this.length;
                if (n === void 0 && a.nodeType === 1)
                    return a.innerHTML;
                if (typeof n == "string" && !Rr.test(n) && !Ie[(ii.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = u.htmlPrefilter(n);
                    try {
                        for (; s < d; s++)
                            (a = this[s] || {}).nodeType === 1 && (u.cleanData(We(a, !1)),
                            a.innerHTML = n);
                        a = 0
                    } catch {}
                }
                a && this.empty().append(n)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return nn(this, arguments, function(n) {
                var a = this.parentNode;
                u.inArray(this, t) < 0 && (u.cleanData(We(this)),
                a && a.replaceChild(n, this))
            }, t)
        }
    }),
    u.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, n) {
        u.fn[t] = function(a) {
            for (var s, d = [], g = u(a), m = g.length - 1, w = 0; w <= m; w++)
                s = w === m ? this : this.clone(!0),
                u(g[w])[n](s),
                cn.apply(d, s.get());
            return this.pushStack(d)
        }
    });
    var In = new RegExp("^(" + we + ")(?!px)[a-z%]+$","i")
      , jr = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = nt),
        n.getComputedStyle(t)
    }
      , Ur = new RegExp(On.join("|"),"i");
    function Un(t, n, a) {
        var s, d, g, m, w = t.style;
        return (a = a || jr(t)) && ((m = a.getPropertyValue(n) || a[n]) !== "" || Yn(t) || (m = u.style(t, n)),
        !Xt.pixelBoxStyles() && In.test(m) && Ur.test(n) && (s = w.width,
        d = w.minWidth,
        g = w.maxWidth,
        w.minWidth = w.maxWidth = w.width = m,
        m = a.width,
        w.width = s,
        w.minWidth = d,
        w.maxWidth = g)),
        m !== void 0 ? m + "" : m
    }
    function Ln(t, n) {
        return {
            get: function() {
                if (!t())
                    return (this.get = n).apply(this, arguments);
                delete this.get
            }
        }
    }
    (function() {
        function t() {
            if (k) {
                w.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                k.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                zn.appendChild(w).appendChild(k);
                var f = nt.getComputedStyle(k);
                a = f.top !== "1%",
                m = n(f.marginLeft) === 12,
                k.style.right = "60%",
                g = n(f.right) === 36,
                s = n(f.width) === 36,
                k.style.position = "absolute",
                d = n(k.offsetWidth / 3) === 12,
                zn.removeChild(w),
                k = null
            }
        }
        function n(f) {
            return Math.round(parseFloat(f))
        }
        var a, s, d, g, m, w = Tt.createElement("div"), k = Tt.createElement("div");
        k.style && (k.style.backgroundClip = "content-box",
        k.cloneNode(!0).style.backgroundClip = "",
        Xt.clearCloneStyle = k.style.backgroundClip === "content-box",
        u.extend(Xt, {
            boxSizingReliable: function() {
                return t(),
                s
            },
            pixelBoxStyles: function() {
                return t(),
                g
            },
            pixelPosition: function() {
                return t(),
                a
            },
            reliableMarginLeft: function() {
                return t(),
                m
            },
            scrollboxSize: function() {
                return t(),
                d
            }
        }))
    }
    )();
    var vn = ["Webkit", "Moz", "ms"]
      , vr = Tt.createElement("div").style
      , He = {};
    function $e(t) {
        var n = u.cssProps[t] || He[t];
        return n || (t in vr ? t : He[t] = function(a) {
            for (var s = a[0].toUpperCase() + a.slice(1), d = vn.length; d--; )
                if ((a = vn[d] + s)in vr)
                    return a
        }(t) || t)
    }
    var Rn = /^(none|table(?!-c[ea]).+)/
      , fe = /^--/
      , ui = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , hi = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Mr(t, n, a) {
        var s = Cr.exec(n);
        return s ? Math.max(0, s[2] - (a || 0)) + (s[3] || "px") : n
    }
    function yn(t, n, a, s, d, g) {
        var m = n === "width" ? 1 : 0
          , w = 0
          , k = 0;
        if (a === (s ? "border" : "content"))
            return 0;
        for (; m < 4; m += 2)
            a === "margin" && (k += u.css(t, a + On[m], !0, d)),
            s ? (a === "content" && (k -= u.css(t, "padding" + On[m], !0, d)),
            a !== "margin" && (k -= u.css(t, "border" + On[m] + "Width", !0, d))) : (k += u.css(t, "padding" + On[m], !0, d),
            a !== "padding" ? k += u.css(t, "border" + On[m] + "Width", !0, d) : w += u.css(t, "border" + On[m] + "Width", !0, d));
        return !s && 0 <= g && (k += Math.max(0, Math.ceil(t["offset" + n[0].toUpperCase() + n.slice(1)] - g - k - w - .5)) || 0),
        k
    }
    function y(t, n, a) {
        var s = jr(t)
          , d = (!Xt.boxSizingReliable() || a) && u.css(t, "boxSizing", !1, s) === "border-box"
          , g = d
          , m = Un(t, n, s)
          , w = "offset" + n[0].toUpperCase() + n.slice(1);
        if (In.test(m)) {
            if (!a)
                return m;
            m = "auto"
        }
        return (!Xt.boxSizingReliable() && d || m === "auto" || !parseFloat(m) && u.css(t, "display", !1, s) === "inline") && t.getClientRects().length && (d = u.css(t, "boxSizing", !1, s) === "border-box",
        (g = w in t) && (m = t[w])),
        (m = parseFloat(m) || 0) + yn(t, n, a || (d ? "border" : "content"), g, s, m) + "px"
    }
    function x(t, n, a, s, d) {
        return new x.prototype.init(t,n,a,s,d)
    }
    u.extend({
        cssHooks: {
            opacity: {
                get: function(t, n) {
                    if (n) {
                        var a = Un(t, "opacity");
                        return a === "" ? "1" : a
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(t, n, a, s) {
            if (t && t.nodeType !== 3 && t.nodeType !== 8 && t.style) {
                var d, g, m, w = ze(n), k = fe.test(n), f = t.style;
                if (k || (n = $e(w)),
                m = u.cssHooks[n] || u.cssHooks[w],
                a === void 0)
                    return m && "get"in m && (d = m.get(t, !1, s)) !== void 0 ? d : f[n];
                (g = typeof a) == "string" && (d = Cr.exec(a)) && d[1] && (a = ie(t, n, d),
                g = "number"),
                a != null && a == a && (g !== "number" || k || (a += d && d[3] || (u.cssNumber[w] ? "" : "px")),
                Xt.clearCloneStyle || a !== "" || n.indexOf("background") !== 0 || (f[n] = "inherit"),
                m && "set"in m && (a = m.set(t, a, s)) === void 0 || (k ? f.setProperty(n, a) : f[n] = a))
            }
        },
        css: function(t, n, a, s) {
            var d, g, m, w = ze(n);
            return fe.test(n) || (n = $e(w)),
            (m = u.cssHooks[n] || u.cssHooks[w]) && "get"in m && (d = m.get(t, !0, a)),
            d === void 0 && (d = Un(t, n, s)),
            d === "normal" && n in hi && (d = hi[n]),
            a === "" || a ? (g = parseFloat(d),
            a === !0 || isFinite(g) ? g || 0 : d) : d
        }
    }),
    u.each(["height", "width"], function(t, n) {
        u.cssHooks[n] = {
            get: function(a, s, d) {
                if (s)
                    return !Rn.test(u.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? y(a, n, d) : Bt(a, ui, function() {
                        return y(a, n, d)
                    })
            },
            set: function(a, s, d) {
                var g, m = jr(a), w = !Xt.scrollboxSize() && m.position === "absolute", k = (w || d) && u.css(a, "boxSizing", !1, m) === "border-box", f = d ? yn(a, n, d, k, m) : 0;
                return k && w && (f -= Math.ceil(a["offset" + n[0].toUpperCase() + n.slice(1)] - parseFloat(m[n]) - yn(a, n, "border", !1, m) - .5)),
                f && (g = Cr.exec(s)) && (g[3] || "px") !== "px" && (a.style[n] = s,
                s = u.css(a, n)),
                Mr(0, s, f)
            }
        }
    }),
    u.cssHooks.marginLeft = Ln(Xt.reliableMarginLeft, function(t, n) {
        if (n)
            return (parseFloat(Un(t, "marginLeft")) || t.getBoundingClientRect().left - Bt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
    }),
    u.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, n) {
        u.cssHooks[t + n] = {
            expand: function(a) {
                for (var s = 0, d = {}, g = typeof a == "string" ? a.split(" ") : [a]; s < 4; s++)
                    d[t + On[s] + n] = g[s] || g[s - 2] || g[0];
                return d
            }
        },
        t !== "margin" && (u.cssHooks[t + n].set = Mr)
    }),
    u.fn.extend({
        css: function(t, n) {
            return Le(this, function(a, s, d) {
                var g, m, w = {}, k = 0;
                if (Array.isArray(s)) {
                    for (g = jr(a),
                    m = s.length; k < m; k++)
                        w[s[k]] = u.css(a, s[k], !1, g);
                    return w
                }
                return d !== void 0 ? u.style(a, s, d) : u.css(a, s)
            }, t, n, 1 < arguments.length)
        }
    }),
    ((u.Tween = x).prototype = {
        constructor: x,
        init: function(t, n, a, s, d, g) {
            this.elem = t,
            this.prop = a,
            this.easing = d || u.easing._default,
            this.options = n,
            this.start = this.now = this.cur(),
            this.end = s,
            this.unit = g || (u.cssNumber[a] ? "" : "px")
        },
        cur: function() {
            var t = x.propHooks[this.prop];
            return t && t.get ? t.get(this) : x.propHooks._default.get(this)
        },
        run: function(t) {
            var n, a = x.propHooks[this.prop];
            return this.options.duration ? this.pos = n = u.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = n = t,
            this.now = (this.end - this.start) * n + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            a && a.set ? a.set(this) : x.propHooks._default.set(this),
            this
        }
    }).init.prototype = x.prototype,
    (x.propHooks = {
        _default: {
            get: function(t) {
                var n;
                return t.elem.nodeType !== 1 || t.elem[t.prop] != null && t.elem.style[t.prop] == null ? t.elem[t.prop] : (n = u.css(t.elem, t.prop, "")) && n !== "auto" ? n : 0
            },
            set: function(t) {
                u.fx.step[t.prop] ? u.fx.step[t.prop](t) : t.elem.nodeType !== 1 || !u.cssHooks[t.prop] && t.elem.style[$e(t.prop)] == null ? t.elem[t.prop] = t.now : u.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = x.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    u.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    },
    u.fx = x.prototype.init,
    u.fx.step = {};
    var E, M, H, V, gt = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
    function dt() {
        M && (Tt.hidden === !1 && nt.requestAnimationFrame ? nt.requestAnimationFrame(dt) : nt.setTimeout(dt, u.fx.interval),
        u.fx.tick())
    }
    function wt() {
        return nt.setTimeout(function() {
            E = void 0
        }),
        E = Date.now()
    }
    function jt(t, n) {
        var a, s = 0, d = {
            height: t
        };
        for (n = n ? 1 : 0; s < 4; s += 2 - n)
            d["margin" + (a = On[s])] = d["padding" + a] = t;
        return n && (d.opacity = d.width = t),
        d
    }
    function xt(t, n, a) {
        for (var s, d = (vt.tweeners[n] || []).concat(vt.tweeners["*"]), g = 0, m = d.length; g < m; g++)
            if (s = d[g].call(a, n, t))
                return s
    }
    function vt(t, n, a) {
        var s, d, g = 0, m = vt.prefilters.length, w = u.Deferred().always(function() {
            delete k.elem
        }), k = function() {
            if (d)
                return !1;
            for (var Y = E || wt(), R = Math.max(0, f.startTime + f.duration - Y), j = 1 - (R / f.duration || 0), ft = 0, yt = f.tweens.length; ft < yt; ft++)
                f.tweens[ft].run(j);
            return w.notifyWith(t, [f, j, R]),
            j < 1 && yt ? R : (yt || w.notifyWith(t, [f, 1, 0]),
            w.resolveWith(t, [f]),
            !1)
        }, f = w.promise({
            elem: t,
            props: u.extend({}, n),
            opts: u.extend(!0, {
                specialEasing: {},
                easing: u.easing._default
            }, a),
            originalProperties: n,
            originalOptions: a,
            startTime: E || wt(),
            duration: a.duration,
            tweens: [],
            createTween: function(Y, R) {
                var j = u.Tween(t, f.opts, Y, R, f.opts.specialEasing[Y] || f.opts.easing);
                return f.tweens.push(j),
                j
            },
            stop: function(Y) {
                var R = 0
                  , j = Y ? f.tweens.length : 0;
                if (d)
                    return this;
                for (d = !0; R < j; R++)
                    f.tweens[R].run(1);
                return Y ? (w.notifyWith(t, [f, 1, 0]),
                w.resolveWith(t, [f, Y])) : w.rejectWith(t, [f, Y]),
                this
            }
        }), S = f.props;
        for (!function(Y, R) {
            var j, ft, yt, ht, me;
            for (j in Y)
                if (yt = R[ft = ze(j)],
                ht = Y[j],
                Array.isArray(ht) && (yt = ht[1],
                ht = Y[j] = ht[0]),
                j !== ft && (Y[ft] = ht,
                delete Y[j]),
                (me = u.cssHooks[ft]) && "expand"in me)
                    for (j in ht = me.expand(ht),
                    delete Y[ft],
                    ht)
                        j in Y || (Y[j] = ht[j],
                        R[j] = yt);
                else
                    R[ft] = yt
        }(S, f.opts.specialEasing); g < m; g++)
            if (s = vt.prefilters[g].call(f, t, S, f.opts))
                return At(s.stop) && (u._queueHooks(f.elem, f.opts.queue).stop = s.stop.bind(s)),
                s;
        return u.map(S, xt, f),
        At(f.opts.start) && f.opts.start.call(t, f),
        f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always),
        u.fx.timer(u.extend(k, {
            elem: t,
            anim: f,
            queue: f.opts.queue
        })),
        f
    }
    u.Animation = u.extend(vt, {
        tweeners: {
            "*": [function(t, n) {
                var a = this.createTween(t, n);
                return ie(a.elem, t, Cr.exec(n), a),
                a
            }
            ]
        },
        tweener: function(t, n) {
            At(t) ? (n = t,
            t = ["*"]) : t = t.match(Tn);
            for (var a, s = 0, d = t.length; s < d; s++)
                a = t[s],
                vt.tweeners[a] = vt.tweeners[a] || [],
                vt.tweeners[a].unshift(n)
        },
        prefilters: [function(t, n, a) {
            var s, d, g, m, w, k, f, S, Y = "width"in n || "height"in n, R = this, j = {}, ft = t.style, yt = t.nodeType && Er(t), ht = kt.get(t, "fxshow");
            for (s in a.queue || ((m = u._queueHooks(t, "fx")).unqueued == null && (m.unqueued = 0,
            w = m.empty.fire,
            m.empty.fire = function() {
                m.unqueued || w()
            }
            ),
            m.unqueued++,
            R.always(function() {
                R.always(function() {
                    m.unqueued--,
                    u.queue(t, "fx").length || m.empty.fire()
                })
            })),
            n)
                if (d = n[s],
                gt.test(d)) {
                    if (delete n[s],
                    g = g || d === "toggle",
                    d === (yt ? "hide" : "show")) {
                        if (d !== "show" || !ht || ht[s] === void 0)
                            continue;
                        yt = !0
                    }
                    j[s] = ht && ht[s] || u.style(t, s)
                }
            if ((k = !u.isEmptyObject(n)) || !u.isEmptyObject(j))
                for (s in Y && t.nodeType === 1 && (a.overflow = [ft.overflow, ft.overflowX, ft.overflowY],
                (f = ht && ht.display) == null && (f = kt.get(t, "display")),
                (S = u.css(t, "display")) === "none" && (f ? S = f : (Ze([t], !0),
                f = t.style.display || f,
                S = u.css(t, "display"),
                Ze([t]))),
                (S === "inline" || S === "inline-block" && f != null) && u.css(t, "float") === "none" && (k || (R.done(function() {
                    ft.display = f
                }),
                f == null && (S = ft.display,
                f = S === "none" ? "" : S)),
                ft.display = "inline-block")),
                a.overflow && (ft.overflow = "hidden",
                R.always(function() {
                    ft.overflow = a.overflow[0],
                    ft.overflowX = a.overflow[1],
                    ft.overflowY = a.overflow[2]
                })),
                k = !1,
                j)
                    k || (ht ? "hidden"in ht && (yt = ht.hidden) : ht = kt.access(t, "fxshow", {
                        display: f
                    }),
                    g && (ht.hidden = !yt),
                    yt && Ze([t], !0),
                    R.done(function() {
                        for (s in yt || Ze([t]),
                        kt.remove(t, "fxshow"),
                        j)
                            u.style(t, s, j[s])
                    })),
                    k = xt(yt ? ht[s] : 0, s, R),
                    s in ht || (ht[s] = k.start,
                    yt && (k.end = k.start,
                    k.start = 0))
        }
        ],
        prefilter: function(t, n) {
            n ? vt.prefilters.unshift(t) : vt.prefilters.push(t)
        }
    }),
    u.speed = function(t, n, a) {
        var s = t && typeof t == "object" ? u.extend({}, t) : {
            complete: a || !a && n || At(t) && t,
            duration: t,
            easing: a && n || n && !At(n) && n
        };
        return u.fx.off ? s.duration = 0 : typeof s.duration != "number" && (s.duration in u.fx.speeds ? s.duration = u.fx.speeds[s.duration] : s.duration = u.fx.speeds._default),
        s.queue != null && s.queue !== !0 || (s.queue = "fx"),
        s.old = s.complete,
        s.complete = function() {
            At(s.old) && s.old.call(this),
            s.queue && u.dequeue(this, s.queue)
        }
        ,
        s
    }
    ,
    u.fn.extend({
        fadeTo: function(t, n, a, s) {
            return this.filter(Er).css("opacity", 0).show().end().animate({
                opacity: n
            }, t, a, s)
        },
        animate: function(t, n, a, s) {
            var d = u.isEmptyObject(t)
              , g = u.speed(n, a, s)
              , m = function() {
                var w = vt(this, u.extend({}, t), g);
                (d || kt.get(this, "finish")) && w.stop(!0)
            };
            return m.finish = m,
            d || g.queue === !1 ? this.each(m) : this.queue(g.queue, m)
        },
        stop: function(t, n, a) {
            var s = function(d) {
                var g = d.stop;
                delete d.stop,
                g(a)
            };
            return typeof t != "string" && (a = n,
            n = t,
            t = void 0),
            n && t !== !1 && this.queue(t || "fx", []),
            this.each(function() {
                var d = !0
                  , g = t != null && t + "queueHooks"
                  , m = u.timers
                  , w = kt.get(this);
                if (g)
                    w[g] && w[g].stop && s(w[g]);
                else
                    for (g in w)
                        w[g] && w[g].stop && at.test(g) && s(w[g]);
                for (g = m.length; g--; )
                    m[g].elem !== this || t != null && m[g].queue !== t || (m[g].anim.stop(a),
                    d = !1,
                    m.splice(g, 1));
                !d && a || u.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"),
            this.each(function() {
                var n, a = kt.get(this), s = a[t + "queue"], d = a[t + "queueHooks"], g = u.timers, m = s ? s.length : 0;
                for (a.finish = !0,
                u.queue(this, t, []),
                d && d.stop && d.stop.call(this, !0),
                n = g.length; n--; )
                    g[n].elem === this && g[n].queue === t && (g[n].anim.stop(!0),
                    g.splice(n, 1));
                for (n = 0; n < m; n++)
                    s[n] && s[n].finish && s[n].finish.call(this);
                delete a.finish
            })
        }
    }),
    u.each(["toggle", "show", "hide"], function(t, n) {
        var a = u.fn[n];
        u.fn[n] = function(s, d, g) {
            return s == null || typeof s == "boolean" ? a.apply(this, arguments) : this.animate(jt(n, !0), s, d, g)
        }
    }),
    u.each({
        slideDown: jt("show"),
        slideUp: jt("hide"),
        slideToggle: jt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, n) {
        u.fn[t] = function(a, s, d) {
            return this.animate(n, a, s, d)
        }
    }),
    u.timers = [],
    u.fx.tick = function() {
        var t, n = 0, a = u.timers;
        for (E = Date.now(); n < a.length; n++)
            (t = a[n])() || a[n] !== t || a.splice(n--, 1);
        a.length || u.fx.stop(),
        E = void 0
    }
    ,
    u.fx.timer = function(t) {
        u.timers.push(t),
        u.fx.start()
    }
    ,
    u.fx.interval = 13,
    u.fx.start = function() {
        M || (M = !0,
        dt())
    }
    ,
    u.fx.stop = function() {
        M = null
    }
    ,
    u.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    u.fn.delay = function(t, n) {
        return t = u.fx && u.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n, function(a, s) {
            var d = nt.setTimeout(a, t);
            s.stop = function() {
                nt.clearTimeout(d)
            }
        })
    }
    ,
    H = Tt.createElement("input"),
    V = Tt.createElement("select").appendChild(Tt.createElement("option")),
    H.type = "checkbox",
    Xt.checkOn = H.value !== "",
    Xt.optSelected = V.selected,
    (H = Tt.createElement("input")).value = "t",
    H.type = "radio",
    Xt.radioValue = H.value === "t";
    var $t, oe = u.expr.attrHandle;
    u.fn.extend({
        attr: function(t, n) {
            return Le(this, u.attr, t, n, 1 < arguments.length)
        },
        removeAttr: function(t) {
            return this.each(function() {
                u.removeAttr(this, t)
            })
        }
    }),
    u.extend({
        attr: function(t, n, a) {
            var s, d, g = t.nodeType;
            if (g !== 3 && g !== 8 && g !== 2)
                return typeof t.getAttribute > "u" ? u.prop(t, n, a) : (g === 1 && u.isXMLDoc(t) || (d = u.attrHooks[n.toLowerCase()] || (u.expr.match.bool.test(n) ? $t : void 0)),
                a !== void 0 ? a === null ? void u.removeAttr(t, n) : d && "set"in d && (s = d.set(t, a, n)) !== void 0 ? s : (t.setAttribute(n, a + ""),
                a) : d && "get"in d && (s = d.get(t, n)) !== null ? s : (s = u.find.attr(t, n)) == null ? void 0 : s)
        },
        attrHooks: {
            type: {
                set: function(t, n) {
                    if (!Xt.radioValue && n === "radio" && ye(t, "input")) {
                        var a = t.value;
                        return t.setAttribute("type", n),
                        a && (t.value = a),
                        n
                    }
                }
            }
        },
        removeAttr: function(t, n) {
            var a, s = 0, d = n && n.match(Tn);
            if (d && t.nodeType === 1)
                for (; a = d[s++]; )
                    t.removeAttribute(a)
        }
    }),
    $t = {
        set: function(t, n, a) {
            return n === !1 ? u.removeAttr(t, a) : t.setAttribute(a, a),
            a
        }
    },
    u.each(u.expr.match.bool.source.match(/\w+/g), function(t, n) {
        var a = oe[n] || u.find.attr;
        oe[n] = function(s, d, g) {
            var m, w, k = d.toLowerCase();
            return g || (w = oe[k],
            oe[k] = m,
            m = a(s, d, g) != null ? k : null,
            oe[k] = w),
            m
        }
    });
    var se = /^(?:input|select|textarea|button)$/i
      , _e = /^(?:a|area)$/i;
    function xe(t) {
        return (t.match(Tn) || []).join(" ")
    }
    function de(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    function Ue(t) {
        return Array.isArray(t) ? t : typeof t == "string" && t.match(Tn) || []
    }
    u.fn.extend({
        prop: function(t, n) {
            return Le(this, u.prop, t, n, 1 < arguments.length)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[u.propFix[t] || t]
            })
        }
    }),
    u.extend({
        prop: function(t, n, a) {
            var s, d, g = t.nodeType;
            if (g !== 3 && g !== 8 && g !== 2)
                return g === 1 && u.isXMLDoc(t) || (n = u.propFix[n] || n,
                d = u.propHooks[n]),
                a !== void 0 ? d && "set"in d && (s = d.set(t, a, n)) !== void 0 ? s : t[n] = a : d && "get"in d && (s = d.get(t, n)) !== null ? s : t[n]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var n = u.find.attr(t, "tabindex");
                    return n ? parseInt(n, 10) : se.test(t.nodeName) || _e.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    Xt.optSelected || (u.propHooks.selected = {
        get: function(t) {
            var n = t.parentNode;
            return n && n.parentNode && n.parentNode.selectedIndex,
            null
        },
        set: function(t) {
            var n = t.parentNode;
            n && (n.selectedIndex,
            n.parentNode && n.parentNode.selectedIndex)
        }
    }),
    u.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        u.propFix[this.toLowerCase()] = this
    }),
    u.fn.extend({
        addClass: function(t) {
            var n, a, s, d, g, m, w, k = 0;
            if (At(t))
                return this.each(function(f) {
                    u(this).addClass(t.call(this, f, de(this)))
                });
            if ((n = Ue(t)).length) {
                for (; a = this[k++]; )
                    if (d = de(a),
                    s = a.nodeType === 1 && " " + xe(d) + " ") {
                        for (m = 0; g = n[m++]; )
                            s.indexOf(" " + g + " ") < 0 && (s += g + " ");
                        d !== (w = xe(s)) && a.setAttribute("class", w)
                    }
            }
            return this
        },
        removeClass: function(t) {
            var n, a, s, d, g, m, w, k = 0;
            if (At(t))
                return this.each(function(f) {
                    u(this).removeClass(t.call(this, f, de(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((n = Ue(t)).length) {
                for (; a = this[k++]; )
                    if (d = de(a),
                    s = a.nodeType === 1 && " " + xe(d) + " ") {
                        for (m = 0; g = n[m++]; )
                            for (; -1 < s.indexOf(" " + g + " "); )
                                s = s.replace(" " + g + " ", " ");
                        d !== (w = xe(s)) && a.setAttribute("class", w)
                    }
            }
            return this
        },
        toggleClass: function(t, n) {
            var a = typeof t
              , s = a === "string" || Array.isArray(t);
            return typeof n == "boolean" && s ? n ? this.addClass(t) : this.removeClass(t) : At(t) ? this.each(function(d) {
                u(this).toggleClass(t.call(this, d, de(this), n), n)
            }) : this.each(function() {
                var d, g, m, w;
                if (s)
                    for (g = 0,
                    m = u(this),
                    w = Ue(t); d = w[g++]; )
                        m.hasClass(d) ? m.removeClass(d) : m.addClass(d);
                else
                    t !== void 0 && a !== "boolean" || ((d = de(this)) && kt.set(this, "__className__", d),
                    this.setAttribute && this.setAttribute("class", d || t === !1 ? "" : kt.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var n, a, s = 0;
            for (n = " " + t + " "; a = this[s++]; )
                if (a.nodeType === 1 && -1 < (" " + xe(de(a)) + " ").indexOf(n))
                    return !0;
            return !1
        }
    });
    var pt = /\r/g;
    u.fn.extend({
        val: function(t) {
            var n, a, s, d = this[0];
            return arguments.length ? (s = At(t),
            this.each(function(g) {
                var m;
                this.nodeType === 1 && ((m = s ? t.call(this, g, u(this).val()) : t) == null ? m = "" : typeof m == "number" ? m += "" : Array.isArray(m) && (m = u.map(m, function(w) {
                    return w == null ? "" : w + ""
                })),
                (n = u.valHooks[this.type] || u.valHooks[this.nodeName.toLowerCase()]) && "set"in n && n.set(this, m, "value") !== void 0 || (this.value = m))
            })) : d ? (n = u.valHooks[d.type] || u.valHooks[d.nodeName.toLowerCase()]) && "get"in n && (a = n.get(d, "value")) !== void 0 ? a : typeof (a = d.value) == "string" ? a.replace(pt, "") : a ?? "" : void 0
        }
    }),
    u.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var n = u.find.attr(t, "value");
                    return n ?? xe(u.text(t))
                }
            },
            select: {
                get: function(t) {
                    var n, a, s, d = t.options, g = t.selectedIndex, m = t.type === "select-one", w = m ? null : [], k = m ? g + 1 : d.length;
                    for (s = g < 0 ? k : m ? g : 0; s < k; s++)
                        if (((a = d[s]).selected || s === g) && !a.disabled && (!a.parentNode.disabled || !ye(a.parentNode, "optgroup"))) {
                            if (n = u(a).val(),
                            m)
                                return n;
                            w.push(n)
                        }
                    return w
                },
                set: function(t, n) {
                    for (var a, s, d = t.options, g = u.makeArray(n), m = d.length; m--; )
                        ((s = d[m]).selected = -1 < u.inArray(u.valHooks.option.get(s), g)) && (a = !0);
                    return a || (t.selectedIndex = -1),
                    g
                }
            }
        }
    }),
    u.each(["radio", "checkbox"], function() {
        u.valHooks[this] = {
            set: function(t, n) {
                if (Array.isArray(n))
                    return t.checked = -1 < u.inArray(u(t).val(), n)
            }
        },
        Xt.checkOn || (u.valHooks[this].get = function(t) {
            return t.getAttribute("value") === null ? "on" : t.value
        }
        )
    }),
    Xt.focusin = "onfocusin"in nt;
    var he = /^(?:focusinfocus|focusoutblur)$/
      , Me = function(t) {
        t.stopPropagation()
    };
    u.extend(u.event, {
        trigger: function(t, n, a, s) {
            var d, g, m, w, k, f, S, Y, R = [a || Tt], j = dr.call(t, "type") ? t.type : t, ft = dr.call(t, "namespace") ? t.namespace.split(".") : [];
            if (g = Y = m = a = a || Tt,
            a.nodeType !== 3 && a.nodeType !== 8 && !he.test(j + u.event.triggered) && (-1 < j.indexOf(".") && (j = (ft = j.split(".")).shift(),
            ft.sort()),
            k = j.indexOf(":") < 0 && "on" + j,
            (t = t[u.expando] ? t : new u.Event(j,typeof t == "object" && t)).isTrigger = s ? 2 : 3,
            t.namespace = ft.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + ft.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = a),
            n = n == null ? [t] : u.makeArray(n, [t]),
            S = u.event.special[j] || {},
            s || !S.trigger || S.trigger.apply(a, n) !== !1)) {
                if (!s && !S.noBubble && !tr(a)) {
                    for (w = S.delegateType || j,
                    he.test(w + j) || (g = g.parentNode); g; g = g.parentNode)
                        R.push(g),
                        m = g;
                    m === (a.ownerDocument || Tt) && R.push(m.defaultView || m.parentWindow || nt)
                }
                for (d = 0; (g = R[d++]) && !t.isPropagationStopped(); )
                    Y = g,
                    t.type = 1 < d ? w : S.bindType || j,
                    (f = (kt.get(g, "events") || {})[t.type] && kt.get(g, "handle")) && f.apply(g, n),
                    (f = k && g[k]) && f.apply && kn(g) && (t.result = f.apply(g, n),
                    t.result === !1 && t.preventDefault());
                return t.type = j,
                s || t.isDefaultPrevented() || S._default && S._default.apply(R.pop(), n) !== !1 || !kn(a) || k && At(a[j]) && !tr(a) && ((m = a[k]) && (a[k] = null),
                u.event.triggered = j,
                t.isPropagationStopped() && Y.addEventListener(j, Me),
                a[j](),
                t.isPropagationStopped() && Y.removeEventListener(j, Me),
                u.event.triggered = void 0,
                m && (a[k] = m)),
                t.result
            }
        },
        simulate: function(t, n, a) {
            var s = u.extend(new u.Event, a, {
                type: t,
                isSimulated: !0
            });
            u.event.trigger(s, null, n)
        }
    }),
    u.fn.extend({
        trigger: function(t, n) {
            return this.each(function() {
                u.event.trigger(t, n, this)
            })
        },
        triggerHandler: function(t, n) {
            var a = this[0];
            if (a)
                return u.event.trigger(t, n, a, !0)
        }
    }),
    Xt.focusin || u.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, n) {
        var a = function(s) {
            u.event.simulate(n, s.target, u.event.fix(s))
        };
        u.event.special[n] = {
            setup: function() {
                var s = this.ownerDocument || this
                  , d = kt.access(s, n);
                d || s.addEventListener(t, a, !0),
                kt.access(s, n, (d || 0) + 1)
            },
            teardown: function() {
                var s = this.ownerDocument || this
                  , d = kt.access(s, n) - 1;
                d ? kt.access(s, n, d) : (s.removeEventListener(t, a, !0),
                kt.remove(s, n))
            }
        }
    });
    var Ut = nt.location
      , ae = Date.now()
      , qn = /\?/;
    u.parseXML = function(t) {
        var n;
        if (!t || typeof t != "string")
            return null;
        try {
            n = new nt.DOMParser().parseFromString(t, "text/xml")
        } catch {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || u.error("Invalid XML: " + t),
        n
    }
    ;
    var bi = /\[\]$/
      , _n = /\r?\n/g
      , pe = /^(?:submit|button|image|reset|file)$/i
      , ge = /^(?:input|select|textarea|keygen)/i;
    function Kt(t, n, a, s) {
        var d;
        if (Array.isArray(n))
            u.each(n, function(g, m) {
                a || bi.test(t) ? s(t, m) : Kt(t + "[" + (typeof m == "object" && m != null ? g : "") + "]", m, a, s)
            });
        else if (a || Be(n) !== "object")
            s(t, n);
        else
            for (d in n)
                Kt(t + "[" + d + "]", n[d], a, s)
    }
    u.param = function(t, n) {
        var a, s = [], d = function(g, m) {
            var w = At(m) ? m() : m;
            s[s.length] = encodeURIComponent(g) + "=" + encodeURIComponent(w ?? "")
        };
        if (t == null)
            return "";
        if (Array.isArray(t) || t.jquery && !u.isPlainObject(t))
            u.each(t, function() {
                d(this.name, this.value)
            });
        else
            for (a in t)
                Kt(a, t[a], n, d);
        return s.join("&")
    }
    ,
    u.fn.extend({
        serialize: function() {
            return u.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = u.prop(this, "elements");
                return t ? u.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !u(this).is(":disabled") && ge.test(this.nodeName) && !pe.test(t) && (this.checked || !gn.test(t))
            }).map(function(t, n) {
                var a = u(this).val();
                return a == null ? null : Array.isArray(a) ? u.map(a, function(s) {
                    return {
                        name: n.name,
                        value: s.replace(_n, `\r
`)
                    }
                }) : {
                    name: n.name,
                    value: a.replace(_n, `\r
`)
                }
            }).get()
        }
    });
    var je = /%20/g
      , rn = /#.*$/
      , Cn = /([?&])_=[^&]*/
      , Jt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Oe = /^(?:GET|HEAD)$/
      , or = /^\/\//
      , ar = {}
      , Pe = {}
      , En = "*/".concat("*")
      , Ft = Tt.createElement("a");
    function Qe(t) {
        return function(n, a) {
            typeof n != "string" && (a = n,
            n = "*");
            var s, d = 0, g = n.toLowerCase().match(Tn) || [];
            if (At(a))
                for (; s = g[d++]; )
                    s[0] === "+" ? (s = s.slice(1) || "*",
                    (t[s] = t[s] || []).unshift(a)) : (t[s] = t[s] || []).push(a)
        }
    }
    function re(t, n, a, s) {
        var d = {}
          , g = t === Pe;
        function m(w) {
            var k;
            return d[w] = !0,
            u.each(t[w] || [], function(f, S) {
                var Y = S(n, a, s);
                return typeof Y != "string" || g || d[Y] ? g ? !(k = Y) : void 0 : (n.dataTypes.unshift(Y),
                m(Y),
                !1)
            }),
            k
        }
        return m(n.dataTypes[0]) || !d["*"] && m("*")
    }
    function Vr(t, n) {
        var a, s, d = u.ajaxSettings.flatOptions || {};
        for (a in n)
            n[a] !== void 0 && ((d[a] ? t : s || (s = {}))[a] = n[a]);
        return s && u.extend(!0, t, s),
        t
    }
    Ft.href = Ut.href,
    u.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ut.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ut.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": En,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": u.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, n) {
            return n ? Vr(Vr(t, u.ajaxSettings), n) : Vr(u.ajaxSettings, t)
        },
        ajaxPrefilter: Qe(ar),
        ajaxTransport: Qe(Pe),
        ajax: function(t, n) {
            typeof t == "object" && (n = t,
            t = void 0),
            n = n || {};
            var a, s, d, g, m, w, k, f, S, Y, R = u.ajaxSetup({}, n), j = R.context || R, ft = R.context && (j.nodeType || j.jquery) ? u(j) : u.event, yt = u.Deferred(), ht = u.Callbacks("once memory"), me = R.statusCode || {}, Xe = {}, be = {}, Dt = "canceled", Et = {
                readyState: 0,
                getResponseHeader: function(It) {
                    var Nt;
                    if (k) {
                        if (!g)
                            for (g = {}; Nt = Jt.exec(d); )
                                g[Nt[1].toLowerCase() + " "] = (g[Nt[1].toLowerCase() + " "] || []).concat(Nt[2]);
                        Nt = g[It.toLowerCase() + " "]
                    }
                    return Nt == null ? null : Nt.join(", ")
                },
                getAllResponseHeaders: function() {
                    return k ? d : null
                },
                setRequestHeader: function(It, Nt) {
                    return k == null && (It = be[It.toLowerCase()] = be[It.toLowerCase()] || It,
                    Xe[It] = Nt),
                    this
                },
                overrideMimeType: function(It) {
                    return k == null && (R.mimeType = It),
                    this
                },
                statusCode: function(It) {
                    var Nt;
                    if (It)
                        if (k)
                            Et.always(It[Et.status]);
                        else
                            for (Nt in It)
                                me[Nt] = [me[Nt], It[Nt]];
                    return this
                },
                abort: function(It) {
                    var Nt = It || Dt;
                    return a && a.abort(Nt),
                    Pt(0, Nt),
                    this
                }
            };
            if (yt.promise(Et),
            R.url = ((t || R.url || Ut.href) + "").replace(or, Ut.protocol + "//"),
            R.type = n.method || n.type || R.method || R.type,
            R.dataTypes = (R.dataType || "*").toLowerCase().match(Tn) || [""],
            R.crossDomain == null) {
                w = Tt.createElement("a");
                try {
                    w.href = R.url,
                    w.href = w.href,
                    R.crossDomain = Ft.protocol + "//" + Ft.host != w.protocol + "//" + w.host
                } catch {
                    R.crossDomain = !0
                }
            }
            if (R.data && R.processData && typeof R.data != "string" && (R.data = u.param(R.data, R.traditional)),
            re(ar, R, n, Et),
            k)
                return Et;
            for (S in (f = u.event && R.global) && u.active++ == 0 && u.event.trigger("ajaxStart"),
            R.type = R.type.toUpperCase(),
            R.hasContent = !Oe.test(R.type),
            s = R.url.replace(rn, ""),
            R.hasContent ? R.data && R.processData && (R.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (R.data = R.data.replace(je, "+")) : (Y = R.url.slice(s.length),
            R.data && (R.processData || typeof R.data == "string") && (s += (qn.test(s) ? "&" : "?") + R.data,
            delete R.data),
            R.cache === !1 && (s = s.replace(Cn, "$1"),
            Y = (qn.test(s) ? "&" : "?") + "_=" + ae++ + Y),
            R.url = s + Y),
            R.ifModified && (u.lastModified[s] && Et.setRequestHeader("If-Modified-Since", u.lastModified[s]),
            u.etag[s] && Et.setRequestHeader("If-None-Match", u.etag[s])),
            (R.data && R.hasContent && R.contentType !== !1 || n.contentType) && Et.setRequestHeader("Content-Type", R.contentType),
            Et.setRequestHeader("Accept", R.dataTypes[0] && R.accepts[R.dataTypes[0]] ? R.accepts[R.dataTypes[0]] + (R.dataTypes[0] !== "*" ? ", " + En + "; q=0.01" : "") : R.accepts["*"]),
            R.headers)
                Et.setRequestHeader(S, R.headers[S]);
            if (R.beforeSend && (R.beforeSend.call(j, Et, R) === !1 || k))
                return Et.abort();
            if (Dt = "abort",
            ht.add(R.complete),
            Et.done(R.success),
            Et.fail(R.error),
            a = re(Pe, R, n, Et)) {
                if (Et.readyState = 1,
                f && ft.trigger("ajaxSend", [Et, R]),
                k)
                    return Et;
                R.async && 0 < R.timeout && (m = nt.setTimeout(function() {
                    Et.abort("timeout")
                }, R.timeout));
                try {
                    k = !1,
                    a.send(Xe, Pt)
                } catch (It) {
                    if (k)
                        throw It;
                    Pt(-1, It)
                }
            } else
                Pt(-1, "No Transport");
            function Pt(It, Nt, Vn, on) {
                var N, P, F, z, ot, it = Nt;
                k || (k = !0,
                m && nt.clearTimeout(m),
                a = void 0,
                d = on || "",
                Et.readyState = 0 < It ? 4 : 0,
                N = 200 <= It && It < 300 || It === 304,
                Vn && (z = function(tt, st, _t) {
                    for (var qt, mt, Ct, bt, Te = tt.contents, Zt = tt.dataTypes; Zt[0] === "*"; )
                        Zt.shift(),
                        qt === void 0 && (qt = tt.mimeType || st.getResponseHeader("Content-Type"));
                    if (qt) {
                        for (mt in Te)
                            if (Te[mt] && Te[mt].test(qt)) {
                                Zt.unshift(mt);
                                break
                            }
                    }
                    if (Zt[0]in _t)
                        Ct = Zt[0];
                    else {
                        for (mt in _t) {
                            if (!Zt[0] || tt.converters[mt + " " + Zt[0]]) {
                                Ct = mt;
                                break
                            }
                            bt || (bt = mt)
                        }
                        Ct = Ct || bt
                    }
                    if (Ct)
                        return Ct !== Zt[0] && Zt.unshift(Ct),
                        _t[Ct]
                }(R, Et, Vn)),
                z = function(tt, st, _t, qt) {
                    var mt, Ct, bt, Te, Zt, zt = {}, an = tt.dataTypes.slice();
                    if (an[1])
                        for (bt in tt.converters)
                            zt[bt.toLowerCase()] = tt.converters[bt];
                    for (Ct = an.shift(); Ct; )
                        if (tt.responseFields[Ct] && (_t[tt.responseFields[Ct]] = st),
                        !Zt && qt && tt.dataFilter && (st = tt.dataFilter(st, tt.dataType)),
                        Zt = Ct,
                        Ct = an.shift()) {
                            if (Ct === "*")
                                Ct = Zt;
                            else if (Zt !== "*" && Zt !== Ct) {
                                if (!(bt = zt[Zt + " " + Ct] || zt["* " + Ct])) {
                                    for (mt in zt)
                                        if ((Te = mt.split(" "))[1] === Ct && (bt = zt[Zt + " " + Te[0]] || zt["* " + Te[0]])) {
                                            bt === !0 ? bt = zt[mt] : zt[mt] !== !0 && (Ct = Te[0],
                                            an.unshift(Te[1]));
                                            break
                                        }
                                }
                                if (bt !== !0)
                                    if (bt && tt.throws)
                                        st = bt(st);
                                    else
                                        try {
                                            st = bt(st)
                                        } catch (sn) {
                                            return {
                                                state: "parsererror",
                                                error: bt ? sn : "No conversion from " + Zt + " to " + Ct
                                            }
                                        }
                            }
                        }
                    return {
                        state: "success",
                        data: st
                    }
                }(R, z, Et, N),
                N ? (R.ifModified && ((ot = Et.getResponseHeader("Last-Modified")) && (u.lastModified[s] = ot),
                (ot = Et.getResponseHeader("etag")) && (u.etag[s] = ot)),
                It === 204 || R.type === "HEAD" ? it = "nocontent" : It === 304 ? it = "notmodified" : (it = z.state,
                P = z.data,
                N = !(F = z.error))) : (F = it,
                !It && it || (it = "error",
                It < 0 && (It = 0))),
                Et.status = It,
                Et.statusText = (Nt || it) + "",
                N ? yt.resolveWith(j, [P, it, Et]) : yt.rejectWith(j, [Et, it, F]),
                Et.statusCode(me),
                me = void 0,
                f && ft.trigger(N ? "ajaxSuccess" : "ajaxError", [Et, R, N ? P : F]),
                ht.fireWith(j, [Et, it]),
                f && (ft.trigger("ajaxComplete", [Et, R]),
                --u.active || u.event.trigger("ajaxStop")))
            }
            return Et
        },
        getJSON: function(t, n, a) {
            return u.get(t, n, a, "json")
        },
        getScript: function(t, n) {
            return u.get(t, void 0, n, "script")
        }
    }),
    u.each(["get", "post"], function(t, n) {
        u[n] = function(a, s, d, g) {
            return At(s) && (g = g || d,
            d = s,
            s = void 0),
            u.ajax(u.extend({
                url: a,
                type: n,
                dataType: g,
                data: s,
                success: d
            }, u.isPlainObject(a) && a))
        }
    }),
    u._evalUrl = function(t, n) {
        return u.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(a) {
                u.globalEval(a, n)
            }
        })
    }
    ,
    u.fn.extend({
        wrapAll: function(t) {
            var n;
            return this[0] && (At(t) && (t = t.call(this[0])),
            n = u(t, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && n.insertBefore(this[0]),
            n.map(function() {
                for (var a = this; a.firstElementChild; )
                    a = a.firstElementChild;
                return a
            }).append(this)),
            this
        },
        wrapInner: function(t) {
            return At(t) ? this.each(function(n) {
                u(this).wrapInner(t.call(this, n))
            }) : this.each(function() {
                var n = u(this)
                  , a = n.contents();
                a.length ? a.wrapAll(t) : n.append(t)
            })
        },
        wrap: function(t) {
            var n = At(t);
            return this.each(function(a) {
                u(this).wrapAll(n ? t.call(this, a) : t)
            })
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                u(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    u.expr.pseudos.hidden = function(t) {
        return !u.expr.pseudos.visible(t)
    }
    ,
    u.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }
    ,
    u.ajaxSettings.xhr = function() {
        try {
            return new nt.XMLHttpRequest
        } catch {}
    }
    ;
    var Ke = {
        0: 200,
        1223: 204
    }
      , tn = u.ajaxSettings.xhr();
    Xt.cors = !!tn && "withCredentials"in tn,
    Xt.ajax = tn = !!tn,
    u.ajaxTransport(function(t) {
        var n, a;
        if (Xt.cors || tn && !t.crossDomain)
            return {
                send: function(s, d) {
                    var g, m = t.xhr();
                    if (m.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (g in t.xhrFields)
                            m[g] = t.xhrFields[g];
                    for (g in t.mimeType && m.overrideMimeType && m.overrideMimeType(t.mimeType),
                    t.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"),
                    s)
                        m.setRequestHeader(g, s[g]);
                    n = function(w) {
                        return function() {
                            n && (n = a = m.onload = m.onerror = m.onabort = m.ontimeout = m.onreadystatechange = null,
                            w === "abort" ? m.abort() : w === "error" ? typeof m.status != "number" ? d(0, "error") : d(m.status, m.statusText) : d(Ke[m.status] || m.status, m.statusText, (m.responseType || "text") !== "text" || typeof m.responseText != "string" ? {
                                binary: m.response
                            } : {
                                text: m.responseText
                            }, m.getAllResponseHeaders()))
                        }
                    }
                    ,
                    m.onload = n(),
                    a = m.onerror = m.ontimeout = n("error"),
                    m.onabort !== void 0 ? m.onabort = a : m.onreadystatechange = function() {
                        m.readyState === 4 && nt.setTimeout(function() {
                            n && a()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        m.send(t.hasContent && t.data || null)
                    } catch (w) {
                        if (n)
                            throw w
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    u.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }),
    u.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return u.globalEval(t),
                t
            }
        }
    }),
    u.ajaxPrefilter("script", function(t) {
        t.cache === void 0 && (t.cache = !1),
        t.crossDomain && (t.type = "GET")
    }),
    u.ajaxTransport("script", function(t) {
        var n, a;
        if (t.crossDomain || t.scriptAttrs)
            return {
                send: function(s, d) {
                    n = u("<script>").attr(t.scriptAttrs || {}).prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", a = function(g) {
                        n.remove(),
                        a = null,
                        g && d(g.type === "error" ? 404 : 200, g.type)
                    }
                    ),
                    Tt.head.appendChild(n[0])
                },
                abort: function() {
                    a && a()
                }
            }
    });
    var Gr, Vt = [], Qr = /(=)\?(?=&|$)|\?\?/;
    u.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Vt.pop() || u.expando + "_" + ae++;
            return this[t] = !0,
            t
        }
    }),
    u.ajaxPrefilter("json jsonp", function(t, n, a) {
        var s, d, g, m = t.jsonp !== !1 && (Qr.test(t.url) ? "url" : typeof t.data == "string" && (t.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Qr.test(t.data) && "data");
        if (m || t.dataTypes[0] === "jsonp")
            return s = t.jsonpCallback = At(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            m ? t[m] = t[m].replace(Qr, "$1" + s) : t.jsonp !== !1 && (t.url += (qn.test(t.url) ? "&" : "?") + t.jsonp + "=" + s),
            t.converters["script json"] = function() {
                return g || u.error(s + " was not called"),
                g[0]
            }
            ,
            t.dataTypes[0] = "json",
            d = nt[s],
            nt[s] = function() {
                g = arguments
            }
            ,
            a.always(function() {
                d === void 0 ? u(nt).removeProp(s) : nt[s] = d,
                t[s] && (t.jsonpCallback = n.jsonpCallback,
                Vt.push(s)),
                g && At(d) && d(g[0]),
                g = d = void 0
            }),
            "script"
    }),
    Xt.createHTMLDocument = ((Gr = Tt.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    Gr.childNodes.length === 2),
    u.parseHTML = function(t, n, a) {
        return typeof t != "string" ? [] : (typeof n == "boolean" && (a = n,
        n = !1),
        n || (Xt.createHTMLDocument ? ((s = (n = Tt.implementation.createHTMLDocument("")).createElement("base")).href = Tt.location.href,
        n.head.appendChild(s)) : n = Tt),
        g = !a && [],
        (d = Xr.exec(t)) ? [n.createElement(d[1])] : (d = ce([t], n, g),
        g && g.length && u(g).remove(),
        u.merge([], d.childNodes)));
        var s, d, g
    }
    ,
    u.fn.load = function(t, n, a) {
        var s, d, g, m = this, w = t.indexOf(" ");
        return -1 < w && (s = xe(t.slice(w)),
        t = t.slice(0, w)),
        At(n) ? (a = n,
        n = void 0) : n && typeof n == "object" && (d = "POST"),
        0 < m.length && u.ajax({
            url: t,
            type: d || "GET",
            dataType: "html",
            data: n
        }).done(function(k) {
            g = arguments,
            m.html(s ? u("<div>").append(u.parseHTML(k)).find(s) : k)
        }).always(a && function(k, f) {
            m.each(function() {
                a.apply(this, g || [k.responseText, f, k])
            })
        }
        ),
        this
    }
    ,
    u.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, n) {
        u.fn[n] = function(a) {
            return this.on(n, a)
        }
    }),
    u.expr.pseudos.animated = function(t) {
        return u.grep(u.timers, function(n) {
            return t === n.elem
        }).length
    }
    ,
    u.offset = {
        setOffset: function(t, n, a) {
            var s, d, g, m, w, k, f = u.css(t, "position"), S = u(t), Y = {};
            f === "static" && (t.style.position = "relative"),
            w = S.offset(),
            g = u.css(t, "top"),
            k = u.css(t, "left"),
            (f === "absolute" || f === "fixed") && -1 < (g + k).indexOf("auto") ? (m = (s = S.position()).top,
            d = s.left) : (m = parseFloat(g) || 0,
            d = parseFloat(k) || 0),
            At(n) && (n = n.call(t, a, u.extend({}, w))),
            n.top != null && (Y.top = n.top - w.top + m),
            n.left != null && (Y.left = n.left - w.left + d),
            "using"in n ? n.using.call(t, Y) : S.css(Y)
        }
    },
    u.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return t === void 0 ? this : this.each(function(d) {
                    u.offset.setOffset(this, t, d)
                });
            var n, a, s = this[0];
            return s ? s.getClientRects().length ? (n = s.getBoundingClientRect(),
            a = s.ownerDocument.defaultView,
            {
                top: n.top + a.pageYOffset,
                left: n.left + a.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, n, a, s = this[0], d = {
                    top: 0,
                    left: 0
                };
                if (u.css(s, "position") === "fixed")
                    n = s.getBoundingClientRect();
                else {
                    for (n = this.offset(),
                    a = s.ownerDocument,
                    t = s.offsetParent || a.documentElement; t && (t === a.body || t === a.documentElement) && u.css(t, "position") === "static"; )
                        t = t.parentNode;
                    t && t !== s && t.nodeType === 1 && ((d = u(t).offset()).top += u.css(t, "borderTopWidth", !0),
                    d.left += u.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: n.top - d.top - u.css(s, "marginTop", !0),
                    left: n.left - d.left - u.css(s, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && u.css(t, "position") === "static"; )
                    t = t.offsetParent;
                return t || zn
            })
        }
    }),
    u.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var a = n === "pageYOffset";
        u.fn[t] = function(s) {
            return Le(this, function(d, g, m) {
                var w;
                if (tr(d) ? w = d : d.nodeType === 9 && (w = d.defaultView),
                m === void 0)
                    return w ? w[n] : d[g];
                w ? w.scrollTo(a ? w.pageXOffset : m, a ? m : w.pageYOffset) : d[g] = m
            }, t, s, arguments.length)
        }
    }),
    u.each(["top", "left"], function(t, n) {
        u.cssHooks[n] = Ln(Xt.pixelPosition, function(a, s) {
            if (s)
                return s = Un(a, n),
                In.test(s) ? u(a).position()[n] + "px" : s
        })
    }),
    u.each({
        Height: "height",
        Width: "width"
    }, function(t, n) {
        u.each({
            padding: "inner" + t,
            content: n,
            "": "outer" + t
        }, function(a, s) {
            u.fn[s] = function(d, g) {
                var m = arguments.length && (a || typeof d != "boolean")
                  , w = a || (d === !0 || g === !0 ? "margin" : "border");
                return Le(this, function(k, f, S) {
                    var Y;
                    return tr(k) ? s.indexOf("outer") === 0 ? k["inner" + t] : k.document.documentElement["client" + t] : k.nodeType === 9 ? (Y = k.documentElement,
                    Math.max(k.body["scroll" + t], Y["scroll" + t], k.body["offset" + t], Y["offset" + t], Y["client" + t])) : S === void 0 ? u.css(k, f, w) : u.style(k, f, S, w)
                }, n, m ? d : void 0, m)
            }
        })
    }),
    u.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, n) {
        u.fn[n] = function(a, s) {
            return 0 < arguments.length ? this.on(n, null, a, s) : this.trigger(n)
        }
    }),
    u.fn.extend({
        hover: function(t, n) {
            return this.mouseenter(t).mouseleave(n || t)
        }
    }),
    u.fn.extend({
        bind: function(t, n, a) {
            return this.on(t, null, n, a)
        },
        unbind: function(t, n) {
            return this.off(t, null, n)
        },
        delegate: function(t, n, a, s) {
            return this.on(n, t, a, s)
        },
        undelegate: function(t, n, a) {
            return arguments.length === 1 ? this.off(t, "**") : this.off(n, t || "**", a)
        }
    }),
    u.proxy = function(t, n) {
        var a, s, d;
        if (typeof n == "string" && (a = t[n],
        n = t,
        t = a),
        At(t))
            return s = Ce.call(arguments, 2),
            (d = function() {
                return t.apply(n || this, s.concat(Ce.call(arguments)))
            }
            ).guid = t.guid = t.guid || u.guid++,
            d
    }
    ,
    u.holdReady = function(t) {
        t ? u.readyWait++ : u.ready(!0)
    }
    ,
    u.isArray = Array.isArray,
    u.parseJSON = JSON.parse,
    u.nodeName = ye,
    u.isFunction = At,
    u.isWindow = tr,
    u.camelCase = ze,
    u.type = Be,
    u.now = Date.now,
    u.isNumeric = function(t) {
        var n = u.type(t);
        return (n === "number" || n === "string") && !isNaN(t - parseFloat(t))
    }
    ,
    typeof define == "function" && define.amd && define("jquery", [], function() {
        return u
    });
    var hn = nt.jQuery
      , pi = nt.$;
    return u.noConflict = function(t) {
        return nt.$ === u && (nt.$ = pi),
        t && nt.jQuery === u && (nt.jQuery = hn),
        u
    }
    ,
    ln || (nt.jQuery = nt.$ = u),
    u
}),
function(nt, ln) {
    typeof exports == "object" && typeof module < "u" ? ln(exports) : typeof define == "function" && define.amd ? define(["exports"], ln) : ln((nt = nt || self).window = nt.window || {})
}(this, function(nt) {
    "use strict";
    function ln(y) {
        if (y === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return y
    }
    function De(y, x) {
        if (y.parentNode && (ne || tr(y))) {
            var E = hr(y)
              , M = E ? E.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml"
              , H = E ? x ? "rect" : "g" : "div"
              , V = x !== 2 ? 0 : 100
              , gt = x === 3 ? 100 : 0
              , at = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;"
              , dt = ne.createElementNS ? ne.createElementNS(M.replace(/^https/, "http"), H) : ne.createElement(H);
            return x && (E ? (Jn = Jn || De(y),
            dt.setAttribute("width", .01),
            dt.setAttribute("height", .01),
            dt.setAttribute("transform", "translate(" + V + "," + gt + ")"),
            Jn.appendChild(dt)) : (Fe || ((Fe = De(y)).style.cssText = at),
            dt.style.cssText = at + "width:0.1px;height:0.1px;top:" + gt + "px;left:" + V + "px",
            Fe.appendChild(dt))),
            dt
        }
        throw "Need document and parent."
    }
    function Tt(y, x, E, M, H, V, gt) {
        return y.a = x,
        y.b = E,
        y.c = M,
        y.d = H,
        y.e = V,
        y.f = gt,
        y
    }
    var ne, Ce, Pr, cn, Fe, Jn, fr, dr, qr, Zn, Xt = "transform", At = Xt + "Origin", tr = function(x) {
        var E = x.ownerDocument || x;
        for (!(Xt in x.style) && ("msTransform"in x.style) && (At = (Xt = "msTransform") + "Origin"); E.parentNode && (E = E.parentNode); )
            ;
        if (Ce = window,
        fr = new wn,
        E) {
            Pr = (ne = E).documentElement,
            cn = E.body,
            (dr = ne.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none";
            var M = E.createElement("div")
              , H = E.createElement("div")
              , V = E && (E.body || E.firstElementChild);
            V && V.appendChild && (V.appendChild(M),
            M.appendChild(H),
            M.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"),
            qr = H.offsetParent !== M,
            V.removeChild(M))
        }
        return E
    }, br = function(x) {
        for (var E, M; x && x !== cn; )
            (M = x._techDrag) && M.uncache && M.get(x, "x"),
            M && !M.scaleX && !M.scaleY && M.renderTransform && (M.scaleX = M.scaleY = 1e-4,
            M.renderTransform(1, M),
            E ? E.push(M) : E = [M]),
            x = x.parentNode;
        return E
    }, ni = [], Be = [], Ee = function() {
        return Ce.pageYOffset || ne.scrollTop || Pr.scrollTop || cn.scrollTop || 0
    }, u = function() {
        return Ce.pageXOffset || ne.scrollLeft || Pr.scrollLeft || cn.scrollLeft || 0
    }, hr = function(x) {
        return x.ownerSVGElement || ((x.tagName + "").toLowerCase() === "svg" ? x : null)
    }, fi = function y(x) {
        return Ce.getComputedStyle(x).position === "fixed" || ((x = x.parentNode) && x.nodeType === 1 ? y(x) : void 0)
    }, Hn = function(x, E) {
        var M, H, V, gt, at, dt, wt = hr(x), jt = x === wt, xt = wt ? ni : Be, vt = x.parentNode;
        if (x === Ce)
            return x;
        if (xt.length || xt.push(De(x, 1), De(x, 2), De(x, 3)),
        M = wt ? Jn : Fe,
        wt)
            jt ? (gt = -(V = function(oe) {
                var se, _e = oe.getCTM();
                return _e || (se = oe.style[Xt],
                oe.style[Xt] = "none",
                oe.appendChild(dr),
                _e = dr.getCTM(),
                oe.removeChild(dr),
                se ? oe.style[Xt] = se : oe.style.removeProperty(Xt.replace(/([A-Z])/g, "-$1").toLowerCase())),
                _e || fr.clone()
            }(x)).e / V.a,
            at = -V.f / V.d,
            H = fr) : x.getBBox ? (V = x.getBBox(),
            gt = (H = (H = x.transform ? x.transform.baseVal : {}).numberOfItems ? 1 < H.numberOfItems ? function(oe) {
                for (var se = new wn, _e = 0; _e < oe.numberOfItems; _e++)
                    se.multiply(oe.getItem(_e).matrix);
                return se
            }(H) : H.getItem(0).matrix : fr).a * V.x + H.c * V.y,
            at = H.b * V.x + H.d * V.y) : (H = new wn,
            gt = at = 0),
            E && x.tagName.toLowerCase() === "g" && (gt = at = 0),
            (jt ? wt : vt).appendChild(M),
            M.setAttribute("transform", "matrix(" + H.a + "," + H.b + "," + H.c + "," + H.d + "," + (H.e + gt) + "," + (H.f + at) + ")");
        else {
            if (gt = at = 0,
            qr)
                for (H = x.offsetParent,
                V = x; (V = V && V.parentNode) && V !== H && V.parentNode; )
                    4 < (Ce.getComputedStyle(V)[Xt] + "").length && (gt = V.offsetLeft,
                    at = V.offsetTop,
                    V = 0);
            if ((dt = Ce.getComputedStyle(x)).position !== "absolute" && dt.position !== "fixed")
                for (H = x.offsetParent; vt && vt !== H; )
                    gt += vt.scrollLeft || 0,
                    at += vt.scrollTop || 0,
                    vt = vt.parentNode;
            (V = M.style).top = x.offsetTop - at + "px",
            V.left = x.offsetLeft - gt + "px",
            V[Xt] = dt[Xt],
            V[At] = dt[At],
            V.position = dt.position === "fixed" ? "fixed" : "absolute",
            x.parentNode.appendChild(M)
        }
        return M
    }, wn = ((Zn = Hr.prototype).inverse = function() {
        var x = this.a
          , E = this.b
          , M = this.c
          , H = this.d
          , V = this.e
          , gt = this.f
          , at = x * H - E * M || 1e-10;
        return Tt(this, H / at, -E / at, -M / at, x / at, (M * gt - H * V) / at, -(x * gt - E * V) / at)
    }
    ,
    Zn.multiply = function(x) {
        var E = this.a
          , M = this.b
          , H = this.c
          , V = this.d
          , gt = this.e
          , at = this.f
          , dt = x.a
          , wt = x.c
          , jt = x.b
          , xt = x.d
          , vt = x.e
          , $t = x.f;
        return Tt(this, dt * E + jt * H, dt * M + jt * V, wt * E + xt * H, wt * M + xt * V, gt + vt * E + $t * H, at + vt * M + $t * V)
    }
    ,
    Zn.clone = function() {
        return new Hr(this.a,this.b,this.c,this.d,this.e,this.f)
    }
    ,
    Zn.equals = function(x) {
        var E = this.a
          , M = this.b
          , H = this.c
          , V = this.d
          , gt = this.e
          , at = this.f;
        return E === x.a && M === x.b && H === x.c && V === x.d && gt === x.e && at === x.f
    }
    ,
    Zn.apply = function(x, E) {
        E === void 0 && (E = {});
        var M = x.x
          , H = x.y
          , V = this.a
          , gt = this.b
          , at = this.c
          , dt = this.d
          , wt = this.e
          , jt = this.f;
        return E.x = M * V + H * at + wt || 0,
        E.y = M * gt + H * dt + jt || 0,
        E
    }
    ,
    Hr);
    function Hr(y, x, E, M, H, V) {
        y === void 0 && (y = 1),
        x === void 0 && (x = 0),
        E === void 0 && (E = 0),
        M === void 0 && (M = 1),
        H === void 0 && (H = 0),
        V === void 0 && (V = 0),
        Tt(this, y, x, E, M, H, V)
    }
    function er(y, x, E, M) {
        if (!y || !y.parentNode || (ne || tr(y)).documentElement === y)
            return new wn;
        var H = br(y)
          , V = hr(y) ? ni : Be
          , gt = Hn(y, E)
          , at = V[0].getBoundingClientRect()
          , dt = V[1].getBoundingClientRect()
          , wt = V[2].getBoundingClientRect()
          , jt = gt.parentNode
          , xt = !M && fi(y)
          , vt = new wn((dt.left - at.left) / 100,(dt.top - at.top) / 100,(wt.left - at.left) / 100,(wt.top - at.top) / 100,at.left + (xt ? 0 : u()),at.top + (xt ? 0 : Ee()));
        if (jt.removeChild(gt),
        H)
            for (at = H.length; at--; )
                (dt = H[at]).scaleX = dt.scaleY = 0,
                dt.renderTransform(1, dt);
        return x ? vt.inverse() : vt
    }
    function ye() {
        return typeof window < "u"
    }
    function Xr() {
        return Bt || ye() && (Bt = window.techDrag) && Bt.registerPlugin && Bt
    }
    function bn(y) {
        return typeof y == "function"
    }
    function Xn(y) {
        return typeof y == "object"
    }
    function Mn(y) {
        return y === void 0
    }
    function Tr() {
        return !1
    }
    function fn(y) {
        return Math.round(1e4 * y) / 1e4
    }
    function jn(y, x) {
        var E = dn.createElementNS ? dn.createElementNS((x || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), y) : dn.createElement(y);
        return E.style ? E : dn.createElement(y)
    }
    function Tn(y, x) {
        var E, M = {};
        for (E in y)
            M[E] = x ? y[E] * x : y[E];
        return M
    }
    function nr(y, x) {
        for (var E, M = y.length; M--; )
            x ? y[M].style.touchAction = x : y[M].style.removeProperty("touch-action"),
            (E = y[M].children) && E.length && nr(E, x)
    }
    function pr() {
        return $n.forEach(function(y) {
            return y()
        })
    }
    function Nr() {
        return !$n.length && Bt.ticker.remove(pr)
    }
    function zr(y) {
        for (var x = $n.length; x--; )
            $n[x] === y && $n.splice(x, 1);
        Bt.to(Nr, {
            overwrite: !0,
            delay: 15,
            duration: 0,
            onComplete: Nr,
            data: "_draggable"
        })
    }
    function Se(y, x, E, M) {
        if (y.addEventListener) {
            var H = Re[x];
            M = M || (ir ? {
                passive: !1
            } : null),
            y.addEventListener(H || x, E, M),
            H && x !== H && y.addEventListener(x, E, M)
        }
    }
    function Qt(y, x, E, M) {
        if (y.removeEventListener) {
            var H = Re[x];
            y.removeEventListener(H || x, E, M),
            H && x !== H && y.removeEventListener(x, E, M)
        }
    }
    function Le(y) {
        y.preventDefault && y.preventDefault(),
        y.preventManipulation && y.preventManipulation()
    }
    function di(y) {
        ce = y.touches && Rr < y.touches.length,
        Qt(y.target, "touchend", di)
    }
    function kr(y) {
        ce = y.touches && Rr < y.touches.length,
        Se(y.target, "touchend", di)
    }
    function Dr(y) {
        return ie.pageYOffset || y.scrollTop || y.documentElement.scrollTop || y.body.scrollTop || 0
    }
    function ze(y) {
        return ie.pageXOffset || y.scrollLeft || y.documentElement.scrollLeft || y.body.scrollLeft || 0
    }
    function kn(y, x) {
        Se(y, "scroll", x),
        vr(y.parentNode) || kn(y.parentNode, x)
    }
    function Ae(y, x) {
        Qt(y, "scroll", x),
        vr(y.parentNode) || Ae(y.parentNode, x)
    }
    function kt(y, x) {
        var E = x === "x" ? "Width" : "Height"
          , M = "scroll" + E
          , H = "client" + E;
        return Math.max(0, vr(y) ? Math.max(Ze[M], gn[M]) - (ie["inner" + E] || Ze[H] || gn[H]) : y[M] - y[H])
    }
    function Ye(y, x) {
        var E = kt(y, "x")
          , M = kt(y, "y");
        vr(y) ? y = vn : Ye(y.parentNode, x),
        y._gsMaxScrollX = E,
        y._gsMaxScrollY = M,
        x || (y._gsScrollX = y.scrollLeft || 0,
        y._gsScrollY = y.scrollTop || 0)
    }
    function ri(y, x, E) {
        var M = y.style;
        M && (Mn(M[x]) && (x = We(x, y) || x),
        E == null ? M.removeProperty && M.removeProperty(x.replace(/([A-Z])/g, "-$1").toLowerCase()) : M[x] = E)
    }
    function Lr(y) {
        return ie.getComputedStyle(y instanceof Element ? y : y.host || (y.parentNode || {}).host || y)
    }
    function rr(y) {
        if (y === ie)
            return He.left = He.top = 0,
            He.width = He.right = Ze.clientWidth || y.innerWidth || gn.clientWidth || 0,
            He.height = He.bottom = (y.innerHeight || 0) - 20 < Ze.clientHeight ? Ze.clientHeight : y.innerHeight || gn.clientHeight || 0,
            He;
        var x = y.ownerDocument || dn
          , E = Mn(y.pageX) ? y.nodeType || Mn(y.left) || Mn(y.top) ? Dn(y)[0].getBoundingClientRect() : y : {
            left: y.pageX - ze(x),
            top: y.pageY - Dr(x),
            right: y.pageX - ze(x) + 1,
            bottom: y.pageY - Dr(x) + 1
        };
        return Mn(E.right) && !Mn(E.width) ? (E.right = E.left + E.width,
        E.bottom = E.top + E.height) : Mn(E.width) && (E = {
            width: E.right - E.left,
            height: E.bottom - E.top,
            right: E.right,
            left: E.left,
            bottom: E.bottom,
            top: E.top
        }),
        E
    }
    function we(y, x, E) {
        var M, H = y.vars, V = H[E], gt = y._listeners[x];
        return bn(V) && (M = V.apply(H.callbackScope || y, H[E + "Params"] || [y.pointerEvent])),
        gt && y.dispatchEvent(x) === !1 && (M = !1),
        M
    }
    function Cr(y, x) {
        var E, M, H, V = Dn(y)[0];
        return V.nodeType || V === ie ? Rn(V, x) : Mn(y.left) ? {
            left: M = y.min || y.minX || y.minRotation || 0,
            top: E = y.min || y.minY || 0,
            width: (y.max || y.maxX || y.maxRotation || 0) - M,
            height: (y.max || y.maxY || 0) - E
        } : (H = {
            x: 0,
            y: 0
        },
        {
            left: y.left - H.x,
            top: y.top - H.y,
            width: y.width,
            height: y.height
        })
    }
    function On(y, x, E, M, H, V) {
        var gt, at, dt, wt = {};
        if (x)
            if (H !== 1 && x instanceof Array) {
                if (wt.end = gt = [],
                dt = x.length,
                Xn(x[0]))
                    for (at = 0; at < dt; at++)
                        gt[at] = Tn(x[at], H);
                else
                    for (at = 0; at < dt; at++)
                        gt[at] = x[at] * H;
                E += 1.1,
                M -= 1.1
            } else
                bn(x) ? wt.end = function(jt) {
                    var xt, vt, $t = x.call(y, jt);
                    if (H !== 1)
                        if (Xn($t)) {
                            for (vt in xt = {},
                            $t)
                                xt[vt] = $t[vt] * H;
                            $t = xt
                        } else
                            $t *= H;
                    return $t
                }
                : wt.end = x;
        return !E && E !== 0 || (wt.max = E),
        !M && M !== 0 || (wt.min = M),
        V && (wt.velocity = 0),
        wt
    }
    function zn(y) {
        var x;
        return !(!y || !y.getAttribute || y === gn) && (!((x = y.getAttribute("data-clickable")) !== "true" && (x === "false" || !Ur.test(y.nodeName + "") && y.getAttribute("contentEditable") !== "true")) || zn(y.parentNode))
    }
    function Yn(y, x) {
        for (var E, M = y.length; M--; )
            (E = y[M]).ondragstart = E.onselectstart = x ? null : Tr,
            Bt.set(E, {
                lazy: !0,
                userSelect: x ? "text" : "none"
            })
    }
    function Yr(y, x) {
        y = Bt.utils.toArray(y)[0],
        x = x || {};
        var E, M, H, V, gt, at, dt = document.createElement("div"), wt = dt.style, jt = y.firstChild, xt = 0, vt = 0, $t = y.scrollTop, oe = y.scrollLeft, se = y.scrollWidth, _e = y.scrollHeight, xe = 0, de = 0, Ue = 0;
        Wr && x.force3D !== !1 ? (gt = "translate3d(",
        at = "px,0px)") : Ar && (gt = "translate(",
        at = "px)"),
        this.scrollTop = function(pt, he) {
            if (!arguments.length)
                return -this.top();
            this.top(-pt, he)
        }
        ,
        this.scrollLeft = function(pt, he) {
            if (!arguments.length)
                return -this.left();
            this.left(-pt, he)
        }
        ,
        this.left = function(pt, he) {
            if (!arguments.length)
                return -(y.scrollLeft + vt);
            var Me = y.scrollLeft - oe
              , Ut = vt;
            if ((2 < Me || Me < -2) && !he)
                return oe = y.scrollLeft,
                Bt.killTweensOf(this, {
                    left: 1,
                    scrollLeft: 1
                }),
                this.left(-oe),
                void (x.onKill && x.onKill());
            (pt = -pt) < 0 ? (vt = pt - .5 | 0,
            pt = 0) : de < pt ? (vt = pt - de | 0,
            pt = de) : vt = 0,
            (vt || Ut) && (this._skip || (wt[Ar] = gt + -vt + "px," + -xt + at),
            0 <= vt + xe && (wt.paddingRight = vt + xe + "px")),
            y.scrollLeft = 0 | pt,
            oe = y.scrollLeft
        }
        ,
        this.top = function(pt, he) {
            if (!arguments.length)
                return -(y.scrollTop + xt);
            var Me = y.scrollTop - $t
              , Ut = xt;
            if ((2 < Me || Me < -2) && !he)
                return $t = y.scrollTop,
                Bt.killTweensOf(this, {
                    top: 1,
                    scrollTop: 1
                }),
                this.top(-$t),
                void (x.onKill && x.onKill());
            (pt = -pt) < 0 ? (xt = pt - .5 | 0,
            pt = 0) : Ue < pt ? (xt = pt - Ue | 0,
            pt = Ue) : xt = 0,
            (xt || Ut) && (this._skip || (wt[Ar] = gt + -vt + "px," + -xt + at)),
            y.scrollTop = 0 | pt,
            $t = y.scrollTop
        }
        ,
        this.maxScrollTop = function() {
            return Ue
        }
        ,
        this.maxScrollLeft = function() {
            return de
        }
        ,
        this.disable = function() {
            for (jt = dt.firstChild; jt; )
                V = jt.nextSibling,
                y.appendChild(jt),
                jt = V;
            y === dt.parentNode && y.removeChild(dt)
        }
        ,
        this.enable = function() {
            if ((jt = y.firstChild) !== dt) {
                for (; jt; )
                    V = jt.nextSibling,
                    dt.appendChild(jt),
                    jt = V;
                y.appendChild(dt),
                this.calibrate()
            }
        }
        ,
        this.calibrate = function(pt) {
            var he, Me, Ut, ae = y.clientWidth === E;
            $t = y.scrollTop,
            oe = y.scrollLeft,
            ae && y.clientHeight === M && dt.offsetHeight === H && se === y.scrollWidth && _e === y.scrollHeight && !pt || ((xt || vt) && (Me = this.left(),
            Ut = this.top(),
            this.left(-y.scrollLeft),
            this.top(-y.scrollTop)),
            he = Lr(y),
            ae && !pt || (wt.display = "block",
            wt.width = "auto",
            wt.paddingRight = "0px",
            (xe = Math.max(0, y.scrollWidth - y.clientWidth)) && (xe += parseFloat(he.paddingLeft) + (Bn ? parseFloat(he.paddingRight) : 0))),
            wt.display = "inline-block",
            wt.position = "relative",
            wt.overflow = "visible",
            wt.verticalAlign = "top",
            wt.boxSizing = "content-box",
            wt.width = "100%",
            wt.paddingRight = xe + "px",
            Bn && (wt.paddingBottom = he.paddingBottom),
            E = y.clientWidth,
            M = y.clientHeight,
            se = y.scrollWidth,
            _e = y.scrollHeight,
            de = y.scrollWidth - E,
            Ue = y.scrollHeight - M,
            H = dt.offsetHeight,
            wt.display = "block",
            (Me || Ut) && (this.left(Me),
            this.top(Ut)))
        }
        ,
        this.content = dt,
        this.element = y,
        this._skip = !1,
        this.enable()
    }
    function Er(y) {
        if (ye() && document.body) {
            var x = window && window.navigator;
            ie = window,
            dn = document,
            Ze = dn.documentElement,
            gn = dn.body,
            ii = jn("div"),
            Fn = !!window.PointerEvent,
            (Pn = jn("div")).style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",
            mr = Pn.style.cursor === "grab" ? "grab" : "move",
            ue = x && x.userAgent.toLowerCase().indexOf("android") !== -1,
            gr = "ontouchstart"in Ze && "orientation"in ie || x && (0 < x.MaxTouchPoints || 0 < x.msMaxTouchPoints),
            M = jn("div"),
            H = jn("div"),
            V = H.style,
            gt = gn,
            V.display = "inline-block",
            V.position = "relative",
            M.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",
            M.appendChild(H),
            gt.appendChild(M),
            E = H.offsetHeight + 18 > M.scrollHeight,
            gt.removeChild(M),
            Bn = E,
            Re = function(at) {
                for (var dt = at.split(","), wt = ("onpointerdown"in ii ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown"in ii ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : at).split(","), jt = {}, xt = 4; -1 < --xt; )
                    jt[dt[xt]] = wt[xt],
                    jt[wt[xt]] = dt[xt];
                try {
                    Ze.addEventListener("test", null, Object.defineProperty({}, "passive", {
                        get: function() {
                            ir = 1
                        }
                    }))
                } catch {}
                return jt
            }("touchstart,touchmove,touchend,touchcancel"),
            Se(dn, "touchcancel", Tr),
            Se(ie, "touchmove", Tr),
            gn && gn.addEventListener("touchstart", Tr),
            Se(dn, "contextmenu", function() {
                for (var at in In)
                    In[at].isPressed && In[at].endDrag()
            }),
            Bt = Ie = Xr()
        }
        var E, M, H, V, gt;
        Bt ? (qe = Bt.plugins.inertia,
        Wn = Bt.core.context || function() {}
        ,
        We = Bt.utils.checkPrefix,
        Ar = We(Ar),
        $r = We($r),
        Dn = Bt.utils.toArray,
        oi = Bt.core.getStyleSaver,
        Wr = !!We("perspective")) : y && console.warn("Please techDrag.registerPlugin(Draggable)")
    }
    var Bt, ie, dn, Ze, gn, ii, Pn, Ie, We, Dn, ir, gr, Re, ce, ue, qe, mr, Fn, Wn, oi, Wr, Bn, Sr, Rr = 0, Ar = "transform", $r = "transformOrigin", mn = Array.isArray, ai = 180 / Math.PI, Nn = 1e20, si = new wn, nn = Date.now || function() {
        return new Date().getTime()
    }
    , $n = [], In = {}, jr = 0, Ur = /^(?:a|input|textarea|button|select)$/i, Un = 0, Ln = {}, vn = {}, vr = function(x) {
        return !(x && x !== Ze && x.nodeType !== 9 && x !== dn.body && x !== ie && x.nodeType && x.parentNode)
    }, He = {}, $e = {}, Rn = function(x, E) {
        E = Dn(E)[0];
        var M, H, V, gt, at, dt, wt, jt, xt, vt, $t, oe, se, _e = x.getBBox && x.ownerSVGElement, xe = x.ownerDocument || dn;
        if (x === ie)
            V = Dr(xe),
            H = (M = ze(xe)) + (xe.documentElement.clientWidth || x.innerWidth || xe.body.clientWidth || 0),
            gt = V + ((x.innerHeight || 0) - 20 < xe.documentElement.clientHeight ? xe.documentElement.clientHeight : x.innerHeight || xe.body.clientHeight || 0);
        else {
            if (E === ie || Mn(E))
                return x.getBoundingClientRect();
            M = V = 0,
            _e ? ($t = (vt = x.getBBox()).width,
            oe = vt.height) : (x.viewBox && (vt = x.viewBox.baseVal) && (M = vt.x || 0,
            V = vt.y || 0,
            $t = vt.width,
            oe = vt.height),
            $t || (vt = (se = Lr(x)).boxSizing === "border-box",
            $t = (parseFloat(se.width) || x.clientWidth || 0) + (vt ? 0 : parseFloat(se.borderLeftWidth) + parseFloat(se.borderRightWidth)),
            oe = (parseFloat(se.height) || x.clientHeight || 0) + (vt ? 0 : parseFloat(se.borderTopWidth) + parseFloat(se.borderBottomWidth)))),
            H = $t,
            gt = oe
        }
        return x === E ? {
            left: M,
            top: V,
            width: H - M,
            height: gt - V
        } : (dt = (at = er(E, !0).multiply(er(x))).apply({
            x: M,
            y: V
        }),
        wt = at.apply({
            x: H,
            y: V
        }),
        jt = at.apply({
            x: H,
            y: gt
        }),
        xt = at.apply({
            x: M,
            y: gt
        }),
        {
            left: M = Math.min(dt.x, wt.x, jt.x, xt.x),
            top: V = Math.min(dt.y, wt.y, jt.y, xt.y),
            width: Math.max(dt.x, wt.x, jt.x, xt.x) - M,
            height: Math.max(dt.y, wt.y, jt.y, xt.y) - V
        })
    }, fe = ((Sr = ui.prototype).addEventListener = function(x, E) {
        var M = this._listeners[x] || (this._listeners[x] = []);
        ~M.indexOf(E) || M.push(E)
    }
    ,
    Sr.removeEventListener = function(x, E) {
        var M = this._listeners[x]
          , H = M && M.indexOf(E);
        0 <= H && M.splice(H, 1)
    }
    ,
    Sr.dispatchEvent = function(x) {
        var E, M = this;
        return (this._listeners[x] || []).forEach(function(H) {
            return H.call(M, {
                type: x,
                target: M.target
            }) === !1 && (E = !1)
        }),
        E
    }
    ,
    ui);
    function ui(y) {
        this._listeners = {},
        this.target = y || this
    }
    var hi, Mr = (function(x, E) {
        x.prototype = Object.create(E.prototype),
        (x.prototype.constructor = x).__proto__ = E
    }(yn, hi = fe),
    yn.register = function(x) {
        Bt = x,
        Er()
    }
    ,
    yn.create = function(x, E) {
        return Ie || Er(!0),
        Dn(x).map(function(M) {
            return new yn(M,E)
        })
    }
    ,
    yn.get = function(x) {
        return In[(Dn(x)[0] || {})._gsDragID]
    }
    ,
    yn.timeSinceDrag = function() {
        return (nn() - Un) / 1e3
    }
    ,
    yn.hitTest = function(x, E, M) {
        if (x === E)
            return !1;
        var H, V, gt, at = rr(x), dt = rr(E), wt = at.top, jt = at.left, xt = at.right, vt = at.bottom, $t = at.width, oe = at.height, se = dt.left > xt || dt.right < jt || dt.top > vt || dt.bottom < wt;
        return se || !M ? !se : (gt = (M + "").indexOf("%") !== -1,
        M = parseFloat(M) || 0,
        (H = {
            left: Math.max(jt, dt.left),
            top: Math.max(wt, dt.top)
        }).width = Math.min(xt, dt.right) - H.left,
        H.height = Math.min(vt, dt.bottom) - H.top,
        !(H.width < 0 || H.height < 0) && (gt ? $t * oe * (M *= .01) <= (V = H.width * H.height) || V >= dt.width * dt.height * M : H.width > M && H.height > M))
    }
    ,
    yn);
    function yn(y, x) {
        var E;
        E = hi.call(this) || this,
        Ie || Er(1),
        y = Dn(y)[0],
        E.styles = oi && oi(y, "transform,left,top"),
        qe = qe || Bt.plugins.inertia,
        E.vars = x = Tn(x || {}),
        E.target = y,
        E.x = E.y = E.rotation = 0,
        E.dragResistance = parseFloat(x.dragResistance) || 0,
        E.edgeResistance = isNaN(x.edgeResistance) ? 1 : parseFloat(x.edgeResistance) || 0,
        E.lockAxis = x.lockAxis,
        E.autoScroll = x.autoScroll || 0,
        E.lockedAxis = null,
        E.allowEventDefault = !!x.allowEventDefault,
        Bt.getProperty(y, "x");
        function M(N, P) {
            return parseFloat(Dt.get(y, N, P))
        }
        function H(N) {
            return Le(N),
            N.stopImmediatePropagation && N.stopImmediatePropagation(),
            !1
        }
        function V(N) {
            if (f.autoScroll && f.isDragging && (j || Oe)) {
                var P, F, z, ot, it, tt, st, _t, qt = y, mt = 15 * f.autoScroll;
                for (j = !1,
                vn.scrollTop = ie.pageYOffset != null ? ie.pageYOffset : Pt.documentElement.scrollTop != null ? Pt.documentElement.scrollTop : Pt.body.scrollTop,
                vn.scrollLeft = ie.pageXOffset != null ? ie.pageXOffset : Pt.documentElement.scrollLeft != null ? Pt.documentElement.scrollLeft : Pt.body.scrollLeft,
                ot = f.pointerX - vn.scrollLeft,
                it = f.pointerY - vn.scrollTop; qt && !F; )
                    P = (F = vr(qt.parentNode)) ? vn : qt.parentNode,
                    z = F ? {
                        bottom: Math.max(Ze.clientHeight, ie.innerHeight || 0),
                        right: Math.max(Ze.clientWidth, ie.innerWidth || 0),
                        left: 0,
                        top: 0
                    } : P.getBoundingClientRect(),
                    tt = st = 0,
                    w && ((_t = P._gsMaxScrollY - P.scrollTop) < 0 ? st = _t : it > z.bottom - ht && _t ? (j = !0,
                    st = Math.min(_t, mt * (1 - Math.max(0, z.bottom - it) / ht) | 0)) : it < z.top + ft && P.scrollTop && (j = !0,
                    st = -Math.min(P.scrollTop, mt * (1 - Math.max(0, it - z.top) / ft) | 0)),
                    st && (P.scrollTop += st)),
                    m && ((_t = P._gsMaxScrollX - P.scrollLeft) < 0 ? tt = _t : ot > z.right - yt && _t ? (j = !0,
                    tt = Math.min(_t, mt * (1 - Math.max(0, z.right - ot) / yt) | 0)) : ot < z.left + me && P.scrollLeft && (j = !0,
                    tt = -Math.min(P.scrollLeft, mt * (1 - Math.max(0, ot - z.left) / me) | 0)),
                    tt && (P.scrollLeft += tt)),
                    F && (tt || st) && (ie.scrollTo(P.scrollLeft, P.scrollTop),
                    Vn(f.pointerX + tt, f.pointerY + st)),
                    qt = P
            }
            if (Oe) {
                var Ct = f.x
                  , bt = f.y;
                s ? (f.deltaX = Ct - parseFloat(Dt.rotation),
                f.rotation = Ct,
                Dt.rotation = Ct + "deg",
                Dt.renderTransform(1, Dt)) : pt ? (w && (f.deltaY = bt - pt.top(),
                pt.top(bt)),
                m && (f.deltaX = Ct - pt.left(),
                pt.left(Ct))) : a ? (w && (f.deltaY = bt - parseFloat(Dt.y),
                Dt.y = bt + "px"),
                m && (f.deltaX = Ct - parseFloat(Dt.x),
                Dt.x = Ct + "px"),
                Dt.renderTransform(1, Dt)) : (w && (f.deltaY = bt - parseFloat(y.style.top || 0),
                y.style.top = bt + "px"),
                m && (f.deltaX = Ct - parseFloat(y.style.left || 0),
                y.style.left = Ct + "px")),
                !bi || N || Gr || (!(Gr = !0) === we(f, "drag", "onDrag") && (m && (f.x -= f.deltaX),
                w && (f.y -= f.deltaY),
                V(!0)),
                Gr = !1)
            }
            Oe = !1
        }
        function gt(N, P) {
            var F, z, ot = f.x, it = f.y;
            y._techDrag || (Dt = Bt.core.getCache(y)),
            Dt.uncache && Bt.getProperty(y, "x"),
            a ? (f.x = parseFloat(Dt.x),
            f.y = parseFloat(Dt.y)) : s ? f.x = f.rotation = parseFloat(Dt.rotation) : pt ? (f.y = pt.top(),
            f.x = pt.left()) : (f.y = parseFloat(y.style.top || (z = Lr(y)) && z.top) || 0,
            f.x = parseFloat(y.style.left || (z || {}).left) || 0),
            (ar || Pe || En) && !P && (f.isDragging || f.isThrowing) && (En && (Ln.x = f.x,
            Ln.y = f.y,
            (F = En(Ln)).x !== f.x && (f.x = F.x,
            Oe = !0),
            F.y !== f.y && (f.y = F.y,
            Oe = !0)),
            ar && (F = ar(f.x)) !== f.x && (f.x = F,
            s && (f.rotation = F),
            Oe = !0),
            Pe && ((F = Pe(f.y)) !== f.y && (f.y = F),
            Oe = !0)),
            Oe && V(!0),
            N || (f.deltaX = f.x - ot,
            f.deltaY = f.y - it,
            we(f, "throwupdate", "onThrowUpdate"))
        }
        function at(N, P, F, z) {
            return P == null && (P = -Nn),
            F == null && (F = Nn),
            bn(N) ? function(ot) {
                var it = f.isPressed ? 1 - f.edgeResistance : 1;
                return N.call(f, (F < ot ? F + (ot - F) * it : ot < P ? P + (ot - P) * it : ot) * z) * z
            }
            : mn(N) ? function(ot) {
                for (var it, tt, st = N.length, _t = 0, qt = Nn; -1 < --st; )
                    (tt = (it = N[st]) - ot) < 0 && (tt = -tt),
                    tt < qt && P <= it && it <= F && (_t = st,
                    qt = tt);
                return N[_t]
            }
            : isNaN(N) ? function(ot) {
                return ot
            }
            : function() {
                return N * z
            }
        }
        function dt() {
            var N, P, F, z;
            qn = !1,
            pt ? (pt.calibrate(),
            f.minX = ge = -pt.maxScrollLeft(),
            f.minY = je = -pt.maxScrollTop(),
            f.maxX = pe = f.maxY = Kt = 0,
            qn = !0) : x.bounds && (N = Cr(x.bounds, y.parentNode),
            s ? (f.minX = ge = N.left,
            f.maxX = pe = N.left + N.width,
            f.minY = je = f.maxY = Kt = 0) : Mn(x.bounds.maxX) && Mn(x.bounds.maxY) ? (P = Cr(y, y.parentNode),
            f.minX = ge = Math.round(M(d, "px") + N.left - P.left),
            f.minY = je = Math.round(M(g, "px") + N.top - P.top),
            f.maxX = pe = Math.round(ge + (N.width - P.width)),
            f.maxY = Kt = Math.round(je + (N.height - P.height))) : (N = x.bounds,
            f.minX = ge = N.minX,
            f.minY = je = N.minY,
            f.maxX = pe = N.maxX,
            f.maxY = Kt = N.maxY),
            pe < ge && (f.minX = pe,
            f.maxX = pe = ge,
            ge = f.minX),
            Kt < je && (f.minY = Kt,
            f.maxY = Kt = je,
            je = f.minY),
            s && (f.minRotation = ge,
            f.maxRotation = pe),
            qn = !0),
            x.liveSnap && (F = x.liveSnap === !0 ? x.snap || {} : x.liveSnap,
            z = mn(F) || bn(F),
            s ? (ar = at(z ? F : F.rotation, ge, pe, 1),
            Pe = null) : F.points ? En = function(it, tt, st, _t, qt, mt, Ct) {
                return mt = mt && mt < Nn ? mt * mt : Nn,
                bn(it) ? function(bt) {
                    var Te, Zt, zt, an = f.isPressed ? 1 - f.edgeResistance : 1, sn = bt.x, Sn = bt.y;
                    return bt.x = sn = st < sn ? st + (sn - st) * an : sn < tt ? tt + (sn - tt) * an : sn,
                    bt.y = Sn = qt < Sn ? qt + (Sn - qt) * an : Sn < _t ? _t + (Sn - _t) * an : Sn,
                    (Te = it.call(f, bt)) !== bt && (bt.x = Te.x,
                    bt.y = Te.y),
                    Ct !== 1 && (bt.x *= Ct,
                    bt.y *= Ct),
                    mt < Nn && (Zt = bt.x - sn,
                    zt = bt.y - Sn,
                    mt < Zt * Zt + zt * zt && (bt.x = sn,
                    bt.y = Sn)),
                    bt
                }
                : mn(it) ? function(bt) {
                    for (var Te, Zt, zt, an, sn = it.length, Sn = 0, Kr = Nn; -1 < --sn; )
                        (an = (Te = (zt = it[sn]).x - bt.x) * Te + (Zt = zt.y - bt.y) * Zt) < Kr && (Sn = sn,
                        Kr = an);
                    return Kr <= mt ? it[Sn] : bt
                }
                : function(bt) {
                    return bt
                }
            }(z ? F : F.points, ge, pe, je, Kt, F.radius, pt ? -1 : 1) : (m && (ar = at(z ? F : F.x || F.left || F.scrollLeft, ge, pe, pt ? -1 : 1)),
            w && (Pe = at(z ? F : F.y || F.top || F.scrollTop, je, Kt, pt ? -1 : 1))))
        }
        function wt() {
            f.isThrowing = !1,
            we(f, "throwcomplete", "onThrowComplete")
        }
        function jt() {
            f.isThrowing = !1
        }
        function xt(N, P) {
            var F, z, ot, it;
            N && qe ? (N === !0 && (F = x.snap || x.liveSnap || {},
            z = mn(F) || bn(F),
            N = {
                resistance: (x.throwResistance || x.resistance || 1e3) / (s ? 10 : 1)
            },
            s ? N.rotation = On(f, z ? F : F.rotation, pe, ge, 1, P) : (m && (N[d] = On(f, z ? F : F.points || F.x || F.left, pe, ge, pt ? -1 : 1, P || f.lockedAxis === "x")),
            w && (N[g] = On(f, z ? F : F.points || F.y || F.top, Kt, je, pt ? -1 : 1, P || f.lockedAxis === "y")),
            (F.points || mn(F) && Xn(F[0])) && (N.linkedProps = d + "," + g,
            N.radius = F.radius))),
            f.isThrowing = !0,
            it = isNaN(x.overshootTolerance) ? x.edgeResistance === 1 ? 0 : 1 - f.edgeResistance + .2 : x.overshootTolerance,
            N.duration || (N.duration = {
                max: Math.max(x.minDuration || 0, "maxDuration"in x ? x.maxDuration : 2),
                min: isNaN(x.minDuration) ? it === 0 || Xn(N) && 1e3 < N.resistance ? 0 : .5 : x.minDuration,
                overshoot: it
            }),
            f.tween = ot = Bt.to(pt || y, {
                inertia: N,
                data: "_draggable",
                onComplete: wt,
                onInterrupt: jt,
                onUpdate: x.fastMode ? we : gt,
                onUpdateParams: x.fastMode ? [f, "onthrowupdate", "onThrowUpdate"] : F && F.radius ? [!1, !0] : []
            }),
            x.fastMode || (pt && (pt._skip = !0),
            ot.render(1e9, !0, !0),
            gt(!0, !0),
            f.endX = f.x,
            f.endY = f.y,
            s && (f.endRotation = f.x),
            ot.play(0),
            gt(!0, !0),
            pt && (pt._skip = !1))) : qn && f.applyBounds()
        }
        function vt(N) {
            var P, F = re;
            re = er(y.parentNode, !0),
            N && f.isPressed && !re.equals(F || new wn) && (P = F.inverse().apply({
                x: he,
                y: Me
            }),
            re.apply(P, P),
            he = P.x,
            Me = P.y),
            re.equals(si) && (re = null)
        }
        function $t() {
            var N, P, F, z = 1 - f.edgeResistance, ot = Et ? ze(Pt) : 0, it = Et ? Dr(Pt) : 0;
            a && (Dt.x = M(d, "px") + "px",
            Dt.y = M(g, "px") + "px",
            Dt.renderTransform()),
            vt(!1),
            $e.x = f.pointerX - ot,
            $e.y = f.pointerY - it,
            re && re.apply($e, $e),
            he = $e.x,
            Me = $e.y,
            Oe && (Vn(f.pointerX, f.pointerY),
            V(!0)),
            pi = er(y),
            pt ? (dt(),
            ae = pt.top(),
            Ut = pt.left()) : (It() ? (gt(!0, !0),
            dt()) : f.applyBounds(),
            s ? (N = y.ownerSVGElement ? [Dt.xOrigin - y.getBBox().x, Dt.yOrigin - y.getBBox().y] : (Lr(y)[$r] || "0 0").split(" "),
            Jt = f.rotationOrigin = er(y).apply({
                x: parseFloat(N[0]) || 0,
                y: parseFloat(N[1]) || 0
            }),
            gt(!0, !0),
            P = f.pointerX - Jt.x - ot,
            F = Jt.y - f.pointerY + it,
            Ut = f.x,
            ae = f.y = Math.atan2(F, P) * ai) : (ae = M(g, "px"),
            Ut = M(d, "px"))),
            qn && z && (pe < Ut ? Ut = pe + (Ut - pe) / z : Ut < ge && (Ut = ge - (ge - Ut) / z),
            s || (Kt < ae ? ae = Kt + (ae - Kt) / z : ae < je && (ae = je - (je - ae) / z))),
            f.startX = Ut = fn(Ut),
            f.startY = ae = fn(ae)
        }
        function oe() {
            !Pn.parentNode || It() || f.isDragging || Pn.parentNode.removeChild(Pn)
        }
        function se(N, P) {
            var F;
            if (!Ue || f.isPressed || !N || !(N.type !== "mousedown" && N.type !== "pointerdown" || P) && nn() - be < 30 && Re[f.pointerEvent.type])
                hn && N && Ue && Le(N);
            else {
                if (Vr = It(),
                t = !1,
                f.pointerEvent = N,
                Re[N.type] ? (Qe = ~N.type.indexOf("touch") ? N.currentTarget || N.target : Pt,
                Se(Qe, "touchend", on),
                Se(Qe, "touchmove", Nt),
                Se(Qe, "touchcancel", on),
                Se(Pt, "touchstart", kr)) : (Qe = null,
                Se(Pt, "mousemove", Nt)),
                tn = null,
                Fn && Qe || (Se(Pt, "mouseup", on),
                N && N.target && Se(N.target, "mouseup", on)),
                Ft = Xe.call(f, N.target) && x.dragClickables === !1 && !P)
                    return Se(N.target, "change", on),
                    we(f, "pressInit", "onPressInit"),
                    we(f, "press", "onPress"),
                    Yn(S, !0),
                    void (hn = !1);
                if (Ke = !(!Qe || m == w || f.vars.allowNativeTouchScrolling === !1 || f.vars.allowContextMenu && N && (N.ctrlKey || 2 < N.which)) && (m ? "y" : "x"),
                (hn = !Ke && !f.allowEventDefault) && (Le(N),
                Se(ie, "touchforcechange", Le)),
                N.changedTouches ? (N = rn = N.changedTouches[0],
                Cn = N.identifier) : N.pointerId ? Cn = N.pointerId : rn = Cn = null,
                Rr++,
                function(ot) {
                    $n.push(ot),
                    $n.length === 1 && Bt.ticker.add(pr)
                }(V),
                Me = f.pointerY = N.pageY,
                he = f.pointerX = N.pageX,
                we(f, "pressInit", "onPressInit"),
                (Ke || f.autoScroll) && Ye(y.parentNode),
                !y.parentNode || !f.autoScroll || pt || s || !y.parentNode._gsMaxScrollX || Pn.parentNode || y.getBBox || (Pn.style.width = y.parentNode.scrollWidth + "px",
                y.parentNode.appendChild(Pn)),
                $t(),
                f.tween && f.tween.kill(),
                f.isThrowing = !1,
                Bt.killTweensOf(pt || y, Y, !0),
                pt && Bt.killTweensOf(y, {
                    scrollTo: 1
                }, !0),
                f.tween = f.lockedAxis = null,
                !x.zIndexBoost && (s || pt || x.zIndexBoost === !1) || (y.style.zIndex = yn.zIndex++),
                f.isPressed = !0,
                bi = !(!x.onDrag && !f._listeners.drag),
                _n = !(!x.onMove && !f._listeners.move),
                x.cursor !== !1 || x.activeCursor)
                    for (F = S.length; -1 < --F; )
                        Bt.set(S[F], {
                            cursor: x.activeCursor || x.cursor || (mr === "grab" ? "grabbing" : mr)
                        });
                we(f, "press", "onPress")
            }
        }
        function _e(N) {
            if (N && f.isDragging && !pt) {
                var P = N.target || y.parentNode
                  , F = P.scrollLeft - P._gsScrollX
                  , z = P.scrollTop - P._gsScrollY;
                (F || z) && (re ? (he -= F * re.a + z * re.c,
                Me -= z * re.d + F * re.b) : (he -= F,
                Me -= z),
                P._gsScrollX += F,
                P._gsScrollY += z,
                Vn(f.pointerX, f.pointerY))
            }
        }
        function xe(N) {
            var P = nn()
              , F = P - be < 100
              , z = P - R < 50
              , ot = F && Vt === be
              , it = f.pointerEvent && f.pointerEvent.defaultPrevented
              , tt = F && Qr === be
              , st = N.isTrusted || N.isTrusted == null && F && ot;
            if ((ot || z && f.vars.suppressClickOnDrag !== !1) && N.stopImmediatePropagation && N.stopImmediatePropagation(),
            F && (!f.pointerEvent || !f.pointerEvent.defaultPrevented) && (!ot || st && !tt))
                return st && ot && (Qr = be),
                void (Vt = be);
            (f.isPressed || z || F) && (st && N.detail && F && !it || Le(N)),
            F || z || t || (N && N.target && (f.pointerEvent = N),
            we(f, "click", "onClick"))
        }
        function de(N) {
            return re ? {
                x: N.x * re.a + N.y * re.c + re.e,
                y: N.x * re.b + N.y * re.d + re.f
            } : {
                x: N.x,
                y: N.y
            }
        }
        var Ue, pt, he, Me, Ut, ae, qn, bi, _n, pe, ge, Kt, je, rn, Cn, Jt, Oe, or, ar, Pe, En, Ft, Qe, re, Vr, Ke, tn, Gr, Vt, Qr, hn, pi, t, n = (x.type || "x,y").toLowerCase(), a = ~n.indexOf("x") || ~n.indexOf("y"), s = n.indexOf("rotation") !== -1, d = s ? "rotation" : a ? "x" : "left", g = a ? "y" : "top", m = !(!~n.indexOf("x") && !~n.indexOf("left") && n !== "scroll"), w = !(!~n.indexOf("y") && !~n.indexOf("top") && n !== "scroll"), k = x.minimumMovement || 2, f = ln(E), S = Dn(x.trigger || x.handle || y), Y = {}, R = 0, j = !1, ft = x.autoScrollMarginTop || 40, yt = x.autoScrollMarginRight || 40, ht = x.autoScrollMarginBottom || 40, me = x.autoScrollMarginLeft || 40, Xe = x.clickableTest || zn, be = 0, Dt = y._techDrag || Bt.core.getCache(y), Et = function N(P) {
            return Lr(P).position === "fixed" || ((P = P.parentNode) && P.nodeType === 1 ? N(P) : void 0)
        }(y), Pt = y.ownerDocument || dn, It = function() {
            return f.tween && f.tween.isActive()
        }, Nt = function(P) {
            var F, z, ot, it, tt, st, _t = P;
            if (Ue && !ce && f.isPressed && P) {
                if (F = (f.pointerEvent = P).changedTouches) {
                    if ((P = F[0]) !== rn && P.identifier !== Cn) {
                        for (it = F.length; -1 < --it && (P = F[it]).identifier !== Cn && P.target !== y; )
                            ;
                        if (it < 0)
                            return
                    }
                } else if (P.pointerId && Cn && P.pointerId !== Cn)
                    return;
                Qe && Ke && !tn && ($e.x = P.pageX - (Et ? ze(Pt) : 0),
                $e.y = P.pageY - (Et ? Dr(Pt) : 0),
                re && re.apply($e, $e),
                z = $e.x,
                ot = $e.y,
                ((tt = Math.abs(z - he)) !== (st = Math.abs(ot - Me)) && (k < tt || k < st) || ue && Ke === tn) && (tn = st < tt && m ? "x" : "y",
                Ke && tn !== Ke && Se(ie, "touchforcechange", Le),
                f.vars.lockAxisOnTouchScroll !== !1 && m && w && (f.lockedAxis = tn === "x" ? "y" : "x",
                bn(f.vars.onLockAxis) && f.vars.onLockAxis.call(f, _t)),
                ue && Ke === tn)) ? on(_t) : (hn = f.allowEventDefault || Ke && (!tn || Ke === tn) || _t.cancelable === !1 ? hn && !1 : (Le(_t),
                !0),
                f.autoScroll && (j = !0),
                Vn(P.pageX, P.pageY, _n))
            } else
                hn && P && Ue && Le(P)
        }, Vn = function(P, F, z) {
            var ot, it, tt, st, _t, qt, mt = 1 - f.dragResistance, Ct = 1 - f.edgeResistance, bt = f.pointerX, Te = f.pointerY, Zt = ae, zt = f.x, an = f.y, sn = f.endX, Sn = f.endY, Kr = f.endRotation, Ti = Oe;
            f.pointerX = P,
            f.pointerY = F,
            Et && (P -= ze(Pt),
            F -= Dr(Pt)),
            s ? (st = Math.atan2(Jt.y - F, P - Jt.x) * ai,
            180 < (_t = f.y - st) ? (ae -= 360,
            f.y = st) : _t < -180 && (ae += 360,
            f.y = st),
            tt = f.x !== Ut || Math.abs(ae - st) > k ? (f.y = st,
            Ut + (ae - st) * mt) : Ut) : (re && (qt = P * re.a + F * re.c + re.e,
            F = P * re.b + F * re.d + re.f,
            P = qt),
            (it = F - Me) < k && -k < it && (it = 0),
            (ot = P - he) < k && -k < ot && (ot = 0),
            (f.lockAxis || f.lockedAxis) && (ot || it) && ((qt = f.lockedAxis) || (f.lockedAxis = qt = m && Math.abs(ot) > Math.abs(it) ? "y" : w ? "x" : null,
            qt && bn(f.vars.onLockAxis) && f.vars.onLockAxis.call(f, f.pointerEvent)),
            qt === "y" ? it = 0 : qt === "x" && (ot = 0)),
            tt = fn(Ut + ot * mt),
            st = fn(ae + it * mt)),
            (ar || Pe || En) && (f.x !== tt || f.y !== st && !s) && (En && (Ln.x = tt,
            Ln.y = st,
            qt = En(Ln),
            tt = fn(qt.x),
            st = fn(qt.y)),
            ar && (tt = fn(ar(tt))),
            Pe && (st = fn(Pe(st)))),
            qn && (pe < tt ? tt = pe + Math.round((tt - pe) * Ct) : tt < ge && (tt = ge + Math.round((tt - ge) * Ct)),
            s || (Kt < st ? st = Math.round(Kt + (st - Kt) * Ct) : st < je && (st = Math.round(je + (st - je) * Ct)))),
            f.x === tt && (f.y === st || s) || (s ? (f.endRotation = f.x = f.endX = tt,
            Oe = !0) : (w && (f.y = f.endY = st,
            Oe = !0),
            m && (f.x = f.endX = tt,
            Oe = !0)),
            z && we(f, "move", "onMove") === !1 ? (f.pointerX = bt,
            f.pointerY = Te,
            ae = Zt,
            f.x = zt,
            f.y = an,
            f.endX = sn,
            f.endY = Sn,
            f.endRotation = Kr,
            Oe = Ti) : !f.isDragging && f.isPressed && (f.isDragging = t = !0,
            we(f, "dragstart", "onDragStart")))
        }, on = function N(P, F) {
            if (Ue && f.isPressed && (!P || Cn == null || F || !(P.pointerId && P.pointerId !== Cn && P.target !== y || P.changedTouches && !function(Te, Zt) {
                for (var zt = Te.length; zt--; )
                    if (Te[zt].identifier === Zt)
                        return !0
            }(P.changedTouches, Cn)))) {
                f.isPressed = !1;
                var z, ot, it, tt, st, _t = P, qt = f.isDragging, mt = f.vars.allowContextMenu && P && (P.ctrlKey || 2 < P.which), Ct = Bt.delayedCall(.001, oe);
                if (Qe ? (Qt(Qe, "touchend", N),
                Qt(Qe, "touchmove", Nt),
                Qt(Qe, "touchcancel", N),
                Qt(Pt, "touchstart", kr)) : Qt(Pt, "mousemove", Nt),
                Qt(ie, "touchforcechange", Le),
                Fn && Qe || (Qt(Pt, "mouseup", N),
                P && P.target && Qt(P.target, "mouseup", N)),
                Oe = !1,
                qt && (R = Un = nn(),
                f.isDragging = !1),
                zr(V),
                Ft && !mt)
                    return P && (Qt(P.target, "change", N),
                    f.pointerEvent = _t),
                    Yn(S, !1),
                    we(f, "release", "onRelease"),
                    we(f, "click", "onClick"),
                    void (Ft = !1);
                for (ot = S.length; -1 < --ot; )
                    ri(S[ot], "cursor", x.cursor || (x.cursor !== !1 ? mr : null));
                if (Rr--,
                P) {
                    if ((z = P.changedTouches) && (P = z[0]) !== rn && P.identifier !== Cn) {
                        for (ot = z.length; -1 < --ot && (P = z[ot]).identifier !== Cn && P.target !== y; )
                            ;
                        if (ot < 0 && !F)
                            return
                    }
                    f.pointerEvent = _t,
                    f.pointerX = P.pageX,
                    f.pointerY = P.pageY
                }
                return mt && _t ? (Le(_t),
                hn = !0,
                we(f, "release", "onRelease")) : _t && !qt ? (hn = !1,
                Vr && (x.snap || x.bounds) && xt(x.inertia || x.throwProps),
                we(f, "release", "onRelease"),
                ue && _t.type === "touchmove" || _t.type.indexOf("cancel") !== -1 || (we(f, "click", "onClick"),
                nn() - be < 300 && we(f, "doubleclick", "onDoubleClick"),
                tt = _t.target || y,
                be = nn(),
                st = function() {
                    be === Vt || !f.enabled() || f.isPressed || _t.defaultPrevented || (tt.click ? tt.click() : Pt.createEvent && ((it = Pt.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, ie, 1, f.pointerEvent.screenX, f.pointerEvent.screenY, f.pointerX, f.pointerY, !1, !1, !1, !1, 0, null),
                    tt.dispatchEvent(it)))
                }
                ,
                ue || _t.defaultPrevented || Bt.delayedCall(.05, st))) : (xt(x.inertia || x.throwProps),
                f.allowEventDefault || !_t || x.dragClickables === !1 && Xe.call(f, _t.target) || !qt || Ke && (!tn || Ke !== tn) || _t.cancelable === !1 ? hn = !1 : (hn = !0,
                Le(_t)),
                we(f, "release", "onRelease")),
                It() && Ct.duration(f.tween.duration()),
                qt && we(f, "dragend", "onDragEnd"),
                !0
            }
            hn && P && Ue && Le(P)
        };
        return (or = yn.get(y)) && or.kill(),
        E.startDrag = function(N, P) {
            var F, z, ot, it;
            se(N || f.pointerEvent, !0),
            P && !f.hitTest(N || f.pointerEvent) && (F = rr(N || f.pointerEvent),
            z = rr(y),
            ot = de({
                x: F.left + F.width / 2,
                y: F.top + F.height / 2
            }),
            it = de({
                x: z.left + z.width / 2,
                y: z.top + z.height / 2
            }),
            he -= ot.x - it.x,
            Me -= ot.y - it.y),
            f.isDragging || (f.isDragging = t = !0,
            we(f, "dragstart", "onDragStart"))
        }
        ,
        E.drag = Nt,
        E.endDrag = function(N) {
            return on(N || f.pointerEvent, !0)
        }
        ,
        E.timeSinceDrag = function() {
            return f.isDragging ? 0 : (nn() - R) / 1e3
        }
        ,
        E.timeSinceClick = function() {
            return (nn() - be) / 1e3
        }
        ,
        E.hitTest = function(N, P) {
            return yn.hitTest(f.target, N, P)
        }
        ,
        E.getDirection = function(N, P) {
            var F, z, ot, it, tt, st, _t = N === "velocity" && qe ? N : Xn(N) && !s ? "element" : "start";
            return _t === "element" && (tt = rr(f.target),
            st = rr(N)),
            F = _t === "start" ? f.x - Ut : _t === "velocity" ? qe.getVelocity(y, d) : tt.left + tt.width / 2 - (st.left + st.width / 2),
            s ? F < 0 ? "counter-clockwise" : "clockwise" : (P = P || 2,
            z = _t === "start" ? f.y - ae : _t === "velocity" ? qe.getVelocity(y, g) : tt.top + tt.height / 2 - (st.top + st.height / 2),
            it = (ot = Math.abs(F / z)) < 1 / P ? "" : F < 0 ? "left" : "right",
            ot < P && (it !== "" && (it += "-"),
            it += z < 0 ? "up" : "down"),
            it)
        }
        ,
        E.applyBounds = function(N, P) {
            var F, z, ot, it, tt, st;
            if (N && x.bounds !== N)
                return x.bounds = N,
                f.update(!0, P);
            if (gt(!0),
            dt(),
            qn && !It()) {
                if (F = f.x,
                z = f.y,
                pe < F ? F = pe : F < ge && (F = ge),
                Kt < z ? z = Kt : z < je && (z = je),
                (f.x !== F || f.y !== z) && (ot = !0,
                f.x = f.endX = F,
                s ? f.endRotation = F : f.y = f.endY = z,
                V(Oe = !0),
                f.autoScroll && !f.isDragging))
                    for (Ye(y.parentNode),
                    it = y,
                    vn.scrollTop = ie.pageYOffset != null ? ie.pageYOffset : Pt.documentElement.scrollTop != null ? Pt.documentElement.scrollTop : Pt.body.scrollTop,
                    vn.scrollLeft = ie.pageXOffset != null ? ie.pageXOffset : Pt.documentElement.scrollLeft != null ? Pt.documentElement.scrollLeft : Pt.body.scrollLeft; it && !st; )
                        tt = (st = vr(it.parentNode)) ? vn : it.parentNode,
                        w && tt.scrollTop > tt._gsMaxScrollY && (tt.scrollTop = tt._gsMaxScrollY),
                        m && tt.scrollLeft > tt._gsMaxScrollX && (tt.scrollLeft = tt._gsMaxScrollX),
                        it = tt;
                f.isThrowing && (ot || f.endX > pe || f.endX < ge || f.endY > Kt || f.endY < je) && xt(x.inertia || x.throwProps, ot)
            }
            return f
        }
        ,
        E.update = function(N, P, F) {
            if (P && f.isPressed) {
                var z = er(y)
                  , ot = pi.apply({
                    x: f.x - Ut,
                    y: f.y - ae
                })
                  , it = er(y.parentNode, !0);
                it.apply({
                    x: z.e - ot.x,
                    y: z.f - ot.y
                }, ot),
                f.x -= ot.x - it.e,
                f.y -= ot.y - it.f,
                V(!0),
                $t()
            }
            var tt = f.x
              , st = f.y;
            return vt(!P),
            N ? f.applyBounds() : (Oe && F && V(!0),
            gt(!0)),
            P && (Vn(f.pointerX, f.pointerY),
            Oe && V(!0)),
            f.isPressed && !P && (m && .01 < Math.abs(tt - f.x) || w && .01 < Math.abs(st - f.y) && !s) && $t(),
            f.autoScroll && (Ye(y.parentNode, f.isDragging),
            j = f.isDragging,
            V(!0),
            Ae(y, _e),
            kn(y, _e)),
            f
        }
        ,
        E.enable = function(N) {
            var P, F, z, ot = {
                lazy: !0
            };
            if (x.cursor !== !1 && (ot.cursor = x.cursor || mr),
            Bt.utils.checkPrefix("touchCallout") && (ot.touchCallout = "none"),
            N !== "soft") {
                for (nr(S, m == w ? "none" : x.allowNativeTouchScrolling && y.scrollHeight === y.clientHeight == (y.scrollWidth === y.clientHeight) || x.allowEventDefault ? "manipulation" : m ? "pan-y" : "pan-x"),
                F = S.length; -1 < --F; )
                    z = S[F],
                    Fn || Se(z, "mousedown", se),
                    Se(z, "touchstart", se),
                    Se(z, "click", xe, !0),
                    Bt.set(z, ot),
                    z.getBBox && z.ownerSVGElement && m != w && Bt.set(z.ownerSVGElement, {
                        touchAction: x.allowNativeTouchScrolling || x.allowEventDefault ? "manipulation" : m ? "pan-y" : "pan-x"
                    }),
                    x.allowContextMenu || Se(z, "contextmenu", H);
                Yn(S, !1)
            }
            return kn(y, _e),
            Ue = !0,
            qe && N !== "soft" && qe.track(pt || y, a ? "x,y" : s ? "rotation" : "top,left"),
            y._gsDragID = P = "d" + jr++,
            In[P] = f,
            pt && (pt.enable(),
            pt.element._gsDragID = P),
            (x.bounds || s) && $t(),
            x.bounds && f.applyBounds(),
            f
        }
        ,
        E.disable = function(N) {
            for (var P, F = f.isDragging, z = S.length; -1 < --z; )
                ri(S[z], "cursor", null);
            if (N !== "soft") {
                for (nr(S, null),
                z = S.length; -1 < --z; )
                    P = S[z],
                    ri(P, "touchCallout", null),
                    Qt(P, "mousedown", se),
                    Qt(P, "touchstart", se),
                    Qt(P, "click", xe, !0),
                    Qt(P, "contextmenu", H);
                Yn(S, !0),
                Qe && (Qt(Qe, "touchcancel", on),
                Qt(Qe, "touchend", on),
                Qt(Qe, "touchmove", Nt)),
                Qt(Pt, "mouseup", on),
                Qt(Pt, "mousemove", Nt)
            }
            return Ae(y, _e),
            Ue = !1,
            qe && N !== "soft" && (qe.untrack(pt || y, a ? "x,y" : s ? "rotation" : "top,left"),
            f.tween && f.tween.kill()),
            pt && pt.disable(),
            zr(V),
            f.isDragging = f.isPressed = Ft = !1,
            F && we(f, "dragend", "onDragEnd"),
            f
        }
        ,
        E.enabled = function(N, P) {
            return arguments.length ? N ? f.enable(P) : f.disable(P) : Ue
        }
        ,
        E.kill = function() {
            return f.isThrowing = !1,
            f.tween && f.tween.kill(),
            f.disable(),
            Bt.set(S, {
                clearProps: "userSelect"
            }),
            delete In[y._gsDragID],
            f
        }
        ,
        E.revert = function() {
            this.kill(),
            this.styles && this.styles.revert()
        }
        ,
        ~n.indexOf("scroll") && (pt = E.scrollProxy = new Yr(y,function(P, F) {
            for (var z in F)
                z in P || (P[z] = F[z]);
            return P
        }({
            onKill: function() {
                f.isPressed && on(null)
            }
        }, x)),
        y.style.overflowY = w && !gr ? "auto" : "hidden",
        y.style.overflowX = m && !gr ? "auto" : "hidden",
        y = pt.content),
        s ? Y.rotation = 1 : (m && (Y[d] = 1),
        w && (Y[g] = 1)),
        Dt.force3D = !("force3D"in x) || x.force3D,
        Wn(ln(E)),
        E.enable(),
        E
    }
    (function(x, E) {
        for (var M in E)
            M in x || (x[M] = E[M])
    }
    )(Mr.prototype, {
        pointerX: 0,
        pointerY: 0,
        startX: 0,
        startY: 0,
        deltaX: 0,
        deltaY: 0,
        isDragging: !1,
        isPressed: !1
    }),
    Mr.zIndex = 1e3,
    Mr.version = "3.12.3",
    Xr() && Bt.registerPlugin(Mr),
    nt.Draggable = Mr,
    nt.default = Mr,
    typeof window > "u" || window !== nt ? Object.defineProperty(nt, "__esModule", {
        value: !0
    }) : delete nt.default
}),
function(nt, ln) {
    typeof exports == "object" && typeof module < "u" ? ln(exports) : typeof define == "function" && define.amd ? define(["exports"], ln) : ln((nt = nt || self).window = nt.window || {})
}(this, function(nt) {
    "use strict";
    function ln(r, e) {
        r.prototype = Object.create(e.prototype),
        (r.prototype.constructor = r).__proto__ = e
    }
    function De(r) {
        if (r === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return r
    }
    function Tt(r) {
        return typeof r == "string"
    }
    function ne(r) {
        return typeof r == "function"
    }
    function Ce(r) {
        return typeof r == "number"
    }
    function Pr(r) {
        return r === void 0
    }
    function cn(r) {
        return typeof r == "object"
    }
    function Fe(r) {
        return r !== !1
    }
    function Jn() {
        return typeof window < "u"
    }
    function fr(r) {
        return ne(r) || Tt(r)
    }
    function dr(r) {
        return (Wn = Ut(r, xt)) && zt
    }
    function qr(r, e) {
        return console.warn("Invalid property", r, "set to", e, "Missing plugin? techDrag.registerPlugin()")
    }
    function Zn(r, e) {
        return !e && console.warn(r)
    }
    function Xt(r, e) {
        return r && (xt[r] = e) && Wn && (Wn[r] = e) || xt
    }
    function At() {
        return 0
    }
    function tr(r) {
        var e, i, o = r[0];
        if (cn(o) || ne(o) || (r = [r]),
        !(e = (o._techDrag || {}).harness)) {
            for (i = he.length; i-- && !he[i].targetTest(o); )
                ;
            e = he[i]
        }
        for (i = r.length; i--; )
            r[i] && (r[i]._techDrag || (r[i]._techDrag = new Qr(r[i],e))) || r.splice(i, 1);
        return r
    }
    function br(r) {
        return r._techDrag || tr(Kt(r))[0]._techDrag
    }
    function ni(r, e, i) {
        return (i = r[e]) && ne(i) ? r[e]() : Pr(i) && r.getAttribute && r.getAttribute(e) || i
    }
    function Be(r, e) {
        return (r = r.split(",")).forEach(e) || r
    }
    function Ee(r) {
        return Math.round(1e5 * r) / 1e5 || 0
    }
    function u(r) {
        return Math.round(1e7 * r) / 1e7 || 0
    }
    function hr(r, e) {
        var i = e.charAt(0)
          , o = parseFloat(e.substr(2));
        return r = parseFloat(r),
        i === "+" ? r + o : i === "-" ? r - o : i === "*" ? r * o : r / o
    }
    function fi(r, e) {
        for (var i = e.length, o = 0; r.indexOf(e[o]) < 0 && ++o < i; )
            ;
        return o < i
    }
    function Hn() {
        var r, e, i = _e.length, o = _e.slice(0);
        for (xe = {},
        r = _e.length = 0; r < i; r++)
            (e = o[r]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }
    function wn(r, e, i, o) {
        _e.length && !Re && Hn(),
        r.render(e, i, o || Re && e < 0 && (r._initted || r._startAt)),
        _e.length && !Re && Hn()
    }
    function Hr(r) {
        var e = parseFloat(r);
        return (e || e === 0) && (r + "").match(wt).length < 2 ? e : Tt(r) ? r.trim() : r
    }
    function er(r) {
        return r
    }
    function ye(r, e) {
        for (var i in e)
            i in r || (r[i] = e[i]);
        return r
    }
    function Xr(r, e) {
        for (var i in e)
            i !== "__proto__" && i !== "constructor" && i !== "prototype" && (r[i] = cn(e[i]) ? Xr(r[i] || (r[i] = {}), e[i]) : e[i]);
        return r
    }
    function bn(r, e) {
        var i, o = {};
        for (i in r)
            i in e || (o[i] = r[i]);
        return o
    }
    function Xn(r) {
        var e = r.parent || ue
          , i = r.keyframes ? function(l) {
            return function(c, h) {
                for (var p in h)
                    p in c || p === "duration" && l || p === "ease" || (c[p] = h[p])
            }
        }(M(r.keyframes)) : ye;
        if (Fe(r.inherit))
            for (; e; )
                i(r, e.vars.defaults),
                e = e.parent || e._dp;
        return r
    }
    function Mn(r, e, i, o, l) {
        i === void 0 && (i = "_first"),
        o === void 0 && (o = "_last");
        var c, h = r[o];
        if (l)
            for (c = e[l]; h && h[l] > c; )
                h = h._prev;
        return h ? (e._next = h._next,
        h._next = e) : (e._next = r[i],
        r[i] = e),
        e._next ? e._next._prev = e : r[o] = e,
        e._prev = h,
        e.parent = e._dp = r,
        e
    }
    function Tr(r, e, i, o) {
        i === void 0 && (i = "_first"),
        o === void 0 && (o = "_last");
        var l = e._prev
          , c = e._next;
        l ? l._next = c : r[i] === e && (r[i] = c),
        c ? c._prev = l : r[o] === e && (r[o] = l),
        e._next = e._prev = e.parent = null
    }
    function fn(r, e) {
        r.parent && (!e || r.parent.autoRemoveChildren) && r.parent.remove && r.parent.remove(r),
        r._act = 0
    }
    function jn(r, e) {
        if (r && (!e || e._end > r._dur || e._start < 0))
            for (var i = r; i; )
                i._dirty = 1,
                i = i.parent;
        return r
    }
    function Tn(r, e, i, o) {
        return r._startAt && (Re ? r._startAt.revert($t) : r.vars.immediateRender && !r.vars.autoRevert || r._startAt.render(e, !0, o))
    }
    function nr(r) {
        return r._repeat ? ae(r._tTime, r = r.duration() + r._rDelay) * r : 0
    }
    function pr(r, e) {
        return (r - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }
    function Nr(r) {
        return r._end = u(r._start + (r._tDur / Math.abs(r._ts || r._rts || fe) || 0))
    }
    function zr(r, e) {
        var i = r._dp;
        return i && i.smoothChildTiming && r._ts && (r._start = u(i._time - (0 < r._ts ? e / r._ts : ((r._dirty ? r.totalDuration() : r._tDur) - e) / -r._ts)),
        Nr(r),
        i._dirty || jn(i, r)),
        r
    }
    function Se(r, e) {
        var i;
        if ((e._time || !e._dur && e._initted || e._start < r._time && (e._dur || !e.add)) && (i = pr(r.rawTime(), e),
        (!e._dur || pe(0, e.totalDuration(), i) - e._tTime > fe) && e.render(i, !0)),
        jn(r, e)._dp && r._initted && r._time >= r._dur && r._ts) {
            if (r._dur < r.duration())
                for (i = r; i._dp; )
                    0 <= i.rawTime() && i.totalTime(i._tTime),
                    i = i._dp;
            r._zTime = -fe
        }
    }
    function Qt(r, e, i, o) {
        return e.parent && fn(e),
        e._start = u((Ce(i) ? i : i || r !== ue ? _n(r, i, e) : r._time) + e._delay),
        e._end = u(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
        Mn(r, e, "_first", "_last", r._sort ? "_start" : 0),
        qn(e) || (r._recent = e),
        o || Se(r, e),
        r._ts < 0 && zr(r, r._tTime),
        r
    }
    function Le(r, e) {
        return (xt.ScrollTrigger || qr("scrollTrigger", e)) && xt.ScrollTrigger.create(e, r)
    }
    function di(r, e, i, o, l) {
        return m(r, e, l),
        r._initted ? !i && r._pt && !Re && (r._dur && r.vars.lazy !== !1 || !r._dur && r.vars.lazy) && Wr !== Pe.frame ? (_e.push(r),
        r._lazy = [l, o],
        1) : void 0 : 1
    }
    function kr(r, e, i, o) {
        var l = r._repeat
          , c = u(e) || 0
          , h = r._tTime / r._tDur;
        return h && !o && (r._time *= c / r._dur),
        r._dur = c,
        r._tDur = l ? l < 0 ? 1e10 : u(c * (l + 1) + r._rDelay * l) : c,
        0 < h && !o && zr(r, r._tTime = r._tDur * h),
        r.parent && Nr(r),
        i || jn(r.parent, r),
        r
    }
    function Dr(r) {
        return r instanceof t ? jn(r) : kr(r, r._dur)
    }
    function ze(r, e, i) {
        var o, l, c = Ce(e[1]), h = (c ? 2 : 1) + (r < 2 ? 0 : 1), p = e[h];
        if (c && (p.duration = e[1]),
        p.parent = i,
        r) {
            for (o = p,
            l = i; l && !("immediateRender"in o); )
                o = l.vars.defaults || {},
                l = Fe(l.vars.inherit) && l.parent;
            p.immediateRender = Fe(o.immediateRender),
            r < 2 ? p.runBackwards = 1 : p.startAt = e[h - 1]
        }
        return new S(e[0],p,e[1 + h])
    }
    function kn(r, e) {
        return r || r === 0 ? e(r) : e
    }
    function Ae(r, e) {
        return Tt(r) && (e = jt.exec(r)) ? e[1] : ""
    }
    function kt(r, e) {
        return r && cn(r) && "length"in r && (!e && !r.length || r.length - 1 in r && cn(r[0])) && !r.nodeType && r !== qe
    }
    function Ye(r) {
        return r = Kt(r)[0] || Zn("Invalid scope") || {},
        function(e) {
            var i = r.current || r.nativeElement || r;
            return Kt(e, i.querySelectorAll ? i : i === r ? Zn("Invalid scope") || Fn.createElement("div") : r)
        }
    }
    function ri(r) {
        return r.sort(function() {
            return .5 - Math.random()
        })
    }
    function Lr(r) {
        if (ne(r))
            return r;
        var e = cn(r) ? r : {
            each: r
        }
          , i = Ke(e.ease)
          , o = e.from || 0
          , l = parseFloat(e.base) || 0
          , c = {}
          , h = 0 < o && o < 1
          , p = isNaN(o) || h
          , _ = e.axis
          , b = o
          , A = o;
        return Tt(o) ? b = A = {
            center: .5,
            edges: .5,
            end: 1
        }[o] || 0 : !h && p && (b = o[0],
        A = o[1]),
        function(L, C, I) {
            var $, Z, ct, J, G, U, X, et, B, Q = (I || e).length, ut = c[Q];
            if (!ut) {
                if (!(B = e.grid === "auto" ? 0 : (e.grid || [1, Rn])[1])) {
                    for (X = -Rn; X < (X = I[B++].getBoundingClientRect().left) && B < Q; )
                        ;
                    B < Q && B--
                }
                for (ut = c[Q] = [],
                $ = p ? Math.min(B, Q) * b - .5 : o % B,
                Z = B === Rn ? 0 : p ? Q * A / B - .5 : o / B | 0,
                et = Rn,
                U = X = 0; U < Q; U++)
                    ct = U % B - $,
                    J = Z - (U / B | 0),
                    ut[U] = G = _ ? Math.abs(_ === "y" ? J : ct) : yn(ct * ct + J * J),
                    X < G && (X = G),
                    G < et && (et = G);
                o === "random" && ri(ut),
                ut.max = X - et,
                ut.min = et,
                ut.v = Q = (parseFloat(e.amount) || parseFloat(e.each) * (Q < B ? Q - 1 : _ ? _ === "y" ? Q / B : B : Math.max(B, Q / B)) || 0) * (o === "edges" ? -1 : 1),
                ut.b = Q < 0 ? l - Q : l,
                ut.u = Ae(e.amount || e.each) || 0,
                i = i && Q < 0 ? Vr(i) : i
            }
            return Q = (ut[L] - ut.min) / ut.max || 0,
            u(ut.b + (i ? i(Q) : Q) * ut.v) + ut.u
        }
    }
    function rr(r) {
        var e = Math.pow(10, ((r + "").split(".")[1] || "").length);
        return function(i) {
            var o = u(Math.round(parseFloat(i) / r) * r * e);
            return (o - o % 1) / e + (Ce(i) ? 0 : Ae(i))
        }
    }
    function we(r, e) {
        var i, o, l = M(r);
        return !l && cn(r) && (i = l = r.radius || Rn,
        r.values ? (r = Kt(r.values),
        (o = !Ce(r[0])) && (i *= i)) : r = rr(r.increment)),
        kn(e, l ? ne(r) ? function(c) {
            return o = r(c),
            Math.abs(o - c) <= i ? o : c
        }
        : function(c) {
            for (var h, p, _ = parseFloat(o ? c.x : c), b = parseFloat(o ? c.y : 0), A = Rn, L = 0, C = r.length; C--; )
                (h = o ? (h = r[C].x - _) * h + (p = r[C].y - b) * p : Math.abs(r[C] - _)) < A && (A = h,
                L = C);
            return L = !i || A <= i ? r[L] : c,
            o || L === c || Ce(c) ? L : L + Ae(c)
        }
        : rr(r))
    }
    function Cr(r, e, i, o) {
        return kn(M(r) ? !e : i === !0 ? !!(i = 0) : !o, function() {
            return M(r) ? r[~~(Math.random() * r.length)] : (i = i || 1e-5) && (o = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((r - i / 2 + Math.random() * (e - r + .99 * i)) / i) * i * o) / o
        })
    }
    function On(r, e, i) {
        return kn(i, function(o) {
            return r[~~e(o)]
        })
    }
    function zn(r) {
        for (var e, i, o, l, c = 0, h = ""; ~(e = r.indexOf("random(", c)); )
            o = r.indexOf(")", e),
            l = r.charAt(e + 7) === "[",
            i = r.substr(e + 7, o - e - 7).match(l ? wt : H),
            h += r.substr(c, e - c) + Cr(l ? i : +i[0], l ? 0 : +i[1], +i[2] || 1e-5),
            c = o + 1;
        return h + r.substr(c, r.length - c)
    }
    function Yn(r, e, i) {
        var o, l, c, h = r.labels, p = Rn;
        for (o in h)
            (l = h[o] - e) < 0 == !!i && l && p > (l = Math.abs(l)) && (c = o,
            p = l);
        return c
    }
    function Yr(r) {
        return fn(r),
        r.scrollTrigger && r.scrollTrigger.kill(!!Re),
        r.progress() < 1 && rn(r, "onInterrupt"),
        r
    }
    function Er(r) {
        if (r)
            if (r = !r.name && r.default || r,
            Jn() || r.headless) {
                var e = r.name
                  , i = ne(r)
                  , o = e && !i && r.init ? function() {
                    this._props = []
                }
                : r
                  , l = {
                    init: At,
                    render: Dt,
                    add: g,
                    kill: Pt,
                    modifier: Et,
                    rawVars: 0
                }
                  , c = {
                    targetTest: 0,
                    get: 0,
                    getSetter: ht,
                    aliases: {},
                    register: 0
                };
                if (En(),
                r !== o) {
                    if (de[e])
                        return;
                    ye(o, ye(bn(r, l), c)),
                    Ut(o.prototype, Ut(l, bn(r, c))),
                    de[o.prop = e] = o,
                    r.targetTest && (he.push(o),
                    se[e] = 1),
                    e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                }
                Xt(e, o),
                r.register && r.register(zt, o, Nt)
            } else
                Cn.push(r)
    }
    function Bt(r, e, i) {
        return (6 * (r += r < 0 ? 1 : 1 < r ? -1 : 0) < 1 ? e + (i - e) * r * 6 : r < .5 ? i : 3 * r < 2 ? e + (i - e) * (2 / 3 - r) * 6 : e) * Jt + .5 | 0
    }
    function ie(r, e, i) {
        var o, l, c, h, p, _, b, A, L, C, I = r ? Ce(r) ? [r >> 16, r >> 8 & Jt, r & Jt] : 0 : Oe.black;
        if (!I) {
            if (r.substr(-1) === "," && (r = r.substr(0, r.length - 1)),
            Oe[r])
                I = Oe[r];
            else if (r.charAt(0) === "#") {
                if (r.length < 6 && (r = "#" + (o = r.charAt(1)) + o + (l = r.charAt(2)) + l + (c = r.charAt(3)) + c + (r.length === 5 ? r.charAt(4) + r.charAt(4) : "")),
                r.length === 9)
                    return [(I = parseInt(r.substr(1, 6), 16)) >> 16, I >> 8 & Jt, I & Jt, parseInt(r.substr(7), 16) / 255];
                I = [(r = parseInt(r.substr(1), 16)) >> 16, r >> 8 & Jt, r & Jt]
            } else if (r.substr(0, 3) === "hsl")
                if (I = C = r.match(H),
                e) {
                    if (~r.indexOf("="))
                        return I = r.match(V),
                        i && I.length < 4 && (I[3] = 1),
                        I
                } else
                    h = +I[0] % 360 / 360,
                    p = I[1] / 100,
                    o = 2 * (_ = I[2] / 100) - (l = _ <= .5 ? _ * (p + 1) : _ + p - _ * p),
                    3 < I.length && (I[3] *= 1),
                    I[0] = Bt(h + 1 / 3, o, l),
                    I[1] = Bt(h, o, l),
                    I[2] = Bt(h - 1 / 3, o, l);
            else
                I = r.match(H) || Oe.transparent;
            I = I.map(Number)
        }
        return e && !C && (o = I[0] / Jt,
        l = I[1] / Jt,
        c = I[2] / Jt,
        _ = ((b = Math.max(o, l, c)) + (A = Math.min(o, l, c))) / 2,
        b === A ? h = p = 0 : (L = b - A,
        p = .5 < _ ? L / (2 - b - A) : L / (b + A),
        h = b === o ? (l - c) / L + (l < c ? 6 : 0) : b === l ? (c - o) / L + 2 : (o - l) / L + 4,
        h *= 60),
        I[0] = ~~(h + .5),
        I[1] = ~~(100 * p + .5),
        I[2] = ~~(100 * _ + .5)),
        i && I.length < 4 && (I[3] = 1),
        I
    }
    function dn(r) {
        var e = []
          , i = []
          , o = -1;
        return r.split(or).forEach(function(l) {
            var c = l.match(gt) || [];
            e.push.apply(e, c),
            i.push(o += c.length + 1)
        }),
        e.c = i,
        e
    }
    function Ze(r, e, i) {
        var o, l, c, h, p = "", _ = (r + p).match(or), b = e ? "hsla(" : "rgba(", A = 0;
        if (!_)
            return r;
        if (_ = _.map(function(L) {
            return (L = ie(L, e, 1)) && b + (e ? L[0] + "," + L[1] + "%," + L[2] + "%," + L[3] : L.join(",")) + ")"
        }),
        i && (c = dn(r),
        (o = i.c).join(p) !== c.c.join(p)))
            for (h = (l = r.replace(or, "1").split(gt)).length - 1; A < h; A++)
                p += l[A] + (~o.indexOf(A) ? _.shift() || b + "0,0,0,0)" : (c.length ? c : _.length ? _ : i).shift());
        if (!l)
            for (h = (l = r.split(or)).length - 1; A < h; A++)
                p += l[A] + _[A];
        return p + l[h]
    }
    function gn(r) {
        var e, i = r.join(" ");
        if (or.lastIndex = 0,
        or.test(i))
            return e = ar.test(i),
            r[1] = Ze(r[1], e),
            r[0] = Ze(r[0], e, dn(r[1])),
            !0
    }
    function ii(r) {
        var e = (r + "").split("(")
          , i = Ft[e[0]];
        return i && 1 < e.length && i.config ? i.config.apply(null, ~r.indexOf("{") ? [function(l) {
            for (var c, h, p, _ = {}, b = l.substr(1, l.length - 3).split(":"), A = b[0], L = 1, C = b.length; L < C; L++)
                h = b[L],
                c = L !== C - 1 ? h.lastIndexOf(",") : h.length,
                p = h.substr(0, c),
                _[A] = isNaN(p) ? p.replace(re, "").trim() : +p,
                A = h.substr(c + 1).trim();
            return _
        }(e[1])] : function(l) {
            var c = l.indexOf("(") + 1
              , h = l.indexOf(")")
              , p = l.indexOf("(", c);
            return l.substring(c, ~p && p < h ? l.indexOf(")", h + 1) : h)
        }(r).split(",").map(Hr)) : Ft._CE && Qe.test(r) ? Ft._CE("", r) : i
    }
    function Pn(r, e) {
        for (var i, o = r._first; o; )
            o instanceof t ? Pn(o, e) : !o.vars.yoyoEase || o._yoyo && o._repeat || o._yoyo === e || (o.timeline ? Pn(o.timeline, e) : (i = o._ease,
            o._ease = o._yEase,
            o._yEase = i,
            o._yoyo = e)),
            o = o._next
    }
    function Ie(r, e, i, o) {
        i === void 0 && (i = function(p) {
            return 1 - e(1 - p)
        }
        ),
        o === void 0 && (o = function(p) {
            return p < .5 ? e(2 * p) / 2 : 1 - e(2 * (1 - p)) / 2
        }
        );
        var l, c = {
            easeIn: e,
            easeOut: i,
            easeInOut: o
        };
        return Be(r, function(h) {
            for (var p in Ft[h] = xt[h] = c,
            Ft[l = h.toLowerCase()] = i,
            c)
                Ft[l + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = Ft[h + "." + p] = c[p]
        }),
        c
    }
    function We(r) {
        return function(e) {
            return e < .5 ? (1 - r(1 - 2 * e)) / 2 : .5 + r(2 * (e - .5)) / 2
        }
    }
    function Dn(r, e, i) {
        function o(_) {
            return _ === 1 ? 1 : l * Math.pow(2, -10 * _) * x((_ - h) * c) + 1
        }
        var l = 1 <= e ? e : 1
          , c = (i || (r ? .3 : .45)) / (e < 1 ? e : 1)
          , h = c / ui * (Math.asin(1 / l) || 0)
          , p = r === "out" ? o : r === "in" ? function(_) {
            return 1 - o(1 - _)
        }
        : We(o);
        return c = ui / c,
        p.config = function(_, b) {
            return Dn(r, _, b)
        }
        ,
        p
    }
    function ir(r, e) {
        function i(l) {
            return l ? --l * l * ((e + 1) * l + e) + 1 : 0
        }
        e === void 0 && (e = 1.70158);
        var o = r === "out" ? i : r === "in" ? function(l) {
            return 1 - i(1 - l)
        }
        : We(i);
        return o.config = function(l) {
            return ir(r, l)
        }
        ,
        o
    }
    var gr, Re, ce, ue, qe, mr, Fn, Wn, oi, Wr, Bn, Sr, Rr, Ar, $r, mn, ai, Nn, si, nn, $n, In, jr, Ur, Un, Ln, vn, vr, He = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, $e = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, Rn = 1e8, fe = 1 / Rn, ui = 2 * Math.PI, hi = ui / 4, Mr = 0, yn = Math.sqrt, y = Math.cos, x = Math.sin, E = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
    , M = Array.isArray, H = /(?:-?\.?\d|\.)+/gi, V = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, gt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, at = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, dt = /[+-]=-?[.\d]+/, wt = /[^,'"\[\]\s]+/gi, jt = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, xt = {}, vt = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    }, $t = {
        suppressEvents: !0,
        kill: !1
    }, oe = {
        suppressEvents: !0
    }, se = {}, _e = [], xe = {}, de = {}, Ue = {}, pt = 30, he = [], Me = "", Ut = function(e, i) {
        for (var o in i)
            e[o] = i[o];
        return e
    }, ae = function(e, i) {
        var o = Math.floor(e = u(e / i));
        return e && o === e ? o - 1 : o
    }, qn = function(e) {
        var i = e.data;
        return i === "isFromStart" || i === "isStart"
    }, bi = {
        _start: 0,
        endTime: At,
        totalDuration: At
    }, _n = function r(e, i, o) {
        var l, c, h, p = e.labels, _ = e._recent || bi, b = e.duration() >= Rn ? _.endTime(!1) : e._dur;
        return Tt(i) && (isNaN(i) || i in p) ? (c = i.charAt(0),
        h = i.substr(-1) === "%",
        l = i.indexOf("="),
        c === "<" || c === ">" ? (0 <= l && (i = i.replace(/=/, "")),
        (c === "<" ? _._start : _.endTime(0 <= _._repeat)) + (parseFloat(i.substr(1)) || 0) * (h ? (l < 0 ? _ : o).totalDuration() / 100 : 1)) : l < 0 ? (i in p || (p[i] = b),
        p[i]) : (c = parseFloat(i.charAt(l - 1) + i.substr(l + 1)),
        h && o && (c = c / 100 * (M(o) ? o[0] : o).totalDuration()),
        1 < l ? r(e, i.substr(0, l - 1), o) + c : b + c)) : i == null ? b : +i
    }, pe = function(e, i, o) {
        return o < e ? e : i < o ? i : o
    }, ge = [].slice, Kt = function(e, i, o) {
        return ce && !i && ce.selector ? ce.selector(e) : !Tt(e) || o || !mr && En() ? M(e) ? function(c, h, p) {
            return p === void 0 && (p = []),
            c.forEach(function(_) {
                return Tt(_) && !h || kt(_, 1) ? p.push.apply(p, Kt(_)) : p.push(_)
            }) || p
        }(e, o) : kt(e) ? ge.call(e, 0) : e ? [e] : [] : ge.call((i || Fn).querySelectorAll(e), 0)
    }, je = function(e, i, o, l, c) {
        var h = i - e
          , p = l - o;
        return kn(c, function(_) {
            return o + ((_ - e) / h * p || 0)
        })
    }, rn = function(e, i, o) {
        var l, c, h, p = e.vars, _ = p[i], b = ce, A = e._ctx;
        if (_)
            return l = p[i + "Params"],
            c = p.callbackScope || e,
            o && _e.length && Hn(),
            A && (ce = A),
            h = l ? _.apply(c, l) : _.call(c),
            ce = b,
            h
    }, Cn = [], Jt = 255, Oe = {
        aqua: [0, Jt, Jt],
        lime: [0, Jt, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, Jt],
        navy: [0, 0, 128],
        white: [Jt, Jt, Jt],
        olive: [128, 128, 0],
        yellow: [Jt, Jt, 0],
        orange: [Jt, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [Jt, 0, 0],
        pink: [Jt, 192, 203],
        cyan: [0, Jt, Jt],
        transparent: [Jt, Jt, Jt, 0]
    }, or = function() {
        var r, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (r in Oe)
            e += "|" + r + "\\b";
        return new RegExp(e + ")","gi")
    }(), ar = /hsl[a]?\(/, Pe = (si = Date.now,
    nn = 500,
    $n = 33,
    In = si(),
    jr = In,
    Un = Ur = 1e3 / 240,
    mn = {
        time: 0,
        frame: 0,
        tick: function() {
            tn(!0)
        },
        deltaRatio: function(e) {
            return ai / (1e3 / (e || 60))
        },
        wake: function() {
            oi && (!mr && Jn() && (qe = mr = window,
            Fn = qe.document || {},
            xt.techDrag = zt,
            (qe.techDragVersions || (qe.techDragVersions = [])).push(zt.version),
            dr(Wn || qe.GreenSockGlobals || !qe.techDrag && qe || {}),
            Cn.forEach(Er)),
            $r = typeof requestAnimationFrame < "u" && requestAnimationFrame,
            Rr && mn.sleep(),
            Ar = $r || function(e) {
                return setTimeout(e, Un - 1e3 * mn.time + 1 | 0)
            }
            ,
            Sr = 1,
            tn(2))
        },
        sleep: function() {
            ($r ? cancelAnimationFrame : clearTimeout)(Rr),
            Sr = 0,
            Ar = At
        },
        lagSmoothing: function(e, i) {
            nn = e || 1 / 0,
            $n = Math.min(i || 33, nn)
        },
        fps: function(e) {
            Ur = 1e3 / (e || 240),
            Un = 1e3 * mn.time + Ur
        },
        add: function(e, i, o) {
            var l = i ? function(c, h, p, _) {
                e(c, h, p, _),
                mn.remove(l)
            }
            : e;
            return mn.remove(e),
            Ln[o ? "unshift" : "push"](l),
            En(),
            l
        },
        remove: function(e, i) {
            ~(i = Ln.indexOf(e)) && Ln.splice(i, 1) && i <= Nn && Nn--
        },
        _listeners: Ln = []
    }), En = function() {
        return !Sr && Pe.wake()
    }, Ft = {}, Qe = /^[\d.\-M][\d.\-,\s]/, re = /["']/g, Vr = function(e) {
        return function(i) {
            return 1 - e(1 - i)
        }
    }, Ke = function(e, i) {
        return e && (ne(e) ? e : Ft[e] || ii(e)) || i
    };
    function tn(r) {
        var e, i, o, l, c = si() - jr, h = r === !0;
        if ((nn < c || c < 0) && (In += c - $n),
        (0 < (e = (o = (jr += c) - In) - Un) || h) && (l = ++mn.frame,
        ai = o - 1e3 * mn.time,
        mn.time = o /= 1e3,
        Un += e + (Ur <= e ? 4 : Ur - e),
        i = 1),
        h || (Rr = Ar(tn)),
        i)
            for (Nn = 0; Nn < Ln.length; Nn++)
                Ln[Nn](o, ai, l, r)
    }
    function Gr(r) {
        return r < vr ? vn * r * r : r < .7272727272727273 ? vn * Math.pow(r - 1.5 / 2.75, 2) + .75 : r < .9090909090909092 ? vn * (r -= 2.25 / 2.75) * r + .9375 : vn * Math.pow(r - 2.625 / 2.75, 2) + .984375
    }
    Be("Linear,Quad,Cubic,Quart,Quint,Strong", function(r, e) {
        var i = e < 5 ? e + 1 : e;
        Ie(r + ",Power" + (i - 1), e ? function(o) {
            return Math.pow(o, i)
        }
        : function(o) {
            return o
        }
        , function(o) {
            return 1 - Math.pow(1 - o, i)
        }, function(o) {
            return o < .5 ? Math.pow(2 * o, i) / 2 : 1 - Math.pow(2 * (1 - o), i) / 2
        })
    }),
    Ft.Linear.easeNone = Ft.none = Ft.Linear.easeIn,
    Ie("Elastic", Dn("in"), Dn("out"), Dn()),
    vn = 7.5625,
    vr = 1 / 2.75,
    Ie("Bounce", function(r) {
        return 1 - Gr(1 - r)
    }, Gr),
    Ie("Expo", function(r) {
        return r ? Math.pow(2, 10 * (r - 1)) : 0
    }),
    Ie("Circ", function(r) {
        return -(yn(1 - r * r) - 1)
    }),
    Ie("Sine", function(r) {
        return r === 1 ? 1 : 1 - y(r * hi)
    }),
    Ie("Back", ir("in"), ir("out"), ir()),
    Ft.SteppedEase = Ft.steps = xt.SteppedEase = {
        config: function(e, i) {
            e === void 0 && (e = 1);
            var o = 1 / e
              , l = e + (i ? 0 : 1)
              , c = i ? 1 : 0;
            return function(h) {
                return ((l * pe(0, .99999999, h) | 0) + c) * o
            }
        }
    },
    $e.ease = Ft["quad.out"],
    Be("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(r) {
        return Me += r + "," + r + "Params,"
    });
    var Vt, Qr = function(e, i) {
        this.id = Mr++,
        (e._techDrag = this).target = e,
        this.harness = i,
        this.get = i ? i.get : ni,
        this.set = i ? i.getSetter : ht
    }, hn = ((Vt = pi.prototype).delay = function(e) {
        return e || e === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay),
        this._delay = e,
        this) : this._delay
    }
    ,
    Vt.duration = function(e) {
        return arguments.length ? this.totalDuration(0 < this._repeat ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
    }
    ,
    Vt.totalDuration = function(e) {
        return arguments.length ? (this._dirty = 0,
        kr(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    Vt.totalTime = function(e, i) {
        if (En(),
        !arguments.length)
            return this._tTime;
        var o = this._dp;
        if (o && o.smoothChildTiming && this._ts) {
            for (zr(this, e),
            !o._dp || o.parent || Se(o, this); o && o.parent; )
                o.parent._time !== o._start + (0 <= o._ts ? o._tTime / o._ts : (o.totalDuration() - o._tTime) / -o._ts) && o.totalTime(o._tTime, !0),
                o = o.parent;
            !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && e < this._tDur || this._ts < 0 && 0 < e || !this._tDur && !e) && Qt(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== e || !this._dur && !i || this._initted && Math.abs(this._zTime) === fe || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e),
        wn(this, e, i)),
        this
    }
    ,
    Vt.time = function(e, i) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + nr(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), i) : this._time
    }
    ,
    Vt.totalProgress = function(e, i) {
        return arguments.length ? this.totalTime(this.totalDuration() * e, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : 0 < this.rawTime() ? 1 : 0
    }
    ,
    Vt.progress = function(e, i) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + nr(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : 0 < this.rawTime() ? 1 : 0
    }
    ,
    Vt.iteration = function(e, i) {
        var o = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (e - 1) * o, i) : this._repeat ? ae(this._tTime, o) + 1 : 1
    }
    ,
    Vt.timeScale = function(e, i) {
        if (!arguments.length)
            return this._rts === -fe ? 0 : this._rts;
        if (this._rts === e)
            return this;
        var o = this.parent && this._ts ? pr(this.parent._time, this) : this._tTime;
        return this._rts = +e || 0,
        this._ts = this._ps || e === -fe ? 0 : this._rts,
        this.totalTime(pe(-Math.abs(this._delay), this._tDur, o), i !== !1),
        Nr(this),
        function(c) {
            for (var h = c.parent; h && h.parent; )
                h._dirty = 1,
                h.totalDuration(),
                h = h.parent;
            return c
        }(this)
    }
    ,
    Vt.paused = function(e) {
        return arguments.length ? (this._ps !== e && ((this._ps = e) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (En(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== fe && (this._tTime -= fe)))),
        this) : this._ps
    }
    ,
    Vt.startTime = function(e) {
        if (arguments.length) {
            this._start = e;
            var i = this.parent || this._dp;
            return !i || !i._sort && this.parent || Qt(i, this, e - this._delay),
            this
        }
        return this._start
    }
    ,
    Vt.endTime = function(e) {
        return this._start + (Fe(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    Vt.rawTime = function(e) {
        var i = this.parent || this._dp;
        return i ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? pr(i.rawTime(e), this) : this._tTime : this._tTime
    }
    ,
    Vt.revert = function(e) {
        e === void 0 && (e = oe);
        var i = Re;
        return Re = e,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(e),
        this.totalTime(-.01, e.suppressEvents)),
        this.data !== "nested" && e.kill !== !1 && this.kill(),
        Re = i,
        this
    }
    ,
    Vt.globalTime = function(e) {
        for (var i = this, o = arguments.length ? e : i.rawTime(); i; )
            o = i._start + o / (Math.abs(i._ts) || 1),
            i = i._dp;
        return !this.parent && this._sat ? this._sat.globalTime(e) : o
    }
    ,
    Vt.repeat = function(e) {
        return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e,
        Dr(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    Vt.repeatDelay = function(e) {
        if (arguments.length) {
            var i = this._time;
            return this._rDelay = e,
            Dr(this),
            i ? this.time(i) : this
        }
        return this._rDelay
    }
    ,
    Vt.yoyo = function(e) {
        return arguments.length ? (this._yoyo = e,
        this) : this._yoyo
    }
    ,
    Vt.seek = function(e, i) {
        return this.totalTime(_n(this, e), Fe(i))
    }
    ,
    Vt.restart = function(e, i) {
        return this.play().totalTime(e ? -this._delay : 0, Fe(i))
    }
    ,
    Vt.play = function(e, i) {
        return e != null && this.seek(e, i),
        this.reversed(!1).paused(!1)
    }
    ,
    Vt.reverse = function(e, i) {
        return e != null && this.seek(e || this.totalDuration(), i),
        this.reversed(!0).paused(!1)
    }
    ,
    Vt.pause = function(e, i) {
        return e != null && this.seek(e, i),
        this.paused(!0)
    }
    ,
    Vt.resume = function() {
        return this.paused(!1)
    }
    ,
    Vt.reversed = function(e) {
        return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -fe : 0)),
        this) : this._rts < 0
    }
    ,
    Vt.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -fe,
        this
    }
    ,
    Vt.isActive = function() {
        var e, i = this.parent || this._dp, o = this._start;
        return !(i && !(this._ts && this._initted && i.isActive() && (e = i.rawTime(!0)) >= o && e < this.endTime(!0) - fe))
    }
    ,
    Vt.eventCallback = function(e, i, o) {
        var l = this.vars;
        return 1 < arguments.length ? (i ? (l[e] = i,
        o && (l[e + "Params"] = o),
        e === "onUpdate" && (this._onUpdate = i)) : delete l[e],
        this) : l[e]
    }
    ,
    Vt.then = function(e) {
        var i = this;
        return new Promise(function(o) {
            function l() {
                var h = i.then;
                i.then = null,
                ne(c) && (c = c(i)) && (c.then || c === i) && (i.then = h),
                o(c),
                i.then = h
            }
            var c = ne(e) ? e : er;
            i._initted && i.totalProgress() === 1 && 0 <= i._ts || !i._tTime && i._ts < 0 ? l() : i._prom = l
        }
        )
    }
    ,
    Vt.kill = function() {
        Yr(this)
    }
    ,
    pi);
    function pi(r) {
        this.vars = r,
        this._delay = +r.delay || 0,
        (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) && (this._rDelay = r.repeatDelay || 0,
        this._yoyo = !!r.yoyo || !!r.yoyoEase),
        this._ts = 1,
        kr(this, +r.duration, 1, 1),
        this.data = r.data,
        ce && (this._ctx = ce).data.push(this),
        Sr || Pe.wake()
    }
    ye(hn.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -fe,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var t = function(r) {
        function e(o, l) {
            var c;
            return o === void 0 && (o = {}),
            (c = r.call(this, o) || this).labels = {},
            c.smoothChildTiming = !!o.smoothChildTiming,
            c.autoRemoveChildren = !!o.autoRemoveChildren,
            c._sort = Fe(o.sortChildren),
            ue && Qt(o.parent || ue, De(c), l),
            o.reversed && c.reverse(),
            o.paused && c.paused(!0),
            o.scrollTrigger && Le(De(c), o.scrollTrigger),
            c
        }
        ln(e, r);
        var i = e.prototype;
        return i.to = function(l, c, h) {
            return ze(0, arguments, this),
            this
        }
        ,
        i.from = function(l, c, h) {
            return ze(1, arguments, this),
            this
        }
        ,
        i.fromTo = function(l, c, h, p) {
            return ze(2, arguments, this),
            this
        }
        ,
        i.set = function(l, c, h) {
            return c.duration = 0,
            c.parent = this,
            Xn(c).repeatDelay || (c.repeat = 0),
            c.immediateRender = !!c.immediateRender,
            new S(l,c,_n(this, h),1),
            this
        }
        ,
        i.call = function(l, c, h) {
            return Qt(this, S.delayedCall(0, l, c), h)
        }
        ,
        i.staggerTo = function(l, c, h, p, _, b, A) {
            return h.duration = c,
            h.stagger = h.stagger || p,
            h.onComplete = b,
            h.onCompleteParams = A,
            h.parent = this,
            new S(l,h,_n(this, _)),
            this
        }
        ,
        i.staggerFrom = function(l, c, h, p, _, b, A) {
            return h.runBackwards = 1,
            Xn(h).immediateRender = Fe(h.immediateRender),
            this.staggerTo(l, c, h, p, _, b, A)
        }
        ,
        i.staggerFromTo = function(l, c, h, p, _, b, A, L) {
            return p.startAt = h,
            Xn(p).immediateRender = Fe(p.immediateRender),
            this.staggerTo(l, c, p, _, b, A, L)
        }
        ,
        i.render = function(l, c, h) {
            var p, _, b, A, L, C, I, $, Z, ct, J, G, U = this._time, X = this._dirty ? this.totalDuration() : this._tDur, et = this._dur, B = l <= 0 ? 0 : u(l), Q = this._zTime < 0 != l < 0 && (this._initted || !et);
            if (this !== ue && X < B && 0 <= l && (B = X),
            B !== this._tTime || h || Q) {
                if (U !== this._time && et && (B += this._time - U,
                l += this._time - U),
                p = B,
                Z = this._start,
                C = !($ = this._ts),
                Q && (et || (U = this._zTime),
                !l && c || (this._zTime = l)),
                this._repeat) {
                    if (J = this._yoyo,
                    L = et + this._rDelay,
                    this._repeat < -1 && l < 0)
                        return this.totalTime(100 * L + l, c, h);
                    if (p = u(B % L),
                    B === X ? (A = this._repeat,
                    p = et) : ((A = ~~(ct = u(B / L))) && A === ct && (p = et,
                    A--),
                    et < p && (p = et)),
                    ct = ae(this._tTime, L),
                    !U && this._tTime && ct !== A && this._tTime - ct * L - this._dur <= 0 && (ct = A),
                    J && 1 & A && (p = et - p,
                    G = 1),
                    A !== ct && !this._lock) {
                        var ut = J && 1 & ct
                          , Yt = ut === (J && 1 & A);
                        if (A < ct && (ut = !ut),
                        U = ut ? 0 : B % et ? et : B,
                        this._lock = 1,
                        this.render(U || (G ? 0 : u(A * L)), c, !et)._lock = 0,
                        this._tTime = B,
                        !c && this.parent && rn(this, "onRepeat"),
                        this.vars.repeatRefresh && !G && (this.invalidate()._lock = 1),
                        U && U !== this._time || C != !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                            return this;
                        if (et = this._dur,
                        X = this._tDur,
                        Yt && (this._lock = 2,
                        U = ut ? et : -1e-4,
                        this.render(U, !0),
                        this.vars.repeatRefresh && !G && this.invalidate()),
                        this._lock = 0,
                        !this._ts && !C)
                            return this;
                        Pn(this, G)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (I = function(te, ke, ee) {
                    var Rt;
                    if (ke < ee)
                        for (Rt = te._first; Rt && Rt._start <= ee; ) {
                            if (Rt.data === "isPause" && Rt._start > ke)
                                return Rt;
                            Rt = Rt._next
                        }
                    else
                        for (Rt = te._last; Rt && Rt._start >= ee; ) {
                            if (Rt.data === "isPause" && Rt._start < ke)
                                return Rt;
                            Rt = Rt._prev
                        }
                }(this, u(U), u(p))) && (B -= p - (p = I._start)),
                this._tTime = B,
                this._time = p,
                this._act = !$,
                this._initted || (this._onUpdate = this.vars.onUpdate,
                this._initted = 1,
                this._zTime = l,
                U = 0),
                !U && p && !c && !A && (rn(this, "onStart"),
                this._tTime !== B))
                    return this;
                if (U <= p && 0 <= l)
                    for (_ = this._first; _; ) {
                        if (b = _._next,
                        (_._act || p >= _._start) && _._ts && I !== _) {
                            if (_.parent !== this)
                                return this.render(l, c, h);
                            if (_.render(0 < _._ts ? (p - _._start) * _._ts : (_._dirty ? _.totalDuration() : _._tDur) + (p - _._start) * _._ts, c, h),
                            p !== this._time || !this._ts && !C) {
                                I = 0,
                                b && (B += this._zTime = -fe);
                                break
                            }
                        }
                        _ = b
                    }
                else {
                    _ = this._last;
                    for (var Ht = l < 0 ? l : p; _; ) {
                        if (b = _._prev,
                        (_._act || Ht <= _._end) && _._ts && I !== _) {
                            if (_.parent !== this)
                                return this.render(l, c, h);
                            if (_.render(0 < _._ts ? (Ht - _._start) * _._ts : (_._dirty ? _.totalDuration() : _._tDur) + (Ht - _._start) * _._ts, c, h || Re && (_._initted || _._startAt)),
                            p !== this._time || !this._ts && !C) {
                                I = 0,
                                b && (B += this._zTime = Ht ? -fe : fe);
                                break
                            }
                        }
                        _ = b
                    }
                }
                if (I && !c && (this.pause(),
                I.render(U <= p ? 0 : -fe)._zTime = U <= p ? 1 : -1,
                this._ts))
                    return this._start = Z,
                    Nr(this),
                    this.render(l, c, h);
                this._onUpdate && !c && rn(this, "onUpdate", !0),
                (B === X && this._tTime >= this.totalDuration() || !B && U) && (Z !== this._start && Math.abs($) === Math.abs(this._ts) || this._lock || (!l && et || !(B === X && 0 < this._ts || !B && this._ts < 0) || fn(this, 1),
                c || l < 0 && !U || !B && !U && X || (rn(this, B === X && 0 <= l ? "onComplete" : "onReverseComplete", !0),
                !this._prom || B < X && 0 < this.timeScale() || this._prom())))
            }
            return this
        }
        ,
        i.add = function(l, c) {
            var h = this;
            if (Ce(c) || (c = _n(this, c, l)),
            !(l instanceof hn)) {
                if (M(l))
                    return l.forEach(function(p) {
                        return h.add(p, c)
                    }),
                    this;
                if (Tt(l))
                    return this.addLabel(l, c);
                if (!ne(l))
                    return this;
                l = S.delayedCall(0, l)
            }
            return this !== l ? Qt(this, l, c) : this
        }
        ,
        i.getChildren = function(l, c, h, p) {
            l === void 0 && (l = !0),
            c === void 0 && (c = !0),
            h === void 0 && (h = !0),
            p === void 0 && (p = -Rn);
            for (var _ = [], b = this._first; b; )
                b._start >= p && (b instanceof S ? c && _.push(b) : (h && _.push(b),
                l && _.push.apply(_, b.getChildren(!0, c, h)))),
                b = b._next;
            return _
        }
        ,
        i.getById = function(l) {
            for (var c = this.getChildren(1, 1, 1), h = c.length; h--; )
                if (c[h].vars.id === l)
                    return c[h]
        }
        ,
        i.remove = function(l) {
            return Tt(l) ? this.removeLabel(l) : ne(l) ? this.killTweensOf(l) : (Tr(this, l),
            l === this._recent && (this._recent = this._last),
            jn(this))
        }
        ,
        i.totalTime = function(l, c) {
            return arguments.length ? (this._forcing = 1,
            !this._dp && this._ts && (this._start = u(Pe.time - (0 < this._ts ? l / this._ts : (this.totalDuration() - l) / -this._ts))),
            r.prototype.totalTime.call(this, l, c),
            this._forcing = 0,
            this) : this._tTime
        }
        ,
        i.addLabel = function(l, c) {
            return this.labels[l] = _n(this, c),
            this
        }
        ,
        i.removeLabel = function(l) {
            return delete this.labels[l],
            this
        }
        ,
        i.addPause = function(l, c, h) {
            var p = S.delayedCall(0, c || At, h);
            return p.data = "isPause",
            this._hasPause = 1,
            Qt(this, p, _n(this, l))
        }
        ,
        i.removePause = function(l) {
            var c = this._first;
            for (l = _n(this, l); c; )
                c._start === l && c.data === "isPause" && fn(c),
                c = c._next
        }
        ,
        i.killTweensOf = function(l, c, h) {
            for (var p = this.getTweensOf(l, h), _ = p.length; _--; )
                s !== p[_] && p[_].kill(l, c);
            return this
        }
        ,
        i.getTweensOf = function(l, c) {
            for (var h, p = [], _ = Kt(l), b = this._first, A = Ce(c); b; )
                b instanceof S ? fi(b._targets, _) && (A ? (!s || b._initted && b._ts) && b.globalTime(0) <= c && b.globalTime(b.totalDuration()) > c : !c || b.isActive()) && p.push(b) : (h = b.getTweensOf(_, c)).length && p.push.apply(p, h),
                b = b._next;
            return p
        }
        ,
        i.tweenTo = function(l, c) {
            c = c || {};
            var h, p = this, _ = _n(p, l), b = c.startAt, A = c.onStart, L = c.onStartParams, C = c.immediateRender, I = S.to(p, ye({
                ease: c.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: _,
                overwrite: "auto",
                duration: c.duration || Math.abs((_ - (b && "time"in b ? b.time : p._time)) / p.timeScale()) || fe,
                onStart: function() {
                    if (p.pause(),
                    !h) {
                        var Z = c.duration || Math.abs((_ - (b && "time"in b ? b.time : p._time)) / p.timeScale());
                        I._dur !== Z && kr(I, Z, 0, 1).render(I._time, !0, !0),
                        h = 1
                    }
                    A && A.apply(I, L || [])
                }
            }, c));
            return C ? I.render(0) : I
        }
        ,
        i.tweenFromTo = function(l, c, h) {
            return this.tweenTo(c, ye({
                startAt: {
                    time: _n(this, l)
                }
            }, h))
        }
        ,
        i.recent = function() {
            return this._recent
        }
        ,
        i.nextLabel = function(l) {
            return l === void 0 && (l = this._time),
            Yn(this, _n(this, l))
        }
        ,
        i.previousLabel = function(l) {
            return l === void 0 && (l = this._time),
            Yn(this, _n(this, l), 1)
        }
        ,
        i.currentLabel = function(l) {
            return arguments.length ? this.seek(l, !0) : this.previousLabel(this._time + fe)
        }
        ,
        i.shiftChildren = function(l, c, h) {
            h === void 0 && (h = 0);
            for (var p, _ = this._first, b = this.labels; _; )
                _._start >= h && (_._start += l,
                _._end += l),
                _ = _._next;
            if (c)
                for (p in b)
                    b[p] >= h && (b[p] += l);
            return jn(this)
        }
        ,
        i.invalidate = function(l) {
            var c = this._first;
            for (this._lock = 0; c; )
                c.invalidate(l),
                c = c._next;
            return r.prototype.invalidate.call(this, l)
        }
        ,
        i.clear = function(l) {
            l === void 0 && (l = !0);
            for (var c, h = this._first; h; )
                c = h._next,
                this.remove(h),
                h = c;
            return this._dp && (this._time = this._tTime = this._pTime = 0),
            l && (this.labels = {}),
            jn(this)
        }
        ,
        i.totalDuration = function(l) {
            var c, h, p, _ = 0, b = this, A = b._last, L = Rn;
            if (arguments.length)
                return b.timeScale((b._repeat < 0 ? b.duration() : b.totalDuration()) / (b.reversed() ? -l : l));
            if (b._dirty) {
                for (p = b.parent; A; )
                    c = A._prev,
                    A._dirty && A.totalDuration(),
                    L < (h = A._start) && b._sort && A._ts && !b._lock ? (b._lock = 1,
                    Qt(b, A, h - A._delay, 1)._lock = 0) : L = h,
                    h < 0 && A._ts && (_ -= h,
                    (!p && !b._dp || p && p.smoothChildTiming) && (b._start += h / b._ts,
                    b._time -= h,
                    b._tTime -= h),
                    b.shiftChildren(-h, !1, -1 / 0),
                    L = 0),
                    A._end > _ && A._ts && (_ = A._end),
                    A = c;
                kr(b, b === ue && b._time > _ ? b._time : _, 1, 1),
                b._dirty = 0
            }
            return b._tDur
        }
        ,
        e.updateRoot = function(l) {
            if (ue._ts && (wn(ue, pr(l, ue)),
            Wr = Pe.frame),
            Pe.frame >= pt) {
                pt += He.autoSleep || 120;
                var c = ue._first;
                if ((!c || !c._ts) && He.autoSleep && Pe._listeners.length < 2) {
                    for (; c && !c._ts; )
                        c = c._next;
                    c || Pe.sleep()
                }
            }
        }
        ,
        e
    }(hn);
    ye(t.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    function n(r, e, i, o, l, c) {
        var h, p, _, b;
        if (de[r] && (h = new de[r]).init(l, h.rawVars ? e[r] : function(L, C, I, $, Z) {
            if (ne(L) && (L = w(L, Z, C, I, $)),
            !cn(L) || L.style && L.nodeType || M(L) || E(L))
                return Tt(L) ? w(L, Z, C, I, $) : L;
            var ct, J = {};
            for (ct in L)
                J[ct] = w(L[ct], Z, C, I, $);
            return J
        }(e[r], o, l, c, i), i, o, c) !== !1 && (i._pt = p = new Nt(i._pt,l,r,0,1,h.render,h,0,h.priority),
        i !== Bn))
            for (_ = i._ptLookup[i._targets.indexOf(l)],
            b = h._props.length; b--; )
                _[h._props[b]] = p;
        return h
    }
    function a(r, e, i, o) {
        var l, c, h = e.ease || o || "power1.inOut";
        if (M(e))
            c = i[r] || (i[r] = []),
            e.forEach(function(p, _) {
                return c.push({
                    t: _ / (e.length - 1) * 100,
                    v: p,
                    e: h
                })
            });
        else
            for (l in e)
                c = i[l] || (i[l] = []),
                l === "ease" || c.push({
                    t: parseFloat(r),
                    v: e[l],
                    e: h
                })
    }
    var s, d, g = function(e, i, o, l, c, h, p, _, b, A) {
        ne(l) && (l = l(c || 0, e, h));
        var L, C = e[i], I = o !== "get" ? o : ne(C) ? b ? e[i.indexOf("set") || !ne(e["get" + i.substr(3)]) ? i : "get" + i.substr(3)](b) : e[i]() : C, $ = ne(C) ? b ? yt : ft : j;
        if (Tt(l) && (~l.indexOf("random(") && (l = zn(l)),
        l.charAt(1) === "=" && (!(L = hr(I, l) + (Ae(I) || 0)) && L !== 0 || (l = L))),
        !A || I !== l || d)
            return isNaN(I * l) || l === "" ? (C || i in e || qr(i, l),
            function(ct, J, G, U, X, et, B) {
                var Q, ut, Yt, Ht, Wt, te, ke, ee, Rt = new Nt(this._pt,ct,J,0,1,be,null,X), Ne = 0, pn = 0;
                for (Rt.b = G,
                Rt.e = U,
                G += "",
                (ke = ~(U += "").indexOf("random(")) && (U = zn(U)),
                et && (et(ee = [G, U], ct, J),
                G = ee[0],
                U = ee[1]),
                ut = G.match(at) || []; Q = at.exec(U); )
                    Ht = Q[0],
                    Wt = U.substring(Ne, Q.index),
                    Yt ? Yt = (Yt + 1) % 5 : Wt.substr(-5) === "rgba(" && (Yt = 1),
                    Ht !== ut[pn++] && (te = parseFloat(ut[pn - 1]) || 0,
                    Rt._pt = {
                        _next: Rt._pt,
                        p: Wt || pn === 1 ? Wt : ",",
                        s: te,
                        c: Ht.charAt(1) === "=" ? hr(te, Ht) - te : parseFloat(Ht) - te,
                        m: Yt && Yt < 4 ? Math.round : 0
                    },
                    Ne = at.lastIndex);
                return Rt.c = Ne < U.length ? U.substring(Ne, U.length) : "",
                Rt.fp = B,
                (dt.test(U) || ke) && (Rt.e = 0),
                this._pt = Rt
            }
            .call(this, e, i, I, l, $, _ || He.stringFilter, b)) : (L = new Nt(this._pt,e,i,+I || 0,l - (I || 0),typeof C == "boolean" ? Xe : me,0,$),
            b && (L.fp = b),
            p && L.modifier(p, this, e),
            this._pt = L)
    }, m = function r(e, i, o) {
        var l, c, h, p, _, b, A, L, C, I, $, Z, ct, J = e.vars, G = J.ease, U = J.startAt, X = J.immediateRender, et = J.lazy, B = J.onUpdate, Q = J.runBackwards, ut = J.yoyoEase, Yt = J.keyframes, Ht = J.autoRevert, Wt = e._dur, te = e._startAt, ke = e._targets, ee = e.parent, Rt = ee && ee.data === "nested" ? ee.vars.targets : ke, Ne = e._overwrite === "auto" && !gr, pn = e.timeline;
        if (!pn || Yt && G || (G = "none"),
        e._ease = Ke(G, $e.ease),
        e._yEase = ut ? Vr(Ke(ut === !0 ? G : ut, $e.ease)) : 0,
        ut && e._yoyo && !e._repeat && (ut = e._yEase,
        e._yEase = e._ease,
        e._ease = ut),
        e._from = !pn && !!J.runBackwards,
        !pn || Yt && !J.stagger) {
            if (Z = (L = ke[0] ? br(ke[0]).harness : 0) && J[L.prop],
            l = bn(J, se),
            te && (te._zTime < 0 && te.progress(1),
            i < 0 && Q && X && !Ht ? te.render(-1, !0) : te.revert(Q && Wt ? $t : vt),
            te._lazy = 0),
            U) {
                if (fn(e._startAt = S.set(ke, ye({
                    data: "isStart",
                    overwrite: !1,
                    parent: ee,
                    immediateRender: !0,
                    lazy: !te && Fe(et),
                    startAt: null,
                    delay: 0,
                    onUpdate: B && function() {
                        return rn(e, "onUpdate")
                    }
                    ,
                    stagger: 0
                }, U))),
                e._startAt._dp = 0,
                e._startAt._sat = e,
                i < 0 && (Re || !X && !Ht) && e._startAt.revert($t),
                X && Wt && i <= 0 && o <= 0)
                    return void (i && (e._zTime = i))
            } else if (Q && Wt && !te)
                if (i && (X = !1),
                h = ye({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: X && !te && Fe(et),
                    immediateRender: X,
                    stagger: 0,
                    parent: ee
                }, l),
                Z && (h[L.prop] = Z),
                fn(e._startAt = S.set(ke, h)),
                e._startAt._dp = 0,
                e._startAt._sat = e,
                i < 0 && (Re ? e._startAt.revert($t) : e._startAt.render(-1, !0)),
                e._zTime = i,
                X) {
                    if (!i)
                        return
                } else
                    r(e._startAt, fe, fe);
            for (e._pt = e._ptCache = 0,
            et = Wt && Fe(et) || et && !Wt,
            c = 0; c < ke.length; c++) {
                if (A = (_ = ke[c])._techDrag || tr(ke)[c]._techDrag,
                e._ptLookup[c] = I = {},
                xe[A.id] && _e.length && Hn(),
                $ = Rt === ke ? c : Rt.indexOf(_),
                L && (C = new L).init(_, Z || l, e, $, Rt) !== !1 && (e._pt = p = new Nt(e._pt,_,C.name,0,1,C.render,C,0,C.priority),
                C._props.forEach(function(cr) {
                    I[cr] = p
                }),
                C.priority && (b = 1)),
                !L || Z)
                    for (h in l)
                        de[h] && (C = n(h, l, e, $, _, Rt)) ? C.priority && (b = 1) : I[h] = p = g.call(e, _, h, "get", l[h], $, Rt, 0, J.stringFilter);
                e._op && e._op[c] && e.kill(_, e._op[c]),
                Ne && e._pt && (s = e,
                ue.killTweensOf(_, I, e.globalTime(i)),
                ct = !e.parent,
                s = 0),
                e._pt && et && (xe[A.id] = 1)
            }
            b && It(e),
            e._onInit && e._onInit(e)
        }
        e._onUpdate = B,
        e._initted = (!e._op || e._pt) && !ct,
        Yt && i <= 0 && pn.render(Rn, !0, !0)
    }, w = function(e, i, o, l, c) {
        return ne(e) ? e.call(i, o, l, c) : Tt(e) && ~e.indexOf("random(") ? zn(e) : e
    }, k = Me + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", f = {};
    Be(k + ",id,stagger,delay,duration,paused,scrollTrigger", function(r) {
        return f[r] = 1
    });
    var S = function(r) {
        function e(o, l, c, h) {
            var p;
            typeof l == "number" && (c.duration = l,
            l = c,
            c = null);
            var _, b, A, L, C, I, $, Z, ct = (p = r.call(this, h ? l : Xn(l)) || this).vars, J = ct.duration, G = ct.delay, U = ct.immediateRender, X = ct.stagger, et = ct.overwrite, B = ct.keyframes, Q = ct.defaults, ut = ct.scrollTrigger, Yt = ct.yoyoEase, Ht = l.parent || ue, Wt = (M(o) || E(o) ? Ce(o[0]) : "length"in l) ? [o] : Kt(o);
            if (p._targets = Wt.length ? tr(Wt) : Zn("techDrag target " + o + " not found.", !He.nullTargetWarn) || [],
            p._ptLookup = [],
            p._overwrite = et,
            B || X || fr(J) || fr(G)) {
                if (l = p.vars,
                (_ = p.timeline = new t({
                    data: "nested",
                    defaults: Q || {},
                    targets: Ht && Ht.data === "nested" ? Ht.vars.targets : Wt
                })).kill(),
                _.parent = _._dp = De(p),
                _._start = 0,
                X || fr(J) || fr(G)) {
                    if (L = Wt.length,
                    $ = X && Lr(X),
                    cn(X))
                        for (C in X)
                            ~k.indexOf(C) && ((Z = Z || {})[C] = X[C]);
                    for (b = 0; b < L; b++)
                        (A = bn(l, f)).stagger = 0,
                        Yt && (A.yoyoEase = Yt),
                        Z && Ut(A, Z),
                        I = Wt[b],
                        A.duration = +w(J, De(p), b, I, Wt),
                        A.delay = (+w(G, De(p), b, I, Wt) || 0) - p._delay,
                        !X && L === 1 && A.delay && (p._delay = G = A.delay,
                        p._start += G,
                        A.delay = 0),
                        _.to(I, A, $ ? $(b, I, Wt) : 0),
                        _._ease = Ft.none;
                    _.duration() ? J = G = 0 : p.timeline = 0
                } else if (B) {
                    Xn(ye(_.vars.defaults, {
                        ease: "none"
                    })),
                    _._ease = Ke(B.ease || l.ease || "none");
                    var te, ke, ee, Rt = 0;
                    if (M(B))
                        B.forEach(function(Ne) {
                            return _.to(Wt, Ne, ">")
                        }),
                        _.duration();
                    else {
                        for (C in A = {},
                        B)
                            C === "ease" || C === "easeEach" || a(C, B[C], A, B.easeEach);
                        for (C in A)
                            for (te = A[C].sort(function(Ne, pn) {
                                return Ne.t - pn.t
                            }),
                            b = Rt = 0; b < te.length; b++)
                                (ee = {
                                    ease: (ke = te[b]).e,
                                    duration: (ke.t - (b ? te[b - 1].t : 0)) / 100 * J
                                })[C] = ke.v,
                                _.to(Wt, ee, Rt),
                                Rt += ee.duration;
                        _.duration() < J && _.to({}, {
                            duration: J - _.duration()
                        })
                    }
                }
                J || p.duration(J = _.duration())
            } else
                p.timeline = 0;
            return et !== !0 || gr || (s = De(p),
            ue.killTweensOf(Wt),
            s = 0),
            Qt(Ht, De(p), c),
            l.reversed && p.reverse(),
            l.paused && p.paused(!0),
            (U || !J && !B && p._start === u(Ht._time) && Fe(U) && function Ne(pn) {
                return !pn || pn._ts && Ne(pn.parent)
            }(De(p)) && Ht.data !== "nested") && (p._tTime = -fe,
            p.render(Math.max(0, -G) || 0)),
            ut && Le(De(p), ut),
            p
        }
        ln(e, r);
        var i = e.prototype;
        return i.render = function(l, c, h) {
            var p, _, b, A, L, C, I, $, Z, ct = this._time, J = this._tDur, G = this._dur, U = l < 0, X = J - fe < l && !U ? J : l < fe ? 0 : l;
            if (G) {
                if (X !== this._tTime || !l || h || !this._initted && this._tTime || this._startAt && this._zTime < 0 != U || this._lazy) {
                    if (p = X,
                    $ = this.timeline,
                    this._repeat) {
                        if (A = G + this._rDelay,
                        this._repeat < -1 && U)
                            return this.totalTime(100 * A + l, c, h);
                        if (p = u(X % A),
                        X === J ? (b = this._repeat,
                        p = G) : (b = ~~(L = u(X / A))) && b === L ? (p = G,
                        b--) : G < p && (p = G),
                        (C = this._yoyo && 1 & b) && (Z = this._yEase,
                        p = G - p),
                        L = ae(this._tTime, A),
                        p === ct && !h && this._initted && b === L)
                            return this._tTime = X,
                            this;
                        b !== L && ($ && this._yEase && Pn($, C),
                        this.vars.repeatRefresh && !C && !this._lock && p !== A && this._initted && (this._lock = h = 1,
                        this.render(u(A * b), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (di(this, U ? l : p, h, c, X))
                            return this._tTime = 0,
                            this;
                        if (!(ct === this._time || h && this.vars.repeatRefresh && b !== L))
                            return this;
                        if (G !== this._dur)
                            return this.render(l, c, h)
                    }
                    if (this._tTime = X,
                    this._time = p,
                    !this._act && this._ts && (this._act = 1,
                    this._lazy = 0),
                    this.ratio = I = (Z || this._ease)(p / G),
                    this._from && (this.ratio = I = 1 - I),
                    p && !ct && !c && !b && (rn(this, "onStart"),
                    this._tTime !== X))
                        return this;
                    for (_ = this._pt; _; )
                        _.r(I, _.d),
                        _ = _._next;
                    $ && $.render(l < 0 ? l : $._dur * $._ease(p / this._dur), c, h) || this._startAt && (this._zTime = l),
                    this._onUpdate && !c && (U && Tn(this, l, 0, h),
                    rn(this, "onUpdate")),
                    this._repeat && b !== L && this.vars.onRepeat && !c && this.parent && rn(this, "onRepeat"),
                    X !== this._tDur && X || this._tTime !== X || (U && !this._onUpdate && Tn(this, l, 0, !0),
                    !l && G || !(X === this._tDur && 0 < this._ts || !X && this._ts < 0) || fn(this, 1),
                    c || U && !ct || !(X || ct || C) || (rn(this, X === J ? "onComplete" : "onReverseComplete", !0),
                    !this._prom || X < J && 0 < this.timeScale() || this._prom()))
                }
            } else
                (function(B, Q, ut, Yt) {
                    var Ht, Wt, te, ke = B.ratio, ee = Q < 0 || !Q && (!B._start && function pn(cr) {
                        var Kn = cr.parent;
                        return Kn && Kn._ts && Kn._initted && !Kn._lock && (Kn.rawTime() < 0 || pn(Kn))
                    }(B) && (B._initted || !qn(B)) || (B._ts < 0 || B._dp._ts < 0) && !qn(B)) ? 0 : 1, Rt = B._rDelay, Ne = 0;
                    if (Rt && B._repeat && (Ne = pe(0, B._tDur, Q),
                    Wt = ae(Ne, Rt),
                    B._yoyo && 1 & Wt && (ee = 1 - ee),
                    Wt !== ae(B._tTime, Rt) && (ke = 1 - ee,
                    B.vars.repeatRefresh && B._initted && B.invalidate())),
                    ee !== ke || Re || Yt || B._zTime === fe || !Q && B._zTime) {
                        if (!B._initted && di(B, Q, Yt, ut, Ne))
                            return;
                        for (te = B._zTime,
                        B._zTime = Q || (ut ? fe : 0),
                        ut = ut || Q && !te,
                        B.ratio = ee,
                        B._from && (ee = 1 - ee),
                        B._time = 0,
                        B._tTime = Ne,
                        Ht = B._pt; Ht; )
                            Ht.r(ee, Ht.d),
                            Ht = Ht._next;
                        Q < 0 && Tn(B, Q, 0, !0),
                        B._onUpdate && !ut && rn(B, "onUpdate"),
                        Ne && B._repeat && !ut && B.parent && rn(B, "onRepeat"),
                        (Q >= B._tDur || Q < 0) && B.ratio === ee && (ee && fn(B, 1),
                        ut || Re || (rn(B, ee ? "onComplete" : "onReverseComplete", !0),
                        B._prom && B._prom()))
                    } else
                        B._zTime || (B._zTime = Q)
                }
                )(this, l, c, h);
            return this
        }
        ,
        i.targets = function() {
            return this._targets
        }
        ,
        i.invalidate = function(l) {
            return l && this.vars.runBackwards || (this._startAt = 0),
            this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
            this._ptLookup = [],
            this.timeline && this.timeline.invalidate(l),
            r.prototype.invalidate.call(this, l)
        }
        ,
        i.resetTo = function(l, c, h, p, _) {
            Sr || Pe.wake(),
            this._ts || this.play();
            var b, A = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || m(this, A),
            b = this._ease(A / this._dur),
            function(C, I, $, Z, ct, J, G, U) {
                var X, et, B, Q, ut = (C._pt && C._ptCache || (C._ptCache = {}))[I];
                if (!ut)
                    for (ut = C._ptCache[I] = [],
                    B = C._ptLookup,
                    Q = C._targets.length; Q--; ) {
                        if ((X = B[Q][I]) && X.d && X.d._pt)
                            for (X = X.d._pt; X && X.p !== I && X.fp !== I; )
                                X = X._next;
                        if (!X)
                            return d = 1,
                            C.vars[I] = "+=0",
                            m(C, G),
                            d = 0,
                            U ? Zn(I + " not eligible for reset") : 1;
                        ut.push(X)
                    }
                for (Q = ut.length; Q--; )
                    (X = (et = ut[Q])._pt || et).s = !Z && Z !== 0 || ct ? X.s + (Z || 0) + J * X.c : Z,
                    X.c = $ - X.s,
                    et.e && (et.e = Ee($) + Ae(et.e)),
                    et.b && (et.b = X.s + Ae(et.b))
            }(this, l, c, h, p, b, A, _) ? this.resetTo(l, c, h, p, 1) : (zr(this, 0),
            this.parent || Mn(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
            this.render(0))
        }
        ,
        i.kill = function(l, c) {
            if (c === void 0 && (c = "all"),
            !(l || c && c !== "all"))
                return this._lazy = this._pt = 0,
                this.parent ? Yr(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Re),
                this;
            if (this.timeline) {
                var h = this.timeline.totalDuration();
                return this.timeline.killTweensOf(l, c, s && s.vars.overwrite !== !0)._first || Yr(this),
                this.parent && h !== this.timeline.totalDuration() && kr(this, this._dur * this.timeline._tDur / h, 0, 1),
                this
            }
            var p, _, b, A, L, C, I, $ = this._targets, Z = l ? Kt(l) : $, ct = this._ptLookup, J = this._pt;
            if ((!c || c === "all") && function(U, X) {
                for (var et = U.length, B = et === X.length; B && et-- && U[et] === X[et]; )
                    ;
                return et < 0
            }($, Z))
                return c === "all" && (this._pt = 0),
                Yr(this);
            for (p = this._op = this._op || [],
            c !== "all" && (Tt(c) && (L = {},
            Be(c, function(G) {
                return L[G] = 1
            }),
            c = L),
            c = function(U, X) {
                var et, B, Q, ut, Yt = U[0] ? br(U[0]).harness : 0, Ht = Yt && Yt.aliases;
                if (!Ht)
                    return X;
                for (B in et = Ut({}, X),
                Ht)
                    if (B in et)
                        for (Q = (ut = Ht[B].split(",")).length; Q--; )
                            et[ut[Q]] = et[B];
                return et
            }($, c)),
            I = $.length; I--; )
                if (~Z.indexOf($[I]))
                    for (L in _ = ct[I],
                    c === "all" ? (p[I] = c,
                    A = _,
                    b = {}) : (b = p[I] = p[I] || {},
                    A = c),
                    A)
                        (C = _ && _[L]) && ("kill"in C.d && C.d.kill(L) !== !0 || Tr(this, C, "_pt"),
                        delete _[L]),
                        b !== "all" && (b[L] = 1);
            return this._initted && !this._pt && J && Yr(this),
            this
        }
        ,
        e.to = function(l, c, h) {
            return new e(l,c,h)
        }
        ,
        e.from = function(l, c) {
            return ze(1, arguments)
        }
        ,
        e.delayedCall = function(l, c, h, p) {
            return new e(c,0,{
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: l,
                onComplete: c,
                onReverseComplete: c,
                onCompleteParams: h,
                onReverseCompleteParams: h,
                callbackScope: p
            })
        }
        ,
        e.fromTo = function(l, c, h) {
            return ze(2, arguments)
        }
        ,
        e.set = function(l, c) {
            return c.duration = 0,
            c.repeatDelay || (c.repeat = 0),
            new e(l,c)
        }
        ,
        e.killTweensOf = function(l, c, h) {
            return ue.killTweensOf(l, c, h)
        }
        ,
        e
    }(hn);
    ye(S.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    Be("staggerTo,staggerFrom,staggerFromTo", function(r) {
        S[r] = function() {
            var e = new t
              , i = ge.call(arguments, 0);
            return i.splice(r === "staggerFromTo" ? 5 : 4, 0, 0),
            e[r].apply(e, i)
        }
    });
    function Y(r, e, i) {
        return r.setAttribute(e, i)
    }
    function R(r, e, i, o) {
        o.mSet(r, e, o.m.call(o.tween, i, o.mt), o)
    }
    var j = function(e, i, o) {
        return e[i] = o
    }
      , ft = function(e, i, o) {
        return e[i](o)
    }
      , yt = function(e, i, o, l) {
        return e[i](l.fp, o)
    }
      , ht = function(e, i) {
        return ne(e[i]) ? ft : Pr(e[i]) && e.setAttribute ? Y : j
    }
      , me = function(e, i) {
        return i.set(i.t, i.p, Math.round(1e6 * (i.s + i.c * e)) / 1e6, i)
    }
      , Xe = function(e, i) {
        return i.set(i.t, i.p, !!(i.s + i.c * e), i)
    }
      , be = function(e, i) {
        var o = i._pt
          , l = "";
        if (!e && i.b)
            l = i.b;
        else if (e === 1 && i.e)
            l = i.e;
        else {
            for (; o; )
                l = o.p + (o.m ? o.m(o.s + o.c * e) : Math.round(1e4 * (o.s + o.c * e)) / 1e4) + l,
                o = o._next;
            l += i.c
        }
        i.set(i.t, i.p, l, i)
    }
      , Dt = function(e, i) {
        for (var o = i._pt; o; )
            o.r(e, o.d),
            o = o._next
    }
      , Et = function(e, i, o, l) {
        for (var c, h = this._pt; h; )
            c = h._next,
            h.p === l && h.modifier(e, i, o),
            h = c
    }
      , Pt = function(e) {
        for (var i, o, l = this._pt; l; )
            o = l._next,
            l.p === e && !l.op || l.op === e ? Tr(this, l, "_pt") : l.dep || (i = 1),
            l = o;
        return !i
    }
      , It = function(e) {
        for (var i, o, l, c, h = e._pt; h; ) {
            for (i = h._next,
            o = l; o && o.pr > h.pr; )
                o = o._next;
            (h._prev = o ? o._prev : c) ? h._prev._next = h : l = h,
            (h._next = o) ? o._prev = h : c = h,
            h = i
        }
        e._pt = l
    }
      , Nt = (Vn.prototype.modifier = function(e, i, o) {
        this.mSet = this.mSet || this.set,
        this.set = R,
        this.m = e,
        this.mt = o,
        this.tween = i
    }
    ,
    Vn);
    function Vn(r, e, i, o, l, c, h, p, _) {
        this.t = e,
        this.s = o,
        this.c = l,
        this.p = i,
        this.r = c || me,
        this.d = h || this,
        this.set = p || j,
        this.pr = _ || 0,
        (this._next = r) && (r._prev = this)
    }
    Be(Me + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(r) {
        return se[r] = 1
    }),
    xt.TweenMax = xt.TweenLite = S,
    xt.TimelineLite = xt.TimelineMax = t,
    ue = new t({
        sortChildren: !1,
        defaults: $e,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    He.stringFilter = gn;
    function on(r) {
        return (z[r] || ot).map(function(e) {
            return e()
        })
    }
    function N() {
        var r = Date.now()
          , e = [];
        2 < r - it && (on("matchMediaInit"),
        F.forEach(function(i) {
            var o, l, c, h, p = i.queries, _ = i.conditions;
            for (l in p)
                (o = qe.matchMedia(p[l]).matches) && (c = 1),
                o !== _[l] && (_[l] = o,
                h = 1);
            h && (i.revert(),
            c && e.push(i))
        }),
        on("matchMediaRevert"),
        e.forEach(function(i) {
            return i.onMatch(i, function(o) {
                return i.add(null, o)
            })
        }),
        it = r,
        on("matchMedia"))
    }
    var P, F = [], z = {}, ot = [], it = 0, tt = 0, st = ((P = _t.prototype).add = function(e, i, o) {
        function l() {
            var h, p = ce, _ = c.selector;
            return p && p !== c && p.data.push(c),
            o && (c.selector = Ye(o)),
            ce = c,
            h = i.apply(c, arguments),
            ne(h) && c._r.push(h),
            ce = p,
            c.selector = _,
            c.isReverted = !1,
            h
        }
        ne(e) && (o = i,
        i = e,
        e = ne);
        var c = this;
        return c.last = l,
        e === ne ? l(c, function(h) {
            return c.add(null, h)
        }) : e ? c[e] = l : l
    }
    ,
    P.ignore = function(e) {
        var i = ce;
        ce = null,
        e(this),
        ce = i
    }
    ,
    P.getTweens = function() {
        var e = [];
        return this.data.forEach(function(i) {
            return i instanceof _t ? e.push.apply(e, i.getTweens()) : i instanceof S && !(i.parent && i.parent.data === "nested") && e.push(i)
        }),
        e
    }
    ,
    P.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    P.kill = function(e, i) {
        var o = this;
        if (e ? function() {
            for (var c, h = o.getTweens(), p = o.data.length; p--; )
                (c = o.data[p]).data === "isFlip" && (c.revert(),
                c.getChildren(!0, !0, !1).forEach(function(_) {
                    return h.splice(h.indexOf(_), 1)
                }));
            for (h.map(function(_) {
                return {
                    g: _._dur || _._delay || _._sat && !_._sat.vars.immediateRender ? _.globalTime(0) : -1 / 0,
                    t: _
                }
            }).sort(function(_, b) {
                return b.g - _.g || -1 / 0
            }).forEach(function(_) {
                return _.t.revert(e)
            }),
            p = o.data.length; p--; )
                (c = o.data[p])instanceof t ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(),
                c.kill()) : c instanceof S || !c.revert || c.revert(e);
            o._r.forEach(function(_) {
                return _(e, o)
            }),
            o.isReverted = !0
        }() : this.data.forEach(function(c) {
            return c.kill && c.kill()
        }),
        this.clear(),
        i)
            for (var l = F.length; l--; )
                F[l].id === this.id && F.splice(l, 1)
    }
    ,
    P.revert = function(e) {
        this.kill(e || {})
    }
    ,
    _t);
    function _t(r, e) {
        this.selector = e && Ye(e),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = tt++,
        r && this.add(r)
    }
    var qt, mt = ((qt = Ct.prototype).add = function(e, i, o) {
        cn(e) || (e = {
            matches: e
        });
        var l, c, h, p = new st(0,o || this.scope), _ = p.conditions = {};
        for (c in ce && !p.selector && (p.selector = ce.selector),
        this.contexts.push(p),
        i = p.add("onMatch", i),
        p.queries = e)
            c === "all" ? h = 1 : (l = qe.matchMedia(e[c])) && (F.indexOf(p) < 0 && F.push(p),
            (_[c] = l.matches) && (h = 1),
            l.addListener ? l.addListener(N) : l.addEventListener("change", N));
        return h && i(p, function(b) {
            return p.add(null, b)
        }),
        this
    }
    ,
    qt.revert = function(e) {
        this.kill(e || {})
    }
    ,
    qt.kill = function(e) {
        this.contexts.forEach(function(i) {
            return i.kill(e, !0)
        })
    }
    ,
    Ct);
    function Ct(r) {
        this.contexts = [],
        this.scope = r,
        ce && ce.data.push(this)
    }
    var bt = {
        registerPlugin: function() {
            for (var e = arguments.length, i = new Array(e), o = 0; o < e; o++)
                i[o] = arguments[o];
            i.forEach(function(l) {
                return Er(l)
            })
        },
        timeline: function(e) {
            return new t(e)
        },
        getTweensOf: function(e, i) {
            return ue.getTweensOf(e, i)
        },
        getProperty: function(e, i, o, l) {
            Tt(e) && (e = Kt(e)[0]);
            var c = br(e || {}).get
              , h = o ? er : Hr;
            return o === "native" && (o = ""),
            e && (i ? h((de[i] && de[i].get || c)(e, i, o, l)) : function(p, _, b) {
                return h((de[p] && de[p].get || c)(e, p, _, b))
            }
            )
        },
        quickSetter: function(e, i, o) {
            if (1 < (e = Kt(e)).length) {
                var l = e.map(function(A) {
                    return zt.quickSetter(A, i, o)
                })
                  , c = l.length;
                return function(A) {
                    for (var L = c; L--; )
                        l[L](A)
                }
            }
            e = e[0] || {};
            var h = de[i]
              , p = br(e)
              , _ = p.harness && (p.harness.aliases || {})[i] || i
              , b = h ? function(A) {
                var L = new h;
                Bn._pt = 0,
                L.init(e, o ? A + o : A, Bn, 0, [e]),
                L.render(1, L),
                Bn._pt && Dt(1, Bn)
            }
            : p.set(e, _);
            return h ? b : function(A) {
                return b(e, _, o ? A + o : A, p, 1)
            }
        },
        quickTo: function(e, i, o) {
            function l(p, _, b) {
                return h.resetTo(i, p, _, b)
            }
            var c, h = zt.to(e, ye(((c = {})[i] = "+=0.1",
            c.paused = !0,
            c.stagger = 0,
            c), o || {}));
            return l.tween = h,
            l
        },
        isTweening: function(e) {
            return 0 < ue.getTweensOf(e, !0).length
        },
        defaults: function(e) {
            return e && e.ease && (e.ease = Ke(e.ease, $e.ease)),
            Xr($e, e || {})
        },
        config: function(e) {
            return Xr(He, e || {})
        },
        registerEffect: function(e) {
            var i = e.name
              , o = e.effect
              , l = e.plugins
              , c = e.defaults
              , h = e.extendTimeline;
            (l || "").split(",").forEach(function(p) {
                return p && !de[p] && !xt[p] && Zn(i + " effect requires " + p + " plugin.")
            }),
            Ue[i] = function(p, _, b) {
                return o(Kt(p), ye(_ || {}, c), b)
            }
            ,
            h && (t.prototype[i] = function(p, _, b) {
                return this.add(Ue[i](p, cn(_) ? _ : (b = _) && {}, this), b)
            }
            )
        },
        registerEase: function(e, i) {
            Ft[e] = Ke(i)
        },
        parseEase: function(e, i) {
            return arguments.length ? Ke(e, i) : Ft
        },
        getById: function(e) {
            return ue.getById(e)
        },
        exportRoot: function(e, i) {
            e === void 0 && (e = {});
            var o, l, c = new t(e);
            for (c.smoothChildTiming = Fe(e.smoothChildTiming),
            ue.remove(c),
            c._dp = 0,
            c._time = c._tTime = ue._time,
            o = ue._first; o; )
                l = o._next,
                !i && !o._dur && o instanceof S && o.vars.onComplete === o._targets[0] || Qt(c, o, o._start - o._delay),
                o = l;
            return Qt(ue, c, 0),
            c
        },
        context: function(e, i) {
            return e ? new st(e,i) : ce
        },
        matchMedia: function(e) {
            return new mt(e)
        },
        matchMediaRefresh: function() {
            return F.forEach(function(e) {
                var i, o, l = e.conditions;
                for (o in l)
                    l[o] && (l[o] = !1,
                    i = 1);
                i && e.revert()
            }) || N()
        },
        addEventListener: function(e, i) {
            var o = z[e] || (z[e] = []);
            ~o.indexOf(i) || o.push(i)
        },
        removeEventListener: function(e, i) {
            var o = z[e]
              , l = o && o.indexOf(i);
            0 <= l && o.splice(l, 1)
        },
        utils: {
            wrap: function r(e, i, o) {
                var l = i - e;
                return M(e) ? On(e, r(0, e.length), i) : kn(o, function(c) {
                    return (l + (c - e) % l) % l + e
                })
            },
            wrapYoyo: function r(e, i, o) {
                var l = i - e
                  , c = 2 * l;
                return M(e) ? On(e, r(0, e.length - 1), i) : kn(o, function(h) {
                    return e + (l < (h = (c + (h - e) % c) % c || 0) ? c - h : h)
                })
            },
            distribute: Lr,
            random: Cr,
            snap: we,
            normalize: function(e, i, o) {
                return je(e, i, 0, 1, o)
            },
            getUnit: Ae,
            clamp: function(e, i, o) {
                return kn(o, function(l) {
                    return pe(e, i, l)
                })
            },
            splitColor: ie,
            toArray: Kt,
            selector: Ye,
            mapRange: je,
            pipe: function() {
                for (var e = arguments.length, i = new Array(e), o = 0; o < e; o++)
                    i[o] = arguments[o];
                return function(l) {
                    return i.reduce(function(c, h) {
                        return h(c)
                    }, l)
                }
            },
            unitize: function(e, i) {
                return function(o) {
                    return e(parseFloat(o)) + (i || Ae(o))
                }
            },
            interpolate: function r(e, i, o, l) {
                var c = isNaN(e + i) ? 0 : function(I) {
                    return (1 - I) * e + I * i
                }
                ;
                if (!c) {
                    var h, p, _, b, A, L = Tt(e), C = {};
                    if (o === !0 && (l = 1) && (o = null),
                    L)
                        e = {
                            p: e
                        },
                        i = {
                            p: i
                        };
                    else if (M(e) && !M(i)) {
                        for (_ = [],
                        b = e.length,
                        A = b - 2,
                        p = 1; p < b; p++)
                            _.push(r(e[p - 1], e[p]));
                        b--,
                        c = function($) {
                            $ *= b;
                            var Z = Math.min(A, ~~$);
                            return _[Z]($ - Z)
                        }
                        ,
                        o = i
                    } else
                        l || (e = Ut(M(e) ? [] : {}, e));
                    if (!_) {
                        for (h in i)
                            g.call(C, e, h, "get", i[h]);
                        c = function($) {
                            return Dt($, C) || (L ? e.p : e)
                        }
                    }
                }
                return kn(o, c)
            },
            shuffle: ri
        },
        install: dr,
        effects: Ue,
        ticker: Pe,
        updateRoot: t.updateRoot,
        plugins: de,
        globalTimeline: ue,
        core: {
            PropTween: Nt,
            globals: Xt,
            Tween: S,
            Timeline: t,
            Animation: hn,
            getCache: br,
            _removeLinkedListItem: Tr,
            reverting: function() {
                return Re
            },
            context: function(e) {
                return e && ce && (ce.data.push(e),
                e._ctx = ce),
                ce
            },
            suppressOverwrites: function(e) {
                return gr = e
            }
        }
    };
    Be("to,from,fromTo,delayedCall,set,killTweensOf", function(r) {
        return bt[r] = S[r]
    }),
    Pe.add(t.updateRoot),
    Bn = bt.to({}, {
        duration: 0
    });
    function Te(r, e) {
        for (var i = r._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
            i = i._next;
        return i
    }
    function Zt(r, e) {
        return {
            name: r,
            rawVars: 1,
            init: function(o, l, c) {
                c._onInit = function(h) {
                    var p, _;
                    if (Tt(l) && (p = {},
                    Be(l, function(b) {
                        return p[b] = 1
                    }),
                    l = p),
                    e) {
                        for (_ in p = {},
                        l)
                            p[_] = e(l[_]);
                        l = p
                    }
                    (function(A, L) {
                        var C, I, $, Z = A._targets;
                        for (C in L)
                            for (I = Z.length; I--; )
                                ($ = ($ = A._ptLookup[I][C]) && $.d) && ($._pt && ($ = Te($, C)),
                                $ && $.modifier && $.modifier(L[C], A, Z[I], C))
                    }
                    )(h, l)
                }
            }
        }
    }
    var zt = bt.registerPlugin({
        name: "attr",
        init: function(e, i, o, l, c) {
            var h, p, _;
            for (h in this.tween = o,
            i)
                _ = e.getAttribute(h) || "",
                (p = this.add(e, "setAttribute", (_ || 0) + "", i[h], l, c, 0, 0, h)).op = h,
                p.b = _,
                this._props.push(h)
        },
        render: function(e, i) {
            for (var o = i._pt; o; )
                Re ? o.set(o.t, o.p, o.b, o) : o.r(e, o.d),
                o = o._next
        }
    }, {
        name: "endArray",
        init: function(e, i) {
            for (var o = i.length; o--; )
                this.add(e, o, e[o] || 0, i[o], 0, 0, 0, 0, 0, 1)
        }
    }, Zt("roundProps", rr), Zt("modifiers"), Zt("snap", we)) || bt;
    S.version = t.version = zt.version = "3.12.6",
    oi = 1,
    Jn() && En();
    function an(r, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * r)) / 1e4 + e.u, e)
    }
    function sn(r, e) {
        return e.set(e.t, e.p, r === 1 ? e.e : Math.round(1e4 * (e.s + e.c * r)) / 1e4 + e.u, e)
    }
    function Sn(r, e) {
        return e.set(e.t, e.p, r ? Math.round(1e4 * (e.s + e.c * r)) / 1e4 + e.u : e.b, e)
    }
    function Kr(r, e) {
        var i = e.s + e.c * r;
        e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
    }
    function Ti(r, e) {
        return e.set(e.t, e.p, r ? e.e : e.b, e)
    }
    function gi(r, e) {
        return e.set(e.t, e.p, r !== 1 ? e.b : e.e, e)
    }
    function Vi(r, e, i) {
        return r.style[e] = i
    }
    function Gi(r, e, i) {
        return r.style.setProperty(e, i)
    }
    function Qi(r, e, i) {
        return r._techDrag[e] = i
    }
    function mi(r, e, i) {
        return r._techDrag.scaleX = r._techDrag.scaleY = i
    }
    function Ki(r, e, i, o, l) {
        var c = r._techDrag;
        c.scaleX = c.scaleY = i,
        c.renderTransform(l, c)
    }
    function Oi(r, e, i, o, l) {
        var c = r._techDrag;
        c[e] = i,
        c.renderTransform(l, c)
    }
    function yr(r, e) {
        var i = this
          , o = this.target
          , l = o.style
          , c = o._techDrag;
        if (r in ti && l) {
            if (this.tfm = this.tfm || {},
            r === "transform")
                return Ir.transform.split(",").forEach(function(h) {
                    return yr.call(i, h, e)
                });
            if (~(r = Ir[r] || r).indexOf(",") ? r.split(",").forEach(function(h) {
                return i.tfm[h] = ei(o, h)
            }) : this.tfm[r] = c.x ? c[r] : ei(o, r),
            r === Qn && (this.tfm.zOrigin = c.zOrigin),
            0 <= this.props.indexOf(Ge))
                return;
            c.svg && (this.svgo = o.getAttribute("data-svg-origin"),
            this.props.push(Qn, e, "")),
            r = Ge
        }
        (l || e) && this.props.push(r, e, l[r])
    }
    function _r(r) {
        r.translate && (r.removeProperty("translate"),
        r.removeProperty("scale"),
        r.removeProperty("rotate"))
    }
    function Hi() {
        var r, e, i = this.props, o = this.target, l = o.style, c = o._techDrag;
        for (r = 0; r < i.length; r += 3)
            i[r + 1] ? i[r + 1] === 2 ? o[i[r]](i[r + 2]) : o[i[r]] = i[r + 2] : i[r + 2] ? l[i[r]] = i[r + 2] : l.removeProperty(i[r].substr(0, 2) === "--" ? i[r] : i[r].replace(Zi, "-$1").toLowerCase());
        if (this.tfm) {
            for (e in this.tfm)
                c[e] = this.tfm[e];
            c.svg && (c.renderTransform(),
            o.setAttribute("data-svg-origin", this.svgo || "")),
            (r = rt()) && r.isStart || l[Ge] || (_r(l),
            c.zOrigin && l[Qn] && (l[Qn] += " " + c.zOrigin + "px",
            c.zOrigin = 0,
            c.renderTransform()),
            c.uncache = 1)
        }
    }
    function Pi(r, e) {
        var i = {
            target: r,
            props: [],
            revert: Hi,
            save: yr
        };
        return r._techDrag || zt.core.getCache(r),
        e && r.style && r.nodeType && e.split(",").forEach(function(o) {
            return i.save(o)
        }),
        i
    }
    function ki(r, e) {
        var i = D.createElementNS ? D.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), r) : D.createElement(r);
        return i && i.style ? i : D.createElement(r)
    }
    function sr(r, e, i) {
        var o = getComputedStyle(r);
        return o[e] || o.getPropertyValue(e.replace(Zi, "-$1").toLowerCase()) || o.getPropertyValue(e) || !i && sr(r, Mi(e) || e, 1) || ""
    }
    function le() {
        (function() {
            return typeof window < "u"
        }
        )() && window.document && (T = window,
        D = T.document,
        q = D.documentElement,
        W = ki("div") || {
            style: {}
        },
        ki("div"),
        Ge = Mi(Ge),
        Qn = Ge + "Origin",
        W.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        lt = !!Mi("perspective"),
        rt = zt.core.reverting,
        O = 1)
    }
    function Jr(r) {
        var e, i = ki("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), o = this.parentNode, l = this.nextSibling, c = this.style.cssText;
        if (q.appendChild(i),
        i.appendChild(this),
        this.style.display = "block",
        r)
            try {
                e = this.getBBox(),
                this._techDragBBox = this.getBBox,
                this.getBBox = Jr
            } catch {}
        else
            this._techDragBBox && (e = this._techDragBBox());
        return o && (l ? o.insertBefore(this, l) : o.appendChild(this)),
        q.removeChild(i),
        this.style.cssText = c,
        e
    }
    function Gn(r, e) {
        for (var i = e.length; i--; )
            if (r.hasAttribute(e[i]))
                return r.getAttribute(e[i])
    }
    function ur(r) {
        var e;
        try {
            e = r.getBBox()
        } catch {
            e = Jr.call(r, !0)
        }
        return e && (e.width || e.height) || r.getBBox === Jr || (e = Jr.call(r, !0)),
        !e || e.width || e.x || e.y ? e : {
            x: +Gn(r, ["x", "cx", "x1"]) || 0,
            y: +Gn(r, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }
    function Di(r) {
        return !(!r.getCTM || r.parentNode && !r.ownerSVGElement || !ur(r))
    }
    function Fr(r, e) {
        if (e) {
            var i, o = r.style;
            e in ti && e !== Qn && (e = Ge),
            o.removeProperty ? ((i = e.substr(0, 2)) !== "ms" && e.substr(0, 6) !== "webkit" || (e = "-" + e),
            o.removeProperty(i === "--" ? e : e.replace(Zi, "-$1").toLowerCase())) : o.removeAttribute(e)
        }
    }
    function Br(r, e, i, o, l, c) {
        var h = new Nt(r._pt,e,i,0,1,c ? gi : Ti);
        return (r._pt = h).b = o,
        h.e = l,
        r._props.push(i),
        h
    }
    function Or(r, e, i, o) {
        var l, c, h, p, _ = parseFloat(i) || 0, b = (i + "").trim().substr((_ + "").length) || "px", A = W.style, L = co.test(e), C = r.tagName.toLowerCase() === "svg", I = (C ? "client" : "offset") + (L ? "Width" : "Height"), $ = o === "px", Z = o === "%";
        if (o === b || !_ || oo[o] || oo[b])
            return _;
        if (b === "px" || $ || (_ = Or(r, e, i, "px")),
        p = r.getCTM && Di(r),
        (Z || b === "%") && (ti[e] || ~e.indexOf("adius")))
            return l = p ? r.getBBox()[L ? "width" : "height"] : r[I],
            Ee(Z ? _ / l * 100 : _ / 100 * l);
        if (A[L ? "width" : "height"] = 100 + ($ ? b : o),
        c = o !== "rem" && ~e.indexOf("adius") || o === "em" && r.appendChild && !C ? r : r.parentNode,
        p && (c = (r.ownerSVGElement || {}).parentNode),
        c && c !== D && c.appendChild || (c = D.body),
        (h = c._techDrag) && Z && h.width && L && h.time === Pe.time && !h.uncache)
            return Ee(_ / h.width * 100);
        if (!Z || e !== "height" && e !== "width")
            !Z && b !== "%" || ho[sr(c, "display")] || (A.position = sr(r, "position")),
            c === r && (A.position = "static"),
            c.appendChild(W),
            l = W[I],
            c.removeChild(W),
            A.position = "absolute";
        else {
            var ct = r.style[e];
            r.style[e] = 100 + o,
            l = r[I],
            ct ? r.style[e] = ct : Fr(r, e)
        }
        return L && Z && ((h = br(c)).time = Pe.time,
        h.width = c[I]),
        Ee($ ? l * _ / 100 : l && _ ? 100 / l * _ : 0)
    }
    function Xi(r, e, i, o) {
        if (!i || i === "none") {
            var l = Mi(e, r, 1)
              , c = l && sr(r, l, 1);
            c && c !== i ? (e = l,
            i = c) : e === "borderColor" && (i = sr(r, "borderTopColor"))
        }
        var h, p, _, b, A, L, C, I, $, Z, ct, J = new Nt(this._pt,r.style,e,0,1,be), G = 0, U = 0;
        if (J.b = i,
        J.e = o,
        i += "",
        (o += "") == "auto" && (L = r.style[e],
        r.style[e] = o,
        o = sr(r, e) || o,
        L ? r.style[e] = L : Fr(r, e)),
        gn(h = [i, o]),
        o = h[1],
        _ = (i = h[0]).match(gt) || [],
        (o.match(gt) || []).length) {
            for (; p = gt.exec(o); )
                C = p[0],
                $ = o.substring(G, p.index),
                A ? A = (A + 1) % 5 : $.substr(-5) !== "rgba(" && $.substr(-5) !== "hsla(" || (A = 1),
                C !== (L = _[U++] || "") && (b = parseFloat(L) || 0,
                ct = L.substr((b + "").length),
                C.charAt(1) === "=" && (C = hr(b, C) + ct),
                I = parseFloat(C),
                Z = C.substr((I + "").length),
                G = gt.lastIndex - Z.length,
                Z || (Z = Z || He.units[e] || ct,
                G === o.length && (o += Z,
                J.e += Z)),
                ct !== Z && (b = Or(r, e, L, Z) || 0),
                J._pt = {
                    _next: J._pt,
                    p: $ || U === 1 ? $ : ",",
                    s: b,
                    c: I - b,
                    m: A && A < 4 || e === "zIndex" ? Math.round : 0
                });
            J.c = G < o.length ? o.substring(G, o.length) : ""
        } else
            J.r = e === "display" && o === "none" ? gi : Ti;
        return dt.test(o) && (J.e = 0),
        this._pt = J
    }
    function Zr(r) {
        var e = r.split(" ")
          , i = e[0]
          , o = e[1] || "50%";
        return i !== "top" && i !== "bottom" && o !== "left" && o !== "right" || (r = i,
        i = o,
        o = r),
        e[0] = ao[i] || i,
        e[1] = ao[o] || o,
        e.join(" ")
    }
    function Ni(r, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var i, o, l, c = e.t, h = c.style, p = e.u, _ = c._techDrag;
            if (p === "all" || p === !0)
                h.cssText = "",
                o = 1;
            else
                for (l = (p = p.split(",")).length; -1 < --l; )
                    i = p[l],
                    ti[i] && (o = 1,
                    i = i === "transformOrigin" ? Qn : Ge),
                    Fr(c, i);
            o && (Fr(c, Ge),
            _ && (_.svg && c.removeAttribute("transform"),
            Fi(c, 1),
            _.uncache = 1,
            _r(h)))
        }
    }
    function Li(r) {
        return r === "matrix(1, 0, 0, 1, 0, 0)" || r === "none" || !r
    }
    function vi(r) {
        var e = sr(r, Ge);
        return Li(e) ? ji : e.substr(7).match(V).map(Ee)
    }
    function li(r, e) {
        var i, o, l, c, h = r._techDrag || br(r), p = r.style, _ = vi(r);
        return h.svg && r.getAttribute("transform") ? (_ = [(l = r.transform.baseVal.consolidate().matrix).a, l.b, l.c, l.d, l.e, l.f]).join(",") === "1,0,0,1,0,0" ? ji : _ : (_ !== ji || r.offsetParent || r === q || h.svg || (l = p.display,
        p.display = "block",
        (i = r.parentNode) && (r.offsetParent || r.getBoundingClientRect().width) || (c = 1,
        o = r.nextElementSibling,
        q.appendChild(r)),
        _ = vi(r),
        l ? p.display = l : Fr(r, "display"),
        c && (o ? i.insertBefore(r, o) : i ? i.appendChild(r) : q.removeChild(r))),
        e && 6 < _.length ? [_[0], _[1], _[4], _[5], _[12], _[13]] : _)
    }
    function yi(r, e, i, o, l, c) {
        var h, p, _, b = r._techDrag, A = l || li(r, !0), L = b.xOrigin || 0, C = b.yOrigin || 0, I = b.xOffset || 0, $ = b.yOffset || 0, Z = A[0], ct = A[1], J = A[2], G = A[3], U = A[4], X = A[5], et = e.split(" "), B = parseFloat(et[0]) || 0, Q = parseFloat(et[1]) || 0;
        i ? A !== ji && (p = Z * G - ct * J) && (_ = B * (-ct / p) + Q * (Z / p) - (Z * X - ct * U) / p,
        B = B * (G / p) + Q * (-J / p) + (J * X - G * U) / p,
        Q = _) : (B = (h = ur(r)).x + (~et[0].indexOf("%") ? B / 100 * h.width : B),
        Q = h.y + (~(et[1] || et[0]).indexOf("%") ? Q / 100 * h.height : Q)),
        o || o !== !1 && b.smooth ? (U = B - L,
        X = Q - C,
        b.xOffset = I + (U * Z + X * J) - U,
        b.yOffset = $ + (U * ct + X * G) - X) : b.xOffset = b.yOffset = 0,
        b.xOrigin = B,
        b.yOrigin = Q,
        b.smooth = !!o,
        b.origin = e,
        b.originIsAbsolute = !!i,
        r.style[Qn] = "0px 0px",
        c && (Br(c, b, "xOrigin", L, B),
        Br(c, b, "yOrigin", C, Q),
        Br(c, b, "xOffset", I, b.xOffset),
        Br(c, b, "yOffset", $, b.yOffset)),
        r.setAttribute("data-svg-origin", B + " " + Q)
    }
    function ci(r, e, i) {
        var o = Ae(e);
        return Ee(parseFloat(e) + parseFloat(Or(r, "x", i + "px", o))) + o
    }
    function Ri(r, e, i, o, l) {
        var c, h, p = 360, _ = Tt(l), b = parseFloat(l) * (_ && ~l.indexOf("rad") ? _i : 1) - o, A = o + b + "deg";
        return _ && ((c = l.split("_")[1]) === "short" && (b %= p) !== b % 180 && (b += b < 0 ? p : -p),
        c === "cw" && b < 0 ? b = (b + 36e9) % p - ~~(b / p) * p : c === "ccw" && 0 < b && (b = (b - 36e9) % p - ~~(b / p) * p)),
        r._pt = h = new Nt(r._pt,e,i,o,b,sn),
        h.e = A,
        h.u = "deg",
        r._props.push(i),
        h
    }
    function Ci(r, e) {
        for (var i in e)
            r[i] = e[i];
        return r
    }
    function v(r, e, i) {
        var o, l, c, h, p, _, b, A = Ci({}, i._techDrag), L = i.style;
        for (l in A.svg ? (c = i.getAttribute("transform"),
        i.setAttribute("transform", ""),
        L[Ge] = e,
        o = Fi(i, 1),
        Fr(i, Ge),
        i.setAttribute("transform", c)) : (c = getComputedStyle(i)[Ge],
        L[Ge] = e,
        o = Fi(i, 1),
        L[Ge] = c),
        ti)
            (c = A[l]) !== (h = o[l]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(l) < 0 && (p = Ae(c) !== (b = Ae(h)) ? Or(i, l, c, b) : parseFloat(c),
            _ = parseFloat(h),
            r._pt = new Nt(r._pt,o,l,p,_ - p,an),
            r._pt.u = b || 0,
            r._props.push(l));
        Ci(o, A)
    }
    var T, D, q, O, W, K, rt, lt, Ot = Ft.Power0, St = Ft.Power1, Mt = Ft.Power2, Gt = Ft.Power3, Ve = Ft.Power4, Lt = Ft.Linear, en = Ft.Quad, un = Ft.Cubic, An = Ft.Quart, ve = Ft.Quint, xr = Ft.Strong, xn = Ft.Elastic, Je = Ft.Back, lr = Ft.SteppedEase, Ei = Ft.Bounce, zi = Ft.Sine, Yi = Ft.Expo, Ji = Ft.Circ, ti = {}, _i = 180 / Math.PI, Si = Math.PI / 180, Ai = Math.atan2, Zi = /([A-Z])/g, co = /(left|right|width|margin|padding|x)/i, fo = /[\s,\(]\S/, Ir = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, Ge = "transform", Qn = Ge + "Origin", io = "O,Moz,ms,Ms,Webkit".split(","), Mi = function(e, i, o) {
        var l = (i || W).style
          , c = 5;
        if (e in l && !o)
            return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); c-- && !(io[c] + e in l); )
            ;
        return c < 0 ? null : (c === 3 ? "ms" : 0 <= c ? io[c] : "") + e
    }, oo = {
        deg: 1,
        rad: 1,
        turn: 1
    }, ho = {
        grid: 1,
        flex: 1
    }, ei = function(e, i, o, l) {
        var c;
        return O || le(),
        i in Ir && i !== "transform" && ~(i = Ir[i]).indexOf(",") && (i = i.split(",")[0]),
        ti[i] && i !== "transform" ? (c = Fi(e, l),
        c = i !== "transformOrigin" ? c[i] : c.svg ? c.origin : $i(sr(e, Qn)) + " " + c.zOrigin + "px") : (c = e.style[i]) && c !== "auto" && !l && !~(c + "").indexOf("calc(") || (c = Wi[i] && Wi[i](e, i, o) || sr(e, i) || ni(e, i) || (i === "opacity" ? 1 : 0)),
        o && !~(c + "").trim().indexOf(" ") ? Or(e, i, c, o) + o : c
    }, ao = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, Wi = {
        clearProps: function(e, i, o, l, c) {
            if (c.data !== "isFromStart") {
                var h = e._pt = new Nt(e._pt,i,o,0,0,Ni);
                return h.u = l,
                h.pr = -10,
                h.tween = c,
                e._props.push(o),
                1
            }
        }
    }, ji = [1, 0, 0, 1, 0, 0], so = {}, Fi = function(e, i) {
        var o = e._techDrag || new Qr(e);
        if ("x"in o && !i && !o.uncache)
            return o;
        var l, c, h, p, _, b, A, L, C, I, $, Z, ct, J, G, U, X, et, B, Q, ut, Yt, Ht, Wt, te, ke, ee, Rt, Ne, pn, cr, Kn, Ii = e.style, vo = o.scaleX < 0, qi = "deg", wr = getComputedStyle(e), Ui = sr(e, Qn) || "0";
        return l = c = h = b = A = L = C = I = $ = 0,
        p = _ = 1,
        o.svg = !(!e.getCTM || !Di(e)),
        wr.translate && (wr.translate === "none" && wr.scale === "none" && wr.rotate === "none" || (Ii[Ge] = (wr.translate !== "none" ? "translate3d(" + (wr.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (wr.rotate !== "none" ? "rotate(" + wr.rotate + ") " : "") + (wr.scale !== "none" ? "scale(" + wr.scale.split(" ").join(",") + ") " : "") + (wr[Ge] !== "none" ? wr[Ge] : "")),
        Ii.scale = Ii.rotate = Ii.translate = "none"),
        J = li(e, o.svg),
        o.svg && (Wt = o.uncache ? (te = e.getBBox(),
        Ui = o.xOrigin - te.x + "px " + (o.yOrigin - te.y) + "px",
        "") : !i && e.getAttribute("data-svg-origin"),
        yi(e, Wt || Ui, !!Wt || o.originIsAbsolute, o.smooth !== !1, J)),
        Z = o.xOrigin || 0,
        ct = o.yOrigin || 0,
        J !== ji && (et = J[0],
        B = J[1],
        Q = J[2],
        ut = J[3],
        l = Yt = J[4],
        c = Ht = J[5],
        J.length === 6 ? (p = Math.sqrt(et * et + B * B),
        _ = Math.sqrt(ut * ut + Q * Q),
        b = et || B ? Ai(B, et) * _i : 0,
        (C = Q || ut ? Ai(Q, ut) * _i + b : 0) && (_ *= Math.abs(Math.cos(C * Si))),
        o.svg && (l -= Z - (Z * et + ct * Q),
        c -= ct - (Z * B + ct * ut))) : (Kn = J[6],
        pn = J[7],
        ee = J[8],
        Rt = J[9],
        Ne = J[10],
        cr = J[11],
        l = J[12],
        c = J[13],
        h = J[14],
        A = (G = Ai(Kn, Ne)) * _i,
        G && (Wt = Yt * (U = Math.cos(-G)) + ee * (X = Math.sin(-G)),
        te = Ht * U + Rt * X,
        ke = Kn * U + Ne * X,
        ee = Yt * -X + ee * U,
        Rt = Ht * -X + Rt * U,
        Ne = Kn * -X + Ne * U,
        cr = pn * -X + cr * U,
        Yt = Wt,
        Ht = te,
        Kn = ke),
        L = (G = Ai(-Q, Ne)) * _i,
        G && (U = Math.cos(-G),
        cr = ut * (X = Math.sin(-G)) + cr * U,
        et = Wt = et * U - ee * X,
        B = te = B * U - Rt * X,
        Q = ke = Q * U - Ne * X),
        b = (G = Ai(B, et)) * _i,
        G && (Wt = et * (U = Math.cos(G)) + B * (X = Math.sin(G)),
        te = Yt * U + Ht * X,
        B = B * U - et * X,
        Ht = Ht * U - Yt * X,
        et = Wt,
        Yt = te),
        A && 359.9 < Math.abs(A) + Math.abs(b) && (A = b = 0,
        L = 180 - L),
        p = Ee(Math.sqrt(et * et + B * B + Q * Q)),
        _ = Ee(Math.sqrt(Ht * Ht + Kn * Kn)),
        G = Ai(Yt, Ht),
        C = 2e-4 < Math.abs(G) ? G * _i : 0,
        $ = cr ? 1 / (cr < 0 ? -cr : cr) : 0),
        o.svg && (Wt = e.getAttribute("transform"),
        o.forceCSS = e.setAttribute("transform", "") || !Li(sr(e, Ge)),
        Wt && e.setAttribute("transform", Wt))),
        90 < Math.abs(C) && Math.abs(C) < 270 && (vo ? (p *= -1,
        C += b <= 0 ? 180 : -180,
        b += b <= 0 ? 180 : -180) : (_ *= -1,
        C += C <= 0 ? 180 : -180)),
        i = i || o.uncache,
        o.x = l - ((o.xPercent = l && (!i && o.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-l) ? -50 : 0))) ? e.offsetWidth * o.xPercent / 100 : 0) + "px",
        o.y = c - ((o.yPercent = c && (!i && o.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetHeight * o.yPercent / 100 : 0) + "px",
        o.z = h + "px",
        o.scaleX = Ee(p),
        o.scaleY = Ee(_),
        o.rotation = Ee(b) + qi,
        o.rotationX = Ee(A) + qi,
        o.rotationY = Ee(L) + qi,
        o.skewX = C + qi,
        o.skewY = I + qi,
        o.transformPerspective = $ + "px",
        (o.zOrigin = parseFloat(Ui.split(" ")[2]) || !i && o.zOrigin || 0) && (Ii[Qn] = $i(Ui)),
        o.xOffset = o.yOffset = 0,
        o.force3D = He.force3D,
        o.renderTransform = o.svg ? go : lt ? uo : po,
        o.uncache = 0,
        o
    }, $i = function(e) {
        return (e = e.split(" "))[0] + " " + e[1]
    }, po = function(e, i) {
        i.z = "0px",
        i.rotationY = i.rotationX = "0deg",
        i.force3D = 0,
        uo(e, i)
    }, xi = "0deg", Bi = "0px", wi = ") ", uo = function(e, i) {
        var o = i || this
          , l = o.xPercent
          , c = o.yPercent
          , h = o.x
          , p = o.y
          , _ = o.z
          , b = o.rotation
          , A = o.rotationY
          , L = o.rotationX
          , C = o.skewX
          , I = o.skewY
          , $ = o.scaleX
          , Z = o.scaleY
          , ct = o.transformPerspective
          , J = o.force3D
          , G = o.target
          , U = o.zOrigin
          , X = ""
          , et = J === "auto" && e && e !== 1 || J === !0;
        if (U && (L !== xi || A !== xi)) {
            var B, Q = parseFloat(A) * Si, ut = Math.sin(Q), Yt = Math.cos(Q);
            Q = parseFloat(L) * Si,
            B = Math.cos(Q),
            h = ci(G, h, ut * B * -U),
            p = ci(G, p, -Math.sin(Q) * -U),
            _ = ci(G, _, Yt * B * -U + U)
        }
        ct !== Bi && (X += "perspective(" + ct + wi),
        (l || c) && (X += "translate(" + l + "%, " + c + "%) "),
        !et && h === Bi && p === Bi && _ === Bi || (X += _ !== Bi || et ? "translate3d(" + h + ", " + p + ", " + _ + ") " : "translate(" + h + ", " + p + wi),
        b !== xi && (X += "rotate(" + b + wi),
        A !== xi && (X += "rotateY(" + A + wi),
        L !== xi && (X += "rotateX(" + L + wi),
        C === xi && I === xi || (X += "skew(" + C + ", " + I + wi),
        $ === 1 && Z === 1 || (X += "scale(" + $ + ", " + Z + wi),
        G.style[Ge] = X || "translate(0, 0)"
    }, go = function(e, i) {
        var o, l, c, h, p, _ = i || this, b = _.xPercent, A = _.yPercent, L = _.x, C = _.y, I = _.rotation, $ = _.skewX, Z = _.skewY, ct = _.scaleX, J = _.scaleY, G = _.target, U = _.xOrigin, X = _.yOrigin, et = _.xOffset, B = _.yOffset, Q = _.forceCSS, ut = parseFloat(L), Yt = parseFloat(C);
        I = parseFloat(I),
        $ = parseFloat($),
        (Z = parseFloat(Z)) && ($ += Z = parseFloat(Z),
        I += Z),
        I || $ ? (I *= Si,
        $ *= Si,
        o = Math.cos(I) * ct,
        l = Math.sin(I) * ct,
        c = Math.sin(I - $) * -J,
        h = Math.cos(I - $) * J,
        $ && (Z *= Si,
        p = Math.tan($ - Z),
        c *= p = Math.sqrt(1 + p * p),
        h *= p,
        Z && (p = Math.tan(Z),
        o *= p = Math.sqrt(1 + p * p),
        l *= p)),
        o = Ee(o),
        l = Ee(l),
        c = Ee(c),
        h = Ee(h)) : (o = ct,
        h = J,
        l = c = 0),
        (ut && !~(L + "").indexOf("px") || Yt && !~(C + "").indexOf("px")) && (ut = Or(G, "x", L, "px"),
        Yt = Or(G, "y", C, "px")),
        (U || X || et || B) && (ut = Ee(ut + U - (U * o + X * c) + et),
        Yt = Ee(Yt + X - (U * l + X * h) + B)),
        (b || A) && (p = G.getBBox(),
        ut = Ee(ut + b / 100 * p.width),
        Yt = Ee(Yt + A / 100 * p.height)),
        p = "matrix(" + o + "," + l + "," + c + "," + h + "," + ut + "," + Yt + ")",
        G.setAttribute("transform", p),
        Q && (G.style[Ge] = p)
    };
    Be("padding,margin,Width,Radius", function(r, e) {
        var i = "Right"
          , o = "Bottom"
          , l = "Left"
          , c = (e < 3 ? ["Top", i, o, l] : ["Top" + l, "Top" + i, o + i, o + l]).map(function(h) {
            return e < 2 ? r + h : "border" + h + r
        });
        Wi[1 < e ? "border" + r : r] = function(h, p, _, b, A) {
            var L, C;
            if (arguments.length < 4)
                return L = c.map(function(I) {
                    return ei(h, I, _)
                }),
                (C = L.join(" ")).split(L[0]).length === 5 ? L[0] : C;
            L = (b + "").split(" "),
            C = {},
            c.forEach(function(I, $) {
                return C[I] = L[$] = L[$] || L[($ - 1) / 2 | 0]
            }),
            h.init(p, C, A)
        }
    });
    var lo, to, eo, no = {
        name: "css",
        register: le,
        targetTest: function(e) {
            return e.style && e.nodeType
        },
        init: function(e, i, o, l, c) {
            var h, p, _, b, A, L, C, I, $, Z, ct, J, G, U, X, et, B = this._props, Q = e.style, ut = o.vars.startAt;
            for (C in O || le(),
            this.styles = this.styles || Pi(e),
            et = this.styles.props,
            this.tween = o,
            i)
                if (C !== "autoRound" && (p = i[C],
                !de[C] || !n(C, i, o, l, e, c))) {
                    if (A = typeof p,
                    L = Wi[C],
                    A === "function" && (A = typeof (p = p.call(o, l, e, c))),
                    A === "string" && ~p.indexOf("random(") && (p = zn(p)),
                    L)
                        L(this, e, C, p, o) && (X = 1);
                    else if (C.substr(0, 2) === "--")
                        h = (getComputedStyle(e).getPropertyValue(C) + "").trim(),
                        p += "",
                        or.lastIndex = 0,
                        or.test(h) || (I = Ae(h),
                        $ = Ae(p)),
                        $ ? I !== $ && (h = Or(e, C, h, $) + $) : I && (p += I),
                        this.add(Q, "setProperty", h, p, l, c, 0, 0, C),
                        B.push(C),
                        et.push(C, 0, Q[C]);
                    else if (A !== "undefined") {
                        if (ut && C in ut ? (h = typeof ut[C] == "function" ? ut[C].call(o, l, e, c) : ut[C],
                        Tt(h) && ~h.indexOf("random(") && (h = zn(h)),
                        Ae(h + "") || h === "auto" || (h += He.units[C] || Ae(ei(e, C)) || ""),
                        (h + "").charAt(1) === "=" && (h = ei(e, C))) : h = ei(e, C),
                        b = parseFloat(h),
                        (Z = A === "string" && p.charAt(1) === "=" && p.substr(0, 2)) && (p = p.substr(2)),
                        _ = parseFloat(p),
                        C in Ir && (C === "autoAlpha" && (b === 1 && ei(e, "visibility") === "hidden" && _ && (b = 0),
                        et.push("visibility", 0, Q.visibility),
                        Br(this, Q, "visibility", b ? "inherit" : "hidden", _ ? "inherit" : "hidden", !_)),
                        C !== "scale" && C !== "transform" && ~(C = Ir[C]).indexOf(",") && (C = C.split(",")[0])),
                        ct = C in ti)
                            if (this.styles.save(C),
                            J || ((G = e._techDrag).renderTransform && !i.parseTransform || Fi(e, i.parseTransform),
                            U = i.smoothOrigin !== !1 && G.smooth,
                            (J = this._pt = new Nt(this._pt,Q,Ge,0,1,G.renderTransform,G,0,-1)).dep = 1),
                            C === "scale")
                                this._pt = new Nt(this._pt,G,"scaleY",G.scaleY,(Z ? hr(G.scaleY, Z + _) : _) - G.scaleY || 0,an),
                                this._pt.u = 0,
                                B.push("scaleY", C),
                                C += "X";
                            else {
                                if (C === "transformOrigin") {
                                    et.push(Qn, 0, Q[Qn]),
                                    p = Zr(p),
                                    G.svg ? yi(e, p, 0, U, 0, this) : (($ = parseFloat(p.split(" ")[2]) || 0) !== G.zOrigin && Br(this, G, "zOrigin", G.zOrigin, $),
                                    Br(this, Q, C, $i(h), $i(p)));
                                    continue
                                }
                                if (C === "svgOrigin") {
                                    yi(e, p, 1, U, 0, this);
                                    continue
                                }
                                if (C in so) {
                                    Ri(this, G, C, b, Z ? hr(b, Z + p) : p);
                                    continue
                                }
                                if (C === "smoothOrigin") {
                                    Br(this, G, "smooth", G.smooth, p);
                                    continue
                                }
                                if (C === "force3D") {
                                    G[C] = p;
                                    continue
                                }
                                if (C === "transform") {
                                    v(this, p, e);
                                    continue
                                }
                            }
                        else
                            C in Q || (C = Mi(C) || C);
                        if (ct || (_ || _ === 0) && (b || b === 0) && !fo.test(p) && C in Q)
                            _ = _ || 0,
                            (I = (h + "").substr((b + "").length)) !== ($ = Ae(p) || (C in He.units ? He.units[C] : I)) && (b = Or(e, C, h, $)),
                            this._pt = new Nt(this._pt,ct ? G : Q,C,b,(Z ? hr(b, Z + _) : _) - b,ct || $ !== "px" && C !== "zIndex" || i.autoRound === !1 ? an : Kr),
                            this._pt.u = $ || 0,
                            I !== $ && $ !== "%" && (this._pt.b = h,
                            this._pt.r = Sn);
                        else if (C in Q)
                            Xi.call(this, e, C, h, Z ? Z + p : p);
                        else if (C in e)
                            this.add(e, C, h || e[C], Z ? Z + p : p, l, c);
                        else if (C !== "parseTransform") {
                            qr(C, p);
                            continue
                        }
                        ct || (C in Q ? et.push(C, 0, Q[C]) : typeof e[C] == "function" ? et.push(C, 2, e[C]()) : et.push(C, 1, h || e[C])),
                        B.push(C)
                    }
                }
            X && It(this)
        },
        render: function(e, i) {
            if (i.tween._time || !rt())
                for (var o = i._pt; o; )
                    o.r(e, o.d),
                    o = o._next;
            else
                i.styles.revert()
        },
        get: ei,
        aliases: Ir,
        getSetter: function(e, i, o) {
            var l = Ir[i];
            return l && l.indexOf(",") < 0 && (i = l),
            i in ti && i !== Qn && (e._techDrag.x || ei(e, "x")) ? o && K === o ? i === "scale" ? mi : Qi : (K = o || {}) && (i === "scale" ? Ki : Oi) : e.style && !Pr(e.style[i]) ? Vi : ~i.indexOf("-") ? Gi : ht(e, i)
        },
        core: {
            _removeProperty: Fr,
            _getMatrix: li
        }
    };
    zt.utils.checkPrefix = Mi,
    zt.core.getStyleSaver = Pi,
    eo = Be((lo = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (to = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(r) {
        ti[r] = 1
    }),
    Be(to, function(r) {
        He.units[r] = "deg",
        so[r] = 1
    }),
    Ir[eo[13]] = lo + "," + to,
    Be("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(r) {
        var e = r.split(":");
        Ir[e[1]] = eo[e[0]]
    }),
    Be("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(r) {
        He.units[r] = "px"
    }),
    zt.registerPlugin(no);
    var ro = zt.registerPlugin(no) || zt
      , mo = ro.core.Tween;
    nt.Back = Je,
    nt.Bounce = Ei,
    nt.CSSPlugin = no,
    nt.Circ = Ji,
    nt.Cubic = un,
    nt.Elastic = xn,
    nt.Expo = Yi,
    nt.Linear = Lt,
    nt.Power0 = Ot,
    nt.Power1 = St,
    nt.Power2 = Mt,
    nt.Power3 = Gt,
    nt.Power4 = Ve,
    nt.Quad = en,
    nt.Quart = An,
    nt.Quint = ve,
    nt.Sine = zi,
    nt.SteppedEase = lr,
    nt.Strong = xr,
    nt.TimelineLite = t,
    nt.TimelineMax = t,
    nt.TweenLite = S,
    nt.TweenMax = mo,
    nt.default = ro,
    nt.techDrag = ro,
    typeof window > "u" || window !== nt ? Object.defineProperty(nt, "__esModule", {
        value: !0
    }) : delete nt.default
});
function DraggableFn() {
    Draggable.create("#movable", {
        type: "xy",
        inertia: !1,
        bounds: "#dragHolder"
    })
}
function DraggableXFn() {
    Draggable.create("#movableX", {
        type: "x",
        inertia: !1,
        bounds: "#box_star"
    })
}
