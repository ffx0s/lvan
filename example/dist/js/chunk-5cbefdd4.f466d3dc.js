(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cbefdd4","chunk-64f27343"],{"0740":function(t,e,i){var a=i("69c4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("499e").default;s("63358313",a,!0,{sourceMap:!1,shadowMode:!1})},"15eb":function(t,e,i){"use strict";var a=i("4328"),s=i.n(a);s.a},"2c46":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".v-c4{font-size:12px;line-height:18px;background-color:#fff;border-radius:4px}.v-c4__header{padding:10px 10px 0}.v-c4__content{padding:10px}.v-c4__list{list-style:none;padding:0;margin:0}.v-c4__list li{margin-bottom:10px}.v-c4__item-image{width:90px;height:90px;border-radius:5px;background-position:50%;background-repeat:no-repeat}.v-c4__item-info{flex:1;margin-left:10px}.v-c4__item-title{flex:1;margin-bottom:5px}.v-c4__item-price{margin-left:10px;text-align:right}.v-c4__item-number{color:var(--textRegular)}.v-c4__footer{padding:10px;align-items:center}.v-c4__total{text-align:right}.v-c4_row{display:flex;flex-direction:row}.v-c4_between{display:flex;justify-content:space-between}",""])},4139:function(t,e,i){"use strict";var a=i("0740"),s=i.n(a);s.a},4328:function(t,e,i){var a=i("2c46");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("499e").default;s("12b7864e",a,!0,{sourceMap:!1,shadowMode:!1})},5826:function(t,e,i){var a=i("9fbe");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("499e").default;s("3f051655",a,!0,{sourceMap:!1,shadowMode:!1})},6707:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticStyle:{height:"46px"}},[i("Navbar",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}],attrs:{fixed:"",title:"Skeleton"}},[i("VSwitch",{attrs:{slot:"right"},slot:"right",model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}})],1)],1),i("Module",{model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}})],1)},s=[],n=i("82a4"),c=i("c8f3"),l={components:{VSwitch:n["a"],Module:c["default"]},data:function(){return{loading:!0}}},o=l,r=i("2877"),d=Object(r["a"])(o,a,s,!1,null,null,null);e["default"]=d.exports},"69c4":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".v-c1{width:100%;background-color:#fff}.v-c1__image{width:100%;height:130px;overflow:hidden}.v-c1__image img{max-width:100%}.v-c1__detail{padding:10px 15px}.v-c1__title{display:flex;align-items:center;font-size:16px;min-height:26px;font-weight:450}.v-c1__description{margin-top:5px;min-height:80px;font-size:14px}",""])},"755c":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loading?i(t.tag,{tag:"component",staticClass:"v-c3 v-skeleton--animate"},[i("div",{staticClass:"v-c3__head"},[i("div",{staticClass:"v-c3__head-image v-skeleton"}),i("p",{staticClass:"v-c3__head-name v-skeleton"})]),i("p",{staticClass:"v-c3__head-type v-skeleton"}),i("div",{staticClass:"v-c3__head-content v-skeleton"})]):i(t.tag,{tag:"component",staticClass:"v-c3"},[i("div",{staticClass:"v-c3__head"},[i("div",{staticClass:"v-c3__head-image"},[t.item.image?i("img",{attrs:{src:t.item.image}}):t._e()]),i("p",{staticClass:"v-c3__head-name"},[t._v(t._s(t.item.name))])]),i("p",{staticClass:"v-c3__head-type"},[t._v(t._s(t.item.date))]),i("div",{staticClass:"v-c3__head-content"},[t._v("\n    "+t._s(t.item.content)+"\n  ")])])},s=[],n={name:"v-card-c3",props:{tag:{type:String,default:"div"},loading:{type:Boolean,default:!1},item:{type:Object,default:function(){return{image:"",name:"",date:"",content:""}}}}},c=n,l=(i("e7b4"),i("2877")),o=Object(l["a"])(c,a,s,!1,null,null,null);e["a"]=o.exports},"7f4c":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".v-switch{position:relative;display:inline-block;font-size:26px;width:2em;height:1em;border-radius:1em;border:1px solid var(--lightGray);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:background .3s,border-color .3s;cursor:pointer;transform:translateZ(0);-webkit-tap-highlight-color:transparent}.v-switch__circle{position:absolute;top:0;left:0;width:1em;height:1em;border-radius:50%;background-color:#fff;box-shadow:0 0 1px 0 rgba(0,0,0,.25),0 4px 11px 0 rgba(0,0,0,.08),-1px 2px 2px 0 rgba(0,0,0,.14);transition:transform .3s}.v-switch--on{background-color:#4dd865;border:1px solid rgba(0,0,0,.1)}.v-switch--on .v-switch__circle{transform:translateX(1em)}.v-switch--disabled{opacity:.6;cursor:default}",""])},"82a4":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-switch",class:{"v-switch--on":t.value,"v-switch--disabled":t.disabled},style:t.style,on:{click:t.click}},[i("div",{staticClass:"v-switch__circle"})])},s=[],n=(i("c5f6"),{name:"VSwitch",props:{value:{type:Boolean,required:!0},color:{type:String,default:""},size:{type:[String,Number],default:0},disabled:{type:Boolean,default:!1}},computed:{style:function(){var t={};return this.color&&this.value&&(t.backgroundColor=this.color),this.size&&(t.fontSize=this.size+"px"),t}},methods:{click:function(){this.disabled||this.$emit("input",!this.value)}}}),c=n,l=(i("d7cf"),i("2877")),o=Object(l["a"])(c,a,s,!1,null,null,null);e["a"]=o.exports},"83b8":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loading?i(t.tag,{tag:"component",staticClass:"v-c2 v-skeleton--animate"},[i("div",{staticClass:"v-c2__image v-skeleton"}),i("div",{staticClass:"v-c2__detail"},[i("div",{staticClass:"v-c2__title v-skeleton"}),i("div",{staticClass:"v-c2__description v-skeleton"})])]):i(t.tag,{tag:"component",staticClass:"v-c2"},[i("div",{staticClass:"v-c2__image"},[t.item.image?i("img",{attrs:{src:t.item.image}}):t._e()]),i("div",{staticClass:"v-c2__detail"},[i("div",{staticClass:"v-c2__title"},[t._v(t._s(t.item.title))]),i("div",{staticClass:"v-c2__description"},[t._v("\n      "+t._s(t.item.description)+"\n    ")])])])},s=[],n={name:"v-card-c2",props:{tag:{type:String,default:"div"},loading:{type:Boolean,default:!1},item:{type:Object,default:function(){return{image:"",title:"",description:""}}}}},c=n,l=(i("ef2c"),i("2877")),o=Object(l["a"])(c,a,s,!1,null,null,null);e["a"]=o.exports},"95f3":function(t,e,i){var a=i("7f4c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("499e").default;s("f21097a6",a,!0,{sourceMap:!1,shadowMode:!1})},"9fbe":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".v-c2{display:flex;padding:10px;background-color:#fff}.v-c2__image{width:100px;height:100px;background-color:var(--background);border-radius:5px}.v-c2__image img{max-width:100%;border-radius:inherit}.v-c2__detail{margin-left:10px;flex:1}.v-c2__title{display:flex;align-items:center;font-size:16px;min-height:26px;font-weight:450}.v-c2__description{margin-top:5px;height:62px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;font-size:14px}",""])},acc0:function(t,e,i){var a=i("e983");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("499e").default;s("1ad4a997",a,!0,{sourceMap:!1,shadowMode:!1})},c8f3:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app--spacing"},[i("Card1",{attrs:{loading:t.loading,item:t.item}}),i("br"),i("Card2",{attrs:{loading:t.loading,item:t.item2}}),i("br"),i("Card3",{attrs:{loading:t.loading,item:t.item3}}),i("br"),i("Card4",{attrs:{loading:t.loading,item:t.item4}},[i("template",{slot:"btns"},[i("VButton",{attrs:{small:"",outline:""}},[t._v("查看物流")]),i("VButton",{attrs:{small:"",outline:""}},[t._v("延长收货")]),i("VButton",{attrs:{small:"",outline:"",type:"warning"}},[t._v("确认收货")])],1)],2)],1)},s=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loading?i("div",{staticClass:"v-c1 v-skeleton--animate"},[i("div",{staticClass:"v-c1__image v-skeleton"}),t._m(0)]):i("div",{staticClass:"v-c1"},[i("div",{staticClass:"v-c1__image"},[t.item.image?i("img",{attrs:{src:t.item.image}}):t._e()]),i("div",{staticClass:"v-c1__detail"},[i("div",{staticClass:"v-c1__title"},[t._v(t._s(t.item.title))]),i("div",{staticClass:"v-c1__description"},[t._v("\n      "+t._s(t.item.description)+"\n    ")])])])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-c1__detail"},[i("div",{staticClass:"v-c1__title v-skeleton"}),i("div",{staticClass:"v-c1__description v-skeleton"})])}],l={name:"v-card-c1",props:{loading:{type:Boolean,default:!1},item:{type:Object,default:function(){return{image:"",title:"",description:""}}}}},o=l,r=(i("4139"),i("2877")),d=Object(r["a"])(o,n,c,!1,null,null,null),v=d.exports,_=i("83b8"),p=i("755c"),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loading?i("div",{staticClass:"v-c4 v-skeleton--animate"},[i("div",{staticClass:"v-c4__header v-c4_between"},[i("div",{staticClass:"v-c4__header-shopname v-skeleton"},[t._v("\n      "+t._s(t.item.shopname)+"\n    ")]),i("div",{staticClass:"v-color-warning v-skeleton"},[t._v(t._s(t.item.status))])]),i("div",{staticClass:"v-c4__content"},[t._m(0),i("div",{staticClass:"v-c4__total"},[i("span",{staticClass:"v-skeleton"},[i("span",{staticClass:"v-c4__item-number"},[t._v("共"+t._s(t.item.number)+"件商品")]),t._v("\n         合计: ￥"+t._s(t.item.price)+"\n      ")])])])]):i("div",{staticClass:"v-c4"},[i("div",{staticClass:"v-c4__header v-c4_between"},[i("div",{staticClass:"v-c4__header-shopname",class:t.loadingClass},[t._v("\n      "+t._s(t.item.shopname)+"\n    ")]),i("div",{staticClass:"v-color-warning",class:t.loadingClass},[t._v(t._s(t.item.status))])]),i("div",{staticClass:"v-c4__content"},[i("ul",{staticClass:"v-c4__list"},[i("li",{staticClass:"v-c4_row"},[i("div",{staticClass:"v-c4__item-image",class:t.loadingClass,style:t.imageStyle}),i("div",{staticClass:"v-c4__item-info v-c4_between",class:t.loadingClass},[i("div",{staticClass:"v-c4__item-title"},[t._v(t._s(t.item.title))]),i("div",{staticClass:"v-c4__item-price"},[i("div",[t._v(t._s(t.item.price))]),i("div",{staticClass:"v-c4__item-number"},[t._v("x"+t._s(t.item.number))])])])])]),i("div",{staticClass:"v-c4__total"},[i("span",{class:t.loadingClass},[i("span",{staticClass:"v-c4__item-number"},[t._v("共"+t._s(t.item.number)+"件商品")]),t._v("\n         合计: ￥"+t._s(t.item.price)+"\n      ")])])]),i("div",{staticClass:"v-c4__footer v-c4_between v-bd-top"},[i("span",{staticClass:"v-color-error"},[t._v(t._s(t.item.message))]),i("div",{staticClass:"v-c4__footer-actions"},[t._t("btns")],2)])])},u=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"v-c4__list"},[i("li",{staticClass:"v-c4_row"},[i("div",{staticClass:"v-c4__item-image v-skeleton"}),i("div",{staticClass:"v-c4__item-info v-c4_between v-skeleton"})])])}],g={name:"v-card-c4",props:{item:{type:Object,default:function(){return{image:"",title:"",price:"",number:"",status:"____________",shopname:"_______________",message:""}}},loading:{type:Boolean,default:!1}},computed:{imageStyle:function(){return this.item.image?{backgroundImage:"url("+this.item.image+")",backgroundSize:"cover"}:{}},loadingClass:function(){return this.loading?"v-skeleton":""}}},f=g,h=(i("15eb"),Object(r["a"])(f,m,u,!1,null,null,null)),b=h.exports,x={components:{Card1:v,Card2:_["a"],Card3:p["a"],Card4:b},props:{value:{type:Boolean,default:!0}},computed:{loading:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},data:function(){return{item:{image:"https://static.webfed.cn/o_1dcbbpm8510miv7h1b0i1qvn1tln9.jpeg?imageView2/0/w/700",title:"江苏省",description:"江苏省，简称苏，是中华人民共和国省级行政区，位于华东地区，省会南京市。“江苏”之名可追溯至清初设置的江苏布政使司，是当时江宁府和苏州府两府首字之合称。"},item2:{image:"http://static.webfed.cn/Fv3hleoT5ts5kNSrqWpXTV6mrztB?imageView2/0/w/300",title:"江苏省",description:"江苏省，简称苏，是中华人民共和国省级行政区，位于华东地区，省会南京市。“江苏”之名可追溯至清初设置的江苏布政使司，是当时江宁府和苏州府两府首字之合称。"},item3:{image:"http://static.webfed.cn/FksNjHhy7Je-dpNJanGFwXDjH2xf",name:"在沙漠里打滚",date:"2018-08-18",content:"卖家超级好，有问题反馈了，很快就给解决，东西好评，还会再来。"},item4:{image:"https://static.webfed.cn/o_1dcbc380up531sgu178aebf62ph.jpg?imageView2/0/w/300",title:"安岳黄柠檬新鲜12个当季水果一二级小果皮薄多汁包邮非青香水柠檬",price:23,number:1,status:"卖家已发货",shopname:"润宁生鲜旗舰店"}}},mounted:function(){var t=this;setTimeout(function(){t.loading=!1},2e3)}},C=x,w=Object(r["a"])(C,a,s,!1,null,null,null);e["default"]=w.exports},d7cf:function(t,e,i){"use strict";var a=i("95f3"),s=i.n(a);s.a},e7b4:function(t,e,i){"use strict";var a=i("acc0"),s=i.n(a);s.a},e983:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".v-c3{padding:10px;background-color:#fff}.v-c3__head{display:flex;align-items:center}.v-c3__head-image{width:28px;height:28px;border-radius:50%;background-color:var(--background)}.v-c3__head-image img{width:100%;height:100%;border-radius:inherit}.v-c3__head-name{margin:0 0 0 10px;min-width:100px;min-height:20px;font-size:14px;font-weight:450}.v-c3__head-type{margin:10px 0 0;min-height:14px;font-size:12px;color:var(--textRegular)}.v-c3__head-content{margin-top:10px;font-size:14px;min-height:50px}",""])},ef2c:function(t,e,i){"use strict";var a=i("5826"),s=i.n(a);s.a}}]);