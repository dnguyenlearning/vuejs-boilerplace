(function(e){function t(t){for(var n,i,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)i=s[l],a[i]&&f.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d63f1":"23dc2c6e","chunk-2d22d746":"2db21198"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=n);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e),o=function(t){u.onerror=u.onload=null,clearTimeout(c);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+o+")");i.type=n,i.request=o,r[1](i)}a[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:u})},12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vuejs-boilerplace/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"getTodosAsync",function(){return $e}),r.d(n,"addTodoAsync",function(){return Ge});var a={};r.r(a),r.d(a,"doneTodos",function(){return Ne}),r.d(a,"adding",function(){return Fe});var o={};r.r(o),r.d(o,"login",function(){return et}),r.d(o,"logout",function(){return tt});var i={};r.r(i),r.d(i,"userInfo",function(){return rt}),r.d(i,"isAuthenticated",function(){return nt}),r.d(i,"loggingIn",function(){return at}),r.d(i,"loginError",function(){return ot});r("cadf"),r("551c"),r("f751"),r("097d");var s=r("2b0e"),u=r("bb71");r("da64");s["a"].use(u["a"],{iconfont:"md"});var c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("side-bar",{directives:[{name:"show",rawName:"v-show",value:e.isAuthenticated,expression:"isAuthenticated"}],attrs:{isShow:e.isAuthenticated}}),r("v-content",[r("router-view")],1)],1)},l=[],d=r("cebc"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-navigation-drawer",{attrs:{"mini-variant":e.mini,fixed:"",clipped:"","hide-overlay":"",light:"",app:e.isShow},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",{staticClass:"pa-1"},[e.mini?r("v-list-tile",{on:{click:function(t){t.stopPropagation(),e.mini=!e.mini}}},[r("v-list-tile-action",[r("v-icon",[e._v("chevron_right")])],1)],1):e._e(),r("v-list-tile",{attrs:{avatar:"",tag:"div"}},[r("v-list-tile-avatar",[r("img",{attrs:{src:"https://randomuser.me/api/portraits/men/85.jpg"}})]),r("v-list-tile-content",[r("v-list-tile-title",[e._v("John Leider")])],1),r("v-list-tile-action",[r("v-btn",{attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.mini=!e.mini}}},[r("v-icon",[e._v("chevron_left")])],1)],1)],1)],1),r("v-list",{staticClass:"pt-0",attrs:{dense:""}},[r("v-divider",{attrs:{light:""}}),e._l(e.items,function(t){return r("v-list-tile",{key:t.title,attrs:{to:t.link},on:{click:e.linkClick}},[r("v-list-tile-action",[r("v-icon",[e._v(e._s(t.icon))])],1),r("v-list-tile-content",[r("v-list-tile-title",[e._v(e._s(t.title))])],1)],1)}),r("v-list-tile",{staticStyle:{cursor:"pointer"},on:{click:e.signout}},[r("v-list-tile-action",[r("v-icon",[e._v("logout")])],1),r("v-list-tile-content",[r("v-list-tile-title",[e._v("Logout")])],1)],1)],2)],1)},p=[],v={props:{isShow:{type:Boolean}},data:function(){return{drawer:!0,items:[{title:"Home",icon:"dashboard",link:"/dashboard"},{title:"About",icon:"help",link:"/about"}],mini:!1,right:null}},methods:{signout:function(){this.$store.dispatch("users/logout"),this.$router.push({name:"login"})},linkClick:function(){},toggleDrawler:function(){this.drawler=!this.drawler}}},m=v,g=r("2877"),h=r("6544"),b=r.n(h),w=r("8336"),_=r("ce7e6"),O=r("132d"),j=r("8860"),y=r("ba95"),x=r("40fe"),k=r("c954"),S=r("5d23"),E=r("f774"),T=Object(g["a"])(m,f,p,!1,null,null,null),I=T.exports;b()(T,{VBtn:w["a"],VDivider:_["a"],VIcon:O["a"],VList:j["a"],VListTile:y["a"],VListTileAction:x["a"],VListTileAvatar:k["a"],VListTileContent:S["a"],VListTileTitle:S["c"],VNavigationDrawer:E["a"]});var C=r("2f62"),R=Object(C["a"])("users"),V=R.mapGetters,A={name:"App",components:{SideBar:I},computed:Object(d["a"])({},V(["isAuthenticated"])),data:function(){return{}}},L=A,D=r("7496"),q=r("549c"),P=Object(g["a"])(L,c,l,!1,null,null,null),U=P.exports;b()(P,{VApp:D["a"],VContent:q["a"]});var $=r("8c4f"),G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{staticStyle:{height:"100%"},attrs:{row:"","justify-center":"","align-center":""}},[r("v-flex",{attrs:{md3:"",xs8:""}},[r("v-card",{attrs:{light:""}},[r("login-form")],1)],1)],1)],1)},N=[],F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{column:"","justify-center":""}},[r("v-flex",[r("h3",{staticClass:"display-2"},[e._v("Demo")]),r("v-subheader",{staticClass:"pa-0"},[e._v("(pw: demo1234, email: demo@gmail.com)")]),r("v-subheader",{directives:[{name:"show",rawName:"v-show",value:!!e.loginError,expression:"!!loginError"}],staticClass:"pa-0 error--text"},[e._v(e._s(e.loginError))])],1),r("v-flex",[r("form",{on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{"error-messages":e.errors.collect("email"),label:"E-mail","data-vv-name":"email",autofocus:"",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:8",expression:"'required|min:8'"}],attrs:{counter:15,"error-messages":e.errors.collect("password"),label:"Password","data-vv-name":"password",required:"",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-btn",{attrs:{loading:e.loggingIn,type:"submit",disabled:e.errors.any()||e.isValid,block:"",color:"primary"}},[e._v("\n                    Submit\n                ")])],1)])],1)],1)},M=[],Y=Object(C["a"])("users"),B=Y.mapGetters,J={$_veeValidate:{validator:"new"},data:function(){return{password:"",email:""}},computed:Object(d["a"])({},B(["loggingIn","loginError"]),{isValid:function(){return!this.password||!this.email}}),methods:{login:function(){var e=this,t={email:this.email,password:this.password};this.$store.dispatch("users/login",{user:t}).then(function(){e.$router.push("/dashboard")})}}},K=J,z=r("a523"),H=r("0e8f"),Q=r("a722"),W=r("e0c7"),X=r("2677"),Z=Object(g["a"])(K,F,M,!1,null,null,null),ee=Z.exports;b()(Z,{VBtn:w["a"],VContainer:z["a"],VFlex:H["a"],VLayout:Q["a"],VSubheader:W["a"],VTextField:X["a"]});var te={components:{LoginForm:ee},data:function(){return{title:"Login"}}},re=te,ne=r("b0af"),ae=Object(g["a"])(re,G,N,!1,null,null,null),oe=ae.exports;b()(ae,{VCard:ne["a"],VContainer:z["a"],VFlex:H["a"],VLayout:Q["a"]});r("6b54");var ie=r("f499"),se=r.n(ie),ue=r("3452"),ce=r.n(ue),le={CRYPTO_SECRET_KEY:"hheheljalsjdljalkejraer124121@&&$@)@!!"},de=function(e){return ce.a.AES.encrypt(se()(e),le.CRYPTO_SECRET_KEY)},fe=function(e){var t=ce.a.AES.decrypt(e.toString(),le.CRYPTO_SECRET_KEY),r=JSON.parse(t.toString(ce.a.enc.Utf8));return r},pe=function(e,t){t=de(t),localStorage.setItem(e,t)},ve=function(e){var t=localStorage.getItem(e);if(t)return fe(t)},me=function(e){localStorage.removeItem(e)};s["a"].use($["a"]);var ge=new $["a"]({routes:[{path:"/login",component:oe,name:"login"},{path:"/dashboard",component:function(){return r.e("chunk-2d0d63f1").then(r.bind(null,"7277"))},name:"dashboard",meta:{requiredAuth:!0}},{path:"/about",component:function(){return r.e("chunk-2d22d746").then(r.bind(null,"f820"))},name:"about",meta:{requiredAuth:!0}}],mode:"history"});ge.beforeEach(function(e,t,r){var n=!!ve("qw_tk_vue");e.meta.requiredAuth?n?r():r({name:"login"}):(n&&r({name:"dashboard"}),r())});var he,be,we=ge,_e=r("795b"),Oe=r.n(_e),je=(r("ac6a"),r("5df3"),r("768b")),ye=(r("96cf"),r("3b8d")),xe="ADD_TODO",ke="ADD_TODO_SUCCESS",Se="ADD_TODO_FAILED",Ee="GET_TODOS",Te="GET_TODOS_SUCCESS",Ie="GET_TODOS_FAILED",Ce=r("bc3a"),Re=r.n(Ce),Ve=Re.a.create({baseURL:"your api here"}),Ae=function(){Ve.interceptors.response.use(function(e){return e},function(e){return 406===e.response.status?(ft.dispatch("users/logout"),e.response.status):Oe.a.reject(e)})},Le=Ve,De="https://jsonplaceholder.typicode.com",qe={getTodos:"".concat(De,"/todos"),addTodo:"".concat(De,"/todos"),getPosts:"".concat(De,"/posts")},Pe=function(){var e=Object(ye["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Le.get(qe.getTodos);case 3:if(t=e.sent,200!==t.status){e.next=6;break}return e.abrupt("return",t.data);case 6:e.next=11;break;case 8:throw e.prev=8,e.t0=e["catch"](0),e.t0.message;case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}(),Ue=function(){var e=Object(ye["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.todo,e.prev=1,e.next=4,Le.post(qe.addTodo,r);case 4:if(n=e.sent,201!==n.status){e.next=7;break}return e.abrupt("return",n.data);case 7:e.next=12;break;case 9:throw e.prev=9,e.t0=e["catch"](1),e.t0.message;case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}(),$e=function(){var e=Object(ye["a"])(regeneratorRuntime.mark(function e(t){var r,n,a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,r(Ee),e.prev=2,e.next=5,Oe.a.all([Pe()]);case 5:n=e.sent,a=Object(je["a"])(n,1),o=a[0],r(Te,{todos:o}),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](2),r(Ie,{error:e.t0});case 14:case"end":return e.stop()}},e,null,[[2,11]])}));return function(t){return e.apply(this,arguments)}}(),Ge=function(){var e=Object(ye["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.todo,n(xe),e.prev=3,e.next=6,Ue({todo:a});case 6:o=e.sent,n(ke,{todo:o}),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](3),n(Se,{error:e.t0});case 13:case"end":return e.stop()}},e,null,[[3,10]])}));return function(t,r){return e.apply(this,arguments)}}(),Ne=function(e){return e.todos.filter(function(e){return e.completed})},Fe=function(e){return e.adding},Me=r("bd86"),Ye=r("75fc"),Be={todos:[],loading:!1,adding:!1,error:{}},Je=(he={},Object(Me["a"])(he,Ee,function(e){e.loading=!0,e.error={}}),Object(Me["a"])(he,Ee,function(e){e.loading=!0,e.error={}}),Object(Me["a"])(he,Te,function(e,t){var r=t.todos;e.loading=!1,e.todos=r}),Object(Me["a"])(he,Ie,function(e,t){var r=t.error;e.loading=!1,e.error=Object(d["a"])({},e.error,{loading:r.message})}),Object(Me["a"])(he,xe,function(e){e.adding=!0,e.error={}}),Object(Me["a"])(he,ke,function(e,t){var r=t.todo;e.adding=!1,e.todos=[r].concat(Object(Ye["a"])(e.todos))}),Object(Me["a"])(he,Se,function(e,t){var r=t.error;e.adding=!1,e.error=Object(d["a"])({},e.error,{adding:r.message})}),he),Ke={state:Be,mutations:Je},ze=Object(d["a"])({namespaced:!0,actions:n,getters:a},Ke),He="USER_LOGIN",Qe="USER_LOGIN_SUCCESS",We="USER_LOGIN_FAILED",Xe="USER_LOGOUT",Ze=function(){var e=Object(ye["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.user,"demo@gmail.com"!==r.email||"demo1234"!==r.password){e.next=3;break}return e.abrupt("return",{user:{id:Math.floor(1e4*Math.random()),name:"demo",email:"demo@gmail.com"},token:"uoiuowerqrq12412"});case 3:throw"Unauthorized";case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),et=function(){var e=Object(ye["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.user,n(He),e.prev=3,e.next=6,Ze({user:a});case 6:o=e.sent,n(Qe,{userInfo:o}),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](3),n(We,{error:e.t0});case 13:case"end":return e.stop()}},e,null,[[3,10]])}));return function(t,r){return e.apply(this,arguments)}}(),tt=function(){var e=Object(ye["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=t.commit,r(Xe);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),rt=function(e){return e.userInfo},nt=function(e){return e.loggedIn},at=function(e){return e.loggingIn},ot=function(e){return e.error.login},it=r("2ef0"),st=ve("qw_u_vue"),ut={userInfo:st||{},loggedIn:!it["isEmpty"](st),loggingIn:!1,error:{}},ct=(be={},Object(Me["a"])(be,He,function(e){e.loggingIn=!0,e.error={}}),Object(Me["a"])(be,We,function(e,t){var r=t.error;e.loggingIn=!1,e.error=Object(d["a"])({},e.error,{login:r})}),Object(Me["a"])(be,Qe,function(e,t){var r=t.userInfo,n=r.user,a=r.token;pe("qw_u_vue",n),pe("qw_tk_vue",a),e.loggingIn=!1,e.loggedIn=!0,e.userInfo=r,e.error={}}),Object(Me["a"])(be,Xe,function(e){me("qw_u_vue"),me("qw_tk_vue"),e.userInfo={},e.loggedIn=!1,e.error={}}),be),lt={state:ut,mutations:ct},dt=Object(d["a"])({namespaced:!0,actions:o,getters:i},lt);s["a"].use(C["b"]);var ft=new C["b"].Store({modules:{todos:ze,users:dt}}),pt=r("7bb1");Ae(),s["a"].config.productionTip=!1,s["a"].use(pt["a"]),new s["a"]({render:function(e){return e(U)},router:we,store:ft}).$mount("#app")}});
//# sourceMappingURL=app.74e82e25.js.map