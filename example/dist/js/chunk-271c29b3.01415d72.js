(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-271c29b3","chunk-2d0e6c4a","chunk-2d2214e3","chunk-2d0cc978","chunk-2d0ce820"],{"06d8":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".v-popup{-webkit-transition-duration:.3s;transition-duration:.3s}.v-popup-content{position:fixed;z-index:10000;width:100%;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-popup-content-top{left:0;top:0}.v-popup-content-right{right:0;bottom:0}.v-popup-content-bottom,.v-popup-content-left{left:0;bottom:0}.v-popup-overlay{position:fixed;top:0;left:0;z-index:9999;width:100%;height:100%;background-color:rgba(0,0,0,.7);-webkit-transition:opacity .3s;transition:opacity .3s}.v-popup-enter .v-popup-overlay,.v-popup-leave-active .v-popup-overlay{opacity:0}.v-popup-enter .v-popup-content-bottom,.v-popup-leave-active .v-popup-content-bottom{-webkit-transform:translateY(100%);transform:translateY(100%)}.v-popup-enter .v-popup-content-top,.v-popup-leave-active .v-popup-content-top{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.v-popup-enter .v-popup-content-left,.v-popup-leave-active .v-popup-content-left{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.v-popup-enter .v-popup-content-right,.v-popup-leave-active .v-popup-content-right{-webkit-transform:translateX(100%);transform:translateX(100%)}",""])},"0a34":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:e.transitionName}},[e.loaded?n("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"v-popup"},[n("div",{staticClass:"v-popup-content",class:"v-popup-content-"+e.position},[e._t("default")],2),e.overlay?n("div",{staticClass:"v-popup-overlay",on:{click:e.close,touchmove:function(e){e.preventDefault()}}}):e._e()]):e._e()])},a=[],s=n("d10e"),i={name:"Popup",mixins:[s["a"]],props:{value:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},overlayClick:{type:Boolean,default:!0},transitionName:{type:String,default:"v-popup"},position:{type:String,default:"bottom"}},methods:{close:function(){this.overlayClick&&(this.$emit("input",!1),this.$emit("close"))}}},c=i,l=(n("7123"),n("2877")),r=Object(l["a"])(c,o,a,!1,null,null,null);t["a"]=r.exports},2330:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".v-actionsheet{background-color:#f0eff5;color:#000}.v-actionsheet-header{padding:12px;background-color:#fff;text-align:center}.v-actionsheet-title{font-size:17px;margin:0;padding:0;font-weight:400}.v-actionsheet-describe{margin:0;color:#8e8e90;font-size:14px}.v-actionsheet-default{margin:0;padding:0;list-style:none}.v-actionsheet-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:20px;padding-right:20px;height:48px;font-size:16px;background-color:#fff}.v-actionsheet-item:first-child.v-bd-y-top:before{display:none}.v-actionsheet-item:active{background-color:#d9d9d9}.v-actionsheet-item-default{color:#000}.v-actionsheet-item-primary{color:#2196f3}.v-actionsheet-item-warning{color:#ff5252}.v-actionsheet-item-disabled{color:#d9d9d9}.v-actionsheet-item-disabled:active{background-color:#fff}.v-actionsheet-align-center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.v-actionsheet-align-left{-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left}.v-actionsheet-cancel{margin-top:10px}",""])},"4ee1c":function(e,t,n){var o=n("b041");t=e.exports=n("2350")(!1),t.push([e.i,".share-actionsheet{display:-webkit-box;display:-webkit-flex;display:flex;padding:14px 12px;background-color:#fff}.share-item{text-align:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;height:46px;background-repeat:no-repeat;background-position:50%;background-size:auto 100%}.weixin{background-image:url("+o(n("606f"))+")}.friend{background-image:url("+o(n("ca7f"))+")}.qq{background-image:url("+o(n("99c7"))+")}.weibo{background-image:url("+o(n("4f1a"))+")}",""])},"4f1a":function(e,t,n){e.exports=n.p+"img/share-wb.c6ec6f0f.svg"},"606f":function(e,t,n){e.exports=n.p+"img/share-wx.7e9491bd.svg"},7123:function(e,t,n){"use strict";var o=n("9c17"),a=n.n(o);a.a},7831:function(e,t,n){"use strict";var o=n("cb49"),a=n.n(o);a.a},"99c7":function(e,t,n){e.exports=n.p+"img/share-qq.c875965c.svg"},"9c17":function(e,t,n){var o=n("06d8");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=n("499e").default;a("5a1d27a1",o,!0,{sourceMap:!1,shadowMode:!1})},c1c4:function(e,t,n){var o=n("2330");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=n("499e").default;a("67cd941e",o,!0,{sourceMap:!1,shadowMode:!1})},ca7f:function(e,t,n){e.exports=n.p+"img/share-tl.f367f079.svg"},cb49:function(e,t,n){var o=n("4ee1c");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=n("499e").default;a("336be740",o,!0,{sourceMap:!1,shadowMode:!1})},d2a2:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Popup",{attrs:{lazy:e.lazy,overlayClick:e.overlayClick},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("div",{staticClass:"v-actionsheet"},[e._t("header",[e.title||e.describe?n("header",{staticClass:"v-actionsheet-header v-bd-y-bottom"},[n("h4",{staticClass:"v-actionsheet-title"},[e._v(e._s(e.title))]),n("p",{staticClass:"v-actionsheet-describe"},[e._v(e._s(e.describe))])]):e._e()]),e._t("default",[n("ul",{staticClass:"v-actionsheet-default"},[e._l(e.actions,function(t,o){return n("li",{key:o,staticClass:"v-actionsheet-item v-bd-y-top",class:["v-actionsheet-align-"+e.align,"v-actionsheet-item-"+(t.type||"default"),{"v-actionsheet-item-disabled":t.loading},t.className],on:{click:function(n){return e.clickHandler(t)}}},[t.loading?n("Loading",{attrs:{size:"22"}}):n("span",[e._v(e._s(t.name))])],1)}),e.cancelText?n("li",{staticClass:"v-actionsheet-item v-actionsheet-align-center v-actionsheet-cancel",on:{click:e.cancel}},[e._v("\n          取消\n        ")]):e._e()],2)])],2)])},a=[],s=n("0a34"),i=n("b4b5"),c={name:"Actionsheet",components:{Popup:s["a"],Loading:i["a"]},props:{value:{type:Boolean,required:!0},title:{type:String,default:""},describe:{type:String,default:""},actions:{type:Array,default:function(){return[]}},cancelText:{type:String,default:"取消"},overlayClick:{type:Boolean,default:!0},lazy:{type:Boolean,default:!0},align:{type:String,default:"center"}},computed:{show:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{clickHandler:function(e){"disabled"===e.type||e.loading||this.$emit("click",e)},cancel:function(){this.$emit("input",!1),this.$emit("cancel")}}},l=c,r=(n("d9e4"),n("2877")),p=Object(r["a"])(l,o,a,!1,null,null,null);t["a"]=p.exports},d9e4:function(e,t,n){"use strict";var o=n("c1c4"),a=n.n(o);a.a},eccf:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Navbar",{attrs:{title:"Actionsheet"}}),n("div",{staticClass:"page-spacing"},[n("h4",[e._v("类型")]),n("VButton",{on:{click:function(t){e.showUploadMenus=!0}}},[e._v("默认")]),n("VButton",{on:{click:function(t){e.showCustomMenus=!0}}},[e._v("自定义")]),n("Actionsheet",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{actions:e.actions},model:{value:e.showUploadMenus,callback:function(t){e.showUploadMenus=t},expression:"showUploadMenus"}}),n("Actionsheet",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{title:"分享到"},model:{value:e.showCustomMenus,callback:function(t){e.showCustomMenus=t},expression:"showCustomMenus"}},[n("div",{staticClass:"share-actionsheet"},[n("i",{staticClass:"share-item weixin"}),n("i",{staticClass:"share-item friend"}),n("i",{staticClass:"share-item qq"}),n("i",{staticClass:"share-item weibo"})])]),n("Actionsheet",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{actions:e.actions,align:"left",cancelText:""},model:{value:e.showAlignMenus,callback:function(t){e.showAlignMenus=t},expression:"showAlignMenus"}}),n("Actionsheet",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{title:"上传图片",describe:"请上传小于2M的图片",actions:e.actions},model:{value:e.showHeaderMenus,callback:function(t){e.showHeaderMenus=t},expression:"showHeaderMenus"}}),n("Actionsheet",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{actions:e.disabledActions},model:{value:e.showDisabledMenus,callback:function(t){e.showDisabledMenus=t},expression:"showDisabledMenus"}}),n("Actionsheet",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{describe:"删除后不可恢复，确定要删除吗？",actions:e.deleteActions},on:{click:e.deleteHandler},model:{value:e.showDeleteMenus,callback:function(t){e.showDeleteMenus=t},expression:"showDeleteMenus"}}),n("h4",[e._v("属性")]),n("VButton",{on:{click:function(t){e.showAlignMenus=!0}}},[e._v(" 左对齐 ")]),n("VButton",{on:{click:function(t){e.showHeaderMenus=!0}}},[e._v(" 有头部和描述 ")]),n("br"),n("br"),n("VButton",{on:{click:function(t){e.showDisabledMenus=!0}}},[e._v(" 禁用 ")]),n("VButton",{on:{click:function(t){e.showDeleteMenus=!0}}},[e._v(" 颜色 ")])],1)],1)},a=[],s=n("d2a2"),i={name:"page-actionsheet",components:{Actionsheet:s["a"]},data:function(){return{showUploadMenus:!1,actions:[{name:"拍照"},{name:"从相册选择"}],disabledActions:[{name:"拍照"},{name:"从相册选择",type:"disabled"}],deleteActions:[{name:"确定",type:"warning",delete:!0,loading:!1},{name:"我再想想",type:"primary"}],showCustomMenus:!1,showAlignMenus:!1,showHeaderMenus:!1,showDisabledMenus:!1,showDeleteMenus:!1}},methods:{alignLeft:function(){this.showUploadMenus=!0,this.align="left"},deleteHandler:function(e){e.delete?e.loading=!0:this.showDeleteMenus=!1}}},c=i,l=(n("7831"),n("2877")),r=Object(l["a"])(c,o,a,!1,null,null,null);t["default"]=r.exports}}]);