"use strict";(self["webpackChunkmyweb"]=self["webpackChunkmyweb"]||[]).push([[596],{8596:function(s,t,l){l.r(t),l.d(t,{default:function(){return v}});var e=l(6252),i=l(3577);const a=(0,e._)("h1",null," Title ",-1),r={class:"container"},c={class:"row align-items-start"},n={class:"card",style:{}},u={class:"card-header"},o={class:"list-group list-group-flush"},d={class:"list-group-item"},p={class:"list-group-item"},h={class:"list-group-item"};function m(s,t,l,m,g,w){return(0,e.wg)(),(0,e.iD)(e.HY,null,[a,(0,e._)("button",{class:"btn btn-warning",onClick:t[0]||(t[0]=s=>w.updatedprice())},"Refresh"),(0,e._)("div",r,[(0,e._)("div",c,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(g.results,((s,t)=>((0,e.wg)(),(0,e.iD)("div",{class:"col",key:t},[(0,e._)("div",n,[(0,e._)("div",u,[(0,e._)("h3",null,(0,i.zw)(t),1)]),(0,e._)("ul",o,[(0,e._)("li",d,"¥ "+(0,i.zw)(s.CNY),1),(0,e._)("li",p,"$ "+(0,i.zw)(s.USD),1),(0,e._)("li",h,"NT$ "+(0,i.zw)(s.TWD),1)])])])))),128))])])],64)}const g="https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,USDT&tsyms=CNY,USD,TWD";var w={data(){return{results:{}}},mounted(){this.updatedprice()},methods:{updatedprice(){console.log("GOING"),this.axios.get(g).then((s=>{this.results=s.data})),console.log("OVER")}}},_=l(3744);const f=(0,_.Z)(w,[["render",m]]);var v=f}}]);
//# sourceMappingURL=596.28fe699c.js.map