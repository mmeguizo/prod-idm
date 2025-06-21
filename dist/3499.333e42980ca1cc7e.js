"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[3499],{

/***/ 31771:
/*!*************************************************************************!*\
  !*** ./src/app/demo/components/uikit/media/mediademo-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaDemoRoutingModule: () => (/* binding */ MediaDemoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var _mediademo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mediademo.component */ 54544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 65879);




let MediaDemoRoutingModule = /*#__PURE__*/(() => {
  class MediaDemoRoutingModule {
    static #_ = this.ɵfac = function MediaDemoRoutingModule_Factory(t) {
      return new (t || MediaDemoRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MediaDemoRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
        path: '',
        component: _mediademo_component__WEBPACK_IMPORTED_MODULE_0__.MediaDemoComponent
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
  return MediaDemoRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MediaDemoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 54544:
/*!********************************************************************!*\
  !*** ./src/app/demo/components/uikit/media/mediademo.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaDemoComponent: () => (/* binding */ MediaDemoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var src_app_demo_service_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo/service/product.service */ 20981);
/* harmony import */ var src_app_demo_service_photo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/photo.service */ 17533);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/image */ 25274);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/galleria */ 32795);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/carousel */ 43658);








function MediaDemoComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div")(4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "button", 14)(12, "button", 15)(13, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/demo/images/product/", product_r3.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("alt", product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("$", product_r3.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("product-badge status-" + product_r3.inventoryStatus.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r3.inventoryStatus);
  }
}
function MediaDemoComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 17);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r4.itemImageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function MediaDemoComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r5.thumbnailImageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
const _c0 = () => ({
  "max-width": "800px",
  "margin": "auto"
});
let MediaDemoComponent = /*#__PURE__*/(() => {
  class MediaDemoComponent {
    constructor(productService, photoService) {
      this.productService = productService;
      this.photoService = photoService;
      this.galleriaResponsiveOptions = [{
        breakpoint: '1024px',
        numVisible: 5
      }, {
        breakpoint: '960px',
        numVisible: 4
      }, {
        breakpoint: '768px',
        numVisible: 3
      }, {
        breakpoint: '560px',
        numVisible: 1
      }];
      this.carouselResponsiveOptions = [{
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      }, {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      }, {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }];
    }
    ngOnInit() {
      this.productService.getProductsSmall().then(products => {
        this.products = products;
      });
      this.photoService.getImages().then(images => {
        this.images = images;
      });
    }
    static #_ = this.ɵfac = function MediaDemoComponent_Factory(t) {
      return new (t || MediaDemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_demo_service_photo_service__WEBPACK_IMPORTED_MODULE_1__.PhotoService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MediaDemoComponent,
      selectors: [["ng-component"]],
      decls: 20,
      vars: 12,
      consts: [[1, "grid", "p-fluid"], [1, "col-12"], [1, "card"], [3, "value", "numVisible", "numScroll", "circular", "responsiveOptions"], ["pTemplate", "item"], [1, "flex", "justify-content-center"], ["src", "assets/demo/images/galleria/galleria10.jpg", "alt", "Image", "width", "250", 3, "preview"], [3, "value", "responsiveOptions", "containerStyle", "numVisible", "circular"], ["pTemplate", "thumbnail"], [1, "border-round", "m-2", "text-center", "p-2", 2, "border", "1px solid var(--surface-d)"], [1, "my-5"], ["width", "50%", 1, "shadow-4", 3, "src", "alt"], [1, "mb-1"], [1, "mt-0", "mb-3"], ["pButton", "", "pRipple", "", "icon", "pi pi-search", 1, "mr-2", "p-button-rounded"], ["pButton", "", "pRipple", "", "icon", "pi pi-star-fill", 1, "mr-2", "p-button-rounded", "p-button-success"], ["pButton", "", "pRipple", "", "icon", "pi pi-cog", 1, "p-button-rounded", "p-button-info"], [2, "width", "100%", "display", "block", 3, "src"], [1, "grid", "nogutter", "justify-center"], [2, "display", "block", 3, "src"]],
      template: function MediaDemoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Carousel");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p-carousel", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MediaDemoComponent_ng_template_6_Template, 14, 7, "ng-template", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 1)(8, "div", 2)(9, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "p-image", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 1)(14, "div", 2)(15, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Galleria");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p-galleria", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, MediaDemoComponent_ng_template_18_Template, 1, 1, "ng-template", 4)(19, MediaDemoComponent_ng_template_19_Template, 2, 1, "ng-template", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.products)("numVisible", 3)("numScroll", 3)("circular", false)("responsiveOptions", ctx.carouselResponsiveOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("preview", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.images)("responsiveOptions", ctx.galleriaResponsiveOptions)("containerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c0))("numVisible", 6)("circular", true);
        }
      },
      dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_image__WEBPACK_IMPORTED_MODULE_5__.Image, primeng_galleria__WEBPACK_IMPORTED_MODULE_6__.Galleria, primeng_carousel__WEBPACK_IMPORTED_MODULE_7__.Carousel],
      encapsulation: 2
    });
  }
  return MediaDemoComponent;
})();

/***/ }),

/***/ 83499:
/*!*****************************************************************!*\
  !*** ./src/app/demo/components/uikit/media/mediademo.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaDemoModule: () => (/* binding */ MediaDemoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _mediademo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mediademo.component */ 54544);
/* harmony import */ var _mediademo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mediademo-routing.module */ 31771);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/image */ 25274);
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/galleria */ 32795);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/carousel */ 43658);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);








let MediaDemoModule = /*#__PURE__*/(() => {
  class MediaDemoModule {
    static #_ = this.ɵfac = function MediaDemoModule_Factory(t) {
      return new (t || MediaDemoModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: MediaDemoModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _mediademo_routing_module__WEBPACK_IMPORTED_MODULE_1__.MediaDemoRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_image__WEBPACK_IMPORTED_MODULE_5__.ImageModule, primeng_galleria__WEBPACK_IMPORTED_MODULE_6__.GalleriaModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_7__.CarouselModule]
    });
  }
  return MediaDemoModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MediaDemoModule, {
    declarations: [_mediademo_component__WEBPACK_IMPORTED_MODULE_0__.MediaDemoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _mediademo_routing_module__WEBPACK_IMPORTED_MODULE_1__.MediaDemoRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_image__WEBPACK_IMPORTED_MODULE_5__.ImageModule, primeng_galleria__WEBPACK_IMPORTED_MODULE_6__.GalleriaModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_7__.CarouselModule]
  });
})();

/***/ }),

/***/ 43658:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-carousel.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Carousel: () => (/* binding */ Carousel),
/* harmony export */   CarouselModule: () => (/* binding */ CarouselModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/chevrondown */ 76005);
/* harmony import */ var primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/chevronleft */ 42537);
/* harmony import */ var primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/chevronright */ 44562);
/* harmony import */ var primeng_icons_chevronup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/chevronup */ 35837);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 44480);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 2332);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 82076);















/**
 * Carousel is a content slider featuring various customization options.
 * @group Components
 */
const _c0 = ["itemsContainer"];
const _c1 = ["indicatorContent"];
function Carousel_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Carousel_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Carousel_div_1_ng_container_2_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate);
  }
}
function Carousel_button_4_ng_container_1_ChevronLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronLeftIcon", 17);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "carousel-prev-icon");
  }
}
function Carousel_button_4_ng_container_1_ChevronUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronUpIcon", 17);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "carousel-prev-icon");
  }
}
function Carousel_button_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_button_4_ng_container_1_ChevronLeftIcon_1_Template, 1, 1, "ChevronLeftIcon", 16)(2, Carousel_button_4_ng_container_1_ChevronUpIcon_2_Template, 1, 1, "ChevronUpIcon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.isVertical());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.isVertical());
  }
}
function Carousel_button_4_span_2_1_ng_template_0_Template(rf, ctx) {}
function Carousel_button_4_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Carousel_button_4_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Carousel_button_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_button_4_span_2_1_Template, 1, 0, null, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r11.previousIconTemplate);
  }
}
const _c2 = a1 => ({
  "p-carousel-prev p-link": true,
  "p-disabled": a1
});
function Carousel_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Carousel_button_4_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.navBackward($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_button_4_ng_container_1_Template, 3, 2, "ng-container", 14)(2, Carousel_button_4_span_2_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r1.isBackwardNavDisabled()))("disabled", ctx_r1.isBackwardNavDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.ariaPrevButtonLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.previousIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.previousIconTemplate);
  }
}
function Carousel_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c3 = (a1, a2, a3) => ({
  "p-carousel-item p-carousel-item-cloned": true,
  "p-carousel-item-active": a1,
  "p-carousel-item-start": a2,
  "p-carousel-item-end": a3
});
const _c4 = a0 => ({
  $implicit: a0
});
function Carousel_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_div_8_ng_container_1_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const index_r19 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c3, ctx_r3.totalShiftedItems * -1 === ctx_r3.value.length, 0 === index_r19, ctx_r3.clonedItemsForStarting.length - 1 === index_r19));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", !(ctx_r3.totalShiftedItems * -1 === ctx_r3.value.length))("aria-label", ctx_r3.ariaSlideNumber(index_r19))("aria-roledescription", ctx_r3.ariaSlideLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c4, item_r18));
  }
}
function Carousel_div_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c5 = (a1, a2, a3) => ({
  "p-carousel-item": true,
  "p-carousel-item-active": a1,
  "p-carousel-item-start": a2,
  "p-carousel-item-end": a3
});
function Carousel_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_div_9_ng_container_1_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const index_r22 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c5, ctx_r4.firstIndex() <= index_r22 && ctx_r4.lastIndex() >= index_r22, ctx_r4.firstIndex() === index_r22, ctx_r4.lastIndex() === index_r22));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", !(ctx_r4.totalShiftedItems * -1 === ctx_r4.value.length))("aria-label", ctx_r4.ariaSlideNumber(index_r22))("aria-roledescription", ctx_r4.ariaSlideLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c4, item_r21));
  }
}
function Carousel_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Carousel_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_div_10_ng_container_1_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const index_r25 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c3, ctx_r5.totalShiftedItems * -1 === ctx_r5.numVisible, 0 === index_r25, ctx_r5.clonedItemsForFinishing.length - 1 === index_r25));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c4, item_r24));
  }
}
function Carousel_button_11_ng_container_1_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronRightIcon", 17);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "carousel-prev-icon");
  }
}
function Carousel_button_11_ng_container_1_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon", 17);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "carousel-prev-icon");
  }
}
function Carousel_button_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_button_11_ng_container_1_ChevronRightIcon_1_Template, 1, 1, "ChevronRightIcon", 16)(2, Carousel_button_11_ng_container_1_ChevronDownIcon_2_Template, 1, 1, "ChevronDownIcon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r27.isVertical());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.isVertical());
  }
}
function Carousel_button_11_span_2_1_ng_template_0_Template(rf, ctx) {}
function Carousel_button_11_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Carousel_button_11_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Carousel_button_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_button_11_span_2_1_Template, 1, 0, null, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r28.nextIconTemplate);
  }
}
const _c6 = a1 => ({
  "p-carousel-next p-link": true,
  "p-disabled": a1
});
function Carousel_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Carousel_button_11_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r33.navForward($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_button_11_ng_container_1_Template, 3, 2, "ng-container", 14)(2, Carousel_button_11_span_2_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c6, ctx_r6.isForwardNavDisabled()))("disabled", ctx_r6.isForwardNavDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r6.ariaNextButtonLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.nextIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.nextIconTemplate);
  }
}
const _c7 = a1 => ({
  "p-carousel-indicator": true,
  "p-highlight": a1
});
function Carousel_ul_12_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2)(1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Carousel_ul_12_li_2_Template_button_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);
      const i_r38 = restoredCtx.index;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r39.onDotClick($event, i_r38));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r38 = ctx.index;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c7, ctx_r36._page === i_r38));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "indicator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r36.indicatorStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-link")("ngStyle", ctx_r36.indicatorStyle)("tabindex", ctx_r36._page === i_r38 ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r36.ariaPageLabel(i_r38 + 1))("aria-current", ctx_r36._page === i_r38 ? "page" : undefined);
  }
}
function Carousel_ul_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Carousel_ul_12_Template_ul_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r41.onIndicatorKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Carousel_ul_12_li_2_Template, 2, 11, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r7.indicatorsContentClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-carousel-indicators p-reset")("ngStyle", ctx_r7.indicatorsContentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.totalDotsArray());
  }
}
function Carousel_div_13_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Carousel_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Carousel_div_13_ng_container_2_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.footerTemplate);
  }
}
const _c8 = [[["p-header"]], [["p-footer"]]];
const _c9 = (a1, a2) => ({
  "p-carousel p-component": true,
  "p-carousel-vertical": a1,
  "p-carousel-horizontal": a2
});
const _c10 = a0 => ({
  height: a0
});
const _c11 = ["p-header", "p-footer"];
let Carousel = /*#__PURE__*/(() => {
  class Carousel {
    el;
    zone;
    cd;
    renderer;
    document;
    platformId;
    config;
    /**
     * Index of the first item.
     * @defaultValue 0
     * @group Props
     */
    get page() {
      return this._page;
    }
    set page(val) {
      if (this.isCreated && val !== this._page) {
        if (this.autoplayInterval) {
          this.stopAutoplay();
        }
        if (val > this._page && val <= this.totalDots() - 1) {
          this.step(-1, val);
        } else if (val < this._page) {
          this.step(1, val);
        }
      }
      this._page = val;
    }
    /**
     * Number of items per page.
     * @defaultValue 1
     * @group Props
     */
    get numVisible() {
      return this._numVisible;
    }
    set numVisible(val) {
      this._numVisible = val;
    }
    /**
     * Number of items to scroll.
     * @defaultValue 1
     * @group Props
     */
    get numScroll() {
      return this._numVisible;
    }
    set numScroll(val) {
      this._numScroll = val;
    }
    /**
     * An array of options for responsive design.
     * @see {CarouselResponsiveOptions}
     * @group Props
     */
    responsiveOptions;
    /**
     * Specifies the layout of the component.
     * @group Props
     */
    orientation = 'horizontal';
    /**
     * Height of the viewport in vertical layout.
     * @group Props
     */
    verticalViewPortHeight = '300px';
    /**
     * Style class of main content.
     * @group Props
     */
    contentClass = '';
    /**
     * Style class of the indicator items.
     * @group Props
     */
    indicatorsContentClass = '';
    /**
     * Inline style of the indicator items.
     * @group Props
     */
    indicatorsContentStyle;
    /**
     * Style class of the indicators.
     * @group Props
     */
    indicatorStyleClass = '';
    /**
     * Style of the indicators.
     * @group Props
     */
    indicatorStyle;
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
     * Defines if scrolling would be infinite.
     * @group Props
     */
    circular = false;
    /**
     * Whether to display indicator container.
     * @group Props
     */
    showIndicators = true;
    /**
     * Whether to display navigation buttons in container.
     * @group Props
     */
    showNavigators = true;
    /**
     * Time in milliseconds to scroll items automatically.
     * @group Props
     */
    autoplayInterval = 0;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Style class of the viewport container.
     * @group Props
     */
    styleClass;
    /**
     * Callback to invoke after scroll.
     * @param {CarouselPageEvent} event - Custom page event.
     * @group Emits
     */
    onPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    itemsContainer;
    indicatorContent;
    headerFacet;
    footerFacet;
    templates;
    _numVisible = 1;
    _numScroll = 1;
    _oldNumScroll = 0;
    prevState = {
      numScroll: 0,
      numVisible: 0,
      value: []
    };
    defaultNumScroll = 1;
    defaultNumVisible = 1;
    _page = 0;
    _value;
    carouselStyle;
    id;
    totalShiftedItems;
    isRemainingItemsAdded = false;
    animationTimeout;
    translateTimeout;
    remainingItems = 0;
    _items;
    startPos;
    documentResizeListener;
    clonedItemsForStarting;
    clonedItemsForFinishing;
    allowAutoplay;
    interval;
    isCreated;
    swipeThreshold = 20;
    itemTemplate;
    headerTemplate;
    footerTemplate;
    previousIconTemplate;
    nextIconTemplate;
    window;
    constructor(el, zone, cd, renderer, document, platformId, config) {
      this.el = el;
      this.zone = zone;
      this.cd = cd;
      this.renderer = renderer;
      this.document = document;
      this.platformId = platformId;
      this.config = config;
      this.totalShiftedItems = this.page * this.numScroll * -1;
      this.window = this.document.defaultView;
    }
    ngOnChanges(simpleChange) {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        if (simpleChange.value) {
          if (this.circular && this._value) {
            this.setCloneItems();
          }
        }
        if (this.isCreated) {
          if (simpleChange.numVisible) {
            if (this.responsiveOptions) {
              this.defaultNumVisible = this.numVisible;
            }
            if (this.isCircular()) {
              this.setCloneItems();
            }
            this.createStyle();
            this.calculatePosition();
          }
          if (simpleChange.numScroll) {
            if (this.responsiveOptions) {
              this.defaultNumScroll = this.numScroll;
            }
          }
        }
      }
      this.cd.markForCheck();
    }
    ngAfterContentInit() {
      this.id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        this.allowAutoplay = !!this.autoplayInterval;
        if (this.circular) {
          this.setCloneItems();
        }
        if (this.responsiveOptions) {
          this.defaultNumScroll = this._numScroll;
          this.defaultNumVisible = this._numVisible;
        }
        this.createStyle();
        this.calculatePosition();
        if (this.responsiveOptions) {
          this.bindDocumentListeners();
        }
      }
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'item':
            this.itemTemplate = item.template;
            break;
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'footer':
            this.footerTemplate = item.template;
            break;
          case 'previousicon':
            this.previousIconTemplate = item.template;
            break;
          case 'nexticon':
            this.nextIconTemplate = item.template;
            break;
          default:
            this.itemTemplate = item.template;
            break;
        }
      });
      this.cd.detectChanges();
    }
    ngAfterContentChecked() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        const isCircular = this.isCircular();
        let totalShiftedItems = this.totalShiftedItems;
        if (this.value && this.itemsContainer && (this.prevState.numScroll !== this._numScroll || this.prevState.numVisible !== this._numVisible || this.prevState.value.length !== this.value.length)) {
          if (this.autoplayInterval) {
            this.stopAutoplay(false);
          }
          this.remainingItems = (this.value.length - this._numVisible) % this._numScroll;
          let page = this._page;
          if (this.totalDots() !== 0 && page >= this.totalDots()) {
            page = this.totalDots() - 1;
            this._page = page;
            this.onPage.emit({
              page: this.page
            });
          }
          totalShiftedItems = page * this._numScroll * -1;
          if (isCircular) {
            totalShiftedItems -= this._numVisible;
          }
          if (page === this.totalDots() - 1 && this.remainingItems > 0) {
            totalShiftedItems += -1 * this.remainingItems + this._numScroll;
            this.isRemainingItemsAdded = true;
          } else {
            this.isRemainingItemsAdded = false;
          }
          if (totalShiftedItems !== this.totalShiftedItems) {
            this.totalShiftedItems = totalShiftedItems;
          }
          this._oldNumScroll = this._numScroll;
          this.prevState.numScroll = this._numScroll;
          this.prevState.numVisible = this._numVisible;
          this.prevState.value = [...this._value];
          if (this.totalDots() > 0 && this.itemsContainer.nativeElement) {
            this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
          }
          this.isCreated = true;
          if (this.autoplayInterval && this.isAutoplay()) {
            this.startAutoplay();
          }
        }
        if (isCircular) {
          if (this.page === 0) {
            totalShiftedItems = -1 * this._numVisible;
          } else if (totalShiftedItems === 0) {
            totalShiftedItems = -1 * this.value.length;
            if (this.remainingItems > 0) {
              this.isRemainingItemsAdded = true;
            }
          }
          if (totalShiftedItems !== this.totalShiftedItems) {
            this.totalShiftedItems = totalShiftedItems;
          }
        }
      }
    }
    createStyle() {
      if (!this.carouselStyle) {
        this.carouselStyle = this.renderer.createElement('style');
        this.carouselStyle.type = 'text/css';
        this.renderer.appendChild(this.document.head, this.carouselStyle);
      }
      let innerHTML = `
            #${this.id} .p-carousel-item {
				flex: 1 0 ${100 / this.numVisible}%
			}
        `;
      if (this.responsiveOptions) {
        this.responsiveOptions.sort((data1, data2) => {
          const value1 = data1.breakpoint;
          const value2 = data2.breakpoint;
          let result = null;
          if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
            numeric: true
          });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
          return -1 * result;
        });
        for (let i = 0; i < this.responsiveOptions.length; i++) {
          let res = this.responsiveOptions[i];
          innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${100 / res.numVisible}%
                        }
                    }
                `;
        }
      }
      this.carouselStyle.innerHTML = innerHTML;
    }
    calculatePosition() {
      if (this.responsiveOptions) {
        let matchedResponsiveData = {
          numVisible: this.defaultNumVisible,
          numScroll: this.defaultNumScroll
        };
        if (typeof window !== 'undefined') {
          let windowWidth = window.innerWidth;
          for (let i = 0; i < this.responsiveOptions.length; i++) {
            let res = this.responsiveOptions[i];
            if (parseInt(res.breakpoint, 10) >= windowWidth) {
              matchedResponsiveData = res;
            }
          }
        }
        if (this._numScroll !== matchedResponsiveData.numScroll) {
          let page = this._page;
          page = Math.floor(page * this._numScroll / matchedResponsiveData.numScroll);
          let totalShiftedItems = matchedResponsiveData.numScroll * this.page * -1;
          if (this.isCircular()) {
            totalShiftedItems -= matchedResponsiveData.numVisible;
          }
          this.totalShiftedItems = totalShiftedItems;
          this._numScroll = matchedResponsiveData.numScroll;
          this._page = page;
          this.onPage.emit({
            page: this.page
          });
        }
        if (this._numVisible !== matchedResponsiveData.numVisible) {
          this._numVisible = matchedResponsiveData.numVisible;
          this.setCloneItems();
        }
        this.cd.markForCheck();
      }
    }
    setCloneItems() {
      this.clonedItemsForStarting = [];
      this.clonedItemsForFinishing = [];
      if (this.isCircular()) {
        this.clonedItemsForStarting.push(...this.value.slice(-1 * this._numVisible));
        this.clonedItemsForFinishing.push(...this.value.slice(0, this._numVisible));
      }
    }
    firstIndex() {
      return this.isCircular() ? -1 * (this.totalShiftedItems + this.numVisible) : this.totalShiftedItems * -1;
    }
    lastIndex() {
      return this.firstIndex() + this.numVisible - 1;
    }
    totalDots() {
      return this.value?.length ? Math.ceil((this.value.length - this._numVisible) / this._numScroll) + 1 : 0;
    }
    totalDotsArray() {
      const totalDots = this.totalDots();
      return totalDots <= 0 ? [] : Array(totalDots).fill(0);
    }
    isVertical() {
      return this.orientation === 'vertical';
    }
    isCircular() {
      return this.circular && this.value && this.value.length >= this.numVisible;
    }
    isAutoplay() {
      return this.autoplayInterval && this.allowAutoplay;
    }
    isForwardNavDisabled() {
      return this.isEmpty() || this._page >= this.totalDots() - 1 && !this.isCircular();
    }
    isBackwardNavDisabled() {
      return this.isEmpty() || this._page <= 0 && !this.isCircular();
    }
    isEmpty() {
      return !this.value || this.value.length === 0;
    }
    navForward(e, index) {
      if (this.isCircular() || this._page < this.totalDots() - 1) {
        this.step(-1, index);
      }
      if (this.autoplayInterval) {
        this.stopAutoplay();
      }
      if (e && e.cancelable) {
        e.preventDefault();
      }
    }
    navBackward(e, index) {
      if (this.isCircular() || this._page !== 0) {
        this.step(1, index);
      }
      if (this.autoplayInterval) {
        this.stopAutoplay();
      }
      if (e && e.cancelable) {
        e.preventDefault();
      }
    }
    onDotClick(e, index) {
      let page = this._page;
      if (this.autoplayInterval) {
        this.stopAutoplay();
      }
      if (index > page) {
        this.navForward(e, index);
      } else if (index < page) {
        this.navBackward(e, index);
      }
    }
    onIndicatorKeydown(event) {
      switch (event.code) {
        case 'ArrowRight':
          this.onRightKey();
          break;
        case 'ArrowLeft':
          this.onLeftKey();
          break;
      }
    }
    onRightKey() {
      const indicators = [...primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]')];
      const activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, activeIndex + 1 === indicators.length ? indicators.length - 1 : activeIndex + 1);
    }
    onLeftKey() {
      const activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, activeIndex - 1 <= 0 ? 0 : activeIndex - 1);
    }
    onHomeKey() {
      const activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, 0);
    }
    onEndKey() {
      const indicators = [...primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]r')];
      const activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, indicators.length - 1);
    }
    onTabKey() {
      const indicators = [...primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]')];
      const highlightedIndex = indicators.findIndex(ind => primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getAttribute(ind, 'data-p-highlight') === true);
      const activeIndicator = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.indicatorContent.nativeElement, '[data-pc-section="indicator"] > button[tabindex="0"]');
      const activeIndex = indicators.findIndex(ind => ind === activeIndicator.parentElement);
      indicators[activeIndex].children[0].tabIndex = '-1';
      indicators[highlightedIndex].children[0].tabIndex = '0';
    }
    findFocusedIndicatorIndex() {
      const indicators = [...primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]')];
      const activeIndicator = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.indicatorContent.nativeElement, '[data-pc-section="indicator"] > button[tabindex="0"]');
      return indicators.findIndex(ind => ind === activeIndicator.parentElement);
    }
    changedFocusedIndicator(prevInd, nextInd) {
      const indicators = [...primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.find(this.indicatorContent.nativeElement, '[data-pc-section="indicator"]')];
      indicators[prevInd].children[0].tabIndex = '-1';
      indicators[nextInd].children[0].tabIndex = '0';
      indicators[nextInd].children[0].focus();
    }
    step(dir, page) {
      let totalShiftedItems = this.totalShiftedItems;
      const isCircular = this.isCircular();
      if (page != null) {
        totalShiftedItems = this._numScroll * page * -1;
        if (isCircular) {
          totalShiftedItems -= this._numVisible;
        }
        this.isRemainingItemsAdded = false;
      } else {
        totalShiftedItems += this._numScroll * dir;
        if (this.isRemainingItemsAdded) {
          totalShiftedItems += this.remainingItems - this._numScroll * dir;
          this.isRemainingItemsAdded = false;
        }
        let originalShiftedItems = isCircular ? totalShiftedItems + this._numVisible : totalShiftedItems;
        page = Math.abs(Math.floor(originalShiftedItems / this._numScroll));
      }
      if (isCircular && this.page === this.totalDots() - 1 && dir === -1) {
        totalShiftedItems = -1 * (this.value.length + this._numVisible);
        page = 0;
      } else if (isCircular && this.page === 0 && dir === 1) {
        totalShiftedItems = 0;
        page = this.totalDots() - 1;
      } else if (page === this.totalDots() - 1 && this.remainingItems > 0) {
        totalShiftedItems += this.remainingItems * -1 - this._numScroll * dir;
        this.isRemainingItemsAdded = true;
      }
      if (this.itemsContainer) {
        this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
        this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
      }
      this.totalShiftedItems = totalShiftedItems;
      this._page = page;
      this.onPage.emit({
        page: this.page
      });
      this.cd.markForCheck();
    }
    startAutoplay() {
      this.interval = setInterval(() => {
        if (this.totalDots() > 0) {
          if (this.page === this.totalDots() - 1) {
            this.step(-1, 0);
          } else {
            this.step(-1, this.page + 1);
          }
        }
      }, this.autoplayInterval);
      this.allowAutoplay = true;
      this.cd.markForCheck();
    }
    stopAutoplay(changeAllow = true) {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = undefined;
        if (changeAllow) {
          this.allowAutoplay = false;
        }
      }
      this.cd.markForCheck();
    }
    isPlaying() {
      return !!this.interval;
    }
    onTransitionEnd() {
      if (this.itemsContainer) {
        this.itemsContainer.nativeElement.style.transition = '';
        if ((this.page === 0 || this.page === this.totalDots() - 1) && this.isCircular()) {
          this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${this.totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${this.totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
        }
      }
    }
    onTouchStart(e) {
      let touchobj = e.changedTouches[0];
      this.startPos = {
        x: touchobj.pageX,
        y: touchobj.pageY
      };
    }
    onTouchMove(e) {
      if (e.cancelable) {
        e.preventDefault();
      }
    }
    onTouchEnd(e) {
      let touchobj = e.changedTouches[0];
      if (this.isVertical()) {
        this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
      } else {
        this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
      }
    }
    changePageOnTouch(e, diff) {
      if (Math.abs(diff) > this.swipeThreshold) {
        if (diff < 0) {
          this.navForward(e);
        } else {
          this.navBackward(e);
        }
      }
    }
    ariaPrevButtonLabel() {
      return this.config.translation.aria ? this.config.translation.aria.prevPageLabel : undefined;
    }
    ariaSlideLabel() {
      return this.config.translation.aria ? this.config.translation.aria.slide : undefined;
    }
    ariaNextButtonLabel() {
      return this.config.translation.aria ? this.config.translation.aria.nextPageLabel : undefined;
    }
    ariaSlideNumber(value) {
      return this.config.translation.aria ? this.config.translation.aria.slideNumber.replace(/{slideNumber}/g, value) : undefined;
    }
    ariaPageLabel(value) {
      return this.config.translation.aria ? this.config.translation.aria.pageLabel.replace(/{page}/g, value) : undefined;
    }
    bindDocumentListeners() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        if (!this.documentResizeListener) {
          this.documentResizeListener = this.renderer.listen(this.window, 'resize', event => {
            this.calculatePosition();
          });
        }
      }
    }
    unbindDocumentListeners() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        if (this.documentResizeListener) {
          this.documentResizeListener();
          this.documentResizeListener = null;
        }
      }
    }
    ngOnDestroy() {
      if (this.responsiveOptions) {
        this.unbindDocumentListeners();
      }
      if (this.autoplayInterval) {
        this.stopAutoplay();
      }
    }
    static ɵfac = function Carousel_Factory(t) {
      return new (t || Carousel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Carousel,
      selectors: [["p-carousel"]],
      contentQueries: function Carousel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.Header, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.Footer, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Carousel_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemsContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.indicatorContent = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        page: "page",
        numVisible: "numVisible",
        numScroll: "numScroll",
        responsiveOptions: "responsiveOptions",
        orientation: "orientation",
        verticalViewPortHeight: "verticalViewPortHeight",
        contentClass: "contentClass",
        indicatorsContentClass: "indicatorsContentClass",
        indicatorsContentStyle: "indicatorsContentStyle",
        indicatorStyleClass: "indicatorStyleClass",
        indicatorStyle: "indicatorStyle",
        value: "value",
        circular: "circular",
        showIndicators: "showIndicators",
        showNavigators: "showNavigators",
        autoplayInterval: "autoplayInterval",
        style: "style",
        styleClass: "styleClass"
      },
      outputs: {
        onPage: "onPage"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c11,
      decls: 14,
      vars: 23,
      consts: [["role", "region", 3, "ngClass", "ngStyle"], ["class", "p-carousel-header", 4, "ngIf"], [3, "ngClass"], [1, "p-carousel-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "p-carousel-items-content", 3, "ngStyle"], [1, "p-carousel-items-container", 3, "transitionend", "touchend", "touchstart", "touchmove"], ["itemsContainer", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass", "class", "ngStyle", "keydown", 4, "ngIf"], ["class", "p-carousel-footer", 4, "ngIf"], [1, "p-carousel-header"], [4, "ngTemplateOutlet"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click"], [4, "ngIf"], ["class", "p-carousel-prev-icon", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-carousel-prev-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass", "ngStyle", "keydown"], ["indicatorContent", ""], ["type", "button", 3, "ngClass", "ngStyle", "tabindex", "click"], [1, "p-carousel-footer"]],
      template: function Carousel_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_div_1_Template, 3, 1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Carousel_button_4_Template, 3, 7, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "div", 6, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("transitionend", function Carousel_Template_div_transitionend_6_listener() {
            return ctx.onTransitionEnd();
          })("touchend", function Carousel_Template_div_touchend_6_listener($event) {
            return ctx.onTouchEnd($event);
          })("touchstart", function Carousel_Template_div_touchstart_6_listener($event) {
            return ctx.onTouchStart($event);
          })("touchmove", function Carousel_Template_div_touchmove_6_listener($event) {
            return ctx.onTouchMove($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Carousel_div_8_Template, 2, 12, "div", 8)(9, Carousel_div_9_Template, 2, 12, "div", 8)(10, Carousel_div_10_Template, 2, 9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, Carousel_button_11_Template, 3, 7, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, Carousel_ul_12_Template, 3, 5, "ul", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, Carousel_div_13_Template, 3, 1, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c9, ctx.isVertical(), !ctx.isVertical()))("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerFacet || ctx.headerTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.contentClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-carousel-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-live", ctx.allowAutoplay ? "polite" : "off");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNavigators);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c10, ctx.isVertical() ? ctx.verticalViewPortHeight : "auto"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clonedItemsForStarting);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clonedItemsForFinishing);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNavigators);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIndicators);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerFacet || ctx.footerTemplate);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_6__.ChevronRightIcon, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_7__.ChevronLeftIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon, primeng_icons_chevronup__WEBPACK_IMPORTED_MODULE_9__.ChevronUpIcon],
      styles: ["@layer primeng{.p-carousel{display:flex;flex-direction:column}.p-carousel-content{display:flex;flex-direction:column;overflow:auto}.p-carousel-prev,.p-carousel-next{align-self:center;flex-grow:0;flex-shrink:0;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-carousel-container{display:flex;flex-direction:row}.p-carousel-items-content{overflow:hidden;width:100%}.p-carousel-items-container{display:flex;flex-direction:row}.p-carousel-indicators{display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap}.p-carousel-indicator>button{display:flex;align-items:center;justify-content:center}.p-carousel-vertical .p-carousel-container{flex-direction:column}.p-carousel-vertical .p-carousel-items-container{flex-direction:column;height:100%}.p-items-hidden .p-carousel-item{visibility:hidden}.p-items-hidden .p-carousel-item.p-carousel-item-active{visibility:visible}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return Carousel;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CarouselModule = /*#__PURE__*/(() => {
  class CarouselModule {
    static ɵfac = function CarouselModule_Factory(t) {
      return new (t || CarouselModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CarouselModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_6__.ChevronRightIcon, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_7__.ChevronLeftIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_8__.ChevronDownIcon, primeng_icons_chevronup__WEBPACK_IMPORTED_MODULE_9__.ChevronUpIcon, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
    });
  }
  return CarouselModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-carousel.mjs.map

/***/ }),

/***/ 32795:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-galleria.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Galleria: () => (/* binding */ Galleria),
/* harmony export */   GalleriaContent: () => (/* binding */ GalleriaContent),
/* harmony export */   GalleriaItem: () => (/* binding */ GalleriaItem),
/* harmony export */   GalleriaItemSlot: () => (/* binding */ GalleriaItemSlot),
/* harmony export */   GalleriaModule: () => (/* binding */ GalleriaModule),
/* harmony export */   GalleriaThumbnails: () => (/* binding */ GalleriaThumbnails)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 86825);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dom */ 82076);
/* harmony import */ var primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/chevronleft */ 42537);
/* harmony import */ var primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/chevronright */ 44562);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/times */ 77778);
/* harmony import */ var primeng_icons_windowmaximize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/icons/windowmaximize */ 59212);
/* harmony import */ var primeng_icons_windowminimize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/icons/windowminimize */ 88377);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 44480);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 2332);
/* harmony import */ var primeng_focustrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/focustrap */ 5232);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 6593);




















/**
 * Galleria is an advanced content gallery component.
 * @group Components
 */
const _c0 = ["mask"];
const _c1 = ["container"];
const _c2 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
const _c3 = a1 => ({
  value: "visible",
  params: a1
});
function Galleria_div_0_div_2_p_galleriaContent_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-galleriaContent", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@animation.start", function Galleria_div_0_div_2_p_galleriaContent_2_Template_p_galleriaContent_animation_animation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onAnimationStart($event));
    })("@animation.done", function Galleria_div_0_div_2_p_galleriaContent_2_Template_p_galleriaContent_animation_animation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.onAnimationEnd($event));
    })("maskHide", function Galleria_div_0_div_2_p_galleriaContent_2_Template_p_galleriaContent_maskHide_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.onMaskHide());
    })("activeItemChange", function Galleria_div_0_div_2_p_galleriaContent_2_Template_p_galleriaContent_activeItemChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.onActiveItemChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c2, ctx_r6.showTransitionOptions, ctx_r6.hideTransitionOptions)))("value", ctx_r6.value)("activeIndex", ctx_r6.activeIndex)("numVisible", ctx_r6.numVisibleLimit || ctx_r6.numVisible)("ngStyle", ctx_r6.containerStyle);
  }
}
const _c4 = a1 => ({
  "p-galleria-mask p-component-overlay p-component-overlay-enter": true,
  "p-galleria-visible": a1
});
function Galleria_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Galleria_div_0_div_2_p_galleriaContent_2_Template, 1, 10, "p-galleriaContent", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r4.maskClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c4, ctx_r4.visible));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx_r4.fullScreen ? "dialog" : "region")("aria-modal", ctx_r4.fullScreen ? "true" : undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.visible);
  }
}
function Galleria_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Galleria_div_0_div_2_Template, 3, 8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.maskVisible);
  }
}
function Galleria_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-galleriaContent", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeItemChange", function Galleria_ng_template_1_Template_p_galleriaContent_activeItemChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.onActiveItemChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.value)("activeIndex", ctx_r1.activeIndex)("numVisible", ctx_r1.numVisibleLimit || ctx_r1.numVisible);
  }
}
const _c5 = ["closeButton"];
function GalleriaContent_div_0_button_1_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "TimesIcon", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-galleria-close-icon");
  }
}
function GalleriaContent_div_0_button_1_2_ng_template_0_Template(rf, ctx) {}
function GalleriaContent_div_0_button_1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleriaContent_div_0_button_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GalleriaContent_div_0_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaContent_div_0_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.maskHide.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaContent_div_0_button_1_TimesIcon_1_Template, 1, 1, "TimesIcon", 9)(2, GalleriaContent_div_0_button_1_2_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.closeAriaLabel())("data-pc-section", "closebutton");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.galleria.closeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.galleria.closeIconTemplate);
  }
}
function GalleriaContent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-galleriaItemSlot", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("templates", ctx_r2.galleria.templates);
  }
}
function GalleriaContent_div_0_p_galleriaThumbnails_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-galleriaThumbnails", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onActiveIndexChange", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_onActiveIndexChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.onActiveIndexChange($event));
    })("stopSlideShow", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_stopSlideShow_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.stopSlideShow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("containerId", ctx_r3.id)("value", ctx_r3.value)("activeIndex", ctx_r3.activeIndex)("templates", ctx_r3.galleria.templates)("numVisible", ctx_r3.numVisible)("responsiveOptions", ctx_r3.galleria.responsiveOptions)("circular", ctx_r3.galleria.circular)("isVertical", ctx_r3.isVertical())("contentHeight", ctx_r3.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators", ctx_r3.galleria.showThumbnailNavigators)("slideShowActive", ctx_r3.slideShowActive);
  }
}
function GalleriaContent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-galleriaItemSlot", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("templates", ctx_r4.galleria.templates);
  }
}
const _c6 = (a1, a2, a3) => ({
  "p-galleria p-component": true,
  "p-galleria-fullscreen": a1,
  "p-galleria-indicator-onitem": a2,
  "p-galleria-item-nav-onhover": a3
});
const _c7 = () => ({});
function GalleriaContent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaContent_div_0_button_1_Template, 3, 4, "button", 2)(2, GalleriaContent_div_0_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4)(4, "p-galleriaItem", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onActiveIndexChange", function GalleriaContent_div_0_Template_p_galleriaItem_onActiveIndexChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.onActiveIndexChange($event));
    })("startSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_startSlideShow_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.startSlideShow());
    })("stopSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_stopSlideShow_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.stopSlideShow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleriaContent_div_0_p_galleriaThumbnails_5_Template, 1, 11, "p-galleriaThumbnails", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GalleriaContent_div_0_div_6_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.galleriaClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](23, _c6, ctx_r0.galleria.fullScreen, ctx_r0.galleria.showIndicatorsOnItem, ctx_r0.galleria.showItemNavigatorsOnHover && !ctx_r0.galleria.fullScreen))("ngStyle", !ctx_r0.galleria.fullScreen ? ctx_r0.galleria.containerStyle : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r0.id)("role", "region");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.galleria.fullScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.galleria.templates && ctx_r0.galleria.headerFacet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-live", ctx_r0.galleria.autoPlay ? "polite" : "off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.id)("value", ctx_r0.value)("activeIndex", ctx_r0.activeIndex)("circular", ctx_r0.galleria.circular)("templates", ctx_r0.galleria.templates)("showIndicators", ctx_r0.galleria.showIndicators)("changeItemOnIndicatorHover", ctx_r0.galleria.changeItemOnIndicatorHover)("indicatorFacet", ctx_r0.galleria.indicatorFacet)("captionFacet", ctx_r0.galleria.captionFacet)("showItemNavigators", ctx_r0.galleria.showItemNavigators)("autoPlay", ctx_r0.galleria.autoPlay)("slideShowActive", ctx_r0.slideShowActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.galleria.showThumbnails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.galleria.templates && ctx_r0.galleria.footerFacet);
  }
}
function GalleriaItemSlot_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function GalleriaItemSlot_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaItemSlot_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", ctx_r0.context);
  }
}
function GalleriaItem_button_2_ChevronLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronLeftIcon", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-galleria-item-prev-icon");
  }
}
function GalleriaItem_button_2_2_ng_template_0_Template(rf, ctx) {}
function GalleriaItem_button_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleriaItem_button_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c8 = a1 => ({
  "p-galleria-item-prev p-galleria-item-nav p-link": true,
  "p-disabled": a1
});
function GalleriaItem_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaItem_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.navBackward($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaItem_button_2_ChevronLeftIcon_1_Template, 1, 1, "ChevronLeftIcon", 9)(2, GalleriaItem_button_2_2_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c8, ctx_r0.isNavBackwardDisabled()))("disabled", ctx_r0.isNavBackwardDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.galleria.itemPreviousIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.galleria.itemPreviousIconTemplate);
  }
}
function GalleriaItem_button_5_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronRightIcon", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-galleria-item-next-icon");
  }
}
function GalleriaItem_button_5_2_ng_template_0_Template(rf, ctx) {}
function GalleriaItem_button_5_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleriaItem_button_5_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c9 = a1 => ({
  "p-galleria-item-next p-galleria-item-nav p-link": true,
  "p-disabled": a1
});
function GalleriaItem_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaItem_button_5_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.navForward($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaItem_button_5_ChevronRightIcon_1_Template, 1, 1, "ChevronRightIcon", 9)(2, GalleriaItem_button_5_2_Template, 1, 0, null, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c9, ctx_r1.isNavForwardDisabled()))("disabled", ctx_r1.isNavForwardDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.galleria.itemNextIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.galleria.itemNextIconTemplate);
  }
}
function GalleriaItem_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-galleriaItemSlot", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx_r2.activeItem)("templates", ctx_r2.templates);
  }
}
function GalleriaItem_ul_7_li_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 20);
  }
}
const _c10 = a1 => ({
  "p-galleria-indicator": true,
  "p-highlight": a1
});
function GalleriaItem_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaItem_ul_7_li_1_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const index_r16 = restoredCtx.index;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.onIndicatorClick(index_r16));
    })("mouseenter", function GalleriaItem_ul_7_li_1_Template_li_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const index_r16 = restoredCtx.index;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r20.onIndicatorMouseEnter(index_r16));
    })("keydown", function GalleriaItem_ul_7_li_1_Template_li_keydown_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const index_r16 = restoredCtx.index;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.onIndicatorKeyDown($event, index_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaItem_ul_7_li_1_button_1_Template, 1, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-galleriaItemSlot", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const index_r16 = ctx.index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c10, ctx_r14.isIndicatorItemActive(index_r16)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r14.ariaPageLabel(index_r16 + 1))("aria-selected", ctx_r14.activeIndex === index_r16)("aria-controls", ctx_r14.id + "_item_" + index_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r14.indicatorFacet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", index_r16)("templates", ctx_r14.templates);
  }
}
function GalleriaItem_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaItem_ul_7_li_1_Template, 3, 9, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.value);
  }
}
const _c11 = ["itemsContainer"];
function GalleriaThumbnails_button_2_ng_container_1_ChevronLeftIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronLeftIcon", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-galleria-thumbnail-prev-icon");
  }
}
function GalleriaThumbnails_button_2_ng_container_1_ChevronUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronUpIcon", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-galleria-thumbnail-prev-icon");
  }
}
function GalleriaThumbnails_button_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaThumbnails_button_2_ng_container_1_ChevronLeftIcon_1_Template, 1, 1, "ChevronLeftIcon", 10)(2, GalleriaThumbnails_button_2_ng_container_1_ChevronUpIcon_2_Template, 1, 1, "ChevronUpIcon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isVertical);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isVertical);
  }
}
function GalleriaThumbnails_button_2_2_ng_template_0_Template(rf, ctx) {}
function GalleriaThumbnails_button_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleriaThumbnails_button_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c12 = a1 => ({
  "p-galleria-thumbnail-prev p-link": true,
  "p-disabled": a1
});
function GalleriaThumbnails_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaThumbnails_button_2_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.navBackward($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaThumbnails_button_2_ng_container_1_Template, 3, 2, "ng-container", 8)(2, GalleriaThumbnails_button_2_2_Template, 1, 0, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c12, ctx_r0.isNavBackwardDisabled()))("disabled", ctx_r0.isNavBackwardDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.ariaPrevButtonLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.galleria.previousThumbnailIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.galleria.previousThumbnailIconTemplate);
  }
}
const _c13 = (a1, a2, a3, a4) => ({
  "p-galleria-thumbnail-item": true,
  "p-galleria-thumbnail-item-current": a1,
  "p-galleria-thumbnail-item-active": a2,
  "p-galleria-thumbnail-item-start": a3,
  "p-galleria-thumbnail-item-end": a4
});
function GalleriaThumbnails_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function GalleriaThumbnails_div_6_Template_div_keydown_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const index_r12 = restoredCtx.index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.onThumbnailKeydown($event, index_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaThumbnails_div_6_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const index_r12 = restoredCtx.index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.onItemClick(index_r12));
    })("touchend", function GalleriaThumbnails_div_6_Template_div_touchend_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const index_r12 = restoredCtx.index;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.onItemClick(index_r12));
    })("keydown.enter", function GalleriaThumbnails_div_6_Template_div_keydown_enter_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const index_r12 = restoredCtx.index;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.onItemClick(index_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-galleriaItemSlot", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const index_r12 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](10, _c13, ctx_r2.activeIndex === index_r12, ctx_r2.isItemActive(index_r12), ctx_r2.firstItemAciveIndex() === index_r12, ctx_r2.lastItemActiveIndex() === index_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-selected", ctx_r2.activeIndex === index_r12)("aria-controls", ctx_r2.containerId + "_item_" + index_r12)("data-pc-section", "thumbnailitem")("data-p-active", ctx_r2.activeIndex === index_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r2.activeIndex === index_r12 ? 0 : -1)("aria-current", ctx_r2.activeIndex === index_r12 ? "page" : undefined)("aria-label", ctx_r2.ariaPageLabel(index_r12 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r11)("templates", ctx_r2.templates);
  }
}
function GalleriaThumbnails_button_7_ng_container_1_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronRightIcon", 16);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-galleria-thumbnail-next-icon");
  }
}
function GalleriaThumbnails_button_7_ng_container_1_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon", 16);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-galleria-thumbnail-next-icon");
  }
}
function GalleriaThumbnails_button_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaThumbnails_button_7_ng_container_1_ChevronRightIcon_1_Template, 1, 1, "ChevronRightIcon", 15)(2, GalleriaThumbnails_button_7_ng_container_1_ChevronDownIcon_2_Template, 1, 1, "ChevronDownIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r18.isVertical);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.isVertical);
  }
}
function GalleriaThumbnails_button_7_2_ng_template_0_Template(rf, ctx) {}
function GalleriaThumbnails_button_7_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleriaThumbnails_button_7_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c14 = a1 => ({
  "p-galleria-thumbnail-next p-link": true,
  "p-disabled": a1
});
function GalleriaThumbnails_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaThumbnails_button_7_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r23.navForward($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaThumbnails_button_7_ng_container_1_Template, 3, 2, "ng-container", 8)(2, GalleriaThumbnails_button_7_2_Template, 1, 0, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c14, ctx_r3.isNavForwardDisabled()))("disabled", ctx_r3.isNavForwardDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r3.ariaNextButtonLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.galleria.nextThumbnailIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.galleria.nextThumbnailIconTemplate);
  }
}
const _c15 = a0 => ({
  height: a0
});
let Galleria = /*#__PURE__*/(() => {
  class Galleria {
    document;
    platformId;
    element;
    cd;
    config;
    /**
     * Index of the first item.
     * @group Props
     */
    get activeIndex() {
      return this._activeIndex;
    }
    set activeIndex(activeIndex) {
      this._activeIndex = activeIndex;
    }
    /**
     * Whether to display the component on fullscreen.
     * @group Props
     */
    fullScreen = false;
    /**
     * Unique identifier of the element.
     * @group Props
     */
    id;
    /**
     * An array of objects to display.
     * @group Props
     */
    value;
    /**
     * Number of items per page.
     * @group Props
     */
    numVisible = 3;
    /**
     * An array of options for responsive design.
     * @see {GalleriaResponsiveOptions}
     * @group Props
     */
    responsiveOptions;
    /**
     * Whether to display navigation buttons in item section.
     * @group Props
     */
    showItemNavigators = false;
    /**
     * Whether to display navigation buttons in thumbnail container.
     * @group Props
     */
    showThumbnailNavigators = true;
    /**
     * Whether to display navigation buttons on item hover.
     * @group Props
     */
    showItemNavigatorsOnHover = false;
    /**
     * When enabled, item is changed on indicator hover.
     * @group Props
     */
    changeItemOnIndicatorHover = false;
    /**
     * Defines if scrolling would be infinite.
     * @group Props
     */
    circular = false;
    /**
     * Items are displayed with a slideshow in autoPlay mode.
     * @group Props
     */
    autoPlay = false;
    /**
     * When enabled, autorun should stop by click.
     * @group Props
     */
    shouldStopAutoplayByClick = true;
    /**
     * Time in milliseconds to scroll items.
     * @group Props
     */
    transitionInterval = 4000;
    /**
     * Whether to display thumbnail container.
     * @group Props
     */
    showThumbnails = true;
    /**
     * Position of thumbnails.
     * @group Props
     */
    thumbnailsPosition = 'bottom';
    /**
     * Height of the viewport in vertical thumbnail.
     * @group Props
     */
    verticalThumbnailViewPortHeight = '300px';
    /**
     * Whether to display indicator container.
     * @group Props
     */
    showIndicators = false;
    /**
     * When enabled, indicator container is displayed on item container.
     * @group Props
     */
    showIndicatorsOnItem = false;
    /**
     * Position of indicators.
     * @group Props
     */
    indicatorsPosition = 'bottom';
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    baseZIndex = 0;
    /**
     * Style class of the mask on fullscreen mode.
     * @group Props
     */
    maskClass;
    /**
     * Style class of the component on fullscreen mode. Otherwise, the 'class' property can be used.
     * @group Props
     */
    containerClass;
    /**
     * Inline style of the component on fullscreen mode. Otherwise, the 'style' property can be used.
     * @group Props
     */
    containerStyle;
    /**
     * Transition options of the show animation.
     * @group Props
     */
    showTransitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
    /**
     * Transition options of the hide animation.
     * @group Props
     */
    hideTransitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
    /**
     * Specifies the visibility of the mask on fullscreen mode.
     * @group Props
     */
    get visible() {
      return this._visible;
    }
    set visible(visible) {
      this._visible = visible;
      if (this._visible && !this.maskVisible) {
        this.maskVisible = true;
      }
    }
    /**
     * Callback to invoke on active index change.
     * @param {number} number - Active index.
     * @group Emits
     */
    activeIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on visiblity change.
     * @param {boolean} boolean - Visible value.
     * @group Emits
     */
    visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    mask;
    container;
    templates;
    _visible = false;
    _activeIndex = 0;
    headerFacet;
    footerFacet;
    indicatorFacet;
    captionFacet;
    closeIconTemplate;
    previousThumbnailIconTemplate;
    nextThumbnailIconTemplate;
    itemPreviousIconTemplate;
    itemNextIconTemplate;
    maskVisible = false;
    numVisibleLimit = 0;
    constructor(document, platformId, element, cd, config) {
      this.document = document;
      this.platformId = platformId;
      this.element = element;
      this.cd = cd;
      this.config = config;
    }
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'header':
            this.headerFacet = item.template;
            break;
          case 'footer':
            this.footerFacet = item.template;
            break;
          case 'indicator':
            this.indicatorFacet = item.template;
            break;
          case 'closeicon':
            this.closeIconTemplate = item.template;
            break;
          case 'itemnexticon':
            this.itemNextIconTemplate = item.template;
            break;
          case 'itempreviousicon':
            this.itemPreviousIconTemplate = item.template;
            break;
          case 'previousthumbnailicon':
            this.previousThumbnailIconTemplate = item.template;
            break;
          case 'nextthumbnailicon':
            this.nextThumbnailIconTemplate = item.template;
            break;
          case 'caption':
            this.captionFacet = item.template;
            break;
        }
      });
    }
    ngOnChanges(simpleChanges) {
      if (simpleChanges.value && simpleChanges.value.currentValue?.length < this.numVisible) {
        this.numVisibleLimit = simpleChanges.value.currentValue.length;
      } else {
        this.numVisibleLimit = 0;
      }
    }
    onMaskHide() {
      this.visible = false;
      this.visibleChange.emit(false);
    }
    onActiveItemChange(index) {
      if (this.activeIndex !== index) {
        this.activeIndex = index;
        this.activeIndexChange.emit(index);
      }
    }
    onAnimationStart(event) {
      switch (event.toState) {
        case 'visible':
          this.enableModality();
          setTimeout(() => {
            primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.focus(primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.findSingle(this.container.nativeElement, '[data-pc-section="closebutton"]'));
          }, 25);
          break;
        case 'void':
          primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.addClass(this.mask?.nativeElement, 'p-component-overlay-leave');
          break;
      }
    }
    onAnimationEnd(event) {
      switch (event.toState) {
        case 'void':
          this.disableModality();
          break;
      }
    }
    enableModality() {
      primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.blockBodyScroll();
      this.cd.markForCheck();
      if (this.mask) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('modal', this.mask.nativeElement, this.baseZIndex || this.config.zIndex.modal);
      }
    }
    disableModality() {
      primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.unblockBodyScroll();
      this.maskVisible = false;
      this.cd.markForCheck();
      if (this.mask) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.mask.nativeElement);
      }
    }
    ngOnDestroy() {
      if (this.fullScreen) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.removeClass(this.document.body, 'p-overflow-hidden');
      }
      if (this.mask) {
        this.disableModality();
      }
    }
    static ɵfac = function Galleria_Factory(t) {
      return new (t || Galleria)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Galleria,
      selectors: [["p-galleria"]],
      contentQueries: function Galleria_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Galleria_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mask = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        activeIndex: "activeIndex",
        fullScreen: "fullScreen",
        id: "id",
        value: "value",
        numVisible: "numVisible",
        responsiveOptions: "responsiveOptions",
        showItemNavigators: "showItemNavigators",
        showThumbnailNavigators: "showThumbnailNavigators",
        showItemNavigatorsOnHover: "showItemNavigatorsOnHover",
        changeItemOnIndicatorHover: "changeItemOnIndicatorHover",
        circular: "circular",
        autoPlay: "autoPlay",
        shouldStopAutoplayByClick: "shouldStopAutoplayByClick",
        transitionInterval: "transitionInterval",
        showThumbnails: "showThumbnails",
        thumbnailsPosition: "thumbnailsPosition",
        verticalThumbnailViewPortHeight: "verticalThumbnailViewPortHeight",
        showIndicators: "showIndicators",
        showIndicatorsOnItem: "showIndicatorsOnItem",
        indicatorsPosition: "indicatorsPosition",
        baseZIndex: "baseZIndex",
        maskClass: "maskClass",
        containerClass: "containerClass",
        containerStyle: "containerStyle",
        showTransitionOptions: "showTransitionOptions",
        hideTransitionOptions: "hideTransitionOptions",
        visible: "visible"
      },
      outputs: {
        activeIndexChange: "activeIndexChange",
        visibleChange: "visibleChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 3,
      vars: 2,
      consts: [[4, "ngIf", "ngIfElse"], ["windowed", ""], ["container", ""], [3, "ngClass", "class", 4, "ngIf"], [3, "ngClass"], ["mask", ""], [3, "value", "activeIndex", "numVisible", "ngStyle", "maskHide", "activeItemChange", 4, "ngIf"], [3, "value", "activeIndex", "numVisible", "ngStyle", "maskHide", "activeItemChange"], [3, "value", "activeIndex", "numVisible", "activeItemChange"]],
      template: function Galleria_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Galleria_div_0_Template, 3, 1, "div", 0)(1, Galleria_ng_template_1_Template, 1, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fullScreen)("ngIfElse", _r2);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, GalleriaContent],
      styles: ["@layer primeng{.p-galleria-content{display:flex;flex-direction:column}.p-galleria-item-wrapper{display:flex;flex-direction:column;position:relative}.p-galleria-item-container{position:relative;display:flex;height:100%}.p-galleria-item-nav{position:absolute;top:50%;margin-top:-.5rem;display:inline-flex;justify-content:center;align-items:center;overflow:hidden}.p-galleria-item-prev{left:0;border-top-left-radius:0;border-bottom-left-radius:0}.p-galleria-item-next{right:0;border-top-right-radius:0;border-bottom-right-radius:0}.p-galleria-item{display:flex;justify-content:center;align-items:center;height:100%;width:100%}.p-galleria-item-nav-onhover .p-galleria-item-nav{pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav{pointer-events:all;opacity:1}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled{pointer-events:none}.p-galleria-caption{position:absolute;bottom:0;left:0;width:100%}.p-galleria-thumbnail-wrapper{display:flex;flex-direction:column;overflow:auto;flex-shrink:0}.p-galleria-thumbnail-prev,.p-galleria-thumbnail-next{align-self:center;flex:0 0 auto;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-galleria-thumbnail-prev span,.p-galleria-thumbnail-next span{display:flex;justify-content:center;align-items:center}.p-galleria-thumbnail-container{display:flex;flex-direction:row}.p-galleria-thumbnail-items-container{overflow:hidden;width:100%}.p-galleria-thumbnail-items{display:flex}.p-galleria-thumbnail-item{overflow:auto;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:.5}.p-galleria-thumbnail-item:hover{opacity:1;transition:opacity .3s}.p-galleria-thumbnail-item-current{opacity:1}.p-galleria-thumbnails-left .p-galleria-content,.p-galleria-thumbnails-right .p-galleria-content,.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-right .p-galleria-item-wrapper{flex-direction:row}.p-galleria-thumbnails-left p-galleriaitem,.p-galleria-thumbnails-top p-galleriaitem{order:2}.p-galleria-thumbnails-left p-galleriathumbnails,.p-galleria-thumbnails-top p-galleriathumbnails{order:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-container,.p-galleria-thumbnails-right .p-galleria-thumbnail-container{flex-direction:column;flex-grow:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-items,.p-galleria-thumbnails-right .p-galleria-thumbnail-items{flex-direction:column;height:100%}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-right .p-galleria-thumbnail-wrapper{height:100%}.p-galleria-indicators{display:flex;align-items:center;justify-content:center}.p-galleria-indicator>button{display:inline-flex;align-items:center}.p-galleria-indicators-left .p-galleria-item-wrapper,.p-galleria-indicators-right .p-galleria-item-wrapper{flex-direction:row;align-items:center}.p-galleria-indicators-left .p-galleria-item-container,.p-galleria-indicators-top .p-galleria-item-container{order:2}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-top .p-galleria-indicators{order:1}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-right .p-galleria-indicators{flex-direction:column}.p-galleria-indicator-onitem .p-galleria-indicators{position:absolute;display:flex;z-index:1}.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators{top:0;left:0;width:100%;align-items:flex-start}.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators{right:0;top:0;height:100%;align-items:flex-end}.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators{bottom:0;left:0;width:100%;align-items:flex-end}.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators{left:0;top:0;height:100%;align-items:flex-start}.p-galleria-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:transparent;transition-property:background-color}.p-galleria-close{position:absolute;top:0;right:0;display:flex;justify-content:center;align-items:center;overflow:hidden}.p-galleria-mask .p-galleria-item-nav{position:fixed;top:50%;margin-top:-.5rem}.p-galleria-mask.p-galleria-mask-leave{background-color:transparent}.p-items-hidden .p-galleria-thumbnail-item{visibility:hidden}.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active{visibility:visible}}\n"],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
          transform: 'scale(0.7)',
          opacity: 0
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
          transform: 'scale(0.7)',
          opacity: 0
        }))])])]
      },
      changeDetection: 0
    });
  }
  return Galleria;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let GalleriaContent = /*#__PURE__*/(() => {
  class GalleriaContent {
    galleria;
    cd;
    differs;
    config;
    get activeIndex() {
      return this._activeIndex;
    }
    set activeIndex(activeIndex) {
      this._activeIndex = activeIndex;
    }
    value = [];
    numVisible;
    maskHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    activeItemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    closeButton;
    id;
    _activeIndex = 0;
    slideShowActive = true;
    interval;
    styleClass;
    differ;
    constructor(galleria, cd, differs, config) {
      this.galleria = galleria;
      this.cd = cd;
      this.differs = differs;
      this.config = config;
      this.id = this.galleria.id || (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
      this.differ = this.differs.find(this.galleria).create();
    }
    ngDoCheck() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.galleria.platformId)) {
        const changes = this.differ.diff(this.galleria);
        if (changes && changes.forEachItem.length > 0) {
          // Because we change the properties of the parent component,
          // and the children take our entity from the injector.
          // We can tell the children to redraw themselves when we change the properties of the parent component.
          // Since we have an onPush strategy
          this.cd.markForCheck();
        }
      }
    }
    galleriaClass() {
      const thumbnailsPosClass = this.galleria.showThumbnails && this.getPositionClass('p-galleria-thumbnails', this.galleria.thumbnailsPosition);
      const indicatorPosClass = this.galleria.showIndicators && this.getPositionClass('p-galleria-indicators', this.galleria.indicatorsPosition);
      return (this.galleria.containerClass ? this.galleria.containerClass + ' ' : '') + (thumbnailsPosClass ? thumbnailsPosClass + ' ' : '') + (indicatorPosClass ? indicatorPosClass + ' ' : '');
    }
    startSlideShow() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.galleria.platformId)) {
        this.interval = setInterval(() => {
          let activeIndex = this.galleria.circular && this.value.length - 1 === this.activeIndex ? 0 : this.activeIndex + 1;
          this.onActiveIndexChange(activeIndex);
          this.activeIndex = activeIndex;
        }, this.galleria.transitionInterval);
        this.slideShowActive = true;
      }
    }
    stopSlideShow() {
      if (this.galleria.autoPlay && !this.galleria.shouldStopAutoplayByClick) {
        return;
      }
      if (this.interval) {
        clearInterval(this.interval);
      }
      this.slideShowActive = false;
    }
    getPositionClass(preClassName, position) {
      const positions = ['top', 'left', 'bottom', 'right'];
      const pos = positions.find(item => item === position);
      return pos ? `${preClassName}-${pos}` : '';
    }
    isVertical() {
      return this.galleria.thumbnailsPosition === 'left' || this.galleria.thumbnailsPosition === 'right';
    }
    onActiveIndexChange(index) {
      if (this.activeIndex !== index) {
        this.activeIndex = index;
        this.activeItemChange.emit(this.activeIndex);
      }
    }
    closeAriaLabel() {
      return this.config.translation.aria ? this.config.translation.aria.close : undefined;
    }
    static ɵfac = function GalleriaContent_Factory(t) {
      return new (t || GalleriaContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Galleria), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GalleriaContent,
      selectors: [["p-galleriaContent"]],
      viewQuery: function GalleriaContent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.closeButton = _t.first);
        }
      },
      inputs: {
        activeIndex: "activeIndex",
        value: "value",
        numVisible: "numVisible"
      },
      outputs: {
        maskHide: "maskHide",
        activeItemChange: "activeItemChange"
      },
      decls: 1,
      vars: 1,
      consts: [["pFocusTrap", "", 3, "ngClass", "ngStyle", "class", 4, "ngIf"], ["pFocusTrap", "", 3, "ngClass", "ngStyle"], ["type", "button", "class", "p-galleria-close p-link", "pRipple", "", 3, "click", 4, "ngIf"], ["class", "p-galleria-header", 4, "ngIf"], [1, "p-galleria-content"], [3, "id", "value", "activeIndex", "circular", "templates", "showIndicators", "changeItemOnIndicatorHover", "indicatorFacet", "captionFacet", "showItemNavigators", "autoPlay", "slideShowActive", "onActiveIndexChange", "startSlideShow", "stopSlideShow"], [3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onActiveIndexChange", "stopSlideShow", 4, "ngIf"], ["class", "p-galleria-footer", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-galleria-close", "p-link", 3, "click"], [3, "styleClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass"], [1, "p-galleria-header"], ["type", "header", 3, "templates"], [3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onActiveIndexChange", "stopSlideShow"], [1, "p-galleria-footer"], ["type", "footer", 3, "templates"]],
      template: function GalleriaContent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleriaContent_div_0_Template, 7, 28, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value && ctx.value.length > 0);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_icons_times__WEBPACK_IMPORTED_MODULE_7__.TimesIcon, primeng_focustrap__WEBPACK_IMPORTED_MODULE_8__.FocusTrap, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return GalleriaContent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let GalleriaItemSlot = /*#__PURE__*/(() => {
  class GalleriaItemSlot {
    templates;
    index;
    get item() {
      return this._item;
    }
    set item(item) {
      this._item = item;
      if (this.templates) {
        this.templates.forEach(item => {
          if (item.getType() === this.type) {
            switch (this.type) {
              case 'item':
              case 'caption':
              case 'thumbnail':
                this.context = {
                  $implicit: this.item
                };
                this.contentTemplate = item.template;
                break;
            }
          }
        });
      }
    }
    type;
    contentTemplate;
    context;
    _item;
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        if (item.getType() === this.type) {
          switch (this.type) {
            case 'item':
            case 'caption':
            case 'thumbnail':
              this.context = {
                $implicit: this.item
              };
              this.contentTemplate = item.template;
              break;
            case 'indicator':
              this.context = {
                $implicit: this.index
              };
              this.contentTemplate = item.template;
              break;
            default:
              this.context = {};
              this.contentTemplate = item.template;
              break;
          }
        }
      });
    }
    static ɵfac = function GalleriaItemSlot_Factory(t) {
      return new (t || GalleriaItemSlot)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GalleriaItemSlot,
      selectors: [["p-galleriaItemSlot"]],
      inputs: {
        templates: "templates",
        index: "index",
        item: "item",
        type: "type"
      },
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function GalleriaItemSlot_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleriaItemSlot_ng_container_0_Template, 2, 2, "ng-container", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contentTemplate);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return GalleriaItemSlot;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let GalleriaItem = /*#__PURE__*/(() => {
  class GalleriaItem {
    galleria;
    id;
    circular = false;
    value;
    showItemNavigators = false;
    showIndicators = true;
    slideShowActive = true;
    changeItemOnIndicatorHover = true;
    autoPlay = false;
    templates;
    indicatorFacet;
    captionFacet;
    startSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    stopSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    onActiveIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    get activeIndex() {
      return this._activeIndex;
    }
    set activeIndex(activeIndex) {
      this._activeIndex = activeIndex;
    }
    get activeItem() {
      return this.value && this.value[this._activeIndex];
    }
    _activeIndex = 0;
    constructor(galleria) {
      this.galleria = galleria;
    }
    ngOnChanges({
      autoPlay
    }) {
      if (autoPlay?.currentValue) {
        this.startSlideShow.emit();
      }
      if (autoPlay && autoPlay.currentValue === false) {
        this.stopTheSlideShow();
      }
    }
    next() {
      let nextItemIndex = this.activeIndex + 1;
      let activeIndex = this.circular && this.value.length - 1 === this.activeIndex ? 0 : nextItemIndex;
      this.onActiveIndexChange.emit(activeIndex);
    }
    prev() {
      let prevItemIndex = this.activeIndex !== 0 ? this.activeIndex - 1 : 0;
      let activeIndex = this.circular && this.activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
      this.onActiveIndexChange.emit(activeIndex);
    }
    stopTheSlideShow() {
      if (this.slideShowActive && this.stopSlideShow) {
        this.stopSlideShow.emit();
      }
    }
    navForward(e) {
      this.stopTheSlideShow();
      this.next();
      if (e && e.cancelable) {
        e.preventDefault();
      }
    }
    navBackward(e) {
      this.stopTheSlideShow();
      this.prev();
      if (e && e.cancelable) {
        e.preventDefault();
      }
    }
    onIndicatorClick(index) {
      this.stopTheSlideShow();
      this.onActiveIndexChange.emit(index);
    }
    onIndicatorMouseEnter(index) {
      if (this.changeItemOnIndicatorHover) {
        this.stopTheSlideShow();
        this.onActiveIndexChange.emit(index);
      }
    }
    onIndicatorKeyDown(event, index) {
      switch (event.code) {
        case 'Enter':
        case 'Space':
          this.stopTheSlideShow();
          this.onActiveIndexChange.emit(index);
          event.preventDefault();
          break;
        case 'ArrowDown':
        case 'ArrowUp':
          event.preventDefault();
          break;
        default:
          break;
      }
    }
    isNavForwardDisabled() {
      return !this.circular && this.activeIndex === this.value.length - 1;
    }
    isNavBackwardDisabled() {
      return !this.circular && this.activeIndex === 0;
    }
    isIndicatorItemActive(index) {
      return this.activeIndex === index;
    }
    ariaSlideLabel() {
      return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.slide : undefined;
    }
    ariaSlideNumber(value) {
      return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.slideNumber.replace(/{slideNumber}/g, value) : undefined;
    }
    ariaPageLabel(value) {
      return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.pageLabel.replace(/{page}/g, value) : undefined;
    }
    static ɵfac = function GalleriaItem_Factory(t) {
      return new (t || GalleriaItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Galleria));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GalleriaItem,
      selectors: [["p-galleriaItem"]],
      inputs: {
        id: "id",
        circular: "circular",
        value: "value",
        showItemNavigators: "showItemNavigators",
        showIndicators: "showIndicators",
        slideShowActive: "slideShowActive",
        changeItemOnIndicatorHover: "changeItemOnIndicatorHover",
        autoPlay: "autoPlay",
        templates: "templates",
        indicatorFacet: "indicatorFacet",
        captionFacet: "captionFacet",
        activeIndex: "activeIndex"
      },
      outputs: {
        startSlideShow: "startSlideShow",
        stopSlideShow: "stopSlideShow",
        onActiveIndexChange: "onActiveIndexChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 8,
      vars: 11,
      consts: [[1, "p-galleria-item-wrapper"], [1, "p-galleria-item-container"], ["type", "button", "role", "navigation", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], ["role", "group", 3, "id"], ["type", "item", 1, "p-galleria-item", 3, "item", "templates"], ["type", "button", "pRipple", "", "role", "navigation", 3, "ngClass", "disabled", "click", 4, "ngIf"], ["class", "p-galleria-caption", 4, "ngIf"], ["class", "p-galleria-indicators p-reset", 4, "ngIf"], ["type", "button", "role", "navigation", "pRipple", "", 3, "ngClass", "disabled", "click"], [3, "styleClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass"], ["type", "button", "pRipple", "", "role", "navigation", 3, "ngClass", "disabled", "click"], [1, "p-galleria-caption"], ["type", "caption", 3, "item", "templates"], [1, "p-galleria-indicators", "p-reset"], ["tabindex", "0", 3, "ngClass", "click", "mouseenter", "keydown", 4, "ngFor", "ngForOf"], ["tabindex", "0", 3, "ngClass", "click", "mouseenter", "keydown"], ["type", "button", "tabIndex", "-1", "class", "p-link", 4, "ngIf"], ["type", "indicator", 3, "index", "templates"], ["type", "button", "tabIndex", "-1", 1, "p-link"]],
      template: function GalleriaItem_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleriaItem_button_2_Template, 3, 6, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p-galleriaItemSlot", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleriaItem_button_5_Template, 3, 6, "button", 5)(6, GalleriaItem_div_6_Template, 2, 2, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GalleriaItem_ul_7_Template, 2, 1, "ul", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showItemNavigators);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", "100%");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id + "_item_" + ctx.activeIndex);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.ariaSlideNumber(ctx.activeIndex + 1))("aria-roledescription", ctx.ariaSlideLabel());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.activeItem)("templates", ctx.templates);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showItemNavigators);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.captionFacet);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIndicators);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__.ChevronRightIcon, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_10__.ChevronLeftIcon, GalleriaItemSlot],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return GalleriaItem;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let GalleriaThumbnails = /*#__PURE__*/(() => {
  class GalleriaThumbnails {
    galleria;
    document;
    platformId;
    renderer;
    cd;
    containerId;
    value;
    isVertical = false;
    slideShowActive = false;
    circular = false;
    responsiveOptions;
    contentHeight = '300px';
    showThumbnailNavigators = true;
    templates;
    onActiveIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    stopSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    itemsContainer;
    get numVisible() {
      return this._numVisible;
    }
    set numVisible(numVisible) {
      this._numVisible = numVisible;
      this._oldNumVisible = this.d_numVisible;
      this.d_numVisible = numVisible;
    }
    get activeIndex() {
      return this._activeIndex;
    }
    set activeIndex(activeIndex) {
      this._oldactiveIndex = this._activeIndex;
      this._activeIndex = activeIndex;
    }
    index;
    startPos = null;
    thumbnailsStyle = null;
    sortedResponsiveOptions = null;
    totalShiftedItems = 0;
    page = 0;
    documentResizeListener;
    _numVisible = 0;
    d_numVisible = 0;
    _oldNumVisible = 0;
    _activeIndex = 0;
    _oldactiveIndex = 0;
    constructor(galleria, document, platformId, renderer, cd) {
      this.galleria = galleria;
      this.document = document;
      this.platformId = platformId;
      this.renderer = renderer;
      this.cd = cd;
    }
    ngOnInit() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
        this.createStyle();
        if (this.responsiveOptions) {
          this.bindDocumentListeners();
        }
      }
    }
    ngAfterContentChecked() {
      let totalShiftedItems = this.totalShiftedItems;
      if ((this._oldNumVisible !== this.d_numVisible || this._oldactiveIndex !== this._activeIndex) && this.itemsContainer) {
        if (this._activeIndex <= this.getMedianItemIndex()) {
          totalShiftedItems = 0;
        } else if (this.value.length - this.d_numVisible + this.getMedianItemIndex() < this._activeIndex) {
          totalShiftedItems = this.d_numVisible - this.value.length;
        } else if (this.value.length - this.d_numVisible < this._activeIndex && this.d_numVisible % 2 === 0) {
          totalShiftedItems = this._activeIndex * -1 + this.getMedianItemIndex() + 1;
        } else {
          totalShiftedItems = this._activeIndex * -1 + this.getMedianItemIndex();
        }
        if (totalShiftedItems !== this.totalShiftedItems) {
          this.totalShiftedItems = totalShiftedItems;
        }
        if (this.itemsContainer && this.itemsContainer.nativeElement) {
          this.itemsContainer.nativeElement.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
        }
        if (this._oldactiveIndex !== this._activeIndex) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.removeClass(this.itemsContainer.nativeElement, 'p-items-hidden');
          this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
        }
        this._oldactiveIndex = this._activeIndex;
        this._oldNumVisible = this.d_numVisible;
      }
    }
    ngAfterViewInit() {
      if ((0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.platformBrowser)(this.platformId)) {
        this.calculatePosition();
      }
    }
    createStyle() {
      if (!this.thumbnailsStyle) {
        this.thumbnailsStyle = this.document.createElement('style');
        this.document.body.appendChild(this.thumbnailsStyle);
      }
      let innerHTML = `
            #${this.containerId} .p-galleria-thumbnail-item {
                flex: 1 0 ${100 / this.d_numVisible}%
            }
        `;
      if (this.responsiveOptions) {
        this.sortedResponsiveOptions = [...this.responsiveOptions];
        this.sortedResponsiveOptions.sort((data1, data2) => {
          const value1 = data1.breakpoint;
          const value2 = data2.breakpoint;
          let result = null;
          if (value1 == null && value2 != null) result = -1;else if (value1 != null && value2 == null) result = 1;else if (value1 == null && value2 == null) result = 0;else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2, undefined, {
            numeric: true
          });else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
          return -1 * result;
        });
        for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
          let res = this.sortedResponsiveOptions[i];
          innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.containerId} .p-galleria-thumbnail-item {
                            flex: 1 0 ${100 / res.numVisible}%
                        }
                    }
                `;
        }
      }
      this.thumbnailsStyle.innerHTML = innerHTML;
    }
    calculatePosition() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
        if (this.itemsContainer && this.sortedResponsiveOptions) {
          let windowWidth = window.innerWidth;
          let matchedResponsiveData = {
            numVisible: this._numVisible
          };
          for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
            let res = this.sortedResponsiveOptions[i];
            if (parseInt(res.breakpoint, 10) >= windowWidth) {
              matchedResponsiveData = res;
            }
          }
          if (this.d_numVisible !== matchedResponsiveData.numVisible) {
            this.d_numVisible = matchedResponsiveData.numVisible;
            this.cd.markForCheck();
          }
        }
      }
    }
    getTabIndex(index) {
      return this.isItemActive(index) ? 0 : null;
    }
    navForward(e) {
      this.stopTheSlideShow();
      let nextItemIndex = this._activeIndex + 1;
      if (nextItemIndex + this.totalShiftedItems > this.getMedianItemIndex() && (-1 * this.totalShiftedItems < this.getTotalPageNumber() - 1 || this.circular)) {
        this.step(-1);
      }
      let activeIndex = this.circular && this.value.length - 1 === this._activeIndex ? 0 : nextItemIndex;
      this.onActiveIndexChange.emit(activeIndex);
      if (e.cancelable) {
        e.preventDefault();
      }
    }
    navBackward(e) {
      this.stopTheSlideShow();
      let prevItemIndex = this._activeIndex !== 0 ? this._activeIndex - 1 : 0;
      let diff = prevItemIndex + this.totalShiftedItems;
      if (this.d_numVisible - diff - 1 > this.getMedianItemIndex() && (-1 * this.totalShiftedItems !== 0 || this.circular)) {
        this.step(1);
      }
      let activeIndex = this.circular && this._activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
      this.onActiveIndexChange.emit(activeIndex);
      if (e.cancelable) {
        e.preventDefault();
      }
    }
    onItemClick(index) {
      this.stopTheSlideShow();
      let selectedItemIndex = index;
      if (selectedItemIndex !== this._activeIndex) {
        const diff = selectedItemIndex + this.totalShiftedItems;
        let dir = 0;
        if (selectedItemIndex < this._activeIndex) {
          dir = this.d_numVisible - diff - 1 - this.getMedianItemIndex();
          if (dir > 0 && -1 * this.totalShiftedItems !== 0) {
            this.step(dir);
          }
        } else {
          dir = this.getMedianItemIndex() - diff;
          if (dir < 0 && -1 * this.totalShiftedItems < this.getTotalPageNumber() - 1) {
            this.step(dir);
          }
        }
        this.activeIndex = selectedItemIndex;
        this.onActiveIndexChange.emit(this.activeIndex);
      }
    }
    onThumbnailKeydown(event, index) {
      if (event.code === 'Enter' || event.code === 'Space') {
        this.onItemClick(index);
        event.preventDefault();
      }
      switch (event.code) {
        case 'ArrowRight':
          this.onRightKey();
          break;
        case 'ArrowLeft':
          this.onLeftKey();
          break;
        case 'Home':
          this.onHomeKey();
          event.preventDefault();
          break;
        case 'End':
          this.onEndKey();
          event.preventDefault();
          break;
        case 'ArrowUp':
        case 'ArrowDown':
          event.preventDefault();
          break;
        case 'Tab':
          this.onTabKey();
          break;
        default:
          break;
      }
    }
    onRightKey() {
      const indicators = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.find(this.itemsContainer.nativeElement, '[data-pc-section="thumbnailitem"]');
      const activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, activeIndex + 1 === indicators.length ? indicators.length - 1 : activeIndex + 1);
    }
    onLeftKey() {
      const activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, activeIndex - 1 <= 0 ? 0 : activeIndex - 1);
    }
    onHomeKey() {
      const activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, 0);
    }
    onEndKey() {
      const indicators = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.find(this.itemsContainer.nativeElement, '[data-pc-section="thumbnailitem"]');
      const activeIndex = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex, indicators.length - 1);
    }
    onTabKey() {
      const indicators = [...primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.find(this.itemsContainer.nativeElement, '[data-pc-section="thumbnailitem"]')];
      const highlightedIndex = indicators.findIndex(ind => primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getAttribute(ind, 'data-p-active') === true);
      const activeIndicator = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.findSingle(this.itemsContainer.nativeElement, '[tabindex="0"]');
      const activeIndex = indicators.findIndex(ind => ind === activeIndicator.parentElement);
      indicators[activeIndex].children[0].tabIndex = '-1';
      indicators[highlightedIndex].children[0].tabIndex = '0';
    }
    findFocusedIndicatorIndex() {
      const indicators = [...primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.find(this.itemsContainer.nativeElement, '[data-pc-section="thumbnailitem"]')];
      const activeIndicator = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.findSingle(this.itemsContainer.nativeElement, '[data-pc-section="thumbnailitem"] > [tabindex="0"]');
      return indicators.findIndex(ind => ind === activeIndicator.parentElement);
    }
    changedFocusedIndicator(prevInd, nextInd) {
      const indicators = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.find(this.itemsContainer.nativeElement, '[data-pc-section="thumbnailitem"]');
      indicators[prevInd].children[0].tabIndex = '-1';
      indicators[nextInd].children[0].tabIndex = '0';
      indicators[nextInd].children[0].focus();
    }
    step(dir) {
      let totalShiftedItems = this.totalShiftedItems + dir;
      if (dir < 0 && -1 * totalShiftedItems + this.d_numVisible > this.value.length - 1) {
        totalShiftedItems = this.d_numVisible - this.value.length;
      } else if (dir > 0 && totalShiftedItems > 0) {
        totalShiftedItems = 0;
      }
      if (this.circular) {
        if (dir < 0 && this.value.length - 1 === this._activeIndex) {
          totalShiftedItems = 0;
        } else if (dir > 0 && this._activeIndex === 0) {
          totalShiftedItems = this.d_numVisible - this.value.length;
        }
      }
      if (this.itemsContainer) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.removeClass(this.itemsContainer.nativeElement, 'p-items-hidden');
        this.itemsContainer.nativeElement.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
        this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
      }
      this.totalShiftedItems = totalShiftedItems;
    }
    stopTheSlideShow() {
      if (this.slideShowActive && this.stopSlideShow) {
        this.stopSlideShow.emit();
      }
    }
    changePageOnTouch(e, diff) {
      if (diff < 0) {
        // left
        this.navForward(e);
      } else {
        // right
        this.navBackward(e);
      }
    }
    getTotalPageNumber() {
      return this.value.length > this.d_numVisible ? this.value.length - this.d_numVisible + 1 : 0;
    }
    getMedianItemIndex() {
      let index = Math.floor(this.d_numVisible / 2);
      return this.d_numVisible % 2 ? index : index - 1;
    }
    onTransitionEnd() {
      if (this.itemsContainer && this.itemsContainer.nativeElement) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.addClass(this.itemsContainer.nativeElement, 'p-items-hidden');
        this.itemsContainer.nativeElement.style.transition = '';
      }
    }
    onTouchEnd(e) {
      let touchobj = e.changedTouches[0];
      if (this.isVertical) {
        this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
      } else {
        this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
      }
    }
    onTouchMove(e) {
      if (e.cancelable) {
        e.preventDefault();
      }
    }
    onTouchStart(e) {
      let touchobj = e.changedTouches[0];
      this.startPos = {
        x: touchobj.pageX,
        y: touchobj.pageY
      };
    }
    isNavBackwardDisabled() {
      return !this.circular && this._activeIndex === 0 || this.value.length <= this.d_numVisible;
    }
    isNavForwardDisabled() {
      return !this.circular && this._activeIndex === this.value.length - 1 || this.value.length <= this.d_numVisible;
    }
    firstItemAciveIndex() {
      return this.totalShiftedItems * -1;
    }
    lastItemActiveIndex() {
      return this.firstItemAciveIndex() + this.d_numVisible - 1;
    }
    isItemActive(index) {
      return this.firstItemAciveIndex() <= index && this.lastItemActiveIndex() >= index;
    }
    bindDocumentListeners() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
        const window = this.document.defaultView || 'window';
        this.documentResizeListener = this.renderer.listen(window, 'resize', () => {
          this.calculatePosition();
        });
      }
    }
    unbindDocumentListeners() {
      if (this.documentResizeListener) {
        this.documentResizeListener();
        this.documentResizeListener = null;
      }
    }
    ngOnDestroy() {
      if (this.responsiveOptions) {
        this.unbindDocumentListeners();
      }
      if (this.thumbnailsStyle) {
        this.thumbnailsStyle.parentNode?.removeChild(this.thumbnailsStyle);
      }
    }
    ariaPrevButtonLabel() {
      return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.prevPageLabel : undefined;
    }
    ariaNextButtonLabel() {
      return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.nextPageLabel : undefined;
    }
    ariaPageLabel(value) {
      return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.pageLabel.replace(/{page}/g, value) : undefined;
    }
    static ɵfac = function GalleriaThumbnails_Factory(t) {
      return new (t || GalleriaThumbnails)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Galleria), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GalleriaThumbnails,
      selectors: [["p-galleriaThumbnails"]],
      viewQuery: function GalleriaThumbnails_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c11, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemsContainer = _t.first);
        }
      },
      inputs: {
        containerId: "containerId",
        value: "value",
        isVertical: "isVertical",
        slideShowActive: "slideShowActive",
        circular: "circular",
        responsiveOptions: "responsiveOptions",
        contentHeight: "contentHeight",
        showThumbnailNavigators: "showThumbnailNavigators",
        templates: "templates",
        numVisible: "numVisible",
        activeIndex: "activeIndex"
      },
      outputs: {
        onActiveIndexChange: "onActiveIndexChange",
        stopSlideShow: "stopSlideShow"
      },
      decls: 8,
      vars: 6,
      consts: [[1, "p-galleria-thumbnail-wrapper"], [1, "p-galleria-thumbnail-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "p-galleria-thumbnail-items-container", 3, "ngStyle"], ["role", "tablist", 1, "p-galleria-thumbnail-items", 3, "transitionend", "touchstart", "touchmove"], ["itemsContainer", ""], [3, "ngClass", "keydown", 4, "ngFor", "ngForOf"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click"], [4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [3, "ngClass", "keydown"], [1, "p-galleria-thumbnail-item-content", 3, "click", "touchend", "keydown.enter"], ["type", "thumbnail", 3, "item", "templates"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"]],
      template: function GalleriaThumbnails_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleriaThumbnails_button_2_Template, 3, 7, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("transitionend", function GalleriaThumbnails_Template_div_transitionend_4_listener() {
            return ctx.onTransitionEnd();
          })("touchstart", function GalleriaThumbnails_Template_div_touchstart_4_listener($event) {
            return ctx.onTouchStart($event);
          })("touchmove", function GalleriaThumbnails_Template_div_touchmove_4_listener($event) {
            return ctx.onTouchMove($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GalleriaThumbnails_div_6_Template, 3, 15, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GalleriaThumbnails_button_7_Template, 3, 7, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showThumbnailNavigators);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c15, ctx.isVertical ? ctx.contentHeight : ""));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showThumbnailNavigators);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__.ChevronRightIcon, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_10__.ChevronLeftIcon, GalleriaItemSlot],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return GalleriaThumbnails;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let GalleriaModule = /*#__PURE__*/(() => {
  class GalleriaModule {
    static ɵfac = function GalleriaModule_Factory(t) {
      return new (t || GalleriaModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GalleriaModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_7__.TimesIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__.ChevronRightIcon, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_10__.ChevronLeftIcon, primeng_icons_windowmaximize__WEBPACK_IMPORTED_MODULE_12__.WindowMaximizeIcon, primeng_icons_windowminimize__WEBPACK_IMPORTED_MODULE_13__.WindowMinimizeIcon, primeng_focustrap__WEBPACK_IMPORTED_MODULE_8__.FocusTrapModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
    });
  }
  return GalleriaModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-galleria.mjs.map

/***/ }),

/***/ 6543:
/*!*****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-refresh.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RefreshIcon: () => (/* binding */ RefreshIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 84713);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 2332);




let RefreshIcon = /*#__PURE__*/(() => {
  class RefreshIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵRefreshIcon_BaseFactory;
      return function RefreshIcon_Factory(t) {
        return (ɵRefreshIcon_BaseFactory || (ɵRefreshIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](RefreshIcon)))(t || RefreshIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RefreshIcon,
      selectors: [["RefreshIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function RefreshIcon_Template(rf, ctx) {
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
  return RefreshIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-icons-refresh.mjs.map

/***/ }),

/***/ 61082:
/*!*********************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-searchminus.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchMinusIcon: () => (/* binding */ SearchMinusIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 84713);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 2332);




let SearchMinusIcon = /*#__PURE__*/(() => {
  class SearchMinusIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵSearchMinusIcon_BaseFactory;
      return function SearchMinusIcon_Factory(t) {
        return (ɵSearchMinusIcon_BaseFactory || (ɵSearchMinusIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](SearchMinusIcon)))(t || SearchMinusIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SearchMinusIcon,
      selectors: [["SearchMinusIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.0208 12.0411C4.83005 12.0411 3.66604 11.688 2.67596 11.0265C1.68589 10.3649 0.914216 9.42464 0.458534 8.32452C0.00285271 7.22441 -0.116374 6.01388 0.11593 4.84601C0.348235 3.67813 0.921637 2.60537 1.76363 1.76338C2.60562 0.921393 3.67838 0.34799 4.84625 0.115686C6.01412 -0.116618 7.22466 0.00260857 8.32477 0.45829C9.42488 0.913972 10.3652 1.68564 11.0267 2.67572C11.6883 3.66579 12.0414 4.8298 12.0414 6.02056C12.0395 7.41563 11.5542 8.76029 10.6783 9.8305L13.8244 12.9765C13.9367 13.089 13.9997 13.2414 13.9997 13.4003C13.9997 13.5592 13.9367 13.7116 13.8244 13.8241C13.769 13.8801 13.703 13.9245 13.6302 13.9548C13.5575 13.985 13.4794 14.0003 13.4006 14C13.3218 14.0003 13.2437 13.985 13.171 13.9548C13.0982 13.9245 13.0322 13.8801 12.9768 13.8241L9.83082 10.678C8.76059 11.5539 7.4159 12.0393 6.0208 12.0411ZM6.0208 1.20731C5.07199 1.20731 4.14449 1.48867 3.35559 2.0158C2.56669 2.54292 1.95181 3.29215 1.58872 4.16874C1.22562 5.04532 1.13062 6.00989 1.31572 6.94046C1.50083 7.87104 1.95772 8.72583 2.62863 9.39674C3.29954 10.0676 4.15433 10.5245 5.0849 10.7096C6.01548 10.8947 6.98005 10.7997 7.85663 10.4367C8.73322 10.0736 9.48244 9.45868 10.0096 8.66978C10.5367 7.88088 10.8181 6.95337 10.8181 6.00457C10.8181 4.73226 10.3126 3.51206 9.41297 2.6124C8.51331 1.71274 7.29311 1.20731 6.0208 1.20731ZM4.00591 6.60422H8.00362C8.16266 6.60422 8.31518 6.54104 8.42764 6.42859C8.5401 6.31613 8.60328 6.1636 8.60328 6.00456C8.60328 5.84553 8.5401 5.693 8.42764 5.58054C8.31518 5.46809 8.16266 5.40491 8.00362 5.40491H4.00591C3.84687 5.40491 3.69434 5.46809 3.58189 5.58054C3.46943 5.693 3.40625 5.84553 3.40625 6.00456C3.40625 6.1636 3.46943 6.31613 3.58189 6.42859C3.69434 6.54104 3.84687 6.60422 4.00591 6.60422Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function SearchMinusIcon_Template(rf, ctx) {
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
  return SearchMinusIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-icons-searchminus.mjs.map

/***/ }),

/***/ 17947:
/*!********************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-searchplus.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchPlusIcon: () => (/* binding */ SearchPlusIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 84713);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 2332);




let SearchPlusIcon = /*#__PURE__*/(() => {
  class SearchPlusIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵSearchPlusIcon_BaseFactory;
      return function SearchPlusIcon_Factory(t) {
        return (ɵSearchPlusIcon_BaseFactory || (ɵSearchPlusIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](SearchPlusIcon)))(t || SearchPlusIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SearchPlusIcon,
      selectors: [["SearchPlusIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M2.67596 11.0265C3.66604 11.688 4.83005 12.0411 6.0208 12.0411C6.81143 12.0411 7.59432 11.8854 8.32477 11.5828C8.86999 11.357 9.37802 11.0526 9.83311 10.6803L12.9768 13.8241C13.0322 13.8801 13.0982 13.9245 13.171 13.9548C13.2437 13.985 13.3218 14.0003 13.4006 14C13.4794 14.0003 13.5575 13.985 13.6302 13.9548C13.703 13.9245 13.769 13.8801 13.8244 13.8241C13.9367 13.7116 13.9997 13.5592 13.9997 13.4003C13.9997 13.2414 13.9367 13.089 13.8244 12.9765L10.6806 9.8328C11.0529 9.37773 11.3572 8.86972 11.5831 8.32452C11.8856 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0267 2.67572C10.3652 1.68564 9.42488 0.913972 8.32477 0.45829C7.22466 0.00260857 6.01412 -0.116618 4.84625 0.115686C3.67838 0.34799 2.60562 0.921393 1.76363 1.76338C0.921637 2.60537 0.348235 3.67813 0.11593 4.84601C-0.116374 6.01388 0.00285271 7.22441 0.458534 8.32452C0.914216 9.42464 1.68589 10.3649 2.67596 11.0265ZM3.35559 2.0158C4.14449 1.48867 5.07199 1.20731 6.0208 1.20731C7.29311 1.20731 8.51331 1.71274 9.41297 2.6124C10.3126 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5367 7.88088 10.0096 8.66978C9.48244 9.45868 8.73322 10.0736 7.85663 10.4367C6.98005 10.7997 6.01548 10.8947 5.0849 10.7096C4.15433 10.5245 3.29954 10.0676 2.62863 9.39674C1.95772 8.72583 1.50083 7.87104 1.31572 6.94046C1.13062 6.00989 1.22562 5.04532 1.58872 4.16874C1.95181 3.29215 2.56669 2.54292 3.35559 2.0158ZM6.00481 8.60309C5.84641 8.60102 5.69509 8.53718 5.58308 8.42517C5.47107 8.31316 5.40722 8.16183 5.40515 8.00344V6.60422H4.00591C3.84687 6.60422 3.69434 6.54104 3.58189 6.42859C3.46943 6.31613 3.40625 6.1636 3.40625 6.00456C3.40625 5.84553 3.46943 5.693 3.58189 5.58054C3.69434 5.46809 3.84687 5.40491 4.00591 5.40491H5.40515V4.00572C5.40515 3.84668 5.46833 3.69416 5.58079 3.5817C5.69324 3.46924 5.84577 3.40607 6.00481 3.40607C6.16385 3.40607 6.31637 3.46924 6.42883 3.5817C6.54129 3.69416 6.60447 3.84668 6.60447 4.00572V5.40491H8.00362C8.16266 5.40491 8.31518 5.46809 8.42764 5.58054C8.5401 5.693 8.60328 5.84553 8.60328 6.00456C8.60328 6.1636 8.5401 6.31613 8.42764 6.42859C8.31518 6.54104 8.16266 6.60422 8.00362 6.60422H6.60447V8.00344C6.60239 8.16183 6.53855 8.31316 6.42654 8.42517C6.31453 8.53718 6.1632 8.60102 6.00481 8.60309Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function SearchPlusIcon_Template(rf, ctx) {
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
  return SearchPlusIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-icons-searchplus.mjs.map

/***/ }),

/***/ 79634:
/*!**************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-icons-undo.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UndoIcon: () => (/* binding */ UndoIcon)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/baseicon */ 84713);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 2332);




let UndoIcon = /*#__PURE__*/(() => {
  class UndoIcon extends primeng_baseicon__WEBPACK_IMPORTED_MODULE_0__.BaseIcon {
    pathId;
    ngOnInit() {
      this.pathId = 'url(#' + (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)() + ')';
    }
    static ɵfac = /* @__PURE__ */(() => {
      let ɵUndoIcon_BaseFactory;
      return function UndoIcon_Factory(t) {
        return (ɵUndoIcon_BaseFactory || (ɵUndoIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](UndoIcon)))(t || UndoIcon);
      };
    })();
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: UndoIcon,
      selectors: [["UndoIcon"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 6,
      vars: 7,
      consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.77042 5.96336C6.84315 5.99355 6.92118 6.00891 6.99993 6.00854C7.07868 6.00891 7.15671 5.99355 7.22944 5.96336C7.30217 5.93317 7.36814 5.88876 7.42348 5.83273C7.53572 5.72035 7.59876 5.56801 7.59876 5.40918C7.59876 5.25035 7.53572 5.09802 7.42348 4.98564L6.04897 3.61113H6.99998C7.9088 3.61113 8.79722 3.88063 9.55288 4.38554C10.3085 4.89046 10.8975 5.60811 11.2453 6.44776C11.5931 7.2874 11.6841 8.21132 11.5068 9.10268C11.3295 9.99404 10.8918 10.8128 10.2492 11.4554C9.60657 12.0981 8.7878 12.5357 7.89644 12.713C7.00508 12.8903 6.08116 12.7993 5.24152 12.4515C4.40188 12.1037 3.68422 11.5148 3.17931 10.7591C2.67439 10.0035 2.4049 9.11504 2.4049 8.20622C2.4049 8.04726 2.34175 7.89481 2.22935 7.78241C2.11695 7.67001 1.9645 7.60686 1.80554 7.60686C1.64658 7.60686 1.49413 7.67001 1.38172 7.78241C1.26932 7.89481 1.20618 8.04726 1.20618 8.20622C1.20829 9.74218 1.81939 11.2146 2.90548 12.3007C3.99157 13.3868 5.46402 13.9979 6.99998 14C8.5366 14 10.0103 13.3896 11.0968 12.3031C12.1834 11.2165 12.7938 9.74283 12.7938 8.20622C12.7938 6.66961 12.1834 5.19593 11.0968 4.10938C10.0103 3.02283 8.5366 2.41241 6.99998 2.41241H6.04892L7.42348 1.03786C7.48236 0.982986 7.5296 0.916817 7.56235 0.843296C7.59511 0.769775 7.61273 0.690409 7.61415 0.609933C7.61557 0.529456 7.60076 0.449519 7.57062 0.374888C7.54047 0.300257 7.49561 0.232462 7.43869 0.175548C7.38178 0.118634 7.31398 0.0737664 7.23935 0.0436218C7.16472 0.0134773 7.08478 -0.00132663 7.00431 9.32772e-05C6.92383 0.00151319 6.84447 0.019128 6.77095 0.0518865C6.69742 0.0846451 6.63126 0.131876 6.57638 0.190763L4.17895 2.5882C4.06671 2.70058 4.00366 2.85292 4.00366 3.01175C4.00366 3.17058 4.06671 3.32291 4.17895 3.43529L6.57638 5.83273C6.63172 5.88876 6.69769 5.93317 6.77042 5.96336Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
      template: function UndoIcon_Template(rf, ctx) {
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
  return UndoIcon;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-icons-undo.mjs.map

/***/ }),

/***/ 25274:
/*!*********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-image.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Image: () => (/* binding */ Image),
/* harmony export */   ImageModule: () => (/* binding */ ImageModule)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ 86825);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dom */ 82076);
/* harmony import */ var primeng_icons_eye__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/eye */ 5865);
/* harmony import */ var primeng_icons_refresh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/refresh */ 6543);
/* harmony import */ var primeng_icons_searchminus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/searchminus */ 61082);
/* harmony import */ var primeng_icons_searchplus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/searchplus */ 17947);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/times */ 77778);
/* harmony import */ var primeng_icons_undo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/undo */ 79634);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 2332);
/* harmony import */ var primeng_focustrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/focustrap */ 5232);


















/**
 * Displays an image with preview and tranformation options. For multiple image, see Galleria.
 * @group Components
 */
const _c0 = ["mask"];
const _c1 = ["previewButton"];
const _c2 = ["closeButton"];
function Image_button_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Image_button_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Image_button_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.indicatorTemplate);
  }
}
function Image_button_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "EyeIcon", 9);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-image-preview-icon");
  }
}
const _c3 = (a0, a1) => ({
  height: a0,
  width: a1
});
function Image_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Image_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onImageClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Image_button_2_ng_container_2_Template, 2, 1, "ng-container", 6)(3, Image_button_2_ng_template_3_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c3, ctx_r0.height + "px", ctx_r0.width + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r0.zoomImageAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.indicatorTemplate)("ngIfElse", _r5);
  }
}
function Image_div_3_RefreshIcon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "RefreshIcon");
  }
}
function Image_div_3_5_ng_template_0_Template(rf, ctx) {}
function Image_div_3_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Image_div_3_5_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Image_div_3_UndoIcon_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "UndoIcon");
  }
}
function Image_div_3_8_ng_template_0_Template(rf, ctx) {}
function Image_div_3_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Image_div_3_8_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Image_div_3_SearchMinusIcon_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SearchMinusIcon");
  }
}
function Image_div_3_11_ng_template_0_Template(rf, ctx) {}
function Image_div_3_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Image_div_3_11_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Image_div_3_SearchPlusIcon_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SearchPlusIcon");
  }
}
function Image_div_3_14_ng_template_0_Template(rf, ctx) {}
function Image_div_3_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Image_div_3_14_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Image_div_3_TimesIcon_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "TimesIcon");
  }
}
function Image_div_3_18_ng_template_0_Template(rf, ctx) {}
function Image_div_3_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Image_div_3_18_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c4 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
const _c5 = a1 => ({
  value: "visible",
  params: a1
});
function Image_div_3_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@animation.start", function Image_div_3_div_19_Template_div_animation_animation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r27.onAnimationStart($event));
    })("@animation.done", function Image_div_3_div_19_Template_div_animation_animation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r29.onAnimationEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Image_div_3_div_19_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r30.onPreviewImageClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c4, ctx_r21.showTransitionOptions, ctx_r21.hideTransitionOptions)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r21.imagePreviewStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx_r21.previewImageSrc ? ctx_r21.previewImageSrc : ctx_r21.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("srcset", ctx_r21.previewImageSrcSet)("sizes", ctx_r21.previewImageSizes);
  }
}
function Image_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Image_div_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r31.onMaskClick());
    })("keydown", function Image_div_3_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r33.onMaskKeydown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Image_div_3_Template_div_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r34.handleToolbarClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Image_div_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r35.rotateRight());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Image_div_3_RefreshIcon_4_Template, 1, 0, "RefreshIcon", 14)(5, Image_div_3_5_Template, 1, 0, null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Image_div_3_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r36.rotateLeft());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Image_div_3_UndoIcon_7_Template, 1, 0, "UndoIcon", 14)(8, Image_div_3_8_Template, 1, 0, null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Image_div_3_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r37.zoomOut());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Image_div_3_SearchMinusIcon_10_Template, 1, 0, "SearchMinusIcon", 14)(11, Image_div_3_11_Template, 1, 0, null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Image_div_3_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r38.zoomIn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, Image_div_3_SearchPlusIcon_13_Template, 1, 0, "SearchPlusIcon", 14)(14, Image_div_3_14_Template, 1, 0, null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Image_div_3_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r39.closePreview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, Image_div_3_TimesIcon_17_Template, 1, 0, "TimesIcon", 14)(18, Image_div_3_18_Template, 1, 0, null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Image_div_3_div_19_Template, 2, 10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-modal", ctx_r1.maskVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.rightAriaLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.rotateRightIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.rotateRightIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.leftAriaLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.rotateLeftIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.rotateLeftIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isZoomOutDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.zoomOutAriaLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.zoomOutIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.zoomOutIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.isZoomInDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.zoomInAriaLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.zoomInIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.zoomInIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.closeAriaLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.closeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.closeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.previewVisible);
  }
}
let Image = /*#__PURE__*/(() => {
  class Image {
    document;
    config;
    cd;
    el;
    /**
     * Style class of the image element.
     * @group Props
     */
    imageClass;
    /**
     * Inline style of the image element.
     * @group Props
     */
    imageStyle;
    /**
     * Class of the element.
     * @group Props
     */
    styleClass;
    /**
     * Inline style of the element.
     * @group Props
     */
    style;
    /**
     * The source path for the main image.
     * @group Props
     */
    src;
    /**
     * The srcset definition for the main image.
     * @group Props
     */
    srcSet;
    /**
     * The sizes definition for the main image.
     * @group Props
     */
    sizes;
    /**
     * The source path for the preview image.
     * @group Props
     */
    previewImageSrc;
    /**
     * The srcset definition for the preview image.
     * @group Props
     */
    previewImageSrcSet;
    /**
     * The sizes definition for the preview image.
     * @group Props
     */
    previewImageSizes;
    /**
     * Attribute of the preview image element.
     * @group Props
     */
    alt;
    /**
     * Attribute of the image element.
     * @group Props
     */
    width;
    /**
     * Attribute of the image element.
     * @group Props
     */
    height;
    /**
     * Attribute of the image element.
     * @group Props
     */
    loading;
    /**
     * Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo;
    /**
     * Controls the preview functionality.
     * @group Props
     */
    preview = false;
    /**
     * Transition options of the show animation
     * @group Props
     */
    showTransitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
    /**
     * Transition options of the hide animation
     * @group Props
     */
    hideTransitionOptions = '150ms cubic-bezier(0, 0, 0.2, 1)';
    /**
     * Triggered when the preview overlay is shown.
     * @group Emits
     */
    onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Triggered when the preview overlay is hidden.
     * @group Emits
     */
    onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * This event is triggered if an error occurs while loading an image file.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onImageError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    mask;
    previewButton;
    closeButton;
    templates;
    indicatorTemplate;
    rotateRightIconTemplate;
    rotateLeftIconTemplate;
    zoomOutIconTemplate;
    zoomInIconTemplate;
    closeIconTemplate;
    maskVisible = false;
    previewVisible = false;
    rotate = 0;
    scale = 1;
    previewClick = false;
    container;
    wrapper;
    get isZoomOutDisabled() {
      return this.scale - this.zoomSettings.step <= this.zoomSettings.min;
    }
    get isZoomInDisabled() {
      return this.scale + this.zoomSettings.step >= this.zoomSettings.max;
    }
    zoomSettings = {
      default: 1,
      step: 0.1,
      max: 1.5,
      min: 0.5
    };
    constructor(document, config, cd, el) {
      this.document = document;
      this.config = config;
      this.cd = cd;
      this.el = el;
    }
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'indicator':
            this.indicatorTemplate = item.template;
            break;
          case 'rotaterighticon':
            this.rotateRightIconTemplate = item.template;
            break;
          case 'rotatelefticon':
            this.rotateLeftIconTemplate = item.template;
            break;
          case 'zoomouticon':
            this.zoomOutIconTemplate = item.template;
            break;
          case 'zoominicon':
            this.zoomInIconTemplate = item.template;
            break;
          case 'closeicon':
            this.closeIconTemplate = item.template;
            break;
          default:
            this.indicatorTemplate = item.template;
            break;
        }
      });
    }
    onImageClick() {
      if (this.preview) {
        this.maskVisible = true;
        this.previewVisible = true;
        primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.blockBodyScroll();
      }
    }
    onMaskClick() {
      if (!this.previewClick) {
        this.closePreview();
      }
      this.previewClick = false;
    }
    onMaskKeydown(event) {
      switch (event.code) {
        case 'Escape':
          this.onMaskClick();
          setTimeout(() => {
            primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.focus(this.previewButton.nativeElement);
          }, 25);
          event.preventDefault();
          break;
        default:
          break;
      }
    }
    onPreviewImageClick() {
      this.previewClick = true;
    }
    rotateRight() {
      this.rotate += 90;
      this.previewClick = true;
    }
    rotateLeft() {
      this.rotate -= 90;
      this.previewClick = true;
    }
    zoomIn() {
      this.scale = this.scale + this.zoomSettings.step;
      this.previewClick = true;
    }
    zoomOut() {
      this.scale = this.scale - this.zoomSettings.step;
      this.previewClick = true;
    }
    onAnimationStart(event) {
      switch (event.toState) {
        case 'visible':
          this.container = event.element;
          this.wrapper = this.container?.parentElement;
          this.appendContainer();
          this.moveOnTop();
          setTimeout(() => {
            primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.focus(this.closeButton.nativeElement);
          }, 25);
          break;
        case 'void':
          primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.addClass(this.wrapper, 'p-component-overlay-leave');
          break;
      }
    }
    onAnimationEnd(event) {
      switch (event.toState) {
        case 'void':
          primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.clear(this.wrapper);
          this.maskVisible = false;
          this.container = null;
          this.wrapper = null;
          this.cd.markForCheck();
          this.onHide.emit({});
          break;
        case 'visible':
          this.onShow.emit({});
          break;
      }
    }
    moveOnTop() {
      primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ZIndexUtils.set('modal', this.wrapper, this.config.zIndex.modal);
    }
    appendContainer() {
      if (this.appendTo) {
        if (this.appendTo === 'body') this.document.body.appendChild(this.wrapper);else primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.appendChild(this.wrapper, this.appendTo);
      }
    }
    imagePreviewStyle() {
      return {
        transform: 'rotate(' + this.rotate + 'deg) scale(' + this.scale + ')'
      };
    }
    get zoomImageAriaLabel() {
      return this.config.translation.aria ? this.config.translation.aria.zoomImage : undefined;
    }
    containerClass() {
      return {
        'p-image p-component': true,
        'p-image-preview-container': this.preview
      };
    }
    handleToolbarClick(event) {
      event.stopPropagation();
    }
    closePreview() {
      this.previewVisible = false;
      this.rotate = 0;
      this.scale = this.zoomSettings.default;
      primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.unblockBodyScroll();
    }
    imageError(event) {
      this.onImageError.emit(event);
    }
    rightAriaLabel() {
      return this.config.translation.aria ? this.config.translation.aria.rotateRight : undefined;
    }
    leftAriaLabel() {
      return this.config.translation.aria ? this.config.translation.aria.rotateLeft : undefined;
    }
    zoomInAriaLabel() {
      return this.config.translation.aria ? this.config.translation.aria.zoomIn : undefined;
    }
    zoomOutAriaLabel() {
      return this.config.translation.aria ? this.config.translation.aria.zoomOut : undefined;
    }
    closeAriaLabel() {
      return this.config.translation.aria ? this.config.translation.aria.close : undefined;
    }
    onKeydownHandler(event) {
      if (this.previewVisible) {
        this.closePreview();
      }
    }
    static ɵfac = function Image_Factory(t) {
      return new (t || Image)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Image,
      selectors: [["p-image"]],
      contentQueries: function Image_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Image_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mask = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.previewButton = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.closeButton = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      hostBindings: function Image_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function Image_keydown_escape_HostBindingHandler($event) {
            return ctx.onKeydownHandler($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      inputs: {
        imageClass: "imageClass",
        imageStyle: "imageStyle",
        styleClass: "styleClass",
        style: "style",
        src: "src",
        srcSet: "srcSet",
        sizes: "sizes",
        previewImageSrc: "previewImageSrc",
        previewImageSrcSet: "previewImageSrcSet",
        previewImageSizes: "previewImageSizes",
        alt: "alt",
        width: "width",
        height: "height",
        loading: "loading",
        appendTo: "appendTo",
        preview: "preview",
        showTransitionOptions: "showTransitionOptions",
        hideTransitionOptions: "hideTransitionOptions"
      },
      outputs: {
        onShow: "onShow",
        onHide: "onHide",
        onImageError: "onImageError"
      },
      decls: 4,
      vars: 16,
      consts: [[3, "ngClass", "ngStyle"], [3, "ngStyle", "error"], ["type", "button", "class", "p-image-preview-indicator", "style", "border: 'none';", 3, "ngStyle", "click", 4, "ngIf"], ["class", "p-image-mask p-component-overlay p-component-overlay-enter", "role", "dialog", "pFocusTrap", "", 3, "click", "keydown", 4, "ngIf"], ["type", "button", 1, "p-image-preview-indicator", 2, "border", "'none'", 3, "ngStyle", "click"], ["previewButton", ""], [4, "ngIf", "ngIfElse"], ["defaultTemplate", ""], [4, "ngTemplateOutlet"], [3, "styleClass"], ["role", "dialog", "pFocusTrap", "", 1, "p-image-mask", "p-component-overlay", "p-component-overlay-enter", 3, "click", "keydown"], ["mask", ""], [1, "p-image-toolbar", 3, "click"], ["type", "button", 1, "p-image-action", "p-link", 3, "click"], [4, "ngIf"], ["type", "button", 1, "p-image-action", "p-link", 3, "disabled", "click"], ["closeButton", ""], [1, "p-image-preview", 3, "ngStyle", "click"]],
      template: function Image_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0)(1, "img", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function Image_Template_img_error_1_listener($event) {
            return ctx.imageError($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Image_button_2_Template, 5, 7, "button", 2)(3, Image_div_3_Template, 20, 19, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass())("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.imageClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.imageStyle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("srcset", ctx.srcSet)("sizes", ctx.sizes)("alt", ctx.alt)("width", ctx.width)("height", ctx.height)("loading", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.preview);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maskVisible);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_icons_refresh__WEBPACK_IMPORTED_MODULE_5__.RefreshIcon, primeng_icons_eye__WEBPACK_IMPORTED_MODULE_6__.EyeIcon, primeng_icons_undo__WEBPACK_IMPORTED_MODULE_7__.UndoIcon, primeng_icons_searchminus__WEBPACK_IMPORTED_MODULE_8__.SearchMinusIcon, primeng_icons_searchplus__WEBPACK_IMPORTED_MODULE_9__.SearchPlusIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_10__.TimesIcon, primeng_focustrap__WEBPACK_IMPORTED_MODULE_11__.FocusTrap],
      styles: ["@layer primeng{.p-image-mask{display:flex;align-items:center;justify-content:center}.p-image-preview-container{position:relative;display:inline-block;line-height:0}.p-image-preview-indicator{position:absolute;left:0;top:0;width:100%;height:100%;outline:none;border:none;padding:0;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s}.p-image-preview-icon.pi{font-size:1.5rem}.p-image-preview-icon.p-icon{scale:1.5}.p-image-preview-container:hover>.p-image-preview-indicator{opacity:1;cursor:pointer}.p-image-preview-container>img{cursor:pointer}.p-image-toolbar{position:absolute;top:0;right:0;display:flex;z-index:1}.p-image-action.p-link{display:flex;justify-content:center;align-items:center}.p-image-action.p-link[disabled]{opacity:.5}.p-image-preview{transition:transform .15s;max-width:100vw;max-height:100vh}}\n"],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('void => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
          transform: 'scale(0.7)',
          opacity: 0
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('visible => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
          transform: 'scale(0.7)',
          opacity: 0
        }))])])]
      },
      changeDetection: 0
    });
  }
  return Image;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ImageModule = /*#__PURE__*/(() => {
  class ImageModule {
    static ɵfac = function ImageModule_Factory(t) {
      return new (t || ImageModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ImageModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_icons_refresh__WEBPACK_IMPORTED_MODULE_5__.RefreshIcon, primeng_icons_eye__WEBPACK_IMPORTED_MODULE_6__.EyeIcon, primeng_icons_undo__WEBPACK_IMPORTED_MODULE_7__.UndoIcon, primeng_icons_searchminus__WEBPACK_IMPORTED_MODULE_8__.SearchMinusIcon, primeng_icons_searchplus__WEBPACK_IMPORTED_MODULE_9__.SearchPlusIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_10__.TimesIcon, primeng_focustrap__WEBPACK_IMPORTED_MODULE_11__.FocusTrapModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
    });
  }
  return ImageModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-image.mjs.map

/***/ })

}]);