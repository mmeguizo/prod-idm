"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[74],{

/***/ 30074:
/*!*************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-panelmenu.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelMenu: () => (/* binding */ PanelMenu),
/* harmony export */   PanelMenuList: () => (/* binding */ PanelMenuList),
/* harmony export */   PanelMenuModule: () => (/* binding */ PanelMenuModule),
/* harmony export */   PanelMenuSub: () => (/* binding */ PanelMenuSub)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 86825);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dom */ 82076);
/* harmony import */ var primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/angledown */ 47273);
/* harmony import */ var primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/angleright */ 51239);
/* harmony import */ var primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/icons/chevrondown */ 76005);
/* harmony import */ var primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/icons/chevronright */ 44562);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/tooltip */ 33259);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 2332);
















const _c0 = ["list"];
function PanelMenuSub_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 5);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDownIcon", 20);
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6).$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon")("ngStyle", ctx_r19.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleRightIcon", 20);
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6).$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon")("ngStyle", ctx_r20.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_AngleDownIcon_1_Template, 1, 2, "AngleDownIcon", 19)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_AngleRightIcon_2_Template, 1, 2, "AngleRightIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5).$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r17.isItemActive(processedItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r17.isItemActive(processedItem_r2));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_ng_template_0_Template(rf, ctx) {}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 8)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_Template, 1, 0, null, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.panelMenu.submenuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r11.panelMenu.submenuIconTemplate);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 21);
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", processedItem_r2.icon)("ngStyle", ctx_r12.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.getItemProp(processedItem_r2, "label"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 23);
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r14.getItemProp(processedItem_r2, "label"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", processedItem_r2.badgeStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](processedItem_r2.badge);
  }
}
const _c1 = a0 => ({
  "p-disabled": a0
});
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_Template, 3, 2, "ng-container", 8)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_2_Template, 1, 2, "span", 14)(3, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_3_Template, 2, 1, "span", 15)(4, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_template_4_Template, 1, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(6, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_6_Template, 2, 2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx_r9.getItemProp(processedItem_r2, "disabled")))("target", ctx_r9.getItemProp(processedItem_r2, "target"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", ctx_r9.getItemProp(processedItem_r2, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("data-pc-section", "action")("tabindex", !!ctx_r9.parentExpanded ? "0" : "-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.isItemGroup(processedItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", processedItem_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (processedItem_r2.item == null ? null : processedItem_r2.item.escape) !== false)("ngIfElse", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", processedItem_r2.badge);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDownIcon", 20);
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6).$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon")("ngStyle", ctx_r38.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleRightIcon", 20);
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6).$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon")("ngStyle", ctx_r39.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_AngleDownIcon_1_Template, 1, 2, "AngleDownIcon", 19)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_AngleRightIcon_2_Template, 1, 2, "AngleRightIcon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5).$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r36.isItemActive(processedItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r36.isItemActive(processedItem_r2));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_ng_template_0_Template(rf, ctx) {}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 8)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_Template, 1, 0, null, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r30.panelMenu.submenuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r30.panelMenu.submenuIconTemplate);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 21);
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", processedItem_r2.icon)("ngStyle", ctx_r31.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r32.getItemProp(processedItem_r2, "label"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 23);
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r33.getItemProp(processedItem_r2, "label"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r35.getItemProp(processedItem_r2, "badgeStyleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r35.getItemProp(processedItem_r2, "badge"));
  }
}
const _c2 = () => ({
  exact: false
});
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_Template, 3, 2, "ng-container", 8)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_2_Template, 1, 2, "span", 14)(3, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_3_Template, 2, 1, "span", 15)(4, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_template_4_Template, 1, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(6, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_6_Template, 2, 2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r10.getItemProp(processedItem_r2, "routerLink"))("queryParams", ctx_r10.getItemProp(processedItem_r2, "queryParams"))("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r10.getItemProp(processedItem_r2, "routerLinkActiveOptions") || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c2))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, ctx_r10.getItemProp(processedItem_r2, "disabled")))("target", ctx_r10.getItemProp(processedItem_r2, "target"))("fragment", ctx_r10.getItemProp(processedItem_r2, "fragment"))("queryParamsHandling", ctx_r10.getItemProp(processedItem_r2, "queryParamsHandling"))("preserveFragment", ctx_r10.getItemProp(processedItem_r2, "preserveFragment"))("skipLocationChange", ctx_r10.getItemProp(processedItem_r2, "skipLocationChange"))("replaceUrl", ctx_r10.getItemProp(processedItem_r2, "replaceUrl"))("state", ctx_r10.getItemProp(processedItem_r2, "state"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx_r10.getItemProp(processedItem_r2, "title"))("data-pc-section", "action")("tabindex", !!ctx_r10.parentExpanded ? "0" : "-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.isItemGroup(processedItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", processedItem_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.getItemProp(processedItem_r2, "escape") !== false)("ngIfElse", _r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", processedItem_r2.badge);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_Template, 7, 12, "a", 11)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_Template, 7, 23, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.getItemProp(processedItem_r2, "routerLink"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.getItemProp(processedItem_r2, "routerLink"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_3_1_ng_template_0_Template(rf, ctx) {}
function PanelMenuSub_ng_template_2_li_1_ng_container_3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelMenuSub_ng_template_2_li_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c3 = a0 => ({
  $implicit: a0
});
function PanelMenuSub_ng_template_2_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenuSub_ng_template_2_li_1_ng_container_3_1_Template, 1, 0, null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, processedItem_r2.item));
  }
}
function PanelMenuSub_ng_template_2_li_1_p_panelMenuSub_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-panelMenuSub", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemToggle", function PanelMenuSub_ng_template_2_li_1_p_panelMenuSub_5_Template_p_panelMenuSub_itemToggle_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r53.onItemToggle($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r8.getItemId(processedItem_r2) + "_list")("panelId", ctx_r8.panelId)("items", processedItem_r2.items)("itemTemplate", ctx_r8.itemTemplate)("transitionOptions", ctx_r8.transitionOptions)("focusedItemId", ctx_r8.focusedItemId)("activeItemPath", ctx_r8.activeItemPath)("level", ctx_r8.level + 1)("parentExpanded", !!ctx_r8.parentExpanded && ctx_r8.isItemExpanded(processedItem_r2));
  }
}
function PanelMenuSub_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelMenuSub_ng_template_2_li_1_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);
      const processedItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r56.onItemClick($event, processedItem_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelMenuSub_ng_template_2_li_1_ng_container_2_Template, 3, 2, "ng-container", 8)(3, PanelMenuSub_ng_template_2_li_1_ng_container_3_Template, 2, 4, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PanelMenuSub_ng_template_2_li_1_p_panelMenuSub_5_Template, 1, 9, "p-panelMenuSub", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const processedItem_r2 = ctx_r59.$implicit;
    const index_r3 = ctx_r59.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r5.getItemProp(processedItem_r2, "styleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-hidden", processedItem_r2.visible === false)("p-focus", ctx_r5.isItemFocused(processedItem_r2) && !ctx_r5.isItemDisabled(processedItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.getItemClass(processedItem_r2))("ngStyle", ctx_r5.getItemProp(processedItem_r2, "style"))("pTooltip", ctx_r5.getItemProp(processedItem_r2, "tooltip"))("tooltipOptions", ctx_r5.getItemProp(processedItem_r2, "tooltipOptions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r5.getItemId(processedItem_r2))("aria-label", ctx_r5.getItemProp(processedItem_r2, "label"))("aria-expanded", ctx_r5.isItemGroup(processedItem_r2) ? ctx_r5.isItemActive(processedItem_r2) : undefined)("aria-level", ctx_r5.level + 1)("aria-setsize", ctx_r5.getAriaSetSize())("aria-posinset", ctx_r5.getAriaPosInset(index_r3))("data-p-disabled", ctx_r5.isItemDisabled(processedItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@submenu", ctx_r5.getAnimation(processedItem_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isItemVisible(processedItem_r2) && ctx_r5.isItemGroup(processedItem_r2));
  }
}
function PanelMenuSub_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelMenuSub_ng_template_2_li_0_Template, 1, 0, "li", 3)(1, PanelMenuSub_ng_template_2_li_1_Template, 6, 21, "li", 4);
  }
  if (rf & 2) {
    const processedItem_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", processedItem_r2.separator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !processedItem_r2.separator && ctx_r1.isItemVisible(processedItem_r2));
  }
}
const _c4 = a1 => ({
  "p-submenu-list": true,
  "p-panelmenu-root-list": a1
});
const _c5 = ["submenu"];
const _c6 = ["container"];
function PanelMenu_ng_container_2_div_1_a_3_ng_container_1_ng_container_1_ChevronDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon");
  }
}
function PanelMenu_ng_container_2_div_1_a_3_ng_container_1_ng_container_1_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronRightIcon", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon");
  }
}
function PanelMenu_ng_container_2_div_1_a_3_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenu_ng_container_2_div_1_a_3_ng_container_1_ng_container_1_ChevronDownIcon_1_Template, 1, 1, "ChevronDownIcon", 17)(2, PanelMenu_ng_container_2_div_1_a_3_ng_container_1_ng_container_1_ChevronRightIcon_2_Template, 1, 1, "ChevronRightIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.isItemActive(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r16.isItemActive(item_r2));
  }
}
function PanelMenu_ng_container_2_div_1_a_3_ng_container_1_2_ng_template_0_Template(rf, ctx) {}
function PanelMenu_ng_container_2_div_1_a_3_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelMenu_ng_container_2_div_1_a_3_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenu_ng_container_2_div_1_a_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenu_ng_container_2_div_1_a_3_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 11)(2, PanelMenu_ng_container_2_div_1_a_3_ng_container_1_2_Template, 1, 0, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r10.submenuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r10.submenuIconTemplate);
  }
}
function PanelMenu_ng_container_2_div_1_a_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 19);
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r2.icon)("ngStyle", ctx_r11.getItemProp(item_r2, "iconStyle"));
  }
}
function PanelMenu_ng_container_2_div_1_a_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.getItemProp(item_r2, "label"));
  }
}
function PanelMenu_ng_container_2_div_1_a_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 21);
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r13.getItemProp(item_r2, "label"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function PanelMenu_ng_container_2_div_1_a_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r15.getItemProp(item_r2, "badgeStyleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.getItemProp(item_r2, "badge"));
  }
}
function PanelMenu_ng_container_2_div_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenu_ng_container_2_div_1_a_3_ng_container_1_Template, 3, 2, "ng-container", 11)(2, PanelMenu_ng_container_2_div_1_a_3_span_2_Template, 1, 2, "span", 12)(3, PanelMenu_ng_container_2_div_1_a_3_span_3_Template, 2, 1, "span", 13)(4, PanelMenu_ng_container_2_div_1_a_3_ng_template_4_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(6, PanelMenu_ng_container_2_div_1_a_3_span_6_Template, 2, 2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", ctx_r7.getItemProp(item_r2, "target"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", ctx_r7.getItemProp(item_r2, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("tabindex", -1)("title", ctx_r7.getItemProp(item_r2, "title"))("data-pc-section", "headeraction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.isItemGroup(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.getItemProp(item_r2, "escape") !== false)("ngIfElse", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.getItemProp(item_r2, "badge"));
  }
}
function PanelMenu_ng_container_2_div_1_a_4_ng_container_1_ng_container_1_ChevronDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon");
  }
}
function PanelMenu_ng_container_2_div_1_a_4_ng_container_1_ng_container_1_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronRightIcon", 18);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon");
  }
}
function PanelMenu_ng_container_2_div_1_a_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenu_ng_container_2_div_1_a_4_ng_container_1_ng_container_1_ChevronDownIcon_1_Template, 1, 1, "ChevronDownIcon", 17)(2, PanelMenu_ng_container_2_div_1_a_4_ng_container_1_ng_container_1_ChevronRightIcon_2_Template, 1, 1, "ChevronRightIcon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.isItemActive(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r33.isItemActive(item_r2));
  }
}
function PanelMenu_ng_container_2_div_1_a_4_ng_container_1_2_ng_template_0_Template(rf, ctx) {}
function PanelMenu_ng_container_2_div_1_a_4_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelMenu_ng_container_2_div_1_a_4_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenu_ng_container_2_div_1_a_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenu_ng_container_2_div_1_a_4_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 11)(2, PanelMenu_ng_container_2_div_1_a_4_ng_container_1_2_Template, 1, 0, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r27.submenuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r27.submenuIconTemplate);
  }
}
function PanelMenu_ng_container_2_div_1_a_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 19);
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r2.icon)("ngStyle", ctx_r28.getItemProp(item_r2, "iconStyle"));
  }
}
function PanelMenu_ng_container_2_div_1_a_4_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.getItemProp(item_r2, "label"));
  }
}
function PanelMenu_ng_container_2_div_1_a_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 21);
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r30.getItemProp(item_r2, "label"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function PanelMenu_ng_container_2_div_1_a_4_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r32.getItemProp(item_r2, "badgeStyleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r32.getItemProp(item_r2, "badge"));
  }
}
function PanelMenu_ng_container_2_div_1_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenu_ng_container_2_div_1_a_4_ng_container_1_Template, 3, 2, "ng-container", 11)(2, PanelMenu_ng_container_2_div_1_a_4_span_2_Template, 1, 2, "span", 12)(3, PanelMenu_ng_container_2_div_1_a_4_span_3_Template, 2, 1, "span", 13)(4, PanelMenu_ng_container_2_div_1_a_4_ng_template_4_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(6, PanelMenu_ng_container_2_div_1_a_4_span_6_Template, 2, 2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r8.getItemProp(item_r2, "routerLink"))("queryParams", ctx_r8.getItemProp(item_r2, "queryParams"))("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r8.getItemProp(item_r2, "routerLinkActiveOptions") || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2))("target", ctx_r8.getItemProp(item_r2, "target"))("fragment", ctx_r8.getItemProp(item_r2, "fragment"))("queryParamsHandling", ctx_r8.getItemProp(item_r2, "queryParamsHandling"))("preserveFragment", ctx_r8.getItemProp(item_r2, "preserveFragment"))("skipLocationChange", ctx_r8.getItemProp(item_r2, "skipLocationChange"))("replaceUrl", ctx_r8.getItemProp(item_r2, "replaceUrl"))("state", ctx_r8.getItemProp(item_r2, "state"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", -1)("data-pc-section", "headeraction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isItemGroup(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.getItemProp(item_r2, "escape") !== false)("ngIfElse", _r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.getItemProp(item_r2, "badge"));
  }
}
const _c7 = a0 => ({
  "p-panelmenu-expanded": a0
});
function PanelMenu_ng_container_2_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@rootItem.done", function PanelMenu_ng_container_2_div_1_div_5_Template_div_animation_rootItem_done_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r44.onToggleDone());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26)(2, "p-panelMenuList", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("headerFocus", function PanelMenu_ng_container_2_div_1_div_5_Template_p_panelMenuList_headerFocus_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r46.updateFocusedHeader($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const item_r2 = ctx_r47.$implicit;
    const i_r5 = ctx_r47.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c7, ctx_r9.isItemActive(item_r2)))("@rootItem", ctx_r9.getAnimation(item_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r9.getContentId(item_r2, i_r5))("aria-labelledby", ctx_r9.getHeaderId(item_r2, i_r5))("data-pc-section", "toggleablecontent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "menucontent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panelId", ctx_r9.getPanelId(i_r5, item_r2))("items", ctx_r9.getItemProp(item_r2, "items"))("itemTemplate", ctx_r9.itemTemplate)("transitionOptions", ctx_r9.transitionOptions)("root", true)("activeItem", ctx_r9.activeItem())("tabindex", ctx_r9.tabindex)("parentExpanded", ctx_r9.isItemActive(item_r2));
  }
}
const _c8 = (a1, a2) => ({
  "p-component p-panelmenu-header": true,
  "p-highlight": a1,
  "p-disabled": a2
});
function PanelMenu_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelMenu_ng_container_2_div_1_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const item_r2 = ctx_r49.$implicit;
      const i_r5 = ctx_r49.index;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r48.onHeaderClick($event, item_r2, i_r5));
    })("keydown", function PanelMenu_ng_container_2_div_1_Template_div_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const item_r2 = ctx_r52.$implicit;
      const i_r5 = ctx_r52.index;
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r51.onHeaderKeyDown($event, item_r2, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PanelMenu_ng_container_2_div_1_a_3_Template, 7, 10, "a", 7)(4, PanelMenu_ng_container_2_div_1_a_4_Template, 7, 19, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PanelMenu_ng_container_2_div_1_div_5_Template, 3, 16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const item_r2 = ctx_r53.$implicit;
    const i_r5 = ctx_r53.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r6.getItemProp(item_r2, "headerClass"))("ngStyle", ctx_r6.getItemProp(item_r2, "style"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r6.getItemProp(item_r2, "styleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c8, ctx_r6.isItemActive(item_r2), ctx_r6.isItemDisabled(item_r2)))("ngStyle", ctx_r6.getItemProp(item_r2, "style"))("pTooltip", ctx_r6.getItemProp(item_r2, "tooltip"))("tabindex", 0)("tooltipOptions", ctx_r6.getItemProp(item_r2, "tooltipOptions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r6.getHeaderId(item_r2, i_r5))("aria-expanded", ctx_r6.isItemActive(item_r2))("aria-label", ctx_r6.getItemProp(item_r2, "label"))("aria-controls", ctx_r6.getContentId(item_r2, i_r5))("aria-disabled", ctx_r6.isItemDisabled(item_r2))("data-p-highlight", ctx_r6.isItemActive(item_r2))("data-p-disabled", ctx_r6.isItemDisabled(item_r2))("data-pc-section", "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.getItemProp(item_r2, "routerLink"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.getItemProp(item_r2, "routerLink"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isItemGroup(item_r2));
  }
}
function PanelMenu_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelMenu_ng_container_2_div_1_Template, 6, 24, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isItemVisible(item_r2));
  }
}
const _c9 = "@layer primeng{.p-panelmenu .p-panelmenu-header-action{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;position:relative;text-decoration:none}.p-panelmenu .p-panelmenu-header-action:focus{z-index:1}.p-panelmenu .p-submenu-list{margin:0;padding:0;list-style:none}.p-panelmenu .p-menuitem-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;text-decoration:none;position:relative;overflow:hidden;outline:none}.p-panelmenu .p-menuitem-text{line-height:1}.p-panelmenu-expanded.p-toggleable-content:not(.ng-animating),.p-panelmenu .p-submenu-expanded:not(.ng-animating){overflow:visible}.p-panelmenu .p-toggleable-content,.p-panelmenu .p-submenu-list{overflow:hidden}}\n";
let PanelMenuSub = /*#__PURE__*/(() => {
  class PanelMenuSub {
    panelMenu;
    el;
    panelId;
    focusedItemId;
    items;
    itemTemplate;
    level = 0;
    activeItemPath;
    root;
    tabindex;
    transitionOptions;
    parentExpanded;
    itemToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    menuFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    menuBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    menuKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    listViewChild;
    constructor(panelMenu, el) {
      this.panelMenu = panelMenu;
      this.el = el;
    }
    getItemId(processedItem) {
      return processedItem.item?.id ?? `${this.panelId}_${processedItem.key}`;
    }
    getItemKey(processedItem) {
      return this.getItemId(processedItem);
    }
    getItemClass(processedItem) {
      return {
        'p-menuitem': true,
        'p-disabled': this.isItemDisabled(processedItem)
      };
    }
    getItemProp(processedItem, name, params) {
      return processedItem && processedItem.item ? primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getItemValue(processedItem.item[name], params) : undefined;
    }
    getItemLabel(processedItem) {
      return this.getItemProp(processedItem, 'label');
    }
    isItemExpanded(processedItem) {
      return processedItem.expanded;
    }
    isItemActive(processedItem) {
      return this.isItemExpanded(processedItem) || this.activeItemPath.some(path => path && path.key === processedItem.key);
    }
    isItemVisible(processedItem) {
      return this.getItemProp(processedItem, 'visible') !== false;
    }
    isItemDisabled(processedItem) {
      return this.getItemProp(processedItem, 'disabled');
    }
    isItemFocused(processedItem) {
      return this.focusedItemId === this.getItemId(processedItem);
    }
    isItemGroup(processedItem) {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(processedItem.items);
    }
    getAnimation(processedItem) {
      return this.isItemActive(processedItem) ? {
        value: 'visible',
        params: {
          transitionParams: this.transitionOptions,
          height: '*'
        }
      } : {
        value: 'hidden',
        params: {
          transitionParams: this.transitionOptions,
          height: '0'
        }
      };
    }
    getAriaSetSize() {
      return this.items.filter(processedItem => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, 'separator')).length;
    }
    getAriaPosInset(index) {
      return index - this.items.slice(0, index).filter(processedItem => this.isItemVisible(processedItem) && this.getItemProp(processedItem, 'separator')).length + 1;
    }
    onItemClick(event, processedItem) {
      if (!this.isItemDisabled(processedItem)) {
        this.getItemProp(processedItem, 'command', {
          originalEvent: event,
          item: processedItem.item
        });
        this.itemToggle.emit({
          processedItem,
          expanded: !this.isItemActive(processedItem)
        });
      }
    }
    onItemToggle(event) {
      this.itemToggle.emit(event);
    }
    static ɵfac = function PanelMenuSub_Factory(t) {
      return new (t || PanelMenuSub)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => PanelMenu)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PanelMenuSub,
      selectors: [["p-panelMenuSub"]],
      viewQuery: function PanelMenuSub_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        panelId: "panelId",
        focusedItemId: "focusedItemId",
        items: "items",
        itemTemplate: "itemTemplate",
        level: "level",
        activeItemPath: "activeItemPath",
        root: "root",
        tabindex: "tabindex",
        transitionOptions: "transitionOptions",
        parentExpanded: "parentExpanded"
      },
      outputs: {
        itemToggle: "itemToggle",
        menuFocus: "menuFocus",
        menuBlur: "menuBlur",
        menuKeyDown: "menuKeyDown"
      },
      decls: 3,
      vars: 8,
      consts: [["role", "tree", 3, "ngClass", "tabindex", "focusin", "focusout", "keydown"], ["list", ""], ["ngFor", "", 3, "ngForOf"], ["class", "p-menuitem-separator", "role", "separator", 4, "ngIf"], ["role", "treeitem", 3, "ngClass", "class", "p-hidden", "p-focus", "ngStyle", "pTooltip", "tooltipOptions", 4, "ngIf"], ["role", "separator", 1, "p-menuitem-separator"], ["role", "treeitem", 3, "ngClass", "ngStyle", "pTooltip", "tooltipOptions"], [1, "p-menuitem-content", 3, "click"], [4, "ngIf"], [1, "p-toggleable-content"], [3, "id", "panelId", "items", "itemTemplate", "transitionOptions", "focusedItemId", "activeItemPath", "level", "parentExpanded", "itemToggle", 4, "ngIf"], ["class", "p-menuitem-link", 3, "ngClass", "target", 4, "ngIf"], ["class", "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], [1, "p-menuitem-link", 3, "ngClass", "target"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass", "ngStyle", 4, "ngIf"], [3, "styleClass", "ngStyle"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["htmlRouteLabel", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "id", "panelId", "items", "itemTemplate", "transitionOptions", "focusedItemId", "activeItemPath", "level", "parentExpanded", "itemToggle"]],
      template: function PanelMenuSub_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function PanelMenuSub_Template_ul_focusin_0_listener($event) {
            return ctx.menuFocus.emit($event);
          })("focusout", function PanelMenuSub_Template_ul_focusout_0_listener($event) {
            return ctx.menuBlur.emit($event);
          })("keydown", function PanelMenuSub_Template_ul_keydown_0_listener($event) {
            return ctx.menuKeyDown.emit($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelMenuSub_ng_template_2_Template, 2, 2, "ng-template", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c4, ctx.root))("tabindex", -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-activedescendant", ctx.focusedItemId)("data-pc-section", "menu")("aria-hidden", !ctx.parentExpanded);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.Tooltip, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_5__.AngleDownIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_6__.AngleRightIcon, PanelMenuSub],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('submenu', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '0'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '*'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('visible <=> hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{transitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(0))])]
      }
    });
  }
  return PanelMenuSub;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let PanelMenuList = /*#__PURE__*/(() => {
  class PanelMenuList {
    el;
    panelId;
    id;
    items;
    itemTemplate;
    parentExpanded;
    expanded;
    transitionOptions;
    root;
    tabindex;
    activeItem;
    itemToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    headerFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    subMenuViewChild;
    searchTimeout;
    searchValue;
    focused;
    focusedItem = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    activeItemPath = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
    processedItems = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
    visibleItems = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      const processedItems = this.processedItems();
      return this.flatItems(processedItems);
    });
    get focusedItemId() {
      const focusedItem = this.focusedItem();
      return focusedItem && focusedItem.item?.id ? focusedItem.item.id : primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem()) ? `${this.panelId}_${this.focusedItem().key}` : undefined;
    }
    constructor(el) {
      this.el = el;
    }
    ngOnChanges(changes) {
      if (changes && changes.items && changes.items.currentValue) {
        this.processedItems.set(this.createProcessedItems(changes.items.currentValue || []));
      }
    }
    getItemProp(processedItem, name) {
      return processedItem && processedItem.item ? primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getItemValue(processedItem.item[name]) : undefined;
    }
    getItemLabel(processedItem) {
      return this.getItemProp(processedItem, 'label');
    }
    isItemVisible(processedItem) {
      return this.getItemProp(processedItem, 'visible') !== false;
    }
    isItemDisabled(processedItem) {
      return this.getItemProp(processedItem, 'disabled');
    }
    isItemActive(processedItem) {
      return this.activeItemPath().some(path => path.key === processedItem.parentKey);
    }
    isItemGroup(processedItem) {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(processedItem.items);
    }
    isElementInPanel(event, element) {
      const panel = event.currentTarget.closest('[data-pc-section="panel"]');
      return panel && panel.contains(element);
    }
    isItemMatched(processedItem) {
      return this.isValidItem(processedItem) && this.getItemLabel(processedItem).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase());
    }
    isVisibleItem(processedItem) {
      return !!processedItem && (processedItem.level === 0 || this.isItemActive(processedItem)) && this.isItemVisible(processedItem);
    }
    isValidItem(processedItem) {
      return !!processedItem && !this.isItemDisabled(processedItem) && !processedItem.separator;
    }
    findFirstItem() {
      return this.visibleItems().find(processedItem => this.isValidItem(processedItem));
    }
    findLastItem() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findLast(this.visibleItems(), processedItem => this.isValidItem(processedItem));
    }
    createProcessedItems(items, level = 0, parent = {}, parentKey = '') {
      const processedItems = [];
      items && items.forEach((item, index) => {
        const key = (parentKey !== '' ? parentKey + '_' : '') + index;
        const newItem = {
          icon: item.icon,
          expanded: item.expanded,
          separator: item.separator,
          item,
          index,
          level,
          key,
          parent,
          parentKey
        };
        newItem['items'] = this.createProcessedItems(item.items, level + 1, newItem, key);
        processedItems.push(newItem);
      });
      return processedItems;
    }
    findProcessedItemByItemKey(key, processedItems, level = 0) {
      processedItems = processedItems || this.processedItems();
      if (processedItems && processedItems.length) {
        for (let i = 0; i < processedItems.length; i++) {
          const processedItem = processedItems[i];
          if (this.getItemProp(processedItem, 'key') === key) return processedItem;
          const matchedItem = this.findProcessedItemByItemKey(key, processedItem.items, level + 1);
          if (matchedItem) return matchedItem;
        }
      }
    }
    flatItems(processedItems, processedFlattenItems = []) {
      processedItems && processedItems.forEach(processedItem => {
        if (this.isVisibleItem(processedItem)) {
          processedFlattenItems.push(processedItem);
          this.flatItems(processedItem.items, processedFlattenItems);
        }
      });
      return processedFlattenItems;
    }
    changeFocusedItem(event) {
      const {
        originalEvent,
        processedItem,
        focusOnNext,
        selfCheck,
        allowHeaderFocus = true
      } = event;
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem()) && this.focusedItem().key !== processedItem.key) {
        this.focusedItem.set(processedItem);
        this.scrollInView();
      } else if (allowHeaderFocus) {
        this.headerFocus.emit({
          originalEvent,
          focusOnNext,
          selfCheck
        });
      }
    }
    scrollInView() {
      const element = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(this.subMenuViewChild.listViewChild.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: 'nearest',
          inline: 'nearest'
        });
      }
    }
    onFocus(event) {
      if (!this.focused) {
        this.focused = true;
        const focusedItem = this.focusedItem() || (this.isElementInPanel(event, event.relatedTarget) ? this.findFirstItem() : this.findLastItem());
        if (event.relatedTarget !== null) this.focusedItem.set(focusedItem);
      }
    }
    onBlur(event) {
      const target = event.relatedTarget;
      if (this.focused && !this.el.nativeElement.contains(target)) {
        this.focused = false;
        this.focusedItem.set(null);
        this.searchValue = '';
      }
    }
    onItemToggle(event) {
      const {
        processedItem,
        expanded
      } = event;
      processedItem.expanded = !processedItem.expanded;
      const activeItemPath = this.activeItemPath().filter(p => p.parentKey !== processedItem.parentKey);
      expanded && activeItemPath.push(processedItem);
      this.activeItemPath.set(activeItemPath);
      this.processedItems.update(value => value.map(i => i === processedItem ? processedItem : i));
      this.focusedItem.set(processedItem);
    }
    onKeyDown(event) {
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
        case 'Tab':
        case 'PageDown':
        case 'PageUp':
        case 'Backspace':
        case 'ShiftLeft':
        case 'ShiftRight':
          //NOOP
          break;
        default:
          if (!metaKey && primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isPrintableCharacter(event.key)) {
            this.searchItems(event, event.key);
          }
          break;
      }
    }
    onArrowDownKey(event) {
      const processedItem = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem()) ? this.findNextItem(this.focusedItem()) : this.findFirstItem();
      this.changeFocusedItem({
        originalEvent: event,
        processedItem,
        focusOnNext: true
      });
      event.preventDefault();
    }
    onArrowUpKey(event) {
      const processedItem = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem()) ? this.findPrevItem(this.focusedItem()) : this.findLastItem();
      this.changeFocusedItem({
        originalEvent: event,
        processedItem,
        selfCheck: true
      });
      event.preventDefault();
    }
    onArrowLeftKey(event) {
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem())) {
        const matched = this.activeItemPath().some(p => p.key === this.focusedItem().key);
        if (matched) {
          const activeItemPath = this.activeItemPath().filter(p => p.key !== this.focusedItem().key);
          this.activeItemPath.set(activeItemPath);
        } else {
          const focusedItem = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem().parent) ? this.focusedItem().parent : this.focusedItem();
          this.focusedItem.set(focusedItem);
        }
        event.preventDefault();
      }
    }
    onArrowRightKey(event) {
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem())) {
        const grouped = this.isItemGroup(this.focusedItem());
        if (grouped) {
          const matched = this.activeItemPath().some(p => p.key === this.focusedItem().key);
          if (matched) {
            this.onArrowDownKey(event);
          } else {
            const activeItemPath = this.activeItemPath().filter(p => p.parentKey !== this.focusedItem().parentKey);
            activeItemPath.push(this.focusedItem());
            this.activeItemPath.set(activeItemPath);
          }
        }
        event.preventDefault();
      }
    }
    onHomeKey(event) {
      this.changeFocusedItem({
        originalEvent: event,
        processedItem: this.findFirstItem(),
        allowHeaderFocus: false
      });
      event.preventDefault();
    }
    onEndKey(event) {
      this.changeFocusedItem({
        originalEvent: event,
        processedItem: this.findLastItem(),
        focusOnNext: true,
        allowHeaderFocus: false
      });
      event.preventDefault();
    }
    onEnterKey(event) {
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem())) {
        const element = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(this.subMenuViewChild.listViewChild.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
        const anchorElement = element && (primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(element, '[data-pc-section="action"]') || primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(element, 'a,button'));
        anchorElement ? anchorElement.click() : element && element.click();
      }
      event.preventDefault();
    }
    onSpaceKey(event) {
      this.onEnterKey(event);
    }
    findNextItem(processedItem) {
      const index = this.visibleItems().findIndex(item => item.key === processedItem.key);
      const matchedItem = index < this.visibleItems().length - 1 ? this.visibleItems().slice(index + 1).find(pItem => this.isValidItem(pItem)) : undefined;
      return matchedItem || processedItem;
    }
    findPrevItem(processedItem) {
      const index = this.visibleItems().findIndex(item => item.key === processedItem.key);
      const matchedItem = index > 0 ? primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findLast(this.visibleItems().slice(0, index), pItem => this.isValidItem(pItem)) : undefined;
      return matchedItem || processedItem;
    }
    searchItems(event, char) {
      this.searchValue = (this.searchValue || '') + char;
      let matchedItem = null;
      let matched = false;
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.focusedItem())) {
        const focusedItemIndex = this.visibleItems().findIndex(processedItem => processedItem.key === this.focusedItem().key);
        matchedItem = this.visibleItems().slice(focusedItemIndex).find(processedItem => this.isItemMatched(processedItem));
        matchedItem = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isEmpty(matchedItem) ? this.visibleItems().slice(0, focusedItemIndex).find(processedItem => this.isItemMatched(processedItem)) : matchedItem;
      } else {
        matchedItem = this.visibleItems().find(processedItem => this.isItemMatched(processedItem));
      }
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(matchedItem)) {
        matched = true;
      }
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isEmpty(matchedItem) && primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isEmpty(this.focusedItem())) {
        matchedItem = this.findFirstItem();
      }
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(matchedItem)) {
        this.changeFocusedItem({
          originalEvent: event,
          processedItem: matchedItem,
          allowHeaderFocus: false
        });
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
    static ɵfac = function PanelMenuList_Factory(t) {
      return new (t || PanelMenuList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PanelMenuList,
      selectors: [["p-panelMenuList"]],
      viewQuery: function PanelMenuList_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.subMenuViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        panelId: "panelId",
        id: "id",
        items: "items",
        itemTemplate: "itemTemplate",
        parentExpanded: "parentExpanded",
        expanded: "expanded",
        transitionOptions: "transitionOptions",
        root: "root",
        tabindex: "tabindex",
        activeItem: "activeItem"
      },
      outputs: {
        itemToggle: "itemToggle",
        headerFocus: "headerFocus"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 10,
      consts: [[3, "root", "id", "panelId", "tabindex", "itemTemplate", "focusedItemId", "activeItemPath", "transitionOptions", "items", "parentExpanded", "itemToggle", "keydown", "menuFocus", "menuBlur"], ["submenu", ""]],
      template: function PanelMenuList_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-panelMenuSub", 0, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemToggle", function PanelMenuList_Template_p_panelMenuSub_itemToggle_0_listener($event) {
            return ctx.onItemToggle($event);
          })("keydown", function PanelMenuList_Template_p_panelMenuSub_keydown_0_listener($event) {
            return ctx.onKeyDown($event);
          })("menuFocus", function PanelMenuList_Template_p_panelMenuSub_menuFocus_0_listener($event) {
            return ctx.onFocus($event);
          })("menuBlur", function PanelMenuList_Template_p_panelMenuSub_menuBlur_0_listener($event) {
            return ctx.onBlur($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("root", true)("id", ctx.panelId + "_list")("panelId", ctx.panelId)("tabindex", ctx.tabindex)("itemTemplate", ctx.itemTemplate)("focusedItemId", ctx.focused ? ctx.focusedItemId : undefined)("activeItemPath", ctx.activeItemPath())("transitionOptions", ctx.transitionOptions)("items", ctx.processedItems())("parentExpanded", ctx.parentExpanded);
        }
      },
      dependencies: [PanelMenuSub],
      styles: ["@layer primeng{.p-panelmenu .p-panelmenu-header-action{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;position:relative;text-decoration:none}.p-panelmenu .p-panelmenu-header-action:focus{z-index:1}.p-panelmenu .p-submenu-list{margin:0;padding:0;list-style:none}.p-panelmenu .p-menuitem-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;text-decoration:none;position:relative;overflow:hidden;outline:none}.p-panelmenu .p-menuitem-text{line-height:1}.p-panelmenu-expanded.p-toggleable-content:not(.ng-animating),.p-panelmenu .p-submenu-expanded:not(.ng-animating){overflow:visible}.p-panelmenu .p-toggleable-content,.p-panelmenu .p-submenu-list{overflow:hidden}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return PanelMenuList;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * PanelMenu is a hybrid of Accordion and Tree components.
 * @group Components
 */
let PanelMenu = /*#__PURE__*/(() => {
  class PanelMenu {
    cd;
    /**
     * An array of menuitems.
     * @group Props
     */
    model;
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
     * Whether multiple tabs can be activated at the same time or not.
     * @group Props
     */
    multiple = false;
    /**
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
    /**
     * Current id state as a string.
     * @group Props
     */
    id;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex = 0;
    templates;
    containerViewChild;
    submenuIconTemplate;
    itemTemplate;
    animating;
    activeItem = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    ngOnInit() {
      this.id = this.id || (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)();
    }
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'submenuicon':
            this.submenuIconTemplate = item.template;
            break;
          case 'item':
            this.itemTemplate = item.template;
            break;
          default:
            this.itemTemplate = item.template;
            break;
        }
      });
    }
    constructor(cd) {
      this.cd = cd;
    }
    /**
     * Collapses open panels.
     * @group Method
     */
    collapseAll() {
      for (let item of this.model) {
        if (item.expanded) {
          item.expanded = false;
        }
      }
      this.cd.detectChanges();
    }
    onToggleDone() {
      this.animating = false;
    }
    changeActiveItem(event, item, index, selfActive = false) {
      if (!this.isItemDisabled(item)) {
        const activeItem = selfActive ? item : this.activeItem && primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.equals(item, this.activeItem) ? null : item;
        this.activeItem.set(activeItem);
      }
    }
    getAnimation(item) {
      return item.expanded ? {
        value: 'visible',
        params: {
          transitionParams: this.animating ? this.transitionOptions : '0ms',
          height: '*'
        }
      } : {
        value: 'hidden',
        params: {
          transitionParams: this.transitionOptions,
          height: '0'
        }
      };
    }
    getItemProp(item, name) {
      return item ? primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getItemValue(item[name]) : undefined;
    }
    getItemLabel(item) {
      return this.getItemProp(item, 'label');
    }
    isItemActive(item) {
      return item.expanded;
    }
    isItemVisible(item) {
      return this.getItemProp(item, 'visible') !== false;
    }
    isItemDisabled(item) {
      return this.getItemProp(item, 'disabled');
    }
    isItemGroup(item) {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(item.items);
    }
    getPanelId(index, item) {
      return item && item.id ? item.id : `${this.id}_${index}`;
    }
    getHeaderId(item, index) {
      return item.id ? item.id + '_header' : `${this.getPanelId(index)}_header`;
    }
    getContentId(item, index) {
      return item.id ? item.id + '_content' : `${this.getPanelId(index)}_content`;
    }
    updateFocusedHeader(event) {
      const {
        originalEvent,
        focusOnNext,
        selfCheck
      } = event;
      const panelElement = originalEvent.currentTarget.closest('[data-pc-section="panel"]');
      const header = selfCheck ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(panelElement, '[data-pc-section="header"]') : focusOnNext ? this.findNextHeader(panelElement) : this.findPrevHeader(panelElement);
      header ? this.changeFocusedHeader(originalEvent, header) : focusOnNext ? this.onHeaderHomeKey(originalEvent) : this.onHeaderEndKey(originalEvent);
    }
    changeFocusedHeader(event, element) {
      element && primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(element);
    }
    findNextHeader(panelElement, selfCheck = false) {
      const nextPanelElement = selfCheck ? panelElement : panelElement.nextElementSibling;
      const headerElement = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(nextPanelElement, '[data-pc-section="header"]');
      return headerElement ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.getAttribute(headerElement, 'data-p-disabled') ? this.findNextHeader(headerElement.parentElement) : headerElement : null;
    }
    findPrevHeader(panelElement, selfCheck = false) {
      const prevPanelElement = selfCheck ? panelElement : panelElement.previousElementSibling;
      const headerElement = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(prevPanelElement, '[data-pc-section="header"]');
      return headerElement ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.getAttribute(headerElement, 'data-p-disabled') ? this.findPrevHeader(headerElement.parentElement) : headerElement : null;
    }
    findFirstHeader() {
      return this.findNextHeader(this.containerViewChild.nativeElement.firstElementChild, true);
    }
    findLastHeader() {
      return this.findPrevHeader(this.containerViewChild.nativeElement.lastElementChild, true);
    }
    onHeaderClick(event, item, index) {
      if (this.isItemDisabled(item)) {
        event.preventDefault();
        return;
      }
      if (item.command) {
        item.command({
          originalEvent: event,
          item
        });
      }
      if (!this.multiple) {
        for (let modelItem of this.model) {
          if (item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false;
          }
        }
      }
      item.expanded = !item.expanded;
      this.changeActiveItem(event, item, index);
      this.animating = true;
      primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(event.currentTarget);
    }
    onHeaderKeyDown(event, item, index) {
      switch (event.code) {
        case 'ArrowDown':
          this.onHeaderArrowDownKey(event);
          break;
        case 'ArrowUp':
          this.onHeaderArrowUpKey(event);
          break;
        case 'Home':
          this.onHeaderHomeKey(event);
          break;
        case 'End':
          this.onHeaderEndKey(event);
          break;
        case 'Enter':
        case 'Space':
          this.onHeaderEnterKey(event, item, index);
          break;
        default:
          break;
      }
    }
    onHeaderArrowDownKey(event) {
      const rootList = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.getAttribute(event.currentTarget, 'data-p-highlight') === true ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(event.currentTarget.nextElementSibling, '[data-pc-section="menu"]') : null;
      rootList ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(rootList) : this.updateFocusedHeader({
        originalEvent: event,
        focusOnNext: true
      });
      event.preventDefault();
    }
    onHeaderArrowUpKey(event) {
      const prevHeader = this.findPrevHeader(event.currentTarget.parentElement) || this.findLastHeader();
      const rootList = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.getAttribute(prevHeader, 'data-p-highlight') === true ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(prevHeader.nextElementSibling, '[data-pc-section="menu"]') : null;
      rootList ? primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(rootList) : this.updateFocusedHeader({
        originalEvent: event,
        focusOnNext: false
      });
      event.preventDefault();
    }
    onHeaderHomeKey(event) {
      this.changeFocusedHeader(event, this.findFirstHeader());
      event.preventDefault();
    }
    onHeaderEndKey(event) {
      this.changeFocusedHeader(event, this.findLastHeader());
      event.preventDefault();
    }
    onHeaderEnterKey(event, item, index) {
      const headerAction = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(event.currentTarget, '[data-pc-section="headeraction"]');
      headerAction ? headerAction.click() : this.onHeaderClick(event, item, index);
      event.preventDefault();
    }
    static ɵfac = function PanelMenu_Factory(t) {
      return new (t || PanelMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PanelMenu,
      selectors: [["p-panelMenu"]],
      contentQueries: function PanelMenu_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function PanelMenu_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        model: "model",
        style: "style",
        styleClass: "styleClass",
        multiple: "multiple",
        transitionOptions: "transitionOptions",
        id: "id",
        tabindex: "tabindex"
      },
      decls: 3,
      vars: 5,
      consts: [[3, "ngStyle", "ngClass"], ["container", ""], [4, "ngFor", "ngForOf"], ["class", "p-panelmenu-panel", 3, "ngClass", "ngStyle", 4, "ngIf"], [1, "p-panelmenu-panel", 3, "ngClass", "ngStyle"], ["role", "button", 3, "ngClass", "ngStyle", "pTooltip", "tabindex", "tooltipOptions", "click", "keydown"], [1, "p-panelmenu-header-content"], ["class", "p-panelmenu-header-action", 3, "target", 4, "ngIf"], ["class", "p-panelmenu-header-action", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["class", "p-toggleable-content", "role", "region", 3, "ngClass", 4, "ngIf"], [1, "p-panelmenu-header-action", 3, "target"], [4, "ngIf"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [1, "p-panelmenu-header-action", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["htmlRouteLabel", ""], ["role", "region", 1, "p-toggleable-content", 3, "ngClass"], [1, "p-panelmenu-content"], [3, "panelId", "items", "itemTemplate", "transitionOptions", "root", "activeItem", "tabindex", "parentExpanded", "headerFocus"]],
      template: function PanelMenu_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelMenu_ng_container_2_Template, 2, 1, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", "p-panelmenu p-component");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.model);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.Tooltip, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_10__.ChevronDownIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_11__.ChevronRightIcon, PanelMenuList],
      styles: [_c9],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('rootItem', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '0'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
          height: '*'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('visible <=> hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('{{transitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(0))])]
      },
      changeDetection: 0
    });
  }
  return PanelMenu;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let PanelMenuModule = /*#__PURE__*/(() => {
  class PanelMenuModule {
    static ɵfac = function PanelMenuModule_Factory(t) {
      return new (t || PanelMenuModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PanelMenuModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_9__.SharedModule, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_5__.AngleDownIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_6__.AngleRightIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_10__.ChevronDownIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_11__.ChevronRightIcon, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_9__.SharedModule]
    });
  }
  return PanelMenuModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-panelmenu.mjs.map

/***/ })

}]);