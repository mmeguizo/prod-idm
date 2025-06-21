"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[1122],{

/***/ 61122:
/*!********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-menu.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Menu: () => (/* binding */ Menu),
/* harmony export */   MenuItemContent: () => (/* binding */ MenuItemContent),
/* harmony export */   MenuModule: () => (/* binding */ MenuModule),
/* harmony export */   SafeHtmlPipe: () => (/* binding */ SafeHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ 86825);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dom */ 82076);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 44480);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tooltip */ 33259);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/utils */ 2332);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 6593);
















const _c0 = ["pMenuItemContent", ""];
function MenuItemContent_ng_container_1_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c1 = a0 => ({
  "p-disabled": a0
});
const _c2 = a0 => ({
  $implicit: a0
});
function MenuItemContent_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuItemContent_ng_container_1_a_1_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", ctx_r4.item.target)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx_r4.item.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx_r4.item.title)("href", ctx_r4.item.url || null, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("data-automationid", ctx_r4.item.automationId)("tabindex", -1)("data-pc-section", "action")("aria-hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, ctx_r4.item));
  }
}
function MenuItemContent_ng_container_1_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c3 = () => ({
  exact: false
});
function MenuItemContent_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuItemContent_ng_container_1_a_2_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r5.item.routerLink)("queryParams", ctx_r5.item.queryParams)("routerLinkActiveOptions", ctx_r5.item.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c3))("target", ctx_r5.item.target)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c1, ctx_r5.item.disabled))("fragment", ctx_r5.item.fragment)("queryParamsHandling", ctx_r5.item.queryParamsHandling)("preserveFragment", ctx_r5.item.preserveFragment)("skipLocationChange", ctx_r5.item.skipLocationChange)("replaceUrl", ctx_r5.item.replaceUrl)("state", ctx_r5.item.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-automationid", ctx_r5.item.automationId)("tabindex", -1)("data-pc-section", "action")("aria-hidden", true)("title", ctx_r5.item.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c2, ctx_r5.item));
  }
}
function MenuItemContent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuItemContent_ng_container_1_a_1_Template, 2, 14, "a", 3)(2, MenuItemContent_ng_container_1_a_2_Template, 2, 23, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.item == null ? null : ctx_r0.item.routerLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item == null ? null : ctx_r0.item.routerLink);
  }
}
function MenuItemContent_ng_container_2_1_ng_template_0_Template(rf, ctx) {}
function MenuItemContent_ng_container_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MenuItemContent_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MenuItemContent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuItemContent_ng_container_2_1_Template, 1, 0, null, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx_r1.item));
  }
}
function MenuItemContent_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 12);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r10.item.iconClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r10.item.icon)("ngStyle", ctx_r10.item.iconStyle);
  }
}
function MenuItemContent_ng_template_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.item.label);
  }
}
function MenuItemContent_ng_template_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safeHtml");
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r12.item.label), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function MenuItemContent_ng_template_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r14.item.badgeStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.item.badge);
  }
}
function MenuItemContent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MenuItemContent_ng_template_3_span_0_Template, 1, 4, "span", 8)(1, MenuItemContent_ng_template_3_span_1_Template, 2, 1, "span", 9)(2, MenuItemContent_ng_template_3_ng_template_2_Template, 2, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(4, MenuItemContent_ng_template_3_span_4_Template, 2, 2, "span", 11);
  }
  if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.item.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.item.escape !== false)("ngIfElse", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.item.badge);
  }
}
const _c4 = ["list"];
const _c5 = ["container"];
function Menu_div_0_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Menu_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Menu_div_0_div_2_ng_container_1_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.startTemplate);
  }
}
const _c6 = a0 => ({
  "p-hidden": a0
});
function Menu_div_0_5_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 13);
  }
  if (rf & 2) {
    const submenu_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c6, submenu_r9.visible === false));
  }
}
function Menu_div_0_5_ng_template_0_li_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const submenu_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](submenu_r9.label);
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safeHtml");
  }
  if (rf & 2) {
    const submenu_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, submenu_r9.label), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
const _c7 = (a0, a1) => ({
  "p-hidden": a0,
  flex: a1
});
function Menu_div_0_5_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Menu_div_0_5_ng_template_0_li_1_span_1_Template, 2, 1, "span", 15)(2, Menu_div_0_5_ng_template_0_li_1_ng_template_2_Template, 2, 3, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const submenu_r9 = ctx_r20.$implicit;
    const i_r10 = ctx_r20.index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c7, submenu_r9.visible === false, submenu_r9.visible))("tooltipOptions", submenu_r9.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-automationid", submenu_r9.automationId)("id", ctx_r12.menuitemId(submenu_r9, ctx_r12.id, i_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", submenu_r9.escape !== false)("ngIfElse", _r17);
  }
}
function Menu_div_0_5_ng_template_0_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 13);
  }
  if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const submenu_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c6, item_r21.visible === false || submenu_r9.visible === false));
  }
}
const _c8 = (a0, a1, a2) => ({
  "p-hidden": a0,
  "p-focus": a1,
  "p-disabled": a2
});
function Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onMenuItemClick", function Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template_li_onMenuItemClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const item_r21 = ctx_r28.$implicit;
      const j_r22 = ctx_r28.index;
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r27.itemClick($event, ctx_r27.menuitemId(item_r21, ctx_r27.id, i_r10, j_r22)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const item_r21 = ctx_r31.$implicit;
    const j_r22 = ctx_r31.index;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const submenu_r9 = ctx_r32.$implicit;
    const i_r10 = ctx_r32.index;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r21.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pMenuItemContent", item_r21)("itemTemplate", ctx_r24.itemTemplate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](13, _c8, item_r21.visible === false || submenu_r9.visible === false, ctx_r24.focusedOptionId() && ctx_r24.menuitemId(item_r21, ctx_r24.id, i_r10, j_r22) === ctx_r24.focusedOptionId(), ctx_r24.disabled(item_r21.disabled)))("ngStyle", item_r21.style)("tooltipOptions", item_r21.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "menuitem")("aria-label", ctx_r24.label(item_r21.label))("data-p-focused", ctx_r24.isItemFocused(ctx_r24.menuitemId(item_r21, ctx_r24.id, i_r10, j_r22)))("data-p-disabled", ctx_r24.disabled(item_r21.disabled))("aria-disabled", ctx_r24.disabled(item_r21.disabled))("id", ctx_r24.menuitemId(item_r21, ctx_r24.id, i_r10, j_r22));
  }
}
function Menu_div_0_5_ng_template_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Menu_div_0_5_ng_template_0_ng_template_2_li_0_Template, 1, 3, "li", 11)(1, Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template, 1, 17, "li", 18);
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r21.separator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r21.separator);
  }
}
function Menu_div_0_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Menu_div_0_5_ng_template_0_li_0_Template, 1, 3, "li", 11)(1, Menu_div_0_5_ng_template_0_li_1_Template, 4, 9, "li", 12)(2, Menu_div_0_5_ng_template_0_ng_template_2_Template, 2, 2, "ng-template", 10);
  }
  if (rf & 2) {
    const submenu_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", submenu_r9.separator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !submenu_r9.separator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", submenu_r9.items);
  }
}
function Menu_div_0_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Menu_div_0_5_ng_template_0_Template, 3, 3, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.model);
  }
}
function Menu_div_0_6_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 13);
  }
  if (rf & 2) {
    const item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c6, item_r34.visible === false));
  }
}
function Menu_div_0_6_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onMenuItemClick", function Menu_div_0_6_ng_template_0_li_1_Template_li_onMenuItemClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const item_r34 = ctx_r40.$implicit;
      const i_r35 = ctx_r40.index;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r39.itemClick($event, ctx_r39.menuitemId(item_r34, ctx_r39.id, i_r35)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const item_r34 = ctx_r42.$implicit;
    const i_r35 = ctx_r42.index;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r34.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pMenuItemContent", item_r34)("itemTemplate", ctx_r37.itemTemplate)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](13, _c8, item_r34.visible === false, ctx_r37.focusedOptionId() && ctx_r37.menuitemId(item_r34, ctx_r37.id, i_r35, ctx_r37.j) === ctx_r37.focusedOptionId(), ctx_r37.disabled(item_r34.disabled)))("ngStyle", item_r34.style)("tooltipOptions", item_r34.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "menuitem")("aria-label", ctx_r37.label(item_r34.label))("data-p-focused", ctx_r37.isItemFocused(ctx_r37.menuitemId(item_r34, ctx_r37.id, i_r35)))("data-p-disabled", ctx_r37.disabled(item_r34.disabled))("aria-disabled", ctx_r37.disabled(item_r34.disabled))("id", ctx_r37.menuitemId(item_r34, ctx_r37.id, i_r35));
  }
}
function Menu_div_0_6_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Menu_div_0_6_ng_template_0_li_0_Template, 1, 3, "li", 11)(1, Menu_div_0_6_ng_template_0_li_1_Template, 1, 17, "li", 18);
  }
  if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r34.separator);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r34.separator);
  }
}
function Menu_div_0_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Menu_div_0_6_ng_template_0_Template, 2, 2, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.model);
  }
}
function Menu_div_0_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function Menu_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Menu_div_0_div_7_ng_container_1_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "end");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.endTemplate);
  }
}
const _c9 = a1 => ({
  "p-menu p-component": true,
  "p-menu-overlay": a1
});
const _c10 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
const _c11 = a1 => ({
  value: "visible",
  params: a1
});
function Menu_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Menu_div_0_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r44.onOverlayClick($event));
    })("@overlayAnimation.start", function Menu_div_0_Template_div_animation_overlayAnimation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r46.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function Menu_div_0_Template_div_animation_overlayAnimation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r47.onOverlayAnimationEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Menu_div_0_div_2_Template, 2, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function Menu_div_0_Template_ul_focus_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r48.onListFocus($event));
    })("blur", function Menu_div_0_Template_ul_blur_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r49.onListBlur($event));
    })("keydown", function Menu_div_0_Template_ul_keydown_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r50.onListKeyDown($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, Menu_div_0_5_Template, 1, 1, null, 6)(6, Menu_div_0_6_Template, 1, 1, null, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, Menu_div_0_div_7_Template, 2, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c9, ctx_r0.popup))("ngStyle", ctx_r0.style)("@overlayAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c10, ctx_r0.showTransitionOptions, ctx_r0.hideTransitionOptions)))("@.disabled", ctx_r0.popup !== true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "menu")("id", ctx_r0.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.startTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabindex", ctx_r0.tabindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r0.id + "_list")("data-pc-section", "menu")("aria-activedescendant", ctx_r0.activedescendant())("aria-label", ctx_r0.ariaLabel)("aria-labelledBy", ctx_r0.ariaLabelledBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.hasSubMenu());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.hasSubMenu());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.endTemplate);
  }
}
let SafeHtmlPipe = /*#__PURE__*/(() => {
  class SafeHtmlPipe {
    platformId;
    sanitizer;
    constructor(platformId, sanitizer) {
      this.platformId = platformId;
      this.sanitizer = sanitizer;
    }
    transform(value) {
      if (!value || !(0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        return value;
      }
      return this.sanitizer.bypassSecurityTrustHtml(value);
    }
    static ɵfac = function SafeHtmlPipe_Factory(t) {
      return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID, 16), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer, 16));
    };
    static ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safeHtml",
      type: SafeHtmlPipe,
      pure: true
    });
  }
  return SafeHtmlPipe;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MenuItemContent = /*#__PURE__*/(() => {
  class MenuItemContent {
    item;
    itemTemplate;
    onMenuItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    menu;
    constructor(menu) {
      this.menu = menu;
    }
    onItemClick(event, item) {
      this.onMenuItemClick.emit({
        originalEvent: event,
        item
      });
    }
    static ɵfac = function MenuItemContent_Factory(t) {
      return new (t || MenuItemContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => Menu)));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuItemContent,
      selectors: [["", "pMenuItemContent", ""]],
      hostAttrs: [1, "p-element"],
      inputs: {
        item: ["pMenuItemContent", "item"],
        itemTemplate: "itemTemplate"
      },
      outputs: {
        onMenuItemClick: "onMenuItemClick"
      },
      attrs: _c0,
      decls: 5,
      vars: 3,
      consts: [[1, "p-menuitem-content", 3, "click"], [4, "ngIf"], ["itemContent", ""], ["class", "p-menuitem-link", "pRipple", "", 3, "target", "ngClass", 4, "ngIf"], ["routerLinkActive", "p-menuitem-link-active", "class", "p-menuitem-link", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["pRipple", "", 1, "p-menuitem-link", 3, "target", "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["routerLinkActive", "p-menuitem-link-active", "pRipple", "", 1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["class", "p-menuitem-icon", 3, "ngClass", "class", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"]],
      template: function MenuItemContent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuItemContent_Template_div_click_0_listener($event) {
            return ctx.onItemClick($event, ctx.item);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuItemContent_ng_container_1_Template, 3, 2, "ng-container", 1)(2, MenuItemContent_ng_container_2_Template, 2, 4, "ng-container", 1)(3, MenuItemContent_ng_template_3_Template, 5, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "content");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.itemTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemTemplate);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, SafeHtmlPipe],
      encapsulation: 2
    });
  }
  return MenuItemContent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Menu is a navigation / command component that supports dynamic and static positioning.
 * @group Components
 */
let Menu = /*#__PURE__*/(() => {
  class Menu {
    document;
    platformId;
    el;
    renderer;
    cd;
    config;
    overlayService;
    /**
     * An array of menuitems.
     * @group Props
     */
    model;
    /**
     * Defines if menu would displayed as a popup.
     * @group Props
     */
    popup;
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
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
     * @group Props
     */
    appendTo;
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
     * Defines a string value that labels an interactive element.
     * @group Props
     */
    ariaLabel;
    /**
     * Identifier of the underlying input element.
     * @group Props
     */
    ariaLabelledBy;
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
    /**
     * Callback to invoke when overlay menu is shown.
     * @group Emits
     */
    onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when overlay menu is hidden.
     * @group Emits
     */
    onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the list loses focus.
     * @param {Event} event - blur event.
     * @group Emits
     */
    onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when the list receives focus.
     * @param {Event} event - focus event.
     * @group Emits
     */
    onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    listViewChild;
    containerViewChild;
    templates;
    startTemplate;
    endTemplate;
    itemTemplate;
    container;
    scrollHandler;
    documentClickListener;
    documentResizeListener;
    preventDocumentDefault;
    target;
    visible;
    focusedOptionId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      return this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : null;
    });
    focusedOptionIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(-1);
    selectedOptionIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(-1);
    focused = false;
    overlayVisible = false;
    relativeAlign;
    constructor(document, platformId, el, renderer, cd, config, overlayService) {
      this.document = document;
      this.platformId = platformId;
      this.el = el;
      this.renderer = renderer;
      this.cd = cd;
      this.config = config;
      this.overlayService = overlayService;
      this.id = this.id || (0,primeng_utils__WEBPACK_IMPORTED_MODULE_5__.UniqueComponentId)();
    }
    /**
     * Toggles the visibility of the popup menu.
     * @param {Event} event - Browser event.
     * @group Method
     */
    toggle(event) {
      if (this.visible) this.hide();else this.show(event);
      this.preventDocumentDefault = true;
    }
    /**
     * Displays the popup menu.
     * @param {Event} event - Browser event.
     * @group Method
     */
    show(event) {
      this.target = event.currentTarget;
      this.relativeAlign = event.relativeAlign;
      this.visible = true;
      this.preventDocumentDefault = true;
      this.overlayVisible = true;
      this.cd.markForCheck();
    }
    ngOnInit() {
      if (!this.popup) {
        this.bindDocumentClickListener();
      }
    }
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'start':
            this.startTemplate = item.template;
            break;
          case 'end':
            this.endTemplate = item.template;
            break;
          case 'itemTemplate':
            this.itemTemplate = item.template;
            break;
          default:
            this.itemTemplate = item.template;
            break;
        }
      });
    }
    onOverlayAnimationStart(event) {
      switch (event.toState) {
        case 'visible':
          if (this.popup) {
            this.container = event.element;
            this.moveOnTop();
            this.onShow.emit({});
            this.appendOverlay();
            this.alignOverlay();
            this.bindDocumentClickListener();
            this.bindDocumentResizeListener();
            this.bindScrollListener();
            primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.focus(this.listViewChild.nativeElement);
            this.changeFocusedOptionIndex(0);
          }
          break;
        case 'void':
          this.onOverlayHide();
          this.onHide.emit({});
          break;
      }
    }
    onOverlayAnimationEnd(event) {
      switch (event.toState) {
        case 'void':
          if (this.autoZIndex) {
            primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ZIndexUtils.clear(event.element);
          }
          break;
      }
    }
    alignOverlay() {
      if (this.relativeAlign) primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.relativePosition(this.container, this.target);else primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.absolutePosition(this.container, this.target);
    }
    appendOverlay() {
      if (this.appendTo) {
        if (this.appendTo === 'body') this.renderer.appendChild(this.document.body, this.container);else primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.appendChild(this.container, this.appendTo);
      }
    }
    restoreOverlayAppend() {
      if (this.container && this.appendTo) {
        this.renderer.appendChild(this.el.nativeElement, this.container);
      }
    }
    moveOnTop() {
      if (this.autoZIndex) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ZIndexUtils.set('menu', this.container, this.baseZIndex + this.config.zIndex.menu);
      }
    }
    /**
     * Hides the popup menu.
     * @group Method
     */
    hide() {
      this.visible = false;
      this.relativeAlign = false;
      this.cd.markForCheck();
    }
    onWindowResize() {
      if (this.visible && !primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.isTouchDevice()) {
        this.hide();
      }
    }
    menuitemId(item, id, index, childIndex) {
      return item?.id ?? `${id}_${index}${childIndex !== undefined ? '_' + childIndex : ''}`;
    }
    isItemFocused(id) {
      return this.focusedOptionId() === id;
    }
    label(label) {
      return typeof label === 'function' ? label() : label;
    }
    disabled(disabled) {
      return typeof disabled === 'function' ? disabled() : typeof disabled === 'undefined' ? false : disabled;
    }
    activedescendant() {
      return this.focused ? this.focusedOptionId() : undefined;
    }
    onListFocus(event) {
      this.focused = true;
      if (!this.popup) {
        if (this.selectedOptionIndex() !== -1) {
          this.changeFocusedOptionIndex(this.selectedOptionIndex());
          this.selectedOptionIndex.set(-1);
        } else {
          this.changeFocusedOptionIndex(0);
        }
      }
      this.onFocus.emit(event);
    }
    onListBlur(event) {
      this.focused = false;
      this.changeFocusedOptionIndex(-1);
      this.selectedOptionIndex.set(-1);
      this.focusedOptionIndex.set(-1);
      this.onBlur.emit(event);
    }
    onListKeyDown(event) {
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
        case 'Enter':
          this.onEnterKey(event);
          break;
        case 'Space':
          this.onSpaceKey(event);
          break;
        case 'Escape':
        case 'Tab':
          if (this.popup) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.focus(this.target);
            this.hide();
          }
          this.overlayVisible && this.hide();
          break;
        default:
          break;
      }
    }
    onArrowDownKey(event) {
      const optionIndex = this.findNextOptionIndex(this.focusedOptionIndex());
      this.changeFocusedOptionIndex(optionIndex);
      event.preventDefault();
    }
    onArrowUpKey(event) {
      if (event.altKey && this.popup) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.focus(this.target);
        this.hide();
        event.preventDefault();
      } else {
        const optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex());
        this.changeFocusedOptionIndex(optionIndex);
        event.preventDefault();
      }
    }
    onHomeKey(event) {
      this.changeFocusedOptionIndex(0);
      event.preventDefault();
    }
    onEndKey(event) {
      this.changeFocusedOptionIndex(primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.find(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]').length - 1);
      event.preventDefault();
    }
    onEnterKey(event) {
      const element = primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.findSingle(this.containerViewChild.nativeElement, `li[id="${`${this.focusedOptionIndex()}`}"]`);
      const anchorElement = element && primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.findSingle(element, 'a[data-pc-section="action"]');
      this.popup && primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.focus(this.target);
      anchorElement ? anchorElement.click() : element && element.click();
      event.preventDefault();
    }
    onSpaceKey(event) {
      this.onEnterKey(event);
    }
    findNextOptionIndex(index) {
      const links = primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.find(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
      const matchedOptionIndex = [...links].findIndex(link => link.id === index);
      return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
    }
    findPrevOptionIndex(index) {
      const links = primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.find(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
      const matchedOptionIndex = [...links].findIndex(link => link.id === index);
      return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
    }
    changeFocusedOptionIndex(index) {
      const links = primeng_dom__WEBPACK_IMPORTED_MODULE_6__.DomHandler.find(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
      if (links.length > 0) {
        let order = index >= links.length ? links.length - 1 : index < 0 ? 0 : index;
        order > -1 && this.focusedOptionIndex.set(links[order].getAttribute('id'));
      }
    }
    itemClick(event, id) {
      const {
        originalEvent,
        item
      } = event;
      if (item.disabled) {
        originalEvent.preventDefault();
        return;
      }
      if (!item.url && !item.routerLink) {
        originalEvent.preventDefault();
      }
      if (item.command) {
        item.command({
          originalEvent: originalEvent,
          item: item
        });
      }
      if (this.popup) {
        this.hide();
      }
      if (!this.popup && this.focusedOptionIndex() !== id) {
        this.focusedOptionIndex.set(id);
      }
    }
    onOverlayClick(event) {
      if (this.popup) {
        this.overlayService.add({
          originalEvent: event,
          target: this.el.nativeElement
        });
      }
      this.preventDocumentDefault = true;
    }
    bindDocumentClickListener() {
      if (!this.documentClickListener && (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
        this.documentClickListener = this.renderer.listen(documentTarget, 'click', event => {
          const isOutsideContainer = this.containerViewChild.nativeElement && !this.containerViewChild.nativeElement.contains(event.target);
          const isOutsideTarget = !(this.target && (this.target === event.target || this.target.contains(event.target)));
          if (!this.popup && isOutsideContainer && isOutsideTarget) {
            this.onListBlur(event);
          }
          if (this.preventDocumentDefault && this.overlayVisible && isOutsideContainer && isOutsideTarget) {
            this.hide();
            this.preventDocumentDefault = false;
          }
        });
      }
    }
    unbindDocumentClickListener() {
      if (this.documentClickListener) {
        this.documentClickListener();
        this.documentClickListener = null;
      }
    }
    bindDocumentResizeListener() {
      if (!this.documentResizeListener && (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        const window = this.document.defaultView;
        this.documentResizeListener = this.renderer.listen(window, 'resize', this.onWindowResize.bind(this));
      }
    }
    unbindDocumentResizeListener() {
      if (this.documentResizeListener) {
        this.documentResizeListener();
        this.documentResizeListener = null;
      }
    }
    bindScrollListener() {
      if (!this.scrollHandler && (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        this.scrollHandler = new primeng_dom__WEBPACK_IMPORTED_MODULE_6__.ConnectedOverlayScrollHandler(this.target, () => {
          if (this.visible) {
            this.hide();
          }
        });
      }
      this.scrollHandler?.bindScrollListener();
    }
    unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    }
    onOverlayHide() {
      this.unbindDocumentClickListener();
      this.unbindDocumentResizeListener();
      this.unbindScrollListener();
      this.preventDocumentDefault = false;
      if (!this.cd.destroyed) {
        this.target = null;
      }
    }
    ngOnDestroy() {
      if (this.popup) {
        if (this.scrollHandler) {
          this.scrollHandler.destroy();
          this.scrollHandler = null;
        }
        if (this.container && this.autoZIndex) {
          primeng_utils__WEBPACK_IMPORTED_MODULE_5__.ZIndexUtils.clear(this.container);
        }
        this.restoreOverlayAppend();
        this.onOverlayHide();
      }
      if (!this.popup) {
        this.unbindDocumentClickListener();
      }
    }
    hasSubMenu() {
      if (this.model) {
        for (var item of this.model) {
          if (item.items) {
            return true;
          }
        }
      }
      return false;
    }
    isItemHidden(item) {
      if (item.separator) {
        return item.visible === false || item.items && item.items.some(subitem => subitem.visible !== false);
      }
      return item.visible === false;
    }
    static ɵfac = function Menu_Factory(t) {
      return new (t || Menu)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.OverlayService));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Menu,
      selectors: [["p-menu"]],
      contentQueries: function Menu_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function Menu_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listViewChild = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        model: "model",
        popup: "popup",
        style: "style",
        styleClass: "styleClass",
        appendTo: "appendTo",
        autoZIndex: "autoZIndex",
        baseZIndex: "baseZIndex",
        showTransitionOptions: "showTransitionOptions",
        hideTransitionOptions: "hideTransitionOptions",
        ariaLabel: "ariaLabel",
        ariaLabelledBy: "ariaLabelledBy",
        id: "id",
        tabindex: "tabindex"
      },
      outputs: {
        onShow: "onShow",
        onHide: "onHide",
        onBlur: "onBlur",
        onFocus: "onFocus"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "ngClass", "class", "ngStyle", "click", 4, "ngIf"], [3, "ngClass", "ngStyle", "click"], ["container", ""], ["class", "p-menu-start", 4, "ngIf"], ["role", "menu", 1, "p-menu-list", "p-reset", 3, "tabindex", "focus", "blur", "keydown"], ["list", ""], [4, "ngIf"], ["class", "p-menu-end", 4, "ngIf"], [1, "p-menu-start"], [4, "ngTemplateOutlet"], ["ngFor", "", 3, "ngForOf"], ["class", "p-menuitem-separator", "role", "separator", 3, "ngClass", 4, "ngIf"], ["class", "p-submenu-header", "pTooltip", "", "role", "none", 3, "ngClass", "tooltipOptions", 4, "ngIf"], ["role", "separator", 1, "p-menuitem-separator", 3, "ngClass"], ["pTooltip", "", "role", "none", 1, "p-submenu-header", 3, "ngClass", "tooltipOptions"], [4, "ngIf", "ngIfElse"], ["htmlSubmenuLabel", ""], [3, "innerHTML"], ["class", "p-menuitem", "pTooltip", "", "role", "menuitem", 3, "pMenuItemContent", "itemTemplate", "ngClass", "ngStyle", "class", "tooltipOptions", "onMenuItemClick", 4, "ngIf"], ["pTooltip", "", "role", "menuitem", 1, "p-menuitem", 3, "pMenuItemContent", "itemTemplate", "ngClass", "ngStyle", "tooltipOptions", "onMenuItemClick"], [1, "p-menu-end"]],
      template: function Menu_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Menu_div_0_Template, 8, 25, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.popup || ctx.visible);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__.Tooltip, MenuItemContent, SafeHtmlPipe],
      styles: ["@layer primeng{.p-menu-overlay{position:absolute;top:0;left:0}.p-menu ul{margin:0;padding:0;list-style:none}.p-menu .p-submenu-header{align-items:center}.p-menu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-menu .p-menuitem-text{line-height:1}}\n"],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('overlayAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
          opacity: 0,
          transform: 'scaleY(0.8)'
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('{{showTransitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('{{hideTransitionParams}}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
          opacity: 0
        }))])])]
      },
      changeDetection: 0
    });
  }
  return Menu;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MenuModule = /*#__PURE__*/(() => {
  class MenuModule {
    static ɵfac = function MenuModule_Factory(t) {
      return new (t || MenuModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MenuModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.RippleModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__.TooltipModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__.TooltipModule]
    });
  }
  return MenuModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-menu.mjs.map

/***/ })

}]);