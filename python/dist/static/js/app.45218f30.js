(function(e){function t(t){for(var r,c,i=t[0],s=t[1],a=t[2],f=0,h=[];f<i.length;f++)c=i[f],o[c]&&h.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(h.length)h.shift()();return u.push.apply(u,a||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},u=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var l=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0ec2":function(e,t,n){},1914:function(e,t,n){},"21bb":function(e,t,n){"use strict";var r=n("1914"),o=n.n(r);o.a},2856:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/results"}},[e._v("Results")])],1),n("router-view")],1)},u=[],c=(n("5c0b"),n("2877")),i={},s=Object(c["a"])(i,o,u,!1,null,null,null);s.options.__file="App.vue";var a=s.exports,l=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Quiz",{attrs:{msg:"And now, your highness..."}})],1)},h=[],p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),"Sign in with Twitter"===this.signin?r("div",[r("button",{on:{click:e.handleTwitterLoginClick}},[r("img",{attrs:{src:n("a3df"),width:"30px"}}),r("span",{staticClass:"user"},[e._v(e._s(e.signin))])])]):r("div",[e._v(e._s(e.signin))])])},v=[],d=n("bc3a"),m=n.n(d),b={name:"HelloWorld",props:{msg:String},data:function(){return{hand:null,loading:!0,errored:null,signin:"Sign in with Twitter"}},methods:{handleTwitterLoginClick:function(e){var t=this,n=this,r="127.0.0.1"===document.domain?"http://127.0.0.1:5000/twitter/auth":"https://probe.now.sh/twitter/auth";d["get"](r).then(function(e){console.log("Twitter response: ",e.data),n.signin="welcome "+e.data.screen_name}).catch(function(e){console.log("Twitter error: ",e),t.errored=e}).finally(function(){return t.loading=!1})}}},_=b,g=(n("a027"),Object(c["a"])(_,p,v,!1,null,"d21a1216",null));g.options.__file="Quiz.vue";var w=g.exports,y={name:"home",components:{Quiz:w}},R=y,S=(n("21bb"),Object(c["a"])(R,f,h,!1,null,null,null));S.options.__file="Home.vue";var k=S.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("Results")]),n("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.fetchResource(t)}}},[e._v("Fetch")]),n("br"),n("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.fetchResourceCabinQuest(t)}}},[e._v("Fetch Cabin")]),n("br"),n("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.fetchSecureResource(t)}}},[e._v("Fetch Secure Resource")]),e._l(e.resources,function(t){return n("p",{key:t.timestamp},[e._v("\n    Server Timestamp: "+e._s(e._f("formatTimestamp")(t.timestamp))+"\n  ")])}),e._l(e.branches,function(t){return n("p",{key:t.title},[e._v("\n    Title: "+e._s(t.title)+"\n  ")])}),n("p",[e._v(e._s(e.error))])],2)},j=[],x=m.a.create({baseURL:"/api/",timeout:5e3,headers:{"Content-Type":"application/json"}});x.interceptors.request.use(function(e){return e.headers["Authorization"]="Fake Token",e}),x.interceptors.response.use(function(e){return e},function(e){return console.log(e),Promise.reject(e)});var O={fetchResource:function(){return x.get("resource/xxx").then(function(e){return e.data})},fetchResourceCabinQuest:function(e){return x.get("resource/cabinquest/"+e).then(function(e){return e.data})},fetchSecureResource:function(){return x.get("secure-resource/zzz").then(function(e){return e.data})}},C={name:"about",data:function(){return{resources:[],error:"",branches:[]}},methods:{fetchResource:function(){var e=this;O.fetchResource().then(function(t){e.resources.push(t)}).catch(function(t){e.error=t.message})},fetchResourceCabinQuest:function(){var e=this;O.fetchResourceCabinQuest("cabinporn").then(function(t){console.log("cabinquest ",t),e.branches.push(t.branches)}).catch(function(t){e.error=t.message})},fetchSecureResource:function(){var e=this;O.fetchSecureResource().then(function(t){e.resources.push(t)}).catch(function(t){e.error=t.message})}}},z=C,P=(n("cf3d"),Object(c["a"])(z,T,j,!1,null,null,null));P.options.__file="Results.vue";var Q=P.exports;r["a"].use(l["a"]);var E=new l["a"]({routes:[{path:"/",name:"home",component:k},{path:"/results",name:"results",component:Q}]}),$=n("2f62");r["a"].use($["a"]);var D=new $["a"].Store({state:{},mutations:{},actions:{}}),F=(n("456d"),n("ac6a"),{formatTimestamp:function(e){var t=new Date(e);return t.toLocaleTimeString("en-US")}});Object.keys(F).forEach(function(e){r["a"].filter(e,F[e])}),r["a"].config.productionTip=!1,new r["a"]({router:E,store:D,render:function(e){return e(a)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("2856"),o=n.n(r);o.a},a027:function(e,t,n){"use strict";var r=n("0ec2"),o=n.n(r);o.a},a3df:function(e,t,n){e.exports=n.p+"static/img/twitter.923455be.svg"},c4d1:function(e,t,n){},cf3d:function(e,t,n){"use strict";var r=n("c4d1"),o=n.n(r);o.a}});
//# sourceMappingURL=app.45218f30.js.map