import{t as Xt}from"./chunk-WSOYI2AJ.js";import{a as ce,b as xe}from"./chunk-HBZ5ZBJB.js";import{a as Yt}from"./chunk-EHBBQRNU.js";import{G as yt}from"./chunk-MXRAEGHM.js";import{a as d,b as N,d as ke,i as zt,l as u}from"./chunk-JOVT4LBN.js";var q={WC_NAME_SUFFIX:".reown.id",WC_NAME_SUFFIX_LEGACY:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CONNECTOR_ID:{WALLET_CONNECT:"walletConnect",INJECTED:"injected",WALLET_STANDARD:"announced",COINBASE:"coinbaseWallet",COINBASE_SDK:"coinbaseWalletSDK",SAFE:"safe",LEDGER:"ledger",OKX:"okx",EIP6963:"eip6963",AUTH:"ID_AUTH"},CONNECTOR_NAMES:{AUTH:"Auth"},AUTH_CONNECTOR_SUPPORTED_CHAINS:["eip155","solana"],LIMITS:{PENDING_TRANSACTIONS:99},CHAIN:{EVM:"eip155",SOLANA:"solana",POLKADOT:"polkadot",BITCOIN:"bip122"},CHAIN_NAME_MAP:{eip155:"EVM Networks",solana:"Solana",polkadot:"Polkadot",bip122:"Bitcoin",cosmos:"Cosmos"},ADAPTER_TYPES:{BITCOIN:"bitcoin",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5"},USDT_CONTRACT_ADDRESSES:["0xdac17f958d2ee523a2206206994597c13d831ec7","0xc2132d05d31c914a87c6611c10748aeb04b58e8f","0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7","0x919C1c267BC06a7039e03fcc2eF738525769109c","0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e","0x55d398326f99059fF775485246999027B3197955","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"],HTTP_STATUS_CODES:{SERVICE_UNAVAILABLE:503,FORBIDDEN:403},UNSUPPORTED_NETWORK_NAME:"Unknown Network",SECURE_SITE_SDK_ORIGIN:(typeof process<"u"&&typeof process.env<"u"?process.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org"};var lt={caipNetworkIdToNumber(e){return e?Number(e.split(":")[1]):void 0},parseEvmChainId(e){return typeof e=="string"?this.caipNetworkIdToNumber(e):e},getNetworksByNamespace(e,t){return e?.filter(r=>r.chainNamespace===t)||[]},getFirstNetworkByNamespace(e,t){return this.getNetworksByNamespace(e,t)[0]},getNetworkNameByCaipNetworkId(e,t){if(!t)return;let r=e.find(o=>o.caipNetworkId===t);if(r)return r.name;let[n]=t.split(":");return q.CHAIN_NAME_MAP?.[n]||void 0}};var Jt=20,Qt=1,Ue=1e6,_t=1e6,Zt=-7,er=21,tr=!1,Xe="[big.js] ",De=Xe+"Invalid ",ot=De+"decimal places",rr=De+"rounding mode",It=Xe+"Division by zero",B={},ge=void 0,nr=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function Tt(){function e(t){var r=this;if(!(r instanceof e))return t===ge?Tt():new e(t);if(t instanceof e)r.s=t.s,r.e=t.e,r.c=t.c.slice();else{if(typeof t!="string"){if(e.strict===!0&&typeof t!="bigint")throw TypeError(De+"value");t=t===0&&1/t<0?"-0":String(t)}or(r,t)}r.constructor=e}return e.prototype=B,e.DP=Jt,e.RM=Qt,e.NE=Zt,e.PE=er,e.strict=tr,e.roundDown=0,e.roundHalfUp=1,e.roundHalfEven=2,e.roundUp=3,e}function or(e,t){var r,n,o;if(!nr.test(t))throw Error(De+"number");for(e.s=t.charAt(0)=="-"?(t=t.slice(1),-1):1,(r=t.indexOf("."))>-1&&(t=t.replace(".","")),(n=t.search(/e/i))>0?(r<0&&(r=n),r+=+t.slice(n+1),t=t.substring(0,n)):r<0&&(r=t.length),o=t.length,n=0;n<o&&t.charAt(n)=="0";)++n;if(n==o)e.c=[e.e=0];else{for(;o>0&&t.charAt(--o)=="0";);for(e.e=r-n-1,e.c=[],r=0;n<=o;)e.c[r++]=+t.charAt(n++)}return e}function Me(e,t,r,n){var o=e.c;if(r===ge&&(r=e.constructor.RM),r!==0&&r!==1&&r!==2&&r!==3)throw Error(rr);if(t<1)n=r===3&&(n||!!o[0])||t===0&&(r===1&&o[0]>=5||r===2&&(o[0]>5||o[0]===5&&(n||o[1]!==ge))),o.length=1,n?(e.e=e.e-t+1,o[0]=1):o[0]=e.e=0;else if(t<o.length){if(n=r===1&&o[t]>=5||r===2&&(o[t]>5||o[t]===5&&(n||o[t+1]!==ge||o[t-1]&1))||r===3&&(n||!!o[0]),o.length=t,n){for(;++o[--t]>9;)if(o[t]=0,t===0){++e.e,o.unshift(1);break}}for(t=o.length;!o[--t];)o.pop()}return e}function Le(e,t,r){var n=e.e,o=e.c.join(""),s=o.length;if(t)o=o.charAt(0)+(s>1?"."+o.slice(1):"")+(n<0?"e":"e+")+n;else if(n<0){for(;++n;)o="0"+o;o="0."+o}else if(n>0)if(++n>s)for(n-=s;n--;)o+="0";else n<s&&(o=o.slice(0,n)+"."+o.slice(n));else s>1&&(o=o.charAt(0)+"."+o.slice(1));return e.s<0&&r?"-"+o:o}B.abs=function(){var e=new this.constructor(this);return e.s=1,e};B.cmp=function(e){var t,r=this,n=r.c,o=(e=new r.constructor(e)).c,s=r.s,a=e.s,l=r.e,p=e.e;if(!n[0]||!o[0])return n[0]?s:o[0]?-a:0;if(s!=a)return s;if(t=s<0,l!=p)return l>p^t?1:-1;for(a=(l=n.length)<(p=o.length)?l:p,s=-1;++s<a;)if(n[s]!=o[s])return n[s]>o[s]^t?1:-1;return l==p?0:l>p^t?1:-1};B.div=function(e){var t=this,r=t.constructor,n=t.c,o=(e=new r(e)).c,s=t.s==e.s?1:-1,a=r.DP;if(a!==~~a||a<0||a>Ue)throw Error(ot);if(!o[0])throw Error(It);if(!n[0])return e.s=s,e.c=[e.e=0],e;var l,p,c,C,h,z=o.slice(),ee=l=o.length,Ce=n.length,F=n.slice(0,l),Z=F.length,Y=e,Re=Y.c=[],Se=0,Oe=a+(Y.e=t.e-e.e)+1;for(Y.s=s,s=Oe<0?0:Oe,z.unshift(0);Z++<l;)F.push(0);do{for(c=0;c<10;c++){if(l!=(Z=F.length))C=l>Z?1:-1;else for(h=-1,C=0;++h<l;)if(o[h]!=F[h]){C=o[h]>F[h]?1:-1;break}if(C<0){for(p=Z==l?o:z;Z;){if(F[--Z]<p[Z]){for(h=Z;h&&!F[--h];)F[h]=9;--F[h],F[Z]+=10}F[Z]-=p[Z]}for(;!F[0];)F.shift()}else break}Re[Se++]=C?c:++c,F[0]&&C?F[Z]=n[ee]||0:F=[n[ee]]}while((ee++<Ce||F[0]!==ge)&&s--);return!Re[0]&&Se!=1&&(Re.shift(),Y.e--,Oe--),Se>Oe&&Me(Y,Oe,r.RM,F[0]!==ge),Y};B.eq=function(e){return this.cmp(e)===0};B.gt=function(e){return this.cmp(e)>0};B.gte=function(e){return this.cmp(e)>-1};B.lt=function(e){return this.cmp(e)<0};B.lte=function(e){return this.cmp(e)<1};B.minus=B.sub=function(e){var t,r,n,o,s=this,a=s.constructor,l=s.s,p=(e=new a(e)).s;if(l!=p)return e.s=-p,s.plus(e);var c=s.c.slice(),C=s.e,h=e.c,z=e.e;if(!c[0]||!h[0])return h[0]?e.s=-p:c[0]?e=new a(s):e.s=1,e;if(l=C-z){for((o=l<0)?(l=-l,n=c):(z=C,n=h),n.reverse(),p=l;p--;)n.push(0);n.reverse()}else for(r=((o=c.length<h.length)?c:h).length,l=p=0;p<r;p++)if(c[p]!=h[p]){o=c[p]<h[p];break}if(o&&(n=c,c=h,h=n,e.s=-e.s),(p=(r=h.length)-(t=c.length))>0)for(;p--;)c[t++]=0;for(p=t;r>l;){if(c[--r]<h[r]){for(t=r;t&&!c[--t];)c[t]=9;--c[t],c[r]+=10}c[r]-=h[r]}for(;c[--p]===0;)c.pop();for(;c[0]===0;)c.shift(),--z;return c[0]||(e.s=1,c=[z=0]),e.c=c,e.e=z,e};B.mod=function(e){var t,r=this,n=r.constructor,o=r.s,s=(e=new n(e)).s;if(!e.c[0])throw Error(It);return r.s=e.s=1,t=e.cmp(r)==1,r.s=o,e.s=s,t?new n(r):(o=n.DP,s=n.RM,n.DP=n.RM=0,r=r.div(e),n.DP=o,n.RM=s,this.minus(r.times(e)))};B.neg=function(){var e=new this.constructor(this);return e.s=-e.s,e};B.plus=B.add=function(e){var t,r,n,o=this,s=o.constructor;if(e=new s(e),o.s!=e.s)return e.s=-e.s,o.minus(e);var a=o.e,l=o.c,p=e.e,c=e.c;if(!l[0]||!c[0])return c[0]||(l[0]?e=new s(o):e.s=o.s),e;if(l=l.slice(),t=a-p){for(t>0?(p=a,n=c):(t=-t,n=l),n.reverse();t--;)n.push(0);n.reverse()}for(l.length-c.length<0&&(n=c,c=l,l=n),t=c.length,r=0;t;l[t]%=10)r=(l[--t]=l[t]+c[t]+r)/10|0;for(r&&(l.unshift(r),++p),t=l.length;l[--t]===0;)l.pop();return e.c=l,e.e=p,e};B.pow=function(e){var t=this,r=new t.constructor("1"),n=r,o=e<0;if(e!==~~e||e<-_t||e>_t)throw Error(De+"exponent");for(o&&(e=-e);e&1&&(n=n.times(t)),e>>=1,!!e;)t=t.times(t);return o?r.div(n):n};B.prec=function(e,t){if(e!==~~e||e<1||e>Ue)throw Error(De+"precision");return Me(new this.constructor(this),e,t)};B.round=function(e,t){if(e===ge)e=0;else if(e!==~~e||e<-Ue||e>Ue)throw Error(ot);return Me(new this.constructor(this),e+this.e+1,t)};B.sqrt=function(){var e,t,r,n=this,o=n.constructor,s=n.s,a=n.e,l=new o("0.5");if(!n.c[0])return new o(n);if(s<0)throw Error(Xe+"No square root");s=Math.sqrt(+Le(n,!0,!0)),s===0||s===1/0?(t=n.c.join(""),t.length+a&1||(t+="0"),s=Math.sqrt(t),a=((a+1)/2|0)-(a<0||a&1),e=new o((s==1/0?"5e":(s=s.toExponential()).slice(0,s.indexOf("e")+1))+a)):e=new o(s+""),a=e.e+(o.DP+=4);do r=e,e=l.times(r.plus(n.div(r)));while(r.c.slice(0,a).join("")!==e.c.slice(0,a).join(""));return Me(e,(o.DP-=4)+e.e+1,o.RM)};B.times=B.mul=function(e){var t,r=this,n=r.constructor,o=r.c,s=(e=new n(e)).c,a=o.length,l=s.length,p=r.e,c=e.e;if(e.s=r.s==e.s?1:-1,!o[0]||!s[0])return e.c=[e.e=0],e;for(e.e=p+c,a<l&&(t=o,o=s,s=t,c=a,a=l,l=c),t=new Array(c=a+l);c--;)t[c]=0;for(p=l;p--;){for(l=0,c=a+p;c>p;)l=t[c]+s[p]*o[c-p-1]+l,t[c--]=l%10,l=l/10|0;t[c]=l}for(l?++e.e:t.shift(),p=t.length;!t[--p];)t.pop();return e.c=t,e};B.toExponential=function(e,t){var r=this,n=r.c[0];if(e!==ge){if(e!==~~e||e<0||e>Ue)throw Error(ot);for(r=Me(new r.constructor(r),++e,t);r.c.length<e;)r.c.push(0)}return Le(r,!0,!!n)};B.toFixed=function(e,t){var r=this,n=r.c[0];if(e!==ge){if(e!==~~e||e<0||e>Ue)throw Error(ot);for(r=Me(new r.constructor(r),e+r.e+1,t),e=e+r.e+1;r.c.length<e;)r.c.push(0)}return Le(r,!1,!!n)};B[Symbol.for("nodejs.util.inspect.custom")]=B.toJSON=B.toString=function(){var e=this,t=e.constructor;return Le(e,e.e<=t.NE||e.e>=t.PE,!!e.c[0])};B.toNumber=function(){var e=+Le(this,!0,!0);if(this.constructor.strict===!0&&!this.eq(e.toString()))throw Error(Xe+"Imprecise conversion");return e};B.toPrecision=function(e,t){var r=this,n=r.constructor,o=r.c[0];if(e!==ge){if(e!==~~e||e<1||e>Ue)throw Error(De+"precision");for(r=Me(new n(r),e,t);r.c.length<e;)r.c.push(0)}return Le(r,e<=r.e||r.e<=n.NE||r.e>=n.PE,!!o)};B.valueOf=function(){var e=this,t=e.constructor;if(t.strict===!0)throw Error(Xe+"valueOf disallowed");return Le(e,e.e<=t.NE||e.e>=t.PE,!0)};var sr=Tt(),$e=sr;var ut={bigNumber(e){return e?new $e(e):new $e(0)},multiply(e,t){if(e===void 0||t===void 0)return new $e(0);let r=new $e(e),n=new $e(t);return r.times(n)},formatNumberToLocalString(e,t=2){return e===void 0?"0.00":typeof e=="number"?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})},parseLocalStringToNumber(e){return e===void 0?0:parseFloat(e.replace(/,/gu,""))}};var Pt=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];var Rt=[{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]}];var Ot=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];var pt={getERC20Abi:e=>q.USDT_CONTRACT_ADDRESSES.includes(e)?Ot:Pt,getSwapAbi:()=>Rt};var ir={validateCaipAddress(e){if(e.split(":")?.length!==3)throw new Error("Invalid CAIP Address");return e},parseCaipAddress(e){let t=e.split(":");if(t.length!==3)throw new Error(`Invalid CAIP-10 address: ${e}`);let[r,n,o]=t;if(!r||!n||!o)throw new Error(`Invalid CAIP-10 address: ${e}`);return{chainNamespace:r,chainId:n,address:o}},parseCaipNetworkId(e){let t=e.split(":");if(t.length!==2)throw new Error(`Invalid CAIP-2 network id: ${e}`);let[r,n]=t;if(!r||!n)throw new Error(`Invalid CAIP-2 network id: ${e}`);return{chainNamespace:r,chainId:n}}};var T={WALLET_ID:"@appkit/wallet_id",WALLET_NAME:"@appkit/wallet_name",SOLANA_WALLET:"@appkit/solana_wallet",SOLANA_CAIP_CHAIN:"@appkit/solana_caip_chain",ACTIVE_CAIP_NETWORK_ID:"@appkit/active_caip_network_id",CONNECTED_SOCIAL:"@appkit/connected_social",CONNECTED_SOCIAL_USERNAME:"@appkit-wallet/SOCIAL_USERNAME",RECENT_WALLETS:"@appkit/recent_wallets",DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",ACTIVE_NAMESPACE:"@appkit/active_namespace",CONNECTED_NAMESPACES:"@appkit/connected_namespaces",CONNECTION_STATUS:"@appkit/connection_status",SIWX_AUTH_TOKEN:"@appkit/siwx-auth-token",SIWX_NONCE_TOKEN:"@appkit/siwx-nonce-token",TELEGRAM_SOCIAL_PROVIDER:"@appkit/social_provider",NATIVE_BALANCE_CACHE:"@appkit/native_balance_cache",PORTFOLIO_CACHE:"@appkit/portfolio_cache",ENS_CACHE:"@appkit/ens_cache",IDENTITY_CACHE:"@appkit/identity_cache",PREFERRED_ACCOUNT_TYPES:"@appkit/preferred_account_types",CONNECTIONS:"@appkit/connections"};function Je(e){if(!e)throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");return`@appkit/${e}:connected_connector_id`}var y={setItem(e,t){Be()&&t!==void 0&&localStorage.setItem(e,t)},getItem(e){if(Be())return localStorage.getItem(e)||void 0},removeItem(e){Be()&&localStorage.removeItem(e)},clear(){Be()&&localStorage.clear()}};function Be(){return typeof window<"u"&&typeof localStorage<"u"}function le(e,t){return t==="light"?{"--w3m-accent":e?.["--w3m-accent"]||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":e?.["--w3m-accent"]||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}var w={cacheExpiry:{portfolio:3e4,nativeBalance:3e4,ens:3e5,identity:3e5},isCacheExpired(e,t){return Date.now()-e>t},getActiveNetworkProps(){let e=w.getActiveNamespace(),t=w.getActiveCaipNetworkId(),r=t?t.split(":")[1]:void 0,n=r?isNaN(Number(r))?r:Number(r):void 0;return{namespace:e,caipNetworkId:t,chainId:n}},setWalletConnectDeepLink({name:e,href:t}){try{y.setItem(T.DEEPLINK_CHOICE,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let e=y.getItem(T.DEEPLINK_CHOICE);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{y.removeItem(T.DEEPLINK_CHOICE)}catch{console.info("Unable to delete WalletConnect deep link")}},setActiveNamespace(e){try{y.setItem(T.ACTIVE_NAMESPACE,e)}catch{console.info("Unable to set active namespace")}},setActiveCaipNetworkId(e){try{y.setItem(T.ACTIVE_CAIP_NETWORK_ID,e),w.setActiveNamespace(e.split(":")[0])}catch{console.info("Unable to set active caip network id")}},getActiveCaipNetworkId(){try{return y.getItem(T.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to get active caip network id");return}},deleteActiveCaipNetworkId(){try{y.removeItem(T.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to delete active caip network id")}},deleteConnectedConnectorId(e){try{let t=Je(e);y.removeItem(t)}catch{console.info("Unable to delete connected connector id")}},setAppKitRecent(e){try{let t=w.getRecentWallets();t.find(n=>n.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),y.setItem(T.RECENT_WALLETS,JSON.stringify(t)))}catch{console.info("Unable to set AppKit recent")}},getRecentWallets(){try{let e=y.getItem(T.RECENT_WALLETS);return e?JSON.parse(e):[]}catch{console.info("Unable to get AppKit recent")}return[]},setConnectedConnectorId(e,t){try{let r=Je(e);y.setItem(r,t)}catch{console.info("Unable to set Connected Connector Id")}},getActiveNamespace(){try{return y.getItem(T.ACTIVE_NAMESPACE)}catch{console.info("Unable to get active namespace")}},getConnectedConnectorId(e){if(e)try{let t=Je(e);return y.getItem(t)}catch{console.info("Unable to get connected connector id in namespace ",e)}},setConnectedSocialProvider(e){try{y.setItem(T.CONNECTED_SOCIAL,e)}catch{console.info("Unable to set connected social provider")}},getConnectedSocialProvider(){try{return y.getItem(T.CONNECTED_SOCIAL)}catch{console.info("Unable to get connected social provider")}},deleteConnectedSocialProvider(){try{y.removeItem(T.CONNECTED_SOCIAL)}catch{console.info("Unable to delete connected social provider")}},getConnectedSocialUsername(){try{return y.getItem(T.CONNECTED_SOCIAL_USERNAME)}catch{console.info("Unable to get connected social username")}},getStoredActiveCaipNetworkId(){return y.getItem(T.ACTIVE_CAIP_NETWORK_ID)?.split(":")?.[1]},setConnectionStatus(e){try{y.setItem(T.CONNECTION_STATUS,e)}catch{console.info("Unable to set connection status")}},getConnectionStatus(){try{return y.getItem(T.CONNECTION_STATUS)}catch{return}},getConnectedNamespaces(){try{let e=y.getItem(T.CONNECTED_NAMESPACES);return e?.length?e.split(","):[]}catch{return[]}},setConnectedNamespaces(e){try{let t=Array.from(new Set(e));y.setItem(T.CONNECTED_NAMESPACES,t.join(","))}catch{console.info("Unable to set namespaces in storage")}},addConnectedNamespace(e){try{let t=w.getConnectedNamespaces();t.includes(e)||(t.push(e),w.setConnectedNamespaces(t))}catch{console.info("Unable to add connected namespace")}},removeConnectedNamespace(e){try{let t=w.getConnectedNamespaces(),r=t.indexOf(e);r>-1&&(t.splice(r,1),w.setConnectedNamespaces(t))}catch{console.info("Unable to remove connected namespace")}},getTelegramSocialProvider(){try{return y.getItem(T.TELEGRAM_SOCIAL_PROVIDER)}catch{return console.info("Unable to get telegram social provider"),null}},setTelegramSocialProvider(e){try{y.setItem(T.TELEGRAM_SOCIAL_PROVIDER,e)}catch{console.info("Unable to set telegram social provider")}},removeTelegramSocialProvider(){try{y.removeItem(T.TELEGRAM_SOCIAL_PROVIDER)}catch{console.info("Unable to remove telegram social provider")}},getBalanceCache(){let e={};try{let t=y.getItem(T.PORTFOLIO_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromBalanceCache(e){try{let t=w.getBalanceCache();y.setItem(T.PORTFOLIO_CACHE,JSON.stringify(N(d({},t),{[e]:void 0})))}catch{console.info("Unable to remove address from balance cache",e)}},getBalanceCacheForCaipAddress(e){try{let r=w.getBalanceCache()[e];if(r&&!this.isCacheExpired(r.timestamp,this.cacheExpiry.portfolio))return r.balance;w.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateBalanceCache(e){try{let t=w.getBalanceCache();t[e.caipAddress]=e,y.setItem(T.PORTFOLIO_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getNativeBalanceCache(){let e={};try{let t=y.getItem(T.NATIVE_BALANCE_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromNativeBalanceCache(e){try{let t=w.getBalanceCache();y.setItem(T.NATIVE_BALANCE_CACHE,JSON.stringify(N(d({},t),{[e]:void 0})))}catch{console.info("Unable to remove address from balance cache",e)}},getNativeBalanceCacheForCaipAddress(e){try{let r=w.getNativeBalanceCache()[e];if(r&&!this.isCacheExpired(r.timestamp,this.cacheExpiry.nativeBalance))return r;console.info("Discarding cache for address",e),w.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateNativeBalanceCache(e){try{let t=w.getNativeBalanceCache();t[e.caipAddress]=e,y.setItem(T.NATIVE_BALANCE_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getEnsCache(){let e={};try{let t=y.getItem(T.ENS_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get ens name cache")}return e},getEnsFromCacheForAddress(e){try{let r=w.getEnsCache()[e];if(r&&!this.isCacheExpired(r.timestamp,this.cacheExpiry.ens))return r.ens;w.removeEnsFromCache(e)}catch{console.info("Unable to get ens name from cache",e)}},updateEnsCache(e){try{let t=w.getEnsCache();t[e.address]=e,y.setItem(T.ENS_CACHE,JSON.stringify(t))}catch{console.info("Unable to update ens name cache",e)}},removeEnsFromCache(e){try{let t=w.getEnsCache();y.setItem(T.ENS_CACHE,JSON.stringify(N(d({},t),{[e]:void 0})))}catch{console.info("Unable to remove ens name from cache",e)}},getIdentityCache(){let e={};try{let t=y.getItem(T.IDENTITY_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get identity cache")}return e},getIdentityFromCacheForAddress(e){try{let r=w.getIdentityCache()[e];if(r&&!this.isCacheExpired(r.timestamp,this.cacheExpiry.identity))return r.identity;w.removeIdentityFromCache(e)}catch{console.info("Unable to get identity from cache",e)}},updateIdentityCache(e){try{let t=w.getIdentityCache();t[e.address]={identity:e.identity,timestamp:e.timestamp},y.setItem(T.IDENTITY_CACHE,JSON.stringify(t))}catch{console.info("Unable to update identity cache",e)}},removeIdentityFromCache(e){try{let t=w.getIdentityCache();y.setItem(T.IDENTITY_CACHE,JSON.stringify(N(d({},t),{[e]:void 0})))}catch{console.info("Unable to remove identity from cache",e)}},clearAddressCache(){try{y.removeItem(T.PORTFOLIO_CACHE),y.removeItem(T.NATIVE_BALANCE_CACHE),y.removeItem(T.ENS_CACHE),y.removeItem(T.IDENTITY_CACHE)}catch{console.info("Unable to clear address cache")}},setPreferredAccountTypes(e){try{y.setItem(T.PREFERRED_ACCOUNT_TYPES,JSON.stringify(e))}catch{console.info("Unable to set preferred account types",e)}},getPreferredAccountTypes(){try{let e=y.getItem(T.PREFERRED_ACCOUNT_TYPES);return e?JSON.parse(e):{}}catch{console.info("Unable to get preferred account types")}return{}},setConnections(e,t){try{let r=N(d({},w.getConnections()),{[t]:e});y.setItem(T.CONNECTIONS,JSON.stringify(r))}catch(r){console.error("Unable to sync connections to storage",r)}},getConnections(){try{let e=y.getItem(T.CONNECTIONS);return e?JSON.parse(e):{}}catch(e){return console.error("Unable to get connections from storage",e),{}}}};var dt=(typeof process<"u"&&typeof process.env<"u"?process.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",mt=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:"",supportedChains:["eip155"]},{label:"Meld.io",name:"meld",feeRange:"1-2%",url:"https://meldcrypto.com",supportedChains:["eip155","solana"]}],kt="WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU",J={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,FIVE_SEC_MS:5e3,THREE_SEC_MS:3e3,ONE_SEC_MS:1e3,SECURE_SITE:dt,SECURE_SITE_DASHBOARD:`${dt}/dashboard`,SECURE_SITE_FAVICON:`${dt}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","berachain","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Berachain:"berachain",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],BALANCE_SUPPORTED_CHAINS:["eip155","solana"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NAMES_SUPPORTED_CHAIN_NAMESPACES:["eip155"],ONRAMP_SUPPORTED_CHAIN_NAMESPACES:["eip155","solana"],ACTIVITY_ENABLED_CHAIN_NAMESPACES:["eip155"],NATIVE_TOKEN_ADDRESS:{eip155:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111",polkadot:"0x",bip122:"0x",cosmos:"0x"},CONVERT_SLIPPAGE_TOLERANCE:1,CONNECT_LABELS:{MOBILE:"Open and continue in the wallet app",WEB:"Open and continue in the wallet app"},SEND_SUPPORTED_NAMESPACES:["eip155","solana"],DEFAULT_REMOTE_FEATURES:{swaps:["1inch"],onramp:["coinbase","meld"],email:!0,socials:["google","x","discord","farcaster","github","apple","facebook"],activity:!0,reownBranding:!0},DEFAULT_REMOTE_FEATURES_DISABLED:{email:!1,socials:!1,swaps:!1,onramp:!1,activity:!1,reownBranding:!1},DEFAULT_FEATURES:{receive:!0,send:!0,emailShowWallets:!0,connectorTypeOrder:["walletConnect","recent","injected","featured","custom","external","recommended"],analytics:!0,allWallets:!0,legalCheckbox:!1,smartSessions:!1,collapseWallets:!1,walletFeaturesOrder:["onramp","swaps","receive","send"],connectMethodsOrder:void 0,pay:!1},DEFAULT_SOCIALS:["google","x","farcaster","discord","apple","github","facebook"],DEFAULT_ACCOUNT_TYPES:{bip122:"payment",eip155:"smartAccount",polkadot:"eoa",solana:"eoa"},ADAPTER_TYPES:{UNIVERSAL:"universal",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5",BITCOIN:"bitcoin"}};var A={isMobile(){return this.isClient()?!!(typeof window?.matchMedia=="function"&&window?.matchMedia("(pointer:coarse)")?.matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(e,t=""){return e?.caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase())},isAndroid(){if(!this.isMobile())return!1;let e=window?.navigator.userAgent.toLowerCase();return A.isMobile()&&e.includes("android")},isIos(){if(!this.isMobile())return!1;let e=window?.navigator.userAgent.toLowerCase();return e.includes("iphone")||e.includes("ipad")},isSafari(){return this.isClient()?(window?.navigator.userAgent.toLowerCase()).includes("safari"):!1},isClient(){return typeof window<"u"},isPairingExpired(e){return e?e-Date.now()<=J.TEN_SEC_MS:!0},isAllowedRetry(e,t=J.ONE_SEC_MS){return Date.now()-e>=t},copyToClopboard(e){navigator.clipboard.writeText(e)},isIframe(){try{return window?.self!==window?.top}catch{return!1}},isSafeApp(){if(A.isClient()&&window.self!==window.top)try{let e=window?.location?.ancestorOrigins?.[0],t="https://app.safe.global";if(e){let r=new URL(e),n=new URL(t);return r.hostname===n.hostname}}catch{return!1}return!1},getPairingExpiry(){return Date.now()+J.FOUR_MINUTES_MS},getNetworkId(e){return e?.split(":")[1]},getPlainAddress(e){return e?.split(":")[2]},wait(e){return u(this,null,function*(){return new Promise(t=>{setTimeout(t,e)})})},debounce(e,t=500){let r;return(...n)=>{function o(){e(...n)}r&&clearTimeout(r),r=setTimeout(o,t)}},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl(e,t,r=null){if(A.isHttpUrl(e))return this.formatUniversalUrl(e,t);let n=e,o=r;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`),o&&!o?.endsWith("/")&&(o=`${o}/`),this.isTelegram()&&this.isAndroid()&&(t=encodeURIComponent(t));let s=encodeURIComponent(t);return{redirect:`${n}wc?uri=${s}`,redirectUniversalLink:o?`${o}wc?uri=${s}`:void 0,href:n}},formatUniversalUrl(e,t){if(!A.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);let n=encodeURIComponent(t);return{redirect:`${r}wc?uri=${n}`,href:r}},getOpenTargetForPlatform(e){return e==="popupWindow"?e:this.isTelegram()?w.getTelegramSocialProvider()?"_top":"_blank":e},openHref(e,t,r){window?.open(e,this.getOpenTargetForPlatform(t),r||"noreferrer noopener")},returnOpenHref(e,t,r){return window?.open(e,this.getOpenTargetForPlatform(t),r||"noreferrer noopener")},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},isPWA(){if(typeof window>"u")return!1;let e=window.matchMedia?.("(display-mode: standalone)")?.matches,t=window?.navigator?.standalone;return!!(e||t)},preloadImage(e){return u(this,null,function*(){let t=new Promise((r,n)=>{let o=new Image;o.onload=r,o.onerror=n,o.crossOrigin="anonymous",o.src=e});return Promise.race([t,A.wait(2e3)])})},formatBalance(e,t){let r="0.000";if(typeof e=="string"){let n=Number(e);if(n){let o=Math.floor(n*1e3)/1e3;o&&(r=o.toString())}}return`${r}${t?` ${t}`:""}`},formatBalance2(e,t){let r;if(e==="0")r="0";else if(typeof e=="string"){let n=Number(e);n&&(r=n.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return{value:r??"0",rest:r==="0"?"000":"",symbol:t}},getApiUrl(){return q.W3M_API_URL},getBlockchainApiUrl(){return q.BLOCKCHAIN_API_RPC_URL},getAnalyticsUrl(){return q.PULSE_API_URL},getUUID(){return crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{let t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})},parseError(e){return typeof e=="string"?e:typeof e?.issues?.[0]?.message=="string"?e.issues[0].message:e instanceof Error?e.message:"Unknown error"},sortRequestedNetworks(e,t=[]){let r={};return t&&e&&(e.forEach((n,o)=>{r[n]=o}),t.sort((n,o)=>{let s=r[n.id],a=r[o.id];return s!==void 0&&a!==void 0?s-a:s!==void 0?-1:a!==void 0?1:0})),t},calculateBalance(e){let t=0;for(let r of e)t+=r.value??0;return t},formatTokenBalance(e){let t=e.toFixed(2),[r,n]=t.split(".");return{dollars:r,pennies:n}},isAddress(e,t="eip155"){switch(t){case"eip155":if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)||/^(?:0x)?[0-9A-F]{40}$/iu.test(e))return!0}else return!1;return!1;case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);default:return!1}},uniqueBy(e,t){let r=new Set;return e.filter(n=>{let o=n[t];return r.has(o)?!1:(r.add(o),!0)})},generateSdkVersion(e,t,r){let o=e.length===0?J.ADAPTER_TYPES.UNIVERSAL:e.map(s=>s.adapterType).join(",");return`${t}-${o}-${r}`},createAccount(e,t,r,n,o){return{namespace:e,address:t,type:r,publicKey:n,path:o}},isCaipAddress(e){if(typeof e!="string")return!1;let t=e.split(":"),r=t[0];return t.filter(Boolean).length===3&&r in q.CHAIN_NAME_MAP},isMac(){let e=window?.navigator.userAgent.toLowerCase();return e.includes("macintosh")&&!e.includes("safari")},formatTelegramSocialLoginUrl(e){let t=`--${encodeURIComponent(window?.location.href)}`,r="state=";if(new URL(e).host==="auth.magic.link"){let o="provider_authorization_url=",s=e.substring(e.indexOf(o)+o.length),a=this.injectIntoUrl(decodeURIComponent(s),r,t);return e.replace(s,encodeURIComponent(a))}return this.injectIntoUrl(e,r,t)},injectIntoUrl(e,t,r){let n=e.indexOf(t);if(n===-1)throw new Error(`${t} parameter not found in the URL: ${e}`);let o=e.indexOf("&",n),s=t.length,a=o!==-1?o:e.length,l=e.substring(0,n+s),p=e.substring(n+s,a),c=e.substring(o),C=p+r;return l+C+c}};var xn=Symbol(),ar=Symbol();var xt=Object.getPrototypeOf,ht=new WeakMap,cr=e=>e&&(ht.has(e)?ht.get(e):xt(e)===Object.prototype||xt(e)===Array.prototype);var Ut=e=>cr(e)&&e[ar]||null,ft=(e,t=!0)=>{ht.set(e,t)};var gt=e=>typeof e=="object"&&e!==null,ye=new WeakMap,Qe=new WeakSet,lr=(e=Object.is,t=(c,C)=>new Proxy(c,C),r=c=>gt(c)&&!Qe.has(c)&&(Array.isArray(c)||!(Symbol.iterator in c))&&!(c instanceof WeakMap)&&!(c instanceof WeakSet)&&!(c instanceof Error)&&!(c instanceof Number)&&!(c instanceof Date)&&!(c instanceof String)&&!(c instanceof RegExp)&&!(c instanceof ArrayBuffer),n=c=>{switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:throw c}},o=new WeakMap,s=(c,C,h=n)=>{let z=o.get(c);if(z?.[0]===C)return z[1];let ee=Array.isArray(c)?[]:Object.create(Object.getPrototypeOf(c));return ft(ee,!0),o.set(c,[C,ee]),Reflect.ownKeys(c).forEach(Ce=>{if(Object.getOwnPropertyDescriptor(ee,Ce))return;let F=Reflect.get(c,Ce),{enumerable:Z}=Reflect.getOwnPropertyDescriptor(c,Ce),Y={value:F,enumerable:Z,configurable:!0};if(Qe.has(F))ft(F,!1);else if(F instanceof Promise)delete Y.value,Y.get=()=>h(F);else if(ye.has(F)){let[Re,Se]=ye.get(F);Y.value=s(Re,Se(),h)}Object.defineProperty(ee,Ce,Y)}),Object.preventExtensions(ee)},a=new WeakMap,l=[1,1],p=c=>{if(!gt(c))throw new Error("object required");let C=a.get(c);if(C)return C;let h=l[0],z=new Set,ee=(L,k=++l[0])=>{h!==k&&(h=k,z.forEach(O=>O(L,k)))},Ce=l[1],F=(L=++l[1])=>(Ce!==L&&!z.size&&(Ce=L,Y.forEach(([k])=>{let O=k[1](L);O>h&&(h=O)})),h),Z=L=>(k,O)=>{let re=[...k];re[1]=[L,...re[1]],ee(re,O)},Y=new Map,Re=(L,k)=>{if((import.meta.env?import.meta.env.MODE:void 0)!=="production"&&Y.has(L))throw new Error("prop listener already exists");if(z.size){let O=k[3](Z(L));Y.set(L,[k,O])}else Y.set(L,[k])},Se=L=>{var k;let O=Y.get(L);O&&(Y.delete(L),(k=O[1])==null||k.call(O))},Oe=L=>(z.add(L),z.size===1&&Y.forEach(([O,re],We)=>{if((import.meta.env?import.meta.env.MODE:void 0)!=="production"&&re)throw new Error("remove already exists");let Ye=O[3](Z(We));Y.set(We,[O,Ye])}),()=>{z.delete(L),z.size===0&&Y.forEach(([O,re],We)=>{re&&(re(),Y.set(We,[O]))})}),ct=Array.isArray(c)?[]:Object.create(Object.getPrototypeOf(c)),rt=t(ct,{deleteProperty(L,k){let O=Reflect.get(L,k);Se(k);let re=Reflect.deleteProperty(L,k);return re&&ee(["delete",[k],O]),re},set(L,k,O,re){let We=Reflect.has(L,k),Ye=Reflect.get(L,k,re);if(We&&(e(Ye,O)||a.has(O)&&e(Ye,a.get(O))))return!0;Se(k),gt(O)&&(O=Ut(O)||O);let nt=O;if(O instanceof Promise)O.then(Ne=>{O.status="fulfilled",O.value=Ne,ee(["resolve",[k],Ne])}).catch(Ne=>{O.status="rejected",O.reason=Ne,ee(["reject",[k],Ne])});else{!ye.has(O)&&r(O)&&(nt=p(O));let Ne=!Qe.has(nt)&&ye.get(nt);Ne&&Re(k,Ne)}return Reflect.set(L,k,nt,re),ee(["set",[k],O,Ye]),!0}});a.set(c,rt);let Gt=[ct,F,s,Oe];return ye.set(rt,Gt),Reflect.ownKeys(c).forEach(L=>{let k=Object.getOwnPropertyDescriptor(c,L);"value"in k&&(rt[L]=c[L],delete k.value,delete k.writable),Object.defineProperty(ct,L,k)}),rt})=>[p,ye,Qe,e,t,r,n,o,s,a,l],[ur]=lr();function S(e={}){return ur(e)}function W(e,t,r){let n=ye.get(e);(import.meta.env?import.meta.env.MODE:void 0)!=="production"&&!n&&console.warn("Please use proxy object");let o,s=[],a=n[3],l=!1,c=a(C=>{if(s.push(C),r){t(s.splice(0));return}o||(o=Promise.resolve().then(()=>{o=void 0,l&&t(s.splice(0))}))});return l=!0,()=>{l=!1,c()}}function we(e,t){let r=ye.get(e);(import.meta.env?import.meta.env.MODE:void 0)!=="production"&&!r&&console.warn("Please use proxy object");let[n,o,s]=r;return s(n,o(),t)}function de(e){return Qe.add(e),e}function U(e,t,r,n){let o=e[t];return W(e,()=>{let s=e[t];Object.is(o,s)||r(o=s)},n)}var Hn=Symbol();function Dt(e){let t=S({data:Array.from(e||[]),has(r){return this.data.some(n=>n[0]===r)},set(r,n){let o=this.data.find(s=>s[0]===r);return o?o[1]=n:this.data.push([r,n]),this},get(r){var n;return(n=this.data.find(o=>o[0]===r))==null?void 0:n[1]},delete(r){let n=this.data.findIndex(o=>o[0]===r);return n===-1?!1:(this.data.splice(n,1),!0)},clear(){this.data.splice(0)},get size(){return this.data.length},toJSON(){return new Map(this.data)},forEach(r){this.data.forEach(n=>{r(n[1],n[0],this)})},keys(){return this.data.map(r=>r[0]).values()},values(){return this.data.map(r=>r[1]).values()},entries(){return new Map(this.data).entries()},get[Symbol.toStringTag](){return"Map"},[Symbol.iterator](){return this.entries()}});return Object.defineProperties(t,{data:{enumerable:!1},size:{enumerable:!1},toJSON:{enumerable:!1}}),Object.seal(t),t}var Mt={getFeatureValue(e,t){let r=t?.[e];return r===void 0?J.DEFAULT_FEATURES[e]:r},filterSocialsByPlatform(e){if(!e||!e.length)return e;if(A.isTelegram()){if(A.isIos())return e.filter(t=>t!=="google");if(A.isMac())return e.filter(t=>t!=="x");if(A.isAndroid())return e.filter(t=>!["facebook","x"].includes(t))}return e}};var g=S({features:J.DEFAULT_FEATURES,projectId:"",sdkType:"appkit",sdkVersion:"html-wagmi-undefined",defaultAccountTypes:J.DEFAULT_ACCOUNT_TYPES,enableNetworkSwitch:!0,experimental_preferUniversalLinks:!1,remoteFeatures:{}}),_={state:g,subscribeKey(e,t){return U(g,e,t)},setOptions(e){Object.assign(g,e)},setRemoteFeatures(e){if(!e)return;let t=d(d({},g.remoteFeatures),e);g.remoteFeatures=t,g.remoteFeatures?.socials&&(g.remoteFeatures.socials=Mt.filterSocialsByPlatform(g.remoteFeatures.socials))},setFeatures(e){if(!e)return;g.features||(g.features=J.DEFAULT_FEATURES);let t=d(d({},g.features),e);g.features=t},setProjectId(e){g.projectId=e},setCustomRpcUrls(e){g.customRpcUrls=e},setAllWallets(e){g.allWallets=e},setIncludeWalletIds(e){g.includeWalletIds=e},setExcludeWalletIds(e){g.excludeWalletIds=e},setFeaturedWalletIds(e){g.featuredWalletIds=e},setTokens(e){g.tokens=e},setTermsConditionsUrl(e){g.termsConditionsUrl=e},setPrivacyPolicyUrl(e){g.privacyPolicyUrl=e},setCustomWallets(e){g.customWallets=e},setIsSiweEnabled(e){g.isSiweEnabled=e},setIsUniversalProvider(e){g.isUniversalProvider=e},setSdkVersion(e){g.sdkVersion=e},setMetadata(e){g.metadata=e},setDisableAppend(e){g.disableAppend=e},setEIP6963Enabled(e){g.enableEIP6963=e},setDebug(e){g.debug=e},setEnableWalletConnect(e){g.enableWalletConnect=e},setEnableWalletGuide(e){g.enableWalletGuide=e},setEnableAuthLogger(e){g.enableAuthLogger=e},setEnableWallets(e){g.enableWallets=e},setPreferUniversalLinks(e){g.experimental_preferUniversalLinks=e},setHasMultipleAddresses(e){g.hasMultipleAddresses=e},setSIWX(e){g.siwx=e},setConnectMethodsOrder(e){g.features=N(d({},g.features),{connectMethodsOrder:e})},setWalletFeaturesOrder(e){g.features=N(d({},g.features),{walletFeaturesOrder:e})},setSocialsOrder(e){g.remoteFeatures=N(d({},g.remoteFeatures),{socials:e})},setCollapseWallets(e){g.features=N(d({},g.features),{collapseWallets:e})},setEnableEmbedded(e){g.enableEmbedded=e},setAllowUnsupportedChain(e){g.allowUnsupportedChain=e},setManualWCControl(e){g.manualWCControl=e},setEnableNetworkSwitch(e){g.enableNetworkSwitch=e},setDefaultAccountTypes(e={}){Object.entries(e).forEach(([t,r])=>{r&&(g.defaultAccountTypes[t]=r)})},setUniversalProviderConfigOverride(e){g.universalProviderConfigOverride=e},getUniversalProviderConfigOverride(){return g.universalProviderConfigOverride},getSnapshot(){return we(g)}};function Ze(...e){return u(this,null,function*(){let t=yield fetch(...e);if(!t.ok)throw new Error(`HTTP status code: ${t.status}`,{cause:t});return t})}var me=class{constructor({baseUrl:t,clientId:r}){this.baseUrl=t,this.clientId=r}get(s){return u(this,null,function*(){var a=s,{headers:t,signal:r,cache:n}=a,o=ke(a,["headers","signal","cache"]);let l=this.createUrl(o);return(yield Ze(l,{method:"GET",headers:t,signal:r,cache:n})).json()})}getBlob(o){return u(this,null,function*(){var s=o,{headers:t,signal:r}=s,n=ke(s,["headers","signal"]);let a=this.createUrl(n);return(yield Ze(a,{method:"GET",headers:t,signal:r})).blob()})}post(s){return u(this,null,function*(){var a=s,{body:t,headers:r,signal:n}=a,o=ke(a,["body","headers","signal"]);let l=this.createUrl(o);return(yield Ze(l,{method:"POST",headers:r,body:t?JSON.stringify(t):void 0,signal:n})).json()})}put(s){return u(this,null,function*(){var a=s,{body:t,headers:r,signal:n}=a,o=ke(a,["body","headers","signal"]);let l=this.createUrl(o);return(yield Ze(l,{method:"PUT",headers:r,body:t?JSON.stringify(t):void 0,signal:n})).json()})}delete(s){return u(this,null,function*(){var a=s,{body:t,headers:r,signal:n}=a,o=ke(a,["body","headers","signal"]);let l=this.createUrl(o);return(yield Ze(l,{method:"DELETE",headers:r,body:t?JSON.stringify(t):void 0,signal:n})).json()})}createUrl({path:t,params:r}){let n=new URL(t,this.baseUrl);return r&&Object.entries(r).forEach(([o,s])=>{s&&n.searchParams.append(o,s)}),this.clientId&&n.searchParams.append("clientId",this.clientId),n}};var pr=Object.freeze({enabled:!0,events:[]}),dr=new me({baseUrl:A.getAnalyticsUrl(),clientId:null}),mr=5,hr=60*1e3,_e=S(d({},pr)),Lt={state:_e,subscribeKey(e,t){return U(_e,e,t)},sendError(e,t){return u(this,null,function*(){if(!_e.enabled)return;let r=Date.now();if(_e.events.filter(s=>{let a=new Date(s.properties.timestamp||"").getTime();return r-a<hr}).length>=mr)return;let o={type:"error",event:t,properties:{errorType:e.name,errorMessage:e.message,stackTrace:e.stack,timestamp:new Date().toISOString()}};_e.events.push(o);try{if(typeof window>"u")return;let{projectId:s,sdkType:a,sdkVersion:l}=_.state;yield dr.post({path:"/e",params:{projectId:s,st:a,sv:l||"html-wagmi-4.2.2"},body:{eventId:A.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:new Date().toISOString(),props:{type:"error",event:t,errorType:e.name,errorMessage:e.message,stackTrace:e.stack}}})}catch{}})},enable(){_e.enabled=!0},disable(){_e.enabled=!1},clearEvents(){_e.events=[]}};var je=class e extends Error{constructor(t,r,n){super(t),this.name="AppKitError",this.category=r,this.originalError=n,Object.setPrototypeOf(this,e.prototype);let o=!1;if(n instanceof Error&&typeof n.stack=="string"&&n.stack){let s=n.stack,a=s.indexOf(`
`);if(a>-1){let l=s.substring(a+1);this.stack=`${this.name}: ${this.message}
${l}`,o=!0}}o||(Error.captureStackTrace?Error.captureStackTrace(this,e):this.stack||(this.stack=`${this.name}: ${this.message}`))}};function Bt(e,t){let r=e instanceof je?e:new je(e instanceof Error?e.message:String(e),t,e);throw Lt.sendError(r,r.category),r}function $(e,t="INTERNAL_SDK_ERROR"){let r={};return Object.keys(e).forEach(n=>{let o=e[n];if(typeof o=="function"){let s=o;o.constructor.name==="AsyncFunction"?s=(...a)=>u(this,null,function*(){try{return yield o(...a)}catch(l){return Bt(l,t)}}):s=(...a)=>{try{return o(...a)}catch(l){return Bt(l,t)}},r[n]=s}else r[n]=o}),r}var ae=S({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),fr={state:ae,subscribeNetworkImages(e){return W(ae.networkImages,()=>e(ae.networkImages))},subscribeKey(e,t){return U(ae,e,t)},subscribe(e){return W(ae,()=>e(ae))},setWalletImage(e,t){ae.walletImages[e]=t},setNetworkImage(e,t){ae.networkImages[e]=t},setChainImage(e,t){ae.chainImages[e]=t},setConnectorImage(e,t){ae.connectorImages=N(d({},ae.connectorImages),{[e]:t})},setTokenImage(e,t){ae.tokenImages[e]=t},setCurrencyImage(e,t){ae.currencyImages[e]=t}},ne=$(fr);var gr={eip155:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"a1b58899-f671-4276-6a5e-56ca5bd59700",polkadot:"",bip122:"0b4838db-0161-4ffe-022d-532bf03dba00",cosmos:""},wt=S({networkImagePromises:{}}),Ct={fetchWalletImage(e){return u(this,null,function*(){if(e)return yield b._fetchWalletImage(e),this.getWalletImageById(e)})},fetchNetworkImage(e){return u(this,null,function*(){if(!e)return;let t=this.getNetworkImageById(e);return t||(wt.networkImagePromises[e]||(wt.networkImagePromises[e]=b._fetchNetworkImage(e)),yield wt.networkImagePromises[e],this.getNetworkImageById(e))})},getWalletImageById(e){if(e)return ne.state.walletImages[e]},getWalletImage(e){if(e?.image_url)return e?.image_url;if(e?.image_id)return ne.state.walletImages[e.image_id]},getNetworkImage(e){if(e?.assets?.imageUrl)return e?.assets?.imageUrl;if(e?.assets?.imageId)return ne.state.networkImages[e.assets.imageId]},getNetworkImageById(e){if(e)return ne.state.networkImages[e]},getConnectorImage(e){if(e?.imageUrl)return e.imageUrl;if(e?.imageId)return ne.state.connectorImages[e.imageId]},getChainImage(e){return ne.state.networkImages[gr[e]]}};var he={PHANTOM:{id:"a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",url:"https://phantom.app"},SOLFLARE:{id:"1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",url:"https://solflare.com"},COINBASE:{id:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",url:"https://go.cb-w.com"}},Ht={handleMobileDeeplinkRedirect(e,t){let r=window.location.href,n=encodeURIComponent(r);if(e===he.PHANTOM.id&&!("phantom"in window)){let o=r.startsWith("https")?"https":"http",s=r.split("/")[2],a=encodeURIComponent(`${o}://${s}`);window.location.href=`${he.PHANTOM.url}/ul/browse/${n}?ref=${a}`}e===he.SOLFLARE.id&&!("solflare"in window)&&(window.location.href=`${he.SOLFLARE.url}/ul/v1/browse/${n}?ref=${n}`),t===q.CHAIN.SOLANA&&e===he.COINBASE.id&&!("coinbaseSolana"in window)&&(window.location.href=`${he.COINBASE.url}/dapp?cb_url=${n}`)}};var He=Object.freeze({message:"",variant:"success",svg:void 0,open:!1,autoClose:!0}),Q=S(d({},He)),wr={state:Q,subscribeKey(e,t){return U(Q,e,t)},showLoading(e,t={}){this._showMessage(d({message:e,variant:"loading"},t))},showSuccess(e){this._showMessage({message:e,variant:"success"})},showSvg(e,t){this._showMessage({message:e,svg:t})},showError(e){let t=A.parseError(e);this._showMessage({message:t,variant:"error"})},hide(){Q.message=He.message,Q.variant=He.variant,Q.svg=He.svg,Q.open=He.open,Q.autoClose=He.autoClose},_showMessage({message:e,svg:t,variant:r="success",autoClose:n=He.autoClose}){Q.open?(Q.open=!1,setTimeout(()=>{Q.message=e,Q.variant=r,Q.svg=t,Q.open=!0,Q.autoClose=n},150)):(Q.message=e,Q.variant=r,Q.svg=t,Q.open=!0,Q.autoClose=n)}},te=wr;var Cr={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},Ft=A.getBlockchainApiUrl(),oe=S({clientId:null,api:new me({baseUrl:Ft,clientId:null}),supportedChains:{http:[],ws:[]}}),f={state:oe,get(e){return u(this,null,function*(){let{st:t,sv:r}=f.getSdkProperties(),n=_.state.projectId,o=N(d({},e.params||{}),{st:t,sv:r,projectId:n});return oe.api.get(N(d({},e),{params:o}))})},getSdkProperties(){let{sdkType:e,sdkVersion:t}=_.state;return{st:e||"unknown",sv:t||"unknown"}},isNetworkSupported(e){return u(this,null,function*(){if(!e)return!1;try{oe.supportedChains.http.length||(yield f.getSupportedNetworks())}catch{return!1}return oe.supportedChains.http.includes(e)})},getSupportedNetworks(){return u(this,null,function*(){try{let e=yield f.get({path:"v1/supported-chains"});return oe.supportedChains=e,e}catch{return oe.supportedChains}})},fetchIdentity(r){return u(this,arguments,function*({address:e,caipNetworkId:t}){if(!(yield f.isNetworkSupported(t)))return{avatar:"",name:""};let o=w.getIdentityFromCacheForAddress(e);if(o)return o;let s=yield f.get({path:`/v1/identity/${e}`,params:{sender:i.state.activeCaipAddress?A.getPlainAddress(i.state.activeCaipAddress):void 0}});return w.updateIdentityCache({address:e,identity:s,timestamp:Date.now()}),s})},fetchTransactions(a){return u(this,arguments,function*({account:e,cursor:t,onramp:r,signal:n,cache:o,chainId:s}){return(yield f.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId))?f.get({path:`/v1/account/${e}/history`,params:{cursor:t,onramp:r,chainId:s},signal:n,cache:o}):{data:[],next:void 0}})},fetchSwapQuote(s){return u(this,arguments,function*({amount:e,userAddress:t,from:r,to:n,gasPrice:o}){return(yield f.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId))?f.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{amount:e,userAddress:t,from:r,to:n,gasPrice:o}}):{quotes:[]}})},fetchSwapTokens(t){return u(this,arguments,function*({chainId:e}){return(yield f.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId))?f.get({path:"/v1/convert/tokens",params:{chainId:e}}):{tokens:[]}})},fetchTokenPrice(t){return u(this,arguments,function*({addresses:e}){return(yield f.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId))?oe.api.post({path:"/v1/fungible/price",body:{currency:"usd",addresses:e,projectId:_.state.projectId},headers:{"Content-Type":"application/json"}}):{fungibles:[]}})},fetchSwapAllowance(r){return u(this,arguments,function*({tokenAddress:e,userAddress:t}){return(yield f.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId))?f.get({path:"/v1/convert/allowance",params:{tokenAddress:e,userAddress:t},headers:{"Content-Type":"application/json"}}):{allowance:"0"}})},fetchGasPrice(t){return u(this,arguments,function*({chainId:e}){let{st:r,sv:n}=f.getSdkProperties();if(!(yield f.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId)))throw new Error("Network not supported for Gas Price");return f.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json"},params:{chainId:e,st:r,sv:n}})})},generateSwapCalldata(s){return u(this,arguments,function*({amount:e,from:t,to:r,userAddress:n,disableEstimate:o}){if(!(yield f.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId)))throw new Error("Network not supported for Swaps");return oe.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:e,eip155:{slippage:J.CONVERT_SLIPPAGE_TOLERANCE},projectId:_.state.projectId,from:t,to:r,userAddress:n,disableEstimate:o}})})},generateApproveCalldata(n){return u(this,arguments,function*({from:e,to:t,userAddress:r}){let{st:o,sv:s}=f.getSdkProperties();if(!(yield f.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId)))throw new Error("Network not supported for Swaps");return f.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json"},params:{userAddress:r,from:e,to:t,st:o,sv:s}})})},getBalance(e,t,r){return u(this,null,function*(){let{st:n,sv:o}=f.getSdkProperties();if(!(yield f.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId)))return te.showError("Token Balance Unavailable"),{balances:[]};let a=`${t}:${e}`,l=w.getBalanceCacheForCaipAddress(a);if(l)return l;let p=yield f.get({path:`/v1/account/${e}/balance`,params:{currency:"usd",chainId:t,forceUpdate:r,st:n,sv:o}});return w.updateBalanceCache({caipAddress:a,balance:p,timestamp:Date.now()}),p})},lookupEnsName(e){return u(this,null,function*(){return(yield f.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId))?f.get({path:`/v1/profile/account/${e}`,params:{apiVersion:"2"}}):{addresses:{},attributes:[]}})},reverseLookupEnsName(t){return u(this,arguments,function*({address:e}){return(yield f.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId))?f.get({path:`/v1/profile/reverse/${e}`,params:{sender:R.state.address,apiVersion:"2"}}):[]})},getEnsNameSuggestions(e){return u(this,null,function*(){return(yield f.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId))?f.get({path:`/v1/profile/suggestions/${e}`,params:{zone:"reown.id"}}):{suggestions:[]}})},registerEnsName(o){return u(this,arguments,function*({coinType:e,address:t,message:r,signature:n}){return(yield f.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId))?oe.api.post({path:"/v1/profile/account",body:{coin_type:e,address:t,message:r,signature:n},headers:{"Content-Type":"application/json"}}):{success:!1}})},generateOnRampURL(s){return u(this,arguments,function*({destinationWallets:e,partnerUserId:t,defaultNetwork:r,purchaseAmount:n,paymentAmount:o}){return(yield f.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId))?(yield oe.api.post({path:"/v1/generators/onrampurl",params:{projectId:_.state.projectId},body:{destinationWallets:e,defaultNetwork:r,partnerUserId:t,defaultExperience:"buy",presetCryptoAmount:n,presetFiatAmount:o}})).url:""})},getOnrampOptions(){return u(this,null,function*(){if(!(yield f.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId)))return{paymentCurrencies:[],purchaseCurrencies:[]};try{return yield f.get({path:"/v1/onramp/options"})}catch{return Cr}})},getOnrampQuote(o){return u(this,arguments,function*({purchaseCurrency:e,paymentCurrency:t,amount:r,network:n}){try{return(yield f.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId))?yield oe.api.post({path:"/v1/onramp/quote",params:{projectId:_.state.projectId},body:{purchaseCurrency:e,paymentCurrency:t,amount:r,network:n}}):null}catch{return{coinbaseFee:{amount:r,currency:t.id},networkFee:{amount:r,currency:t.id},paymentSubtotal:{amount:r,currency:t.id},paymentTotal:{amount:r,currency:t.id},purchaseAmount:{amount:r,currency:t.id},quoteId:"mocked-quote-id"}}})},getSmartSessions(e){return u(this,null,function*(){return(yield f.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId))?f.get({path:`/v1/sessions/${e}`}):[]})},revokeSmartSession(e,t,r){return u(this,null,function*(){return(yield f.isNetworkSupported(i.state.activeCaipNetwork?.caipNetworkId))?oe.api.post({path:`/v1/sessions/${e}/revoke`,params:{projectId:_.state.projectId},body:{pci:t,signature:r}}):{success:!1}})},setClientId(e){oe.clientId=e,oe.api=new me({baseUrl:Ft,clientId:e})}};var ue=S({currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]}),br={state:ue,replaceState(e){e&&Object.assign(ue,de(e))},subscribe(e){return i.subscribeChainProp("accountState",t=>{if(t)return e(t)})},subscribeKey(e,t,r){let n;return i.subscribeChainProp("accountState",o=>{if(o){let s=o[e];n!==s&&(n=s,t(s))}},r)},setStatus(e,t){i.setAccountProp("status",e,t)},getCaipAddress(e){return i.getAccountProp("caipAddress",e)},setCaipAddress(e,t){let r=e?A.getPlainAddress(e):void 0;t===i.state.activeChain&&(i.state.activeCaipAddress=e),i.setAccountProp("caipAddress",e,t),i.setAccountProp("address",r,t)},setBalance(e,t,r){i.setAccountProp("balance",e,r),i.setAccountProp("balanceSymbol",t,r)},setProfileName(e,t){i.setAccountProp("profileName",e,t)},setProfileImage(e,t){i.setAccountProp("profileImage",e,t)},setUser(e,t){i.setAccountProp("user",e,t)},setAddressExplorerUrl(e,t){i.setAccountProp("addressExplorerUrl",e,t)},setSmartAccountDeployed(e,t){i.setAccountProp("smartAccountDeployed",e,t)},setCurrentTab(e){i.setAccountProp("currentTab",e,i.state.activeChain)},setTokenBalance(e,t){e&&i.setAccountProp("tokenBalance",e,t)},setShouldUpdateToAddress(e,t){i.setAccountProp("shouldUpdateToAddress",e,t)},setAllAccounts(e,t){i.setAccountProp("allAccounts",e,t)},addAddressLabel(e,t,r){let n=i.getAccountProp("addressLabels",r)||new Map;n.set(e,t),i.setAccountProp("addressLabels",n,r)},removeAddressLabel(e,t){let r=i.getAccountProp("addressLabels",t)||new Map;r.delete(e),i.setAccountProp("addressLabels",r,t)},setConnectedWalletInfo(e,t){i.setAccountProp("connectedWalletInfo",e,t,!1)},setPreferredAccountType(e,t){i.setAccountProp("preferredAccountTypes",N(d({},ue.preferredAccountTypes),{[t]:e}),t)},setPreferredAccountTypes(e){ue.preferredAccountTypes=e},setSocialProvider(e,t){e&&i.setAccountProp("socialProvider",e,t)},setSocialWindow(e,t){i.setAccountProp("socialWindow",e?de(e):void 0,t)},setFarcasterUrl(e,t){i.setAccountProp("farcasterUrl",e,t)},fetchTokenBalance(e){return u(this,null,function*(){ue.balanceLoading=!0;let t=i.state.activeCaipNetwork?.caipNetworkId,r=i.state.activeCaipNetwork?.chainNamespace,n=i.state.activeCaipAddress,o=n?A.getPlainAddress(n):void 0;if(ue.lastRetry&&!A.isAllowedRetry(ue.lastRetry,30*J.ONE_SEC_MS))return ue.balanceLoading=!1,[];try{if(o&&t&&r){let a=(yield f.getBalance(o,t)).balances.filter(l=>l.quantity.decimals!=="0");return R.setTokenBalance(a,r),ue.lastRetry=void 0,ue.balanceLoading=!1,a}}catch(s){ue.lastRetry=Date.now(),e?.(s),te.showError("Token Balance Unavailable")}finally{ue.balanceLoading=!1}return[]})},resetAccount(e){i.resetAccount(e)}},R=$(br);var Wt={onSwitchNetwork({network:e,ignoreSwitchConfirmation:t=!1}){let r=i.state.activeCaipNetwork,n=E.state.data;if(e.id===r?.id)return;let s=R.getCaipAddress(i.state.activeChain),a=e.chainNamespace!==i.state.activeChain,l=R.getCaipAddress(e.chainNamespace),c=v.getConnectorId(i.state.activeChain)===q.CONNECTOR_ID.AUTH,C=q.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(h=>h===e.chainNamespace);t||c&&C?E.push("SwitchNetwork",N(d({},n),{network:e})):s&&a&&!l?E.push("SwitchActiveChain",{switchToChain:e.chainNamespace,navigateTo:"Connect",navigateWithReplace:!0,network:e}):E.push("SwitchNetwork",N(d({},n),{network:e}))}};var Ie=S({message:"",variant:"info",open:!1}),Er={state:Ie,subscribeKey(e,t){return U(Ie,e,t)},open(e,t){let{debug:r}=_.state,{shortMessage:n,longMessage:o}=e;r&&(Ie.message=n,Ie.variant=t,Ie.open=!0),o&&console.error(typeof o=="function"?o():o)},close(){Ie.open=!1,Ie.message="",Ie.variant="info"}},bt=$(Er);var vr=A.getAnalyticsUrl(),Ar=new me({baseUrl:vr,clientId:null}),Sr=["MODAL_CREATED"],be=S({timestamp:Date.now(),reportedErrors:{},data:{type:"track",event:"MODAL_CREATED"}}),K={state:be,subscribe(e){return W(be,()=>e(be))},getSdkProperties(){let{projectId:e,sdkType:t,sdkVersion:r}=_.state;return{projectId:e,st:t,sv:r||"html-wagmi-4.2.2"}},_sendAnalyticsEvent(e){return u(this,null,function*(){try{let t=R.state.address;if(Sr.includes(e.data.event)||typeof window>"u")return;yield Ar.post({path:"/e",params:K.getSdkProperties(),body:{eventId:A.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:N(d({},e.data),{address:t})}}),be.reportedErrors.FORBIDDEN=!1}catch(t){t instanceof Error&&t.cause instanceof Response&&t.cause.status===q.HTTP_STATUS_CODES.FORBIDDEN&&!be.reportedErrors.FORBIDDEN&&(bt.open({shortMessage:"Invalid App Configuration",longMessage:`Origin ${Be()?window.origin:"uknown"} not found on Allowlist - update configuration on cloud.reown.com`},"error"),be.reportedErrors.FORBIDDEN=!0)}})},sendEvent(e){be.timestamp=Date.now(),be.data=e,_.state.features?.analytics&&K._sendAnalyticsEvent(be)}};var qe=S({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0,initialized:!1}),Ee={state:qe,subscribe(e){return W(qe,()=>e(qe))},subscribeOpen(e){return U(qe,"open",e)},set(e){Object.assign(qe,d(d({},qe),e))}};var se=S({loading:!1,loadingNamespaceMap:new Map,open:!1,shake:!1,namespace:void 0}),Nr={state:se,subscribe(e){return W(se,()=>e(se))},subscribeKey(e,t){return U(se,e,t)},open(e){return u(this,null,function*(){let t=R.state.status==="connected",r=e?.namespace,n=i.state.activeChain,o=r&&r!==n,s=i.getAccountData(e?.namespace)?.caipAddress;if(I.state.wcBasic?b.prefetch({fetchNetworkImages:!1,fetchConnectorImages:!1}):yield b.prefetch({fetchConnectorImages:!t,fetchFeaturedWallets:!t,fetchRecommendedWallets:!t}),v.setFilterByNamespace(e?.namespace),X.setLoading(!0,r),r&&o){let a=i.getNetworkData(r)?.caipNetwork||i.getRequestedCaipNetworks(r)[0];a&&Wt.onSwitchNetwork({network:a,ignoreSwitchConfirmation:!0})}else{let a=i.state.noAdapters;_.state.manualWCControl||a&&!s?A.isMobile()?E.reset("AllWallets"):E.reset("ConnectingWalletConnectBasic"):e?.view?E.reset(e.view,e.data):s?E.reset("Account"):E.reset("Connect")}se.open=!0,Ee.set({open:!0}),K.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:!!s}})})},close(){let e=_.state.enableEmbedded,t=!!i.state.activeCaipAddress;se.open&&K.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:t}}),se.open=!1,E.reset("Connect"),X.clearLoading(),e?t?E.replace("Account"):E.push("Connect"):Ee.set({open:!1}),I.resetUri()},setLoading(e,t){t&&se.loadingNamespaceMap.set(t,e),se.loading=e,Ee.set({loading:e})},clearLoading(){se.loadingNamespaceMap.clear(),se.loading=!1},shake(){se.shake||(se.shake=!0,setTimeout(()=>{se.shake=!1},500))}},X=$(Nr);var j=S({view:"Connect",history:["Connect"],transactionStack:[]}),yr={state:j,subscribeKey(e,t){return U(j,e,t)},pushTransactionStack(e){j.transactionStack.push(e)},popTransactionStack(e){let t=j.transactionStack.pop();if(!t)return;let{onSuccess:r,onError:n,onCancel:o}=t;switch(e){case"success":r?.();break;case"error":n?.(),E.goBack();break;case"cancel":o?.(),E.goBack();break;default:}},push(e,t){e!==j.view&&(j.view=e,j.history.push(e),j.data=t)},reset(e,t){j.view=e,j.history=[e],j.data=t},replace(e,t){j.history.at(-1)===e||(j.view=e,j.history[j.history.length-1]=e,j.data=t)},goBack(){let e=i.state.activeCaipAddress,t=E.state.view==="ConnectingFarcaster",r=!e&&t;if(j.history.length>1){j.history.pop();let[n]=j.history.slice(-1);n&&(e&&n==="Connect"?j.view="Account":j.view=n)}else X.close();j.data?.wallet&&(j.data.wallet=void 0),setTimeout(()=>{if(r){R.setFarcasterUrl(void 0,i.state.activeChain);let n=v.getAuthConnector();n?.provider?.reload();let o=we(_.state);n?.provider?.syncDappData?.({metadata:o.metadata,sdkVersion:o.sdkVersion,projectId:o.projectId,sdkType:o.sdkType})}},100)},goBackToIndex(e){if(j.history.length>1){j.history=j.history.slice(0,e+1);let[t]=j.history.slice(-1);t&&(j.view=t)}},goBackOrCloseModal(){E.state.history.length>1?E.goBack():X.close()}},E=$(yr);var ve=S({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),Et={state:ve,subscribe(e){return W(ve,()=>e(ve))},setThemeMode(e){ve.themeMode=e;try{let t=v.getAuthConnector();if(t){let r=Et.getSnapshot().themeVariables;t.provider.syncTheme({themeMode:e,themeVariables:r,w3mThemeVariables:le(r,e)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(e){ve.themeVariables=d(d({},ve.themeVariables),e);try{let t=v.getAuthConnector();if(t){let r=Et.getSnapshot().themeVariables;t.provider.syncTheme({themeVariables:r,w3mThemeVariables:le(ve.themeVariables,ve.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot(){return we(ve)}},Ke=$(Et);var $t={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0,cosmos:void 0},D=S({allConnectors:[],connectors:[],activeConnector:void 0,filterByNamespace:void 0,activeConnectorIds:d({},$t),filterByNamespaceMap:{eip155:!0,solana:!0,polkadot:!0,bip122:!0,cosmos:!0}}),_r={state:D,subscribe(e){return W(D,()=>{e(D)})},subscribeKey(e,t){return U(D,e,t)},initialize(e){e.forEach(t=>{let r=w.getConnectedConnectorId(t);r&&v.setConnectorId(r,t)})},setActiveConnector(e){e&&(D.activeConnector=de(e))},setConnectors(e){e.filter(o=>!D.allConnectors.some(s=>s.id===o.id&&v.getConnectorName(s.name)===v.getConnectorName(o.name)&&s.chain===o.chain)).forEach(o=>{o.type!=="MULTI_CHAIN"&&D.allConnectors.push(de(o))});let r=v.getEnabledNamespaces(),n=v.getEnabledConnectors(r);D.connectors=v.mergeMultiChainConnectors(n)},filterByNamespaces(e){Object.keys(D.filterByNamespaceMap).forEach(t=>{D.filterByNamespaceMap[t]=!1}),e.forEach(t=>{D.filterByNamespaceMap[t]=!0}),v.updateConnectorsForEnabledNamespaces()},filterByNamespace(e,t){D.filterByNamespaceMap[e]=t,v.updateConnectorsForEnabledNamespaces()},updateConnectorsForEnabledNamespaces(){let e=v.getEnabledNamespaces(),t=v.getEnabledConnectors(e),r=v.areAllNamespacesEnabled();D.connectors=v.mergeMultiChainConnectors(t),r?b.clearFilterByNamespaces():b.filterByNamespaces(e)},getEnabledNamespaces(){return Object.entries(D.filterByNamespaceMap).filter(([e,t])=>t).map(([e])=>e)},getEnabledConnectors(e){return D.allConnectors.filter(t=>e.includes(t.chain))},areAllNamespacesEnabled(){return Object.values(D.filterByNamespaceMap).every(e=>e)},mergeMultiChainConnectors(e){let t=v.generateConnectorMapByName(e),r=[];return t.forEach(n=>{let o=n[0],s=o?.id===q.CONNECTOR_ID.AUTH;n.length>1&&o?r.push({name:o.name,imageUrl:o.imageUrl,imageId:o.imageId,connectors:[...n],type:s?"AUTH":"MULTI_CHAIN",chain:"eip155",id:o?.id||""}):o&&r.push(o)}),r},generateConnectorMapByName(e){let t=new Map;return e.forEach(r=>{let{name:n}=r,o=v.getConnectorName(n);if(!o)return;let s=t.get(o)||[];s.find(l=>l.chain===r.chain)||s.push(r),t.set(o,s)}),t},getConnectorName(e){return e&&({"Trust Wallet":"Trust"}[e]||e)},getUniqueConnectorsByName(e){let t=[];return e.forEach(r=>{t.find(n=>n.chain===r.chain)||t.push(r)}),t},addConnector(e){if(e.id===q.CONNECTOR_ID.AUTH){let t=e,r=we(_.state),n=Ke.getSnapshot().themeMode,o=Ke.getSnapshot().themeVariables;t?.provider?.syncDappData?.({metadata:r.metadata,sdkVersion:r.sdkVersion,projectId:r.projectId,sdkType:r.sdkType}),t?.provider?.syncTheme({themeMode:n,themeVariables:o,w3mThemeVariables:le(o,n)}),v.setConnectors([e])}else v.setConnectors([e])},getAuthConnector(e){let t=e||i.state.activeChain,r=D.connectors.find(n=>n.id===q.CONNECTOR_ID.AUTH);if(r)return r?.connectors?.length?r.connectors.find(o=>o.chain===t):r},getAnnouncedConnectorRdns(){return D.connectors.filter(e=>e.type==="ANNOUNCED").map(e=>e.info?.rdns)},getConnectorById(e){return D.allConnectors.find(t=>t.id===e)},getConnector(e,t){return D.allConnectors.filter(n=>n.chain===i.state.activeChain).find(n=>n.explorerId===e||n.info?.rdns===t)},syncIfAuthConnector(e){if(e.id!=="ID_AUTH")return;let t=e,r=we(_.state),n=Ke.getSnapshot().themeMode,o=Ke.getSnapshot().themeVariables;t?.provider?.syncDappData?.({metadata:r.metadata,sdkVersion:r.sdkVersion,sdkType:r.sdkType,projectId:r.projectId}),t.provider.syncTheme({themeMode:n,themeVariables:o,w3mThemeVariables:le(o,n)})},getConnectorsByNamespace(e){let t=D.allConnectors.filter(r=>r.chain===e);return v.mergeMultiChainConnectors(t)},selectWalletConnector(e){let t=v.getConnector(e.id,e.rdns),r=i.state.activeChain;Ht.handleMobileDeeplinkRedirect(t?.explorerId||e.id,r),t?E.push("ConnectingExternal",{connector:t}):E.push("ConnectingWalletConnect",{wallet:e})},getConnectors(e){return e?v.getConnectorsByNamespace(e):v.mergeMultiChainConnectors(D.allConnectors)},setFilterByNamespace(e){D.filterByNamespace=e,D.connectors=v.getConnectors(e),b.setFilterByNamespace(e)},setConnectorId(e,t){e&&(D.activeConnectorIds=N(d({},D.activeConnectorIds),{[t]:e}),w.setConnectedConnectorId(t,e))},removeConnectorId(e){D.activeConnectorIds=N(d({},D.activeConnectorIds),{[e]:void 0}),w.deleteConnectedConnectorId(e)},getConnectorId(e){if(e)return D.activeConnectorIds[e]},isConnected(e){return e?!!D.activeConnectorIds[e]:Object.values(D.activeConnectorIds).some(t=>!!t)},resetConnectorIds(){D.activeConnectorIds=d({},$t)}},v=$(_r);var Ir="https://secure.walletconnect.org/sdk",ci=(typeof process<"u"&&typeof process.env<"u"?process.env.NEXT_PUBLIC_SECURE_SITE_SDK_URL:void 0)||Ir,li=(typeof process<"u"&&typeof process.env<"u"?process.env.NEXT_PUBLIC_DEFAULT_LOG_LEVEL:void 0)||"error",ui=(typeof process<"u"&&typeof process.env<"u"?process.env.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION:void 0)||"4";var Ae={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints","wallet_getAssets"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","wallet_revokePermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}};var V=S({transactions:[],coinbaseTransactions:{},transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),Tr={state:V,subscribe(e){return W(V,()=>e(V))},setLastNetworkInView(e){V.lastNetworkInView=e},fetchTransactions(e,t){return u(this,null,function*(){if(!e)throw new Error("Transactions can't be fetched without an accountAddress");V.loading=!0;try{let r=yield f.fetchTransactions({account:e,cursor:V.next,onramp:t,cache:t==="coinbase"?"no-cache":void 0,chainId:i.state.activeCaipNetwork?.caipNetworkId}),n=Ve.filterSpamTransactions(r.data),o=Ve.filterByConnectedChain(n),s=[...V.transactions,...o];V.loading=!1,t==="coinbase"?V.coinbaseTransactions=Ve.groupTransactionsByYearAndMonth(V.coinbaseTransactions,r.data):(V.transactions=s,V.transactionsByYear=Ve.groupTransactionsByYearAndMonth(V.transactionsByYear,o)),V.empty=s.length===0,V.next=r.next?r.next:void 0}catch{let n=i.state.activeChain;K.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:_.state.projectId,cursor:V.next,isSmartAccount:R.state.preferredAccountTypes?.[n]===Ae.ACCOUNT_TYPES.SMART_ACCOUNT}}),te.showError("Failed to fetch transactions"),V.loading=!1,V.empty=!0,V.next=void 0}})},groupTransactionsByYearAndMonth(e={},t=[]){let r=e;return t.forEach(n=>{let o=new Date(n.metadata.minedAt).getFullYear(),s=new Date(n.metadata.minedAt).getMonth(),a=r[o]??{},p=(a[s]??[]).filter(c=>c.id!==n.id);r[o]=N(d({},a),{[s]:[...p,n].sort((c,C)=>new Date(C.metadata.minedAt).getTime()-new Date(c.metadata.minedAt).getTime())})}),r},filterSpamTransactions(e){return e.filter(t=>!t.transfers.every(n=>n.nft_info?.flags.is_spam===!0))},filterByConnectedChain(e){let t=i.state.activeCaipNetwork?.caipNetworkId;return e.filter(n=>n.metadata.chain===t)},clearCursor(){V.next=void 0},resetTransactions(){V.transactions=[],V.transactionsByYear={},V.lastNetworkInView=void 0,V.loading=!1,V.empty=!1,V.next=void 0}},Ve=$(Tr,"API_ERROR");var G=S({connections:new Map,wcError:!1,buffering:!1,status:"disconnected"}),Fe,Pr={state:G,subscribeKey(e,t){return U(G,e,t)},_getClient(){return G._client},setClient(e){G._client=de(e)},connectWalletConnect(){return u(this,null,function*(){if(A.isTelegram()||A.isSafari()&&A.isIos()){if(Fe){yield Fe,Fe=void 0;return}if(!A.isPairingExpired(G?.wcPairingExpiry)){let e=G.wcUri;G.wcUri=e;return}Fe=I._getClient()?.connectWalletConnect?.().catch(()=>{}),I.state.status="connecting",yield Fe,Fe=void 0,G.wcPairingExpiry=void 0,I.state.status="connected"}else yield I._getClient()?.connectWalletConnect?.()})},connectExternal(e,t,r=!0){return u(this,null,function*(){yield I._getClient()?.connectExternal?.(e),r&&i.setActiveNamespace(t)})},reconnectExternal(e){return u(this,null,function*(){yield I._getClient()?.reconnectExternal?.(e);let t=e.chain||i.state.activeChain;t&&v.setConnectorId(e.id,t)})},setPreferredAccountType(e,t){return u(this,null,function*(){X.setLoading(!0,i.state.activeChain);let r=v.getAuthConnector();r&&(R.setPreferredAccountType(e,t),yield r.provider.setPreferredAccount(e),w.setPreferredAccountTypes(R.state.preferredAccountTypes??{[t]:e}),yield I.reconnectExternal(r),X.setLoading(!1,i.state.activeChain),K.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:e,network:i.state.activeCaipNetwork?.caipNetworkId||""}}))})},signMessage(e){return u(this,null,function*(){return I._getClient()?.signMessage(e)})},parseUnits(e,t){return I._getClient()?.parseUnits(e,t)},formatUnits(e,t){return I._getClient()?.formatUnits(e,t)},sendTransaction(e){return u(this,null,function*(){return I._getClient()?.sendTransaction(e)})},getCapabilities(e){return u(this,null,function*(){return I._getClient()?.getCapabilities(e)})},grantPermissions(e){return u(this,null,function*(){return I._getClient()?.grantPermissions(e)})},walletGetAssets(e){return u(this,null,function*(){return I._getClient()?.walletGetAssets(e)??{}})},estimateGas(e){return u(this,null,function*(){return I._getClient()?.estimateGas(e)})},writeContract(e){return u(this,null,function*(){return I._getClient()?.writeContract(e)})},getEnsAddress(e){return u(this,null,function*(){return I._getClient()?.getEnsAddress(e)})},getEnsAvatar(e){return u(this,null,function*(){return I._getClient()?.getEnsAvatar(e)})},checkInstalled(e){return I._getClient()?.checkInstalled?.(e)||!1},resetWcConnection(){G.wcUri=void 0,G.wcPairingExpiry=void 0,G.wcLinking=void 0,G.recentWallet=void 0,G.status="disconnected",Ve.resetTransactions(),w.deleteWalletConnectDeepLink()},resetUri(){G.wcUri=void 0,G.wcPairingExpiry=void 0,Fe=void 0},finalizeWcConnection(){let{wcLinking:e,recentWallet:t}=I.state;e&&w.setWalletConnectDeepLink(e),t&&w.setAppKitRecent(t),K.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:E.state.data?.wallet?.name||"Unknown"}})},setWcBasic(e){G.wcBasic=e},setUri(e){G.wcUri=e,G.wcPairingExpiry=A.getPairingExpiry()},setWcLinking(e){G.wcLinking=e},setWcError(e){G.wcError=e,G.buffering=!1},setRecentWallet(e){G.recentWallet=e},setBuffering(e){G.buffering=e},setStatus(e){G.status=e},disconnect(e){return u(this,null,function*(){try{yield I._getClient()?.disconnect(e)}catch(t){throw new je("Failed to disconnect","INTERNAL_SDK_ERROR",t)}})},setConnections(e,t){G.connections.set(t,e)},switchAccount({connection:e,address:t,namespace:r}){if(v.state.activeConnectorIds[r]===e.connectorId){let s=i.state.activeCaipNetwork;if(s){let a=`${r}:${s.id}:${t}`;R.setCaipAddress(a,r)}else console.warn(`No current network found for namespace "${r}"`)}else{let s=v.getConnector(e.connectorId);s?I.connectExternal(s,r):console.warn(`No connector found for namespace "${r}"`)}}},I=$(Pr);var st={createBalance(e,t){let r={name:e.metadata.name||"",symbol:e.metadata.symbol||"",decimals:e.metadata.decimals||0,value:e.metadata.value||0,price:e.metadata.price||0,iconUrl:e.metadata.iconUrl||""};return{name:r.name,symbol:r.symbol,chainId:t,address:e.address==="native"?void 0:this.convertAddressToCAIP10Address(e.address,t),value:r.value,price:r.price,quantity:{decimals:r.decimals.toString(),numeric:this.convertHexToBalance({hex:e.balance,decimals:r.decimals})},iconUrl:r.iconUrl}},convertHexToBalance({hex:e,decimals:t}){return yt(BigInt(e),t)},convertAddressToCAIP10Address(e,t){return`${t}:${e}`},createCAIP2ChainId(e,t){return`${t}:${parseInt(e,16)}`},getChainIdHexFromCAIP2ChainId(e){let t=e.split(":");if(t.length<2||!t[1])return"0x0";let r=t[1],n=parseInt(r,10);return isNaN(n)?"0x0":`0x${n.toString(16)}`},isWalletGetAssetsResponse(e){return typeof e!="object"||e===null?!1:Object.values(e).every(t=>Array.isArray(t)&&t.every(r=>this.isValidAsset(r)))},isValidAsset(e){return typeof e=="object"&&e!==null&&typeof e.address=="string"&&typeof e.balance=="string"&&(e.type==="ERC20"||e.type==="NATIVE")&&typeof e.metadata=="object"&&e.metadata!==null&&typeof e.metadata.name=="string"&&typeof e.metadata.symbol=="string"&&typeof e.metadata.decimals=="number"&&typeof e.metadata.price=="number"&&typeof e.metadata.iconUrl=="string"}};var vt={getMyTokensWithBalance(e){return u(this,null,function*(){let t=R.state.address,r=i.state.activeCaipNetwork;if(!t||!r)return[];if(r.chainNamespace==="eip155"){let o=yield this.getEIP155Balances(t,r);if(o)return this.filterLowQualityTokens(o)}let n=yield f.getBalance(t,r.caipNetworkId,e);return this.filterLowQualityTokens(n.balances)})},getEIP155Balances(e,t){return u(this,null,function*(){try{let r=st.getChainIdHexFromCAIP2ChainId(t.caipNetworkId);if(!(yield I.getCapabilities(e))?.[r]?.assetDiscovery?.supported)return null;let o=yield I.walletGetAssets({account:e,chainFilter:[r]});return st.isWalletGetAssetsResponse(o)?(o[r]||[]).map(a=>st.createBalance(a,t.caipNetworkId)):null}catch{return null}})},filterLowQualityTokens(e){return e.filter(t=>t.quantity.decimals!=="0")},mapBalancesToSwapTokens(e){return e?.map(t=>N(d({},t),{address:t?.address?t.address:i.getActiveNetworkTokenAddress(),decimals:parseInt(t.quantity.decimals,10),logoUri:t.iconUrl,eip2612:!1}))||[]}};var H=S({tokenBalances:[],loading:!1}),Rr={state:H,subscribe(e){return W(H,()=>e(H))},subscribeKey(e,t){return U(H,e,t)},setToken(e){e&&(H.token=de(e))},setTokenAmount(e){H.sendTokenAmount=e},setReceiverAddress(e){H.receiverAddress=e},setReceiverProfileImageUrl(e){H.receiverProfileImageUrl=e},setReceiverProfileName(e){H.receiverProfileName=e},setNetworkBalanceInUsd(e){H.networkBalanceInUSD=e},setLoading(e){H.loading=e},sendToken(){return u(this,null,function*(){try{switch(M.setLoading(!0),i.state.activeCaipNetwork?.chainNamespace){case"eip155":yield M.sendEvmToken();return;case"solana":yield M.sendSolanaToken();return;default:throw new Error("Unsupported chain")}}finally{M.setLoading(!1)}})},sendEvmToken(){return u(this,null,function*(){let e=i.state.activeChain,t=R.state.preferredAccountTypes?.[e];if(!M.state.sendTokenAmount||!M.state.receiverAddress)throw new Error("An amount and receiver address are required");if(!M.state.token)throw new Error("A token is required");M.state.token?.address?(K.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:t===Ae.ACCOUNT_TYPES.SMART_ACCOUNT,token:M.state.token.address,amount:M.state.sendTokenAmount,network:i.state.activeCaipNetwork?.caipNetworkId||""}}),yield M.sendERC20Token({receiverAddress:M.state.receiverAddress,tokenAddress:M.state.token.address,sendTokenAmount:M.state.sendTokenAmount,decimals:M.state.token.quantity.decimals})):(K.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:t===Ae.ACCOUNT_TYPES.SMART_ACCOUNT,token:M.state.token.symbol||"",amount:M.state.sendTokenAmount,network:i.state.activeCaipNetwork?.caipNetworkId||""}}),yield M.sendNativeToken({receiverAddress:M.state.receiverAddress,sendTokenAmount:M.state.sendTokenAmount,decimals:M.state.token.quantity.decimals}))})},fetchTokenBalance(e){return u(this,null,function*(){H.loading=!0;let t=i.state.activeCaipNetwork?.caipNetworkId,r=i.state.activeCaipNetwork?.chainNamespace,n=i.state.activeCaipAddress,o=n?A.getPlainAddress(n):void 0;if(H.lastRetry&&!A.isAllowedRetry(H.lastRetry,30*J.ONE_SEC_MS))return H.loading=!1,[];try{if(o&&t&&r){let s=yield vt.getMyTokensWithBalance();return H.tokenBalances=s,H.lastRetry=void 0,s}}catch(s){H.lastRetry=Date.now(),e?.(s),te.showError("Token Balance Unavailable")}finally{H.loading=!1}return[]})},fetchNetworkBalance(){if(H.tokenBalances.length===0)return;let e=vt.mapBalancesToSwapTokens(H.tokenBalances);if(!e)return;let t=e.find(r=>r.address===i.getActiveNetworkTokenAddress());t&&(H.networkBalanceInUSD=t?ut.multiply(t.quantity.numeric,t.price).toString():"0")},sendNativeToken(e){return u(this,null,function*(){E.pushTransactionStack({});let t=e.receiverAddress,r=R.state.address,n=I.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));yield I.sendTransaction({chainNamespace:"eip155",to:t,address:r,data:"0x",value:n??BigInt(0)}),K.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:R.state.preferredAccountTypes?.eip155===Ae.ACCOUNT_TYPES.SMART_ACCOUNT,token:M.state.token?.symbol||"",amount:e.sendTokenAmount,network:i.state.activeCaipNetwork?.caipNetworkId||""}}),I._getClient()?.updateBalance("eip155"),M.resetSend()})},sendERC20Token(e){return u(this,null,function*(){E.pushTransactionStack({onSuccess(){E.replace("Account")}});let t=I.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));if(R.state.address&&e.sendTokenAmount&&e.receiverAddress&&e.tokenAddress){let r=A.getPlainAddress(e.tokenAddress);yield I.writeContract({fromAddress:R.state.address,tokenAddress:r,args:[e.receiverAddress,t??BigInt(0)],method:"transfer",abi:pt.getERC20Abi(r),chainNamespace:"eip155"}),M.resetSend()}})},sendSolanaToken(){return u(this,null,function*(){if(!M.state.sendTokenAmount||!M.state.receiverAddress)throw new Error("An amount and receiver address are required");E.pushTransactionStack({onSuccess(){E.replace("Account")}}),yield I.sendTransaction({chainNamespace:"solana",to:M.state.receiverAddress,value:M.state.sendTokenAmount}),I._getClient()?.updateBalance("solana"),M.resetSend()})},resetSend(){H.token=void 0,H.sendTokenAmount=void 0,H.receiverAddress=void 0,H.receiverProfileImageUrl=void 0,H.receiverProfileName=void 0,H.loading=!1,H.tokenBalances=[]}},M=$(Rr);var At={currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[],user:void 0},it={caipNetwork:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]},m=S({chains:Dt(),activeCaipAddress:void 0,activeChain:void 0,activeCaipNetwork:void 0,noAdapters:!1,universalAdapter:{networkControllerClient:void 0,connectionControllerClient:void 0},isSwitchingNamespace:!1}),Or={state:m,subscribe(e){return W(m,()=>{e(m)})},subscribeKey(e,t){return U(m,e,t)},subscribeChainProp(e,t,r){let n;return W(m.chains,()=>{let o=r||m.activeChain;if(o){let s=m.chains.get(o)?.[e];n!==s&&(n=s,t(s))}})},initialize(e,t,r){let{chainId:n,namespace:o}=w.getActiveNetworkProps(),s=t?.find(C=>C.id.toString()===n?.toString()),l=e.find(C=>C?.namespace===o)||e?.[0],p=e.map(C=>C.namespace).filter(C=>C!==void 0),c=_.state.enableEmbedded?new Set([...p]):new Set([...t?.map(C=>C.chainNamespace)??[]]);(e?.length===0||!l)&&(m.noAdapters=!0),m.noAdapters||(m.activeChain=l?.namespace,m.activeCaipNetwork=s,i.setChainNetworkData(l?.namespace,{caipNetwork:s}),m.activeChain&&Ee.set({activeChain:l?.namespace})),c.forEach(C=>{let h=t?.filter(z=>z.chainNamespace===C);i.state.chains.set(C,d({namespace:C,networkState:S(N(d({},it),{caipNetwork:h?.[0]})),accountState:S(At),caipNetworks:h??[]},r)),i.setRequestedCaipNetworks(h??[],C)})},removeAdapter(e){if(m.activeChain===e){let t=Array.from(m.chains.entries()).find(([r])=>r!==e);if(t){let r=t[1]?.caipNetworks?.[0];r&&i.setActiveCaipNetwork(r)}}m.chains.delete(e)},addAdapter(e,{networkControllerClient:t,connectionControllerClient:r},n){m.chains.set(e.namespace,{namespace:e.namespace,networkState:N(d({},it),{caipNetwork:n[0]}),accountState:At,caipNetworks:n,connectionControllerClient:r,networkControllerClient:t}),i.setRequestedCaipNetworks(n?.filter(o=>o.chainNamespace===e.namespace)??[],e.namespace)},addNetwork(e){let t=m.chains.get(e.chainNamespace);if(t){let r=[...t.caipNetworks||[]];t.caipNetworks?.find(n=>n.id===e.id)||r.push(e),m.chains.set(e.chainNamespace,N(d({},t),{caipNetworks:r})),i.setRequestedCaipNetworks(r,e.chainNamespace),v.filterByNamespace(e.chainNamespace,!0)}},removeNetwork(e,t){let r=m.chains.get(e);if(r){let n=m.activeCaipNetwork?.id===t,o=[...r.caipNetworks?.filter(s=>s.id!==t)||[]];n&&r?.caipNetworks?.[0]&&i.setActiveCaipNetwork(r.caipNetworks[0]),m.chains.set(e,N(d({},r),{caipNetworks:o})),i.setRequestedCaipNetworks(o||[],e),o.length===0&&v.filterByNamespace(e,!1)}},setAdapterNetworkState(e,t){let r=m.chains.get(e);r&&(r.networkState=d(d({},r.networkState||it),t),m.chains.set(e,r))},setChainAccountData(e,t,r=!0){if(!e)throw new Error("Chain is required to update chain account data");let n=m.chains.get(e);if(n){let o=d(d({},n.accountState||At),t);m.chains.set(e,N(d({},n),{accountState:o})),(m.chains.size===1||m.activeChain===e)&&(t.caipAddress&&(m.activeCaipAddress=t.caipAddress),R.replaceState(o))}},setChainNetworkData(e,t){if(!e)return;let r=m.chains.get(e);if(r){let n=d(d({},r.networkState||it),t);m.chains.set(e,N(d({},r),{networkState:n}))}},setAccountProp(e,t,r,n=!0){i.setChainAccountData(r,{[e]:t},n),e==="status"&&t==="disconnected"&&r&&v.removeConnectorId(r)},setActiveNamespace(e){m.activeChain=e;let t=e?m.chains.get(e):void 0,r=t?.networkState?.caipNetwork;r?.id&&e&&(m.activeCaipAddress=t?.accountState?.caipAddress,m.activeCaipNetwork=r,i.setChainNetworkData(e,{caipNetwork:r}),w.setActiveCaipNetworkId(r?.caipNetworkId),Ee.set({activeChain:e,selectedNetworkId:r?.caipNetworkId}))},setActiveCaipNetwork(e){if(!e)return;m.activeChain!==e.chainNamespace&&i.setIsSwitchingNamespace(!0);let t=m.chains.get(e.chainNamespace);m.activeChain=e.chainNamespace,m.activeCaipNetwork=e,i.setChainNetworkData(e.chainNamespace,{caipNetwork:e}),t?.accountState?.address?m.activeCaipAddress=`${e.chainNamespace}:${e.id}:${t?.accountState?.address}`:m.activeCaipAddress=void 0,i.setAccountProp("caipAddress",m.activeCaipAddress,e.chainNamespace),t&&R.replaceState(t.accountState),M.resetSend(),Ee.set({activeChain:m.activeChain,selectedNetworkId:m.activeCaipNetwork?.caipNetworkId}),w.setActiveCaipNetworkId(e.caipNetworkId),!i.checkIfSupportedNetwork(e.chainNamespace)&&_.state.enableNetworkSwitch&&!_.state.allowUnsupportedChain&&!I.state.wcBasic&&i.showUnsupportedChainUI()},addCaipNetwork(e){if(!e)return;let t=m.chains.get(e.chainNamespace);t&&t?.caipNetworks?.push(e)},switchActiveNamespace(e){return u(this,null,function*(){if(!e)return;let t=e!==i.state.activeChain,r=i.getNetworkData(e)?.caipNetwork,n=i.getCaipNetworkByNamespace(e,r?.id);t&&n&&(yield i.switchActiveNetwork(n))})},switchActiveNetwork(e){return u(this,null,function*(){let r=!i.state.chains.get(i.state.activeChain)?.caipNetworks?.some(o=>o.id===m.activeCaipNetwork?.id),n=i.getNetworkControllerClient(e.chainNamespace);if(n){try{yield n.switchCaipNetwork(e),r&&X.close()}catch{E.goBack()}K.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:e.caipNetworkId}})}})},getNetworkControllerClient(e){let t=e||m.activeChain,r=m.chains.get(t);if(!r)throw new Error("Chain adapter not found");if(!r.networkControllerClient)throw new Error("NetworkController client not set");return r.networkControllerClient},getConnectionControllerClient(e){let t=e||m.activeChain;if(!t)throw new Error("Chain is required to get connection controller client");let r=m.chains.get(t);if(!r?.connectionControllerClient)throw new Error("ConnectionController client not set");return r.connectionControllerClient},getAccountProp(e,t){let r=m.activeChain;if(t&&(r=t),!r)return;let n=m.chains.get(r)?.accountState;if(n)return n[e]},getNetworkProp(e,t){let r=m.chains.get(t)?.networkState;if(r)return r[e]},getRequestedCaipNetworks(e){let t=m.chains.get(e),{approvedCaipNetworkIds:r=[],requestedCaipNetworks:n=[]}=t?.networkState||{};return A.sortRequestedNetworks(r,n)},getAllRequestedCaipNetworks(){let e=[];return m.chains.forEach(t=>{let r=i.getRequestedCaipNetworks(t.namespace);e.push(...r)}),e},setRequestedCaipNetworks(e,t){i.setAdapterNetworkState(t,{requestedCaipNetworks:e});let n=i.getAllRequestedCaipNetworks().map(s=>s.chainNamespace),o=Array.from(new Set(n));v.filterByNamespaces(o)},getAllApprovedCaipNetworkIds(){let e=[];return m.chains.forEach(t=>{let r=i.getApprovedCaipNetworkIds(t.namespace);e.push(...r)}),e},getActiveCaipNetwork(){return m.activeCaipNetwork},getActiveCaipAddress(){return m.activeCaipAddress},getApprovedCaipNetworkIds(e){return m.chains.get(e)?.networkState?.approvedCaipNetworkIds||[]},setApprovedCaipNetworksData(e){return u(this,null,function*(){let r=yield i.getNetworkControllerClient()?.getApprovedCaipNetworksData();i.setAdapterNetworkState(e,{approvedCaipNetworkIds:r?.approvedCaipNetworkIds,supportsAllNetworks:r?.supportsAllNetworks})})},checkIfSupportedNetwork(e,t){let r=t||m.activeCaipNetwork,n=i.getRequestedCaipNetworks(e);return n.length?n?.some(o=>o.id===r?.id):!0},checkIfSupportedChainId(e){return m.activeChain?i.getRequestedCaipNetworks(m.activeChain)?.some(r=>r.id===e):!0},setSmartAccountEnabledNetworks(e,t){i.setAdapterNetworkState(t,{smartAccountEnabledNetworks:e})},checkIfSmartAccountEnabled(){let e=lt.caipNetworkIdToNumber(m.activeCaipNetwork?.caipNetworkId),t=m.activeChain;return!t||!e?!1:!!i.getNetworkProp("smartAccountEnabledNetworks",t)?.includes(Number(e))},getActiveNetworkTokenAddress(){let e=m.activeCaipNetwork?.chainNamespace||"eip155",t=m.activeCaipNetwork?.id||1,r=J.NATIVE_TOKEN_ADDRESS[e];return`${e}:${t}:${r}`},showUnsupportedChainUI(){X.open({view:"UnsupportedChain"})},checkIfNamesSupported(){let e=m.activeCaipNetwork;return!!(e?.chainNamespace&&J.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(e.chainNamespace))},resetNetwork(e){i.setAdapterNetworkState(e,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]})},resetAccount(e){let t=e;if(!t)throw new Error("Chain is required to set account prop");m.activeCaipAddress=void 0,i.setChainAccountData(t,{smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountTypes:void 0,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0,allAccounts:[],user:void 0,status:"disconnected"}),v.removeConnectorId(t)},setIsSwitchingNamespace(e){m.isSwitchingNamespace=e},getFirstCaipNetworkSupportsAuthConnector(){let e=[],t;if(m.chains.forEach(r=>{q.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(n=>n===r.namespace)&&r.namespace&&e.push(r.namespace)}),e.length>0){let r=e[0];return t=r?m.chains.get(r)?.caipNetworks?.[0]:void 0,t}},getAccountData(e){return e?i.state.chains.get(e)?.accountState:R.state},getNetworkData(e){let t=e||m.activeChain;if(t)return i.state.chains.get(t)?.networkState},getCaipNetworkByNamespace(e,t){if(!e)return;let r=i.state.chains.get(e),n=r?.caipNetworks?.find(o=>o.id===t);return n||r?.networkState?.caipNetwork||r?.caipNetworks?.[0]},getRequestedCaipNetworkIds(){let e=v.state.filterByNamespace;return(e?[m.chains.get(e)]:Array.from(m.chains.values())).flatMap(r=>r?.caipNetworks||[]).map(r=>r.caipNetworkId)},getCaipNetworks(e){return e?i.getRequestedCaipNetworks(e):i.getAllRequestedCaipNetworks()}},i=$(Or);var kr=A.getApiUrl(),ie=new me({baseUrl:kr,clientId:null}),xr=40,jt=4,Ur=20,P=S({promises:{},page:1,count:0,featured:[],allFeatured:[],recommended:[],allRecommended:[],wallets:[],filteredWallets:[],search:[],isAnalyticsEnabled:!1,excludedWallets:[],isFetchingRecommendedWallets:!1}),b={state:P,subscribeKey(e,t){return U(P,e,t)},_getSdkProperties(){let{projectId:e,sdkType:t,sdkVersion:r}=_.state;return{projectId:e,st:t||"appkit",sv:r||"html-wagmi-4.2.2"}},_filterOutExtensions(e){return _.state.isUniversalProvider?e.filter(t=>!!(t.mobile_link||t.desktop_link||t.webapp_link)):e},_fetchWalletImage(e){return u(this,null,function*(){let t=`${ie.baseUrl}/getWalletImage/${e}`,r=yield ie.getBlob({path:t,params:b._getSdkProperties()});ne.setWalletImage(e,URL.createObjectURL(r))})},_fetchNetworkImage(e){return u(this,null,function*(){let t=`${ie.baseUrl}/public/getAssetImage/${e}`,r=yield ie.getBlob({path:t,params:b._getSdkProperties()});ne.setNetworkImage(e,URL.createObjectURL(r))})},_fetchConnectorImage(e){return u(this,null,function*(){let t=`${ie.baseUrl}/public/getAssetImage/${e}`,r=yield ie.getBlob({path:t,params:b._getSdkProperties()});ne.setConnectorImage(e,URL.createObjectURL(r))})},_fetchCurrencyImage(e){return u(this,null,function*(){let t=`${ie.baseUrl}/public/getCurrencyImage/${e}`,r=yield ie.getBlob({path:t,params:b._getSdkProperties()});ne.setCurrencyImage(e,URL.createObjectURL(r))})},_fetchTokenImage(e){return u(this,null,function*(){let t=`${ie.baseUrl}/public/getTokenImage/${e}`,r=yield ie.getBlob({path:t,params:b._getSdkProperties()});ne.setTokenImage(e,URL.createObjectURL(r))})},_filterWalletsByPlatform(e){return A.isMobile()?e?.filter(r=>r.mobile_link||r.id===he.COINBASE.id?!0:i.state.activeChain==="solana"&&(r.id===he.SOLFLARE.id||r.id===he.PHANTOM.id)):e},fetchProjectConfig(){return u(this,null,function*(){return(yield ie.get({path:"/appkit/v1/config",params:b._getSdkProperties()})).features})},fetchAllowedOrigins(){return u(this,null,function*(){try{let{allowedOrigins:e}=yield ie.get({path:"/projects/v1/origins",params:b._getSdkProperties()});return e}catch{return[]}})},fetchNetworkImages(){return u(this,null,function*(){let t=i.getAllRequestedCaipNetworks()?.map(({assets:r})=>r?.imageId).filter(Boolean).filter(r=>!Ct.getNetworkImageById(r));t&&(yield Promise.allSettled(t.map(r=>b._fetchNetworkImage(r))))})},fetchConnectorImages(){return u(this,null,function*(){let{connectors:e}=v.state,t=e.map(({imageId:r})=>r).filter(Boolean);yield Promise.allSettled(t.map(r=>b._fetchConnectorImage(r)))})},fetchCurrencyImages(){return u(this,arguments,function*(e=[]){yield Promise.allSettled(e.map(t=>b._fetchCurrencyImage(t)))})},fetchTokenImages(){return u(this,arguments,function*(e=[]){yield Promise.allSettled(e.map(t=>b._fetchTokenImage(t)))})},fetchWallets(e){return u(this,null,function*(){let t=e.exclude??[];b._getSdkProperties().sv.startsWith("html-core-")&&t.push(...Object.values(he).map(s=>s.id));let n=yield ie.get({path:"/getWallets",params:N(d(d({},b._getSdkProperties()),e),{page:String(e.page),entries:String(e.entries),include:e.include?.join(","),exclude:t.join(",")})});return{data:b._filterWalletsByPlatform(n?.data)||[],count:n?.count}})},fetchFeaturedWallets(){return u(this,null,function*(){let{featuredWalletIds:e}=_.state;if(e?.length){let t=N(d({},b._getSdkProperties()),{page:1,entries:e?.length??jt,include:e}),{data:r}=yield b.fetchWallets(t),n=[...r].sort((s,a)=>e.indexOf(s.id)-e.indexOf(a.id)),o=n.map(s=>s.image_id).filter(Boolean);yield Promise.allSettled(o.map(s=>b._fetchWalletImage(s))),P.featured=n,P.allFeatured=n}})},fetchRecommendedWallets(){return u(this,null,function*(){try{P.isFetchingRecommendedWallets=!0;let{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=_.state,n=[...t??[],...r??[]].filter(Boolean),o=i.getRequestedCaipNetworkIds().join(","),s={page:1,entries:jt,include:e,exclude:n,chains:o},{data:a,count:l}=yield b.fetchWallets(s),p=w.getRecentWallets(),c=a.map(h=>h.image_id).filter(Boolean),C=p.map(h=>h.image_id).filter(Boolean);yield Promise.allSettled([...c,...C].map(h=>b._fetchWalletImage(h))),P.recommended=a,P.allRecommended=a,P.count=l??0}catch{}finally{P.isFetchingRecommendedWallets=!1}})},fetchWalletsByPage(t){return u(this,arguments,function*({page:e}){let{includeWalletIds:r,excludeWalletIds:n,featuredWalletIds:o}=_.state,s=i.getRequestedCaipNetworkIds().join(","),a=[...P.recommended.map(({id:h})=>h),...n??[],...o??[]].filter(Boolean),l={page:e,entries:xr,include:r,exclude:a,chains:s},{data:p,count:c}=yield b.fetchWallets(l),C=p.slice(0,Ur).map(h=>h.image_id).filter(Boolean);yield Promise.allSettled(C.map(h=>b._fetchWalletImage(h))),P.wallets=A.uniqueBy([...P.wallets,...b._filterOutExtensions(p)],"id").filter(h=>h.chains?.some(z=>s.includes(z))),P.count=c>P.count?c:P.count,P.page=e})},initializeExcludedWallets(t){return u(this,arguments,function*({ids:e}){let r={page:1,entries:e.length,include:e},{data:n}=yield b.fetchWallets(r);n&&n.forEach(o=>{P.excludedWallets.push({rdns:o.rdns,name:o.name})})})},searchWallet(r){return u(this,arguments,function*({search:e,badge:t}){let{includeWalletIds:n,excludeWalletIds:o}=_.state,s=i.getRequestedCaipNetworkIds().join(",");P.search=[];let a={page:1,entries:100,search:e?.trim(),badge_type:t,include:n,exclude:o,chains:s},{data:l}=yield b.fetchWallets(a);K.sendEvent({type:"track",event:"SEARCH_WALLET",properties:{badge:t??"",search:e??""}});let p=l.map(c=>c.image_id).filter(Boolean);yield Promise.allSettled([...p.map(c=>b._fetchWalletImage(c)),A.wait(300)]),P.search=b._filterOutExtensions(l)})},initPromise(e,t){let r=P.promises[e];return r||(P.promises[e]=t())},prefetch({fetchConnectorImages:e=!0,fetchFeaturedWallets:t=!0,fetchRecommendedWallets:r=!0,fetchNetworkImages:n=!0}={}){let o=[e&&b.initPromise("connectorImages",b.fetchConnectorImages),t&&b.initPromise("featuredWallets",b.fetchFeaturedWallets),r&&b.initPromise("recommendedWallets",b.fetchRecommendedWallets),n&&b.initPromise("networkImages",b.fetchNetworkImages)].filter(Boolean);return Promise.allSettled(o)},prefetchAnalyticsConfig(){_.state.features?.analytics&&b.fetchAnalyticsConfig()},fetchAnalyticsConfig(){return u(this,null,function*(){try{let{isAnalyticsEnabled:e}=yield ie.get({path:"/getAnalyticsConfig",params:b._getSdkProperties()});_.setFeatures({analytics:e})}catch{_.setFeatures({analytics:!1})}})},filterByNamespaces(e){if(!e?.length){P.featured=P.allFeatured,P.recommended=P.allRecommended;return}let t=i.getRequestedCaipNetworkIds().join(",");P.featured=P.allFeatured.filter(r=>r.chains?.some(n=>t.includes(n))),P.recommended=P.allRecommended.filter(r=>r.chains?.some(n=>t.includes(n))),P.filteredWallets=P.wallets.filter(r=>r.chains?.some(n=>t.includes(n)))},clearFilterByNamespaces(){P.filteredWallets=[]},setFilterByNamespace(e){if(!e){P.featured=P.allFeatured,P.recommended=P.allRecommended;return}let t=i.getRequestedCaipNetworkIds().join(",");P.featured=P.allFeatured.filter(r=>r.chains?.some(n=>t.includes(n))),P.recommended=P.allRecommended.filter(r=>r.chains?.some(n=>t.includes(n))),P.filteredWallets=P.wallets.filter(r=>r.chains?.some(n=>t.includes(n)))}};var Mr=zt(Yt());var Lr="wc",Br="universal_provider",Qa=`${Lr}@2:${Br}:`,Hr="https://rpc.walletconnect.org/v1/";var Za=`${Hr}bundler`;var Ge={getSIWX(){return _.state.siwx},initializeIfEnabled(){return u(this,null,function*(){let e=_.state.siwx,t=i.getActiveCaipAddress();if(!(e&&t))return;let[r,n,o]=t.split(":");if(i.checkIfSupportedNetwork(r))try{if((yield e.getSessions(`${r}:${n}`,o)).length)return;yield X.open({view:"SIWXSignMessage"})}catch(s){console.error("SIWXUtil:initializeIfEnabled",s),K.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:this.getSIWXEventProperties()}),yield I._getClient()?.disconnect().catch(console.error),E.reset("Connect"),te.showError("A problem occurred while trying initialize authentication")}})},requestSignMessage(){return u(this,null,function*(){let e=_.state.siwx,t=A.getPlainAddress(i.getActiveCaipAddress()),r=i.getActiveCaipNetwork(),n=I._getClient();if(!e)throw new Error("SIWX is not enabled");if(!t)throw new Error("No ActiveCaipAddress found");if(!r)throw new Error("No ActiveCaipNetwork or client found");if(!n)throw new Error("No ConnectionController client found");try{let o=yield e.createMessage({chainId:r.caipNetworkId,accountAddress:t}),s=o.toString();v.getConnectorId(r.chainNamespace)===q.CONNECTOR_ID.AUTH&&E.pushTransactionStack({});let l=yield n.signMessage(s);yield e.addSession({data:o,message:s,signature:l}),X.close(),K.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:this.getSIWXEventProperties()})}catch(o){let s=this.getSIWXEventProperties();(!X.state.open||E.state.view==="ApproveTransaction")&&(yield X.open({view:"SIWXSignMessage"})),s.isSmartAccount?te.showError("This application might not support Smart Accounts"):te.showError("Signature declined"),K.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:s}),console.error("SWIXUtil:requestSignMessage",o)}})},cancelSignMessage(){return u(this,null,function*(){try{this.getSIWX()?.getRequired?.()?yield I.disconnect():X.close(),E.reset("Connect"),K.sendEvent({event:"CLICK_CANCEL_SIWX",type:"track",properties:this.getSIWXEventProperties()})}catch(e){console.error("SIWXUtil:cancelSignMessage",e)}})},getSessions(){return u(this,null,function*(){let e=_.state.siwx,t=A.getPlainAddress(i.getActiveCaipAddress()),r=i.getActiveCaipNetwork();return e&&t&&r?e.getSessions(r.caipNetworkId,t):[]})},isSIWXCloseDisabled(){return u(this,null,function*(){let e=this.getSIWX();if(e){let t=E.state.view==="ApproveTransaction",r=E.state.view==="SIWXSignMessage";if(t||r)return e.getRequired?.()&&(yield this.getSessions()).length===0}return!1})},universalProviderAuthenticate(n){return u(this,arguments,function*({universalProvider:e,chains:t,methods:r}){let o=Ge.getSIWX(),s=new Set(t.map(p=>p.split(":")[0]));if(!o||s.size!==1||!s.has("eip155"))return!1;let a=yield o.createMessage({chainId:i.getActiveCaipNetwork()?.caipNetworkId||"",accountAddress:""}),l=yield e.authenticate({nonce:a.nonce,domain:a.domain,uri:a.uri,exp:a.expirationTime,iat:a.issuedAt,nbf:a.notBefore,requestId:a.requestId,version:a.version,resources:a.resources,statement:a.statement,chainId:a.chainId,methods:r,chains:[a.chainId,...t.filter(p=>p!==a.chainId)]});if(te.showLoading("Authenticating...",{autoClose:!1}),R.setConnectedWalletInfo(N(d({},l.session.peer.metadata),{name:l.session.peer.metadata.name,icon:l.session.peer.metadata.icons?.[0],type:"WALLET_CONNECT"}),Array.from(s)[0]),l?.auths?.length){let p=l.auths.map(c=>{let C=e.client.formatAuthMessage({request:c.p,iss:c.p.iss});return{data:N(d({},c.p),{accountAddress:c.p.iss.split(":").slice(-1).join(""),chainId:c.p.iss.split(":").slice(2,4).join(":"),uri:c.p.aud,version:c.p.version||a.version,expirationTime:c.p.exp,issuedAt:c.p.iat,notBefore:c.p.nbf}),message:C,signature:c.s.s,cacao:c}});try{yield o.setSessions(p),K.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:Ge.getSIWXEventProperties()})}catch(c){throw console.error("SIWX:universalProviderAuth - failed to set sessions",c),K.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:Ge.getSIWXEventProperties()}),yield e.disconnect().catch(console.error),c}finally{te.hide()}}return!0})},getSIWXEventProperties(){let e=i.state.activeChain;return{network:i.state.activeCaipNetwork?.caipNetworkId||"",isSmartAccount:R.state.preferredAccountTypes?.[e]===Ae.ACCOUNT_TYPES.SMART_ACCOUNT}},clearSessions(){return u(this,null,function*(){let e=this.getSIWX();e&&(yield e.setSessions([]))})}};var Fr={isUnsupportedChainView(){return E.state.view==="UnsupportedChain"||E.state.view==="SwitchNetwork"&&E.state.history.includes("UnsupportedChain")},safeClose(){return u(this,null,function*(){if(this.isUnsupportedChainView()){X.shake();return}if(yield Ge.isSIWXCloseDisabled()){X.shake();return}X.close()})}};var et={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},St={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},Wr={providers:mt,selectedProvider:null,error:null,purchaseCurrency:et,paymentCurrency:St,purchaseCurrencies:[et],paymentCurrencies:[],quotesLoading:!1},x=S(Wr),$r={state:x,subscribe(e){return W(x,()=>e(x))},subscribeKey(e,t){return U(x,e,t)},setSelectedProvider(e){if(e&&e.name==="meld"){let t=i.state.activeChain===q.CHAIN.SOLANA?"SOL":"USDC",r=R.state.address??"",n=new URL(e.url);n.searchParams.append("publicKey",kt),n.searchParams.append("destinationCurrencyCode",t),n.searchParams.append("walletAddress",r),n.searchParams.append("externalCustomerId",_.state.projectId),x.selectedProvider=N(d({},e),{url:n.toString()})}else x.selectedProvider=e},setOnrampProviders(e){if(Array.isArray(e)&&e.every(t=>typeof t=="string")){let t=e,r=mt.filter(n=>t.includes(n.name));x.providers=r}else x.providers=[]},setPurchaseCurrency(e){x.purchaseCurrency=e},setPaymentCurrency(e){x.paymentCurrency=e},setPurchaseAmount(e){Nt.state.purchaseAmount=e},setPaymentAmount(e){Nt.state.paymentAmount=e},getAvailableCurrencies(){return u(this,null,function*(){let e=yield f.getOnrampOptions();x.purchaseCurrencies=e.purchaseCurrencies,x.paymentCurrencies=e.paymentCurrencies,x.paymentCurrency=e.paymentCurrencies[0]||St,x.purchaseCurrency=e.purchaseCurrencies[0]||et,yield b.fetchCurrencyImages(e.paymentCurrencies.map(t=>t.id)),yield b.fetchTokenImages(e.purchaseCurrencies.map(t=>t.symbol))})},getQuote(){return u(this,null,function*(){x.quotesLoading=!0;try{let e=yield f.getOnrampQuote({purchaseCurrency:x.purchaseCurrency,paymentCurrency:x.paymentCurrency,amount:x.paymentAmount?.toString()||"0",network:x.purchaseCurrency?.symbol});return x.quotesLoading=!1,x.purchaseAmount=Number(e?.purchaseAmount.amount),e}catch(e){return x.error=e.message,x.quotesLoading=!1,null}finally{x.quotesLoading=!1}})},resetState(){x.selectedProvider=null,x.error=null,x.purchaseCurrency=et,x.paymentCurrency=St,x.purchaseCurrencies=[et],x.paymentCurrencies=[],x.paymentAmount=void 0,x.purchaseAmount=void 0,x.quotesLoading=!1}},Nt=$($r);var fe=S({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),jr={state:fe,subscribe(e){return W(fe,()=>e(fe))},subscribeKey(e,t){return U(fe,e,t)},showTooltip({message:e,triggerRect:t,variant:r}){fe.open=!0,fe.message=e,fe.triggerRect=t,fe.variant=r},hide(){fe.open=!1,fe.message="",fe.triggerRect={width:0,height:0,top:0,left:0}}},qr=$(jr);var qt={convertEVMChainIdToCoinType(e){if(e>=2147483648)throw new Error("Invalid chainId");return(2147483648|e)>>>0}};var pe=S({suggestions:[],loading:!1}),Kr={state:pe,subscribe(e){return W(pe,()=>e(pe))},subscribeKey(e,t){return U(pe,e,t)},resolveName(e){return u(this,null,function*(){try{return yield f.lookupEnsName(e)}catch(t){let r=t;throw new Error(r?.reasons?.[0]?.description||"Error resolving name")}})},isNameRegistered(e){return u(this,null,function*(){try{return yield f.lookupEnsName(e),!0}catch{return!1}})},getSuggestions(e){return u(this,null,function*(){try{pe.loading=!0,pe.suggestions=[];let t=yield f.getEnsNameSuggestions(e);return pe.suggestions=t.suggestions.map(r=>N(d({},r),{name:r.name}))||[],pe.suggestions}catch(t){let r=at.parseEnsApiError(t,"Error fetching name suggestions");throw new Error(r)}finally{pe.loading=!1}})},getNamesForAddress(e){return u(this,null,function*(){try{if(!i.state.activeCaipNetwork)return[];let r=w.getEnsFromCacheForAddress(e);if(r)return r;let n=yield f.reverseLookupEnsName({address:e});return w.updateEnsCache({address:e,ens:n,timestamp:Date.now()}),n}catch(t){let r=at.parseEnsApiError(t,"Error fetching names for address");throw new Error(r)}})},registerName(e){return u(this,null,function*(){let t=i.state.activeCaipNetwork;if(!t)throw new Error("Network not found");let r=R.state.address,n=v.getAuthConnector();if(!r||!n)throw new Error("Address or auth connector not found");pe.loading=!0;try{let o=JSON.stringify({name:e,attributes:{},timestamp:Math.floor(Date.now()/1e3)});E.pushTransactionStack({onCancel(){E.replace("RegisterAccountName")}});let s=yield I.signMessage(o);pe.loading=!1;let a=t.id;if(!a)throw new Error("Network not found");let l=qt.convertEVMChainIdToCoinType(Number(a));yield f.registerEnsName({coinType:l,address:r,signature:s,message:o}),R.setProfileName(e,t.chainNamespace),E.replace("RegisterAccountNameSuccess")}catch(o){let s=at.parseEnsApiError(o,`Error registering name ${e}`);throw E.replace("RegisterAccountName"),new Error(s)}finally{pe.loading=!1}})},validateName(e){return/^[a-zA-Z0-9-]{4,}$/u.test(e)},parseEnsApiError(e,t){return e?.reasons?.[0]?.description||t}},at=$(Kr);var tt,Te,Pe;function Vr(e,t){tt=document.createElement("style"),Te=document.createElement("style"),Pe=document.createElement("style"),tt.textContent=ze(e).core.cssText,Te.textContent=ze(e).dark.cssText,Pe.textContent=ze(e).light.cssText,document.head.appendChild(tt),document.head.appendChild(Te),document.head.appendChild(Pe),Kt(t)}function Kt(e){Te&&Pe&&(e==="light"?(Te.removeAttribute("media"),Pe.media="enabled"):(Pe.removeAttribute("media"),Te.media="enabled"))}function Gr(e){tt&&Te&&Pe&&(tt.textContent=ze(e).core.cssText,Te.textContent=ze(e).dark.cssText,Pe.textContent=ze(e).light.cssText)}function ze(e){return{core:xe`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${ce(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${ce(e?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${ce(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${ce(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${ce(e?.["--w3m-z-index"]||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `,light:xe`
      :root {
        --w3m-color-mix: ${ce(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${ce(le(e,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${ce(le(e,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `,dark:xe`
      :root {
        --w3m-color-mix: ${ce(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${ce(le(e,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${ce(le(e,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    `}}var Il=xe`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,Tl=xe`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Pl=xe`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`;var Vt={getSpacingStyles(e,t){if(Array.isArray(e))return e[t]?`var(--wui-spacing-${e[t]})`:void 0;if(typeof e=="string")return`var(--wui-spacing-${e})`},getFormattedDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)},getHostName(e){try{return new URL(e).hostname}catch{return""}},getTruncateString({string:e,charsStart:t,charsEnd:r,truncate:n}){return e.length<=t+r?e:n==="end"?`${e.substring(0,t)}...`:n==="start"?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`},generateAvatarColors(e){let r=e.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),n=this.hexToRgb(r),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),a=100-3*Number(o?.replace("px","")),l=`${a}% ${a}% at 65% 40%`,p=[];for(let c=0;c<5;c+=1){let C=this.tintColor(n,.15*c);p.push(`rgb(${C[0]}, ${C[1]}, ${C[2]})`)}return`
    --local-color-1: ${p[0]};
    --local-color-2: ${p[1]};
    --local-color-3: ${p[2]};
    --local-color-4: ${p[3]};
    --local-color-5: ${p[4]};
    --local-radial-circle: ${l}
   `},hexToRgb(e){let t=parseInt(e,16),r=t>>16&255,n=t>>8&255,o=t&255;return[r,n,o]},tintColor(e,t){let[r,n,o]=e,s=Math.round(r+(255-r)*t),a=Math.round(n+(255-n)*t),l=Math.round(o+(255-o)*t);return[s,a,l]},isNumber(e){return{number:/^[0-9]+$/u}.number.test(e)},getColorTheme(e){return e||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)")?.matches?"dark":"light":"dark")},splitBalance(e){let t=e.split(".");return t.length===2?[t[0],t[1]]:["0","00"]},roundNumber(e,t,r){return e.toString().length>=t?Number(e).toFixed(r):e},formatNumberToLocalString(e,t=2){return e===void 0?"0.00":typeof e=="number"?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})}};function zr(e,t){let{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(o){customElements.get(e)||customElements.define(e,o)}}}function Yr(e,t){return customElements.get(e)||customElements.define(e,t),t}function Xr(e){return function(r){return typeof r=="function"?Yr(e,r):zr(e,r)}}var ql={ACCOUNT_TABS:[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}],SECURE_SITE_ORIGIN:(typeof process<"u"&&typeof process.env<"u"?process.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},DEFAULT_CONNECT_METHOD_ORDER:["email","social","wallet"],ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150}};export{q as a,lt as b,ir as c,S as d,W as e,de as f,U as g,J as h,w as i,A as j,_ as k,ne as l,Ct as m,bt as n,K as o,b as p,E as q,Ke as r,v as s,te as t,I as u,Ee as v,M as w,i as x,f as y,R as z,X as A,Nt as B,qr as C,at as D,Ge as E,Fr as F,ql as G,Vr as H,Kt as I,Gr as J,Il as K,Tl as L,Pl as M,Vt as N,Xr as O};
