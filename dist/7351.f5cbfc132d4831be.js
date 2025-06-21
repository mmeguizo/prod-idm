"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[7351],{

/***/ 41934:
/*!***************************************************************************!*\
  !*** ./src/app/demo/components/uikit/panels/panelsdemo-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelsDemoRoutingModule: () => (/* binding */ PanelsDemoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var _panelsdemo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panelsdemo.component */ 54110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 65879);




let PanelsDemoRoutingModule = /*#__PURE__*/(() => {
  class PanelsDemoRoutingModule {
    static #_ = this.ɵfac = function PanelsDemoRoutingModule_Factory(t) {
      return new (t || PanelsDemoRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PanelsDemoRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
        path: '',
        component: _panelsdemo_component__WEBPACK_IMPORTED_MODULE_0__.PanelsDemoComponent
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
  return PanelsDemoRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PanelsDemoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 54110:
/*!**********************************************************************!*\
  !*** ./src/app/demo/components/uikit/panels/panelsdemo.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelsDemoComponent: () => (/* binding */ PanelsDemoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/toolbar */ 56340);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/splitbutton */ 49937);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/accordion */ 65389);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tabview */ 14844);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/fieldset */ 47791);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/menu */ 61122);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/divider */ 75359);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/splitter */ 55043);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/panel */ 51230);













function PanelsDemoComponent_ng_template_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Panel 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PanelsDemoComponent_ng_template_94_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Panel 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PanelsDemoComponent_ng_template_94_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Panel 3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c0 = () => [50, 50];
const _c1 = () => [10, 10];
function PanelsDemoComponent_ng_template_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-splitter", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelsDemoComponent_ng_template_94_ng_template_1_Template, 2, 0, "ng-template", 41)(2, PanelsDemoComponent_ng_template_94_ng_template_2_Template, 2, 0, "ng-template", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panelSizes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("minSizes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
  }
}
const _c2 = () => ({
  "height": "300px"
});
const _c3 = () => [30, 70];
let PanelsDemoComponent = /*#__PURE__*/(() => {
  class PanelsDemoComponent {
    constructor() {
      this.items = [];
      this.cardMenu = [];
    }
    ngOnInit() {
      this.items = [{
        label: 'Angular.io',
        icon: 'pi pi-external-link',
        url: 'http://angular.io'
      }, {
        label: 'Theming',
        icon: 'pi pi-bookmark',
        routerLink: ['/theming']
      }];
      this.cardMenu = [{
        label: 'Save',
        icon: 'pi pi-fw pi-check'
      }, {
        label: 'Update',
        icon: 'pi pi-fw pi-refresh'
      }, {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash'
      }];
    }
    static #_ = this.ɵfac = function PanelsDemoComponent_Factory(t) {
      return new (t || PanelsDemoComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PanelsDemoComponent,
      selectors: [["ng-component"]],
      decls: 95,
      vars: 11,
      consts: [[1, "grid"], [1, "col-12"], [1, "card"], [1, "p-toolbar-group-left", "flex", "flex-wrap"], ["pButton", "", "type", "button", "label", "New", "icon", "pi pi-plus", 1, "mr-2"], ["pButton", "", "type", "button", "label", "Open", "icon", "pi pi-folder-open", 1, "p-button-secondary", "mr-2"], [1, "pi", "pi-bars", "p-toolbar-separator"], ["pButton", "", "type", "button", "icon", "pi pi-check", 1, "p-button-success", "mr-2"], ["pButton", "", "type", "button", "icon", "pi pi-trash", 1, "p-button-warning", "mr-2"], ["pButton", "", "type", "button", "icon", "pi pi-print", 1, "p-button-danger"], [1, "p-toolbar-group-right"], ["label", "Options", "icon", "pi pi-check", 3, "model"], [1, "col-12", "md:col-6"], ["header", "Header I", 1, "line-height-3", "m-0", 3, "selected"], ["header", "Header II", 1, "line-height-3", "m-0"], ["header", "Header III", 1, "line-height-3", "m-0"], ["orientation", "left"], ["header", "Header I", 1, "line-height-3", "m-0"], ["header", "Header", 1, "line-height-3", "m-0", 3, "toggleable"], ["legend", "Legend", 1, "line-height-3", "m-0", 3, "toggleable"], [1, "flex", "align-items-center", "justify-content-between", "mb-0"], [3, "popup", "model"], ["menu", ""], ["pButton", "", "type", "button", "icon", "pi pi-plus", 1, "p-button-text", 3, "click"], [1, "col-5", "flex", "align-items-center", "justify-content-center"], [1, "p-fluid"], [1, "field"], ["for", "username"], ["pInputText", "", "id", "username", "type", "text"], ["for", "password"], ["pInputText", "", "id", "password", "type", "password"], ["label", "Login", 1, "mt-2"], [1, "col-2"], ["layout", "vertical"], [1, "col-5", "align-items-center", "justify-content-center"], [1, "line-height-3", "m-0"], ["layout", "horizontal", "align", "center"], [1, "p-tag"], ["align", "right"], ["label", "Button", "icon", "pi pi-search", "styleClass", "p-button-outlined"], [3, "panelSizes"], ["pTemplate", ""], [1, "col", "flex", "align-items-center", "justify-content-center"], ["layout", "vertical", 3, "panelSizes", "minSizes"]],
      template: function PanelsDemoComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Toolbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-toolbar")(6, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "button", 4)(8, "button", 5)(9, "i", 6)(10, "button", 7)(11, "button", 8)(12, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p-splitButton", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12)(16, "div", 2)(17, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "AccordionPanel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p-accordion")(20, "p-accordionTab", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p-accordionTab", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p-accordionTab", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2)(27, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "TabView");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p-tabView", 16)(30, "p-tabPanel", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p-tabPanel", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p-tabPanel", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12)(37, "div", 2)(38, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Panel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p-panel", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2)(43, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Fieldset");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p-fieldset", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2)(48, "div", 20)(49, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Card");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "p-menu", 21, 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelsDemoComponent_Template_button_click_53_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.toggle($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 1)(57, "div", 2)(58, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 0)(61, "div", 24)(62, "div", 25)(63, "div", 26)(64, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 26)(68, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "p-button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 32)(73, "p-divider", 33)(74, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "OR");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 34)(77, "p", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p-divider", 36)(80, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Badge");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p-divider", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "p-button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 1)(89, "div", 2)(90, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Splitter");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p-splitter", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, PanelsDemoComponent_ng_template_93_Template, 2, 0, "ng-template", 41)(94, PanelsDemoComponent_ng_template_94_Template, 3, 4, "ng-template", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.items);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("toggleable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("toggleable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popup", true)("model", ctx.cardMenu);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panelSizes", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
        }
      },
      dependencies: [primeng_toolbar__WEBPACK_IMPORTED_MODULE_1__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_2__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_4__.SplitButton, primeng_accordion__WEBPACK_IMPORTED_MODULE_5__.Accordion, primeng_accordion__WEBPACK_IMPORTED_MODULE_5__.AccordionTab, primeng_tabview__WEBPACK_IMPORTED_MODULE_6__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_6__.TabPanel, primeng_fieldset__WEBPACK_IMPORTED_MODULE_7__.Fieldset, primeng_menu__WEBPACK_IMPORTED_MODULE_8__.Menu, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, primeng_divider__WEBPACK_IMPORTED_MODULE_10__.Divider, primeng_splitter__WEBPACK_IMPORTED_MODULE_11__.Splitter, primeng_panel__WEBPACK_IMPORTED_MODULE_12__.Panel],
      encapsulation: 2
    });
  }
  return PanelsDemoComponent;
})();

/***/ }),

/***/ 37351:
/*!*******************************************************************!*\
  !*** ./src/app/demo/components/uikit/panels/panelsdemo.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelsDemoModule: () => (/* binding */ PanelsDemoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var _panelsdemo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panelsdemo.component */ 54110);
/* harmony import */ var _panelsdemo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panelsdemo-routing.module */ 41934);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toolbar */ 56340);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/ripple */ 44480);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/splitbutton */ 49937);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/accordion */ 65389);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tabview */ 14844);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/fieldset */ 47791);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/menu */ 61122);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/divider */ 75359);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/splitter */ 55043);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/panel */ 51230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);

















let PanelsDemoModule = /*#__PURE__*/(() => {
  class PanelsDemoModule {
    static #_ = this.ɵfac = function PanelsDemoModule_Factory(t) {
      return new (t || PanelsDemoModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: PanelsDemoModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _panelsdemo_routing_module__WEBPACK_IMPORTED_MODULE_1__.PanelsDemoRoutingModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__.ToolbarModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_8__.SplitButtonModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_9__.AccordionModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_10__.TabViewModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_11__.FieldsetModule, primeng_menu__WEBPACK_IMPORTED_MODULE_12__.MenuModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputTextModule, primeng_divider__WEBPACK_IMPORTED_MODULE_14__.DividerModule, primeng_splitter__WEBPACK_IMPORTED_MODULE_15__.SplitterModule, primeng_panel__WEBPACK_IMPORTED_MODULE_16__.PanelModule]
    });
  }
  return PanelsDemoModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PanelsDemoModule, {
    declarations: [_panelsdemo_component__WEBPACK_IMPORTED_MODULE_0__.PanelsDemoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _panelsdemo_routing_module__WEBPACK_IMPORTED_MODULE_1__.PanelsDemoRoutingModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__.ToolbarModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_7__.RippleModule, primeng_splitbutton__WEBPACK_IMPORTED_MODULE_8__.SplitButtonModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_9__.AccordionModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_10__.TabViewModule, primeng_fieldset__WEBPACK_IMPORTED_MODULE_11__.FieldsetModule, primeng_menu__WEBPACK_IMPORTED_MODULE_12__.MenuModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputTextModule, primeng_divider__WEBPACK_IMPORTED_MODULE_14__.DividerModule, primeng_splitter__WEBPACK_IMPORTED_MODULE_15__.SplitterModule, primeng_panel__WEBPACK_IMPORTED_MODULE_16__.PanelModule]
  });
})();

/***/ }),

/***/ 47791:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-fieldset.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fieldset: () => (/* binding */ Fieldset),
/* harmony export */   FieldsetModule: () => (/* binding */ FieldsetModule)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 86825);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_icons_minus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/minus */ 31604);
/* harmony import */ var primeng_icons_plus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/plus */ 3983);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 44480);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 2332);












/**
 * Fieldset is a grouping component with the optional content toggle feature.
 * @group Components
 */
function Fieldset_ng_container_2_ng_container_2_PlusIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "PlusIcon", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-fieldset-toggler");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "togglericon");
  }
}
function Fieldset_ng_container_2_ng_container_2_span_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Fieldset_ng_container_2_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Fieldset_ng_container_2_ng_container_2_span_2_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "togglericon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.expandIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Fieldset_ng_container_2_ng_container_2_PlusIcon_1_Template, 1, 2, "PlusIcon", 9)(2, Fieldset_ng_container_2_ng_container_2_span_2_Template, 2, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.expandIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.expandIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_3_MinusIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "MinusIcon", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-fieldset-toggler");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true)("data-pc-section", "togglericon");
  }
}
function Fieldset_ng_container_2_ng_container_3_span_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Fieldset_ng_container_2_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Fieldset_ng_container_2_ng_container_3_span_2_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "togglericon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r11.collapseIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Fieldset_ng_container_2_ng_container_3_MinusIcon_1_Template, 1, 3, "MinusIcon", 9)(2, Fieldset_ng_container_2_ng_container_3_span_2_Template, 2, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.collapseIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.collapseIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Fieldset_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Fieldset_ng_container_2_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.toggle($event));
    })("keydown", function Fieldset_ng_container_2_Template_a_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.onKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Fieldset_ng_container_2_ng_container_2_Template, 3, 2, "ng-container", 8)(3, Fieldset_ng_container_2_ng_container_3_Template, 3, 2, "ng-container", 8)(4, Fieldset_ng_container_2_ng_container_4_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r0.id + "_header")("aria-controls", ctx_r0.id + "_content")("aria-expanded", !ctx_r0.collapsed)("aria-label", ctx_r0.buttonAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r2);
  }
}
function Fieldset_ng_template_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Fieldset_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Fieldset_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 6);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "legendtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.legend);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.headerTemplate);
  }
}
function Fieldset_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c0 = ["*", [["p-header"]]];
const _c1 = (a1, a2) => ({
  "p-fieldset p-component": true,
  "p-fieldset-toggleable": a1,
  "p-fieldset-expanded": a2
});
const _c2 = a0 => ({
  transitionParams: a0,
  height: "0"
});
const _c3 = a1 => ({
  value: "hidden",
  params: a1
});
const _c4 = a0 => ({
  transitionParams: a0,
  height: "*"
});
const _c5 = a1 => ({
  value: "visible",
  params: a1
});
const _c6 = ["*", "p-header"];
let Fieldset = /*#__PURE__*/(() => {
  class Fieldset {
    el;
    /**
     * Header text of the fieldset.
     * @group Props
     */
    legend;
    /**
     * When specified, content can toggled by clicking the legend.
     * @group Props
     * @defaultValue false
     */
    toggleable;
    /**
     * Defines the default visibility state of the content.
     * * @group Props
     */
    collapsed = false;
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
     * Transition options of the panel animation.
     * @group Props
     */
    transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
    /**
     * Emits when the collapsed state changes.
     * @param {boolean} value - New value.
     * @group Emits
     */
    collapsedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke before panel toggle.
     * @param {PanelBeforeToggleEvent} event - Custom toggle event
     * @group Emits
     */
    onBeforeToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke after panel toggle.
     * @param {PanelAfterToggleEvent} event - Custom toggle event
     * @group Emits
     */
    onAfterToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    templates;
    get id() {
      return (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)();
    }
    get buttonAriaLabel() {
      return this.legend;
    }
    animating;
    headerTemplate;
    contentTemplate;
    collapseIconTemplate;
    expandIconTemplate;
    constructor(el) {
      this.el = el;
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'expandicon':
            this.expandIconTemplate = item.template;
            break;
          case 'collapseicon':
            this.collapseIconTemplate = item.template;
            break;
          case 'content':
            this.contentTemplate = item.template;
            break;
        }
      });
    }
    toggle(event) {
      if (this.animating) {
        return false;
      }
      this.animating = true;
      this.onBeforeToggle.emit({
        originalEvent: event,
        collapsed: this.collapsed
      });
      if (this.collapsed) this.expand();else this.collapse();
      this.onAfterToggle.emit({
        originalEvent: event,
        collapsed: this.collapsed
      });
      event.preventDefault();
    }
    onKeyDown(event) {
      if (event.code === 'Enter' || event.code === 'Space') {
        this.toggle(event);
        event.preventDefault();
      }
    }
    expand() {
      this.collapsed = false;
      this.collapsedChange.emit(this.collapsed);
    }
    collapse() {
      this.collapsed = true;
      this.collapsedChange.emit(this.collapsed);
    }
    getBlockableElement() {
      return this.el.nativeElement.children[0];
    }
    onToggleDone() {
      this.animating = false;
    }
    static ɵfac = function Fieldset_Factory(t) {
      return new (t || Fieldset)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Fieldset,
      selectors: [["p-fieldset"]],
      contentQueries: function Fieldset_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        legend: "legend",
        toggleable: "toggleable",
        collapsed: "collapsed",
        style: "style",
        styleClass: "styleClass",
        transitionOptions: "transitionOptions"
      },
      outputs: {
        collapsedChange: "collapsedChange",
        onBeforeToggle: "onBeforeToggle",
        onAfterToggle: "onAfterToggle"
      },
      ngContentSelectors: _c6,
      decls: 9,
      vars: 28,
      consts: [[3, "ngClass", "ngStyle"], [1, "p-fieldset-legend"], [4, "ngIf", "ngIfElse"], ["legendContent", ""], ["role", "region", 1, "p-toggleable-content"], [1, "p-fieldset-content"], [4, "ngTemplateOutlet"], ["pRipple", "", "tabindex", "0", "role", "button", 3, "click", "keydown"], [4, "ngIf"], [3, "styleClass", 4, "ngIf"], ["class", "p-fieldset-toggler", 4, "ngIf"], [3, "styleClass"], [1, "p-fieldset-toggler"], [1, "p-fieldset-legend-text"]],
      template: function Fieldset_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fieldset", 0)(1, "legend", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Fieldset_ng_container_2_Template, 5, 7, "ng-container", 2)(3, Fieldset_ng_template_3_Template, 4, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@fieldsetContent.done", function Fieldset_Template_div_animation_fieldsetContent_done_5_listener() {
            return ctx.onToggleDone();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Fieldset_ng_container_8_Template, 1, 0, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c1, ctx.toggleable, !ctx.collapsed && ctx.toggleable))("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id)("data-pc-name", "fieldset")("data-pc-section", "root");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "legend");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggleable)("ngIfElse", _r2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fieldsetContent", ctx.collapsed ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c2, ctx.transitionOptions)) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c4, ctx.animating ? ctx.transitionOptions : "0ms")));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id + "_content")("aria-labelledby", ctx.id + "_header")("aria-hidden", ctx.collapsed)("data-pc-section", "toggleablecontent");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "content");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, primeng_icons_minus__WEBPACK_IMPORTED_MODULE_5__.MinusIcon, primeng_icons_plus__WEBPACK_IMPORTED_MODULE_6__.PlusIcon],
      styles: ["@layer primeng{.p-fieldset-legend>a,.p-fieldset-legend>span{display:flex;align-items:center;justify-content:center}.p-fieldset-toggleable .p-fieldset-legend a{cursor:pointer;-webkit-user-select:none;user-select:none;overflow:hidden;position:relative}.p-fieldset-legend-text{line-height:1}.p-fieldset-toggleable.p-fieldset-expanded>.p-toggleable-content:not(.ng-animating){overflow:visible}.p-fieldset-toggleable .p-toggleable-content{overflow:hidden}}\n"],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('fieldsetContent', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '0'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '*'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('visible <=> hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{transitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(0))])]
      },
      changeDetection: 0
    });
  }
  return Fieldset;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let FieldsetModule = /*#__PURE__*/(() => {
  class FieldsetModule {
    static ɵfac = function FieldsetModule_Factory(t) {
      return new (t || FieldsetModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FieldsetModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.RippleModule, primeng_icons_minus__WEBPACK_IMPORTED_MODULE_5__.MinusIcon, primeng_icons_plus__WEBPACK_IMPORTED_MODULE_6__.PlusIcon, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
    });
  }
  return FieldsetModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-fieldset.mjs.map

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

/***/ 55043:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-splitter.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Splitter: () => (/* binding */ Splitter),
/* harmony export */   SplitterModule: () => (/* binding */ SplitterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dom */ 82076);







/**
 * Splitter is utilized to separate and resize panels.
 * @group Components
 */
const _c0 = ["container"];
function Splitter_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Splitter_ng_template_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function Splitter_ng_template_2_div_2_Template_div_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onGutterMouseDown($event, i_r3));
    })("touchstart", function Splitter_ng_template_2_div_2_Template_div_touchstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.onGutterTouchStart($event, i_r3));
    })("touchmove", function Splitter_ng_template_2_div_2_Template_div_touchmove_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.onGutterTouchMove($event));
    })("touchend", function Splitter_ng_template_2_div_2_Template_div_touchend_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.onGutterTouchEnd($event, i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function Splitter_ng_template_2_div_2_Template_div_keyup_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.onGutterKeyUp($event));
    })("keydown", function Splitter_ng_template_2_div_2_Template_div_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.onGutterKeyDown($event, i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-p-gutter-resizing", false)("data-pc-section", "gutter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r5.gutterStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-orientation", ctx_r5.layout)("aria-valuenow", ctx_r5.prevSize)("data-pc-section", "gutterhandle");
  }
}
function Splitter_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Splitter_ng_template_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Splitter_ng_template_2_div_2_Template, 2, 6, "div", 5);
  }
  if (rf & 2) {
    const panel_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.panelStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.panelContainerClass())("ngStyle", ctx_r1.panelStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "splitter")("data-pc-section", "root");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", panel_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r3 !== ctx_r1.panels.length - 1);
  }
}
let Splitter = /*#__PURE__*/(() => {
  class Splitter {
    document;
    platformId;
    renderer;
    cd;
    el;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Style class of the panel.
     * @group Props
     */
    panelStyleClass;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Inline style of the panel.
     * @group Props
     */
    panelStyle;
    /**
     * Defines where a stateful splitter keeps its state, valid values are 'session' for sessionStorage and 'local' for localStorage.
     * @group Props
     */
    stateStorage = 'session';
    /**
     * Storage identifier of a stateful Splitter.
     * @group Props
     */
    stateKey = null;
    /**
     * Orientation of the panels. Valid values are 'horizontal' and 'vertical'.
     * @group Props
     */
    layout = 'horizontal';
    /**
     * Size of the divider in pixels.
     * @group Props
     */
    gutterSize = 4;
    /**
     * Step factor to increment/decrement the size of the panels while pressing the arrow keys.
     * @group Props
     */
    step = 5;
    /**
     * Minimum size of the elements relative to 100%.
     * @group Props
     */
    minSizes = [];
    /**
     * Size of the elements relative to 100%.
     * @group Props
     */
    get panelSizes() {
      return this._panelSizes;
    }
    set panelSizes(val) {
      this._panelSizes = val;
      if (this.el && this.el.nativeElement && this.panels.length > 0) {
        let children = [...this.el.nativeElement.children[0].children].filter(child => primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.hasClass(child, 'p-splitter-panel'));
        let _panelSizes = [];
        this.panels.map((panel, i) => {
          let panelInitialSize = this.panelSizes.length - 1 >= i ? this.panelSizes[i] : null;
          let panelSize = panelInitialSize || 100 / this.panels.length;
          _panelSizes[i] = panelSize;
          children[i].style.flexBasis = 'calc(' + panelSize + '% - ' + (this.panels.length - 1) * this.gutterSize + 'px)';
        });
      }
    }
    /**
     * Callback to invoke when resize ends.
     * @param {SplitterResizeEndEvent} event - Custom panel resize end event
     * @group Emits
     */
    onResizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when resize starts.
     * @param {SplitterResizeStartEvent} event - Custom panel resize start event
     * @group Emits
     */
    onResizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    templates;
    containerViewChild;
    nested = false;
    panels = [];
    dragging = false;
    mouseMoveListener;
    mouseUpListener;
    touchMoveListener;
    touchEndListener;
    size;
    gutterElement;
    startPos;
    prevPanelElement;
    nextPanelElement;
    nextPanelSize;
    prevPanelSize;
    _panelSizes = [];
    prevPanelIndex;
    timer;
    prevSize;
    window;
    constructor(document, platformId, renderer, cd, el) {
      this.document = document;
      this.platformId = platformId;
      this.renderer = renderer;
      this.cd = cd;
      this.el = el;
      this.window = this.document.defaultView;
    }
    ngOnInit() {
      this.nested = this.isNested();
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'panel':
            this.panels.push(item.template);
            break;
          default:
            this.panels.push(item.template);
            break;
        }
      });
    }
    ngAfterViewInit() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
        if (this.panels && this.panels.length) {
          let initialized = false;
          if (this.isStateful()) {
            initialized = this.restoreState();
          }
          if (!initialized) {
            let children = [...this.el.nativeElement.children[0].children].filter(child => primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.hasClass(child, 'p-splitter-panel'));
            let _panelSizes = [];
            this.panels.map((panel, i) => {
              let panelInitialSize = this.panelSizes.length - 1 >= i ? this.panelSizes[i] : null;
              let panelSize = panelInitialSize || 100 / this.panels.length;
              _panelSizes[i] = panelSize;
              children[i].style.flexBasis = 'calc(' + panelSize + '% - ' + (this.panels.length - 1) * this.gutterSize + 'px)';
            });
            this._panelSizes = _panelSizes;
            this.prevSize = parseFloat(_panelSizes[0]).toFixed(4);
          }
        }
      }
    }
    resizeStart(event, index, isKeyDown) {
      this.gutterElement = event.currentTarget || event.target.parentElement;
      this.size = this.horizontal() ? primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getWidth(this.containerViewChild.nativeElement) : primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getHeight(this.containerViewChild.nativeElement);
      if (!isKeyDown) {
        this.dragging = true;
        this.startPos = this.horizontal() ? event instanceof MouseEvent ? event.pageX : event.changedTouches[0].pageX : event instanceof MouseEvent ? event.pageY : event.changedTouches[0].pageY;
      }
      this.prevPanelElement = this.gutterElement.previousElementSibling;
      this.nextPanelElement = this.gutterElement.nextElementSibling;
      if (isKeyDown) {
        this.prevPanelSize = this.horizontal() ? primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getOuterWidth(this.prevPanelElement, true) : primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getOuterHeight(this.prevPanelElement, true);
        this.nextPanelSize = this.horizontal() ? primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getOuterWidth(this.nextPanelElement, true) : primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getOuterHeight(this.nextPanelElement, true);
      } else {
        this.prevPanelSize = 100 * (this.horizontal() ? primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getOuterWidth(this.prevPanelElement, true) : primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getOuterHeight(this.prevPanelElement, true)) / this.size;
        this.nextPanelSize = 100 * (this.horizontal() ? primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getOuterWidth(this.nextPanelElement, true) : primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getOuterHeight(this.nextPanelElement, true)) / this.size;
      }
      this.prevPanelIndex = index;
      primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.addClass(this.gutterElement, 'p-splitter-gutter-resizing');
      this.gutterElement.setAttribute('data-p-gutter-resizing', 'true');
      primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.addClass(this.containerViewChild.nativeElement, 'p-splitter-resizing');
      this.containerViewChild.nativeElement.setAttribute('data-p-resizing', 'true');
      this.onResizeStart.emit({
        originalEvent: event,
        sizes: this._panelSizes
      });
    }
    onResize(event, step, isKeyDown) {
      let newPos, newPrevPanelSize, newNextPanelSize;
      if (isKeyDown) {
        if (this.horizontal()) {
          newPrevPanelSize = 100 * (this.prevPanelSize + step) / this.size;
          newNextPanelSize = 100 * (this.nextPanelSize - step) / this.size;
        } else {
          newPrevPanelSize = 100 * (this.prevPanelSize - step) / this.size;
          newNextPanelSize = 100 * (this.nextPanelSize + step) / this.size;
        }
      } else {
        if (this.horizontal()) newPos = event.pageX * 100 / this.size - this.startPos * 100 / this.size;else newPos = event.pageY * 100 / this.size - this.startPos * 100 / this.size;
        newPrevPanelSize = this.prevPanelSize + newPos;
        newNextPanelSize = this.nextPanelSize - newPos;
      }
      this.prevSize = parseFloat(newPrevPanelSize).toFixed(4);
      if (this.validateResize(newPrevPanelSize, newNextPanelSize)) {
        this.prevPanelElement.style.flexBasis = 'calc(' + newPrevPanelSize + '% - ' + (this.panels.length - 1) * this.gutterSize + 'px)';
        this.nextPanelElement.style.flexBasis = 'calc(' + newNextPanelSize + '% - ' + (this.panels.length - 1) * this.gutterSize + 'px)';
        this._panelSizes[this.prevPanelIndex] = newPrevPanelSize;
        this._panelSizes[this.prevPanelIndex + 1] = newNextPanelSize;
      }
    }
    resizeEnd(event) {
      if (this.isStateful()) {
        this.saveState();
      }
      this.onResizeEnd.emit({
        originalEvent: event,
        sizes: this._panelSizes
      });
      primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.removeClass(this.gutterElement, 'p-splitter-gutter-resizing');
      primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.removeClass(this.containerViewChild.nativeElement, 'p-splitter-resizing');
      this.clear();
    }
    onGutterMouseDown(event, index) {
      this.resizeStart(event, index);
      this.bindMouseListeners();
    }
    onGutterTouchStart(event, index) {
      if (event.cancelable) {
        this.resizeStart(event, index);
        this.bindTouchListeners();
        event.preventDefault();
      }
    }
    onGutterTouchMove(event) {
      this.onResize(event);
      event.preventDefault();
    }
    onGutterTouchEnd(event) {
      this.resizeEnd(event);
      this.unbindTouchListeners();
      if (event.cancelable) event.preventDefault();
    }
    repeat(event, index, step) {
      this.resizeStart(event, index, true);
      this.onResize(event, step, true);
    }
    setTimer(event, index, step) {
      this.clearTimer();
      this.timer = setTimeout(() => {
        this.repeat(event, index, step);
      }, 40);
    }
    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    }
    onGutterKeyUp(event) {
      this.clearTimer();
      this.resizeEnd(event);
    }
    onGutterKeyDown(event, index) {
      switch (event.code) {
        case 'ArrowLeft':
          {
            if (this.layout === 'horizontal') {
              this.setTimer(event, index, this.step * -1);
            }
            event.preventDefault();
            break;
          }
        case 'ArrowRight':
          {
            if (this.layout === 'horizontal') {
              this.setTimer(event, index, this.step);
            }
            event.preventDefault();
            break;
          }
        case 'ArrowDown':
          {
            if (this.layout === 'vertical') {
              this.setTimer(event, index, this.step * -1);
            }
            event.preventDefault();
            break;
          }
        case 'ArrowUp':
          {
            if (this.layout === 'vertical') {
              this.setTimer(event, index, this.step);
            }
            event.preventDefault();
            break;
          }
        default:
          //no op
          break;
      }
    }
    validateResize(newPrevPanelSize, newNextPanelSize) {
      if (this.minSizes.length >= 1 && this.minSizes[0] && this.minSizes[0] > newPrevPanelSize) {
        return false;
      }
      if (this.minSizes.length > 1 && this.minSizes[1] && this.minSizes[1] > newNextPanelSize) {
        return false;
      }
      return true;
    }
    bindMouseListeners() {
      if (!this.mouseMoveListener) {
        this.mouseMoveListener = this.renderer.listen(this.document, 'mousemove', event => {
          this.onResize(event);
        });
      }
      if (!this.mouseUpListener) {
        this.mouseUpListener = this.renderer.listen(this.document, 'mouseup', event => {
          this.resizeEnd(event);
          this.unbindMouseListeners();
        });
      }
    }
    bindTouchListeners() {
      if (!this.touchMoveListener) {
        this.touchMoveListener = this.renderer.listen(this.document, 'touchmove', event => {
          this.onResize(event.changedTouches[0]);
        });
      }
      if (!this.touchEndListener) {
        this.touchEndListener = this.renderer.listen(this.document, 'touchend', event => {
          this.resizeEnd(event);
          this.unbindTouchListeners();
        });
      }
    }
    unbindMouseListeners() {
      if (this.mouseMoveListener) {
        this.mouseMoveListener();
        this.mouseMoveListener = null;
      }
      if (this.mouseUpListener) {
        this.mouseUpListener();
        this.mouseUpListener = null;
      }
    }
    unbindTouchListeners() {
      if (this.touchMoveListener) {
        this.touchMoveListener();
        this.touchMoveListener = null;
      }
      if (this.touchEndListener) {
        this.touchEndListener();
        this.touchEndListener = null;
      }
    }
    clear() {
      this.dragging = false;
      this.size = null;
      this.startPos = null;
      this.prevPanelElement = null;
      this.nextPanelElement = null;
      this.prevPanelSize = null;
      this.nextPanelSize = null;
      this.gutterElement = null;
      this.prevPanelIndex = null;
    }
    isNested() {
      if (this.el.nativeElement) {
        let parent = this.el.nativeElement.parentElement;
        while (parent && !primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.hasClass(parent, 'p-splitter')) {
          parent = parent.parentElement;
        }
        return parent !== null;
      } else {
        return false;
      }
    }
    isStateful() {
      return this.stateKey != null;
    }
    getStorage() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
        switch (this.stateStorage) {
          case 'local':
            return this.window.localStorage;
          case 'session':
            return this.window.sessionStorage;
          default:
            throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
        }
      } else {
        throw new Error('Storage is not a available by default on the server.');
      }
    }
    saveState() {
      this.getStorage().setItem(this.stateKey, JSON.stringify(this._panelSizes));
    }
    restoreState() {
      const storage = this.getStorage();
      const stateString = storage.getItem(this.stateKey);
      if (stateString) {
        this._panelSizes = JSON.parse(stateString);
        let children = [...this.containerViewChild.nativeElement.children].filter(child => primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.hasClass(child, 'p-splitter-panel'));
        children.forEach((child, i) => {
          child.style.flexBasis = 'calc(' + this._panelSizes[i] + '% - ' + (this.panels.length - 1) * this.gutterSize + 'px)';
        });
        return true;
      }
      return false;
    }
    containerClass() {
      return {
        'p-splitter p-component': true,
        'p-splitter-horizontal': this.layout === 'horizontal',
        'p-splitter-vertical': this.layout === 'vertical'
      };
    }
    panelContainerClass() {
      return {
        'p-splitter-panel': true,
        'p-splitter-panel-nested': true
      };
    }
    gutterStyle() {
      if (this.horizontal()) return {
        width: this.gutterSize + 'px'
      };else return {
        height: this.gutterSize + 'px'
      };
    }
    horizontal() {
      return this.layout === 'horizontal';
    }
    static ɵfac = function Splitter_Factory(t) {
      return new (t || Splitter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Splitter,
      selectors: [["p-splitter"]],
      contentQueries: function Splitter_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Splitter_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      hostVars: 2,
      hostBindings: function Splitter_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-splitter-panel-nested", ctx.nested);
        }
      },
      inputs: {
        styleClass: "styleClass",
        panelStyleClass: "panelStyleClass",
        style: "style",
        panelStyle: "panelStyle",
        stateStorage: "stateStorage",
        stateKey: "stateKey",
        layout: "layout",
        gutterSize: "gutterSize",
        step: "step",
        minSizes: "minSizes",
        panelSizes: "panelSizes"
      },
      outputs: {
        onResizeEnd: "onResizeEnd",
        onResizeStart: "onResizeStart"
      },
      decls: 3,
      vars: 8,
      consts: [[3, "ngClass", "ngStyle"], ["container", ""], ["ngFor", "", 3, "ngForOf"], ["tabindex", "-1", 3, "ngClass", "ngStyle"], [4, "ngTemplateOutlet"], ["class", "p-splitter-gutter", "role", "separator", "tabindex", "-1", 3, "mousedown", "touchstart", "touchmove", "touchend", 4, "ngIf"], ["role", "separator", "tabindex", "-1", 1, "p-splitter-gutter", 3, "mousedown", "touchstart", "touchmove", "touchend"], ["tabindex", "0", 1, "p-splitter-gutter-handle", 3, "ngStyle", "keyup", "keydown"]],
      template: function Splitter_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Splitter_ng_template_2_Template, 3, 8, "ng-template", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass())("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "splitter")("data-p-gutter-resizing", false)("data-pc-section", "root");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
      styles: ["@layer primeng{.p-splitter{display:flex;flex-wrap:nowrap}.p-splitter-vertical{flex-direction:column}.p-splitter-panel{flex-grow:1}.p-splitter-panel-nested{display:flex;min-width:0}.p-splitter-panel p-splitter{flex-grow:1}.p-splitter-panel .p-splitter{flex-grow:1;border:0 none}.p-splitter-gutter{flex-grow:0;flex-shrink:0;display:flex;align-items:center;justify-content:center;cursor:col-resize}.p-splitter-horizontal.p-splitter-resizing{cursor:col-resize;-webkit-user-select:none;user-select:none}.p-splitter-horizontal>.p-splitter-gutter>.p-splitter-gutter-handle{height:24px;width:100%}.p-splitter-horizontal>.p-splitter-gutter{cursor:col-resize}.p-splitter-vertical.p-splitter-resizing{cursor:row-resize;-webkit-user-select:none;user-select:none}.p-splitter-vertical>.p-splitter-gutter{cursor:row-resize}.p-splitter-vertical>.p-splitter-gutter>.p-splitter-gutter-handle{width:24px;height:100%}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return Splitter;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let SplitterModule = /*#__PURE__*/(() => {
  class SplitterModule {
    static ɵfac = function SplitterModule_Factory(t) {
      return new (t || SplitterModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SplitterModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
    });
  }
  return SplitterModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-splitter.mjs.map

/***/ })

}]);