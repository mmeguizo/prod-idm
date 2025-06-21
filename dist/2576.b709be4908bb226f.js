"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[2576],{

/***/ 97979:
/*!***********************************************************************!*\
  !*** ./src/app/demo/components/uikit/file/filedemo-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileDemoRoutingModule: () => (/* binding */ FileDemoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var _filedemo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filedemo.component */ 12489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 65879);




let FileDemoRoutingModule = /*#__PURE__*/(() => {
  class FileDemoRoutingModule {
    static #_ = this.ɵfac = function FileDemoRoutingModule_Factory(t) {
      return new (t || FileDemoRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: FileDemoRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
        path: '',
        component: _filedemo_component__WEBPACK_IMPORTED_MODULE_0__.FileDemoComponent
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
  return FileDemoRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FileDemoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 12489:
/*!******************************************************************!*\
  !*** ./src/app/demo/components/uikit/file/filedemo.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileDemoComponent: () => (/* binding */ FileDemoComponent)
/* harmony export */ });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/fileupload */ 13931);





function FileDemoComponent_ng_template_6_ul_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", file_r3.name, " - ", file_r3.size, " bytes");
  }
}
function FileDemoComponent_ng_template_6_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FileDemoComponent_ng_template_6_ul_0_li_1_Template, 2, 2, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.uploadedFiles);
  }
}
function FileDemoComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FileDemoComponent_ng_template_6_ul_0_Template, 2, 1, "ul", 6);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.uploadedFiles.length);
  }
}
let FileDemoComponent = /*#__PURE__*/(() => {
  class FileDemoComponent {
    constructor(messageService) {
      this.messageService = messageService;
      this.uploadedFiles = [];
    }
    onUpload(event) {
      for (const file of event.files) {
        this.uploadedFiles.push(file);
      }
      this.messageService.add({
        severity: 'info',
        summary: 'Success',
        detail: 'File Uploaded'
      });
    }
    onBasicUpload() {
      this.messageService.add({
        severity: 'info',
        summary: 'Success',
        detail: 'File Uploaded with Basic Mode'
      });
    }
    static #_ = this.ɵfac = function FileDemoComponent_Factory(t) {
      return new (t || FileDemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_1__.MessageService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FileDemoComponent,
      selectors: [["ng-component"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_1__.MessageService])],
      decls: 10,
      vars: 3,
      consts: [[1, "grid"], [1, "col-12"], [1, "card"], ["name", "demo[]", "url", "./upload.php", "accept", "image/*", 3, "multiple", "maxFileSize", "onUpload"], ["pTemplate", "content"], ["mode", "basic", "name", "demo[]", "url", "./upload.php", "accept", "image/*", 3, "maxFileSize", "onUpload"], [4, "ngIf"], [4, "ngFor", "ngForOf"]],
      template: function FileDemoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Advanced");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-fileUpload", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onUpload", function FileDemoComponent_Template_p_fileUpload_onUpload_5_listener($event) {
            return ctx.onUpload($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FileDemoComponent_ng_template_6_Template, 1, 1, "ng-template", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p-fileUpload", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onUpload", function FileDemoComponent_Template_p_fileUpload_onUpload_9_listener() {
            return ctx.onBasicUpload();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multiple", true)("maxFileSize", 1000000);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxFileSize", 1000000);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, primeng_fileupload__WEBPACK_IMPORTED_MODULE_3__.FileUpload, primeng_api__WEBPACK_IMPORTED_MODULE_1__.PrimeTemplate],
      encapsulation: 2
    });
  }
  return FileDemoComponent;
})();

/***/ }),

/***/ 52576:
/*!***************************************************************!*\
  !*** ./src/app/demo/components/uikit/file/filedemo.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileDemoModule: () => (/* binding */ FileDemoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/fileupload */ 13931);
/* harmony import */ var _filedemo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filedemo-routing.module */ 97979);
/* harmony import */ var _filedemo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filedemo.component */ 12489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);






let FileDemoModule = /*#__PURE__*/(() => {
  class FileDemoModule {
    static #_ = this.ɵfac = function FileDemoModule_Factory(t) {
      return new (t || FileDemoModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: FileDemoModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _filedemo_routing_module__WEBPACK_IMPORTED_MODULE_0__.FileDemoRoutingModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__.FileUploadModule]
    });
  }
  return FileDemoModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FileDemoModule, {
    declarations: [_filedemo_component__WEBPACK_IMPORTED_MODULE_1__.FileDemoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _filedemo_routing_module__WEBPACK_IMPORTED_MODULE_0__.FileDemoRoutingModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__.FileUploadModule]
  });
})();

/***/ })

}]);