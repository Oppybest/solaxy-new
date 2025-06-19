import {l as Q} from "./chunk-JOVT4LBN.js";
var I = globalThis
  , R = I.trustedTypes
  , X = R ? R.createPolicy("lit-html", {
    createHTML: o => o
}) : void 0
  , V = "$lit$"
  , $ = `lit$${Math.random().toFixed(9).slice(2)}$`
  , W = "?" + $
  , _t = `<${W}>`
  , g = document
  , w = () => g.createComment("")
  , x = o => o === null || typeof o != "object" && typeof o != "function"
  , q = Array.isArray
  , ot = o => q(o) || typeof o?.[Symbol.iterator] == "function"
  , z = `[ 	
\f\r]`
  , C = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g
  , Y = /-->/g
  , tt = />/g
  , A = RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g")
  , et = /'/g
  , st = /"/g
  , rt = /^(?:script|style|textarea|title)$/i
  , K = o => (t, ...e) => ({
    _$litType$: o,
    strings: t,
    values: e
})
  , xt = K(1)
  , Pt = K(2)
  , Ut = K(3)
  , y = Symbol.for("lit-noChange")
  , c = Symbol.for("lit-nothing")
  , it = new WeakMap
  , m = g.createTreeWalker(g, 129);
function nt(o, t) {
    if (!q(o) || !o.hasOwnProperty("raw"))
        throw Error("invalid template strings array");
    return X !== void 0 ? X.createHTML(t) : t
}
var ht = (o, t) => {
    let e = o.length - 1, s = [], i, r = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = C;
    for (let p = 0; p < e; p++) {
        let h = o[p], l, d, a = -1, u = 0;
        for (; u < h.length && (n.lastIndex = u,
        d = n.exec(h),
        d !== null); )
            u = n.lastIndex,
            n === C ? d[1] === "!--" ? n = Y : d[1] !== void 0 ? n = tt : d[2] !== void 0 ? (rt.test(d[2]) && (i = RegExp("</" + d[2], "g")),
            n = A) : d[3] !== void 0 && (n = A) : n === A ? d[0] === ">" ? (n = i ?? C,
            a = -1) : d[1] === void 0 ? a = -2 : (a = n.lastIndex - d[2].length,
            l = d[1],
            n = d[3] === void 0 ? A : d[3] === '"' ? st : et) : n === st || n === et ? n = A : n === Y || n === tt ? n = C : (n = A,
            i = void 0);
        let f = n === A && o[p + 1].startsWith("/>") ? " " : "";
        r += n === C ? h + _t : a >= 0 ? (s.push(l),
        h.slice(0, a) + V + h.slice(a) + $ + f) : h + $ + (a === -2 ? p : f)
    }
    return [nt(o, r + (o[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s]
}
  , P = class o {
    constructor({strings: t, _$litType$: e}, s) {
        let i;
        this.parts = [];
        let r = 0
          , n = 0
          , p = t.length - 1
          , h = this.parts
          , [l,d] = ht(t, e);
        if (this.el = o.createElement(l, s),
        m.currentNode = this.el.content,
        e === 2 || e === 3) {
            let a = this.el.content.firstChild;
            a.replaceWith(...a.childNodes)
        }
        for (; (i = m.nextNode()) !== null && h.length < p; ) {
            if (i.nodeType === 1) {
                if (i.hasAttributes())
                    for (let a of i.getAttributeNames())
                        if (a.endsWith(V)) {
                            let u = d[n++]
                              , f = i.getAttribute(a).split($)
                              , H = /([.?@])?(.*)/.exec(u);
                            h.push({
                                type: 1,
                                index: r,
                                name: H[2],
                                strings: f,
                                ctor: H[1] === "." ? M : H[1] === "?" ? N : H[1] === "@" ? L : S
                            }),
                            i.removeAttribute(a)
                        } else
                            a.startsWith($) && (h.push({
                                type: 6,
                                index: r
                            }),
                            i.removeAttribute(a));
                if (rt.test(i.tagName)) {
                    let a = i.textContent.split($)
                      , u = a.length - 1;
                    if (u > 0) {
                        i.textContent = R ? R.emptyScript : "";
                        for (let f = 0; f < u; f++)
                            i.append(a[f], w()),
                            m.nextNode(),
                            h.push({
                                type: 2,
                                index: ++r
                            });
                        i.append(a[u], w())
                    }
                }
            } else if (i.nodeType === 8)
                if (i.data === W)
                    h.push({
                        type: 2,
                        index: r
                    });
                else {
                    let a = -1;
                    for (; (a = i.data.indexOf($, a + 1)) !== -1; )
                        h.push({
                            type: 7,
                            index: r
                        }),
                        a += $.length - 1
                }
            r++
        }
    }
    static createElement(t, e) {
        let s = g.createElement("template");
        return s.innerHTML = t,
        s
    }
}
;
function v(o, t, e=o, s) {
    if (t === y)
        return t;
    let i = s !== void 0 ? e._$Co?.[s] : e._$Cl
      , r = x(t) ? void 0 : t._$litDirective$;
    return i?.constructor !== r && (i?._$AO?.(!1),
    r === void 0 ? i = void 0 : (i = new r(o),
    i._$AT(o, e, s)),
    s !== void 0 ? (e._$Co ??= [])[s] = i : e._$Cl = i),
    i !== void 0 && (t = v(o, i._$AS(o, t.values), i, s)),
    t
}
var T = class {
    constructor(t, e) {
        this._$AV = [],
        this._$AN = void 0,
        this._$AD = t,
        this._$AM = e
    }
    get parentNode() {
        return this._$AM.parentNode
    }
    get _$AU() {
        return this._$AM._$AU
    }
    u(t) {
        let {el: {content: e}, parts: s} = this._$AD
          , i = (t?.creationScope ?? g).importNode(e, !0);
        m.currentNode = i;
        let r = m.nextNode()
          , n = 0
          , p = 0
          , h = s[0];
        for (; h !== void 0; ) {
            if (n === h.index) {
                let l;
                h.type === 2 ? l = new E(r,r.nextSibling,this,t) : h.type === 1 ? l = new h.ctor(r,h.name,h.strings,this,t) : h.type === 6 && (l = new k(r,this,t)),
                this._$AV.push(l),
                h = s[++p]
            }
            n !== h?.index && (r = m.nextNode(),
            n++)
        }
        return m.currentNode = g,
        i
    }
    p(t) {
        let e = 0;
        for (let s of this._$AV)
            s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e),
            e += s.strings.length - 2) : s._$AI(t[e])),
            e++
    }
}
  , E = class o {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv
    }
    constructor(t, e, s, i) {
        this.type = 2,
        this._$AH = c,
        this._$AN = void 0,
        this._$AA = t,
        this._$AB = e,
        this._$AM = s,
        this.options = i,
        this._$Cv = i?.isConnected ?? !0
    }
    get parentNode() {
        let t = this._$AA.parentNode
          , e = this._$AM;
        return e !== void 0 && t?.nodeType === 11 && (t = e.parentNode),
        t
    }
    get startNode() {
        return this._$AA
    }
    get endNode() {
        return this._$AB
    }
    _$AI(t, e=this) {
        t = v(this, t, e),
        x(t) ? t === c || t == null || t === "" ? (this._$AH !== c && this._$AR(),
        this._$AH = c) : t !== this._$AH && t !== y && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : ot(t) ? this.k(t) : this._(t)
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB)
    }
    T(t) {
        this._$AH !== t && (this._$AR(),
        this._$AH = this.O(t))
    }
    _(t) {
        this._$AH !== c && x(this._$AH) ? this._$AA.nextSibling.data = t : this.T(g.createTextNode(t)),
        this._$AH = t
    }
    $(t) {
        let {values: e, _$litType$: s} = t
          , i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = P.createElement(nt(s.h, s.h[0]), this.options)),
        s);
        if (this._$AH?._$AD === i)
            this._$AH.p(e);
        else {
            let r = new T(i,this)
              , n = r.u(this.options);
            r.p(e),
            this.T(n),
            this._$AH = r
        }
    }
    _$AC(t) {
        let e = it.get(t.strings);
        return e === void 0 && it.set(t.strings, e = new P(t)),
        e
    }
    k(t) {
        q(this._$AH) || (this._$AH = [],
        this._$AR());
        let e = this._$AH, s, i = 0;
        for (let r of t)
            i === e.length ? e.push(s = new o(this.O(w()),this.O(w()),this,this.options)) : s = e[i],
            s._$AI(r),
            i++;
        i < e.length && (this._$AR(s && s._$AB.nextSibling, i),
        e.length = i)
    }
    _$AR(t=this._$AA.nextSibling, e) {
        for (this._$AP?.(!1, !0, e); t && t !== this._$AB; ) {
            let s = t.nextSibling;
            t.remove(),
            t = s
        }
    }
    setConnected(t) {
        this._$AM === void 0 && (this._$Cv = t,
        this._$AP?.(t))
    }
}
  , S = class {
    get tagName() {
        return this.element.tagName
    }
    get _$AU() {
        return this._$AM._$AU
    }
    constructor(t, e, s, i, r) {
        this.type = 1,
        this._$AH = c,
        this._$AN = void 0,
        this.element = t,
        this.name = e,
        this._$AM = i,
        this.options = r,
        s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String),
        this.strings = s) : this._$AH = c
    }
    _$AI(t, e=this, s, i) {
        let r = this.strings
          , n = !1;
        if (r === void 0)
            t = v(this, t, e, 0),
            n = !x(t) || t !== this._$AH && t !== y,
            n && (this._$AH = t);
        else {
            let p = t, h, l;
            for (t = r[0],
            h = 0; h < r.length - 1; h++)
                l = v(this, p[s + h], e, h),
                l === y && (l = this._$AH[h]),
                n ||= !x(l) || l !== this._$AH[h],
                l === c ? t = c : t !== c && (t += (l ?? "") + r[h + 1]),
                this._$AH[h] = l
        }
        n && !i && this.j(t)
    }
    j(t) {
        t === c ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "")
    }
}
  , M = class extends S {
    constructor() {
        super(...arguments),
        this.type = 3
    }
    j(t) {
        this.element[this.name] = t === c ? void 0 : t
    }
}
  , N = class extends S {
    constructor() {
        super(...arguments),
        this.type = 4
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== c)
    }
}
  , L = class extends S {
    constructor(t, e, s, i, r) {
        super(t, e, s, i, r),
        this.type = 5
    }
    _$AI(t, e=this) {
        if ((t = v(this, t, e, 0) ?? c) === y)
            return;
        let s = this._$AH
          , i = t === c && s !== c || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive
          , r = t !== c && (s === c || i);
        i && this.element.removeEventListener(this.name, this, s),
        r && this.element.addEventListener(this.name, this, t),
        this._$AH = t
    }
    handleEvent(t) {
        typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t)
    }
}
  , k = class {
    constructor(t, e, s) {
        this.element = t,
        this.type = 6,
        this._$AN = void 0,
        this._$AM = e,
        this.options = s
    }
    get _$AU() {
        return this._$AM._$AU
    }
    _$AI(t) {
        v(this, t)
    }
}
  , Ot = {
    M: V,
    P: $,
    A: W,
    C: 1,
    L: ht,
    R: T,
    D: ot,
    V: v,
    I: E,
    H: S,
    N,
    U: L,
    B: M,
    F: k
}
  , ft = I.litHtmlPolyfillSupport;
ft?.(P, E),
(I.litHtmlVersions ??= []).push("3.3.0");
var at = (o, t, e) => {
    let s = e?.renderBefore ?? t
      , i = s._$litPart$;
    if (i === void 0) {
        let r = e?.renderBefore ?? null;
        s._$litPart$ = i = new E(t.insertBefore(w(), r),r,void 0,e ?? {})
    }
    return i._$AI(o),
    i
}
;
var D = globalThis
  , j = D.ShadowRoot && (D.ShadyCSS === void 0 || D.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
  , Z = Symbol()
  , lt = new WeakMap
  , U = class {
    constructor(t, e, s) {
        if (this._$cssResult$ = !0,
        s !== Z)
            throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t,
        this.t = e
    }
    get styleSheet() {
        let t = this.o
          , e = this.t;
        if (j && t === void 0) {
            let s = e !== void 0 && e.length === 1;
            s && (t = lt.get(e)),
            t === void 0 && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText),
            s && lt.set(e, t))
        }
        return t
    }
    toString() {
        return this.cssText
    }
}
  , ct = o => new U(typeof o == "string" ? o : o + "",void 0,Z)
  , At = (o, ...t) => {
    let e = o.length === 1 ? o[0] : t.reduce( (s, i, r) => s + (n => {
        if (n._$cssResult$ === !0)
            return n.cssText;
        if (typeof n == "number")
            return n;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
    }
    )(i) + o[r + 1], o[0]);
    return new U(e,o,Z)
}
  , pt = (o, t) => {
    if (j)
        o.adoptedStyleSheets = t.map(e => e instanceof CSSStyleSheet ? e : e.styleSheet);
    else
        for (let e of t) {
            let s = document.createElement("style")
              , i = D.litNonce;
            i !== void 0 && s.setAttribute("nonce", i),
            s.textContent = e.cssText,
            o.appendChild(s)
        }
}
  , F = j ? o => o : o => o instanceof CSSStyleSheet ? (t => {
    let e = "";
    for (let s of t.cssRules)
        e += s.cssText;
    return ct(e)
}
)(o) : o;
var {is: mt, defineProperty: gt, getOwnPropertyDescriptor: yt, getOwnPropertyNames: vt, getOwnPropertySymbols: St, getPrototypeOf: Et} = Object
  , B = globalThis
  , dt = B.trustedTypes
  , bt = dt ? dt.emptyScript : ""
  , Ct = B.reactiveElementPolyfillSupport
  , O = (o, t) => o
  , J = {
    toAttribute(o, t) {
        switch (t) {
        case Boolean:
            o = o ? bt : null;
            break;
        case Object:
        case Array:
            o = o == null ? o : JSON.stringify(o)
        }
        return o
    },
    fromAttribute(o, t) {
        let e = o;
        switch (t) {
        case Boolean:
            e = o !== null;
            break;
        case Number:
            e = o === null ? null : Number(o);
            break;
        case Object:
        case Array:
            try {
                e = JSON.parse(o)
            } catch {
                e = null
            }
        }
        return e
    }
}
  , $t = (o, t) => !mt(o, t)
  , ut = {
    attribute: !0,
    type: String,
    converter: J,
    reflect: !1,
    useDefault: !1,
    hasChanged: $t
};
Symbol.metadata ??= Symbol("metadata"),
B.litPropertyMetadata ??= new WeakMap;
var _ = class extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(),
        (this.l ??= []).push(t)
    }
    static get observedAttributes() {
        return this.finalize(),
        this._$Eh && [...this._$Eh.keys()]
    }
    static createProperty(t, e=ut) {
        if (e.state && (e.attribute = !1),
        this._$Ei(),
        this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0),
        this.elementProperties.set(t, e),
        !e.noAccessor) {
            let s = Symbol()
              , i = this.getPropertyDescriptor(t, s, e);
            i !== void 0 && gt(this.prototype, t, i)
        }
    }
    static getPropertyDescriptor(t, e, s) {
        let {get: i, set: r} = yt(this.prototype, t) ?? {
            get() {
                return this[e]
            },
            set(n) {
                this[e] = n
            }
        };
        return {
            get: i,
            set(n) {
                let p = i?.call(this);
                r?.call(this, n),
                this.requestUpdate(t, p, s)
            },
            configurable: !0,
            enumerable: !0
        }
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? ut
    }
    static _$Ei() {
        if (this.hasOwnProperty(O("elementProperties")))
            return;
        let t = Et(this);
        t.finalize(),
        t.l !== void 0 && (this.l = [...t.l]),
        this.elementProperties = new Map(t.elementProperties)
    }
    static finalize() {
        if (this.hasOwnProperty(O("finalized")))
            return;
        if (this.finalized = !0,
        this._$Ei(),
        this.hasOwnProperty(O("properties"))) {
            let e = this.properties
              , s = [...vt(e), ...St(e)];
            for (let i of s)
                this.createProperty(i, e[i])
        }
        let t = this[Symbol.metadata];
        if (t !== null) {
            let e = litPropertyMetadata.get(t);
            if (e !== void 0)
                for (let[s,i] of e)
                    this.elementProperties.set(s, i)
        }
        this._$Eh = new Map;
        for (let[e,s] of this.elementProperties) {
            let i = this._$Eu(e, s);
            i !== void 0 && this._$Eh.set(i, e)
        }
        this.elementStyles = this.finalizeStyles(this.styles)
    }
    static finalizeStyles(t) {
        let e = [];
        if (Array.isArray(t)) {
            let s = new Set(t.flat(1 / 0).reverse());
            for (let i of s)
                e.unshift(F(i))
        } else
            t !== void 0 && e.push(F(t));
        return e
    }
    static _$Eu(t, e) {
        let s = e.attribute;
        return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0
    }
    constructor() {
        super(),
        this._$Ep = void 0,
        this.isUpdatePending = !1,
        this.hasUpdated = !1,
        this._$Em = null,
        this._$Ev()
    }
    _$Ev() {
        this._$ES = new Promise(t => this.enableUpdating = t),
        this._$AL = new Map,
        this._$E_(),
        this.requestUpdate(),
        this.constructor.l?.forEach(t => t(this))
    }
    addController(t) {
        (this._$EO ??= new Set).add(t),
        this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.()
    }
    removeController(t) {
        this._$EO?.delete(t)
    }
    _$E_() {
        let t = new Map
          , e = this.constructor.elementProperties;
        for (let s of e.keys())
            this.hasOwnProperty(s) && (t.set(s, this[s]),
            delete this[s]);
        t.size > 0 && (this._$Ep = t)
    }
    createRenderRoot() {
        let t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return pt(t, this.constructor.elementStyles),
        t
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(),
        this.enableUpdating(!0),
        this._$EO?.forEach(t => t.hostConnected?.())
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach(t => t.hostDisconnected?.())
    }
    attributeChangedCallback(t, e, s) {
        this._$AK(t, s)
    }
    _$ET(t, e) {
        let s = this.constructor.elementProperties.get(t)
          , i = this.constructor._$Eu(t, s);
        if (i !== void 0 && s.reflect === !0) {
            let r = (s.converter?.toAttribute !== void 0 ? s.converter : J).toAttribute(e, s.type);
            this._$Em = t,
            r == null ? this.removeAttribute(i) : this.setAttribute(i, r),
            this._$Em = null
        }
    }
    _$AK(t, e) {
        let s = this.constructor
          , i = s._$Eh.get(t);
        if (i !== void 0 && this._$Em !== i) {
            let r = s.getPropertyOptions(i)
              , n = typeof r.converter == "function" ? {
                fromAttribute: r.converter
            } : r.converter?.fromAttribute !== void 0 ? r.converter : J;
            this._$Em = i,
            this[i] = n.fromAttribute(e, r.type) ?? this._$Ej?.get(i) ?? null,
            this._$Em = null
        }
    }
    requestUpdate(t, e, s) {
        if (t !== void 0) {
            let i = this.constructor
              , r = this[t];
            if (s ??= i.getPropertyOptions(t),
            !((s.hasChanged ?? $t)(r, e) || s.useDefault && s.reflect && r === this._$Ej?.get(t) && !this.hasAttribute(i._$Eu(t, s))))
                return;
            this.C(t, e, s)
        }
        this.isUpdatePending === !1 && (this._$ES = this._$EP())
    }
    C(t, e, {useDefault: s, reflect: i, wrapped: r}, n) {
        s && !(this._$Ej ??= new Map).has(t) && (this._$Ej.set(t, n ?? e ?? this[t]),
        r !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (e = void 0),
        this._$AL.set(t, e)),
        i === !0 && this._$Em !== t && (this._$Eq ??= new Set).add(t))
    }
    _$EP() {
        return Q(this, null, function*() {
            this.isUpdatePending = !0;
            try {
                yield this._$ES
            } catch (e) {
                Promise.reject(e)
            }
            let t = this.scheduleUpdate();
            return t != null && (yield t),
            !this.isUpdatePending
        })
    }
    scheduleUpdate() {
        return this.performUpdate()
    }
    performUpdate() {
        if (!this.isUpdatePending)
            return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(),
            this._$Ep) {
                for (let[i,r] of this._$Ep)
                    this[i] = r;
                this._$Ep = void 0
            }
            let s = this.constructor.elementProperties;
            if (s.size > 0)
                for (let[i,r] of s) {
                    let {wrapped: n} = r
                      , p = this[i];
                    n !== !0 || this._$AL.has(i) || p === void 0 || this.C(i, void 0, r, p)
                }
        }
        let t = !1
          , e = this._$AL;
        try {
            t = this.shouldUpdate(e),
            t ? (this.willUpdate(e),
            this._$EO?.forEach(s => s.hostUpdate?.()),
            this.update(e)) : this._$EM()
        } catch (s) {
            throw t = !1,
            this._$EM(),
            s
        }
        t && this._$AE(e)
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach(e => e.hostUpdated?.()),
        this.hasUpdated || (this.hasUpdated = !0,
        this.firstUpdated(t)),
        this.updated(t)
    }
    _$EM() {
        this._$AL = new Map,
        this.isUpdatePending = !1
    }
    get updateComplete() {
        return this.getUpdateComplete()
    }
    getUpdateComplete() {
        return this._$ES
    }
    shouldUpdate(t) {
        return !0
    }
    update(t) {
        this._$Eq &&= this._$Eq.forEach(e => this._$ET(e, this[e])),
        this._$EM()
    }
    updated(t) {}
    firstUpdated(t) {}
}
;
_.elementStyles = [],
_.shadowRootOptions = {
    mode: "open"
},
_[O("elementProperties")] = new Map,
_[O("finalized")] = new Map,
Ct?.({
    ReactiveElement: _
}),
(B.reactiveElementVersions ??= []).push("2.1.0");
var G = globalThis
  , b = class extends _ {
    constructor() {
        super(...arguments),
        this.renderOptions = {
            host: this
        },
        this._$Do = void 0
    }
    createRenderRoot() {
        let t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild,
        t
    }
    update(t) {
        let e = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
        super.update(t),
        this._$Do = at(e, this.renderRoot, this.renderOptions)
    }
    connectedCallback() {
        super.connectedCallback(),
        this._$Do?.setConnected(!0)
    }
    disconnectedCallback() {
        super.disconnectedCallback(),
        this._$Do?.setConnected(!1)
    }
    render() {
        return y
    }
}
;
b._$litElement$ = !0,
b.finalized = !0,
G.litElementHydrateSupport?.({
    LitElement: b
});
var wt = G.litElementPolyfillSupport;
wt?.({
    LitElement: b
});
(G.litElementVersions ??= []).push("4.2.0");
export {ct as a, At as b, J as c, $t as d, xt as e, Pt as f, y as g, c as h, Ot as i, b as j};
