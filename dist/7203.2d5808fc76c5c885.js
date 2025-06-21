"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[7203],{

/***/ 77327:
/*!****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-autocomplete.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AUTOCOMPLETE_VALUE_ACCESSOR: () => (/* binding */ AUTOCOMPLETE_VALUE_ACCESSOR),
/* harmony export */   AutoComplete: () => (/* binding */ AutoComplete),
/* harmony export */   AutoCompleteModule: () => (/* binding */ AutoCompleteModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/autofocus */ 40218);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 82076);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var primeng_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/overlay */ 95807);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/ripple */ 44480);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/scroller */ 26489);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 2332);
/* harmony import */ var primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/icons/timescircle */ 88468);
/* harmony import */ var primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/icons/spinner */ 78717);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/icons/times */ 77778);
/* harmony import */ var primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/icons/chevrondown */ 76005);
























const _c0 = ["container"];
const _c1 = ["focusInput"];
const _c2 = ["multiIn"];
const _c3 = ["multiContainer"];
const _c4 = ["ddBtn"];
const _c5 = ["items"];
const _c6 = ["scroller"];
const _c7 = ["overlay"];
function AutoComplete_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AutoComplete_input_2_Template_input_input_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.onInput($event));
    })("keydown", function AutoComplete_input_2_Template_input_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.onKeyDown($event));
    })("change", function AutoComplete_input_2_Template_input_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.onInputChange($event));
    })("focus", function AutoComplete_input_2_Template_input_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.onInputFocus($event));
    })("blur", function AutoComplete_input_2_Template_input_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.onInputBlur($event));
    })("paste", function AutoComplete_input_2_Template_input_paste_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.onInputPaste($event));
    })("keyup", function AutoComplete_input_2_Template_input_keyup_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r20.onInputKeyUp($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.inputStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autofocus", ctx_r1.autofocus)("ngClass", ctx_r1.inputClass)("ngStyle", ctx_r1.inputStyle)("type", ctx_r1.type)("autocomplete", ctx_r1.autocomplete)("required", ctx_r1.required)("name", ctx_r1.name)("maxlength", ctx_r1.maxlength)("tabindex", !ctx_r1.disabled ? ctx_r1.tabindex : -1)("readonly", ctx_r1.readonly)("disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("value", ctx_r1.inputValue())("id", ctx_r1.inputId)("placeholder", ctx_r1.placeholder)("size", ctx_r1.size)("aria-label", ctx_r1.ariaLabel)("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-required", ctx_r1.required)("aria-expanded", ctx_r1.overlayVisible)("aria-controls", ctx_r1.id + "_list")("aria-aria-activedescendant", ctx_r1.focused ? ctx_r1.focusedOptionId : undefined);
  }
}
function AutoComplete_ng_container_3_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "TimesIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_ng_container_3_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r23.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-autocomplete-clear-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function AutoComplete_ng_container_3_span_2_1_ng_template_0_Template(rf, ctx) {}
function AutoComplete_ng_container_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AutoComplete_ng_container_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_ng_container_3_span_2_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r27.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_ng_container_3_span_2_1_Template, 1, 0, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r22.clearIconTemplate);
  }
}
function AutoComplete_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_ng_container_3_TimesIcon_1_Template, 1, 2, "TimesIcon", 15)(2, AutoComplete_ng_container_3_span_2_Template, 2, 2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.clearIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.clearIconTemplate);
  }
}
function AutoComplete_ul_4_li_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function AutoComplete_ul_4_li_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r36.getOptionLabel(option_r32));
  }
}
function AutoComplete_ul_4_li_2_TimesCircleIcon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "TimesCircleIcon", 32);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-autocomplete-token-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function AutoComplete_ul_4_li_2_span_6_1_ng_template_0_Template(rf, ctx) {}
function AutoComplete_ul_4_li_2_span_6_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AutoComplete_ul_4_li_2_span_6_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_ul_4_li_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_ul_4_li_2_span_6_1_Template, 1, 0, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r38.removeIconTemplate);
  }
}
const _c8 = a1 => ({
  "p-autocomplete-token": true,
  "p-focus": a1
});
const _c9 = a0 => ({
  $implicit: a0
});
function AutoComplete_ul_4_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_ul_4_li_2_ng_container_2_Template, 1, 0, "ng-container", 26)(3, AutoComplete_ul_4_li_2_span_3_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_ul_4_li_2_Template_span_click_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);
      const i_r33 = restoredCtx.index;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r42.removeOption($event, i_r33));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AutoComplete_ul_4_li_2_TimesCircleIcon_5_Template, 1, 2, "TimesCircleIcon", 29)(6, AutoComplete_ul_4_li_2_span_6_Template, 2, 2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r32 = ctx.$implicit;
    const i_r33 = ctx.index;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c8, ctx_r30.focusedMultipleOptionIndex() === i_r33));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r30.id + "_multiple_option_" + i_r33)("aria-label", ctx_r30.getOptionLabel(option_r32))("aria-setsize", ctx_r30.modelValue().length)("aria-posinset", i_r33 + 1)("aria-selected", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r30.selectedItemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c9, option_r32));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r30.selectedItemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r30.removeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.removeIconTemplate);
  }
}
function AutoComplete_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function AutoComplete_ul_4_Template_ul_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r44.onMultipleContainerFocus($event));
    })("blur", function AutoComplete_ul_4_Template_ul_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r46.onMultipleContainerBlur($event));
    })("keydown", function AutoComplete_ul_4_Template_ul_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r47.onMultipleContainerKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_ul_4_li_2_Template, 7, 15, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 22)(4, "input", 23, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AutoComplete_ul_4_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r48.onInput($event));
    })("keydown", function AutoComplete_ul_4_Template_input_keydown_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r49.onKeyDown($event));
    })("change", function AutoComplete_ul_4_Template_input_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r50.onInputChange($event));
    })("focus", function AutoComplete_ul_4_Template_input_focus_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r51.onInputFocus($event));
    })("blur", function AutoComplete_ul_4_Template_input_blur_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r52.onInputBlur($event));
    })("paste", function AutoComplete_ul_4_Template_input_paste_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r53.onInputPaste($event));
    })("keyup", function AutoComplete_ul_4_Template_input_keyup_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r54.onInputKeyUp($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.multiContainerClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabindex", -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-orientation", "horizontal")("aria-activedescendant", ctx_r3.focused ? ctx_r3.focusedMultipleOptionId : undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.modelValue());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.inputStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autofocus", ctx_r3.autofocus)("ngClass", ctx_r3.inputClass)("ngStyle", ctx_r3.inputStyle)("autocomplete", ctx_r3.autocomplete)("required", ctx_r3.required)("maxlength", ctx_r3.maxlength)("tabindex", !ctx_r3.disabled ? ctx_r3.tabindex : -1)("readonly", ctx_r3.readonly)("disabled", ctx_r3.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("type", ctx_r3.type)("id", ctx_r3.inputId)("name", ctx_r3.name)("placeholder", ctx_r3.placeholder)("size", ctx_r3.size)("aria-label", ctx_r3.ariaLabel)("aria-labelledby", ctx_r3.ariaLabelledBy)("aria-required", ctx_r3.required)("aria-expanded", ctx_r3.overlayVisible)("aria-controls", ctx_r3.id + "_list")("aria-aria-activedescendant", ctx_r3.focused ? ctx_r3.focusedOptionId : undefined);
  }
}
function AutoComplete_ng_container_5_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SpinnerIcon", 36);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-autocomplete-loader")("spin", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function AutoComplete_ng_container_5_span_2_1_ng_template_0_Template(rf, ctx) {}
function AutoComplete_ng_container_5_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AutoComplete_ng_container_5_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_ng_container_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_ng_container_5_span_2_1_Template, 1, 0, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r56.loadingIconTemplate);
  }
}
function AutoComplete_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_ng_container_5_SpinnerIcon_1_Template, 1, 3, "SpinnerIcon", 34)(2, AutoComplete_ng_container_5_span_2_Template, 2, 2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.loadingIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.loadingIconTemplate);
  }
}
function AutoComplete_button_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 41);
  }
  if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r60.dropdownIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function AutoComplete_button_6_ng_container_3_ChevronDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon");
  }
}
function AutoComplete_button_6_ng_container_3_2_ng_template_0_Template(rf, ctx) {}
function AutoComplete_button_6_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AutoComplete_button_6_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AutoComplete_button_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_button_6_ng_container_3_ChevronDownIcon_1_Template, 1, 0, "ChevronDownIcon", 3)(2, AutoComplete_button_6_ng_container_3_2_Template, 1, 0, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r61.dropdownIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r61.dropdownIconTemplate);
  }
}
function AutoComplete_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_button_6_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r65.handleDropdownClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_button_6_span_2_Template, 1, 2, "span", 40)(3, AutoComplete_button_6_ng_container_3_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r5.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r5.dropdownAriaLabel)("tabindex", ctx_r5.tabindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.dropdownIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.dropdownIcon);
  }
}
function AutoComplete_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function AutoComplete_p_scroller_11_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c10 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
function AutoComplete_p_scroller_11_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AutoComplete_p_scroller_11_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 26);
  }
  if (rf & 2) {
    const items_r70 = ctx.$implicit;
    const scrollerOptions_r71 = ctx.options;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r11)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c10, items_r70, scrollerOptions_r71));
  }
}
function AutoComplete_p_scroller_11_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c11 = a0 => ({
  options: a0
});
function AutoComplete_p_scroller_11_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AutoComplete_p_scroller_11_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 26);
  }
  if (rf & 2) {
    const scrollerOptions_r74 = ctx.options;
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r73.loaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c11, scrollerOptions_r74));
  }
}
function AutoComplete_p_scroller_11_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_p_scroller_11_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
const _c12 = a0 => ({
  height: a0
});
function AutoComplete_p_scroller_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-scroller", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onLazyLoad", function AutoComplete_p_scroller_11_Template_p_scroller_onLazyLoad_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r76.onLazyLoad.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_p_scroller_11_ng_template_2_Template, 1, 5, "ng-template", 44)(3, AutoComplete_p_scroller_11_ng_container_3_Template, 2, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c12, ctx_r8.scrollHeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r8.visibleOptions())("itemSize", ctx_r8.virtualScrollItemSize || ctx_r8._itemSize)("autoSize", true)("lazy", ctx_r8.lazy)("options", ctx_r8.virtualScrollOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.loaderTemplate);
  }
}
function AutoComplete_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c13 = () => ({});
function AutoComplete_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_ng_container_12_ng_container_1_Template, 1, 0, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r11)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c10, ctx_r9.visibleOptions(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c13)));
  }
}
function AutoComplete_ng_template_13_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r89.getOptionGroupLabel(option_r85.optionGroup));
  }
}
function AutoComplete_ng_template_13_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function AutoComplete_ng_template_13_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_ng_template_13_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 3)(3, AutoComplete_ng_template_13_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r86 = ctx_r93.index;
    const option_r85 = ctx_r93.$implicit;
    const scrollerOptions_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c12, scrollerOptions_r80.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r87.id + "_" + ctx_r87.getOptionIndex(i_r86, scrollerOptions_r80));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r87.groupTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r87.groupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c9, option_r85.optionGroup));
  }
}
function AutoComplete_ng_template_13_ng_template_2_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r94.getOptionLabel(option_r85));
  }
}
function AutoComplete_ng_template_13_ng_template_2_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c14 = (a0, a1, a2) => ({
  "p-highlight": a0,
  "p-focus": a1,
  "p-disabled": a2
});
const _c15 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function AutoComplete_ng_template_13_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_ng_template_13_ng_template_2_ng_container_1_Template_li_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);
      const option_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r97.onOptionSelect($event, option_r85));
    })("mouseenter", function AutoComplete_ng_template_13_ng_template_2_ng_container_1_Template_li_mouseenter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r99);
      const i_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const scrollerOptions_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r100.onOptionMouseEnter($event, ctx_r100.getOptionIndex(i_r86, scrollerOptions_r80)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_ng_template_13_ng_template_2_ng_container_1_span_2_Template, 2, 1, "span", 3)(3, AutoComplete_ng_template_13_ng_template_2_ng_container_1_ng_container_3_Template, 1, 0, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const option_r85 = ctx_r104.$implicit;
    const i_r86 = ctx_r104.index;
    const scrollerOptions_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c12, scrollerOptions_r80.itemSize + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](14, _c14, ctx_r88.isSelected(option_r85), ctx_r88.focusedOptionIndex() === ctx_r88.getOptionIndex(i_r86, scrollerOptions_r80), ctx_r88.isOptionDisabled(option_r85)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r88.id + "_" + ctx_r88.getOptionIndex(i_r86, scrollerOptions_r80))("aria-label", ctx_r88.getOptionLabel(option_r85))("aria-selected", ctx_r88.isSelected(option_r85))("aria-disabled", ctx_r88.isOptionDisabled(option_r85))("data-p-focused", ctx_r88.focusedOptionIndex() === ctx_r88.getOptionIndex(i_r86, scrollerOptions_r80))("aria-setsize", ctx_r88.ariaSetSize)("aria-posinset", ctx_r88.getAriaPosInset(ctx_r88.getOptionIndex(i_r86, scrollerOptions_r80)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r88.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r88.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c15, option_r85, scrollerOptions_r80.getOptions ? scrollerOptions_r80.getOptions(i_r86) : i_r86));
  }
}
function AutoComplete_ng_template_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AutoComplete_ng_template_13_ng_template_2_ng_container_0_Template, 4, 9, "ng-container", 3)(1, AutoComplete_ng_template_13_ng_template_2_ng_container_1_Template, 4, 21, "ng-container", 3);
  }
  if (rf & 2) {
    const option_r85 = ctx.$implicit;
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r82.isOptionGroup(option_r85));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r82.isOptionGroup(option_r85));
  }
}
function AutoComplete_ng_template_13_li_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r105.searchResultMessageText, " ");
  }
}
function AutoComplete_ng_template_13_li_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 54);
  }
}
function AutoComplete_ng_template_13_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoComplete_ng_template_13_li_3_ng_container_1_Template, 2, 1, "ng-container", 53)(2, AutoComplete_ng_template_13_li_3_ng_container_2_Template, 2, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scrollerOptions_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c12, scrollerOptions_r80.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r83.emptyTemplate)("ngIfElse", ctx_r83.empty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r83.emptyTemplate);
  }
}
function AutoComplete_ng_template_13_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function AutoComplete_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_ng_template_13_ng_template_2_Template, 2, 2, "ng-template", 48)(3, AutoComplete_ng_template_13_li_3_Template, 3, 6, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AutoComplete_ng_template_13_ng_container_4_Template, 1, 0, "ng-container", 26);
  }
  if (rf & 2) {
    const items_r79 = ctx.$implicit;
    const scrollerOptions_r80 = ctx.options;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](scrollerOptions_r80.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", scrollerOptions_r80.contentStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r10.id + "_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !items_r79 || items_r79 && items_r79.length === 0 && ctx_r10.showEmptyMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r10.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c9, items_r79));
  }
}
const AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => AutoComplete),
  multi: true
};
/**
 * AutoComplete is an input component that provides real-time suggestions when being typed.
 * @group Components
 */
let AutoComplete = /*#__PURE__*/(() => {
  class AutoComplete {
    document;
    el;
    renderer;
    cd;
    config;
    overlayService;
    zone;
    /**
     * Minimum number of characters to initiate a search.
     * @group Props
     */
    minLength = 1;
    /**
     * Delay between keystrokes to wait before sending a query.
     * @group Props
     */
    delay = 300;
    /**
     * Inline style of the component.
     * @group Props
     */
    style;
    /**
     * Inline style of the overlay panel element.
     * @group Props
     */
    panelStyle;
    /**
     * Style class of the component.
     * @group Props
     */
    styleClass;
    /**
     * Style class of the overlay panel element.
     * @group Props
     */
    panelStyleClass;
    /**
     * Inline style of the input field.
     * @group Props
     */
    inputStyle;
    /**
     * Identifier of the focus input to match a label defined for the component.
     * @group Props
     */
    inputId;
    /**
     * Inline style of the input field.
     * @group Props
     */
    inputStyleClass;
    /**
     * Hint text for the input field.
     * @group Props
     */
    placeholder;
    /**
     * When present, it specifies that the input cannot be typed.
     * @group Props
     */
    readonly;
    /**
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    disabled;
    /**
     * Maximum height of the suggestions panel.
     * @group Props
     */
    scrollHeight = '200px';
    /**
     * Defines if data is loaded and interacted with in lazy manner.
     * @group Props
     */
    lazy = false;
    /**
     * Whether the data should be loaded on demand during scroll.
     * @group Props
     */
    virtualScroll;
    /**
     * Height of an item in the list for VirtualScrolling.
     * @group Props
     */
    virtualScrollItemSize;
    /**
     * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
     * @group Props
     */
    virtualScrollOptions;
    /**
     * Maximum number of character allows in the input field.
     * @group Props
     */
    maxlength;
    /**
     * Name of the input element.
     * @group Props
     */
    name;
    /**
     * When present, it specifies that an input field must be filled out before submitting the form.
     * @group Props
     */
    required;
    /**
     * Size of the input field.
     * @group Props
     */
    size;
    /**
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo;
    /**
     * When enabled, highlights the first item in the list by default.
     * @group Props
     */
    autoHighlight;
    /**
     * When present, autocomplete clears the manual input if it does not match of the suggestions to force only accepting values from the suggestions.
     * @group Props
     */
    forceSelection;
    /**
     * Type of the input, defaults to "text".
     * @group Props
     */
    type = 'text';
    /**
     * Whether to automatically manage layering.
     * @group Props
     */
    autoZIndex = true;
    /**
     * Base zIndex value to use in layering.
     * @group Props
     */
    baseZIndex = 0;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel;
    /**
     * Defines a string that labels the dropdown button for accessibility.
     * @group Props
     */
    dropdownAriaLabel;
    /**
     * Specifies one or more IDs in the DOM that labels the input field.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Icon class of the dropdown icon.
     * @group Props
     */
    dropdownIcon;
    /**
     * Ensures uniqueness of selected items on multiple mode.
     * @group Props
     */
    unique = true;
    /**
     * Whether to display options as grouped when nested options are provided.
     * @group Props
     */
    group;
    /**
     * Whether to run a query when input receives focus.
     * @group Props
     */
    completeOnFocus = false;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    showClear = false;
    /**
     * Field of a suggested object to resolve and display.
     * @group Props
     * @deprecated use optionLabel property instead
     */
    field;
    /**
     * Displays a button next to the input field when enabled.
     * @group Props
     */
    dropdown;
    /**
     * Whether to show the empty message or not.
     * @group Props
     */
    showEmptyMessage;
    /**
     * Specifies the behavior dropdown button. Default "blank" mode sends an empty string and "current" mode sends the input value.
     * @group Props
     */
    dropdownMode = 'blank';
    /**
     * Specifies if multiple values can be selected.
     * @group Props
     */
    multiple;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex;
    /**
     * A property to uniquely identify a value in options.
     * @group Props
     */
    dataKey;
    /**
     * Text to display when there is no data. Defaults to global value in i18n translation configuration.
     * @group Props
     */
    emptyMessage;
    /**
     * Transition options of the show animation.
     * @group Props
     */
    showTransitionOptions = '.12s cubic-bezier(0, 0, 0.2, 1)';
    /**
     * Transition options of the hide animation.
     * @group Props
     */
    hideTransitionOptions = '.1s linear';
    /**
     * When present, it specifies that the component should automatically get focus on load.
     * @group Props
     */
    autofocus;
    /**
     * Used to define a string that autocomplete attribute the current element.
     * @group Props
     */
    autocomplete = 'off';
    /**
     * Name of the options field of an option group.
     * @group Props
     */
    optionGroupChildren = 'items';
    /**
     * Name of the label field of an option group.
     * @group Props
     */
    optionGroupLabel = 'label';
    /**
     * Options for the overlay element.
     * @group Props
     */
    overlayOptions;
    /**
     * An array of suggestions to display.
     * @group Props
     */
    get suggestions() {
      return this._suggestions();
    }
    set suggestions(value) {
      this._suggestions.set(value);
      this.handleSuggestionsChange();
    }
    /**
     * Element dimensions of option for virtual scrolling.
     * @group Props
     * @deprecated use virtualScrollItemSize property instead.
     */
    get itemSize() {
      return this._itemSize;
    }
    set itemSize(val) {
      this._itemSize = val;
      console.warn('The itemSize property is deprecated, use virtualScrollItemSize property instead.');
    }
    /**
     * Property name or getter function to use as the label of an option.
     * @group Props
     */
    optionLabel;
    /**
     * Unique identifier of the component.
     * @group Props
     */
    id;
    /**
     * Text to display when the search is active. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} results are available'
     */
    searchMessage;
    /**
     * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue 'No selected item'
     */
    emptySelectionMessage;
    /**
     * Text to be displayed in hidden accessible field when options are selected. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} items selected'
     */
    selectionMessage;
    /**
     * Whether to focus on the first visible or selected element when the overlay panel is shown.
     * @group Props
     */
    autoOptionFocus = true;
    /**
     * When enabled, the focused option is selected.
     * @group Props
     */
    selectOnFocus;
    /**
     * Locale to use in searching. The default locale is the host environment's current locale.
     * @group Props
     */
    searchLocale;
    /**
     * Property name or getter function to use as the disabled flag of an option, defaults to false when not defined.
     * @group Props
     */
    optionDisabled;
    /**
     * When enabled, the hovered option will be focused.
     * @group Props
     */
    focusOnHover;
    /**
     * Callback to invoke to search for suggestions.
     * @param {AutoCompleteCompleteEvent} event - Custom complete event.
     * @group Emits
     */
    completeMethod = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a suggestion is selected.
     * @param {AutoCompleteSelectEvent} event - custom select event.
     * @group Emits
     */
    onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a selected value is removed.
     * @param {AutoCompleteUnselectEvent} event - custom unselect event.
     * @group Emits
     */
    onUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke to when dropdown button is clicked.
     * @param {AutoCompleteDropdownClickEvent} event - custom dropdown click event.
     * @group Emits
     */
    onDropdownClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when clear button is clicked.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on input key up.
     * @param {KeyboardEvent} event - Keyboard event.
     * @group Emits
     */
    onKeyUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on overlay is shown.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on overlay is hidden.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on lazy load data.
     * @param {AutoCompleteLazyLoadEvent} event - Lazy load event.
     * @group Emits
     */
    onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    containerEL;
    inputEL;
    multiInputEl;
    multiContainerEL;
    dropdownButton;
    itemsViewChild;
    scroller;
    overlayViewChild;
    templates;
    _itemSize;
    itemsWrapper;
    itemTemplate;
    emptyTemplate;
    headerTemplate;
    footerTemplate;
    selectedItemTemplate;
    groupTemplate;
    loaderTemplate;
    removeIconTemplate;
    loadingIconTemplate;
    clearIconTemplate;
    dropdownIconTemplate;
    value;
    _suggestions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    onModelChange = () => {};
    onModelTouched = () => {};
    timeout;
    overlayVisible;
    suggestionsUpdated;
    highlightOption;
    highlightOptionChanged;
    focused = false;
    _filled;
    get filled() {
      return this._filled;
    }
    set filled(value) {
      this._filled = value;
    }
    loading;
    scrollHandler;
    listId;
    searchTimeout;
    dirty = false;
    modelValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    focusedMultipleOptionIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(-1);
    focusedOptionIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(-1);
    visibleOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      return this.group ? this.flatOptions(this._suggestions()) : this._suggestions() || [];
    });
    inputValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const modelValue = this.modelValue();
      if (modelValue) {
        if (typeof modelValue === 'object') {
          const label = this.getOptionLabel(modelValue);
          return label != null ? label : modelValue;
        } else {
          return modelValue;
        }
      } else {
        return '';
      }
    });
    get focusedMultipleOptionId() {
      return this.focusedMultipleOptionIndex() !== -1 ? `${this.id}_multiple_option_${this.focusedMultipleOptionIndex()}` : null;
    }
    get focusedOptionId() {
      return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
    }
    get containerClass() {
      return {
        'p-autocomplete p-component p-inputwrapper': true,
        'p-disabled': this.disabled,
        'p-focus': this.focused,
        'p-autocomplete-dd': this.dropdown,
        'p-autocomplete-multiple': this.multiple,
        'p-inputwrapper-focus': this.focused,
        'p-overlay-open': this.overlayVisible
      };
    }
    get multiContainerClass() {
      return 'p-autocomplete-multiple-container p-component p-inputtext';
    }
    get panelClass() {
      return {
        'p-autocomplete-panel p-component': true,
        'p-input-filled': this.config.inputStyle === 'filled',
        'p-ripple-disabled': this.config.ripple === false
      };
    }
    get inputClass() {
      return {
        'p-autocomplete-input p-inputtext p-component': !this.multiple,
        'p-autocomplete-dd-input': this.dropdown
      };
    }
    get searchResultMessageText() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(this.visibleOptions()) && this.overlayVisible ? this.searchMessageText.replaceAll('{0}', this.visibleOptions().length) : this.emptySearchMessageText;
    }
    get searchMessageText() {
      return this.searchMessage || this.config.translation.searchMessage || '';
    }
    get emptySearchMessageText() {
      return this.emptyMessage || this.config.translation.emptySearchMessage || '';
    }
    get selectionMessageText() {
      return this.selectionMessage || this.config.translation.selectionMessage || '';
    }
    get emptySelectionMessageText() {
      return this.emptySelectionMessage || this.config.translation.emptySelectionMessage || '';
    }
    get selectedMessageText() {
      return this.hasSelectedOption() ? this.selectionMessageText.replaceAll('{0}', this.multiple ? this.modelValue().length : '1') : this.emptySelectionMessageText;
    }
    get ariaSetSize() {
      return this.visibleOptions().filter(option => !this.isOptionGroup(option)).length;
    }
    get virtualScrollerDisabled() {
      return !this.virtualScroll;
    }
    constructor(document, el, renderer, cd, config, overlayService, zone) {
      this.document = document;
      this.el = el;
      this.renderer = renderer;
      this.cd = cd;
      this.config = config;
      this.overlayService = overlayService;
      this.zone = zone;
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
        this.filled = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(this.modelValue());
      });
    }
    ngOnInit() {
      this.id = this.id || (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
      this.cd.detectChanges();
    }
    ngAfterViewChecked() {
      //Use timeouts as since Angular 4.2, AfterViewChecked is broken and not called after panel is updated
      if (this.suggestionsUpdated && this.overlayViewChild) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            if (this.overlayViewChild) {
              this.overlayViewChild.alignOverlay();
            }
          }, 1);
          this.suggestionsUpdated = false;
        });
      }
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'item':
            this.itemTemplate = item.template;
            break;
          case 'group':
            this.groupTemplate = item.template;
            break;
          case 'selectedItem':
            this.selectedItemTemplate = item.template;
            break;
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'empty':
            this.emptyTemplate = item.template;
            break;
          case 'footer':
            this.footerTemplate = item.template;
            break;
          case 'loader':
            this.loaderTemplate = item.template;
            break;
          case 'removetokenicon':
            this.removeIconTemplate = item.template;
            break;
          case 'loadingicon':
            this.loadingIconTemplate = item.template;
            break;
          case 'clearicon':
            this.clearIconTemplate = item.template;
            break;
          case 'dropdownicon':
            this.dropdownIconTemplate = item.template;
            break;
          default:
            this.itemTemplate = item.template;
            break;
        }
      });
    }
    handleSuggestionsChange() {
      if (this.loading) {
        this._suggestions() ? this.show() : !!this.emptyTemplate ? this.show() : this.hide();
        const focusedOptionIndex = this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
        this.focusedOptionIndex.set(focusedOptionIndex);
        this.suggestionsUpdated = true;
        this.loading = false;
        this.cd.markForCheck();
      }
    }
    flatOptions(options) {
      return (options || []).reduce((result, option, index) => {
        result.push({
          optionGroup: option,
          group: true,
          index
        });
        const optionGroupChildren = this.getOptionGroupChildren(option);
        optionGroupChildren && optionGroupChildren.forEach(o => result.push(o));
        return result;
      }, []);
    }
    isOptionGroup(option) {
      return this.optionGroupLabel && option.optionGroup && option.group;
    }
    findFirstOptionIndex() {
      return this.visibleOptions().findIndex(option => this.isValidOption(option));
    }
    findLastOptionIndex() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findLastIndex(this.visibleOptions(), option => this.isValidOption(option));
    }
    findFirstFocusedOptionIndex() {
      const selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    }
    findLastFocusedOptionIndex() {
      const selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    }
    findSelectedOptionIndex() {
      return this.hasSelectedOption() ? this.visibleOptions().findIndex(option => this.isValidSelectedOption(option)) : -1;
    }
    findNextOptionIndex(index) {
      const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex(option => this.isValidOption(option)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    }
    findPrevOptionIndex(index) {
      const matchedOptionIndex = index > 0 ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), option => this.isValidOption(option)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    }
    isValidSelectedOption(option) {
      return this.isValidOption(option) && this.isSelected(option);
    }
    isValidOption(option) {
      return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
    }
    isOptionDisabled(option) {
      return this.optionDisabled ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
    }
    isSelected(option) {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(this.modelValue(), this.getOptionValue(option), this.equalityKey());
    }
    isOptionMatched(option, value) {
      return this.isValidOption(option) && this.getOptionLabel(option).toLocaleLowerCase(this.searchLocale) === value.toLocaleLowerCase(this.searchLocale);
    }
    isInputClicked(event) {
      if (this.multiple) return event.target === this.multiContainerEL.nativeElement || this.multiContainerEL.nativeElement.contains(event.target);else return event.target === this.inputEL.nativeElement;
    }
    isDropdownClicked(event) {
      return this.dropdownButton?.nativeElement ? event.target === this.dropdownButton.nativeElement || this.dropdownButton.nativeElement.contains(event.target) : false;
    }
    equalityKey() {
      return this.dataKey; // TODO: The 'optionValue' properties can be added.
    }

    onContainerClick(event) {
      if (this.disabled || this.loading || this.isInputClicked(event) || this.isDropdownClicked(event)) {
        return;
      }
      if (!this.overlayViewChild || !this.overlayViewChild.overlayViewChild?.nativeElement.contains(event.target)) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.focus(this.inputEL.nativeElement);
      }
    }
    handleDropdownClick(event) {
      let query = undefined;
      if (this.overlayVisible) {
        this.hide(true);
      } else {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.focus(this.inputEL.nativeElement);
        query = this.inputEL.nativeElement.value;
        if (this.dropdownMode === 'blank') this.search(event, '', 'dropdown');else if (this.dropdownMode === 'current') this.search(event, query, 'dropdown');
      }
      this.onDropdownClick.emit({
        originalEvent: event,
        query
      });
    }
    onInput(event) {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      let query = event.target.value;
      if (!this.multiple && !this.forceSelection) {
        this.updateModel(query);
      }
      if (query.length === 0 && !this.multiple) {
        this.onClear.emit();
        setTimeout(() => {
          this.hide();
        }, this.delay / 2);
      } else {
        if (query.length >= this.minLength) {
          this.focusedOptionIndex.set(-1);
          this.searchTimeout = setTimeout(() => {
            this.search(event, query, 'input');
          }, this.delay);
        } else {
          this.hide();
        }
      }
    }
    onInputChange(event) {
      if (this.forceSelection) {
        let valid = false;
        if (this.visibleOptions()) {
          const matchedValue = this.visibleOptions().find(option => this.isOptionMatched(option, this.inputEL.nativeElement.value || ''));
          if (matchedValue !== undefined) {
            valid = true;
            !this.isSelected(matchedValue) && this.onOptionSelect(event, matchedValue);
          }
        }
        if (!valid) {
          this.inputEL.nativeElement.value = '';
          !this.multiple && this.updateModel(null);
        }
      }
    }
    onInputFocus(event) {
      if (this.disabled) {
        // For ScreenReaders
        return;
      }
      if (!this.dirty && this.completeOnFocus) {
        this.search(event, event.target.value, 'focus');
      }
      this.dirty = true;
      this.focused = true;
      const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      this.focusedOptionIndex.set(focusedOptionIndex);
      this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
      this.onFocus.emit(event);
    }
    onMultipleContainerFocus(event) {
      if (this.disabled) {
        // For ScreenReaders
        return;
      }
      this.focused = true;
    }
    onMultipleContainerBlur(event) {
      this.focusedMultipleOptionIndex.set(-1);
      this.focused = false;
    }
    onMultipleContainerKeyDown(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      switch (event.code) {
        case 'ArrowLeft':
          this.onArrowLeftKeyOnMultiple(event);
          break;
        case 'ArrowRight':
          this.onArrowRightKeyOnMultiple(event);
          break;
        case 'Backspace':
          this.onBackspaceKeyOnMultiple(event);
          break;
        default:
          break;
      }
    }
    onInputBlur(event) {
      this.dirty = false;
      this.focused = false;
      this.focusedOptionIndex.set(-1);
      this.onModelTouched();
      this.onBlur.emit(event);
    }
    onInputPaste(event) {
      this.onKeyDown(event);
    }
    onInputKeyUp(event) {
      this.onKeyUp.emit(event);
    }
    onKeyDown(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      switch (event.code) {
        case 'ArrowDown':
          this.onArrowDownKey(event);
          break;
        case 'ArrowUp':
          this.onArrowUpKey(event);
          break;
        case 'ArrowLeft':
          this.onArrowLeftKey(event);
          break;
        case 'ArrowRight':
          this.onArrowRightKey(event);
          break;
        case 'Home':
          this.onHomeKey(event);
          break;
        case 'End':
          this.onEndKey(event);
          break;
        case 'PageDown':
          this.onPageDownKey(event);
          break;
        case 'PageUp':
          this.onPageUpKey(event);
          break;
        case 'Enter':
        case 'NumpadEnter':
          this.onEnterKey(event);
          break;
        case 'Escape':
          this.onEscapeKey(event);
          break;
        case 'Tab':
          this.onTabKey(event);
          break;
        case 'Backspace':
          this.onBackspaceKey(event);
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          //NOOP
          break;
        default:
          break;
      }
    }
    onArrowDownKey(event) {
      if (!this.overlayVisible) {
        return;
      }
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.findFirstFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
      event.preventDefault();
      event.stopPropagation();
    }
    onArrowUpKey(event) {
      if (!this.overlayVisible) {
        return;
      }
      if (event.altKey) {
        if (this.focusedOptionIndex() !== -1) {
          this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
        }
        this.overlayVisible && this.hide();
        event.preventDefault();
      } else {
        const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.findLastFocusedOptionIndex();
        this.changeFocusedOptionIndex(event, optionIndex);
        event.preventDefault();
        event.stopPropagation();
      }
    }
    onArrowLeftKey(event) {
      const target = event.currentTarget;
      this.focusedOptionIndex.set(-1);
      if (this.multiple) {
        if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isEmpty(target.value) && this.hasSelectedOption()) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.focus(this.multiContainerEL.nativeElement);
          this.focusedMultipleOptionIndex.set(this.modelValue().length);
        } else {
          event.stopPropagation(); // To prevent onArrowLeftKeyOnMultiple method
        }
      }
    }

    onArrowRightKey(event) {
      this.focusedOptionIndex.set(-1);
      this.multiple && event.stopPropagation(); // To prevent onArrowRightKeyOnMultiple method
    }

    onHomeKey(event) {
      const {
        currentTarget
      } = event;
      const len = currentTarget.value.length;
      currentTarget.setSelectionRange(0, event.shiftKey ? len : 0);
      this.focusedOptionIndex.set(-1);
      event.preventDefault();
    }
    onEndKey(event) {
      const {
        currentTarget
      } = event;
      const len = currentTarget.value.length;
      currentTarget.setSelectionRange(event.shiftKey ? 0 : len, len);
      this.focusedOptionIndex.set(-1);
      event.preventDefault();
    }
    onPageDownKey(event) {
      this.scrollInView(this.visibleOptions().length - 1);
      event.preventDefault();
    }
    onPageUpKey(event) {
      this.scrollInView(0);
      event.preventDefault();
    }
    onEnterKey(event) {
      if (!this.overlayVisible) {
        this.onArrowDownKey(event);
      } else {
        if (this.focusedOptionIndex() !== -1) {
          this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
        }
        this.hide();
      }
      event.preventDefault();
    }
    onEscapeKey(event) {
      this.overlayVisible && this.hide(true);
      event.preventDefault();
    }
    onTabKey(event) {
      if (this.focusedOptionIndex() !== -1) {
        this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
      }
      this.overlayVisible && this.hide();
    }
    onBackspaceKey(event) {
      if (this.multiple) {
        if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(this.modelValue()) && !this.inputEL.nativeElement.value) {
          const removedValue = this.modelValue()[this.modelValue().length - 1];
          const newValue = this.modelValue().slice(0, -1);
          this.updateModel(newValue);
          this.onUnselect.emit({
            originalEvent: event,
            value: removedValue
          });
        }
        event.stopPropagation(); // To prevent onBackspaceKeyOnMultiple method
      }
    }

    onArrowLeftKeyOnMultiple(event) {
      const optionIndex = this.focusedMultipleOptionIndex() < 1 ? 0 : this.focusedMultipleOptionIndex() - 1;
      this.focusedMultipleOptionIndex.set(optionIndex);
    }
    onArrowRightKeyOnMultiple(event) {
      let optionIndex = this.focusedMultipleOptionIndex();
      optionIndex++;
      this.focusedMultipleOptionIndex.set(optionIndex);
      if (optionIndex > this.modelValue().length - 1) {
        this.focusedMultipleOptionIndex.set(-1);
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.focus(this.inputEL.nativeElement);
      }
    }
    onBackspaceKeyOnMultiple(event) {
      if (this.focusedMultipleOptionIndex() !== -1) {
        this.removeOption(event, this.focusedMultipleOptionIndex());
      }
    }
    onOptionSelect(event, option, isHide = true) {
      const value = this.getOptionValue(option);
      if (this.multiple) {
        this.inputEL.nativeElement.value = '';
        if (!this.isSelected(option)) {
          this.updateModel([...(this.modelValue() || []), value]);
        }
      } else {
        this.updateModel(value);
      }
      this.onSelect.emit({
        originalEvent: event,
        value: option
      });
      isHide && this.hide(true);
    }
    onOptionMouseEnter(event, index) {
      if (this.focusOnHover) {
        this.changeFocusedOptionIndex(event, index);
      }
    }
    search(event, query, source) {
      //allow empty string but not undefined or null
      if (query === undefined || query === null) {
        return;
      }
      //do not search blank values on input change
      if (source === 'input' && query.trim().length === 0) {
        return;
      }
      this.loading = true;
      this.completeMethod.emit({
        originalEvent: event,
        query
      });
    }
    removeOption(event, index) {
      event.stopPropagation();
      const removedOption = this.modelValue()[index];
      const value = this.modelValue().filter((_, i) => i !== index).map(option => this.getOptionValue(option));
      this.updateModel(value);
      this.onUnselect.emit({
        originalEvent: event,
        value: removedOption
      });
      primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.focus(this.inputEL.nativeElement);
    }
    updateModel(value) {
      this.value = value;
      this.modelValue.set(value);
      this.onModelChange(value);
      this.updateInputValue();
      this.cd.markForCheck();
    }
    updateInputValue() {
      if (this.inputEL && this.inputEL.nativeElement) {
        if (!this.multiple) {
          this.inputEL.nativeElement.value = this.inputValue();
        } else {
          this.inputEL.nativeElement.value = '';
        }
      }
    }
    autoUpdateModel() {
      if ((this.selectOnFocus || this.autoHighlight) && this.autoOptionFocus && !this.hasSelectedOption()) {
        const focusedOptionIndex = this.findFirstFocusedOptionIndex();
        this.focusedOptionIndex.set(focusedOptionIndex);
        this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()], false);
      }
    }
    scrollInView(index = -1) {
      const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
      if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
        const element = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
        if (element) {
          element.scrollIntoView && element.scrollIntoView({
            block: 'nearest',
            inline: 'nearest'
          });
        } else if (!this.virtualScrollerDisabled) {
          setTimeout(() => {
            this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
          }, 0);
        }
      }
    }
    changeFocusedOptionIndex(event, index) {
      if (this.focusedOptionIndex() !== index) {
        this.focusedOptionIndex.set(index);
        this.scrollInView();
        if (this.selectOnFocus || this.autoHighlight) {
          this.onOptionSelect(event, this.visibleOptions()[index], false);
        }
      }
    }
    show(isFocus = false) {
      this.dirty = true;
      this.overlayVisible = true;
      const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      this.focusedOptionIndex.set(focusedOptionIndex);
      isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.focus(this.inputEL.nativeElement);
      if (isFocus) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.focus(this.inputEL.nativeElement);
      }
      this.onShow.emit();
      this.cd.markForCheck();
    }
    hide(isFocus = false) {
      const _hide = () => {
        this.dirty = isFocus;
        this.overlayVisible = false;
        this.focusedOptionIndex.set(-1);
        isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.focus(this.inputEL.nativeElement);
        this.onHide.emit();
        this.cd.markForCheck();
      };
      setTimeout(() => {
        _hide();
      }, 0); // For ScreenReaders
    }

    clear() {
      this.updateModel(null);
      this.inputEL.nativeElement.value = '';
      this.onClear.emit();
    }
    writeValue(value) {
      this.value = value;
      this.modelValue.set(value);
      this.updateInputValue();
      this.cd.markForCheck();
    }
    hasSelectedOption() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(this.modelValue());
    }
    getAriaPosInset(index) {
      return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter(option => this.isOptionGroup(option)).length : index) + 1;
    }
    getOptionLabel(option) {
      return this.field || this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(option, this.field || this.optionLabel) : option && option.label != undefined ? option.label : option;
    }
    getOptionValue(option) {
      return option; // TODO: The 'optionValue' properties can be added.
    }

    getOptionIndex(index, scrollerOptions) {
      return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)['index'];
    }
    getOptionGroupLabel(optionGroup) {
      return this.optionGroupLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label != undefined ? optionGroup.label : optionGroup;
    }
    getOptionGroupChildren(optionGroup) {
      return this.optionGroupChildren ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
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
    onOverlayAnimationStart(event) {
      if (event.toState === 'visible') {
        this.itemsWrapper = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.overlayViewChild.overlayViewChild?.nativeElement, this.virtualScroll ? '.p-scroller' : '.p-autocomplete-panel');
        if (this.virtualScroll) {
          this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
          this.scroller.viewInit();
        }
        if (this.visibleOptions() && this.visibleOptions().length) {
          if (this.virtualScroll) {
            const selectedIndex = this.modelValue() ? this.focusedOptionIndex() : -1;
            if (selectedIndex !== -1) {
              this.scroller?.scrollToIndex(selectedIndex);
            }
          } else {
            let selectedListItem = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.itemsWrapper, '.p-autocomplete-item.p-highlight');
            if (selectedListItem) {
              selectedListItem.scrollIntoView({
                block: 'nearest',
                inline: 'center'
              });
            }
          }
        }
      }
    }
    ngOnDestroy() {
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
    }
    static ɵfac = function AutoComplete_Factory(t) {
      return new (t || AutoComplete)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AutoComplete,
      selectors: [["p-autoComplete"]],
      contentQueries: function AutoComplete_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function AutoComplete_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerEL = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputEL = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiInputEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiContainerEL = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownButton = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemsViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlayViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element", "p-inputwrapper"],
      hostVars: 6,
      hostBindings: function AutoComplete_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused && !ctx.disabled || ctx.autofocus || ctx.overlayVisible)("p-autocomplete-clearable", ctx.showClear && !ctx.disabled);
        }
      },
      inputs: {
        minLength: "minLength",
        delay: "delay",
        style: "style",
        panelStyle: "panelStyle",
        styleClass: "styleClass",
        panelStyleClass: "panelStyleClass",
        inputStyle: "inputStyle",
        inputId: "inputId",
        inputStyleClass: "inputStyleClass",
        placeholder: "placeholder",
        readonly: "readonly",
        disabled: "disabled",
        scrollHeight: "scrollHeight",
        lazy: "lazy",
        virtualScroll: "virtualScroll",
        virtualScrollItemSize: "virtualScrollItemSize",
        virtualScrollOptions: "virtualScrollOptions",
        maxlength: "maxlength",
        name: "name",
        required: "required",
        size: "size",
        appendTo: "appendTo",
        autoHighlight: "autoHighlight",
        forceSelection: "forceSelection",
        type: "type",
        autoZIndex: "autoZIndex",
        baseZIndex: "baseZIndex",
        ariaLabel: "ariaLabel",
        dropdownAriaLabel: "dropdownAriaLabel",
        ariaLabelledBy: "ariaLabelledBy",
        dropdownIcon: "dropdownIcon",
        unique: "unique",
        group: "group",
        completeOnFocus: "completeOnFocus",
        showClear: "showClear",
        field: "field",
        dropdown: "dropdown",
        showEmptyMessage: "showEmptyMessage",
        dropdownMode: "dropdownMode",
        multiple: "multiple",
        tabindex: "tabindex",
        dataKey: "dataKey",
        emptyMessage: "emptyMessage",
        showTransitionOptions: "showTransitionOptions",
        hideTransitionOptions: "hideTransitionOptions",
        autofocus: "autofocus",
        autocomplete: "autocomplete",
        optionGroupChildren: "optionGroupChildren",
        optionGroupLabel: "optionGroupLabel",
        overlayOptions: "overlayOptions",
        suggestions: "suggestions",
        itemSize: "itemSize",
        optionLabel: "optionLabel",
        id: "id",
        searchMessage: "searchMessage",
        emptySelectionMessage: "emptySelectionMessage",
        selectionMessage: "selectionMessage",
        autoOptionFocus: "autoOptionFocus",
        selectOnFocus: "selectOnFocus",
        searchLocale: "searchLocale",
        optionDisabled: "optionDisabled",
        focusOnHover: "focusOnHover"
      },
      outputs: {
        completeMethod: "completeMethod",
        onSelect: "onSelect",
        onUnselect: "onUnselect",
        onFocus: "onFocus",
        onBlur: "onBlur",
        onDropdownClick: "onDropdownClick",
        onClear: "onClear",
        onKeyUp: "onKeyUp",
        onShow: "onShow",
        onHide: "onHide",
        onLazyLoad: "onLazyLoad"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([AUTOCOMPLETE_VALUE_ACCESSOR])],
      decls: 17,
      vars: 25,
      consts: [[3, "ngClass", "ngStyle", "click"], ["container", ""], ["pAutoFocus", "", "aria-autocomplete", "list", "role", "combobox", 3, "autofocus", "ngClass", "ngStyle", "class", "type", "autocomplete", "required", "name", "maxlength", "tabindex", "readonly", "disabled", "input", "keydown", "change", "focus", "blur", "paste", "keyup", 4, "ngIf"], [4, "ngIf"], ["role", "listbox", 3, "class", "tabindex", "focus", "blur", "keydown", 4, "ngIf"], ["type", "button", "pButton", "", "class", "p-autocomplete-dropdown p-button-icon-only", "pRipple", "", 3, "disabled", "click", 4, "ngIf"], [3, "visible", "options", "target", "appendTo", "showTransitionOptions", "hideTransitionOptions", "visibleChange", "onAnimationStart", "onHide"], ["overlay", ""], [3, "ngClass", "ngStyle"], [4, "ngTemplateOutlet"], [3, "items", "style", "itemSize", "autoSize", "lazy", "options", "onLazyLoad", 4, "ngIf"], ["buildInItems", ""], ["role", "status", "aria-live", "polite", 1, "p-hidden-accessible"], ["pAutoFocus", "", "aria-autocomplete", "list", "role", "combobox", 3, "autofocus", "ngClass", "ngStyle", "type", "autocomplete", "required", "name", "maxlength", "tabindex", "readonly", "disabled", "input", "keydown", "change", "focus", "blur", "paste", "keyup"], ["focusInput", ""], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-autocomplete-clear-icon", 3, "click", 4, "ngIf"], [3, "styleClass", "click"], [1, "p-autocomplete-clear-icon", 3, "click"], ["role", "listbox", 3, "tabindex", "focus", "blur", "keydown"], ["multiContainer", ""], ["role", "option", 3, "ngClass", 4, "ngFor", "ngForOf"], ["role", "option", 1, "p-autocomplete-input-token"], ["pAutoFocus", "", "role", "combobox", "aria-autocomplete", "list", 3, "autofocus", "ngClass", "ngStyle", "autocomplete", "required", "maxlength", "tabindex", "readonly", "disabled", "input", "keydown", "change", "focus", "blur", "paste", "keyup"], ["role", "option", 3, "ngClass"], ["token", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-autocomplete-token-label", 4, "ngIf"], [1, "p-autocomplete-token-icon", 3, "click"], [3, "styleClass", 4, "ngIf"], ["class", "p-autocomplete-token-icon", 4, "ngIf"], [1, "p-autocomplete-token-label"], [3, "styleClass"], [1, "p-autocomplete-token-icon"], [3, "styleClass", "spin", 4, "ngIf"], ["class", "p-autocomplete-loader pi-spin ", 4, "ngIf"], [3, "styleClass", "spin"], [1, "p-autocomplete-loader", "pi-spin"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-autocomplete-dropdown", "p-button-icon-only", 3, "disabled", "click"], ["ddBtn", ""], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "items", "itemSize", "autoSize", "lazy", "options", "onLazyLoad"], ["scroller", ""], ["pTemplate", "content"], ["pTemplate", "loader"], ["role", "listbox", 1, "p-autocomplete-items", 3, "ngClass"], ["items", ""], ["ngFor", "", 3, "ngForOf"], ["class", "p-autocomplete-empty-message", "role", "option", 3, "ngStyle", 4, "ngIf"], ["role", "option", 1, "p-autocomplete-item-group", 3, "ngStyle"], ["pRipple", "", "role", "option", 1, "p-autocomplete-item", 3, "ngStyle", "ngClass", "click", "mouseenter"], ["role", "option", 1, "p-autocomplete-empty-message", 3, "ngStyle"], [4, "ngIf", "ngIfElse"], ["empty", ""]],
      template: function AutoComplete_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutoComplete_Template_div_click_0_listener($event) {
            return ctx.onContainerClick($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoComplete_input_2_Template, 2, 23, "input", 2)(3, AutoComplete_ng_container_3_Template, 3, 2, "ng-container", 3)(4, AutoComplete_ul_4_Template, 6, 28, "ul", 4)(5, AutoComplete_ng_container_5_Template, 3, 2, "ng-container", 3)(6, AutoComplete_button_6_Template, 4, 5, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p-overlay", 6, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function AutoComplete_Template_p_overlay_visibleChange_7_listener($event) {
            return ctx.overlayVisible = $event;
          })("onAnimationStart", function AutoComplete_Template_p_overlay_onAnimationStart_7_listener($event) {
            return ctx.onOverlayAnimationStart($event);
          })("onHide", function AutoComplete_Template_p_overlay_onHide_7_listener() {
            return ctx.hide();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AutoComplete_ng_container_10_Template, 1, 0, "ng-container", 9)(11, AutoComplete_p_scroller_11_Template, 4, 10, "p-scroller", 10)(12, AutoComplete_ng_container_12_Template, 2, 6, "ng-container", 3)(13, AutoComplete_ng_template_13_Template, 5, 10, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass)("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.multiple);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filled && !ctx.disabled && ctx.showClear && !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.overlayVisible)("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.panelStyleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx.virtualScroll ? "auto" : ctx.scrollHeight);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.panelClass)("ngStyle", ctx.panelStyle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.headerTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.virtualScroll);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.virtualScroll);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selectedMessageText, " ");
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, primeng_overlay__WEBPACK_IMPORTED_MODULE_6__.Overlay, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.Ripple, primeng_scroller__WEBPACK_IMPORTED_MODULE_9__.Scroller, primeng_autofocus__WEBPACK_IMPORTED_MODULE_10__.AutoFocus, primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_11__.TimesCircleIcon, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_12__.SpinnerIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_13__.TimesIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_14__.ChevronDownIcon],
      styles: ["@layer primeng{.p-autocomplete{display:inline-flex;position:relative}.p-autocomplete-loader{position:absolute;top:50%;margin-top:-.5rem}.p-autocomplete-dd .p-autocomplete-input{flex:1 1 auto;width:1%}.p-autocomplete-dd .p-autocomplete-input,.p-autocomplete-dd .p-autocomplete-multiple-container{border-top-right-radius:0;border-bottom-right-radius:0}.p-autocomplete-dd .p-autocomplete-dropdown{border-top-left-radius:0;border-bottom-left-radius:0}.p-autocomplete-panel{overflow:auto}.p-autocomplete-items{margin:0;padding:0;list-style-type:none}.p-autocomplete-item{cursor:pointer;white-space:nowrap;position:relative;overflow:hidden}.p-autocomplete-multiple-container{margin:0;padding:0;list-style-type:none;cursor:text;overflow:hidden;display:flex;align-items:center;flex-wrap:wrap}.p-autocomplete-token{width:-moz-fit-content;width:fit-content;cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-autocomplete-token-icon{display:flex;cursor:pointer}.p-autocomplete-input-token{flex:1 1 auto;display:inline-flex}.p-autocomplete-input-token input{border:0 none;outline:0 none;background-color:transparent;margin:0;padding:0;box-shadow:none;border-radius:0;width:100%}.p-fluid .p-autocomplete{display:flex}.p-fluid .p-autocomplete-dd .p-autocomplete-input{width:1%}.p-autocomplete-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-autocomplete-clearable{position:relative}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return AutoComplete;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let AutoCompleteModule = /*#__PURE__*/(() => {
  class AutoCompleteModule {
    static ɵfac = function AutoCompleteModule_Factory(t) {
      return new (t || AutoCompleteModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AutoCompleteModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_15__.InputTextModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_8__.RippleModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_9__.ScrollerModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_10__.AutoFocusModule, primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_11__.TimesCircleIcon, primeng_icons_spinner__WEBPACK_IMPORTED_MODULE_12__.SpinnerIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_13__.TimesIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_14__.ChevronDownIcon, primeng_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_9__.ScrollerModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_10__.AutoFocusModule]
    });
  }
  return AutoCompleteModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-autocomplete.mjs.map

/***/ }),

/***/ 38062:
/*!*****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-cascadeselect.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CASCADESELECT_VALUE_ACCESSOR: () => (/* binding */ CASCADESELECT_VALUE_ACCESSOR),
/* harmony export */   CascadeSelect: () => (/* binding */ CascadeSelect),
/* harmony export */   CascadeSelectModule: () => (/* binding */ CascadeSelectModule),
/* harmony export */   CascadeSelectSub: () => (/* binding */ CascadeSelectSub)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 82076);
/* harmony import */ var primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/angleright */ 51239);
/* harmony import */ var primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/chevrondown */ 76005);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/times */ 77778);
/* harmony import */ var primeng_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/overlay */ 95807);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 44480);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 2332);
















function CascadeSelectSub_ng_template_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c0 = a0 => ({
  $implicit: a0
});
function CascadeSelectSub_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CascadeSelectSub_ng_template_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const processedOption_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.optionTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, processedOption_r1.option));
  }
}
function CascadeSelectSub_ng_template_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedOption_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getOptionLabelToRender(processedOption_r1));
  }
}
function CascadeSelectSub_ng_template_1_span_5_AngleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleRightIcon");
  }
}
function CascadeSelectSub_ng_template_1_span_5_2_ng_template_0_Template(rf, ctx) {}
function CascadeSelectSub_ng_template_1_span_5_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CascadeSelectSub_ng_template_1_span_5_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function CascadeSelectSub_ng_template_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CascadeSelectSub_ng_template_1_span_5_AngleRightIcon_1_Template, 1, 0, "AngleRightIcon", 11)(2, CascadeSelectSub_ng_template_1_span_5_2_Template, 1, 0, null, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "groupIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.groupIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.groupIconTemplate);
  }
}
function CascadeSelectSub_ng_template_1_p_cascadeSelectSub_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-cascadeSelectSub", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function CascadeSelectSub_ng_template_1_p_cascadeSelectSub_6_Template_p_cascadeSelectSub_onChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.onOptionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedOption_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("role", "group")("selectId", ctx_r7.selectId)("focusedOptionId", ctx_r7.focusedOptionId)("activeOptionPath", ctx_r7.activeOptionPath)("options", ctx_r7.getOptionGroupChildren(processedOption_r1))("optionLabel", ctx_r7.optionLabel)("optionValue", ctx_r7.optionValue)("level", ctx_r7.level + 1)("optionGroupLabel", ctx_r7.optionGroupLabel)("optionGroupChildren", ctx_r7.optionGroupChildren)("dirty", ctx_r7.dirty)("optionTemplate", ctx_r7.optionTemplate);
  }
}
function CascadeSelectSub_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CascadeSelectSub_ng_template_1_Template_div_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const processedOption_r1 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.onOptionClick($event, processedOption_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CascadeSelectSub_ng_template_1_ng_container_2_Template, 2, 4, "ng-container", 4)(3, CascadeSelectSub_ng_template_1_ng_template_3_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(5, CascadeSelectSub_ng_template_1_span_5_Template, 3, 3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CascadeSelectSub_ng_template_1_p_cascadeSelectSub_6_Template, 1, 12, "p-cascadeSelectSub", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedOption_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.getItemClass(processedOption_r1))("id", ctx_r0.getOptionId(processedOption_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-level", ctx_r0.level + 1)("aria-setsize", ctx_r0.options.length)("data-pc-section", "item")("aria-label", ctx_r0.getOptionLabelToRender(processedOption_r1))("aria-selected", ctx_r0.isOptionGroup(processedOption_r1) ? undefined : ctx_r0.isOptionSelected(processedOption_r1))("aria-posinset", i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", 0)("data-pc-section", "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.optionTemplate)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isOptionGroup(processedOption_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isOptionGroup(processedOption_r1) && ctx_r0.isOptionActive(processedOption_r1));
  }
}
const _c1 = a0 => ({
  "p-cascadeselect-panel-root": a0
});
const _c2 = ["focusInput"];
const _c3 = ["container"];
const _c4 = ["panel"];
const _c5 = ["overlay"];
function CascadeSelect_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c6 = (a0, a1) => ({
  $implicit: a0,
  placeholder: a1
});
function CascadeSelect_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CascadeSelect_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.valueTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c6, ctx_r2.value, ctx_r2.placeholder));
  }
}
function CascadeSelect_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.label(), " ");
  }
}
function CascadeSelect_ng_container_9_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "TimesIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CascadeSelect_ng_container_9_TimesIcon_1_Template_TimesIcon_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.clear($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-cascadeselect-clear-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearicon")("aria-hidden", true);
  }
}
function CascadeSelect_ng_container_9_span_2_1_ng_template_0_Template(rf, ctx) {}
function CascadeSelect_ng_container_9_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CascadeSelect_ng_container_9_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function CascadeSelect_ng_container_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CascadeSelect_ng_container_9_span_2_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.clear($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CascadeSelect_ng_container_9_span_2_1_Template, 1, 0, null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearicon")("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r12.clearIconTemplate);
  }
}
function CascadeSelect_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CascadeSelect_ng_container_9_TimesIcon_1_Template, 1, 3, "TimesIcon", 17)(2, CascadeSelect_ng_container_9_span_2_Template, 2, 3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.clearIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.clearIconTemplate);
  }
}
function CascadeSelect_ChevronDownIcon_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon", 22);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-cascadeselect-trigger-icon");
  }
}
function CascadeSelect_span_12_1_ng_template_0_Template(rf, ctx) {}
function CascadeSelect_span_12_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CascadeSelect_span_12_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function CascadeSelect_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CascadeSelect_span_12_1_Template, 1, 0, null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.triggerIconTemplate);
  }
}
function CascadeSelect_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24, 25)(2, "div", 26)(3, "p-cascadeSelectSub", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function CascadeSelect_ng_template_17_Template_p_cascadeSelectSub_onChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r22.onOptionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r9.panelStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r9.panelStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "wrapper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r9.processedOptions())("selectId", ctx_r9.id)("focusedOptionId", ctx_r9.focused ? ctx_r9.focusedOptionId : undefined)("activeOptionPath", ctx_r9.activeOptionPath())("optionLabel", ctx_r9.optionLabel)("optionValue", ctx_r9.optionValue)("level", 0)("optionTemplate", ctx_r9.optionTemplate)("groupIconTemplate", ctx_r9.groupIconTemplate)("optionGroupLabel", ctx_r9.optionGroupLabel)("optionGroupChildren", ctx_r9.optionGroupChildren)("optionDisabled", ctx_r9.optionDisabled)("optionValue", ctx_r9.optionValue)("optionLabel", ctx_r9.optionLabel)("root", true)("dirty", ctx_r9.dirty)("role", "tree");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.selectedMessageText, " ");
  }
}
const CASCADESELECT_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CascadeSelect),
  multi: true
};
let CascadeSelectSub = /*#__PURE__*/(() => {
  class CascadeSelectSub {
    el;
    role;
    selectId;
    activeOptionPath;
    optionDisabled;
    focusedOptionId;
    options;
    optionGroupChildren;
    optionTemplate;
    groupIconTemplate;
    level = 0;
    optionLabel;
    optionValue;
    optionGroupLabel;
    dirty;
    root;
    onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    constructor(el) {
      this.el = el;
    }
    ngOnInit() {
      if (!this.root) {
        this.position();
      }
    }
    onOptionClick(event, option) {
      this.onChange.emit({
        originalEvent: event,
        value: option,
        isFocus: true
      });
    }
    onOptionChange(event) {
      this.onChange.emit(event);
    }
    getOptionId(processedOption) {
      return `${this.selectId}_${processedOption.key}`;
    }
    getOptionLabel(processedOption) {
      return this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(processedOption.option, this.optionLabel) : processedOption.option;
    }
    getOptionValue(processedOption) {
      return this.optionValue ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(processedOption.option, this.optionValue) : processedOption.option;
    }
    getOptionLabelToRender(processedOption) {
      return this.isOptionGroup(processedOption) ? this.getOptionGroupLabel(processedOption) : this.getOptionLabel(processedOption);
    }
    isOptionDisabled(processedOption) {
      return this.optionDisabled ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(processedOption.option, this.optionDisabled) : false;
    }
    getOptionGroupLabel(processedOption) {
      return this.optionGroupLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(processedOption.option, this.optionGroupLabel) : null;
    }
    getOptionGroupChildren(processedOption) {
      return processedOption.children;
    }
    isOptionGroup(processedOption) {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(processedOption.children);
    }
    isOptionSelected(processedOption) {
      return !this.isOptionGroup(processedOption) && this.isOptionActive(processedOption);
    }
    isOptionActive(processedOption) {
      return this.activeOptionPath.some(path => path.key === processedOption.key);
    }
    isOptionFocused(processedOption) {
      return this.focusedOptionId === this.getOptionId(processedOption);
    }
    getItemClass(option) {
      return {
        'p-cascadeselect-item': true,
        'p-cascadeselect-item-group': this.isOptionGroup(option),
        'p-cascadeselect-item-active p-highlight': this.isOptionActive(option),
        'p-focus': this.isOptionFocused(option),
        'p-disabled': this.isOptionDisabled(option)
      };
    }
    position() {
      const parentItem = this.el.nativeElement.parentElement;
      const containerOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOffset(parentItem);
      const viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getViewport();
      const sublistWidth = this.el.nativeElement.children[0].offsetParent ? this.el.nativeElement.children[0].offsetWidth : primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getHiddenElementOuterWidth(this.el.nativeElement.children[0]);
      const itemOuterWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOuterWidth(parentItem.children[0]);
      if (parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth > viewport.width - primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.calculateScrollbarWidth()) {
        this.el.nativeElement.children[0].style.left = '-200%';
      }
    }
    static ɵfac = function CascadeSelectSub_Factory(t) {
      return new (t || CascadeSelectSub)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CascadeSelectSub,
      selectors: [["p-cascadeSelectSub"]],
      inputs: {
        role: "role",
        selectId: "selectId",
        activeOptionPath: "activeOptionPath",
        optionDisabled: "optionDisabled",
        focusedOptionId: "focusedOptionId",
        options: "options",
        optionGroupChildren: "optionGroupChildren",
        optionTemplate: "optionTemplate",
        groupIconTemplate: "groupIconTemplate",
        level: "level",
        optionLabel: "optionLabel",
        optionValue: "optionValue",
        optionGroupLabel: "optionGroupLabel",
        dirty: "dirty",
        root: "root"
      },
      outputs: {
        onChange: "onChange"
      },
      decls: 2,
      vars: 6,
      consts: [["aria-orientation", "horizontal", 1, "p-cascadeselect-panel", "p-cascadeselect-items", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["role", "treeitem", 3, "ngClass", "id"], ["pRipple", "", 1, "p-cascadeselect-item-content", 3, "click"], [4, "ngIf", "ngIfElse"], ["defaultOptionTemplate", ""], ["class", "p-cascadeselect-group-icon", 4, "ngIf"], ["class", "p-cascadeselect-sublist", 3, "role", "selectId", "focusedOptionId", "activeOptionPath", "options", "optionLabel", "optionValue", "level", "optionGroupLabel", "optionGroupChildren", "dirty", "optionTemplate", "onChange", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-cascadeselect-item-text"], [1, "p-cascadeselect-group-icon"], [4, "ngIf"], [4, "ngTemplateOutlet"], [1, "p-cascadeselect-sublist", 3, "role", "selectId", "focusedOptionId", "activeOptionPath", "options", "optionLabel", "optionValue", "level", "optionGroupLabel", "optionGroupChildren", "dirty", "optionTemplate", "onChange"]],
      template: function CascadeSelectSub_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CascadeSelectSub_ng_template_1_Template, 7, 14, "ng-template", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.root));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("data-pc-section", ctx.level === 0 ? "list" : "sublist");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_6__.AngleRightIcon, CascadeSelectSub],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return CascadeSelectSub;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * CascadeSelect is a form component to select a value from a nested structure of options.
 * @group Components
 */
let CascadeSelect = /*#__PURE__*/(() => {
  class CascadeSelect {
    el;
    cd;
    config;
    overlayService;
    /**
     * Unique identifier of the component
     * @group Props
     */
    id;
    /**
     * Determines if the option will be selected on focus.
     * @group Props
     */
    selectOnFocus = false;
    /**
     * Text to display when the search is active. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} results are available'
     */
    searchMessage;
    /**
     * Text to display when there is no data. Defaults to global value in i18n translation configuration.
     * @group Props
     */
    emptyMessage;
    /**
     * Text to be displayed in hidden accessible field when options are selected. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue '{0} items selected'
     */
    selectionMessage;
    /**
     * Text to display when filtering does not return any results. Defaults to value from PrimeNG locale configuration.
     * @group Props
     * @defaultValue 'No available options'
     */
    emptySearchMessage;
    /**
     * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
     * @group Props
     * @defaultValue 'No selected item'
     */
    emptySelectionMessage;
    /**
     * Locale to use in searching. The default locale is the host environment's current locale.
     * @group Props
     */
    searchLocale;
    /**
     * Name of the disabled field of an option.
     * @group Props
     */
    optionDisabled;
    /**
     * Whether to focus on the first visible or selected element when the overlay panel is shown.
     * @group Props
     */
    autoOptionFocus = true;
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
     * An array of selectitems to display as the available options.
     * @group Props
     */
    options;
    /**
     * Property name or getter function to use as the label of an option.
     * @group Props
     */
    optionLabel;
    /**
     * Property name or getter function to use as the value of an option, defaults to the option itself when not defined.
     * @group Props
     */
    optionValue;
    /**
     * Property name or getter function to use as the label of an option group.
     * @group Props
     */
    optionGroupLabel;
    /**
     * Property name or getter function to retrieve the items of a group.
     * @group Props
     */
    optionGroupChildren;
    /**
     * Default text to display when no option is selected.
     * @group Props
     */
    placeholder;
    /**
     * Selected value of the component.
     * @group Props
     */
    value;
    /**
     * A property to uniquely identify an option.
     * @group Props
     */
    dataKey;
    /**
     * Identifier of the underlying input element.
     * @group Props
     */
    inputId;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex = 0;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Label of the input for accessibility.
     * @group Props
     */
    inputLabel;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel;
    /**
     * Id of the element or "body" for document where the overlay should be appended to.
     * @group Props
     */
    appendTo;
    /**
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    disabled;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    showClear = false;
    /**
     * Style class of the overlay panel.
     * @group Props
     */
    panelStyleClass;
    /**
     * Inline style of the overlay panel.
     * @group Props
     */
    panelStyle;
    /**
     * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
     * @group Props
     */
    overlayOptions;
    /**
     * Transition options of the show animation.
     * @group Props
     * @deprecated deprecated since v14.2.0, use overlayOptions property instead.
     */
    get showTransitionOptions() {
      return this._showTransitionOptions;
    }
    set showTransitionOptions(val) {
      this._showTransitionOptions = val;
      console.warn('The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    /**
     * Transition options of the hide animation.
     * @group Props
     * @deprecated deprecated since v14.2.0, use overlayOptions property instead.
     */
    get hideTransitionOptions() {
      return this._hideTransitionOptions;
    }
    set hideTransitionOptions(val) {
      this._hideTransitionOptions = val;
      console.warn('The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    /**
     * Callback to invoke on value change.
     * @param {CascadeSelectChangeEvent} event - Custom change event.
     * @group Emits
     */
    onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a group changes.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onGroupChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the overlay is shown.
     * @param {CascadeSelectShowEvent} event - Custom overlay show event.
     * @group Emits
     */
    onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the overlay is hidden.
     * @param {CascadeSelectHideEvent} event - Custom overlay hide event.
     * @group Emits
     */
    onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the clear token is clicked.
     * @group Emits
     */
    onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke before overlay is shown.
     * @param {CascadeSelectBeforeShowEvent} event - Custom overlay show event.
     * @group Emits
     */
    onBeforeShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke before overlay is hidden.
     * @param {CascadeSelectBeforeHideEvent} event - Custom overlay hide event.
     * @group Emits
     */
    onBeforeHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when input receives focus.
     * @param {FocusEvent} event - Focus event.
     * @group Emits
     */
    onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when input loses focus.
     * @param {FocusEvent} event - Focus event.
     * @group Emits
     */
    onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    focusInputViewChild;
    containerViewChild;
    panelViewChild;
    overlayViewChild;
    templates;
    _showTransitionOptions = '';
    _hideTransitionOptions = '';
    selectionPath = null;
    focused = false;
    overlayVisible = false;
    dirty = true;
    searchValue;
    searchTimeout;
    valueTemplate;
    optionTemplate;
    triggerIconTemplate;
    groupIconTemplate;
    clearIconTemplate;
    onModelChange = () => {};
    onModelTouched = () => {};
    focusedOptionInfo = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)({
      index: -1,
      level: 0,
      parentKey: ''
    });
    activeOptionPath = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
    modelValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    get containerClass() {
      return {
        'p-cascadeselect p-component p-inputwrapper': true,
        'p-disabled': this.disabled,
        'p-focus': this.focused,
        'p-inputwrapper-filled': this.modelValue(),
        'p-inputwrapper-focus': this.focused || this.overlayVisible,
        'p-overlay-open': this.overlayVisible
      };
    }
    get labelClass() {
      return {
        'p-cascadeselect-label': true,
        'p-inputtext': true,
        'p-placeholder': this.label() === this.placeholder,
        'p-cascadeselect-label-empty': !this.value && (this.label() === 'p-emptylabel' || this.label().length === 0)
      };
    }
    get focusedOptionId() {
      return this.focusedOptionInfo().index !== -1 ? `${this.id}${primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(this.focusedOptionInfo().parentKey) ? '_' + this.focusedOptionInfo().parentKey : ''}_${this.focusedOptionInfo().index}` : null;
    }
    get filled() {
      if (typeof this.modelValue() === 'string') return !!this.modelValue();
      return this.modelValue() || this.modelValue() != null || this.modelValue() != undefined;
    }
    get searchResultMessageText() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(this.visibleOptions()) ? this.searchMessageText.replaceAll('{0}', this.visibleOptions().length) : this.emptySearchMessageText;
    }
    get searchMessageText() {
      return this.searchMessage || this.config.translation.searchMessage || '';
    }
    get emptySearchMessageText() {
      return this.emptySearchMessage || this.config.translation.emptySearchMessage || '';
    }
    get emptyMessageText() {
      return this.emptyMessage || this.config.translation.emptyMessage || '';
    }
    get selectionMessageText() {
      return this.selectionMessage || this.config.translation.selectionMessage || '';
    }
    get emptySelectionMessageText() {
      return this.emptySelectionMessage || this.config.translation.emptySelectionMessage || '';
    }
    get selectedMessageText() {
      return this.hasSelectedOption ? this.selectionMessageText.replaceAll('{0}', '1') : this.emptySelectionMessageText;
    }
    visibleOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const processedOption = this.activeOptionPath().find(p => p.key === this.focusedOptionInfo().parentKey);
      return processedOption ? processedOption.children : this.processedOptions();
    });
    processedOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      return this.createProcessedOptions(this.options || []);
    });
    label = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const label = this.placeholder || 'p-emptylabel';
      if (this.hasSelectedOption()) {
        const activeOptionPath = this.findOptionPathByValue(this.modelValue(), null);
        const processedOption = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(activeOptionPath) ? activeOptionPath[activeOptionPath.length - 1] : null;
        return processedOption ? this.getOptionLabel(processedOption.option) : label;
      }
      return label;
    });
    get _label() {
      const label = this.placeholder || 'p-emptylabel';
      if (this.hasSelectedOption()) {
        const activeOptionPath = this.findOptionPathByValue(this.modelValue(), null);
        const processedOption = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(activeOptionPath) ? activeOptionPath[activeOptionPath.length - 1] : null;
        return processedOption ? this.getOptionLabel(processedOption.option) : label;
      }
      return label;
    }
    hasSelectedOption() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(this.modelValue());
    }
    createProcessedOptions(options, level = 0, parent = {}, parentKey = '') {
      const processedOptions = [];
      options && options.forEach((option, index) => {
        const key = (parentKey !== '' ? parentKey + '_' : '') + index;
        const newOption = {
          option,
          index,
          level,
          key,
          parent,
          parentKey
        };
        newOption['children'] = this.createProcessedOptions(this.getOptionGroupChildren(option, level), level + 1, newOption, key);
        processedOptions.push(newOption);
      });
      return processedOptions;
    }
    onInputFocus(event) {
      if (this.disabled) {
        // For screenreaders
        return;
      }
      this.focused = true;
      this.onFocus.emit(event);
    }
    onInputBlur(event) {
      this.focused = false;
      this.focusedOptionInfo.set({
        indeX: -1,
        level: 0,
        parentKey: ''
      });
      this.searchValue = '';
      this.onModelTouched();
      this.onBlur.emit(event);
    }
    onInputKeyDown(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      const metaKey = event.metaKey || event.ctrlKey;
      switch (event.code) {
        case 'ArrowDown':
          this.onArrowDownKey(event);
          break;
        case 'ArrowUp':
          this.onArrowUpKey(event);
          break;
        case 'ArrowLeft':
          this.onArrowLeftKey(event);
          break;
        case 'ArrowRight':
          this.onArrowRightKey(event);
          break;
        case 'Home':
          this.onHomeKey(event);
          break;
        case 'End':
          this.onEndKey(event);
          break;
        case 'Space':
          this.onSpaceKey(event);
          break;
        case 'Enter':
          this.onEnterKey(event);
          break;
        case 'Escape':
          this.onEscapeKey(event);
          break;
        case 'Tab':
          this.onTabKey(event);
          break;
        case 'Backspace':
          this.onBackspaceKey(event);
          break;
        case 'PageDown':
        case 'PageUp':
        case 'ShiftLeft':
        case 'ShiftRight':
          //NOOP
          break;
        default:
          if (!metaKey && primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isPrintableCharacter(event.key)) {
            !this.overlayVisible && this.show();
            this.searchOptions(event, event.key);
          }
          break;
      }
    }
    onArrowDownKey(event) {
      const optionIndex = this.focusedOptionInfo().index !== -1 ? this.findNextOptionIndex(this.focusedOptionInfo().index) : this.findFirstFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
      event.preventDefault();
    }
    onArrowUpKey(event) {
      if (event.altKey) {
        if (this.focusedOptionInfo().index !== -1) {
          const processedOption = this.visibleOptions[this.focusedOptionInfo().index];
          const grouped = this.isProccessedOptionGroup(processedOption);
          !grouped && this.onOptionChange({
            originalEvent: event,
            value: processedOption
          });
        }
        this.overlayVisible && this.hide();
        event.preventDefault();
      } else {
        const optionIndex = this.focusedOptionInfo().index !== -1 ? this.findPrevOptionIndex(this.focusedOptionInfo().index) : this.findLastFocusedOptionIndex();
        this.changeFocusedOptionIndex(event, optionIndex);
        !this.overlayVisible && this.show();
        event.preventDefault();
      }
    }
    onArrowLeftKey(event) {
      if (this.overlayVisible) {
        const processedOption = this.visibleOptions()[this.focusedOptionInfo().index];
        const parentOption = this.activeOptionPath().find(p => p.key === processedOption.parentKey);
        const matched = this.focusedOptionInfo().parentKey === '' || parentOption && parentOption.key === this.focusedOptionInfo().parentKey;
        const root = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isEmpty(processedOption.parent);
        if (matched) {
          const activeOptionPath = this.activeOptionPath().filter(p => p.parentKey !== this.focusedOptionInfo().parentKey);
          this.activeOptionPath.set(activeOptionPath);
        }
        if (!root) {
          this.focusedOptionInfo.set({
            index: -1,
            parentKey: parentOption ? parentOption.parentKey : ''
          });
          this.searchValue = '';
          this.onArrowDownKey(event);
        }
        event.preventDefault();
      }
    }
    onArrowRightKey(event) {
      if (this.overlayVisible) {
        const processedOption = this.visibleOptions()[this.focusedOptionInfo().index];
        const grouped = this.isProccessedOptionGroup(processedOption);
        if (grouped) {
          const matched = this.activeOptionPath().some(p => processedOption.key === p.key);
          if (matched) {
            this.focusedOptionInfo.set({
              index: -1,
              parentKey: processedOption.key
            });
            this.searchValue = '';
            this.onArrowDownKey(event);
          } else {
            this.onOptionChange({
              originalEvent: event,
              value: processedOption
            });
          }
        }
        event.preventDefault();
      }
    }
    onHomeKey(event) {
      this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());
      !this.overlayVisible && this.show();
      event.preventDefault();
    }
    onEndKey(event) {
      this.changeFocusedOptionIndex(event, this.findLastOptionIndex());
      !this.overlayVisible && this.show();
      event.preventDefault();
    }
    onEnterKey(event) {
      if (!this.overlayVisible) {
        this.onArrowDownKey(event);
      } else {
        if (this.focusedOptionInfo().index !== -1) {
          const processedOption = this.visibleOptions()[this.focusedOptionInfo().index];
          const grouped = this.isProccessedOptionGroup(processedOption);
          this.onOptionChange({
            originalEvent: event,
            value: processedOption
          });
          !grouped && this.hide();
        }
      }
      event.preventDefault();
    }
    onSpaceKey(event) {
      this.onEnterKey(event);
    }
    onEscapeKey(event) {
      this.overlayVisible && this.hide(true);
      event.preventDefault();
    }
    onTabKey(event) {
      if (this.focusedOptionInfo().index !== -1) {
        const processedOption = this.visibleOptions()[this.focusedOptionInfo().index];
        const grouped = this.isProccessedOptionGroup(processedOption);
        !grouped && this.onOptionChange({
          originalEvent: event,
          value: processedOption
        });
      }
      this.overlayVisible && this.hide();
    }
    onBackspaceKey(event) {
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(this.modelValue()) && this.showClear) {
        this.clear();
      }
      event.stopPropagation();
    }
    equalityKey() {
      return this.optionValue ? null : this.dataKey;
    }
    updateModel(value, event) {
      this.value = value;
      this.onModelChange(value);
      this.modelValue.set(value);
      this.onChange.emit({
        originalEvent: event,
        value: value
      });
    }
    autoUpdateModel() {
      if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption()) {
        this.focusedOptionInfo().index = this.findFirstFocusedOptionIndex();
        this.onOptionChange({
          originalEvent: null,
          processedOption: this.visibleOptions()[this.focusedOptionInfo().index],
          isHide: false
        });
        !this.overlayVisible && this.focusedOptionInfo.set({
          index: -1,
          level: 0,
          parentKey: ''
        });
      }
    }
    scrollInView(index = -1) {
      const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
      const element = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.panelViewChild?.nativeElement, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: 'nearest',
          inline: 'start'
        });
      }
    }
    changeFocusedOptionIndex(event, index) {
      if (this.focusedOptionInfo().index !== index) {
        const focusedOptionInfo = this.focusedOptionInfo();
        this.focusedOptionInfo.set({
          ...focusedOptionInfo,
          index
        });
        this.scrollInView();
      }
      if (this.selectOnFocus) {
        this.onOptionChange({
          originalEvent: event,
          processedOption: this.visibleOptions()[index],
          isHide: false
        });
      }
    }
    onOptionChange(event) {
      const {
        originalEvent,
        value,
        isFocus,
        isHide
      } = event;
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isEmpty(value)) return;
      const {
        index,
        level,
        parentKey,
        children
      } = value;
      const grouped = primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(children);
      const activeOptionPath = this.activeOptionPath().filter(p => p.parentKey !== parentKey);
      activeOptionPath.push(value);
      this.focusedOptionInfo.set({
        index,
        level,
        parentKey
      });
      this.activeOptionPath.set(activeOptionPath);
      grouped ? this.onOptionGroupSelect({
        originalEvent,
        value,
        isFocus: false
      }) : this.onOptionSelect({
        originalEvent,
        value,
        isFocus
      });
      isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.focus(this.focusInputViewChild.nativeElement);
    }
    onOptionSelect(event) {
      const {
        originalEvent,
        value,
        isFocus
      } = event;
      const newValue = this.getOptionValue(value.option);
      const activeOptionPath = this.activeOptionPath();
      activeOptionPath.forEach(p => p.selected = true);
      this.activeOptionPath.set(activeOptionPath);
      this.updateModel(newValue, originalEvent);
      isFocus && this.hide(true);
    }
    onOptionGroupSelect(event) {
      this.dirty = true;
      this.onGroupChange.emit(event);
    }
    onContainerClick(event) {
      if (this.disabled) {
        return;
      }
      if (!this.overlayViewChild?.el?.nativeElement?.contains(event.target)) {
        if (this.overlayVisible) {
          this.hide();
        } else {
          this.show();
        }
        this.focusInputViewChild?.nativeElement.focus();
      }
    }
    isOptionMatched(processedOption) {
      return this.isValidOption(processedOption) && this.getProccessedOptionLabel(processedOption).toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale));
    }
    isOptionDisabled(option) {
      return this.optionDisabled ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
    }
    isValidOption(processedOption) {
      return !!processedOption && !this.isOptionDisabled(processedOption.option);
    }
    isValidSelectedOption(processedOption) {
      return this.isValidOption(processedOption) && this.isSelected(processedOption);
    }
    isSelected(processedOption) {
      return this.activeOptionPath().some(p => p.key === processedOption.key);
    }
    findOptionPathByValue(value, processedOptions, level = 0) {
      processedOptions = processedOptions || level === 0 && this.processedOptions();
      if (!processedOptions) return null;
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isEmpty(value)) return [];
      for (let i = 0; i < processedOptions.length; i++) {
        const processedOption = processedOptions[i];
        if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.equals(value, this.getOptionValue(processedOption.option), this.equalityKey())) {
          return [processedOption];
        }
        const matchedOptions = this.findOptionPathByValue(value, processedOption.children, level + 1);
        if (matchedOptions) {
          matchedOptions.unshift(processedOption);
          return matchedOptions;
        }
      }
    }
    findFirstOptionIndex() {
      return this.visibleOptions().findIndex(processedOption => this.isValidOption(processedOption));
    }
    findLastOptionIndex() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findLastIndex(this.visibleOptions(), processedOption => this.isValidOption(processedOption));
    }
    findNextOptionIndex(index) {
      const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex(processedOption => this.isValidOption(processedOption)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    }
    findPrevOptionIndex(index) {
      const matchedOptionIndex = index > 0 ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), processedOption => this.isValidOption(processedOption)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    }
    findSelectedOptionIndex() {
      return this.visibleOptions().findIndex(processedOption => this.isValidSelectedOption(processedOption));
    }
    findFirstFocusedOptionIndex() {
      const selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    }
    findLastFocusedOptionIndex() {
      const selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    }
    searchOptions(event, char) {
      this.searchValue = (this.searchValue || '') + char;
      let optionIndex = -1;
      let matched = false;
      const focusedOptionInfo = this.focusedOptionInfo();
      if (focusedOptionInfo.index !== -1) {
        optionIndex = this.visibleOptions().slice(focusedOptionInfo.index).findIndex(processedOption => this.isOptionMatched(processedOption));
        optionIndex = optionIndex === -1 ? this.visibleOptions().slice(0, focusedOptionInfo.index).findIndex(processedOption => this.isOptionMatched(processedOption)) : optionIndex + focusedOptionInfo.index;
      } else {
        optionIndex = this.visibleOptions().findIndex(processedOption => this.isOptionMatched(processedOption));
      }
      if (optionIndex !== -1) {
        matched = true;
      }
      if (optionIndex === -1 && focusedOptionInfo.index === -1) {
        optionIndex = this.findFirstFocusedOptionIndex();
      }
      if (optionIndex !== -1) {
        this.changeFocusedOptionIndex(event, optionIndex);
      }
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(() => {
        this.searchValue = '';
        this.searchTimeout = null;
      }, 500);
      return matched;
    }
    hide(event, isFocus = false) {
      const _hide = () => {
        this.overlayVisible = false;
        this.activeOptionPath.set([]);
        this.focusedOptionInfo.set({
          index: -1,
          level: 0,
          parentKey: ''
        });
        isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.focus(this.focusInputViewChild.nativeElement);
        this.onHide.emit(event);
      };
      setTimeout(() => {
        _hide();
      }, 0); // For ScreenReaders
    }

    show(event, isFocus = false) {
      this.onShow.emit(event);
      this.overlayVisible = true;
      const activeOptionPath = this.hasSelectedOption() ? this.findOptionPathByValue(this.modelValue()) : this.activeOptionPath();
      this.activeOptionPath.set(activeOptionPath);
      let focusedOptionInfo;
      if (this.hasSelectedOption() && primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(this.activeOptionPath())) {
        const processedOption = this.activeOptionPath()[this.activeOptionPath().length - 1];
        focusedOptionInfo = {
          index: this.autoOptionFocus ? processedOption.index : -1,
          level: processedOption.level,
          parentKey: processedOption.parentKey
        };
      } else {
        focusedOptionInfo = {
          index: this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1,
          level: 0,
          parentKey: ''
        };
      }
      this.focusedOptionInfo.set(focusedOptionInfo);
      isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.focus(this.focusInputViewChild.nativeElement);
    }
    clear(event) {
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(this.modelValue()) && this.showClear) {
        this.updateModel(null);
        this.focusedOptionInfo.set({
          index: -1,
          level: 0,
          parentKey: ''
        });
        this.activeOptionPath.set([]);
        this.onClear.emit();
      }
      event && event.stopPropagation();
    }
    getOptionLabel(option) {
      return this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
    }
    getOptionValue(option) {
      return this.optionValue ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(option, this.optionValue) : option;
    }
    getOptionGroupLabel(optionGroup) {
      return this.optionGroupLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : null;
    }
    getOptionGroupChildren(optionGroup, level) {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren[level]);
    }
    isOptionGroup(option, level) {
      return Object.prototype.hasOwnProperty.call(option, this.optionGroupChildren[level]);
    }
    isProccessedOptionGroup(processedOption) {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(processedOption.children);
    }
    getProccessedOptionLabel(processedOption) {
      const grouped = this.isProccessedOptionGroup(processedOption);
      return grouped ? this.getOptionGroupLabel(processedOption.option) : this.getOptionLabel(processedOption.option);
    }
    constructor(el, cd, config, overlayService) {
      this.el = el;
      this.cd = cd;
      this.config = config;
      this.overlayService = overlayService;
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
        const activeOptionPath = this.activeOptionPath();
        if (primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.isNotEmpty(activeOptionPath)) {
          this.overlayViewChild.alignOverlay();
        }
      });
    }
    ngOnInit() {
      this.id = this.id || (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
      this.autoUpdateModel();
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'value':
            this.valueTemplate = item.template;
            break;
          case 'option':
            this.optionTemplate = item.template;
            break;
          case 'triggericon':
            this.triggerIconTemplate = item.template;
            break;
          case 'clearicon':
            this.clearIconTemplate = item.template;
            break;
          case 'optiongroupicon':
            this.groupIconTemplate = item.template;
            break;
        }
      });
    }
    onOverlayAnimationDone(event) {
      switch (event.toState) {
        case 'void':
          this.dirty = false;
          break;
      }
    }
    writeValue(value) {
      this.value = value;
      this.updateModel(value);
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
    static ɵfac = function CascadeSelect_Factory(t) {
      return new (t || CascadeSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.OverlayService));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CascadeSelect,
      selectors: [["p-cascadeSelect"]],
      contentQueries: function CascadeSelect_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function CascadeSelect_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.focusInputViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.panelViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlayViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element", "p-inputwrapper"],
      hostVars: 6,
      hostBindings: function CascadeSelect_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused || ctx.overlayVisible)("p-cascadeselect-clearable", ctx.showClear && !ctx.disabled);
        }
      },
      inputs: {
        id: "id",
        selectOnFocus: "selectOnFocus",
        searchMessage: "searchMessage",
        emptyMessage: "emptyMessage",
        selectionMessage: "selectionMessage",
        emptySearchMessage: "emptySearchMessage",
        emptySelectionMessage: "emptySelectionMessage",
        searchLocale: "searchLocale",
        optionDisabled: "optionDisabled",
        autoOptionFocus: "autoOptionFocus",
        styleClass: "styleClass",
        style: "style",
        options: "options",
        optionLabel: "optionLabel",
        optionValue: "optionValue",
        optionGroupLabel: "optionGroupLabel",
        optionGroupChildren: "optionGroupChildren",
        placeholder: "placeholder",
        value: "value",
        dataKey: "dataKey",
        inputId: "inputId",
        tabindex: "tabindex",
        ariaLabelledBy: "ariaLabelledBy",
        inputLabel: "inputLabel",
        ariaLabel: "ariaLabel",
        appendTo: "appendTo",
        disabled: "disabled",
        showClear: "showClear",
        panelStyleClass: "panelStyleClass",
        panelStyle: "panelStyle",
        overlayOptions: "overlayOptions",
        showTransitionOptions: "showTransitionOptions",
        hideTransitionOptions: "hideTransitionOptions"
      },
      outputs: {
        onChange: "onChange",
        onGroupChange: "onGroupChange",
        onShow: "onShow",
        onHide: "onHide",
        onClear: "onClear",
        onBeforeShow: "onBeforeShow",
        onBeforeHide: "onBeforeHide",
        onFocus: "onFocus",
        onBlur: "onBlur"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CASCADESELECT_VALUE_ACCESSOR])],
      decls: 18,
      vars: 33,
      consts: [[3, "ngClass", "ngStyle", "click"], ["container", ""], [1, "p-hidden-accessible"], ["readonly", "", "type", "text", "role", "combobox", "aria-haspopup", "tree", 3, "disabled", "placeholder", "tabindex", "focus", "blur", "keydown"], ["focusInput", ""], [3, "ngClass"], [4, "ngIf", "ngIfElse"], ["defaultValueTemplate", ""], [4, "ngIf"], ["role", "button", "aria-haspopup", "listbox", 1, "p-cascadeselect-trigger"], [3, "styleClass", 4, "ngIf"], ["class", "p-cascadeselect-trigger-icon", 4, "ngIf"], ["role", "status", "aria-live", "polite", 1, "p-hidden-accessible"], [3, "visible", "options", "target", "appendTo", "showTransitionOptions", "hideTransitionOptions", "visibleChange", "onAnimationDone", "onBeforeShow", "onShow", "onBeforeHide", "onHide"], ["overlay", ""], ["pTemplate", "content"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-cascadeselect-clear-icon", 3, "click", 4, "ngIf"], [3, "styleClass", "click"], [1, "p-cascadeselect-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], [3, "styleClass"], [1, "p-cascadeselect-trigger-icon"], [1, "p-cascadeselect-panel", "p-component", 3, "ngStyle"], ["panel", ""], [1, "p-cascadeselect-items-wrapper"], [1, "p-cascadeselect-items", 3, "options", "selectId", "focusedOptionId", "activeOptionPath", "optionLabel", "optionValue", "level", "optionTemplate", "groupIconTemplate", "optionGroupLabel", "optionGroupChildren", "optionDisabled", "root", "dirty", "role", "onChange"]],
      template: function CascadeSelect_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CascadeSelect_Template_div_click_0_listener($event) {
            return ctx.onContainerClick($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "input", 3, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function CascadeSelect_Template_input_focus_3_listener($event) {
            return ctx.onInputFocus($event);
          })("blur", function CascadeSelect_Template_input_blur_3_listener($event) {
            return ctx.onInputBlur($event);
          })("keydown", function CascadeSelect_Template_input_keydown_3_listener($event) {
            return ctx.onInputKeyDown($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CascadeSelect_ng_container_6_Template, 2, 5, "ng-container", 6)(7, CascadeSelect_ng_template_7_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CascadeSelect_ng_container_9_Template, 3, 2, "ng-container", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CascadeSelect_ChevronDownIcon_11_Template, 1, 1, "ChevronDownIcon", 10)(12, CascadeSelect_span_12_Template, 2, 1, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p-overlay", 13, 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function CascadeSelect_Template_p_overlay_visibleChange_15_listener($event) {
            return ctx.overlayVisible = $event;
          })("onAnimationDone", function CascadeSelect_Template_p_overlay_onAnimationDone_15_listener($event) {
            return ctx.onOverlayAnimationDone($event);
          })("onBeforeShow", function CascadeSelect_Template_p_overlay_onBeforeShow_15_listener($event) {
            return ctx.onBeforeShow.emit($event);
          })("onShow", function CascadeSelect_Template_p_overlay_onShow_15_listener($event) {
            return ctx.show($event);
          })("onBeforeHide", function CascadeSelect_Template_p_overlay_onBeforeHide_15_listener($event) {
            return ctx.onBeforeHide.emit($event);
          })("onHide", function CascadeSelect_Template_p_overlay_onHide_15_listener($event) {
            return ctx.hide($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CascadeSelect_ng_template_17_Template, 6, 23, "ng-template", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass)("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "cascadeselect")("data-pc-section", "root");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "hiddenInputWrapper");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("placeholder", ctx.placeholder)("tabindex", !ctx.disabled ? ctx.tabindex : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("aria-expanded", ctx.overlayVisible)("aria-controls", ctx.id + "_tree")("aria-activedescendant", ctx.focused ? ctx.focusedOptionId : undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.labelClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.valueTemplate)("ngIfElse", _r4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filled && !ctx.disabled && ctx.showClear);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.overlayVisible)("data-pc-section", "dropdownIcon")("aria-hidden", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.triggerIconTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.triggerIconTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.searchResultMessageText, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.overlayVisible)("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, primeng_overlay__WEBPACK_IMPORTED_MODULE_8__.Overlay, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_9__.ChevronDownIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_10__.TimesIcon, CascadeSelectSub],
      styles: ["@layer primeng{.p-cascadeselect{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-cascadeselect-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-cascadeselect-label{display:block;white-space:nowrap;overflow:hidden;flex:1 1 auto;width:1%;text-overflow:ellipsis;cursor:pointer}.p-cascadeselect-label-empty{overflow:hidden;visibility:hidden}.p-cascadeselect-item{cursor:pointer;font-weight:400;white-space:nowrap}.p-cascadeselect-item-content{display:flex;align-items:center;overflow:hidden;position:relative}.p-cascadeselect-group-icon{margin-left:auto}.p-cascadeselect-items{margin:0;padding:0;list-style-type:none}.p-fluid .p-cascadeselect{display:flex}.p-fluid .p-cascadeselect .p-cascadeselect-label{width:1%}.p-cascadeselect-sublist{position:absolute;min-width:100%;z-index:1;display:none}.p-cascadeselect-item-active{overflow:visible!important}.p-cascadeselect-item-active>.p-cascadeselect-sublist{display:block;left:100%;top:0}.p-cascadeselect-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-cascadeselect-clearable,.p-overlay-modal .p-cascadeselect-sublist{position:relative}.p-overlay-modal .p-cascadeselect-item-active>.p-cascadeselect-sublist{left:0}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return CascadeSelect;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CascadeSelectModule = /*#__PURE__*/(() => {
  class CascadeSelectModule {
    static ɵfac = function CascadeSelectModule_Factory(t) {
      return new (t || CascadeSelectModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CascadeSelectModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_overlay__WEBPACK_IMPORTED_MODULE_8__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_7__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_9__.ChevronDownIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_6__.AngleRightIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_10__.TimesIcon, primeng_overlay__WEBPACK_IMPORTED_MODULE_8__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_7__.SharedModule]
    });
  }
  return CascadeSelectModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-cascadeselect.mjs.map

/***/ }),

/***/ 31480:
/*!*********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-chips.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHIPS_VALUE_ACCESSOR: () => (/* binding */ CHIPS_VALUE_ACCESSOR),
/* harmony export */   Chips: () => (/* binding */ Chips),
/* harmony export */   ChipsModule: () => (/* binding */ ChipsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/times */ 77778);
/* harmony import */ var primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/timescircle */ 88468);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 2332);










const _c0 = ["inputtext"];
const _c1 = ["container"];
function Chips_li_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Chips_li_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.field ? ctx_r8.resolveFieldData(item_r4, ctx_r8.field) : item_r4);
  }
}
function Chips_li_3_ng_container_4_TimesCircleIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "TimesCircleIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Chips_li_3_ng_container_4_TimesCircleIcon_1_Template_TimesCircleIcon_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.removeItem($event, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-chips-token-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "removeTokenIcon")("aria-hidden", true);
  }
}
function Chips_li_3_ng_container_4_span_2_1_ng_template_0_Template(rf, ctx) {}
function Chips_li_3_ng_container_4_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Chips_li_3_ng_container_4_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Chips_li_3_ng_container_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Chips_li_3_ng_container_4_span_2_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.removeItem($event, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Chips_li_3_ng_container_4_span_2_1_Template, 1, 0, null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "removeTokenIcon")("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r12.removeTokenIconTemplate);
  }
}
function Chips_li_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Chips_li_3_ng_container_4_TimesCircleIcon_1_Template, 1, 3, "TimesCircleIcon", 13)(2, Chips_li_3_ng_container_4_span_2_Template, 2, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.removeTokenIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.removeTokenIconTemplate);
  }
}
const _c2 = a1 => ({
  "p-chips-token": true,
  "p-focus": a1
});
const _c3 = a0 => ({
  $implicit: a0
});
function Chips_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Chips_li_3_Template_li_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const item_r4 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.onItemClick($event, item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Chips_li_3_ng_container_2_Template, 1, 0, "ng-container", 10)(3, Chips_li_3_span_3_Template, 2, 2, "span", 11)(4, Chips_li_3_ng_container_4_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, ctx_r1.focusedIndex === i_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r1.id + "_chips_item_" + i_r5)("ariaLabel", item_r4)("aria-selected", true)("aria-setsize", ctx_r1.value.length)("aria-pointset", i_r5 + 1)("data-p-focused", ctx_r1.focusedIndex === i_r5)("data-pc-section", "token");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c3, item_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.disabled);
  }
}
function Chips_li_7_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "TimesIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Chips_li_7_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r25.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-chips-clear-icon");
  }
}
function Chips_li_7_span_2_1_ng_template_0_Template(rf, ctx) {}
function Chips_li_7_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Chips_li_7_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Chips_li_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Chips_li_7_span_2_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r29.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Chips_li_7_span_2_1_Template, 1, 0, null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r24.clearIconTemplate);
  }
}
function Chips_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Chips_li_7_TimesIcon_1_Template, 1, 1, "TimesIcon", 13)(2, Chips_li_7_span_2_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.clearIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.clearIconTemplate);
  }
}
const _c4 = (a1, a2, a3, a4) => ({
  "p-chips p-component p-input-wrapper": true,
  "p-disabled": a1,
  "p-focus": a2,
  "p-inputwrapper-filled": a3,
  "p-inputwrapper-focus": a4
});
const _c5 = () => ({
  "p-inputtext p-chips-multiple-container": true
});
const _c6 = a0 => ({
  "p-chips-clearable": a0
});
const CHIPS_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => Chips),
  multi: true
};
/**
 * Chips groups a collection of contents in tabs.
 * @group Components
 */
let Chips = /*#__PURE__*/(() => {
  class Chips {
    document;
    el;
    cd;
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
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    disabled;
    /**
     * Name of the property to display on a chip.
     * @group Props
     */
    field;
    /**
     * Advisory information to display on input.
     * @group Props
     */
    placeholder;
    /**
     * Maximum number of entries allowed.
     * @group Props
     */
    max;
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
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex;
    /**
     * Identifier of the focus input to match a label defined for the component.
     * @group Props
     */
    inputId;
    /**
     * Whether to allow duplicate values or not.
     * @group Props
     */
    allowDuplicate = true;
    /**
     * Inline style of the input field.
     * @group Props
     */
    inputStyle;
    /**
     * Style class of the input field.
     * @group Props
     */
    inputStyleClass;
    /**
     * Whether to add an item on tab key press.
     * @group Props
     */
    addOnTab;
    /**
     * Whether to add an item when the input loses focus.
     * @group Props
     */
    addOnBlur;
    /**
     * Separator char to add an item when pressed in addition to the enter key.
     * @group Props
     */
    separator;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    showClear = false;
    /**
     * Callback to invoke on chip add.
     * @param {ChipsAddEvent} event - Custom chip add event.
     * @group Emits
     */
    onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on chip remove.
     * @param {ChipsRemoveEvent} event - Custom chip remove event.
     * @group Emits
     */
    onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on focus of input field.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on blur of input field.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on chip clicked.
     * @param {ChipsClickEvent} event - Custom chip click event.
     * @group Emits
     */
    onChipClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on clear token clicked.
     * @group Emits
     */
    onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    inputViewChild;
    containerViewChild;
    templates;
    itemTemplate;
    removeTokenIconTemplate;
    clearIconTemplate;
    value;
    onModelChange = () => {};
    onModelTouched = () => {};
    valueChanged;
    id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_2__.UniqueComponentId)();
    focused;
    focusedIndex;
    filled;
    get focusedOptionId() {
      return this.focusedIndex !== null ? `${this.id}_chips_item_${this.focusedIndex}` : null;
    }
    get isMaxedOut() {
      return this.max && this.value && this.max === this.value.length;
    }
    constructor(document, el, cd) {
      this.document = document;
      this.el = el;
      this.cd = cd;
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'item':
            this.itemTemplate = item.template;
            break;
          case 'removetokenicon':
            this.removeTokenIconTemplate = item.template;
            break;
          case 'clearicon':
            this.clearIconTemplate = item.template;
            break;
          default:
            this.itemTemplate = item.template;
            break;
        }
      });
      this.updateFilledState();
    }
    onWrapperClick() {
      this.inputViewChild?.nativeElement.focus();
    }
    onContainerFocus() {
      this.focused = true;
    }
    onContainerBlur() {
      this.focusedIndex = -1;
      this.focused = false;
    }
    onContainerKeyDown(event) {
      switch (event.code) {
        case 'ArrowLeft':
          this.onArrowLeftKeyOn();
          break;
        case 'ArrowRight':
          this.onArrowRightKeyOn();
          break;
        case 'Backspace':
          this.onBackspaceKeyOn(event);
          break;
        default:
          break;
      }
    }
    onArrowLeftKeyOn() {
      if (this.inputViewChild.nativeElement.value.length === 0 && this.value && this.value.length > 0) {
        this.focusedIndex = this.focusedIndex === null ? this.value.length - 1 : this.focusedIndex - 1;
        if (this.focusedIndex < 0) this.focusedIndex = 0;
      }
    }
    onArrowRightKeyOn() {
      if (this.inputViewChild.nativeElement.value.length === 0 && this.value && this.value.length > 0) {
        if (this.focusedIndex === this.value.length - 1) {
          this.focusedIndex = null;
          this.inputViewChild?.nativeElement.focus();
        } else {
          this.focusedIndex++;
        }
      }
    }
    onBackspaceKeyOn(event) {
      if (this.focusedIndex !== null) {
        this.removeItem(event, this.focusedIndex);
      }
    }
    onInput() {
      this.updateFilledState();
      this.focusedIndex = null;
    }
    onPaste(event) {
      if (!this.disabled) {
        if (this.separator) {
          const pastedData = (event.clipboardData || this.document.defaultView['clipboardData']).getData('Text');
          pastedData.split(this.separator).forEach(val => {
            this.addItem(event, val, true);
          });
          this.inputViewChild.nativeElement.value = '';
        }
        this.updateFilledState();
      }
    }
    updateFilledState() {
      if (!this.value || this.value.length === 0) {
        this.filled = this.inputViewChild && this.inputViewChild.nativeElement && this.inputViewChild.nativeElement.value != '';
      } else {
        this.filled = true;
      }
    }
    onItemClick(event, item) {
      this.onChipClick.emit({
        originalEvent: event,
        value: item
      });
    }
    writeValue(value) {
      this.value = value;
      this.updateMaxedOut();
      this.updateFilledState();
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
    resolveFieldData(data, field) {
      if (data && field) {
        if (field.indexOf('.') == -1) {
          return data[field];
        } else {
          let fields = field.split('.');
          let value = data;
          for (var i = 0, len = fields.length; i < len; ++i) {
            value = value[fields[i]];
          }
          return value;
        }
      } else {
        return null;
      }
    }
    onInputFocus(event) {
      this.focused = true;
      this.focusedIndex = null;
      this.onFocus.emit(event);
    }
    onInputBlur(event) {
      this.focused = false;
      this.focusedIndex = null;
      if (this.addOnBlur && this.inputViewChild.nativeElement.value) {
        this.addItem(event, this.inputViewChild.nativeElement.value, false);
      }
      this.onModelTouched();
      this.onBlur.emit(event);
    }
    removeItem(event, index) {
      if (this.disabled) {
        return;
      }
      let removedItem = this.value[index];
      this.value = this.value.filter((val, i) => i != index);
      this.focusedIndex = null;
      this.inputViewChild.nativeElement.focus();
      this.onModelChange(this.value);
      this.onRemove.emit({
        originalEvent: event,
        value: removedItem
      });
      this.updateFilledState();
      this.updateMaxedOut();
    }
    addItem(event, item, preventDefault) {
      this.value = this.value || [];
      if (item && item.trim().length) {
        if ((this.allowDuplicate || this.value.indexOf(item) === -1) && !this.isMaxedOut) {
          this.value = [...this.value, item];
          this.onModelChange(this.value);
          this.onAdd.emit({
            originalEvent: event,
            value: item
          });
        }
      }
      this.updateFilledState();
      this.updateMaxedOut();
      this.inputViewChild.nativeElement.value = '';
      if (preventDefault) {
        event.preventDefault();
      }
    }
    clear() {
      this.value = null;
      this.updateFilledState();
      this.onModelChange(this.value);
      this.updateMaxedOut();
      this.onClear.emit();
    }
    onKeyDown(event) {
      const inputValue = event.target.value;
      switch (event.code) {
        case 'Backspace':
          if (inputValue.length === 0 && this.value && this.value.length > 0) {
            if (this.focusedIndex !== null) {
              this.removeItem(event, this.focusedIndex);
            } else this.removeItem(event, this.value.length - 1);
          }
          break;
        case 'Enter':
          if (inputValue && inputValue.trim().length && !this.isMaxedOut) {
            this.addItem(event, inputValue, true);
          }
          break;
        case 'ArrowLeft':
          if (inputValue.length === 0 && this.value && this.value.length > 0) {
            this.containerViewChild?.nativeElement.focus();
          }
          break;
        case 'ArrowRight':
          event.stopPropagation();
          break;
        default:
          if (this.separator) {
            if (this.separator === event.key || event.key.match(this.separator)) {
              this.addItem(event, inputValue, true);
            }
          }
          break;
      }
    }
    updateMaxedOut() {
      if (this.inputViewChild && this.inputViewChild.nativeElement) {
        if (this.isMaxedOut) {
          // Calling `blur` is necessary because firefox does not call `onfocus` events
          // for disabled inputs, unlike chromium browsers.
          this.inputViewChild.nativeElement.blur();
          this.inputViewChild.nativeElement.disabled = true;
        } else {
          if (this.disabled) {
            this.inputViewChild.nativeElement.blur();
          }
          this.inputViewChild.nativeElement.disabled = this.disabled || false;
        }
      }
    }
    static ɵfac = function Chips_Factory(t) {
      return new (t || Chips)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Chips,
      selectors: [["p-chips"]],
      contentQueries: function Chips_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Chips_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element", "p-inputwrapper"],
      hostVars: 6,
      hostBindings: function Chips_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused)("p-chips-clearable", ctx.showClear);
        }
      },
      inputs: {
        style: "style",
        styleClass: "styleClass",
        disabled: "disabled",
        field: "field",
        placeholder: "placeholder",
        max: "max",
        ariaLabel: "ariaLabel",
        ariaLabelledBy: "ariaLabelledBy",
        tabindex: "tabindex",
        inputId: "inputId",
        allowDuplicate: "allowDuplicate",
        inputStyle: "inputStyle",
        inputStyleClass: "inputStyleClass",
        addOnTab: "addOnTab",
        addOnBlur: "addOnBlur",
        separator: "separator",
        showClear: "showClear"
      },
      outputs: {
        onAdd: "onAdd",
        onRemove: "onRemove",
        onFocus: "onFocus",
        onBlur: "onBlur",
        onChipClick: "onChipClick",
        onClear: "onClear"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CHIPS_VALUE_ACCESSOR])],
      decls: 8,
      vars: 31,
      consts: [[3, "ngClass", "ngStyle"], ["tabindex", "-1", "role", "listbox", 3, "ngClass", "click", "focus", "blur", "keydown"], ["container", ""], ["role", "option", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["role", "option", 1, "p-chips-input-token", 3, "ngClass"], ["type", "text", 3, "disabled", "ngStyle", "keydown", "input", "paste", "focus", "blur"], ["inputtext", ""], [4, "ngIf"], ["role", "option", 3, "ngClass", "click"], ["token", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-chips-token-label", 4, "ngIf"], [1, "p-chips-token-label"], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-chips-token-icon", 3, "click", 4, "ngIf"], [3, "styleClass", "click"], [1, "p-chips-token-icon", 3, "click"], [4, "ngTemplateOutlet"], ["class", "p-chips-clear-icon", 3, "click", 4, "ngIf"], [1, "p-chips-clear-icon", 3, "click"]],
      template: function Chips_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ul", 1, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Chips_Template_ul_click_1_listener() {
            return ctx.onWrapperClick();
          })("focus", function Chips_Template_ul_focus_1_listener() {
            return ctx.onContainerFocus();
          })("blur", function Chips_Template_ul_blur_1_listener() {
            return ctx.onContainerBlur();
          })("keydown", function Chips_Template_ul_keydown_1_listener($event) {
            return ctx.onContainerKeyDown($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Chips_li_3_Template, 5, 16, "li", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4)(5, "input", 5, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Chips_Template_input_keydown_5_listener($event) {
            return ctx.onKeyDown($event);
          })("input", function Chips_Template_input_input_5_listener() {
            return ctx.onInput();
          })("paste", function Chips_Template_input_paste_5_listener($event) {
            return ctx.onPaste($event);
          })("focus", function Chips_Template_input_focus_5_listener($event) {
            return ctx.onInputFocus($event);
          })("blur", function Chips_Template_input_blur_5_listener($event) {
            return ctx.onInputBlur($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Chips_li_7_Template, 3, 2, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](23, _c4, ctx.disabled, ctx.focused, ctx.value && ctx.value.length || (ctx.inputViewChild == null ? null : ctx.inputViewChild.nativeElement.value) && (ctx.inputViewChild == null ? null : ctx.inputViewChild.nativeElement.value.length), ctx.focused))("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "chips")("data-pc-section", "root");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c5));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("aria-activedescendant", ctx.focused ? ctx.focusedOptionId : undefined)("aria-orientation", "horizontal")("data-pc-section", "container");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c6, ctx.showClear && !ctx.disabled));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "inputToken");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.inputStyleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled || ctx.isMaxedOut)("ngStyle", ctx.inputStyle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("placeholder", ctx.value && ctx.value.length ? null : ctx.placeholder)("tabindex", ctx.tabindex);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value != null && ctx.filled && !ctx.disabled && ctx.showClear);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_5__.TimesCircleIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_6__.TimesIcon],
      styles: ["@layer primeng{.p-chips{display:inline-flex}.p-chips-multiple-container{margin:0;padding:0;list-style-type:none;cursor:text;overflow:hidden;display:flex;align-items:center;flex-wrap:wrap}.p-chips-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto;max-width:100%}.p-chips-token-label{min-width:0%;overflow:auto}.p-chips-token-label::-webkit-scrollbar{display:none}.p-chips-input-token{flex:1 1 auto;display:inline-flex}.p-chips-token-icon{cursor:pointer}.p-chips-input-token input{border:0 none;outline:0 none;background-color:transparent;margin:0;padding:0;box-shadow:none;border-radius:0;width:100%}.p-fluid .p-chips{display:flex}.p-chips-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-chips-clearable .p-inputtext{position:relative}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return Chips;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ChipsModule = /*#__PURE__*/(() => {
  class ChipsModule {
    static ɵfac = function ChipsModule_Factory(t) {
      return new (t || ChipsModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ChipsModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_5__.TimesCircleIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_6__.TimesIcon, primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputTextModule, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
    });
  }
  return ChipsModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-chips.mjs.map

/***/ }),

/***/ 59663:
/*!*************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-inputmask.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INPUTMASK_VALUE_ACCESSOR: () => (/* binding */ INPUTMASK_VALUE_ACCESSOR),
/* harmony export */   InputMask: () => (/* binding */ InputMask),
/* harmony export */   InputMaskModule: () => (/* binding */ InputMaskModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_autofocus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/autofocus */ 40218);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 82076);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/times */ 77778);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 53714);













/*
    Port of jQuery MaskedInput by DigitalBush as a Native Angular2 Component in Typescript without jQuery
    https://github.com/digitalBush/jquery.maskedinput/

    Copyright (c) 2007-2014 Josh Bush (digitalbush.com)

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
*/
const _c0 = ["input"];
function InputMask_ng_container_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "TimesIcon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputMask_ng_container_2_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-inputmask-clear-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearIcon");
  }
}
function InputMask_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {}
function InputMask_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputMask_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputMask_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputMask_ng_container_2_span_2_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputMask_ng_container_2_span_2_1_Template, 1, 0, null, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearIcon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.clearIconTemplate);
  }
}
function InputMask_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputMask_ng_container_2_TimesIcon_1_Template, 1, 2, "TimesIcon", 3)(2, InputMask_ng_container_2_span_2_Template, 2, 2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.clearIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.clearIconTemplate);
  }
}
const INPUTMASK_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => InputMask),
  multi: true
};
/**
 * InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.
 * @group Components
 */
let InputMask = /*#__PURE__*/(() => {
  class InputMask {
    document;
    platformId;
    el;
    cd;
    /**
     * HTML5 input type.
     * @group Props
     */
    type = 'text';
    /**
     * Placeholder character in mask, default is underscore.
     * @group Props
     */
    slotChar = '_';
    /**
     * Clears the incomplete value on blur.
     * @group Props
     */
    autoClear = true;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    showClear = false;
    /**
     * Inline style of the input field.
     * @group Props
     */
    style;
    /**
     * Identifier of the focus input to match a label defined for the component.
     * @group Props
     */
    inputId;
    /**
     * Style class of the input field.
     * @group Props
     */
    styleClass;
    /**
     * Advisory information to display on input.
     * @group Props
     */
    placeholder;
    /**
     * Size of the input field.
     * @group Props
     */
    size;
    /**
     * Maximum number of character allows in the input field.
     * @group Props
     */
    maxlength;
    /**
     * Specifies tab order of the element.
     * @group Props
     */
    tabindex;
    /**
     * Title text of the input text.
     * @group Props
     */
    title;
    /**
     * Used to define a string that labels the input element.
     * @group Props
     */
    ariaLabel;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Used to indicate that user input is required on an element before a form can be submitted.
     * @group Props
     */
    ariaRequired;
    /**
     * When present, it specifies that the element value cannot be altered.
     * @group Props
     */
    disabled;
    /**
     * When present, it specifies that an input field is read-only.
     * @group Props
     */
    readonly;
    /**
     * Defines if ngModel sets the raw unmasked value to bound value or the formatted mask value.
     * @group Props
     */
    unmask;
    /**
     * Name of the input field.
     * @group Props
     */
    name;
    /**
     * When present, it specifies that an input field must be filled out before submitting the form.
     * @group Props
     */
    required;
    /**
     * Regex pattern for alpha characters
     * @group Props
     */
    characterPattern = '[A-Za-z]';
    /**
     * When present, the input gets a focus automatically on load.
     * @group Props
     */
    autoFocus;
    /**
     * Used to define a string that autocomplete attribute the current element.
     * @group Props
     */
    autocomplete;
    /**
     * When present, it specifies that whether to clean buffer value from model.
     * @group Props
     */
    keepBuffer = false;
    /**
     * Mask pattern.
     * @group Props
     */
    get mask() {
      return this._mask;
    }
    set mask(val) {
      this._mask = val;
      this.initMask();
      this.writeValue('');
      this.onModelChange(this.value);
    }
    /**
     * Callback to invoke when the mask is completed.
     * @group Emits
     */
    onComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the component receives focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the component loses focus.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on input.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on input key press.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when input field is cleared.
     * @group Emits
     */
    onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    inputViewChild;
    templates;
    clearIconTemplate;
    value;
    _mask;
    onModelChange = () => {};
    onModelTouched = () => {};
    input;
    filled;
    defs;
    tests;
    partialPosition;
    firstNonMaskPos;
    lastRequiredNonMaskPos;
    len;
    oldVal;
    buffer;
    defaultBuffer;
    focusText;
    caretTimeoutId;
    androidChrome = true;
    focused;
    constructor(document, platformId, el, cd) {
      this.document = document;
      this.platformId = platformId;
      this.el = el;
      this.cd = cd;
    }
    ngOnInit() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
        let ua = navigator.userAgent;
        this.androidChrome = /chrome/i.test(ua) && /android/i.test(ua);
      }
      this.initMask();
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'clearicon':
            this.clearIconTemplate = item.template;
            break;
        }
      });
    }
    initMask() {
      this.tests = [];
      this.partialPosition = this.mask.length;
      this.len = this.mask.length;
      this.firstNonMaskPos = null;
      this.defs = {
        '9': '[0-9]',
        a: this.characterPattern,
        '*': `${this.characterPattern}|[0-9]`
      };
      let maskTokens = this.mask.split('');
      for (let i = 0; i < maskTokens.length; i++) {
        let c = maskTokens[i];
        if (c == '?') {
          this.len--;
          this.partialPosition = i;
        } else if (this.defs[c]) {
          this.tests.push(new RegExp(this.defs[c]));
          if (this.firstNonMaskPos === null) {
            this.firstNonMaskPos = this.tests.length - 1;
          }
          if (i < this.partialPosition) {
            this.lastRequiredNonMaskPos = this.tests.length - 1;
          }
        } else {
          this.tests.push(null);
        }
      }
      this.buffer = [];
      for (let i = 0; i < maskTokens.length; i++) {
        let c = maskTokens[i];
        if (c != '?') {
          if (this.defs[c]) this.buffer.push(this.getPlaceholder(i));else this.buffer.push(c);
        }
      }
      this.defaultBuffer = this.buffer.join('');
    }
    writeValue(value) {
      this.value = value;
      if (this.inputViewChild && this.inputViewChild.nativeElement) {
        if (this.value == undefined || this.value == null) this.inputViewChild.nativeElement.value = '';else this.inputViewChild.nativeElement.value = this.value;
        this.checkVal();
        this.focusText = this.inputViewChild.nativeElement.value;
        this.updateFilledState();
      }
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
    caret(first, last) {
      let range, begin, end;
      if (!this.inputViewChild?.nativeElement.offsetParent || this.inputViewChild.nativeElement !== this.inputViewChild.nativeElement.ownerDocument.activeElement) {
        return;
      }
      if (typeof first == 'number') {
        begin = first;
        end = typeof last === 'number' ? last : begin;
        if (this.inputViewChild.nativeElement.setSelectionRange) {
          this.inputViewChild.nativeElement.setSelectionRange(begin, end);
        } else if (this.inputViewChild.nativeElement['createTextRange']) {
          range = this.inputViewChild.nativeElement['createTextRange']();
          range.collapse(true);
          range.moveEnd('character', end);
          range.moveStart('character', begin);
          range.select();
        }
      } else {
        if (this.inputViewChild.nativeElement.setSelectionRange) {
          begin = this.inputViewChild.nativeElement.selectionStart;
          end = this.inputViewChild.nativeElement.selectionEnd;
        } else if (this.document && this.document['selection'].createRange) {
          range = this.document.createRange();
          begin = 0 - range.duplicate().moveStart('character', -100000);
          end = begin + range.text.length;
        }
        return {
          begin: begin,
          end: end
        };
      }
    }
    isCompleted() {
      let completed;
      for (let i = this.firstNonMaskPos; i <= this.lastRequiredNonMaskPos; i++) {
        if (this.tests[i] && this.buffer[i] === this.getPlaceholder(i)) {
          return false;
        }
      }
      return true;
    }
    getPlaceholder(i) {
      if (i < this.slotChar.length) {
        return this.slotChar.charAt(i);
      }
      return this.slotChar.charAt(0);
    }
    seekNext(pos) {
      while (++pos < this.len && !this.tests[pos]);
      return pos;
    }
    seekPrev(pos) {
      while (--pos >= 0 && !this.tests[pos]);
      return pos;
    }
    shiftL(begin, end) {
      let i, j;
      if (begin < 0) {
        return;
      }
      for (i = begin, j = this.seekNext(end); i < this.len; i++) {
        if (this.tests[i]) {
          if (j < this.len && this.tests[i].test(this.buffer[j])) {
            this.buffer[i] = this.buffer[j];
            this.buffer[j] = this.getPlaceholder(j);
          } else {
            break;
          }
          j = this.seekNext(j);
        }
      }
      this.writeBuffer();
      this.caret(Math.max(this.firstNonMaskPos, begin));
    }
    shiftR(pos) {
      let i, c, j, t;
      for (i = pos, c = this.getPlaceholder(pos); i < this.len; i++) {
        if (this.tests[i]) {
          j = this.seekNext(i);
          t = this.buffer[i];
          this.buffer[i] = c;
          if (j < this.len && this.tests[j].test(t)) {
            c = t;
          } else {
            break;
          }
        }
      }
    }
    handleAndroidInput(e) {
      var curVal = this.inputViewChild?.nativeElement.value;
      var pos = this.caret();
      if (this.oldVal && this.oldVal.length && this.oldVal.length > curVal.length) {
        // a deletion or backspace happened
        this.checkVal(true);
        while (pos.begin > 0 && !this.tests[pos.begin - 1]) pos.begin--;
        if (pos.begin === 0) {
          while (pos.begin < this.firstNonMaskPos && !this.tests[pos.begin]) pos.begin++;
        }
        setTimeout(() => {
          this.caret(pos.begin, pos.begin);
          this.updateModel(e);
          if (this.isCompleted()) {
            this.onComplete.emit();
          }
        }, 0);
      } else {
        this.checkVal(true);
        while (pos.begin < this.len && !this.tests[pos.begin]) pos.begin++;
        setTimeout(() => {
          this.caret(pos.begin, pos.begin);
          this.updateModel(e);
          if (this.isCompleted()) {
            this.onComplete.emit();
          }
        }, 0);
      }
    }
    onInputBlur(e) {
      this.focused = false;
      this.onModelTouched();
      if (!this.keepBuffer) {
        this.checkVal();
      }
      this.updateFilledState();
      this.onBlur.emit(e);
      if (this.inputViewChild?.nativeElement.value != this.focusText || this.inputViewChild?.nativeElement.value != this.value) {
        this.updateModel(e);
        let event = this.document.createEvent('HTMLEvents');
        event.initEvent('change', true, false);
        this.inputViewChild?.nativeElement.dispatchEvent(event);
      }
    }
    onInputKeydown(e) {
      if (this.readonly) {
        return;
      }
      let k = e.which || e.keyCode,
        pos,
        begin,
        end;
      let iPhone;
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
        iPhone = /iphone/i.test(primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getUserAgent());
      }
      this.oldVal = this.inputViewChild?.nativeElement.value;
      this.onKeydown.emit(e);
      //backspace, delete, and escape get special treatment
      if (k === 8 || k === 46 || iPhone && k === 127) {
        pos = this.caret();
        begin = pos.begin;
        end = pos.end;
        if (end - begin === 0) {
          begin = k !== 46 ? this.seekPrev(begin) : end = this.seekNext(begin - 1);
          end = k === 46 ? this.seekNext(end) : end;
        }
        this.clearBuffer(begin, end);
        if (this.keepBuffer) {
          this.shiftL(begin, end - 2);
        } else {
          this.shiftL(begin, end - 1);
        }
        this.updateModel(e);
        this.onInput.emit(e);
        e.preventDefault();
      } else if (k === 13) {
        // enter
        this.onInputBlur(e);
        this.updateModel(e);
      } else if (k === 27) {
        // escape
        this.inputViewChild.nativeElement.value = this.focusText;
        this.caret(0, this.checkVal());
        this.updateModel(e);
        e.preventDefault();
      }
    }
    onKeyPress(e) {
      if (this.readonly) {
        return;
      }
      var k = e.which || e.keyCode,
        pos = this.caret(),
        p,
        c,
        next,
        completed;
      if (e.ctrlKey || e.altKey || e.metaKey || k < 32 || k > 34 && k < 41) {
        //Ignore
        return;
      } else if (k && k !== 13) {
        if (pos.end - pos.begin !== 0) {
          this.clearBuffer(pos.begin, pos.end);
          this.shiftL(pos.begin, pos.end - 1);
        }
        p = this.seekNext(pos.begin - 1);
        if (p < this.len) {
          c = String.fromCharCode(k);
          if (this.tests[p].test(c)) {
            this.shiftR(p);
            this.buffer[p] = c;
            this.writeBuffer();
            next = this.seekNext(p);
            if (primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.isClient() && /android/i.test(primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getUserAgent())) {
              let proxy = () => {
                this.caret(next);
              };
              setTimeout(proxy, 0);
            } else {
              this.caret(next);
            }
            if (pos.begin <= this.lastRequiredNonMaskPos) {
              completed = this.isCompleted();
            }
            this.onInput.emit(e);
          }
        }
        e.preventDefault();
      }
      this.updateModel(e);
      this.updateFilledState();
      if (completed) {
        this.onComplete.emit();
      }
    }
    clearBuffer(start, end) {
      if (!this.keepBuffer) {
        let i;
        for (i = start; i < end && i < this.len; i++) {
          if (this.tests[i]) {
            this.buffer[i] = this.getPlaceholder(i);
          }
        }
      }
    }
    writeBuffer() {
      this.inputViewChild.nativeElement.value = this.buffer.join('');
    }
    checkVal(allow) {
      //try to place characters where they belong
      let test = this.inputViewChild?.nativeElement.value,
        lastMatch = -1,
        i,
        c,
        pos;
      for (i = 0, pos = 0; i < this.len; i++) {
        if (this.tests[i]) {
          this.buffer[i] = this.getPlaceholder(i);
          while (pos++ < test.length) {
            c = test.charAt(pos - 1);
            if (this.tests[i].test(c)) {
              if (!this.keepBuffer) {
                this.buffer[i] = c;
              }
              lastMatch = i;
              break;
            }
          }
          if (pos > test.length) {
            this.clearBuffer(i + 1, this.len);
            break;
          }
        } else {
          if (this.buffer[i] === test.charAt(pos)) {
            pos++;
          }
          if (i < this.partialPosition) {
            lastMatch = i;
          }
        }
      }
      if (allow) {
        this.writeBuffer();
      } else if (lastMatch + 1 < this.partialPosition) {
        if (this.autoClear || this.buffer.join('') === this.defaultBuffer) {
          // Invalid value. Remove it and replace it with the
          // mask, which is the default behavior.
          if (this.inputViewChild?.nativeElement.value) this.inputViewChild.nativeElement.value = '';
          this.clearBuffer(0, this.len);
        } else {
          // Invalid value, but we opt to show the value to the
          // user and allow them to correct their mistake.
          this.writeBuffer();
        }
      } else {
        this.writeBuffer();
        this.inputViewChild.nativeElement.value = this.inputViewChild?.nativeElement.value.substring(0, lastMatch + 1);
      }
      return this.partialPosition ? i : this.firstNonMaskPos;
    }
    onInputFocus(event) {
      if (this.readonly) {
        return;
      }
      this.focused = true;
      clearTimeout(this.caretTimeoutId);
      let pos;
      this.focusText = this.inputViewChild?.nativeElement.value;
      pos = this.keepBuffer ? this.inputViewChild?.nativeElement.value.length : this.checkVal();
      this.caretTimeoutId = setTimeout(() => {
        if (this.inputViewChild?.nativeElement !== this.inputViewChild?.nativeElement.ownerDocument.activeElement) {
          return;
        }
        this.writeBuffer();
        if (pos == this.mask?.replace('?', '').length) {
          this.caret(0, pos);
        } else {
          this.caret(pos);
        }
      }, 10);
      this.onFocus.emit(event);
    }
    onInputChange(event) {
      if (this.androidChrome) this.handleAndroidInput(event);else this.handleInputChange(event);
      this.onInput.emit(event);
    }
    handleInputChange(event) {
      if (this.readonly) {
        return;
      }
      setTimeout(() => {
        var pos = this.checkVal(true);
        this.caret(pos);
        this.updateModel(event);
        if (this.isCompleted()) {
          this.onComplete.emit();
        }
      }, 0);
    }
    getUnmaskedValue() {
      let unmaskedBuffer = [];
      for (let i = 0; i < this.buffer.length; i++) {
        let c = this.buffer[i];
        if (this.tests[i] && c != this.getPlaceholder(i)) {
          unmaskedBuffer.push(c);
        }
      }
      return unmaskedBuffer.join('');
    }
    updateModel(e) {
      const updatedValue = this.unmask ? this.getUnmaskedValue() : e.target.value;
      if (updatedValue !== null || updatedValue !== undefined) {
        this.value = updatedValue;
        this.onModelChange(this.value);
      }
    }
    updateFilledState() {
      this.filled = this.inputViewChild?.nativeElement && this.inputViewChild.nativeElement.value != '';
    }
    focus() {
      this.inputViewChild?.nativeElement.focus();
    }
    clear() {
      this.inputViewChild.nativeElement.value = '';
      this.value = null;
      this.onModelChange(this.value);
      this.onClear.emit();
    }
    static ɵfac = function InputMask_Factory(t) {
      return new (t || InputMask)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InputMask,
      selectors: [["p-inputMask"]],
      contentQueries: function InputMask_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function InputMask_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      hostVars: 6,
      hostBindings: function InputMask_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused)("p-inputmask-clearable", ctx.showClear && !ctx.disabled);
        }
      },
      inputs: {
        type: "type",
        slotChar: "slotChar",
        autoClear: "autoClear",
        showClear: "showClear",
        style: "style",
        inputId: "inputId",
        styleClass: "styleClass",
        placeholder: "placeholder",
        size: "size",
        maxlength: "maxlength",
        tabindex: "tabindex",
        title: "title",
        ariaLabel: "ariaLabel",
        ariaLabelledBy: "ariaLabelledBy",
        ariaRequired: "ariaRequired",
        disabled: "disabled",
        readonly: "readonly",
        unmask: "unmask",
        name: "name",
        required: "required",
        characterPattern: "characterPattern",
        autoFocus: "autoFocus",
        autocomplete: "autocomplete",
        keepBuffer: "keepBuffer",
        mask: "mask"
      },
      outputs: {
        onComplete: "onComplete",
        onFocus: "onFocus",
        onBlur: "onBlur",
        onInput: "onInput",
        onKeydown: "onKeydown",
        onClear: "onClear"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([INPUTMASK_VALUE_ACCESSOR])],
      decls: 3,
      vars: 21,
      consts: [["pInputText", "", "pAutoFocus", "", 1, "p-inputmask", 3, "ngStyle", "ngClass", "disabled", "readonly", "autofocus", "focus", "blur", "keydown", "keypress", "input", "paste"], ["input", ""], [4, "ngIf"], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-inputmask-clear-icon", 3, "click", 4, "ngIf"], [3, "styleClass", "click"], [1, "p-inputmask-clear-icon", 3, "click"], [4, "ngTemplateOutlet"]],
      template: function InputMask_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function InputMask_Template_input_focus_0_listener($event) {
            return ctx.onInputFocus($event);
          })("blur", function InputMask_Template_input_blur_0_listener($event) {
            return ctx.onInputBlur($event);
          })("keydown", function InputMask_Template_input_keydown_0_listener($event) {
            return ctx.onInputKeydown($event);
          })("keypress", function InputMask_Template_input_keypress_0_listener($event) {
            return ctx.onKeyPress($event);
          })("input", function InputMask_Template_input_input_0_listener($event) {
            return ctx.onInputChange($event);
          })("paste", function InputMask_Template_input_paste_0_listener($event) {
            return ctx.handleInputChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputMask_ng_container_2_Template, 3, 2, "ng-container", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", ctx.styleClass)("disabled", ctx.disabled)("readonly", ctx.readonly)("autofocus", ctx.autoFocus);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("type", ctx.type)("name", ctx.name)("placeholder", ctx.placeholder)("title", ctx.title)("size", ctx.size)("autocomplete", ctx.autocomplete)("maxlength", ctx.maxlength)("tabindex", ctx.tabindex)("aria-label", ctx.ariaLabel)("aria-labelledBy", ctx.ariaLabelledBy)("aria-required", ctx.ariaRequired)("required", ctx.required)("data-pc-name", "inputmask")("data-pc-section", "root");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value != null && ctx.filled && ctx.showClear && !ctx.disabled);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, primeng_autofocus__WEBPACK_IMPORTED_MODULE_6__.AutoFocus, primeng_icons_times__WEBPACK_IMPORTED_MODULE_7__.TimesIcon],
      styles: ["@layer primeng{.p-inputmask-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-inputmask-clearable{position:relative}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return InputMask;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let InputMaskModule = /*#__PURE__*/(() => {
  class InputMaskModule {
    static ɵfac = function InputMaskModule_Factory(t) {
      return new (t || InputMaskModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InputMaskModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputTextModule, primeng_autofocus__WEBPACK_IMPORTED_MODULE_6__.AutoFocusModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_7__.TimesIcon, primeng_api__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
    });
  }
  return InputMaskModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-inputmask.mjs.map

/***/ }),

/***/ 96218:
/*!*****************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-inputtextarea.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputTextarea: () => (/* binding */ InputTextarea),
/* harmony export */   InputTextareaModule: () => (/* binding */ InputTextareaModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 56223);





/**
 * InputTextarea adds styling and autoResize functionality to standard textarea element.
 * @group Components
 */
let InputTextarea = /*#__PURE__*/(() => {
  class InputTextarea {
    el;
    ngModel;
    control;
    cd;
    /**
     * When present, textarea size changes as being typed.
     * @group Props
     */
    autoResize;
    /**
     * Callback to invoke on textarea resize.
     * @param {(Event | {})} event - Custom resize event.
     * @group Emits
     */
    onResize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    filled;
    cachedScrollHeight;
    ngModelSubscription;
    ngControlSubscription;
    constructor(el, ngModel, control, cd) {
      this.el = el;
      this.ngModel = ngModel;
      this.control = control;
      this.cd = cd;
    }
    ngOnInit() {
      if (this.ngModel) {
        this.ngModelSubscription = this.ngModel.valueChanges.subscribe(() => {
          this.updateState();
        });
      }
      if (this.control) {
        this.ngControlSubscription = this.control.valueChanges.subscribe(() => {
          this.updateState();
        });
      }
    }
    ngAfterViewChecked() {
      this.updateState();
    }
    ngAfterViewInit() {
      if (this.autoResize) this.resize();
      this.updateFilledState();
      this.cd.detectChanges();
    }
    onInput(e) {
      this.updateState();
    }
    updateFilledState() {
      this.filled = this.el.nativeElement.value && this.el.nativeElement.value.length;
    }
    resize(event) {
      this.el.nativeElement.style.height = 'auto';
      this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + 'px';
      if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
        this.el.nativeElement.style.overflowY = 'scroll';
        this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
      } else {
        this.el.nativeElement.style.overflow = 'hidden';
      }
      this.onResize.emit(event || {});
    }
    updateState() {
      this.updateFilledState();
      if (this.autoResize) {
        this.resize();
      }
    }
    ngOnDestroy() {
      if (this.ngModelSubscription) {
        this.ngModelSubscription.unsubscribe();
      }
      if (this.ngControlSubscription) {
        this.ngControlSubscription.unsubscribe();
      }
    }
    static ɵfac = function InputTextarea_Factory(t) {
      return new (t || InputTextarea)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: InputTextarea,
      selectors: [["", "pInputTextarea", ""]],
      hostAttrs: [1, "p-inputtextarea", "p-inputtext", "p-component", "p-element"],
      hostVars: 4,
      hostBindings: function InputTextarea_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputTextarea_input_HostBindingHandler($event) {
            return ctx.onInput($event);
          });
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-filled", ctx.filled)("p-inputtextarea-resizable", ctx.autoResize);
        }
      },
      inputs: {
        autoResize: "autoResize"
      },
      outputs: {
        onResize: "onResize"
      }
    });
  }
  return InputTextarea;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let InputTextareaModule = /*#__PURE__*/(() => {
  class InputTextareaModule {
    static ɵfac = function InputTextareaModule_Factory(t) {
      return new (t || InputTextareaModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InputTextareaModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
    });
  }
  return InputTextareaModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-inputtextarea.mjs.map

/***/ })

}]);