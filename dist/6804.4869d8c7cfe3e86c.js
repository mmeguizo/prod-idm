"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[6804],{

/***/ 46804:
/*!****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-togglebutton.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TOGGLEBUTTON_VALUE_ACCESSOR: () => (/* binding */ TOGGLEBUTTON_VALUE_ACCESSOR),
/* harmony export */   ToggleButton: () => (/* binding */ ToggleButton),
/* harmony export */   ToggleButtonModule: () => (/* binding */ ToggleButtonModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 44480);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 85219);








const _c0 = (a1, a2) => ({
  "p-button-icon": true,
  "p-button-icon-left": a1,
  "p-button-icon-right": a2
});
function ToggleButton_Conditional_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.checked ? ctx_r3.onIcon : ctx_r3.offIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r3.iconPos === "left", ctx_r3.iconPos === "right"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "icon");
  }
}
function ToggleButton_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToggleButton_Conditional_1_span_0_Template, 1, 7, "span", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.onIcon || ctx_r0.offIcon);
  }
}
function ToggleButton_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c1 = a0 => ({
  $implicit: a0
});
function ToggleButton_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToggleButton_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 5);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.iconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r1.checked));
  }
}
function ToggleButton_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.checked ? ctx_r2.hasOnLabel ? ctx_r2.onLabel : "" : ctx_r2.hasOffLabel ? ctx_r2.offLabel : "");
  }
}
const _c2 = (a1, a2, a3) => ({
  "p-button p-togglebutton p-component": true,
  "p-button-icon-only": a1,
  "p-highlight": a2,
  "p-disabled": a3
});
const TOGGLEBUTTON_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => ToggleButton),
  multi: true
};
/**
 * ToggleButton is used to select a boolean value using a button.
 * @group Components
 */
let ToggleButton = /*#__PURE__*/(() => {
  class ToggleButton {
    cd;
    /**
     * Label for the on state.
     * @group Props
     */
    onLabel;
    /**
     * Label for the off state.
     * @group Props
     */
    offLabel;
    /**
     * Icon for the on state.
     * @group Props
     */
    onIcon;
    /**
     * Icon for the off state.
     * @group Props
     */
    offIcon;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    disabled;
    /**
     * Inline style of the element.
     * @group Props
     */
    style;
    /**
     * Style class of the element.
     * @group Props
     */
    styleClass;
    /**
     * Identifier of the focus input to match a label defined for the component.
     * @group Props
     */
    inputId;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex;
    /**
     * Position of the icon.
     * @group Props
     */
    iconPos = 'left';
    /**
     * Callback to invoke on value change.
     * @param {ToggleButtonChangeEvent} event - Custom change event.
     * @group Emits
     */
    onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    templates;
    iconTemplate;
    checked = false;
    onModelChange = () => {};
    onModelTouched = () => {};
    constructor(cd) {
      this.cd = cd;
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'icon':
            this.iconTemplate = item.template;
            break;
          default:
            this.iconTemplate = item.template;
            break;
        }
      });
    }
    toggle(event) {
      if (!this.disabled) {
        this.checked = !this.checked;
        this.onModelChange(this.checked);
        this.onModelTouched();
        this.onChange.emit({
          originalEvent: event,
          checked: this.checked
        });
        this.cd.markForCheck();
      }
    }
    onKeyDown(event) {
      switch (event.code) {
        case 'Enter':
          this.toggle(event);
          event.preventDefault();
          break;
        case 'Space':
          this.toggle(event);
          event.preventDefault();
          break;
      }
    }
    onBlur() {
      this.onModelTouched();
    }
    writeValue(value) {
      this.checked = value;
      this.cd.markForCheck();
    }
    registerOnChange(fn) {
      this.onModelChange = fn;
    }
    registerOnTouched(fn) {
      this.onModelTouched = fn;
    }
    setDisabledState(val) {
      this.disabled = val;
      this.cd.markForCheck();
    }
    get hasOnLabel() {
      return this.onLabel && this.onLabel.length > 0;
    }
    get hasOffLabel() {
      return this.onLabel && this.onLabel.length > 0;
    }
    static ɵfac = function ToggleButton_Factory(t) {
      return new (t || ToggleButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToggleButton,
      selectors: [["p-toggleButton"]],
      contentQueries: function ToggleButton_ContentQueries(rf, ctx, dirIndex) {
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
        onLabel: "onLabel",
        offLabel: "offLabel",
        onIcon: "onIcon",
        offIcon: "offIcon",
        ariaLabel: "ariaLabel",
        ariaLabelledBy: "ariaLabelledBy",
        disabled: "disabled",
        style: "style",
        styleClass: "styleClass",
        inputId: "inputId",
        tabindex: "tabindex",
        iconPos: "iconPos"
      },
      outputs: {
        onChange: "onChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([TOGGLEBUTTON_VALUE_ACCESSOR])],
      decls: 4,
      vars: 16,
      consts: [["role", "switch", "pRipple", "", 3, "ngClass", "ngStyle", "click", "keydown"], [3, "class", "ngClass"], ["class", "p-button-label", 4, "ngIf"], [3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-button-label"]],
      template: function ToggleButton_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleButton_Template_div_click_0_listener($event) {
            return ctx.toggle($event);
          })("keydown", function ToggleButton_Template_div_keydown_0_listener($event) {
            return ctx.onKeyDown($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToggleButton_Conditional_1_Template, 1, 1, "span", 1)(2, ToggleButton_Conditional_2_Template, 1, 4)(3, ToggleButton_span_3_Template, 2, 2, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](12, _c2, ctx.onIcon && ctx.offIcon && !ctx.hasOnLabel && !ctx.hasOffLabel, ctx.checked, ctx.disabled))("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.disabled ? null : "0")("aria-checked", ctx.checked)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("data-pc-name", "togglebutton")("data-pc-section", "root");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](1, !ctx.iconTemplate ? 1 : 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onLabel || ctx.offLabel);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple],
      styles: ["@layer primeng{.p-button[_ngcontent-%COMP%]{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label[_ngcontent-%COMP%]{flex:1 1 auto}.p-button-icon-right[_ngcontent-%COMP%]{order:1}.p-button[_ngcontent-%COMP%]:disabled{cursor:default;pointer-events:none}.p-button-icon-only[_ngcontent-%COMP%]{justify-content:center}.p-button-icon-only[_ngcontent-%COMP%]:after{content:\"p\";visibility:hidden;clip:rect(0 0 0 0);width:0}.p-button-vertical[_ngcontent-%COMP%]{flex-direction:column}.p-button-icon-bottom[_ngcontent-%COMP%]{order:2}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]{margin:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:last-child){border-right:0 none}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:first-of-type{border-top-right-radius:0;border-bottom-right-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:last-of-type{border-top-left-radius:0;border-bottom-left-radius:0}.p-buttonset[_ngcontent-%COMP%]   .p-button[_ngcontent-%COMP%]:focus{position:relative;z-index:1}p-button[iconpos=right][_ngcontent-%COMP%]   spinnericon[_ngcontent-%COMP%]{order:1}}"],
      changeDetection: 0
    });
  }
  return ToggleButton;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ToggleButtonModule = /*#__PURE__*/(() => {
  class ToggleButtonModule {
    static ɵfac = function ToggleButtonModule_Factory(t) {
      return new (t || ToggleButtonModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ToggleButtonModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.RippleModule, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
    });
  }
  return ToggleButtonModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-togglebutton.mjs.map

/***/ })

}]);