webpackJsonp([31],{"0xDb":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(0===arguments.length)return null;var a=t||"{y}-{m}-{d} {h}:{i}:{s}",n=void 0;"object"===(void 0===e?"undefined":(0,w.default)(e))?n=e:(10===(""+e).length&&(e=1e3*parseInt(e)),n=new Date(e));var i={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()};return a.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var a=i[t];return"a"===t?["一","二","三","四","五","六","日"][a-1]:(e.length>0&&a<10&&(a="0"+a),a||0)})}function s(e,t){e=1e3*+e;var a=new Date(e),n=Date.now(),s=(n-a)/1e3;return s<30?"刚刚":s<3600?Math.ceil(s/60)+"分钟前":s<86400?Math.ceil(s/3600)+"小时前":s<172800?"1天前":t?i(e,t):a.getMonth()+1+"月"+a.getDate()+"日"+a.getHours()+"时"+a.getMinutes()+"分"}function l(e){e=null==e?window.location.href:e;var t=e.substring(e.lastIndexOf("?")+1),a={},n=/([^?&=]+)=([^?&=]*)/g;return t.replace(n,function(e,t,n){var i=decodeURIComponent(t),s=decodeURIComponent(n);return s=String(s),a[i]=s,e}),a}function r(e){for(var t=0,a=0;a<e.length;a++)null!=e[a].match(/[^\x00-\xff]/gi)?t+=1:t+=.5;return Math.floor(t)}function o(e){for(var t=[],a=0;a<e.length;a++)e[a]&&t.push(e[a]);return t}function c(e){return e?o((0,b.default)(e).map(function(t){return void 0===e[t]?"":encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"):""}function u(e){var t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}function d(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText}function p(e,t){return"object"!==(void 0===e?"undefined":(0,w.default)(e))&&(e={}),Array.isArray(t)?t.slice():((0,b.default)(t).forEach(function(a){var n=t[a];"object"===(void 0===n?"undefined":(0,w.default)(n))?e[a]=p(e[a],n):e[a]=n}),e)}function m(e,t,a){if(!(a<=0)){var n=t-e.scrollTop,i=n/a*10;setTimeout(function(){console.log(new Date),e.scrollTop=e.scrollTop+i,e.scrollTop!==t&&m(e,t,a-10)},10)}}function f(e,t){if(e&&t){var a=e.className,n=a.indexOf(t);-1===n?a+=""+t:a=a.substr(0,n)+a.substr(n+t.length),e.className=a}}function v(e){return"start"===e?(new Date).getTime()-7776e6:new Date((new Date).toDateString())}function g(e,t,a){var n=void 0,i=void 0,s=void 0,l=void 0,r=void 0,o=function o(){var c=+new Date-l;c<t&&c>0?n=setTimeout(o,t-c):(n=null,a||(r=e.apply(s,i),n||(s=i=null)))};return function(){for(var i=arguments.length,c=Array(i),u=0;u<i;u++)c[u]=arguments[u];s=this,l=+new Date;var d=a&&!n;return n||(n=setTimeout(o,t)),d&&(r=e.apply(s,c),s=c=null),r}}function h(e){if(!e&&"object"!==(void 0===e?"undefined":(0,w.default)(e)))throw new Error("error arguments","shallowClone");var t=e.constructor===Array?[]:{};return(0,b.default)(e).forEach(function(a){e[a]&&"object"===(0,w.default)(e[a])?(t[a]=e[a].constructor===Array?[]:{},t[a]=h(e[a])):t[a]=e[a]}),t}function y(e){return a("7YgM").dependencies[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.pickerOptions=void 0;var _=a("fZjL"),b=n(_),k=a("pFYg"),w=n(k);t.parseTime=i,t.formatTime=s,t.getQueryObject=l,t.getByteLen=r,t.cleanArray=o,t.param=c,t.param2Obj=u,t.html2Text=d,t.objectMerge=p,t.scrollTo=m,t.toggleClass=f,t.getTime=v,t.debounce=g,t.deepClone=h,t.getVersion=y;t.pickerOptions=[{text:"今天",onClick:function(e){var t=new Date,a=new Date((new Date).toDateString());t.setTime(a.getTime()),e.$emit("pick",[a,t])}},{text:"最近一周",onClick:function(e){var t=new Date((new Date).toDateString()),a=new Date;a.setTime(t.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date((new Date).toDateString()),a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date((new Date).toDateString()),a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},"5lmq":function(e,t,a){var n=a("zE0Z");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("53047613",n,!0)},"7YgM":function(e,t){e.exports={name:"agent-payment",version:"1.0.0",description:"agent payment",author:"bootmall",private:!0,scripts:{dev:"node build/dev-server.js",test:"node build/dev-test.js NODE_ENV=test env_config=test","build:prod":"cd ../static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=prod node build/build.js && echo 'git pushlist' && cd ../static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:test":"cd ../test.static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=sit node build/build.js && echo 'git pushlist' && cd ../test-static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:sit-preview":"cross-env NODE_ENV=production env_config=sit npm_config_preview=true  npm_config_report=true node build/build.js",lint:"eslint --ext .js,.vue src"},dependencies:{axios:"0.17.1",clipboard:"1.7.1",codemirror:"5.31.0",dropzone:"5.2.0",echarts:"^4.1.0","element-ui":"2.0.7","file-saver":"1.3.3","font-awesome":"4.7.0","js-cookie":"2.2.0",jsonlint:"1.6.2",jszip:"3.1.4",lodash:"latest",mathjs:"^5.1.1",mockjs:"1.0.1-beta3","normalize.css":"7.0.0",npm:"^6.3.0","npm-zepto":"^1.1.7",nprogress:"0.2.0",screenfull:"3.3.2",showdown:"1.8.2",simplemde:"1.11.2",sortablejs:"1.6.1",tinymce:"^4.8.1",vue:"2.5.9","vue-count-to":"1.0.10","vue-echarts":"^3.1.2","vue-i18n":"7.3.2","vue-multiselect":"2.0.6","vue-qr":"^1.3.8","vue-router":"3.0.1","vue-splitpane":"1.0.0",vuedraggable:"2.15.0",vuex:"3.0.1",xlsx:"^0.11.7",zepto:"^1.2.0"},devDependencies:{autoprefixer:"7.1.6","babel-core":"6.26.0","babel-eslint":"8.0.2","babel-loader":"7.1.2","babel-plugin-transform-runtime":"6.23.0","babel-preset-env":"1.6.1","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"6.24.1","babel-register":"6.26.0",chalk:"2.3.0",commander:"^2.17.1","connect-history-api-fallback":"1.4.0","copy-webpack-plugin":"4.2.0","cross-env":"5.1.1","css-loader":"0.28.7",eslint:"4.11.0","eslint-friendly-formatter":"3.0.0","eslint-import-resolver-webpack":"0.8.3","eslint-loader":"1.9.0","eslint-plugin-html":"3.2.2","eslint-plugin-import":"2.8.0","eventsource-polyfill":"0.9.6",express:"4.16.2","extract-text-webpack-plugin":"3.0.2","file-loader":"0.11.2","friendly-errors-webpack-plugin":"1.6.1","function-bind":"1.1.0","html-webpack-plugin":"2.30.0","http-proxy-middleware":"0.17.4","node-sass":"^4.9.2",opn:"4.0.2","optimize-css-assets-webpack-plugin":"3.2.0",ora:"1.1.0","postcss-loader":"^2.1.6","pushstate-server":"2.1.0",rimraf:"2.6.0","sass-loader":"6.0.6","script-loader":"0.7.2",semver:"5.3.0","style-loader":"0.19.0","svg-sprite-loader":"3.4.1","url-loader":"0.6.2","vue-loader":"13.5.0","vue-style-loader":"3.0.3","vue-template-compiler":"2.5.9",webpack:"3.8.1","webpack-bundle-analyzer":"2.9.0","webpack-dev-middleware":"1.12.0","webpack-hot-middleware":"2.20.0","webpack-merge":"4.1.0"},engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},E1g5:function(e,t,a){"use strict";function n(e){a("5lmq")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("f/Ah"),s=a.n(i),l=a("FEPF"),r=a("VU/8"),o=n,c=r(s.a,l.a,!1,o,"data-v-135cd8b8",null);t.default=c.exports},FEPF:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"收款订单号"},on:{focus:function(t){e.showPasteTxt("orderNo")}},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.orderNo,callback:function(t){e.$set(e.listQuery,"orderNo",t)},expression:"listQuery.orderNo"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"商户订单号"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.merchantOrderNo,callback:function(t){e.$set(e.listQuery,"merchantOrderNo",t)},expression:"listQuery.merchantOrderNo"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"渠道订单号"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.channelOrderNo,callback:function(t){e.$set(e.listQuery,"channelOrderNo",t)},expression:"listQuery.channelOrderNo"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"商户编号"},model:{value:e.listQuery.merchantNo,callback:function(t){e.$set(e.listQuery,"merchantNo",t)},expression:"listQuery.merchantNo"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"商户账号"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.merchantUserName,callback:function(t){e.$set(e.listQuery,"merchantUserName",t)},expression:"listQuery.merchantUserName"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"IP"},on:{focus:function(t){e.showPasteTxt("client_ip")}},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.client_ip,callback:function(t){e.$set(e.listQuery,"client_ip",t)},expression:"listQuery.client_ip"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"设备号"},on:{focus:function(t){e.showPasteTxt("client_id")}},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.client_id,callback:function(t){e.$set(e.listQuery,"client_id",t)},expression:"listQuery.client_id"}}),e._v(" "),a("el-select",{staticClass:"filter-item",attrs:{size:"small",placeholder:"通道号",multiple:""},model:{value:e.listQuery.channelAccount,callback:function(t){e.$set(e.listQuery,"channelAccount",t)},expression:"listQuery.channelAccount"}},e._l(e.channelAccountOptions,function(e,t){return a("el-option",{key:e.id,attrs:{label:e.val,value:e.id}})})),e._v(" "),a("el-select",{staticClass:"filter-item",attrs:{size:"small",placeholder:"支付类型",multiple:""},model:{value:e.listQuery.method,callback:function(t){e.$set(e.listQuery,"method",t)},expression:"listQuery.method"}},e._l(e.methodOptions,function(e,t){return a("el-option",{key:e.id,attrs:{label:e.val,value:e.id}})})),e._v(" "),a("el-select",{staticClass:"filter-item",attrs:{size:"small",placeholder:"订单状态",multiple:""},model:{value:e.listQuery.status,callback:function(t){e.$set(e.listQuery,"status",t)},expression:"listQuery.status"}},e._l(e.statusOptions,function(e,t){return a("el-option",{key:e.id,attrs:{label:e.val,value:e.id}})})),e._v(" "),a("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{align:"right",type:"datetime",placeholder:"开始日期",size:"small","picker-options":e.pickerOptions},model:{value:e.listQuery.dateStart,callback:function(t){e.$set(e.listQuery,"dateStart",t)},expression:"listQuery.dateStart"}}),e._v(" "),a("el-date-picker",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{align:"right",type:"datetime",size:"small",placeholder:"结束日期","picker-options":e.pickerOptions},model:{value:e.listQuery.dateEnd,callback:function(t){e.$set(e.listQuery,"dateEnd",t)},expression:"listQuery.dateEnd"}}),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{size:"small",type:"info",icon:"search"},on:{click:function(t){e.exportResult("csv")}}},[e._v("导出CSV")]),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"danger"},on:{click:function(t){e.setFrozen()}}},[e._v("批量冻结")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{stripe:"",data:e.list,"element-loading-text":"数据加载中，请稍候...",border:"",fit:"","highlight-current-row":"","summary-method":e.getSummaries,"show-summary":""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{align:"center",fixed:"",type:"selection",width:"30"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"left",align:"center",label:"商户编号"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.merchant_id))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"商户账号"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.merchant_account))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"收款订单号",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.order_no))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"商户订单号",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.merchant_order_no))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"渠道订单号",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.channel_order_no))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v("￥"+e._s(t.row.amount))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"到账"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.settlement_type))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"通道",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.channel_account_name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.pay_method_code_str))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"银行"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.bank_code)+"/"+e._s(t.row.bank_name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"订单状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[""!=t.row.bak?a("el-tooltip",{staticClass:"item",attrs:{effect:"light",placement:"top"}},[a("span",{staticClass:"link-type"},[e._v(e._s(t.row.status_str))]),e._v(" "),a("span",{attrs:{slot:"content"},domProps:{innerHTML:e._s(t.row.bak)},slot:"content"})]):e._e(),e._v(" "),""==t.row.bak?a("span",[e._v(e._s(t.row.status_str))]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"180",label:"IP"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.client_ip))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"180",label:"设备号"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.client_id))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"180",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.created_at))])]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",width:"180",align:"center",label:"操作","class-name":"op-column"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.track?a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{slot:"reference",size:"mini",type:"danger"},on:{click:function(a){e.handleTrack(t.row)}},slot:"reference"},[e._v("录入")]):e._e(),e._v(" "),0==t.row.inBlackList?a("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"info",circle:""},on:{click:function(a){e.addToBlackList(t.row)}}},[e._v("拉黑")]):e._e(),e._v(" "),60==t.row.status?a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filtr-item",attrs:{size:"mini",type:"warning"},on:{click:function(a){e.setFrozen(t.row)}}},[e._v("冻结")]):e._e(),e._v(" "),30==t.row.status?a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filtr-item",attrs:{size:"mini",type:"warning"},on:{click:function(a){e.setUnFrozen(t.row)}}},[e._v("解冻")]):e._e()]}}])})],1),e._v(" "),a("el-row",{staticClass:"summary-list"},e._l(e.summery.all_status_list,function(t,n){return a("el-tag",{key:t.status,attrs:{type:"warning"}},[a("span",[e._v(e._s(t.status_str)+":"+e._s(t.amount))])])})),e._v(" "),a("el-dialog",{attrs:{title:"调单录入",visible:e.trackVisible,width:"50%"},on:{"update:visible":function(t){e.trackVisible=t}}},[a("el-form",{attrs:{model:e.trackForm}},[a("el-form-item",{attrs:{label:"调单类型："}},[a("el-radio",{attrs:{label:"1"},model:{value:e.trackForm.type,callback:function(t){e.$set(e.trackForm,"type",t)},expression:"trackForm.type"}},[e._v("投诉")]),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.trackForm.type,callback:function(t){e.$set(e.trackForm,"type",t)},expression:"trackForm.type"}},[e._v("协查")]),e._v(" "),a("el-radio",{attrs:{label:"3"},model:{value:e.trackForm.type,callback:function(t){e.$set(e.trackForm,"type",t)},expression:"trackForm.type"}},[e._v("其他")])],1),e._v(" "),a("el-form-item",{attrs:{label:"上传："}},[a("el-upload",{ref:"track_upload",staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,"show-file-list":!1,multiple:"",limit:3,"on-success":e.handleUpload}},[e._l(e.trackForm.upload_url,function(t){return e.trackForm.upload_url.length>0?a("img",{staticClass:"avatar",attrs:{src:t,width:"200px;"}}):e._e()}),e._v(" "),a("i",{staticClass:"el-icon-plus"})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"备注："}},[a("el-input",{staticStyle:{width:"80%"},attrs:{type:"textarea",rows:3},model:{value:e.trackForm.note,callback:function(t){e.$set(e.trackForm,"note",t)},expression:"trackForm.note"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.trackVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.createTrack}},[e._v("提交")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.PasteTxtTitle,visible:e.PasteTxtVisible,width:"40%"},on:{"update:visible":function(t){e.PasteTxtVisible=t}}},[a("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请粘贴要搜索的内容,多个以英文逗号或换行分割都可以",type:"textarea",rows:3},model:{value:e.PasteTxtVal,callback:function(t){e.PasteTxtVal=t},expression:"PasteTxtVal"}}),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.PasteTxtVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.PasteTxt}},[e._v("提交")])],1)],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.listLoading,expression:"!listLoading"}],staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"","current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1)],1)},i=[],s={render:n,staticRenderFns:i};t.a=s},XZlg:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".waves-ripple{position:absolute;border-radius:100%;background-color:rgba(0,0,0,.15);background-clip:padding-box;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);opacity:1}.waves-ripple.z-active{opacity:0;-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out,-webkit-transform .6s ease-out}",""])},cAgV:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("jdeu"),i=function(e){return e&&e.__esModule?e:{default:e}}(n),s=function(e){e.directive("waves",i.default)};window.Vue&&(window.waves=i.default,Vue.use(s)),i.default.install=s,t.default=i.default},ctMr:function(e,t,a){var n=a("XZlg");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("81d72750",n,!0)},"f/Ah":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a("mvHQ"),s=n(i),l=a("Dd8w"),r=n(l),o=a("cAgV"),c=n(o),u=(a("0xDb"),a("X2Oc")),d=n(u),p=a("3pLw"),m=n(p),f=a("NYxO");new Date;t.default={name:"vue_admin_order_list",directives:{waves:c.default},components:{},data:function(){return{rules:{},list:null,total:null,listLoading:!0,trackOptions:[],uploadUrl:d.default.pageMap.baseDomain+"/upload/upload",listQuery:{page:1,limit:10,importance:void 0,dateStart:null,dateEnd:null,orderNo:null,merchantNo:null,merchantOrderNo:null,status:null,notifyStatus:null,sort:"",export:0,exportType:"",client_ip:"",client_id:"",idList:[],checkInBlackList:1},trackVisible:!1,trackForm:{id:void 0,type:"1",upload:[],note:"",upload_url:[]},summery:{amount:0},notify_url:null,notify_times:null,notify_ret:null,tableKey:0,constFalse:!1,constTrue:!0,statusOptions:[],notifyStatusOptions:[],methodOptions:[],channelAccountOptions:[],multipleSelection:[],PasteTxtVisible:!1,PasteTxtVal:"",PasteTxtField:"",PasteTxtTitle:"请先选择粘贴内容",pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()},shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"一周前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",t)}}]}}},filters:{},created:function(){this.getList(1)},mounted:function(){},updated:function(){},computed:(0,r.default)({},(0,f.mapGetters)(["roles","uid","user"])),methods:{handleSelectionChange:function(e){var t=this;t.multipleSelection=e,t.listQuery.idList=[],t.multipleSelection.forEach(function(e){t.listQuery.idList.push(e.id)})},showPasteTxt:function(e){var t="";switch(e){case"orderNo":t="请粘贴订单号";break;case"client_id":t="请粘贴设备号";break;case"client_ip":t="请粘贴IP"}this.PasteTxtVal=this.listQuery[e],this.PasteTxtTitle=t,this.PasteTxtField=e,this.PasteTxtVisible=!0},PasteTxt:function(){var e=this.PasteTxtVal.replace(/\n/g,",").replace(/\r/g,"");this.listQuery[this.PasteTxtField]=e,this.PasteTxtVal="",this.PasteTxtField="",this.PasteTxtVisible=!1},getList:function(e){var t=this;t.listLoading=!0;for(var a in t.listQuery)"__ALL__"==t.listQuery[a]&&(t.listQuery[a]="");m.default.post("/order/list",t.listQuery).then(function(a){t.listLoading=!1,0!=a.code?t.$message.error({message:a.message}):(1!=e&&(t.list=a.data.data,t.summery=a.data.summery),t.total=a.data.pagination.total,t.statusOptions=a.data.condition.statusOptions,t.notifyStatusOptions=a.data.condition.notifyStatusOptions,t.channelAccountOptions=a.data.condition.channelAccountOptions,t.methodOptions=a.data.condition.methodOptions,t.trackOptions=a.data.trackOptions)},function(e){t.listLoading=!1,t.$message.error({message:e.message})})},showDetail:function(e){var t=this;m.default.post("/order/detail",{id:e.id}).then(function(e){0!=e.code?t.$message.error({message:e.message}):(t.notify_url=e.data.notify_url,t.notify_times=e.data.notify_times,t.notify_ret=e.data.notify_ret)})},addToBlackList:function(e){var t=this;t.$confirm("此此订单的IP及设备号都加入黑名单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a=[];a=e?[e.id]:t.listQuery.idList,t.listLoading=!0,m.default.post("/admin/order/add-blacklist",{idList:a}).then(function(a){t.listLoading=!1,0!=a.code?t.$message.error({message:a.message}):(t.$message.success({message:a.message}),e.status=30,t.getList())},function(e){t.listLoading=!1,t.$message.error({message:e.message})})}).catch(function(){t.$message({type:"warning",message:"已取消操作"})})},exportResult:function(e){var t=this;t.listQuery.export=1,t.listQuery.exportType=e;var a=d.default.pageMap.baseDomain+"/order/list?access-token="+d.default.getToken(),n=JSON.parse((0,s.default)(t.listQuery));n.export_status=(0,s.default)(t.listQuery.status),n.export_channel_account=(0,s.default)(t.listQuery.channelAccount),n.export_method=(0,s.default)(t.listQuery.method),n.export_id_list=(0,s.default)(t.listQuery.idList),d.default.downloadFile(a,n),t.$message.success({message:"文件已导出"}),t.listQuery.export=0,t.listQuery.exportType=""},setFrozen:function(e){var t=this;t.$confirm("此操作将订单设置为冻结状态并冻结余额, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a=[];a=e?[e.id]:t.listQuery.idList,t.listLoading=!0,m.default.post("/admin/order/frozen",{idList:a}).then(function(e){t.listLoading=!1,0!=e.code?t.$message.error({message:e.message}):(t.$message.success({message:e.message}),t.getList())},function(e){t.listLoading=!1,t.$message.error({message:e.message})})}).catch(function(){t.$message({type:"warning",message:"已取消操作"})})},setUnFrozen:function(e){var t=this;t.$confirm("此操作将订单设置为解冻并恢复为成功, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.listLoading=!0,m.default.post("/admin/order/un-frozen",{id:e.id}).then(function(a){t.listLoading=!1,0!=a.code?t.$message.error({message:a.message}):(t.$message.success({message:a.message}),e.status=20,t.getList())},function(e){t.listLoading=!1,t.$message.error({message:e.message})})}).catch(function(){t.$message({type:"warning",message:"已取消操作"})})},getSummaries:function(e){var t=e.columns,a=(e.data,[]);return t.forEach(function(e,t){if(0===t)return void(a[t]="-");a[t]="N/A"}),a[2]=this.summery.amount,a},objectSpanMethod:function(e){var t=(e.row,e.column,e.rowIndex);if(0===e.columnIndex)return t%2==0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},timeFilter:function(e){if(!e[0])return this.listQuery.start=void 0,void(this.listQuery.end=void 0);this.listQuery.start=parseInt(+e[0]/1e3),this.listQuery.end=parseInt((+e[1]+864e5)/1e3)},checkNumber:function(){var e=/^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/;e.test(this.listQuery.minMoney)||(this.listQuery.minMoney=""),e.test(this.listQuery.maxMoney)||(this.listQuery.maxMoney="")},handleTrack:function(e){this.trackVisible=!0,this.trackForm.id=e.id},createTrack:function(){var e=this,t={parentId:e.trackForm.id,parentType:"order",type:e.trackForm.type,upload:e.trackForm.upload,note:e.trackForm.note};m.default.post("/admin/track/add",t).then(function(t){0!=t.code?e.$message.error({message:t.message}):(e.trackVisible=!1,e.trackForm={id:void 0,type:"1",upload:[],note:"",upload_url:[]},e.$refs.track_upload.clearFiles(),e.$message.success({message:"录入成功"}))})},handleUpload:function(e,t,a){this.trackForm.upload.push(e.data.url.filepath),this.trackForm.upload_url.push(e.data.url.host+e.data.url.filepath)},handleDetail:function(){}}}},jdeu:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("woOf"),i=function(e){return e&&e.__esModule?e:{default:e}}(n);a("ctMr"),t.default={bind:function(e,t){e.addEventListener("click",function(a){var n=(0,i.default)({},t.value),s=(0,i.default)({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),l=s.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var r=l.getBoundingClientRect(),o=l.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(r.width,r.height)+"px",l.appendChild(o)),s.type){case"center":o.style.top=r.height/2-o.offsetHeight/2+"px",o.style.left=r.width/2-o.offsetWidth/2+"px";break;default:o.style.top=a.pageY-r.top-o.offsetHeight/2-document.body.scrollTop+"px",o.style.left=a.pageX-r.left-o.offsetWidth/2-document.body.scrollLeft+"px"}return o.style.backgroundColor=s.color,o.className="waves-ripple z-active",!1}},!1)}}},zE0Z:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".el-table td[data-v-135cd8b8],.el-table th[data-v-135cd8b8]{padding:5px 0!important}.el-button--mini[data-v-135cd8b8]{margin-left:5px;float:left;display:inline-block;margin-top:5px}.op-column .el-button[data-v-135cd8b8]{margin:5px}.op-column .cell[data-v-135cd8b8]{padding-left:0;text-align:left}.summary-list[data-v-135cd8b8]{margin-top:10px}.summary-list .el-tag+.el-tag[data-v-135cd8b8]{margin-left:10px}",""])}});