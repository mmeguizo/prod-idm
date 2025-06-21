"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[4551],{

/***/ 90028:
/*!***********************************************************************!*\
  !*** ./src/app/demo/components/uikit/tree/treedemo-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TreeDemoRoutingModule: () => (/* binding */ TreeDemoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var _treedemo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./treedemo.component */ 35850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 65879);




let TreeDemoRoutingModule = /*#__PURE__*/(() => {
  class TreeDemoRoutingModule {
    static #_ = this.ɵfac = function TreeDemoRoutingModule_Factory(t) {
      return new (t || TreeDemoRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: TreeDemoRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
        path: '',
        component: _treedemo_component__WEBPACK_IMPORTED_MODULE_0__.TreeDemoComponent
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
  return TreeDemoRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TreeDemoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 35850:
/*!******************************************************************!*\
  !*** ./src/app/demo/components/uikit/tree/treedemo.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TreeDemoComponent: () => (/* binding */ TreeDemoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var src_app_demo_service_node_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/node.service */ 51609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/tree */ 3745);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/treetable */ 63514);






function TreeDemoComponent_ng_template_11_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", col_r4.header, " ");
  }
}
function TreeDemoComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TreeDemoComponent_ng_template_11_th_1_Template, 2, 1, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columns_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", columns_r2);
  }
}
function TreeDemoComponent_ng_template_12_td_1_p_treeTableToggler_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-treeTableToggler", 11);
  }
  if (rf & 2) {
    const rowNode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowNode", rowNode_r5);
  }
}
function TreeDemoComponent_ng_template_12_td_1_p_treeTableCheckbox_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-treeTableCheckbox", 12);
  }
  if (rf & 2) {
    const rowNode_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", rowNode_r5);
  }
}
function TreeDemoComponent_ng_template_12_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TreeDemoComponent_ng_template_12_td_1_p_treeTableToggler_1_Template, 1, 1, "p-treeTableToggler", 9)(2, TreeDemoComponent_ng_template_12_td_1_p_treeTableCheckbox_2_Template, 1, 1, "p-treeTableCheckbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const rowData_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().rowData;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r10 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r10 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", rowData_r6[col_r9.field], " ");
  }
}
function TreeDemoComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TreeDemoComponent_ng_template_12_td_1_Template, 4, 3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columns_r7 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", columns_r7);
  }
}
let TreeDemoComponent = /*#__PURE__*/(() => {
  class TreeDemoComponent {
    constructor(nodeService) {
      this.nodeService = nodeService;
      this.files1 = [];
      this.files2 = [];
      this.files3 = [];
      this.selectedFiles1 = [];
      this.selectedFiles2 = [];
      this.selectedFiles3 = {};
      this.cols = [];
    }
    ngOnInit() {
      this.nodeService.getFiles().then(files => this.files1 = files);
      this.nodeService.getFilesystem().then(files => this.files2 = files);
      this.nodeService.getFiles().then(files => {
        this.files3 = [{
          label: 'Root',
          children: files
        }];
      });
      this.cols = [{
        field: 'name',
        header: 'Name'
      }, {
        field: 'size',
        header: 'Size'
      }, {
        field: 'type',
        header: 'Type'
      }];
    }
    static #_ = this.ɵfac = function TreeDemoComponent_Factory(t) {
      return new (t || TreeDemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_demo_service_node_service__WEBPACK_IMPORTED_MODULE_0__.NodeService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TreeDemoComponent,
      selectors: [["ng-component"]],
      decls: 18,
      vars: 7,
      consts: [[1, "grid"], [1, "col-12"], [1, "card"], ["selectionMode", "checkbox", 3, "value", "selection", "selectionChange"], ["selectionMode", "checkbox", 3, "value", "columns", "selection", "selectionChange"], ["pTemplate", "header"], ["pTemplate", "body"], ["layout", "horizontal", "selectionMode", "single", 3, "value", "selection", "selectionChange"], [4, "ngFor", "ngForOf"], [3, "rowNode", 4, "ngIf"], [3, "value", 4, "ngIf"], [3, "rowNode"], [3, "value"]],
      template: function TreeDemoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Tree");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-tree", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function TreeDemoComponent_Template_p_tree_selectionChange_5_listener($event) {
            return ctx.selectedFiles1 = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1)(7, "div", 2)(8, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "TreeTable");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p-treeTable", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function TreeDemoComponent_Template_p_treeTable_selectionChange_10_listener($event) {
            return ctx.selectedFiles2 = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TreeDemoComponent_ng_template_11_Template, 2, 1, "ng-template", 5)(12, TreeDemoComponent_ng_template_12_Template, 2, 1, "ng-template", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 1)(14, "div", 2)(15, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Horizontal Tree");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p-tree", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function TreeDemoComponent_Template_p_tree_selectionChange_17_listener($event) {
            return ctx.selectedFiles3 = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.files1)("selection", ctx.selectedFiles1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.files2)("columns", ctx.cols)("selection", ctx.selectedFiles2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.files3)("selection", ctx.selectedFiles3);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, primeng_tree__WEBPACK_IMPORTED_MODULE_3__.Tree, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_treetable__WEBPACK_IMPORTED_MODULE_5__.TreeTable, primeng_treetable__WEBPACK_IMPORTED_MODULE_5__.TreeTableToggler, primeng_treetable__WEBPACK_IMPORTED_MODULE_5__.TTCheckbox],
      encapsulation: 2
    });
  }
  return TreeDemoComponent;
})();

/***/ }),

/***/ 84551:
/*!***************************************************************!*\
  !*** ./src/app/demo/components/uikit/tree/treedemo.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TreeDemoModule: () => (/* binding */ TreeDemoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var _treedemo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./treedemo.component */ 35850);
/* harmony import */ var _treedemo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./treedemo-routing.module */ 90028);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tree */ 3745);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/treetable */ 63514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);







let TreeDemoModule = /*#__PURE__*/(() => {
  class TreeDemoModule {
    static #_ = this.ɵfac = function TreeDemoModule_Factory(t) {
      return new (t || TreeDemoModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: TreeDemoModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _treedemo_routing_module__WEBPACK_IMPORTED_MODULE_1__.TreeDemoRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, primeng_tree__WEBPACK_IMPORTED_MODULE_5__.TreeModule, primeng_treetable__WEBPACK_IMPORTED_MODULE_6__.TreeTableModule]
    });
  }
  return TreeDemoModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TreeDemoModule, {
    declarations: [_treedemo_component__WEBPACK_IMPORTED_MODULE_0__.TreeDemoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _treedemo_routing_module__WEBPACK_IMPORTED_MODULE_1__.TreeDemoRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, primeng_tree__WEBPACK_IMPORTED_MODULE_5__.TreeModule, primeng_treetable__WEBPACK_IMPORTED_MODULE_6__.TreeTableModule]
  });
})();

/***/ }),

/***/ 31604:
/*!***************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-minus.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinusIcon: () => (/* binding */ MinusIcon)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 84713);




let MinusIcon = /*#__PURE__*/(() => {
  class MinusIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    static ɵfac = /* @__PURE__ */(() => {
      let ɵMinusIcon_BaseFactory;
      return function MinusIcon_Factory(t) {
        return (ɵMinusIcon_BaseFactory || (ɵMinusIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MinusIcon)))(t || MinusIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MinusIcon,
      selectors: [["MinusIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 5,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z", "fill", "currentColor"]],
      template: function MinusIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      encapsulation: 2
    });
  }
  return MinusIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-icons-minus.mjs.map

/***/ }),

/***/ 3983:
/*!**************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-plus.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlusIcon: () => (/* binding */ PlusIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 84713);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 2332);




let PlusIcon = /*#__PURE__*/(() => {
  class PlusIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵPlusIcon_BaseFactory;
      return function PlusIcon_Factory(t) {
        return (ɵPlusIcon_BaseFactory || (ɵPlusIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](PlusIcon)))(t || PlusIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PlusIcon,
      selectors: [["PlusIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function PlusIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0)(1, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "path", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "defs")(4, "clipPath", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "rect", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getClassNames());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("clip-path", ctx.pathId);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.pathId);
        }
      },
      encapsulation: 2
    });
  }
  return PlusIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-icons-plus.mjs.map

/***/ }),

/***/ 3745:
/*!********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-tree.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tree: () => (/* binding */ Tree),
/* harmony export */   TreeModule: () => (/* binding */ TreeModule),
/* harmony export */   UITreeNode: () => (/* binding */ UITreeNode)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dom */ 82076);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/ripple */ 44480);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/scroller */ 26489);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/utils */ 2332);
/* harmony import */ var primeng_icons_check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/icons/check */ 12591);
/* harmony import */ var primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/chevrondown */ 76005);
/* harmony import */ var primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/chevronright */ 44562);
/* harmony import */ var primeng_icons_minus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/minus */ 31604);
/* harmony import */ var primeng_icons_plus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/plus */ 3983);
/* harmony import */ var primeng_icons_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/icons/search */ 32324);
/* harmony import */ var primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/icons/spinner */ 78717);



















const _c0 = a0 => ({
  "p-treenode-droppoint-active": a0
});
function UITreeNode_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function UITreeNode_ng_template_0_li_0_Template_li_drop_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.onDropPoint($event, -1));
    })("dragover", function UITreeNode_ng_template_0_li_0_Template_li_dragover_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onDropPointDragOver($event));
    })("dragenter", function UITreeNode_ng_template_0_li_0_Template_li_dragenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onDropPointDragEnter($event, -1));
    })("dragleave", function UITreeNode_ng_template_0_li_0_Template_li_dragleave_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.onDropPointDragLeave($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r1.draghoverPrev));
  }
}
function UITreeNode_ng_template_0_li_1_ng_container_3_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronRightIcon", 14);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-tree-toggler-icon");
  }
}
function UITreeNode_ng_template_0_li_1_ng_container_3_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon", 14);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-tree-toggler-icon");
  }
}
function UITreeNode_ng_template_0_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UITreeNode_ng_template_0_li_1_ng_container_3_ChevronRightIcon_1_Template, 1, 1, "ChevronRightIcon", 13)(2, UITreeNode_ng_template_0_li_1_ng_container_3_ChevronDownIcon_2_Template, 1, 1, "ChevronDownIcon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.node.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.node.expanded);
  }
}
function UITreeNode_ng_template_0_li_1_span_4_1_ng_template_0_Template(rf, ctx) {}
function UITreeNode_ng_template_0_li_1_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UITreeNode_ng_template_0_li_1_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c1 = a0 => ({
  $implicit: a0
});
function UITreeNode_ng_template_0_li_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UITreeNode_ng_template_0_li_1_span_4_1_Template, 1, 0, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r11.tree.togglerIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r11.node.expanded));
  }
}
function UITreeNode_ng_template_0_li_1_div_5_ng_container_2_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "CheckIcon", 14);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-checkbox-icon");
  }
}
function UITreeNode_ng_template_0_li_1_div_5_ng_container_2_MinusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "MinusIcon", 14);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-checkbox-icon");
  }
}
function UITreeNode_ng_template_0_li_1_div_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UITreeNode_ng_template_0_li_1_div_5_ng_container_2_CheckIcon_1_Template, 1, 1, "CheckIcon", 13)(2, UITreeNode_ng_template_0_li_1_div_5_ng_container_2_MinusIcon_2_Template, 1, 1, "MinusIcon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r21.node.partialSelected && ctx_r21.isSelected());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r21.node.partialSelected);
  }
}
function UITreeNode_ng_template_0_li_1_div_5_3_ng_template_0_Template(rf, ctx) {}
function UITreeNode_ng_template_0_li_1_div_5_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UITreeNode_ng_template_0_li_1_div_5_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c2 = a0 => ({
  "p-checkbox-disabled": a0
});
const _c3 = (a0, a1) => ({
  "p-highlight": a0,
  "p-indeterminate": a1
});
const _c4 = (a0, a1) => ({
  $implicit: a0,
  partialSelected: a1
});
function UITreeNode_ng_template_0_li_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UITreeNode_ng_template_0_li_1_div_5_ng_container_2_Template, 3, 2, "ng-container", 8)(3, UITreeNode_ng_template_0_li_1_div_5_3_Template, 1, 0, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r12.node.selectable === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c3, ctx_r12.isSelected(), ctx_r12.node.partialSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r12.tree.checkboxIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r12.tree.checkboxIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c4, ctx_r12.isSelected(), ctx_r12.node.partialSelected));
  }
}
function UITreeNode_ng_template_0_li_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r13.getIcon());
  }
}
function UITreeNode_ng_template_0_li_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.node.label);
  }
}
function UITreeNode_ng_template_0_li_1_span_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function UITreeNode_ng_template_0_li_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UITreeNode_ng_template_0_li_1_span_9_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r15.tree.getTemplateForNode(ctx_r15.node))("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r15.node));
  }
}
function UITreeNode_ng_template_0_li_1_ul_10_p_treeNode_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-treeNode", 21);
  }
  if (rf & 2) {
    const childNode_r28 = ctx.$implicit;
    const firstChild_r29 = ctx.first;
    const lastChild_r30 = ctx.last;
    const index_r31 = ctx.index;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", childNode_r28)("parentNode", ctx_r27.node)("firstChild", firstChild_r29)("lastChild", lastChild_r30)("index", index_r31)("itemSize", ctx_r27.itemSize)("level", ctx_r27.level + 1);
  }
}
function UITreeNode_ng_template_0_li_1_ul_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UITreeNode_ng_template_0_li_1_ul_10_p_treeNode_1_Template, 1, 7, "p-treeNode", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r16.node.expanded ? "block" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.node.children)("ngForTrackBy", ctx_r16.tree.trackBy);
  }
}
const _c5 = (a1, a2) => ["p-treenode", a1, a2];
const _c6 = a0 => ({
  height: a0
});
const _c7 = (a0, a1, a2) => ({
  "p-treenode-selectable": a0,
  "p-treenode-dragover": a1,
  "p-highlight": a2
});
function UITreeNode_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function UITreeNode_ng_template_0_li_1_Template_li_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r32.onKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UITreeNode_ng_template_0_li_1_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r34.onNodeClick($event));
    })("contextmenu", function UITreeNode_ng_template_0_li_1_Template_div_contextmenu_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r35.onNodeRightClick($event));
    })("touchend", function UITreeNode_ng_template_0_li_1_Template_div_touchend_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r36.onNodeTouchEnd());
    })("drop", function UITreeNode_ng_template_0_li_1_Template_div_drop_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r37.onDropNode($event));
    })("dragover", function UITreeNode_ng_template_0_li_1_Template_div_dragover_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r38.onDropNodeDragOver($event));
    })("dragenter", function UITreeNode_ng_template_0_li_1_Template_div_dragenter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r39.onDropNodeDragEnter($event));
    })("dragleave", function UITreeNode_ng_template_0_li_1_Template_div_dragleave_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r40.onDropNodeDragLeave($event));
    })("dragstart", function UITreeNode_ng_template_0_li_1_Template_div_dragstart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r41.onDragStart($event));
    })("dragend", function UITreeNode_ng_template_0_li_1_Template_div_dragend_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r42.onDragStop($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UITreeNode_ng_template_0_li_1_Template_button_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r43.toggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UITreeNode_ng_template_0_li_1_ng_container_3_Template, 3, 2, "ng-container", 8)(4, UITreeNode_ng_template_0_li_1_span_4_Template, 2, 4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UITreeNode_ng_template_0_li_1_div_5_Template, 4, 13, "div", 10)(6, UITreeNode_ng_template_0_li_1_span_6_Template, 1, 2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UITreeNode_ng_template_0_li_1_span_8_Template, 2, 1, "span", 8)(9, UITreeNode_ng_template_0_li_1_span_9_Template, 2, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UITreeNode_ng_template_0_li_1_ul_10_Template, 2, 4, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r2.node.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c5, ctx_r2.node.styleClass || "", ctx_r2.isLeaf() ? "p-treenode-leaf" : ""))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c6, ctx_r2.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r2.node.label)("aria-checked", ctx_r2.ariaChecked)("aria-setsize", ctx_r2.node.children ? ctx_r2.node.children.length : 0)("aria-selected", ctx_r2.ariaSelected)("aria-expanded", ctx_r2.node.expanded)("aria-posinset", ctx_r2.index + 1)("aria-level", ctx_r2.level)("tabindex", ctx_r2.index === 0 ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-left", ctx_r2.level * ctx_r2.indentation + "rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("draggable", ctx_r2.tree.draggableNodes)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](29, _c7, ctx_r2.tree.selectionMode && ctx_r2.node.selectable !== false, ctx_r2.draghoverNode, ctx_r2.isSelected()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "toggler");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.tree.togglerIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.tree.togglerIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.tree.selectionMode == "checkbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.node.icon || ctx_r2.node.expandedIcon || ctx_r2.node.collapsedIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.tree.getTemplateForNode(ctx_r2.node));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.tree.getTemplateForNode(ctx_r2.node));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.tree.virtualScroll && ctx_r2.node.children && ctx_r2.node.expanded);
  }
}
function UITreeNode_ng_template_0_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function UITreeNode_ng_template_0_li_2_Template_li_drop_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r44.onDropPoint($event, 1));
    })("dragover", function UITreeNode_ng_template_0_li_2_Template_li_dragover_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r46.onDropPointDragOver($event));
    })("dragenter", function UITreeNode_ng_template_0_li_2_Template_li_dragenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r47.onDropPointDragEnter($event, 1));
    })("dragleave", function UITreeNode_ng_template_0_li_2_Template_li_dragleave_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r48.onDropPointDragLeave($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r3.draghoverNext));
  }
}
const _c8 = a0 => ({
  "p-treenode-connector-line": a0
});
function UITreeNode_ng_template_0_table_3_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 27)(1, "table", 28)(2, "tbody")(3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c8, !ctx_r49.firstChild));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c8, !ctx_r49.lastChild));
  }
}
function UITreeNode_ng_template_0_table_3_span_6_ng_container_1_PlusIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "PlusIcon", 32);
  }
  if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-tree-toggler-icon")("ariaLabel", ctx_r57.tree.togglerAriaLabel);
  }
}
function UITreeNode_ng_template_0_table_3_span_6_ng_container_1_MinusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "MinusIcon", 32);
  }
  if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-tree-toggler-icon")("ariaLabel", ctx_r58.tree.togglerAriaLabel);
  }
}
function UITreeNode_ng_template_0_table_3_span_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UITreeNode_ng_template_0_table_3_span_6_ng_container_1_PlusIcon_1_Template, 1, 2, "PlusIcon", 31)(2, UITreeNode_ng_template_0_table_3_span_6_ng_container_1_MinusIcon_2_Template, 1, 2, "MinusIcon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r55.node.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r55.node.expanded);
  }
}
function UITreeNode_ng_template_0_table_3_span_6_span_2_1_ng_template_0_Template(rf, ctx) {}
function UITreeNode_ng_template_0_table_3_span_6_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UITreeNode_ng_template_0_table_3_span_6_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function UITreeNode_ng_template_0_table_3_span_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UITreeNode_ng_template_0_table_3_span_6_span_2_1_Template, 1, 0, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r56.tree.togglerIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r56.node.expanded));
  }
}
function UITreeNode_ng_template_0_table_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UITreeNode_ng_template_0_table_3_span_6_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r61.toggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UITreeNode_ng_template_0_table_3_span_6_ng_container_1_Template, 3, 2, "ng-container", 8)(2, UITreeNode_ng_template_0_table_3_span_6_span_2_Template, 2, 4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-tree-toggler");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r50.tree.togglerIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r50.tree.togglerIconTemplate);
  }
}
function UITreeNode_ng_template_0_table_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
  }
  if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r51.getIcon());
  }
}
function UITreeNode_ng_template_0_table_3_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r52.node.label);
  }
}
function UITreeNode_ng_template_0_table_3_span_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function UITreeNode_ng_template_0_table_3_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UITreeNode_ng_template_0_table_3_span_10_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r53.tree.getTemplateForNode(ctx_r53.node))("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r53.node));
  }
}
function UITreeNode_ng_template_0_table_3_td_11_p_treeNode_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-treeNode", 36);
  }
  if (rf & 2) {
    const childNode_r65 = ctx.$implicit;
    const firstChild_r66 = ctx.first;
    const lastChild_r67 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", childNode_r65)("firstChild", firstChild_r66)("lastChild", lastChild_r67);
  }
}
function UITreeNode_ng_template_0_table_3_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33)(1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UITreeNode_ng_template_0_table_3_td_11_p_treeNode_2_Template, 1, 3, "p-treeNode", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r54.node.expanded ? "table-cell" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r54.node.children)("ngForTrackBy", ctx_r54.tree.trackBy);
  }
}
const _c9 = a0 => ({
  "p-treenode-collapsed": a0
});
const _c10 = (a0, a1) => ({
  "p-treenode-selectable": a0,
  "p-highlight": a1
});
function UITreeNode_ng_template_0_table_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table")(1, "tbody")(2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UITreeNode_ng_template_0_table_3_td_3_Template, 7, 6, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 23)(5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UITreeNode_ng_template_0_table_3_Template_div_click_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r68.onNodeClick($event));
    })("contextmenu", function UITreeNode_ng_template_0_table_3_Template_div_contextmenu_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r70.onNodeRightClick($event));
    })("touchend", function UITreeNode_ng_template_0_table_3_Template_div_touchend_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r71.onNodeTouchEnd());
    })("keydown", function UITreeNode_ng_template_0_table_3_Template_div_keydown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r72.onNodeKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UITreeNode_ng_template_0_table_3_span_6_Template, 3, 3, "span", 25)(7, UITreeNode_ng_template_0_table_3_span_7_Template, 1, 2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UITreeNode_ng_template_0_table_3_span_9_Template, 2, 1, "span", 8)(10, UITreeNode_ng_template_0_table_3_span_10_Template, 2, 4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UITreeNode_ng_template_0_table_3_td_11_Template, 3, 4, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r4.node.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.root);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c9, !ctx_r4.node.expanded));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c10, ctx_r4.tree.selectionMode, ctx_r4.isSelected()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isLeaf());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.node.icon || ctx_r4.node.expandedIcon || ctx_r4.node.collapsedIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.tree.getTemplateForNode(ctx_r4.node));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.tree.getTemplateForNode(ctx_r4.node));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.node.children && ctx_r4.node.expanded);
  }
}
function UITreeNode_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UITreeNode_ng_template_0_li_0_Template, 1, 3, "li", 1)(1, UITreeNode_ng_template_0_li_1_Template, 11, 33, "li", 2)(2, UITreeNode_ng_template_0_li_2_Template, 1, 3, "li", 1)(3, UITreeNode_ng_template_0_table_3_Template, 12, 15, "table", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.tree.droppableNodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.tree.horizontal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.tree.droppableNodes && ctx_r0.lastChild);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.tree.horizontal);
  }
}
const _c11 = ["filter"];
const _c12 = ["scroller"];
const _c13 = ["wrapper"];
function Tree_div_0_div_1_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("p-tree-loading-icon pi-spin " + ctx_r9.loadingIcon);
  }
}
function Tree_div_0_div_1_ng_container_2_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SpinnerIcon", 13);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("spin", true)("styleClass", "p-tree-loading-icon");
  }
}
function Tree_div_0_div_1_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {}
function Tree_div_0_div_1_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Tree_div_0_div_1_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tree_div_0_div_1_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tree_div_0_div_1_ng_container_2_span_2_1_Template, 1, 0, null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r12.loadingIconTemplate);
  }
}
function Tree_div_0_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tree_div_0_div_1_ng_container_2_SpinnerIcon_1_Template, 1, 2, "SpinnerIcon", 11)(2, Tree_div_0_div_1_ng_container_2_span_2_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.loadingIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.loadingIconTemplate);
  }
}
function Tree_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tree_div_0_div_1_i_1_Template, 1, 2, "i", 10)(2, Tree_div_0_div_1_ng_container_2_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.loadingIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.loadingIcon);
  }
}
function Tree_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Tree_div_0_div_3_SearchIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SearchIcon", 20);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-tree-filter-icon");
  }
}
function Tree_div_0_div_3_span_4_1_ng_template_0_Template(rf, ctx) {}
function Tree_div_0_div_3_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Tree_div_0_div_3_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tree_div_0_div_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tree_div_0_div_3_span_4_1_Template, 1, 0, null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r17.filterIconTemplate);
  }
}
function Tree_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15)(1, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function Tree_div_0_div_3_Template_input_keydown_enter_1_listener($event) {
      return $event.preventDefault();
    })("input", function Tree_div_0_div_3_Template_input_input_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21._filter($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Tree_div_0_div_3_SearchIcon_3_Template, 1, 1, "SearchIcon", 18)(4, Tree_div_0_div_3_span_4_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("placeholder", ctx_r4.filterPlaceholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.filterIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.filterIconTemplate);
  }
}
function Tree_div_0_p_scroller_4_ng_template_2_ul_0_p_treeNode_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-treeNode", 28, 29);
  }
  if (rf & 2) {
    const rowNode_r30 = ctx.$implicit;
    const firstChild_r31 = ctx.first;
    const lastChild_r32 = ctx.last;
    const index_r33 = ctx.index;
    const scrollerOptions_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).options;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("level", rowNode_r30.level)("rowNode", rowNode_r30)("node", rowNode_r30.node)("firstChild", firstChild_r31)("lastChild", lastChild_r32)("index", ctx_r29.getIndex(scrollerOptions_r27, index_r33))("itemSize", scrollerOptions_r27.itemSize)("indentation", ctx_r29.indentation);
  }
}
function Tree_div_0_p_scroller_4_ng_template_2_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tree_div_0_p_scroller_4_ng_template_2_ul_0_p_treeNode_1_Template, 2, 8, "p-treeNode", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const scrollerOptions_r27 = ctx_r36.options;
    const items_r26 = ctx_r36.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](scrollerOptions_r27.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", scrollerOptions_r27.contentStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r28.ariaLabel)("aria-labelledby", ctx_r28.ariaLabelledBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r26)("ngForTrackBy", ctx_r28.trackBy);
  }
}
function Tree_div_0_p_scroller_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Tree_div_0_p_scroller_4_ng_template_2_ul_0_Template, 2, 7, "ul", 25);
  }
  if (rf & 2) {
    const items_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r26);
  }
}
function Tree_div_0_p_scroller_4_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c14 = a0 => ({
  options: a0
});
function Tree_div_0_p_scroller_4_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Tree_div_0_p_scroller_4_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 31);
  }
  if (rf & 2) {
    const scrollerOptions_r38 = ctx.options;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r37.loaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c14, scrollerOptions_r38));
  }
}
function Tree_div_0_p_scroller_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tree_div_0_p_scroller_4_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function Tree_div_0_p_scroller_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-scroller", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onScroll", function Tree_div_0_p_scroller_4_Template_p_scroller_onScroll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r40.onScroll.emit($event));
    })("onScrollIndexChange", function Tree_div_0_p_scroller_4_Template_p_scroller_onScrollIndexChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r42.onScrollIndexChange.emit($event));
    })("onLazyLoad", function Tree_div_0_p_scroller_4_Template_p_scroller_onLazyLoad_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r43.onLazyLoad.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Tree_div_0_p_scroller_4_ng_template_2_Template, 1, 1, "ng-template", 24)(3, Tree_div_0_p_scroller_4_ng_container_3_Template, 2, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c6, ctx_r5.scrollHeight !== "flex" ? ctx_r5.scrollHeight : undefined));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r5.serializedValue)("tabindex", -1)("scrollHeight", ctx_r5.scrollHeight !== "flex" ? undefined : "100%")("itemSize", ctx_r5.virtualScrollItemSize || ctx_r5._virtualNodeHeight)("lazy", ctx_r5.lazy)("options", ctx_r5.virtualScrollOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.loaderTemplate);
  }
}
function Tree_div_0_ng_container_5_ul_3_p_treeNode_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-treeNode", 37);
  }
  if (rf & 2) {
    const node_r47 = ctx.$implicit;
    const firstChild_r48 = ctx.first;
    const lastChild_r49 = ctx.last;
    const index_r50 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", node_r47)("firstChild", firstChild_r48)("lastChild", lastChild_r49)("index", index_r50)("level", 0);
  }
}
function Tree_div_0_ng_container_5_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tree_div_0_ng_container_5_ul_3_p_treeNode_1_Template, 1, 5, "p-treeNode", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r45.ariaLabel)("aria-labelledby", ctx_r45.ariaLabelledBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r45.getRootNode())("ngForTrackBy", ctx_r45.trackBy);
  }
}
function Tree_div_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Tree_div_0_ng_container_5_ul_3_Template, 2, 4, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r6.scrollHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.getRootNode());
  }
}
function Tree_div_0_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r51.emptyMessageLabel, " ");
  }
}
function Tree_div_0_div_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 40);
  }
}
function Tree_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tree_div_0_div_6_ng_container_1_Template, 2, 1, "ng-container", 39)(2, Tree_div_0_div_6_ng_container_2_Template, 2, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.emptyMessageTemplate)("ngIfElse", ctx_r7.emptyFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.emptyMessageTemplate);
  }
}
function Tree_div_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c15 = (a1, a2, a3, a4) => ({
  "p-tree p-component": true,
  "p-tree-selectable": a1,
  "p-treenode-dragover": a2,
  "p-tree-loading": a3,
  "p-tree-flex-scrollable": a4
});
function Tree_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function Tree_div_0_Template_div_drop_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r54.onDrop($event));
    })("dragover", function Tree_div_0_Template_div_dragover_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r56.onDragOver($event));
    })("dragenter", function Tree_div_0_Template_div_dragenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r57.onDragEnter());
    })("dragleave", function Tree_div_0_Template_div_dragleave_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r58.onDragLeave($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tree_div_0_div_1_Template, 3, 2, "div", 3)(2, Tree_div_0_ng_container_2_Template, 1, 0, "ng-container", 4)(3, Tree_div_0_div_3_Template, 5, 3, "div", 5)(4, Tree_div_0_p_scroller_4_Template, 4, 11, "p-scroller", 6)(5, Tree_div_0_ng_container_5_Template, 4, 3, "ng-container", 7)(6, Tree_div_0_div_6_Template, 3, 3, "div", 8)(7, Tree_div_0_ng_container_7_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](11, _c15, ctx_r0.selectionMode, ctx_r0.dragHover, ctx_r0.loading, ctx_r0.scrollHeight === "flex"))("ngStyle", ctx_r0.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.filter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.virtualScroll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.virtualScroll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loading && (ctx_r0.getRootNode() == null || ctx_r0.getRootNode().length === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.footerTemplate);
  }
}
function Tree_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Tree_div_1_div_2_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("p-tree-loading-icon pi-spin " + ctx_r64.loadingIcon);
  }
}
function Tree_div_1_div_2_ng_container_2_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SpinnerIcon", 13);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("spin", true)("styleClass", "p-tree-loading-icon");
  }
}
function Tree_div_1_div_2_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {}
function Tree_div_1_div_2_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Tree_div_1_div_2_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tree_div_1_div_2_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tree_div_1_div_2_ng_container_2_span_2_1_Template, 1, 0, null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r67.loadingIconTemplate);
  }
}
function Tree_div_1_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tree_div_1_div_2_ng_container_2_SpinnerIcon_1_Template, 1, 2, "SpinnerIcon", 11)(2, Tree_div_1_div_2_ng_container_2_span_2_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r65.loadingIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r65.loadingIconTemplate);
  }
}
function Tree_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tree_div_1_div_2_i_1_Template, 1, 2, "i", 10)(2, Tree_div_1_div_2_ng_container_2_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r60.loadingIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r60.loadingIcon);
  }
}
function Tree_div_1_table_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-treeNode", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", ctx_r61.value[0])("root", true);
  }
}
function Tree_div_1_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r70.emptyMessageLabel, " ");
  }
}
function Tree_div_1_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 40);
  }
}
function Tree_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tree_div_1_div_4_ng_container_1_Template, 2, 1, "ng-container", 39)(2, Tree_div_1_div_4_ng_container_2_Template, 2, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r62.emptyMessageTemplate)("ngIfElse", ctx_r62.emptyFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r62.emptyMessageTemplate);
  }
}
function Tree_div_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c16 = a1 => ({
  "p-tree p-tree-horizontal p-component": true,
  "p-tree-selectable": a1
});
function Tree_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Tree_div_1_ng_container_1_Template, 1, 0, "ng-container", 4)(2, Tree_div_1_div_2_Template, 3, 2, "div", 42)(3, Tree_div_1_table_3_Template, 2, 2, "table", 7)(4, Tree_div_1_div_4_Template, 3, 3, "div", 8)(5, Tree_div_1_ng_container_5_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c16, ctx_r1.selectionMode))("ngStyle", ctx_r1.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.value && ctx_r1.value[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.loading && (ctx_r1.getRootNode() == null || ctx_r1.getRootNode().length === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.footerTemplate);
  }
}
let UITreeNode = /*#__PURE__*/(() => {
  class UITreeNode {
    static ICON_CLASS = 'p-treenode-icon ';
    rowNode;
    node;
    parentNode;
    root;
    index;
    firstChild;
    lastChild;
    level;
    indentation;
    itemSize;
    tree;
    timeout;
    draghoverPrev;
    draghoverNext;
    draghoverNode;
    get ariaSelected() {
      return this.tree.selectionMode === 'single' || this.tree.selectionMode === 'multiple' ? this.isSelected() : undefined;
    }
    get ariaChecked() {
      return this.tree.selectionMode === 'checkbox' ? this.isSelected() : undefined;
    }
    constructor(tree) {
      this.tree = tree;
    }
    ngOnInit() {
      this.node.parent = this.parentNode;
      if (this.parentNode) {
        this.setAllNodesTabIndexes();
        this.tree.syncNodeOption(this.node, this.tree.value, 'parent', this.tree.getNodeWithKey(this.parentNode.key, this.tree.value));
      }
    }
    getIcon() {
      let icon;
      if (this.node.icon) icon = this.node.icon;else icon = this.node.expanded && this.node.children && this.node.children?.length ? this.node.expandedIcon : this.node.collapsedIcon;
      return UITreeNode.ICON_CLASS + ' ' + icon;
    }
    isLeaf() {
      return this.tree.isNodeLeaf(this.node);
    }
    toggle(event) {
      if (this.node.expanded) this.collapse(event);else this.expand(event);
      event.stopPropagation();
    }
    expand(event) {
      this.node.expanded = true;
      if (this.tree.virtualScroll) {
        this.tree.updateSerializedValue();
        this.focusVirtualNode();
      }
      this.tree.onNodeExpand.emit({
        originalEvent: event,
        node: this.node
      });
    }
    collapse(event) {
      this.node.expanded = false;
      if (this.tree.virtualScroll) {
        this.tree.updateSerializedValue();
        this.focusVirtualNode();
      }
      this.tree.onNodeCollapse.emit({
        originalEvent: event,
        node: this.node
      });
    }
    onNodeClick(event) {
      this.tree.onNodeClick(event, this.node);
    }
    onNodeKeydown(event) {
      if (event.key === 'Enter') {
        this.tree.onNodeClick(event, this.node);
      }
    }
    onNodeTouchEnd() {
      this.tree.onNodeTouchEnd();
    }
    onNodeRightClick(event) {
      this.tree.onNodeRightClick(event, this.node);
    }
    isSelected() {
      return this.tree.isSelected(this.node);
    }
    isSameNode(event) {
      return event.currentTarget && (event.currentTarget.isSameNode(event.target) || event.currentTarget.isSameNode(event.target.closest('[role="treeitem"]')));
    }
    onDropPoint(event, position) {
      event.preventDefault();
      let dragNode = this.tree.dragNode;
      let dragNodeIndex = this.tree.dragNodeIndex;
      let dragNodeScope = this.tree.dragNodeScope;
      let isValidDropPointIndex = this.tree.dragNodeTree === this.tree ? position === 1 || dragNodeIndex !== this.index - 1 : true;
      if (this.tree.allowDrop(dragNode, this.node, dragNodeScope) && isValidDropPointIndex) {
        let dropParams = {
          ...this.createDropPointEventMetadata(position)
        };
        if (this.tree.validateDrop) {
          this.tree.onNodeDrop.emit({
            originalEvent: event,
            dragNode: dragNode,
            dropNode: this.node,
            index: this.index,
            accept: () => {
              this.processPointDrop(dropParams);
            }
          });
        } else {
          this.processPointDrop(dropParams);
          this.tree.onNodeDrop.emit({
            originalEvent: event,
            dragNode: dragNode,
            dropNode: this.node,
            index: this.index
          });
        }
      }
      this.draghoverPrev = false;
      this.draghoverNext = false;
    }
    processPointDrop(event) {
      let newNodeList = event.dropNode.parent ? event.dropNode.parent.children : this.tree.value;
      event.dragNodeSubNodes.splice(event.dragNodeIndex, 1);
      let dropIndex = this.index;
      if (event.position < 0) {
        dropIndex = event.dragNodeSubNodes === newNodeList ? event.dragNodeIndex > event.index ? event.index : event.index - 1 : event.index;
        newNodeList.splice(dropIndex, 0, event.dragNode);
      } else {
        dropIndex = newNodeList.length;
        newNodeList.push(event.dragNode);
      }
      this.tree.dragDropService.stopDrag({
        node: event.dragNode,
        subNodes: event.dropNode.parent ? event.dropNode.parent.children : this.tree.value,
        index: event.dragNodeIndex
      });
    }
    createDropPointEventMetadata(position) {
      return {
        dragNode: this.tree.dragNode,
        dragNodeIndex: this.tree.dragNodeIndex,
        dragNodeSubNodes: this.tree.dragNodeSubNodes,
        dropNode: this.node,
        index: this.index,
        position: position
      };
    }
    onDropPointDragOver(event) {
      event.dataTransfer.dropEffect = 'move';
      event.preventDefault();
    }
    onDropPointDragEnter(event, position) {
      if (this.tree.allowDrop(this.tree.dragNode, this.node, this.tree.dragNodeScope)) {
        if (position < 0) this.draghoverPrev = true;else this.draghoverNext = true;
      }
    }
    onDropPointDragLeave(event) {
      this.draghoverPrev = false;
      this.draghoverNext = false;
    }
    onDragStart(event) {
      if (this.tree.draggableNodes && this.node.draggable !== false) {
        event.dataTransfer.setData('text', 'data');
        this.tree.dragDropService.startDrag({
          tree: this,
          node: this.node,
          subNodes: this.node?.parent ? this.node.parent.children : this.tree.value,
          index: this.index,
          scope: this.tree.draggableScope
        });
      } else {
        event.preventDefault();
      }
    }
    onDragStop(event) {
      this.tree.dragDropService.stopDrag({
        node: this.node,
        subNodes: this.node?.parent ? this.node.parent.children : this.tree.value,
        index: this.index
      });
    }
    onDropNodeDragOver(event) {
      event.dataTransfer.dropEffect = 'move';
      if (this.tree.droppableNodes) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
    onDropNode(event) {
      if (this.tree.droppableNodes && this.node?.droppable !== false) {
        let dragNode = this.tree.dragNode;
        if (this.tree.allowDrop(dragNode, this.node, this.tree.dragNodeScope)) {
          let dropParams = {
            ...this.createDropNodeEventMetadata()
          };
          if (this.tree.validateDrop) {
            this.tree.onNodeDrop.emit({
              originalEvent: event,
              dragNode: dragNode,
              dropNode: this.node,
              index: this.index,
              accept: () => {
                this.processNodeDrop(dropParams);
              }
            });
          } else {
            this.processNodeDrop(dropParams);
            this.tree.onNodeDrop.emit({
              originalEvent: event,
              dragNode: dragNode,
              dropNode: this.node,
              index: this.index
            });
          }
        }
      }
      event.preventDefault();
      event.stopPropagation();
      this.draghoverNode = false;
    }
    createDropNodeEventMetadata() {
      return {
        dragNode: this.tree.dragNode,
        dragNodeIndex: this.tree.dragNodeIndex,
        dragNodeSubNodes: this.tree.dragNodeSubNodes,
        dropNode: this.node
      };
    }
    processNodeDrop(event) {
      let dragNodeIndex = event.dragNodeIndex;
      event.dragNodeSubNodes.splice(dragNodeIndex, 1);
      if (event.dropNode.children) event.dropNode.children.push(event.dragNode);else event.dropNode.children = [event.dragNode];
      this.tree.dragDropService.stopDrag({
        node: event.dragNode,
        subNodes: event.dropNode.parent ? event.dropNode.parent.children : this.tree.value,
        index: dragNodeIndex
      });
    }
    onDropNodeDragEnter(event) {
      if (this.tree.droppableNodes && this.node?.droppable !== false && this.tree.allowDrop(this.tree.dragNode, this.node, this.tree.dragNodeScope)) {
        this.draghoverNode = true;
      }
    }
    onDropNodeDragLeave(event) {
      if (this.tree.droppableNodes) {
        let rect = event.currentTarget.getBoundingClientRect();
        if (event.x > rect.left + rect.width || event.x < rect.left || event.y >= Math.floor(rect.top + rect.height) || event.y < rect.top) {
          this.draghoverNode = false;
        }
      }
    }
    onKeyDown(event) {
      if (!this.isSameNode(event) || this.tree.contextMenu && this.tree.contextMenu.containerViewChild?.nativeElement.style.display === 'block') {
        return;
      }
      switch (event.code) {
        //down arrow
        case 'ArrowDown':
          this.onArrowDown(event);
          break;
        //up arrow
        case 'ArrowUp':
          this.onArrowUp(event);
          break;
        //right arrow
        case 'ArrowRight':
          this.onArrowRight(event);
          break;
        //left arrow
        case 'ArrowLeft':
          this.onArrowLeft(event);
          break;
        //enter
        case 'Enter':
        case 'Space':
          this.onEnter(event);
          break;
        //tab
        case 'Tab':
          this.setAllNodesTabIndexes();
          break;
        default:
          //no op
          break;
      }
    }
    onArrowUp(event) {
      const nodeElement = event.target.getAttribute('data-pc-section') === 'toggler' ? event.target.closest('[role="treeitem"]') : event.target.parentElement;
      if (nodeElement.previousElementSibling) {
        this.focusRowChange(nodeElement, nodeElement.previousElementSibling, this.findLastVisibleDescendant(nodeElement.previousElementSibling));
      } else {
        let parentNodeElement = this.getParentNodeElement(nodeElement);
        if (parentNodeElement) {
          this.focusRowChange(nodeElement, parentNodeElement);
        }
      }
      event.preventDefault();
    }
    onArrowDown(event) {
      const nodeElement = event.target.getAttribute('data-pc-section') === 'toggler' ? event.target.closest('[role="treeitem"]') : event.target;
      const listElement = nodeElement.children[1];
      if (listElement && listElement.children.length > 0) {
        this.focusRowChange(nodeElement, listElement.children[0]);
      } else {
        if (nodeElement.parentElement.nextElementSibling) {
          this.focusRowChange(nodeElement, nodeElement.parentElement.nextElementSibling);
        } else {
          let nextSiblingAncestor = this.findNextSiblingOfAncestor(nodeElement.parentElement);
          if (nextSiblingAncestor) {
            this.focusRowChange(nodeElement, nextSiblingAncestor);
          }
        }
      }
      event.preventDefault();
    }
    onArrowRight(event) {
      if (!this.node?.expanded && !this.tree.isNodeLeaf(this.node)) {
        this.expand(event);
        event.currentTarget.tabIndex = -1;
        setTimeout(() => {
          this.onArrowDown(event);
        }, 1);
      }
      event.preventDefault();
    }
    onArrowLeft(event) {
      const nodeElement = event.target.getAttribute('data-pc-section') === 'toggler' ? event.target.closest('[role="treeitem"]') : event.target;
      if (this.level === 0 && !this.node?.expanded) {
        return false;
      }
      if (this.node?.expanded) {
        this.collapse(event);
        return;
      }
      let parentNodeElement = this.getParentNodeElement(nodeElement.parentElement);
      if (parentNodeElement) {
        this.focusRowChange(event.currentTarget, parentNodeElement);
      }
      event.preventDefault();
    }
    onEnter(event) {
      this.tree.onNodeClick(event, this.node);
      this.setTabIndexForSelectionMode(event, this.tree.nodeTouched);
      event.preventDefault();
    }
    setAllNodesTabIndexes() {
      const nodes = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.find(this.tree.el.nativeElement, '.p-treenode');
      const hasSelectedNode = [...nodes].some(node => node.getAttribute('aria-selected') === 'true' || node.getAttribute('aria-checked') === 'true');
      [...nodes].forEach(node => {
        node.tabIndex = -1;
      });
      if (hasSelectedNode) {
        const selectedNodes = [...nodes].filter(node => node.getAttribute('aria-selected') === 'true' || node.getAttribute('aria-checked') === 'true');
        selectedNodes[0].tabIndex = 0;
        return;
      }
      [...nodes][0].tabIndex = 0;
    }
    setTabIndexForSelectionMode(event, nodeTouched) {
      if (this.tree.selectionMode !== null) {
        const elements = [...primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.find(this.tree.el.nativeElement, '.p-treenode')];
        event.currentTarget.tabIndex = nodeTouched === false ? -1 : 0;
        if (elements.every(element => element.tabIndex === -1)) {
          elements[0].tabIndex = 0;
        }
      }
    }
    findNextSiblingOfAncestor(nodeElement) {
      let parentNodeElement = this.getParentNodeElement(nodeElement);
      if (parentNodeElement) {
        if (parentNodeElement.nextElementSibling) return parentNodeElement.nextElementSibling;else return this.findNextSiblingOfAncestor(parentNodeElement);
      } else {
        return null;
      }
    }
    findLastVisibleDescendant(nodeElement) {
      const listElement = Array.from(nodeElement.children).find(el => primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.hasClass(el, 'p-treenode'));
      const childrenListElement = listElement.children[1];
      if (childrenListElement && childrenListElement.children.length > 0) {
        const lastChildElement = childrenListElement.children[childrenListElement.children.length - 1];
        return this.findLastVisibleDescendant(lastChildElement);
      } else {
        return nodeElement;
      }
    }
    getParentNodeElement(nodeElement) {
      const parentNodeElement = nodeElement.parentElement?.parentElement?.parentElement;
      return parentNodeElement?.tagName === 'P-TREENODE' ? parentNodeElement : null;
    }
    focusNode(element) {
      if (this.tree.droppableNodes) element.children[1].focus();else element.children[0].focus();
    }
    focusRowChange(firstFocusableRow, currentFocusedRow, lastVisibleDescendant) {
      firstFocusableRow.tabIndex = '-1';
      currentFocusedRow.children[0].tabIndex = '0';
      this.focusNode(lastVisibleDescendant || currentFocusedRow);
    }
    focusVirtualNode() {
      this.timeout = setTimeout(() => {
        let node = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.findSingle(document.body, `[data-id="${this.node?.key ?? this.node?.data}"]`);
        primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.focus(node);
      }, 1);
    }
    static ɵfac = function UITreeNode_Factory(t) {
      return new (t || UITreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => Tree)));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UITreeNode,
      selectors: [["p-treeNode"]],
      hostAttrs: [1, "p-element"],
      hostVars: 1,
      hostBindings: function UITreeNode_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", "treeitem");
        }
      },
      inputs: {
        rowNode: "rowNode",
        node: "node",
        parentNode: "parentNode",
        root: "root",
        index: "index",
        firstChild: "firstChild",
        lastChild: "lastChild",
        level: "level",
        indentation: "indentation",
        itemSize: "itemSize"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "ngIf"], ["class", "p-treenode-droppoint", 3, "ngClass", "drop", "dragover", "dragenter", "dragleave", 4, "ngIf"], ["role", "treeitem", 3, "ngClass", "ngStyle", "style", "keydown", 4, "ngIf"], [3, "class", 4, "ngIf"], [1, "p-treenode-droppoint", 3, "ngClass", "drop", "dragover", "dragenter", "dragleave"], ["role", "treeitem", 3, "ngClass", "ngStyle", "keydown"], [1, "p-treenode-content", 3, "draggable", "ngClass", "click", "contextmenu", "touchend", "drop", "dragover", "dragenter", "dragleave", "dragstart", "dragend"], ["type", "button", "pRipple", "", "tabindex", "-1", "aria-hidden", "true", 1, "p-tree-toggler", "p-link", 3, "click"], [4, "ngIf"], ["class", "p-tree-toggler-icon", 4, "ngIf"], ["class", "p-checkbox p-component", "aria-hidden", "true", 3, "ngClass", 4, "ngIf"], [1, "p-treenode-label"], ["class", "p-treenode-children", "style", "display: none;", "role", "group", 3, "display", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-tree-toggler-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true", 1, "p-checkbox", "p-component", 3, "ngClass"], ["role", "checkbox", 1, "p-checkbox-box", 3, "ngClass"], ["role", "group", 1, "p-treenode-children", 2, "display", "none"], [3, "node", "parentNode", "firstChild", "lastChild", "index", "itemSize", "level", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "parentNode", "firstChild", "lastChild", "index", "itemSize", "level"], ["class", "p-treenode-connector", 4, "ngIf"], [1, "p-treenode", 3, "ngClass"], ["tabindex", "0", 1, "p-treenode-content", 3, "ngClass", "click", "contextmenu", "touchend", "keydown"], [3, "ngClass", "click", 4, "ngIf"], ["class", "p-treenode-children-container", 3, "display", 4, "ngIf"], [1, "p-treenode-connector"], [1, "p-treenode-connector-table"], [3, "ngClass"], [3, "ngClass", "click"], [3, "styleClass", "ariaLabel", 4, "ngIf"], [3, "styleClass", "ariaLabel"], [1, "p-treenode-children-container"], [1, "p-treenode-children"], [3, "node", "firstChild", "lastChild", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "firstChild", "lastChild"]],
      template: function UITreeNode_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UITreeNode_ng_template_0_Template, 4, 4, "ng-template", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.node);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple, primeng_icons_check__WEBPACK_IMPORTED_MODULE_4__.CheckIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_5__.ChevronDownIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_6__.ChevronRightIcon, primeng_icons_minus__WEBPACK_IMPORTED_MODULE_7__.MinusIcon, primeng_icons_plus__WEBPACK_IMPORTED_MODULE_8__.PlusIcon, UITreeNode],
      encapsulation: 2
    });
  }
  return UITreeNode;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Tree is used to display hierarchical data.
 * @group Components
 */
let Tree = /*#__PURE__*/(() => {
  class Tree {
    el;
    dragDropService;
    config;
    cd;
    /**
     * An array of treenodes.
     * @group Props
     */
    value;
    /**
     * Defines the selection mode.
     * @group Props
     */
    selectionMode;
    /**
     * A single treenode instance or an array to refer to the selections.
     * @group Props
     */
    selection;
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
    /**
     * Context menu instance.
     * @group Props
     */
    contextMenu;
    /**
     * Defines the orientation of the tree, valid values are 'vertical' and 'horizontal'.
     * @group Props
     */
    layout = 'vertical';
    /**
     * Scope of the draggable nodes to match a droppableScope.
     * @group Props
     */
    draggableScope;
    /**
     * Scope of the droppable nodes to match a draggableScope.
     * @group Props
     */
    droppableScope;
    /**
     * Whether the nodes are draggable.
     * @group Props
     */
    draggableNodes;
    /**
     * Whether the nodes are droppable.
     * @group Props
     */
    droppableNodes;
    /**
     * Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
     * @group Props
     */
    metaKeySelection = true;
    /**
     * Whether checkbox selections propagate to ancestor nodes.
     * @group Props
     */
    propagateSelectionUp = true;
    /**
     * Whether checkbox selections propagate to descendant nodes.
     * @group Props
     */
    propagateSelectionDown = true;
    /**
     * Displays a loader to indicate data load is in progress.
     * @group Props
     */
    loading;
    /**
     * The icon to show while indicating data load is in progress.
     * @group Props
     */
    loadingIcon;
    /**
     * Text to display when there is no data.
     * @group Props
     */
    emptyMessage = '';
    /**
     * Used to define a string that labels the tree.
     * @group Props
     */
    ariaLabel;
    /**
     * Defines a string that labels the toggler icon for accessibility.
     * @group Props
     */
    togglerAriaLabel;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * When enabled, drop can be accepted or rejected based on condition defined at onNodeDrop.
     * @group Props
     */
    validateDrop;
    /**
     * When specified, displays an input field to filter the items.
     * @group Props
     */
    filter;
    /**
     * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
     * @group Props
     */
    filterBy = 'label';
    /**
     * Mode for filtering valid values are "lenient" and "strict". Default is lenient.
     * @group Props
     */
    filterMode = 'lenient';
    /**
     * Placeholder text to show when filter input is empty.
     * @group Props
     */
    filterPlaceholder;
    /**
     * Values after the tree nodes are filtered.
     * @group Props
     */
    filteredNodes;
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     * @group Props
     */
    filterLocale;
    /**
     * Height of the scrollable viewport.
     * @group Props
     */
    scrollHeight;
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @group Props
     */
    lazy = false;
    /**
     * Whether the data should be loaded on demand during scroll.
     * @group Props
     */
    virtualScroll;
    /**
     * Height of an item in the list for VirtualScrolling.
     * @group Props
     */
    virtualScrollItemSize;
    /**
     * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
     * @group Props
     */
    virtualScrollOptions;
    /**
     * Indentation factor for spacing of the nested node when virtual scrolling is enabled.
     * @group Props
     */
    indentation = 1.5;
    /**
     * Custom templates of the component.
     * @group Props
     */
    _templateMap;
    /**
     * Function to optimize the node list rendering, default algorithm checks for object identity.
     * @group Props
     */
    trackBy = (index, item) => item;
    /**
     * Height of the node.
     * @group Props
     * @deprecated use virtualScrollItemSize property instead.
     */
    _virtualNodeHeight;
    get virtualNodeHeight() {
      return this._virtualNodeHeight;
    }
    set virtualNodeHeight(val) {
      this._virtualNodeHeight = val;
      console.warn('The virtualNodeHeight property is deprecated, use virtualScrollItemSize property instead.');
    }
    /**
     * Callback to invoke on selection change.
     * @param {(TreeNode<any> | TreeNode<any>[] | null)} event - Custom selection change event.
     * @group Emits
     */
    selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a node is selected.
     * @param {TreeNodeSelectEvent} event - Node select event.
     * @group Emits
     */
    onNodeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a node is unselected.
     * @param {TreeNodeUnSelectEvent} event - Node unselect event.
     * @group Emits
     */
    onNodeUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a node is expanded.
     * @param {TreeNodeExpandEvent} event - Node expand event.
     * @group Emits
     */
    onNodeExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a node is collapsed.
     * @param {TreeNodeCollapseEvent} event - Node collapse event.
     * @group Emits
     */
    onNodeCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a node is selected with right click.
     * @param {onNodeContextMenuSelect} event - Node context menu select event.
     * @group Emits
     */
    onNodeContextMenuSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a node is dropped.
     * @param {TreeNodeDropEvent} event - Node drop event.
     * @group Emits
     */
    onNodeDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke in lazy mode to load new data.
     * @param {TreeLazyLoadEvent} event - Custom lazy load event.
     * @group Emits
     */
    onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke in virtual scroll mode when scroll position changes.
     * @param {TreeScrollEvent} event - Custom scroll event.
     * @group Emits
     */
    onScroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke in virtual scroll mode when scroll position and item's range in view changes.
     * @param {TreeScrollIndexChangeEvent} event - Scroll index change event.
     * @group Emits
     */
    onScrollIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when data is filtered.
     * @param {TreeFilterEvent} event - Custom filter event.
     * @group Emits
     */
    onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    templates;
    filterViewChild;
    scroller;
    wrapperViewChild;
    serializedValue;
    headerTemplate;
    footerTemplate;
    loaderTemplate;
    emptyMessageTemplate;
    togglerIconTemplate;
    checkboxIconTemplate;
    loadingIconTemplate;
    filterIconTemplate;
    nodeTouched;
    dragNodeTree;
    dragNode;
    dragNodeSubNodes;
    dragNodeIndex;
    dragNodeScope;
    dragHover;
    dragStartSubscription;
    dragStopSubscription;
    constructor(el, dragDropService, config, cd) {
      this.el = el;
      this.dragDropService = dragDropService;
      this.config = config;
      this.cd = cd;
    }
    ngOnInit() {
      if (this.droppableNodes) {
        this.dragStartSubscription = this.dragDropService.dragStart$.subscribe(event => {
          this.dragNodeTree = event.tree;
          this.dragNode = event.node;
          this.dragNodeSubNodes = event.subNodes;
          this.dragNodeIndex = event.index;
          this.dragNodeScope = event.scope;
        });
        this.dragStopSubscription = this.dragDropService.dragStop$.subscribe(event => {
          this.dragNodeTree = null;
          this.dragNode = null;
          this.dragNodeSubNodes = null;
          this.dragNodeIndex = null;
          this.dragNodeScope = null;
          this.dragHover = false;
        });
      }
    }
    ngOnChanges(simpleChange) {
      if (simpleChange.value) {
        this.updateSerializedValue();
      }
    }
    get horizontal() {
      return this.layout == 'horizontal';
    }
    get emptyMessageLabel() {
      return this.emptyMessage || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_9__.TranslationKeys.EMPTY_MESSAGE);
    }
    ngAfterContentInit() {
      if (this.templates.length) {
        this._templateMap = {};
      }
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'empty':
            this.emptyMessageTemplate = item.template;
            break;
          case 'footer':
            this.footerTemplate = item.template;
            break;
          case 'loader':
            this.loaderTemplate = item.template;
            break;
          case 'togglericon':
            this.togglerIconTemplate = item.template;
            break;
          case 'checkboxicon':
            this.checkboxIconTemplate = item.template;
            break;
          case 'loadingicon':
            this.loadingIconTemplate = item.template;
            break;
          case 'filtericon':
            this.filterIconTemplate = item.template;
            break;
          default:
            this._templateMap[item.name] = item.template;
            break;
        }
      });
    }
    updateSerializedValue() {
      this.serializedValue = [];
      this.serializeNodes(null, this.getRootNode(), 0, true);
    }
    serializeNodes(parent, nodes, level, visible) {
      if (nodes && nodes.length) {
        for (let node of nodes) {
          node.parent = parent;
          const rowNode = {
            node: node,
            parent: parent,
            level: level,
            visible: visible && (parent ? parent.expanded : true)
          };
          this.serializedValue.push(rowNode);
          if (rowNode.visible && node.expanded) {
            this.serializeNodes(node, node.children, level + 1, rowNode.visible);
          }
        }
      }
    }
    onNodeClick(event, node) {
      let eventTarget = event.target;
      if (primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.hasClass(eventTarget, 'p-tree-toggler') || primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.hasClass(eventTarget, 'p-tree-toggler-icon')) {
        return;
      } else if (this.selectionMode) {
        if (node.selectable === false) {
          return;
        }
        if (this.hasFilteredNodes()) {
          node = this.getNodeWithKey(node.key, this.value);
          if (!node) {
            return;
          }
        }
        let index = this.findIndexInSelection(node);
        let selected = index >= 0;
        if (this.isCheckboxSelectionMode()) {
          if (selected) {
            if (this.propagateSelectionDown) this.propagateDown(node, false);else this.selection = this.selection.filter((val, i) => i != index);
            if (this.propagateSelectionUp && node.parent) {
              this.propagateUp(node.parent, false);
            }
            this.selectionChange.emit(this.selection);
            this.onNodeUnselect.emit({
              originalEvent: event,
              node: node
            });
          } else {
            if (this.propagateSelectionDown) this.propagateDown(node, true);else this.selection = [...(this.selection || []), node];
            if (this.propagateSelectionUp && node.parent) {
              this.propagateUp(node.parent, true);
            }
            this.selectionChange.emit(this.selection);
            this.onNodeSelect.emit({
              originalEvent: event,
              node: node
            });
          }
        } else {
          let metaSelection = this.nodeTouched ? false : this.metaKeySelection;
          if (metaSelection) {
            let metaKey = event.metaKey || event.ctrlKey;
            if (selected && metaKey) {
              if (this.isSingleSelectionMode()) {
                this.selectionChange.emit(null);
              } else {
                this.selection = this.selection.filter((val, i) => i != index);
                this.selectionChange.emit(this.selection);
              }
              this.onNodeUnselect.emit({
                originalEvent: event,
                node: node
              });
            } else {
              if (this.isSingleSelectionMode()) {
                this.selectionChange.emit(node);
              } else if (this.isMultipleSelectionMode()) {
                this.selection = !metaKey ? [] : this.selection || [];
                this.selection = [...this.selection, node];
                this.selectionChange.emit(this.selection);
              }
              this.onNodeSelect.emit({
                originalEvent: event,
                node: node
              });
            }
          } else {
            if (this.isSingleSelectionMode()) {
              if (selected) {
                this.selection = null;
                this.onNodeUnselect.emit({
                  originalEvent: event,
                  node: node
                });
              } else {
                this.selection = node;
                this.onNodeSelect.emit({
                  originalEvent: event,
                  node: node
                });
              }
            } else {
              if (selected) {
                this.selection = this.selection.filter((val, i) => i != index);
                this.onNodeUnselect.emit({
                  originalEvent: event,
                  node: node
                });
              } else {
                this.selection = [...(this.selection || []), node];
                this.onNodeSelect.emit({
                  originalEvent: event,
                  node: node
                });
              }
            }
            this.selectionChange.emit(this.selection);
          }
        }
      }
      this.nodeTouched = false;
    }
    onNodeTouchEnd() {
      this.nodeTouched = true;
    }
    onNodeRightClick(event, node) {
      if (this.contextMenu) {
        let eventTarget = event.target;
        if (eventTarget.className && eventTarget.className.indexOf('p-tree-toggler') === 0) {
          return;
        } else {
          let index = this.findIndexInSelection(node);
          let selected = index >= 0;
          if (!selected) {
            if (this.isSingleSelectionMode()) this.selectionChange.emit(node);else this.selectionChange.emit([node]);
          }
          this.contextMenu.show(event);
          this.onNodeContextMenuSelect.emit({
            originalEvent: event,
            node: node
          });
        }
      }
    }
    findIndexInSelection(node) {
      let index = -1;
      if (this.selectionMode && this.selection) {
        if (this.isSingleSelectionMode()) {
          let areNodesEqual = this.selection.key && this.selection.key === node.key || this.selection == node;
          index = areNodesEqual ? 0 : -1;
        } else {
          for (let i = 0; i < this.selection.length; i++) {
            let selectedNode = this.selection[i];
            let areNodesEqual = selectedNode.key && selectedNode.key === node.key || selectedNode == node;
            if (areNodesEqual) {
              index = i;
              break;
            }
          }
        }
      }
      return index;
    }
    syncNodeOption(node, parentNodes, option, value) {
      // to synchronize the node option between the filtered nodes and the original nodes(this.value)
      const _node = this.hasFilteredNodes() ? this.getNodeWithKey(node.key, parentNodes) : null;
      if (_node) {
        _node[option] = value || node[option];
      }
    }
    hasFilteredNodes() {
      return this.filter && this.filteredNodes && this.filteredNodes.length;
    }
    getNodeWithKey(key, nodes) {
      for (let node of nodes) {
        if (node.key === key) {
          return node;
        }
        if (node.children) {
          let matchedNode = this.getNodeWithKey(key, node.children);
          if (matchedNode) {
            return matchedNode;
          }
        }
      }
    }
    propagateUp(node, select) {
      if (node.children && node.children.length) {
        let selectedCount = 0;
        let childPartialSelected = false;
        for (let child of node.children) {
          if (this.isSelected(child)) {
            selectedCount++;
          } else if (child.partialSelected) {
            childPartialSelected = true;
          }
        }
        if (select && selectedCount == node.children.length) {
          this.selection = [...(this.selection || []), node];
          node.partialSelected = false;
        } else {
          if (!select) {
            let index = this.findIndexInSelection(node);
            if (index >= 0) {
              this.selection = this.selection.filter((val, i) => i != index);
            }
          }
          if (childPartialSelected || selectedCount > 0 && selectedCount != node.children.length) node.partialSelected = true;else node.partialSelected = false;
        }
        this.syncNodeOption(node, this.filteredNodes, 'partialSelected');
      }
      let parent = node.parent;
      if (parent) {
        this.propagateUp(parent, select);
      }
    }
    propagateDown(node, select) {
      let index = this.findIndexInSelection(node);
      if (select && index == -1) {
        this.selection = [...(this.selection || []), node];
      } else if (!select && index > -1) {
        this.selection = this.selection.filter((val, i) => i != index);
      }
      node.partialSelected = false;
      this.syncNodeOption(node, this.filteredNodes, 'partialSelected');
      if (node.children && node.children.length) {
        for (let child of node.children) {
          this.propagateDown(child, select);
        }
      }
    }
    isSelected(node) {
      return this.findIndexInSelection(node) != -1;
    }
    isSingleSelectionMode() {
      return this.selectionMode && this.selectionMode == 'single';
    }
    isMultipleSelectionMode() {
      return this.selectionMode && this.selectionMode == 'multiple';
    }
    isCheckboxSelectionMode() {
      return this.selectionMode && this.selectionMode == 'checkbox';
    }
    isNodeLeaf(node) {
      return node.leaf == false ? false : !(node.children && node.children.length);
    }
    getRootNode() {
      return this.filteredNodes ? this.filteredNodes : this.value;
    }
    getTemplateForNode(node) {
      if (this._templateMap) return node.type ? this._templateMap[node.type] : this._templateMap['default'];else return null;
    }
    onDragOver(event) {
      if (this.droppableNodes && (!this.value || this.value.length === 0)) {
        event.dataTransfer.dropEffect = 'move';
        event.preventDefault();
      }
    }
    onDrop(event) {
      if (this.droppableNodes && (!this.value || this.value.length === 0)) {
        event.preventDefault();
        let dragNode = this.dragNode;
        if (this.allowDrop(dragNode, null, this.dragNodeScope)) {
          let dragNodeIndex = this.dragNodeIndex;
          this.value = this.value || [];
          if (this.validateDrop) {
            this.onNodeDrop.emit({
              originalEvent: event,
              dragNode: dragNode,
              dropNode: null,
              index: dragNodeIndex,
              accept: () => {
                this.processTreeDrop(dragNode, dragNodeIndex);
              }
            });
          } else {
            this.onNodeDrop.emit({
              originalEvent: event,
              dragNode: dragNode,
              dropNode: null,
              index: dragNodeIndex
            });
            this.processTreeDrop(dragNode, dragNodeIndex);
          }
        }
      }
    }
    processTreeDrop(dragNode, dragNodeIndex) {
      this.dragNodeSubNodes.splice(dragNodeIndex, 1);
      this.value.push(dragNode);
      this.dragDropService.stopDrag({
        node: dragNode
      });
    }
    onDragEnter() {
      if (this.droppableNodes && this.allowDrop(this.dragNode, null, this.dragNodeScope)) {
        this.dragHover = true;
      }
    }
    onDragLeave(event) {
      if (this.droppableNodes) {
        let rect = event.currentTarget.getBoundingClientRect();
        if (event.x > rect.left + rect.width || event.x < rect.left || event.y > rect.top + rect.height || event.y < rect.top) {
          this.dragHover = false;
        }
      }
    }
    allowDrop(dragNode, dropNode, dragNodeScope) {
      if (!dragNode) {
        //prevent random html elements to be dragged
        return false;
      } else if (this.isValidDragScope(dragNodeScope)) {
        let allow = true;
        if (dropNode) {
          if (dragNode === dropNode) {
            allow = false;
          } else {
            let parent = dropNode.parent;
            while (parent != null) {
              if (parent === dragNode) {
                allow = false;
                break;
              }
              parent = parent.parent;
            }
          }
        }
        return allow;
      } else {
        return false;
      }
    }
    isValidDragScope(dragScope) {
      let dropScope = this.droppableScope;
      if (dropScope) {
        if (typeof dropScope === 'string') {
          if (typeof dragScope === 'string') return dropScope === dragScope;else if (Array.isArray(dragScope)) return dragScope.indexOf(dropScope) != -1;
        } else if (Array.isArray(dropScope)) {
          if (typeof dragScope === 'string') {
            return dropScope.indexOf(dragScope) != -1;
          } else if (Array.isArray(dragScope)) {
            for (let s of dropScope) {
              for (let ds of dragScope) {
                if (s === ds) {
                  return true;
                }
              }
            }
          }
        }
        return false;
      } else {
        return true;
      }
    }
    _filter(value) {
      let filterValue = value;
      if (filterValue === '') {
        this.filteredNodes = null;
      } else {
        this.filteredNodes = [];
        const searchFields = this.filterBy.split(',');
        const filterText = primeng_utils__WEBPACK_IMPORTED_MODULE_10__.ObjectUtils.removeAccents(filterValue).toLocaleLowerCase(this.filterLocale);
        const isStrictMode = this.filterMode === 'strict';
        for (let node of this.value) {
          let copyNode = {
            ...node
          };
          let paramsWithoutNode = {
            searchFields,
            filterText,
            isStrictMode
          };
          if (isStrictMode && (this.findFilteredNodes(copyNode, paramsWithoutNode) || this.isFilterMatched(copyNode, paramsWithoutNode)) || !isStrictMode && (this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode))) {
            this.filteredNodes.push(copyNode);
          }
        }
      }
      this.updateSerializedValue();
      this.onFilter.emit({
        filter: filterValue,
        filteredValue: this.filteredNodes
      });
    }
    /**
     * Resets filter.
     * @group Method
     */
    resetFilter() {
      this.filteredNodes = null;
      if (this.filterViewChild && this.filterViewChild.nativeElement) {
        this.filterViewChild.nativeElement.value = '';
      }
    }
    /**
     * Scrolls to virtual index.
     * @param {number} number - Index to be scrolled.
     * @group Method
     */
    scrollToVirtualIndex(index) {
      this.virtualScroll && this.scroller?.scrollToIndex(index);
    }
    /**
     * Scrolls to virtual index.
     * @param {ScrollToOptions} options - Scroll options.
     * @group Method
     */
    scrollTo(options) {
      if (this.virtualScroll) {
        this.scroller?.scrollTo(options);
      } else if (this.wrapperViewChild && this.wrapperViewChild.nativeElement) {
        if (this.wrapperViewChild.nativeElement.scrollTo) {
          this.wrapperViewChild.nativeElement.scrollTo(options);
        } else {
          this.wrapperViewChild.nativeElement.scrollLeft = options.left;
          this.wrapperViewChild.nativeElement.scrollTop = options.top;
        }
      }
    }
    findFilteredNodes(node, paramsWithoutNode) {
      if (node) {
        let matched = false;
        if (node.children) {
          let childNodes = [...node.children];
          node.children = [];
          for (let childNode of childNodes) {
            let copyChildNode = {
              ...childNode
            };
            if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
              matched = true;
              node.children.push(copyChildNode);
            }
          }
        }
        if (matched) {
          node.expanded = true;
          return true;
        }
      }
    }
    isFilterMatched(node, params) {
      let {
        searchFields,
        filterText,
        isStrictMode
      } = params;
      let matched = false;
      for (let field of searchFields) {
        let fieldValue = primeng_utils__WEBPACK_IMPORTED_MODULE_10__.ObjectUtils.removeAccents(String(primeng_utils__WEBPACK_IMPORTED_MODULE_10__.ObjectUtils.resolveFieldData(node, field))).toLocaleLowerCase(this.filterLocale);
        if (fieldValue.indexOf(filterText) > -1) {
          matched = true;
        }
      }
      if (!matched || isStrictMode && !this.isNodeLeaf(node)) {
        matched = this.findFilteredNodes(node, {
          searchFields,
          filterText,
          isStrictMode
        }) || matched;
      }
      return matched;
    }
    getIndex(options, index) {
      const getItemOptions = options['getItemOptions'];
      return getItemOptions ? getItemOptions(index).index : index;
    }
    getBlockableElement() {
      return this.el.nativeElement.children[0];
    }
    ngOnDestroy() {
      if (this.dragStartSubscription) {
        this.dragStartSubscription.unsubscribe();
      }
      if (this.dragStopSubscription) {
        this.dragStopSubscription.unsubscribe();
      }
    }
    static ɵfac = function Tree_Factory(t) {
      return new (t || Tree)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.TreeDragDropService, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Tree,
      selectors: [["p-tree"]],
      contentQueries: function Tree_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Tree_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c11, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c12, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c13, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filterViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wrapperViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        value: "value",
        selectionMode: "selectionMode",
        selection: "selection",
        style: "style",
        styleClass: "styleClass",
        contextMenu: "contextMenu",
        layout: "layout",
        draggableScope: "draggableScope",
        droppableScope: "droppableScope",
        draggableNodes: "draggableNodes",
        droppableNodes: "droppableNodes",
        metaKeySelection: "metaKeySelection",
        propagateSelectionUp: "propagateSelectionUp",
        propagateSelectionDown: "propagateSelectionDown",
        loading: "loading",
        loadingIcon: "loadingIcon",
        emptyMessage: "emptyMessage",
        ariaLabel: "ariaLabel",
        togglerAriaLabel: "togglerAriaLabel",
        ariaLabelledBy: "ariaLabelledBy",
        validateDrop: "validateDrop",
        filter: "filter",
        filterBy: "filterBy",
        filterMode: "filterMode",
        filterPlaceholder: "filterPlaceholder",
        filteredNodes: "filteredNodes",
        filterLocale: "filterLocale",
        scrollHeight: "scrollHeight",
        lazy: "lazy",
        virtualScroll: "virtualScroll",
        virtualScrollItemSize: "virtualScrollItemSize",
        virtualScrollOptions: "virtualScrollOptions",
        indentation: "indentation",
        _templateMap: "_templateMap",
        trackBy: "trackBy",
        virtualNodeHeight: "virtualNodeHeight"
      },
      outputs: {
        selectionChange: "selectionChange",
        onNodeSelect: "onNodeSelect",
        onNodeUnselect: "onNodeUnselect",
        onNodeExpand: "onNodeExpand",
        onNodeCollapse: "onNodeCollapse",
        onNodeContextMenuSelect: "onNodeContextMenuSelect",
        onNodeDrop: "onNodeDrop",
        onLazyLoad: "onLazyLoad",
        onScroll: "onScroll",
        onScrollIndexChange: "onScrollIndexChange",
        onFilter: "onFilter"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 2,
      consts: [[3, "ngClass", "ngStyle", "class", "drop", "dragover", "dragenter", "dragleave", 4, "ngIf"], [3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "ngClass", "ngStyle", "drop", "dragover", "dragenter", "dragleave"], ["class", "p-tree-loading-overlay p-component-overlay", 4, "ngIf"], [4, "ngTemplateOutlet"], ["class", "p-tree-filter-container", 4, "ngIf"], ["styleClass", "p-tree-wrapper", 3, "items", "tabindex", "style", "scrollHeight", "itemSize", "lazy", "options", "onScroll", "onScrollIndexChange", "onLazyLoad", 4, "ngIf"], [4, "ngIf"], ["class", "p-tree-empty-message", 4, "ngIf"], [1, "p-tree-loading-overlay", "p-component-overlay"], [3, "class", 4, "ngIf"], [3, "spin", "styleClass", 4, "ngIf"], ["class", "p-tree-loading-icon", 4, "ngIf"], [3, "spin", "styleClass"], [1, "p-tree-loading-icon"], [1, "p-tree-filter-container"], ["type", "text", "autocomplete", "off", 1, "p-tree-filter", "p-inputtext", "p-component", 3, "keydown.enter", "input"], ["filter", ""], [3, "styleClass", 4, "ngIf"], ["class", "p-tree-filter-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-tree-filter-icon"], ["styleClass", "p-tree-wrapper", 3, "items", "tabindex", "scrollHeight", "itemSize", "lazy", "options", "onScroll", "onScrollIndexChange", "onLazyLoad"], ["scroller", ""], ["pTemplate", "content"], ["class", "p-tree-container", "role", "tree", 3, "ngClass", "style", 4, "ngIf"], ["role", "tree", 1, "p-tree-container", 3, "ngClass"], [3, "level", "rowNode", "node", "firstChild", "lastChild", "index", "itemSize", "indentation", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "level", "rowNode", "node", "firstChild", "lastChild", "index", "itemSize", "indentation"], ["treeNode", ""], ["pTemplate", "loader"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-tree-wrapper"], ["wrapper", ""], ["class", "p-tree-container", "role", "tree", 4, "ngIf"], ["role", "tree", 1, "p-tree-container"], [3, "node", "firstChild", "lastChild", "index", "level", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "node", "firstChild", "lastChild", "index", "level"], [1, "p-tree-empty-message"], [4, "ngIf", "ngIfElse"], ["emptyFilter", ""], [3, "ngClass", "ngStyle"], ["class", "p-tree-loading-mask p-component-overlay", 4, "ngIf"], [1, "p-tree-loading-mask", "p-component-overlay"], [3, "node", "root"]],
      template: function Tree_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Tree_div_0_Template, 8, 16, "div", 0)(1, Tree_div_1_Template, 6, 11, "div", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.horizontal);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.horizontal);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_scroller__WEBPACK_IMPORTED_MODULE_11__.Scroller, primeng_icons_search__WEBPACK_IMPORTED_MODULE_12__.SearchIcon, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_13__.SpinnerIcon, UITreeNode],
      styles: ["@layer primeng{.p-tree-container{margin:0;padding:0;list-style-type:none;overflow:auto}.p-treenode-children{margin:0;padding:0;list-style-type:none}.p-tree-wrapper{overflow:auto}.p-treenode-selectable{cursor:pointer;-webkit-user-select:none;user-select:none}.p-tree-toggler{cursor:pointer;-webkit-user-select:none;user-select:none;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;position:relative;flex-shrink:0}.p-treenode-leaf>.p-treenode-content .p-tree-toggler{visibility:hidden}.p-treenode-content{display:flex;align-items:center}.p-tree-filter{width:100%}.p-tree-filter-container{position:relative;display:block;width:100%}.p-tree-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-tree-loading{position:relative;min-height:4rem}.p-tree .p-tree-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}.p-tree-flex-scrollable{display:flex;flex:1;height:100%;flex-direction:column}.p-tree-flex-scrollable .p-tree-wrapper{flex:1}.p-tree .p-treenode-droppoint{height:4px;list-style-type:none}.p-tree .p-treenode-droppoint-active{border:0 none}.p-scroller .p-tree-container{overflow:visible}}\n"],
      encapsulation: 2
    });
  }
  return Tree;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TreeModule = /*#__PURE__*/(() => {
  class TreeModule {
    static ɵfac = function TreeModule_Factory(t) {
      return new (t || TreeModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TreeModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_9__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.RippleModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_11__.ScrollerModule, primeng_icons_check__WEBPACK_IMPORTED_MODULE_4__.CheckIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_5__.ChevronDownIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_6__.ChevronRightIcon, primeng_icons_minus__WEBPACK_IMPORTED_MODULE_7__.MinusIcon, primeng_icons_search__WEBPACK_IMPORTED_MODULE_12__.SearchIcon, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_13__.SpinnerIcon, primeng_icons_plus__WEBPACK_IMPORTED_MODULE_8__.PlusIcon, primeng_api__WEBPACK_IMPORTED_MODULE_9__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_11__.ScrollerModule]
    });
  }
  return TreeModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-tree.mjs.map

/***/ }),

/***/ 63514:
/*!*************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-treetable.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TTBody: () => (/* binding */ TTBody),
/* harmony export */   TTCheckbox: () => (/* binding */ TTCheckbox),
/* harmony export */   TTContextMenuRow: () => (/* binding */ TTContextMenuRow),
/* harmony export */   TTEditableColumn: () => (/* binding */ TTEditableColumn),
/* harmony export */   TTHeaderCheckbox: () => (/* binding */ TTHeaderCheckbox),
/* harmony export */   TTReorderableColumn: () => (/* binding */ TTReorderableColumn),
/* harmony export */   TTResizableColumn: () => (/* binding */ TTResizableColumn),
/* harmony export */   TTRow: () => (/* binding */ TTRow),
/* harmony export */   TTScrollableView: () => (/* binding */ TTScrollableView),
/* harmony export */   TTSelectableRow: () => (/* binding */ TTSelectableRow),
/* harmony export */   TTSelectableRowDblClick: () => (/* binding */ TTSelectableRowDblClick),
/* harmony export */   TTSortIcon: () => (/* binding */ TTSortIcon),
/* harmony export */   TTSortableColumn: () => (/* binding */ TTSortableColumn),
/* harmony export */   TreeTable: () => (/* binding */ TreeTable),
/* harmony export */   TreeTableCellEditor: () => (/* binding */ TreeTableCellEditor),
/* harmony export */   TreeTableModule: () => (/* binding */ TreeTableModule),
/* harmony export */   TreeTableService: () => (/* binding */ TreeTableService),
/* harmony export */   TreeTableToggler: () => (/* binding */ TreeTableToggler)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 82076);
/* harmony import */ var primeng_icons_arrowdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/arrowdown */ 73362);
/* harmony import */ var primeng_icons_arrowup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/arrowup */ 32314);
/* harmony import */ var primeng_icons_check__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/icons/check */ 12591);
/* harmony import */ var primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/icons/chevrondown */ 76005);
/* harmony import */ var primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/icons/chevronright */ 44562);
/* harmony import */ var primeng_icons_minus__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/icons/minus */ 31604);
/* harmony import */ var primeng_icons_sortalt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/icons/sortalt */ 33833);
/* harmony import */ var primeng_icons_sortamountdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/icons/sortamountdown */ 76392);
/* harmony import */ var primeng_icons_sortamountupalt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/icons/sortamountupalt */ 87273);
/* harmony import */ var primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/spinner */ 78717);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/paginator */ 42947);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/ripple */ 44480);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/scroller */ 26489);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 2332);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 32013);

























const _c0 = ["container"];
const _c1 = ["resizeHelper"];
const _c2 = ["reorderIndicatorUp"];
const _c3 = ["reorderIndicatorDown"];
const _c4 = ["table"];
const _c5 = ["scrollableView"];
const _c6 = ["scrollableFrozenView"];
function TreeTable_div_2_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("p-treetable-loading-icon pi-spin " + ctx_r11.loadingIcon);
  }
}
function TreeTable_div_2_ng_container_3_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SpinnerIcon", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("spin", true)("styleClass", "p-treetable-loading-icon");
  }
}
function TreeTable_div_2_ng_container_3_span_2_1_ng_template_0_Template(rf, ctx) {}
function TreeTable_div_2_ng_container_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeTable_div_2_ng_container_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TreeTable_div_2_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeTable_div_2_ng_container_3_span_2_1_Template, 1, 0, null, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r14.loadingIconTemplate);
  }
}
function TreeTable_div_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeTable_div_2_ng_container_3_SpinnerIcon_1_Template, 1, 2, "SpinnerIcon", 16)(2, TreeTable_div_2_ng_container_3_span_2_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r12.loadingIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.loadingIconTemplate);
  }
}
function TreeTable_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeTable_div_2_i_2_Template, 1, 2, "i", 14)(3, TreeTable_div_2_ng_container_3_Template, 3, 2, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loadingIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.loadingIcon);
  }
}
function TreeTable_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TreeTable_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeTable_div_3_ng_container_1_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.captionTemplate);
  }
}
function TreeTable_p_paginator_4_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TreeTable_p_paginator_4_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeTable_p_paginator_4_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r22.paginatorFirstPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeTable_p_paginator_4_1_ng_template_0_Template, 1, 1, "ng-template", 23);
  }
}
function TreeTable_p_paginator_4_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TreeTable_p_paginator_4_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeTable_p_paginator_4_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r24.paginatorPreviousPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_4_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeTable_p_paginator_4_2_ng_template_0_Template, 1, 1, "ng-template", 24);
  }
}
function TreeTable_p_paginator_4_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TreeTable_p_paginator_4_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeTable_p_paginator_4_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r26.paginatorLastPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_4_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeTable_p_paginator_4_3_ng_template_0_Template, 1, 1, "ng-template", 25);
  }
}
function TreeTable_p_paginator_4_4_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TreeTable_p_paginator_4_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeTable_p_paginator_4_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r28.paginatorNextPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_4_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeTable_p_paginator_4_4_ng_template_0_Template, 1, 1, "ng-template", 26);
  }
}
function TreeTable_p_paginator_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-paginator", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPageChange", function TreeTable_p_paginator_4_Template_p_paginator_onPageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r30.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeTable_p_paginator_4_1_Template, 1, 0, null, 15)(2, TreeTable_p_paginator_4_2_Template, 1, 0, null, 15)(3, TreeTable_p_paginator_4_3_Template, 1, 0, null, 15)(4, TreeTable_p_paginator_4_4_Template, 1, 0, null, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r3.rows)("first", ctx_r3.first)("totalRecords", ctx_r3.totalRecords)("pageLinkSize", ctx_r3.pageLinks)("alwaysShow", ctx_r3.alwaysShowPaginator)("rowsPerPageOptions", ctx_r3.rowsPerPageOptions)("templateLeft", ctx_r3.paginatorLeftTemplate)("templateRight", ctx_r3.paginatorRightTemplate)("dropdownAppendTo", ctx_r3.paginatorDropdownAppendTo)("currentPageReportTemplate", ctx_r3.currentPageReportTemplate)("showFirstLastIcon", ctx_r3.showFirstLastIcon)("dropdownItemTemplate", ctx_r3.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r3.showCurrentPageReport)("showJumpToPageDropdown", ctx_r3.showJumpToPageDropdown)("showPageLinks", ctx_r3.showPageLinks)("styleClass", ctx_r3.paginatorStyleClass)("locale", ctx_r3.paginatorLocale);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.paginatorFirstPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.paginatorPreviousPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.paginatorLastPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.paginatorNextPageLinkIconTemplate);
  }
}
function TreeTable_div_5_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TreeTable_div_5_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TreeTable_div_5_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c7 = a0 => ({
  $implicit: a0
});
function TreeTable_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27)(1, "table", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TreeTable_div_5_ng_container_3_Template, 1, 0, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TreeTable_div_5_ng_container_5_Template, 1, 0, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tbody", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tfoot", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TreeTable_div_5_ng_container_8_Template, 1, 0, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r4.tableStyleClass)("ngStyle", ctx_r4.tableStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.colGroupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c7, ctx_r4.columns));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c7, ctx_r4.columns));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pTreeTableBody", ctx_r4.columns)("pTreeTableBodyTemplate", ctx_r4.bodyTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c7, ctx_r4.columns));
  }
}
const _c8 = a0 => ({
  width: a0
});
function TreeTable_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 38, 39);
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ttScrollableView", ctx_r36.frozenColumns)("frozen", true)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c8, ctx_r36.frozenWidth))("scrollHeight", ctx_r36.scrollHeight);
  }
}
const _c9 = (a0, a1) => ({
  left: a0,
  width: a1
});
function TreeTable_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeTable_div_6_div_1_Template, 2, 6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.frozenColumns || ctx_r5.frozenBodyTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ttScrollableView", ctx_r5.columns)("frozen", false)("scrollHeight", ctx_r5.scrollHeight)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c9, ctx_r5.frozenWidth, "calc(100% - " + ctx_r5.frozenWidth + ")"));
  }
}
function TreeTable_p_paginator_7_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TreeTable_p_paginator_7_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeTable_p_paginator_7_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r43.paginatorFirstPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_7_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeTable_p_paginator_7_1_ng_template_0_Template, 1, 1, "ng-template", 23);
  }
}
function TreeTable_p_paginator_7_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TreeTable_p_paginator_7_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeTable_p_paginator_7_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r45.paginatorPreviousPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_7_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeTable_p_paginator_7_2_ng_template_0_Template, 1, 1, "ng-template", 24);
  }
}
function TreeTable_p_paginator_7_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TreeTable_p_paginator_7_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeTable_p_paginator_7_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r47.paginatorLastPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_7_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeTable_p_paginator_7_3_ng_template_0_Template, 1, 1, "ng-template", 25);
  }
}
function TreeTable_p_paginator_7_4_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TreeTable_p_paginator_7_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeTable_p_paginator_7_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r49.paginatorNextPageLinkIconTemplate);
  }
}
function TreeTable_p_paginator_7_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeTable_p_paginator_7_4_ng_template_0_Template, 1, 1, "ng-template", 26);
  }
}
function TreeTable_p_paginator_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-paginator", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPageChange", function TreeTable_p_paginator_7_Template_p_paginator_onPageChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r51.onPageChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeTable_p_paginator_7_1_Template, 1, 0, null, 15)(2, TreeTable_p_paginator_7_2_Template, 1, 0, null, 15)(3, TreeTable_p_paginator_7_3_Template, 1, 0, null, 15)(4, TreeTable_p_paginator_7_4_Template, 1, 0, null, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx_r6.rows)("first", ctx_r6.first)("totalRecords", ctx_r6.totalRecords)("pageLinkSize", ctx_r6.pageLinks)("alwaysShow", ctx_r6.alwaysShowPaginator)("rowsPerPageOptions", ctx_r6.rowsPerPageOptions)("templateLeft", ctx_r6.paginatorLeftTemplate)("templateRight", ctx_r6.paginatorRightTemplate)("dropdownAppendTo", ctx_r6.paginatorDropdownAppendTo)("currentPageReportTemplate", ctx_r6.currentPageReportTemplate)("showFirstLastIcon", ctx_r6.showFirstLastIcon)("dropdownItemTemplate", ctx_r6.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r6.showCurrentPageReport)("showJumpToPageDropdown", ctx_r6.showJumpToPageDropdown)("showPageLinks", ctx_r6.showPageLinks)("styleClass", ctx_r6.paginatorStyleClass)("locale", ctx_r6.paginatorLocale);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.paginatorFirstPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.paginatorPreviousPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.paginatorLastPageLinkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.paginatorNextPageLinkIconTemplate);
  }
}
function TreeTable_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TreeTable_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeTable_div_8_ng_container_1_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.summaryTemplate);
  }
}
function TreeTable_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 42, 43);
  }
}
function TreeTable_span_10_ArrowDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ArrowDownIcon");
  }
}
function TreeTable_span_10_3_ng_template_0_Template(rf, ctx) {}
function TreeTable_span_10_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeTable_span_10_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TreeTable_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeTable_span_10_ArrowDownIcon_2_Template, 1, 0, "ArrowDownIcon", 15)(3, TreeTable_span_10_3_Template, 1, 0, null, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.reorderIndicatorUpIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.reorderIndicatorUpIconTemplate);
  }
}
function TreeTable_span_11_ArrowUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ArrowUpIcon");
  }
}
function TreeTable_span_11_3_ng_template_0_Template(rf, ctx) {}
function TreeTable_span_11_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeTable_span_11_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TreeTable_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeTable_span_11_ArrowUpIcon_2_Template, 1, 0, "ArrowUpIcon", 15)(3, TreeTable_span_11_3_Template, 1, 0, null, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.reorderIndicatorDownIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r10.reorderIndicatorDownIconTemplate);
  }
}
const _c10 = (a1, a2, a3, a4, a5) => ({
  "p-treetable p-component": true,
  "p-treetable-hoverable-rows": a1,
  "p-treetable-auto-layout": a2,
  "p-treetable-resizable": a3,
  "p-treetable-resizable-fit": a4,
  "p-treetable-flex-scrollable": a5
});
const _c11 = ["pTreeTableBody", ""];
function TTBody_ng_template_0_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c12 = (a0, a1, a2, a3) => ({
  $implicit: a0,
  node: a1,
  rowData: a2,
  columns: a3
});
function TTBody_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TTBody_ng_template_0_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const serializedNode_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](2, _c12, serializedNode_r2, serializedNode_r2.node, serializedNode_r2.node.data, ctx_r4.columns));
  }
}
function TTBody_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TTBody_ng_template_0_ng_container_0_Template, 2, 7, "ng-container", 1);
  }
  if (rf & 2) {
    const serializedNode_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", serializedNode_r2.visible);
  }
}
function TTBody_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c13 = (a0, a1) => ({
  $implicit: a0,
  frozen: a1
});
function TTBody_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TTBody_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.tt.emptyMessageTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c13, ctx_r1.columns, ctx_r1.frozen));
  }
}
const _c14 = ["scrollHeader"];
const _c15 = ["scrollHeaderBox"];
const _c16 = ["scrollBody"];
const _c17 = ["scrollTable"];
const _c18 = ["loadingTable"];
const _c19 = ["scrollFooter"];
const _c20 = ["scrollFooterBox"];
const _c21 = ["scrollableAligner"];
const _c22 = ["scroller"];
const _c23 = ["ttScrollableView", ""];
function TTScrollableView_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TTScrollableView_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TTScrollableView_p_scroller_8_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c24 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
function TTScrollableView_p_scroller_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TTScrollableView_p_scroller_8_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 5);
  }
  if (rf & 2) {
    const items_r12 = ctx.$implicit;
    const scrollerOptions_r13 = ctx.options;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r7)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c24, items_r12, scrollerOptions_r13));
  }
}
function TTScrollableView_p_scroller_8_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c25 = a0 => ({
  options: a0
});
function TTScrollableView_p_scroller_8_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TTScrollableView_p_scroller_8_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 5);
  }
  if (rf & 2) {
    const scrollerOptions_r16 = ctx.options;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r15.loaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c25, scrollerOptions_r16));
  }
}
function TTScrollableView_p_scroller_8_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TTScrollableView_p_scroller_8_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
const _c26 = a0 => ({
  height: a0
});
function TTScrollableView_p_scroller_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-scroller", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onLazyLoad", function TTScrollableView_p_scroller_8_Template_p_scroller_onLazyLoad_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.tt.onLazyItemLoad($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TTScrollableView_p_scroller_8_ng_template_2_Template, 1, 5, "ng-template", 13)(3, TTScrollableView_p_scroller_8_ng_container_3_Template, 2, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c26, ctx_r4.tt.scrollHeight !== "flex" ? ctx_r4.tt.scrollHeight : undefined));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r4.tt.serializedValue)("scrollHeight", ctx_r4.scrollHeight !== "flex" ? undefined : "100%")("itemSize", ctx_r4.tt.virtualScrollItemSize || ctx_r4.tt._virtualRowHeight)("lazy", ctx_r4.tt.lazy)("options", ctx_r4.tt.virtualScrollOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.loaderTemplate);
  }
}
function TTScrollableView_ng_container_9_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c27 = (a0, a1) => ({
  "max-height": a0,
  "overflow-y": a1
});
const _c28 = () => ({});
function TTScrollableView_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TTScrollableView_ng_container_9_ng_container_3_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c27, ctx_r5.tt.scrollHeight !== "flex" ? ctx_r5.scrollHeight : undefined, !ctx_r5.frozen && ctx_r5.tt.scrollHeight ? "scroll" : undefined));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r7)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c24, ctx_r5.serializedValue, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c28)));
  }
}
function TTScrollableView_ng_template_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TTScrollableView_ng_template_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 21, 22);
  }
}
function TTScrollableView_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TTScrollableView_ng_template_10_ng_container_2_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tbody", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TTScrollableView_ng_template_10_div_4_Template, 2, 0, "div", 20);
  }
  if (rf & 2) {
    const items_r22 = ctx.$implicit;
    const scrollerOptions_r23 = ctx.options;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](scrollerOptions_r23.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r6.tt.tableStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", scrollerOptions_r23.contentStyleClass)("ngStyle", ctx_r6.tt.tableStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.frozen ? ctx_r6.tt.frozenColGroupTemplate || ctx_r6.tt.colGroupTemplate : ctx_r6.tt.colGroupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c7, ctx_r6.columns));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pTreeTableBody", ctx_r6.columns)("pTreeTableBodyTemplate", ctx_r6.frozen ? ctx_r6.tt.frozenBodyTemplate || ctx_r6.tt.bodyTemplate : ctx_r6.tt.bodyTemplate)("serializedNodes", items_r22)("frozen", ctx_r6.frozen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.frozen);
  }
}
function TTScrollableView_div_12_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TTScrollableView_div_12_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TTScrollableView_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23, 24)(2, "div", 25, 26)(4, "table", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TTScrollableView_div_12_ng_container_5_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tfoot", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TTScrollableView_div_12_ng_container_7_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r8.tt.tableStyleClass)("ngStyle", ctx_r8.tt.tableStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.frozen ? ctx_r8.tt.frozenColGroupTemplate || ctx_r8.tt.colGroupTemplate : ctx_r8.tt.colGroupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c7, ctx_r8.columns));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.frozen ? ctx_r8.tt.frozenFooterTemplate || ctx_r8.tt.footerTemplate : ctx_r8.tt.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c7, ctx_r8.columns));
  }
}
function TTSortIcon_ng_container_0_SortAltIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SortAltIcon", 3);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-sortable-column-icon");
  }
}
function TTSortIcon_ng_container_0_SortAmountUpAltIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SortAmountUpAltIcon", 3);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-sortable-column-icon");
  }
}
function TTSortIcon_ng_container_0_SortAmountDownIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SortAmountDownIcon", 3);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-sortable-column-icon");
  }
}
function TTSortIcon_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TTSortIcon_ng_container_0_SortAltIcon_1_Template, 1, 1, "SortAltIcon", 2)(2, TTSortIcon_ng_container_0_SortAmountUpAltIcon_2_Template, 1, 1, "SortAmountUpAltIcon", 2)(3, TTSortIcon_ng_container_0_SortAmountDownIcon_3_Template, 1, 1, "SortAmountDownIcon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sortOrder === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sortOrder === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.sortOrder === -1);
  }
}
function TTSortIcon_span_1_1_ng_template_0_Template(rf, ctx) {}
function TTSortIcon_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TTSortIcon_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TTSortIcon_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TTSortIcon_span_1_1_Template, 1, 0, null, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.tt.sortIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c7, ctx_r1.sortOrder));
  }
}
function TTCheckbox_ng_container_5_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "CheckIcon", 7);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-checkbox-icon");
  }
}
function TTCheckbox_ng_container_5_MinusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "MinusIcon", 7);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-checkbox-icon");
  }
}
function TTCheckbox_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TTCheckbox_ng_container_5_CheckIcon_1_Template, 1, 1, "CheckIcon", 6)(2, TTCheckbox_ng_container_5_MinusIcon_2_Template, 1, 1, "MinusIcon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.rowNode.node.partialSelected);
  }
}
function TTCheckbox_span_6_1_ng_template_0_Template(rf, ctx) {}
function TTCheckbox_span_6_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TTCheckbox_span_6_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c29 = (a0, a1) => ({
  $implicit: a0,
  partialSelected: a1
});
function TTCheckbox_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TTCheckbox_span_6_1_Template, 1, 0, null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.tt.checkboxIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c29, ctx_r2.checked, ctx_r2.rowNode.node.partialSelected));
  }
}
const _c30 = a0 => ({
  "p-checkbox-focused": a0
});
const _c31 = (a1, a2, a3, a4) => ({
  "p-checkbox-box": true,
  "p-highlight": a1,
  "p-focus": a2,
  "p-indeterminate": a3,
  "p-disabled": a4
});
const _c32 = ["box"];
function TTHeaderCheckbox_ng_container_6_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "CheckIcon", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-checkbox-icon");
  }
}
function TTHeaderCheckbox_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TTHeaderCheckbox_ng_container_6_CheckIcon_1_Template, 1, 1, "CheckIcon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.checked);
  }
}
function TTHeaderCheckbox_span_7_1_ng_template_0_Template(rf, ctx) {}
function TTHeaderCheckbox_span_7_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TTHeaderCheckbox_span_7_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TTHeaderCheckbox_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TTHeaderCheckbox_span_7_1_Template, 1, 0, null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.tt.headerCheckboxIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c7, ctx_r3.checked));
  }
}
const _c33 = (a1, a2, a3) => ({
  "p-checkbox-box": true,
  "p-highlight": a1,
  "p-focus": a2,
  "p-disabled": a3
});
function TreeTableCellEditor_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TreeTableCellEditor_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeTableCellEditor_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.inputTemplate);
  }
}
function TreeTableCellEditor_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TreeTableCellEditor_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeTableCellEditor_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.outputTemplate);
  }
}
function TreeTableToggler_ng_container_1_ChevronDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function TreeTableToggler_ng_container_1_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronRightIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function TreeTableToggler_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeTableToggler_ng_container_1_ChevronDownIcon_1_Template, 1, 1, "ChevronDownIcon", 1)(2, TreeTableToggler_ng_container_1_ChevronRightIcon_2_Template, 1, 1, "ChevronRightIcon", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.rowNode.node.expanded);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.rowNode.node.expanded);
  }
}
function TreeTableToggler_2_ng_template_0_Template(rf, ctx) {}
function TreeTableToggler_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeTableToggler_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
let TreeTableService = /*#__PURE__*/(() => {
  class TreeTableService {
    sortSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    selectionSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    contextMenuSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    uiUpdateSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    totalRecordsSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    sortSource$ = this.sortSource.asObservable();
    selectionSource$ = this.selectionSource.asObservable();
    contextMenuSource$ = this.contextMenuSource.asObservable();
    uiUpdateSource$ = this.uiUpdateSource.asObservable();
    totalRecordsSource$ = this.totalRecordsSource.asObservable();
    onSort(sortMeta) {
      this.sortSource.next(sortMeta);
    }
    onSelectionChange() {
      this.selectionSource.next(null);
    }
    onContextMenu(node) {
      this.contextMenuSource.next(node);
    }
    onUIUpdate(value) {
      this.uiUpdateSource.next(value);
    }
    onTotalRecordsChange(value) {
      this.totalRecordsSource.next(value);
    }
    static ɵfac = function TreeTableService_Factory(t) {
      return new (t || TreeTableService)();
    };
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TreeTableService,
      factory: TreeTableService.ɵfac
    });
  }
  return TreeTableService;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * TreeTable is used to display hierarchical data in tabular format.
 * @group Components
 */
let TreeTable = /*#__PURE__*/(() => {
  class TreeTable {
    document;
    renderer;
    el;
    cd;
    zone;
    tableService;
    filterService;
    /**
     * An array of objects to represent dynamic columns.
     * @group Props
     */
    columns;
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
    /**
     * Inline style of the table.
     * @group Props
     */
    tableStyle;
    /**
     * Style class of the table.
     * @group Props
     */
    tableStyleClass;
    /**
     * Whether the cell widths scale according to their content or not.
     * @group Props
     */
    autoLayout;
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @group Props
     */
    lazy = false;
    /**
     * Whether to call lazy loading on initialization.
     * @group Props
     */
    lazyLoadOnInit = true;
    /**
     * When specified as true, enables the pagination.
     * @group Props
     */
    paginator;
    /**
     * Number of rows to display per page.
     * @group Props
     */
    rows;
    /**
     * Index of the first row to be displayed.
     * @group Props
     */
    first = 0;
    /**
     * Number of page links to display in paginator.
     * @group Props
     */
    pageLinks = 5;
    /**
     * Array of integer/object values to display inside rows per page dropdown of paginator
     * @group Props
     */
    rowsPerPageOptions;
    /**
     * Whether to show it even there is only one page.
     * @group Props
     */
    alwaysShowPaginator = true;
    /**
     * Position of the paginator.
     * @group Props
     */
    paginatorPosition = 'bottom';
    /**
     * Custom style class for paginator
     * @group Props
     */
    paginatorStyleClass;
    /**
     * Target element to attach the paginator dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    paginatorDropdownAppendTo;
    /**
     * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
     * @group Props
     */
    currentPageReportTemplate = '{currentPage} of {totalPages}';
    /**
     * Whether to display current page report.
     * @group Props
     */
    showCurrentPageReport;
    /**
     * Whether to display a dropdown to navigate to any page.
     * @group Props
     */
    showJumpToPageDropdown;
    /**
     * When enabled, icons are displayed on paginator to go first and last page.
     * @group Props
     */
    showFirstLastIcon = true;
    /**
     * Whether to show page links.
     * @group Props
     */
    showPageLinks = true;
    /**
     * Sort order to use when an unsorted column gets sorted by user interaction.
     * @group Props
     */
    defaultSortOrder = 1;
    /**
     * Defines whether sorting works on single column or on multiple columns.
     * @group Props
     */
    sortMode = 'single';
    /**
     * When true, resets paginator to first page after sorting.
     * @group Props
     */
    resetPageOnSort = true;
    /**
     * Whether to use the default sorting or a custom one using sortFunction.
     * @group Props
     */
    customSort;
    /**
     * Specifies the selection mode, valid values are "single" and "multiple".
     * @group Props
     */
    selectionMode;
    /**
     * Selected row with a context menu.
     * @group Props
     */
    contextMenuSelection;
    /**
     * Mode of the contet menu selection.
     * @group Props
     */
    contextMenuSelectionMode = 'separate';
    /**
     * A property to uniquely identify a record in data.
     * @group Props
     */
    dataKey;
    /**
     * Defines whether metaKey is should be considered for the selection. On touch enabled devices, metaKeySelection is turned off automatically.
     * @group Props
     */
    metaKeySelection = true;
    /**
     * Algorithm to define if a row is selected, valid values are "equals" that compares by reference and "deepEquals" that compares all fields.
     * @group Props
     */
    compareSelectionBy = 'deepEquals';
    /**
     * Adds hover effect to rows without the need for selectionMode.
     * @group Props
     */
    rowHover;
    /**
     * Displays a loader to indicate data load is in progress.
     * @group Props
     */
    loading;
    /**
     * The icon to show while indicating data load is in progress.
     * @group Props
     */
    loadingIcon;
    /**
     * Whether to show the loading mask when loading property is true.
     * @group Props
     */
    showLoader = true;
    /**
     * When specifies, enables horizontal and/or vertical scrolling.
     * @group Props
     */
    scrollable;
    /**
     * Height of the scroll viewport in fixed pixels or the "flex" keyword for a dynamic size.
     * @group Props
     */
    scrollHeight;
    /**
     * Whether the data should be loaded on demand during scroll.
     * @group Props
     */
    virtualScroll;
    /**
     * Height of a row to use in calculations of virtual scrolling.
     * @group Props
     */
    virtualScrollItemSize;
    /**
     * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
     * @group Props
     */
    virtualScrollOptions;
    /**
     * The delay (in milliseconds) before triggering the virtual scroll. This determines the time gap between the user's scroll action and the actual rendering of the next set of items in the virtual scroll.
     * @group Props
     */
    virtualScrollDelay = 150;
    /**
     * Width of the frozen columns container.
     * @group Props
     */
    frozenWidth;
    /**
     * An array of objects to represent dynamic columns that are frozen.
     * @group Props
     */
    frozenColumns;
    /**
     * When enabled, columns can be resized using drag and drop.
     * @group Props
     */
    resizableColumns;
    /**
     * Defines whether the overall table width should change on column resize, valid values are "fit" and "expand".
     * @group Props
     */
    columnResizeMode = 'fit';
    /**
     * When enabled, columns can be reordered using drag and drop.
     * @group Props
     */
    reorderableColumns;
    /**
     * Local ng-template varilable of a ContextMenu.
     * @group Props
     */
    contextMenu;
    /**
     * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity.
     * @group Props
     */
    rowTrackBy = (index, item) => item;
    /**
     * An array of FilterMetadata objects to provide external filters.
     * @group Props
     */
    filters = {};
    /**
     * An array of fields as string to use in global filtering.
     * @group Props
     */
    globalFilterFields;
    /**
     * Delay in milliseconds before filtering the data.
     * @group Props
     */
    filterDelay = 300;
    /**
     * Mode for filtering valid values are "lenient" and "strict". Default is lenient.
     * @group Props
     */
    filterMode = 'lenient';
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     * @group Props
     */
    filterLocale;
    /**
     * Locale to be used in paginator formatting.
     * @group Props
     */
    paginatorLocale;
    /**
     * Number of total records, defaults to length of value when not defined.
     * @group Props
     */
    get totalRecords() {
      return this._totalRecords;
    }
    set totalRecords(val) {
      this._totalRecords = val;
      this.tableService.onTotalRecordsChange(this._totalRecords);
    }
    /**
     * Name of the field to sort data by default.
     * @group Props
     */
    get sortField() {
      return this._sortField;
    }
    set sortField(val) {
      this._sortField = val;
    }
    /**
     * Order to sort when default sorting is enabled.
     * @defaultValue 1
     * @group Props
     */
    get sortOrder() {
      return this._sortOrder;
    }
    set sortOrder(val) {
      this._sortOrder = val;
    }
    /**
     * An array of SortMeta objects to sort the data by default in multiple sort mode.
     * @defaultValue null
     * @group Props
     */
    get multiSortMeta() {
      return this._multiSortMeta;
    }
    set multiSortMeta(val) {
      this._multiSortMeta = val;
    }
    /**
     * Selected row in single mode or an array of values in multiple mode.
     * @defaultValue null
     * @group Props
     */
    get selection() {
      return this._selection;
    }
    set selection(val) {
      this._selection = val;
    }
    /**
     * An array of objects to display.
     * @defaultValue null
     * @group Props
     */
    get value() {
      return this._value;
    }
    set value(val) {
      this._value = val;
    }
    /**
     * Indicates the height of rows to be scrolled.
     * @defaultValue 28
     * @group Props
     * @deprecated use virtualScrollItemSize property instead.
     */
    get virtualRowHeight() {
      return this._virtualRowHeight;
    }
    set virtualRowHeight(val) {
      this._virtualRowHeight = val;
      console.warn('The virtualRowHeight property is deprecated, use virtualScrollItemSize property instead.');
    }
    _virtualRowHeight = 28;
    /**
     * Callback to invoke on selected node change.
     * @param {TreeTableNode} object - Node instance.
     * @group Emits
     */
    selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on context menu selection change.
     * @param {TreeTableNode} object - Node instance.
     * @group Emits
     */
    contextMenuSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when data is filtered.
     * @param {TreeTableFilterEvent} event - Custom filter event.
     * @group Emits
     */
    onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a node is expanded.
     * @param {TreeTableNode} object - Node instance.
     * @group Emits
     */
    onNodeExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a node is collapsed.
     * @param {TreeTableNodeCollapseEvent} event - Node collapse event.
     * @group Emits
     */
    onNodeCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when pagination occurs.
     * @param {TreeTablePaginatorState} object - Paginator state.
     * @group Emits
     */
    onPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a column gets sorted.
     * @param {Object} Object - Sort data.
     * @group Emits
     */
    onSort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when paging, sorting or filtering happens in lazy mode.
     * @param {TreeTableLazyLoadEvent} event - Custom lazy load event.
     * @group Emits
     */
    onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An event emitter to invoke on custom sorting, refer to sorting section for details.
     * @param {TreeTableSortEvent} event - Custom sort event.
     * @group Emits
     */
    sortFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a column is resized.
     * @param {TreeTableColResizeEvent} event - Custom column resize event.
     * @group Emits
     */
    onColResize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a column is reordered.
     * @param {TreeTableColumnReorderEvent} event - Custom column reorder.
     * @group Emits
     */
    onColReorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a node is selected.
     * @param {TreeTableNode} object - Node instance.
     * @group Emits
     */
    onNodeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a node is unselected.
     * @param {TreeTableNodeUnSelectEvent} event - Custom node unselect event.
     * @group Emits
     */
    onNodeUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a node is selected with right click.
     * @param {TreeTableContextMenuSelectEvent} event - Custom context menu select event.
     * @group Emits
     */
    onContextMenuSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when state of header checkbox changes.
     * @param {TreeTableHeaderCheckboxToggleEvent} event - Custom checkbox toggle event.
     * @group Emits
     */
    onHeaderCheckboxToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a cell switches to edit mode.
     * @param {TreeTableEditEvent} event - Custom edit event.
     * @group Emits
     */
    onEditInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when cell edit is completed.
     * @param {TreeTableEditEvent} event - Custom edit event.
     * @group Emits
     */
    onEditComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when cell edit is cancelled with escape key.
     * @param {TreeTableEditEvent} event - Custom edit event.
     * @group Emits
     */
    onEditCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    containerViewChild;
    resizeHelperViewChild;
    reorderIndicatorUpViewChild;
    reorderIndicatorDownViewChild;
    tableViewChild;
    scrollableViewChild;
    scrollableFrozenViewChild;
    templates;
    _value = [];
    serializedValue;
    _totalRecords = 0;
    _multiSortMeta;
    _sortField;
    _sortOrder = 1;
    filteredNodes;
    filterTimeout;
    colGroupTemplate;
    captionTemplate;
    headerTemplate;
    bodyTemplate;
    footerTemplate;
    summaryTemplate;
    emptyMessageTemplate;
    paginatorLeftTemplate;
    paginatorRightTemplate;
    paginatorDropdownItemTemplate;
    frozenHeaderTemplate;
    frozenBodyTemplate;
    frozenFooterTemplate;
    frozenColGroupTemplate;
    loadingIconTemplate;
    reorderIndicatorUpIconTemplate;
    reorderIndicatorDownIconTemplate;
    sortIconTemplate;
    checkboxIconTemplate;
    headerCheckboxIconTemplate;
    togglerIconTemplate;
    paginatorFirstPageLinkIconTemplate;
    paginatorLastPageLinkIconTemplate;
    paginatorPreviousPageLinkIconTemplate;
    paginatorNextPageLinkIconTemplate;
    lastResizerHelperX;
    reorderIconWidth;
    reorderIconHeight;
    draggedColumn;
    dropPosition;
    preventSelectionSetterPropagation;
    _selection;
    selectionKeys = {};
    rowTouched;
    editingCell;
    editingCellData;
    editingCellField;
    editingCellClick;
    documentEditListener;
    initialized;
    toggleRowIndex;
    ngOnInit() {
      if (this.lazy && this.lazyLoadOnInit && !this.virtualScroll) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      }
      this.initialized = true;
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'caption':
            this.captionTemplate = item.template;
            break;
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'body':
            this.bodyTemplate = item.template;
            break;
          case 'footer':
            this.footerTemplate = item.template;
            break;
          case 'summary':
            this.summaryTemplate = item.template;
            break;
          case 'colgroup':
            this.colGroupTemplate = item.template;
            break;
          case 'emptymessage':
            this.emptyMessageTemplate = item.template;
            break;
          case 'paginatorleft':
            this.paginatorLeftTemplate = item.template;
            break;
          case 'paginatorright':
            this.paginatorRightTemplate = item.template;
            break;
          case 'paginatordropdownitem':
            this.paginatorDropdownItemTemplate = item.template;
            break;
          case 'frozenheader':
            this.frozenHeaderTemplate = item.template;
            break;
          case 'frozenbody':
            this.frozenBodyTemplate = item.template;
            break;
          case 'frozenfooter':
            this.frozenFooterTemplate = item.template;
            break;
          case 'frozencolgroup':
            this.frozenColGroupTemplate = item.template;
            break;
          case 'loadingicon':
            this.loadingIconTemplate = item.template;
            break;
          case 'reorderindicatorupicon':
            this.reorderIndicatorUpIconTemplate = item.template;
            break;
          case 'reorderindicatordownicon':
            this.reorderIndicatorDownIconTemplate = item.template;
            break;
          case 'sorticon':
            this.sortIconTemplate = item.template;
            break;
          case 'checkboxicon':
            this.checkboxIconTemplate = item.template;
            break;
          case 'headercheckboxicon':
            this.headerCheckboxIconTemplate = item.template;
            break;
          case 'togglericon':
            this.togglerIconTemplate = item.template;
            break;
          case 'paginatorfirstpagelinkicon':
            this.paginatorFirstPageLinkIconTemplate = item.template;
            break;
          case 'paginatorlastpagelinkicon':
            this.paginatorLastPageLinkIconTemplate = item.template;
            break;
          case 'paginatorpreviouspagelinkicon':
            this.paginatorPreviousPageLinkIconTemplate = item.template;
            break;
          case 'paginatornextpagelinkicon':
            this.paginatorNextPageLinkIconTemplate = item.template;
            break;
        }
      });
    }
    constructor(document, renderer, el, cd, zone, tableService, filterService) {
      this.document = document;
      this.renderer = renderer;
      this.el = el;
      this.cd = cd;
      this.zone = zone;
      this.tableService = tableService;
      this.filterService = filterService;
    }
    ngOnChanges(simpleChange) {
      if (simpleChange.value) {
        this._value = simpleChange.value.currentValue;
        if (!this.lazy) {
          this.totalRecords = this._value ? this._value.length : 0;
          if (this.sortMode == 'single' && this.sortField) this.sortSingle();else if (this.sortMode == 'multiple' && this.multiSortMeta) this.sortMultiple();else if (this.hasFilter())
            //sort already filters
            this._filter();
        }
        this.updateSerializedValue();
        this.tableService.onUIUpdate(this.value);
      }
      if (simpleChange.sortField) {
        this._sortField = simpleChange.sortField.currentValue;
        //avoid triggering lazy load prior to lazy initialization at onInit
        if (!this.lazy || this.initialized) {
          if (this.sortMode === 'single') {
            this.sortSingle();
          }
        }
      }
      if (simpleChange.sortOrder) {
        this._sortOrder = simpleChange.sortOrder.currentValue;
        //avoid triggering lazy load prior to lazy initialization at onInit
        if (!this.lazy || this.initialized) {
          if (this.sortMode === 'single') {
            this.sortSingle();
          }
        }
      }
      if (simpleChange.multiSortMeta) {
        this._multiSortMeta = simpleChange.multiSortMeta.currentValue;
        if (this.sortMode === 'multiple') {
          this.sortMultiple();
        }
      }
      if (simpleChange.selection) {
        this._selection = simpleChange.selection.currentValue;
        if (!this.preventSelectionSetterPropagation) {
          this.updateSelectionKeys();
          this.tableService.onSelectionChange();
        }
        this.preventSelectionSetterPropagation = false;
      }
    }
    updateSerializedValue() {
      this.serializedValue = [];
      if (this.paginator) this.serializePageNodes();else this.serializeNodes(null, this.filteredNodes || this.value, 0, true);
    }
    serializeNodes(parent, nodes, level, visible) {
      if (nodes && nodes.length) {
        for (let node of nodes) {
          node.parent = parent;
          const rowNode = {
            node: node,
            parent: parent,
            level: level,
            visible: visible && (parent ? parent.expanded : true)
          };
          this.serializedValue.push(rowNode);
          if (rowNode.visible && node.expanded) {
            this.serializeNodes(node, node.children, level + 1, rowNode.visible);
          }
        }
      }
    }
    serializePageNodes() {
      let data = this.filteredNodes || this.value;
      this.serializedValue = [];
      if (data && data.length) {
        const first = this.lazy ? 0 : this.first;
        for (let i = first; i < first + this.rows; i++) {
          let node = data[i];
          if (node) {
            this.serializedValue.push({
              node: node,
              parent: null,
              level: 0,
              visible: true
            });
            this.serializeNodes(node, node.children, 1, true);
          }
        }
      }
    }
    updateSelectionKeys() {
      if (this.dataKey && this._selection) {
        this.selectionKeys = {};
        if (Array.isArray(this._selection)) {
          for (let node of this._selection) {
            this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(node.data, this.dataKey))] = 1;
          }
        } else {
          this.selectionKeys[String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(this._selection.data, this.dataKey))] = 1;
        }
      }
    }
    onPageChange(event) {
      this.first = event.first;
      this.rows = event.rows;
      if (this.lazy) this.onLazyLoad.emit(this.createLazyLoadMetadata());else this.serializePageNodes();
      this.onPage.emit({
        first: this.first,
        rows: this.rows
      });
      this.tableService.onUIUpdate(this.value);
      if (this.scrollable) {
        this.resetScrollTop();
      }
    }
    sort(event) {
      let originalEvent = event.originalEvent;
      if (this.sortMode === 'single') {
        this._sortOrder = this.sortField === event.field ? this.sortOrder * -1 : this.defaultSortOrder;
        this._sortField = event.field;
        this.sortSingle();
        if (this.resetPageOnSort && this.scrollable) {
          this.resetScrollTop();
        }
      }
      if (this.sortMode === 'multiple') {
        let metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
        let sortMeta = this.getSortMeta(event.field);
        if (sortMeta) {
          if (!metaKey) {
            this._multiSortMeta = [{
              field: event.field,
              order: sortMeta.order * -1
            }];
            if (this.resetPageOnSort && this.scrollable) {
              this.resetScrollTop();
            }
          } else {
            sortMeta.order = sortMeta.order * -1;
          }
        } else {
          if (!metaKey || !this.multiSortMeta) {
            this._multiSortMeta = [];
            if (this.resetPageOnSort && this.scrollable) {
              this.resetScrollTop();
            }
          }
          this.multiSortMeta.push({
            field: event.field,
            order: this.defaultSortOrder
          });
        }
        this.sortMultiple();
      }
    }
    sortSingle() {
      if (this.sortField && this.sortOrder) {
        if (this.lazy) {
          this.onLazyLoad.emit(this.createLazyLoadMetadata());
        } else if (this.value) {
          this.sortNodes(this.value);
          if (this.hasFilter()) {
            this._filter();
          }
        }
        let sortMeta = {
          field: this.sortField,
          order: this.sortOrder
        };
        this.onSort.emit(sortMeta);
        this.tableService.onSort(sortMeta);
        this.updateSerializedValue();
      }
    }
    sortNodes(nodes) {
      if (!nodes || nodes.length === 0) {
        return;
      }
      if (this.customSort) {
        this.sortFunction.emit({
          data: nodes,
          mode: this.sortMode,
          field: this.sortField,
          order: this.sortOrder
        });
      } else {
        nodes.sort((node1, node2) => {
          let value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(node1.data, this.sortField);
          let value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(node2.data, this.sortField);
          let result = null;
          if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
            numeric: true
          });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
          return this.sortOrder * result;
        });
      }
      for (let node of nodes) {
        this.sortNodes(node.children);
      }
    }
    sortMultiple() {
      if (this.multiSortMeta) {
        if (this.lazy) {
          this.onLazyLoad.emit(this.createLazyLoadMetadata());
        } else if (this.value) {
          this.sortMultipleNodes(this.value);
          if (this.hasFilter()) {
            this._filter();
          }
        }
        this.onSort.emit({
          multisortmeta: this.multiSortMeta
        });
        this.updateSerializedValue();
        this.tableService.onSort(this.multiSortMeta);
      }
    }
    sortMultipleNodes(nodes) {
      if (!nodes || nodes.length === 0) {
        return;
      }
      if (this.customSort) {
        this.sortFunction.emit({
          data: this.value,
          mode: this.sortMode,
          multiSortMeta: this.multiSortMeta
        });
      } else {
        nodes.sort((node1, node2) => {
          return this.multisortField(node1, node2, this.multiSortMeta, 0);
        });
      }
      for (let node of nodes) {
        this.sortMultipleNodes(node.children);
      }
    }
    multisortField(node1, node2, multiSortMeta, index) {
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isEmpty(this.multiSortMeta) || primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isEmpty(multiSortMeta[index])) {
        return 0;
      }
      let value1 = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(node1.data, multiSortMeta[index].field);
      let value2 = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(node2.data, multiSortMeta[index].field);
      let result = null;
      if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;
      if (typeof value1 == 'string' || value1 instanceof String) {
        if (value1.localeCompare && value1 != value2) {
          return multiSortMeta[index].order * value1.localeCompare(value2, undefined, {
            numeric: true
          });
        }
      } else {
        result = value1 < value2 ? -1 : 1;
      }
      if (value1 == value2) {
        return multiSortMeta.length - 1 > index ? this.multisortField(node1, node2, multiSortMeta, index + 1) : 0;
      }
      return multiSortMeta[index].order * result;
    }
    getSortMeta(field) {
      if (this.multiSortMeta && this.multiSortMeta.length) {
        for (let i = 0; i < this.multiSortMeta.length; i++) {
          if (this.multiSortMeta[i].field === field) {
            return this.multiSortMeta[i];
          }
        }
      }
      return null;
    }
    isSorted(field) {
      if (this.sortMode === 'single') {
        return this.sortField && this.sortField === field;
      } else if (this.sortMode === 'multiple') {
        let sorted = false;
        if (this.multiSortMeta) {
          for (let i = 0; i < this.multiSortMeta.length; i++) {
            if (this.multiSortMeta[i].field == field) {
              sorted = true;
              break;
            }
          }
        }
        return sorted;
      }
    }
    createLazyLoadMetadata() {
      return {
        first: this.first,
        rows: this.rows,
        sortField: this.sortField,
        sortOrder: this.sortOrder,
        filters: this.filters,
        globalFilter: this.filters && this.filters['global'] ? this.filters['global'].value : null,
        multiSortMeta: this.multiSortMeta,
        forceUpdate: () => this.cd.detectChanges()
      };
    }
    onLazyItemLoad(event) {
      this.onLazyLoad.emit({
        ...this.createLazyLoadMetadata(),
        ...event,
        rows: event.last - event.first
      });
    }
    /**
     * Resets scroll to top.
     * @group Method
     */
    resetScrollTop() {
      if (this.virtualScroll) this.scrollToVirtualIndex(0);else this.scrollTo({
        top: 0
      });
    }
    /**
     * Scrolls to given index when using virtual scroll.
     * @param {number} index - index of the element.
     * @group Method
     */
    scrollToVirtualIndex(index) {
      if (this.scrollableViewChild) {
        this.scrollableViewChild.scrollToVirtualIndex(index);
      }
      if (this.scrollableFrozenViewChild) {
        this.scrollableViewChild.scrollToVirtualIndex(index);
      }
    }
    /**
     * Scrolls to given index.
     * @param {ScrollToOptions} options - Scroll options.
     * @group Method
     */
    scrollTo(options) {
      if (this.scrollableViewChild) {
        this.scrollableViewChild.scrollTo(options);
      }
      if (this.scrollableFrozenViewChild) {
        this.scrollableViewChild.scrollTo(options);
      }
    }
    isEmpty() {
      let data = this.filteredNodes || this.value;
      return data == null || data.length == 0;
    }
    getBlockableElement() {
      return this.el.nativeElement.children[0];
    }
    onColumnResizeBegin(event) {
      let containerLeft = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOffset(this.containerViewChild?.nativeElement).left;
      this.lastResizerHelperX = event.pageX - containerLeft + this.containerViewChild?.nativeElement.scrollLeft;
      event.preventDefault();
    }
    onColumnResize(event) {
      let containerLeft = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOffset(this.containerViewChild?.nativeElement).left;
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.containerViewChild?.nativeElement, 'p-unselectable-text');
      this.resizeHelperViewChild.nativeElement.style.height = this.containerViewChild?.nativeElement.offsetHeight + 'px';
      this.resizeHelperViewChild.nativeElement.style.top = 0 + 'px';
      this.resizeHelperViewChild.nativeElement.style.left = event.pageX - containerLeft + this.containerViewChild?.nativeElement.scrollLeft + 'px';
      this.resizeHelperViewChild.nativeElement.style.display = 'block';
    }
    onColumnResizeEnd(event, column) {
      let delta = this.resizeHelperViewChild.nativeElement.offsetLeft - this.lastResizerHelperX;
      let columnWidth = column.offsetWidth;
      let newColumnWidth = columnWidth + delta;
      let minWidth = column.style.minWidth || 15;
      if (columnWidth + delta > parseInt(minWidth)) {
        if (this.columnResizeMode === 'fit') {
          let nextColumn = column.nextElementSibling;
          while (!nextColumn.offsetParent) {
            nextColumn = nextColumn.nextElementSibling;
          }
          if (nextColumn) {
            let nextColumnWidth = nextColumn.offsetWidth - delta;
            let nextColumnMinWidth = nextColumn.style.minWidth || 15;
            if (newColumnWidth > 15 && nextColumnWidth > parseInt(nextColumnMinWidth)) {
              if (this.scrollable) {
                let scrollableView = this.findParentScrollableView(column);
                let scrollableBodyTable = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-body table') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(scrollableView, '.p-scroller-viewport table');
                let scrollableHeaderTable = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-header-table');
                let scrollableFooterTable = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-footer-table');
                let resizeColumnIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.index(column);
                this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
              } else {
                column.style.width = newColumnWidth + 'px';
                if (nextColumn) {
                  nextColumn.style.width = nextColumnWidth + 'px';
                }
              }
            }
          }
        } else if (this.columnResizeMode === 'expand') {
          if (this.scrollable) {
            let scrollableView = this.findParentScrollableView(column);
            let scrollableBody = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-body') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(scrollableView, '.p-scroller-viewport');
            let scrollableHeader = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-header');
            let scrollableFooter = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-footer');
            let scrollableBodyTable = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(scrollableView, '.p-treetable-scrollable-body table') || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(scrollableView, '.p-scroller-viewport table');
            let scrollableHeaderTable = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-header-table');
            let scrollableFooterTable = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(scrollableView, 'table.p-treetable-scrollable-footer-table');
            scrollableBodyTable.style.width = scrollableBodyTable.offsetWidth + delta + 'px';
            scrollableHeaderTable.style.width = scrollableHeaderTable.offsetWidth + delta + 'px';
            if (scrollableFooterTable) {
              scrollableFooterTable.style.width = scrollableFooterTable.offsetWidth + delta + 'px';
            }
            let resizeColumnIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.index(column);
            const scrollableBodyTableWidth = column ? scrollableBodyTable.offsetWidth + delta : newColumnWidth;
            const scrollableHeaderTableWidth = column ? scrollableHeaderTable.offsetWidth + delta : newColumnWidth;
            const isContainerInViewport = this.containerViewChild?.nativeElement.offsetWidth >= scrollableBodyTableWidth;
            let setWidth = (container, table, width, isContainerInViewport) => {
              if (container && table) {
                container.style.width = isContainerInViewport ? width + primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.calculateScrollbarWidth(scrollableBody) + 'px' : 'auto';
                table.style.width = width + 'px';
              }
            };
            setWidth(scrollableBody, scrollableBodyTable, scrollableBodyTableWidth, isContainerInViewport);
            setWidth(scrollableHeader, scrollableHeaderTable, scrollableHeaderTableWidth, isContainerInViewport);
            setWidth(scrollableFooter, scrollableFooterTable, scrollableHeaderTableWidth, isContainerInViewport);
            this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, null);
            this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, null);
            this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, null);
          } else {
            this.tableViewChild.nativeElement.style.width = this.tableViewChild?.nativeElement.offsetWidth + delta + 'px';
            column.style.width = newColumnWidth + 'px';
            let containerWidth = this.tableViewChild?.nativeElement.style.width;
            this.containerViewChild.nativeElement.style.width = containerWidth + 'px';
          }
        }
        this.onColResize.emit({
          element: column,
          delta: delta
        });
      }
      this.resizeHelperViewChild.nativeElement.style.display = 'none';
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.containerViewChild?.nativeElement, 'p-unselectable-text');
    }
    findParentScrollableView(column) {
      if (column) {
        let parent = column.parentElement;
        while (parent && !primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(parent, 'p-treetable-scrollable-view')) {
          parent = parent.parentElement;
        }
        return parent;
      } else {
        return null;
      }
    }
    resizeColGroup(table, resizeColumnIndex, newColumnWidth, nextColumnWidth) {
      if (table) {
        let colGroup = table.children[0].nodeName === 'COLGROUP' ? table.children[0] : null;
        if (colGroup) {
          let col = colGroup.children[resizeColumnIndex];
          let nextCol = col.nextElementSibling;
          col.style.width = newColumnWidth + 'px';
          if (nextCol && nextColumnWidth) {
            nextCol.style.width = nextColumnWidth + 'px';
          }
        } else {
          throw 'Scrollable tables require a colgroup to support resizable columns';
        }
      }
    }
    onColumnDragStart(event, columnElement) {
      this.reorderIconWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild?.nativeElement);
      this.reorderIconHeight = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild?.nativeElement);
      this.draggedColumn = columnElement;
      event.dataTransfer.setData('text', 'b'); // For firefox
    }

    onColumnDragEnter(event, dropHeader) {
      if (this.reorderableColumns && this.draggedColumn && dropHeader) {
        event.preventDefault();
        let containerOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOffset(this.containerViewChild?.nativeElement);
        let dropHeaderOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOffset(dropHeader);
        if (this.draggedColumn != dropHeader) {
          let targetLeft = dropHeaderOffset.left - containerOffset.left;
          let targetTop = containerOffset.top - dropHeaderOffset.top;
          let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
          this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + 'px';
          this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';
          if (event.pageX > columnCenter) {
            this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + 'px';
            this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + 'px';
            this.dropPosition = 1;
          } else {
            this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + 'px';
            this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + 'px';
            this.dropPosition = -1;
          }
          this.reorderIndicatorUpViewChild.nativeElement.style.display = 'block';
          this.reorderIndicatorDownViewChild.nativeElement.style.display = 'block';
        } else {
          event.dataTransfer.dropEffect = 'none';
        }
      }
    }
    onColumnDragLeave(event) {
      if (this.reorderableColumns && this.draggedColumn) {
        event.preventDefault();
        this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
        this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
      }
    }
    onColumnDrop(event, dropColumn) {
      event.preventDefault();
      if (this.draggedColumn) {
        let dragIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.indexWithinGroup(this.draggedColumn, 'ttreorderablecolumn');
        let dropIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.indexWithinGroup(dropColumn, 'ttreorderablecolumn');
        let allowDrop = dragIndex != dropIndex;
        if (allowDrop && (dropIndex - dragIndex == 1 && this.dropPosition === -1 || dragIndex - dropIndex == 1 && this.dropPosition === 1)) {
          allowDrop = false;
        }
        if (allowDrop && dropIndex < dragIndex && this.dropPosition === 1) {
          dropIndex = dropIndex + 1;
        }
        if (allowDrop && dropIndex > dragIndex && this.dropPosition === -1) {
          dropIndex = dropIndex - 1;
        }
        if (allowDrop) {
          primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.reorderArray(this.columns, dragIndex, dropIndex);
          this.onColReorder.emit({
            dragIndex: dragIndex,
            dropIndex: dropIndex,
            columns: this.columns
          });
        }
        this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
        this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
        this.draggedColumn.draggable = false;
        this.draggedColumn = null;
        this.dropPosition = null;
      }
    }
    handleRowClick(event) {
      let targetNode = event.originalEvent.target.nodeName;
      if (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.originalEvent.target, 'p-clickable')) {
        return;
      }
      if (this.selectionMode) {
        this.preventSelectionSetterPropagation = true;
        let rowNode = event.rowNode;
        let selected = this.isSelected(rowNode.node);
        let metaSelection = this.rowTouched ? false : this.metaKeySelection;
        let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(rowNode.node.data, this.dataKey)) : null;
        if (metaSelection) {
          let keyboardEvent = event.originalEvent;
          let metaKey = keyboardEvent.metaKey || keyboardEvent.ctrlKey;
          if (selected && metaKey) {
            if (this.isSingleSelectionMode()) {
              this._selection = null;
              this.selectionKeys = {};
              this.selectionChange.emit(null);
            } else {
              let selectionIndex = this.findIndexInSelection(rowNode.node);
              this._selection = this.selection.filter((val, i) => i != selectionIndex);
              this.selectionChange.emit(this.selection);
              if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
              }
            }
            this.onNodeUnselect.emit({
              originalEvent: event.originalEvent,
              node: rowNode.node,
              type: 'row'
            });
          } else {
            if (this.isSingleSelectionMode()) {
              this._selection = rowNode.node;
              this.selectionChange.emit(rowNode.node);
              if (dataKeyValue) {
                this.selectionKeys = {};
                this.selectionKeys[dataKeyValue] = 1;
              }
            } else if (this.isMultipleSelectionMode()) {
              if (metaKey) {
                this._selection = this.selection || [];
              } else {
                this._selection = [];
                this.selectionKeys = {};
              }
              this._selection = [...this.selection, rowNode.node];
              this.selectionChange.emit(this.selection);
              if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
              }
            }
            this.onNodeSelect.emit({
              originalEvent: event.originalEvent,
              node: rowNode.node,
              type: 'row',
              index: event.rowIndex
            });
          }
        } else {
          if (this.selectionMode === 'single') {
            if (selected) {
              this._selection = null;
              this.selectionKeys = {};
              this.selectionChange.emit(this.selection);
              this.onNodeUnselect.emit({
                originalEvent: event.originalEvent,
                node: rowNode.node,
                type: 'row'
              });
            } else {
              this._selection = rowNode.node;
              this.selectionChange.emit(this.selection);
              this.onNodeSelect.emit({
                originalEvent: event.originalEvent,
                node: rowNode.node,
                type: 'row',
                index: event.rowIndex
              });
              if (dataKeyValue) {
                this.selectionKeys = {};
                this.selectionKeys[dataKeyValue] = 1;
              }
            }
          } else if (this.selectionMode === 'multiple') {
            if (selected) {
              let selectionIndex = this.findIndexInSelection(rowNode.node);
              this._selection = this.selection.filter((val, i) => i != selectionIndex);
              this.selectionChange.emit(this.selection);
              this.onNodeUnselect.emit({
                originalEvent: event.originalEvent,
                node: rowNode.node,
                type: 'row'
              });
              if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
              }
            } else {
              this._selection = this.selection ? [...this.selection, rowNode.node] : [rowNode.node];
              this.selectionChange.emit(this.selection);
              this.onNodeSelect.emit({
                originalEvent: event.originalEvent,
                node: rowNode.node,
                type: 'row',
                index: event.rowIndex
              });
              if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
              }
            }
          }
        }
        this.tableService.onSelectionChange();
      }
      this.rowTouched = false;
    }
    handleRowTouchEnd(event) {
      this.rowTouched = true;
    }
    handleRowRightClick(event) {
      if (this.contextMenu) {
        const node = event.rowNode.node;
        if (this.contextMenuSelectionMode === 'separate') {
          this.contextMenuSelection = node;
          this.contextMenuSelectionChange.emit(node);
          this.onContextMenuSelect.emit({
            originalEvent: event.originalEvent,
            node: node
          });
          this.contextMenu.show(event.originalEvent);
          this.tableService.onContextMenu(node);
        } else if (this.contextMenuSelectionMode === 'joint') {
          this.preventSelectionSetterPropagation = true;
          let selected = this.isSelected(node);
          let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(node.data, this.dataKey)) : null;
          if (!selected) {
            if (this.isSingleSelectionMode()) {
              this.selection = node;
              this.selectionChange.emit(node);
            } else if (this.isMultipleSelectionMode()) {
              this.selection = [node];
              this.selectionChange.emit(this.selection);
            }
            if (dataKeyValue) {
              this.selectionKeys[dataKeyValue] = 1;
            }
          }
          this.contextMenu.show(event.originalEvent);
          this.onContextMenuSelect.emit({
            originalEvent: event.originalEvent,
            node: node
          });
        }
      }
    }
    toggleNodeWithCheckbox(event) {
      this.selection = this.selection || [];
      this.preventSelectionSetterPropagation = true;
      let node = event.rowNode.node;
      let selected = this.isSelected(node);
      if (selected) {
        this.propagateSelectionDown(node, false);
        if (event.rowNode.parent) {
          this.propagateSelectionUp(node.parent, false);
        }
        this.selectionChange.emit(this.selection);
        this.onNodeUnselect.emit({
          originalEvent: event,
          node: node
        });
      } else {
        this.propagateSelectionDown(node, true);
        if (event.rowNode.parent) {
          this.propagateSelectionUp(node.parent, true);
        }
        this.selectionChange.emit(this.selection);
        this.onNodeSelect.emit({
          originalEvent: event,
          node: node
        });
      }
      this.tableService.onSelectionChange();
    }
    toggleNodesWithCheckbox(event, check) {
      let data = this.filteredNodes || this.value;
      this._selection = check && data ? data.slice() : [];
      if (check) {
        if (data && data.length) {
          for (let node of data) {
            this.propagateSelectionDown(node, true);
          }
        }
      } else {
        this._selection = [];
        this.selectionKeys = {};
      }
      this.preventSelectionSetterPropagation = true;
      this.selectionChange.emit(this._selection);
      this.tableService.onSelectionChange();
      this.onHeaderCheckboxToggle.emit({
        originalEvent: event,
        checked: check
      });
    }
    propagateSelectionUp(node, select) {
      if (node.children && node.children.length) {
        let selectedChildCount = 0;
        let childPartialSelected = false;
        let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(node.data, this.dataKey)) : null;
        for (let child of node.children) {
          if (this.isSelected(child)) selectedChildCount++;else if (child.partialSelected) childPartialSelected = true;
        }
        if (select && selectedChildCount == node.children.length) {
          this._selection = [...(this.selection || []), node];
          node.partialSelected = false;
          if (dataKeyValue) {
            this.selectionKeys[dataKeyValue] = 1;
          }
        } else {
          if (!select) {
            let index = this.findIndexInSelection(node);
            if (index >= 0) {
              this._selection = this.selection.filter((val, i) => i != index);
              if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
              }
            }
          }
          if (childPartialSelected || selectedChildCount > 0 && selectedChildCount != node.children.length) node.partialSelected = true;else node.partialSelected = false;
        }
      }
      let parent = node.parent;
      if (parent) {
        this.propagateSelectionUp(parent, select);
      }
    }
    propagateSelectionDown(node, select) {
      let index = this.findIndexInSelection(node);
      let dataKeyValue = this.dataKey ? String(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(node.data, this.dataKey)) : null;
      if (select && index == -1) {
        this._selection = [...(this.selection || []), node];
        if (dataKeyValue) {
          this.selectionKeys[dataKeyValue] = 1;
        }
      } else if (!select && index > -1) {
        this._selection = this.selection.filter((val, i) => i != index);
        if (dataKeyValue) {
          delete this.selectionKeys[dataKeyValue];
        }
      }
      node.partialSelected = false;
      if (node.children && node.children.length) {
        for (let child of node.children) {
          this.propagateSelectionDown(child, select);
        }
      }
    }
    isSelected(node) {
      if (node && this.selection) {
        if (this.dataKey) {
          return this.selectionKeys[primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(node.data, this.dataKey)] !== undefined;
        } else {
          if (Array.isArray(this.selection)) return this.findIndexInSelection(node) > -1;else return this.equals(node, this.selection);
        }
      }
      return false;
    }
    findIndexInSelection(node) {
      let index = -1;
      if (this.selection && this.selection.length) {
        for (let i = 0; i < this.selection.length; i++) {
          if (this.equals(node, this.selection[i])) {
            index = i;
            break;
          }
        }
      }
      return index;
    }
    isSingleSelectionMode() {
      return this.selectionMode === 'single';
    }
    isMultipleSelectionMode() {
      return this.selectionMode === 'multiple';
    }
    equals(node1, node2) {
      return this.compareSelectionBy === 'equals' ? node1 === node2 : primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(node1.data, node2.data, this.dataKey);
    }
    filter(value, field, matchMode) {
      if (this.filterTimeout) {
        clearTimeout(this.filterTimeout);
      }
      if (!this.isFilterBlank(value)) {
        this.filters[field] = {
          value: value,
          matchMode: matchMode
        };
      } else if (this.filters[field]) {
        delete this.filters[field];
      }
      this.filterTimeout = setTimeout(() => {
        this._filter();
        this.filterTimeout = null;
      }, this.filterDelay);
    }
    filterGlobal(value, matchMode) {
      this.filter(value, 'global', matchMode);
    }
    isFilterBlank(filter) {
      if (filter !== null && filter !== undefined) {
        if (typeof filter === 'string' && filter.trim().length == 0 || Array.isArray(filter) && filter.length == 0) return true;else return false;
      }
      return true;
    }
    _filter() {
      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else {
        if (!this.value) {
          return;
        }
        if (!this.hasFilter()) {
          this.filteredNodes = null;
          if (this.paginator) {
            this.totalRecords = this.value ? this.value.length : 0;
          }
        } else {
          let globalFilterFieldsArray;
          if (this.filters['global']) {
            if (!this.columns && !this.globalFilterFields) throw new Error('Global filtering requires dynamic columns or globalFilterFields to be defined.');else globalFilterFieldsArray = this.globalFilterFields || this.columns;
          }
          this.filteredNodes = [];
          const isStrictMode = this.filterMode === 'strict';
          let isValueChanged = false;
          for (let node of this.value) {
            let copyNode = {
              ...node
            };
            let localMatch = true;
            let globalMatch = false;
            let paramsWithoutNode;
            for (let prop in this.filters) {
              if (this.filters.hasOwnProperty(prop) && prop !== 'global') {
                let filterMeta = this.filters[prop];
                let filterField = prop;
                let filterValue = filterMeta.value;
                let filterMatchMode = filterMeta.matchMode || 'startsWith';
                let filterConstraint = this.filterService.filters[filterMatchMode];
                paramsWithoutNode = {
                  filterField,
                  filterValue,
                  filterConstraint,
                  isStrictMode
                };
                if (isStrictMode && !(this.findFilteredNodes(copyNode, paramsWithoutNode) || this.isFilterMatched(copyNode, paramsWithoutNode)) || !isStrictMode && !(this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode))) {
                  localMatch = false;
                }
                if (!localMatch) {
                  break;
                }
              }
            }
            if (this.filters['global'] && !globalMatch && globalFilterFieldsArray) {
              let copyNodeForGlobal = {
                ...copyNode
              };
              let filterField = undefined;
              let filterValue = this.filters['global'].value;
              let filterConstraint = this.filterService.filters[this.filters['global'].matchMode];
              paramsWithoutNode = {
                filterField,
                filterValue,
                filterConstraint,
                isStrictMode,
                globalFilterFieldsArray
              };
              if (isStrictMode && (this.findFilteredNodes(copyNodeForGlobal, paramsWithoutNode) || this.isFilterMatched(copyNodeForGlobal, paramsWithoutNode)) || !isStrictMode && (this.isFilterMatched(copyNodeForGlobal, paramsWithoutNode) || this.findFilteredNodes(copyNodeForGlobal, paramsWithoutNode))) {
                globalMatch = true;
                copyNode = copyNodeForGlobal;
              }
            }
            let matches = localMatch;
            if (this.filters['global']) {
              matches = localMatch && globalMatch;
            }
            if (matches) {
              this.filteredNodes.push(copyNode);
            }
            isValueChanged = isValueChanged || !localMatch || globalMatch || localMatch && this.filteredNodes.length > 0 || !globalMatch && this.filteredNodes.length === 0;
          }
          if (!isValueChanged) {
            this.filteredNodes = null;
          }
          if (this.paginator) {
            this.totalRecords = this.filteredNodes ? this.filteredNodes.length : this.value ? this.value.length : 0;
          }
        }
      }
      this.first = 0;
      const filteredValue = this.filteredNodes || this.value;
      this.onFilter.emit({
        filters: this.filters,
        filteredValue: filteredValue
      });
      this.tableService.onUIUpdate(filteredValue);
      this.updateSerializedValue();
      if (this.scrollable) {
        this.resetScrollTop();
      }
    }
    findFilteredNodes(node, paramsWithoutNode) {
      if (node) {
        let matched = false;
        if (node.children) {
          let childNodes = [...node.children];
          node.children = [];
          for (let childNode of childNodes) {
            let copyChildNode = {
              ...childNode
            };
            if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
              matched = true;
              node.children.push(copyChildNode);
            }
          }
        }
        if (matched) {
          return true;
        }
      }
    }
    isFilterMatched(node, filterOptions) {
      let {
        filterField,
        filterValue,
        filterConstraint,
        isStrictMode,
        globalFilterFieldsArray
      } = filterOptions;
      let matched = false;
      const isMatched = field => filterConstraint(primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(node.data, field), filterValue, this.filterLocale);
      matched = globalFilterFieldsArray?.length ? globalFilterFieldsArray.some(globalFilterField => isMatched(globalFilterField.field || globalFilterField)) : isMatched(filterField);
      if (!matched || isStrictMode && !this.isNodeLeaf(node)) {
        matched = this.findFilteredNodes(node, {
          filterField,
          filterValue,
          filterConstraint,
          isStrictMode,
          globalFilterFieldsArray
        }) || matched;
      }
      return matched;
    }
    isNodeLeaf(node) {
      return node.leaf === false ? false : !(node.children && node.children.length);
    }
    hasFilter() {
      let empty = true;
      for (let prop in this.filters) {
        if (this.filters.hasOwnProperty(prop)) {
          empty = false;
          break;
        }
      }
      return !empty;
    }
    /**
     * Clears the sort and paginator state.
     * @group Method
     */
    reset() {
      this._sortField = null;
      this._sortOrder = 1;
      this._multiSortMeta = null;
      this.tableService.onSort(null);
      this.filteredNodes = null;
      this.filters = {};
      this.first = 0;
      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else {
        this.totalRecords = this._value ? this._value.length : 0;
      }
    }
    updateEditingCell(cell, data, field) {
      this.editingCell = cell;
      this.editingCellData = data;
      this.editingCellField = field;
      this.bindDocumentEditListener();
    }
    isEditingCellValid() {
      return this.editingCell && primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.editingCell, '.ng-invalid.ng-dirty').length === 0;
    }
    bindDocumentEditListener() {
      if (!this.documentEditListener) {
        this.documentEditListener = this.renderer.listen(this.document, 'click', event => {
          if (this.editingCell && !this.editingCellClick && this.isEditingCellValid()) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.editingCell, 'p-cell-editing');
            this.editingCell = null;
            this.onEditComplete.emit({
              field: this.editingCellField,
              data: this.editingCellData
            });
            this.editingCellField = null;
            this.editingCellData = null;
            this.unbindDocumentEditListener();
          }
          this.editingCellClick = false;
        });
      }
    }
    unbindDocumentEditListener() {
      if (this.documentEditListener) {
        this.documentEditListener();
        this.documentEditListener = null;
      }
    }
    ngOnDestroy() {
      this.unbindDocumentEditListener();
      this.editingCell = null;
      this.editingCellField = null;
      this.editingCellData = null;
      this.initialized = null;
    }
    static ɵfac = function TreeTable_Factory(t) {
      return new (t || TreeTable)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeTableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.FilterService));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TreeTable,
      selectors: [["p-treeTable"]],
      contentQueries: function TreeTable_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function TreeTable_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.resizeHelperViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.reorderIndicatorUpViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.reorderIndicatorDownViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tableViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollableViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollableFrozenViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        columns: "columns",
        style: "style",
        styleClass: "styleClass",
        tableStyle: "tableStyle",
        tableStyleClass: "tableStyleClass",
        autoLayout: "autoLayout",
        lazy: "lazy",
        lazyLoadOnInit: "lazyLoadOnInit",
        paginator: "paginator",
        rows: "rows",
        first: "first",
        pageLinks: "pageLinks",
        rowsPerPageOptions: "rowsPerPageOptions",
        alwaysShowPaginator: "alwaysShowPaginator",
        paginatorPosition: "paginatorPosition",
        paginatorStyleClass: "paginatorStyleClass",
        paginatorDropdownAppendTo: "paginatorDropdownAppendTo",
        currentPageReportTemplate: "currentPageReportTemplate",
        showCurrentPageReport: "showCurrentPageReport",
        showJumpToPageDropdown: "showJumpToPageDropdown",
        showFirstLastIcon: "showFirstLastIcon",
        showPageLinks: "showPageLinks",
        defaultSortOrder: "defaultSortOrder",
        sortMode: "sortMode",
        resetPageOnSort: "resetPageOnSort",
        customSort: "customSort",
        selectionMode: "selectionMode",
        contextMenuSelection: "contextMenuSelection",
        contextMenuSelectionMode: "contextMenuSelectionMode",
        dataKey: "dataKey",
        metaKeySelection: "metaKeySelection",
        compareSelectionBy: "compareSelectionBy",
        rowHover: "rowHover",
        loading: "loading",
        loadingIcon: "loadingIcon",
        showLoader: "showLoader",
        scrollable: "scrollable",
        scrollHeight: "scrollHeight",
        virtualScroll: "virtualScroll",
        virtualScrollItemSize: "virtualScrollItemSize",
        virtualScrollOptions: "virtualScrollOptions",
        virtualScrollDelay: "virtualScrollDelay",
        frozenWidth: "frozenWidth",
        frozenColumns: "frozenColumns",
        resizableColumns: "resizableColumns",
        columnResizeMode: "columnResizeMode",
        reorderableColumns: "reorderableColumns",
        contextMenu: "contextMenu",
        rowTrackBy: "rowTrackBy",
        filters: "filters",
        globalFilterFields: "globalFilterFields",
        filterDelay: "filterDelay",
        filterMode: "filterMode",
        filterLocale: "filterLocale",
        paginatorLocale: "paginatorLocale",
        totalRecords: "totalRecords",
        sortField: "sortField",
        sortOrder: "sortOrder",
        multiSortMeta: "multiSortMeta",
        selection: "selection",
        value: "value",
        virtualRowHeight: "virtualRowHeight"
      },
      outputs: {
        selectionChange: "selectionChange",
        contextMenuSelectionChange: "contextMenuSelectionChange",
        onFilter: "onFilter",
        onNodeExpand: "onNodeExpand",
        onNodeCollapse: "onNodeCollapse",
        onPage: "onPage",
        onSort: "onSort",
        onLazyLoad: "onLazyLoad",
        sortFunction: "sortFunction",
        onColResize: "onColResize",
        onColReorder: "onColReorder",
        onNodeSelect: "onNodeSelect",
        onNodeUnselect: "onNodeUnselect",
        onContextMenuSelect: "onContextMenuSelect",
        onHeaderCheckboxToggle: "onHeaderCheckboxToggle",
        onEditInit: "onEditInit",
        onEditComplete: "onEditComplete",
        onEditCancel: "onEditCancel"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([TreeTableService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 12,
      vars: 20,
      consts: [["data-scrollselectors", ".p-treetable-scrollable-body", 3, "ngStyle", "ngClass"], ["container", ""], ["class", "p-treetable-loading", 4, "ngIf"], ["class", "p-treetable-header", 4, "ngIf"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass", "locale", "onPageChange", 4, "ngIf"], ["class", "p-treetable-wrapper", 4, "ngIf"], ["class", "p-treetable-scrollable-wrapper", 4, "ngIf"], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass", "locale", "onPageChange", 4, "ngIf"], ["class", "p-treetable-footer", 4, "ngIf"], ["class", "p-column-resizer-helper", "style", "display:none", 4, "ngIf"], ["class", "p-treetable-reorder-indicator-up", "style", "display: none;", 4, "ngIf"], ["class", "p-treetable-reorder-indicator-down", "style", "display: none;", 4, "ngIf"], [1, "p-treetable-loading"], [1, "p-treetable-loading-overlay", "p-component-overlay"], [3, "class", 4, "ngIf"], [4, "ngIf"], [3, "spin", "styleClass", 4, "ngIf"], ["class", "p-treetable-loading-icon", 4, "ngIf"], [3, "spin", "styleClass"], [1, "p-treetable-loading-icon"], [4, "ngTemplateOutlet"], [1, "p-treetable-header"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass", "locale", "onPageChange"], ["pTemplate", "firstpagelinkicon"], ["pTemplate", "previouspagelinkicon"], ["pTemplate", "lastpagelinkicon"], ["pTemplate", "nextpagelinkicon"], [1, "p-treetable-wrapper"], ["role", "table", 3, "ngClass", "ngStyle"], ["table", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "rowgroup", 1, "p-treetable-thead"], ["role", "rowgroup", 1, "p-treetable-tbody", 3, "pTreeTableBody", "pTreeTableBodyTemplate"], ["role", "rowgroup", 1, "p-treetable-tfoot"], [1, "p-treetable-scrollable-wrapper"], ["class", "p-treetable-scrollable-view p-treetable-frozen-view", 3, "ttScrollableView", "frozen", "ngStyle", "scrollHeight", 4, "ngIf"], [1, "p-treetable-scrollable-view", 3, "ttScrollableView", "frozen", "scrollHeight", "ngStyle"], ["scrollableView", ""], [1, "p-treetable-scrollable-view", "p-treetable-frozen-view", 3, "ttScrollableView", "frozen", "ngStyle", "scrollHeight"], ["scrollableFrozenView", ""], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showPageLinks", "styleClass", "locale", "onPageChange"], [1, "p-treetable-footer"], [1, "p-column-resizer-helper", 2, "display", "none"], ["resizeHelper", ""], [1, "p-treetable-reorder-indicator-up", 2, "display", "none"], ["reorderIndicatorUp", ""], [1, "p-treetable-reorder-indicator-down", 2, "display", "none"], ["reorderIndicatorDown", ""]],
      template: function TreeTable_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeTable_div_2_Template, 4, 2, "div", 2)(3, TreeTable_div_3_Template, 2, 1, "div", 3)(4, TreeTable_p_paginator_4_Template, 5, 21, "p-paginator", 4)(5, TreeTable_div_5_Template, 9, 16, "div", 5)(6, TreeTable_div_6_Template, 4, 8, "div", 6)(7, TreeTable_p_paginator_7_Template, 5, 21, "p-paginator", 7)(8, TreeTable_div_8_Template, 2, 1, "div", 8)(9, TreeTable_div_9_Template, 2, 0, "div", 9)(10, TreeTable_span_10_Template, 4, 2, "span", 10)(11, TreeTable_span_11_Template, 4, 2, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](14, _c10, ctx.rowHover || ctx.selectionMode === "single" || ctx.selectionMode === "multiple", ctx.autoLayout, ctx.resizableColumns, ctx.resizableColumns && ctx.columnResizeMode === "fit", ctx.scrollable && ctx.scrollHeight === "flex"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading && ctx.showLoader);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.captionTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paginator && (ctx.paginatorPosition === "top" || ctx.paginatorPosition == "both"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.scrollable);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scrollable);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paginator && (ctx.paginatorPosition === "bottom" || ctx.paginatorPosition == "both"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.summaryTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resizableColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reorderableColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reorderableColumns);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, primeng_paginator__WEBPACK_IMPORTED_MODULE_6__.Paginator, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_7__.SpinnerIcon, primeng_icons_arrowdown__WEBPACK_IMPORTED_MODULE_8__.ArrowDownIcon, primeng_icons_arrowup__WEBPACK_IMPORTED_MODULE_9__.ArrowUpIcon, TTScrollableView, TTBody],
      styles: ["@layer primeng{.p-treetable{position:relative}.p-treetable table{border-collapse:collapse;width:100%;table-layout:fixed}.p-treetable .p-sortable-column{cursor:pointer;-webkit-user-select:none;user-select:none}.p-treetable .p-sortable-column .p-column-title,.p-treetable .p-sortable-column .p-sortable-column-icon,.p-treetable .p-sortable-column .p-sortable-column-badge{vertical-align:middle}.p-treetable .p-sortable-column .p-sortable-column-badge{display:inline-flex;align-items:center;justify-content:center}.p-treetable-auto-layout>.p-treetable-wrapper{overflow-x:auto}.p-treetable-auto-layout>.p-treetable-wrapper>table{table-layout:auto}.p-treetable-hoverable-rows .p-treetable-tbody>tr{cursor:pointer}.p-treetable-toggler{cursor:pointer;-webkit-user-select:none;user-select:none;display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;overflow:hidden;position:relative}p-treetabletoggler+p-treetablecheckbox .p-checkbox{vertical-align:middle}p-treetabletoggler+p-treetablecheckbox+span{vertical-align:middle}.p-treetable-scrollable-wrapper{position:relative}.p-treetable-scrollable-header,.p-treetable-scrollable-footer{overflow:hidden}.p-treetable-scrollable-body{overflow:auto;position:relative}.p-treetable-scrollable-body>table>.p-treetable-tbody>tr:first-child>td{border-top:0 none}.p-treetable-virtual-table{position:absolute}.p-treetable-frozen-view .p-treetable-scrollable-body{overflow:hidden}.p-treetable-frozen-view>.p-treetable-scrollable-body>table>.p-treetable-tbody>tr>td:last-child{border-right:0 none}.p-treetable-unfrozen-view{position:absolute;top:0}.p-treetable-flex-scrollable,.p-treetable-flex-scrollable .p-treetable-scrollable-wrapper,.p-treetable-flex-scrollable .p-treetable-scrollable-view{display:flex;flex-direction:column;flex:1;height:100%}.p-treetable-flex-scrollable .p-treetable-virtual-scrollable-body{flex:1}.p-treetable-resizable>.p-treetable-wrapper{overflow-x:auto}.p-treetable-resizable .p-treetable-thead>tr>th,.p-treetable-resizable .p-treetable-tfoot>tr>td,.p-treetable-resizable .p-treetable-tbody>tr>td{overflow:hidden}.p-treetable-resizable .p-resizable-column{background-clip:padding-box;position:relative}.p-treetable-resizable-fit .p-resizable-column:last-child .p-column-resizer{display:none}.p-treetable .p-column-resizer{display:block;position:absolute!important;top:0;right:0;margin:0;width:.5rem;height:100%;padding:0;cursor:col-resize;border:1px solid transparent}.p-treetable .p-column-resizer-helper{width:1px;position:absolute;z-index:10;display:none}.p-treetable .p-row-editor-init,.p-treetable .p-row-editor-save,.p-treetable .p-row-editor-cancel,.p-treetable .p-row-toggler{display:inline-flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-treetable-reorder-indicator-up,.p-treetable-reorder-indicator-down{position:absolute;display:none}[ttReorderableColumn]{cursor:move}.p-treetable .p-treetable-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}.p-treetable .p-scroller-loading{transform:none!important;min-height:0;position:sticky;top:0;left:0}}\n"],
      encapsulation: 2
    });
  }
  return TreeTable;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TTBody = /*#__PURE__*/(() => {
  class TTBody {
    tt;
    treeTableService;
    cd;
    columns;
    template;
    frozen;
    serializedNodes;
    scrollerOptions;
    subscription;
    constructor(tt, treeTableService, cd) {
      this.tt = tt;
      this.treeTableService = treeTableService;
      this.cd = cd;
      this.subscription = this.tt.tableService.uiUpdateSource$.subscribe(() => {
        if (this.tt.virtualScroll) {
          this.cd.detectChanges();
        }
      });
    }
    getScrollerOption(option, options) {
      if (this.tt.virtualScroll) {
        options = options || this.scrollerOptions;
        return options ? options[option] : null;
      }
      return null;
    }
    getRowIndex(rowIndex) {
      const getItemOptions = this.getScrollerOption('getItemOptions');
      return getItemOptions ? getItemOptions(rowIndex).index : rowIndex;
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    static ɵfac = function TTBody_Factory(t) {
      return new (t || TTBody)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeTableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TTBody,
      selectors: [["", "pTreeTableBody", ""]],
      hostAttrs: [1, "p-element"],
      inputs: {
        columns: ["pTreeTableBody", "columns"],
        template: ["pTreeTableBodyTemplate", "template"],
        frozen: "frozen",
        serializedNodes: "serializedNodes",
        scrollerOptions: "scrollerOptions"
      },
      attrs: _c11,
      decls: 2,
      vars: 3,
      consts: [["ngFor", "", 3, "ngForOf", "ngForTrackBy"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function TTBody_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TTBody_ng_template_0_Template, 1, 1, "ng-template", 0)(1, TTBody_ng_container_1_Template, 2, 5, "ng-container", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.serializedNodes || ctx.tt.serializedValue)("ngForTrackBy", ctx.tt.rowTrackBy);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tt.isEmpty());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet],
      encapsulation: 2
    });
  }
  return TTBody;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TTScrollableView = /*#__PURE__*/(() => {
  class TTScrollableView {
    platformId;
    renderer;
    tt;
    el;
    zone;
    columns;
    frozen;
    scrollHeaderViewChild;
    scrollHeaderBoxViewChild;
    scrollBodyViewChild;
    scrollTableViewChild;
    scrollLoadingTableViewChild;
    scrollFooterViewChild;
    scrollFooterBoxViewChild;
    scrollableAlignerViewChild;
    scroller;
    headerScrollListener;
    bodyScrollListener;
    footerScrollListener;
    frozenSiblingBody;
    totalRecordsSubscription;
    _scrollHeight;
    preventBodyScrollPropagation;
    get scrollHeight() {
      return this._scrollHeight;
    }
    set scrollHeight(val) {
      this._scrollHeight = val;
      if (val != null && (val.includes('%') || val.includes('calc'))) {
        console.log('Percentage scroll height calculation is removed in favor of the more performant CSS based flex mode, use scrollHeight="flex" instead.');
      }
    }
    constructor(platformId, renderer, tt, el, zone) {
      this.platformId = platformId;
      this.renderer = renderer;
      this.tt = tt;
      this.el = el;
      this.zone = zone;
    }
    ngAfterViewInit() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
        if (!this.frozen) {
          if (this.tt.frozenColumns || this.tt.frozenBodyTemplate) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.el.nativeElement, 'p-treetable-unfrozen-view');
          }
          let frozenView = this.el.nativeElement.previousElementSibling;
          if (frozenView) {
            if (this.tt.virtualScroll) this.frozenSiblingBody = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(frozenView, '.p-scroller-viewport');else this.frozenSiblingBody = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(frozenView, '.p-treetable-scrollable-body');
          }
          let scrollBarWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.calculateScrollbarWidth();
          this.scrollHeaderBoxViewChild.nativeElement.style.paddingRight = scrollBarWidth + 'px';
          if (this.scrollFooterBoxViewChild && this.scrollFooterBoxViewChild.nativeElement) {
            this.scrollFooterBoxViewChild.nativeElement.style.paddingRight = scrollBarWidth + 'px';
          }
        } else {
          if (this.scrollableAlignerViewChild && this.scrollableAlignerViewChild.nativeElement) {
            this.scrollableAlignerViewChild.nativeElement.style.height = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.calculateScrollbarHeight() + 'px';
          }
        }
        this.bindEvents();
      }
    }
    bindEvents() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
        this.zone.runOutsideAngular(() => {
          if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.headerScrollListener = this.renderer.listen(this.scrollHeaderBoxViewChild?.nativeElement, 'scroll', this.onHeaderScroll.bind(this));
          }
          if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.footerScrollListener = this.renderer.listen(this.scrollFooterViewChild.nativeElement, 'scroll', this.onFooterScroll.bind(this));
          }
          if (!this.frozen) {
            if (this.tt.virtualScroll) {
              this.bodyScrollListener = this.renderer.listen((this.scroller?.getElementRef()).nativeElement, 'scroll', this.onBodyScroll.bind(this));
            } else {
              this.bodyScrollListener = this.renderer.listen(this.scrollBodyViewChild?.nativeElement, 'scroll', this.onBodyScroll.bind(this));
            }
          }
        });
      }
    }
    unbindEvents() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
          if (this.headerScrollListener) {
            this.headerScrollListener();
            this.headerScrollListener = null;
          }
        }
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
          if (this.footerScrollListener) {
            this.footerScrollListener();
            this.footerScrollListener = null;
          }
        }
        if (this.scrollBodyViewChild && this.scrollBodyViewChild.nativeElement) {
          if (this.bodyScrollListener) {
            this.bodyScrollListener();
            this.bodyScrollListener = null;
          }
        }
        if (this.scroller && this.scroller.getElementRef()) {
          if (this.bodyScrollListener) {
            this.bodyScrollListener();
            this.bodyScrollListener = null;
          }
        }
      }
    }
    onHeaderScroll() {
      const scrollLeft = this.scrollHeaderViewChild?.nativeElement.scrollLeft;
      this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
      if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
        this.scrollFooterViewChild.nativeElement.scrollLeft = scrollLeft;
      }
      this.preventBodyScrollPropagation = true;
    }
    onFooterScroll() {
      const scrollLeft = this.scrollFooterViewChild?.nativeElement.scrollLeft;
      this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;
      if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
        this.scrollHeaderViewChild.nativeElement.scrollLeft = scrollLeft;
      }
      this.preventBodyScrollPropagation = true;
    }
    onBodyScroll(event) {
      if (this.preventBodyScrollPropagation) {
        this.preventBodyScrollPropagation = false;
        return;
      }
      if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
        this.scrollHeaderBoxViewChild.nativeElement.style.marginLeft = -1 * event.target.scrollLeft + 'px';
      }
      if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
        this.scrollFooterBoxViewChild.nativeElement.style.marginLeft = -1 * event.target.scrollLeft + 'px';
      }
      if (this.frozenSiblingBody) {
        this.frozenSiblingBody.scrollTop = event.target.scrollTop;
      }
    }
    scrollToVirtualIndex(index) {
      if (this.scroller) {
        this.scroller.scrollToIndex(index);
      }
    }
    scrollTo(options) {
      if (this.scroller) {
        this.scroller.scrollTo(options);
      } else {
        if (this.scrollBodyViewChild?.nativeElement.scrollTo) {
          this.scrollBodyViewChild.nativeElement.scrollTo(options);
        } else {
          this.scrollBodyViewChild.nativeElement.scrollLeft = options.left;
          this.scrollBodyViewChild.nativeElement.scrollTop = options.top;
        }
      }
    }
    ngOnDestroy() {
      this.unbindEvents();
      this.frozenSiblingBody = null;
    }
    static ɵfac = function TTScrollableView_Factory(t) {
      return new (t || TTScrollableView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TTScrollableView,
      selectors: [["", "ttScrollableView", ""]],
      viewQuery: function TTScrollableView_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c14, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c15, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c16, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c17, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c18, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c19, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c20, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c21, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c22, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollHeaderViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollHeaderBoxViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollBodyViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollTableViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollLoadingTableViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollFooterViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollFooterBoxViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollableAlignerViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        columns: ["ttScrollableView", "columns"],
        frozen: "frozen",
        scrollHeight: "scrollHeight"
      },
      attrs: _c23,
      decls: 13,
      vars: 13,
      consts: [[1, "p-treetable-scrollable-header"], ["scrollHeader", ""], [1, "p-treetable-scrollable-header-box"], ["scrollHeaderBox", ""], [1, "p-treetable-scrollable-header-table", 3, "ngClass", "ngStyle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "rowgroup", 1, "p-treetable-thead"], ["styleClass", "p-treetable-scrollable-body", 3, "items", "style", "scrollHeight", "itemSize", "lazy", "options", "onLazyLoad", 4, "ngIf"], [4, "ngIf"], ["buildInItems", ""], ["class", "p-treetable-scrollable-footer", 4, "ngIf"], ["styleClass", "p-treetable-scrollable-body", 3, "items", "scrollHeight", "itemSize", "lazy", "options", "onLazyLoad"], ["scroller", ""], ["pTemplate", "content"], ["pTemplate", "loader"], [1, "p-treetable-scrollable-body", 3, "ngStyle"], ["scrollBody", ""], ["role", "table", 3, "ngClass", "ngStyle"], ["scrollTable", ""], ["role", "rowgroup", 1, "p-treetable-tbody", 3, "pTreeTableBody", "pTreeTableBodyTemplate", "serializedNodes", "frozen"], ["style", "background-color:transparent", 4, "ngIf"], [2, "background-color", "transparent"], ["scrollableAligner", ""], [1, "p-treetable-scrollable-footer"], ["scrollFooter", ""], [1, "p-treetable-scrollable-footer-box"], ["scrollFooterBox", ""], [1, "p-treetable-scrollable-footer-table", 3, "ngClass", "ngStyle"], ["role", "rowgroup", 1, "p-treetable-tfoot"]],
      template: function TTScrollableView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2, 3)(4, "table", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TTScrollableView_ng_container_5_Template, 1, 0, "ng-container", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TTScrollableView_ng_container_7_Template, 1, 0, "ng-container", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TTScrollableView_p_scroller_8_Template, 4, 10, "p-scroller", 7)(9, TTScrollableView_ng_container_9_Template, 4, 10, "ng-container", 8)(10, TTScrollableView_ng_template_10_Template, 5, 15, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(12, TTScrollableView_div_12_Template, 8, 10, "div", 10);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.tt.tableStyleClass)("ngStyle", ctx.tt.tableStyle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.frozen ? ctx.tt.frozenColGroupTemplate || ctx.tt.colGroupTemplate : ctx.tt.colGroupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c7, ctx.columns));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.frozen ? ctx.tt.frozenHeaderTemplate || ctx.tt.headerTemplate : ctx.tt.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c7, ctx.columns));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tt.virtualScroll);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tt.virtualScroll);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tt.footerTemplate);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_scroller__WEBPACK_IMPORTED_MODULE_10__.Scroller, TTBody],
      encapsulation: 2
    });
  }
  return TTScrollableView;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TTSortableColumn = /*#__PURE__*/(() => {
  class TTSortableColumn {
    tt;
    field;
    ttSortableColumnDisabled;
    sorted;
    subscription;
    get ariaSorted() {
      if (this.sorted && this.tt.sortOrder < 0) return 'descending';else if (this.sorted && this.tt.sortOrder > 0) return 'ascending';else return 'none';
    }
    constructor(tt) {
      this.tt = tt;
      if (this.isEnabled()) {
        this.subscription = this.tt.tableService.sortSource$.subscribe(sortMeta => {
          this.updateSortState();
        });
      }
    }
    ngOnInit() {
      if (this.isEnabled()) {
        this.updateSortState();
      }
    }
    updateSortState() {
      this.sorted = this.tt.isSorted(this.field);
    }
    onClick(event) {
      if (this.isEnabled()) {
        this.updateSortState();
        this.tt.sort({
          originalEvent: event,
          field: this.field
        });
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.clearSelection();
      }
    }
    onEnterKey(event) {
      this.onClick(event);
    }
    isEnabled() {
      return this.ttSortableColumnDisabled !== true;
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    static ɵfac = function TTSortableColumn_Factory(t) {
      return new (t || TTSortableColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeTable));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TTSortableColumn,
      selectors: [["", "ttSortableColumn", ""]],
      hostAttrs: [1, "p-element"],
      hostVars: 7,
      hostBindings: function TTSortableColumn_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TTSortableColumn_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          })("keydown.enter", function TTSortableColumn_keydown_enter_HostBindingHandler($event) {
            return ctx.onEnterKey($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.isEnabled() ? "0" : null)("role", "columnheader")("aria-sort", ctx.ariaSorted);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-sortable-column", ctx.isEnabled())("p-highlight", ctx.sorted);
        }
      },
      inputs: {
        field: ["ttSortableColumn", "field"],
        ttSortableColumnDisabled: "ttSortableColumnDisabled"
      }
    });
  }
  return TTSortableColumn;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TTSortIcon = /*#__PURE__*/(() => {
  class TTSortIcon {
    tt;
    cd;
    field;
    ariaLabelDesc;
    ariaLabelAsc;
    subscription;
    sortOrder;
    constructor(tt, cd) {
      this.tt = tt;
      this.cd = cd;
      this.subscription = this.tt.tableService.sortSource$.subscribe(sortMeta => {
        this.updateSortState();
        this.cd.markForCheck();
      });
    }
    ngOnInit() {
      this.updateSortState();
    }
    onClick(event) {
      event.preventDefault();
    }
    updateSortState() {
      if (this.tt.sortMode === 'single') {
        this.sortOrder = this.tt.isSorted(this.field) ? this.tt.sortOrder : 0;
      } else if (this.tt.sortMode === 'multiple') {
        let sortMeta = this.tt.getSortMeta(this.field);
        this.sortOrder = sortMeta ? sortMeta.order : 0;
      }
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    static ɵfac = function TTSortIcon_Factory(t) {
      return new (t || TTSortIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TTSortIcon,
      selectors: [["p-treeTableSortIcon"]],
      hostAttrs: [1, "p-element"],
      inputs: {
        field: "field",
        ariaLabelDesc: "ariaLabelDesc",
        ariaLabelAsc: "ariaLabelAsc"
      },
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], ["class", "p-sortable-column-icon", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-sortable-column-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function TTSortIcon_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TTSortIcon_ng_container_0_Template, 4, 3, "ng-container", 0)(1, TTSortIcon_span_1_Template, 2, 4, "span", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tt.sortIconTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tt.sortIconTemplate);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, primeng_icons_sortalt__WEBPACK_IMPORTED_MODULE_11__.SortAltIcon, primeng_icons_sortamountupalt__WEBPACK_IMPORTED_MODULE_12__.SortAmountUpAltIcon, primeng_icons_sortamountdown__WEBPACK_IMPORTED_MODULE_13__.SortAmountDownIcon],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return TTSortIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TTResizableColumn = /*#__PURE__*/(() => {
  class TTResizableColumn {
    document;
    platformId;
    renderer;
    tt;
    el;
    zone;
    ttResizableColumnDisabled;
    resizer;
    resizerMouseDownListener;
    documentMouseMoveListener;
    documentMouseUpListener;
    constructor(document, platformId, renderer, tt, el, zone) {
      this.document = document;
      this.platformId = platformId;
      this.renderer = renderer;
      this.tt = tt;
      this.el = el;
      this.zone = zone;
    }
    ngAfterViewInit() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
        if (this.isEnabled()) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.el.nativeElement, 'p-resizable-column');
          this.resizer = this.renderer.createElement('span');
          this.renderer.addClass(this.resizer, 'p-column-resizer');
          this.renderer.appendChild(this.el.nativeElement, this.resizer);
          this.zone.runOutsideAngular(() => {
            this.resizerMouseDownListener = this.renderer.listen(this.resizer, 'mousedown', this.onMouseDown.bind(this));
          });
        }
      }
    }
    bindDocumentEvents() {
      this.zone.runOutsideAngular(() => {
        this.documentMouseMoveListener = this.renderer.listen(this.document, 'mousemove', this.onDocumentMouseMove.bind(this));
        this.documentMouseUpListener = this.renderer.listen(this.document, 'mouseup', this.onDocumentMouseUp.bind(this));
      });
    }
    unbindDocumentEvents() {
      if (this.documentMouseMoveListener) {
        this.documentMouseMoveListener();
        this.documentMouseMoveListener = null;
      }
      if (this.documentMouseUpListener) {
        this.documentMouseUpListener();
        this.documentMouseUpListener = null;
      }
    }
    onMouseDown(event) {
      this.tt.onColumnResizeBegin(event);
      this.bindDocumentEvents();
    }
    onDocumentMouseMove(event) {
      this.tt.onColumnResize(event);
    }
    onDocumentMouseUp(event) {
      this.tt.onColumnResizeEnd(event, this.el.nativeElement);
      this.unbindDocumentEvents();
    }
    isEnabled() {
      return this.ttResizableColumnDisabled !== true;
    }
    ngOnDestroy() {
      if (this.resizerMouseDownListener) {
        this.resizerMouseDownListener();
        this.resizerMouseDownListener = null;
      }
      this.unbindDocumentEvents();
    }
    static ɵfac = function TTResizableColumn_Factory(t) {
      return new (t || TTResizableColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TTResizableColumn,
      selectors: [["", "ttResizableColumn", ""]],
      hostAttrs: [1, "p-element"],
      inputs: {
        ttResizableColumnDisabled: "ttResizableColumnDisabled"
      }
    });
  }
  return TTResizableColumn;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TTReorderableColumn = /*#__PURE__*/(() => {
  class TTReorderableColumn {
    document;
    platformId;
    renderer;
    tt;
    el;
    zone;
    ttReorderableColumnDisabled;
    dragStartListener;
    dragOverListener;
    dragEnterListener;
    dragLeaveListener;
    mouseDownListener;
    constructor(document, platformId, renderer, tt, el, zone) {
      this.document = document;
      this.platformId = platformId;
      this.renderer = renderer;
      this.tt = tt;
      this.el = el;
      this.zone = zone;
    }
    ngAfterViewInit() {
      if (this.isEnabled()) {
        this.bindEvents();
      }
    }
    bindEvents() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
        this.zone.runOutsideAngular(() => {
          this.mouseDownListener = this.renderer.listen(this.el.nativeElement, 'mousedown', this.onMouseDown.bind(this));
          this.dragStartListener = this.renderer.listen(this.el.nativeElement, 'dragstart', this.onDragStart.bind(this));
          this.dragOverListener = this.renderer.listen(this.el.nativeElement, 'dragover', this.onDragEnter.bind(this));
          this.dragEnterListener = this.renderer.listen(this.el.nativeElement, 'dragenter', this.onDragEnter.bind(this));
          this.dragLeaveListener = this.renderer.listen(this.el.nativeElement, 'dragleave', this.onDragLeave.bind(this));
        });
      }
    }
    unbindEvents() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
        if (this.mouseDownListener) {
          this.mouseDownListener();
          this.mouseDownListener = null;
        }
        if (this.dragOverListener) {
          this.dragOverListener();
          this.dragOverListener = null;
        }
        if (this.dragEnterListener) {
          this.dragEnterListener();
          this.dragEnterListener = null;
        }
        if (this.dragLeaveListener) {
          this.dragLeaveListener();
          this.dragLeaveListener = null;
        }
      }
    }
    onMouseDown(event) {
      if (event.target.nodeName === 'INPUT' || event.target.nodeName === 'TEXTAREA' || primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(event.target, 'p-column-resizer')) this.el.nativeElement.draggable = false;else this.el.nativeElement.draggable = true;
    }
    onDragStart(event) {
      this.tt.onColumnDragStart(event, this.el.nativeElement);
    }
    onDragOver(event) {
      event.preventDefault();
    }
    onDragEnter(event) {
      this.tt.onColumnDragEnter(event, this.el.nativeElement);
    }
    onDragLeave(event) {
      this.tt.onColumnDragLeave(event);
    }
    onDrop(event) {
      if (this.isEnabled()) {
        this.tt.onColumnDrop(event, this.el.nativeElement);
      }
    }
    isEnabled() {
      return this.ttReorderableColumnDisabled !== true;
    }
    ngOnDestroy() {
      this.unbindEvents();
    }
    static ɵfac = function TTReorderableColumn_Factory(t) {
      return new (t || TTReorderableColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TTReorderableColumn,
      selectors: [["", "ttReorderableColumn", ""]],
      hostAttrs: [1, "p-element"],
      hostBindings: function TTReorderableColumn_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drop", function TTReorderableColumn_drop_HostBindingHandler($event) {
            return ctx.onDrop($event);
          });
        }
      },
      inputs: {
        ttReorderableColumnDisabled: "ttReorderableColumnDisabled"
      }
    });
  }
  return TTReorderableColumn;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TTSelectableRow = /*#__PURE__*/(() => {
  class TTSelectableRow {
    tt;
    tableService;
    rowNode;
    ttSelectableRowDisabled;
    selected;
    subscription;
    constructor(tt, tableService) {
      this.tt = tt;
      this.tableService = tableService;
      if (this.isEnabled()) {
        this.subscription = this.tt.tableService.selectionSource$.subscribe(() => {
          this.selected = this.tt.isSelected(this.rowNode.node);
        });
      }
    }
    ngOnInit() {
      if (this.isEnabled()) {
        this.selected = this.tt.isSelected(this.rowNode.node);
      }
    }
    onClick(event) {
      if (this.isEnabled()) {
        this.tt.handleRowClick({
          originalEvent: event,
          rowNode: this.rowNode
        });
      }
    }
    onKeyDown(event) {
      switch (event.code) {
        case 'Enter':
        case 'Space':
          this.onEnterKey(event);
          break;
        default:
          break;
      }
    }
    onTouchEnd(event) {
      if (this.isEnabled()) {
        this.tt.handleRowTouchEnd(event);
      }
    }
    onEnterKey(event) {
      if (this.tt.selectionMode === 'checkbox') {
        this.tt.toggleNodeWithCheckbox({
          originalEvent: event,
          rowNode: this.rowNode
        });
      } else {
        this.onClick(event);
      }
      event.preventDefault();
    }
    isEnabled() {
      return this.ttSelectableRowDisabled !== true;
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    static ɵfac = function TTSelectableRow_Factory(t) {
      return new (t || TTSelectableRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeTableService));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TTSelectableRow,
      selectors: [["", "ttSelectableRow", ""]],
      hostAttrs: [1, "p-element"],
      hostVars: 4,
      hostBindings: function TTSelectableRow_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TTSelectableRow_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          })("keydown", function TTSelectableRow_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("touchend", function TTSelectableRow_touchend_HostBindingHandler($event) {
            return ctx.onTouchEnd($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-p-highlight", ctx.selected)("aria-checked", ctx.selected);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-highlight", ctx.selected);
        }
      },
      inputs: {
        rowNode: ["ttSelectableRow", "rowNode"],
        ttSelectableRowDisabled: "ttSelectableRowDisabled"
      }
    });
  }
  return TTSelectableRow;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TTSelectableRowDblClick = /*#__PURE__*/(() => {
  class TTSelectableRowDblClick {
    tt;
    tableService;
    rowNode;
    ttSelectableRowDisabled;
    selected;
    subscription;
    constructor(tt, tableService) {
      this.tt = tt;
      this.tableService = tableService;
      if (this.isEnabled()) {
        this.subscription = this.tt.tableService.selectionSource$.subscribe(() => {
          this.selected = this.tt.isSelected(this.rowNode.node);
        });
      }
    }
    ngOnInit() {
      if (this.isEnabled()) {
        this.selected = this.tt.isSelected(this.rowNode.node);
      }
    }
    onClick(event) {
      if (this.isEnabled()) {
        this.tt.handleRowClick({
          originalEvent: event,
          rowNode: this.rowNode
        });
      }
    }
    isEnabled() {
      return this.ttSelectableRowDisabled !== true;
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    static ɵfac = function TTSelectableRowDblClick_Factory(t) {
      return new (t || TTSelectableRowDblClick)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeTableService));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TTSelectableRowDblClick,
      selectors: [["", "ttSelectableRowDblClick", ""]],
      hostAttrs: [1, "p-element"],
      hostVars: 2,
      hostBindings: function TTSelectableRowDblClick_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function TTSelectableRowDblClick_dblclick_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-highlight", ctx.selected);
        }
      },
      inputs: {
        rowNode: ["ttSelectableRowDblClick", "rowNode"],
        ttSelectableRowDisabled: "ttSelectableRowDisabled"
      }
    });
  }
  return TTSelectableRowDblClick;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TTContextMenuRow = /*#__PURE__*/(() => {
  class TTContextMenuRow {
    tt;
    tableService;
    el;
    rowNode;
    ttContextMenuRowDisabled;
    selected;
    subscription;
    constructor(tt, tableService, el) {
      this.tt = tt;
      this.tableService = tableService;
      this.el = el;
      if (this.isEnabled()) {
        this.subscription = this.tt.tableService.contextMenuSource$.subscribe(node => {
          this.selected = this.tt.equals(this.rowNode.node, node);
        });
      }
    }
    onContextMenu(event) {
      if (this.isEnabled()) {
        this.tt.handleRowRightClick({
          originalEvent: event,
          rowNode: this.rowNode
        });
        this.el.nativeElement.focus();
        event.preventDefault();
      }
    }
    isEnabled() {
      return this.ttContextMenuRowDisabled !== true;
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    static ɵfac = function TTContextMenuRow_Factory(t) {
      return new (t || TTContextMenuRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeTableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TTContextMenuRow,
      selectors: [["", "ttContextMenuRow", ""]],
      hostAttrs: [1, "p-element"],
      hostVars: 3,
      hostBindings: function TTContextMenuRow_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function TTContextMenuRow_contextmenu_HostBindingHandler($event) {
            return ctx.onContextMenu($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.isEnabled() ? 0 : undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-highlight-contextmenu", ctx.selected);
        }
      },
      inputs: {
        rowNode: ["ttContextMenuRow", "rowNode"],
        ttContextMenuRowDisabled: "ttContextMenuRowDisabled"
      }
    });
  }
  return TTContextMenuRow;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TTCheckbox = /*#__PURE__*/(() => {
  class TTCheckbox {
    tt;
    tableService;
    cd;
    disabled;
    rowNode;
    checked;
    focused;
    subscription;
    constructor(tt, tableService, cd) {
      this.tt = tt;
      this.tableService = tableService;
      this.cd = cd;
      this.subscription = this.tt.tableService.selectionSource$.subscribe(() => {
        this.checked = this.tt.isSelected(this.rowNode.node);
        this.cd.markForCheck();
      });
    }
    ngOnInit() {
      this.checked = this.tt.isSelected(this.rowNode.node);
    }
    onClick(event) {
      if (!this.disabled) {
        this.tt.toggleNodeWithCheckbox({
          originalEvent: event,
          rowNode: this.rowNode
        });
      }
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.clearSelection();
    }
    onFocus() {
      this.focused = true;
    }
    onBlur() {
      this.focused = false;
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    static ɵfac = function TTCheckbox_Factory(t) {
      return new (t || TTCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeTableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TTCheckbox,
      selectors: [["p-treeTableCheckbox"]],
      hostAttrs: [1, "p-element"],
      inputs: {
        disabled: "disabled",
        rowNode: ["value", "rowNode"]
      },
      decls: 7,
      vars: 13,
      consts: [[1, "p-checkbox", "p-component", 3, "ngClass", "click"], [1, "p-hidden-accessible"], ["type", "checkbox", "tabindex", "-1", 3, "checked", "focus", "blur"], ["role", "checkbox", 3, "ngClass"], ["box", ""], [4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function TTCheckbox_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TTCheckbox_Template_div_click_0_listener($event) {
            return ctx.onClick($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TTCheckbox_Template_input_focus_2_listener() {
            return ctx.onFocus();
          })("blur", function TTCheckbox_Template_input_blur_2_listener() {
            return ctx.onBlur();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TTCheckbox_ng_container_5_Template, 3, 2, "ng-container", 5)(6, TTCheckbox_span_6_Template, 2, 5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c30, ctx.focused));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checked);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](8, _c31, ctx.checked, ctx.focused, ctx.rowNode.node.partialSelected, ctx.disabled));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-checked", ctx.checked);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tt.checkboxIconTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tt.checkboxIconTemplate);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, primeng_icons_check__WEBPACK_IMPORTED_MODULE_14__.CheckIcon, primeng_icons_minus__WEBPACK_IMPORTED_MODULE_15__.MinusIcon],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return TTCheckbox;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TTHeaderCheckbox = /*#__PURE__*/(() => {
  class TTHeaderCheckbox {
    tt;
    tableService;
    cd;
    boxViewChild;
    checked;
    focused;
    disabled;
    selectionChangeSubscription;
    valueChangeSubscription;
    constructor(tt, tableService, cd) {
      this.tt = tt;
      this.tableService = tableService;
      this.cd = cd;
      this.valueChangeSubscription = this.tt.tableService.uiUpdateSource$.subscribe(() => {
        this.checked = this.updateCheckedState();
      });
      this.selectionChangeSubscription = this.tt.tableService.selectionSource$.subscribe(() => {
        this.checked = this.updateCheckedState();
      });
    }
    ngOnInit() {
      this.checked = this.updateCheckedState();
    }
    onClick(event, checked) {
      if (this.tt.value && this.tt.value.length > 0) {
        this.tt.toggleNodesWithCheckbox(event, !checked);
      }
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.clearSelection();
    }
    onFocus() {
      this.focused = true;
    }
    onBlur() {
      this.focused = false;
    }
    ngOnDestroy() {
      if (this.selectionChangeSubscription) {
        this.selectionChangeSubscription.unsubscribe();
      }
      if (this.valueChangeSubscription) {
        this.valueChangeSubscription.unsubscribe();
      }
    }
    updateCheckedState() {
      this.cd.markForCheck();
      let checked;
      const data = this.tt.filteredNodes || this.tt.value;
      if (data) {
        for (let node of data) {
          if (this.tt.isSelected(node)) {
            checked = true;
          } else {
            checked = false;
            break;
          }
        }
      } else {
        checked = false;
      }
      return checked;
    }
    static ɵfac = function TTHeaderCheckbox_Factory(t) {
      return new (t || TTHeaderCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeTableService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TTHeaderCheckbox,
      selectors: [["p-treeTableHeaderCheckbox"]],
      viewQuery: function TTHeaderCheckbox_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c32, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.boxViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      decls: 8,
      vars: 13,
      consts: [[1, "p-checkbox", "p-component", 3, "ngClass", "click"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "checked", "disabled", "focus", "blur"], ["cb", ""], ["role", "checkbox", 3, "ngClass"], ["box", ""], [4, "ngIf"], ["class", "p-checkbox-icon", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-checkbox-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function TTHeaderCheckbox_Template(rf, ctx) {
        if (rf & 1) {
          const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TTHeaderCheckbox_Template_div_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onClick($event, _r0.checked));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "input", 2, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TTHeaderCheckbox_Template_input_focus_2_listener() {
            return ctx.onFocus();
          })("blur", function TTHeaderCheckbox_Template_input_blur_2_listener() {
            return ctx.onBlur();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TTHeaderCheckbox_ng_container_6_Template, 2, 1, "ng-container", 6)(7, TTHeaderCheckbox_span_7_Template, 2, 4, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c30, ctx.focused));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checked)("disabled", !ctx.tt.value || ctx.tt.value.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](9, _c33, ctx.checked, ctx.focused, !ctx.tt.value || ctx.tt.value.length === 0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-checked", ctx.checked);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tt.headerCheckboxIconTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tt.headerCheckboxIconTemplate);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, primeng_icons_check__WEBPACK_IMPORTED_MODULE_14__.CheckIcon],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return TTHeaderCheckbox;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TTEditableColumn = /*#__PURE__*/(() => {
  class TTEditableColumn {
    tt;
    el;
    zone;
    data;
    field;
    ttEditableColumnDisabled;
    constructor(tt, el, zone) {
      this.tt = tt;
      this.el = el;
      this.zone = zone;
    }
    ngAfterViewInit() {
      if (this.isEnabled()) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.el.nativeElement, 'p-editable-column');
      }
    }
    onClick(event) {
      if (this.isEnabled()) {
        this.tt.editingCellClick = true;
        if (this.tt.editingCell) {
          if (this.tt.editingCell !== this.el.nativeElement) {
            if (!this.tt.isEditingCellValid()) {
              return;
            }
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.tt.editingCell, 'p-cell-editing');
            this.openCell();
          }
        } else {
          this.openCell();
        }
      }
    }
    openCell() {
      this.tt.updateEditingCell(this.el.nativeElement, this.data, this.field);
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.addClass(this.el.nativeElement, 'p-cell-editing');
      this.tt.onEditInit.emit({
        field: this.field,
        data: this.data
      });
      this.tt.editingCellClick = true;
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          let focusable = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.el.nativeElement, 'input, textarea');
          if (focusable) {
            focusable.focus();
          }
        }, 50);
      });
    }
    closeEditingCell() {
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.tt.editingCell, 'p-checkbox-icon');
      this.tt.editingCell = null;
      this.tt.unbindDocumentEditListener();
    }
    onKeyDown(event) {
      if (this.isEnabled()) {
        //enter
        if (event.keyCode == 13 && !event.shiftKey) {
          if (this.tt.isEditingCellValid()) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.tt.editingCell, 'p-cell-editing');
            this.closeEditingCell();
            this.tt.onEditComplete.emit({
              field: this.field,
              data: this.data
            });
          }
          event.preventDefault();
        }
        //escape
        else if (event.keyCode == 27) {
          if (this.tt.isEditingCellValid()) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.removeClass(this.tt.editingCell, 'p-cell-editing');
            this.closeEditingCell();
            this.tt.onEditCancel.emit({
              field: this.field,
              data: this.data
            });
          }
          event.preventDefault();
        }
        //tab
        else if (event.keyCode == 9) {
          this.tt.onEditComplete.emit({
            field: this.field,
            data: this.data
          });
          if (event.shiftKey) this.moveToPreviousCell(event);else this.moveToNextCell(event);
        }
      }
    }
    findCell(element) {
      if (element) {
        let cell = element;
        while (cell && !primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(cell, 'p-cell-editing')) {
          cell = cell.parentElement;
        }
        return cell;
      } else {
        return null;
      }
    }
    moveToPreviousCell(event) {
      let currentCell = this.findCell(event.target);
      let row = currentCell.parentElement;
      let targetCell = this.findPreviousEditableColumn(currentCell);
      if (targetCell) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.invokeElementMethod(targetCell, 'click');
        event.preventDefault();
      }
    }
    moveToNextCell(event) {
      let currentCell = this.findCell(event.target);
      let row = currentCell.parentElement;
      let targetCell = this.findNextEditableColumn(currentCell);
      if (targetCell) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.invokeElementMethod(targetCell, 'click');
        event.preventDefault();
      }
    }
    findPreviousEditableColumn(cell) {
      let prevCell = cell.previousElementSibling;
      if (!prevCell) {
        let previousRow = cell.parentElement ? cell.parentElement.previousElementSibling : null;
        if (previousRow) {
          prevCell = previousRow.lastElementChild;
        }
      }
      if (prevCell) {
        if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(prevCell, 'p-editable-column')) return prevCell;else return this.findPreviousEditableColumn(prevCell);
      } else {
        return null;
      }
    }
    findNextEditableColumn(cell) {
      let nextCell = cell.nextElementSibling;
      if (!nextCell) {
        let nextRow = cell.parentElement ? cell.parentElement.nextElementSibling : null;
        if (nextRow) {
          nextCell = nextRow.firstElementChild;
        }
      }
      if (nextCell) {
        if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.hasClass(nextCell, 'p-editable-column')) return nextCell;else return this.findNextEditableColumn(nextCell);
      } else {
        return null;
      }
    }
    isEnabled() {
      return this.ttEditableColumnDisabled !== true;
    }
    static ɵfac = function TTEditableColumn_Factory(t) {
      return new (t || TTEditableColumn)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TTEditableColumn,
      selectors: [["", "ttEditableColumn", ""]],
      hostAttrs: [1, "p-element"],
      hostBindings: function TTEditableColumn_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TTEditableColumn_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          })("keydown", function TTEditableColumn_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          });
        }
      },
      inputs: {
        data: ["ttEditableColumn", "data"],
        field: ["ttEditableColumnField", "field"],
        ttEditableColumnDisabled: "ttEditableColumnDisabled"
      }
    });
  }
  return TTEditableColumn;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TreeTableCellEditor = /*#__PURE__*/(() => {
  class TreeTableCellEditor {
    tt;
    editableColumn;
    templates;
    inputTemplate;
    outputTemplate;
    constructor(tt, editableColumn) {
      this.tt = tt;
      this.editableColumn = editableColumn;
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'input':
            this.inputTemplate = item.template;
            break;
          case 'output':
            this.outputTemplate = item.template;
            break;
        }
      });
    }
    static ɵfac = function TreeTableCellEditor_Factory(t) {
      return new (t || TreeTableCellEditor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TTEditableColumn));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TreeTableCellEditor,
      selectors: [["p-treeTableCellEditor"]],
      contentQueries: function TreeTableCellEditor_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      hostAttrs: [1, "p-element"],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], [4, "ngTemplateOutlet"]],
      template: function TreeTableCellEditor_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeTableCellEditor_ng_container_0_Template, 2, 1, "ng-container", 0)(1, TreeTableCellEditor_ng_container_1_Template, 2, 1, "ng-container", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tt.editingCell === ctx.editableColumn.el.nativeElement);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tt.editingCell || ctx.tt.editingCell !== ctx.editableColumn.el.nativeElement);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet],
      encapsulation: 2
    });
  }
  return TreeTableCellEditor;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TTRow = /*#__PURE__*/(() => {
  class TTRow {
    tt;
    el;
    zone;
    get level() {
      return this.rowNode?.['level'] + 1;
    }
    get expanded() {
      return this.rowNode?.node['expanded'];
    }
    rowNode;
    constructor(tt, el, zone) {
      this.tt = tt;
      this.el = el;
      this.zone = zone;
    }
    onKeyDown(event) {
      switch (event.code) {
        case 'ArrowDown':
          this.onArrowDownKey(event);
          break;
        case 'ArrowUp':
          this.onArrowUpKey(event);
          break;
        case 'ArrowRight':
          this.onArrowRightKey(event);
          break;
        case 'ArrowLeft':
          this.onArrowLeftKey(event);
          break;
        case 'Tab':
          this.onTabKey(event);
          break;
        case 'Home':
          this.onHomeKey(event);
          break;
        case 'End':
          this.onEndKey(event);
          break;
        default:
          break;
      }
    }
    onArrowDownKey(event) {
      let nextRow = this.el?.nativeElement?.nextElementSibling;
      if (nextRow) {
        this.focusRowChange(event.currentTarget, nextRow);
      }
      event.preventDefault();
    }
    onArrowUpKey(event) {
      let prevRow = this.el?.nativeElement?.previousElementSibling;
      if (prevRow) {
        this.focusRowChange(event.currentTarget, prevRow);
      }
      event.preventDefault();
    }
    onArrowRightKey(event) {
      const currentTarget = event.currentTarget;
      const isHiddenIcon = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(currentTarget, 'button').style.visibility === 'hidden';
      if (!isHiddenIcon && !this.expanded && this.rowNode.node['children']) {
        this.expand(event);
        currentTarget.tabIndex = -1;
      }
      event.preventDefault();
    }
    onArrowLeftKey(event) {
      const container = this.tt.containerViewChild?.nativeElement;
      const expandedRows = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(container, '[aria-expanded="true"]');
      const lastExpandedRow = expandedRows[expandedRows.length - 1];
      if (this.expanded) {
        this.collapse(event);
      }
      if (lastExpandedRow) {
        this.tt.toggleRowIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.index(lastExpandedRow);
      }
      this.restoreFocus();
      event.preventDefault();
    }
    onHomeKey(event) {
      const firstElement = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.tt.containerViewChild?.nativeElement, `tr[aria-level="${this.level}"]`);
      firstElement && primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.focus(firstElement);
      event.preventDefault();
    }
    onEndKey(event) {
      const nodes = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.tt.containerViewChild?.nativeElement, `tr[aria-level="${this.level}"]`);
      const lastElement = nodes[nodes.length - 1];
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.focus(lastElement);
      event.preventDefault();
    }
    onTabKey(event) {
      const rows = this.el.nativeElement ? [...primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.el.nativeElement.parentNode, 'tr')] : undefined;
      if (rows && primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(rows)) {
        const hasSelectedRow = rows.some(row => primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getAttribute(row, 'data-p-highlight') || row.getAttribute('aria-checked') === 'true');
        rows.forEach(row => {
          row.tabIndex = -1;
        });
        if (hasSelectedRow) {
          const selectedNodes = rows.filter(node => primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getAttribute(node, 'data-p-highlight') || node.getAttribute('aria-checked') === 'true');
          selectedNodes[0].tabIndex = 0;
          return;
        }
        rows[0].tabIndex = 0;
      }
    }
    expand(event) {
      this.tt.toggleRowIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.index(this.el.nativeElement);
      this.rowNode.node['expanded'] = true;
      this.tt.updateSerializedValue();
      this.tt.tableService.onUIUpdate(this.tt.value);
      this.rowNode.node['children'] ? this.restoreFocus(this.tt.toggleRowIndex + 1) : this.restoreFocus();
      this.tt.onNodeExpand.emit({
        originalEvent: event,
        node: this.rowNode.node
      });
    }
    collapse(event) {
      this.rowNode.node['expanded'] = false;
      this.tt.updateSerializedValue();
      this.tt.tableService.onUIUpdate(this.tt.value);
      this.tt.onNodeCollapse.emit({
        originalEvent: event,
        node: this.rowNode.node
      });
    }
    focusRowChange(firstFocusableRow, currentFocusedRow, lastVisibleDescendant) {
      firstFocusableRow.tabIndex = '-1';
      currentFocusedRow.tabIndex = '0';
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.focus(currentFocusedRow);
    }
    restoreFocus(index) {
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          const container = this.tt.containerViewChild?.nativeElement;
          const row = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(container, '.p-treetable-tbody').children[index || this.tt.toggleRowIndex];
          const rows = [...primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(container, 'tr')];
          rows && rows.forEach(r => {
            if (!row.isSameNode(r)) {
              r.tabIndex = -1;
            }
          });
          if (row) {
            row.tabIndex = 0;
            row.focus();
          }
        }, 25);
      });
    }
    static ɵfac = function TTRow_Factory(t) {
      return new (t || TTRow)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TTRow,
      selectors: [["", "ttRow", ""]],
      hostAttrs: [1, "p-element"],
      hostVars: 5,
      hostBindings: function TTRow_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function TTRow_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", "0")("aria-expanded", ctx.expanded)("aria-level", ctx.level)("data-pc-section", ctx.row)("role", ctx.row);
        }
      },
      inputs: {
        rowNode: ["ttRow", "rowNode"]
      }
    });
  }
  return TTRow;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TreeTableToggler = /*#__PURE__*/(() => {
  class TreeTableToggler {
    tt;
    config;
    rowNode;
    constructor(tt, config) {
      this.tt = tt;
      this.config = config;
    }
    get toggleButtonAriaLabel() {
      return this.config.translation ? this.rowNode.expanded ? this.config.translation.aria.collapseRow : this.config.translation.aria.expandRow : undefined;
    }
    onClick(event) {
      this.rowNode.node.expanded = !this.rowNode.node.expanded;
      if (this.rowNode.node.expanded) {
        this.tt.onNodeExpand.emit({
          originalEvent: event,
          node: this.rowNode.node
        });
      } else {
        this.tt.onNodeCollapse.emit({
          originalEvent: event,
          node: this.rowNode.node
        });
      }
      this.tt.updateSerializedValue();
      this.tt.tableService.onUIUpdate(this.tt.value);
      event.preventDefault();
    }
    static ɵfac = function TreeTableToggler_Factory(t) {
      return new (t || TreeTableToggler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeTable), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeNGConfig));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TreeTableToggler,
      selectors: [["p-treeTableToggler"]],
      hostAttrs: [1, "p-element"],
      inputs: {
        rowNode: "rowNode"
      },
      decls: 3,
      vars: 12,
      consts: [["type", "button", "tabindex", "-1", "pRipple", "", 1, "p-treetable-toggler", "p-link", 3, "click"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function TreeTableToggler_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeTableToggler_Template_button_click_0_listener($event) {
            return ctx.onClick($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeTableToggler_ng_container_1_Template, 3, 2, "ng-container", 1)(2, TreeTableToggler_2_Template, 1, 0, null, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.rowNode.node.leaf === false || ctx.rowNode.node.children && ctx.rowNode.node.children.length ? "visible" : "hidden")("margin-left", ctx.rowNode.level * 16 + "px");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "rowtoggler")("data-pc-group-section", "rowactionbutton")("aria-label", ctx.toggleButtonAriaLabel);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tt.togglerIconTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.tt.togglerIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c7, ctx.rowNode.node.expanded));
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, primeng_ripple__WEBPACK_IMPORTED_MODULE_16__.Ripple, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_17__.ChevronDownIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_18__.ChevronRightIcon],
      encapsulation: 2
    });
  }
  return TreeTableToggler;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TreeTableModule = /*#__PURE__*/(() => {
  class TreeTableModule {
    static ɵfac = function TreeTableModule_Factory(t) {
      return new (t || TreeTableModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TreeTableModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_paginator__WEBPACK_IMPORTED_MODULE_6__.PaginatorModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_16__.RippleModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_10__.ScrollerModule, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_7__.SpinnerIcon, primeng_icons_arrowdown__WEBPACK_IMPORTED_MODULE_8__.ArrowDownIcon, primeng_icons_arrowup__WEBPACK_IMPORTED_MODULE_9__.ArrowUpIcon, primeng_icons_sortalt__WEBPACK_IMPORTED_MODULE_11__.SortAltIcon, primeng_icons_sortamountupalt__WEBPACK_IMPORTED_MODULE_12__.SortAmountUpAltIcon, primeng_icons_sortamountdown__WEBPACK_IMPORTED_MODULE_13__.SortAmountDownIcon, primeng_icons_check__WEBPACK_IMPORTED_MODULE_14__.CheckIcon, primeng_icons_minus__WEBPACK_IMPORTED_MODULE_15__.MinusIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_17__.ChevronDownIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_18__.ChevronRightIcon, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_10__.ScrollerModule]
    });
  }
  return TreeTableModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-treetable.mjs.map

/***/ })

}]);