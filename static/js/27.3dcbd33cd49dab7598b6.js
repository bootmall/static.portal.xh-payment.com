webpackJsonp([27,57],{"8r3d":function(t,e,a){"use strict";function n(t){a("Pmq9")}Object.defineProperty(e,"__esModule",{value:!0});var r=a("YQUN"),o=a.n(r),s=a("x3cX"),i=a("VU/8"),l=n,c=i(o.a,s.a,!1,l,null,null);e.default=c.exports},ARoL:function(t,e,a){"use strict";function n(t){a("Ey9Z")}Object.defineProperty(e,"__esModule",{value:!0});var r=a("bPRz"),o=a.n(r),s=a("OqhH"),i=a("VU/8"),l=n,c=i(o.a,s.a,!1,l,"data-v-58c513db",null);e.default=c.exports},E4LH:function(t,e,a){"use strict";function n(t,e,a){/^[0-9A-Za-z_-]{6,24}$/.test(e)?a():a(new Error("用户名为长度在6-24之间的数字字母"))}function r(t){return/^1[0-9]{10}$/.test(t)}function o(t){return/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(t)}function s(t){return/^[a-z]+$/.test(t)}function i(t){return/^[A-Z]+$/.test(t)}function l(t){return/^[A-Za-z]+$/.test(t)}function c(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.isvalidUsername=n,e.isMobile=r,e.validateURL=o,e.validateLowerCase=s,e.validateUpperCase=i,e.validateAlphabets=l,e.validateEmail=c},Ey9Z:function(t,e,a){var n=a("ieKu");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("60aa7e0c",n,!0)},OqhH:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:"请支付开户费用",visible:t.needPayAccountOpenFeeVisible,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"40%"},on:{"update:visible":function(e){t.needPayAccountOpenFeeVisible=e}}},[a("el-alert",{attrs:{title:"您需要先支付开户费用进行开户",type:"warning",center:"","show-icon":""}}),t._v(" "),a("add-recharge",{attrs:{type:3,amount:t.needPayAccountOpenAmount,"amount-disabled":1}})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isMainAccount,expression:"isMainAccount"}],staticStyle:{width:"90%","margin-left":"50px"}},[a("el-row",{staticClass:"panel-group",attrs:{gutter:40}},[a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:12}},[a("div",{staticClass:"card-panel"},[a("div",{staticClass:"card-panel-icon-wrapper icon-shoppingCard"},[a("svg-icon",{attrs:{"icon-class":"shoppingCard","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[a("span",{staticStyle:{float:"left"}},[t._v("今日充值")]),t._v(" "),a("span",{staticStyle:{float:"left","margin-left":"50px"}},[t._v(t._s(t.user.order_today_amount))])]),t._v(" "),a("div",{staticClass:"card-panel-num"},[a("span",{staticStyle:{float:"left","margin-top":"15px","text-align":"center","margin-right":"50px"}},[a("p",[t._v("成功笔数")]),t._v(" "),a("p",[t._v(t._s(t.user.order_today_total))])]),t._v(" "),a("span",{staticStyle:{float:"left","margin-top":"15px","text-align":"center","margin-right":"50px"}},[a("p",[t._v("待结算金额")]),t._v(" "),a("p",[t._v(t._s(t.user.order_today_paid_total))])])])])])]),t._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:12}},[a("div",{staticClass:"card-panel"},[a("div",{staticClass:"card-panel-icon-wrapper icon-money"},[a("svg-icon",{attrs:{"icon-class":"money","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[a("span",{staticStyle:{float:"left"}},[t._v("今日代付")]),t._v(" "),a("span",{staticStyle:{float:"left","margin-left":"50px"}},[t._v(t._s(t.user.remit_today_amount))])]),t._v(" "),a("div",{staticClass:"card-panel-num"},[a("span",{staticStyle:{float:"left","margin-top":"15px","text-align":"center","margin-right":"50px"}},[a("p",[t._v("成功笔数")]),t._v(" "),a("p",[t._v(t._s(t.user.remit_today_total_success))])]),t._v(" "),a("span",{staticStyle:{float:"left","margin-top":"15px","text-align":"center","margin-right":"50px"}},[a("p",[t._v("失败笔数")]),t._v(" "),a("p",[t._v(t._s(t.user.remit_today_total_fail))])]),t._v(" "),a("span",{staticStyle:{float:"left","margin-top":"15px","text-align":"center"}},[a("p",[t._v("失败金额")]),t._v(" "),a("p",[t._v(t._s(t.user.remit_today_amount_fail))])])])])])])],1),t._v(" "),a("el-row",{staticClass:"panel-group",attrs:{gutter:40}},[a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:12}},[a("div",{staticClass:"card-panel"},[a("div",{staticClass:"card-panel-icon-wrapper icon-shoppingCard"},[a("svg-icon",{attrs:{"icon-class":"shoppingCard","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[a("span",{staticStyle:{float:"left"}},[t._v("昨日充值")]),t._v(" "),a("span",{staticStyle:{float:"left","margin-left":"50px"}},[t._v(t._s(t.user.order_yesterday_amount))])]),t._v(" "),a("div",{staticClass:"card-panel-num"},[a("span",{staticStyle:{float:"left","margin-top":"15px","text-align":"center","margin-right":"50px"}},[a("p",[t._v("成功笔数")]),t._v(" "),a("p",[t._v(t._s(t.user.order_yesterday_total))])]),t._v(" "),a("span",{staticStyle:{float:"left","margin-top":"15px","text-align":"center","margin-right":"50px"}},[a("p",[t._v("待结算金额")]),t._v(" "),a("p",[t._v(t._s(t.user.order_yesterday_paid_total))])])])])])]),t._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:12}},[a("div",{staticClass:"card-panel"},[a("div",{staticClass:"card-panel-icon-wrapper icon-money"},[a("svg-icon",{attrs:{"icon-class":"money","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[a("span",{staticStyle:{float:"left"}},[t._v("昨日代付")]),t._v(" "),a("span",{staticStyle:{float:"left","margin-left":"50px"}},[t._v(t._s(t.user.remit_yesterday_amount))])]),t._v(" "),a("div",{staticClass:"card-panel-num"},[a("span",{staticStyle:{float:"left","margin-top":"15px","text-align":"center","margin-right":"50px"}},[a("p",[t._v("成功笔数")]),t._v(" "),a("p",[t._v(t._s(t.user.remit_yesterday_total_success))])]),t._v(" "),a("span",{staticStyle:{float:"left","margin-top":"15px","text-align":"center","margin-right":"50px"}},[a("p",[t._v("失败笔数")]),t._v(" "),a("p",[t._v(t._s(t.user.remit_yesterday_total_fail))])]),t._v(" "),a("span",{staticStyle:{float:"left","margin-top":"15px","text-align":"center"}},[a("p",[t._v("失败金额")]),t._v(" "),a("p",[t._v(t._s(t.user.remit_yesterday_amount_fail))])])])])])])],1)],1),t._v(" "),10!=t.user.group_id?a("div",{directives:[{name:"show",rawName:"v-show",value:t.isMainAccount,expression:"isMainAccount"}],staticClass:"rate-list",staticStyle:{width:"90%","margin-left":"50px","margin-bottom":"20px"}},[a("h4",{staticClass:"el-alert el-alert--success",staticStyle:{"margin-bottom":"10px","line-height":"25px"},attrs:{title:"费率列表"}},[t._v("费率列表")]),t._v(" "),a("el-row",{staticStyle:{"text-align":"left"},attrs:{gutter:10}},[a("el-col",{attrs:{span:24,align:"center"}},[a("el-button",{attrs:{type:"success"}},[a("span",{staticClass:"rate-list-name"},[t._v("出款费率")]),t._v(":"+t._s(t.remit_fee))]),t._v(" "),t._l(t.rate,function(e,n){return a("el-button",{key:n,attrs:{type:"info"}},[a("span",{staticClass:"rate-list-name"},[t._v(t._s(e.name))]),t._v(":"+t._s(e.rate))])})],2)],1)],1):t._e(),t._v(" "),a("el-row",{staticStyle:{"margin-left":"50px","line-height":"60px",width:"90%"},attrs:{gutter:20}},[a("h4",{staticClass:"el-alert el-alert--success",staticStyle:{"margin-bottom":"10px","line-height":"25px"},attrs:{title:"最新公告"}},[t._v("最新公告")]),t._v(" "),a("el-tabs",{staticClass:"notice-list",staticStyle:{height:"200px"},attrs:{"tab-position":"left"}},t._l(t.notice,function(e,n){return a("el-tab-pane",{key:n,staticStyle:{height:"200px",overflow:"auto"},attrs:{label:e.title},domProps:{innerHTML:t._s(e.content)},on:{click:function(a){t.content=e.content}}})}))],1),t._v(" "),a("el-row",{staticStyle:{"margin-left":"50px","line-height":"60px",width:"90%","background-color":"#eee",color:"#333"},attrs:{gutter:20}},[a("el-col",{attrs:{span:6,align:"center"}},[t._v("最后登陆时间")]),t._v(" "),a("el-col",{attrs:{span:6}},[t._v(t._s(t.user.last_login_time))]),t._v(" "),a("el-col",{attrs:{span:6,align:"center"}},[t._v("最后登陆IP")]),t._v(" "),a("el-col",{attrs:{span:6}},[t._v(t._s(t.user.last_login_ip))])],1)],1)},r=[],o={render:n,staticRenderFns:r};e.a=o},Pmq9:function(t,e,a){var n=a("Q15t");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("73a1a579",n,!0)},Q15t:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".grid-content{width:100%;padding-top:10px;padding-bottom:10px}.el-form-item-input{width:50%}.pay_type_radio .el-radio--small.is-bordered{margin-top:5px}",""])},YQUN:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=(a("NYxO"),a("3pLw")),o=n(r),s=a("X2Oc"),i=(n(s),a("E4LH"),a("M4fF"));n(i);e.default={name:"addRecharge",components:{},props:{type:{type:Number,default:1},amount:{default:0},amountDisabled:{default:1}},data:function(){return{commonForm:{type:this.type,amount:this.amount,method:"",amountDisabled:"1"==this.amountDisabled},dialogAvatarVisible:!1,showStepOneBtn:!0,cashierUrl:"",methodOptions:[],isIndeterminate:!0,isNewRecord:!0,isLoading:!1,showNotice:!1}},computed:{},methods:{getFormOptions:function(){self=this,o.default.post("/account/my-recharge-method-list",{all:0,type:self.type}).then(function(t){0!=t.code?self.$message.error({message:t.message}):self.methodOptions=t.data},function(t){self.$message.error({message:t.message})})},onSubmit:function(){self=this,self.showStepOneBtn=!0,this.$refs.commonForm.validate(function(t){if(!t)return self.$message.error("信息填写错误！"),self.showStepOneBtn=!1,!1;var e=self.commonForm;return e.method?e.method?(self.isLoading=!0,void o.default.post("/order/add",e).then(function(t){if(self.isLoading=!1,0==t.code&&void 0!==t.data.cashier_url&&""!=t.data.cashier_url)return self.cashierUrl=t.data.cashier_url,self.showStepOneBtn=!1,void(self.showNotice=!0);self.$message.error("失败:"+t.message)})):void self.$message.error("请填写充值金额！"):void self.$message.error("请选择充值方式！")})}},created:function(){this.getFormOptions()}}},bPRz:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a("8r3d"),o=n(r),s=(a("NYxO"),a("3pLw")),i=n(s),l=a("X2Oc"),c=(n(l),{orderCountData:[],orderMoneyData:[],xAxis:[]}),d={line:[],xAxis:[],legend:"近7天订单金额"},p={line:[],xAxis:[],legend:"近7天订单数量"};e.default={name:"dashboardIndex",components:{addRecharge:o.default},computed:{},data:function(){return{groupPanel:{},listLoading:!1,lineChartOrderCountData:d,lineChartOrderMoneyData:p,notice:{},noticeVisible:!1,content:null,user:{},rate:{},remit_fee:null,payMethodOptions:{},needPayAccountOpenFeeVisible:!1,needPayAccountOpenFee:!1,needPayAccountOpenAmount:0,isMainAccount:!1}},methods:{go:function(t){this.$router.push({path:t})},handleSetLineChartData:function(t){this.lineChartData=c[t]},getInitData:function(){var t=this;t.listLoading=!0,i.default.post("/dashboard/index").then(function(e){if(t.listLoading=!1,0!=e.code)t.$message.error({message:e.message});else{t.groupPanel=e.data.groupPanel,t.isMainAccount=e.data.isMainAccount,t.user=e.data.user,t.notice=e.data.notice,t.notice.length>0&&(t.noticeVisible=!0,t.content=t.notice[0].content);for(var a in e.data.rate)0==e.data.rate[a].rate&&(e.data.rate[a].rate=0);t.rate=e.data.rate,t.remit_fee=e.data.remit_fee,t.payMethodOptions=e.data.payMethodOptions,t.needPayAccountOpenFee=e.data.needPayAccountOpenFee,t.needPayAccountOpenFee&&(t.noticeVisible=!1,t.needPayAccountOpenFeeVisible=!0,t.needPayAccountOpenAmount=parseInt(e.data.needPayAccountOpenAmount))}},function(e){t.$message.error({message:e.message})})}},created:function(){this.getInitData()}}},ieKu:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".el-row[data-v-58c513db]{margin-bottom:20px}.el-row[data-v-58c513db]:last-child{margin-bottom:0}.el-col[data-v-58c513db]{border-radius:4px}.bg-purple-dark[data-v-58c513db]{background:#99a9bf}.bg-purple[data-v-58c513db]{background:#d3dce6}.bg-purple-light[data-v-58c513db]{background:#e5e9f2}.grid-content[data-v-58c513db]{border-radius:4px;min-height:36px}.row-bg[data-v-58c513db]{padding:10px 0;background-color:#f9fafc}.dashboard-editor-container[data-v-58c513db]{padding:32px;background-color:#f0f2f5}.dashboard-editor-container .chart-wrapper[data-v-58c513db]{background:#fff;padding:16px 16px 0;margin-bottom:32px}.dashboard-editor-container .authorised_amount[data-v-58c513db]{padding:5px 10px;background-color:#ecf8ff;border-radius:4px;border-left:5px solid #50bfff}.dashboard-editor-container .authorised_amount b[data-v-58c513db],.dashboard-editor-container .authorised_amount span[data-v-58c513db]{display:inline-block;padding-left:5px}.dashboard-editor-container .authorised_amount b[data-v-58c513db]{color:#f56c6c}.panel-group[data-v-58c513db]{margin-top:18px}.panel-group .card-panel-col[data-v-58c513db]{margin-bottom:32px}.panel-group .card-panel[data-v-58c513db]{height:108px;cursor:pointer;font-size:12px;position:relative;overflow:hidden;color:#666;background:#fff;box-shadow:4px 4px 40px rgba(0,0,0,.05);border-color:rgba(0,0,0,.05)}.panel-group .card-panel:hover .card-panel-icon-wrapper[data-v-58c513db]{color:#fff}.panel-group .card-panel:hover .icon-people[data-v-58c513db]{background:#40c9c6}.panel-group .card-panel:hover .icon-message[data-v-58c513db]{background:#36a3f7}.panel-group .card-panel:hover .icon-money[data-v-58c513db]{background:#f4516c}.panel-group .card-panel:hover .icon-shoppingCard[data-v-58c513db]{background:#34bfa3}.panel-group .card-panel .icon-people[data-v-58c513db]{color:#40c9c6}.panel-group .card-panel .icon-message[data-v-58c513db]{color:#36a3f7}.panel-group .card-panel .icon-money[data-v-58c513db]{color:#f4516c}.panel-group .card-panel .icon-shoppingCard[data-v-58c513db]{color:#34bfa3}.panel-group .card-panel .card-panel-icon-wrapper[data-v-58c513db]{float:left;margin:14px 0 0 14px;padding:16px;transition:all .38s ease-out;border-radius:6px}.panel-group .card-panel .card-panel-icon[data-v-58c513db]{float:left;font-size:48px}.panel-group .card-panel .card-panel-description[data-v-58c513db]{float:left;font-weight:700;margin:26px;margin-left:0;width:75%}.panel-group .card-panel .card-panel-description .card-panel-text[data-v-58c513db]{line-height:18px;color:rgba(0,0,0,.45);font-size:16px;margin-bottom:12px;margin-left:20px}.panel-group .card-panel .card-panel-description .card-panel-num[data-v-58c513db]{font-size:12px}.rate-list .el-alert__title[data-v-58c513db]{font-size:18px!important;font-weight:bolder}.rate-list .el-button--medium[data-v-58c513db]{padding:5px 10px;color:#ccc;margin-bottom:10px;margin-left:10px}.rate-list .rate-list-name[data-v-58c513db]{color:#fff}.rate-list .el-row .el-col-24[data-v-58c513db]{text-align:left}.notice-list .el-alert__content[data-v-58c513db],.notice-list .el-alert__title[data-v-58c513db]{font-size:18px!important;font-weight:bolder;line-height:25px!important}",""])},x3cX:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"dashboard-container"},[a("el-form",{ref:"commonForm",staticClass:"el-form",attrs:{model:t.commonForm,"label-width":"180px"}},[a("h4",{staticClass:"title"}),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:22,offset:1}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{staticClass:"el-form-item-input",attrs:{label:"金额",prop:"amount"}},[a("el-input",{attrs:{disabled:t.commonForm.amountDisabled},model:{value:t.commonForm.amount,callback:function(e){t.$set(t.commonForm,"amount",e)},expression:"commonForm.amount"}})],1),t._v(" "),a("el-form-item",{staticClass:"el-form-item-input",attrs:{label:"请选择支付类型",prop:"method"}},[a("el-select",{staticClass:"filter-item",attrs:{label:"支付类型",placeholder:"支付类型"},model:{value:t.commonForm.method,callback:function(e){t.$set(t.commonForm,"method",e)},expression:"commonForm.method"}},t._l(t.methodOptions,function(t,e){return a("el-option",{key:t.method_id,attrs:{label:t.method_name,value:t.method_id}})}))],1),t._v(" "),t.showNotice?a("el-alert",{attrs:{title:"请点击继续支付按钮,并在在弹出窗口进行支付.如果浏览器没有弹窗,请检查浏览器设置.",type:"error",center:"","show-icon":""}}):t._e()],1)])],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:22,offset:1}},[a("div",{staticClass:"grid-content"},[a("el-form-item",[a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.showStepOneBtn,expression:"showStepOneBtn"}],staticStyle:{margin:"0 auto"},attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("申请充值订单")]),t._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:""!=t.cashierUrl,expression:"cashierUrl!=''"}],staticStyle:{width:"250px"},attrs:{href:t.cashierUrl,target:"_blank"}},[a("el-button",{attrs:{type:"danger"}},[t._v("点击按钮进行支付")])],1)],1)],1)])],1)],1)],1)},r=[],o={render:n,staticRenderFns:r};e.a=o}});