"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[3482],{

/***/ 81797:
/*!*******************************************************************************!*\
  !*** ./src/app/demo/components/documentation/documentation-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentationRoutingModule: () => (/* binding */ DocumentationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var _documentation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documentation.component */ 20253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 65879);




let DocumentationRoutingModule = /*#__PURE__*/(() => {
  class DocumentationRoutingModule {
    static #_ = this.ɵfac = function DocumentationRoutingModule_Factory(t) {
      return new (t || DocumentationRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DocumentationRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
        path: '',
        component: _documentation_component__WEBPACK_IMPORTED_MODULE_0__.DocumentationComponent
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
  return DocumentationRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DocumentationRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 20253:
/*!**************************************************************************!*\
  !*** ./src/app/demo/components/documentation/documentation.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentationComponent: () => (/* binding */ DocumentationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);

let DocumentationComponent = /*#__PURE__*/(() => {
  class DocumentationComponent {
    static #_ = this.ɵfac = function DocumentationComponent_Factory(t) {
      return new (t || DocumentationComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DocumentationComponent,
      selectors: [["ng-component"]],
      decls: 94,
      vars: 0,
      consts: [[1, "card", "mb-3"], [1, "app-code"], [1, "font-semibold"], [1, "text-primary", "font-medium"], [1, "video-container"], ["width", "560", "height", "315", "src", "https://www.youtube.com/embed/yl2f8KKY204", "frameborder", "0", "allowfullscreen", ""], ["href", "https://www.youtube.com/watch?v=5VOuUdDXRsE", 1, "font-medium", "text-primary", "hover:underline"]],
      template: function DocumentationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Documentation");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Getting Started");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sakai is an application template for Angular and is distributed as a CLI project. Current versions is Angular v17 with PrimeNG v17. In case CLI is not installed already, use the command below to set it up.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "pre", 1)(9, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "npm install -g @angular/cli");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Once CLI is ready in your system, extract the contents of the zip file distribution, cd to the directory, install the libraries from npm and then execute \"ng serve\" to run the application in your local environment.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "pre", 1)(14, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "cd sakai\nnpm install\nng serve");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "The application should run at ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "http://localhost:4200/");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, ", you may now start with the development of your application.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Important CLI Commands");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Following commands are derived from CLI.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "pre", 1)(26, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Run 'ng serve' for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.\n\nRun 'ng generate component component-name' to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.\n\nRun 'ng build' to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.\n\nRun 'ng test' to execute the unit tests via [Karma](https://karma-runner.github.io).\n\nRun 'ng e2e' to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).\n\nRun 'ng help' for more options.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Structure");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sakai consists of 3 main parts; the application layout, layout assets and PrimeNG component theme assets. Layout is placed inside the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "src/app/layout");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " folder, and the assets are in the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "src/assets/layout");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " folder. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Default Configuration");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Initial layout configuration can be defined at the main app component by injecting the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "LayoutService");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, ", this step is optional and only necessary when customizing the defaults. Note that ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "theme");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " and ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "scale");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " are not reactive since theme is configured outside of Angular at ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "strong", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "index.html");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " by default and initial scale is defined with the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "$scale");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " at ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "layout.scss");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, ". When default theme or scale is changed at their files initially, it is required to configure the layout service with the matching values to avoid sync issues. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "pre", 1)(61, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "import { Component, OnInit } from '@angular/core';\nimport { PrimeNGConfig } from 'primeng/api';\nimport { LayoutService, AppConfig } from './layout/service/app.layout.service';\n\n@Component({\n    selector: 'app-root',\n    templateUrl: './app.component.html'\n})\nexport class AppComponent implements OnInit {\n\n    constructor(private primengConfig: PrimeNGConfig, private layoutService: LayoutService) { }\n\n    ngOnInit(): void {\n        this.primengConfig.ripple = true;       //enables core ripple functionality\n\n        //optional configuration with the default configuration\n        const config: AppConfig = {\n            ripple: false,                      //toggles ripple on and off\n            inputStyle: 'outlined',             //default style for input elements\n            menuMode: 'static',                 //layout mode of the menu, valid values are \"static\" and \"overlay\"\n            colorScheme: 'light',               //color scheme of the template, valid values are \"light\" and \"dark\"\n            theme: 'lara-light-indigo',         //default component theme for PrimeNG\n            scale: 14                           //size of the body font size to scale the whole application\n        };\n        this.layoutService.config.set(config);\n    }\n\n}");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Menu is a separate component defined in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "src/app/layout/app.menu.component.ts");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " file and based on PrimeNG MenuModel API. In order to define the menuitems, navigate to this file and define your own model as a nested structure.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "pre", 1)(71, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "import { OnInit } from '@angular/core';\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'app-menu',\n    templateUrl: './app.menu.component.html'\n})\nexport class AppMenuComponent implements OnInit {\n\n    model: any[] = [];\n\n    ngOnInit() {\n        this.model = [\n            {\n                label: 'Home',\n                items: [\n                    {\n                        label: 'Dashboard',\n                        icon: 'pi pi-fw pi-home',\n                        routerLink: ['/']\n                    }\n                ]\n            },\n            //...\n        ];\n    }\n}");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Integration with Existing Angular CLI Projects");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Sakai structure is designed in a modular way so that it can easily be integrated with your existing application. We've created a short tutorial with details.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "iframe", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Theme");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Sakai provides 34 PrimeNG themes out of the box. Setup of a theme is simple by including the css of theme to your bundle that are located inside ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "assets/layout/styles/theme/");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " folder such as ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "assets/layout/styles/theme/lara-light-indigo/theme.css");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Another alternative would be creating dynamic bundles, please see the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "video tutorial");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " for an example.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      styles: ["@media screen and (max-width: 991px) {\n  .video-container[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    height: 0;\n    padding-bottom: 56.25%;\n  }\n  .video-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n}"]
    });
  }
  return DocumentationComponent;
})();

/***/ }),

/***/ 73482:
/*!***********************************************************************!*\
  !*** ./src/app/demo/components/documentation/documentation.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentationModule: () => (/* binding */ DocumentationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _documentation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documentation-routing.module */ 81797);
/* harmony import */ var _documentation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documentation.component */ 20253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);




let DocumentationModule = /*#__PURE__*/(() => {
  class DocumentationModule {
    static #_ = this.ɵfac = function DocumentationModule_Factory(t) {
      return new (t || DocumentationModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: DocumentationModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _documentation_routing_module__WEBPACK_IMPORTED_MODULE_0__.DocumentationRoutingModule]
    });
  }
  return DocumentationModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DocumentationModule, {
    declarations: [_documentation_component__WEBPACK_IMPORTED_MODULE_1__.DocumentationComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _documentation_routing_module__WEBPACK_IMPORTED_MODULE_0__.DocumentationRoutingModule]
  });
})();

/***/ })

}]);