"use strict";(self["webpackChunkmyweb"]=self["webpackChunkmyweb"]||[]).push([[326],{7326:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var s=n(6252),r=n(3577);const u=(0,s._)("h1",null,"articlepost",-1),l=["innerHTML"];function a(e,t,n,a,o,i){return(0,s.wg)(),(0,s.iD)(s.HY,null,[u,(0,s._)("h2",null,(0,r.zw)(o.results.title),1),(0,s._)("p",null,(0,r.zw)(i.pkId),1),(0,s._)("p",{innerHTML:o.results.body},null,8,l)],64)}var o={data(){return{results:{}}},computed:{pkId(){return this.$route.params.pk}},mounted(){this.updatedprice()},methods:{updatedprice(){var e=`${this.pkId}/`;console.log("url="+e),console.log("GOING");const t=this.axios.create({baseURL:"/api/news/text"});t.get(e).then((e=>{this.results=e.data,console.log(e.data)}))}}},i=n(3744);const c=(0,i.Z)(o,[["render",a]]);var d=c}}]);
//# sourceMappingURL=326.89be5c71.js.map