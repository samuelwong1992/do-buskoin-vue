(function(e){function t(t){for(var a,i,s=t[0],l=t[1],u=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("1d50")},"003b":function(e,t,n){},"169a":function(e,t,n){"use strict";n("2445")},"1d50":function(e,t,n){"use strict";n.r(t);n("3804"),n("56a2"),n("4561"),n("a991");var a=n("e832"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/home"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/tip"}},[e._v("Tip")]),e._v(" | "),this.$store.state.token?n("router-link",{attrs:{to:"/profile"}},[e._v("Profile")]):e._e(),this.$store.state.token?n("span",[e._v("|")]):e._e(),this.$store.state.token?e._e():n("router-link",{attrs:{to:"/sign-up"}},[e._v("Sign Up")]),this.$store.state.token?e._e():n("span",[e._v("| ")]),this.$store.state.token?e._e():n("router-link",{attrs:{to:"/login"}},[e._v("Login")]),this.$store.state.token?n("router-link",{attrs:{to:"/logout"}},[e._v("Logout")]):e._e()],1),n("router-view",{staticClass:"rv"})],1)},r=[],i=(n("1f1f"),n("307b")),s={},l=Object(i["a"])(s,o,r,!1,null,null,null),u=l.exports,c=n("4af9"),d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("p",{staticClass:"test"})])}],m={name:"Home",components:{}},_=m,f=Object(i["a"])(_,d,p,!1,null,"1a1a7472",null),g=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tip"},[n("div",{staticClass:"scanner-container"},[n("p",{on:{click:e.onClickLabel}},[e._v("tipa")]),e._v(" "+e._s(e.qr_code)+" "),n("QrcodeStream",{on:{decode:e.onDecode}})],1)])},v=[],b=n("654d"),k={name:"Tip",data:function(){return{qr_code:""}},components:{QrcodeStream:b["QrcodeStream"]},methods:{onClickLabel:function(){this.$router.push({name:"TipUser",params:{id:"123"}})},onDecode:function(e){console.log(e),this.$router.push({name:"TipUser",params:{id:"123"}}),this.qr_code="abcd"}}},C=k,w=(n("831e"),Object(i["a"])(C,h,v,!1,null,"3303db6e",null)),y=w.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sign-up"},[n("div",{staticClass:"sign-up-form"},[n("p",{staticClass:"title"},[e._v("Buskoin")]),n("p",[e._v("Email Address")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("p",[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("p",[e._v("Confirm Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password2,expression:"password2"}],attrs:{type:"password"},domProps:{value:e.password2},on:{input:function(t){t.target.composing||(e.password2=t.target.value)}}}),n("button",{on:{click:e.signUpPressed}},[e._v("Begin Sign Up")]),e.errorMessage?n("p",{staticClass:"error-message"},[e._v(e._s(e.errorMessage))]):e._e()])])},$=[],P={name:"SignUp",data:function(){return{email:"",password:"",password2:"",errorMessage:""}},components:{},methods:{signUpPressed:function(){var e=this,t=new FormData;t.append("email",this.email),t.append("password",this.password),this.axios.post(this.$hostname+"api/sign-up/",t,{headers:{"Content-Type":"application/json"}}).then((function(t){null!=t.data.error?e.errorMessage=t.data.error:null!=t.data.url?window.location=t.data.url:e.errorMessage="Something went wrong...",console.log(t.data)})).catch((function(e){console.log(e)}))}}},T=P,M=(n("bf3d"),Object(i["a"])(T,x,$,!1,null,"748ed9f6",null)),S=M.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"profile"},[n("StripeCheckout",{ref:"checkoutRef",attrs:{pk:"pk_test_51IXzZ1HfGkYzo1kqXdmETsXtFVJHnBz9Fx4kFxBdm4sW5qVQUJW61fjWs2ppM5w2Ep779xDI5j4EMYimlS7VGvvY00yx2gYEDt",sessionId:e.sessionId}}),e.errorMessage||e.notFound?e._e():n("div",{staticClass:"profile-container"},[n("img",{attrs:{src:e.logo,alt:""}}),n("p",{staticClass:"entertainer-name"},[e._v(e._s(e.entertainer_name))]),n("p",{staticClass:"entertainer-heading"},[e._v(e._s(e.headline))]),n("div",{staticClass:"button-container"},[e.isCustom?e._e():n("button",{on:{click:function(t){return e.createPayment(2)}}},[e._v("$2")]),e.isCustom?e._e():n("button",{on:{click:function(t){return e.createPayment(5)}}},[e._v("$5")]),e.isCustom?e._e():n("button",{on:{click:function(t){e.isCustom=!e.isCustom}}},[e._v(" Custom ")]),e.isCustom?n("div",{staticClass:"input-container"},[n("p",[e._v("$")]),n("input",{attrs:{type:"number",placeholder:"Donation Amount"}})]):e._e(),e.isCustom?n("button",[e._v("Donate")]):e._e()])]),e.errorMessage?n("div",{staticClass:"profile-container"},[n("p",{staticClass:"error-text"},[e._v(e._s(e.errorMessage))])]):e._e(),e.notFound?n("not-found-component"):e._e()],1)},O=[],E=n("fe2a"),N=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},F=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("div",{staticClass:"centered"},[n("h1",{staticStyle:{"margin-bottom":"24px"}},[e._v("Oh No!")]),n("h3",{staticStyle:{"margin-top":"24px"}},[e._v(" We couldn't find the page you were looking for! ")])])])])}],U={name:"NotFoundComponent",components:{}},L=U,G=(n("7d34"),Object(i["a"])(L,N,F,!1,null,"9f8d8a76",null)),D=G.exports,Q={name:"TipUser",data:function(){return{entertainer_name:"",headline:"",logo:"",sessionId:"",errorMessage:"",isCustom:!1,notFound:!1}},components:{StripeCheckout:E["StripeCheckout"],NotFoundComponent:D},methods:{createPayment:function(e){var t=this,n=new FormData;n.append("value",e),n.append("user",this.$route.params.id),this.axios.post(this.$hostname+"api/create-payment/",n,{headers:{"Content-Type":"application/json"}}).then((function(e){null!=e.data.error&&(t.errorMessage=e.data.error),null!=e.data.client_secret.id?(t.sessionId=e.data.client_secret.id,t.$refs.checkoutRef.redirectToCheckout()):t.errorMessage="Something went wrong..."})).catch((function(e){console.log(e)}))}},mounted:function(){var e=this;this.$nextTick((function(){var t=e;e.axios.get(e.$hostname+"api/fetch-profile/"+e.$route.params.id+"/",{headers:{"Content-Type":"application/json"}}).then((function(t){null!=t.data.error?e.errorMessage=t.data.error:null!=t.data.profile&&(e.entertainer_name=t.data.profile.entertainer_name,e.headline=t.data.profile.headline,e.logo=t.data.profile.logo)})).catch((function(e){console.log(e),t.notFound=!0}))}))}},H=Q,I=(n("169a"),Object(i["a"])(H,j,O,!1,null,"5117b21c",null)),q=I.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{staticClass:"login-form"},[n("p",{staticClass:"title"},[e._v("Buskoin")]),n("p",[e._v("Email Address")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("p",[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("button",{on:{click:e.loginPressed}},[e._v("Login")]),e.errorMessage?n("p",{staticClass:"error-message"},[e._v(e._s(e.errorMessage))]):e._e()])])},A=[],B={name:"Login",data:function(){return{email:"",password:"",errorMessage:""}},components:{},mounted:function(){this.email=this.$route.params.email},methods:{loginPressed:function(){var e=this,t=new FormData;t.append("username",this.email),t.append("password",this.password),this.axios.post(this.$hostname+"api/login/",t,{headers:{"Content-Type":"application/json"}}).then((function(t){null!=t.data.error?e.errorMessage=t.data.error:null!=t.data.token?(e.$store.commit("LOGIN_SUCCESS",t.data.token),e.$router.push({name:"Profile"})):e.errorMessage="Something went wrong...",console.log(t.data)})).catch((function(e){console.log(e)}))}}},R=B,J=(n("9578"),Object(i["a"])(R,z,A,!1,null,"1af4b9f2",null)),V=J.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"profile"},[e.notFound?e._e():n("div",{staticClass:"profile-container"},[n("div",{staticClass:"logo-container"},[n("img",{attrs:{src:e.logo,alt:"",srcset:""}}),e.uuid?e._e():n("button",{staticClass:"primary-button",staticStyle:{width:"100%","margin-bottom":"24px"},on:{click:e.goToGenerate}},[e._v(" Generate QR Code ")]),n("div",{staticClass:"social-links"},[e.facebook_url||e.editing?n("div",{staticClass:"social-link"},[e.editing?e._e():n("a",{attrs:{target:"_blank",href:e.facebook_url}},[n("img",{attrs:{src:"/assets/images/facebook_logo.png",alt:"",srcset:""}}),n("p",[e._v(e._s(e.facebook_url))])]),e.editing?n("img",{attrs:{src:"/assets/images/facebook_logo.png",alt:"",srcset:""}}):e._e(),e.editing?n("input",{directives:[{name:"model",rawName:"v-model",value:e.facebook_url,expression:"facebook_url"}],attrs:{type:"text"},domProps:{value:e.facebook_url},on:{input:function(t){t.target.composing||(e.facebook_url=t.target.value)}}}):e._e()]):e._e(),e.insta_url||e.editing?n("div",{staticClass:"social-link"},[e.editing?e._e():n("a",{attrs:{target:"_blank",href:e.insta_url}},[n("img",{attrs:{src:"/assets/images/insta_logo.png",alt:"",srcset:""}}),n("p",[e._v(e._s(e.insta_url))])]),e.editing?n("img",{attrs:{src:"/assets/images/insta_logo.png",alt:"",srcset:""}}):e._e(),e.editing?n("input",{directives:[{name:"model",rawName:"v-model",value:e.insta_url,expression:"insta_url"}],attrs:{type:"text"},domProps:{value:e.insta_url},on:{input:function(t){t.target.composing||(e.insta_url=t.target.value)}}}):e._e()]):e._e(),e.youtube_url||e.editing?n("div",{staticClass:"social-link"},[e.editing?e._e():n("a",{attrs:{target:"_blank",href:e.youtube_url}},[n("img",{attrs:{src:"/assets/images/youtube_logo.png",alt:"",srcset:""}}),n("p",[e._v(e._s(e.youtube_url))])]),e.editing?n("img",{attrs:{src:"/assets/images/youtube_logo.png",alt:"",srcset:""}}):e._e(),e.editing?n("input",{directives:[{name:"model",rawName:"v-model",value:e.youtube_url,expression:"youtube_url"}],attrs:{type:"text"},domProps:{value:e.youtube_url},on:{input:function(t){t.target.composing||(e.youtube_url=t.target.value)}}}):e._e()]):e._e(),e.twitter_url||e.editing?n("div",{staticClass:"social-link"},[e.editing?e._e():n("a",{attrs:{target:"_blank",href:e.twitter_url}},[n("img",{attrs:{src:"/assets/images/twitter_logo.png",alt:"",srcset:""}}),n("p",[e._v(e._s(e.twitter_url))])]),e.editing?n("img",{attrs:{src:"/assets/images/twitter_logo.png",alt:"",srcset:""}}):e._e(),e.editing?n("input",{directives:[{name:"model",rawName:"v-model",value:e.twitter_url,expression:"twitter_url"}],attrs:{type:"text"},domProps:{value:e.twitter_url},on:{input:function(t){t.target.composing||(e.twitter_url=t.target.value)}}}):e._e()]):e._e(),e.snapchat_url||e.editing?n("div",{staticClass:"social-link"},[e.editing?e._e():n("a",{attrs:{target:"_blank",href:e.snapchat_url}},[n("img",{attrs:{src:"/assets/images/snapchat_logo.png",alt:"",srcset:""}}),n("p",[e._v(e._s(e.snapchat_url))])]),e.editing?n("img",{attrs:{src:"/assets/images/snapchat_logo.png",alt:"",srcset:""}}):e._e(),e.editing?n("input",{directives:[{name:"model",rawName:"v-model",value:e.snapchat_url,expression:"snapchat_url"}],attrs:{type:"text"},domProps:{value:e.snapchat_url},on:{input:function(t){t.target.composing||(e.snapchat_url=t.target.value)}}}):e._e()]):e._e()])]),n("div",{staticClass:"entertainer-info"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.entertainer_name,expression:"entertainer_name"}],staticClass:"entertainer-name",class:{"not-editing":!e.editing,editing:e.editing},attrs:{disabled:!e.editing||e.saving},domProps:{value:e.entertainer_name},on:{input:function(t){t.target.composing||(e.entertainer_name=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.headline,expression:"headline"}],staticClass:"entertainer-heading",class:{"not-editing":!e.editing,editing:e.editing},attrs:{disabled:!e.editing||e.saving},domProps:{value:e.headline},on:{input:function(t){t.target.composing||(e.headline=t.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.bio,expression:"bio"}],staticClass:"entertainer-bio",class:{"not-editing":!e.editing,editing:e.editing},attrs:{disabled:!e.editing||e.saving},domProps:{value:e.bio},on:{input:function(t){t.target.composing||(e.bio=t.target.value)}}}),e.editing||e.uuid?e._e():n("button",{staticClass:"edit-button",on:{click:e.enableEdit}},[e._v(" Edit ")]),e.editing&&!e.uuid?n("button",{staticClass:"save-button",on:{click:e.save}},[e._v(" "+e._s(e.saving?"Saving...":"Save")+" ")]):e._e(),n("p",{staticClass:"error-text"},[e._v(e._s(e.errorMessage))])])]),e.notFound?n("not-found-component"):e._e()],1)},Y=[],X={name:"Profile",data:function(){return{errorMessage:"",entertainer_name:"",headline:"",bio:"",facebook_url:"",insta_url:"",youtube_url:"",twitter_url:"",snapchat_url:"",logo:"",editing:!1,saving:!1,uuid:this.$route.params.id,notFound:!1}},components:{NotFoundComponent:D},methods:{getProfile:function(){var e=this,t=this;this.uuid?this.axios.get(this.$hostname+"api/fetch-profile/"+this.uuid+"/",{headers:{"Content-Type":"application/json"}}).then((function(t){null!=t.data.error&&(e.errorMessage=t.data.error),null!=t.data.profile&&(e.entertainer_name=t.data.profile.entertainer_name,e.headline=t.data.profile.headline,e.bio=t.data.profile.bio,e.facebook_url=t.data.profile.facebook_url,e.insta_url=t.data.profile.insta_url,e.youtube_url=t.data.profile.youtube_url,e.twitter_url=t.data.profile.twitter_url,e.snapchat_url=t.data.profile.snapchat_url,e.logo=t.data.profile.logo)})).catch((function(e){console.log(e)})):this.axios.get(this.$hostname+"api/profile/",{headers:{"Content-Type":"application/json",Authorization:"Token "+this.$store.state.token}}).then((function(t){null!=t.data.error&&(e.errorMessage=t.data.error),null!=t.data.profile&&(e.entertainer_name=t.data.profile.entertainer_name,e.headline=t.data.profile.headline,e.bio=t.data.profile.bio,e.facebook_url=t.data.profile.facebook_url,e.insta_url=t.data.profile.insta_url,e.youtube_url=t.data.profile.youtube_url,e.twitter_url=t.data.profile.twitter_url,e.snapchat_url=t.data.profile.snapchat_url,e.logo=t.data.profile.logo)})).catch((function(e){console.log(e),t.notFound=!0}))},goToGenerate:function(){this.$router.push({name:"GenerateQR"})},enableEdit:function(){this.editing=!0},save:function(){var e=this;if(!this.saving){var t=new FormData;t.append("entertainer_name",this.entertainer_name),t.append("headline",this.headline),t.append("bio",this.bio),t.append("facebook_url",this.facebook_url),t.append("insta_url",this.insta_url),t.append("youtube_url",this.youtube_url),t.append("twitter_url",this.twitter_url),t.append("snapchat_url",this.snapchat_url),this.saving=!0,this.axios.patch(this.$hostname+"api/profile/",t,{headers:{"Content-Type":"application/json",Authorization:"Token "+this.$store.state.token}}).then((function(t){e.saving=!1,e.editing=!1,null!=t.data.error&&(e.errorMessage=t.data.error),null!=t.data.profile&&(e.entertainer_name=t.data.profile.entertainer_name,e.headline=t.data.profile.headline,e.bio=t.data.profile.bio,e.facebook_url=t.data.profile.facebook_url,e.insta_url=t.data.profile.insta_url,e.youtube_url=t.data.profile.youtube_url,e.twitter_url=t.data.profile.twitter_url,e.snapchat_url=t.data.profile.snapchat_url,e.logo=t.data.profile.logo)})).catch((function(e){this.saving=!1,this.editing=!1,console.log(e)}))}}},mounted:function(){var e=this;this.$nextTick((function(){return e.getProfile()}))}},Z=X,K=(n("42e5"),Object(i["a"])(Z,W,Y,!1,null,"f61b6dea",null)),ee=K.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"profile"},[n("div",{staticClass:"profile-container"},[e.errorMessage?e._e():n("img",{attrs:{src:e.logo,alt:""}}),e.errorMessage?e._e():n("p",{staticClass:"entertainer-name"},[e._v(" "+e._s(e.entertainer_name)+" ")]),e.errorMessage?e._e():n("p",{staticClass:"entertainer-heading"},[e._v(e._s(e.headline))]),e.errorMessage?e._e():n("p",{staticClass:"donation"},[e._v(" Thank you for your $"+e._s(e.value)+" donation ")]),e.errorMessage?n("p",{staticClass:"error-text"},[e._v(e._s(e.errorMessage))]):e._e(),e.entertainer_uuid&&1==e.errorCode?n("button",{staticClass:"profile-btn",on:{click:e.backToTipScreen}},[e._v(" Back to Tip Screen ")]):e._e(),e.entertainer_uuid&&1!=e.errorCode?n("button",{staticClass:"profile-btn",on:{click:e.backToProfileScreen}},[e._v(" Entertainer Profile ")]):e._e()])])},ne=[],ae={name:"Confirmation",data:function(){return{entertainer_name:"",headline:"",logo:"",value:"",errorMessage:"",errorCode:"",entertainer_uuid:""}},methods:{backToTipScreen:function(){this.$router.push({name:"TipUser",params:{id:this.entertainer_uuid}})},backToProfileScreen:function(){this.$router.push({name:"Profile",params:{id:this.entertainer_uuid}})}},mounted:function(){var e=this;this.$nextTick((function(){e.axios.get(e.$hostname+"api/fetch-payment/"+e.$route.params.id+"/",{headers:{"Content-Type":"application/json"}}).then((function(t){console.log(t),null!=t.data.error?(e.errorMessage=t.data.error,e.errorCode=t.data.code,e.entertainer_uuid=t.data.entertainer.uuid):null!=t.data.success?(e.entertainer_name=t.data.entertainer.entertainer_name,e.headline=t.data.entertainer.headline,e.logo=t.data.entertainer.logo,e.entertainer_uuid=t.data.entertainer.uuid,e.value=t.data.value):e.errorMessage="Something went wrong..."})).catch((function(e){console.log(e)}))}))}},oe=ae,re=(n("9d92"),Object(i["a"])(oe,te,ne,!1,null,"08d9cfb9",null)),ie=re.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"generate-qr"},[e.entertainer_uuid?n("qrcode-vue",{attrs:{value:e.entertainer_uuid,size:300,level:"H"}}):e._e()],1)},le=[],ue=n("41e2"),ce={name:"GenerateQR",data:function(){return{errorMessage:"",entertainer_uuid:"",entertainer_name:"",headline:"",logo:""}},components:{QrcodeVue:ue["a"]},methods:{getProfile:function(){var e=this;this.axios.get(this.$hostname+"api/profile/",{headers:{"Content-Type":"application/json",Authorization:"Token "+this.$store.state.token}}).then((function(t){null!=t.data.error?e.errorMessage=t.data.error:null!=t.data.profile&&(e.entertainer_uuid=e.$hostname+"api/tip-user/"+t.data.profile.uuid,e.entertainer_name=t.data.profile.entertainer_name,e.headline=t.data.profile.headline,e.logo=t.data.profile.logo)})).catch((function(e){console.log(e)}))}},mounted:function(){var e=this;this.$nextTick((function(){return e.getProfile()}))}},de=ce,pe=(n("9491"),Object(i["a"])(de,se,le,!1,null,"eb380206",null)),me=pe.exports,_e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._v("Home")])},fe=[],ge={name:"Logout",components:{},mounted:function(){var e=this;this.$nextTick((function(){e.$store.commit("LOGOUT"),e.$router.push({name:"Home"})}))}},he=ge,ve=Object(i["a"])(he,_e,fe,!1,null,null,null),be=ve.exports,ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("not-found-component")],1)},Ce=[],we={name:"NotFound",components:{NotFoundComponent:D}},ye=we,xe=Object(i["a"])(ye,ke,Ce,!1,null,"4a82bd5b",null),$e=xe.exports;a["a"].use(c["a"]);var Pe=[{path:"/home",name:"Home",component:g},{path:"/tip",name:"Tip",component:y},{path:"/sign-up",name:"Sign Up",component:S},{path:"/tip-user/:id",name:"TipUser",component:q},{path:"/login/:email?",name:"Login",component:V},{path:"/profile/:id?",name:"Profile",component:ee},{path:"/confirmation/:id",name:"Confirmation",component:ie},{path:"/generate/",name:"GenerateQR",component:me},{path:"/logout/",name:"Logout",component:be},{path:"*",name:"NotFound",component:$e}],Te=new c["a"]({history:!0,routes:Pe}),Me=Te,Se=n("94ea"),je=n("8de1");a["a"].use(Se["a"]);var Oe=new Se["a"].Store({state:{token:null},mutations:{LOGIN_SUCCESS:function(e,t){e.token=t},LOGOUT:function(e){e.token=null}},actions:{},modules:{},plugins:[Object(je["a"])()]}),Ee=n("7338"),Ne=n.n(Ee),Fe=n("0f8d"),Ue=n.n(Fe);a["a"].config.productionTip=!1,a["a"].prototype.$hostname="https://api.buskoin.com/",new a["a"]({router:Me,store:Oe,render:function(e){return e(u)}}).$mount("#app"),a["a"].use(Ue.a,Ne.a)},"1f1f":function(e,t,n){"use strict";n("37a6")},2445:function(e,t,n){},"37a6":function(e,t,n){},"42e5":function(e,t,n){"use strict";n("8899")},4761:function(e,t,n){},"61f6":function(e,t,n){},"64bc":function(e,t,n){},"7d34":function(e,t,n){"use strict";n("4761")},"831e":function(e,t,n){"use strict";n("64bc")},8899:function(e,t,n){},"8ccf":function(e,t,n){},9491:function(e,t,n){"use strict";n("61f6")},9578:function(e,t,n){"use strict";n("8ccf")},"9d92":function(e,t,n){"use strict";n("003b")},bf3d:function(e,t,n){"use strict";n("f488")},f488:function(e,t,n){}});
//# sourceMappingURL=app.22ed9e2c.js.map