"use strict";(self["webpackChunkmyweb"]=self["webpackChunkmyweb"]||[]).push([[986],{8986:function(t,e,s){s.r(e),s.d(e,{default:function(){return D}});var l=s(6252),a=s(3577);const i=(0,l._)("h1",null,"This is Article",-1),n={class:"textspace"},r={class:"selection"},u={class:"li-filter d-flex flex-row justify-content-between align-items-center"},c={class:"btn text-filt-but"},o={class:"badge bg-warning rounded-pill"},d={class:"li-filter d-flex flex-row justify-content-between align-items-center"},g=(0,l._)("button",{class:"btn text-filt-but"}," All ",-1),w={class:"badge bg-warning rounded-pill"},h={class:"textlist"},b={class:"card-body"},_={class:"card-text"},f=(0,l._)("br",null,null,-1),p=(0,l._)("br",null,null,-1);function k(t,e,s,k,m,x){const v=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[i,(0,l._)("div",n,[(0,l._)("div",r,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(m.tag,((t,e)=>((0,l.wg)(),(0,l.iD)("ul",{key:t},[(0,l._)("li",u,[(0,l._)("button",c,(0,a.zw)(e),1),(0,l._)("span",o,(0,a.zw)(t),1)])])))),128)),(0,l._)("ul",null,[(0,l._)("li",d,[g,(0,l._)("span",w,(0,a.zw)(Object.keys(m.results).length),1)])])]),(0,l._)("div",h,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(m.results,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{class:"cardlist hvr-grow {{t.tag}}-card cardshow",key:t},[(0,l._)("div",b,[(0,l._)("p",_,[(0,l.Wm)(v,{to:`/articles/${t.pk}`,class:"card-title"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,a.zw)(t.title),1)])),_:2},1032,["to"]),f,(0,l.Uk)(" #"+(0,a.zw)(t.tag)+" ",1),p,(0,l.Uk)(" "+(0,a.zw)(t.time_create),1)])])])))),128))])])],64)}const m="http://127.0.0.1:8000/api/news/text/";var x={data(){return{results:{},tag:{},mydate:{}}},mounted(){this.updatedprice()},methods:{updatedprice(){console.log("GOING"),this.axios.get(m).then((t=>{this.results=t.data,this.results=this.results.results,this.results.forEach((t=>{var e=new Date(t.time_create);t.time_create=`${e.getFullYear()}/${e.getMonth()}/${e.getDate()} ${e.getHours()}:${e.getMinutes()}`,t.tag in this.tag?this.tag[t.tag]+=1:this.tag[t.tag]=1}))})),console.log("OVER")},addZero(t){return t<10&&(t="0"+t),t}}},v=s(3744);const y=(0,v.Z)(x,[["render",k]]);var D=y}}]);
//# sourceMappingURL=986.6a2b2089.js.map