(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dfa650d"],{"0d05":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar",{attrs:{title:"Virtual List"}}),n("VirtualList",{ref:"list",attrs:{data:t.data,itemSize:t.itemSize,scrollOffset:46},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.visibleData;return t._l(a,(function(e,a){return n("div",{key:e.id,staticClass:"virtual-list__item v-bd-bottom",style:{height:t.itemSize+"px"}},[n("div",{staticClass:"virtual-list__inner"},[n("div",{staticClass:"virtual-list__background"},[n("span",{staticClass:"virtual-list__loading"},[t._v(" "+t._s(e.floor)+" ")]),n("VButton",{staticClass:"virtual-list__delete",attrs:{type:"icon"},on:{click:function(e){return t.showDeleteActionsheet(a)}}},[n("img",{staticStyle:{width:"20px",height:"20px"},attrs:{src:i("11ca")}})])],1)])])}))}}])}),n("Actionsheet",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{describe:"删除后不可恢复，确定要删除吗？",actions:t.deleteActions},on:{click:t.deleteHandler},model:{value:t.showDeleteMenus,callback:function(e){t.showDeleteMenus=e},expression:"showDeleteMenus"}})],1)},a=[],s=(i("9aea"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("WithScroll",{ref:"withScroll",attrs:{wait:50},on:{scroll:t.handleScroll}},[i(t.tag,{tag:"component",staticClass:"v-virtual-list"},[i("div",{style:t.style},[t._t("default",null,{visibleData:t.visibleData})],2)])],1)}),o=[],l=i("c535"),r=i("f907"),c={name:"VirtualList",components:{WithScroll:l["a"]},mixins:[r["a"]],computed:{style:function(){return{paddingTop:this.startOffset+"px",paddingBottom:this.endOffset+"px"}}},methods:{handleScroll:function(t){var e=t-this.scrollOffset,i=Math.max(Math.floor(e/this.itemSize),0);i+this.visibleCount>=this.end?(this.start=i,this.updateVisibleData()):i<this.start&&(this.start=Math.max(i-this.visibleCount,0),this.updateVisibleData())},updateVisibleData:function(){var t=this.data.length;this.end=Math.min(this.start+this.renderCount,t),this.startOffset=this.start*this.itemSize,this.endOffset=(t-this.end)*this.itemSize,this.visibleData=JSON.parse(JSON.stringify(this.data.slice(this.start,this.end)))},remove:function(t){if(!(t<0||t>this.visibleData.length)){var e=this.start+t;this.data.splice(e,1),this.updateVisibleData()}},scrollToIndex:function(t){this.setScrollOffset(t*this.itemSize+this.scrollOffset)}}},u=c,p=i("2877"),d=Object(p["a"])(u,s,o,!1,null,null,null),h=d.exports,f=i("439b");function v(t){for(var e=[],i=1;i<=t;i++)e.push({id:i,floor:"#"+i});return e}var b={name:"page-virtual-list",components:{VirtualList:h,Actionsheet:f["a"]},data:function(){return{itemSize:175,data:Object.preventExtensions(v(1e3)),showDeleteMenus:!1,deleteActions:[{name:"确定",type:"warning",delete:!0,loading:!1},{name:"我再想想",type:"primary"}],deleteIndex:0}},methods:{showDeleteActionsheet:function(t){this.showDeleteMenus=!0,this.deleteIndex=t},deleteHandler:function(t){t.delete&&this.$refs.list.remove(this.deleteIndex),this.showDeleteMenus=!1}}},m=b,_=(i("b330"),Object(p["a"])(m,n,a,!1,null,null,null));e["default"]=_.exports},"11ca":function(t,e,i){t.exports=i.p+"img/icon-delete.6f4a9e73.svg"},"439b":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Popup",{attrs:{lazy:t.lazy,overlayClick:t.overlayClick},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("div",{staticClass:"v-actionsheet"},[t._t("header",[t.title||t.describe?i("header",{staticClass:"v-actionsheet__header v-bd-bottom"},[i("h4",{staticClass:"v-actionsheet__title"},[t._v(t._s(t.title))]),i("p",{staticClass:"v-actionsheet__describe"},[t._v(t._s(t.describe))])]):t._e()]),t._t("default",[i("ul",{staticClass:"v-actionsheet__items"},[t._l(t.actions,(function(e,n){return i("li",{key:n,staticClass:"v-actionsheet__item v-bd-top",class:["v-actionsheet--"+t.align,"v-actionsheet--"+(e.type||"default"),{"v-actionsheet--disabled":e.loading},e.className],on:{click:function(i){return t.clickHandler(e)}}},[e.loading?i("Loading",{attrs:{size:"22"}}):i("span",[t._v(t._s(e.name))])],1)})),t.cancelText?i("li",{staticClass:"v-actionsheet__item v-actionsheet--center v-actionsheet__cancel",on:{click:t.cancel}},[t._v("\n          取消\n        ")]):t._e()],2)])],2)])},a=[],s=i("90e5"),o=i("2c1b"),l={name:"Actionsheet",components:{Popup:s["a"],Loading:o["a"]},props:{value:{type:Boolean,required:!0},title:{type:String,default:""},describe:{type:String,default:""},actions:{type:Array,default:function(){return[]}},cancelText:{type:String,default:"取消"},overlayClick:{type:Boolean,default:!0},lazy:{type:Boolean,default:!0},align:{type:String,default:"center"}},computed:{show:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{clickHandler:function(t){"disabled"===t.type||t.loading||this.$emit("click",t)},cancel:function(){this.$emit("input",!1),this.$emit("cancel")}}},r=l,c=(i("b714"),i("2877")),u=Object(c["a"])(r,n,a,!1,null,null,null);e["a"]=u.exports},"57a2":function(t,e,i){"use strict";var n=i("fbf9"),a=i.n(n);a.a},"67ab":function(t,e,i){var n=i("ca5a")("meta"),a=i("d3f4"),s=i("69a8"),o=i("86cc").f,l=0,r=Object.isExtensible||function(){return!0},c=!i("79e5")((function(){return r(Object.preventExtensions({}))})),u=function(t){o(t,n,{value:{i:"O"+ ++l,w:{}}})},p=function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!s(t,n)){if(!r(t))return"F";if(!e)return"E";u(t)}return t[n].i},d=function(t,e){if(!s(t,n)){if(!r(t))return!0;if(!e)return!1;u(t)}return t[n].w},h=function(t){return c&&f.NEED&&r(t)&&!s(t,n)&&u(t),t},f=t.exports={KEY:n,NEED:!1,fastKey:p,getWeak:d,onFreeze:h}},"75b4":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".v-actionsheet{background-color:var(--background);color:var(--textPrimary)}.v-actionsheet__header{padding:12px;background-color:#fff;text-align:center}.v-actionsheet__title{font-size:17px;margin:0;padding:0;font-weight:400}.v-actionsheet__describe{margin:4px 0 0;color:var(--textRegular);font-size:14px}.v-actionsheet__items{margin:0;padding:0;list-style:none}.v-actionsheet__item{display:flex;align-items:center;padding-left:20px;padding-right:20px;height:48px;font-size:16px;background-color:#fff}.v-actionsheet__item:first-child.v-bd-top:before{display:none}.v-actionsheet__item:active{background-color:var(--border)}.v-actionsheet--default{color:var(--textPrimary)}.v-actionsheet--primary{color:var(--primary)}.v-actionsheet--warning{color:var(--error)}.v-actionsheet--disabled{color:var(--textSecondary)}.v-actionsheet--disabled:active{background-color:#fff}.v-actionsheet--center{justify-content:center}.v-actionsheet--left{justify-content:left}.v-actionsheet__cancel{margin-top:10px}",""])},"7b58":function(t,e,i){var n=i("d37d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("499e").default;a("c0b56c80",n,!0,{sourceMap:!1,shadowMode:!1})},"8da7":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".virtual-list{padding:0;margin:0;list-style:none}.virtual-list__item{box-sizing:border-box;width:100%;background-color:var(--background)}.virtual-list__inner{padding:10px 10px 0;height:100%;box-sizing:border-box}.virtual-list__background{background-color:#fff;height:100%}.virtual-list__loading{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;text-align:center;width:200px;height:40px;line-height:40px}.virtual-list__img{position:relative;width:100%}.virtual-list__delete{position:absolute;bottom:14px;right:14px}",""])},"90e5":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transitionName}},[t.loaded?i("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"v-popup"},[i("div",{staticClass:"v-popup__content",class:["v-popup--"+t.position,t.contentClass]},[t._t("default")],2),t.overlay?i("div",{staticClass:"v-popup__overlay",on:{click:t.close,touchmove:function(t){t.preventDefault()}}}):t._e()]):t._e()])},a=[],s=i("4c40"),o={name:"Popup",mixins:[s["a"]],props:{value:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},overlayClick:{type:Boolean,default:!0},transitionName:{type:String,default:"v-popup"},position:{type:String,default:"bottom"},contentClass:{type:String,default:""}},methods:{close:function(){this.overlayClick&&(this.$emit("input",!1),this.$emit("close"))}}},l=o,r=(i("57a2"),i("2877")),c=Object(r["a"])(l,n,a,!1,null,null,null);e["a"]=c.exports},"938b":function(t,e,i){var n=i("75b4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("499e").default;a("4ca5fca6",n,!0,{sourceMap:!1,shadowMode:!1})},"9aea":function(t,e,i){var n=i("d3f4"),a=i("67ab").onFreeze;i("5eda")("preventExtensions",(function(t){return function(e){return t&&n(e)?t(a(e)):e}}))},b330:function(t,e,i){"use strict";var n=i("7b58"),a=i.n(n);a.a},b714:function(t,e,i){"use strict";var n=i("938b"),a=i.n(n);a.a},c535:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._t("default")],2)},a=[],s=(i("c5f6"),i("f6da")),o=i("891d"),l={name:"WithScroll",props:{rAF:Boolean,wait:Number},mounted:function(){this.bind()},activated:function(){this.bind()},deactivated:function(){this.unbind()},beforeDestroy:function(){this.unbind(),this.handleScroll=null},methods:{bind:function(){this.isBind||(this.handleScroll=this.rAF?Object(s["m"])(this.handleScroll):Object(s["p"])(this.handleScroll,this.wait),this.scrollEl=Object(o["b"])(this.$el),Object(s["a"])(this.scrollEl,"scroll",this.handleScroll),this.isBind=!0)},unbind:function(){this.isBind&&(Object(s["n"])(this.scrollEl,"scroll",this.handleScroll),this.isBind=!1,this.scrollEl=null)},handleScroll:function(){this.scrollTop=Object(o["c"])(this.scrollEl),this.$emit("scroll",this.scrollTop)},setScrollTop:function(t){Object(o["d"])(this.scrollEl,t)}}},r=l,c=i("2877"),u=Object(c["a"])(r,n,a,!1,null,null,null);e["a"]=u.exports},d37d:function(t,e,i){e=t.exports=i("2350")(!1),e.i(i("8da7"),""),e.push([t.i,"",""])},ea2b:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,":root{--duration:300ms}.v-popup{transition-duration:.3s;transition-duration:var(--duration)}.v-popup__content{position:fixed;z-index:10000;width:100%;transition:transform .3s;transition:transform var(--duration);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-popup--top{left:0;top:0}.v-popup--right{right:0;bottom:0}.v-popup--bottom,.v-popup--left{left:0;bottom:0}.v-popup__overlay{position:fixed;top:0;left:0;z-index:9999;width:100%;height:100%;background-color:rgba(0,0,0,.7);transition:opacity .3s;transition:opacity var(--duration)}.v-popup-enter .v-popup__overlay,.v-popup-leave-active .v-popup__overlay{opacity:0}.v-popup-enter .v-popup--bottom,.v-popup-leave-active .v-popup--bottom{transform:translateY(100%)}.v-popup-enter .v-popup--top,.v-popup-leave-active .v-popup--top{transform:translateY(-100%)}.v-popup-enter .v-popup--left,.v-popup-leave-active .v-popup--left{transform:translateX(-100%)}.v-popup-enter .v-popup--right,.v-popup-leave-active .v-popup--right{transform:translateX(100%)}",""])},f907:function(t,e,i){"use strict";i("c5f6");var n=i("f6da");e["a"]={props:{tag:{type:String,default:"div"},data:{type:Array,default:function(){return[]}},itemSize:{type:Number,default:100},multiple:{type:Number,default:2},minMultiple:{type:Number,default:2},visibleHeight:Number,scrollOffset:{type:Number,default:0}},data:function(){return{startOffset:0,endOffset:0,visibleData:[]}},created:function(){this.listVisibleHeight=this.visibleHeight||n["r"].height(),this.visibleCount=Math.ceil(this.listVisibleHeight/this.itemSize),this.renderCount=this.visibleCount*Math.max(this.multiple,this.minMultiple)+1,this.start=0},mounted:function(){this.data.length&&this.updateVisibleData()},methods:{setScrollOffset:function(t){this.$refs.withScroll.setScrollTop(t)},reload:function(t){t&&(this.itemRects=[],this.visibleData=[],this.lastIndex=-1),this.$nextTick(this.updateVisibleData)}}}},fbf9:function(t,e,i){var n=i("ea2b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("499e").default;a("41709629",n,!0,{sourceMap:!1,shadowMode:!1})}}]);