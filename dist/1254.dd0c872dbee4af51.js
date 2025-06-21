"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[1254],{

/***/ 33562:
/*!*******************************************************************************!*\
  !*** ./src/app/demo/components/uikit/messages/messagesdemo-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessagesDemoRoutingModule: () => (/* binding */ MessagesDemoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var _messagesdemo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messagesdemo.component */ 90905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 65879);




let MessagesDemoRoutingModule = /*#__PURE__*/(() => {
  class MessagesDemoRoutingModule {
    static #_ = this.ɵfac = function MessagesDemoRoutingModule_Factory(t) {
      return new (t || MessagesDemoRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MessagesDemoRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
        path: '',
        component: _messagesdemo_component__WEBPACK_IMPORTED_MODULE_0__.MessagesDemoComponent
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
  return MessagesDemoRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MessagesDemoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 90905:
/*!**************************************************************************!*\
  !*** ./src/app/demo/components/uikit/messages/messagesdemo.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessagesDemoComponent: () => (/* binding */ MessagesDemoComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/messages */ 9502);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/message */ 7161);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toast */ 74104);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 53714);








let MessagesDemoComponent = /*#__PURE__*/(() => {
  class MessagesDemoComponent {
    constructor(service) {
      this.service = service;
      this.msgs = [];
    }
    showInfoViaToast() {
      this.service.add({
        key: 'tst',
        severity: 'info',
        summary: 'Info Message',
        detail: 'PrimeNG rocks'
      });
    }
    showWarnViaToast() {
      this.service.add({
        key: 'tst',
        severity: 'warn',
        summary: 'Warn Message',
        detail: 'There are unsaved changes'
      });
    }
    showErrorViaToast() {
      this.service.add({
        key: 'tst',
        severity: 'error',
        summary: 'Error Message',
        detail: 'Validation failed'
      });
    }
    showSuccessViaToast() {
      this.service.add({
        key: 'tst',
        severity: 'success',
        summary: 'Success Message',
        detail: 'Message sent'
      });
    }
    showInfoViaMessages() {
      this.msgs = [];
      this.msgs.push({
        severity: 'info',
        summary: 'Info Message',
        detail: 'PrimeNG rocks'
      });
    }
    showWarnViaMessages() {
      this.msgs = [];
      this.msgs.push({
        severity: 'warn',
        summary: 'Warn Message',
        detail: 'There are unsaved changes'
      });
    }
    showErrorViaMessages() {
      this.msgs = [];
      this.msgs.push({
        severity: 'error',
        summary: 'Error Message',
        detail: 'Validation failed'
      });
    }
    showSuccessViaMessages() {
      this.msgs = [];
      this.msgs.push({
        severity: 'success',
        summary: 'Success Message',
        detail: 'Message sent'
      });
    }
    static #_ = this.ɵfac = function MessagesDemoComponent_Factory(t) {
      return new (t || MessagesDemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.MessageService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MessagesDemoComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_1__.MessageService])],
      decls: 47,
      vars: 1,
      consts: [[1, "grid"], [1, "col-12", "lg:col-6"], [1, "card"], ["key", "tst"], [1, "flex", "flex-wrap", "gap-2"], ["type", "button", "pButton", "", "label", "Success", 1, "p-button-success", 3, "click"], ["type", "button", "pButton", "", "label", "Info", 1, "p-button-info", 3, "click"], ["type", "button", "pButton", "", "label", "Warn", 1, "p-button-warning", 3, "click"], ["type", "button", "pButton", "", "label", "Error", 1, "p-button-danger", 3, "click"], [1, "card", "z-3"], [3, "value"], [1, "col-12", "lg:col-8"], [1, "flex", "align-items-center", "flex-wrap", "gap-2", "mb-3"], ["for", "username", 1, "w-9rem"], ["id", "username", "type", "text", "pInputText", "", "placeholder", "Username", 1, "ng-dirty", "ng-invalid"], ["username", ""], ["severity", "error", "text", "Field is required"], [1, "flex", "align-items-center", "flex-wrap", "gap-2"], ["for", "email", 1, "w-9rem"], ["type", "text", "pInputText", "", "placeholder", "Email", "label", "email", 1, "ng-dirty", "ng-invalid"], ["email", ""], ["severity", "error"], [1, "col-12", "lg:col-4"], [1, "field", "p-fluid"], ["for", "username2"], ["id", "username2", "type", "username", "aria-describedby", "username-help", "pInputText", "", 1, "ng-dirty", "ng-invalid"], ["id", "username-help", 1, "p-error"]],
      template: function MessagesDemoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p-toast", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesDemoComponent_Template_button_click_7_listener() {
            return ctx.showSuccessViaToast();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesDemoComponent_Template_button_click_8_listener() {
            return ctx.showInfoViaToast();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesDemoComponent_Template_button_click_9_listener() {
            return ctx.showWarnViaToast();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesDemoComponent_Template_button_click_10_listener() {
            return ctx.showErrorViaToast();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1)(12, "div", 9)(13, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Messages");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4)(16, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesDemoComponent_Template_button_click_16_listener() {
            return ctx.showSuccessViaMessages();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesDemoComponent_Template_button_click_17_listener() {
            return ctx.showInfoViaMessages();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesDemoComponent_Template_button_click_18_listener() {
            return ctx.showWarnViaMessages();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesDemoComponent_Template_button_click_19_listener() {
            return ctx.showErrorViaMessages();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "p-messages", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11)(22, "div", 2)(23, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Inline");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12)(26, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 14, 15)(30, "p-message", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17)(32, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 19, 20)(36, "p-message", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22)(38, "div", 2)(39, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Help Text");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23)(42, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "small", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Enter your username to reset your password.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.msgs);
        }
      },
      dependencies: [primeng_messages__WEBPACK_IMPORTED_MODULE_2__.Messages, primeng_message__WEBPACK_IMPORTED_MODULE_3__.UIMessage, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective, primeng_toast__WEBPACK_IMPORTED_MODULE_5__.Toast, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText],
      encapsulation: 2
    });
  }
  return MessagesDemoComponent;
})();

/***/ }),

/***/ 41254:
/*!***********************************************************************!*\
  !*** ./src/app/demo/components/uikit/messages/messagesdemo.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessagesDemoModule: () => (/* binding */ MessagesDemoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _messagesdemo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messagesdemo.component */ 90905);
/* harmony import */ var _messagesdemo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messagesdemo-routing.module */ 33562);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/messages */ 9502);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/message */ 7161);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ 74104);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);









let MessagesDemoModule = /*#__PURE__*/(() => {
  class MessagesDemoModule {
    static #_ = this.ɵfac = function MessagesDemoModule_Factory(t) {
      return new (t || MessagesDemoModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: MessagesDemoModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _messagesdemo_routing_module__WEBPACK_IMPORTED_MODULE_1__.MessagesDemoRoutingModule, primeng_messages__WEBPACK_IMPORTED_MODULE_4__.MessagesModule, primeng_message__WEBPACK_IMPORTED_MODULE_5__.MessageModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_toast__WEBPACK_IMPORTED_MODULE_7__.ToastModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule]
    });
  }
  return MessagesDemoModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MessagesDemoModule, {
    declarations: [_messagesdemo_component__WEBPACK_IMPORTED_MODULE_0__.MessagesDemoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _messagesdemo_routing_module__WEBPACK_IMPORTED_MODULE_1__.MessagesDemoRoutingModule, primeng_messages__WEBPACK_IMPORTED_MODULE_4__.MessagesModule, primeng_message__WEBPACK_IMPORTED_MODULE_5__.MessageModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_toast__WEBPACK_IMPORTED_MODULE_7__.ToastModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule]
  });
})();

/***/ }),

/***/ 7161:
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-message.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageModule: () => (/* binding */ MessageModule),
/* harmony export */   UIMessage: () => (/* binding */ UIMessage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_icons_check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/icons/check */ 12591);
/* harmony import */ var primeng_icons_exclamationtriangle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/exclamationtriangle */ 62736);
/* harmony import */ var primeng_icons_infocircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/icons/infocircle */ 43823);
/* harmony import */ var primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/icons/timescircle */ 88468);









/**
 * Message groups a collection of contents in tabs.
 * @group Components
 */
function UIMessage_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "CheckIcon", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-inline-message-icon");
  }
}
function UIMessage_InfoCircleIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "InfoCircleIcon", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-inline-message-icon");
  }
}
function UIMessage_TimesCircleIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "TimesCircleIcon", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-inline-message-icon");
  }
}
function UIMessage_ExclamationTriangleIcon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ExclamationTriangleIcon", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-inline-message-icon");
  }
}
function UIMessage_div_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 6);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r7.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function UIMessage_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UIMessage_div_5_span_1_Template, 1, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.escape);
  }
}
function UIMessage_ng_template_6_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.text);
  }
}
function UIMessage_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UIMessage_ng_template_6_span_0_Template, 2, 1, "span", 7);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.escape);
  }
}
const _c0 = (a0, a1, a2, a3, a4) => ({
  "p-inline-message-info": a0,
  "p-inline-message-warn": a1,
  "p-inline-message-error": a2,
  "p-inline-message-success": a3,
  "p-inline-message-icon-only": a4
});
let UIMessage = /*#__PURE__*/(() => {
  class UIMessage {
    /**
     * Severity level of the message.
     * @group Props
     */
    severity;
    /**
     * Text content.
     * @group Props
     */
    text;
    /**
     * Whether displaying messages would be escaped or not.
     * @group Props
     */
    escape = true;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    get icon() {
      if (this.severity && this.severity.trim()) {
        return this.severity;
      } else {
        return 'info';
      }
    }
    static ɵfac = function UIMessage_Factory(t) {
      return new (t || UIMessage)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UIMessage,
      selectors: [["p-message"]],
      hostAttrs: [1, "p-element"],
      inputs: {
        severity: "severity",
        text: "text",
        escape: "escape",
        style: "style",
        styleClass: "styleClass"
      },
      decls: 8,
      vars: 16,
      consts: [["aria-live", "polite", 1, "p-inline-message", "p-component", "p-inline-message", 3, "ngStyle", "ngClass"], [3, "styleClass", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["escapeOut", ""], [3, "styleClass"], ["class", "p-inline-message-text", 3, "innerHTML", 4, "ngIf"], [1, "p-inline-message-text", 3, "innerHTML"], ["class", "p-inline-message-text", 4, "ngIf"], [1, "p-inline-message-text"]],
      template: function UIMessage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UIMessage_CheckIcon_1_Template, 1, 1, "CheckIcon", 1)(2, UIMessage_InfoCircleIcon_2_Template, 1, 1, "InfoCircleIcon", 1)(3, UIMessage_TimesCircleIcon_3_Template, 1, 1, "TimesCircleIcon", 1)(4, UIMessage_ExclamationTriangleIcon_4_Template, 1, 1, "ExclamationTriangleIcon", 1)(5, UIMessage_div_5_Template, 2, 1, "div", 2)(6, UIMessage_ng_template_6_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](10, _c0, ctx.severity === "info", ctx.severity === "warn", ctx.severity === "error", ctx.severity === "success", ctx.text == null));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon === "success");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon === "info");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon === "error");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon === "warn");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.escape)("ngIfElse", _r6);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, primeng_icons_check__WEBPACK_IMPORTED_MODULE_2__.CheckIcon, primeng_icons_infocircle__WEBPACK_IMPORTED_MODULE_3__.InfoCircleIcon, primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_4__.TimesCircleIcon, primeng_icons_exclamationtriangle__WEBPACK_IMPORTED_MODULE_5__.ExclamationTriangleIcon],
      styles: ["@layer primeng{.p-inline-message{display:inline-flex;align-items:center;justify-content:center;vertical-align:top}.p-inline-message-icon-only .p-inline-message-text{visibility:hidden;width:0}.p-fluid .p-inline-message{display:flex}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return UIMessage;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MessageModule = /*#__PURE__*/(() => {
  class MessageModule {
    static ɵfac = function MessageModule_Factory(t) {
      return new (t || MessageModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MessageModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, primeng_icons_check__WEBPACK_IMPORTED_MODULE_2__.CheckIcon, primeng_icons_infocircle__WEBPACK_IMPORTED_MODULE_3__.InfoCircleIcon, primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_4__.TimesCircleIcon, primeng_icons_exclamationtriangle__WEBPACK_IMPORTED_MODULE_5__.ExclamationTriangleIcon]
    });
  }
  return MessageModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-message.mjs.map

/***/ })

}]);