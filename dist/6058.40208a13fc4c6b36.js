"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[6058],{

/***/ 36058:
/*!********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-knob.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KNOB_VALUE_ACCESSOR: () => (/* binding */ KNOB_VALUE_ACCESSOR),
/* harmony export */   Knob: () => (/* binding */ Knob),
/* harmony export */   KnobModule: () => (/* binding */ KnobModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 56223);





function Knob__svg_text_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "text", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("x", 50)("y", 57)("fill", ctx_r0.textColor)("name", ctx_r0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.valueToDisplay());
  }
}
const KNOB_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => Knob),
  multi: true
};
/**
 * Knob is a form component to define number inputs with a dial.
 * @group Components
 */
let Knob = /*#__PURE__*/(() => {
  class Knob {
    document;
    renderer;
    cd;
    el;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel;
    /**
     * Specifies one or more IDs in the DOM that labels the input field.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex = 0;
    /**
     * Background of the value.
     * @group Props
     */
    valueColor = 'var(--primary-color, Black)';
    /**
     * Background color of the range.
     * @group Props
     */
    rangeColor = 'var(--surface-border, LightGray)';
    /**
     * Color of the value text.
     * @group Props
     */
    textColor = 'var(--text-color-secondary, Black)';
    /**
     * Template string of the value.
     * @group Props
     */
    valueTemplate = '{value}';
    /**
     * Name of the input element.
     * @group Props
     */
    name;
    /**
     * Size of the component in pixels.
     * @group Props
     */
    size = 100;
    /**
     * Step factor to increment/decrement the value.
     * @group Props
     */
    step = 1;
    /**
     * Mininum boundary value.
     * @group Props
     */
    min = 0;
    /**
     * Maximum boundary value.
     * @group Props
     */
    max = 100;
    /**
     * Width of the knob stroke.
     * @group Props
     */
    strokeWidth = 14;
    /**
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    disabled;
    /**
     * Whether the show the value inside the knob.
     * @group Props
     */
    showValue = true;
    /**
     * When present, it specifies that the component value cannot be edited.
     * @group Props
     */
    readonly = false;
    /**
     * Callback to invoke on value change.
     * @param {number} value - New value.
     * @group Emits
     */
    onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    radius = 40;
    midX = 50;
    midY = 50;
    minRadians = 4 * Math.PI / 3;
    maxRadians = -Math.PI / 3;
    value = 0;
    windowMouseMoveListener;
    windowMouseUpListener;
    windowTouchMoveListener;
    windowTouchEndListener;
    onModelChange = () => {};
    onModelTouched = () => {};
    constructor(document, renderer, cd, el) {
      this.document = document;
      this.renderer = renderer;
      this.cd = cd;
      this.el = el;
    }
    mapRange(x, inMin, inMax, outMin, outMax) {
      return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
    onClick(event) {
      if (!this.disabled && !this.readonly) {
        this.updateValue(event.offsetX, event.offsetY);
      }
    }
    updateValue(offsetX, offsetY) {
      let dx = offsetX - this.size / 2;
      let dy = this.size / 2 - offsetY;
      let angle = Math.atan2(dy, dx);
      let start = -Math.PI / 2 - Math.PI / 6;
      this.updateModel(angle, start);
    }
    updateModel(angle, start) {
      let mappedValue;
      if (angle > this.maxRadians) mappedValue = this.mapRange(angle, this.minRadians, this.maxRadians, this.min, this.max);else if (angle < start) mappedValue = this.mapRange(angle + 2 * Math.PI, this.minRadians, this.maxRadians, this.min, this.max);else return;
      let newValue = Math.round((mappedValue - this.min) / this.step) * this.step + this.min;
      this.value = newValue;
      this.onModelChange(this.value);
      this.onChange.emit(this.value);
    }
    onMouseDown(event) {
      if (!this.disabled && !this.readonly) {
        const window = this.document.defaultView || 'window';
        this.windowMouseMoveListener = this.renderer.listen(window, 'mousemove', this.onMouseMove.bind(this));
        this.windowMouseUpListener = this.renderer.listen(window, 'mouseup', this.onMouseUp.bind(this));
        event.preventDefault();
      }
    }
    onMouseUp(event) {
      if (!this.disabled && !this.readonly) {
        if (this.windowMouseMoveListener) {
          this.windowMouseMoveListener();
          this.windowMouseUpListener = null;
        }
        if (this.windowMouseUpListener) {
          this.windowMouseUpListener();
          this.windowMouseMoveListener = null;
        }
        event.preventDefault();
      }
    }
    onTouchStart(event) {
      if (!this.disabled && !this.readonly) {
        const window = this.document.defaultView || 'window';
        this.windowTouchMoveListener = this.renderer.listen(window, 'touchmove', this.onTouchMove.bind(this));
        this.windowTouchEndListener = this.renderer.listen(window, 'touchend', this.onTouchEnd.bind(this));
        event.preventDefault();
      }
    }
    onTouchEnd(event) {
      if (!this.disabled && !this.readonly) {
        if (this.windowTouchMoveListener) {
          this.windowTouchMoveListener();
        }
        if (this.windowTouchEndListener) {
          this.windowTouchEndListener();
        }
        this.windowTouchMoveListener = null;
        this.windowTouchEndListener = null;
        event.preventDefault();
      }
    }
    onMouseMove(event) {
      if (!this.disabled && !this.readonly) {
        this.updateValue(event.offsetX, event.offsetY);
        event.preventDefault();
      }
    }
    onTouchMove(event) {
      if (!this.disabled && !this.readonly && event instanceof TouchEvent && event.touches.length === 1) {
        const rect = this.el.nativeElement.children[0].getBoundingClientRect();
        const touch = event.targetTouches.item(0);
        if (touch) {
          const offsetX = touch.clientX - rect.left;
          const offsetY = touch.clientY - rect.top;
          this.updateValue(offsetX, offsetY);
        }
      }
    }
    updateModelValue(newValue) {
      if (newValue > this.max) this.value = this.max;else if (newValue < this.min) this.value = this.min;else this.value = newValue;
      this.onModelChange(this.value);
      this.onChange.emit(this.value);
    }
    onKeyDown(event) {
      if (!this.disabled && !this.readonly) {
        switch (event.code) {
          case 'ArrowRight':
          case 'ArrowUp':
            {
              event.preventDefault();
              this.updateModelValue(this._value + 1);
              break;
            }
          case 'ArrowLeft':
          case 'ArrowDown':
            {
              event.preventDefault();
              this.updateModelValue(this._value - 1);
              break;
            }
          case 'Home':
            {
              event.preventDefault();
              this.updateModelValue(this.min);
              break;
            }
          case 'End':
            {
              event.preventDefault();
              this.updateModelValue(this.max);
              break;
            }
          case 'PageUp':
            {
              event.preventDefault();
              this.updateModelValue(this._value + 10);
              break;
            }
          case 'PageDown':
            {
              event.preventDefault();
              this.updateModelValue(this._value - 10);
              break;
            }
        }
      }
    }
    writeValue(value) {
      this.value = value;
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
    containerClass() {
      return {
        'p-knob p-component': true,
        'p-disabled': this.disabled
      };
    }
    rangePath() {
      return `M ${this.minX()} ${this.minY()} A ${this.radius} ${this.radius} 0 1 1 ${this.maxX()} ${this.maxY()}`;
    }
    valuePath() {
      return `M ${this.zeroX()} ${this.zeroY()} A ${this.radius} ${this.radius} 0 ${this.largeArc()} ${this.sweep()} ${this.valueX()} ${this.valueY()}`;
    }
    zeroRadians() {
      if (this.min > 0 && this.max > 0) return this.mapRange(this.min, this.min, this.max, this.minRadians, this.maxRadians);else return this.mapRange(0, this.min, this.max, this.minRadians, this.maxRadians);
    }
    valueRadians() {
      return this.mapRange(this._value, this.min, this.max, this.minRadians, this.maxRadians);
    }
    minX() {
      return this.midX + Math.cos(this.minRadians) * this.radius;
    }
    minY() {
      return this.midY - Math.sin(this.minRadians) * this.radius;
    }
    maxX() {
      return this.midX + Math.cos(this.maxRadians) * this.radius;
    }
    maxY() {
      return this.midY - Math.sin(this.maxRadians) * this.radius;
    }
    zeroX() {
      return this.midX + Math.cos(this.zeroRadians()) * this.radius;
    }
    zeroY() {
      return this.midY - Math.sin(this.zeroRadians()) * this.radius;
    }
    valueX() {
      return this.midX + Math.cos(this.valueRadians()) * this.radius;
    }
    valueY() {
      return this.midY - Math.sin(this.valueRadians()) * this.radius;
    }
    largeArc() {
      return Math.abs(this.zeroRadians() - this.valueRadians()) < Math.PI ? 0 : 1;
    }
    sweep() {
      return this.valueRadians() > this.zeroRadians() ? 0 : 1;
    }
    valueToDisplay() {
      return this.valueTemplate.replace('{value}', this._value.toString());
    }
    get _value() {
      return this.value != null ? this.value : this.min;
    }
    static ɵfac = function Knob_Factory(t) {
      return new (t || Knob)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Knob,
      selectors: [["p-knob"]],
      hostAttrs: [1, "p-element"],
      inputs: {
        styleClass: "styleClass",
        style: "style",
        ariaLabel: "ariaLabel",
        ariaLabelledBy: "ariaLabelledBy",
        tabindex: "tabindex",
        valueColor: "valueColor",
        rangeColor: "rangeColor",
        textColor: "textColor",
        valueTemplate: "valueTemplate",
        name: "name",
        size: "size",
        step: "step",
        min: "min",
        max: "max",
        strokeWidth: "strokeWidth",
        disabled: "disabled",
        showValue: "showValue",
        readonly: "readonly"
      },
      outputs: {
        onChange: "onChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([KNOB_VALUE_ACCESSOR])],
      decls: 5,
      vars: 24,
      consts: [[3, "ngClass", "ngStyle"], ["viewBox", "0 0 100 100", "role", "slider", 3, "click", "keydown", "mousedown", "mouseup", "touchstart", "touchend"], [1, "p-knob-range"], [1, "p-knob-value"], ["text-anchor", "middle", "class", "p-knob-text", 4, "ngIf"], ["text-anchor", "middle", 1, "p-knob-text"]],
      template: function Knob_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Knob_Template__svg_svg_click_1_listener($event) {
            return ctx.onClick($event);
          })("keydown", function Knob_Template__svg_svg_keydown_1_listener($event) {
            return ctx.onKeyDown($event);
          })("mousedown", function Knob_Template__svg_svg_mousedown_1_listener($event) {
            return ctx.onMouseDown($event);
          })("mouseup", function Knob_Template__svg_svg_mouseup_1_listener($event) {
            return ctx.onMouseUp($event);
          })("touchstart", function Knob_Template__svg_svg_touchstart_1_listener($event) {
            return ctx.onTouchStart($event);
          })("touchend", function Knob_Template__svg_svg_touchend_1_listener($event) {
            return ctx.onTouchEnd($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2)(3, "path", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Knob__svg_text_4_Template, 2, 5, "text", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass())("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "knob")("data-pc-section", "root");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.size + "px")("height", ctx.size + "px");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuemin", ctx.min)("aria-valuemax", ctx.max)("aria-valuenow", ctx._value)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("tabindex", ctx.readonly || ctx.disabled ? -1 : ctx.tabindex)("data-pc-section", "svg");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", ctx.rangePath())("stroke-width", ctx.strokeWidth)("stroke", ctx.rangeColor);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", ctx.valuePath())("stroke-width", ctx.strokeWidth)("stroke", ctx.valueColor);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showValue);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
      styles: ["@keyframes dash-frame{to{stroke-dashoffset:0}}@layer primeng{.p-knob-range{fill:none;transition:stroke .1s ease-in}.p-knob-value{animation-name:dash-frame;animation-fill-mode:forwards;fill:none}.p-knob-text{font-size:1.3rem;text-align:center}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return Knob;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let KnobModule = /*#__PURE__*/(() => {
  class KnobModule {
    static ɵfac = function KnobModule_Factory(t) {
      return new (t || KnobModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: KnobModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
    });
  }
  return KnobModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-knob.mjs.map

/***/ })

}]);