(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8f9aaeba"],{"92b1":function(t,e,n){},d0de:function(t,e,n){"use strict";var a=n("92b1"),r=n.n(a);r.a},ea8d:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container parent-page-container"},[n("div",{staticClass:"table-header"},[n("p",{staticClass:"table-title"},[t._v(t._s(t.$t("quarantineList")))])]),n("CustomTable",{attrs:{data:t.list,columns:[[t.$t("emailAddress"),"","emailAddress",1.4,"left"],[t.$t("name"),"","name",1.2,"left"],[t.$t("isUser"),"","user",.7,"left"],[t.$t("createdDate"),"","created",1,"center"],[t.$t("type"),"","type",1,"left"]],loading:!t.listReady,emptyStateMessage:t.$t("emptyState.quarantineList"),totalData:t.totalData,scrollWidth:800,filter:t.filter},on:{dataRequest:t.getQuarantineList,openModal:t.selectedQuarantineClicked}},[n("template",{slot:"filters"},[n("div",{staticClass:"table-filter-bar"},[n("div",{staticClass:"table-filter-icon"},[n("font-awesome-icon",{attrs:{icon:"search"}})],1),n("div",{staticClass:"table-filter"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.emailAddress,expression:"emailAddress"}],staticClass:"form-control",class:{inputActive:""!==t.emailAddress},attrs:{type:"text",name:"Email Address",placeholder:t.$t("emailAddress")},domProps:{value:t.emailAddress},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.createFilter())},input:function(e){e.target.composing||(t.emailAddress=e.target.value)}}})]),n("div",{staticClass:"table-filter-clear"},[t.defaultFilter!==t.filter?n("font-awesome-icon",{attrs:{icon:"times",title:t.$t("clearFilter")},on:{click:function(e){return t.removeFilter()}}}):t._e()],1)])])],2),n("ConfirmationModal",{attrs:{showModal:t.confirmDeleteModal,deleteId:t.selectedQuarantineId},on:{delete:t.deleteQuarantine,cancel:function(e){t.confirmDeleteModal=!1}}},[n("h3",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.$t("warning")))]),n("div",{attrs:{slot:"body"},domProps:{innerHTML:t._s(t.uFindInstruction(t.QUARANTINEPAGE_INSTRUC))},slot:"body"})])],1)},r=[],i=n("a34a"),o=n.n(i),s=n("9ab4"),l=n("60a3"),c=n("2fe1"),u=n("88c3"),d=n("2e75"),f=n("7358"),p=n("25bf"),h=n("d59a"),m=n("0f7b");function y(t){return y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function v(t,e,n,a,r,i,o){try{var s=t[i](o),l=s.value}catch(c){return void n(c)}s.done?e(l):Promise.resolve(l).then(a,r)}function b(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var i=t.apply(e,n);function o(t){v(i,a,r,o,s,"next",t)}function s(t){v(i,a,r,o,s,"throw",t)}o(void 0)}))}}function A(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function w(t,e,n){return e&&_(t.prototype,e),n&&_(t,n),t}function E(t,e){return!e||"object"!==y(e)&&"function"!==typeof e?k(t):e}function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}function C(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}function S(t,e){return S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},S(t,e)}var T=function(t){function e(){var t;return A(this,e),t=E(this,g(e).apply(this,arguments)),t.total=1,t.offset=0,t.currentPage=1,t.defaultFilter="",t.filter="",t.emailAddress="",t.list=[],t.listReady=!0,t.totalData=0,t.confirmDeleteModal=!1,t.selectedQuarantineId=null,t}return C(e,t),w(e,[{key:"mounted",value:function(){this.uSetSupportToggle(this.QUARANTINE_LIST_PAGE),this.getQuarantineList()}},{key:"getQuarantineList",value:function(){var t=b(o.a.mark((function t(){var e,n,a,r,i,s,l=arguments;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=l.length>0&&void 0!==l[0]?l[0]:0,n=l.length>1&&void 0!==l[1]?l[1]:"",a=l.length>2&&void 0!==l[2]&&l[2],this.listReady){t.next=5;break}return t.abrupt("return");case 5:return a&&(this.list=[]),this.listReady=!1,t.next=9,this.getList("quarantine-list",this.filter,e,this.TABLE_LIMIT,n);case 9:r=t.sent,i=r.data,s=r.count,this.totalData=s,this.formatQuarantineList(i),this.listReady=!0;case 15:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"formatQuarantineList",value:function(t){var e=this;this.list=[],t.forEach((function(t){var n=t.contact?t.contact.customUserId:null,a={id:t.id,name:t.contact?"".concat(t.contact.firstName," ").concat(t.contact.lastName):u["a"].tc("noContact"),emailAddress:t.emailAddress,created:e.uFormatDate(new Date(t.created)),user:n?u["a"].tc("yes"):u["a"].tc("no"),type:{value:e.EMAIL_QUARANTINE_TYPES[t.quarantineType],pillStyle:e.EMAIL_QUARANTINE_TYPES_STYLES[t.quarantineType]},actions:[{noAction:!e.uHasGroup(e.USER_GROUP_AGENCY_ADMIN),modalCall:e.uHasGroup(e.USER_GROUP_AGENCY_ADMIN),delete:e.uHasGroup(e.USER_GROUP_AGENCY_ADMIN)}]};e.list.push(a)}))}},{key:"createFilter",value:function(){var t=b(o.a.mark((function t(){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.filter="",this.emailAddress&&(this.filter+="email_address=".concat(this.emailAddress));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"removeFilter",value:function(){var t=b(o.a.mark((function t(){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.emailAddress="",this.filter="";case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"selectedQuarantineClicked",value:function(t){this.selectedQuarantineId=t.id,this.confirmDeleteModal=!0}},{key:"deleteQuarantine",value:function(){var t=b(o.a.mark((function t(e,n){return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.delete("quarantine-list",n);case 2:this.getQuarantineList(),this.confirmDeleteModal=!1;case 4:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}()}]),e}(Object(c["c"])(d["a"],f["a"],h["a"]));T=Object(s["a"])([Object(l["a"])({components:{CustomTable:p["a"],TableService:h["a"],ConfirmationModal:m["a"]}})],T);var I=T,N=I,O=(n("d0de"),n("2877")),R=Object(O["a"])(N,a,r,!1,null,"4af311ad",null);e["default"]=R.exports}}]);