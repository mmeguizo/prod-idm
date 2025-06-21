"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[4586],{

/***/ 38877:
/*!***************************************************************!*\
  !*** ./src/app/demo/components/pages/pages-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesRoutingModule: () => (/* binding */ PagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);



let PagesRoutingModule = /*#__PURE__*/(() => {
  class PagesRoutingModule {
    static #_ = this.ɵfac = function PagesRoutingModule_Factory(t) {
      return new (t || PagesRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PagesRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild([{
        path: 'crud',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(1693), __webpack_require__.e(9502), __webpack_require__.e(3931), __webpack_require__.e(8592), __webpack_require__.e(7488)]).then(__webpack_require__.bind(__webpack_require__, /*! ./crud/crud.module */ 17488)).then(m => m.CrudModule)
      }, {
        path: 'empty',
        loadChildren: () => __webpack_require__.e(/*! import() */ 1157).then(__webpack_require__.bind(__webpack_require__, /*! ./empty/emptydemo.module */ 31157)).then(m => m.EmptyDemoModule)
      }, {
        path: 'timeline',
        loadChildren: () => __webpack_require__.e(/*! import() */ 1754).then(__webpack_require__.bind(__webpack_require__, /*! ./timeline/timelinedemo.module */ 1754)).then(m => m.TimelineDemoModule)
      }, {
        path: '**',
        redirectTo: '/notfound'
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
    });
  }
  return PagesRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 4586:
/*!*******************************************************!*\
  !*** ./src/app/demo/components/pages/pages.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesModule: () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages-routing.module */ 38877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 65879);



let PagesModule = /*#__PURE__*/(() => {
  class PagesModule {
    static #_ = this.ɵfac = function PagesModule_Factory(t) {
      return new (t || PagesModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PagesModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule]
    });
  }
  return PagesModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PagesModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule]
  });
})();

/***/ })

}]);