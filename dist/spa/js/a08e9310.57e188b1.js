(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["a08e9310"],{b06b:function(t,e,o){"use strict";var n=o("0967"),i=o("2b0e");e["a"]=function(t,e){var o=window.open;if(!0===n["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)o=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(t,{openExternal:!0})}else if(void 0!==i["a"].prototype.$q.electron)return i["a"].prototype.$q.electron.shell.openExternal(t);var a=o(t,"_blank");if(a)return a.focus(),a;e&&e()}},f241:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{attrs:{view:"lHh Lpr lFf"}},[o("q-header",{attrs:{elevated:""}},[o("q-toolbar",[o("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[o("q-icon",{attrs:{name:"menu"}})],1),o("q-toolbar-title",{staticClass:"text-subtitle1 text-weight-bolder",on:{click:t.goTitle}},[t._v("\n        우리가만드는소식\n      ")]),o("div",[t._v("ver "+t._s(t.$p.version))]),t.isLoggedIn?o("q-btn",{attrs:{round:"",flat:""}},[o("span",{staticStyle:{"font-size":"30px",color:"#fff"}},[o("i",{staticClass:"fas fa-user-circle"})]),o("q-menu",[o("q-list",{staticStyle:{"min-width":"100px"}},[o("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:t.openMyAsset}},[o("q-item-section",[t._v("내자산")])],1),o("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:t.openEditProfile}},[o("q-item-section",[t._v("프로필수정")])],1),o("q-separator"),o("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:t.logOut}},[o("q-item-section",[t._v("Log Out")])],1)],1)],1)],1):t._e(),t.isLoggedIn?t._e():o("q-btn",{attrs:{round:"",flat:""},on:{click:t.goLogin}},[o("q-icon",{attrs:{size:"24px",name:"img:statics/img/sign_in.svg"}})],1)],1)],1),o("q-drawer",{attrs:{bordered:"","content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[o("q-list",{staticClass:"flex column"},[o("div",{staticClass:"row justify-between"},[o("q-item-label",{attrs:{header:""}},[t._v("Admin Board")]),o("q-btn",{staticClass:"q-mr-xs ",attrs:{flat:""},on:{click:function(e){t.leftDrawerOpen=!1}}},[o("span",{staticStyle:{"font-size":"30px",color:"#222"}},[o("i",{staticClass:"fas fa-window-close"})])])],1),o("q-item",{attrs:{clickable:""}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"school"}})],1),o("q-item-section",[o("q-item-label",[t._v("사용방법")]),o("q-item-label",{attrs:{caption:""}},[t._v("google.com")])],1)],1),o("q-item",{attrs:{clickable:""}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"code"}})],1),o("q-item-section",[o("q-item-label",[t._v("Github")]),o("q-item-label",{attrs:{caption:""}},[t._v("naver.com/blog/mothcar")])],1)],1)],1)],1),o("q-page-container",[o("router-view")],1)],1)},i=[],a=o("967e"),r=o.n(a),s=(o("96cf"),o("fa84")),l=o.n(s),c=o("b06b"),p={name:"MyLayout",data:function(){return{leftDrawerOpen:!1,isLoggedIn:!1}},methods:{openURL:c["a"],goTitle:function(){this.$router.push({path:"/"}),window.scrollTo(0,0)},openMyAsset:function(){console.log("# User openMyAsset Clicked...."),this.$router.push({path:"/myAsset"})},openEditProfile:function(){console.log("# User openEditProfile Clicked...."),this.$router.push({path:"/editProfile"})},goLogin:function(){console.log("### Go Login"),this.$router.push({path:"/login"})},logOut:function(){this.isLoggedIn=!1,this.$q.notify({message:"로그아웃하였습니다",color:"orange-5",icon:"fas fa-check-circle",timeout:800})},goSingup:function(){console.log("### Go goSingup"),this.$router.push({path:"/login"})}},mounted:function(){var t=l()(r.a.mark(function t(){var e;return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:console.log("%c!!! MyLayout mounted","color:gray; font-weight:bold;"),e=this.$p._data.users[0],e&&(this.isLoggedIn=!0);case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},u=p,f=o("2877"),d=Object(f["a"])(u,n,i,!1,null,null,null);e["default"]=d.exports}}]);