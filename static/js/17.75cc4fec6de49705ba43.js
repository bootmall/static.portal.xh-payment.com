webpackJsonp([17],{"0xDb":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(0===arguments.length)return null;var n=t||"{y}-{m}-{d} {h}:{i}:{s}",a=void 0;"object"===(void 0===e?"undefined":(0,y.default)(e))?a=e:(10===(""+e).length&&(e=1e3*parseInt(e)),a=new Date(e));var r={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()};return n.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var n=r[t];return"a"===t?["一","二","三","四","五","六","日"][n-1]:(e.length>0&&n<10&&(n="0"+n),n||0)})}function i(e,t){e=1e3*+e;var n=new Date(e),a=Date.now(),i=(a-n)/1e3;return i<30?"刚刚":i<3600?Math.ceil(i/60)+"分钟前":i<86400?Math.ceil(i/3600)+"小时前":i<172800?"1天前":t?r(e,t):n.getMonth()+1+"月"+n.getDate()+"日"+n.getHours()+"时"+n.getMinutes()+"分"}function s(e){e=null==e?window.location.href:e;var t=e.substring(e.lastIndexOf("?")+1),n={},a=/([^?&=]+)=([^?&=]*)/g;return t.replace(a,function(e,t,a){var r=decodeURIComponent(t),i=decodeURIComponent(a);return i=String(i),n[r]=i,e}),n}function o(e){for(var t=0,n=0;n<e.length;n++)null!=e[n].match(/[^\x00-\xff]/gi)?t+=1:t+=.5;return Math.floor(t)}function l(e){for(var t=[],n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}function c(e){return e?l((0,w.default)(e).map(function(t){return void 0===e[t]?"":encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&"):""}function u(e){var t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}function m(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText}function d(e,t){return"object"!==(void 0===e?"undefined":(0,y.default)(e))&&(e={}),Array.isArray(t)?t.slice():((0,w.default)(t).forEach(function(n){var a=t[n];"object"===(void 0===a?"undefined":(0,y.default)(a))?e[n]=d(e[n],a):e[n]=a}),e)}function p(e,t,n){if(!(n<=0)){var a=t-e.scrollTop,r=a/n*10;setTimeout(function(){console.log(new Date),e.scrollTop=e.scrollTop+r,e.scrollTop!==t&&p(e,t,n-10)},10)}}function f(e,t){if(e&&t){var n=e.className,a=n.indexOf(t);-1===a?n+=""+t:n=n.substr(0,a)+n.substr(a+t.length),e.className=n}}function v(e){return"start"===e?(new Date).getTime()-7776e6:new Date((new Date).toDateString())}function b(e,t,n){var a=void 0,r=void 0,i=void 0,s=void 0,o=void 0,l=function l(){var c=+new Date-s;c<t&&c>0?a=setTimeout(l,t-c):(a=null,n||(o=e.apply(i,r),a||(i=r=null)))};return function(){for(var r=arguments.length,c=Array(r),u=0;u<r;u++)c[u]=arguments[u];i=this,s=+new Date;var m=n&&!a;return a||(a=setTimeout(l,t)),m&&(o=e.apply(i,c),i=c=null),o}}function g(e){if(!e&&"object"!==(void 0===e?"undefined":(0,y.default)(e)))throw new Error("error arguments","shallowClone");var t=e.constructor===Array?[]:{};return(0,w.default)(e).forEach(function(n){e[n]&&"object"===(0,y.default)(e[n])?(t[n]=e[n].constructor===Array?[]:{},t[n]=g(e[n])):t[n]=e[n]}),t}function h(e){return n("7YgM").dependencies[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.pickerOptions=void 0;var _=n("fZjL"),w=a(_),k=n("pFYg"),y=a(k);t.parseTime=r,t.formatTime=i,t.getQueryObject=s,t.getByteLen=o,t.cleanArray=l,t.param=c,t.param2Obj=u,t.html2Text=m,t.objectMerge=d,t.scrollTo=p,t.toggleClass=f,t.getTime=v,t.debounce=b,t.deepClone=g,t.getVersion=h;t.pickerOptions=[{text:"今天",onClick:function(e){var t=new Date,n=new Date((new Date).toDateString());t.setTime(n.getTime()),e.$emit("pick",[n,t])}},{text:"最近一周",onClick:function(e){var t=new Date((new Date).toDateString()),n=new Date;n.setTime(t.getTime()-6048e5),e.$emit("pick",[n,t])}},{text:"最近一个月",onClick:function(e){var t=new Date((new Date).toDateString()),n=new Date;n.setTime(n.getTime()-2592e6),e.$emit("pick",[n,t])}},{text:"最近三个月",onClick:function(e){var t=new Date((new Date).toDateString()),n=new Date;n.setTime(n.getTime()-7776e6),e.$emit("pick",[n,t])}}]},"1HEL":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"app-container calendar-list-container"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.formVisible,expression:"formVisible"}]},[n("h4",{staticStyle:{color:"red"},attrs:{align:"center"}},[e._v("逐笔提款一次最多300条")]),e._v(" "),e.canRemit?e._e():n("el-alert",{staticStyle:{"margin-bottom":"10px"},attrs:{title:e.remitNoticeStr,type:"error"}}),e._v(" "),e._l(e.remitForm,function(t,a){return n("div",{key:a},[e._v("\n      银行：\n      "),n("el-select",{attrs:{filterable:"",clearable:"",placeholder:"请选择"},model:{value:t.bank_code,callback:function(n){e.$set(t,"bank_code",n)},expression:"item.bank_code"}},e._l(e.bankOptions,function(e,t){return n("el-option",{key:t,attrs:{label:e,value:t}})})),e._v(" "),e._v("\n      卡号：\n      "),n("el-input",{staticStyle:{width:"180px","margin-bottom":"10px"},model:{value:t.bank_number,callback:function(n){e.$set(t,"bank_number",n)},expression:"item.bank_number"}}),e._v("\n      姓名：\n      "),n("el-input",{staticStyle:{width:"180px","margin-bottom":"10px"},model:{value:t.real_name,callback:function(n){e.$set(t,"real_name",n)},expression:"item.real_name"}}),e._v("\n      金额：\n      "),n("el-input",{staticStyle:{width:"180px","margin-bottom":"10px"},model:{value:t.amount,callback:function(n){e.$set(t,"amount",n)},expression:"item.amount"}}),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{disabled:!e.canRemit},on:{click:e.handleDel}},[e._v("删除")])],1)}),e._v(" "),n("div",{attrs:{align:"center"}},[n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{disabled:!e.canRemit},on:{click:e.handleNext}},[e._v("下一步")]),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{disabled:!e.canRemit},on:{click:e.handleAppend}},[e._v("增加")])],1)],2),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.confirmVisible,expression:"confirmVisible"}],attrs:{align:"center"}},[n("h4",[e._v("确认提款信息")]),e._v(" "),n("el-table",{staticStyle:{width:"70%","font-size":"12px"},attrs:{data:e.remitForm,align:"center",border:"",fit:"","highlight-current-row":"",stripe:""}},[n("el-table-column",{attrs:{prop:"bank_name",label:"银行",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"bank_number",label:"卡号",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"real_name",label:"姓名",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"amount",label:"金额",align:"center"}})],1),e._v(" "),n("div",{staticClass:"filter-container"},[n("span",[e._v("资金密码："),n("el-input",{staticStyle:{width:"280px"},attrs:{type:"password"},model:{value:e.financial_password_hash,callback:function(t){e.financial_password_hash=t},expression:"financial_password_hash"}})],1),e._v(" "),n("span",[e._v("安全令牌："),n("el-input",{staticStyle:{width:"280px"},model:{value:e.key_2fa,callback:function(t){e.key_2fa=t},expression:"key_2fa"}})],1),e._v(" "),n("span",[n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{"margin-top":"6px"},attrs:{disabled:!e.canRemit},on:{click:e.handleLast}},[e._v("上一步")]),e._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{"margin-top":"6px"},attrs:{disabled:!e.canRemit},on:{click:e.batchSubmit}},[e._v("确认并提交")])],1)])],1)])},r=[],i={render:a,staticRenderFns:r};t.a=i},"7YgM":function(e,t){e.exports={name:"agent-payment",version:"1.0.0",description:"agent payment",author:"bootmall",private:!0,scripts:{dev:"node build/dev-server.js",test:"node build/dev-test.js NODE_ENV=test env_config=test","build:prod":"cd ../static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=prod node build/build.js && echo 'git pushlist' && cd ../static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:test":"cd ../test.static.portal.xh-payment.com/ && git pull origin master && cd - && cross-env NODE_ENV=production env_config=sit node build/build.js && echo 'git pushlist' && cd ../test-static.portal.xh-payment.com/ && git add . && git commit -m 'publish' && git push -u origin master","build:sit-preview":"cross-env NODE_ENV=production env_config=sit npm_config_preview=true  npm_config_report=true node build/build.js",lint:"eslint --ext .js,.vue src"},dependencies:{axios:"0.17.1",clipboard:"1.7.1",codemirror:"5.31.0",dropzone:"5.2.0",echarts:"^4.1.0","element-ui":"2.0.7","file-saver":"1.3.3","font-awesome":"4.7.0","js-cookie":"2.2.0",jsonlint:"1.6.2",jszip:"3.1.4",lodash:"latest",mathjs:"^5.1.1",mockjs:"1.0.1-beta3","normalize.css":"7.0.0",npm:"^6.3.0","npm-zepto":"^1.1.7",nprogress:"0.2.0",screenfull:"3.3.2",showdown:"1.8.2",simplemde:"1.11.2",sortablejs:"1.6.1",tinymce:"^4.8.1",vue:"2.5.9","vue-count-to":"1.0.10","vue-echarts":"^3.1.2","vue-i18n":"7.3.2","vue-multiselect":"2.0.6","vue-qr":"^1.3.8","vue-router":"3.0.1","vue-splitpane":"1.0.0",vuedraggable:"2.15.0",vuex:"3.0.1",xlsx:"^0.11.7",zepto:"^1.2.0"},devDependencies:{autoprefixer:"7.1.6","babel-core":"6.26.0","babel-eslint":"8.0.2","babel-loader":"7.1.2","babel-plugin-transform-runtime":"6.23.0","babel-preset-env":"1.6.1","babel-preset-es2015":"^6.24.1","babel-preset-stage-2":"6.24.1","babel-register":"6.26.0",chalk:"2.3.0",commander:"^2.17.1","connect-history-api-fallback":"1.4.0","copy-webpack-plugin":"4.2.0","cross-env":"5.1.1","css-loader":"0.28.7",eslint:"4.11.0","eslint-friendly-formatter":"3.0.0","eslint-import-resolver-webpack":"0.8.3","eslint-loader":"1.9.0","eslint-plugin-html":"3.2.2","eslint-plugin-import":"2.8.0","eventsource-polyfill":"0.9.6",express:"4.16.2","extract-text-webpack-plugin":"3.0.2","file-loader":"0.11.2","friendly-errors-webpack-plugin":"1.6.1","function-bind":"1.1.0","html-webpack-plugin":"2.30.0","http-proxy-middleware":"0.17.4","node-sass":"^4.9.2",opn:"4.0.2","optimize-css-assets-webpack-plugin":"3.2.0",ora:"1.1.0","postcss-loader":"^2.1.6","pushstate-server":"2.1.0",rimraf:"2.6.0","sass-loader":"6.0.6","script-loader":"0.7.2",semver:"5.3.0","style-loader":"0.19.0","svg-sprite-loader":"3.4.1","url-loader":"0.6.2","vue-loader":"13.5.0","vue-style-loader":"3.0.3","vue-template-compiler":"2.5.9",webpack:"3.8.1","webpack-bundle-analyzer":"2.9.0","webpack-dev-middleware":"1.12.0","webpack-hot-middleware":"2.20.0","webpack-merge":"4.1.0"},engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},SLvJ:function(e,t,n){var a=n("Wtrc");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("c4bbc2a6",a,!0)},Wtrc:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,"",""])},XZlg:function(e,t,n){t=e.exports=n("FZ+f")(!1),t.push([e.i,".waves-ripple{position:absolute;border-radius:100%;background-color:rgba(0,0,0,.15);background-clip:padding-box;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);opacity:1}.waves-ripple.z-active{opacity:0;-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,-webkit-transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out;transition:opacity 1.2s ease-out,transform .6s ease-out,-webkit-transform .6s ease-out}",""])},Zmbg:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("cAgV"),i=a(r),s=(n("0xDb"),n("X2Oc")),o=(a(s),n("3pLw")),l=a(o),c=n("vMJZ"),u=[{bank_code:null,bank_name:null,bank_number:null,real_name:null,amount:null,status:0}];t.default={name:"vue_add_remit_single",directives:{waves:i.default},data:function(){return{remitForm:u,formVisible:!0,confirmVisible:!1,bankOptions:{},financial_password_hash:null,key_2fa:null,balance:null,remit_quota_pertime:null,channel_account_remit_quota_pertime:null,canRemit:!0,remitNoticeStr:"",isLoading:!1}},created:function(){var e=this;(0,c.checkCanRemit)().then(function(t){console.log("ssssss"),0!=t.code&&(e.$alert(t.message+",点击右上角用户名即可设置资金密码及安全令牌","系统提示",{type:"error"}),e.canRemit=!1,e.remitNoticeStr=t.message+",点击右上角用户名即可设置资金密码及安全令牌")}).catch(function(t){e.$alert(t+",点击右上角用户名即可设置资金密码及安全令牌","系统提示",{type:"error"}),e.canRemit=!1,e.remitNoticeStr=t+",点击右上角用户名即可设置资金密码及安全令牌"}),this.getBankList()},methods:{getBankList:function(){var e=this;l.default.post("/remit/get-bank-list").then(function(t){0==t.code?(e.bankOptions=t.data.bankOptions,e.balance=t.data.balance,e.remit_quota_pertime=t.data.remit_quota_pertime,e.channel_account_remit_quota_pertime=t.data.channel_account_remit_quota_pertime):e.$message.error({message:t.message})})},luhmCheck:function(e){for(var t=e.substr(e.length-1,1),n=e.substr(0,e.length-1),a=new Array,r=n.length-1;r>-1;r--)a.push(n.substr(r,1));for(var i=new Array,s=new Array,o=new Array,l=0;l<a.length;l++)(l+1)%2==1?2*parseInt(a[l])<9?i.push(2*parseInt(a[l])):s.push(2*parseInt(a[l])):o.push(a[l]);for(var c=new Array,u=new Array,m=0;m<s.length;m++)c.push(parseInt(s[m])%10),u.push(parseInt(s[m])/10);for(var d=0,p=0,f=0,v=0,b=0,g=0;g<i.length;g++)d+=parseInt(i[g]);for(var h=0;h<o.length;h++)p+=parseInt(o[h]);for(var _=0;_<c.length;_++)f+=parseInt(c[_]),v+=parseInt(u[_]);return b=parseInt(d)+parseInt(p)+parseInt(f)+parseInt(v),t==10-(parseInt(b)%10==0?10:parseInt(b)%10)},checkNumber:function(e){return!!/^([1-9][\d]{0,7}|0)(\.[\d]{1,2})?$/.test(e)},handleNext:function(){var e=this,t=1;this.remitForm.forEach(function(n,a){return null==n.bank_code?(e.$message.error({message:"第"+(a+1)+"条:请选择银行"}),t=0):(n.bank_name=e.bankOptions[n.bank_code],null==n.bank_number||n.bank_number.length<16||n.bank_number.length>19?(e.$message.error({message:"第"+(a+1)+"条:银行卡长度必须是16-19位之间"}),t=0):null==n.real_name?(e.$message.error({message:"第"+(a+1)+"条:请填写正确的开户名"}),t=0):e.checkNumber(n.amount)?parseFloat(n.amount)>parseFloat(e.balance)?(e.$message.error({message:"第"+(a+1)+"条:提款金额大于商户余额,提款金额："+parseFloat(n.amount)+" 余额："+parseFloat(e.balance)}),t=0):void 0:(e.$message.error({message:"第"+(a+1)+"条:提款金额不正确"}),t=0))}),1==t&&(this.formVisible=!1,this.confirmVisible=!0)},handleLast:function(){this.formVisible=!0,this.confirmVisible=!1},handleAppend:function(){this.remitForm.push({bank_code:null,bank_name:null,bank_number:null,real_name:null,amount:null,status:0})},handleDel:function(e){this.remitForm.splice(e,1)},batchSubmit:function(){var e=this;e.isLoading=!0;var t={financial_password_hash:e.financial_password_hash,key_2fa:e.key_2fa,remitData:e.remitForm};return e.financial_password_hash=null,e.key_2fa=null,/^.*(?=.{6,16})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/.test(t.financial_password_hash)?/^[0-9]{6}$/.test(t.key_2fa)?e.remitForm.length>300?void e.$message.error({message:"提款条数超过300条"}):void l.default.post("/remit/single-batch-remit",t).then(function(t){e.isLoading=!1,0==t.code?e.$confirm("出款申请成功,请稍候在出款列表查询最新状态.","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.remitForm=u,e.$router.push({name:"vue_my_remit"})}):e.$message.error({message:t.message})}):void e.$message.error({message:"安全令牌格式不正确"}):void e.$message.error({message:"资金密码格式不正确"})}}}},cAgV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("jdeu"),r=function(e){return e&&e.__esModule?e:{default:e}}(a),i=function(e){e.directive("waves",r.default)};window.Vue&&(window.waves=r.default,Vue.use(i)),r.default.install=i,t.default=r.default},ctMr:function(e,t,n){var a=n("XZlg");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("81d72750",a,!0)},jdeu:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("woOf"),r=function(e){return e&&e.__esModule?e:{default:e}}(a);n("ctMr"),t.default={bind:function(e,t){e.addEventListener("click",function(n){var a=(0,r.default)({},t.value),i=(0,r.default)({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},a),s=i.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var o=s.getBoundingClientRect(),l=s.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(o.width,o.height)+"px",s.appendChild(l)),i.type){case"center":l.style.top=o.height/2-l.offsetHeight/2+"px",l.style.left=o.width/2-l.offsetWidth/2+"px";break;default:l.style.top=n.pageY-o.top-l.offsetHeight/2-document.body.scrollTop+"px",l.style.left=n.pageX-o.left-l.offsetWidth/2-document.body.scrollLeft+"px"}return l.style.backgroundColor=i.color,l.className="waves-ripple z-active",!1}},!1)}}},nBL4:function(e,t,n){"use strict";function a(e){n("SLvJ")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Zmbg"),i=n.n(r),s=n("1HEL"),o=n("VU/8"),l=a,c=o(i.a,s.a,!1,l,"data-v-f367d09a",null);t.default=c.exports},vMJZ:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return new s.default(function(t,n){l.default.post("/user/check-can-remit",e).then(function(e){0==e.code?t(e):n(e.message)},function(e){n(e)}).catch(function(e){n(e)})})}Object.defineProperty(t,"__esModule",{value:!0});var i=n("//Fk"),s=a(i);t.checkCanRemit=r;var o=n("3pLw"),l=a(o),c=n("X2Oc");a(c)}});