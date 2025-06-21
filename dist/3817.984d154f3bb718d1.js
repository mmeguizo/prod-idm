"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[3817],{

/***/ 11445:
/*!*******************************************************************************!*\
  !*** ./src/app/demo/components/uikit/overlays/overlaysdemo-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverlaysDemoRoutingModule: () => (/* binding */ OverlaysDemoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var _overlaysdemo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overlaysdemo.component */ 31378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 65879);




let OverlaysDemoRoutingModule = /*#__PURE__*/(() => {
  class OverlaysDemoRoutingModule {
    static #_ = this.ɵfac = function OverlaysDemoRoutingModule_Factory(t) {
      return new (t || OverlaysDemoRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: OverlaysDemoRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
        path: '',
        component: _overlaysdemo_component__WEBPACK_IMPORTED_MODULE_0__.OverlaysDemoComponent
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
  return OverlaysDemoRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OverlaysDemoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 31378:
/*!**************************************************************************!*\
  !*** ./src/app/demo/components/uikit/overlays/overlaysdemo.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverlaysDemoComponent: () => (/* binding */ OverlaysDemoComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var src_app_demo_service_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/product.service */ 20981);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/toast */ 74104);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dialog */ 93530);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tooltip */ 33259);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/overlaypanel */ 88454);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 94267);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/confirmdialog */ 3904);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/sidebar */ 99246);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/ripple */ 44480);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/confirmpopup */ 31494);















function OverlaysDemoComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OverlaysDemoComponent_ng_template_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.display = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function OverlaysDemoComponent_ng_template_26_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p-sortIcon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "p-sortIcon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function OverlaysDemoComponent_ng_template_26_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 45)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rowData_r8 = ctx.$implicit;
    const product_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pSelectableRow", rowData_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/demo/images/product/", product_r9.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", product_r9.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.formatCurrency(product_r9.price), " ");
  }
}
function OverlaysDemoComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-table", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function OverlaysDemoComponent_ng_template_26_Template_p_table_selectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.selectedProduct = $event);
    })("onRowSelect", function OverlaysDemoComponent_ng_template_26_Template_p_table_onRowSelect_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r2.hide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OverlaysDemoComponent_ng_template_26_ng_template_1_Template, 9, 0, "ng-template", 38)(2, OverlaysDemoComponent_ng_template_26_ng_template_2_Template, 7, 5, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.products)("selection", ctx_r3.selectedProduct)("paginator", true)("rows", 5);
  }
}
const _c0 = () => ({
  width: "30vw"
});
const _c1 = () => ({
  "960px": "75vw"
});
const _c2 = () => ({
  width: "450px"
});
const _c3 = () => ({
  width: "350px"
});
let OverlaysDemoComponent = /*#__PURE__*/(() => {
  class OverlaysDemoComponent {
    constructor(productService, confirmationService, messageService) {
      this.productService = productService;
      this.confirmationService = confirmationService;
      this.messageService = messageService;
      this.images = [];
      this.display = false;
      this.products = [];
      this.selectedProduct = {};
      this.visibleSidebar1 = false;
      this.visibleSidebar2 = false;
      this.visibleSidebar3 = false;
      this.visibleSidebar4 = false;
      this.visibleSidebar5 = false;
    }
    ngOnInit() {
      this.productService.getProductsSmall().then(products => this.products = products);
      this.images = [];
      this.images.push({
        source: 'assets/demo/images/sopranos/sopranos1.jpg',
        thumbnail: 'assets/demo/images/sopranos/sopranos1_small.jpg',
        title: 'Sopranos 1'
      });
      this.images.push({
        source: 'assets/demo/images/sopranos/sopranos2.jpg',
        thumbnail: 'assets/demo/images/sopranos/sopranos2_small.jpg',
        title: 'Sopranos 2'
      });
      this.images.push({
        source: 'assets/demo/images/sopranos/sopranos3.jpg',
        thumbnail: 'assets/demo/images/sopranos/sopranos3_small.jpg',
        title: 'Sopranos 3'
      });
      this.images.push({
        source: 'assets/demo/images/sopranos/sopranos4.jpg',
        thumbnail: 'assets/demo/images/sopranos/sopranos4_small.jpg',
        title: 'Sopranos 4'
      });
    }
    confirm1() {
      this.confirmationService.confirm({
        key: 'confirm1',
        message: 'Are you sure to perform this action?'
      });
    }
    confirm2(event) {
      this.confirmationService.confirm({
        key: 'confirm2',
        target: event.target || new EventTarget(),
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.messageService.add({
            severity: 'info',
            summary: 'Confirmed',
            detail: 'You have accepted'
          });
        },
        reject: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Rejected',
            detail: 'You have rejected'
          });
        }
      });
    }
    formatCurrency(value) {
      return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    }
    static #_ = this.ɵfac = function OverlaysDemoComponent_Factory(t) {
      return new (t || OverlaysDemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_demo_service_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: OverlaysDemoComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_2__.ConfirmationService, primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService])],
      decls: 76,
      vars: 28,
      consts: [[1, "grid"], [1, "col-12", "lg:col-6"], [1, "card"], ["header", "Dialog", "id", "tester", "showEffect", "fade", 3, "visible", "breakpoints", "visibleChange"], [1, "line-height-3", "m-0"], ["pTemplate", "footer"], [1, "col-12"], ["pButton", "", "icon", "pi pi-external-link", "label", "Show", 3, "click"], [1, "card", "p-fluid"], [1, "flex", "flex-wrap", "gap-2"], ["type", "button", "pButton", "", "label", "Image", 1, "p-button-success", 3, "click"], [3, "showCloseIcon"], ["op1", ""], ["src", "assets/demo/images/nature/nature1.jpg", "alt", "Nature 1", 2, "width", "100%"], ["type", "button", "pButton", "", "label", "DataTable", 1, "p-button-success", 3, "click"], ["op2", ""], ["pTemplate", ""], ["header", "Confirmation", "key", "confirm1", "icon", "pi pi-exclamation-triangle", "message", "Are you sure you want to proceed?", "acceptButtonStyleClass", "p-button-text", "rejectButtonStyleClass", "p-button-text"], ["type", "text", "pButton", "", "icon", "pi pi-trash", "label", "Delete", 1, "p-button-danger", 2, "width", "auto", 3, "click"], [3, "visible", "baseZIndex", "visibleChange"], [2, "font-weight", "normal"], ["position", "right", 3, "visible", "baseZIndex", "visibleChange"], ["position", "top", 3, "visible", "baseZIndex", "visibleChange"], ["position", "bottom", 3, "visible", "baseZIndex", "visibleChange"], [3, "visible", "fullScreen", "baseZIndex", "visibleChange"], ["pButton", "", "type", "button", "icon", "pi pi-arrow-right", 1, "p-button-warning", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-arrow-left", 1, "p-button-warning", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-arrow-down", 1, "p-button-warning", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-arrow-up", 1, "p-button-warning", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-external-link", 1, "p-button-warning", 3, "click"], [1, "flex", "align-items-center", "gap-2"], ["for", "firstname5", 1, "p-sr-only"], ["id", "firstname5", "type", "text", "pInputText", "", "placeholder", "Username", "pTooltip", "Enter your username"], ["pButton", "", "pRipple", "", "type", "button", "label", "Save", "icon", "pi pi-check", "pTooltip", "Click to proceed"], ["pButton", "", "icon", "pi pi-check", "label", "Confirm", 3, "click"], ["key", "confirm2"], ["pButton", "", "icon", "pi pi-check", "label", "Ok", 1, "p-button-outlined", 3, "click"], ["selectionMode", "single", "responsiveLayout", "scroll", 3, "value", "selection", "paginator", "rows", "selectionChange", "onRowSelect"], ["pTemplate", "header"], ["pTemplate", "body"], ["pSortableColumn", "name", 2, "min-width", "12rem"], ["field", "name"], [2, "min-width", "5rem"], ["pSortableColumn", "price", 2, "min-width", "8rem"], ["field", "price"], [3, "pSelectableRow"], ["width", "50", 1, "shadow-2", 3, "src", "alt"]],
      template: function OverlaysDemoComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "p-toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Dialog");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p-dialog", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function OverlaysDemoComponent_Template_p_dialog_visibleChange_6_listener($event) {
            return ctx.display = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, OverlaysDemoComponent_ng_template_9_Template, 1, 0, "ng-template", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 0)(11, "div", 6)(12, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OverlaysDemoComponent_Template_button_click_12_listener() {
            return ctx.display = true;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8)(14, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Overlay Panel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9)(17, "div")(18, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OverlaysDemoComponent_Template_button_click_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r1.toggle($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p-overlayPanel", 11, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div")(23, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OverlaysDemoComponent_Template_button_click_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);
            const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r2.toggle($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p-overlayPanel", 11, 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, OverlaysDemoComponent_ng_template_26_Template, 3, 4, "ng-template", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 1)(28, "div", 8)(29, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Confirmation");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "p-confirmDialog", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 0)(33, "div", 6)(34, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OverlaysDemoComponent_Template_button_click_34_listener() {
            return ctx.confirm1();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 2)(36, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p-sidebar", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function OverlaysDemoComponent_Template_p_sidebar_visibleChange_38_listener($event) {
            return ctx.visibleSidebar1 = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h3", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Left Sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p-sidebar", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function OverlaysDemoComponent_Template_p_sidebar_visibleChange_41_listener($event) {
            return ctx.visibleSidebar2 = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h3", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Right Sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p-sidebar", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function OverlaysDemoComponent_Template_p_sidebar_visibleChange_44_listener($event) {
            return ctx.visibleSidebar3 = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h3", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Top Sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p-sidebar", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function OverlaysDemoComponent_Template_p_sidebar_visibleChange_47_listener($event) {
            return ctx.visibleSidebar4 = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h3", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Bottom Sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p-sidebar", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("visibleChange", function OverlaysDemoComponent_Template_p_sidebar_visibleChange_50_listener($event) {
            return ctx.visibleSidebar5 = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h3", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Full Screen Sidebar");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 9)(54, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OverlaysDemoComponent_Template_button_click_54_listener() {
            return ctx.visibleSidebar1 = true;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OverlaysDemoComponent_Template_button_click_55_listener() {
            return ctx.visibleSidebar2 = true;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OverlaysDemoComponent_Template_button_click_56_listener() {
            return ctx.visibleSidebar3 = true;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OverlaysDemoComponent_Template_button_click_57_listener() {
            return ctx.visibleSidebar4 = true;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OverlaysDemoComponent_Template_button_click_58_listener() {
            return ctx.visibleSidebar5 = true;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 1)(60, "div", 2)(61, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Tooltip");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 30)(64, "span")(65, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 1)(70, "div", 2)(71, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "ConfirmPopup");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "p-toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OverlaysDemoComponent_Template_button_click_74_listener($event) {
            return ctx.confirm2($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "p-confirmPopup", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.display)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showCloseIcon", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showCloseIcon", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.visibleSidebar1)("baseZIndex", 10000);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.visibleSidebar2)("baseZIndex", 10000);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.visibleSidebar3)("baseZIndex", 10000);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.visibleSidebar4)("baseZIndex", 10000);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", ctx.visibleSidebar5)("fullScreen", true)("baseZIndex", 10000);
        }
      },
      dependencies: [primeng_toast__WEBPACK_IMPORTED_MODULE_3__.Toast, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, primeng_dialog__WEBPACK_IMPORTED_MODULE_4__.Dialog, primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__.Tooltip, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_8__.OverlayPanel, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortIcon, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_10__.ConfirmDialog, primeng_sidebar__WEBPACK_IMPORTED_MODULE_11__.Sidebar, primeng_ripple__WEBPACK_IMPORTED_MODULE_12__.Ripple, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_13__.ConfirmPopup],
      encapsulation: 2
    });
  }
  return OverlaysDemoComponent;
})();

/***/ }),

/***/ 83817:
/*!***********************************************************************!*\
  !*** ./src/app/demo/components/uikit/overlays/overlaysdemo.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverlaysDemoModule: () => (/* binding */ OverlaysDemoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var _overlaysdemo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overlaysdemo.component */ 31378);
/* harmony import */ var _overlaysdemo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overlaysdemo-routing.module */ 11445);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/toast */ 74104);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dialog */ 93530);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/overlaypanel */ 88454);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 94267);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/confirmdialog */ 3904);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/sidebar */ 99246);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/ripple */ 44480);
/* harmony import */ var primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/confirmpopup */ 31494);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ 33259);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);
















let OverlaysDemoModule = /*#__PURE__*/(() => {
  class OverlaysDemoModule {
    static #_ = this.ɵfac = function OverlaysDemoModule_Factory(t) {
      return new (t || OverlaysDemoModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: OverlaysDemoModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _overlaysdemo_routing_module__WEBPACK_IMPORTED_MODULE_1__.OverlaysDemoRoutingModule, primeng_toast__WEBPACK_IMPORTED_MODULE_4__.ToastModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_5__.DialogModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_10__.OverlayPanelModule, primeng_table__WEBPACK_IMPORTED_MODULE_11__.TableModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__.ConfirmDialogModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__.SidebarModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_14__.RippleModule, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_15__.ConfirmPopupModule]
    });
  }
  return OverlaysDemoModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OverlaysDemoModule, {
    declarations: [_overlaysdemo_component__WEBPACK_IMPORTED_MODULE_0__.OverlaysDemoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _overlaysdemo_routing_module__WEBPACK_IMPORTED_MODULE_1__.OverlaysDemoRoutingModule, primeng_toast__WEBPACK_IMPORTED_MODULE_4__.ToastModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_5__.DialogModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_10__.OverlayPanelModule, primeng_table__WEBPACK_IMPORTED_MODULE_11__.TableModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__.ConfirmDialogModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__.SidebarModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_14__.RippleModule, primeng_confirmpopup__WEBPACK_IMPORTED_MODULE_15__.ConfirmPopupModule]
  });
})();

/***/ })

}]);