webpackJsonp([54],{"6Gwn":function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("MOmO"),n=function(a){return a&&a.__esModule?a:{default:a}}(r);t.default={name:"page401",data:function(){return{errGif:n.default+"?"+ +new Date,ewizardClap:"https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646",dialogVisible:!1}},methods:{back:function(){this.$route.query.noGoBack?this.$router.push({name:"vue_dashboard_index"}):this.$router.go(-1)}}}},BWSA:function(a,t,e){t=a.exports=e("FZ+f")(!1),t.push([a.i,".errPage-container[data-v-6a9a22d8]{width:800px;margin:100px auto}.errPage-container .pan-back-btn[data-v-6a9a22d8]{background:#008489;color:#fff}.errPage-container .pan-gif[data-v-6a9a22d8],.errPage-container .pan-img[data-v-6a9a22d8]{margin:0 auto;display:block}.errPage-container .text-jumbo[data-v-6a9a22d8]{font-size:60px;font-weight:700;color:#484848}.errPage-container .list-unstyled[data-v-6a9a22d8]{font-size:14px}.errPage-container .list-unstyled li[data-v-6a9a22d8]{padding-bottom:5px}.errPage-container .list-unstyled a[data-v-6a9a22d8]{color:#008489;text-decoration:none}.errPage-container .list-unstyled a[data-v-6a9a22d8]:hover{text-decoration:underline}",""])},MOmO:function(a,t,e){a.exports=e.p+"static/img/401.089007e.gif"},Yy3T:function(a,t,e){var r=e("BWSA");"string"==typeof r&&(r=[[a.i,r,""]]),r.locals&&(a.exports=r.locals);e("rjj0")("7066cae5",r,!0)},eRLo:function(a,t,e){"use strict";function r(a){e("Yy3T")}Object.defineProperty(t,"__esModule",{value:!0});var n=e("6Gwn"),i=e.n(n),o=e("xy5u"),s=e("VU/8"),c=r,d=s(i.a,o.a,!1,c,"data-v-6a9a22d8",null);t.default=d.exports},xy5u:function(a,t,e){"use strict";var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"errPage-container"},[e("el-button",{staticClass:"pan-back-btn",attrs:{icon:"arrow-left"},on:{click:a.back}},[a._v("返回")]),a._v(" "),e("el-row",[e("el-col",{attrs:{span:12}},[e("h1",{staticClass:"text-jumbo text-ginormous"},[a._v("Oops!")]),a._v(" "),e("h2",[a._v("你没有该页面权限")]),a._v(" "),e("ul",{staticClass:"list-unstyled"},[e("li",[a._v("或者你可以去:")]),a._v(" "),e("li",{staticClass:"link-type"},[e("router-link",{attrs:{to:"/dashboard"}},[a._v("回首页")])],1)])]),a._v(" "),e("el-col",{attrs:{span:12}},[e("img",{attrs:{src:a.errGif,width:"313",height:"428",alt:"Girl has dropped her ice cream."}})])],1)],1)},n=[],i={render:r,staticRenderFns:n};t.a=i}});