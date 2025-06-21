"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[1913],{

/***/ 81913:
/*!**************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-styleclass.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyleClass: () => (/* binding */ StyleClass),
/* harmony export */   StyleClassModule: () => (/* binding */ StyleClassModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/dom */ 82076);





/**
 * StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element.
 * @group Components
 */
let StyleClass = /*#__PURE__*/(() => {
  class StyleClass {
    el;
    renderer;
    zone;
    constructor(el, renderer, zone) {
      this.el = el;
      this.renderer = renderer;
      this.zone = zone;
    }
    /**
     * Selector to define the target element. Available selectors are '@next', '@prev', '@parent' and '@grandparent'.
     * @group Props
     */
    selector;
    /**
     * Style class to add when item begins to get displayed.
     * @group Props
     * @deprecated Use enterFromClass instead
     */
    set enterClass(value) {
      this._enterClass = value;
      console.warn('enterClass is deprecated, use enterFromClass instead');
    }
    get enterClass() {
      return this._enterClass;
    }
    /**
     * Style class to add when item begins to get displayed.
     * @group Props
     */
    enterFromClass;
    /**
     * Style class to add during enter animation.
     * @group Props
     */
    enterActiveClass;
    /**
     * Style class to add when item begins to get displayed.
     * @group Props
     */
    enterToClass;
    /**
     * Style class to add when item begins to get hidden.
     * @group Props
     * @deprecated Use leaveFromClass instead
     */
    set leaveClass(value) {
      this._leaveClass = value;
      console.warn('leaveClass is deprecated, use leaveFromClass instead');
    }
    get leaveClass() {
      return this._leaveClass;
    }
    /**
     * Style class to add when item begins to get hidden.
     * @group Props
     */
    leaveFromClass;
    /**
     * Style class to add during leave animation.
     * @group Props
     */
    leaveActiveClass;
    /**
     * Style class to add when leave animation is completed.
     * @group Props
     */
    leaveToClass;
    /**
     * Whether to trigger leave animation when outside of the element is clicked.
     * @group Props
     */
    hideOnOutsideClick;
    /**
     * Adds or removes a class when no enter-leave animation is required.
     * @group Props
     */
    toggleClass;
    /**
     * Whether to trigger leave animation when escape key pressed.
     * @group Props
     */
    hideOnEscape;
    eventListener;
    documentClickListener;
    documentKeydownListener;
    target;
    enterListener;
    leaveListener;
    animating;
    _enterClass;
    _leaveClass;
    clickListener() {
      this.target = this.resolveTarget();
      if (this.toggleClass) {
        this.toggle();
      } else {
        if (this.target.offsetParent === null) this.enter();else this.leave();
      }
    }
    toggle() {
      if (primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.hasClass(this.target, this.toggleClass)) primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.removeClass(this.target, this.toggleClass);else primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.addClass(this.target, this.toggleClass);
    }
    enter() {
      if (this.enterActiveClass) {
        if (!this.animating) {
          this.animating = true;
          if (this.enterActiveClass === 'slidedown') {
            this.target.style.height = '0px';
            primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.removeClass(this.target, 'hidden');
            this.target.style.maxHeight = this.target.scrollHeight + 'px';
            primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.addClass(this.target, 'hidden');
            this.target.style.height = '';
          }
          primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.addClass(this.target, this.enterActiveClass);
          if (this.enterClass || this.enterFromClass) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.removeClass(this.target, this.enterClass || this.enterFromClass);
          }
          this.enterListener = this.renderer.listen(this.target, 'animationend', () => {
            primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.removeClass(this.target, this.enterActiveClass);
            if (this.enterToClass) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.addClass(this.target, this.enterToClass);
            }
            this.enterListener && this.enterListener();
            if (this.enterActiveClass === 'slidedown') {
              this.target.style.maxHeight = '';
            }
            this.animating = false;
          });
        }
      } else {
        if (this.enterClass || this.enterFromClass) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.removeClass(this.target, this.enterClass || this.enterFromClass);
        }
        if (this.enterToClass) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.addClass(this.target, this.enterToClass);
        }
      }
      if (this.hideOnOutsideClick) {
        this.bindDocumentClickListener();
      }
      if (this.hideOnEscape) {
        this.bindDocumentKeydownListener();
      }
    }
    leave() {
      if (this.leaveActiveClass) {
        if (!this.animating) {
          this.animating = true;
          primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.addClass(this.target, this.leaveActiveClass);
          if (this.leaveClass || this.leaveFromClass) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.removeClass(this.target, this.leaveClass || this.leaveFromClass);
          }
          this.leaveListener = this.renderer.listen(this.target, 'animationend', () => {
            primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.removeClass(this.target, this.leaveActiveClass);
            if (this.leaveToClass) {
              primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.addClass(this.target, this.leaveToClass);
            }
            this.leaveListener && this.leaveListener();
            this.animating = false;
          });
        }
      } else {
        if (this.leaveClass || this.leaveFromClass) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.removeClass(this.target, this.leaveClass || this.leaveFromClass);
        }
        if (this.leaveToClass) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_0__.DomHandler.addClass(this.target, this.leaveToClass);
        }
      }
      if (this.hideOnOutsideClick) {
        this.unbindDocumentClickListener();
      }
      if (this.hideOnEscape) {
        this.unbindDocumentKeydownListener();
      }
    }
    resolveTarget() {
      if (this.target) {
        return this.target;
      }
      switch (this.selector) {
        case '@next':
          return this.el.nativeElement.nextElementSibling;
        case '@prev':
          return this.el.nativeElement.previousElementSibling;
        case '@parent':
          return this.el.nativeElement.parentElement;
        case '@grandparent':
          return this.el.nativeElement.parentElement.parentElement;
        default:
          return document.querySelector(this.selector);
      }
    }
    bindDocumentClickListener() {
      if (!this.documentClickListener) {
        this.documentClickListener = this.renderer.listen(this.el.nativeElement.ownerDocument, 'click', event => {
          if (!this.isVisible() || getComputedStyle(this.target).getPropertyValue('position') === 'static') this.unbindDocumentClickListener();else if (this.isOutsideClick(event)) this.leave();
        });
      }
    }
    bindDocumentKeydownListener() {
      if (!this.documentKeydownListener) {
        this.zone.runOutsideAngular(() => {
          this.documentKeydownListener = this.renderer.listen(this.el.nativeElement.ownerDocument, 'keydown', event => {
            const {
              key,
              keyCode,
              which,
              type
            } = event;
            if (!this.isVisible() || getComputedStyle(this.target).getPropertyValue('position') === 'static') this.unbindDocumentKeydownListener();
            if (this.isVisible() && key === 'Escape' && keyCode === 27 && which === 27) this.leave();
          });
        });
      }
    }
    isVisible() {
      return this.target.offsetParent !== null;
    }
    isOutsideClick(event) {
      return !this.el.nativeElement.isSameNode(event.target) && !this.el.nativeElement.contains(event.target) && !this.target.contains(event.target);
    }
    unbindDocumentClickListener() {
      if (this.documentClickListener) {
        this.documentClickListener();
        this.documentClickListener = null;
      }
    }
    unbindDocumentKeydownListener() {
      if (this.documentKeydownListener) {
        this.documentKeydownListener();
        this.documentKeydownListener = null;
      }
    }
    ngOnDestroy() {
      this.target = null;
      if (this.eventListener) {
        this.eventListener();
      }
      this.unbindDocumentClickListener();
      this.unbindDocumentKeydownListener();
    }
    static ɵfac = function StyleClass_Factory(t) {
      return new (t || StyleClass)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: StyleClass,
      selectors: [["", "pStyleClass", ""]],
      hostAttrs: [1, "p-element"],
      hostBindings: function StyleClass_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StyleClass_click_HostBindingHandler($event) {
            return ctx.clickListener($event);
          });
        }
      },
      inputs: {
        selector: ["pStyleClass", "selector"],
        enterClass: "enterClass",
        enterFromClass: "enterFromClass",
        enterActiveClass: "enterActiveClass",
        enterToClass: "enterToClass",
        leaveClass: "leaveClass",
        leaveFromClass: "leaveFromClass",
        leaveActiveClass: "leaveActiveClass",
        leaveToClass: "leaveToClass",
        hideOnOutsideClick: "hideOnOutsideClick",
        toggleClass: "toggleClass",
        hideOnEscape: "hideOnEscape"
      }
    });
  }
  return StyleClass;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let StyleClassModule = /*#__PURE__*/(() => {
  class StyleClassModule {
    static ɵfac = function StyleClassModule_Factory(t) {
      return new (t || StyleClassModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: StyleClassModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
    });
  }
  return StyleClassModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-styleclass.mjs.map

/***/ })

}]);