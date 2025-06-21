"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[1733],{

/***/ 26880:
/*!***********************************************************************!*\
  !*** ./src/app/demo/components/dashboard/dashboard-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardsRoutingModule: () => (/* binding */ DashboardsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 87310);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 65879);




let DashboardsRoutingModule = /*#__PURE__*/(() => {
  class DashboardsRoutingModule {
    static #_ = this.ɵfac = function DashboardsRoutingModule_Factory(t) {
      return new (t || DashboardsRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DashboardsRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
  return DashboardsRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 87310:
/*!******************************************************************!*\
  !*** ./src/app/demo/components/dashboard/dashboard.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 83620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/product.service */ 20981);
/* harmony import */ var src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/layout/service/app.layout.service */ 43859);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/chart */ 4213);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/menu */ 61122);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ 94267);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 40707);










function DashboardComponent_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "p-sortIcon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "p-sortIcon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/demo/images/product/", product_r4.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", product_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 4, product_r4.price, "USD"));
  }
}
const _c0 = () => ({
  width: "2.5rem",
  height: "2.5rem"
});
const _c1 = () => ({
  height: "8px"
});
const _c2 = () => ({
  width: "50%"
});
const _c3 = () => ({
  width: "16%"
});
const _c4 = () => ({
  width: "67%"
});
const _c5 = () => ({
  width: "35%"
});
const _c6 = () => ({
  width: "75%"
});
const _c7 = () => ({
  width: "40%"
});
const _c8 = "linear-gradient(0deg, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 0.5)), linear-gradient(92.54deg, #1C80CF 47.88%, #FFFFFF 100.01%)";
const _c9 = () => ({
  borderRadius: "1rem",
  background: _c8
});
let DashboardComponent = /*#__PURE__*/(() => {
  class DashboardComponent {
    constructor(productService, layoutService) {
      this.productService = productService;
      this.layoutService = layoutService;
      this.subscription = this.layoutService.configUpdate$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(25)).subscribe(config => {
        this.initChart();
      });
    }
    ngOnInit() {
      this.initChart();
      this.productService.getProductsSmall().then(data => this.products = data);
      this.items = [{
        label: 'Add New',
        icon: 'pi pi-fw pi-plus'
      }, {
        label: 'Remove',
        icon: 'pi pi-fw pi-minus'
      }];
    }
    initChart() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      this.chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
          borderColor: documentStyle.getPropertyValue('--bluegray-700'),
          tension: .4
        }, {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--green-600'),
          borderColor: documentStyle.getPropertyValue('--green-600'),
          tension: .4
        }]
      };
      this.chartOptions = {
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          },
          y: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          }
        }
      };
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    static #_ = this.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["ng-component"]],
      decls: 200,
      vars: 43,
      consts: [[1, "grid"], [1, "col-12", "lg:col-6", "xl:col-3"], [1, "card", "mb-0"], [1, "flex", "justify-content-between", "mb-3"], [1, "block", "text-500", "font-medium", "mb-3"], [1, "text-900", "font-medium", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-blue-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-shopping-cart", "text-blue-500", "text-xl"], [1, "text-green-500", "font-medium"], [1, "text-500"], [1, "flex", "align-items-center", "justify-content-center", "bg-orange-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-map-marker", "text-orange-500", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-cyan-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-inbox", "text-cyan-500", "text-xl"], [1, "flex", "align-items-center", "justify-content-center", "bg-purple-100", "border-round", 3, "ngStyle"], [1, "pi", "pi-comment", "text-purple-500", "text-xl"], [1, "col-12", "xl:col-6"], [1, "card"], ["responsiveLayout", "scroll", 3, "value", "paginator", "rows"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "flex", "justify-content-between", "align-items-center", "mb-5"], ["pButton", "", "type", "button", "icon", "pi pi-ellipsis-v", 1, "p-button-rounded", "p-button-text", "p-button-plain", 3, "click"], [3, "popup", "model"], ["menu", ""], [1, "list-none", "p-0", "m-0"], [1, "flex", "flex-column", "md:flex-row", "md:align-items-center", "md:justify-content-between", "mb-4"], [1, "text-900", "font-medium", "mr-2", "mb-1", "md:mb-0"], [1, "mt-1", "text-600"], [1, "mt-2", "md:mt-0", "flex", "align-items-center"], [1, "surface-300", "border-round", "overflow-hidden", "w-10rem", "lg:w-6rem", 3, "ngStyle"], [1, "bg-orange-500", "h-full", 3, "ngStyle"], [1, "text-orange-500", "ml-3", "font-medium"], [1, "mt-2", "md:mt-0", "ml-0", "md:ml-8", "flex", "align-items-center"], [1, "bg-cyan-500", "h-full", 3, "ngStyle"], [1, "text-cyan-500", "ml-3", "font-medium"], [1, "bg-pink-500", "h-full", 3, "ngStyle"], [1, "text-pink-500", "ml-3", "font-medium"], [1, "bg-green-500", "h-full", 3, "ngStyle"], [1, "text-green-500", "ml-3", "font-medium"], [1, "bg-purple-500", "h-full", 3, "ngStyle"], [1, "text-purple-500", "ml-3", "font-medium"], [1, "bg-teal-500", "h-full", 3, "ngStyle"], [1, "text-teal-500", "ml-3", "font-medium"], ["type", "line", 3, "data", "options"], [1, "flex", "align-items-center", "justify-content-between", "mb-4"], [1, "block", "text-600", "font-medium", "mb-3"], [1, "p-0", "mx-0", "mt-0", "mb-4", "list-none"], [1, "flex", "align-items-center", "py-2", "border-bottom-1", "surface-border"], [1, "w-3rem", "h-3rem", "flex", "align-items-center", "justify-content-center", "bg-blue-100", "border-circle", "mr-3", "flex-shrink-0"], [1, "pi", "pi-dollar", "text-xl", "text-blue-500"], [1, "text-900", "line-height-3"], [1, "text-700"], [1, "text-blue-500"], [1, "flex", "align-items-center", "py-2"], [1, "w-3rem", "h-3rem", "flex", "align-items-center", "justify-content-center", "bg-orange-100", "border-circle", "mr-3", "flex-shrink-0"], [1, "pi", "pi-download", "text-xl", "text-orange-500"], [1, "text-700", "line-height-3"], [1, "text-blue-500", "font-medium"], [1, "p-0", "m-0", "list-none"], [1, "w-3rem", "h-3rem", "flex", "align-items-center", "justify-content-center", "bg-pink-100", "border-circle", "mr-3", "flex-shrink-0"], [1, "pi", "pi-question", "text-xl", "text-pink-500"], [1, "px-4", "py-5", "shadow-2", "flex", "flex-column", "md:flex-row", "md:align-items-center", "justify-content-between", "mb-3", 3, "ngStyle"], [1, "text-blue-100", "font-medium", "text-xl", "mt-2", "mb-3"], [1, "text-white", "font-medium", "text-5xl"], [1, "mt-4", "mr-auto", "md:mt-0", "md:mr-0"], ["target", "_blank", "href", "https://www.primefaces.org/primeblocks-ng", 1, "p-button", "font-bold", "px-5", "py-3", "p-button-warning", "p-button-rounded", "p-button-raised"], ["pSortableColumn", "name"], ["field", "name"], ["pSortableColumn", "price"], ["field", "price"], [2, "width", "15%", "min-width", "5rem"], ["width", "50", 1, "shadow-4", 3, "src", "alt"], [2, "width", "35%", "min-width", "7rem"], [2, "width", "35%", "min-width", "8rem"], [2, "width", "15%"], ["pButton", "", "pRipple", "", "type", "button", "icon", "pi pi-search", 1, "p-button", "p-component", "p-button-text", "p-button-icon-only"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Orders");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "152");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "24 new ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "since last visit");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 1)(16, "div", 2)(17, "div", 3)(18, "div")(19, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Revenue");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "$2.100");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "%52+ ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "since last week");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 1)(30, "div", 2)(31, "div", 3)(32, "div")(33, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Customers");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "28441");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "520 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "newly registered");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 1)(44, "div", 2)(45, "div", 3)(46, "div")(47, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Comments");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "152 Unread");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "85 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "responded");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 16)(58, "div", 17)(59, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Recent Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "p-table", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, DashboardComponent_ng_template_62_Template, 11, 0, "ng-template", 19)(63, DashboardComponent_ng_template_63_Template, 10, 7, "ng-template", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 17)(65, "div", 21)(66, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Best Selling Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div")(69, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_69_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
            const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](71);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r2.toggle($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "p-menu", 23, 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "ul", 25)(73, "li", 26)(74, "div")(75, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Space T-Shirt");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Clothing");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 29)(80, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "%50");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "li", 26)(85, "div")(86, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Portal Sticker");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Accessories");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 33)(91, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "%16");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "li", 26)(96, "div")(97, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Supernova Sticker");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Accessories");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 33)(102, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "%67");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "li", 26)(107, "div")(108, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Wonders Notebook");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "Office");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 33)(113, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "span", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "%35");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "li", 26)(118, "div")(119, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Mat Black Case");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "Accessories");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 33)(124, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](125, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "span", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "%75");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "li", 26)(129, "div")(130, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Robots T-Shirt");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Clothing");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 33)(135, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](136, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "span", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "%40");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 16)(140, "div", 17)(141, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, "Sales Overview");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](143, "p-chart", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 17)(145, "div", 45)(146, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "Notifications");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div")(149, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_149_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
            const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](71);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r2.toggle($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "p-menu", 23, 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "TODAY");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "ul", 47)(155, "li", 48)(156, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](157, "i", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "Richard Jones ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "span", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, " has purchased a blue t-shirt for ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "span", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, "79$");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "li", 54)(165, "div", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](166, "i", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "span", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, "Your request for withdrawal of ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "span", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, "2500$");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](171, " has been initiated.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "YESTERDAY");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "ul", 59)(175, "li", 48)(176, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](177, "i", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, "Keyser Wick ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "span", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, " has purchased a black jacket for ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "span", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, "59$");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "li", 48)(185, "div", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](186, "i", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "span", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "Jane Davis");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "span", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190, " has posted a new questions about your product.");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "div", 62)(192, "div")(193, "div", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194, "TAKE THE NEXT STEP");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "div", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](196, "Try PrimeBlocks");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "div", 65)(198, "a", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199, " Get Started ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](26, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](27, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](28, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](29, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.products)("paginator", true)("rows", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("popup", true)("model", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](30, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](31, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](32, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](33, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](34, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](35, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](36, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](37, _c5));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](38, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](39, _c6));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](40, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](41, _c7));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.chartData)("options", ctx.chartOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("popup", true)("model", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](42, _c9));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, primeng_chart__WEBPACK_IMPORTED_MODULE_5__.UIChart, primeng_menu__WEBPACK_IMPORTED_MODULE_6__.Menu, primeng_table__WEBPACK_IMPORTED_MODULE_7__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_7__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_7__.SortIcon, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe],
      encapsulation: 2
    });
  }
  return DashboardComponent;
})();

/***/ }),

/***/ 73931:
/*!***************************************************************!*\
  !*** ./src/app/demo/components/dashboard/dashboard.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardModule: () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 87310);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/chart */ 4213);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/menu */ 61122);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ 94267);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/styleclass */ 81913);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/panelmenu */ 30074);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-routing.module */ 26880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);











let DashboardModule = /*#__PURE__*/(() => {
  class DashboardModule {
    static #_ = this.ɵfac = function DashboardModule_Factory(t) {
      return new (t || DashboardModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: DashboardModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, primeng_chart__WEBPACK_IMPORTED_MODULE_5__.ChartModule, primeng_menu__WEBPACK_IMPORTED_MODULE_6__.MenuModule, primeng_table__WEBPACK_IMPORTED_MODULE_7__.TableModule, primeng_styleclass__WEBPACK_IMPORTED_MODULE_8__.StyleClassModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_9__.PanelMenuModule, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardsRoutingModule]
    });
  }
  return DashboardModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, primeng_chart__WEBPACK_IMPORTED_MODULE_5__.ChartModule, primeng_menu__WEBPACK_IMPORTED_MODULE_6__.MenuModule, primeng_table__WEBPACK_IMPORTED_MODULE_7__.TableModule, primeng_styleclass__WEBPACK_IMPORTED_MODULE_8__.StyleClassModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_9__.PanelMenuModule, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardsRoutingModule]
  });
})();

/***/ }),

/***/ 83620:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounceTime: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 16321);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 79360);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 8251);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;
    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();
      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }
      emit();
    }
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();
      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
}
//# sourceMappingURL=debounceTime.js.map

/***/ })

}]);