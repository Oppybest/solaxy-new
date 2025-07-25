import {$ as ie, A as nr, B as Y, C as ir, Ca as Le, D as sr, Da as $e, E as He, Ea as qe, Fa as Oe, H as O, Ha as ur, I as ar, K as Me, L as cr, M as mr, R as H, S as M, T as Q, U as ke, V as ee, W as re, X as te, Y as oe, Z as k, _ as ne, a as b, aa as se, b as K, ba as _, c as U, ca as V, da as J, e as Ze, ea as ae, f as A, fa as G, g as Z, ga as ce, h as z, ha as me, ia as pe, j as F, ja as ue, k as B, ka as fe, l as De, la as de, m as q, ma as le, n as Xe, na as xe, o as Ye, oa as he, p as X, pa as ye, qa as ge, r as Qe, ra as be, s as er, sa as Ge, t as P, u as Ne, w as rr, x as tr, y as or, z as ze} from "./chunk-MXRAEGHM.js";
import {a as pr, b as Or} from "./chunk-VQJZCEAB.js";
import {a as x, b as v, d as Je, l as g} from "./chunk-JOVT4LBN.js";
var Ee = class extends b {
    constructor({domain: r}) {
        super(`Invalid domain "${H(r)}".`, {
            metaMessages: ["Must be a valid EIP-712 domain."]
        })
    }
}
  , Ie = class extends b {
    constructor({primaryType: r, types: t}) {
        super(`Invalid primary type \`${r}\` must be one of \`${JSON.stringify(Object.keys(t))}\`.`, {
            docsPath: "/api/glossary/Errors#typeddatainvalidprimarytypeerror",
            metaMessages: ["Check that the primary type is a key in `types`."]
        })
    }
}
  , we = class extends b {
    constructor({type: r}) {
        super(`Struct type "${r}" is invalid.`, {
            metaMessages: ["Struct type must not be a Solidity type."],
            name: "InvalidStructTypeError"
        })
    }
}
;
function fr(e) {
    let {domain: r, message: t, primaryType: o, types: n} = e
      , i = (s, a) => {
        for (let m of s) {
            let {name: d, type: u} = m
              , l = a[d]
              , p = u.match(or);
            if (p && (typeof l == "number" || typeof l == "bigint")) {
                let[E,y,w] = p;
                De(l, {
                    signed: y === "int",
                    size: Number.parseInt(w) / 8
                })
            }
            if (u === "address" && typeof l == "string" && !rr(l))
                throw new Qe({
                    address: l
                });
            let f = u.match(tr);
            if (f) {
                let[E,y] = f;
                if (y && U(l) !== Number.parseInt(y))
                    throw new Ye({
                        expectedSize: Number.parseInt(y),
                        givenSize: U(l)
                    })
            }
            let c = n[u];
            c && (_r(u),
            i(c, l))
        }
    }
    ;
    if (n.EIP712Domain && r) {
        if (typeof r != "object")
            throw new Ee({
                domain: r
            });
        i(n.EIP712Domain, r)
    }
    if (o !== "EIP712Domain")
        if (n[o])
            i(n[o], t);
        else
            throw new Ie({
                primaryType: o,
                types: n
            })
}
function dr({domain: e}) {
    return [typeof e?.name == "string" && {
        name: "name",
        type: "string"
    }, e?.version && {
        name: "version",
        type: "string"
    }, (typeof e?.chainId == "number" || typeof e?.chainId == "bigint") && {
        name: "chainId",
        type: "uint256"
    }, e?.verifyingContract && {
        name: "verifyingContract",
        type: "address"
    }, e?.salt && {
        name: "salt",
        type: "bytes32"
    }].filter(Boolean)
}
function _r(e) {
    if (e === "address" || e === "bool" || e === "string" || e.startsWith("bytes") || e.startsWith("uint") || e.startsWith("int"))
        throw new we({
            type: e
        })
}
function Vr(e) {
    let {domain: r={}, message: t, primaryType: o} = e
      , n = x({
        EIP712Domain: dr({
            domain: r
        })
    }, e.types);
    fr({
        domain: r,
        message: t,
        primaryType: o,
        types: n
    });
    let i = ["0x1901"];
    return r && i.push(lr({
        domain: r,
        types: n
    })),
    o !== "EIP712Domain" && i.push(_e({
        data: t,
        primaryType: o,
        types: n
    })),
    P(X(i))
}
function lr({domain: e, types: r}) {
    return _e({
        data: e,
        primaryType: "EIP712Domain",
        types: r
    })
}
function _e({data: e, primaryType: r, types: t}) {
    let o = xr({
        data: e,
        primaryType: r,
        types: t
    });
    return P(o)
}
function xr({data: e, primaryType: r, types: t}) {
    let o = [{
        type: "bytes32"
    }]
      , n = [jr({
        primaryType: r,
        types: t
    })];
    for (let i of t[r]) {
        let[s,a] = yr({
            types: t,
            name: i.name,
            type: i.type,
            value: e[i.name]
        });
        o.push(s),
        n.push(a)
    }
    return ze(o, n)
}
function jr({primaryType: e, types: r}) {
    let t = F(Wr({
        primaryType: e,
        types: r
    }));
    return P(t)
}
function Wr({primaryType: e, types: r}) {
    let t = ""
      , o = hr({
        primaryType: e,
        types: r
    });
    o.delete(e);
    let n = [e, ...Array.from(o).sort()];
    for (let i of n)
        t += `${i}(${r[i].map( ({name: s, type: a}) => `${a} ${s}`).join(",")})`;
    return t
}
function hr({primaryType: e, types: r}, t=new Set) {
    let n = e.match(/^\w*/u)?.[0];
    if (t.has(n) || r[n] === void 0)
        return t;
    t.add(n);
    for (let i of r[n])
        hr({
            primaryType: i.type,
            types: r
        }, t);
    return t
}
function yr({types: e, name: r, type: t, value: o}) {
    if (e[t] !== void 0)
        return [{
            type: "bytes32"
        }, P(xr({
            data: o,
            primaryType: t,
            types: e
        }))];
    if (t === "bytes")
        return o = `0x${(o.length % 2 ? "0" : "") + o.slice(2)}`,
        [{
            type: "bytes32"
        }, P(o)];
    if (t === "string")
        return [{
            type: "bytes32"
        }, P(F(o))];
    if (t.lastIndexOf("]") === t.length - 1) {
        let n = t.slice(0, t.lastIndexOf("["))
          , i = o.map(s => yr({
            name: r,
            type: n,
            types: e,
            value: s
        }));
        return [{
            type: "bytes32"
        }, P(ze(i.map( ([s]) => s), i.map( ([,s]) => s)))]
    }
    return [{
        type: t
    }, o]
}
var gr = `Ethereum Signed Message:
`;
function br(e) {
    let r = typeof e == "string" ? q(e) : typeof e.raw == "string" ? e.raw : B(e.raw)
      , t = q(`${gr}${U(r)}`);
    return X([t, r])
}
function Kr(e, r) {
    return P(br(e), r)
}
var Jr = 3;
function Vt(e, {abi: r, address: t, args: o, docsPath: n, functionName: i, sender: s}) {
    let a = e instanceof Oe ? e : e instanceof b ? e.walk(c => "data"in c) || e.walk() : {}
      , {code: m, data: d, details: u, message: l, shortMessage: p} = a
      , f = e instanceof Xe ? new qe({
        functionName: i
    }) : [Jr, k.code].includes(m) && (d || u || l || p) ? new $e({
        abi: r,
        data: typeof d == "object" ? d.data : d,
        functionName: i,
        message: a instanceof Q ? u : p ?? l
    }) : e;
    return new Le(f,{
        abi: r,
        args: o,
        contractAddress: t,
        docsPath: n,
        functionName: i,
        sender: s
    })
}
function Er(e) {
    let r = P(`0x${e.substring(4)}`).substring(26);
    return Ne(`0x${r}`)
}
function wr(t) {
    return g(this, arguments, function*({hash: e, signature: r}) {
        let o = K(e) ? e : F(e)
          , {secp256k1: n} = yield import("./chunk-6USF6M46.js");
        return `0x${( () => {
            if (typeof r == "object" && "r"in r && "s"in r) {
                let {r: u, s: l, v: p, yParity: f} = r
                  , c = Number(f ?? p)
                  , E = Ir(c);
                return new n.Signature(Z(u),Z(l)).addRecoveryBit(E)
            }
            let a = K(r) ? r : F(r);
            if (U(a) !== 65)
                throw new Error("invalid signature length");
            let m = z(`0x${a.slice(130)}`)
              , d = Ir(m);
            return n.Signature.fromCompact(a.substring(2, 130)).addRecoveryBit(d)
        }
        )().recoverPublicKey(o.substring(2)).toHex(!1)}`
    })
}
function Ir(e) {
    if (e === 0 || e === 1)
        return e;
    if (e === 27)
        return 0;
    if (e === 28)
        return 1;
    throw new Error("Invalid yParityOrV value")
}
function no(t) {
    return g(this, arguments, function*({hash: e, signature: r}) {
        return Er(yield wr({
            hash: e,
            signature: r
        }))
    })
}
function uo(e, r="hex") {
    let t = Tr(e)
      , o = Y(new Uint8Array(t.length));
    return t.encode(o),
    r === "hex" ? B(o.bytes) : o.bytes
}
function Tr(e) {
    return Array.isArray(e) ? Zr(e.map(r => Tr(r))) : Xr(e)
}
function Zr(e) {
    let r = e.reduce( (n, i) => n + i.length, 0)
      , t = vr(r);
    return {
        length: r <= 55 ? 1 + r : 1 + t + r,
        encode(n) {
            r <= 55 ? n.pushByte(192 + r) : (n.pushByte(247 + t),
            t === 1 ? n.pushUint8(r) : t === 2 ? n.pushUint16(r) : t === 3 ? n.pushUint24(r) : n.pushUint32(r));
            for (let {encode: i} of e)
                i(n)
        }
    }
}
function Xr(e) {
    let r = typeof e == "string" ? A(e) : e
      , t = vr(r.length);
    return {
        length: r.length === 1 && r[0] < 128 ? 1 : r.length <= 55 ? 1 + r.length : 1 + t + r.length,
        encode(n) {
            r.length === 1 && r[0] < 128 ? n.pushBytes(r) : r.length <= 55 ? (n.pushByte(128 + r.length),
            n.pushBytes(r)) : (n.pushByte(183 + t),
            t === 1 ? n.pushUint8(r.length) : t === 2 ? n.pushUint16(r.length) : t === 3 ? n.pushUint24(r.length) : n.pushUint32(r.length),
            n.pushBytes(r))
        }
    }
}
function vr(e) {
    if (e < 2 ** 8)
        return 1;
    if (e < 2 ** 16)
        return 2;
    if (e < 2 ** 24)
        return 3;
    if (e < 2 ** 32)
        return 4;
    throw new b("Length is too large.")
}
var Br = class extends b {
    constructor(r, {account: t, docsPath: o, chain: n, data: i, gas: s, gasPrice: a, maxFeePerGas: m, maxPriorityFeePerGas: d, nonce: u, to: l, value: p}) {
        let f = cr({
            from: t?.address,
            to: l,
            value: typeof p < "u" && `${Me(p)} ${n?.nativeCurrency?.symbol || "ETH"}`,
            data: i,
            gas: s,
            gasPrice: typeof a < "u" && `${O(a)} gwei`,
            maxFeePerGas: typeof m < "u" && `${O(m)} gwei`,
            maxPriorityFeePerGas: typeof d < "u" && `${O(d)} gwei`,
            nonce: u
        });
        super(r.shortMessage, {
            cause: r,
            docsPath: o,
            metaMessages: [...r.metaMessages ? [...r.metaMessages, " "] : [], "Estimate Gas Arguments:", f].filter(Boolean),
            name: "EstimateGasExecutionError"
        }),
        Object.defineProperty(this, "cause", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0
        }),
        this.cause = r
    }
}
;
var Pr = class extends b {
    constructor() {
        super("`baseFeeMultiplier` must be greater than 1.", {
            name: "BaseFeeScalarError"
        })
    }
}
  , Cr = class extends b {
    constructor() {
        super("Chain does not support EIP-1559 fees.", {
            name: "Eip1559FeesNotSupportedError"
        })
    }
}
  , Sr = class extends b {
    constructor({maxPriorityFeePerGas: r}) {
        super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${O(r)} gwei).`, {
            name: "MaxFeePerGasTooLowError"
        })
    }
}
;
var Rr = class extends b {
    constructor({blockHash: r, blockNumber: t}) {
        let o = "Block";
        r && (o = `Block at hash "${r}"`),
        t && (o = `Block at number "${t}"`),
        super(`${o} could not be found.`, {
            name: "BlockNotFoundError"
        })
    }
}
;
var Ve = {
    "0x0": "legacy",
    "0x1": "eip2930",
    "0x2": "eip1559",
    "0x3": "eip4844",
    "0x4": "eip7702"
};
function Ur(e) {
    let r = v(x({}, e), {
        blockHash: e.blockHash ? e.blockHash : null,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        chainId: e.chainId ? z(e.chainId) : void 0,
        gas: e.gas ? BigInt(e.gas) : void 0,
        gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
        maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0,
        maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
        maxPriorityFeePerGas: e.maxPriorityFeePerGas ? BigInt(e.maxPriorityFeePerGas) : void 0,
        nonce: e.nonce ? z(e.nonce) : void 0,
        to: e.to ? e.to : null,
        transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
        type: e.type ? Ve[e.type] : void 0,
        typeHex: e.type ? e.type : void 0,
        value: e.value ? BigInt(e.value) : void 0,
        v: e.v ? BigInt(e.v) : void 0
    });
    return e.authorizationList && (r.authorizationList = Yr(e.authorizationList)),
    r.yParity = ( () => {
        if (e.yParity)
            return Number(e.yParity);
        if (typeof r.v == "bigint") {
            if (r.v === 0n || r.v === 27n)
                return 0;
            if (r.v === 1n || r.v === 28n)
                return 1;
            if (r.v >= 35n)
                return r.v % 2n === 0n ? 1 : 0
        }
    }
    )(),
    r.type === "legacy" && (delete r.accessList,
    delete r.maxFeePerBlobGas,
    delete r.maxFeePerGas,
    delete r.maxPriorityFeePerGas,
    delete r.yParity),
    r.type === "eip2930" && (delete r.maxFeePerBlobGas,
    delete r.maxFeePerGas,
    delete r.maxPriorityFeePerGas),
    r.type === "eip1559" && delete r.maxFeePerBlobGas,
    r
}
function Yr(e) {
    return e.map(r => ({
        address: r.address,
        chainId: Number(r.chainId),
        nonce: Number(r.nonce),
        r: r.r,
        s: r.s,
        yParity: Number(r.yParity)
    }))
}
function So(e) {
    let r = (e.transactions ?? []).map(t => typeof t == "string" ? t : Ur(t));
    return v(x({}, e), {
        baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
        blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
        difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
        excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
        gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
        hash: e.hash ? e.hash : null,
        logsBloom: e.logsBloom ? e.logsBloom : null,
        nonce: e.nonce ? e.nonce : null,
        number: e.number ? BigInt(e.number) : null,
        size: e.size ? BigInt(e.size) : void 0,
        timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
        transactions: r,
        totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null
    })
}
function Ar(e) {
    let {kzg: r} = e
      , t = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes")
      , o = typeof e.blobs[0] == "string" ? e.blobs.map(i => A(i)) : e.blobs
      , n = [];
    for (let i of o)
        n.push(Uint8Array.from(r.blobToKzgCommitment(i)));
    return t === "bytes" ? n : n.map(i => B(i))
}
function Fr(e) {
    let {kzg: r} = e
      , t = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes")
      , o = typeof e.blobs[0] == "string" ? e.blobs.map(s => A(s)) : e.blobs
      , n = typeof e.commitments[0] == "string" ? e.commitments.map(s => A(s)) : e.commitments
      , i = [];
    for (let s = 0; s < o.length; s++) {
        let a = o[s]
          , m = n[s];
        i.push(Uint8Array.from(r.computeBlobKzgProof(a, m)))
    }
    return t === "bytes" ? i : i.map(s => B(s))
}
Or();
function Dr(e, r) {
    let t = r || "hex"
      , o = pr(K(e, {
        strict: !1
    }) ? Ze(e) : e);
    return t === "bytes" ? o : F(o)
}
function Nr(e) {
    let {commitment: r, version: t=1} = e
      , o = e.to ?? (typeof r == "string" ? "hex" : "bytes")
      , n = Dr(r, "bytes");
    return n.set([t], 0),
    o === "bytes" ? n : B(n)
}
function jo(e) {
    let {commitments: r, version: t} = e
      , o = e.to ?? (typeof r[0] == "string" ? "hex" : "bytes")
      , n = [];
    for (let i of r)
        n.push(Nr({
            commitment: i,
            to: o,
            version: t
        }));
    return n
}
var Te = class extends b {
    constructor({maxSize: r, size: t}) {
        super("Blob size is too large.", {
            metaMessages: [`Max: ${r} bytes`, `Given: ${t} bytes`],
            name: "BlobSizeTooLargeError"
        })
    }
}
  , ve = class extends b {
    constructor() {
        super("Blob data must not be empty.", {
            name: "EmptyBlobError"
        })
    }
}
;
function zr(e) {
    let r = e.to ?? (typeof e.data == "string" ? "hex" : "bytes")
      , t = typeof e.data == "string" ? A(e.data) : e.data
      , o = U(t);
    if (!o)
        throw new ve;
    if (o > 761855)
        throw new Te({
            maxSize: 761855,
            size: o
        });
    let n = []
      , i = !0
      , s = 0;
    for (; i; ) {
        let a = Y(new Uint8Array(131072))
          , m = 0;
        for (; m < 4096; ) {
            let d = t.slice(s, s + 31);
            if (a.pushByte(0),
            a.pushBytes(d),
            d.length < 31) {
                a.pushByte(128),
                i = !1;
                break
            }
            m++,
            s += 31
        }
        n.push(a)
    }
    return r === "bytes" ? n.map(a => a.bytes) : n.map(a => B(a.bytes))
}
function mn(e) {
    let {data: r, kzg: t, to: o} = e
      , n = e.blobs ?? zr({
        data: r,
        to: o
    })
      , i = e.commitments ?? Ar({
        blobs: n,
        kzg: t,
        to: o
    })
      , s = e.proofs ?? Fr({
        blobs: n,
        commitments: i,
        kzg: t,
        to: o
    })
      , a = [];
    for (let m = 0; m < n.length; m++)
        a.push({
            blob: n[m],
            commitment: i[m],
            proof: s[m]
        });
    return a
}
function fn(e) {
    if (e.type)
        return e.type;
    if (typeof e.authorizationList < "u")
        return "eip7702";
    if (typeof e.blobs < "u" || typeof e.blobVersionedHashes < "u" || typeof e.maxFeePerBlobGas < "u" || typeof e.sidecars < "u")
        return "eip4844";
    if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u")
        return "eip1559";
    if (typeof e.gasPrice < "u")
        return typeof e.accessList < "u" ? "eip2930" : "legacy";
    throw new mr({
        transaction: e
    })
}
function Hr(e, {args: r, eventName: t}={}) {
    return x(v(x({}, e), {
        blockHash: e.blockHash ? e.blockHash : null,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        logIndex: e.logIndex ? Number(e.logIndex) : null,
        transactionHash: e.transactionHash ? e.transactionHash : null,
        transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null
    }), t ? {
        args: r,
        eventName: t
    } : {})
}
function Be(e) {
    return g(this, null, function*() {
        return new Promise(r => setTimeout(r, e))
    })
}
var et = new Map
  , rt = new Map;
function tt(e) {
    let r = (n, i) => ({
        clear: () => i.delete(n),
        get: () => i.get(n),
        set: s => i.set(n, s)
    })
      , t = r(e, et)
      , o = r(e, rt);
    return {
        clear: () => {
            t.clear(),
            o.clear()
        }
        ,
        promise: t,
        response: o
    }
}
function gn(o, n) {
    return g(this, arguments, function*(e, {cacheKey: r, cacheTime: t=Number.POSITIVE_INFINITY}) {
        let i = tt(r)
          , s = i.response.get();
        if (s && t > 0 && new Date().getTime() - s.created.getTime() < t)
            return s.data;
        let a = i.promise.get();
        a || (a = e(),
        i.promise.set(a));
        try {
            let m = yield a;
            return i.response.set({
                created: new Date,
                data: m
            }),
            m
        } finally {
            i.promise.clear()
        }
    })
}
function wn({chain: e, currentChainId: r}) {
    if (!e)
        throw new sr;
    if (r !== e.id)
        throw new ir({
            chain: e,
            currentChainId: r
        })
}
var ot = {
    "0x0": "reverted",
    "0x1": "success"
};
function Cn(e) {
    let r = v(x({}, e), {
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        contractAddress: e.contractAddress ? e.contractAddress : null,
        cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
        effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
        logs: e.logs ? e.logs.map(t => Hr(t)) : null,
        to: e.to ? e.to : null,
        transactionIndex: e.transactionIndex ? z(e.transactionIndex) : null,
        status: e.status ? ot[e.status] : null,
        type: e.type ? Ve[e.type] || e.type : null
    });
    return e.blobGasPrice && (r.blobGasPrice = BigInt(e.blobGasPrice)),
    e.blobGasUsed && (r.blobGasUsed = BigInt(e.blobGasUsed)),
    r
}
var Pe = 256, Ce;
function Se(e=11) {
    if (!Ce || Pe + e > 256 * 2) {
        Ce = "",
        Pe = 0;
        for (let r = 0; r < 256; r++)
            Ce += (256 + Math.random() * 256 | 0).toString(16).substring(1)
    }
    return Ce.substring(Pe, Pe++ + e)
}
function nt(e) {
    let {batch: r, chain: t, ccipRead: o, key: n="base", name: i="Base Client", type: s="base"} = e
      , a = t?.blockTime ?? 12e3
      , m = Math.min(Math.max(Math.floor(a / 2), 500), 4e3)
      , d = e.pollingInterval ?? m
      , u = e.cacheTime ?? d
      , l = e.account ? nr(e.account) : void 0
      , {config: p, request: f, value: c} = e.transport({
        chain: t,
        pollingInterval: d
    })
      , E = x(x({}, p), c)
      , y = {
        account: l,
        batch: r,
        cacheTime: u,
        ccipRead: o,
        chain: t,
        key: n,
        name: i,
        pollingInterval: d,
        request: f,
        transport: E,
        type: s,
        uid: Se()
    };
    function w(h) {
        return I => {
            let R = I(h);
            for (let T in y)
                delete R[T];
            let C = x(x({}, h), R);
            return Object.assign(C, {
                extend: w(C)
            })
        }
    }
    return Object.assign(y, {
        extend: w(y)
    })
}
var Re = new er(8192);
function Mr(e, {enabled: r=!0, id: t}) {
    if (!r || !t)
        return e();
    if (Re.get(t))
        return Re.get(t);
    let o = e().finally( () => Re.delete(t));
    return Re.set(t, o),
    o
}
function je(e, {delay: r=100, retryCount: t=2, shouldRetry: o= () => !0}={}) {
    return new Promise( (n, i) => {
        let s = (...m) => g(this, [...m], function*({count: a=0}={}) {
            let d = l => g(this, [l], function*({error: u}) {
                let p = typeof r == "function" ? r({
                    count: a,
                    error: u
                }) : r;
                p && (yield Be(p)),
                s({
                    count: a + 1
                })
            });
            try {
                let u = yield e();
                n(u)
            } catch (u) {
                if (a < t && (yield o({
                    count: a,
                    error: u
                })))
                    return d({
                        error: u
                    });
                i(u)
            }
        });
        s()
    }
    )
}
function kr(e, r={}) {
    return (n, ...i) => g(this, [n, ...i], function*(t, o={}) {
        let {dedupe: s=!1, methods: a, retryDelay: m=150, retryCount: d=3, uid: u} = x(x({}, r), o)
          , {method: l} = t;
        if (a?.exclude?.includes(l))
            throw new V(new Error("method not supported"),{
                method: l
            });
        if (a?.include && !a.include.includes(l))
            throw new V(new Error("method not supported"),{
                method: l
            });
        let p = s ? q(`${u}.${H(t)}`) : void 0;
        return Mr( () => je( () => g(this, null, function*() {
            try {
                return yield e(t)
            } catch (f) {
                let c = f;
                switch (c.code) {
                case ee.code:
                    throw new ee(c);
                case re.code:
                    throw new re(c);
                case te.code:
                    throw new te(c,{
                        method: t.method
                    });
                case oe.code:
                    throw new oe(c);
                case k.code:
                    throw new k(c);
                case ne.code:
                    throw new ne(c);
                case ie.code:
                    throw new ie(c);
                case se.code:
                    throw new se(c);
                case _.code:
                    throw new _(c);
                case V.code:
                    throw new V(c,{
                        method: t.method
                    });
                case J.code:
                    throw new J(c);
                case ae.code:
                    throw new ae(c);
                case G.code:
                    throw new G(c);
                case ce.code:
                    throw new ce(c);
                case me.code:
                    throw new me(c);
                case pe.code:
                    throw new pe(c);
                case ue.code:
                    throw new ue(c);
                case fe.code:
                    throw new fe(c);
                case de.code:
                    throw new de(c);
                case le.code:
                    throw new le(c);
                case xe.code:
                    throw new xe(c);
                case he.code:
                    throw new he(c);
                case ye.code:
                    throw new ye(c);
                case ge.code:
                    throw new ge(c);
                case be.code:
                    throw new be(c);
                case 5e3:
                    throw new G(c);
                default:
                    throw f instanceof b ? f : new Ge(c)
                }
            }
        }), {
            delay: ({count: f, error: c}) => {
                if (c && c instanceof M) {
                    let E = c?.headers?.get("Retry-After");
                    if (E?.match(/\d/))
                        return Number.parseInt(E) * 1e3
                }
                return ~~(1 << f) * m
            }
            ,
            retryCount: d,
            shouldRetry: ({error: f}) => it(f)
        }), {
            enabled: s,
            id: p
        })
    })
}
function it(e) {
    return "code"in e && typeof e.code == "number" ? e.code === -1 || e.code === J.code || e.code === k.code : e instanceof M && e.status ? e.status === 403 || e.status === 408 || e.status === 413 || e.status === 429 || e.status === 500 || e.status === 502 || e.status === 503 || e.status === 504 : !0
}
function j({key: e, methods: r, name: t, request: o, retryCount: n=3, retryDelay: i=150, timeout: s, type: a}, m) {
    let d = Se();
    return {
        config: {
            key: e,
            methods: r,
            name: t,
            request: o,
            retryCount: n,
            retryDelay: i,
            timeout: s,
            type: a
        },
        request: kr(o, {
            methods: r,
            retryCount: n,
            retryDelay: i,
            uid: d
        }),
        value: m
    }
}
function st(e, r={}) {
    let {key: t="custom", methods: o, name: n="Custom Provider", retryDelay: i} = r;
    return ({retryCount: s}) => j({
        key: t,
        methods: o,
        name: n,
        request: e.request.bind(e),
        retryCount: r.retryCount ?? s,
        retryDelay: i,
        type: "custom"
    })
}
function at(e, r={}) {
    let {key: t="fallback", name: o="Fallback", rank: n=!1, shouldThrow: i=Gr, retryCount: s, retryDelay: a} = r;
    return p => {
        var f = p
          , {chain: m, pollingInterval: d=4e3, timeout: u} = f
          , l = Je(f, ["chain", "pollingInterval", "timeout"]);
        let c = e
          , E = () => {}
          , y = j({
            key: t,
            name: o,
            request(R) {
                return g(this, arguments, function*({method: h, params: I}) {
                    let C, T = (D=0) => g(this, null, function*() {
                        let L = c[D](v(x({}, l), {
                            chain: m,
                            retryCount: 0,
                            timeout: u
                        }));
                        try {
                            let S = yield L.request({
                                method: h,
                                params: I
                            });
                            return E({
                                method: h,
                                params: I,
                                response: S,
                                transport: L,
                                status: "success"
                            }),
                            S
                        } catch (S) {
                            if (E({
                                error: S,
                                method: h,
                                params: I,
                                transport: L,
                                status: "error"
                            }),
                            i(S) || D === c.length - 1 || (C ??= c.slice(D + 1).some(Fe => {
                                let {include: $, exclude: W} = Fe({
                                    chain: m
                                }).config.methods || {};
                                return $ ? $.includes(h) : W ? !W.includes(h) : !0
                            }
                            ),
                            !C))
                                throw S;
                            return T(D + 1)
                        }
                    });
                    return T()
                })
            },
            retryCount: s,
            retryDelay: a,
            type: "fallback"
        }, {
            onResponse: h => E = h,
            transports: c.map(h => h({
                chain: m,
                retryCount: 0
            }))
        });
        if (n) {
            let h = typeof n == "object" ? n : {};
            ct({
                chain: m,
                interval: h.interval ?? d,
                onTransports: I => c = I,
                ping: h.ping,
                sampleCount: h.sampleCount,
                timeout: h.timeout,
                transports: c,
                weights: h.weights
            })
        }
        return y
    }
}
function Gr(e) {
    return !!("code"in e && typeof e.code == "number" && (e.code === _.code || e.code === G.code || ar.nodeMessage.test(e.message) || e.code === 5e3))
}
function ct({chain: e, interval: r=4e3, onTransports: t, ping: o, sampleCount: n=10, timeout: i=1e3, transports: s, weights: a={}}) {
    let {stability: m=.7, latency: d=.3} = a
      , u = []
      , l = () => g(this, null, function*() {
        let p = yield Promise.all(s.map(E => g(this, null, function*() {
            let y = E({
                chain: e,
                retryCount: 0,
                timeout: i
            }), w = Date.now(), h, I;
            try {
                yield o ? o({
                    transport: y
                }) : y.request({
                    method: "net_listening"
                }),
                I = 1
            } catch {
                I = 0
            } finally {
                h = Date.now()
            }
            return {
                latency: h - w,
                success: I
            }
        })));
        u.push(p),
        u.length > n && u.shift();
        let f = Math.max(...u.map(E => Math.max(...E.map( ({latency: y}) => y))))
          , c = s.map( (E, y) => {
            let w = u.map(T => T[y].latency)
              , I = 1 - w.reduce( (T, D) => T + D, 0) / w.length / f
              , R = u.map(T => T[y].success)
              , C = R.reduce( (T, D) => T + D, 0) / R.length;
            return C === 0 ? [0, y] : [d * I + m * C, y]
        }
        ).sort( (E, y) => y[0] - E[0]);
        t(c.map( ([,E]) => s[E])),
        yield Be(r),
        l()
    });
    l()
}
var Ue = class extends b {
    constructor() {
        super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
            docsPath: "/docs/clients/intro",
            name: "UrlRequiredError"
        })
    }
}
;
function We(e, {errorInstance: r=new Error("timed out"), timeout: t, signal: o}) {
    return new Promise( (n, i) => {
        g(this, null, function*() {
            let s;
            try {
                let a = new AbortController;
                t > 0 && (s = setTimeout( () => {
                    o ? a.abort() : i(r)
                }
                , t)),
                n(yield e({
                    signal: a?.signal || null
                }))
            } catch (a) {
                a?.name === "AbortError" && i(r),
                i(a)
            } finally {
                clearTimeout(s)
            }
        })
    }
    )
}
function mt() {
    return {
        current: 0,
        take() {
            return this.current++
        },
        reset() {
            this.current = 0
        }
    }
}
var Ke = mt();
function Lr(e, r={}) {
    return {
        request(o) {
            return g(this, null, function*() {
                let {body: n, onRequest: i=r.onRequest, onResponse: s=r.onResponse, timeout: a=r.timeout ?? 1e4} = o
                  , m = x(x({}, r.fetchOptions ?? {}), o.fetchOptions ?? {})
                  , {headers: d, method: u, signal: l} = m;
                try {
                    let p = yield We(E => g(this, [E], function*({signal: c}) {
                        let y = v(x({}, m), {
                            body: Array.isArray(n) ? H(n.map(R => x({
                                jsonrpc: "2.0",
                                id: R.id ?? Ke.take()
                            }, R))) : H(x({
                                jsonrpc: "2.0",
                                id: n.id ?? Ke.take()
                            }, n)),
                            headers: x({
                                "Content-Type": "application/json"
                            }, d),
                            method: u || "POST",
                            signal: l || (a > 0 ? c : null)
                        })
                          , w = new Request(e,y)
                          , h = (yield i?.(w, y)) ?? v(x({}, y), {
                            url: e
                        });
                        return yield fetch(h.url ?? e, h)
                    }), {
                        errorInstance: new ke({
                            body: n,
                            url: e
                        }),
                        timeout: a,
                        signal: !0
                    });
                    s && (yield s(p));
                    let f;
                    if (p.headers.get("Content-Type")?.startsWith("application/json"))
                        f = yield p.json();
                    else {
                        f = yield p.text();
                        try {
                            f = JSON.parse(f || "{}")
                        } catch (c) {
                            if (p.ok)
                                throw c;
                            f = {
                                error: f
                            }
                        }
                    }
                    if (!p.ok)
                        throw new M({
                            body: n,
                            details: H(f.error) || p.statusText,
                            headers: p.headers,
                            status: p.status,
                            url: e
                        });
                    return f
                } catch (p) {
                    throw p instanceof M || p instanceof ke ? p : new M({
                        body: n,
                        cause: p,
                        url: e
                    })
                }
            })
        }
    }
}
function pt(e, r={}) {
    let {batch: t, fetchOptions: o, key: n="http", methods: i, name: s="HTTP JSON-RPC", onFetchRequest: a, onFetchResponse: m, retryDelay: d, raw: u} = r;
    return ({chain: l, retryCount: p, timeout: f}) => {
        let {batchSize: c=1e3, wait: E=0} = typeof t == "object" ? t : {}
          , y = r.retryCount ?? p
          , w = f ?? r.timeout ?? 1e4
          , h = e || l?.rpcUrls.default.http[0];
        if (!h)
            throw new Ue;
        let I = Lr(h, {
            fetchOptions: o,
            onRequest: a,
            onResponse: m,
            timeout: w
        });
        return j({
            key: n,
            methods: i,
            name: s,
            request(D) {
                return g(this, arguments, function*({method: C, params: T}) {
                    let L = {
                        method: C,
                        params: T
                    }
                      , {schedule: S} = ur({
                        id: h,
                        wait: E,
                        shouldSplitBatch(N) {
                            return N.length > c
                        },
                        fn: N => I.request({
                            body: N
                        }),
                        sort: (N, qr) => N.id - qr.id
                    })
                      , Fe = N => g(this, null, function*() {
                        return t ? S(N) : [yield I.request({
                            body: N
                        })]
                    })
                      , [{error: $, result: W}] = yield Fe(L);
                    if (u)
                        return {
                            error: $,
                            result: W
                        };
                    if ($)
                        throw new Q({
                            body: L,
                            error: $,
                            url: h
                        });
                    return W
                })
            },
            retryCount: y,
            retryDelay: d,
            timeout: w,
            type: "http"
        }, {
            fetchOptions: o,
            url: h
        })
    }
}
function vi(e) {
    return x({
        formatters: void 0,
        fees: void 0,
        serializers: void 0
    }, e)
}
var Ae = class extends b {
    constructor({value: r}) {
        super(`Number \`${r}\` is not a valid decimal number.`, {
            name: "InvalidDecimalNumberError"
        })
    }
}
;
function $r(e, r) {
    if (!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e))
        throw new Ae({
            value: e
        });
    let[t,o="0"] = e.split(".")
      , n = t.startsWith("-");
    if (n && (t = t.slice(1)),
    o = o.replace(/(0+)$/, ""),
    r === 0)
        Math.round(+`.${o}`) === 1 && (t = `${BigInt(t) + 1n}`),
        o = "";
    else if (o.length > r) {
        let[i,s,a] = [o.slice(0, r - 1), o.slice(r - 1, r), o.slice(r)]
          , m = Math.round(+`${s}.${a}`);
        m > 9 ? o = `${BigInt(i) + BigInt(1)}0`.padStart(i.length + 1, "0") : o = `${i}${m}`,
        o.length > r && (o = o.slice(1),
        t = `${BigInt(t) + 1n}`),
        o = o.slice(0, r)
    } else
        o = o.padEnd(r, "0");
    return BigInt(`${n ? "-" : ""}${t}${o}`)
}
function ut(e, r="wei") {
    return $r(e, He[r])
}
export {no as a, uo as b, wn as c, Pr as d, Cr as e, Sr as f, Rr as g, Ur as h, So as i, Br as j, Ar as k, Fr as l, jo as m, mn as n, fn as o, Vt as p, gn as q, Cn as r, Be as s, je as t, vi as u, We as v, Vr as w, Kr as x, ut as y, nt as z, st as A, at as B, pt as C};
