(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0afb0942","chunk-2d0e6c4a","chunk-2d2214e3","chunk-2d0cc978","chunk-2d0ce820"],{"439b":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Popup",{attrs:{lazy:e.lazy,overlayClick:e.overlayClick},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("div",{staticClass:"v-actionsheet"},[e._t("header",[e.title||e.describe?n("header",{staticClass:"v-actionsheet__header v-bd-bottom"},[n("h4",{staticClass:"v-actionsheet__title"},[e._v(e._s(e.title))]),n("p",{staticClass:"v-actionsheet__describe"},[e._v(e._s(e.describe))])]):e._e()]),e._t("default",[n("ul",{staticClass:"v-actionsheet__items"},[e._l(e.actions,(function(t,a){return n("li",{key:a,staticClass:"v-actionsheet__item v-bd-top",class:["v-actionsheet--"+e.align,"v-actionsheet--"+(t.type||"default"),{"v-actionsheet--disabled":t.loading},t.className],on:{click:function(n){return e.clickHandler(t)}}},[t.loading?n("Loading",{attrs:{size:"22"}}):n("span",[e._v(e._s(t.name))])],1)})),e.cancelText?n("li",{staticClass:"v-actionsheet__item v-actionsheet--center v-actionsheet__cancel",on:{click:e.cancel}},[e._v("\n          取消\n        ")]):e._e()],2)])],2)])},o=[],i=n("90e5"),s=n("2c1b"),c={name:"Actionsheet",components:{Popup:i["a"],Loading:s["a"]},props:{value:{type:Boolean,required:!0},title:{type:String,default:""},describe:{type:String,default:""},actions:{type:Array,default:function(){return[]}},cancelText:{type:String,default:"取消"},overlayClick:{type:Boolean,default:!0},lazy:{type:Boolean,default:!0},align:{type:String,default:"center"}},computed:{show:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{clickHandler:function(e){"disabled"===e.type||e.loading||this.$emit("click",e)},cancel:function(){this.$emit("input",!1),this.$emit("cancel")}}},r=c,l=(n("b714"),n("2877")),u=Object(l["a"])(r,a,o,!1,null,null,null);t["a"]=u.exports},"4ee1c":function(e,t,n){var a=n("b041");t=e.exports=n("2350")(!1),t.push([e.i,".actionsheet__share{display:-webkit-box;display:-webkit-flex;display:flex;padding:14px 12px;background-color:#fff}.actionsheet__item{text-align:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:46px;background-repeat:no-repeat;background-position:50%;background-size:auto 100%}.actionsheet__item--weixin{background-image:url("+a(n("606f"))+")}.actionsheet__item--friend{background-image:url("+a(n("ca7f"))+")}.actionsheet__item--qq{background-image:url("+a(n("99c7"))+")}.actionsheet__item--weibo{background-image:url("+a(n("4f1a"))+")}",""])},"4f1a":function(e,t,n){e.exports=n.p+"img/share-wb.c6ec6f0f.svg"},"57a2":function(e,t,n){"use strict";var a=n("fbf9"),o=n.n(a);o.a},"606f":function(e,t,n){e.exports=n.p+"img/share-wx.7e9491bd.svg"},"75b4":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".v-actionsheet{background-color:var(--background);color:var(--textPrimary)}.v-actionsheet__header{padding:12px;background-color:#fff;text-align:center}.v-actionsheet__title{font-size:17px;margin:0;padding:0;font-weight:400}.v-actionsheet__describe{margin:4px 0 0;color:var(--textRegular);font-size:14px}.v-actionsheet__items{margin:0;padding:0;list-style:none}.v-actionsheet__item{display:flex;align-items:center;padding-left:20px;padding-right:20px;height:48px;font-size:16px;background-color:#fff}.v-actionsheet__item:first-child.v-bd-top:before{display:none}.v-actionsheet__item:active{background-color:var(--border)}.v-actionsheet--default{color:var(--textPrimary)}.v-actionsheet--primary{color:var(--primary)}.v-actionsheet--warning{color:var(--error)}.v-actionsheet--disabled{color:var(--textSecondary)}.v-actionsheet--disabled:active{background-color:#fff}.v-actionsheet--center{justify-content:center}.v-actionsheet--left{justify-content:left}.v-actionsheet__cancel{margin-top:10px}",""])},7831:function(e,t,n){"use strict";var a=n("cb49"),o=n.n(a);o.a},"90e5":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:e.transitionName}},[e.loaded?n("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"v-popup"},[n("div",{staticClass:"v-popup__content",class:["v-popup--"+e.position,e.contentClass]},[e._t("default")],2),e.overlay?n("div",{staticClass:"v-popup__overlay",on:{click:e.close,touchmove:function(e){e.preventDefault()}}}):e._e()]):e._e()])},o=[],i=n("4c40"),s={name:"Popup",mixins:[i["a"]],props:{value:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},overlayClick:{type:Boolean,default:!0},transitionName:{type:String,default:"v-popup"},position:{type:String,default:"bottom"},contentClass:{type:String,default:""}},methods:{close:function(){this.overlayClick&&(this.$emit("input",!1),this.$emit("close"))}}},c=s,r=(n("57a2"),n("2877")),l=Object(r["a"])(c,a,o,!1,null,null,null);t["a"]=l.exports},"938b":function(e,t,n){var a=n("75b4");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=n("499e").default;o("4ca5fca6",a,!0,{sourceMap:!1,shadowMode:!1})},"99c7":function(e,t,n){e.exports=n.p+"img/share-qq.c875965c.svg"},b714:function(e,t,n){"use strict";var a=n("938b"),o=n.n(a);o.a},ca7f:function(e,t,n){e.exports=n.p+"img/share-tl.f367f079.svg"},cb49:function(e,t,n){var a=n("4ee1c");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=n("499e").default;o("336be740",a,!0,{sourceMap:!1,shadowMode:!1})},ea2b:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,":root{--duration:300ms}.v-popup{transition-duration:.3s;transition-duration:var(--duration)}.v-popup__content{position:fixed;z-index:10000;width:100%;transition:transform .3s;transition:transform var(--duration);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-popup--top{left:0;top:0}.v-popup--right{right:0;bottom:0}.v-popup--bottom,.v-popup--left{left:0;bottom:0}.v-popup__overlay{position:fixed;top:0;left:0;z-index:9999;width:100%;height:100%;background-color:rgba(0,0,0,.7);transition:opacity .3s;transition:opacity var(--duration)}.v-popup-enter .v-popup__overlay,.v-popup-leave-active .v-popup__overlay{opacity:0}.v-popup-enter .v-popup--bottom,.v-popup-leave-active .v-popup--bottom{transform:translateY(100%)}.v-popup-enter .v-popup--top,.v-popup-leave-active .v-popup--top{transform:translateY(-100%)}.v-popup-enter .v-popup--left,.v-popup-leave-active .v-popup--left{transform:translateX(-100%)}.v-popup-enter .v-popup--right,.v-popup-leave-active .v-popup--right{transform:translateX(100%)}",""])},eccf:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Navbar",{attrs:{title:"Actionsheet"}}),n("div",{staticClass:"app--spacing"},[n("h4",[e._v("类型")]),n("VButton",{on:{click:function(t){e.showUploadMenus=!0}}},[e._v("默认")]),n("VButton",{on:{click:function(t){e.showCustomMenus=!0}}},[e._v("自定义")]),n("Actionsheet",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{actions:e.actions},model:{value:e.showUploadMenus,callback:function(t){e.showUploadMenus=t},expression:"showUploadMenus"}}),n("Actionsheet",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{title:"分享到"},model:{value:e.showCustomMenus,callback:function(t){e.showCustomMenus=t},expression:"showCustomMenus"}},[n("div",{staticClass:"actionsheet__share"},[n("i",{staticClass:"actionsheet__item actionsheet__item--weixin"}),n("i",{staticClass:"actionsheet__item actionsheet__item--friend"}),n("i",{staticClass:"actionsheet__item actionsheet__item--qq"}),n("i",{staticClass:"actionsheet__item actionsheet__item--weibo"})])]),n("Actionsheet",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{actions:e.actions,align:"left",cancelText:""},model:{value:e.showAlignMenus,callback:function(t){e.showAlignMenus=t},expression:"showAlignMenus"}}),n("Actionsheet",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{title:"上传图片",describe:"请上传小于2M的图片",actions:e.actions},model:{value:e.showHeaderMenus,callback:function(t){e.showHeaderMenus=t},expression:"showHeaderMenus"}}),n("Actionsheet",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{actions:e.disabledActions},model:{value:e.showDisabledMenus,callback:function(t){e.showDisabledMenus=t},expression:"showDisabledMenus"}}),n("Actionsheet",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{describe:"删除后不可恢复，确定要删除吗？",actions:e.deleteActions},on:{click:e.deleteHandler},model:{value:e.showDeleteMenus,callback:function(t){e.showDeleteMenus=t},expression:"showDeleteMenus"}}),n("h4",[e._v("属性")]),n("VButton",{on:{click:function(t){e.showAlignMenus=!0}}},[e._v(" 左对齐 ")]),n("VButton",{on:{click:function(t){e.showHeaderMenus=!0}}},[e._v(" 有头部和描述 ")]),n("br"),n("br"),n("VButton",{on:{click:function(t){e.showDisabledMenus=!0}}},[e._v(" 禁用 ")]),n("VButton",{on:{click:function(t){e.showDeleteMenus=!0}}},[e._v(" 颜色 ")])],1)],1)},o=[],i=n("439b"),s={name:"page-actionsheet",components:{Actionsheet:i["a"]},data:function(){return{showUploadMenus:!1,actions:[{name:"拍照"},{name:"从相册选择"}],disabledActions:[{name:"拍照"},{name:"从相册选择",type:"disabled"}],deleteActions:[{name:"确定",type:"warning",delete:!0,loading:!1},{name:"我再想想",type:"primary"}],showCustomMenus:!1,showAlignMenus:!1,showHeaderMenus:!1,showDisabledMenus:!1,showDeleteMenus:!1}},methods:{alignLeft:function(){this.showUploadMenus=!0,this.align="left"},deleteHandler:function(e){e.delete?e.loading=!0:this.showDeleteMenus=!1}}},c=s,r=(n("7831"),n("2877")),l=Object(r["a"])(c,a,o,!1,null,null,null);t["default"]=l.exports},fbf9:function(e,t,n){var a=n("ea2b");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=n("499e").default;o("41709629",a,!0,{sourceMap:!1,shadowMode:!1})}}]);