webpackJsonp([33],{"0xDb":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(0===arguments.length)return null;var n=t||"{y}-{m}-{d} {h}:{i}:{s}",a=void 0;"object"===(void 0===e?"undefined":(0,I.default)(e))?a=e:(10===(""+e).length&&(e=1e3*parseInt(e)),a=new Date(e));var s={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()};return n.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var n=s[t];return"a"===t?["一","二","三","四","五","六","日"][n-1]:(e.length>0&&n<10&&(n="0"+n),n||0)})}function r(e,t){e=1e3*+e;var n=new Date(e),a=Date.now(),r=(a-n)/1e3;return r<30?"刚刚":r<3600?Math.ceil(r/60)+"分钟前":r<86400?Math.ceil(r/3600)+"小时前":r<172800?"1天前":t?s(e,t):n.getMonth()+1+"月"+n.getDate()+"日"+n.getHours()+"时"+n.getMinutes()+"分"}function i(e){e=null==e?window.location.href:e;var t=e.substring(e.lastIndexOf("?")+1),n={},a=/([^?&=]+)=([^?&=]*)/g;return t.replace(a,function(e,t,a){var s=decodeURIComponent(t),r=decodeURIComponent(a);return r=String(r),n[s]=r,e}),n}function o(e){for(var t=0,n=0;n<e.length;n++)null!=e[n].match(/[^\x00-\xff]/gi)?t+=1:t+=.5;return Math.floor(t)}function l(e){for(var t=[],n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}function c(e){return e?l((0,w.default)(e).map(function(t){return void 0===e[t]?"":encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"):""}function u(e){var t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}function d(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText}function p(e,t){return"object"!==(void 0===e?"undefined":(0,I.default)(e))&&(e={}),Array.isArray(t)?t.slice():((0,w.default)(t).forEach(function(n){var a=t[n];"object"===(void 0===a?"undefined":(0,I.default)(a))?e[n]=p(e[n],a):e[n]=a}),e)}function m(e,t,n){if(!(n<=0)){var a=t-e.scrollTop,s=a/n*10;setTimeout(function(){console.log(new Date),e.scrollTop=e.scrollTop+s,e.scrollTop!==t&&m(e,t,n-10)},10)}}function f(e,t){if(e&&t){var n=e.className,a=n.indexOf(t);-1===a?n+=""+t:n=n.substr(0,a)+n.substr(a+t.length),e.className=n}}function v(e){return"start"===e?(new Date).getTime()-7776e6:new Date((new Date).toDateString())}function g(e,t,n){var a=void 0,s=void 0,r=void 0,i=void 0,o=void 0,l=function l(){var c=+new Date-i;c<t&&c>0?a=setTimeout(l,t-c):(a=null,n||(o=e.apply(r,s),a||(r=s=null)))};return function(){for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];r=this,i=+new Date;var d=n&&!a;return a||(a=setTimeout(l,t)),d&&(o=e.apply(r,c),r=c=null),o}}function _(e){if(!e&&"object"!==(void 0===e?"undefined":(0,I.default)(e)))throw new Error("error arguments","shallowClone");var t=e.constructor===Array?[]:{};return(0,w.default)(e).forEach(function(n){e[n]&&"object"===(0,I.default)(e[n])?(t[n]=e[n].constructor===Array?[]:{},t[n]=_(e[n])):t[n]=e[n]}),t}function h(e){return n("7YgM").dependencies[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.pickerOptions=void 0;var b=n("fZjL"),w=a(b),y=n("pFYg"),I=a(y);t.parseTime=s,t.formatTime=r,t.getQueryObject=i,t.getByteLen=o,t.cleanArray=l,t.param=c,t.param2Obj=u,t.html2Text=d,t.objectMerge=p,t.scrollTo=m,t.toggleClass=f,t.getTime=v,t.debounce=g,t.deepClone=_,t.getVersion=h;t.pickerOptions=[{text:"今天",onClick:function(e){var t=new Date,n=new Date((new Date).toDateString());t.setTime(n.getTime()),e.$emit("pick",[n,t])}},{text:"最近一周",onClick:function(e){var t=new Date((new Date).toDateString()),n=new Date;n.setTime(t.getTime()-6048e5),e.$emit("pick",[n,t])}},{text:"最近一个月",onClick:function(e){var t=new Date((new Date).toDateString()),n=new Date;n.setTime(n.getTime()-2592e6),e.$emit("pick",[n,t])}},{text:"最近三个月",onClick:function(e){var t=new Date((new Date).toDateString()),n=new Date;n.setTime(n.getTime()-7776e6),e.$emit("pick",[n,t])}}]},"7YgM":function(e,t){e.exports={name:"agent-payment",version:"1.0.0",description:"agent payment",author:"bootmall",private:!0,scripts:{dev:"node build/dev-server.js",test:"node build/dev-test.js NODE_ENV=test env_config=test","build:prod":"cd ../static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=prod node build/build.js && echo 'git pushlist' && cd ../static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:test":"cd ../test.static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=sit node build/build.js && echo 'git pushlist' && cd ../test-static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:sit-preview":"cross-env NODE_ENV=production env_config=sit npm_config_preview=true  npm_config_report=true node build/build.js",lint:"eslint --ext .js,.vue src"},dependencies:{axios:"0.17.1",clipboard:"1.7.1",codemirror:"5.31.0",dropzone:"5.2.0",echarts:"^4.1.0","element-ui":"2.0.7","file-saver":"1.3.3","font-awesome":"4.7.0","js-cookie":"2.2.0",jsonlint:"1.6.2",jszip:"3.1.4",lodash:"latest",mathjs:"^5.1.1",mockjs:"1.0.1-beta3","normalize.css":"7.0.0",npm:"^6.3.0","npm-zepto":"^1.1.7",nprogress:"0.2.0",screenfull:"3.3.2",showdown:"1.8.2",simplemde:"1.11.2",sortablejs:"1.6.1",tinymce:"^4.8.1",vue:"2.5.9","vue-count-to":"1.0.10","vue-echarts":"^3.1.2","vue-i18n":"7.3.2","vue-multiselect":"2.0.6","vue-qr":"^1.3.8","vue-router":"3.0.1","vue-splitpane":"1.0.0",vuedraggable:"2.15.0",vuex:"3.0.1",xlsx:"^0.11.7",zepto:"^1.2.0"},devDependencies:{autoprefixer:"7.1.6","babel-core":"6.26.0","babel-eslint":"8.0.2","babel-loader":"7.1.2","babel-plugin-transform-runtime":"6.23.0","babel-preset-env":"1.6.1","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"6.24.1","babel-register":"6.26.0",chalk:"2.3.0",commander:"^2.17.1","connect-history-api-fallback":"1.4.0","copy-webpack-plugin":"4.2.0","cross-env":"5.1.1","css-loader":"0.28.7",eslint:"4.11.0","eslint-friendly-formatter":"3.0.0","eslint-import-resolver-webpack":"0.8.3","eslint-loader":"1.9.0","eslint-plugin-html":"3.2.2","eslint-plugin-import":"2.8.0","eventsource-polyfill":"0.9.6",express:"4.16.2","extract-text-webpack-plugin":"3.0.2","file-loader":"0.11.2","friendly-errors-webpack-plugin":"1.6.1","function-bind":"1.1.0","html-webpack-plugin":"2.30.0","http-proxy-middleware":"0.17.4","node-sass":"^4.9.2",opn:"4.0.2","optimize-css-assets-webpack-plugin":"3.2.0",ora:"1.1.0","postcss-loader":"^2.1.6","pushstate-server":"2.1.0",rimraf:"2.6.0","sass-loader":"6.0.6","script-loader":"0.7.2",semver:"5.3.0","style-loader":"0.19.0","svg-sprite-loader":"3.4.1","url-loader":"0.6.2","vue-loader":"13.5.0","vue-style-loader":"3.0.3","vue-template-compiler":"2.5.9",webpack:"3.8.1","webpack-bundle-analyzer":"2.9.0","webpack-dev-middleware":"1.12.0","webpack-hot-middleware":"2.20.0","webpack-merge":"4.1.0"},engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},"Ij+1":function(e,t,n){"use strict";function a(e){n("Rtld")}Object.defineProperty(t,"__esModule",{value:!0});var s=n("eZFX"),r=n.n(s),i=n("q937"),o=n("VU/8"),l=a,c=o(r.a,i.a,!1,l,"data-v-52ac6148",null);t.default=c.exports},Rtld:function(e,t,n){var a=n("S8RV");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("7b990138",a,!0)},S8RV:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".rate-list[data-v-52ac6148]{text-align:center}.rate-list .el-alert__title[data-v-52ac6148]{font-size:18px!important}.rate-list .el-button--medium[data-v-52ac6148]{padding:5px;color:#ccc;margin-bottom:10px;margin-left:20px;width:16%}.rate-list .rate-list-name[data-v-52ac6148]{color:#fff}",""])},XZlg:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".waves-ripple{position:absolute;border-radius:100%;background-color:rgba(0,0,0,.15);background-clip:padding-box;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);opacity:1}.waves-ripple.z-active{opacity:0;-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out,-webkit-transform .6s ease-out}",""])},cAgV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("jdeu"),s=function(e){return e&&e.__esModule?e:{default:e}}(a),r=function(e){e.directive("waves",s.default)};window.Vue&&(window.waves=s.default,Vue.use(r)),s.default.install=r,t.default=s.default},ctMr:function(e,t,n){var a=n("XZlg");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("81d72750",a,!0)},eZFX:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n("cAgV"),r=a(s),i=(n("0xDb"),n("3pLw")),o=a(i);t.default={name:"vue_merchant_detail",directives:{waves:r.default},props:{merchantId:{type:Number,default:1}},filters:{numberFormat:function(e){return e||(e=0),e=Number(e).toFixed(6)}},watch:{merchantId:function(e,t){null!=e&&(this.detailQuery.merchantId=e,this.getInitData())}},data:function(){return{userInfo:{},methods:{},parentMethods:{},listLoading:!1,accountOpenPaid:null,accountOpenAmount:null,accountOpenInfo:null,merchantDetailVisible:!1,detailQuery:{merchantId:null,merchant_username:null},tabs_name:"merchantInfo"}},methods:{getInitData:function(){var e=this;e.listLoading=!0,o.default.post("/admin/user/detail",e.detailQuery).then(function(t){e.listLoading=!1,0!=t.code?e.$message.error({message:t.message}):(e.merchantDetailVisible=!0,e.userInfo=t.data.userInfo,e.methods=t.data.methods,e.parentMethods=t.data.parentMethods,e.accountOpenPaid=t.data.accountOpenPaid,e.accountOpenAmount=t.data.accountOpenAmount,e.accountOpenInfo=t.data.accountOpenInfo)})},handleFilter:function(){this.getInitData()},close:function(){this.merchantDetailVisible=!1,this.detailQuery={merchantId:null,merchant_username:null},this.$emit("initMerchantIdEvent")},handleResetLoginPass:function(){var e=this,t=this;t.$confirm("此操作将重置用户密码, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var n={merchantId:e.userInfo.id,type:5};o.default.post("/admin/user/clear-unbind-update",n).then(function(e){0==e.code?t.$message.success({message:"登录密码重置成功"}):(t.$message.error({message:e.message}),t.getInitData())})}).catch(function(){t.$message({type:"warning",message:"已取消操作"})})},handleClearPass:function(){var e=this;if(this.userInfo.financial_password_hash_len<=0)return void this.$message.error({message:"该商户还没有设置资金密码"});var t=this;t.$confirm("此操作将清除资金密码, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var n={merchantId:e.userInfo.id,type:1};o.default.post("/admin/user/clear-unbind-update",n).then(function(e){0==e.code?t.$message.success({message:"资金密码已清除"}):(t.$message.error({message:e.message}),t.getInitData())})}).catch(function(){t.$message({type:"warning",message:"已取消操作"})})},handleUnbind:function(){if(this.userInfo.key_2fa_len<=0)return void this.$message.error({message:"该商户还没有绑定安全令牌"});var e=this;e.$confirm("此操作将清解绑安全令牌, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t={merchantId:e.userInfo.id,type:2};o.default.post("/admin/user/clear-unbind-update",t).then(function(t){0==t.code?e.$message.success({message:"安全令牌已解绑"}):(e.$message.error({message:t.message}),e.getInitData())})}).catch(function(){e.$message({type:"warning",message:"已取消操作"})})}}}},jdeu:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("woOf"),s=function(e){return e&&e.__esModule?e:{default:e}}(a);n("ctMr"),t.default={bind:function(e,t){e.addEventListener("click",function(n){var a=(0,s.default)({},t.value),r=(0,s.default)({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),i=r.ele;if(i){i.style.position="relative",i.style.overflow="hidden";var o=i.getBoundingClientRect(),l=i.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(o.width,o.height)+"px",i.appendChild(l)),r.type){case"center":l.style.top=o.height/2-l.offsetHeight/2+"px",l.style.left=o.width/2-l.offsetWidth/2+"px";break;default:l.style.top=n.pageY-o.top-l.offsetHeight/2-document.body.scrollTop+"px",l.style.left=n.pageX-o.left-l.offsetWidth/2-document.body.scrollLeft+"px"}return l.style.backgroundColor=r.color,l.className="waves-ripple z-active",!1}},!1)}}},q937:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:"商户详情",visible:e.merchantDetailVisible,width:"60%"},on:{"update:visible":function(t){e.merchantDetailVisible=t},close:e.close}},[n("div",{staticClass:"app-container calendar-list-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"商户编号"},model:{value:e.detailQuery.merchantId,callback:function(t){e.$set(e.detailQuery,"merchantId",t)},expression:"detailQuery.merchantId"}}),e._v(" "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"商户账户"},model:{value:e.detailQuery.merchant_username,callback:function(t){e.$set(e.detailQuery,"merchant_username",t)},expression:"detailQuery.merchant_username"}}),e._v(" "),n("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")])],1),e._v(" "),n("el-tabs",{attrs:{type:"card"},model:{value:e.tabs_name,callback:function(t){e.tabs_name=t},expression:"tabs_name"}},[n("el-tab-pane",{attrs:{label:"基本信息",name:"merchantInfo"}},[e.userInfo.agent?n("div",[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:24}},[n("span",[e._v("商户层级：")]),n("span",[e._v(e._s(e.userInfo.agent))])])],1)],1):e._e(),e._v(" "),n("div",{staticClass:"user-attr"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:7}},[n("div",{staticClass:"grid-content"},[n("span",[e._v("商户号：")]),n("span",[e._v(e._s(e.userInfo.id))])])]),e._v(" "),n("el-col",{attrs:{span:7}},[n("div",{staticClass:"grid-content"},[n("span",[e._v("商户名：")]),n("span",[e._v(e._s(e.userInfo.username))])])]),e._v(" "),n("el-col",{attrs:{span:10}},[n("div",{staticClass:"grid-content"},[n("span",[e._v("商户类型：")]),n("span",[e._v(e._s(e.userInfo.group_name))])])])],1),e._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:7}},[n("div",{staticClass:"grid-content"},[n("span",[e._v("状态：")]),n("span",[e._v(e._s(e.userInfo.status_name))])])]),e._v(" "),n("el-col",{attrs:{span:7}},[n("div",{staticClass:"grid-content"},[n("span",[e._v("创建时间：")]),n("span",[e._v(e._s(e.userInfo.created_at))])])]),e._v(" "),n("el-col",{attrs:{span:10}},[n("div",{staticClass:"grid-content"},[n("span",[e._v("转账手续费(-1使用系统设置,0免费)：")]),n("span",[e._v(e._s(e._f("numberFormat")(e.userInfo.account_transfer_fee)))])])])],1),e._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:7}},[n("div",{staticClass:"grid-content"},[n("span",[e._v("支持API下发：")]),n("span",[e._v(e._s(e.userInfo.allow_api_remit_str))])])]),e._v(" "),n("el-col",{attrs:{span:7}},[n("div",{staticClass:"grid-content"},[n("span",[e._v("支持后台下发：")]),n("span",[e._v(e._s(e.userInfo.allow_manual_remit_str))])])]),e._v(" "),n("el-col",{attrs:{span:10}},[n("div",{staticClass:"grid-content"},[n("span",[e._v("出款费率(元/笔)：")]),n("span",[e._v(e._s(e._f("numberFormat")(e.userInfo.remit_fee)))])])])],1),e._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:7}},[n("div",{staticClass:"grid-content"},[n("span",[e._v("总资产：")]),n("span",[e._v(e._s(e._f("numberFormat")(e.userInfo.asset)))])])]),e._v(" "),n("el-col",{attrs:{span:7}},[n("div",{staticClass:"grid-content"},[n("span",[e._v("冻结资产：")]),n("span",[e._v(e._s(e._f("numberFormat")(e.userInfo.frozen_balance)))])])]),e._v(" "),n("el-col",{attrs:{span:10}},[n("div",{staticClass:"grid-content"},[n("span",[e._v("可用余额：")]),n("span",[e._v(e._s(e._f("numberFormat")(e.userInfo.balance)))])])])],1),e._v(" "),e.accountOpenAmount>0?n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:7}},[n("div",{staticClass:"grid-content"},[n("span",[e._v("开户费：")]),n("span",[e._v(e._s(e.accountOpenAmount))])])]),e._v(" "),n("el-col",{attrs:{span:7}},[n("div",{staticClass:"grid-content"},[n("span",[e._v("开户费订单：")]),n("span",[e._v(e._s(e.accountOpenInfo.order_no))])])]),e._v(" "),n("el-col",{attrs:{span:10}},[n("div",{staticClass:"grid-content",class:{error:0==e.accountOpenInfo.status}},[n("span",[e._v("开户费状态：")]),n("span",[e._v(e._s(e.accountOpenInfo.status_str))])])])],1):e._e(),e._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:7}},[n("div",{staticClass:"grid-content"},[n("span",[e._v("资金密码设置：")]),n("span",[e._v(e._s(e.userInfo.is_financial))])])]),e._v(" "),n("el-col",{attrs:{span:7}},[n("div",{staticClass:"grid-content"},[n("span",[e._v("安全令牌绑定：")]),n("span",[e._v(e._s(e.userInfo.is_key_2fa))])])])],1)],1)]),e._v(" "),n("el-tab-pane",{attrs:{label:"收款费率",name:"methodsInfo"}},[n("div",[n("span",[n("h4",[e._v("上级支付类型--费率")])]),e._v(" "),n("div",{staticClass:"rate-list"},e._l(e.parentMethods,function(t,a){return n("el-button",{key:a,staticClass:"rate-button",attrs:{type:"停用"==e.methods.status_name[a]?"warning":"success",align:"center"}},[n("span",{staticClass:"rate-list-name"},[e._v(e._s(e.methods.name[a]))]),e._v(":"+e._s(e._f("numberFormat")(t))+"\n                        ")])}))]),e._v(" "),n("span",[n("h4",[e._v("支付类型--费率")])]),e._v(" "),n("div",{staticClass:"rate-list"},e._l(e.methods.rate,function(t,a){return n("el-button",{key:a,staticClass:"rate-button",attrs:{type:"停用"==e.methods.status_name[a]?"warning":"success",align:"center"}},[n("span",{staticClass:"rate-list-name"},[e._v(e._s(e.methods.name[a]))]),e._v(":"+e._s(e._f("numberFormat")(t))+"\n                    ")])}))])],1),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.handleResetLoginPass}},[e._v("重置登录密码")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.handleClearPass}},[e._v("清除资金密码")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.handleUnbind}},[e._v("解绑安全令牌")])],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.close}},[e._v("关 闭")])],1)])},s=[],r={render:a,staticRenderFns:s};t.a=r}});