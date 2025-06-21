"use strict";
(self["webpackChunksakai_ng"] = self["webpackChunksakai_ng"] || []).push([[8284],{

/***/ 35054:
/*!***************************************************************************!*\
  !*** ./src/app/demo/components/uikit/charts/chartsdemo-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartsDemoRoutingModule: () => (/* binding */ ChartsDemoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 75187);
/* harmony import */ var _chartsdemo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chartsdemo.component */ 20708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 65879);




let ChartsDemoRoutingModule = /*#__PURE__*/(() => {
  class ChartsDemoRoutingModule {
    static #_ = this.ɵfac = function ChartsDemoRoutingModule_Factory(t) {
      return new (t || ChartsDemoRoutingModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ChartsDemoRoutingModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild([{
        path: '',
        component: _chartsdemo_component__WEBPACK_IMPORTED_MODULE_0__.ChartsDemoComponent
      }]), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
  return ChartsDemoRoutingModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChartsDemoRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 20708:
/*!**********************************************************************!*\
  !*** ./src/app/demo/components/uikit/charts/chartsdemo.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartsDemoComponent: () => (/* binding */ ChartsDemoComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 83620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);
/* harmony import */ var src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/layout/service/app.layout.service */ 43859);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/chart */ 4213);




let ChartsDemoComponent = /*#__PURE__*/(() => {
  class ChartsDemoComponent {
    constructor(layoutService) {
      this.layoutService = layoutService;
      this.subscription = this.layoutService.configUpdate$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.debounceTime)(25)).subscribe(config => {
        this.initCharts();
      });
    }
    ngOnInit() {
      this.initCharts();
    }
    initCharts() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      this.barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: documentStyle.getPropertyValue('--primary-500'),
          borderColor: documentStyle.getPropertyValue('--primary-500'),
          data: [65, 59, 80, 81, 56, 55, 40]
        }, {
          label: 'My Second dataset',
          backgroundColor: documentStyle.getPropertyValue('--primary-200'),
          borderColor: documentStyle.getPropertyValue('--primary-200'),
          data: [28, 48, 40, 19, 86, 27, 90]
        }]
      };
      this.barOptions = {
        plugins: {
          legend: {
            labels: {
              fontColor: textColor
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 500
              }
            },
            grid: {
              display: false,
              drawBorder: false
            }
          },
          y: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          }
        }
      };
      this.pieData = {
        labels: ['A', 'B', 'C'],
        datasets: [{
          data: [540, 325, 702],
          backgroundColor: [documentStyle.getPropertyValue('--indigo-500'), documentStyle.getPropertyValue('--purple-500'), documentStyle.getPropertyValue('--teal-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--indigo-400'), documentStyle.getPropertyValue('--purple-400'), documentStyle.getPropertyValue('--teal-400')]
        }]
      };
      this.pieOptions = {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true,
              color: textColor
            }
          }
        }
      };
      this.lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--primary-500'),
          borderColor: documentStyle.getPropertyValue('--primary-500'),
          tension: 0.4
        }, {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--primary-200'),
          borderColor: documentStyle.getPropertyValue('--primary-200'),
          tension: 0.4
        }]
      };
      this.lineOptions = {
        plugins: {
          legend: {
            labels: {
              fontColor: textColor
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          },
          y: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          }
        }
      };
      this.polarData = {
        datasets: [{
          data: [11, 16, 7, 3],
          backgroundColor: [documentStyle.getPropertyValue('--indigo-500'), documentStyle.getPropertyValue('--purple-500'), documentStyle.getPropertyValue('--teal-500'), documentStyle.getPropertyValue('--orange-500')],
          label: 'My dataset'
        }],
        labels: ['Indigo', 'Purple', 'Teal', 'Orange']
      };
      this.polarOptions = {
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          r: {
            grid: {
              color: surfaceBorder
            }
          }
        }
      };
      this.radarData = {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [{
          label: 'My First dataset',
          borderColor: documentStyle.getPropertyValue('--indigo-400'),
          pointBackgroundColor: documentStyle.getPropertyValue('--indigo-400'),
          pointBorderColor: documentStyle.getPropertyValue('--indigo-400'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('--indigo-400'),
          data: [65, 59, 90, 81, 56, 55, 40]
        }, {
          label: 'My Second dataset',
          borderColor: documentStyle.getPropertyValue('--purple-400'),
          pointBackgroundColor: documentStyle.getPropertyValue('--purple-400'),
          pointBorderColor: documentStyle.getPropertyValue('--purple-400'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('--purple-400'),
          data: [28, 48, 40, 19, 96, 27, 100]
        }]
      };
      this.radarOptions = {
        plugins: {
          legend: {
            labels: {
              fontColor: textColor
            }
          }
        },
        scales: {
          r: {
            grid: {
              color: textColorSecondary
            }
          }
        }
      };
    }
    ngOnDestroy() {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }
    static #_ = this.ɵfac = function ChartsDemoComponent_Factory(t) {
      return new (t || ChartsDemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_layout_service_app_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService));
    };
    static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ChartsDemoComponent,
      selectors: [["ng-component"]],
      decls: 27,
      vars: 12,
      consts: [[1, "grid", "p-fluid"], [1, "col-12", "lg:col-6"], [1, "card"], ["type", "line", 3, "data", "options"], [1, "card", "flex", "flex-column", "align-items-center"], [1, "text-left", "w-full"], ["type", "pie", 3, "data", "options"], ["type", "polarArea", 3, "data", "options"], ["type", "bar", 3, "data", "options"], ["type", "doughnut", 3, "data", "options"], ["type", "radar", 3, "data", "options"]],
      template: function ChartsDemoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Linear Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "p-chart", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "h5", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Pie Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "p-chart", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4)(11, "h5", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Polar Area Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "p-chart", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 1)(15, "div", 2)(16, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Bar Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "p-chart", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 4)(20, "h5", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Doughnut Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "p-chart", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 4)(24, "h5", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Radar Chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "p-chart", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.lineData)("options", ctx.lineOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.pieData)("options", ctx.pieOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.polarData)("options", ctx.polarOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.barData)("options", ctx.barOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.pieData)("options", ctx.pieOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.radarData)("options", ctx.radarOptions);
        }
      },
      dependencies: [primeng_chart__WEBPACK_IMPORTED_MODULE_3__.UIChart],
      encapsulation: 2
    });
  }
  return ChartsDemoComponent;
})();

/***/ }),

/***/ 78284:
/*!*******************************************************************!*\
  !*** ./src/app/demo/components/uikit/charts/chartsdemo.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartsDemoModule: () => (/* binding */ ChartsDemoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 96814);
/* harmony import */ var _chartsdemo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chartsdemo-routing.module */ 35054);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/chart */ 4213);
/* harmony import */ var _chartsdemo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartsdemo.component */ 20708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 65879);





let ChartsDemoModule = /*#__PURE__*/(() => {
  class ChartsDemoModule {
    static #_ = this.ɵfac = function ChartsDemoModule_Factory(t) {
      return new (t || ChartsDemoModule)();
    };
    static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ChartsDemoModule
    });
    static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _chartsdemo_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChartsDemoRoutingModule, primeng_chart__WEBPACK_IMPORTED_MODULE_4__.ChartModule]
    });
  }
  return ChartsDemoModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ChartsDemoModule, {
    declarations: [_chartsdemo_component__WEBPACK_IMPORTED_MODULE_1__.ChartsDemoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _chartsdemo_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChartsDemoRoutingModule, primeng_chart__WEBPACK_IMPORTED_MODULE_4__.ChartModule]
  });
})();

/***/ }),

/***/ 83620:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounceTime: () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 16321);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 79360);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 8251);



function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let activeTask = null;
    let lastValue = null;
    let lastTime = null;
    const emit = () => {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };
    function emitWhenIdle() {
      const targetTime = lastTime + dueTime;
      const now = scheduler.now();
      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }
      emit();
    }
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      lastValue = value;
      lastTime = scheduler.now();
      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, () => {
      emit();
      subscriber.complete();
    }, undefined, () => {
      lastValue = activeTask = null;
    }));
  });
}
//# sourceMappingURL=debounceTime.js.map

/***/ })

}]);