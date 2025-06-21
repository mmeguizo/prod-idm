"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[7025],{

/***/ 976:
/*!***********************************************************************************!*\
  !*** ./src/app/demo/components/uikit/formlayout/formlayoutdemo-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormLayoutDemoRoutingModule: () => (/* binding */ FormLayoutDemoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var _formlayoutdemo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formlayoutdemo.component */ 36472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 65879);




let FormLayoutDemoRoutingModule = /*#__PURE__*/(() => {
  class FormLayoutDemoRoutingModule {
    static #_ = this.ɵfac = function FormLayoutDemoRoutingModule_Factory(t) {
      return new (t || FormLayoutDemoRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: FormLayoutDemoRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
        path: '',
        component: _formlayoutdemo_component__WEBPACK_IMPORTED_MODULE_0__.FormLayoutDemoComponent
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
  return FormLayoutDemoRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FormLayoutDemoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 36472:
/*!******************************************************************************!*\
  !*** ./src/app/demo/components/uikit/formlayout/formlayoutdemo.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormLayoutDemoComponent: () => (/* binding */ FormLayoutDemoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dropdown */ 53965);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtextarea */ 96218);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 96814);







let FormLayoutDemoComponent = /*#__PURE__*/(() => {
  class FormLayoutDemoComponent {
    constructor() {
      this.selectedState = null;
      this.states = [{
        name: 'Arizona',
        code: 'Arizona'
      }, {
        name: 'California',
        value: 'California'
      }, {
        name: 'Florida',
        code: 'Florida'
      }, {
        name: 'Ohio',
        code: 'Ohio'
      }, {
        name: 'Washington',
        code: 'Washington'
      }];
      this.dropdownItems = [{
        name: 'Option OptionOptionOptionOption',
        code: 'Option OptionOptionOptionOption'
      }, {
        name: 'Option 2',
        code: 'Option 2'
      }, {
        name: 'Option 3',
        code: 'Option 3'
      }];
      this.cities1 = [];
      this.cities2 = [];
      this.city1 = null;
      this.city2 = null;
    }
    static #_ = this.ɵfac = function FormLayoutDemoComponent_Factory(t) {
      return new (t || FormLayoutDemoComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormLayoutDemoComponent,
      selectors: [["ng-component"]],
      decls: 96,
      vars: 5,
      consts: [[1, "grid"], [1, "col-12", "md:col-6"], [1, "card", "p-fluid"], [1, "field"], ["htmlFor", "name1"], ["pInputText", "", "id", "name1", "type", "text"], ["htmlFor", "email1"], ["pInputText", "", "id", "email1", "type", "text"], ["htmlFor", "age1"], ["pInputText", "", "id", "age1", "type", "text"], [1, "p-formgrid", "grid"], [1, "field", "col"], ["htmlFor", "name2"], ["pInputText", "", "id", "name2", "type", "text"], ["htmlFor", "email2"], ["pInputText", "", "id", "email2", "type", "text"], [1, "field", "grid"], ["htmlFor", "name3", 1, "col-12", "mb-2", "md:col-2", "md:mb-0"], [1, "col-12", "md:col-10"], ["pInputText", "", "id", "name3", "type", "text"], ["htmlFor", "email3", 1, "col-12", "mb-2", "md:col-2", "md:mb-0"], ["pInputText", "", "id", "email3", "type", "text"], [1, "card"], [1, "formgroup-inline"], ["htmlFor", "firstname1", 1, "p-sr-only"], ["pInputText", "", "id", "firstname1", "type", "text", "placeholder", "Firstname"], ["htmlFor", "lastname1", 1, "p-sr-only"], ["pInputText", "", "id", "lastname1", "type", "text", "placeholder", "Lastname"], ["pButton", "", "label", "Submit"], [1, "field", "p-fluid"], ["htmlFor", "username"], ["pInputText", "", "id", "username", "type", "text"], [1, "col-12"], [1, "p-fluid", "p-formgrid", "grid"], [1, "field", "col-12", "md:col-6"], ["htmlFor", "firstname2"], ["pInputText", "", "id", "firstname2", "type", "text"], ["htmlFor", "lastname2"], ["pInputText", "", "id", "lastname2", "type", "text"], [1, "field", "col-12"], ["htmlFor", "address"], ["pInputTextarea", "", "id", "address", "rows", "4"], ["htmlFor", "city"], ["pInputText", "", "id", "city", "type", "text"], [1, "field", "col-12", "md:col-3"], ["htmlFor", "state"], ["optionLabel", "name", 3, "options", "ngModel", "ngModelChange"], ["htmlFor", "zip"], ["pInputText", "", "id", "zip", "type", "text"]],
      template: function FormLayoutDemoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vertical");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3)(10, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3)(14, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Age");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2)(18, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Vertical Grid");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10)(21, "div", 11)(22, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11)(26, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1)(30, "div", 2)(31, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Horizontal");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16)(34, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16)(39, "label", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22)(44, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Inline");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23)(47, "div", 3)(48, "label", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Firstname");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 3)(52, "label", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Lastname");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22)(57, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Help Text");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 29)(60, "label", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "small");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Enter your username to reset your password.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 32)(66, "div", 22)(67, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Advanced");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 33)(70, "div", 34)(71, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Firstname");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 34)(75, "label", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Lastname");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 39)(79, "label", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 34)(83, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 44)(87, "label", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "State");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p-dropdown", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormLayoutDemoComponent_Template_p_dropdown_ngModelChange_89_listener($event) {
            return ctx.selectedState = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](91, "json");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 44)(93, "label", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Zip");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](89);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.dropdownItems)("ngModel", ctx.selectedState);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](91, 3, ctx.selectedState), " ");
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__.InputText, primeng_dropdown__WEBPACK_IMPORTED_MODULE_4__.Dropdown, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_5__.InputTextarea, _angular_common__WEBPACK_IMPORTED_MODULE_6__.JsonPipe],
      encapsulation: 2
    });
  }
  return FormLayoutDemoComponent;
})();

/***/ }),

/***/ 57025:
/*!***************************************************************************!*\
  !*** ./src/app/demo/components/uikit/formlayout/formlayoutdemo.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormLayoutDemoModule: () => (/* binding */ FormLayoutDemoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var _formlayoutdemo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formlayoutdemo.component */ 36472);
/* harmony import */ var _formlayoutdemo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formlayoutdemo-routing.module */ 976);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/autocomplete */ 77327);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/calendar */ 78743);
/* harmony import */ var primeng_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/chips */ 31480);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ 53965);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputmask */ 59663);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputnumber */ 75167);
/* harmony import */ var primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/cascadeselect */ 38062);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/multiselect */ 34055);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtextarea */ 96218);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);















let FormLayoutDemoModule = /*#__PURE__*/(() => {
  class FormLayoutDemoModule {
    static #_ = this.ɵfac = function FormLayoutDemoModule_Factory(t) {
      return new (t || FormLayoutDemoModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: FormLayoutDemoModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _formlayoutdemo_routing_module__WEBPACK_IMPORTED_MODULE_1__.FormLayoutDemoRoutingModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_5__.AutoCompleteModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarModule, primeng_chips__WEBPACK_IMPORTED_MODULE_7__.ChipsModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__.DropdownModule, primeng_inputmask__WEBPACK_IMPORTED_MODULE_9__.InputMaskModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__.InputNumberModule, primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_11__.CascadeSelectModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_12__.MultiSelectModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__.InputTextareaModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputTextModule]
    });
  }
  return FormLayoutDemoModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FormLayoutDemoModule, {
    declarations: [_formlayoutdemo_component__WEBPACK_IMPORTED_MODULE_0__.FormLayoutDemoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _formlayoutdemo_routing_module__WEBPACK_IMPORTED_MODULE_1__.FormLayoutDemoRoutingModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_5__.AutoCompleteModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_6__.CalendarModule, primeng_chips__WEBPACK_IMPORTED_MODULE_7__.ChipsModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__.DropdownModule, primeng_inputmask__WEBPACK_IMPORTED_MODULE_9__.InputMaskModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__.InputNumberModule, primeng_cascadeselect__WEBPACK_IMPORTED_MODULE_11__.CascadeSelectModule, primeng_multiselect__WEBPACK_IMPORTED_MODULE_12__.MultiSelectModule, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__.InputTextareaModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputTextModule]
  });
})();

/***/ })

}]);