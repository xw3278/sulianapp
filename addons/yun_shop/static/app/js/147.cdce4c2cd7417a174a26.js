webpackJsonp([147],{"0zxC":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABCElEQVRYR+2YwQkCMRBF52chZ0uwA93Dwh61Au1AS9AKtANL0BK0Ar1tspe1A7cEC1h2JOBJlIHEg8jkFPjMJ3n5kElAiaOqqiGAM4C7tXaa5/k9xRIpxaHWObcCsAtzY8y0KIpLimfygrz3WyLa6II+HYMSkgKqhJSQREDSNUNKSCIg6f+foWc/MwMwkGi805l5AmASNGY+AGhjfIiotdae4Jy7ARhGmny77Arv/ZWIRt92jvFj5hOaphl0XTeOMQg1fd8viWjxPLJ1lmVhg1EjdJvaMUrolJAS0nfZawb+/3KVUi/pSkgJSQQk/ecyVNf1kpn3P/M/FFpgY8yRmduyLOcSUUl/AFt6zdRiuGpmAAAAAElFTkSuQmCC"},KSXo:function(t,e,n){var a=n("kxFB");(t.exports=n("FZ+f")(!1)).push([t.i,"\n.avatar[data-v-17af548c] {\n  width: 100%;\n  height: 100%;\n}\n#remittance-detail[data-v-17af548c] {\n  padding-top: 40px;\n}\n#remittance-detail .state[data-v-17af548c] {\n    padding: 1.25rem;\n    background-color: #f15353;\n    color: #fff;\n    font-size: 18px;\n    text-align: left;\n    position: relative;\n}\n#remittance-detail .state button[data-v-17af548c] {\n      height: 1.5rem;\n      line-height: 1.5rem;\n      position: absolute;\n      right: 1.25rem;\n      top: 1.25rem;\n      font-size: 12px;\n      display: block;\n      background: rgba(255, 255, 255, 0.3);\n      border-radius: 0.25rem;\n      padding: 0 0.625rem;\n}\n#remittance-detail .voucher[data-v-17af548c] {\n    background-color: #fff;\n    margin-top: 0.625rem;\n    padding: 0 0.875rem 1.25rem 0.875rem;\n}\n#remittance-detail .voucher span[data-v-17af548c] {\n      font-weight: bold;\n      font-size: 14px;\n      display: block;\n      line-height: 2.5rem;\n      text-align: left;\n}\n#remittance-detail .voucher .img[data-v-17af548c] {\n      background-image: url("+a(n("0zxC"))+");\n      background-repeat: no-repeat;\n      background-size: 1.5rem;\n      background-position: center center;\n      width: 90%;\n      margin: 0 auto;\n      height: 5.5rem;\n      background-color: #fafafa;\n      border-radius: 0.25rem;\n      border: dashed 0.0625rem #ebebeb;\n}\n#remittance-detail .info[data-v-17af548c] {\n    margin-top: 0.625rem;\n    background-color: #fff;\n}\n#remittance-detail .info .box[data-v-17af548c] {\n      padding: 0.625rem 0;\n      border-bottom: solid 0.0625rem #ebebeb;\n}\n#remittance-detail .info .box li[data-v-17af548c] {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        line-height: 1.875rem;\n        font-size: 14px;\n        padding: 0 0.875rem;\n}\n#remittance-detail .info .box li span[data-v-17af548c]:first-child {\n          color: #8c8c8c;\n}\n#remittance-detail .info .btn[data-v-17af548c] {\n      padding: 0.625rem 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n}\n#remittance-detail .info .btn li[data-v-17af548c] {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n}\n#remittance-detail .info .btn li button[data-v-17af548c] {\n          width: 6.25rem;\n          height: 1.875rem;\n          border-radius: 0.9375rem;\n          background-color: #f15353;\n          color: #fff;\n          font-size: 14px;\n          border: none;\n}\n#remittance-detail #cause[data-v-17af548c] {\n    height: 15rem;\n}\n#remittance-detail #cause h1[data-v-17af548c] {\n      line-height: 2.5rem;\n      font-size: 16px;\n      border-bottom: solid 0.0625rem #ebebeb;\n}\n#remittance-detail #cause ul[data-v-17af548c] {\n      padding: 0.625rem 0.875rem;\n      font-size: 14px;\n      color: #8c8c8c;\n      text-align: left;\n}\n#remittance-detail #cause ul li[data-v-17af548c] {\n        text-indent: -1.25rem;\n        margin-left: 1.25rem;\n        line-height: 1.5rem;\n}\n",""])},hsId:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Pexp"),i=n("Tg7E"),r={components:{cTitle:a.a},data:function(){return{show1:!1,img_url:"",imageUrl:"",uploadUrl:"",upImgSrc:"",user_information:{card_number:"20180621154230",payee:"中国银行（3260）",money:"￥5000.00"},btn_name:"",reason_data:"",order_state:""}},activated:function(){this.init(),this.urlUp(),this.getJson()},methods:{init:function(){},getJson:function(){this.img_url="";var t=this,e={order_id:t.$route.params.order_id};$http.get("remittance.remittance-record",e).then(function(e){console.log("显示",e),1==e.result?(t.img_url=e.data.report_url,t.btn_name=e.data.button_models[0].name,t.reason_data=e.data.audit_note,t.order_state=e.data.status_name):Object(i.Toast)(e.msg)},function(t){Object(i.Toast)(t.msg)})},urlUp:function(){this.uploadUrl=this.fun.getRealUrl("plugin.store-cashier.frontend.store.store.upload",{})},handleStoreSuccess:function(t,e){this.imageUrl=URL.createObjectURL(e.raw),1==t.result?this.upImgSrc=t.data.img:Object(i.Toast)(t.msg)},beforeUpload:function(t){var e="image/png"===t.type||"image/jpeg"===t.type,n=t.size/1024/1024<2;return e||this.$notify("上传头像图片只能是 JPG或PNG 格式!"),n||this.$notify("上传头像图片大小不能超过 2MB!"),e&&n},completeEvent:function(){this.$router.push(this.fun.getUrl("orderdetail",{order_id:this.$route.params.order_id}))},returnEvent:function(){this.$router.push(this.fun.getUrl("orderdetail",{order_id:this.$route.params.order_id}))},cancelTransfer:function(){var t=this;this.$dialog.confirm({title:"提示",message:"此操作将取消汇款申请, 是否继续?"}).then(function(){var e=t,n={order_id:e.$route.params.order_id};$http.get("remittance.remittance-record-operation.cancel",n).then(function(t){1===t.result&&e.$notify({background:"#f0f9eb",message:"取消申请成功",color:"#67c23a"})},function(t){Object(i.Toast)(t.msg)})}).catch(function(){t.$notify({background:"#edf2fc",message:"已取消操作",color:"#909399"})})}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"remittance-detail"}},[n("c-title",{attrs:{hide:!1,text:"汇款详情"}}),t._v(" "),n("section",{staticClass:"state"},[n("span",[t._v(t._s(t.order_state))]),t._v(" "),null!=t.reason_data&&""!=t.reason_data?n("yd-button",{nativeOn:{click:function(e){t.show1=!0}}},[t._v("查看原因")]):t._e()],1),t._v(" "),n("section",{staticClass:"voucher"},[t._m(0),t._v(" "),n("div",{staticStyle:{width:"12.5rem",height:"10rem",margin:"0 auto",border:"1px dashed #c0ccda"}},[n("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.img_url}})])]),t._v(" "),n("div",{staticStyle:{background:"white",height:"50px"}},[n("van-button",{staticStyle:{float:"right","margin-right":"1.25rem"},attrs:{type:"danger"},on:{click:function(e){return t.cancelTransfer()}}},[t._v(t._s(t.btn_name))])],1),t._v(" "),n("yd-popup",{attrs:{position:"center",width:"80%",height:"240px;"},model:{value:t.show1,callback:function(e){t.show1=e},expression:"show1"}},[n("section",{staticStyle:{background:"white"},attrs:{id:"cause"}},[n("h1",[t._v("退款原因")]),t._v(" "),n("ul",[n("li",[t._v(t._s(t.reason_data))])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"50px","text-align":"left","line-height":"50px"}},[e("span",{staticStyle:{"font-size":"16px"}},[this._v("汇款凭证：")])])}]};var c=n("VU/8")(r,o,!1,function(t){n("mU87")},"data-v-17af548c",null);e.default=c.exports},mU87:function(t,e,n){var a=n("KSXo");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("2d589ec0",a,!0,{})}});