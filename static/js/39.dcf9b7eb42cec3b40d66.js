webpackJsonp([39],{"0xDb":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(0===arguments.length)return null;var n=t||"{y}-{m}-{d} {h}:{i}:{s}",a=void 0;"object"===(void 0===e?"undefined":(0,k.default)(e))?a=e:(10===(""+e).length&&(e=1e3*parseInt(e)),a=new Date(e));var i={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()};return n.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var n=i[t];return"a"===t?["一","二","三","四","五","六","日"][n-1]:(e.length>0&&n<10&&(n="0"+n),n||0)})}function s(e,t){e=1e3*+e;var n=new Date(e),a=Date.now(),s=(a-n)/1e3;return s<30?"刚刚":s<3600?Math.ceil(s/60)+"分钟前":s<86400?Math.ceil(s/3600)+"小时前":s<172800?"1天前":t?i(e,t):n.getMonth()+1+"月"+n.getDate()+"日"+n.getHours()+"时"+n.getMinutes()+"分"}function o(e){e=null==e?window.location.href:e;var t=e.substring(e.lastIndexOf("?")+1),n={},a=/([^?&=]+)=([^?&=]*)/g;return t.replace(a,function(e,t,a){var i=decodeURIComponent(t),s=decodeURIComponent(a);return s=String(s),n[i]=s,e}),n}function r(e){for(var t=0,n=0;n<e.length;n++)null!=e[n].match(/[^\x00-\xff]/gi)?t+=1:t+=.5;return Math.floor(t)}function l(e){for(var t=[],n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}function c(e){return e?l((0,y.default)(e).map(function(t){return void 0===e[t]?"":encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"):""}function u(e){var t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}function d(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText}function p(e,t){return"object"!==(void 0===e?"undefined":(0,k.default)(e))&&(e={}),Array.isArray(t)?t.slice():((0,y.default)(t).forEach(function(n){var a=t[n];"object"===(void 0===a?"undefined":(0,k.default)(a))?e[n]=p(e[n],a):e[n]=a}),e)}function f(e,t,n){if(!(n<=0)){var a=t-e.scrollTop,i=a/n*10;setTimeout(function(){console.log(new Date),e.scrollTop=e.scrollTop+i,e.scrollTop!==t&&f(e,t,n-10)},10)}}function m(e,t){if(e&&t){var n=e.className,a=n.indexOf(t);-1===a?n+=""+t:n=n.substr(0,a)+n.substr(a+t.length),e.className=n}}function g(e){return"start"===e?(new Date).getTime()-7776e6:new Date((new Date).toDateString())}function v(e,t,n){var a=void 0,i=void 0,s=void 0,o=void 0,r=void 0,l=function l(){var c=+new Date-o;c<t&&c>0?a=setTimeout(l,t-c):(a=null,n||(r=e.apply(s,i),a||(s=i=null)))};return function(){for(var i=arguments.length,c=Array(i),u=0;u<i;u++)c[u]=arguments[u];s=this,o=+new Date;var d=n&&!a;return a||(a=setTimeout(l,t)),d&&(r=e.apply(s,c),s=c=null),r}}function b(e){if(!e&&"object"!==(void 0===e?"undefined":(0,k.default)(e)))throw new Error("error arguments","shallowClone");var t=e.constructor===Array?[]:{};return(0,y.default)(e).forEach(function(n){e[n]&&"object"===(0,k.default)(e[n])?(t[n]=e[n].constructor===Array?[]:{},t[n]=b(e[n])):t[n]=e[n]}),t}function h(e){return n("7YgM").dependencies[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.pickerOptions=void 0;var w=n("fZjL"),y=a(w),_=n("pFYg"),k=a(_);t.parseTime=i,t.formatTime=s,t.getQueryObject=o,t.getByteLen=r,t.cleanArray=l,t.param=c,t.param2Obj=u,t.html2Text=d,t.objectMerge=p,t.scrollTo=f,t.toggleClass=m,t.getTime=g,t.debounce=v,t.deepClone=b,t.getVersion=h;t.pickerOptions=[{text:"今天",onClick:function(e){var t=new Date,n=new Date((new Date).toDateString());t.setTime(n.getTime()),e.$emit("pick",[n,t])}},{text:"最近一周",onClick:function(e){var t=new Date((new Date).toDateString()),n=new Date;n.setTime(t.getTime()-6048e5),e.$emit("pick",[n,t])}},{text:"最近一个月",onClick:function(e){var t=new Date((new Date).toDateString()),n=new Date;n.setTime(n.getTime()-2592e6),e.$emit("pick",[n,t])}},{text:"最近三个月",onClick:function(e){var t=new Date((new Date).toDateString()),n=new Date;n.setTime(n.getTime()-7776e6),e.$emit("pick",[n,t])}}]},"7YgM":function(e,t){e.exports={name:"agent-payment",version:"1.0.0",description:"agent payment",author:"bootmall",private:!0,scripts:{dev:"node build/dev-server.js",test:"node build/dev-test.js NODE_ENV=test env_config=test","build:prod":"cd ../static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=prod node build/build.js && echo 'git pushlist' && cd ../static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:test":"cd ../test.static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=sit node build/build.js && echo 'git pushlist' && cd ../test-static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:sit-preview":"cross-env NODE_ENV=production env_config=sit npm_config_preview=true  npm_config_report=true node build/build.js",lint:"eslint --ext .js,.vue src"},dependencies:{axios:"0.17.1",clipboard:"1.7.1",codemirror:"5.31.0",dropzone:"5.2.0",echarts:"^4.1.0","element-ui":"2.0.7","file-saver":"1.3.3","font-awesome":"4.7.0","js-cookie":"2.2.0",jsonlint:"1.6.2",jszip:"3.1.4",lodash:"latest",mathjs:"^5.1.1",mockjs:"1.0.1-beta3","normalize.css":"7.0.0",npm:"^6.3.0","npm-zepto":"^1.1.7",nprogress:"0.2.0",screenfull:"3.3.2",showdown:"1.8.2",simplemde:"1.11.2",sortablejs:"1.6.1",tinymce:"^4.8.1",vue:"2.5.9","vue-count-to":"1.0.10","vue-echarts":"^3.1.2","vue-i18n":"7.3.2","vue-multiselect":"2.0.6","vue-qr":"^1.3.8","vue-router":"3.0.1","vue-splitpane":"1.0.0",vuedraggable:"2.15.0",vuex:"3.0.1",xlsx:"^0.11.7",zepto:"^1.2.0"},devDependencies:{autoprefixer:"7.1.6","babel-core":"6.26.0","babel-eslint":"8.0.2","babel-loader":"7.1.2","babel-plugin-transform-runtime":"6.23.0","babel-preset-env":"1.6.1","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"6.24.1","babel-register":"6.26.0",chalk:"2.3.0",commander:"^2.17.1","connect-history-api-fallback":"1.4.0","copy-webpack-plugin":"4.2.0","cross-env":"5.1.1","css-loader":"0.28.7",eslint:"4.11.0","eslint-friendly-formatter":"3.0.0","eslint-import-resolver-webpack":"0.8.3","eslint-loader":"1.9.0","eslint-plugin-html":"3.2.2","eslint-plugin-import":"2.8.0","eventsource-polyfill":"0.9.6",express:"4.16.2","extract-text-webpack-plugin":"3.0.2","file-loader":"0.11.2","friendly-errors-webpack-plugin":"1.6.1","function-bind":"1.1.0","html-webpack-plugin":"2.30.0","http-proxy-middleware":"0.17.4","node-sass":"^4.9.2",opn:"4.0.2","optimize-css-assets-webpack-plugin":"3.2.0",ora:"1.1.0","postcss-loader":"^2.1.6","pushstate-server":"2.1.0",rimraf:"2.6.0","sass-loader":"6.0.6","script-loader":"0.7.2",semver:"5.3.0","style-loader":"0.19.0","svg-sprite-loader":"3.4.1","url-loader":"0.6.2","vue-loader":"13.5.0","vue-style-loader":"3.0.3","vue-template-compiler":"2.5.9",webpack:"3.8.1","webpack-bundle-analyzer":"2.9.0","webpack-dev-middleware":"1.12.0","webpack-hot-middleware":"2.20.0","webpack-merge":"4.1.0"},engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},MN3F:function(e,t,n){var a=n("safD");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("1d630c39",a,!0)},OPnv:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"components-container"},[n("div",{staticClass:"filter-container"},[n("el-select",{staticClass:"filter-item",attrs:{placeholder:"选择通道",filterable:""},model:{value:e.listQuery.channelAccountId,callback:function(t){e.$set(e.listQuery,"channelAccountId",t)},expression:"listQuery.channelAccountId"}},e._l(e.channelList,function(e,t){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),n("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{align:"right",type:"date",placeholder:"开始日期","value-format":"yyyy-MM-dd","picker-options":e.pickerOptions},model:{value:e.listQuery.dateStart,callback:function(t){e.$set(e.listQuery,"dateStart",t)},expression:"listQuery.dateStart"}}),e._v(" "),n("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{align:"right",type:"date","value-format":"yyyy-MM-dd",placeholder:"结束日期","picker-options":e.pickerOptions},model:{value:e.listQuery.dateEnd,callback:function(t){e.$set(e.listQuery,"dateEnd",t)},expression:"listQuery.dateEnd"}}),e._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{"row-class-name":e.tableRowClassName,data:e.list,"element-loading-text":"数据加载中，请稍候...",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"日期"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.date))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"通道"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.channel_account_name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"收款笔数"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.recharge_count))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"收款总额"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.recharge_total))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"结算笔数"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.remit_count))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"结算总额"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.remit_total))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"渠道日结余"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.channel_sum))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"平台日结余"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.plat_sum))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"通道起始余额时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e._f("parseTime")(t.row.channel_balance_begin_ts)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"通道结束余额时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e._f("parseTime")(t.row.channel_balance_end_ts)))])]}}])})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[n("el-pagination",{attrs:{background:"","current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1)],1)},i=[],s={render:a,staticRenderFns:i};t.a=s},WAaP:function(e,t,n){"use strict";function a(e){n("MN3F")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("iBEw"),s=n.n(i),o=n("OPnv"),r=n("VU/8"),l=a,c=r(s.a,o.a,!1,l,null,null);t.default=c.exports},XZlg:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".waves-ripple{position:absolute;border-radius:100%;background-color:rgba(0,0,0,.15);background-clip:padding-box;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);opacity:1}.waves-ripple.z-active{opacity:0;-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out,-webkit-transform .6s ease-out}",""])},cAgV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("jdeu"),i=function(e){return e&&e.__esModule?e:{default:e}}(a),s=function(e){e.directive("waves",i.default)};window.Vue&&(window.waves=i.default,Vue.use(s)),i.default.install=s,t.default=i.default},ctMr:function(e,t,n){var a=n("XZlg");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("81d72750",a,!0)},iBEw:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n("cAgV"),s=a(i),o=(n("0xDb"),n("3pLw")),r=a(o),l=n("X2Oc");a(l);t.default={name:"vue_channel_daily_reconciliations",components:{waves:s.default},directives:{waves:s.default},data:function(){return{list:null,tableKey:0,total:null,listLoading:!0,statusOptions:[],channelList:[],listQuery:{page:1,limit:20,channelAccountId:"",sort:"",dateStart:new Date(new Date((new Date).getTime()-2592e5).setHours(0,0,0,0)),dateEnd:null},pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()},shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"一周前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",t)}}]}}},created:function(){this.getChannelList(),this.getInitData()},methods:{tableRowClassName:function(e){var t=e.row;e.rowIndex;return t.channel_sum!=t.plat_sum?"warning-row":"success-row"},getInitData:function(){var e=this;e.listLoading=!0,r.default.post("/admin/report/channel-daily-reconciliations",e.listQuery).then(function(t){e.listLoading=!1,0==t.code&&(e.list=t.data.data,e.total=t.data.pagination.total)})},getChannelList:function(){self=this,self.isLoading=!0,r.default.post("/admin/channel/get-account-list").then(function(e){0!=e.code?self.$message.error({message:e.message}):(e.data.unshift({id:"__ALL__",name:"所有"}),self.channelList=e.data),self.isLoading=!1},function(e){self.$message.error({message:e.message}),self.isLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getInitData()},handleSizeChange:function(e){this.listQuery.limit=e,this.getInitData()},handleCurrentChange:function(e){this.listQuery.page=e,this.getInitData()}}}},jdeu:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("woOf"),i=function(e){return e&&e.__esModule?e:{default:e}}(a);n("ctMr"),t.default={bind:function(e,t){e.addEventListener("click",function(n){var a=(0,i.default)({},t.value),s=(0,i.default)({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),o=s.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var r=o.getBoundingClientRect(),l=o.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(r.width,r.height)+"px",o.appendChild(l)),s.type){case"center":l.style.top=r.height/2-l.offsetHeight/2+"px",l.style.left=r.width/2-l.offsetWidth/2+"px";break;default:l.style.top=n.pageY-r.top-l.offsetHeight/2-document.body.scrollTop+"px",l.style.left=n.pageX-r.left-l.offsetWidth/2-document.body.scrollLeft+"px"}return l.style.backgroundColor=s.color,l.className="waves-ripple z-active",!1}},!1)}}},safD:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".el-table .warning-row{background:oldlace}.el-table .success-row{background:#f0f9eb}",""])}});