(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a3b4d5e","chunk-9d4413b6"],{"07e1":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("InfiniteScroll",{staticClass:"page-infinite-scroll",attrs:{empty:e.empty,failed:e.failed,finished:e.finished,backgroundColor:"#f0eff5"},on:{load:e.load,refresh:e.refresh},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[i("transition-group",{staticClass:"items",attrs:{tag:"ul",name:e.transitionName}},e._l(e.items,function(e){return i("Card",{key:e.id,attrs:{tag:"li",item:e}})}),1)],1)},s=[],l=i("cebc"),a=i("0de0"),o=i("90e0"),r=i("c4c8"),c={components:{Card:a["a"],InfiniteScroll:o["a"]},data:function(){return{items:[],loading:!0,finished:!1,failed:!1,empty:!1,transitionName:"item"}},created:function(){this.query={offset:0,limit:15}},methods:{fetchData:function(e){var t=this;return this.failed=!1,Object(r["b"])(e).then(function(i){var n=i.records,s=i.pages,l=i.total;t.loading?(t.transitionName="item",t.items=t.items.concat(n),t.query.offset=e.offset):(t.transitionName="",t.items=n,t.query.offset=1),t.empty=!l,t.finished=e.offset>=s}).catch(this.failure)},load:function(e){this.fetchData(Object(l["a"])({},this.query,{offset:this.query.offset+1})).then(e)},refresh:function(e){this.fetchData(Object(l["a"])({},this.query,{offset:1})).then(e)},failure:function(){this.failed=!0}}},d=c,f=(i("a7d0"),i("2877")),u=Object(f["a"])(d,n,s,!1,null,null,null);t["default"]=u.exports},"0de0":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i(e.tag,{tag:"component",staticClass:"v-c2"},[i("div",{staticClass:"v-c2__image",class:e.loadingClass},[e.item.image?i("img",{attrs:{src:e.item.image}}):e._e()]),i("div",{staticClass:"v-c2__detail"},[i("div",{staticClass:"v-c2__title",class:e.loadingClass},[e._v(e._s(e.item.title))]),i("div",{staticClass:"v-c2__description",class:e.loadingClass},[e._v("\n      "+e._s(e.item.description)+"\n    ")])])])},s=[],l={name:"v-card-c2",props:{tag:{type:String,default:"div"},loading:{type:Boolean,default:!1},item:{type:Object,default:function(){return{image:"",title:"",description:""}}}},computed:{loadingClass:function(){return this.loading?"v-skeleton":""}}},a=l,o=(i("ef5d"),i("2877")),r=Object(o["a"])(a,n,s,!1,null,null,null);t["a"]=r.exports},"29b6":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".page-infinite-scroll{padding-bottom:10px}",""])},"4ec8":function(e,t,i){var n=i("29b6");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=i("499e").default;s("878d5d48",n,!0,{sourceMap:!1,shadowMode:!1})},"5c35":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".v-infinite-scroll-footer{padding-top:10px;padding-bottom:10px;width:100%;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.v-infinite-scroll-empty,.v-infinite-scroll-footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.v-infinite-scroll-empty{min-height:400px}.v-infinite-scroll-loading{color:#d9d9d9}",""])},"5e62":function(e,t,i){var n=i("7752");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=i("499e").default;s("659c7993",n,!0,{sourceMap:!1,shadowMode:!1})},7752:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".v-c2{display:-webkit-box;display:-ms-flexbox;display:flex;padding:10px;background-color:#fff}.v-c2__image{width:100px;height:100px;background-color:#f0eff5;border-radius:5px}.v-c2__image img{max-width:100%;border-radius:inherit}.v-c2__detail{margin-left:10px;-webkit-box-flex:1;-ms-flex:1;flex:1}.v-c2__title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:16px;min-height:26px;font-weight:450}.v-c2__description{margin-top:5px;height:62px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;font-size:14px}",""])},7769:function(e,t,i){var n=i("5c35");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=i("499e").default;s("3cefd642",n,!0,{sourceMap:!1,shadowMode:!1})},"90e0":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("WithScroll",{attrs:{onscroll:e.update}},[i(e.pullRefresh?"PullRefresh":"div",e._b({tag:"component",attrs:{failed:e.failed,disabled:e.isLoading},on:{refresh:e.refresh},model:{value:e.refreshing,callback:function(t){e.refreshing=t},expression:"refreshing"}},"component",e.$attrs,!1),[i("div",{ref:"container",staticClass:"v-infinite-scroll"},[e._t("default")],2),i("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"v-infinite-scroll-footer"},[e._t("loading",[i("Loading",{staticClass:"v-infinite-scroll-loading",attrs:{size:"32"}})])],2),i("div",{directives:[{name:"show",rawName:"v-show",value:e.finished&&!e.empty,expression:"finished && !empty"}],staticClass:"v-infinite-scroll-footer"},[e._t("finished",[e._v("全部加载完成")])],2),i("div",{directives:[{name:"show",rawName:"v-show",value:e.empty,expression:"empty"}],staticClass:"v-infinite-scroll-footer"},[e._t("empty",[i("div",{staticClass:"v-infinite-scroll-empty"},[e._v("空空如也")])])],2),i("div",{directives:[{name:"show",rawName:"v-show",value:e.failed&&!e.finished,expression:"failed && !finished"}],staticClass:"v-infinite-scroll-footer",on:{click:e.load}},[e._t("failed",[e._v("加载失败,点击重试")])],2)])],1)},s=[],l=(i("83d8"),i("78a4a")),a=i("b4b5"),o=i("992d"),r=i("cef0"),c={name:"InfiniteScroll",inheritAttrs:!1,components:{WithScroll:o["a"],PullRefresh:l["a"],Loading:a["a"]},props:{value:{type:Boolean,required:!0},finished:{type:Boolean,default:!1},failed:{type:Boolean,default:!1},empty:{type:Boolean,default:!1},offset:{type:Number,default:300},pullRefresh:{type:Boolean,default:!0}},data:function(){return{refreshing:!1,isLoading:!1}},watch:{value:{handler:function(e){e&&this.load()},immediate:!0}},methods:{update:function(){this.shouldLoadMore()&&this.load()},shouldLoadMore:function(){if(this.finished||this.value||this.failed)return!1;var e=this.$refs.container.getBoundingClientRect().bottom;return e-r["r"].height()<=this.offset},load:function(){this.finished?this.done():this.isLoading||this.refreshing||(this.isLoading=!0,this.$emit("input",!0),this.$emit("load",this.done))},refresh:function(e){this.$emit("refresh",e)},done:function(){var e=this;this.$nextTick(function(){e.$emit("input",!1),e.isLoading=!1})}}},d=c,f=(i("cc5c"),i("2877")),u=Object(f["a"])(d,n,s,!1,null,null,null);t["a"]=u.exports},"992d":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._t("default")],2)},s=[],l=(i("83d8"),i("cef0")),a={name:"WithScroll",props:{rAF:Boolean,wait:Number,onscroll:{type:Function,default:function(){}}},mounted:function(){this.bind()},activated:function(){this.bind()},deactivated:function(){this.unbind()},beforeDestroy:function(){this.unbind(),this.handleScroll=null},methods:{bind:function(){this.isBind||(this.handleScroll=this.rAF?Object(l["m"])(this.handleScroll):Object(l["q"])(this.handleScroll,this.wait),this.scrollEl=Object(l["e"])(this.$el),Object(l["a"])(this.scrollEl,"scroll",this.handleScroll),this.isBind=!0)},unbind:function(){this.isBind&&(Object(l["n"])(this.scrollEl,"scroll",this.handleScroll),this.isBind=!1,this.scrollEl=null)},handleScroll:function(){this.scrollTop=Object(l["f"])(this.scrollEl),this.onscroll(this.scrollTop)},setScrollTop:function(e){Object(l["o"])(this.scrollEl,e)}}},o=a,r=i("2877"),c=Object(r["a"])(o,n,s,!1,null,null,null);t["a"]=c.exports},a7d0:function(e,t,i){"use strict";var n=i("4ec8"),s=i.n(n);s.a},cc5c:function(e,t,i){"use strict";var n=i("7769"),s=i.n(n);s.a},cfb6:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Navbar",{attrs:{title:"InfiniteScroll"}}),i("Module")],1)},s=[],l=i("07e1"),a={name:"page-infinite-scroll",components:{Module:l["default"]}},o=a,r=i("2877"),c=Object(r["a"])(o,n,s,!1,null,null,null);t["default"]=c.exports},ef5d:function(e,t,i){"use strict";var n=i("5e62"),s=i.n(n);s.a}}]);