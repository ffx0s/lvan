(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fbdafba"],{"5f7b":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("Navbar",{attrs:{title:"Switch"}}),s("br"),s("Group",[s("Cell",{attrs:{title:"默认"}},[s("div",{staticClass:"demo-switch"},[s("VSwitch",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}})],1)]),s("Cell",{attrs:{title:"修改颜色"}},[s("div",{staticClass:"demo-switch"},[s("VSwitch",{attrs:{color:"#2196f3"},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}})],1)]),s("Cell",{attrs:{title:"修改大小"}},[s("div",{staticClass:"demo-switch"},[s("VSwitch",{attrs:{color:"pink",size:"20"},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}})],1)]),s("Cell",{attrs:{title:"禁用"}},[s("div",{staticClass:"demo-switch"},[s("VSwitch",{attrs:{disabled:""},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}})],1)])],1)],1)},a=[],c=s("dfae"),o=s("6391"),r=s("9925"),n={name:"page-switch",components:{VSwitch:r["a"],Group:c["a"],Cell:o["a"]},data:function(){return{checked:!1}}},l=n,d=(s("e07d"),s("2877")),u=Object(d["a"])(l,i,a,!1,null,null,null);t["default"]=u.exports},"8fba":function(e,t,s){t=e.exports=s("2350")(!1),t.push([e.i,".demo-switch{font-size:0}",""])},9925:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"v-switch",class:{"v-switch-on":e.value,"v-switch-disabled":e.disabled},style:e.style,on:{click:e.click}},[s("div",{staticClass:"v-switch-circle"})])},a=[],c=(s("83d8"),{name:"VSwitch",props:{value:{required:!0},color:{type:String,default:""},size:{type:[String,Number],default:0},disabled:{type:Boolean,default:!1}},computed:{style:function(){var e={};return this.color&&this.value&&(e.backgroundColor=this.color),this.size&&(e.fontSize=this.size+"px"),e}},methods:{click:function(){this.disabled||this.$emit("input",!this.value)}}}),o=c,r=(s("da03"),s("2877")),n=Object(r["a"])(o,i,a,!1,null,null,null);t["a"]=n.exports},"9af6":function(e,t,s){var i=s("9f33");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=s("499e").default;a("f8455c96",i,!0,{sourceMap:!1,shadowMode:!1})},"9f33":function(e,t,s){t=e.exports=s("2350")(!1),t.push([e.i,".v-switch{position:relative;display:inline-block;font-size:26px;width:2em;height:1em;border-radius:1em;border:1px solid #e5e5e5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:background .3s,border-color .3s;transition:background .3s,border-color .3s;cursor:pointer}.v-switch-circle{position:absolute;top:0;left:0;width:1em;height:1em;border-radius:50%;background-color:#fff;-webkit-box-shadow:0 0 1px 0 rgba(0,0,0,.25),0 4px 11px 0 rgba(0,0,0,.08),-1px 2px 2px 0 rgba(0,0,0,.14);box-shadow:0 0 1px 0 rgba(0,0,0,.25),0 4px 11px 0 rgba(0,0,0,.08),-1px 2px 2px 0 rgba(0,0,0,.14);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.v-switch-on{background-color:#4dd865;border:1px solid rgba(0,0,0,.1)}.v-switch-on .v-switch-circle{-webkit-transform:translateX(1em);transform:translateX(1em)}.v-switch-disabled{opacity:.6;cursor:default}",""])},a5ae:function(e,t,s){var i=s("8fba");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=s("499e").default;a("7a233833",i,!0,{sourceMap:!1,shadowMode:!1})},da03:function(e,t,s){"use strict";var i=s("9af6"),a=s.n(i);a.a},e07d:function(e,t,s){"use strict";var i=s("a5ae"),a=s.n(i);a.a}}]);