"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[6868],{

/***/ 63619:
/*!****************************************************!*\
  !*** ./src/app/auth/login/login-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginRoutingModule: () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 87285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 65879);




let LoginRoutingModule = /*#__PURE__*/(() => {
  class LoginRoutingModule {
    static #_ = this.ɵfac = function LoginRoutingModule_Factory(t) {
      return new (t || LoginRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LoginRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
  return LoginRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 87285:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 59773);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 32013);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/layout/service/app.layout.service */ 43859);
/* harmony import */ var src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/demo/service/auth.service */ 41850);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/password */ 47158);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ 74104);












let LoginComponent = /*#__PURE__*/(() => {
  class LoginComponent {
    constructor(layoutService, auth, msg) {
      this.layoutService = layoutService;
      this.auth = auth;
      this.msg = msg;
      this.valCheck = ['remember'];
      this.getSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    onKeydown(event) {
      if (event.key === 'Enter') {
        this.onLoginSubmit();
      }
    }
    onLoginSubmit() {
      if (!this.email || !this.password) {
        this.msg.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Email or Password cannot be blank'
        });
        return;
      }
      this.auth.getRoute('post', 'authentication', 'login', {
        email: this.email,
        password: this.password
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.getSubscription)).subscribe(data => {
        if (data.success) {
          let decoded = this.auth.decoded(data.token);
          this.auth.storeUserData(data.token, decoded);
          if (this.auth.CurrentlyloggedIn()) {
            this.msg.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Login Successful'
            });
            this.auth.loggingIn(decoded.role);
          }
        } else {
          this.msg.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Login Failed'
          });
        }
      });
    }
    ngOnDestroy() {
      this.getSubscription.unsubscribe();
    }
    static #_ = this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_demo_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService])],
      decls: 20,
      vars: 5,
      consts: [[1, "surface-ground", "flex", "align-items-center", "justify-content-center", "min-h-screen", "min-w-screen", "overflow-hidden"], [1, "flex", "flex-column", "align-items-center", "justify-content-center"], ["alt", "Sakai logo", 1, "mb-5", "w-10rem", "flex-shrink-0", 3, "src"], [2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(\n                    180deg,\n                    var(--primary-color) 10%,\n                    rgba(33, 150, 243, 0) 30%\n                )"], [1, "w-full", "surface-card", "py-8", "px-5", "sm:px-8", 2, "border-radius", "53px"], [1, "text-center", "mb-5"], [1, "text-900", "text-3xl", "font-medium", "mb-3"], [1, "text-600", "font-medium"], ["for", "email", 1, "block", "text-900", "text-xl", "font-medium", "mb-2"], ["id", "email", "type", "text", "placeholder", "Email address", "pInputText", "", 1, "w-full", "md:w-30rem", "mb-5", 2, "padding", "1rem", 3, "ngModel", "ngModelChange", "keydown"], ["for", "password1", 1, "block", "text-900", "font-medium", "text-xl", "mb-2"], ["id", "password1", "placeholder", "Password", "styleClass", "mb-5", "inputStyleClass", "w-full p-3 md:w-30rem", 3, "ngModel", "toggleMask", "feedback", "ngModelChange", "keydown"], [1, "flex", "align-items-center", "justify-content-between", "mb-5", "gap-5"], ["pButton", "", "pRipple", "", "label", "Sign In", 1, "w-full", "p-3", "text-xl", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "p-toast");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Institutional Dashboard Monitoring ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Sign in to continue");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div")(12, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.email = $event;
          })("keydown", function LoginComponent_Template_input_keydown_14_listener($event) {
            return ctx.onKeydown($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p-password", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_p_password_ngModelChange_17_listener($event) {
            return ctx.password = $event;
          })("keydown", function LoginComponent_Template_p_password_keydown_17_listener($event) {
            return ctx.onKeydown($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_19_listener() {
            return ctx.onLoginSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "assets/layout/images/", ctx.layoutService.config().colorScheme === "light" ? "logo" : "logo", ".png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.password)("toggleMask", true)("feedback", false);
        }
      },
      dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, primeng_password__WEBPACK_IMPORTED_MODULE_9__.Password, primeng_toast__WEBPACK_IMPORTED_MODULE_10__.Toast],
      styles: ["[_nghost-%COMP%]     .pi-eye, [_nghost-%COMP%]     .pi-eye-slash {\n  transform: scale(1.6);\n  margin-right: 1rem;\n  color: var(--primary-color) !important;\n}"]
    });
  }
  return LoginComponent;
})();

/***/ }),

/***/ 96868:
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginModule: () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 63619);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ 87285);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/checkbox */ 38057);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/password */ 47158);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ 60703);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ 74104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);












let LoginModule = /*#__PURE__*/(() => {
  class LoginModule {
    static #_ = this.ɵfac = function LoginModule_Factory(t) {
      return new (t || LoginModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: LoginModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__.JwtModule],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__.CheckboxModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, primeng_password__WEBPACK_IMPORTED_MODULE_10__.PasswordModule, primeng_toast__WEBPACK_IMPORTED_MODULE_11__.ToastModule]
    });
  }
  return LoginModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginModule, {
    declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_7__.CheckboxModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, primeng_password__WEBPACK_IMPORTED_MODULE_10__.PasswordModule, primeng_toast__WEBPACK_IMPORTED_MODULE_11__.ToastModule]
  });
})();

/***/ })

}]);