"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[2796],{

/***/ 65818:
/*!***************************************************************************!*\
  !*** ./src/app/demo/components/uikit/button/buttondemo-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonDemoRoutingModule: () => (/* binding */ ButtonDemoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var _buttondemo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttondemo.component */ 8634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 65879);




let ButtonDemoRoutingModule = /*#__PURE__*/(() => {
  class ButtonDemoRoutingModule {
    static #_ = this.ɵfac = function ButtonDemoRoutingModule_Factory(t) {
      return new (t || ButtonDemoRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ButtonDemoRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
        path: '',
        component: _buttondemo_component__WEBPACK_IMPORTED_MODULE_0__.ButtonDemoComponent
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
  return ButtonDemoRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ButtonDemoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 8634:
/*!**********************************************************************!*\
  !*** ./src/app/demo/components/uikit/button/buttondemo.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonDemoComponent: () => (/* binding */ ButtonDemoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/ripple */ 44480);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/splitbutton */ 49937);




let ButtonDemoComponent = /*#__PURE__*/(() => {
  class ButtonDemoComponent {
    constructor() {
      this.items = [];
      this.loading = [false, false, false, false];
    }
    ngOnInit() {
      this.items = [{
        label: 'Update',
        icon: 'pi pi-refresh'
      }, {
        label: 'Delete',
        icon: 'pi pi-times'
      }, {
        label: 'Angular.io',
        icon: 'pi pi-info',
        url: 'http://angular.io'
      }, {
        separator: true
      }, {
        label: 'Setup',
        icon: 'pi pi-cog'
      }];
    }
    load(index) {
      this.loading[index] = true;
      setTimeout(() => this.loading[index] = false, 1000);
    }
    static #_ = this.ɵfac = function ButtonDemoComponent_Factory(t) {
      return new (t || ButtonDemoComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ButtonDemoComponent,
      selectors: [["ng-component"]],
      decls: 140,
      vars: 9,
      consts: [[1, "grid"], [1, "col-12", "md:col-6"], [1, "card"], [1, "flex", "flex-wrap", "gap-2"], ["pButton", "", "pRipple", "", "label", "Submit"], ["pButton", "", "pRipple", "", "label", "Disabled", "disabled", "true"], ["label", "Link", "styleClass", "p-button-link"], ["pButton", "", "pRipple", "", "type", "button", "label", "Primary"], ["pButton", "", "pRipple", "", "type", "button", "label", "Secondary", 1, "p-button-secondary"], ["pButton", "", "pRipple", "", "type", "button", "label", "Success", 1, "p-button-success"], ["pButton", "", "pRipple", "", "type", "button", "label", "Info", 1, "p-button-info"], ["pButton", "", "pRipple", "", "type", "button", "label", "Warning", 1, "p-button-warning"], ["pButton", "", "pRipple", "", "type", "button", "label", "Help", 1, "p-button-help"], ["pButton", "", "pRipple", "", "type", "button", "label", "Danger", 1, "p-button-danger"], ["pButton", "", "pRipple", "", "type", "button", "label", "Primary", 1, "p-button-text"], ["pButton", "", "pRipple", "", "type", "button", "label", "Secondary", 1, "p-button-secondary", "p-button-text"], ["pButton", "", "pRipple", "", "type", "button", "label", "Success", 1, "p-button-success", "p-button-text"], ["pButton", "", "pRipple", "", "type", "button", "label", "Info", 1, "p-button-info", "p-button-text"], ["pButton", "", "pRipple", "", "type", "button", "label", "Warning", 1, "p-button-warning", "p-button-text"], ["pButton", "", "pRipple", "", "type", "button", "label", "Help", 1, "p-button-help", "p-button-text"], ["pButton", "", "pRipple", "", "type", "button", "label", "Danger", 1, "p-button-danger", "p-button-text"], ["pButton", "", "pRipple", "", "type", "button", "label", "Plain", 1, "p-button-text", "p-button-plain"], ["pButton", "", "pRipple", "", "type", "button", "label", "Primary", 1, "p-button-outlined"], ["pButton", "", "pRipple", "", "type", "button", "label", "Secondary", 1, "p-button-outlined", "p-button-secondary"], ["pButton", "", "pRipple", "", "type", "button", "label", "Success", 1, "p-button-outlined", "p-button-success"], ["pButton", "", "pRipple", "", "type", "button", "label", "Info", 1, "p-button-outlined", "p-button-info"], ["pButton", "", "pRipple", "", "type", "button", "label", "Warning", 1, "p-button-outlined", "p-button-warning"], ["pButton", "", "pRipple", "", "type", "button", "label", "Help", 1, "p-button-outlined", "p-button-help"], ["pButton", "", "pRipple", "", "type", "button", "label", "Danger", 1, "p-button-outlined", "p-button-danger"], [1, "p-buttonset"], ["pButton", "", "pRipple", "", "label", "Save", "icon", "pi pi-check"], ["pButton", "", "pRipple", "", "label", "Delete", "icon", "pi pi-trash"], ["label", "Save", "icon", "pi pi-plus", "styleClass", "p-button-info", 3, "model"], ["label", "Save", "icon", "pi pi-plus", "styleClass", "p-button-success", 3, "model"], ["label", "Save", "icon", "pi pi-plus", "styleClass", "p-button-warning", 3, "model"], ["label", "Save", "icon", "pi pi-plus", "styleClass", "p-button-help", 3, "model"], ["label", "Save", "icon", "pi pi-plus", "styleClass", "p-button-danger", 3, "model"], ["alt", "logo", "src", "https://primefaces.org/cdn/primeng/images/primeng-icon.svg", 2, "width", "1.5rem"], ["styleClass", "p-button-outlined"], [1, "ml-2", "font-bold"], ["pButton", "", "pRipple", "", "icon", "pi pi-star-fill"], ["pButton", "", "pRipple", "", "label", "Submit", "icon", "pi pi-bookmark"], ["pButton", "", "pRipple", "", "label", "Submit", "icon", "pi pi-bookmark", "iconPos", "right"], ["pButton", "", "pRipple", "", "type", "button", "label", "Primary", 1, "p-button-raised"], ["pButton", "", "pRipple", "", "type", "button", "label", "Secondary", 1, "p-button-raised", "p-button-secondary"], ["pButton", "", "pRipple", "", "type", "button", "label", "Success", 1, "p-button-raised", "p-button-success"], ["pButton", "", "pRipple", "", "type", "button", "label", "Info", 1, "p-button-raised", "p-button-info"], ["pButton", "", "pRipple", "", "type", "button", "label", "Warning", 1, "p-button-raised", "p-button-warning"], ["pButton", "", "pRipple", "", "type", "button", "label", "Help", 1, "p-button-raised", "p-button-help"], ["pButton", "", "pRipple", "", "type", "button", "label", "Danger", 1, "p-button-raised", "p-button-danger"], ["pButton", "", "pRipple", "", "type", "button", "label", "Primary", 1, "p-button-rounded"], ["pButton", "", "pRipple", "", "type", "button", "label", "Secondary", 1, "p-button-rounded", "p-button-secondary"], ["pButton", "", "pRipple", "", "type", "button", "label", "Success", 1, "p-button-rounded", "p-button-success"], ["pButton", "", "pRipple", "", "type", "button", "label", "Info", 1, "p-button-rounded", "p-button-info"], ["pButton", "", "pRipple", "", "type", "button", "label", "Warning", 1, "p-button-rounded", "p-button-warning"], ["pButton", "", "pRipple", "", "type", "button", "label", "Help", 1, "p-button-rounded", "p-button-help"], ["pButton", "", "pRipple", "", "type", "button", "label", "Danger", 1, "p-button-rounded", "p-button-danger"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-check", 1, "p-button-rounded"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-bookmark", 1, "p-button-rounded", "p-button-secondary"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-search", 1, "p-button-rounded", "p-button-success"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-user", 1, "p-button-rounded", "p-button-info"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-bell", 1, "p-button-rounded", "p-button-warning"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-heart", 1, "p-button-rounded", "p-button-help"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", 1, "p-button-rounded", "p-button-danger"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-check", 1, "p-button-rounded", "p-button-text"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-bookmark", 1, "p-button-rounded", "p-button-secondary", "p-button-text"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-search", 1, "p-button-rounded", "p-button-success", "p-button-text"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-user", 1, "p-button-rounded", "p-button-info", "p-button-text"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-bell", 1, "p-button-rounded", "p-button-warning", "p-button-text"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-heart", 1, "p-button-rounded", "p-button-help", "p-button-text"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", 1, "p-button-rounded", "p-button-danger", "p-button-text"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-filter", 1, "p-button-rounded", "p-button-text", "p-button-plain"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-check", 1, "p-button-rounded", "p-button-outlined"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-bookmark", 1, "p-button-rounded", "p-button-secondary", "p-button-outlined"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-search", 1, "p-button-rounded", "p-button-success", "p-button-outlined"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-user", 1, "p-button-rounded", "p-button-info", "p-button-outlined"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-bell", 1, "p-button-rounded", "p-button-warning", "p-button-outlined"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-heart", 1, "p-button-rounded", "p-button-help", "p-button-outlined"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-times", 1, "p-button-rounded", "p-button-danger", "p-button-outlined"], ["label", "Search", "icon", "pi pi-search", 3, "loading", "onClick"], ["label", "Search", "icon", "pi pi-search", "iconPos", "right", 3, "loading", "onClick"], ["icon", "pi pi-search", 3, "loading", "onClick"], ["label", "Search", 3, "loading", "onClick"]],
      template: function ButtonDemoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Default");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "button", 4)(7, "button", 5)(8, "p-button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2)(10, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Severities");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "button", 7)(14, "button", 8)(15, "button", 9)(16, "button", 10)(17, "button", 11)(18, "button", 12)(19, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2)(21, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Text");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "button", 14)(25, "button", 15)(26, "button", 16)(27, "button", 17)(28, "button", 18)(29, "button", 19)(30, "button", 20)(31, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2)(33, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Outlined");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "button", 22)(37, "button", 23)(38, "button", 24)(39, "button", 25)(40, "button", 26)(41, "button", 27)(42, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2)(44, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Button Set");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "button", 30)(48, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 2)(50, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "SplitButton");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "p-splitButton", 32)(54, "p-splitButton", 33)(55, "p-splitButton", 34)(56, "p-splitButton", 35)(57, "p-splitButton", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 2)(59, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Templating");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 3)(62, "p-button");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p-button", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "PrimeNG");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 1)(69, "div", 2)(70, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Icons");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "button", 40)(74, "button", 41)(75, "button", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 2)(77, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Raised");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "button", 43)(81, "button", 44)(82, "button", 45)(83, "button", 46)(84, "button", 47)(85, "button", 48)(86, "button", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 2)(88, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Rounded");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "button", 50)(92, "button", 51)(93, "button", 52)(94, "button", 53)(95, "button", 54)(96, "button", 55)(97, "button", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 2)(99, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Rounded Icons");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "button", 57)(103, "button", 58)(104, "button", 59)(105, "button", 60)(106, "button", 61)(107, "button", 62)(108, "button", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 2)(110, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Rounded Text");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "button", 64)(114, "button", 65)(115, "button", 66)(116, "button", 67)(117, "button", 68)(118, "button", 69)(119, "button", 70)(120, "button", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 2)(122, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Rounded Outlined");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "button", 72)(126, "button", 73)(127, "button", 74)(128, "button", 75)(129, "button", 76)(130, "button", 77)(131, "button", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 2)(133, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Loading");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 3)(136, "p-button", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function ButtonDemoComponent_Template_p_button_onClick_136_listener() {
            return ctx.load(0);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p-button", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function ButtonDemoComponent_Template_p_button_onClick_137_listener() {
            return ctx.load(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p-button", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function ButtonDemoComponent_Template_p_button_onClick_138_listener() {
            return ctx.load(2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p-button", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function ButtonDemoComponent_Template_p_button_onClick_139_listener() {
            return ctx.load(3);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](79);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.loading[0]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.loading[1]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.loading[2]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.loading[3]);
        }
      },
      dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_1__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_1__.Button, primeng_ripple__WEBPACK_IMPORTED_MODULE_2__.Ripple, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_3__.SplitButton],
      encapsulation: 2
    });
  }
  return ButtonDemoComponent;
})();

/***/ }),

/***/ 22796:
/*!*******************************************************************!*\
  !*** ./src/app/demo/components/uikit/button/buttondemo.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonDemoModule: () => (/* binding */ ButtonDemoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _buttondemo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttondemo-routing.module */ 65818);
/* harmony import */ var _buttondemo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttondemo.component */ 8634);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 44480);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/splitbutton */ 49937);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/togglebutton */ 46804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);








let ButtonDemoModule = /*#__PURE__*/(() => {
  class ButtonDemoModule {
    static #_ = this.ɵfac = function ButtonDemoModule_Factory(t) {
      return new (t || ButtonDemoModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ButtonDemoModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _buttondemo_routing_module__WEBPACK_IMPORTED_MODULE_0__.ButtonDemoRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__.SplitButtonModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_7__.ToggleButtonModule]
    });
  }
  return ButtonDemoModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ButtonDemoModule, {
    declarations: [_buttondemo_component__WEBPACK_IMPORTED_MODULE_1__.ButtonDemoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _buttondemo_routing_module__WEBPACK_IMPORTED_MODULE_0__.ButtonDemoRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_6__.SplitButtonModule, primeng_togglebutton__WEBPACK_IMPORTED_MODULE_7__.ToggleButtonModule]
  });
})();

/***/ })

}]);