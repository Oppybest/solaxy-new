import {u as o} from "./chunk-DYADWNQA.js";
var e = o({
    id: 56,
    name: "BNB Smart Chain",
    nativeCurrency: {
        decimals: 18,
        name: "BNB",
        symbol: "BNB"
    },
    rpcUrls: {
        default: {
            http: ["https://56.rpc.thirdweb.com"]
        }
    },
    blockExplorers: {
        default: {
            name: "BscScan",
            url: "https://bscscan.com",
            apiUrl: "https://api.bscscan.com/api"
        }
    },
    contracts: {
        multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 15921452
        }
    }
});
var r = o({
    id: 97,
    name: "BNB Smart Chain Testnet",
    nativeCurrency: {
        decimals: 18,
        name: "BNB",
        symbol: "tBNB"
    },
    rpcUrls: {
        default: {
            http: ["https://data-seed-prebsc-1-s1.bnbchain.org:8545"]
        }
    },
    blockExplorers: {
        default: {
            name: "BscScan",
            url: "https://testnet.bscscan.com",
            apiUrl: "https://api-testnet.bscscan.com/api"
        }
    },
    contracts: {
        multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 17422483
        }
    },
    testnet: !0
});
var t = o({
    id: 1,
    name: "Ethereum",
    nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: ["https://eth.merkle.io"]
        }
    },
    blockExplorers: {
        default: {
            name: "Etherscan",
            url: "https://etherscan.io",
            apiUrl: "https://api.etherscan.io/api"
        }
    },
    contracts: {
        ensRegistry: {
            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
        },
        ensUniversalResolver: {
            address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
            blockCreated: 19258213
        },
        multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 14353601
        }
    }
});
var p = o({
    id: 11155111,
    name: "Sepolia",
    nativeCurrency: {
        name: "Sepolia Ether",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: ["https://sepolia.drpc.org"]
        }
    },
    blockExplorers: {
        default: {
            name: "Etherscan",
            url: "https://sepolia.etherscan.io",
            apiUrl: "https://api-sepolia.etherscan.io/api"
        }
    },
    contracts: {
        multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 751532
        },
        ensRegistry: {
            address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
        },
        ensUniversalResolver: {
            address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
            blockCreated: 5317080
        }
    },
    testnet: !0
});
export {e as a, r as b, t as c, p as d};
