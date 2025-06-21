"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[7613],{

/***/ 56935:
/*!*******************************************************************!*\
  !*** ./src/app/demo/components/landing/landing-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingRoutingModule: () => (/* binding */ LandingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.component */ 22218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 65879);




let LandingRoutingModule = /*#__PURE__*/(() => {
  class LandingRoutingModule {
    static #_ = this.ɵfac = function LandingRoutingModule_Factory(t) {
      return new (t || LandingRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LandingRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
        path: '',
        component: _landing_component__WEBPACK_IMPORTED_MODULE_0__.LandingComponent
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
  return LandingRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LandingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 22218:
/*!**************************************************************!*\
  !*** ./src/app/demo/components/landing/landing.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingComponent: () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/layout/service/app.layout.service */ 43859);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/divider */ 75359);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/styleclass */ 81913);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 40707);






let LandingComponent = /*#__PURE__*/(() => {
  class LandingComponent {
    constructor(layoutService, router) {
      this.layoutService = layoutService;
      this.router = router;
    }
    static #_ = this.ɵfac = function LandingComponent_Factory(t) {
      return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LandingComponent,
      selectors: [["app-landing"]],
      decls: 310,
      vars: 3,
      consts: [[1, "surface-0", "flex", "justify-content-center"], ["id", "home", 1, "landing-wrapper", "overflow-hidden"], [1, "py-4", "px-4", "mx-0", "md:mx-6", "lg:mx-8", "lg:px-8", "flex", "align-items-center", "justify-content-between", "relative", "lg:static", "mb-3"], ["href", "#", 1, "flex", "align-items-center"], ["alt", "Sakai Logo", "height", "50", 1, "mr-0", "lg:mr-2", 3, "src"], [1, "text-900", "font-medium", "text-2xl", "line-height-3", "mr-8"], ["pRipple", "", "pStyleClass", "@next", "enterClass", "hidden", "leaveToClass", "hidden", 1, "cursor-pointer", "block", "lg:hidden", "text-700", 3, "hideOnOutsideClick"], [1, "pi", "pi-bars", "text-4xl"], [1, "align-items-center", "surface-0", "flex-grow-1", "justify-content-between", "hidden", "lg:flex", "absolute", "lg:static", "w-full", "left-0", "px-6", "lg:px-0", "z-2", 2, "top", "120px"], [1, "list-none", "p-0", "m-0", "flex", "lg:align-items-center", "select-none", "flex-column", "lg:flex-row", "cursor-pointer"], ["pRipple", "", 1, "flex", "m-0", "md:ml-5", "px-0", "py-3", "text-900", "font-medium", "line-height-3", 3, "click"], [1, "flex", "justify-content-between", "lg:block", "border-top-1", "lg:border-top-none", "surface-border", "py-3", "lg:py-0", "mt-3", "lg:mt-0"], ["pButton", "", "pRipple", "", "label", "Login", 1, "p-button-text", "p-button-rounded", "border-none", "font-light", "line-height-2", "text-blue-500"], ["pButton", "", "pRipple", "", "label", "Register", 1, "p-button-rounded", "border-none", "ml-5", "font-light", "line-height-2", "bg-blue-500", "text-white"], ["id", "hero", 1, "flex", "flex-column", "pt-4", "px-4", "lg:px-8", "overflow-hidden", 2, "background", "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%)", "clip-path", "ellipse(150% 87% at 93% 13%)"], [1, "mx-4", "md:mx-8", "mt-0", "md:mt-4"], [1, "text-6xl", "font-bold", "text-gray-900", "line-height-2"], [1, "font-light", "block"], [1, "font-normal", "text-2xl", "line-height-3", "md:mt-3", "text-gray-700"], ["pButton", "", "pRipple", "", "type", "button", "label", "Get Started", 1, "p-button-rounded", "text-xl", "border-none", "mt-3", "bg-blue-500", "font-normal", "line-height-3", "px-3", "text-white"], [1, "flex", "justify-content-center", "md:justify-content-end"], ["src", "assets/demo/images/landing/screen-1.png", "alt", "Hero Image", 1, "w-9", "md:w-auto"], ["id", "features", 1, "py-4", "px-4", "lg:px-8", "mt-5", "mx-0", "lg:mx-8"], [1, "grid", "justify-content-center"], [1, "col-12", "text-center", "mt-8", "mb-4"], [1, "text-900", "font-normal", "mb-2"], [1, "text-600", "text-2xl"], [1, "col-12", "md:col-12", "lg:col-4", "p-0", "lg:pr-5", "lg:pb-5", "mt-4", "lg:mt-0"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(253, 228, 165, 0.2),rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2),rgba(187, 199, 205, 0.2))"], [1, "p-3", "surface-card", "h-full", 2, "border-radius", "8px"], [1, "flex", "align-items-center", "justify-content-center", "bg-yellow-200", "mb-3", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-users", "text-2xl", "text-yellow-700"], [1, "mb-2", "text-900"], [1, "text-600"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(145,226,237,0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))"], [1, "flex", "align-items-center", "justify-content-center", "bg-cyan-200", "mb-3", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-palette", "text-2xl", "text-cyan-700"], [1, "col-12", "md:col-12", "lg:col-4", "p-0", "lg:pb-5", "mt-4", "lg:mt-0"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))"], [1, "flex", "align-items-center", "justify-content-center", "bg-indigo-200", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-map", "text-2xl", "text-indigo-700"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2),rgba(145, 210, 204, 0.2))"], [1, "flex", "align-items-center", "justify-content-center", "bg-bluegray-200", "mb-3", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-id-card", "text-2xl", "text-bluegray-700"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2),rgba(160, 210, 250, 0.2))"], [1, "flex", "align-items-center", "justify-content-center", "bg-orange-200", "mb-3", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-star", "text-2xl", "text-orange-700"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(251, 199, 145, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(212, 162, 221, 0.2))"], [1, "flex", "align-items-center", "justify-content-center", "bg-pink-200", "mb-3", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-moon", "text-2xl", "text-pink-700"], [1, "col-12", "md:col-12", "lg:col-4", "p-0", "lg:pr-5", "mt-4", "lg:mt-0"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2))"], [1, "flex", "align-items-center", "justify-content-center", "bg-teal-200", "mb-3", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-shopping-cart", "text-2xl", "text-teal-700"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))"], [1, "flex", "align-items-center", "justify-content-center", "bg-blue-200", "mb-3", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-globe", "text-2xl", "text-blue-700"], [1, "col-12", "md:col-12", "lg:col-4", "p-0", "lg-4", "mt-4", "lg:mt-0"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2))"], [1, "flex", "align-items-center", "justify-content-center", "bg-purple-200", "mb-3", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-eye", "text-2xl", "text-purple-700"], [1, "col-12", "mt-8", "mb-8", "p-2", "md:p-8", 2, "border-radius", "20px", "background", "linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EFE1AF 0%, #C3DCFA 100%)"], [1, "flex", "flex-column", "justify-content-center", "align-items-center", "text-center", "px-3", "py-3", "md:py-0"], [1, "text-gray-900", "mb-2"], [1, "text-gray-600", "text-2xl"], [1, "text-gray-900", "sm:line-height-2", "md:line-height-4", "text-2xl", "mt-4", 2, "max-width", "800px"], ["src", "assets/demo/images/landing/peak-logo.svg", "alt", "Company logo", 1, "mt-4"], ["id", "highlights", 1, "py-4", "px-4", "lg:px-8", "mx-0", "my-6", "lg:mx-8"], [1, "text-center"], [1, "grid", "mt-8", "pb-2", "md:pb-8"], [1, "flex", "justify-content-center", "col-12", "lg:col-6", "bg-purple-100", "p-0", "flex-order-1", "lg:flex-order-0", 2, "border-radius", "8px"], ["src", "assets/demo/images/landing/mockup.svg", "alt", "mockup mobile", 1, "w-11"], [1, "col-12", "lg:col-6", "my-auto", "flex", "flex-column", "lg:align-items-end", "text-center", "lg:text-right"], [1, "flex", "align-items-center", "justify-content-center", "bg-purple-200", "align-self-center", "lg:align-self-end", 2, "width", "4.2rem", "height", "4.2rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-mobile", "text-5xl", "text-purple-700"], [1, "line-height-1", "text-900", "text-4xl", "font-normal"], [1, "text-700", "text-2xl", "line-height-3", "ml-0", "md:ml-2", 2, "max-width", "650px"], [1, "grid", "my-8", "pt-2", "md:pt-8"], [1, "col-12", "lg:col-6", "my-auto", "flex", "flex-column", "text-center", "lg:text-left", "lg:align-items-start"], [1, "flex", "align-items-center", "justify-content-center", "bg-yellow-200", "align-self-center", "lg:align-self-start", 2, "width", "4.2rem", "height", "4.2rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-desktop", "text-5xl", "text-yellow-700"], [1, "text-700", "text-2xl", "line-height-3", "mr-0", "md:mr-2", 2, "max-width", "650px"], [1, "flex", "justify-content-end", "flex-order-1", "sm:flex-order-2", "col-12", "lg:col-6", "bg-yellow-100", "p-0", 2, "border-radius", "8px"], ["src", "assets/demo/images/landing/mockup-desktop.svg", "alt", "mockup", 1, "w-11"], ["id", "pricing", 1, "py-4", "px-4", "lg:px-8", "my-2", "md:my-4"], [1, "grid", "justify-content-between", "mt-8", "md:mt-0"], [1, "col-12", "lg:col-4", "p-0", "md:p-3"], [1, "p-3", "flex", "flex-column", "border-200", "pricing-card", "cursor-pointer", "border-2", "hover:border-primary", "transition-duration-300", "transition-all", 2, "border-radius", "10px"], [1, "text-900", "text-center", "my-5"], ["src", "assets/demo/images/landing/free.svg", "alt", "free", 1, "w-10", "h-10", "mx-auto"], [1, "my-5", "text-center"], [1, "text-5xl", "font-bold", "mr-2", "text-900"], ["pButton", "", "pRipple", "", "label", "Get Started", 1, "block", "mx-auto", "mt-4", "p-button-rounded", "border-none", "ml-3", "font-light", "line-height-2", "bg-blue-500", "text-white"], [1, "w-full", "bg-surface-200"], [1, "my-5", "list-none", "p-0", "flex", "text-900", "flex-column"], [1, "py-2"], [1, "pi", "pi-fw", "pi-check", "text-xl", "text-cyan-500", "mr-2"], [1, "text-xl", "line-height-3"], [1, "col-12", "lg:col-4", "p-0", "md:p-3", "mt-4", "md:mt-0"], ["src", "assets/demo/images/landing/startup.svg", "alt", "startup", 1, "w-10", "h-10", "mx-auto"], ["pButton", "", "pRipple", "", "label", "Try Free", 1, "block", "mx-auto", "mt-4", "p-button-rounded", "border-none", "ml-3", "font-light", "line-height-2", "bg-blue-500", "text-white"], ["src", "assets/demo/images/landing/enterprise.svg", "alt", "enterprise", 1, "w-10", "h-10", "mx-auto"], ["pButton", "", "pRipple", "", "label", "Get a Quote", 1, "block", "mx-auto", "mt-4", "p-button-rounded", "border-none", "ml-3", "font-light", "line-height-2", "bg-blue-500", "text-white"], [1, "py-4", "px-4", "mx-0", "mt-8", "lg:mx-8"], [1, "grid", "justify-content-between"], [1, "col-12", "md:col-2", 2, "margin-top", "-1.5rem"], [1, "flex", "flex-wrap", "align-items-center", "justify-content-center", "md:justify-content-start", "md:mb-0", "mb-3", "cursor-pointer", 3, "click"], ["alt", "footer sections", "width", "50", "height", "50", 1, "mr-2", 3, "src"], [1, "font-medium", "text-3xl", "text-900"], [1, "col-12", "md:col-10", "lg:col-7"], [1, "grid", "text-center", "md:text-left"], [1, "col-12", "md:col-3"], [1, "font-medium", "text-2xl", "line-height-3", "mb-3", "text-900"], [1, "line-height-3", "text-xl", "block", "cursor-pointer", "mb-2", "text-700"], [1, "line-height-3", "text-xl", "block", "cursor-pointer", "text-700"], [1, "col-12", "md:col-3", "mt-4", "md:mt-0"], ["src", "assets/demo/images/landing/new-badge.svg", 1, "ml-2"]],
      template: function LandingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "SAKAI");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "ul", 9)(11, "li")(12, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_12_listener() {
            return ctx.router.navigate(["/landing"], {
              fragment: "home"
            });
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li")(16, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_16_listener() {
            return ctx.router.navigate(["/landing"], {
              fragment: "features"
            });
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Features");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li")(20, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_20_listener() {
            return ctx.router.navigate(["/landing"], {
              fragment: "highlights"
            });
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Highlights");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_24_listener() {
            return ctx.router.navigate(["/landing"], {
              fragment: "pricing"
            });
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Pricing");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "button", 12)(29, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14)(31, "div", 15)(32, "h1", 16)(33, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Eu sem integer");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "eget magna fermentum");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Sed blandit libero volutpat sed cras. Fames ac turpis egestas integer. Placerat in egestas erat... ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 22)(42, "div", 23)(43, "div", 24)(44, "h2", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Marvelous Features");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Placerat in egestas erat...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 27)(49, "div", 28)(50, "div", 29)(51, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h5", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Easy to Use");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Posuere morbi leo urna molestie.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 27)(58, "div", 34)(59, "div", 29)(60, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h5", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Fresh Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Semper risus in hendrerit.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 37)(67, "div", 38)(68, "div", 29)(69, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "h5", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Well Documented");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Non arcu risus quis varius quam quisque.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 27)(76, "div", 41)(77, "div", 29)(78, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "h5", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Responsive Layout");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Nulla malesuada pellentesque elit.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 27)(85, "div", 44)(86, "div", 29)(87, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "i", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "h5", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Clean Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Condimentum lacinia quis vel eros.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 37)(94, "div", 47)(95, "div", 29)(96, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "h5", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Dark Mode");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Convallis tellus id interdum velit laoreet.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 50)(103, "div", 51)(104, "div", 29)(105, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "i", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "h5", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Ready to Use");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Mauris sit amet massa vitae.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 50)(112, "div", 54)(113, "div", 29)(114, "div", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "i", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "h5", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Modern Practices");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Elementum nibh tellus molestie nunc non.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 57)(121, "div", 58)(122, "div", 29)(123, "div", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "i", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "h5", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Privacy");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Neque egestas congue quisque.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 61)(130, "div", 62)(131, "h3", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Jos\u00E9phine Miller");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "span", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Peak Interactive");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "p", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "\u201CDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\u201D");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "img", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 67)(139, "div", 68)(140, "h2", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Powerful Everywhere");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Amet consectetur adipiscing elit...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 69)(145, "div", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "img", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 72)(148, "div", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "i", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "h2", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Congue Quisque Egestas");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "span", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet mattis vulputate enim nulla aliquet.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 77)(155, "div", 78)(156, "div", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "i", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "h2", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Celerisque Eu Ultrices");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "span", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Adipiscing commodo elit at imperdiet dui. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Suspendisse in est ante in. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "img", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 84)(165, "div", 68)(166, "h2", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "Matchless Pricing");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Amet consectetur adipiscing elit...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 85)(171, "div", 86)(172, "div", 87)(173, "h3", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Free");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "img", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 90)(177, "span", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "$0");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "per month");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "button", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](182, "p-divider", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "ul", 94)(184, "li", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](185, "i", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "span", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "Responsive Layout");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "li", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "i", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "span", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Unlimited Push Messages");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "li", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "i", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "span", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "50 Support Ticket");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "li", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](197, "i", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "span", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Free Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 98)(201, "div", 87)(202, "h3", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Startup");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](204, "img", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 90)(206, "span", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "$1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "per month");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](210, "button", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](211, "p-divider", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "ul", 94)(213, "li", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](214, "i", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "span", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Responsive Layout");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "li", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](218, "i", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "span", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "Unlimited Push Messages");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "li", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](222, "i", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "span", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "50 Support Ticket");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "li", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "i", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "span", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "Free Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 98)(230, "div", 87)(231, "h3", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Enterprise");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](233, "img", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 90)(235, "span", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "$999");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "per month");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](239, "button", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](240, "p-divider", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "ul", 94)(242, "li", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](243, "i", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "span", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "Responsive Layout");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "li", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](247, "i", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "span", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "Unlimited Push Messages");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "li", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](251, "i", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "span", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "50 Support Ticket");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "li", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](255, "i", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "span", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, "Free Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div", 103)(259, "div", 104)(260, "div", 105)(261, "a", 106);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingComponent_Template_a_click_261_listener() {
            return ctx.router.navigate(["/pages/landing"], {
              fragment: "home"
            });
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](262, "img", 107);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "h4", 108);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "SAKAI");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "div", 109)(266, "div", 110)(267, "div", 111)(268, "h4", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](269, "Company");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "a", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, "About Us");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "a", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, "News");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "a", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "Investor Relations");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "a", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, "Careers");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "a", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, "Media Kit");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "div", 115)(281, "h4", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, "Resources");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "a", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "Get Started");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "a", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "Learn");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "a", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "Case Studies");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "div", 115)(290, "h4", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](291, "Community");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "a", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](293, "Discord");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "a", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](295, "Events");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](296, "img", 116);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "a", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](298, "FAQ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "a", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](300, "Blog");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "div", 115)(302, "h4", 112);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](303, "Legal");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "a", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](305, "Brand Policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "a", 113);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, "Privacy Policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "a", 114);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, "Terms of Service");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/layout/images/", ctx.layoutService.config().colorScheme === "light" ? "logo-dark" : "logo-white", ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hideOnOutsideClick", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](255);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/layout/images/", ctx.layoutService.config().colorScheme === "light" ? "logo-dark" : "logo-white", ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      },
      dependencies: [primeng_divider__WEBPACK_IMPORTED_MODULE_3__.Divider, primeng_styleclass__WEBPACK_IMPORTED_MODULE_4__.StyleClass, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective],
      encapsulation: 2
    });
  }
  return LandingComponent;
})();

/***/ }),

/***/ 96010:
/*!***********************************************************!*\
  !*** ./src/app/demo/components/landing/landing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingModule: () => (/* binding */ LandingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-routing.module */ 56935);
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.component */ 22218);
/* harmony import */ var primeng_styleclass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/styleclass */ 81913);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/divider */ 75359);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/chart */ 4213);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/panel */ 51230);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);









let LandingModule = /*#__PURE__*/(() => {
  class LandingModule {
    static #_ = this.ɵfac = function LandingModule_Factory(t) {
      return new (t || LandingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: LandingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingRoutingModule, primeng_divider__WEBPACK_IMPORTED_MODULE_4__.DividerModule, primeng_styleclass__WEBPACK_IMPORTED_MODULE_5__.StyleClassModule, primeng_chart__WEBPACK_IMPORTED_MODULE_6__.ChartModule, primeng_panel__WEBPACK_IMPORTED_MODULE_7__.PanelModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule]
    });
  }
  return LandingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LandingModule, {
    declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_1__.LandingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingRoutingModule, primeng_divider__WEBPACK_IMPORTED_MODULE_4__.DividerModule, primeng_styleclass__WEBPACK_IMPORTED_MODULE_5__.StyleClassModule, primeng_chart__WEBPACK_IMPORTED_MODULE_6__.ChartModule, primeng_panel__WEBPACK_IMPORTED_MODULE_7__.PanelModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule]
  });
})();

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

/***/ })

}]);