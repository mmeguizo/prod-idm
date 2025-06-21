"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[4055],{

/***/ 34055:
/*!***************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-multiselect.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MULTISELECT_VALUE_ACCESSOR: () => (/* binding */ MULTISELECT_VALUE_ACCESSOR),
/* harmony export */   MultiSelect: () => (/* binding */ MultiSelect),
/* harmony export */   MultiSelectItem: () => (/* binding */ MultiSelectItem),
/* harmony export */   MultiSelectModule: () => (/* binding */ MultiSelectModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 56223);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dom */ 82076);
/* harmony import */ var primeng_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/overlay */ 95807);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/ripple */ 44480);
/* harmony import */ var primeng_scroller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/scroller */ 26489);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tooltip */ 33259);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/utils */ 2332);
/* harmony import */ var primeng_icons_check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/icons/check */ 12591);
/* harmony import */ var primeng_icons_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/icons/search */ 32324);
/* harmony import */ var primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/icons/timescircle */ 88468);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/icons/times */ 77778);
/* harmony import */ var primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/icons/chevrondown */ 76005);






















function MultiSelectItem_ng_container_3_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "CheckIcon", 7);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-checkbox-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function MultiSelectItem_ng_container_3_span_2_1_ng_template_0_Template(rf, ctx) {}
function MultiSelectItem_ng_container_3_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelectItem_ng_container_3_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelectItem_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelectItem_ng_container_3_span_2_1_Template, 1, 0, null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.checkIconTemplate);
  }
}
function MultiSelectItem_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelectItem_ng_container_3_CheckIcon_1_Template, 1, 2, "CheckIcon", 5)(2, MultiSelectItem_ng_container_3_span_2_Template, 2, 2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.checkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.checkIconTemplate);
  }
}
function MultiSelectItem_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_0_0 = ctx_r1.label) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "empty");
  }
}
function MultiSelectItem_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c0 = a0 => ({
  height: a0
});
const _c1 = (a1, a2, a3) => ({
  "p-multiselect-item": true,
  "p-highlight": a1,
  "p-disabled": a2,
  "p-focus": a3
});
const _c2 = a0 => ({
  "p-highlight": a0
});
const _c3 = a0 => ({
  $implicit: a0
});
const _c4 = ["container"];
const _c5 = ["overlay"];
const _c6 = ["filterInput"];
const _c7 = ["focusInput"];
const _c8 = ["items"];
const _c9 = ["scroller"];
const _c10 = ["lastHiddenFocusableEl"];
const _c11 = ["firstHiddenFocusableEl"];
const _c12 = ["headerCheckbox"];
function MultiSelect_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.label() || "empty");
  }
}
function MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_TimesCircleIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "TimesCircleIcon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_TimesCircleIcon_1_Template_TimesCircleIcon_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.removeOption(item_r13, ctx_r19.event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-multiselect-token-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearicon")("aria-hidden", true);
  }
}
function MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_span_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_span_2_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r23.removeOption(item_r13, ctx_r23.event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_span_2_ng_container_1_Template, 1, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearicon")("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r18.removeTokenIconTemplate);
  }
}
function MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_TimesCircleIcon_1_Template, 1, 3, "TimesCircleIcon", 18)(2, MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_span_2_Template, 2, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r16.removeTokenIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.removeTokenIconTemplate);
  }
}
function MultiSelect_ng_container_7_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15, 16)(2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MultiSelect_ng_container_7_ng_container_2_div_1_ng_container_4_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.getLabelByValue(item_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.disabled);
  }
}
function MultiSelect_ng_container_7_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.placeholder || ctx_r12.defaultLabel || "empty");
  }
}
function MultiSelect_ng_container_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_container_7_ng_container_2_div_1_Template, 5, 2, "div", 14)(2, MultiSelect_ng_container_7_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.chipSelectedItems());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.modelValue() || ctx_r10.modelValue().length === 0);
  }
}
function MultiSelect_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 7)(2, MultiSelect_ng_container_7_ng_container_2_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.display === "comma");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.display === "chip");
  }
}
function MultiSelect_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MultiSelect_ng_container_9_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "TimesIcon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelect_ng_container_9_TimesIcon_1_Template_TimesIcon_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r28.clear($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-multiselect-clear-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearicon")("aria-hidden", true);
  }
}
function MultiSelect_ng_container_9_span_2_1_ng_template_0_Template(rf, ctx) {}
function MultiSelect_ng_container_9_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_ng_container_9_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_container_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelect_ng_container_9_span_2_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r32.clear($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_container_9_span_2_1_Template, 1, 0, null, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "clearicon")("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r27.clearIconTemplate);
  }
}
function MultiSelect_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_container_9_TimesIcon_1_Template, 1, 3, "TimesIcon", 18)(2, MultiSelect_ng_container_9_span_2_Template, 2, 3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.clearIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.clearIconTemplate);
  }
}
function MultiSelect_ng_container_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 27);
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r34.dropdownIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "triggericon")("aria-hidden", true);
  }
}
function MultiSelect_ng_container_11_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon", 28);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-multiselect-trigger-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "triggericon")("aria-hidden", true);
  }
}
function MultiSelect_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_container_11_span_1_Template, 1, 3, "span", 25)(2, MultiSelect_ng_container_11_ChevronDownIcon_2_Template, 1, 3, "ChevronDownIcon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.dropdownIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.dropdownIcon);
  }
}
function MultiSelect_span_12_1_ng_template_0_Template(rf, ctx) {}
function MultiSelect_span_12_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_span_12_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_span_12_1_Template, 1, 0, null, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "triggericon")("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.dropdownIconTemplate);
  }
}
function MultiSelect_ng_template_15_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MultiSelect_ng_template_15_div_3_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c13 = a0 => ({
  options: a0
});
function MultiSelect_ng_template_15_div_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_15_div_3_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r47.filterTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c13, ctx_r47.filterOptions));
  }
}
function MultiSelect_ng_template_15_div_3_ng_template_4_div_0_ng_container_5_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "CheckIcon", 28);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-checkbox-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function MultiSelect_ng_template_15_div_3_ng_template_4_div_0_ng_container_5_span_2_1_ng_template_0_Template(rf, ctx) {}
function MultiSelect_ng_template_15_div_3_ng_template_4_div_0_ng_container_5_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_ng_template_15_div_3_ng_template_4_div_0_ng_container_5_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_15_div_3_ng_template_4_div_0_ng_container_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_15_div_3_ng_template_4_div_0_ng_container_5_span_2_1_Template, 1, 0, null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r58.checkIconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c3, ctx_r58.allSelected()));
  }
}
function MultiSelect_ng_template_15_div_3_ng_template_4_div_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_15_div_3_ng_template_4_div_0_ng_container_5_CheckIcon_1_Template, 1, 2, "CheckIcon", 26)(2, MultiSelect_ng_template_15_div_3_ng_template_4_div_0_ng_container_5_span_2_Template, 2, 5, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r56.checkIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r56.checkIconTemplate);
  }
}
const _c14 = a0 => ({
  "p-checkbox-disabled": a0
});
const _c15 = (a0, a1, a2) => ({
  "p-highlight": a0,
  "p-focus": a1,
  "p-disabled": a2
});
function MultiSelect_ng_template_15_div_3_ng_template_4_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelect_ng_template_15_div_3_ng_template_4_div_0_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r61.onToggleAll($event));
    })("keydown", function MultiSelect_ng_template_15_div_3_ng_template_4_div_0_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r63.onHeaderCheckboxKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2)(2, "input", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MultiSelect_ng_template_15_div_3_ng_template_4_div_0_Template_input_focus_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r64.onHeaderCheckboxFocus());
    })("blur", function MultiSelect_ng_template_15_div_3_ng_template_4_div_0_Template_input_blur_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r65.onHeaderCheckboxBlur());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MultiSelect_ng_template_15_div_3_ng_template_4_div_0_ng_container_5_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c14, ctx_r51.disabled || ctx_r51.toggleAllDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-p-hidden-accessible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx_r51.readonly)("disabled", ctx_r51.disabled || ctx_r51.toggleAllDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("checked", ctx_r51.allSelected())("aria-label", ctx_r51.toggleAllAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](11, _c15, ctx_r51.allSelected(), ctx_r51.headerCheckboxFocus, ctx_r51.disabled || ctx_r51.toggleAllDisabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-checked", ctx_r51.allSelected());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r51.allSelected());
  }
}
function MultiSelect_ng_template_15_div_3_ng_template_4_div_1_SearchIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "SearchIcon", 28);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-multiselect-filter-icon");
  }
}
function MultiSelect_ng_template_15_div_3_ng_template_4_div_1_span_4_1_ng_template_0_Template(rf, ctx) {}
function MultiSelect_ng_template_15_div_3_ng_template_4_div_1_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_ng_template_15_div_3_ng_template_4_div_1_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_15_div_3_ng_template_4_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_15_div_3_ng_template_4_div_1_span_4_1_Template, 1, 0, null, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r68.filterIconTemplate);
  }
}
function MultiSelect_ng_template_15_div_3_ng_template_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52)(1, "input", 53, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MultiSelect_ng_template_15_div_3_ng_template_4_div_1_Template_input_input_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r71.onFilterInputChange($event));
    })("keydown", function MultiSelect_ng_template_15_div_3_ng_template_4_div_1_Template_input_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r73.onFilterKeyDown($event));
    })("click", function MultiSelect_ng_template_15_div_3_ng_template_4_div_1_Template_input_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r74.onInputClick($event));
    })("blur", function MultiSelect_ng_template_15_div_3_ng_template_4_div_1_Template_input_blur_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r75.onFilterBlur($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiSelect_ng_template_15_div_3_ng_template_4_div_1_SearchIcon_3_Template, 1, 1, "SearchIcon", 26)(4, MultiSelect_ng_template_15_div_3_ng_template_4_div_1_span_4_Template, 2, 1, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r52._filterValue() || "")("disabled", ctx_r52.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("autocomplete", ctx_r52.autocomplete)("placeholder", ctx_r52.filterPlaceHolder)("aria-owns", ctx_r52.id + "_list")("aria-activedescendant", ctx_r52.focusedOptionId)("placeholder", ctx_r52.filterPlaceHolder)("aria-label", ctx_r52.ariaFilterLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r52.filterIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r52.filterIconTemplate);
  }
}
function MultiSelect_ng_template_15_div_3_ng_template_4_TimesIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "TimesIcon", 28);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-multiselect-close-icon");
  }
}
function MultiSelect_ng_template_15_div_3_ng_template_4_span_4_1_ng_template_0_Template(rf, ctx) {}
function MultiSelect_ng_template_15_div_3_ng_template_4_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_ng_template_15_div_3_ng_template_4_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MultiSelect_ng_template_15_div_3_ng_template_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_15_div_3_ng_template_4_span_4_1_Template, 1, 0, null, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r54.closeIconTemplate);
  }
}
function MultiSelect_ng_template_15_div_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_ng_template_15_div_3_ng_template_4_div_0_Template, 6, 15, "div", 42)(1, MultiSelect_ng_template_15_div_3_ng_template_4_div_1_Template, 5, 10, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelect_ng_template_15_div_3_ng_template_4_Template_button_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r79);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r78.close($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiSelect_ng_template_15_div_3_ng_template_4_TimesIcon_3_Template, 1, 1, "TimesIcon", 26)(4, MultiSelect_ng_template_15_div_3_ng_template_4_span_4_Template, 2, 1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.showToggleAll && !ctx_r48.selectionLimit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.filter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r48.closeAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r48.closeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.closeIconTemplate);
  }
}
function MultiSelect_ng_template_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_ng_template_15_div_3_ng_container_2_Template, 1, 0, "ng-container", 22)(3, MultiSelect_ng_template_15_div_3_ng_container_3_Template, 2, 4, "ng-container", 40)(4, MultiSelect_ng_template_15_div_3_ng_template_4_Template, 5, 5, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r39.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r39.filterTemplate)("ngIfElse", _r49);
  }
}
function MultiSelect_ng_template_15_p_scroller_5_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c16 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
function MultiSelect_ng_template_15_p_scroller_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_ng_template_15_p_scroller_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const items_r83 = ctx.$implicit;
    const scrollerOptions_r84 = ctx.options;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r43)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c16, items_r83, scrollerOptions_r84));
  }
}
function MultiSelect_ng_template_15_p_scroller_5_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MultiSelect_ng_template_15_p_scroller_5_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_ng_template_15_p_scroller_5_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 8);
  }
  if (rf & 2) {
    const scrollerOptions_r87 = ctx.options;
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r86.loaderTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c13, scrollerOptions_r87));
  }
}
function MultiSelect_ng_template_15_p_scroller_5_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_15_p_scroller_5_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
}
function MultiSelect_ng_template_15_p_scroller_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-scroller", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onLazyLoad", function MultiSelect_ng_template_15_p_scroller_5_Template_p_scroller_onLazyLoad_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r89.onLazyLoad.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_ng_template_15_p_scroller_5_ng_template_2_Template, 1, 5, "ng-template", 13)(3, MultiSelect_ng_template_15_p_scroller_5_ng_container_3_Template, 2, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r40.scrollHeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r40.visibleOptions())("itemSize", ctx_r40.virtualScrollItemSize || ctx_r40._itemSize)("autoSize", true)("tabindex", -1)("lazy", ctx_r40.lazy)("options", ctx_r40.virtualScrollOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.loaderTemplate);
  }
}
function MultiSelect_ng_template_15_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c17 = () => ({});
function MultiSelect_ng_template_15_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_15_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r43)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c16, ctx_r41.visibleOptions(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c17)));
  }
}
function MultiSelect_ng_template_15_ng_template_7_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r102.getOptionGroupLabel(option_r98.optionGroup));
  }
}
function MultiSelect_ng_template_15_ng_template_7_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MultiSelect_ng_template_15_ng_template_7_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_ng_template_15_ng_template_7_ng_template_2_ng_container_0_span_2_Template, 2, 1, "span", 7)(3, MultiSelect_ng_template_15_ng_template_7_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r99 = ctx_r106.index;
    const option_r98 = ctx_r106.$implicit;
    const scrollerOptions_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, scrollerOptions_r93.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r100.id + "_" + ctx_r100.getOptionIndex(i_r99, scrollerOptions_r93));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r100.groupTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r100.groupTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, option_r98.optionGroup));
  }
}
function MultiSelect_ng_template_15_ng_template_7_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-multiSelectItem", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function MultiSelect_ng_template_15_ng_template_7_ng_template_2_ng_container_1_Template_p_multiSelectItem_onClick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109);
      const i_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const scrollerOptions_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
      const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r107.onOptionSelect($event, false, ctx_r107.getOptionIndex(i_r99, scrollerOptions_r93)));
    })("onMouseEnter", function MultiSelect_ng_template_15_ng_template_7_ng_template_2_ng_container_1_Template_p_multiSelectItem_onMouseEnter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109);
      const i_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const scrollerOptions_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
      const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r111.onOptionMouseEnter($event, ctx_r111.getOptionIndex(i_r99, scrollerOptions_r93)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r99 = ctx_r114.index;
    const option_r98 = ctx_r114.$implicit;
    const scrollerOptions_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r101.id + "_" + ctx_r101.getOptionIndex(i_r99, scrollerOptions_r93))("option", option_r98)("selected", ctx_r101.isSelected(option_r98))("label", ctx_r101.getOptionLabel(option_r98))("disabled", ctx_r101.isOptionDisabled(option_r98))("template", ctx_r101.itemTemplate)("checkIconTemplate", ctx_r101.checkIconTemplate)("itemSize", scrollerOptions_r93.itemSize)("focused", ctx_r101.focusedOptionIndex() === ctx_r101.getOptionIndex(i_r99, scrollerOptions_r93))("ariaPosInset", ctx_r101.getAriaPosInset(ctx_r101.getOptionIndex(i_r99, scrollerOptions_r93)))("ariaSetSize", ctx_r101.ariaSetSize);
  }
}
function MultiSelect_ng_template_15_ng_template_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiSelect_ng_template_15_ng_template_7_ng_template_2_ng_container_0_Template, 4, 9, "ng-container", 7)(1, MultiSelect_ng_template_15_ng_template_7_ng_template_2_ng_container_1_Template, 2, 11, "ng-container", 7);
  }
  if (rf & 2) {
    const option_r98 = ctx.$implicit;
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r95.isOptionGroup(option_r98));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r95.isOptionGroup(option_r98));
  }
}
function MultiSelect_ng_template_15_ng_template_7_li_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r116.emptyFilterMessageLabel, " ");
  }
}
function MultiSelect_ng_template_15_ng_template_7_li_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 68);
  }
}
function MultiSelect_ng_template_15_ng_template_7_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_15_ng_template_7_li_3_ng_container_1_Template, 2, 1, "ng-container", 40)(2, MultiSelect_ng_template_15_ng_template_7_li_3_ng_container_2_Template, 2, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scrollerOptions_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, scrollerOptions_r93.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r96.emptyFilterTemplate && !ctx_r96.emptyTemplate)("ngIfElse", ctx_r96.emptyFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r96.emptyFilterTemplate || ctx_r96.emptyTemplate);
  }
}
function MultiSelect_ng_template_15_ng_template_7_li_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r120.emptyMessageLabel, " ");
  }
}
function MultiSelect_ng_template_15_ng_template_7_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 69);
  }
}
function MultiSelect_ng_template_15_ng_template_7_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelect_ng_template_15_ng_template_7_li_4_ng_container_1_Template, 2, 1, "ng-container", 40)(2, MultiSelect_ng_template_15_ng_template_7_li_4_ng_container_2_Template, 2, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scrollerOptions_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().options;
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, scrollerOptions_r93.itemSize + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r97.emptyTemplate)("ngIfElse", ctx_r97.empty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r97.emptyTemplate);
  }
}
function MultiSelect_ng_template_15_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 61, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_ng_template_15_ng_template_7_ng_template_2_Template, 2, 2, "ng-template", 63)(3, MultiSelect_ng_template_15_ng_template_7_li_3_Template, 3, 6, "li", 64)(4, MultiSelect_ng_template_15_ng_template_7_li_4_Template, 3, 6, "li", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const items_r92 = ctx.$implicit;
    const scrollerOptions_r93 = ctx.options;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](scrollerOptions_r93.contentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", scrollerOptions_r93.contentStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r42.hasFilter() && ctx_r42.isEmpty());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r42.hasFilter() && ctx_r42.isEmpty());
  }
}
function MultiSelect_ng_template_15_div_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MultiSelect_ng_template_15_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelect_ng_template_15_div_9_ng_container_2_Template, 1, 0, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r44.footerTemplate);
  }
}
function MultiSelect_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30)(1, "span", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MultiSelect_ng_template_15_Template_span_focus_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r126);
      const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r125.onFirstHiddenFocus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiSelect_ng_template_15_div_3_Template, 6, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MultiSelect_ng_template_15_p_scroller_5_Template, 4, 11, "p-scroller", 35)(6, MultiSelect_ng_template_15_ng_container_6_Template, 2, 6, "ng-container", 7)(7, MultiSelect_ng_template_15_ng_template_7_Template, 5, 6, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MultiSelect_ng_template_15_div_9_Template, 3, 1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 31, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MultiSelect_ng_template_15_Template_span_focus_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r126);
      const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r127.onLastHiddenFocus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r8.panelStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-multiselect-panel p-component")("ngStyle", ctx_r8.panelStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", "true")("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.showHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx_r8.virtualScroll ? "auto" : ctx_r8.scrollHeight || "auto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.virtualScroll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.virtualScroll);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.footerFacet || ctx_r8.footerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true)("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
  }
}
const _c18 = [[["p-header"]], [["p-footer"]]];
const _c19 = (a0, a1) => ({
  $implicit: a0,
  removeChip: a1
});
const _c20 = ["p-header", "p-footer"];
const MULTISELECT_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MultiSelect),
  multi: true
};
let MultiSelectItem = /*#__PURE__*/(() => {
  class MultiSelectItem {
    id;
    option;
    selected;
    label;
    disabled;
    itemSize;
    focused;
    ariaPosInset;
    ariaSetSize;
    template;
    checkIconTemplate;
    onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    onMouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    onOptionClick(event) {
      this.onClick.emit({
        originalEvent: event,
        option: this.option,
        selected: this.selected
      });
      event.stopPropagation();
    }
    onOptionMouseEnter(event) {
      this.onMouseEnter.emit({
        originalEvent: event,
        option: this.option,
        selected: this.selected
      });
    }
    static ɵfac = function MultiSelectItem_Factory(t) {
      return new (t || MultiSelectItem)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MultiSelectItem,
      selectors: [["p-multiSelectItem"]],
      hostAttrs: [1, "p-element"],
      inputs: {
        id: "id",
        option: "option",
        selected: "selected",
        label: "label",
        disabled: "disabled",
        itemSize: "itemSize",
        focused: "focused",
        ariaPosInset: "ariaPosInset",
        ariaSetSize: "ariaSetSize",
        template: "template",
        checkIconTemplate: "checkIconTemplate"
      },
      outputs: {
        onClick: "onClick",
        onMouseEnter: "onMouseEnter"
      },
      decls: 6,
      vars: 26,
      consts: [["pRipple", "", 1, "p-multiselect-item", 3, "ngStyle", "ngClass", "id", "click", "mouseenter"], [1, "p-checkbox", "p-component"], [1, "p-checkbox-box", 3, "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "styleClass", 4, "ngIf"], ["class", "p-checkbox-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-checkbox-icon"], [4, "ngTemplateOutlet"]],
      template: function MultiSelectItem_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelectItem_Template_li_click_0_listener($event) {
            return ctx.onOptionClick($event);
          })("mouseenter", function MultiSelectItem_Template_li_mouseenter_0_listener($event) {
            return ctx.onOptionMouseEnter($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiSelectItem_ng_container_3_Template, 3, 2, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MultiSelectItem_span_4_Template, 2, 1, "span", 3)(5, MultiSelectItem_ng_container_5_Template, 1, 0, "ng-container", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.itemSize + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](18, _c1, ctx.selected, ctx.disabled, ctx.focused))("id", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.label)("aria-setsize", ctx.ariaSetSize)("aria-posinset", ctx.ariaPosInset)("aria-selected", ctx.selected)("data-p-focused", ctx.focused)("data-p-highlight", ctx.selected)("data-p-disabled", ctx.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c2, ctx.selected));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-checked", ctx.selected);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.template);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c3, ctx.option));
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple, primeng_icons_check__WEBPACK_IMPORTED_MODULE_4__.CheckIcon],
      encapsulation: 2
    });
  }
  return MultiSelectItem;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * MultiSelect is used to select multiple items from a collection.
 * @group Components
 */
let MultiSelect = /*#__PURE__*/(() => {
  class MultiSelect {
    el;
    renderer;
    cd;
    zone;
    filterService;
    config;
    overlayService;
    /**
     * Unique identifier of the component
     * @group Props
     */
    id;
    /**
     * Defines a string that labels the input for accessibility.
     * @group Props
     */
    ariaLabel;
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
     * Inline style of the overlay panel.
     * @group Props
     */
    panelStyle;
    /**
     * Style class of the overlay panel element.
     * @group Props
     */
    panelStyleClass;
    /**
     * Identifier of the focus input to match a label defined for the component.
     * @group Props
     */
    inputId;
    /**
     * When present, it specifies that the element should be disabled.
     * @group Props
     */
    disabled;
    /**
     * When present, it specifies that the component cannot be edited.
     * @group Props
     */
    readonly;
    /**
     * Whether to display options as grouped when nested options are provided.
     * @group Props
     */
    group;
    /**
     * When specified, displays an input field to filter the items on keyup.
     * @group Props
     */
    filter = true;
    /**
     * Defines placeholder of the filter input.
     * @group Props
     */
    filterPlaceHolder;
    /**
     * Locale to use in filtering. The default locale is the host environment's current locale.
     * @group Props
     */
    filterLocale;
    /**
     * Specifies the visibility of the options panel.
     * @group Props
     */
    overlayVisible;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex = 0;
    /**
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo;
    /**
     * A property to uniquely identify a value in options.
     * @group Props
     */
    dataKey;
    /**
     * Name of the input element.
     * @group Props
     */
    name;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Whether to show labels of selected item labels or use default label.
     * @group Props
     * @defaultValue true
     */
    set displaySelectedLabel(val) {
      this._displaySelectedLabel = val;
    }
    get displaySelectedLabel() {
      return this._displaySelectedLabel;
    }
    /**
     * Decides how many selected item labels to show at most.
     * @group Props
     * @defaultValue 3
     */
    set maxSelectedLabels(val) {
      this._maxSelectedLabels = val;
    }
    get maxSelectedLabels() {
      return this._maxSelectedLabels;
    }
    /**
     * Decides how many selected item labels to show at most.
     * @group Props
     */
    selectionLimit;
    /**
     * Label to display after exceeding max selected labels e.g. ({0} items selected), defaults "ellipsis" keyword to indicate a text-overflow.
     * @group Props
     */
    selectedItemsLabel = '{0} items selected';
    /**
     * Whether to show the checkbox at header to toggle all items at once.
     * @group Props
     */
    showToggleAll = true;
    /**
     * Text to display when filtering does not return any results.
     * @group Props
     */
    emptyFilterMessage = '';
    /**
     * Text to display when there is no data. Defaults to global value in i18n translation configuration.
     * @group Props
     */
    emptyMessage = '';
    /**
     * Clears the filter value when hiding the dropdown.
     * @group Props
     */
    resetFilterOnHide = false;
    /**
     * Icon class of the dropdown icon.
     * @group Props
     */
    dropdownIcon;
    /**
     * Name of the label field of an option.
     * @group Props
     */
    optionLabel;
    /**
     * Name of the value field of an option.
     * @group Props
     */
    optionValue;
    /**
     * Name of the disabled field of an option.
     * @group Props
     */
    optionDisabled;
    /**
     * Name of the label field of an option group.
     * @group Props
     */
    optionGroupLabel = 'label';
    /**
     * Name of the options field of an option group.
     * @group Props
     */
    optionGroupChildren = 'items';
    /**
     * Whether to show the header.
     * @group Props
     */
    showHeader = true;
    /**
     * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
     * @group Props
     */
    filterBy;
    /**
     * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
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
     * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
     * @group Props
     */
    overlayOptions;
    /**
     * Defines a string that labels the filter input.
     * @group Props
     */
    ariaFilterLabel;
    /**
     * Defines how the items are filtered.
     * @group Props
     */
    filterMatchMode = 'contains';
    /**
     * Advisory information to display in a tooltip on hover.
     * @group Props
     */
    tooltip = '';
    /**
     * Position of the tooltip.
     * @group Props
     */
    tooltipPosition = 'right';
    /**
     * Type of CSS position.
     * @group Props
     */
    tooltipPositionStyle = 'absolute';
    /**
     * Style class of the tooltip.
     * @group Props
     */
    tooltipStyleClass;
    /**
     * Applies focus to the filter element when the overlay is shown.
     * @group Props
     */
    autofocusFilter = true;
    /**
     * Defines how the selected items are displayed.
     * @group Props
     */
    display = 'comma';
    /**
     * Defines the autocomplete is active.
     * @group Props
     */
    autocomplete = 'off';
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @group Props
     */
    showClear = false;
    /**
     * @deprecated since v14.2.0, use overlayOptions property instead.
     * Whether to automatically manage layering.
     * @group Props
     */
    get autoZIndex() {
      return this._autoZIndex;
    }
    set autoZIndex(val) {
      this._autoZIndex = val;
      console.warn('The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    /**
     * @deprecated since v14.2.0, use overlayOptions property instead.
     * Base zIndex value to use in layering.
     * @group Props
     */
    get baseZIndex() {
      return this._baseZIndex;
    }
    set baseZIndex(val) {
      this._baseZIndex = val;
      console.warn('The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    /**
     * Transition options of the show animation.
     * @group Props
     * @deprecated since v14.2.0, use overlayOptions property instead.
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
     * @deprecated since v14.2.0, use overlayOptions property instead.
     */
    get hideTransitionOptions() {
      return this._hideTransitionOptions;
    }
    set hideTransitionOptions(val) {
      this._hideTransitionOptions = val;
      console.warn('The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.');
    }
    /**
     * Label to display when there are no selections.
     * @group Props
     * @deprecated Use placeholder instead.
     */
    set defaultLabel(val) {
      this._defaultLabel = val;
      console.warn('defaultLabel property is deprecated since 16.6.0, use placeholder instead');
    }
    get defaultLabel() {
      return this._defaultLabel;
    }
    /**
     * Label to display when there are no selections.
     * @group Props
     */
    set placeholder(val) {
      this._placeholder = val;
    }
    get placeholder() {
      return this._placeholder;
    }
    /**
     * An array of objects to display as the available options.
     * @group Props
     */
    get options() {
      const options = this._options();
      return options;
    }
    set options(val) {
      this._options.set(val);
    }
    /**
     * When specified, filter displays with this value.
     * @group Props
     */
    get filterValue() {
      return this._filterValue();
    }
    set filterValue(val) {
      this._filterValue.set(val);
    }
    /**
     * Item size of item to be virtual scrolled.
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
     * Whether all data is selected.
     * @group Props
     */
    get selectAll() {
      return this._selectAll;
    }
    set selectAll(value) {
      this._selectAll = value;
    }
    /**
     * Fields used when filtering the options, defaults to optionLabel.
     * @group Props
     */
    focusOnHover = false;
    /**
     * Fields used when filtering the options, defaults to optionLabel.
     * @group Props
     */
    filterFields;
    /**
     * Determines if the option will be selected on focus.
     * @group Props
     */
    selectOnFocus = false;
    /**
     * Whether to focus on the first visible or selected element when the overlay panel is shown.
     * @group Props
     */
    autoOptionFocus = true;
    /**
     * Callback to invoke when value changes.
     * @param {MultiSelectChangeEvent} event - Custom change event.
     * @group Emits
     */
    onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when data is filtered.
     * @param {MultiSelectFilterEvent} event - Custom filter event.
     * @group Emits
     */
    onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when multiselect receives focus.
     * @param {MultiSelectFocusEvent} event - Custom focus event.
     * @group Emits
     */
    onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when multiselect loses focus.
     * @param {MultiSelectBlurEvent} event - Custom blur event.
     * @group Emits
     */
    onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when component is clicked.
     * @param {Event} event - Browser event.
     * @group Emits
     */
    onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when input field is cleared.
     * @group Emits
     */
    onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when overlay panel becomes visible.
     * @group Emits
     */
    onPanelShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when overlay panel becomes hidden.
     * @group Emits
     */
    onPanelHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke in lazy mode to load new data.
     * @param {MultiSelectLazyLoadEvent} event - Lazy load event.
     * @group Emits
     */
    onLazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke in lazy mode to load new data.
     * @param {MultiSelectRemoveEvent} event - Remove event.
     * @group Emits
     */
    onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when all data is selected.
     * @param {MultiSelectSelectAllChangeEvent} event - Custom select event.
     * @group Emits
     */
    onSelectAllChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    containerViewChild;
    overlayViewChild;
    filterInputChild;
    focusInputViewChild;
    itemsViewChild;
    scroller;
    lastHiddenFocusableElementOnOverlay;
    firstHiddenFocusableElementOnOverlay;
    headerCheckboxViewChild;
    footerFacet;
    headerFacet;
    templates;
    searchValue;
    searchTimeout;
    _selectAll = null;
    _autoZIndex;
    _baseZIndex;
    _showTransitionOptions;
    _hideTransitionOptions;
    _defaultLabel;
    _placeholder;
    _itemSize;
    _selectionLimit;
    value;
    _filteredOptions;
    onModelChange = () => {};
    onModelTouched = () => {};
    valuesAsString;
    focus;
    filtered;
    itemTemplate;
    groupTemplate;
    loaderTemplate;
    headerTemplate;
    filterTemplate;
    footerTemplate;
    emptyFilterTemplate;
    emptyTemplate;
    selectedItemsTemplate;
    checkIconTemplate;
    filterIconTemplate;
    removeTokenIconTemplate;
    closeIconTemplate;
    clearIconTemplate;
    dropdownIconTemplate;
    headerCheckboxFocus;
    filterOptions;
    preventModelTouched;
    preventDocumentDefault;
    focused = false;
    itemsWrapper;
    _displaySelectedLabel = true;
    _maxSelectedLabels = 3;
    modelValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    _filterValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    _options = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    startRangeIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(-1);
    focusedOptionIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(-1);
    selectedOptions;
    get containerClass() {
      return {
        'p-multiselect p-component p-inputwrapper': true,
        'p-disabled': this.disabled,
        'p-multiselect-clearable': this.showClear && !this.disabled,
        'p-multiselect-chip': this.display === 'chip',
        'p-focus': this.focused
      };
    }
    get inputClass() {
      return {
        'p-multiselect-label p-inputtext': true,
        'p-placeholder': (this.placeholder || this.defaultLabel) && (this.label() === this.placeholder || this.label() === this.defaultLabel),
        'p-multiselect-label-empty': !this.selectedItemsTemplate && (this.label() === 'p-emptylabel' || this.label().length === 0)
      };
    }
    get panelClass() {
      return {
        'p-multiselect-panel p-component': true,
        'p-input-filled': this.config.inputStyle === 'filled',
        'p-ripple-disabled': this.config.ripple === false
      };
    }
    get labelClass() {
      return {
        'p-multiselect-label': true,
        'p-placeholder': this.label() === this.placeholder || this.label() === this.defaultLabel,
        'p-multiselect-label-empty': !this.placeholder && !this.defaultLabel && (!this.modelValue() || this.modelValue().length === 0)
      };
    }
    get emptyMessageLabel() {
      return this.emptyMessage || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_5__.TranslationKeys.EMPTY_MESSAGE);
    }
    get emptyFilterMessageLabel() {
      return this.emptyFilterMessage || this.config.getTranslation(primeng_api__WEBPACK_IMPORTED_MODULE_5__.TranslationKeys.EMPTY_FILTER_MESSAGE);
    }
    get filled() {
      if (typeof this.modelValue() === 'string') return !!this.modelValue();
      return primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(this.modelValue());
    }
    get isVisibleClearIcon() {
      return this.modelValue() != null && this.modelValue() !== '' && primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(this.modelValue()) && this.showClear && !this.disabled && this.filled;
    }
    get toggleAllAriaLabel() {
      return this.config.translation.aria ? this.config.translation.aria[this.allSelected() ? 'selectAll' : 'unselectAll'] : undefined;
    }
    get closeAriaLabel() {
      return this.config.translation.aria ? this.config.translation.aria.close : undefined;
    }
    visibleOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const options = this.group ? this.flatOptions(this.options) : this.options || [];
      if (this._filterValue()) {
        const filteredOptions = this.filterService.filter(options, this.searchFields(), this._filterValue(), this.filterMatchMode, this.filterLocale);
        if (this.group) {
          const optionGroups = this.options || [];
          const filtered = [];
          optionGroups.forEach(group => {
            const groupChildren = this.getOptionGroupChildren(group);
            const filteredItems = groupChildren.filter(item => filteredOptions.includes(item));
            if (filteredItems.length > 0) filtered.push({
              ...group,
              [typeof this.optionGroupChildren === 'string' ? this.optionGroupChildren : 'items']: [...filteredItems]
            });
          });
          return this.flatOptions(filtered);
        }
        return filteredOptions;
      }
      return options;
    });
    label = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      let label;
      const modelValue = this.modelValue();
      if (modelValue && modelValue.length && this.displaySelectedLabel) {
        if (primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(this.maxSelectedLabels) && modelValue.length > this.maxSelectedLabels) {
          return this.getSelectedItemsLabel();
        } else {
          label = '';
          for (let i = 0; i < modelValue.length; i++) {
            if (i !== 0) {
              label += ', ';
            }
            label += this.getLabelByValue(modelValue[i]);
          }
        }
      } else {
        label = this.placeholder || this.defaultLabel || '';
      }
      return label;
    });
    chipSelectedItems = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(this.maxSelectedLabels) && this.modelValue() && this.modelValue().length > this.maxSelectedLabels ? this.modelValue().slice(0, this.maxSelectedLabels) : this.modelValue();
    });
    constructor(el, renderer, cd, zone, filterService, config, overlayService) {
      this.el = el;
      this.renderer = renderer;
      this.cd = cd;
      this.zone = zone;
      this.filterService = filterService;
      this.config = config;
      this.overlayService = overlayService;
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
        const modelValue = this.modelValue();
        const visibleOptions = this.visibleOptions();
        if (visibleOptions && primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(visibleOptions) && modelValue) {
          if (this.optionValue && this.optionLabel) {
            this.selectedOptions = visibleOptions.filter(option => modelValue.includes(option[this.optionLabel]) || modelValue.includes(option[this.optionValue]));
          } else {
            this.selectedOptions = [...modelValue];
          }
        }
      });
    }
    ngOnInit() {
      this.id = this.id || (0,primeng_utils__WEBPACK_IMPORTED_MODULE_6__.UniqueComponentId)();
      this.autoUpdateModel();
      if (this.filterBy) {
        this.filterOptions = {
          filter: value => this.onFilterInputChange(value),
          reset: () => this.resetFilter()
        };
      }
    }
    maxSelectionLimitReached() {
      return this.selectionLimit && this.modelValue() && this.modelValue().length === this.selectionLimit;
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
          case 'selectedItems':
            this.selectedItemsTemplate = item.template;
            break;
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'filter':
            this.filterTemplate = item.template;
            break;
          case 'emptyfilter':
            this.emptyFilterTemplate = item.template;
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
          case 'checkicon':
            this.checkIconTemplate = item.template;
            break;
          case 'filtericon':
            this.filterIconTemplate = item.template;
            break;
          case 'removetokenicon':
            this.removeTokenIconTemplate = item.template;
            break;
          case 'closeicon':
            this.closeIconTemplate = item.template;
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
    ngAfterViewInit() {
      if (this.overlayVisible) {
        this.show();
      }
    }
    ngAfterViewChecked() {
      if (this.filtered) {
        this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            this.overlayViewChild?.alignOverlay();
          }, 1);
        });
        this.filtered = false;
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
    autoUpdateModel() {
      if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption()) {
        this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());
        const value = this.getOptionValue(this.visibleOptions()[this.focusedOptionIndex()]);
        this.onOptionSelect({
          originalEvent: null,
          option: [value]
        });
      }
    }
    /**
     * Updates the model value.
     * @group Method
     */
    updateModel(value, event) {
      this.value = value;
      this.onModelChange(value);
      this.modelValue.set(value);
    }
    onInputClick(event) {
      event.stopPropagation();
      event.preventDefault();
      this.focusedOptionIndex.set(-1);
    }
    onOptionSelect(event, isFocus = false, index = -1) {
      const {
        originalEvent,
        option
      } = event;
      if (this.disabled || this.isOptionDisabled(option)) {
        return;
      }
      let selected = this.isSelected(option);
      let value = null;
      if (selected) {
        value = this.modelValue().filter(val => !primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.equals(val, this.getOptionValue(option), this.equalityKey()));
      } else {
        value = [...(this.modelValue() || []), this.getOptionValue(option)];
      }
      this.updateModel(value, originalEvent);
      index !== -1 && this.focusedOptionIndex.set(index);
      isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.focus(this.focusInputViewChild?.nativeElement);
      this.onChange.emit({
        originalEvent: event,
        value: value,
        itemValue: option
      });
    }
    findSelectedOptionIndex() {
      return this.hasSelectedOption() ? this.visibleOptions().findIndex(option => this.isValidSelectedOption(option)) : -1;
    }
    onOptionSelectRange(event, start = -1, end = -1) {
      start === -1 && (start = this.findNearestSelectedOptionIndex(end, true));
      end === -1 && (end = this.findNearestSelectedOptionIndex(start));
      if (start !== -1 && end !== -1) {
        const rangeStart = Math.min(start, end);
        const rangeEnd = Math.max(start, end);
        const value = this.visibleOptions().slice(rangeStart, rangeEnd + 1).filter(option => this.isValidOption(option)).map(option => this.getOptionValue(option));
        this.updateModel(value, event);
      }
    }
    searchFields() {
      return (this.filterBy || this.optionLabel || 'label').split(',');
    }
    findNearestSelectedOptionIndex(index, firstCheckUp = false) {
      let matchedOptionIndex = -1;
      if (this.hasSelectedOption()) {
        if (firstCheckUp) {
          matchedOptionIndex = this.findPrevSelectedOptionIndex(index);
          matchedOptionIndex = matchedOptionIndex === -1 ? this.findNextSelectedOptionIndex(index) : matchedOptionIndex;
        } else {
          matchedOptionIndex = this.findNextSelectedOptionIndex(index);
          matchedOptionIndex = matchedOptionIndex === -1 ? this.findPrevSelectedOptionIndex(index) : matchedOptionIndex;
        }
      }
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    }
    findPrevSelectedOptionIndex(index) {
      const matchedOptionIndex = this.hasSelectedOption() && index > 0 ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), option => this.isValidSelectedOption(option)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
    }
    findFirstFocusedOptionIndex() {
      const selectedIndex = this.findFirstSelectedOptionIndex();
      return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    }
    findFirstOptionIndex() {
      return this.visibleOptions().findIndex(option => this.isValidOption(option));
    }
    findFirstSelectedOptionIndex() {
      return this.hasSelectedOption() ? this.visibleOptions().findIndex(option => this.isValidSelectedOption(option)) : -1;
    }
    findNextSelectedOptionIndex(index) {
      const matchedOptionIndex = this.hasSelectedOption() && index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex(option => this.isValidSelectedOption(option)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
    }
    equalityKey() {
      return this.optionValue ? null : this.dataKey;
    }
    hasSelectedOption() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(this.modelValue());
    }
    isValidSelectedOption(option) {
      return this.isValidOption(option) && this.isSelected(option);
    }
    isOptionGroup(option) {
      return (this.group || this.optionGroupLabel) && option.optionGroup && option.group;
    }
    isValidOption(option) {
      return option && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
    }
    isOptionDisabled(option) {
      if (this.maxSelectionLimitReached() && !this.isSelected(option)) {
        return true;
      }
      return this.optionDisabled ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(option, this.optionDisabled) : option && option.disabled !== undefined ? option.disabled : false;
    }
    isSelected(option) {
      const optionValue = this.getOptionValue(option);
      return (this.modelValue() || []).some(value => primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.equals(value, optionValue, this.equalityKey()));
    }
    isOptionMatched(option) {
      return this.isValidOption(option) && this.getOptionLabel(option).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
    }
    isEmpty() {
      return !this._options() || this.visibleOptions() && this.visibleOptions().length === 0;
    }
    getOptionIndex(index, scrollerOptions) {
      return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)['index'];
    }
    getAriaPosInset(index) {
      return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter(option => this.isOptionGroup(option)).length : index) + 1;
    }
    get ariaSetSize() {
      return this.visibleOptions().filter(option => !this.isOptionGroup(option)).length;
    }
    getLabelByValue(value) {
      const options = this.group ? this.flatOptions(this._options()) : this._options() || [];
      const matchedOption = options.find(option => !this.isOptionGroup(option) && primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.equals(this.getOptionValue(option), value, this.equalityKey()));
      return matchedOption ? this.getOptionLabel(matchedOption) : null;
    }
    getSelectedItemsLabel() {
      let pattern = /{(.*?)}/;
      if (pattern.test(this.selectedItemsLabel)) {
        return this.selectedItemsLabel.replace(this.selectedItemsLabel.match(pattern)[0], this.modelValue().length + '');
      }
      return this.selectedItemsLabel;
    }
    getOptionLabel(option) {
      return this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(option, this.optionLabel) : option && option.label != undefined ? option.label : option;
    }
    getOptionValue(option) {
      return this.optionValue ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(option, this.optionValue) : !this.optionLabel && option && option.value !== undefined ? option.value : option;
    }
    getOptionGroupLabel(optionGroup) {
      return this.optionGroupLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label != undefined ? optionGroup.label : optionGroup;
    }
    getOptionGroupChildren(optionGroup) {
      return this.optionGroupChildren ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
    }
    onKeyDown(event) {
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
        case 'Space':
          this.onEnterKey(event);
          break;
        case 'Escape':
          this.onEscapeKey(event);
          break;
        case 'Tab':
          this.onTabKey(event);
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          this.onShiftKey();
          break;
        default:
          if (event.code === 'KeyA' && metaKey) {
            const value = this.visibleOptions().filter(option => this.isValidOption(option)).map(option => this.getOptionValue(option));
            this.updateModel(value, event);
            event.preventDefault();
            break;
          }
          if (!metaKey && primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isPrintableCharacter(event.key)) {
            !this.overlayVisible && this.show();
            this.searchOptions(event, event.key);
            event.preventDefault();
          }
          break;
      }
    }
    onFilterKeyDown(event) {
      switch (event.code) {
        case 'ArrowDown':
          this.onArrowDownKey(event);
          break;
        case 'ArrowUp':
          this.onArrowUpKey(event, true);
          break;
        case 'ArrowLeft':
        case 'ArrowRight':
          this.onArrowLeftKey(event, true);
          break;
        case 'Home':
          this.onHomeKey(event, true);
          break;
        case 'End':
          this.onEndKey(event, true);
          break;
        case 'Enter':
          this.onEnterKey(event);
          break;
        case 'Escape':
          this.onEscapeKey(event);
          break;
        case 'Tab':
          this.onTabKey(event, true);
          break;
        default:
          break;
      }
    }
    onArrowLeftKey(event, pressedInInputText = false) {
      pressedInInputText && this.focusedOptionIndex.set(-1);
    }
    onArrowDownKey(event) {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.findFirstFocusedOptionIndex();
      if (event.shiftKey) {
        this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
      event.preventDefault();
      event.stopPropagation();
    }
    onArrowUpKey(event, pressedInInputText = false) {
      if (event.altKey && !pressedInInputText) {
        if (this.focusedOptionIndex() !== -1) {
          this.onOptionSelect(event, this.visibleOptions()[this.focusedOptionIndex()]);
        }
        this.overlayVisible && this.hide();
        event.preventDefault();
      } else {
        const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.findLastFocusedOptionIndex();
        if (event.shiftKey) {
          this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
        }
        this.changeFocusedOptionIndex(event, optionIndex);
        !this.overlayVisible && this.show();
        event.preventDefault();
      }
      event.stopPropagation();
    }
    onHomeKey(event, pressedInInputText = false) {
      const {
        currentTarget
      } = event;
      if (pressedInInputText) {
        const len = currentTarget.value.length;
        currentTarget.setSelectionRange(0, event.shiftKey ? len : 0);
        this.focusedOptionIndex.set(-1);
      } else {
        let metaKey = event.metaKey || event.ctrlKey;
        let optionIndex = this.findFirstOptionIndex();
        if (event.shiftKey && metaKey) {
          this.onOptionSelectRange(event, optionIndex, this.startRangeIndex());
        }
        this.changeFocusedOptionIndex(event, optionIndex);
        !this.overlayVisible && this.show();
      }
      event.preventDefault();
    }
    onEndKey(event, pressedInInputText = false) {
      const {
        currentTarget
      } = event;
      if (pressedInInputText) {
        const len = currentTarget.value.length;
        currentTarget.setSelectionRange(event.shiftKey ? 0 : len, len);
        this.focusedOptionIndex.set(-1);
      } else {
        let metaKey = event.metaKey || event.ctrlKey;
        let optionIndex = this.findLastFocusedOptionIndex();
        if (event.shiftKey && metaKey) {
          this.onOptionSelectRange(event, this.startRangeIndex(), optionIndex);
        }
        this.changeFocusedOptionIndex(event, optionIndex);
        !this.overlayVisible && this.show();
      }
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
          if (event.shiftKey) {
            this.onOptionSelectRange(event, this.focusedOptionIndex());
          } else {
            this.onOptionSelect({
              originalEvent: event,
              option: this.visibleOptions()[this.focusedOptionIndex()]
            });
          }
        }
      }
      event.preventDefault();
    }
    onEscapeKey(event) {
      this.overlayVisible && this.hide(true);
      event.preventDefault();
    }
    onDeleteKey(event) {
      if (this.showClear) {
        this.clear(event);
        event.preventDefault();
      }
    }
    onTabKey(event, pressedInInputText = false) {
      if (!pressedInInputText) {
        if (this.overlayVisible && this.hasFocusableElements()) {
          primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.focus(event.shiftKey ? this.lastHiddenFocusableElementOnOverlay.nativeElement : this.firstHiddenFocusableElementOnOverlay.nativeElement);
          event.preventDefault();
        } else {
          if (this.focusedOptionIndex() !== -1) {
            this.onOptionSelect({
              originalEvent: event,
              option: this.visibleOptions()[this.focusedOptionIndex()]
            });
          }
          this.overlayVisible && this.hide(this.filter);
        }
      }
    }
    onShiftKey() {
      this.startRangeIndex.set(this.focusedOptionIndex());
    }
    onContainerClick(event) {
      if (this.disabled || this.readonly || event.target.isSameNode(this.focusInputViewChild?.nativeElement)) {
        return;
      }
      if (event.target.tagName === 'INPUT' || event.target.getAttribute('data-pc-section') === 'clearicon' || event.target.closest('[data-pc-section="clearicon"]')) {
        event.preventDefault();
        return;
      } else if (!this.overlayViewChild || !this.overlayViewChild.el.nativeElement.contains(event.target)) {
        this.overlayVisible ? this.hide(true) : this.show(true);
      }
      this.focusInputViewChild?.nativeElement.focus({
        preventScroll: true
      });
      this.onClick.emit(event);
      this.cd.detectChanges();
    }
    onFirstHiddenFocus(event) {
      const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.getFirstFocusableElement(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
      primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.focus(focusableEl);
    }
    onInputFocus(event) {
      this.focused = true;
      const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      this.focusedOptionIndex.set(focusedOptionIndex);
      this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
      this.onFocus.emit({
        originalEvent: event
      });
    }
    onInputBlur(event) {
      this.focused = false;
      this.onBlur.emit({
        originalEvent: event
      });
      if (!this.preventModelTouched) {
        this.onModelTouched();
      }
      this.preventModelTouched = false;
    }
    onFilterInputChange(event) {
      let value = event.target.value?.trim();
      this._filterValue.set(value);
      this.focusedOptionIndex.set(-1);
      this.onFilter.emit({
        originalEvent: event,
        filter: this._filterValue()
      });
      !this.virtualScrollerDisabled && this.scroller.scrollToIndex(0);
    }
    onLastHiddenFocus(event) {
      const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.getLastFocusableElement(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
      primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.focus(focusableEl);
    }
    onOptionMouseEnter(event, index) {
      if (this.focusOnHover) {
        this.changeFocusedOptionIndex(event, index);
      }
    }
    onHeaderCheckboxKeyDown(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      switch (event.code) {
        case 'Space':
          this.onToggleAll(event);
          break;
        case 'Enter':
          this.onToggleAll(event);
          break;
        default:
          break;
      }
    }
    onFilterBlur(event) {
      this.focusedOptionIndex.set(-1);
    }
    onHeaderCheckboxFocus() {
      this.headerCheckboxFocus = true;
    }
    onHeaderCheckboxBlur() {
      this.headerCheckboxFocus = false;
    }
    onToggleAll(event) {
      if (this.disabled || this.readonly) {
        return;
      }
      if (this.selectAll != null) {
        this.onSelectAllChange.emit({
          originalEvent: event,
          checked: !this.allSelected()
        });
      } else {
        const value = this.allSelected() ? [] : this.visibleOptions().filter(option => this.isValidOption(option)).map(option => this.getOptionValue(option));
        this.updateModel(value, event);
      }
      primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.focus(this.headerCheckboxViewChild.nativeElement);
      this.headerCheckboxFocus = true;
      event.preventDefault();
      event.stopPropagation();
    }
    changeFocusedOptionIndex(event, index) {
      if (this.focusedOptionIndex() !== index) {
        this.focusedOptionIndex.set(index);
        this.scrollInView();
      }
    }
    get virtualScrollerDisabled() {
      return !this.virtualScroll;
    }
    scrollInView(index = -1) {
      const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
      if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
        const element = primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.findSingle(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
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
    get focusedOptionId() {
      return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
    }
    writeValue(value) {
      this.value = value;
      this.modelValue.set(this.value);
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
    allSelected() {
      return this.selectAll !== null ? this.selectAll : primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(this.visibleOptions()) && this.visibleOptions().every(option => this.isOptionGroup(option) || this.isOptionDisabled(option) || this.isSelected(option));
    }
    /**
     * Displays the panel.
     * @group Method
     */
    show(isFocus) {
      this.overlayVisible = true;
      const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
      this.focusedOptionIndex.set(focusedOptionIndex);
      if (isFocus) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.focus(this.focusInputViewChild?.nativeElement);
      }
      this.cd.markForCheck();
    }
    /**
     * Hides the panel.
     * @group Method
     */
    hide(isFocus) {
      this.overlayVisible = false;
      this.focusedOptionIndex.set(-1);
      if (this.filter && this.resetFilterOnHide) {
        this.resetFilter();
      }
      isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.focus(this.focusInputViewChild?.nativeElement);
      this.onPanelHide.emit();
      this.cd.markForCheck();
    }
    onOverlayAnimationStart(event) {
      switch (event.toState) {
        case 'visible':
          this.itemsWrapper = primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.findSingle(this.overlayViewChild?.overlayViewChild?.nativeElement, this.virtualScroll ? '.p-scroller' : '.p-multiselect-items-wrapper');
          this.virtualScroll && this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
          if (this._options() && this._options().length) {
            if (this.virtualScroll) {
              const selectedIndex = primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.isNotEmpty(this.modelValue()) ? this.focusedOptionIndex() : -1;
              if (selectedIndex !== -1) {
                this.scroller?.scrollToIndex(selectedIndex);
              }
            } else {
              let selectedListItem = primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.findSingle(this.itemsWrapper, '.p-multiselect-item.p-highlight');
              if (selectedListItem) {
                selectedListItem.scrollIntoView({
                  block: 'nearest',
                  inline: 'center'
                });
              }
            }
          }
          if (this.filterInputChild && this.filterInputChild.nativeElement) {
            this.preventModelTouched = true;
            if (this.autofocusFilter) {
              this.filterInputChild.nativeElement.focus();
            }
          }
          this.onPanelShow.emit();
        case 'void':
          this.itemsWrapper = null;
          this.onModelTouched();
          break;
      }
    }
    resetFilter() {
      if (this.filterInputChild && this.filterInputChild.nativeElement) {
        this.filterInputChild.nativeElement.value = '';
      }
      this._filterValue.set(null);
      this._filteredOptions = null;
    }
    close(event) {
      this.hide();
      event.preventDefault();
      event.stopPropagation();
    }
    clear(event) {
      this.value = null;
      this.updateModel(null, event);
      this.selectedOptions = null;
      this.onClear.emit();
      event.stopPropagation();
    }
    removeOption(optionValue, event) {
      let value = this.modelValue().filter(val => !primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.equals(val, optionValue, this.equalityKey()));
      this.updateModel(value, event);
      this.onChange.emit({
        originalEvent: event,
        value: value,
        itemValue: optionValue
      });
      event && event.stopPropagation();
    }
    findNextItem(item) {
      let nextItem = item.nextElementSibling;
      if (nextItem) return primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.hasClass(nextItem.children[0], 'p-disabled') || primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.isHidden(nextItem.children[0]) || primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.hasClass(nextItem, 'p-multiselect-item-group') ? this.findNextItem(nextItem) : nextItem.children[0];else return null;
    }
    findPrevItem(item) {
      let prevItem = item.previousElementSibling;
      if (prevItem) return primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.hasClass(prevItem.children[0], 'p-disabled') || primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.isHidden(prevItem.children[0]) || primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.hasClass(prevItem, 'p-multiselect-item-group') ? this.findPrevItem(prevItem) : prevItem.children[0];else return null;
    }
    findNextOptionIndex(index) {
      const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex(option => this.isValidOption(option)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    }
    findPrevOptionIndex(index) {
      const matchedOptionIndex = index > 0 ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.findLastIndex(this.visibleOptions().slice(0, index), option => this.isValidOption(option)) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    }
    findLastSelectedOptionIndex() {
      return this.hasSelectedOption() ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.findLastIndex(this.visibleOptions(), option => this.isValidSelectedOption(option)) : -1;
    }
    findLastFocusedOptionIndex() {
      const selectedIndex = this.findLastSelectedOptionIndex();
      return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    }
    findLastOptionIndex() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_6__.ObjectUtils.findLastIndex(this.visibleOptions(), option => this.isValidOption(option));
    }
    searchOptions(event, char) {
      this.searchValue = (this.searchValue || '') + char;
      let optionIndex = -1;
      let matched = false;
      if (this.focusedOptionIndex() !== -1) {
        optionIndex = this.visibleOptions().slice(this.focusedOptionIndex()).findIndex(option => this.isOptionMatched(option));
        optionIndex = optionIndex === -1 ? this.visibleOptions().slice(0, this.focusedOptionIndex()).findIndex(option => this.isOptionMatched(option)) : optionIndex + this.focusedOptionIndex();
      } else {
        optionIndex = this.visibleOptions().findIndex(option => this.isOptionMatched(option));
      }
      if (optionIndex !== -1) {
        matched = true;
      }
      if (optionIndex === -1 && this.focusedOptionIndex() === -1) {
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
    activateFilter() {
      if (this.hasFilter() && this._options) {
        if (this.group) {
          let filteredGroups = [];
          for (let optgroup of this.options) {
            let filteredSubOptions = this.filterService.filter(this.getOptionGroupChildren(optgroup), this.searchFields(), this.filterValue, this.filterMatchMode, this.filterLocale);
            if (filteredSubOptions && filteredSubOptions.length) {
              filteredGroups.push({
                ...optgroup,
                ...{
                  [this.optionGroupChildren]: filteredSubOptions
                }
              });
            }
          }
          this._filteredOptions = filteredGroups;
        } else {
          this._filteredOptions = this.filterService.filter(this.options, this.searchFields(), this.filterValue, this.filterMatchMode, this.filterLocale);
        }
      } else {
        this._filteredOptions = null;
      }
    }
    hasFocusableElements() {
      return primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.getFocusableElements(this.overlayViewChild.overlayViewChild.nativeElement, ':not([data-p-hidden-focusable="true"])').length > 0;
    }
    hasFilter() {
      return this._filterValue() && this._filterValue().trim().length > 0;
    }
    static ɵfac = function MultiSelect_Factory(t) {
      return new (t || MultiSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.FilterService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.OverlayService));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MultiSelect,
      selectors: [["p-multiSelect"]],
      contentQueries: function MultiSelect_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.Footer, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.Header, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function MultiSelect_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c9, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c10, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c11, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c12, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlayViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filterInputChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.focusInputViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemsViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lastHiddenFocusableElementOnOverlay = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.firstHiddenFocusableElementOnOverlay = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerCheckboxViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element", "p-inputwrapper"],
      hostVars: 4,
      hostBindings: function MultiSelect_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-inputwrapper-focus", ctx.focused || ctx.overlayVisible)("p-inputwrapper-filled", ctx.filled);
        }
      },
      inputs: {
        id: "id",
        ariaLabel: "ariaLabel",
        style: "style",
        styleClass: "styleClass",
        panelStyle: "panelStyle",
        panelStyleClass: "panelStyleClass",
        inputId: "inputId",
        disabled: "disabled",
        readonly: "readonly",
        group: "group",
        filter: "filter",
        filterPlaceHolder: "filterPlaceHolder",
        filterLocale: "filterLocale",
        overlayVisible: "overlayVisible",
        tabindex: "tabindex",
        appendTo: "appendTo",
        dataKey: "dataKey",
        name: "name",
        ariaLabelledBy: "ariaLabelledBy",
        displaySelectedLabel: "displaySelectedLabel",
        maxSelectedLabels: "maxSelectedLabels",
        selectionLimit: "selectionLimit",
        selectedItemsLabel: "selectedItemsLabel",
        showToggleAll: "showToggleAll",
        emptyFilterMessage: "emptyFilterMessage",
        emptyMessage: "emptyMessage",
        resetFilterOnHide: "resetFilterOnHide",
        dropdownIcon: "dropdownIcon",
        optionLabel: "optionLabel",
        optionValue: "optionValue",
        optionDisabled: "optionDisabled",
        optionGroupLabel: "optionGroupLabel",
        optionGroupChildren: "optionGroupChildren",
        showHeader: "showHeader",
        filterBy: "filterBy",
        scrollHeight: "scrollHeight",
        lazy: "lazy",
        virtualScroll: "virtualScroll",
        virtualScrollItemSize: "virtualScrollItemSize",
        virtualScrollOptions: "virtualScrollOptions",
        overlayOptions: "overlayOptions",
        ariaFilterLabel: "ariaFilterLabel",
        filterMatchMode: "filterMatchMode",
        tooltip: "tooltip",
        tooltipPosition: "tooltipPosition",
        tooltipPositionStyle: "tooltipPositionStyle",
        tooltipStyleClass: "tooltipStyleClass",
        autofocusFilter: "autofocusFilter",
        display: "display",
        autocomplete: "autocomplete",
        showClear: "showClear",
        autoZIndex: "autoZIndex",
        baseZIndex: "baseZIndex",
        showTransitionOptions: "showTransitionOptions",
        hideTransitionOptions: "hideTransitionOptions",
        defaultLabel: "defaultLabel",
        placeholder: "placeholder",
        options: "options",
        filterValue: "filterValue",
        itemSize: "itemSize",
        selectAll: "selectAll",
        focusOnHover: "focusOnHover",
        filterFields: "filterFields",
        selectOnFocus: "selectOnFocus",
        autoOptionFocus: "autoOptionFocus"
      },
      outputs: {
        onChange: "onChange",
        onFilter: "onFilter",
        onFocus: "onFocus",
        onBlur: "onBlur",
        onClick: "onClick",
        onClear: "onClear",
        onPanelShow: "onPanelShow",
        onPanelHide: "onPanelHide",
        onLazyLoad: "onLazyLoad",
        onRemove: "onRemove",
        onSelectAllChange: "onSelectAllChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MULTISELECT_VALUE_ACCESSOR])],
      ngContentSelectors: _c20,
      decls: 16,
      vars: 41,
      consts: [[3, "ngClass", "ngStyle", "click"], ["container", ""], [1, "p-hidden-accessible"], ["role", "combobox", 3, "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "focus", "blur", "keydown"], ["focusInput", ""], [1, "p-multiselect-label-container", 3, "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass"], [3, "ngClass"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-multiselect-trigger"], ["class", "p-multiselect-trigger-icon", 4, "ngIf"], [3, "visible", "options", "target", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "visibleChange", "onAnimationStart", "onHide"], ["overlay", ""], ["pTemplate", "content"], ["class", "p-multiselect-token", 4, "ngFor", "ngForOf"], [1, "p-multiselect-token"], ["token", ""], [1, "p-multiselect-token-label"], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-multiselect-token-icon", 3, "click", 4, "ngIf"], [3, "styleClass", "click"], [1, "p-multiselect-token-icon", 3, "click"], [4, "ngTemplateOutlet"], ["class", "p-multiselect-clear-icon", 3, "click", 4, "ngIf"], [1, "p-multiselect-clear-icon", 3, "click"], ["class", "p-multiselect-trigger-icon", 3, "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [1, "p-multiselect-trigger-icon", 3, "ngClass"], [3, "styleClass"], [1, "p-multiselect-trigger-icon"], [3, "ngClass", "ngStyle"], ["role", "presentation", 1, "p-hidden-accessible", "p-hidden-focusable", 3, "focus"], ["firstHiddenFocusableEl", ""], ["class", "p-multiselect-header", 4, "ngIf"], [1, "p-multiselect-items-wrapper"], [3, "items", "style", "itemSize", "autoSize", "tabindex", "lazy", "options", "onLazyLoad", 4, "ngIf"], ["buildInItems", ""], ["class", "p-multiselect-footer", 4, "ngIf"], ["lastHiddenFocusableEl", ""], [1, "p-multiselect-header"], [4, "ngIf", "ngIfElse"], ["builtInFilterElement", ""], ["class", "p-checkbox p-component", 3, "ngClass", "click", "keydown", 4, "ngIf"], ["class", "p-multiselect-filter-container", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-multiselect-close", "p-link", "p-button-icon-only", 3, "click"], ["class", "p-multiselect-close-icon", 4, "ngIf"], [1, "p-checkbox", "p-component", 3, "ngClass", "click", "keydown"], ["type", "checkbox", 3, "readonly", "disabled", "focus", "blur"], ["headerCheckbox", ""], ["role", "checkbox", 1, "p-checkbox-box", 3, "ngClass"], ["class", "p-checkbox-icon", 4, "ngIf"], [1, "p-checkbox-icon"], [1, "p-multiselect-filter-container"], ["type", "text", "role", "searchbox", 1, "p-multiselect-filter", "p-inputtext", "p-component", 3, "value", "disabled", "input", "keydown", "click", "blur"], ["filterInput", ""], ["class", "p-multiselect-filter-icon", 4, "ngIf"], [1, "p-multiselect-filter-icon"], [1, "p-multiselect-close-icon"], [3, "items", "itemSize", "autoSize", "tabindex", "lazy", "options", "onLazyLoad"], ["scroller", ""], ["pTemplate", "loader"], ["role", "listbox", "aria-multiselectable", "true", 1, "p-multiselect-items", "p-component", 3, "ngClass"], ["items", ""], ["ngFor", "", 3, "ngForOf"], ["class", "p-multiselect-empty-message", 3, "ngStyle", 4, "ngIf"], ["role", "option", 1, "p-multiselect-item-group", 3, "ngStyle"], [3, "id", "option", "selected", "label", "disabled", "template", "checkIconTemplate", "itemSize", "focused", "ariaPosInset", "ariaSetSize", "onClick", "onMouseEnter"], [1, "p-multiselect-empty-message", 3, "ngStyle"], ["emptyFilter", ""], ["empty", ""], [1, "p-multiselect-footer"]],
      template: function MultiSelect_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelect_Template_div_click_0_listener($event) {
            return ctx.onContainerClick($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "input", 3, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MultiSelect_Template_input_focus_3_listener($event) {
            return ctx.onInputFocus($event);
          })("blur", function MultiSelect_Template_input_blur_3_listener($event) {
            return ctx.onInputBlur($event);
          })("keydown", function MultiSelect_Template_input_keydown_3_listener($event) {
            return ctx.onKeyDown($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MultiSelect_ng_container_7_Template, 3, 2, "ng-container", 7)(8, MultiSelect_ng_container_8_Template, 1, 0, "ng-container", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MultiSelect_ng_container_9_Template, 3, 2, "ng-container", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MultiSelect_ng_container_11_Template, 3, 2, "ng-container", 7)(12, MultiSelect_span_12_Template, 2, 3, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p-overlay", 11, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visibleChange", function MultiSelect_Template_p_overlay_visibleChange_13_listener($event) {
            return ctx.overlayVisible = $event;
          })("onAnimationStart", function MultiSelect_Template_p_overlay_onAnimationStart_13_listener($event) {
            return ctx.onOverlayAnimationStart($event);
          })("onHide", function MultiSelect_Template_p_overlay_onHide_13_listener() {
            return ctx.hide();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MultiSelect_ng_template_15_Template, 12, 18, "ng-template", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.containerClass)("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-p-hidden-accessible", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pTooltip", ctx.tooltip)("tooltipPosition", ctx.tooltipPosition)("positionStyle", ctx.tooltipPositionStyle)("tooltipStyleClass", ctx.tooltipStyleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", ctx.disabled)("id", ctx.inputId)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("aria-haspopup", "listbox")("aria-expanded", ctx.overlayVisible)("aria-controls", ctx.id + "_list")("tabindex", !ctx.disabled ? ctx.tabindex : -1)("aria-activedescendant", ctx.focused ? ctx.focusedOptionId : undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pTooltip", ctx.tooltip)("tooltipPosition", ctx.tooltipPosition)("positionStyle", ctx.tooltipPositionStyle)("tooltipStyleClass", ctx.tooltipStyleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.labelClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedItemsTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.selectedItemsTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](38, _c19, ctx.selectedOptions, ctx.removeOption.bind(ctx)));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisibleClearIcon);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dropdownIconTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dropdownIconTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("visible", ctx.overlayVisible)("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("autoZIndex", ctx.autoZIndex)("baseZIndex", ctx.baseZIndex)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_overlay__WEBPACK_IMPORTED_MODULE_8__.Overlay, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.Tooltip, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.Ripple, primeng_scroller__WEBPACK_IMPORTED_MODULE_10__.Scroller, primeng_icons_check__WEBPACK_IMPORTED_MODULE_4__.CheckIcon, primeng_icons_search__WEBPACK_IMPORTED_MODULE_11__.SearchIcon, primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_12__.TimesCircleIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_13__.TimesIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_14__.ChevronDownIcon, MultiSelectItem],
      styles: ["@layer primeng{.p-multiselect{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-multiselect-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-multiselect-label-container{overflow:hidden;flex:1 1 auto;cursor:pointer;display:flex}.p-multiselect-label{display:block;white-space:nowrap;cursor:pointer;overflow:hidden;text-overflow:ellipsis}.p-multiselect-label-empty{overflow:hidden;visibility:hidden}.p-multiselect-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto}.p-multiselect-token-icon{cursor:pointer}.p-multiselect-token-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100px}.p-multiselect-items-wrapper{overflow:auto}.p-multiselect-items{margin:0;padding:0;list-style-type:none}.p-multiselect-item{cursor:pointer;display:flex;align-items:center;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-multiselect-header{display:flex;align-items:center;justify-content:space-between}.p-multiselect-filter-container{position:relative;flex:1 1 auto}.p-multiselect-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-multiselect-filter-container .p-inputtext{width:100%}.p-multiselect-close{display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;position:relative}.p-fluid .p-multiselect{display:flex}.p-multiselect-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-multiselect-clearable{position:relative}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MultiSelect;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MultiSelectModule = /*#__PURE__*/(() => {
  class MultiSelectModule {
    static ɵfac = function MultiSelectModule_Factory(t) {
      return new (t || MultiSelectModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MultiSelectModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_overlay__WEBPACK_IMPORTED_MODULE_8__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_3__.RippleModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_10__.ScrollerModule, primeng_icons_check__WEBPACK_IMPORTED_MODULE_4__.CheckIcon, primeng_icons_search__WEBPACK_IMPORTED_MODULE_11__.SearchIcon, primeng_icons_timescircle__WEBPACK_IMPORTED_MODULE_12__.TimesCircleIcon, primeng_icons_times__WEBPACK_IMPORTED_MODULE_13__.TimesIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_14__.ChevronDownIcon, primeng_icons_check__WEBPACK_IMPORTED_MODULE_4__.CheckIcon, primeng_overlay__WEBPACK_IMPORTED_MODULE_8__.OverlayModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_scroller__WEBPACK_IMPORTED_MODULE_10__.ScrollerModule]
    });
  }
  return MultiSelectModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-multiselect.mjs.map

/***/ })

}]);