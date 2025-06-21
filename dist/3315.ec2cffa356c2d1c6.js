"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[3315],{

/***/ 65389:
/*!*************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-accordion.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Accordion: () => (/* binding */ Accordion),
/* harmony export */   AccordionModule: () => (/* binding */ AccordionModule),
/* harmony export */   AccordionTab: () => (/* binding */ AccordionTab)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 86825);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dom */ 82076);
/* harmony import */ var primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/chevrondown */ 76005);
/* harmony import */ var primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/icons/chevronright */ 44562);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 2332);











/**
 * AccordionTab is a helper component for Accordion.
 * @group Components
 */
function AccordionTab_ng_container_3_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 11);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r8.accordion.collapseIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r8.iconClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function AccordionTab_ng_container_3_ng_container_1_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronDownIcon", 11);
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r9.iconClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function AccordionTab_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccordionTab_ng_container_3_ng_container_1_span_1_Template, 1, 4, "span", 9)(2, AccordionTab_ng_container_3_ng_container_1_ChevronDownIcon_2_Template, 1, 2, "ChevronDownIcon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.accordion.collapseIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.accordion.collapseIcon);
  }
}
function AccordionTab_ng_container_3_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 11);
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r10.accordion.expandIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r10.iconClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function AccordionTab_ng_container_3_ng_container_2_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronRightIcon", 11);
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r11.iconClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function AccordionTab_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccordionTab_ng_container_3_ng_container_2_span_1_Template, 1, 4, "span", 9)(2, AccordionTab_ng_container_3_ng_container_2_ChevronRightIcon_2_Template, 1, 2, "ChevronRightIcon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.accordion.expandIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.accordion.expandIcon);
  }
}
function AccordionTab_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccordionTab_ng_container_3_ng_container_1_Template, 3, 2, "ng-container", 3)(2, AccordionTab_ng_container_3_ng_container_2_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.selected);
  }
}
function AccordionTab_4_ng_template_0_Template(rf, ctx) {}
function AccordionTab_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AccordionTab_4_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function AccordionTab_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.header, " ");
  }
}
function AccordionTab_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function AccordionTab_ng_content_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1, ["*ngIf", "hasHeaderFacet"]);
  }
}
function AccordionTab_ng_container_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function AccordionTab_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccordionTab_ng_container_11_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.contentTemplate);
  }
}
const _c0 = ["*", [["p-header"]]];
const _c1 = a0 => ({
  $implicit: a0
});
const _c2 = a0 => ({
  transitionParams: a0
});
const _c3 = a1 => ({
  value: "visible",
  params: a1
});
const _c4 = a1 => ({
  value: "hidden",
  params: a1
});
const _c5 = ["*", "p-header"];
const _c6 = ["*"];
let AccordionTab = /*#__PURE__*/(() => {
  class AccordionTab {
    el;
    changeDetector;
    /**
     * Current id state as a string.
     * @group Props
     */
    id;
    /**
     * Used to define the header of the tab.
     * @group Props
     */
    header;
    /**
     * Inline style of the tab header.
     * @group Props
     */
    headerStyle;
    /**
     * Inline style of the tab.
     * @group Props
     */
    tabStyle;
    /**
     * Inline style of the tab content.
     * @group Props
     */
    contentStyle;
    /**
     * Style class of the tab.
     * @group Props
     */
    tabStyleClass;
    /**
     * Style class of the tab header.
     * @group Props
     */
    headerStyleClass;
    /**
     * Style class of the tab content.
     * @group Props
     */
    contentStyleClass;
    /**
     * Whether the tab is disabled.
     * @group Props
     */
    disabled;
    /**
     * Whether a lazy loaded panel should avoid getting loaded again on reselection.
     * @group Props
     */
    cache = true;
    /**
     * Transition options of the animation.
     * @group Props
     */
    transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
    /**
     * Position of the icon.
     * @group Props
     */
    iconPos = 'start';
    /**
     * The value that returns the selection.
     * @group Props
     */
    get selected() {
      return this._selected;
    }
    set selected(val) {
      this._selected = val;
      if (!this.loaded) {
        if (this._selected && this.cache) {
          this.loaded = true;
        }
        this.changeDetector.detectChanges();
      }
    }
    /**
     * The aria-level that each accordion header will have. The default value is 2 as per W3C specifications
     * @group Props
     */
    headerAriaLevel = 2;
    /**
     * Event triggered by changing the choice.
     * @param {boolean} value - Boolean value indicates that the option is changed.
     * @group Emits
     */
    selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    headerFacet;
    templates;
    _selected = false;
    get iconClass() {
      if (this.iconPos === 'end') {
        return 'p-accordion-toggle-icon-end';
      } else {
        return 'p-accordion-toggle-icon';
      }
    }
    contentTemplate;
    headerTemplate;
    iconTemplate;
    loaded = false;
    accordion;
    constructor(accordion, el, changeDetector) {
      this.el = el;
      this.changeDetector = changeDetector;
      this.accordion = accordion;
      this.id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)();
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'content':
            this.contentTemplate = item.template;
            break;
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'icon':
            this.iconTemplate = item.template;
            break;
          default:
            this.contentTemplate = item.template;
            break;
        }
      });
    }
    toggle(event) {
      if (this.disabled) {
        return false;
      }
      let index = this.findTabIndex();
      if (this.selected) {
        this.selected = false;
        this.accordion.onClose.emit({
          originalEvent: event,
          index: index
        });
      } else {
        if (!this.accordion.multiple) {
          for (var i = 0; i < this.accordion.tabs.length; i++) {
            if (this.accordion.tabs[i].selected) {
              this.accordion.tabs[i].selected = false;
              this.accordion.tabs[i].selectedChange.emit(false);
              this.accordion.tabs[i].changeDetector.markForCheck();
            }
          }
        }
        this.selected = true;
        this.loaded = true;
        this.accordion.onOpen.emit({
          originalEvent: event,
          index: index
        });
      }
      this.selectedChange.emit(this.selected);
      this.accordion.updateActiveIndex();
      this.changeDetector.markForCheck();
      event?.preventDefault();
    }
    findTabIndex() {
      let index = -1;
      for (var i = 0; i < this.accordion.tabs.length; i++) {
        if (this.accordion.tabs[i] == this) {
          index = i;
          break;
        }
      }
      return index;
    }
    get hasHeaderFacet() {
      return this.headerFacet && this.headerFacet.length > 0;
    }
    onKeydown(event) {
      switch (event.code) {
        case 'Enter':
        case 'Space':
          this.toggle(event);
          event.preventDefault(); // ???
          break;
        default:
          break;
      }
    }
    getTabHeaderActionId(tabId) {
      return `${tabId}_header_action`;
    }
    getTabContentId(tabId) {
      return `${tabId}_content`;
    }
    ngOnDestroy() {
      this.accordion.tabs.splice(this.findTabIndex(), 1);
    }
    static ɵfac = function AccordionTab_Factory(t) {
      return new (t || AccordionTab)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => Accordion)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccordionTab,
      selectors: [["p-accordionTab"]],
      contentQueries: function AccordionTab_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.Header, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        id: "id",
        header: "header",
        headerStyle: "headerStyle",
        tabStyle: "tabStyle",
        contentStyle: "contentStyle",
        tabStyleClass: "tabStyleClass",
        headerStyleClass: "headerStyleClass",
        contentStyleClass: "contentStyleClass",
        disabled: "disabled",
        cache: "cache",
        transitionOptions: "transitionOptions",
        iconPos: "iconPos",
        selected: "selected",
        headerAriaLevel: "headerAriaLevel"
      },
      outputs: {
        selectedChange: "selectedChange"
      },
      ngContentSelectors: _c5,
      decls: 12,
      vars: 45,
      consts: [[1, "p-accordion-tab", 3, "ngClass", "ngStyle"], ["role", "heading", 1, "p-accordion-header"], ["role", "button", 1, "p-accordion-header-link", 3, "ngClass", "click", "keydown"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-accordion-header-text", 4, "ngIf"], [4, "ngTemplateOutlet"], ["role", "region", 1, "p-toggleable-content"], [1, "p-accordion-content", 3, "ngClass", "ngStyle"], [3, "class", "ngClass", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [1, "p-accordion-header-text"]],
      template: function AccordionTab_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionTab_Template_a_click_2_listener($event) {
            return ctx.toggle($event);
          })("keydown", function AccordionTab_Template_a_keydown_2_listener($event) {
            return ctx.onKeydown($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AccordionTab_ng_container_3_Template, 3, 2, "ng-container", 3)(4, AccordionTab_4_Template, 1, 0, null, 4)(5, AccordionTab_span_5_Template, 2, 1, "span", 5)(6, AccordionTab_ng_container_6_Template, 1, 0, "ng-container", 6)(7, AccordionTab_ng_content_7_Template, 1, 0, "ng-content", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AccordionTab_ng_container_11_Template, 2, 1, "ng-container", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-accordion-tab-active", ctx.selected);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.tabStyleClass)("ngStyle", ctx.tabStyle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "accordiontab");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("p-highlight", ctx.selected)("p-disabled", ctx.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-level", ctx.headerAriaLevel)("data-p-disabled", ctx.disabled)("data-pc-section", "header");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.headerStyle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.headerStyleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.disabled ? null : 0)("id", ctx.getTabHeaderActionId(ctx.id))("aria-controls", ctx.getTabContentId(ctx.id))("aria-expanded", ctx.selected)("aria-disabled", ctx.disabled)("data-pc-section", "headeraction");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.iconTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.iconTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c1, ctx.selected));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hasHeaderFacet);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.headerTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasHeaderFacet);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@tabContent", ctx.selected ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c2, ctx.transitionOptions)) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c2, ctx.transitionOptions)));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.getTabContentId(ctx.id))("aria-hidden", !ctx.selected)("aria-labelledby", ctx.getTabHeaderActionId(ctx.id))("data-pc-section", "toggleablecontent");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.contentStyleClass)("ngStyle", ctx.contentStyle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contentTemplate && (ctx.cache ? ctx.loaded : ctx.selected));
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_4__.ChevronRightIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_5__.ChevronDownIcon],
      styles: ["@layer primeng{.p-accordion-header-link{cursor:pointer;display:flex;align-items:center;-webkit-user-select:none;user-select:none;position:relative;text-decoration:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}.p-accordion .p-toggleable-content{overflow:hidden}.p-accordion .p-accordion-tab-active>.p-toggleable-content:not(.ng-animating){overflow:inherit}.p-accordion-toggle-icon-end{order:1;margin-left:auto}.p-accordion-toggle-icon{order:0}}\n"],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('tabContent', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
          height: '0',
          visibility: 'hidden'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
          height: '*',
          visibility: 'visible'
        })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('visible <=> hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('{{transitionParams}}')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)(0))])]
      },
      changeDetection: 0
    });
  }
  return AccordionTab;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Accordion groups a collection of contents in tabs.
 * @group Components
 */
let Accordion = /*#__PURE__*/(() => {
  class Accordion {
    el;
    changeDetector;
    /**
     * When enabled, multiple tabs can be activated at the same time.
     * @group Props
     */
    multiple = false;
    /**
     * Inline style of the tab header and content.
     * @group Props
     */
    style;
    /**
     * Class of the element.
     * @group Props
     */
    styleClass;
    /**
     * Icon of a collapsed tab.
     * @group Props
     */
    expandIcon;
    /**
     * Icon of an expanded tab.
     * @group Props
     */
    collapseIcon;
    /**
     * Index of the active tab or an array of indexes in multiple mode.
     * @group Props
     */
    get activeIndex() {
      return this._activeIndex;
    }
    set activeIndex(val) {
      this._activeIndex = val;
      if (this.preventActiveIndexPropagation) {
        this.preventActiveIndexPropagation = false;
        return;
      }
      this.updateSelectionState();
    }
    /**
     * When enabled, the focused tab is activated.
     * @group Props
     */
    selectOnFocus = false;
    /**
     * The aria-level that each accordion header will have. The default value is 2 as per W3C specifications
     * @group Props
     */
    get headerAriaLevel() {
      return this._headerAriaLevel;
    }
    set headerAriaLevel(val) {
      if (typeof val === 'number' && val > 0) {
        this._headerAriaLevel = val;
      } else if (this._headerAriaLevel !== 2) {
        this._headerAriaLevel = 2;
      }
    }
    /**
     * Callback to invoke when an active tab is collapsed by clicking on the header.
     * @param {AccordionTabCloseEvent} event - Custom tab close event.
     * @group Emits
     */
    onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke when a tab gets expanded.
     * @param {AccordionTabOpenEvent} event - Custom tab open event.
     * @group Emits
     */
    onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Returns the active index.
     * @param {number | number[]} value - New index.
     * @group Emits
     */
    activeIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    tabList;
    tabListSubscription = null;
    _activeIndex;
    _headerAriaLevel = 2;
    preventActiveIndexPropagation = false;
    tabs = [];
    constructor(el, changeDetector) {
      this.el = el;
      this.changeDetector = changeDetector;
    }
    onKeydown(event) {
      switch (event.code) {
        case 'ArrowDown':
          this.onTabArrowDownKey(event);
          break;
        case 'ArrowUp':
          this.onTabArrowUpKey(event);
          break;
        case 'Home':
          if (!event.shiftKey) {
            this.onTabHomeKey(event);
          }
          break;
        case 'End':
          if (!event.shiftKey) {
            this.onTabEndKey(event);
          }
          break;
      }
    }
    onTabArrowDownKey(event) {
      const nextHeaderAction = this.findNextHeaderAction(event.target.parentElement.parentElement.parentElement);
      nextHeaderAction ? this.changeFocusedTab(nextHeaderAction) : this.onTabHomeKey(event);
      event.preventDefault();
    }
    onTabArrowUpKey(event) {
      const prevHeaderAction = this.findPrevHeaderAction(event.target.parentElement.parentElement.parentElement);
      prevHeaderAction ? this.changeFocusedTab(prevHeaderAction) : this.onTabEndKey(event);
      event.preventDefault();
    }
    onTabHomeKey(event) {
      const firstHeaderAction = this.findFirstHeaderAction();
      this.changeFocusedTab(firstHeaderAction);
      event.preventDefault();
    }
    changeFocusedTab(element) {
      if (element) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.focus(element);
        if (this.selectOnFocus) {
          this.tabs.forEach((tab, i) => {
            let selected = this.multiple ? this._activeIndex.includes(i) : i === this._activeIndex;
            if (this.multiple) {
              if (!this._activeIndex) {
                this._activeIndex = [];
              }
              if (tab.id == element.id) {
                tab.selected = !tab.selected;
                if (!this._activeIndex.includes(i)) {
                  this._activeIndex.push(i);
                } else {
                  this._activeIndex = this._activeIndex.filter(ind => ind !== i);
                }
              }
            } else {
              if (tab.id == element.id) {
                tab.selected = !tab.selected;
                this._activeIndex = i;
              } else {
                tab.selected = false;
              }
            }
            tab.selectedChange.emit(selected);
            this.activeIndexChange.emit(this._activeIndex);
            tab.changeDetector.markForCheck();
          });
        }
      }
    }
    findNextHeaderAction(tabElement, selfCheck = false) {
      const nextTabElement = selfCheck ? tabElement : tabElement.nextElementSibling;
      const headerElement = primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.findSingle(nextTabElement, '[data-pc-section="header"]');
      return headerElement ? primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.getAttribute(headerElement, 'data-p-disabled') ? this.findNextHeaderAction(headerElement.parentElement.parentElement) : primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.findSingle(headerElement, '[data-pc-section="headeraction"]') : null;
    }
    findPrevHeaderAction(tabElement, selfCheck = false) {
      const prevTabElement = selfCheck ? tabElement : tabElement.previousElementSibling;
      const headerElement = primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.findSingle(prevTabElement, '[data-pc-section="header"]');
      return headerElement ? primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.getAttribute(headerElement, 'data-p-disabled') ? this.findPrevHeaderAction(headerElement.parentElement.parentElement) : primeng_dom__WEBPACK_IMPORTED_MODULE_7__.DomHandler.findSingle(headerElement, '[data-pc-section="headeraction"]') : null;
    }
    findFirstHeaderAction() {
      const firstEl = this.el.nativeElement.firstElementChild.childNodes[0];
      return this.findNextHeaderAction(firstEl, true);
    }
    findLastHeaderAction() {
      const childNodes = this.el.nativeElement.firstElementChild.childNodes;
      const lastEl = childNodes[childNodes.length - 1];
      return this.findPrevHeaderAction(lastEl, true);
    }
    onTabEndKey(event) {
      const lastHeaderAction = this.findLastHeaderAction();
      this.changeFocusedTab(lastHeaderAction);
      event.preventDefault();
    }
    ngAfterContentInit() {
      this.initTabs();
      this.tabListSubscription = this.tabList.changes.subscribe(_ => {
        this.initTabs();
      });
    }
    initTabs() {
      this.tabs = this.tabList.toArray();
      this.tabs.forEach(tab => {
        tab.headerAriaLevel = this._headerAriaLevel;
      });
      this.updateSelectionState();
      this.changeDetector.markForCheck();
    }
    getBlockableElement() {
      return this.el.nativeElement.children[0];
    }
    updateSelectionState() {
      if (this.tabs && this.tabs.length && this._activeIndex != null) {
        for (let i = 0; i < this.tabs.length; i++) {
          let selected = this.multiple ? this._activeIndex.includes(i) : i === this._activeIndex;
          let changed = selected !== this.tabs[i].selected;
          if (changed) {
            this.tabs[i].selected = selected;
            this.tabs[i].selectedChange.emit(selected);
            this.tabs[i].changeDetector.markForCheck();
          }
        }
      }
    }
    isTabActive(index) {
      return this.multiple ? this._activeIndex && this._activeIndex.includes(index) : this._activeIndex === index;
    }
    getTabProp(tab, name) {
      return tab.props ? tab.props[name] : undefined;
    }
    updateActiveIndex() {
      let index = this.multiple ? [] : null;
      this.tabs.forEach((tab, i) => {
        if (tab.selected) {
          if (this.multiple) {
            index.push(i);
          } else {
            index = i;
            return;
          }
        }
      });
      this.preventActiveIndexPropagation = true;
      this.activeIndexChange.emit(index);
    }
    ngOnDestroy() {
      if (this.tabListSubscription) {
        this.tabListSubscription.unsubscribe();
      }
    }
    static ɵfac = function Accordion_Factory(t) {
      return new (t || Accordion)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Accordion,
      selectors: [["p-accordion"]],
      contentQueries: function Accordion_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, AccordionTab, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabList = _t);
        }
      },
      hostAttrs: [1, "p-element"],
      hostBindings: function Accordion_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function Accordion_keydown_HostBindingHandler($event) {
            return ctx.onKeydown($event);
          });
        }
      },
      inputs: {
        multiple: "multiple",
        style: "style",
        styleClass: "styleClass",
        expandIcon: "expandIcon",
        collapseIcon: "collapseIcon",
        activeIndex: "activeIndex",
        selectOnFocus: "selectOnFocus",
        headerAriaLevel: "headerAriaLevel"
      },
      outputs: {
        onClose: "onClose",
        onOpen: "onOpen",
        activeIndexChange: "activeIndexChange"
      },
      ngContentSelectors: _c6,
      decls: 2,
      vars: 4,
      consts: [[3, "ngClass", "ngStyle"]],
      template: function Accordion_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-accordion p-component")("ngStyle", ctx.style);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return Accordion;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let AccordionModule = /*#__PURE__*/(() => {
  class AccordionModule {
    static ɵfac = function AccordionModule_Factory(t) {
      return new (t || AccordionModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AccordionModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_4__.ChevronRightIcon, primeng_icons_chevrondown__WEBPACK_IMPORTED_MODULE_5__.ChevronDownIcon, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
    });
  }
  return AccordionModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-accordion.mjs.map

/***/ }),

/***/ 14844:
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-tabview.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabPanel: () => (/* binding */ TabPanel),
/* harmony export */   TabView: () => (/* binding */ TabView),
/* harmony export */   TabViewModule: () => (/* binding */ TabViewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dom */ 82076);
/* harmony import */ var primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/chevronleft */ 42537);
/* harmony import */ var primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/chevronright */ 44562);
/* harmony import */ var primeng_icons_times__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/times */ 77778);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 44480);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tooltip */ 33259);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 2332);















/**
 * TabPanel is a helper component for TabView component.
 * @group Components
 */
function TabPanel_div_0_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TabPanel_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabPanel_div_0_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.contentTemplate);
  }
}
function TabPanel_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TabPanel_div_0_ng_container_2_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r0.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r0.tabView.getTabContentId(ctx_r0.id))("aria-hidden", !ctx_r0.selected)("aria-labelledby", ctx_r0.tabView.getTabHeaderActionId(ctx_r0.id))("data-pc-name", "tabpanel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.contentTemplate && (ctx_r0.cache ? ctx_r0.loaded : ctx_r0.selected));
  }
}
const _c0 = ["*"];
const _c1 = ["content"];
const _c2 = ["navbar"];
const _c3 = ["prevBtn"];
const _c4 = ["nextBtn"];
const _c5 = ["inkbar"];
const _c6 = ["elementToObserve"];
function TabView_button_3_ChevronLeftIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronLeftIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function TabView_button_3_3_ng_template_0_Template(rf, ctx) {}
function TabView_button_3_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TabView_button_3_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabView_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabView_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.navBackward());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TabView_button_3_ChevronLeftIcon_2_Template, 1, 1, "ChevronLeftIcon", 15)(3, TabView_button_3_3_Template, 1, 0, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r1.tabindex)("aria-label", ctx_r1.prevButtonAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.previousIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.previousIconTemplate);
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 25);
  }
  if (rf & 2) {
    const tab_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", tab_r13.leftIcon);
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {}
function TabView_ng_template_8_li_0_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TabView_ng_template_8_li_0_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabView_ng_template_8_li_0_ng_container_2_span_2_1_Template, 1, 0, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", tab_r13.leftIconTemplate);
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 27);
  }
  if (rf & 2) {
    const tab_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", tab_r13.rightIcon);
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_6_1_ng_template_0_Template(rf, ctx) {}
function TabView_ng_template_8_li_0_ng_container_2_span_6_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TabView_ng_template_8_li_0_ng_container_2_span_6_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabView_ng_template_8_li_0_ng_container_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabView_ng_template_8_li_0_ng_container_2_span_6_1_Template, 1, 0, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", tab_r13.rightIconTemplate);
  }
}
function TabView_ng_template_8_li_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabView_ng_template_8_li_0_ng_container_2_span_1_Template, 1, 1, "span", 20)(2, TabView_ng_template_8_li_0_ng_container_2_span_2_Template, 2, 1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TabView_ng_template_8_li_0_ng_container_2_span_5_Template, 1, 1, "span", 23)(6, TabView_ng_template_8_li_0_ng_container_2_span_6_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const tab_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r13.leftIcon && !tab_r13.leftIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r13.leftIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r13.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r13.rightIcon && !tab_r13.rightIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r13.rightIconTemplate);
  }
}
function TabView_ng_template_8_li_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function TabView_ng_template_8_li_0_ng_container_4_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "TimesIcon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabView_ng_template_8_li_0_ng_container_4_TimesIcon_1_Template_TimesIcon_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);
      const tab_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r35.close($event, tab_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-tabview-close");
  }
}
function TabView_ng_template_8_li_0_ng_container_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 32);
  }
}
function TabView_ng_template_8_li_0_ng_container_4_3_ng_template_0_Template(rf, ctx) {}
function TabView_ng_template_8_li_0_ng_container_4_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TabView_ng_template_8_li_0_ng_container_4_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabView_ng_template_8_li_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabView_ng_template_8_li_0_ng_container_4_TimesIcon_1_Template, 1, 1, "TimesIcon", 29)(2, TabView_ng_template_8_li_0_ng_container_4_span_2_Template, 1, 0, "span", 30)(3, TabView_ng_template_8_li_0_ng_container_4_3_Template, 1, 0, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const tab_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !tab_r13.closeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r13.closeIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", tab_r13.closeIconTemplate);
  }
}
const _c7 = (a0, a1) => ({
  "p-highlight": a0,
  "p-disabled": a1
});
function TabView_ng_template_8_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18)(1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabView_ng_template_8_li_0_Template_a_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);
      const tab_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r40.open($event, tab_r13));
    })("keydown", function TabView_ng_template_8_li_0_Template_a_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);
      const tab_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r43.onTabKeyDown($event, tab_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TabView_ng_template_8_li_0_ng_container_2_Template, 7, 5, "ng-container", 15)(3, TabView_ng_template_8_li_0_ng_container_3_Template, 1, 0, "ng-container", 16)(4, TabView_ng_template_8_li_0_ng_container_4_Template, 4, 3, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const tab_r13 = ctx_r45.$implicit;
    const i_r14 = ctx_r45.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](tab_r13.headerStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c7, tab_r13.selected, tab_r13.disabled))("ngStyle", tab_r13.headerStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-p-disabled", tab_r13.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pTooltip", tab_r13.tooltip)("tooltipPosition", tab_r13.tooltipPosition)("positionStyle", tab_r13.tooltipPositionStyle)("tooltipStyleClass", tab_r13.tooltipStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r15.getTabHeaderActionId(tab_r13.id))("aria-controls", ctx_r15.getTabContentId(tab_r13.id))("aria-selected", tab_r13.selected)("tabindex", tab_r13.disabled || !tab_r13.selected ? "-1" : ctx_r15.tabindex)("aria-disabled", tab_r13.disabled)("data-pc-index", i_r14)("data-pc-section", "headeraction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !tab_r13.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", tab_r13.headerTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r13.closable);
  }
}
function TabView_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TabView_ng_template_8_li_0_Template, 5, 22, "li", 17);
  }
  if (rf & 2) {
    const tab_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !tab_r13.closed);
  }
}
function TabView_button_11_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronRightIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function TabView_button_11_3_ng_template_0_Template(rf, ctx) {}
function TabView_button_11_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TabView_button_11_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabView_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabView_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r50.navForward());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TabView_button_11_ChevronRightIcon_2_Template, 1, 1, "ChevronRightIcon", 15)(3, TabView_button_11_3_Template, 1, 0, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r6.tabindex)("aria-label", ctx_r6.nextButtonAriaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.nextIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.nextIconTemplate);
  }
}
const _c8 = a1 => ({
  "p-tabview p-component": true,
  "p-tabview-scrollable": a1
});
let TabPanel = /*#__PURE__*/(() => {
  class TabPanel {
    el;
    viewContainer;
    cd;
    /**
     * Defines if tab can be removed.
     * @group Props
     */
    closable = false;
    /**
     * Inline style of the tab header.
     * @group Props
     */
    get headerStyle() {
      return this._headerStyle;
    }
    set headerStyle(headerStyle) {
      this._headerStyle = headerStyle;
      this.tabView.cd.markForCheck();
    }
    /**
     * Style class of the tab header.
     * @group Props
     */
    get headerStyleClass() {
      return this._headerStyleClass;
    }
    set headerStyleClass(headerStyleClass) {
      this._headerStyleClass = headerStyleClass;
      this.tabView.cd.markForCheck();
    }
    /**
     * Whether a lazy loaded panel should avoid getting loaded again on reselection.
     * @group Props
     */
    cache = true;
    /**
     * Advisory information to display in a tooltip on hover.
     * @group Props
     */
    tooltip;
    /**
     * Position of the tooltip.
     * @group Props
     */
    tooltipPosition = 'top';
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
     * Defines if tab is active.
     * @defaultValue false
     * @group Props
     */
    get selected() {
      return !!this._selected;
    }
    set selected(val) {
      this._selected = val;
      if (!this.loaded) {
        this.cd.detectChanges();
      }
      if (val) this.loaded = true;
    }
    /**
     * When true, tab cannot be activated.
     * @defaultValue false
     * @group Props
     */
    get disabled() {
      return !!this._disabled;
    }
    set disabled(disabled) {
      this._disabled = disabled;
      this.tabView.cd.markForCheck();
    }
    /**
     * Title of the tabPanel.
     * @group Props
     */
    get header() {
      return this._header;
    }
    set header(header) {
      this._header = header;
      // We have to wait for the rendering and then retrieve the actual size element from the DOM.
      // in future `Promise.resolve` can be changed to `queueMicrotask` (if ie11 support will be dropped)
      Promise.resolve().then(() => {
        this.tabView.updateInkBar();
        this.tabView.cd.markForCheck();
      });
    }
    /**
     * Left icon of the tabPanel.
     * @group Props
     * @deprecated since v15.4.2, use `lefticon` template instead.
     */
    get leftIcon() {
      return this._leftIcon;
    }
    set leftIcon(leftIcon) {
      this._leftIcon = leftIcon;
      this.tabView.cd.markForCheck();
    }
    /**
     * Left icon of the tabPanel.
     * @group Props
     * @deprecated since v15.4.2, use `righticon` template instead.
     */
    get rightIcon() {
      return this._rightIcon;
    }
    set rightIcon(rightIcon) {
      this._rightIcon = rightIcon;
      this.tabView.cd.markForCheck();
    }
    templates;
    closed = false;
    view = null;
    _headerStyle;
    _headerStyleClass;
    _selected;
    _disabled;
    _header;
    _leftIcon;
    _rightIcon = undefined;
    loaded = false;
    id;
    contentTemplate;
    headerTemplate;
    leftIconTemplate;
    rightIconTemplate;
    closeIconTemplate;
    tabView;
    constructor(tabView, el, viewContainer, cd) {
      this.el = el;
      this.viewContainer = viewContainer;
      this.cd = cd;
      this.tabView = tabView;
      this.id = (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)();
    }
    ngAfterContentInit() {
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'header':
            this.headerTemplate = item.template;
            break;
          case 'content':
            this.contentTemplate = item.template;
            break;
          case 'righticon':
            this.rightIconTemplate = item.template;
            break;
          case 'lefticon':
            this.leftIconTemplate = item.template;
            break;
          case 'closeicon':
            this.closeIconTemplate = item.template;
            break;
          default:
            this.contentTemplate = item.template;
            break;
        }
      });
    }
    ngOnDestroy() {
      this.view = null;
    }
    static ɵfac = function TabPanel_Factory(t) {
      return new (t || TabPanel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => TabView)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TabPanel,
      selectors: [["p-tabPanel"]],
      contentQueries: function TabPanel_ContentQueries(rf, ctx, dirIndex) {
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
        closable: "closable",
        headerStyle: "headerStyle",
        headerStyleClass: "headerStyleClass",
        cache: "cache",
        tooltip: "tooltip",
        tooltipPosition: "tooltipPosition",
        tooltipPositionStyle: "tooltipPositionStyle",
        tooltipStyleClass: "tooltipStyleClass",
        selected: "selected",
        disabled: "disabled",
        header: "header",
        leftIcon: "leftIcon",
        rightIcon: "rightIcon"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 1,
      consts: [["class", "p-tabview-panel", "role", "tabpanel", 3, "hidden", 4, "ngIf"], ["role", "tabpanel", 1, "p-tabview-panel", 3, "hidden"], [4, "ngIf"], [4, "ngTemplateOutlet"]],
      template: function TabPanel_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TabPanel_div_0_Template, 3, 6, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.closed);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet],
      encapsulation: 2
    });
  }
  return TabPanel;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * TabView is a container component to group content with tabs.
 * @group Components
 */
let TabView = /*#__PURE__*/(() => {
  class TabView {
    platformId;
    el;
    cd;
    renderer;
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
     * Whether tab close is controlled at onClose event or not.
     * @defaultValue false
     * @group Props
     */
    controlClose;
    /**
     * When enabled displays buttons at each side of the tab headers to scroll the tab list.
     * @defaultValue false
     * @group Props
     */
    scrollable;
    /**
     * Index of the active tab to change selected tab programmatically.
     * @group Props
     */
    get activeIndex() {
      return this._activeIndex;
    }
    set activeIndex(val) {
      this._activeIndex = val;
      if (this.preventActiveIndexPropagation) {
        this.preventActiveIndexPropagation = false;
        return;
      }
      if (this.tabs && this.tabs.length && this._activeIndex != null && this.tabs.length > this._activeIndex) {
        this.findSelectedTab().selected = false;
        this.tabs[this._activeIndex].selected = true;
        this.tabChanged = true;
        this.updateScrollBar(val);
      }
    }
    /**
     * When enabled, the focused tab is activated.
     * @group Props
     */
    selectOnFocus = false;
    /**
     * Used to define a string aria label attribute the forward navigation button.
     * @group Props
     */
    nextButtonAriaLabel;
    /**
     * Used to define a string aria label attribute the backward navigation button.
     * @group Props
     */
    prevButtonAriaLabel;
    /**
     * When activated, navigation buttons will automatically hide or show based on the available space within the container.
     * @group Props
     */
    autoHideButtons = true;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex = 0;
    /**
     * Callback to invoke on tab change.
     * @param {TabViewChangeEvent} event - Custom tab change event
     * @group Emits
     */
    onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on tab close.
     * @param {TabViewCloseEvent} event - Custom tab close event
     * @group Emits
     */
    onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Callback to invoke on the active tab change.
     * @param {number} index - New active index
     * @group Emits
     */
    activeIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    content;
    navbar;
    prevBtn;
    nextBtn;
    inkbar;
    tabPanels;
    templates;
    initialized;
    tabs;
    _activeIndex;
    preventActiveIndexPropagation;
    tabChanged;
    backwardIsDisabled = true;
    forwardIsDisabled = false;
    tabChangesSubscription;
    nextIconTemplate;
    previousIconTemplate;
    resizeObserver;
    container;
    list;
    buttonVisible;
    elementToObserve;
    constructor(platformId, el, cd, renderer) {
      this.platformId = platformId;
      this.el = el;
      this.cd = cd;
      this.renderer = renderer;
    }
    ngAfterContentInit() {
      this.initTabs();
      this.tabChangesSubscription = this.tabPanels.changes.subscribe(_ => {
        this.initTabs();
      });
      this.templates.forEach(item => {
        switch (item.getType()) {
          case 'previousicon':
            this.previousIconTemplate = item.template;
            break;
          case 'nexticon':
            this.nextIconTemplate = item.template;
            break;
        }
      });
    }
    ngAfterViewInit() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
        if (this.autoHideButtons) {
          this.bindResizeObserver();
        }
      }
    }
    bindResizeObserver() {
      this.container = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(this.el.nativeElement, '[data-pc-section="navcontent"]');
      this.list = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(this.el.nativeElement, '[data-pc-section="nav"]');
      this.resizeObserver = new ResizeObserver(() => {
        if (this.list.offsetWidth > this.container.offsetWidth) {
          this.buttonVisible = true;
        } else {
          this.buttonVisible = false;
        }
        this.updateButtonState();
        this.cd.detectChanges();
      });
      this.resizeObserver.observe(this.container);
    }
    unbindResizeObserver() {
      this.resizeObserver.unobserve(this.elementToObserve.nativeElement);
      this.resizeObserver = null;
    }
    ngAfterViewChecked() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
        if (this.tabChanged) {
          this.updateInkBar();
          this.tabChanged = false;
        }
      }
    }
    ngOnDestroy() {
      if (this.tabChangesSubscription) {
        this.tabChangesSubscription.unsubscribe();
      }
      if (this.resizeObserver) {
        this.unbindResizeObserver();
      }
    }
    getTabHeaderActionId(tabId) {
      return `${tabId}_header_action`;
    }
    getTabContentId(tabId) {
      return `${tabId}_content`;
    }
    initTabs() {
      this.tabs = this.tabPanels.toArray();
      let selectedTab = this.findSelectedTab();
      if (!selectedTab && this.tabs.length) {
        if (this.activeIndex != null && this.tabs.length > this.activeIndex) this.tabs[this.activeIndex].selected = true;else this.tabs[0].selected = true;
        this.tabChanged = true;
      }
      this.cd.markForCheck();
    }
    onTabKeyDown(event, tab) {
      switch (event.code) {
        case 'ArrowLeft':
          this.onTabArrowLeftKey(event);
          break;
        case 'ArrowRight':
          this.onTabArrowRightKey(event);
          break;
        case 'Home':
          this.onTabHomeKey(event);
          break;
        case 'End':
          this.onTabEndKey(event);
          break;
        case 'PageDown':
          this.onTabEndKey(event);
          break;
        case 'PageUp':
          this.onTabHomeKey(event);
          break;
        case 'Enter':
        case 'Space':
          this.open(event, tab);
          break;
        default:
          break;
      }
    }
    onTabArrowLeftKey(event) {
      const prevHeaderAction = this.findPrevHeaderAction(event.target.parentElement);
      const index = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getAttribute(prevHeaderAction, 'data-pc-index');
      prevHeaderAction ? this.changeFocusedTab(event, prevHeaderAction, index) : this.onTabEndKey(event);
      event.preventDefault();
    }
    onTabArrowRightKey(event) {
      const nextHeaderAction = this.findNextHeaderAction(event.target.parentElement);
      const index = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getAttribute(nextHeaderAction, 'data-pc-index');
      nextHeaderAction ? this.changeFocusedTab(event, nextHeaderAction, index) : this.onTabHomeKey(event);
      event.preventDefault();
    }
    onTabHomeKey(event) {
      const firstHeaderAction = this.findFirstHeaderAction();
      const index = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getAttribute(firstHeaderAction, 'data-pc-index');
      this.changeFocusedTab(event, firstHeaderAction, index);
      event.preventDefault();
    }
    onTabEndKey(event) {
      const lastHeaderAction = this.findLastHeaderAction();
      const index = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getAttribute(lastHeaderAction, 'data-pc-index');
      this.changeFocusedTab(event, lastHeaderAction, index);
      event.preventDefault();
    }
    changeFocusedTab(event, element, index) {
      if (element) {
        primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.focus(element);
        element.scrollIntoView({
          block: 'nearest'
        });
        if (this.selectOnFocus) {
          const tab = this.tabs[index];
          this.open(event, tab);
        }
      }
    }
    findNextHeaderAction(tabElement, selfCheck = false) {
      const headerElement = selfCheck ? tabElement : tabElement.nextElementSibling;
      return headerElement ? primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getAttribute(headerElement, 'data-p-disabled') || primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getAttribute(headerElement, 'data-pc-section') === 'inkbar' ? this.findNextHeaderAction(headerElement) : primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(headerElement, '[data-pc-section="headeraction"]') : null;
    }
    findPrevHeaderAction(tabElement, selfCheck = false) {
      const headerElement = selfCheck ? tabElement : tabElement.previousElementSibling;
      return headerElement ? primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getAttribute(headerElement, 'data-p-disabled') || primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getAttribute(headerElement, 'data-pc-section') === 'inkbar' ? this.findPrevHeaderAction(headerElement) : primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(headerElement, '[data-pc-section="headeraction"]') : null;
    }
    findFirstHeaderAction() {
      const firstEl = this.navbar.nativeElement.firstElementChild;
      return this.findNextHeaderAction(firstEl, true);
    }
    findLastHeaderAction() {
      const lastEl = this.navbar.nativeElement.lastElementChild;
      const lastHeaderAction = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getAttribute(lastEl, 'data-pc-section') === 'inkbar' ? lastEl.previousElementSibling : lastEl;
      return this.findPrevHeaderAction(lastHeaderAction, true);
    }
    open(event, tab) {
      if (tab.disabled) {
        if (event) {
          event.preventDefault();
        }
        return;
      }
      if (!tab.selected) {
        let selectedTab = this.findSelectedTab();
        if (selectedTab) {
          selectedTab.selected = false;
        }
        this.tabChanged = true;
        tab.selected = true;
        let selectedTabIndex = this.findTabIndex(tab);
        this.preventActiveIndexPropagation = true;
        this.activeIndexChange.emit(selectedTabIndex);
        this.onChange.emit({
          originalEvent: event,
          index: selectedTabIndex
        });
        this.updateScrollBar(selectedTabIndex);
      }
      if (event) {
        event.preventDefault();
      }
    }
    close(event, tab) {
      if (this.controlClose) {
        this.onClose.emit({
          originalEvent: event,
          index: this.findTabIndex(tab),
          close: () => {
            this.closeTab(tab);
          }
        });
      } else {
        this.closeTab(tab);
        this.onClose.emit({
          originalEvent: event,
          index: this.findTabIndex(tab)
        });
      }
    }
    closeTab(tab) {
      if (tab.disabled) {
        return;
      }
      if (tab.selected) {
        this.tabChanged = true;
        tab.selected = false;
        for (let i = 0; i < this.tabs.length; i++) {
          let tabPanel = this.tabs[i];
          if (!tabPanel.closed && !tab.disabled) {
            tabPanel.selected = true;
            break;
          }
        }
      }
      tab.closed = true;
    }
    findSelectedTab() {
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i].selected) {
          return this.tabs[i];
        }
      }
      return null;
    }
    findTabIndex(tab) {
      let index = -1;
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i] == tab) {
          index = i;
          break;
        }
      }
      return index;
    }
    getBlockableElement() {
      return this.el.nativeElement.children[0];
    }
    updateInkBar() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
        if (this.navbar) {
          const tabHeader = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.findSingle(this.navbar.nativeElement, 'li.p-highlight');
          if (!tabHeader) {
            return;
          }
          this.inkbar.nativeElement.style.width = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getWidth(tabHeader) + 'px';
          this.inkbar.nativeElement.style.left = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOffset(tabHeader).left - primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getOffset(this.navbar.nativeElement).left + 'px';
        }
      }
    }
    updateScrollBar(index) {
      let tabHeader = this.navbar.nativeElement.children[index];
      tabHeader.scrollIntoView({
        block: 'nearest'
      });
    }
    updateButtonState() {
      const content = this.content.nativeElement;
      const {
        scrollLeft,
        scrollWidth
      } = content;
      const width = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getWidth(content);
      this.backwardIsDisabled = scrollLeft === 0;
      this.forwardIsDisabled = scrollLeft === scrollWidth - width;
    }
    onScroll(event) {
      this.scrollable && this.updateButtonState();
      event.preventDefault();
    }
    getVisibleButtonWidths() {
      return [this.prevBtn?.nativeElement, this.nextBtn?.nativeElement].reduce((acc, el) => el ? acc + primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getWidth(el) : acc, 0);
    }
    navBackward() {
      const content = this.content.nativeElement;
      const width = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getWidth(content) - this.getVisibleButtonWidths();
      const pos = content.scrollLeft - width;
      content.scrollLeft = pos <= 0 ? 0 : pos;
    }
    navForward() {
      const content = this.content.nativeElement;
      const width = primeng_dom__WEBPACK_IMPORTED_MODULE_4__.DomHandler.getWidth(content) - this.getVisibleButtonWidths();
      const pos = content.scrollLeft + width;
      const lastPos = content.scrollWidth - width;
      content.scrollLeft = pos >= lastPos ? lastPos : pos;
    }
    static ɵfac = function TabView_Factory(t) {
      return new (t || TabView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TabView,
      selectors: [["p-tabView"]],
      contentQueries: function TabView_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, TabPanel, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabPanels = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function TabView_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navbar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.prevBtn = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nextBtn = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inkbar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.elementToObserve = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        style: "style",
        styleClass: "styleClass",
        controlClose: "controlClose",
        scrollable: "scrollable",
        activeIndex: "activeIndex",
        selectOnFocus: "selectOnFocus",
        nextButtonAriaLabel: "nextButtonAriaLabel",
        prevButtonAriaLabel: "prevButtonAriaLabel",
        autoHideButtons: "autoHideButtons",
        tabindex: "tabindex"
      },
      outputs: {
        onChange: "onChange",
        onClose: "onClose",
        activeIndexChange: "activeIndexChange"
      },
      ngContentSelectors: _c0,
      decls: 14,
      vars: 13,
      consts: [[3, "ngClass", "ngStyle"], [1, "p-tabview-nav-container"], ["elementToObserve", ""], ["class", "p-tabview-nav-prev p-tabview-nav-btn p-link", "type", "button", "pRipple", "", 3, "click", 4, "ngIf"], [1, "p-tabview-nav-content", 3, "scroll"], ["content", ""], ["role", "tablist", 1, "p-tabview-nav"], ["navbar", ""], ["ngFor", "", 3, "ngForOf"], ["role", "presentation", "aria-hidden", "true", 1, "p-tabview-ink-bar"], ["inkbar", ""], ["class", "p-tabview-nav-next p-tabview-nav-btn p-link", "type", "button", "pRipple", "", 3, "click", 4, "ngIf"], [1, "p-tabview-panels"], ["type", "button", "pRipple", "", 1, "p-tabview-nav-prev", "p-tabview-nav-btn", "p-link", 3, "click"], ["prevBtn", ""], [4, "ngIf"], [4, "ngTemplateOutlet"], ["role", "presentation", 3, "ngClass", "ngStyle", "class", 4, "ngIf"], ["role", "presentation", 3, "ngClass", "ngStyle"], ["role", "tab", "pRipple", "", 1, "p-tabview-nav-link", 3, "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "click", "keydown"], ["class", "p-tabview-left-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-tabview-left-icon", 4, "ngIf"], [1, "p-tabview-title"], ["class", "p-tabview-right-icon", 3, "ngClass", 4, "ngIf"], ["class", "p-tabview-right-icon", 4, "ngIf"], [1, "p-tabview-left-icon", 3, "ngClass"], [1, "p-tabview-left-icon"], [1, "p-tabview-right-icon", 3, "ngClass"], [1, "p-tabview-right-icon"], [3, "styleClass", "click", 4, "ngIf"], ["class", "tab.closeIconTemplate", 4, "ngIf"], [3, "styleClass", "click"], [1, "tab.closeIconTemplate"], ["type", "button", "pRipple", "", 1, "p-tabview-nav-next", "p-tabview-nav-btn", "p-link", 3, "click"], ["nextBtn", ""]],
      template: function TabView_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TabView_button_3_Template, 4, 4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function TabView_Template_div_scroll_4_listener($event) {
            return ctx.onScroll($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TabView_ng_template_8_Template, 1, 1, "ng-template", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li", 9, 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TabView_button_11_Template, 4, 4, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c8, ctx.scrollable))("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "tabview");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scrollable && !ctx.backwardIsDisabled && ctx.autoHideButtons);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "navcontent");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "nav");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "inkbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scrollable && !ctx.forwardIsDisabled && ctx.buttonVisible);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__.Tooltip, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_icons_times__WEBPACK_IMPORTED_MODULE_7__.TimesIcon, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_8__.ChevronLeftIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__.ChevronRightIcon],
      styles: ["@layer primeng{.p-tabview-nav-container{position:relative}.p-tabview-scrollable .p-tabview-nav-container{overflow:hidden}.p-tabview-nav-content{overflow-x:auto;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;overscroll-behavior:contain auto}.p-tabview-nav{display:inline-flex;min-width:100%;margin:0;padding:0;list-style-type:none;flex:1 1 auto}.p-tabview-nav-link{cursor:pointer;-webkit-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabview-ink-bar{display:none;z-index:1}.p-tabview-nav-link:focus{z-index:1}.p-tabview-title{line-height:1;white-space:nowrap}.p-tabview-nav-btn{position:absolute;top:0;z-index:2;height:100%;display:flex;align-items:center;justify-content:center}.p-tabview-nav-prev{left:0}.p-tabview-nav-next{right:0}.p-tabview-nav-content::-webkit-scrollbar{display:none}.p-tabview-close{z-index:1}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return TabView;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TabViewModule = /*#__PURE__*/(() => {
  class TabViewModule {
    static ɵfac = function TabViewModule_Factory(t) {
      return new (t || TabViewModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TabViewModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_icons_times__WEBPACK_IMPORTED_MODULE_7__.TimesIcon, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_8__.ChevronLeftIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__.ChevronRightIcon, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
    });
  }
  return TabViewModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-tabview.mjs.map

/***/ })

}]);