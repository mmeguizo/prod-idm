"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[1157],{

/***/ 85844:
/*!*************************************************************************!*\
  !*** ./src/app/demo/components/pages/empty/emptydemo-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyDemoRoutingModule: () => (/* binding */ EmptyDemoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var _emptydemo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emptydemo.component */ 45903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 65879);




let EmptyDemoRoutingModule = /*#__PURE__*/(() => {
  class EmptyDemoRoutingModule {
    static #_ = this.ɵfac = function EmptyDemoRoutingModule_Factory(t) {
      return new (t || EmptyDemoRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: EmptyDemoRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
        path: '',
        component: _emptydemo_component__WEBPACK_IMPORTED_MODULE_0__.EmptyDemoComponent
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
  return EmptyDemoRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EmptyDemoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 45903:
/*!********************************************************************!*\
  !*** ./src/app/demo/components/pages/empty/emptydemo.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyDemoComponent: () => (/* binding */ EmptyDemoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);

let EmptyDemoComponent = /*#__PURE__*/(() => {
  class EmptyDemoComponent {
    static #_ = this.ɵfac = function EmptyDemoComponent_Factory(t) {
      return new (t || EmptyDemoComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmptyDemoComponent,
      selectors: [["ng-component"]],
      decls: 7,
      vars: 0,
      consts: [[1, "grid"], [1, "col-12"], [1, "card"]],
      template: function EmptyDemoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Empty Page");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "This is your empty page template to start building beautiful applications.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
      },
      encapsulation: 2
    });
  }
  return EmptyDemoComponent;
})();

/***/ }),

/***/ 31157:
/*!*****************************************************************!*\
  !*** ./src/app/demo/components/pages/empty/emptydemo.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyDemoModule: () => (/* binding */ EmptyDemoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _emptydemo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emptydemo-routing.module */ 85844);
/* harmony import */ var _emptydemo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emptydemo.component */ 45903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);




let EmptyDemoModule = /*#__PURE__*/(() => {
  class EmptyDemoModule {
    static #_ = this.ɵfac = function EmptyDemoModule_Factory(t) {
      return new (t || EmptyDemoModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: EmptyDemoModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _emptydemo_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmptyDemoRoutingModule]
    });
  }
  return EmptyDemoModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EmptyDemoModule, {
    declarations: [_emptydemo_component__WEBPACK_IMPORTED_MODULE_1__.EmptyDemoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _emptydemo_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmptyDemoRoutingModule]
  });
})();

/***/ })

}]);