(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5685d810"],{"065e":function(t,e,i){"use strict";i("c5f6");var n=i("6116"),s=i("ac6e");e["a"]={props:{tag:{type:String,default:"div"},data:{type:Array,default:function(){return[]}},itemSize:{type:Number,default:100},multiple:{type:Number,default:2},minMultiple:{type:Number,default:2},visibleHeight:Number,scrollOffset:{type:Number,default:0}},data:function(){return{startOffset:0,endOffset:0,visibleData:[]}},created:function(){this.listVisibleHeight=this.visibleHeight||n["n"].height(),this.visibleCount=Math.ceil(this.listVisibleHeight/this.itemSize),this.renderCount=this.visibleCount*Math.max(this.multiple,this.minMultiple)+1,this.isBind=!1,this.start=0},mounted:function(){this.bind(),this.data.length&&this.debouncer.requestTick(),window.sl=this},activated:function(){this.bind()},deactivated:function(){this.unbind()},beforeDestroy:function(){this.unbind()},methods:{bind:function(){this.isBind||(this.isBind=!0,this.scrollEl=Object(n["d"])(this.$el),this.debouncer=new s["a"](this.updateVisibleData),Object(n["a"])(this.scrollEl,"scroll",this.scrollHandler))},unbind:function(){Object(n["k"])(this.scrollEl,"scroll",this.scrollHandler),this.isBind=!1,this.scrollEl=null},setScrollOffset:function(t){Object(n["l"])(this.scrollEl,t)},reload:function(t){t&&(this.itemRects=[],this.visibleData=[],this.lastIndex=-1),this.$nextTick(this.updateVisibleData)}}}},"20ac":function(t,e,i){var n=i("f2e3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("499e").default;s("753d17a4",n,!0,{sourceMap:!1,shadowMode:!1})},"26e2":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transitionName}},[t.loaded?i("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"v-popup"},[i("div",{staticClass:"v-popup-content",class:"v-popup-content-"+t.position},[t._t("default")],2),t.overlay?i("div",{staticClass:"v-popup-overlay",on:{click:t.close,touchmove:function(t){t.preventDefault()}}}):t._e()]):t._e()])},s=[],a=i("b70d"),o={name:"Popup",mixins:[a["a"]],props:{value:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},overlayClick:{type:Boolean,default:!0},transitionName:{type:String,default:"v-popup"},position:{type:String,default:"bottom"}},methods:{close:function(){this.overlayClick&&(this.$emit("input",!1),this.$emit("close"))}}},l=o,r=(i("da37"),i("2877")),c=Object(r["a"])(l,n,s,!1,null,null,null);e["a"]=c.exports},"275b":function(t,e,i){"use strict";var n=i("7660"),s=i.n(n);s.a},"2f66":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".v-infinite-scroll-footer{width:100%;height:50px;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.v-infinite-scroll-empty,.v-infinite-scroll-footer{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.v-infinite-scroll-empty{min-height:400px}.v-infinite-scroll-loading{color:#d9d9d9}",""])},"427f":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Popup",{attrs:{lazy:t.lazy,overlayClick:t.overlayClick},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("div",{staticClass:"v-actionsheet"},[t._t("header",[t.title||t.describe?i("header",{staticClass:"v-actionsheet-header v-bd-y-bottom"},[i("h4",{staticClass:"v-actionsheet-title"},[t._v(t._s(t.title))]),i("p",{staticClass:"v-actionsheet-describe"},[t._v(t._s(t.describe))])]):t._e()]),t._t("default",[i("ul",{staticClass:"v-actionsheet-default"},[t._l(t.actions,function(e,n){return i("li",{key:n,staticClass:"v-actionsheet-item v-bd-y-top",class:["v-actionsheet-align-"+t.align,"v-actionsheet-item-"+(e.type||"default"),{"v-actionsheet-item-disabled":e.loading},e.className],on:{click:function(i){t.clickHandler(e)}}},[e.loading?i("Loading",{attrs:{size:"22"}}):i("span",[t._v(t._s(e.name))])],1)}),t.cancelText?i("li",{staticClass:"v-actionsheet-item v-actionsheet-align-center v-actionsheet-cancel",on:{click:t.cancel}},[t._v("\n          取消\n        ")]):t._e()],2)])],2)])},s=[],a=i("26e2"),o=i("7ac2"),l={name:"Actionsheet",components:{Popup:a["a"],Loading:o["a"]},props:{value:{type:Boolean,required:!0},title:{type:String,default:""},describe:{type:String,default:""},actions:{type:Array,default:function(){return[]}},cancelText:{type:String,default:"取消"},overlayClick:{type:Boolean,default:!0},lazy:{type:Boolean,default:!0},align:{type:String,default:"center"}},computed:{show:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{clickHandler:function(t){"disabled"===t.type||t.loading||this.$emit("click",t)},cancel:function(){this.$emit("input",!1),this.$emit("cancel")}}},r=l,c=(i("8ed0"),i("2877")),f=Object(c["a"])(r,n,s,!1,null,null,null);e["a"]=f.exports},"53dd":function(t,e,i){var n=i("c44b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("499e").default;s("2843589e",n,!0,{sourceMap:!1,shadowMode:!1})},"67ab":function(t,e,i){var n=i("ca5a")("meta"),s=i("d3f4"),a=i("69a8"),o=i("86cc").f,l=0,r=Object.isExtensible||function(){return!0},c=!i("79e5")(function(){return r(Object.preventExtensions({}))}),f=function(t){o(t,n,{value:{i:"O"+ ++l,w:{}}})},u=function(t,e){if(!s(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,n)){if(!r(t))return"F";if(!e)return"E";f(t)}return t[n].i},d=function(t,e){if(!a(t,n)){if(!r(t))return!0;if(!e)return!1;f(t)}return t[n].w},h=function(t){return c&&p.NEED&&r(t)&&!a(t,n)&&f(t),t},p=t.exports={KEY:n,NEED:!1,fastKey:u,getWeak:d,onFreeze:h}},"718f":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i(t.tag,{tag:"component",staticClass:"v-virtual-variable",style:t.style},[t._t("default",null,{visibleData:t.visibleData,getVisibleItemRect:t.getVisibleItemRect})],2)},s=[],a=i("6116"),o=i("065e"),l={name:"VirtualListVariable",mixins:[o["a"]],props:{itemSizeGetter:Function},data:function(){return{listScrollSize:0}},computed:{style:function(){return{paddingTop:this.startOffset+"px",height:this.listScrollSize+"px"}}},created:function(){this.lastIndex=-1,this.itemRects=[]},beforeDestroy:function(){this.itemRects=null},methods:{scrollHandler:function(){var t=Object(a["e"])(this.scrollEl)-this.scrollOffset,e=this.getStartIndex(t);t+this.listVisibleHeight>=this.getItemRect(this.end-1).offset?(this.start=e,this.debouncer.requestTick()):e<this.start&&(this.start=Math.max(e-1,0),this.debouncer.requestTick())},getStartIndex:function(t){var e=this.getItemRect(this.lastIndex).offset;return e>t?this.binarySearch(0,this.lastIndex,t):this.exponentialSearch(this.lastIndex,t)},exponentialSearch:function(t,e){var i=this.data.length,n=1;while(t<i&&this.getItemRect(t).offset<e)t+=n,n*=2;return this.binarySearch(Math.floor(t/2),Math.min(t,i-1),e)},binarySearch:function(t,e,i){var n=0,s=0;while(t<=e){if(n=t+Math.floor((e-t)/2),s=this.getItemRect(n).offset,s===i)return n;s<i?t=n+1:s>i&&(e=n-1)}return t>0?t-1:0},updateVisibleData:function(){var t=this.data.length;t&&(this.end=Math.min(this.start+this.renderCount,t),this.startOffset=this.getItemRect(this.start).offset,this.listScrollSize=this.getListScrollSize(),this.visibleData=JSON.parse(JSON.stringify(this.data.slice(this.start,this.end))))},getItemRect:function(t){if(this.itemRects[t])return this.itemRects[t];var e=this.data,i=this.lastIndex;if(i<t){var n=this.itemRects[i]||{size:0,offset:0},s=n.size+n.offset,a=i+1;for(a;a<=t;a++){var o=this.itemSizeGetter(e[a],a);this.itemRects[a]={offset:s,size:o},s+=o}return this.lastIndex=t,this.itemRects[t]}},getVisibleItemRect:function(t){return this.itemRects[this.start+t]},getListScrollSize:function(){var t=this.getItemRect(this.end-1);return t.offset+t.size+(this.data.length-this.end)*this.itemSize},remove:function(t){if(!(t<0||t>this.visibleData.length)){var e=this.start+t,i=this.itemRects[e].size;this.itemRects.splice(e,1),this.data.splice(e,1),this.lastIndex-=1,this.updateItemsOffset(e,-i),this.updateVisibleData()}},updateItemsOffset:function(t,e){var i=this.itemRects,n=i.length;for(t;t<n;t++)i[t].offset+=e},scrollToIndex:function(t){var e=this.getItemRect(Math.max(Math.min(t,this.data.length-1),0));this.setScrollOffset(e.offset-this.scrollOffset)}}},r=l,c=(i("275b"),i("2877")),f=Object(c["a"])(r,n,s,!1,null,null,null);e["a"]=f.exports},7345:function(t,e,i){t.exports=i.p+"img/icon-delete.6f4a9e73.svg"},7660:function(t,e,i){var n=i("cf87");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("499e").default;s("37d3d74e",n,!0,{sourceMap:!1,shadowMode:!1})},"8ca5":function(t,e,i){e=t.exports=i("2350")(!1),e.i(i("8da7"),""),e.push([t.i,".absolute{position:absolute;top:0;left:0;will-change:transform}",""])},"8da7":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".image-list{padding:0;margin:0;list-style:none}.image-list-item{box-sizing:border-box;width:100%;background-color:#f0eff5}.image-list-item-inner{padding:10px 10px 0;height:100%;box-sizing:border-box}.image-list-item-background{background-color:#fff;height:100%}.image-list-item-loading{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;text-align:center;width:200px;height:40px;line-height:40px}.image-list-item-img{position:relative;width:100%}.image-list-item-delete{position:absolute;bottom:14px;right:14px}",""])},"8ed0":function(t,e,i){"use strict";var n=i("20ac"),s=i.n(n);s.a},"9aea":function(t,e,i){var n=i("d3f4"),s=i("67ab").onFreeze;i("5eda")("preventExtensions",function(t){return function(e){return t&&n(e)?t(s(e)):e}})},"9b436":function(t,e,i){"use strict";var n=i("eea9"),s=i.n(n);s.a},c44b:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".v-popup{-webkit-transition-duration:.3s;transition-duration:.3s}.v-popup-content{position:fixed;z-index:10000;width:100%;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;-webkit-user-select:none;user-select:none}.v-popup-content-top{left:0;top:0}.v-popup-content-right{right:0;bottom:0}.v-popup-content-bottom,.v-popup-content-left{left:0;bottom:0}.v-popup-overlay{position:fixed;top:0;left:0;z-index:9999;width:100%;height:100%;background-color:rgba(0,0,0,.7);-webkit-transition:opacity .3s;transition:opacity .3s}.v-popup-enter .v-popup-overlay,.v-popup-leave-active .v-popup-overlay{opacity:0}.v-popup-enter .v-popup-content-bottom,.v-popup-leave-active .v-popup-content-bottom{-webkit-transform:translateY(100%);transform:translateY(100%)}.v-popup-enter .v-popup-content-top,.v-popup-leave-active .v-popup-content-top{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.v-popup-enter .v-popup-content-left,.v-popup-leave-active .v-popup-content-left{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.v-popup-enter .v-popup-content-right,.v-popup-leave-active .v-popup-content-right{-webkit-transform:translateX(100%);transform:translateX(100%)}",""])},cf87:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".v-virtual-variable{box-sizing:border-box}",""])},d4fd:function(t,e,i){var n=i("2f66");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("499e").default;s("0f51879c",n,!0,{sourceMap:!1,shadowMode:!1})},d76a:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar",{attrs:{title:"Virtual List"}}),n("InfiniteScroll",{attrs:{empty:t.empty,failed:t.failed,finished:t.finished},on:{load:t.load,refresh:t.refresh},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("VirtualList",{ref:"virtualList",staticClass:"image-list load-more-list",attrs:{data:t.items,scrollOffset:46,multiple:3,itemSize:450,itemSizeGetter:t.itemSizeGetter,tag:"ul"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.visibleData,a=e.getVisibleItemRect;return t._l(s,function(e,s){return n("li",{key:e.id,staticClass:"image-list-item absolute",style:{transform:"translateY("+a(s).offset+"px)",height:a(s).size+"px"}},[n("div",{staticClass:"image-list-item-inner"},[n("span",{staticClass:"image-list-item-loading"},[t._v("\n              "+t._s(e.floor)+" Loading...\n            ")]),n("div",{staticClass:"image-list-item-background"},[n("img",{staticClass:"image-list-item-img",attrs:{src:e.imgSrc}})]),n("VButton",{staticClass:"image-list-item-delete",attrs:{type:"icon"},on:{click:function(e){t.showDeleteActionsheet(s)}}},[n("img",{staticStyle:{width:"20px",height:"20px"},attrs:{src:i("7345")}})])],1)])})}}])})],1),n("Actionsheet",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{describe:"删除后不可恢复，确定要删除吗？",actions:t.deleteActions},on:{click:t.deleteHandler},model:{value:t.showDeleteMenus,callback:function(e){t.showDeleteMenus=e},expression:"showDeleteMenus"}})],1)},s=[],a=(i("9aea"),i("cadf"),i("551c"),i("097d"),i("eae9")),o=i("718f"),l=i("427f"),r=i("6116");function c(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}var f=0;function u(t){return new Promise(function(e){var i={records:[],pages:3,total:45},n=0;1===t.offset&&(f=0);while(n<t.limit){var s=c(1e3,500),a=c(100,800);n++,f++,i.records.push({id:f,floor:"#"+f,imgWidth:s,imgHeight:a,imgSrc:"https://dummyimage.com/".concat(s,"x").concat(a,"/c7c7c7")})}setTimeout(function(){return e(i)},~~(1e3*Math.random()+500))})}var d={name:"page-virtual-list-loadmore",components:{InfiniteScroll:a["a"],VirtualList:o["a"],Actionsheet:l["a"]},data:function(){return{items:Object.preventExtensions([]),query:{offset:1,limit:15},loading:!0,finished:!1,failed:!1,empty:!1,showDeleteMenus:!1,deleteActions:[{name:"确定",type:"warning",delete:!0,loading:!1},{name:"我再想想",type:"primary"}],deleteIndex:0}},methods:{fetchData:function(){var t=this;return this.failed=!1,u(this.query).then(function(e){var i,n=e.records,s=e.pages,a=e.total;t.loading?t.items=Object.preventExtensions(t.items.concat(n)):(t.items=Object.preventExtensions(n),i=!0),t.$refs.virtualList.reload(i),t.empty=!a,t.finished=t.query.offset>=s,t.query.offset++}).catch(this.failure)},load:function(t){this.fetchData().then(t)},refresh:function(t){this.query.offset=1,this.fetchData().then(t)},failure:function(){this.failed=!0},itemSizeGetter:function(t){return(r["n"].width()-10)/(t.imgWidth/t.imgHeight)},showDeleteActionsheet:function(t){this.showDeleteMenus=!0,this.deleteIndex=t},deleteHandler:function(t){t.delete&&this.$refs.virtualList.remove(this.deleteIndex),this.showDeleteMenus=!1}}},h=d,p=(i("9b436"),i("2877")),v=Object(p["a"])(h,n,s,!1,null,null,null);e["default"]=v.exports},da37:function(t,e,i){"use strict";var n=i("53dd"),s=i.n(n);s.a},eae9:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i(t.pullRefresh?"PullRefresh":"div",{ref:"pullRefresh",tag:"component",attrs:{failed:t.failed,disabled:t.isLoading},on:{refresh:t.refresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[i("div",{ref:"container",staticClass:"v-infinite-scroll"},[t._t("default")],2),i("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"v-infinite-scroll-footer"},[t._t("loading",[i("Loading",{staticClass:"v-infinite-scroll-loading",attrs:{size:"32"}})])],2),i("div",{directives:[{name:"show",rawName:"v-show",value:t.finished&&!t.empty,expression:"finished && !empty"}],staticClass:"v-infinite-scroll-footer"},[t._t("finished",[t._v("全部加载完成")])],2),i("div",{directives:[{name:"show",rawName:"v-show",value:t.empty,expression:"empty"}],staticClass:"v-infinite-scroll-footer"},[t._t("empty",[i("div",{staticClass:"v-infinite-scroll-empty"},[t._v("空空如也")])])],2),i("div",{directives:[{name:"show",rawName:"v-show",value:t.failed,expression:"failed"}],staticClass:"v-infinite-scroll-footer",on:{click:t.load}},[t._t("failed",[t._v("加载失败,点击重试")])],2)])},s=[],a=(i("c5f6"),i("5ed3")),o=i("7ac2"),l=i("ac6e"),r=i("6116"),c={name:"InfiniteScroll",components:{PullRefresh:a["a"],Loading:o["a"]},props:{value:{type:Boolean,required:!0},finished:{type:Boolean,default:!1},failed:{type:Boolean,default:!1},empty:{type:Boolean,default:!1},offset:{type:Number,default:300},pullRefresh:{type:Boolean,default:!0}},data:function(){return{refreshing:!1,isLoading:!1}},watch:{value:{handler:function(t){t&&this.load()},immediate:!0}},mounted:function(){this.bind()},activated:function(){this.bind()},deactivated:function(){this.unbind()},beforeDestroy:function(){this.unbind()},methods:{bind:function(){var t=this;this.isBind||(this.$nextTick(function(){t.onscroll=new l["a"](t.scrollHandler),t.scrollEl=t.pullRefresh?t.$refs.pullRefresh.scrollEl:Object(r["d"])(t.$el),t.container=t.$refs.container,Object(r["a"])(t.scrollEl,"scroll",t.onscroll)}),this.isBind=!0)},unbind:function(){Object(r["k"])(this.scrollEl,"scroll",this.onscroll),this.isBind=!1,this.scrollEl=null,this.container=null,this.onscroll=null},scrollHandler:function(){this.shouldLoadMore()&&this.load()},shouldLoadMore:function(){if(this.finished||this.value||this.failed)return!1;var t=this.container.getBoundingClientRect().bottom;return t-r["n"].height()<=this.offset},load:function(){this.finished?this.done():this.isLoading||this.refreshing||(this.isLoading=!0,this.$emit("input",!0),this.$emit("load",this.done))},refresh:function(t){this.$emit("refresh",t)},done:function(){var t=this;this.$nextTick(function(){t.$emit("input",!1),t.isLoading=!1})}}},f=c,u=(i("f552"),i("2877")),d=Object(u["a"])(f,n,s,!1,null,null,null);e["a"]=d.exports},eea9:function(t,e,i){var n=i("8ca5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("499e").default;s("713fe7de",n,!0,{sourceMap:!1,shadowMode:!1})},f2e3:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".v-actionsheet{background-color:#f0eff5;color:#000}.v-actionsheet-header{padding:12px;background-color:#fff;text-align:center}.v-actionsheet-title{font-size:17px;margin:0;padding:0;font-weight:400}.v-actionsheet-describe{margin:0;color:#8e8e90;font-size:14px}.v-actionsheet-default{margin:0;padding:0;list-style:none}.v-actionsheet-item{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:20px;padding-right:20px;height:48px;font-size:16px;background-color:#fff}.v-actionsheet-item:first-child.v-bd-y-top:before{display:none}.v-actionsheet-item:active{background-color:#d9d9d9}.v-actionsheet-item-default{color:#000}.v-actionsheet-item-primary{color:#2196f3}.v-actionsheet-item-warning{color:#ff5252}.v-actionsheet-item-disabled{color:#d9d9d9}.v-actionsheet-item-disabled:active{background-color:#fff}.v-actionsheet-align-center{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.v-actionsheet-align-left{-webkit-box-pack:left;-webkit-justify-content:left;justify-content:left}.v-actionsheet-cancel{margin-top:10px}",""])},f552:function(t,e,i){"use strict";var n=i("d4fd"),s=i.n(n);s.a}}]);
//# sourceMappingURL=chunk-5685d810.ee69e25e.js.map