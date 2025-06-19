import {G as F, a as s, d as k, e as W, f as B, g as H, i as T, j as R, k as b, p as O, s as _, u as K, x as A} from "./chunk-QYDEHUYP.js";
import {d as x, g as v} from "./chunk-WSOYI2AJ.js";
import {B as M, C as I} from "./chunk-DYADWNQA.js";
import {a as p, b as m} from "./chunk-JOVT4LBN.js";
var d = {
    METMASK_CONNECTOR_NAME: "MetaMask",
    TRUST_CONNECTOR_NAME: "Trust Wallet",
    SOLFLARE_CONNECTOR_NAME: "Solflare",
    PHANTOM_CONNECTOR_NAME: "Phantom",
    COIN98_CONNECTOR_NAME: "Coin98",
    MAGIC_EDEN_CONNECTOR_NAME: "Magic Eden",
    BACKPACK_CONNECTOR_NAME: "Backpack",
    BITGET_CONNECTOR_NAME: "Bitget Wallet",
    FRONTIER_CONNECTOR_NAME: "Frontier",
    XVERSE_CONNECTOR_NAME: "Xverse Wallet",
    LEATHER_CONNECTOR_NAME: "Leather",
    EIP155: "eip155",
    ADD_CHAIN_METHOD: "wallet_addEthereumChain",
    EIP6963_ANNOUNCE_EVENT: "eip6963:announceProvider",
    EIP6963_REQUEST_EVENT: "eip6963:requestProvider",
    CONNECTOR_RDNS_MAP: {
        coinbaseWallet: "com.coinbase.wallet",
        coinbaseWalletSDK: "com.coinbase.wallet"
    },
    CONNECTOR_TYPE_EXTERNAL: "EXTERNAL",
    CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
    CONNECTOR_TYPE_INJECTED: "INJECTED",
    CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
    CONNECTOR_TYPE_AUTH: "AUTH",
    CONNECTOR_TYPE_MULTI_CHAIN: "MULTI_CHAIN",
    CONNECTOR_TYPE_W3M_AUTH: "ID_AUTH"
};
var g = {
    getCaipTokens(e) {
        if (!e)
            return;
        let t = {};
        return Object.entries(e).forEach( ([r,n]) => {
            t[`${d.EIP155}:${r}`] = n
        }
        ),
        t
    },
    isLowerCaseMatch(e, t) {
        return e?.toLowerCase() === t?.toLowerCase()
    }
};
var j = new AbortController
  , z = {
    EmbeddedWalletAbortController: j,
    UniversalProviderErrors: {
        UNAUTHORIZED_DOMAIN_NOT_ALLOWED: {
            message: "Unauthorized: origin not allowed",
            alertErrorKey: "INVALID_APP_CONFIGURATION"
        },
        JWT_VALIDATION_ERROR: {
            message: "JWT validation error: JWT Token is not yet valid",
            alertErrorKey: "JWT_TOKEN_NOT_VALID"
        },
        INVALID_KEY: {
            message: "Unauthorized: invalid key",
            alertErrorKey: "INVALID_PROJECT_ID"
        }
    },
    ALERT_ERRORS: {
        SWITCH_NETWORK_NOT_FOUND: {
            shortMessage: "Network Not Found",
            longMessage: "Network not found - please make sure it is included in 'networks' array in createAppKit function"
        },
        INVALID_APP_CONFIGURATION: {
            shortMessage: "Invalid App Configuration",
            longMessage: () => `Origin ${G() ? window.origin : "unknown"} not found on Allowlist - update configuration on cloud.reown.com`
        },
        IFRAME_LOAD_FAILED: {
            shortMessage: "Network Error - Could not load embedded wallet",
            longMessage: () => "There was an issue loading the embedded wallet. Please try again later."
        },
        IFRAME_REQUEST_TIMEOUT: {
            shortMessage: "Embedded Wallet Request Timed Out",
            longMessage: () => "There was an issue doing the request to the embedded wallet. Please try again later."
        },
        UNVERIFIED_DOMAIN: {
            shortMessage: "Invalid App Configuration",
            longMessage: () => "There was an issue loading the embedded wallet. Please verify that your domain is allowed at cloud.reown.com"
        },
        JWT_TOKEN_NOT_VALID: {
            shortMessage: "Session Expired",
            longMessage: "Invalid session found on UniversalProvider - please check your time settings and connect again"
        },
        INVALID_PROJECT_ID: {
            shortMessage: "Invalid App Configuration",
            longMessage: "Invalid Project ID - update configuration"
        },
        PROJECT_ID_NOT_CONFIGURED: {
            shortMessage: "Project ID Not Configured",
            longMessage: "Project ID Not Configured - update configuration on cloud.reown.com"
        }
    }
};
function G() {
    return typeof window < "u"
}
var X = {
    createLogger(e, t="error") {
        let r = x({
            level: t
        })
          , {logger: n} = v({
            opts: r
        });
        return n.error = (...a) => {
            for (let c of a)
                if (c instanceof Error) {
                    e(c, ...a);
                    return
                }
            e(void 0, ...a)
        }
        ,
        n
    }
};
var w = {
    ConnectorExplorerIds: {
        [s.CONNECTOR_ID.COINBASE]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
        [s.CONNECTOR_ID.COINBASE_SDK]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
        [s.CONNECTOR_ID.SAFE]: "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
        [s.CONNECTOR_ID.LEDGER]: "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",
        [s.CONNECTOR_ID.OKX]: "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
        [d.METMASK_CONNECTOR_NAME]: "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
        [d.TRUST_CONNECTOR_NAME]: "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
        [d.SOLFLARE_CONNECTOR_NAME]: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
        [d.PHANTOM_CONNECTOR_NAME]: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
        [d.COIN98_CONNECTOR_NAME]: "2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",
        [d.MAGIC_EDEN_CONNECTOR_NAME]: "8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",
        [d.BACKPACK_CONNECTOR_NAME]: "2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",
        [d.BITGET_CONNECTOR_NAME]: "38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",
        [d.FRONTIER_CONNECTOR_NAME]: "85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",
        [d.XVERSE_CONNECTOR_NAME]: "2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",
        [d.LEATHER_CONNECTOR_NAME]: "483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13"
    },
    NetworkImageIds: {
        1: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
        42161: "3bff954d-5cb0-47a0-9a23-d20192e74600",
        43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
        56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
        250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
        10: "ab9c186a-c52f-464b-2906-ca59d760a400",
        137: "41d04d42-da3b-4453-8506-668cc0727900",
        5e3: "e86fae9b-b770-4eea-e520-150e12c81100",
        295: "6a97d510-cac8-4e58-c7ce-e8681b044c00",
        11155111: "e909ea0a-f92a-4512-c8fc-748044ea6800",
        84532: "a18a7ecd-e307-4360-4746-283182228e00",
        1301: "4eeea7ef-0014-4649-5d1d-07271a80f600",
        130: "2257980a-3463-48c6-cbac-a42d2a956e00",
        10143: "0a728e83-bacb-46db-7844-948f05434900",
        100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
        9001: "f926ff41-260d-4028-635e-91913fc28e00",
        324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
        314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
        4689: "34e68754-e536-40da-c153-6ef2e7188a00",
        1088: "3897a66d-40b9-4833-162f-a2c90531c900",
        1284: "161038da-44ae-4ec7-1208-0ea569454b00",
        1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
        7777777: "845c60df-d429-4991-e687-91ae45791600",
        42220: "ab781bbc-ccc6-418d-d32d-789b15da1f00",
        8453: "7289c336-3981-4081-c5f4-efc26ac64a00",
        1313161554: "3ff73439-a619-4894-9262-4470c773a100",
        2020: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
        2021: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
        80094: "e329c2c9-59b0-4a02-83e4-212ff3779900",
        2741: "fc2427d1-5af9-4a9c-8da5-6f94627cd900",
        "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp": "a1b58899-f671-4276-6a5e-56ca5bd59700",
        "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z": "a1b58899-f671-4276-6a5e-56ca5bd59700",
        EtWTRABZaYq6iMfeYKouRu166VU2xqa1: "a1b58899-f671-4276-6a5e-56ca5bd59700",
        "000000000019d6689c085ae165831e93": "0b4838db-0161-4ffe-022d-532bf03dba00",
        "000000000933ea01ad0ee984209779ba": "39354064-d79b-420b-065d-f980c4b78200"
    },
    ConnectorImageIds: {
        [s.CONNECTOR_ID.COINBASE]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
        [s.CONNECTOR_ID.COINBASE_SDK]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
        [s.CONNECTOR_ID.SAFE]: "461db637-8616-43ce-035a-d89b8a1d5800",
        [s.CONNECTOR_ID.LEDGER]: "54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",
        [s.CONNECTOR_ID.WALLET_CONNECT]: "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",
        [s.CONNECTOR_ID.INJECTED]: "07ba87ed-43aa-4adf-4540-9e6a2b9cae00"
    },
    ConnectorNamesMap: {
        [s.CONNECTOR_ID.INJECTED]: "Browser Wallet",
        [s.CONNECTOR_ID.WALLET_CONNECT]: "WalletConnect",
        [s.CONNECTOR_ID.COINBASE]: "Coinbase",
        [s.CONNECTOR_ID.COINBASE_SDK]: "Coinbase",
        [s.CONNECTOR_ID.LEDGER]: "Ledger",
        [s.CONNECTOR_ID.SAFE]: "Safe"
    },
    ConnectorTypesMap: {
        [s.CONNECTOR_ID.INJECTED]: "INJECTED",
        [s.CONNECTOR_ID.WALLET_CONNECT]: "WALLET_CONNECT",
        [s.CONNECTOR_ID.EIP6963]: "ANNOUNCED",
        [s.CONNECTOR_ID.AUTH]: "AUTH"
    },
    WalletConnectRpcChainIds: [1, 5, 11155111, 10, 420, 42161, 421613, 137, 80001, 42220, 1313161554, 1313161555, 56, 97, 43114, 43113, 100, 8453, 84531, 7777777, 999, 324, 280]
};
var Z = "rpc.walletconnect.org";
function y(e, t) {
    let r = new URL("https://rpc.walletconnect.org/v1/");
    return r.searchParams.set("chainId", e),
    r.searchParams.set("projectId", t),
    r.toString()
}
var P = ["near:mainnet", "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp", "eip155:1101", "eip155:56", "eip155:42161", "eip155:7777777", "eip155:59144", "eip155:324", "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1", "eip155:5000", "solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz", "eip155:80084", "eip155:5003", "eip155:100", "eip155:8453", "eip155:42220", "eip155:1313161555", "eip155:17000", "eip155:1", "eip155:300", "eip155:1313161554", "eip155:1329", "eip155:84532", "eip155:421614", "eip155:11155111", "eip155:8217", "eip155:43114", "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z", "eip155:999999999", "eip155:11155420", "eip155:80002", "eip155:97", "eip155:43113", "eip155:137", "eip155:10", "eip155:1301", "bip122:000000000019d6689c085ae165831e93", "bip122:000000000933ea01ad0ee984209779ba"]
  , J = {
    extendRpcUrlWithProjectId(e, t) {
        let r = !1;
        try {
            r = new URL(e).host === Z
        } catch {
            r = !1
        }
        if (r) {
            let n = new URL(e);
            return n.searchParams.has("projectId") || n.searchParams.set("projectId", t),
            n.toString()
        }
        return e
    },
    isCaipNetwork(e) {
        return "chainNamespace"in e && "caipNetworkId"in e
    },
    getChainNamespace(e) {
        return this.isCaipNetwork(e) ? e.chainNamespace : s.CHAIN.EVM
    },
    getCaipNetworkId(e) {
        return this.isCaipNetwork(e) ? e.caipNetworkId : `${s.CHAIN.EVM}:${e.id}`
    },
    getDefaultRpcUrl(e, t, r) {
        let n = e.rpcUrls?.default?.http?.[0];
        return P.includes(t) ? y(t, r) : n || ""
    },
    extendCaipNetwork(e, {customNetworkImageUrls: t, projectId: r, customRpcUrls: n}) {
        let a = this.getChainNamespace(e)
          , c = this.getCaipNetworkId(e)
          , i = e.rpcUrls.default.http?.[0]
          , o = this.getDefaultRpcUrl(e, c, r)
          , f = e?.rpcUrls?.chainDefault?.http?.[0] || i
          , E = n?.[c]?.map(D => D.url) || []
          , u = [...E, o]
          , C = [...E];
        return f && !C.includes(f) && C.push(f),
        m(p({}, e), {
            chainNamespace: a,
            caipNetworkId: c,
            assets: {
                imageId: w.NetworkImageIds[e.id],
                imageUrl: t?.[e.id]
            },
            rpcUrls: m(p({}, e.rpcUrls), {
                default: {
                    http: u
                },
                chainDefault: {
                    http: C
                }
            })
        })
    },
    extendCaipNetworks(e, {customNetworkImageUrls: t, projectId: r, customRpcUrls: n}) {
        return e.map(a => J.extendCaipNetwork(a, {
            customNetworkImageUrls: t,
            customRpcUrls: n,
            projectId: r
        }))
    },
    getViemTransport(e, t, r) {
        let n = [];
        return r?.forEach(a => {
            n.push(I(a.url, a.config))
        }
        ),
        P.includes(e.caipNetworkId) && n.push(I(y(e.caipNetworkId, t), {
            fetchOptions: {
                headers: {
                    "Content-Type": "text/plain"
                }
            }
        })),
        e?.rpcUrls?.default?.http?.forEach(a => {
            n.push(I(a))
        }
        ),
        M(n)
    },
    extendWagmiTransports(e, t, r) {
        if (P.includes(e.caipNetworkId)) {
            let n = this.getDefaultRpcUrl(e, e.caipNetworkId, t);
            return M([r, I(n)])
        }
        return r
    },
    getUnsupportedNetwork(e) {
        return {
            id: e.split(":")[1],
            caipNetworkId: e,
            name: s.UNSUPPORTED_NETWORK_NAME,
            chainNamespace: e.split(":")[0],
            nativeCurrency: {
                name: "",
                decimals: 0,
                symbol: ""
            },
            rpcUrls: {
                default: {
                    http: []
                }
            }
        }
    },
    getCaipNetworkFromStorage(e) {
        let t = T.getActiveCaipNetworkId()
          , r = A.getAllRequestedCaipNetworks()
          , n = Array.from(A.state.chains?.keys() || [])
          , a = t?.split(":")[0]
          , c = a ? n.includes(a) : !1
          , i = r?.find(f => f.caipNetworkId === t);
        return c && !i && t ? this.getUnsupportedNetwork(t) : i || e || r?.[0]
    }
};
var U = {
    eip155: void 0,
    solana: void 0,
    polkadot: void 0,
    bip122: void 0,
    cosmos: void 0
}
  , l = k({
    providers: p({}, U),
    providerIds: p({}, U)
})
  , $ = {
    state: l,
    subscribeKey(e, t) {
        return H(l, e, t)
    },
    subscribe(e) {
        return W(l, () => {
            e(l)
        }
        )
    },
    subscribeProviders(e) {
        return W(l.providers, () => e(l.providers))
    },
    setProvider(e, t) {
        t && (l.providers[e] = B(t))
    },
    getProvider(e) {
        return l.providers[e]
    },
    setProviderId(e, t) {
        t && (l.providerIds[e] = t)
    },
    getProviderId(e) {
        if (e)
            return l.providerIds[e]
    },
    reset() {
        l.providers = p({}, U),
        l.providerIds = p({}, U)
    },
    resetChain(e) {
        l.providers[e] = void 0,
        l.providerIds[e] = void 0
    }
};
var h = {
    getConnectorsByType(e, t, r) {
        let {customWallets: n} = b.state
          , a = T.getRecentWallets()
          , c = L.filterOutDuplicateWallets(t)
          , i = L.filterOutDuplicateWallets(r)
          , o = e.filter(C => C.type === "MULTI_CHAIN")
          , f = e.filter(C => C.type === "ANNOUNCED")
          , E = e.filter(C => C.type === "INJECTED")
          , u = e.filter(C => C.type === "EXTERNAL");
        return {
            custom: n,
            recent: a,
            external: u,
            multiChain: o,
            announced: f,
            injected: E,
            recommended: c,
            featured: i
        }
    },
    showConnector(e) {
        let t = e.info?.rdns
          , r = !!t && O.state.excludedWallets.some(a => !!a.rdns && a.rdns === t)
          , n = !!e.name && O.state.excludedWallets.some(a => g.isLowerCaseMatch(a.name, e.name));
        return !(e.type === "INJECTED" && (e.name === "Browser Wallet" && (!R.isMobile() || R.isMobile() && !t && !K.checkInstalled()) || r || n) || (e.type === "ANNOUNCED" || e.type === "EXTERNAL") && (r || n))
    },
    getIsConnectedWithWC() {
        return Array.from(A.state.chains.values()).some(r => _.getConnectorId(r.namespace) === s.CONNECTOR_ID.WALLET_CONNECT)
    },
    getConnectorTypeOrder({recommended: e, featured: t, custom: r, recent: n, announced: a, injected: c, multiChain: i, external: o, overriddenConnectors: f=b.state.features?.connectorTypeOrder ?? []}) {
        let E = h.getIsConnectedWithWC()
          , D = [{
            type: "walletConnect",
            isEnabled: b.state.enableWalletConnect && !E
        }, {
            type: "recent",
            isEnabled: n.length > 0
        }, {
            type: "injected",
            isEnabled: [...c, ...a, ...i].length > 0
        }, {
            type: "featured",
            isEnabled: t.length > 0
        }, {
            type: "custom",
            isEnabled: r && r.length > 0
        }, {
            type: "external",
            isEnabled: o.length > 0
        }, {
            type: "recommended",
            isEnabled: e.length > 0
        }].filter(N => N.isEnabled)
          , V = new Set(D.map(N => N.type))
          , S = f.filter(N => V.has(N)).map(N => ({
            type: N,
            isEnabled: !0
        }))
          , q = D.filter( ({type: N}) => !S.some( ({type: Y}) => Y === N));
        return Array.from(new Set([...S, ...q].map( ({type: N}) => N)))
    }
};
var L = {
    filterOutDuplicatesByRDNS(e) {
        let t = b.state.enableEIP6963 ? _.state.connectors : []
          , r = T.getRecentWallets()
          , n = t.map(o => o.info?.rdns).filter(Boolean)
          , a = r.map(o => o.rdns).filter(Boolean)
          , c = n.concat(a);
        if (c.includes("io.metamask.mobile") && R.isMobile()) {
            let o = c.indexOf("io.metamask.mobile");
            c[o] = "io.metamask"
        }
        return e.filter(o => !c.includes(String(o?.rdns)))
    },
    filterOutDuplicatesByIds(e) {
        let t = _.state.connectors.filter(o => o.type === "ANNOUNCED" || o.type === "INJECTED")
          , r = T.getRecentWallets()
          , n = t.map(o => o.explorerId)
          , a = r.map(o => o.id)
          , c = n.concat(a);
        return e.filter(o => !c.includes(o?.id))
    },
    filterOutDuplicateWallets(e) {
        let t = this.filterOutDuplicatesByRDNS(e);
        return this.filterOutDuplicatesByIds(t)
    },
    markWalletsAsInstalled(e) {
        let {connectors: t} = _.state
          , {featuredWalletIds: r} = b.state
          , n = t.filter(i => i.type === "ANNOUNCED").reduce( (i, o) => (o.info?.rdns && (i[o.info.rdns] = !0),
        i), {});
        return e.map(i => m(p({}, i), {
            installed: !!i.rdns && !!n[i.rdns ?? ""]
        })).sort( (i, o) => {
            let f = Number(o.installed) - Number(i.installed);
            if (f !== 0)
                return f;
            if (r?.length) {
                let E = r.indexOf(i.id)
                  , u = r.indexOf(o.id);
                if (E !== -1 && u !== -1)
                    return E - u;
                if (E !== -1)
                    return -1;
                if (u !== -1)
                    return 1
            }
            return 0
        }
        )
    },
    getConnectOrderMethod(e, t) {
        let r = e?.connectMethodsOrder || b.state.features?.connectMethodsOrder
          , n = t || _.state.connectors;
        if (r)
            return r;
        let {injected: a, announced: c} = h.getConnectorsByType(n, O.state.recommended, O.state.featured)
          , i = a.filter(h.showConnector)
          , o = c.filter(h.showConnector);
        return i.length || o.length ? ["wallet", "email", "social"] : F.DEFAULT_CONNECT_METHOD_ORDER
    },
    isExcluded(e) {
        let t = !!e.rdns && O.state.excludedWallets.some(n => n.rdns === e.rdns)
          , r = !!e.name && O.state.excludedWallets.some(n => g.isLowerCaseMatch(n.name, e.name));
        return t || r
    }
};
export {d as a, w as b, g as c, z as d, X as e, J as f, $ as g, L as h, h as i};
