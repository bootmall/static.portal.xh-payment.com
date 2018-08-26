webpackJsonp([16],{"0JY/":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"app-container calendar-list-container"},[e._v(">\n    "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.uploadVisible,expression:"uploadVisible"}]},[a("h4",{staticStyle:{color:"red"},attrs:{align:"center"}},[e._v("批量提款一次最多300条")]),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24,align:"center"}},[a("el-button",{on:{click:function(t){e.downTemplate("txt")}}},[e._v("TXT模版下载")]),e._v(" "),a("el-button",{on:{click:function(t){e.downTemplate("csv")}}},[e._v("CSV模版下载")]),e._v(" "),a("el-button",{on:{click:function(t){e.downTemplate("xls")}}},[e._v("XLS模版下载")]),e._v(" "),a("el-button",{on:{click:function(t){e.downTemplate("xlsx")}}},[e._v("XLSX模版下载")])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24,align:"center"}},[a("el-upload",{ref:"excel_upload",staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,"show-file-list":!1,multiple:"",limit:1,accept:".txt,.xls,.csv,.xlsx","on-success":e.handleUpload,"on-error":e.handleUploadError}},[a("el-input",{model:{value:e.excelUpload,callback:function(t){e.excelUpload=t},expression:"excelUpload"}})],1),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",on:{click:e.handleExcel}},[e._v("下一步")])],1)],1)],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.confirmVisible,expression:"confirmVisible"}],attrs:{align:"center"}},[a("h4",[e._v("确认批量信息")]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"70%","font-size":"12px"},attrs:{data:e.excelData,align:"center","element-loading-text":"数据加载中，请稍候...",border:"",fit:"","highlight-current-row":"",stripe:""}},[a("el-table-column",{attrs:{prop:"bank_name",label:"银行",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"bank_number",label:"卡号",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"real_name",label:"姓名",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"amount",label:"金额",align:"center"}})],1),e._v(" "),a("div",{staticClass:"filter-container"},[a("span",[e._v("资金密码："),a("el-input",{staticStyle:{width:"280px"},attrs:{type:"password"},model:{value:e.financial_password_hash,callback:function(t){e.financial_password_hash=t},expression:"financial_password_hash"}})],1),e._v(" "),a("span",[e._v("安全令牌："),a("el-input",{staticStyle:{width:"280px"},model:{value:e.key_2fa,callback:function(t){e.key_2fa=t},expression:"key_2fa"}})],1),e._v(" "),a("span",[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{"margin-top":"6px"},on:{click:e.handleLast}},[e._v("上一步")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{"margin-top":"6px"},on:{click:e.batchSubmit}},[e._v("确认并提交")])],1)])],1),e._v(" "),a("div",[a("h4",[e._v("支持银行")]),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-button",{attrs:{type:"primary"}},[e._v("上海银行")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("中信银行")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("中国银行")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("交通银行")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("光大银行")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("兴业银行")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("农业银行")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("北京银行")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("中国邮政银行")])],1)],1),e._v(" "),a("el-row",{staticStyle:{"margin-top":"10px"}},[a("el-col",{attrs:{span:24}},[a("el-button",{attrs:{type:"primary"}},[e._v("华夏银行")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("工商银行")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("平安银行")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("广发银行")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("建设银行")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("招商银行")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("民生银行")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("浦发银行")])],1)],1)],1)])},r=[],i={render:n,staticRenderFns:r};t.a=i},"0isd":function(e,t,a){"use strict";function n(e){a("rR7d")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("OW/W"),i=a.n(r),o=a("0JY/"),s=a("VU/8"),l=n,c=s(i.a,o.a,!1,l,"data-v-53520dec",null);t.default=c.exports},"0xDb":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(0===arguments.length)return null;var a=t||"{y}-{m}-{d} {h}:{i}:{s}",n=void 0;"object"===(void 0===e?"undefined":(0,x.default)(e))?n=e:(10===(""+e).length&&(e=1e3*parseInt(e)),n=new Date(e));var r={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()};return a.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var a=r[t];return"a"===t?["一","二","三","四","五","六","日"][a-1]:(e.length>0&&a<10&&(a="0"+a),a||0)})}function i(e,t){e=1e3*+e;var a=new Date(e),n=Date.now(),i=(n-a)/1e3;return i<30?"刚刚":i<3600?Math.ceil(i/60)+"分钟前":i<86400?Math.ceil(i/3600)+"小时前":i<172800?"1天前":t?r(e,t):a.getMonth()+1+"月"+a.getDate()+"日"+a.getHours()+"时"+a.getMinutes()+"分"}function o(e){e=null==e?window.location.href:e;var t=e.substring(e.lastIndexOf("?")+1),a={},n=/([^?&=]+)=([^?&=]*)/g;return t.replace(n,function(e,t,n){var r=decodeURIComponent(t),i=decodeURIComponent(n);return i=String(i),a[r]=i,e}),a}function s(e){for(var t=0,a=0;a<e.length;a++)null!=e[a].match(/[^\x00-\xff]/gi)?t+=1:t+=.5;return Math.floor(t)}function l(e){for(var t=[],a=0;a<e.length;a++)e[a]&&t.push(e[a]);return t}function c(e){return e?l((0,w.default)(e).map(function(t){return void 0===e[t]?"":encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"):""}function u(e){var t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}function d(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText}function p(e,t){return"object"!==(void 0===e?"undefined":(0,x.default)(e))&&(e={}),Array.isArray(t)?t.slice():((0,w.default)(t).forEach(function(a){var n=t[a];"object"===(void 0===n?"undefined":(0,x.default)(n))?e[a]=p(e[a],n):e[a]=n}),e)}function v(e,t,a){if(!(a<=0)){var n=t-e.scrollTop,r=n/a*10;setTimeout(function(){console.log(new Date),e.scrollTop=e.scrollTop+r,e.scrollTop!==t&&v(e,t,a-10)},10)}}function m(e,t){if(e&&t){var a=e.className,n=a.indexOf(t);-1===n?a+=""+t:a=a.substr(0,n)+a.substr(n+t.length),e.className=a}}function f(e){return"start"===e?(new Date).getTime()-7776e6:new Date((new Date).toDateString())}function g(e,t,a){var n=void 0,r=void 0,i=void 0,o=void 0,s=void 0,l=function l(){var c=+new Date-o;c<t&&c>0?n=setTimeout(l,t-c):(n=null,a||(s=e.apply(i,r),n||(i=r=null)))};return function(){for(var r=arguments.length,c=Array(r),u=0;u<r;u++)c[u]=arguments[u];i=this,o=+new Date;var d=a&&!n;return n||(n=setTimeout(l,t)),d&&(s=e.apply(i,c),i=c=null),s}}function b(e){if(!e&&"object"!==(void 0===e?"undefined":(0,x.default)(e)))throw new Error("error arguments","shallowClone");var t=e.constructor===Array?[]:{};return(0,w.default)(e).forEach(function(a){e[a]&&"object"===(0,x.default)(e[a])?(t[a]=e[a].constructor===Array?[]:{},t[a]=b(e[a])):t[a]=e[a]}),t}function h(e){return a("7YgM").dependencies[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.pickerOptions=void 0;var _=a("fZjL"),w=n(_),y=a("pFYg"),x=n(y);t.parseTime=r,t.formatTime=i,t.getQueryObject=o,t.getByteLen=s,t.cleanArray=l,t.param=c,t.param2Obj=u,t.html2Text=d,t.objectMerge=p,t.scrollTo=v,t.toggleClass=m,t.getTime=f,t.debounce=g,t.deepClone=b,t.getVersion=h;t.pickerOptions=[{text:"今天",onClick:function(e){var t=new Date,a=new Date((new Date).toDateString());t.setTime(a.getTime()),e.$emit("pick",[a,t])}},{text:"最近一周",onClick:function(e){var t=new Date((new Date).toDateString()),a=new Date;a.setTime(t.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date((new Date).toDateString()),a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date((new Date).toDateString()),a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},"7YgM":function(e,t){e.exports={name:"agent-payment",version:"1.0.0",description:"agent payment",author:"bootmall",private:!0,scripts:{dev:"node build/dev-server.js",test:"node build/dev-test.js NODE_ENV=test env_config=test","build:prod":"cd ../static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=prod node build/build.js && echo 'git pushlist' && cd ../static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:test":"cd ../test.static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=sit node build/build.js && echo 'git pushlist' && cd ../test-static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:sit-preview":"cross-env NODE_ENV=production env_config=sit npm_config_preview=true  npm_config_report=true node build/build.js",lint:"eslint --ext .js,.vue src"},dependencies:{axios:"0.17.1",clipboard:"1.7.1",codemirror:"5.31.0",dropzone:"5.2.0",echarts:"3.8.5","element-ui":"2.0.7","file-saver":"1.3.3","font-awesome":"4.7.0","js-cookie":"2.2.0",jsonlint:"1.6.2",jszip:"3.1.4",lodash:"latest",mathjs:"^5.1.1",mockjs:"1.0.1-beta3","normalize.css":"7.0.0",npm:"^6.3.0","npm-zepto":"^1.1.7",nprogress:"0.2.0",screenfull:"3.3.2",showdown:"1.8.2",simplemde:"1.11.2",sortablejs:"1.6.1",tinymce:"^4.8.1",vue:"2.5.9","vue-count-to":"1.0.10","vue-i18n":"7.3.2","vue-multiselect":"2.0.6","vue-qr":"^1.3.8","vue-router":"3.0.1","vue-splitpane":"1.0.0",vuedraggable:"2.15.0",vuex:"3.0.1",xlsx:"^0.11.7",zepto:"^1.2.0"},devDependencies:{autoprefixer:"7.1.6","babel-core":"6.26.0","babel-eslint":"8.0.2","babel-loader":"7.1.2","babel-plugin-transform-runtime":"6.23.0","babel-preset-env":"1.6.1","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"6.24.1","babel-register":"6.26.0",chalk:"2.3.0",commander:"^2.17.1","connect-history-api-fallback":"1.4.0","copy-webpack-plugin":"4.2.0","cross-env":"5.1.1","css-loader":"0.28.7",eslint:"4.11.0","eslint-friendly-formatter":"3.0.0","eslint-import-resolver-webpack":"0.8.3","eslint-loader":"1.9.0","eslint-plugin-html":"3.2.2","eslint-plugin-import":"2.8.0","eventsource-polyfill":"0.9.6",express:"4.16.2","extract-text-webpack-plugin":"3.0.2","file-loader":"0.11.2","friendly-errors-webpack-plugin":"1.6.1","function-bind":"1.1.0","html-webpack-plugin":"2.30.0","http-proxy-middleware":"0.17.4","node-sass":"^4.9.2",opn:"4.0.2","optimize-css-assets-webpack-plugin":"3.2.0",ora:"1.1.0","postcss-loader":"^2.1.6","pushstate-server":"2.1.0",rimraf:"2.6.0","sass-loader":"6.0.6","script-loader":"0.7.2",semver:"5.3.0","style-loader":"0.19.0","svg-sprite-loader":"3.4.1","url-loader":"0.6.2","vue-loader":"13.5.0","vue-style-loader":"3.0.3","vue-template-compiler":"2.5.9",webpack:"3.8.1","webpack-bundle-analyzer":"2.9.0","webpack-dev-middleware":"1.12.0","webpack-hot-middleware":"2.20.0","webpack-merge":"4.1.0"},engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},H2WS:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])},"OW/W":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a("cAgV"),i=n(r),o=(a("0xDb"),a("X2Oc")),s=n(o),l=a("3pLw"),c=n(l),u=a("vMJZ");t.default={name:"vue_add_remit_batch",directives:{waves:i.default},data:function(){return{uploadUrl:s.default.pageMap.baseDomain+"/upload/upload",excelUpload:null,listLoading:!1,upload_id:null,uploadVisible:!0,confirmVisible:!1,tableKey:0,excelData:[],financial_password_hash:null,key_2fa:null,isLoading:!1}},created:function(){var e=this;(0,u.checkCanRemit)().then(function(t){0!=t.code&&e.$alert(t.message,"系统提示",{type:"error"})}).catch(function(t){e.$alert(t,"系统提示",{type:"error"})})},methods:{downTemplate:function(e){var t=document.createElement("a");t.href=s.default.pageMap.baseDomain;var a="http://"+t.hostname+"/uploads/docs/remit/remit_remplate."+e+".zip";window.open(a),this.$alert("默认文件已经下载,请按照模板文件添加出款记录!","系统提示",{confirmButtonText:"确定"})},handleUpload:function(e,t,a){this.excelUpload=e.data.url.filepath,this.upload_id=e.data.id},handleUploadError:function(e,t,a){var n=JSON.parse(e.message);this.$message.error({message:n.message})},handleExcel:function(){var e=this;if(null==this.upload_id)return void this.$message.error({message:"没有上传任何文件"});this.listLoading=!0,this.uploadVisible=!1,this.confirmVisible=!0;var t={upload_id:this.upload_id};c.default.post("/remit/batch-remit",t).then(function(t){e.listLoading=!1,0==t.code?e.excelData=t.data:(e.$message.error({message:t.message}),e.$refs.excel_upload.clearFiles(),e.uploadVisible=!0,e.confirmVisible=!1,e.excelUpload=null)})},handleLast:function(){this.uploadVisible=!0,this.confirmVisible=!1},batchSubmit:function(){var e=this;e.isLoading=!0;var t={financial_password_hash:e.financial_password_hash,key_2fa:e.key_2fa,remitData:e.excelData};e.financial_password_hash=null,e.key_2fa=null;var a=0;for(var n in e.excelData)1==e.excelData[n].status&&(a=1);return 1==a?void e.$message.error({message:"提款方案有错，请检查"}):/^.*(?=.{6,16})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/.test(t.financial_password_hash)?/^[0-9]{6}$/.test(t.key_2fa)?void c.default.post("/remit/single-batch-remit",t).then(function(t){e.isLoading=!1,0==t.code?e.$confirm("出款申请成功,请稍候在出款列表查询最新状态.","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$router.push({name:"vue_my_remit"})}):e.$message.error({message:t.message})}):void e.$message.error({message:"安全令牌格式不正确"}):void e.$message.error({message:"资金密码格式不正确"})}}}},XZlg:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".waves-ripple{position:absolute;border-radius:100%;background-color:rgba(0,0,0,.15);background-clip:padding-box;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);opacity:1}.waves-ripple.z-active{opacity:0;-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out,-webkit-transform .6s ease-out}",""])},cAgV:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("jdeu"),r=function(e){return e&&e.__esModule?e:{default:e}}(n),i=function(e){e.directive("waves",r.default)};window.Vue&&(window.waves=r.default,Vue.use(i)),r.default.install=i,t.default=r.default},ctMr:function(e,t,a){var n=a("XZlg");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("81d72750",n,!0)},jdeu:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("woOf"),r=function(e){return e&&e.__esModule?e:{default:e}}(n);a("ctMr"),t.default={bind:function(e,t){e.addEventListener("click",function(a){var n=(0,r.default)({},t.value),i=(0,r.default)({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),o=i.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var s=o.getBoundingClientRect(),l=o.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(s.width,s.height)+"px",o.appendChild(l)),i.type){case"center":l.style.top=s.height/2-l.offsetHeight/2+"px",l.style.left=s.width/2-l.offsetWidth/2+"px";break;default:l.style.top=a.pageY-s.top-l.offsetHeight/2-document.body.scrollTop+"px",l.style.left=a.pageX-s.left-l.offsetWidth/2-document.body.scrollLeft+"px"}return l.style.backgroundColor=i.color,l.className="waves-ripple z-active",!1}},!1)}}},rR7d:function(e,t,a){var n=a("H2WS");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("6b5e5e0a",n,!0)},vMJZ:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return new o.default(function(t,a){l.default.post("/user/check-can-remit",e).then(function(e){0==e.code?t(e):a(e.message)},function(e){a(e)}).catch(function(e){a(e)})})}Object.defineProperty(t,"__esModule",{value:!0});var i=a("//Fk"),o=n(i);t.checkCanRemit=r;var s=a("3pLw"),l=n(s),c=a("X2Oc");n(c)}});