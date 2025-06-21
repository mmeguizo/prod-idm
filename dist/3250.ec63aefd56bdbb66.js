"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[3250],{

/***/ 30720:
/*!***************************************************************!*\
  !*** ./src/app/demo/components/uikit/uikit-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIkitRoutingModule: () => (/* binding */ UIkitRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 65879);



let UIkitRoutingModule = /*#__PURE__*/(() => {
  class UIkitRoutingModule {
    static #_ = this.ɵfac = function UIkitRoutingModule_Factory(t) {
      return new (t || UIkitRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UIkitRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild([{
        path: 'button',
        data: {
          breadcrumb: 'Button'
        },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(6804), __webpack_require__.e(2796)]).then(__webpack_require__.bind(__webpack_require__, /*! ./button/buttondemo.module */ 22796)).then(m => m.ButtonDemoModule)
      }, {
        path: 'charts',
        data: {
          breadcrumb: 'Charts'
        },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(4213), __webpack_require__.e(8284)]).then(__webpack_require__.bind(__webpack_require__, /*! ./charts/chartsdemo.module */ 78284)).then(m => m.ChartsDemoModule)
      }, {
        path: 'file',
        data: {
          breadcrumb: 'File'
        },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(9502), __webpack_require__.e(3931), __webpack_require__.e(2576)]).then(__webpack_require__.bind(__webpack_require__, /*! ./file/filedemo.module */ 52576)).then(m => m.FileDemoModule)
      }, {
        path: 'floatlabel',
        data: {
          breadcrumb: 'Float Label'
        },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(4055), __webpack_require__.e(7203), __webpack_require__.e(8592), __webpack_require__.e(9482)]).then(__webpack_require__.bind(__webpack_require__, /*! ./floatlabel/floatlabeldemo.module */ 19482)).then(m => m.FloatlabelDemoModule)
      }, {
        path: 'formlayout',
        data: {
          breadcrumb: 'Form Layout'
        },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(4055), __webpack_require__.e(7203), __webpack_require__.e(7025)]).then(__webpack_require__.bind(__webpack_require__, /*! ./formlayout/formlayoutdemo.module */ 57025)).then(m => m.FormLayoutDemoModule)
      }, {
        path: 'input',
        data: {
          breadcrumb: 'Input'
        },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(4055), __webpack_require__.e(7203), __webpack_require__.e(1693), __webpack_require__.e(2169), __webpack_require__.e(6058), __webpack_require__.e(8057), __webpack_require__.e(6804), __webpack_require__.e(7902), __webpack_require__.e(8592), __webpack_require__.e(3874)]).then(__webpack_require__.bind(__webpack_require__, /*! ./input/inputdemo.module */ 13874)).then(m => m.InputDemoModule)
      }, {
        path: 'invalidstate',
        data: {
          breadcrumb: 'Invalid State'
        },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(4055), __webpack_require__.e(7203), __webpack_require__.e(2226)]).then(__webpack_require__.bind(__webpack_require__, /*! ./invalid/invalidstatedemo.module */ 82226)).then(m => m.InvalidStateDemoModule)
      }, {
        path: 'list',
        data: {
          breadcrumb: 'List'
        },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(1693), __webpack_require__.e(976), __webpack_require__.e(8592), __webpack_require__.e(900)]).then(__webpack_require__.bind(__webpack_require__, /*! ./list/listdemo.module */ 40900)).then(m => m.ListDemoModule)
      }, {
        path: 'media',
        data: {
          breadcrumb: 'Media'
        },
        loadChildren: () => __webpack_require__.e(/*! import() */ 3499).then(__webpack_require__.bind(__webpack_require__, /*! ./media/mediademo.module */ 83499)).then(m => m.MediaDemoModule)
      }, {
        path: 'message',
        data: {
          breadcrumb: 'Message'
        },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(9502), __webpack_require__.e(1254)]).then(__webpack_require__.bind(__webpack_require__, /*! ./messages/messagesdemo.module */ 41254)).then(m => m.MessagesDemoModule)
      }, {
        path: 'misc',
        data: {
          breadcrumb: 'Misc'
        },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(2169), __webpack_require__.e(3658)]).then(__webpack_require__.bind(__webpack_require__, /*! ./misc/miscdemo.module */ 33658)).then(m => m.MiscDemoModule)
      }, {
        path: 'overlay',
        data: {
          breadcrumb: 'Overlay'
        },
        loadChildren: () => __webpack_require__.e(/*! import() */ 3817).then(__webpack_require__.bind(__webpack_require__, /*! ./overlays/overlaysdemo.module */ 83817)).then(m => m.OverlaysDemoModule)
      }, {
        path: 'panel',
        data: {
          breadcrumb: 'Panel'
        },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(1122), __webpack_require__.e(8336), __webpack_require__.e(3315), __webpack_require__.e(8592), __webpack_require__.e(7351)]).then(__webpack_require__.bind(__webpack_require__, /*! ./panels/panelsdemo.module */ 37351)).then(m => m.PanelsDemoModule)
      }, {
        path: 'table',
        data: {
          breadcrumb: 'Table'
        },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(4055), __webpack_require__.e(1693), __webpack_require__.e(6804), __webpack_require__.e(7902), __webpack_require__.e(9795)]).then(__webpack_require__.bind(__webpack_require__, /*! ./table/tabledemo.module */ 89795)).then(m => m.TableDemoModule)
      }, {
        path: 'tree',
        data: {
          breadcrumb: 'Tree'
        },
        loadChildren: () => __webpack_require__.e(/*! import() */ 4551).then(__webpack_require__.bind(__webpack_require__, /*! ./tree/treedemo.module */ 84551)).then(m => m.TreeDemoModule)
      }, {
        path: 'menu',
        data: {
          breadcrumb: 'Menu'
        },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(1122), __webpack_require__.e(74), __webpack_require__.e(8592), __webpack_require__.e(3525)]).then(__webpack_require__.bind(__webpack_require__, /*! ./menus/menus.module */ 93525)).then(m => m.MenusModule)
      }, {
        path: '**',
        redirectTo: '/notfound'
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
    });
  }
  return UIkitRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UIkitRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 83250:
/*!*******************************************************!*\
  !*** ./src/app/demo/components/uikit/uikit.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UIkitModule: () => (/* binding */ UIkitModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _uikit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uikit-routing.module */ 30720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 65879);



let UIkitModule = /*#__PURE__*/(() => {
  class UIkitModule {
    static #_ = this.ɵfac = function UIkitModule_Factory(t) {
      return new (t || UIkitModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UIkitModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _uikit_routing_module__WEBPACK_IMPORTED_MODULE_0__.UIkitRoutingModule]
    });
  }
  return UIkitModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UIkitModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _uikit_routing_module__WEBPACK_IMPORTED_MODULE_0__.UIkitRoutingModule]
  });
})();

/***/ })

}]);