webpackJsonp([1],{NHnr:function(t,e,n){"use strict";function r(t){n("fEhv")}function a(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function o(t){for(var e in t)null===t[e]&&delete t[e],"string"===a(t[e])?t[e]=t[e].trim():"object"===a(t[e])?t[e]=o(t[e]):"array"===a(t[e])&&(t[e]=o(t[e]));return t}function i(t,e,n,r,a){n&&(n=o(n)),Y({method:t,url:e,data:"POST"===t||"PUT"===t?n:null,params:"GET"===t||"DELETE"===t?n:null,baseURL:W,withCredentials:!1}).then(function(t){!0===t.data.success?r&&r(t.data):a?a(t.data):window.alert("error: "+Q()(t.data))}).catch(function(t){var e=t.response;t&&window.alert("api error, HTTP CODE: "+e.status)})}Object.defineProperty(e,"__esModule",{value:!0});var s=n("0tSy"),l={name:"app"},u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],d={render:u,staticRenderFns:c},p=d,_=n("/Xao"),f=r,v=_(l,p,!1,f,null,null),m=v.exports,h=n("zO6J"),g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0,!1,!1)},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("h1",{staticClass:"logo"},[t._v("Vue Demo by HXP")])])}],E={render:g,staticRenderFns:T},$=E,w=n("/Xao"),y=w(null,$,!1,null,null,null),P=y.exports,C=function(){var t=this,e=t.$createElement;return(t._self._c||e)("footer",{staticClass:"copy"},[t._v("\n  Copy © HXP\n")])},H=[],D={render:C,staticRenderFns:H},F=D,X=n("/Xao"),x=X(null,F,!1,null,null,null),L=x.exports,R={components:{Headera:P,Footera:L},data:function(){return{list:[]}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.$api.get("topics",null,function(e){t.list=e.data})}}},b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Headera"),t._v(" "),n("div",{staticClass:"article_list"},[n("ul",t._l(t.list,function(e){return n("li",[n("time",{domProps:{textContent:t._s(e.create_at)}}),t._v(" "),n("router-link",{attrs:{to:"/content/"+e.id}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1)}))]),t._v(" "),n("Footera")],1)},O=[],S={render:b,staticRenderFns:O},A=S,M=n("/Xao"),U=M(R,A,!1,null,null,null),j=U.exports,k={components:{myHeader:P,myFooter:L},data:function(){return{id:this.$route.params.id,dat:{}}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.$api.get("topic/"+this.id,null,function(e){t.dat=e.data})}}},z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("myHeader"),t._v(" "),n("h2",{domProps:{textContent:t._s(t.dat.title)}}),t._v(" "),n("p",[t._v("作者："+t._s(t.dat.author.loginname)+"　　发表于："+t._s(t.$utils.goodTime(t.dat.create_at)))]),t._v(" "),n("hr"),t._v(" "),n("article",{domProps:{innerHTML:t._s(t.dat.content)}}),t._v(" "),n("h3",[t._v("网友回复：")]),t._v(" "),n("ul",t._l(t.dat.replies,function(e){return n("li",[n("p",[t._v("评论者："+t._s(e.author.loginname)+"　　评论于："+t._s(t.$utils.goodTime(e.create_at)))]),t._v(" "),n("article",{domProps:{innerHTML:t._s(e.content)}})])})),t._v(" "),n("myFooter")],1)},G=[],J={render:z,staticRenderFns:G},N=J,V=n("/Xao"),Z=V(k,N,!1,null,null,null),q=Z.exports;s.a.use(h.a);var B=new h.a({routes:[{path:"/",component:j},{path:"/content/:id",component:q}]}),I={goodTime:function(t){var e=(new Date).getTime(),n=new Date(t).getTime(),r=e-n,a=r/31104e6,o=r/2592e6,i=r/6048e5,s=r/864e5,l=r/36e5,u=r/6e4;return a>=1?"发表于 "+~~a+" 年前":o>=1?"发表于 "+~~o+" 个月前":i>=1?"发表于 "+~~i+" 周前":s>=1?"发表于 "+~~s+" 天前":l>=1?"发表于 "+~~l+" 个小时前":u>=1?"发表于 "+~~u+" 分钟前":"刚刚"}},K=n("3cXf"),Q=n.n(K),W="/api/v1",Y=n("2sCs"),tt={get:function(t,e,n,r){return i("GET",t,e,n,r)},post:function(t,e,n,r){return i("POST",t,e,n,r)},put:function(t,e,n,r){return i("PUT",t,e,n,r)},delete:function(t,e,n,r){return i("DELETE",t,e,n,r)}};s.a.prototype.$api=tt,s.a.prototype.$utils=I,s.a.config.productionTip=!1,new s.a({el:"#app",router:B,template:"<App/>",components:{App:m}})},fEhv:function(t,e){}},["NHnr"]);