"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[3525],{

/***/ 14932:
/*!***********************************************************************!*\
  !*** ./src/app/demo/components/uikit/menus/confirmation.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmationComponent: () => (/* binding */ ConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);

let ConfirmationComponent = /*#__PURE__*/(() => {
  class ConfirmationComponent {
    constructor() {}
    static #_ = this.ɵfac = function ConfirmationComponent_Factory(t) {
      return new (t || ConfirmationComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmationComponent,
      selectors: [["ng-component"]],
      decls: 4,
      vars: 0,
      consts: [[1, "flex", "flex-column", "align-items-center", "justify-content-center", "h-full", "py-5", "px-3"], [1, "pi", "pi-fw", "pi-check", "mr-2", "text-2xl"], [1, "m-0", "mt-5", "text-center", "text-lg"]],
      template: function ConfirmationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Confirmation Component Content via Child Route");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
      },
      encapsulation: 2
    });
  }
  return ConfirmationComponent;
})();

/***/ }),

/***/ 26691:
/*!****************************************************************!*\
  !*** ./src/app/demo/components/uikit/menus/menus.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenusComponent: () => (/* binding */ MenusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/breadcrumb */ 16346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/menubar */ 89844);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tabmenu */ 55779);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/steps */ 62198);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tieredmenu */ 315);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/menu */ 61122);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/contextmenu */ 48493);
/* harmony import */ var primeng_megamenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/megamenu */ 81740);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/panelmenu */ 30074);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ 53714);














function MenusComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 20)(2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c0 = () => ({
  icon: "pi pi-home"
});
const _c1 = () => ({
  "width": "200px"
});
let MenusComponent = /*#__PURE__*/(() => {
  class MenusComponent {
    constructor() {
      this.breadcrumbItems = [];
      this.tieredItems = [];
      this.items = [];
      this.routeItems = [];
      this.megaMenuItems = [];
      this.panelMenuItems = [];
      this.stepsItems = [];
      this.slideItems = [];
      this.menuItems = [];
      this.plainMenuItems = [];
      this.pageIndex = 0;
    }
    ngOnInit() {
      this.tieredItems = [{
        label: 'Customers',
        icon: 'pi pi-fw pi-table',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [{
            label: 'Customer',
            icon: 'pi pi-fw pi-plus'
          }, {
            label: 'Duplicate',
            icon: 'pi pi-fw pi-copy'
          }]
        }, {
          label: 'Edit',
          icon: 'pi pi-fw pi-user-edit'
        }]
      }, {
        label: 'Orders',
        icon: 'pi pi-fw pi-shopping-cart',
        items: [{
          label: 'View',
          icon: 'pi pi-fw pi-list'
        }, {
          label: 'Search',
          icon: 'pi pi-fw pi-search'
        }]
      }, {
        label: 'Shipments',
        icon: 'pi pi-fw pi-envelope',
        items: [{
          label: 'Tracker',
          icon: 'pi pi-fw pi-compass'
        }, {
          label: 'Map',
          icon: 'pi pi-fw pi-map-marker'
        }, {
          label: 'Manage',
          icon: 'pi pi-fw pi-pencil'
        }]
      }, {
        label: 'Profile',
        icon: 'pi pi-fw pi-user',
        items: [{
          label: 'Settings',
          icon: 'pi pi-fw pi-cog'
        }, {
          label: 'Billing',
          icon: 'pi pi-fw pi-file'
        }]
      }, {
        separator: true
      }, {
        label: 'Quit',
        icon: 'pi pi-fw pi-sign-out'
      }];
      this.items = [{
        label: 'Customers',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus'
        }, {
          label: 'Edit',
          icon: 'pi pi-fw pi-user-edit'
        }]
      }, {
        label: 'Orders',
        items: [{
          label: 'View',
          icon: 'pi pi-fw pi-list'
        }, {
          label: 'Search',
          icon: 'pi pi-fw pi-search'
        }]
      }, {
        label: 'Shipments',
        items: [{
          label: 'Tracker',
          icon: 'pi pi-fw pi-compass'
        }, {
          label: 'Map',
          icon: 'pi pi-fw pi-map-marker'
        }, {
          label: 'Manage',
          icon: 'pi pi-fw pi-pencil'
        }]
      }];
      this.menuItems = [{
        label: 'Save',
        icon: 'pi pi-fw pi-check'
      }, {
        label: 'Update',
        icon: 'pi pi-fw pi-refresh'
      }, {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash'
      }, {
        separator: true
      }, {
        label: 'Home',
        icon: 'pi pi-fw pi-home'
      }];
      this.slideItems = [{
        label: 'Customers',
        icon: 'pi pi-fw pi-table',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus'
        }, {
          label: 'Edit',
          icon: 'pi pi-fw pi-user-edit'
        }]
      }, {
        label: 'Orders',
        icon: 'pi pi-fw pi-shopping-cart',
        items: [{
          label: 'View',
          icon: 'pi pi-fw pi-list'
        }, {
          label: 'Search',
          icon: 'pi pi-fw pi-search'
        }]
      }, {
        label: 'Shipments',
        icon: 'pi pi-fw pi-envelope',
        items: [{
          label: 'Tracker',
          icon: 'pi pi-fw pi-compass'
        }, {
          label: 'Map',
          icon: 'pi pi-fw pi-map-marker'
        }, {
          label: 'Manage',
          icon: 'pi pi-fw pi-pencil'
        }]
      }, {
        label: 'Profile',
        icon: 'pi pi-fw pi-user',
        items: [{
          label: 'Settings',
          icon: 'pi pi-fw pi-cog'
        }, {
          label: 'Billing',
          icon: 'pi pi-fw pi-file'
        }]
      }];
      this.plainMenuItems = [{
        label: 'Customers',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus'
        }, {
          label: 'Edit',
          icon: 'pi pi-fw pi-user-edit'
        }]
      }, {
        label: 'Orders',
        items: [{
          label: 'View',
          icon: 'pi pi-fw pi-list'
        }, {
          label: 'Search',
          icon: 'pi pi-fw pi-search'
        }]
      }];
      this.breadcrumbItems = [];
      this.breadcrumbItems.push({
        label: 'Electronics'
      });
      this.breadcrumbItems.push({
        label: 'Computer'
      });
      this.breadcrumbItems.push({
        label: 'Notebook'
      });
      this.breadcrumbItems.push({
        label: 'Accessories'
      });
      this.breadcrumbItems.push({
        label: 'Backpacks'
      });
      this.breadcrumbItems.push({
        label: 'Item'
      });
      this.routeItems = [{
        label: 'Personal',
        routerLink: 'personal'
      }, {
        label: 'Seat',
        routerLink: 'seat'
      }, {
        label: 'Payment',
        routerLink: 'payment'
      }, {
        label: 'Confirmation',
        routerLink: 'confirmation'
      }];
      this.megaMenuItems = [{
        label: 'Fashion',
        icon: 'pi pi-fw pi-tag',
        items: [[{
          label: 'Women',
          items: [{
            label: 'Women Item'
          }, {
            label: 'Women Item'
          }, {
            label: 'Women Item'
          }]
        }, {
          label: 'Men',
          items: [{
            label: 'Men Item'
          }, {
            label: 'Men Item'
          }, {
            label: 'Men Item'
          }]
        }], [{
          label: 'Kids',
          items: [{
            label: 'Kids Item'
          }, {
            label: 'Kids Item'
          }]
        }, {
          label: 'Luggage',
          items: [{
            label: 'Luggage Item'
          }, {
            label: 'Luggage Item'
          }, {
            label: 'Luggage Item'
          }]
        }]]
      }, {
        label: 'Electronics',
        icon: 'pi pi-fw pi-desktop',
        items: [[{
          label: 'Computer',
          items: [{
            label: 'Computer Item'
          }, {
            label: 'Computer Item'
          }]
        }, {
          label: 'Camcorder',
          items: [{
            label: 'Camcorder Item'
          }, {
            label: 'Camcorder Item'
          }, {
            label: 'Camcorder Item'
          }]
        }], [{
          label: 'TV',
          items: [{
            label: 'TV Item'
          }, {
            label: 'TV Item'
          }]
        }, {
          label: 'Audio',
          items: [{
            label: 'Audio Item'
          }, {
            label: 'Audio Item'
          }, {
            label: 'Audio Item'
          }]
        }], [{
          label: 'Sports.7',
          items: [{
            label: 'Sports.7.1'
          }, {
            label: 'Sports.7.2'
          }]
        }]]
      }, {
        label: 'Furniture',
        icon: 'pi pi-fw pi-image',
        items: [[{
          label: 'Living Room',
          items: [{
            label: 'Living Room Item'
          }, {
            label: 'Living Room Item'
          }]
        }, {
          label: 'Kitchen',
          items: [{
            label: 'Kitchen Item'
          }, {
            label: 'Kitchen Item'
          }, {
            label: 'Kitchen Item'
          }]
        }], [{
          label: 'Bedroom',
          items: [{
            label: 'Bedroom Item'
          }, {
            label: 'Bedroom Item'
          }]
        }, {
          label: 'Outdoor',
          items: [{
            label: 'Outdoor Item'
          }, {
            label: 'Outdoor Item'
          }, {
            label: 'Outdoor Item'
          }]
        }]]
      }, {
        label: 'Sports',
        icon: 'pi pi-fw pi-star',
        items: [[{
          label: 'Basketball',
          items: [{
            label: 'Basketball Item'
          }, {
            label: 'Basketball Item'
          }]
        }, {
          label: 'Football',
          items: [{
            label: 'Football Item'
          }, {
            label: 'Football Item'
          }, {
            label: 'Football Item'
          }]
        }], [{
          label: 'Tennis',
          items: [{
            label: 'Tennis Item'
          }, {
            label: 'Tennis Item'
          }]
        }]]
      }];
      this.panelMenuItems = [{
        label: 'Customers',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [{
            label: 'Customer',
            icon: 'pi pi-fw pi-plus'
          }, {
            label: 'Duplicate',
            icon: 'pi pi-fw pi-copy'
          }]
        }, {
          label: 'Edit',
          icon: 'pi pi-fw pi-user-edit'
        }]
      }, {
        label: 'Orders',
        items: [{
          label: 'View',
          icon: 'pi pi-fw pi-list'
        }, {
          label: 'Search',
          icon: 'pi pi-fw pi-search'
        }]
      }, {
        label: 'Shipments',
        items: [{
          label: 'Tracker',
          icon: 'pi pi-fw pi-compass'
        }, {
          label: 'Map',
          icon: 'pi pi-fw pi-map-marker'
        }, {
          label: 'Manage',
          icon: 'pi pi-fw pi-pencil'
        }]
      }, {
        label: 'Profile',
        items: [{
          label: 'Settings',
          icon: 'pi pi-fw pi-cog'
        }, {
          label: 'Billing',
          icon: 'pi pi-fw pi-file'
        }]
      }];
    }
    static #_ = this.ɵfac = function MenusComponent_Factory(t) {
      return new (t || MenusComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenusComponent,
      selectors: [["ng-component"]],
      decls: 59,
      vars: 19,
      consts: [[1, "grid", "p-fluid"], [1, "col-12"], [1, "card", "card-w-title"], [3, "model"], ["pTemplate", "end"], [3, "model", "home"], [1, "card", "card-w-title", "flex", "flex-wrap"], [1, "col-12", "md:col-8", "h-full"], ["styleClass", "mb-5", 3, "model"], ["styleClass", "mt-5", 3, "model", "readonly"], [1, "col-12", "md:col-4", "mt-5", "md:mt-0"], [1, "col-12", "md:col-4"], [3, "popup", "model"], ["menu", ""], ["type", "button", "pButton", "", "icon", "pi pi-chevron-down", "label", "Options", 2, "width", "auto", 3, "click"], ["anchor", ""], [3, "target", "model"], [1, "col-12", "md:col-6"], ["orientation", "vertical", 3, "model"], [1, "p-input-icon-right"], ["type", "text", "pInputText", "", "placeholder", "Search"], [1, "pi", "pi-search"]],
      template: function MenusComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "MenuBar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-menubar", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MenusComponent_ng_template_6_Template, 3, 0, "ng-template", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1)(8, "div", 2)(9, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Breadcrumb");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p-breadcrumb", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1)(13, "div", 6)(14, "div", 7)(15, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "TabMenu");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "p-tabMenu", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Steps");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "p-steps", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11)(24, "div", 2)(25, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "TieredMenu");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "p-tieredMenu", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11)(29, "div", 2)(30, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Plain Menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "p-menu", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11)(34, "div", 2)(35, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Overlay Menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "p-menu", 12, 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenusComponent_Template_button_click_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r1.toggle($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2, 15)(42, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "ContextMenu");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Right click to display. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "p-contextMenu", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17)(47, "div", 2)(48, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "MegaMenu - Horizontal");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "p-megaMenu", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "MegaMenu - Vertical");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "p-megaMenu", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 17)(55, "div", 2)(56, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "PanelMenu");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "p-panelMenu", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.tieredItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.breadcrumbItems)("home", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.routeItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.routeItems)("readonly", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.tieredItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.plainMenuItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popup", true)("model", ctx.menuItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", _r2)("model", ctx.menuItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.megaMenuItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.megaMenuItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.panelMenuItems);
        }
      },
      dependencies: [primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_1__.Breadcrumb, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, primeng_api__WEBPACK_IMPORTED_MODULE_3__.PrimeTemplate, primeng_menubar__WEBPACK_IMPORTED_MODULE_4__.Menubar, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_5__.TabMenu, primeng_steps__WEBPACK_IMPORTED_MODULE_6__.Steps, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_7__.TieredMenu, primeng_menu__WEBPACK_IMPORTED_MODULE_8__.Menu, primeng_button__WEBPACK_IMPORTED_MODULE_9__.ButtonDirective, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_10__.ContextMenu, primeng_megamenu__WEBPACK_IMPORTED_MODULE_11__.MegaMenu, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_12__.PanelMenu, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputText],
      styles: ["[_nghost-%COMP%]     .p-menubar-root-list {\n  flex-wrap: wrap;\n}"]
    });
  }
  return MenusComponent;
})();

/***/ }),

/***/ 93525:
/*!*************************************************************!*\
  !*** ./src/app/demo/components/uikit/menus/menus.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenusModule: () => (/* binding */ MenusModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var _menus_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menus.component */ 26691);
/* harmony import */ var _payment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.component */ 75497);
/* harmony import */ var _seat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seat.component */ 94119);
/* harmony import */ var _personal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal.component */ 13058);
/* harmony import */ var _confirmation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirmation.component */ 14932);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/breadcrumb */ 16346);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/menubar */ 89844);
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tabmenu */ 55779);
/* harmony import */ var primeng_steps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/steps */ 62198);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tieredmenu */ 315);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/menu */ 61122);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 40707);
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/contextmenu */ 48493);
/* harmony import */ var primeng_megamenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/megamenu */ 81740);
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/panelmenu */ 30074);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtext */ 53714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 65879);




















let MenusModule = /*#__PURE__*/(() => {
  class MenusModule {
    static #_ = this.ɵfac = function MenusModule_Factory(t) {
      return new (t || MenusModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: MenusModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_8__.MenubarModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_9__.TabMenuModule, primeng_steps__WEBPACK_IMPORTED_MODULE_10__.StepsModule, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_11__.TieredMenuModule, primeng_menu__WEBPACK_IMPORTED_MODULE_12__.MenuModule, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonModule, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__.ContextMenuModule, primeng_megamenu__WEBPACK_IMPORTED_MODULE_15__.MegaMenuModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_16__.PanelMenuModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__.InputTextModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forChild([{
        path: '',
        component: _menus_component__WEBPACK_IMPORTED_MODULE_0__.MenusComponent,
        children: [{
          path: '',
          redirectTo: 'personal',
          pathMatch: 'full'
        }, {
          path: 'personal',
          component: _personal_component__WEBPACK_IMPORTED_MODULE_3__.PersonalComponent
        }, {
          path: 'confirmation',
          component: _confirmation_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmationComponent
        }, {
          path: 'seat',
          component: _seat_component__WEBPACK_IMPORTED_MODULE_2__.SeatComponent
        }, {
          path: 'payment',
          component: _payment_component__WEBPACK_IMPORTED_MODULE_1__.PaymentComponent
        }]
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule]
    });
  }
  return MenusModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MenusModule, {
    declarations: [_menus_component__WEBPACK_IMPORTED_MODULE_0__.MenusComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbModule, primeng_menubar__WEBPACK_IMPORTED_MODULE_8__.MenubarModule, primeng_tabmenu__WEBPACK_IMPORTED_MODULE_9__.TabMenuModule, primeng_steps__WEBPACK_IMPORTED_MODULE_10__.StepsModule, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_11__.TieredMenuModule, primeng_menu__WEBPACK_IMPORTED_MODULE_12__.MenuModule, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonModule, primeng_contextmenu__WEBPACK_IMPORTED_MODULE_14__.ContextMenuModule, primeng_megamenu__WEBPACK_IMPORTED_MODULE_15__.MegaMenuModule, primeng_panelmenu__WEBPACK_IMPORTED_MODULE_16__.PanelMenuModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__.InputTextModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule]
  });
})();

/***/ }),

/***/ 75497:
/*!******************************************************************!*\
  !*** ./src/app/demo/components/uikit/menus/payment.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentComponent: () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);

let PaymentComponent = /*#__PURE__*/(() => {
  class PaymentComponent {
    constructor() {}
    static #_ = this.ɵfac = function PaymentComponent_Factory(t) {
      return new (t || PaymentComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaymentComponent,
      selectors: [["ng-component"]],
      decls: 4,
      vars: 0,
      consts: [[1, "flex", "flex-column", "align-items-center", "justify-content-center", "h-full", "py-5", "px-3"], [1, "pi", "pi-fw", "pi-money-bill", "mr-2", "text-2xl"], [1, "m-0", "mt-5", "text-center", "text-lg"]],
      template: function PaymentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Payment Component Content via Child Route");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
      },
      encapsulation: 2
    });
  }
  return PaymentComponent;
})();

/***/ }),

/***/ 13058:
/*!*******************************************************************!*\
  !*** ./src/app/demo/components/uikit/menus/personal.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PersonalComponent: () => (/* binding */ PersonalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);

let PersonalComponent = /*#__PURE__*/(() => {
  class PersonalComponent {
    constructor() {}
    static #_ = this.ɵfac = function PersonalComponent_Factory(t) {
      return new (t || PersonalComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PersonalComponent,
      selectors: [["ng-component"]],
      decls: 4,
      vars: 0,
      consts: [[1, "flex", "flex-column", "align-items-center", "justify-content-center", "h-full", "py-5", "px-3"], [1, "pi", "pi-fw", "pi-user", "mr-2", "text-2xl"], [1, "mt-5", "text-center", "text-lg"]],
      template: function PersonalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Personal Component Content via Child Route");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
      },
      encapsulation: 2
    });
  }
  return PersonalComponent;
})();

/***/ }),

/***/ 94119:
/*!***************************************************************!*\
  !*** ./src/app/demo/components/uikit/menus/seat.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeatComponent: () => (/* binding */ SeatComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);

let SeatComponent = /*#__PURE__*/(() => {
  class SeatComponent {
    constructor() {}
    static #_ = this.ɵfac = function SeatComponent_Factory(t) {
      return new (t || SeatComponent)();
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SeatComponent,
      selectors: [["ng-component"]],
      decls: 4,
      vars: 0,
      consts: [[1, "flex", "flex-column", "align-items-center", "justify-content-center", "h-full", "py-5", "px-3"], [1, "pi", "pi-fw", "pi-ticket", "mr-2", "text-2xl"], [1, "m-0", "mt-5", "text-center", "text-lg"]],
      template: function SeatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Seat Component Content via Child Route");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
      },
      encapsulation: 2
    });
  }
  return SeatComponent;
})();

/***/ }),

/***/ 16346:
/*!**************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-breadcrumb.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Breadcrumb: () => (/* binding */ Breadcrumb),
/* harmony export */   BreadcrumbModule: () => (/* binding */ BreadcrumbModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/icons/chevronright */ 44562);
/* harmony import */ var primeng_icons_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/home */ 30427);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/tooltip */ 33259);












/**
 * Breadcrumb provides contextual information about page hierarchy.
 * @group Components
 */
function Breadcrumb_li_2_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 12);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.home.icon)("ngStyle", ctx_r5.home.iprivateyle);
  }
}
function Breadcrumb_li_2_a_1_HomeIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "HomeIcon", 13);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-menuitem-icon");
  }
}
function Breadcrumb_li_2_a_1_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.home.label);
  }
}
function Breadcrumb_li_2_a_1_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 17);
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r9.home.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function Breadcrumb_li_2_a_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Breadcrumb_li_2_a_1_ng_container_3_span_1_Template, 2, 1, "span", 14)(2, Breadcrumb_li_2_a_1_ng_container_3_ng_template_2_Template, 1, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.home.escape !== false)("ngIfElse", _r10);
  }
}
function Breadcrumb_li_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Breadcrumb_li_2_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.onClick($event, ctx_r11.home));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Breadcrumb_li_2_a_1_span_1_Template, 1, 2, "span", 9)(2, Breadcrumb_li_2_a_1_HomeIcon_2_Template, 1, 1, "HomeIcon", 10)(3, Breadcrumb_li_2_a_1_ng_container_3_Template, 4, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r3.home.url ? ctx_r3.home.url : null, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("target", ctx_r3.home.target)("ariaCurrentWhenActive", ctx_r3.isCurrentUrl(ctx_r3.home));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r3.homeAriaLabel)("title", ctx_r3.home.title)("tabindex", ctx_r3.home.disabled ? null : "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.home.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.home.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.home.label);
  }
}
function Breadcrumb_li_2_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 12);
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r13.home.icon)("ngStyle", ctx_r13.home.iconStyle);
  }
}
function Breadcrumb_li_2_a_2_HomeIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "HomeIcon", 13);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-menuitem-icon");
  }
}
function Breadcrumb_li_2_a_2_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.home.label);
  }
}
function Breadcrumb_li_2_a_2_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 17);
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r17.home.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function Breadcrumb_li_2_a_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Breadcrumb_li_2_a_2_ng_container_3_span_1_Template, 2, 1, "span", 14)(2, Breadcrumb_li_2_a_2_ng_container_3_ng_template_2_Template, 1, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.home.escape !== false)("ngIfElse", _r18);
  }
}
const _c0 = () => ({
  exact: false
});
function Breadcrumb_li_2_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Breadcrumb_li_2_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.onClick($event, ctx_r19.home));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Breadcrumb_li_2_a_2_span_1_Template, 1, 2, "span", 9)(2, Breadcrumb_li_2_a_2_HomeIcon_2_Template, 1, 1, "HomeIcon", 10)(3, Breadcrumb_li_2_a_2_ng_container_3_Template, 4, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r4.home.routerLink)("queryParams", ctx_r4.home.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r4.home.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0))("target", ctx_r4.home.target)("ariaCurrentWhenActive", ctx_r4.isCurrentUrl(ctx_r4.home))("fragment", ctx_r4.home.fragment)("queryParamsHandling", ctx_r4.home.queryParamsHandling)("preserveFragment", ctx_r4.home.preserveFragment)("skipLocationChange", ctx_r4.home.skipLocationChange)("replaceUrl", ctx_r4.home.replaceUrl)("state", ctx_r4.home.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r4.homeAriaLabel)("title", ctx_r4.home.title)("tabindex", ctx_r4.home.disabled ? null : "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.home.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.home.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.home.label);
  }
}
const _c1 = a1 => ({
  "p-breadcrumb-home": true,
  "p-disabled": a1
});
function Breadcrumb_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Breadcrumb_li_2_a_1_Template, 4, 9, "a", 6)(2, Breadcrumb_li_2_a_2_Template, 4, 19, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.home.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r0.home.disabled))("ngStyle", ctx_r0.home.style)("tooltipOptions", ctx_r0.home.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r0.home.id)("data-pc-section", "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.home.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.home.routerLink);
  }
}
function Breadcrumb_li_3_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronRightIcon");
  }
}
function Breadcrumb_li_3_2_ng_template_0_Template(rf, ctx) {}
function Breadcrumb_li_3_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Breadcrumb_li_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Breadcrumb_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Breadcrumb_li_3_ChevronRightIcon_1_Template, 1, 0, "ChevronRightIcon", 11)(2, Breadcrumb_li_3_2_Template, 1, 0, null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.separatorTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.separatorTemplate);
  }
}
function Breadcrumb_ng_template_4_a_1_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 12);
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r24.icon)("ngStyle", item_r24.iconStyle);
  }
}
function Breadcrumb_ng_template_4_a_1_ng_container_1_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r24.label);
  }
}
function Breadcrumb_ng_template_4_a_1_ng_container_1_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 17);
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r24.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function Breadcrumb_ng_template_4_a_1_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Breadcrumb_ng_template_4_a_1_ng_container_1_ng_container_2_span_1_Template, 2, 1, "span", 14)(2, Breadcrumb_ng_template_4_a_1_ng_container_1_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.escape !== false)("ngIfElse", _r36);
  }
}
function Breadcrumb_ng_template_4_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Breadcrumb_ng_template_4_a_1_ng_container_1_span_1_Template, 1, 2, "span", 9)(2, Breadcrumb_ng_template_4_a_1_ng_container_1_ng_container_2_Template, 4, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.label);
  }
}
function Breadcrumb_ng_template_4_a_1_ng_container_2_1_ng_template_0_Template(rf, ctx) {}
function Breadcrumb_ng_template_4_a_1_ng_container_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Breadcrumb_ng_template_4_a_1_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c2 = a0 => ({
  $implicit: a0
});
function Breadcrumb_ng_template_4_a_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Breadcrumb_ng_template_4_a_1_ng_container_2_1_Template, 1, 0, null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r30.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, item_r24));
  }
}
function Breadcrumb_ng_template_4_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Breadcrumb_ng_template_4_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46);
      const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r44.onClick($event, item_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Breadcrumb_ng_template_4_a_1_ng_container_1_Template, 3, 2, "ng-container", 11)(2, Breadcrumb_ng_template_4_a_1_ng_container_2_Template, 2, 4, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", item_r24.target)("ariaCurrentWhenActive", ctx_r26.isCurrentUrl(item_r24));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", item_r24.url ? item_r24.url : null, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("title", item_r24.title)("tabindex", item_r24.disabled ? null : "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r26.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.itemTemplate);
  }
}
function Breadcrumb_ng_template_4_a_2_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 12);
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r24.icon)("ngStyle", item_r24.iconStyle);
  }
}
function Breadcrumb_ng_template_4_a_2_ng_container_1_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r24.label);
  }
}
function Breadcrumb_ng_template_4_a_2_ng_container_1_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 17);
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r24.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function Breadcrumb_ng_template_4_a_2_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Breadcrumb_ng_template_4_a_2_ng_container_1_ng_container_2_span_1_Template, 2, 1, "span", 14)(2, Breadcrumb_ng_template_4_a_2_ng_container_1_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.escape !== false)("ngIfElse", _r55);
  }
}
function Breadcrumb_ng_template_4_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Breadcrumb_ng_template_4_a_2_ng_container_1_span_1_Template, 1, 2, "span", 9)(2, Breadcrumb_ng_template_4_a_2_ng_container_1_ng_container_2_Template, 4, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.label);
  }
}
function Breadcrumb_ng_template_4_a_2_ng_container_2_1_ng_template_0_Template(rf, ctx) {}
function Breadcrumb_ng_template_4_a_2_ng_container_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Breadcrumb_ng_template_4_a_2_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Breadcrumb_ng_template_4_a_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Breadcrumb_ng_template_4_a_2_ng_container_2_1_Template, 1, 0, null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r49.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, item_r24));
  }
}
function Breadcrumb_ng_template_4_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Breadcrumb_ng_template_4_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);
      const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r63.onClick($event, item_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Breadcrumb_ng_template_4_a_2_ng_container_1_Template, 3, 2, "ng-container", 11)(2, Breadcrumb_ng_template_4_a_2_ng_container_2_Template, 2, 4, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r24.routerLink)("queryParams", item_r24.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r24.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0))("target", item_r24.target)("fragment", item_r24.fragment)("queryParamsHandling", item_r24.queryParamsHandling)("preserveFragment", item_r24.preserveFragment)("skipLocationChange", item_r24.skipLocationChange)("replaceUrl", item_r24.replaceUrl)("state", item_r24.state)("ariaCurrentWhenActive", ctx_r27.isCurrentUrl(item_r24));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", item_r24.title)("tabindex", item_r24.disabled ? null : "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r27.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.itemTemplate);
  }
}
function Breadcrumb_ng_template_4_li_3_ChevronRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronRightIcon");
  }
}
function Breadcrumb_ng_template_4_li_3_2_ng_template_0_Template(rf, ctx) {}
function Breadcrumb_ng_template_4_li_3_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Breadcrumb_ng_template_4_li_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Breadcrumb_ng_template_4_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Breadcrumb_ng_template_4_li_3_ChevronRightIcon_1_Template, 1, 0, "ChevronRightIcon", 11)(2, Breadcrumb_ng_template_4_li_3_2_Template, 1, 0, null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r28.separatorTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r28.separatorTemplate);
  }
}
const _c3 = a0 => ({
  "p-disabled": a0
});
function Breadcrumb_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Breadcrumb_ng_template_4_a_1_Template, 3, 7, "a", 23)(2, Breadcrumb_ng_template_4_a_2_Template, 3, 17, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Breadcrumb_ng_template_4_li_3_Template, 3, 3, "li", 3);
  }
  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const end_r25 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r24.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", item_r24.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c3, item_r24.disabled))("tooltipOptions", item_r24.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", item_r24.id)("data-pc-section", "menuitem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r24.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r24.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !end_r25);
  }
}
let Breadcrumb = /*#__PURE__*/(() => {
  class Breadcrumb {
    router;
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
     * MenuItem configuration for the home icon.
     * @group Props
     */
    home;
    /**
     * Defines a string that labels the home icon for accessibility.
     * @group Props
     */
    homeAriaLabel;
    /**
     * Fired when an item is selected.
     * @param {BreadcrumbItemClickEvent} event - custom click event.
     * @group Emits
     */
    onItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    templates;
    separatorTemplate;
    itemTemplate;
    constructor(router) {
      this.router = router;
    }
    onClick(event, item) {
      if (item.disabled) {
        event.preventDefault();
        return;
      }
      if (!item.url && !item.routerLink) {
        event.preventDefault();
      }
      if (item.command) {
        item.command({
          originalEvent: event,
          item: item
        });
      }
      this.onItemClick.emit({
        originalEvent: event,
        item: item
      });
    }
    onHomeClick(event) {
      if (this.home) {
        this.onClick(event, this.home);
      }
    }
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'separator':
            this.separatorTemplate = item.template;
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
    isCurrentUrl(item) {
      const {
        routerLink
      } = item;
      const lastPath = this.router ? this.router.url : '';
      return routerLink === lastPath ? 'page' : undefined;
    }
    static ɵfac = function Breadcrumb_Factory(t) {
      return new (t || Breadcrumb)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Breadcrumb,
      selectors: [["p-breadcrumb"]],
      contentQueries: function Breadcrumb_ContentQueries(rf, ctx, dirIndex) {
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
        model: "model",
        style: "style",
        styleClass: "styleClass",
        home: "home",
        homeAriaLabel: "homeAriaLabel"
      },
      outputs: {
        onItemClick: "onItemClick"
      },
      decls: 5,
      vars: 10,
      consts: [[3, "ngStyle", "ngClass"], [1, "p-breadcrumb-list"], ["pTooltip", "", 3, "class", "ngClass", "ngStyle", "tooltipOptions", 4, "ngIf"], ["class", "p-menuitem-separator", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["pTooltip", "", 3, "ngClass", "ngStyle", "tooltipOptions"], ["class", "p-menuitem-link", 3, "href", "target", "ariaCurrentWhenActive", "click", 4, "ngIf"], ["class", "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ariaCurrentWhenActive", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", 4, "ngIf"], [1, "p-menuitem-link", 3, "href", "target", "ariaCurrentWhenActive", "click"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [3, "styleClass"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlHomeLabel", ""], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ariaCurrentWhenActive", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click"], ["htmlHomeRouteLabel", ""], [1, "p-menuitem-separator"], [4, "ngTemplateOutlet"], ["pTooltip", "", 3, "ngStyle", "ngClass", "tooltipOptions"], ["class", "p-menuitem-link", 3, "target", "ariaCurrentWhenActive", "click", 4, "ngIf"], ["class", "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "ariaCurrentWhenActive", "click", 4, "ngIf"], [1, "p-menuitem-link", 3, "target", "ariaCurrentWhenActive", "click"], ["htmlLabel", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "ariaCurrentWhenActive", "click"], ["htmlRouteLabel", ""]],
      template: function Breadcrumb_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "ol", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Breadcrumb_li_2_Template, 3, 11, "li", 2)(3, Breadcrumb_li_3_Template, 3, 3, "li", 3)(4, Breadcrumb_ng_template_4_Template, 4, 12, "ng-template", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.style)("ngClass", "p-breadcrumb p-component");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "breadcrumb")("data-pc-section", "root");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.home);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model && ctx.home);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.model);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.Tooltip, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_5__.ChevronRightIcon, primeng_icons_home__WEBPACK_IMPORTED_MODULE_6__.HomeIcon],
      styles: ["@layer primeng{.p-breadcrumb{overflow-x:auto}.p-breadcrumb .p-breadcrumb-list{margin:0;padding:0;list-style-type:none;display:flex;align-items:center;flex-wrap:nowrap}.p-breadcrumb .p-menuitem-text{line-height:1}.p-breadcrumb .p-menuitem-link{text-decoration:none;display:flex;align-items:center}.p-breadcrumb .p-menuitem-separator{display:flex;align-items:center}.p-breadcrumb::-webkit-scrollbar{display:none}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return Breadcrumb;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let BreadcrumbModule = /*#__PURE__*/(() => {
  class BreadcrumbModule {
    static ɵfac = function BreadcrumbModule_Factory(t) {
      return new (t || BreadcrumbModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BreadcrumbModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_5__.ChevronRightIcon, primeng_icons_home__WEBPACK_IMPORTED_MODULE_6__.HomeIcon, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
    });
  }
  return BreadcrumbModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-breadcrumb.mjs.map

/***/ }),

/***/ 48493:
/*!***************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-contextmenu.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextMenu: () => (/* binding */ ContextMenu),
/* harmony export */   ContextMenuModule: () => (/* binding */ ContextMenuModule),
/* harmony export */   ContextMenuSub: () => (/* binding */ ContextMenuSub)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 86825);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ 82076);
/* harmony import */ var primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/angleright */ 51239);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ 44480);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tooltip */ 33259);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 2332);
















const _c0 = ["sublist"];
function ContextMenuSub_ul_0_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 6);
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r5.getItemProp(processedItem_r3, "style"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.getSeparatorItemClass(processedItem_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r5.getItemId(processedItem_r3))("data-pc-section", "separator");
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 19);
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r14.getItemProp(processedItem_r3, "icon"))("ngStyle", ctx_r14.getItemProp(processedItem_r3, "iconStyle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "icon")("aria-hidden", true)("tabindex", -1);
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r15.getItemLabel(processedItem_r3), " ");
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 21);
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r16.getItemLabel(processedItem_r3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "label");
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r18.getItemProp(processedItem_r3, "badgeStyleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.getItemProp(processedItem_r3, "badge"));
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_AngleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleRightIcon", 25);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template(rf, ctx) {}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_AngleRightIcon_1_Template, 1, 3, "AngleRightIcon", 23)(2, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_Template, 1, 2, null, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r19.contextMenu.submenuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r19.contextMenu.submenuIconTemplate);
  }
}
const _c1 = a1 => ({
  "p-menuitem-link": true,
  "p-disabled": a1
});
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_span_1_Template, 1, 5, "span", 15)(2, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_span_2_Template, 2, 2, "span", 16)(3, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_template_3_Template, 1, 2, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(5, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_span_5_Template, 2, 2, "span", 18)(6, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_Template, 3, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", ctx_r12.getItemProp(processedItem_r3, "target"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx_r12.getItemProp(processedItem_r3, "disabled")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", ctx_r12.getItemProp(processedItem_r3, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("aria-hidden", true)("data-automationid", ctx_r12.getItemProp(processedItem_r3, "automationId"))("data-pc-section", "action")("tabindex", -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.getItemProp(processedItem_r3, "icon"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.getItemProp(processedItem_r3, "escape"))("ngIfElse", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.getItemProp(processedItem_r3, "badge"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.isItemGroup(processedItem_r3));
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 19);
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r28.getItemProp(processedItem_r3, "icon"))("ngStyle", ctx_r28.getItemProp(processedItem_r3, "iconStyle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "icon")("aria-hidden", true)("tabindex", -1);
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r29.getItemLabel(processedItem_r3), " ");
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 21);
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r30.getItemLabel(processedItem_r3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "label");
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r32.getItemProp(processedItem_r3, "badgeStyleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r32.getItemProp(processedItem_r3, "badge"));
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_AngleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleRightIcon", 25);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template(rf, ctx) {}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_AngleRightIcon_1_Template, 1, 3, "AngleRightIcon", 23)(2, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_Template, 1, 2, null, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r33.contextMenu.submenuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r33.contextMenu.submenuIconTemplate);
  }
}
const _c2 = () => ({
  exact: false
});
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_span_1_Template, 1, 5, "span", 15)(2, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_span_2_Template, 2, 2, "span", 16)(3, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_template_3_Template, 1, 2, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(5, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_span_5_Template, 2, 2, "span", 18)(6, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_Template, 3, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r13.getItemProp(processedItem_r3, "routerLink"))("queryParams", ctx_r13.getItemProp(processedItem_r3, "queryParams"))("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r13.getItemProp(processedItem_r3, "routerLinkActiveOptions") || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c2))("target", ctx_r13.getItemProp(processedItem_r3, "target"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c1, ctx_r13.getItemProp(processedItem_r3, "disabled")))("fragment", ctx_r13.getItemProp(processedItem_r3, "fragment"))("queryParamsHandling", ctx_r13.getItemProp(processedItem_r3, "queryParamsHandling"))("preserveFragment", ctx_r13.getItemProp(processedItem_r3, "preserveFragment"))("skipLocationChange", ctx_r13.getItemProp(processedItem_r3, "skipLocationChange"))("replaceUrl", ctx_r13.getItemProp(processedItem_r3, "replaceUrl"))("state", ctx_r13.getItemProp(processedItem_r3, "state"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-automationid", ctx_r13.getItemProp(processedItem_r3, "automationId"))("tabindex", -1)("aria-hidden", true)("data-pc-section", "action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.getItemProp(processedItem_r3, "icon"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.getItemProp(processedItem_r3, "escape"))("ngIfElse", _r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.getItemProp(processedItem_r3, "badge"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isItemGroup(processedItem_r3));
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_Template, 7, 14, "a", 12)(2, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_Template, 7, 24, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.getItemProp(processedItem_r3, "routerLink"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.getItemProp(processedItem_r3, "routerLink"));
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_4_1_ng_template_0_Template(rf, ctx) {}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c3 = a0 => ({
  $implicit: a0
});
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_4_1_Template, 1, 0, null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r10.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, processedItem_r3.item));
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_p_contextMenuSub_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-contextMenuSub", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemClick", function ContextMenuSub_ul_0_ng_template_2_li_1_p_contextMenuSub_5_Template_p_contextMenuSub_itemClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r46.itemClick.emit($event));
    })("itemMouseEnter", function ContextMenuSub_ul_0_ng_template_2_li_1_p_contextMenuSub_5_Template_p_contextMenuSub_itemMouseEnter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r48.onItemMouseEnter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", processedItem_r3.items)("itemTemplate", ctx_r11.itemTemplate)("menuId", ctx_r11.menuId)("visible", ctx_r11.isItemActive(processedItem_r3) && ctx_r11.isItemGroup(processedItem_r3))("activeItemPath", ctx_r11.activeItemPath)("focusedItemId", ctx_r11.focusedItemId)("level", ctx_r11.level + 1);
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7, 8)(2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContextMenuSub_ul_0_ng_template_2_li_1_Template_div_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);
      const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r50.onItemClick($event, processedItem_r3));
    })("mouseenter", function ContextMenuSub_ul_0_ng_template_2_li_1_Template_div_mouseenter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);
      const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r53.onItemMouseEnter({
        $event: $event,
        processedItem: processedItem_r3
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_Template, 3, 2, "ng-container", 10)(4, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_4_Template, 2, 4, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ContextMenuSub_ul_0_ng_template_2_li_1_p_contextMenuSub_5_Template, 1, 7, "p-contextMenuSub", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const processedItem_r3 = ctx_r55.$implicit;
    const index_r4 = ctx_r55.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r6.getItemProp(processedItem_r3, "styleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r6.getItemProp(processedItem_r3, "style"))("ngClass", ctx_r6.getItemClass(processedItem_r3))("tooltipOptions", ctx_r6.getItemProp(processedItem_r3, "tooltipOptions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r6.getItemId(processedItem_r3))("data-pc-section", "menuitem")("data-p-highlight", ctx_r6.isItemActive(processedItem_r3))("data-p-focused", ctx_r6.isItemFocused(processedItem_r3))("data-p-disabled", ctx_r6.isItemDisabled(processedItem_r3))("aria-label", ctx_r6.getItemLabel(processedItem_r3))("aria-disabled", ctx_r6.isItemDisabled(processedItem_r3) || undefined)("aria-haspopup", ctx_r6.isItemGroup(processedItem_r3) && !ctx_r6.getItemProp(processedItem_r3, "to") ? "menu" : undefined)("aria-expanded", ctx_r6.isItemGroup(processedItem_r3) ? ctx_r6.isItemActive(processedItem_r3) : undefined)("aria-level", ctx_r6.level + 1)("aria-setsize", ctx_r6.getAriaSetSize())("aria-posinset", ctx_r6.getAriaPosInset(index_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isItemVisible(processedItem_r3) && ctx_r6.isItemGroup(processedItem_r3));
  }
}
function ContextMenuSub_ul_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContextMenuSub_ul_0_ng_template_2_li_0_Template, 1, 5, "li", 4)(1, ContextMenuSub_ul_0_ng_template_2_li_1_Template, 6, 21, "li", 5);
  }
  if (rf & 2) {
    const processedItem_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isItemVisible(processedItem_r3) && ctx_r2.getItemProp(processedItem_r3, "separator"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isItemVisible(processedItem_r3) && !ctx_r2.getItemProp(processedItem_r3, "separator"));
  }
}
const _c4 = (a0, a1) => ({
  "p-submenu-list": a0,
  "p-contextmenu-root-list": a1
});
function ContextMenuSub_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@overlayAnimation.start", function ContextMenuSub_ul_0_Template_ul_animation_overlayAnimation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r56.onEnter($event, _r1));
    })("keydown", function ContextMenuSub_ul_0_Template_ul_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r58.menuKeydown.emit($event));
    })("focus", function ContextMenuSub_ul_0_Template_ul_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r59.menuFocus.emit($event));
    })("blur", function ContextMenuSub_ul_0_Template_ul_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r60.menuBlur.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContextMenuSub_ul_0_ng_template_2_Template, 2, 2, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c4, !ctx_r0.root, ctx_r0.root))("@overlayAnimation", ctx_r0.visible)("tabindex", ctx_r0.tabindex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r0.menuId + "_list")("aria-label", ctx_r0.ariaLabel)("aria-labelledBy", ctx_r0.ariaLabelledBy)("aria-activedescendant", ctx_r0.focusedItemId)("aria-orientation", "vertical")("data-pc-section", "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items);
  }
}
const _c5 = ["rootmenu"];
const _c6 = ["container"];
const _c7 = () => ({
  "p-contextmenu p-component": true,
  "p-contextmenu-overlay": true
});
const _c8 = () => ({
  value: "visible"
});
function ContextMenu_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@overlayAnimation.start", function ContextMenu_div_0_Template_div_animation_overlayAnimation_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function ContextMenu_div_0_Template_div_animation_overlayAnimation_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.onOverlayAnimationEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-contextMenuSub", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemClick", function ContextMenu_div_0_Template_p_contextMenuSub_itemClick_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onItemClick($event));
    })("menuFocus", function ContextMenu_div_0_Template_p_contextMenuSub_menuFocus_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onMenuFocus($event));
    })("menuBlur", function ContextMenu_div_0_Template_p_contextMenuSub_menuBlur_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onMenuBlur($event));
    })("menuKeydown", function ContextMenu_div_0_Template_p_contextMenuSub_menuKeydown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.onKeyDown($event));
    })("itemMouseEnter", function ContextMenu_div_0_Template_p_contextMenuSub_itemMouseEnter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.onItemMouseEnter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c7))("ngStyle", ctx_r0.style)("@overlayAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "root")("data-pc-name", "contextmenu")("id", ctx_r0.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("root", true)("items", ctx_r0.processedItems)("itemTemplate", ctx_r0.itemTemplate)("menuId", ctx_r0.id)("tabindex", !ctx_r0.disabled ? ctx_r0.tabindex : -1)("ariaLabel", ctx_r0.ariaLabel)("ariaLabelledBy", ctx_r0.ariaLabelledBy)("baseZIndex", ctx_r0.baseZIndex)("autoZIndex", ctx_r0.autoZIndex)("visible", ctx_r0.submenuVisible())("focusedItemId", ctx_r0.focused ? ctx_r0.focusedItemId : undefined)("activeItemPath", ctx_r0.activeItemPath());
  }
}
let ContextMenuSub = /*#__PURE__*/(() => {
  class ContextMenuSub {
    document;
    el;
    renderer;
    cd;
    contextMenu;
    ref;
    visible = false;
    items;
    itemTemplate;
    root = false;
    autoZIndex = true;
    baseZIndex = 0;
    popup;
    menuId;
    ariaLabel;
    ariaLabelledBy;
    level = 0;
    focusedItemId;
    activeItemPath;
    tabindex = 0;
    itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    itemMouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    menuFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    menuBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    menuKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    sublistViewChild;
    constructor(document, el, renderer, cd, contextMenu, ref) {
      this.document = document;
      this.el = el;
      this.renderer = renderer;
      this.cd = cd;
      this.contextMenu = contextMenu;
      this.ref = ref;
    }
    getItemProp(processedItem, name, params = null) {
      return processedItem && processedItem.item ? primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getItemValue(processedItem.item[name], params) : undefined;
    }
    getItemId(processedItem) {
      return processedItem.item && processedItem.item?.id ? processedItem.item.id : `${this.menuId}_${processedItem.key}`;
    }
    getItemKey(processedItem) {
      return this.getItemId(processedItem);
    }
    getItemClass(processedItem) {
      return {
        ...this.getItemProp(processedItem, 'class'),
        'p-menuitem': true,
        'p-highlight': this.isItemActive(processedItem),
        'p-menuitem-active': this.isItemActive(processedItem),
        'p-focus': this.isItemFocused(processedItem),
        'p-disabled': this.isItemDisabled(processedItem)
      };
    }
    getItemLabel(processedItem) {
      return this.getItemProp(processedItem, 'label');
    }
    getSeparatorItemClass(processedItem) {
      return {
        ...this.getItemProp(processedItem, 'class'),
        'p-menuitem-separator': true
      };
    }
    getAriaSetSize() {
      return this.items.filter(processedItem => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, 'separator')).length;
    }
    getAriaPosInset(index) {
      return index - this.items.slice(0, index).filter(processedItem => this.isItemVisible(processedItem) && this.getItemProp(processedItem, 'separator')).length + 1;
    }
    isItemVisible(processedItem) {
      return this.getItemProp(processedItem, 'visible') !== false;
    }
    isItemActive(processedItem) {
      if (this.activeItemPath) {
        return this.activeItemPath.some(path => path.key === processedItem.key);
      }
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
    onItemMouseEnter(param) {
      const {
        event,
        processedItem
      } = param;
      this.itemMouseEnter.emit({
        originalEvent: event,
        processedItem
      });
    }
    onItemClick(event, processedItem) {
      this.getItemProp(processedItem, 'command', {
        originalEvent: event,
        item: processedItem.item
      });
      this.itemClick.emit({
        originalEvent: event,
        processedItem,
        isFocus: true
      });
    }
    onEnter(event, sublist) {
      if (event.fromState === 'void' && event.toState) {
        const sublist = event.element;
        this.position(sublist);
      }
    }
    position(sublist) {
      const parentItem = sublist.parentElement.parentElement;
      const containerOffset = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOffset(sublist.parentElement.parentElement);
      const viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getViewport();
      const sublistWidth = sublist.offsetParent ? sublist.offsetWidth : primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getHiddenElementOuterWidth(sublist);
      const itemOuterWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getOuterWidth(parentItem.children[0]);
      sublist.style.top = '0px';
      if (parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth > viewport.width - primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.calculateScrollbarWidth()) {
        sublist.style.left = -1 * sublistWidth + 'px';
      } else {
        sublist.style.left = itemOuterWidth + 'px';
      }
    }
    static ɵfac = function ContextMenuSub_Factory(t) {
      return new (t || ContextMenuSub)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => ContextMenu)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContextMenuSub,
      selectors: [["p-contextMenuSub"]],
      viewQuery: function ContextMenuSub_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sublistViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        visible: "visible",
        items: "items",
        itemTemplate: "itemTemplate",
        root: "root",
        autoZIndex: "autoZIndex",
        baseZIndex: "baseZIndex",
        popup: "popup",
        menuId: "menuId",
        ariaLabel: "ariaLabel",
        ariaLabelledBy: "ariaLabelledBy",
        level: "level",
        focusedItemId: "focusedItemId",
        activeItemPath: "activeItemPath",
        tabindex: "tabindex"
      },
      outputs: {
        itemClick: "itemClick",
        itemMouseEnter: "itemMouseEnter",
        menuFocus: "menuFocus",
        menuBlur: "menuBlur",
        menuKeydown: "menuKeydown"
      },
      decls: 1,
      vars: 1,
      consts: [["role", "menu", 3, "ngClass", "tabindex", "keydown", "focus", "blur", 4, "ngIf"], ["role", "menu", 3, "ngClass", "tabindex", "keydown", "focus", "blur"], ["sublist", ""], ["ngFor", "", 3, "ngForOf"], ["role", "separator", 3, "style", "ngClass", 4, "ngIf"], ["role", "menuitem", "pTooltip", "", 3, "ngStyle", "ngClass", "class", "tooltipOptions", 4, "ngIf"], ["role", "separator", 3, "ngClass"], ["role", "menuitem", "pTooltip", "", 3, "ngStyle", "ngClass", "tooltipOptions"], ["listItem", ""], [1, "p-menuitem-content", 3, "click", "mouseenter"], [4, "ngIf"], [3, "items", "itemTemplate", "menuId", "visible", "activeItemPath", "focusedItemId", "level", "itemClick", "itemMouseEnter", 4, "ngIf"], ["pRipple", "", 3, "target", "ngClass", 4, "ngIf"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["pRipple", "", 3, "target", "ngClass"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [3, "styleClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "items", "itemTemplate", "menuId", "visible", "activeItemPath", "focusedItemId", "level", "itemClick", "itemMouseEnter"]],
      template: function ContextMenuSub_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContextMenuSub_ul_0_Template, 3, 13, "ul", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.root ? true : ctx.visible);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.Ripple, primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__.Tooltip, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_7__.AngleRightIcon, ContextMenuSub],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('overlayAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 0
        })]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 0
        })])])]
      }
    });
  }
  return ContextMenuSub;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * ContextMenu displays an overlay menu on right click of its target. Note that components like Table has special integration with ContextMenu.
 * @group Components
 */
let ContextMenu = /*#__PURE__*/(() => {
  class ContextMenu {
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
    set model(value) {
      this._model = value;
      this._processedItems = this.createProcessedItems(this._model || []);
    }
    get model() {
      return this._model;
    }
    /**
     * Event for which the menu must be displayed.
     * @group Props
     */
    triggerEvent = 'contextmenu';
    /**
     * Local template variable name of the element to attach the context menu.
     * @group Props
     */
    target;
    /**
     * Attaches the menu to document instead of a particular item.
     * @group Props
     */
    global;
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
     * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element.
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
     * Current id state as a string.
     * @group Props
     */
    id;
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
     * Press delay in touch devices as miliseconds.
     * @group Props
     */
    pressDelay = 500;
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
    templates;
    rootmenu;
    containerViewChild;
    submenuIconTemplate;
    itemTemplate;
    container;
    outsideClickListener;
    resizeListener;
    triggerEventListener;
    documentClickListener;
    documentTriggerListener;
    touchEndListener;
    pageX;
    pageY;
    visible = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
    relativeAlign;
    window;
    focused = false;
    activeItemPath = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
    focusedItemInfo = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)({
      index: -1,
      level: 0,
      parentKey: '',
      item: null
    });
    submenuVisible = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false);
    searchValue = '';
    searchTimeout;
    _processedItems;
    _model;
    pressTimer;
    get visibleItems() {
      const processedItem = this.activeItemPath().find(p => p.key === this.focusedItemInfo().parentKey);
      return processedItem ? processedItem.items : this.processedItems;
    }
    get processedItems() {
      if (!this._processedItems || !this._processedItems.length) {
        this._processedItems = this.createProcessedItems(this.model || []);
      }
      return this._processedItems;
    }
    get focusedItemId() {
      const focusedItem = this.focusedItemInfo();
      return focusedItem.item && focusedItem.item?.id ? focusedItem.item.id : focusedItem.index !== -1 ? `${this.id}${primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(focusedItem.parentKey) ? '_' + focusedItem.parentKey : ''}_${focusedItem.index}` : null;
    }
    constructor(document, platformId, el, renderer, cd, config, overlayService) {
      this.document = document;
      this.platformId = platformId;
      this.el = el;
      this.renderer = renderer;
      this.cd = cd;
      this.config = config;
      this.overlayService = overlayService;
      this.window = this.document.defaultView;
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
        const path = this.activeItemPath();
        if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(path)) {
          this.bindGlobalListeners();
        } else if (!this.visible()) {
          this.unbindGlobalListeners();
        }
      });
    }
    ngOnInit() {
      this.id = this.id || (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)();
      this.bindTriggerEventListener();
    }
    isMobile() {
      return primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.isIOS() || primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.isAndroid();
    }
    bindTriggerEventListener() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
        if (!this.triggerEventListener) {
          if (!this.isMobile()) {
            if (this.global) {
              this.triggerEventListener = this.renderer.listen(this.document, this.triggerEvent, event => {
                this.show(event);
              });
            } else if (this.target) {
              this.triggerEventListener = this.renderer.listen(this.target, this.triggerEvent, event => {
                this.show(event);
              });
            }
          } else {
            if (this.global) {
              this.triggerEventListener = this.renderer.listen(this.document, 'touchstart', this.onTouchStart.bind(this));
              this.touchEndListener = this.renderer.listen(this.document, 'touchend', this.onTouchEnd.bind(this));
            } else if (this.target) {
              this.triggerEventListener = this.renderer.listen(this.target, 'touchstart', this.onTouchStart.bind(this));
              this.touchEndListener = this.renderer.listen(this.target, 'touchend', this.onTouchEnd.bind(this));
            }
          }
        }
      }
    }
    bindGlobalListeners() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
        if (!this.documentClickListener) {
          const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
          this.documentClickListener = this.renderer.listen(documentTarget, 'click', event => {
            if (this.containerViewChild.nativeElement.offsetParent && this.isOutsideClicked(event) && !event.ctrlKey && event.button !== 2 && this.triggerEvent !== 'click') {
              this.hide();
            }
          });
          this.documentTriggerListener = this.renderer.listen(documentTarget, this.triggerEvent, event => {
            if (this.containerViewChild.nativeElement.offsetParent && this.isOutsideClicked(event)) {
              this.hide();
            }
          });
        }
        if (!this.resizeListener) {
          this.resizeListener = this.renderer.listen(this.document.defaultView, 'resize', event => {
            this.hide();
          });
        }
      }
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
    createProcessedItems(items, level = 0, parent = {}, parentKey = '') {
      const processedItems = [];
      items && items.forEach((item, index) => {
        const key = (parentKey !== '' ? parentKey + '_' : '') + index;
        const newItem = {
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
    getItemProp(item, name) {
      return item ? primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getItemValue(item[name]) : undefined;
    }
    getProccessedItemLabel(processedItem) {
      return processedItem ? this.getItemLabel(processedItem.item) : undefined;
    }
    getItemLabel(item) {
      return this.getItemProp(item, 'label');
    }
    isProcessedItemGroup(processedItem) {
      return processedItem && primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(processedItem.items);
    }
    isSelected(processedItem) {
      return this.activeItemPath().some(p => p.key === processedItem.key);
    }
    isValidSelectedItem(processedItem) {
      return this.isValidItem(processedItem) && this.isSelected(processedItem);
    }
    isValidItem(processedItem) {
      return !!processedItem && !this.isItemDisabled(processedItem.item) && !this.isItemSeparator(processedItem.item);
    }
    isItemDisabled(item) {
      return this.getItemProp(item, 'disabled');
    }
    isItemSeparator(item) {
      return this.getItemProp(item, 'separator');
    }
    isItemMatched(processedItem) {
      return this.isValidItem(processedItem) && this.getProccessedItemLabel(processedItem).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase());
    }
    isProccessedItemGroup(processedItem) {
      return processedItem && primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(processedItem.items);
    }
    onItemClick(event) {
      const {
        processedItem
      } = event;
      const grouped = this.isProcessedItemGroup(processedItem);
      const selected = this.isSelected(processedItem);
      if (selected) {
        const {
          index,
          key,
          level,
          parentKey,
          item
        } = processedItem;
        this.activeItemPath.set(this.activeItemPath().filter(p => key !== p.key && key.startsWith(p.key)));
        this.focusedItemInfo.set({
          index,
          level,
          parentKey,
          item
        });
        primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.focus(this.rootmenu.sublistViewChild.nativeElement);
      } else {
        grouped ? this.onItemChange(event) : this.hide();
      }
    }
    onItemMouseEnter(event) {
      this.onItemChange(event);
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
          this.onEscapeKey(event);
          break;
        case 'Tab':
          this.onTabKey(event);
          break;
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
      const itemIndex = this.focusedItemInfo().index !== -1 ? this.findNextItemIndex(this.focusedItemInfo().index) : this.findFirstFocusedItemIndex();
      this.changeFocusedItemIndex(event, itemIndex);
      event.preventDefault();
    }
    onArrowRightKey(event) {
      const processedItem = this.visibleItems[this.focusedItemInfo().index];
      const grouped = this.isProccessedItemGroup(processedItem);
      if (grouped) {
        this.onItemChange({
          originalEvent: event,
          processedItem
        });
        this.focusedItemInfo.set({
          index: -1,
          parentKey: processedItem.key,
          item: processedItem.item
        });
        this.searchValue = '';
        this.onArrowDownKey(event);
      }
      event.preventDefault();
    }
    onArrowUpKey(event) {
      if (event.altKey) {
        if (this.focusedItemInfo().index !== -1) {
          const processedItem = this.visibleItems[this.focusedItemInfo().index];
          const grouped = this.isProccessedItemGroup(processedItem);
          !grouped && this.onItemChange({
            originalEvent: event,
            processedItem
          });
        }
        this.hide();
        event.preventDefault();
      } else {
        const itemIndex = this.focusedItemInfo().index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo().index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(event, itemIndex);
        event.preventDefault();
      }
    }
    onArrowLeftKey(event) {
      const processedItem = this.visibleItems[this.focusedItemInfo().index];
      const parentItem = this.activeItemPath().find(p => p.key === processedItem.parentKey);
      const root = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isEmpty(processedItem.parent);
      if (!root) {
        this.focusedItemInfo.set({
          index: -1,
          parentKey: parentItem ? parentItem.parentKey : '',
          item: processedItem.item
        });
        this.searchValue = '';
        this.onArrowDownKey(event);
      }
      const activeItemPath = this.activeItemPath().filter(p => p.parentKey !== this.focusedItemInfo().parentKey);
      this.activeItemPath.set(activeItemPath);
      event.preventDefault();
    }
    onHomeKey(event) {
      this.changeFocusedItemIndex(event, this.findFirstItemIndex());
      event.preventDefault();
    }
    onEndKey(event) {
      this.changeFocusedItemIndex(event, this.findLastItemIndex());
      event.preventDefault();
    }
    onSpaceKey(event) {
      this.onEnterKey(event);
    }
    onEscapeKey(event) {
      this.hide();
      const processedItem = this.findVisibleItem(this.findFirstFocusedItemIndex());
      const focusedItemInfo = this.focusedItemInfo();
      this.focusedItemInfo.set({
        ...focusedItemInfo,
        index: this.findFirstFocusedItemIndex(),
        item: processedItem.item
      });
      event.preventDefault();
    }
    onTabKey(event) {
      if (this.focusedItemInfo().index !== -1) {
        const processedItem = this.visibleItems[this.focusedItemInfo().index];
        const grouped = this.isProccessedItemGroup(processedItem);
        !grouped && this.onItemChange({
          originalEvent: event,
          processedItem
        });
      }
      this.hide();
    }
    onEnterKey(event) {
      if (this.focusedItemInfo().index !== -1) {
        const element = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.findSingle(this.rootmenu.el.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
        const anchorElement = element && primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.findSingle(element, 'a[data-pc-section="action"]');
        anchorElement ? anchorElement.click() : element && element.click();
        const processedItem = this.visibleItems[this.focusedItemInfo().index];
        const grouped = this.isProccessedItemGroup(processedItem);
        if (!grouped) {
          const focusedItemInfo = this.focusedItemInfo();
          this.focusedItemInfo.set({
            ...focusedItemInfo,
            index: this.findFirstFocusedItemIndex()
          });
        }
      }
      event.preventDefault();
    }
    onItemChange(event) {
      const {
        processedItem,
        isFocus
      } = event;
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isEmpty(processedItem)) return;
      const {
        index,
        key,
        level,
        parentKey,
        items
      } = processedItem;
      const grouped = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(items);
      const activeItemPath = this.activeItemPath().filter(p => p.parentKey !== parentKey && p.parentKey !== key);
      if (grouped) {
        activeItemPath.push(processedItem);
        this.submenuVisible.set(true);
      }
      this.focusedItemInfo.set({
        index,
        level,
        parentKey,
        item: processedItem.item
      });
      this.activeItemPath.set(activeItemPath);
      isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.focus(this.rootmenu.sublistViewChild.nativeElement);
    }
    onMenuFocus(event) {
      this.focused = true;
      const focusedItemInfo = this.focusedItemInfo().index !== -1 ? this.focusedItemInfo() : {
        index: -1,
        level: 0,
        parentKey: '',
        item: null
      };
      this.focusedItemInfo.set(focusedItemInfo);
    }
    onMenuBlur(event) {
      this.focused = false;
      this.focusedItemInfo.set({
        index: -1,
        level: 0,
        parentKey: '',
        item: null
      });
      this.searchValue = '';
    }
    onOverlayAnimationStart(event) {
      switch (event.toState) {
        case 'visible':
          this.container = event.element;
          this.position();
          this.moveOnTop();
          this.appendOverlay();
          this.bindGlobalListeners();
          this.onShow.emit();
          primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.focus(this.rootmenu.sublistViewChild.nativeElement);
          break;
      }
    }
    onOverlayAnimationEnd(event) {
      switch (event.toState) {
        case 'void':
          this.onOverlayHide();
          break;
      }
    }
    appendOverlay() {
      if (this.appendTo) {
        if (this.appendTo === 'body') this.renderer.appendChild(this.document.body, this.containerViewChild.nativeElement);else primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.appendChild(this.containerViewChild.nativeElement, this.appendTo);
      }
    }
    moveOnTop() {
      if (this.autoZIndex && this.containerViewChild) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ZIndexUtils.set('menu', this.containerViewChild.nativeElement, this.baseZIndex + this.config.zIndex.menu);
      }
    }
    onOverlayHide() {
      this.unbindGlobalListeners();
      if (!this.cd.destroyed) {
        this.target = null;
      }
      if (this.container && this.autoZIndex) {
        primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ZIndexUtils.clear(this.container);
      }
      this.container = null;
      this.onHide.emit();
    }
    onTouchStart(event) {
      this.pressTimer = setTimeout(() => {
        this.show(event);
      }, this.pressDelay);
    }
    onTouchEnd() {
      clearTimeout(this.pressTimer);
    }
    hide() {
      this.visible.set(false);
      this.activeItemPath.set([]);
      this.focusedItemInfo.set({
        index: -1,
        level: 0,
        parentKey: '',
        item: null
      });
    }
    toggle(event) {
      this.visible() ? this.hide() : this.show(event);
    }
    show(event) {
      this.activeItemPath.set([]);
      this.focusedItemInfo.set({
        index: -1,
        level: 0,
        parentKey: '',
        item: null
      });
      this.pageX = event.pageX;
      this.pageY = event.pageY;
      this.visible() ? this.position() : this.visible.set(true);
      event.stopPropagation();
      event.preventDefault();
    }
    position() {
      let left = this.pageX + 1;
      let top = this.pageY + 1;
      let width = this.containerViewChild.nativeElement.offsetParent ? this.containerViewChild.nativeElement.offsetWidth : primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getHiddenElementOuterWidth(this.containerViewChild.nativeElement);
      let height = this.containerViewChild.nativeElement.offsetParent ? this.containerViewChild.nativeElement.offsetHeight : primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getHiddenElementOuterHeight(this.containerViewChild.nativeElement);
      let viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.getViewport();
      //flip
      if (left + width - this.document.scrollingElement.scrollLeft > viewport.width) {
        left -= width;
      }
      //flip
      if (top + height - this.document.scrollingElement.scrollTop > viewport.height) {
        top -= height;
      }
      //fit
      if (left < this.document.scrollingElement.scrollLeft) {
        left = this.document.scrollingElement.scrollLeft;
      }
      //fit
      if (top < this.document.scrollingElement.scrollTop) {
        top = this.document.scrollingElement.scrollTop;
      }
      this.containerViewChild.nativeElement.style.left = left + 'px';
      this.containerViewChild.nativeElement.style.top = top + 'px';
    }
    searchItems(event, char) {
      this.searchValue = (this.searchValue || '') + char;
      let itemIndex = -1;
      let matched = false;
      if (this.focusedItemInfo().index !== -1) {
        itemIndex = this.visibleItems.slice(this.focusedItemInfo().index).findIndex(processedItem => this.isItemMatched(processedItem));
        itemIndex = itemIndex === -1 ? this.visibleItems.slice(0, this.focusedItemInfo().index).findIndex(processedItem => this.isItemMatched(processedItem)) : itemIndex + this.focusedItemInfo().index;
      } else {
        itemIndex = this.visibleItems.findIndex(processedItem => this.isItemMatched(processedItem));
      }
      if (itemIndex !== -1) {
        matched = true;
      }
      if (itemIndex === -1 && this.focusedItemInfo().index === -1) {
        itemIndex = this.findFirstFocusedItemIndex();
      }
      if (itemIndex !== -1) {
        this.changeFocusedItemIndex(event, itemIndex);
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
    findVisibleItem(index) {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.visibleItems) ? this.visibleItems[index] : null;
    }
    findLastFocusedItemIndex() {
      const selectedIndex = this.findSelectedItemIndex();
      return selectedIndex < 0 ? this.findLastItemIndex() : selectedIndex;
    }
    findLastItemIndex() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findLastIndex(this.visibleItems, processedItem => this.isValidItem(processedItem));
    }
    findPrevItemIndex(index) {
      const matchedItemIndex = index > 0 ? primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findLastIndex(this.visibleItems.slice(0, index), processedItem => this.isValidItem(processedItem)) : -1;
      return matchedItemIndex > -1 ? matchedItemIndex : index;
    }
    findNextItemIndex(index) {
      const matchedItemIndex = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).findIndex(processedItem => this.isValidItem(processedItem)) : -1;
      return matchedItemIndex > -1 ? matchedItemIndex + index + 1 : index;
    }
    findFirstFocusedItemIndex() {
      const selectedIndex = this.findSelectedItemIndex();
      return selectedIndex < 0 ? this.findFirstItemIndex() : selectedIndex;
    }
    findFirstItemIndex() {
      return this.visibleItems.findIndex(processedItem => this.isValidItem(processedItem));
    }
    findSelectedItemIndex() {
      return this.visibleItems.findIndex(processedItem => this.isValidSelectedItem(processedItem));
    }
    changeFocusedItemIndex(event, index) {
      const processedItem = this.findVisibleItem(index);
      const focusedItemInfo = this.focusedItemInfo();
      if (focusedItemInfo.index !== index) {
        this.focusedItemInfo.set({
          ...focusedItemInfo,
          index,
          item: processedItem.item
        });
        this.scrollInView();
      }
    }
    scrollInView(index = -1) {
      const id = index !== -1 ? `${this.id}_${index}` : this.focusedItemId;
      const element = primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.findSingle(this.rootmenu.el.nativeElement, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: 'nearest',
          inline: 'nearest'
        });
      }
    }
    bindResizeListener() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.isPlatformBrowser)(this.platformId)) {
        if (!this.resizeListener) {
          this.resizeListener = this.renderer.listen(this.document.defaultView, 'resize', event => {
            this.hide();
          });
        }
      }
    }
    isOutsideClicked(event) {
      return !(this.containerViewChild.nativeElement.isSameNode(event.target) || this.containerViewChild.nativeElement.contains(event.target));
    }
    unbindResizeListener() {
      if (this.resizeListener) {
        this.resizeListener();
        this.resizeListener = null;
      }
    }
    unbindGlobalListeners() {
      if (this.documentClickListener) {
        this.documentClickListener();
        this.documentClickListener = null;
      }
      if (this.documentTriggerListener) {
        this.documentTriggerListener();
        this.documentTriggerListener = null;
      }
      if (this.resizeListener) {
        this.resizeListener();
        this.resizeListener = null;
      }
      if (this.touchEndListener) {
        this.touchEndListener();
        this.touchEndListener = null;
      }
    }
    unbindTriggerEventListener() {
      if (this.triggerEventListener) {
        this.triggerEventListener();
        this.triggerEventListener = null;
      }
    }
    removeAppendedElements() {
      if (this.appendTo) {
        if (this.appendTo === 'body') {
          if (this.containerViewChild) {
            this.renderer.removeChild(this.document.body, this.containerViewChild.nativeElement);
          }
        } else {
          primeng_dom__WEBPACK_IMPORTED_MODULE_2__.DomHandler.removeChild(this.containerViewChild.nativeElement, this.appendTo);
        }
      }
    }
    ngOnDestroy() {
      this.unbindGlobalListeners();
      this.unbindTriggerEventListener();
      this.removeAppendedElements();
    }
    static ɵfac = function ContextMenu_Factory(t) {
      return new (t || ContextMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.OverlayService));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContextMenu,
      selectors: [["p-contextMenu"]],
      contentQueries: function ContextMenu_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function ContextMenu_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rootmenu = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        model: "model",
        triggerEvent: "triggerEvent",
        target: "target",
        global: "global",
        style: "style",
        styleClass: "styleClass",
        appendTo: "appendTo",
        autoZIndex: "autoZIndex",
        baseZIndex: "baseZIndex",
        id: "id",
        ariaLabel: "ariaLabel",
        ariaLabelledBy: "ariaLabelledBy",
        pressDelay: "pressDelay"
      },
      outputs: {
        onShow: "onShow",
        onHide: "onHide"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "ngClass", "class", "ngStyle", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["container", ""], [3, "root", "items", "itemTemplate", "menuId", "tabindex", "ariaLabel", "ariaLabelledBy", "baseZIndex", "autoZIndex", "visible", "focusedItemId", "activeItemPath", "itemClick", "menuFocus", "menuBlur", "menuKeydown", "itemMouseEnter"], ["rootmenu", ""]],
      template: function ContextMenu_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContextMenu_div_0_Template, 4, 22, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.visible());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, ContextMenuSub],
      styles: ["@layer primeng{.p-contextmenu{position:absolute}.p-contextmenu ul{margin:0;padding:0;list-style:none}.p-contextmenu .p-submenu-list{position:absolute;min-width:100%;z-index:1}.p-contextmenu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-contextmenu .p-menuitem-text{line-height:1}.p-contextmenu .p-menuitem{position:relative}.p-contextmenu .p-menuitem-link .p-submenu-icon:not(svg){margin-left:auto}.p-contextmenu .p-menuitem-link .p-icon-wrapper{margin-left:auto}}\n"],
      encapsulation: 2,
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('overlayAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 0
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('250ms')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('.1s linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 0
        }))])])]
      },
      changeDetection: 0
    });
  }
  return ContextMenu;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ContextMenuModule = /*#__PURE__*/(() => {
  class ContextMenuModule {
    static ɵfac = function ContextMenuModule_Factory(t) {
      return new (t || ContextMenuModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ContextMenuModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__.RippleModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__.TooltipModule, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_7__.AngleRightIcon, primeng_api__WEBPACK_IMPORTED_MODULE_9__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_9__.SharedModule]
    });
  }
  return ContextMenuModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-contextmenu.mjs.map

/***/ }),

/***/ 81740:
/*!************************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-megamenu.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MegaMenu: () => (/* binding */ MegaMenu),
/* harmony export */   MegaMenuModule: () => (/* binding */ MegaMenuModule),
/* harmony export */   MegaMenuSub: () => (/* binding */ MegaMenuSub)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dom */ 82076);
/* harmony import */ var primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/icons/angledown */ 47273);
/* harmony import */ var primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/icons/angleright */ 51239);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/ripple */ 44480);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tooltip */ 33259);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/utils */ 2332);
















const _c0 = ["menubar"];
function MegaMenuSub_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r1.getItemProp(ctx_r1.submenu, "style"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.getSubmenuHeaderClass(ctx_r1.submenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getItemLabel(ctx_r1.submenu));
  }
}
function MegaMenuSub_ng_template_3_li_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 7);
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r5.getItemProp(processedItem_r3, "style"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.getSeparatorItemClass(processedItem_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r5.getItemId(processedItem_r3))("data-pc-section", "separator");
  }
}
function MegaMenuSub_ng_template_3_li_1_ng_container_3_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 20);
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r14.getItemProp(processedItem_r3, "icon"))("ngStyle", ctx_r14.getItemProp(processedItem_r3, "iconStyle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "icon")("aria-hidden", true)("tabindex", -1);
  }
}
function MegaMenuSub_ng_template_3_li_1_ng_container_3_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r15.getItemLabel(processedItem_r3), " ");
  }
}
function MegaMenuSub_ng_template_3_li_1_ng_container_3_a_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 22);
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r16.getItemLabel(processedItem_r3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "label");
  }
}
function MegaMenuSub_ng_template_3_li_1_ng_container_3_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r18.getItemProp(processedItem_r3, "badgeStyleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.getItemProp(processedItem_r3, "badge"));
  }
}
function MegaMenuSub_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDownIcon", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function MegaMenuSub_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleRightIcon", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function MegaMenuSub_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MegaMenuSub_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_AngleDownIcon_1_Template, 1, 3, "AngleDownIcon", 25)(2, MegaMenuSub_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_AngleRightIcon_2_Template, 1, 3, "AngleRightIcon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.orientation === "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.orientation === "vertical");
  }
}
function MegaMenuSub_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template(rf, ctx) {}
function MegaMenuSub_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MegaMenuSub_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function MegaMenuSub_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MegaMenuSub_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Template, 3, 2, "ng-container", 11)(2, MegaMenuSub_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_2_Template, 1, 2, null, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r19.megaMenu.submenuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r19.megaMenu.submenuIconTemplate);
  }
}
const _c1 = a1 => ({
  "p-menuitem-link": true,
  "p-disabled": a1
});
function MegaMenuSub_ng_template_3_li_1_ng_container_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MegaMenuSub_ng_template_3_li_1_ng_container_3_a_1_span_1_Template, 1, 5, "span", 16)(2, MegaMenuSub_ng_template_3_li_1_ng_container_3_a_1_span_2_Template, 2, 2, "span", 17)(3, MegaMenuSub_ng_template_3_li_1_ng_container_3_a_1_ng_template_3_Template, 1, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(5, MegaMenuSub_ng_template_3_li_1_ng_container_3_a_1_span_5_Template, 2, 2, "span", 19)(6, MegaMenuSub_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_Template, 3, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", ctx_r12.getItemProp(processedItem_r3, "target"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx_r12.getItemProp(processedItem_r3, "disabled")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", ctx_r12.getItemProp(processedItem_r3, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("aria-hidden", true)("data-automationid", ctx_r12.getItemProp(processedItem_r3, "automationId"))("data-pc-section", "action")("tabindex", -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.getItemProp(processedItem_r3, "icon"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.getItemProp(processedItem_r3, "escape"))("ngIfElse", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.getItemProp(processedItem_r3, "badge"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.isItemGroup(processedItem_r3));
  }
}
function MegaMenuSub_ng_template_3_li_1_ng_container_3_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 20);
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r30.getItemProp(processedItem_r3, "icon"))("ngStyle", ctx_r30.getItemProp(processedItem_r3, "iconStyle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "icon")("aria-hidden", true)("tabindex", -1);
  }
}
function MegaMenuSub_ng_template_3_li_1_ng_container_3_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r31.getItemLabel(processedItem_r3));
  }
}
function MegaMenuSub_ng_template_3_li_1_ng_container_3_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 22);
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r32.getItemLabel(processedItem_r3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "label");
  }
}
function MegaMenuSub_ng_template_3_li_1_ng_container_3_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r34.getItemProp(processedItem_r3, "badgeStyleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r34.getItemProp(processedItem_r3, "badge"));
  }
}
function MegaMenuSub_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleDownIcon", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function MegaMenuSub_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "AngleRightIcon", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styleClass", "p-submenu-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function MegaMenuSub_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MegaMenuSub_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_AngleDownIcon_1_Template, 1, 3, "AngleDownIcon", 25)(2, MegaMenuSub_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_AngleRightIcon_2_Template, 1, 3, "AngleRightIcon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.orientation === "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r40.orientation === "vertical");
  }
}
function MegaMenuSub_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template(rf, ctx) {}
function MegaMenuSub_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MegaMenuSub_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function MegaMenuSub_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MegaMenuSub_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_Template, 3, 2, "ng-container", 11)(2, MegaMenuSub_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_2_Template, 1, 2, null, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r35.megaMenu.submenuIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r35.megaMenu.submenuIconTemplate);
  }
}
const _c2 = () => ({
  exact: false
});
function MegaMenuSub_ng_template_3_li_1_ng_container_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MegaMenuSub_ng_template_3_li_1_ng_container_3_a_2_span_1_Template, 1, 5, "span", 16)(2, MegaMenuSub_ng_template_3_li_1_ng_container_3_a_2_span_2_Template, 2, 1, "span", 17)(3, MegaMenuSub_ng_template_3_li_1_ng_container_3_a_2_ng_template_3_Template, 1, 2, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(5, MegaMenuSub_ng_template_3_li_1_ng_container_3_a_2_span_5_Template, 2, 2, "span", 19)(6, MegaMenuSub_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_Template, 3, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r13.getItemProp(processedItem_r3, "routerLink"))("queryParams", ctx_r13.getItemProp(processedItem_r3, "queryParams"))("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r13.getItemProp(processedItem_r3, "routerLinkActiveOptions") || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c2))("target", ctx_r13.getItemProp(processedItem_r3, "target"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c1, ctx_r13.getItemProp(processedItem_r3, "disabled")))("fragment", ctx_r13.getItemProp(processedItem_r3, "fragment"))("queryParamsHandling", ctx_r13.getItemProp(processedItem_r3, "queryParamsHandling"))("preserveFragment", ctx_r13.getItemProp(processedItem_r3, "preserveFragment"))("skipLocationChange", ctx_r13.getItemProp(processedItem_r3, "skipLocationChange"))("replaceUrl", ctx_r13.getItemProp(processedItem_r3, "replaceUrl"))("state", ctx_r13.getItemProp(processedItem_r3, "state"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-automationid", ctx_r13.getItemProp(processedItem_r3, "automationId"))("tabindex", -1)("aria-hidden", true)("data-pc-section", "action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.getItemProp(processedItem_r3, "icon"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.getItemProp(processedItem_r3, "escape"))("ngIfElse", _r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.getItemProp(processedItem_r3, "badge"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.isItemGroup(processedItem_r3));
  }
}
function MegaMenuSub_ng_template_3_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MegaMenuSub_ng_template_3_li_1_ng_container_3_a_1_Template, 7, 14, "a", 13)(2, MegaMenuSub_ng_template_3_li_1_ng_container_3_a_2_Template, 7, 24, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.getItemProp(processedItem_r3, "routerLink"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.getItemProp(processedItem_r3, "routerLink"));
  }
}
function MegaMenuSub_ng_template_3_li_1_ng_container_4_1_ng_template_0_Template(rf, ctx) {}
function MegaMenuSub_ng_template_3_li_1_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MegaMenuSub_ng_template_3_li_1_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
const _c3 = a0 => ({
  $implicit: a0
});
function MegaMenuSub_ng_template_3_li_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MegaMenuSub_ng_template_3_li_1_ng_container_4_1_Template, 1, 0, null, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r10.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, processedItem_r3.item));
  }
}
function MegaMenuSub_ng_template_3_li_1_div_5_div_2_p_megaMenuSub_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-megaMenuSub", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemClick", function MegaMenuSub_ng_template_3_li_1_div_5_div_2_p_megaMenuSub_1_Template_p_megaMenuSub_itemClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r54.itemClick.emit($event));
    })("itemMouseEnter", function MegaMenuSub_ng_template_3_li_1_div_5_div_2_p_megaMenuSub_1_Template_p_megaMenuSub_itemMouseEnter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r56.onItemMouseEnter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const submenu_r53 = ctx.$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r52.getSubListId(submenu_r53))("submenu", submenu_r53)("items", submenu_r53.items)("itemTemplate", ctx_r52.itemTemplate)("menuId", ctx_r52.menuId)("focusedItemId", ctx_r52.focusedItemId)("level", ctx_r52.level + 1)("root", false);
  }
}
function MegaMenuSub_ng_template_3_li_1_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MegaMenuSub_ng_template_3_li_1_div_5_div_2_p_megaMenuSub_1_Template, 1, 8, "p-megaMenuSub", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r51 = ctx.$implicit;
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r50.getColumnClass(processedItem_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", col_r51);
  }
}
function MegaMenuSub_ng_template_3_li_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MegaMenuSub_ng_template_3_li_1_div_5_div_2_Template, 2, 2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", processedItem_r3.items);
  }
}
function MegaMenuSub_ng_template_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8, 9)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MegaMenuSub_ng_template_3_li_1_Template_div_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);
      const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r59.onItemClick($event, processedItem_r3));
    })("mouseenter", function MegaMenuSub_ng_template_3_li_1_Template_div_mouseenter_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61);
      const processedItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r62.onItemMouseEnter({
        $event: $event,
        processedItem: processedItem_r3
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MegaMenuSub_ng_template_3_li_1_ng_container_3_Template, 3, 2, "ng-container", 11)(4, MegaMenuSub_ng_template_3_li_1_ng_container_4_Template, 2, 4, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MegaMenuSub_ng_template_3_li_1_div_5_Template, 3, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const processedItem_r3 = ctx_r64.$implicit;
    const index_r4 = ctx_r64.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r6.getItemProp(processedItem_r3, "styleClass"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r6.getItemProp(processedItem_r3, "style"))("ngClass", ctx_r6.getItemClass(processedItem_r3))("tooltipOptions", ctx_r6.getItemProp(processedItem_r3, "tooltipOptions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r6.getItemId(processedItem_r3))("data-pc-section", "menuitem")("data-p-highlight", ctx_r6.isItemActive(processedItem_r3))("data-p-focused", ctx_r6.isItemFocused(processedItem_r3))("data-p-disabled", ctx_r6.isItemDisabled(processedItem_r3))("aria-label", ctx_r6.getItemLabel(processedItem_r3))("aria-disabled", ctx_r6.isItemDisabled(processedItem_r3) || undefined)("aria-haspopup", ctx_r6.isItemGroup(processedItem_r3) && !ctx_r6.getItemProp(processedItem_r3, "to") ? "menu" : undefined)("aria-expanded", ctx_r6.isItemGroup(processedItem_r3) ? ctx_r6.isItemActive(processedItem_r3) : undefined)("aria-level", ctx_r6.level + 1)("aria-setsize", ctx_r6.getAriaSetSize())("aria-posinset", ctx_r6.getAriaPosInset(index_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r6.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isItemVisible(processedItem_r3) && ctx_r6.isItemGroup(processedItem_r3));
  }
}
function MegaMenuSub_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MegaMenuSub_ng_template_3_li_0_Template, 1, 5, "li", 5)(1, MegaMenuSub_ng_template_3_li_1_Template, 6, 21, "li", 6);
  }
  if (rf & 2) {
    const processedItem_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isItemVisible(processedItem_r3) && ctx_r2.getItemProp(processedItem_r3, "separator"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isItemVisible(processedItem_r3) && !ctx_r2.getItemProp(processedItem_r3, "separator"));
  }
}
const _c4 = (a0, a1) => ({
  "p-megamenu-root-list": a0,
  "p-submenu-list p-megamenu-submenu": a1
});
const _c5 = ["menubutton"];
const _c6 = ["rootmenu"];
function MegaMenu_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MegaMenu_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MegaMenu_div_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.startTemplate);
  }
}
function MegaMenu_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
function MegaMenu_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MegaMenu_div_4_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.endTemplate);
  }
}
function MegaMenu_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c7 = (a1, a2) => ({
  "p-megamenu p-component": true,
  "p-megamenu-horizontal": a1,
  "p-megamenu-vertical": a2
});
const _c8 = ["*"];
let MegaMenuSub = /*#__PURE__*/(() => {
  class MegaMenuSub {
    el;
    megaMenu;
    id;
    items;
    itemTemplate;
    menuId;
    ariaLabel;
    ariaLabelledBy;
    level = 0;
    focusedItemId;
    disabled = false;
    orientation;
    activeItem;
    submenu;
    tabindex = 0;
    root = false;
    itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    itemMouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    menuFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    menuBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    menuKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    menubarViewChild;
    constructor(el, megaMenu) {
      this.el = el;
      this.megaMenu = megaMenu;
    }
    onItemClick(event, processedItem) {
      this.getItemProp(processedItem, 'command', {
        originalEvent: event,
        item: processedItem.item
      });
      this.itemClick.emit({
        originalEvent: event,
        processedItem,
        isFocus: true
      });
    }
    getItemProp(processedItem, name, params = null) {
      return processedItem && processedItem.item ? primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getItemValue(processedItem.item[name], params) : undefined;
    }
    getItemId(processedItem) {
      return processedItem.item && processedItem.item?.id ? processedItem.item.id : `${this.menuId}_${processedItem.key}`;
    }
    getSubListId(processedItem) {
      return `${this.getItemId(processedItem)}_list`;
    }
    getItemClass(processedItem) {
      return {
        ...this.getItemProp(processedItem, 'class'),
        'p-menuitem': true,
        'p-menuitem-active p-highlight': this.isItemActive(processedItem),
        'p-focus': this.isItemFocused(processedItem),
        'p-disabled': this.isItemDisabled(processedItem)
      };
    }
    getItemLabel(processedItem) {
      return this.getItemProp(processedItem, 'label');
    }
    getSeparatorItemClass(processedItem) {
      return {
        ...this.getItemProp(processedItem, 'class'),
        'p-menuitem-separator': true
      };
    }
    getColumnClass(processedItem) {
      let length = this.isItemGroup(processedItem) ? processedItem.items.length : 0;
      let columnClass;
      switch (length) {
        case 2:
          columnClass = 'p-megamenu-col-6';
          break;
        case 3:
          columnClass = 'p-megamenu-col-4';
          break;
        case 4:
          columnClass = 'p-megamenu-col-3';
          break;
        case 6:
          columnClass = 'p-megamenu-col-2';
          break;
        default:
          columnClass = 'p-megamenu-col-12';
          break;
      }
      return columnClass;
    }
    getSubmenuHeaderClass(processedItem) {
      return {
        'p-megamenu-submenu-header p-submenu-header': true,
        'p-disabled': this.isItemDisabled(processedItem),
        ...this.getItemProp(processedItem, 'class')
      };
    }
    isItemVisible(processedItem) {
      return this.getItemProp(processedItem, 'visible') !== false;
    }
    isItemActive(processedItem) {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.activeItem) ? this.activeItem.key === processedItem.key : false;
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
    getAriaSetSize() {
      return this.items.filter(processedItem => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, 'separator')).length;
    }
    getAriaPosInset(index) {
      return index - this.items.slice(0, index).filter(processedItem => this.isItemVisible(processedItem) && this.getItemProp(processedItem, 'separator')).length + 1;
    }
    onItemMouseEnter(param) {
      const {
        event,
        processedItem
      } = param;
      this.itemMouseEnter.emit({
        originalEvent: event,
        processedItem
      });
    }
    static ɵfac = function MegaMenuSub_Factory(t) {
      return new (t || MegaMenuSub)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MegaMenu)));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MegaMenuSub,
      selectors: [["p-megaMenuSub"]],
      viewQuery: function MegaMenuSub_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menubarViewChild = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        id: "id",
        items: "items",
        itemTemplate: "itemTemplate",
        menuId: "menuId",
        ariaLabel: "ariaLabel",
        ariaLabelledBy: "ariaLabelledBy",
        level: "level",
        focusedItemId: "focusedItemId",
        disabled: "disabled",
        orientation: "orientation",
        activeItem: "activeItem",
        submenu: "submenu",
        tabindex: "tabindex",
        root: "root"
      },
      outputs: {
        itemClick: "itemClick",
        itemMouseEnter: "itemMouseEnter",
        menuFocus: "menuFocus",
        menuBlur: "menuBlur",
        menuKeydown: "menuKeydown"
      },
      decls: 4,
      vars: 12,
      consts: [[3, "ngClass", "tabindex", "keydown", "focus", "blur"], ["menubar", ""], ["role", "presentation", 3, "ngClass", "style", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["role", "presentation", 3, "ngClass"], ["role", "separator", 3, "style", "ngClass", 4, "ngIf"], ["role", "menuitem", "pTooltip", "", 3, "ngStyle", "ngClass", "class", "tooltipOptions", 4, "ngIf"], ["role", "separator", 3, "ngClass"], ["role", "menuitem", "pTooltip", "", 3, "ngStyle", "ngClass", "tooltipOptions"], ["listItem", ""], [1, "p-menuitem-content", 3, "click", "mouseenter"], [4, "ngIf"], ["class", "p-megamenu-panel", 4, "ngIf"], ["pRipple", "", 3, "target", "ngClass", 4, "ngIf"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["pRipple", "", 3, "target", "ngClass"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [4, "ngTemplateOutlet"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["htmlRouteLabel", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-megamenu-panel"], [1, "p-megamenu-grid"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "id", "submenu", "items", "itemTemplate", "menuId", "focusedItemId", "level", "root", "itemClick", "itemMouseEnter", 4, "ngFor", "ngForOf"], [3, "id", "submenu", "items", "itemTemplate", "menuId", "focusedItemId", "level", "root", "itemClick", "itemMouseEnter"]],
      template: function MegaMenuSub_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MegaMenuSub_Template_ul_keydown_0_listener($event) {
            return ctx.menuKeydown.emit($event);
          })("focus", function MegaMenuSub_Template_ul_focus_0_listener($event) {
            return ctx.menuFocus.emit($event);
          })("blur", function MegaMenuSub_Template_ul_blur_0_listener($event) {
            return ctx.menuBlur.emit($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MegaMenuSub_li_2_Template, 2, 4, "li", 2)(3, MegaMenuSub_ng_template_3_Template, 2, 2, "ng-template", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c4, ctx.root, !ctx.root))("tabindex", ctx.tabindex);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.root ? "menubar" : "menu")("id", ctx.id)("aria-orientation", ctx.orientation)("aria-activedescendant", ctx.focusedItemId)("data-pc-section", ctx.root ? "root" : "submenu");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submenu);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.Ripple, primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__.Tooltip, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_6__.AngleDownIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_7__.AngleRightIcon, MegaMenuSub],
      encapsulation: 2
    });
  }
  return MegaMenuSub;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * MegaMenu is navigation component that displays submenus together.
 * @group Components
 */
let MegaMenu = /*#__PURE__*/(() => {
  class MegaMenu {
    document;
    platformId;
    el;
    renderer;
    config;
    cd;
    /**
     * An array of menuitems.
     * @group Props
     */
    set model(value) {
      this._model = value;
      this._processedItems = this.createProcessedItems(this._model || []);
    }
    get model() {
      return this._model;
    }
    /**
     * Inline style of the element.
     * @group Props
     */
    style;
    /**
     * Class of the element.
     * @group Props
     */
    styleClass;
    /**
     * Defines the orientation.
     * @group Props
     */
    orientation = 'horizontal';
    /**
     * Current id state as a string.
     * @group Props
     */
    id;
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
     * When present, it specifies that the component should be disabled.
     * @group Props
     */
    disabled = false;
    /**
     * Index of the element in tabbing order.
     * @group Props
     */
    tabindex = 0;
    templates;
    menubutton;
    rootmenu;
    startTemplate;
    endTemplate;
    menuIconTemplate;
    submenuIconTemplate;
    itemTemplate;
    outsideClickListener;
    resizeListener;
    dirty = false;
    focused = false;
    activeItem = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    focusedItemInfo = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)({
      index: -1,
      level: 0,
      parentKey: '',
      item: null
    });
    searchValue = '';
    searchTimeout;
    _processedItems;
    _model;
    get visibleItems() {
      const processedItem = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.activeItem()) ? this.activeItem() : null;
      return processedItem && processedItem.key === this.focusedItemInfo().parentKey ? processedItem.items.reduce((items, col) => {
        col.forEach(submenu => {
          submenu.items.forEach(a => {
            items.push(a);
          });
        });
        return items;
      }, []) : this.processedItems;
    }
    get processedItems() {
      if (!this._processedItems || !this._processedItems.length) {
        this._processedItems = this.createProcessedItems(this.model || []);
      }
      return this._processedItems;
    }
    get focusedItemId() {
      const focusedItem = this.focusedItemInfo();
      return focusedItem?.item && focusedItem.item?.id ? focusedItem.item.id : primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(focusedItem.key) ? `${this.id}_${focusedItem.key}` : null;
    }
    constructor(document, platformId, el, renderer, config, cd) {
      this.document = document;
      this.platformId = platformId;
      this.el = el;
      this.renderer = renderer;
      this.config = config;
      this.cd = cd;
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.effect)(() => {
        const activeItem = this.activeItem();
        if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(activeItem)) {
          this.bindOutsideClickListener();
          this.bindResizeListener();
        } else {
          this.unbindOutsideClickListener();
          this.unbindResizeListener();
        }
      });
    }
    ngOnInit() {
      this.id = this.id || (0,primeng_utils__WEBPACK_IMPORTED_MODULE_1__.UniqueComponentId)();
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
          case 'menuicon':
            this.menuIconTemplate = item.template;
            break;
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
    createProcessedItems(items, level = 0, parent = {}, parentKey = '', columnIndex) {
      const processedItems = [];
      items && items.forEach((item, index) => {
        const key = (parentKey !== '' ? parentKey + '_' : '') + (columnIndex !== undefined ? columnIndex + '_' : '') + index;
        const newItem = {
          item,
          index,
          level,
          key,
          parent,
          parentKey,
          columnIndex: columnIndex !== undefined ? columnIndex : parent.columnIndex !== undefined ? parent.columnIndex : index
        };
        newItem['items'] = level === 0 && item.items && item.items.length > 0 ? item.items.map((_items, _index) => this.createProcessedItems(_items, level + 1, newItem, key, _index)) : this.createProcessedItems(item.items, level + 1, newItem, key);
        processedItems.push(newItem);
      });
      return processedItems;
    }
    getItemProp(item, name) {
      return item ? primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.getItemValue(item[name]) : undefined;
    }
    onItemClick(event) {
      const {
        originalEvent,
        processedItem
      } = event;
      const grouped = this.isProcessedItemGroup(processedItem);
      const root = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isEmpty(processedItem.parent);
      const selected = this.isSelected(processedItem);
      if (selected) {
        const {
          index,
          key,
          parentKey,
          item
        } = processedItem;
        this.activeItem.set(null);
        this.focusedItemInfo.set({
          index,
          key,
          parentKey,
          item
        });
        this.dirty = !root;
        primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(this.rootmenu.menubarViewChild.nativeElement);
      } else {
        if (grouped) {
          this.onItemChange(event);
        } else {
          const rootProcessedItem = root ? processedItem : this.activeItem();
          this.hide(originalEvent);
          this.changeFocusedItemInfo(originalEvent, rootProcessedItem ? rootProcessedItem.index : -1);
          primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(this.rootmenu.menubarViewChild.nativeElement);
        }
      }
    }
    onItemMouseEnter(event) {
      if (!primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.isTouchDevice()) {
        this.onItemChange(event);
      }
    }
    scrollInView(index = -1) {
      const id = index !== -1 ? `${this.id}_${index}` : this.focusedItemId;
      const element = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(this.rootmenu.el.nativeElement, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: 'nearest',
          inline: 'nearest'
        });
      }
    }
    onItemChange(event) {
      const {
        processedItem,
        isFocus
      } = event;
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isEmpty(processedItem)) return;
      const {
        index,
        key,
        parentKey,
        items,
        item
      } = processedItem;
      const grouped = primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(items);
      if (grouped) {
        this.activeItem.set(processedItem);
      }
      this.focusedItemInfo.set({
        index,
        key,
        parentKey,
        item
      });
      grouped && (this.dirty = true);
      isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(this.rootmenu.menubarViewChild.nativeElement);
    }
    hide(event, isFocus) {
      this.activeItem.set(null);
      this.focusedItemInfo.set({
        index: -1,
        key: '',
        parentKey: '',
        item: null
      });
      isFocus && primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.focus(this.rootmenu.menubarViewChild.nativeElement);
      this.dirty = false;
    }
    onMenuFocus(event) {
      this.focused = true;
      if (this.focusedItemInfo().index === -1) {
        const index = this.findFirstFocusedItemIndex();
        const processedItem = this.findVisibleItem(index);
        this.focusedItemInfo.set({
          index,
          key: processedItem.key,
          parentKey: processedItem.parentKey,
          item: processedItem.item
        });
      }
    }
    onMenuBlur(event) {
      this.focused = false;
      this.focusedItemInfo.set({
        index: -1,
        level: 0,
        parentKey: '',
        item: null
      });
      this.searchValue = '';
      this.dirty = false;
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
          this.onEscapeKey(event);
          break;
        case 'Tab':
          this.onTabKey(event);
          break;
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
    findFirstFocusedItemIndex() {
      const selectedIndex = this.findSelectedItemIndex();
      return selectedIndex < 0 ? this.findFirstItemIndex() : selectedIndex;
    }
    findFirstItemIndex() {
      return this.visibleItems.findIndex(processedItem => this.isValidItem(processedItem));
    }
    findSelectedItemIndex() {
      return this.visibleItems.findIndex(processedItem => this.isValidSelectedItem(processedItem));
    }
    isProcessedItemGroup(processedItem) {
      return processedItem && primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(processedItem.items);
    }
    isSelected(processedItem) {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.activeItem()) ? this.activeItem().key === processedItem.key : false;
    }
    isValidSelectedItem(processedItem) {
      return this.isValidItem(processedItem) && this.isSelected(processedItem);
    }
    isValidItem(processedItem) {
      return !!processedItem && !this.isItemDisabled(processedItem.item) && !this.isItemSeparator(processedItem.item);
    }
    isItemDisabled(item) {
      return this.getItemProp(item, 'disabled');
    }
    isItemSeparator(item) {
      return this.getItemProp(item, 'separator');
    }
    isItemMatched(processedItem) {
      return this.isValidItem(processedItem) && this.getProccessedItemLabel(processedItem).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase());
    }
    isProccessedItemGroup(processedItem) {
      return processedItem && primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(processedItem.items);
    }
    searchItems(event, char) {
      this.searchValue = (this.searchValue || '') + char;
      let itemIndex = -1;
      let matched = false;
      if (this.focusedItemInfo().index !== -1) {
        itemIndex = this.visibleItems.slice(this.focusedItemInfo().index).findIndex(processedItem => this.isItemMatched(processedItem));
        itemIndex = itemIndex === -1 ? this.visibleItems.slice(0, this.focusedItemInfo().index).findIndex(processedItem => this.isItemMatched(processedItem)) : itemIndex + this.focusedItemInfo().index;
      } else {
        itemIndex = this.visibleItems.findIndex(processedItem => this.isItemMatched(processedItem));
      }
      if (itemIndex !== -1) {
        matched = true;
      }
      if (itemIndex === -1 && this.focusedItemInfo().index === -1) {
        itemIndex = this.findFirstFocusedItemIndex();
      }
      if (itemIndex !== -1) {
        this.changeFocusedItemInfo(event, itemIndex);
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
    getProccessedItemLabel(processedItem) {
      return processedItem ? this.getItemLabel(processedItem.item) : undefined;
    }
    getItemLabel(item) {
      return this.getItemProp(item, 'label');
    }
    changeFocusedItemInfo(event, index) {
      const processedItem = this.findVisibleItem(index);
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(processedItem)) {
        const {
          key,
          parentKey,
          item
        } = processedItem;
        this.focusedItemInfo.set({
          index,
          key: key ? key : '',
          parentKey,
          item
        });
      }
      this.scrollInView();
    }
    onArrowDownKey(event) {
      if (this.orientation === 'horizontal') {
        if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.activeItem()) && this.activeItem().key === this.focusedItemInfo().key) {
          const {
            key,
            item
          } = this.activeItem();
          this.focusedItemInfo.set({
            index: -1,
            key: '',
            parentKey: key,
            item
          });
        } else {
          const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
          const grouped = this.isProccessedItemGroup(processedItem);
          if (grouped) {
            const {
              parentKey,
              key,
              item
            } = processedItem;
            this.onItemChange({
              originalEvent: event,
              processedItem
            });
            this.focusedItemInfo.set({
              index: -1,
              key: key,
              parentKey: parentKey,
              item: item
            });
            this.searchValue = '';
          }
        }
      }
      const itemIndex = this.focusedItemInfo().index !== -1 ? this.findNextItemIndex(this.focusedItemInfo().index) : this.findFirstFocusedItemIndex();
      this.changeFocusedItemInfo(event, itemIndex);
      event.preventDefault();
    }
    onArrowRightKey(event) {
      const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
      const grouped = this.isProccessedItemGroup(processedItem);
      if (grouped) {
        if (this.orientation === 'vertical') {
          if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.activeItem()) && this.activeItem().key === processedItem.key) {
            this.focusedItemInfo.set({
              index: -1,
              key: '',
              parentKey: this.activeItem().key,
              item: processedItem.item
            });
          } else {
            const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
            const grouped = this.isProccessedItemGroup(processedItem);
            if (grouped) {
              this.onItemChange({
                originalEvent: event,
                processedItem
              });
              this.focusedItemInfo.set({
                index: -1,
                key: processedItem.key,
                parentKey: processedItem.parentKey,
                item: processedItem.item
              });
              this.searchValue = '';
            }
          }
        }
        const itemIndex = this.focusedItemInfo().index !== -1 ? this.findNextItemIndex(this.focusedItemInfo().index) : this.findFirstFocusedItemIndex();
        this.changeFocusedItemInfo(event, itemIndex);
      } else {
        const columnIndex = processedItem.columnIndex + 1;
        const itemIndex = this.visibleItems.findIndex(item => item.columnIndex === columnIndex);
        itemIndex !== -1 && this.changeFocusedItemInfo(event, itemIndex);
      }
      event.preventDefault();
    }
    onArrowUpKey(event) {
      if (event.altKey && this.orientation === 'horizontal') {
        if (this.focusedItemInfo().index !== -1) {
          const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
          const grouped = this.isProccessedItemGroup(processedItem);
          if (!grouped && primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.activeItem)) {
            if (this.focusedItemInfo().index === 0) {
              this.focusedItemInfo.set({
                index: this.activeItem().index,
                key: this.activeItem().key,
                parentKey: this.activeItem().parentKey,
                item: processedItem.item
              });
              this.activeItem.set(null);
            } else {
              this.changeFocusedItemInfo(event, this.findFirstItemIndex());
            }
          }
        }
        event.preventDefault();
      } else {
        const itemIndex = this.focusedItemInfo().index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo().index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemInfo(event, itemIndex);
        event.preventDefault();
      }
    }
    onArrowLeftKey(event) {
      const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
      const grouped = this.isProccessedItemGroup(processedItem);
      if (grouped) {
        if (this.orientation === 'horizontal') {
          const itemIndex = this.focusedItemInfo().index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo().index) : this.findLastFocusedItemIndex();
          this.changeFocusedItemInfo(event, itemIndex);
        }
      } else {
        if (this.orientation === 'vertical' && primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.activeItem())) {
          if (processedItem.columnIndex === 0) {
            this.focusedItemInfo.set({
              index: this.activeItem().index,
              key: this.activeItem().key,
              parentKey: this.activeItem().parentKey,
              item: processedItem.item
            });
            this.activeItem.set(null);
          }
        }
        const columnIndex = processedItem.columnIndex - 1;
        const itemIndex = this.visibleItems.findIndex(item => item.columnIndex === columnIndex);
        itemIndex !== -1 && this.changeFocusedItemInfo(event, itemIndex);
      }
      event.preventDefault();
    }
    onHomeKey(event) {
      this.changeFocusedItemInfo(event, this.findFirstItemIndex());
      event.preventDefault();
    }
    onEndKey(event) {
      this.changeFocusedItemInfo(event, this.findLastItemIndex());
      event.preventDefault();
    }
    onSpaceKey(event) {
      this.onEnterKey(event);
    }
    onEscapeKey(event) {
      if (primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.activeItem())) {
        this.focusedItemInfo.set({
          index: this.activeItem().index,
          key: this.activeItem().key,
          item: this.activeItem().item
        });
        this.activeItem.set(null);
      }
      event.preventDefault();
    }
    onTabKey(event) {
      if (this.focusedItemInfo().index !== -1) {
        const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
        const grouped = this.isProccessedItemGroup(processedItem);
        !grouped && this.onItemChange({
          originalEvent: event,
          processedItem
        });
      }
      this.hide();
    }
    onEnterKey(event) {
      if (this.focusedItemInfo().index !== -1) {
        const element = primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(this.rootmenu.el.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
        const anchorElement = element && primeng_dom__WEBPACK_IMPORTED_MODULE_8__.DomHandler.findSingle(element, 'a[data-pc-section="action"]');
        anchorElement ? anchorElement.click() : element && element.click();
        const processedItem = this.visibleItems[this.focusedItemInfo().index];
        const grouped = this.isProccessedItemGroup(processedItem);
        !grouped && this.changeFocusedItemInfo(event, this.findFirstFocusedItemIndex());
      }
      event.preventDefault();
    }
    findVisibleItem(index) {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.isNotEmpty(this.visibleItems) ? this.visibleItems[index] : null;
    }
    findLastFocusedItemIndex() {
      const selectedIndex = this.findSelectedItemIndex();
      return selectedIndex < 0 ? this.findLastItemIndex() : selectedIndex;
    }
    findLastItemIndex() {
      return primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findLastIndex(this.visibleItems, processedItem => this.isValidItem(processedItem));
    }
    findPrevItemIndex(index) {
      const matchedItemIndex = index > 0 ? primeng_utils__WEBPACK_IMPORTED_MODULE_1__.ObjectUtils.findLastIndex(this.visibleItems.slice(0, index), processedItem => this.isValidItem(processedItem)) : -1;
      return matchedItemIndex > -1 ? matchedItemIndex : index;
    }
    findNextItemIndex(index) {
      const matchedItemIndex = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).findIndex(processedItem => this.isValidItem(processedItem)) : -1;
      return matchedItemIndex > -1 ? matchedItemIndex + index + 1 : index;
    }
    bindResizeListener() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
        if (!this.resizeListener) {
          this.resizeListener = this.renderer.listen(this.document.defaultView, 'resize', event => {
            this.hide(event, true);
          });
        }
      }
    }
    bindOutsideClickListener() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
        if (!this.outsideClickListener) {
          this.outsideClickListener = this.renderer.listen(this.document, 'click', event => {
            const isOutsideContainer = this.rootmenu.el.nativeElement !== event.target && !this.rootmenu.el.nativeElement.contains(event.target);
            if (isOutsideContainer) {
              this.hide();
            }
          });
        }
      }
    }
    unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        this.outsideClickListener();
        this.outsideClickListener = null;
      }
    }
    unbindResizeListener() {
      if (this.resizeListener) {
        this.resizeListener();
        this.resizeListener = null;
      }
    }
    ngOnDestroy() {
      this.unbindOutsideClickListener();
      this.unbindResizeListener();
    }
    static ɵfac = function MegaMenu_Factory(t) {
      return new (t || MegaMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MegaMenu,
      selectors: [["p-megaMenu"]],
      contentQueries: function MegaMenu_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function MegaMenu_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menubutton = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rootmenu = _t.first);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        model: "model",
        style: "style",
        styleClass: "styleClass",
        orientation: "orientation",
        id: "id",
        ariaLabel: "ariaLabel",
        ariaLabelledBy: "ariaLabelledBy",
        disabled: "disabled",
        tabindex: "tabindex"
      },
      ngContentSelectors: _c8,
      decls: 7,
      vars: 26,
      consts: [[3, "ngClass", "ngStyle"], ["class", "p-megamenu-start", 4, "ngIf"], [3, "itemTemplate", "items", "menuId", "root", "orientation", "ariaLabel", "disabled", "tabindex", "activeItem", "level", "ariaLabelledBy", "focusedItemId", "itemClick", "menuFocus", "menuBlur", "menuKeydown", "itemMouseEnter"], ["rootmenu", ""], ["class", "p-megamenu-end", 4, "ngIf", "ngIfElse"], ["legacy", ""], [1, "p-megamenu-start"], [4, "ngTemplateOutlet"], [1, "p-megamenu-end"]],
      template: function MegaMenu_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MegaMenu_div_1_Template, 2, 1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-megaMenuSub", 2, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemClick", function MegaMenu_Template_p_megaMenuSub_itemClick_2_listener($event) {
            return ctx.onItemClick($event);
          })("menuFocus", function MegaMenu_Template_p_megaMenuSub_menuFocus_2_listener($event) {
            return ctx.onMenuFocus($event);
          })("menuBlur", function MegaMenu_Template_p_megaMenuSub_menuBlur_2_listener($event) {
            return ctx.onMenuBlur($event);
          })("menuKeydown", function MegaMenu_Template_p_megaMenuSub_menuKeydown_2_listener($event) {
            return ctx.onKeyDown($event);
          })("itemMouseEnter", function MegaMenu_Template_p_megaMenuSub_itemMouseEnter_2_listener($event) {
            return ctx.onItemMouseEnter($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MegaMenu_div_4_Template, 2, 1, "div", 4)(5, MegaMenu_ng_template_5_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c7, ctx.orientation == "horizontal", ctx.orientation == "vertical"))("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "root")("data-pc-name", "megamenu")("id", ctx.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.startTemplate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemTemplate", ctx.itemTemplate)("items", ctx.processedItems)("menuId", ctx.id)("root", true)("orientation", ctx.orientation)("ariaLabel", ctx.ariaLabel)("disabled", ctx.disabled)("tabindex", !ctx.disabled ? ctx.tabindex : -1)("activeItem", ctx.activeItem())("level", 0)("ariaLabelledBy", ctx.ariaLabelledBy)("focusedItemId", ctx.focused ? ctx.focusedItemId : undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id + "_list");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.endTemplate)("ngIfElse", _r4);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, MegaMenuSub],
      styles: ["@layer primeng{.p-megamenu-root-list{margin:0;padding:0;list-style:none}.p-megamenu-root-list>.p-menuitem{position:relative}.p-megamenu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-megamenu .p-menuitem-text{line-height:1}.p-megamenu-panel{display:none;position:absolute;width:auto;z-index:1}.p-megamenu-root-list>.p-menuitem-active>.p-megamenu-panel{display:block}.p-megamenu-submenu{margin:0;padding:0;list-style:none}.p-megamenu-horizontal{align-items:center}.p-megamenu-horizontal .p-megamenu-root-list{display:flex;align-items:center;flex-wrap:wrap}.p-megamenu-horizontal .p-megamenu-end{margin-left:auto;align-self:center}.p-megamenu-vertical .p-megamenu-root-list{flex-direction:column}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem-active>.p-megamenu-panel{left:100%;top:0}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem>.p-menuitem-content>.p-menuitem-link>.p-submenu-icon:not(svg){margin-left:auto}.p-megamenu-vertical .p-megamenu-root-list>.p-menuitem>.p-menuitem-content>.p-menuitem-link>.p-icon-wrapper{margin-left:auto}.p-megamenu-grid{display:flex}.p-megamenu-col-2,.p-megamenu-col-3,.p-megamenu-col-4,.p-megamenu-col-6,.p-megamenu-col-12{flex:0 0 auto;padding:.5rem}.p-megamenu-col-2{width:16.6667%}.p-megamenu-col-3{width:25%}.p-megamenu-col-4{width:33.3333%}.p-megamenu-col-6{width:50%}.p-megamenu-col-12{width:100%}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return MegaMenu;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MegaMenuModule = /*#__PURE__*/(() => {
  class MegaMenuModule {
    static ɵfac = function MegaMenuModule_Factory(t) {
      return new (t || MegaMenuModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MegaMenuModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_4__.RippleModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_9__.SharedModule, primeng_icons_angledown__WEBPACK_IMPORTED_MODULE_6__.AngleDownIcon, primeng_icons_angleright__WEBPACK_IMPORTED_MODULE_7__.AngleRightIcon, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipModule, primeng_api__WEBPACK_IMPORTED_MODULE_9__.SharedModule]
    });
  }
  return MegaMenuModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-megamenu.mjs.map

/***/ }),

/***/ 62198:
/*!*********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-steps.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Steps: () => (/* binding */ Steps),
/* harmony export */   StepsModule: () => (/* binding */ StepsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/dom */ 82076);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/tooltip */ 33259);










/**
 * Steps components is an indicator for the steps in a wizard workflow.
 * @group Components
 */
const _c0 = ["list"];
function Steps_li_3_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.label);
  }
}
function Steps_li_3_a_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 13);
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r2.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
const _c1 = () => ({
  exact: false
});
function Steps_li_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Steps_li_3_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const item_r2 = ctx_r14.$implicit;
      const i_r3 = ctx_r14.index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.onItemClick($event, item_r2, i_r3));
    })("keydown", function Steps_li_3_a_2_Template_a_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const item_r2 = ctx_r17.$implicit;
      const i_r3 = ctx_r17.index;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.onItemKeydown($event, item_r2, i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Steps_li_3_a_2_span_3_Template, 2, 1, "span", 10)(4, Steps_li_3_a_2_ng_template_4_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const item_r2 = ctx_r18.$implicit;
    const i_r3 = ctx_r18.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r2.routerLink)("queryParams", item_r2.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r2.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1))("target", item_r2.target)("fragment", item_r2.fragment)("queryParamsHandling", item_r2.queryParamsHandling)("preserveFragment", item_r2.preserveFragment)("skipLocationChange", item_r2.skipLocationChange)("replaceUrl", item_r2.replaceUrl)("state", item_r2.state)("ariaCurrentWhenActive", ctx_r5.exact ? "step" : undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r5.getItemTabIndex(item_r2, i_r3))("aria-selected", i_r3 === ctx_r5.activeIndex)("aria-expanded", i_r3 === ctx_r5.activeIndex)("aria-disabled", item_r2.disabled || ctx_r5.readonly && i_r3 !== ctx_r5.activeIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.escape !== false)("ngIfElse", _r10);
  }
}
function Steps_li_3_ng_template_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.label);
  }
}
function Steps_li_3_ng_template_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 13);
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r2.label, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function Steps_li_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Steps_li_3_ng_template_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const item_r2 = ctx_r25.$implicit;
      const i_r3 = ctx_r25.index;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r24.onItemClick($event, item_r2, i_r3));
    })("keydown", function Steps_li_3_ng_template_3_Template_a_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      const item_r2 = ctx_r28.$implicit;
      const i_r3 = ctx_r28.index;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r27.onItemKeydown($event, item_r2, i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Steps_li_3_ng_template_3_span_3_Template, 2, 1, "span", 10)(4, Steps_li_3_ng_template_3_ng_template_4_Template, 1, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const item_r2 = ctx_r29.$implicit;
    const i_r3 = ctx_r29.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", item_r2.target)("ariaCurrentWhenActive", ctx_r6.exact && (!item_r2.disabled || ctx_r6.readonly) ? "step" : undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", item_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("tabindex", ctx_r6.getItemTabIndex(item_r2, i_r3))("aria-selected", i_r3 === ctx_r6.activeIndex)("aria-expanded", i_r3 === ctx_r6.activeIndex)("aria-disabled", item_r2.disabled || ctx_r6.readonly && i_r3 !== ctx_r6.activeIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.escape !== false)("ngIfElse", _r21);
  }
}
const _c2 = (a0, a1) => ({
  "p-highlight p-steps-current": a0,
  "p-disabled": a1
});
function Steps_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Steps_li_3_a_2_Template, 6, 20, "a", 6)(3, Steps_li_3_ng_template_3_Template, 6, 10, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r2.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", item_r2.style)("tooltipOptions", item_r2.tooltipOptions)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c2, ctx_r1.isActive(item_r2, i_r3), item_r2.disabled || ctx_r1.readonly && !ctx_r1.isActive(item_r2, i_r3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", item_r2.id)("data-pc-section", "menuitem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isClickableRouterLink(item_r2))("ngIfElse", _r7);
  }
}
const _c3 = a1 => ({
  "p-steps p-component": true,
  "p-readonly": a1
});
let Steps = /*#__PURE__*/(() => {
  class Steps {
    router;
    route;
    cd;
    /**
     * Index of the active item.
     * @group Props
     */
    activeIndex = 0;
    /**
     * An array of menu items.
     * @group Props
     */
    model;
    /**
     * Whether the items are clickable or not.
     * @group Props
     */
    readonly = true;
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
     * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
     * @group Props
     */
    exact = true;
    /**
     * Callback to invoke when the new step is selected.
     * @param {number} number - current index.
     * @group Emits
     */
    activeIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    listViewChild;
    constructor(router, route, cd) {
      this.router = router;
      this.route = route;
      this.cd = cd;
    }
    subscription;
    ngOnInit() {
      this.subscription = this.router.events.subscribe(() => this.cd.markForCheck());
    }
    onItemClick(event, item, i) {
      if (this.readonly || item.disabled) {
        event.preventDefault();
        return;
      }
      this.activeIndexChange.emit(i);
      if (!item.url && !item.routerLink) {
        event.preventDefault();
      }
      if (item.command) {
        item.command({
          originalEvent: event,
          item: item,
          index: i
        });
      }
    }
    onItemKeydown(event, item, i) {
      switch (event.code) {
        case 'ArrowRight':
          {
            this.navigateToNextItem(event.target);
            event.preventDefault();
            break;
          }
        case 'ArrowLeft':
          {
            this.navigateToPrevItem(event.target);
            event.preventDefault();
            break;
          }
        case 'Home':
          {
            this.navigateToFirstItem(event.target);
            event.preventDefault();
            break;
          }
        case 'End':
          {
            this.navigateToLastItem(event.target);
            event.preventDefault();
            break;
          }
        case 'Tab':
          if (i !== this.activeIndex) {
            const siblings = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.find(this.listViewChild.nativeElement, '[data-pc-section="menuitem"]');
            siblings[i].children[0].tabIndex = '-1';
            siblings[this.activeIndex].children[0].tabIndex = '0';
          }
          break;
        case 'Enter':
        case 'Space':
          {
            this.onItemClick(event, item, i);
            event.preventDefault();
            break;
          }
        default:
          break;
      }
    }
    navigateToNextItem(target) {
      const nextItem = this.findNextItem(target);
      nextItem && this.setFocusToMenuitem(target, nextItem);
    }
    navigateToPrevItem(target) {
      const prevItem = this.findPrevItem(target);
      prevItem && this.setFocusToMenuitem(target, prevItem);
    }
    navigateToFirstItem(target) {
      const firstItem = this.findFirstItem();
      firstItem && this.setFocusToMenuitem(target, firstItem);
    }
    navigateToLastItem(target) {
      const lastItem = this.findLastItem();
      lastItem && this.setFocusToMenuitem(target, lastItem);
    }
    findNextItem(item) {
      const nextItem = item.parentElement.nextElementSibling;
      return nextItem ? nextItem.children[0] : null;
    }
    findPrevItem(item) {
      const prevItem = item.parentElement.previousElementSibling;
      return prevItem ? prevItem.children[0] : null;
    }
    findFirstItem() {
      const firstSibling = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.findSingle(this.listViewChild.nativeElement, '[data-pc-section="menuitem"]');
      return firstSibling ? firstSibling.children[0] : null;
    }
    findLastItem() {
      const siblings = primeng_dom__WEBPACK_IMPORTED_MODULE_1__.DomHandler.find(this.listViewChild.nativeElement, '[data-pc-section="menuitem"]');
      return siblings ? siblings[siblings.length - 1].children[0] : null;
    }
    setFocusToMenuitem(target, focusableItem) {
      target.tabIndex = '-1';
      focusableItem.tabIndex = '0';
      focusableItem.focus();
    }
    isClickableRouterLink(item) {
      return item.routerLink && !this.readonly && !item.disabled;
    }
    isActive(item, index) {
      if (item.routerLink) {
        let routerLink = Array.isArray(item.routerLink) ? item.routerLink : [item.routerLink];
        return this.router.isActive(this.router.createUrlTree(routerLink, {
          relativeTo: this.route
        }).toString(), false);
      }
      return index === this.activeIndex;
    }
    getItemTabIndex(item, index) {
      if (item.disabled) {
        return '-1';
      }
      if (!item.disabled && this.activeIndex === index) {
        return item.tabindex || '0';
      }
      return item.tabindex ?? '-1';
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    static ɵfac = function Steps_Factory(t) {
      return new (t || Steps)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Steps,
      selectors: [["p-steps"]],
      viewQuery: function Steps_Query(rf, ctx) {
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
        activeIndex: "activeIndex",
        model: "model",
        readonly: "readonly",
        style: "style",
        styleClass: "styleClass",
        exact: "exact"
      },
      outputs: {
        activeIndexChange: "activeIndexChange"
      },
      decls: 4,
      vars: 9,
      consts: [[3, "ngClass", "ngStyle"], ["role", "tablist"], ["list", ""], ["class", "p-steps-item", "role", "presentation", "pTooltip", "", 3, "ngStyle", "class", "tooltipOptions", "ngClass", 4, "ngFor", "ngForOf"], ["role", "presentation", "pTooltip", "", 1, "p-steps-item", 3, "ngStyle", "tooltipOptions", "ngClass"], ["menuitem", ""], ["role", "tab", "class", "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "ariaCurrentWhenActive", "click", "keydown", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["role", "tab", 1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "ariaCurrentWhenActive", "click", "keydown"], [1, "p-steps-number"], ["class", "p-steps-title", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], [1, "p-steps-title"], [1, "p-steps-title", 3, "innerHTML"], ["role", "tab", 1, "p-menuitem-link", 3, "target", "ariaCurrentWhenActive", "click", "keydown"], ["htmlRouteLabel", ""]],
      template: function Steps_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "ul", 1, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Steps_li_3_Template, 5, 12, "li", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, ctx.readonly))("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-name", "steps");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-pc-section", "menu");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.model);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.Tooltip],
      styles: ["@layer primeng{.p-steps{position:relative}.p-steps ul{padding:0;margin:0;list-style-type:none;display:flex}.p-steps-item{position:relative;display:flex;justify-content:center;flex:1 1 auto}.p-steps-item .p-menuitem-link{display:inline-flex;flex-direction:column;align-items:center;overflow:hidden;text-decoration:none}.p-steps.p-steps-readonly .p-steps-item{cursor:auto}.p-steps-item.p-steps-current .p-menuitem-link{cursor:default}.p-steps-title{white-space:nowrap}.p-steps-number{display:flex;align-items:center;justify-content:center}.p-steps-title{display:block}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return Steps;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let StepsModule = /*#__PURE__*/(() => {
  class StepsModule {
    static ɵfac = function StepsModule_Factory(t) {
      return new (t || StepsModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: StepsModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.TooltipModule]
    });
  }
  return StepsModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-steps.mjs.map

/***/ }),

/***/ 55779:
/*!***********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-tabmenu.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabMenu: () => (/* binding */ TabMenu),
/* harmony export */   TabMenuModule: () => (/* binding */ TabMenuModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 85219);
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dom */ 82076);
/* harmony import */ var primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/icons/chevronleft */ 42537);
/* harmony import */ var primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/icons/chevronright */ 44562);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 44480);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ 33259);
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/utils */ 2332);
















/**
 * TabMenu is a navigation component that displays items as tab headers.
 * @group Components
 */
const _c0 = ["content"];
const _c1 = ["navbar"];
const _c2 = ["inkbar"];
const _c3 = ["prevBtn"];
const _c4 = ["nextBtn"];
const _c5 = ["tabLink"];
const _c6 = ["tab"];
function TabMenu_button_2_ChevronLeftIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronLeftIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function TabMenu_button_2_3_ng_template_0_Template(rf, ctx) {}
function TabMenu_button_2_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TabMenu_button_2_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabMenu_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabMenu_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.navBackward());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TabMenu_button_2_ChevronLeftIcon_2_Template, 1, 1, "ChevronLeftIcon", 13)(3, TabMenu_button_2_3_Template, 1, 0, null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.previousIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.previousIconTemplate);
  }
}
function TabMenu_li_7_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 26);
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r12.icon)("ngStyle", item_r12.iconStyle);
  }
}
function TabMenu_li_7_a_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.getItemProp(item_r12, "label"));
  }
}
function TabMenu_li_7_a_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 28);
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r21.getItemProp(item_r12, "label"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function TabMenu_li_7_a_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r12.badgeStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.getItemProp(item_r12, "badge"));
  }
}
function TabMenu_li_7_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TabMenu_li_7_a_2_span_3_Template, 1, 2, "span", 22)(4, TabMenu_li_7_a_2_span_4_Template, 2, 1, "span", 23)(5, TabMenu_li_7_a_2_ng_template_5_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(7, TabMenu_li_7_a_2_span_7_Template, 2, 2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("target", ctx_r15.getItemProp(item_r12, "target"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", ctx_r15.getItemProp(item_r12, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("id", ctx_r15.getItemProp(item_r12, "id"))("aria-disabled", ctx_r15.disabled(item_r12))("aria-label", ctx_r15.getItemProp(item_r12, "label"))("tabindex", ctx_r15.disabled(item_r12) ? -1 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r12.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r12.escape !== false)("ngIfElse", _r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r12.badge);
  }
}
function TabMenu_li_7_a_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 26);
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r12.icon)("ngStyle", item_r12.iconStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function TabMenu_li_7_a_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r31.getItemProp(item_r12, "label"));
  }
}
function TabMenu_li_7_a_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 28);
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r32.getItemProp(item_r12, "label"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function TabMenu_li_7_a_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r12.badgeStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r34.getItemProp(item_r12, "badge"));
  }
}
const _c7 = () => ({
  exact: false
});
function TabMenu_li_7_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TabMenu_li_7_a_3_span_3_Template, 1, 3, "span", 22)(4, TabMenu_li_7_a_3_span_4_Template, 2, 1, "span", 23)(5, TabMenu_li_7_a_3_ng_template_5_Template, 1, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(7, TabMenu_li_7_a_3_span_7_Template, 2, 2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r12.routerLink)("queryParams", item_r12.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r12.routerLinkActiveOptions || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c7))("target", item_r12.target)("fragment", item_r12.fragment)("queryParamsHandling", item_r12.queryParamsHandling)("preserveFragment", item_r12.preserveFragment)("skipLocationChange", item_r12.skipLocationChange)("replaceUrl", item_r12.replaceUrl)("state", item_r12.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r16.getItemProp(item_r12, "id"))("aria-disabled", ctx_r16.disabled(item_r12))("aria-label", ctx_r16.getItemProp(item_r12, "label"))("tabindex", ctx_r16.disabled(item_r12) ? -1 : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r12.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r12.escape !== false)("ngIfElse", _r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r12.badge);
  }
}
function TabMenu_li_7_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c8 = (a1, a2, a3) => ({
  "p-tabmenuitem": true,
  "p-disabled": a1,
  "p-highlight": a2,
  "p-hidden": a3
});
const _c9 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function TabMenu_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabMenu_li_7_Template_li_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);
      const item_r12 = restoredCtx.$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r40.itemClick($event, item_r12));
    })("keydown", function TabMenu_li_7_Template_li_keydown_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);
      const i_r13 = restoredCtx.index;
      const item_r12 = restoredCtx.$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r42.onKeydownItem($event, i_r13, item_r12));
    })("focus", function TabMenu_li_7_Template_li_focus_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);
      const item_r12 = restoredCtx.$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r43.onMenuItemFocus(item_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TabMenu_li_7_a_2_Template, 8, 10, "a", 17)(3, TabMenu_li_7_a_3_Template, 8, 20, "a", 18)(4, TabMenu_li_7_ng_container_4_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r12.styleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", item_r12.style)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](11, _c8, ctx_r3.getItemProp(item_r12, "disabled"), ctx_r3.isActive(item_r12), item_r12.visible === false))("tooltipOptions", item_r12.tooltipOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-p-disabled", ctx_r3.disabled(item_r12))("data-p-highlight", ctx_r3.focusedItemInfo() === item_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r12.routerLink && !ctx_r3.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r12.routerLink && !ctx_r3.itemTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c9, item_r12, i_r13));
  }
}
function TabMenu_button_10_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ChevronRightIcon");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", true);
  }
}
function TabMenu_button_10_3_ng_template_0_Template(rf, ctx) {}
function TabMenu_button_10_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TabMenu_button_10_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TabMenu_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabMenu_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r48.navForward());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TabMenu_button_10_ChevronRightIcon_2_Template, 1, 1, "ChevronRightIcon", 13)(3, TabMenu_button_10_3_Template, 1, 0, null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.previousIconTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.nextIconTemplate);
  }
}
const _c10 = a1 => ({
  "p-tabmenu p-component": true,
  "p-tabmenu-scrollable": a1
});
let TabMenu = /*#__PURE__*/(() => {
  class TabMenu {
    platformId;
    router;
    route;
    cd;
    /**
     * An array of menuitems.
     * @group Props
     */
    set model(value) {
      this._model = value;
      this._focusableItems = (this._model || []).reduce((result, item) => {
        result.push(item);
        return result;
      }, []);
    }
    get model() {
      return this._model;
    }
    /**
     * Defines the default active menuitem
     * @group Props
     */
    activeItem;
    /**
     * When enabled displays buttons at each side of the tab headers to scroll the tab list.
     * @group Props
     */
    scrollable;
    /**
     * Defines if popup mode enabled.
     */
    popup;
    /**
     * Inline style of the element.
     * @group Props
     */
    style;
    /**
     * Class of the element.
     * @group Props
     */
    styleClass;
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
     * Event fired when a tab is selected.
     * @param {MenuItem} item - Menu item.
     * @group Emits
     */
    activeItemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    content;
    navbar;
    inkbar;
    prevBtn;
    nextBtn;
    tabLink;
    tab;
    templates;
    itemTemplate;
    previousIconTemplate;
    nextIconTemplate;
    tabChanged;
    backwardIsDisabled = true;
    forwardIsDisabled = false;
    timerIdForInitialAutoScroll = null;
    _focusableItems;
    _model;
    focusedItemInfo = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
    get focusableItems() {
      if (!this._focusableItems || !this._focusableItems.length) {
        this._focusableItems = (this.model || []).reduce((result, item) => {
          result.push(item);
          return result;
        }, []);
      }
      return this._focusableItems;
    }
    constructor(platformId, router, route, cd) {
      this.platformId = platformId;
      this.router = router;
      this.route = route;
      this.cd = cd;
    }
    ngAfterContentInit() {
      this.templates?.forEach(item => {
        switch (item.getType()) {
          case 'item':
            this.itemTemplate = item.template;
            break;
          case 'nexticon':
            this.nextIconTemplate = item.template;
            break;
          case 'previousicon':
            this.previousIconTemplate = item.template;
            break;
          default:
            this.itemTemplate = item.template;
            break;
        }
      });
    }
    ngAfterViewInit() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
        this.updateInkBar();
        this.initAutoScrollForActiveItem();
        this.initButtonState();
      }
    }
    ngAfterViewChecked() {
      if (this.tabChanged) {
        this.updateInkBar();
        this.tabChanged = false;
      }
    }
    ngOnDestroy() {
      this.clearAutoScrollHandler();
    }
    isActive(item) {
      if (item.routerLink) {
        const routerLink = Array.isArray(item.routerLink) ? item.routerLink : [item.routerLink];
        return this.router.isActive(this.router.createUrlTree(routerLink, {
          relativeTo: this.route
        }).toString(), item.routerLinkActiveOptions?.exact ?? item.routerLinkActiveOptions ?? false);
      }
      return item === this.activeItem;
    }
    getItemProp(item, name) {
      return item ? primeng_utils__WEBPACK_IMPORTED_MODULE_2__.ObjectUtils.getItemValue(item[name]) : undefined;
    }
    visible(item) {
      return typeof item.visible === 'function' ? item.visible() : item.visible !== false;
    }
    disabled(item) {
      return typeof item.disabled === 'function' ? item.disabled() : item.disabled;
    }
    onMenuItemFocus(item) {
      this.focusedItemInfo.set(item);
    }
    itemClick(event, item) {
      if (item.disabled) {
        event.preventDefault();
        return;
      }
      if (!item.url && !item.routerLink) {
        event.preventDefault();
      }
      if (item.command) {
        item.command({
          originalEvent: event,
          item: item
        });
      }
      this.activeItem = item;
      this.activeItemChange.emit(item);
      this.tabChanged = true;
      this.cd.markForCheck();
    }
    onKeydownItem(event, index, item) {
      let i = index;
      let foundElement = {};
      const tabLinks = this.tabLink.toArray();
      const tabs = this.tab.toArray();
      switch (event.code) {
        case 'ArrowRight':
          foundElement = this.findNextItem(tabs, i);
          i = foundElement['i'];
          break;
        case 'ArrowLeft':
          foundElement = this.findPrevItem(tabs, i);
          i = foundElement['i'];
          break;
        case 'End':
          foundElement = this.findPrevItem(tabs, this.model.length);
          i = foundElement['i'];
          event.preventDefault();
          break;
        case 'Home':
          foundElement = this.findNextItem(tabs, -1);
          i = foundElement['i'];
          event.preventDefault();
          break;
        case 'Space':
        case 'Enter':
          this.itemClick(event, item);
          break;
        case 'Tab':
          this.onTabKeyDown(tabLinks);
          break;
        default:
          break;
      }
      if (tabLinks[i] && tabLinks[index]) {
        tabLinks[index].nativeElement.tabIndex = '-1';
        tabLinks[i].nativeElement.tabIndex = '0';
        tabLinks[i].nativeElement.focus();
      }
      this.cd.markForCheck();
    }
    onTabKeyDown(tabLinks) {
      tabLinks.forEach(item => {
        item.nativeElement.tabIndex = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getAttribute(item.nativeElement.parentElement, 'data-p-highlight') ? '0' : '-1';
      });
    }
    findNextItem(items, index) {
      let i = index + 1;
      if (i >= items.length) {
        return {
          nextItem: items[items.length],
          i: items.length
        };
      }
      let nextItem = items[i];
      if (nextItem) return primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getAttribute(nextItem.nativeElement, 'data-p-disabled') ? this.findNextItem(items, i) : {
        nextItem: nextItem.nativeElement,
        i
      };else return null;
    }
    findPrevItem(items, index) {
      let i = index - 1;
      if (i < 0) {
        return {
          prevItem: items[0],
          i: 0
        };
      }
      let prevItem = items[i];
      if (prevItem) return primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getAttribute(prevItem.nativeElement, 'data-p-disabled') ? this.findPrevItem(items, i) : {
        prevItem: prevItem.nativeElement,
        i
      };else return null;
    }
    updateInkBar() {
      const tabHeader = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.findSingle(this.navbar?.nativeElement, 'li.p-highlight');
      if (tabHeader) {
        this.inkbar.nativeElement.style.width = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getWidth(tabHeader) + 'px';
        this.inkbar.nativeElement.style.left = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOffset(tabHeader).left - primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getOffset(this.navbar?.nativeElement).left + 'px';
      }
    }
    getVisibleButtonWidths() {
      return [this.prevBtn?.nativeElement, this.nextBtn?.nativeElement].reduce((acc, el) => el ? acc + primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getWidth(el) : acc, 0);
    }
    updateButtonState() {
      const content = this.content?.nativeElement;
      const {
        scrollLeft,
        scrollWidth
      } = content;
      const width = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getWidth(content);
      this.backwardIsDisabled = scrollLeft === 0;
      this.forwardIsDisabled = parseInt(scrollLeft) === scrollWidth - width;
    }
    updateScrollBar(index) {
      const tabHeader = this.navbar?.nativeElement.children[index];
      if (!tabHeader) {
        return;
      }
      tabHeader.scrollIntoView({
        block: 'nearest',
        inline: 'center'
      });
    }
    onScroll(event) {
      this.scrollable && this.updateButtonState();
      event.preventDefault();
    }
    navBackward() {
      const content = this.content?.nativeElement;
      const width = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getWidth(content) - this.getVisibleButtonWidths();
      const pos = content.scrollLeft - width;
      content.scrollLeft = pos <= 0 ? 0 : pos;
    }
    navForward() {
      const content = this.content?.nativeElement;
      const width = primeng_dom__WEBPACK_IMPORTED_MODULE_3__.DomHandler.getWidth(content) - this.getVisibleButtonWidths();
      const pos = content.scrollLeft + width;
      const lastPos = content.scrollWidth - width;
      content.scrollLeft = pos >= lastPos ? lastPos : pos;
    }
    initAutoScrollForActiveItem() {
      if (!this.scrollable) {
        return;
      }
      this.clearAutoScrollHandler();
      // We have to wait for the rendering and then can scroll to element.
      this.timerIdForInitialAutoScroll = setTimeout(() => {
        const activeItem = this.model.findIndex(menuItem => this.isActive(menuItem));
        if (activeItem !== -1) {
          this.updateScrollBar(activeItem);
        }
      });
    }
    clearAutoScrollHandler() {
      if (this.timerIdForInitialAutoScroll) {
        clearTimeout(this.timerIdForInitialAutoScroll);
        this.timerIdForInitialAutoScroll = null;
      }
    }
    initButtonState() {
      if (this.scrollable) {
        // We have to wait for the rendering and then retrieve the actual size element from the DOM.
        // in future `Promise.resolve` can be changed to `queueMicrotask` (if ie11 support will be dropped)
        Promise.resolve().then(() => {
          this.updateButtonState();
          this.cd.markForCheck();
        });
      }
    }
    static ɵfac = function TabMenu_Factory(t) {
      return new (t || TabMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TabMenu,
      selectors: [["p-tabMenu"]],
      contentQueries: function TabMenu_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, 4);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
        }
      },
      viewQuery: function TabMenu_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inkbar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.prevBtn = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nextBtn = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabLink = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tab = _t);
        }
      },
      hostAttrs: [1, "p-element"],
      inputs: {
        model: "model",
        activeItem: "activeItem",
        scrollable: "scrollable",
        popup: "popup",
        style: "style",
        styleClass: "styleClass",
        ariaLabel: "ariaLabel",
        ariaLabelledBy: "ariaLabelledBy"
      },
      outputs: {
        activeItemChange: "activeItemChange"
      },
      decls: 11,
      vars: 11,
      consts: [[3, "ngClass", "ngStyle"], [1, "p-tabmenu-nav-container"], ["class", "p-tabmenu-nav-prev p-tabmenu-nav-btn p-link", "type", "button", "role", "navigation", "pRipple", "", 3, "click", 4, "ngIf"], [1, "p-tabmenu-nav-content", 3, "scroll"], ["content", ""], ["role", "menubar", 1, "p-tabmenu-nav", "p-reset"], ["navbar", ""], ["role", "presentation", "pTooltip", "", 3, "ngStyle", "class", "ngClass", "tooltipOptions", "click", "keydown", "focus", 4, "ngFor", "ngForOf"], ["role", "none", 1, "p-tabmenu-ink-bar"], ["inkbar", ""], ["class", "p-tabmenu-nav-next p-tabmenu-nav-btn p-link", "type", "button", "role", "navigation", "pRipple", "", 3, "click", 4, "ngIf"], ["type", "button", "role", "navigation", "pRipple", "", 1, "p-tabmenu-nav-prev", "p-tabmenu-nav-btn", "p-link", 3, "click"], ["prevBtn", ""], [4, "ngIf"], [4, "ngTemplateOutlet"], ["role", "presentation", "pTooltip", "", 3, "ngStyle", "ngClass", "tooltipOptions", "click", "keydown", "focus"], ["tab", ""], ["class", "p-menuitem-link", "role", "menuitem", "pRipple", "", 3, "target", 4, "ngIf"], ["role", "menuitem", "class", "p-menuitem-link", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "menuitem", "pRipple", "", 1, "p-menuitem-link", 3, "target"], ["tabLink", ""], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], ["role", "menuitem", "pRipple", "", 1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["htmlRouteLabel", ""], ["type", "button", "role", "navigation", "pRipple", "", 1, "p-tabmenu-nav-next", "p-tabmenu-nav-btn", "p-link", 3, "click"], ["nextBtn", ""]],
      template: function TabMenu_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TabMenu_button_2_Template, 4, 2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function TabMenu_Template_div_scroll_3_listener($event) {
            return ctx.onScroll($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TabMenu_li_7_Template, 5, 18, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 8, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TabMenu_button_10_Template, 4, 2, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c10, ctx.scrollable))("ngStyle", ctx.style);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scrollable && !ctx.backwardIsDisabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.focusableItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scrollable && !ctx.forwardIsDisabled);
        }
      },
      dependencies: () => [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.Tooltip, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_8__.ChevronLeftIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__.ChevronRightIcon],
      styles: ["@layer primeng{.p-tabmenu-nav-container{position:relative}.p-tabmenu-scrollable .p-tabmenu-nav-container{overflow:hidden}.p-tabmenu-nav-content{overflow-x:auto;overflow-y:hidden;scroll-behavior:smooth;scrollbar-width:none;overscroll-behavior:contain auto}.p-tabmenu-nav-btn{position:absolute;top:0;z-index:2;height:100%;display:flex;align-items:center;justify-content:center}.p-tabmenu-nav-prev{left:0}.p-tabmenu-nav-next{right:0}.p-tabview-nav-content::-webkit-scrollbar{display:none}.p-tabmenu-nav{display:flex;margin:0;padding:0;list-style-type:none;flex-wrap:nowrap}.p-tabmenu-nav a{cursor:pointer;-webkit-user-select:none;user-select:none;display:flex;align-items:center;position:relative;text-decoration:none;overflow:hidden}.p-tabmenu-nav a:focus{z-index:1}.p-tabmenu-nav .p-menuitem-text{line-height:1;white-space:nowrap}.p-tabmenu-ink-bar{display:none;z-index:1}.p-tabmenu-nav-content::-webkit-scrollbar{display:none}.p-tabmenuitem:not(.p-hidden){display:flex}}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return TabMenu;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let TabMenuModule = /*#__PURE__*/(() => {
  class TabMenuModule {
    static ɵfac = function TabMenuModule_Factory(t) {
      return new (t || TabMenuModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TabMenuModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.RippleModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule, primeng_icons_chevronleft__WEBPACK_IMPORTED_MODULE_8__.ChevronLeftIcon, primeng_icons_chevronright__WEBPACK_IMPORTED_MODULE_9__.ChevronRightIcon, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, primeng_api__WEBPACK_IMPORTED_MODULE_5__.SharedModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule]
    });
  }
  return TabMenuModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-tabmenu.mjs.map

/***/ })

}]);