(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e88e448"],{"1af6":function(t,e,o){var n=o("63b6");n(n.S,"Array",{isArray:o("9003")})},"40c3":function(t,e,o){var n=o("6b4c"),i=o("5168")("toStringTag"),r="Arguments"==n(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(o){}};t.exports=function(t){var e,o,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(o=a(e=Object(t),i))?o:r?n(e):"Object"==(s=n(e))&&"function"==typeof e.callee?"Arguments":s}},"469f":function(t,e,o){o("6c1c"),o("1654"),t.exports=o("7d7b")},5106:function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,".v-haedroom{width:100%;z-index:99996;transform:translateZ(0)}.v-headroom--fixed{position:fixed}.v-headroom--absolute{position:absolute}.v-headroom--pinned{transform:translateZ(0) translateY(0)}.v-headroom__top{top:0}.v-headroom__top.v-headroom--unpinned{transform:translateZ(0) translateY(-100%)}.v-headroom__bottom{bottom:0}.v-headroom__bottom.v-headroom--unpinned{transform:translateZ(0) translateY(100%)}.v-headroom--transition{transition:transform .3s ease-in-out}",""])},"54a1":function(t,e,o){o("6c1c"),o("1654"),t.exports=o("95d5")},"5d73":function(t,e,o){t.exports=o("469f")},"768b":function(t,e,o){"use strict";o.d(e,"a",(function(){return u}));var n=o("a745"),i=o.n(n);function r(t){if(i()(t))return t}var a=o("5d73"),s=o.n(a),l=o("c8bb"),c=o.n(l);function h(t,e){if(c()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t)){var o=[],n=!0,i=!1,r=void 0;try{for(var a,l=s()(t);!(n=(a=l.next()).done);n=!0)if(o.push(a.value),e&&o.length===e)break}catch(h){i=!0,r=h}finally{try{n||null==l["return"]||l["return"]()}finally{if(i)throw r}}return o}}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,e){return r(t)||h(t,e)||d()}},"7cd6":function(t,e,o){var n=o("40c3"),i=o("5168")("iterator"),r=o("481b");t.exports=o("584a").getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||r[n(t)]}},"7d7b":function(t,e,o){var n=o("e4ae"),i=o("7cd6");t.exports=o("584a").getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},"838f":function(t,e,o){var n=o("8c42");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("499e").default;i("615239fa",n,!0,{sourceMap:!1,shadowMode:!1})},"8c42":function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,".headeroom__toTop{width:45px;height:45px;line-height:45px;text-align:center;font-size:22px;font-weight:700;background-color:rgba(0,0,0,.4);color:#fff;border-radius:4px}.headeroom__toTop--initial{opacity:0;width:45px;bottom:100px;right:20px}.headeroom__toTop--unpinned{opacity:0}.headeroom__toTop--pinned{opacity:1}.headeroom__toTop--transition{-webkit-transition:opacity .3s;transition:opacity .3s}.headroom__space{height:46px}.headeroom__items{padding:0 10px;margin:0;margin-top:10px;font-size:0;list-style-type:none}.headeroom__items li{margin-bottom:10px;width:100%;height:120px;line-height:120px;background:#fff;border-radius:4px;font-size:16px;text-align:center}",""])},"95d5":function(t,e,o){var n=o("40c3"),i=o("5168")("iterator"),r=o("481b");t.exports=o("584a").isIterable=function(t){var e=Object(t);return void 0!==e[i]||"@@iterator"in e||r.hasOwnProperty(n(e))}},a745:function(t,e,o){t.exports=o("f410")},aaa0:function(t,e,o){var n=o("5106");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("499e").default;i("ea10c118",n,!0,{sourceMap:!1,shadowMode:!1})},bac0:function(t,e,o){"use strict";var n=o("838f"),i=o.n(n);i.a},c535:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._t("default")],2)},i=[],r=(o("c5f6"),o("f6da")),a=o("891d"),s={name:"WithScroll",props:{rAF:Boolean,wait:Number},mounted:function(){this.bind()},activated:function(){this.bind()},deactivated:function(){this.unbind()},beforeDestroy:function(){this.unbind(),this.handleScroll=null},methods:{bind:function(){this.isBind||(this.handleScroll=this.rAF?Object(r["m"])(this.handleScroll):Object(r["p"])(this.handleScroll,this.wait),this.scrollEl=Object(a["a"])(this.$el),Object(r["a"])(this.scrollEl,"scroll",this.handleScroll),this.isBind=!0)},unbind:function(){this.isBind&&(Object(r["n"])(this.scrollEl,"scroll",this.handleScroll),this.isBind=!1,this.scrollEl=null)},handleScroll:function(){this.scrollTop=Object(a["b"])(this.scrollEl),this.$emit("scroll",this.scrollTop)},setScrollTop:function(t){Object(a["d"])(this.scrollEl,t)}}},l=s,c=o("2877"),h=Object(c["a"])(l,n,i,!1,null,null,null);e["a"]=h.exports},c8bb:function(t,e,o){t.exports=o("54a1")},cc82:function(t,e,o){"use strict";var n=o("aaa0"),i=o.n(n);i.a},d01e:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"headroom__space"},[o("Headroom",{attrs:{transformFixed:""}},[o("Navbar",{attrs:{title:"Headroom"}})],1)],1),o("ul",{staticClass:"headeroom__items"},t._l(10,(function(e){return o("li",{key:e},[t._v(t._s(e))])})),0),o("Headroom",{staticClass:"headeroom__toTop--initial",attrs:{transformFixed:"100",position:"bottom",pinnedClass:"headeroom__toTop--pinned",unpinnedClass:"headeroom__toTop--unpinned",transitionClass:"headeroom__toTop--transition"}},[o("div",{staticClass:"headeroom__toTop",on:{click:function(e){return t.$toast("toTop")}}},[t._v("↑")])]),o("Headroom",{attrs:{position:"bottom",transformFixed:""}},[o("VButton",{staticStyle:{"border-radius":"0"},attrs:{block:"",type:"primary"},on:{click:function(e){return t.$toast("toolbar")}}},[t._v("\n      Toolbar\n    ")])],1)],1)},i=[],r=o("e1f7"),a=o("c14c"),s={name:"page-headroom",components:{Headroom:r["a"],VButton:a["a"]}},l=s,c=(o("bac0"),o("2877")),h=Object(c["a"])(l,n,i,!1,null,null,null);e["default"]=h.exports},e1f7:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("WithScroll",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom",value:t.transfer,expression:"transfer"}],class:["v-haedroom","v-headroom__"+t.position,t.positionClass,t.toggleClass&&t.transitionClass,t.toggleClass],style:[{height:t.containerHeight?t.containerHeight+"px":null},t.transformFixedStyle],attrs:{rAF:""},on:{scroll:t.update}},[t._t("default")],2)},i=[],r=(o("c5f6"),o("c535")),a=(o("28a5"),o("768b")),s=o("f6da"),l={props:{transformFixed:[String,Boolean]},data:function(){return{transfer:!1,transformFixedStyle:{}}},mounted:function(){this.pagePath=this.$route.fullPath,this.entering=!1,this.leaving=!1,this.enter()},activated:function(){this.enter()},deactivated:function(){this.leave()},beforeDestroy:function(){this.leave(!0)},methods:{enter:function(){var t=this;!1===this.transformFixed||this.entering||(this.entering=!0,this.$nextTick((function(){t.setTransformFixedStyle()})),this.$animatedRoute.$once("afterEnter",(function(){setTimeout((function(){t.removeTransformFixedStyle(),t.transfer=!0,t.entering=!1}),50)})))},leave:function(t){var e=this;!1===this.transformFixed||this.leaving||(this.leaving=!0,this.transfer=!1,this.setTransformFixedStyle(t),this.$nextTick((function(){e.leaving=!1})))},setTransformFixedStyle:function(t){var e=this.$animatedRoute.getPageScrollData(this.pagePath)||{scrollTop:0},o="bottom"===this.position,n=this.transformFixed.split("|"),i=Object(a["a"])(n,1),r=i[0],l=this.$el.offsetHeight,c=o?e.scrollTop+s["r"].height()-l-+r+"px":e.scrollTop+"px";if(t){var h=this.$el.style;h.position="absolute",h.top=c}else this.transformFixedStyle={position:"absolute",top:c}},removeTransformFixedStyle:function(){var t=Object(s["b"])().ios,e=t&&t<9?{position:"absolute"}:{};this.transformFixedStyle=e}}},c=o("4039"),h={name:"Headroom",mixins:[l],directives:{transferDom:c["a"]},components:{WithScroll:r["a"]},props:{disabled:{type:Boolean,default:!1},position:{type:String,default:"top"},fixed:{type:Boolean,default:!0},height:{type:Number,default:0},resistance:{type:Number,default:10},maxTop:{type:Number,default:100},pinnedClass:{type:String,default:"v-headroom--pinned"},unpinnedClass:{type:String,default:"v-headroom--unpinned"},transitionClass:{type:String,default:"v-headroom--transition"}},data:function(){return{toggleClass:"",positionClass:"v-headroom--".concat(this.fixed?"fixed":"absolute"),containerHeight:this.height}},mounted:function(){this.lastTop=0,this.startTop=0,this.containerHeight=this.height||this.$el.children[0].offsetHeight},methods:{update:function(t){if(!this.disabled){if(t<=0)return this.restore();0===this.startTop&&(this.startTop=t),t<this.containerHeight&&this.toggleClass===this.unpinnedClass?this.pinned():(Math.abs(this.lastTop-t)>=this.resistance||Math.abs(this.lastTop-this.startTop)>this.maxTop)&&t>this.containerHeight&&(this[t>this.lastTop?"unpinned":"pinned"](),this.startTop=0),this.lastTop=t}},pinned:function(){this.toggleClass=this.pinnedClass,this.$emit("pinned")},unpinned:function(){this.toggleClass=this.unpinnedClass,this.$emit("unpinned")},restore:function(){this.toggleClass="",this.$emit("restore")}}},d=h,u=(o("cc82"),o("2877")),f=Object(u["a"])(d,n,i,!1,null,null,null);e["a"]=f.exports},f410:function(t,e,o){o("1af6"),t.exports=o("584a").Array.isArray}}]);