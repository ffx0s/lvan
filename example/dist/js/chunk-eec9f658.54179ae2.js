(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eec9f658"],{"2e48":function(e,t,i){var s=i("5398");"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var n=i("499e").default;n("389c40ba",s,!0,{sourceMap:!1,shadowMode:!1})},5398:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".v-infinite-scroll__footer{width:100%;min-height:52px;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.v-infinite-scroll__empty,.v-infinite-scroll__footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.v-infinite-scroll__empty{min-height:400px}.v-infinite-scroll__loading{color:#d9d9d9}",""])},"7b96":function(e,t,i){"use strict";var s=i("2e48"),n=i.n(s);n.a},"8ca5":function(e,t,i){t=e.exports=i("2350")(!1),t.i(i("8da7"),""),t.push([e.i,".virtual-list__absolute{position:absolute;top:0;left:0;will-change:transform}",""])},"9b436":function(e,t,i){"use strict";var s=i("eea9"),n=i.n(s);n.a},cb94:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("WithScroll",{attrs:{onscroll:e.update,rAF:""}},[i(e.pullRefresh?"PullRefresh":"div",e._b({tag:"component",attrs:{failed:e.failed,disabled:e.isLoading},on:{refresh:e.refresh},model:{value:e.refreshing,callback:function(t){e.refreshing=t},expression:"refreshing"}},"component",e.$attrs,!1),[i("div",{ref:"container",staticClass:"v-infinite-scroll"},[e._t("default")],2),i("div",{class:e.footerClass},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],class:e.loadingClass},[e._t("loading",[i("Loading",{staticClass:"v-infinite-scroll__loading",attrs:{size:"32"}})])],2),i("div",{directives:[{name:"show",rawName:"v-show",value:e.finished&&!e.empty,expression:"finished && !empty"}],class:e.finishedClass},[e._t("finished",[e._v("全部加载完成")])],2),i("div",{directives:[{name:"show",rawName:"v-show",value:e.empty,expression:"empty"}],class:e.emptyClass},[e._t("empty",[e._v("空空如也")])],2),i("div",{directives:[{name:"show",rawName:"v-show",value:e.failed&&!e.finished,expression:"failed && !finished"}],class:e.failedClass,on:{click:e.load}},[e._t("failed",[e._v("加载失败,点击重试")])],2)])])],1)},n=[],a=(i("67bbb"),i("2a56")),l=i("2c1b"),o=i("c535"),r=i("f6da"),c={name:"InfiniteScroll",inheritAttrs:!1,components:{WithScroll:o["a"],PullRefresh:a["a"],Loading:l["a"]},props:{value:{type:Boolean,required:!0},finished:{type:Boolean,default:!1},failed:{type:Boolean,default:!1},empty:{type:Boolean,default:!1},offset:{type:Number,default:300},pullRefresh:{type:Boolean,default:!0},footerClass:{type:String,default:"v-infinite-scroll__footer"},loadingClass:{type:String,default:""},finishedClass:{type:String,default:""},emptyClass:{type:String,default:"v-infinite-scroll__empty"},failedClass:{type:String,default:""}},data:function(){return{refreshing:!1,isLoading:!1}},watch:{value:{handler:function(e){e&&this.load()},immediate:!0}},methods:{update:function(){this.shouldLoadMore()&&this.load()},shouldLoadMore:function(){if(this.finished||this.value||this.failed)return!1;var e=this.$refs.container.getBoundingClientRect().bottom;return e-r["s"].height()<=this.offset},load:function(){this.finished?this.done():this.isLoading||this.refreshing||(this.isLoading=!0,this.$emit("input",!0),this.$emit("load",this.done))},refresh:function(e){this.$emit("refresh",e)},done:function(){var e=this;this.$nextTick(function(){e.$emit("input",!1),e.isLoading=!1})}}},f=c,d=(i("7b96"),i("2877")),u=Object(d["a"])(f,s,n,!1,null,null,null);t["a"]=u.exports},d76a:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("Navbar",{attrs:{title:"Virtual List"}}),s("InfiniteScroll",{attrs:{empty:e.empty,failed:e.failed,finished:e.finished},on:{load:e.load,refresh:e.refresh},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[s("VirtualList",{ref:"virtualList",staticClass:"virtual-list",attrs:{data:e.items,scrollOffset:46,multiple:3,itemSize:450,itemSizeGetter:e.itemSizeGetter,tag:"ul"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.visibleData,a=t.getVisibleItemRect;return e._l(n,function(t,n){return s("li",{key:t.id,staticClass:"virtual-list__item virtual-list__absolute",style:{transform:"translateY("+a(n).offset+"px)",height:a(n).size+"px"}},[s("div",{staticClass:"virtual-list__inner"},[s("span",{staticClass:"virtual-list__loading"},[e._v("\n              "+e._s(t.floor)+" Loading...\n            ")]),s("div",{staticClass:"virtual-list__background"},[s("img",{staticClass:"virtual-list__img",attrs:{src:t.imgSrc}})]),s("VButton",{staticClass:"virtual-list__delete",attrs:{type:"icon"},on:{click:function(t){return e.showDeleteActionsheet(n)}}},[s("img",{staticStyle:{width:"20px",height:"20px"},attrs:{src:i("7345")}})])],1)])})}}])})],1),s("Actionsheet",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{describe:"删除后不可恢复，确定要删除吗？",actions:e.deleteActions},on:{click:e.deleteHandler},model:{value:e.showDeleteMenus,callback:function(t){e.showDeleteMenus=t},expression:"showDeleteMenus"}})],1)},n=[],a=(i("9aea"),i("cb94")),l=i("3671"),o=i("439b"),r=i("f6da");function c(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}var f=0;function d(e){return new Promise(function(t){var i={records:[],pages:3,total:45},s=0;1===e.offset&&(f=0);while(s<e.limit){var n=c(1e3,500),a=c(100,800);s++,f++,i.records.push({id:f,floor:"#"+f,imgWidth:n,imgHeight:a,imgSrc:"https://dummyimage.com/".concat(n,"x").concat(a,"/c7c7c7")})}setTimeout(function(){return t(i)},~~(1e3*Math.random()+500))})}var u={name:"page-virtual-list-loadmore",components:{InfiniteScroll:a["a"],VirtualList:l["a"],Actionsheet:o["a"]},data:function(){return{items:Object.preventExtensions([]),query:{offset:1,limit:15},loading:!0,finished:!1,failed:!1,empty:!1,showDeleteMenus:!1,deleteActions:[{name:"确定",type:"warning",delete:!0,loading:!1},{name:"我再想想",type:"primary"}],deleteIndex:0}},methods:{fetchData:function(){var e=this;return this.failed=!1,d(this.query).then(function(t){var i,s=t.records,n=t.pages,a=t.total;e.loading?e.items=Object.preventExtensions(e.items.concat(s)):(e.items=Object.preventExtensions(s),i=!0),e.$refs.virtualList.reload(i),e.empty=!a,e.finished=e.query.offset>=n,e.query.offset++}).catch(this.failure)},load:function(e){this.fetchData().then(e)},refresh:function(e){this.query.offset=1,this.fetchData().then(e)},failure:function(){this.failed=!0},itemSizeGetter:function(e){return(r["s"].width()-10)/(e.imgWidth/e.imgHeight)},showDeleteActionsheet:function(e){this.showDeleteMenus=!0,this.deleteIndex=e},deleteHandler:function(e){e.delete&&this.$refs.virtualList.remove(this.deleteIndex),this.showDeleteMenus=!1}}},h=u,m=(i("9b436"),i("2877")),p=Object(m["a"])(h,s,n,!1,null,null,null);t["default"]=p.exports},eea9:function(e,t,i){var s=i("8ca5");"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var n=i("499e").default;n("713fe7de",s,!0,{sourceMap:!1,shadowMode:!1})}}]);